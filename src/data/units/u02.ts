import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit02: ChemistryUnitSeedData = {
  "id": "u02",
  "order": 2,
  "exam": "TYT",
  "grade": 9,
  "title": {
    "tr": "Atom ve Periyodik Sistem",
    "en": "Atom & Periodic System",
    "de": "Atom und Periodensystem",
    "fr": "Atome et Système Périodique",
    "ru": "Атом и периодическая система",
    "ar": "الذرة والجدول الدوري",
    "zh": "原子与周期系",
    "ku": "Atom û Sîstema Periyodîk"
  },
  "subtitle": {
    "tr": "Modeller, Kuantum Sayıları ve Periyodik Özellikler",
    "en": "Models, Quantum Numbers & Trends",
    "de": "Modelle, Quantenzahlen und periodische Eigenschaften",
    "fr": "Modèles, nombres quantiques et propriétés périodiques",
    "ru": "Модели, квантовые числа и периодические свойства",
    "ar": "النماذج والأعداد الكمومية والخصائص الدورية",
    "zh": "模型、量子数和周期性特性",
    "ku": "Model, Jijmarên Kuantum û Taybetmendiyên Perîyodîk"
  },
  "facts": [
    {
      "id": "u02-f01",
      "fact": {
        "tr": "Rutherford altın levha deneyiyle çekirdekli atom modelini ve atomun büyük kısmının boşluk olduğunu keşfetmiştir.",
        "en": "With his gold plate experiment, Rutherford discovered the atomic model with a nucleus and that most of the atom was empty space.",
        "de": "Mit seinem Goldplattenexperiment entdeckte Rutherford das Atommodell mit einem Kern und dass der größte Teil des Atoms aus leerem Raum besteht.",
        "fr": "Avec son expérience sur la plaque d'or, Rutherford a découvert le modèle atomique avec un noyau et que la majeure partie de l'atome était un espace vide.",
        "ru": "В ходе своего эксперимента с золотой пластинкой Резерфорд открыл модель атома с ядром и обнаружил, что большая часть атома представляет собой пустое пространство.",
        "ar": "من خلال تجربته على صفيحة الذهب، اكتشف رذرفورد النموذج الذري الذي يحتوي على نواة وأن معظم الذرة عبارة عن مساحة فارغة.",
        "zh": "卢瑟福通过金板实验发现了带有原子核的原子模型，并且原子的大部分是空的。",
        "ku": "Rutherford bi ceribandina xwe ya plakaya zêr, modela atomê ya bi navokê vedît û ku piraniya atomê cihê vala bû."
      },
      "trap": {
        "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.",
        "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
        "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
        "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
        "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
        "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
        "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
        "ku": "Rutherford bi matematîkî îsbat kir ku elektron di dorhêlên dorhêl ên sabît de dizivirin."
      },
      "osymTip": {
        "tr": "Yörünge modeli Bohr a aittir.",
        "en": "The orbital model belongs to Bohr.",
        "de": "Das Orbitalmodell gehört zu Bohr.",
        "fr": "Le modèle orbital appartient à Bohr.",
        "ru": "Орбитальная модель принадлежит Бору.",
        "ar": "النموذج المداري ينتمي إلى بور.",
        "zh": "轨道模型属于玻尔。",
        "ku": "Modela orbital ya Bohr e."
      }
    },
    {
      "id": "u02-f02",
      "fact": {
        "tr": "Thomson üzümlü kek modelinde atomu pozitif yüklü küre içine gömülü elektronlar olarak tanımlamıştır.",
        "en": "In the Thomson raisin cake model, he defined the atom as electrons embedded in a positively charged sphere.",
        "de": "Im Thomson-Rosinenkuchen-Modell definierte er das Atom als Elektronen, die in einer positiv geladenen Kugel eingebettet sind.",
        "fr": "Dans le modèle du gâteau aux raisins de Thomson, il a défini l’atome comme étant des électrons intégrés dans une sphère chargée positivement.",
        "ru": "В модели торта с изюмом Томсона он определил атом как электроны, заключенные в положительно заряженную сферу.",
        "ar": "في نموذج كعكة الزبيب طومسون، عرّف الذرة بأنها إلكترونات مدمجة في كرة موجبة الشحنة.",
        "zh": "在汤姆森葡萄干蛋糕模型中，他将原子定义为嵌入带正电球体中的电子。",
        "ku": "Di modela kekê raisinê ya Thomson de, wî atom wekî elektronên ku di qadek bi barkirina erênî de hatine bicîh kirin pênase kir."
      },
      "trap": {
        "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
        "en": "Thomson proved that there are neutrons in the nucleus.",
        "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
        "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
        "ru": "Томсон доказал, что в ядре есть нейтроны.",
        "ar": "أثبت طومسون أن هناك نيوترونات في النواة.",
        "zh": "汤姆森证明了原子核中存在中子。",
        "ku": "Thomson îspat kir ku di navokê de neutron hene."
      }
    },
    {
      "id": "u02-f03",
      "fact": {
        "tr": "Bohr atom modeline göre elektronlar çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunur.",
        "en": "According to the Bohr atomic model, electrons are located in certain energy levels (orbitals) around the nucleus.",
        "de": "Nach dem Bohrschen Atommodell befinden sich Elektronen in bestimmten Energieniveaus (Orbitalen) um den Kern.",
        "fr": "Selon le modèle atomique de Bohr, les électrons sont situés à certains niveaux d'énergie (orbitales) autour du noyau.",
        "ru": "Согласно атомной модели Бора, электроны располагаются на определенных энергетических уровнях (орбиталях) вокруг ядра.",
        "ar": "وفقا لنموذج بور الذري، توجد الإلكترونات في مستويات طاقة معينة (المدارات) حول النواة.",
        "zh": "根据玻尔原子模型，电子位于原子核周围的某些能级（轨道）中。",
        "ku": "Li gorî modela atomê ya Bohr, elektron li derdora navokê di hin astên enerjiyê (orbital) de cih digirin."
      },
      "trap": {
        "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
        "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
        "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
        "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
        "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
        "ar": "يوضح نموذج بور طيف الذرات المتعددة الإلكترونات بشكل كامل.",
        "zh": "玻尔模型充分解释了多电子原子的光谱。",
        "ku": "Modela Bohr bi tevahî spektruma atomên pir-elektronî rave kir."
      }
    },
    {
      "id": "u02-f04",
      "fact": {
        "tr": "İzotop atomların proton sayıları aynı, nötron sayıları ve kütle numaraları farklıdır.",
        "en": "Isotope atoms have the same number of protons, but different numbers of neutrons and mass numbers.",
        "de": "Isotopenatome haben die gleiche Anzahl an Protonen, aber unterschiedliche Neutronenzahlen und Massenzahlen.",
        "fr": "Les atomes isotopiques ont le même nombre de protons, mais des nombres de neutrons et des nombres de masse différents.",
        "ru": "Атомы изотопов имеют одинаковое количество протонов, но разное количество нейтронов и массовые числа.",
        "ar": "تحتوي ذرات النظائر على نفس عدد البروتونات، لكن أعداد النيوترونات والأعداد الكتلية مختلفة.",
        "zh": "同位素原子具有相同数量的质子，但具有不同数量的中子和质量数。",
        "ku": "Di atomên îzotopan de heman hejmar proton hene, lê hejmarên neutron û girseyên cûda hene."
      },
      "trap": {
        "tr": "İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.",
        "en": "The chemical properties of isotope atoms are completely different from each other.",
        "de": "Die chemischen Eigenschaften der Isotopenatome sind völlig unterschiedlich.",
        "fr": "Les propriétés chimiques des atomes isotopiques sont complètement différentes les unes des autres.",
        "ru": "Химические свойства атомов изотопов совершенно отличаются друг от друга.",
        "ar": "تختلف الخصائص الكيميائية لذرات النظائر تمامًا عن بعضها البعض.",
        "zh": "同位素原子的化学性质彼此完全不同。",
        "ku": "Taybetmendiyên kîmyayî yên atomên îzotopan bi tevahî ji hev cuda ne."
      }
    },
    {
      "id": "u02-f05",
      "fact": {
        "tr": "Periyodik sistemde soldan sağa doğru gidildikçe genellikle atom yarıçapı küçülür, elektronegatiflik artar.",
        "en": "As you move from left to right in the periodic table, atomic radius generally decreases and electronegativity increases.",
        "de": "Wenn Sie sich im Periodensystem von links nach rechts bewegen, nimmt der Atomradius im Allgemeinen ab und die Elektronegativität zu.",
        "fr": "À mesure que vous vous déplacez de gauche à droite dans le tableau périodique, le rayon atomique diminue généralement et l’électronégativité augmente.",
        "ru": "При движении слева направо по таблице Менделеева радиус атома обычно уменьшается, а электроотрицательность увеличивается.",
        "ar": "أثناء انتقالك من اليسار إلى اليمين في الجدول الدوري، يتناقص نصف القطر الذري عمومًا وتزداد السالبية الكهربية.",
        "zh": "当您在元素周期表中从左向右移动时，原子半径通常会减小，电负性会增加。",
        "ku": "Her ku hûn di tabloya perîyodîk de ji çepê ber bi rastê ve diçin, tîrêjê atomê bi gelemperî kêm dibe û elektronegatîv zêde dibe."
      },
      "trap": {
        "tr": "Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi daima düzenli artar.",
        "en": "Ionization energy always increases steadily as you move from left to right in the same period.",
        "de": "Die Ionisierungsenergie nimmt immer stetig zu, wenn man sich im gleichen Zeitraum von links nach rechts bewegt.",
        "fr": "L'énergie d'ionisation augmente toujours régulièrement à mesure que vous vous déplacez de gauche à droite au cours de la même période.",
        "ru": "Энергия ионизации всегда неуклонно возрастает по мере движения слева направо за один и тот же период.",
        "ar": "تزداد طاقة التأين دائمًا بشكل مطرد أثناء انتقالك من اليسار إلى اليمين في نفس الفترة.",
        "zh": "当您在同一时间段内从左向右移动时，电离能始终稳定增加。",
        "ku": "Dema ku hûn di heman heyamê de ji çepê ber bi rastê ve diçin, enerjiya ionîzasyonê her gav bi domdarî zêde dibe."
      }
    },
    {
      "id": "u02-f06",
      "fact": {
        "tr": "Ardışık iyonlaşma enerjisinde 3.5-4 kattan büyük sıçrama değerlik elektron sayısını verir.",
        "en": "A jump of more than 3.5-4 times in successive ionization energy gives the number of valence electrons.",
        "de": "Ein Sprung der aufeinanderfolgenden Ionisierungsenergie um mehr als das 3,5- bis 4-fache ergibt die Anzahl der Valenzelektronen.",
        "fr": "Un saut de plus de 3,5 à 4 fois dans l'énergie d'ionisation successive donne le nombre d'électrons de valence.",
        "ru": "Скачок последовательной энергии ионизации более чем в 3,5-4 раза дает число валентных электронов.",
        "ar": "قفزة أكثر من 3.5-4 مرات في طاقة التأين المتعاقبة تعطي عدد إلكترونات التكافؤ.",
        "zh": "连续电离能跳跃超过 3.5-4 倍即可得出价电子数。",
        "ku": "Di enerjiya ionîzasyonê ya li pey hev de ji 3,5-4 qatan zêdetir ketina jimareya elektronên valence dide."
      },
      "trap": {
        "tr": "İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.",
        "en": "The second ionization energy is always smaller than the first ionization energy.",
        "de": "Die zweite Ionisierungsenergie ist immer kleiner als die erste Ionisierungsenergie.",
        "fr": "La deuxième énergie d'ionisation est toujours inférieure à la première énergie d'ionisation.",
        "ru": "Вторая энергия ионизации всегда меньше первой энергии ионизации.",
        "ar": "طاقة التأين الثانية تكون دائما أصغر من طاقة التأين الأولى.",
        "zh": "第二电离能总是小于第一电离能。",
        "ku": "Enerjiya îyonîzasyona duyemîn her dem ji enerjiya ionîzasyona yekem piçûktir e."
      }
    },
    {
      "id": "u02-f07",
      "fact": {
        "tr": "İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, proton sayıları farklıdır.",
        "en": "The number of electrons and arrangements of isoelectronic particles are the same, but the number of protons is different.",
        "de": "Die Anzahl der Elektronen und die Anordnung isoelektronischer Teilchen sind gleich, die Anzahl der Protonen ist jedoch unterschiedlich.",
        "fr": "Le nombre d’électrons et la disposition des particules isoélectroniques sont les mêmes, mais le nombre de protons est différent.",
        "ru": "Число электронов и расположение изоэлектронных частиц одинаково, но число протонов различно.",
        "ar": "عدد الإلكترونات وترتيبات الجسيمات متساوية الإلكترون هي نفسها، لكن عدد البروتونات مختلف.",
        "zh": "等电子粒子的电子数和排列相同，但质子数不同。",
        "ku": "Hejmara elektronan û rêzikên pariyên îzoelektronîk yek in, lê hejmara protonan cuda ye."
      },
      "trap": {
        "tr": "İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.",
        "en": "Isoelectronic particles have exactly the same desire to undergo chemical reactions.",
        "de": "Isoelektronische Teilchen haben genau den gleichen Wunsch, chemische Reaktionen einzugehen.",
        "fr": "Les particules isoélectroniques ont exactement le même désir de subir des réactions chimiques.",
        "ru": "Изоэлектронные частицы имеют точно такое же желание вступать в химические реакции.",
        "ar": "تتمتع الجسيمات المتساوية الإلكترون بنفس الرغبة تمامًا في الخضوع للتفاعلات الكيميائية.",
        "zh": "等电子粒子具有完全相同的进行化学反应的愿望。",
        "ku": "Parçeyên îzoelektronîk tam heman daxwaziya reaksiyonên kîmyewî hene."
      }
    },
    {
      "id": "u02-f08",
      "fact": {
        "tr": "Flor periyodik sistemin elektronegatifliği en yüksek elementidir (4.0 kabul edilir).",
        "en": "Fluorine is the element with the highest electronegativity in the periodic system (accepted as 4.0).",
        "de": "Fluor ist das Element mit der höchsten Elektronegativität im Periodensystem (akzeptiert als 4,0).",
        "fr": "Le fluor est l'élément ayant l'électronégativité la plus élevée dans le système périodique (accepté comme 4,0).",
        "ru": "Фтор — элемент с самой высокой электроотрицательностью в периодической системе (принимается за 4,0).",
        "ar": "الفلور هو العنصر ذو أعلى سالبية كهربية في النظام الدوري (مقبول بـ 4.0).",
        "zh": "氟是元素周期表中电负性最高的元素（公认为4.0）。",
        "ku": "Florîn di pergala perîyodîk de (wekî 4.0 tê qebûlkirin) elementa ku herî zêde elektronegatîv e."
      },
      "trap": {
        "tr": "Fransiyum elektronegatifliği en yüksek ametaldir.",
        "en": "Francium is the nonmetal with the highest electronegativity.",
        "de": "Francium ist das Nichtmetall mit der höchsten Elektronegativität.",
        "fr": "Le francium est le non-métal ayant la plus grande électronégativité.",
        "ru": "Франций — неметалл с самой высокой электроотрицательностью.",
        "ar": "الفرانسيوم هو اللافلز ذو أعلى السالبية الكهربية.",
        "zh": "钫是电负性最高的非金属。",
        "ku": "Fransiyûm nemetal e ku xwedî elektronegatîfiya herî bilind e."
      }
    },
    {
      "id": "u02-f09",
      "fact": {
        "tr": "Soy gazlar kararlı oktet/dublet yapısına sahip olduklarından elektron ilgisi ihmal edilecek kadar düşüktür.",
        "en": "Since noble gases have a stable octet/duplex structure, their electron affinity is negligibly low.",
        "de": "Da Edelgase eine stabile Oktett-/Duplexstruktur haben, ist ihre Elektronenaffinität vernachlässigbar gering.",
        "fr": "Étant donné que les gaz rares ont une structure octet/duplex stable, leur affinité électronique est négligeable.",
        "ru": "Поскольку благородные газы имеют стабильную октетно-дуплексную структуру, их сродство к электрону пренебрежимо мало.",
        "ar": "نظرًا لأن الغازات النبيلة لها بنية ثمانية/ثنائية مستقرة، فإن تقاربها الإلكتروني منخفض بشكل لا يذكر.",
        "zh": "由于稀有气体具有稳定的八位组/双链体结构，因此它们的电子亲和力低得可以忽略不计。",
        "ku": "Ji ber ku gazên hêja xwedan avahiyek oktet/dupleks a stabîl in, girêdana wan a elektron pir kêm e."
      },
      "trap": {
        "tr": "Helyum 8 değerlik elektronuna sahip bir asal gazdır.",
        "en": "Helium is a noble gas with 8 valence electrons.",
        "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
        "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
        "ru": "Гелий — благородный газ с 8 валентными электронами.",
        "ar": "الهيليوم هو غاز نبيل يحتوي على 8 إلكترونات تكافؤ.",
        "zh": "氦是一种具有 8 个价电子的惰性气体。",
        "ku": "Helium gazek esîl e ku 8 elektronên valansê hene."
      }
    },
    {
      "id": "u02-f10",
      "fact": {
        "tr": "Bir periyotta iyonlaşma enerjisi sıralamasında 2A ve 5A küresel simetriden dolayı 3A ve 6A dan büyüktür.",
        "en": "In the order of ionization energy in a period, 2A and 5A are greater than 3A and 6A due to spherical symmetry.",
        "de": "In der Reihenfolge der Ionisierungsenergie in einer Periode sind 2A und 5A aufgrund der Kugelsymmetrie größer als 3A und 6A.",
        "fr": "Dans l'ordre de l'énergie d'ionisation sur une période, 2A et 5A sont supérieurs à 3A et 6A en raison de la symétrie sphérique.",
        "ru": "В порядке энергии ионизации за период 2А и 5А больше, чем 3А и 6А из-за сферической симметрии.",
        "ar": "في ترتيب طاقة التأين في الفترة، 2A و5A أكبر من 3A و6A بسبب التناظر الكروي.",
        "zh": "在一个周期内的电离能顺序中，由于球对称性，2A和5A大于3A和6A。",
        "ku": "Di rêza enerjiya iyonîzasyonê de di heyamekê de, 2A û 5A ji 3A û 6A mezintir in ji ber simetrîya ferîkî."
      },
      "trap": {
        "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi daima 2A grubundan büyüktür.",
        "en": "In the same period, the ionization energy of the 3A group is always greater than that of the 2A group.",
        "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe immer größer als die der 2A-Gruppe.",
        "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est toujours supérieure à celle du groupe 2A.",
        "ru": "В этот же период энергия ионизации группы 3А всегда больше, чем у группы 2А.",
        "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A دائمًا أكبر من طاقة التأين للمجموعة 2A.",
        "zh": "在同一时期，3A基团的电离能总是大于2A基团的电离能。",
        "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A her gav ji ya koma 2A mezintir e."
      }
    },
    {
      "id": "u02-f11",
      "fact": {
        "tr": "Katyon oluşurken elektron verildiği için tanecik yarıçapı daima küçülür.",
        "en": "Since electrons are given away when a cation is formed, the particle radius always decreases.",
        "de": "Da bei der Bildung eines Kations Elektronen abgegeben werden, nimmt der Teilchenradius immer ab.",
        "fr": "Étant donné que des électrons sont cédés lors de la formation d’un cation, le rayon des particules diminue toujours.",
        "ru": "Поскольку электроны отдаются при образовании катиона, радиус частицы всегда уменьшается.",
        "ar": "وبما أن الإلكترونات تتحرر عند تكوين الكاتيون، فإن نصف قطر الجسيم يتناقص دائمًا.",
        "zh": "由于形成阳离子时会释放电子，因此粒子半径总是减小。",
        "ku": "Ji ber ku dema ku katyonek çêdibe elektron têne dayîn, tîrêjê perçeyê her gav kêm dibe."
      },
      "trap": {
        "tr": "Katyon oluştuğunda çekirdeğin çekim gücü artar.",
        "en": "When a cation is formed, the gravitational force of the nucleus increases.",
        "de": "Bei der Bildung eines Kations erhöht sich die Gravitationskraft des Kerns.",
        "fr": "Lorsqu’un cation se forme, la force gravitationnelle du noyau augmente.",
        "ru": "При образовании катиона гравитационная сила ядра увеличивается.",
        "ar": "عندما يتكون الكاتيون، تزداد قوة الجاذبية للنواة.",
        "zh": "当形成阳离子时，原子核的引力增加。",
        "ku": "Dema ku katyonek çêbibe, hêza gravîtasyonê ya navokê zêde dibe."
      }
    },
    {
      "id": "u02-f12",
      "fact": {
        "tr": "Anyon oluşurken elektron alındığı için elektron başına düşen çekim kuvveti azalır, yarıçap büyür.",
        "en": "As an electron is removed while an anion is forming, the attractive force per electron decreases and the radius increases.",
        "de": "Wenn ein Elektron entfernt wird, während sich ein Anion bildet, nimmt die Anziehungskraft pro Elektron ab und der Radius nimmt zu.",
        "fr": "Lorsqu'un électron est retiré pendant la formation d'un anion, la force d'attraction par électron diminue et le rayon augmente.",
        "ru": "Поскольку электрон удаляется во время образования аниона, сила притяжения, приходящаяся на электрон, уменьшается, а радиус увеличивается.",
        "ar": "عند إزالة الإلكترون أثناء تكوين الأنيون، تقل قوة الجذب لكل إلكترون ويزداد نصف القطر.",
        "zh": "当电子在阴离子形成时被移除时，每个电子的吸引力减小并且半径增大。",
        "ku": "Gava ku elektronek tê rakirin dema ku anionek çê dibe, hêza balkêş a her elektronê kêm dibe û tîrêj zêde dibe."
      },
      "trap": {
        "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
        "en": "As anion forms, the number of protons in the nucleus increases.",
        "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
        "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
        "ru": "По мере образования анионов число протонов в ядре увеличивается.",
        "ar": "ومع تشكل الأنيون، يزداد عدد البروتونات في النواة.",
        "zh": "随着阴离子的形成，原子核中的质子数量增加。",
        "ku": "Her ku anyon çêdibe, hejmara protonan di navokê de zêde dibe."
      }
    },
    {
      "id": "u02-f13",
      "fact": {
        "tr": "Mendeleyev periyodik tabloyu atom kütlelerine göre, Moseley ise atom numaralarına (proton sayısına) göre düzenlemiştir.",
        "en": "Mendeleev arranged the periodic table according to atomic masses, and Moseley arranged it according to atomic numbers (number of protons).",
        "de": "Mendeleev ordnete das Periodensystem nach Atommassen und Moseley nach Atomzahlen (Anzahl der Protonen).",
        "fr": "Mendeleïev a organisé le tableau périodique selon les masses atomiques, et Moseley l'a organisé selon les numéros atomiques (nombre de protons).",
        "ru": "Менделеев расположил таблицу Менделеева по атомным массам, а Мозли — по атомным номерам (числу протонов).",
        "ar": "رتب مندليف الجدول الدوري حسب الكتل الذرية، ورتبه موزلي حسب الأعداد الذرية (عدد البروتونات).",
        "zh": "门捷列夫按照原子质量排列元素周期表，莫斯利按照原子序数（质子数）排列。",
        "ku": "Mendeleev tabloya perîyodîk li gor girseyên atomê, û Moseley jî li gor hejmarên atomê (hejmara protonan) rêz kirine."
      },
      "trap": {
        "tr": "Moseley periyodik cetveli nötron sayılarına göre dizmiştir.",
        "en": "Moseley arranged the periodic table according to the number of neutrons.",
        "de": "Moseley ordnete das Periodensystem nach der Anzahl der Neutronen.",
        "fr": "Moseley a organisé le tableau périodique en fonction du nombre de neutrons.",
        "ru": "Мозли расположил таблицу Менделеева по числу нейтронов.",
        "ar": "قام موزلي بترتيب الجدول الدوري حسب عدد النيوترونات.",
        "zh": "莫斯利根据中子数排列了元素周期表。",
        "ku": "Moseley tabloya perîyodîk li gorî hejmara notronan rêz kir."
      }
    },
    {
      "id": "u02-f14",
      "fact": {
        "tr": "Halojenler 7A grubu elementleridir ve bileşiklerinde -1 ile +7 arasında değerlik alabilir (Flor hariç, F sadece -1 alır).",
        "en": "Halogens are group 7A elements and can take a valence of -1 to +7 in their compounds (except for Fluorine, F can only take -1).",
        "de": "Halogene sind Elemente der Gruppe 7A und können in ihren Verbindungen eine Wertigkeit von -1 bis +7 annehmen (mit Ausnahme von Fluor kann F nur -1 annehmen).",
        "fr": "Les halogènes sont des éléments du groupe 7A et peuvent prendre une valence de -1 à +7 dans leurs composés (sauf pour le fluor, F ne peut prendre que -1).",
        "ru": "Галогены являются элементами группы 7А и в своих соединениях могут принимать валентность от -1 до +7 (за исключением фтора, F может принимать только -1).",
        "ar": "الهالوجينات هي عناصر المجموعة 7A ويمكن أن تأخذ تكافؤًا من -1 إلى +7 في مركباتها (باستثناء الفلور، يمكن أن يأخذ F فقط -1).",
        "zh": "卤素是第 7A 族元素，其化合物的化合价为 -1 至 +7（除氟外，F 只能为 -1）。",
        "ku": "Halojen hêmanên koma 7A ne û dikarin di pêkhateyên xwe de valentek ji -1 heta +7 bigirin (ji bilî Florînê, F tenê dikare -1 bigire)."
      },
      "trap": {
        "tr": "Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.",
        "en": "It can reach +7 oxidation state in fluorine compounds.",
        "de": "In Fluorverbindungen kann es eine Oxidationsstufe von +7 erreichen.",
        "fr": "Il peut atteindre un état d’oxydation de +7 dans les composés fluorés.",
        "ru": "В соединениях фтора он может достигать степени окисления +7.",
        "ar": "يمكن أن يصل إلى حالة الأكسدة +7 في مركبات الفلور.",
        "zh": "在氟化合物中可以达到+7氧化态。",
        "ku": "Ew dikare di pêkhateyên florînê de bigihîje rewşa oksîdasyonê +7."
      }
    },
    {
      "id": "u02-f15",
      "fact": {
        "tr": "Alkali metaller (1A) en aktif metallerdir ve suyla şiddetli tepkime vererek H2 gazı açığa çıkarır.",
        "en": "Alkali metals (1A) are the most active metals and react violently with water, releasing H2 gas.",
        "de": "Alkalimetalle (1A) sind die aktivsten Metalle und reagieren heftig mit Wasser unter Freisetzung von H2-Gas.",
        "fr": "Les métaux alcalins (1A) sont les métaux les plus actifs et réagissent violemment avec l'eau, libérant du gaz H2.",
        "ru": "Щелочные металлы (1А) являются наиболее активными металлами и бурно реагируют с водой, выделяя газ H2.",
        "ar": "الفلزات القلوية (1A) هي أكثر الفلزات نشاطا وتتفاعل بعنف مع الماء، وتطلق غاز H2.",
        "zh": "碱金属 (1A) 是最活泼的金属，与水发生剧烈反应，释放出氢气。",
        "ku": "Metalên alkalî (1A) metalên herî çalak in û bi avê re bi tundî reaksiyonê dikin û gaza H2 derdixin."
      },
      "trap": {
        "tr": "Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.",
        "en": "Alkali metals are abundant in nature as pure metals.",
        "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
        "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
        "ru": "Щелочные металлы широко распространены в природе в виде чистых металлов.",
        "ar": "تتواجد الفلزات القلوية بكثرة في الطبيعة كمعادن نقية.",
        "zh": "碱金属作为纯金属在自然界中含量丰富。",
        "ku": "Metalên alkalî di xwezayê de wekî metalên pak pir in."
      }
    },
    {
      "id": "u02-f16",
      "fact": {
        "tr": "Toprak alkali metaller (2A) bileşiklerinde daima +2 değerlik alır.",
        "en": "Alkaline earth metals (2A) always take a +2 valence in their compounds.",
        "de": "Erdalkalimetalle (2A) nehmen in ihren Verbindungen immer eine Wertigkeit von +2 an.",
        "fr": "Les métaux alcalino-terreux (2A) prennent toujours une valence +2 dans leurs composés.",
        "ru": "Щелочноземельные металлы (2А) в своих соединениях всегда имеют валентность +2.",
        "ar": "الفلزات القلوية الترابية (2A) لها دائمًا تكافؤ +2 في مركباتها.",
        "zh": "碱土金属 (2A) 在其化合物中始终具有 +2 价。",
        "ku": "Metalên erda alkalîn (2A) di pêkhateyên xwe de her dem valansek +2 digirin."
      },
      "trap": {
        "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
        "en": "It forms +1 and +2 stable ions in magnesium compounds.",
        "de": "Es bildet +1 und +2 stabile Ionen in Magnesiumverbindungen.",
        "fr": "Il forme des ions stables +1 et +2 dans les composés de magnésium.",
        "ru": "Он образует +1 и +2 стабильные ионы в соединениях магния.",
        "ar": "وهو يشكل +1 و +2 أيونات مستقرة في مركبات المغنيسيوم.",
        "zh": "它在镁化合物中形成+1和+2稳定离子。",
        "ku": "Di pêkhateyên magnesiumê de +1 û +2 îyonên stabîl çêdike."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u02-c01",
      "conceptA": {
        "tr": "İzotop",
        "en": "isotope",
        "de": "Isotop",
        "fr": "isotope",
        "ru": "изотоп",
        "ar": "النظائر",
        "zh": "同位素",
        "ku": "îzotop"
      },
      "conceptB": {
        "tr": "İzoton",
        "en": "isotone",
        "de": "isoton",
        "fr": "isotone",
        "ru": "изотон",
        "ar": "isotone",
        "zh": "等酮",
        "ku": "îzoton"
      },
      "distinction": {
        "tr": "İzotopta proton sayıları aynı nötron farklı; izotonda nötron sayıları aynı proton farklıdır.",
        "en": "In the isotope, the number of protons is the same and the number of neutrons is different; The number of neutrons in the isotone is the same, but the number of protons is different.",
        "de": "Im Isotop ist die Anzahl der Protonen gleich und die Anzahl der Neutronen unterschiedlich; Die Anzahl der Neutronen im Isoton ist gleich, aber die Anzahl der Protonen ist unterschiedlich.",
        "fr": "Dans l'isotope, le nombre de protons est le même et le nombre de neutrons est différent ; Le nombre de neutrons dans l’isotone est le même, mais le nombre de protons est différent.",
        "ru": "В изотопе число протонов одинаково, а число нейтронов различно; Число нейтронов в изотоне одинаковое, а количество протонов разное.",
        "ar": "في النظائر، عدد البروتونات هو نفسه وعدد النيوترونات مختلف؛ عدد النيوترونات في الأيزوتون هو نفسه، لكن عدد البروتونات مختلف.",
        "zh": "同位素中，质子数相同，中子数不同；等位素中的中子数相同，但质子数不同。",
        "ku": "Di îzotopê de hejmara protonan yek e û hejmara notronan jî cuda ye; Di îzotonê de hejmara notronan yek e, lê hejmara protonan cuda ye."
      }
    },
    {
      "id": "u02-c02",
      "conceptA": {
        "tr": "İyonlaşma Enerjisi",
        "en": "Ionization Energy",
        "de": "Ionisierungsenergie",
        "fr": "Énergie d'ionisation",
        "ru": "Энергия ионизации",
        "ar": "طاقة التأين",
        "zh": "电离能",
        "ku": "Ionization Energy"
      },
      "conceptB": {
        "tr": "Elektron İlgisi",
        "en": "Electron Affinity",
        "de": "Elektronenaffinität",
        "fr": "Affinité électronique",
        "ru": "Электронное сродство",
        "ar": "الانجذاب الإلكتروني",
        "zh": "电子亲和势",
        "ku": "Têkiliya Elektronê"
      },
      "distinction": {
        "tr": "İyonlaşma enerjisi gaz haldeki atomdan elektron koparma enerjisidir; elektron ilgisi elektron alma sırasındaki enerji değişimidir.",
        "en": "Ionization energy is the energy to remove an electron from a gaseous atom; Electron affinity is the energy change during electron acquisition.",
        "de": "Ionisierungsenergie ist die Energie, um ein Elektron aus einem gasförmigen Atom zu entfernen; Unter Elektronenaffinität versteht man die Energieänderung während der Elektronenaufnahme.",
        "fr": "L'énergie d'ionisation est l'énergie nécessaire pour retirer un électron d'un atome gazeux ; L'affinité électronique est le changement d'énergie lors de l'acquisition d'électrons.",
        "ru": "Энергия ионизации — это энергия удаления электрона из газообразного атома; Сродство к электрону — это изменение энергии во время приобретения электрона.",
        "ar": "طاقة التأين هي الطاقة اللازمة لإزالة الإلكترون من الذرة الغازية. الألفة الإلكترونية هي تغير الطاقة أثناء اكتساب الإلكترون.",
        "zh": "电离能是从气态原子中除去电子的能量；电子亲和力是电子获取过程中的能量变化。",
        "ku": "Enerjiya yonîzasyonê enerjiya ku elektronek ji atomek gazê jê dike ye; Têkiliya elektron guhertina enerjiyê di dema wergirtina elektron de ye."
      }
    },
    {
      "id": "u02-c03",
      "conceptA": {
        "tr": "İzotop Atomlar",
        "en": "Isotope Atoms",
        "de": "Isotopenatome",
        "fr": "Atomes isotopiques",
        "ru": "Изотопные атомы",
        "ar": "ذرات النظائر",
        "zh": "同位素原子",
        "ku": "Atomên Îzotop"
      },
      "conceptB": {
        "tr": "İzoton Atomlar",
        "en": "Isotone Atoms",
        "de": "Isotone Atome",
        "fr": "Atomes d'isotone",
        "ru": "Изотоновые атомы",
        "ar": "ذرات الأيزوتون",
        "zh": "等酮原子",
        "ku": "Atomên Îzoton"
      },
      "distinction": {
        "tr": "İzotop atomların proton sayıları aynı nötronları farklıdır; izoton atomların nötron sayıları aynı protonları farklıdır.",
        "en": "Isotope atoms have the same number of protons but different numbers of neutrons; Isotone atoms have the same number of neutrons but different numbers of protons.",
        "de": "Isotopenatome haben die gleiche Anzahl an Protonen, aber eine unterschiedliche Anzahl an Neutronen; Isotonische Atome haben die gleiche Anzahl an Neutronen, aber eine unterschiedliche Anzahl an Protonen.",
        "fr": "Les atomes isotopiques ont le même nombre de protons mais un nombre différent de neutrons ; Les atomes d'isotone ont le même nombre de neutrons mais un nombre différent de protons.",
        "ru": "Атомы изотопов имеют одинаковое количество протонов, но разное количество нейтронов; Атомы изотонов имеют одинаковое количество нейтронов, но разное количество протонов.",
        "ar": "تحتوي ذرات النظائر على نفس عدد البروتونات ولكن بأعداد مختلفة من النيوترونات. تحتوي ذرات الأيزوتون على نفس عدد النيوترونات ولكن بأعداد مختلفة من البروتونات.",
        "zh": "同位素原子具有相同数量的质子但不同数量的中子；等酮原子具有相同数量的中子，但具有不同数量的质子。",
        "ku": "Di atomên îzotopan de heman hejmar proton lê jimareyên neutronên cuda hene; Atomên îzoton xwedî heman hejmara notronan in lê hejmarên proton cuda ne."
      }
    },
    {
      "id": "u02-c04",
      "conceptA": {
        "tr": "İzobar Atomlar",
        "en": "Isobar Atoms",
        "de": "Isobare Atome",
        "fr": "Atomes isobares",
        "ru": "Изобарные атомы",
        "ar": "ذرات الأيزوبار",
        "zh": "等压原子",
        "ku": "Atomên Îsobar"
      },
      "conceptB": {
        "tr": "İzoelektronik Türler",
        "en": "Isoelectronic Species",
        "de": "Isoelektronische Spezies",
        "fr": "Espèces isoélectroniques",
        "ru": "Изоэлектронные виды",
        "ar": "الأنواع الأيزوإلكترونية",
        "zh": "等电子物种",
        "ku": "Cureyên Îzoelektronîk"
      },
      "distinction": {
        "tr": "İzobarların kütle numaraları aynıdır; izoelektronik türlerin elektron sayıları ve dizilimleri aynıdır.",
        "en": "The mass numbers of the isobars are the same; The electron numbers and arrangements of isoelectronic species are the same.",
        "de": "Die Massenzahlen der Isobaren sind gleich; Die Elektronenzahlen und Anordnungen isoelektronischer Spezies sind gleich.",
        "fr": "Les nombres de masse des isobares sont les mêmes ; Le nombre d’électrons et la disposition des espèces isoélectroniques sont les mêmes.",
        "ru": "Массовые числа изобар одинаковы; Число электронов и расположение изоэлектронных частиц одинаковы.",
        "ar": "الأعداد الكتلية للإيزوبار هي نفسها؛ أعداد الإلكترونات وترتيباتها للأنواع متساوية الإلكترون هي نفسها.",
        "zh": "等压线的质量数相同；等电子物种的电子数和排列是相同的。",
        "ku": "Hejmarên girseyî yên îsobaran yek in; Hejmar û rêzikên elektronên cureyên isoelektronîk yek in."
      }
    },
    {
      "id": "u02-c05",
      "conceptA": {
        "tr": "Metaller",
        "en": "metals",
        "de": "Metalle",
        "fr": "métaux",
        "ru": "металлы",
        "ar": "المعادن",
        "zh": "金属",
        "ku": "metals"
      },
      "conceptB": {
        "tr": "Ametaller",
        "en": "nonmetals",
        "de": "Nichtmetalle",
        "fr": "non-métaux",
        "ru": "неметаллы",
        "ar": "اللافلزات",
        "zh": "非金属",
        "ku": "nemetal"
      },
      "distinction": {
        "tr": "Metaller elektron vererek katyon oluşturur ve elektrik akımını iletir; ametaller elektron alarak anyon oluşturur ve yalıtkandır.",
        "en": "Metals lose electrons to form cations and conduct electric current; Nonmetals gain electrons to form anions and are insulators.",
        "de": "Metalle geben Elektronen ab, um Kationen zu bilden und elektrischen Strom zu leiten. Nichtmetalle nehmen Elektronen auf, um Anionen zu bilden, und sind Isolatoren.",
        "fr": "Les métaux perdent des électrons pour former des cations et conduire le courant électrique ; Les non-métaux gagnent des électrons pour former des anions et sont des isolants.",
        "ru": "Металлы теряют электроны, образуя катионы и проводя электрический ток; Неметаллы присоединяют электроны с образованием анионов и являются изоляторами.",
        "ar": "تفقد المعادن الإلكترونات لتكوين الكاتيونات وتوصيل التيار الكهربائي؛ تكتسب اللافلزات الإلكترونات لتكوين الأنيونات وتكون عوازل.",
        "zh": "金属失去电子形成阳离子并传导电流；非金属获得电子形成阴离子，是绝缘体。",
        "ku": "Metal elektronan ji dest didin kationan çêdikin û herikîna elektrîkê dimeşînin; Nemetal elektronan distînin anyonan çêdikin û îzolator in."
      }
    },
    {
      "id": "u02-c06",
      "conceptA": {
        "tr": "Elektronegatiflik",
        "en": "Electronegativity",
        "de": "Elektronegativität",
        "fr": "Électronégativité",
        "ru": "Электроотрицательность",
        "ar": "السالبية الكهربية",
        "zh": "电负性",
        "ku": "Electronegativity"
      },
      "conceptB": {
        "tr": "Metalik Aktiflik",
        "en": "Metallic Activity",
        "de": "Metallische Aktivität",
        "fr": "Activité métallique",
        "ru": "Металлическая активность",
        "ar": "النشاط المعدني",
        "zh": "金属活性",
        "ku": "Çalakiya Metalîk"
      },
      "distinction": {
        "tr": "Elektronegatiflik bağ elektronlarını çekme yeteneğidir ve sağ-yukarı artar; metalik aktiflik elektron verme eğilimidir ve sol-aşağı artar.",
        "en": "Electronegativity is the ability to attract bond electrons and increases right-up; Metallic activity is the tendency to lose electrons and increases left-down.",
        "de": "Elektronegativität ist die Fähigkeit, Bindungselektronen anzuziehen und nimmt direkt zu; Metallische Aktivität ist die Tendenz, Elektronen zu verlieren und nach links zuzunehmen.",
        "fr": "L'électronégativité est la capacité à attirer les électrons de liaison et augmente vers le haut ; L'activité métallique est la tendance à perdre des électrons et à augmenter vers le bas.",
        "ru": "Электроотрицательность — это способность притягивать электроны связи и увеличивается с увеличением; Металлическая активность — это тенденция терять электроны и увеличиваться слева вниз.",
        "ar": "السالبية الكهربية هي القدرة على جذب إلكترونات الرابطة وزيادة الاتجاه نحو الأعلى؛ النشاط المعدني هو الميل إلى فقدان الإلكترونات ويزيد من اليسار إلى الأسفل.",
        "zh": "电负性是指吸引键电子并向右上方增加的能力；金属活性是失去电子并从左往下增加的趋势。",
        "ku": "Electronegativity şiyana kişandina elektronên girêdanê ye û rast-up zêde dike; Çalakiya metalîk meyla windakirina elektronan e û çep-xwarê zêde dike."
      }
    },
    {
      "id": "u02-c07",
      "conceptA": {
        "tr": "Katyon Yarıçapı",
        "en": "Cation Radius",
        "de": "Kationenradius",
        "fr": "Rayon des cations",
        "ru": "Катионный радиус",
        "ar": "نصف قطر الكاتيون",
        "zh": "阳离子半径",
        "ku": "Radyoya Cation"
      },
      "conceptB": {
        "tr": "Anyon Yarıçapı",
        "en": "Anion Radius",
        "de": "Anionenradius",
        "fr": "Rayon anionique",
        "ru": "Анион Радиус",
        "ar": "نصف قطر أنيون",
        "zh": "阴离子半径",
        "ku": "Anion Radius"
      },
      "distinction": {
        "tr": "Nötr atom elektron verdiğinde katyon yarıçapı küçülür; elektron aldığında anyon yarıçapı büyür.",
        "en": "When a neutral atom loses electrons, the cation radius becomes smaller; When it gains electrons, the anion radius increases.",
        "de": "Wenn ein neutrales Atom Elektronen verliert, wird der Kationenradius kleiner; Wenn es Elektronen aufnimmt, vergrößert sich der Anionenradius.",
        "fr": "Lorsqu'un atome neutre perd des électrons, le rayon du cation devient plus petit ; Lorsqu'il gagne des électrons, le rayon de l'anion augmente.",
        "ru": "Когда нейтральный атом теряет электроны, радиус катиона становится меньше; Когда он присоединяет электроны, радиус аниона увеличивается.",
        "ar": "عندما تفقد الذرة المحايدة الإلكترونات، يصبح نصف قطر الكاتيون أصغر؛ وعندما تكتسب إلكترونات، يزداد نصف قطر الأنيون.",
        "zh": "当中性原子失去电子时，阳离子半径变小；当它获得电子时，阴离子半径增加。",
        "ku": "Dema ku atomek bêalî elektronan winda dike, tîrêjê kation piçûktir dibe; Dema ku ew elektronan bi dest dixe, radiusa anionê zêde dibe."
      }
    },
    {
      "id": "u02-c08",
      "conceptA": {
        "tr": "Periyot",
        "en": "Period",
        "de": "Periode",
        "fr": "Période",
        "ru": "Период",
        "ar": "الدورة",
        "zh": "周期",
        "ku": "Periyod"
      },
      "conceptB": {
        "tr": "Grup",
        "en": "Group",
        "de": "Gruppe",
        "fr": "Groupe",
        "ru": "Группа",
        "ar": "المجموعة",
        "zh": "族",
        "ku": "Kom"
      },
      "distinction": {
        "tr": "Periyot periyodik tablodaki yatay sıralardır ve katman sayısını verir; grup ise benzer kimyasal özellik gösteren dikey sütunlardır.",
        "en": "A period is a horizontal row in the periodic table indicating the number of electron shells; a group is a vertical column of elements sharing similar chemical properties.",
        "de": "Eine Periode ist eine horizontale Zeile im Periodensystem, die die Schalenanzahl angibt; eine Gruppe ist eine vertikale Spalte mit ähnlichen chemischen Eigenschaften.",
        "fr": "Une période est une rangée horizontale du tableau périodique indiquant le nombre de couches électroniques ; un groupe est une colonne verticale d'éléments ayant des propriétés similaires.",
        "ru": "Период — это горизонтальный ряд в периодической таблице, показывающий число электронных слоев; группа — это вертикальный столбец элементов со схожими свойствами.",
        "ar": "الدورة هي صف أفقي في الجدول الدوري يشير إلى عدد المستويات الإلكترونية؛ المجموعة هي عمود رأسي لعناصر ذات خصائص متشابهة.",
        "zh": "周期是周期表中的横行，表示电子层数；族是周期表中的纵列，表示具有相似化学性质的元素。",
        "ku": "Periyod rêzên asoyî yên di tabloya periyodîk de ne û hejmara çînên elektronan nîşan didin; kom jî stûnên stûnî ne ku xwedî taybetmendiyên kîmyewî yên wekhev in."
      }
    }
  ],
  "sequences": [
    {
      "id": "u02-s01",
      "title": {
        "tr": "Periyodik Eğilimler (Soldan Sağa)",
        "en": "Periodic Trends (Left to Right)",
        "de": "Periodische Trends (von links nach rechts)",
        "fr": "Tendances périodiques (de gauche à droite)",
        "ru": "Периодические тенденции (слева направо)",
        "ar": "الاتجاهات الدورية (من اليسار إلى اليمين)",
        "zh": "周期性趋势（从左到右）",
        "ku": "Trendên Perîyodîk (Çep Ber Bi Rast)"
      },
      "steps": [
        {
          "tr": "Çekirdek yükü artar",
          "en": "Core load increases",
          "de": "Die Kernbelastung steigt",
          "fr": "La charge de base augmente",
          "ru": "Нагрузка на ядро увеличивается",
          "ar": "يزيد الحمل الأساسي",
          "zh": "核心负载增加",
          "ku": "Barkirina bingehîn zêde dibe"
        },
        {
          "tr": "Atom yarıçapı küçülür",
          "en": "Atomic radius decreases",
          "de": "Der Atomradius nimmt ab",
          "fr": "Le rayon atomique diminue",
          "ru": "Атомный радиус уменьшается",
          "ar": "يتناقص نصف القطر الذري",
          "zh": "原子半径减小",
          "ku": "Radyoya atomê kêm dibe"
        },
        {
          "tr": "Elektronegatiflik genellikle artar",
          "en": "Electronegativity usually increases",
          "de": "Normalerweise nimmt die Elektronegativität zu",
          "fr": "L'électronégativité augmente généralement",
          "ru": "Электроотрицательность обычно увеличивается",
          "ar": "عادة ما تزداد السالبية الكهربية",
          "zh": "电负性通常会增加",
          "ku": "Electronegativity bi gelemperî zêde dibe"
        },
        {
          "tr": "İyonlaşma enerjisi genellikle artar",
          "en": "Ionization energy generally increases",
          "de": "Die Ionisierungsenergie nimmt im Allgemeinen zu",
          "fr": "L'énergie d'ionisation augmente généralement",
          "ru": "Энергия ионизации обычно увеличивается",
          "ar": "تزداد طاقة التأين بشكل عام",
          "zh": "电离能普遍增加",
          "ku": "Enerjiya ionîzasyonê bi gelemperî zêde dibe"
        }
      ]
    },
    {
      "id": "u02-s02",
      "title": {
        "tr": "Tarihsel Atom Modelleri",
        "en": "Historical Atomic Models",
        "de": "Historische Atommodelle",
        "fr": "Modèles atomiques historiques",
        "ru": "Исторические атомные модели",
        "ar": "النماذج الذرية التاريخية",
        "zh": "历史原子模型",
        "ku": "Modelên Atomî yên Dîrokî"
      },
      "steps": [
        {
          "tr": "Dalton içi dolu bölünemez küre modeli",
          "en": "Dalton solid indivisible sphere model",
          "de": "Dalton-Modell einer festen, unteilbaren Kugel",
          "fr": "Modèle de sphère indivisible solide de Dalton",
          "ru": "Модель твердой неделимой сферы Дальтона",
          "ar": "نموذج دالتون للكرة الصلبة غير القابلة للتجزئة",
          "zh": "道尔顿固体不可分球模型",
          "ku": "Modela qada yekbûyî ya hişk a Dalton"
        },
        {
          "tr": "Thomson pozitif yük içinde gömülü elektron modeli",
          "en": "Thomson model of electron embedded in positive charge",
          "de": "Thomson-Modell eines in eine positive Ladung eingebetteten Elektrons",
          "fr": "Modèle de Thomson d'électron intégré dans une charge positive",
          "ru": "Модель Томсона электрона, погруженного в положительный заряд",
          "ar": "نموذج طومسون للإلكترون المدمج في الشحنة الموجبة",
          "zh": "嵌入正电荷的电子的汤姆森模型",
          "ku": "Modela Thomsonê ya elektronê ku di nav barek erênî de ye"
        },
        {
          "tr": "Rutherford çekirdekli atom modeli",
          "en": "Rutherford nuclear model of atom",
          "de": "Rutherfords Kernmodell des Atoms",
          "fr": "Modèle nucléaire de Rutherford de l'atome",
          "ru": "Ядерная модель атома Резерфорда",
          "ar": "نموذج رذرفورد النووي للذرة",
          "zh": "卢瑟福原子核模型",
          "ku": "Modela atomê ya navokî ya Rutherford"
        },
        {
          "tr": "Bohr yörüngeli kuantum modeli",
          "en": "Bohr orbital quantum model",
          "de": "Bohr-Orbital-Quantenmodell",
          "fr": "Modèle quantique orbital de Bohr",
          "ru": "Орбитальная квантовая модель Бора",
          "ar": "نموذج بور الكمي المداري",
          "zh": "玻尔轨道量子模型",
          "ku": "Modela quantuma orbîtal a Bohr"
        }
      ]
    },
    {
      "id": "u02-s03",
      "title": {
        "tr": "2. Periyot İyonlaşma Enerjisi Artışı",
        "en": "2nd Period Ionization Energy Increase",
        "de": "Erhöhung der Ionisierungsenergie in der 2. Periode",
        "fr": "Augmentation de l'énergie d'ionisation de la 2e période",
        "ru": "Увеличение энергии ионизации 2-го периода",
        "ar": "زيادة طاقة التأين في الفترة الثانية",
        "zh": "第二周期电离能量增加",
        "ku": "Zêdebûna Enerjiya Îyonîzasyona Serdema 2"
      },
      "steps": [
        {
          "tr": "1A Lityum en düşük IE1 değerindedir",
          "en": "1A Lithium has the lowest IE1 value",
          "de": "1A Lithium hat den niedrigsten IE1-Wert",
          "fr": "1A Lithium a la valeur IE1 la plus basse",
          "ru": "1A Lithium имеет самое низкое значение IE1.",
          "ar": "1A الليثيوم لديه أدنى قيمة IE1",
          "zh": "1A锂电池的IE1值最低",
          "ku": "1A Lithium nirxa IE1 ya herî kêm heye"
        },
        {
          "tr": "2A Berilyum küresel simetriyle 3A yı geçer",
          "en": "2A Beryllium exceeds 3A with spherical symmetry",
          "de": "2A Beryllium übersteigt 3A mit sphärischer Symmetrie",
          "fr": "Le béryllium 2A dépasse 3A avec une symétrie sphérique",
          "ru": "2А Бериллий превосходит 3А со сферической симметрией",
          "ar": "2A البريليوم يتجاوز 3A مع التماثل الكروي",
          "zh": "2A 铍超过 3A 具有球对称性",
          "ku": "2A Beryllium bi simetrîya gewherî ji 3A derbas dibe"
        },
        {
          "tr": "5A Azot küresel simetriyle 6A yı geçer",
          "en": "5A Nitrogen exceeds 6A with spherical symmetry",
          "de": "5A Stickstoff übersteigt 6A bei sphärischer Symmetrie",
          "fr": "L'azote 5A dépasse 6A avec une symétrie sphérique",
          "ru": "5А Азот превышает 6А при сферической симметрии",
          "ar": "5A النيتروجين يتجاوز 6A مع التماثل الكروي",
          "zh": "5A 氮气超过6A 球对称",
          "ku": "5A Nîtrojen bi simetrîya gewherî ji 6A derbas dibe"
        },
        {
          "tr": "8A Neon maksimum kararlılıkla en yüksektir",
          "en": "8A Neon is the highest with maximum stability",
          "de": "8A Neon ist das höchste mit maximaler Stabilität",
          "fr": "8A Neon est le plus élevé avec une stabilité maximale",
          "ru": "8A Neon — самый высокий с максимальной стабильностью.",
          "ar": "8A نيون هو الأعلى مع أقصى قدر من الاستقرار",
          "zh": "8A Neon最高，稳定性最高",
          "ku": "8A Neon bi aramiya herî zêde ya herî bilind e"
        }
      ]
    },
    {
      "id": "u02-s04",
      "title": {
        "tr": "Elektron Uyarılması ve Işıma",
        "en": "Electron Excitation and Radiation",
        "de": "Elektronenanregung und Strahlung",
        "fr": "Excitation électronique et rayonnement",
        "ru": "Электронное возбуждение и излучение",
        "ar": "الإثارة الإلكترونية والإشعاع",
        "zh": "电子激发和辐射",
        "ku": "Radyasyon û Excitation Electron"
      },
      "steps": [
        {
          "tr": "Temel haldeki elektron enerji soğurur",
          "en": "Electron in ground state absorbs energy",
          "de": "Elektron im Grundzustand absorbiert Energie",
          "fr": "L'électron à l'état fondamental absorbe de l'énergie",
          "ru": "Электрон в основном состоянии поглощает энергию",
          "ar": "يمتص الإلكترون في الحالة الأرضية الطاقة",
          "zh": "基态电子吸收能量",
          "ku": "Elektron di rewşa zemînê de enerjiyê digire"
        },
        {
          "tr": "Daha yüksek enerjili yörüngeye fırlar",
          "en": "Launches into higher energy orbit",
          "de": "Startet in eine Umlaufbahn mit höherer Energie",
          "fr": "Se lance sur une orbite à énergie supérieure",
          "ru": "Запуск на более высокую энергетическую орбиту",
          "ar": "ينطلق إلى مدار طاقة أعلى",
          "zh": "发射进入更高能量轨道",
          "ku": "Di dorbera enerjiya bilind de dest pê dike"
        },
        {
          "tr": "Uyarılmış kararsız halde kısa süre kalır",
          "en": "Stays in an excited, unstable state for a short time",
          "de": "Bleibt für kurze Zeit in einem aufgeregten, instabilen Zustand",
          "fr": "Reste dans un état excité et instable pendant une courte période",
          "ru": "Кратковременно пребывает в возбужденном, нестабильном состоянии.",
          "ar": "يبقى في حالة متحمسة وغير مستقرة لفترة قصيرة",
          "zh": "短时间内处于兴奋、不稳定的状态",
          "ku": "Ji bo demek kurt di rewşek heyecan, bêîstîqrar de dimîne"
        },
        {
          "tr": "Foton yayarak temel hale geri döner",
          "en": "Returns to ground state by emitting photons",
          "de": "Kehrt durch die Emission von Photonen in den Grundzustand zurück",
          "fr": "Retourne à l'état fondamental en émettant des photons",
          "ru": "Возвращается в основное состояние путем испускания фотонов",
          "ar": "يعود إلى الحالة الأرضية عن طريق إصدار الفوتونات",
          "zh": "通过发射光子返回基态",
          "ku": "Bi belavkirina fotonan vedigere rewşa erdê"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u02-twin01",
      "stem": {
        "tr": "Baş grup elementi olan X in ardışık iyonlaşma enerjileri (kJ/mol): İE1: 496, İE2: 4562, İE3: 6912 dir. Buna göre X hangi gruptadır?",
        "en": "The consecutive ionization energies (kJ/mol) of the main group element X are: İE1: 496, İE2: 4562, İE3: 6912. Accordingly, in which group is X?",
        "de": "Die aufeinanderfolgenden Ionisierungsenergien (kJ/mol) des Hauptgruppenelements",
        "fr": "Les énergies d'ionisation consécutives (kJ/mol) de l'élément principal du groupe X sont : İE1 : 496, İE2 : 4562, İE3 : 6912. Par conséquent, dans quel groupe se trouve X ?",
        "ru": "Последовательные энергии ионизации (кДж/моль) элемента основной группы X составляют: İE1: 496, İE2: 4562, İE3: 6912. Соответственно, в какой группе находится X?",
        "ar": "طاقات التأين المتتالية (كيلو جول/مول) لعنصر المجموعة الرئيسية X هي: IE1: 496، IE2: 4562، IE3: 6912. وبناءً على ذلك، في أي مجموعة يقع X؟",
        "zh": "主族元素X的连续电离能(kJ/mol)为： ?E1：496，?E2：4562，?E3：6912。因此，X属于哪个基团？",
        "ku": "Enerjiyên îyonîzasyonê yên li pey hev (kJ/mol) yên hêmana koma sereke X ev in: İE1: 496, İE2: 4562, İE3: 6912. Li gorî vê yekê, X di kîjan komê de ye?"
      },
      "options": [
        {
          "tr": "1A",
          "en": "1A",
          "de": "1A",
          "fr": "1A",
          "ru": "1А",
          "ar": "1 أ",
          "zh": "1A",
          "ku": "1A"
        },
        {
          "tr": "2A",
          "en": "2A",
          "de": "2A",
          "fr": "2A",
          "ru": "2А",
          "ar": "2 أ",
          "zh": "2A",
          "ku": "2A"
        },
        {
          "tr": "3A",
          "en": "3A",
          "de": "3A",
          "fr": "3A",
          "ru": "3А",
          "ar": "3 أ",
          "zh": "3A",
          "ku": "3A"
        },
        {
          "tr": "4A",
          "en": "4A",
          "de": "4A",
          "fr": "4A",
          "ru": "4А",
          "ar": "4 أ",
          "zh": "4A",
          "ku": "4A"
        },
        {
          "tr": "8A",
          "en": "8A",
          "de": "8A",
          "fr": "8A",
          "ru": "8А",
          "ar": "8 أ",
          "zh": "8A",
          "ku": "8A"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "İE1 den İE2 ye geçişte yaklaşık 9.2 kat sıçrama vardır (496 -> 4562). Bu durum 1 değerlik elektronu olduğunu ve 1A grubunda bulunduğunu gösterir.",
        "en": "There is approximately a 9.2-fold jump in the transition from İE1 to İE2 (496 -> 4562). This indicates that it has 1 valence electron and is in group 1A.",
        "de": "Beim Übergang von İE1 zu İE2 (496 -> 4562) gibt es einen etwa 9,2-fachen Sprung. Dies zeigt an, dass es 1 Valenzelektron hat und zur Gruppe 1A gehört.",
        "fr": "Il y a un saut d'environ 9,2 fois dans la transition de İE1 à İE2 (496 -> 4562). Cela indique qu’il possède 1 électron de valence et qu’il appartient au groupe 1A.",
        "ru": "При переходе от İE1 к İE2 наблюдается примерно 9,2-кратный скачок (496 -> 4562). Это указывает на то, что он имеет 1 валентный электрон и находится в группе 1А.",
        "ar": "هناك ما يقرب من قفزة 9.2 أضعاف في الانتقال من IES1 إلى IES2 (496 -> 4562). يشير هذا إلى أنه يحتوي على إلكترون تكافؤ واحد ويقع في المجموعة 1A.",
        "zh": "从 ?E1 到 ?E2 的过渡大约有 9.2 倍的跳跃 (496 -> 4562)。这表明它有 1 个价电子并且属于 1A 族。",
        "ku": "Di derbasbûna ji İE1 ber bi İE2 (496 -> 4562) bi qasî 9,2 qat bazdanek heye. Ev nîşan dide ku ew 1 elektronek valence heye û di koma 1A de ye."
      }
    },
    {
      "id": "u02-twin02",
      "stem": {
        "tr": "Periyodik sistemde aynı periyotta yer alan elementler için soldan sağa doğru gidildikçe aşağıdakilerden hangisi genellikle azalır?",
        "en": "For elements in the same period in the periodic table, which of the following generally decreases as you move from left to right?",
        "de": "Welcher der folgenden Werte nimmt für Elemente im gleichen Zeitraum im Periodensystem im Allgemeinen ab, wenn man sich von links nach rechts bewegt?",
        "fr": "Pour les éléments de la même période dans le tableau périodique, lequel des éléments suivants diminue généralement à mesure que vous vous déplacez de gauche à droite ?",
        "ru": "Что из следующего обычно уменьшается при движении слева направо для элементов периодической таблицы Менделеева, находящихся в одном и том же периоде?",
        "ar": "بالنسبة للعناصر الموجودة في نفس الفترة في الجدول الدوري، أي مما يلي يتناقص بشكل عام كلما انتقلت من اليسار إلى اليمين؟",
        "zh": "对于元素周期表中同一周期的元素，下列哪项通常随着从左向右移动而减少？",
        "ku": "Ji bo hêmanên di heman heyamê de di tabloya peryodîk de, dema ku hûn ji çepê ber bi rastê ve diçin, kîjan ji van jêrîn bi gelemperî kêm dibe?"
      },
      "options": [
        {
          "tr": "Atom yarıçapı",
          "en": "Atomic radius",
          "de": "Atomradius",
          "fr": "Rayon atomique",
          "ru": "Атомный радиус",
          "ar": "نصف القطر الذري",
          "zh": "原子半径",
          "ku": "Radyoya atomê"
        },
        {
          "tr": "İyonlaşma enerjisi",
          "en": "Ionization energy",
          "de": "Ionisierungsenergie",
          "fr": "Énergie d'ionisation",
          "ru": "Энергия ионизации",
          "ar": "طاقة التأين",
          "zh": "电离能",
          "ku": "Enerjiya ionîzasyonê"
        },
        {
          "tr": "Elektronegatiflik",
          "en": "Electronegativity",
          "de": "Elektronegativität",
          "fr": "Électronégativité",
          "ru": "Электроотрицательность",
          "ar": "السالبية الكهربية",
          "zh": "电负性",
          "ku": "Electronegativity"
        },
        {
          "tr": "Çekirdek yükü",
          "en": "core load",
          "de": "Kernbelastung",
          "fr": "charge de base",
          "ru": "основная нагрузка",
          "ar": "الحمل الأساسي",
          "zh": "核心负荷",
          "ku": "barkirina bingehîn"
        },
        {
          "tr": "Ametalik aktiflik",
          "en": "Nonmetallic activity",
          "de": "Nichtmetallische Aktivität",
          "fr": "Activité non métallique",
          "ru": "Неметаллическая деятельность",
          "ar": "النشاط غير المعدني",
          "zh": "非金属活动",
          "ku": "Çalakiya nemetalîk"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Soldan sağa çekirdek yükü arttığı için elektronlar daha kuvvetli çekilir ve atom yarıçapı küçülür.",
        "en": "As the nuclear charge increases from left to right, electrons are attracted more strongly and the atomic radius decreases.",
        "de": "Mit zunehmender Kernladung von links nach rechts werden Elektronen stärker angezogen und der Atomradius nimmt ab.",
        "fr": "À mesure que la charge nucléaire augmente de gauche à droite, les électrons sont attirés plus fortement et le rayon atomique diminue.",
        "ru": "По мере увеличения заряда ядра слева направо электроны притягиваются сильнее, а радиус атома уменьшается.",
        "ar": "ومع زيادة الشحنة النووية من اليسار إلى اليمين، تنجذب الإلكترونات بقوة أكبر ويتناقص نصف القطر الذري.",
        "zh": "随着核电荷从左到右增加，电子被更强地吸引，原子半径减小。",
        "ku": "Her ku barê nukleerî ji çepê ber bi rastê ve zêde dibe, elektron bi hêztir dikşîne û tîrêja atomê kêm dibe."
      }
    },
    {
      "id": "u02-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Atom ve Periyodik Sistem konusunu işlerken İzotop Atomlar üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Atom & Periodic System, which statement regarding Isotope Atoms represents the correct answer?",
        "de": "Welche Aussage zu Isotopenatome stellt im Kontext von Atom und Periodensystem die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Atome et Système Périodique, quelle proposition sur Atomes isotopiques constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Атом и периодическая система», какой ответ относительно «Изотопные атомы» является правильным?",
        "ar": "أثناء دراسة موضوع \"الذرة والجدول الدوري\" مخبرياً، أي إجابة بخصوص \"ذرات النظائر\" تمثل الإجابة الصحيحة؟",
        "zh": "在“原子与周期系”实验探究与教学分析中，针对“同位素原子”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Atom û Sîstema Periyodîk\" de, kîjan bersiv derbarê \"Atomên Îzotop\" de rast e?"
      },
      "options": [
        {
          "tr": "İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.",
          "en": "The second ionization energy is always smaller than the first ionization energy.",
          "de": "Die zweite Ionisierungsenergie ist immer kleiner als die erste Ionisierungsenergie.",
          "fr": "La deuxième énergie d'ionisation est toujours inférieure à la première énergie d'ionisation.",
          "ru": "Вторая энергия ионизации всегда меньше первой энергии ионизации.",
          "ar": "طاقة التأين الثانية تكون دائما أصغر من طاقة التأين الأولى.",
          "zh": "第二电离能总是小于第一电离能。",
          "ku": "Enerjiya îyonîzasyona duyemîn her dem ji enerjiya ionîzasyona yekem piçûktir e."
        },
        {
          "tr": "Helyum 8 değerlik elektronuna sahip bir asal gazdır.",
          "en": "Helium is a noble gas with 8 valence electrons.",
          "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
          "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
          "ru": "Гелий — благородный газ с 8 валентными электронами.",
          "ar": "الهيليوم هو غاز نبيل يحتوي على 8 إلكترونات تكافؤ.",
          "zh": "氦是一种具有 8 个价电子的惰性气体。",
          "ku": "Helium gazek esîl e ku 8 elektronên valansê hene."
        },
        {
          "tr": "Bohr atom modeline göre elektronlar çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunur.",
          "en": "According to the Bohr atomic model, electrons are located in certain energy levels (orbitals) around the nucleus.",
          "de": "Nach dem Bohrschen Atommodell befinden sich Elektronen in bestimmten Energieniveaus (Orbitalen) um den Kern.",
          "fr": "Selon le modèle atomique de Bohr, les électrons sont situés à certains niveaux d'énergie (orbitales) autour du noyau.",
          "ru": "Согласно атомной модели Бора, электроны располагаются на определенных энергетических уровнях (орбиталях) вокруг ядра.",
          "ar": "وفقا لنموذج بور الذري، توجد الإلكترونات في مستويات طاقة معينة (المدارات) حول النواة.",
          "zh": "根据玻尔原子模型，电子位于原子核周围的某些能级（轨道）中。",
          "ku": "Li gorî modela atomê ya Bohr, elektron li derdora navokê di hin astên enerjiyê (orbital) de cih digirin."
        },
        {
          "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
          "en": "As anion forms, the number of protons in the nucleus increases.",
          "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
          "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
          "ru": "По мере образования анионов число протонов в ядре увеличивается.",
          "ar": "ومع تشكل الأنيون، يزداد عدد البروتونات في النواة.",
          "zh": "随着阴离子的形成，原子核中的质子数量增加。",
          "ku": "Her ku anyon çêdibe, hejmara protonan di navokê de zêde dibe."
        },
        {
          "tr": "Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.",
          "en": "Alkali metals are abundant in nature as pure metals.",
          "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
          "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
          "ru": "Щелочные металлы широко распространены в природе в виде чистых металлов.",
          "ar": "تتواجد الفلزات القلوية بكثرة في الطبيعة كمعادن نقية.",
          "zh": "碱金属作为纯金属在自然界中含量丰富。",
          "ku": "Metalên alkalî di xwezayê de wekî metalên pak pir in."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Bohr atom modeline göre elektronlar çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"According to the Bohr atomic model, electrons are located in certain energy levels (orbitals) around the nucleus.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Nach dem Bohrschen Atommodell befinden sich Elektronen in bestimmten Energieniveaus (Orbitalen) um den Kern.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Selon le modèle atomique de Bohr, les électrons sont situés à certains niveaux d'énergie (orbitales) autour du noyau.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Согласно атомной модели Бора, электроны располагаются на определенных энергетических уровнях (орбиталях) вокруг ядра.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وفقا لنموذج بور الذري، توجد الإلكترونات في مستويات طاقة معينة (المدارات) حول النواة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“根据玻尔原子模型，电子位于原子核周围的某些能级（轨道）中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Li gorî modela atomê ya Bohr, elektron li derdora navokê di hin astên enerjiyê (orbital) de cih digirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin04",
      "stem": {
        "tr": "Kimya dersinde Atom ve Periyodik Sistem ünitesi incelenirken İzobar Atomlar ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Atom & Periodic System, which of the following propositions concerning Isobar Atoms is a verified scientific fact?",
        "de": "Bei der Untersuchung von Atom und Periodensystem: Welche Behauptung bezüglich Isobare Atome entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Atome et Système Périodique, laquelle des affirmations suivantes concernant Atomes isobares est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Атом и периодическая система», какое из следующих суждений о «Изобарные атомы» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الذرة والجدول الدوري\"، أي من الأحكام التالية المتعلقة بـ \"ذرات الأيزوبار\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“原子与周期系”核心规律时，下列关于“等压原子”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Atom û Sîstema Periyodîk\" tê kirin, kîjan daraza li ser \"Atomên Îsobar\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.",
          "en": "Isoelectronic particles have exactly the same desire to undergo chemical reactions.",
          "de": "Isoelektronische Teilchen haben genau den gleichen Wunsch, chemische Reaktionen einzugehen.",
          "fr": "Les particules isoélectroniques ont exactement le même désir de subir des réactions chimiques.",
          "ru": "Изоэлектронные частицы имеют точно такое же желание вступать в химические реакции.",
          "ar": "تتمتع الجسيمات المتساوية الإلكترون بنفس الرغبة تمامًا في الخضوع للتفاعلات الكيميائية.",
          "zh": "等电子粒子具有完全相同的进行化学反应的愿望。",
          "ku": "Parçeyên îzoelektronîk tam heman daxwaziya reaksiyonên kîmyewî hene."
        },
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi daima 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is always greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe immer größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est toujours supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А всегда больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A دائمًا أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "在同一时期，3A基团的电离能总是大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A her gav ji ya koma 2A mezintir e."
        },
        {
          "tr": "Moseley periyodik cetveli nötron sayılarına göre dizmiştir.",
          "en": "Moseley arranged the periodic table according to the number of neutrons.",
          "de": "Moseley ordnete das Periodensystem nach der Anzahl der Neutronen.",
          "fr": "Moseley a organisé le tableau périodique en fonction du nombre de neutrons.",
          "ru": "Мозли расположил таблицу Менделеева по числу нейтронов.",
          "ar": "قام موزلي بترتيب الجدول الدوري حسب عدد النيوترونات.",
          "zh": "莫斯利根据中子数排列了元素周期表。",
          "ku": "Moseley tabloya perîyodîk li gorî hejmara notronan rêz kir."
        },
        {
          "tr": "İzotop atomların proton sayıları aynı, nötron sayıları ve kütle numaraları farklıdır.",
          "en": "Isotope atoms have the same number of protons, but different numbers of neutrons and mass numbers.",
          "de": "Isotopenatome haben die gleiche Anzahl an Protonen, aber unterschiedliche Neutronenzahlen und Massenzahlen.",
          "fr": "Les atomes isotopiques ont le même nombre de protons, mais des nombres de neutrons et des nombres de masse différents.",
          "ru": "Атомы изотопов имеют одинаковое количество протонов, но разное количество нейтронов и массовые числа.",
          "ar": "تحتوي ذرات النظائر على نفس عدد البروتونات، لكن أعداد النيوترونات والأعداد الكتلية مختلفة.",
          "zh": "同位素原子具有相同数量的质子，但具有不同数量的中子和质量数。",
          "ku": "Di atomên îzotopan de heman hejmar proton hene, lê hejmarên neutron û girseyên cûda hene."
        },
        {
          "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
          "en": "It forms +1 and +2 stable ions in magnesium compounds.",
          "de": "Es bildet +1 und +2 stabile Ionen in Magnesiumverbindungen.",
          "fr": "Il forme des ions stables +1 et +2 dans les composés de magnésium.",
          "ru": "Он образует +1 и +2 стабильные ионы в соединениях магния.",
          "ar": "وهو يشكل +1 و +2 أيونات مستقرة في مركبات المغنيسيوم.",
          "zh": "它在镁化合物中形成+1和+2稳定离子。",
          "ku": "Di pêkhateyên magnesiumê de +1 û +2 îyonên stabîl çêdike."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"İzotop atomların proton sayıları aynı, nötron sayıları ve kütle numaraları farklıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Isotope atoms have the same number of protons, but different numbers of neutrons and mass numbers.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Isotopenatome haben die gleiche Anzahl an Protonen, aber unterschiedliche Neutronenzahlen und Massenzahlen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les atomes isotopiques ont le même nombre de protons, mais des nombres de neutrons et des nombres de masse différents.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Атомы изотопов имеют одинаковое количество протонов, но разное количество нейтронов и массовые числа.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تحتوي ذرات النظائر على نفس عدد البروتونات، لكن أعداد النيوترونات والأعداد الكتلية مختلفة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“同位素原子具有相同数量的质子，但具有不同数量的中子和质量数。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di atomên îzotopan de heman hejmar proton hene, lê hejmarên neutron û girseyên cûda hene.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Atom ve Periyodik Sistem konusundaki temel kimyasal kurallar çerçevesinde Metaller kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes metals within the fundamental principles of Atom & Periodic System?",
        "de": "Welche Aussage beschreibt das Konzept Metalle im Rahmen von Atom und Periodensystem am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement métaux selon les lois de Atome et Système Périodique?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «металлы» в рамках темы «Атом и периодическая система»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"المعادن\" ضمن قواعد \"الذرة والجدول الدوري\"؟",
        "zh": "根据“原子与周期系”的基本化学原理，下列哪项阐述能最准确地界定“金属”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"metals\" di çarçoveya prensîbên \"Atom û Sîstema Periyodîk\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Fransiyum elektronegatifliği en yüksek ametaldir.",
          "en": "Francium is the nonmetal with the highest electronegativity.",
          "de": "Francium ist das Nichtmetall mit der höchsten Elektronegativität.",
          "fr": "Le francium est le non-métal ayant la plus grande électronégativité.",
          "ru": "Франций — неметалл с самой высокой электроотрицательностью.",
          "ar": "الفرانسيوم هو اللافلز ذو أعلى السالبية الكهربية.",
          "zh": "钫是电负性最高的非金属。",
          "ku": "Fransiyûm nemetal e ku xwedî elektronegatîfiya herî bilind e."
        },
        {
          "tr": "Katyon oluştuğunda çekirdeğin çekim gücü artar.",
          "en": "When a cation is formed, the gravitational force of the nucleus increases.",
          "de": "Bei der Bildung eines Kations erhöht sich die Gravitationskraft des Kerns.",
          "fr": "Lorsqu’un cation se forme, la force gravitationnelle du noyau augmente.",
          "ru": "При образовании катиона гравитационная сила ядра увеличивается.",
          "ar": "عندما يتكون الكاتيون، تزداد قوة الجاذبية للنواة.",
          "zh": "当形成阳离子时，原子核的引力增加。",
          "ku": "Dema ku katyonek çêbibe, hêza gravîtasyonê ya navokê zêde dibe."
        },
        {
          "tr": "Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.",
          "en": "It can reach +7 oxidation state in fluorine compounds.",
          "de": "In Fluorverbindungen kann es eine Oxidationsstufe von +7 erreichen.",
          "fr": "Il peut atteindre un état d’oxydation de +7 dans les composés fluorés.",
          "ru": "В соединениях фтора он может достигать степени окисления +7.",
          "ar": "يمكن أن يصل إلى حالة الأكسدة +7 في مركبات الفلور.",
          "zh": "在氟化合物中可以达到+7氧化态。",
          "ku": "Ew dikare di pêkhateyên florînê de bigihîje rewşa oksîdasyonê +7."
        },
        {
          "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.",
          "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
          "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
          "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
          "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
          "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
          "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
          "ku": "Rutherford bi matematîkî îsbat kir ku elektron di dorhêlên dorhêl ên sabît de dizivirin."
        },
        {
          "tr": "Periyodik sistemde soldan sağa doğru gidildikçe genellikle atom yarıçapı küçülür, elektronegatiflik artar.",
          "en": "As you move from left to right in the periodic table, atomic radius generally decreases and electronegativity increases.",
          "de": "Wenn Sie sich im Periodensystem von links nach rechts bewegen, nimmt der Atomradius im Allgemeinen ab und die Elektronegativität zu.",
          "fr": "À mesure que vous vous déplacez de gauche à droite dans le tableau périodique, le rayon atomique diminue généralement et l’électronégativité augmente.",
          "ru": "При движении слева направо по таблице Менделеева радиус атома обычно уменьшается, а электроотрицательность увеличивается.",
          "ar": "أثناء انتقالك من اليسار إلى اليمين في الجدول الدوري، يتناقص نصف القطر الذري عمومًا وتزداد السالبية الكهربية.",
          "zh": "当您在元素周期表中从左向右移动时，原子半径通常会减小，电负性会增加。",
          "ku": "Her ku hûn di tabloya perîyodîk de ji çepê ber bi rastê ve diçin, tîrêjê atomê bi gelemperî kêm dibe û elektronegatîv zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Periyodik sistemde soldan sağa doğru gidildikçe genellikle atom yarıçapı küçülür, elektronegatiflik artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As you move from left to right in the periodic table, atomic radius generally decreases and electronegativity increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Sie sich im Periodensystem von links nach rechts bewegen, nimmt der Atomradius im Allgemeinen ab und die Elektronegativität zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que vous vous déplacez de gauche à droite dans le tableau périodique, le rayon atomique diminue généralement et l’électronégativité augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При движении слева направо по таблице Менделеева радиус атома обычно уменьшается, а электроотрицательность увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"أثناء انتقالك من اليسار إلى اليمين في الجدول الدوري، يتناقص نصف القطر الذري عمومًا وتزداد السالبية الكهربية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当您在元素周期表中从左向右移动时，原子半径通常会减小，电负性会增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku hûn di tabloya perîyodîk de ji çepê ber bi rastê ve diçin, tîrêjê atomê bi gelemperî kêm dibe û elektronegatîv zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Atom ve Periyodik Sistem sorularında karşılaşılan Elektronegatiflik konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Atom & Periodic System, which assertion regarding Electronegativity is correct?",
        "de": "Welche Feststellung bezüglich Elektronegativität ist nach den chemischen Gesetzmäßigkeiten von Atom und Periodensystem richtig?",
        "fr": "Dans les épreuves universitaires portant sur Atome et Système Périodique, quelle affirmation concernant Électronégativité est correcte?",
        "ru": "В экзаменационных заданиях по теме «Атом и периодическая система», какое положение относительно «Электроотрицательность» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الذرة والجدول الدوري\"، أي حكم متعلق بـ \"السالبية الكهربية\" يعتبر صحيحاً؟",
        "zh": "在高考“原子与周期系”经典考题中，下列有关“电负性”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Atom û Sîstema Periyodîk\" de, kîjan daraza li ser \"Electronegativity\" rast e?"
      },
      "options": [
        {
          "tr": "Ardışık iyonlaşma enerjisinde 3.5-4 kattan büyük sıçrama değerlik elektron sayısını verir.",
          "en": "A jump of more than 3.5-4 times in successive ionization energy gives the number of valence electrons.",
          "de": "Ein Sprung der aufeinanderfolgenden Ionisierungsenergie um mehr als das 3,5- bis 4-fache ergibt die Anzahl der Valenzelektronen.",
          "fr": "Un saut de plus de 3,5 à 4 fois dans l'énergie d'ionisation successive donne le nombre d'électrons de valence.",
          "ru": "Скачок последовательной энергии ионизации более чем в 3,5-4 раза дает число валентных электронов.",
          "ar": "قفزة أكثر من 3.5-4 مرات في طاقة التأين المتعاقبة تعطي عدد إلكترونات التكافؤ.",
          "zh": "连续电离能跳跃超过 3.5-4 倍即可得出价电子数。",
          "ku": "Di enerjiya ionîzasyonê ya li pey hev de ji 3,5-4 qatan zêdetir ketina jimareya elektronên valence dide."
        },
        {
          "tr": "Helyum 8 değerlik elektronuna sahip bir asal gazdır.",
          "en": "Helium is a noble gas with 8 valence electrons.",
          "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
          "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
          "ru": "Гелий — благородный газ с 8 валентными электронами.",
          "ar": "الهيليوم هو غاز نبيل يحتوي على 8 إلكترونات تكافؤ.",
          "zh": "氦是一种具有 8 个价电子的惰性气体。",
          "ku": "Helium gazek esîl e ku 8 elektronên valansê hene."
        },
        {
          "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
          "en": "As anion forms, the number of protons in the nucleus increases.",
          "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
          "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
          "ru": "По мере образования анионов число протонов в ядре увеличивается.",
          "ar": "ومع تشكل الأنيون، يزداد عدد البروتونات في النواة.",
          "zh": "随着阴离子的形成，原子核中的质子数量增加。",
          "ku": "Her ku anyon çêdibe, hejmara protonan di navokê de zêde dibe."
        },
        {
          "tr": "Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.",
          "en": "Alkali metals are abundant in nature as pure metals.",
          "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
          "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
          "ru": "Щелочные металлы широко распространены в природе в виде чистых металлов.",
          "ar": "تتواجد الفلزات القلوية بكثرة في الطبيعة كمعادن نقية.",
          "zh": "碱金属作为纯金属在自然界中含量丰富。",
          "ku": "Metalên alkalî di xwezayê de wekî metalên pak pir in."
        },
        {
          "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
          "en": "Thomson proved that there are neutrons in the nucleus.",
          "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
          "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
          "ru": "Томсон доказал, что в ядре есть нейтроны.",
          "ar": "أثبت طومسون أن هناك نيوترونات في النواة.",
          "zh": "汤姆森证明了原子核中存在中子。",
          "ku": "Thomson îspat kir ku di navokê de neutron hene."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ardışık iyonlaşma enerjisinde 3.5-4 kattan büyük sıçrama değerlik elektron sayısını verir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"A jump of more than 3.5-4 times in successive ionization energy gives the number of valence electrons.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Sprung der aufeinanderfolgenden Ionisierungsenergie um mehr als das 3,5- bis 4-fache ergibt die Anzahl der Valenzelektronen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un saut de plus de 3,5 à 4 fois dans l'énergie d'ionisation successive donne le nombre d'électrons de valence.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Скачок последовательной энергии ионизации более чем в 3,5-4 раза дает число валентных электронов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قفزة أكثر من 3.5-4 مرات في طاقة التأين المتعاقبة تعطي عدد إلكترونات التكافؤ.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“连续电离能跳跃超过 3.5-4 倍即可得出价电子数。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di enerjiya ionîzasyonê ya li pey hev de ji 3,5-4 qatan zêdetir ketina jimareya elektronên valence dide.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin07",
      "stem": {
        "tr": "Aşağıda Atom ve Periyodik Sistem ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Katyon Yarıçapı ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Atom & Periodic System, which statement about Cation Radius is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Atom und Periodensystem: Welche Aussage über Kationenradius ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Atome et Système Périodique, quelle affirmation relative à Rayon des cations est exacte?",
        "ru": "На основе фундаментальных положений темы «Атом и периодическая система», какое суждение о «Катионный радиус» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الذرة والجدول الدوري\"، أي عبارة حول \"نصف قطر الكاتيون\" صحيحة؟",
        "zh": "基于“原子与周期系”的基础化学知识体系，下列关于“阳离子半径”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Atom û Sîstema Periyodîk\", kîjan gotin derbarê \"Radyoya Cation\" de rast e?"
      },
      "options": [
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi daima 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is always greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe immer größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est toujours supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А всегда больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A دائمًا أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "在同一时期，3A基团的电离能总是大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A her gav ji ya koma 2A mezintir e."
        },
        {
          "tr": "İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, proton sayıları farklıdır.",
          "en": "The number of electrons and arrangements of isoelectronic particles are the same, but the number of protons is different.",
          "de": "Die Anzahl der Elektronen und die Anordnung isoelektronischer Teilchen sind gleich, die Anzahl der Protonen ist jedoch unterschiedlich.",
          "fr": "Le nombre d’électrons et la disposition des particules isoélectroniques sont les mêmes, mais le nombre de protons est différent.",
          "ru": "Число электронов и расположение изоэлектронных частиц одинаково, но число протонов различно.",
          "ar": "عدد الإلكترونات وترتيبات الجسيمات متساوية الإلكترون هي نفسها، لكن عدد البروتونات مختلف.",
          "zh": "等电子粒子的电子数和排列相同，但质子数不同。",
          "ku": "Hejmara elektronan û rêzikên pariyên îzoelektronîk yek in, lê hejmara protonan cuda ye."
        },
        {
          "tr": "Moseley periyodik cetveli nötron sayılarına göre dizmiştir.",
          "en": "Moseley arranged the periodic table according to the number of neutrons.",
          "de": "Moseley ordnete das Periodensystem nach der Anzahl der Neutronen.",
          "fr": "Moseley a organisé le tableau périodique en fonction du nombre de neutrons.",
          "ru": "Мозли расположил таблицу Менделеева по числу нейтронов.",
          "ar": "قام موزلي بترتيب الجدول الدوري حسب عدد النيوترونات.",
          "zh": "莫斯利根据中子数排列了元素周期表。",
          "ku": "Moseley tabloya perîyodîk li gorî hejmara notronan rêz kir."
        },
        {
          "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
          "en": "It forms +1 and +2 stable ions in magnesium compounds.",
          "de": "Es bildet +1 und +2 stabile Ionen in Magnesiumverbindungen.",
          "fr": "Il forme des ions stables +1 et +2 dans les composés de magnésium.",
          "ru": "Он образует +1 и +2 стабильные ионы в соединениях магния.",
          "ar": "وهو يشكل +1 و +2 أيونات مستقرة في مركبات المغنيسيوم.",
          "zh": "它在镁化合物中形成+1和+2稳定离子。",
          "ku": "Di pêkhateyên magnesiumê de +1 û +2 îyonên stabîl çêdike."
        },
        {
          "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
          "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
          "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
          "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
          "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
          "ar": "يوضح نموذج بور طيف الذرات المتعددة الإلكترونات بشكل كامل.",
          "zh": "玻尔模型充分解释了多电子原子的光谱。",
          "ku": "Modela Bohr bi tevahî spektruma atomên pir-elektronî rave kir."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, proton sayıları farklıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The number of electrons and arrangements of isoelectronic particles are the same, but the number of protons is different.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Anzahl der Elektronen und die Anordnung isoelektronischer Teilchen sind gleich, die Anzahl der Protonen ist jedoch unterschiedlich.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le nombre d’électrons et la disposition des particules isoélectroniques sont les mêmes, mais le nombre de protons est différent.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Число электронов и расположение изоэлектронных частиц одинаково, но число протонов различно.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عدد الإلكترونات وترتيبات الجسيمات متساوية الإلكترون هي نفسها، لكن عدد البروتونات مختلف.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“等电子粒子的电子数和排列相同，但质子数不同。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hejmara elektronan û rêzikên pariyên îzoelektronîk yek in, lê hejmara protonan cuda ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin08",
      "stem": {
        "tr": "Atom ve Periyodik Sistem konusu kapsamında Periyot ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Atom & Periodic System, which of the following findings regarding Period is scientifically verified?",
        "de": "Im Rahmen der Einheit Atom und Periodensystem: Welcher der folgenden Befunde zu Periode ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Atome et Système Périodique, laquelle des constatations suivantes concernant Période est scientifiquement vérifiée?",
        "ru": "В контексте темы «Атом и периодическая система», какой из следующих выводов относительно «Период» научно подтверждён?",
        "ar": "في سياق موضوع \"الذرة والجدول الدوري\"، أي من النتائج التالية المتعلقة بـ \"الدورة\" مثبتة علمياً؟",
        "zh": "在“原子与周期系”主题范畴内，下列关于“周期”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Atom û Sîstema Periyodîk\" de, kîjan ji van encamên li ser \"Periyod\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Katyon oluştuğunda çekirdeğin çekim gücü artar.",
          "en": "When a cation is formed, the gravitational force of the nucleus increases.",
          "de": "Bei der Bildung eines Kations erhöht sich die Gravitationskraft des Kerns.",
          "fr": "Lorsqu’un cation se forme, la force gravitationnelle du noyau augmente.",
          "ru": "При образовании катиона гравитационная сила ядра увеличивается.",
          "ar": "عندما يتكون الكاتيون، تزداد قوة الجاذبية للنواة.",
          "zh": "当形成阳离子时，原子核的引力增加。",
          "ku": "Dema ku katyonek çêbibe, hêza gravîtasyonê ya navokê zêde dibe."
        },
        {
          "tr": "Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.",
          "en": "It can reach +7 oxidation state in fluorine compounds.",
          "de": "In Fluorverbindungen kann es eine Oxidationsstufe von +7 erreichen.",
          "fr": "Il peut atteindre un état d’oxydation de +7 dans les composés fluorés.",
          "ru": "В соединениях фтора он может достигать степени окисления +7.",
          "ar": "يمكن أن يصل إلى حالة الأكسدة +7 في مركبات الفلور.",
          "zh": "在氟化合物中可以达到+7氧化态。",
          "ku": "Ew dikare di pêkhateyên florînê de bigihîje rewşa oksîdasyonê +7."
        },
        {
          "tr": "Flor periyodik sistemin elektronegatifliği en yüksek elementidir (4.0 kabul edilir).",
          "en": "Fluorine is the element with the highest electronegativity in the periodic system (accepted as 4.0).",
          "de": "Fluor ist das Element mit der höchsten Elektronegativität im Periodensystem (akzeptiert als 4,0).",
          "fr": "Le fluor est l'élément ayant l'électronégativité la plus élevée dans le système périodique (accepté comme 4,0).",
          "ru": "Фтор — элемент с самой высокой электроотрицательностью в периодической системе (принимается за 4,0).",
          "ar": "الفلور هو العنصر ذو أعلى سالبية كهربية في النظام الدوري (مقبول بـ 4.0).",
          "zh": "氟是元素周期表中电负性最高的元素（公认为4.0）。",
          "ku": "Florîn di pergala perîyodîk de (wekî 4.0 tê qebûlkirin) elementa ku herî zêde elektronegatîv e."
        },
        {
          "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.",
          "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
          "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
          "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
          "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
          "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
          "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
          "ku": "Rutherford bi matematîkî îsbat kir ku elektron di dorhêlên dorhêl ên sabît de dizivirin."
        },
        {
          "tr": "İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.",
          "en": "The chemical properties of isotope atoms are completely different from each other.",
          "de": "Die chemischen Eigenschaften der Isotopenatome sind völlig unterschiedlich.",
          "fr": "Les propriétés chimiques des atomes isotopiques sont complètement différentes les unes des autres.",
          "ru": "Химические свойства атомов изотопов совершенно отличаются друг от друга.",
          "ar": "تختلف الخصائص الكيميائية لذرات النظائر تمامًا عن بعضها البعض.",
          "zh": "同位素原子的化学性质彼此完全不同。",
          "ku": "Taybetmendiyên kîmyayî yên atomên îzotopan bi tevahî ji hev cuda ne."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Flor periyodik sistemin elektronegatifliği en yüksek elementidir (4.0 kabul edilir).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Fluorine is the element with the highest electronegativity in the periodic system (accepted as 4.0).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Fluor ist das Element mit der höchsten Elektronegativität im Periodensystem (akzeptiert als 4,0).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le fluor est l'élément ayant l'électronégativité la plus élevée dans le système périodique (accepté comme 4,0).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Фтор — элемент с самой высокой электроотрицательностью в периодической системе (принимается за 4,0).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الفلور هو العنصر ذو أعلى سالبية كهربية في النظام الدوري (مقبول بـ 4.0).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“氟是元素周期表中电负性最高的元素（公认为4.0）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Florîn di pergala perîyodîk de (wekî 4.0 tê qebûlkirin) elementa ku herî zêde elektronegatîv e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin09",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Atom ve Periyodik Sistem ünitesinde ele alınan İzotop hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Atom & Periodic System, which statement about isotope is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Atom und Periodensystem: Welche Aussage über Isotop ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Atome et Système Périodique, quelle affirmation relative à isotope est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Атом и периодическая система», какое утверждение о «изотоп» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الذرة والجدول الدوري\"، أي عبارة حول \"النظائر\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“原子与周期系”单元中关于“同位素”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Atom û Sîstema Periyodîk\", kîjan gotin li ser \"îzotop\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
          "en": "As anion forms, the number of protons in the nucleus increases.",
          "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
          "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
          "ru": "По мере образования анионов число протонов в ядре увеличивается.",
          "ar": "ومع تشكل الأنيون، يزداد عدد البروتونات في النواة.",
          "zh": "随着阴离子的形成，原子核中的质子数量增加。",
          "ku": "Her ku anyon çêdibe, hejmara protonan di navokê de zêde dibe."
        },
        {
          "tr": "Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.",
          "en": "Alkali metals are abundant in nature as pure metals.",
          "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
          "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
          "ru": "Щелочные металлы широко распространены в природе в виде чистых металлов.",
          "ar": "تتواجد الفلزات القلوية بكثرة في الطبيعة كمعادن نقية.",
          "zh": "碱金属作为纯金属在自然界中含量丰富。",
          "ku": "Metalên alkalî di xwezayê de wekî metalên pak pir in."
        },
        {
          "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
          "en": "Thomson proved that there are neutrons in the nucleus.",
          "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
          "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
          "ru": "Томсон доказал, что в ядре есть нейтроны.",
          "ar": "أثبت طومسون أن هناك نيوترونات في النواة.",
          "zh": "汤姆森证明了原子核中存在中子。",
          "ku": "Thomson îspat kir ku di navokê de neutron hene."
        },
        {
          "tr": "Soy gazlar kararlı oktet/dublet yapısına sahip olduklarından elektron ilgisi ihmal edilecek kadar düşüktür.",
          "en": "Since noble gases have a stable octet/duplex structure, their electron affinity is negligibly low.",
          "de": "Da Edelgase eine stabile Oktett-/Duplexstruktur haben, ist ihre Elektronenaffinität vernachlässigbar gering.",
          "fr": "Étant donné que les gaz rares ont une structure octet/duplex stable, leur affinité électronique est négligeable.",
          "ru": "Поскольку благородные газы имеют стабильную октетно-дуплексную структуру, их сродство к электрону пренебрежимо мало.",
          "ar": "نظرًا لأن الغازات النبيلة لها بنية ثمانية/ثنائية مستقرة، فإن تقاربها الإلكتروني منخفض بشكل لا يذكر.",
          "zh": "由于稀有气体具有稳定的八位组/双链体结构，因此它们的电子亲和力低得可以忽略不计。",
          "ku": "Ji ber ku gazên hêja xwedan avahiyek oktet/dupleks a stabîl in, girêdana wan a elektron pir kêm e."
        },
        {
          "tr": "Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi daima düzenli artar.",
          "en": "Ionization energy always increases steadily as you move from left to right in the same period.",
          "de": "Die Ionisierungsenergie nimmt immer stetig zu, wenn man sich im gleichen Zeitraum von links nach rechts bewegt.",
          "fr": "L'énergie d'ionisation augmente toujours régulièrement à mesure que vous vous déplacez de gauche à droite au cours de la même période.",
          "ru": "Энергия ионизации всегда неуклонно возрастает по мере движения слева направо за один и тот же период.",
          "ar": "تزداد طاقة التأين دائمًا بشكل مطرد أثناء انتقالك من اليسار إلى اليمين في نفس الفترة.",
          "zh": "当您在同一时间段内从左向右移动时，电离能始终稳定增加。",
          "ku": "Dema ku hûn di heman heyamê de ji çepê ber bi rastê ve diçin, enerjiya ionîzasyonê her gav bi domdarî zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Soy gazlar kararlı oktet/dublet yapısına sahip olduklarından elektron ilgisi ihmal edilecek kadar düşüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Since noble gases have a stable octet/duplex structure, their electron affinity is negligibly low.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Da Edelgase eine stabile Oktett-/Duplexstruktur haben, ist ihre Elektronenaffinität vernachlässigbar gering.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Étant donné que les gaz rares ont une structure octet/duplex stable, leur affinité électronique est négligeable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку благородные газы имеют стабильную октетно-дуплексную структуру, их сродство к электрону пренебрежимо мало.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نظرًا لأن الغازات النبيلة لها بنية ثمانية/ثنائية مستقرة، فإن تقاربها الإلكتروني منخفض بشكل لا يذكر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于稀有气体具有稳定的八位组/双链体结构，因此它们的电子亲和力低得可以忽略不计。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber ku gazên hêja xwedan avahiyek oktet/dupleks a stabîl in, girêdana wan a elektron pir kêm e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Atom ve Periyodik Sistem konusunu işlerken İyonlaşma Enerjisi üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Atom & Periodic System, which statement regarding Ionization Energy represents the correct answer?",
        "de": "Welche Aussage zu Ionisierungsenergie stellt im Kontext von Atom und Periodensystem die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Atome et Système Périodique, quelle proposition sur Énergie d'ionisation constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Атом и периодическая система», какой ответ относительно «Энергия ионизации» является правильным?",
        "ar": "أثناء دراسة موضوع \"الذرة والجدول الدوري\" مخبرياً، أي إجابة بخصوص \"طاقة التأين\" تمثل الإجابة الصحيحة؟",
        "zh": "在“原子与周期系”实验探究与教学分析中，针对“电离能”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Atom û Sîstema Periyodîk\" de, kîjan bersiv derbarê \"Ionization Energy\" de rast e?"
      },
      "options": [
        {
          "tr": "Moseley periyodik cetveli nötron sayılarına göre dizmiştir.",
          "en": "Moseley arranged the periodic table according to the number of neutrons.",
          "de": "Moseley ordnete das Periodensystem nach der Anzahl der Neutronen.",
          "fr": "Moseley a organisé le tableau périodique en fonction du nombre de neutrons.",
          "ru": "Мозли расположил таблицу Менделеева по числу нейтронов.",
          "ar": "قام موزلي بترتيب الجدول الدوري حسب عدد النيوترونات.",
          "zh": "莫斯利根据中子数排列了元素周期表。",
          "ku": "Moseley tabloya perîyodîk li gorî hejmara notronan rêz kir."
        },
        {
          "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
          "en": "It forms +1 and +2 stable ions in magnesium compounds.",
          "de": "Es bildet +1 und +2 stabile Ionen in Magnesiumverbindungen.",
          "fr": "Il forme des ions stables +1 et +2 dans les composés de magnésium.",
          "ru": "Он образует +1 и +2 стабильные ионы в соединениях магния.",
          "ar": "وهو يشكل +1 و +2 أيونات مستقرة في مركبات المغنيسيوم.",
          "zh": "它在镁化合物中形成+1和+2稳定离子。",
          "ku": "Di pêkhateyên magnesiumê de +1 û +2 îyonên stabîl çêdike."
        },
        {
          "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
          "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
          "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
          "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
          "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
          "ar": "يوضح نموذج بور طيف الذرات المتعددة الإلكترونات بشكل كامل.",
          "zh": "玻尔模型充分解释了多电子原子的光谱。",
          "ku": "Modela Bohr bi tevahî spektruma atomên pir-elektronî rave kir."
        },
        {
          "tr": "İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.",
          "en": "The second ionization energy is always smaller than the first ionization energy.",
          "de": "Die zweite Ionisierungsenergie ist immer kleiner als die erste Ionisierungsenergie.",
          "fr": "La deuxième énergie d'ionisation est toujours inférieure à la première énergie d'ionisation.",
          "ru": "Вторая энергия ионизации всегда меньше первой энергии ионизации.",
          "ar": "طاقة التأين الثانية تكون دائما أصغر من طاقة التأين الأولى.",
          "zh": "第二电离能总是小于第一电离能。",
          "ku": "Enerjiya îyonîzasyona duyemîn her dem ji enerjiya ionîzasyona yekem piçûktir e."
        },
        {
          "tr": "Bir periyotta iyonlaşma enerjisi sıralamasında 2A ve 5A küresel simetriden dolayı 3A ve 6A dan büyüktür.",
          "en": "In the order of ionization energy in a period, 2A and 5A are greater than 3A and 6A due to spherical symmetry.",
          "de": "In der Reihenfolge der Ionisierungsenergie in einer Periode sind 2A und 5A aufgrund der Kugelsymmetrie größer als 3A und 6A.",
          "fr": "Dans l'ordre de l'énergie d'ionisation sur une période, 2A et 5A sont supérieurs à 3A et 6A en raison de la symétrie sphérique.",
          "ru": "В порядке энергии ионизации за период 2А и 5А больше, чем 3А и 6А из-за сферической симметрии.",
          "ar": "في ترتيب طاقة التأين في الفترة، 2A و5A أكبر من 3A و6A بسبب التناظر الكروي.",
          "zh": "在一个周期内的电离能顺序中，由于球对称性，2A和5A大于3A和6A。",
          "ku": "Di rêza enerjiya iyonîzasyonê de di heyamekê de, 2A û 5A ji 3A û 6A mezintir in ji ber simetrîya ferîkî."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Bir periyotta iyonlaşma enerjisi sıralamasında 2A ve 5A küresel simetriden dolayı 3A ve 6A dan büyüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the order of ionization energy in a period, 2A and 5A are greater than 3A and 6A due to spherical symmetry.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In der Reihenfolge der Ionisierungsenergie in einer Periode sind 2A und 5A aufgrund der Kugelsymmetrie größer als 3A und 6A.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans l'ordre de l'énergie d'ionisation sur une période, 2A et 5A sont supérieurs à 3A et 6A en raison de la symétrie sphérique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В порядке энергии ионизации за период 2А и 5А больше, чем 3А и 6А из-за сферической симметрии.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في ترتيب طاقة التأين في الفترة، 2A و5A أكبر من 3A و6A بسبب التناظر الكروي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在一个周期内的电离能顺序中，由于球对称性，2A和5A大于3A和6A。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di rêza enerjiya iyonîzasyonê de di heyamekê de, 2A û 5A ji 3A û 6A mezintir in ji ber simetrîya ferîkî.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin11",
      "stem": {
        "tr": "Kimya dersinde Atom ve Periyodik Sistem ünitesi incelenirken İzotop Atomlar ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Atom & Periodic System, which of the following propositions concerning Isotope Atoms is a verified scientific fact?",
        "de": "Bei der Untersuchung von Atom und Periodensystem: Welche Behauptung bezüglich Isotopenatome entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Atome et Système Périodique, laquelle des affirmations suivantes concernant Atomes isotopiques est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Атом и периодическая система», какое из следующих суждений о «Изотопные атомы» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الذرة والجدول الدوري\"، أي من الأحكام التالية المتعلقة بـ \"ذرات النظائر\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“原子与周期系”核心规律时，下列关于“同位素原子”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Atom û Sîstema Periyodîk\" tê kirin, kîjan daraza li ser \"Atomên Îzotop\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Katyon oluşurken elektron verildiği için tanecik yarıçapı daima küçülür.",
          "en": "Since electrons are given away when a cation is formed, the particle radius always decreases.",
          "de": "Da bei der Bildung eines Kations Elektronen abgegeben werden, nimmt der Teilchenradius immer ab.",
          "fr": "Étant donné que des électrons sont cédés lors de la formation d’un cation, le rayon des particules diminue toujours.",
          "ru": "Поскольку электроны отдаются при образовании катиона, радиус частицы всегда уменьшается.",
          "ar": "وبما أن الإلكترونات تتحرر عند تكوين الكاتيون، فإن نصف قطر الجسيم يتناقص دائمًا.",
          "zh": "由于形成阳离子时会释放电子，因此粒子半径总是减小。",
          "ku": "Ji ber ku dema ku katyonek çêdibe elektron têne dayîn, tîrêjê perçeyê her gav kêm dibe."
        },
        {
          "tr": "Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.",
          "en": "It can reach +7 oxidation state in fluorine compounds.",
          "de": "In Fluorverbindungen kann es eine Oxidationsstufe von +7 erreichen.",
          "fr": "Il peut atteindre un état d’oxydation de +7 dans les composés fluorés.",
          "ru": "В соединениях фтора он может достигать степени окисления +7.",
          "ar": "يمكن أن يصل إلى حالة الأكسدة +7 في مركبات الفلور.",
          "zh": "在氟化合物中可以达到+7氧化态。",
          "ku": "Ew dikare di pêkhateyên florînê de bigihîje rewşa oksîdasyonê +7."
        },
        {
          "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.",
          "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
          "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
          "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
          "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
          "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
          "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
          "ku": "Rutherford bi matematîkî îsbat kir ku elektron di dorhêlên dorhêl ên sabît de dizivirin."
        },
        {
          "tr": "İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.",
          "en": "The chemical properties of isotope atoms are completely different from each other.",
          "de": "Die chemischen Eigenschaften der Isotopenatome sind völlig unterschiedlich.",
          "fr": "Les propriétés chimiques des atomes isotopiques sont complètement différentes les unes des autres.",
          "ru": "Химические свойства атомов изотопов совершенно отличаются друг от друга.",
          "ar": "تختلف الخصائص الكيميائية لذرات النظائر تمامًا عن بعضها البعض.",
          "zh": "同位素原子的化学性质彼此完全不同。",
          "ku": "Taybetmendiyên kîmyayî yên atomên îzotopan bi tevahî ji hev cuda ne."
        },
        {
          "tr": "İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.",
          "en": "Isoelectronic particles have exactly the same desire to undergo chemical reactions.",
          "de": "Isoelektronische Teilchen haben genau den gleichen Wunsch, chemische Reaktionen einzugehen.",
          "fr": "Les particules isoélectroniques ont exactement le même désir de subir des réactions chimiques.",
          "ru": "Изоэлектронные частицы имеют точно такое же желание вступать в химические реакции.",
          "ar": "تتمتع الجسيمات المتساوية الإلكترون بنفس الرغبة تمامًا في الخضوع للتفاعلات الكيميائية.",
          "zh": "等电子粒子具有完全相同的进行化学反应的愿望。",
          "ku": "Parçeyên îzoelektronîk tam heman daxwaziya reaksiyonên kîmyewî hene."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Katyon oluşurken elektron verildiği için tanecik yarıçapı daima küçülür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Since electrons are given away when a cation is formed, the particle radius always decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Da bei der Bildung eines Kations Elektronen abgegeben werden, nimmt der Teilchenradius immer ab.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Étant donné que des électrons sont cédés lors de la formation d’un cation, le rayon des particules diminue toujours.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку электроны отдаются при образовании катиона, радиус частицы всегда уменьшается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وبما أن الإلكترونات تتحرر عند تكوين الكاتيون، فإن نصف قطر الجسيم يتناقص دائمًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于形成阳离子时会释放电子，因此粒子半径总是减小。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber ku dema ku katyonek çêdibe elektron têne dayîn, tîrêjê perçeyê her gav kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Atom ve Periyodik Sistem konusundaki temel kimyasal kurallar çerçevesinde İzobar Atomlar kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Isobar Atoms within the fundamental principles of Atom & Periodic System?",
        "de": "Welche Aussage beschreibt das Konzept Isobare Atome im Rahmen von Atom und Periodensystem am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Atomes isobares selon les lois de Atome et Système Périodique?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Изобарные атомы» в рамках темы «Атом и периодическая система»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"ذرات الأيزوبار\" ضمن قواعد \"الذرة والجدول الدوري\"؟",
        "zh": "根据“原子与周期系”的基本化学原理，下列哪项阐述能最准确地界定“等压原子”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Atomên Îsobar\" di çarçoveya prensîbên \"Atom û Sîstema Periyodîk\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.",
          "en": "Alkali metals are abundant in nature as pure metals.",
          "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
          "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
          "ru": "Щелочные металлы широко распространены в природе в виде чистых металлов.",
          "ar": "تتواجد الفلزات القلوية بكثرة في الطبيعة كمعادن نقية.",
          "zh": "碱金属作为纯金属在自然界中含量丰富。",
          "ku": "Metalên alkalî di xwezayê de wekî metalên pak pir in."
        },
        {
          "tr": "Anyon oluşurken elektron alındığı için elektron başına düşen çekim kuvveti azalır, yarıçap büyür.",
          "en": "As an electron is removed while an anion is forming, the attractive force per electron decreases and the radius increases.",
          "de": "Wenn ein Elektron entfernt wird, während sich ein Anion bildet, nimmt die Anziehungskraft pro Elektron ab und der Radius nimmt zu.",
          "fr": "Lorsqu'un électron est retiré pendant la formation d'un anion, la force d'attraction par électron diminue et le rayon augmente.",
          "ru": "Поскольку электрон удаляется во время образования аниона, сила притяжения, приходящаяся на электрон, уменьшается, а радиус увеличивается.",
          "ar": "عند إزالة الإلكترون أثناء تكوين الأنيون، تقل قوة الجذب لكل إلكترون ويزداد نصف القطر.",
          "zh": "当电子在阴离子形成时被移除时，每个电子的吸引力减小并且半径增大。",
          "ku": "Gava ku elektronek tê rakirin dema ku anionek çê dibe, hêza balkêş a her elektronê kêm dibe û tîrêj zêde dibe."
        },
        {
          "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
          "en": "Thomson proved that there are neutrons in the nucleus.",
          "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
          "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
          "ru": "Томсон доказал, что в ядре есть нейтроны.",
          "ar": "أثبت طومسون أن هناك نيوترونات في النواة.",
          "zh": "汤姆森证明了原子核中存在中子。",
          "ku": "Thomson îspat kir ku di navokê de neutron hene."
        },
        {
          "tr": "Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi daima düzenli artar.",
          "en": "Ionization energy always increases steadily as you move from left to right in the same period.",
          "de": "Die Ionisierungsenergie nimmt immer stetig zu, wenn man sich im gleichen Zeitraum von links nach rechts bewegt.",
          "fr": "L'énergie d'ionisation augmente toujours régulièrement à mesure que vous vous déplacez de gauche à droite au cours de la même période.",
          "ru": "Энергия ионизации всегда неуклонно возрастает по мере движения слева направо за один и тот же период.",
          "ar": "تزداد طاقة التأين دائمًا بشكل مطرد أثناء انتقالك من اليسار إلى اليمين في نفس الفترة.",
          "zh": "当您在同一时间段内从左向右移动时，电离能始终稳定增加。",
          "ku": "Dema ku hûn di heman heyamê de ji çepê ber bi rastê ve diçin, enerjiya ionîzasyonê her gav bi domdarî zêde dibe."
        },
        {
          "tr": "Fransiyum elektronegatifliği en yüksek ametaldir.",
          "en": "Francium is the nonmetal with the highest electronegativity.",
          "de": "Francium ist das Nichtmetall mit der höchsten Elektronegativität.",
          "fr": "Le francium est le non-métal ayant la plus grande électronégativité.",
          "ru": "Франций — неметалл с самой высокой электроотрицательностью.",
          "ar": "الفرانسيوم هو اللافلز ذو أعلى السالبية الكهربية.",
          "zh": "钫是电负性最高的非金属。",
          "ku": "Fransiyûm nemetal e ku xwedî elektronegatîfiya herî bilind e."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Anyon oluşurken elektron alındığı için elektron başına düşen çekim kuvveti azalır, yarıçap büyür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As an electron is removed while an anion is forming, the attractive force per electron decreases and the radius increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn ein Elektron entfernt wird, während sich ein Anion bildet, nimmt die Anziehungskraft pro Elektron ab und der Radius nimmt zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsqu'un électron est retiré pendant la formation d'un anion, la force d'attraction par électron diminue et le rayon augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку электрон удаляется во время образования аниона, сила притяжения, приходящаяся на электрон, уменьшается, а радиус увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند إزالة الإلكترون أثناء تكوين الأنيون، تقل قوة الجذب لكل إلكترون ويزداد نصف القطر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当电子在阴离子形成时被移除时，每个电子的吸引力减小并且半径增大。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Gava ku elektronek tê rakirin dema ku anionek çê dibe, hêza balkêş a her elektronê kêm dibe û tîrêj zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Atom ve Periyodik Sistem sorularında karşılaşılan Metaller konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Atom & Periodic System, which assertion regarding metals is correct?",
        "de": "Welche Feststellung bezüglich Metalle ist nach den chemischen Gesetzmäßigkeiten von Atom und Periodensystem richtig?",
        "fr": "Dans les épreuves universitaires portant sur Atome et Système Périodique, quelle affirmation concernant métaux est correcte?",
        "ru": "В экзаменационных заданиях по теме «Атом и периодическая система», какое положение относительно «металлы» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الذرة والجدول الدوري\"، أي حكم متعلق بـ \"المعادن\" يعتبر صحيحاً؟",
        "zh": "在高考“原子与周期系”经典考题中，下列有关“金属”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Atom û Sîstema Periyodîk\" de, kîjan daraza li ser \"metals\" rast e?"
      },
      "options": [
        {
          "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
          "en": "It forms +1 and +2 stable ions in magnesium compounds.",
          "de": "Es bildet +1 und +2 stabile Ionen in Magnesiumverbindungen.",
          "fr": "Il forme des ions stables +1 et +2 dans les composés de magnésium.",
          "ru": "Он образует +1 и +2 стабильные ионы в соединениях магния.",
          "ar": "وهو يشكل +1 و +2 أيونات مستقرة في مركبات المغنيسيوم.",
          "zh": "它在镁化合物中形成+1和+2稳定离子。",
          "ku": "Di pêkhateyên magnesiumê de +1 û +2 îyonên stabîl çêdike."
        },
        {
          "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
          "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
          "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
          "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
          "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
          "ar": "يوضح نموذج بور طيف الذرات المتعددة الإلكترونات بشكل كامل.",
          "zh": "玻尔模型充分解释了多电子原子的光谱。",
          "ku": "Modela Bohr bi tevahî spektruma atomên pir-elektronî rave kir."
        },
        {
          "tr": "Mendeleyev periyodik tabloyu atom kütlelerine göre, Moseley ise atom numaralarına (proton sayısına) göre düzenlemiştir.",
          "en": "Mendeleev arranged the periodic table according to atomic masses, and Moseley arranged it according to atomic numbers (number of protons).",
          "de": "Mendeleev ordnete das Periodensystem nach Atommassen und Moseley nach Atomzahlen (Anzahl der Protonen).",
          "fr": "Mendeleïev a organisé le tableau périodique selon les masses atomiques, et Moseley l'a organisé selon les numéros atomiques (nombre de protons).",
          "ru": "Менделеев расположил таблицу Менделеева по атомным массам, а Мозли — по атомным номерам (числу протонов).",
          "ar": "رتب مندليف الجدول الدوري حسب الكتل الذرية، ورتبه موزلي حسب الأعداد الذرية (عدد البروتونات).",
          "zh": "门捷列夫按照原子质量排列元素周期表，莫斯利按照原子序数（质子数）排列。",
          "ku": "Mendeleev tabloya perîyodîk li gor girseyên atomê, û Moseley jî li gor hejmarên atomê (hejmara protonan) rêz kirine."
        },
        {
          "tr": "İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.",
          "en": "The second ionization energy is always smaller than the first ionization energy.",
          "de": "Die zweite Ionisierungsenergie ist immer kleiner als die erste Ionisierungsenergie.",
          "fr": "La deuxième énergie d'ionisation est toujours inférieure à la première énergie d'ionisation.",
          "ru": "Вторая энергия ионизации всегда меньше первой энергии ионизации.",
          "ar": "طاقة التأين الثانية تكون دائما أصغر من طاقة التأين الأولى.",
          "zh": "第二电离能总是小于第一电离能。",
          "ku": "Enerjiya îyonîzasyona duyemîn her dem ji enerjiya ionîzasyona yekem piçûktir e."
        },
        {
          "tr": "Helyum 8 değerlik elektronuna sahip bir asal gazdır.",
          "en": "Helium is a noble gas with 8 valence electrons.",
          "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
          "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
          "ru": "Гелий — благородный газ с 8 валентными электронами.",
          "ar": "الهيليوم هو غاز نبيل يحتوي على 8 إلكترونات تكافؤ.",
          "zh": "氦是一种具有 8 个价电子的惰性气体。",
          "ku": "Helium gazek esîl e ku 8 elektronên valansê hene."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Mendeleyev periyodik tabloyu atom kütlelerine göre, Moseley ise atom numaralarına (proton sayısına) göre düzenlemiştir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Mendeleev arranged the periodic table according to atomic masses, and Moseley arranged it according to atomic numbers (number of protons).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mendeleev ordnete das Periodensystem nach Atommassen und Moseley nach Atomzahlen (Anzahl der Protonen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Mendeleïev a organisé le tableau périodique selon les masses atomiques, et Moseley l'a organisé selon les numéros atomiques (nombre de protons).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Менделеев расположил таблицу Менделеева по атомным массам, а Мозли — по атомным номерам (числу протонов).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"رتب مندليف الجدول الدوري حسب الكتل الذرية، ورتبه موزلي حسب الأعداد الذرية (عدد البروتونات).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“门捷列夫按照原子质量排列元素周期表，莫斯利按照原子序数（质子数）排列。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Mendeleev tabloya perîyodîk li gor girseyên atomê, û Moseley jî li gor hejmarên atomê (hejmara protonan) rêz kirine.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin14",
      "stem": {
        "tr": "Aşağıda Atom ve Periyodik Sistem ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Elektronegatiflik ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Atom & Periodic System, which statement about Electronegativity is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Atom und Periodensystem: Welche Aussage über Elektronegativität ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Atome et Système Périodique, quelle affirmation relative à Électronégativité est exacte?",
        "ru": "На основе фундаментальных положений темы «Атом и периодическая система», какое суждение о «Электроотрицательность» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الذرة والجدول الدوري\"، أي عبارة حول \"السالبية الكهربية\" صحيحة؟",
        "zh": "基于“原子与周期系”的基础化学知识体系，下列关于“电负性”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Atom û Sîstema Periyodîk\", kîjan gotin derbarê \"Electronegativity\" de rast e?"
      },
      "options": [
        {
          "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.",
          "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
          "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
          "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
          "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
          "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
          "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
          "ku": "Rutherford bi matematîkî îsbat kir ku elektron di dorhêlên dorhêl ên sabît de dizivirin."
        },
        {
          "tr": "İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.",
          "en": "The chemical properties of isotope atoms are completely different from each other.",
          "de": "Die chemischen Eigenschaften der Isotopenatome sind völlig unterschiedlich.",
          "fr": "Les propriétés chimiques des atomes isotopiques sont complètement différentes les unes des autres.",
          "ru": "Химические свойства атомов изотопов совершенно отличаются друг от друга.",
          "ar": "تختلف الخصائص الكيميائية لذرات النظائر تمامًا عن بعضها البعض.",
          "zh": "同位素原子的化学性质彼此完全不同。",
          "ku": "Taybetmendiyên kîmyayî yên atomên îzotopan bi tevahî ji hev cuda ne."
        },
        {
          "tr": "İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.",
          "en": "Isoelectronic particles have exactly the same desire to undergo chemical reactions.",
          "de": "Isoelektronische Teilchen haben genau den gleichen Wunsch, chemische Reaktionen einzugehen.",
          "fr": "Les particules isoélectroniques ont exactement le même désir de subir des réactions chimiques.",
          "ru": "Изоэлектронные частицы имеют точно такое же желание вступать в химические реакции.",
          "ar": "تتمتع الجسيمات المتساوية الإلكترون بنفس الرغبة تمامًا في الخضوع للتفاعلات الكيميائية.",
          "zh": "等电子粒子具有完全相同的进行化学反应的愿望。",
          "ku": "Parçeyên îzoelektronîk tam heman daxwaziya reaksiyonên kîmyewî hene."
        },
        {
          "tr": "Halojenler 7A grubu elementleridir ve bileşiklerinde -1 ile +7 arasında değerlik alabilir (Flor hariç, F sadece -1 alır).",
          "en": "Halogens are group 7A elements and can take a valence of -1 to +7 in their compounds (except for Fluorine, F can only take -1).",
          "de": "Halogene sind Elemente der Gruppe 7A und können in ihren Verbindungen eine Wertigkeit von -1 bis +7 annehmen (mit Ausnahme von Fluor kann F nur -1 annehmen).",
          "fr": "Les halogènes sont des éléments du groupe 7A et peuvent prendre une valence de -1 à +7 dans leurs composés (sauf pour le fluor, F ne peut prendre que -1).",
          "ru": "Галогены являются элементами группы 7А и в своих соединениях могут принимать валентность от -1 до +7 (за исключением фтора, F может принимать только -1).",
          "ar": "الهالوجينات هي عناصر المجموعة 7A ويمكن أن تأخذ تكافؤًا من -1 إلى +7 في مركباتها (باستثناء الفلور، يمكن أن يأخذ F فقط -1).",
          "zh": "卤素是第 7A 族元素，其化合物的化合价为 -1 至 +7（除氟外，F 只能为 -1）。",
          "ku": "Halojen hêmanên koma 7A ne û dikarin di pêkhateyên xwe de valentek ji -1 heta +7 bigirin (ji bilî Florînê, F tenê dikare -1 bigire)."
        },
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi daima 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is always greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe immer größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est toujours supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А всегда больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A دائمًا أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "在同一时期，3A基团的电离能总是大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A her gav ji ya koma 2A mezintir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Halojenler 7A grubu elementleridir ve bileşiklerinde -1 ile +7 arasında değerlik alabilir (Flor hariç, F sadece -1 alır).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Halogens are group 7A elements and can take a valence of -1 to +7 in their compounds (except for Fluorine, F can only take -1).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Halogene sind Elemente der Gruppe 7A und können in ihren Verbindungen eine Wertigkeit von -1 bis +7 annehmen (mit Ausnahme von Fluor kann F nur -1 annehmen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les halogènes sont des éléments du groupe 7A et peuvent prendre une valence de -1 à +7 dans leurs composés (sauf pour le fluor, F ne peut prendre que -1).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Галогены являются элементами группы 7А и в своих соединениях могут принимать валентность от -1 до +7 (за исключением фтора, F может принимать только -1).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الهالوجينات هي عناصر المجموعة 7A ويمكن أن تأخذ تكافؤًا من -1 إلى +7 في مركباتها (باستثناء الفلور، يمكن أن يأخذ F فقط -1).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“卤素是第 7A 族元素，其化合物的化合价为 -1 至 +7（除氟外，F 只能为 -1）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Halojen hêmanên koma 7A ne û dikarin di pêkhateyên xwe de valentek ji -1 heta +7 bigirin (ji bilî Florînê, F tenê dikare -1 bigire).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin15",
      "stem": {
        "tr": "Atom ve Periyodik Sistem konusu kapsamında Katyon Yarıçapı ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Atom & Periodic System, which of the following findings regarding Cation Radius is scientifically verified?",
        "de": "Im Rahmen der Einheit Atom und Periodensystem: Welcher der folgenden Befunde zu Kationenradius ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Atome et Système Périodique, laquelle des constatations suivantes concernant Rayon des cations est scientifiquement vérifiée?",
        "ru": "В контексте темы «Атом и периодическая система», какой из следующих выводов относительно «Катионный радиус» научно подтверждён?",
        "ar": "في سياق موضوع \"الذرة والجدول الدوري\"، أي من النتائج التالية المتعلقة بـ \"نصف قطر الكاتيون\" مثبتة علمياً؟",
        "zh": "在“原子与周期系”主题范畴内，下列关于“阳离子半径”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Atom û Sîstema Periyodîk\" de, kîjan ji van encamên li ser \"Radyoya Cation\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
          "en": "Thomson proved that there are neutrons in the nucleus.",
          "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
          "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
          "ru": "Томсон доказал, что в ядре есть нейтроны.",
          "ar": "أثبت طومسون أن هناك نيوترونات في النواة.",
          "zh": "汤姆森证明了原子核中存在中子。",
          "ku": "Thomson îspat kir ku di navokê de neutron hene."
        },
        {
          "tr": "Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi daima düzenli artar.",
          "en": "Ionization energy always increases steadily as you move from left to right in the same period.",
          "de": "Die Ionisierungsenergie nimmt immer stetig zu, wenn man sich im gleichen Zeitraum von links nach rechts bewegt.",
          "fr": "L'énergie d'ionisation augmente toujours régulièrement à mesure que vous vous déplacez de gauche à droite au cours de la même période.",
          "ru": "Энергия ионизации всегда неуклонно возрастает по мере движения слева направо за один и тот же период.",
          "ar": "تزداد طاقة التأين دائمًا بشكل مطرد أثناء انتقالك من اليسار إلى اليمين في نفس الفترة.",
          "zh": "当您在同一时间段内从左向右移动时，电离能始终稳定增加。",
          "ku": "Dema ku hûn di heman heyamê de ji çepê ber bi rastê ve diçin, enerjiya ionîzasyonê her gav bi domdarî zêde dibe."
        },
        {
          "tr": "Fransiyum elektronegatifliği en yüksek ametaldir.",
          "en": "Francium is the nonmetal with the highest electronegativity.",
          "de": "Francium ist das Nichtmetall mit der höchsten Elektronegativität.",
          "fr": "Le francium est le non-métal ayant la plus grande électronégativité.",
          "ru": "Франций — неметалл с самой высокой электроотрицательностью.",
          "ar": "الفرانسيوم هو اللافلز ذو أعلى السالبية الكهربية.",
          "zh": "钫是电负性最高的非金属。",
          "ku": "Fransiyûm nemetal e ku xwedî elektronegatîfiya herî bilind e."
        },
        {
          "tr": "Katyon oluştuğunda çekirdeğin çekim gücü artar.",
          "en": "When a cation is formed, the gravitational force of the nucleus increases.",
          "de": "Bei der Bildung eines Kations erhöht sich die Gravitationskraft des Kerns.",
          "fr": "Lorsqu’un cation se forme, la force gravitationnelle du noyau augmente.",
          "ru": "При образовании катиона гравитационная сила ядра увеличивается.",
          "ar": "عندما يتكون الكاتيون، تزداد قوة الجاذبية للنواة.",
          "zh": "当形成阳离子时，原子核的引力增加。",
          "ku": "Dema ku katyonek çêbibe, hêza gravîtasyonê ya navokê zêde dibe."
        },
        {
          "tr": "Alkali metaller (1A) en aktif metallerdir ve suyla şiddetli tepkime vererek H2 gazı açığa çıkarır.",
          "en": "Alkali metals (1A) are the most active metals and react violently with water, releasing H2 gas.",
          "de": "Alkalimetalle (1A) sind die aktivsten Metalle und reagieren heftig mit Wasser unter Freisetzung von H2-Gas.",
          "fr": "Les métaux alcalins (1A) sont les métaux les plus actifs et réagissent violemment avec l'eau, libérant du gaz H2.",
          "ru": "Щелочные металлы (1А) являются наиболее активными металлами и бурно реагируют с водой, выделяя газ H2.",
          "ar": "الفلزات القلوية (1A) هي أكثر الفلزات نشاطا وتتفاعل بعنف مع الماء، وتطلق غاز H2.",
          "zh": "碱金属 (1A) 是最活泼的金属，与水发生剧烈反应，释放出氢气。",
          "ku": "Metalên alkalî (1A) metalên herî çalak in û bi avê re bi tundî reaksiyonê dikin û gaza H2 derdixin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Alkali metaller (1A) en aktif metallerdir ve suyla şiddetli tepkime vererek H2 gazı açığa çıkarır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkali metals (1A) are the most active metals and react violently with water, releasing H2 gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkalimetalle (1A) sind die aktivsten Metalle und reagieren heftig mit Wasser unter Freisetzung von H2-Gas.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux alcalins (1A) sont les métaux les plus actifs et réagissent violemment avec l'eau, libérant du gaz H2.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Щелочные металлы (1А) являются наиболее активными металлами и бурно реагируют с водой, выделяя газ H2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الفلزات القلوية (1A) هي أكثر الفلزات نشاطا وتتفاعل بعنف مع الماء، وتطلق غاز H2.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“碱金属 (1A) 是最活泼的金属，与水发生剧烈反应，释放出氢气。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên alkalî (1A) metalên herî çalak in û bi avê re bi tundî reaksiyonê dikin û gaza H2 derdixin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u02-twin16",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Atom ve Periyodik Sistem ünitesinde ele alınan Periyot hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Atom & Periodic System, which statement about Period is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Atom und Periodensystem: Welche Aussage über Periode ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Atome et Système Périodique, quelle affirmation relative à Période est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Атом и периодическая система», какое утверждение о «Период» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الذرة والجدول الدوري\"، أي عبارة حول \"الدورة\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“原子与周期系”单元中关于“周期”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Atom û Sîstema Periyodîk\", kîjan gotin li ser \"Periyod\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Toprak alkali metaller (2A) bileşiklerinde daima +2 değerlik alır.",
          "en": "Alkaline earth metals (2A) always take a +2 valence in their compounds.",
          "de": "Erdalkalimetalle (2A) nehmen in ihren Verbindungen immer eine Wertigkeit von +2 an.",
          "fr": "Les métaux alcalino-terreux (2A) prennent toujours une valence +2 dans leurs composés.",
          "ru": "Щелочноземельные металлы (2А) в своих соединениях всегда имеют валентность +2.",
          "ar": "الفلزات القلوية الترابية (2A) لها دائمًا تكافؤ +2 في مركباتها.",
          "zh": "碱土金属 (2A) 在其化合物中始终具有 +2 价。",
          "ku": "Metalên erda alkalîn (2A) di pêkhateyên xwe de her dem valansek +2 digirin."
        },
        {
          "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
          "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
          "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
          "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
          "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
          "ar": "يوضح نموذج بور طيف الذرات المتعددة الإلكترونات بشكل كامل.",
          "zh": "玻尔模型充分解释了多电子原子的光谱。",
          "ku": "Modela Bohr bi tevahî spektruma atomên pir-elektronî rave kir."
        },
        {
          "tr": "İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.",
          "en": "The second ionization energy is always smaller than the first ionization energy.",
          "de": "Die zweite Ionisierungsenergie ist immer kleiner als die erste Ionisierungsenergie.",
          "fr": "La deuxième énergie d'ionisation est toujours inférieure à la première énergie d'ionisation.",
          "ru": "Вторая энергия ионизации всегда меньше первой энергии ионизации.",
          "ar": "طاقة التأين الثانية تكون دائما أصغر من طاقة التأين الأولى.",
          "zh": "第二电离能总是小于第一电离能。",
          "ku": "Enerjiya îyonîzasyona duyemîn her dem ji enerjiya ionîzasyona yekem piçûktir e."
        },
        {
          "tr": "Helyum 8 değerlik elektronuna sahip bir asal gazdır.",
          "en": "Helium is a noble gas with 8 valence electrons.",
          "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
          "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
          "ru": "Гелий — благородный газ с 8 валентными электронами.",
          "ar": "الهيليوم هو غاز نبيل يحتوي على 8 إلكترونات تكافؤ.",
          "zh": "氦是一种具有 8 个价电子的惰性气体。",
          "ku": "Helium gazek esîl e ku 8 elektronên valansê hene."
        },
        {
          "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
          "en": "As anion forms, the number of protons in the nucleus increases.",
          "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
          "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
          "ru": "По мере образования анионов число протонов в ядре увеличивается.",
          "ar": "ومع تشكل الأنيون، يزداد عدد البروتونات في النواة.",
          "zh": "随着阴离子的形成，原子核中的质子数量增加。",
          "ku": "Her ku anyon çêdibe, hejmara protonan di navokê de zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Toprak alkali metaller (2A) bileşiklerinde daima +2 değerlik alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkaline earth metals (2A) always take a +2 valence in their compounds.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Erdalkalimetalle (2A) nehmen in ihren Verbindungen immer eine Wertigkeit von +2 an.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux alcalino-terreux (2A) prennent toujours une valence +2 dans leurs composés.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Щелочноземельные металлы (2А) в своих соединениях всегда имеют валентность +2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الفلزات القلوية الترابية (2A) لها دائمًا تكافؤ +2 في مركباتها.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“碱土金属 (2A) 在其化合物中始终具有 +2 价。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên erda alkalîn (2A) di pêkhateyên xwe de her dem valansek +2 digirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit02;
