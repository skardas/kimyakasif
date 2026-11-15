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
    "zh": "原子与元素周期表",
    "ku": "Atom û Tabloya Periyodîk"
  },
  "subtitle": {
    "tr": "Modeller, Kuantum Sayıları ve Periyodik Özellikler",
    "en": "Models, Quantum Numbers & Trends",
    "de": "Modelle, Quantenzahlen und periodische Eigenschaften",
    "fr": "Modèles, nombres quantiques et propriétés périodiques",
    "ru": "Модели, квантовые числа и периодические свойства",
    "ar": "النماذج وأعداد الكم والخواص الدورية",
    "zh": "原子模型、量子数与周期性质",
    "ku": "Model, Hejmarên Kuantumê û Taybetmendiyên Periyodîk"
  },
  "facts": [
    {
      "id": "u02-f01",
      "fact": {
        "tr": "Rutherford altın levha deneyiyle atomun büyük kısmının boşluk olduğunu göstermiş ve çekirdekli atom modelini ortaya koymuştur.",
        "en": "With his gold foil experiment, Rutherford showed that most of the atom is empty space and proposed the nuclear model of the atom.",
        "de": "Mit seinem Goldfolienexperiment zeigte Rutherford, dass der größte Teil des Atoms leerer Raum ist, und stellte das Kernmodell des Atoms auf.",
        "fr": "Avec son expérience de la feuille d'or, Rutherford a montré que la majeure partie de l'atome est vide et a proposé le modèle nucléaire de l'atome.",
        "ru": "Опытом с золотой фольгой Резерфорд показал, что большая часть атома — пустое пространство, и предложил ядерную модель атома.",
        "ar": "أثبت رذرفورد بتجربة صفيحة الذهب أن معظم الذرة فراغ، واقترح النموذج النووي للذرة.",
        "zh": "卢瑟福通过金箔实验证明原子内部绝大部分是空的，并提出了原子的核式结构模型。",
        "ku": "Rutherford bi ceribandina pelê zêr nîşan da ku piraniya atomê valahî ye û modela atomê ya bi navok pêşniyar kir."
      },
      "trap": {
        "tr": "Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel olarak kanıtlamıştır.",
        "en": "Rutherford mathematically proved that electrons revolve in fixed circular orbits.",
        "de": "Rutherford hat mathematisch bewiesen, dass sich Elektronen auf festen Kreisbahnen bewegen.",
        "fr": "Rutherford a prouvé mathématiquement que les électrons tournent sur des orbites circulaires fixes.",
        "ru": "Резерфорд математически доказал, что электроны вращаются по фиксированным круговым орбитам.",
        "ar": "أثبت رذرفورد رياضياً أن الإلكترونات تدور في مدارات دائرية ثابتة.",
        "zh": "卢瑟福在数学上证明了电子在固定的圆形轨道上旋转。",
        "ku": "Rutherford bi awayekî matematîkî îspat kir ku elektron li ser rêgehên dorhêl ên sabît dizivirin."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronların belirli enerji düzeylerinde (yörüngelerde) bulunduğunu öne süren Bohr'dur; Rutherford çekirdeği keşfetmiş, ancak elektronların düzenini açıklayamamıştır.",
        "en": "It was Bohr who proposed that electrons occupy definite energy levels (orbits); Rutherford discovered the nucleus but could not explain how the electrons are arranged.",
        "de": "Dass Elektronen bestimmte Energieniveaus (Bahnen) besetzen, schlug Bohr vor; Rutherford entdeckte den Kern, konnte aber die Anordnung der Elektronen nicht erklären.",
        "fr": "C'est Bohr qui a proposé que les électrons occupent des niveaux d'énergie définis (orbites) ; Rutherford a découvert le noyau mais n'a pas pu expliquer la disposition des électrons.",
        "ru": "Идею определённых энергетических уровней (орбит) электронов выдвинул Бор; Резерфорд открыл ядро, но не смог объяснить расположение электронов.",
        "ar": "صاحب فكرة وجود الإلكترونات في مستويات طاقة محددة (مدارات) هو بور؛ أما رذرفورد فاكتشف النواة لكنه لم يستطع تفسير ترتيب الإلكترونات.",
        "zh": "提出电子处在确定能级（轨道）上的是玻尔；卢瑟福发现了原子核，但无法解释电子的排布。",
        "ku": "Yê ku got elektron di astên enerjiyê yên diyar (rêgehan) de ne Bohr e; Rutherford navok keşf kir, lê nikarîbû rêzbûna elektronan rave bike."
      },
      "osymTip": {
        "tr": "Yörünge modeli Bohr'a aittir.",
        "en": "The model with fixed circular orbits belongs to Bohr.",
        "de": "Das Modell mit festen Kreisbahnen stammt von Bohr.",
        "fr": "Le modèle à orbites circulaires fixes est celui de Bohr.",
        "ru": "Модель с орбитами электронов предложил Бор, а не Резерфорд.",
        "ar": "نموذج المدارات الدائرية الثابتة يعود إلى بور.",
        "zh": "轨道模型是玻尔提出的。",
        "ku": "Modela rêgehên dorhêl ên sabît a Bohr e."
      }
    },
    {
      "id": "u02-f02",
      "fact": {
        "tr": "Thomson üzümlü kek modelinde atomu pozitif yüklü küre içine gömülü elektronlar olarak tanımlamıştır.",
        "en": "In the Thomson raisin cake model, he defined the atom as electrons embedded in a positively charged sphere.",
        "de": "Im Thomson-Rosinenkuchen-Modell definierte er das Atom als Elektronen, die in einer positiv geladenen Kugel eingebettet sind.",
        "fr": "Dans le modèle du gâteau aux raisins de Thomson, il a défini l’atome comme étant des électrons intégrés dans une sphère chargée positivement.",
        "ru": "В модели Томсона (модели «пудинга с изюмом») атом представлен как положительно заряженный шар, в который вкраплены электроны.",
        "ar": "وصف طومسون في نموذج كعكة الزبيب الذرةَ بأنها كرة موجبة الشحنة تنغرس فيها الإلكترونات.",
        "zh": "汤姆孙在“葡萄干布丁”模型中，把原子描述为电子镶嵌在带正电的球体中。",
        "ku": "Thomson di modela keka bi mewîj de atom wekî elektronên ku di nav gogeke bi bara erênî de bicih bûne pênase kir."
      },
      "trap": {
        "tr": "Thomson çekirdekte nötron bulunduğunu ispatlamıştır.",
        "en": "Thomson proved that there are neutrons in the nucleus.",
        "de": "Thomson bewies, dass sich im Kern Neutronen befinden.",
        "fr": "Thomson a prouvé qu'il y a des neutrons dans le noyau.",
        "ru": "Томсон доказал, что в ядре есть нейтроны.",
        "ar": "أثبت طومسون وجود نيوترونات في النواة.",
        "zh": "汤姆孙证明了原子核中存在中子。",
        "ku": "Thomson îspat kir ku di navokê de notron hene."
      },
      "whyTrapIsFalse": {
        "tr": "Thomson modelinde nötron yoktur; o dönemde çekirdek bile bilinmiyordu. Nötron 1932'de Chadwick tarafından keşfedilmiştir.",
        "en": "There are no neutrons in Thomson's model; even the nucleus was unknown then. The neutron was discovered by Chadwick in 1932.",
        "de": "Im Thomson-Modell gibt es keine Neutronen; damals war nicht einmal der Kern bekannt. Das Neutron entdeckte Chadwick 1932.",
        "fr": "Le modèle de Thomson ne contient pas de neutrons ; même le noyau était alors inconnu. Le neutron a été découvert par Chadwick en 1932.",
        "ru": "В модели Томсона нет нейтронов — тогда не знали даже о ядре. Нейтрон открыл Чедвик в 1932 году.",
        "ar": "لا يوجد نيوترون في نموذج طومسون؛ فحتى النواة لم تكن معروفة آنذاك. واكتشف تشادويك النيوترون عام 1932.",
        "zh": "汤姆孙模型中没有中子，当时连原子核都还不知道。中子是查德威克在 1932 年发现的。",
        "ku": "Di modela Thomson de notron tune ye; wê demê navok jî nedihat zanîn. Notron di sala 1932an de ji aliyê Chadwick ve hate keşfkirin."
      }
    },
    {
      "id": "u02-f03",
      "fact": {
        "tr": "Bohr atom modeline göre elektronlar çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunur.",
        "en": "According to the Bohr atomic model, electrons are located in certain energy levels (orbits) around the nucleus.",
        "de": "Nach dem Bohrschen Atommodell befinden sich Elektronen in bestimmten Energieniveaus (Bahnen) um den Kern.",
        "fr": "Selon le modèle atomique de Bohr, les électrons sont situés à certains niveaux d'énergie (orbites) autour du noyau.",
        "ru": "Согласно модели атома Бора, электроны находятся вокруг ядра на определённых энергетических уровнях (орбитах).",
        "ar": "وفقاً لنموذج بور الذري توجد الإلكترونات حول النواة في مستويات طاقة محددة (مدارات).",
        "zh": "根据玻尔原子模型，电子处在原子核周围确定的能级（轨道）上。",
        "ku": "Li gorî modela atomê ya Bohr, elektron li dora navokê di astên enerjiyê yên diyar (rêgehan) de cih digirin."
      },
      "trap": {
        "tr": "Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.",
        "en": "The Bohr model fully explained the spectrum of multi-electron atoms.",
        "de": "Das Bohr-Modell erklärte das Spektrum von Mehrelektronenatomen vollständig.",
        "fr": "Le modèle de Bohr expliquait pleinement le spectre des atomes multiélectroniques.",
        "ru": "Модель Бора полностью объяснила спектр многоэлектронных атомов.",
        "ar": "فسّر نموذج بور طيف الذرات متعددة الإلكترونات تفسيراً كاملاً.",
        "zh": "玻尔模型完全解释了多电子原子的光谱。",
        "ku": "Modela Bohr spektruma atomên pirelektronî bi tevahî rave kir."
      },
      "whyTrapIsFalse": {
        "tr": "Bohr modeli yalnızca hidrojen gibi tek elektronlu taneciklerin spektrumunu açıklayabilmiştir; çok elektronlu atomlarda elektronlar arası etkileşimi hesaba katmadığı için yetersiz kalır.",
        "en": "The Bohr model could explain only the spectra of one-electron species such as hydrogen; it fails for many-electron atoms because it ignores electron–electron interactions.",
        "de": "Das Bohr-Modell erklärt nur die Spektren von Einelektronenteilchen wie Wasserstoff; bei Mehrelektronenatomen versagt es, weil es die Wechselwirkung der Elektronen untereinander nicht berücksichtigt.",
        "fr": "Le modèle de Bohr n'explique que les spectres des espèces à un électron comme l'hydrogène ; il échoue pour les atomes polyélectroniques car il néglige les interactions entre électrons.",
        "ru": "Модель Бора объясняет спектры только одноэлектронных частиц, таких как водород; для многоэлектронных атомов она не годится, так как не учитывает взаимодействие электронов.",
        "ar": "استطاع نموذج بور تفسير طيف الدقائق ذات الإلكترون الواحد كالهيدروجين فقط؛ ويعجز في الذرات متعددة الإلكترونات لأنه يهمل التآثر بين الإلكترونات.",
        "zh": "玻尔模型只能解释氢等单电子微粒的光谱；对于多电子原子，由于没有考虑电子之间的相互作用而无能为力。",
        "ku": "Modela Bohr tenê dikare spektruma perçeyên yekelektronî yên wekî hîdrojenê rave bike; ji bo atomên pirelektronî têra nake, ji ber ku têkiliyên navbera elektronan nahesibîne."
      }
    },
    {
      "id": "u02-f04",
      "fact": {
        "tr": "İzotop atomların proton sayıları aynı, nötron sayıları ve kütle numaraları farklıdır.",
        "en": "Isotope atoms have the same number of protons, but different numbers of neutrons and mass numbers.",
        "de": "Isotopenatome haben die gleiche Anzahl an Protonen, aber unterschiedliche Neutronenzahlen und Massenzahlen.",
        "fr": "Les atomes isotopiques ont le même nombre de protons, mais des nombres de neutrons et des nombres de masse différents.",
        "ru": "У изотопов одинаковое число протонов, но разное число нейтронов и разные массовые числа.",
        "ar": "لذرات النظائر العدد نفسه من البروتونات، لكنها تختلف في أعداد النيوترونات والأعداد الكتلية.",
        "zh": "同位素原子的质子数相同，中子数和质量数不同。",
        "ku": "Hejmara protonên atomên îzotop wekhev e, lê hejmara notronan û hejmara girseyê cuda ne."
      },
      "trap": {
        "tr": "İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.",
        "en": "The chemical properties of isotope atoms are completely different from each other.",
        "de": "Die chemischen Eigenschaften der Isotopenatome sind völlig unterschiedlich.",
        "fr": "Les propriétés chimiques des atomes isotopiques sont complètement différentes les unes des autres.",
        "ru": "Химические свойства изотопов совершенно различны.",
        "ar": "تختلف الخواص الكيميائية للنظائر بعضها عن بعض اختلافاً تاماً.",
        "zh": "同位素原子的化学性质彼此完全不同。",
        "ku": "Taybetmendiyên kîmyewî yên atomên îzotop bi tevahî ji hev cuda ne."
      },
      "whyTrapIsFalse": {
        "tr": "Kimyasal özellikleri proton ve elektron sayısı belirler; izotoplarda bunlar aynı olduğundan kimyasal özellikler aynıdır, yalnızca kütleye bağlı fiziksel özellikler farklıdır.",
        "en": "Chemical properties are set by the numbers of protons and electrons; these are the same in isotopes, so their chemical properties are the same and only mass-dependent physical properties differ.",
        "de": "Die chemischen Eigenschaften werden durch Protonen- und Elektronenzahl bestimmt; bei Isotopen sind diese gleich, daher sind die chemischen Eigenschaften gleich und nur massenabhängige physikalische Eigenschaften verschieden.",
        "fr": "Les propriétés chimiques dépendent des nombres de protons et d'électrons ; identiques chez les isotopes, elles sont donc les mêmes, seules les propriétés physiques liées à la masse diffèrent.",
        "ru": "Химические свойства определяются числом протонов и электронов; у изотопов эти числа одинаковы, поэтому одинаковы и химические свойства, а различаются лишь физические свойства, зависящие от массы.",
        "ar": "تحدد الخواصَّ الكيميائية أعدادُ البروتونات والإلكترونات، وهي متساوية في النظائر، لذا تتشابه خواصها الكيميائية ولا تختلف إلا الخواص الفيزيائية المرتبطة بالكتلة.",
        "zh": "化学性质由质子数和电子数决定；同位素的这两个数相同，所以化学性质相同，只有与质量有关的物理性质不同。",
        "ku": "Taybetmendiyên kîmyewî bi hejmara proton û elektronan tên diyarkirin; ev di îzotopan de wekhev in, loma taybetmendiyên wan ên kîmyewî wekhev in û tenê taybetmendiyên fîzîkî yên bi girseyê ve girêdayî cuda ne."
      }
    },
    {
      "id": "u02-f05",
      "fact": {
        "tr": "Aynı periyotta soldan sağa doğru gidildikçe genellikle atom yarıçapı küçülür, elektronegatiflik artar.",
        "en": "Across a period from left to right, the atomic radius generally decreases and electronegativity increases.",
        "de": "Innerhalb einer Periode nimmt von links nach rechts der Atomradius im Allgemeinen ab und die Elektronegativität zu.",
        "fr": "Dans une même période, de gauche à droite, le rayon atomique diminue généralement et l'électronégativité augmente.",
        "ru": "В пределах одного периода слева направо радиус атома, как правило, уменьшается, а электроотрицательность возрастает.",
        "ar": "في الدورة الواحدة، بالانتقال من اليسار إلى اليمين يقل نصف القطر الذري عموماً وتزداد السالبية الكهربائية.",
        "zh": "同一周期中从左到右，原子半径一般减小，电负性增大。",
        "ku": "Di heman periyodê de ji çepê ber bi rastê, bi giştî nîvçapa atomê kêm dibe û elektronegatîfî zêde dibe."
      },
      "trap": {
        "tr": "Aynı periyotta soldan sağa gidildikçe elementlerin metalik özelliği artar.",
        "en": "Across a period from left to right, the metallic character of the elements increases.",
        "de": "In einer Periode nimmt der metallische Charakter der Elemente von links nach rechts zu.",
        "fr": "Dans une période, de gauche à droite, le caractère métallique des éléments augmente.",
        "ru": "В периоде слева направо металлические свойства элементов усиливаются.",
        "ar": "في الدورة الواحدة تزداد الخاصية الفلزية للعناصر من اليسار إلى اليمين.",
        "zh": "同一周期从左到右，元素的金属性增强。",
        "ku": "Di heman periyodê de ji çepê ber bi rastê taybetmendiya metalî ya elementan zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Soldan sağa çekirdek yükü arttıkça atomlar elektron vermekte zorlanır; bu nedenle metalik özellik artmaz, azalır ve ametalik özellik artar.",
        "en": "From left to right the nuclear charge grows and atoms give up electrons less easily, so metallic character decreases rather than increases, while non-metallic character increases.",
        "de": "Von links nach rechts steigt die Kernladung, und die Atome geben Elektronen schwerer ab; der metallische Charakter nimmt daher ab statt zu, der nichtmetallische zu.",
        "fr": "De gauche à droite, la charge du noyau augmente et les atomes cèdent moins facilement leurs électrons : le caractère métallique diminue au lieu d'augmenter, le caractère non métallique augmente.",
        "ru": "Слева направо заряд ядра растёт, и атомам труднее отдавать электроны, поэтому металлические свойства не усиливаются, а ослабевают, а неметаллические усиливаются.",
        "ar": "من اليسار إلى اليمين تزداد شحنة النواة فيصعب على الذرات فقد الإلكترونات، لذلك تقل الخاصية الفلزية بدلاً من أن تزداد، وتزداد الخاصية اللافلزية.",
        "zh": "从左到右核电荷增大，原子越难失去电子，所以金属性不是增强而是减弱，非金属性增强。",
        "ku": "Ji çepê ber bi rastê bara navokê zêde dibe û atom bi zehmetî elektronan didin; loma taybetmendiya metalî zêde nabe, kêm dibe û taybetmendiya nemetalî zêde dibe."
      }
    },
    {
      "id": "u02-f06",
      "fact": {
        "tr": "Bir atomdan elektron koparıldıkça kalan elektronlar çekirdek tarafından daha kuvvetli çekildiğinden ardışık iyonlaşma enerjileri İE1 < İE2 < İE3 şeklinde artar.",
        "en": "As electrons are removed from an atom, the remaining ones are held more strongly by the nucleus, so successive ionisation energies increase: IE1 < IE2 < IE3.",
        "de": "Je mehr Elektronen einem Atom entzogen werden, desto stärker hält der Kern die übrigen; die aufeinanderfolgenden Ionisierungsenergien steigen daher: IE1 < IE2 < IE3.",
        "fr": "À mesure qu'on arrache des électrons à un atome, les électrons restants sont plus retenus par le noyau ; les énergies d'ionisation successives augmentent donc : EI1 < EI2 < EI3.",
        "ru": "Каждый следующий электрон оторвать труднее, так как оставшиеся электроны сильнее притягиваются ядром; поэтому последовательные энергии ионизации растут: I1 < I2 < I3.",
        "ar": "كلما نُزعت إلكترونات من الذرة انجذبت الإلكترونات المتبقية إلى النواة بقوة أكبر، لذلك تتزايد طاقات التأين المتتالية: IE1 < IE2 < IE3.",
        "zh": "原子失去电子后，剩余电子受原子核吸引更强，所以逐级电离能依次增大：IE1 < IE2 < IE3。",
        "ku": "Her ku elektron ji atomê tên qetandin, elektronên mayî ji aliyê navokê ve bi hêztir tên kişandin; loma enerjiyên îyonîzasyonê yên li pey hev wekî IE1 < IE2 < IE3 zêde dibin."
      },
      "trap": {
        "tr": "Bir atomun ikinci iyonlaşma enerjisi birinci iyonlaşma enerjisinden küçüktür.",
        "en": "The second ionisation energy of an atom is smaller than its first ionisation energy.",
        "de": "Die zweite Ionisierungsenergie eines Atoms ist kleiner als die erste.",
        "fr": "La deuxième énergie d'ionisation d'un atome est inférieure à la première.",
        "ru": "Вторая энергия ионизации атома меньше первой.",
        "ar": "طاقة التأين الثانية للذرة أصغر من طاقة تأينها الأولى.",
        "zh": "原子的第二电离能小于第一电离能。",
        "ku": "Enerjiya îyonîzasyonê ya duyem a atomekê ji ya yekem piçûktir e."
      },
      "whyTrapIsFalse": {
        "tr": "Bir elektron koparıldıktan sonra proton sayısı aynı kalırken elektron sayısı azalır; kalan elektronlar daha kuvvetli çekildiğinden İE2 her zaman İE1'den büyüktür.",
        "en": "After one electron is removed, the proton number stays the same while the electron number falls; the remaining electrons are held more strongly, so IE2 is always greater than IE1.",
        "de": "Nach Abgabe eines Elektrons bleibt die Protonenzahl gleich, die Elektronenzahl sinkt; die übrigen Elektronen werden stärker angezogen, daher ist IE2 stets größer als IE1.",
        "fr": "Après le départ d'un électron, le nombre de protons reste le même alors que celui des électrons diminue ; les électrons restants sont plus fortement attirés, donc EI2 est toujours supérieure à EI1.",
        "ru": "После отрыва одного электрона число протонов остаётся прежним, а электронов становится меньше; оставшиеся электроны притягиваются сильнее, поэтому I2 всегда больше I1.",
        "ar": "بعد نزع إلكترون يبقى عدد البروتونات ثابتاً ويقل عدد الإلكترونات، فتنجذب الإلكترونات المتبقية بقوة أكبر، ولذلك تكون طاقة التأين الثانية دائماً أكبر من الأولى.",
        "zh": "失去一个电子后质子数不变而电子数减少，剩余电子受到更强的吸引，所以第二电离能总是大于第一电离能。",
        "ku": "Piştî ku elektronek tê qetandin hejmara protonan wekî xwe dimîne lê hejmara elektronan kêm dibe; elektronên mayî bi hêztir tên kişandin, loma IE2 her dem ji IE1 mezintir e."
      }
    },
    {
      "id": "u02-f07",
      "fact": {
        "tr": "İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, proton sayıları farklıdır.",
        "en": "The number of electrons and arrangements of isoelectronic particles are the same, but the number of protons is different.",
        "de": "Die Anzahl der Elektronen und die Anordnung isoelektronischer Teilchen sind gleich, die Anzahl der Protonen ist jedoch unterschiedlich.",
        "fr": "Le nombre d’électrons et la disposition des particules isoélectroniques sont les mêmes, mais le nombre de protons est différent.",
        "ru": "Изоэлектронные частицы имеют одинаковое число электронов и одинаковую электронную конфигурацию, но разное число протонов.",
        "ar": "للدقائق متساوية الإلكترونات العدد نفسه من الإلكترونات والتوزيع الإلكتروني نفسه، لكن أعداد بروتوناتها مختلفة.",
        "zh": "等电子微粒的电子数和电子排布相同，但质子数不同。",
        "ku": "Hejmar û rêzkirina elektronên perçeyên îzoelektronîk wekhev in, lê hejmara protonên wan cuda ye."
      },
      "trap": {
        "tr": "İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.",
        "en": "Isoelectronic particles have exactly the same desire to undergo chemical reactions.",
        "de": "Isoelektronische Teilchen haben genau den gleichen Wunsch, chemische Reaktionen einzugehen.",
        "fr": "Les particules isoélectroniques ont exactement le même désir de subir des réactions chimiques.",
        "ru": "Изоэлектронные частицы обладают совершенно одинаковой химической активностью.",
        "ar": "تتساوى الدقائق متساوية الإلكترونات تماماً في ميلها إلى الدخول في التفاعلات الكيميائية.",
        "zh": "等电子微粒发生化学反应的倾向完全相同。",
        "ku": "Meyla perçeyên îzoelektronîk a ketina reaksiyonên kîmyewî tam wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "İzoelektronik taneciklerin yalnızca elektron sayıları aynıdır; proton sayıları ve yükleri farklıdır (örn. Na+ ve Ne), bu yüzden kimyasal davranışları da farklıdır.",
        "en": "Isoelectronic species share only the number of electrons; their proton numbers and charges differ (e.g. Na+ and Ne), so their chemical behaviour also differs.",
        "de": "Isoelektronische Teilchen haben nur die gleiche Elektronenzahl; Protonenzahl und Ladung sind verschieden (z. B. Na+ und Ne), daher verhalten sie sich chemisch unterschiedlich.",
        "fr": "Les espèces isoélectroniques n'ont en commun que le nombre d'électrons ; leurs nombres de protons et leurs charges diffèrent (ex. Na+ et Ne), leur comportement chimique aussi.",
        "ru": "У изоэлектронных частиц совпадает лишь число электронов; число протонов и заряд у них разные (например, Na+ и Ne), поэтому и химическое поведение разное.",
        "ar": "الدقائق متساوية الإلكترونات تتشابه في عدد الإلكترونات فقط، أما أعداد البروتونات والشحنات فمختلفة (مثل Na+ وNe)، ولذلك يختلف سلوكها الكيميائي.",
        "zh": "等电子微粒只是电子数相同，质子数和电荷不同(如 Na+ 和 Ne)，因此化学性质也不同。",
        "ku": "Perçeyên îzoelektronîk tenê di hejmara elektronan de wekhev in; hejmara protonan û barên wan cuda ne (mînak Na+ û Ne), loma tevgera wan a kîmyewî jî cuda ye."
      }
    },
    {
      "id": "u02-f08",
      "fact": {
        "tr": "Flor periyodik sistemin elektronegatifliği en yüksek elementidir (4,0 kabul edilir).",
        "en": "Fluorine is the element with the highest electronegativity in the periodic system (accepted as 4.0).",
        "de": "Fluor ist das Element mit der höchsten Elektronegativität im Periodensystem (akzeptiert als 4,0).",
        "fr": "Le fluor est l'élément ayant l'électronégativité la plus élevée dans le système périodique (accepté comme 4,0).",
        "ru": "Фтор — элемент с самой высокой электроотрицательностью в периодической системе (принимается за 4,0).",
        "ar": "الفلور أعلى العناصر سالبيةً كهربائية في الجدول الدوري (تُعدّ قيمتها 4.0).",
        "zh": "氟是元素周期表中电负性最大的元素(取值为 4.0)。",
        "ku": "Flor di tabloya periyodîk de elementa herî elektronegatîf e (elektronegatîfiya wê 4,0 tê qebûlkirin)."
      },
      "trap": {
        "tr": "Periyodik sistemde elektronegatifliği en yüksek element klordur.",
        "en": "Chlorine is the element with the highest electronegativity in the periodic table.",
        "de": "Chlor ist das Element mit der höchsten Elektronegativität im Periodensystem.",
        "fr": "Le chlore est l'élément le plus électronégatif du tableau périodique.",
        "ru": "Хлор — элемент с наибольшей электроотрицательностью в периодической системе.",
        "ar": "الكلور هو العنصر الأعلى سالبيةً كهربائية في الجدول الدوري.",
        "zh": "氯是元素周期表中电负性最大的元素。",
        "ku": "Di tabloya periyodîk de elementa herî elektronegatîf klor e."
      },
      "whyTrapIsFalse": {
        "tr": "Klor da çok elektronegatif bir halojendir, ancak flordan bir katman fazladır; bağ elektronlarını en kuvvetli çeken, küçük yarıçaplı flordur.",
        "en": "Chlorine is also a highly electronegative halogen, but it has one more shell than fluorine; the element that attracts bonding electrons most strongly is the smaller fluorine.",
        "de": "Chlor ist ebenfalls ein stark elektronegatives Halogen, hat aber eine Schale mehr als Fluor; am stärksten zieht das kleinere Fluor die Bindungselektronen an.",
        "fr": "Le chlore est lui aussi un halogène très électronégatif, mais il possède une couche de plus que le fluor ; c'est le fluor, plus petit, qui attire le plus les électrons de liaison.",
        "ru": "Хлор — тоже галоген с высокой электроотрицательностью, но у него на один электронный слой больше, чем у фтора; сильнее всех электроны связи притягивает фтор с его малым радиусом.",
        "ar": "الكلور هالوجين عالي السالبية الكهربائية أيضاً، لكنه يزيد على الفلور بغلاف واحد؛ والعنصر الأشد جذباً لإلكترونات الرابطة هو الفلور الأصغر حجماً.",
        "zh": "氯也是电负性很大的卤素，但比氟多一个电子层；吸引成键电子能力最强的是半径更小的氟。",
        "ku": "Klor jî halojeneke pir elektronegatîf e, lê qateke wê ji florê zêdetir heye; elementa ku elektronên girêdanê herî xurt dikişîne flora bi nîvçapa piçûk e."
      }
    },
    {
      "id": "u02-f09",
      "fact": {
        "tr": "Soy gazlar kararlı oktet/dublet yapısına sahip olduklarından elektron ilgisi ihmal edilecek kadar düşüktür.",
        "en": "Since noble gases have a stable octet/duet structure, their electron affinity is negligibly low.",
        "de": "Da Edelgase eine stabile Oktett-/Duett-Struktur haben, ist ihre Elektronenaffinität vernachlässigbar gering.",
        "fr": "Étant donné que les gaz rares ont une structure octet/duet stable, leur affinité électronique est négligeable.",
        "ru": "Благородные газы имеют устойчивую конфигурацию октета (у гелия — дублета), поэтому их сродство к электрону пренебрежимо мало.",
        "ar": "لأن للغازات النبيلة ترتيباً ثمانياً/ثنائياً مستقراً، فإن ألفتها الإلكترونية منخفضة إلى حدّ يمكن إهماله.",
        "zh": "稀有气体具有稳定的 8 电子(氦为 2 电子)结构，因此其电子亲和能小到可以忽略。",
        "ku": "Ji ber ku avahiya gazên esîl a oktet/dublet stabîl e, eleqeya wan a elektronê ewqas kêm e ku nayê hesibandin."
      },
      "trap": {
        "tr": "Helyum 8 değerlik elektronuna sahip bir soy gazdır.",
        "en": "Helium is a noble gas with 8 valence electrons.",
        "de": "Helium ist ein Edelgas mit 8 Valenzelektronen.",
        "fr": "L'hélium est un gaz rare possédant 8 électrons de valence.",
        "ru": "Гелий — благородный газ с 8 валентными электронами.",
        "ar": "الهيليوم غاز نبيل له 8 إلكترونات تكافؤ.",
        "zh": "氦是具有 8 个价电子的稀有气体。",
        "ku": "Helyûm gazeke esîl e ku 8 elektronên wê yên valansê hene."
      },
      "whyTrapIsFalse": {
        "tr": "Helyumun toplam 2 elektronu vardır; tek katmanı dolu olduğu için dublet kuralıyla kararlıdır. 8 değerlik elektronu (oktet) diğer soy gazlara aittir.",
        "en": "Helium has only 2 electrons in total; its single shell is full, so it is stable by the duplet rule. Eight valence electrons (octet) belong to the other noble gases.",
        "de": "Helium hat insgesamt nur 2 Elektronen; seine einzige Schale ist voll, es ist nach der Duettregel stabil. Acht Valenzelektronen (Oktett) haben die übrigen Edelgase.",
        "fr": "L'hélium ne possède que 2 électrons ; sa couche unique est pleine, il est stable selon la règle du duet. Les 8 électrons de valence (octet) concernent les autres gaz nobles.",
        "ru": "У гелия всего 2 электрона; его единственный электронный слой заполнен, и он устойчив по правилу дублета. Восемь валентных электронов (октет) — у остальных благородных газов.",
        "ar": "للهيليوم إلكترونان فقط، وغلافه الوحيد ممتلئ فهو مستقر وفق قاعدة الثنائية؛ أما إلكترونات التكافؤ الثمانية (قاعدة الثمانية) فهي لبقية الغازات النبيلة.",
        "zh": "氦总共只有 2 个电子，唯一的电子层已填满，达到 2 电子稳定结构；8 个价电子的稳定结构属于其他稀有气体。",
        "ku": "Helyûmê bi giştî tenê 2 elektron hene; qata wê ya yekane tije ye, loma li gorî qaîdeya dubletê stabîl e. 8 elektronên valansê (oktet) yên gazên esîl ên din in."
      }
    },
    {
      "id": "u02-f10",
      "fact": {
        "tr": "Aynı grupta yukarıdan aşağıya inildikçe katman sayısı arttığından atom yarıçapı büyür, iyonlaşma enerjisi genellikle azalır.",
        "en": "Going down a group the number of shells increases, so the atomic radius grows and the ionisation energy generally decreases.",
        "de": "In einer Gruppe nimmt von oben nach unten die Schalenzahl zu; der Atomradius wächst und die Ionisierungsenergie nimmt im Allgemeinen ab.",
        "fr": "En descendant un groupe, le nombre de couches augmente : le rayon atomique croît et l'énergie d'ionisation diminue en général.",
        "ru": "Вниз по группе число электронных слоёв растёт, поэтому радиус атома увеличивается, а энергия ионизации, как правило, уменьшается.",
        "ar": "عند النزول في المجموعة يزداد عدد الأغلفة، فيزداد نصف القطر الذري وتقل طاقة التأين عموماً.",
        "zh": "同族从上到下电子层数增多，原子半径增大，电离能一般减小。",
        "ku": "Di heman komê de ji jor ber bi jêr hejmara qatan zêde dibe, loma nîvçapa atomê mezin dibe û enerjiya îyonîzasyonê bi giştî kêm dibe."
      },
      "trap": {
        "tr": "Aynı grupta yukarıdan aşağıya inildikçe katman sayısı arttığı için atom yarıçapı küçülür.",
        "en": "Going down a group the atomic radius decreases because the number of shells increases.",
        "de": "In einer Gruppe nimmt der Atomradius von oben nach unten ab, weil die Schalenzahl zunimmt.",
        "fr": "En descendant un groupe, le rayon atomique diminue parce que le nombre de couches augmente.",
        "ru": "Вниз по группе радиус атома уменьшается, потому что растёт число электронных слоёв.",
        "ar": "عند النزول في المجموعة يقل نصف القطر الذري لأن عدد الأغلفة يزداد.",
        "zh": "同族从上到下由于电子层数增多，原子半径减小。",
        "ku": "Di heman komê de ji jor ber bi jêr, ji ber ku hejmara qatan zêde dibe, nîvçapa atomê piçûk dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Katman sayısı arttıkça en dıştaki elektronlar çekirdekten uzaklaşır; bu nedenle grupta aşağı inildikçe atom yarıçapı küçülmez, büyür.",
        "en": "As the number of shells grows, the outermost electrons lie farther from the nucleus, so going down a group the atomic radius does not shrink but grows.",
        "de": "Mit zunehmender Schalenzahl liegen die äußersten Elektronen weiter vom Kern entfernt; in einer Gruppe nimmt der Atomradius nach unten daher nicht ab, sondern zu.",
        "fr": "Quand le nombre de couches augmente, les électrons externes sont plus éloignés du noyau ; en descendant un groupe, le rayon atomique ne diminue donc pas, il augmente.",
        "ru": "С ростом числа слоёв внешние электроны находятся дальше от ядра, поэтому вниз по группе радиус атома не уменьшается, а увеличивается.",
        "ar": "بازدياد عدد الأغلفة تبتعد الإلكترونات الخارجية عن النواة، لذلك لا يقل نصف القطر الذري عند النزول في المجموعة بل يزداد.",
        "zh": "电子层数增多时，最外层电子离原子核更远，所以同族从上到下原子半径不是减小而是增大。",
        "ku": "Her ku hejmara qatan zêde dibe, elektronên derveyî ji navokê dûr dikevin; loma di komê de ber bi jêr nîvçapa atomê piçûk nabe, mezin dibe."
      }
    },
    {
      "id": "u02-f11",
      "fact": {
        "tr": "Katyon oluşurken elektron verildiği için tanecik yarıçapı daima küçülür.",
        "en": "Since electrons are given away when a cation is formed, the particle radius always decreases.",
        "de": "Da bei der Bildung eines Kations Elektronen abgegeben werden, nimmt der Teilchenradius immer ab.",
        "fr": "Étant donné que des électrons sont cédés lors de la formation d’un cation, le rayon des particules diminue toujours.",
        "ru": "При образовании катиона атом отдаёт электроны, поэтому радиус частицы всегда уменьшается.",
        "ar": "لأن الذرة تفقد إلكترونات عند تكوّن الكاتيون، يصغر نصف قطر الدقيقة دائماً.",
        "zh": "形成阳离子时失去电子，因此微粒半径总是减小。",
        "ku": "Ji ber ku dema katyon çêdibe elektron tên dayîn, nîvçapa perçeyê her tim piçûk dibe."
      },
      "trap": {
        "tr": "Katyon oluşurken elektron başına düşen çekim kuvveti azalır.",
        "en": "When a cation forms, the nuclear attraction per electron decreases.",
        "de": "Bei der Bildung eines Kations nimmt die Anziehungskraft pro Elektron ab.",
        "fr": "Lors de la formation d'un cation, la force d'attraction par électron diminue.",
        "ru": "При образовании катиона сила притяжения, приходящаяся на один электрон, уменьшается.",
        "ar": "عند تكوّن الكاتيون تقل قوة الجذب لكل إلكترون.",
        "zh": "形成阳离子时，每个电子受到的核引力减小。",
        "ku": "Dema katyon çêdibe, hêza kişandinê ya ku dikeve ser her elektronekê kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Proton sayısı değişmeden elektron sayısı azaldığı için elektron başına düşen çekim artar; katyonun yarıçapının küçülmesinin nedeni de budur.",
        "en": "The proton number stays the same while the electron number falls, so the attraction per electron increases; that is exactly why a cation is smaller.",
        "de": "Die Protonenzahl bleibt gleich, die Elektronenzahl sinkt, daher steigt die Anziehung pro Elektron; genau deshalb ist ein Kation kleiner.",
        "fr": "Le nombre de protons ne change pas alors que celui des électrons diminue : l'attraction par électron augmente, c'est précisément pourquoi le cation est plus petit.",
        "ru": "Число протонов не меняется, а электронов становится меньше, поэтому притяжение на один электрон возрастает; именно поэтому катион меньше атома.",
        "ar": "يبقى عدد البروتونات ثابتاً بينما يقل عدد الإلكترونات، فيزداد الجذب الواقع على كل إلكترون، وهذا سبب صغر حجم الأيون الموجب.",
        "zh": "质子数不变而电子数减少，每个电子受到的吸引增大，这正是阳离子半径变小的原因。",
        "ku": "Hejmara protonan naguhere, lê hejmara elektronan kêm dibe; loma kişandina li ser her elektronekê zêde dibe. Sedema piçûkbûna katyonê jî ev e."
      }
    },
    {
      "id": "u02-f12",
      "fact": {
        "tr": "Anyon oluşurken elektron alındığı için elektron başına düşen çekim kuvveti azalır, yarıçap büyür.",
        "en": "Since an electron is gained when an anion forms, the attractive force per electron decreases and the radius increases.",
        "de": "Da bei der Bildung eines Anions ein Elektron aufgenommen wird, nimmt die Anziehungskraft pro Elektron ab und der Radius nimmt zu.",
        "fr": "Comme un électron est capté lors de la formation d'un anion, la force d'attraction par électron diminue et le rayon augmente.",
        "ru": "При образовании аниона атом принимает электроны, поэтому притяжение, приходящееся на один электрон, ослабевает и радиус увеличивается.",
        "ar": "لأن الذرة تكتسب إلكترونات عند تكوّن الأنيون، تقل قوة الجذب الواقعة على كل إلكترون ويزداد نصف القطر.",
        "zh": "形成阴离子时获得电子，因此每个电子受到的引力减小，半径增大。",
        "ku": "Ji ber ku dema anyon çêdibe elektron tê wergirtin, hêza kişandinê ya ku dikeve ser her elektronekê kêm dibe û nîvçap mezin dibe."
      },
      "trap": {
        "tr": "Anyon oluşurken çekirdekteki proton sayısı artar.",
        "en": "As anion forms, the number of protons in the nucleus increases.",
        "de": "Wenn sich ein Anion bildet, erhöht sich die Anzahl der Protonen im Kern.",
        "fr": "À mesure que l’anion se forme, le nombre de protons dans le noyau augmente.",
        "ru": "При образовании аниона число протонов в ядре увеличивается.",
        "ar": "عند تكوّن الأنيون يزداد عدد البروتونات في النواة.",
        "zh": "形成阴离子时，原子核中的质子数增加。",
        "ku": "Dema anyon çêdibe, hejmara protonên di navokê de zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "İyon oluşumunda yalnızca elektron sayısı değişir; çekirdekteki proton sayısı kimyasal olaylarda değişmez.",
        "en": "Only the number of electrons changes when an ion forms; the number of protons in the nucleus never changes in chemical processes.",
        "de": "Bei der Ionenbildung ändert sich nur die Elektronenzahl; die Protonenzahl im Kern ändert sich bei chemischen Vorgängen nicht.",
        "fr": "Lors de la formation d'un ion, seul le nombre d'électrons change ; le nombre de protons du noyau ne varie pas au cours des transformations chimiques.",
        "ru": "При образовании иона меняется только число электронов; число протонов в ядре в химических процессах не меняется.",
        "ar": "عند تكوّن الأيون يتغير عدد الإلكترونات فقط، أما عدد البروتونات في النواة فلا يتغير في التفاعلات الكيميائية.",
        "zh": "形成离子时只有电子数改变，原子核中的质子数在化学变化中不变。",
        "ku": "Di çêbûna îyonê de tenê hejmara elektronan diguhere; hejmara protonên navokê di bûyerên kîmyewî de naguhere."
      }
    },
    {
      "id": "u02-f13",
      "fact": {
        "tr": "Mendeleyev periyodik tabloyu atom kütlelerine göre, Moseley ise atom numaralarına (proton sayısına) göre düzenlemiştir.",
        "en": "Mendeleev arranged the periodic table according to atomic masses, and Moseley arranged it according to atomic numbers (number of protons).",
        "de": "Mendeleev ordnete das Periodensystem nach Atommassen und Moseley nach Atomzahlen (Anzahl der Protonen).",
        "fr": "Mendeleïev a organisé le tableau périodique selon les masses atomiques, et Moseley l'a organisé selon les numéros atomiques (nombre de protons).",
        "ru": "Менделеев расположил элементы в периодической таблице по атомным массам, а Мозли — по порядковым номерам (числу протонов).",
        "ar": "رتّب مندلييف الجدول الدوري حسب الكتل الذرية، ورتّبه موزلي حسب الأعداد الذرية (عدد البروتونات).",
        "zh": "门捷列夫按原子量排列元素周期表，莫斯莱则按原子序数（质子数）排列。",
        "ku": "Mendeleyev tabloya periyodîk li gorî girseyên atomî, Moseley jî li gorî hejmarên atomî (hejmara protonan) rêz kir."
      },
      "trap": {
        "tr": "Moseley periyodik cetveli nötron sayılarına göre dizmiştir.",
        "en": "Moseley arranged the periodic table according to the number of neutrons.",
        "de": "Moseley ordnete das Periodensystem nach der Anzahl der Neutronen.",
        "fr": "Moseley a organisé le tableau périodique en fonction du nombre de neutrons.",
        "ru": "Мозли расположил элементы в периодической таблице по числу нейтронов.",
        "ar": "رتّب موزلي الجدول الدوري حسب أعداد النيوترونات.",
        "zh": "莫斯莱按中子数排列了元素周期表。",
        "ku": "Moseley tabloya periyodîk li gorî hejmara notronan rêz kir."
      },
      "whyTrapIsFalse": {
        "tr": "Moseley X-ışını çalışmalarıyla elementleri proton sayısına (atom numarasına) göre sıralamıştır; nötron sayısı aynı elementin izotoplarında bile farklı olduğundan sıralama ölçütü olamaz.",
        "en": "Using X-ray studies, Moseley ordered the elements by proton number (atomic number); the neutron number differs even between isotopes of one element, so it cannot be an ordering criterion.",
        "de": "Moseley ordnete die Elemente mit Röntgenuntersuchungen nach der Protonenzahl (Ordnungszahl); die Neutronenzahl unterscheidet sich schon bei Isotopen eines Elements und taugt nicht als Ordnungskriterium.",
        "fr": "Grâce aux rayons X, Moseley a classé les éléments selon le nombre de protons (numéro atomique) ; le nombre de neutrons varie même entre isotopes d'un même élément et ne peut servir de critère.",
        "ru": "Мозли на основе рентгеновских спектров расположил элементы по числу протонов (порядковому номеру); число нейтронов различается даже у изотопов одного элемента, поэтому оно не может служить критерием.",
        "ar": "رتّب موزلي العناصر بدراسات الأشعة السينية وفق عدد البروتونات (العدد الذري)؛ أما عدد النيوترونات فيختلف حتى بين نظائر العنصر الواحد فلا يصلح معياراً للترتيب.",
        "zh": "莫斯莱通过 X 射线研究，按质子数（原子序数）排列元素；同一元素的同位素中子数都不同，因此中子数不能作为排列依据。",
        "ku": "Moseley bi lêkolînên tîrêjên X element li gorî hejmara protonan (hejmara atomî) rêz kirin; ji ber ku hejmara notronan di îzotopên heman elementê de jî cuda ye, nikare bibe pîvana rêzkirinê."
      }
    },
    {
      "id": "u02-f14",
      "fact": {
        "tr": "Halojenler 7A grubu elementleridir ve bileşiklerinde -1 ile +7 arasında değerlik alabilir (Flor hariç, F sadece -1 alır).",
        "en": "Halogens are group 7A elements and can take a valence of -1 to +7 in their compounds (except for Fluorine, F can only take -1).",
        "de": "Halogene sind Elemente der Gruppe 7A und können in ihren Verbindungen eine Wertigkeit von -1 bis +7 annehmen (mit Ausnahme von Fluor kann F nur -1 annehmen).",
        "fr": "Les halogènes sont des éléments du groupe 7A et peuvent prendre une valence de -1 à +7 dans leurs composés (sauf pour le fluor, F ne peut prendre que -1).",
        "ru": "Галогены — элементы группы 7A; в соединениях они проявляют степени окисления от -1 до +7 (кроме фтора: F проявляет только -1).",
        "ar": "الهالوجينات عناصر المجموعة 7A، ويمكن أن تأخذ في مركباتها تكافؤات من -1 إلى +7 (باستثناء الفلور F الذي لا يأخذ إلا -1).",
        "zh": "卤素是 7A 族元素，在化合物中的化合价可在 -1 到 +7 之间(氟除外，F 只显 -1 价)。",
        "ku": "Halojen elementên koma 7A ne û di pêkhateyên xwe de dikarin valansên ji -1 heta +7 bigirin (ji bilî florê: F tenê -1 digire)."
      },
      "trap": {
        "tr": "Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.",
        "en": "Fluorine can reach the +7 oxidation state in its compounds.",
        "de": "Fluor kann in seinen Verbindungen die Oxidationsstufe +7 erreichen.",
        "fr": "Le fluor peut atteindre l'état d'oxydation +7 dans ses composés.",
        "ru": "Фтор в своих соединениях может проявлять степень окисления +7.",
        "ar": "يمكن أن يصل الفلور في مركباته إلى عدد التأكسد +7.",
        "zh": "氟在化合物中可以显 +7 价。",
        "ku": "Flor di pêkhateyên xwe de dikare bigihîje hejmara oksîdasyonê ya +7."
      },
      "whyTrapIsFalse": {
        "tr": "Flor en elektronegatif element olduğundan bağ elektronlarını her zaman kendine çeker; bu yüzden bileşiklerinde yalnızca -1 değerlik alır, pozitif değerlik almaz.",
        "en": "Fluorine is the most electronegative element, so it always pulls the bonding electrons towards itself; therefore it shows only -1 in compounds and never a positive value.",
        "de": "Fluor ist das elektronegativste Element und zieht die Bindungselektronen immer zu sich; daher hat es in Verbindungen nur die Wertigkeit -1, nie eine positive.",
        "fr": "Le fluor, élément le plus électronégatif, attire toujours vers lui les électrons de liaison ; il ne prend donc que la valence -1 dans ses composés, jamais une valeur positive.",
        "ru": "Фтор — самый электроотрицательный элемент и всегда оттягивает электроны связи к себе, поэтому в соединениях он проявляет только степень окисления -1 и никогда не бывает в положительной степени окисления.",
        "ar": "الفلور أعلى العناصر سالبيةً كهربائية فيجذب إلكترونات الرابطة نحوه دائماً، ولذلك لا يأخذ في مركباته إلا التكافؤ -1 ولا يأخذ قيمة موجبة.",
        "zh": "氟是电负性最大的元素，总是把成键电子拉向自己，所以在化合物中只显 -1 价，不会显正价。",
        "ku": "Flor elementa herî elektronegatîf e, loma elektronên girêdanê her tim ber bi xwe dikişîne; ji ber vê yekê di pêkhateyan de tenê valansa -1 digire, qet valansa erênî nagire."
      }
    },
    {
      "id": "u02-f15",
      "fact": {
        "tr": "Alkali metaller (1A) en aktif metallerdir ve suyla şiddetli tepkime vererek H2 gazı açığa çıkarır.",
        "en": "Alkali metals (1A) are the most active metals and react violently with water, releasing H2 gas.",
        "de": "Alkalimetalle (1A) sind die aktivsten Metalle und reagieren heftig mit Wasser unter Freisetzung von H2-Gas.",
        "fr": "Les métaux alcalins (1A) sont les métaux les plus actifs et réagissent violemment avec l'eau, libérant du gaz H2.",
        "ru": "Щелочные металлы (1A) — самые активные металлы; они бурно реагируют с водой с выделением водорода H2.",
        "ar": "الفلزات القلوية (1A) أنشط الفلزات، وتتفاعل بعنف مع الماء مطلقةً غاز H2.",
        "zh": "碱金属(1A 族)是最活泼的金属，与水剧烈反应，放出氢气。",
        "ku": "Metalên alkalî (1A) metalên herî çalak in; bi avê re bi tundî dikevin reaksiyonê û gaza H2 derdixin."
      },
      "trap": {
        "tr": "Alkali metaller doğada serbest hâlde, saf metal olarak bol miktarda bulunur.",
        "en": "Alkali metals are abundant in nature as pure metals.",
        "de": "Alkalimetalle kommen in der Natur als reine Metalle reichlich vor.",
        "fr": "Les métaux alcalins sont abondants dans la nature sous forme de métaux purs.",
        "ru": "Щелочные металлы в больших количествах встречаются в природе в свободном виде, как чистые металлы.",
        "ar": "توجد الفلزات القلوية في الطبيعة بكثرة في صورة فلزات حرة نقية.",
        "zh": "碱金属在自然界中以游离态（纯金属）大量存在。",
        "ku": "Metalên alkalî di xwezayê de bi rewşa azad, wekî metalên paqij, bi mîqdareke zêde tên dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Alkali metaller çok aktif olduğundan havadaki oksijen ve suyla hemen tepkimeye girer; doğada serbest değil, yalnızca bileşikleri (örn. NaCl) hâlinde bulunur.",
        "en": "Alkali metals are so reactive that they react at once with oxygen and water in the air; in nature they occur only in compounds (e.g. NaCl), not free.",
        "de": "Alkalimetalle sind so reaktiv, dass sie sofort mit Sauerstoff und Wasser reagieren; in der Natur kommen sie nur in Verbindungen (z. B. NaCl) vor, nicht gediegen.",
        "fr": "Les métaux alcalins sont si réactifs qu'ils réagissent aussitôt avec l'oxygène et l'eau ; dans la nature on ne les trouve que sous forme de composés (ex. NaCl), jamais libres.",
        "ru": "Щелочные металлы настолько активны, что сразу реагируют с кислородом и влагой воздуха; в природе они встречаются не в свободном виде, а только в виде соединений (например, NaCl).",
        "ar": "الفلزات القلوية نشطة جداً فتتفاعل فوراً مع أكسجين الهواء والماء، ولذلك لا توجد في الطبيعة حرة بل على شكل مركبات فقط (مثل NaCl).",
        "zh": "碱金属非常活泼，会立即与空气中的氧气和水反应，因此在自然界中只以化合物(如 NaCl)的形式存在，不以游离态存在。",
        "ku": "Metalên alkalî pir çalak in û di cih de bi oksîjen û ava di hewayê de dikevin reaksiyonê; di xwezayê de ne azad, tenê wekî pêkhate (mînak NaCl) tên dîtin."
      }
    },
    {
      "id": "u02-f16",
      "fact": {
        "tr": "Toprak alkali metaller (2A) bileşiklerinde daima +2 değerlik alır.",
        "en": "Alkaline earth metals (2A) always take a +2 valence in their compounds.",
        "de": "Erdalkalimetalle (2A) nehmen in ihren Verbindungen immer eine Wertigkeit von +2 an.",
        "fr": "Les métaux alcalino-terreux (2A) prennent toujours une valence +2 dans leurs composés.",
        "ru": "Щёлочноземельные металлы (2A) в соединениях всегда проявляют степень окисления +2.",
        "ar": "تأخذ الفلزات القلوية الترابية (2A) في مركباتها التكافؤ +2 دائماً.",
        "zh": "碱土金属(2A 族)在化合物中总是显 +2 价。",
        "ku": "Metalên alkalî-axî (2A) di pêkhateyên xwe de her tim valansa +2 digirin."
      },
      "trap": {
        "tr": "Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.",
        "en": "Magnesium forms stable +1 and +2 ions in its compounds.",
        "de": "Magnesium bildet in seinen Verbindungen stabile +1- und +2-Ionen.",
        "fr": "Le magnésium forme des ions stables +1 et +2 dans ses composés.",
        "ru": "Магний в соединениях образует устойчивые ионы с зарядами +1 и +2.",
        "ar": "يكوّن المغنيسيوم في مركباته أيونات مستقرة +1 و+2.",
        "zh": "镁在化合物中能形成稳定的 +1 价和 +2 价离子。",
        "ku": "Magnezyûm di pêkhateyên xwe de îyonên stabîl ên +1 û +2 çêdike."
      },
      "whyTrapIsFalse": {
        "tr": "Magnezyum 2 değerlik elektronunu vererek soy gaz düzenine ulaşır; +1 yüklü iyon kararlı bir düzen oluşturmadığından bileşiklerinde +2 değerlik alır.",
        "en": "Magnesium reaches a noble-gas arrangement by losing its 2 valence electrons; a +1 ion would not have a stable arrangement, so magnesium is +2 in its compounds.",
        "de": "Magnesium erreicht durch Abgabe seiner 2 Valenzelektronen die Edelgaskonfiguration; ein +1-Ion hätte keine stabile Anordnung, daher ist Magnesium in Verbindungen +2.",
        "fr": "Le magnésium atteint la configuration d'un gaz noble en cédant ses 2 électrons de valence ; un ion +1 n'aurait pas de configuration stable, le magnésium est donc +2 dans ses composés.",
        "ru": "Магний, отдав 2 валентных электрона, приобретает конфигурацию благородного газа; ион с зарядом +1 такой устойчивой конфигурации не имеет, поэтому в соединениях магний проявляет степень окисления +2.",
        "ar": "يصل المغنيسيوم إلى ترتيب الغاز النبيل بفقد إلكتروني التكافؤ؛ والأيون +1 لا يملك ترتيباً مستقراً، لذلك يكون المغنيسيوم +2 في مركباته.",
        "zh": "镁失去 2 个价电子后达到稀有气体的电子排布；+1 价离子没有稳定的排布，所以镁在化合物中显 +2 价。",
        "ku": "Magnezyûm bi dayîna 2 elektronên xwe yên valansê digihîje rêzkirina gaza esîl; îyona +1 rêzkirineke stabîl çênake, loma magnezyûm di pêkhateyan de valansa +2 digire."
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
        "ru": "Изотоп",
        "ar": "النظائر",
        "zh": "同位素",
        "ku": "Îzotop"
      },
      "conceptB": {
        "tr": "İzoton",
        "en": "isotone",
        "de": "isoton",
        "fr": "isotone",
        "ru": "Изотон",
        "ar": "الأيزوتونات",
        "zh": "同中子素",
        "ku": "Îzoton"
      },
      "distinction": {
        "tr": "İzotopta proton sayısı aynı, nötron sayısı farklıdır; izotonda nötron sayısı aynı, proton sayısı farklıdır.",
        "en": "In the isotope, the number of protons is the same and the number of neutrons is different; The number of neutrons in the isotone is the same, but the number of protons is different.",
        "de": "Im Isotop ist die Anzahl der Protonen gleich und die Anzahl der Neutronen unterschiedlich; Die Anzahl der Neutronen im Isoton ist gleich, aber die Anzahl der Protonen ist unterschiedlich.",
        "fr": "Dans l'isotope, le nombre de protons est le même et le nombre de neutrons est différent ; Le nombre de neutrons dans l’isotone est le même, mais le nombre de protons est différent.",
        "ru": "Изотоп обозначает атомы с одинаковым числом протонов и разным числом нейтронов; изотон обозначает атомы с одинаковым числом нейтронов и разным числом протонов.",
        "ar": "النظائر: ذرات متساوية في عدد البروتونات مختلفة في عدد النيوترونات؛ أما الأيزوتونات فذرات متساوية في عدد النيوترونات مختلفة في عدد البروتونات.",
        "zh": "同位素的质子数相同、中子数不同；而同中子素的中子数相同、质子数不同。",
        "ku": "Di îzotopê de hejmara protonan wekhev e, hejmara notronan cuda ye; di îzotonê de hejmara notronan wekhev e, hejmara protonan cuda ye."
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
        "ku": "Enerjiya Îyonîzasyonê"
      },
      "conceptB": {
        "tr": "Elektron İlgisi",
        "en": "Electron Affinity",
        "de": "Elektronenaffinität",
        "fr": "Affinité électronique",
        "ru": "Сродство к электрону",
        "ar": "الألفة الإلكترونية",
        "zh": "电子亲和能",
        "ku": "Eleqeya Elektronê"
      },
      "distinction": {
        "tr": "İyonlaşma enerjisi, gaz hâlindeki atomdan elektron koparmak için gereken enerjidir; elektron ilgisi ise gaz hâlindeki atomun elektron alması sırasındaki enerji değişimidir.",
        "en": "Ionization energy is the energy required to remove an electron from a gaseous atom; electron affinity is the energy change when a gaseous atom gains an electron.",
        "de": "Die Ionisierungsenergie ist die Energie, die nötig ist, um ein Elektron aus einem gasförmigen Atom zu entfernen; die Elektronenaffinität ist die Energieänderung bei der Aufnahme eines Elektrons durch ein gasförmiges Atom.",
        "fr": "L'énergie d'ionisation est l'énergie nécessaire pour arracher un électron à un atome à l'état gazeux ; l'affinité électronique est la variation d'énergie lorsqu'un atome à l'état gazeux capte un électron.",
        "ru": "Энергия ионизации — энергия, необходимая для отрыва электрона от атома в газообразном состоянии; сродство к электрону — изменение энергии при присоединении электрона к атому в газообразном состоянии.",
        "ar": "طاقة التأين: الطاقة اللازمة لنزع إلكترون من ذرة في الحالة الغازية؛ الألفة الإلكترونية: التغير في الطاقة عند اكتساب ذرة في الحالة الغازية إلكتروناً.",
        "zh": "电离能是气态原子失去一个电子所需吸收的能量；而电子亲和能是气态原子得到一个电子时的能量变化。",
        "ku": "Enerjiya îyonîzasyonê ew enerjî ye ku ji bo qetandina elektronekê ji atoma di rewşa gazê de pêwîst e; eleqeya elektronê jî guherîna enerjiyê ye dema atoma di rewşa gazê de elektronekê werdigire."
      }
    },
    {
      "id": "u02-c03",
      "conceptA": {
        "tr": "Thomson Atom Modeli",
        "en": "Thomson Atomic Model",
        "de": "Thomsonsches Atommodell",
        "fr": "Modèle atomique de Thomson",
        "ru": "Модель Томсона",
        "ar": "نموذج طومسون الذري",
        "zh": "汤姆孙原子模型",
        "ku": "Modela Thomson"
      },
      "conceptB": {
        "tr": "Rutherford Atom Modeli",
        "en": "Rutherford Atomic Model",
        "de": "Rutherfordsches Atommodell",
        "fr": "Modèle atomique de Rutherford",
        "ru": "Модель Резерфорда",
        "ar": "نموذج رذرفورد الذري",
        "zh": "卢瑟福原子模型",
        "ku": "Modela Rutherford"
      },
      "distinction": {
        "tr": "Thomson atom modelinde pozitif yük atomun tamamına homojen dağılmıştır; Rutherford atom modelinde ise pozitif yük ve kütlenin neredeyse tamamı küçük bir çekirdekte toplanmıştır.",
        "en": "In the Thomson atomic model, positive charge is spread uniformly throughout the atom; in the Rutherford model, the positive charge and almost all of the mass are concentrated in a tiny nucleus.",
        "de": "Thomsonsches Atommodell: Die positive Ladung ist gleichmäßig im Atom verteilt; im Rutherford-Modell sind die positive Ladung und fast die gesamte Masse in einem winzigen Kern konzentriert.",
        "fr": "Modèle atomique de Thomson : la charge positive est répartie uniformément dans l'atome ; dans le modèle de Rutherford, la charge positive et presque toute la masse sont concentrées dans un minuscule noyau.",
        "ru": "Модель Томсона описывает положительный заряд, равномерно распределённый по всему атому; модель Резерфорда описывает маленькое ядро, в котором сосредоточены положительный заряд и почти вся масса атома.",
        "ar": "نموذج طومسون الذري: الشحنة الموجبة فيه موزعة بانتظام على الذرة كلها؛ أما في نموذج رذرفورد فتتركز الشحنة الموجبة وكل الكتلة تقريباً في نواة صغيرة جداً.",
        "zh": "汤姆孙原子模型中正电荷均匀分布在整个原子中；而卢瑟福原子模型中正电荷和几乎全部质量集中在很小的原子核里。",
        "ku": "Di modela Thomson de bara erênî bi awayekî homojen li seranserê atomê belav bûye; di modela Rutherford de jî bara erênî û hema hema hemû girse di navokeke pir piçûk de kom bûne."
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
        "zh": "同量素",
        "ku": "Atomên Îzobar"
      },
      "conceptB": {
        "tr": "İzoelektronik Türler",
        "en": "Isoelectronic Species",
        "de": "Isoelektronische Spezies",
        "fr": "Espèces isoélectroniques",
        "ru": "Изоэлектронные частицы",
        "ar": "الدقائق متساوية الإلكترونات",
        "zh": "等电子微粒",
        "ku": "Cureyên Îzoelektronîk"
      },
      "distinction": {
        "tr": "İzobarların kütle numaraları aynıdır; izoelektronik türlerin elektron sayıları ve dizilimleri aynıdır.",
        "en": "The mass numbers of the isobars are the same; The electron numbers and arrangements of isoelectronic species are the same.",
        "de": "Isobare Atome: gleiche Massenzahl; isoelektronische Spezies: gleiche Elektronenzahl und gleiche Elektronenanordnung.",
        "fr": "Atomes isobares : même nombre de masse ; espèces isoélectroniques : même nombre d'électrons et même configuration électronique.",
        "ru": "Изобарные атомы — атомы с одинаковыми массовыми числами; изоэлектронные частицы — частицы с одинаковым числом электронов и одинаковой электронной конфигурацией.",
        "ar": "ذرات الأيزوبار: ذرات أعدادها الكتلية متساوية؛ أما الدقائق متساوية الإلكترونات فدقائق أعداد إلكتروناتها وتوزيعها الإلكتروني متساوية.",
        "zh": "同量素的质量数相同；而等电子微粒的电子数和电子排布都相同。",
        "ku": "Atomên îzobar xwedî heman hejmara girseyê ne; cureyên îzoelektronîk xwedî heman hejmar û rêzkirina elektronan in."
      }
    },
    {
      "id": "u02-c05",
      "conceptA": {
        "tr": "Metaller",
        "en": "metals",
        "de": "Metalle",
        "fr": "métaux",
        "ru": "Металлы",
        "ar": "الفلزات",
        "zh": "金属元素",
        "ku": "Metal"
      },
      "conceptB": {
        "tr": "Ametaller",
        "en": "nonmetals",
        "de": "Nichtmetalle",
        "fr": "non-métaux",
        "ru": "Неметаллы",
        "ar": "اللافلزات",
        "zh": "非金属",
        "ku": "Nemetal"
      },
      "distinction": {
        "tr": "Metaller elektron vererek katyon oluşturur ve elektrik akımını iletir; ametaller bileşiklerinde genellikle elektron alarak anyon oluşturur ve katı hâlde genellikle elektriği iletmez (grafit istisnadır).",
        "en": "Metals form cations by losing electrons and conduct electricity; nonmetals usually form anions by gaining electrons in compounds and generally do not conduct in the solid state (graphite is an exception).",
        "de": "Metalle bilden durch Elektronenabgabe Kationen und leiten den Strom; Nichtmetalle bilden in Verbindungen meist durch Elektronenaufnahme Anionen und leiten im festen Zustand meist nicht (Graphit ist eine Ausnahme).",
        "fr": "Les métaux forment des cations en cédant des électrons et conduisent le courant ; les éléments non métalliques forment généralement des anions en captant des électrons et ne conduisent généralement pas à l'état solide (le graphite fait exception).",
        "ru": "Металлы — элементы, которые отдают электроны, образуя катионы, и проводят электрический ток; неметаллы — элементы, которые в соединениях обычно принимают электроны, образуя анионы, и в твёрдом состоянии, как правило, не проводят ток (исключение — графит).",
        "ar": "الفلزات: عناصر تكوّن أيونات موجبة بفقد الإلكترونات وتوصل الكهرباء؛ أما اللافلزات فعناصر تكوّن غالباً أيونات سالبة باكتساب الإلكترونات في مركباتها، ولا توصل الكهرباء عادة في الحالة الصلبة (الجرافيت استثناء).",
        "zh": "金属元素失去电子形成阳离子，其单质能导电；非金属则在化合物中通常得到电子形成阴离子，固态时一般不导电（石墨例外）。",
        "ku": "Metal bi dayîna elektronan katyon çêdikin û elektrîkê diguhezînin; nemetal di pêkhateyan de bi giştî bi wergirtina elektronan anyon çêdikin û di rewşa hişk de bi giştî elektrîkê naguhezînin (grafît awarte ye)."
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
        "ar": "السالبية الكهربائية",
        "zh": "电负性",
        "ku": "Elektronegatîfî"
      },
      "conceptB": {
        "tr": "Metalik Aktiflik",
        "en": "Metallic Activity",
        "de": "Metallische Aktivität",
        "fr": "Activité métallique",
        "ru": "Металлическая активность",
        "ar": "النشاط الفلزي",
        "zh": "金属活动性",
        "ku": "Çalakiya Metalîk"
      },
      "distinction": {
        "tr": "Elektronegatiflik bağ elektronlarını çekme yeteneğidir ve sağ-yukarı artar; metalik aktiflik elektron verme eğilimidir ve sol-aşağı artar.",
        "en": "Electronegativity is the ability to attract bonding electrons and increases toward the upper right; metallic activity is the tendency to lose electrons and increases toward the lower left.",
        "de": "Die Elektronegativität ist die Fähigkeit, Bindungselektronen anzuziehen, und nimmt nach rechts oben zu; die metallische Aktivität ist die Neigung, Elektronen abzugeben, und nimmt nach links unten zu.",
        "fr": "L'électronégativité est la capacité d'attirer les électrons de liaison et augmente vers le haut à droite ; l'activité métallique est la tendance à céder des électrons et augmente vers le bas à gauche.",
        "ru": "Электроотрицательность — способность атома притягивать электроны связи, которая возрастает по таблице вправо и вверх; металлическая активность — склонность отдавать электроны, которая возрастает влево и вниз.",
        "ar": "السالبية الكهربائية: قدرة الذرة على جذب إلكترونات الرابطة، وتزداد نحو اليمين والأعلى؛ أما النشاط الفلزي فهو الميل إلى فقد الإلكترونات ويزداد نحو اليسار والأسفل.",
        "zh": "电负性是原子吸引成键电子的能力，在周期表中向右上方增大；而金属活动性是原子失去电子的倾向，向左下方增大。",
        "ku": "Elektronegatîfî şiyana kişandina elektronên girêdanê ye û ber bi rast-jor ve zêde dibe; çalakiya metalîk meyla dayîna elektronan e û ber bi çep-jêr ve zêde dibe."
      }
    },
    {
      "id": "u02-c07",
      "conceptA": {
        "tr": "Katyon Yarıçapı",
        "en": "Cation Radius",
        "de": "Kationenradius",
        "fr": "Rayon des cations",
        "ru": "Радиус катиона",
        "ar": "نصف قطر الكاتيون",
        "zh": "阳离子半径",
        "ku": "Nîvçapa Katyonê"
      },
      "conceptB": {
        "tr": "Anyon Yarıçapı",
        "en": "Anion Radius",
        "de": "Anionenradius",
        "fr": "Rayon anionique",
        "ru": "Радиус аниона",
        "ar": "نصف قطر الأنيون",
        "zh": "阴离子半径",
        "ku": "Nîvçapa Anyonê"
      },
      "distinction": {
        "tr": "Katyon yarıçapı, elektron veren nötr atomun yarıçapından küçüktür; anyon yarıçapı ise elektron alan nötr atomun yarıçapından büyüktür.",
        "en": "The cation radius is smaller than the radius of the neutral atom that lost the electrons; the anion radius is larger than the radius of the neutral atom that gained the electrons.",
        "de": "Der Kationenradius ist kleiner als der Radius des neutralen Atoms, das die Elektronen abgegeben hat; der Anionenradius ist größer als der Radius des neutralen Atoms, das die Elektronen aufgenommen hat.",
        "fr": "Rayon des cations : valeur plus petite que le rayon de l'atome neutre d'origine ; rayon anionique : valeur plus grande que le rayon de l'atome neutre d'origine.",
        "ru": "Радиус катиона меньше радиуса нейтрального атома, отдавшего электроны; радиус аниона больше радиуса нейтрального атома, принявшего электроны.",
        "ar": "نصف قطر الكاتيون أصغر من نصف قطر الذرة المتعادلة التي فقدت الإلكترونات؛ ونصف قطر الأنيون أكبر من نصف قطر الذرة المتعادلة التي اكتسبت الإلكترونات.",
        "zh": "阳离子半径小于失去电子前的中性原子半径；而阴离子半径大于得到电子前的中性原子半径。",
        "ku": "Nîvçapa katyonê ji nîvçapa atoma bêalî ya ku elektron dane piçûktir e; nîvçapa anyonê ji nîvçapa atoma bêalî ya ku elektron wergirtine mezintir e."
      }
    },
    {
      "id": "u02-c08",
      "conceptA": {
        "tr": "Atom Numarası",
        "en": "Atomic Number",
        "de": "Ordnungszahl",
        "fr": "Numéro atomique",
        "ru": "Порядковый номер",
        "ar": "العدد الذري",
        "zh": "原子序数",
        "ku": "Hejmara Atomî"
      },
      "conceptB": {
        "tr": "Kütle Numarası",
        "en": "Mass Number",
        "de": "Massenzahl",
        "fr": "Nombre de masse",
        "ru": "Массовое число",
        "ar": "العدد الكتلي",
        "zh": "质量数",
        "ku": "Hejmara Girseyê"
      },
      "distinction": {
        "tr": "Atom numarası çekirdekteki proton sayısıdır; kütle numarası çekirdekteki proton ve nötron sayılarının toplamıdır.",
        "en": "The atomic number is the number of protons in the nucleus; the mass number is the sum of the numbers of protons and neutrons in the nucleus.",
        "de": "Die Ordnungszahl ist die Anzahl der Protonen im Kern; die Massenzahl ist die Summe aus Protonen- und Neutronenzahl im Kern.",
        "fr": "Le numéro atomique est le nombre de protons du noyau ; le nombre de masse est la somme des nombres de protons et de neutrons du noyau.",
        "ru": "Порядковый номер — число протонов в ядре; массовое число — сумма чисел протонов и нейтронов в ядре.",
        "ar": "العدد الذري هو عدد البروتونات في النواة؛ والعدد الكتلي هو مجموع أعداد البروتونات والنيوترونات في النواة.",
        "zh": "原子序数是原子核中的质子数；而质量数是原子核中质子数与中子数之和。",
        "ku": "Hejmara atomî hejmara protonên di navokê de ye; hejmara girseyê berhevoka hejmara proton û notronên di navokê de ye."
      }
    }
  ],
  "sequences": [
    {
      "id": "u02-s01",
      "title": {
        "tr": "Periyotta Soldan Sağa Gidildikçe Neden-Sonuç Zinciri",
        "en": "Cause-and-Effect Chain Across a Period (Left to Right)",
        "de": "Ursache-Wirkungs-Kette innerhalb einer Periode (von links nach rechts)",
        "fr": "Chaîne de cause à effet dans une période (de gauche à droite)",
        "ru": "Движение по периоду слева направо: причины и следствия",
        "ar": "سلسلة السبب والنتيجة في الدورة (من اليسار إلى اليمين)",
        "zh": "同一周期从左到右的因果链",
        "ku": "Zincîra Sedem-Encamê di Periyodê de (Ji Çepê ber bi Rastê)"
      },
      "steps": [
        {
          "tr": "Katman sayısı değişmezken proton sayısı (çekirdek yükü) artar",
          "en": "The number of protons (nuclear charge) increases while the number of shells stays the same",
          "de": "Die Protonenzahl (Kernladung) nimmt zu, während die Zahl der Schalen gleich bleibt",
          "fr": "Le nombre de protons (charge nucléaire) augmente alors que le nombre de couches reste le même",
          "ru": "Число протонов (заряд ядра) увеличивается, а число электронных слоёв не меняется",
          "ar": "يزداد عدد البروتونات (الشحنة النووية) مع بقاء عدد الأغلفة ثابتاً",
          "zh": "电子层数不变，质子数（核电荷数）增加",
          "ku": "Hejmara protonan (bara navokê) zêde dibe, lê hejmara qatan naguhere"
        },
        {
          "tr": "Çekirdeğin değerlik elektronlarına uyguladığı çekim kuvveti artar",
          "en": "The attraction of the nucleus for the valence electrons increases",
          "de": "Die Anziehung des Kerns auf die Valenzelektronen nimmt zu",
          "fr": "L'attraction exercée par le noyau sur les électrons de valence augmente",
          "ru": "Притяжение валентных электронов к ядру усиливается",
          "ar": "تزداد قوة جذب النواة لإلكترونات التكافؤ",
          "zh": "原子核对价电子的引力增强",
          "ku": "Hêza kişandinê ya navokê li ser elektronên valansê zêde dibe"
        },
        {
          "tr": "Daha kuvvetli çekilen değerlik elektronları çekirdeğe yaklaşır; atom yarıçapı küçülür",
          "en": "The more strongly attracted valence electrons are pulled closer to the nucleus; the atomic radius decreases",
          "de": "Die stärker angezogenen Valenzelektronen rücken näher an den Kern; der Atomradius nimmt ab",
          "fr": "Les électrons de valence, plus fortement attirés, se rapprochent du noyau ; le rayon atomique diminue",
          "ru": "Сильнее притягиваемые валентные электроны приближаются к ядру; радиус атома уменьшается",
          "ar": "تقترب إلكترونات التكافؤ المنجذبة بقوة أكبر من النواة؛ فيقل نصف القطر الذري",
          "zh": "受到更强吸引的价电子更靠近原子核，原子半径减小",
          "ku": "Elektronên valansê yên ku bi hêztir tên kişandin nêzîkî navokê dibin; nîvçapa atomê kêm dibe"
        },
        {
          "tr": "Çekirdeğe yaklaşan değerlik elektronunu koparmak zorlaşır; iyonlaşma enerjisi genellikle artar",
          "en": "Removing a valence electron that is now closer to the nucleus becomes harder; ionization energy generally increases",
          "de": "Ein dem Kern näher gerücktes Valenzelektron lässt sich schwerer abtrennen; die Ionisierungsenergie nimmt im Allgemeinen zu",
          "fr": "Arracher un électron de valence désormais plus proche du noyau devient plus difficile ; l'énergie d'ionisation augmente généralement",
          "ru": "Оторвать валентный электрон, оказавшийся ближе к ядру, становится труднее; энергия ионизации, как правило, растёт",
          "ar": "يصعب نزع إلكترون التكافؤ الذي صار أقرب إلى النواة؛ فتزداد طاقة التأين عموماً",
          "zh": "离核更近的价电子更难失去，电离能一般增大",
          "ku": "Qetandina elektrona valansê ya ku nêzîkî navokê bûye dijwartir dibe; enerjiya îyonîzasyonê bi giştî zêde dibe"
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
        "ru": "Исторические модели атома",
        "ar": "النماذج الذرية التاريخية",
        "zh": "原子模型的历史演变",
        "ku": "Modelên Atomê yên Dîrokî"
      },
      "steps": [
        {
          "tr": "Dalton atomu içi dolu, bölünemez bir küre olarak tanımladı",
          "en": "Dalton described the atom as a solid, indivisible sphere",
          "de": "Dalton beschrieb das Atom als massive, unteilbare Kugel",
          "fr": "Dalton a décrit l'atome comme une sphère pleine et indivisible",
          "ru": "Дальтон описал атом как сплошной неделимый шар",
          "ar": "وصف دالتون الذرة بأنها كرة مصمتة غير قابلة للتجزئة",
          "zh": "道尔顿把原子描述为不可再分的实心球",
          "ku": "Dalton atom wekî gogeke tijî û neperçebar pênase kir"
        },
        {
          "tr": "Thomson atomu, pozitif yüklü bir küreye gömülü elektronlar olarak tanımladı (üzümlü kek modeli)",
          "en": "Thomson described the atom as electrons embedded in a positively charged sphere (plum pudding model)",
          "de": "Thomson beschrieb das Atom als positiv geladene Kugel mit eingebetteten Elektronen (Rosinenkuchenmodell)",
          "fr": "Thomson a décrit l'atome comme une sphère chargée positivement dans laquelle sont incrustés des électrons (modèle du pudding aux raisins)",
          "ru": "Томсон описал атом как положительно заряженный шар с вкраплёнными в него электронами (модель «пудинга с изюмом»)",
          "ar": "وصف طومسون الذرة بأنها كرة موجبة الشحنة تنغرس فيها الإلكترونات (نموذج كعكة الزبيب)",
          "zh": "汤姆孙把原子描述为电子镶嵌在带正电的球体中（葡萄干布丁模型）",
          "ku": "Thomson atom wekî elektronên di nav gogeke bi bara erênî de bicihbûyî pênase kir (modela keka bi mewîj)"
        },
        {
          "tr": "Rutherford pozitif yükün ve kütlenin küçük bir çekirdekte toplandığını gösterdi (çekirdekli atom modeli)",
          "en": "Rutherford showed that the positive charge and the mass are concentrated in a small nucleus (nuclear model)",
          "de": "Rutherford zeigte, dass positive Ladung und Masse in einem kleinen Kern vereinigt sind (Kernmodell)",
          "fr": "Rutherford a montré que la charge positive et la masse sont concentrées dans un petit noyau (modèle nucléaire)",
          "ru": "Резерфорд показал, что положительный заряд и масса сосредоточены в маленьком ядре (ядерная модель)",
          "ar": "أثبت رذرفورد أن الشحنة الموجبة والكتلة تتركزان في نواة صغيرة (النموذج النووي)",
          "zh": "卢瑟福证明正电荷和质量集中在很小的原子核内（核式模型）",
          "ku": "Rutherford nîşan da ku bara erênî û girse di navokeke piçûk de kom bûne (modela bi navok)"
        },
        {
          "tr": "Bohr elektronların çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunduğunu öne sürdü",
          "en": "Bohr proposed that electrons occupy definite energy levels (orbits) around the nucleus",
          "de": "Bohr postulierte, dass sich die Elektronen auf bestimmten Energieniveaus (Bahnen) um den Kern befinden",
          "fr": "Bohr a proposé que les électrons occupent des niveaux d'énergie définis (orbites) autour du noyau",
          "ru": "Бор предположил, что электроны находятся на определённых энергетических уровнях (орбитах) вокруг ядра",
          "ar": "اقترح بور أن الإلكترونات توجد في مستويات طاقة محددة (مدارات) حول النواة",
          "zh": "玻尔提出电子处在原子核周围确定的能级（轨道）上",
          "ku": "Bohr pêşniyar kir ku elektron li dora navokê di astên enerjiyê yên diyar (rêgehan) de ne"
        }
      ]
    },
    {
      "id": "u02-s03",
      "title": {
        "tr": "Periyodik Sistemin Tarihsel Gelişimi",
        "en": "Historical Development of the Periodic Table",
        "de": "Historische Entwicklung des Periodensystems",
        "fr": "Développement historique du tableau périodique",
        "ru": "Историческое развитие периодической системы",
        "ar": "التطور التاريخي للجدول الدوري",
        "zh": "元素周期表的历史发展",
        "ku": "Pêşketina Dîrokî ya Tabloya Periyodîk"
      },
      "steps": [
        {
          "tr": "Döbereiner benzer özellikli elementleri üçlü gruplar (triadlar) hâlinde topladı",
          "en": "Döbereiner grouped similar elements into triads",
          "de": "Döbereiner fasste ähnliche Elemente in Triaden zusammen",
          "fr": "Döbereiner regroupa les éléments semblables en triades",
          "ru": "Дёберейнер объединил сходные элементы в триады",
          "ar": "جمع دوبراينر العناصر المتشابهة في مجموعات ثلاثية (ثلاثيات)",
          "zh": "德贝莱纳把性质相似的元素归为三元素组",
          "ku": "Döbereiner elementên bi taybetmendiyên wekhev di komên sêyî (trîad) de kom kirin"
        },
        {
          "tr": "Newlands elementleri artan atom kütlesine göre dizip her sekizinci elementte özelliklerin tekrarlandığını (oktavlar kuralı) gösterdi",
          "en": "Newlands ordered elements by increasing atomic mass and showed that properties repeat at every eighth element (law of octaves)",
          "de": "Newlands ordnete die Elemente nach steigender Atommasse und zeigte, dass sich die Eigenschaften bei jedem achten Element wiederholen (Oktavengesetz)",
          "fr": "Newlands classa les éléments par masse atomique croissante et montra que les propriétés se répètent tous les huit éléments (loi des octaves)",
          "ru": "Ньюлендс расположил элементы по возрастанию атомной массы и показал, что свойства повторяются у каждого восьмого элемента (закон октав)",
          "ar": "رتّب نيولاندز العناصر حسب تزايد الكتلة الذرية وبيّن أن الخواص تتكرر عند كل عنصر ثامن (قانون الثمانيات)",
          "zh": "纽兰兹按原子量递增排列元素，指出每到第八个元素性质就重复出现（八音律）",
          "ku": "Newlands element li gorî girseya atomî ya zêdebûyî rêz kirin û nîşan da ku taybetmendî di her elementa heştemîn de dubare dibin (qaîdeya oktavan)"
        },
        {
          "tr": "Mendeleyev elementleri artan atom kütlesine göre dizerek benzer özellikli elementleri aynı sütunda topladı",
          "en": "Mendeleev arranged elements by increasing atomic mass and placed elements with similar properties in the same column",
          "de": "Mendelejew ordnete die Elemente nach steigender Atommasse und stellte ähnliche Elemente in dieselbe Spalte",
          "fr": "Mendeleïev classa les éléments par masse atomique croissante et plaça les éléments semblables dans une même colonne",
          "ru": "Менделеев расположил элементы по возрастанию атомной массы, поместив сходные элементы в один столбец",
          "ar": "رتّب مندلييف العناصر حسب تزايد الكتلة الذرية ووضع العناصر المتشابهة في عمود واحد",
          "zh": "门捷列夫按原子量递增排列元素，把性质相似的元素放在同一纵列",
          "ku": "Mendeleyev element li gorî girseya atomî ya zêdebûyî rêz kirin û elementên bi taybetmendiyên wekhev xistin heman stûnê"
        },
        {
          "tr": "Moseley elementleri artan atom numarasına göre sıralayarak modern periyodik sistemin temelini attı",
          "en": "Moseley ordered elements by increasing atomic number, laying the foundation of the modern periodic table",
          "de": "Moseley ordnete die Elemente nach steigender Ordnungszahl und legte damit den Grundstein des modernen Periodensystems",
          "fr": "Moseley classa les éléments par numéro atomique croissant, posant les bases du tableau périodique moderne",
          "ru": "Мозли упорядочил элементы по возрастанию атомного номера и заложил основу современной периодической системы",
          "ar": "رتّب موزلي العناصر حسب تزايد العدد الذري فأرسى أساس الجدول الدوري الحديث",
          "zh": "莫斯莱按原子序数递增排列元素，奠定了现代元素周期表的基础",
          "ku": "Moseley element li gorî hejmara atomî ya zêdebûyî rêz kirin û bingeha tabloya periyodîk a nûjen danî"
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
        "ru": "Возбуждение электрона и излучение",
        "ar": "إثارة الإلكترون وانبعاث الضوء",
        "zh": "电子的激发与发光",
        "ku": "Heyecanbûna Elektronê û Tîrêjdan"
      },
      "steps": [
        {
          "tr": "Temel hâldeki elektron enerji soğurur",
          "en": "Electron in ground state absorbs energy",
          "de": "Elektron im Grundzustand absorbiert Energie",
          "fr": "L'électron à l'état fondamental absorbe de l'énergie",
          "ru": "Электрон в основном состоянии поглощает энергию",
          "ar": "يمتص الإلكترون في الحالة الأرضية طاقةً",
          "zh": "基态电子吸收能量",
          "ku": "Elektrona di rewşa bingehîn de enerjiyê dimijîne"
        },
        {
          "tr": "Daha yüksek enerjili yörüngeye geçer",
          "en": "Jumps to a higher-energy orbit",
          "de": "Springt auf eine Bahn höherer Energie",
          "fr": "Passe sur une orbite d'énergie plus élevée",
          "ru": "Переходит на орбиту с более высокой энергией",
          "ar": "ينتقل إلى مدار ذي طاقة أعلى",
          "zh": "跃迁到能量更高的轨道",
          "ku": "Derbasî rêgeheke bi enerjiya bilindtir dibe"
        },
        {
          "tr": "Uyarılmış, kararsız hâlde kısa süre kalır",
          "en": "Stays in an excited, unstable state for a short time",
          "de": "Bleibt kurzzeitig in einem angeregten, instabilen Zustand",
          "fr": "Reste dans un état excité et instable pendant une courte période",
          "ru": "Недолго находится в возбуждённом, неустойчивом состоянии",
          "ar": "يبقى لفترة قصيرة في حالة مثارة غير مستقرة",
          "zh": "在不稳定的激发态短暂停留",
          "ku": "Demeke kurt di rewşa heyecanbûyî û nestabîl de dimîne"
        },
        {
          "tr": "Foton yayarak temel hâle geri döner",
          "en": "Returns to ground state by emitting photons",
          "de": "Kehrt durch die Emission von Photonen in den Grundzustand zurück",
          "fr": "Retourne à l'état fondamental en émettant des photons",
          "ru": "Возвращается в основное состояние, испуская фотон",
          "ar": "يعود إلى الحالة الأرضية بإصدار فوتون",
          "zh": "发射光子，回到基态",
          "ku": "Bi belavkirina fotonan vedigere rewşa bingehîn"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u02-twin01",
      "stem": {
        "tr": "Baş grup elementi olan X'in ardışık iyonlaşma enerjileri (kJ/mol): İE1: 496, İE2: 4562, İE3: 6912'dir. Buna göre X hangi gruptadır?",
        "en": "The successive ionization energies (kJ/mol) of the main group element X are: IE1: 496, IE2: 4562, IE3: 6912. Accordingly, in which group is X?",
        "de": "Die aufeinanderfolgenden Ionisierungsenergien (kJ/mol) des Hauptgruppenelements X betragen: IE1: 496, IE2: 4562, IE3: 6912. In welcher Gruppe befindet sich X demnach?",
        "fr": "Les énergies d'ionisation consécutives (kJ/mol) de l'élément principal du groupe X sont : IE1 : 496, IE2 : 4562, IE3 : 6912. Par conséquent, dans quel groupe se trouve X ?",
        "ru": "Последовательные энергии ионизации (кДж/моль) элемента X главной подгруппы: I1 = 496, I2 = 4562, I3 = 6912. В какой группе находится X?",
        "ar": "طاقات التأين المتتالية (kJ/mol) للعنصر X من عناصر المجموعات الرئيسية هي: IE1: 496، IE2: 4562، IE3: 6912. فإلى أيّ مجموعة ينتمي X؟",
        "zh": "主族元素 X 的逐级电离能(kJ/mol)为：IE1：496，IE2：4562，IE3：6912。据此判断，X 位于哪一族？",
        "ku": "Enerjiyên îyonîzasyonê yên li pey hev ên elementa koma sereke X (kJ/mol) ev in: IE1: 496, IE2: 4562, IE3: 6912. Li gorî vê, X di kîjan komê de ye?"
      },
      "options": [
        {
          "tr": "1A",
          "en": "1A",
          "de": "1A",
          "fr": "1A",
          "ru": "1A",
          "ar": "1A",
          "zh": "1A",
          "ku": "1A"
        },
        {
          "tr": "2A",
          "en": "2A",
          "de": "2A",
          "fr": "2A",
          "ru": "2A",
          "ar": "2A",
          "zh": "2A",
          "ku": "2A"
        },
        {
          "tr": "3A",
          "en": "3A",
          "de": "3A",
          "fr": "3A",
          "ru": "3A",
          "ar": "3A",
          "zh": "3A",
          "ku": "3A"
        },
        {
          "tr": "4A",
          "en": "4A",
          "de": "4A",
          "fr": "4A",
          "ru": "4A",
          "ar": "4A",
          "zh": "4A",
          "ku": "4A"
        },
        {
          "tr": "8A",
          "en": "8A",
          "de": "8A",
          "fr": "8A",
          "ru": "8A",
          "ar": "8A",
          "zh": "8A",
          "ku": "8A"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "İE1'den İE2'ye geçişte yaklaşık 9,2 katlık çok büyük bir sıçrama vardır (496 → 4562); İE2'den İE3'e artış ise yalnızca yaklaşık 1,5 kattır. Büyük sıçrama, ilk elektron koparıldıktan sonra soy gaz düzenine ulaşıldığını gösterir. Buna göre X'in 1 değerlik elektronu vardır ve 1A grubundadır. Sıçrama ikinci elektrondan sonra olsaydı X 2A grubunda olurdu.",
        "en": "From IE1 to IE2 there is a very large jump of about 9.2 times (496 → 4562), whereas from IE2 to IE3 the increase is only about 1.5 times. The large jump shows that a noble-gas configuration is reached after the first electron is removed. Therefore X has 1 valence electron and is in group 1A. If the jump came after the second electron, X would be in group 2A.",
        "de": "Von IE1 zu IE2 gibt es einen sehr großen Sprung auf etwa das 9,2-Fache (496 → 4562), von IE2 zu IE3 steigt der Wert dagegen nur auf etwa das 1,5-Fache. Der große Sprung zeigt, dass nach dem Abtrennen des ersten Elektrons die Edelgaskonfiguration erreicht ist. X hat also 1 Valenzelektron und steht in Gruppe 1A. Läge der Sprung nach dem zweiten Elektron, stünde X in Gruppe 2A.",
        "fr": "De IE1 à IE2, il y a un très grand saut, d'un facteur d'environ 9,2 (496 → 4562), alors que de IE2 à IE3 l'augmentation n'est que d'un facteur d'environ 1,5. Ce grand saut montre que la configuration de gaz noble est atteinte après le départ du premier électron. X possède donc 1 électron de valence et appartient au groupe 1A. Si le saut se produisait après le deuxième électron, X serait dans le groupe 2A.",
        "ru": "При переходе от I1 к I2 наблюдается очень большой скачок — примерно в 9,2 раза (496 → 4562), тогда как от I2 к I3 энергия возрастает лишь примерно в 1,5 раза. Большой скачок показывает, что после отрыва первого электрона достигается конфигурация благородного газа. Значит, у X 1 валентный электрон и он находится в группе 1A. Если бы скачок наблюдался после второго электрона, X находился бы в группе 2A.",
        "ar": "عند الانتقال من IE1 إلى IE2 توجد قفزة كبيرة جداً بنحو 9.2 مرة (496 → 4562)، أما من IE2 إلى IE3 فالزيادة بنحو 1.5 مرة فقط. تدل القفزة الكبيرة على بلوغ ترتيب الغاز النبيل بعد نزع الإلكترون الأول. إذن للعنصر X إلكترون تكافؤ واحد، وهو في المجموعة 1A. ولو كانت القفزة بعد الإلكترون الثاني لكان X في المجموعة 2A.",
        "zh": "从 IE1 到 IE2 有约 9.2 倍的巨大突跃(496 → 4562)，而从 IE2 到 IE3 只增大约 1.5 倍。巨大的突跃说明失去第一个电子后已达到稀有气体的电子排布。因此 X 有 1 个价电子，位于 1A 族。如果突跃出现在第二个电子之后，X 就位于 2A 族。",
        "ku": "Di derbasbûna ji IE1 bo IE2 de bazdaneke pir mezin a bi qasî 9,2 qatan heye (496 → 4562); ji IE2 bo IE3 zêdebûn tenê bi qasî 1,5 qatan e. Bazdana mezin nîşan dide ku piştî qetandina elektrona yekem rêzkirina gaza esîl pêk hatiye. Ji ber vê yekê X xwedî 1 elektrona valansê ye û di koma 1A de ye. Heke bazdan piştî elektrona duyem bûya, X dê di koma 2A de bûya."
      }
    },
    {
      "id": "u02-twin02",
      "stem": {
        "tr": "Periyodik sistemde aynı periyotta yer alan elementler için soldan sağa doğru gidildikçe aşağıdakilerden hangisi genellikle azalır?",
        "en": "For elements in the same period in the periodic table, which of the following generally decreases as you move from left to right?",
        "de": "Welcher der folgenden Werte nimmt für Elemente derselben Periode im Periodensystem im Allgemeinen ab, wenn man sich von links nach rechts bewegt?",
        "fr": "Pour les éléments de la même période dans le tableau périodique, lequel des éléments suivants diminue généralement à mesure que vous vous déplacez de gauche à droite ?",
        "ru": "Какая из величин у элементов одного периода, как правило, уменьшается при движении слева направо?",
        "ar": "أيّ مما يأتي يقل عموماً بالانتقال من اليسار إلى اليمين في الدورة الواحدة من الجدول الدوري؟",
        "zh": "在元素周期表的同一周期中，从左到右下列哪一项通常减小？",
        "ku": "Di tabloya periyodîk de, ji bo elementên heman periyodê, ji çepê ber bi rastê kîjan ji van bi giştî kêm dibe?"
      },
      "options": [
        {
          "tr": "Atom yarıçapı",
          "en": "Atomic radius",
          "de": "Atomradius",
          "fr": "Rayon atomique",
          "ru": "Радиус атома",
          "ar": "نصف القطر الذري",
          "zh": "原子半径",
          "ku": "Nîvçapa atomê"
        },
        {
          "tr": "İyonlaşma enerjisi",
          "en": "Ionization energy",
          "de": "Ionisierungsenergie",
          "fr": "Énergie d'ionisation",
          "ru": "Энергия ионизации",
          "ar": "طاقة التأين",
          "zh": "电离能",
          "ku": "Enerjiya îyonîzasyonê"
        },
        {
          "tr": "Elektronegatiflik",
          "en": "Electronegativity",
          "de": "Elektronegativität",
          "fr": "Électronégativité",
          "ru": "Электроотрицательность",
          "ar": "السالبية الكهربائية",
          "zh": "电负性",
          "ku": "Elektronegatîfî"
        },
        {
          "tr": "Çekirdek yükü",
          "en": "Nuclear charge",
          "de": "Kernladung",
          "fr": "Charge nucléaire",
          "ru": "Заряд ядра",
          "ar": "الشحنة النووية",
          "zh": "核电荷数",
          "ku": "Bara navokê"
        },
        {
          "tr": "Ametalik aktiflik",
          "en": "Nonmetallic activity",
          "de": "Nichtmetallische Aktivität",
          "fr": "Activité non métallique",
          "ru": "Неметаллическая активность",
          "ar": "النشاط اللافلزي",
          "zh": "非金属活泼性",
          "ku": "Çalakiya nemetalîk"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Aynı periyotta soldan sağa gidildikçe katman sayısı değişmezken çekirdek yükü artar; elektronlar daha kuvvetli çekilir ve atom yarıçapı küçülür. İyonlaşma enerjisi, elektronegatiflik ve ametalik aktiflik aynı nedenle genellikle artar; çekirdek yükü ise her zaman artar.",
        "en": "Across a period from left to right, the nuclear charge increases while the number of shells stays the same; the electrons are attracted more strongly and the atomic radius decreases. For the same reason ionization energy, electronegativity and nonmetallic activity generally increase, and the nuclear charge always increases.",
        "de": "Innerhalb einer Periode nimmt von links nach rechts die Kernladung zu, während die Zahl der Schalen gleich bleibt; die Elektronen werden stärker angezogen und der Atomradius nimmt ab. Aus demselben Grund nehmen Ionisierungsenergie, Elektronegativität und nichtmetallische Aktivität im Allgemeinen zu, und die Kernladung nimmt immer zu.",
        "fr": "Dans une période, de gauche à droite, la charge nucléaire augmente alors que le nombre de couches reste le même ; les électrons sont plus fortement attirés et le rayon atomique diminue. Pour la même raison, l'énergie d'ionisation, l'électronégativité et l'activité non métallique augmentent généralement, et la charge nucléaire augmente toujours.",
        "ru": "В периоде слева направо заряд ядра растёт, а число электронных слоёв не меняется; электроны притягиваются сильнее, и радиус атома уменьшается. По той же причине энергия ионизации, электроотрицательность и неметаллическая активность, как правило, возрастают, а заряд ядра возрастает всегда.",
        "ar": "في الدورة الواحدة من اليسار إلى اليمين تزداد الشحنة النووية مع بقاء عدد الأغلفة ثابتاً؛ فتنجذب الإلكترونات بقوة أكبر ويقل نصف القطر الذري. وللسبب نفسه تزداد طاقة التأين والسالبية الكهربائية والنشاط اللافلزي عموماً، أما الشحنة النووية فتزداد دائماً.",
        "zh": "同一周期从左到右，电子层数不变而核电荷数增加，电子受到更强的吸引，原子半径减小。出于同样的原因，电离能、电负性和非金属活泼性一般增大，核电荷数则始终增大。",
        "ku": "Di heman periyodê de ji çepê ber bi rastê hejmara qatan naguhere, lê bara navokê zêde dibe; elektron bi hêztir tên kişandin û nîvçapa atomê kêm dibe. Ji ber heman sedemê enerjiya îyonîzasyonê, elektronegatîfî û çalakiya nemetalîk bi giştî zêde dibin; bara navokê jî her tim zêde dibe."
      }
    },
    {
      "id": "u02-twin03",
      "stem": {
        "tr": "Kütle numarası 56, atom numarası 26 olan demirin Fe3+ iyonunda bulunan elektron sayısı ile nötron sayısının toplamı kaçtır?",
        "en": "For the Fe3+ ion of iron with mass number 56 and atomic number 26, what is the sum of the number of electrons and the number of neutrons?",
        "de": "Wie groß ist für das Fe3+-Ion des Eisens (Massenzahl 56, Ordnungszahl 26) die Summe aus Elektronen- und Neutronenzahl?",
        "fr": "Pour l'ion Fe3+ du fer (nombre de masse 56, numéro atomique 26), quelle est la somme du nombre d'électrons et du nombre de neutrons ?",
        "ru": "Чему равна сумма числа электронов и числа нейтронов в ионе Fe3+, если массовое число железа равно 56, а порядковый номер — 26?",
        "ar": "ما مجموع عدد الإلكترونات وعدد النيوترونات في الأيون Fe3+ للحديد الذي عدده الكتلي 56 وعدده الذري 26؟",
        "zh": "质量数为 56、原子序数为 26 的铁形成的 Fe3+ 离子中，电子数与中子数之和是多少？",
        "ku": "Di îyona Fe3+ ya hesin de, ku hejmara girseyê 56 û hejmara atomî 26 e, berhevoka hejmara elektronan û hejmara notronan çend e?"
      },
      "options": [
        {
          "tr": "49",
          "en": "49",
          "de": "49",
          "fr": "49",
          "ru": "49",
          "ar": "49",
          "zh": "49",
          "ku": "49"
        },
        {
          "tr": "53",
          "en": "53",
          "de": "53",
          "fr": "53",
          "ru": "53",
          "ar": "53",
          "zh": "53",
          "ku": "53"
        },
        {
          "tr": "56",
          "en": "56",
          "de": "56",
          "fr": "56",
          "ru": "56",
          "ar": "56",
          "zh": "56",
          "ku": "56"
        },
        {
          "tr": "59",
          "en": "59",
          "de": "59",
          "fr": "59",
          "ru": "59",
          "ar": "59",
          "zh": "59",
          "ku": "59"
        },
        {
          "tr": "79",
          "en": "79",
          "de": "79",
          "fr": "79",
          "ru": "79",
          "ar": "79",
          "zh": "79",
          "ku": "79"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Proton sayısı = atom numarası = 26. Nötron sayısı = 56 − 26 = 30. Fe3+ iyonu 3 elektron vermiştir: elektron sayısı = 26 − 3 = 23. Toplam = 23 + 30 = 53. İyon yükü unutulursa 26 + 30 = 56, yük eklenirse 29 + 30 = 59 bulunur; nötron yerine proton alınırsa 23 + 26 = 49 çıkar.",
        "en": "Protons = atomic number = 26. Neutrons = 56 − 26 = 30. Fe3+ has lost 3 electrons: electrons = 26 − 3 = 23. Sum = 23 + 30 = 53. Forgetting the charge gives 26 + 30 = 56, adding it gives 29 + 30 = 59, and using protons instead of neutrons gives 23 + 26 = 49.",
        "de": "Protonen = Ordnungszahl = 26. Neutronen = 56 − 26 = 30. Fe3+ hat 3 Elektronen abgegeben: Elektronen = 26 − 3 = 23. Summe = 23 + 30 = 53. Ohne Ladung erhält man 26 + 30 = 56, mit addierter Ladung 29 + 30 = 59, mit Protonen statt Neutronen 23 + 26 = 49.",
        "fr": "Protons = numéro atomique = 26. Neutrons = 56 − 26 = 30. Fe3+ a perdu 3 électrons : électrons = 26 − 3 = 23. Somme = 23 + 30 = 53. En oubliant la charge on obtient 26 + 30 = 56, en l'ajoutant 29 + 30 = 59, et en prenant les protons au lieu des neutrons 23 + 26 = 49.",
        "ru": "Число протонов = порядковый номер = 26. Число нейтронов = 56 − 26 = 30. Ион Fe3+ образовался при отдаче 3 электронов: число электронов = 26 − 3 = 23. Сумма = 23 + 30 = 53. Если забыть о заряде иона, получится 26 + 30 = 56; если прибавить заряд — 29 + 30 = 59; если взять число протонов вместо числа нейтронов — 23 + 26 = 49.",
        "ar": "عدد البروتونات = العدد الذري = 26. عدد النيوترونات = 56 − 26 = 30. الأيون Fe3+ فقد 3 إلكترونات: عدد الإلكترونات = 26 − 3 = 23. المجموع = 23 + 30 = 53. وإهمال الشحنة يعطي 26 + 30 = 56، وإضافتها يعطي 29 + 30 = 59، واستعمال البروتونات بدل النيوترونات يعطي 23 + 26 = 49.",
        "zh": "质子数 = 原子序数 = 26；中子数 = 56 − 26 = 30。Fe3+ 失去了 3 个电子：电子数 = 26 − 3 = 23。和 = 23 + 30 = 53。忘记电荷会得到 26 + 30 = 56，把电荷加上会得到 29 + 30 = 59，用质子数代替中子数会得到 23 + 26 = 49。",
        "ku": "Hejmara protonan = hejmara atomî = 26. Hejmara notronan = 56 − 26 = 30. Îyona Fe3+ 3 elektron winda kirine: hejmara elektronan = 26 − 3 = 23. Berhevok = 23 + 30 = 53. Heke bara îyonê ji bîr bibe 26 + 30 = 56, heke bar li elektronan were zêdekirin 29 + 30 = 59, heke li şûna notronan proton were hesibandin 23 + 26 = 49 derdikeve."
      }
    },
    {
      "id": "u02-twin04",
      "stem": {
        "tr": "14/6 C, 14/7 N ve 12/6 C atomları ile ilgili aşağıdaki yargılardan hangileri doğrudur? (Gösterimde üstteki sayı kütle numarası, alttaki sayı atom numarasıdır.)\nI. 14C ve 12C birbirinin izotopudur.\nII. 14C ve 14N birbirinin izobarıdır.\nIII. 12C ve 14N birbirinin izotonudur.",
        "en": "Which of the following statements about the atoms 14/6 C, 14/7 N and 12/6 C are correct? (Upper number: mass number; lower number: atomic number.)\nI. 14C and 12C are isotopes of each other.\nII. 14C and 14N are isobars of each other.\nIII. 12C and 14N are isotones of each other.",
        "de": "Welche Aussagen über die Atome 14/6 C, 14/7 N und 12/6 C sind richtig? (Obere Zahl: Massenzahl, untere Zahl: Ordnungszahl.)\nI. 14C und 12C sind Isotope.\nII. 14C und 14N sind Isobare.\nIII. 12C und 14N sind Isotone.",
        "fr": "Lesquelles des affirmations suivantes sur les atomes 14/6 C, 14/7 N et 12/6 C sont correctes ? (Nombre du haut : nombre de masse ; nombre du bas : numéro atomique.)\nI. 14C et 12C sont des isotopes.\nII. 14C et 14N sont des isobares.\nIII. 12C et 14N sont des isotones.",
        "ru": "Какие утверждения об атомах 14/6 C, 14/7 N и 12/6 C верны? (Верхнее число — массовое число, нижнее — порядковый номер.)\nI. 14C и 12C — изотопы.\nII. 14C и 14N — изобары.\nIII. 12C и 14N — изотоны.",
        "ar": "أيّ العبارات الآتية عن الذرات 14/6 C و14/7 N و12/6 C صحيحة؟ (العدد العلوي هو العدد الكتلي والسفلي هو العدد الذري.)\nI. ‏14C و12C نظيران.\nII. ‏14C و14N متساويا الكتلة (أيزوبار).\nIII. ‏12C و14N متساويا النيوترونات (أيزوتون).",
        "zh": "关于原子 14/6 C、14/7 N 和 12/6 C 的下列说法中，哪些正确？（上方数字为质量数，下方数字为原子序数。）\nI. 14C 和 12C 互为同位素。\nII. 14C 和 14N 互为同量素。\nIII. 12C 和 14N 互为同中子素。",
        "ku": "Kîjan ji van hukmên li ser atomên 14/6 C, 14/7 N û 12/6 C rast in? (Di nîşandanê de hejmara jorîn hejmara girseyê, ya jêrîn hejmara atomî ye.)\nI. 14C û 12C îzotopên hev in.\nII. 14C û 14N îzobarên hev in.\nIII. 12C û 14N îzotonên hev in."
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
        "tr": "Nötron sayıları: 14C için 14 − 6 = 8, 12C için 12 − 6 = 6, 14N için 14 − 7 = 7. I doğrudur: 14C ve 12C'nin proton sayısı (6) aynı, kütle numaraları farklıdır. II doğrudur: 14C ve 14N'nin kütle numaraları (14) aynı, proton sayıları farklıdır. III yanlıştır: izoton olmak için nötron sayıları eşit olmalıdır; 12C'de 6, 14N'de 7 nötron vardır. Doğru yanıt: I ve II.",
        "en": "Neutrons: 14C has 14 − 6 = 8, 12C has 12 − 6 = 6, 14N has 14 − 7 = 7. I is true: 14C and 12C have the same proton number (6) but different mass numbers. II is true: 14C and 14N have the same mass number (14) but different proton numbers. III is false: isotones need equal neutron numbers, but 12C has 6 and 14N has 7. Answer: I and II.",
        "de": "Neutronen: 14C hat 14 − 6 = 8, 12C hat 12 − 6 = 6, 14N hat 14 − 7 = 7. I ist richtig: gleiche Protonenzahl (6), verschiedene Massenzahlen. II ist richtig: gleiche Massenzahl (14), verschiedene Protonenzahlen. III ist falsch: Isotone brauchen gleiche Neutronenzahlen, 12C hat 6, 14N hat 7. Antwort: I und II.",
        "fr": "Neutrons : 14C en a 14 − 6 = 8, 12C 12 − 6 = 6, 14N 14 − 7 = 7. I est vraie : même nombre de protons (6), nombres de masse différents. II est vraie : même nombre de masse (14), nombres de protons différents. III est fausse : des isotones doivent avoir le même nombre de neutrons ; 12C en a 6 et 14N 7. Réponse : I et II.",
        "ru": "Число нейтронов: у 14C — 14 − 6 = 8, у 12C — 12 − 6 = 6, у 14N — 14 − 7 = 7. I верно: у 14C и 12C одинаковое число протонов (6) и разные массовые числа. II верно: у 14C и 14N одинаковое массовое число (14) и разное число протонов. III неверно: у изотонов число нейтронов должно быть одинаковым, а у 12C их 6, у 14N — 7. Ответ: I и II.",
        "ar": "عدد النيوترونات: في 14C ‏14 − 6 = 8، وفي 12C ‏12 − 6 = 6، وفي 14N ‏14 − 7 = 7. العبارة I صحيحة: لهما العدد الذري نفسه (6) وعددان كتليان مختلفان. العبارة II صحيحة: لهما العدد الكتلي نفسه (14) وعددان ذريان مختلفان. العبارة III خاطئة: يتطلب كونهما أيزوتونين تساوي عدد النيوترونات، وفي 12C ستة وفي 14N سبعة. الإجابة: I وII.",
        "zh": "中子数：14C 为 14 − 6 = 8，12C 为 12 − 6 = 6，14N 为 14 − 7 = 7。I 正确：14C 与 12C 质子数相同(6)，质量数不同。II 正确：14C 与 14N 质量数相同(14)，质子数不同。III 错误：同中子素要求中子数相等，而 12C 有 6 个、14N 有 7 个中子。答案：I 和 II。",
        "ku": "Hejmara notronan: ji bo 14C 14 − 6 = 8, ji bo 12C 12 − 6 = 6, ji bo 14N 14 − 7 = 7. I rast e: hejmara protonên 14C û 12C (6) wekhev e, hejmarên girseyê cuda ne. II rast e: hejmara girseyê ya 14C û 14N (14) wekhev e, hejmarên protonan cuda ne. III şaş e: ji bo îzotonbûnê divê hejmara notronan wekhev be; di 12C de 6, di 14N de 7 notron hene. Bersiva rast: I û II."
      }
    },
    {
      "id": "u02-twin05",
      "stem": {
        "tr": "Periyodik sistemdeki yerleri verilen X, Y ve Z elementleri için aşağıdaki yargılardan hangileri doğrudur?\nX: 2. periyot 1A grubu\nY: 2. periyot 7A grubu\nZ: 4. periyot 1A grubu\nI. Elektronegatifliği en büyük olan Y'dir.\nII. Metalik aktifliği en büyük olan X'tir.\nIII. Atom yarıçapı en küçük olan Y'dir.",
        "en": "Which of the following statements are correct for the elements X, Y and Z whose positions in the periodic table are given?\nX: period 2, group 1A\nY: period 2, group 7A\nZ: period 4, group 1A\nI. Y has the highest electronegativity.\nII. X has the highest metallic reactivity.\nIII. Y has the smallest atomic radius.",
        "de": "Welche Aussagen sind für die Elemente X, Y und Z mit den angegebenen Positionen im Periodensystem richtig?\nX: 2. Periode, Gruppe 1A\nY: 2. Periode, Gruppe 7A\nZ: 4. Periode, Gruppe 1A\nI. Y hat die größte Elektronegativität.\nII. X hat die größte metallische Aktivität.\nIII. Y hat den kleinsten Atomradius.",
        "fr": "Lesquelles des affirmations suivantes sont correctes pour les éléments X, Y et Z dont la position dans le tableau périodique est donnée ?\nX : 2e période, groupe 1A\nY : 2e période, groupe 7A\nZ : 4e période, groupe 1A\nI. Y a la plus grande électronégativité.\nII. X a la plus grande réactivité métallique.\nIII. Y a le plus petit rayon atomique.",
        "ru": "Какие утверждения верны для элементов X, Y и Z с указанным положением в периодической системе?\nX: 2-й период, группа 1A\nY: 2-й период, группа 7A\nZ: 4-й период, группа 1A\nI. Наибольшая электроотрицательность у Y.\nII. Наибольшая металлическая активность у X.\nIII. Наименьший радиус атома у Y.",
        "ar": "أيّ العبارات الآتية صحيحة للعناصر X وY وZ المعطاة مواقعها في الجدول الدوري؟\nX: الدورة 2، المجموعة 1A\nY: الدورة 2، المجموعة 7A\nZ: الدورة 4، المجموعة 1A\nI. أعلاها سالبيةً كهربائية Y.\nII. أعلاها نشاطاً فلزياً X.\nIII. أصغرها نصف قطر ذري Y.",
        "zh": "已知 X、Y、Z 三种元素在周期表中的位置，下列说法中哪些正确？\nX：第 2 周期 1A 族\nY：第 2 周期 7A 族\nZ：第 4 周期 1A 族\nI. 电负性最大的是 Y。\nII. 金属活动性最强的是 X。\nIII. 原子半径最小的是 Y。",
        "ku": "Ji bo elementên X, Y û Z yên ku cihên wan ên di tabloya periyodîk de hatine dayîn, kîjan ji van hukman rast in?\nX: periyoda 2., koma 1A\nY: periyoda 2., koma 7A\nZ: periyoda 4., koma 1A\nI. Elementa herî elektronegatîf Y ye.\nII. Elementa ku çalakiya wê ya metalîk herî mezin e X ye.\nIII. Elementa ku nîvçapa wê ya atomê herî piçûk e Y ye."
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
        "tr": "I doğrudur: elektronegatiflik periyotta sağa doğru artar, gruptan aşağı azalır; sağ üstte olan Y en elektronegatiftir. II yanlıştır: X ve Z aynı grupta olup Z daha aşağıdadır; değerlik elektronunu daha kolay verdiği için metalik aktifliği en büyük olan Z'dir. III doğrudur: aynı periyotta sağdaki Y, soldaki X'ten küçüktür; Z ise iki katman fazla olduğundan en büyüktür. Doğru yanıt: I ve III.",
        "en": "I is true: electronegativity increases to the right across a period and decreases down a group; Y, at the upper right, is the most electronegative. II is false: X and Z are in the same group and Z is lower; it loses its valence electron more easily, so Z is the most reactive metal. III is true: in the same period Y (right) is smaller than X (left), and Z, with two more shells, is the largest. Answer: I and III.",
        "de": "I ist richtig: Die Elektronegativität steigt in der Periode nach rechts und sinkt in der Gruppe nach unten; Y oben rechts ist am elektronegativsten. II ist falsch: X und Z stehen in derselben Gruppe, Z weiter unten; es gibt sein Valenzelektron leichter ab und ist am aktivsten. III ist richtig: In derselben Periode ist Y (rechts) kleiner als X (links), Z mit zwei Schalen mehr ist am größten. Antwort: I und III.",
        "fr": "I est vraie : l'électronégativité augmente vers la droite dans une période et diminue vers le bas d'un groupe ; Y, en haut à droite, est le plus électronégatif. II est fausse : X et Z sont dans le même groupe et Z est plus bas ; il cède plus facilement son électron de valence, c'est donc Z le plus réactif. III est vraie : dans la même période, Y (à droite) est plus petit que X (à gauche) et Z, avec deux couches de plus, est le plus grand. Réponse : I et III.",
        "ru": "I верно: электроотрицательность в периоде растёт слева направо и уменьшается вниз по группе; Y, расположенный справа вверху, самый электроотрицательный. II неверно: X и Z находятся в одной группе, Z — ниже; он легче отдаёт валентный электрон, поэтому наибольшая металлическая активность у Z. III верно: в одном периоде Y (справа) меньше X (слева), а у Z на два электронных слоя больше, поэтому его радиус наибольший. Ответ: I и III.",
        "ar": "العبارة I صحيحة: تزداد السالبية الكهربائية نحو اليمين في الدورة وتقل نزولاً في المجموعة، وY في أعلى اليمين فهو الأعلى سالبيةً كهربائية. العبارة II خاطئة: X وZ في مجموعة واحدة وZ أدنى، فيفقد إلكترون تكافئه بسهولة أكبر ويكون الأنشط فلزياً. العبارة III صحيحة: في الدورة نفسها Y (يميناً) أصغر من X (يساراً)، وZ أكبرها لأن لديه غلافين إضافيين. الإجابة: I وIII.",
        "zh": "I 正确：电负性同周期从左到右增大，同族从上到下减小，位于右上方的 Y 电负性最大。II 错误：X 和 Z 同族，Z 在下方，更容易失去价电子，所以金属活动性最强的是 Z。III 正确：同周期中右边的 Y 比左边的 X 小，Z 多两个电子层，半径最大。答案：I 和 III。",
        "ku": "I rast e: elektronegatîfî di periyodê de ber bi rastê zêde dibe, di komê de ber bi jêr kêm dibe; Y ku li jor-rastê ye herî elektronegatîf e. II şaş e: X û Z di heman komê de ne û Z li jêrtir e; elektrona xwe ya valansê hêsantir dide, loma çalakiya metalîk a herî mezin a Z ye. III rast e: di heman periyodê de Y (li rastê) ji X (li çepê) piçûktir e; Z jî ji ber du qatên zêde herî mezin e. Bersiva rast: I û III."
      }
    },
    {
      "id": "u02-twin06",
      "stem": {
        "tr": "3Li, 9F, 10Ne ve 11Na atomlarının birinci iyonlaşma enerjilerinin büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following gives the first ionisation energies of the atoms 3Li, 9F, 10Ne and 11Na in order from largest to smallest?",
        "de": "Welche Reihenfolge gibt die ersten Ionisierungsenergien der Atome 3Li, 9F, 10Ne und 11Na von groß nach klein richtig an?",
        "fr": "Quel est le classement, du plus grand au plus petit, des premières énergies d'ionisation des atomes 3Li, 9F, 10Ne et 11Na ?",
        "ru": "Какой ряд правильно располагает первые энергии ионизации атомов 3Li, 9F, 10Ne и 11Na от большей к меньшей?",
        "ar": "أيّ الترتيبات الآتية يمثل طاقات التأين الأولى للذرات 3Li و9F و10Ne و11Na من الأكبر إلى الأصغر؟",
        "zh": "3Li、9F、10Ne、11Na 四种原子的第一电离能由大到小的顺序是下列哪一项？",
        "ku": "Rêzkirina enerjiyên îyonîzasyonê yên yekem ên atomên 3Li, 9F, 10Ne û 11Na ji mezin ber bi piçûk kîjan e?"
      },
      "options": [
        {
          "tr": "Na > Li > F > Ne",
          "en": "Na > Li > F > Ne",
          "de": "Na > Li > F > Ne",
          "fr": "Na > Li > F > Ne",
          "ru": "Na > Li > F > Ne",
          "ar": "Na > Li > F > Ne",
          "zh": "Na > Li > F > Ne",
          "ku": "Na > Li > F > Ne"
        },
        {
          "tr": "F > Ne > Li > Na",
          "en": "F > Ne > Li > Na",
          "de": "F > Ne > Li > Na",
          "fr": "F > Ne > Li > Na",
          "ru": "F > Ne > Li > Na",
          "ar": "F > Ne > Li > Na",
          "zh": "F > Ne > Li > Na",
          "ku": "F > Ne > Li > Na"
        },
        {
          "tr": "Ne > F > Na > Li",
          "en": "Ne > F > Na > Li",
          "de": "Ne > F > Na > Li",
          "fr": "Ne > F > Na > Li",
          "ru": "Ne > F > Na > Li",
          "ar": "Ne > F > Na > Li",
          "zh": "Ne > F > Na > Li",
          "ku": "Ne > F > Na > Li"
        },
        {
          "tr": "Li > Na > F > Ne",
          "en": "Li > Na > F > Ne",
          "de": "Li > Na > F > Ne",
          "fr": "Li > Na > F > Ne",
          "ru": "Li > Na > F > Ne",
          "ar": "Li > Na > F > Ne",
          "zh": "Li > Na > F > Ne",
          "ku": "Li > Na > F > Ne"
        },
        {
          "tr": "Ne > F > Li > Na",
          "en": "Ne > F > Li > Na",
          "de": "Ne > F > Li > Na",
          "fr": "Ne > F > Li > Na",
          "ru": "Ne > F > Li > Na",
          "ar": "Ne > F > Li > Na",
          "zh": "Ne > F > Li > Na",
          "ku": "Ne > F > Li > Na"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Li, F ve Ne 2. periyottadır (2-1, 2-7, 2-8); Na ise 3. periyot 1A'dadır (2-8-1). Aynı periyotta sağa gidildikçe iyonlaşma enerjisi genel olarak artar ve soy gaz Ne en yüksek değere sahiptir: Ne > F > Li. Aynı grupta aşağı inildikçe iyonlaşma enerjisi azaldığından Na, Li'den küçüktür. Sıralama Ne > F > Li > Na olur. F'yi en üste koymak elektronegatiflik ile iyonlaşma enerjisini karıştırmaktan kaynaklanır.",
        "en": "Li, F and Ne are in period 2 (2-1, 2-7, 2-8); Na is in period 3, group 1A (2-8-1). Across a period ionisation energy generally increases and the noble gas Ne has the highest value: Ne > F > Li. Down a group it decreases, so Na is below Li. Order: Ne > F > Li > Na. Putting F first comes from confusing electronegativity with ionisation energy.",
        "de": "Li, F und Ne stehen in der 2. Periode (2-1, 2-7, 2-8), Na in der 3. Periode, Gruppe 1A (2-8-1). In einer Periode steigt die Ionisierungsenergie nach rechts im Allgemeinen, das Edelgas Ne hat den höchsten Wert: Ne > F > Li. In der Gruppe sinkt sie nach unten, daher liegt Na unter Li. Reihenfolge: Ne > F > Li > Na. F an erster Stelle entsteht durch Verwechslung mit der Elektronegativität.",
        "fr": "Li, F et Ne sont dans la 2e période (2-1, 2-7, 2-8) ; Na est dans la 3e période, groupe 1A (2-8-1). Dans une période, l'énergie d'ionisation augmente en général vers la droite et le gaz noble Ne a la valeur la plus élevée : Ne > F > Li. Elle diminue vers le bas d'un groupe, donc Na est sous Li. Ordre : Ne > F > Li > Na. Placer F en tête vient d'une confusion avec l'électronégativité.",
        "ru": "Li, F и Ne находятся во 2-м периоде (2-1, 2-7, 2-8), Na — в 3-м периоде, группе 1A (2-8-1). В периоде слева направо энергия ионизации в целом растёт, и наибольшая она у благородного газа Ne: Ne > F > Li. Вниз по группе она уменьшается, поэтому у Na меньше, чем у Li. Порядок: Ne > F > Li > Na. Если поставить F первым, значит перепутаны электроотрицательность и энергия ионизации.",
        "ar": "تقع Li وF وNe في الدورة الثانية (2-1، 2-7، 2-8)، وNa في الدورة الثالثة المجموعة 1A (2-8-1). في الدورة تزداد طاقة التأين عموماً نحو اليمين، وللغاز النبيل Ne أعلى قيمة: Ne > F > Li. وتقل نزولاً في المجموعة، لذا Na أقل من Li. الترتيب: Ne > F > Li > Na. ووضع F أولاً ناتج عن الخلط بين السالبية الكهربائية وطاقة التأين.",
        "zh": "Li、F、Ne 位于第 2 周期(2-1、2-7、2-8)，Na 位于第 3 周期 1A 族(2-8-1)。同周期从左到右电离能总体增大，稀有气体 Ne 最大：Ne > F > Li。同族从上到下电离能减小，所以 Na 小于 Li。顺序为 Ne > F > Li > Na。把 F 排在首位是把电负性与电离能混淆了。",
        "ku": "Li, F û Ne di periyoda 2. de ne (2-1, 2-7, 2-8); Na di periyoda 3., koma 1A de ye (2-8-1). Di periyodê de ber bi rastê enerjiya îyonîzasyonê bi giştî zêde dibe û nirxa herî bilind a gaza esîl Ne ye: Ne > F > Li. Di komê de ber bi jêr enerjiya îyonîzasyonê kêm dibe, loma ya Na ji ya Li piçûktir e. Rêzkirin Ne > F > Li > Na ye. Danîna F li serî ji tevlihevkirina elektronegatîfiyê û enerjiya îyonîzasyonê tê."
      }
    },
    {
      "id": "u02-twin07",
      "stem": {
        "tr": "Rutherford, alfa tanecikleriyle yaptığı altın levha deneyinin sonuçlarına dayanarak aşağıdaki yargılardan hangilerine ulaşmıştır?\nI. Atomun kütlesinin büyük kısmı ve pozitif yükün tamamı çok küçük bir çekirdekte toplanmıştır.\nII. Elektronlar çekirdek çevresinde belirli enerji düzeylerinde bulunur.\nIII. Çekirdekte yüksüz nötronlar bulunur.",
        "en": "Which of the following are conclusions Rutherford reached from the results of his gold-foil experiment with alpha particles?\nI. Most of the atom's mass and all of its positive charge are concentrated in a very small nucleus.\nII. Electrons are found at definite energy levels around the nucleus.\nIII. The nucleus contains uncharged neutrons.",
        "de": "Welche der folgenden Schlussfolgerungen zog Rutherford aus den Ergebnissen seines Goldfolienversuchs mit Alphateilchen?\nI. Der größte Teil der Masse und die gesamte positive Ladung sind in einem sehr kleinen Kern vereinigt.\nII. Elektronen befinden sich auf bestimmten Energieniveaus um den Kern.\nIII. Im Kern befinden sich ungeladene Neutronen.",
        "fr": "Lesquelles des conclusions suivantes Rutherford a-t-il tirées de son expérience de la feuille d'or avec des particules alpha ?\nI. L'essentiel de la masse et toute la charge positive de l'atome sont concentrés dans un très petit noyau.\nII. Les électrons se trouvent sur des niveaux d'énergie définis autour du noyau.\nIII. Le noyau contient des neutrons non chargés.",
        "ru": "Какие из следующих выводов Резерфорд сделал по результатам опыта с золотой фольгой и альфа-частицами?\nI. Большая часть массы и весь положительный заряд атома сосредоточены в очень маленьком ядре.\nII. Электроны находятся на определённых энергетических уровнях вокруг ядра.\nIII. В ядре есть незаряженные нейтроны.",
        "ar": "أيّ الاستنتاجات الآتية توصّل إليها رذرفورد من نتائج تجربة صفيحة الذهب بجسيمات ألفا؟\nI. تتركز معظم كتلة الذرة وكامل شحنتها الموجبة في نواة صغيرة جداً.\nII. توجد الإلكترونات في مستويات طاقة محددة حول النواة.\nIII. تحتوي النواة على نيوترونات غير مشحونة.",
        "zh": "卢瑟福根据 α 粒子轰击金箔实验的结果得出的结论是下列哪些？\nI. 原子的绝大部分质量和全部正电荷集中在一个很小的原子核内。\nII. 电子处在原子核周围确定的能级上。\nIII. 原子核中含有不带电的中子。",
        "ku": "Rutherford li gorî encamên ceribandina pelê zêr a ku bi perçeyên alfa kir, gihîşt kîjan ji van hukman?\nI. Piraniya girseya atomê û hemû bara erênî di navokeke pir piçûk de kom bûne.\nII. Elektron li dora navokê di astên enerjiyê yên diyar de cih digirin.\nIII. Di navokê de notronên bêbar hene."
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
        "tr": "I doğrudur: taneciklerin çoğunun sapmadan geçmesi atomun büyük kısmının boşluk olduğunu, çok azının geri saçılması ise kütlenin ve pozitif yükün küçük bir çekirdekte toplandığını gösterdi. II yanlıştır: elektronların belirli enerji düzeylerinde bulunduğu görüşü Bohr modeline aittir. III yanlıştır: nötron 1932'de Chadwick tarafından keşfedilmiştir; Rutherford deneyi nötronu göstermez. Doğru yanıt: Yalnız I.",
        "en": "I is true: most particles passing straight through showed the atom is mostly empty space, and the very few bouncing back showed that mass and positive charge sit in a small nucleus. II is false: definite energy levels for electrons belong to Bohr's model. III is false: the neutron was discovered by Chadwick in 1932; Rutherford's experiment does not reveal it. Answer: only I.",
        "de": "I ist richtig: Dass die meisten Teilchen ungehindert durchgingen, zeigte, dass das Atom überwiegend leer ist; die sehr wenigen zurückgeworfenen zeigten, dass Masse und positive Ladung in einem kleinen Kern sitzen. II ist falsch: Bestimmte Energieniveaus gehören zum Bohr-Modell. III ist falsch: Das Neutron entdeckte Chadwick 1932; Rutherfords Versuch zeigt es nicht. Antwort: nur I.",
        "fr": "I est vraie : la plupart des particules traversant sans déviation montraient que l'atome est surtout du vide, et les très rares renvoyées que la masse et la charge positive sont dans un petit noyau. II est fausse : les niveaux d'énergie définis relèvent du modèle de Bohr. III est fausse : le neutron a été découvert par Chadwick en 1932 ; l'expérience de Rutherford ne le révèle pas. Réponse : seulement I.",
        "ru": "I верно: прохождение большинства частиц без отклонения показало, что атом в основном пуст, а отражение очень немногих — что масса и положительный заряд сосредоточены в малом ядре. II неверно: определённые энергетические уровни электронов — это модель Бора. III неверно: нейтрон открыл Чедвик в 1932 году; опыт Резерфорда его не обнаруживает. Ответ: только I.",
        "ar": "العبارة I صحيحة: مرور معظم الجسيمات دون انحراف بيّن أن معظم الذرة فراغ، وارتداد عدد قليل جداً بيّن أن الكتلة والشحنة الموجبة متركزتان في نواة صغيرة. العبارة II خاطئة: فكرة مستويات الطاقة المحددة تعود إلى نموذج بور. العبارة III خاطئة: اكتشف تشادويك النيوترون عام 1932، وتجربة رذرفورد لا تكشفه. الإجابة: I فقط.",
        "zh": "I 正确：绝大多数粒子直接穿过说明原子内部大部分是空的，极少数被反弹说明质量和正电荷集中在很小的原子核内。II 错误：电子处于确定能级是玻尔模型的观点。III 错误：中子是查德威克在 1932 年发现的，卢瑟福实验不能揭示中子。答案：仅 I。",
        "ku": "I rast e: derbasbûna piraniya perçeyan bê ladan nîşan da ku piraniya atomê vala ye; vegera hindikek ji wan jî nîşan da ku girse û bara erênî di navokeke piçûk de kom bûne. II şaş e: dîtina ku elektron di astên enerjiyê yên diyar de ne, ya modela Bohr e. III şaş e: notron di sala 1932an de ji aliyê Chadwick ve hate keşfkirin; ceribandina Rutherford notronê nîşan nade. Bersiva rast: Tenê I."
      }
    },
    {
      "id": "u02-twin08",
      "stem": {
        "tr": "Bohr atom modeline göre hidrojen atomundaki elektronun 3. enerji düzeyinden 1. enerji düzeyine geçmesi ile ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "According to the Bohr model, which statement about the electron of a hydrogen atom moving from the 3rd energy level to the 1st energy level is correct?",
        "de": "Welche Aussage über den Übergang des Elektrons im Wasserstoffatom vom 3. zum 1. Energieniveau ist nach dem Bohr-Modell richtig?",
        "fr": "Selon le modèle de Bohr, quelle affirmation sur le passage de l'électron de l'atome d'hydrogène du 3e au 1er niveau d'énergie est correcte ?",
        "ru": "Какое утверждение о переходе электрона атома водорода с 3-го на 1-й энергетический уровень верно согласно модели Бора?",
        "ar": "وفق نموذج بور، أيّ العبارات الآتية صحيحة بشأن انتقال إلكترون ذرة الهيدروجين من مستوى الطاقة الثالث إلى الأول؟",
        "zh": "根据玻尔模型，关于氢原子中的电子从第 3 能级跃迁到第 1 能级，下列说法正确的是哪一项？",
        "ku": "Li gorî modela atomê ya Bohr, derbarê derbasbûna elektrona atoma hîdrojenê ji asta enerjiyê ya 3. bo asta 1. de kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Atom dışarıdan enerji soğurur.",
          "en": "The atom absorbs energy from outside.",
          "de": "Das Atom nimmt Energie von außen auf.",
          "fr": "L'atome absorbe de l'énergie de l'extérieur.",
          "ru": "Атом поглощает энергию извне.",
          "ar": "تمتص الذرة طاقة من الخارج.",
          "zh": "原子从外界吸收能量。",
          "ku": "Atom ji derve enerjiyê dimijîne."
        },
        {
          "tr": "Elektron çekirdekten uzaklaşır.",
          "en": "The electron moves away from the nucleus.",
          "de": "Das Elektron entfernt sich vom Kern.",
          "fr": "L'électron s'éloigne du noyau.",
          "ru": "Электрон удаляется от ядра.",
          "ar": "يبتعد الإلكترون عن النواة.",
          "zh": "电子远离原子核。",
          "ku": "Elektron ji navokê dûr dikeve."
        },
        {
          "tr": "Atom ışık yayar ve elektronun enerjisi azalır.",
          "en": "The atom emits light and the electron's energy decreases.",
          "de": "Das Atom sendet Licht aus und die Energie des Elektrons nimmt ab.",
          "fr": "L'atome émet de la lumière et l'énergie de l'électron diminue.",
          "ru": "Атом испускает свет, и энергия электрона уменьшается.",
          "ar": "تُصدر الذرة ضوءاً وتقل طاقة الإلكترون.",
          "zh": "原子发出光，电子的能量降低。",
          "ku": "Atom ronahiyê belav dike û enerjiya elektronê kêm dibe."
        },
        {
          "tr": "Atom elektron kaybederek iyonlaşır.",
          "en": "The atom loses an electron and becomes an ion.",
          "de": "Das Atom verliert ein Elektron und wird ionisiert.",
          "fr": "L'atome perd un électron et s'ionise.",
          "ru": "Атом теряет электрон и ионизируется.",
          "ar": "تفقد الذرة إلكتروناً فتتأين.",
          "zh": "原子失去电子而电离。",
          "ku": "Atom elektronekê winda dike û dibe îyon."
        },
        {
          "tr": "Elektronun enerjisi artar ve atom uyarılmış hâle geçer.",
          "en": "The electron's energy increases and the atom becomes excited.",
          "de": "Die Energie des Elektrons steigt und das Atom wird angeregt.",
          "fr": "L'énergie de l'électron augmente et l'atome passe à l'état excité.",
          "ru": "Энергия электрона растёт, и атом переходит в возбуждённое состояние.",
          "ar": "تزداد طاقة الإلكترون وتنتقل الذرة إلى الحالة المثارة.",
          "zh": "电子能量增加，原子变为激发态。",
          "ku": "Enerjiya elektronê zêde dibe û atom derbasî rewşa heyecanbûyî dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Bohr modelinde çekirdeğe yakın düzeyin enerjisi daha düşüktür. Elektron 3. düzeyden 1. düzeye inerken iki düzey arasındaki enerji farkını ışık (foton) olarak yayar; elektron çekirdeğe yaklaşır ve enerjisi azalır. Enerji soğurma, çekirdekten uzaklaşma ve uyarılma, elektronun düşük düzeyden yüksek düzeye çıkmasında olur; elektron atomdan ayrılmadığı için iyonlaşma da yoktur.",
        "en": "In the Bohr model, levels closer to the nucleus have lower energy. When the electron drops from level 3 to level 1 it emits the energy difference as light (a photon); the electron moves closer to the nucleus and its energy decreases. Absorption, moving away and excitation happen when the electron rises to a higher level; the electron does not leave the atom, so there is no ionisation.",
        "de": "Im Bohr-Modell haben kernnahe Niveaus niedrigere Energie. Fällt das Elektron von Niveau 3 auf Niveau 1, gibt es die Energiedifferenz als Licht (Photon) ab; es nähert sich dem Kern, seine Energie sinkt. Absorption, Entfernung vom Kern und Anregung treten beim Übergang nach oben auf; das Elektron verlässt das Atom nicht, also keine Ionisierung.",
        "fr": "Dans le modèle de Bohr, les niveaux proches du noyau ont une énergie plus basse. En redescendant du niveau 3 au niveau 1, l'électron émet la différence d'énergie sous forme de lumière (photon) ; il se rapproche du noyau et son énergie diminue. L'absorption, l'éloignement et l'excitation correspondent à une montée vers un niveau supérieur ; l'électron ne quitte pas l'atome, il n'y a donc pas d'ionisation.",
        "ru": "В модели Бора уровни ближе к ядру имеют меньшую энергию. При переходе с 3-го уровня на 1-й электрон испускает разность энергий в виде света (фотона), приближается к ядру, и его энергия уменьшается. Поглощение, удаление от ядра и возбуждение происходят при переходе на более высокий уровень; электрон не покидает атом, поэтому ионизации нет.",
        "ar": "في نموذج بور تكون طاقة المستويات القريبة من النواة أقل. وعند هبوط الإلكترون من المستوى الثالث إلى الأول يُطلق فرق الطاقة على شكل ضوء (فوتون)، فيقترب من النواة وتقل طاقته. أما الامتصاص والابتعاد عن النواة والإثارة فتحدث عند الصعود إلى مستوى أعلى، ولا يغادر الإلكترون الذرة فلا يحدث تأين.",
        "zh": "玻尔模型中，离核越近的能级能量越低。电子从第 3 能级跃迁到第 1 能级时，把两能级的能量差以光（光子）的形式放出，电子靠近原子核，能量降低。吸收能量、远离原子核和激发发生在电子向高能级跃迁时；电子没有离开原子，所以不发生电离。",
        "ku": "Di modela Bohr de enerjiya astên nêzîkî navokê kêmtir e. Dema elektron ji asta 3. dadikeve asta 1., cudahiya enerjiyê ya navbera her du astan wekî ronahî (foton) belav dike; elektron nêzîkî navokê dibe û enerjiya wê kêm dibe. Mijandina enerjiyê, dûrketina ji navokê û heyecanbûn dema elektron ji asteke nizm derdikeve asteke bilind çêdibin; ji ber ku elektron atomê bernade, îyonîzasyon jî tune."
      }
    },
    {
      "id": "u02-twin09",
      "stem": {
        "tr": "Oda koşullarında katı olan X, Y ve Z elementlerinin bazı özellikleri şöyledir:\nX: Parlaktır, tel ve levha hâline getirilebilir, ısı ve elektriği iyi iletir.\nY: Mattır, kırılgandır, ısı ve elektriği iletmez.\nZ: Parlaktır ancak kırılgandır; elektriği metallerden daha az iletir (yarı iletkendir).\nBuna göre X, Y ve Z'nin sınıfları aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Some properties of the elements X, Y and Z, all solid at room conditions, are:\nX: shiny, can be drawn into wires and hammered into sheets, conducts heat and electricity well.\nY: dull, brittle, does not conduct heat or electricity.\nZ: shiny but brittle; conducts electricity less than metals (a semiconductor).\nIn which option are the classes of X, Y and Z given correctly?",
        "de": "Einige Eigenschaften der bei Raumbedingungen festen Elemente X, Y und Z:\nX: glänzend, zu Draht und Blech formbar, leitet Wärme und Strom gut.\nY: matt, spröde, leitet weder Wärme noch Strom.\nZ: glänzend, aber spröde; leitet Strom schlechter als Metalle (Halbleiter).\nIn welcher Antwort sind die Klassen von X, Y und Z richtig angegeben?",
        "fr": "Quelques propriétés des éléments X, Y et Z, tous solides dans les conditions ambiantes :\nX : brillant, peut être étiré en fils et laminé en feuilles, bon conducteur de la chaleur et de l'électricité.\nY : terne, cassant, ne conduit ni la chaleur ni l'électricité.\nZ : brillant mais cassant ; conduit l'électricité moins bien que les métaux (semi-conducteur).\nDans quelle proposition les classes de X, Y et Z sont-elles correctes ?",
        "ru": "Некоторые свойства элементов X, Y и Z, твёрдых при комнатных условиях:\nX: блестит, вытягивается в проволоку и прокатывается в листы, хорошо проводит тепло и ток.\nY: матовый, хрупкий, не проводит тепло и ток.\nZ: блестит, но хрупкий; проводит ток хуже металлов (полупроводник).\nВ каком варианте классы X, Y и Z указаны верно?",
        "ar": "فيما يلي بعض خواص العناصر X وY وZ الصلبة في الظروف العادية:\nX: لامع، يمكن سحبه أسلاكاً وطرقه صفائح، جيد التوصيل للحرارة والكهرباء.\nY: باهت، هش، لا يوصل الحرارة ولا الكهرباء.\nZ: لامع لكنه هش، يوصل الكهرباء أقل من الفلزات (شبه موصل).\nفي أيّ الخيارات الآتية صُنّفت X وY وZ تصنيفاً صحيحاً؟",
        "zh": "常温常压下均为固体的元素 X、Y、Z 的部分性质如下：\nX：有光泽，可拉成丝、压成片，导热导电性好。\nY：无光泽，易碎，不导热也不导电。\nZ：有光泽但易碎，导电性比金属差（半导体）。\n下列哪一项对 X、Y、Z 类别的判断正确？",
        "ku": "Hin taybetmendiyên elementên X, Y û Z yên ku di şertên odeyê de hişk in ev in:\nX: Biriqok e, dikare bibe têl û pel, germ û elektrîkê baş diguhezîne.\nY: Mat e, şikestbar e, germ û elektrîkê naguhezîne.\nZ: Biriqok e lê şikestbar e; elektrîkê ji metalan kêmtir diguhezîne (nîvguhêzer e).\nLi gorî vê, çînên X, Y û Z di kîjan vebijarkê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "X: ametal, Y: metal, Z: yarı metal",
          "en": "X: non-metal, Y: metal, Z: metalloid",
          "de": "X: Nichtmetall, Y: Metall, Z: Halbmetall",
          "fr": "X : non-métal, Y : métal, Z : métalloïde",
          "ru": "X: неметалл, Y: металл, Z: полуметалл",
          "ar": "X: لافلز، Y: فلز، Z: شبه فلز",
          "zh": "X：非金属，Y：金属，Z：类金属",
          "ku": "X: nemetal, Y: metal, Z: nîvmetal"
        },
        {
          "tr": "X: metal, Y: ametal, Z: yarı metal",
          "en": "X: metal, Y: non-metal, Z: metalloid",
          "de": "X: Metall, Y: Nichtmetall, Z: Halbmetall",
          "fr": "X : métal, Y : non-métal, Z : métalloïde",
          "ru": "X: металл, Y: неметалл, Z: полуметалл",
          "ar": "X: فلز، Y: لافلز، Z: شبه فلز",
          "zh": "X：金属，Y：非金属，Z：类金属",
          "ku": "X: metal, Y: nemetal, Z: nîvmetal"
        },
        {
          "tr": "X: metal, Y: yarı metal, Z: ametal",
          "en": "X: metal, Y: metalloid, Z: non-metal",
          "de": "X: Metall, Y: Halbmetall, Z: Nichtmetall",
          "fr": "X : métal, Y : métalloïde, Z : non-métal",
          "ru": "X: металл, Y: полуметалл, Z: неметалл",
          "ar": "X: فلز، Y: شبه فلز، Z: لافلز",
          "zh": "X：金属，Y：类金属，Z：非金属",
          "ku": "X: metal, Y: nîvmetal, Z: nemetal"
        },
        {
          "tr": "X: yarı metal, Y: ametal, Z: metal",
          "en": "X: metalloid, Y: non-metal, Z: metal",
          "de": "X: Halbmetall, Y: Nichtmetall, Z: Metall",
          "fr": "X : métalloïde, Y : non-métal, Z : métal",
          "ru": "X: полуметалл, Y: неметалл, Z: металл",
          "ar": "X: شبه فلز، Y: لافلز، Z: فلز",
          "zh": "X：类金属，Y：非金属，Z：金属",
          "ku": "X: nîvmetal, Y: nemetal, Z: metal"
        },
        {
          "tr": "X: metal, Y: soy gaz, Z: ametal",
          "en": "X: metal, Y: noble gas, Z: non-metal",
          "de": "X: Metall, Y: Edelgas, Z: Nichtmetall",
          "fr": "X : métal, Y : gaz noble, Z : non-métal",
          "ru": "X: металл, Y: благородный газ, Z: неметалл",
          "ar": "X: فلز، Y: غاز نبيل، Z: لافلز",
          "zh": "X：金属，Y：稀有气体，Z：非金属",
          "ku": "X: metal, Y: gaza esîl, Z: nemetal"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Parlaklık, tel-levha hâline gelebilme ve iyi iletkenlik metallerin özelliğidir; X metaldir. Mat, kırılgan ve yalıtkan katı Y ametaldir. Parlak olup kırılgan olan ve elektriği metallerden az ileten (yarı iletken) Z yarı metaldir. Soy gazlar oda koşullarında gaz olduğundan katı Y soy gaz olamaz.",
        "en": "Lustre, ductility/malleability and good conductivity are metallic properties, so X is a metal. The dull, brittle, insulating solid Y is a non-metal. Z, shiny yet brittle and a weaker (semi)conductor than metals, is a metalloid. Noble gases are gases at room conditions, so the solid Y cannot be one.",
        "de": "Glanz, Verformbarkeit und gute Leitfähigkeit sind Metalleigenschaften; X ist ein Metall. Der matte, spröde, nichtleitende Feststoff Y ist ein Nichtmetall. Z, glänzend, aber spröde und schlechter leitend als Metalle (Halbleiter), ist ein Halbmetall. Edelgase sind bei Raumbedingungen gasförmig, der feste Stoff Y kann keines sein.",
        "fr": "L'éclat, la ductilité/malléabilité et la bonne conductivité sont des propriétés métalliques : X est un métal. Le solide terne, cassant et isolant Y est un non-métal. Z, brillant mais cassant et moins conducteur que les métaux (semi-conducteur), est un métalloïde. Les gaz nobles sont gazeux dans les conditions ambiantes : Y, solide, ne peut pas en être un.",
        "ru": "Блеск, пластичность и хорошая проводимость — свойства металлов, значит X — металл. Матовый, хрупкий, непроводящий Y — неметалл. Z, блестящий, но хрупкий и проводящий хуже металлов (полупроводник), — полуметалл. Благородные газы при комнатных условиях — газы, поэтому твёрдый Y не может быть благородным газом.",
        "ar": "اللمعان وقابلية السحب والطرق وجودة التوصيل من خواص الفلزات، فـX فلز. والصلب الباهت الهش العازل Y لافلز. وZ اللامع الهش الأضعف توصيلاً من الفلزات (شبه موصل) شبه فلز. والغازات النبيلة غازية في الظروف العادية، فلا يمكن أن يكون Y الصلب غازاً نبيلاً.",
        "zh": "有光泽、有延展性、导电导热好是金属的性质，X 是金属。无光泽、易碎、不导电的固体 Y 是非金属。有光泽但易碎、导电性比金属差（半导体）的 Z 是类金属。稀有气体在常温常压下是气体，所以固体 Y 不可能是稀有气体。",
        "ku": "Biriqîn, bûna têl û pel û guhezîna baş taybetmendiyên metalan in; X metal e. Y, ku hişk, mat, şikestbar û îzolator e, nemetal e. Z, ku biriqok lê şikestbar e û elektrîkê ji metalan kêmtir diguhezîne (nîvguhêzer), nîvmetal e. Gazên esîl di şertên odeyê de gaz in, loma Y ya hişk nikare gaza esîl be."
      }
    },
    {
      "id": "u02-twin10",
      "stem": {
        "tr": "8O2-, 9F-, 11Na+ ve 12Mg2+ iyonlarının yarıçaplarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following orders the radii of the ions 8O2-, 9F-, 11Na+ and 12Mg2+ from largest to smallest?",
        "de": "Welche Reihenfolge gibt die Radien der Ionen 8O2-, 9F-, 11Na+ und 12Mg2+ von groß nach klein richtig an?",
        "fr": "Quel est le classement, du plus grand au plus petit, des rayons des ions 8O2-, 9F-, 11Na+ et 12Mg2+ ?",
        "ru": "Какой ряд правильно располагает радиусы ионов 8O2-, 9F-, 11Na+ и 12Mg2+ от большего к меньшему?",
        "ar": "أيّ الترتيبات الآتية يمثل أنصاف أقطار الأيونات 8O2- و9F- و11Na+ و12Mg2+ من الأكبر إلى الأصغر؟",
        "zh": "8O2-、9F-、11Na+、12Mg2+ 四种离子的半径由大到小的顺序是下列哪一项？",
        "ku": "Rêzkirina nîvçapên îyonên 8O2-, 9F-, 11Na+ û 12Mg2+ ji mezin ber bi piçûk kîjan e?"
      },
      "options": [
        {
          "tr": "O2- > F- > Na+ > Mg2+",
          "en": "O2- > F- > Na+ > Mg2+",
          "de": "O2- > F- > Na+ > Mg2+",
          "fr": "O2- > F- > Na+ > Mg2+",
          "ru": "O2- > F- > Na+ > Mg2+",
          "ar": "O2- > F- > Na+ > Mg2+",
          "zh": "O2- > F- > Na+ > Mg2+",
          "ku": "O2- > F- > Na+ > Mg2+"
        },
        {
          "tr": "Mg2+ > Na+ > F- > O2-",
          "en": "Mg2+ > Na+ > F- > O2-",
          "de": "Mg2+ > Na+ > F- > O2-",
          "fr": "Mg2+ > Na+ > F- > O2-",
          "ru": "Mg2+ > Na+ > F- > O2-",
          "ar": "Mg2+ > Na+ > F- > O2-",
          "zh": "Mg2+ > Na+ > F- > O2-",
          "ku": "Mg2+ > Na+ > F- > O2-"
        },
        {
          "tr": "Na+ > Mg2+ > O2- > F-",
          "en": "Na+ > Mg2+ > O2- > F-",
          "de": "Na+ > Mg2+ > O2- > F-",
          "fr": "Na+ > Mg2+ > O2- > F-",
          "ru": "Na+ > Mg2+ > O2- > F-",
          "ar": "Na+ > Mg2+ > O2- > F-",
          "zh": "Na+ > Mg2+ > O2- > F-",
          "ku": "Na+ > Mg2+ > O2- > F-"
        },
        {
          "tr": "F- > O2- > Mg2+ > Na+",
          "en": "F- > O2- > Mg2+ > Na+",
          "de": "F- > O2- > Mg2+ > Na+",
          "fr": "F- > O2- > Mg2+ > Na+",
          "ru": "F- > O2- > Mg2+ > Na+",
          "ar": "F- > O2- > Mg2+ > Na+",
          "zh": "F- > O2- > Mg2+ > Na+",
          "ku": "F- > O2- > Mg2+ > Na+"
        },
        {
          "tr": "O2- > F- > Mg2+ > Na+",
          "en": "O2- > F- > Mg2+ > Na+",
          "de": "O2- > F- > Mg2+ > Na+",
          "fr": "O2- > F- > Mg2+ > Na+",
          "ru": "O2- > F- > Mg2+ > Na+",
          "ar": "O2- > F- > Mg2+ > Na+",
          "zh": "O2- > F- > Mg2+ > Na+",
          "ku": "O2- > F- > Mg2+ > Na+"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Dört iyonun da elektron sayısı 10'dur (izoelektronik): O2- için 8 + 2, F- için 9 + 1, Na+ için 11 − 1, Mg2+ için 12 − 2. Elektron sayısı aynı olduğunda proton sayısı arttıkça elektronlar daha kuvvetli çekilir ve yarıçap küçülür. Proton sayıları 8 < 9 < 11 < 12 olduğundan yarıçaplar O2- > F- > Na+ > Mg2+ olur. Metal iyonlarını büyük sanmak, atom yarıçapı ile iyon yarıçapını karıştırmaktır.",
        "en": "All four ions have 10 electrons (isoelectronic): O2- 8 + 2, F- 9 + 1, Na+ 11 − 1, Mg2+ 12 − 2. With equal electron numbers, the more protons, the more strongly the electrons are pulled and the smaller the radius. Proton numbers are 8 < 9 < 11 < 12, so the radii are O2- > F- > Na+ > Mg2+. Thinking the metal ions are larger confuses atomic radius with ionic radius.",
        "de": "Alle vier Ionen haben 10 Elektronen (isoelektronisch): O2- 8 + 2, F- 9 + 1, Na+ 11 − 1, Mg2+ 12 − 2. Bei gleicher Elektronenzahl werden die Elektronen mit steigender Protonenzahl stärker angezogen, der Radius sinkt. Protonenzahlen 8 < 9 < 11 < 12, also O2- > F- > Na+ > Mg2+. Metallionen für größer zu halten, verwechselt Atom- und Ionenradius.",
        "fr": "Les quatre ions ont 10 électrons (isoélectroniques) : O2- 8 + 2, F- 9 + 1, Na+ 11 − 1, Mg2+ 12 − 2. À nombre d'électrons égal, plus il y a de protons, plus les électrons sont attirés et plus le rayon est petit. Les nombres de protons sont 8 < 9 < 11 < 12, d'où O2- > F- > Na+ > Mg2+. Croire les ions métalliques plus gros confond rayon atomique et rayon ionique.",
        "ru": "У всех четырёх ионов по 10 электронов (это изоэлектронные частицы): у O2- 8 + 2, у F- 9 + 1, у Na+ 11 − 1, у Mg2+ 12 − 2. При одинаковом числе электронов чем больше протонов, тем сильнее притяжение и тем меньше радиус. Числа протонов 8 < 9 < 11 < 12, поэтому O2- > F- > Na+ > Mg2+. Считать ионы металлов более крупными — значит путать радиус атома и радиус иона.",
        "ar": "للأيونات الأربعة 10 إلكترونات (متساوية الإلكترونات): O2- ‏8 + 2، F- ‏9 + 1، Na+ ‏11 − 1، Mg2+ ‏12 − 2. وعند تساوي عدد الإلكترونات كلما زاد عدد البروتونات زاد الجذب وصغر نصف القطر. أعداد البروتونات 8 < 9 < 11 < 12، إذن O2- > F- > Na+ > Mg2+. واعتبار أيونات الفلزات أكبر خلطٌ بين نصف القطر الذري والأيوني.",
        "zh": "四种离子都有 10 个电子（等电子）：O2- 为 8 + 2，F- 为 9 + 1，Na+ 为 11 − 1，Mg2+ 为 12 − 2。电子数相同时，质子数越多，电子受吸引越强，半径越小。质子数 8 < 9 < 11 < 12，所以半径 O2- > F- > Na+ > Mg2+。认为金属离子更大，是把原子半径和离子半径混淆了。",
        "ku": "Hejmara elektronên her çar îyonan 10 e (îzoelektronîk): ji bo O2- 8 + 2, ji bo F- 9 + 1, ji bo Na+ 11 − 1, ji bo Mg2+ 12 − 2. Dema hejmara elektronan wekhev be, her ku hejmara protonan zêde dibe elektron bi hêztir tên kişandin û nîvçap piçûk dibe. Hejmarên protonan 8 < 9 < 11 < 12 in, loma nîvçap wekî O2- > F- > Na+ > Mg2+ rêz dibin. Mezin hesibandina îyonên metalan ji tevlihevkirina nîvçapa atomê û nîvçapa îyonê tê."
      }
    },
    {
      "id": "u02-twin11",
      "stem": {
        "tr": "Atom numarası 20 olan X elementi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about element X with atomic number 20 is incorrect?",
        "de": "Welche Aussage über das Element X mit der Ordnungszahl 20 ist falsch?",
        "fr": "Laquelle des affirmations suivantes sur l'élément X de numéro atomique 20 est incorrecte ?",
        "ru": "Какое утверждение об элементе X с порядковым номером 20 неверно?",
        "ar": "أيّ العبارات الآتية عن العنصر X الذي عدده الذري 20 خاطئة؟",
        "zh": "关于原子序数为 20 的元素 X，下列说法错误的是哪一项？",
        "ku": "Kîjan ji van gotinên li ser elementa X ya ku hejmara wê ya atomî 20 e şaş e?"
      },
      "options": [
        {
          "tr": "4. periyotta yer alır.",
          "en": "It is in period 4.",
          "de": "Es steht in der 4. Periode.",
          "fr": "Il se trouve dans la 4e période.",
          "ru": "Находится в 4-м периоде.",
          "ar": "يقع في الدورة الرابعة.",
          "zh": "位于第 4 周期。",
          "ku": "Di periyoda 4. de ye."
        },
        {
          "tr": "Toprak alkali metaldir.",
          "en": "It is an alkaline earth metal.",
          "de": "Es ist ein Erdalkalimetall.",
          "fr": "C'est un métal alcalino-terreux.",
          "ru": "Это щёлочноземельный металл.",
          "ar": "هو فلز قلوي ترابي.",
          "zh": "是碱土金属。",
          "ku": "Metaleke alkalî-axî ye."
        },
        {
          "tr": "Kararlı iyonu X2+ şeklindedir.",
          "en": "Its stable ion is X2+.",
          "de": "Sein stabiles Ion ist X2+.",
          "fr": "Son ion stable est X2+.",
          "ru": "Его устойчивый ион — X2+.",
          "ar": "أيونه المستقر هو X2+.",
          "zh": "它的稳定离子是 X2+。",
          "ku": "Îyona wê ya stabîl X2+ e."
        },
        {
          "tr": "Değerlik elektron sayısı 8'dir.",
          "en": "It has 8 valence electrons.",
          "de": "Es hat 8 Valenzelektronen.",
          "fr": "Il possède 8 électrons de valence.",
          "ru": "У него 8 валентных электронов.",
          "ar": "عدد إلكترونات التكافؤ فيه 8.",
          "zh": "它有 8 个价电子。",
          "ku": "8 elektronên wê yên valansê hene."
        },
        {
          "tr": "Elektronegatifliği aynı periyottaki 7A grubu elementinden küçüktür.",
          "en": "Its electronegativity is lower than that of the group 7A element in the same period.",
          "de": "Seine Elektronegativität ist kleiner als die des 7A-Elements derselben Periode.",
          "fr": "Son électronégativité est inférieure à celle de l'élément du groupe 7A de la même période.",
          "ru": "Его электроотрицательность меньше, чем у элемента группы 7A того же периода.",
          "ar": "سالبيته الكهربائية أقل من السالبية الكهربائية لعنصر المجموعة 7A في الدورة نفسها.",
          "zh": "它的电负性小于同周期 7A 族元素。",
          "ku": "Elektronegatîfiya wê ji ya elementa koma 7A ya heman periyodê piçûktir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "20 elektronun katmanlara dağılımı 2-8-8-2'dir. Dört katman olduğu için X 4. periyotta, son katmanında 2 elektron olduğu için 2A grubundadır; yani toprak alkali metal olan kalsiyumdur. 2 değerlik elektronunu vererek X2+ iyonu oluşturur. Metal olduğundan elektronegatifliği aynı periyodun 7A elementinden küçüktür. Değerlik elektron sayısı 8 değil 2'dir; 8, sondan bir önceki katmandaki elektron sayısıdır.",
        "en": "The 20 electrons are arranged 2-8-8-2. With four shells X is in period 4, and with 2 electrons in the outer shell it is in group 2A: it is calcium, an alkaline earth metal. It loses its 2 valence electrons to form X2+. Being a metal, its electronegativity is lower than that of the 7A element of the same period. It has 2 valence electrons, not 8; 8 is the number in the second-to-last shell.",
        "de": "Die 20 Elektronen sind als 2-8-8-2 verteilt. Vier Schalen bedeuten 4. Periode, 2 Außenelektronen Gruppe 2A: Es ist Calcium, ein Erdalkalimetall. Durch Abgabe der 2 Valenzelektronen bildet es X2+. Als Metall ist seine Elektronegativität kleiner als die des 7A-Elements derselben Periode. Es hat 2 Valenzelektronen, nicht 8; 8 ist die Elektronenzahl der vorletzten Schale.",
        "fr": "Les 20 électrons se répartissent en 2-8-8-2. Quatre couches : 4e période ; 2 électrons externes : groupe 2A. C'est le calcium, un métal alcalino-terreux. Il cède ses 2 électrons de valence pour former X2+. Étant un métal, son électronégativité est inférieure à celle de l'élément 7A de la même période. Il a 2 électrons de valence et non 8 ; 8 est le nombre d'électrons de l'avant-dernière couche.",
        "ru": "20 электронов распределены по слоям так: 2-8-8-2. Четыре электронных слоя — 4-й период, 2 электрона на внешнем слое — группа 2A: это кальций, щёлочноземельный металл. Отдавая 2 валентных электрона, он образует ион X2+. Как металл, он менее электроотрицателен, чем элемент группы 7A того же периода. Валентных электронов 2, а не 8; 8 — число электронов на предпоследнем слое.",
        "ar": "توزيع الإلكترونات العشرين على الأغلفة 2-8-8-2. أربعة أغلفة تعني الدورة الرابعة، وإلكترونان في الغلاف الأخير يعنيان المجموعة 2A، فهو الكالسيوم، فلز قلوي ترابي. يفقد إلكتروني التكافؤ مكوّناً X2+. ولأنه فلز فسالبيته الكهربائية أقل من السالبية الكهربائية لعنصر 7A في الدورة نفسها. عدد إلكترونات التكافؤ 2 لا 8؛ فالعدد 8 هو عدد إلكترونات الغلاف قبل الأخير.",
        "zh": "20 个电子的分层排布为 2-8-8-2。有四个电子层，位于第 4 周期；最外层 2 个电子，位于 2A 族，即碱土金属钙。它失去 2 个价电子形成 X2+。作为金属，其电负性小于同周期 7A 族元素。价电子数是 2 而不是 8；8 是次外层的电子数。",
        "ku": "Belavbûna 20 elektronan li ser qatan 2-8-8-2 ye. Ji ber ku çar qat hene, X di periyoda 4. de ye; ji ber ku di qata dawî de 2 elektron hene, di koma 2A de ye: ango kalsiyûm e, metaleke alkalî-axî. Bi dayîna 2 elektronên valansê îyona X2+ çêdike. Ji ber ku metal e, elektronegatîfiya wê ji ya elementa 7A ya heman periyodê piçûktir e. Hejmara elektronên valansê ne 8, 2 ye; 8 hejmara elektronên qata berî ya dawî ye."
      }
    },
    {
      "id": "u02-twin12",
      "stem": {
        "tr": "Laboratuvarda sodyum metali gazyağı (petrol) içinde saklanır. Bu uygulamanın temel nedeni aşağıdakilerden hangisidir?",
        "en": "In the laboratory, sodium metal is stored under kerosene (paraffin oil). What is the main reason for this?",
        "de": "Im Labor wird Natriummetall unter Petroleum (Paraffinöl) aufbewahrt. Was ist der Hauptgrund dafür?",
        "fr": "Au laboratoire, le sodium métallique est conservé dans du pétrole (huile de paraffine). Quelle en est la raison principale ?",
        "ru": "В лаборатории металлический натрий хранят под слоем керосина. Какова основная причина этого?",
        "ar": "يُحفظ فلز الصوديوم في المختبر تحت الكيروسين (زيت البارافين). ما السبب الرئيس لذلك؟",
        "zh": "实验室中金属钠保存在煤油中。这样做的主要原因是什么？",
        "ku": "Di laboratuwarê de metala sodyûmê di nav kerosînê (gazyaxê) de tê hilanîn. Sedema sereke ya vê çi ye?"
      },
      "options": [
        {
          "tr": "Oda sıcaklığında sıvı olduğu için buharlaşmasını önlemek",
          "en": "To stop it evaporating, because it is liquid at room temperature",
          "de": "Um sein Verdunsten zu verhindern, weil es bei Raumtemperatur flüssig ist",
          "fr": "Pour l'empêcher de s'évaporer, car il est liquide à température ambiante",
          "ru": "Чтобы он не испарялся, так как при комнатной температуре он жидкий",
          "ar": "لمنع تبخره لأنه سائل في درجة حرارة الغرفة",
          "zh": "因为它在室温下是液体，为防止其蒸发",
          "ku": "Ji bo ku buhar nebe, ji ber ku di germahiya odeyê de şile ye"
        },
        {
          "tr": "Radyoaktif ışımasını engellemek",
          "en": "To block its radioactive radiation",
          "de": "Um seine radioaktive Strahlung abzuschirmen",
          "fr": "Pour bloquer son rayonnement radioactif",
          "ru": "Чтобы задержать его радиоактивное излучение",
          "ar": "لحجب إشعاعه النووي",
          "zh": "为了阻挡它的放射性辐射",
          "ku": "Ji bo astengkirina tîrêjên wê yên radyoaktîf"
        },
        {
          "tr": "Gazyağında çözünerek iyonlarına ayrılmasını sağlamak",
          "en": "So that it dissolves in the kerosene and splits into ions",
          "de": "Damit es sich im Petroleum löst und in Ionen zerfällt",
          "fr": "Pour qu'il se dissolve dans le pétrole en se dissociant en ions",
          "ru": "Чтобы он растворялся в керосине и распадался на ионы",
          "ar": "ليذوب في الكيروسين ويتفكك إلى أيوناته",
          "zh": "使它溶解在煤油中并电离成离子",
          "ku": "Ji bo ku di kerosînê de bihele û bibe îyonên xwe"
        },
        {
          "tr": "Elektrik iletkenliğini artırmak",
          "en": "To increase its electrical conductivity",
          "de": "Um seine elektrische Leitfähigkeit zu erhöhen",
          "fr": "Pour augmenter sa conductivité électrique",
          "ru": "Чтобы повысить его электропроводность",
          "ar": "لزيادة توصيله الكهربائي",
          "zh": "为了提高它的导电性",
          "ku": "Ji bo zêdekirina guhezîna wê ya elektrîkê"
        },
        {
          "tr": "Havadaki oksijen ve nem ile kolayca tepkimeye girmesini önlemek",
          "en": "To prevent it from reacting readily with oxygen and moisture in the air",
          "de": "Um zu verhindern, dass es leicht mit Luftsauerstoff und Feuchtigkeit reagiert",
          "fr": "Pour l'empêcher de réagir facilement avec l'oxygène et l'humidité de l'air",
          "ru": "Чтобы он не вступал легко в реакцию с кислородом и влагой воздуха",
          "ar": "لمنعه من التفاعل بسهولة مع أكسجين الهواء ورطوبته",
          "zh": "防止它与空气中的氧气和水分迅速反应",
          "ku": "Ji bo ku bi hêsanî bi oksîjen û şiliya hewayê re nekeve reaksiyonê"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Sodyum 1A grubunda yer alan, değerlik elektronunu çok kolay veren aktif bir metaldir; havadaki oksijenle hızla oksitlenir, nem ve su ile şiddetli tepkime vererek H2 açığa çıkarır. Gazyağı sodyumla tepkimeye girmez ve onu havadan yalıtır. Sodyum oda sıcaklığında katıdır, radyoaktif değildir ve gazyağında çözünmez.",
        "en": "Sodium is a group 1A metal that gives up its valence electron very easily; it oxidises quickly in air and reacts vigorously with moisture and water, releasing H2. Kerosene does not react with sodium and shields it from the air. Sodium is solid at room temperature, is not radioactive and does not dissolve in kerosene.",
        "de": "Natrium ist ein Metall der Gruppe 1A, das sein Valenzelektron sehr leicht abgibt; es oxidiert an der Luft schnell und reagiert heftig mit Feuchtigkeit und Wasser unter H2-Entwicklung. Petroleum reagiert nicht mit Natrium und schirmt es von der Luft ab. Natrium ist bei Raumtemperatur fest, nicht radioaktiv und löst sich nicht in Petroleum.",
        "fr": "Le sodium est un métal du groupe 1A qui cède très facilement son électron de valence ; il s'oxyde vite à l'air et réagit vivement avec l'humidité et l'eau en libérant H2. Le pétrole ne réagit pas avec le sodium et l'isole de l'air. Le sodium est solide à température ambiante, n'est pas radioactif et ne se dissout pas dans le pétrole.",
        "ru": "Натрий — металл группы 1A, очень легко отдающий валентный электрон; на воздухе он быстро окисляется, а с влагой и водой бурно реагирует с выделением H2. Керосин не реагирует с натрием и изолирует его от воздуха. Натрий при комнатной температуре твёрдый, не радиоактивен и не растворяется в керосине.",
        "ar": "الصوديوم فلز من المجموعة 1A يفقد إلكترون تكافئه بسهولة كبيرة، فيتأكسد سريعاً في الهواء ويتفاعل بعنف مع الرطوبة والماء مطلقاً H2. والكيروسين لا يتفاعل مع الصوديوم ويعزله عن الهواء. والصوديوم صلب في درجة حرارة الغرفة وليس مشعاً ولا يذوب في الكيروسين.",
        "zh": "钠是 1A 族金属，极易失去价电子；在空气中迅速被氧化，遇水分和水剧烈反应并放出 H2。煤油不与钠反应，能把钠与空气隔绝。钠在室温下是固体，没有放射性，也不溶于煤油。",
        "ku": "Sodyûm metaleke çalak a koma 1A ye ku elektrona xwe ya valansê pir bi hêsanî dide; di hewayê de bi oksîjenê re zû oksîde dibe, bi şilî û avê re jî bi tundî dikeve reaksiyonê û H2 derdixe. Kerosîn bi sodyûmê re nakeve reaksiyonê û wê ji hewayê diparêze. Sodyûm di germahiya odeyê de hişk e, ne radyoaktîf e û di kerosînê de nahele."
      }
    },
    {
      "id": "u02-twin13",
      "stem": {
        "tr": "Argon gazı, akkor flamanlı ampullerin içinde ve kaynak işlemlerinde metali havadan korumak amacıyla kullanılır. Bu kullanımlar argonun hangi özelliğine dayanır?",
        "en": "Argon is used inside incandescent light bulbs and in welding to protect the metal from air. Which property of argon are these uses based on?",
        "de": "Argon wird in Glühlampen und beim Schweißen zum Schutz des Metalls vor Luft verwendet. Auf welcher Eigenschaft des Argons beruhen diese Anwendungen?",
        "fr": "L'argon est utilisé dans les ampoules à incandescence et en soudage pour protéger le métal de l'air. Sur quelle propriété de l'argon reposent ces usages ?",
        "ru": "Аргон используют в лампах накаливания и при сварке для защиты металла от воздуха. На каком свойстве аргона основаны эти применения?",
        "ar": "يُستخدم غاز الأرغون داخل المصابيح المتوهجة وفي عمليات اللحام لحماية الفلز من الهواء. على أيّ خاصية للأرغون تعتمد هذه الاستخدامات؟",
        "zh": "氩气被充入白炽灯泡中，并在焊接时用来保护金属不与空气接触。这些用途依据的是氩的哪一性质？",
        "ku": "Gaza argonê di hundirê ampûlên bi flamana sorbûyî de û di kaynakkirinê de ji bo parastina metalê ji hewayê tê bikaranîn. Ev bikaranîn li ser kîjan taybetmendiya argonê ava dibin?"
      },
      "options": [
        {
          "tr": "Elektronegatifliğinin çok yüksek olması",
          "en": "Its very high electronegativity",
          "de": "Seine sehr hohe Elektronegativität",
          "fr": "Sa très grande électronégativité",
          "ru": "Очень высокая электроотрицательность",
          "ar": "سالبيته الكهربائية العالية جداً",
          "zh": "它的电负性很高",
          "ku": "Elektronegatîfiya wê ya pir bilind"
        },
        {
          "tr": "Kararlı elektron dizilimi nedeniyle tepkimeye girme eğiliminin çok düşük olması",
          "en": "Its very low tendency to react, owing to its stable electron arrangement",
          "de": "Seine sehr geringe Reaktionsneigung aufgrund der stabilen Elektronenanordnung",
          "fr": "Sa très faible tendance à réagir, due à sa configuration électronique stable",
          "ru": "Очень низкая склонность вступать в реакции из-за устойчивой электронной конфигурации",
          "ar": "ميله الضعيف جداً إلى التفاعل بسبب ترتيبه الإلكتروني المستقر",
          "zh": "由于电子排布稳定，它极不容易发生反应",
          "ku": "Ji ber rêzkirina elektronan a stabîl, meyla wê ya ketina reaksiyonê pir kêm e"
        },
        {
          "tr": "Oksijenle kolayca birleşerek ısı açığa çıkarması",
          "en": "It combines easily with oxygen and releases heat",
          "de": "Es verbindet sich leicht mit Sauerstoff und setzt Wärme frei",
          "fr": "Il se combine facilement avec l'oxygène en dégageant de la chaleur",
          "ru": "Способность легко соединяться с кислородом с выделением теплоты",
          "ar": "اتحاده بسهولة مع الأكسجين وإطلاقه الحرارة",
          "zh": "容易与氧气化合并放出热量",
          "ku": "Bi hêsanî bi oksîjenê re dibe yek û germ derdixe"
        },
        {
          "tr": "Metalik bağ yaparak elektriği iyi iletmesi",
          "en": "It forms metallic bonds and conducts electricity well",
          "de": "Es bildet Metallbindungen und leitet Strom gut",
          "fr": "Il forme des liaisons métalliques et conduit bien l'électricité",
          "ru": "Способность образовывать металлическую связь и хорошо проводить ток",
          "ar": "تكوينه روابط فلزية وتوصيله الكهرباء جيداً",
          "zh": "形成金属键，导电性好",
          "ku": "Girêdana metalîk çêdike û elektrîkê baş diguhezîne"
        },
        {
          "tr": "Suda çok iyi çözünmesi",
          "en": "It dissolves very well in water",
          "de": "Es löst sich sehr gut in Wasser",
          "fr": "Il est très soluble dans l'eau",
          "ru": "Очень высокая растворимость в воде",
          "ar": "ذوبانه الجيد جداً في الماء",
          "zh": "极易溶于水",
          "ku": "Di avê de pir baş dihele"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Argon 8A grubunda bulunan bir soy gazdır; değerlik katmanı dolu (oktet) olduğundan elektron alma veya verme eğilimi yok denecek kadar azdır. Bu yüzden sıcak flamanı ve erimiş metali oksijenle tepkimeden koruyan inert bir ortam oluşturur. Oksijenle kolayca birleşen bir gaz bu amaçla kullanılamaz; argon metal değildir ve suda az çözünür.",
        "en": "Argon is a noble gas in group 8A; its valence shell is full (octet), so it has almost no tendency to gain or lose electrons. It therefore provides an inert atmosphere that protects the hot filament and molten metal from reacting with oxygen. A gas that combines easily with oxygen could not be used for this; argon is not a metal and is only slightly soluble in water.",
        "de": "Argon ist ein Edelgas der Gruppe 8A; seine Valenzschale ist voll (Oktett), daher neigt es kaum zur Aufnahme oder Abgabe von Elektronen. Es bildet eine inerte Atmosphäre, die den heißen Glühfaden und das geschmolzene Metall vor der Reaktion mit Sauerstoff schützt. Ein Gas, das sich leicht mit Sauerstoff verbindet, wäre ungeeignet; Argon ist kein Metall und in Wasser kaum löslich.",
        "fr": "L'argon est un gaz noble du groupe 8A ; sa couche de valence est pleine (octet), il n'a donc presque aucune tendance à gagner ou perdre des électrons. Il fournit une atmosphère inerte qui empêche le filament chaud et le métal fondu de réagir avec l'oxygène. Un gaz qui se combine facilement à l'oxygène ne conviendrait pas ; l'argon n'est pas un métal et est peu soluble dans l'eau.",
        "ru": "Аргон — благородный газ группы 8A; его валентный слой заполнен (октет), поэтому он почти не склонен отдавать или принимать электроны. Он создаёт инертную среду, защищающую раскалённую нить и расплавленный металл от реакции с кислородом. Газ, легко соединяющийся с кислородом, для этого не подошёл бы; аргон не металл и мало растворим в воде.",
        "ar": "الأرغون غاز نبيل من المجموعة 8A، غلاف تكافئه ممتلئ (ثُمانية) فلا يكاد يميل إلى كسب الإلكترونات أو فقدها. ولذلك يوفّر وسطاً خاملاً يحمي الفتيل الساخن والفلز المنصهر من التفاعل مع الأكسجين. والغاز الذي يتحد بسهولة مع الأكسجين لا يصلح لهذا الغرض، والأرغون ليس فلزاً وقليل الذوبان في الماء.",
        "zh": "氩是 8A 族稀有气体，价电子层已满（八隅体），几乎没有得失电子的倾向，因此能提供惰性气氛，防止炽热的灯丝和熔融金属与氧气反应。容易与氧化合的气体不能用于此目的；氩不是金属，在水中溶解度也很小。",
        "ku": "Argon gazeke esîl a koma 8A ye; ji ber ku qata wê ya valansê tije ye (oktet), meyla wê ya wergirtin an dayîna elektronan hema hema tune ye. Ji ber vê yekê derdoreke bêçalak çêdike ku flamana germ û metala helîyayî ji reaksiyona bi oksîjenê re diparêze. Gazeke ku bi hêsanî bi oksîjenê re dibe yek ji bo vê armancê nayê bikaranîn; argon ne metal e û di avê de kêm dihele."
      }
    },
    {
      "id": "u02-twin14",
      "stem": {
        "tr": "Dalton atom kuramının aşağıdaki varsayımlarından hangisi izotopların keşfedilmesiyle geçerliliğini yitirmiştir?",
        "en": "Which of the following assumptions of Dalton's atomic theory lost its validity with the discovery of isotopes?",
        "de": "Welche der folgenden Annahmen der Daltonschen Atomtheorie verlor mit der Entdeckung der Isotope ihre Gültigkeit?",
        "fr": "Laquelle des hypothèses suivantes de la théorie atomique de Dalton a perdu sa validité avec la découverte des isotopes ?",
        "ru": "Какое из следующих положений атомной теории Дальтона утратило силу после открытия изотопов?",
        "ar": "أيّ الافتراضات الآتية في نظرية دالتون الذرية فقد صحته باكتشاف النظائر؟",
        "zh": "道尔顿原子论的下列假设中，哪一条因同位素的发现而不再成立？",
        "ku": "Kîjan ji van texmînên teoriya atomê ya Dalton bi keşfkirina îzotopan derbasdariya xwe winda kir?"
      },
      "options": [
        {
          "tr": "Maddeler atom adı verilen çok küçük taneciklerden oluşur.",
          "en": "Matter is made of very small particles called atoms.",
          "de": "Materie besteht aus sehr kleinen Teilchen, den Atomen.",
          "fr": "La matière est formée de très petites particules appelées atomes.",
          "ru": "Вещество состоит из очень маленьких частиц — атомов.",
          "ar": "تتكون المادة من جسيمات صغيرة جداً تسمى الذرات.",
          "zh": "物质由称为原子的微小粒子构成。",
          "ku": "Made ji perçeyên pir piçûk ên bi navê atom pêk tên."
        },
        {
          "tr": "Kimyasal tepkimelerde atomlar yoktan var edilmez, yok edilmez; yeniden düzenlenir.",
          "en": "In chemical reactions atoms are neither created nor destroyed; they are rearranged.",
          "de": "Bei chemischen Reaktionen werden Atome weder erzeugt noch vernichtet, sondern umgeordnet.",
          "fr": "Dans les réactions chimiques, les atomes ne sont ni créés ni détruits ; ils sont réarrangés.",
          "ru": "В химических реакциях атомы не возникают и не исчезают, а перегруппировываются.",
          "ar": "في التفاعلات الكيميائية لا تُستحدث الذرات ولا تفنى بل يُعاد ترتيبها.",
          "zh": "在化学反应中原子既不产生也不消失，只是重新组合。",
          "ku": "Di reaksiyonên kîmyewî de atom ji tunebûnê çênabin û tune nabin; ji nû ve tên rêzkirin."
        },
        {
          "tr": "Bileşikler farklı atomların belirli oranlarda birleşmesiyle oluşur.",
          "en": "Compounds form when different atoms combine in definite ratios.",
          "de": "Verbindungen entstehen, wenn sich verschiedene Atome in bestimmten Verhältnissen verbinden.",
          "fr": "Les composés se forment par l'union d'atomes différents dans des proportions définies.",
          "ru": "Соединения образуются при соединении разных атомов в определённых соотношениях.",
          "ar": "تتكون المركبات باتحاد ذرات مختلفة بنسب محددة.",
          "zh": "化合物由不同原子按一定比例结合而成。",
          "ku": "Pêkhate bi yekbûna atomên cuda bi rêjeyên diyar çêdibin."
        },
        {
          "tr": "Bir elementin bütün atomlarının kütleleri birbirinin aynısıdır.",
          "en": "All atoms of an element have exactly the same mass.",
          "de": "Alle Atome eines Elements haben genau dieselbe Masse.",
          "fr": "Tous les atomes d'un élément ont exactement la même masse.",
          "ru": "Все атомы одного элемента имеют одинаковую массу.",
          "ar": "لجميع ذرات العنصر الواحد الكتلة نفسها تماماً.",
          "zh": "同种元素的所有原子质量完全相同。",
          "ku": "Girseya hemû atomên elementekê tam wekhev e."
        },
        {
          "tr": "Farklı elementlerin atomlarının özellikleri birbirinden farklıdır.",
          "en": "Atoms of different elements have different properties.",
          "de": "Atome verschiedener Elemente haben unterschiedliche Eigenschaften.",
          "fr": "Les atomes d'éléments différents ont des propriétés différentes.",
          "ru": "Атомы разных элементов различаются по свойствам.",
          "ar": "تختلف خواص ذرات العناصر المختلفة بعضها عن بعض.",
          "zh": "不同元素的原子性质不同。",
          "ku": "Taybetmendiyên atomên elementên cuda ji hev cuda ne."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "İzotoplar aynı elementin proton sayısı aynı, nötron sayısı farklı atomlarıdır; dolayısıyla aynı elementin atomlarının kütleleri farklı olabilir. Bu durum Dalton'un \"bir elementin bütün atomları kütle dahil her yönüyle aynıdır\" varsayımını çürütmüştür. Maddenin atomlardan oluşması, tepkimelerde atomların korunması, bileşiklerin belirli oranlarla oluşması ve farklı elementlerin atomlarının farklı olması bugün de geçerlidir.",
        "en": "Isotopes are atoms of the same element with the same proton number but different neutron numbers, so atoms of one element can have different masses. This disproved Dalton's assumption that all atoms of an element are identical, including in mass. That matter is made of atoms, that atoms are conserved in reactions, that compounds form in fixed ratios and that atoms of different elements differ all remain valid.",
        "de": "Isotope sind Atome desselben Elements mit gleicher Protonen-, aber verschiedener Neutronenzahl; Atome eines Elements können also verschiedene Massen haben. Das widerlegte Daltons Annahme, alle Atome eines Elements seien – auch in der Masse – gleich. Dass Materie aus Atomen besteht, Atome bei Reaktionen erhalten bleiben, Verbindungen in festen Verhältnissen entstehen und Atome verschiedener Elemente verschieden sind, gilt weiterhin.",
        "fr": "Les isotopes sont des atomes d'un même élément ayant le même nombre de protons mais des nombres de neutrons différents : les atomes d'un élément peuvent donc avoir des masses différentes. Cela a réfuté l'hypothèse de Dalton selon laquelle tous les atomes d'un élément sont identiques, masse comprise. Que la matière soit faite d'atomes, que les atomes se conservent, que les composés se forment en proportions définies et que les atomes d'éléments différents diffèrent reste valable.",
        "ru": "Изотопы — атомы одного элемента с одинаковым числом протонов, но разным числом нейтронов, то есть атомы одного элемента могут иметь разную массу. Это опровергло положение Дальтона о том, что все атомы элемента одинаковы, в том числе по массе. Положения о том, что вещество состоит из атомов, атомы сохраняются в реакциях, соединения образуются в определённых соотношениях, а атомы разных элементов различаются, остаются верными.",
        "ar": "النظائر ذرات للعنصر نفسه لها عدد البروتونات نفسه وأعداد نيوترونات مختلفة، فقد تختلف كتل ذرات العنصر الواحد. وهذا نقض افتراض دالتون بأن جميع ذرات العنصر متطابقة بما في ذلك الكتلة. أما تكوّن المادة من ذرات، وحفظ الذرات في التفاعلات، وتكوّن المركبات بنسب محددة، واختلاف ذرات العناصر المختلفة، فما زالت صحيحة.",
        "zh": "同位素是质子数相同、中子数不同的同种元素的原子，因此同种元素的原子质量可以不同。这推翻了道尔顿“同种元素的原子在质量等各方面完全相同”的假设。物质由原子构成、原子在反应中守恒、化合物按一定比例形成、不同元素的原子不同，这些观点至今仍然成立。",
        "ku": "Îzotop atomên heman elementê ne ku hejmara protonên wan wekhev, lê hejmara notronên wan cuda ye; ango girseya atomên heman elementê dikare cuda be. Ev yek texmîna Dalton a \"hemû atomên elementekê, girse jî tê de, ji her alî ve wekhev in\" pûç kir. Pêkhatina madeyê ji atoman, parastina atoman di reaksiyonan de, çêbûna pêkhateyan bi rêjeyên diyar û cudabûna atomên elementên cuda îro jî derbasdar in."
      }
    },
    {
      "id": "u02-twin15",
      "stem": {
        "tr": "Mendeleyev'in 1869'da yayımladığı periyodik tablonun bilim dünyasında güçlü bir kabul görmesini sağlayan özelliği aşağıdakilerden hangisidir?",
        "en": "Which feature of the periodic table Mendeleev published in 1869 earned it strong acceptance in the scientific world?",
        "de": "Welche Eigenschaft des 1869 von Mendelejew veröffentlichten Periodensystems verschaffte ihm breite Anerkennung in der Wissenschaft?",
        "fr": "Quelle caractéristique du tableau périodique publié par Mendeleïev en 1869 lui a valu une large reconnaissance scientifique ?",
        "ru": "Какая особенность периодической таблицы, опубликованной Менделеевым в 1869 году, обеспечила ей широкое признание в науке?",
        "ar": "ما الميزة التي جعلت الجدول الدوري الذي نشره مندلييف عام 1869 يحظى بقبول واسع في الأوساط العلمية؟",
        "zh": "门捷列夫 1869 年发表的周期表能在科学界获得广泛认可，主要是由于下列哪一特点？",
        "ku": "Kîjan taybetmendiya tabloya periyodîk a ku Mendeleyev di sala 1869an de weşand, bû sedem ku di cîhana zanistê de bi xurtî were qebûlkirin?"
      },
      "options": [
        {
          "tr": "Elementleri proton sayılarına göre sıralaması",
          "en": "Ordering the elements by proton number",
          "de": "Die Anordnung der Elemente nach der Protonenzahl",
          "fr": "Le classement des éléments selon leur nombre de protons",
          "ru": "Расположение элементов по числу протонов",
          "ar": "ترتيب العناصر حسب عدد البروتونات",
          "zh": "按质子数排列元素",
          "ku": "Rêzkirina elementan li gorî hejmara protonan"
        },
        {
          "tr": "Soy gazları ayrı bir grup olarak ilk kez tabloya yerleştirmesi",
          "en": "Being the first to place the noble gases as a separate group",
          "de": "Die erstmalige Einordnung der Edelgase als eigene Gruppe",
          "fr": "Le placement, pour la première fois, des gaz nobles dans un groupe à part",
          "ru": "Выделение благородных газов в отдельную группу",
          "ar": "وضع الغازات النبيلة لأول مرة مجموعةً مستقلة في الجدول",
          "zh": "首次把稀有气体作为单独一族放入表中",
          "ku": "Cara yekem danîna gazên esîl wekî komeke cuda di tabloyê de"
        },
        {
          "tr": "Henüz keşfedilmemiş elementler için boşluk bırakıp bunların özelliklerini önceden tahmin etmesi",
          "en": "Leaving gaps for undiscovered elements and predicting their properties in advance",
          "de": "Lücken für noch unentdeckte Elemente zu lassen und deren Eigenschaften vorherzusagen",
          "fr": "Le fait de laisser des cases vides pour des éléments inconnus et d'en prédire les propriétés",
          "ru": "Пустые места, оставленные для неоткрытых элементов, и предсказание их свойств",
          "ar": "ترك فراغات لعناصر لم تُكتشف بعد والتنبؤ بخواصها مسبقاً",
          "zh": "为尚未发现的元素留下空位并预言其性质",
          "ku": "Ji bo elementên ku hîn nehatine keşfkirin cih vala hiştin û pêşbînîkirina taybetmendiyên wan"
        },
        {
          "tr": "Elementleri nötron sayılarına göre sıralaması",
          "en": "Ordering the elements by neutron number",
          "de": "Die Anordnung der Elemente nach der Neutronenzahl",
          "fr": "Le classement des éléments selon leur nombre de neutrons",
          "ru": "Расположение элементов по числу нейтронов",
          "ar": "ترتيب العناصر حسب عدد النيوترونات",
          "zh": "按中子数排列元素",
          "ku": "Rêzkirina elementan li gorî hejmara notronan"
        },
        {
          "tr": "Elementleri yalnızca metal ve ametal olarak iki gruba ayırması",
          "en": "Dividing the elements into just two groups, metals and non-metals",
          "de": "Die Einteilung der Elemente in nur zwei Gruppen, Metalle und Nichtmetalle",
          "fr": "La répartition des éléments en deux groupes seulement, métaux et non-métaux",
          "ru": "Деление элементов всего на две группы: металлы и неметаллы",
          "ar": "تقسيم العناصر إلى مجموعتين فقط: فلزات ولافلزات",
          "zh": "只把元素分为金属和非金属两类",
          "ku": "Dabeşkirina elementan tenê li du koman: metal û nemetal"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Mendeleyev elementleri atom kütlelerine göre dizerken özellikleri uymayan yerlerde boşluk bırakmış ve galyum, germanyum gibi henüz bilinmeyen elementlerin özelliklerini önceden tahmin etmiştir; bu elementler bulunup tahminler doğrulanınca tablo güçlü biçimde kabul görmüştür. Proton sayısına göre sıralama Moseley'e aittir; soy gazlar 1869'da henüz bilinmiyordu ve tabloya sonradan eklendi.",
        "en": "While ordering elements by atomic mass, Mendeleev left gaps where properties did not fit and predicted the properties of still-unknown elements such as gallium and germanium; when these were found and the predictions confirmed, the table won strong acceptance. Ordering by proton number is Moseley's work; the noble gases were not yet known in 1869 and were added later.",
        "de": "Beim Ordnen nach Atommasse ließ Mendelejew dort Lücken, wo die Eigenschaften nicht passten, und sagte die Eigenschaften noch unbekannter Elemente wie Gallium und Germanium voraus; als diese gefunden und die Vorhersagen bestätigt wurden, setzte sich das System durch. Die Ordnung nach der Protonenzahl stammt von Moseley; Edelgase waren 1869 noch unbekannt und wurden später ergänzt.",
        "fr": "En classant les éléments par masse atomique, Mendeleïev a laissé des cases vides là où les propriétés ne concordaient pas et a prédit les propriétés d'éléments inconnus comme le gallium et le germanium ; leur découverte, confirmant les prédictions, a assuré le succès du tableau. Le classement par nombre de protons est l'œuvre de Moseley ; les gaz nobles étaient inconnus en 1869 et furent ajoutés plus tard.",
        "ru": "Располагая элементы по атомной массе, Менделеев оставил пустые места там, где свойства не совпадали, и предсказал свойства ещё неизвестных элементов, например галлия и германия; когда их открыли и предсказания подтвердились, таблица получила широкое признание. Упорядочение по числу протонов — заслуга Мозли; благородные газы в 1869 году ещё не были известны и были добавлены позже.",
        "ar": "عند ترتيب مندلييف العناصر حسب الكتلة الذرية ترك فراغات حيث لم تتوافق الخواص، وتنبأ بخواص عناصر لم تكن معروفة مثل الغاليوم والجرمانيوم؛ وعندما اكتُشفت وتأكدت التنبؤات حظي الجدول بقبول واسع. أما الترتيب حسب عدد البروتونات فيعود إلى موزلي، والغازات النبيلة لم تكن معروفة عام 1869 وأضيفت لاحقاً.",
        "zh": "门捷列夫按原子量排列元素时，在性质不吻合处留下空位，并预言了镓、锗等当时未知元素的性质；这些元素被发现、预言得到证实后，周期表获得了广泛认可。按质子数排列是莫斯莱的工作；1869 年稀有气体尚未被发现，是后来才加入的。",
        "ku": "Mendeleyev dema element li gorî girseya atomî rêz dikirin, li cihên ku taybetmendî li hev nedihatin cih vala hiştin û taybetmendiyên elementên hîn nenas ên wekî galyûm û germanyûmê pêşbînî kirin; dema ev element hatin dîtin û pêşbînî rast derketin, tablo bi xurtî hate qebûlkirin. Rêzkirina li gorî hejmara protonan ya Moseley ye; gazên esîl di sala 1869an de hîn nedihatin zanîn û paşê li tabloyê hatin zêdekirin."
      }
    },
    {
      "id": "u02-twin16",
      "stem": {
        "tr": "Periyodik sistemde aynı grupta bulunan X, Y ve Z atomlarının yarıçapları sırasıyla 152 pm, 186 pm ve 227 pm'dir. Buna göre X, Y ve Z için aşağıdakilerden hangisi doğrudur?",
        "en": "The atomic radii of X, Y and Z, which are in the same group of the periodic table, are 152 pm, 186 pm and 227 pm respectively. Which statement about X, Y and Z is correct?",
        "de": "Die Atomradien von X, Y und Z, die in derselben Gruppe des Periodensystems stehen, betragen 152 pm, 186 pm und 227 pm. Welche Aussage über X, Y und Z ist richtig?",
        "fr": "Les rayons atomiques de X, Y et Z, situés dans le même groupe du tableau périodique, valent respectivement 152 pm, 186 pm et 227 pm. Quelle affirmation sur X, Y et Z est correcte ?",
        "ru": "Радиусы атомов X, Y и Z, находящихся в одной группе периодической системы, равны соответственно 152 пм, 186 пм и 227 пм. Какое утверждение об X, Y и Z верно?",
        "ar": "أنصاف أقطار الذرات X وY وZ الواقعة في مجموعة واحدة من الجدول الدوري هي على الترتيب 152 pm و186 pm و227 pm. أيّ العبارات الآتية عن X وY وZ صحيحة؟",
        "zh": "周期表中位于同一族的 X、Y、Z 三种原子的半径依次为 152 pm、186 pm 和 227 pm。关于 X、Y、Z，下列说法正确的是哪一项？",
        "ku": "Nîvçapên atomên X, Y û Z yên ku di heman koma tabloya periyodîk de ne, bi rêzê 152 pm, 186 pm û 227 pm in. Li gorî vê, kîjan gotin ji bo X, Y û Z rast e?"
      },
      "options": [
        {
          "tr": "Atom numarası en büyük olan Z'dir.",
          "en": "Z has the largest atomic number.",
          "de": "Z hat die größte Ordnungszahl.",
          "fr": "Z a le plus grand numéro atomique.",
          "ru": "Наибольший порядковый номер у Z.",
          "ar": "أكبرها عدداً ذرياً Z.",
          "zh": "原子序数最大的是 Z。",
          "ku": "Hejmara atomî ya herî mezin a Z ye."
        },
        {
          "tr": "Birinci iyonlaşma enerjisi en büyük olan Z'dir.",
          "en": "Z has the highest first ionisation energy.",
          "de": "Z hat die höchste erste Ionisierungsenergie.",
          "fr": "Z a la plus grande première énergie d'ionisation.",
          "ru": "Наибольшая первая энергия ионизации у Z.",
          "ar": "أكبرها طاقة تأين أولى Z.",
          "zh": "第一电离能最大的是 Z。",
          "ku": "Enerjiya îyonîzasyonê ya yekem a herî mezin a Z ye."
        },
        {
          "tr": "Metalik aktifliği en büyük olan X'tir.",
          "en": "X has the greatest metallic reactivity.",
          "de": "X hat die größte metallische Aktivität.",
          "fr": "X a la plus grande réactivité métallique.",
          "ru": "Наибольшая металлическая активность у X.",
          "ar": "أكبرها نشاطاً فلزياً X.",
          "zh": "金属活动性最强的是 X。",
          "ku": "Çalakiya metalîk a herî mezin a X ye."
        },
        {
          "tr": "Elektronegatifliği en küçük olan X'tir.",
          "en": "X has the lowest electronegativity.",
          "de": "X hat die kleinste Elektronegativität.",
          "fr": "X a la plus faible électronégativité.",
          "ru": "Наименьшая электроотрицательность у X.",
          "ar": "أصغرها سالبيةً كهربائية X.",
          "zh": "电负性最小的是 X。",
          "ku": "Elektronegatîfiya herî piçûk a X ye."
        },
        {
          "tr": "Değerlik elektron sayıları X > Y > Z şeklindedir.",
          "en": "Their valence electron numbers are X > Y > Z.",
          "de": "Für die Valenzelektronenzahlen gilt X > Y > Z.",
          "fr": "Leurs nombres d'électrons de valence sont X > Y > Z.",
          "ru": "Числа валентных электронов: X > Y > Z.",
          "ar": "أعداد إلكترونات التكافؤ فيها X > Y > Z.",
          "zh": "价电子数 X > Y > Z。",
          "ku": "Hejmarên elektronên valansê wekî X > Y > Z ne."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Aynı grupta aşağı inildikçe katman sayısı ve atom yarıçapı artar; yarıçapı en büyük olan Z en altta olduğundan atom numarası en büyük olandır. Aşağı inildikçe iyonlaşma enerjisi ve elektronegatiflik azalır, metalik aktiflik artar: iyonlaşma enerjisi ve elektronegatiflik en büyük olan X, metalik aktifliği en büyük olan Z'dir. Aynı gruptaki elementlerin değerlik elektron sayıları eşittir.",
        "en": "Going down a group, the number of shells and the atomic radius increase; Z, with the largest radius, is lowest and so has the largest atomic number. Down the group, ionisation energy and electronegativity decrease and metallic reactivity increases: X has the highest ionisation energy and electronegativity, Z the greatest metallic reactivity. Elements in the same group have equal numbers of valence electrons.",
        "de": "In einer Gruppe nehmen Schalenzahl und Atomradius nach unten zu; Z mit dem größten Radius steht am weitesten unten und hat die größte Ordnungszahl. Nach unten sinken Ionisierungsenergie und Elektronegativität, die metallische Aktivität steigt: X hat die höchste Ionisierungsenergie und Elektronegativität, Z die größte Aktivität. Elemente einer Gruppe haben gleich viele Valenzelektronen.",
        "fr": "En descendant un groupe, le nombre de couches et le rayon atomique augmentent ; Z, au plus grand rayon, est le plus bas et a donc le plus grand numéro atomique. Vers le bas, l'énergie d'ionisation et l'électronégativité diminuent et la réactivité métallique augmente : X a la plus grande énergie d'ionisation et électronégativité, Z la plus grande réactivité. Les éléments d'un même groupe ont le même nombre d'électrons de valence.",
        "ru": "Вниз по группе число электронных слоёв и радиус атома растут; Z с наибольшим радиусом расположен ниже всех, значит, у него наибольший порядковый номер. Вниз по группе энергия ионизации и электроотрицательность уменьшаются, а металлическая активность растёт: наибольшие энергия ионизации и электроотрицательность у X, наибольшая металлическая активность у Z. У элементов одной группы одинаковое число валентных электронов.",
        "ar": "عند النزول في المجموعة يزداد عدد الأغلفة ونصف القطر الذري، وZ صاحب أكبر نصف قطر هو الأدنى فله أكبر عدد ذري. ومع النزول تقل طاقة التأين والسالبية الكهربائية ويزداد النشاط الفلزي: فأكبرها طاقةَ تأين وسالبيةً كهربائية X، وأنشطها فلزياً Z. وعناصر المجموعة الواحدة متساوية في عدد إلكترونات التكافؤ.",
        "zh": "同族从上到下电子层数和原子半径增大；半径最大的 Z 位于最下方，原子序数最大。从上到下电离能和电负性减小，金属活动性增强：电离能和电负性最大的是 X，金属活动性最强的是 Z。同族元素的价电子数相等。",
        "ku": "Di komê de ber bi jêr hejmara qatan û nîvçapa atomê zêde dibin; Z, ku nîvçapa wê herî mezin e, herî jêr e, loma hejmara atomî ya herî mezin a wê ye. Ber bi jêr enerjiya îyonîzasyonê û elektronegatîfî kêm dibin, çalakiya metalîk zêde dibe: enerjiya îyonîzasyonê û elektronegatîfiya herî mezin a X ye, çalakiya metalîk a herî mezin a Z ye. Hejmara elektronên valansê ya elementên heman komê wekhev e."
      }
    }
  ]
};

export default unit02;
