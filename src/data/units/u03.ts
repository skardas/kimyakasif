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
        "tr": "İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.",
        "en": "Ionic bond has a molecular structure and consists of molecules.",
        "de": "Eine Ionenbindung hat eine molekulare Struktur und besteht aus Molekülen.",
        "fr": "La liaison ionique a une structure moléculaire et est constituée de molécules.",
        "ru": "Ионная связь имеет молекулярную структуру и состоит из молекул.",
        "ar": "الرابطة الأيونية لها بنية جزيئية وتتكون من جزيئات.",
        "zh": "离子键具有分子结构，由分子组成。",
        "ku": "Girêdana îyonî xwedî avahiyeke molekulî ye û ji molekulan pêk tê."
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
      }
    },
    {
      "id": "u03-f03",
      "fact": {
        "tr": "Hidrojen bağı; F, O veya N atomuna bağlı H atomu ile komşu moleküldeki F, O veya N atomu arasında oluşan ve nötr moleküller arasındaki en güçlü zayıf etkileşimdir.",
        "en": "A hydrogen bond forms between an H atom bonded to F, O or N and an F, O or N atom of a neighboring molecule; it is the strongest weak interaction between neutral molecules.",
        "de": "Eine Wasserstoffbrückenbindung bildet sich zwischen einem an F, O oder N gebundenen H-Atom und einem F-, O- oder N-Atom eines Nachbarmoleküls; sie ist die stärkste schwache Wechselwirkung zwischen neutralen Molekülen.",
        "fr": "La liaison hydrogène se forme entre un atome H lié à F, O ou N et un atome F, O ou N d'une molécule voisine ; c'est l'interaction faible la plus forte entre molécules neutres.",
        "ru": "Водородная связь образуется между атомом H, связанным с F, O или N, и атомом F, O или N соседней молекулы; это самое сильное слабое взаимодействие между нейтральными молекулами.",
        "ar": "تتكوّن الرابطة الهيدروجينية بين ذرة H مرتبطة بـ F أو O أو N وذرة F أو O أو N في جزيء مجاور، وهي أقوى التفاعلات الضعيفة بين الجزيئات المتعادلة.",
        "zh": "氢键在与F、O或N相连的H原子和相邻分子中的F、O或N原子之间形成，是中性分子之间最强的弱相互作用。",
        "ku": "Girêdana hîdrojenê di navbera atoma H ya bi F, O an N ve girêdayî û atoma F, O an N ya molekula cîran de çêdibe; ew di navbera molekulên bêalî de têkiliya qels a herî xurt e."
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
      }
    },
    {
      "id": "u03-f06",
      "fact": {
        "tr": "İyonik katılar katı halde elektriği iletmez; sıvı halde ve sulu çözeltilerinde serbest iyonlarla iletir.",
        "en": "Ionic solids do not conduct electricity in the solid state; in the molten state and in aqueous solution they conduct by means of free ions.",
        "de": "Ionische Feststoffe leiten im festen Zustand keinen Strom; in der Schmelze und in wässriger Lösung leiten sie über frei bewegliche Ionen.",
        "fr": "Les solides ioniques ne conduisent pas l'électricité à l'état solide ; à l'état fondu et en solution aqueuse, ils conduisent grâce aux ions libres.",
        "ru": "Ионные твёрдые вещества не проводят электрический ток в твёрдом состоянии; в расплаве и в водном растворе они проводят ток за счёт свободных ионов.",
        "ar": "المواد الصلبة الأيونية لا توصل الكهرباء في الحالة الصلبة؛ وتوصلها في الحالة السائلة (المنصهرة) وفي المحاليل المائية بواسطة الأيونات الحرة.",
        "zh": "离子固体在固态时不导电；在熔融状态和水溶液中依靠自由离子导电。",
        "ku": "Madeyên hişk ên îyonî di rewşa hişk de elektrîkê naguhezînin; di rewşa şile (helandî) û di çareseriyên avî de bi îyonên azad elektrîkê diguhezînin."
      },
      "trap": {
        "tr": "Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.",
        "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
        "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
        "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
        "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
        "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
        "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
        "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
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
      }
    },
    {
      "id": "u03-f15",
      "fact": {
        "tr": "Metallerin tel ve levha haline getirilebilmesi elektron denizi modelinin kayma esnekliği ile açıklanır.",
        "en": "The ability to turn metals into wires and sheets is explained by the shear flexibility of the electron sea model.",
        "de": "Die Fähigkeit, Metalle in Drähte und Bleche umzuwandeln, wird durch die Scherflexibilität des Elektronenmeermodells erklärt.",
        "fr": "La capacité à transformer les métaux en fils et en feuilles s’explique par la flexibilité au cisaillement du modèle de la mer d’électrons.",
        "ru": "Способность превращать металлы в проволоку и листы объясняется сдвиговой гибкостью модели электронного моря.",
        "ar": "يتم تفسير القدرة على تحويل المعادن إلى أسلاك وصفائح من خلال مرونة القص لنموذج بحر الإلكترون.",
        "zh": "将金属转变为线材和板材的能力可以通过电子海模型的剪切灵活性来解释。",
        "ku": "Kapasîteya zivirîna metalan di têl û pelan de bi nermbûna guheztinê ya modela deryaya elektronê tê ravekirin."
      },
      "trap": {
        "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.",
        "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
        "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
        "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
        "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
        "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
        "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
        "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
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
        "tr": "Polar kovalent bağ farklı ametaller arasında kutuplu bağdır; apolar kovalent bağ aynı ametaller arasında kutupsuz bağdır.",
        "en": "A polar covalent bond is a polar bond between different nonmetals; A nonpolar covalent bond is a nonpolar bond between the same nonmetals.",
        "de": "Eine polare kovalente Bindung ist eine polare Bindung zwischen verschiedenen Nichtmetallen; Eine unpolare kovalente Bindung ist eine unpolare Bindung zwischen denselben Nichtmetallen.",
        "fr": "Une liaison covalente polaire est une liaison polaire entre différents non-métaux ; Une liaison covalente non polaire est une liaison non polaire entre les mêmes non-métaux.",
        "ru": "Полярная ковалентная связь — это полярная связь между различными неметаллами; Неполярная ковалентная связь – это неполярная связь между одними и теми же неметаллами.",
        "ar": "الرابطة التساهمية القطبية هي رابطة قطبية بين اللافلزات المختلفة؛ الرابطة التساهمية غير القطبية هي رابطة غير قطبية بين نفس اللافلزات.",
        "zh": "极性共价键是不同非金属之间的极性键；非极性共价键是相同非金属之间的非极性键。",
        "ku": "Girêdana kovalentî ya polar girêdanek polar a di navbera nemetalên cihêreng de ye; Girêdana kovalentî ya nepolar girêdanek nepolar di navbera heman nemetalan de ye."
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
        "tr": "Metalik bağ elektron denizi ile pozitif iyonlar arasındaki güçlü bağdır; London kuvveti anlık dipollerle oluşan en zayıf etkileşimdir.",
        "en": "Metallic bonding is the strong bond between a sea of electrons and positive ions; London force is the weakest interaction that occurs with instantaneous dipoles.",
        "de": "Metallbindung ist die starke Bindung zwischen einem Meer aus Elektronen und positiven Ionen; Die Londoner Kraft ist die schwächste Wechselwirkung, die bei momentanen Dipolen auftritt.",
        "fr": "La liaison métallique est le lien fort entre une mer d’électrons et d’ions positifs ; La force de London est l'interaction la plus faible qui se produit avec les dipôles instantanés.",
        "ru": "Металлическая связь — это прочная связь между морем электронов и положительными ионами; Сила Лондона — самое слабое взаимодействие, возникающее с мгновенными диполями.",
        "ar": "الرابطة المعدنية هي الرابطة القوية بين بحر من الإلكترونات والأيونات الموجبة؛ قوة لندن هي أضعف تفاعل يحدث مع ثنائيات القطب اللحظية.",
        "zh": "金属键合是电子海和正离子之间的牢固键合；伦敦力是瞬时偶极子发生的最弱的相互作用。",
        "ku": "Girêdana metalî girêdana xurt a di navbera deryaya elektronan û îyonên erênî de ye; Hêza Londonê têkiliya herî qels e ku bi dupolên tavilê re çêdibe."
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
        "tr": "Molekül içi bağlar kimyasal özellik ve reaktiviteyi belirler; moleküller arası zayıf bağlar kaynama noktası gibi fiziksel halleri belirler.",
        "en": "Intramolecular bonds determine chemical properties and reactivity; Weak intermolecular bonds determine physical states such as boiling points.",
        "de": "Intramolekulare Bindungen bestimmen chemische Eigenschaften und Reaktivität; Schwache intermolekulare Bindungen bestimmen physikalische Zustände wie Siedepunkte.",
        "fr": "Les liaisons intramoléculaires déterminent les propriétés chimiques et la réactivité ; Les liaisons intermoléculaires faibles déterminent les états physiques tels que les points d'ébullition.",
        "ru": "Внутримолекулярные связи определяют химические свойства и реакционную способность; Слабые межмолекулярные связи определяют физические состояния, такие как температура кипения.",
        "ar": "تحدد الروابط داخل الجزيئات الخواص الكيميائية والتفاعلية؛ تحدد الروابط بين الجزيئات الضعيفة الحالات الفيزيائية مثل نقاط الغليان.",
        "zh": "分子内键决定化学性质和反应性；弱分子间键决定物理状态，例如沸点。",
        "ku": "Girêdanên intramolekular taybetmendiyên kîmyewî û reaktîvîteyê diyar dikin; Girêdanên navmolekular ên qels rewşên fizîkî yên wekî xalên kelandinê diyar dikin."
      }
    },
    {
      "id": "u03-c06",
      "conceptA": {
        "tr": "Ağ Örgülü Kovalent Katı",
        "en": "Networked Covalent Solid",
        "de": "Vernetzter kovalenter Feststoff",
        "fr": "Solide covalent en réseau",
        "ru": "Сетевое ковалентное твердое тело",
        "ar": "شبكة تساهمية صلبة",
        "zh": "网络化共价固体",
        "ku": "Madeya Hişk a Tora Kovalent"
      },
      "conceptB": {
        "tr": "Moleküler Katı",
        "en": "Molecular Solid",
        "de": "Molekularer Feststoff",
        "fr": "Solide moléculaire",
        "ru": "Молекулярное твердое вещество",
        "ar": "الصلبة الجزيئية",
        "zh": "分子固体",
        "ku": "Madeya Hişk a Molekulî"
      },
      "distinction": {
        "tr": "Elmas ve kuars gibi ağ örgülü katılar dev kovalent ağa sahiptir ve çok serttir; buz ve kuru buz moleküler katı olup zayıf bağlarla tutunur.",
        "en": "Networked solids such as diamond and quartz have a giant covalent network and are very hard; Ice and dry ice are molecular solids held together by weak bonds.",
        "de": "Vernetzte Festkörper wie Diamant und Quarz verfügen über ein riesiges kovalentes Netzwerk und sind sehr hart; Eis und Trockeneis sind molekulare Feststoffe, die durch schwache Bindungen zusammengehalten werden.",
        "fr": "Les solides en réseau tels que le diamant et le quartz ont un réseau covalent géant et sont très durs ; La glace et la neige carbonique sont des solides moléculaires maintenus ensemble par des liaisons faibles.",
        "ru": "Сетчатые твердые тела, такие как алмаз и кварц, имеют гигантскую ковалентную сеть и очень тверды; Лед и сухой лед представляют собой молекулярные твердые вещества, удерживаемые вместе слабыми связями.",
        "ar": "تمتلك المواد الصلبة المترابطة مثل الماس والكوارتز شبكة تساهمية عملاقة وهي صلبة جدًا؛ الثلج والثلج الجاف عبارة عن مواد صلبة جزيئية متماسكة بروابط ضعيفة.",
        "zh": "诸如金刚石和石英之类的网状固体具有巨大的共价网络并且非常坚硬；冰和干冰是通过弱键结合在一起的分子固体。",
        "ku": "Tiştên bi torê yên wek elmas û quartz xwedî toreke kovalentî ya dêw in û pir hişk in; Qeşa û cemeda zuwa madeyên molekulî ne ku bi girêdanên qels bi hev re têne girtin."
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
        "de": "Bei einer physikalischen Veränderung bleibt die Identität des Stoffes erhalten und meist ändern sich nur schwache Wechselwirkungen; bei einer chemischen Veränderung werden chemische Bindungen gebrochen, neue Bindungen gebildet und neue Stoffe entstehen.",
        "fr": "Lors d'un changement physique, l'identité de la substance est conservée et ce sont généralement les seules interactions faibles qui changent ; lors d'un changement chimique, des liaisons chimiques sont rompues, de nouvelles liaisons se forment et de nouvelles substances apparaissent.",
        "ru": "При физическом изменении вещество сохраняет свою природу и обычно меняются лишь слабые взаимодействия; при химическом изменении разрываются химические связи, образуются новые связи и новые вещества.",
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
        "tr": "Zayıf Etkileşimlerin Güç Sıralaması (En Güçlüden En Zayıfa)",
        "en": "Strength Ranking of Weak Interactions (Strongest to Weakest)",
        "de": "Stärkereihenfolge schwacher Wechselwirkungen (von der stärksten zur schwächsten)",
        "fr": "Classement des interactions faibles par force (de la plus forte à la plus faible)",
        "ru": "Ряд слабых взаимодействий по силе (от самого сильного к самому слабому)",
        "ar": "ترتيب التفاعلات الضعيفة حسب القوة (من الأقوى إلى الأضعف)",
        "zh": "弱相互作用强度排序（由强到弱）",
        "ku": "Rêzkirina Hêza Têkiliyên Qels (Ji ya Herî Xurt ber bi ya Herî Qels)"
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
        "tr": "Hidrojen Bağı Ağı Kurulumu",
        "en": "Formation of a Hydrogen Bond Network",
        "de": "Aufbau eines Wasserstoffbrückennetzwerks",
        "fr": "Formation d'un réseau de liaisons hydrogène",
        "ru": "Образование сети водородных связей",
        "ar": "تكوّن شبكة الروابط الهيدروجينية",
        "zh": "氢键网络的形成",
        "ku": "Çêbûna Tora Girêdana Hîdrojenê"
      },
      "steps": [
        {
          "tr": "Elektronegatif F, O, N atomuna bağlı H",
          "en": "H bonded to electronegative F, O, N atom",
          "de": "H ist an ein elektronegatives F-, O- und N-Atom gebunden",
          "fr": "H lié à un atome électronégatif F, O, N",
          "ru": "H связан с электроотрицательным атомом F, O, N",
          "ar": "H مرتبط بذرة F، O، N السالبة للكهرباء",
          "zh": "H与电负性F、O、N原子键合",
          "ku": "H bi atoma F, O, N elektronegatîf ve girêdayî ye"
        },
        {
          "tr": "H atomu üzerinde kısmi pozitif yük yoğunlaşması",
          "en": "Partial positive charge concentration on the H atom",
          "de": "Teilweise positive Ladungskonzentration am H-Atom",
          "fr": "Concentration partielle de charge positive sur l'atome H",
          "ru": "Концентрация частичного положительного заряда на атоме H",
          "ar": "تركيز الشحنة الموجبة الجزئية على ذرة H",
          "zh": "H原子上集中部分正电荷",
          "ku": "Li ser atoma H-ê ya qismî giraniya barê erênî"
        },
        {
          "tr": "Komşu moleküldeki ortaklanmamış elektron çifti",
          "en": "Unshared electron pair in neighboring molecule",
          "de": "Ungeteiltes Elektronenpaar im benachbarten Molekül",
          "fr": "Paire d'électrons non partagés dans la molécule voisine",
          "ru": "Неразделенная электронная пара в соседней молекуле",
          "ar": "زوج إلكترون غير مشترك في الجزيء المجاور",
          "zh": "相邻分子中的孤对电子",
          "ku": "Di molekula cîran de cotek elektronên neparvekirî"
        },
        {
          "tr": "Moleküller arası güçlü dipol etkileşimi",
          "en": "Strong dipole interaction between molecules",
          "de": "Starke Dipolwechselwirkung zwischen Molekülen",
          "fr": "Forte interaction dipolaire entre les molécules",
          "ru": "Сильное дипольное взаимодействие между молекулами",
          "ar": "تفاعل ثنائي القطب قوي بين الجزيئات",
          "zh": "分子间强偶极相互作用",
          "ku": "Têkiliya dipolê ya bihêz di navbera molekulan de"
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
        "tr": "H2O'da hidrojen atomu elektronegatifliği yüksek oksijene bağlıdır ve molekülleri arasında yoğun fazda hidrojen bağı kurar.",
        "en": "In H2O, the hydrogen atom is bonded to oxygen with high electronegativity and establishes hydrogen bonds between its molecules in the dense phase.",
        "de": "In H2O ist das Wasserstoffatom mit hoher Elektronegativität an Sauerstoff gebunden und baut in der dichten Phase Wasserstoffbrückenbindungen zwischen seinen Molekülen auf.",
        "fr": "Dans H2O, l’atome d’hydrogène est lié à l’oxygène avec une électronégativité élevée et établit des liaisons hydrogène entre ses molécules dans la phase dense.",
        "ru": "В H2O атом водорода связан с кислородом, имеющим высокую электроотрицательность, и устанавливает водородные связи между его молекулами в плотной фазе.",
        "ar": "في H2O، ترتبط ذرة الهيدروجين بالأكسجين بسالبية كهربية عالية وتنشئ روابط هيدروجينية بين جزيئاتها في الطور الكثيف.",
        "zh": "在H2O中，氢原子与具有高电负性的氧键合，并在致密相的分子之间建立氢键。",
        "ku": "Di H2O de, atoma hîdrojenê bi oksîjenê ve bi elektronegatîvbûneke bilind ve tê girêdan û di merheleya qelandî de di navbera molekulên xwe de girêdanên hîdrojenê saz dike."
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
        "tr": "Na+ iyonu ile polar su molekülünün negatif dipolü (oksijen ucu) arasında iyon-dipol etkileşimi kurulur.",
        "en": "An ion-dipole interaction is established between the Na+ ion and the negative dipole (oxygen end) of the polar water molecule.",
        "de": "Es entsteht eine Ionen-Dipol-Wechselwirkung zwischen dem Na+-Ion und dem negativen Dipol (Sauerstoffende) des polaren Wassermoleküls.",
        "fr": "Une interaction ion-dipôle s'établit entre l'ion Na+ et le dipôle négatif (extrémité oxygène) de la molécule d'eau polaire.",
        "ru": "Между ионом Na+ и отрицательным диполем (кислородным концом) полярной молекулы воды устанавливается ионно-дипольное взаимодействие.",
        "ar": "يتم إنشاء تفاعل أيوني ثنائي القطب بين أيون Na+ وثنائي القطب السالب (نهاية الأكسجين) لجزيء الماء القطبي.",
        "zh": "Na+离子和极性水分子的负偶极子（氧端）之间建立离子偶极相互作用。",
        "ku": "Di navbera îyona Na+ û dupola neyînî (dawiya oksîjenê) ya molekula avê ya polar de têkiliyeke îyon-dîpol tê sazkirin."
      }
    },
    {
      "id": "u03-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Türler Arası Etkileşimler ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Intermolecular Interactions, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Zwischenmolekulare Kräfte: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Interactions Intermoléculaires, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Взаимодействия между частицами», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التفاعلات بين الجسيمات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“微粒间相互作用”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.",
          "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
          "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
          "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
          "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
          "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
          "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
          "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
        },
        {
          "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
          "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
          "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
          "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
          "ru": "Связь в молекуле HCl является неполярной ковалентной связью.",
          "ar": "الرابطة في جزيء حمض الهيدروكلوريك هي رابطة تساهمية غير قطبية.",
          "zh": "HCl分子中的键是非极性共价键。",
          "ku": "Girêdana di molekula HCl de girêdaneke kovalentî ya nepolar e."
        },
        {
          "tr": "Hidrojen bağı; F, O veya N atomuna bağlı H atomu ile komşu moleküldeki F, O veya N atomu arasında oluşan ve nötr moleküller arasındaki en güçlü zayıf etkileşimdir.",
          "en": "A hydrogen bond forms between an H atom bonded to F, O or N and an F, O or N atom of a neighboring molecule; it is the strongest weak interaction between neutral molecules.",
          "de": "Eine Wasserstoffbrückenbindung bildet sich zwischen einem an F, O oder N gebundenen H-Atom und einem F-, O- oder N-Atom eines Nachbarmoleküls; sie ist die stärkste schwache Wechselwirkung zwischen neutralen Molekülen.",
          "fr": "La liaison hydrogène se forme entre un atome H lié à F, O ou N et un atome F, O ou N d'une molécule voisine ; c'est l'interaction faible la plus forte entre molécules neutres.",
          "ru": "Водородная связь образуется между атомом H, связанным с F, O или N, и атомом F, O или N соседней молекулы; это самое сильное слабое взаимодействие между нейтральными молекулами.",
          "ar": "تتكوّن الرابطة الهيدروجينية بين ذرة H مرتبطة بـ F أو O أو N وذرة F أو O أو N في جزيء مجاور، وهي أقوى التفاعلات الضعيفة بين الجزيئات المتعادلة.",
          "zh": "氢键在与F、O或N相连的H原子和相邻分子中的F、O或N原子之间形成，是中性分子之间最强的弱相互作用。",
          "ku": "Girêdana hîdrojenê di navbera atoma H ya bi F, O an N ve girêdayî û atoma F, O an N ya molekula cîran de çêdibe; ew di navbera molekulên bêalî de têkiliya qels a herî xurt e."
        },
        {
          "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
          "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
          "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
          "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
          "ru": "Диполь-дипольное взаимодействие — это фундаментальная сила, наблюдаемая между атомами благородного газа.",
          "ar": "التفاعل ثنائي القطب ثنائي القطب هو القوة الأساسية التي تظهر بين ذرات الغاز النبيل.",
          "zh": "偶极-偶极相互作用是稀有气体原子之间的基本力。",
          "ku": "Têkiliya dupol-dîpol hêza bingehîn e ku di navbera atomên gaza esîl de tê dîtin."
        },
        {
          "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.",
          "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
          "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
          "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
          "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
          "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
          "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
          "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Hidrojen bağı; F, O veya N atomuna bağlı H atomu ile komşu moleküldeki F, O veya N atomu arasında oluşan ve nötr moleküller arasındaki en güçlü zayıf etkileşimdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"A hydrogen bond forms between an H atom bonded to F, O or N and an F, O or N atom of a neighboring molecule; it is the strongest weak interaction between neutral molecules.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Eine Wasserstoffbrückenbindung bildet sich zwischen einem an F, O oder N gebundenen H-Atom und einem F-, O- oder N-Atom eines Nachbarmoleküls; sie ist die stärkste schwache Wechselwirkung zwischen neutralen Molekülen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La liaison hydrogène se forme entre un atome H lié à F, O ou N et un atome F, O ou N d'une molécule voisine ; c'est l'interaction faible la plus forte entre molécules neutres.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Водородная связь образуется между атомом H, связанным с F, O или N, и атомом F, O или N соседней молекулы; это самое сильное слабое взаимодействие между нейтральными молекулами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتكوّن الرابطة الهيدروجينية بين ذرة H مرتبطة بـ F أو O أو N وذرة F أو O أو N في جزيء مجاور، وهي أقوى التفاعلات الضعيفة بين الجزيئات المتعادلة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“氢键在与F、O或N相连的H原子和相邻分子中的F、O或N原子之间形成，是中性分子之间最强的弱相互作用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girêdana hîdrojenê di navbera atoma H ya bi F, O an N ve girêdayî û atoma F, O an N ya molekula cîran de çêdibe; ew di navbera molekulên bêalî de têkiliya qels a herî xurt e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Türler Arası Etkileşimler konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Intermolecular Interactions?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Zwischenmolekulare Kräfte zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Interactions Intermoléculaires ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Взаимодействия между частицами»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التفاعلات بين الجسيمات\"؟",
        "zh": "根据“微粒间相互作用”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.",
          "en": "Metallic bonds are established by sharing electrons between nonmetals.",
          "de": "Metallische Bindungen entstehen durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallen.",
          "fr": "Les liaisons métalliques sont établies en partageant des électrons entre des non-métaux.",
          "ru": "Металлические связи устанавливаются путём обобществления электронов между неметаллами.",
          "ar": "يتم إنشاء الروابط المعدنية من خلال مشاركة الإلكترونات بين اللافلزات.",
          "zh": "金属键是通过非金属之间共享电子建立的。",
          "ku": "Girêdanên metalîk bi parvekirina elektronan di navbera nemetalan de têne damezrandin."
        },
        {
          "tr": "Suyun yüksek kaynama noktası molekül kütlesinin H2S'den büyük olmasındandır.",
          "en": "The high boiling point of water is due to its molecular mass being greater than H2S.",
          "de": "Der hohe Siedepunkt von Wasser ist darauf zurückzuführen, dass seine Molekülmasse größer als die von H2S ist.",
          "fr": "Le point d’ébullition élevé de l’eau est dû à sa masse moléculaire supérieure à celle du H2S.",
          "ru": "Высокая температура кипения воды обусловлена ​​тем, что ее молекулярная масса превышает H2S.",
          "ar": "ترجع نقطة غليان الماء المرتفعة إلى أن كتلته الجزيئية أكبر من كتلة كبريتيد الهيدروجين (H2S).",
          "zh": "水的沸点高是因为它的分子质量大于H2S。",
          "ku": "Xala kelandina avê ya bilind ji ber ku girseya wê ya molekulî ji H2S mezintir e."
        },
        {
          "tr": "Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.",
          "en": "As the chemical bond is broken, a large amount of heat is always released into the environment.",
          "de": "Beim Aufbrechen der chemischen Bindung wird stets eine große Wärmemenge an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison chimique est rompue, une grande quantité de chaleur est toujours libérée dans l’environnement.",
          "ru": "Поскольку химическая связь разрывается, в окружающую среду всегда выделяется большое количество тепла.",
          "ar": "عندما يتم كسر الرابطة الكيميائية، يتم إطلاق كمية كبيرة من الحرارة دائمًا في البيئة.",
          "zh": "随着化学键的断裂，总是会释放大量的热量到环境中。",
          "ku": "Ji ber ku girêdana kîmyewî têk diçe, her dem rêjeyek mezin germahî berdide hawîrdorê."
        },
        {
          "tr": "London kuvvetleri anlık (indüklenmiş) dipollerden kaynaklanır ve tüm taneciklerde bulunur.",
          "en": "London forces arise from instantaneous (induced) dipoles and are present in all particles.",
          "de": "London-Kräfte entstehen durch momentane (induzierte) Dipole und sind in allen Teilchen vorhanden.",
          "fr": "Les forces de London proviennent de dipôles instantanés (induits) et sont présentes dans toutes les particules.",
          "ru": "Силы Лондона возникают из-за мгновенных (индуцированных) диполей и присутствуют во всех частицах.",
          "ar": "تنشأ قوى لندن من ثنائيات القطب اللحظية (المستحثة) وهي موجودة في جميع الجسيمات.",
          "zh": "伦敦力由瞬时（感应）偶极子产生，存在于所有粒子中。",
          "ku": "Hêzên Londonê ji dupolên tavilê (derxistî) çêdibin û di hemî pirtikan de hene."
        },
        {
          "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
          "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
          "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
          "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
          "ru": "При названии ионных соединений используются приставки моно, ди, три по числу атомов неметалла.",
          "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل mono وdi وtri وفقًا لعدد ذرات اللافلز.",
          "zh": "离子化合物命名时根据非金属原子数使用mono、di、tri等前缀。",
          "ku": "Di binavkirina pêkhateyên îyonî de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, tri têne bikaranîn."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"London kuvvetleri anlık (indüklenmiş) dipollerden kaynaklanır ve tüm taneciklerde bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"London forces arise from instantaneous (induced) dipoles and are present in all particles.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"London-Kräfte entstehen durch momentane (induzierte) Dipole und sind in allen Teilchen vorhanden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les forces de London proviennent de dipôles instantanés (induits) et sont présentes dans toutes les particules.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Силы Лондона возникают из-за мгновенных (индуцированных) диполей и присутствуют во всех частицах.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تنشأ قوى لندن من ثنائيات القطب اللحظية (المستحثة) وهي موجودة في جميع الجسيمات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“伦敦力由瞬时（感应）偶极子产生，存在于所有粒子中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hêzên Londonê ji dupolên tavilê (derxistî) çêdibin û di hemî pirtikan de hene.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Türler Arası Etkileşimler sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Intermolecular Interactions, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Zwischenmolekulare Kräfte: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Interactions Intermoléculaires, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Взаимодействия между частицами», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التفاعلات بين الجسيمات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“微粒间相互作用”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.",
          "en": "The bond between two atoms with equal electronegativities is polar.",
          "de": "Die Bindung zwischen zwei Atomen mit gleicher Elektronegativität ist polar.",
          "fr": "La liaison entre deux atomes d’électronégativité égale est polaire.",
          "ru": "Связь между двумя атомами с одинаковой электроотрицательностью является полярной.",
          "ar": "الرابطة بين ذرتين متساويتين في السالبية الكهربية تكون قطبية.",
          "zh": "两个具有相等电负性的原子之间的键是极性的。",
          "ku": "Girêdana di navbera du atomên bi elektronegatîviyên wekhev de polar e."
        },
        {
          "tr": "Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.",
          "en": "In the Lewis symbol, the neutrons in the nucleus are drawn around the symbol.",
          "de": "Im Lewis-Symbol sind die Neutronen im Kern um das Symbol herum gezeichnet.",
          "fr": "Dans le symbole de Lewis, les neutrons du noyau sont dessinés autour du symbole.",
          "ru": "В символе Льюиса нейтроны ядра нарисованы вокруг символа.",
          "ar": "في رمز لويس، يتم رسم النيوترونات الموجودة في النواة حول الرمز.",
          "zh": "在路易斯符号中，原子核中的中子被绘制在符号周围。",
          "ku": "Di sembola Lewis de, notronên di navokê de li dora sembolê têne kişandin."
        },
        {
          "tr": "Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.",
          "en": "During the boiling of the substance, intramolecular covalent bonds are broken down.",
          "de": "Beim Sieden der Substanz werden intramolekulare kovalente Bindungen abgebaut.",
          "fr": "Lors de l'ébullition de la substance, les liaisons covalentes intramoléculaires sont rompues.",
          "ru": "При кипении вещества разрушаются внутримолекулярные ковалентные связи.",
          "ar": "أثناء غليان المادة، تتفكك الروابط التساهمية داخل الجزيئات.",
          "zh": "在物质沸腾的过程中，分子内共价键被破坏。",
          "ku": "Di dema kelandina maddeyê de, girêkên kovalentî yên navmolekularî diqetin."
        },
        {
          "tr": "İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.",
          "en": "Ionic bond has a molecular structure and consists of molecules.",
          "de": "Eine Ionenbindung hat eine molekulare Struktur und besteht aus Molekülen.",
          "fr": "La liaison ionique a une structure moléculaire et est constituée de molécules.",
          "ru": "Ионная связь имеет молекулярную структуру и состоит из молекул.",
          "ar": "الرابطة الأيونية لها بنية جزيئية وتتكون من جزيئات.",
          "zh": "离子键具有分子结构，由分子组成。",
          "ku": "Girêdana îyonî xwedî avahiyeke molekulî ye û ji molekulan pêk tê."
        },
        {
          "tr": "Elektron sayısı arttıkça polarize olabilirlik artar ve London çekim kuvveti güçlenir.",
          "en": "As the number of electrons increases, polarizability increases and the London attraction force becomes stronger.",
          "de": "Mit zunehmender Elektronenzahl nimmt die Polarisierbarkeit zu und die Londoner Anziehungskraft wird stärker.",
          "fr": "À mesure que le nombre d’électrons augmente, la polarisabilité augmente et la force d’attraction de London devient plus forte.",
          "ru": "По мере увеличения числа электронов поляризуемость увеличивается и сила притяжения Лондона становится сильнее.",
          "ar": "ومع زيادة عدد الإلكترونات، تزداد قابلية الاستقطاب وتصبح قوة جذب لندن أقوى.",
          "zh": "随着电子数量的增加，极化率增加，伦敦吸引力变得更强。",
          "ku": "Her ku hejmara elektronan zêde dibe, polarîzasyon zêde dibe û hêza balkişandina Londonê xurtir dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Elektron sayısı arttıkça polarize olabilirlik artar ve London çekim kuvveti güçlenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the number of electrons increases, polarizability increases and the London attraction force becomes stronger.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Elektronenzahl nimmt die Polarisierbarkeit zu und die Londoner Anziehungskraft wird stärker.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que le nombre d’électrons augmente, la polarisabilité augmente et la force d’attraction de London devient plus forte.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «По мере увеличения числа электронов поляризуемость увеличивается и сила притяжения Лондона становится сильнее.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ومع زيادة عدد الإلكترونات، تزداد قابلية الاستقطاب وتصبح قوة جذب لندن أقوى.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着电子数量的增加，极化率增加，伦敦吸引力变得更强。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku hejmara elektronan zêde dibe, polarîzasyon zêde dibe û hêza balkişandina Londonê xurtir dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin06",
      "stem": {
        "tr": "Aşağıda Kimyasal Türler Arası Etkileşimler ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Intermolecular Interactions, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Zwischenmolekulare Kräfte: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Interactions Intermoléculaires, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Взаимодействия между частицами», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التفاعلات بين الجسيمات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“微粒间相互作用”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "İyonik katılar katı halde elektriği iletmez; sıvı halde ve sulu çözeltilerinde serbest iyonlarla iletir.",
          "en": "Ionic solids do not conduct electricity in the solid state; in the molten state and in aqueous solution they conduct by means of free ions.",
          "de": "Ionische Feststoffe leiten im festen Zustand keinen Strom; in der Schmelze und in wässriger Lösung leiten sie über frei bewegliche Ionen.",
          "fr": "Les solides ioniques ne conduisent pas l'électricité à l'état solide ; à l'état fondu et en solution aqueuse, ils conduisent grâce aux ions libres.",
          "ru": "Ионные твёрдые вещества не проводят электрический ток в твёрдом состоянии; в расплаве и в водном растворе они проводят ток за счёт свободных ионов.",
          "ar": "المواد الصلبة الأيونية لا توصل الكهرباء في الحالة الصلبة؛ وتوصلها في الحالة السائلة (المنصهرة) وفي المحاليل المائية بواسطة الأيونات الحرة.",
          "zh": "离子固体在固态时不导电；在熔融状态和水溶液中依靠自由离子导电。",
          "ku": "Madeyên hişk ên îyonî di rewşa hişk de elektrîkê naguhezînin; di rewşa şile (helandî) û di çareseriyên avî de bi îyonên azad elektrîkê diguhezînin."
        },
        {
          "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
          "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
          "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
          "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
          "ru": "Связь в молекуле HCl является неполярной ковалентной связью.",
          "ar": "الرابطة في جزيء حمض الهيدروكلوريك هي رابطة تساهمية غير قطبية.",
          "zh": "HCl分子中的键是非极性共价键。",
          "ku": "Girêdana di molekula HCl de girêdaneke kovalentî ya nepolar e."
        },
        {
          "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
          "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
          "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
          "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
          "ru": "Диполь-дипольное взаимодействие — это фундаментальная сила, наблюдаемая между атомами благородного газа.",
          "ar": "التفاعل ثنائي القطب ثنائي القطب هو القوة الأساسية التي تظهر بين ذرات الغاز النبيل.",
          "zh": "偶极-偶极相互作用是稀有气体原子之间的基本力。",
          "ku": "Têkiliya dupol-dîpol hêza bingehîn e ku di navbera atomên gaza esîl de tê dîtin."
        },
        {
          "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.",
          "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
          "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
          "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
          "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
          "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
          "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
          "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
        },
        {
          "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
          "en": "Covalent bonds are formed by the exchange of electrons.",
          "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
          "fr": "Les liaisons covalentes se forment par échange d'électrons.",
          "ru": "Ковалентные связи образуются в результате обмена электронами.",
          "ar": "تتشكل الروابط التساهمية عن طريق تبادل الإلكترونات.",
          "zh": "共价键是通过电子交换形成的。",
          "ku": "Girêdanên kovalent bi pevguherîna elektronan çêdibin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İyonik katılar katı halde elektriği iletmez; sıvı halde ve sulu çözeltilerinde serbest iyonlarla iletir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Ionic solids do not conduct electricity in the solid state; in the molten state and in aqueous solution they conduct by means of free ions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ionische Feststoffe leiten im festen Zustand keinen Strom; in der Schmelze und in wässriger Lösung leiten sie über frei bewegliche Ionen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les solides ioniques ne conduisent pas l'électricité à l'état solide ; à l'état fondu et en solution aqueuse, ils conduisent grâce aux ions libres.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ионные твёрдые вещества не проводят электрический ток в твёрдом состоянии; в расплаве и в водном растворе они проводят ток за счёт свободных ионов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المواد الصلبة الأيونية لا توصل الكهرباء في الحالة الصلبة؛ وتوصلها في الحالة السائلة (المنصهرة) وفي المحاليل المائية بواسطة الأيونات الحرة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“离子固体在固态时不导电；在熔融状态和水溶液中依靠自由离子导电。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Madeyên hişk ên îyonî di rewşa hişk de elektrîkê naguhezînin; di rewşa şile (helandî) û di çareseriyên avî de bi îyonên azad elektrîkê diguhezînin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin07",
      "stem": {
        "tr": "Kimyasal Türler Arası Etkileşimler konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Intermolecular Interactions, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Zwischenmolekulare Kräfte: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Interactions Intermoléculaires, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Взаимодействия между частицами», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التفاعلات بين الجسيمات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“微粒间相互作用”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Suyun yüksek kaynama noktası molekül kütlesinin H2S'den büyük olmasındandır.",
          "en": "The high boiling point of water is due to its molecular mass being greater than H2S.",
          "de": "Der hohe Siedepunkt von Wasser ist darauf zurückzuführen, dass seine Molekülmasse größer als die von H2S ist.",
          "fr": "Le point d’ébullition élevé de l’eau est dû à sa masse moléculaire supérieure à celle du H2S.",
          "ru": "Высокая температура кипения воды обусловлена ​​тем, что ее молекулярная масса превышает H2S.",
          "ar": "ترجع نقطة غليان الماء المرتفعة إلى أن كتلته الجزيئية أكبر من كتلة كبريتيد الهيدروجين (H2S).",
          "zh": "水的沸点高是因为它的分子质量大于H2S。",
          "ku": "Xala kelandina avê ya bilind ji ber ku girseya wê ya molekulî ji H2S mezintir e."
        },
        {
          "tr": "Metalik bağ, serbest değerlik elektronlarının oluşturduğu elektron denizi ile pozitif metal iyonları arasındadır.",
          "en": "The metallic bond is the attraction between the electron sea formed by free valence electrons and the positive metal ions.",
          "de": "Die metallische Bindung besteht zwischen dem aus freien Valenzelektronen gebildeten Elektronensee und den positiven Metallionen.",
          "fr": "La liaison métallique s'établit entre la mer d'électrons, formée par les électrons de valence libres, et les ions métalliques positifs.",
          "ru": "Металлическая связь возникает между электронным морем, образованным свободными валентными электронами, и положительными ионами металла.",
          "ar": "الرابطة الفلزية هي التجاذب بين بحر الإلكترونات المتكوّن من إلكترونات التكافؤ الحرة وأيونات الفلز الموجبة.",
          "zh": "金属键是由自由价电子形成的电子海与金属阳离子之间的作用。",
          "ku": "Girêdana metalî di navbera deryaya elektronan a ku ji elektronên valansê yên azad pêk tê û îyonên metal ên erênî de ye."
        },
        {
          "tr": "Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.",
          "en": "As the chemical bond is broken, a large amount of heat is always released into the environment.",
          "de": "Beim Aufbrechen der chemischen Bindung wird stets eine große Wärmemenge an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison chimique est rompue, une grande quantité de chaleur est toujours libérée dans l’environnement.",
          "ru": "Поскольку химическая связь разрывается, в окружающую среду всегда выделяется большое количество тепла.",
          "ar": "عندما يتم كسر الرابطة الكيميائية، يتم إطلاق كمية كبيرة من الحرارة دائمًا في البيئة.",
          "zh": "随着化学键的断裂，总是会释放大量的热量到环境中。",
          "ku": "Ji ber ku girêdana kîmyewî têk diçe, her dem rêjeyek mezin germahî berdide hawîrdorê."
        },
        {
          "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
          "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
          "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
          "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
          "ru": "При названии ионных соединений используются приставки моно, ди, три по числу атомов неметалла.",
          "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل mono وdi وtri وفقًا لعدد ذرات اللافلز.",
          "zh": "离子化合物命名时根据非金属原子数使用mono、di、tri等前缀。",
          "ku": "Di binavkirina pêkhateyên îyonî de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, tri têne bikaranîn."
        },
        {
          "tr": "Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.",
          "en": "Hydrogen bond is a covalent bond between H2 molecules.",
          "de": "Eine Wasserstoffbindung ist eine kovalente Bindung zwischen H2-Molekülen.",
          "fr": "La liaison hydrogène est une liaison covalente entre les molécules H2.",
          "ru": "Водородная связь – это ковалентная связь между молекулами H2.",
          "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
          "zh": "氢键是H2分子之间的共价键。",
          "ku": "Girêdana hîdrojenê di navbera molekulên H2 de girêdaneke kovalent e."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Metalik bağ, serbest değerlik elektronlarının oluşturduğu elektron denizi ile pozitif metal iyonları arasındadır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The metallic bond is the attraction between the electron sea formed by free valence electrons and the positive metal ions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die metallische Bindung besteht zwischen dem aus freien Valenzelektronen gebildeten Elektronensee und den positiven Metallionen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La liaison métallique s'établit entre la mer d'électrons, formée par les électrons de valence libres, et les ions métalliques positifs.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Металлическая связь возникает между электронным морем, образованным свободными валентными электронами, и положительными ионами металла.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الرابطة الفلزية هي التجاذب بين بحر الإلكترونات المتكوّن من إلكترونات التكافؤ الحرة وأيونات الفلز الموجبة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“金属键是由自由价电子形成的电子海与金属阳离子之间的作用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girêdana metalî di navbera deryaya elektronan a ku ji elektronên valansê yên azad pêk tê û îyonên metal ên erênî de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Türler Arası Etkileşimler ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Intermolecular Interactions, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Zwischenmolekulare Kräfte: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Interactions Intermoléculaires, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Взаимодействия между частицами», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التفاعلات بين الجسيمات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“微粒间相互作用”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.",
          "en": "In the Lewis symbol, the neutrons in the nucleus are drawn around the symbol.",
          "de": "Im Lewis-Symbol sind die Neutronen im Kern um das Symbol herum gezeichnet.",
          "fr": "Dans le symbole de Lewis, les neutrons du noyau sont dessinés autour du symbole.",
          "ru": "В символе Льюиса нейтроны ядра нарисованы вокруг символа.",
          "ar": "في رمز لويس، يتم رسم النيوترونات الموجودة في النواة حول الرمز.",
          "zh": "在路易斯符号中，原子核中的中子被绘制在符号周围。",
          "ku": "Di sembola Lewis de, notronên di navokê de li dora sembolê têne kişandin."
        },
        {
          "tr": "Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.",
          "en": "During the boiling of the substance, intramolecular covalent bonds are broken down.",
          "de": "Beim Sieden der Substanz werden intramolekulare kovalente Bindungen abgebaut.",
          "fr": "Lors de l'ébullition de la substance, les liaisons covalentes intramoléculaires sont rompues.",
          "ru": "При кипении вещества разрушаются внутримолекулярные ковалентные связи.",
          "ar": "أثناء غليان المادة، تتفكك الروابط التساهمية داخل الجزيئات.",
          "zh": "在物质沸腾的过程中，分子内共价键被破坏。",
          "ku": "Di dema kelandina maddeyê de, girêkên kovalentî yên navmolekularî diqetin."
        },
        {
          "tr": "Kovalent bağda elektronegatiflik farkı arttıkça bağın polar karakteri ve iyonik karakteri artar.",
          "en": "As the electronegativity difference in a covalent bond increases, the polar character and ionic character of the bond increases.",
          "de": "Mit zunehmender Elektronegativitätsdifferenz in einer kovalenten Bindung nimmt der polare und ionische Charakter der Bindung zu.",
          "fr": "À mesure que la différence d’électronégativité dans une liaison covalente augmente, le caractère polaire et le caractère ionique de la liaison augmentent.",
          "ru": "По мере увеличения разницы электроотрицательностей в ковалентной связи увеличивается полярный характер и ионный характер связи.",
          "ar": "مع زيادة الفرق في السالبية الكهربية في الرابطة التساهمية، يزداد الطابع القطبي والطابع الأيوني للرابطة.",
          "zh": "随着共价键中电负性差异的增加，键的极性特征和离子特征增加。",
          "ku": "Her ku ferqa elektronegatîfiyê di girêdanek kovalent de zêde dibe, karaktera polar û karaktera îyonî ya girêdanê zêde dibe."
        },
        {
          "tr": "İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.",
          "en": "Ionic bond has a molecular structure and consists of molecules.",
          "de": "Eine Ionenbindung hat eine molekulare Struktur und besteht aus Molekülen.",
          "fr": "La liaison ionique a une structure moléculaire et est constituée de molécules.",
          "ru": "Ионная связь имеет молекулярную структуру и состоит из молекул.",
          "ar": "الرابطة الأيونية لها بنية جزيئية وتتكون من جزيئات.",
          "zh": "离子键具有分子结构，由分子组成。",
          "ku": "Girêdana îyonî xwedî avahiyeke molekulî ye û ji molekulan pêk tê."
        },
        {
          "tr": "London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.",
          "en": "London forces do not exist in polar molecules with permanent dipole moments.",
          "de": "In polaren Molekülen mit permanenten Dipolmomenten gibt es keine Londoner Kräfte.",
          "fr": "Les forces de London n'existent pas dans les molécules polaires avec des moments dipolaires permanents.",
          "ru": "Силы Лондона не существуют в полярных молекулах с постоянными дипольными моментами.",
          "ar": "لا توجد قوى لندن في الجزيئات القطبية ذات العزوم الثنائية القطبية الدائمة.",
          "zh": "伦敦力不存在于具有永久偶极矩的极性分子中。",
          "ku": "Hêzên Londonê di molekulên polar ên bi demên dupolî yên daîmî de tune ne."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kovalent bağda elektronegatiflik farkı arttıkça bağın polar karakteri ve iyonik karakteri artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the electronegativity difference in a covalent bond increases, the polar character and ionic character of the bond increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Elektronegativitätsdifferenz in einer kovalenten Bindung nimmt der polare und ionische Charakter der Bindung zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la différence d’électronégativité dans une liaison covalente augmente, le caractère polaire et le caractère ionique de la liaison augmentent.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «По мере увеличения разницы электроотрицательностей в ковалентной связи увеличивается полярный характер и ионный характер связи.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مع زيادة الفرق في السالبية الكهربية في الرابطة التساهمية، يزداد الطابع القطبي والطابع الأيوني للرابطة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着共价键中电负性差异的增加，键的极性特征和离子特征增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku ferqa elektronegatîfiyê di girêdanek kovalent de zêde dibe, karaktera polar û karaktera îyonî ya girêdanê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Türler Arası Etkileşimler konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Intermolecular Interactions, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Zwischenmolekulare Kräfte die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Interactions Intermoléculaires, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Взаимодействия между частицами», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التفاعلات بين الجسيمات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“微粒间相互作用”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
          "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
          "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
          "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
          "ru": "Диполь-дипольное взаимодействие — это фундаментальная сила, наблюдаемая между атомами благородного газа.",
          "ar": "التفاعل ثنائي القطب ثنائي القطب هو القوة الأساسية التي تظهر بين ذرات الغاز النبيل.",
          "zh": "偶极-偶极相互作用是稀有气体原子之间的基本力。",
          "ku": "Têkiliya dupol-dîpol hêza bingehîn e ku di navbera atomên gaza esîl de tê dîtin."
        },
        {
          "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.",
          "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
          "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
          "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
          "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
          "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
          "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
          "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
        },
        {
          "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
          "en": "Covalent bonds are formed by the exchange of electrons.",
          "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
          "fr": "Les liaisons covalentes se forment par échange d'électrons.",
          "ru": "Ковалентные связи образуются в результате обмена электронами.",
          "ar": "تتشكل الروابط التساهمية عن طريق تبادل الإلكترونات.",
          "zh": "共价键是通过电子交换形成的。",
          "ku": "Girêdanên kovalent bi pevguherîna elektronan çêdibin."
        },
        {
          "tr": "Apolar kovalent bağ aynı cins iki ametal atomu arasında (örn. O2, N2, H2) oluşur.",
          "en": "Nonpolar covalent bonds form between two nonmetal atoms of the same type (e.g. O2, N2, H2).",
          "de": "Zwischen zwei Nichtmetallatomen desselben Typs (z. B. O2, N2, H2) bilden sich unpolare kovalente Bindungen.",
          "fr": "Des liaisons covalentes non polaires se forment entre deux atomes non métalliques du même type (par exemple O2, N2, H2).",
          "ru": "Неполярные ковалентные связи образуются между двумя атомами неметалла одного типа (например, O2, N2, H2).",
          "ar": "تتكون الروابط التساهمية غير القطبية بين ذرتين غير معدنيتين من نفس النوع (مثل O2، N2، H2).",
          "zh": "非极性共价键在两个相同类型的非金属原子（例如 O2、N2、H2）之间形成。",
          "ku": "Girêdanên kovalent ên nepolar di navbera du atomên nemetal ên ji heman cureyê de çêdibin (mînak O2, N2, H2)."
        },
        {
          "tr": "London kuvveti moleküldeki elektron sayısı azaldıkça artar.",
          "en": "London force increases as the number of electrons in the molecule decreases.",
          "de": "Die London-Kraft nimmt zu, wenn die Anzahl der Elektronen im Molekül abnimmt.",
          "fr": "La force de London augmente à mesure que le nombre d’électrons dans la molécule diminue.",
          "ru": "Сила Лондона увеличивается по мере уменьшения числа электронов в молекуле.",
          "ar": "تزداد قوة لندن مع انخفاض عدد الإلكترونات في الجزيء.",
          "zh": "伦敦力随着分子中电子数量的减少而增加。",
          "ku": "Hêza Londonê her ku hejmara elektronên di molekulê de kêm dibe zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Apolar kovalent bağ aynı cins iki ametal atomu arasında (örn. O2, N2, H2) oluşur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Nonpolar covalent bonds form between two nonmetal atoms of the same type (e.g. O2, N2, H2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zwischen zwei Nichtmetallatomen desselben Typs (z. B. O2, N2, H2) bilden sich unpolare kovalente Bindungen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Des liaisons covalentes non polaires se forment entre deux atomes non métalliques du même type (par exemple O2, N2, H2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Неполярные ковалентные связи образуются между двумя атомами неметалла одного типа (например, O2, N2, H2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتكون الروابط التساهمية غير القطبية بين ذرتين غير معدنيتين من نفس النوع (مثل O2، N2، H2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“非极性共价键在两个相同类型的非金属原子（例如 O2、N2、H2）之间形成。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girêdanên kovalent ên nepolar di navbera du atomên nemetal ên ji heman cureyê de çêdibin (mînak O2, N2, H2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Türler Arası Etkileşimler ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Intermolecular Interactions, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Zwischenmolekulare Kräfte: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Interactions Intermoléculaires, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Взаимодействия между частицами», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التفاعلات بين الجسيمات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“微粒间相互作用”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.",
          "en": "As the chemical bond is broken, a large amount of heat is always released into the environment.",
          "de": "Beim Aufbrechen der chemischen Bindung wird stets eine große Wärmemenge an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison chimique est rompue, une grande quantité de chaleur est toujours libérée dans l’environnement.",
          "ru": "Поскольку химическая связь разрывается, в окружающую среду всегда выделяется большое количество тепла.",
          "ar": "عندما يتم كسر الرابطة الكيميائية، يتم إطلاق كمية كبيرة من الحرارة دائمًا في البيئة.",
          "zh": "随着化学键的断裂，总是会释放大量的热量到环境中。",
          "ku": "Ji ber ku girêdana kîmyewî têk diçe, her dem rêjeyek mezin germahî berdide hawîrdorê."
        },
        {
          "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
          "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
          "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
          "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
          "ru": "При названии ионных соединений используются приставки моно, ди, три по числу атомов неметалла.",
          "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل mono وdi وtri وفقًا لعدد ذرات اللافلز.",
          "zh": "离子化合物命名时根据非金属原子数使用mono、di、tri等前缀。",
          "ku": "Di binavkirina pêkhateyên îyonî de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, tri têne bikaranîn."
        },
        {
          "tr": "Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.",
          "en": "Hydrogen bond is a covalent bond between H2 molecules.",
          "de": "Eine Wasserstoffbindung ist eine kovalente Bindung zwischen H2-Molekülen.",
          "fr": "La liaison hydrogène est une liaison covalente entre les molécules H2.",
          "ru": "Водородная связь – это ковалентная связь между молекулами H2.",
          "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
          "zh": "氢键是H2分子之间的共价键。",
          "ku": "Girêdana hîdrojenê di navbera molekulên H2 de girêdaneke kovalent e."
        },
        {
          "tr": "Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.",
          "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
          "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
          "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
          "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
          "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
          "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
          "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
        },
        {
          "tr": "Suyun kaynama noktasının H2S'den belirgin yüksek olması molekülleri arasındaki hidrojen bağları nedeniyledir.",
          "en": "The boiling point of water is significantly higher than H2S due to the hydrogen bonds between its molecules.",
          "de": "Der Siedepunkt von Wasser liegt aufgrund der Wasserstoffbrückenbindungen zwischen seinen Molekülen deutlich höher als der von H2S.",
          "fr": "Le point d’ébullition de l’eau est nettement plus élevé que celui du H2S en raison des liaisons hydrogène entre ses molécules.",
          "ru": "Температура кипения воды значительно выше, чем у H2S из-за водородных связей между ее молекулами.",
          "ar": "درجة غليان الماء أعلى بكثير من كبريتيد الهيدروجين (H2S) بسبب الروابط الهيدروجينية بين جزيئاته.",
          "zh": "由于分子间存在氢键，水的沸点明显高于 H2S。",
          "ku": "Ji ber girêdanên hîdrojenê yên di navbera molekulên wê de, xala kelandinê ya avê ji H2S pirtir e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Suyun kaynama noktasının H2S'den belirgin yüksek olması molekülleri arasındaki hidrojen bağları nedeniyledir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The boiling point of water is significantly higher than H2S due to the hydrogen bonds between its molecules.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Siedepunkt von Wasser liegt aufgrund der Wasserstoffbrückenbindungen zwischen seinen Molekülen deutlich höher als der von H2S.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le point d’ébullition de l’eau est nettement plus élevé que celui du H2S en raison des liaisons hydrogène entre ses molécules.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Температура кипения воды значительно выше, чем у H2S из-за водородных связей между ее молекулами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة غليان الماء أعلى بكثير من كبريتيد الهيدروجين (H2S) بسبب الروابط الهيدروجينية بين جزيئاته.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于分子间存在氢键，水的沸点明显高于 H2S。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber girêdanên hîdrojenê yên di navbera molekulên wê de, xala kelandinê ya avê ji H2S pirtir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Türler Arası Etkileşimler konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Intermolecular Interactions?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Zwischenmolekulare Kräfte zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Interactions Intermoléculaires ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Взаимодействия между частицами»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التفاعلات بين الجسيمات\"؟",
        "zh": "根据“微粒间相互作用”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Lewis nokta gösteriminde değerlik elektronları element sembolü çevresine noktalarla yerleştirilir.",
          "en": "In Lewis dot notation, valence electrons are placed as dots around the element symbol.",
          "de": "In der Lewis-Punkt-Notation werden Valenzelektronen als Punkte um das Elementsymbol platziert.",
          "fr": "Dans la notation par points de Lewis, les électrons de valence sont placés sous forme de points autour du symbole de l'élément.",
          "ru": "В точечной записи Льюиса валентные электроны располагаются точками вокруг символа элемента.",
          "ar": "في تدوين نقطة لويس، يتم وضع إلكترونات التكافؤ كنقاط حول رمز العنصر.",
          "zh": "在路易斯点表示法中，价电子以点的形式放置在元素符号周围。",
          "ku": "Di nîşana xala Lewis de, elektronên valence wekî xal li dora sembola hêmanê têne danîn."
        },
        {
          "tr": "Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.",
          "en": "During the boiling of the substance, intramolecular covalent bonds are broken down.",
          "de": "Beim Sieden der Substanz werden intramolekulare kovalente Bindungen abgebaut.",
          "fr": "Lors de l'ébullition de la substance, les liaisons covalentes intramoléculaires sont rompues.",
          "ru": "При кипении вещества разрушаются внутримолекулярные ковалентные связи.",
          "ar": "أثناء غليان المادة، تتفكك الروابط التساهمية داخل الجزيئات.",
          "zh": "在物质沸腾的过程中，分子内共价键被破坏。",
          "ku": "Di dema kelandina maddeyê de, girêkên kovalentî yên navmolekularî diqetin."
        },
        {
          "tr": "İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.",
          "en": "Ionic bond has a molecular structure and consists of molecules.",
          "de": "Eine Ionenbindung hat eine molekulare Struktur und besteht aus Molekülen.",
          "fr": "La liaison ionique a une structure moléculaire et est constituée de molécules.",
          "ru": "Ионная связь имеет молекулярную структуру и состоит из молекул.",
          "ar": "الرابطة الأيونية لها بنية جزيئية وتتكون من جزيئات.",
          "zh": "离子键具有分子结构，由分子组成。",
          "ku": "Girêdana îyonî xwedî avahiyeke molekulî ye û ji molekulan pêk tê."
        },
        {
          "tr": "London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.",
          "en": "London forces do not exist in polar molecules with permanent dipole moments.",
          "de": "In polaren Molekülen mit permanenten Dipolmomenten gibt es keine Londoner Kräfte.",
          "fr": "Les forces de London n'existent pas dans les molécules polaires avec des moments dipolaires permanents.",
          "ru": "Силы Лондона не существуют в полярных молекулах с постоянными дипольными моментами.",
          "ar": "لا توجد قوى لندن في الجزيئات القطبية ذات العزوم الثنائية القطبية الدائمة.",
          "zh": "伦敦力不存在于具有永久偶极矩的极性分子中。",
          "ku": "Hêzên Londonê di molekulên polar ên bi demên dupolî yên daîmî de tune ne."
        },
        {
          "tr": "Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.",
          "en": "Metallic bonds are established by sharing electrons between nonmetals.",
          "de": "Metallische Bindungen entstehen durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallen.",
          "fr": "Les liaisons métalliques sont établies en partageant des électrons entre des non-métaux.",
          "ru": "Металлические связи устанавливаются путём обобществления электронов между неметаллами.",
          "ar": "يتم إنشاء الروابط المعدنية من خلال مشاركة الإلكترونات بين اللافلزات.",
          "zh": "金属键是通过非金属之间共享电子建立的。",
          "ku": "Girêdanên metalîk bi parvekirina elektronan di navbera nemetalan de têne damezrandin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Lewis nokta gösteriminde değerlik elektronları element sembolü çevresine noktalarla yerleştirilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In Lewis dot notation, valence electrons are placed as dots around the element symbol.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In der Lewis-Punkt-Notation werden Valenzelektronen als Punkte um das Elementsymbol platziert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la notation par points de Lewis, les électrons de valence sont placés sous forme de points autour du symbole de l'élément.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В точечной записи Льюиса валентные электроны располагаются точками вокруг символа элемента.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تدوين نقطة لويس، يتم وضع إلكترونات التكافؤ كنقاط حول رمز العنصر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在路易斯点表示法中，价电子以点的形式放置在元素符号周围。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di nîşana xala Lewis de, elektronên valence wekî xal li dora sembola hêmanê têne danîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Türler Arası Etkileşimler sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Intermolecular Interactions, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Zwischenmolekulare Kräfte: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Interactions Intermoléculaires, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Взаимодействия между частицами», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التفاعلات بين الجسيمات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“微粒间相互作用”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.",
          "en": "Ionic crystals can be formed into wires and sheets when struck with a hammer.",
          "de": "Ionenkristalle können durch Schlagen mit einem Hammer zu Drähten und Blechen geformt werden.",
          "fr": "Les cristaux ioniques peuvent être transformés en fils et en feuilles lorsqu'ils sont frappés avec un marteau.",
          "ru": "Ионные кристаллы можно превратить в проволоки и листы при ударе молотком.",
          "ar": "يمكن أن تتشكل البلورات الأيونية على شكل أسلاك وصفائح عند ضربها بمطرقة.",
          "zh": "当用锤子敲击时，离子晶体可以形成线材和片材。",
          "ku": "Krîstalên îyonî dema ku bi çakûç tê lêdan dikarin bibin têl û pelan çêbibin."
        },
        {
          "tr": "Dipol-dipol etkileşimi kalıcı dipollere sahip polar moleküller arasında gerçekleşir.",
          "en": "Dipole-dipole interaction occurs between polar molecules with permanent dipoles.",
          "de": "Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen mit permanenten Dipolen auf.",
          "fr": "L'interaction dipôle-dipôle se produit entre des molécules polaires avec des dipôles permanents.",
          "ru": "Диполь-дипольное взаимодействие происходит между полярными молекулами с постоянными диполями.",
          "ar": "يحدث تفاعل ثنائي القطب ثنائي القطب بين الجزيئات القطبية ذات ثنائيات القطب الدائمة.",
          "zh": "偶极-偶极相互作用发生在具有永久偶极子的极性分子之间。",
          "ku": "Têkiliya dîpol-dîpol di navbera molekulên polar ên bi dupolên daîmî de pêk tê."
        },
        {
          "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
          "en": "Covalent bonds are formed by the exchange of electrons.",
          "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
          "fr": "Les liaisons covalentes se forment par échange d'électrons.",
          "ru": "Ковалентные связи образуются в результате обмена электронами.",
          "ar": "تتشكل الروابط التساهمية عن طريق تبادل الإلكترونات.",
          "zh": "共价键是通过电子交换形成的。",
          "ku": "Girêdanên kovalent bi pevguherîna elektronan çêdibin."
        },
        {
          "tr": "London kuvveti moleküldeki elektron sayısı azaldıkça artar.",
          "en": "London force increases as the number of electrons in the molecule decreases.",
          "de": "Die London-Kraft nimmt zu, wenn die Anzahl der Elektronen im Molekül abnimmt.",
          "fr": "La force de London augmente à mesure que le nombre d’électrons dans la molécule diminue.",
          "ru": "Сила Лондона увеличивается по мере уменьшения числа электронов в молекуле.",
          "ar": "تزداد قوة لندن مع انخفاض عدد الإلكترونات في الجزيء.",
          "zh": "伦敦力随着分子中电子数量的减少而增加。",
          "ku": "Hêza Londonê her ku hejmara elektronên di molekulê de kêm dibe zêde dibe."
        },
        {
          "tr": "Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.",
          "en": "The bond between two atoms with equal electronegativities is polar.",
          "de": "Die Bindung zwischen zwei Atomen mit gleicher Elektronegativität ist polar.",
          "fr": "La liaison entre deux atomes d’électronégativité égale est polaire.",
          "ru": "Связь между двумя атомами с одинаковой электроотрицательностью является полярной.",
          "ar": "الرابطة بين ذرتين متساويتين في السالبية الكهربية تكون قطبية.",
          "zh": "两个具有相等电负性的原子之间的键是极性的。",
          "ku": "Girêdana di navbera du atomên bi elektronegatîviyên wekhev de polar e."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Dipol-dipol etkileşimi kalıcı dipollere sahip polar moleküller arasında gerçekleşir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Dipole-dipole interaction occurs between polar molecules with permanent dipoles.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dipol-Dipol-Wechselwirkungen treten zwischen polaren Molekülen mit permanenten Dipolen auf.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'interaction dipôle-dipôle se produit entre des molécules polaires avec des dipôles permanents.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Диполь-дипольное взаимодействие происходит между полярными молекулами с постоянными диполями.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يحدث تفاعل ثنائي القطب ثنائي القطب بين الجزيئات القطبية ذات ثنائيات القطب الدائمة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“偶极-偶极相互作用发生在具有永久偶极子的极性分子之间。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Têkiliya dîpol-dîpol di navbera molekulên polar ên bi dupolên daîmî de pêk tê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin13",
      "stem": {
        "tr": "Aşağıda Kimyasal Türler Arası Etkileşimler ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Intermolecular Interactions, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Zwischenmolekulare Kräfte: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Interactions Intermoléculaires, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Взаимодействия между частицами», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التفاعلات بين الجسيمات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“微粒间相互作用”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "İyonik bileşikler adlandırılırken ametal sayısına göre mono, di, tri gibi ön ekler kullanılır.",
          "en": "When naming ionic compounds, prefixes such as mono, di, tri are used according to the number of nonmetal atoms.",
          "de": "Bei der Benennung ionischer Verbindungen werden je nach Anzahl der Nichtmetallatome Präfixe wie mono, di, tri verwendet.",
          "fr": "Lors de la dénomination des composés ioniques, des préfixes tels que mono, di, tri sont utilisés selon le nombre d'atomes non métalliques.",
          "ru": "При названии ионных соединений используются приставки моно, ди, три по числу атомов неметалла.",
          "ar": "عند تسمية المركبات الأيونية تُستخدم بادئات مثل mono وdi وtri وفقًا لعدد ذرات اللافلز.",
          "zh": "离子化合物命名时根据非金属原子数使用mono、di、tri等前缀。",
          "ku": "Di binavkirina pêkhateyên îyonî de li gorî hejmara atomên nemetal pêşgirên wekî mono, di, tri têne bikaranîn."
        },
        {
          "tr": "Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.",
          "en": "Hydrogen bond is a covalent bond between H2 molecules.",
          "de": "Eine Wasserstoffbindung ist eine kovalente Bindung zwischen H2-Molekülen.",
          "fr": "La liaison hydrogène est une liaison covalente entre les molécules H2.",
          "ru": "Водородная связь – это ковалентная связь между молекулами H2.",
          "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
          "zh": "氢键是H2分子之间的共价键。",
          "ku": "Girêdana hîdrojenê di navbera molekulên H2 de girêdaneke kovalent e."
        },
        {
          "tr": "Bağ kırılması endotermik (enerji alan), bağ oluşumu ekzotermik (enerji veren) süreçtir.",
          "en": "Bond breaking is an endothermic (energy-consuming) process, while bond formation is an exothermic (energy-giving) process.",
          "de": "Der Bindungsbruch ist ein endothermer (energieverbrauchender) Prozess, während die Bindungsbildung ein exothermer (energiespendender) Prozess ist.",
          "fr": "La rupture des liaisons est un processus endothermique (consommateur d'énergie), tandis que la formation de liaisons est un processus exothermique (donneur d'énergie).",
          "ru": "Разрыв связи — эндотермический (энергозатратный) процесс, а образование связи — экзотермический (энергоотдающий) процесс.",
          "ar": "كسر الروابط هو عملية ماصة للحرارة (مستهلكة للطاقة)، ​​في حين أن تكوين الرابطة هو عملية طاردة للحرارة (مانحة الطاقة).",
          "zh": "键断裂是吸热（消耗能量）的过程，而键形成是放热（提供能量）的过程。",
          "ku": "Şikandina girêdanê pêvajoyek endotermîk (enerjî-dixwe) ye, dema ku çêbûna girêdan pêvajoyek exotermîk (enerjî dide) ye."
        },
        {
          "tr": "Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.",
          "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
          "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
          "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
          "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
          "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
          "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
          "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
        },
        {
          "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
          "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
          "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
          "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
          "ru": "Связь в молекуле HCl является неполярной ковалентной связью.",
          "ar": "الرابطة في جزيء حمض الهيدروكلوريك هي رابطة تساهمية غير قطبية.",
          "zh": "HCl分子中的键是非极性共价键。",
          "ku": "Girêdana di molekula HCl de girêdaneke kovalentî ya nepolar e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Bağ kırılması endotermik (enerji alan), bağ oluşumu ekzotermik (enerji veren) süreçtir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Bond breaking is an endothermic (energy-consuming) process, while bond formation is an exothermic (energy-giving) process.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Bindungsbruch ist ein endothermer (energieverbrauchender) Prozess, während die Bindungsbildung ein exothermer (energiespendender) Prozess ist.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La rupture des liaisons est un processus endothermique (consommateur d'énergie), tandis que la formation de liaisons est un processus exothermique (donneur d'énergie).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Разрыв связи — эндотермический (энергозатратный) процесс, а образование связи — экзотермический (энергоотдающий) процесс.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"كسر الروابط هو عملية ماصة للحرارة (مستهلكة للطاقة)، ​​في حين أن تكوين الرابطة هو عملية طاردة للحرارة (مانحة الطاقة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“键断裂是吸热（消耗能量）的过程，而键形成是放热（提供能量）的过程。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Şikandina girêdanê pêvajoyek endotermîk (enerjî-dixwe) ye, dema ku çêbûna girêdan pêvajoyek exotermîk (enerjî dide) ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin14",
      "stem": {
        "tr": "Kimyasal Türler Arası Etkileşimler konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Intermolecular Interactions, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Zwischenmolekulare Kräfte: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Interactions Intermoléculaires, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Взаимодействия между частицами», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التفاعلات بين الجسيمات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“微粒间相互作用”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.",
          "en": "Ionic bond has a molecular structure and consists of molecules.",
          "de": "Eine Ionenbindung hat eine molekulare Struktur und besteht aus Molekülen.",
          "fr": "La liaison ionique a une structure moléculaire et est constituée de molécules.",
          "ru": "Ионная связь имеет молекулярную структуру и состоит из молекул.",
          "ar": "الرابطة الأيونية لها بنية جزيئية وتتكون من جزيئات.",
          "zh": "离子键具有分子结构，由分子组成。",
          "ku": "Girêdana îyonî xwedî avahiyeke molekulî ye û ji molekulan pêk tê."
        },
        {
          "tr": "London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.",
          "en": "London forces do not exist in polar molecules with permanent dipole moments.",
          "de": "In polaren Molekülen mit permanenten Dipolmomenten gibt es keine Londoner Kräfte.",
          "fr": "Les forces de London n'existent pas dans les molécules polaires avec des moments dipolaires permanents.",
          "ru": "Силы Лондона не существуют в полярных молекулах с постоянными дипольными моментами.",
          "ar": "لا توجد قوى لندن في الجزيئات القطبية ذات العزوم الثنائية القطبية الدائمة.",
          "zh": "伦敦力不存在于具有永久偶极矩的极性分子中。",
          "ku": "Hêzên Londonê di molekulên polar ên bi demên dupolî yên daîmî de tune ne."
        },
        {
          "tr": "Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.",
          "en": "Metallic bonds are established by sharing electrons between nonmetals.",
          "de": "Metallische Bindungen entstehen durch die gemeinsame Nutzung von Elektronen zwischen Nichtmetallen.",
          "fr": "Les liaisons métalliques sont établies en partageant des électrons entre des non-métaux.",
          "ru": "Металлические связи устанавливаются путём обобществления электронов между неметаллами.",
          "ar": "يتم إنشاء الروابط المعدنية من خلال مشاركة الإلكترونات بين اللافلزات.",
          "zh": "金属键是通过非金属之间共享电子建立的。",
          "ku": "Girêdanên metalîk bi parvekirina elektronan di navbera nemetalan de têne damezrandin."
        },
        {
          "tr": "Molekül içi kovalent bağlar güçlü etkileşim, moleküller arası van der Waals zayıf etkileşimdir.",
          "en": "Intramolecular covalent bonds are strong interactions and intermolecular van der Waals interactions are weak.",
          "de": "Intramolekulare kovalente Bindungen sind starke Wechselwirkungen und intermolekulare Van-der-Waals-Wechselwirkungen sind schwach.",
          "fr": "Les liaisons covalentes intramoléculaires sont des interactions fortes et les interactions intermoléculaires de Van der Waals sont faibles.",
          "ru": "Внутримолекулярные ковалентные связи представляют собой сильные взаимодействия, а межмолекулярные ван-дер-ваальсовые взаимодействия являются слабыми.",
          "ar": "الروابط التساهمية داخل الجزيئات هي تفاعلات قوية وتفاعلات فان دير فال بين الجزيئات ضعيفة.",
          "zh": "分子内共价键是强相互作用，分子间范德华相互作用是弱相互作用。",
          "ku": "Girêdanên kovalentî yên intramolekular danûstendinên xurt in û têkiliyên van der Waals-ê yên navmolekular qels in."
        },
        {
          "tr": "Suyun yüksek kaynama noktası molekül kütlesinin H2S'den büyük olmasındandır.",
          "en": "The high boiling point of water is due to its molecular mass being greater than H2S.",
          "de": "Der hohe Siedepunkt von Wasser ist darauf zurückzuführen, dass seine Molekülmasse größer als die von H2S ist.",
          "fr": "Le point d’ébullition élevé de l’eau est dû à sa masse moléculaire supérieure à celle du H2S.",
          "ru": "Высокая температура кипения воды обусловлена ​​тем, что ее молекулярная масса превышает H2S.",
          "ar": "ترجع نقطة غليان الماء المرتفعة إلى أن كتلته الجزيئية أكبر من كتلة كبريتيد الهيدروجين (H2S).",
          "zh": "水的沸点高是因为它的分子质量大于H2S。",
          "ku": "Xala kelandina avê ya bilind ji ber ku girseya wê ya molekulî ji H2S mezintir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Molekül içi kovalent bağlar güçlü etkileşim, moleküller arası van der Waals zayıf etkileşimdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Intramolecular covalent bonds are strong interactions and intermolecular van der Waals interactions are weak.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Intramolekulare kovalente Bindungen sind starke Wechselwirkungen und intermolekulare Van-der-Waals-Wechselwirkungen sind schwach.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les liaisons covalentes intramoléculaires sont des interactions fortes et les interactions intermoléculaires de Van der Waals sont faibles.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Внутримолекулярные ковалентные связи представляют собой сильные взаимодействия, а межмолекулярные ван-дер-ваальсовые взаимодействия являются слабыми.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الروابط التساهمية داخل الجزيئات هي تفاعلات قوية وتفاعلات فان دير فال بين الجزيئات ضعيفة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分子内共价键是强相互作用，分子间范德华相互作用是弱相互作用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girêdanên kovalentî yên intramolekular danûstendinên xurt in û têkiliyên van der Waals-ê yên navmolekular qels in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Türler Arası Etkileşimler ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Intermolecular Interactions, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Zwischenmolekulare Kräfte: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Interactions Intermoléculaires, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Взаимодействия между частицами», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التفاعلات بين الجسيمات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“微粒间相互作用”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Kovalent bağ elektron alışverişiyle oluşur.",
          "en": "Covalent bonds are formed by the exchange of electrons.",
          "de": "Kovalente Bindungen entstehen durch den Austausch von Elektronen.",
          "fr": "Les liaisons covalentes se forment par échange d'électrons.",
          "ru": "Ковалентные связи образуются в результате обмена электронами.",
          "ar": "تتشكل الروابط التساهمية عن طريق تبادل الإلكترونات.",
          "zh": "共价键是通过电子交换形成的。",
          "ku": "Girêdanên kovalent bi pevguherîna elektronan çêdibin."
        },
        {
          "tr": "London kuvveti moleküldeki elektron sayısı azaldıkça artar.",
          "en": "London force increases as the number of electrons in the molecule decreases.",
          "de": "Die London-Kraft nimmt zu, wenn die Anzahl der Elektronen im Molekül abnimmt.",
          "fr": "La force de London augmente à mesure que le nombre d’électrons dans la molécule diminue.",
          "ru": "Сила Лондона увеличивается по мере уменьшения числа электронов в молекуле.",
          "ar": "تزداد قوة لندن مع انخفاض عدد الإلكترونات في الجزيء.",
          "zh": "伦敦力随着分子中电子数量的减少而增加。",
          "ku": "Hêza Londonê her ku hejmara elektronên di molekulê de kêm dibe zêde dibe."
        },
        {
          "tr": "Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.",
          "en": "The bond between two atoms with equal electronegativities is polar.",
          "de": "Die Bindung zwischen zwei Atomen mit gleicher Elektronegativität ist polar.",
          "fr": "La liaison entre deux atomes d’électronégativité égale est polaire.",
          "ru": "Связь между двумя атомами с одинаковой электроотрицательностью является полярной.",
          "ar": "الرابطة بين ذرتين متساويتين في السالبية الكهربية تكون قطبية.",
          "zh": "两个具有相等电负性的原子之间的键是极性的。",
          "ku": "Girêdana di navbera du atomên bi elektronegatîviyên wekhev de polar e."
        },
        {
          "tr": "Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.",
          "en": "In the Lewis symbol, the neutrons in the nucleus are drawn around the symbol.",
          "de": "Im Lewis-Symbol sind die Neutronen im Kern um das Symbol herum gezeichnet.",
          "fr": "Dans le symbole de Lewis, les neutrons du noyau sont dessinés autour du symbole.",
          "ru": "В символе Льюиса нейтроны ядра нарисованы вокруг символа.",
          "ar": "في رمز لويس، يتم رسم النيوترونات الموجودة في النواة حول الرمز.",
          "zh": "在路易斯符号中，原子核中的中子被绘制在符号周围。",
          "ku": "Di sembola Lewis de, notronên di navokê de li dora sembolê têne kişandin."
        },
        {
          "tr": "Metallerin tel ve levha haline getirilebilmesi elektron denizi modelinin kayma esnekliği ile açıklanır.",
          "en": "The ability to turn metals into wires and sheets is explained by the shear flexibility of the electron sea model.",
          "de": "Die Fähigkeit, Metalle in Drähte und Bleche umzuwandeln, wird durch die Scherflexibilität des Elektronenmeermodells erklärt.",
          "fr": "La capacité à transformer les métaux en fils et en feuilles s’explique par la flexibilité au cisaillement du modèle de la mer d’électrons.",
          "ru": "Способность превращать металлы в проволоку и листы объясняется сдвиговой гибкостью модели электронного моря.",
          "ar": "يتم تفسير القدرة على تحويل المعادن إلى أسلاك وصفائح من خلال مرونة القص لنموذج بحر الإلكترون.",
          "zh": "将金属转变为线材和板材的能力可以通过电子海模型的剪切灵活性来解释。",
          "ku": "Kapasîteya zivirîna metalan di têl û pelan de bi nermbûna guheztinê ya modela deryaya elektronê tê ravekirin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Metallerin tel ve levha haline getirilebilmesi elektron denizi modelinin kayma esnekliği ile açıklanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The ability to turn metals into wires and sheets is explained by the shear flexibility of the electron sea model.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Fähigkeit, Metalle in Drähte und Bleche umzuwandeln, wird durch die Scherflexibilität des Elektronenmeermodells erklärt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La capacité à transformer les métaux en fils et en feuilles s’explique par la flexibilité au cisaillement du modèle de la mer d’électrons.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Способность превращать металлы в проволоку и листы объясняется сдвиговой гибкостью модели электронного моря.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم تفسير القدرة على تحويل المعادن إلى أسلاك وصفائح من خلال مرونة القص لنموذج بحر الإلكترون.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“将金属转变为线材和板材的能力可以通过电子海模型的剪切灵活性来解释。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kapasîteya zivirîna metalan di têl û pelan de bi nermbûna guheztinê ya modela deryaya elektronê tê ravekirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u03-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Türler Arası Etkileşimler konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Intermolecular Interactions, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Zwischenmolekulare Kräfte die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Interactions Intermoléculaires, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Взаимодействия между частицами», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التفاعلات بين الجسيمات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“微粒间相互作用”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Têkiliyên Navbera Cûreyên Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Bileşik adlandırmada kovalent bileşiklerde mono, di, tri gibi sayı ön ekleri kullanılır.",
          "en": "In naming compounds, numerical prefixes such as mono, di, tri are used for covalent compounds.",
          "de": "Bei der Benennung von Verbindungen werden bei kovalenten Verbindungen Zahlpräfixe wie mono, di, tri verwendet.",
          "fr": "Dans la nomenclature, les préfixes numériques tels que mono, di, tri sont utilisés pour les composés covalents.",
          "ru": "При названии ковалентных соединений используются числовые приставки, такие как моно, ди, три.",
          "ar": "في تسمية المركبات التساهمية تُستخدم البادئات العددية مثل أحادي (mono) وثنائي (di) وثلاثي (tri).",
          "zh": "共价化合物命名时使用一、二、三（mono、di、tri）等数字前缀。",
          "ku": "Di binavkirina pêkhateyên kovalent de pêşgirên hejmarî yên wekî mono, di, tri têne bikaranîn."
        },
        {
          "tr": "Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.",
          "en": "Hydrogen bond is a covalent bond between H2 molecules.",
          "de": "Eine Wasserstoffbindung ist eine kovalente Bindung zwischen H2-Molekülen.",
          "fr": "La liaison hydrogène est une liaison covalente entre les molécules H2.",
          "ru": "Водородная связь – это ковалентная связь между молекулами H2.",
          "ar": "الرابطة الهيدروجينية هي رابطة تساهمية بين جزيئات H2.",
          "zh": "氢键是H2分子之间的共价键。",
          "ku": "Girêdana hîdrojenê di navbera molekulên H2 de girêdaneke kovalent e."
        },
        {
          "tr": "Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.",
          "en": "Table salt (NaCl) conducts electric current perfectly in its solid crystal form.",
          "de": "Speisesalz (NaCl) leitet in seiner festen Kristallform den elektrischen Strom perfekt.",
          "fr": "Le sel de table (NaCl) conduit parfaitement le courant électrique sous sa forme cristalline solide.",
          "ru": "Поваренная соль (NaCl) прекрасно проводит электрический ток в твердой кристаллической форме.",
          "ar": "يوصل ملح الطعام (NaCl) التيار الكهربائي بشكل مثالي في شكله البلوري الصلب.",
          "zh": "食盐（NaCl）以其固体晶体形式完美地传导电流。",
          "ku": "Xwêya sifrê (NaCl) di forma xweya krîstal a zexm de tîra elektrîkê bi rengek bêkêmasî derbas dike."
        },
        {
          "tr": "HCl molekülündeki bağ apolar kovalent bağdır.",
          "en": "The bond in the HCl molecule is a nonpolar covalent bond.",
          "de": "Die Bindung im HCl-Molekül ist eine unpolare kovalente Bindung.",
          "fr": "La liaison dans la molécule HCl est une liaison covalente non polaire.",
          "ru": "Связь в молекуле HCl является неполярной ковалентной связью.",
          "ar": "الرابطة في جزيء حمض الهيدروكلوريك هي رابطة تساهمية غير قطبية.",
          "zh": "HCl分子中的键是非极性共价键。",
          "ku": "Girêdana di molekula HCl de girêdaneke kovalentî ya nepolar e."
        },
        {
          "tr": "Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.",
          "en": "The dipole-dipole interaction is the fundamental force seen between noble gas atoms.",
          "de": "Die Dipol-Dipol-Wechselwirkung ist die grundlegende Kraft zwischen Edelgasatomen.",
          "fr": "L'interaction dipôle-dipôle est la force fondamentale observée entre les atomes de gaz rares.",
          "ru": "Диполь-дипольное взаимодействие — это фундаментальная сила, наблюдаемая между атомами благородного газа.",
          "ar": "التفاعل ثنائي القطب ثنائي القطب هو القوة الأساسية التي تظهر بين ذرات الغاز النبيل.",
          "zh": "偶极-偶极相互作用是稀有气体原子之间的基本力。",
          "ku": "Têkiliya dupol-dîpol hêza bingehîn e ku di navbera atomên gaza esîl de tê dîtin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Bileşik adlandırmada kovalent bileşiklerde mono, di, tri gibi sayı ön ekleri kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In naming compounds, numerical prefixes such as mono, di, tri are used for covalent compounds.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Benennung von Verbindungen werden bei kovalenten Verbindungen Zahlpräfixe wie mono, di, tri verwendet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la nomenclature, les préfixes numériques tels que mono, di, tri sont utilisés pour les composés covalents.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При названии ковалентных соединений используются числовые приставки, такие как моно, ди, три.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تسمية المركبات التساهمية تُستخدم البادئات العددية مثل أحادي (mono) وثنائي (di) وثلاثي (tri).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“共价化合物命名时使用一、二、三（mono、di、tri）等数字前缀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di binavkirina pêkhateyên kovalent de pêşgirên hejmarî yên wekî mono, di, tri têne bikaranîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit03;
