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
    "ru": "Взаимодействия между химическими частицами",
    "ar": "التآثرات بين الأنواع الكيميائية",
    "zh": "化学微粒间的相互作用",
    "ku": "Têkiliyên Navbera Cureyên Kîmyewî"
  },
  "subtitle": {
    "tr": "Güçlü ve Zayıf Etkileşimler, Bağ Türleri",
    "en": "Strong & Weak Bonds, Dipoles",
    "de": "Starke und schwache Wechselwirkungen, Bindungstypen",
    "fr": "Interactions fortes et faibles, types d'obligations",
    "ru": "Сильные и слабые взаимодействия, типы связей",
    "ar": "التآثرات القوية والضعيفة وأنواع الروابط",
    "zh": "强相互作用与弱相互作用、化学键类型",
    "ku": "Têkiliyên Xurt û Qels, Cureyên Girêdanan"
  },
  "facts": [
    {
      "id": "u03-f01",
      "fact": {
        "tr": "İyonik bağ, zıt yüklü iyonlar (ör. metal katyonu ile ametal anyonu) arasındaki elektrostatik çekim kuvvetidir.",
        "en": "An ionic bond is the electrostatic attraction between oppositely charged ions (e.g. a metal cation and a nonmetal anion).",
        "de": "Die Ionenbindung ist die elektrostatische Anziehung zwischen entgegengesetzt geladenen Ionen (z. B. Metallkation und Nichtmetallanion).",
        "fr": "La liaison ionique est l'attraction électrostatique entre des ions de charges opposées (par ex. un cation métallique et un anion non métallique).",
        "ru": "Ионная связь — это электростатическое притяжение между противоположно заряженными ионами (например, катионом металла и анионом неметалла).",
        "ar": "الرابطة الأيونية هي التجاذب الكهروستاتيكي بين أيونات مختلفة الشحنة (مثل كاتيون فلزي وأنيون لافلزي).",
        "zh": "离子键是带相反电荷的离子（如金属阳离子与非金属阴离子）之间的静电引力。",
        "ku": "Girêdana îyonîk hêza kişandinê ya elektrostatîk a di navbera îyonên bi barên dijber de ye (mînak katyona metal û anyona nemetal)."
      },
      "trap": {
        "tr": "İyonik bileşikler moleküllerden oluşur; NaCl'nin en küçük birimi bir NaCl molekülüdür.",
        "en": "Ionic compounds are made of molecules; the smallest unit of NaCl is an NaCl molecule.",
        "de": "Ionische Verbindungen bestehen aus Molekülen; die kleinste Einheit von NaCl ist ein NaCl-Molekül.",
        "fr": "Les composés ioniques sont formés de molécules ; la plus petite unité de NaCl est une molécule de NaCl.",
        "ru": "Ионные соединения состоят из молекул; наименьшая частица NaCl — молекула NaCl.",
        "ar": "تتكوّن المركبات الأيونية من جزيئات، وأصغر وحدة في NaCl هي جزيء NaCl.",
        "zh": "离子化合物由分子构成，NaCl 的最小单元是一个 NaCl 分子。",
        "ku": "Pêkhateyên îyonîk ji molekulan pêk tên; yekîneya herî piçûk a NaCl molekuleke NaCl e."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik bileşiklerde ayrı moleküller yoktur; çok sayıda katyon ve anyon üç boyutlu bir kristal örgüde dizilir. NaCl formülü yalnızca iyonların 1:1 oranını gösterir.",
        "en": "Ionic compounds contain no separate molecules; huge numbers of cations and anions are arranged in a three-dimensional crystal lattice. The formula NaCl only shows the 1:1 ratio of the ions.",
        "de": "Ionische Verbindungen enthalten keine einzelnen Moleküle; sehr viele Kationen und Anionen bilden ein dreidimensionales Kristallgitter. Die Formel NaCl gibt nur das Ionenverhältnis 1:1 an.",
        "fr": "Les composés ioniques ne contiennent pas de molécules distinctes ; un très grand nombre de cations et d'anions forment un réseau cristallin tridimensionnel. La formule NaCl indique seulement le rapport 1:1 des ions.",
        "ru": "В ионных соединениях нет отдельных молекул: огромное число катионов и анионов образует трёхмерную кристаллическую решётку. Формула NaCl лишь показывает соотношение ионов 1:1.",
        "ar": "لا توجد جزيئات منفصلة في المركبات الأيونية؛ بل تترتب أعداد هائلة من الأيونات الموجبة والسالبة في شبكة بلورية ثلاثية الأبعاد، والصيغة NaCl تبيّن فقط نسبة الأيونات 1:1.",
        "zh": "离子化合物中没有独立的分子，大量阳离子和阴离子排列成三维晶格。化学式 NaCl 只表示离子个数比为 1:1。",
        "ku": "Di pêkhateyên îyonîk de molekulên cuda tune ne; gelek katyon û anyon di toreke krîstalî ya sêalî de rêz dibin. Formula NaCl tenê rêjeya 1:1 a îyonan nîşan dide."
      }
    },
    {
      "id": "u03-f02",
      "fact": {
        "tr": "Kovalent bağ, atomların elektronlarını ortaklaşa kullanmasıyla oluşur ve en çok ametal atomları arasında görülür.",
        "en": "A covalent bond forms when atoms share electrons; it is found mainly between nonmetal atoms.",
        "de": "Eine kovalente Bindung entsteht, wenn Atome Elektronen gemeinsam nutzen; sie tritt vor allem zwischen Nichtmetallatomen auf.",
        "fr": "Une liaison covalente se forme lorsque des atomes mettent des électrons en commun ; on la rencontre surtout entre atomes non métalliques.",
        "ru": "Ковалентная связь образуется за счёт общих электронных пар атомов и встречается главным образом между атомами неметаллов.",
        "ar": "تتكوّن الرابطة التساهمية عندما تتشارك الذرات في الإلكترونات، وتوجد غالبًا بين ذرات اللافلزات.",
        "zh": "共价键是原子之间通过共用电子形成的，主要存在于非金属原子之间。",
        "ku": "Girêdana kovalent bi hevparkirina elektronan a atoman çêdibe û bi piranî di navbera atomên nemetal de tê dîtin."
      },
      "trap": {
        "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
        "en": "Covalent bonds are formed by the exchange of electrons.",
        "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
        "fr": "Les liaisons covalentes se forment par échange d'électrons.",
        "ru": "Ковалентная связь образуется за счёт отдачи и присоединения электронов.",
        "ar": "تتكوّن الرابطة التساهمية بانتقال الإلكترونات من ذرة إلى أخرى.",
        "zh": "共价键是通过电子得失形成的。",
        "ku": "Girêdana kovalent bi danûstandina elektronan çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron alışverişi iyonik bağın özelliğidir; kovalent bağda ametal atomları elektronlarını ortaklaşa kullanır ve hiçbir atom elektronunu tamamen vermez.",
        "en": "Electron transfer is the feature of ionic bonding; in a covalent bond non-metal atoms share electrons and neither atom gives its electrons away completely.",
        "de": "Elektronenübertragung kennzeichnet die Ionenbindung; bei der kovalenten Bindung teilen sich Nichtmetallatome Elektronen, kein Atom gibt seine Elektronen vollständig ab.",
        "fr": "Le transfert d'électrons caractérise la liaison ionique ; dans une liaison covalente, les atomes non métalliques mettent des électrons en commun et aucun ne les cède complètement.",
        "ru": "Отдача и присоединение электронов характерны для ионной связи; при ковалентной связи атомы неметаллов образуют общие электронные пары, и ни один атом не отдаёт электроны полностью.",
        "ar": "انتقال الإلكترونات سمة الرابطة الأيونية؛ أما في الرابطة التساهمية فتتشارك ذرات اللافلزات الإلكترونات ولا تفقد أيّ ذرة إلكتروناتها كلياً.",
        "zh": "电子转移是离子键的特征；共价键中非金属原子共用电子，没有哪个原子把电子完全给出。",
        "ku": "Danûstandina elektronan taybetmendiya girêdana îyonîk e; di girêdana kovalent de atomên nemetal elektronan bi hev re bi kar tînin û tu atom elektronên xwe bi tevahî nade."
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
        "ru": "Водородная связь — это ковалентная связь между молекулами H2.",
        "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
        "zh": "氢键是 H2 分子之间的共价键。",
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
        "ku": "Girêdana hîdrojenê ne girêdana kovalent a hundirê molekulê ye, têkiliyeke qels a navbera molekulan e û tenê bi atoma H ya bi F, O an N ve girêdayî çêdibe; di navbera molekulên H2 yên nepolar de tenê hêzên London hene."
      }
    },
    {
      "id": "u03-f04",
      "fact": {
        "tr": "London kuvvetleri anlık (indüklenmiş) dipollerden kaynaklanır ve tüm taneciklerde bulunur.",
        "en": "London forces arise from instantaneous (induced) dipoles and are present in all particles.",
        "de": "London-Kräfte entstehen durch momentane (induzierte) Dipole und sind in allen Teilchen vorhanden.",
        "fr": "Les forces de London proviennent de dipôles instantanés (induits) et sont présentes dans toutes les particules.",
        "ru": "Лондоновские (дисперсионные) силы возникают за счёт мгновенных (наведённых) диполей и действуют между любыми частицами.",
        "ar": "تنشأ قوى لندن من ثنائيات القطب اللحظية (المستحثة)، وتوجد في جميع الدقائق.",
        "zh": "色散力（伦敦力）源于瞬时（诱导）偶极，存在于所有微粒之间。",
        "ku": "Hêzên London ji dîpolên demkî (înduksiyonî) çêdibin û di hemû perçeyan de hene."
      },
      "trap": {
        "tr": "London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.",
        "en": "London forces do not exist in polar molecules with permanent dipole moments.",
        "de": "In polaren Molekülen mit permanenten Dipolmomenten gibt es keine Londoner Kräfte.",
        "fr": "Les forces de London n'existent pas dans les molécules polaires avec des moments dipolaires permanents.",
        "ru": "Лондоновские силы не действуют между полярными молекулами, имеющими постоянный дипольный момент.",
        "ar": "لا توجد قوى لندن في الجزيئات القطبية التي لها عزم ثنائي قطب دائم.",
        "zh": "具有永久偶极矩的极性分子之间不存在色散力。",
        "ku": "Hêzên London di molekulên polar ên xwedî momenta dîpolê ya daîmî de tune ne."
      },
      "whyTrapIsFalse": {
        "tr": "Anlık dipoller elektron bulutu olan her tanecikte oluşabildiğinden London kuvvetleri polar moleküllerde de vardır; polar moleküllerde bunlara dipol-dipol etkileşimleri eklenir.",
        "en": "Instantaneous dipoles can form in any particle that has an electron cloud, so London forces exist in polar molecules too; in polar molecules dipole–dipole interactions are added to them.",
        "de": "Momentane Dipole können in jedem Teilchen mit Elektronenwolke entstehen, daher gibt es London-Kräfte auch bei polaren Molekülen; dort kommen Dipol-Dipol-Wechselwirkungen hinzu.",
        "fr": "Des dipôles instantanés peuvent apparaître dans toute particule possédant un nuage électronique : les forces de London existent donc aussi dans les molécules polaires, auxquelles s'ajoutent les interactions dipôle-dipôle.",
        "ru": "Мгновенные диполи возникают в любой частице, имеющей электронное облако, поэтому лондоновские силы действуют и между полярными молекулами; у полярных молекул к ним добавляются диполь-дипольные взаимодействия.",
        "ar": "تتكوّن ثنائيات القطب اللحظية في كل دقيقة لها سحابة إلكترونية، لذا توجد قوى لندن في الجزيئات القطبية أيضاً، وتُضاف إليها فيها تآثرات ثنائي القطب–ثنائي القطب.",
        "zh": "任何具有电子云的微粒都能产生瞬时偶极，所以极性分子之间也存在色散力，只是还另外存在偶极-偶极作用。",
        "ku": "Ji ber ku dîpolên demkî dikarin di her perçeyekî xwedî ewrê elektronan de çêbibin, hêzên London di molekulên polar de jî hene; di molekulên polar de têkiliyên dîpol-dîpol jî li wan zêde dibin."
      }
    },
    {
      "id": "u03-f05",
      "fact": {
        "tr": "Elektron sayısı arttıkça polarize olabilirlik artar ve London çekim kuvveti güçlenir.",
        "en": "As the number of electrons increases, polarizability increases and the London attraction force becomes stronger.",
        "de": "Mit zunehmender Elektronenzahl nimmt die Polarisierbarkeit zu und die Londoner Anziehungskraft wird stärker.",
        "fr": "À mesure que le nombre d’électrons augmente, la polarisabilité augmente et la force d’attraction de London devient plus forte.",
        "ru": "С увеличением числа электронов растёт поляризуемость и усиливаются лондоновские силы притяжения.",
        "ar": "كلما زاد عدد الإلكترونات زادت قابلية الاستقطاب وقويت قوى جذب لندن.",
        "zh": "电子数越多，极化率越大，色散力越强。",
        "ku": "Her ku hejmara elektronan zêde dibe, polarîzebûn zêde dibe û hêza kişandinê ya London xurttir dibe."
      },
      "trap": {
        "tr": "London kuvveti moleküldeki elektron sayısı azaldıkça artar.",
        "en": "London force increases as the number of electrons in the molecule decreases.",
        "de": "Die London-Kraft nimmt zu, wenn die Anzahl der Elektronen im Molekül abnimmt.",
        "fr": "La force de London augmente à mesure que le nombre d’électrons dans la molécule diminue.",
        "ru": "Лондоновские силы усиливаются с уменьшением числа электронов в молекуле.",
        "ar": "تزداد قوى لندن كلما قلّ عدد الإلكترونات في الجزيء.",
        "zh": "分子中电子数越少，色散力越强。",
        "ku": "Hêza London her ku hejmara elektronên molekulê kêm dibe, zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron sayısı azaldıkça elektron bulutu küçülür ve daha zor kutuplanır; bu yüzden London kuvveti artmaz, azalır. Örneğin He'nin kaynama noktası Xe'ninkinden çok düşüktür.",
        "en": "With fewer electrons the electron cloud is smaller and harder to polarise, so London forces decrease rather than increase. For example, the boiling point of He is far lower than that of Xe.",
        "de": "Mit weniger Elektronen ist die Elektronenwolke kleiner und schwerer polarisierbar, daher nehmen London-Kräfte ab statt zu. Der Siedepunkt von He liegt z. B. weit unter dem von Xe.",
        "fr": "Avec moins d'électrons, le nuage électronique est plus petit et moins polarisable : les forces de London diminuent au lieu d'augmenter. Par exemple, He bout à une température bien plus basse que Xe.",
        "ru": "При меньшем числе электронов электронное облако меньше и хуже поляризуется, поэтому лондоновские силы не растут, а ослабевают. Например, температура кипения He намного ниже, чем у Xe.",
        "ar": "كلما قلّ عدد الإلكترونات صغرت السحابة الإلكترونية وصعب استقطابها، فتضعف قوى لندن بدلاً من أن تزداد؛ فمثلاً درجة غليان He أقل بكثير من درجة غليان Xe.",
        "zh": "电子数越少，电子云越小，越难被极化，所以色散力不是增强而是减弱。例如 He 的沸点远低于 Xe。",
        "ku": "Her ku hejmara elektronan kêm dibe, ewrê elektronan piçûk dibe û bi zehmetî polarîze dibe; loma hêza London zêde nabe, kêm dibe. Mînak, xala kelînê ya He ji ya Xe gelek nizmtir e."
      }
    },
    {
      "id": "u03-f06",
      "fact": {
        "tr": "İyonik katılar katı hâlde elektriği iletmez; sıvı hâlde ve sulu çözeltilerinde serbest iyonlarla iletir.",
        "en": "Ionic solids do not conduct electricity in the solid state; in the molten state and in aqueous solution they conduct by means of free ions.",
        "de": "Ionische Feststoffe leiten im festen Zustand keinen Strom; in der Schmelze und in wässriger Lösung leiten sie über frei bewegliche Ionen.",
        "fr": "Les solides ioniques ne conduisent pas l'électricité à l'état solide ; à l'état fondu et en solution aqueuse, ils conduisent grâce aux ions libres.",
        "ru": "Ионные кристаллы в твёрдом состоянии не проводят электрический ток; в расплаве и в водном растворе они проводят ток за счёт свободных ионов.",
        "ar": "المواد الصلبة الأيونية لا توصل الكهرباء في الحالة الصلبة؛ وتوصلها في الحالة السائلة (المنصهرة) وفي المحاليل المائية بواسطة الأيونات الحرة.",
        "zh": "离子晶体在固态时不导电，在熔融状态或水溶液中依靠自由移动的离子导电。",
        "ku": "Madeyên hişk ên îyonîk di rewşa hişk de elektrîkê naguhezînin; di rewşa şile (helîyayî) û di çareseriyên avî de bi îyonên azad elektrîkê diguhezînin."
      },
      "trap": {
        "tr": "Yemek tuzu (NaCl) katı kristal hâlde elektrik akımını mükemmel iletir.",
        "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
        "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
        "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
        "ru": "Поваренная соль (NaCl) в твёрдом кристаллическом состоянии прекрасно проводит электрический ток.",
        "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي توصيلاً ممتازاً وهو في حالته البلورية الصلبة.",
        "zh": "食盐(NaCl)晶体在固态时导电性极好。",
        "ku": "Xwêya xwarinê (NaCl) di rewşa krîstala hişk de herikîna elektrîkê bi awayekî bêkêmasî diguhezîne."
      },
      "whyTrapIsFalse": {
        "tr": "Katı NaCl'de iyonlar kristal örgüde sabit konumlarda titreşir, serbestçe hareket edemez; iyonlar ancak eritildiğinde veya suda çözündüğünde hareketlenip akımı iletir.",
        "en": "In solid NaCl the ions vibrate in fixed positions in the lattice and cannot move freely; only when it is melted or dissolved in water do the ions move and carry current.",
        "de": "In festem NaCl schwingen die Ionen an festen Gitterplätzen und können sich nicht frei bewegen; erst in der Schmelze oder in wässriger Lösung werden sie beweglich und leiten den Strom.",
        "fr": "Dans NaCl solide, les ions vibrent à des positions fixes du réseau et ne peuvent pas se déplacer ; ce n'est qu'à l'état fondu ou en solution aqueuse qu'ils deviennent mobiles et conduisent le courant.",
        "ru": "В твёрдом NaCl ионы колеблются в узлах решётки и не могут свободно перемещаться; только в расплаве или водном растворе ионы становятся подвижными и проводят ток.",
        "ar": "في NaCl الصلب تهتز الأيونات في مواقع ثابتة من الشبكة ولا تتحرك بحرية؛ ولا تصبح متحركة وتوصل التيار إلا عند الصهر أو الذوبان في الماء.",
        "zh": "固态 NaCl 中离子只在晶格的固定位置振动，不能自由移动；只有熔融或溶于水时离子才能移动并导电。",
        "ku": "Di NaCl ya hişk de îyon di cihên sabît ên tora krîstalî de dilerizin û nikarin bi azadî bilivin; îyon tenê dema NaCl dibe şile an di avê de dihele dilivin û herikînê diguhezînin."
      }
    },
    {
      "id": "u03-f07",
      "fact": {
        "tr": "Metalik bağ, serbest değerlik elektronlarının oluşturduğu elektron denizi ile pozitif metal iyonları arasındadır.",
        "en": "The metallic bond is the attraction between the electron sea formed by free valence electrons and the positive metal ions.",
        "de": "Die metallische Bindung besteht zwischen dem aus freien Valenzelektronen gebildeten Elektronensee und den positiven Metallionen.",
        "fr": "La liaison métallique s'établit entre la mer d'électrons, formée par les électrons de valence libres, et les ions métalliques positifs.",
        "ru": "Металлическая связь возникает между положительными ионами металла и «электронным морем», которое образуют свободные валентные электроны.",
        "ar": "الرابطة الفلزية هي التجاذب بين بحر الإلكترونات المتكوّن من إلكترونات التكافؤ الحرة وأيونات الفلز الموجبة.",
        "zh": "金属键是自由价电子形成的“电子海”与金属阳离子之间的作用。",
        "ku": "Girêdana metalîk di navbera deryaya elektronan a ku ji elektronên valansê yên azad pêk tê û îyonên metal ên erênî de ye."
      },
      "trap": {
        "tr": "Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.",
        "en": "Metallic bonds are established by sharing electrons between nonmetals.",
        "de": "Metallische Bindungen entstehen durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallen.",
        "fr": "Les liaisons métalliques sont établies en partageant des électrons entre des non-métaux.",
        "ru": "Металлическая связь образуется за счёт общих электронов между атомами неметаллов.",
        "ar": "تنشأ الرابطة الفلزية من تشارك الإلكترونات بين ذرات اللافلزات.",
        "zh": "金属键是由非金属原子之间共用电子形成的。",
        "ku": "Girêdana metalîk bi hevparkirina elektronan a navbera nemetalan çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "Ametaller arasındaki elektron ortaklaşması kovalent bağdır; metalik bağ metal atomları arasında, pozitif metal iyonları ile serbest elektron denizi arasında oluşur.",
        "en": "Electron sharing between non-metals is covalent bonding; metallic bonding forms between metal atoms, between positive metal ions and a sea of free electrons.",
        "de": "Elektronenteilung zwischen Nichtmetallen ist eine kovalente Bindung; die Metallbindung besteht zwischen Metallatomen, zwischen positiven Metallionen und einem freien Elektronensee.",
        "fr": "La mise en commun d'électrons entre non-métaux est une liaison covalente ; la liaison métallique se forme entre atomes métalliques, entre les ions métalliques positifs et une mer d'électrons libres.",
        "ru": "Обобществление электронов между неметаллами — это ковалентная связь; металлическая связь возникает между атомами металлов — между положительными ионами металла и «морем» свободных электронов.",
        "ar": "تشارُك الإلكترونات بين اللافلزات هو الرابطة التساهمية؛ أما الرابطة الفلزية فتتكون بين ذرات الفلزات، أي بين أيونات الفلز الموجبة وبحر الإلكترونات الحرة.",
        "zh": "非金属之间共用电子形成的是共价键；金属键存在于金属原子之间，即金属阳离子与自由电子“海”之间。",
        "ku": "Hevparkirina elektronan a navbera nemetalan girêdana kovalent e; girêdana metalîk di navbera atomên metal de, ango di navbera îyonên metal ên erênî û deryaya elektronên azad de çêdibe."
      }
    },
    {
      "id": "u03-f08",
      "fact": {
        "tr": "Kovalent bağda elektronegatiflik farkı arttıkça bağın polar karakteri ve iyonik karakteri artar.",
        "en": "As the electronegativity difference in a covalent bond increases, the polar character and ionic character of the bond increases.",
        "de": "Mit zunehmender Elektronegativitätsdifferenz in einer kovalenten Bindung nimmt der polare und ionische Charakter der Bindung zu.",
        "fr": "À mesure que la différence d’électronégativité dans une liaison covalente augmente, le caractère polaire et le caractère ionique de la liaison augmentent.",
        "ru": "Чем больше разность электроотрицательностей атомов в ковалентной связи, тем выше её полярность и степень ионности.",
        "ar": "كلما زاد فرق السالبية الكهربائية في الرابطة التساهمية زادت قطبية الرابطة وطابعها الأيوني.",
        "zh": "共价键中成键原子的电负性差越大，键的极性和离子性越强。",
        "ku": "Di girêdana kovalent de her ku cudahiya elektronegatîfiyê zêde dibe, taybetmendiya polar û taybetmendiya îyonîk a girêdanê zêde dibe."
      },
      "trap": {
        "tr": "Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.",
        "en": "The bond between two atoms with equal electronegativities is polar.",
        "de": "Die Bindung zwischen zwei Atomen mit gleicher Elektronegativität ist polar.",
        "fr": "La liaison entre deux atomes d’électronégativité égale est polaire.",
        "ru": "Связь между двумя атомами с одинаковой электроотрицательностью полярна.",
        "ar": "الرابطة بين ذرتين متساويتين في السالبية الكهربائية تكون قطبية.",
        "zh": "电负性相等的两个原子之间形成的是极性键。",
        "ku": "Girêdana navbera du atomên ku elektronegatîfiya wan wekhev e polar e."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronegatiflikleri eşit atomlar bağ elektronlarını eşit kuvvetle çeker, elektron yoğunluğu bir uca kaymaz; bu nedenle bağ polar değil, apolardır.",
        "en": "Atoms of equal electronegativity pull the bonding electrons equally, so the electron density does not shift to one end; the bond is therefore non-polar, not polar.",
        "de": "Atome gleicher Elektronegativität ziehen die Bindungselektronen gleich stark an, die Elektronendichte verschiebt sich nicht; die Bindung ist daher unpolar, nicht polar.",
        "fr": "Des atomes de même électronégativité attirent également les électrons de liaison ; la densité électronique ne se déplace pas vers un côté, la liaison est donc apolaire, pas polaire.",
        "ru": "Атомы с одинаковой электроотрицательностью притягивают электроны связи одинаково, электронная плотность не смещается; поэтому связь неполярная, а не полярная.",
        "ar": "الذرات المتساوية في السالبية الكهربائية تجذب إلكترونات الرابطة بالقوة نفسها فلا تنزاح الكثافة الإلكترونية نحو أحد الطرفين، لذا تكون الرابطة غير قطبية.",
        "zh": "电负性相等的原子对成键电子的吸引相同，电子密度不偏向任何一方，所以该键是非极性键而不是极性键。",
        "ku": "Atomên ku elektronegatîfiya wan wekhev e elektronên girêdanê bi heman hêzê dikişînin û çiriya elektronan ber bi aliyekî naçe; loma girêdan ne polar, nepolar e."
      }
    },
    {
      "id": "u03-f09",
      "fact": {
        "tr": "Apolar kovalent bağ aynı cins iki ametal atomu arasında (örn. O2, N2, H2) oluşur.",
        "en": "Nonpolar covalent bonds form between two nonmetal atoms of the same type (e.g. O2, N2, H2).",
        "de": "Zwischen zwei Nichtmetallatomen desselben Typs (z. B. O2, N2, H2) bilden sich unpolare kovalente Bindungen.",
        "fr": "Des liaisons covalentes non polaires se forment entre deux atomes non métalliques du même type (par exemple O2, N2, H2).",
        "ru": "Ковалентная неполярная связь образуется между двумя одинаковыми атомами неметалла (например, в O2, N2, H2).",
        "ar": "تتكون الروابط التساهمية غير القطبية بين ذرتين لافلزيتين من النوع نفسه (مثل O2، N2، H2).",
        "zh": "非极性共价键形成于两个同种非金属原子之间(如 O2、N2、H2)。",
        "ku": "Girêdanên kovalent ên nepolar di navbera du atomên nemetal ên ji heman cureyê de çêdibin (mînak O2, N2, H2)."
      },
      "trap": {
        "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
        "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
        "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
        "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
        "ru": "В молекуле HCl связь ковалентная неполярная.",
        "ar": "الرابطة في جزيء HCl رابطة تساهمية غير قطبية.",
        "zh": "HCl 分子中的键是非极性共价键。",
        "ku": "Girêdana di molekula HCl de girêdaneke kovalent a nepolar e."
      },
      "whyTrapIsFalse": {
        "tr": "H ve Cl'nin elektronegatiflikleri farklıdır; bağ elektronları Cl'ye daha yakın bulunduğundan H–Cl bağı apolar değil, polar kovalenttir.",
        "en": "H and Cl have different electronegativities; the bonding electrons lie closer to Cl, so the H–Cl bond is polar covalent, not non-polar.",
        "de": "H und Cl haben unterschiedliche Elektronegativitäten; die Bindungselektronen liegen näher am Cl, die H–Cl-Bindung ist daher polar und nicht unpolar.",
        "fr": "H et Cl ont des électronégativités différentes ; les électrons de liaison sont plus proches de Cl, la liaison H–Cl est donc covalente polaire et non apolaire.",
        "ru": "У H и Cl разная электроотрицательность; электроны связи смещены к Cl, поэтому связь H–Cl ковалентная полярная, а не неполярная.",
        "ar": "السالبية الكهربائية لـ H وCl مختلفة، وإلكترونات الرابطة أقرب إلى Cl، لذا فالرابطة H–Cl تساهمية قطبية لا غير قطبية.",
        "zh": "H 和 Cl 的电负性不同，成键电子偏向 Cl，所以 H–Cl 键是极性共价键，而不是非极性键。",
        "ku": "Elektronegatîfiya H û Cl cuda ye; elektronên girêdanê nêzîkî Cl ne, loma girêdana H–Cl ne nepolar e, kovalenta polar e."
      }
    },
    {
      "id": "u03-f10",
      "fact": {
        "tr": "Suyun kaynama noktasının H2S'den belirgin yüksek olması molekülleri arasındaki hidrojen bağları nedeniyledir.",
        "en": "The boiling point of water is significantly higher than H2S due to the hydrogen bonds between its molecules.",
        "de": "Der Siedepunkt von Wasser liegt aufgrund der Wasserstoffbrückenbindungen zwischen seinen Molekülen deutlich höher als der von H2S.",
        "fr": "Le point d’ébullition de l’eau est nettement plus élevé que celui du H2S en raison des liaisons hydrogène entre ses molécules.",
        "ru": "Температура кипения воды значительно выше, чем у H2S, из-за водородных связей между её молекулами.",
        "ar": "درجة غليان الماء أعلى بكثير من درجة غليان كبريتيد الهيدروجين (H2S) بسبب الروابط الهيدروجينية بين جزيئاته.",
        "zh": "由于分子间存在氢键，水的沸点明显高于 H2S。",
        "ku": "Ji ber girêdanên hîdrojenê yên navbera molekulên avê, xala kelînê ya avê bi awayekî berçav ji ya H2S bilindtir e."
      },
      "trap": {
        "tr": "Suyun yüksek kaynama noktası molekül kütlesinin H2S'den büyük olmasındandır.",
        "en": "The high boiling point of water is due to its molecular mass being greater than H2S.",
        "de": "Der hohe Siedepunkt von Wasser ist darauf zurückzuführen, dass seine Molekülmasse größer als die von H2S ist.",
        "fr": "Le point d’ébullition élevé de l’eau est dû à sa masse moléculaire supérieure à celle du H2S.",
        "ru": "Высокая температура кипения воды объясняется тем, что её молекулярная масса больше, чем у H2S.",
        "ar": "يعود ارتفاع درجة غليان الماء إلى أن كتلته الجزيئية أكبر من كتلة كبريتيد الهيدروجين (H2S).",
        "zh": "水的沸点高是因为其相对分子质量比 H2S 大。",
        "ku": "Xala kelînê ya avê ji ber wê bilind e ku girseya wê ya molekulî ji ya H2S mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "H2O'nun mol kütlesi (18 g/mol) H2S'ninkinden (34 g/mol) küçüktür; suyun kaynama noktasının yüksek olmasının nedeni kütle değil, moleküller arası hidrojen bağlarıdır.",
        "en": "The molar mass of H2O (18 g/mol) is smaller than that of H2S (34 g/mol); water's high boiling point is due not to mass but to hydrogen bonds between its molecules.",
        "de": "Die molare Masse von H2O (18 g/mol) ist kleiner als die von H2S (34 g/mol); der hohe Siedepunkt des Wassers beruht nicht auf der Masse, sondern auf Wasserstoffbrücken.",
        "fr": "La masse molaire de H2O (18 g/mol) est inférieure à celle de H2S (34 g/mol) ; le point d'ébullition élevé de l'eau est dû non à la masse mais aux liaisons hydrogène entre molécules.",
        "ru": "Молярная масса H2O (18 г/моль) меньше, чем у H2S (34 г/моль); высокая температура кипения воды обусловлена не массой, а водородными связями между молекулами.",
        "ar": "الكتلة المولية لـ H2O (18 g/mol) أصغر من كتلة H2S المولية (34 g/mol)؛ فارتفاع درجة غليان الماء لا يعود إلى الكتلة بل إلى الروابط الهيدروجينية بين جزيئاته.",
        "zh": "H2O 的摩尔质量(18 g/mol)小于 H2S(34 g/mol)；水沸点高不是因为质量大，而是因为分子间存在氢键。",
        "ku": "Girseya molî ya H2O (18 g/mol) ji ya H2S (34 g/mol) piçûktir e; sedema bilindbûna xala kelînê ya avê ne girse ye, girêdanên hîdrojenê yên navbera molekulan in."
      }
    },
    {
      "id": "u03-f11",
      "fact": {
        "tr": "Lewis nokta gösteriminde değerlik elektronları element sembolü çevresine noktalarla yerleştirilir.",
        "en": "In Lewis dot notation, valence electrons are placed as dots around the element symbol.",
        "de": "In der Lewis-Punkt-Notation werden Valenzelektronen als Punkte um das Elementsymbol platziert.",
        "fr": "Dans la notation par points de Lewis, les électrons de valence sont placés sous forme de points autour du symbole de l'élément.",
        "ru": "В электронно-точечной формуле Льюиса валентные электроны изображают точками вокруг символа элемента.",
        "ar": "في تمثيل لويس النقطي توضع إلكترونات التكافؤ نقاطاً حول رمز العنصر.",
        "zh": "在路易斯电子式中，价电子用小点标在元素符号周围。",
        "ku": "Di nîşandana xalî ya Lewis de elektronên valansê wekî xal li dora sembola elementê tên danîn."
      },
      "trap": {
        "tr": "Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.",
        "en": "In the Lewis symbol, the neutrons in the nucleus are drawn around the symbol.",
        "de": "Im Lewis-Symbol sind die Neutronen im Kern um das Symbol herum gezeichnet.",
        "fr": "Dans le symbole de Lewis, les neutrons du noyau sont dessinés autour du symbole.",
        "ru": "В символе Льюиса вокруг символа элемента изображают нейтроны ядра.",
        "ar": "في رمز لويس تُرسم نيوترونات النواة حول الرمز.",
        "zh": "在路易斯符号中，原子核内的中子画在元素符号周围。",
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
        "ku": "Di sembola Lewis de tenê elektronên valansê wekî xal tên nîşandan; notron di navokê de ne û beşdarî girêdanê nabin, loma nayên nîşandan."
      }
    },
    {
      "id": "u03-f12",
      "fact": {
        "tr": "Dipol-dipol etkileşimi kalıcı dipollere sahip polar moleküller arasında gerçekleşir.",
        "en": "Dipole-dipole interaction occurs between polar molecules with permanent dipoles.",
        "de": "Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen mit permanenten Dipolen auf.",
        "fr": "L'interaction dipôle-dipôle se produit entre des molécules polaires avec des dipôles permanents.",
        "ru": "Диполь-дипольное взаимодействие действует между полярными молекулами, имеющими постоянные диполи.",
        "ar": "يحدث تآثر ثنائي القطب–ثنائي القطب بين الجزيئات القطبية ذات ثنائيات القطب الدائمة.",
        "zh": "偶极-偶极作用存在于具有永久偶极的极性分子之间。",
        "ku": "Têkiliya dîpol-dîpol di navbera molekulên polar ên xwedî dîpolên daîmî de çêdibe."
      },
      "trap": {
        "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
        "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
        "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
        "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
        "ru": "Диполь-дипольное взаимодействие — основной тип взаимодействия между атомами благородных газов.",
        "ar": "تآثر ثنائي القطب–ثنائي القطب هو القوة الأساسية بين ذرات الغازات النبيلة.",
        "zh": "偶极-偶极作用是稀有气体原子之间的主要作用力。",
        "ku": "Têkiliya dîpol-dîpol hêza bingehîn e ku di navbera atomên gazên esîl de tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Soy gaz atomları apolardır ve kalıcı dipolleri yoktur; aralarında dipol-dipol değil, yalnızca London kuvvetleri bulunur.",
        "en": "Noble-gas atoms are non-polar and have no permanent dipoles; between them there are only London forces, not dipole–dipole interactions.",
        "de": "Edelgasatome sind unpolar und haben keine permanenten Dipole; zwischen ihnen wirken nur London-Kräfte, keine Dipol-Dipol-Wechselwirkungen.",
        "fr": "Les atomes de gaz nobles sont apolaires et n'ont pas de dipôle permanent ; entre eux il n'y a que des forces de London, pas d'interactions dipôle-dipôle.",
        "ru": "Атомы благородных газов неполярны и не имеют постоянных диполей; между ними действуют только лондоновские силы, а не диполь-дипольные.",
        "ar": "ذرات الغازات النبيلة غير قطبية وليس لها ثنائيات قطب دائمة، فلا يوجد بينها إلا قوى لندن وليس تآثر ثنائي القطب–ثنائي القطب.",
        "zh": "稀有气体原子是非极性的，没有永久偶极，它们之间只有色散力，而没有偶极-偶极作用。",
        "ku": "Atomên gazên esîl nepolar in û dîpolên wan ên daîmî tune ne; di navbera wan de ne têkiliya dîpol-dîpol, tenê hêzên London hene."
      }
    },
    {
      "id": "u03-f13",
      "fact": {
        "tr": "Bağ kırılması endotermik (enerji alan), bağ oluşumu ekzotermik (enerji veren) süreçtir.",
        "en": "Bond breaking is an endothermic (energy-consuming) process, while bond formation is an exothermic (energy-giving) process.",
        "de": "Der Bindungsbruch ist ein endothermer (energieverbrauchender) Prozess, während die Bindungsbildung ein exothermer (energiespendender) Prozess ist.",
        "fr": "La rupture des liaisons est un processus endothermique (consommateur d'énergie), tandis que la formation de liaisons est un processus exothermique (donneur d'énergie).",
        "ru": "Разрыв связи — эндотермический процесс (энергия поглощается), а образование связи — экзотермический (энергия выделяется).",
        "ar": "كسر الروابط عملية ماصة للحرارة (تمتص الطاقة)، أما تكوين الروابط فعملية طاردة للحرارة (تُطلق الطاقة).",
        "zh": "断键是吸热（吸收能量）过程，成键是放热（释放能量）过程。",
        "ku": "Şikandina girêdanê pêvajoyeke endotermîk (enerjiyê distîne) ye, çêbûna girêdanê jî pêvajoyeke ekzotermîk (enerjiyê dide) ye."
      },
      "trap": {
        "tr": "Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.",
        "en": "As the chemical bond is broken, a large amount of heat is always released into the environment.",
        "de": "Beim Aufbrechen der chemischen Bindung wird stets eine große Wärmemenge an die Umgebung abgegeben.",
        "fr": "Lorsque la liaison chimique est rompue, une grande quantité de chaleur est toujours libérée dans l’environnement.",
        "ru": "При разрыве химической связи в окружающую среду всегда выделяется большое количество теплоты.",
        "ar": "عند كسر الرابطة الكيميائية تنطلق دائماً كمية كبيرة من الحرارة إلى الوسط المحيط.",
        "zh": "化学键断裂时总是向环境放出大量的热。",
        "ku": "Dema girêdana kîmyewî dişike, her tim germeke zêde li derdorê belav dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Bir bağı kırmak için atomlar arasındaki çekimi yenmek, yani dışarıdan enerji vermek gerekir; enerji bağ kırılırken değil, bağ oluşurken açığa çıkar.",
        "en": "Breaking a bond means overcoming the attraction between atoms, which requires energy input; energy is released when bonds form, not when they break.",
        "de": "Um eine Bindung zu spalten, muss die Anziehung zwischen den Atomen überwunden, also Energie zugeführt werden; Energie wird bei der Bindungsbildung frei, nicht bei der Spaltung.",
        "fr": "Rompre une liaison exige de vaincre l'attraction entre les atomes, donc de fournir de l'énergie ; l'énergie est libérée lors de la formation des liaisons, pas lors de leur rupture.",
        "ru": "Чтобы разорвать связь, нужно преодолеть притяжение атомов, то есть затратить энергию; энергия выделяется при образовании связей, а не при их разрыве.",
        "ar": "يتطلب كسر الرابطة التغلب على التجاذب بين الذرات، أي تزويدها بطاقة؛ وتنطلق الطاقة عند تكوّن الروابط لا عند كسرها.",
        "zh": "断开化学键需要克服原子间的吸引，即必须吸收能量；能量是在成键时放出的，而不是在断键时。",
        "ku": "Ji bo şikandina girêdanekê divê kişandina navbera atoman were derbaskirin, ango ji derve enerjî were dayîn; enerjî ne dema girêdan dişike, dema girêdan çêdibe derdikeve."
      }
    },
    {
      "id": "u03-f14",
      "fact": {
        "tr": "Molekül içi kovalent bağlar güçlü etkileşim, moleküller arası van der Waals zayıf etkileşimdir.",
        "en": "Intramolecular covalent bonds are strong interactions and intermolecular van der Waals interactions are weak.",
        "de": "Intramolekulare kovalente Bindungen sind starke Wechselwirkungen und intermolekulare Van-der-Waals-Wechselwirkungen sind schwach.",
        "fr": "Les liaisons covalentes intramoléculaires sont des interactions fortes et les interactions intermoléculaires de Van der Waals sont faibles.",
        "ru": "Внутримолекулярные ковалентные связи — сильные взаимодействия, а межмолекулярные ван-дер-ваальсовы силы — слабые.",
        "ar": "الروابط التساهمية داخل الجزيء تآثرات قوية، أما قوى فان در فالس بين الجزيئات فتآثرات ضعيفة.",
        "zh": "分子内的共价键是强相互作用，分子间的范德华力是弱相互作用。",
        "ku": "Girêdanên kovalent ên hundirmolekulî têkiliyên xurt in, têkiliyên van der Waals ên navmolekulî jî qels in."
      },
      "trap": {
        "tr": "Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.",
        "en": "During the boiling of the substance, intramolecular covalent bonds are broken down.",
        "de": "Beim Sieden der Substanz werden intramolekulare kovalente Bindungen abgebaut.",
        "fr": "Lors de l'ébullition de la substance, les liaisons covalentes intramoléculaires sont rompues.",
        "ru": "При кипении вещества разрушаются внутримолекулярные ковалентные связи.",
        "ar": "في أثناء غليان المادة تتكسر الروابط التساهمية داخل الجزيئات.",
        "zh": "物质沸腾时，分子内的共价键被破坏。",
        "ku": "Di dema kelîna madeyê de girêdanên kovalent ên hundirmolekulî dişikin."
      },
      "whyTrapIsFalse": {
        "tr": "Kaynama fiziksel bir değişimdir: moleküller arası zayıf etkileşimler yenilir, molekül içi kovalent bağlar sağlam kalır. Su buharı da H2O moleküllerinden oluşur.",
        "en": "Boiling is a physical change: the weak intermolecular interactions are overcome while the covalent bonds inside the molecules stay intact. Steam is still made of H2O molecules.",
        "de": "Sieden ist eine physikalische Veränderung: Die schwachen zwischenmolekularen Wechselwirkungen werden überwunden, die kovalenten Bindungen im Molekül bleiben erhalten. Wasserdampf besteht weiterhin aus H2O-Molekülen.",
        "fr": "L'ébullition est une transformation physique : les interactions intermoléculaires faibles sont rompues, les liaisons covalentes internes restent intactes. La vapeur d'eau est toujours formée de molécules H2O.",
        "ru": "Кипение — физическое явление: преодолеваются слабые межмолекулярные взаимодействия, а ковалентные связи внутри молекул сохраняются. Водяной пар тоже состоит из молекул H2O.",
        "ar": "الغليان تغيّر فيزيائي: يُتغلَّب على التآثرات الضعيفة بين الجزيئات وتبقى الروابط التساهمية داخل الجزيئات سليمة، فبخار الماء يتكوّن أيضاً من جزيئات H2O.",
        "zh": "沸腾是物理变化：克服的是分子间的弱相互作用，分子内的共价键保持不变。水蒸气仍由 H2O 分子构成。",
        "ku": "Kelîn guherîneke fîzîkî ye: têkiliyên qels ên navmolekulî tên derbaskirin, girêdanên kovalent ên hundirmolekulî saxlem dimînin. Buhara avê jî ji molekulên H2O pêk tê."
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
        "ku": "Ku metal dikarin bibin têl û pel, bi modela deryaya elektronan tê ravekirin: qatên atoman bişemitin jî, deryaya elektronan îyonên metal bi hev re digire."
      },
      "trap": {
        "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha hâline getirilebilir.",
        "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
        "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
        "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
        "ru": "Ионные кристаллы при ударе молотком можно расплющить в листы и вытянуть в проволоку.",
        "ar": "يمكن سحب البلورات الأيونية أسلاكاً وطرقها صفائح عند ضربها بالمطرقة.",
        "zh": "离子晶体受锤击时可以被拉成丝、压成片。",
        "ku": "Krîstalên îyonîk dema bi çakûçê li wan tê xistin, dikarin bibin têl û pel."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik kristale vurulduğunda katmanlar kayar ve aynı yüklü iyonlar karşı karşıya gelir; oluşan itme kristali kırar. Tel ve levha hâline gelebilme metallere özgüdür.",
        "en": "When an ionic crystal is struck, the layers slide and ions of the same charge come face to face; the resulting repulsion shatters the crystal. Being drawn into wires and sheets is typical of metals.",
        "de": "Schlägt man auf einen Ionenkristall, verschieben sich die Schichten und gleich geladene Ionen stehen sich gegenüber; die Abstoßung zerbricht den Kristall. Zu Draht und Blech formbar sind Metalle.",
        "fr": "Quand on frappe un cristal ionique, les couches glissent et des ions de même charge se retrouvent face à face ; la répulsion brise le cristal. La ductilité et la malléabilité sont propres aux métaux.",
        "ru": "При ударе по ионному кристаллу слои сдвигаются, и одноимённо заряженные ионы оказываются друг напротив друга; возникающее отталкивание раскалывает кристалл. Способность вытягиваться в проволоку и прокатываться в листы присуща металлам.",
        "ar": "عند طرق البلورة الأيونية تنزلق الطبقات فتتقابل أيونات متشابهة الشحنة، فيؤدي التنافر إلى تكسّر البلورة. أما قابلية السحب والطرق فخاصية للفلزات.",
        "zh": "敲击离子晶体时，离子层发生滑移，同种电荷的离子相互对齐，产生的排斥使晶体碎裂。能拉成丝、压成片是金属特有的性质。",
        "ku": "Dema li krîstaleke îyonîk tê xistin, qat dişemitin û îyonên bi heman barê li hember hev tên; hêza dûrxistinê ya ku çêdibe krîstalê dişikîne. Bûna têl û pel taybetmendiya metalan e."
      }
    },
    {
      "id": "u03-f16",
      "fact": {
        "tr": "İki ametalden oluşan kovalent bileşikler adlandırılırken atom sayıları mono, di, tri gibi sayı ön ekleriyle belirtilir.",
        "en": "When naming covalent compounds of two nonmetals, the numbers of atoms are shown with numerical prefixes such as mono, di, tri.",
        "de": "Bei der Benennung kovalenter Verbindungen aus zwei Nichtmetallen werden die Atomzahlen mit Zahlpräfixen wie mono, di, tri angegeben.",
        "fr": "Pour nommer les composés covalents formés de deux non-métaux, on indique le nombre d'atomes par des préfixes numériques comme mono, di, tri.",
        "ru": "В названиях ковалентных соединений двух неметаллов число атомов указывают числовыми приставками моно-, ди-, три- и т. д.",
        "ar": "عند تسمية المركبات التساهمية المكوّنة من لافلزين يُشار إلى عدد الذرات بالبادئات العددية مثل أحادي وثنائي وثلاثي.",
        "zh": "命名由两种非金属组成的共价化合物时，用一、二、三（mono、di、tri）等数字前缀表示原子个数。",
        "ku": "Di binavkirina pêkhateyên kovalent ên ji du nemetalan pêk tên de, hejmara atoman bi pêşgirên hejmarî yên wekî mono, di, trî tê nîşandan."
      },
      "trap": {
        "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
        "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
        "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
        "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
        "ru": "В названиях ионных соединений используют приставки моно-, ди-, три- по числу атомов неметалла.",
        "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل أحادي وثنائي وثلاثي وفقاً لعدد ذرات اللافلز.",
        "zh": "离子化合物命名时，要根据非金属原子数使用一、二、三(mono、di、tri)等前缀。",
        "ku": "Di binavkirina pêkhateyên îyonîk de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, trî tên bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "İyonik bileşiklerde iyonların oranı yüklerden belli olduğu için sayı ön eki kullanılmaz (örn. CaCl2 kalsiyum klorür); mono, di, tri gibi ön ekler iki ametalden oluşan kovalent bileşiklerde kullanılır.",
        "en": "In ionic compounds the ion ratio follows from the charges, so no number prefixes are used (e.g. CaCl2 is calcium chloride); prefixes like mono, di, tri are used for covalent compounds of two non-metals.",
        "de": "Bei ionischen Verbindungen ergibt sich das Ionenverhältnis aus den Ladungen, daher werden keine Zahlpräfixe verwendet (z. B. CaCl2 Calciumchlorid); Präfixe wie mono, di, tri nutzt man bei kovalenten Verbindungen aus zwei Nichtmetallen.",
        "fr": "Dans les composés ioniques, le rapport des ions découle des charges : on n'utilise pas de préfixes (ex. CaCl2 : chlorure de calcium) ; les préfixes mono, di, tri servent aux composés covalents de deux non-métaux.",
        "ru": "В ионных соединениях соотношение ионов следует из зарядов, поэтому числовые приставки не используют (например, CaCl2 — хлорид кальция); приставки моно-, ди-, три- применяют для ковалентных соединений двух неметаллов.",
        "ar": "في المركبات الأيونية تُعرف نسبة الأيونات من شحناتها فلا تُستخدم بادئات عددية (مثل CaCl2 كلوريد الكالسيوم)، وتُستخدم بادئات أحادي وثنائي وثلاثي في المركبات التساهمية المكوّنة من لافلزين.",
        "zh": "离子化合物中离子个数比由电荷决定，所以不用数字前缀(如 CaCl2 叫氯化钙)；“一、二、三”等前缀用于由两种非金属组成的共价化合物。",
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
        "ku": "Girêdana Îyonîk"
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
        "ru": "Ионная связь образует кристаллическую решётку за счёт отдачи и присоединения электронов; ковалентная связь образуется за счёт общих электронных пар.",
        "ar": "الرابطة الأيونية: رابطة تتكوّن بانتقال الإلكترونات وتُنشئ شبكة بلورية؛ أما الرابطة التساهمية فرابطة تتكوّن بتشارك الإلكترونات.",
        "zh": "离子键通过电子得失形成晶格；而共价键通过共用电子形成。",
        "ku": "Girêdana îyonîk bi danûstandina elektronan tora krîstalî çêdike; girêdana kovalent bi hevparkirina elektronan çêdibe."
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
        "ar": "الرابطة الهيدروجينية",
        "zh": "氢键",
        "ku": "Girêdana Hîdrojenê"
      },
      "conceptB": {
        "tr": "Dipol-Dipol",
        "en": "Dipole-Dipole",
        "de": "Dipol-Dipol",
        "fr": "Dipôle-Dipôle",
        "ru": "Диполь-дипольные силы",
        "ar": "تآثر ثنائي القطب–ثنائي القطب",
        "zh": "偶极-偶极力",
        "ku": "Dîpol-Dîpol"
      },
      "distinction": {
        "tr": "Hidrojen bağı, F, O veya N atomuna bağlı H atomu ile komşu moleküldeki F, O veya N atomu arasında oluşan özel ve daha güçlü bir etkileşimdir; dipol-dipol etkileşimi ise H atomu gerektirmeden kalıcı dipollü herhangi iki polar molekül arasında görülür.",
        "en": "A hydrogen bond is a special, stronger attraction between an H atom bonded to F, O or N and an F, O or N atom of a neighbouring molecule; a dipole-dipole interaction acts between any two polar molecules with permanent dipoles and needs no such H atom.",
        "de": "Die Wasserstoffbindung ist eine besondere, stärkere Anziehung zwischen einem an F, O oder N gebundenen H-Atom und einem F-, O- oder N-Atom eines Nachbarmoleküls; eine Dipol-Dipol-Wechselwirkung wirkt zwischen beliebigen polaren Molekülen mit permanentem Dipol und braucht kein solches H-Atom.",
        "fr": "La liaison hydrogène est une attraction particulière, plus forte, entre un atome H lié à F, O ou N et un atome F, O ou N d'une molécule voisine ; une interaction dipôle-dipôle s'exerce entre deux molécules polaires quelconques à dipôle permanent, sans exiger un tel atome H.",
        "ru": "Водородная связь — особое, более сильное притяжение между атомом H, связанным с F, O или N, и атомом F, O или N соседней молекулы; диполь-дипольные силы действуют между любыми полярными молекулами с постоянными диполями и не требуют такого атома H.",
        "ar": "الرابطة الهيدروجينية تجاذب خاص وأقوى بين ذرة H مرتبطة بذرة F أو O أو N وذرة F أو O أو N في جزيء مجاور؛ أما تآثر ثنائي القطب–ثنائي القطب فيحدث بين أي جزيئين قطبيين لهما ثنائيات قطب دائمة ولا يحتاج إلى ذرة H كهذه.",
        "zh": "氢键是与 F、O 或 N 相连的 H 原子和相邻分子中的 F、O 或 N 原子之间一种特殊且较强的作用；偶极-偶极力则存在于任意两个具有永久偶极的极性分子之间，不需要这样的 H 原子。",
        "ku": "Girêdana hîdrojenê kişandineke taybet û xurttir e di navbera atoma H ya bi F, O an N ve girêdayî û atoma F, O an N ya molekula cîran de; têkiliya Dîpol-Dîpol jî di navbera her du molekulên polar ên bi dîpola daîmî de çêdibe û hewceyî atomeke H ya wiha nîne."
      }
    },
    {
      "id": "u03-c03",
      "conceptA": {
        "tr": "Polar Kovalent Bağ",
        "en": "Polar Covalent Bond",
        "de": "Polare kovalente Bindung",
        "fr": "Liaison covalente polaire",
        "ru": "Полярная связь",
        "ar": "الرابطة التساهمية القطبية",
        "zh": "极性共价键",
        "ku": "Girêdana Kovalent a Polar"
      },
      "conceptB": {
        "tr": "Apolar Kovalent Bağ",
        "en": "Nonpolar Covalent Bond",
        "de": "Unpolare kovalente Bindung",
        "fr": "Liaison covalente non polaire",
        "ru": "Неполярная связь",
        "ar": "الرابطة التساهمية غير القطبية",
        "zh": "非极性键",
        "ku": "Girêdana Kovalent a Nepolar"
      },
      "distinction": {
        "tr": "Polar kovalent bağ farklı ametal atomları arasında oluşur ve bağ elektronları eşit paylaşılmaz; apolar kovalent bağ aynı cins ametal atomları arasında oluşur ve bağ elektronları eşit paylaşılır.",
        "en": "A polar covalent bond forms between atoms of different nonmetals, and the bonding electrons are shared unequally; a nonpolar covalent bond forms between identical nonmetal atoms, and the bonding electrons are shared equally.",
        "de": "Eine polare kovalente Bindung entsteht zwischen Atomen verschiedener Nichtmetalle, und die Bindungselektronen werden ungleich geteilt; die unpolare Bindung entsteht zwischen gleichen Nichtmetallatomen, und die Bindungselektronen werden gleichmäßig geteilt.",
        "fr": "Une liaison covalente polaire se forme entre des atomes de non-métaux différents, et les électrons de liaison sont partagés inégalement ; la liaison apolaire se forme entre des atomes identiques d'un non-métal, et les électrons de liaison sont partagés également.",
        "ru": "Полярная связь — ковалентная связь между атомами разных неметаллов, электроны которой смещены к одному из атомов; неполярная связь — ковалентная связь между одинаковыми атомами неметалла, электроны которой распределены равномерно.",
        "ar": "الرابطة التساهمية القطبية: رابطة تنشأ بين ذرات لافلزات مختلفة وتتوزع فيها إلكترونات الرابطة توزيعاً غير متساوٍ؛ أما الرابطة التساهمية غير القطبية فرابطة تنشأ بين ذرتين من اللافلز نفسه وتتوزع فيها إلكترونات الرابطة بالتساوي.",
        "zh": "极性共价键形成于不同种非金属原子之间，共用电子对偏向一方；非极性键则形成于同种非金属原子之间，共用电子对不偏移。",
        "ku": "Girêdana kovalent a polar di navbera atomên nemetalên cuda de çêdibe û elektronên girêdanê bi awayekî newekhev tên parvekirin; girêdana kovalent a nepolar di navbera atomên heman nemetalê de çêdibe û elektronên girêdanê wekhev tên parvekirin."
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
        "ku": "Girêdana Metalîk"
      },
      "conceptB": {
        "tr": "London Kuvveti",
        "en": "London Force",
        "de": "London-Kräfte",
        "fr": "Force de London",
        "ru": "Лондоновские силы",
        "ar": "قوة لندن",
        "zh": "色散力",
        "ku": "Hêza London"
      },
      "distinction": {
        "tr": "Metalik bağ, elektron denizi ile pozitif metal iyonları arasındaki güçlü bir etkileşimdir; London kuvveti ise anlık dipollerden kaynaklanan ve benzer büyüklükteki tanecikler karşılaştırıldığında genellikle en zayıf olan etkileşimdir.",
        "en": "Metallic bonding is a strong interaction between the electron sea and positive metal ions; the London force arises from instantaneous dipoles and is generally the weakest interaction when particles of similar size are compared.",
        "de": "Die metallische Bindung ist eine starke Wechselwirkung zwischen dem Elektronensee und positiven Metallionen; die London-Kraft entsteht durch momentane Dipole und ist beim Vergleich ähnlich großer Teilchen meist die schwächste Wechselwirkung.",
        "fr": "La liaison métallique est une interaction forte entre la mer d'électrons et les ions métalliques positifs ; la force de London provient de dipôles instantanés et est généralement l'interaction la plus faible lorsqu'on compare des particules de taille semblable.",
        "ru": "Металлическая связь — сильное взаимодействие между „электронным морем“ и положительными ионами металла; лондоновские силы — притяжение, вызванное мгновенными диполями, обычно самое слабое при сравнении частиц сходного размера.",
        "ar": "الرابطة الفلزية تآثر قوي بين بحر الإلكترونات وأيونات الفلز الموجبة؛ أما قوة لندن فتآثر ينشأ عن ثنائيات القطب اللحظية، وهو عادةً أضعف التآثرات عند مقارنة دقائق متقاربة الحجم.",
        "zh": "金属键是自由电子“海”与阳离子之间的强相互作用；色散力则来自瞬时偶极，比较大小相近的微粒时，它通常是最弱的相互作用。",
        "ku": "Girêdana metalîk têkiliyeke xurt a navbera deryaya elektronan û îyonên metal ên erênî ye; hêza London ji dîpolên demkî çêdibe û dema perçeyên bi mezinahiya nêzîk tên berhevkirin, bi giştî têkiliya herî qels e."
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
        "ar": "الرابطة القوية داخل الجزيء",
        "zh": "分子内强键",
        "ku": "Girêdana Xurt a Hundirmolekulî"
      },
      "conceptB": {
        "tr": "Moleküller Arası Zayıf Bağ",
        "en": "Weak Intermolecular Bond",
        "de": "Schwache intermolekulare Bindung",
        "fr": "Faible liaison intermoléculaire",
        "ru": "Слабая межмолекулярная связь",
        "ar": "الرابطة الضعيفة بين الجزيئات",
        "zh": "分子间弱作用",
        "ku": "Girêdana Qels a Navmolekulî"
      },
      "distinction": {
        "tr": "Molekül içi güçlü bağ atomları bir molekülde bir arada tutar ve maddenin kimyasal özelliklerini belirler; moleküller arası zayıf bağ ise molekülleri bir arada tutar ve erime, kaynama noktası gibi fiziksel özellikleri belirler.",
        "en": "A strong intramolecular bond holds the atoms together within a molecule and determines the chemical properties of the substance; a weak intermolecular bond holds molecules to one another and determines physical properties such as melting and boiling points.",
        "de": "Eine starke intramolekulare Bindung hält die Atome innerhalb eines Moleküls zusammen und bestimmt die chemischen Eigenschaften des Stoffes; die schwache Anziehung zwischen den Molekülen hält die Moleküle zusammen und bestimmt physikalische Eigenschaften wie Schmelz- und Siedepunkt.",
        "fr": "Une forte liaison intramoléculaire maintient les atomes ensemble au sein d'une molécule et détermine les propriétés chimiques de la substance ; une faible liaison intermoléculaire maintient les molécules entre elles et détermine des propriétés physiques comme les points de fusion et d'ébullition.",
        "ru": "Сильная внутримолекулярная связь удерживает атомы в молекуле и определяет химические свойства вещества; слабая межмолекулярная связь удерживает молекулы рядом друг с другом и определяет физические свойства, например температуры плавления и кипения.",
        "ar": "الرابطة القوية داخل الجزيء: رابطة تمسك الذرات معاً في الجزيء الواحد وتحدد الخواص الكيميائية للمادة؛ أما الرابطة الضعيفة بين الجزيئات فرابطة تمسك الجزيئات بعضها ببعض وتحدد الخواص الفيزيائية مثل درجتي الانصهار والغليان.",
        "zh": "分子内强键把原子结合成分子，决定物质的化学性质；而分子间弱作用把分子聚集在一起，决定熔点、沸点等物理性质。",
        "ku": "Girêdana xurt a hundirmolekulî atoman di molekulê de bi hev re digire û taybetmendiyên kîmyewî yên madeyê diyar dike; girêdana qels a navmolekulî molekulan bi hev re digire û taybetmendiyên fîzîkî yên wekî xala helînê û xala kelînê diyar dike."
      }
    },
    {
      "id": "u03-c06",
      "conceptA": {
        "tr": "Ağ Örgülü Kovalent Katı",
        "en": "Covalent Network Solid",
        "de": "Vernetzter kovalenter Feststoff",
        "fr": "Solide covalent en réseau",
        "ru": "Вещество с атомной кристаллической решёткой",
        "ar": "الصلب التساهمي الشبكي",
        "zh": "共价晶体",
        "ku": "Madeya Hişk a Tora Kovalent"
      },
      "conceptB": {
        "tr": "Moleküler Katı",
        "en": "Molecular Solid",
        "de": "Molekularer Feststoff",
        "fr": "Solide moléculaire",
        "ru": "Вещество с молекулярной кристаллической решёткой",
        "ar": "الصلب الجزيئي",
        "zh": "分子晶体",
        "ku": "Madeya Hişk a Molekulî"
      },
      "distinction": {
        "tr": "Ağ örgülü kovalent katı (elmas, kuvars) atomların kovalent bağlarla üç boyutlu bir ağ oluşturduğu çok sert katıdır; moleküler katı (buz, kuru buz) ise moleküllerin zayıf etkileşimlerle bir arada tutunduğu, erime noktası düşük katıdır.",
        "en": "A covalent network solid (diamond, quartz) is a very hard solid in which the atoms are joined by covalent bonds into a three-dimensional framework; a molecular solid (ice, dry ice) is a low-melting solid in which molecules are held together by weak interactions.",
        "de": "Ein vernetzter kovalenter Feststoff (Diamant, Quarz) ist sehr hart, weil seine Atome durch Elektronenpaarbindungen zu einem dreidimensionalen Netzwerk verknüpft sind; ein molekularer Feststoff (Eis, Trockeneis) besteht aus Molekülen, die nur durch schwache Wechselwirkungen zusammengehalten werden, und schmilzt bei niedriger Temperatur.",
        "fr": "Un solide covalent en réseau (diamant, quartz) est très dur, car ses atomes sont unis par des liaisons covalentes en une structure tridimensionnelle ; un solide moléculaire (glace, neige carbonique) est formé de molécules retenues par des interactions faibles et fond à basse température.",
        "ru": "Вещество с атомной кристаллической решёткой (алмаз, кварц) очень твёрдое: его атомы связаны ковалентными связями в трёхмерный каркас; вещество с молекулярной кристаллической решёткой (лёд, сухой лёд) состоит из молекул, удерживаемых слабыми взаимодействиями, и имеет низкую температуру плавления.",
        "ar": "الصلب التساهمي الشبكي (الماس، الكوارتز): مادة شديدة الصلابة ترتبط ذراتها بروابط تساهمية في شبكة ثلاثية الأبعاد؛ أما الصلب الجزيئي (الجليد، الثلج الجاف) فمادة تتماسك جزيئاتها بتآثرات ضعيفة ودرجة انصهارها منخفضة.",
        "zh": "共价晶体（金刚石、石英）中原子以共价键连成三维网状结构，硬度很大；而分子晶体（冰、干冰）中分子靠弱相互作用结合，熔点低。",
        "ku": "Madeya hişk a tora kovalent (elmas, kuarts) madeyeke pir req e ku atomên wê bi girêdanên kovalent toreke sêalî çêdikin; madeya hişk a molekulî (qeşa, qeşaya hişk) ji molekulên ku bi têkiliyên qels bi hev re tên girtin pêk tê û xala helînê ya wê nizm e."
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
        "ar": "تآثر أيون–ثنائي القطب",
        "zh": "离子-偶极作用",
        "ku": "Têkiliya Îyon-Dîpol"
      },
      "conceptB": {
        "tr": "Dipol-Dipol Etkileşimi",
        "en": "Dipole-Dipole Interaction",
        "de": "Dipol-Dipol-Wechselwirkung",
        "fr": "Interaction dipôle-dipôle",
        "ru": "Диполь-дипольное взаимодействие",
        "ar": "تآثر ثنائي القطب–ثنائي القطب",
        "zh": "偶极-偶极作用",
        "ku": "Têkiliya Dîpol-Dîpol"
      },
      "distinction": {
        "tr": "İyon-dipol etkileşimi bir iyon ile polar molekül arasında (örn. NaCl'nin suda çözünmesi) görülür; dipol-dipol etkileşimi iki polar molekül arasında (örn. HCl molekülleri) görülür.",
        "en": "An ion-dipole interaction occurs between an ion and a polar molecule (e.g., NaCl dissolving in water); a dipole-dipole interaction occurs between two polar molecules (e.g., HCl molecules).",
        "de": "Eine Ion-Dipol-Wechselwirkung tritt zwischen einem Ion und einem polaren Molekül auf (z. B. beim Lösen von NaCl in Wasser); eine Dipol-Dipol-Wechselwirkung tritt zwischen zwei polaren Molekülen auf (z. B. HCl-Moleküle).",
        "fr": "L'interaction ion-dipôle s'établit entre un ion et une molécule polaire (ex. dissolution de NaCl dans l'eau) ; l'interaction dipôle-dipôle s'établit entre deux molécules polaires (ex. molécules de HCl).",
        "ru": "Ион-дипольное взаимодействие возникает между ионом и полярной молекулой (например, при растворении NaCl в воде); диполь-дипольное взаимодействие возникает между двумя полярными молекулами (например, молекулами HCl).",
        "ar": "تآثر أيون–ثنائي القطب: تآثر بين أيون وجزيء قطبي (مثل ذوبان NaCl في الماء)؛ أما تآثر ثنائي القطب–ثنائي القطب فتآثر بين جزيئين قطبيين (مثل جزيئات HCl).",
        "zh": "离子-偶极作用发生在离子与极性分子之间(如 NaCl 溶于水)；而偶极-偶极作用发生在两个极性分子之间(如 HCl 分子之间)。",
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
        "ru": "Физическое явление",
        "ar": "التغير الفيزيائي",
        "zh": "物理变化",
        "ku": "Guherîna Fîzîkî"
      },
      "conceptB": {
        "tr": "Kimyasal Değişim",
        "en": "Chemical Change",
        "de": "Chemische Veränderung",
        "fr": "Changement chimique",
        "ru": "Химическое явление",
        "ar": "التغير الكيميائي",
        "zh": "化学变化",
        "ku": "Guherîna Kîmyewî"
      },
      "distinction": {
        "tr": "Fiziksel değişimde maddenin kimliği korunur ve genellikle yalnızca zayıf etkileşimler değişir; kimyasal değişimde kimyasal bağlar kırılıp yeni bağlar oluşur ve yeni maddeler meydana gelir.",
        "en": "In a physical change the identity of the substance is preserved and usually only weak interactions change; in a chemical change chemical bonds are broken, new bonds form and new substances are produced.",
        "de": "Eine physikalische Veränderung erhält die Identität des Stoffes, meist ändern sich nur schwache Wechselwirkungen; bei einer chemischen Umwandlung werden chemische Bindungen gebrochen, neue Bindungen gebildet und neue Stoffe entstehen.",
        "fr": "Lors d'un changement physique, l'identité de la substance est conservée et ce sont généralement les seules interactions faibles qui changent ; lors d'un changement chimique, des liaisons chimiques sont rompues, de nouvelles liaisons se forment et de nouvelles substances apparaissent.",
        "ru": "Физическое явление сохраняет природу вещества: обычно меняются лишь слабые взаимодействия; химическое явление сопровождается разрывом химических связей, образованием новых связей и новых веществ.",
        "ar": "في التغير الفيزيائي تبقى هوية المادة محفوظة وغالباً لا تتغير إلا التآثرات الضعيفة؛ أما في التغير الكيميائي فتنكسر الروابط الكيميائية وتتكوّن روابط جديدة وتنتج مواد جديدة.",
        "zh": "物理变化中物质的本质不变，通常只有弱相互作用发生改变；而化学变化中化学键断裂、形成新键并生成新物质。",
        "ku": "Di guherîna fîzîkî de nasnameya madeyê tê parastin û bi giştî tenê têkiliyên qels diguherin; di guherîna kîmyewî de girêdanên kîmyewî dişikin, girêdanên nû çêdibin û madeyên nû peyda dibin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u03-s01",
      "title": {
        "tr": "NaCl'nin Suda Çözünmesi",
        "en": "Dissolution of NaCl in Water",
        "de": "Lösen von NaCl in Wasser",
        "fr": "Dissolution de NaCl dans l'eau",
        "ru": "Растворение NaCl в воде",
        "ar": "ذوبان NaCl في الماء",
        "zh": "NaCl 在水中的溶解",
        "ku": "Helîna NaCl di Avê de"
      },
      "steps": [
        {
          "tr": "Su moleküllerinin kısmi negatif O uçları kristal yüzeyindeki Na+ iyonlarına, kısmi pozitif H uçları Cl- iyonlarına yönelir",
          "en": "The partially negative O ends of water molecules turn towards Na+ ions on the crystal surface and the partially positive H ends towards Cl- ions",
          "de": "Die partiell negativen O-Enden der Wassermoleküle richten sich auf die Na+-Ionen an der Kristalloberfläche, die partiell positiven H-Enden auf die Cl--Ionen aus",
          "fr": "Les extrémités O partiellement négatives des molécules d'eau s'orientent vers les ions Na+ de la surface du cristal, et les extrémités H partiellement positives vers les ions Cl-",
          "ru": "Частично отрицательные концы O молекул воды ориентируются к ионам Na+ на поверхности кристалла, а частично положительные концы H — к ионам Cl-",
          "ar": "تتّجه أطراف O الجزيئية السالبة جزئيًا في جزيئات الماء نحو أيونات Na+ على سطح البلورة، وأطراف H الموجبة جزئيًا نحو أيونات Cl-",
          "zh": "水分子带部分负电的 O 端朝向晶体表面的 Na+，带部分正电的 H 端朝向 Cl-",
          "ku": "Serên O yên qismî neyînî yên molekulên avê ber bi îyonên Na+ yên li ser rûyê krîstalê, serên H yên qismî erênî jî ber bi îyonên Cl- ve dizivirin"
        },
        {
          "tr": "İyon-dipol çekimleri iyonlar arasındaki çekimi yenerek yüzeydeki iyonları kristalden koparır",
          "en": "Ion-dipole attractions overcome the attraction between the ions and pull the surface ions out of the crystal",
          "de": "Ion-Dipol-Anziehungen überwinden die Anziehung zwischen den Ionen und lösen die Oberflächenionen aus dem Kristall",
          "fr": "Les attractions ion-dipôle l'emportent sur l'attraction entre les ions et arrachent les ions de surface au cristal",
          "ru": "Ион-дипольное притяжение преодолевает притяжение между ионами и вырывает поверхностные ионы из кристалла",
          "ar": "تتغلّب قوى التجاذب أيون–ثنائي القطب على التجاذب بين الأيونات فتنتزع الأيونات السطحية من البلورة",
          "zh": "离子-偶极作用克服离子间的引力，把表面的离子从晶体中拉出",
          "ku": "Kişandinên îyon-dîpol li ser kişandina navbera îyonan zal dibin û îyonên rûyê ji krîstalê diqetînin"
        },
        {
          "tr": "Kopan iyonların çevresi su molekülleriyle sarılır (hidratlaşma)",
          "en": "The released ions become surrounded by water molecules (hydration)",
          "de": "Die herausgelösten Ionen werden von Wassermolekülen umhüllt (Hydratation)",
          "fr": "Les ions libérés s'entourent de molécules d'eau (hydratation)",
          "ru": "Оторвавшиеся ионы окружаются молекулами воды (гидратация)",
          "ar": "تُحاط الأيونات المنفصلة بجزيئات الماء (الإماهة)",
          "zh": "脱离出来的离子被水分子包围（水合）",
          "ku": "Dora îyonên qetiyayî bi molekulên avê tê girtin (hîdratasyon)"
        },
        {
          "tr": "Hidratlaşmış iyonlar çözeltinin her yerine homojen olarak dağılır",
          "en": "The hydrated ions spread uniformly throughout the solution",
          "de": "Die hydratisierten Ionen verteilen sich gleichmäßig in der ganzen Lösung",
          "fr": "Les ions hydratés se répartissent uniformément dans toute la solution",
          "ru": "Гидратированные ионы равномерно распределяются по всему раствору",
          "ar": "تنتشر الأيونات المُماهة بانتظام في جميع أنحاء المحلول",
          "zh": "水合离子均匀地分散到整个溶液中",
          "ku": "Îyonên hîdratbûyî bi awayekî homojen li her derê çareseriyê belav dibin"
        }
      ]
    },
    {
      "id": "u03-s02",
      "title": {
        "tr": "İyonik Bağ Oluşumu",
        "en": "Formation of an Ionic Bond",
        "de": "Bildung einer Ionenbindung",
        "fr": "Formation d'une liaison ionique",
        "ru": "Образование ионной связи",
        "ar": "تكوّن الرابطة الأيونية",
        "zh": "离子键的形成",
        "ku": "Çêbûna Girêdana Îyonîk"
      },
      "steps": [
        {
          "tr": "Metal atomu değerlik elektronlarını vererek katyona dönüşür",
          "en": "The metal atom gives up its valence electrons and becomes a cation",
          "de": "Das Metallatom gibt seine Valenzelektronen ab und wird zum Kation",
          "fr": "L'atome métallique cède ses électrons de valence et devient un cation",
          "ru": "Атом металла отдаёт валентные электроны и превращается в катион",
          "ar": "تفقد ذرة الفلز إلكترونات تكافؤها فتتحوّل إلى كاتيون",
          "zh": "金属原子失去价电子变成阳离子",
          "ku": "Atoma metal elektronên xwe yên valansê dide û dibe katyon"
        },
        {
          "tr": "Ametal atomu verilen elektronları alarak oktetini tamamlar ve anyona dönüşür",
          "en": "The nonmetal atom takes these electrons, completes its octet and becomes an anion",
          "de": "Das Nichtmetallatom nimmt diese Elektronen auf, vervollständigt sein Oktett und wird zum Anion",
          "fr": "L'atome non métallique capte ces électrons, complète son octet et devient un anion",
          "ru": "Атом неметалла принимает эти электроны, завершает октет и превращается в анион",
          "ar": "تكتسب ذرة اللافلز هذه الإلكترونات فتكمل ثمانيتها وتتحوّل إلى أنيون",
          "zh": "非金属原子得到这些电子，达到八隅体而变成阴离子",
          "ku": "Atoma nemetal van elektronan digire, okteta xwe temam dike û dibe anyon"
        },
        {
          "tr": "Zıt yüklü katyon ve anyonlar elektrostatik olarak birbirini çeker",
          "en": "The oppositely charged cations and anions attract each other electrostatically",
          "de": "Die entgegengesetzt geladenen Kationen und Anionen ziehen sich elektrostatisch an",
          "fr": "Les cations et anions de charges opposées s'attirent électrostatiquement",
          "ru": "Противоположно заряженные катионы и анионы электростатически притягиваются",
          "ar": "تتجاذب الكاتيونات والأنيونات المختلفة الشحنة تجاذبًا كهروستاتيكيًا",
          "zh": "带相反电荷的阳离子和阴离子相互静电吸引",
          "ku": "Katyon û anyonên bi barên dijber bi awayê elektrostatîk hev dikişînin"
        },
        {
          "tr": "İyonlar düzenli üç boyutlu iyonik kristal örgüde dizilir",
          "en": "The ions arrange themselves in an ordered three-dimensional ionic crystal lattice",
          "de": "Die Ionen ordnen sich in einem regelmäßigen dreidimensionalen Ionengitter an",
          "fr": "Les ions s'organisent en un réseau cristallin ionique ordonné à trois dimensions",
          "ru": "Ионы выстраиваются в упорядоченную трёхмерную ионную кристаллическую решётку",
          "ar": "تنتظم الأيونات في شبكة بلورية أيونية ثلاثية الأبعاد منتظمة",
          "zh": "离子排列成有序的三维离子晶格",
          "ku": "Îyon di tora krîstala îyonîk a sêrehendî ya rêkûpêk de rêz dibin"
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
          "ru": "Атом H ковалентно связывается с сильно электроотрицательным атомом F, O или N",
          "ar": "ترتبط ذرة H برابطة تساهمية بذرة عالية السالبية الكهربائية F أو O أو N",
          "zh": "H原子与电负性大的F、O或N原子以共价键结合",
          "ku": "Atoma H bi girêdana kovalent bi atomeke F, O an N ya pir elektronegatîf ve girêdayî dibe"
        },
        {
          "tr": "Bağ elektronları F, O veya N'ye doğru çekilir; H üzerinde kısmi pozitif yük oluşur",
          "en": "The bonding electrons are pulled towards F, O or N, leaving a partial positive charge on H",
          "de": "Die Bindungselektronen werden zu F, O oder N gezogen; am H entsteht eine positive Teilladung",
          "fr": "Les électrons de liaison sont attirés vers F, O ou N ; une charge partielle positive apparaît sur H",
          "ru": "Электроны связи смещаются к F, O или N; на атоме H возникает частичный положительный заряд",
          "ar": "تنجذب إلكترونات الرابطة نحو F أو O أو N فتنشأ شحنة موجبة جزئية على H",
          "zh": "成键电子偏向F、O或N，H上带部分正电荷",
          "ku": "Elektronên girêdanê ber bi F, O an N ve tên kişandin; li ser H bara erênî ya qismî çêdibe"
        },
        {
          "tr": "Kısmi pozitif H, komşu moleküldeki F, O veya N atomunun ortaklanmamış elektron çiftine yönelir",
          "en": "The partially positive H is attracted to a lone pair on an F, O or N atom of a neighbouring molecule",
          "de": "Das partiell positive H wird von einem freien Elektronenpaar eines F-, O- oder N-Atoms im Nachbarmolekül angezogen",
          "fr": "Le H partiellement positif est attiré par un doublet non liant d'un atome F, O ou N d'une molécule voisine",
          "ru": "Частично положительный H притягивается к неподелённой электронной паре атома F, O или N соседней молекулы",
          "ar": "تنجذب ذرة H الموجبة جزئيًا نحو زوج إلكترونات غير رابط على ذرة F أو O أو N في جزيء مجاور",
          "zh": "带部分正电荷的H被相邻分子中F、O或N原子的孤对电子吸引",
          "ku": "H ya qismî erênî ber bi cotê elektronan ê nehevpar ê atoma F, O an N ya molekula cîran ve tê kişandin"
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
        "tr": "London Kuvvetlerinin Güçlenmesi",
        "en": "Strengthening of London Forces",
        "de": "Verstärkung der London-Kräfte",
        "fr": "Renforcement des forces de London",
        "ru": "Усиление лондоновских сил",
        "ar": "تقوّي قوى لندن",
        "zh": "色散力（伦敦力）的增强",
        "ku": "Xurtbûna Hêzên London"
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
          "zh": "电子云更容易被极化",
          "ku": "Polarîzebûna ewrê elektronan zêde dibe"
        },
        {
          "tr": "Anlık geçici dipoller güçlenir",
          "en": "Momentary transient dipoles become stronger",
          "de": "Kurzzeitige transiente Dipole werden stärker",
          "fr": "Les dipôles transitoires momentanés deviennent plus forts",
          "ru": "Мгновенные диполи становятся сильнее",
          "ar": "تقوى ثنائيات القطب اللحظية المؤقتة",
          "zh": "瞬时偶极增强",
          "ku": "Dîpolên demkî yên tavilê xurttir dibin"
        },
        {
          "tr": "Maddenin kaynama noktası yükselir",
          "en": "The boiling point of the substance rises",
          "de": "Der Siedepunkt des Stoffes steigt",
          "fr": "Le point d'ébullition de la substance augmente",
          "ru": "Температура кипения вещества повышается",
          "ar": "ترتفع درجة غليان المادة",
          "zh": "物质的沸点升高",
          "ku": "Xala kelînê ya madeyê bilind dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u03-twin01",
      "stem": {
        "tr": "Grafikte 4A grubu (CH4, SiH4, GeH4, SnH4) ve 6A grubu (H2O, H2S, H2Se, H2Te) elementlerinin hidrojenli bileşiklerinin 1 atm'deki kaynama noktaları, elementin bulunduğu periyoda göre verilmiştir.\nGrafikle ilgili aşağıdaki yorumlardan hangileri doğrudur?\nI. H2O'nun kaynama noktasının 6A serisindeki eğilime uymayacak kadar yüksek olması, molekülleri arasındaki hidrojen bağlarından kaynaklanır.\nII. 4A serisinde periyot numarası arttıkça kaynama noktasının yükselmesi, elektron sayısı arttıkça London kuvvetlerinin güçlenmesiyle açıklanır.\nIII. 3. periyotta H2S'nin kaynama noktasının SiH4'ünkünden yüksek olmasının nedeni, H2S molekülleri arasında hidrojen bağı bulunmasıdır.",
        "en": "The graph shows the boiling points at 1 atm of the hydrides of group 4A (CH4, SiH4, GeH4, SnH4) and group 6A (H2O, H2S, H2Se, H2Te) elements against the period of the element.\nWhich of the following interpretations of the graph are correct?\nI. The boiling point of H2O is far above the trend of the 6A series because of hydrogen bonds between its molecules.\nII. The rise in boiling point down the 4A series is explained by London forces becoming stronger as the number of electrons increases.\nIII. In period 3, H2S boils higher than SiH4 because there are hydrogen bonds between H2S molecules.",
        "de": "Das Diagramm zeigt die Siedepunkte bei 1 atm der Wasserstoffverbindungen der Elemente der Gruppe 4A (CH4, SiH4, GeH4, SnH4) und der Gruppe 6A (H2O, H2S, H2Se, H2Te) in Abhängigkeit von der Periode des Elements.\nWelche der folgenden Deutungen des Diagramms sind richtig?\nI. Dass der Siedepunkt von H2O weit über dem Trend der 6A-Reihe liegt, beruht auf Wasserstoffbrücken zwischen seinen Molekülen.\nII. Der Anstieg des Siedepunkts in der 4A-Reihe mit steigender Periode wird durch stärker werdende London-Kräfte bei zunehmender Elektronenzahl erklärt.\nIII. In der 3. Periode siedet H2S höher als SiH4, weil zwischen H2S-Molekülen Wasserstoffbrücken bestehen.",
        "fr": "Le graphique donne les températures d'ébullition sous 1 atm des hydrures des éléments du groupe 4A (CH4, SiH4, GeH4, SnH4) et du groupe 6A (H2O, H2S, H2Se, H2Te) en fonction de la période de l'élément.\nLesquelles des interprétations suivantes du graphique sont exactes ?\nI. Si la température d'ébullition de H2O est bien au-dessus de la tendance de la série 6A, c'est à cause des liaisons hydrogène entre ses molécules.\nII. L'augmentation de la température d'ébullition le long de la série 4A s'explique par le renforcement des forces de London quand le nombre d'électrons augmente.\nIII. Dans la période 3, H2S bout à plus haute température que SiH4 parce qu'il existe des liaisons hydrogène entre les molécules de H2S.",
        "ru": "На графике приведены температуры кипения при 1 атм водородных соединений элементов группы 4A (CH4, SiH4, GeH4, SnH4) и группы 6A (H2O, H2S, H2Se, H2Te) в зависимости от периода элемента.\nКакие из следующих выводов по графику верны?\nI. Температура кипения H2O намного выше, чем следует из тенденции ряда 6A, из-за водородных связей между её молекулами.\nII. Рост температуры кипения в ряду 4A с увеличением номера периода объясняется усилением лондоновских сил с ростом числа электронов.\nIII. В 3-м периоде H2S кипит при более высокой температуре, чем SiH4, потому что между молекулами H2S есть водородные связи.",
        "ar": "يبيّن الرسم البياني درجات غليان المركبات الهيدروجينية لعناصر المجموعة 4A (CH4 وSiH4 وGeH4 وSnH4) والمجموعة 6A (H2O وH2S وH2Se وH2Te) عند 1 atm بحسب دورة العنصر.\nأيّ التفسيرات الآتية للرسم صحيحة؟\nI. ارتفاع درجة غليان H2O كثيرًا عن اتجاه سلسلة 6A سببه الروابط الهيدروجينية بين جزيئاته.\nII. يُفسَّر ارتفاع درجة الغليان في سلسلة 4A مع ازدياد رقم الدورة بتقوّي قوى لندن مع ازدياد عدد الإلكترونات.\nIII. في الدورة الثالثة تكون درجة غليان H2S أعلى من SiH4 لوجود روابط هيدروجينية بين جزيئات H2S.",
        "zh": "图中给出了 4A 族（CH4、SiH4、GeH4、SnH4）和 6A 族（H2O、H2S、H2Se、H2Te）元素的氢化物在 1 atm 下的沸点随元素所在周期的变化。\n关于该图，下列解释中正确的是哪些？\nI. H2O 的沸点远高于 6A 系列的变化趋势，是因为其分子间存在氢键。\nII. 4A 系列中沸点随周期数增大而升高，可用电子数增多使色散力（伦敦力）增强来解释。\nIII. 第 3 周期中 H2S 的沸点高于 SiH4，是因为 H2S 分子间存在氢键。",
        "ku": "Di grafîkê de xalên kelînê yên di 1 atm de yên pêkhateyên hîdrojenê yên elementên koma 4A (CH4, SiH4, GeH4, SnH4) û koma 6A (H2O, H2S, H2Se, H2Te) li gorî periyoda elementê hatine dayîn.\nKîjan ji van şîroveyên grafîkê rast in?\nI. Bilindbûna xala kelînê ya H2O bi qasî ku li meyla rêza 6A nayê, ji girêdanên hîdrojenê yên di navbera molekulên wê de tê.\nII. Bilindbûna xala kelînê di rêza 4A de her ku hejmara periyodê zêde dibe, bi xurtbûna hêzên London ji ber zêdebûna hejmara elektronan tê ravekirin.\nIII. Di periyoda 3. de xala kelînê ya H2S ji ya SiH4 bilindtir e, ji ber ku di navbera molekulên H2S de girêdana hîdrojenê heye."
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
        "tr": "I doğrudur: grafikte 6A serisi 3. periyottan 5. periyoda düzenli yükselirken 2. periyottaki H2O (100 °C) bu eğilimin çok üstündedir; O–H bağları nedeniyle su molekülleri arasında hidrojen bağları vardır. II doğrudur: 4A serisi CH4'ten (−161 °C) SnH4'e (−52 °C) sürekli yükselir; bu moleküller apolardır ve elektron sayısı arttıkça London kuvvetleri güçlenir. III yanlıştır: S'ye bağlı H atomu hidrojen bağı yapmaz; H2S (−60 °C) polar olduğundan molekülleri arasında London kuvvetlerine ek olarak dipol-dipol etkileşimleri bulunur, apolar SiH4'te (−112 °C) ise yalnızca London kuvvetleri vardır. Doğru yanıt: I ve II.",
        "en": "I is correct: on the graph the 6A series rises steadily from period 3 to period 5, while H2O in period 2 (100 °C) lies far above this trend; because of its O–H bonds water molecules form hydrogen bonds. II is correct: the 4A series rises steadily from CH4 (−161 °C) to SnH4 (−52 °C); these molecules are nonpolar and London forces grow as the number of electrons increases. III is false: H bonded to S does not form hydrogen bonds; H2S (−60 °C) is polar, so its molecules have dipole-dipole interactions in addition to London forces, while nonpolar SiH4 (−112 °C) has only London forces. Answer: I and II.",
        "de": "I ist richtig: Im Diagramm steigt die 6A-Reihe von Periode 3 bis 5 gleichmäßig an, während H2O in Periode 2 (100 °C) weit über diesem Trend liegt; wegen der O–H-Bindungen bilden Wassermoleküle Wasserstoffbrücken. II ist richtig: Die 4A-Reihe steigt von CH4 (−161 °C) bis SnH4 (−52 °C) stetig an; diese Moleküle sind unpolar, und die London-Kräfte nehmen mit der Elektronenzahl zu. III ist falsch: An S gebundener Wasserstoff bildet keine Wasserstoffbrücken; H2S (−60 °C) ist polar, daher wirken zwischen seinen Molekülen zusätzlich zu London-Kräften Dipol-Dipol-Wechselwirkungen, im unpolaren SiH4 (−112 °C) nur London-Kräfte. Antwort: I und II.",
        "fr": "I est exacte : sur le graphique, la série 6A monte régulièrement de la période 3 à la période 5, tandis que H2O, en période 2 (100 °C), se situe bien au-dessus de cette tendance ; grâce aux liaisons O–H, les molécules d'eau forment des liaisons hydrogène. II est exacte : la série 4A monte régulièrement de CH4 (−161 °C) à SnH4 (−52 °C) ; ces molécules sont apolaires et les forces de London croissent avec le nombre d'électrons. III est fausse : un H lié à S ne forme pas de liaison hydrogène ; H2S (−60 °C) est polaire, ses molécules présentent donc des interactions dipôle-dipôle en plus des forces de London, alors que SiH4 apolaire (−112 °C) n'a que des forces de London. Réponse : I et II.",
        "ru": "I верно: на графике ряд 6A равномерно растёт от 3-го к 5-му периоду, а H2O во 2-м периоде (100 °C) лежит намного выше этой тенденции; из-за связей O–H между молекулами воды образуются водородные связи. II верно: ряд 4A непрерывно растёт от CH4 (−161 °C) до SnH4 (−52 °C); эти молекулы неполярны, и с ростом числа электронов лондоновские силы усиливаются. III неверно: атом H, связанный с S, водородных связей не образует; H2S (−60 °C) полярен, поэтому между его молекулами помимо лондоновских сил действуют диполь-дипольные, а в неполярном SiH4 (−112 °C) — только лондоновские. Ответ: I и II.",
        "ar": "العبارة I صحيحة: في الرسم ترتفع سلسلة 6A بانتظام من الدورة 3 إلى الدورة 5، بينما يقع H2O في الدورة 2 (100 °C) أعلى بكثير من هذا الاتجاه؛ فبسبب روابط O–H تتكوّن روابط هيدروجينية بين جزيئات الماء. العبارة II صحيحة: ترتفع سلسلة 4A باستمرار من CH4 (−161 °C) إلى SnH4 (−52 °C)؛ وهذه الجزيئات غير قطبية وتقوى قوى لندن بازدياد عدد الإلكترونات. العبارة III خاطئة: ذرة H المرتبطة بـ S لا تكوّن روابط هيدروجينية؛ H2S (−60 °C) قطبي فتوجد بين جزيئاته تآثرات ثنائي القطب–ثنائي القطب إضافةً إلى قوى لندن، أما SiH4 غير القطبي (−112 °C) فليس فيه إلا قوى لندن. الإجابة: I و II.",
        "zh": "I 正确：图中 6A 系列从第 3 周期到第 5 周期平稳上升，而第 2 周期的 H2O（100 °C）远高于这一趋势；由于 O–H 键，水分子之间形成氢键。II 正确：4A 系列从 CH4（−161 °C）到 SnH4（−52 °C）持续升高；这些分子是非极性的，电子数越多色散力越强。III 错误：与 S 相连的 H 不形成氢键；H2S（−60 °C）是极性分子，分子间除色散力外还有偶极-偶极力，而非极性的 SiH4（−112 °C）只有色散力。答案：I 和 II。",
        "ku": "I rast e: di grafîkê de rêza 6A ji periyoda 3. heta 5. bi rêkûpêkî bilind dibe, lê H2O ya di periyoda 2. de (100 °C) gelek li ser vê meylê ye; ji ber girêdanên O–H di navbera molekulên avê de girêdanên hîdrojenê hene. II rast e: rêza 4A ji CH4 (−161 °C) heta SnH4 (−52 °C) bi berdewamî bilind dibe; ev molekul nepolar in û her ku hejmara elektronan zêde dibe hêzên London xurt dibin. III şaş e: H ya bi S ve girêdayî girêdana hîdrojenê çênake; H2S (−60 °C) polar e, ji ber vê di navbera molekulên wê de ji bilî hêzên London têkiliyên dîpol-dîpol jî hene, di SiH4 ya nepolar (−112 °C) de jî tenê hêzên London hene. Bersiv: I û II."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Periyot",
          "en": "Period",
          "de": "Periode",
          "fr": "Période",
          "ru": "Период",
          "ar": "الدورة",
          "zh": "周期",
          "ku": "Periyod"
        },
        "yLabel": {
          "tr": "Kaynama noktası (°C)",
          "en": "Boiling point (°C)",
          "de": "Siedepunkt (°C)",
          "fr": "T. d'ébullition (°C)",
          "ru": "Т. кипения (°C)",
          "ar": "درجة الغليان (°C)",
          "zh": "沸点 (°C)",
          "ku": "Xala kelînê (°C)"
        },
        "xMin": 1.5,
        "xMax": 5.6,
        "yMin": -180,
        "yMax": 125,
        "xTicks": [
          2,
          3,
          4,
          5
        ],
        "yTicks": [
          -150,
          -100,
          -50,
          0,
          50,
          100
        ],
        "series": [
          {
            "points": [
              [
                2,
                -161.5
              ],
              [
                3,
                -112
              ],
              [
                4,
                -88
              ],
              [
                5,
                -52
              ]
            ],
            "label": "4A",
            "tone": 0
          },
          {
            "points": [
              [
                2,
                100
              ],
              [
                3,
                -60
              ],
              [
                4,
                -41
              ],
              [
                5,
                -2
              ]
            ],
            "label": "6A",
            "tone": 1
          }
        ],
        "markers": [
          {
            "x": 2,
            "y": 100,
            "label": "H₂O"
          },
          {
            "x": 3,
            "y": -60,
            "label": "H₂S"
          },
          {
            "x": 2,
            "y": -161.5,
            "label": "CH₄"
          },
          {
            "x": 3,
            "y": -112,
            "label": "SiH₄"
          }
        ]
      }
    },
    {
      "id": "u03-twin02",
      "stem": {
        "tr": "Şekilde NaCl'nin sulu çözeltisindeki bazı tanecikler ve aralarındaki a, b ve c etkileşimleri kesikli çizgilerle gösterilmiştir.\na, b ve c etkileşimlerinin türleri aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "The figure shows some particles in an aqueous NaCl solution and the interactions a, b and c between them as dashed lines.\nIn which option are the types of interactions a, b and c given correctly?",
        "de": "Die Abbildung zeigt einige Teilchen in einer wässrigen NaCl-Lösung und die Wechselwirkungen a, b und c zwischen ihnen als gestrichelte Linien.\nIn welcher Antwort sind die Arten der Wechselwirkungen a, b und c richtig angegeben?",
        "fr": "La figure montre quelques particules d'une solution aqueuse de NaCl et les interactions a, b et c entre elles, représentées en pointillés.\nDans quelle proposition les types des interactions a, b et c sont-ils correctement indiqués ?",
        "ru": "На рисунке показаны некоторые частицы водного раствора NaCl и взаимодействия a, b и c между ними (пунктир).\nВ каком варианте верно указаны виды взаимодействий a, b и c?",
        "ar": "يبيّن الشكل بعض الجسيمات في محلول NaCl المائي، والتآثرات a وb وc بينها بخطوط متقطعة.\nفي أيّ الخيارات الآتية أُعطيت أنواع التآثرات a وb وc بشكل صحيح؟",
        "zh": "图中画出了 NaCl 水溶液中的一些粒子，以及它们之间用虚线表示的相互作用 a、b、c。\n下列哪一项正确给出了相互作用 a、b、c 的类型？",
        "ku": "Di şiklê de hin perçeyên di çareseriya avî ya NaCl de û têkiliyên a, b û c yên di navbera wan de bi xetên qutqutî hatine nîşandan.\nCureyên têkiliyên a, b û c di kîjan vebijarkê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "a: iyon-dipol, b: iyon-dipol, c: hidrojen bağı",
          "en": "a: ion-dipole, b: ion-dipole, c: hydrogen bond",
          "de": "a: Ion-Dipol, b: Ion-Dipol, c: Wasserstoffbrücke",
          "fr": "a : ion-dipôle, b : ion-dipôle, c : liaison hydrogène",
          "ru": "a: ион-диполь, b: ион-диполь, c: водородная связь",
          "ar": "a: أيون–ثنائي القطب، b: أيون–ثنائي القطب، c: رابطة هيدروجينية",
          "zh": "a：离子-偶极，b：离子-偶极，c：氢键",
          "ku": "a: îyon-dîpol, b: îyon-dîpol, c: girêdana hîdrojenê"
        },
        {
          "tr": "a: iyon-dipol, b: hidrojen bağı, c: dipol-dipol",
          "en": "a: ion-dipole, b: hydrogen bond, c: dipole-dipole",
          "de": "a: Ion-Dipol, b: Wasserstoffbrücke, c: Dipol-Dipol",
          "fr": "a : ion-dipôle, b : liaison hydrogène, c : dipôle-dipôle",
          "ru": "a: ион-диполь, b: водородная связь, c: диполь-диполь",
          "ar": "a: أيون–ثنائي القطب، b: رابطة هيدروجينية، c: ثنائي القطب–ثنائي القطب",
          "zh": "a：离子-偶极，b：氢键，c：偶极-偶极",
          "ku": "a: îyon-dîpol, b: girêdana hîdrojenê, c: dîpol-dîpol"
        },
        {
          "tr": "a: iyonik bağ, b: iyonik bağ, c: kovalent bağ",
          "en": "a: ionic bond, b: ionic bond, c: covalent bond",
          "de": "a: Ionenbindung, b: Ionenbindung, c: kovalente Bindung",
          "fr": "a : liaison ionique, b : liaison ionique, c : liaison covalente",
          "ru": "a: ионная связь, b: ионная связь, c: ковалентная связь",
          "ar": "a: رابطة أيونية، b: رابطة أيونية، c: رابطة تساهمية",
          "zh": "a：离子键，b：离子键，c：共价键",
          "ku": "a: girêdana îyonîk, b: girêdana îyonîk, c: girêdana kovalent"
        },
        {
          "tr": "a: dipol-dipol, b: iyon-dipol, c: London kuvveti",
          "en": "a: dipole-dipole, b: ion-dipole, c: London force",
          "de": "a: Dipol-Dipol, b: Ion-Dipol, c: London-Kraft",
          "fr": "a : dipôle-dipôle, b : ion-dipôle, c : force de London",
          "ru": "a: диполь-диполь, b: ион-диполь, c: лондоновская сила",
          "ar": "a: ثنائي القطب–ثنائي القطب، b: أيون–ثنائي القطب، c: قوة لندن",
          "zh": "a：偶极-偶极，b：离子-偶极，c：色散力",
          "ku": "a: dîpol-dîpol, b: îyon-dîpol, c: hêza London"
        },
        {
          "tr": "a: iyonik bağ, b: iyon-dipol, c: dipol-dipol",
          "en": "a: ionic bond, b: ion-dipole, c: dipole-dipole",
          "de": "a: Ionenbindung, b: Ion-Dipol, c: Dipol-Dipol",
          "fr": "a : liaison ionique, b : ion-dipôle, c : dipôle-dipôle",
          "ru": "a: ионная связь, b: ион-диполь, c: диполь-диполь",
          "ar": "a: رابطة أيونية، b: أيون–ثنائي القطب، c: ثنائي القطب–ثنائي القطب",
          "zh": "a：离子键，b：离子-偶极，c：偶极-偶极",
          "ku": "a: girêdana îyonîk, b: îyon-dîpol, c: dîpol-dîpol"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "a, Na+ iyonu ile su molekülünün kısmi negatif yüklü O ucu arasındaki; b, Cl- iyonu ile su molekülünün kısmi pozitif yüklü H ucu arasındaki çekimdir. İkisi de bir iyon ile polar bir molekül arasında olduğundan iyon-dipol etkileşimidir. c, bir su molekülünde O'ya bağlı H atomu ile komşu su molekülünün O atomu arasındadır; bu bir hidrojen bağıdır. Çözünme sırasında iyonlar arasındaki iyonik bağlar yenilir; iyonlarla su arasında yeni iyonik ya da kovalent bağ oluşmaz.",
        "en": "a is the attraction between the Na+ ion and the partially negative O end of a water molecule; b is the attraction between the Cl- ion and the partially positive H end of a water molecule. Both act between an ion and a polar molecule, so both are ion-dipole interactions. c acts between an H atom bonded to O in one water molecule and the O atom of a neighbouring water molecule: a hydrogen bond. During dissolution the ionic bonding between the ions is overcome; no new ionic or covalent bonds form between the ions and water.",
        "de": "a ist die Anziehung zwischen dem Na+-Ion und dem partiell negativen O-Ende eines Wassermoleküls, b die Anziehung zwischen dem Cl--Ion und dem partiell positiven H-Ende eines Wassermoleküls. Beide wirken zwischen einem Ion und einem polaren Molekül und sind daher Ion-Dipol-Wechselwirkungen. c wirkt zwischen einem an O gebundenen H-Atom eines Wassermoleküls und dem O-Atom eines benachbarten Wassermoleküls: eine Wasserstoffbrücke. Beim Lösen wird die Ionenbindung zwischen den Ionen überwunden; zwischen Ionen und Wasser entstehen keine neuen Ionen- oder kovalenten Bindungen.",
        "fr": "a est l'attraction entre l'ion Na+ et l'extrémité O partiellement négative d'une molécule d'eau ; b est l'attraction entre l'ion Cl- et l'extrémité H partiellement positive d'une molécule d'eau. Toutes deux s'exercent entre un ion et une molécule polaire : ce sont des interactions ion-dipôle. c s'exerce entre un atome H lié à O dans une molécule d'eau et l'atome O d'une molécule d'eau voisine : c'est une liaison hydrogène. Lors de la dissolution, la liaison ionique entre les ions est rompue ; aucune nouvelle liaison ionique ou covalente ne se forme entre les ions et l'eau.",
        "ru": "a — притяжение между ионом Na+ и частично отрицательным концом O молекулы воды; b — притяжение между ионом Cl- и частично положительным концом H молекулы воды. Оба действуют между ионом и полярной молекулой, поэтому это ион-дипольные взаимодействия. c действует между атомом H, связанным с O в одной молекуле воды, и атомом O соседней молекулы воды — это водородная связь. При растворении ионная связь между ионами разрушается; новых ионных или ковалентных связей между ионами и водой не образуется.",
        "ar": "a هو التجاذب بين أيون Na+ وطرف O السالب جزئيًا في جزيء الماء، وb هو التجاذب بين أيون Cl- وطرف H الموجب جزئيًا في جزيء الماء. وكلاهما بين أيون وجزيء قطبي، فهما تآثرا أيون–ثنائي القطب. أما c فبين ذرة H مرتبطة بـ O في جزيء ماء وذرة O في جزيء ماء مجاور، وهي رابطة هيدروجينية. أثناء الذوبان يُتغلَّب على الترابط الأيوني بين الأيونات، ولا تتكوّن روابط أيونية أو تساهمية جديدة بين الأيونات والماء.",
        "zh": "a 是 Na+ 与水分子带部分负电的 O 端之间的吸引；b 是 Cl- 与水分子带部分正电的 H 端之间的吸引。两者都发生在离子与极性分子之间，属于离子-偶极作用。c 发生在一个水分子中与 O 相连的 H 原子和相邻水分子的 O 原子之间，是氢键。溶解时离子间的离子键被克服，离子与水之间并不形成新的离子键或共价键。",
        "ku": "a kişandina di navbera îyona Na+ û serê O yê qismî neyînî yê molekula avê de ye; b kişandina di navbera îyona Cl- û serê H yê qismî erênî yê molekula avê de ye. Herdu jî di navbera îyonekê û molekuleke polar de ne, ji ber vê têkiliya îyon-dîpol in. c di navbera atoma H ya bi O ve girêdayî ya molekuleke avê û atoma O ya molekula avê ya cîran de ye; ev girêdana hîdrojenê ye. Di dema helînê de girêdana îyonîk a di navbera îyonan de tê bindestkirin; di navbera îyonan û avê de girêdana îyonîk an kovalent a nû çênabe."
      },
      "figure": {
        "kind": "svg",
        "width": 340,
        "height": 192,
        "markup": "<circle cx=\"55\" cy=\"70\" r=\"22\" class=\"qf-fill\"/><text x=\"55\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">Na⁺</text><circle cx=\"153\" cy=\"54\" r=\"9\" class=\"qf-fill\"/><text x=\"153\" y=\"58\" text-anchor=\"middle\" class=\"qf-small\">H</text><circle cx=\"153\" cy=\"86\" r=\"9\" class=\"qf-fill\"/><text x=\"153\" y=\"90\" text-anchor=\"middle\" class=\"qf-small\">H</text><circle cx=\"135\" cy=\"70\" r=\"13\" class=\"qf-fill\"/><text x=\"135\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">O</text><line x1=\"78\" y1=\"70\" x2=\"121\" y2=\"70\" class=\"qf-dash\"/><text x=\"100\" y=\"61\" text-anchor=\"middle\" class=\"qf-big\">a</text><circle cx=\"302\" cy=\"70\" r=\"26\" class=\"qf-fill\"/><text x=\"302\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">Cl⁻</text><circle cx=\"205\" cy=\"52\" r=\"9\" class=\"qf-fill\"/><text x=\"205\" y=\"56\" text-anchor=\"middle\" class=\"qf-small\">H</text><circle cx=\"218\" cy=\"70\" r=\"13\" class=\"qf-fill\"/><text x=\"218\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">O</text><circle cx=\"238\" cy=\"70\" r=\"9\" class=\"qf-fill\"/><text x=\"238\" y=\"74\" text-anchor=\"middle\" class=\"qf-small\">H</text><line x1=\"248\" y1=\"70\" x2=\"275\" y2=\"70\" class=\"qf-dash\"/><text x=\"261\" y=\"61\" text-anchor=\"middle\" class=\"qf-big\">b</text><circle cx=\"103\" cy=\"143\" r=\"9\" class=\"qf-fill\"/><text x=\"103\" y=\"147\" text-anchor=\"middle\" class=\"qf-small\">H</text><circle cx=\"115\" cy=\"160\" r=\"13\" class=\"qf-fill\"/><text x=\"115\" y=\"164\" text-anchor=\"middle\" class=\"qf-strong\">O</text><circle cx=\"135\" cy=\"160\" r=\"9\" class=\"qf-fill\"/><text x=\"135\" y=\"164\" text-anchor=\"middle\" class=\"qf-small\">H</text><line x1=\"145\" y1=\"160\" x2=\"181\" y2=\"160\" class=\"qf-dash\"/><circle cx=\"195\" cy=\"160\" r=\"13\" class=\"qf-fill\"/><text x=\"195\" y=\"164\" text-anchor=\"middle\" class=\"qf-strong\">O</text><circle cx=\"211\" cy=\"175\" r=\"9\" class=\"qf-fill\"/><text x=\"211\" y=\"179\" text-anchor=\"middle\" class=\"qf-small\">H</text><circle cx=\"211\" cy=\"145\" r=\"9\" class=\"qf-fill\"/><text x=\"211\" y=\"149\" text-anchor=\"middle\" class=\"qf-small\">H</text><text x=\"163\" y=\"151\" text-anchor=\"middle\" class=\"qf-big\">c</text>"
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
        "ar": "في أيّ الخيارات الآتية وردت صيغة المركب الأيوني المتكوّن من العنصرين 13Al و8O واسمه على نحو صحيح؟",
        "zh": "由 13Al 和 8O 两种元素形成的离子化合物，其化学式和名称正确的是哪一项？",
        "ku": "Formula û navê pêkhateya îyonîk a ku di navbera elementên 13Al û 8O de çêdibe di kîjan vebijarkê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "AlO – alüminyum oksit",
          "en": "AlO – aluminium oxide",
          "de": "AlO – Aluminiumoxid",
          "fr": "AlO – oxyde d'aluminium",
          "ru": "AlO — оксид алюминия",
          "ar": "AlO – أكسيد الألومنيوم",
          "zh": "AlO – 氧化铝",
          "ku": "AlO – oksîda alumînyûmê"
        },
        {
          "tr": "Al3O2 – alüminyum oksit",
          "en": "Al3O2 – aluminium oxide",
          "de": "Al3O2 – Aluminiumoxid",
          "fr": "Al3O2 – oxyde d'aluminium",
          "ru": "Al3O2 — оксид алюминия",
          "ar": "Al3O2 – أكسيد الألومنيوم",
          "zh": "Al3O2 – 氧化铝",
          "ku": "Al3O2 – oksîda alumînyûmê"
        },
        {
          "tr": "Al2O3 – alüminyum trioksit",
          "en": "Al2O3 – aluminium trioxide",
          "de": "Al2O3 – Aluminiumtrioxid",
          "fr": "Al2O3 – trioxyde d'aluminium",
          "ru": "Al2O3 — триоксид алюминия",
          "ar": "Al2O3 – ثلاثي أكسيد الألومنيوم",
          "zh": "Al2O3 – 三氧化铝",
          "ku": "Al2O3 – trîoksîda alumînyûmê"
        },
        {
          "tr": "AlO3 – alüminyum trioksit",
          "en": "AlO3 – aluminium trioxide",
          "de": "AlO3 – Aluminiumtrioxid",
          "fr": "AlO3 – trioxyde d'aluminium",
          "ru": "AlO3 — триоксид алюминия",
          "ar": "AlO3 – ثلاثي أكسيد الألومنيوم",
          "zh": "AlO3 – 三氧化铝",
          "ku": "AlO3 – trîoksîda alumînyûmê"
        },
        {
          "tr": "Al2O3 – alüminyum oksit",
          "en": "Al2O3 – aluminium oxide",
          "de": "Al2O3 – Aluminiumoxid",
          "fr": "Al2O3 – oxyde d'aluminium",
          "ru": "Al2O3 — оксид алюминия",
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
        "ru": "13Al (2-8-3) отдаёт 3 электрона и образует ион Al3+, 8O (2-6) принимает 2 электрона и образует ион O2-. Чтобы суммарный заряд был равен нулю, 2 иона Al3+ (+6) соединяются с 3 ионами O2- (−6): Al2O3. Ионные соединения называют по катиону и аниону без числовых приставок: оксид алюминия. Название «триоксид алюминия» содержит лишнюю для ионного соединения приставку и соответствовало бы формуле AlO3; формулы AlO, Al3O2 и AlO3 не электронейтральны.",
        "ar": "يفقد 13Al (2-8-3) ثلاثة إلكترونات مكوّناً Al3+، ويكتسب 8O (2-6) إلكترونين مكوّناً O2-. ولتكون الشحنة الكلية صفراً يتحد 2 Al3+ (+6) مع 3 O2- (−6): Al2O3. وتُسمّى المركبات الأيونية باسم الأيونين دون بادئات عددية: أكسيد الألومنيوم. أما «ثلاثي أكسيد الألومنيوم» فيستخدم بادئة غير لازمة ويقابل الصيغة AlO3، والصيغ AlO وAl3O2 وAlO3 غير متعادلة الشحنة.",
        "zh": "13Al(2-8-3)失去 3 个电子形成 Al3+，8O(2-6)得到 2 个电子形成 O2-。要使总电荷为零，2 个 Al3+(+6)与 3 个 O2-(−6)结合：Al2O3。离子化合物按“阴离子 + 阳离子”命名，不用数字前缀：氧化铝。“三氧化铝”对应的是 AlO3，与该化合物不符；AlO、Al3O2 和 AlO3 的电荷都不平衡。",
        "ku": "13Al (2-8-3) bi dayîna 3 elektronan îyona Al3+, 8O (2-6) jî bi wergirtina 2 elektronan îyona O2- çêdike. Ji bo ku bara giştî sifir be, 2 Al3+ (+6) û 3 O2- (−6) dibin yek: Al2O3. Pêkhateyên îyonîk bi navê anyonê û navê katyonê, bê pêşgirên hejmarî tên binavkirin: oksîda alumînyûmê. Navê \"trîoksîda alumînyûmê\" di pêkhateyeke îyonîk de pêşgireke hejmarî ya nepêwîst bi kar tîne û li formula AlO3 tê; AlO, Al3O2 û AlO3 hevsengiya baran pêk naynin."
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
          "ku": "Tetraoksîda dîazotê"
        },
        {
          "tr": "Diazot pentaoksit",
          "en": "Dinitrogen pentoxide",
          "de": "Distickstoffpentoxid",
          "fr": "Pentaoxyde de diazote",
          "ru": "Пентаоксид диазота",
          "ar": "خماسي أكسيد ثنائي النيتروجين",
          "zh": "五氧化二氮",
          "ku": "Pentaoksîda dîazotê"
        },
        {
          "tr": "Diazot trioksit",
          "en": "Dinitrogen trioxide",
          "de": "Distickstofftrioxid",
          "fr": "Trioxyde de diazote",
          "ru": "Триоксид диазота",
          "ar": "ثلاثي أكسيد ثنائي النيتروجين",
          "zh": "三氧化二氮",
          "ku": "Trîoksîda dîazotê"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "İki ametalden oluşan kovalent bileşiklerde her atomun sayısı Yunanca ön eklerle belirtilir: 2 = di, 5 = penta. Önce formülde ilk yazılan element (azot), sonra ikinci element oksit olarak okunur: N2O5 = diazot pentaoksit. Ön eksiz \"azot oksit\" adı birden çok bileşiği karşılar; tetraoksit N2O4'e, trioksit N2O3'e aittir; \"pentaazot dioksit\" sayıları ters okur.",
        "en": "In covalent compounds of two non-metals, the number of each atom is shown with Greek prefixes: 2 = di, 5 = penta. The first element in the formula (nitrogen) is named first, then the second as oxide: N2O5 = dinitrogen pentoxide. \"Nitrogen oxide\" without prefixes fits several compounds; tetroxide is N2O4, trioxide is N2O3; \"pentanitrogen dioxide\" reverses the numbers.",
        "de": "Bei kovalenten Verbindungen zweier Nichtmetalle gibt man die Atomzahlen mit griechischen Präfixen an: 2 = di, 5 = penta. Zuerst das erste Element (Stickstoff), dann das zweite als Oxid: N2O5 = Distickstoffpentoxid. „Stickstoffoxid“ ohne Präfixe passt auf mehrere Verbindungen; Tetroxid ist N2O4, Trioxid N2O3; „Pentastickstoffdioxid“ vertauscht die Zahlen.",
        "fr": "Dans les composés covalents de deux non-métaux, le nombre de chaque atome est indiqué par des préfixes grecs : 2 = di, 5 = penta. N2O5 se nomme pentaoxyde de diazote. « Oxyde d'azote » sans préfixe désigne plusieurs composés ; le tétraoxyde est N2O4, le trioxyde N2O3 ; « dioxyde de pentaazote » inverse les nombres.",
        "ru": "В ковалентных соединениях двух неметаллов число атомов указывают греческими приставками: 2 = ди, 5 = пента. Поэтому N2O5 — пентаоксид диазота. Название «оксид азота» без приставок подходит сразу нескольким соединениям; тетраоксид диазота — это N2O4, триоксид диазота — N2O3; в названии «диоксид пентаазота» числа переставлены.",
        "ar": "في المركبات التساهمية المكوّنة من لافلزين يُشار إلى عدد كل ذرة ببادئات يونانية: 2 = ثنائي، 5 = خماسي. فـ N2O5 هو خماسي أكسيد ثنائي النيتروجين. والاسم «أكسيد النيتروجين» دون بادئات يصدق على عدة مركبات، ورباعي الأكسيد هو N2O4 وثلاثي الأكسيد هو N2O3، و«ثنائي أكسيد خماسي النيتروجين» يعكس الأعداد.",
        "zh": "由两种非金属组成的共价化合物用数字前缀表示各原子的个数：2 = 二，5 = 五。N2O5 读作五氧化二氮。不带前缀的“氧化氮”可指多种化合物；四氧化二氮是 N2O4，三氧化二氮是 N2O3；“二氧化五氮”把数字颠倒了。",
        "ku": "Di pêkhateyên kovalent ên ji du nemetalan pêk tên de, hejmara her atomê bi pêşgirên yewnanî tê nîşandan: 2 = dî, 5 = penta. Elementa ku di formulê de pêşî hatiye nivîsandin (azot) û elementa duyem wekî oksîd tê xwendin: N2O5 = pentaoksîda dîazotê. Navê \"oksîda azotê\" yê bê pêşgir li gelek pêkhateyan tê; tetraoksîd ya N2O4, trîoksîd jî ya N2O3 ye; \"dîoksîda pentaazotê\" hejmaran berevajî dixwîne."
      }
    },
    {
      "id": "u03-twin05",
      "stem": {
        "tr": "Aşağıda bazı maddeler ve bu maddelerde atomlar arasında bulunan bağ türleri eşleştirilmiştir. Bu eşleştirmelerden hangileri doğrudur?\nI. NaCl – iyonik bağ\nII. Cl2 – polar kovalent bağ\nIII. MgO – kovalent bağ",
        "en": "Some substances are matched below with the type of bond between their atoms. Which of these matches are correct?\nI. NaCl – ionic bond\nII. Cl2 – polar covalent bond\nIII. MgO – covalent bond",
        "de": "Unten sind einige Stoffe mit der Bindungsart zwischen ihren Atomen zugeordnet. Welche Zuordnungen sind richtig?\nI. NaCl – Ionenbindung\nII. Cl2 – polare kovalente Bindung\nIII. MgO – kovalente Bindung",
        "fr": "Quelques substances sont associées ci-dessous au type de liaison entre leurs atomes. Lesquelles de ces associations sont correctes ?\nI. NaCl – liaison ionique\nII. Cl2 – liaison covalente polaire\nIII. MgO – liaison covalente",
        "ru": "Ниже указаны вещества и тип связи между атомами в них. Какие соответствия верны?\nI. NaCl — ионная связь\nII. Cl2 — ковалентная полярная связь\nIII. MgO — ковалентная связь",
        "ar": "فيما يلي مزاوجة بين بعض المواد ونوع الرابطة بين ذراتها. أيّ هذه المزاوجات صحيحة؟\nI. NaCl – رابطة أيونية\nII. Cl2 – رابطة تساهمية قطبية\nIII. MgO – رابطة تساهمية",
        "zh": "下面把一些物质与其原子间的化学键类型进行了对应。哪些对应是正确的？\nI. NaCl – 离子键\nII. Cl2 – 极性共价键\nIII. MgO – 共价键",
        "ku": "Li jêr hin made bi cureyê girêdana navbera atomên wan re hatine cotkirin. Kîjan ji van cotkirinan rast in?\nI. NaCl – girêdana îyonîk\nII. Cl2 – girêdana kovalent a polar\nIII. MgO – girêdana kovalent"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
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
      "correctIndex": 0,
      "explanation": {
        "tr": "I doğrudur: Na metali elektron verir, Cl ametali alır; oluşan Na+ ve Cl- iyonları arasında iyonik bağ vardır. II yanlıştır: Cl2'de aynı cins iki atom bağ elektronlarını eşit çeker, bağ apolar kovalenttir. III yanlıştır: Mg bir metal, O bir ametaldir; Mg2+ ve O2- iyonları arasında iyonik bağ oluşur. Doğru yanıt: Yalnız I.",
        "en": "I is true: the metal Na gives an electron and the non-metal Cl takes it; Na+ and Cl- are held by an ionic bond. II is false: in Cl2 two identical atoms share the bonding electrons equally, so the bond is non-polar covalent. III is false: Mg is a metal and O a non-metal; an ionic bond forms between Mg2+ and O2-. Answer: only I.",
        "de": "I ist richtig: Das Metall Na gibt ein Elektron ab, das Nichtmetall Cl nimmt es auf; zwischen Na+ und Cl- besteht eine Ionenbindung. II ist falsch: In Cl2 ziehen zwei gleiche Atome die Bindungselektronen gleich stark an, die Bindung ist unpolar kovalent. III ist falsch: Mg ist ein Metall, O ein Nichtmetall; zwischen Mg2+ und O2- besteht eine Ionenbindung. Antwort: nur I.",
        "fr": "I est vraie : le métal Na cède un électron que le non-métal Cl capte ; Na+ et Cl- sont unis par une liaison ionique. II est fausse : dans Cl2, deux atomes identiques attirent également les électrons de liaison, la liaison est covalente apolaire. III est fausse : Mg est un métal et O un non-métal ; une liaison ionique s'établit entre Mg2+ et O2-. Réponse : seulement I.",
        "ru": "I верно: металл Na отдаёт электрон, неметалл Cl его принимает; между Na+ и Cl- — ионная связь. II неверно: в Cl2 два одинаковых атома притягивают электроны связи одинаково, связь ковалентная неполярная. III неверно: Mg — металл, O — неметалл; между Mg2+ и O2- образуется ионная связь. Ответ: только I.",
        "ar": "العبارة I صحيحة: يفقد فلز Na إلكتروناً ويكتسبه لافلز Cl، وبين Na+ وCl- رابطة أيونية. العبارة II خاطئة: في Cl2 تجذب ذرتان متماثلتان إلكترونات الرابطة بالتساوي فالرابطة تساهمية غير قطبية. العبارة III خاطئة: Mg فلز وO لافلز، فتتكوّن بين Mg2+ وO2- رابطة أيونية. الإجابة: I فقط.",
        "zh": "I 正确：金属 Na 失去电子，非金属 Cl 得到电子，Na+ 与 Cl- 之间是离子键。II 错误：Cl2 中两个相同原子对成键电子吸引相同，是非极性共价键。III 错误：Mg 是金属，O 是非金属，Mg2+ 与 O2- 之间形成离子键。答案：仅 I。",
        "ku": "I rast e: metala Na elektronekê dide, nemetala Cl wê werdigire; di navbera îyonên Na+ û Cl- yên ku çêdibin de girêdana îyonîk heye. II şaş e: di Cl2 de du atomên ji heman cureyê elektronên girêdanê wekhev dikişînin, loma girêdan kovalenta nepolar e. III şaş e: Mg metal, O jî nemetal e; di navbera îyonên Mg2+ û O2- de girêdana îyonîk çêdibe. Bersiva rast: Tenê I."
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
        "ku": "Rêzkirina xalên kelînê yên madeyên He, CH4, H2O û NaCl di zexta 1 atm de ji bilind ber bi nizm kîjan e?"
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
        "ru": "В NaCl частицы удерживаются прочными ионными связями; при кипении их нужно преодолеть, поэтому температура кипения NaCl самая высокая. Между молекулами H2O действуют водородные связи, а между молекулами CH4 — только лондоновские силы; хотя молярные массы близки (18 и 16 г/моль), водородная связь сильнее, поэтому H2O > CH4. He — одноатомный газ, у него всего 2 электрона, поэтому лондоновские силы у него самые слабые. Порядок: NaCl > H2O > CH4 > He.",
        "ar": "تتماسك دقائق NaCl بروابط أيونية قوية بين الأيونات، ويتطلب غليانه التغلب عليها، لذا فدرجة غليانه هي الأعلى. وتتجاذب جزيئات H2O بروابط هيدروجينية وجزيئات CH4 بقوى لندن فقط؛ ومع أن كتلتيهما الموليتين متقاربتان (18 و16 g/mol) فالرابطة الهيدروجينية أقوى، إذن H2O > CH4. وHe أحادي الذرة وله إلكترونان فقط فقوى لندن فيه هي الأضعف. الترتيب: NaCl > H2O > CH4 > He.",
        "zh": "NaCl 中微粒靠离子之间强的离子键结合，沸腾必须克服这种强相互作用，所以沸点最高。H2O 分子间有氢键，CH4 分子间只有色散力；虽然两者摩尔质量相近(18 和 16 g/mol)，但氢键更强，所以 H2O > CH4。He 是单原子、只有 2 个电子，色散力最弱。顺序为 NaCl > H2O > CH4 > He。",
        "ku": "Di NaCl de perçe bi girêdanên îyonîk ên xurt ên navbera îyonan bi hev re tên girtin; ji bo kelînê divê ev têkiliyên xurt werin derbaskirin, loma xala kelînê ya wê herî bilind e. Di navbera molekulên H2O de girêdanên hîdrojenê, di navbera molekulên CH4 de jî tenê hêzên London hene; her çend girseyên wan ên molî nêzîkî hev bin jî (18 û 16 g/mol), girêdana hîdrojenê xurttir e, loma H2O > CH4. He yekatomî ye û tenê 2 elektronên wê hene; hêzên London ên wê herî qels in. Rêzkirin: NaCl > H2O > CH4 > He."
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
        "ku": "Li jêr hin cotên perçeyan û li hember her yekê cureyekî têkiliyê hatine dayîn. Têkiliya hatî dayîn di navbera kîjan cotê perçeyan de çênabe?"
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
          "ku": "HCl – HCl: têkiliya dîpol-dîpol"
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
          "ku": "O2 – H2O: têkiliya dîpol – dîpola înduksiyonî"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Hidrojen bağı için H atomunun F, O veya N'ye bağlı olması gerekir. CH4'te H atomları elektronegatifliği düşük karbona bağlıdır ve molekül apolardır; CH4 molekülleri arasında yalnızca London kuvvetleri vardır. He atomları arasında London, polar HCl molekülleri arasında dipol-dipol, N–H ve O–H bağları içeren NH3 ile H2O arasında hidrojen bağı, polar H2O ile apolar O2 arasında dipol-indüklenmiş dipol etkileşimi doğru verilmiştir.",
        "en": "A hydrogen bond needs H bonded to F, O or N. In CH4 the H atoms are bonded to carbon, which has low electronegativity, and the molecule is non-polar; only London forces act between CH4 molecules. London forces between He atoms, dipole–dipole between polar HCl molecules, hydrogen bonding between NH3 and H2O (N–H and O–H bonds) and dipole–induced dipole between polar H2O and non-polar O2 are all correct.",
        "de": "Eine Wasserstoffbrücke erfordert an F, O oder N gebundenes H. In CH4 sind die H-Atome an den wenig elektronegativen Kohlenstoff gebunden, das Molekül ist unpolar; zwischen CH4-Molekülen wirken nur London-Kräfte. London-Kräfte zwischen He-Atomen, Dipol-Dipol zwischen polaren HCl-Molekülen, Wasserstoffbrücken zwischen NH3 und H2O und Dipol-induzierter Dipol zwischen polarem H2O und unpolarem O2 sind richtig.",
        "fr": "Une liaison hydrogène exige un H lié à F, O ou N. Dans CH4, les H sont liés au carbone, peu électronégatif, et la molécule est apolaire : seules des forces de London s'exercent entre molécules de CH4. Les forces de London entre atomes de He, dipôle-dipôle entre molécules polaires de HCl, liaison hydrogène entre NH3 et H2O et dipôle-dipôle induit entre H2O polaire et O2 apolaire sont correctes.",
        "ru": "Для водородной связи нужен атом H, связанный с F, O или N. В CH4 атомы H связаны с малоэлектроотрицательным углеродом, молекула неполярна; между молекулами CH4 действуют лишь лондоновские силы. Лондоновские силы между атомами He, диполь-дипольное взаимодействие между полярными молекулами HCl, водородная связь между NH3 и H2O и взаимодействие диполь – наведённый диполь между полярной H2O и неполярным O2 указаны верно.",
        "ar": "تتطلب الرابطة الهيدروجينية ذرة H مرتبطة بـ F أو O أو N. وفي CH4 ترتبط ذرات H بالكربون منخفض السالبية الكهربائية والجزيء غير قطبي، فلا يوجد بين جزيئات CH4 إلا قوى لندن. أما قوى لندن بين ذرات He، وتآثر ثنائي القطب–ثنائي القطب بين جزيئات HCl القطبية، والرابطة الهيدروجينية بين NH3 وH2O، وتآثر ثنائي القطب–ثنائي القطب المستحث بين H2O القطبي وO2 غير القطبي فكلها صحيحة.",
        "zh": "形成氢键要求 H 与 F、O 或 N 相连。CH4 中 H 与电负性较小的碳相连，且分子是非极性的，CH4 分子之间只有色散力。He 原子间的色散力、极性 HCl 分子间的偶极-偶极作用、含 N–H 和 O–H 键的 NH3 与 H2O 之间的氢键、极性 H2O 与非极性 O2 之间的偶极-诱导偶极作用都是正确的。",
        "ku": "Ji bo girêdana hîdrojenê divê atoma H bi F, O an N ve girêdayî be. Di CH4 de atomên H bi karbonê ve girêdayî ne ku elektronegatîfiya wê kêm e û molekul nepolar e; di navbera molekulên CH4 de tenê hêzên London hene. Hêzên London di navbera atomên He de, têkiliya dîpol-dîpol di navbera molekulên HCl ên polar de, girêdana hîdrojenê di navbera NH3 û H2O de (ku girêdanên N–H û O–H dihewînin) û têkiliya dîpol – dîpola înduksiyonî di navbera H2O ya polar û O2 ya nepolar de rast hatine dayîn."
      }
    },
    {
      "id": "u03-twin08",
      "stem": {
        "tr": "CO2 molekülünün Lewis yapısında bağ yapan elektron çifti sayısı ve ortaklanmamış (bağ yapmamış) elektron çifti sayısı sırasıyla aşağıdakilerin hangisinde doğru verilmiştir? (6C, 8O)",
        "en": "In the Lewis structure of CO2, what are the number of bonding electron pairs and the number of lone (non-bonding) electron pairs, respectively? (6C, 8O)",
        "de": "Wie viele bindende Elektronenpaare und wie viele freie (nichtbindende) Elektronenpaare enthält die Lewis-Formel von CO2? (6C, 8O)",
        "fr": "Dans la structure de Lewis de CO2, quels sont respectivement le nombre de doublets liants et le nombre de doublets non liants ? (6C, 8O)",
        "ru": "Сколько связывающих и сколько неподелённых электронных пар (соответственно) содержит структура Льюиса молекулы CO2? (6C, 8O)",
        "ar": "ما عدد أزواج الإلكترونات الرابطة وعدد أزواج الإلكترونات غير الرابطة (الحرة) في بنية لويس لجزيء CO2 على الترتيب؟ (6C، 8O)",
        "zh": "CO2 分子的路易斯结构中，成键电子对数和孤电子对（未成键电子对）数依次为多少？(6C、8O)",
        "ku": "Di avahiya Lewis a molekula CO2 de hejmara cotên elektronan ên girêdanê û hejmara cotên elektronan ên nehevpar (bêgirêdan) bi rêzê di kîjan vebijarkê de rast hatine dayîn? (6C, 8O)"
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
        "zh": "C 有 4 个价电子，每个 O 有 6 个：共 4 + 2·6 = 16 个电子，即 8 对。为使各原子达到 8 电子稳定结构，C 与每个 O 各形成一个双键：O=C=O。两个双键含 4 对成键电子，其余 8 − 4 = 4 对为孤电子对，每个 O 上各 2 对。若认为是单键，会得到 2 对成键电子和 6 对孤电子对，但这样碳达不到 8 电子稳定结构。",
        "ku": "4 elektronên valansê yên C û 6 elektronên valansê yên her O hene: bi giştî 4 + 2·6 = 16 elektron, ango 8 cotên elektronan. Ji bo temamkirina oktetê C bi her O re girêdaneke ducar çêdike: O=C=O. Du girêdanên ducar 4 cotên elektronan ên girêdanê dihewînin. 8 − 4 = 4 cotên mayî wekî 2 cotên nehevpar li ser her O cih digirin. Texmîna girêdanên yekane digihîje encama 2 cotên girêdanê û 6 cotên nehevpar, lê wê demê okteta C temam nabe."
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
          "ru": "He — атом",
          "ar": "He – ذرة",
          "zh": "He – 原子",
          "ku": "He – atom"
        },
        {
          "tr": "SO4 2- – molekül",
          "en": "SO4 2- – molecule",
          "de": "SO4 2- – Molekül",
          "fr": "SO4 2- – molécule",
          "ru": "SO4 2- — молекула",
          "ar": "SO4 2- – جزيء",
          "zh": "SO4 2- – 分子",
          "ku": "SO4 2- – molekul"
        },
        {
          "tr": "O3 – molekül",
          "en": "O3 – molecule",
          "de": "O3 – Molekül",
          "fr": "O3 – molécule",
          "ru": "O3 — молекула",
          "ar": "O3 – جزيء",
          "zh": "O3 – 分子",
          "ku": "O3 – molekul"
        },
        {
          "tr": "NH4+ – çok atomlu iyon",
          "en": "NH4+ – polyatomic ion",
          "de": "NH4+ – mehratomiges Ion",
          "fr": "NH4+ – ion polyatomique",
          "ru": "NH4+ — многоатомный ион",
          "ar": "NH4+ – أيون متعدد الذرات",
          "zh": "NH4+ – 多原子离子",
          "ku": "NH4+ – îyona piratomî"
        },
        {
          "tr": "Cl- – tek atomlu iyon",
          "en": "Cl- – monatomic ion",
          "de": "Cl- – einatomiges Ion",
          "fr": "Cl- – ion monoatomique",
          "ru": "Cl- — одноатомный ион",
          "ar": "Cl- – أيون أحادي الذرة",
          "zh": "Cl- – 单原子离子",
          "ku": "Cl- – îyona yekatomî"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kimyasal türler atom, molekül ve iyon olarak sınıflandırılır. SO4 2- birden fazla atom içerse de toplam elektriksel yükü olduğundan molekül değil, çok atomlu bir iyondur (sülfat iyonu). He tek başına bulunan atom, O3 yüksüz atom grubu olan bir molekül, NH4+ çok atomlu, Cl- tek atomlu iyondur.",
        "en": "Chemical species are classified as atoms, molecules and ions. Although SO4 2- contains several atoms, it carries an overall charge, so it is a polyatomic ion (sulfate), not a molecule. He is a free atom, O3 an uncharged group of atoms (a molecule), NH4+ a polyatomic ion and Cl- a monatomic ion.",
        "de": "Chemische Teilchen werden in Atome, Moleküle und Ionen eingeteilt. SO4 2- enthält zwar mehrere Atome, ist aber insgesamt geladen und daher ein mehratomiges Ion (Sulfat), kein Molekül. He ist ein freies Atom, O3 eine ungeladene Atomgruppe (Molekül), NH4+ ein mehratomiges und Cl- ein einatomiges Ion.",
        "fr": "Les espèces chimiques se classent en atomes, molécules et ions. Bien que SO4 2- contienne plusieurs atomes, il porte une charge globale : c'est un ion polyatomique (sulfate), pas une molécule. He est un atome libre, O3 un groupe d'atomes non chargé (molécule), NH4+ un ion polyatomique et Cl- un ion monoatomique.",
        "ru": "Химические частицы делят на атомы, молекулы и ионы. Хотя SO4 2- содержит несколько атомов, у него есть общий заряд, поэтому это многоатомный ион (сульфат), а не молекула. He — свободный атом, O3 — незаряженная группа атомов (молекула), NH4+ — многоатомный ион, Cl- — одноатомный ион.",
        "ar": "تُصنَّف الأنواع الكيميائية إلى ذرات وجزيئات وأيونات. ومع أن SO4 2- يحتوي على عدة ذرات فإنه يحمل شحنة كلية، فهو أيون متعدد الذرات (أيون الكبريتات) لا جزيء. أما He فذرة منفردة، وO3 مجموعة ذرات غير مشحونة (جزيء)، وNH4+ أيون متعدد الذرات، وCl- أيون أحادي الذرة.",
        "zh": "化学微粒分为原子、分子和离子。SO4 2- 虽然含有多个原子，但整体带电荷，所以是多原子离子（硫酸根），而不是分子。He 是独立存在的原子，O3 是不带电的原子团（分子），NH4+ 是多原子离子，Cl- 是单原子离子。",
        "ku": "Cureyên kîmyewî wekî atom, molekul û îyon tên dabeşkirin. Her çend SO4 2- gelek atoman dihewîne jî, ji ber ku bara wê ya elektrîkê ya giştî heye, ne molekul e, îyoneke piratomî ye (îyona sulfatê). He atomeke serbixwe, O3 molekulek (komeke atoman a bêbar), NH4+ îyoneke piratomî û Cl- jî îyoneke yekatomî ye."
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
        "ku": "Derbarê çêbûna pêkhateya NaCl ji atomên 11Na û 17Cl de kîjan ji van hukman rast in?\nI. Atoma Na 1 elektronê dide.\nII. Her du îyonên ku çêdibin xwedî rêzkirina elektronan a gaza esîl in.\nIII. Na û Cl elektronan bi hev re bi kar tînin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Na (2-8-1) son katmanındaki 1 elektronu vererek Na+ (2-8) olur ve Ne düzenine ulaşır; I doğrudur. Cl (2-8-7) bu elektronu alarak Cl- (2-8-8) olur ve Ar düzenine ulaşır; böylece II de doğrudur. III yanlıştır: elektron ortaklaşması kovalent bağın özelliğidir; NaCl'de elektron Na'dan Cl'ye aktarılır ve zıt yüklü iyonlar elektrostatik çekimle bağlanır. Doğru yanıt: I ve II.",
        "en": "Na (2-8-1) gives up its single outer electron to become Na+ (2-8), the Ne arrangement; I is true. Cl (2-8-7) takes that electron to become Cl- (2-8-8), the Ar arrangement, so II is true as well. III is false: sharing electrons is the feature of covalent bonding; in NaCl the electron is transferred from Na to Cl and the oppositely charged ions are held by electrostatic attraction. Answer: I and II.",
        "de": "Na (2-8-1) gibt sein einziges Außenelektron ab und wird zu Na+ (2-8) mit Ne-Konfiguration; I ist richtig. Cl (2-8-7) nimmt es auf und wird zu Cl- (2-8-8) mit Ar-Konfiguration; auch II ist richtig. III ist falsch: Elektronenteilung kennzeichnet die kovalente Bindung; in NaCl wird das Elektron von Na auf Cl übertragen, und die entgegengesetzt geladenen Ionen ziehen sich elektrostatisch an. Antwort: I und II.",
        "fr": "Na (2-8-1) cède son unique électron externe et devient Na+ (2-8), configuration de Ne : I est vraie. Cl (2-8-7) capte cet électron et devient Cl- (2-8-8), configuration d'Ar : II est vraie aussi. III est fausse : la mise en commun d'électrons caractérise la liaison covalente ; dans NaCl l'électron est transféré de Na à Cl et les ions de charges opposées s'attirent électrostatiquement. Réponse : I et II.",
        "ru": "Na (2-8-1) отдаёт единственный внешний электрон и становится Na+ (2-8) с конфигурацией Ne — I верно. Cl (2-8-7) принимает этот электрон и становится Cl- (2-8-8) с конфигурацией Ar — II тоже верно. III неверно: обобществление электронов характерно для ковалентной связи; в NaCl электрон переходит от Na к Cl, а разноимённые ионы удерживаются электростатическим притяжением. Ответ: I и II.",
        "ar": "يفقد Na (2-8-1) إلكترونه الخارجي الوحيد فيصبح Na+ (2-8) بترتيب Ne، فالعبارة I صحيحة. ويكتسب Cl (2-8-7) هذا الإلكترون فيصبح Cl- (2-8-8) بترتيب Ar، فالعبارة II صحيحة أيضاً. العبارة III خاطئة: تشارك الإلكترونات سمة الرابطة التساهمية، أما في NaCl فينتقل الإلكترون من Na إلى Cl وتترابط الأيونات المتعاكسة الشحنة بالتجاذب الكهروستاتيكي. الإجابة: I وII.",
        "zh": "Na(2-8-1)失去最外层的 1 个电子成为 Na+(2-8)，达到 Ne 的排布，I 正确。Cl(2-8-7)得到这个电子成为 Cl-(2-8-8)，达到 Ar 的排布，II 也正确。III 错误：共用电子是共价键的特征；NaCl 中电子由 Na 转移给 Cl，带相反电荷的离子靠静电引力结合。答案：I 和 II。",
        "ku": "Na (2-8-1) elektrona yekane ya qata xwe ya dawî dide, dibe Na+ (2-8) û digihîje rêzkirina Ne; I rast e. Cl (2-8-7) vê elektronê werdigire, dibe Cl- (2-8-8) û digihîje rêzkirina Ar; ji ber vê yekê II jî rast e. III şaş e: hevparkirina elektronan taybetmendiya girêdana kovalent e; di NaCl de elektron ji Na derbasî Cl dibe û îyonên bi barên dijber bi kişandina elektrostatîk bi hev ve girêdayî dibin. Bersiva rast: I û II."
      }
    },
    {
      "id": "u03-twin11",
      "stem": {
        "tr": "Tabloda bazı elementlerin elektronegatiflik değerleri verilmiştir.\nTablodaki değerler dikkate alındığında aşağıdaki yargılardan hangileri doğrudur?\nI. C–H bağı, O–H bağından daha az polardır.\nII. N–H bağının polarlığı, C–O bağınınkinden büyüktür.\nIII. Tablodaki iki element arasında oluşabilecek bağlar içinde iyonik karakteri en büyük olan, Na ile F arasındaki bağdır.",
        "en": "The table gives the electronegativity values of some elements.\nTaking these values into account, which of the following statements are correct?\nI. The C–H bond is less polar than the O–H bond.\nII. The N–H bond is more polar than the C–O bond.\nIII. Of all bonds that can form between two elements in the table, the bond between Na and F has the greatest ionic character.",
        "de": "Die Tabelle gibt die Elektronegativitätswerte einiger Elemente an.\nWelche der folgenden Aussagen sind unter Berücksichtigung dieser Werte richtig?\nI. Die C–H-Bindung ist weniger polar als die O–H-Bindung.\nII. Die N–H-Bindung ist polarer als die C–O-Bindung.\nIII. Von allen Bindungen, die sich zwischen zwei Elementen der Tabelle bilden können, hat die Bindung zwischen Na und F den größten ionischen Charakter.",
        "fr": "Le tableau donne les électronégativités de quelques éléments.\nCompte tenu de ces valeurs, lesquelles des affirmations suivantes sont exactes ?\nI. La liaison C–H est moins polaire que la liaison O–H.\nII. La liaison N–H est plus polaire que la liaison C–O.\nIII. Parmi toutes les liaisons possibles entre deux éléments du tableau, celle entre Na et F a le plus grand caractère ionique.",
        "ru": "В таблице приведены значения электроотрицательности некоторых элементов.\nКакие из утверждений верны с учётом этих значений?\nI. Связь C–H менее полярна, чем связь O–H.\nII. Связь N–H полярнее связи C–O.\nIII. Из всех связей, которые могут образоваться между двумя элементами таблицы, наибольшую степень ионности имеет связь между Na и F.",
        "ar": "يبيّن الجدول قيم الكهرسلبية لبعض العناصر.\nبالاستناد إلى هذه القيم، أيّ العبارات الآتية صحيحة؟\nI. الرابطة C–H أقل قطبية من الرابطة O–H.\nII. قطبية الرابطة N–H أكبر من قطبية الرابطة C–O.\nIII. من بين جميع الروابط الممكنة بين عنصرين من الجدول، تكون الرابطة بين Na وF هي الأكبر في الصفة الأيونية.",
        "zh": "表中给出了一些元素的电负性数值。\n根据这些数值，下列说法中正确的是哪些？\nI. C–H 键的极性比 O–H 键小。\nII. N–H 键的极性比 C–O 键大。\nIII. 在表中任意两种元素之间可能形成的键中，Na 与 F 之间的键离子性最强。",
        "ku": "Di tabloyê de nirxên elektronegatîfiyê yên hin elementan hatine dayîn.\nBi berçavgirtina van nirxan, kîjan ji van hukman rast in?\nI. Girêdana C–H ji girêdana O–H kêmtir polar e.\nII. Polarîteya girêdana N–H ji ya girêdana C–O mezintir e.\nIII. Di nav girêdanên ku dikarin di navbera du elementên tabloyê de çêbin de, girêdana di navbera Na û F de xwedî karaktera îyonîk a herî mezin e."
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
        "tr": "Bağın polarlığı ve iyonik karakteri, bağlı atomların elektronegatiflik farkı arttıkça artar. I: C–H farkı 2,5 − 2,1 = 0,4; O–H farkı 3,5 − 2,1 = 1,4; C–H daha az polardır (doğru). II: N–H farkı 3,0 − 2,1 = 0,9; C–O farkı 3,5 − 2,5 = 1,0; N–H bağı C–O bağından daha az polardır (yanlış). III: en büyük fark, elektronegatifliği en küçük Na (0,9) ile en büyük F (4,0) arasındadır: 3,1; Na–F bağının iyonik karakteri en büyüktür (doğru). Doğru yanıt: I ve III.",
        "en": "Bond polarity and ionic character increase with the electronegativity difference of the bonded atoms. I: C–H difference 2.5 − 2.1 = 0.4, O–H difference 3.5 − 2.1 = 1.4, so C–H is less polar (correct). II: N–H difference 3.0 − 2.1 = 0.9, C–O difference 3.5 − 2.5 = 1.0, so N–H is less polar than C–O (false). III: the largest difference is between Na, the least electronegative (0.9), and F, the most electronegative (4.0): 3.1, so the Na–F bond has the greatest ionic character (correct). Answer: I and III.",
        "de": "Polarität und ionischer Charakter einer Bindung steigen mit der Elektronegativitätsdifferenz der gebundenen Atome. I: C–H 2,5 − 2,1 = 0,4; O–H 3,5 − 2,1 = 1,4; C–H ist weniger polar (richtig). II: N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; N–H ist weniger polar als C–O (falsch). III: Die größte Differenz besteht zwischen Na mit der kleinsten (0,9) und F mit der größten Elektronegativität (4,0): 3,1; die Na–F-Bindung hat den größten ionischen Charakter (richtig). Antwort: I und III.",
        "fr": "La polarité et le caractère ionique d'une liaison augmentent avec la différence d'électronégativité des atomes liés. I : C–H 2,5 − 2,1 = 0,4 ; O–H 3,5 − 2,1 = 1,4 ; C–H est moins polaire (exacte). II : N–H 3,0 − 2,1 = 0,9 ; C–O 3,5 − 2,5 = 1,0 ; N–H est moins polaire que C–O (fausse). III : la plus grande différence est entre Na, le moins électronégatif (0,9), et F, le plus électronégatif (4,0) : 3,1 ; la liaison Na–F a le plus grand caractère ionique (exacte). Réponse : I et III.",
        "ru": "Полярность и степень ионности связи растут с разностью электроотрицательностей связанных атомов. I: C–H 2,5 − 2,1 = 0,4; O–H 3,5 − 2,1 = 1,4; C–H менее полярна (верно). II: N–H 3,0 − 2,1 = 0,9; C–O 3,5 − 2,5 = 1,0; N–H менее полярна, чем C–O (неверно). III: наибольшая разность — между Na с наименьшей (0,9) и F с наибольшей (4,0) электроотрицательностью: 3,1; связь Na–F имеет наибольшую ионность (верно). Ответ: I и III.",
        "ar": "تزداد قطبية الرابطة وصفتها الأيونية بازدياد فرق الكهرسلبية بين الذرتين المرتبطتين. I: فرق C–H هو 2,5 − 2,1 = 0,4، وفرق O–H هو 3,5 − 2,1 = 1,4، فـ C–H أقل قطبية (صحيحة). II: فرق N–H هو 3,0 − 2,1 = 0,9، وفرق C–O هو 3,5 − 2,5 = 1,0، فـ N–H أقل قطبية من C–O (خاطئة). III: أكبر فرق بين Na الأقل كهرسلبية (0,9) وF الأعلى (4,0) وهو 3,1، فالرابطة Na–F هي الأكبر في الصفة الأيونية (صحيحة). الإجابة: I و III.",
        "zh": "键的极性和离子性随成键原子电负性差的增大而增大。I：C–H 差 2.5 − 2.1 = 0.4，O–H 差 3.5 − 2.1 = 1.4，C–H 极性较小（正确）。II：N–H 差 3.0 − 2.1 = 0.9，C–O 差 3.5 − 2.5 = 1.0，N–H 的极性比 C–O 小（错误）。III：电负性最小的 Na（0.9）与最大的 F（4.0）之差最大，为 3.1，Na–F 键离子性最强（正确）。答案：I 和 III。",
        "ku": "Polarîte û karaktera îyonîk a girêdanê her ku ferqa elektronegatîfiyê ya atomên girêdayî zêde dibe, zêde dibin. I: ferqa C–H 2,5 − 2,1 = 0,4; ferqa O–H 3,5 − 2,1 = 1,4; C–H kêmtir polar e (rast). II: ferqa N–H 3,0 − 2,1 = 0,9; ferqa C–O 3,5 − 2,5 = 1,0; N–H ji C–O kêmtir polar e (şaş). III: ferqa herî mezin di navbera Na ya bi elektronegatîfiya herî biçûk (0,9) û F ya bi ya herî mezin (4,0) de ye: 3,1; karaktera îyonîk a girêdana Na–F herî mezin e (rast). Bersiv: I û III."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Element",
            "en": "Element",
            "de": "Element",
            "fr": "Élément",
            "ru": "Элемент",
            "ar": "العنصر",
            "zh": "元素",
            "ku": "Element"
          },
          {
            "tr": "Elektronegatiflik",
            "en": "Electronegativity",
            "de": "Elektronegativität",
            "fr": "Électronégativité",
            "ru": "Электроотрицательность",
            "ar": "الكهرسلبية",
            "zh": "电负性",
            "ku": "Elektronegatîfî"
          }
        ],
        "rows": [
          [
            "H",
            "2,1"
          ],
          [
            "C",
            "2,5"
          ],
          [
            "N",
            "3,0"
          ],
          [
            "O",
            "3,5"
          ],
          [
            "F",
            "4,0"
          ],
          [
            "Na",
            "0,9"
          ]
        ]
      }
    },
    {
      "id": "u03-twin12",
      "stem": {
        "tr": "Şekilde K, L ve M katılarının tanecik modelleri gösterilmiştir.\nBu katılarla ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "The figure shows particle models of the solids K, L and M.\nWhich of the following is correct about these solids?",
        "de": "Die Abbildung zeigt Teilchenmodelle der Feststoffe K, L und M.\nWelche der folgenden Aussagen über diese Feststoffe ist richtig?",
        "fr": "La figure montre les modèles particulaires des solides K, L et M.\nLaquelle des affirmations suivantes sur ces solides est exacte ?",
        "ru": "На рисунке показаны модели частиц твёрдых веществ K, L и M.\nКакое утверждение об этих веществах верно?",
        "ar": "يبيّن الشكل النماذج الجسيمية للمواد الصلبة K وL وM.\nأيّ العبارات الآتية صحيحة بشأن هذه المواد الصلبة؟",
        "zh": "图中给出了固体 K、L、M 的粒子模型。\n关于这些固体，下列说法正确的是哪一项？",
        "ku": "Di şiklê de modelên perçeyan ên hişkên K, L û M hatine nîşandan.\nDerbarê van hişkan de kîjan rast e?"
      },
      "options": [
        {
          "tr": "K'deki tanecikler, atomlar arasında elektron ortaklaşmasıyla oluşan kovalent bağlarla bir arada tutulur.",
          "en": "The particles in K are held together by covalent bonds formed by electron sharing between atoms.",
          "de": "Die Teilchen in K werden durch kovalente Bindungen zusammengehalten, die durch gemeinsame Elektronenpaare entstehen.",
          "fr": "Les particules de K sont maintenues par des liaisons covalentes formées par mise en commun d'électrons.",
          "ru": "Частицы в K удерживаются ковалентными связями, образованными общими электронными парами.",
          "ar": "تتماسك جسيمات K بروابط تساهمية ناتجة عن تشارك الذرات في الإلكترونات.",
          "zh": "K 中的粒子靠原子间共用电子形成的共价键结合在一起。",
          "ku": "Perçeyên di K de bi girêdanên kovalent ên ji hevparkirina elektronan çêbûne bi hev ve têne girtin."
        },
        {
          "tr": "L katısı hem katı hem de sıvı hâlde elektriği iletir.",
          "en": "Solid L conducts electricity both as a solid and as a liquid.",
          "de": "Der Feststoff L leitet den Strom sowohl im festen als auch im flüssigen Zustand.",
          "fr": "Le solide L conduit l'électricité à l'état solide comme à l'état liquide.",
          "ru": "Вещество L проводит ток и в твёрдом, и в жидком состоянии.",
          "ar": "توصل المادة L الكهرباء في الحالتين الصلبة والسائلة.",
          "zh": "L 在固态和液态时都能导电。",
          "ku": "Hişka L hem di rewşa hişk hem jî di rewşa şile de elektrîkê diguhezîne."
        },
        {
          "tr": "K tel ve levha hâline getirilebilir, L ise darbe ile kırılır.",
          "en": "K can be drawn into wires and hammered into sheets, whereas L shatters when struck.",
          "de": "K lässt sich zu Draht und Blech formen, L dagegen zerbricht bei einem Schlag.",
          "fr": "K peut être étiré en fils et laminé en feuilles, tandis que L se brise sous un choc.",
          "ru": "K можно вытянуть в проволоку и раскатать в лист, а L при ударе раскалывается.",
          "ar": "يمكن سحب K أسلاكًا وطرقه صفائح، أما L فيتحطّم عند الطَّرق.",
          "zh": "K 能拉成丝、压成片，而 L 受撞击会碎裂。",
          "ku": "K dikare bibe têl û pel, lê L bi lêdanê dişkê."
        },
        {
          "tr": "M eritilirken moleküllerdeki atomlar arasındaki kovalent bağlar kırılır.",
          "en": "When M melts, the covalent bonds between the atoms within its molecules are broken.",
          "de": "Beim Schmelzen von M werden die kovalenten Bindungen zwischen den Atomen in den Molekülen gespalten.",
          "fr": "Lors de la fusion de M, les liaisons covalentes entre les atomes des molécules sont rompues.",
          "ru": "При плавлении M разрываются ковалентные связи между атомами внутри молекул.",
          "ar": "عند صهر M تنكسر الروابط التساهمية بين الذرات داخل الجزيئات.",
          "zh": "M 熔化时，分子内原子之间的共价键断裂。",
          "ku": "Dema M dihele, girêdanên kovalent ên di navbera atomên nav molekulan de dişkên."
        },
        {
          "tr": "L'deki tanecikler arasında serbestçe hareket edebilen elektronlar bulunur.",
          "en": "L contains electrons that can move freely between its particles.",
          "de": "In L gibt es Elektronen, die sich frei zwischen den Teilchen bewegen können.",
          "fr": "L contient des électrons qui peuvent se déplacer librement entre ses particules.",
          "ru": "В L есть электроны, свободно перемещающиеся между частицами.",
          "ar": "توجد في L إلكترونات تتحرك بحرية بين جسيماتها.",
          "zh": "L 的粒子之间有可以自由移动的电子。",
          "ku": "Di L de elektronên ku di navbera perçeyan de bi azadî dilivin hene."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "K'de pozitif metal iyonları serbest elektronların oluşturduğu elektron denizi içindedir: metalik katı. Katmanlar kaysa da elektron denizi iyonları bir arada tuttuğundan tel ve levha hâline getirilebilir. L'de katyon ve anyonlar düzenli dizilmiştir: iyonik katı. Darbe ile katmanlar kayınca aynı yüklü iyonlar karşı karşıya gelir ve itme kristali kırar; katı hâlde iyonlar yerinden ayrılamadığı için elektriği yalnızca sıvı hâlde ve sulu çözeltide iletir, serbest elektronu yoktur. M iki atomlu moleküllerden oluşan moleküler katıdır; erirken yalnızca moleküller arası zayıf etkileşimler yenilir, molekül içindeki kovalent bağlar kırılmaz. K'de kovalent bağ yoktur.",
        "en": "In K, positive metal ions sit in a sea of free electrons: a metallic solid. Even when layers slide, the electron sea holds the ions together, so it can be drawn into wires and hammered into sheets. In L, cations and anions are arranged regularly: an ionic solid. When struck, layers slide, ions of the same charge face each other and the repulsion shatters the crystal; since its ions cannot leave their places in the solid, it conducts only when molten or in solution, and it has no free electrons. M is a molecular solid made of diatomic molecules; on melting only the weak intermolecular forces are overcome, the covalent bonds inside the molecules are not broken. There are no covalent bonds in K.",
        "de": "In K befinden sich positive Metallionen in einem Meer freier Elektronen: ein metallischer Feststoff. Auch wenn Schichten gleiten, hält das Elektronengas die Ionen zusammen; deshalb lässt er sich zu Draht und Blech formen. In L sind Kationen und Anionen regelmäßig angeordnet: ein Ionenkristall. Bei einem Schlag verschieben sich die Schichten, gleich geladene Ionen stehen sich gegenüber und die Abstoßung zerbricht den Kristall; da die Ionen im Feststoff ortsfest sind, leitet er nur als Schmelze oder in Lösung und besitzt keine freien Elektronen. M ist ein Molekülkristall aus zweiatomigen Molekülen; beim Schmelzen werden nur die schwachen zwischenmolekularen Kräfte überwunden, die kovalenten Bindungen in den Molekülen bleiben erhalten. In K gibt es keine kovalenten Bindungen.",
        "fr": "Dans K, des ions métalliques positifs baignent dans une mer d'électrons libres : solide métallique. Même si les couches glissent, la mer d'électrons maintient les ions ensemble ; il peut donc être étiré en fils et laminé en feuilles. Dans L, cations et anions sont disposés régulièrement : solide ionique. Sous un choc, les couches glissent, des ions de même charge se font face et la répulsion brise le cristal ; ses ions étant fixes à l'état solide, il ne conduit qu'à l'état fondu ou en solution et ne possède pas d'électrons libres. M est un solide moléculaire formé de molécules diatomiques ; à la fusion, seules les faibles interactions intermoléculaires sont vaincues, les liaisons covalentes internes aux molécules ne sont pas rompues. Il n'y a pas de liaisons covalentes dans K.",
        "ru": "В K положительные ионы металла находятся в «море» свободных электронов — металлическое вещество. Даже при сдвиге слоёв электронный газ удерживает ионы вместе, поэтому его можно вытянуть в проволоку и раскатать в лист. В L катионы и анионы расположены упорядоченно — ионный кристалл. При ударе слои сдвигаются, одноимённые ионы оказываются друг против друга, и отталкивание раскалывает кристалл; в твёрдом виде ионы неподвижны, поэтому ток проводится только в расплаве и растворе, свободных электронов нет. M — молекулярный кристалл из двухатомных молекул; при плавлении преодолеваются лишь слабые межмолекулярные силы, ковалентные связи внутри молекул не разрываются. В K ковалентных связей нет.",
        "ar": "في K أيونات فلزية موجبة داخل بحر من الإلكترونات الحرة: مادة صلبة فلزية. وحتى عند انزلاق الطبقات يبقي بحر الإلكترونات الأيونات متماسكة، لذا يمكن سحبها أسلاكًا وطرقها صفائح. وفي L تنتظم الكاتيونات والأنيونات بترتيب منتظم: مادة صلبة أيونية. عند الطَّرق تنزلق الطبقات فتتقابل الأيونات المتشابهة الشحنة ويحطّم التنافرُ البلورةَ؛ ولأن الأيونات ثابتة في الحالة الصلبة فهي لا توصل الكهرباء إلا مصهورة أو في المحلول، ولا توجد فيها إلكترونات حرة. أما M فمادة صلبة جزيئية من جزيئات ثنائية الذرة؛ عند انصهارها يُتغلَّب على التآثرات الضعيفة بين الجزيئات فقط ولا تنكسر الروابط التساهمية داخل الجزيئات. ولا توجد روابط تساهمية في K.",
        "zh": "K 中金属阳离子处在自由电子形成的“电子海”中：金属晶体。即使原子层滑动，电子海仍把离子维系在一起，因此能拉成丝、压成片。L 中阳离子和阴离子规则排列：离子晶体。受撞击时层间滑动，同种电荷的离子相对，排斥力使晶体碎裂；固态时离子不能离开其位置，所以只在熔融或溶液中导电，且没有自由电子。M 是由双原子分子构成的分子晶体；熔化时只克服较弱的分子间作用力，分子内的共价键不断裂。K 中没有共价键。",
        "ku": "Di K de îyonên metal ên erênî di nav deryaya elektronên azad de ne: hişkeke metalî. Her çend qat bişemitin jî deryaya elektronan îyonan bi hev ve digire, ji ber vê dikare bibe têl û pel. Di L de katyon û anyon bi rêkûpêkî rêz bûne: hişkeke îyonîk. Bi lêdanê qat dişemitin, îyonên bi heman barî li hemberî hev tên û pevxistin krîstalê dişkîne; ji ber ku di rewşa hişk de îyon ji cihê xwe naqetin, tenê di rewşa helandî û di çareseriyê de elektrîkê diguhezîne û elektronên wê yên azad tune ne. M hişkeke molekulî ye ku ji molekulên duatomî pêk tê; dema dihele tenê têkiliyên lawaz ên navbera molekulan têne bindestkirin, girêdanên kovalent ên nav molekulan naşkên. Di K de girêdana kovalent tune ye."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 150,
        "markup": "<rect x=\"8\" y=\"8\" width=\"104\" height=\"110\" class=\"qf-fill\"/><circle cx=\"30\" cy=\"33\" r=\"12\" class=\"qf-fill\"/><text x=\"30\" y=\"37\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"30\" cy=\"63\" r=\"12\" class=\"qf-fill\"/><text x=\"30\" y=\"67\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"30\" cy=\"93\" r=\"12\" class=\"qf-fill\"/><text x=\"30\" y=\"97\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"60\" cy=\"33\" r=\"12\" class=\"qf-fill\"/><text x=\"60\" y=\"37\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"60\" cy=\"63\" r=\"12\" class=\"qf-fill\"/><text x=\"60\" y=\"67\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"60\" cy=\"93\" r=\"12\" class=\"qf-fill\"/><text x=\"60\" y=\"97\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"90\" cy=\"33\" r=\"12\" class=\"qf-fill\"/><text x=\"90\" y=\"37\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"90\" cy=\"63\" r=\"12\" class=\"qf-fill\"/><text x=\"90\" y=\"67\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"90\" cy=\"93\" r=\"12\" class=\"qf-fill\"/><text x=\"90\" y=\"97\" text-anchor=\"middle\" class=\"qf-strong\">+</text><circle cx=\"45\" cy=\"48\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"75\" cy=\"48\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"45\" cy=\"78\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"75\" cy=\"78\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"30\" cy=\"14\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"90\" cy=\"112\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"15\" cy=\"63\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"105\" cy=\"48\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"60\" cy=\"112\" r=\"2.6\" class=\"qf-accent\"/><circle cx=\"60\" cy=\"14\" r=\"2.6\" class=\"qf-accent\"/><text x=\"60\" y=\"140\" text-anchor=\"middle\" class=\"qf-big\">K</text><rect x=\"128\" y=\"8\" width=\"104\" height=\"110\" class=\"qf-fill\"/><circle cx=\"144\" cy=\"27\" r=\"10\" class=\"qf-fill\"/><text x=\"144\" y=\"31\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"144\" cy=\"51\" r=\"7\" class=\"qf-fill\"/><text x=\"144\" y=\"55\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"144\" cy=\"75\" r=\"10\" class=\"qf-fill\"/><text x=\"144\" y=\"79\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"144\" cy=\"99\" r=\"7\" class=\"qf-fill\"/><text x=\"144\" y=\"103\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"168\" cy=\"27\" r=\"7\" class=\"qf-fill\"/><text x=\"168\" y=\"31\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"168\" cy=\"51\" r=\"10\" class=\"qf-fill\"/><text x=\"168\" y=\"55\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"168\" cy=\"75\" r=\"7\" class=\"qf-fill\"/><text x=\"168\" y=\"79\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"168\" cy=\"99\" r=\"10\" class=\"qf-fill\"/><text x=\"168\" y=\"103\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"192\" cy=\"27\" r=\"10\" class=\"qf-fill\"/><text x=\"192\" y=\"31\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"192\" cy=\"51\" r=\"7\" class=\"qf-fill\"/><text x=\"192\" y=\"55\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"192\" cy=\"75\" r=\"10\" class=\"qf-fill\"/><text x=\"192\" y=\"79\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"192\" cy=\"99\" r=\"7\" class=\"qf-fill\"/><text x=\"192\" y=\"103\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"216\" cy=\"27\" r=\"7\" class=\"qf-fill\"/><text x=\"216\" y=\"31\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"216\" cy=\"51\" r=\"10\" class=\"qf-fill\"/><text x=\"216\" y=\"55\" text-anchor=\"middle\" class=\"qf-strong\">−</text><circle cx=\"216\" cy=\"75\" r=\"7\" class=\"qf-fill\"/><text x=\"216\" y=\"79\" text-anchor=\"middle\" class=\"qf-small\">+</text><circle cx=\"216\" cy=\"99\" r=\"10\" class=\"qf-fill\"/><text x=\"216\" y=\"103\" text-anchor=\"middle\" class=\"qf-strong\">−</text><text x=\"180\" y=\"140\" text-anchor=\"middle\" class=\"qf-big\">L</text><rect x=\"248\" y=\"8\" width=\"104\" height=\"110\" class=\"qf-fill\"/><circle cx=\"266\" cy=\"30\" r=\"8\" class=\"qf-accent\"/><circle cx=\"279\" cy=\"30\" r=\"8\" class=\"qf-accent\"/><circle cx=\"310\" cy=\"26\" r=\"8\" class=\"qf-accent\"/><circle cx=\"323\" cy=\"26\" r=\"8\" class=\"qf-accent\"/><circle cx=\"278\" cy=\"64\" r=\"8\" class=\"qf-accent\"/><circle cx=\"291\" cy=\"64\" r=\"8\" class=\"qf-accent\"/><circle cx=\"318\" cy=\"72\" r=\"8\" class=\"qf-accent\"/><circle cx=\"331\" cy=\"72\" r=\"8\" class=\"qf-accent\"/><circle cx=\"268\" cy=\"98\" r=\"8\" class=\"qf-accent\"/><circle cx=\"281\" cy=\"98\" r=\"8\" class=\"qf-accent\"/><circle cx=\"310\" cy=\"104\" r=\"8\" class=\"qf-accent\"/><circle cx=\"323\" cy=\"104\" r=\"8\" class=\"qf-accent\"/><text x=\"300\" y=\"140\" text-anchor=\"middle\" class=\"qf-big\">M</text>",
        "caption": {
          "tr": "+: katyon, −: anyon, küçük noktalar: serbest elektronlar, birbirine değen daireler: molekül",
          "en": "+: cation, −: anion, small dots: free electrons, touching circles: a molecule",
          "de": "+: Kation, −: Anion, kleine Punkte: freie Elektronen, sich berührende Kreise: ein Molekül",
          "fr": "+ : cation, − : anion, petits points : électrons libres, cercles qui se touchent : une molécule",
          "ru": "+: катион, −: анион, мелкие точки: свободные электроны, соприкасающиеся кружки: молекула",
          "ar": "+: كاتيون، −: أنيون، النقاط الصغيرة: إلكترونات حرة، الدوائر المتلامسة: جزيء",
          "zh": "+：阳离子，−：阴离子，小圆点：自由电子，相互接触的圆圈：一个分子",
          "ku": "+: katyon, −: anyon, xalên biçûk: elektronên azad, xelekên ku bi hev dikevin: molekulek"
        }
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
        "ku": "Kîjan ji van madeyan dikarin bi molekulên avê re girêdana hîdrojenê çêbikin?\nI. NH3\nII. CH4\nIII. CH3OH"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
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
        "tr": "NH3'te H atomları N'ye bağlıdır ve N üzerinde ortaklanmamış elektron çifti vardır; su ile hidrojen bağı kurar (I doğru). CH3OH'ta O–H grubu ve O üzerindeki ortaklanmamış çiftler bulunur; su ile hidrojen bağı kurar (III doğru). CH4'te H atomları karbona bağlıdır ve molekülde F, O veya N yoktur; suyla hidrojen bağı kuramaz, su ile arasında dipol-indüklenmiş dipol etkileşimi oluşur (II yanlış). Doğru yanıt: I ve III.",
        "en": "In NH3 the H atoms are bonded to N, which carries a lone pair, so it hydrogen-bonds with water (I true). CH3OH has an O–H group and lone pairs on O, so it hydrogen-bonds with water (III true). In CH4 the H atoms are bonded to carbon and there is no F, O or N; it cannot hydrogen-bond with water — only dipole–induced dipole interactions form (II false). Answer: I and III.",
        "de": "In NH3 sind die H-Atome an N gebunden, das ein freies Elektronenpaar trägt; es bildet mit Wasser Wasserstoffbrücken (I richtig). CH3OH hat eine O–H-Gruppe und freie Paare am O; ebenfalls Wasserstoffbrücken (III richtig). In CH4 sind die H-Atome an Kohlenstoff gebunden, es gibt kein F, O oder N; mit Wasser entsteht nur Dipol-induzierter-Dipol-Wechselwirkung (II falsch). Antwort: I und III.",
        "fr": "Dans NH3, les H sont liés à N, porteur d'un doublet non liant : liaisons hydrogène avec l'eau (I vraie). CH3OH possède un groupe O–H et des doublets sur O : liaisons hydrogène avec l'eau (III vraie). Dans CH4, les H sont liés au carbone et il n'y a ni F, ni O, ni N : pas de liaison hydrogène, seulement des interactions dipôle-dipôle induit avec l'eau (II fausse). Réponse : I et III.",
        "ru": "В NH3 атомы H связаны с N, у которого есть неподелённая пара, поэтому NH3 образует водородные связи с водой (I верно). У CH3OH есть группа O–H и неподелённые пары на O — тоже водородные связи (III верно). В CH4 атомы H связаны с углеродом, а F, O или N нет; с водой возникает лишь взаимодействие диполь – наведённый диполь (II неверно). Ответ: I и III.",
        "ar": "في NH3 ترتبط ذرات H بالنيتروجين الذي يحمل زوجاً حراً، فيكوّن روابط هيدروجينية مع الماء (I صحيحة). وفي CH3OH مجموعة O–H وأزواج حرة على O، فيكوّن روابط هيدروجينية مع الماء (III صحيحة). أما في CH4 فترتبط ذرات H بالكربون ولا يوجد F أو O أو N، فلا يكوّن روابط هيدروجينية بل يتآثر مع الماء بتآثر ثنائي القطب–ثنائي القطب المستحث (II خاطئة). الإجابة: I وIII.",
        "zh": "NH3 中 H 与 N 相连，N 上有孤电子对，能与水形成氢键(I 正确)。CH3OH 含 O–H 基团且 O 上有孤电子对，能与水形成氢键(III 正确)。CH4 中 H 与碳相连，分子中没有 F、O、N，不能与水形成氢键，与水之间只有偶极-诱导偶极作用(II 错误)。答案：I 和 III。",
        "ku": "Di NH3 de atomên H bi N ve girêdayî ne û li ser N cotekî elektronan ê nehevpar heye; bi avê re girêdana hîdrojenê çêdike (I rast e). Di CH3OH de koma O–H û cotên nehevpar ên li ser O hene; bi avê re girêdana hîdrojenê çêdike (III rast e). Di CH4 de atomên H bi karbonê ve girêdayî ne û di molekulê de F, O an N tune ye; bi avê re girêdana hîdrojenê çênake, di navbera wê û avê de têkiliya dîpol – dîpola înduksiyonî çêdibe (II şaş e). Bersiva rast: I û III."
      }
    },
    {
      "id": "u03-twin14",
      "stem": {
        "tr": "Saf su, şekerli su ve tuzlu (NaCl) su ile yapılan bir elektrik iletkenliği deneyinde yalnızca tuzlu sudaki devrede ampul yanmıştır. Bu sonucun en doğru açıklaması aşağıdakilerden hangisidir?",
        "en": "In an electrical conductivity experiment with pure water, sugar water and salt (NaCl) water, the bulb lit only in the circuit with salt water. Which is the best explanation of this result?",
        "de": "In einem Leitfähigkeitsversuch mit reinem Wasser, Zuckerwasser und Salzwasser (NaCl) leuchtete die Lampe nur im Stromkreis mit Salzwasser. Welche Erklärung ist am zutreffendsten?",
        "fr": "Lors d'une expérience de conductivité avec de l'eau pure, de l'eau sucrée et de l'eau salée (NaCl), l'ampoule ne s'est allumée qu'avec l'eau salée. Quelle est la meilleure explication ?",
        "ru": "В опыте по электропроводности с чистой водой, раствором сахара и раствором поваренной соли (NaCl) лампочка загорелась только в цепи с раствором соли. Какое объяснение этого результата наиболее верно?",
        "ar": "في تجربة توصيل كهربائي باستخدام ماء نقي وماء محلّى بالسكر وماء مملح (NaCl)، أضاء المصباح في دارة الماء المملح فقط. ما أدق تفسير لهذه النتيجة؟",
        "zh": "用纯水、糖水和食盐(NaCl)水做导电性实验，只有食盐水所在电路中的灯泡亮了。对这一结果最合理的解释是哪一项？",
        "ku": "Di ceribandineke guhezîna elektrîkê de ku bi ava paqij, ava bi şekir û ava bi xwê (NaCl) hate kirin, tenê di çerxa ava bi xwê de ampûl vêket. Ravekirina herî rast a vê encamê kîjan e?"
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
          "ku": "Molekulên şekir bi avê re dikevin reaksiyona kîmyewî û guhezînê asteng dikin."
        },
        {
          "tr": "NaCl'de atomlar kovalent bağlarla bağlı olduğundan elektronlar çözeltide serbest kalır.",
          "en": "In NaCl the atoms are covalently bonded, so electrons become free in solution.",
          "de": "In NaCl sind die Atome kovalent gebunden, daher werden in Lösung Elektronen frei.",
          "fr": "Dans NaCl les atomes sont liés de façon covalente, si bien que des électrons deviennent libres en solution.",
          "ru": "В NaCl атомы связаны ковалентно, поэтому в растворе освобождаются электроны.",
          "ar": "ترتبط الذرات في NaCl بروابط تساهمية فتتحرر الإلكترونات في المحلول.",
          "zh": "NaCl 中原子以共价键结合，因此电子在溶液中变成自由电子。",
          "ku": "Ji ber ku di NaCl de atom bi girêdanên kovalent bi hev ve girêdayî ne, elektron di çareseriyê de azad dimînin."
        },
        {
          "tr": "NaCl suda serbestçe hareket eden iyonlarına ayrışır; şeker ise suda molekülleri hâlinde çözünür.",
          "en": "NaCl separates in water into freely moving ions, whereas sugar dissolves as molecules.",
          "de": "NaCl zerfällt in Wasser in frei bewegliche Ionen, Zucker löst sich dagegen in Form von Molekülen.",
          "fr": "NaCl se dissocie dans l'eau en ions libres de se déplacer, tandis que le sucre se dissout sous forme de molécules.",
          "ru": "NaCl в воде распадается на свободно движущиеся ионы, а сахар растворяется в виде молекул.",
          "ar": "يتفكك NaCl في الماء إلى أيونات تتحرك بحرية، أما السكر فيذوب على شكل جزيئات.",
          "zh": "NaCl 在水中解离成可自由移动的离子，而糖以分子形式溶解。",
          "ku": "NaCl di avê de li îyonên xwe yên ku bi azadî dilivin vediqete; şekir jî bi rewşa molekulan di avê de dihele."
        },
        {
          "tr": "Şekerin molekül kütlesi büyük olduğu için suda hiç çözünmez.",
          "en": "Sugar has a large molecular mass, so it does not dissolve in water at all.",
          "de": "Zucker hat eine große Molekülmasse und löst sich daher gar nicht in Wasser.",
          "fr": "Le sucre a une masse moléculaire élevée et ne se dissout donc pas du tout dans l'eau.",
          "ru": "У сахара большая молекулярная масса, поэтому он совсем не растворяется в воде.",
          "ar": "لأن كتلة جزيء السكر كبيرة فهو لا يذوب في الماء إطلاقاً.",
          "zh": "糖的分子质量大，所以根本不溶于水。",
          "ku": "Ji ber ku girseya molekulî ya şekir mezin e, qet di avê de nahele."
        },
        {
          "tr": "Tuzlu suda Na ve Cl atomları arasında metalik bağ oluşur.",
          "en": "In salt water metallic bonds form between Na and Cl atoms.",
          "de": "Im Salzwasser bilden sich Metallbindungen zwischen Na- und Cl-Atomen.",
          "fr": "Dans l'eau salée, des liaisons métalliques se forment entre atomes de Na et de Cl.",
          "ru": "В растворе соли между атомами Na и Cl образуется металлическая связь.",
          "ar": "تتكوّن في الماء المملح روابط فلزية بين ذرات Na وCl.",
          "zh": "食盐水中 Na 与 Cl 原子之间形成金属键。",
          "ku": "Di ava bi xwê de di navbera atomên Na û Cl de girêdana metalîk çêdibe."
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
        "ku": "Ji bo ku çareserî herikînê biguhezîne, divê perçeyên barkirî yên ku bi azadî dilivin (îyon) tê de hebin. NaCl, ku pêkhateyeke îyonîk e, dema di avê de dihele li îyonên Na+ û Cl- vediqete û ev îyon herikînê hildigirin. Şekir jî ji molekulên bi girêdanên kovalent pêk tê; di avê de dihele, lê bê ku bibe îyon wekî molekul belav dibe, loma naguhezîne. Şekir di avê de baş dihele; di NaCl de girêdana kovalent an metalîk tune ye."
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
          "ku": "Helîna qeşayê"
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
          "ku": "Sublîmebûna îyodê"
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
          "ku": "Helbûna şekir di avê de"
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
        "ku": "Şewitîn guherîneke kîmyewî ye: girêdanên kovalent ên wekî C–H û C–C yên madeyên di darê de û girêdanên O2 dişikin, girêdanên nû yên CO2 û H2O çêdibin. Helîn, sublîmebûn, buharbûn û helbûna şekir guherînên fîzîkî ne; di van bûyeran de tenê têkiliyên qels ên navmolekulî (girêdana hîdrojenê, hêzên London) tên derbaskirin an ji nû ve rêz dibin, nasnameya madeyan naguhere."
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
        "ar": "الكتلتان الموليتان لـ HCl (36.5 g/mol) وF2 (38 g/mol) متقاربتان، لكن درجة غليان HCl أعلى. ما السبب؟",
        "zh": "HCl(36.5 g/mol)和 F2(38 g/mol)的摩尔质量相近，但 HCl 的沸点更高。原因是什么？",
        "ku": "Girseyên molî yên HCl (36,5 g/mol) û F2 (38 g/mol) nêzîkî hev in, lê xala kelînê ya HCl bilindtir e. Sedema vê kîjan e?"
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
          "ku": "Ji ber ku molekulên HCl polar in, ji bilî hêzên London têkiliyên dîpol-dîpol jî hene."
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
          "ru": "Между молекулами F2 действуют ионные связи.",
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
          "ku": "Girseya molî ya HCl ji ya F2 mezintir e."
        },
        {
          "tr": "F2 molekülündeki kovalent bağ kaynama sırasında kırılır.",
          "en": "The covalent bond in the F2 molecule breaks during boiling.",
          "de": "Die kovalente Bindung im F2-Molekül wird beim Sieden gespalten.",
          "fr": "La liaison covalente de la molécule F2 se rompt pendant l'ébullition.",
          "ru": "Ковалентная связь в молекуле F2 разрывается при кипении.",
          "ar": "تنكسر الرابطة التساهمية في جزيء F2 أثناء الغليان.",
          "zh": "沸腾时 F2 分子中的共价键断裂。",
          "ku": "Girêdana kovalent a molekula F2 di dema kelînê de dişike."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Mol kütleleri ve elektron sayıları yakın olduğundan iki maddenin London kuvvetleri benzerdir. HCl'de H ve Cl'nin elektronegatiflikleri farklıdır, molekül polardır ve moleküller arasında ek olarak dipol-dipol etkileşimleri bulunur; F2 ise apolardır ve yalnızca London kuvvetleri vardır. Hidrojen bağı için H'nin F, O veya N'ye bağlı olması gerekir, H–Cl bağı bu koşulu sağlamaz. F2'nin mol kütlesi zaten biraz daha büyüktür; kaynamada molekül içi bağlar kırılmaz.",
        "en": "With similar molar masses and electron numbers, the two substances have similar London forces. In HCl, H and Cl differ in electronegativity, the molecule is polar and there are additional dipole–dipole interactions; F2 is non-polar with London forces only. A hydrogen bond requires H bonded to F, O or N, which H–Cl does not meet. F2 actually has the slightly larger molar mass, and boiling does not break intramolecular bonds.",
        "de": "Bei ähnlicher molarer Masse und Elektronenzahl sind die London-Kräfte ähnlich. In HCl unterscheiden sich H und Cl in der Elektronegativität, das Molekül ist polar, und es wirken zusätzlich Dipol-Dipol-Kräfte; F2 ist unpolar und hat nur London-Kräfte. Für Wasserstoffbrücken muss H an F, O oder N gebunden sein, was bei H–Cl nicht zutrifft. F2 hat sogar die etwas größere molare Masse; beim Sieden werden keine Bindungen im Molekül gespalten.",
        "fr": "Avec des masses molaires et des nombres d'électrons voisins, les deux substances ont des forces de London semblables. Dans HCl, H et Cl ont des électronégativités différentes, la molécule est polaire et des interactions dipôle-dipôle s'ajoutent ; F2 est apolaire et n'a que des forces de London. Une liaison hydrogène exige un H lié à F, O ou N, ce qui n'est pas le cas de H–Cl. F2 a même une masse molaire un peu plus grande, et l'ébullition ne rompt pas les liaisons internes.",
        "ru": "Молярные массы и числа электронов у двух веществ близки, поэтому лондоновские силы у них сходны. В HCl атомы H и Cl различаются электроотрицательностью, молекула полярна, и между молекулами дополнительно действуют диполь-дипольные взаимодействия; F2 неполярен, и между его молекулами действуют только лондоновские силы. Для водородной связи нужен атом H, связанный с F, O или N, — связь H–Cl этому условию не отвечает. Молярная масса F2 даже немного больше, а при кипении внутримолекулярные связи не разрываются.",
        "ar": "لتقارب الكتلتين الموليتين وعددي الإلكترونات تتشابه قوى لندن في المادتين. وفي HCl تختلف السالبية الكهربائية لـ H وCl فالجزيء قطبي، ويوجد بين جزيئاته إضافةً إلى ذلك تآثر ثنائي القطب–ثنائي القطب، أما F2 فغير قطبي وليس فيه إلا قوى لندن. وتتطلب الرابطة الهيدروجينية ذرة H مرتبطة بـ F أو O أو N وهذا لا يتحقق في H–Cl. والكتلة المولية لـ F2 أكبر قليلاً أصلاً، ولا تنكسر الروابط داخل الجزيء عند الغليان.",
        "zh": "两者摩尔质量和电子数相近，色散力相似。HCl 中 H 与 Cl 电负性不同，分子有极性，分子间还额外存在偶极-偶极作用；F2 是非极性分子，只有色散力。形成氢键要求 H 与 F、O 或 N 相连，H–Cl 不满足这一条件。F2 的摩尔质量其实还略大一些；沸腾时分子内的化学键并不断开。",
        "ku": "Ji ber ku girseyên molî û hejmarên elektronan nêzîkî hev in, hêzên London ên her du madeyan dişibin hev. Di HCl de elektronegatîfiya H û Cl cuda ye, molekul polar e û di navbera molekulan de têkiliyên dîpol-dîpol jî hene; F2 nepolar e û tenê hêzên London hene. Ji bo girêdana hîdrojenê divê H bi F, O an N ve girêdayî be; girêdana H–Cl vî şertî pêk nayne. Girseya molî ya F2 bi rastî hinekî mezintir e; di kelînê de girêdanên hundirmolekulî naşikin."
      }
    }
  ]
};

export default unit03;
