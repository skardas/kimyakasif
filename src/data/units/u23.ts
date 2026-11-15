import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit23: ChemistryUnitSeedData = {
  "id": "u23",
  "order": 23,
  "exam": "AYT",
  "grade": 12,
  "title": {
    "tr": "Karbon Kimyasına Giriş",
    "en": "Introduction to Carbon Chemistry",
    "de": "Einführung in die Kohlenstoffchemie",
    "fr": "Introduction à la Chimie du Carbone",
    "ru": "Введение в химию углерода",
    "ar": "مقدمة في كيمياء الكربون",
    "zh": "碳化学导论",
    "ku": "Destpêka Kîmyaya Karbonê"
  },
  "subtitle": {
    "tr": "Allotroplar, Hibritleşme, Sigma/Pi ve VSEPR",
    "en": "Hybridization, VSEPR Geometries & Graphene",
    "de": "Allotrope, Hybridisierung, Sigma/Pi und VSEPR",
    "fr": "Allotropes, hybridation, Sigma/Pi et VSEPR",
    "ru": "Аллотропия, гибридизация, σ- и π-связи, теория VSEPR",
    "ar": "المتآصلات والتهجين وروابط سيجما/باي وVSEPR",
    "zh": "同素异形体、杂化、σ键/π键与 VSEPR",
    "ku": "Allotrop, Hîbrîdîzasyon, Sigma/Pî û VSEPR"
  },
  "facts": [
    {
      "id": "u23-f01",
      "fact": {
        "tr": "Wöhler, 1828'de anorganik bir madde olan amonyum siyanatı (NH4OCN) ısıtarak laboratuvarda üre sentezlemiştir; bu deney yaşam gücü (vitalizm) teorisini sarsan ilk önemli kanıt olmuştur.",
        "en": "In 1828 Wöhler synthesized urea in the laboratory by heating ammonium cyanate (NH4OCN), an inorganic substance; this experiment was the first important evidence that shook the vital force (vitalism) theory.",
        "de": "Wöhler synthetisierte 1828 im Labor Harnstoff durch Erhitzen von Ammoniumcyanat (NH4OCN), einem anorganischen Stoff; dieser Versuch war der erste wichtige Beleg, der die Lebenskrafttheorie (Vitalismus) erschütterte.",
        "fr": "En 1828, Wöhler a synthétisé de l'urée au laboratoire en chauffant du cyanate d'ammonium (NH4OCN), une substance inorganique ; cette expérience fut la première preuve importante qui ébranla la théorie de la force vitale (vitalisme).",
        "ru": "В 1828 году Вёлер синтезировал в лаборатории мочевину нагреванием неорганического вещества — цианата аммония (NH4OCN); этот опыт стал первым важным доводом, поколебавшим теорию жизненной силы (витализм).",
        "ar": "في عام 1828 حضّر فولر اليوريا في المختبر بتسخين سيانات الأمونيوم (NH4OCN)، وهي مادة غير عضوية؛ وكانت هذه التجربة أول دليل مهم زعزع نظرية القوة الحيوية.",
        "zh": "1828 年，维勒通过加热无机物氰酸铵(NH4OCN)在实验室合成了尿素；这一实验是动摇生命力论的第一个重要证据。",
        "ku": "Wöhler di sala 1828an de bi germkirina amonyûm sîyanatê (NH4OCN), ku madeyeke anorganîk e, di laboratuwarê de ure sentez kir; ev ceribandin yekem delîla girîng bû ku teoriya hêza jiyanê (vîtalîzm) hejand."
      },
      "trap": {
        "tr": "Wöhler, üreyi canlı bir organizmadan (idrardan) elde ederek yaşam gücü (vitalizm) teorisini doğrulamıştır.",
        "en": "Wöhler obtained urea from a living organism (urine) and thereby confirmed the vital force (vitalism) theory.",
        "de": "Wöhler gewann Harnstoff aus einem Lebewesen (Urin) und bestätigte damit die Lebenskraftlehre (Vitalismus).",
        "fr": "Wöhler a obtenu l'urée à partir d'un être vivant (l'urine) et a ainsi confirmé la théorie de la force vitale (vitalisme).",
        "ru": "Вёлер получил мочевину из живого организма (из мочи) и тем самым подтвердил теорию жизненной силы (витализм).",
        "ar": "حصل فولر على اليوريا من كائن حي (من البول) فأكّد بذلك نظرية القوة الحيوية.",
        "zh": "维勒从生物体（尿液）中得到了尿素，从而证实了生命力学说（活力论）。",
        "ku": "Wöhler ure ji zindiyekî (mîzê) bi dest xist û bi vî awayî teoriya hêza jiyanê (vîtalîzm) piştrast kir."
      },
      "whyTrapIsFalse": {
        "tr": "Wöhler üreyi canlı bir kaynaktan değil, anorganik amonyum siyanatı ısıtarak laboratuvarda sentezlemiştir. Bu deney organik bir maddenin yaşam gücü olmadan da elde edilebileceğini gösterdiği için vitalizmi doğrulamamış, aksine sarsmıştır.",
        "en": "Wöhler did not take urea from a living source; he synthesised it in the laboratory by heating inorganic ammonium cyanate. Because the experiment showed that an organic substance can be made without a vital force, it shook vitalism rather than confirming it.",
        "de": "Wöhler gewann den Harnstoff nicht aus einem Lebewesen, sondern synthetisierte ihn im Labor durch Erhitzen von anorganischem Ammoniumcyanat. Da der Versuch zeigte, dass ein organischer Stoff ohne Lebenskraft entstehen kann, erschütterte er den Vitalismus, statt ihn zu bestätigen.",
        "fr": "Wöhler n'a pas tiré l'urée d'un être vivant : il l'a synthétisée au laboratoire en chauffant du cyanate d'ammonium, un composé inorganique. Comme l'expérience montrait qu'une substance organique peut être obtenue sans force vitale, elle a ébranlé le vitalisme au lieu de le confirmer.",
        "ru": "Вёлер получил мочевину не из живого источника, а синтезировал её в лаборатории, нагревая неорганический цианат аммония. Опыт показал, что органическое вещество можно получить без «жизненной силы», поэтому он не подтвердил, а пошатнул витализм.",
        "ar": "لم يحصل فولر على اليوريا من مصدر حي، بل صنّعها في المختبر بتسخين سيانات الأمونيوم غير العضوية. ولأن التجربة أظهرت أن مادة عضوية يمكن الحصول عليها دون قوة حيوية، فقد زعزعت نظرية القوة الحيوية بدل أن تؤكدها.",
        "zh": "维勒不是从生物体中取得尿素，而是在实验室中加热无机物氰酸铵合成了尿素。该实验表明有机物无需“生命力”也能制得，因此它动摇而不是证实了活力论。",
        "ku": "Wöhler ure ne ji çavkaniyeke zindî, lê bi germkirina amonyûm sîyanata anorganîk di laboratuvarê de sentez kir. Ji ber ku ceribandinê nîşan da ku madeyeke organîk bêyî hêza jiyanê jî dikare bê bidestxistin, vîtalîzm piştrast nekir, berevajî wê hejand."
      }
    },
    {
      "id": "u23-f02",
      "fact": {
        "tr": "Karbon atomu uyarılmış hâlde 4 yarı dolu orbitale sahip olur ve hibritleşerek organik bileşiklerinde 4 kovalent bağ yapar.",
        "en": "In its excited state the carbon atom has 4 half-filled orbitals, and through hybridization it forms 4 covalent bonds in its organic compounds.",
        "de": "Im angeregten Zustand besitzt das Kohlenstoffatom 4 halb besetzte Orbitale und bildet durch Hybridisierung in seinen organischen Verbindungen 4 kovalente Bindungen.",
        "fr": "À l'état excité, l'atome de carbone possède 4 orbitales à moitié remplies et, par hybridation, forme 4 liaisons covalentes dans ses composés organiques.",
        "ru": "В возбуждённом состоянии атом углерода имеет 4 наполовину заполненные орбитали и за счёт гибридизации образует в органических соединениях 4 ковалентные связи.",
        "ar": "تمتلك ذرة الكربون في الحالة المثارة 4 أفلاك نصف ممتلئة، وتكوّن بالتهجين 4 روابط تساهمية في مركباتها العضوية.",
        "zh": "碳原子在激发态有 4 个半充满轨道，通过杂化在有机化合物中形成 4 个共价键。",
        "ku": "Atoma karbonê di rewşa heyecanî de 4 orbîtalên nîvdagirtî hene û bi hîbrîdbûnê di pêkhateyên xwe yên organîk de 4 girêdanên kovalent çêdike."
      },
      "trap": {
        "tr": "Karbon atomu bileşiklerinde en fazla 2 kovalent bağ yapabilir.",
        "en": "Carbon atoms can form a maximum of 2 covalent bonds in their compounds.",
        "de": "Kohlenstoffatome können in ihren Verbindungen maximal 2 kovalente Bindungen eingehen.",
        "fr": "Les atomes de carbone peuvent former au maximum 2 liaisons covalentes dans leurs composés.",
        "ru": "Атом углерода в соединениях может образовывать не более двух ковалентных связей.",
        "ar": "لا تكوّن ذرة الكربون في مركباتها أكثر من رابطتين تساهميتين.",
        "zh": "碳原子在其化合物中最多可形成 2 个共价键。",
        "ku": "Atoma karbonê di pêkhateyên xwe de herî zêde dikare 2 girêdanên kovalent çêke."
      },
      "whyTrapIsFalse": {
        "tr": "2 bağ yanılgısı, karbonun temel hâldeki yalnızca 2 yarı dolu p orbitaline bakılmasından doğar; bir 2s elektronu 2p'ye uyarılıp hibritleşme olunca 4 yarı dolu orbital oluşur ve karbon 4 bağ yapar (CH4).",
        "en": "The '2 bonds' idea comes from looking only at carbon's 2 half-filled p orbitals in the ground state; after a 2s electron is promoted to 2p and hybridization occurs, there are 4 half-filled orbitals and carbon forms 4 bonds (CH4).",
        "de": "Die Vorstellung von „2 Bindungen“ entsteht, wenn man nur die 2 halb besetzten p-Orbitale im Grundzustand betrachtet; nach Anhebung eines 2s-Elektrons in ein 2p-Orbital und Hybridisierung gibt es 4 halb besetzte Orbitale, und Kohlenstoff bildet 4 Bindungen (CH4).",
        "fr": "L'idée de « 2 liaisons » vient de ce que l'on ne regarde que les 2 orbitales p à moitié remplies de l'état fondamental ; après promotion d'un électron 2s vers 2p et hybridation, il y a 4 orbitales à moitié remplies et le carbone forme 4 liaisons (CH4).",
        "ru": "Заблуждение о двух связях возникает, если учитывать только две наполовину заполненные p-орбитали основного состояния; после перехода одного 2s-электрона на 2p-подуровень и гибридизации образуются 4 наполовину заполненные орбитали, и углерод образует 4 связи (CH4).",
        "ar": "ينشأ خطأ «الرابطتين» من النظر فقط إلى مداري p نصف الممتلئين في الحالة الأساسية؛ فبعد إثارة إلكترون من 2s إلى 2p وحدوث التهجين تتكون 4 مدارات نصف ممتلئة ويكوّن الكربون 4 روابط (CH4).",
        "zh": "“只能形成2个键”的错误来自只看基态碳的2个半充满p轨道；一个2s电子激发到2p并发生杂化后，有4个半充满轨道，碳形成4个键(如CH4)。",
        "ku": "Şaşiya 2 girêdanan ji wê tê ku tenê li 2 orbîtalên p ên nîvtijî yên karbonê di rewşa bingehîn de tê nêrîn; piştî ku elektroneke 2s derbasî 2p dibe û hîbrîdîzasyon çêdibe, 4 orbîtalên nîvtijî çêdibin û karbon 4 girêdanan çêdike (CH4)."
      }
    },
    {
      "id": "u23-f03",
      "fact": {
        "tr": "Elmas, karbon atomlarının sp3 hibritleşmesi yaptığı, düzgün dörtyüzlü ağ örgülü, elektriği iletmeyen en sert doğal maddedir.",
        "en": "Diamond is the hardest natural substance with sp3 hybridization of carbon atoms, a regular tetrahedral network, and does not conduct electricity.",
        "de": "Diamant ist die härteste natürliche Substanz mit sp3-Hybridisierung von Kohlenstoffatomen, einem regelmäßigen tetraedrischen Netzwerk und leitet keinen Strom.",
        "fr": "Le diamant est la substance naturelle la plus dure avec une hybridation sp3 d'atomes de carbone, un réseau tétraédrique régulier, et ne conduit pas l'électricité.",
        "ru": "Алмаз — самое твёрдое природное вещество: атомы углерода в нём находятся в sp3-гибридизации и образуют правильную тетраэдрическую сетку; алмаз не проводит электрический ток.",
        "ar": "الماس أصلب مادة طبيعية، تكون فيه ذرات الكربون مهجنة sp3 ومرتبة في شبكة رباعية الأوجه منتظمة، ولا يوصل الكهرباء.",
        "zh": "金刚石是天然存在的最硬物质，碳原子为 sp3 杂化，形成正四面体空间网状结构，不导电。",
        "ku": "Elmas madeya xwezayî ya herî hişk e: tê de atomên karbonê hîbrîdîzasyona sp3 dikin, toreke tetrahedral a rêkûpêk çêdikin û elektrîkê naguhezînin."
      },
      "trap": {
        "tr": "Elmas elektriği çok iyi iletir ve grafit kadar yumuşaktır.",
        "en": "Diamond conducts electricity very well and is as soft as graphite.",
        "de": "Diamant leitet Elektrizität sehr gut und ist so weich wie Graphit.",
        "fr": "Le diamant conduit très bien l'électricité et est aussi doux que le graphite.",
        "ru": "Алмаз очень хорошо проводит электрический ток и мягок, как графит.",
        "ar": "يوصل الماس الكهرباء جيدًا جدًا، وهو طري مثل الجرافيت.",
        "zh": "金刚石导电性很好，并且像石墨一样质软。",
        "ku": "Elmas elektrîkê pir baş diguhezîne û wek grafîtê nerm e."
      },
      "whyTrapIsFalse": {
        "tr": "Elmasta her C atomu dört C atomuna sp3 ile bağlıdır; hareketli (serbest) elektron kalmadığı için elektriği iletmez ve üç boyutlu güçlü kovalent ağ onu çok sert yapar. İletkenlik ve yumuşaklık grafite aittir.",
        "en": "In diamond each C atom is bonded to four C atoms through sp3 orbitals; no mobile (free) electrons remain, so it does not conduct, and the strong three-dimensional covalent network makes it very hard. Conductivity and softness belong to graphite.",
        "de": "Im Diamanten ist jedes C-Atom über sp3-Orbitale an vier C-Atome gebunden; es bleiben keine beweglichen Elektronen übrig, daher leitet er nicht, und das starke dreidimensionale kovalente Netz macht ihn sehr hart. Leitfähigkeit und Weichheit gehören zum Graphit.",
        "fr": "Dans le diamant, chaque atome de C est lié à quatre atomes de C par des orbitales sp3 ; il ne reste aucun électron mobile, donc il ne conduit pas, et le réseau covalent tridimensionnel solide le rend très dur. Conductivité et tendreté sont propres au graphite.",
        "ru": "В алмазе каждый атом C связан с четырьмя атомами C за счёт sp3-орбиталей; подвижных электронов не остаётся, поэтому алмаз не проводит ток, а прочная трёхмерная ковалентная сетка делает его очень твёрдым. Электропроводность и мягкость — свойства графита.",
        "ar": "في الماس ترتبط كل ذرة C بأربع ذرات C عبر مدارات sp3؛ فلا تبقى إلكترونات حرة الحركة ولذلك لا يوصل الكهرباء، والشبكة التساهمية الثلاثية الأبعاد القوية تجعله شديد الصلابة. أما التوصيل والليونة فمن خصائص الجرافيت.",
        "zh": "金刚石中每个碳原子以sp3杂化轨道与四个碳原子成键，没有可自由移动的电子，所以不导电；牢固的三维共价网络使它非常坚硬。导电和质软是石墨的性质。",
        "ku": "Di elmasê de her atoma C bi orbîtalên sp3 bi çar atomên C ve girêdayî ye; elektronên tevgerbar (azad) namînin, loma elektrîkê naguhezîne, û tora kovalent a sêdîmensî ya bihêz wê pir hişk dike. Guhêzbarî û nermî taybetmendiyên grafîtê ne."
      }
    },
    {
      "id": "u23-f04",
      "fact": {
        "tr": "Grafit, karbon atomlarının sp2 hibritleşmesi yaptığı altıgen tabakalı yapıdır; serbest pi elektronları sayesinde elektriği iletir.",
        "en": "Graphite is a hexagonal layered structure in which carbon atoms undergo sp2 hybridization; It conducts electricity thanks to its free pi electrons.",
        "de": "Graphit ist eine hexagonale Schichtstruktur, in der Kohlenstoffatome einer sp2-Hybridisierung unterliegen. Dank seiner freien Pi-Elektronen leitet es Strom.",
        "fr": "Le graphite est une structure en couches hexagonale dans laquelle les atomes de carbone subissent une hybridation sp2 ; Il conduit l’électricité grâce à ses électrons pi libres.",
        "ru": "Графит имеет слоистое строение из шестиугольных колец, атомы углерода в нём находятся в sp2-гибридизации; благодаря подвижным π-электронам графит проводит электрический ток.",
        "ar": "الجرافيت بنية من طبقات سداسية تكون فيها ذرات الكربون مهجنة sp2؛ ويوصل الكهرباء بفضل إلكترونات باي الحرة.",
        "zh": "石墨中碳原子为 sp2 杂化，呈六方层状结构；由于存在可自由移动的π电子，石墨能导电。",
        "ku": "Grafît avahiyeke qatqatî ya şeşgoşeyî ye ku tê de atomên karbonê hîbrîdîzasyona sp2 dikin; bi saya elektronên pî yên azad elektrîkê diguhezîne."
      },
      "trap": {
        "tr": "Grafitte her karbon atomu dört komşu karbon atomuna bağlı olduğundan grafit elektriği iletmez.",
        "en": "In graphite each carbon atom is bonded to four neighbouring carbon atoms, so graphite does not conduct electricity.",
        "de": "Im Graphit ist jedes Kohlenstoffatom an vier benachbarte Kohlenstoffatome gebunden, daher leitet Graphit keinen Strom.",
        "fr": "Dans le graphite, chaque atome de carbone est lié à quatre atomes de carbone voisins ; le graphite ne conduit donc pas l'électricité.",
        "ru": "В графите каждый атом углерода связан с четырьмя соседними атомами углерода, поэтому графит не проводит электрический ток.",
        "ar": "في الغرافيت ترتبط كل ذرة كربون بأربع ذرات كربون مجاورة، لذلك لا يوصل الغرافيت الكهرباء.",
        "zh": "石墨中每个碳原子与四个相邻碳原子相连，所以石墨不导电。",
        "ku": "Di grafîtê de her atomeke karbonê bi çar atomên karbonê yên cîran ve girêdayî ye, ji ber vê grafît elektrîkê naguhêze."
      },
      "whyTrapIsFalse": {
        "tr": "Grafitte her C atomu yalnızca üç komşuya sp2 ile bağlanır; dördüncü değerlik elektronu tabaka boyunca hareket edebilen pi elektronudur. Bu yüzden grafit elektriği iletir ve elektrot olarak kullanılır. Dört komşuya bağlı, iletken olmayan allotrop elmastır.",
        "en": "In graphite each C atom is bonded to only three neighbours through sp2 orbitals; the fourth valence electron is a pi electron that can move along the layer. That is why graphite conducts electricity and is used for electrodes. The non-conducting allotrope with four neighbours per atom is diamond.",
        "de": "Im Graphit ist jedes C-Atom über sp2-Orbitale nur an drei Nachbarn gebunden; das vierte Valenzelektron ist ein pi-Elektron, das sich entlang der Schicht bewegen kann. Deshalb leitet Graphit und wird für Elektroden verwendet. Das nichtleitende Allotrop mit vier Nachbarn pro Atom ist Diamant.",
        "fr": "Dans le graphite, chaque atome C n'est lié qu'à trois voisins par des orbitales sp2 ; le quatrième électron de valence est un électron pi mobile le long du feuillet. C'est pourquoi le graphite conduit l'électricité et sert d'électrode. L'allotrope isolant à quatre voisins par atome est le diamant.",
        "ru": "В графите каждый атом C связан sp2-орбиталями только с тремя соседями; четвёртый валентный электрон — пи-электрон, способный перемещаться вдоль слоя. Поэтому графит проводит ток и используется для электродов. Непроводящая модификация с четырьмя соседями у каждого атома — алмаз.",
        "ar": "في الغرافيت ترتبط كل ذرة C بثلاث ذرات مجاورة فقط عبر أفلاك sp2؛ أما إلكترون التكافؤ الرابع فهو إلكترون باي يستطيع التحرك على امتداد الطبقة. لذلك يوصل الغرافيت الكهرباء ويُستخدم في صنع الأقطاب. والمتآصل غير الموصل الذي ترتبط فيه كل ذرة بأربع ذرات هو الألماس.",
        "zh": "石墨中每个 C 原子只通过 sp2 轨道与三个相邻原子成键；第四个价电子是能沿层面移动的 π 电子。因此石墨能导电，可用作电极。每个原子与四个原子相连、不导电的同素异形体是金刚石。",
        "ku": "Di grafîtê de her atomeke C tenê bi sê cîranan re bi sp2 girê dide; elektrona valansê ya çaremîn elektroneke pî ye ku dikare li ser çînê bilive. Ji ber vê grafît elektrîkê diguhêze û wek elektrod tê bikaranîn. Alotropa ne-guhêzbar a ku her atom bi çar cîranan ve girêdayî ye elmas e."
      }
    },
    {
      "id": "u23-f05",
      "fact": {
        "tr": "Grafen, karbon atomlarının tek atom kalınlığında iki boyutlu bal peteği örgüsüdür; bilinen en dayanıklı malzemelerden biridir, esnektir ve elektriği çok iyi iletir.",
        "en": "Graphene is a one-atom-thick two-dimensional honeycomb lattice of carbon atoms; it is one of the strongest known materials, it is flexible and it conducts electricity very well.",
        "de": "Graphen ist ein ein Atom dickes zweidimensionales Wabengitter aus Kohlenstoffatomen; es gehört zu den festesten bekannten Materialien, ist flexibel und leitet den elektrischen Strom sehr gut.",
        "fr": "Le graphène est un réseau en nid d'abeilles bidimensionnel, d'un atome d'épaisseur, formé d'atomes de carbone ; c'est l'un des matériaux les plus résistants connus, il est flexible et conduit très bien l'électricité.",
        "ru": "Графен — двумерная сотовая решётка из атомов углерода толщиной в один атом; это один из самых прочных известных материалов, он гибок и очень хорошо проводит электрический ток.",
        "ar": "الجرافين شبكة سداسية (عسلية) ثنائية الأبعاد من ذرات الكربون سمكها ذرة واحدة؛ وهو من أقوى المواد المعروفة، مرن، ويوصل الكهرباء جيدًا جدًا.",
        "zh": "石墨烯是由碳原子构成的单原子厚的二维蜂窝状晶格；它是已知强度最高的材料之一，具有柔韧性，导电性非常好。",
        "ku": "Grafen tora şaneşaneyî ya dudîmensî ya atomên karbonê ye ku stûriya wê yek atom e; yek ji materyalên herî bihêz ên naskirî ye, nermok e û elektrîkê pir baş diguhezîne."
      },
      "trap": {
        "tr": "Grafende karbon atomları sp3 hibritleşmesi yaptığından grafen elektriği iletmez.",
        "en": "In graphene the carbon atoms are sp3 hybridized, so graphene does not conduct electricity.",
        "de": "Im Graphen sind die Kohlenstoffatome sp3-hybridisiert, daher leitet Graphen keinen Strom.",
        "fr": "Dans le graphène, les atomes de carbone sont hybridés sp3 ; le graphène ne conduit donc pas l'électricité.",
        "ru": "В графене атомы углерода находятся в sp3-гибридизации, поэтому графен не проводит ток.",
        "ar": "في الغرافين تكون ذرات الكربون مهجّنة sp3، لذلك لا يوصل الغرافين الكهرباء.",
        "zh": "石墨烯中的碳原子为 sp3 杂化，所以石墨烯不导电。",
        "ku": "Di grafenê de atomên karbonê sp3 hîbrîd in, ji ber vê grafen elektrîkê naguhêze."
      },
      "whyTrapIsFalse": {
        "tr": "Grafende her C atomu üç komşuya bağlıdır ve sp2 hibritleşmesi yapar; hibritleşmeye katılmayan p orbitallerindeki pi elektronları tabaka boyunca hareket edebildiği için grafen elektriği çok iyi iletir.",
        "en": "In graphene each C atom is bonded to three neighbours and is sp2 hybridized; the pi electrons in the unhybridized p orbitals can move across the sheet, so graphene is an excellent electrical conductor.",
        "de": "Im Graphen ist jedes C-Atom an drei Nachbarn gebunden und sp2-hybridisiert; die pi-Elektronen in den nicht hybridisierten p-Orbitalen können sich über die Schicht bewegen, daher leitet Graphen sehr gut.",
        "fr": "Dans le graphène, chaque atome C est lié à trois voisins et hybridé sp2 ; les électrons pi des orbitales p non hybridées se déplacent dans le feuillet, d'où une excellente conductivité électrique.",
        "ru": "В графене каждый атом C связан с тремя соседями и находится в sp2-гибридизации; пи-электроны негибридизованных p-орбиталей могут перемещаться по слою, поэтому графен прекрасно проводит ток.",
        "ar": "في الغرافين ترتبط كل ذرة C بثلاث ذرات مجاورة وتكون مهجّنة sp2؛ وتستطيع إلكترونات باي في أفلاك p غير المهجّنة أن تتحرك على امتداد الطبقة، لذلك يوصل الغرافين الكهرباء جيدًا جدًا.",
        "zh": "石墨烯中每个 C 原子与三个相邻原子相连，为 sp2 杂化；未参与杂化的 p 轨道中的 π 电子可在整个片层中移动，因此石墨烯导电性极好。",
        "ku": "Di grafenê de her atomeke C bi sê cîranan ve girêdayî ye û sp2 hîbrîd e; elektronên pî yên di orbîtalên p ên ne-hîbrîd de dikarin li ser çînê bilivin, ji ber vê grafen elektrîkê pir baş diguhêze."
      }
    },
    {
      "id": "u23-f06",
      "fact": {
        "tr": "Fullerenler (örn. futbol topu biçimli C60) karbon atomlarının beşgen ve altıgen halkalarla oluşturduğu kafes yapılı allotroplardır; doğada çok az bulunur, çoğunlukla laboratuvarda sentezlenir.",
        "en": "Fullerenes (e.g., the football-shaped C60) are cage-like carbon allotropes built from pentagonal and hexagonal rings; they occur only in tiny amounts in nature and are mostly synthesized in the laboratory.",
        "de": "Fullerene (z. B. das fußballförmige C60) sind käfigartige Kohlenstoffallotrope aus Fünf- und Sechsringen; sie kommen in der Natur nur in Spuren vor und werden meist im Labor hergestellt.",
        "fr": "Les fullerènes (par ex. le C60 en forme de ballon de football) sont des allotropes du carbone en forme de cage, formés de cycles pentagonaux et hexagonaux ; on les trouve en très faibles quantités dans la nature et ils sont surtout synthétisés en laboratoire.",
        "ru": "Фуллерены (например, C60 в форме футбольного мяча) — каркасные аллотропные модификации углерода из пяти- и шестичленных циклов; в природе встречаются в ничтожных количествах и в основном синтезируются в лаборатории.",
        "ar": "الفوليرينات (مثل C60 الشبيه بكرة القدم) متآصلات كربونية قفصية البنية تتكون من حلقات خماسية وسداسية؛ توجد في الطبيعة بكميات ضئيلة جدًا وتُحضّر غالبًا في المختبر.",
        "zh": "富勒烯(如足球状的 C60)是由五元环和六元环构成的笼状碳同素异形体；在自然界中含量极少，主要在实验室合成。",
        "ku": "Fûleren (mînak C60 a bi şiklê topa futbolê) allotropên karbonê yên qefesî ne ku ji xelekên pêncgoşe û şeşgoşe pêk tên; di xwezayê de pir hindik hene û bi piranî di laboratuwarê de têne sentezkirin."
      },
      "trap": {
        "tr": "Fullerenler doğada madenlerde kristal halde bolca bulunur.",
        "en": "Fullerenes are found abundantly in crystal form in minerals in nature.",
        "de": "Fullerene kommen in der Natur reichlich in Kristallform in Mineralien vor.",
        "fr": "Les fullerènes se trouvent en abondance sous forme cristalline dans les minéraux naturels.",
        "ru": "Фуллерены в больших количествах встречаются в природе в виде кристаллов в рудных месторождениях.",
        "ar": "توجد الفوليرينات بكثرة في الطبيعة على هيئة بلورات في المناجم.",
        "zh": "富勒烯在自然界的矿物中以晶体形式大量存在。",
        "ku": "Fûleren di xwezayê de di kanzayan de bi şiklê krîstal pir têne dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Fullerenler doğada ancak is, yıldırım gibi yüksek enerjili ortamlarda çok az miktarda oluşur; bol bulunan maden yatakları yoktur ve kullanılan fullerenlerin çoğu laboratuvarda üretilir.",
        "en": "In nature fullerenes form only in very small amounts in high-energy settings such as soot or lightning; there are no abundant mineral deposits of them, and most fullerenes in use are made in the laboratory.",
        "de": "In der Natur entstehen Fullerene nur in sehr kleinen Mengen in energiereichen Umgebungen wie Ruß oder Blitzeinschlägen; es gibt keine reichen Lagerstätten, und die meisten genutzten Fullerene werden im Labor hergestellt.",
        "fr": "Dans la nature, les fullerènes ne se forment qu'en très faibles quantités dans des milieux très énergétiques comme la suie ou la foudre ; il n'en existe pas de gisements abondants et la plupart des fullerènes utilisés sont fabriqués au laboratoire.",
        "ru": "В природе фуллерены образуются лишь в очень малых количествах в высокоэнергетических условиях, например в саже или при ударе молнии; богатых месторождений нет, и большинство используемых фуллеренов получают в лаборатории.",
        "ar": "لا تتكون الفوليرينات في الطبيعة إلا بكميات ضئيلة جدًا في أوساط عالية الطاقة كالسخام أو البرق؛ وليس لها رواسب معدنية وفيرة، ومعظم الفوليرينات المستخدمة تُحضَّر في المختبر.",
        "zh": "自然界中富勒烯只在烟灰、闪电等高能环境中少量生成；不存在丰富的矿床，使用的富勒烯大多是在实验室制得的。",
        "ku": "Di xwezayê de fûleren tenê di cihên bi enerjiya bilind ên wek dûde an birûskê de bi mîqdarên pir kêm çêdibin; kanzayên wan ên dewlemend tune ne û piraniya fûlerenên tên bikaranîn di laboratuwarê de têne çêkirin."
      }
    },
    {
      "id": "u23-f07",
      "fact": {
        "tr": "İki atom arasındaki tekli bağ bir sigma (σ) bağıdır; ikili bağ bir sigma ve bir pi (π), üçlü bağ ise bir sigma ve iki pi bağından oluşur.",
        "en": "A single bond between two atoms is one sigma (σ) bond; a double bond consists of one sigma and one pi (π) bond, and a triple bond of one sigma and two pi bonds.",
        "de": "Eine Einfachbindung zwischen zwei Atomen ist eine Sigma-(σ-)Bindung; eine Doppelbindung besteht aus einer Sigma- und einer Pi-(π-)Bindung, eine Dreifachbindung aus einer Sigma- und zwei Pi-Bindungen.",
        "fr": "Une liaison simple entre deux atomes est une liaison sigma (σ) ; une liaison double comprend une liaison sigma et une liaison pi (π), une liaison triple une liaison sigma et deux liaisons pi.",
        "ru": "Одинарная связь между двумя атомами — это одна сигма-(σ)-связь; двойная связь состоит из одной сигма- и одной пи-(π)-связи, тройная — из одной сигма- и двух пи-связей.",
        "ar": "الرابطة الأحادية بين ذرتين رابطة سيغما (σ) واحدة؛ والرابطة الثنائية تتكون من رابطة سيغما ورابطة باي (π)، والثلاثية من رابطة سيغما ورابطتي باي.",
        "zh": "两个原子之间的单键是一个 σ 键；双键由一个 σ 键和一个 π 键组成，三键由一个 σ 键和两个 π 键组成。",
        "ku": "Girêdana yekane ya di navbera du atoman de girêdaneke sîgma (σ) ye; girêdana ducar ji yek sîgma û yek pî (π), girêdana sêcar jî ji yek sîgma û du pî pêk tê."
      },
      "trap": {
        "tr": "Üçlü bağ iki sigma ve bir pi bağından oluşur.",
        "en": "A triple bond consists of two sigma bonds and one pi bond.",
        "de": "Eine Dreifachbindung besteht aus zwei Sigma-Bindungen und einer Pi-Bindung.",
        "fr": "Une liaison triple est formée de deux liaisons sigma et d'une liaison pi.",
        "ru": "Тройная связь состоит из двух сигма-связей и одной пи-связи.",
        "ar": "تتكون الرابطة الثلاثية من رابطتي سيغما ورابطة باي واحدة.",
        "zh": "三键由两个 σ 键和一个 π 键组成。",
        "ku": "Girêdana sêcar ji du girêdanên sîgma û yek girêdana pî pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Sigma bağı, orbitallerin iki çekirdeği birleştiren eksen boyunca uç uca örtüşmesiyle oluşur ve bu eksende yalnızca bir örtüşme mümkündür. Bu yüzden iki atom arasında en fazla bir sigma bağı bulunur; üçlü bağın diğer iki bağı p orbitallerinin yan yana örtüşmesiyle oluşan pi bağlarıdır.",
        "en": "A sigma bond forms by end-to-end overlap of orbitals along the axis joining the two nuclei, and only one such overlap is possible along that axis. So two atoms can share at most one sigma bond; the other two bonds of a triple bond are pi bonds formed by side-by-side overlap of p orbitals.",
        "de": "Eine Sigma-Bindung entsteht durch Überlappung der Orbitale entlang der Kernverbindungsachse, und entlang dieser Achse ist nur eine solche Überlappung möglich. Zwischen zwei Atomen gibt es daher höchstens eine Sigma-Bindung; die beiden anderen Bindungen einer Dreifachbindung sind Pi-Bindungen aus seitlich überlappenden p-Orbitalen.",
        "fr": "Une liaison sigma résulte du recouvrement axial des orbitales le long de l'axe qui joint les deux noyaux, et un seul recouvrement de ce type est possible sur cet axe. Deux atomes partagent donc au plus une liaison sigma ; les deux autres liaisons d'une triple liaison sont des liaisons pi issues du recouvrement latéral d'orbitales p.",
        "ru": "Сигма-связь образуется при перекрывании орбиталей вдоль оси, соединяющей ядра, а вдоль этой оси возможно только одно такое перекрывание. Поэтому между двумя атомами может быть не более одной сигма-связи; две другие связи тройной связи — пи-связи, образованные боковым перекрыванием p-орбиталей.",
        "ar": "تتكون رابطة سيغما من تداخل الأفلاك رأسًا لرأس على المحور الواصل بين النواتين، ولا يمكن على هذا المحور إلا تداخل واحد. لذلك لا يوجد بين ذرتين أكثر من رابطة سيغما واحدة؛ أما الرابطتان الأخريان في الرابطة الثلاثية فهما رابطتا باي ناتجتان عن التداخل الجانبي لأفلاك p.",
        "zh": "σ 键由轨道沿两核连线方向“头碰头”重叠形成，而沿这条轴只能有一次这样的重叠。所以两个原子之间最多只有一个 σ 键；三键中另外两个键是 p 轨道“肩并肩”重叠形成的 π 键。",
        "ku": "Girêdana sîgma bi lihevketina orbîtalan a ser bi ser li ser eksena ku her du navikan digihîne hev çêdibe, û li ser vê eksenê tenê lihevketinek mimkun e. Ji ber vê di navbera du atoman de herî zêde girêdanek sîgma heye; du girêdanên din ên girêdana sêcar girêdanên pî ne ku bi lihevketina kêlekî ya orbîtalên p çêdibin."
      }
    },
    {
      "id": "u23-f08",
      "fact": {
        "tr": "Sigma bağı orbitallerin uç uca örtüşmesiyle, pi bağı paralel (yan yana) örtüşmesiyle oluşur; sigma bağı pi bağından daha sağlamdır.",
        "en": "Sigma bond is formed by overlapping orbitals end to end, pi bond is formed by parallel (side by side) overlap; The sigma bond is stronger than the pi bond.",
        "de": "Die Sigma-Bindung wird durch überlappende Orbitale Ende an Ende gebildet, die Pi-Bindung entsteht durch parallele (nebeneinander liegende) Überlappung. Die Sigma-Bindung ist stärker als die Pi-Bindung.",
        "fr": "La liaison Sigma est formée par des orbitales qui se chevauchent bout à bout, la liaison Pi est formée par un chevauchement parallèle (côte à côte) ; La liaison sigma est plus forte que la liaison pi.",
        "ru": "σ-связь образуется при осевом (лобовом) перекрывании орбиталей, π-связь — при боковом (параллельном) перекрывании; σ-связь прочнее π-связи.",
        "ar": "تتكون رابطة سيجما بتداخل المدارات طرفًا لطرف، وتتكون رابطة باي بالتداخل المتوازي (الجانبي)؛ ورابطة سيجما أقوى من رابطة باي.",
        "zh": "σ键由轨道“头碰头”重叠形成，π键由轨道“肩并肩”（平行）重叠形成；σ键比π键牢固。",
        "ku": "Girêdana sigma bi hevgirtina serî bi serî ya orbîtalan, girêdana pî bi hevgirtina paralel (kêlek bi kêlek) çêdibe; girêdana sigma ji girêdana pî xurtir e."
      },
      "trap": {
        "tr": "Pi bağları sigma bağlarından çok daha güçlüdür.",
        "en": "Pi bonds are much stronger than sigma bonds.",
        "de": "Pi-Bindungen sind viel stärker als Sigma-Bindungen.",
        "fr": "Les liaisons Pi sont beaucoup plus fortes que les liaisons sigma.",
        "ru": "π-связи намного прочнее σ-связей.",
        "ar": "روابط باي أقوى بكثير من روابط سيجما.",
        "zh": "π键比σ键牢固得多。",
        "ku": "Girêdanên pî ji girêdanên sigma gelek xurtir in."
      },
      "whyTrapIsFalse": {
        "tr": "Pi bağında örtüşme eksenin üstünde ve altında, daha az etkin gerçekleşir; bu yüzden pi bağı sigma bağından zayıftır ve çift bağlı bileşiklerin tepkimelerinde önce pi bağı kırılır.",
        "en": "In a pi bond the overlap occurs above and below the axis and is less effective; therefore a pi bond is weaker than a sigma bond, and in reactions of double-bonded compounds the pi bond breaks first.",
        "de": "Bei einer pi-Bindung erfolgt die Überlappung ober- und unterhalb der Achse und ist weniger wirksam; daher ist die pi-Bindung schwächer als die sigma-Bindung, und bei Reaktionen von Verbindungen mit Doppelbindung bricht zuerst die pi-Bindung.",
        "fr": "Dans une liaison pi, le recouvrement a lieu au-dessus et au-dessous de l'axe et il est moins efficace ; la liaison pi est donc plus faible que la liaison sigma, et dans les réactions des composés à double liaison c'est la liaison pi qui se rompt d'abord.",
        "ru": "При образовании π-связи орбитали перекрываются над и под осью связи, и перекрывание менее эффективно; поэтому π-связь слабее σ-связи, и в реакциях соединений с двойной связью первой разрывается π-связь.",
        "ar": "في رابطة باي يحدث التداخل فوق المحور وتحته ويكون أقل فاعلية؛ لذلك فرابطة باي أضعف من رابطة سيجما، وفي تفاعلات المركبات ذات الرابطة الثنائية تنكسر رابطة باي أولًا.",
        "zh": "π键的重叠发生在键轴的上方和下方，重叠程度较小，因此π键比σ键弱；含双键化合物反应时首先断裂的是π键。",
        "ku": "Di girêdana pî de hevgirtin li jor û jêrê eksenê çêdibe û kêmtir bibandor e; loma girêdana pî ji girêdana sigma qelstir e û di reaksiyonên pêkhateyên bi girêdana ducarî de pêşî girêdana pî dişkê."
      }
    },
    {
      "id": "u23-f09",
      "fact": {
        "tr": "Karbon atomu tüm bağlarını tekli yapmışsa sp3, bir çift bağ yapmışsa sp2, bir üçlü bağ (veya iki çift bağ) yapmışsa sp hibritleşmesi yapmıştır.",
        "en": "If the carbon atom has made all single bonds, it has sp3 hybridization, if it has made one double bond, it has sp2 hybridization, and if it has made one triple bond (or two double bonds), it has sp hybridization.",
        "de": "Wenn das Kohlenstoffatom alle Einfachbindungen gebildet hat, liegt eine sp3-Hybridisierung vor, wenn es eine Doppelbindung gebildet hat, liegt eine sp2-Hybridisierung vor, und wenn es eine Dreifachbindung (oder zwei Doppelbindungen) gebildet hat, liegt eine sp-Hybridisierung vor.",
        "fr": "Si l’atome de carbone a réalisé toutes les liaisons simples, il a une hybridation sp3, s’il a réalisé une double liaison, il a une hybridation sp2, et s’il a réalisé une triple liaison (ou deux doubles liaisons), il a une hybridation sp.",
        "ru": "Если атом углерода образует только одинарные связи, он находится в sp3-гибридизации; если одну двойную связь — в sp2-гибридизации; если одну тройную связь (или две двойные) — в sp-гибридизации.",
        "ar": "إذا كانت جميع روابط ذرة الكربون أحادية فتهجينها sp3، وإذا كوّنت رابطة ثنائية واحدة فتهجينها sp2، وإذا كوّنت رابطة ثلاثية واحدة (أو رابطتين ثنائيتين) فتهجينها sp.",
        "zh": "如果碳原子全部形成单键，则为 sp3 杂化；如果形成 1 个双键，则为 sp2 杂化；如果形成 1 个三键(或 2 个双键)，则为 sp 杂化。",
        "ku": "Heke atoma karbonê hemû girêdanên xwe yekane çêkiribin hîbrîdîzasyona sp3, heke girêdaneke ducarî çêkiribe sp2, heke girêdaneke sêcarî (an du girêdanên ducarî) çêkiribe hîbrîdîzasyona sp kiriye."
      },
      "trap": {
        "tr": "CH4 molekülünde karbon atomu sp hibritleşmesi yapmıştır.",
        "en": "The carbon atom in the CH4 molecule has undergone sp hybridization.",
        "de": "Das Kohlenstoffatom im CH4-Molekül hat eine sp-Hybridisierung durchlaufen.",
        "fr": "L'atome de carbone de la molécule CH4 a subi une hybridation sp.",
        "ru": "В молекуле CH4 атом углерода находится в sp-гибридизации.",
        "ar": "ذرة الكربون في جزيء CH4 مهجنة sp.",
        "zh": "CH4 分子中的碳原子为 sp 杂化。",
        "ku": "Di molekula CH4 de atoma karbonê hîbrîdîzasyona sp kiriye."
      },
      "whyTrapIsFalse": {
        "tr": "CH4'te karbon dört tekli (sigma) bağ yapar ve bunun için dört eş hibrit orbital gerekir; bu sp3 hibritleşmesidir. sp hibritleşmesi üçlü bağ ya da iki çift bağ yapan karbonlarda (C2H2, CO2) görülür.",
        "en": "In CH4 carbon forms four single (sigma) bonds, which requires four equivalent hybrid orbitals: that is sp3 hybridization. sp hybridization is found in carbons with a triple bond or two double bonds (C2H2, CO2).",
        "de": "In CH4 bildet Kohlenstoff vier Einfach-(sigma-)Bindungen, wofür vier gleichwertige Hybridorbitale nötig sind: das ist sp3-Hybridisierung. sp-Hybridisierung tritt bei Kohlenstoffatomen mit einer Dreifachbindung oder zwei Doppelbindungen auf (C2H2, CO2).",
        "fr": "Dans CH4, le carbone forme quatre liaisons simples (sigma), ce qui exige quatre orbitales hybrides équivalentes : c'est l'hybridation sp3. L'hybridation sp concerne les carbones ayant une triple liaison ou deux doubles liaisons (C2H2, CO2).",
        "ru": "В CH4 углерод образует четыре одинарные σ-связи, для чего нужны четыре равноценные гибридные орбитали, — это sp3-гибридизация. sp-гибридизация встречается у атомов углерода с тройной связью или двумя двойными связями (C2H2, CO2).",
        "ar": "في CH4 يكوّن الكربون أربع روابط أحادية (سيجما)، وهذا يتطلب أربعة مدارات مهجنة متكافئة، أي تهجين sp3. أما تهجين sp فيوجد في ذرات الكربون ذات الرابطة الثلاثية أو الرابطتين الثنائيتين (C2H2، CO2).",
        "zh": "CH4中碳形成四个单键（σ键），需要四个等同的杂化轨道，这是sp3杂化。sp杂化出现在含三键或两个双键的碳原子上(如C2H2、CO2)。",
        "ku": "Di CH4 de karbon çar girêdanên yekane (sigma) çêdike û ji bo vê çar orbîtalên hîbrîd ên wekhev hewce ne; ev hîbrîdîzasyona sp3 e. Hîbrîdîzasyona sp di karbonên bi girêdana sêcarî an du girêdanên ducarî de (C2H2, CO2) tê dîtin."
      }
    },
    {
      "id": "u23-f10",
      "fact": {
        "tr": "VSEPR AX2: Molekül geometrisi doğrusal, bağ açısı 180°'dir (örn. BeH2, CO2, C2H2).",
        "en": "VSEPR AX2: molecular geometry is LINEAR, bond angle 180° (e.g., BeH2, CO2, C2H2).",
        "de": "VSEPR AX2: Die Molekülgeometrie ist LINEAR, Bindungswinkel 180° (z. B. BeH2, CO2, C2H2).",
        "fr": "VSEPR AX2 : géométrie moléculaire LINÉAIRE, angle de liaison 180° (par ex. BeH2, CO2, C2H2).",
        "ru": "VSEPR AX2: молекула линейная, валентный угол 180° (например, BeH2, CO2, C2H2).",
        "ar": "VSEPR AX2: الشكل الجزيئي خطي، وزاوية الرابطة 180° (مثل BeH2 و CO2 و C2H2).",
        "zh": "VSEPR AX2：分子构型为直线形，键角 180°(如 BeH2、CO2、C2H2)。",
        "ku": "VSEPR AX2: geometriya molekulê XÊZIKÎ ye, goşeya girêdanê 180° ye (mînak BeH2, CO2, C2H2)."
      },
      "trap": {
        "tr": "CO2 molekülü kırık doğru geometrisindedir.",
        "en": "The CO2 molecule has a bent geometry.",
        "de": "Das CO2-Molekül ist gewinkelt.",
        "fr": "La molécule de CO2 a une géométrie coudée.",
        "ru": "Молекула CO2 имеет угловое строение.",
        "ar": "جزيء CO2 ذو شكل منحنٍ (زاوي).",
        "zh": "CO2 分子呈 V 形（角形）结构。",
        "ku": "Molekula CO2 xwedî geometriya goşeyî (xwar) ye."
      },
      "whyTrapIsFalse": {
        "tr": "CO2'de merkez C atomu iki O atomuyla çift bağ yapar ve üzerinde ortaklanmamış elektron çifti yoktur (AX2); bu yüzden doğrusaldır. Kırık doğru yapı, H2O gibi merkez atomunda ortaklanmamış çift bulunan moleküllerde görülür.",
        "en": "In CO2 the central C atom forms double bonds with two O atoms and carries no lone pair (AX2), so it is linear. A bent shape occurs in molecules such as H2O whose central atom has lone pairs.",
        "de": "In CO2 bildet das zentrale C-Atom Doppelbindungen zu zwei O-Atomen und trägt kein freies Elektronenpaar (AX2), daher ist es linear. Eine gewinkelte Form tritt bei Molekülen wie H2O auf, deren Zentralatom freie Elektronenpaare hat.",
        "fr": "Dans CO2, l'atome central C forme des doubles liaisons avec deux atomes O et ne porte aucun doublet non liant (AX2) : la molécule est donc linéaire. La forme coudée apparaît dans des molécules comme H2O dont l'atome central possède des doublets non liants.",
        "ru": "В CO2 центральный атом C образует двойные связи с двумя атомами O и не имеет неподелённых пар (AX2), поэтому молекула линейна. Угловое строение имеют молекулы, подобные H2O, у центрального атома которых есть неподелённые пары.",
        "ar": "في CO2 تكوّن ذرة C المركزية رابطتين ثنائيتين مع ذرتي O ولا تحمل أزواجًا غير رابطة (AX2)، لذا فالجزيء خطي. أما الشكل المنحني فيظهر في جزيئات مثل H2O تحمل ذرتها المركزية أزواجًا غير رابطة.",
        "zh": "CO2中中心碳原子与两个氧原子形成双键，且没有孤对电子(AX2)，所以是直线形。V形（角形）结构出现在像H2O这样中心原子有孤对电子的分子中。",
        "ku": "Di CO2 de atoma C ya navendî bi du atomên O re girêdanên ducarî çêdike û cotê elektronan ê nehevpar li ser wê nîne (AX2); loma xêzikî ye. Şiklê goşeyî di molekulên wek H2O de tê dîtin ku li ser atoma wan a navendî cotên nehevpar hene."
      }
    },
    {
      "id": "u23-f11",
      "fact": {
        "tr": "VSEPR AX3: Molekül geometrisi düzlem üçgen, bağ açısı 120°'dir (örn. BH3, BF3, SO3).",
        "en": "VSEPR AX3: molecular geometry is TRIGONAL PLANAR, bond angle 120° (e.g., BH3, BF3, SO3).",
        "de": "VSEPR AX3: Die Molekülgeometrie ist TRIGONAL-PLANAR, Bindungswinkel 120° (z. B. BH3, BF3, SO3).",
        "fr": "VSEPR AX3 : géométrie moléculaire TRIGONALE PLANE, angle de liaison 120° (par ex. BH3, BF3, SO3).",
        "ru": "VSEPR AX3: молекула имеет форму плоского треугольника, валентный угол 120° (например, BH3, BF3, SO3).",
        "ar": "VSEPR AX3: الشكل الجزيئي مثلث مستوٍ، وزاوية الرابطة 120° (مثل BH3 و BF3 و SO3).",
        "zh": "VSEPR AX3：分子构型为平面三角形，键角 120°(如 BH3、BF3、SO3)。",
        "ku": "VSEPR AX3: geometriya molekulê SÊGOŞEYA PELÎ ye, goşeya girêdanê 120° ye (mînak BH3, BF3, SO3)."
      },
      "trap": {
        "tr": "BF3 molekülü düzgün dörtyüzlüdür.",
        "en": "The BF3 molecule is a regular tetrahedron.",
        "de": "Das BF3-Molekül ist ein regelmäßiger Tetraeder.",
        "fr": "La molécule BF3 est un tétraèdre régulier.",
        "ru": "Молекула BF3 имеет форму правильного тетраэдра.",
        "ar": "شكل جزيء BF3 رباعي أوجه منتظم.",
        "zh": "BF3 分子呈正四面体形。",
        "ku": "Molekula BF3 tetrahedrala rêkûpêk e."
      },
      "whyTrapIsFalse": {
        "tr": "BF3'te B atomu üç bağ yapar ve ortaklanmamış elektron çifti taşımaz (AX3); üç bağ birbirinden en uzak konumda 120° açıyla düzlem üçgen oluşturur. Düzgün dörtyüzlü yapı için merkez atomda dört elektron bölgesi gerekir.",
        "en": "In BF3 the B atom forms three bonds and has no lone pair (AX3); the three bonds get as far apart as possible, giving a trigonal planar shape with 120° angles. A tetrahedral shape needs four electron domains on the central atom.",
        "de": "In BF3 bildet das B-Atom drei Bindungen und trägt kein freies Elektronenpaar (AX3); die drei Bindungen ordnen sich möglichst weit voneinander an und ergeben eine trigonal-planare Form mit 120°. Für ein Tetraeder braucht das Zentralatom vier Elektronenbereiche.",
        "fr": "Dans BF3, l'atome B forme trois liaisons et ne porte aucun doublet non liant (AX3) ; les trois liaisons s'écartent au maximum et donnent une forme triangulaire plane à 120°. Une forme tétraédrique exige quatre domaines électroniques autour de l'atome central.",
        "ru": "В BF3 атом B образует три связи и не имеет неподелённой пары (AX3); три связи располагаются как можно дальше друг от друга и образуют плоский треугольник с углами 120°. Для тетраэдра у центрального атома должно быть четыре области электронной плотности.",
        "ar": "في BF3 تكوّن ذرة B ثلاث روابط ولا تحمل زوجًا غير رابط (AX3)؛ فتتباعد الروابط الثلاث أقصى ما يمكن مكوّنة شكلًا مثلثًا مستويًا بزوايا 120°. أما الشكل رباعي الأوجه فيتطلب أربع مناطق إلكترونية حول الذرة المركزية.",
        "zh": "BF3中硼原子形成三个键且没有孤对电子(AX3)，三个键尽可能远离，形成键角120°的平面三角形。正四面体构型需要中心原子周围有四个电子域。",
        "ku": "Di BF3 de atoma B sê girêdanan çêdike û cotê elektronan ê nehevpar nîne (AX3); sê girêdan herî dûrî hev bi cih dibin û bi goşeyên 120° sêgoşeya pelî çêdikin. Ji bo şiklê tetrahedral divê li ser atoma navendî çar herêmên elektronan hebin."
      }
    },
    {
      "id": "u23-f12",
      "fact": {
        "tr": "VSEPR AX4: Molekül geometrisi düzgün dörtyüzlü, bağ açısı 109,5°'dir (örn. CH4, CCl4).",
        "en": "VSEPR AX4: molecular geometry is TETRAHEDRAL, bond angle 109.5° (e.g., CH4, CCl4).",
        "de": "VSEPR AX4: Die Molekülgeometrie ist TETRAEDRISCH, Bindungswinkel 109,5° (z. B. CH4, CCl4).",
        "fr": "VSEPR AX4 : géométrie moléculaire TÉTRAÉDRIQUE, angle de liaison 109,5° (par ex. CH4, CCl4).",
        "ru": "VSEPR AX4: молекула тетраэдрическая, валентный угол 109,5° (например, CH4, CCl4).",
        "ar": "VSEPR AX4: الشكل الجزيئي رباعي أوجه منتظم، وزاوية الرابطة 109.5° (مثل CH4 و CCl4).",
        "zh": "VSEPR AX4：分子构型为正四面体，键角 109.5°(如 CH4、CCl4)。",
        "ku": "VSEPR AX4: geometriya molekulê TETRAHEDRAL e, goşeya girêdanê 109,5° ye (mînak CH4, CCl4)."
      },
      "trap": {
        "tr": "CH4 molekülünde bağ açısı 90°'dir.",
        "en": "The bond angle in the CH4 molecule is 90°.",
        "de": "Der Bindungswinkel im CH4-Molekül beträgt 90°.",
        "fr": "L'angle de liaison dans la molécule CH4 est de 90°.",
        "ru": "Валентный угол в молекуле CH4 равен 90°.",
        "ar": "زاوية الرابطة في جزيء CH4 تساوي 90°.",
        "zh": "CH4 分子中的键角为 90°。",
        "ku": "Di molekula CH4 de goşeya girêdanê 90° ye."
      },
      "whyTrapIsFalse": {
        "tr": "90° yanılgısı, dört bağın kâğıt üzerinde kare şeklinde çizilmesinden kaynaklanır; gerçekte bağlar üç boyutta birbirinden en uzak konuma, düzgün dörtyüzlünün köşelerine yönelir ve açı 109,5° olur.",
        "en": "The 90° error comes from drawing the four bonds as a square on paper; in reality the bonds point in three dimensions as far apart as possible, towards the corners of a regular tetrahedron, giving 109.5°.",
        "de": "Der 90°-Fehler kommt daher, dass man die vier Bindungen auf dem Papier als Quadrat zeichnet; tatsächlich zeigen die Bindungen räumlich möglichst weit auseinander zu den Ecken eines regelmäßigen Tetraeders, und der Winkel beträgt 109,5°.",
        "fr": "L'erreur des 90° vient du dessin des quatre liaisons en carré sur le papier ; en réalité, les liaisons s'orientent dans l'espace le plus loin possible les unes des autres, vers les sommets d'un tétraèdre régulier, et l'angle vaut 109,5°.",
        "ru": "Ошибка «90°» возникает, когда четыре связи рисуют на бумаге крестом; на самом деле связи в пространстве направлены как можно дальше друг от друга — к вершинам правильного тетраэдра, и угол равен 109,5°.",
        "ar": "ينشأ خطأ 90° من رسم الروابط الأربع على شكل مربع على الورق؛ أما في الواقع فتتجه الروابط في الفضاء الثلاثي الأبعاد إلى أبعد وضع ممكن، نحو رؤوس رباعي أوجه منتظم، فتكون الزاوية 109.5°.",
        "zh": "90°的错误来自在纸上把四个键画成正方形；实际上四个键在三维空间中尽量远离，指向正四面体的顶点，键角为109.5°。",
        "ku": "Şaşiya 90° ji xêzkirina çar girêdanan wek çargoşe li ser kaxezê tê; bi rastî girêdan di sê dîmenan de herî dûrî hev, ber bi quncikên tetrahedrala rêkûpêk ve diçin û goşe 109,5° e."
      }
    },
    {
      "id": "u23-f13",
      "fact": {
        "tr": "VSEPR AX3E: Molekül geometrisi üçgen piramit, bağ açısı yaklaşık 107°'dir (örn. NH3); molekül polardır.",
        "en": "VSEPR AX3E: molecular geometry is TRIGONAL PYRAMIDAL, bond angle about 107° (e.g., NH3); the molecule is polar.",
        "de": "VSEPR AX3E: Die Molekülgeometrie ist TRIGONAL-PYRAMIDAL, Bindungswinkel etwa 107° (z. B. NH3); das Molekül ist polar.",
        "fr": "VSEPR AX3E : géométrie moléculaire PYRAMIDALE TRIGONALE, angle de liaison d'environ 107° (par ex. NH3) ; la molécule est polaire.",
        "ru": "VSEPR AX3E: молекула имеет форму тригональной пирамиды, валентный угол около 107° (например, NH3); молекула полярна.",
        "ar": "VSEPR AX3E: الشكل الجزيئي هرم ثلاثي، وزاوية الرابطة نحو 107° (مثل NH3)؛ والجزيء قطبي.",
        "zh": "VSEPR AX3E：分子构型为三角锥形，键角约 107°(如 NH3)；分子有极性。",
        "ku": "VSEPR AX3E: geometriya molekulê PÎRAMÎDA SÊGOŞE ye, goşeya girêdanê nêzîkî 107° ye (mînak NH3); molekul polar e."
      },
      "trap": {
        "tr": "NH3 molekülü apolar ve düzlem üçgendir.",
        "en": "The NH3 molecule is nonpolar and plane triangular.",
        "de": "Das NH3-Molekül ist unpolar und eben dreieckig.",
        "fr": "La molécule NH3 est apolaire et plane triangulaire.",
        "ru": "Молекула NH3 неполярна и имеет форму плоского треугольника.",
        "ar": "جزيء NH3 غير قطبي وشكله مثلث مستوٍ.",
        "zh": "NH3 分子是非极性的平面三角形分子。",
        "ku": "Molekula NH3 nepolar e û sêgoşeya pelî ye."
      },
      "whyTrapIsFalse": {
        "tr": "NH3'te N atomu üzerindeki ortaklanmamış elektron çifti de bir elektron bölgesidir (AX3E); bağları aşağı iterek molekülü üçgen piramit yapar ve bağ dipolleri birbirini yok etmediği için molekül polardır.",
        "en": "In NH3 the lone pair on the N atom is also an electron domain (AX3E); it pushes the bonds down, making the molecule trigonal pyramidal, and because the bond dipoles do not cancel the molecule is polar.",
        "de": "In NH3 ist das freie Elektronenpaar am N-Atom ebenfalls ein Elektronenbereich (AX3E); es drückt die Bindungen nach unten, sodass das Molekül trigonal-pyramidal wird, und da sich die Bindungsdipole nicht aufheben, ist es polar.",
        "fr": "Dans NH3, le doublet non liant de l'atome N est lui aussi un domaine électronique (AX3E) ; il repousse les liaisons vers le bas, rendant la molécule pyramidale trigonale, et comme les dipôles de liaison ne s'annulent pas, la molécule est polaire.",
        "ru": "В NH3 неподелённая пара атома N тоже занимает область электронной плотности (AX3E); она отталкивает связи вниз, и молекула принимает форму тригональной пирамиды, а так как диполи связей не компенсируются, молекула полярна.",
        "ar": "في NH3 يُعد الزوج غير الرابط على ذرة N منطقة إلكترونية أيضًا (AX3E)؛ فيدفع الروابط إلى الأسفل فيصبح الجزيء هرمًا ثلاثيًا، ولأن عزوم ثنائيات أقطاب الروابط لا يلغي بعضها بعضًا فالجزيء قطبي.",
        "zh": "NH3中氮原子上的孤对电子也是一个电子域(AX3E)，它把成键电子对向下推，使分子成为三角锥形；键的偶极不能相互抵消，所以分子有极性。",
        "ku": "Di NH3 de cotê elektronan ê nehevpar ê li ser atoma N jî herêmeke elektronan e (AX3E); ew girêdanan ber bi jêr ve dehf dide û molekulê dike pîramîda sêgoşe, û ji ber ku dîpolên girêdanan hev betal nakin molekul polar e."
      }
    },
    {
      "id": "u23-f14",
      "fact": {
        "tr": "VSEPR AX2E2: Molekül geometrisi kırık doğru (açısal), bağ açısı 104,5°'dir (örn. H2O); molekül polardır.",
        "en": "VSEPR AX2E2: molecular geometry is BENT (angular), bond angle 104.5° (e.g., H2O); the molecule is polar.",
        "de": "VSEPR AX2E2: Die Molekülgeometrie ist GEWINKELT, Bindungswinkel 104,5° (z. B. H2O); das Molekül ist polar.",
        "fr": "VSEPR AX2E2 : géométrie moléculaire COUDÉE (angulaire), angle de liaison 104,5° (par ex. H2O) ; la molécule est polaire.",
        "ru": "VSEPR AX2E2: молекула угловая, валентный угол 104,5° (например, H2O); молекула полярна.",
        "ar": "VSEPR AX2E2: الشكل الجزيئي منحنٍ (زاوي)، وزاوية الرابطة 104.5° (مثل H2O)؛ والجزيء قطبي.",
        "zh": "VSEPR AX2E2：分子构型为 V 形（角形），键角 104.5°(如 H2O)；分子有极性。",
        "ku": "VSEPR AX2E2: geometriya molekulê GOŞEYÎ (xwar) ye, goşeya girêdanê 104,5° ye (mînak H2O); molekul polar e."
      },
      "trap": {
        "tr": "H2O molekülü doğrusal geometride apolardır.",
        "en": "The H2O molecule is nonpolar in linear geometry.",
        "de": "Das H2O-Molekül ist in linearer Geometrie unpolar.",
        "fr": "La molécule H2O est apolaire en géométrie linéaire.",
        "ru": "Молекула H2O линейная и неполярная.",
        "ar": "جزيء H2O خطي وغير قطبي.",
        "zh": "H2O 分子为直线形，是非极性分子。",
        "ku": "Molekula H2O xwedî geometriya xêzikî ye û nepolar e."
      },
      "whyTrapIsFalse": {
        "tr": "H2O'da O atomundaki iki ortaklanmamış elektron çifti (AX2E2) bağları büker; molekül 104,5° açılı kırık doğrudur ve bağ dipolleri toplanarak molekülü polar yapar. Doğrusal ve apolar olan CO2'dir.",
        "en": "In H2O the two lone pairs on the O atom (AX2E2) bend the bonds; the molecule is bent with a 104.5° angle and the bond dipoles add up, making it polar. It is CO2 that is linear and nonpolar.",
        "de": "In H2O winkeln die zwei freien Elektronenpaare am O-Atom (AX2E2) die Bindungen ab; das Molekül ist mit 104,5° gewinkelt, und die Bindungsdipole addieren sich, sodass es polar ist. Linear und unpolar ist CO2.",
        "fr": "Dans H2O, les deux doublets non liants de l'atome O (AX2E2) coudent les liaisons ; la molécule est coudée à 104,5° et les dipôles de liaison s'additionnent, ce qui la rend polaire. C'est CO2 qui est linéaire et apolaire.",
        "ru": "В H2O две неподелённые пары атома O (AX2E2) изгибают связи: молекула угловая с углом 104,5°, а диполи связей складываются и делают её полярной. Линейна и неполярна молекула CO2.",
        "ar": "في H2O يحني زوجا الإلكترونات غير الرابطين على ذرة O (AX2E2) الروابط؛ فالجزيء منحنٍ بزاوية 104.5° وتتجمع عزوم الروابط فيصبح قطبيًا. أما الخطي غير القطبي فهو CO2.",
        "zh": "H2O中氧原子上的两对孤对电子(AX2E2)使键弯曲，分子为键角104.5°的V形，键的偶极相加，分子有极性。直线形且非极性的是CO2。",
        "ku": "Di H2O de du cotên elektronan ên nehevpar ên li ser atoma O (AX2E2) girêdanan diçemînin; molekul bi goşeya 104,5° goşeyî ye û dîpolên girêdanan li hev zêde dibin, loma molekul polar e. Molekula xêzikî û nepolar CO2 ye."
      }
    },
    {
      "id": "u23-f15",
      "fact": {
        "tr": "Organik bileşiklerin ana kaynağı genellikle canlılar ve fosil yakıtlardır, anorganik bileşiklerin kaynağı ise çoğunlukla mineraller ve cansız doğadır; bilinen organik bileşiklerin sayısı anorganik bileşiklerin sayısından çok daha fazladır.",
        "en": "The main sources of organic compounds are generally living things and fossil fuels, whereas inorganic compounds come mostly from minerals and non-living nature; the number of known organic compounds is far greater than the number of inorganic compounds.",
        "de": "Hauptquellen organischer Verbindungen sind im Allgemeinen Lebewesen und fossile Brennstoffe, anorganische Verbindungen stammen überwiegend aus Mineralien und der unbelebten Natur; die Zahl der bekannten organischen Verbindungen ist weitaus größer als die der anorganischen.",
        "fr": "Les principales sources des composés organiques sont généralement les êtres vivants et les combustibles fossiles, tandis que les composés inorganiques proviennent surtout des minéraux et de la nature inerte ; le nombre de composés organiques connus est bien plus grand que celui des composés inorganiques.",
        "ru": "Основные источники органических соединений — живые организмы и ископаемое топливо, неорганических — в основном минералы и неживая природа; известных органических соединений намного больше, чем неорганических.",
        "ar": "المصادر الرئيسية للمركبات العضوية هي غالبًا الكائنات الحية والوقود الأحفوري، أما المركبات غير العضوية فمصدرها في الغالب المعادن والطبيعة غير الحية؛ وعدد المركبات العضوية المعروفة أكبر بكثير من عدد المركبات غير العضوية.",
        "zh": "有机化合物的主要来源通常是生物体和化石燃料，无机化合物则主要来自矿物和非生物界；已知有机化合物的数目远远多于无机化合物。",
        "ku": "Çavkaniya sereke ya pêkhateyên organîk bi piranî zindî û sotemeniyên fosîl in, ya pêkhateyên anorganîk jî bi piranî kanza û xwezaya nezindî ye; hejmara pêkhateyên organîk ên naskirî ji ya pêkhateyên anorganîk gelek zêdetir e."
      },
      "trap": {
        "tr": "Anorganik bileşiklerin sayısı organik bileşiklerden çok daha fazladır.",
        "en": "The number of inorganic compounds is much higher than organic compounds.",
        "de": "Die Anzahl der anorganischen Verbindungen ist viel höher als die der organischen Verbindungen.",
        "fr": "Le nombre de composés inorganiques est bien supérieur à celui des composés organiques.",
        "ru": "Неорганических соединений намного больше, чем органических.",
        "ar": "عدد المركبات غير العضوية أكبر بكثير من عدد المركبات العضوية.",
        "zh": "无机化合物的数量远高于有机化合物。",
        "ku": "Hejmara pêkhateyên anorganîk ji ya pêkhateyên organîk gelek zêdetir e."
      },
      "whyTrapIsFalse": {
        "tr": "Karbon kendisiyle uzun zincirler, dallar ve halkalar kurabildiği için bilinen organik bileşik sayısı milyonlarcadır; anorganik bileşiklerin sayısı bunun yanında çok azdır.",
        "en": "Because carbon can bond to itself in long chains, branches and rings, the number of known organic compounds runs into the millions; inorganic compounds are far fewer in comparison.",
        "de": "Da Kohlenstoff mit sich selbst lange Ketten, Verzweigungen und Ringe bilden kann, gibt es Millionen bekannter organischer Verbindungen; anorganische Verbindungen sind im Vergleich viel weniger zahlreich.",
        "fr": "Comme le carbone peut se lier à lui-même en longues chaînes, ramifications et cycles, on connaît des millions de composés organiques ; les composés inorganiques sont bien moins nombreux en comparaison.",
        "ru": "Поскольку углерод способен связываться сам с собой в длинные цепи, разветвления и циклы, известны миллионы органических соединений; неорганических соединений по сравнению с ними намного меньше.",
        "ar": "لأن الكربون يستطيع الارتباط بنفسه مكوّنًا سلاسل طويلة وتفرعات وحلقات، يبلغ عدد المركبات العضوية المعروفة الملايين؛ أما المركبات غير العضوية فأقل بكثير مقارنة بها.",
        "zh": "由于碳原子能彼此连接成长链、支链和环，已知的有机化合物有数百万种；相比之下无机化合物要少得多。",
        "ku": "Ji ber ku karbon dikare bi xwe re zincîrên dirêj, şax û xelekan çêke, hejmara pêkhateyên organîk ên naskirî bi milyonan e; li gorî wan pêkhateyên anorganîk pir kêmtir in."
      }
    },
    {
      "id": "u23-f16",
      "fact": {
        "tr": "Organik bileşikler genellikle yanıcıdır, erime noktaları düşüktür ve tepkimeleri yavaştır.",
        "en": "Organic compounds are generally flammable, have low melting points and slow reactions.",
        "de": "Organische Verbindungen sind im Allgemeinen brennbar, haben niedrige Schmelzpunkte und reagieren langsam.",
        "fr": "Les composés organiques sont généralement inflammables, ont des points de fusion bas et des réactions lentes.",
        "ru": "Органические соединения, как правило, горючи, имеют низкие температуры плавления и реагируют медленно.",
        "ar": "المركبات العضوية عمومًا قابلة للاشتعال، ودرجات انصهارها منخفضة، وتفاعلاتها بطيئة.",
        "zh": "有机化合物一般易燃、熔点低，反应较慢。",
        "ku": "Pêkhateyên organîk bi piranî şewitbar in, xalên wan ên helînê nizm in û reaksiyonên wan hêdî ne."
      },
      "trap": {
        "tr": "Organik bileşiklerin erime noktaları genellikle NaCl gibi iyonik anorganik bileşiklerinkinden yüksektir.",
        "en": "The melting points of organic compounds are generally higher than those of ionic inorganic compounds such as NaCl.",
        "de": "Die Schmelzpunkte organischer Verbindungen liegen im Allgemeinen höher als die ionischer anorganischer Verbindungen wie NaCl.",
        "fr": "Les températures de fusion des composés organiques sont en général plus élevées que celles des composés inorganiques ioniques comme NaCl.",
        "ru": "Температуры плавления органических соединений, как правило, выше, чем у ионных неорганических соединений, например NaCl.",
        "ar": "درجات انصهار المركبات العضوية أعلى عمومًا من درجات انصهار المركبات غير العضوية الأيونية مثل NaCl.",
        "zh": "有机化合物的熔点一般比 NaCl 等离子型无机化合物的熔点高。",
        "ku": "Xalên helînê yên pêkhateyên organîk bi giştî ji yên pêkhateyên anorganîk ên îyonîk ên wek NaCl bilindtir in."
      },
      "whyTrapIsFalse": {
        "tr": "Organik bileşiklerin çoğu kovalent bağlı moleküllerden oluşur; moleküller arası çekim zayıf olduğundan erime noktaları genellikle düşüktür. Yüksek erime noktalı iyonik kristaller, NaCl gibi anorganik bileşiklere özgüdür.",
        "en": "Most organic compounds consist of covalently bonded molecules; intermolecular attractions are weak, so their melting points are generally low. High-melting ionic crystals are typical of inorganic compounds such as NaCl.",
        "de": "Die meisten organischen Verbindungen bestehen aus kovalent gebundenen Molekülen; die zwischenmolekularen Kräfte sind schwach, daher sind ihre Schmelzpunkte meist niedrig. Hochschmelzende Ionenkristalle sind typisch für anorganische Verbindungen wie NaCl.",
        "fr": "La plupart des composés organiques sont formés de molécules à liaisons covalentes ; les attractions intermoléculaires sont faibles, d'où des points de fusion généralement bas. Les cristaux ioniques à haut point de fusion sont typiques des composés inorganiques comme NaCl.",
        "ru": "Большинство органических соединений состоит из молекул с ковалентными связями; межмолекулярное притяжение слабое, поэтому температуры плавления обычно низкие. Высокоплавкие ионные кристаллы характерны для неорганических соединений, например NaCl.",
        "ar": "تتكون معظم المركبات العضوية من جزيئات مرتبطة تساهميًا؛ وقوى التجاذب بين الجزيئات ضعيفة، لذا تكون درجات انصهارها منخفضة عادة. أما البلورات الأيونية ذات درجات الانصهار العالية فمن سمات المركبات غير العضوية مثل NaCl.",
        "zh": "大多数有机化合物由共价键结合的分子构成，分子间作用力弱，所以熔点一般较低。高熔点的离子晶体是NaCl等无机化合物的特征。",
        "ku": "Piraniya pêkhateyên organîk ji molekulên bi girêdana kovalent pêk tên; ji ber ku kişandina navmolekulî qels e, xalên wan ên helînê bi piranî nizm in. Krîstalên îyonîk ên bi xala helînê ya bilind taybetmendiya pêkhateyên anorganîk ên wek NaCl ne."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u23-c01",
      "conceptA": {
        "tr": "Elmas",
        "en": "Diamond",
        "de": "Diamant",
        "fr": "Diamant",
        "ru": "Алмаз",
        "ar": "الماس",
        "zh": "金刚石",
        "ku": "Elmas"
      },
      "conceptB": {
        "tr": "Grafit",
        "en": "Graphite",
        "de": "Graphit",
        "fr": "Graphite",
        "ru": "Графит",
        "ar": "الجرافيت",
        "zh": "石墨",
        "ku": "Grafît"
      },
      "distinction": {
        "tr": "Elmas sp3 hibritleşmeli karbon atomlarından oluşur, elektriği iletmez ve çok serttir; grafit sp2 hibritleşmeli karbon atomlarından oluşan tabakalı bir yapıdır, elektriği iletir ve yumuşaktır.",
        "en": "Diamond is sp3-hybridized, does not conduct electricity and is hard; graphite is sp2-hybridized, layered, conducts electricity and is soft.",
        "de": "Diamant ist sp3-hybridisiert, leitet keinen Strom und ist hart; Graphit ist sp2-hybridisiert, schichtförmig, leitet Strom und ist weich.",
        "fr": "Le diamant est hybridé sp3, ne conduit pas l'électricité et est dur ; le graphite est hybridé sp2, lamellaire, conduit l'électricité et est tendre.",
        "ru": "Алмаз состоит из атомов углерода в sp3-гибридизации, не проводит электрический ток и обладает очень высокой твёрдостью; графит — мягкое слоистое вещество из атомов углерода в sp2-гибридизации, проводящее электрический ток.",
        "ar": "الماس مكوّن من ذرات كربون مهجنة sp3، لا يوصل الكهرباء وشديد الصلابة؛ أما الجرافيت فبنية طبقية من ذرات كربون مهجنة sp2، يوصل الكهرباء وطري.",
        "zh": "金刚石为 sp3 杂化，不导电，坚硬；石墨为 sp2 杂化，层状，能导电，质软。",
        "ku": "Elmas ji atomên karbonê yên bi hîbrîdîzasyona sp3 pêk tê, elektrîkê naguhezîne û pir hişk e; grafît avahiyeke qatqatî ye ku ji atomên karbonê yên bi hîbrîdîzasyona sp2 pêk tê, elektrîkê diguhezîne û nerm e."
      }
    },
    {
      "id": "u23-c02",
      "conceptA": {
        "tr": "Sigma (σ) Bağı",
        "en": "Sigma (σ) Bond",
        "de": "Sigma-(σ)-Bindung",
        "fr": "Liaison Sigma (σ)",
        "ru": "Сигма-связь (σ)",
        "ar": "رابطة سيجما (σ)",
        "zh": "σ键",
        "ku": "Girêdana Sigma (σ)"
      },
      "conceptB": {
        "tr": "Pi (π) Bağı",
        "en": "Pi (π) Bond",
        "de": "Pi-(π)-Bindung",
        "fr": "Liaison Pi (π)",
        "ru": "Пи-связь (π)",
        "ar": "رابطة باي (π)",
        "zh": "π键",
        "ku": "Girêdana Pî (π)"
      },
      "distinction": {
        "tr": "Sigma bağı orbitallerin bağ ekseni boyunca uç uca örtüşmesiyle oluşur ve daha sağlamdır; pi bağı p orbitallerinin yan yana örtüşmesiyle oluşur ve daha kolay kırılır.",
        "en": "A sigma bond forms by axial end-to-end overlap and is strong; a pi bond is the side-by-side overlap of p orbitals and breaks more easily.",
        "de": "Eine Sigma-Bindung entsteht durch axiale Überlappung (Kopf an Kopf) und ist stabil; eine Pi-Bindung ist die seitliche Überlappung von p-Orbitalen und bricht leichter.",
        "fr": "Une liaison sigma résulte d'un recouvrement axial bout à bout et est solide ; une liaison pi est le recouvrement latéral d'orbitales p et se rompt plus facilement.",
        "ru": "Сигма-связь образуется при перекрывании орбиталей вдоль оси связи и обладает большей прочностью; пи-связь образуется при боковом перекрывании p-орбиталей и разрывается легче.",
        "ar": "رابطة سيجما رابطة قوية تنشأ من التداخل المحوري للمدارات (رأسًا لرأس)؛ أما رابطة باي فتنشأ من التداخل الجانبي لمدارات p وتنكسر بسهولة أكبر.",
        "zh": "σ键由轨道沿键轴“头碰头”重叠形成，较牢固；π键由 p 轨道“肩并肩”重叠形成，较易断裂。",
        "ku": "Girêdana sigma (σ) bi hevgirtina serî bi serî ya orbîtalan li ser eksena girêdanê çêdibe û xurtir e; girêdana pî (π) bi hevgirtina kêlek bi kêlek a orbîtalên p çêdibe û hêsantir dişkê."
      }
    },
    {
      "id": "u23-c03",
      "conceptA": {
        "tr": "Organik Bileşik",
        "en": "Organic Compound",
        "de": "Organische Verbindung",
        "fr": "Composé organique",
        "ru": "Органическое соединение",
        "ar": "مركب عضوي",
        "zh": "有机化合物",
        "ku": "Pêkhateya Organîk"
      },
      "conceptB": {
        "tr": "Anorganik Bileşik",
        "en": "Inorganic Compound",
        "de": "Anorganische Verbindung",
        "fr": "Composé inorganique",
        "ru": "Неорганическое соединение",
        "ar": "مركب غير عضوي",
        "zh": "无机化合物",
        "ku": "Pêkhateya Anorganîk"
      },
      "distinction": {
        "tr": "Organik bileşikler karbon iskeletli (genellikle C–H bağı içeren), çoğunlukla kovalent bağlı moleküllerdir; anorganik bileşikler çoğunlukla iyonik yapılı, erime noktası yüksek, mineral kökenli maddelerdir.",
        "en": "Organic compounds are molecules with a carbon skeleton (usually containing C–H bonds) and mostly covalent bonding; inorganic compounds are mostly ionic, high-melting substances of mineral origin.",
        "de": "Organische Verbindungen sind Moleküle mit Kohlenstoffgerüst (meist mit C–H-Bindungen) und überwiegend kovalenter Bindung; anorganische Verbindungen sind überwiegend ionisch aufgebaute, hochschmelzende Stoffe mineralischen Ursprungs.",
        "fr": "Composé organique : molécule à squelette carboné (contenant généralement des liaisons C–H), surtout à liaisons covalentes ; composé inorganique : substance le plus souvent ionique, à point de fusion élevé et d'origine minérale.",
        "ru": "Органическое соединение построено на углеродном скелете (обычно со связями C–H), и его атомы связаны преимущественно ковалентными связями; неорганическое соединение — чаще всего тугоплавкое вещество ионного строения минерального происхождения.",
        "ar": "المركب العضوي جزيء ذو هيكل كربوني (يحتوي عادة على روابط C–H) وروابطه تساهمية في الغالب؛ أما المركب غير العضوي فيكون في الغالب أيوني البنية، مرتفع درجة الانصهار، معدني المنشأ.",
        "zh": "有机化合物是以碳为骨架(通常含 C–H 键)、多以共价键结合的分子；无机化合物则多为离子型、熔点较高、来源于矿物的物质。",
        "ku": "Pêkhateya organîk molekuleke bi îskeleta karbonê ye (bi piranî girêdanên C–H dihewîne) û bi piranî girêdanên wê kovalent in; pêkhateya anorganîk bi piranî madeyeke îyonîk e, xala wê ya helînê bilind e û ji kanzayan tê."
      }
    },
    {
      "id": "u23-c04",
      "conceptA": {
        "tr": "Grafen",
        "en": "Graphene",
        "de": "Graphen",
        "fr": "Graphène",
        "ru": "Графен",
        "ar": "الجرافين",
        "zh": "石墨烯",
        "ku": "Grafen"
      },
      "conceptB": {
        "tr": "Karbon Nanotüp",
        "en": "Carbon Nanotube",
        "de": "Kohlenstoffnanoröhre",
        "fr": "Nanotube de carbone",
        "ru": "Углеродная нанотрубка",
        "ar": "أنبوب الكربون النانوي",
        "zh": "碳纳米管",
        "ku": "Nanotûba Karbonê"
      },
      "distinction": {
        "tr": "Grafen tek atom kalınlığında, iki boyutlu bal peteği örgülü bir karbon tabakasıdır; karbon nanotüp ise böyle bir tabakanın silindir biçiminde kıvrılmış hâlidir.",
        "en": "Graphene is a one-atom-thick, two-dimensional honeycomb sheet of carbon atoms; a carbon nanotube is such a sheet rolled into a cylinder.",
        "de": "Graphen ist eine ein Atom dicke, zweidimensionale wabenförmige Schicht aus Kohlenstoffatomen; eine Kohlenstoffnanoröhre ist eine solche Schicht, die zu einem Zylinder aufgerollt ist.",
        "fr": "Graphène : feuillet bidimensionnel en nid d'abeille d'atomes de carbone, épais d'un seul atome ; nanotube de carbone : un tel feuillet enroulé en cylindre.",
        "ru": "Графен — двумерный сотовый слой атомов углерода толщиной в один атом; углеродная нанотрубка — такой же слой, свёрнутый в цилиндр.",
        "ar": "الجرافين طبقة ثنائية الأبعاد من ذرات الكربون على شكل خلايا النحل سمكها ذرة واحدة؛ أما أنبوب الكربون النانوي فهو طبقة كهذه ملفوفة على شكل أسطوانة.",
        "zh": "石墨烯是由碳原子构成的单原子厚度的二维蜂窝状片层；碳纳米管则是由这样的片层卷成的圆筒。",
        "ku": "Grafen qateke karbonê ya dudîmensî û şaneşaneyî ye ku stûriya wê yek atom e; nanotûba karbonê jî qateke wiha ye ku bi şiklê sîlîndirê hatiye pêçandin."
      }
    },
    {
      "id": "u23-c05",
      "conceptA": {
        "tr": "Polar Molekül",
        "en": "Polar Molecule",
        "de": "Polares Molekül",
        "fr": "Molécule polaire",
        "ru": "Полярная молекула",
        "ar": "جزيء قطبي",
        "zh": "极性分子",
        "ku": "Molekula Polar"
      },
      "conceptB": {
        "tr": "Apolar Molekül",
        "en": "Nonpolar Molecule",
        "de": "Unpolares Molekül",
        "fr": "Molécule apolaire",
        "ru": "Неполярная молекула",
        "ar": "جزيء غير قطبي",
        "zh": "非极性分子",
        "ku": "Molekula Nepolar"
      },
      "distinction": {
        "tr": "Polar molekülde bağ dipolleri birbirini yok etmez, net dipol momenti sıfırdan farklıdır (H2O, NH3); apolar molekülde simetri nedeniyle bağ dipolleri birbirini yok eder (CO2, CH4, BF3).",
        "en": "In a polar molecule the bond dipoles do not cancel and the net dipole moment is non-zero (H2O, NH3); in a nonpolar molecule the bond dipoles cancel because of symmetry (CO2, CH4, BF3).",
        "de": "Polares Molekül: Die Bindungsdipole heben sich nicht auf, das Gesamtdipolmoment ist ungleich null (H2O, NH3); unpolares Molekül: Die Bindungsdipole heben sich aufgrund der Symmetrie auf (CO2, CH4, BF3).",
        "fr": "Dans une molécule polaire, les dipôles de liaison ne s'annulent pas et le moment dipolaire total est non nul (H2O, NH3) ; dans une molécule apolaire, ils s'annulent par symétrie (CO2, CH4, BF3).",
        "ru": "Полярная молекула имеет ненулевой суммарный дипольный момент, так как диполи связей не компенсируются (H2O, NH3); неполярная молекула благодаря симметрии имеет нулевой дипольный момент: диполи связей взаимно компенсируются (CO2, CH4, BF3).",
        "ar": "في الجزيء القطبي لا تلغي ثنائيات أقطاب الروابط بعضها، فيكون عزم ثنائي القطب الكلي غير صفري (H2O، NH3)؛ وفي الجزيء غير القطبي تلغي بعضها بسبب التماثل (CO2، CH4، BF3).",
        "zh": "极性分子中各键的偶极不能相互抵消，分子偶极矩不为零(H2O、NH3)；非极性分子由于结构对称，键的偶极相互抵消(CO2、CH4、BF3)。",
        "ku": "Di molekula polar de dîpolên girêdanan hev betal nakin û momenta dîpolê ya net ne sifir e (H2O, NH3); di molekula nepolar de ji ber sîmetriyê dîpolên girêdanan hev betal dikin (CO2, CH4, BF3)."
      }
    },
    {
      "id": "u23-c06",
      "conceptA": {
        "tr": "sp3 Hibritleşmesi",
        "en": "sp3 Hybridization",
        "de": "sp3-Hybridisierung",
        "fr": "Hybridation sp3",
        "ru": "sp3-гибридизация",
        "ar": "تهجين sp3",
        "zh": "sp3 杂化",
        "ku": "Hîbrîdîzasyona sp3"
      },
      "conceptB": {
        "tr": "sp2 Hibritleşmesi",
        "en": "sp2 Hybridization",
        "de": "sp2-Hybridisierung",
        "fr": "Hybridation sp2",
        "ru": "sp2-гибридизация",
        "ar": "تهجين sp2",
        "zh": "sp2 杂化",
        "ku": "Hîbrîdîzasyona sp2"
      },
      "distinction": {
        "tr": "sp3 hibritleşmesinde bir s ve üç p orbitali karışarak 4 hibrit orbital oluşur (109,5°); sp2 hibritleşmesinde bir s ve iki p orbitali karışarak 3 hibrit orbital oluşur (120°).",
        "en": "In sp3 hybridization one s and three p orbitals mix to form 4 hybrid orbitals (109.5°); in sp2 hybridization one s and two p orbitals mix to form 3 hybrid orbitals (120°).",
        "de": "Bei der sp3-Hybridisierung mischen sich ein s- und drei p-Orbitale zu 4 Hybridorbitalen (109,5°); bei der sp2-Hybridisierung mischen sich ein s- und zwei p-Orbitale zu 3 Hybridorbitalen (120°).",
        "fr": "Dans l'hybridation sp3, une orbitale s et trois orbitales p se combinent pour donner 4 orbitales hybrides (109,5°) ; dans l'hybridation sp2, une orbitale s et deux orbitales p donnent 3 orbitales hybrides (120°).",
        "ru": "sp3-гибридизация — смешение одной s- и трёх p-орбиталей с образованием 4 гибридных орбиталей (109,5°); sp2-гибридизация — смешение одной s- и двух p-орбиталей с образованием 3 гибридных орбиталей (120°).",
        "ar": "في تهجين sp3 يندمج مدار s واحد مع ثلاثة مدارات p لتكوين 4 مدارات مهجنة (109.5°)؛ وفي تهجين sp2 يندمج مدار s واحد مع مدارين p لتكوين 3 مدارات مهجنة (120°).",
        "zh": "sp3 杂化中 1 个 s 轨道与 3 个 p 轨道混合形成 4 个杂化轨道(109.5°)；sp2 杂化中 1 个 s 轨道与 2 个 p 轨道混合形成 3 个杂化轨道(120°)。",
        "ku": "Di hîbrîdîzasyona sp3 de orbîtaleke s û sê orbîtalên p tevlî hev dibin û 4 orbîtalên hîbrîd çêdikin (109,5°); di hîbrîdîzasyona sp2 de orbîtaleke s û du orbîtalên p tevlî hev dibin û 3 orbîtalên hîbrîd çêdikin (120°)."
      }
    },
    {
      "id": "u23-c07",
      "conceptA": {
        "tr": "Düzgün Dörtyüzlü (AX4)",
        "en": "Regular Tetrahedron (AX4)",
        "de": "Regelmäßiges Tetraeder (AX4)",
        "fr": "Tétraèdre régulier (AX4)",
        "ru": "Правильный тетраэдр (AX4)",
        "ar": "رباعي الأوجه المنتظم (AX4)",
        "zh": "正四面体形(AX4)",
        "ku": "Tetrahedrala Rêkûpêk (AX4)"
      },
      "conceptB": {
        "tr": "Üçgen Piramit (AX3E)",
        "en": "Triangular Pyramid (AX3E)",
        "de": "Dreieckige Pyramide (AX3E)",
        "fr": "Pyramide triangulaire (AX3E)",
        "ru": "Тригональная пирамида (AX3E)",
        "ar": "الهرم الثلاثي (AX3E)",
        "zh": "三角锥形(AX3E)",
        "ku": "Pîramîda Sêgoşe (AX3E)"
      },
      "distinction": {
        "tr": "AX4'te ortaklanmamış elektron çifti yoktur ve bağ açısı 109,5°'dir (CH4); AX3E'de 1 ortaklanmamış çift bağları iterek bağ açısını yaklaşık 107°'ye düşürür (NH3).",
        "en": "AX4 has no lone pairs and its bond angle is 109.5° (CH4); in AX3E, 1 lone pair pushes the bonds closer, reducing the angle to about 107° (NH3).",
        "de": "AX4 besitzt kein freies Elektronenpaar, der Bindungswinkel beträgt 109,5° (CH4); bei AX3E drückt 1 freies Elektronenpaar die Bindungen zusammen, sodass der Winkel auf etwa 107° sinkt (NH3).",
        "fr": "AX4 ne possède aucun doublet non liant et son angle de liaison est de 109,5° (CH4) ; dans AX3E, 1 doublet non liant repousse les liaisons et l'angle diminue à environ 107° (NH3).",
        "ru": "Правильный тетраэдр (AX4) образуется, когда у центрального атома нет неподелённых пар, валентный угол 109,5° (CH4); тригональная пирамида (AX3E) образуется при одной неподелённой паре, которая отталкивает связи и уменьшает угол примерно до 107° (NH3).",
        "ar": "لا يوجد في AX4 أزواج إلكترونية غير رابطة وزاوية الرابطة 109.5° (CH4)؛ أما في AX3E فيدفع زوج غير رابط واحد الروابط فتنخفض الزاوية إلى نحو 107° (NH3).",
        "zh": "正四面体形(AX4)的中心原子没有孤对电子，键角为 109.5°(如 CH4)；三角锥形(AX3E)的中心原子有 1 对孤对电子，它排斥成键电子对，使键角减小到约 107°(如 NH3)。",
        "ku": "Di tetrahedrala rêkûpêk (AX4) de cotê elektronan ê nehevpar nîne û goşeya girêdanê 109,5° ye (CH4); di pîramîda sêgoşe (AX3E) de 1 cotê nehevpar girêdanan dehf dide û goşeyê dadixe nêzîkî 107° (NH3)."
      }
    },
    {
      "id": "u23-c08",
      "conceptA": {
        "tr": "Doğrusal Geometri (AX2)",
        "en": "Linear Geometry (AX2)",
        "de": "Lineare Geometrie (AX2)",
        "fr": "Géométrie linéaire (AX2)",
        "ru": "Линейная форма (AX2)",
        "ar": "الهندسة الخطية (AX2)",
        "zh": "直线形(AX2)",
        "ku": "Geometriya Xêzikî (AX2)"
      },
      "conceptB": {
        "tr": "Kırık Doğru (AX2E2)",
        "en": "Bent (AX2E2)",
        "de": "Gewinkelt (AX2E2)",
        "fr": "Coudée (AX2E2)",
        "ru": "Угловая форма (AX2E2)",
        "ar": "منحنٍ (AX2E2)",
        "zh": "V形(AX2E2)",
        "ku": "Geometriya Goşeyî (AX2E2)"
      },
      "distinction": {
        "tr": "AX2'de merkez atomda ortaklanmamış elektron çifti yoktur ve iki bağ arasındaki açı 180°'dir (CO2); AX2E2'de merkez atomdaki 2 ortaklanmamış elektron çifti bağ açısını 104,5°'ye düşürür (H2O).",
        "en": "In AX2 the central atom has no lone pairs and the angle between the two bonds is 180° (CO2); in AX2E2 the 2 lone pairs on the central atom reduce the bond angle to 104.5° (H2O).",
        "de": "AX2: Das Zentralatom trägt kein freies Elektronenpaar, der Winkel zwischen den beiden Bindungen beträgt 180° (CO2); AX2E2: Die 2 freien Elektronenpaare am Zentralatom verkleinern den Bindungswinkel auf 104,5° (H2O).",
        "fr": "Dans AX2, l'atome central ne porte aucun doublet non liant et l'angle entre les deux liaisons est de 180° (CO2) ; dans AX2E2, les 2 doublets non liants de l'atome central réduisent l'angle de liaison à 104,5° (H2O).",
        "ru": "Линейная форма (AX2) возникает, когда у центрального атома нет неподелённых пар, угол между двумя связями 180° (CO2); угловая форма (AX2E2) возникает, когда две неподелённые пары центрального атома уменьшают валентный угол до 104,5° (H2O).",
        "ar": "في AX2 لا تحمل الذرة المركزية أزواجًا إلكترونية غير رابطة والزاوية بين الرابطتين 180° (CO2)؛ أما في AX2E2 فإن زوجي الإلكترونات غير الرابطين على الذرة المركزية يقلّلان زاوية الرابطة إلى 104.5° (H2O).",
        "zh": "直线形(AX2)的中心原子没有孤对电子，两个键之间的夹角为 180°(如 CO2)；V形(AX2E2)的中心原子上有 2 对孤对电子，使键角减小到 104.5°(如 H2O)。",
        "ku": "Di geometriya xêzikî (AX2) de li ser atoma navendî cotê elektronan ê nehevpar nîne û goşeya di navbera her du girêdanan de 180° ye (CO2); di geometriya goşeyî (AX2E2) de 2 cotên nehevpar ên li ser atoma navendî goşeya girêdanê dadixin 104,5° (H2O)."
      }
    }
  ],
  "sequences": [
    {
      "id": "u23-s01",
      "title": {
        "tr": "VSEPR ile Molekül Geometrisinin Belirlenmesi",
        "en": "Determining Molecular Geometry with VSEPR",
        "de": "Bestimmung der Molekülgeometrie mit VSEPR",
        "fr": "Détermination de la géométrie moléculaire par la VSEPR",
        "ru": "Определение геометрии молекулы по теории VSEPR",
        "ar": "تحديد الشكل الهندسي للجزيء بنظرية VSEPR",
        "zh": "用 VSEPR 判断分子几何构型",
        "ku": "Diyarkirina Geometriya Molekulê bi VSEPR"
      },
      "steps": [
        {
          "tr": "Merkez atomun değerlik elektron sayısını bul",
          "en": "Find the number of valence electrons of the central atom",
          "de": "Finden Sie die Anzahl der Valenzelektronen des Zentralatoms",
          "fr": "Trouver le nombre d'électrons de valence de l'atome central",
          "ru": "Найти число валентных электронов центрального атома",
          "ar": "أوجد عدد إلكترونات التكافؤ للذرة المركزية",
          "zh": "求中心原子的价电子数",
          "ku": "Hejmara elektronên valansê yên atoma navendî bibîne"
        },
        {
          "tr": "Lewis nokta yapısını çiz",
          "en": "Draw Lewis dot structure",
          "de": "Zeichnen Sie die Lewis-Punktstruktur",
          "fr": "Dessiner la structure de points de Lewis",
          "ru": "Изобразить структуру Льюиса (электронную формулу)",
          "ar": "ارسم تركيب لويس النقطي",
          "zh": "画出路易斯结构式",
          "ku": "Avahiya xalî ya Lewis xêz bike"
        },
        {
          "tr": "Bağ yapan atomları (X) ve ortaklanmamış elektron çiftlerini (E) say",
          "en": "Count bonding atoms (X) and unshared electron pairs (E)",
          "de": "Zählen Sie bindende Atome (X) und ungeteilte Elektronenpaare (E).",
          "fr": "Comptez les atomes de liaison (X) et les paires d'électrons non partagés (E)",
          "ru": "Подсчитать связанные атомы (X) и неподелённые электронные пары (E)",
          "ar": "عُدّ الذرات المرتبطة (X) وأزواج الإلكترونات غير الرابطة (E)",
          "zh": "数出与中心原子相连的原子数(X)和孤对电子数(E)",
          "ku": "Atomên girêdanê çêdikin (X) û cotên elektronan ên nehevpar (E) bijmêre"
        },
        {
          "tr": "VSEPR formülünden (AXnEm) geometriyi ve açıyı belirle",
          "en": "Determine geometry and angle from VSEPR formula (AXnEm)",
          "de": "Bestimmen Sie Geometrie und Winkel anhand der VSEPR-Formel (AXnEm).",
          "fr": "Déterminer la géométrie et l'angle à partir de la formule VSEPR (AXnEm)",
          "ru": "Определить по формуле VSEPR (AXnEm) форму молекулы и валентный угол",
          "ar": "حدّد الشكل الهندسي والزاوية من صيغة VSEPR (AXnEm)",
          "zh": "根据 VSEPR 通式(AXnEm)确定分子构型和键角",
          "ku": "Ji formula VSEPR (AXnEm) geometrî û goşeyê diyar bike"
        }
      ]
    },
    {
      "id": "u23-s02",
      "title": {
        "tr": "Karbonda sp3 Hibritleşmesinin Oluşumu (CH4)",
        "en": "Formation of sp3 Hybridization in Carbon (CH4)",
        "de": "Entstehung der sp3-Hybridisierung am Kohlenstoff (CH4)",
        "fr": "Formation de l'hybridation sp3 du carbone (CH4)",
        "ru": "Возникновение sp3-гибридизации у атома углерода (CH4)",
        "ar": "تكوّن التهجين sp3 في الكربون (CH4)",
        "zh": "碳原子 sp3 杂化的形成(CH4)",
        "ku": "Çêbûna Hîbrîdîzasyona sp3 di Karbonê de (CH4)"
      },
      "steps": [
        {
          "tr": "Karbonun temel hal elektron dizilimi yazılır: 1s2 2s2 2p2 (2 yarı dolu orbital)",
          "en": "Write carbon's ground-state electron configuration: 1s2 2s2 2p2 (2 half-filled orbitals)",
          "de": "Die Grundzustands-Elektronenkonfiguration des Kohlenstoffs wird notiert: 1s2 2s2 2p2 (2 halb besetzte Orbitale)",
          "fr": "On écrit la configuration électronique fondamentale du carbone : 1s2 2s2 2p2 (2 orbitales à moitié remplies)",
          "ru": "Записывают электронную конфигурацию углерода в основном состоянии: 1s2 2s2 2p2 (2 наполовину заполненные орбитали)",
          "ar": "يُكتب التوزيع الإلكتروني للكربون في الحالة الأساسية: 1s2 2s2 2p2 (مداران نصف ممتلئين)",
          "zh": "写出碳原子基态电子排布：1s2 2s2 2p2(2 个半充满轨道)",
          "ku": "Rêzkirina elektronan a karbonê di rewşa bingehîn de tê nivîsandin: 1s2 2s2 2p2 (2 orbîtalên nîvtijî)"
        },
        {
          "tr": "2s orbitalindeki bir elektron boş 2p orbitaline uyarılır (4 yarı dolu orbital)",
          "en": "One electron from the 2s orbital is promoted to the empty 2p orbital (4 half-filled orbitals)",
          "de": "Ein Elektron aus dem 2s-Orbital wird in das leere 2p-Orbital angehoben (4 halb besetzte Orbitale)",
          "fr": "Un électron de l'orbitale 2s est promu dans l'orbitale 2p vide (4 orbitales à moitié remplies)",
          "ru": "Один электрон с 2s-орбитали переходит на свободную 2p-орбиталь (4 наполовину заполненные орбитали)",
          "ar": "يُثار إلكترون من المدار 2s إلى مدار 2p الفارغ (4 مدارات نصف ممتلئة)",
          "zh": "2s 轨道上的一个电子激发到空的 2p 轨道(4 个半充满轨道)",
          "ku": "Elektronek ji orbîtala 2s derbasî orbîtala 2p ya vala dibe (4 orbîtalên nîvtijî)"
        },
        {
          "tr": "Bir 2s ve üç 2p orbitali karışarak eş enerjili dört sp3 hibrit orbitali oluşturur",
          "en": "One 2s and three 2p orbitals mix to form four equivalent sp3 hybrid orbitals",
          "de": "Ein 2s- und drei 2p-Orbitale mischen sich zu vier energiegleichen sp3-Hybridorbitalen",
          "fr": "Une orbitale 2s et trois orbitales 2p se combinent pour former quatre orbitales hybrides sp3 équivalentes",
          "ru": "Одна 2s- и три 2p-орбитали смешиваются, образуя четыре равноценные sp3-гибридные орбитали",
          "ar": "يندمج مدار 2s مع ثلاثة مدارات 2p لتكوين أربعة مدارات مهجنة sp3 متكافئة",
          "zh": "一个 2s 轨道与三个 2p 轨道混合，形成四个等价的 sp3 杂化轨道",
          "ku": "Orbîtaleke 2s û sê orbîtalên 2p tevlî hev dibin û çar orbîtalên hîbrîd ên sp3 yên bi enerjiya wekhev çêdikin"
        },
        {
          "tr": "Dört sp3 orbitali H atomlarının 1s orbitalleriyle örtüşerek 109,5° açılı dört C–H sigma bağı yapar",
          "en": "The four sp3 orbitals overlap with the 1s orbitals of H atoms to form four C–H sigma bonds at 109.5°",
          "de": "Die vier sp3-Orbitale überlappen mit den 1s-Orbitalen der H-Atome zu vier C–H-Sigma-Bindungen mit 109,5°",
          "fr": "Les quatre orbitales sp3 recouvrent les orbitales 1s des atomes H et forment quatre liaisons sigma C–H à 109,5°",
          "ru": "Четыре sp3-орбитали перекрываются с 1s-орбиталями атомов H и образуют четыре σ-связи C–H под углом 109,5°",
          "ar": "تتداخل مدارات sp3 الأربعة مع مدارات 1s لذرات H مكونة أربع روابط سيجما C–H بزاوية 109.5°",
          "zh": "四个 sp3 轨道与 H 原子的 1s 轨道重叠，形成四个键角为 109.5° 的 C–H σ 键",
          "ku": "Çar orbîtalên sp3 bi orbîtalên 1s ên atomên H re hev digirin û çar girêdanên sigma yên C–H bi goşeya 109,5° çêdikin"
        }
      ]
    },
    {
      "id": "u23-s03",
      "title": {
        "tr": "Wöhler Deneyi ve Organik Kimyanın Doğuşu",
        "en": "Wöhler's Experiment and the Birth of Organic Chemistry",
        "de": "Wöhlers Versuch und die Geburt der organischen Chemie",
        "fr": "L'expérience de Wöhler et la naissance de la chimie organique",
        "ru": "Опыт Вёлера и зарождение органической химии",
        "ar": "تجربة فولر ونشأة الكيمياء العضوية",
        "zh": "维勒实验与有机化学的诞生",
        "ku": "Ceribandina Wöhler û Destpêka Kîmyaya Organîk"
      },
      "steps": [
        {
          "tr": "Organik maddelerin yalnızca canlılarda yaşam gücüyle oluşabileceği (vitalizm) kabul ediliyordu",
          "en": "It was believed that organic substances could form only in living things through a vital force (vitalism)",
          "de": "Man nahm an, dass organische Stoffe nur in Lebewesen durch eine Lebenskraft entstehen können (Vitalismus)",
          "fr": "On pensait que les substances organiques ne pouvaient se former que chez les êtres vivants grâce à une force vitale (vitalisme)",
          "ru": "Считалось, что органические вещества могут образовываться только в живых организмах благодаря жизненной силе (витализм)",
          "ar": "كان يُعتقد أن المواد العضوية لا تتكون إلا في الكائنات الحية بفعل قوة حيوية (المذهب الحيوي)",
          "zh": "人们曾认为有机物只能在生物体内依靠“生命力”产生（生命力论）",
          "ku": "Dihat qebûlkirin ku madeyên organîk tenê di zindiyan de bi hêza jiyanê çêdibin (vîtalîzm)"
        },
        {
          "tr": "1828'de Wöhler anorganik amonyum siyanatı ısıtarak üre elde etti",
          "en": "In 1828 Wöhler obtained urea by heating inorganic ammonium cyanate",
          "de": "1828 erhielt Wöhler durch Erhitzen von anorganischem Ammoniumcyanat Harnstoff",
          "fr": "En 1828, Wöhler obtint de l'urée en chauffant du cyanate d'ammonium inorganique",
          "ru": "В 1828 году Вёлер получил мочевину нагреванием неорганического цианата аммония",
          "ar": "في عام 1828 حصل فولر على اليوريا بتسخين سيانات الأمونيوم غير العضوية",
          "zh": "1828 年，维勒加热无机物氰酸铵得到了尿素",
          "ku": "Di sala 1828an de Wöhler bi germkirina amonyûm sîyanata anorganîk ure bi dest xist"
        },
        {
          "tr": "Organik maddelerin laboratuvarda anorganik maddelerden de sentezlenebileceği gösterildi; vitalizm zamanla terk edildi",
          "en": "It was shown that organic substances can also be synthesized in the laboratory from inorganic ones; vitalism was gradually abandoned",
          "de": "Es wurde gezeigt, dass organische Stoffe im Labor auch aus anorganischen hergestellt werden können; der Vitalismus wurde nach und nach aufgegeben",
          "fr": "On montra que les substances organiques peuvent aussi être synthétisées au laboratoire à partir de substances inorganiques ; le vitalisme fut peu à peu abandonné",
          "ru": "Было показано, что органические вещества можно синтезировать в лаборатории и из неорганических; витализм постепенно был оставлен",
          "ar": "ثبت أنه يمكن تحضير المواد العضوية في المختبر من مواد غير عضوية أيضًا؛ وتُرك المذهب الحيوي تدريجيًا",
          "zh": "实验表明有机物也可以在实验室由无机物合成；生命力论随后逐渐被摒弃",
          "ku": "Hate nîşandan ku madeyên organîk dikarin di laboratuwarê de ji madeyên anorganîk jî werin sentezkirin; vîtalîzm bi demê re hate terikandin"
        },
        {
          "tr": "Organik kimya, karbon bileşiklerinin kimyası olarak yeniden tanımlandı",
          "en": "Organic chemistry was redefined as the chemistry of carbon compounds",
          "de": "Die organische Chemie wurde als Chemie der Kohlenstoffverbindungen neu definiert",
          "fr": "La chimie organique fut redéfinie comme la chimie des composés du carbone",
          "ru": "Органическую химию стали определять как химию соединений углерода",
          "ar": "أُعيد تعريف الكيمياء العضوية بأنها كيمياء مركبات الكربون",
          "zh": "有机化学被重新定义为研究碳化合物的化学",
          "ku": "Kîmyaya organîk wek kîmyaya pêkhateyên karbonê ji nû ve hate pênasekirin"
        }
      ]
    },
    {
      "id": "u23-s04",
      "title": {
        "tr": "Sigma ve Pi Bağı Sayımı",
        "en": "Counting Sigma and Pi Bonds",
        "de": "Zählen von Sigma- und Pi-Bindungen",
        "fr": "Comptage de liaisons Sigma et Pi",
        "ru": "Подсчёт σ- и π-связей",
        "ar": "عدّ روابط سيجما وباي",
        "zh": "σ 键与 π 键的计数",
        "ku": "Hejmartina Girêdanên Sigma û Pî"
      },
      "steps": [
        {
          "tr": "Molekülün açık yapı formülü yazılarak atomlar arasındaki bağlar belirlenir",
          "en": "Write the full structural formula and identify all bonds between atoms",
          "de": "Die vollständige Strukturformel wird aufgestellt und alle Bindungen zwischen den Atomen werden bestimmt",
          "fr": "On écrit la formule développée et on repère toutes les liaisons entre atomes",
          "ru": "Записывают развёрнутую структурную формулу и определяют все связи между атомами",
          "ar": "تُكتب الصيغة البنائية المفصلة وتُحدد جميع الروابط بين الذرات",
          "zh": "写出分子的结构式，确定原子之间的所有化学键",
          "ku": "Formula avahiyê ya vekirî ya molekulê tê nivîsandin û girêdanên di navbera atoman de têne diyarkirin"
        },
        {
          "tr": "Her iki atom arasındaki ilk bağ sigma bağı olarak sayılır",
          "en": "Count the first bond between any two atoms as a sigma bond",
          "de": "Die erste Bindung zwischen zwei Atomen wird als Sigma-Bindung gezählt",
          "fr": "La première liaison entre deux atomes est comptée comme liaison sigma",
          "ru": "Первую связь между двумя атомами считают σ-связью",
          "ar": "تُحسب الرابطة الأولى بين أي ذرتين رابطة سيجما",
          "zh": "任意两个原子之间的第一个键计为 σ 键",
          "ku": "Girêdana yekem a di navbera her du atoman de wek girêdana sigma tê hejmartin"
        },
        {
          "tr": "İkili bağdaki ikinci bağ ile üçlü bağdaki ikinci ve üçüncü bağlar pi bağı olarak sayılır",
          "en": "Count the second bond of a double bond and the second and third bonds of a triple bond as pi bonds",
          "de": "Die zweite Bindung einer Doppelbindung sowie die zweite und dritte Bindung einer Dreifachbindung werden als Pi-Bindungen gezählt",
          "fr": "La deuxième liaison d'une double liaison et les deuxième et troisième liaisons d'une triple liaison sont comptées comme liaisons pi",
          "ru": "Вторую связь двойной связи, а также вторую и третью связи тройной связи считают π-связями",
          "ar": "تُحسب الرابطة الثانية في الرابطة الثنائية والرابطتان الثانية والثالثة في الرابطة الثلاثية روابط باي",
          "zh": "双键中的第二个键以及三键中的第二、第三个键计为 π 键",
          "ku": "Girêdana duyem a girêdana ducarî û girêdanên duyem û sêyem ên girêdana sêcarî wek girêdana pî têne hejmartin"
        },
        {
          "tr": "Sigma ve pi bağları ayrı ayrı toplanır (örn. C2H2: 3 sigma, 2 pi)",
          "en": "Add up sigma and pi bonds separately (e.g., C2H2: 3 sigma, 2 pi)",
          "de": "Sigma- und Pi-Bindungen werden getrennt addiert (z. B. C2H2: 3 Sigma, 2 Pi)",
          "fr": "On additionne séparément les liaisons sigma et pi (par ex. C2H2 : 3 sigma, 2 pi)",
          "ru": "Отдельно суммируют σ- и π-связи (например, C2H2: 3 σ, 2 π)",
          "ar": "تُجمع روابط سيجما وباي كلٌّ على حدة (مثل C2H2: 3 سيجما، 2 باي)",
          "zh": "分别统计 σ 键和 π 键的总数(如 C2H2：3 个 σ 键，2 个 π 键)",
          "ku": "Girêdanên sigma û pî cuda cuda têne berhevkirin (mînak C2H2: 3 sigma, 2 pî)"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u23-twin01",
      "stem": {
        "tr": "Tabloda X, Y, Z ve T moleküllerinin merkez atomlarına ait bilgiler verilmiştir. Her molekülde merkez atoma bağlı atomlar birbirinin aynısıdır.\nBu moleküllerle ilgili;\nI. X molekülü doğrusaldır.\nII. Y ve T moleküllerinde merkez atom sp3 hibritleşmesi yapmıştır.\nIII. Z molekülü apolardır.\nyargılarından hangileri doğrudur?",
        "en": "The table gives information about the central atoms of molecules X, Y, Z and T. In each molecule the atoms bonded to the central atom are identical.\nWhich of the following statements about these molecules are correct?\nI. Molecule X is linear.\nII. In molecules Y and T the central atom is sp3 hybridized.\nIII. Molecule Z is nonpolar.",
        "de": "Die Tabelle enthält Angaben zu den Zentralatomen der Moleküle X, Y, Z und T. In jedem Molekül sind die an das Zentralatom gebundenen Atome gleich.\nWelche der folgenden Aussagen über diese Moleküle sind richtig?\nI. Das Molekül X ist linear.\nII. In den Molekülen Y und T ist das Zentralatom sp3-hybridisiert.\nIII. Das Molekül Z ist unpolar.",
        "fr": "Le tableau donne des informations sur les atomes centraux des molécules X, Y, Z et T. Dans chaque molécule, les atomes liés à l'atome central sont identiques.\nParmi les affirmations suivantes sur ces molécules, lesquelles sont correctes ?\nI. La molécule X est linéaire.\nII. Dans les molécules Y et T, l'atome central est hybridé sp3.\nIII. La molécule Z est apolaire.",
        "ru": "В таблице приведены сведения о центральных атомах молекул X, Y, Z и T. В каждой молекуле атомы, связанные с центральным атомом, одинаковы.\nКакие утверждения об этих молекулах верны?\nI. Молекула X линейная.\nII. В молекулах Y и T центральный атом находится в sp3-гибридизации.\nIII. Молекула Z неполярна.",
        "ar": "يبيّن الجدول معلومات عن الذرات المركزية في الجزيئات X وY وZ وT. وفي كل جزيء تكون الذرات المرتبطة بالذرة المركزية متماثلة.\nأيٌّ من العبارات الآتية عن هذه الجزيئات صحيحة؟\nI. الجزيء X خطي.\nII. الذرة المركزية في الجزيئين Y وT مهجّنة sp3.\nIII. الجزيء Z غير قطبي.",
        "zh": "表中给出了分子 X、Y、Z、T 中心原子的有关信息。每个分子中与中心原子相连的原子都相同。\n关于这些分子的下列说法中，哪些正确？\nI. X 分子为直线形。\nII. Y 和 T 分子中的中心原子为 sp3 杂化。\nIII. Z 分子是非极性分子。",
        "ku": "Di tabloyê de agahiyên derbarê atomên navendî yên molekulên X, Y, Z û T de hatine dayîn. Di her molekulê de atomên ku bi atoma navendî ve girêdayî ne wekhev in.\nDerbarê van molekulan de;\nI. Molekula X xêzik e.\nII. Di molekulên Y û T de atoma navendî sp3 hîbrîd bûye.\nIII. Molekula Z apolar e.\nkîjan ji van gotinan rast in?"
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
        "tr": "Tablodan VSEPR formülleri yazılır: X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I doğru: AX2'de iki elektron bölgesi 180° açıyla yerleşir, molekül doğrusaldır. II doğru: Y'de (3 bağ + 1 ortaklanmamış çift) ve T'de (4 bağ) merkez atom çevresinde dört elektron bölgesi vardır; bu da sp3 hibritleşmesidir (Y üçgen piramit, T düzgün dörtyüzlü). III yanlış: Z'de iki ortaklanmamış çift molekülü kırık doğru yapar; bağ dipolleri birbirini yok etmez ve molekül polardır (H2O gibi). Z'yi iki atom bağladığı için X gibi doğrusal ve apolar sanmak, ortaklanmamış çiftleri gözden kaçırmaktır.",
        "en": "From the table the VSEPR formulas are X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I is correct: in AX2 the two electron domains lie at 180°, so the molecule is linear. II is correct: Y (3 bonds + 1 lone pair) and T (4 bonds) both have four electron domains around the central atom, which corresponds to sp3 hybridization (Y is trigonal pyramidal, T tetrahedral). III is wrong: the two lone pairs make Z bent; the bond dipoles do not cancel and the molecule is polar (like H2O). Thinking Z is linear and nonpolar like X because it has two bonded atoms means overlooking the lone pairs.",
        "de": "Aus der Tabelle ergeben sich die VSEPR-Formeln X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I ist richtig: Bei AX2 liegen die zwei Elektronendomänen im Winkel von 180°, das Molekül ist linear. II ist richtig: Y (3 Bindungen + 1 freies Elektronenpaar) und T (4 Bindungen) haben je vier Elektronendomänen um das Zentralatom, was einer sp3-Hybridisierung entspricht (Y trigonal-pyramidal, T tetraedrisch). III ist falsch: Die zwei freien Elektronenpaare machen Z gewinkelt; die Bindungsdipole heben sich nicht auf, das Molekül ist polar (wie H2O). Wer Z wegen der zwei gebundenen Atome wie X für linear und unpolar hält, übersieht die freien Elektronenpaare.",
        "fr": "Le tableau donne les formules VSEPR : X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I est correcte : dans AX2, les deux domaines électroniques sont à 180°, la molécule est linéaire. II est correcte : Y (3 liaisons + 1 doublet non liant) et T (4 liaisons) ont chacun quatre domaines électroniques autour de l'atome central, ce qui correspond à l'hybridation sp3 (Y pyramidale à base triangulaire, T tétraédrique). III est fausse : les deux doublets non liants rendent Z coudée ; les dipôles de liaison ne se compensent pas et la molécule est polaire (comme H2O). Croire Z linéaire et apolaire comme X parce qu'elle a deux atomes liés revient à oublier les doublets non liants.",
        "ru": "По таблице записываем формулы VSEPR: X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I верно: в AX2 две электронные области расположены под углом 180°, молекула линейная. II верно: у Y (3 связи + 1 неподелённая пара) и у T (4 связи) вокруг центрального атома по четыре электронные области, что соответствует sp3-гибридизации (Y — тригональная пирамида, T — тетраэдр). III неверно: две неподелённые пары делают Z угловой; дипольные моменты связей не компенсируются, и молекула полярна (как H2O). Считать Z линейной и неполярной, как X, только потому, что у неё два связанных атома, значит не учитывать неподелённые пары.",
        "ar": "من الجدول تُكتب صيغ VSEPR: X = AX2، Y = AX3E، Z = AX2E2، T = AX4. العبارة I صحيحة: في AX2 تتوزع منطقتا الإلكترونات بزاوية 180° فيكون الجزيء خطيًا. العبارة II صحيحة: في Y (3 روابط + زوج حر) وفي T (4 روابط) أربع مناطق إلكترونية حول الذرة المركزية، وهذا يقابل التهجين sp3 (Y هرم ثلاثي، T رباعي أوجه منتظم). العبارة III خاطئة: الزوجان الحران يجعلان Z منحنيًا، فلا تُلغي ثنائيات أقطاب الروابط بعضها بعضًا ويكون الجزيء قطبيًا (مثل H2O). وظن Z خطيًا وغير قطبي مثل X لأنه مرتبط بذرتين هو إغفال للأزواج الحرة.",
        "zh": "由表可写出 VSEPR 式：X = AX2，Y = AX3E，Z = AX2E2，T = AX4。I 正确：AX2 中两个电子域成 180°，分子为直线形。II 正确：Y（3 个键 + 1 对孤电子对）和 T（4 个键）的中心原子周围都有四个电子域，对应 sp3 杂化（Y 为三角锥形，T 为正四面体）。III 错误：两对孤电子对使 Z 成 V 形，键偶极不能抵消，分子有极性（如 H2O）。因为 Z 只连两个原子就认为它像 X 一样是直线形非极性分子，是忽略了孤电子对。",
        "ku": "Ji tabloyê formulên VSEPR têne nivîsandin: X = AX2, Y = AX3E, Z = AX2E2, T = AX4. I rast e: di AX2 de du herêmên elektronan bi goşeya 180° rêz dibin, molekul xêzik e. II rast e: di Y (3 girêdan + 1 cotê ne-hevpar) û T (4 girêdan) de li dora atoma navendî çar herêmên elektronan hene; ev hîbrîdbûna sp3 e (Y pîramîda sêgoşe, T çarrûya rêkûpêk). III şaş e: du cotên ne-hevpar Z şikestî dikin; dipolên girêdanan hev betal nakin û molekul polar e (wek H2O). Hesibandina Z wek X xêzik û apolar ji ber ku du atom pê ve girêdayî ne, paşguhkirina cotên ne-hevpar e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Molekül",
            "en": "Molecule",
            "de": "Molekül",
            "fr": "Molécule",
            "ru": "Молекула",
            "ar": "الجزيء",
            "zh": "分子",
            "ku": "Molekul"
          },
          {
            "tr": "Merkez atoma bağlı atom sayısı",
            "en": "Atoms bonded to central atom",
            "de": "An das Zentralatom gebundene Atome",
            "fr": "Atomes liés à l'atome central",
            "ru": "Атомов, связанных с центральным",
            "ar": "عدد الذرات المرتبطة بالذرة المركزية",
            "zh": "与中心原子相连的原子数",
            "ku": "Hejmara atomên bi atoma navendî ve girêdayî"
          },
          {
            "tr": "Ortaklanmamış elektron çifti sayısı",
            "en": "Lone pairs on central atom",
            "de": "Freie Elektronenpaare am Zentralatom",
            "fr": "Doublets non liants de l'atome central",
            "ru": "Неподелённых пар у центрального атома",
            "ar": "عدد الأزواج الحرة على الذرة المركزية",
            "zh": "中心原子的孤电子对数",
            "ku": "Hejmara cotên elektronan ên ne-hevpar"
          }
        ],
        "rows": [
          [
            "X",
            "2",
            "0"
          ],
          [
            "Y",
            "3",
            "1"
          ],
          [
            "Z",
            "2",
            "2"
          ],
          [
            "T",
            "4",
            "0"
          ]
        ]
      }
    },
    {
      "id": "u23-twin02",
      "stem": {
        "tr": "Şekilde yapı formülü verilen molekülde a, b ve c ile gösterilen bağ açılarının yaklaşık değerleri aşağıdakilerin hangisinde doğru verilmiştir? (1H, 6C, 7N)",
        "en": "In the molecule whose structural formula is shown, which option gives the approximate values of the bond angles marked a, b and c? (1H, 6C, 7N)",
        "de": "Welche Antwort gibt für das Molekül mit der abgebildeten Strukturformel die ungefähren Werte der mit a, b und c markierten Bindungswinkel richtig an? (1H, 6C, 7N)",
        "fr": "Pour la molécule dont la formule développée est représentée, quelle proposition donne les valeurs approximatives des angles de liaison notés a, b et c ? (1H, 6C, 7N)",
        "ru": "В каком варианте правильно указаны приблизительные значения валентных углов a, b и c в молекуле, структурная формула которой показана на рисунке? (1H, 6C, 7N)",
        "ar": "في الجزيء المعطاة صيغته البنائية في الشكل، أيّ الخيارات يعطي القيم التقريبية لزوايا الروابط a وb وc بشكل صحيح؟ (1H، 6C، 7N)",
        "zh": "图中给出了某分子的结构式。下列哪一项正确给出了标为 a、b、c 的键角的近似值？(1H，6C，7N)",
        "ku": "Di molekula ku formula wê ya avahiyê di şeklê de hatiye dayîn de, nirxên nêzîk ên goşeyên girêdanê yên bi a, b û c hatine nîşandan di kîjan bijardeyê de rast hatine dayîn? (1H, 6C, 7N)"
      },
      "options": [
        {
          "tr": "a: 109,5° – b: 120° – c: 180°",
          "en": "a: 109.5° – b: 120° – c: 180°",
          "de": "a: 109,5° – b: 120° – c: 180°",
          "fr": "a : 109,5° – b : 120° – c : 180°",
          "ru": "a: 109,5° – b: 120° – c: 180°",
          "ar": "a: 109.5° – b: 120° – c: 180°",
          "zh": "a：109.5° – b：120° – c：180°",
          "ku": "a: 109,5° – b: 120° – c: 180°"
        },
        {
          "tr": "a: 90° – b: 120° – c: 180°",
          "en": "a: 90° – b: 120° – c: 180°",
          "de": "a: 90° – b: 120° – c: 180°",
          "fr": "a : 90° – b : 120° – c : 180°",
          "ru": "a: 90° – b: 120° – c: 180°",
          "ar": "a: 90° – b: 120° – c: 180°",
          "zh": "a：90° – b：120° – c：180°",
          "ku": "a: 90° – b: 120° – c: 180°"
        },
        {
          "tr": "a: 109,5° – b: 109,5° – c: 120°",
          "en": "a: 109.5° – b: 109.5° – c: 120°",
          "de": "a: 109,5° – b: 109,5° – c: 120°",
          "fr": "a : 109,5° – b : 109,5° – c : 120°",
          "ru": "a: 109,5° – b: 109,5° – c: 120°",
          "ar": "a: 109.5° – b: 109.5° – c: 120°",
          "zh": "a：109.5° – b：109.5° – c：120°",
          "ku": "a: 109,5° – b: 109,5° – c: 120°"
        },
        {
          "tr": "a: 120° – b: 120° – c: 180°",
          "en": "a: 120° – b: 120° – c: 180°",
          "de": "a: 120° – b: 120° – c: 180°",
          "fr": "a : 120° – b : 120° – c : 180°",
          "ru": "a: 120° – b: 120° – c: 180°",
          "ar": "a: 120° – b: 120° – c: 180°",
          "zh": "a：120° – b：120° – c：180°",
          "ku": "a: 120° – b: 120° – c: 180°"
        },
        {
          "tr": "a: 109,5° – b: 120° – c: 120°",
          "en": "a: 109.5° – b: 120° – c: 120°",
          "de": "a: 109,5° – b: 120° – c: 120°",
          "fr": "a : 109,5° – b : 120° – c : 120°",
          "ru": "a: 109,5° – b: 120° – c: 120°",
          "ar": "a: 109.5° – b: 120° – c: 120°",
          "zh": "a：109.5° – b：120° – c：120°",
          "ku": "a: 109,5° – b: 120° – c: 120°"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Her açı, tepesindeki karbonun elektron bölgesi sayısıyla belirlenir. a açısının tepesindeki CH3 karbonu yalnızca tekli bağ yapar (4 bölge, sp3): yaklaşık 109,5°. b açısının tepesindeki karbon bir C=C ikili bağı yapar (3 bölge, sp2): yaklaşık 120°. c açısının tepesindeki karbon C≡N üçlü bağı yapar (2 bölge, sp): 180°. Kâğıt üzerindeki çizimi esas alıp CH3 karbonunda 90° veya 120° okumak ya da üçlü bağlı karbonu sp2 sanmak yanlış seçeneklere götürür; yapı formülleri gerçek açıları göstermez.",
        "en": "Each angle is determined by the number of electron domains on the carbon at its vertex. The CH3 carbon at the vertex of angle a has only single bonds (4 domains, sp3): about 109.5°. The carbon at the vertex of b forms a C=C double bond (3 domains, sp2): about 120°. The carbon at the vertex of c forms a C≡N triple bond (2 domains, sp): 180°. Reading 90° or 120° at the CH3 carbon from the drawing, or treating the triple-bonded carbon as sp2, leads to the wrong options; structural formulas do not show true angles.",
        "de": "Jeder Winkel wird durch die Zahl der Elektronendomänen am Kohlenstoff an seinem Scheitel bestimmt. Der CH3-Kohlenstoff am Scheitel von a hat nur Einfachbindungen (4 Domänen, sp3): etwa 109,5°. Der Kohlenstoff am Scheitel von b bildet eine C=C-Doppelbindung (3 Domänen, sp2): etwa 120°. Der Kohlenstoff am Scheitel von c bildet eine C≡N-Dreifachbindung (2 Domänen, sp): 180°. Wer am CH3-Kohlenstoff aus der Zeichnung 90° oder 120° abliest oder den dreifach gebundenen Kohlenstoff für sp2 hält, kommt zu falschen Antworten; Strukturformeln zeigen keine echten Winkel.",
        "fr": "Chaque angle dépend du nombre de domaines électroniques du carbone situé à son sommet. Le carbone du CH3, au sommet de a, n'a que des liaisons simples (4 domaines, sp3) : environ 109,5°. Le carbone au sommet de b forme une double liaison C=C (3 domaines, sp2) : environ 120°. Le carbone au sommet de c forme une triple liaison C≡N (2 domaines, sp) : 180°. Lire 90° ou 120° sur le dessin au niveau du CH3, ou considérer le carbone triplement lié comme sp2, conduit aux mauvaises réponses ; une formule développée ne montre pas les vrais angles.",
        "ru": "Каждый угол определяется числом электронных областей у атома углерода в его вершине. Углерод CH3 в вершине угла a образует только одинарные связи (4 области, sp3): около 109,5°. Углерод в вершине b образует двойную связь C=C (3 области, sp2): около 120°. Углерод в вершине c образует тройную связь C≡N (2 области, sp): 180°. Если «прочитать» на рисунке 90° или 120° у CH3 или считать углерод с тройной связью sp2-гибридным, получится неверный ответ; структурные формулы не передают реальных углов.",
        "ar": "تتحدد كل زاوية بعدد المناطق الإلكترونية حول ذرة الكربون الواقعة في رأسها. كربون CH3 في رأس الزاوية a لا يكوّن إلا روابط أحادية (4 مناطق، sp3): نحو 109.5°. والكربون في رأس b يكوّن رابطة ثنائية C=C (3 مناطق، sp2): نحو 120°. والكربون في رأس c يكوّن رابطة ثلاثية C≡N (منطقتان، sp): 180°. وقراءة 90° أو 120° عند كربون CH3 من الرسم، أو اعتبار الكربون ذي الرابطة الثلاثية sp2، تقود إلى الخيارات الخاطئة؛ فالصيغ البنائية لا تُظهر الزوايا الحقيقية.",
        "zh": "每个键角由其顶点碳原子的电子域数决定。a 顶点的 CH3 碳只形成单键（4 个电子域，sp3）：约 109.5°。b 顶点的碳形成 C=C 双键（3 个电子域，sp2）：约 120°。c 顶点的碳形成 C≡N 三键（2 个电子域，sp）：180°。按纸面图形把 CH3 碳处读成 90° 或 120°，或把三键碳当作 sp2，都会选错；结构式并不表示真实键角。",
        "ku": "Her goşe bi hejmara herêmên elektronan ên karbona li serê wê tê diyarkirin. Karbona CH3 a li serê goşeya a tenê girêdanên yekane çêdike (4 herêm, sp3): nêzîkî 109,5°. Karbona li serê b girêdaneke ducar a C=C çêdike (3 herêm, sp2): nêzîkî 120°. Karbona li serê c girêdaneke sêcar a C≡N çêdike (2 herêm, sp): 180°. Xwendina 90° an 120° li karbona CH3 ji ser xêzkirinê, an hesibandina karbona bi girêdana sêcar wek sp2, ber bi bijardeyên şaş ve dibe; formulên avahiyê goşeyên rastîn nîşan nadin."
      },
      "figure": {
        "kind": "svg",
        "width": 330,
        "height": 212,
        "markup": "<path d=\"M70.7 145 L109.3 123\" class=\"qf-line\"/><path d=\"M128.1 120.3 L172.3 143.1\" class=\"qf-line\"/><path d=\"M125.7 124.9 L169.9 147.7\" class=\"qf-line\"/><path d=\"M188.9 145.5 L235.1 122.5\" class=\"qf-line\"/><path d=\"M251.2 110 L289.3 90.9\" class=\"qf-line\"/><path d=\"M252.9 113.5 L291.1 94.5\" class=\"qf-line\"/><path d=\"M254.7 117.1 L292.8 98\" class=\"qf-line\"/><path d=\"M52 150 L28 150\" class=\"qf-line\"/><path d=\"M57.4 158.9 L44.6 183.1\" class=\"qf-line\"/><path d=\"M66.6 158.9 L79.4 183.1\" class=\"qf-line\"/><path d=\"M118 108 L118 84\" class=\"qf-line\"/><path d=\"M180 160 L180 184\" class=\"qf-line\"/><text x=\"62\" y=\"155\" text-anchor=\"middle\" class=\"qf-strong\">C</text><text x=\"118\" y=\"123\" text-anchor=\"middle\" class=\"qf-strong\">C</text><text x=\"180\" y=\"155\" text-anchor=\"middle\" class=\"qf-strong\">C</text><text x=\"244\" y=\"123\" text-anchor=\"middle\" class=\"qf-strong\">C</text><text x=\"300\" y=\"95\" text-anchor=\"middle\" class=\"qf-strong\">N</text><text x=\"18\" y=\"155\" text-anchor=\"middle\" class=\"qf-strong\">H</text><text x=\"40\" y=\"197\" text-anchor=\"middle\" class=\"qf-strong\">H</text><text x=\"84\" y=\"197\" text-anchor=\"middle\" class=\"qf-strong\">H</text><text x=\"118\" y=\"79\" text-anchor=\"middle\" class=\"qf-strong\">H</text><text x=\"180\" y=\"199\" text-anchor=\"middle\" class=\"qf-strong\">H</text><path d=\"M45 150 A17 17 0 0 0 54.1 165.1\" class=\"qf-stroke-accent\"/><text x=\"36.3\" y=\"169.5\" text-anchor=\"middle\" class=\"qf-strong\">a</text><path d=\"M103.2 126.4 A17 17 0 0 0 133.1 125.8\" class=\"qf-stroke-accent\"/><text x=\"118.6\" y=\"152\" text-anchor=\"middle\" class=\"qf-strong\">b</text><path d=\"M228.8 125.6 A17 17 0 0 0 259.2 110.4\" class=\"qf-stroke-accent\"/><text x=\"257.5\" y=\"148.7\" text-anchor=\"middle\" class=\"qf-strong\">c</text>"
      }
    },
    {
      "id": "u23-twin03",
      "stem": {
        "tr": "Akrilonitril molekülünün yapı formülü CH2=CH-C≡N şeklindedir.\nBu molekülde kaç tane sigma (σ) ve kaç tane pi (π) bağı vardır?",
        "en": "The structural formula of acrylonitrile is CH2=CH-C≡N.\nHow many sigma (σ) and how many pi (π) bonds does this molecule contain?",
        "de": "Die Strukturformel von Acrylnitril ist CH2=CH-C≡N.\nWie viele sigma-(σ-) und wie viele pi-(π-)Bindungen enthält dieses Molekül?",
        "fr": "La formule développée de l'acrylonitrile est CH2=CH-C≡N.\nCombien de liaisons sigma (σ) et combien de liaisons pi (π) cette molécule contient-elle ?",
        "ru": "Структурная формула акрилонитрила: CH2=CH-C≡N.\nСколько σ- и сколько π-связей содержит эта молекула?",
        "ar": "الصيغة البنائية للأكريلونيتريل هي CH2=CH-C≡N.\nكم رابطة سيجما (σ) وكم رابطة باي (π) يحتوي هذا الجزيء؟",
        "zh": "丙烯腈的结构式为 CH2=CH-C≡N。\n该分子中含有多少个σ键和多少个π键？",
        "ku": "Formula avahiyê ya akrîlonîtrîlê CH2=CH-C≡N ye.\nDi vê molekulê de çend girêdanên sigma (σ) û çend girêdanên pî (π) hene?"
      },
      "options": [
        {
          "tr": "5 σ, 3 π",
          "en": "5 σ, 3 π",
          "de": "5 σ, 3 π",
          "fr": "5 σ, 3 π",
          "ru": "5 σ, 3 π",
          "ar": "5 σ، 3 π",
          "zh": "5 个 σ，3 个 π",
          "ku": "5 σ, 3 π"
        },
        {
          "tr": "6 σ, 2 π",
          "en": "6 σ, 2 π",
          "de": "6 σ, 2 π",
          "fr": "6 σ, 2 π",
          "ru": "6 σ, 2 π",
          "ar": "6 σ، 2 π",
          "zh": "6 个 σ，2 个 π",
          "ku": "6 σ, 2 π"
        },
        {
          "tr": "6 σ, 3 π",
          "en": "6 σ, 3 π",
          "de": "6 σ, 3 π",
          "fr": "6 σ, 3 π",
          "ru": "6 σ, 3 π",
          "ar": "6 σ، 3 π",
          "zh": "6 个 σ，3 个 π",
          "ku": "6 σ, 3 π"
        },
        {
          "tr": "7 σ, 3 π",
          "en": "7 σ, 3 π",
          "de": "7 σ, 3 π",
          "fr": "7 σ, 3 π",
          "ru": "7 σ, 3 π",
          "ar": "7 σ، 3 π",
          "zh": "7 个 σ，3 个 π",
          "ku": "7 σ, 3 π"
        },
        {
          "tr": "9 σ, 3 π",
          "en": "9 σ, 3 π",
          "de": "9 σ, 3 π",
          "fr": "9 σ, 3 π",
          "ru": "9 σ, 3 π",
          "ar": "9 σ، 3 π",
          "zh": "9 个 σ，3 个 π",
          "ku": "9 σ, 3 π"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Molekülde 3 tane C–H bağı vardır; her biri tekli olduğundan 3 σ. C=C çift bağı 1 σ + 1 π, C–C tekli bağı 1 σ, C≡N üçlü bağı 1 σ + 2 π içerir. Toplam σ = 3 + 1 + 1 + 1 = 6, toplam π = 1 + 2 = 3. Üçlü bağı tek π saymak 6 σ, 2 π sonucunu; bütün bağ çizgilerini σ saymak 9 σ sonucunu verir, ikisi de yanlıştır.",
        "en": "The molecule has 3 C–H bonds, all single: 3 σ. The C=C double bond contains 1 σ + 1 π, the C–C single bond 1 σ, and the C≡N triple bond 1 σ + 2 π. Total σ = 3 + 1 + 1 + 1 = 6, total π = 1 + 2 = 3. Counting the triple bond as only one π gives 6 σ, 2 π; counting every bond line as σ gives 9 σ — both are wrong.",
        "de": "Das Molekül hat 3 C–H-Bindungen, alle einfach: 3 σ. Die C=C-Doppelbindung enthält 1 σ + 1 π, die C–C-Einfachbindung 1 σ und die C≡N-Dreifachbindung 1 σ + 2 π. Gesamt σ = 3 + 1 + 1 + 1 = 6, gesamt π = 1 + 2 = 3. Wer die Dreifachbindung nur als eine π zählt, erhält 6 σ, 2 π; wer jeden Bindungsstrich als σ zählt, erhält 9 σ — beides ist falsch.",
        "fr": "La molécule possède 3 liaisons C–H, toutes simples : 3 σ. La double liaison C=C contient 1 σ + 1 π, la liaison simple C–C 1 σ et la triple liaison C≡N 1 σ + 2 π. Total σ = 3 + 1 + 1 + 1 = 6, total π = 1 + 2 = 3. Compter la triple liaison comme une seule π donne 6 σ, 2 π ; compter chaque trait de liaison comme σ donne 9 σ — les deux sont faux.",
        "ru": "В молекуле 3 связи C–H, все одинарные: 3 σ. Двойная связь C=C содержит 1 σ + 1 π, одинарная связь C–C — 1 σ, тройная связь C≡N — 1 σ + 2 π. Всего σ = 3 + 1 + 1 + 1 = 6, всего π = 1 + 2 = 3. Если считать тройную связь одной π-связью, получится 6 σ, 2 π; если считать σ-связью каждую черту, получится 9 σ — оба варианта неверны.",
        "ar": "يحتوي الجزيء على 3 روابط C–H كلها أحادية: 3 σ. والرابطة الثنائية C=C تحتوي 1 σ + 1 π، والرابطة الأحادية C–C تحتوي 1 σ، والرابطة الثلاثية C≡N تحتوي 1 σ + 2 π. مجموع σ = 3 + 1 + 1 + 1 = 6، ومجموع π = 1 + 2 = 3. عدّ الرابطة الثلاثية رابطة π واحدة يعطي 6 σ و2 π، وعدّ كل خط رابطة σ يعطي 9 σ، وكلاهما خطأ.",
        "zh": "分子中有3个C–H单键，即3个σ键。C=C双键含1个σ键和1个π键，C–C单键含1个σ键，C≡N三键含1个σ键和2个π键。σ键总数 = 3 + 1 + 1 + 1 = 6，π键总数 = 1 + 2 = 3。把三键只算一个π键会得到6个σ、2个π；把每条键线都算作σ键会得到9个σ，两者都不对。",
        "ku": "Di molekulê de 3 girêdanên C–H hene, hemû yekane ne: 3 σ. Girêdana ducarî ya C=C 1 σ + 1 π, girêdana yekane ya C–C 1 σ û girêdana sêcarî ya C≡N 1 σ + 2 π dihewîne. Hejmara giştî ya σ = 3 + 1 + 1 + 1 = 6, ya π = 1 + 2 = 3. Hejmartina girêdana sêcarî wek tenê yek π encama 6 σ, 2 π dide; hejmartina her xêza girêdanê wek σ encama 9 σ dide; her du jî şaş in."
      }
    },
    {
      "id": "u23-twin04",
      "stem": {
        "tr": "CH3-CH=CH-C≡CH\nYukarıda yapı formülü verilen molekülde sp3, sp2 ve sp hibritleşmesi yapmış karbon atomlarının sayısı aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "CH3-CH=CH-C≡CH\nIn the molecule whose structural formula is given above, which option correctly gives the numbers of sp3-, sp2- and sp-hybridized carbon atoms?",
        "de": "CH3-CH=CH-C≡CH\nIn welcher Antwort ist für das oben angegebene Molekül die Anzahl der sp3-, sp2- und sp-hybridisierten Kohlenstoffatome richtig angegeben?",
        "fr": "CH3-CH=CH-C≡CH\nPour la molécule dont la formule développée est donnée ci-dessus, quelle proposition donne correctement le nombre d'atomes de carbone hybridés sp3, sp2 et sp ?",
        "ru": "CH3-CH=CH-C≡CH\nВ каком варианте правильно указано число атомов углерода в sp3-, sp2- и sp-гибридизации для молекулы, структурная формула которой дана выше?",
        "ar": "CH3-CH=CH-C≡CH\nفي أي الخيارات الآتية أُعطي عدد ذرات الكربون ذات التهجين sp3 وsp2 وsp في الجزيء المعطاة صيغته البنائية أعلاه بصورة صحيحة؟",
        "zh": "CH3-CH=CH-C≡CH\n对于上述结构式表示的分子，下列哪一项正确给出了sp3、sp2和sp杂化碳原子的数目？",
        "ku": "CH3-CH=CH-C≡CH\nDi molekula ku formula wê ya avahiyê li jor hatiye dayîn de, hejmara atomên karbonê yên ku hîbrîdîzasyona sp3, sp2 û sp kirine di kîjan vebijarkê de rast hatiye dayîn?"
      },
      "options": [
        {
          "tr": "sp3: 0 – sp2: 3 – sp: 2",
          "en": "sp3: 0 – sp2: 3 – sp: 2",
          "de": "sp3: 0 – sp2: 3 – sp: 2",
          "fr": "sp3: 0 – sp2: 3 – sp: 2",
          "ru": "sp3: 0 – sp2: 3 – sp: 2",
          "ar": "sp3: 0 – sp2: 3 – sp: 2",
          "zh": "sp3: 0 – sp2: 3 – sp: 2",
          "ku": "sp3: 0 – sp2: 3 – sp: 2"
        },
        {
          "tr": "sp3: 1 – sp2: 2 – sp: 2",
          "en": "sp3: 1 – sp2: 2 – sp: 2",
          "de": "sp3: 1 – sp2: 2 – sp: 2",
          "fr": "sp3: 1 – sp2: 2 – sp: 2",
          "ru": "sp3: 1 – sp2: 2 – sp: 2",
          "ar": "sp3: 1 – sp2: 2 – sp: 2",
          "zh": "sp3: 1 – sp2: 2 – sp: 2",
          "ku": "sp3: 1 – sp2: 2 – sp: 2"
        },
        {
          "tr": "sp3: 1 – sp2: 4 – sp: 0",
          "en": "sp3: 1 – sp2: 4 – sp: 0",
          "de": "sp3: 1 – sp2: 4 – sp: 0",
          "fr": "sp3: 1 – sp2: 4 – sp: 0",
          "ru": "sp3: 1 – sp2: 4 – sp: 0",
          "ar": "sp3: 1 – sp2: 4 – sp: 0",
          "zh": "sp3: 1 – sp2: 4 – sp: 0",
          "ku": "sp3: 1 – sp2: 4 – sp: 0"
        },
        {
          "tr": "sp3: 2 – sp2: 2 – sp: 1",
          "en": "sp3: 2 – sp2: 2 – sp: 1",
          "de": "sp3: 2 – sp2: 2 – sp: 1",
          "fr": "sp3: 2 – sp2: 2 – sp: 1",
          "ru": "sp3: 2 – sp2: 2 – sp: 1",
          "ar": "sp3: 2 – sp2: 2 – sp: 1",
          "zh": "sp3: 2 – sp2: 2 – sp: 1",
          "ku": "sp3: 2 – sp2: 2 – sp: 1"
        },
        {
          "tr": "sp3: 3 – sp2: 2 – sp: 0",
          "en": "sp3: 3 – sp2: 2 – sp: 0",
          "de": "sp3: 3 – sp2: 2 – sp: 0",
          "fr": "sp3: 3 – sp2: 2 – sp: 0",
          "ru": "sp3: 3 – sp2: 2 – sp: 0",
          "ar": "sp3: 3 – sp2: 2 – sp: 0",
          "zh": "sp3: 3 – sp2: 2 – sp: 0",
          "ku": "sp3: 3 – sp2: 2 – sp: 0"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Karbonlar soldan sağa numaralanırsa: C1 (CH3) yalnızca tekli bağ yapar → sp3. C2 ve C3 çift bağın karbonlarıdır → sp2. C4 ve C5 üçlü bağın karbonlarıdır → sp. Sonuç: 1 sp3, 2 sp2, 2 sp. Çoklu bağ yapan her karbonu sp2 saymak 1–4–0 sonucunu, uçtaki ≡CH karbonunu H taşıdığı için sp3 sanmak 2–2–1 sonucunu verir.",
        "en": "Numbering the carbons from left to right: C1 (CH3) forms only single bonds → sp3. C2 and C3 are the double-bond carbons → sp2. C4 and C5 are the triple-bond carbons → sp. Result: 1 sp3, 2 sp2, 2 sp. Treating every multiply bonded carbon as sp2 gives 1–4–0; thinking the terminal ≡CH carbon is sp3 because it carries an H gives 2–2–1.",
        "de": "Nummeriert man die C-Atome von links nach rechts: C1 (CH3) bildet nur Einfachbindungen → sp3. C2 und C3 sind die Kohlenstoffatome der Doppelbindung → sp2. C4 und C5 sind die der Dreifachbindung → sp. Ergebnis: 1 sp3, 2 sp2, 2 sp. Wer jedes mehrfach gebundene C als sp2 ansieht, erhält 1–4–0; wer das endständige ≡CH wegen seines H für sp3 hält, erhält 2–2–1.",
        "fr": "En numérotant les carbones de gauche à droite : C1 (CH3) ne forme que des liaisons simples → sp3. C2 et C3 sont les carbones de la double liaison → sp2. C4 et C5 sont ceux de la triple liaison → sp. Résultat : 1 sp3, 2 sp2, 2 sp. Considérer tout carbone à liaison multiple comme sp2 donne 1–4–0 ; croire que le carbone terminal ≡CH est sp3 parce qu'il porte un H donne 2–2–1.",
        "ru": "Пронумеруем атомы углерода слева направо: C1 (CH3) образует только одинарные связи → sp3. C2 и C3 — атомы двойной связи → sp2. C4 и C5 — атомы тройной связи → sp. Итог: 1 sp3, 2 sp2, 2 sp. Если считать каждый атом с кратной связью sp2, получится 1–4–0; если считать концевой атом ≡CH sp3 из-за атома H, получится 2–2–1.",
        "ar": "بترقيم ذرات الكربون من اليسار إلى اليمين: C1 (CH3) لا يكوّن إلا روابط أحادية → sp3. وC2 وC3 هما ذرتا الرابطة الثنائية → sp2. وC4 وC5 هما ذرتا الرابطة الثلاثية → sp. النتيجة: 1 sp3 و2 sp2 و2 sp. اعتبار كل كربون ذي رابطة متعددة sp2 يعطي 1–4–0، وظن أن الكربون الطرفي ≡CH من نوع sp3 لأنه يحمل H يعطي 2–2–1.",
        "zh": "从左到右给碳原子编号：C1(CH3)只形成单键 → sp3；C2和C3是双键碳 → sp2；C4和C5是三键碳 → sp。结果：1个sp3、2个sp2、2个sp。把所有含重键的碳都当作sp2会得到1–4–0；以为末端≡CH碳因带H而是sp3会得到2–2–1。",
        "ku": "Heke karbon ji çepê ber bi rastê ve werin hejmarkirin: C1 (CH3) tenê girêdanên yekane çêdike → sp3. C2 û C3 karbonên girêdana ducarî ne → sp2. C4 û C5 karbonên girêdana sêcarî ne → sp. Encam: 1 sp3, 2 sp2, 2 sp. Girtina her karbona bi girêdana pirjimar wek sp2 encama 1–4–0 dide; texmîna ku karbona dawî ya ≡CH ji ber ku H hildigire sp3 e encama 2–2–1 dide."
      }
    },
    {
      "id": "u23-twin05",
      "stem": {
        "tr": "Formaldehit (H2C=O) molekülü ile ilgili;\nI. C atomu sp2 hibritleşmesi yapmıştır.\nII. Molekül geometrisi düzlem üçgendir.\nIII. Molekül apolardır.\nyargılarından hangileri doğrudur? (1H, 6C, 8O)",
        "en": "Regarding the formaldehyde (H2C=O) molecule;\nI. The C atom is sp2-hybridized.\nII. The molecular geometry is trigonal planar.\nIII. The molecule is nonpolar.\nwhich of the statements are correct? (1H, 6C, 8O)",
        "de": "Welche der folgenden Aussagen über das Formaldehyd-Molekül (H2C=O) sind richtig?\nI. Das C-Atom ist sp2-hybridisiert.\nII. Die Molekülgeometrie ist trigonal-planar.\nIII. Das Molekül ist unpolar.\n(1H, 6C, 8O)",
        "fr": "Concernant la molécule de formaldéhyde (H2C=O) :\nI. L'atome C est hybridé sp2.\nII. La géométrie moléculaire est triangulaire plane.\nIII. La molécule est apolaire.\nlesquelles de ces affirmations sont exactes ? (1H, 6C, 8O)",
        "ru": "Какие из утверждений о молекуле формальдегида (H2C=O) верны?\nI. Атом C находится в sp2-гибридизации.\nII. Геометрия молекулы — плоский треугольник.\nIII. Молекула неполярна.\n(1H, 6C, 8O)",
        "ar": "فيما يتعلق بجزيء الفورمالدهيد (H2C=O):\nI. ذرة C مهجنة من نوع sp2.\nII. الشكل الجزيئي مثلث مستوٍ.\nIII. الجزيء غير قطبي.\nأي العبارات صحيحة؟ (1H، 6C، 8O)",
        "zh": "关于甲醛(H2C=O)分子：\nI. 碳原子为sp2杂化。\nII. 分子构型为平面三角形。\nIII. 分子是非极性分子。\n以上说法中正确的是哪些？(1H，6C，8O)",
        "ku": "Derbarê molekula formaldehîdê (H2C=O) de;\nI. Atoma C hîbrîdîzasyona sp2 kiriye.\nII. Geometriya molekulê sêgoşeya pelî ye.\nIII. Molekul nepolar e.\nkîjan ji van gotinan rast in? (1H, 6C, 8O)"
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
        "tr": "Merkez C atomu iki H ile tekli, O ile çift bağ yapar ve ortaklanmamış elektron çifti taşımaz: üç elektron bölgesi (AX3). Bu nedenle C sp2 hibritleşmesi yapmıştır (I doğru) ve molekül yaklaşık 120° açılı düzlem üçgendir (II doğru). Ancak C=O ve C–H bağlarının dipolleri eşit değildir ve birbirini yok etmez; molekül polardır (III yanlış). Düzlem üçgen geometriyi BF3 gibi özdeş uçlu moleküllerle karıştırıp apolar sanmak tipik hatadır.",
        "en": "The central C atom forms single bonds to two H atoms and a double bond to O, and has no lone pair: three electron domains (AX3). So C is sp2-hybridized (I true) and the molecule is trigonal planar with angles of about 120° (II true). However, the C=O and C–H bond dipoles are not equal and do not cancel, so the molecule is polar (III false). Confusing it with molecules like BF3, whose three outer atoms are identical, and calling it nonpolar is the typical mistake.",
        "de": "Das zentrale C-Atom bildet Einfachbindungen zu zwei H-Atomen und eine Doppelbindung zu O und trägt kein freies Elektronenpaar: drei Elektronenbereiche (AX3). Daher ist C sp2-hybridisiert (I richtig) und das Molekül trigonal-planar mit etwa 120° (II richtig). Die Dipole von C=O und C–H sind jedoch nicht gleich und heben sich nicht auf, das Molekül ist polar (III falsch). Typischer Fehler: Verwechslung mit Molekülen wie BF3 mit drei gleichen Außenatomen und Einstufung als unpolar.",
        "fr": "L'atome central C forme des liaisons simples avec deux H et une double liaison avec O, et ne porte pas de doublet non liant : trois domaines électroniques (AX3). C est donc hybridé sp2 (I vraie) et la molécule est triangulaire plane avec des angles d'environ 120° (II vraie). Mais les dipôles des liaisons C=O et C–H ne sont pas égaux et ne s'annulent pas : la molécule est polaire (III fausse). L'erreur typique est de la confondre avec des molécules comme BF3, aux trois atomes périphériques identiques, et de la dire apolaire.",
        "ru": "Центральный атом C образует одинарные связи с двумя атомами H и двойную связь с O и не имеет неподелённых пар: три электронные области (AX3). Значит, C в sp2-гибридизации (I верно), а молекула — плоский треугольник с углами около 120° (II верно). Однако диполи связей C=O и C–H не равны и не компенсируются, молекула полярна (III неверно). Типичная ошибка — спутать её с молекулами вроде BF3 с тремя одинаковыми концевыми атомами и считать неполярной.",
        "ar": "تكوّن ذرة C المركزية رابطتين أحاديتين مع ذرتي H ورابطة ثنائية مع O ولا تحمل زوجًا غير رابط: ثلاث مناطق إلكترونية (AX3). لذلك فالكربون مهجن sp2 (I صحيحة) والجزيء مثلث مستوٍ بزوايا نحو 120° (II صحيحة). لكن عزمي الرابطتين C=O وC–H غير متساويين ولا يلغي أحدهما الآخر، فالجزيء قطبي (III خاطئة). الخطأ الشائع هو الخلط بينه وبين جزيئات مثل BF3 ذات الذرات الطرفية الثلاث المتماثلة واعتباره غير قطبي.",
        "zh": "中心碳原子与两个氢原子形成单键、与氧原子形成双键，没有孤对电子，共三个电子域(AX3)。因此碳为sp2杂化(I正确)，分子为键角约120°的平面三角形(II正确)。但C=O键与C–H键的偶极不相等，不能相互抵消，分子有极性(III错误)。把它与BF3这类三个外围原子相同的分子混淆而认为是非极性的，是典型错误。",
        "ku": "Atoma C ya navendî bi du atomên H re girêdanên yekane û bi O re girêdaneke ducarî çêdike û cotê elektronan ê nehevpar li ser wê nîne: sê herêmên elektronan (AX3). Loma C hîbrîdîzasyona sp2 kiriye (I rast e) û molekul sêgoşeya pelî ye bi goşeyên nêzîkî 120° (II rast e). Lê dîpolên girêdanên C=O û C–H ne wekhev in û hev betal nakin; molekul polar e (III şaş e). Tevlihevkirina wê bi molekulên wek BF3 ku sê atomên wan ên derveyî wekhev in û nepolar hesibandina wê şaşiya berbelav e."
      }
    },
    {
      "id": "u23-twin06",
      "stem": {
        "tr": "Yalnızca C, H ve O elementlerinden oluşan bir organik bileşiğin 6,0 gramında 2,4 gram C ve 0,4 gram H bulunmaktadır.\nBileşiğin mol kütlesi 60 g/mol olduğuna göre molekül formülü aşağıdakilerden hangisidir? (H: 1, C: 12, O: 16)",
        "en": "6.0 grams of an organic compound containing only C, H and O contain 2.4 grams of C and 0.4 grams of H.\nGiven that the molar mass of the compound is 60 g/mol, what is its molecular formula? (H: 1, C: 12, O: 16)",
        "de": "6,0 Gramm einer organischen Verbindung, die nur aus C, H und O besteht, enthalten 2,4 Gramm C und 0,4 Gramm H.\nWelche Molekülformel hat die Verbindung, wenn ihre molare Masse 60 g/mol beträgt? (H: 1, C: 12, O: 16)",
        "fr": "6,0 grammes d'un composé organique formé uniquement de C, H et O contiennent 2,4 grammes de C et 0,4 gramme de H.\nSachant que la masse molaire du composé est 60 g/mol, quelle est sa formule moléculaire ? (H : 1, C : 12, O : 16)",
        "ru": "6,0 грамма органического соединения, состоящего только из C, H и O, содержат 2,4 грамма C и 0,4 грамма H.\nКакова молекулярная формула соединения, если его молярная масса 60 г/моль? (H: 1, C: 12, O: 16)",
        "ar": "تحتوي 6.0 g من مركب عضوي مكوّن من C وH وO فقط على 2.4 g من C و0.4 g من H.\nإذا كانت الكتلة المولية للمركب 60 g/mol، فما صيغته الجزيئية؟ (H: 1، C: 12، O: 16)",
        "zh": "6.0 g 只含 C、H、O 三种元素的某有机化合物中含有 2.4 g C 和 0.4 g H。\n已知该化合物的摩尔质量为 60 g/mol，其分子式是下列哪一个？(H = 1，C = 12，O = 16)",
        "ku": "Di 6,0 gram pêkhateyeke organîk a ku tenê ji elementên C, H û O pêk tê de 2,4 gram C û 0,4 gram H heye.\nGer girseya molî ya pêkhateyê 60 g/mol be, formula wê ya molekulî kîjan e? (H: 1, C: 12, O: 16)"
      },
      "options": [
        {
          "tr": "CH2O",
          "en": "CH2O",
          "de": "CH2O",
          "fr": "CH2O",
          "ru": "CH2O",
          "ar": "CH2O",
          "zh": "CH2O",
          "ku": "CH2O"
        },
        {
          "tr": "C2H4O",
          "en": "C2H4O",
          "de": "C2H4O",
          "fr": "C2H4O",
          "ru": "C2H4O",
          "ar": "C2H4O",
          "zh": "C2H4O",
          "ku": "C2H4O"
        },
        {
          "tr": "C3H8O",
          "en": "C3H8O",
          "de": "C3H8O",
          "fr": "C3H8O",
          "ru": "C3H8O",
          "ar": "C3H8O",
          "zh": "C3H8O",
          "ku": "C3H8O"
        },
        {
          "tr": "C2H4O2",
          "en": "C2H4O2",
          "de": "C2H4O2",
          "fr": "C2H4O2",
          "ru": "C2H4O2",
          "ar": "C2H4O2",
          "zh": "C2H4O2",
          "ku": "C2H4O2"
        },
        {
          "tr": "C2H6O2",
          "en": "C2H6O2",
          "de": "C2H6O2",
          "fr": "C2H6O2",
          "ru": "C2H6O2",
          "ar": "C2H6O2",
          "zh": "C2H6O2",
          "ku": "C2H6O2"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "O kütlesi = 6,0 − 2,4 − 0,4 = 3,2 g. Mol sayıları: C = 2,4/12 = 0,2; H = 0,4/1 = 0,4; O = 3,2/16 = 0,2. Oran 0,2 : 0,4 : 0,2 = 1 : 2 : 1 → basit formül CH2O (30 g/mol). n = 60/30 = 2 olduğundan molekül formülü C2H4O2'dir. CH2O basit formülde durmak, C3H8O ise yalnızca mol kütlesi 60'ı tutturup kütle oranlarını kontrol etmemek hatasıdır.",
        "en": "Mass of O = 6.0 − 2.4 − 0.4 = 3.2 g. Moles: C = 2.4/12 = 0.2; H = 0.4/1 = 0.4; O = 3.2/16 = 0.2. Ratio 0.2 : 0.4 : 0.2 = 1 : 2 : 1 → empirical formula CH2O (30 g/mol). Since n = 60/30 = 2, the molecular formula is C2H4O2. Stopping at the empirical formula CH2O, or choosing C3H8O only because its molar mass is also 60 without checking the mass ratios, are the typical errors.",
        "de": "Masse an O = 6,0 − 2,4 − 0,4 = 3,2 g. Stoffmengen: C = 2,4/12 = 0,2; H = 0,4/1 = 0,4; O = 3,2/16 = 0,2. Verhältnis 0,2 : 0,4 : 0,2 = 1 : 2 : 1 → Verhältnisformel CH2O (30 g/mol). Da n = 60/30 = 2, lautet die Molekülformel C2H4O2. Typische Fehler: bei der Verhältnisformel CH2O stehen bleiben oder C3H8O wählen, nur weil die molare Masse ebenfalls 60 ist, ohne die Massenverhältnisse zu prüfen.",
        "fr": "Masse de O = 6,0 − 2,4 − 0,4 = 3,2 g. Quantités : C = 2,4/12 = 0,2 ; H = 0,4/1 = 0,4 ; O = 3,2/16 = 0,2. Rapport 0,2 : 0,4 : 0,2 = 1 : 2 : 1 → formule brute simplifiée CH2O (30 g/mol). Comme n = 60/30 = 2, la formule moléculaire est C2H4O2. S'arrêter à la formule simplifiée CH2O, ou choisir C3H8O seulement parce que sa masse molaire vaut aussi 60 sans vérifier les rapports de masse, sont les erreurs typiques.",
        "ru": "Масса O = 6,0 − 2,4 − 0,4 = 3,2 г. Количества: C = 2,4/12 = 0,2; H = 0,4/1 = 0,4; O = 3,2/16 = 0,2. Отношение 0,2 : 0,4 : 0,2 = 1 : 2 : 1 → простейшая формула CH2O (30 г/моль). Поскольку n = 60/30 = 2, молекулярная формула C2H4O2. Типичные ошибки — остановиться на простейшей формуле CH2O или выбрать C3H8O только потому, что его молярная масса тоже 60, не проверив массовые соотношения.",
        "ar": "كتلة O = 6.0 − 2.4 − 0.4 = 3.2 g. عدد المولات: C = 2.4/12 = 0.2؛ H = 0.4/1 = 0.4؛ O = 3.2/16 = 0.2. النسبة 0.2 : 0.4 : 0.2 = 1 : 2 : 1 ← الصيغة الأولية CH2O (30 g/mol). وبما أن n = 60/30 = 2 فالصيغة الجزيئية C2H4O2. الأخطاء الشائعة هي التوقف عند الصيغة الأولية CH2O، أو اختيار C3H8O لمجرد أن كتلته المولية 60 أيضًا دون التحقق من نسب الكتل.",
        "zh": "O的质量 = 6.0 − 2.4 − 0.4 = 3.2 g。物质的量：C = 2.4/12 = 0.2；H = 0.4/1 = 0.4；O = 3.2/16 = 0.2。比值 0.2 : 0.4 : 0.2 = 1 : 2 : 1 → 最简式CH2O(30 g/mol)。n = 60/30 = 2，所以分子式为C2H4O2。停在最简式CH2O，或只因C3H8O的摩尔质量也是60而不核对质量比就选它，是典型错误。",
        "ku": "Girseya O = 6,0 − 2,4 − 0,4 = 3,2 g. Hejmarên molan: C = 2,4/12 = 0,2; H = 0,4/1 = 0,4; O = 3,2/16 = 0,2. Rêje 0,2 : 0,4 : 0,2 = 1 : 2 : 1 → formula sade CH2O (30 g/mol). Ji ber ku n = 60/30 = 2 ye, formula molekulî C2H4O2 ye. Rawestîna li ser formula sade CH2O, an hilbijartina C3H8O tenê ji ber ku girseya wê ya molî jî 60 e bêyî kontrolkirina rêjeyên girseyê, şaşiyên berbelav in."
      }
    },
    {
      "id": "u23-twin07",
      "stem": {
        "tr": "HCN molekülünün Lewis yapısı yazıldığında moleküldeki ortaklanmamış elektron çifti sayısı, sigma (σ) bağı sayısı ve pi (π) bağı sayısı sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (1H, 6C, 7N)",
        "en": "When the Lewis structure of the HCN molecule is drawn, which option correctly gives, in order, the number of lone pairs, the number of sigma (σ) bonds and the number of pi (π) bonds in the molecule? (1H, 6C, 7N)",
        "de": "Wenn man die Lewis-Formel des HCN-Moleküls aufstellt: In welcher Antwort sind die Anzahl der freien Elektronenpaare, der sigma-(σ-)Bindungen und der pi-(π-)Bindungen in dieser Reihenfolge richtig angegeben? (1H, 6C, 7N)",
        "fr": "Lorsqu'on écrit la structure de Lewis de la molécule HCN, quelle proposition donne correctement, dans l'ordre, le nombre de doublets non liants, le nombre de liaisons sigma (σ) et le nombre de liaisons pi (π) ? (1H, 6C, 7N)",
        "ru": "В каком варианте для молекулы HCN (по её структуре Льюиса) правильно указаны по порядку число неподелённых электронных пар, число σ-связей и число π-связей? (1H, 6C, 7N)",
        "ar": "عند كتابة تركيب لويس لجزيء HCN، في أي الخيارات الآتية أُعطي بالترتيب وبصورة صحيحة عدد الأزواج الإلكترونية غير الرابطة وعدد روابط سيجما (σ) وعدد روابط باي (π)؟ (1H، 6C، 7N)",
        "zh": "写出HCN分子的路易斯结构后，下列哪一项依次正确给出了分子中孤对电子数、σ键数和π键数？(1H，6C，7N)",
        "ku": "Dema avahiya Lewis a molekula HCN tê nivîsandin, hejmara cotên elektronan ên nehevpar, hejmara girêdanên sigma (σ) û hejmara girêdanên pî (π) ya di molekulê de bi rêzê di kîjan vebijarkê de rast hatiye dayîn? (1H, 6C, 7N)"
      },
      "options": [
        {
          "tr": "0 – 2 – 2",
          "en": "0 – 2 – 2",
          "de": "0 – 2 – 2",
          "fr": "0 – 2 – 2",
          "ru": "0 – 2 – 2",
          "ar": "0 – 2 – 2",
          "zh": "0 – 2 – 2",
          "ku": "0 – 2 – 2"
        },
        {
          "tr": "1 – 2 – 2",
          "en": "1 – 2 – 2",
          "de": "1 – 2 – 2",
          "fr": "1 – 2 – 2",
          "ru": "1 – 2 – 2",
          "ar": "1 – 2 – 2",
          "zh": "1 – 2 – 2",
          "ku": "1 – 2 – 2"
        },
        {
          "tr": "1 – 3 – 1",
          "en": "1 – 3 – 1",
          "de": "1 – 3 – 1",
          "fr": "1 – 3 – 1",
          "ru": "1 – 3 – 1",
          "ar": "1 – 3 – 1",
          "zh": "1 – 3 – 1",
          "ku": "1 – 3 – 1"
        },
        {
          "tr": "2 – 2 – 2",
          "en": "2 – 2 – 2",
          "de": "2 – 2 – 2",
          "fr": "2 – 2 – 2",
          "ru": "2 – 2 – 2",
          "ar": "2 – 2 – 2",
          "zh": "2 – 2 – 2",
          "ku": "2 – 2 – 2"
        },
        {
          "tr": "2 – 4 – 0",
          "en": "2 – 4 – 0",
          "de": "2 – 4 – 0",
          "fr": "2 – 4 – 0",
          "ru": "2 – 4 – 0",
          "ar": "2 – 4 – 0",
          "zh": "2 – 4 – 0",
          "ku": "2 – 4 – 0"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Toplam değerlik elektronu 1 + 4 + 5 = 10, yani 5 elektron çifti. Yapı H–C≡N: şeklindedir; H–C bağı 1 çift, C≡N bağı 3 çift kullanır, kalan 1 çift N atomu üzerinde ortaklanmamış olarak kalır. Bağlar: H–C (1 σ) ve C≡N (1 σ + 2 π) → 2 σ, 2 π. Ortaklanmamış çifti unutmak 0 sonucunu verir; üçlü bağı 2 σ + 1 π sanmak 3 σ, 1 π gibi yanlış bir sayıma götürür.",
        "en": "Total valence electrons 1 + 4 + 5 = 10, i.e. 5 electron pairs. The structure is H–C≡N: — the H–C bond uses 1 pair, the C≡N bond 3 pairs, and the remaining 1 pair stays on N as a lone pair. Bonds: H–C (1 σ) and C≡N (1 σ + 2 π) → 2 σ, 2 π. Forgetting the lone pair gives 0; thinking a triple bond is 2 σ + 1 π leads to the wrong count 3 σ, 1 π.",
        "de": "Gesamtzahl der Valenzelektronen 1 + 4 + 5 = 10, also 5 Elektronenpaare. Die Struktur ist H–C≡N: — die H–C-Bindung nutzt 1 Paar, die C≡N-Bindung 3 Paare, das übrige 1 Paar bleibt als freies Paar am N. Bindungen: H–C (1 σ) und C≡N (1 σ + 2 π) → 2 σ, 2 π. Wer das freie Paar vergisst, erhält 0; wer die Dreifachbindung für 2 σ + 1 π hält, kommt auf die falsche Zählung 3 σ, 1 π.",
        "fr": "Total des électrons de valence 1 + 4 + 5 = 10, soit 5 doublets. La structure est H–C≡N: — la liaison H–C utilise 1 doublet, la liaison C≡N 3 doublets, et le doublet restant demeure non liant sur N. Liaisons : H–C (1 σ) et C≡N (1 σ + 2 π) → 2 σ, 2 π. Oublier le doublet non liant donne 0 ; croire qu'une triple liaison vaut 2 σ + 1 π conduit au mauvais compte 3 σ, 1 π.",
        "ru": "Всего валентных электронов 1 + 4 + 5 = 10, то есть 5 электронных пар. Структура H–C≡N: — связь H–C использует 1 пару, связь C≡N 3 пары, оставшаяся 1 пара остаётся неподелённой на атоме N. Связи: H–C (1 σ) и C≡N (1 σ + 2 π) → 2 σ, 2 π. Если забыть неподелённую пару, получится 0; если считать тройную связь как 2 σ + 1 π, получится неверный подсчёт 3 σ, 1 π.",
        "ar": "مجموع إلكترونات التكافؤ 1 + 4 + 5 = 10، أي 5 أزواج إلكترونية. البنية H–C≡N: — تستخدم الرابطة H–C زوجًا واحدًا والرابطة C≡N ثلاثة أزواج، ويبقى زوج واحد غير رابط على ذرة N. الروابط: H–C (1 σ) وC≡N (1 σ + 2 π) ← 2 σ و2 π. نسيان الزوج غير الرابط يعطي 0، واعتبار الرابطة الثلاثية 2 σ + 1 π يؤدي إلى العدّ الخاطئ 3 σ و1 π.",
        "zh": "价电子总数 1 + 4 + 5 = 10，即5对电子。结构为 H–C≡N:，H–C键用1对，C≡N键用3对，剩下的1对作为孤对电子留在N原子上。键：H–C(1个σ)和C≡N(1个σ + 2个π)→ 2个σ、2个π。忘记孤对电子会得到0；误认为三键是2个σ + 1个π会得到3个σ、1个π的错误结果。",
        "ku": "Hejmara giştî ya elektronên valansê 1 + 4 + 5 = 10 e, ango 5 cotên elektronan. Avahî H–C≡N: e; girêdana H–C 1 cot, girêdana C≡N 3 cot bi kar tîne, 1 cotê mayî jî li ser atoma N nehevpar dimîne. Girêdan: H–C (1 σ) û C≡N (1 σ + 2 π) → 2 σ, 2 π. Jibîrkirina cotê nehevpar encama 0 dide; texmîna ku girêdana sêcarî 2 σ + 1 π ye dibe sedema hejmartina şaş a 3 σ, 1 π."
      }
    },
    {
      "id": "u23-twin08",
      "stem": {
        "tr": "Yalnızca C, H ve O içeren 4,6 g X bileşiği yeterli oksijenle tamamen yakılıyor. Oluşan gazlar önce susuz CaCl2 dolu I. tüpten, sonra KOH dolu II. tüpten geçiriliyor; tüplerin deneyden önceki ve sonraki kütleleri tabloda verilmiştir.\nX'in basit (empirik) formülü aşağıdakilerden hangisidir? (H: 1, C: 12, O: 16; CaCl2 yalnızca H2O'yu, KOH yalnızca CO2'yi tutar.)",
        "en": "4.6 g of compound X, which contains only C, H and O, is burned completely in enough oxygen. The gases formed pass first through tube I filled with anhydrous CaCl2 and then through tube II filled with KOH; the masses of the tubes before and after the experiment are given in the table.\nWhat is the empirical formula of X? (H: 1, C: 12, O: 16; CaCl2 absorbs only H2O and KOH absorbs only CO2.)",
        "de": "4,6 g der nur aus C, H und O bestehenden Verbindung X werden mit genügend Sauerstoff vollständig verbrannt. Die entstehenden Gase strömen erst durch Rohr I mit wasserfreiem CaCl2, dann durch Rohr II mit KOH; die Massen der Rohre vor und nach dem Versuch stehen in der Tabelle.\nWelche Verhältnisformel (empirische Formel) hat X? (H: 1, C: 12, O: 16; CaCl2 bindet nur H2O, KOH nur CO2.)",
        "fr": "On brûle complètement, dans suffisamment de dioxygène, 4,6 g d'un composé X ne contenant que C, H et O. Les gaz formés traversent d'abord le tube I rempli de CaCl2 anhydre, puis le tube II rempli de KOH ; les masses des tubes avant et après l'expérience figurent dans le tableau.\nQuelle est la formule empirique de X ? (H : 1, C : 12, O : 16 ; CaCl2 ne retient que H2O et KOH que CO2.)",
        "ru": "4,6 г вещества X, содержащего только C, H и O, полностью сжигают в достаточном количестве кислорода. Образовавшиеся газы пропускают сначала через трубку I с безводным CaCl2, затем через трубку II с KOH; массы трубок до и после опыта приведены в таблице.\nКакова простейшая (эмпирическая) формула X? (H: 1, C: 12, O: 16; CaCl2 поглощает только H2O, KOH — только CO2.)",
        "ar": "يُحرق 4.6 g من المركب X الذي يحتوي على C وH وO فقط احتراقًا تامًا في كمية كافية من الأكسجين. تُمرَّر الغازات الناتجة أولًا في الأنبوب I المملوء بـ CaCl2 اللامائي ثم في الأنبوب II المملوء بـ KOH، ويبيّن الجدول كتلتي الأنبوبين قبل التجربة وبعدها.\nما الصيغة الأولية (البسيطة) للمركب X؟ (H: 1، C: 12، O: 16؛ يمتص CaCl2 الماء H2O فقط، ويمتص KOH غاز CO2 فقط.)",
        "zh": "4.6 g 只含 C、H、O 的化合物 X 在足量氧气中完全燃烧。生成的气体先通过装有无水 CaCl2 的管 I，再通过装有 KOH 的管 II；两管实验前后的质量列于表中。\nX 的最简式（实验式）是下列哪一个？(H = 1，C = 12，O = 16；CaCl2 只吸收 H2O，KOH 只吸收 CO2。)",
        "ku": "4,6 g ji pêkhateya X ya ku tenê C, H û O dihewîne bi oksîjena têr bi tevahî tê şewitandin. Gazên çêbûyî pêşî di lûleya I ya bi CaCl2 ya bê av tije re, paşê di lûleya II ya bi KOH tije re derbas dibin; girseyên lûleyan ên beriya û piştî ceribandinê di tabloyê de hatine dayîn.\nFormula sade (empîrîk) ya X kîjan e? (H: 1, C: 12, O: 16; CaCl2 tenê H2O, KOH tenê CO2 digire.)"
      },
      "options": [
        {
          "tr": "C2H6",
          "en": "C2H6",
          "de": "C2H6",
          "fr": "C2H6",
          "ru": "C2H6",
          "ar": "C2H6",
          "zh": "C2H6",
          "ku": "C2H6"
        },
        {
          "tr": "CH3O",
          "en": "CH3O",
          "de": "CH3O",
          "fr": "CH3O",
          "ru": "CH3O",
          "ar": "CH3O",
          "zh": "CH3O",
          "ku": "CH3O"
        },
        {
          "tr": "CH4O",
          "en": "CH4O",
          "de": "CH4O",
          "fr": "CH4O",
          "ru": "CH4O",
          "ar": "CH4O",
          "zh": "CH4O",
          "ku": "CH4O"
        },
        {
          "tr": "C2H6O",
          "en": "C2H6O",
          "de": "C2H6O",
          "fr": "C2H6O",
          "ru": "C2H6O",
          "ar": "C2H6O",
          "zh": "C2H6O",
          "ku": "C2H6O"
        },
        {
          "tr": "C2H6O2",
          "en": "C2H6O2",
          "de": "C2H6O2",
          "fr": "C2H6O2",
          "ru": "C2H6O2",
          "ar": "C2H6O2",
          "zh": "C2H6O2",
          "ku": "C2H6O2"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Tablodan kütle artışları okunur: I. tüp 57,4 − 52,0 = 5,4 g H2O, II. tüp 88,8 − 80,0 = 8,8 g CO2 tutmuştur. CO2: 8,8/44 = 0,2 mol → 0,2 mol C = 2,4 g. H2O: 5,4/18 = 0,3 mol → 0,6 mol H = 0,6 g. O kütlesi = 4,6 − 2,4 − 0,6 = 1,6 g → 0,1 mol. Oran C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1 → C2H6O. Bileşikteki oksijeni hesaba katmamak C2H6'yı verir; tüplerin son kütlelerini doğrudan ürün kütlesi sanmak ya da hangi tüpün hangi gazı tuttuğunu karıştırmak da yanlış formüllere götürür.",
        "en": "From the table, the mass increases are: tube I 57.4 − 52.0 = 5.4 g of H2O and tube II 88.8 − 80.0 = 8.8 g of CO2. CO2: 8.8/44 = 0.2 mol → 0.2 mol C = 2.4 g. H2O: 5.4/18 = 0.3 mol → 0.6 mol H = 0.6 g. Mass of O = 4.6 − 2.4 − 0.6 = 1.6 g → 0.1 mol. Ratio C : H : O = 0.2 : 0.6 : 0.1 = 2 : 6 : 1 → C2H6O. Ignoring the oxygen in the compound gives C2H6; taking the final tube masses as product masses, or mixing up which tube holds which gas, also leads to wrong formulas.",
        "de": "Aus der Tabelle ergeben sich die Massenzunahmen: Rohr I 57,4 − 52,0 = 5,4 g H2O, Rohr II 88,8 − 80,0 = 8,8 g CO2. CO2: 8,8/44 = 0,2 mol → 0,2 mol C = 2,4 g. H2O: 5,4/18 = 0,3 mol → 0,6 mol H = 0,6 g. Masse O = 4,6 − 2,4 − 0,6 = 1,6 g → 0,1 mol. Verhältnis C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1 → C2H6O. Wer den Sauerstoff der Verbindung vergisst, erhält C2H6; wer die Endmassen der Rohre als Produktmassen nimmt oder die Zuordnung der Gase zu den Rohren vertauscht, kommt ebenfalls zu falschen Formeln.",
        "fr": "Le tableau donne les augmentations de masse : tube I 57,4 − 52,0 = 5,4 g de H2O, tube II 88,8 − 80,0 = 8,8 g de CO2. CO2 : 8,8/44 = 0,2 mol → 0,2 mol de C = 2,4 g. H2O : 5,4/18 = 0,3 mol → 0,6 mol de H = 0,6 g. Masse de O = 4,6 − 2,4 − 0,6 = 1,6 g → 0,1 mol. Rapport C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1 → C2H6O. Oublier l'oxygène du composé donne C2H6 ; prendre les masses finales des tubes pour les masses des produits, ou confondre quel tube retient quel gaz, conduit aussi à de fausses formules.",
        "ru": "По таблице находим увеличение массы: трубка I 57,4 − 52,0 = 5,4 г H2O, трубка II 88,8 − 80,0 = 8,8 г CO2. CO2: 8,8/44 = 0,2 моль → 0,2 моль C = 2,4 г. H2O: 5,4/18 = 0,3 моль → 0,6 моль H = 0,6 г. Масса O = 4,6 − 2,4 − 0,6 = 1,6 г → 0,1 моль. Соотношение C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1 → C2H6O. Если не учесть кислород в веществе, получится C2H6; если принять конечные массы трубок за массы продуктов или перепутать, какая трубка что поглощает, тоже получатся неверные формулы.",
        "ar": "من الجدول تُقرأ زيادتا الكتلة: الأنبوب I امتص 57.4 − 52.0 = 5.4 g من H2O، والأنبوب II امتص 88.8 − 80.0 = 8.8 g من CO2. CO2: 8.8/44 = 0.2 mol ← 0.2 mol من C = 2.4 g. H2O: 5.4/18 = 0.3 mol ← 0.6 mol من H = 0.6 g. كتلة O = 4.6 − 2.4 − 0.6 = 1.6 g ← 0.1 mol. النسبة C : H : O = 0.2 : 0.6 : 0.1 = 2 : 6 : 1 ← C2H6O. وإهمال أكسجين المركب يعطي C2H6، واعتبار الكتلتين النهائيتين للأنبوبين كتلتي النواتج أو الخلط بين الغاز الذي يمتصه كل أنبوب يقود أيضًا إلى صيغ خاطئة.",
        "zh": "由表读出质量增加量：管 I 吸收 57.4 − 52.0 = 5.4 g H2O，管 II 吸收 88.8 − 80.0 = 8.8 g CO2。CO2：8.8/44 = 0.2 mol → C 0.2 mol = 2.4 g。H2O：5.4/18 = 0.3 mol → H 0.6 mol = 0.6 g。O 的质量 = 4.6 − 2.4 − 0.6 = 1.6 g → 0.1 mol。C : H : O = 0.2 : 0.6 : 0.1 = 2 : 6 : 1 → C2H6O。忽略化合物中的氧会得到 C2H6；把两管的最终质量当作产物质量，或弄混哪根管吸收哪种气体，也会得到错误的化学式。",
        "ku": "Ji tabloyê zêdebûna girseyan tê xwendin: lûleya I 57,4 − 52,0 = 5,4 g H2O, lûleya II 88,8 − 80,0 = 8,8 g CO2 girtiye. CO2: 8,8/44 = 0,2 mol → 0,2 mol C = 2,4 g. H2O: 5,4/18 = 0,3 mol → 0,6 mol H = 0,6 g. Girseya O = 4,6 − 2,4 − 0,6 = 1,6 g → 0,1 mol. Rêje C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1 → C2H6O. Paşguhkirina oksîjena pêkhateyê C2H6 dide; hesibandina girseyên dawî yên lûleyan wek girseya berheman an tevlihevkirina kîjan lûle kîjan gazê digire jî ber bi formulên şaş ve dibe."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Tüp",
            "en": "Tube",
            "de": "Rohr",
            "fr": "Tube",
            "ru": "Трубка",
            "ar": "الأنبوب",
            "zh": "管",
            "ku": "Lûle"
          },
          {
            "tr": "Dolgu",
            "en": "Filling",
            "de": "Füllung",
            "fr": "Contenu",
            "ru": "Наполнитель",
            "ar": "الحشوة",
            "zh": "填充物",
            "ku": "Dagirtî"
          },
          {
            "tr": "İlk kütle (g)",
            "en": "Initial mass (g)",
            "de": "Anfangsmasse (g)",
            "fr": "Masse initiale (g)",
            "ru": "Масса до (г)",
            "ar": "الكتلة الابتدائية (g)",
            "zh": "初始质量 (g)",
            "ku": "Girseya destpêkê (g)"
          },
          {
            "tr": "Son kütle (g)",
            "en": "Final mass (g)",
            "de": "Endmasse (g)",
            "fr": "Masse finale (g)",
            "ru": "Масса после (г)",
            "ar": "الكتلة النهائية (g)",
            "zh": "最终质量 (g)",
            "ku": "Girseya dawî (g)"
          }
        ],
        "rows": [
          [
            "I",
            "CaCl2",
            "52,0",
            "57,4"
          ],
          [
            "II",
            "KOH",
            "80,0",
            "88,8"
          ]
        ]
      }
    },
    {
      "id": "u23-twin09",
      "stem": {
        "tr": "Bir karbon allotropuyla ilgili şu bilgiler veriliyor:\n• Her C atomu üç C atomuna bağlıdır ve sp2 hibritleşmesi yapmıştır.\n• Yapısı, tek atom kalınlığındaki altıgen halkalı bir karbon tabakasının silindir biçiminde kıvrılmasıyla oluşmuş gibidir.\n• Çapı nanometre düzeyindedir; boyuna doğrultuda elektriği iletir.\nBu allotrop aşağıdakilerden hangisidir?",
        "en": "The following information is given about a carbon allotrope:\n• Each C atom is bonded to three C atoms and is sp2-hybridized.\n• Its structure looks as if a one-atom-thick carbon sheet of hexagonal rings had been rolled into a cylinder.\n• Its diameter is on the nanometre scale; it conducts electricity along its length.\nWhich allotrope is this?",
        "de": "Über ein Kohlenstoff-Allotrop ist Folgendes bekannt:\n• Jedes C-Atom ist an drei C-Atome gebunden und sp2-hybridisiert.\n• Die Struktur sieht aus, als wäre eine ein Atom dicke Kohlenstoffschicht aus Sechsringen zu einem Zylinder gerollt.\n• Der Durchmesser liegt im Nanometerbereich; in Längsrichtung leitet es den Strom.\nUm welches Allotrop handelt es sich?",
        "fr": "On donne les informations suivantes sur une variété allotropique du carbone :\n• Chaque atome C est lié à trois atomes C et est hybridé sp2.\n• Sa structure ressemble à un feuillet de carbone d'un atome d'épaisseur, formé d'hexagones, enroulé en cylindre.\n• Son diamètre est de l'ordre du nanomètre ; il conduit l'électricité dans le sens de la longueur.\nDe quelle variété s'agit-il ?",
        "ru": "Об аллотропной модификации углерода известно:\n• Каждый атом C связан с тремя атомами C и находится в sp2-гибридизации.\n• Её структура выглядит так, будто углеродный слой толщиной в один атом из шестиугольных колец свернули в цилиндр.\n• Диаметр — порядка нанометра; вдоль оси она проводит ток.\nО какой модификации идёт речь?",
        "ar": "أُعطيت المعلومات التالية عن أحد متآصلات الكربون:\n• كل ذرة C مرتبطة بثلاث ذرات C ومهجنة sp2.\n• تبدو بنيته كأن طبقة كربونية سداسية الحلقات سمكها ذرة واحدة لُفّت على شكل أسطوانة.\n• قطره من رتبة النانومتر؛ ويوصل الكهرباء على امتداد طوله.\nما هذا المتآصل؟",
        "zh": "关于某种碳的同素异形体给出以下信息：\n• 每个碳原子与三个碳原子相连，为sp2杂化。\n• 其结构就像一层单原子厚、由六元环构成的碳片卷成圆柱形。\n• 直径为纳米级；沿长度方向能导电。\n这种同素异形体是下列哪一种？",
        "ku": "Derbarê allotropeke karbonê de ev agahî têne dayîn:\n• Her atoma C bi sê atomên C ve girêdayî ye û hîbrîdîzasyona sp2 kiriye.\n• Avahiya wê wisa xuya dike ku qateke karbonê ya bi stûriya yek atomê û bi xelekên şeşgoşe bi şiklê sîlîndirê hatiye pêçandin.\n• Qalindahiya wê di asta nanometreyê de ye; bi dirêjahiya xwe elektrîkê diguhezîne.\nEv allotrop kîjan e?"
      },
      "options": [
        {
          "tr": "Karbon nanotüp",
          "en": "Carbon nanotube",
          "de": "Kohlenstoffnanoröhre",
          "fr": "Nanotube de carbone",
          "ru": "Углеродная нанотрубка",
          "ar": "أنبوب الكربون النانوي",
          "zh": "碳纳米管",
          "ku": "Nanotûba karbonê"
        },
        {
          "tr": "Grafen",
          "en": "Graphene",
          "de": "Graphen",
          "fr": "Graphène",
          "ru": "Графен",
          "ar": "الجرافين",
          "zh": "石墨烯",
          "ku": "Grafen"
        },
        {
          "tr": "Grafit",
          "en": "Graphite",
          "de": "Graphit",
          "fr": "Graphite",
          "ru": "Графит",
          "ar": "الجرافيت",
          "zh": "石墨",
          "ku": "Grafît"
        },
        {
          "tr": "Fulleren (C60)",
          "en": "Fullerene (C60)",
          "de": "Fulleren (C60)",
          "fr": "Fullerène (C60)",
          "ru": "Фуллерен (C60)",
          "ar": "الفوليرين (C60)",
          "zh": "富勒烯(C60)",
          "ku": "Fûleren (C60)"
        },
        {
          "tr": "Elmas",
          "en": "Diamond",
          "de": "Diamant",
          "fr": "Diamant",
          "ru": "Алмаз",
          "ar": "الماس",
          "zh": "金刚石",
          "ku": "Elmas"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Grafen tabakasının silindir şeklinde sarılmış hâli karbon nanotüptür; karbonları sp2'dir ve tüp ekseni boyunca iletkendir. Grafen de sp2 ve tek atom kalınlığındadır ama düz (iki boyutlu) bir levhadır, kıvrılmış değildir. Grafit üst üste dizilmiş tabakalardan, C60 beşgen ve altıgenlerden oluşan kapalı bir kafesten oluşur; elmasta ise karbonlar sp3'tür ve dört komşuya bağlıdır.",
        "en": "A graphene sheet rolled into a cylinder is a carbon nanotube; its carbons are sp2 and it conducts along the tube axis. Graphene is also sp2 and one atom thick, but it is a flat (two-dimensional) sheet, not rolled. Graphite consists of stacked layers, C60 is a closed cage of pentagons and hexagons, and in diamond the carbons are sp3 and bonded to four neighbours.",
        "de": "Eine zu einem Zylinder gerollte Graphenschicht ist eine Kohlenstoffnanoröhre; ihre C-Atome sind sp2, und sie leitet entlang der Röhrenachse. Graphen ist ebenfalls sp2 und ein Atom dick, aber eine flache (zweidimensionale) Schicht, nicht gerollt. Graphit besteht aus gestapelten Schichten, C60 ist ein geschlossener Käfig aus Fünf- und Sechsecken, und im Diamanten sind die C-Atome sp3 und an vier Nachbarn gebunden.",
        "fr": "Un feuillet de graphène enroulé en cylindre est un nanotube de carbone ; ses carbones sont sp2 et il conduit le long de l'axe du tube. Le graphène est lui aussi sp2 et d'un atome d'épaisseur, mais c'est un feuillet plat (bidimensionnel), non enroulé. Le graphite est fait de feuillets empilés, C60 est une cage fermée de pentagones et d'hexagones, et dans le diamant les carbones sont sp3 et liés à quatre voisins.",
        "ru": "Графеновый слой, свёрнутый в цилиндр, — это углеродная нанотрубка; её атомы углерода sp2, и она проводит ток вдоль оси трубки. Графен тоже sp2 и толщиной в один атом, но это плоский (двумерный) слой, а не свёрнутый. Графит состоит из уложенных слоёв, C60 — замкнутый каркас из пяти- и шестиугольников, а в алмазе атомы углерода sp3 и связаны с четырьмя соседями.",
        "ar": "طبقة الجرافين الملفوفة على شكل أسطوانة هي أنبوب الكربون النانوي؛ ذراته من نوع sp2 ويوصل على امتداد محور الأنبوب. والجرافين أيضًا sp2 وسمكه ذرة واحدة لكنه صفيحة مستوية (ثنائية الأبعاد) غير ملفوفة. والجرافيت طبقات متراصة، وC60 قفص مغلق من خماسيات وسداسيات، وفي الماس ذرات الكربون sp3 ومرتبطة بأربع ذرات مجاورة.",
        "zh": "把石墨烯片卷成圆柱就是碳纳米管，其碳原子为sp2杂化，沿管轴方向导电。石墨烯也是sp2、单原子厚，但它是平面（二维）的片层，并未卷曲。石墨由层层堆叠的片层构成，C60是由五元环和六元环组成的封闭笼状结构，金刚石中碳原子为sp3杂化，与四个相邻碳原子相连。",
        "ku": "Qata grafenê ya ku bi şiklê sîlîndirê hatiye pêçandin nanotûba karbonê ye; karbonên wê sp2 ne û li ser eksena tûbê elektrîkê diguhezîne. Grafen jî sp2 û bi stûriya yek atomê ye, lê pelekî rast (dudîmensî) ye, ne pêçayî ye. Grafît ji qatên li ser hev pêk tê, C60 qefeseke girtî ya ji pêncgoşe û şeşgoşeyan e, û di elmasê de karbon sp3 in û bi çar cîranan ve girêdayî ne."
      }
    },
    {
      "id": "u23-twin10",
      "stem": {
        "tr": "Tabloda karbonun X, Y ve Z allotroplarına ait bazı bilgiler verilmiştir.\nBu allotroplarla ilgili;\nI. X'te karbon atomları sp3 hibritleşmesi yapmıştır ve X elektriği iletmez.\nII. Y'de her C atomunun hibritleşmeye katılmamış bir p orbitali vardır.\nIII. Z yeterli oksijenle tamamen yandığında CO2'den başka ürün de oluşur.\nyargılarından hangileri doğrudur?",
        "en": "The table gives some information about the carbon allotropes X, Y and Z.\nWhich of the following statements about these allotropes are correct?\nI. In X the carbon atoms are sp3 hybridized and X does not conduct electricity.\nII. In Y every C atom has one p orbital that does not take part in hybridization.\nIII. When Z burns completely in enough oxygen, a product other than CO2 also forms.",
        "de": "Die Tabelle enthält einige Angaben zu den Kohlenstoffallotropen X, Y und Z.\nWelche der folgenden Aussagen über diese Allotrope sind richtig?\nI. In X sind die Kohlenstoffatome sp3-hybridisiert, und X leitet keinen Strom.\nII. In Y besitzt jedes C-Atom ein nicht an der Hybridisierung beteiligtes p-Orbital.\nIII. Bei vollständiger Verbrennung von Z mit genügend Sauerstoff entsteht außer CO2 noch ein weiteres Produkt.",
        "fr": "Le tableau donne quelques informations sur les allotropes X, Y et Z du carbone.\nParmi les affirmations suivantes sur ces allotropes, lesquelles sont correctes ?\nI. Dans X, les atomes de carbone sont hybridés sp3 et X ne conduit pas l'électricité.\nII. Dans Y, chaque atome C possède une orbitale p qui ne participe pas à l'hybridation.\nIII. La combustion complète de Z dans suffisamment de dioxygène donne aussi un produit autre que CO2.",
        "ru": "В таблице приведены некоторые сведения об аллотропных модификациях углерода X, Y и Z.\nКакие утверждения об этих модификациях верны?\nI. В X атомы углерода находятся в sp3-гибридизации, и X не проводит ток.\nII. В Y у каждого атома C есть одна p-орбиталь, не участвующая в гибридизации.\nIII. При полном сгорании Z в достаточном количестве кислорода, кроме CO2, образуется ещё какой-то продукт.",
        "ar": "يبيّن الجدول بعض المعلومات عن متآصلات الكربون X وY وZ.\nأيٌّ من العبارات الآتية عن هذه المتآصلات صحيحة؟\nI. ذرات الكربون في X مهجّنة sp3، وX لا يوصل الكهرباء.\nII. لكل ذرة C في Y فلك p واحد لا يشارك في التهجين.\nIII. عند احتراق Z احتراقًا تامًا في كمية كافية من الأكسجين يتكوّن ناتج آخر غير CO2.",
        "zh": "表中给出了碳的同素异形体 X、Y、Z 的一些信息。\n关于这些同素异形体的下列说法中，哪些正确？\nI. X 中碳原子为 sp3 杂化，X 不导电。\nII. Y 中每个 C 原子都有一个未参与杂化的 p 轨道。\nIII. Z 在足量氧气中完全燃烧时，除 CO2 外还生成其他产物。",
        "ku": "Di tabloyê de hin agahî derbarê alotropên karbonê X, Y û Z de hatine dayîn.\nDerbarê van alotropan de;\nI. Di X de atomên karbonê sp3 hîbrîd bûne û X elektrîkê naguhêze.\nII. Di Y de her atomeke C orbîtaleke p heye ku beşdarî hîbrîdbûnê nebûye.\nIII. Dema Z bi oksîjena têr bi tevahî dişewite, ji bilî CO2 berhemeke din jî çêdibe.\nkîjan ji van gotinan rast in?"
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
        "tr": "Her C'si dört komşuya bağlı, üç boyutlu ağ yapılı X elmastır: karbonlar sp3'tür ve hareketli elektron bulunmadığından elmas elektriği iletmez (I doğru). Her C'si üç komşuya bağlı, tek atom kalınlığında düz tabaka olan Y grafendir: karbonlar sp2'dir ve her birinde hibritleşmeye katılmayan bir p orbitali bulunur; pi bağları bu orbitallerle kurulur (II doğru). Beşgen ve altıgenlerden oluşan kapalı kafes Z fullerendir; yalnızca karbon atomlarından oluştuğu için tam yanmada tek ürün CO2'dir (III yanlış). Bağlı komşu sayısı 3 olan iki allotropu ayırmak için tablodaki yapı bilgisini kullanmak gerekir.",
        "en": "X, in which each C is bonded to four neighbours in a three-dimensional network, is diamond: the carbons are sp3 and, with no mobile electrons, diamond does not conduct electricity (I correct). Y, in which each C is bonded to three neighbours in a flat sheet one atom thick, is graphene: the carbons are sp2 and each keeps one unhybridized p orbital, which forms the pi bonds (II correct). Z, a closed cage of pentagons and hexagons, is a fullerene; it consists only of carbon atoms, so the only product of complete combustion is CO2 (III wrong). The structure column of the table is needed to tell apart the two allotropes whose atoms have three neighbours.",
        "de": "X, in dem jedes C-Atom in einem dreidimensionalen Netz an vier Nachbarn gebunden ist, ist Diamant: Die Kohlenstoffatome sind sp3-hybridisiert, und ohne bewegliche Elektronen leitet Diamant nicht (I richtig). Y, in dem jedes C-Atom in einer ein Atom dicken ebenen Schicht an drei Nachbarn gebunden ist, ist Graphen: Die Kohlenstoffatome sind sp2-hybridisiert und besitzen je ein nicht hybridisiertes p-Orbital, das die Pi-Bindungen bildet (II richtig). Z, ein geschlossener Käfig aus Fünf- und Sechsecken, ist ein Fulleren; es besteht nur aus Kohlenstoff, daher ist CO2 das einzige Produkt der vollständigen Verbrennung (III falsch). Um die beiden Allotrope mit drei Nachbarn pro Atom zu unterscheiden, braucht man die Strukturangabe der Tabelle.",
        "fr": "X, où chaque C est lié à quatre voisins dans un réseau tridimensionnel, est le diamant : les carbones sont sp3 et, sans électrons mobiles, le diamant ne conduit pas l'électricité (I correcte). Y, où chaque C est lié à trois voisins dans un feuillet plan d'un atome d'épaisseur, est le graphène : les carbones sont sp2 et gardent chacun une orbitale p non hybridée qui forme les liaisons pi (II correcte). Z, cage fermée de pentagones et d'hexagones, est un fullerène ; il n'est formé que d'atomes de carbone, donc sa combustion complète ne donne que du CO2 (III fausse). La colonne « structure » du tableau est nécessaire pour distinguer les deux allotropes à trois voisins.",
        "ru": "X, в котором каждый атом C связан с четырьмя соседями в трёхмерной сетке, — алмаз: атомы углерода находятся в sp3-гибридизации, подвижных электронов нет, и алмаз не проводит ток (I верно). Y, в котором каждый атом C связан с тремя соседями в плоском слое толщиной в один атом, — графен: атомы углерода sp2-гибридны, и у каждого остаётся одна негибридизованная p-орбиталь, образующая пи-связи (II верно). Z — замкнутый каркас из пяти- и шестиугольников — фуллерен; он состоит только из атомов углерода, поэтому единственный продукт полного сгорания — CO2 (III неверно). Чтобы различить две модификации с тремя соседями у атома, нужен столбец таблицы о строении.",
        "ar": "المتآصل X الذي ترتبط فيه كل ذرة C بأربع ذرات في شبكة ثلاثية الأبعاد هو الألماس: ذراته مهجّنة sp3، ولعدم وجود إلكترونات حرة الحركة لا يوصل الكهرباء (I صحيحة). والمتآصل Y الذي ترتبط فيه كل ذرة C بثلاث ذرات في طبقة مستوية سمكها ذرة واحدة هو الغرافين: ذراته مهجّنة sp2 ولكل منها فلك p غير مهجّن تتكوّن منه روابط باي (II صحيحة). أما Z، وهو قفص مغلق من حلقات خماسية وسداسية، فهو فوليرين؛ ويتكوّن من ذرات كربون فقط، لذا يكون CO2 الناتج الوحيد لاحتراقه التام (III خاطئة). ويلزم عمود البنية في الجدول للتمييز بين المتآصلين اللذين ترتبط فيهما كل ذرة بثلاث ذرات.",
        "zh": "X 中每个 C 原子与四个相邻原子相连形成三维网状结构，是金刚石：碳原子为 sp3 杂化，没有可移动的电子，所以不导电（I 正确）。Y 中每个 C 原子与三个相邻原子相连，形成一个原子厚的平面片层，是石墨烯：碳原子为 sp2 杂化，每个都保留一个未杂化的 p 轨道，由它们形成 π 键（II 正确）。Z 是由五边形和六边形组成的封闭笼状结构，是富勒烯；它只由碳原子组成，完全燃烧的唯一产物是 CO2（III 错误）。要区分两种每个原子都有三个相邻原子的同素异形体，必须利用表中的结构信息。",
        "ku": "X ku tê de her atomeke C di tora sê-alî de bi çar cîranan ve girêdayî ye elmas e: karbon sp3 in û ji ber ku elektronên tevger tune ne elmas elektrîkê naguhêze (I rast e). Y ku tê de her atomeke C di çîneke rast a bi qalindahiya yek atomê de bi sê cîranan ve girêdayî ye grafen e: karbon sp2 in û her yekê orbîtaleke p ya ne-hîbrîd heye ku girêdanên pî pê çêdibin (II rast e). Z ku qefeseke girtî ya ji pêncgoşe û şeşgoşeyan e fulleren e; tenê ji atomên karbonê pêk tê, ji ber vê berhema tenê ya şewitandina temam CO2 ye (III şaş e). Ji bo cudakirina du alotropên ku her atom bi sê cîranan ve girêdayî ye, agahiya avahiyê ya tabloyê pêwîst e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Allotrop",
            "en": "Allotrope",
            "de": "Allotrop",
            "fr": "Allotrope",
            "ru": "Модификация",
            "ar": "المتآصل",
            "zh": "同素异形体",
            "ku": "Alotrop"
          },
          {
            "tr": "Her C atomunun bağlı olduğu C sayısı",
            "en": "C neighbours of each C atom",
            "de": "C-Nachbarn je C-Atom",
            "fr": "Voisins C de chaque atome C",
            "ru": "Соседних атомов C у каждого C",
            "ar": "عدد ذرات C المرتبطة بكل ذرة C",
            "zh": "每个 C 原子相连的 C 原子数",
            "ku": "Hejmara cîranên C yên her atoma C"
          },
          {
            "tr": "Yapı",
            "en": "Structure",
            "de": "Struktur",
            "fr": "Structure",
            "ru": "Строение",
            "ar": "البنية",
            "zh": "结构",
            "ku": "Avahî"
          }
        ],
        "rows": [
          [
            "X",
            "4",
            {
              "tr": "Üç boyutlu ağ örgü",
              "en": "Three-dimensional network",
              "de": "Dreidimensionales Netz",
              "fr": "Réseau tridimensionnel",
              "ru": "Трёхмерная сетка",
              "ar": "شبكة ثلاثية الأبعاد",
              "zh": "三维网状结构",
              "ku": "Tora sê-alî"
            }
          ],
          [
            "Y",
            "3",
            {
              "tr": "Tek atom kalınlığında düz tabaka",
              "en": "Flat sheet one atom thick",
              "de": "Ebene Schicht, ein Atom dick",
              "fr": "Feuillet plan d'un atome d'épaisseur",
              "ru": "Плоский слой толщиной в один атом",
              "ar": "طبقة مستوية بسمك ذرة واحدة",
              "zh": "一个原子厚的平面片层",
              "ku": "Çîneke rast bi qalindahiya yek atomê"
            }
          ],
          [
            "Z",
            "3",
            {
              "tr": "Beşgen ve altıgen halkalardan oluşan kapalı kafes",
              "en": "Closed cage of pentagons and hexagons",
              "de": "Geschlossener Käfig aus Fünf- und Sechsecken",
              "fr": "Cage fermée de pentagones et d'hexagones",
              "ru": "Замкнутый каркас из пяти- и шестиугольников",
              "ar": "قفص مغلق من حلقات خماسية وسداسية",
              "zh": "由五边形和六边形组成的封闭笼",
              "ku": "Qefeseke girtî ji pêncgoşe û şeşgoşeyan"
            }
          ]
        ]
      }
    },
    {
      "id": "u23-twin11",
      "stem": {
        "tr": "Wöhler 1828'de, anorganik bir tuz olan amonyum siyanatı (NH4OCN) ısıtarak organik bir bileşik olan üreyi (CO(NH2)2) elde etmiştir.\nAşağıdaki bileşiklerden hangisi, karbon içermesine rağmen organik bileşik sınıfında yer almaz?",
        "en": "In 1828 Wöhler obtained urea (CO(NH2)2), an organic compound, by heating ammonium cyanate (NH4OCN), an inorganic salt.\nWhich of the following compounds, although it contains carbon, is NOT classified as an organic compound?",
        "de": "Wöhler gewann 1828 durch Erhitzen des anorganischen Salzes Ammoniumcyanat (NH4OCN) die organische Verbindung Harnstoff (CO(NH2)2).\nWelche der folgenden Verbindungen wird trotz ihres Kohlenstoffgehalts NICHT zu den organischen Verbindungen gezählt?",
        "fr": "En 1828, Wöhler a obtenu l'urée (CO(NH2)2), composé organique, en chauffant le cyanate d'ammonium (NH4OCN), un sel inorganique.\nLequel des composés suivants, bien qu'il contienne du carbone, n'est PAS classé parmi les composés organiques ?",
        "ru": "В 1828 году Вёлер получил органическое соединение — мочевину (CO(NH2)2), нагревая неорганическую соль — цианат аммония (NH4OCN).\nКакое из следующих соединений, несмотря на наличие углерода, НЕ относится к органическим?",
        "ar": "حصل فولر عام 1828 على اليوريا (CO(NH2)2)، وهي مركب عضوي، بتسخين سيانات الأمونيوم (NH4OCN)، وهي ملح غير عضوي.\nأي المركبات التالية لا يُصنَّف مركبًا عضويًا على الرغم من احتوائه على الكربون؟",
        "zh": "1828年，维勒加热无机盐氰酸铵(NH4OCN)得到了有机化合物尿素(CO(NH2)2)。\n下列化合物中，哪一种虽然含有碳，却不属于有机化合物？",
        "ku": "Wöhler di sala 1828an de bi germkirina amonyûm sîyanatê (NH4OCN), ku xwêyeke anorganîk e, ure (CO(NH2)2), ku pêkhateyeke organîk e, bi dest xist.\nKîjan ji van pêkhateyan tevî ku karbon dihewîne di nav pêkhateyên organîk de cih nagire?"
      },
      "options": [
        {
          "tr": "CH4 (metan)",
          "en": "CH4 (methane)",
          "de": "CH4 (Methan)",
          "fr": "CH4 (méthane)",
          "ru": "CH4 (метан)",
          "ar": "CH4 (الميثان)",
          "zh": "CH4（甲烷）",
          "ku": "CH4 (metan)"
        },
        {
          "tr": "C2H5OH (etil alkol)",
          "en": "C2H5OH (ethyl alcohol)",
          "de": "C2H5OH (Ethanol)",
          "fr": "C2H5OH (éthanol)",
          "ru": "C2H5OH (этиловый спирт)",
          "ar": "C2H5OH (الكحول الإيثيلي)",
          "zh": "C2H5OH（乙醇）",
          "ku": "C2H5OH (alkola etîl)"
        },
        {
          "tr": "C6H12O6 (glikoz)",
          "en": "C6H12O6 (glucose)",
          "de": "C6H12O6 (Glucose)",
          "fr": "C6H12O6 (glucose)",
          "ru": "C6H12O6 (глюкоза)",
          "ar": "C6H12O6 (الغلوكوز)",
          "zh": "C6H12O6（葡萄糖）",
          "ku": "C6H12O6 (glûkoz)"
        },
        {
          "tr": "CO(NH2)2 (üre)",
          "en": "CO(NH2)2 (urea)",
          "de": "CO(NH2)2 (Harnstoff)",
          "fr": "CO(NH2)2 (urée)",
          "ru": "CO(NH2)2 (мочевина)",
          "ar": "CO(NH2)2 (اليوريا)",
          "zh": "CO(NH2)2（尿素）",
          "ku": "CO(NH2)2 (ure)"
        },
        {
          "tr": "Na2CO3 (sodyum karbonat)",
          "en": "Na2CO3 (sodium carbonate)",
          "de": "Na2CO3 (Natriumcarbonat)",
          "fr": "Na2CO3 (carbonate de sodium)",
          "ru": "Na2CO3 (карбонат натрия)",
          "ar": "Na2CO3 (كربونات الصوديوم)",
          "zh": "Na2CO3（碳酸钠）",
          "ku": "Na2CO3 (karbonata sodyûmê)"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Karbonatlar (Na2CO3 gibi), CO, CO2, siyanürler ve karbürler karbon içerdikleri hâlde anorganik bileşik kabul edilir; Na2CO3 iyonik yapılı, mineral kökenli bir tuzdur. Metan, etil alkol ve glikoz karbon iskeletli organik bileşiklerdir. Üre de anorganik bir maddeden laboratuvarda elde edilmiş olsa bile organiktir; Wöhler deneyinin önemi tam da budur, kaynağın değil yapının belirleyici olduğunu göstermiştir.",
        "en": "Carbonates (such as Na2CO3), CO, CO2, cyanides and carbides are regarded as inorganic even though they contain carbon; Na2CO3 is an ionic salt of mineral origin. Methane, ethyl alcohol and glucose are organic compounds with a carbon skeleton. Urea is organic even though it was made in the laboratory from an inorganic substance — that is exactly the point of Wöhler's experiment: structure, not origin, decides.",
        "de": "Carbonate (wie Na2CO3), CO, CO2, Cyanide und Carbide gelten trotz ihres Kohlenstoffgehalts als anorganisch; Na2CO3 ist ein ionisch gebautes Salz mineralischen Ursprungs. Methan, Ethanol und Glucose sind organische Verbindungen mit Kohlenstoffgerüst. Harnstoff ist organisch, auch wenn er im Labor aus einem anorganischen Stoff hergestellt wurde — genau das zeigte Wöhlers Versuch: Entscheidend ist der Aufbau, nicht die Herkunft.",
        "fr": "Les carbonates (comme Na2CO3), CO, CO2, les cyanures et les carbures sont considérés comme inorganiques bien qu'ils contiennent du carbone ; Na2CO3 est un sel ionique d'origine minérale. Le méthane, l'éthanol et le glucose sont des composés organiques à squelette carboné. L'urée est organique même si elle a été préparée au laboratoire à partir d'une substance inorganique — c'est précisément l'apport de l'expérience de Wöhler : c'est la structure, et non l'origine, qui compte.",
        "ru": "Карбонаты (например, Na2CO3), CO, CO2, цианиды и карбиды считаются неорганическими, хотя содержат углерод; Na2CO3 — ионная соль минерального происхождения. Метан, этиловый спирт и глюкоза — органические соединения с углеродным скелетом. Мочевина органична, даже если получена в лаборатории из неорганического вещества, — именно это и показал опыт Вёлера: решает строение, а не происхождение.",
        "ar": "تُعد الكربونات (مثل Na2CO3) وCO وCO2 والسيانيدات والكربيدات مركبات غير عضوية رغم احتوائها على الكربون؛ فـ Na2CO3 ملح أيوني ذو أصل معدني. أما الميثان والكحول الإيثيلي والغلوكوز فمركبات عضوية ذات هيكل كربوني. واليوريا عضوية حتى لو حُضّرت في المختبر من مادة غير عضوية، وهذا بالضبط ما أظهرته تجربة فولر: البنية هي الحاسمة لا المصدر.",
        "zh": "碳酸盐(如Na2CO3)、CO、CO2、氰化物和碳化物虽然含碳，但被视为无机物；Na2CO3是离子结构、来源于矿物的盐。甲烷、乙醇和葡萄糖是具有碳骨架的有机化合物。尿素即使是在实验室由无机物制得，也仍是有机物——这正是维勒实验的意义：决定类别的是结构而不是来源。",
        "ku": "Karbonat (wek Na2CO3), CO, CO2, sîyanur û karbur tevî ku karbon dihewînin wek pêkhateyên anorganîk têne qebûlkirin; Na2CO3 xwêyeke îyonîk e ku ji kanzayan tê. Metan, alkola etîl û glûkoz pêkhateyên organîk ên bi îskeleta karbonê ne. Ure jî organîk e, her çend di laboratuwarê de ji madeyeke anorganîk hatibe bidestxistin; girîngiya ceribandina Wöhler tam ev e: ne çavkanî, avahî diyarker e."
      }
    },
    {
      "id": "u23-twin12",
      "stem": {
        "tr": "Organik bileşiklerin genel özellikleriyle ilgili;\nI. Büyük çoğunluğu suda iyi çözünür ve sulu çözeltileri elektriği iyi iletir.\nII. Moleküllerindeki atomlar arasında çoğunlukla kovalent bağlar bulunur.\nIII. Yeterli oksijenle tamamen yandıklarında genellikle CO2 ve H2O oluşur.\nyargılarından hangileri doğrudur?",
        "en": "Regarding the general properties of organic compounds;\nI. Most of them dissolve well in water and their aqueous solutions conduct electricity well.\nII. The atoms in their molecules are mostly joined by covalent bonds.\nIII. When burned completely in enough oxygen, they generally form CO2 and H2O.\nwhich of the statements are correct?",
        "de": "Welche der folgenden Aussagen über allgemeine Eigenschaften organischer Verbindungen sind richtig?\nI. Die meisten lösen sich gut in Wasser, und ihre wässrigen Lösungen leiten den Strom gut.\nII. Die Atome in ihren Molekülen sind überwiegend durch kovalente Bindungen verbunden.\nIII. Bei vollständiger Verbrennung mit genügend Sauerstoff entstehen in der Regel CO2 und H2O.",
        "fr": "Concernant les propriétés générales des composés organiques :\nI. La plupart se dissolvent bien dans l'eau et leurs solutions aqueuses conduisent bien l'électricité.\nII. Les atomes de leurs molécules sont surtout unis par des liaisons covalentes.\nIII. Leur combustion complète dans suffisamment de dioxygène donne généralement CO2 et H2O.\nlesquelles de ces affirmations sont exactes ?",
        "ru": "Какие из утверждений об общих свойствах органических соединений верны?\nI. Большинство из них хорошо растворяется в воде, а их водные растворы хорошо проводят ток.\nII. Атомы в их молекулах связаны в основном ковалентными связями.\nIII. При полном сгорании в достаточном количестве кислорода обычно образуются CO2 и H2O.",
        "ar": "فيما يتعلق بالخصائص العامة للمركبات العضوية:\nI. معظمها يذوب جيدًا في الماء ومحاليلها المائية توصل الكهرباء جيدًا.\nII. ترتبط الذرات في جزيئاتها غالبًا بروابط تساهمية.\nIII. عند احتراقها التام في كمية كافية من الأكسجين يتكوّن عادة CO2 وH2O.\nأي العبارات صحيحة؟",
        "zh": "关于有机化合物的一般性质：\nI. 大多数易溶于水，其水溶液导电性好。\nII. 分子中原子之间主要以共价键结合。\nIII. 在足量氧气中完全燃烧时一般生成CO2和H2O。\n以上说法中正确的是哪些？",
        "ku": "Derbarê taybetmendiyên giştî yên pêkhateyên organîk de;\nI. Piraniya wan di avê de baş dihelin û çareseriyên wan ên avî elektrîkê baş diguhezînin.\nII. Atomên di molekulên wan de bi piranî bi girêdanên kovalent bi hev ve girêdayî ne.\nIII. Dema bi oksîjena têr bi tevahî dişewitin, bi piranî CO2 û H2O çêdibin.\nkîjan ji van gotinan rast in?"
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
        "tr": "I yanlış: organik bileşiklerin çoğu apolar ya da az polar kovalent moleküllerdir; suda az çözünür ve çözündüğünde de iyon oluşturmadığı için (şeker, alkol gibi) çözeltisi elektriği iletmez. II doğru: C–C, C–H, C–O gibi bağlar kovalenttir. III doğru: C ve H içeren organik bileşikler tam yandığında karbon CO2'ye, hidrojen H2O'ya dönüşür.",
        "en": "I is false: most organic compounds are nonpolar or weakly polar covalent molecules; they dissolve poorly in water, and even when they dissolve (sugar, alcohol) they do not form ions, so the solution does not conduct. II is true: bonds such as C–C, C–H and C–O are covalent. III is true: on complete combustion of organic compounds containing C and H, carbon becomes CO2 and hydrogen becomes H2O.",
        "de": "I ist falsch: Die meisten organischen Verbindungen sind unpolare oder schwach polare kovalente Moleküle; sie lösen sich schlecht in Wasser, und selbst wenn sie sich lösen (Zucker, Alkohol), bilden sie keine Ionen, sodass die Lösung nicht leitet. II ist richtig: Bindungen wie C–C, C–H und C–O sind kovalent. III ist richtig: Bei vollständiger Verbrennung C- und H-haltiger organischer Verbindungen wird Kohlenstoff zu CO2 und Wasserstoff zu H2O.",
        "fr": "I est fausse : la plupart des composés organiques sont des molécules covalentes apolaires ou peu polaires ; ils se dissolvent mal dans l'eau, et même dissous (sucre, alcool) ils ne forment pas d'ions, donc la solution ne conduit pas. II est vraie : des liaisons comme C–C, C–H et C–O sont covalentes. III est vraie : lors de la combustion complète des composés organiques contenant C et H, le carbone devient CO2 et l'hydrogène H2O.",
        "ru": "I неверно: большинство органических соединений — неполярные или слабополярные ковалентные молекулы; они плохо растворяются в воде, а растворившись (сахар, спирт), не образуют ионов, поэтому раствор не проводит ток. II верно: связи C–C, C–H, C–O ковалентные. III верно: при полном сгорании органических соединений, содержащих C и H, углерод превращается в CO2, а водород — в H2O.",
        "ar": "العبارة I خاطئة: معظم المركبات العضوية جزيئات تساهمية غير قطبية أو ضعيفة القطبية؛ تذوب قليلًا في الماء، وحتى عندما تذوب (كالسكر والكحول) لا تكوّن أيونات، فلا يوصل محلولها الكهرباء. العبارة II صحيحة: الروابط مثل C–C وC–H وC–O تساهمية. العبارة III صحيحة: عند الاحتراق التام للمركبات العضوية المحتوية على C وH يتحول الكربون إلى CO2 والهيدروجين إلى H2O.",
        "zh": "I错误：大多数有机化合物是非极性或弱极性的共价分子，难溶于水；即使溶解（如糖、乙醇）也不形成离子，溶液不导电。II正确：C–C、C–H、C–O等键都是共价键。III正确：含C、H的有机化合物完全燃烧时，碳转化为CO2，氢转化为H2O。",
        "ku": "I şaş e: piraniya pêkhateyên organîk molekulên kovalent ên nepolar an kêmpolar in; di avê de kêm dihelin, û dema dihelin jî (wek şekir û alkol) îyonan çênakin, loma çareseriya wan elektrîkê naguhezîne. II rast e: girêdanên wek C–C, C–H û C–O kovalent in. III rast e: dema pêkhateyên organîk ên ku C û H dihewînin bi tevahî dişewitin, karbon vediguhere CO2 û hîdrojen vediguhere H2O."
      }
    },
    {
      "id": "u23-twin13",
      "stem": {
        "tr": "CO2, CH4, NH3 ve H2O moleküllerinde merkez atom çevresindeki bağ açılarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir? (1H, 6C, 7N, 8O)",
        "en": "Which option gives the bond angles around the central atom in the CO2, CH4, NH3 and H2O molecules in order from largest to smallest? (1H, 6C, 7N, 8O)",
        "de": "In welcher Antwort sind die Bindungswinkel am Zentralatom der Moleküle CO2, CH4, NH3 und H2O vom größten zum kleinsten richtig geordnet? (1H, 6C, 7N, 8O)",
        "fr": "Quelle proposition classe correctement, du plus grand au plus petit, les angles de liaison autour de l'atome central dans les molécules CO2, CH4, NH3 et H2O ? (1H, 6C, 7N, 8O)",
        "ru": "В каком варианте валентные углы при центральном атоме в молекулах CO2, CH4, NH3 и H2O расположены правильно от наибольшего к наименьшему? (1H, 6C, 7N, 8O)",
        "ar": "أي الخيارات الآتية يرتب زوايا الروابط حول الذرة المركزية في جزيئات CO2 وCH4 وNH3 وH2O من الأكبر إلى الأصغر ترتيبًا صحيحًا؟ (1H، 6C، 7N، 8O)",
        "zh": "CO2、CH4、NH3和H2O分子中中心原子周围的键角由大到小的顺序是下列哪一项？(1H，6C，7N，8O)",
        "ku": "Di molekulên CO2, CH4, NH3 û H2O de rêzkirina goşeyên girêdanê yên li dora atoma navendî ji mezin ber bi piçûk ve kîjan e? (1H, 6C, 7N, 8O)"
      },
      "options": [
        {
          "tr": "CH4 > NH3 > H2O > CO2",
          "en": "CH4 > NH3 > H2O > CO2",
          "de": "CH4 > NH3 > H2O > CO2",
          "fr": "CH4 > NH3 > H2O > CO2",
          "ru": "CH4 > NH3 > H2O > CO2",
          "ar": "CH4 > NH3 > H2O > CO2",
          "zh": "CH4 > NH3 > H2O > CO2",
          "ku": "CH4 > NH3 > H2O > CO2"
        },
        {
          "tr": "CO2 > CH4 > NH3 > H2O",
          "en": "CO2 > CH4 > NH3 > H2O",
          "de": "CO2 > CH4 > NH3 > H2O",
          "fr": "CO2 > CH4 > NH3 > H2O",
          "ru": "CO2 > CH4 > NH3 > H2O",
          "ar": "CO2 > CH4 > NH3 > H2O",
          "zh": "CO2 > CH4 > NH3 > H2O",
          "ku": "CO2 > CH4 > NH3 > H2O"
        },
        {
          "tr": "CO2 > H2O > NH3 > CH4",
          "en": "CO2 > H2O > NH3 > CH4",
          "de": "CO2 > H2O > NH3 > CH4",
          "fr": "CO2 > H2O > NH3 > CH4",
          "ru": "CO2 > H2O > NH3 > CH4",
          "ar": "CO2 > H2O > NH3 > CH4",
          "zh": "CO2 > H2O > NH3 > CH4",
          "ku": "CO2 > H2O > NH3 > CH4"
        },
        {
          "tr": "CO2 > NH3 > CH4 > H2O",
          "en": "CO2 > NH3 > CH4 > H2O",
          "de": "CO2 > NH3 > CH4 > H2O",
          "fr": "CO2 > NH3 > CH4 > H2O",
          "ru": "CO2 > NH3 > CH4 > H2O",
          "ar": "CO2 > NH3 > CH4 > H2O",
          "zh": "CO2 > NH3 > CH4 > H2O",
          "ku": "CO2 > NH3 > CH4 > H2O"
        },
        {
          "tr": "H2O > NH3 > CH4 > CO2",
          "en": "H2O > NH3 > CH4 > CO2",
          "de": "H2O > NH3 > CH4 > CO2",
          "fr": "H2O > NH3 > CH4 > CO2",
          "ru": "H2O > NH3 > CH4 > CO2",
          "ar": "H2O > NH3 > CH4 > CO2",
          "zh": "H2O > NH3 > CH4 > CO2",
          "ku": "H2O > NH3 > CH4 > CO2"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "CO2 (AX2) doğrusaldır: 180°. CH4 (AX4) düzgün dörtyüzlüdür: 109,5°. NH3 (AX3E) merkez atomdaki 1 ortaklanmamış çift bağları sıkıştırdığı için yaklaşık 107°, H2O (AX2E2) 2 ortaklanmamış çift nedeniyle 104,5°'dir. Sıra: CO2 > CH4 > NH3 > H2O. Açıyı merkez atoma bağlı atom sayısına göre sıralamak ya da ortaklanmamış çiftlerin açıyı küçülttüğünü unutmak yanlış sıralamalara götürür.",
        "en": "CO2 (AX2) is linear: 180°. CH4 (AX4) is tetrahedral: 109.5°. In NH3 (AX3E) the 1 lone pair on the central atom squeezes the bonds, giving about 107°, and in H2O (AX2E2) the 2 lone pairs give 104.5°. Order: CO2 > CH4 > NH3 > H2O. Ranking the angles by the number of atoms bonded to the central atom, or forgetting that lone pairs make the angle smaller, leads to wrong orders.",
        "de": "CO2 (AX2) ist linear: 180°. CH4 (AX4) ist tetraedrisch: 109,5°. In NH3 (AX3E) drückt das 1 freie Elektronenpaar am Zentralatom die Bindungen zusammen, etwa 107°, in H2O (AX2E2) ergeben die 2 freien Paare 104,5°. Reihenfolge: CO2 > CH4 > NH3 > H2O. Wer die Winkel nach der Zahl der gebundenen Atome ordnet oder vergisst, dass freie Paare den Winkel verkleinern, kommt zu falschen Reihenfolgen.",
        "fr": "CO2 (AX2) est linéaire : 180°. CH4 (AX4) est tétraédrique : 109,5°. Dans NH3 (AX3E), le doublet non liant de l'atome central resserre les liaisons, environ 107°, et dans H2O (AX2E2) les 2 doublets non liants donnent 104,5°. Ordre : CO2 > CH4 > NH3 > H2O. Classer les angles selon le nombre d'atomes liés à l'atome central, ou oublier que les doublets non liants réduisent l'angle, mène à de mauvais classements.",
        "ru": "CO2 (AX2) линейна: 180°. CH4 (AX4) тетраэдрическая: 109,5°. В NH3 (AX3E) одна неподелённая пара центрального атома сжимает связи — около 107°, в H2O (AX2E2) две неподелённые пары дают 104,5°. Порядок: CO2 > CH4 > NH3 > H2O. Если упорядочивать углы по числу атомов, связанных с центральным, или забыть, что неподелённые пары уменьшают угол, получится неверный порядок.",
        "ar": "CO2 (AX2) خطي: 180°. وCH4 (AX4) رباعي الأوجه: 109.5°. وفي NH3 (AX3E) يضغط الزوج غير الرابط الواحد على الروابط فتصبح الزاوية نحو 107°، وفي H2O (AX2E2) يجعلها الزوجان غير الرابطين 104.5°. الترتيب: CO2 > CH4 > NH3 > H2O. ترتيب الزوايا حسب عدد الذرات المرتبطة بالذرة المركزية أو نسيان أن الأزواج غير الرابطة تُصغّر الزاوية يؤديان إلى ترتيبات خاطئة.",
        "zh": "CO2(AX2)为直线形：180°。CH4(AX4)为正四面体：109.5°。NH3(AX3E)中心原子上的1对孤对电子挤压成键电子对，键角约107°；H2O(AX2E2)有2对孤对电子，键角104.5°。顺序：CO2 > CH4 > NH3 > H2O。按中心原子所连原子数排序，或忘记孤对电子会使键角变小，都会得出错误顺序。",
        "ku": "CO2 (AX2) xêzikî ye: 180°. CH4 (AX4) tetrahedral e: 109,5°. Di NH3 (AX3E) de 1 cotê nehevpar ê li ser atoma navendî girêdanan diguvêşe û goşe nêzîkî 107° ye; di H2O (AX2E2) de ji ber 2 cotên nehevpar goşe 104,5° ye. Rêz: CO2 > CH4 > NH3 > H2O. Rêzkirina goşeyan li gorî hejmara atomên bi atoma navendî ve girêdayî, an jibîrkirina ku cotên nehevpar goşeyê piçûk dikin, dibe sedema rêzkirinên şaş."
      }
    },
    {
      "id": "u23-twin14",
      "stem": {
        "tr": "Aşağıdaki moleküllerin her biri için merkez C atomunun hibritleşme türü ve molekül geometrisi \"Molekül — Hibritleşme — Geometri\" biçiminde eşleştirilmiştir.\nBu eşleştirmelerden hangisi yanlıştır? (1H, 6C, 7N, 8O, 17Cl)",
        "en": "For each molecule below, the hybridization of the central C atom and the molecular geometry are matched in the form \"Molecule — Hybridization — Geometry\".\nWhich of these matches is wrong? (1H, 6C, 7N, 8O, 17Cl)",
        "de": "Für jedes der folgenden Moleküle sind Hybridisierung des zentralen C-Atoms und Molekülgeometrie in der Form „Molekül — Hybridisierung — Geometrie“ zugeordnet.\nWelche Zuordnung ist falsch? (1H, 6C, 7N, 8O, 17Cl)",
        "fr": "Pour chacune des molécules ci-dessous, l'hybridation de l'atome C central et la géométrie moléculaire sont associées sous la forme « Molécule — Hybridation — Géométrie ».\nLaquelle de ces associations est fausse ? (1H, 6C, 7N, 8O, 17Cl)",
        "ru": "Для каждой из молекул ниже гибридизация центрального атома C и геометрия молекулы сопоставлены в виде «Молекула — Гибридизация — Геометрия».\nКакое из сопоставлений неверно? (1H, 6C, 7N, 8O, 17Cl)",
        "ar": "لكل جزيء من الجزيئات الآتية رُبط نوع تهجين ذرة C المركزية والشكل الجزيئي بالصيغة «الجزيء — التهجين — الشكل».\nأي هذه المطابقات خاطئة؟ (1H، 6C، 7N، 8O، 17Cl)",
        "zh": "下列各分子中，中心碳原子的杂化类型与分子构型按“分子 — 杂化 — 构型”的形式对应。\n其中哪一项对应是错误的？(1H，6C，7N，8O，17Cl)",
        "ku": "Ji bo her yek ji molekulên jêrîn, cureyê hîbrîdîzasyona atoma C ya navendî û geometriya molekulê bi şiklê «Molekul — Hîbrîdîzasyon — Geometrî» li hev hatine anîn.\nKîjan ji van hevanînan şaş e? (1H, 6C, 7N, 8O, 17Cl)"
      },
      "options": [
        {
          "tr": "CH4 — sp3 — düzgün dörtyüzlü",
          "en": "CH4 — sp3 — tetrahedral",
          "de": "CH4 — sp3 — tetraedrisch",
          "fr": "CH4 — sp3 — tétraédrique",
          "ru": "CH4 — sp3 — тетраэдрическая",
          "ar": "CH4 — sp3 — رباعي الأوجه",
          "zh": "CH4 — sp3 — 正四面体",
          "ku": "CH4 — sp3 — tetrahedral"
        },
        {
          "tr": "CO2 — sp — doğrusal",
          "en": "CO2 — sp — linear",
          "de": "CO2 — sp — linear",
          "fr": "CO2 — sp — linéaire",
          "ru": "CO2 — sp — линейная",
          "ar": "CO2 — sp — خطي",
          "zh": "CO2 — sp — 直线形",
          "ku": "CO2 — sp — xêzikî"
        },
        {
          "tr": "HCHO — sp2 — düzlem üçgen",
          "en": "HCHO — sp2 — trigonal planar",
          "de": "HCHO — sp2 — trigonal-planar",
          "fr": "HCHO — sp2 — triangulaire plane",
          "ru": "HCHO — sp2 — плоский треугольник",
          "ar": "HCHO — sp2 — مثلث مستوٍ",
          "zh": "HCHO — sp2 — 平面三角形",
          "ku": "HCHO — sp2 — sêgoşeya pelî"
        },
        {
          "tr": "HCN — sp — doğrusal",
          "en": "HCN — sp — linear",
          "de": "HCN — sp — linear",
          "fr": "HCN — sp — linéaire",
          "ru": "HCN — sp — линейная",
          "ar": "HCN — sp — خطي",
          "zh": "HCN — sp — 直线形",
          "ku": "HCN — sp — xêzikî"
        },
        {
          "tr": "CCl4 — sp2 — düzlem üçgen",
          "en": "CCl4 — sp2 — trigonal planar",
          "de": "CCl4 — sp2 — trigonal-planar",
          "fr": "CCl4 — sp2 — triangulaire plane",
          "ru": "CCl4 — sp2 — плоский треугольник",
          "ar": "CCl4 — sp2 — مثلث مستوٍ",
          "zh": "CCl4 — sp2 — 平面三角形",
          "ku": "CCl4 — sp2 — sêgoşeya pelî"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "CCl4'te merkez C atomu dört Cl atomuyla dört tekli bağ yapar ve ortaklanmamış elektron çifti taşımaz (AX4); hibritleşmesi sp3, geometrisi düzgün dörtyüzlüdür. Cl atomları üzerindeki ortaklanmamış çiftler merkez atomun geometrisini etkilemez. Diğerleri doğrudur: CH4 sp3 ve düzgün dörtyüzlü; CO2 ve HCN'de C iki elektron bölgesine sahiptir (sp, doğrusal); HCHO'da C üç elektron bölgesine sahiptir (sp2, düzlem üçgen).",
        "en": "In CCl4 the central C atom forms four single bonds with four Cl atoms and has no lone pair (AX4); its hybridization is sp3 and the geometry is tetrahedral. The lone pairs on the Cl atoms do not affect the geometry around the central atom. The others are correct: CH4 is sp3 and tetrahedral; in CO2 and HCN the C has two electron domains (sp, linear); in HCHO the C has three electron domains (sp2, trigonal planar).",
        "de": "In CCl4 bildet das zentrale C-Atom vier Einfachbindungen zu vier Cl-Atomen und trägt kein freies Elektronenpaar (AX4); es ist sp3-hybridisiert, die Geometrie ist tetraedrisch. Die freien Paare an den Cl-Atomen beeinflussen die Geometrie am Zentralatom nicht. Die übrigen sind richtig: CH4 sp3 und tetraedrisch; in CO2 und HCN hat C zwei Elektronenbereiche (sp, linear); in HCHO hat C drei Elektronenbereiche (sp2, trigonal-planar).",
        "fr": "Dans CCl4, l'atome C central forme quatre liaisons simples avec quatre atomes Cl et ne porte pas de doublet non liant (AX4) ; il est hybridé sp3 et la géométrie est tétraédrique. Les doublets non liants des atomes Cl n'influent pas sur la géométrie autour de l'atome central. Les autres sont exactes : CH4 sp3 et tétraédrique ; dans CO2 et HCN, C a deux domaines électroniques (sp, linéaire) ; dans HCHO, C a trois domaines électroniques (sp2, triangulaire plane).",
        "ru": "В CCl4 центральный атом C образует четыре одинарные связи с четырьмя атомами Cl и не имеет неподелённых пар (AX4); его гибридизация sp3, геометрия тетраэдрическая. Неподелённые пары атомов Cl не влияют на геометрию вокруг центрального атома. Остальные верны: CH4 — sp3, тетраэдр; в CO2 и HCN у C две электронные области (sp, линейная); в HCHO у C три электронные области (sp2, плоский треугольник).",
        "ar": "في CCl4 تكوّن ذرة C المركزية أربع روابط أحادية مع أربع ذرات Cl ولا تحمل زوجًا غير رابط (AX4)؛ فتهجينها sp3 وشكلها رباعي الأوجه. ولا تؤثر الأزواج غير الرابطة على ذرات Cl في الشكل حول الذرة المركزية. والمطابقات الأخرى صحيحة: CH4 من نوع sp3 ورباعي الأوجه؛ وفي CO2 وHCN لذرة C منطقتان إلكترونيتان (sp، خطي)؛ وفي HCHO لذرة C ثلاث مناطق إلكترونية (sp2، مثلث مستوٍ).",
        "zh": "CCl4中中心碳原子与四个氯原子形成四个单键，没有孤对电子(AX4)，为sp3杂化、正四面体构型。氯原子上的孤对电子不影响中心原子周围的构型。其余各项都正确：CH4为sp3、正四面体；CO2和HCN中碳有两个电子域(sp，直线形)；HCHO中碳有三个电子域(sp2，平面三角形)。",
        "ku": "Di CCl4 de atoma C ya navendî bi çar atomên Cl re çar girêdanên yekane çêdike û cotê elektronan ê nehevpar li ser wê nîne (AX4); hîbrîdîzasyona wê sp3 e û geometriya wê tetrahedral e. Cotên nehevpar ên li ser atomên Cl bandorê li geometriya li dora atoma navendî nakin. Yên din rast in: CH4 sp3 û tetrahedral e; di CO2 û HCN de du herêmên elektronan li dora C hene (sp, xêzikî); di HCHO de sê herêmên elektronan li dora C hene (sp2, sêgoşeya pelî)."
      }
    },
    {
      "id": "u23-twin15",
      "stem": {
        "tr": "Aşağıdaki moleküllerden hangisi polar kovalent bağlar içerdiği hâlde apolar bir moleküldür? (1H, 6C, 7N, 8O, 17Cl)",
        "en": "Which of the following molecules is nonpolar even though it contains polar covalent bonds? (1H, 6C, 7N, 8O, 17Cl)",
        "de": "Welches der folgenden Moleküle ist unpolar, obwohl es polare kovalente Bindungen enthält? (1H, 6C, 7N, 8O, 17Cl)",
        "fr": "Laquelle des molécules suivantes est apolaire bien qu'elle contienne des liaisons covalentes polaires ? (1H, 6C, 7N, 8O, 17Cl)",
        "ru": "Какая из следующих молекул неполярна, хотя содержит полярные ковалентные связи? (1H, 6C, 7N, 8O, 17Cl)",
        "ar": "أي الجزيئات التالية غير قطبي على الرغم من احتوائه على روابط تساهمية قطبية؟ (1H، 6C، 7N، 8O، 17Cl)",
        "zh": "下列分子中，哪一种虽然含有极性共价键，却是非极性分子？(1H，6C，7N，8O，17Cl)",
        "ku": "Kîjan ji van molekulan tevî ku girêdanên kovalent ên polar dihewîne, molekuleke nepolar e? (1H, 6C, 7N, 8O, 17Cl)"
      },
      "options": [
        {
          "tr": "CO2",
          "en": "CO2",
          "de": "CO2",
          "fr": "CO2",
          "ru": "CO2",
          "ar": "CO2",
          "zh": "CO2",
          "ku": "CO2"
        },
        {
          "tr": "H2O",
          "en": "H2O",
          "de": "H2O",
          "fr": "H2O",
          "ru": "H2O",
          "ar": "H2O",
          "zh": "H2O",
          "ku": "H2O"
        },
        {
          "tr": "NH3",
          "en": "NH3",
          "de": "NH3",
          "fr": "NH3",
          "ru": "NH3",
          "ar": "NH3",
          "zh": "NH3",
          "ku": "NH3"
        },
        {
          "tr": "HCN",
          "en": "HCN",
          "de": "HCN",
          "fr": "HCN",
          "ru": "HCN",
          "ar": "HCN",
          "zh": "HCN",
          "ku": "HCN"
        },
        {
          "tr": "CH2Cl2",
          "en": "CH2Cl2",
          "de": "CH2Cl2",
          "fr": "CH2Cl2",
          "ru": "CH2Cl2",
          "ar": "CH2Cl2",
          "zh": "CH2Cl2",
          "ku": "CH2Cl2"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "CO2'de iki C=O bağı polardır, ancak molekül doğrusal (AX2) olduğundan eşit büyüklükteki iki bağ dipolü zıt yönlüdür ve birbirini yok eder; molekül apolardır. H2O (kırık doğru) ve NH3 (üçgen piramit) simetrik değildir. HCN doğrusal olsa da H–C ve C≡N bağlarının dipolleri farklıdır, yok olmaz. CH2Cl2 dörtyüzlü yapıdadır ama C'ye bağlı atomlar farklı olduğu için dipoller birbirini dengelemez; yalnızca geometri adına bakıp onu apolar sanmak tipik hatadır.",
        "en": "In CO2 the two C=O bonds are polar, but because the molecule is linear (AX2) the two equal bond dipoles point in opposite directions and cancel; the molecule is nonpolar. H2O (bent) and NH3 (trigonal pyramidal) are not symmetric. HCN is linear, but the H–C and C≡N bond dipoles are different and do not cancel. CH2Cl2 is tetrahedral, but because the atoms on C are different the dipoles do not balance; calling it nonpolar just from the name of its geometry is the typical mistake.",
        "de": "In CO2 sind die beiden C=O-Bindungen polar, doch da das Molekül linear ist (AX2), zeigen die zwei gleich großen Bindungsdipole in entgegengesetzte Richtungen und heben sich auf; das Molekül ist unpolar. H2O (gewinkelt) und NH3 (trigonal-pyramidal) sind nicht symmetrisch. HCN ist linear, aber die Dipole von H–C und C≡N sind verschieden und heben sich nicht auf. CH2Cl2 ist tetraedrisch, doch da die Atome am C verschieden sind, gleichen sich die Dipole nicht aus; es nur wegen des Geometrienamens für unpolar zu halten, ist der typische Fehler.",
        "fr": "Dans CO2, les deux liaisons C=O sont polaires, mais la molécule étant linéaire (AX2), les deux dipôles de liaison égaux sont opposés et s'annulent : la molécule est apolaire. H2O (coudée) et NH3 (pyramidale trigonale) ne sont pas symétriques. HCN est linéaire, mais les dipôles H–C et C≡N sont différents et ne s'annulent pas. CH2Cl2 est tétraédrique, mais les atomes liés au C étant différents, les dipôles ne se compensent pas ; la dire apolaire seulement d'après le nom de sa géométrie est l'erreur typique.",
        "ru": "В CO2 обе связи C=O полярны, но поскольку молекула линейна (AX2), два равных диполя связей направлены противоположно и взаимно компенсируются; молекула неполярна. H2O (угловая) и NH3 (тригональная пирамида) несимметричны. HCN линейна, но диполи связей H–C и C≡N различны и не компенсируются. CH2Cl2 тетраэдрическая, но атомы при C разные, поэтому диполи не уравновешиваются; считать её неполярной только по названию геометрии — типичная ошибка.",
        "ar": "في CO2 الرابطتان C=O قطبيتان، لكن لأن الجزيء خطي (AX2) فإن عزمي الرابطتين المتساويين متعاكسان ويلغي أحدهما الآخر؛ فالجزيء غير قطبي. أما H2O (منحنٍ) وNH3 (هرم ثلاثي) فغير متماثلين. وHCN خطي لكن عزمي الرابطتين H–C وC≡N مختلفان ولا يلغيان بعضهما. وCH2Cl2 رباعي الأوجه لكن الذرات المرتبطة بـ C مختلفة فلا تتوازن العزوم؛ واعتباره غير قطبي لمجرد اسم شكله خطأ شائع.",
        "zh": "CO2中两个C=O键都是极性键，但分子为直线形(AX2)，两个大小相等的键偶极方向相反、相互抵消，所以是非极性分子。H2O(V形)和NH3（三角锥形）结构不对称。HCN虽为直线形，但H–C键与C≡N键的偶极不同，不能抵消。CH2Cl2为四面体，但碳上连接的原子不同，偶极不能抵消；只凭构型名称就认为它是非极性的，是典型错误。",
        "ku": "Di CO2 de her du girêdanên C=O polar in, lê ji ber ku molekul xêzikî ye (AX2), du dîpolên girêdanê yên wekhev berevajî hev in û hev betal dikin; molekul nepolar e. H2O (goşeyî) û NH3 (pîramîda sêgoşe) ne sîmetrîk in. HCN xêzikî ye, lê dîpolên girêdanên H–C û C≡N cuda ne û hev betal nakin. CH2Cl2 tetrahedral e, lê ji ber ku atomên bi C ve girêdayî cuda ne, dîpol hev hevseng nakin; tenê li navê geometriyê nêrîn û nepolar hesibandina wê şaşiya berbelav e."
      }
    },
    {
      "id": "u23-twin16",
      "stem": {
        "tr": "Eten (CH2=CH2) molekülü ile ilgili;\nI. Her C atomunda hibritleşmeye katılmamış birer p orbitali bulunur.\nII. C=C bağındaki pi bağı, bu p orbitallerinin yan yana (paralel) örtüşmesiyle oluşur.\nIII. Molekülde toplam 5 sigma bağı vardır.\nyargılarından hangileri doğrudur? (1H, 6C)",
        "en": "Regarding the ethene (CH2=CH2) molecule;\nI. Each C atom has one p orbital that did not take part in hybridization.\nII. The pi bond in the C=C bond forms by the side-by-side (parallel) overlap of these p orbitals.\nIII. The molecule contains 5 sigma bonds in total.\nwhich of the statements are correct? (1H, 6C)",
        "de": "Welche der folgenden Aussagen über das Ethen-Molekül (CH2=CH2) sind richtig?\nI. Jedes C-Atom besitzt ein p-Orbital, das nicht an der Hybridisierung beteiligt ist.\nII. Die pi-Bindung der C=C-Bindung entsteht durch seitliche (parallele) Überlappung dieser p-Orbitale.\nIII. Das Molekül enthält insgesamt 5 sigma-Bindungen.\n(1H, 6C)",
        "fr": "Concernant la molécule d'éthène (CH2=CH2) :\nI. Chaque atome C possède une orbitale p qui n'a pas participé à l'hybridation.\nII. La liaison pi de la liaison C=C se forme par recouvrement latéral (parallèle) de ces orbitales p.\nIII. La molécule contient au total 5 liaisons sigma.\nlesquelles de ces affirmations sont exactes ? (1H, 6C)",
        "ru": "Какие из утверждений о молекуле этена (CH2=CH2) верны?\nI. У каждого атома C есть одна p-орбиталь, не участвующая в гибридизации.\nII. π-связь в двойной связи C=C образуется боковым (параллельным) перекрыванием этих p-орбиталей.\nIII. В молекуле всего 5 σ-связей.\n(1H, 6C)",
        "ar": "فيما يتعلق بجزيء الإيثين (CH2=CH2):\nI. لكل ذرة C مدار p واحد لم يشارك في التهجين.\nII. تتكون رابطة باي في الرابطة C=C بالتداخل الجانبي (المتوازي) لمداري p هذين.\nIII. يحتوي الجزيء على 5 روابط سيجما إجمالًا.\nأي العبارات صحيحة؟ (1H، 6C)",
        "zh": "关于乙烯(CH2=CH2)分子：\nI. 每个碳原子都有一个未参与杂化的p轨道。\nII. C=C键中的π键由这两个p轨道“肩并肩”（平行）重叠形成。\nIII. 分子中共有5个σ键。\n以上说法中正确的是哪些？(1H，6C)",
        "ku": "Derbarê molekula etenê (CH2=CH2) de;\nI. Li ser her atoma C orbîtaleke p heye ku beşdarî hîbrîdîzasyonê nebûye.\nII. Girêdana pî ya di girêdana C=C de bi hevgirtina kêlek bi kêlek (paralel) a van orbîtalên p çêdibe.\nIII. Di molekulê de bi tevahî 5 girêdanên sigma hene.\nkîjan ji van gotinan rast in? (1H, 6C)"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "Etendeki her C atomu sp2 hibritleşmesi yapar: bir s ve iki p orbitali karışarak üç sp2 orbitali oluşturur, bir p orbitali hibritleşmeye katılmaz (I doğru). Bu iki p orbitalinin yan yana örtüşmesi C=C'deki pi bağını oluşturur (II doğru). Sigma bağları: 4 tane C–H ve C=C'deki 1 tane σ, toplam 5 (III doğru). Çift bağı 2 sigma sayıp 6 bulmak ya da C–H bağlarını eksik saymak bu tür sorularda sık yapılan hatadır.",
        "en": "Each C atom in ethene is sp2-hybridized: one s and two p orbitals mix to form three sp2 orbitals, and one p orbital does not take part (I true). The side-by-side overlap of these two p orbitals forms the pi bond in C=C (II true). Sigma bonds: 4 C–H bonds plus 1 σ in C=C, 5 in total (III true). Counting the double bond as 2 sigma to get 6, or missing some C–H bonds, are common mistakes in such questions.",
        "de": "Jedes C-Atom im Ethen ist sp2-hybridisiert: ein s- und zwei p-Orbitale mischen sich zu drei sp2-Orbitalen, ein p-Orbital bleibt unbeteiligt (I richtig). Die seitliche Überlappung dieser beiden p-Orbitale bildet die pi-Bindung in C=C (II richtig). sigma-Bindungen: 4 C–H-Bindungen plus 1 σ in C=C, insgesamt 5 (III richtig). Die Doppelbindung als 2 sigma zu zählen und 6 zu erhalten oder C–H-Bindungen zu übersehen, sind häufige Fehler.",
        "fr": "Chaque atome C de l'éthène est hybridé sp2 : une orbitale s et deux orbitales p se mélangent pour former trois orbitales sp2, une orbitale p ne participe pas (I vraie). Le recouvrement latéral de ces deux orbitales p forme la liaison pi de C=C (II vraie). Liaisons sigma : 4 liaisons C–H plus 1 σ dans C=C, soit 5 au total (III vraie). Compter la double liaison comme 2 sigma pour trouver 6, ou oublier des liaisons C–H, sont des erreurs fréquentes.",
        "ru": "Каждый атом C в этене находится в sp2-гибридизации: одна s- и две p-орбитали смешиваются и образуют три sp2-орбитали, а одна p-орбиталь в гибридизации не участвует (I верно). Боковое перекрывание этих двух p-орбиталей образует π-связь в C=C (II верно). σ-связи: 4 связи C–H и 1 σ-связь в C=C, всего 5 (III верно). Частые ошибки — считать двойную связь двумя σ-связями и получать 6 или пропускать связи C–H.",
        "ar": "كل ذرة C في الإيثين مهجنة sp2: يمتزج مدار s مع مداري p لتكوين ثلاثة مدارات sp2، ويبقى مدار p واحد خارج التهجين (I صحيحة). والتداخل الجانبي لمداري p هذين يكوّن رابطة باي في C=C (II صحيحة). روابط سيجما: 4 روابط C–H و1 σ في C=C، أي 5 إجمالًا (III صحيحة). عدّ الرابطة الثنائية رابطتي سيجما للحصول على 6، أو إغفال بعض روابط C–H، أخطاء شائعة.",
        "zh": "乙烯中每个碳原子为sp2杂化：一个s轨道和两个p轨道混合形成三个sp2杂化轨道，另有一个p轨道未参与杂化(I正确)。这两个p轨道“肩并肩”重叠形成C=C中的π键(II正确)。σ键：4个C–H键加上C=C中的1个σ键，共5个(III正确)。把双键算作2个σ键得到6，或漏数C–H键，是这类题的常见错误。",
        "ku": "Di etenê de her atoma C hîbrîdîzasyona sp2 dike: orbîtaleke s û du orbîtalên p tevlî hev dibin û sê orbîtalên sp2 çêdikin, orbîtaleke p beşdarî hîbrîdîzasyonê nabe (I rast e). Hevgirtina kêlek bi kêlek a van her du orbîtalên p girêdana pî ya di C=C de çêdike (II rast e). Girêdanên sigma: 4 girêdanên C–H û 1 σ ya di C=C de, bi tevahî 5 (III rast e). Hejmartina girêdana ducarî wek 2 sigma û dîtina 6, an jî kêm hejmartina girêdanên C–H, şaşiyên berbelav in."
      }
    }
  ]
};

export default unit23;
