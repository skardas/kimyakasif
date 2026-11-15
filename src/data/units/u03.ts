import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit03: ChemistryUnitSeedData = {
  "id": "u03",
  "order": 3,
  "exam": "TYT",
  "grade": 9,
  "title": {
    "tr": "Kimyasal Türler Arası Etkileşimler",
    "en": "Intermolecular Interactions",
    "de": "Zwischenmolekulare Kräfte",
    "fr": "Interactions Intermoléculaires",
    "ru": "Взаимодействия между частицами",
    "ar": "التفاعلات بين الجسيمات",
    "zh": "微粒间相互作用",
    "ku": "Têkiliyên Navbera Cûreyên Kîmyewî"
  },
  "subtitle": {
    "tr": "Güçlü ve Zayıf Etkileşimler, Bağ Türleri",
    "en": "Strong & Weak Bonds, Dipoles",
    "de": "Starke und schwache Wechselwirkungen, Bindungstypen",
    "fr": "Interactions fortes et faibles, types d'obligations",
    "ru": "Сильные и слабые взаимодействия, типы связей",
    "ar": "التفاعلات القوية والضعيفة، أنواع الروابط",
    "zh": "强相互作用和弱相互作用、键类型",
    "ku": "Têkiliyên Xurt û Qels, Cureyên Bond"
  },
  "facts": [
    {
      "id": "u03-f01",
      "fact": {
        "tr": "İyonik bağ, metal katyonu ile ametal anyonu arasındaki elektrostatik çekim kuvveti ile oluşur.",
        "en": "The ionic bond is formed by the electrostatic force of attraction between the metal cation and the nonmetal anion.",
        "de": "Die Ionenbindung entsteht durch die elektrostatische Anziehungskraft zwischen dem Metallkation und dem Nichtmetallanion.",
        "fr": "La liaison ionique est formée par la force d’attraction électrostatique entre le cation métallique et l’anion non métallique.",
        "ru": "Ионная связь образуется за счет электростатической силы притяжения между катионом металла и анионом неметалла.",
        "ar": "تتكون الرابطة الأيونية من قوة الجذب الكهروستاتيكية بين الكاتيون المعدني والأنيون غير المعدني.",
        "zh": "离子键是由金属阳离子和非金属阴离子之间的静电吸引力形成的。",
        "ku": "Girêdana îyonî bi hêza elektrostatîk a kêşanê ya di navbera kationê metal û anyona nemetal de pêk tê."
      },
      "trap": {
        "tr": "İyonik bileşikler moleküllerden oluşur; NaCl'nin en küçük birimi bir NaCl molekülüdür.",
        "en": "Ionic compounds are made of molecules; the smallest unit of NaCl is an NaCl molecule.",
        "de": "Ionische Verbindungen bestehen aus Molekülen; die kleinste Einheit von NaCl ist ein NaCl-Molekül.",
        "fr": "Les composés ioniques sont formés de molécules ; la plus petite unité de NaCl est une molécule de NaCl.",
        "ru": "Ионные соединения состоят из молекул; наименьшая частица NaCl — молекула NaCl.",
        "ar": "تتكوّن المركبات الأيونية من جزيئات، وأصغر وحدة في NaCl هي جزيء NaCl.",
        "zh": "离子化合物由分子构成，NaCl 的最小单元是一个 NaCl 分子。",
        "ku": "Pêkhateyên îyonîk ji molekulan pêk tên; yekîneya herî biçûk a NaCl molekuleke NaCl e."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik bileşiklerde ayrı moleküller yoktur; çok sayıda katyon ve anyon üç boyutlu bir kristal örgüde dizilir. NaCl formülü yalnızca iyonların 1:1 oranını gösterir.",
        "en": "Ionic compounds contain no separate molecules; huge numbers of cations and anions are arranged in a three-dimensional crystal lattice. The formula NaCl only shows the 1:1 ratio of the ions.",
        "de": "Ionische Verbindungen enthalten keine einzelnen Moleküle; sehr viele Kationen und Anionen bilden ein dreidimensionales Kristallgitter. Die Formel NaCl gibt nur das Ionenverhältnis 1:1 an.",
        "fr": "Les composés ioniques ne contiennent pas de molécules distinctes ; un très grand nombre de cations et d'anions forment un réseau cristallin tridimensionnel. La formule NaCl indique seulement le rapport 1:1 des ions.",
        "ru": "В ионных соединениях нет отдельных молекул: огромное число катионов и анионов образует трёхмерную кристаллическую решётку. Формула NaCl лишь показывает соотношение ионов 1:1.",
        "ar": "لا توجد جزيئات منفصلة في المركبات الأيونية؛ بل تترتب أعداد هائلة من الأيونات الموجبة والسالبة في شبكة بلورية ثلاثية الأبعاد، والصيغة NaCl تبيّن فقط نسبة الأيونات 1:1.",
        "zh": "离子化合物中没有独立的分子，大量阳离子和阴离子排列成三维晶格。化学式 NaCl 只表示离子个数比为 1:1。",
        "ku": "Di pêkhateyên îyonîk de molekulên cuda tune ne; gelek katyon û anyon di torê krîstalê ya sê-alî de rêz dibin. Formula NaCl tenê rêjeya 1:1 a îyonan nîşan dide."
      }
    },
    {
      "id": "u03-f02",
      "fact": {
        "tr": "Kovalent bağ, ametal atomları arasında elektron ortaklaşması sonucu meydana gelir.",
        "en": "Covalent bond occurs as a result of electron sharing between nonmetal atoms.",
        "de": "Eine kovalente Bindung entsteht durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallatomen.",
        "fr": "La liaison covalente résulte du partage d’électrons entre des atomes non métalliques.",
        "ru": "Ковалентная связь возникает в результате обобществления электронов между атомами неметалла.",
        "ar": "تحدث الرابطة التساهمية نتيجة لتقاسم الإلكترون بين الذرات اللافلزية.",
        "zh": "共价键是非金属原子之间共享电子的结果。",
        "ku": "Girêdana kovalentî di encama parvekirina elektronên di navbera atomên nemetal de pêk tê."
      },
      "trap": {
        "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
        "en": "Covalent bonds are formed by the exchange of electrons.",
        "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
        "fr": "Les liaisons covalentes se forment par échange d'électrons.",
        "ru": "Ковалентные связи образуются в результате обмена электронами.",
        "ar": "تتشكل الروابط التساهمية عن طريق تبادل الإلكترونات.",
        "zh": "共价键是通过电子交换形成的。",
        "ku": "Girêdanên kovalent bi pevguherîna elektronan çêdibin."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron alışverişi iyonik bağın özelliğidir; kovalent bağda ametal atomları elektronlarını ortaklaşa kullanır ve hiçbir atom elektronunu tamamen vermez.",
        "en": "Electron transfer is the feature of ionic bonding; in a covalent bond non-metal atoms share electrons and neither atom gives its electrons away completely.",
        "de": "Elektronenübertragung kennzeichnet die Ionenbindung; bei der kovalenten Bindung teilen sich Nichtmetallatome Elektronen, kein Atom gibt seine Elektronen vollständig ab.",
        "fr": "Le transfert d'électrons caractérise la liaison ionique ; dans une liaison covalente, les atomes non métalliques mettent des électrons en commun et aucun ne les cède complètement.",
        "ru": "Переход электронов характерен для ионной связи; при ковалентной связи атомы неметаллов обобществляют электроны, и ни один атом не отдаёт их полностью.",
        "ar": "انتقال الإلكترونات سمة الرابطة الأيونية؛ أما في الرابطة التساهمية فتتشارك ذرات اللافلزات الإلكترونات ولا تفقد أيّ ذرة إلكتروناتها كلياً.",
        "zh": "电子转移是离子键的特征；共价键中非金属原子共用电子，没有哪个原子把电子完全给出。",
        "ku": "Danûstandina elektronan taybetiya girêdana îyonîk e; di girêdana kovalent de atomên nemetal elektronan bi hev re bi kar tînin û tu atom elektronên xwe bi tevahî nade."
      }
    },
    {
      "id": "u03-f03",
      "fact": {
        "tr": "Hidrojen bağı; F, O veya N atomuna bağlı H atomu ile komşu moleküldeki F, O veya N atomu arasında oluşur ve nötr moleküller arasındaki zayıf etkileşimlerin genellikle en güçlüsüdür.",
        "en": "A hydrogen bond forms between an H atom bonded to F, O or N and an F, O or N atom of a neighbouring molecule; it is generally the strongest of the weak interactions between neutral molecules.",
        "de": "Eine Wasserstoffbrücke bildet sich zwischen einem an F, O oder N gebundenen H-Atom und einem F-, O- oder N-Atom eines Nachbarmoleküls; sie ist im Allgemeinen die stärkste schwache Wechselwirkung zwischen neutralen Molekülen.",
        "fr": "La liaison hydrogène se forme entre un atome H lié à F, O ou N et un atome F, O ou N d'une molécule voisine ; c'est en général la plus forte des interactions faibles entre molécules neutres.",
        "ru": "Водородная связь образуется между атомом H, связанным с F, O или N, и атомом F, O или N соседней молекулы; как правило, это самое сильное из слабых взаимодействий между нейтральными молекулами.",
        "ar": "تتكوّن الرابطة الهيدروجينية بين ذرة H مرتبطة بـ F أو O أو N وذرة F أو O أو N في جزيء مجاور، وهي عادةً أقوى التآثرات الضعيفة بين الجزيئات المتعادلة.",
        "zh": "氢键在与 F、O 或 N 相连的 H 原子和相邻分子中的 F、O 或 N 原子之间形成，通常是中性分子之间最强的弱相互作用。",
        "ku": "Girêdana hîdrojenê di navbera atoma H ya bi F, O an N ve girêdayî û atoma F, O an N ya molekula cîran de çêdibe û bi giştî di navbera molekulên bêalî de têkiliya qels a herî xurt e."
      },
      "trap": {
        "tr": "Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.",
        "en": "Hydrogen bond is a covalent bond between H2 molecules.",
        "de": "Eine Wasserstoffbindung ist eine kovalente Bindung zwischen H2-Molekülen.",
        "fr": "La liaison hydrogène est une liaison covalente entre les molécules H2.",
        "ru": "Водородная связь – это ковалентная связь между молекулами H2.",
        "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
        "zh": "氢键是H2分子之间的共价键。",
        "ku": "Girêdana hîdrojenê di navbera molekulên H2 de girêdaneke kovalent e."
      },
      "whyTrapIsFalse": {
        "tr": "Hidrojen bağı molekül içi kovalent bağ değil, moleküller arası zayıf bir etkileşimdir ve yalnızca F, O ya da N'ye bağlı H atomuyla oluşur; apolar H2 molekülleri arasında yalnızca London kuvvetleri vardır.",
        "en": "A hydrogen bond is not an intramolecular covalent bond but a weak intermolecular interaction, and it forms only with H bonded to F, O or N; between non-polar H2 molecules there are only London forces.",
        "de": "Eine Wasserstoffbrücke ist keine kovalente Bindung im Molekül, sondern eine schwache zwischenmolekulare Wechselwirkung, die nur mit an F, O oder N gebundenem H entsteht; zwischen unpolaren H2-Molekülen wirken nur London-Kräfte.",
        "fr": "La liaison hydrogène n'est pas une liaison covalente intramoléculaire mais une interaction intermoléculaire faible, qui ne se forme qu'avec un H lié à F, O ou N ; entre les molécules apolaires de H2 il n'y a que des forces de London.",
        "ru": "Водородная связь — не внутримолекулярная ковалентная связь, а слабое межмолекулярное взаимодействие, возникающее только с участием H, связанного с F, O или N; между неполярными молекулами H2 действуют лишь лондоновские силы.",
        "ar": "الرابطة الهيدروجينية ليست رابطة تساهمية داخل الجزيء بل تآثر ضعيف بين الجزيئات، ولا تتكون إلا بذرة H مرتبطة بـ F أو O أو N؛ وبين جزيئات H2 غير القطبية لا توجد إلا قوى لندن.",
        "zh": "氢键不是分子内的共价键，而是分子间的弱相互作用，只有与 F、O、N 相连的 H 才能形成；非极性的 H2 分子之间只有色散力（伦敦力）。",
        "ku": "Girêdana hîdrojenê ne girêdana kovalent a hundirê molekulê ye, têkiliyeke qels a navbera molekulan e û tenê bi atoma H ya bi F, O an N ve girêdayî çêdibe; di navbera molekulên H2 yên apolar de tenê hêzên London hene."
      }
    },
    {
      "id": "u03-f04",
      "fact": {
        "tr": "London kuvvetleri anlık (indüklenmiş) dipollerden kaynaklanır ve tüm taneciklerde bulunur.",
        "en": "London forces arise from instantaneous (induced) dipoles and are present in all particles.",
        "de": "London-Kräfte entstehen durch momentane (induzierte) Dipole und sind in allen Teilchen vorhanden.",
        "fr": "Les forces de London proviennent de dipôles instantanés (induits) et sont présentes dans toutes les particules.",
        "ru": "Силы Лондона возникают из-за мгновенных (индуцированных) диполей и присутствуют во всех частицах.",
        "ar": "تنشأ قوى لندن من ثنائيات القطب اللحظية (المستحثة) وهي موجودة في جميع الجسيمات.",
        "zh": "伦敦力由瞬时（感应）偶极子产生，存在于所有粒子中。",
        "ku": "Hêzên Londonê ji dupolên tavilê (derxistî) çêdibin û di hemî pirtikan de hene."
      },
      "trap": {
        "tr": "London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.",
        "en": "London forces do not exist in polar molecules with permanent dipole moments.",
        "de": "In polaren Molekülen mit permanenten Dipolmomenten gibt es keine Londoner Kräfte.",
        "fr": "Les forces de London n'existent pas dans les molécules polaires avec des moments dipolaires permanents.",
        "ru": "Силы Лондона не существуют в полярных молекулах с постоянными дипольными моментами.",
        "ar": "لا توجد قوى لندن في الجزيئات القطبية ذات العزوم الثنائية القطبية الدائمة.",
        "zh": "伦敦力不存在于具有永久偶极矩的极性分子中。",
        "ku": "Hêzên Londonê di molekulên polar ên bi demên dupolî yên daîmî de tune ne."
      },
      "whyTrapIsFalse": {
        "tr": "Anlık dipoller elektron bulutu olan her tanecikte oluşabildiğinden London kuvvetleri polar moleküllerde de vardır; polar moleküllerde bunlara dipol-dipol etkileşimleri eklenir.",
        "en": "Instantaneous dipoles can form in any particle that has an electron cloud, so London forces exist in polar molecules too; in polar molecules dipole–dipole interactions are added to them.",
        "de": "Momentane Dipole können in jedem Teilchen mit Elektronenwolke entstehen, daher gibt es London-Kräfte auch bei polaren Molekülen; dort kommen Dipol-Dipol-Wechselwirkungen hinzu.",
        "fr": "Des dipôles instantanés peuvent apparaître dans toute particule possédant un nuage électronique : les forces de London existent donc aussi dans les molécules polaires, auxquelles s'ajoutent les interactions dipôle-dipôle.",
        "ru": "Мгновенные диполи возникают в любой частице с электронным облаком, поэтому лондоновские силы есть и у полярных молекул; у них к ним добавляются диполь-дипольные взаимодействия.",
        "ar": "تتكوّن ثنائيات القطب اللحظية في كل دقيقة لها سحابة إلكترونية، لذا توجد قوى لندن في الجزيئات القطبية أيضاً، وتُضاف إليها فيها تآثرات ثنائي القطب–ثنائي القطب.",
        "zh": "任何具有电子云的微粒都能产生瞬时偶极，所以极性分子之间也存在色散力，只是还另外存在偶极-偶极作用。",
        "ku": "Dupolên demkî dikarin di her perçikeke bi ewrê elektronan de çêbibin, loma hêzên London di molekulên polar de jî hene; di molekulên polar de têkiliyên dupol-dupol li ser wan zêde dibin."
      }
    },
    {
      "id": "u03-f05",
      "fact": {
        "tr": "Elektron sayısı arttıkça polarize olabilirlik artar ve London çekim kuvveti güçlenir.",
        "en": "As the number of electrons increases, polarizability increases and the London attraction force becomes stronger.",
        "de": "Mit zunehmender Elektronenzahl nimmt die Polarisierbarkeit zu und die Londoner Anziehungskraft wird stärker.",
        "fr": "À mesure que le nombre d’électrons augmente, la polarisabilité augmente et la force d’attraction de London devient plus forte.",
        "ru": "По мере увеличения числа электронов поляризуемость увеличивается и сила притяжения Лондона становится сильнее.",
        "ar": "ومع زيادة عدد الإلكترونات، تزداد قابلية الاستقطاب وتصبح قوة جذب لندن أقوى.",
        "zh": "随着电子数量的增加，极化率增加，伦敦吸引力变得更强。",
        "ku": "Her ku hejmara elektronan zêde dibe, polarîzasyon zêde dibe û hêza balkişandina Londonê xurtir dibe."
      },
      "trap": {
        "tr": "London kuvveti moleküldeki elektron sayısı azaldıkça artar.",
        "en": "London force increases as the number of electrons in the molecule decreases.",
        "de": "Die London-Kraft nimmt zu, wenn die Anzahl der Elektronen im Molekül abnimmt.",
        "fr": "La force de London augmente à mesure que le nombre d’électrons dans la molécule diminue.",
        "ru": "Сила Лондона увеличивается по мере уменьшения числа электронов в молекуле.",
        "ar": "تزداد قوة لندن مع انخفاض عدد الإلكترونات في الجزيء.",
        "zh": "伦敦力随着分子中电子数量的减少而增加。",
        "ku": "Hêza Londonê her ku hejmara elektronên di molekulê de kêm dibe zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron sayısı azaldıkça elektron bulutu küçülür ve daha zor kutuplanır; bu yüzden London kuvveti artmaz, azalır. Örneğin He'nin kaynama noktası Xe'ninkinden çok düşüktür.",
        "en": "With fewer electrons the electron cloud is smaller and harder to polarise, so London forces decrease rather than increase. For example, the boiling point of He is far lower than that of Xe.",
        "de": "Mit weniger Elektronen ist die Elektronenwolke kleiner und schwerer polarisierbar, daher nehmen London-Kräfte ab statt zu. Der Siedepunkt von He liegt z. B. weit unter dem von Xe.",
        "fr": "Avec moins d'électrons, le nuage électronique est plus petit et moins polarisable : les forces de London diminuent au lieu d'augmenter. Par exemple, He bout à une température bien plus basse que Xe.",
        "ru": "При меньшем числе электронов электронное облако меньше и хуже поляризуется, поэтому лондоновские силы не растут, а ослабевают. Например, температура кипения He намного ниже, чем у Xe.",
        "ar": "كلما قلّ عدد الإلكترونات صغرت السحابة الإلكترونية وصعب استقطابها، فتضعف قوى لندن بدلاً من أن تزداد؛ فمثلاً درجة غليان He أقل بكثير من درجة غليان Xe.",
        "zh": "电子数越少，电子云越小，越难被极化，所以色散力不是增强而是减弱。例如 He 的沸点远低于 Xe。",
        "ku": "Her ku hejmara elektronan kêm dibe ewrê elektronan biçûk dibe û bi zehmetî polar dibe; loma hêza London zêde nabe, kêm dibe. Mînak, xala kelandinê ya He ji ya Xe pir nizmtir e."
      }
    },
    {
      "id": "u03-f06",
      "fact": {
        "tr": "İyonik katılar katı hâlde elektriği iletmez; sıvı hâlde ve sulu çözeltilerinde serbest iyonlarla iletir.",
        "en": "Ionic solids do not conduct electricity in the solid state; in the molten state and in aqueous solution they conduct by means of free ions.",
        "de": "Ionische Feststoffe leiten im festen Zustand keinen Strom; in der Schmelze und in wässriger Lösung leiten sie über frei bewegliche Ionen.",
        "fr": "Les solides ioniques ne conduisent pas l'électricité à l'état solide ; à l'état fondu et en solution aqueuse, ils conduisent grâce aux ions libres.",
        "ru": "Ионные твёрдые вещества не проводят электрический ток в твёрдом состоянии; в расплаве и в водном растворе они проводят ток за счёт свободных ионов.",
        "ar": "المواد الصلبة الأيونية لا توصل الكهرباء في الحالة الصلبة؛ وتوصلها في الحالة السائلة (المنصهرة) وفي المحاليل المائية بواسطة الأيونات الحرة.",
        "zh": "离子固体在固态时不导电；在熔融状态和水溶液中依靠自由离子导电。",
        "ku": "Madeyên hişk ên îyonî di rewşa hişk de elektrîkê naguhezînin; di rewşa şile (helandî) û di çareseriyên avî de bi îyonên azad elektrîkê diguhezînin."
      },
      "trap": {
        "tr": "Yemek tuzu (NaCl) katı kristal hâlde elektrik akımını mükemmel iletir.",
        "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
        "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
        "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
        "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
        "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
        "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
        "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
      },
      "whyTrapIsFalse": {
        "tr": "Katı NaCl'de iyonlar kristal örgüde sabit konumlarda titreşir, serbestçe hareket edemez; iyonlar ancak eritildiğinde veya suda çözündüğünde hareketlenip akımı iletir.",
        "en": "In solid NaCl the ions vibrate in fixed positions in the lattice and cannot move freely; only when it is melted or dissolved in water do the ions move and carry current.",
        "de": "In festem NaCl schwingen die Ionen an festen Gitterplätzen und können sich nicht frei bewegen; erst in der Schmelze oder in wässriger Lösung werden sie beweglich und leiten den Strom.",
        "fr": "Dans NaCl solide, les ions vibrent à des positions fixes du réseau et ne peuvent pas se déplacer ; ce n'est qu'à l'état fondu ou en solution aqueuse qu'ils deviennent mobiles et conduisent le courant.",
        "ru": "В твёрдом NaCl ионы колеблются в узлах решётки и не могут свободно перемещаться; только в расплаве или водном растворе ионы становятся подвижными и проводят ток.",
        "ar": "في NaCl الصلب تهتز الأيونات في مواقع ثابتة من الشبكة ولا تتحرك بحرية؛ ولا تصبح متحركة وتوصل التيار إلا عند الصهر أو الذوبان في الماء.",
        "zh": "固态 NaCl 中离子只在晶格的固定位置振动，不能自由移动；只有熔融或溶于水时离子才能移动并导电。",
        "ku": "Di NaCl ya hişk de îyon di cihên sabît ên torê de dilerizin û nikarin bi serbestî biçin; tenê dema dihele an di avê de dihele îyon dilivin û herikê diguhezînin."
      }
    },
    {
      "id": "u03-f07",
      "fact": {
        "tr": "Metalik bağ, serbest değerlik elektronlarının oluşturduğu elektron denizi ile pozitif metal iyonları arasındadır.",
        "en": "The metallic bond is the attraction between the electron sea formed by free valence electrons and the positive metal ions.",
        "de": "Die metallische Bindung besteht zwischen dem aus freien Valenzelektronen gebildeten Elektronensee und den positiven Metallionen.",
        "fr": "La liaison métallique s'établit entre la mer d'électrons, formée par les électrons de valence libres, et les ions métalliques positifs.",
        "ru": "Металлическая связь возникает между электронным морем, образованным свободными валентными электронами, и положительными ионами металла.",
        "ar": "الرابطة الفلزية هي التجاذب بين بحر الإلكترونات المتكوّن من إلكترونات التكافؤ الحرة وأيونات الفلز الموجبة.",
        "zh": "金属键是由自由价电子形成的电子海与金属阳离子之间的作用。",
        "ku": "Girêdana metalî di navbera deryaya elektronan a ku ji elektronên valansê yên azad pêk tê û îyonên metal ên erênî de ye."
      },
      "trap": {
        "tr": "Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.",
        "en": "Metallic bonds are established by sharing electrons between nonmetals.",
        "de": "Metallische Bindungen entstehen durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallen.",
        "fr": "Les liaisons métalliques sont établies en partageant des électrons entre des non-métaux.",
        "ru": "Металлические связи устанавливаются путём обобществления электронов между неметаллами.",
        "ar": "يتم إنشاء الروابط المعدنية من خلال مشاركة الإلكترونات بين اللافلزات.",
        "zh": "金属键是通过非金属之间共享电子建立的。",
        "ku": "Girêdanên metalîk bi parvekirina elektronan di navbera nemetalan de têne damezrandin."
      },
      "whyTrapIsFalse": {
        "tr": "Ametaller arasındaki elektron ortaklaşması kovalent bağdır; metalik bağ metal atomları arasında, pozitif metal iyonları ile serbest elektron denizi arasında oluşur.",
        "en": "Electron sharing between non-metals is covalent bonding; metallic bonding forms between metal atoms, between positive metal ions and a sea of free electrons.",
        "de": "Elektronenteilung zwischen Nichtmetallen ist eine kovalente Bindung; die Metallbindung besteht zwischen Metallatomen, zwischen positiven Metallionen und einem freien Elektronensee.",
        "fr": "La mise en commun d'électrons entre non-métaux est une liaison covalente ; la liaison métallique se forme entre atomes métalliques, entre les ions métalliques positifs et une mer d'électrons libres.",
        "ru": "Обобществление электронов между неметаллами — это ковалентная связь; металлическая связь возникает между атомами металлов — между положительными ионами металла и «морем» свободных электронов.",
        "ar": "تشارك الإلكترونات بين اللافلزات رابطة تساهمية؛ أما الرابطة الفلزية فتتكون بين ذرات الفلزات، بين أيونات الفلز الموجبة وبحر الإلكترونات الحرة.",
        "zh": "非金属之间共用电子形成的是共价键；金属键存在于金属原子之间，即金属阳离子与自由电子“海”之间。",
        "ku": "Hevpariya elektronan di navbera nemetalan de girêdana kovalent e; girêdana metalî di navbera atomên metal de, di navbera îyonên metal ên erênî û deryaya elektronên serbest de çêdibe."
      }
    },
    {
      "id": "u03-f08",
      "fact": {
        "tr": "Kovalent bağda elektronegatiflik farkı arttıkça bağın polar karakteri ve iyonik karakteri artar.",
        "en": "As the electronegativity difference in a covalent bond increases, the polar character and ionic character of the bond increases.",
        "de": "Mit zunehmender Elektronegativitätsdifferenz in einer kovalenten Bindung nimmt der polare und ionische Charakter der Bindung zu.",
        "fr": "À mesure que la différence d’électronégativité dans une liaison covalente augmente, le caractère polaire et le caractère ionique de la liaison augmentent.",
        "ru": "По мере увеличения разницы электроотрицательностей в ковалентной связи увеличивается полярный характер и ионный характер связи.",
        "ar": "مع زيادة الفرق في السالبية الكهربية في الرابطة التساهمية، يزداد الطابع القطبي والطابع الأيوني للرابطة.",
        "zh": "随着共价键中电负性差异的增加，键的极性特征和离子特征增加。",
        "ku": "Her ku ferqa elektronegatîfiyê di girêdanek kovalent de zêde dibe, karaktera polar û karaktera îyonî ya girêdanê zêde dibe."
      },
      "trap": {
        "tr": "Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.",
        "en": "The bond between two atoms with equal electronegativities is polar.",
        "de": "Die Bindung zwischen zwei Atomen mit gleicher Elektronegativität ist polar.",
        "fr": "La liaison entre deux atomes d’électronégativité égale est polaire.",
        "ru": "Связь между двумя атомами с одинаковой электроотрицательностью является полярной.",
        "ar": "الرابطة بين ذرتين متساويتين في السالبية الكهربية تكون قطبية.",
        "zh": "两个具有相等电负性的原子之间的键是极性的。",
        "ku": "Girêdana di navbera du atomên bi elektronegatîviyên wekhev de polar e."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronegatiflikleri eşit atomlar bağ elektronlarını eşit kuvvetle çeker, elektron yoğunluğu bir uca kaymaz; bu nedenle bağ polar değil, apolardır.",
        "en": "Atoms of equal electronegativity pull the bonding electrons equally, so the electron density does not shift to one end; the bond is therefore non-polar, not polar.",
        "de": "Atome gleicher Elektronegativität ziehen die Bindungselektronen gleich stark an, die Elektronendichte verschiebt sich nicht; die Bindung ist daher unpolar, nicht polar.",
        "fr": "Des atomes de même électronégativité attirent également les électrons de liaison ; la densité électronique ne se déplace pas vers un côté, la liaison est donc apolaire, pas polaire.",
        "ru": "Атомы с одинаковой электроотрицательностью притягивают электроны связи одинаково, электронная плотность не смещается; поэтому связь неполярная, а не полярная.",
        "ar": "الذرات المتساوية في الكهرسلبية تجذب إلكترونات الرابطة بالقوة نفسها فلا تنزاح الكثافة الإلكترونية نحو طرف، لذا تكون الرابطة غير قطبية لا قطبية.",
        "zh": "电负性相等的原子对成键电子的吸引相同，电子密度不偏向任何一方，所以该键是非极性键而不是极性键。",
        "ku": "Atomên ku elektronegatîfiya wan wekhev e elektronên girêdanê bi heman hêzê dikişînin, dendika elektronan naçe aliyekî; loma girêdan ne polar, apolar e."
      }
    },
    {
      "id": "u03-f09",
      "fact": {
        "tr": "Apolar kovalent bağ aynı cins iki ametal atomu arasında (örn. O2, N2, H2) oluşur.",
        "en": "Nonpolar covalent bonds form between two nonmetal atoms of the same type (e.g. O2, N2, H2).",
        "de": "Zwischen zwei Nichtmetallatomen desselben Typs (z. B. O2, N2, H2) bilden sich unpolare kovalente Bindungen.",
        "fr": "Des liaisons covalentes non polaires se forment entre deux atomes non métalliques du même type (par exemple O2, N2, H2).",
        "ru": "Неполярные ковалентные связи образуются между двумя атомами неметалла одного типа (например, O2, N2, H2).",
        "ar": "تتكون الروابط التساهمية غير القطبية بين ذرتين غير معدنيتين من نفس النوع (مثل O2، N2، H2).",
        "zh": "非极性共价键在两个相同类型的非金属原子（例如 O2、N2、H2）之间形成。",
        "ku": "Girêdanên kovalent ên nepolar di navbera du atomên nemetal ên ji heman cureyê de çêdibin (mînak O2, N2, H2)."
      },
      "trap": {
        "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
        "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
        "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
        "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
        "ru": "Связь в молекуле HCl является неполярной ковалентной связью.",
        "ar": "الرابطة في جزيء حمض الهيدروكلوريك هي رابطة تساهمية غير قطبية.",
        "zh": "HCl分子中的键是非极性共价键。",
        "ku": "Girêdana di molekula HCl de girêdaneke kovalentî ya nepolar e."
      },
      "whyTrapIsFalse": {
        "tr": "H ve Cl'nin elektronegatiflikleri farklıdır; bağ elektronları Cl'ye daha yakın bulunduğundan H–Cl bağı apolar değil, polar kovalenttir.",
        "en": "H and Cl have different electronegativities; the bonding electrons lie closer to Cl, so the H–Cl bond is polar covalent, not non-polar.",
        "de": "H und Cl haben unterschiedliche Elektronegativitäten; die Bindungselektronen liegen näher am Cl, die H–Cl-Bindung ist daher polar und nicht unpolar.",
        "fr": "H et Cl ont des électronégativités différentes ; les électrons de liaison sont plus proches de Cl, la liaison H–Cl est donc covalente polaire et non apolaire.",
        "ru": "У H и Cl разная электроотрицательность; электроны связи смещены к Cl, поэтому связь H–Cl ковалентная полярная, а не неполярная.",
        "ar": "كهرسلبية H وCl مختلفة، وإلكترونات الرابطة أقرب إلى Cl، لذا فالرابطة H–Cl تساهمية قطبية لا غير قطبية.",
        "zh": "H 和 Cl 的电负性不同，成键电子偏向 Cl，所以 H–Cl 键是极性共价键，而不是非极性键。",
        "ku": "Elektronegatîfiya H û Cl cuda ye; elektronên girêdanê nêzîkî Cl ne, loma girêdana H–Cl ne apolar, kovalenta polar e."
      }
    },
    {
      "id": "u03-f10",
      "fact": {
        "tr": "Suyun kaynama noktasının H2S'den belirgin yüksek olması molekülleri arasındaki hidrojen bağları nedeniyledir.",
        "en": "The boiling point of water is significantly higher than H2S due to the hydrogen bonds between its molecules.",
        "de": "Der Siedepunkt von Wasser liegt aufgrund der Wasserstoffbrückenbindungen zwischen seinen Molekülen deutlich höher als der von H2S.",
        "fr": "Le point d’ébullition de l’eau est nettement plus élevé que celui du H2S en raison des liaisons hydrogène entre ses molécules.",
        "ru": "Температура кипения воды значительно выше, чем у H2S из-за водородных связей между ее молекулами.",
        "ar": "درجة غليان الماء أعلى بكثير من كبريتيد الهيدروجين (H2S) بسبب الروابط الهيدروجينية بين جزيئاته.",
        "zh": "由于分子间存在氢键，水的沸点明显高于 H2S。",
        "ku": "Ji ber girêdanên hîdrojenê yên di navbera molekulên wê de, xala kelandinê ya avê ji H2S pirtir e."
      },
      "trap": {
        "tr": "Suyun yüksek kaynama noktası molekül kütlesinin H2S'den büyük olmasındandır.",
        "en": "The high boiling point of water is due to its molecular mass being greater than H2S.",
        "de": "Der hohe Siedepunkt von Wasser ist darauf zurückzuführen, dass seine Molekülmasse größer als die von H2S ist.",
        "fr": "Le point d’ébullition élevé de l’eau est dû à sa masse moléculaire supérieure à celle du H2S.",
        "ru": "Высокая температура кипения воды обусловлена ​​тем, что ее молекулярная масса превышает H2S.",
        "ar": "ترجع نقطة غليان الماء المرتفعة إلى أن كتلته الجزيئية أكبر من كتلة كبريتيد الهيدروجين (H2S).",
        "zh": "水的沸点高是因为它的分子质量大于H2S。",
        "ku": "Xala kelandina avê ya bilind ji ber ku girseya wê ya molekulî ji H2S mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "H2O'nun mol kütlesi (18 g/mol) H2S'ninkinden (34 g/mol) küçüktür; suyun kaynama noktasının yüksek olmasının nedeni kütle değil, moleküller arası hidrojen bağlarıdır.",
        "en": "The molar mass of H2O (18 g/mol) is smaller than that of H2S (34 g/mol); water's high boiling point is due not to mass but to hydrogen bonds between its molecules.",
        "de": "Die molare Masse von H2O (18 g/mol) ist kleiner als die von H2S (34 g/mol); der hohe Siedepunkt des Wassers beruht nicht auf der Masse, sondern auf Wasserstoffbrücken.",
        "fr": "La masse molaire de H2O (18 g/mol) est inférieure à celle de H2S (34 g/mol) ; le point d'ébullition élevé de l'eau est dû non à la masse mais aux liaisons hydrogène entre molécules.",
        "ru": "Молярная масса H2O (18 г/моль) меньше, чем у H2S (34 г/моль); высокая температура кипения воды обусловлена не массой, а водородными связями между молекулами.",
        "ar": "الكتلة المولية لـ H2O (18 g/mol) أصغر من كتلة H2S المولية (34 g/mol)؛ فارتفاع درجة غليان الماء لا يعود إلى الكتلة بل إلى الروابط الهيدروجينية بين جزيئاته.",
        "zh": "H2O 的摩尔质量（18 g/mol）小于 H2S（34 g/mol）；水沸点高不是因为质量大，而是因为分子间存在氢键。",
        "ku": "Girseya molar a H2O (18 g/mol) ji ya H2S (34 g/mol) biçûktir e; sedema bilindbûna xala kelandinê ya avê ne girse ye, girêdanên hîdrojenê yên navbera molekulan in."
      }
    },
    {
      "id": "u03-f11",
      "fact": {
        "tr": "Lewis nokta gösteriminde değerlik elektronları element sembolü çevresine noktalarla yerleştirilir.",
        "en": "In Lewis dot notation, valence electrons are placed as dots around the element symbol.",
        "de": "In der Lewis-Punkt-Notation werden Valenzelektronen als Punkte um das Elementsymbol platziert.",
        "fr": "Dans la notation par points de Lewis, les électrons de valence sont placés sous forme de points autour du symbole de l'élément.",
        "ru": "В точечной записи Льюиса валентные электроны располагаются точками вокруг символа элемента.",
        "ar": "في تدوين نقطة لويس، يتم وضع إلكترونات التكافؤ كنقاط حول رمز العنصر.",
        "zh": "在路易斯点表示法中，价电子以点的形式放置在元素符号周围。",
        "ku": "Di nîşana xala Lewis de, elektronên valence wekî xal li dora sembola hêmanê têne danîn."
      },
      "trap": {
        "tr": "Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.",
        "en": "In the Lewis symbol, the neutrons in the nucleus are drawn around the symbol.",
        "de": "Im Lewis-Symbol sind die Neutronen im Kern um das Symbol herum gezeichnet.",
        "fr": "Dans le symbole de Lewis, les neutrons du noyau sont dessinés autour du symbole.",
        "ru": "В символе Льюиса нейтроны ядра нарисованы вокруг символа.",
        "ar": "في رمز لويس، يتم رسم النيوترونات الموجودة في النواة حول الرمز.",
        "zh": "在路易斯符号中，原子核中的中子被绘制在符号周围。",
        "ku": "Di sembola Lewis de, notronên di navokê de li dora sembolê têne kişandin."
      },
      "whyTrapIsFalse": {
        "tr": "Lewis sembolünde yalnızca değerlik elektronları nokta olarak gösterilir; nötronlar çekirdekte bulunur ve bağ oluşumuna katılmadığı için gösterilmez.",
        "en": "A Lewis symbol shows only the valence electrons as dots; neutrons are in the nucleus and take no part in bonding, so they are not shown.",
        "de": "Ein Lewis-Symbol zeigt nur die Valenzelektronen als Punkte; Neutronen befinden sich im Kern und nehmen nicht an Bindungen teil, daher werden sie nicht dargestellt.",
        "fr": "Le symbole de Lewis ne représente que les électrons de valence par des points ; les neutrons sont dans le noyau et ne participent pas aux liaisons, on ne les représente donc pas.",
        "ru": "В символе Льюиса точками показывают только валентные электроны; нейтроны находятся в ядре и не участвуют в образовании связей, поэтому их не изображают.",
        "ar": "لا يُظهر رمز لويس إلا إلكترونات التكافؤ على شكل نقاط؛ أما النيوترونات فهي في النواة ولا تشارك في تكوين الروابط فلا تُرسم.",
        "zh": "路易斯符号只用点表示价电子；中子在原子核内，不参与成键，所以不画出来。",
        "ku": "Di sembola Lewis de tenê elektronên valansê wekî xal tên nîşandan; nötron di navikê de ne û beşdarî girêdanê nabin, loma nayên nîşandan."
      }
    },
    {
      "id": "u03-f12",
      "fact": {
        "tr": "Dipol-dipol etkileşimi kalıcı dipollere sahip polar moleküller arasında gerçekleşir.",
        "en": "Dipole-dipole interaction occurs between polar molecules with permanent dipoles.",
        "de": "Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen mit permanenten Dipolen auf.",
        "fr": "L'interaction dipôle-dipôle se produit entre des molécules polaires avec des dipôles permanents.",
        "ru": "Диполь-дипольное взаимодействие происходит между полярными молекулами с постоянными диполями.",
        "ar": "يحدث تفاعل ثنائي القطب ثنائي القطب بين الجزيئات القطبية ذات ثنائيات القطب الدائمة.",
        "zh": "偶极-偶极相互作用发生在具有永久偶极子的极性分子之间。",
        "ku": "Têkiliya dîpol-dîpol di navbera molekulên polar ên bi dupolên daîmî de pêk tê."
      },
      "trap": {
        "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
        "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
        "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
        "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
        "ru": "Диполь-дипольное взаимодействие — это фундаментальная сила, наблюдаемая между атомами благородного газа.",
        "ar": "التفاعل ثنائي القطب ثنائي القطب هو القوة الأساسية التي تظهر بين ذرات الغاز النبيل.",
        "zh": "偶极-偶极相互作用是稀有气体原子之间的基本力。",
        "ku": "Têkiliya dupol-dîpol hêza bingehîn e ku di navbera atomên gaza esîl de tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Soy gaz atomları apolardır ve kalıcı dipolleri yoktur; aralarında dipol-dipol değil, yalnızca London kuvvetleri bulunur.",
        "en": "Noble-gas atoms are non-polar and have no permanent dipoles; between them there are only London forces, not dipole–dipole interactions.",
        "de": "Edelgasatome sind unpolar und haben keine permanenten Dipole; zwischen ihnen wirken nur London-Kräfte, keine Dipol-Dipol-Wechselwirkungen.",
        "fr": "Les atomes de gaz nobles sont apolaires et n'ont pas de dipôle permanent ; entre eux il n'y a que des forces de London, pas d'interactions dipôle-dipôle.",
        "ru": "Атомы благородных газов неполярны и не имеют постоянных диполей; между ними действуют только лондоновские силы, а не диполь-дипольные.",
        "ar": "ذرات الغازات النبيلة غير قطبية وليس لها ثنائيات قطب دائمة، فلا يوجد بينها إلا قوى لندن وليس تآثر ثنائي القطب–ثنائي القطب.",
        "zh": "稀有气体原子是非极性的，没有永久偶极，它们之间只有色散力，而没有偶极-偶极作用。",
        "ku": "Atomên gazên soy apolar in û dupolên wan ên daîmî tune ne; di navbera wan de ne dupol-dupol, tenê hêzên London hene."
      }
    },
    {
      "id": "u03-f13",
      "fact": {
        "tr": "Bağ kırılması endotermik (enerji alan), bağ oluşumu ekzotermik (enerji veren) süreçtir.",
        "en": "Bond breaking is an endothermic (energy-consuming) process, while bond formation is an exothermic (energy-giving) process.",
        "de": "Der Bindungsbruch ist ein endothermer (energieverbrauchender) Prozess, während die Bindungsbildung ein exothermer (energiespendender) Prozess ist.",
        "fr": "La rupture des liaisons est un processus endothermique (consommateur d'énergie), tandis que la formation de liaisons est un processus exothermique (donneur d'énergie).",
        "ru": "Разрыв связи — эндотермический (энергозатратный) процесс, а образование связи — экзотермический (энергоотдающий) процесс.",
        "ar": "كسر الروابط هو عملية ماصة للحرارة (مستهلكة للطاقة)، ​​في حين أن تكوين الرابطة هو عملية طاردة للحرارة (مانحة الطاقة).",
        "zh": "键断裂是吸热（消耗能量）的过程，而键形成是放热（提供能量）的过程。",
        "ku": "Şikandina girêdanê pêvajoyek endotermîk (enerjî-dixwe) ye, dema ku çêbûna girêdan pêvajoyek exotermîk (enerjî dide) ye."
      },
      "trap": {
        "tr": "Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.",
        "en": "As the chemical bond is broken, a large amount of heat is always released into the environment.",
        "de": "Beim Aufbrechen der chemischen Bindung wird stets eine große Wärmemenge an die Umgebung abgegeben.",
        "fr": "Lorsque la liaison chimique est rompue, une grande quantité de chaleur est toujours libérée dans l’environnement.",
        "ru": "Поскольку химическая связь разрывается, в окружающую среду всегда выделяется большое количество тепла.",
        "ar": "عندما يتم كسر الرابطة الكيميائية، يتم إطلاق كمية كبيرة من الحرارة دائمًا في البيئة.",
        "zh": "随着化学键的断裂，总是会释放大量的热量到环境中。",
        "ku": "Ji ber ku girêdana kîmyewî têk diçe, her dem rêjeyek mezin germahî berdide hawîrdorê."
      },
      "whyTrapIsFalse": {
        "tr": "Bir bağı kırmak için atomlar arasındaki çekimi yenmek, yani dışarıdan enerji vermek gerekir; enerji bağ kırılırken değil, bağ oluşurken açığa çıkar.",
        "en": "Breaking a bond means overcoming the attraction between atoms, which requires energy input; energy is released when bonds form, not when they break.",
        "de": "Um eine Bindung zu spalten, muss die Anziehung zwischen den Atomen überwunden, also Energie zugeführt werden; Energie wird bei der Bindungsbildung frei, nicht bei der Spaltung.",
        "fr": "Rompre une liaison exige de vaincre l'attraction entre les atomes, donc de fournir de l'énergie ; l'énergie est libérée lors de la formation des liaisons, pas lors de leur rupture.",
        "ru": "Чтобы разорвать связь, нужно преодолеть притяжение атомов, то есть затратить энергию; энергия выделяется при образовании связей, а не при их разрыве.",
        "ar": "يتطلب كسر الرابطة التغلب على التجاذب بين الذرات، أي تزويدها بطاقة؛ وتنطلق الطاقة عند تكوّن الروابط لا عند كسرها.",
        "zh": "断开化学键需要克服原子间的吸引，即必须吸收能量；能量是在成键时放出的，而不是在断键时。",
        "ku": "Ji bo şikandina girêdanekê divê kişandina navbera atoman were bindestkirin, ango enerjî were dayîn; enerjî ne di şikandinê de, di çêbûna girêdanê de derdikeve."
      }
    },
    {
      "id": "u03-f14",
      "fact": {
        "tr": "Molekül içi kovalent bağlar güçlü etkileşim, moleküller arası van der Waals zayıf etkileşimdir.",
        "en": "Intramolecular covalent bonds are strong interactions and intermolecular van der Waals interactions are weak.",
        "de": "Intramolekulare kovalente Bindungen sind starke Wechselwirkungen und intermolekulare Van-der-Waals-Wechselwirkungen sind schwach.",
        "fr": "Les liaisons covalentes intramoléculaires sont des interactions fortes et les interactions intermoléculaires de Van der Waals sont faibles.",
        "ru": "Внутримолекулярные ковалентные связи представляют собой сильные взаимодействия, а межмолекулярные ван-дер-ваальсовые взаимодействия являются слабыми.",
        "ar": "الروابط التساهمية داخل الجزيئات هي تفاعلات قوية وتفاعلات فان دير فال بين الجزيئات ضعيفة.",
        "zh": "分子内共价键是强相互作用，分子间范德华相互作用是弱相互作用。",
        "ku": "Girêdanên kovalentî yên intramolekular danûstendinên xurt in û têkiliyên van der Waals-ê yên navmolekular qels in."
      },
      "trap": {
        "tr": "Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.",
        "en": "During the boiling of the substance, intramolecular covalent bonds are broken down.",
        "de": "Beim Sieden der Substanz werden intramolekulare kovalente Bindungen abgebaut.",
        "fr": "Lors de l'ébullition de la substance, les liaisons covalentes intramoléculaires sont rompues.",
        "ru": "При кипении вещества разрушаются внутримолекулярные ковалентные связи.",
        "ar": "أثناء غليان المادة، تتفكك الروابط التساهمية داخل الجزيئات.",
        "zh": "在物质沸腾的过程中，分子内共价键被破坏。",
        "ku": "Di dema kelandina maddeyê de, girêkên kovalentî yên navmolekularî diqetin."
      },
      "whyTrapIsFalse": {
        "tr": "Kaynama fiziksel bir değişimdir: moleküller arası zayıf etkileşimler yenilir, molekül içi kovalent bağlar sağlam kalır. Su buharı da H2O moleküllerinden oluşur.",
        "en": "Boiling is a physical change: the weak intermolecular interactions are overcome while the covalent bonds inside the molecules stay intact. Steam is still made of H2O molecules.",
        "de": "Sieden ist eine physikalische Veränderung: Die schwachen zwischenmolekularen Wechselwirkungen werden überwunden, die kovalenten Bindungen im Molekül bleiben erhalten. Wasserdampf besteht weiterhin aus H2O-Molekülen.",
        "fr": "L'ébullition est une transformation physique : les interactions intermoléculaires faibles sont rompues, les liaisons covalentes internes restent intactes. La vapeur d'eau est toujours formée de molécules H2O.",
        "ru": "Кипение — физическое явление: преодолеваются слабые межмолекулярные взаимодействия, а ковалентные связи внутри молекул сохраняются. Водяной пар тоже состоит из молекул H2O.",
        "ar": "الغليان تغيّر فيزيائي: يُتغلَّب على التآثرات الضعيفة بين الجزيئات وتبقى الروابط التساهمية داخل الجزيئات سليمة، فبخار الماء يتكوّن أيضاً من جزيئات H2O.",
        "zh": "沸腾是物理变化：克服的是分子间的弱相互作用，分子内的共价键保持不变。水蒸气仍由 H2O 分子构成。",
        "ku": "Kelandin guherîneke fîzîkî ye: têkiliyên qels ên navbera molekulan tên bindestkirin, girêdanên kovalent ên hundirê molekulê saxlem dimînin. Buhara avê jî ji molekulên H2O pêk tê."
      }
    },
    {
      "id": "u03-f15",
      "fact": {
        "tr": "Metallerin tel ve levha hâline getirilebilmesi elektron denizi modeliyle açıklanır: atom katmanları kaysa da elektron denizi metal iyonlarını bir arada tutar.",
        "en": "The fact that metals can be drawn into wires and hammered into sheets is explained by the electron sea model: even when layers of atoms slide, the electron sea keeps the metal ions together.",
        "de": "Dass sich Metalle zu Drähten ziehen und zu Blechen walzen lassen, erklärt das Elektronensee-Modell: Auch wenn Atomschichten gegeneinander verschoben werden, hält der Elektronensee die Metallionen zusammen.",
        "fr": "Le fait que les métaux puissent être étirés en fils et laminés en feuilles s'explique par le modèle de la mer d'électrons : même lorsque les couches d'atomes glissent, la mer d'électrons maintient les ions métalliques ensemble.",
        "ru": "То, что металлы можно вытягивать в проволоку и прокатывать в листы, объясняется моделью электронного моря: даже при сдвиге слоёв атомов электронное море удерживает ионы металла вместе.",
        "ar": "تُفسَّر قابلية الفلزات للسحب إلى أسلاك والطرق إلى صفائح بنموذج بحر الإلكترونات: حتى عند انزلاق طبقات الذرات يبقى بحر الإلكترونات رابطًا أيونات الفلز معًا.",
        "zh": "金属能被拉成丝、压成薄片，可用电子海模型解释：即使原子层发生滑动，电子海仍把金属阳离子结合在一起。",
        "ku": "Ku metal dikarin bibin têl û pel, bi modela deryaya elektronan tê ravekirin: tevî ku tebeqeyên atoman dişemitin jî deryaya elektronan îyonên metal li hev digire."
      },
      "trap": {
        "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha hâline getirilebilir.",
        "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
        "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
        "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
        "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
        "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
        "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
        "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik kristale vurulduğunda katmanlar kayar ve aynı yüklü iyonlar karşı karşıya gelir; oluşan itme kristali kırar. Tel ve levha hâline gelebilme metallere özgüdür.",
        "en": "When an ionic crystal is struck, the layers slide and ions of the same charge come face to face; the resulting repulsion shatters the crystal. Being drawn into wires and sheets is typical of metals.",
        "de": "Schlägt man auf einen Ionenkristall, verschieben sich die Schichten und gleich geladene Ionen stehen sich gegenüber; die Abstoßung zerbricht den Kristall. Zu Draht und Blech formbar sind Metalle.",
        "fr": "Quand on frappe un cristal ionique, les couches glissent et des ions de même charge se retrouvent face à face ; la répulsion brise le cristal. La ductilité et la malléabilité sont propres aux métaux.",
        "ru": "При ударе по ионному кристаллу слои сдвигаются, и одноимённо заряженные ионы оказываются друг против друга; отталкивание раскалывает кристалл. Вытягиваться в проволоку и листы способны металлы.",
        "ar": "عند طرق البلورة الأيونية تنزلق الطبقات فتتقابل أيونات متشابهة الشحنة، فيؤدي التنافر إلى تكسّر البلورة. أما قابلية السحب والطرق فخاصية للفلزات.",
        "zh": "敲击离子晶体时，离子层发生滑移，同种电荷的离子相互对齐，产生的排斥使晶体碎裂。能拉成丝、压成片是金属特有的性质。",
        "ku": "Dema li krîstaleke îyonîk tê xistin, qat dişemitin û îyonên bi heman barî li hember hev dimînin; dûrxistina çêbûyî krîstalê dişikîne. Bûna têl û pel taybetiya metalan e."
      }
    },
    {
      "id": "u03-f16",
      "fact": {
        "tr": "Bileşik adlandırmada kovalent bileşiklerde mono, di, tri gibi sayı ön ekleri kullanılır.",
        "en": "In naming compounds, numerical prefixes such as mono, di, tri are used for covalent compounds.",
        "de": "Bei der Benennung von Verbindungen werden bei kovalenten Verbindungen Zahlpräfixe wie mono, di, tri verwendet.",
        "fr": "Dans la nomenclature, les préfixes numériques tels que mono, di, tri sont utilisés pour les composés covalents.",
        "ru": "При названии ковалентных соединений используются числовые приставки, такие как моно, ди, три.",
        "ar": "في تسمية المركبات التساهمية تُستخدم البادئات العددية مثل أحادي (mono) وثنائي (di) وثلاثي (tri).",
        "zh": "共价化合物命名时使用一、二、三（mono、di、tri）等数字前缀。",
        "ku": "Di binavkirina pêkhateyên kovalent de pêşgirên hejmarî yên wekî mono, di, tri têne bikaranîn."
      },
      "trap": {
        "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
        "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
        "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
        "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
        "ru": "При названии ионных соединений используются приставки моно, ди, три по числу атомов неметалла.",
        "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل mono وdi وtri وفقًا لعدد ذرات اللافلز.",
        "zh": "离子化合物命名时根据非金属原子数使用mono、di、tri等前缀。",
        "ku": "Di binavkirina pêkhateyên îyonî de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, tri têne bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik bileşiklerde iyonların oranı yüklerden belli olduğu için sayı ön eki kullanılmaz (örn. CaCl2 kalsiyum klorür); mono, di, tri gibi ön ekler iki ametalden oluşan kovalent bileşiklerde kullanılır.",
        "en": "In ionic compounds the ion ratio follows from the charges, so no number prefixes are used (e.g. CaCl2 is calcium chloride); prefixes like mono, di, tri are used for covalent compounds of two non-metals.",
        "de": "Bei ionischen Verbindungen ergibt sich das Ionenverhältnis aus den Ladungen, daher werden keine Zahlpräfixe verwendet (z. B. CaCl2 Calciumchlorid); Präfixe wie mono, di, tri nutzt man bei kovalenten Verbindungen aus zwei Nichtmetallen.",
        "fr": "Dans les composés ioniques, le rapport des ions découle des charges : on n'utilise pas de préfixes (ex. CaCl2 : chlorure de calcium) ; les préfixes mono, di, tri servent aux composés covalents de deux non-métaux.",
        "ru": "В ионных соединениях соотношение ионов следует из зарядов, поэтому числовые приставки не используют (например, CaCl2 — хлорид кальция); приставки моно-, ди-, три- применяют для ковалентных соединений двух неметаллов.",
        "ar": "في المركبات الأيونية تُعرف نسبة الأيونات من شحناتها فلا تُستخدم بادئات عددية (مثل CaCl2 كلوريد الكالسيوم)، وتُستخدم بادئات أحادي وثنائي وثلاثي في المركبات التساهمية المكوّنة من لافلزين.",
        "zh": "离子化合物中离子个数比由电荷决定，所以不用数字前缀（如 CaCl2 叫氯化钙）；“一、二、三”等前缀用于由两种非金属组成的共价化合物。",
        "ku": "Di pêkhateyên îyonîk de rêjeya îyonan ji baran diyar e, loma pêşgirên hejmarî nayên bikaranîn (mînak CaCl2 klorîda kalsiyûmê); pêşgirên wekî mono, di, trî di pêkhateyên kovalent ên ji du nemetalan de tên bikaranîn."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u03-c01",
      "conceptA": {
        "tr": "İyonik Bağ",
        "en": "Ionic Bond",
        "de": "Ionenbindung",
        "fr": "Liaison ionique",
        "ru": "Ионная связь",
        "ar": "الرابطة الأيونية",
        "zh": "离子键",
        "ku": "Girêdana Îyonî"
      },
      "conceptB": {
        "tr": "Kovalent Bağ",
        "en": "Covalent Bond",
        "de": "Kovalente Bindung",
        "fr": "Liaison covalente",
        "ru": "Ковалентная связь",
        "ar": "الرابطة التساهمية",
        "zh": "共价键",
        "ku": "Girêdana Kovalent"
      },
      "distinction": {
        "tr": "İyonik bağ elektron alışverişiyle kristal örgü oluşturur; kovalent bağ elektron ortaklaşmasıyla oluşur.",
        "en": "Ionic bond forms a crystal lattice through electron exchange; Covalent bonds are formed by sharing electrons.",
        "de": "Eine Ionenbindung bildet durch Elektronenaustausch ein Kristallgitter; Kovalente Bindungen entstehen durch die gemeinsame Nutzung von Elektronen.",
        "fr": "La liaison ionique forme un réseau cristallin par échange d'électrons ; Les liaisons covalentes se forment en partageant des électrons.",
        "ru": "Ионная связь образует кристаллическую решетку посредством электронного обмена; Ковалентные связи образуются за счет общих электронов.",
        "ar": "تشكل الرابطة الأيونية شبكة بلورية من خلال تبادل الإلكترون؛ تتشكل الروابط التساهمية من خلال مشاركة الإلكترونات.",
        "zh": "离子键通过电子交换形成晶格；共价键是通过共享电子形成的。",
        "ku": "Girêdana îyonî bi rêya pevguherîna elektronê şebeke krîstal çêdike; Girêdanên kovalent bi parvekirina elektronan çêdibin."
      }
    },
    {
      "id": "u03-c02",
      "conceptA": {
        "tr": "Hidrojen Bağı",
        "en": "Hydrogen Bond",
        "de": "Wasserstoffbindung",
        "fr": "Liaison hydrogène",
        "ru": "Водородная связь",
        "ar": "رابطة الهيدروجين",
        "zh": "氢键",
        "ku": "Girêdana hîdrojenê"
      },
      "conceptB": {
        "tr": "Dipol-Dipol",
        "en": "Dipole-Dipole",
        "de": "Dipol-Dipol",
        "fr": "Dipôle-Dipôle",
        "ru": "Диполь-Диполь",
        "ar": "ثنائي القطب ثنائي القطب",
        "zh": "偶极子-偶极子",
        "ku": "Dipole-Dîpole"
      },
      "distinction": {
        "tr": "Hidrojen bağı F, O, N atomlarına bağlı H atomunun oluşturduğu özel ve çok daha güçlü dipol etkileşimidir.",
        "en": "Hydrogen bond is a special and much stronger dipole interaction formed by the H atom bonded to F, O, N atoms.",
        "de": "Die Wasserstoffbindung ist eine spezielle und viel stärkere Dipolwechselwirkung, die durch die Bindung des H-Atoms an F-, O- und N-Atome entsteht.",
        "fr": "La liaison hydrogène est une interaction dipolaire spéciale et beaucoup plus forte formée par l’atome H lié aux atomes F, O, N.",
        "ru": "Водородная связь — это особое и гораздо более сильное дипольное взаимодействие, образованное атомом H, связанным с атомами F, O, N.",
        "ar": "الرابطة الهيدروجينية عبارة عن تفاعل ثنائي القطب خاص وأقوى بكثير يتكون من ذرة H المرتبطة بذرات F وO وN.",
        "zh": "氢键是由H原子与F、O、N原子键合形成的特殊且更强的偶极相互作用。",
        "ku": "Girêdana hîdrojenê têkiliyek dîpolek taybetî û pir bihêztir e ku ji hêla atoma H ve bi atomên F, O, N ve girêdayî ye."
      }
    },
    {
      "id": "u03-c03",
      "conceptA": {
        "tr": "Polar Kovalent Bağ",
        "en": "Polar Covalent Bond",
        "de": "Polare kovalente Bindung",
        "fr": "Liaison covalente polaire",
        "ru": "Полярная ковалентная связь",
        "ar": "الرابطة التساهمية القطبية",
        "zh": "极性共价键",
        "ku": "Girêdana Kovalent a Polar"
      },
      "conceptB": {
        "tr": "Apolar Kovalent Bağ",
        "en": "Nonpolar Covalent Bond",
        "de": "Unpolare kovalente Bindung",
        "fr": "Liaison covalente non polaire",
        "ru": "Неполярная ковалентная связь",
        "ar": "الرابطة التساهمية غير القطبية",
        "zh": "非极性共价键",
        "ku": "Girêdana Kovalent a Nepolar"
      },
      "distinction": {
        "tr": "Polar kovalent bağ farklı ametal atomları arasında oluşur ve bağ elektronları eşit paylaşılmaz; apolar kovalent bağ aynı cins ametal atomları arasında oluşur ve bağ elektronları eşit paylaşılır.",
        "en": "A polar covalent bond forms between atoms of different nonmetals, and the bonding electrons are shared unequally; a nonpolar covalent bond forms between identical nonmetal atoms, and the bonding electrons are shared equally.",
        "de": "Eine polare kovalente Bindung entsteht zwischen Atomen verschiedener Nichtmetalle, und die Bindungselektronen werden ungleich geteilt; die unpolare Bindung entsteht zwischen gleichen Nichtmetallatomen, und die Bindungselektronen werden gleichmäßig geteilt.",
        "fr": "Une liaison covalente polaire se forme entre des atomes de non-métaux différents, et les électrons de liaison sont partagés inégalement ; la liaison apolaire se forme entre des atomes identiques d'un non-métal, et les électrons de liaison sont partagés également.",
        "ru": "Полярная ковалентная связь образуется между атомами разных неметаллов, и связывающие электроны распределены неравномерно; неполярная связь образуется между одинаковыми атомами неметалла, и связывающие электроны распределены равномерно.",
        "ar": "الرابطة التساهمية القطبية تنشأ بين ذرات لافلزات مختلفة وتتوزع فيها إلكترونات الرابطة توزيعًا غير متساوٍ؛ أما الرابطة التساهمية غير القطبية فتنشأ بين ذرات متماثلة من اللافلز نفسه وتتوزع فيها إلكترونات الرابطة بالتساوي.",
        "zh": "极性共价键形成于不同非金属原子之间，共用电子对偏向一方；非极性共价键形成于同种非金属原子之间，共用电子对不偏移。",
        "ku": "Girêdana kovalent a polar di navbera atomên nemetalên cuda de çêdibe û elektronên girêdanê newekhev tên parvekirin; girêdana nepolar di navbera atomên heman nemetalê de çêdibe û elektronên girêdanê wekhev tên parvekirin."
      }
    },
    {
      "id": "u03-c04",
      "conceptA": {
        "tr": "Metalik Bağ",
        "en": "Metallic Bond",
        "de": "Metallische Bindung",
        "fr": "Liaison métallique",
        "ru": "Металлическая связь",
        "ar": "الرابطة الفلزية",
        "zh": "金属键",
        "ku": "Girêdana Metalî"
      },
      "conceptB": {
        "tr": "London Kuvveti",
        "en": "London Force",
        "de": "London-Kräfte",
        "fr": "Force de London",
        "ru": "Лондоновские силы",
        "ar": "قوة لندن",
        "zh": "伦敦力",
        "ku": "Hêza Londonê"
      },
      "distinction": {
        "tr": "Metalik bağ, elektron denizi ile pozitif metal iyonları arasındaki güçlü bir etkileşimdir; London kuvveti ise anlık dipollerden kaynaklanan ve benzer büyüklükteki tanecikler karşılaştırıldığında genellikle en zayıf olan etkileşimdir.",
        "en": "Metallic bonding is a strong interaction between the electron sea and positive metal ions; the London force arises from instantaneous dipoles and is generally the weakest interaction when particles of similar size are compared.",
        "de": "Die metallische Bindung ist eine starke Wechselwirkung zwischen dem Elektronensee und positiven Metallionen; die London-Kraft entsteht durch momentane Dipole und ist beim Vergleich ähnlich großer Teilchen meist die schwächste Wechselwirkung.",
        "fr": "La liaison métallique est une interaction forte entre la mer d'électrons et les ions métalliques positifs ; la force de London provient de dipôles instantanés et est généralement l'interaction la plus faible lorsqu'on compare des particules de taille semblable.",
        "ru": "Металлическая связь — сильное взаимодействие между «морем» электронов и положительными ионами металла; лондоновская сила возникает из-за мгновенных диполей и при сравнении частиц сходного размера обычно оказывается самым слабым взаимодействием.",
        "ar": "الرابطة الفلزية تآثر قوي بين بحر الإلكترونات وأيونات الفلز الموجبة؛ أما قوة لندن فتنشأ عن ثنائيات القطب اللحظية، وهي عادةً أضعف التآثرات عند مقارنة دقائق متقاربة الحجم.",
        "zh": "金属键是电子海与金属阳离子之间的强相互作用；色散力（伦敦力）来自瞬时偶极，在比较大小相近的微粒时通常是最弱的相互作用。",
        "ku": "Girêdana metalî têkiliyeke xurt a navbera deryaya elektronan û îyonên metal ên erênî ye; hêza London ji dupolên demkî çêdibe û dema perçikên bi mezinahiya nêzîk tên berhevkirin bi giştî têkiliya herî qels e."
      }
    },
    {
      "id": "u03-c05",
      "conceptA": {
        "tr": "Molekül İçi Güçlü Bağ",
        "en": "Strong Intramolecular Bond",
        "de": "Starke intramolekulare Bindung",
        "fr": "Forte liaison intramoléculaire",
        "ru": "Сильная внутримолекулярная связь",
        "ar": "رابطة قوية داخل الجزيئات",
        "zh": "强分子内键",
        "ku": "Têkiliya Intramolekular a Hêz"
      },
      "conceptB": {
        "tr": "Moleküller Arası Zayıf Bağ",
        "en": "Weak Intermolecular Bond",
        "de": "Schwache intermolekulare Bindung",
        "fr": "Faible liaison intermoléculaire",
        "ru": "Слабая межмолекулярная связь",
        "ar": "الرابطة الجزيئية الضعيفة",
        "zh": "弱分子间键",
        "ku": "Têkiliya Navmolekularî ya Qels"
      },
      "distinction": {
        "tr": "Molekül içi güçlü bağ atomları bir molekülde bir arada tutar ve maddenin kimyasal özelliklerini belirler; moleküller arası zayıf bağ ise molekülleri bir arada tutar ve erime, kaynama noktası gibi fiziksel özellikleri belirler.",
        "en": "A strong intramolecular bond holds the atoms together within a molecule and determines the chemical properties of the substance; a weak intermolecular bond holds molecules to one another and determines physical properties such as melting and boiling points.",
        "de": "Eine starke intramolekulare Bindung hält die Atome innerhalb eines Moleküls zusammen und bestimmt die chemischen Eigenschaften des Stoffes; die schwache Anziehung zwischen den Molekülen hält die Moleküle zusammen und bestimmt physikalische Eigenschaften wie Schmelz- und Siedepunkt.",
        "fr": "Une forte liaison intramoléculaire maintient les atomes ensemble au sein d'une molécule et détermine les propriétés chimiques de la substance ; une faible liaison intermoléculaire maintient les molécules entre elles et détermine des propriétés physiques comme les points de fusion et d'ébullition.",
        "ru": "Сильная внутримолекулярная связь удерживает атомы внутри молекулы и определяет химические свойства вещества; слабая межмолекулярная связь удерживает молекулы друг около друга и определяет физические свойства, например температуры плавления и кипения.",
        "ar": "رابطة قوية داخل الجزيئات تربط الذرات معًا في الجزيء الواحد وتحدد الخواص الكيميائية للمادة؛ أما الرابطة الجزيئية الضعيفة فتربط كل جزيء بالجزيئات المجاورة وتحدد الخواص الفيزيائية مثل درجتي الانصهار والغليان.",
        "zh": "强分子内键把原子结合在分子内部，决定物质的化学性质；弱分子间键把分子与分子结合在一起，决定熔点、沸点等物理性质。",
        "ku": "Têkiliya intramolekular a hêz atoman di hundirê molekulê de li hev digire û taybetmendiyên kîmyewî yên maddeyê diyar dike; têkiliya navmolekularî ya qels molekulan li hev digire û taybetmendiyên fîzîkî yên wekî xalên helîn û kelandinê diyar dike."
      }
    },
    {
      "id": "u03-c06",
      "conceptA": {
        "tr": "Ağ Örgülü Kovalent Katı",
        "en": "Covalent Network Solid",
        "de": "Vernetzter kovalenter Feststoff",
        "fr": "Solide covalent en réseau",
        "ru": "Ковалентное сетчатое твёрдое вещество",
        "ar": "صلب تساهمي شبكي",
        "zh": "共价网络固体",
        "ku": "Madeya Hişk a Tora Kovalent"
      },
      "conceptB": {
        "tr": "Moleküler Katı",
        "en": "Molecular Solid",
        "de": "Molekularer Feststoff",
        "fr": "Solide moléculaire",
        "ru": "Молекулярное твёрдое вещество",
        "ar": "صلب جزيئي",
        "zh": "分子固体",
        "ku": "Madeya Hişk a Molekulî"
      },
      "distinction": {
        "tr": "Ağ örgülü kovalent katı (elmas, kuvars) atomların kovalent bağlarla üç boyutlu bir ağ oluşturduğu çok sert katıdır; moleküler katı (buz, kuru buz) ise moleküllerin zayıf etkileşimlerle bir arada tutunduğu, erime noktası düşük katıdır.",
        "en": "A covalent network solid (diamond, quartz) is a very hard solid in which the atoms are joined by covalent bonds into a three-dimensional framework; a molecular solid (ice, dry ice) is a low-melting solid in which molecules are held together by weak interactions.",
        "de": "Ein vernetzter kovalenter Feststoff (Diamant, Quarz) ist sehr hart, weil seine Atome durch Elektronenpaarbindungen zu einem dreidimensionalen Netzwerk verknüpft sind; ein molekularer Feststoff (Eis, Trockeneis) besteht aus Molekülen, die nur durch schwache Wechselwirkungen zusammengehalten werden, und schmilzt bei niedriger Temperatur.",
        "fr": "Un solide covalent en réseau (diamant, quartz) est très dur, car ses atomes sont unis par des liaisons covalentes en une structure tridimensionnelle ; un solide moléculaire (glace, neige carbonique) est formé de molécules retenues par des interactions faibles et fond à basse température.",
        "ru": "Ковалентное сетчатое твёрдое вещество (алмаз, кварц) отличается очень высокой твёрдостью: его атомы соединены ковалентными связями в трёхмерную сетку; молекулярное твёрдое вещество (лёд, сухой лёд) состоит из молекул, удерживаемых слабыми взаимодействиями, и плавится при низкой температуре.",
        "ar": "صلب تساهمي شبكي (الماس، الكوارتز): مادة شديدة الصلابة ترتبط ذراتها بأزواج إلكترونات مشتركة في شبكة ثلاثية الأبعاد؛ أما الصلب الجزيئي (الجليد، الثلج الجاف) فيتكون من جزيئات تتماسك بتآثرات ضعيفة ودرجة انصهاره منخفضة.",
        "zh": "共价网络固体（金刚石、石英）中原子以共价键连成三维网络，硬度很大；分子固体（冰、干冰）中分子靠弱相互作用结合，熔点低。",
        "ku": "Madeya hişk a tora kovalent (elmas, kuarts) pir hişk e û atomên wê bi girêdanên kovalent toreke sê-alî çêdikin; madeya hişk a molekulî (qeşa, qeşaya hişk) ji molekulên ku bi têkiliyên qels li hev tên girtin pêk tê û xala helîna wê nizm e."
      }
    },
    {
      "id": "u03-c07",
      "conceptA": {
        "tr": "İyon-Dipol Etkileşimi",
        "en": "Ion-Dipole Interaction",
        "de": "Ion-Dipol-Wechselwirkung",
        "fr": "Interaction ion-dipôle",
        "ru": "Ион-дипольное взаимодействие",
        "ar": "التفاعل أيون-ثنائي القطب",
        "zh": "离子-偶极作用",
        "ku": "Têkiliya Îyon-Dîpol"
      },
      "conceptB": {
        "tr": "Dipol-Dipol Etkileşimi",
        "en": "Dipole-Dipole Interaction",
        "de": "Dipol-Dipol-Wechselwirkung",
        "fr": "Interaction dipôle-dipôle",
        "ru": "Диполь-дипольное взаимодействие",
        "ar": "التفاعل ثنائي القطب-ثنائي القطب",
        "zh": "偶极-偶极作用",
        "ku": "Têkiliya Dîpol-Dîpol"
      },
      "distinction": {
        "tr": "İyon-dipol etkileşimi bir iyon ile polar molekül arasında (örn. NaCl'nin suda çözünmesi) görülür; dipol-dipol etkileşimi iki polar molekül arasında (örn. HCl molekülleri) görülür.",
        "en": "An ion-dipole interaction occurs between an ion and a polar molecule (e.g., NaCl dissolving in water); a dipole-dipole interaction occurs between two polar molecules (e.g., HCl molecules).",
        "de": "Eine Ion-Dipol-Wechselwirkung tritt zwischen einem Ion und einem polaren Molekül auf (z. B. beim Lösen von NaCl in Wasser); eine Dipol-Dipol-Wechselwirkung tritt zwischen zwei polaren Molekülen auf (z. B. HCl-Moleküle).",
        "fr": "L'interaction ion-dipôle s'établit entre un ion et une molécule polaire (ex. dissolution de NaCl dans l'eau) ; l'interaction dipôle-dipôle s'établit entre deux molécules polaires (ex. molécules de HCl).",
        "ru": "Ион-дипольное взаимодействие возникает между ионом и полярной молекулой (например, при растворении NaCl в воде); диполь-дипольное — между двумя полярными молекулами (например, молекулами HCl).",
        "ar": "يحدث تفاعل أيون-ثنائي القطب بين أيون وجزيء قطبي (مثل ذوبان NaCl في الماء)؛ ويحدث تفاعل ثنائي القطب-ثنائي القطب بين جزيئين قطبيين (مثل جزيئات HCl).",
        "zh": "离子-偶极作用发生在离子与极性分子之间（如NaCl溶于水）；偶极-偶极作用发生在两个极性分子之间（如HCl分子之间）。",
        "ku": "Têkiliya îyon-dîpol di navbera îyonekê û molekuleke polar de çêdibe (mînak helîna NaCl di avê de); têkiliya dîpol-dîpol di navbera du molekulên polar de çêdibe (mînak molekulên HCl)."
      }
    },
    {
      "id": "u03-c08",
      "conceptA": {
        "tr": "Fiziksel Değişim",
        "en": "Physical Change",
        "de": "Physikalische Veränderung",
        "fr": "Changement physique",
        "ru": "Физическое изменение",
        "ar": "التغير الفيزيائي",
        "zh": "物理变化",
        "ku": "Guherîna Fîzîkî"
      },
      "conceptB": {
        "tr": "Kimyasal Değişim",
        "en": "Chemical Change",
        "de": "Chemische Veränderung",
        "fr": "Changement chimique",
        "ru": "Химическое изменение",
        "ar": "التغير الكيميائي",
        "zh": "化学变化",
        "ku": "Guherîna Kîmyewî"
      },
      "distinction": {
        "tr": "Fiziksel değişimde maddenin kimliği korunur ve genellikle yalnızca zayıf etkileşimler değişir; kimyasal değişimde kimyasal bağlar kırılıp yeni bağlar oluşur ve yeni maddeler meydana gelir.",
        "en": "In a physical change the identity of the substance is preserved and usually only weak interactions change; in a chemical change chemical bonds are broken, new bonds form and new substances are produced.",
        "de": "Eine physikalische Veränderung erhält die Identität des Stoffes, meist ändern sich nur schwache Wechselwirkungen; bei einer chemischen Umwandlung werden chemische Bindungen gebrochen, neue Bindungen gebildet und neue Stoffe entstehen.",
        "fr": "Lors d'un changement physique, l'identité de la substance est conservée et ce sont généralement les seules interactions faibles qui changent ; lors d'un changement chimique, des liaisons chimiques sont rompues, de nouvelles liaisons se forment et de nouvelles substances apparaissent.",
        "ru": "Физическое изменение сохраняет природу вещества: обычно меняются лишь слабые взаимодействия; при химическом превращении разрываются химические связи, образуются новые связи и новые вещества.",
        "ar": "في التغير الفيزيائي تبقى هوية المادة محفوظة وغالبًا ما تتغير التفاعلات الضعيفة فقط؛ أما في التغير الكيميائي فتنكسر الروابط الكيميائية وتتكوّن روابط جديدة وتنتج مواد جديدة.",
        "zh": "物理变化中物质的本质不变，通常只有弱相互作用发生改变；化学变化中化学键断裂、形成新键并生成新物质。",
        "ku": "Di guherîna fîzîkî de nasnameya maddeyê tê parastin û bi gelemperî tenê têkiliyên qels diguherin; di guherîna kîmyewî de girêdanên kîmyewî dişikên, girêdanên nû çêdibin û maddeyên nû peyda dibin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u03-s01",
      "title": {
        "tr": "Zayıf Etkileşimlerin Genel Güç Sıralaması (Benzer Büyüklükteki Tanecikler İçin, En Güçlüden En Zayıfa)",
        "en": "General Strength Order of Weak Interactions (Particles of Similar Size, Strongest to Weakest)",
        "de": "Allgemeine Stärkereihenfolge schwacher Wechselwirkungen (ähnlich große Teilchen, von der stärksten zur schwächsten)",
        "fr": "Ordre général de force des interactions faibles (particules de taille semblable, de la plus forte à la plus faible)",
        "ru": "Общий ряд слабых взаимодействий по силе (для частиц сходного размера, от сильного к слабому)",
        "ar": "الترتيب العام لقوة التآثرات الضعيفة (لدقائق متقاربة الحجم، من الأقوى إلى الأضعف)",
        "zh": "弱相互作用的一般强度顺序（大小相近的微粒，由强到弱）",
        "ku": "Rêzkirina Giştî ya Hêza Têkiliyên Qels (Ji bo Perçikên bi Mezinahiya Nêzîk, ji ya Herî Xurt ber bi ya Herî Qels)"
      },
      "steps": [
        {
          "tr": "İyon-dipol etkileşimi",
          "en": "Ion-dipole interaction",
          "de": "Ionen-Dipol-Wechselwirkung",
          "fr": "Interaction ion-dipôle",
          "ru": "Ионно-дипольное взаимодействие",
          "ar": "التفاعل الأيوني ثنائي القطب",
          "zh": "离子偶极相互作用",
          "ku": "Têkiliya îyon-dîpol"
        },
        {
          "tr": "Hidrojen bağı",
          "en": "hydrogen bond",
          "de": "Wasserstoffbindung",
          "fr": "liaison hydrogène",
          "ru": "водородная связь",
          "ar": "رابطة الهيدروجين",
          "zh": "氢键",
          "ku": "girêdana hîdrojenê"
        },
        {
          "tr": "Dipol-dipol etkileşimi",
          "en": "Dipole-dipole interaction",
          "de": "Dipol-Dipol-Wechselwirkung",
          "fr": "Interaction dipôle-dipôle",
          "ru": "Диполь-дипольное взаимодействие",
          "ar": "التفاعل ثنائي القطب ثنائي القطب",
          "zh": "偶极-偶极相互作用",
          "ku": "Têkiliya dupol-dipol"
        },
        {
          "tr": "London dispersiyon kuvvetleri",
          "en": "London dispersion forces",
          "de": "London-Dispersionskräfte",
          "fr": "Forces de dispersion de London",
          "ru": "Лондоновские дисперсионные силы",
          "ar": "قوى تشتت لندن",
          "zh": "伦敦色散力",
          "ku": "hêzên belavbûna Londonê"
        }
      ]
    },
    {
      "id": "u03-s02",
      "title": {
        "tr": "İyonik Bağ Oluşum Aşamaları",
        "en": "Ionic Bond Formation Stages",
        "de": "Phasen der Ionenbindungsbildung",
        "fr": "Étapes de formation de liaisons ioniques",
        "ru": "Стадии образования ионной связи",
        "ar": "مراحل تكوين الرابطة الأيونية",
        "zh": "离子键形成阶段",
        "ku": "Qonaxên Çêbûna Girêdana Îyonî"
      },
      "steps": [
        {
          "tr": "Metal atomu değerlik elektronunu verir",
          "en": "Metal atom donates its valence electron",
          "de": "Das Metallatom gibt sein Valenzelektron ab",
          "fr": "L'atome de métal donne son électron de valence",
          "ru": "Атом металла отдает свой валентный электрон",
          "ar": "تتبرع ذرة المعدن بإلكترون التكافؤ الخاص بها",
          "zh": "金属原子贡献其价电子",
          "ku": "Atoma metal elektroneya xwe ya valence dide"
        },
        {
          "tr": "Ametal atomu elektronu alarak oktetini tamamlar",
          "en": "A nonmetal atom completes its octet by gaining an electron.",
          "de": "Ein Nichtmetallatom vervollständigt sein Oktett durch die Aufnahme eines Elektrons.",
          "fr": "Un atome non métallique complète son octet en gagnant un électron.",
          "ru": "Атом неметалла завершает свой октет, приобретая электрон.",
          "ar": "تكمل الذرة اللافلزية ثمانيتها باكتساب إلكترون.",
          "zh": "非金属原子通过获得电子来完成其八位组。",
          "ku": "Atoma nemetal bi bidestxistina elektronekê okteta xwe temam dike."
        },
        {
          "tr": "Zıt yüklü katyon ve anyon oluşur",
          "en": "Oppositely charged cation and anion are formed",
          "de": "Es entstehen entgegengesetzt geladene Kationen und Anionen",
          "fr": "Des cations et des anions de charges opposées se forment",
          "ru": "Образуются противоположно заряженные катион и анион.",
          "ar": "يتم تشكيل الكاتيون والأنيون المشحونين بشكل معاكس",
          "zh": "形成带相反电荷的阳离子和阴离子",
          "ku": "Katyon û anyon bi barkirina dijberî hev têne çêkirin"
        },
        {
          "tr": "Elektrostatik çekimle iyonik kristal örgü kurulur",
          "en": "Ionic crystal lattice is established by electrostatic attraction",
          "de": "Das Ionenkristallgitter wird durch elektrostatische Anziehung aufgebaut",
          "fr": "Le réseau cristallin ionique est établi par attraction électrostatique",
          "ru": "Ионная кристаллическая решетка образуется за счет электростатического притяжения.",
          "ar": "يتم إنشاء الشبكة البلورية الأيونية عن طريق الجذب الكهروستاتيكي",
          "zh": "离子晶格是通过静电引力建立的",
          "ku": "Tora krîstal a yonîkî bi kêşana elektrostatîk ve tê damezrandin"
        }
      ]
    },
    {
      "id": "u03-s03",
      "title": {
        "tr": "Hidrojen Bağının Oluşumu",
        "en": "Formation of a Hydrogen Bond",
        "de": "Entstehung einer Wasserstoffbrückenbindung",
        "fr": "Formation d'une liaison hydrogène",
        "ru": "Образование водородной связи",
        "ar": "تكوّن الرابطة الهيدروجينية",
        "zh": "氢键的形成",
        "ku": "Çêbûna Girêdana Hîdrojenê"
      },
      "steps": [
        {
          "tr": "H atomu, elektronegatifliği yüksek F, O veya N atomuna kovalent bağla bağlanır",
          "en": "An H atom is covalently bonded to a highly electronegative F, O or N atom",
          "de": "Ein H-Atom ist kovalent an ein stark elektronegatives F-, O- oder N-Atom gebunden",
          "fr": "Un atome H est lié par covalence à un atome très électronégatif F, O ou N",
          "ru": "Атом H ковалентно связан с сильно электроотрицательным атомом F, O или N",
          "ar": "ترتبط ذرة H برابطة تساهمية بذرة عالية السالبية الكهربائية F أو O أو N",
          "zh": "H原子与电负性大的F、O或N原子以共价键结合",
          "ku": "Atoma H bi girêdana kovalent bi atomeke F, O an N a pir elektronegatîf ve tê girêdan"
        },
        {
          "tr": "Bağ elektronları F, O veya N'ye doğru çekilir; H üzerinde kısmi pozitif yük oluşur",
          "en": "The bonding electrons are pulled towards F, O or N, leaving a partial positive charge on H",
          "de": "Die Bindungselektronen werden zu F, O oder N gezogen; am H entsteht eine positive Teilladung",
          "fr": "Les électrons de liaison sont attirés vers F, O ou N ; une charge partielle positive apparaît sur H",
          "ru": "Связывающие электроны смещаются к F, O или N; на атоме H возникает частичный положительный заряд",
          "ar": "تنجذب إلكترونات الرابطة نحو F أو O أو N فتنشأ شحنة موجبة جزئية على H",
          "zh": "成键电子偏向F、O或N，H上带部分正电荷",
          "ku": "Elektronên girêdanê ber bi F, O an N ve tên kişandin; li ser H barê erênî yê qismî çêdibe"
        },
        {
          "tr": "Kısmi pozitif H, komşu moleküldeki F, O veya N atomunun ortaklanmamış elektron çiftine yönelir",
          "en": "The partially positive H is attracted to a lone pair on an F, O or N atom of a neighbouring molecule",
          "de": "Das partiell positive H wird von einem freien Elektronenpaar eines F-, O- oder N-Atoms im Nachbarmolekül angezogen",
          "fr": "Le H partiellement positif est attiré par un doublet non liant d'un atome F, O ou N d'une molécule voisine",
          "ru": "Частично положительный H притягивается к неподелённой электронной паре атома F, O или N соседней молекулы",
          "ar": "تنجذب ذرة H الموجبة جزئيًا نحو زوج إلكترونات غير رابط على ذرة F أو O أو N في جزيء مجاور",
          "zh": "带部分正电荷的H被相邻分子中F、O或N原子的孤对电子吸引",
          "ku": "H ya qismî erênî ber bi cotê elektronên neparvekirî yê atoma F, O an N a molekula cîran ve tê kişandin"
        },
        {
          "tr": "İki molekül arasında hidrojen bağı kurulur",
          "en": "A hydrogen bond is established between the two molecules",
          "de": "Zwischen den beiden Molekülen bildet sich eine Wasserstoffbrückenbindung",
          "fr": "Une liaison hydrogène s'établit entre les deux molécules",
          "ru": "Между двумя молекулами образуется водородная связь",
          "ar": "تتكوّن رابطة هيدروجينية بين الجزيئين",
          "zh": "两个分子之间形成氢键",
          "ku": "Di navbera her du molekulan de girêdana hîdrojenê çêdibe"
        }
      ]
    },
    {
      "id": "u03-s04",
      "title": {
        "tr": "London Kuvveti Büyüme Basamakları",
        "en": "London Force Growth Steps",
        "de": "Stufen der Zunahme der London-Kräfte",
        "fr": "Étapes du renforcement des forces de London",
        "ru": "Этапы роста лондонских сил",
        "ar": "خطوات نمو قوة لندن",
        "zh": "伦敦力增强的步骤",
        "ku": "Pêngavên Pêşveçûna Hêza Londonê"
      },
      "steps": [
        {
          "tr": "Moleküldeki toplam elektron sayısı artar",
          "en": "The total number of electrons in the molecule increases",
          "de": "Die Gesamtzahl der Elektronen im Molekül nimmt zu",
          "fr": "Le nombre total d'électrons dans la molécule augmente",
          "ru": "Общее число электронов в молекуле увеличивается",
          "ar": "يزداد العدد الإجمالي للإلكترونات في الجزيء",
          "zh": "分子中电子总数增加",
          "ku": "Di molekulê de hejmara giştî ya elektronan zêde dibe"
        },
        {
          "tr": "Elektron bulutunun polarlaşabilirliği artar",
          "en": "The polarizability of the electron cloud increases",
          "de": "Die Polarisierbarkeit der Elektronenwolke nimmt zu",
          "fr": "La polarisabilité du nuage électronique augmente",
          "ru": "Поляризуемость электронного облака увеличивается",
          "ar": "تزداد قابلية استقطاب السحابة الإلكترونية",
          "zh": "电子云的极化率增加",
          "ku": "Polarîzasyona ewrê elektronê zêde dibe"
        },
        {
          "tr": "Anlık geçici dipoller güçlenir",
          "en": "Momentary transient dipoles become stronger",
          "de": "Kurzzeitige transiente Dipole werden stärker",
          "fr": "Les dipôles transitoires momentanés deviennent plus forts",
          "ru": "Мгновенные переходные диполи становятся сильнее",
          "ar": "تصبح ثنائيات القطب العابرة اللحظية أقوى",
          "zh": "瞬态偶极子变得更强",
          "ku": "Dipolên demkî yên demkî bihêztir dibin"
        },
        {
          "tr": "Maddenin kaynama noktası yükselir",
          "en": "The boiling point of the substance rises",
          "de": "Der Siedepunkt des Stoffes steigt",
          "fr": "Le point d'ébullition de la substance augmente",
          "ru": "Температура кипения вещества повышается",
          "ar": "ترتفع درجة غليان المادة",
          "zh": "物质的沸点升高",
          "ku": "Xala kelandinê ya maddeyê bilind dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u03-twin01",
      "stem": {
        "tr": "Aşağıdaki maddelerden hangisinin molekülleri arasında yoğun fazda baskın etkileşim türü hidrojen bağıdır?",
        "en": "The dominant type of interaction between the molecules of which of the following substances in the condensed phase is hydrogen bonding?",
        "de": "Die vorherrschende Art der Wechselwirkung zwischen den Molekülen welcher der folgenden Substanzen in der kondensierten Phase ist die Wasserstoffbrückenbindung?",
        "fr": "Le type d'interaction dominant entre les molécules de laquelle des substances suivantes dans la phase condensée est la liaison hydrogène ?",
        "ru": "Преобладающим типом взаимодействия между молекулами какого из перечисленных веществ в конденсированной фазе является водородная связь?",
        "ar": "نوع التفاعل السائد بين جزيئات أي من المواد التالية في الطور المكثف يكون رابطة هيدروجينية؟",
        "zh": "下列哪种物质在凝聚相中的分子间相互作用的主要类型是氢键？",
        "ku": "Têkiliya serdest a di navbera molekulên kîjan ji maddeyên jêrîn de di qonaxa kondenskirî de girêdana hîdrojenê ye?"
      },
      "options": [
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
          "tr": "CH4",
          "en": "CH4",
          "de": "CH4",
          "fr": "CH4",
          "ru": "CH4",
          "ar": "CH4",
          "zh": "CH4",
          "ku": "CH4"
        },
        {
          "tr": "HCl",
          "en": "HCl",
          "de": "HCl",
          "fr": "HCl",
          "ru": "HCl",
          "ar": "HCl",
          "zh": "HCl",
          "ku": "HCl"
        },
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
          "tr": "H2S",
          "en": "H2S",
          "de": "H2S",
          "fr": "H2S",
          "ru": "H2S",
          "ar": "H2S",
          "zh": "H2S",
          "ku": "H2S"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Hidrojen bağı için H atomunun F, O veya N atomuna bağlı olması gerekir. H2O'da H atomları elektronegatifliği yüksek O atomuna bağlıdır; bu nedenle su molekülleri arasında yoğun fazda baskın etkileşim hidrojen bağıdır. HCl ve H2S polardır ancak H atomları Cl ya da S'ye bağlı olduğundan hidrojen bağı kuramaz; bu moleküller arasında dipol-dipol etkileşimleri ve London kuvvetleri vardır. Apolar CH4 ve CO2 molekülleri arasında ise yalnızca London kuvvetleri bulunur.",
        "en": "A hydrogen bond requires an H atom bonded to F, O or N. In H2O the H atoms are bonded to the highly electronegative O atom, so hydrogen bonding is the dominant interaction between water molecules in the condensed phases. HCl and H2S are polar, but their H atoms are bonded to Cl or S, so they cannot form hydrogen bonds; these molecules attract one another through dipole-dipole interactions and London forces. Between nonpolar CH4 and CO2 molecules there are only London forces.",
        "de": "Für eine Wasserstoffbrückenbindung muss ein H-Atom an F, O oder N gebunden sein. In H2O sind die H-Atome an das stark elektronegative O-Atom gebunden; deshalb sind Wasserstoffbrücken in den kondensierten Phasen die vorherrschende Wechselwirkung zwischen Wassermolekülen. HCl und H2S sind polar, ihre H-Atome sind aber an Cl bzw. S gebunden und können keine Wasserstoffbrücken bilden; zwischen diesen Molekülen wirken Dipol-Dipol-Wechselwirkungen und London-Kräfte. Zwischen den unpolaren Molekülen CH4 und CO2 wirken nur London-Kräfte.",
        "fr": "Une liaison hydrogène exige un atome H lié à F, O ou N. Dans H2O, les atomes H sont liés à l'atome O, très électronégatif ; la liaison hydrogène est donc l'interaction dominante entre les molécules d'eau en phase condensée. HCl et H2S sont polaires, mais leurs atomes H sont liés à Cl ou à S et ne peuvent pas former de liaisons hydrogène ; ces molécules s'attirent par des interactions dipôle-dipôle et des forces de London. Entre les molécules apolaires CH4 et CO2, il n'y a que des forces de London.",
        "ru": "Для водородной связи атом H должен быть связан с F, O или N. В H2O атомы H связаны с сильно электроотрицательным атомом O, поэтому в конденсированных фазах преобладающее взаимодействие между молекулами воды — водородная связь. HCl и H2S полярны, но их атомы H связаны с Cl или S и водородных связей не образуют; между этими молекулами действуют диполь-дипольные взаимодействия и лондоновские силы. Между неполярными молекулами CH4 и CO2 действуют только лондоновские силы.",
        "ar": "يشترط لتكوّن الرابطة الهيدروجينية أن ترتبط ذرة H بذرة F أو O أو N. في H2O ترتبط ذرات H بذرة O العالية السالبية الكهربائية، لذا فالرابطة الهيدروجينية هي التآثر السائد بين جزيئات الماء في الأطوار المكثفة. أما HCl وH2S فقطبيان لكن ذرات H فيهما مرتبطة بـ Cl أو S فلا يكوّنان روابط هيدروجينية، وتتجاذب جزيئاتهما بتآثرات ثنائي القطب-ثنائي القطب وقوى لندن. ولا توجد بين جزيئات CH4 وCO2 غير القطبية سوى قوى لندن.",
        "zh": "形成氢键要求H原子与F、O或N原子相连。H2O中H原子与电负性大的O原子相连，所以在凝聚相中水分子间占主导的作用是氢键。HCl和H2S是极性分子，但H原子连在Cl或S上，不能形成氢键，分子间存在偶极-偶极作用和色散力。非极性的CH4和CO2分子间只有色散力。",
        "ku": "Ji bo girêdana hîdrojenê divê atoma H bi F, O an N ve girêdayî be. Di H2O de atomên H bi atoma O ya pir elektronegatîf ve girêdayî ne; loma di fazên şile û hişk de têkiliya serdest a navbera molekulên avê girêdana hîdrojenê ye. HCl û H2S polar in, lê atomên H yên wan bi Cl an S ve girêdayî ne û nikarin girêdana hîdrojenê çêbikin; di navbera van molekulan de têkiliyên dîpol-dîpol û hêzên London hene. Di navbera molekulên nepolar ên CH4 û CO2 de tenê hêzên London hene."
      }
    },
    {
      "id": "u03-twin02",
      "stem": {
        "tr": "NaCl katısının suda çözünmesi sırasında su molekülleri ile Na+ iyonları arasında oluşan etkileşim türü hangisidir?",
        "en": "What type of interaction occurs between water molecules and Na+ ions during the dissolution of NaCl solid in water?",
        "de": "Welche Art von Wechselwirkung tritt zwischen Wassermolekülen und Na+-Ionen während der Auflösung von NaCl-Feststoff in Wasser auf?",
        "fr": "Quel type d'interaction se produit entre les molécules d'eau et les ions Na+ lors de la dissolution du solide NaCl dans l'eau ?",
        "ru": "Какой тип взаимодействия происходит между молекулами воды и ионами Na+ при растворении твердого вещества NaCl в воде?",
        "ar": "ما نوع التفاعل الذي يحدث بين جزيئات الماء وأيونات Na+ أثناء ذوبان كلوريد الصوديوم الصلب في الماء؟",
        "zh": "当 NaCl 固体溶解在水中时，水分子和 Na+ 离子之间会发生什么类型的相互作用？",
        "ku": "Di dema belavbûna NaCl ya hişk a di avê de, di navbera molekulên avê û îyonên Na+ de çi cure têkilî çêdibe?"
      },
      "options": [
        {
          "tr": "İyon-dipol",
          "en": "ion-dipole",
          "de": "Ionendipol",
          "fr": "ion-dipôle",
          "ru": "ионно-дипольный",
          "ar": "ثنائي القطب الأيوني",
          "zh": "离子-偶极作用",
          "ku": "îyon-dîpol"
        },
        {
          "tr": "London",
          "en": "London",
          "de": "London",
          "fr": "London",
          "ru": "Лондоновские силы",
          "ar": "لندن",
          "zh": "伦敦力",
          "ku": "London"
        },
        {
          "tr": "Kovalent bağ",
          "en": "covalent bond",
          "de": "kovalente Bindung",
          "fr": "liaison covalente",
          "ru": "ковалентная связь",
          "ar": "الرابطة التساهمية",
          "zh": "共价键",
          "ku": "girêdana kovalent"
        },
        {
          "tr": "Apolar bağ",
          "en": "nonpolar bond",
          "de": "unpolare Bindung",
          "fr": "liaison non polaire",
          "ru": "неполярная связь",
          "ar": "الرابطة غير القطبية",
          "zh": "非极性键",
          "ku": "girêdana nepolar"
        },
        {
          "tr": "Hidrojen bağı",
          "en": "hydrogen bond",
          "de": "Wasserstoffbindung",
          "fr": "liaison hydrogène",
          "ru": "водородная связь",
          "ar": "رابطة الهيدروجين",
          "zh": "氢键",
          "ku": "girêdana hîdrojenê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Na+ bir iyon, su ise polar bir moleküldür. Na+ iyonu, su molekülünün kısmi negatif yüklü oksijen ucunu çeker; bir iyon ile polar bir molekül arasındaki bu çekim iyon-dipol etkileşimidir. Bu etkileşim hidrojen bağı değildir; çünkü çekim, H atomu ile F, O veya N arasında değil, iyonun yükü ile suyun oksijen ucu arasındadır. Elektron ortaklaşması olmadığından kovalent bağ da değildir.",
        "en": "Na+ is an ion and water is a polar molecule. The Na+ ion attracts the partially negative oxygen end of the water molecule; this attraction between an ion and a polar molecule is an ion-dipole interaction. It is not a hydrogen bond, because the attraction is not between an H atom and F, O or N but between the charge of the ion and the oxygen end of water. No electrons are shared, so it is not a covalent bond either.",
        "de": "Na+ ist ein Ion, Wasser ein polares Molekül. Das Na+-Ion zieht das partiell negative Sauerstoffende des Wassermoleküls an; diese Anziehung zwischen einem Ion und einem polaren Molekül ist eine Ion-Dipol-Wechselwirkung. Es ist keine Wasserstoffbrückenbindung, denn die Anziehung besteht nicht zwischen einem H-Atom und F, O oder N, sondern zwischen der Ladung des Ions und dem Sauerstoffende des Wassers. Da keine Elektronen geteilt werden, ist es auch keine kovalente Bindung.",
        "fr": "Na+ est un ion et l'eau une molécule polaire. L'ion Na+ attire l'extrémité oxygène, partiellement négative, de la molécule d'eau ; cette attraction entre un ion et une molécule polaire est une interaction ion-dipôle. Ce n'est pas une liaison hydrogène, car l'attraction ne s'exerce pas entre un atome H et F, O ou N, mais entre la charge de l'ion et l'extrémité oxygène de l'eau. Aucun électron n'étant mis en commun, ce n'est pas non plus une liaison covalente.",
        "ru": "Na+ — ион, а вода — полярная молекула. Ион Na+ притягивает частично отрицательный кислородный конец молекулы воды; такое притяжение между ионом и полярной молекулой — ион-дипольное взаимодействие. Это не водородная связь: притяжение возникает не между атомом H и F, O или N, а между зарядом иона и кислородным концом молекулы воды. Электроны не обобществляются, поэтому это и не ковалентная связь.",
        "ar": "Na+ أيون والماء جزيء قطبي. يجذب أيون Na+ طرف الأكسجين ذا الشحنة السالبة الجزئية في جزيء الماء؛ وهذا التجاذب بين أيون وجزيء قطبي هو تآثر أيون-ثنائي القطب. وهو ليس رابطة هيدروجينية لأن التجاذب ليس بين ذرة H وذرة F أو O أو N بل بين شحنة الأيون وطرف الأكسجين في الماء. ولا تُتشارك فيه الإلكترونات، فليس رابطة تساهمية كذلك.",
        "zh": "Na+是离子，水是极性分子。Na+吸引水分子中带部分负电荷的氧端；离子与极性分子之间的这种吸引就是离子-偶极作用。它不是氢键，因为这种吸引不是发生在H原子与F、O或N之间，而是发生在离子的电荷与水的氧端之间。这里没有共用电子，所以也不是共价键。",
        "ku": "Na+ îyon e û av molekuleke polar e. Îyona Na+ aliyê oksîjenê yê molekula avê, ku qismî neyînî ye, dikişîne; ev kişandina navbera îyonekê û molekuleke polar têkiliya îyon-dîpol e. Ev ne girêdana hîdrojenê ye, ji ber ku kişandin ne di navbera atoma H û F, O an N de ye, lê di navbera barê îyonê û aliyê oksîjenê yê avê de ye. Elektron nayên parvekirin, loma ne girêdana kovalent e jî."
      }
    },
    {
      "id": "u03-twin03",
      "stem": {
        "tr": "13Al ve 8O elementleri arasında oluşan iyonik bileşiğin formülü ve adı aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "In which option are the formula and name of the ionic compound formed between the elements 13Al and 8O given correctly?",
        "de": "In welcher Antwort sind Formel und Name der Ionenverbindung aus den Elementen 13Al und 8O richtig angegeben?",
        "fr": "Dans quelle proposition la formule et le nom du composé ionique formé entre les éléments 13Al et 8O sont-ils corrects ?",
        "ru": "В каком варианте правильно указаны формула и название ионного соединения, образованного элементами 13Al и 8O?",
        "ar": "في أيّ الخيارات الآتية وردت صيغة المركب الأيوني المتكوّن من العنصرين 13Al و8O واسمه بشكل صحيح؟",
        "zh": "由 13Al 和 8O 两种元素形成的离子化合物，其化学式和名称正确的是哪一项？",
        "ku": "Formula û navê pêkhateya îyonîk a ku di navbera elementên 13Al û 8O de çêdibe di kîjan bijardeyê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "AlO – alüminyum oksit",
          "en": "AlO – aluminium oxide",
          "de": "AlO – Aluminiumoxid",
          "fr": "AlO – oxyde d'aluminium",
          "ru": "AlO – оксид алюминия",
          "ar": "AlO – أكسيد الألومنيوم",
          "zh": "AlO – 氧化铝",
          "ku": "AlO – oksîda alumînyûmê"
        },
        {
          "tr": "Al3O2 – alüminyum oksit",
          "en": "Al3O2 – aluminium oxide",
          "de": "Al3O2 – Aluminiumoxid",
          "fr": "Al3O2 – oxyde d'aluminium",
          "ru": "Al3O2 – оксид алюминия",
          "ar": "Al3O2 – أكسيد الألومنيوم",
          "zh": "Al3O2 – 氧化铝",
          "ku": "Al3O2 – oksîda alumînyûmê"
        },
        {
          "tr": "Al2O3 – alüminyum trioksit",
          "en": "Al2O3 – aluminium trioxide",
          "de": "Al2O3 – Aluminiumtrioxid",
          "fr": "Al2O3 – trioxyde d'aluminium",
          "ru": "Al2O3 – триоксид алюминия",
          "ar": "Al2O3 – ثلاثي أكسيد الألومنيوم",
          "zh": "Al2O3 – 三氧化铝",
          "ku": "Al2O3 – trîoksîda alumînyûmê"
        },
        {
          "tr": "AlO3 – alüminyum trioksit",
          "en": "AlO3 – aluminium trioxide",
          "de": "AlO3 – Aluminiumtrioxid",
          "fr": "AlO3 – trioxyde d'aluminium",
          "ru": "AlO3 – триоксид алюминия",
          "ar": "AlO3 – ثلاثي أكسيد الألومنيوم",
          "zh": "AlO3 – 三氧化铝",
          "ku": "AlO3 – trîoksîda alumînyûmê"
        },
        {
          "tr": "Al2O3 – alüminyum oksit",
          "en": "Al2O3 – aluminium oxide",
          "de": "Al2O3 – Aluminiumoxid",
          "fr": "Al2O3 – oxyde d'aluminium",
          "ru": "Al2O3 – оксид алюминия",
          "ar": "Al2O3 – أكسيد الألومنيوم",
          "zh": "Al2O3 – 氧化铝",
          "ku": "Al2O3 – oksîda alumînyûmê"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "13Al (2-8-3) 3 elektron vererek Al3+, 8O (2-6) 2 elektron alarak O2- iyonu oluşturur. Toplam yükün sıfır olması için 2 Al3+ (+6) ile 3 O2- (−6) birleşir: Al2O3. İyonik bileşikler katyon adı + anyon adı ile, sayı ön eki kullanılmadan adlandırılır: alüminyum oksit. \"Alüminyum trioksit\" adı iyonik bileşikte gereksiz sayı ön eki kullanır ve AlO3 formülüne karşılık gelir; AlO, Al3O2 ve AlO3 yük denkliğini sağlamaz.",
        "en": "13Al (2-8-3) loses 3 electrons to form Al3+, and 8O (2-6) gains 2 to form O2-. For zero total charge, 2 Al3+ (+6) combine with 3 O2- (−6): Al2O3. Ionic compounds are named cation + anion without number prefixes: aluminium oxide. \"Aluminium trioxide\" uses an unnecessary prefix for an ionic compound and would correspond to AlO3; AlO, Al3O2 and AlO3 are not charge-balanced.",
        "de": "13Al (2-8-3) gibt 3 Elektronen ab (Al3+), 8O (2-6) nimmt 2 auf (O2-). Für Ladungsneutralität verbinden sich 2 Al3+ (+6) mit 3 O2- (−6): Al2O3. Ionische Verbindungen werden Kation + Anion ohne Zahlpräfixe benannt: Aluminiumoxid. „Aluminiumtrioxid“ verwendet ein unnötiges Präfix und entspräche AlO3; AlO, Al3O2 und AlO3 sind nicht ladungsausgeglichen.",
        "fr": "13Al (2-8-3) cède 3 électrons (Al3+) et 8O (2-6) en gagne 2 (O2-). Pour une charge totale nulle, 2 Al3+ (+6) s'associent à 3 O2- (−6) : Al2O3. Un composé ionique se nomme anion + cation sans préfixe numérique : oxyde d'aluminium. « Trioxyde d'aluminium » emploie un préfixe inutile et correspondrait à AlO3 ; AlO, Al3O2 et AlO3 ne respectent pas l'électroneutralité.",
        "ru": "13Al (2-8-3) отдаёт 3 электрона (Al3+), 8O (2-6) принимает 2 (O2-). Чтобы суммарный заряд был нулевым, 2 Al3+ (+6) соединяются с 3 O2- (−6): Al2O3. Ионные соединения называют без числовых приставок: оксид алюминия. Название «триоксид алюминия» содержит лишнюю приставку и соответствовало бы AlO3; AlO, Al3O2 и AlO3 не электронейтральны.",
        "ar": "يفقد 13Al (2-8-3) ثلاثة إلكترونات مكوّناً Al3+، ويكتسب 8O (2-6) إلكترونين مكوّناً O2-. ولتكون الشحنة الكلية صفراً يتحد 2 Al3+ (+6) مع 3 O2- (−6): Al2O3. وتُسمّى المركبات الأيونية باسم الأيونين دون بادئات عددية: أكسيد الألومنيوم. أما «ثلاثي أكسيد الألومنيوم» فيستخدم بادئة غير لازمة ويقابل الصيغة AlO3، والصيغ AlO وAl3O2 وAlO3 غير متعادلة الشحنة.",
        "zh": "13Al（2-8-3）失去 3 个电子形成 Al3+，8O（2-6）得到 2 个电子形成 O2-。要使总电荷为零，2 个 Al3+（+6）与 3 个 O2-（−6）结合：Al2O3。离子化合物按“阴离子 + 阳离子”命名，不用数字前缀：氧化铝。“三氧化铝”对应的是 AlO3，与该化合物不符；AlO、Al3O2 和 AlO3 的电荷都不平衡。",
        "ku": "13Al (2-8-3) bi dayîna 3 elektronan Al3+, 8O (2-6) bi wergirtina 2 elektronan O2- çêdike. Ji bo ku bara giştî sifir be 2 Al3+ (+6) bi 3 O2- (−6) re dibin yek: Al2O3. Pêkhateyên îyonîk bê pêşgirên hejmarî tên binavkirin: oksîda alumînyûmê. \"Trîoksîda alumînyûmê\" pêşgireke nepêwîst bi kar tîne û li AlO3 tê; AlO, Al3O2 û AlO3 hevsengiya baran pêk naynin."
      }
    },
    {
      "id": "u03-twin04",
      "stem": {
        "tr": "N2O5 formülüyle gösterilen kovalent bileşiğin sistematik adı aşağıdakilerden hangisidir?",
        "en": "What is the systematic name of the covalent compound with the formula N2O5?",
        "de": "Wie lautet der systematische Name der kovalenten Verbindung mit der Formel N2O5?",
        "fr": "Quel est le nom systématique du composé covalent de formule N2O5 ?",
        "ru": "Каково систематическое название ковалентного соединения с формулой N2O5?",
        "ar": "ما الاسم النظامي للمركب التساهمي ذي الصيغة N2O5؟",
        "zh": "化学式为 N2O5 的共价化合物的系统名称是哪一项？",
        "ku": "Navê sîstematîk ê pêkhateya kovalent a bi formula N2O5 kîjan e?"
      },
      "options": [
        {
          "tr": "Azot oksit",
          "en": "Nitrogen oxide",
          "de": "Stickstoffoxid",
          "fr": "Oxyde d'azote",
          "ru": "Оксид азота",
          "ar": "أكسيد النيتروجين",
          "zh": "氧化氮",
          "ku": "Oksîda azotê"
        },
        {
          "tr": "Pentaazot dioksit",
          "en": "Pentanitrogen dioxide",
          "de": "Pentastickstoffdioxid",
          "fr": "Dioxyde de pentaazote",
          "ru": "Диоксид пентаазота",
          "ar": "ثنائي أكسيد خماسي النيتروجين",
          "zh": "二氧化五氮",
          "ku": "Dîoksîda pentaazotê"
        },
        {
          "tr": "Diazot tetraoksit",
          "en": "Dinitrogen tetroxide",
          "de": "Distickstofftetroxid",
          "fr": "Tétraoxyde de diazote",
          "ru": "Тетраоксид диазота",
          "ar": "رباعي أكسيد ثنائي النيتروجين",
          "zh": "四氧化二氮",
          "ku": "Tetraoksîda diazotê"
        },
        {
          "tr": "Diazot pentaoksit",
          "en": "Dinitrogen pentoxide",
          "de": "Distickstoffpentoxid",
          "fr": "Pentaoxyde de diazote",
          "ru": "Пентаоксид диазота",
          "ar": "خماسي أكسيد ثنائي النيتروجين",
          "zh": "五氧化二氮",
          "ku": "Pentaoksîda diazotê"
        },
        {
          "tr": "Diazot trioksit",
          "en": "Dinitrogen trioxide",
          "de": "Distickstofftrioxid",
          "fr": "Trioxyde de diazote",
          "ru": "Триоксид диазота",
          "ar": "ثلاثي أكسيد ثنائي النيتروجين",
          "zh": "三氧化二氮",
          "ku": "Trîoksîda diazotê"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "İki ametalden oluşan kovalent bileşiklerde her atomun sayısı Yunanca ön eklerle belirtilir: 2 = di, 5 = penta. Önce formülde ilk yazılan element (azot), sonra ikinci element oksit olarak okunur: N2O5 = diazot pentaoksit. Ön eksiz \"azot oksit\" adı birden çok bileşiği karşılar; tetraoksit N2O4'e, trioksit N2O3'e aittir; \"pentaazot dioksit\" sayıları ters okur.",
        "en": "In covalent compounds of two non-metals, the number of each atom is shown with Greek prefixes: 2 = di, 5 = penta. The first element in the formula (nitrogen) is named first, then the second as oxide: N2O5 = dinitrogen pentoxide. \"Nitrogen oxide\" without prefixes fits several compounds; tetroxide is N2O4, trioxide is N2O3; \"pentanitrogen dioxide\" reverses the numbers.",
        "de": "Bei kovalenten Verbindungen zweier Nichtmetalle gibt man die Atomzahlen mit griechischen Präfixen an: 2 = di, 5 = penta. Zuerst das erste Element (Stickstoff), dann das zweite als Oxid: N2O5 = Distickstoffpentoxid. „Stickstoffoxid“ ohne Präfixe passt auf mehrere Verbindungen; Tetroxid ist N2O4, Trioxid N2O3; „Pentastickstoffdioxid“ vertauscht die Zahlen.",
        "fr": "Dans les composés covalents de deux non-métaux, le nombre de chaque atome est indiqué par des préfixes grecs : 2 = di, 5 = penta. N2O5 se nomme pentaoxyde de diazote. « Oxyde d'azote » sans préfixe désigne plusieurs composés ; le tétraoxyde est N2O4, le trioxyde N2O3 ; « dioxyde de pentaazote » inverse les nombres.",
        "ru": "В ковалентных соединениях двух неметаллов число атомов указывают греческими приставками: 2 = ди, 5 = пента. N2O5 — пентаоксид диазота. Название «оксид азота» без приставок подходит нескольким соединениям; тетраоксид — это N2O4, триоксид — N2O3; «диоксид пентаазота» переставляет числа.",
        "ar": "في المركبات التساهمية المكوّنة من لافلزين يُشار إلى عدد كل ذرة ببادئات يونانية: 2 = ثنائي، 5 = خماسي. فـ N2O5 هو خماسي أكسيد ثنائي النيتروجين. والاسم «أكسيد النيتروجين» دون بادئات يصدق على عدة مركبات، ورباعي الأكسيد هو N2O4 وثلاثي الأكسيد هو N2O3، و«ثنائي أكسيد خماسي النيتروجين» يعكس الأعداد.",
        "zh": "由两种非金属组成的共价化合物用数字前缀表示各原子的个数：2 = 二，5 = 五。N2O5 读作五氧化二氮。不带前缀的“氧化氮”可指多种化合物；四氧化二氮是 N2O4，三氧化二氮是 N2O3；“二氧化五氮”把数字颠倒了。",
        "ku": "Di pêkhateyên kovalent ên ji du nemetalan de hejmara her atomê bi pêşgirên yewnanî tê nîşandan: 2 = di, 5 = penta. Elementa yekem (azot) pêşî, ya duyem wekî oksîd tê xwendin: N2O5 = pentaoksîda diazotê. \"Oksîda azotê\" ya bê pêşgir li gelek pêkhateyan tê; tetraoksîd N2O4, trîoksîd N2O3 e; \"dîoksîda pentaazotê\" hejmaran berovajî dixwîne."
      }
    },
    {
      "id": "u03-twin05",
      "stem": {
        "tr": "Aşağıda bazı maddeler ve bu maddelerde atomlar arasında bulunan bağ türleri eşleştirilmiştir. Bu eşleştirmelerden hangileri doğrudur?\nI. NaCl – iyonik bağ\nII. Cl2 – polar kovalent bağ\nIII. MgO – kovalent bağ",
        "en": "Some substances are matched below with the type of bond between their atoms. Which of these matches are correct?\nI. NaCl – ionic bond\nII. Cl2 – polar covalent bond\nIII. MgO – covalent bond",
        "de": "Unten sind einige Stoffe mit der Bindungsart zwischen ihren Atomen zugeordnet. Welche Zuordnungen sind richtig?\nI. NaCl – Ionenbindung\nII. Cl2 – polare kovalente Bindung\nIII. MgO – kovalente Bindung",
        "fr": "Quelques substances sont associées ci-dessous au type de liaison entre leurs atomes. Lesquelles de ces associations sont correctes ?\nI. NaCl – liaison ionique\nII. Cl2 – liaison covalente polaire\nIII. MgO – liaison covalente",
        "ru": "Ниже некоторым веществам сопоставлен тип связи между их атомами. Какие сопоставления верны?\nI. NaCl – ионная связь\nII. Cl2 – ковалентная полярная связь\nIII. MgO – ковалентная связь",
        "ar": "فيما يلي مزاوجة بين بعض المواد ونوع الرابطة بين ذراتها. أيّ هذه المزاوجات صحيحة؟\nI. NaCl – رابطة أيونية\nII. Cl2 – رابطة تساهمية قطبية\nIII. MgO – رابطة تساهمية",
        "zh": "下面把一些物质与其原子间的化学键类型进行了对应。哪些对应是正确的？\nI. NaCl – 离子键\nII. Cl2 – 极性共价键\nIII. MgO – 共价键",
        "ku": "Li jêr hin made bi cureyê girêdana navbera atomên wan re hatine hevberdan. Kîjan ji van hevberdanan rast in?\nI. NaCl – girêdana îyonîk\nII. Cl2 – girêdana kovalenta polar\nIII. MgO – girêdana kovalent"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "فقط I",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
          "ru": "Только III",
          "ar": "فقط III",
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
      "correctIndex": 0,
      "explanation": {
        "tr": "I doğrudur: Na metali elektron verir, Cl ametali alır; oluşan Na+ ve Cl- iyonları arasında iyonik bağ vardır. II yanlıştır: Cl2'de aynı cins iki atom bağ elektronlarını eşit çeker, bağ apolar kovalenttir. III yanlıştır: Mg bir metal, O bir ametaldir; Mg2+ ve O2- iyonları arasında iyonik bağ oluşur. Doğru yanıt: Yalnız I.",
        "en": "I is true: the metal Na gives an electron and the non-metal Cl takes it; Na+ and Cl- are held by an ionic bond. II is false: in Cl2 two identical atoms share the bonding electrons equally, so the bond is non-polar covalent. III is false: Mg is a metal and O a non-metal; an ionic bond forms between Mg2+ and O2-. Answer: only I.",
        "de": "I ist richtig: Das Metall Na gibt ein Elektron ab, das Nichtmetall Cl nimmt es auf; zwischen Na+ und Cl- besteht eine Ionenbindung. II ist falsch: In Cl2 ziehen zwei gleiche Atome die Bindungselektronen gleich stark an, die Bindung ist unpolar kovalent. III ist falsch: Mg ist ein Metall, O ein Nichtmetall; zwischen Mg2+ und O2- besteht eine Ionenbindung. Antwort: nur I.",
        "fr": "I est vraie : le métal Na cède un électron que le non-métal Cl capte ; Na+ et Cl- sont unis par une liaison ionique. II est fausse : dans Cl2, deux atomes identiques attirent également les électrons de liaison, la liaison est covalente apolaire. III est fausse : Mg est un métal et O un non-métal ; une liaison ionique s'établit entre Mg2+ et O2-. Réponse : seulement I.",
        "ru": "I верно: металл Na отдаёт электрон, неметалл Cl его принимает; между Na+ и Cl- — ионная связь. II неверно: в Cl2 два одинаковых атома притягивают электроны связи одинаково, связь ковалентная неполярная. III неверно: Mg — металл, O — неметалл; между Mg2+ и O2- образуется ионная связь. Ответ: только I.",
        "ar": "العبارة I صحيحة: يفقد فلز Na إلكتروناً ويكتسبه لافلز Cl، وبين Na+ وCl- رابطة أيونية. العبارة II خاطئة: في Cl2 تجذب ذرتان متماثلتان إلكترونات الرابطة بالتساوي فالرابطة تساهمية غير قطبية. العبارة III خاطئة: Mg فلز وO لافلز، فتتكوّن بين Mg2+ وO2- رابطة أيونية. الإجابة: I فقط.",
        "zh": "I 正确：金属 Na 失去电子，非金属 Cl 得到电子，Na+ 与 Cl- 之间是离子键。II 错误：Cl2 中两个相同原子对成键电子吸引相同，是非极性共价键。III 错误：Mg 是金属，O 是非金属，Mg2+ 与 O2- 之间形成离子键。答案：仅 I。",
        "ku": "I rast e: metala Na elektronekê dide, nemetala Cl wê digire; di navbera Na+ û Cl- de girêdana îyonîk heye. II şaş e: di Cl2 de du atomên wekhev elektronên girêdanê wekhev dikişînin, girêdan kovalenta apolar e. III şaş e: Mg metal, O nemetal e; di navbera Mg2+ û O2- de girêdana îyonîk çêdibe. Bersiv: Tenê I."
      }
    },
    {
      "id": "u03-twin06",
      "stem": {
        "tr": "He, CH4, H2O ve NaCl maddelerinin 1 atm basınçtaki kaynama noktalarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following orders the boiling points of He, CH4, H2O and NaCl at 1 atm from highest to lowest?",
        "de": "Welche Reihenfolge gibt die Siedepunkte von He, CH4, H2O und NaCl bei 1 atm von hoch nach niedrig richtig an?",
        "fr": "Quel est le classement, du plus élevé au plus bas, des points d'ébullition de He, CH4, H2O et NaCl sous 1 atm ?",
        "ru": "Какой ряд правильно располагает температуры кипения He, CH4, H2O и NaCl при давлении 1 атм от наибольшей к наименьшей?",
        "ar": "أيّ الترتيبات الآتية يمثل درجات غليان He وCH4 وH2O وNaCl عند ضغط 1 atm من الأعلى إلى الأدنى؟",
        "zh": "He、CH4、H2O、NaCl 四种物质在 1 atm 下的沸点由高到低的顺序是下列哪一项？",
        "ku": "Rêzkirina xalên kelandinê yên He, CH4, H2O û NaCl di zexta 1 atm de ji bilind ber bi nizm kîjan e?"
      },
      "options": [
        {
          "tr": "He > CH4 > H2O > NaCl",
          "en": "He > CH4 > H2O > NaCl",
          "de": "He > CH4 > H2O > NaCl",
          "fr": "He > CH4 > H2O > NaCl",
          "ru": "He > CH4 > H2O > NaCl",
          "ar": "He > CH4 > H2O > NaCl",
          "zh": "He > CH4 > H2O > NaCl",
          "ku": "He > CH4 > H2O > NaCl"
        },
        {
          "tr": "NaCl > H2O > CH4 > He",
          "en": "NaCl > H2O > CH4 > He",
          "de": "NaCl > H2O > CH4 > He",
          "fr": "NaCl > H2O > CH4 > He",
          "ru": "NaCl > H2O > CH4 > He",
          "ar": "NaCl > H2O > CH4 > He",
          "zh": "NaCl > H2O > CH4 > He",
          "ku": "NaCl > H2O > CH4 > He"
        },
        {
          "tr": "H2O > NaCl > CH4 > He",
          "en": "H2O > NaCl > CH4 > He",
          "de": "H2O > NaCl > CH4 > He",
          "fr": "H2O > NaCl > CH4 > He",
          "ru": "H2O > NaCl > CH4 > He",
          "ar": "H2O > NaCl > CH4 > He",
          "zh": "H2O > NaCl > CH4 > He",
          "ku": "H2O > NaCl > CH4 > He"
        },
        {
          "tr": "NaCl > CH4 > H2O > He",
          "en": "NaCl > CH4 > H2O > He",
          "de": "NaCl > CH4 > H2O > He",
          "fr": "NaCl > CH4 > H2O > He",
          "ru": "NaCl > CH4 > H2O > He",
          "ar": "NaCl > CH4 > H2O > He",
          "zh": "NaCl > CH4 > H2O > He",
          "ku": "NaCl > CH4 > H2O > He"
        },
        {
          "tr": "H2O > CH4 > NaCl > He",
          "en": "H2O > CH4 > NaCl > He",
          "de": "H2O > CH4 > NaCl > He",
          "fr": "H2O > CH4 > NaCl > He",
          "ru": "H2O > CH4 > NaCl > He",
          "ar": "H2O > CH4 > NaCl > He",
          "zh": "H2O > CH4 > NaCl > He",
          "ku": "H2O > CH4 > NaCl > He"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "NaCl'de tanecikleri bir arada tutan, iyonlar arasındaki güçlü iyonik bağlardır; kaynaması için bu güçlü etkileşimlerin yenilmesi gerektiğinden kaynama noktası en yüksektir. H2O molekülleri arasında hidrojen bağları, CH4 molekülleri arasında yalnızca London kuvvetleri vardır; mol kütleleri yakın olsa da (18 ve 16 g/mol) hidrojen bağı daha güçlü olduğundan H2O > CH4. He tek atomludur ve yalnızca 2 elektronu vardır; London kuvvetleri en zayıftır. Sıralama: NaCl > H2O > CH4 > He.",
        "en": "In NaCl the particles are held together by strong ionic bonds between ions; boiling requires overcoming these strong interactions, so its boiling point is the highest. H2O molecules attract one another through hydrogen bonds and CH4 molecules only through London forces; although their molar masses are close (18 and 16 g/mol), hydrogen bonds are stronger, so H2O > CH4. He is monatomic with only 2 electrons, so its London forces are the weakest. Order: NaCl > H2O > CH4 > He.",
        "de": "In NaCl werden die Teilchen durch starke Ionenbindungen zusammengehalten; zum Sieden müssen diese überwunden werden, daher hat es den höchsten Siedepunkt. Zwischen H2O-Molekülen wirken Wasserstoffbrücken, zwischen CH4-Molekülen nur London-Kräfte; obwohl die molaren Massen ähnlich sind (18 und 16 g/mol), sind Wasserstoffbrücken stärker, also H2O > CH4. He ist einatomig und hat nur 2 Elektronen, seine London-Kräfte sind am schwächsten. Reihenfolge: NaCl > H2O > CH4 > He.",
        "fr": "Dans NaCl, les particules sont maintenues par de fortes liaisons ioniques ; pour le faire bouillir il faut vaincre ces interactions fortes, d'où le point d'ébullition le plus élevé. Les molécules de H2O s'attirent par des liaisons hydrogène, celles de CH4 seulement par des forces de London ; bien que leurs masses molaires soient proches (18 et 16 g/mol), les liaisons hydrogène sont plus fortes, donc H2O > CH4. He, monoatomique avec seulement 2 électrons, a les forces de London les plus faibles. Ordre : NaCl > H2O > CH4 > He.",
        "ru": "В NaCl частицы удерживаются прочными ионными связями; для кипения их нужно преодолеть, поэтому его температура кипения самая высокая. Между молекулами H2O действуют водородные связи, а между молекулами CH4 — только лондоновские силы; хотя молярные массы близки (18 и 16 г/моль), водородная связь сильнее, значит H2O > CH4. He одноатомен и имеет всего 2 электрона, его лондоновские силы самые слабые. Порядок: NaCl > H2O > CH4 > He.",
        "ar": "تتماسك دقائق NaCl بروابط أيونية قوية بين الأيونات، ويتطلب غليانه التغلب عليها، لذا فدرجة غليانه هي الأعلى. وتتجاذب جزيئات H2O بروابط هيدروجينية وجزيئات CH4 بقوى لندن فقط؛ ومع أن كتلتيهما الموليتين متقاربتان (18 و16 g/mol) فالرابطة الهيدروجينية أقوى، إذن H2O > CH4. وHe أحادي الذرة وله إلكترونان فقط فقوى لندن فيه هي الأضعف. الترتيب: NaCl > H2O > CH4 > He.",
        "zh": "NaCl 中微粒靠离子之间强的离子键结合，沸腾必须克服这种强相互作用，所以沸点最高。H2O 分子间有氢键，CH4 分子间只有色散力；虽然两者摩尔质量相近（18 和 16 g/mol），但氢键更强，所以 H2O > CH4。He 是单原子、只有 2 个电子，色散力最弱。顺序为 NaCl > H2O > CH4 > He。",
        "ku": "Di NaCl de perçik bi girêdanên îyonî yên xurt ên navbera îyonan li hev tên girtin; ji bo kelandinê divê ev têkiliyên xurt werin têkbirin, loma xala kelandinê herî bilind e. Molekulên H2O bi girêdanên hîdrojenê, yên CH4 tenê bi hêzên London hev dikişînin; her çend girseyên wan ên molar nêzî hev bin jî (18 û 16 g/mol), girêdana hîdrojenê xurttir e, loma H2O > CH4. He yek-atomî ye û tenê 2 elektronên wê hene, hêzên London ên wê herî qels in. Rêz: NaCl > H2O > CH4 > He."
      }
    },
    {
      "id": "u03-twin07",
      "stem": {
        "tr": "Aşağıda bazı tanecik çiftleri ve karşılarında bir etkileşim türü verilmiştir. Verilen etkileşim türü hangi tanecik çifti arasında oluşmaz?",
        "en": "Some pairs of particles are listed below, each with a type of interaction. For which pair does the stated interaction not occur between the particles?",
        "de": "Unten sind Teilchenpaare jeweils mit einer Art der Wechselwirkung angegeben. Bei welchem Teilchenpaar tritt die angegebene Wechselwirkung nicht auf?",
        "fr": "Des paires de particules sont données ci-dessous, chacune avec un type d'interaction. Pour quelle paire l'interaction indiquée ne s'établit-elle pas entre les particules ?",
        "ru": "Ниже приведены пары частиц и для каждой — тип взаимодействия. Между частицами какой пары указанное взаимодействие не возникает?",
        "ar": "فيما يأتي أزواج من الدقائق ومع كل زوج نوع من التآثر. في أيّ زوج لا ينشأ التآثر المذكور بين الدقيقتين؟",
        "zh": "下面给出了几组微粒及一种相互作用类型。哪一组微粒之间不存在所给的相互作用？",
        "ku": "Li jêr hin cotên perçikan û li hember her yekê cureyekî têkiliyê hatine dayîn. Di navbera kîjan cotê de têkiliya hatî dayîn çênabe?"
      },
      "options": [
        {
          "tr": "He – He: London kuvvetleri",
          "en": "He – He: London forces",
          "de": "He – He: London-Kräfte",
          "fr": "He – He : forces de London",
          "ru": "He – He: лондоновские силы",
          "ar": "He – He: قوى لندن",
          "zh": "He – He：色散力",
          "ku": "He – He: hêzên London"
        },
        {
          "tr": "HCl – HCl: dipol-dipol etkileşimi",
          "en": "HCl – HCl: dipole–dipole interaction",
          "de": "HCl – HCl: Dipol-Dipol-Wechselwirkung",
          "fr": "HCl – HCl : interaction dipôle-dipôle",
          "ru": "HCl – HCl: диполь-дипольное взаимодействие",
          "ar": "HCl – HCl: تآثر ثنائي القطب–ثنائي القطب",
          "zh": "HCl – HCl：偶极-偶极作用",
          "ku": "HCl – HCl: têkiliya dupol-dupol"
        },
        {
          "tr": "CH4 – CH4: hidrojen bağı",
          "en": "CH4 – CH4: hydrogen bond",
          "de": "CH4 – CH4: Wasserstoffbrücke",
          "fr": "CH4 – CH4 : liaison hydrogène",
          "ru": "CH4 – CH4: водородная связь",
          "ar": "CH4 – CH4: رابطة هيدروجينية",
          "zh": "CH4 – CH4：氢键",
          "ku": "CH4 – CH4: girêdana hîdrojenê"
        },
        {
          "tr": "NH3 – H2O: hidrojen bağı",
          "en": "NH3 – H2O: hydrogen bond",
          "de": "NH3 – H2O: Wasserstoffbrücke",
          "fr": "NH3 – H2O : liaison hydrogène",
          "ru": "NH3 – H2O: водородная связь",
          "ar": "NH3 – H2O: رابطة هيدروجينية",
          "zh": "NH3 – H2O：氢键",
          "ku": "NH3 – H2O: girêdana hîdrojenê"
        },
        {
          "tr": "O2 – H2O: dipol-indüklenmiş dipol etkileşimi",
          "en": "O2 – H2O: dipole–induced dipole interaction",
          "de": "O2 – H2O: Dipol-induzierter-Dipol-Wechselwirkung",
          "fr": "O2 – H2O : interaction dipôle-dipôle induit",
          "ru": "O2 – H2O: взаимодействие диполь – наведённый диполь",
          "ar": "O2 – H2O: تآثر ثنائي القطب–ثنائي القطب المستحث",
          "zh": "O2 – H2O：偶极-诱导偶极作用",
          "ku": "O2 – H2O: têkiliya dupol – dupola înduksiyonî"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Hidrojen bağı için H atomunun F, O veya N'ye bağlı olması gerekir. CH4'te H atomları elektronegatifliği düşük karbona bağlıdır ve molekül apolardır; CH4 molekülleri arasında yalnızca London kuvvetleri vardır. He atomları arasında London, polar HCl molekülleri arasında dipol-dipol, N–H ve O–H bağları içeren NH3 ile H2O arasında hidrojen bağı, polar H2O ile apolar O2 arasında dipol-indüklenmiş dipol etkileşimi doğru verilmiştir.",
        "en": "A hydrogen bond needs H bonded to F, O or N. In CH4 the H atoms are bonded to carbon, which has low electronegativity, and the molecule is non-polar; only London forces act between CH4 molecules. London forces between He atoms, dipole–dipole between polar HCl molecules, hydrogen bonding between NH3 and H2O (N–H and O–H bonds) and dipole–induced dipole between polar H2O and non-polar O2 are all correct.",
        "de": "Eine Wasserstoffbrücke erfordert an F, O oder N gebundenes H. In CH4 sind die H-Atome an den wenig elektronegativen Kohlenstoff gebunden, das Molekül ist unpolar; zwischen CH4-Molekülen wirken nur London-Kräfte. London-Kräfte zwischen He-Atomen, Dipol-Dipol zwischen polaren HCl-Molekülen, Wasserstoffbrücken zwischen NH3 und H2O und Dipol-induzierter Dipol zwischen polarem H2O und unpolarem O2 sind richtig.",
        "fr": "Une liaison hydrogène exige un H lié à F, O ou N. Dans CH4, les H sont liés au carbone, peu électronégatif, et la molécule est apolaire : seules des forces de London s'exercent entre molécules de CH4. Les forces de London entre atomes de He, dipôle-dipôle entre molécules polaires de HCl, liaison hydrogène entre NH3 et H2O et dipôle-dipôle induit entre H2O polaire et O2 apolaire sont correctes.",
        "ru": "Для водородной связи нужен атом H, связанный с F, O или N. В CH4 атомы H связаны с малоэлектроотрицательным углеродом, молекула неполярна; между молекулами CH4 действуют лишь лондоновские силы. Лондоновские силы между атомами He, диполь-дипольное взаимодействие между полярными молекулами HCl, водородная связь между NH3 и H2O и взаимодействие диполь – наведённый диполь между полярной H2O и неполярным O2 указаны верно.",
        "ar": "تتطلب الرابطة الهيدروجينية ذرة H مرتبطة بـ F أو O أو N. وفي CH4 ترتبط ذرات H بالكربون منخفض الكهرسلبية والجزيء غير قطبي، فلا يوجد بين جزيئات CH4 إلا قوى لندن. أما قوى لندن بين ذرات He، وتآثر ثنائي القطب بين جزيئات HCl القطبية، والرابطة الهيدروجينية بين NH3 وH2O، وتآثر ثنائي القطب–المستحث بين H2O القطبي وO2 غير القطبي فكلها صحيحة.",
        "zh": "形成氢键要求 H 与 F、O 或 N 相连。CH4 中 H 与电负性较小的碳相连，且分子是非极性的，CH4 分子之间只有色散力。He 原子间的色散力、极性 HCl 分子间的偶极-偶极作用、含 N–H 和 O–H 键的 NH3 与 H2O 之间的氢键、极性 H2O 与非极性 O2 之间的偶极-诱导偶极作用都是正确的。",
        "ku": "Ji bo girêdana hîdrojenê divê atoma H bi F, O an N ve girêdayî be. Di CH4 de atomên H bi karbona kêm-elektronegatîf ve girêdayî ne û molekul apolar e; di navbera molekulên CH4 de tenê hêzên London hene. London di navbera atomên He de, dupol-dupol di navbera molekulên HCl ên polar de, girêdana hîdrojenê di navbera NH3 û H2O de û dupol – dupola înduksiyonî di navbera H2O ya polar û O2 ya apolar de rast hatine dayîn."
      }
    },
    {
      "id": "u03-twin08",
      "stem": {
        "tr": "CO2 molekülünün Lewis yapısında bağ yapan elektron çifti sayısı ve ortaklanmamış (bağ yapmamış) elektron çifti sayısı sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (6C, 8O)",
        "en": "In the Lewis structure of CO2, what are the number of bonding electron pairs and the number of lone (non-bonding) electron pairs, respectively? (6C, 8O)",
        "de": "Wie viele bindende Elektronenpaare und wie viele freie (nichtbindende) Elektronenpaare enthält die Lewis-Formel von CO2? (6C, 8O)",
        "fr": "Dans la structure de Lewis de CO2, quels sont respectivement le nombre de doublets liants et le nombre de doublets non liants ? (6C, 8O)",
        "ru": "Сколько связывающих и сколько неподелённых электронных пар содержит структура Льюиса молекулы CO2 (соответственно)? (6C, 8O)",
        "ar": "ما عدد أزواج الإلكترونات الرابطة وعدد أزواج الإلكترونات غير الرابطة (الحرة) في بنية لويس لجزيء CO2 على الترتيب؟ (6C، 8O)",
        "zh": "CO2 分子的路易斯结构中，成键电子对数和孤电子对（未成键电子对）数依次为多少？（6C，8O）",
        "ku": "Di avahiya Lewis a molekula CO2 de hejmara cotên elektronan ên girêdanê û hejmara cotên elektronan ên neparvekirî (bê girêdan) bi rêzê çend in? (6C, 8O)"
      },
      "options": [
        {
          "tr": "2 ve 4",
          "en": "2 and 4",
          "de": "2 und 4",
          "fr": "2 et 4",
          "ru": "2 и 4",
          "ar": "2 و 4",
          "zh": "2 和 4",
          "ku": "2 û 4"
        },
        {
          "tr": "2 ve 6",
          "en": "2 and 6",
          "de": "2 und 6",
          "fr": "2 et 6",
          "ru": "2 и 6",
          "ar": "2 و 6",
          "zh": "2 和 6",
          "ku": "2 û 6"
        },
        {
          "tr": "4 ve 2",
          "en": "4 and 2",
          "de": "4 und 2",
          "fr": "4 et 2",
          "ru": "4 и 2",
          "ar": "4 و 2",
          "zh": "4 和 2",
          "ku": "4 û 2"
        },
        {
          "tr": "4 ve 4",
          "en": "4 and 4",
          "de": "4 und 4",
          "fr": "4 et 4",
          "ru": "4 и 4",
          "ar": "4 و 4",
          "zh": "4 和 4",
          "ku": "4 û 4"
        },
        {
          "tr": "4 ve 6",
          "en": "4 and 6",
          "de": "4 und 6",
          "fr": "4 et 6",
          "ru": "4 и 6",
          "ar": "4 و 6",
          "zh": "4 和 6",
          "ku": "4 û 6"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "C'nin 4, her O'nun 6 değerlik elektronu vardır; toplam 4 + 2·6 = 16 elektron, yani 8 elektron çifti. Oktetin sağlanması için C her O ile çift bağ yapar: O=C=O. İki çift bağ 4 bağ yapan elektron çifti içerir. Kalan 8 − 4 = 4 çift, her O üzerinde 2'şer ortaklanmamış çift olarak bulunur. Tekli bağ kurulduğunu sanmak 2 bağ çifti ve 6 ortaklanmamış çift sonucuna götürür, ancak bu durumda C'nin okteti tamamlanmaz.",
        "en": "C has 4 and each O has 6 valence electrons: 4 + 2·6 = 16 electrons, i.e. 8 pairs. To complete the octets, C forms a double bond with each O: O=C=O. Two double bonds contain 4 bonding pairs. The remaining 8 − 4 = 4 pairs sit as 2 lone pairs on each O. Assuming single bonds gives 2 bonding and 6 lone pairs, but then carbon's octet is not complete.",
        "de": "C hat 4, jedes O 6 Valenzelektronen: 4 + 2·6 = 16 Elektronen, also 8 Paare. Damit alle ein Oktett erreichen, bildet C mit jedem O eine Doppelbindung: O=C=O. Zwei Doppelbindungen enthalten 4 bindende Paare. Die übrigen 8 − 4 = 4 Paare sitzen als je 2 freie Paare an den O-Atomen. Mit Einfachbindungen erhielte man 2 bindende und 6 freie Paare, doch dann hätte C kein Oktett.",
        "fr": "C a 4 électrons de valence et chaque O en a 6 : 4 + 2·6 = 16 électrons, soit 8 doublets. Pour compléter les octets, C forme une double liaison avec chaque O : O=C=O. Deux doubles liaisons contiennent 4 doublets liants. Les 8 − 4 = 4 doublets restants sont non liants, 2 sur chaque O. Supposer des liaisons simples donnerait 2 doublets liants et 6 non liants, mais le carbone n'aurait alors pas son octet.",
        "ru": "У C 4, у каждого O 6 валентных электронов: 4 + 2·6 = 16 электронов, то есть 8 пар. Для завершения октетов C образует с каждым O двойную связь: O=C=O. Две двойные связи содержат 4 связывающие пары. Оставшиеся 8 − 4 = 4 пары — неподелённые, по 2 на каждом O. Если считать связи одинарными, получится 2 связывающие и 6 неподелённых пар, но тогда октет углерода не завершён.",
        "ar": "للكربون 4 إلكترونات تكافؤ ولكل أكسجين 6: المجموع 4 + 2·6 = 16 إلكتروناً أي 8 أزواج. ولإكمال الثُّمانيات يكوّن C رابطة ثنائية مع كل O: O=C=O. وتحتوي الرابطتان الثنائيتان على 4 أزواج رابطة، وتبقى 8 − 4 = 4 أزواج حرة، زوجان على كل O. وافتراض روابط أحادية يعطي زوجين رابطين و6 أزواج حرة، لكن الكربون حينئذ لا يكمل ثُمانيته.",
        "zh": "C 有 4 个价电子，每个 O 有 6 个：共 4 + 2·6 = 16 个电子，即 8 对。为使各原子达到八隅体，C 与每个 O 各形成一个双键：O=C=O。两个双键含 4 对成键电子，其余 8 − 4 = 4 对为孤电子对，每个 O 上各 2 对。若认为是单键，会得到 2 对成键电子和 6 对孤电子对，但这样碳达不到八隅体。",
        "ku": "C 4, her O 6 elektronên valansê hene: 4 + 2·6 = 16 elektron, ango 8 cot. Ji bo temamkirina oktetan C bi her O re girêdaneke ducar çêdike: O=C=O. Du girêdanên ducar 4 cotên girêdanê dihewînin. 8 − 4 = 4 cotên mayî wekî 2 cotên neparvekirî li ser her O ne. Texmîna girêdanên yekane 2 cotên girêdanê û 6 cotên neparvekirî dide, lê wê demê okteta karbonê temam nabe."
      }
    },
    {
      "id": "u03-twin09",
      "stem": {
        "tr": "Aşağıda bazı kimyasal türler ve sınıfları verilmiştir. Hangisinde türün sınıfı yanlış belirtilmiştir?",
        "en": "Some chemical species and their classes are given below. In which one is the class of the species wrong?",
        "de": "Unten sind einige chemische Teilchenarten und ihre Klassen angegeben. Bei welcher ist die Klasse falsch?",
        "fr": "Voici quelques espèces chimiques et leur classe. Pour laquelle la classe est-elle fausse ?",
        "ru": "Ниже приведены химические частицы и их классы. Для какой частицы класс указан неверно?",
        "ar": "فيما يلي بعض الأنواع الكيميائية وتصنيفها. في أيّها ورد التصنيف خطأً؟",
        "zh": "下面给出了一些化学微粒及其类别。哪一项的类别是错误的？",
        "ku": "Li jêr hin cureyên kîmyewî û çînên wan hatine dayîn. Di kîjanê de çîna cureyê şaş hatiye diyarkirin?"
      },
      "options": [
        {
          "tr": "He – atom",
          "en": "He – atom",
          "de": "He – Atom",
          "fr": "He – atome",
          "ru": "He – атом",
          "ar": "He – ذرة",
          "zh": "He – 原子",
          "ku": "He – atom"
        },
        {
          "tr": "SO4 2- – molekül",
          "en": "SO4 2- – molecule",
          "de": "SO4 2- – Molekül",
          "fr": "SO4 2- – molécule",
          "ru": "SO4 2- – молекула",
          "ar": "SO4 2- – جزيء",
          "zh": "SO4 2- – 分子",
          "ku": "SO4 2- – molekul"
        },
        {
          "tr": "O3 – molekül",
          "en": "O3 – molecule",
          "de": "O3 – Molekül",
          "fr": "O3 – molécule",
          "ru": "O3 – молекула",
          "ar": "O3 – جزيء",
          "zh": "O3 – 分子",
          "ku": "O3 – molekul"
        },
        {
          "tr": "NH4+ – çok atomlu iyon",
          "en": "NH4+ – polyatomic ion",
          "de": "NH4+ – mehratomiges Ion",
          "fr": "NH4+ – ion polyatomique",
          "ru": "NH4+ – многоатомный ион",
          "ar": "NH4+ – أيون متعدد الذرات",
          "zh": "NH4+ – 多原子离子",
          "ku": "NH4+ – îyona pir-atomî"
        },
        {
          "tr": "Cl- – tek atomlu iyon",
          "en": "Cl- – monatomic ion",
          "de": "Cl- – einatomiges Ion",
          "fr": "Cl- – ion monoatomique",
          "ru": "Cl- – одноатомный ион",
          "ar": "Cl- – أيون أحادي الذرة",
          "zh": "Cl- – 单原子离子",
          "ku": "Cl- – îyona yek-atomî"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kimyasal türler atom, molekül ve iyon olarak sınıflandırılır. SO4 2- birden fazla atom içerse de toplam elektriksel yükü olduğundan molekül değil, çok atomlu bir iyondur (sülfat iyonu). He tek başına bulunan atom, O3 yüksüz atom grubu olan bir molekül, NH4+ çok atomlu, Cl- tek atomlu iyondur.",
        "en": "Chemical species are classified as atoms, molecules and ions. Although SO4 2- contains several atoms, it carries an overall charge, so it is a polyatomic ion (sulfate), not a molecule. He is a free atom, O3 an uncharged group of atoms (a molecule), NH4+ a polyatomic ion and Cl- a monatomic ion.",
        "de": "Chemische Teilchen werden in Atome, Moleküle und Ionen eingeteilt. SO4 2- enthält zwar mehrere Atome, ist aber insgesamt geladen und daher ein mehratomiges Ion (Sulfat), kein Molekül. He ist ein freies Atom, O3 eine ungeladene Atomgruppe (Molekül), NH4+ ein mehratomiges und Cl- ein einatomiges Ion.",
        "fr": "Les espèces chimiques se classent en atomes, molécules et ions. Bien que SO4 2- contienne plusieurs atomes, il porte une charge globale : c'est un ion polyatomique (sulfate), pas une molécule. He est un atome libre, O3 un groupe d'atomes non chargé (molécule), NH4+ un ion polyatomique et Cl- un ion monoatomique.",
        "ru": "Химические частицы делят на атомы, молекулы и ионы. Хотя SO4 2- содержит несколько атомов, у него есть общий заряд, поэтому это многоатомный ион (сульфат), а не молекула. He — свободный атом, O3 — незаряженная группа атомов (молекула), NH4+ — многоатомный ион, Cl- — одноатомный ион.",
        "ar": "تُصنَّف الأنواع الكيميائية إلى ذرات وجزيئات وأيونات. ومع أن SO4 2- يحتوي على عدة ذرات فإنه يحمل شحنة كلية، فهو أيون متعدد الذرات (الكبريتات) لا جزيء. أما He فذرة منفردة، وO3 مجموعة ذرات غير مشحونة (جزيء)، وNH4+ أيون متعدد الذرات، وCl- أيون أحادي الذرة.",
        "zh": "化学微粒分为原子、分子和离子。SO4 2- 虽然含有多个原子，但整体带电荷，所以是多原子离子（硫酸根），而不是分子。He 是独立存在的原子，O3 是不带电的原子团（分子），NH4+ 是多原子离子，Cl- 是单原子离子。",
        "ku": "Cureyên kîmyewî wekî atom, molekul û îyon tên dabeşkirin. Her çend SO4 2- gelek atoman dihewîne jî, ji ber ku bara wê ya giştî heye ne molekul, îyoneke pir-atomî ye (îyona sulfatê). He atomeke serbixwe, O3 koma atomên bêbar (molekul), NH4+ îyona pir-atomî û Cl- îyona yek-atomî ye."
      }
    },
    {
      "id": "u03-twin10",
      "stem": {
        "tr": "11Na ve 17Cl atomlarından NaCl bileşiğinin oluşumu ile ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Na atomu 1 elektron verir.\nII. Oluşan iyonların her ikisi de soy gaz elektron düzenine sahiptir.\nIII. Na ile Cl arasında elektronlar ortaklaşa kullanılır.",
        "en": "Which of the following statements about the formation of NaCl from the atoms 11Na and 17Cl are correct?\nI. The Na atom gives up 1 electron.\nII. Both ions formed have a noble-gas electron arrangement.\nIII. Electrons are shared between Na and Cl.",
        "de": "Welche Aussagen über die Bildung von NaCl aus den Atomen 11Na und 17Cl sind richtig?\nI. Das Na-Atom gibt 1 Elektron ab.\nII. Beide entstehenden Ionen haben Edelgaskonfiguration.\nIII. Na und Cl teilen sich Elektronen.",
        "fr": "Lesquelles des affirmations suivantes sur la formation de NaCl à partir des atomes 11Na et 17Cl sont correctes ?\nI. L'atome Na cède 1 électron.\nII. Les deux ions formés ont la configuration électronique d'un gaz noble.\nIII. Na et Cl mettent des électrons en commun.",
        "ru": "Какие утверждения об образовании NaCl из атомов 11Na и 17Cl верны?\nI. Атом Na отдаёт 1 электрон.\nII. Оба образующихся иона имеют электронную конфигурацию благородного газа.\nIII. Электроны обобществляются между Na и Cl.",
        "ar": "أيّ العبارات الآتية عن تكوّن NaCl من الذرتين 11Na و17Cl صحيحة؟\nI. تفقد ذرة Na إلكتروناً واحداً.\nII. لكلا الأيونين المتكوّنين ترتيب إلكتروني لغاز نبيل.\nIII. تتشارك Na وCl الإلكترونات.",
        "zh": "关于由 11Na 和 17Cl 原子形成 NaCl，下列说法中哪些正确？\nI. Na 原子失去 1 个电子。\nII. 形成的两种离子都具有稀有气体的电子排布。\nIII. Na 与 Cl 之间共用电子。",
        "ku": "Derbarê çêbûna NaCl ji atomên 11Na û 17Cl de kîjan gotin rast in?\nI. Atoma Na 1 elektronê dide.\nII. Her du îyonên çêbûyî xwedî rêzbûna elektronan a gaza soy in.\nIII. Na û Cl elektronan bi hev re bi kar tînin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "فقط I",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
          "ru": "Только III",
          "ar": "فقط III",
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Na (2-8-1) son katmanındaki 1 elektronu vererek Na+ (2-8) olur ve Ne düzenine ulaşır; I doğrudur. Cl (2-8-7) bu elektronu alarak Cl- (2-8-8) olur ve Ar düzenine ulaşır; böylece II de doğrudur. III yanlıştır: elektron ortaklaşması kovalent bağın özelliğidir; NaCl'de elektron Na'dan Cl'ye aktarılır ve zıt yüklü iyonlar elektrostatik çekimle bağlanır. Doğru yanıt: I ve II.",
        "en": "Na (2-8-1) gives up its single outer electron to become Na+ (2-8), the Ne arrangement; I is true. Cl (2-8-7) takes that electron to become Cl- (2-8-8), the Ar arrangement, so II is true as well. III is false: sharing electrons is the feature of covalent bonding; in NaCl the electron is transferred from Na to Cl and the oppositely charged ions are held by electrostatic attraction. Answer: I and II.",
        "de": "Na (2-8-1) gibt sein einziges Außenelektron ab und wird zu Na+ (2-8) mit Ne-Konfiguration; I ist richtig. Cl (2-8-7) nimmt es auf und wird zu Cl- (2-8-8) mit Ar-Konfiguration; auch II ist richtig. III ist falsch: Elektronenteilung kennzeichnet die kovalente Bindung; in NaCl wird das Elektron von Na auf Cl übertragen, und die entgegengesetzt geladenen Ionen ziehen sich elektrostatisch an. Antwort: I und II.",
        "fr": "Na (2-8-1) cède son unique électron externe et devient Na+ (2-8), configuration de Ne : I est vraie. Cl (2-8-7) capte cet électron et devient Cl- (2-8-8), configuration d'Ar : II est vraie aussi. III est fausse : la mise en commun d'électrons caractérise la liaison covalente ; dans NaCl l'électron est transféré de Na à Cl et les ions de charges opposées s'attirent électrostatiquement. Réponse : I et II.",
        "ru": "Na (2-8-1) отдаёт единственный внешний электрон и становится Na+ (2-8) с конфигурацией Ne — I верно. Cl (2-8-7) принимает этот электрон и становится Cl- (2-8-8) с конфигурацией Ar — II тоже верно. III неверно: обобществление электронов характерно для ковалентной связи; в NaCl электрон переходит от Na к Cl, а разноимённые ионы удерживаются электростатическим притяжением. Ответ: I и II.",
        "ar": "يفقد Na (2-8-1) إلكترونه الخارجي الوحيد فيصبح Na+ (2-8) بترتيب Ne، فالعبارة I صحيحة. ويكتسب Cl (2-8-7) هذا الإلكترون فيصبح Cl- (2-8-8) بترتيب Ar، فالعبارة II صحيحة أيضاً. العبارة III خاطئة: تشارك الإلكترونات سمة الرابطة التساهمية، أما في NaCl فينتقل الإلكترون من Na إلى Cl وتترابط الأيونات المتعاكسة الشحنة بالتجاذب الكهروستاتيكي. الإجابة: I وII.",
        "zh": "Na（2-8-1）失去最外层的 1 个电子成为 Na+（2-8），达到 Ne 的排布，I 正确。Cl（2-8-7）得到这个电子成为 Cl-（2-8-8），达到 Ar 的排布，II 也正确。III 错误：共用电子是共价键的特征；NaCl 中电子由 Na 转移给 Cl，带相反电荷的离子靠静电引力结合。答案：I 和 II。",
        "ku": "Na (2-8-1) elektrona xwe ya derveyî ya yekane dide û dibe Na+ (2-8) bi rêzbûna Ne; I rast e. Cl (2-8-7) vê elektronê digire û dibe Cl- (2-8-8) bi rêzbûna Ar; II jî rast e. III şaş e: hevpariya elektronan taybetiya girêdana kovalent e; di NaCl de elektron ji Na derbasî Cl dibe û îyonên bi barên dijber bi kişandina elektrostatîk li hev digirin. Bersiv: I û II."
      }
    },
    {
      "id": "u03-twin11",
      "stem": {
        "tr": "Bazı elementlerin elektronegatiflik değerleri şöyledir: H: 2,1; C: 2,5; N: 3,0; O: 3,5; F: 4,0. Buna göre aşağıdaki kovalent bağlardan hangisinin polarlığı en azdır?",
        "en": "The electronegativities of some elements are: H 2.1; C 2.5; N 3.0; O 3.5; F 4.0. Which of the following covalent bonds is the least polar?",
        "de": "Die Elektronegativitäten einiger Elemente: H 2,1; C 2,5; N 3,0; O 3,5; F 4,0. Welche der folgenden kovalenten Bindungen ist am wenigsten polar?",
        "fr": "Électronégativités de quelques éléments : H 2,1 ; C 2,5 ; N 3,0 ; O 3,5 ; F 4,0. Laquelle des liaisons covalentes suivantes est la moins polaire ?",
        "ru": "Электроотрицательности некоторых элементов: H 2,1; C 2,5; N 3,0; O 3,5; F 4,0. Какая из следующих ковалентных связей наименее полярна?",
        "ar": "قيم الكهرسلبية لبعض العناصر: H ‏2,1؛ C ‏2,5؛ N ‏3,0؛ O ‏3,5؛ F ‏4,0. أيّ الروابط التساهمية الآتية أقلها قطبية؟",
        "zh": "部分元素的电负性为：H 2.1；C 2.5；N 3.0；O 3.5；F 4.0。下列共价键中极性最小的是哪一个？",
        "ku": "Nirxên elektronegatîfiyê yên hin elementan ev in: H 2,1; C 2,5; N 3,0; O 3,5; F 4,0. Li gorî vê, polariya kîjan ji van girêdanên kovalent herî kêm e?"
      },
      "options": [
        {
          "tr": "O–H",
          "en": "O–H",
          "de": "O–H",
          "fr": "O–H",
          "ru": "O–H",
          "ar": "O–H",
          "zh": "O–H",
          "ku": "O–H"
        },
        {
          "tr": "F–H",
          "en": "F–H",
          "de": "F–H",
          "fr": "F–H",
          "ru": "F–H",
          "ar": "F–H",
          "zh": "F–H",
          "ku": "F–H"
        },
        {
          "tr": "N–H",
          "en": "N–H",
          "de": "N–H",
          "fr": "N–H",
          "ru": "N–H",
          "ar": "N–H",
          "zh": "N–H",
          "ku": "N–H"
        },
        {
          "tr": "C–O",
          "en": "C–O",
          "de": "C–O",
          "fr": "C–O",
          "ru": "C–O",
          "ar": "C–O",
          "zh": "C–O",
          "ku": "C–O"
        },
        {
          "tr": "C–H",
          "en": "C–H",
          "de": "C–H",
          "fr": "C–H",
          "ru": "C–H",
          "ar": "C–H",
          "zh": "C–H",
          "ku": "C–H"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Bağın polarlığı, bağlı atomların elektronegatiflik farkı arttıkça artar. Farklar: O–H 3,5 − 2,1 = 1,4; F–H 4,0 − 2,1 = 1,9; N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; C–H 2,5 − 2,1 = 0,4. En küçük fark C–H bağındadır, bu yüzden en az polar bağ C–H'dir. F–H ise en polar bağdır.",
        "en": "Bond polarity increases with the electronegativity difference of the bonded atoms. Differences: O–H 3.5 − 2.1 = 1.4; F–H 4.0 − 2.1 = 1.9; N–H 3.0 − 2.1 = 0.9; C–O 3.5 − 2.5 = 1.0; C–H 2.5 − 2.1 = 0.4. The smallest difference is in C–H, so C–H is the least polar bond; F–H is the most polar.",
        "de": "Die Bindungspolarität steigt mit der Elektronegativitätsdifferenz. Differenzen: O–H 3,5 − 2,1 = 1,4; F–H 4,0 − 2,1 = 1,9; N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; C–H 2,5 − 2,1 = 0,4. Die kleinste Differenz hat C–H, sie ist am wenigsten polar; F–H ist am polarsten.",
        "fr": "La polarité d'une liaison augmente avec la différence d'électronégativité. Différences : O–H 3,5 − 2,1 = 1,4 ; F–H 4,0 − 2,1 = 1,9 ; N–H 3,0 − 2,1 = 0,9 ; C–O 3,5 − 2,5 = 1,0 ; C–H 2,5 − 2,1 = 0,4. La plus petite différence est pour C–H, la liaison la moins polaire ; F–H est la plus polaire.",
        "ru": "Полярность связи растёт с разностью электроотрицательностей. Разности: O–H 3,5 − 2,1 = 1,4; F–H 4,0 − 2,1 = 1,9; N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; C–H 2,5 − 2,1 = 0,4. Наименьшая разность у C–H, поэтому эта связь наименее полярна; F–H — самая полярная.",
        "ar": "تزداد قطبية الرابطة بازدياد فرق الكهرسلبية بين الذرتين. الفروق: O–H ‏3,5 − 2,1 = 1,4؛ F–H ‏4,0 − 2,1 = 1,9؛ N–H ‏3,0 − 2,1 = 0,9؛ C–O ‏3,5 − 2,5 = 1,0؛ C–H ‏2,5 − 2,1 = 0,4. أصغر فرق في C–H فهي الأقل قطبية، وF–H الأكثر قطبية.",
        "zh": "键的极性随成键原子电负性差的增大而增大。差值：O–H 3.5 − 2.1 = 1.4；F–H 4.0 − 2.1 = 1.9；N–H 3.0 − 2.1 = 0.9；C–O 3.5 − 2.5 = 1.0；C–H 2.5 − 2.1 = 0.4。C–H 的差值最小，极性最小；F–H 极性最大。",
        "ku": "Polariya girêdanê bi zêdebûna cudahiya elektronegatîfiyê ya atomên girêdayî re zêde dibe. Cudahî: O–H 3,5 − 2,1 = 1,4; F–H 4,0 − 2,1 = 1,9; N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; C–H 2,5 − 2,1 = 0,4. Cudahiya herî biçûk di C–H de ye, loma girêdana herî kêm polar C–H ye; F–H ya herî polar e."
      }
    },
    {
      "id": "u03-twin12",
      "stem": {
        "tr": "Bakır, elektrik kablolarında yaygın olarak kullanılır. Bakırın elektriği iyi iletmesinin nedeni aşağıdakilerden hangisidir?",
        "en": "Copper is widely used in electrical wiring. Why does copper conduct electricity well?",
        "de": "Kupfer wird häufig für elektrische Leitungen verwendet. Warum leitet Kupfer den Strom gut?",
        "fr": "Le cuivre est très utilisé dans les câbles électriques. Pourquoi conduit-il bien l'électricité ?",
        "ru": "Медь широко применяется в электрических проводах. Почему медь хорошо проводит электрический ток?",
        "ar": "يُستخدم النحاس على نطاق واسع في الأسلاك الكهربائية. ما سبب جودة توصيله للكهرباء؟",
        "zh": "铜被广泛用于电线。铜导电性好的原因是什么？",
        "ku": "Sifir bi berfirehî di kabloyên elektrîkê de tê bikaranîn. Sedema guhezîna baş a elektrîkê ya sifirê çi ye?"
      },
      "options": [
        {
          "tr": "Metalik bağdaki serbest değerlik elektronlarının metal içinde hareket edebilmesi",
          "en": "The free valence electrons of the metallic bond can move through the metal",
          "de": "Die freien Valenzelektronen der Metallbindung können sich im Metall bewegen",
          "fr": "Les électrons de valence libres de la liaison métallique peuvent se déplacer dans le métal",
          "ru": "Свободные валентные электроны металлической связи могут перемещаться по металлу",
          "ar": "قدرة إلكترونات التكافؤ الحرة في الرابطة الفلزية على الحركة داخل الفلز",
          "zh": "金属键中的自由价电子能在金属内部移动",
          "ku": "Elektronên valansê yên serbest ên girêdana metalî dikarin di nava metalê de bilivin"
        },
        {
          "tr": "Bakır atomları arasında iyonik bağ bulunması",
          "en": "There are ionic bonds between copper atoms",
          "de": "Zwischen Kupferatomen bestehen Ionenbindungen",
          "fr": "Les atomes de cuivre sont unis par des liaisons ioniques",
          "ru": "Между атомами меди ионные связи",
          "ar": "وجود روابط أيونية بين ذرات النحاس",
          "zh": "铜原子之间存在离子键",
          "ku": "Di navbera atomên sifirê de girêdana îyonîk heye"
        },
        {
          "tr": "Bakırın moleküler yapılı bir katı olması",
          "en": "Copper is a molecular solid",
          "de": "Kupfer ist ein molekularer Feststoff",
          "fr": "Le cuivre est un solide moléculaire",
          "ru": "Медь — молекулярное твёрдое вещество",
          "ar": "كون النحاس مادة صلبة جزيئية",
          "zh": "铜是分子晶体",
          "ku": "Sifir madeyeke hişk a bi avahiya molekulî ye"
        },
        {
          "tr": "Bakır atomlarının elektronlarını kovalent bağlarla sıkıca tutması",
          "en": "Copper atoms hold their electrons tightly in covalent bonds",
          "de": "Kupferatome halten ihre Elektronen fest in kovalenten Bindungen",
          "fr": "Les atomes de cuivre retiennent fortement leurs électrons dans des liaisons covalentes",
          "ru": "Атомы меди прочно удерживают электроны в ковалентных связях",
          "ar": "إمساك ذرات النحاس بإلكتروناتها بإحكام في روابط تساهمية",
          "zh": "铜原子通过共价键把电子牢牢束缚住",
          "ku": "Atomên sifirê elektronên xwe bi girêdanên kovalent bi hişkî digirin"
        },
        {
          "tr": "Bakır atomları arasında hidrojen bağları bulunması",
          "en": "There are hydrogen bonds between copper atoms",
          "de": "Zwischen Kupferatomen bestehen Wasserstoffbrücken",
          "fr": "Il existe des liaisons hydrogène entre les atomes de cuivre",
          "ru": "Между атомами меди есть водородные связи",
          "ar": "وجود روابط هيدروجينية بين ذرات النحاس",
          "zh": "铜原子之间存在氢键",
          "ku": "Di navbera atomên sifirê de girêdanên hîdrojenê hene"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bakır gibi metallerde değerlik elektronları belirli bir atoma bağlı değildir; pozitif metal iyonlarının arasında \"elektron denizi\" oluşturur ve uygulanan gerilimle metal içinde kolayca hareket ederek akım taşır. Metal atomları arasında iyonik veya kovalent bağ ya da hidrojen bağı yoktur; elektronları sıkıca tutan yapılar akımı iletmez.",
        "en": "In metals such as copper the valence electrons are not tied to any one atom; they form an \"electron sea\" among the positive metal ions and, under an applied voltage, move easily through the metal and carry current. There are no ionic, covalent or hydrogen bonds between metal atoms; structures that hold electrons tightly do not conduct.",
        "de": "In Metallen wie Kupfer sind die Valenzelektronen an kein bestimmtes Atom gebunden; sie bilden zwischen den positiven Metallionen einen „Elektronensee“ und bewegen sich bei angelegter Spannung leicht durch das Metall. Zwischen Metallatomen gibt es keine Ionen-, Atom- oder Wasserstoffbrückenbindungen; Strukturen, die Elektronen fest halten, leiten nicht.",
        "fr": "Dans les métaux comme le cuivre, les électrons de valence ne sont liés à aucun atome particulier ; ils forment une « mer d'électrons » entre les ions métalliques positifs et, sous une tension, se déplacent facilement dans le métal en transportant le courant. Il n'y a ni liaison ionique, ni covalente, ni hydrogène entre atomes métalliques ; les structures qui retiennent fortement les électrons ne conduisent pas.",
        "ru": "В металлах, например в меди, валентные электроны не закреплены за отдельными атомами; они образуют «электронное море» между положительными ионами металла и под действием напряжения легко перемещаются, перенося ток. Ионных, ковалентных или водородных связей между атомами металла нет; структуры, прочно удерживающие электроны, ток не проводят.",
        "ar": "في الفلزات كالنحاس لا ترتبط إلكترونات التكافؤ بذرة معينة، بل تكوّن «بحراً إلكترونياً» بين أيونات الفلز الموجبة، وتتحرك بسهولة داخل الفلز عند تطبيق جهد فتنقل التيار. ولا توجد روابط أيونية أو تساهمية أو هيدروجينية بين ذرات الفلز، والبنى التي تمسك الإلكترونات بإحكام لا توصل التيار.",
        "zh": "铜等金属中的价电子不属于某个特定原子，而是在金属阳离子之间形成“电子海”，在外加电压下能在金属中自由移动而导电。金属原子之间没有离子键、共价键或氢键；把电子牢牢束缚的结构不能导电。",
        "ku": "Di metalên wekî sifirê de elektronên valansê bi atomeke diyar ve ne girêdayî ne; di navbera îyonên metal ên erênî de \"deryaya elektronan\" çêdikin û bi voltajê re bi hêsanî di nava metalê de diçin û herikê hildigirin. Di navbera atomên metal de girêdana îyonîk, kovalent an hîdrojenê tune; avahiyên ku elektronan bi hişkî digirin herikê naguhezînin."
      }
    },
    {
      "id": "u03-twin13",
      "stem": {
        "tr": "Aşağıdaki maddelerden hangileri su molekülleriyle hidrojen bağı oluşturabilir?\nI. NH3\nII. CH4\nIII. CH3OH",
        "en": "Which of the following substances can form hydrogen bonds with water molecules?\nI. NH3\nII. CH4\nIII. CH3OH",
        "de": "Welche der folgenden Stoffe können mit Wassermolekülen Wasserstoffbrücken bilden?\nI. NH3\nII. CH4\nIII. CH3OH",
        "fr": "Lesquelles des substances suivantes peuvent former des liaisons hydrogène avec les molécules d'eau ?\nI. NH3\nII. CH4\nIII. CH3OH",
        "ru": "Какие из следующих веществ могут образовывать водородные связи с молекулами воды?\nI. NH3\nII. CH4\nIII. CH3OH",
        "ar": "أيّ المواد الآتية يمكنها تكوين روابط هيدروجينية مع جزيئات الماء؟\nI. NH3\nII. CH4\nIII. CH3OH",
        "zh": "下列物质中，哪些能与水分子形成氢键？\nI. NH3\nII. CH4\nIII. CH3OH",
        "ku": "Kîjan ji van madeyan dikarin bi molekulên avê re girêdana hîdrojenê çêkin?\nI. NH3\nII. CH4\nIII. CH3OH"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "فقط I",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
          "ru": "Только II",
          "ar": "فقط II",
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
        "tr": "NH3'te H atomları N'ye bağlıdır ve N üzerinde ortaklanmamış elektron çifti vardır; su ile hidrojen bağı kurar (I doğru). CH3OH'ta O–H grubu ve O üzerindeki ortaklanmamış çiftler bulunur; su ile hidrojen bağı kurar (III doğru). CH4'te H atomları karbona bağlıdır ve molekülde F, O veya N yoktur; suyla hidrojen bağı kuramaz, su ile arasında dipol-indüklenmiş dipol etkileşimi oluşur (II yanlış). Doğru yanıt: I ve III.",
        "en": "In NH3 the H atoms are bonded to N, which carries a lone pair, so it hydrogen-bonds with water (I true). CH3OH has an O–H group and lone pairs on O, so it hydrogen-bonds with water (III true). In CH4 the H atoms are bonded to carbon and there is no F, O or N; it cannot hydrogen-bond with water — only dipole–induced dipole interactions form (II false). Answer: I and III.",
        "de": "In NH3 sind die H-Atome an N gebunden, das ein freies Elektronenpaar trägt; es bildet mit Wasser Wasserstoffbrücken (I richtig). CH3OH hat eine O–H-Gruppe und freie Paare am O; ebenfalls Wasserstoffbrücken (III richtig). In CH4 sind die H-Atome an Kohlenstoff gebunden, es gibt kein F, O oder N; mit Wasser entsteht nur Dipol-induzierter-Dipol-Wechselwirkung (II falsch). Antwort: I und III.",
        "fr": "Dans NH3, les H sont liés à N, porteur d'un doublet non liant : liaisons hydrogène avec l'eau (I vraie). CH3OH possède un groupe O–H et des doublets sur O : liaisons hydrogène avec l'eau (III vraie). Dans CH4, les H sont liés au carbone et il n'y a ni F, ni O, ni N : pas de liaison hydrogène, seulement des interactions dipôle-dipôle induit avec l'eau (II fausse). Réponse : I et III.",
        "ru": "В NH3 атомы H связаны с N, у которого есть неподелённая пара, поэтому NH3 образует водородные связи с водой (I верно). У CH3OH есть группа O–H и неподелённые пары на O — тоже водородные связи (III верно). В CH4 атомы H связаны с углеродом, а F, O или N нет; с водой возникает лишь взаимодействие диполь – наведённый диполь (II неверно). Ответ: I и III.",
        "ar": "في NH3 ترتبط ذرات H بالنيتروجين الذي يحمل زوجاً حراً، فيكوّن روابط هيدروجينية مع الماء (I صحيحة). وفي CH3OH مجموعة O–H وأزواج حرة على O، فيكوّن روابط هيدروجينية مع الماء (III صحيحة). أما في CH4 فترتبط ذرات H بالكربون ولا يوجد F أو O أو N، فلا يكوّن روابط هيدروجينية بل تآثر ثنائي القطب–المستحث مع الماء (II خاطئة). الإجابة: I وIII.",
        "zh": "NH3 中 H 与 N 相连，N 上有孤电子对，能与水形成氢键（I 正确）。CH3OH 含 O–H 基团且 O 上有孤电子对，能与水形成氢键（III 正确）。CH4 中 H 与碳相连，分子中没有 F、O、N，不能与水形成氢键，与水之间只有偶极-诱导偶极作用（II 错误）。答案：I 和 III。",
        "ku": "Di NH3 de atomên H bi N ve girêdayî ne û li ser N cotek neparvekirî heye; bi avê re girêdana hîdrojenê çêdike (I rast e). Di CH3OH de koma O–H û cotên neparvekirî yên li ser O hene; bi avê re girêdana hîdrojenê çêdike (III rast e). Di CH4 de atomên H bi karbonê ve girêdayî ne û F, O an N tune; bi avê re girêdana hîdrojenê çênake, tenê têkiliya dupol – dupola înduksiyonî çêdibe (II şaş e). Bersiv: I û III."
      }
    },
    {
      "id": "u03-twin14",
      "stem": {
        "tr": "Saf su, şekerli su ve tuzlu (NaCl) su ile yapılan bir elektrik iletkenliği deneyinde yalnızca tuzlu sudaki devrede ampul yanmıştır. Bu sonucun en doğru açıklaması aşağıdakilerden hangisidir?",
        "en": "In an electrical conductivity experiment with pure water, sugar water and salt (NaCl) water, the bulb lit only in the circuit with salt water. Which is the best explanation of this result?",
        "de": "In einem Leitfähigkeitsversuch mit reinem Wasser, Zuckerwasser und Salzwasser (NaCl) leuchtete die Lampe nur im Stromkreis mit Salzwasser. Welche Erklärung ist am zutreffendsten?",
        "fr": "Lors d'une expérience de conductivité avec de l'eau pure, de l'eau sucrée et de l'eau salée (NaCl), l'ampoule ne s'est allumée qu'avec l'eau salée. Quelle est la meilleure explication ?",
        "ru": "В опыте по электропроводности с чистой водой, сахарной водой и раствором соли (NaCl) лампочка загорелась только в цепи с солёной водой. Какое объяснение наиболее верное?",
        "ar": "في تجربة توصيل كهربائي باستخدام ماء نقي وماء محلّى بالسكر وماء مملح (NaCl)، أضاء المصباح في دارة الماء المملح فقط. ما أدق تفسير لهذه النتيجة؟",
        "zh": "用纯水、糖水和食盐（NaCl）水做导电性实验，只有食盐水所在电路中的灯泡亮了。对这一结果最合理的解释是哪一项？",
        "ku": "Di ceribandineke guhezîna elektrîkê de bi ava saf, ava bi şekir û ava bi xwê (NaCl), tenê di devreya ava bi xwê de ampûl vêket. Ravekirina herî rast a vê encamê kîjan e?"
      },
      "options": [
        {
          "tr": "Şeker molekülleri suyla kimyasal tepkimeye girerek iletkenliği engeller.",
          "en": "Sugar molecules react chemically with water and block conduction.",
          "de": "Zuckermoleküle reagieren chemisch mit Wasser und verhindern die Leitung.",
          "fr": "Les molécules de sucre réagissent chimiquement avec l'eau et empêchent la conduction.",
          "ru": "Молекулы сахара химически реагируют с водой и препятствуют проводимости.",
          "ar": "تتفاعل جزيئات السكر كيميائياً مع الماء فتمنع التوصيل.",
          "zh": "糖分子与水发生化学反应，阻止了导电。",
          "ku": "Molekulên şekir bi avê re reaksiyona kîmyewî dikin û guhezînê asteng dikin."
        },
        {
          "tr": "NaCl'de atomlar kovalent bağlarla bağlı olduğundan elektronlar çözeltide serbest kalır.",
          "en": "In NaCl the atoms are covalently bonded, so electrons become free in solution.",
          "de": "In NaCl sind die Atome kovalent gebunden, daher werden in Lösung Elektronen frei.",
          "fr": "Dans NaCl les atomes sont liés de façon covalente, si bien que des électrons deviennent libres en solution.",
          "ru": "В NaCl атомы связаны ковалентно, поэтому в растворе освобождаются электроны.",
          "ar": "ترتبط الذرات في NaCl بروابط تساهمية فتتحرر الإلكترونات في المحلول.",
          "zh": "NaCl 中原子以共价键结合，因此电子在溶液中变成自由电子。",
          "ku": "Di NaCl de atom bi girêdanên kovalent ve girêdayî ne, loma elektron di çareseriyê de serbest dibin."
        },
        {
          "tr": "NaCl suda serbestçe hareket eden iyonlarına ayrışır; şeker ise suda molekülleri hâlinde çözünür.",
          "en": "NaCl separates in water into freely moving ions, whereas sugar dissolves as molecules.",
          "de": "NaCl zerfällt in Wasser in frei bewegliche Ionen, Zucker löst sich dagegen in Form von Molekülen.",
          "fr": "NaCl se dissocie dans l'eau en ions libres de se déplacer, tandis que le sucre se dissout sous forme de molécules.",
          "ru": "NaCl в воде распадается на свободно движущиеся ионы, а сахар растворяется в виде молекул.",
          "ar": "يتفكك NaCl في الماء إلى أيونات تتحرك بحرية، أما السكر فيذوب على شكل جزيئات.",
          "zh": "NaCl 在水中解离成可自由移动的离子，而糖以分子形式溶解。",
          "ku": "NaCl di avê de dibe îyonên ku bi serbestî dilivin; şekir jî wekî molekul di avê de dihele."
        },
        {
          "tr": "Şekerin molekül kütlesi büyük olduğu için suda hiç çözünmez.",
          "en": "Sugar has a large molecular mass, so it does not dissolve in water at all.",
          "de": "Zucker hat eine große Molekülmasse und löst sich daher gar nicht in Wasser.",
          "fr": "Le sucre a une masse moléculaire élevée et ne se dissout donc pas du tout dans l'eau.",
          "ru": "У сахара большая молекулярная масса, поэтому он совсем не растворяется в воде.",
          "ar": "لأن كتلة جزيء السكر كبيرة فهو لا يذوب في الماء إطلاقاً.",
          "zh": "糖的分子质量大，所以根本不溶于水。",
          "ku": "Ji ber ku girseya molekula şekir mezin e, qet di avê de nahele."
        },
        {
          "tr": "Tuzlu suda Na ve Cl atomları arasında metalik bağ oluşur.",
          "en": "In salt water metallic bonds form between Na and Cl atoms.",
          "de": "Im Salzwasser bilden sich Metallbindungen zwischen Na- und Cl-Atomen.",
          "fr": "Dans l'eau salée, des liaisons métalliques se forment entre atomes de Na et de Cl.",
          "ru": "В солёной воде между атомами Na и Cl образуется металлическая связь.",
          "ar": "تتكوّن في الماء المملح روابط فلزية بين ذرات Na وCl.",
          "zh": "食盐水中 Na 与 Cl 原子之间形成金属键。",
          "ku": "Di ava bi xwê de di navbera atomên Na û Cl de girêdana metalî çêdibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Çözeltinin akım iletmesi için içinde serbestçe hareket eden yüklü tanecikler (iyonlar) bulunmalıdır. İyonik bir bileşik olan NaCl suda çözünürken Na+ ve Cl- iyonlarına ayrışır ve bu iyonlar akımı taşır. Şeker ise kovalent bağlı moleküllerden oluşur; suda çözünür ama iyonlaşmadan molekül olarak dağılır, bu yüzden iletken değildir. Şeker suda iyi çözünür; NaCl'de kovalent veya metalik bağ yoktur.",
        "en": "For a solution to conduct, it must contain freely moving charged particles (ions). NaCl, an ionic compound, separates into Na+ and Cl- ions when it dissolves, and these ions carry the current. Sugar consists of covalently bonded molecules; it dissolves but spreads out as molecules without forming ions, so it does not conduct. Sugar is very soluble in water, and NaCl contains no covalent or metallic bonds.",
        "de": "Damit eine Lösung leitet, muss sie frei bewegliche geladene Teilchen (Ionen) enthalten. Die Ionenverbindung NaCl zerfällt beim Lösen in Na+- und Cl--Ionen, die den Strom tragen. Zucker besteht aus kovalent gebundenen Molekülen; er löst sich, verteilt sich aber ohne Ionenbildung als Moleküle und leitet daher nicht. Zucker ist gut wasserlöslich; NaCl enthält keine kovalenten oder metallischen Bindungen.",
        "fr": "Pour qu'une solution conduise, elle doit contenir des particules chargées mobiles (ions). NaCl, composé ionique, se dissocie en ions Na+ et Cl- qui transportent le courant. Le sucre est formé de molécules covalentes : il se dissout mais se disperse sous forme de molécules sans former d'ions, il ne conduit donc pas. Le sucre est très soluble dans l'eau et NaCl ne contient ni liaison covalente ni liaison métallique.",
        "ru": "Чтобы раствор проводил ток, в нём должны быть свободно движущиеся заряженные частицы — ионы. Ионное соединение NaCl при растворении распадается на ионы Na+ и Cl-, которые и переносят ток. Сахар состоит из молекул с ковалентными связями; он растворяется, но распределяется в виде молекул, не образуя ионов, поэтому раствор не проводит ток. Сахар хорошо растворим в воде, а в NaCl нет ковалентных или металлических связей.",
        "ar": "لكي يوصل المحلول التيار يجب أن يحتوي على دقائق مشحونة تتحرك بحرية (أيونات). وNaCl مركب أيوني يتفكك عند ذوبانه إلى أيونات Na+ وCl- التي تنقل التيار. أما السكر فيتكوّن من جزيئات مترابطة تساهمياً، يذوب لكنه ينتشر جزيئاتٍ دون أن يتأين فلا يوصل. والسكر يذوب في الماء جيداً، وNaCl لا يحتوي على روابط تساهمية أو فلزية.",
        "zh": "溶液要导电，必须含有可自由移动的带电微粒（离子）。离子化合物 NaCl 溶于水时解离成 Na+ 和 Cl-，这些离子导电。糖由共价键结合的分子构成，能溶于水，但以分子形式分散而不电离，所以不导电。糖易溶于水；NaCl 中没有共价键或金属键。",
        "ku": "Ji bo ku çareserî herikê biguhezîne divê perçikên barkirî yên bi serbestî dilivin (îyon) tê de hebin. NaCl wekî pêkhateyeke îyonîk dema dihele dibe îyonên Na+ û Cl- û ev îyon herikê hildigirin. Şekir ji molekulên bi girêdanên kovalent pêk tê; dihele lê bê ku bibe îyon wekî molekul belav dibe, loma naguhezîne. Şekir di avê de baş dihele; di NaCl de girêdana kovalent an metalî tune."
      }
    },
    {
      "id": "u03-twin15",
      "stem": {
        "tr": "Aşağıdaki olaylardan hangisinde güçlü etkileşimler (kimyasal bağlar) kırılır ve yeni bağlar oluşur?",
        "en": "In which of the following processes are strong interactions (chemical bonds) broken and new bonds formed?",
        "de": "Bei welchem der folgenden Vorgänge werden starke Wechselwirkungen (chemische Bindungen) gespalten und neue Bindungen gebildet?",
        "fr": "Dans lequel des phénomènes suivants des interactions fortes (liaisons chimiques) sont-elles rompues et de nouvelles liaisons formées ?",
        "ru": "В каком из следующих процессов разрываются сильные взаимодействия (химические связи) и образуются новые связи?",
        "ar": "في أيّ العمليات الآتية تُكسر تآثرات قوية (روابط كيميائية) وتتكوّن روابط جديدة؟",
        "zh": "下列过程中，哪一个会断开强相互作用（化学键）并形成新的化学键？",
        "ku": "Di kîjan ji van bûyeran de têkiliyên xurt (girêdanên kîmyewî) dişikin û girêdanên nû çêdibin?"
      },
      "options": [
        {
          "tr": "Buzun erimesi",
          "en": "Ice melting",
          "de": "Schmelzen von Eis",
          "fr": "La fusion de la glace",
          "ru": "Таяние льда",
          "ar": "انصهار الجليد",
          "zh": "冰融化",
          "ku": "Helîna cemedê"
        },
        {
          "tr": "Odunun yanması",
          "en": "Wood burning",
          "de": "Verbrennen von Holz",
          "fr": "La combustion du bois",
          "ru": "Горение древесины",
          "ar": "احتراق الخشب",
          "zh": "木材燃烧",
          "ku": "Şewitîna dar"
        },
        {
          "tr": "İyotun süblimleşmesi",
          "en": "Iodine subliming",
          "de": "Sublimation von Iod",
          "fr": "La sublimation du diiode",
          "ru": "Возгонка иода",
          "ar": "تسامي اليود",
          "zh": "碘升华",
          "ku": "Sublîmebûna îyotê"
        },
        {
          "tr": "Alkolün buharlaşması",
          "en": "Alcohol evaporating",
          "de": "Verdunsten von Alkohol",
          "fr": "L'évaporation de l'alcool",
          "ru": "Испарение спирта",
          "ar": "تبخر الكحول",
          "zh": "酒精蒸发",
          "ku": "Buharbûna alkolê"
        },
        {
          "tr": "Şekerin suda çözünmesi",
          "en": "Sugar dissolving in water",
          "de": "Lösen von Zucker in Wasser",
          "fr": "La dissolution du sucre dans l'eau",
          "ru": "Растворение сахара в воде",
          "ar": "ذوبان السكر في الماء",
          "zh": "糖溶于水",
          "ku": "Helîna şekir di avê de"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Yanma kimyasal bir değişimdir: odundaki maddelerin C–H, C–C gibi kovalent bağları ve O2'deki bağlar kırılır, CO2 ve H2O'daki yeni bağlar oluşur. Erime, süblimleşme, buharlaşma ve şekerin çözünmesi fiziksel değişimlerdir; bu olaylarda yalnızca moleküller arası zayıf etkileşimler (hidrojen bağı, London kuvvetleri) yenilir veya yeniden düzenlenir, maddelerin kimliği değişmez.",
        "en": "Burning is a chemical change: covalent bonds such as C–H and C–C in the wood and the bonds in O2 are broken, and new bonds in CO2 and H2O are formed. Melting, sublimation, evaporation and dissolving sugar are physical changes; only weak intermolecular interactions (hydrogen bonds, London forces) are overcome or rearranged, and the identity of the substances does not change.",
        "de": "Verbrennung ist eine chemische Veränderung: Kovalente Bindungen wie C–H und C–C im Holz sowie die Bindungen im O2 werden gespalten, neue Bindungen in CO2 und H2O entstehen. Schmelzen, Sublimieren, Verdunsten und das Lösen von Zucker sind physikalische Vorgänge; dabei werden nur schwache zwischenmolekulare Wechselwirkungen (Wasserstoffbrücken, London-Kräfte) überwunden oder umgeordnet, die Stoffe bleiben dieselben.",
        "fr": "La combustion est une transformation chimique : des liaisons covalentes comme C–H et C–C du bois et les liaisons de O2 sont rompues, et de nouvelles liaisons se forment dans CO2 et H2O. La fusion, la sublimation, l'évaporation et la dissolution du sucre sont des transformations physiques : seules des interactions intermoléculaires faibles (liaisons hydrogène, forces de London) sont rompues ou réorganisées, l'identité des substances ne change pas.",
        "ru": "Горение — химическое явление: ковалентные связи C–H, C–C в веществах древесины и связи в O2 разрываются, а в CO2 и H2O образуются новые связи. Плавление, возгонка, испарение и растворение сахара — физические явления: преодолеваются или перестраиваются только слабые межмолекулярные взаимодействия (водородные связи, лондоновские силы), а вещества остаются теми же.",
        "ar": "الاحتراق تغيّر كيميائي: تُكسر روابط تساهمية مثل C–H وC–C في مواد الخشب وروابط O2، وتتكوّن روابط جديدة في CO2 وH2O. أما الانصهار والتسامي والتبخر وذوبان السكر فتغيرات فيزيائية يُتغلَّب فيها فقط على التآثرات الضعيفة بين الجزيئات (الروابط الهيدروجينية وقوى لندن) أو يُعاد ترتيبها، ولا تتغير هوية المواد.",
        "zh": "燃烧是化学变化：木材中物质的 C–H、C–C 等共价键和 O2 中的化学键断开，形成 CO2 和 H2O 中新的化学键。熔化、升华、蒸发和糖的溶解都是物理变化，只是克服或重新排列分子间的弱相互作用（氢键、色散力），物质的本质不变。",
        "ku": "Şewitîn guherîneke kîmyewî ye: girêdanên kovalent ên wekî C–H û C–C yên madeyên darê û girêdanên O2 dişikin, girêdanên nû yên CO2 û H2O çêdibin. Helîn, sublîmebûn, buharbûn û helîna şekir guherînên fîzîkî ne; tenê têkiliyên qels ên navbera molekulan (girêdana hîdrojenê, hêzên London) tên bindestkirin an ji nû ve rêz dibin, nasnameya madeyan naguhere."
      }
    },
    {
      "id": "u03-twin16",
      "stem": {
        "tr": "Mol kütleleri birbirine yakın olan HCl (36,5 g/mol) ve F2 (38 g/mol) maddelerinden HCl'nin kaynama noktası daha yüksektir. Bunun nedeni aşağıdakilerden hangisidir?",
        "en": "HCl (36.5 g/mol) and F2 (38 g/mol) have similar molar masses, but HCl has the higher boiling point. What is the reason?",
        "de": "HCl (36,5 g/mol) und F2 (38 g/mol) haben ähnliche molare Massen, doch HCl hat den höheren Siedepunkt. Was ist der Grund?",
        "fr": "HCl (36,5 g/mol) et F2 (38 g/mol) ont des masses molaires voisines, mais HCl a le point d'ébullition le plus élevé. Pourquoi ?",
        "ru": "У HCl (36,5 г/моль) и F2 (38 г/моль) близкие молярные массы, но температура кипения HCl выше. В чём причина?",
        "ar": "الكتلتان الموليتان لـ HCl (36,5 g/mol) وF2 (38 g/mol) متقاربتان، لكن درجة غليان HCl أعلى. ما السبب؟",
        "zh": "HCl（36.5 g/mol）和 F2（38 g/mol）的摩尔质量相近，但 HCl 的沸点更高。原因是什么？",
        "ku": "Girseyên molar ên HCl (36,5 g/mol) û F2 (38 g/mol) nêzî hev in, lê xala kelandinê ya HCl bilindtir e. Sedema vê çi ye?"
      },
      "options": [
        {
          "tr": "HCl molekülleri polar olduğundan London kuvvetlerine ek olarak dipol-dipol etkileşimleri de bulunur.",
          "en": "HCl molecules are polar, so dipole–dipole interactions exist in addition to London forces.",
          "de": "HCl-Moleküle sind polar, daher wirken zusätzlich zu London-Kräften Dipol-Dipol-Wechselwirkungen.",
          "fr": "Les molécules de HCl sont polaires : aux forces de London s'ajoutent des interactions dipôle-dipôle.",
          "ru": "Молекулы HCl полярны, поэтому кроме лондоновских сил действуют диполь-дипольные взаимодействия.",
          "ar": "جزيئات HCl قطبية، فيوجد بينها تآثر ثنائي القطب–ثنائي القطب إضافةً إلى قوى لندن.",
          "zh": "HCl 分子是极性分子，除色散力外还存在偶极-偶极作用。",
          "ku": "Molekulên HCl polar in, loma ji bilî hêzên London têkiliyên dupol-dupol jî hene."
        },
        {
          "tr": "HCl molekülleri arasında hidrojen bağları bulunur.",
          "en": "There are hydrogen bonds between HCl molecules.",
          "de": "Zwischen HCl-Molekülen bestehen Wasserstoffbrücken.",
          "fr": "Il existe des liaisons hydrogène entre les molécules de HCl.",
          "ru": "Между молекулами HCl есть водородные связи.",
          "ar": "توجد روابط هيدروجينية بين جزيئات HCl.",
          "zh": "HCl 分子之间存在氢键。",
          "ku": "Di navbera molekulên HCl de girêdanên hîdrojenê hene."
        },
        {
          "tr": "F2 molekülleri arasında iyonik bağ bulunur.",
          "en": "There are ionic bonds between F2 molecules.",
          "de": "Zwischen F2-Molekülen bestehen Ionenbindungen.",
          "fr": "Il existe des liaisons ioniques entre les molécules de F2.",
          "ru": "Между молекулами F2 ионные связи.",
          "ar": "توجد روابط أيونية بين جزيئات F2.",
          "zh": "F2 分子之间存在离子键。",
          "ku": "Di navbera molekulên F2 de girêdana îyonîk heye."
        },
        {
          "tr": "HCl'nin mol kütlesi F2'ninkinden büyüktür.",
          "en": "HCl has a larger molar mass than F2.",
          "de": "HCl hat eine größere molare Masse als F2.",
          "fr": "HCl a une masse molaire plus grande que F2.",
          "ru": "Молярная масса HCl больше, чем у F2.",
          "ar": "الكتلة المولية لـ HCl أكبر من كتلة F2 المولية.",
          "zh": "HCl 的摩尔质量比 F2 大。",
          "ku": "Girseya molar a HCl ji ya F2 mezintir e."
        },
        {
          "tr": "F2 molekülündeki kovalent bağ kaynama sırasında kırılır.",
          "en": "The covalent bond in the F2 molecule breaks during boiling.",
          "de": "Die kovalente Bindung im F2-Molekül wird beim Sieden gespalten.",
          "fr": "La liaison covalente de la molécule F2 se rompt pendant l'ébullition.",
          "ru": "Ковалентная связь в молекуле F2 разрывается при кипении.",
          "ar": "تنكسر الرابطة التساهمية في جزيء F2 أثناء الغليان.",
          "zh": "沸腾时 F2 分子中的共价键断裂。",
          "ku": "Girêdana kovalent a molekula F2 di dema kelandinê de dişike."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Mol kütleleri ve elektron sayıları yakın olduğundan iki maddenin London kuvvetleri benzerdir. HCl'de H ve Cl'nin elektronegatiflikleri farklıdır, molekül polardır ve moleküller arasında ek olarak dipol-dipol etkileşimleri bulunur; F2 ise apolardır ve yalnızca London kuvvetleri vardır. Hidrojen bağı için H'nin F, O veya N'ye bağlı olması gerekir, H–Cl bağı bu koşulu sağlamaz. F2'nin mol kütlesi zaten biraz daha büyüktür; kaynamada molekül içi bağlar kırılmaz.",
        "en": "With similar molar masses and electron numbers, the two substances have similar London forces. In HCl, H and Cl differ in electronegativity, the molecule is polar and there are additional dipole–dipole interactions; F2 is non-polar with London forces only. A hydrogen bond requires H bonded to F, O or N, which H–Cl does not meet. F2 actually has the slightly larger molar mass, and boiling does not break intramolecular bonds.",
        "de": "Bei ähnlicher molarer Masse und Elektronenzahl sind die London-Kräfte ähnlich. In HCl unterscheiden sich H und Cl in der Elektronegativität, das Molekül ist polar, und es wirken zusätzlich Dipol-Dipol-Kräfte; F2 ist unpolar und hat nur London-Kräfte. Für Wasserstoffbrücken muss H an F, O oder N gebunden sein, was bei H–Cl nicht zutrifft. F2 hat sogar die etwas größere molare Masse; beim Sieden werden keine Bindungen im Molekül gespalten.",
        "fr": "Avec des masses molaires et des nombres d'électrons voisins, les deux substances ont des forces de London semblables. Dans HCl, H et Cl ont des électronégativités différentes, la molécule est polaire et des interactions dipôle-dipôle s'ajoutent ; F2 est apolaire et n'a que des forces de London. Une liaison hydrogène exige un H lié à F, O ou N, ce qui n'est pas le cas de H–Cl. F2 a même une masse molaire un peu plus grande, et l'ébullition ne rompt pas les liaisons internes.",
        "ru": "При близких молярных массах и числе электронов лондоновские силы у веществ сходны. В HCl атомы H и Cl различаются электроотрицательностью, молекула полярна и между молекулами есть дополнительное диполь-дипольное взаимодействие; F2 неполярен, у него только лондоновские силы. Водородная связь требует H, связанного с F, O или N, — H–Cl этому не соответствует. Молярная масса F2 даже немного больше, а при кипении внутримолекулярные связи не разрываются.",
        "ar": "لأن الكتلتين الموليتين وعددي الإلكترونات متقاربة فقوى لندن متشابهة في المادتين. وفي HCl تختلف كهرسلبية H وCl فالجزيء قطبي ويوجد بين الجزيئات تآثر ثنائي القطب إضافي، أما F2 فغير قطبي وليس فيه إلا قوى لندن. وتتطلب الرابطة الهيدروجينية ذرة H مرتبطة بـ F أو O أو N وهذا لا يتحقق في H–Cl. والكتلة المولية لـ F2 أكبر قليلاً أصلاً، ولا تنكسر الروابط داخل الجزيء عند الغليان.",
        "zh": "两者摩尔质量和电子数相近，色散力相似。HCl 中 H 与 Cl 电负性不同，分子有极性，分子间还额外存在偶极-偶极作用；F2 是非极性分子，只有色散力。形成氢键要求 H 与 F、O 或 N 相连，H–Cl 不满足这一条件。F2 的摩尔质量其实还略大一些；沸腾时分子内的化学键并不断开。",
        "ku": "Ji ber ku girseyên molar û hejmarên elektronan nêzî hev in, hêzên London ên her du madeyan dişibin hev. Di HCl de elektronegatîfiya H û Cl cuda ye, molekul polar e û di navbera molekulan de têkiliyên dupol-dupol ên zêde hene; F2 apolar e û tenê hêzên London hene. Ji bo girêdana hîdrojenê divê H bi F, O an N ve girêdayî be, H–Cl vê şertê pêk nayne. Girseya molar a F2 bi rastî hinekî mezintir e; di kelandinê de girêdanên hundirê molekulê naşikin."
      }
    }
  ]
};

export default unit03;
