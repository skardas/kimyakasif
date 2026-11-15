import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit08: ChemistryUnitSeedData = {
  "id": "u08",
  "order": 8,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Karışımlar ve Ayırma Teknikleri",
    "en": "Mixtures & Separation Techniques",
    "de": "Mischungen & Trennverfahren",
    "fr": "Mélanges & Techniques de Séparation",
    "ru": "Смеси и методы разделения",
    "ar": "المخاليط وطرق الفصل",
    "zh": "混合物与分离技术",
    "ku": "Têkelî û Rêbazên Veqetandinê"
  },
  "subtitle": {
    "tr": "Homojen, Heterojen Karışımlar, Derişim ve Damıtma",
    "en": "Solutions, Colloids, Distillation & ppm",
    "de": "Homogene, heterogene Gemische, Konzentration und Destillation",
    "fr": "Mélanges homogènes et hétérogènes, concentration et distillation",
    "ru": "Гомогенные и гетерогенные смеси, концентрация и перегонка",
    "ar": "المخاليط المتجانسة وغير المتجانسة والتركيز والتقطير",
    "zh": "均匀与非均匀混合物、浓度和蒸馏",
    "ku": "Tevliheviyên homojen û heterojen, giranbûn û distilasyon"
  },
  "facts": [
    {
      "id": "u08-f01",
      "fact": {
        "tr": "Homojen karışımlar (çözeltiler) her yerinde aynı özelliği gösteren tek fazlı sistemlerdir.",
        "en": "Homogeneous mixtures (solutions) are single-phase systems that have the same properties throughout.",
        "de": "Homogene Gemische (Lösungen) sind einphasige Systeme, die durchgehend die gleichen Eigenschaften aufweisen.",
        "fr": "Les mélanges homogènes (solutions) sont des systèmes monophasés qui ont partout les mêmes propriétés.",
        "ru": "Гомогенные смеси (растворы) — это однофазные системы, обладающие одинаковыми свойствами по всему объёму.",
        "ar": "المخاليط المتجانسة (المحاليل) أنظمة أحادية الطور لها الخصائص نفسها في جميع أجزائها.",
        "zh": "均匀混合物（溶液）是各处性质都相同的单相体系。",
        "ku": "Tevliheviyên homojen (çareserî) pergalên yek-qonaxî ne ku li her derê wan heman taybetmendî hene."
      },
      "trap": {
        "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
        "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
        "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
        "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
        "ru": "Коллоиды даже без микроскопа выглядят неоднородными и сразу оседают.",
        "ar": "تبدو الغرويات غير متجانسة حتى عند النظر إليها دون مجهر، وتترسب على الفور.",
        "zh": "胶体即使不用显微镜观察也显得不均匀，并且会立即沉降。",
        "ku": "Kolloîd bêyî mîkroskopê jî heterojen xuya dikin û yekser diniştin."
      },
      "whyTrapIsFalse": {
        "tr": "Kolloitler çıplak gözle homojen görünür ve tanecikleri çok küçük olduğu için kendiliğinden hemen çökmez; heterojen oldukları ancak Tyndall etkisi veya mikroskopla anlaşılır.",
        "en": "Colloids look homogeneous to the naked eye and, because their particles are very small, do not settle quickly on their own; their heterogeneity is revealed only by the Tyndall effect or a microscope.",
        "de": "Kolloide sehen mit bloßem Auge homogen aus und setzen sich wegen ihrer sehr kleinen Teilchen nicht von selbst schnell ab; ihre Heterogenität zeigt sich erst durch den Tyndall-Effekt oder unter dem Mikroskop.",
        "fr": "Les colloïdes paraissent homogènes à l'œil nu et, leurs particules étant très petites, ne sédimentent pas rapidement d'eux-mêmes ; leur hétérogénéité n'apparaît qu'avec l'effet Tyndall ou au microscope.",
        "ru": "Коллоиды на глаз выглядят однородными и из-за очень малого размера частиц сами по себе быстро не оседают; их неоднородность выявляется только эффектом Тиндаля или под микроскопом.",
        "ar": "تبدو الغرويات متجانسة بالعين المجردة، ولا تترسب سريعًا من تلقاء نفسها لصغر دقائقها؛ ولا يُكشف عدم تجانسها إلا بظاهرة تندال أو بالمجهر.",
        "zh": "胶体用肉眼看是均匀的，而且粒子很小，不会自行迅速沉降；只有通过丁达尔效应或显微镜才能看出它是非均匀的。",
        "ku": "Kolloîd bi çavê tazî homojen xuya dikin û ji ber ku perçeyên wan pir piçûk in, bi xwe zû naniştin; heterojenbûna wan tenê bi bandora Tyndall an bi mîkroskopê tê fêmkirin."
      }
    },
    {
      "id": "u08-f02",
      "fact": {
        "tr": "Süspansiyon katı-sıvı heterojen karışımdır (örn. tebeşir tozu-su, Türk kahvesi; MEB'in süspansiyon örneği olarak verdiği, bekletilince yoğurt tanecikleri dibe çöken ayran).",
        "en": "A suspension is a solid-liquid heterogeneous mixture (e.g. chalk powder in water, Turkish coffee; ayran, given as a suspension example in the Turkish curriculum, whose yoghurt particles settle on standing).",
        "de": "Eine Suspension ist ein heterogenes Fest-flüssig-Gemisch (z. B. Kreidepulver in Wasser, türkischer Kaffee; Ayran, im türkischen Lehrplan als Suspensionsbeispiel genannt, dessen Joghurtteilchen sich beim Stehen absetzen).",
        "fr": "Une suspension est un mélange hétérogène solide-liquide (ex. : poudre de craie dans l'eau, café turc ; l'ayran, donné comme exemple de suspension dans le programme turc, dont les particules de yaourt se déposent au repos).",
        "ru": "Суспензия — неоднородная смесь твёрдого вещества с жидкостью (например, мел в воде, кофе по-турецки; в турецкой школьной программе пример суспензии — айран, в котором при стоянии оседают частицы йогурта).",
        "ar": "المعلق خليط غير متجانس من صلب وسائل (مثل مسحوق الطباشير في الماء، والقهوة التركية؛ والعيران الذي يورده المنهج التركي مثالًا للمعلق إذ تترسب دقائق اللبن فيه عند الترك).",
        "zh": "悬浊液是固-液非均匀混合物（如粉笔灰-水、土耳其咖啡；土耳其教材还以一种酸奶饮料为例，静置后其中的酸奶颗粒会沉到底部）。",
        "ku": "Suspansiyon tevliheviyek heterojen a hişk-şil e (mînak: toza tebeşîrê-av, qehweya tirkî; dew, ku bernameya MEB wek mînaka suspansiyonê dide û dema tê hiştin perçeyên mastê lê diniştin)."
      },
      "trap": {
        "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
        "en": "A suspension is a single-phase homogeneous solution.",
        "de": "Die Suspension ist eine einphasige homogene Lösung.",
        "fr": "La suspension est une solution homogène monophasée.",
        "ru": "Суспензия — однофазный однородный раствор.",
        "ar": "المعلق محلول متجانس أحادي الطور.",
        "zh": "悬浊液是单相的均匀溶液。",
        "ku": "Suspansiyon çareseriyeke homojen a yek-qonaxî ye."
      },
      "whyTrapIsFalse": {
        "tr": "Süspansiyonda katı tanecikler sıvıda çözünmeden dağılmıştır; en az iki faz vardır ve bekletilince tanecikler dibe çöker, bu yüzden homojen çözelti değil heterojen karışımdır.",
        "en": "In a suspension the solid particles are dispersed in the liquid without dissolving; there are at least two phases and the particles settle on standing, so it is a heterogeneous mixture, not a homogeneous solution.",
        "de": "In einer Suspension sind die Feststoffteilchen ungelöst in der Flüssigkeit verteilt; es gibt mindestens zwei Phasen und die Teilchen setzen sich beim Stehen ab, daher ist sie ein heterogenes Gemisch und keine homogene Lösung.",
        "fr": "Dans une suspension, les particules solides sont dispersées dans le liquide sans s'y dissoudre ; il y a au moins deux phases et les particules sédimentent au repos : c'est un mélange hétérogène, pas une solution homogène.",
        "ru": "В суспензии твёрдые частицы распределены в жидкости, не растворяясь; фаз как минимум две, и при стоянии частицы оседают, поэтому это неоднородная смесь, а не однородный раствор.",
        "ar": "في المعلق تنتشر الدقائق الصلبة في السائل دون أن تذوب؛ فيوجد طوران على الأقل وتترسب الدقائق عند الترك، لذا فهو خليط غير متجانس وليس محلولًا متجانسًا.",
        "zh": "悬浊液中固体颗粒分散在液体中但并不溶解；至少有两个相，静置后颗粒会沉降，因此它是非均匀混合物，而不是均匀溶液。",
        "ku": "Di suspansiyonê de perçeyên hişk bêyî ku bihelin di şilê de belav bûne; herî kêm du qonax hene û dema tê hiştin perçe diniştin, ji ber vê yekê ew ne çareseriyek homojen e, tevliheviyek heterojen e."
      }
    },
    {
      "id": "u08-f03",
      "fact": {
        "tr": "Emülsiyon birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımdır (örn. zeytinyağı-su, mayonez).",
        "en": "An emulsion is a heterogeneous mixture of two liquids that do not dissolve in each other (e.g. olive oil-water, mayonnaise).",
        "de": "Eine Emulsion ist ein heterogenes Gemisch zweier ineinander unlöslicher Flüssigkeiten (z. B. Olivenöl-Wasser, Mayonnaise).",
        "fr": "Une émulsion est un mélange hétérogène de deux liquides qui ne se dissolvent pas l'un dans l'autre (ex. : huile d'olive-eau, mayonnaise).",
        "ru": "Эмульсия — неоднородная смесь двух нерастворимых друг в друге жидкостей (например, оливковое масло с водой, майонез).",
        "ar": "المستحلب خليط غير متجانس من سائلين لا يذوب أحدهما في الآخر (مثل زيت الزيتون والماء، والمايونيز).",
        "zh": "乳浊液是两种互不相溶的液体形成的非均匀混合物（如橄榄油-水、蛋黄酱）。",
        "ku": "Emulsiyon tevliheviyeke heterojen a du şilên ku di hev de nahelin e (mînak: rûnê zeytûnê-av, mayonez)."
      },
      "trap": {
        "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
        "en": "The olive oil-water mixture is separated by fractional distillation.",
        "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
        "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
        "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
        "ar": "يُفصل خليط زيت الزيتون والماء بالتقطير التجزيئي.",
        "zh": "橄榄油-水混合物通过分馏分离。",
        "ku": "Tevliheviya rûnê zeytûnê-av bi distilasyona perçeyî tê veqetandin."
      },
      "whyTrapIsFalse": {
        "tr": "Ayrımsal damıtma birbiri içinde çözünen (homojen) sıvılar için kullanılır; zeytinyağı ile su karışmadığı ve iki ayrı tabaka oluşturduğu için ayırma hunisi ile ayrılır.",
        "en": "Fractional distillation is used for liquids that dissolve in each other (homogeneous); olive oil and water do not mix and form two separate layers, so they are separated with a separatory funnel.",
        "de": "Die fraktionierte Destillation wird für ineinander lösliche (homogene) Flüssigkeiten verwendet; Olivenöl und Wasser mischen sich nicht und bilden zwei Schichten, daher trennt man sie mit dem Scheidetrichter.",
        "fr": "La distillation fractionnée s'applique aux liquides miscibles (mélange homogène) ; l'huile d'olive et l'eau ne se mélangent pas et forment deux couches, on les sépare donc avec une ampoule à décanter.",
        "ru": "Фракционную перегонку применяют для взаимно растворимых (однородных) жидкостей; оливковое масло и вода не смешиваются и образуют два слоя, поэтому их разделяют делительной воронкой.",
        "ar": "يُستخدم التقطير التجزيئي للسوائل التي يذوب بعضها في بعض (خليط متجانس)؛ أما زيت الزيتون والماء فلا يمتزجان ويكوّنان طبقتين، لذا يُفصلان بقمع الفصل.",
        "zh": "分馏用于互溶（均匀）的液体；橄榄油和水不互溶，会分成两层，因此用分液漏斗分离。",
        "ku": "Distilasyona perçeyî ji bo şilên ku di hev de dihelin (homojen) tê bikaranîn; rûnê zeytûnê û av tevlî hev nabin û du qatan çêdikin, ji ber vê yekê bi hunîya veqetandinê tên veqetandin."
      }
    },
    {
      "id": "u08-f04",
      "fact": {
        "tr": "Aerosol bir gaz içinde katı veya sıvının dağılmasıyla oluşur (örn. sis, duman, sprey).",
        "en": "An aerosol is formed by the dispersion of a solid or liquid in a gas (e.g. fog, smoke, spray).",
        "de": "Ein Aerosol entsteht durch die Dispersion eines Feststoffs oder einer Flüssigkeit in einem Gas (z. B. Nebel, Rauch, Spray).",
        "fr": "Un aérosol est formé par la dispersion d'un solide ou d'un liquide dans un gaz (par exemple brouillard, fumée, spray).",
        "ru": "Аэрозоль — система, в которой твёрдое вещество или жидкость распределены в газе (например, туман, дым, спрей).",
        "ar": "يتكون الهباء الجوي من انتشار مادة صلبة أو سائلة في غاز (مثل الضباب والدخان والرذاذ).",
        "zh": "气溶胶是固体或液体分散在气体中形成的（如雾、烟、喷雾）。",
        "ku": "Aerosol bi belavbûna madeyeke hişk an şil di gazekê de çêdibe (mînak: mij, dûman, sprey)."
      },
      "trap": {
        "tr": "Duman katının sıvıda dağıldığı süspansiyondur.",
        "en": "Smoke is a suspension in which the solid is dispersed in the liquid.",
        "de": "Rauch ist eine Suspension, in der der Feststoff in der Flüssigkeit dispergiert ist.",
        "fr": "La fumée est une suspension dans laquelle le solide est dispersé dans le liquide.",
        "ru": "Дым — суспензия, в которой твёрдое вещество распределено в жидкости.",
        "ar": "الدخان معلق تنتشر فيه مادة صلبة في سائل.",
        "zh": "烟是固体分散在液体中形成的悬浊液。",
        "ku": "Dûman suspansiyonek e ku tê de madeya hişk di şilekê de belav bûye."
      },
      "whyTrapIsFalse": {
        "tr": "Dumanda katı tanecikler bir gaz (hava) içinde dağılmıştır, yani duman bir aerosoldür; süspansiyonda ise dağılma ortamı sıvıdır.",
        "en": "In smoke, solid particles are dispersed in a gas (air), so smoke is an aerosol; in a suspension the dispersion medium is a liquid.",
        "de": "Im Rauch sind Feststoffteilchen in einem Gas (Luft) verteilt, Rauch ist also ein Aerosol; bei einer Suspension ist das Dispersionsmittel eine Flüssigkeit.",
        "fr": "Dans la fumée, des particules solides sont dispersées dans un gaz (l'air) : la fumée est donc un aérosol ; dans une suspension, le milieu dispersant est un liquide.",
        "ru": "В дыме твёрдые частицы распределены в газе (воздухе), то есть дым — аэрозоль; в суспензии дисперсионной средой является жидкость.",
        "ar": "في الدخان تنتشر دقائق صلبة في غاز (الهواء)، فالدخان هباء جوي (أيروسول)؛ أما في المعلق فوسط الانتشار سائل.",
        "zh": "烟是固体颗粒分散在气体（空气）中，所以烟是气溶胶；而悬浊液的分散介质是液体。",
        "ku": "Di dûmanê de perçeyên hişk di gazekê (hewayê) de belav bûne, yanî dûman aerosol e; di suspansiyonê de navgîna belavbûnê şil e."
      }
    },
    {
      "id": "u08-f05",
      "fact": {
        "tr": "Tyndall etkisi: Kolloitlerden geçen ışık demeti saçılır ve ışığın yolu görünür.",
        "en": "Tyndall effect: A light beam passing through a colloid is scattered and its path becomes visible.",
        "de": "Tyndall-Effekt: Ein Lichtstrahl, der durch ein Kolloid fällt, wird gestreut, und sein Weg wird sichtbar.",
        "fr": "Effet Tyndall : un faisceau lumineux traversant un colloïde est diffusé et son trajet devient visible.",
        "ru": "Эффект Тиндаля: луч света, проходящий через коллоид, рассеивается, и его путь становится видимым.",
        "ar": "ظاهرة تندال: يتشتت شعاع الضوء المار عبر الغروي ويصبح مساره مرئيًا.",
        "zh": "丁达尔效应：光束通过胶体时发生散射，光的路径清晰可见。",
        "ku": "Bandora Tyndall: Tîrêja ronahiyê ya ku di koloîdekê re derbas dibe belav dibe û riya wê xuya dibe."
      },
      "trap": {
        "tr": "Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.",
        "en": "In true homogeneous solutions, the light beam is strongly scattered and visible.",
        "de": "In echten (homogenen) Lösungen wird der Lichtstrahl stark gestreut und ist sichtbar.",
        "fr": "Dans les solutions vraies (homogènes), le faisceau lumineux est fortement diffusé et visible.",
        "ru": "В истинных (гомогенных) растворах луч света сильно рассеивается и становится видимым.",
        "ar": "في المحاليل الحقيقية المتجانسة يتشتت شعاع الضوء بقوة ويصبح مرئيًا.",
        "zh": "在真溶液中，光束会被强烈散射而显出光路。",
        "ku": "Di çareseriyên homojen ên rastîn de, tîrêjê ronahiyê bi tundî belav dibe û xuya dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Gerçek çözeltilerdeki tanecikler (1 nm'den küçük) ışığı belirgin biçimde saçamayacak kadar küçüktür, bu yüzden ışığın yolu görünmez; ışık yolunun görünmesi kolloitleri çözeltilerden ayıran özelliktir.",
        "en": "The particles in true solutions (smaller than 1 nm) are too small to scatter light noticeably, so the beam's path is not visible; a visible light path is exactly what distinguishes colloids from solutions.",
        "de": "Die Teilchen echter Lösungen (kleiner als 1 nm) sind zu klein, um Licht merklich zu streuen, daher ist der Lichtweg nicht sichtbar; ein sichtbarer Lichtweg unterscheidet gerade Kolloide von Lösungen.",
        "fr": "Les particules d'une vraie solution (moins de 1 nm) sont trop petites pour diffuser nettement la lumière, le trajet du faisceau reste donc invisible ; un trajet visible est justement ce qui distingue un colloïde d'une solution.",
        "ru": "Частицы истинных растворов (меньше 1 нм) слишком малы, чтобы заметно рассеивать свет, поэтому путь луча не виден; видимый путь луча как раз отличает коллоиды от растворов.",
        "ar": "دقائق المحاليل الحقيقية (أصغر من 1 nm) أصغر من أن تشتت الضوء تشتيتًا ملحوظًا، فلا يظهر مسار الشعاع؛ وظهور مسار الضوء هو ما يميز الغرويات عن المحاليل.",
        "zh": "真溶液中的粒子(小于1 nm)太小，不能明显散射光，所以看不到光路；能看到光路正是胶体区别于溶液的特征。",
        "ku": "Perçeyên çareseriyên rastîn (ji 1 nm piçûktir) ji bo ku ronahiyê bi awayekî diyar belav bikin pir piçûk in, ji ber vê yekê riya ronahiyê nayê dîtin; xuyabûna riya ronahiyê kolloîdan ji çareseriyan cuda dike."
      }
    },
    {
      "id": "u08-f06",
      "fact": {
        "tr": "Kütlece yüzde derişim = (Çözünen Kütlesi / Çözelti Kütlesi) x 100'dür.",
        "en": "Percent concentration by mass = (Solute Mass / Solution Mass) x 100.",
        "de": "Massenprozent = (Masse des gelösten Stoffes / Masse der Lösung) x 100.",
        "fr": "Pourcentage de concentration en masse = (Masse du soluté / Masse de la solution) x 100.",
        "ru": "Массовая доля растворённого вещества (%) = (масса растворённого вещества / масса раствора) x 100.",
        "ar": "النسبة المئوية الكتلية = (كتلة المذاب / كتلة المحلول) × 100.",
        "zh": "质量分数 =（溶质质量/溶液质量）x 100。",
        "ku": "Rêjeya girseyî ya ji sedî = (Girseya madeya helyayî / Girseya çareseriyê) x 100."
      },
      "trap": {
        "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
        "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
        "de": "Der Massenprozentgehalt wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels geteilt wird.",
        "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
        "ru": "Массовую долю (%) находят делением массы растворённого вещества на массу растворителя.",
        "ar": "تُحسب النسبة المئوية الكتلية بقسمة كتلة المذاب على كتلة المذيب.",
        "zh": "质量分数是用溶质质量除以溶剂质量求得的。",
        "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Paydada çözücü değil çözelti kütlesi (çözünen + çözücü) bulunur; yalnız çözücü kütlesine bölmek derişimi olduğundan büyük bulur.",
        "en": "The denominator is the mass of the solution (solute + solvent), not of the solvent; dividing by the solvent mass alone gives a concentration that is too high.",
        "de": "Im Nenner steht die Masse der Lösung (Gelöstes + Lösungsmittel), nicht die des Lösungsmittels; teilt man nur durch die Lösungsmittelmasse, erhält man eine zu hohe Konzentration.",
        "fr": "Le dénominateur est la masse de la solution (soluté + solvant), pas celle du solvant ; diviser par la seule masse du solvant donne une concentration trop élevée.",
        "ru": "В знаменателе стоит масса раствора (растворённое вещество + растворитель), а не растворителя; деление только на массу растворителя даёт завышенную концентрацию.",
        "ar": "المقام هو كتلة المحلول (المذاب + المذيب) لا كتلة المذيب؛ والقسمة على كتلة المذيب وحدها تعطي تركيزًا أكبر من الحقيقي.",
        "zh": "分母是溶液的质量(溶质 + 溶剂)，而不是溶剂的质量；只除以溶剂质量会使算出的浓度偏大。",
        "ku": "Di parvekerê de ne girseya helkerê, girseya çareseriyê (helbûyî + helker) heye; tenê bi girseya helkerê parvekirin giranbûnê ji ya rastîn mezintir dide."
      }
    },
    {
      "id": "u08-f07",
      "fact": {
        "tr": "ppm (milyonda bir kısım) = (Çözünen Kütlesi / Çözelti Kütlesi) x 10^6'dır.",
        "en": "ppm (parts per million) = (Solute Mass / Solution Mass) x 10^6.",
        "de": "ppm (parts per million) = (Masse des gelösten Stoffes / Masse der Lösung) x 10^6.",
        "fr": "ppm (parties par million) = (Masse de soluté / Masse de solution) x 10^6.",
        "ru": "ppm (миллионная доля) = (масса растворённого вещества / масса раствора) x 10^6.",
        "ar": "ppm (جزء في المليون) = (كتلة المذاب / كتلة المحلول) × 10^6.",
        "zh": "ppm(百万分率) =（溶质质量/溶液质量）x 10^6。",
        "ku": "ppm (parçe di mîlyonekê de) = (Girseya madeya helyayî / Girseya çareseriyê) x 10^6."
      },
      "trap": {
        "tr": "ppm hesaplanırken çarpan 100'dür.",
        "en": "When calculating ppm, the multiplier is 100.",
        "de": "Bei der Berechnung von ppm beträgt der Multiplikator 100.",
        "fr": "Lors du calcul du ppm, le multiplicateur est de 100.",
        "ru": "При расчёте ppm множитель равен 100.",
        "ar": "عند حساب ppm يكون معامل الضرب 100.",
        "zh": "计算 ppm 时乘数是 100。",
        "ku": "Dema ppm tê hesibandin, lêker 100 e."
      },
      "whyTrapIsFalse": {
        "tr": "100 ile çarpmak yüzde derişimi verir; ppm \"milyonda bir kısım\" olduğu için çarpan 10^6'dır (1 ppm = %0,0001).",
        "en": "Multiplying by 100 gives the percentage concentration; ppm means \"parts per million\", so the factor is 10^6 (1 ppm = 0.0001%).",
        "de": "Die Multiplikation mit 100 ergibt die Prozentkonzentration; ppm bedeutet „Teile pro Million“, daher ist der Faktor 10^6 (1 ppm = 0,0001 %).",
        "fr": "Multiplier par 100 donne le pourcentage ; ppm signifie « partie par million », le facteur est donc 10^6 (1 ppm = 0,0001 %).",
        "ru": "Умножение на 100 даёт массовую долю в процентах; ppm означает «миллионная доля», поэтому множитель равен 10^6 (1 ppm = 0,0001 %).",
        "ar": "الضرب في 100 يعطي النسبة المئوية؛ أما ppm فتعني «جزءًا في المليون»، لذا يكون المعامل 10^6 (1 ppm = 0.0001%).",
        "zh": "乘以 100 得到的是质量分数（百分数）；ppm 表示“百万分之一”，所以乘数是 10^6 (1 ppm = 0.0001%)。",
        "ku": "Bi 100 re lêdan giranbûna sedî dide; ppm tê wateya \"parçeyek di milyonekê de\", ji ber vê yekê lêker 10^6 e (1 ppm = %0,0001)."
      }
    },
    {
      "id": "u08-f08",
      "fact": {
        "tr": "Ayrımsal damıtma, kaynama noktaları farklı olan homojen sıvı-sıvı karışımları ayırmada kullanılır (örn. ham petrolün bileşenlerine ayrılması, aseton-su).",
        "en": "Fractional distillation is used to separate homogeneous liquid-liquid mixtures whose components have different boiling points (e.g. separating crude oil into its fractions, acetone-water).",
        "de": "Die fraktionierte Destillation dient zur Trennung homogener Flüssig-flüssig-Gemische mit unterschiedlichen Siedepunkten (z. B. Zerlegung von Erdöl in Fraktionen, Aceton-Wasser).",
        "fr": "La distillation fractionnée sert à séparer des mélanges homogènes liquide-liquide dont les constituants ont des températures d'ébullition différentes (ex. : fractionnement du pétrole brut, acétone-eau).",
        "ru": "Фракционную перегонку применяют для разделения однородных смесей жидкостей с разными температурами кипения (например, разделение нефти на фракции, смесь ацетона и воды).",
        "ar": "يُستخدم التقطير التجزيئي لفصل المخاليط السائلة المتجانسة التي تختلف مكوناتها في درجات الغليان (مثل فصل النفط الخام إلى مكوناته، وفصل الأسيتون عن الماء).",
        "zh": "分馏用于分离各组分沸点不同的均匀液-液混合物（如将原油分离成各馏分、丙酮-水）。",
        "ku": "Distilasyona perçeyî ji bo veqetandina tevliheviyên şil-şil ên homojen ên ku xalên kelandinê yên pêkhateyan cuda ne tê bikaranîn (mînak: veqetandina petrola xav li pêkhateyên wê, aseton-av)."
      },
      "trap": {
        "tr": "Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.",
        "en": "Fractional distillation is a separation technique based on density difference.",
        "de": "Die fraktionierte Destillation ist eine Trenntechnik, die auf Dichteunterschieden basiert.",
        "fr": "La distillation fractionnée est une technique de séparation basée sur la différence de densité.",
        "ru": "Фракционная перегонка — это метод разделения, основанный на разнице плотностей.",
        "ar": "التقطير التجزيئي طريقة فصل تعتمد على اختلاف الكثافة.",
        "zh": "分馏是一种依据密度差异的分离方法。",
        "ku": "Distilasyona perçeyî teknîkeke veqetandinê ye ku li ser cudahiya çiriyê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Ayrımsal damıtma bileşenlerin kaynama noktası farkına dayanır; yoğunluk farkına dayanan yöntemler ayırma hunisi, santrifüj ve yüzdürme gibi yöntemlerdir.",
        "en": "Fractional distillation is based on differences in boiling point; methods based on density differences are, for example, the separatory funnel, centrifugation and flotation.",
        "de": "Die fraktionierte Destillation beruht auf Siedepunktunterschieden; auf Dichteunterschieden beruhen z. B. Scheidetrichter, Zentrifugieren und Flotation.",
        "fr": "La distillation fractionnée repose sur la différence de température d'ébullition ; les méthodes fondées sur la masse volumique sont par exemple l'ampoule à décanter, la centrifugation et la flottation.",
        "ru": "Фракционная перегонка основана на разнице температур кипения; на разнице плотностей основаны, например, делительная воронка, центрифугирование и флотация.",
        "ar": "يعتمد التقطير التجزيئي على اختلاف درجات الغليان؛ أما الطرق المعتمدة على اختلاف الكثافة فمنها قمع الفصل والطرد المركزي والتعويم.",
        "zh": "分馏依据的是沸点差异；依据密度差异的方法有分液漏斗、离心和浮选等。",
        "ku": "Distilasyona perçeyî li ser cudahiya xala kelandinê ye; rêbazên li ser cudahiya çiriyê wek hunîya veqetandinê, santrîfuj û flotasyonê ne."
      }
    },
    {
      "id": "u08-f09",
      "fact": {
        "tr": "Ayırma hunisi, özkütleleri farklı birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımları ayırır (örn. zeytinyağı-su).",
        "en": "A separatory funnel separates heterogeneous mixtures of immiscible liquids of different densities (e.g. olive oil-water).",
        "de": "Der Scheidetrichter trennt heterogene Gemische aus ineinander unlöslichen Flüssigkeiten unterschiedlicher Dichte (z. B. Olivenöl-Wasser).",
        "fr": "L'ampoule à décanter sépare les mélanges hétérogènes de liquides non miscibles de masses volumiques différentes (ex. : huile d'olive-eau).",
        "ru": "Делительная воронка разделяет неоднородные смеси нерастворимых друг в друге жидкостей разной плотности (например, оливковое масло и воду).",
        "ar": "يفصل قمع الفصل المخاليط غير المتجانسة من سوائل لا يذوب بعضها في بعض وتختلف في الكثافة (مثل زيت الزيتون-الماء).",
        "zh": "分液漏斗用于分离密度不同、互不相溶的液-液非均匀混合物（如橄榄油-水）。",
        "ku": "Hunîya veqetandinê tevliheviyên heterojen ên şil-şil ên ku di hev de nahelin û çiriyên wan cuda ne ji hev vediqetîne (mînak: rûnê zeytûnê-av)."
      },
      "trap": {
        "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
        "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
        "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
        "fr": "L'ampoule à décanter sépare des mélanges homogènes dont les points d'ébullition sont différents.",
        "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
        "ar": "يفصل قمع الفصل المخاليط المتجانسة المختلفة في درجات الغليان.",
        "zh": "分液漏斗用于分离沸点不同的均匀混合物。",
        "ku": "Hunîya veqetandinê tevliheviyên homojen ên ku xalên wan ên kelandinê cuda ne vediqetîne."
      },
      "whyTrapIsFalse": {
        "tr": "Ayırma hunisi yalnızca karışmayan ve iki ayrı tabaka oluşturan sıvılarda işe yarar; homojen sıvı karışımlarında tabaka oluşmadığından ayırma kaynama noktası farkıyla, yani damıtmayla yapılır.",
        "en": "A separatory funnel only works for immiscible liquids that form two layers; a homogeneous liquid mixture forms no layers, so it is separated by boiling-point difference, i.e. by distillation.",
        "de": "Ein Scheidetrichter funktioniert nur bei nicht mischbaren Flüssigkeiten, die zwei Schichten bilden; ein homogenes Flüssigkeitsgemisch bildet keine Schichten und wird daher über den Siedepunkt, also durch Destillation, getrennt.",
        "fr": "L'ampoule à décanter ne convient qu'aux liquides non miscibles formant deux couches ; un mélange liquide homogène ne forme pas de couches et se sépare donc par la différence d'ébullition, c'est-à-dire par distillation.",
        "ru": "Делительная воронка подходит только для несмешивающихся жидкостей, образующих два слоя; однородная жидкая смесь слоёв не образует, поэтому её разделяют по температуре кипения, то есть перегонкой.",
        "ar": "لا يصلح قمع الفصل إلا للسوائل غير الممتزجة التي تكوّن طبقتين؛ أما الخليط السائل المتجانس فلا تتكون فيه طبقات، فيُفصل باختلاف درجة الغليان أي بالتقطير.",
        "zh": "分液漏斗只适用于不互溶、能分成两层的液体；均匀液体混合物不分层，要靠沸点差异即蒸馏来分离。",
        "ku": "Hunîya veqetandinê tenê ji bo şilên ku tevlî hev nabin û du qatan çêdikin kêr tê; di tevliheviyên şil ên homojen de qat çênabin, ji ber vê yekê veqetandin bi cudahiya xala kelandinê, yanî bi distilasyonê tê kirin."
      }
    },
    {
      "id": "u08-f10",
      "fact": {
        "tr": "Yüzdürmede (flotasyon) katı tanecikler bir sıvıda yüzenler ve batanlar olarak ayrılır: talaş-kum gibi basit örneklerde yoğunluk farkından, madencilikte sülfürlü cevherlerin zenginleştirilmesinde ise taneciklerin suyla ıslanabilme farkından (ıslanmayan tanelerin hava kabarcıklarıyla köpüğe çıkması) yararlanılır.",
        "en": "In flotation, solid particles are separated in a liquid into those that float and those that sink: simple cases such as sawdust-sand use the difference in density, while the concentration of sulfide ores in mining uses the difference in wettability (non-wetted grains attach to air bubbles and rise into the froth).",
        "de": "Bei der Flotation werden Feststoffteilchen in einer Flüssigkeit in schwimmende und sinkende getrennt: einfache Fälle wie Sägemehl-Sand nutzen den Dichteunterschied, die Anreicherung sulfidischer Erze im Bergbau dagegen den Unterschied in der Benetzbarkeit (nicht benetzte Körner haften an Luftblasen und steigen in den Schaum).",
        "fr": "Dans la flottation, les particules solides sont séparées dans un liquide en particules qui flottent et particules qui coulent : les cas simples comme sciure-sable exploitent la différence de masse volumique, tandis que l'enrichissement des minerais sulfurés en exploitation minière exploite la différence de mouillabilité (les grains non mouillés s'accrochent aux bulles d'air et montent dans la mousse).",
        "ru": "При флотации твёрдые частицы в жидкости разделяются на всплывающие и тонущие: в простых случаях (опилки–песок) используют разницу плотностей, а при обогащении сульфидных руд в горном деле — разницу смачиваемости (несмачиваемые зёрна прилипают к пузырькам воздуха и поднимаются в пену).",
        "ar": "في التعويم تُفصل الدقائق الصلبة في سائل إلى طافية وغاطسة: ففي الأمثلة البسيطة كنشارة الخشب والرمل يُستفاد من اختلاف الكثافة، أما في إغناء خامات الكبريتيدات في التعدين فيُستفاد من اختلاف قابلية البلل بالماء (تلتصق الحبيبات غير المبللة بفقاعات الهواء وتصعد إلى الرغوة).",
        "zh": "浮选是在液体中把固体颗粒分成浮起的和下沉的两部分：木屑-沙子等简单情况利用密度差，而采矿中硫化矿的富集利用的是颗粒被水润湿性的差异（不被润湿的颗粒附着在气泡上进入泡沫层）。",
        "ku": "Di flotasyonê de perçeyên hişk di şilekê de wek yên ku avjenî dikin û yên ku dadikevin tên veqetandin: di mînakên hêsan ên wek qirş-qûmê de ji cudahiya çiriyê, di dewlemendkirina madenên sulfîdî yên madenê de jî ji cudahiya şilbûna bi avê (perçeyên ku şil nabin bi bilbilên hewayê derdikevin kefê) sûd tê wergirtin."
      },
      "trap": {
        "tr": "Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.",
        "en": "Flotation is the process of separating iron with the help of a magnet.",
        "de": "Bei der Flotation wird Eisen mit Hilfe eines Magneten abgetrennt.",
        "fr": "La flottation est le processus de séparation du fer à l'aide d'un aimant.",
        "ru": "Флотация — это отделение железа с помощью магнита.",
        "ar": "التعويم عملية فصل الحديد باستخدام المغناطيس.",
        "zh": "浮选是借助磁铁分离铁的方法。",
        "ku": "Flotasyon pêvajoya veqetandina hesin bi alîkariya magnetekê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Mıknatısla ayırma, demir gibi manyetik maddelerin mıknatısa çekilmesine dayanan ayrı bir yöntemdir; flotasyonda ise taneciklerin sıvı içinde yüzüp yüzmemesinden (yoğunluk veya ıslanabilme farkı) yararlanılır.",
        "en": "Magnetic separation is a different method, based on the attraction of magnetic substances such as iron; flotation uses whether particles float in a liquid or not (difference in density or wettability).",
        "de": "Die Magnetscheidung ist ein anderes Verfahren, das auf der Anziehung magnetischer Stoffe wie Eisen beruht; bei der Flotation nutzt man, ob Teilchen in einer Flüssigkeit schwimmen oder nicht (Dichte- bzw. Benetzbarkeitsunterschied).",
        "fr": "La séparation magnétique est une autre méthode, fondée sur l'attraction des substances magnétiques comme le fer ; la flottation exploite le fait que les particules flottent ou non dans un liquide (différence de masse volumique ou de mouillabilité).",
        "ru": "Магнитная сепарация — другой метод, основанный на притяжении магнитных веществ, например железа; при флотации используют то, всплывают частицы в жидкости или нет (различие плотности или смачиваемости).",
        "ar": "الفصل المغناطيسي طريقة مختلفة تعتمد على انجذاب المواد المغناطيسية كالحديد إلى المغناطيس؛ أما التعويم فيستفيد من طفو الدقائق أو عدم طفوها في السائل (اختلاف الكثافة أو قابلية البلل).",
        "zh": "磁选是另一种方法，依据铁等磁性物质被磁铁吸引；浮选利用的是颗粒能否在液体中浮起（密度或润湿性的差异）。",
        "ku": "Veqetandina bi mexnatîsê rêbazek cuda ye ku li ser kişandina madeyên mexnatîsî yên wek hesin e; di flotasyonê de ji avjeniya an neavjeniya perçeyan di şilê de (cudahiya çiriyê an şilbûnê) sûd tê wergirtin."
      }
    },
    {
      "id": "u08-f11",
      "fact": {
        "tr": "Ekstraksiyon (özütleme), karışımdaki bir bileşenin uygun bir çözücü yardımıyla çekilip ayrılmasıdır (çay demleme, şeker pancarından şeker).",
        "en": "Extraction is the separation of a component from a mixture with the help of a suitable solvent (tea brewing, sugar from sugar beets).",
        "de": "Unter Extraktion versteht man die Abtrennung einer Komponente aus einem Gemisch mit Hilfe eines geeigneten Lösungsmittels (Teeaufguss, Zucker aus Zuckerrüben).",
        "fr": "L'extraction est la séparation d'un composant d'un mélange à l'aide d'un solvant approprié (infusion de thé, sucre de betterave sucrière).",
        "ru": "Экстракция — это извлечение компонента из смеси с помощью подходящего растворителя (заваривание чая, получение сахара из сахарной свёклы).",
        "ar": "الاستخلاص هو فصل أحد مكونات الخليط بسحبه بمذيب مناسب (نقع الشاي، استخلاص السكر من بنجر السكر).",
        "zh": "萃取是利用合适的溶剂把混合物中的某一组分提取分离出来（如泡茶、从甜菜中提取糖）。",
        "ku": "Ekstraksiyon (derxistin) veqetandina pêkhateyeke tevliheviyê ye bi kişandina wê bi helkerekî guncaw (demkirina çayê, bidestxistina şekir ji silqa şekir)."
      },
      "trap": {
        "tr": "Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.",
        "en": "Extraction is a sieving method based on differences in particle size.",
        "de": "Die Extraktion ist ein Siebverfahren, das auf Unterschieden in der Teilchengröße beruht.",
        "fr": "L'extraction est une méthode de tamisage fondée sur la différence de taille des particules.",
        "ru": "Экстракция — это метод просеивания, основанный на различии размеров частиц.",
        "ar": "الاستخلاص طريقة غربلة تعتمد على اختلاف حجم الجسيمات.",
        "zh": "萃取是一种基于颗粒大小差异的筛分方法。",
        "ku": "Ekstraksiyon rêbazeke bêjingkirinê ye ku li ser cudahiya mezinahiya perçeyan e."
      },
      "whyTrapIsFalse": {
        "tr": "Tanecik boyutuna göre ayırma eleme ya da süzmedir; özütleme ise bir bileşenin seçilen çözücüde diğerlerinden çok daha iyi çözünmesine, yani çözünürlük farkına dayanır.",
        "en": "Separation by particle size is sieving or filtration; extraction relies on one component dissolving much better than the others in the chosen solvent, i.e. on a difference in solubility.",
        "de": "Trennung nach Teilchengröße ist Sieben oder Filtrieren; die Extraktion beruht darauf, dass sich ein Bestandteil im gewählten Lösungsmittel viel besser löst als die anderen, also auf einem Löslichkeitsunterschied.",
        "fr": "La séparation selon la taille des particules est le tamisage ou la filtration ; l'extraction repose sur le fait qu'un constituant se dissout bien mieux que les autres dans le solvant choisi, donc sur une différence de solubilité.",
        "ru": "Разделение по размеру частиц — это просеивание или фильтрование; экстракция основана на том, что один компонент растворяется в выбранном растворителе гораздо лучше других, то есть на различии растворимости.",
        "ar": "الفصل حسب حجم الدقائق هو النخل أو الترشيح؛ أما الاستخلاص فيعتمد على ذوبان أحد المكونات في المذيب المختار أفضل بكثير من غيره، أي على اختلاف الذائبية.",
        "zh": "按颗粒大小分离的是筛分或过滤；萃取依据的是某一组分在所选溶剂中的溶解度远大于其他组分，即溶解度差异。",
        "ku": "Veqetandina li gorî mezinahiya perçeyan bêjingkirin an parzûnkirin e; derxistin (ekstraksiyon) li ser wê yekê ye ku pêkhateyek di helkerê hilbijartî de ji yên din gelek baştir dihele, yanî li ser cudahiya helbûnê ye."
      }
    },
    {
      "id": "u08-f12",
      "fact": {
        "tr": "Diyaliz, küçük iyon ve moleküllerin yarı geçirgen zardan geçirilerek kolloidal boyutlu taneciklerden ayrılmasıdır (böbrek hastalarında kan temizliği).",
        "en": "Dialysis is the separation of small ions and molecules from colloidal-sized particles by passing them through a semi-permeable membrane (blood cleansing in kidney patients).",
        "de": "Dialyse ist die Abtrennung kleiner Ionen und Moleküle von kolloidalen Teilchen, indem sie durch eine semipermeable Membran hindurchtreten (Blutreinigung bei Nierenpatienten).",
        "fr": "La dialyse est la séparation des petits ions et molécules des particules de taille colloïdale, qui passent à travers une membrane semi-perméable (épuration du sang chez les insuffisants rénaux).",
        "ru": "Диализ — это отделение малых ионов и молекул от частиц коллоидного размера путём их прохождения через полупроницаемую мембрану (очистка крови у почечных больных).",
        "ar": "الديلزة هي فصل الأيونات والجزيئات الصغيرة عن الجسيمات الغروية الحجم بتمريرها عبر غشاء شبه منفذ (تنقية الدم لدى مرضى الكلى).",
        "zh": "透析是让小的离子和分子透过半透膜，从而与胶体大小的粒子分离（肾病患者的血液净化）。",
        "ku": "Dialîz veqetandina îyon û molekulên biçûk ji perçeyên bi mezinahiya koloîdal e, bi derbaskirina wan di parzûneke nîv-derbasbar re (paqijkirina xwînê di nexweşên gurçikan de)."
      },
      "trap": {
        "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
        "en": "Dialysis is settling by centrifugation.",
        "de": "Die Dialyse ist ein Absetzen durch Zentrifugieren.",
        "fr": "La dialyse est une sédimentation par centrifugation.",
        "ru": "Диализ — это осаждение с помощью центрифуги.",
        "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
        "zh": "透析是一种离心沉降操作。",
        "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Santrifüj taneciklerin yoğunluk farkıyla çökmesini hızlandırır; diyaliz ise tanecik boyutu farkına dayanır: küçük iyon ve moleküller yarı geçirgen zardan geçer, kolloidal tanecikler geçemez.",
        "en": "Centrifugation speeds up settling by density difference; dialysis is based on particle size: small ions and molecules pass through the semipermeable membrane, colloidal particles do not.",
        "de": "Zentrifugieren beschleunigt das Absetzen aufgrund von Dichteunterschieden; die Dialyse beruht auf der Teilchengröße: kleine Ionen und Moleküle passieren die semipermeable Membran, kolloidale Teilchen nicht.",
        "fr": "La centrifugation accélère la sédimentation selon la masse volumique ; la dialyse repose sur la taille des particules : les petits ions et molécules traversent la membrane semi-perméable, pas les particules colloïdales.",
        "ru": "Центрифугирование ускоряет оседание за счёт разницы плотностей; диализ основан на размере частиц: малые ионы и молекулы проходят через полупроницаемую мембрану, а коллоидные частицы — нет.",
        "ar": "الطرد المركزي يسرّع الترسيب بفعل اختلاف الكثافة؛ أما الديلزة فتعتمد على حجم الدقائق: تمر الأيونات والجزيئات الصغيرة عبر الغشاء شبه المنفذ ولا تمر الدقائق الغروية.",
        "zh": "离心是利用密度差加快沉降；透析依据的是粒子大小：小离子和小分子能透过半透膜，胶体粒子不能。",
        "ku": "Santrîfuj niştina perçeyan bi cudahiya çiriyê lez dike; diyaliz li ser cudahiya mezinahiya perçeyan e: îyon û molekulên piçûk di perdeya nîv-derbasbar re derbas dibin, perçeyên kolloîdî derbas nabin."
      }
    },
    {
      "id": "u08-f13",
      "fact": {
        "tr": "Çözeltiye su eklenirse (seyreltme) çözünen kütlesi değişmez ve derişim azalır; kütlece yüzde derişim için C1m1 = C2m2 bağıntısı kullanılır (m: çözelti kütlesi).",
        "en": "If water is added to a solution (dilution), the mass of solute does not change and the concentration decreases; for mass percentage the relation C1m1 = C2m2 is used (m: mass of solution).",
        "de": "Gibt man Wasser zu einer Lösung (Verdünnung), bleibt die Masse des Gelösten gleich und die Konzentration sinkt; für den Massenanteil in Prozent gilt C1m1 = C2m2 (m: Masse der Lösung).",
        "fr": "Si l'on ajoute de l'eau à une solution (dilution), la masse de soluté ne change pas et la concentration diminue ; pour le pourcentage massique, on utilise C1m1 = C2m2 (m : masse de la solution).",
        "ru": "При добавлении воды к раствору (разбавлении) масса растворённого вещества не меняется, а концентрация уменьшается; для массовой доли в процентах используют соотношение C1m1 = C2m2 (m — масса раствора).",
        "ar": "إذا أُضيف الماء إلى محلول (تخفيف) لا تتغير كتلة المذاب ويقل التركيز؛ وللنسبة المئوية الكتلية تُستخدم العلاقة C1m1 = C2m2 (m: كتلة المحلول).",
        "zh": "向溶液中加水（稀释）时，溶质质量不变，浓度降低；对质量分数可用关系式 C1m1 = C2m2 (m 为溶液质量)。",
        "ku": "Ger av li çareseriyê were zêdekirin (sivikkirin) girseya helbûyî naguhere û giranbûn kêm dibe; ji bo giranbûna sedî ya girseyî têkiliya C1m1 = C2m2 tê bikaranîn (m: girseya çareseriyê)."
      },
      "trap": {
        "tr": "Su eklendiğinde çözünen madde kütlesi de artar.",
        "en": "When water is added, the mass of solute also increases.",
        "de": "Bei Zugabe von Wasser erhöht sich auch die Masse des gelösten Stoffes.",
        "fr": "Lorsque de l’eau est ajoutée, la masse de soluté augmente également.",
        "ru": "При добавлении воды масса растворённого вещества тоже увеличивается.",
        "ar": "عند إضافة الماء، تزداد كتلة المذاب أيضًا.",
        "zh": "加水时，溶质的质量也会增大。",
        "ku": "Dema ku av lê tê zêdekirin, girseya madeya helyayî jî zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Seyreltmede yalnızca çözücü eklenir; çözünenin kütlesi sabit kalır, çözelti kütlesi arttığı için derişim azalır.",
        "en": "In dilution only solvent is added; the mass of solute stays constant, and the concentration falls because the mass of solution increases.",
        "de": "Beim Verdünnen wird nur Lösungsmittel zugegeben; die Masse des gelösten Stoffes bleibt gleich, die Konzentration sinkt, weil die Masse der Lösung zunimmt.",
        "fr": "Lors d'une dilution, on n'ajoute que du solvant ; la masse de soluté reste constante et la concentration diminue parce que la masse de la solution augmente.",
        "ru": "При разбавлении добавляют только растворитель; масса растворённого вещества не меняется, а концентрация падает, потому что растёт масса раствора.",
        "ar": "في التخفيف يُضاف المذيب فقط؛ فتبقى كتلة المذاب ثابتة، ويقل التركيز لأن كتلة المحلول تزداد.",
        "zh": "稀释时只加入溶剂；溶质质量保持不变，由于溶液质量增大，浓度降低。",
        "ku": "Di sivikkirinê de tenê helker tê zêdekirin; girseya helbûyî neguherbar dimîne, ji ber ku girseya çareseriyê zêde dibe giranbûn kêm dibe."
      }
    },
    {
      "id": "u08-f14",
      "fact": {
        "tr": "\"Benzer benzeri çözer\" kuralı: Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür.",
        "en": "\"Like dissolves like\" rule: Polar substances dissolve well in polar solvents, and nonpolar substances dissolve well in nonpolar solvents.",
        "de": "Regel „Gleiches löst sich in Gleichem“: Polare Stoffe lösen sich gut in polaren Lösungsmitteln, unpolare Stoffe in unpolaren Lösungsmitteln.",
        "fr": "Règle « le semblable dissout le semblable » : les substances polaires se dissolvent bien dans les solvants polaires et les substances apolaires dans les solvants apolaires.",
        "ru": "Правило «подобное растворяется в подобном»: полярные вещества хорошо растворяются в полярных растворителях, неполярные — в неполярных.",
        "ar": "قاعدة «الشبيه يذيب الشبيه»: تذوب المواد القطبية جيدًا في المذيبات القطبية، والمواد غير القطبية في المذيبات غير القطبية.",
        "zh": "“相似相溶”规律：极性物质易溶于极性溶剂，非极性物质易溶于非极性溶剂。",
        "ku": "Qaydeya \"wekhev wekhevê dihelîne\": madeyên polar di helkerên polar de, madeyên ne-polar jî di helkerên ne-polar de baş dihelin."
      },
      "trap": {
        "tr": "Apolar yağ lekesi polar suda kolayca çözünür.",
        "en": "A nonpolar oil stain dissolves easily in polar water.",
        "de": "Ein unpolarer Ölfleck löst sich leicht in polarem Wasser.",
        "fr": "Une tache d'huile apolaire se dissout facilement dans l'eau polaire.",
        "ru": "Неполярное масляное пятно легко растворяется в полярной воде.",
        "ar": "تذوب بقعة الزيت غير القطبية بسهولة في الماء القطبي.",
        "zh": "非极性的油污很容易溶解在极性的水中。",
        "ku": "Lekeya rûn a ne-polar di ava polar de bi hêsanî dihele."
      },
      "whyTrapIsFalse": {
        "tr": "Yağ apolar, su polardır; \"benzer benzeri çözer\" gereği yağ lekesi suyla değil, benzin gibi apolar çözücülerle ya da sabun/deterjan yardımıyla uzaklaştırılır.",
        "en": "Oil is nonpolar and water is polar; by \"like dissolves like\", an oil stain is removed not by water but by nonpolar solvents such as petrol, or with the help of soap/detergent.",
        "de": "Öl ist unpolar, Wasser polar; nach „Gleiches löst sich in Gleichem“ entfernt man einen Ölfleck nicht mit Wasser, sondern mit unpolaren Lösungsmitteln wie Benzin oder mit Seife/Waschmittel.",
        "fr": "L'huile est apolaire et l'eau polaire ; selon « le semblable dissout le semblable », une tache d'huile s'enlève non pas à l'eau mais avec un solvant apolaire comme l'essence, ou à l'aide de savon/détergent.",
        "ru": "Масло неполярно, а вода полярна; по правилу «подобное растворяется в подобном» масляное пятно удаляют не водой, а неполярными растворителями (например, бензином) или с помощью мыла/моющего средства.",
        "ar": "الزيت غير قطبي والماء قطبي؛ ووفق قاعدة «الشبيه يذيب الشبيه» تُزال بقعة الزيت لا بالماء بل بمذيبات غير قطبية كالبنزين أو بمساعدة الصابون/المنظف.",
        "zh": "油是非极性的，水是极性的；根据“相似相溶”，油渍不能用水除去，要用汽油等非极性溶剂或借助肥皂/洗涤剂去除。",
        "ku": "Rûn ne-polar e, av polar e; li gorî \"wekhev wekhevê dihelîne\" lekeya rûn ne bi avê, bi helkerên ne-polar ên wek benzînê an bi alîkariya sabûn/deterjanê tê rakirin."
      }
    },
    {
      "id": "u08-f15",
      "fact": {
        "tr": "Aynı dış basınçta tuzlu suyun kaynamaya başlama sıcaklığı saf sudan yüksektir ve çözelti doymamışken kaynama süresince sıcaklık artmaya devam eder.",
        "en": "At the same external pressure, salt water starts to boil at a higher temperature than pure water, and while the solution is unsaturated its temperature keeps rising during boiling.",
        "de": "Beim gleichen äußeren Druck beginnt Salzwasser bei höherer Temperatur zu sieden als reines Wasser, und solange die Lösung ungesättigt ist, steigt die Temperatur während des Siedens weiter.",
        "fr": "À même pression extérieure, l'eau salée commence à bouillir à une température plus élevée que l'eau pure et, tant que la solution n'est pas saturée, sa température continue d'augmenter pendant l'ébullition.",
        "ru": "При одинаковом внешнем давлении солёная вода начинает кипеть при более высокой температуре, чем чистая, и пока раствор ненасыщен, температура во время кипения продолжает расти.",
        "ar": "عند الضغط الخارجي نفسه يبدأ الماء المالح بالغليان عند درجة أعلى من الماء النقي، وما دام المحلول غير مشبع تستمر درجة الحرارة في الارتفاع أثناء الغليان.",
        "zh": "在相同外压下，盐水开始沸腾的温度高于纯水，并且在溶液未饱和时，沸腾过程中温度持续升高。",
        "ku": "Di heman pestoya derve de ava şor di germahiyek ji ava safî bilindtir de dest bi kelandinê dike û heta ku çareserî ne têr be, di dema kelandinê de germahî bilind dibe."
      },
      "trap": {
        "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
        "en": "While salt water boils, its temperature remains constant from the beginning.",
        "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
        "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
        "ru": "Солёная вода кипит при постоянной температуре с самого начала кипения.",
        "ar": "عند غليان الماء المالح تظل درجة حرارته ثابتة منذ البداية.",
        "zh": "盐水沸腾时，温度从一开始就保持不变。",
        "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzlu su kaynarken su buharlaşır ve çözelti giderek derişir, bu yüzden kaynama sıcaklığı yükselmeye devam eder; sıcaklık ancak çözelti doygun hâle gelince sabitlenir. Baştan sona sabit kaynama sıcaklığı saf maddelere özgüdür.",
        "en": "As salt water boils, water evaporates and the solution becomes more concentrated, so the boiling temperature keeps rising; it becomes constant only once the solution is saturated. A constant boiling temperature from start to finish is characteristic of pure substances.",
        "de": "Beim Sieden von Salzwasser verdampft Wasser und die Lösung wird konzentrierter, daher steigt die Siedetemperatur weiter; sie wird erst konstant, wenn die Lösung gesättigt ist. Eine von Anfang an konstante Siedetemperatur ist typisch für Reinstoffe.",
        "fr": "Pendant l'ébullition de l'eau salée, l'eau s'évapore et la solution se concentre, donc la température d'ébullition continue de monter ; elle ne devient constante qu'une fois la solution saturée. Une température d'ébullition constante du début à la fin caractérise les corps purs.",
        "ru": "При кипении солёной воды вода испаряется и раствор концентрируется, поэтому температура кипения продолжает расти; постоянной она становится только после насыщения раствора. Постоянная от начала до конца температура кипения характерна для чистых веществ.",
        "ar": "عند غليان الماء المالح يتبخر الماء ويزداد تركيز المحلول، فتستمر درجة الغليان في الارتفاع، ولا تثبت إلا عندما يصبح المحلول مشبعًا. أما ثبات درجة الغليان من البداية إلى النهاية فهو من خصائص المواد النقية.",
        "zh": "盐水沸腾时水不断蒸发，溶液越来越浓，所以沸腾温度持续升高；只有溶液达到饱和后温度才保持不变。从头到尾沸点恒定是纯净物的特征。",
        "ku": "Dema ava şor dikele av hilm dibe û çareserî giran dibe, ji ber vê yekê germahiya kelandinê bilind dibe; germahî tenê dema çareserî têr dibe sabît dibe. Germahiya kelandinê ya ji destpêkê heta dawiyê sabît taybetiya madeyên safî ye."
      }
    },
    {
      "id": "u08-f16",
      "fact": {
        "tr": "Doygun çözeltiye aynı sıcaklıkta bir miktar daha çözünen eklenirse çözünmeden dipte çöker ve derişim değişmez.",
        "en": "If more solute is added to the saturated solution at the same temperature, it will precipitate to the bottom without dissolving and the concentration will not change.",
        "de": "Wenn der gesättigten Lösung bei gleicher Temperatur mehr gelöster Stoff zugesetzt wird, fällt dieser am Boden aus, ohne sich aufzulösen, und die Konzentration ändert sich nicht.",
        "fr": "Si davantage de soluté est ajouté à la solution saturée à la même température, il précipitera au fond sans se dissoudre et la concentration ne changera pas.",
        "ru": "Если к насыщенному раствору при той же температуре добавить ещё растворяемого вещества, оно не растворится и останется на дне, а концентрация не изменится.",
        "ar": "إذا أُضيف مزيد من المذاب إلى محلول مشبع عند درجة الحرارة نفسها، فإنه يترسب في القاع دون أن يذوب ولا يتغير التركيز.",
        "zh": "在相同温度下向饱和溶液中再加入溶质，溶质不再溶解而沉在底部，浓度不变。",
        "ku": "Ger di heman germahiyê de hinek din madeya helyayî li çareseriya têrbûyî were zêdekirin, bêyî ku bihele li binî dinişe û giranbûn naguhere."
      },
      "trap": {
        "tr": "Doygun tuz çözeltisine aynı sıcaklıkta tuz eklenirse çözelti daha derişik hâle gelir.",
        "en": "If more salt is added to a saturated salt solution at the same temperature, the solution becomes more concentrated.",
        "de": "Gibt man zu einer gesättigten Salzlösung bei gleicher Temperatur weiteres Salz, wird die Lösung konzentrierter.",
        "fr": "Si l'on ajoute du sel à une solution saturée de sel à la même température, la solution devient plus concentrée.",
        "ru": "Если к насыщенному раствору соли при той же температуре добавить ещё соли, раствор станет более концентрированным.",
        "ar": "إذا أُضيف الملح إلى محلول ملحي مشبع عند درجة الحرارة نفسها، يصبح المحلول أكثر تركيزًا.",
        "zh": "在相同温度下向饱和食盐溶液中再加入食盐，溶液会变得更浓。",
        "ku": "Heke di heman germahiyê de xwê li çareseriya xwê ya têrbûyî were zêdekirin, giranbûna çareseriyê zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Doygun çözelti o sıcaklıkta çözebileceği en fazla maddeyi zaten çözmüştür; eklenen tuz çözünmeden dipte kalır, bu nedenle derişim değişmez.",
        "en": "A saturated solution has already dissolved the maximum amount it can at that temperature; the added salt stays undissolved at the bottom, so the concentration does not change.",
        "de": "Eine gesättigte Lösung hat bei dieser Temperatur bereits die größtmögliche Menge gelöst; zugegebenes Salz bleibt ungelöst am Boden, daher ändert sich die Konzentration nicht.",
        "fr": "Une solution saturée a déjà dissous la quantité maximale possible à cette température ; le sel ajouté reste non dissous au fond, la concentration ne change donc pas.",
        "ru": "Насыщенный раствор уже растворил максимально возможное при этой температуре количество вещества; добавленная соль остаётся нерастворённой на дне, поэтому концентрация не меняется.",
        "ar": "المحلول المشبع أذاب بالفعل أقصى كمية ممكنة عند تلك الدرجة؛ فيبقى الملح المضاف في القاع دون ذوبان، ولذلك لا يتغير التركيز.",
        "zh": "饱和溶液在该温度下已经溶解了最大量的溶质；加入的盐不再溶解而留在底部，所以浓度不变。",
        "ku": "Çareseriya têr di wê germahiyê de berê herî zêde madeya ku dikare bihelîne helandiye; xwêya ku tê zêdekirin bêyî helandinê li binî dimîne, ji ber vê yekê giranbûn naguhere."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u08-c01",
      "conceptA": {
        "tr": "Basit Damıtma",
        "en": "Simple Distillation",
        "de": "Einfache Destillation",
        "fr": "Distillation simple",
        "ru": "Простая перегонка",
        "ar": "التقطير البسيط",
        "zh": "简单蒸馏",
        "ku": "Distilasyona sade"
      },
      "conceptB": {
        "tr": "Ayrımsal Damıtma",
        "en": "Fractional Distillation",
        "de": "Fraktionierte Destillation",
        "fr": "Distillation fractionnée",
        "ru": "Фракционная перегонка",
        "ar": "التقطير التجزيئي",
        "zh": "分馏",
        "ku": "Distilasyona perçeyî"
      },
      "distinction": {
        "tr": "Basit damıtma, katı-sıvı çözeltilerde sıvıyı buharlaştırıp yoğuşturarak ayırır; ayrımsal damıtma kaynama noktaları birbirine yakın sıvı-sıvı homojen karışımları ayırır.",
        "en": "Simple distillation separates the liquid from a solid-liquid solution by evaporating and condensing it; fractional distillation separates homogeneous liquid-liquid mixtures with close boiling points.",
        "de": "Die einfache Destillation trennt die Flüssigkeit aus einer Fest-flüssig-Lösung durch Verdampfen und Kondensieren ab; die fraktionierte Destillation trennt homogene Flüssig-flüssig-Gemische mit nahe beieinander liegenden Siedepunkten.",
        "fr": "La distillation simple sépare le liquide d'une solution solide-liquide en l'évaporant puis en le condensant ; la distillation fractionnée sépare des mélanges homogènes liquide-liquide dont les points d'ébullition sont proches.",
        "ru": "Простая перегонка отделяет жидкость от раствора твёрдого вещества в жидкости, испаряя и конденсируя её; фракционная перегонка разделяет однородные смеси жидкостей с близкими температурами кипения.",
        "ar": "يفصل التقطير البسيط السائل عن محلول صلب في سائل بتبخيره ثم تكثيفه؛ ويفصل التقطير التجزيئي المخاليط المتجانسة من سائلين متقاربين في درجة الغليان.",
        "zh": "简单蒸馏通过蒸发和冷凝把固-液溶液中的液体分离出来；分馏用于分离沸点接近的液-液均匀混合物。",
        "ku": "Distilasyona sade şilê ji çareseriya hişk-şil bi hilmkirin û dûv re bi şilkirina hilmê vediqetîne; distilasyona perçeyî tevliheviyên homojen ên şil-şil ên ku xalên wan ên kelandinê nêzîkî hev in vediqetîne."
      }
    },
    {
      "id": "u08-c02",
      "conceptA": {
        "tr": "Kolloit",
        "en": "Colloid",
        "de": "Kolloid",
        "fr": "Colloïde",
        "ru": "Коллоид",
        "ar": "الغروي",
        "zh": "胶体",
        "ku": "Kolloîd"
      },
      "conceptB": {
        "tr": "Çözelti",
        "en": "Solution",
        "de": "Lösung",
        "fr": "Solution",
        "ru": "Раствор",
        "ar": "المحلول",
        "zh": "溶液",
        "ku": "Çareserî"
      },
      "distinction": {
        "tr": "Çözeltide tanecik boyutu 1 nm'den küçüktür ve karışım homojendir; kolloitte tanecik boyutu 1-1000 nm arasındadır, karışım heterojendir ve Tyndall etkisi gösterir.",
        "en": "In a solution the particle size is below 1 nm and the mixture is homogeneous; in a colloid the particle size is between 1 and 1000 nm, and the mixture is heterogeneous and shows the Tyndall effect.",
        "de": "In einer Lösung ist die Teilchengröße kleiner als 1 nm und das Gemisch homogen; in einem Kolloid liegt die Teilchengröße zwischen 1 und 1000 nm, das Gemisch ist heterogen und zeigt den Tyndall-Effekt.",
        "fr": "Dans une solution, la taille des particules est inférieure à 1 nm et le mélange est homogène ; dans un colloïde, elle est comprise entre 1 et 1000 nm, le mélange est hétérogène et présente l'effet Tyndall.",
        "ru": "Раствор — однородная смесь с частицами меньше 1 нм; коллоид — неоднородная смесь с частицами от 1 до 1000 нм, проявляющая эффект Тиндаля.",
        "ar": "في المحلول يكون حجم الجسيمات أقل من 1 nm ويكون المخلوط متجانسًا؛ أما في الغروي فيتراوح حجم الجسيمات بين 1 و1000 nm، ويكون المخلوط غير متجانس ويُظهر ظاهرة تندال.",
        "zh": "溶液中粒子直径小于 1 nm，混合物是均匀的；胶体中粒子直径在 1~1000 nm 之间，混合物是非均匀的，并有丁达尔效应。",
        "ku": "Di çareseriyê de mezinahiya perçeyan ji 1 nm biçûktir e û tevlihevî homojen e; di kolloîdê de mezinahiya perçeyan di navbera 1 û 1000 nm de ye, tevlihevî heterojen e û bandora Tyndall nîşan dide."
      }
    },
    {
      "id": "u08-c03",
      "conceptA": {
        "tr": "Süspansiyon",
        "en": "Suspension",
        "de": "Suspension",
        "fr": "Suspension",
        "ru": "Суспензия",
        "ar": "المعلق",
        "zh": "悬浊液",
        "ku": "Suspansiyon"
      },
      "conceptB": {
        "tr": "Emülsiyon",
        "en": "Emulsion",
        "de": "Emulsion",
        "fr": "Émulsion",
        "ru": "Эмульсия",
        "ar": "المستحلب",
        "zh": "乳浊液",
        "ku": "Emulsiyon"
      },
      "distinction": {
        "tr": "Süspansiyon katı-sıvı heterojen karışımdır (ör. tebeşir tozu-su, Türk kahvesi); emülsiyon sıvı-sıvı heterojen karışımdır (ör. zeytinyağı-su).",
        "en": "A suspension is a solid-liquid heterogeneous mixture (e.g. chalk powder-water, Turkish coffee); an emulsion is a liquid-liquid heterogeneous mixture (e.g. olive oil-water).",
        "de": "Eine Suspension ist ein heterogenes Fest-flüssig-Gemisch (z. B. Kreidepulver-Wasser, türkischer Kaffee); eine Emulsion ist ein heterogenes Flüssig-flüssig-Gemisch (z. B. Olivenöl-Wasser).",
        "fr": "Une suspension est un mélange hétérogène solide-liquide (ex. : poudre de craie-eau, café turc) ; une émulsion est un mélange hétérogène liquide-liquide (ex. : huile d'olive-eau).",
        "ru": "Суспензия — неоднородная смесь твёрдого вещества и жидкости (например, мел в воде, кофе по-турецки); эмульсия — неоднородная смесь двух жидкостей (например, оливковое масло с водой).",
        "ar": "المعلق خليط غير متجانس من صلب وسائل (مثل مسحوق الطباشير-الماء، والقهوة التركية)؛ والمستحلب خليط غير متجانس من سائلين (مثل زيت الزيتون-الماء).",
        "zh": "悬浊液是固-液非均匀混合物（如粉笔灰-水、土耳其咖啡）；乳浊液是液-液非均匀混合物（如橄榄油-水）。",
        "ku": "Suspansiyon tevliheviyek heterojen a hişk-şil e (mînak: toza tebeşîrê-av, qehweya tirkî); emulsiyon tevliheviyek heterojen a şil-şil e (mînak: rûnê zeytûnê-av)."
      }
    },
    {
      "id": "u08-c04",
      "conceptA": {
        "tr": "Süzme",
        "en": "Filtration",
        "de": "Filtration",
        "fr": "Filtration",
        "ru": "Фильтрование",
        "ar": "الترشيح",
        "zh": "过滤",
        "ku": "Parzûnkirin"
      },
      "conceptB": {
        "tr": "Diyaliz",
        "en": "Dialysis",
        "de": "Dialyse",
        "fr": "Dialyse",
        "ru": "Диализ",
        "ar": "الديلزة",
        "zh": "透析",
        "ku": "Dialîz"
      },
      "distinction": {
        "tr": "Süzme, katı tanecikleri süzgeç kâğıdında tutarak heterojen katı-sıvı karışımları ayırır; diyaliz ise küçük iyon ve molekülleri yarı geçirgen zardan geçirerek kolloidal taneciklerden ayırır.",
        "en": "Filtration separates heterogeneous solid-liquid mixtures by retaining the solid particles on filter paper; dialysis separates small ions and molecules from colloidal particles by passing them through a semi-permeable membrane.",
        "de": "Die Filtration trennt heterogene Fest-flüssig-Gemische, indem die Feststoffteilchen im Filterpapier zurückgehalten werden; die Dialyse trennt kleine Ionen und Moleküle von kolloidalen Teilchen, indem sie diese durch eine semipermeable Membran treten lässt.",
        "fr": "La filtration sépare les mélanges hétérogènes solide-liquide en retenant les particules solides sur le papier filtre ; la dialyse sépare les petits ions et molécules des particules colloïdales en les faisant passer à travers une membrane semi-perméable.",
        "ru": "Фильтрование разделяет неоднородные смеси твёрдого вещества с жидкостью, задерживая твёрдые частицы на фильтровальной бумаге; диализ отделяет малые ионы и молекулы от коллоидных частиц, пропуская их через полупроницаемую мембрану.",
        "ar": "الترشيح يفصل المخاليط غير المتجانسة الصلبة-السائلة باحتجاز الجسيمات الصلبة على ورق مسامي؛ وفي الديلزة تُفصل الأيونات والجزيئات الصغيرة عن الجسيمات الغروية بتمريرها عبر غشاء شبه منفذ.",
        "zh": "过滤是用滤纸截留固体颗粒，分离非均匀的固-液混合物；透析是让小的离子和分子透过半透膜，使其与胶体粒子分离。",
        "ku": "Parzûnkirin perçeyên hişk li ser kaxeza parzûnê digire û tevliheviyên heterojen ên hişk-şil ji hev vediqetîne; dialîz îyon û molekulên biçûk di parzûneke nîv-derbasbar re derbas dike û wan ji perçeyên koloîdal vediqetîne."
      }
    },
    {
      "id": "u08-c05",
      "conceptA": {
        "tr": "Ayırma Hunisi",
        "en": "Separatory Funnel",
        "de": "Scheidetrichter",
        "fr": "Ampoule à décanter",
        "ru": "Делительная воронка",
        "ar": "قمع الفصل",
        "zh": "分液漏斗",
        "ku": "Hunîya veqetandinê"
      },
      "conceptB": {
        "tr": "Yüzdürme (Flotasyon)",
        "en": "Flotation",
        "de": "Flotation",
        "fr": "Flottation",
        "ru": "Флотация",
        "ar": "التعويم",
        "zh": "浮选",
        "ku": "Flotasyon"
      },
      "distinction": {
        "tr": "Ayırma hunisi yoğunlukları farklı, karışmayan sıvıları ayırır; flotasyon katı-katı karışımlarını bir sıvıda yüzen ve batan taneler olarak ayırır (talaş-kumda yoğunluk, cevher zenginleştirmede ıslanabilme farkı).",
        "en": "A separatory funnel separates immiscible liquids of different densities; flotation separates solid-solid mixtures in a liquid into floating and sinking grains (density for sawdust-sand, wettability for ore concentration).",
        "de": "Der Scheidetrichter trennt nicht mischbare Flüssigkeiten unterschiedlicher Dichte; die Flotation trennt Fest-fest-Gemische in einer Flüssigkeit in schwimmende und sinkende Körner (Dichte bei Sägemehl-Sand, Benetzbarkeit bei der Erzanreicherung).",
        "fr": "L'ampoule à décanter sépare des liquides non miscibles de masses volumiques différentes ; la flottation sépare des mélanges solide-solide dans un liquide en grains qui flottent et grains qui coulent (masse volumique pour sciure-sable, mouillabilité pour l'enrichissement des minerais).",
        "ru": "Делительная воронка разделяет несмешивающиеся жидкости разной плотности; флотация разделяет смеси твёрдых веществ в жидкости на всплывающие и тонущие зёрна (плотность — для опилок и песка, смачиваемость — при обогащении руд).",
        "ar": "يفصل قمع الفصل السوائل غير الممتزجة المختلفة الكثافة؛ ويفصل التعويم مخاليط الصلب-الصلب في سائل إلى حبيبات طافية وغاطسة (الكثافة في نشارة الخشب والرمل، وقابلية البلل في إغناء الخامات).",
        "zh": "分液漏斗分离密度不同、互不相溶的液体；浮选在液体中把固-固混合物分成浮起和下沉的颗粒（木屑-沙子靠密度，矿石富集靠润湿性）。",
        "ku": "Hunîya veqetandinê şilên ku tevlî hev nabin û çiriyên wan cuda ne vediqetîne; flotasyon tevliheviyên hişk-hişk di şilekê de wek perçeyên ku avjenî dikin û dadikevin vediqetîne (di qirş-qûmê de çirî, di dewlemendkirina madenan de şilbûn)."
      }
    },
    {
      "id": "u08-c06",
      "conceptA": {
        "tr": "Kütlece Yüzde Derişim",
        "en": "Percent Concentration by Mass",
        "de": "Massenprozent",
        "fr": "Pourcentage massique",
        "ru": "Массовая доля в процентах",
        "ar": "النسبة المئوية الكتلية",
        "zh": "质量分数",
        "ku": "Rêjeya girseyî ya ji sedî"
      },
      "conceptB": {
        "tr": "Hacimce Yüzde Derişim",
        "en": "Percent Concentration by Volume",
        "de": "Volumenprozent",
        "fr": "Pourcentage volumique",
        "ru": "Объёмная доля в процентах",
        "ar": "النسبة المئوية الحجمية",
        "zh": "体积分数",
        "ku": "Rêjeya qebareyî ya ji sedî"
      },
      "distinction": {
        "tr": "Kütlece yüzde derişim, çözünen kütlesinin çözelti kütlesine oranıdır (x100); hacimce yüzde derişim, sıvı çözünen hacminin çözelti hacmine oranıdır (x100).",
        "en": "Percent concentration by mass is the ratio of solute mass to solution mass (x100); percent concentration by volume is the ratio of liquid solute volume to solution volume (x100).",
        "de": "Massenprozent ist das Verhältnis der Masse des gelösten Stoffes zur Masse der Lösung (x100); Volumenprozent ist das Verhältnis des Volumens des flüssigen gelösten Stoffes zum Volumen der Lösung (x100).",
        "fr": "Le pourcentage massique est le rapport de la masse de soluté à la masse de solution (x100) ; le pourcentage volumique est le rapport du volume de soluté liquide au volume de solution (x100).",
        "ru": "Массовая доля в процентах — отношение массы растворённого вещества к массе раствора (x100); объёмная доля в процентах — отношение объёма жидкого растворённого вещества к объёму раствора (x100).",
        "ar": "النسبة المئوية الكتلية: نسبة كتلة المذاب إلى كتلة المحلول (x100)؛ والنسبة المئوية الحجمية: نسبة حجم المذاب السائل إلى حجم المحلول (x100).",
        "zh": "质量分数是溶质质量与溶液质量之比(x100)；体积分数是液态溶质体积与溶液体积之比(x100)。",
        "ku": "Rêjeya girseyî ya ji sedî rêjeya girseya madeya helyayî li girseya çareseriyê ye (x100); rêjeya qebareyî ya ji sedî rêjeya qebareya madeya helyayî ya şil li qebareya çareseriyê ye (x100)."
      }
    },
    {
      "id": "u08-c07",
      "conceptA": {
        "tr": "Doymuş Çözelti",
        "en": "Saturated Solution",
        "de": "Gesättigte Lösung",
        "fr": "Solution saturée",
        "ru": "Насыщенный раствор",
        "ar": "المحلول المشبع",
        "zh": "饱和溶液",
        "ku": "Çareseriya têrbûyî"
      },
      "conceptB": {
        "tr": "Aşırı Doymuş Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Пересыщенный раствор",
        "ar": "المحلول فوق المشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya zêde-têrbûyî"
      },
      "distinction": {
        "tr": "Doymuş çözelti, belirli bir sıcaklıkta çözebileceği en fazla maddeyi çözmüş çözeltidir; aynı sıcaklıkta bu miktardan fazlasını çözünmüş hâlde içeren kararsız çözeltiye ise aşırı doymuş denir.",
        "en": "A saturated solution has dissolved the maximum amount of solute it can dissolve at a given temperature; a supersaturated solution is an unstable solution that holds more dissolved solute than this at the same temperature.",
        "de": "Eine gesättigte Lösung hat bei einer bestimmten Temperatur die größtmögliche Menge an gelöstem Stoff aufgenommen; eine übersättigte Lösung ist eine instabile Lösung, die bei derselben Temperatur mehr gelösten Stoff enthält.",
        "fr": "Une solution saturée a dissous, à une température donnée, la quantité maximale de soluté qu'elle peut dissoudre ; une solution sursaturée est une solution instable qui en contient davantage à la même température.",
        "ru": "Насыщенный раствор при данной температуре содержит максимально возможное количество растворённого вещества; пересыщенный раствор — неустойчивый раствор, содержащий при той же температуре больше растворённого вещества.",
        "ar": "المحلول المشبع هو محلول أذاب أكبر كمية ممكنة من المذاب عند درجة حرارة معينة؛ أما المحلول فوق المشبع فهو محلول غير مستقر يحتوي على كمية مذابة أكبر من ذلك عند الدرجة نفسها.",
        "zh": "饱和溶液是在一定温度下溶解了最大量溶质的溶液；而在同一温度下所含溶质超过这一限度的溶液很不稳定。",
        "ku": "Çareseriya têrbûyî di germahiyeke diyar de herî zêde mîqdara madeya ku dikare bihelîne helandiye; çareseriya bêîstîqrar a ku di heman germahiyê de ji vê mîqdarê zêdetir madeya helyayî dihewîne zêde-têrbûyî tê gotin."
      }
    },
    {
      "id": "u08-c08",
      "conceptA": {
        "tr": "Seyreltme",
        "en": "Dilution",
        "de": "Verdünnen",
        "fr": "Dilution",
        "ru": "Разбавление",
        "ar": "التخفيف",
        "zh": "稀释",
        "ku": "Seyrelandin"
      },
      "conceptB": {
        "tr": "Deriştirme",
        "en": "Concentrating",
        "de": "Aufkonzentrieren",
        "fr": "Concentration",
        "ru": "Концентрирование",
        "ar": "زيادة التركيز",
        "zh": "浓缩",
        "ku": "Tîrkirin"
      },
      "distinction": {
        "tr": "Seyreltmede çözeltiye çözücü eklenir, çözünen kütlesi değişmez ve derişim azalır; deriştirmede çözücü buharlaştırılır veya çözünen eklenir ve derişim artar.",
        "en": "In dilution, solvent is added, the mass of solute stays the same and the concentration decreases; in concentrating, solvent is evaporated or more solute is added and the concentration increases.",
        "de": "Beim Verdünnen wird Lösungsmittel zugegeben, die Masse des gelösten Stoffes bleibt gleich und die Konzentration sinkt; beim Aufkonzentrieren wird Lösungsmittel verdampft oder mehr gelöster Stoff zugegeben, und die Konzentration steigt.",
        "fr": "La dilution consiste à ajouter du solvant : la masse de soluté reste la même et la concentration diminue ; pour concentrer, on évapore du solvant ou on ajoute du soluté, et la concentration augmente.",
        "ru": "Разбавление — добавление растворителя: масса растворённого вещества не меняется, а концентрация уменьшается; концентрирование — выпаривание растворителя или добавление растворённого вещества, при котором концентрация растёт.",
        "ar": "في التخفيف يُضاف المذيب فتبقى كتلة المذاب ثابتة ويقل التركيز؛ وفي زيادة التركيز يُبخَّر المذيب أو يُضاف مزيد من المذاب فيرتفع التركيز.",
        "zh": "稀释是加入溶剂，溶质质量不变，浓度降低；浓缩是蒸发溶剂或加入更多溶质，浓度升高。",
        "ku": "Di seyrelandinê de helker tê zêdekirin, girseya madeya helyayî naguhere û giranbûn kêm dibe; di tîrkirinê de helker tê hilmikandin an madeya helyayî tê zêdekirin û giranbûn zêde dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u08-s01",
      "title": {
        "tr": "Tuz-Kum-Su Karışımını Ayırma Adımları",
        "en": "Steps to Separate Salt-Sand-Water Mixture",
        "de": "Schritte zur Trennung des Salz-Sand-Wasser-Gemisches",
        "fr": "Étapes pour séparer le mélange sel-sable-eau",
        "ru": "Разделение смеси соли, песка и воды",
        "ar": "خطوات فصل خليط الملح والرمل والماء",
        "zh": "分离盐-沙-水混合物的步骤",
        "ku": "Gavên veqetandina tevliheviya xwê-qûm-av"
      },
      "steps": [
        {
          "tr": "Karışım karıştırılarak (gerekirse su eklenerek) tuzun tamamı çözülür",
          "en": "The mixture is stirred (adding water if necessary) until all the salt dissolves",
          "de": "Das Gemisch wird gerührt (bei Bedarf unter Wasserzugabe), bis das gesamte Salz gelöst ist",
          "fr": "Le mélange est agité (en ajoutant de l'eau si nécessaire) jusqu'à dissolution complète du sel",
          "ru": "Смесь перемешивают (при необходимости добавляя воду), пока вся соль не растворится",
          "ar": "يُحرَّك الخليط (مع إضافة الماء عند الحاجة) حتى يذوب الملح كله",
          "zh": "搅拌混合物（必要时加水），使盐全部溶解",
          "ku": "Tevlihevî tê tevdan (ger pêwîst be av tê zêdekirin) heta ku hemû xwê bihele"
        },
        {
          "tr": "Süzme yapılarak kum ayrılır",
          "en": "The sand is separated by filtration",
          "de": "Der Sand wird durch Filtration abgetrennt",
          "fr": "Le sable est séparé par filtration",
          "ru": "Песок отделяют фильтрованием",
          "ar": "يُفصل الرمل بالترشيح",
          "zh": "通过过滤分离沙子",
          "ku": "Qûm bi parzûnkirinê tê veqetandin"
        },
        {
          "tr": "Süzüntü ısıtılarak su buharlaştırılır (su da geri kazanılacaksa basit damıtma yapılır)",
          "en": "The filtrate is heated to evaporate the water (simple distillation if the water is also to be recovered)",
          "de": "Das Filtrat wird erhitzt und das Wasser verdampft (einfache Destillation, wenn auch das Wasser zurückgewonnen werden soll)",
          "fr": "Le filtrat est chauffé pour évaporer l'eau (distillation simple si l'on veut aussi récupérer l'eau)",
          "ru": "Фильтрат нагревают и выпаривают воду (если воду тоже нужно собрать, проводят простую перегонку)",
          "ar": "يُسخَّن الراشح لتبخير الماء (تقطير بسيط إذا أُريد استرجاع الماء أيضًا)",
          "zh": "加热滤液使水蒸发（若还要回收水，则进行简单蒸馏）",
          "ku": "Parzûnkirî tê germkirin û av tê hilmikandin (ger av jî bê vegerandin, distilasyona sade tê kirin)"
        },
        {
          "tr": "Su tamamen buharlaşınca kapta kalan katı tuz toplanır",
          "en": "Once all the water has evaporated, the solid salt left in the vessel is collected",
          "de": "Nach vollständigem Verdampfen des Wassers wird das im Gefäß zurückgebliebene feste Salz gesammelt",
          "fr": "Une fois toute l'eau évaporée, on recueille le sel solide resté dans le récipient",
          "ru": "Когда вся вода испарится, собирают твёрдую соль, оставшуюся в сосуде",
          "ar": "بعد تبخر الماء كله يُجمع الملح الصلب المتبقي في الوعاء",
          "zh": "水全部蒸发后，收集容器中剩下的固体盐",
          "ku": "Piştî ku hemû av hilm bû, xwêya hişk a ku di firaxê de maye tê berhevkirin"
        }
      ]
    },
    {
      "id": "u08-s02",
      "title": {
        "tr": "Ayrımsal Damıtma Basamakları",
        "en": "Fractional Distillation Steps",
        "de": "Schritte der fraktionierten Destillation",
        "fr": "Étapes de distillation fractionnée",
        "ru": "Этапы фракционной перегонки",
        "ar": "خطوات التقطير التجزيئي",
        "zh": "分馏步骤",
        "ku": "Gavên distilasyona perçeyî"
      },
      "steps": [
        {
          "tr": "Bileşenlerinin kaynama noktaları farklı olan homojen sıvı karışım ısıtılır",
          "en": "A homogeneous liquid mixture whose components have different boiling points is heated",
          "de": "Ein homogenes Flüssigkeitsgemisch, dessen Komponenten unterschiedliche Siedepunkte haben, wird erhitzt",
          "fr": "On chauffe un mélange liquide homogène dont les constituants ont des points d'ébullition différents",
          "ru": "Нагревают однородную жидкую смесь, компоненты которой имеют разные температуры кипения",
          "ar": "يُسخَّن خليط سائل متجانس تختلف مكوناته في درجات الغليان",
          "zh": "加热各组分沸点不同的均匀液体混合物",
          "ku": "Tevliheviyeke şil a homojen a ku xalên kelandinê yên pêkhateyên wê cuda ne tê germkirin"
        },
        {
          "tr": "Karışım kaynar; oluşan buhar daha uçucu bileşence zengindir",
          "en": "The mixture boils; the vapour formed is richer in the more volatile component",
          "de": "Das Gemisch siedet; der entstehende Dampf ist reicher an der flüchtigeren Komponente",
          "fr": "Le mélange bout ; la vapeur formée est plus riche en constituant le plus volatil",
          "ru": "Смесь кипит; образующийся пар обогащён более летучим компонентом",
          "ar": "يغلي الخليط؛ ويكون البخار المتكون أغنى بالمكوّن الأكثر تطايرًا",
          "zh": "混合物沸腾，生成的蒸气中挥发性较强的组分含量更高",
          "ku": "Tevlihevî dikele; hilma ku çêdibe bi pêkhateya bêtir firok dewlemendtir e"
        },
        {
          "tr": "Fraksiyon kolonunda tekrarlanan yoğuşma-buharlaşmayla en uçucu bileşen kolonun tepesine ulaşır",
          "en": "Through repeated condensation and vaporisation in the fractionating column, the most volatile component reaches the top",
          "de": "Durch wiederholtes Kondensieren und Verdampfen in der Fraktionierkolonne gelangt die flüchtigste Komponente nach oben",
          "fr": "Par condensations et vaporisations répétées dans la colonne de fractionnement, le constituant le plus volatil atteint le sommet",
          "ru": "Благодаря многократной конденсации и испарению в ректификационной колонне самый летучий компонент достигает верха колонны",
          "ar": "بتكرار التكاثف والتبخر في عمود التجزئة يصل المكوّن الأكثر تطايرًا إلى قمة العمود",
          "zh": "在分馏柱中经过反复冷凝和汽化，挥发性最强的组分到达柱顶",
          "ku": "Bi dubarekirina hilmbûn û şilbûnê di stûna perçekirinê de pêkhateya herî firok digihîje serê stûnê"
        },
        {
          "tr": "Buhar soğutucuda yoğuşur ve ayrı toplama kabına akar",
          "en": "The vapour condenses in the condenser and flows into a separate receiver",
          "de": "Der Dampf kondensiert im Kühler und fließt in eine separate Vorlage",
          "fr": "La vapeur se condense dans le réfrigérant et s'écoule dans un récipient collecteur séparé",
          "ru": "Пар конденсируется в холодильнике и стекает в отдельный приёмник",
          "ar": "يتكاثف البخار في المكثف ويتدفق إلى وعاء جمع منفصل",
          "zh": "蒸气在冷凝管中冷凝，流入单独的接收器",
          "ku": "Hilm di sarkerê de şil dibe û diherike firaxa berhevkirinê ya cuda"
        }
      ]
    },
    {
      "id": "u08-s03",
      "title": {
        "tr": "Kütlece Yüzde Derişimi Belli Çözelti Hazırlama",
        "en": "Preparing a Solution of Given Mass Percent",
        "de": "Herstellung einer Lösung mit bestimmtem Massenprozent",
        "fr": "Préparation d'une solution de pourcentage massique donné",
        "ru": "Приготовление раствора с заданной массовой долей",
        "ar": "تحضير محلول بنسبة مئوية كتلية محددة",
        "zh": "配制一定质量分数的溶液",
        "ku": "Amadekirina çareseriyeke bi rêjeya girseyî ya ji sedî"
      },
      "steps": [
        {
          "tr": "İstenen çözelti kütlesi ve yüzde derişimden gereken çözünen kütlesi hesaplanır",
          "en": "The required mass of solute is calculated from the desired solution mass and percentage",
          "de": "Aus gewünschter Lösungsmasse und Prozentgehalt wird die benötigte Masse des gelösten Stoffes berechnet",
          "fr": "On calcule la masse de soluté nécessaire à partir de la masse de solution et du pourcentage voulus",
          "ru": "По нужной массе раствора и массовой доле рассчитывают необходимую массу растворённого вещества",
          "ar": "تُحسب كتلة المذاب اللازمة من كتلة المحلول والنسبة المئوية المطلوبتين",
          "zh": "根据所需溶液的质量和质量分数计算所需溶质的质量",
          "ku": "Ji girseya çareseriyê û rêjeya ji sedî ya xwestî girseya pêwîst a madeya helyayî tê hesibandin"
        },
        {
          "tr": "Hesaplanan kütlede çözünen tartılıp kaba alınır",
          "en": "The calculated mass of solute is weighed into a container",
          "de": "Die berechnete Stoffmasse wird in ein Gefäß eingewogen",
          "fr": "On pèse la masse de soluté calculée dans un récipient",
          "ru": "Рассчитанную массу вещества отвешивают в сосуд",
          "ar": "يُوزن المذاب بالكتلة المحسوبة ويوضع في وعاء",
          "zh": "称取计算出质量的溶质，放入容器中",
          "ku": "Girseya hesibandî ya madeya helyayî tê kêşan û dikeve firaxekê"
        },
        {
          "tr": "Toplam kütle istenen çözelti kütlesine ulaşıncaya kadar su eklenir",
          "en": "Water is added until the total mass reaches the desired solution mass",
          "de": "Es wird Wasser zugegeben, bis die Gesamtmasse die gewünschte Lösungsmasse erreicht",
          "fr": "On ajoute de l'eau jusqu'à ce que la masse totale atteigne la masse de solution voulue",
          "ru": "Добавляют воду, пока общая масса не достигнет нужной массы раствора",
          "ar": "يُضاف الماء حتى تبلغ الكتلة الكلية كتلة المحلول المطلوبة",
          "zh": "加水至总质量达到所需的溶液质量",
          "ku": "Av tê zêdekirin heta ku girseya giştî bigihîje girseya çareseriyê ya xwestî"
        },
        {
          "tr": "Karışım, çözünen tamamen çözününceye kadar karıştırılır",
          "en": "The mixture is stirred until the solute has dissolved completely",
          "de": "Das Gemisch wird gerührt, bis sich der Stoff vollständig gelöst hat",
          "fr": "On agite le mélange jusqu'à dissolution complète du soluté",
          "ru": "Смесь перемешивают до полного растворения вещества",
          "ar": "يُحرَّك الخليط حتى يذوب المذاب تمامًا",
          "zh": "搅拌混合物，直到溶质完全溶解",
          "ku": "Tevlihevî tê tevdan heta ku madeya helyayî bi tevahî bihele"
        }
      ]
    },
    {
      "id": "u08-s04",
      "title": {
        "tr": "Kristallendirme ile Ayırma",
        "en": "Separation by Crystallization",
        "de": "Trennung durch Kristallisation",
        "fr": "Séparation par cristallisation",
        "ru": "Разделение кристаллизацией",
        "ar": "الفصل بالتبلور",
        "zh": "用结晶法分离",
        "ku": "Veqetandin bi krîstalkirinê"
      },
      "steps": [
        {
          "tr": "Çözünürlüğü sıcaklıkla artan katının sıcak suda doymuş çözeltisi hazırlanır",
          "en": "A saturated solution, in hot water, of a solid whose solubility increases with temperature is prepared",
          "de": "Eine gesättigte Lösung eines Feststoffs, dessen Löslichkeit mit der Temperatur steigt, wird in heißem Wasser hergestellt",
          "fr": "On prépare dans l'eau chaude une solution saturée d'un solide dont la solubilité augmente avec la température",
          "ru": "В горячей воде готовят насыщенный раствор твёрдого вещества, растворимость которого растёт с температурой",
          "ar": "يُحضَّر في الماء الساخن محلول مشبع لمادة صلبة تزداد ذائبيتها بارتفاع درجة الحرارة",
          "zh": "在热水中配制溶解度随温度升高而增大的固体的饱和溶液",
          "ku": "Di ava germ de çareseriya têr a madeyek hişk a ku helbûna wê bi germahiyê zêde dibe tê amadekirin"
        },
        {
          "tr": "Çözelti yavaş yavaş soğumaya bırakılır",
          "en": "The solution is allowed to cool slowly",
          "de": "Man lässt die Lösung langsam abkühlen",
          "fr": "La solution est laissée refroidir lentement",
          "ru": "Раствору дают медленно остыть",
          "ar": "يُترك المحلول ليبرد ببطء",
          "zh": "让溶液缓慢冷却",
          "ku": "Dihêlin çareserî hêdî hêdî sar bibe"
        },
        {
          "tr": "Sıcaklık düştükçe çözünürlük azalır ve katı çöker",
          "en": "As the temperature decreases, the solubility decreases and the solid precipitates",
          "de": "Mit sinkender Temperatur nimmt die Löslichkeit ab und der Feststoff fällt aus",
          "fr": "À mesure que la température diminue, la solubilité diminue et le solide précipite",
          "ru": "При понижении температуры растворимость уменьшается, и твёрдое вещество выпадает в осадок",
          "ar": "مع انخفاض درجة الحرارة تقل الذائبية فتترسب المادة الصلبة",
          "zh": "随着温度降低，溶解度降低，固体析出",
          "ku": "Her ku germahî kêm dibe, helbûnî kêm dibe û madeya hişk dinişe"
        },
        {
          "tr": "Oluşan kristaller süzgeç kâğıdıyla süzülerek çözeltiden ayrılır",
          "en": "The crystals formed are separated from the solution by filtering through filter paper",
          "de": "Die gebildeten Kristalle werden durch Filtrieren mit Filterpapier von der Lösung getrennt",
          "fr": "Les cristaux formés sont séparés de la solution par filtration sur papier filtre",
          "ru": "Образовавшиеся кристаллы отделяют от раствора фильтрованием через фильтровальную бумагу",
          "ar": "تُفصل البلورات المتكوّنة عن المحلول بالترشيح باستخدام ورق الترشيح",
          "zh": "用滤纸过滤，把析出的晶体与溶液分离",
          "ku": "Krîstalên ku çêbûne bi parzûnkirina bi kaxeza parzûnê ji çareseriyê tên veqetandin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u08-twin01",
      "stem": {
        "tr": "Kütlece %20'lik 200 gram tuzlu su çözeltisine 50 gram saf su eklendiğinde yeni çözelti kütlece yüzde kaçlık olur?",
        "en": "When 50 grams of pure water is added to 200 grams of 20% salt water solution by mass, what percentage by mass will the new solution be?",
        "de": "Wenn 50 Gramm reines Wasser zu 200 Gramm einer 20-prozentigen Salzwasserlösung hinzugefügt werden, wie viel Prozent der Masse beträgt die neue Lösung?",
        "fr": "Lorsque 50 grammes d’eau pure sont ajoutés à 200 grammes de solution d’eau salée à 20 % en masse, quel sera le pourcentage en masse de la nouvelle solution ?",
        "ru": "К 200 г раствора соли с массовой долей 20 % добавили 50 г чистой воды. Какова массовая доля соли в новом растворе?",
        "ar": "عند إضافة 50 g من الماء النقي إلى 200 g من محلول ملحي تركيزه 20% بالكتلة، ما النسبة المئوية الكتلية للمحلول الجديد؟",
        "zh": "向200 g质量分数为20%的盐水中加入50 g纯水，所得新溶液的质量分数是多少？",
        "ku": "Dema ku 50 gram ava saf bi girseyê li 200 gram ava şor a %20 were zêdekirin, wê çareseriya nû ji sedî çend be?"
      },
      "options": [
        {
          "tr": "%16",
          "en": "16%",
          "de": "16 %",
          "fr": "16%",
          "ru": "16 %",
          "ar": "16%",
          "zh": "16%",
          "ku": "%16"
        },
        {
          "tr": "%10",
          "en": "10%",
          "de": "10 %",
          "fr": "10%",
          "ru": "10 %",
          "ar": "10%",
          "zh": "10%",
          "ku": "%10"
        },
        {
          "tr": "%15",
          "en": "15%",
          "de": "15 %",
          "fr": "15%",
          "ru": "15 %",
          "ar": "15%",
          "zh": "15%",
          "ku": "%15"
        },
        {
          "tr": "%25",
          "en": "25%",
          "de": "25 %",
          "fr": "25%",
          "ru": "25 %",
          "ar": "25%",
          "zh": "25%",
          "ku": "%25"
        },
        {
          "tr": "%12",
          "en": "12%",
          "de": "12 %",
          "fr": "12%",
          "ru": "12 %",
          "ar": "12%",
          "zh": "12%",
          "ku": "%12"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Çözünen tuz = 200 · 0,20 = 40 gram. Yeni toplam kütle = 200 + 50 = 250 gram. Yeni yüzde = (40 / 250) · 100 = %16. Seyreltmede tuz kütlesi değişmez, yalnızca çözelti kütlesi artar; bu yüzden derişim %20'nin altına iner, %25 gibi daha büyük bir değer olamaz.",
        "en": "Dissolved salt = 200 * 0.20 = 40 grams. New total mass = 200 + 50 = 250 grams. New percentage = (40 / 250) * 100 = 16%. In dilution the mass of salt does not change and only the mass of solution increases, so the concentration falls below 20%; a larger value such as 25% is impossible.",
        "de": "Gelöstes Salz = 200 * 0,20 = 40 Gramm. Neue Gesamtmasse = 200 + 50 = 250 Gramm. Neuer Prozentsatz = (40 / 250) * 100 = 16 %. Beim Verdünnen ändert sich die Salzmasse nicht, nur die Masse der Lösung nimmt zu; daher sinkt die Konzentration unter 20 %, ein größerer Wert wie 25 % ist unmöglich.",
        "fr": "Sel dissous = 200 * 0,20 = 40 grammes. Nouvelle masse totale = 200 + 50 = 250 grammes. Nouveau pourcentage = (40 / 250) * 100 = 16 %. Lors d'une dilution, la masse de sel ne change pas, seule la masse de solution augmente ; la concentration passe donc sous 20 %, et une valeur plus grande comme 25 % est impossible.",
        "ru": "Масса соли = 200 · 0,20 = 40 г. Новая масса раствора = 200 + 50 = 250 г. Массовая доля = (40 / 250) · 100 = 16 %. При разбавлении масса соли не меняется, растёт только масса раствора; поэтому концентрация становится ниже 20 %, и большее значение, например 25 %, невозможно.",
        "ar": "كتلة الملح المذاب = 200 · 0.20 = 40 g. الكتلة الكلية الجديدة = 200 + 50 = 250 g. النسبة الجديدة = (40 / 250) · 100 = 16%. في التخفيف لا تتغير كتلة الملح وتزداد كتلة المحلول فقط؛ لذلك ينخفض التركيز إلى أقل من 20%، ولا يمكن أن يكون أكبر منه مثل 25%.",
        "zh": "溶解的盐 = 200 · 0.20 = 40 g。新溶液总质量 = 200 + 50 = 250 g。新质量分数 = (40 / 250) · 100 = 16%。稀释时盐的质量不变，只有溶液质量增加，所以浓度降到 20% 以下，不可能是 25% 这样更大的值。",
        "ku": "Xwêya helkirî = 200 * 0,20 = 40 gram. Girseya giştî ya nû = 200 + 50 = 250 gram. Rêjeya nû = (40 / 250) * 100 = 16%. Di sivikkirinê de girseya xwê naguhere, tenê girseya çareseriyê zêde dibe; ji ber vê yekê giranbûn dikeve bin 20%, nirxeke mezintir wek 25% ne mimkun e."
      }
    },
    {
      "id": "u08-twin02",
      "stem": {
        "tr": "Kaynama noktaları farklı olan aseton (56 °C) ve su (100 °C) homojen karışımını bileşenlerine ayırmak için hangi yöntem kullanılmalıdır?",
        "en": "Which method should be used to separate the homogeneous mixture of acetone (56 °C) and water (100 °C), which have different boiling points, into its components?",
        "de": "Mit welcher Methode trennt man das homogene Gemisch aus Aceton (56 °C) und Wasser (100 °C), die unterschiedliche Siedepunkte haben, in seine Bestandteile?",
        "fr": "Quelle méthode faut-il utiliser pour séparer en ses constituants le mélange homogène d'acétone (56 °C) et d'eau (100 °C), qui ont des températures d'ébullition différentes ?",
        "ru": "Каким методом следует разделить на компоненты однородную смесь ацетона (56 °C) и воды (100 °C), имеющих разные температуры кипения?",
        "ar": "ما الطريقة التي ينبغي استخدامها لفصل الخليط المتجانس من الأسيتون (56 °C) والماء (100 °C)، المختلفين في درجة الغليان، إلى مكوناته؟",
        "zh": "丙酮(56 °C)和水(100 °C)沸点不同，要把它们的均匀混合物分离成各组分，应采用哪种方法？",
        "ku": "Ji bo veqetandina tevliheviya homojen a aseton (56 °C) û avê (100 °C), ku xalên wan ên kelandinê cuda ne, li pêkhateyên wê divê kîjan rêbaz were bikaranîn?"
      },
      "options": [
        {
          "tr": "Ayrımsal damıtma",
          "en": "Fractional distillation",
          "de": "Fraktionierte Destillation",
          "fr": "Distillation fractionnée",
          "ru": "Фракционная перегонка",
          "ar": "التقطير التجزيئي",
          "zh": "分馏",
          "ku": "Distilasyona perçeyî"
        },
        {
          "tr": "Ayırma hunisi",
          "en": "Separatory funnel",
          "de": "Scheidetrichter",
          "fr": "Ampoule à décanter",
          "ru": "Делительная воронка",
          "ar": "قمع الفصل",
          "zh": "分液漏斗",
          "ku": "Hunîya veqetandinê"
        },
        {
          "tr": "Süzme",
          "en": "Filtration",
          "de": "Filtration",
          "fr": "Filtration",
          "ru": "Фильтрование",
          "ar": "الترشيح",
          "zh": "过滤",
          "ku": "Parzûnkirin"
        },
        {
          "tr": "Diyaliz",
          "en": "Dialysis",
          "de": "Dialyse",
          "fr": "Dialyse",
          "ru": "Диализ",
          "ar": "الديلزة",
          "zh": "透析",
          "ku": "Diyaliz"
        },
        {
          "tr": "Flotasyon",
          "en": "Flotation",
          "de": "Flotation",
          "fr": "Flottation",
          "ru": "Флотация",
          "ar": "التعويم",
          "zh": "浮选",
          "ku": "Flotasyon"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Aseton ve su birbiri içinde çözünür (homojen), bu yüzden tabaka oluşmaz ve ayırma hunisi kullanılamaz; tanecikler çok küçük olduğundan süzme ve diyaliz de işe yaramaz. Kaynama noktası farkından yararlanılarak fraksiyon kolonlu ayrımsal damıtma uygulanır; önce aseton buharlaşıp toplanır.",
        "en": "Acetone and water dissolve in each other (homogeneous), so no layers form and a separatory funnel cannot be used; the particles are too small for filtration or dialysis. Using the difference in boiling points, fractional distillation with a fractionating column is applied; acetone vaporises and is collected first.",
        "de": "Aceton und Wasser lösen sich ineinander (homogen), es bilden sich keine Schichten, daher ist der Scheidetrichter ungeeignet; für Filtration oder Dialyse sind die Teilchen zu klein. Man nutzt den Siedepunktunterschied und destilliert fraktioniert mit Kolonne; Aceton verdampft zuerst und wird gesammelt.",
        "fr": "L'acétone et l'eau sont miscibles (mélange homogène) : aucune couche ne se forme et l'ampoule à décanter est inutilisable ; les particules sont trop petites pour la filtration ou la dialyse. On exploite la différence d'ébullition par une distillation fractionnée avec colonne ; l'acétone se vaporise et est recueillie en premier.",
        "ru": "Ацетон и вода взаимно растворимы (смесь однородна), слоёв нет, поэтому делительная воронка не подходит; для фильтрования и диализа частицы слишком малы. Используя разницу температур кипения, проводят фракционную перегонку с колонной; первым испаряется и собирается ацетон.",
        "ar": "الأسيتون والماء يذوب أحدهما في الآخر (خليط متجانس)، فلا تتكون طبقات ولا يصلح قمع الفصل؛ والدقائق أصغر من أن تُفصل بالترشيح أو الديلزة. يُستفاد من اختلاف درجتي الغليان بالتقطير التجزيئي بعمود تجزئة، فيتبخر الأسيتون أولًا ويُجمع.",
        "zh": "丙酮和水互溶（均匀混合物），不分层，不能用分液漏斗；粒子太小，过滤和透析也不适用。利用沸点差异，用带分馏柱的分馏法分离，丙酮先汽化并被收集。",
        "ku": "Aseton û av di hev de dihelin (homojen), ji ber vê yekê qat çênabin û hunîya veqetandinê nayê bikaranîn; perçe ji bo parzûnkirin û diyalîzê pir piçûk in. Bi sûdwergirtina ji cudahiya xalên kelandinê distilasyona perçeyî bi stûnê tê kirin; pêşî aseton hilm dibe û tê berhevkirin."
      }
    },
    {
      "id": "u08-twin03",
      "stem": {
        "tr": "60 mL etil alkol su ile karıştırılarak toplam hacmi 250 mL olan bir kolonya çözeltisi hazırlanıyor. Bu çözeltinin hacimce yüzde derişimi kaçtır?",
        "en": "A cologne solution with a total volume of 250 mL is prepared by mixing 60 mL of ethyl alcohol with water. What is the percent by volume of this solution?",
        "de": "Durch Mischen von 60 mL Ethylalkohol mit Wasser wird eine Kölnisch-Wasser-Lösung mit einem Gesamtvolumen von 250 mL hergestellt. Wie groß ist der Volumenanteil in Prozent dieser Lösung?",
        "fr": "On prépare une eau de Cologne de volume total 250 mL en mélangeant 60 mL d'alcool éthylique avec de l'eau. Quel est le pourcentage volumique de cette solution ?",
        "ru": "Смешав 60 мл этилового спирта с водой, приготовили одеколон общим объёмом 250 мл. Какова объёмная доля спирта (в %) в этом растворе?",
        "ar": "يُحضَّر محلول كولونيا حجمه الكلي 250 mL بخلط 60 mL من الكحول الإيثيلي مع الماء. ما النسبة المئوية الحجمية لهذا المحلول؟",
        "zh": "将60 mL乙醇与水混合，配成总体积为250 mL的古龙水溶液。该溶液中乙醇的体积分数是多少？",
        "ku": "Bi tevlihevkirina 60 mL etîl alkolê bi avê re çareseriyek kolonyayê ya ku hecma wê ya giştî 250 mL e tê amadekirin. Sedîya hecmî ya vê çareseriyê çend e?"
      },
      "options": [
        {
          "tr": "%19,4",
          "en": "19.4%",
          "de": "19,4 %",
          "fr": "19,4 %",
          "ru": "19,4 %",
          "ar": "19.4%",
          "zh": "19.4%",
          "ku": "%19,4"
        },
        {
          "tr": "%24",
          "en": "24%",
          "de": "24 %",
          "fr": "24 %",
          "ru": "24 %",
          "ar": "24%",
          "zh": "24%",
          "ku": "%24"
        },
        {
          "tr": "%31,6",
          "en": "31.6%",
          "de": "31,6 %",
          "fr": "31,6 %",
          "ru": "31,6 %",
          "ar": "31.6%",
          "zh": "31.6%",
          "ku": "%31,6"
        },
        {
          "tr": "%60",
          "en": "60%",
          "de": "60 %",
          "fr": "60 %",
          "ru": "60 %",
          "ar": "60%",
          "zh": "60%",
          "ku": "%60"
        },
        {
          "tr": "%76",
          "en": "76%",
          "de": "76 %",
          "fr": "76 %",
          "ru": "76 %",
          "ar": "76%",
          "zh": "76%",
          "ku": "%76"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Hacimce yüzde = (çözünen hacmi / çözelti hacmi) · 100 = (60 / 250) · 100 = %24. Alkol hacmini 250 mL'ye bir kez daha ekleyip 310'a bölmek %19,4; 250 − 60 = 190 mL'yi çözücü sayıp ona bölmek %31,6 gibi hatalı sonuçlar verir. %76 suyun payıdır, alkolün değil.",
        "en": "Percent by volume = (volume of solute / volume of solution) · 100 = (60 / 250) · 100 = 24%. Adding the alcohol volume to 250 mL again and dividing by 310 gives 19.4%; treating 250 − 60 = 190 mL as solvent and dividing by it gives 31.6% — both are errors. 76% is the share of water, not alcohol.",
        "de": "Volumenprozent = (Volumen des Gelösten / Volumen der Lösung) · 100 = (60 / 250) · 100 = 24 %. Addiert man das Alkoholvolumen nochmals zu 250 mL und teilt durch 310, erhält man fälschlich 19,4 %; teilt man durch 250 − 60 = 190 mL „Lösungsmittel“, fälschlich 31,6 %. 76 % ist der Anteil des Wassers, nicht des Alkohols.",
        "fr": "Pourcentage volumique = (volume de soluté / volume de solution) · 100 = (60 / 250) · 100 = 24 %. Rajouter le volume d'alcool aux 250 mL et diviser par 310 donne 19,4 % ; diviser par 250 − 60 = 190 mL considérés comme solvant donne 31,6 % : ce sont des erreurs. 76 % est la part de l'eau, pas de l'alcool.",
        "ru": "Объёмная доля = (объём растворённого вещества / объём раствора) · 100 = (60 / 250) · 100 = 24 %. Если ещё раз прибавить объём спирта к 250 мл и делить на 310, получится ошибочное значение 19,4 %; если делить на 250 − 60 = 190 мл «растворителя» — ошибочное 31,6 %. 76 % — это доля воды, а не спирта.",
        "ar": "النسبة المئوية الحجمية = (حجم المذاب / حجم المحلول) · 100 = (60 / 250) · 100 = 24%. إضافة حجم الكحول مرة أخرى إلى 250 mL والقسمة على 310 تعطي 19.4% خطأً، والقسمة على 250 − 60 = 190 mL باعتبارها المذيب تعطي 31.6% خطأً. أما 76% فهي حصة الماء لا الكحول.",
        "zh": "体积分数 = (溶质体积 / 溶液体积) · 100 = (60 / 250) · 100 = 24%。把乙醇体积再加到250 mL上、除以310得19.4%，把250 − 60 = 190 mL当作溶剂并除以它得31.6%，都是错误的。76%是水所占的比例，不是乙醇的。",
        "ku": "Sedîya hecmî = (hecma helbûyî / hecma çareseriyê) · 100 = (60 / 250) · 100 = %24. Ger hecma alkolê dîsa li 250 mL were zêdekirin û li 310 were parvekirin %19,4, ger 250 − 60 = 190 mL wek helker were hesibandin û li wê were parvekirin %31,6 derdikeve; ev şaş in. %76 para avê ye, ne ya alkolê."
      }
    },
    {
      "id": "u08-twin04",
      "stem": {
        "tr": "Çözünme ile ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. İyot (I2) apolar CCl4'te, polar suda olduğundan daha iyi çözünür.\nII. NaCl suda çözünürken Na+ ve Cl- iyonları ile su molekülleri arasında iyon-dipol etkileşimleri oluşur.\nIII. Zeytinyağı ile su, ikisi de sıvı olduğu için birbiri içinde iyi çözünür.",
        "en": "Which of the following statements about dissolution are correct?\nI. Iodine (I2) dissolves better in nonpolar CCl4 than in polar water.\nII. When NaCl dissolves in water, ion-dipole interactions form between the Na+ and Cl- ions and water molecules.\nIII. Olive oil and water dissolve well in each other because both are liquids.",
        "de": "Welche der folgenden Aussagen zum Lösen sind richtig?\nI. Iod (I2) löst sich im unpolaren CCl4 besser als im polaren Wasser.\nII. Beim Lösen von NaCl in Wasser bilden sich Ion-Dipol-Wechselwirkungen zwischen den Na+- und Cl--Ionen und den Wassermolekülen.\nIII. Olivenöl und Wasser lösen sich gut ineinander, weil beide Flüssigkeiten sind.",
        "fr": "Parmi les affirmations suivantes sur la dissolution, lesquelles sont exactes ?\nI. Le diiode (I2) se dissout mieux dans CCl4 apolaire que dans l'eau polaire.\nII. Lors de la dissolution de NaCl dans l'eau, des interactions ion-dipôle s'établissent entre les ions Na+ et Cl- et les molécules d'eau.\nIII. L'huile d'olive et l'eau se dissolvent bien l'une dans l'autre parce que ce sont deux liquides.",
        "ru": "Какие из следующих утверждений о растворении верны?\nI. Йод (I2) растворяется в неполярном CCl4 лучше, чем в полярной воде.\nII. При растворении NaCl в воде между ионами Na+ и Cl- и молекулами воды возникают ион-дипольные взаимодействия.\nIII. Оливковое масло и вода хорошо растворяются друг в друге, так как обе являются жидкостями.",
        "ar": "أيّ العبارات الآتية عن الذوبان صحيحة؟\nI. يذوب اليود (I2) في CCl4 غير القطبي أفضل من ذوبانه في الماء القطبي.\nII. عند ذوبان NaCl في الماء تتكون تآثرات أيون-ثنائي القطب بين أيونات Na+ وCl- وجزيئات الماء.\nIII. يذوب زيت الزيتون والماء أحدهما في الآخر جيدًا لأن كليهما سائل.",
        "zh": "下列关于溶解的说法中，哪些是正确的？\nI. 碘(I2)在非极性的CCl4中比在极性的水中溶解得更好。\nII. NaCl溶于水时，Na+ 和 Cl- 离子与水分子之间形成离子-偶极作用。\nIII. 橄榄油和水都是液体，所以能很好地互相溶解。",
        "ku": "Ji van hukmên jêrîn ên derbarê helandinê de kîjan rast in?\nI. Îyod (I2) di CCl4 ya ne-polar de ji ava polar baştir dihele.\nII. Dema NaCl di avê de dihele, di navbera îyonên Na+ û Cl- û molekulên avê de têkiliyên îyon-dîpol çêdibin.\nIII. Rûnê zeytûnê û av, ji ber ku herdu jî şil in, di hev de baş dihelin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "只有 I",
          "ku": "Tenê I"
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
      "correctIndex": 1,
      "explanation": {
        "tr": "I doğrudur: I2 apolardır, \"benzer benzeri çözer\" gereği apolar CCl4'te iyi, polar suda az çözünür. II doğrudur: iyonlar, su moleküllerinin zıt yüklü uçlarıyla iyon-dipol etkileşimi kurarak hidratlanır. III yanlıştır: çözünmeyi fiziksel hâl değil polarlık belirler; apolar yağ polar suda çözünmez ve iki tabaka oluşturur.",
        "en": "I is correct: I2 is nonpolar, so by \"like dissolves like\" it dissolves well in nonpolar CCl4 and poorly in polar water. II is correct: the ions are hydrated by forming ion-dipole interactions with the oppositely charged ends of water molecules. III is wrong: solubility is decided by polarity, not by physical state; nonpolar oil does not dissolve in polar water and forms two layers.",
        "de": "I ist richtig: I2 ist unpolar und löst sich nach „Gleiches löst sich in Gleichem“ gut in unpolarem CCl4, kaum in polarem Wasser. II ist richtig: Die Ionen werden hydratisiert, indem sie Ion-Dipol-Wechselwirkungen mit den entgegengesetzt geladenen Enden der Wassermoleküle eingehen. III ist falsch: Über die Löslichkeit entscheidet die Polarität, nicht der Aggregatzustand; unpolares Öl löst sich nicht in polarem Wasser und bildet zwei Schichten.",
        "fr": "I est exacte : I2 est apolaire ; selon « le semblable dissout le semblable », il se dissout bien dans CCl4 apolaire et peu dans l'eau polaire. II est exacte : les ions sont hydratés grâce à des interactions ion-dipôle avec les extrémités de charge opposée des molécules d'eau. III est fausse : c'est la polarité, et non l'état physique, qui détermine la solubilité ; l'huile apolaire ne se dissout pas dans l'eau polaire et forme deux couches.",
        "ru": "I верно: I2 неполярен, и по правилу «подобное растворяется в подобном» хорошо растворяется в неполярном CCl4 и плохо — в полярной воде. II верно: ионы гидратируются, образуя ион-дипольные взаимодействия с противоположно заряженными концами молекул воды. III неверно: растворимость определяет полярность, а не агрегатное состояние; неполярное масло не растворяется в полярной воде и образует два слоя.",
        "ar": "I صحيحة: I2 غير قطبي، فيذوب جيدًا في CCl4 غير القطبي وقليلًا في الماء القطبي وفق قاعدة «الشبيه يذيب الشبيه». II صحيحة: تتميه الأيونات بتكوين تآثرات أيون-ثنائي القطب مع أطراف جزيئات الماء المخالفة لها في الشحنة. III خاطئة: القطبية لا الحالة الفيزيائية هي التي تحدد الذوبان؛ فالزيت غير القطبي لا يذوب في الماء القطبي ويكوّن طبقتين.",
        "zh": "I正确：I2是非极性分子，按“相似相溶”，它易溶于非极性的CCl4，难溶于极性的水。II正确：离子与水分子带相反电荷的一端形成离子-偶极作用而被水合。III错误：决定溶解性的是极性而不是物态；非极性的油不溶于极性的水，会分成两层。",
        "ku": "I rast e: I2 ne-polar e, li gorî \"wekhev wekhevê dihelîne\" di CCl4 ya ne-polar de baş, di ava polar de kêm dihele. II rast e: îyon bi dawiyên molekulên avê yên bi barê berevajî re têkiliya îyon-dîpol çêdikin û hîdrat dibin. III şaş e: helbûnê ne rewşa fîzîkî, polarbûn diyar dike; rûnê ne-polar di ava polar de nahele û du qatan çêdike."
      }
    },
    {
      "id": "u08-twin05",
      "stem": {
        "tr": "Kütlece %20'lik 100 g şekerli su ile kütlece %40'lık 300 g şekerli su karıştırılıyor. Oluşan çözeltinin kütlece yüzde derişimi kaçtır?",
        "en": "100 g of a 20% by mass sugar solution is mixed with 300 g of a 40% by mass sugar solution. What is the percent by mass of the resulting solution?",
        "de": "100 g einer Zuckerlösung mit 20 Massenprozent werden mit 300 g einer Zuckerlösung mit 40 Massenprozent gemischt. Wie viel Massenprozent hat die entstehende Lösung?",
        "fr": "On mélange 100 g d'eau sucrée à 20 % en masse avec 300 g d'eau sucrée à 40 % en masse. Quel est le pourcentage massique de la solution obtenue ?",
        "ru": "Смешали 100 г раствора сахара с массовой долей 20 % и 300 г раствора сахара с массовой долей 40 %. Какова массовая доля сахара в полученном растворе?",
        "ar": "يُخلط 100 g من محلول سكري تركيزه 20% بالكتلة مع 300 g من محلول سكري تركيزه 40% بالكتلة. ما النسبة المئوية الكتلية للمحلول الناتج؟",
        "zh": "将100 g质量分数为20%的糖水与300 g质量分数为40%的糖水混合。所得溶液的质量分数是多少？",
        "ku": "100 g ava şekirî ya %20 a girseyî bi 300 g ava şekirî ya %40 a girseyî re tê tevlihevkirin. Sedîya girseyî ya çareseriya ku çêdibe çend e?"
      },
      "options": [
        {
          "tr": "%20",
          "en": "20%",
          "de": "20 %",
          "fr": "20 %",
          "ru": "20 %",
          "ar": "20%",
          "zh": "20%",
          "ku": "%20"
        },
        {
          "tr": "%30",
          "en": "30%",
          "de": "30 %",
          "fr": "30 %",
          "ru": "30 %",
          "ar": "30%",
          "zh": "30%",
          "ku": "%30"
        },
        {
          "tr": "%35",
          "en": "35%",
          "de": "35 %",
          "fr": "35 %",
          "ru": "35 %",
          "ar": "35%",
          "zh": "35%",
          "ku": "%35"
        },
        {
          "tr": "%40",
          "en": "40%",
          "de": "40 %",
          "fr": "40 %",
          "ru": "40 %",
          "ar": "40%",
          "zh": "40%",
          "ku": "%40"
        },
        {
          "tr": "%60",
          "en": "60%",
          "de": "60 %",
          "fr": "60 %",
          "ru": "60 %",
          "ar": "60%",
          "zh": "60%",
          "ku": "%60"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Birinci çözeltideki şeker = 100 · 0,20 = 20 g; ikincideki = 300 · 0,40 = 120 g. Toplam şeker = 140 g, toplam çözelti = 400 g. Yüzde = (140 / 400) · 100 = %35. Kütleleri hesaba katmadan iki yüzdenin ortalamasını almak %30, yüzdeleri toplamak %60 gibi yanlış sonuçlar verir; karışımın derişimi daima iki derişimin arasında ve kütlesi büyük olana daha yakındır.",
        "en": "Sugar in the first solution = 100 · 0.20 = 20 g; in the second = 300 · 0.40 = 120 g. Total sugar = 140 g, total solution = 400 g. Percentage = (140 / 400) · 100 = 35%. Averaging the two percentages without the masses gives 30%, adding them gives 60% — both wrong; the mixture's concentration lies between the two and closer to the one with the larger mass.",
        "de": "Zucker in der ersten Lösung = 100 · 0,20 = 20 g; in der zweiten = 300 · 0,40 = 120 g. Gesamtzucker = 140 g, Gesamtlösung = 400 g. Prozent = (140 / 400) · 100 = 35 %. Der Mittelwert der Prozentangaben ohne Massen ergibt fälschlich 30 %, ihre Summe 60 %; die Konzentration der Mischung liegt zwischen beiden und näher an der Lösung mit der größeren Masse.",
        "fr": "Sucre dans la première solution = 100 · 0,20 = 20 g ; dans la seconde = 300 · 0,40 = 120 g. Sucre total = 140 g, solution totale = 400 g. Pourcentage = (140 / 400) · 100 = 35 %. Faire la moyenne des pourcentages sans tenir compte des masses donne 30 %, les additionner donne 60 % : erreurs. La concentration du mélange est comprise entre les deux et plus proche de celle de la solution la plus lourde.",
        "ru": "Сахар в первом растворе = 100 · 0,20 = 20 г; во втором = 300 · 0,40 = 120 г. Всего сахара 140 г, всего раствора 400 г. Массовая доля = (140 / 400) · 100 = 35 %. Среднее двух процентов без учёта масс даёт ошибочные 30 %, их сумма — 60 %; концентрация смеси всегда лежит между двумя исходными и ближе к концентрации раствора с большей массой.",
        "ar": "السكر في المحلول الأول = 100 · 0.20 = 20 g، وفي الثاني = 300 · 0.40 = 120 g. مجموع السكر = 140 g ومجموع المحلول = 400 g. النسبة = (140 / 400) · 100 = 35%. أخذ متوسط النسبتين دون الكتل يعطي 30% وجمعهما يعطي 60% وكلاهما خطأ؛ فتركيز الخليط يقع بين التركيزين وأقرب إلى المحلول الأكبر كتلة.",
        "zh": "第一份溶液中糖 = 100 · 0.20 = 20 g；第二份中糖 = 300 · 0.40 = 120 g。糖共140 g，溶液共400 g。质量分数 = (140 / 400) · 100 = 35%。不考虑质量而直接取两个百分数的平均值得30%，把它们相加得60%，都是错误的；混合液的浓度介于两者之间，且更接近质量较大的那份溶液。",
        "ku": "Şekirê di çareseriya yekem de = 100 · 0,20 = 20 g; di ya duyem de = 300 · 0,40 = 120 g. Şekirê giştî = 140 g, çareseriya giştî = 400 g. Sedî = (140 / 400) · 100 = %35. Navgîniya herdu sedîyan bêyî girseyan %30, berhevkirina wan %60 dide; ev şaş in. Giranbûna tevliheviyê di navbera herduyan de ye û nêzîkî ya bi girseya mezintir e."
      }
    },
    {
      "id": "u08-twin06",
      "stem": {
        "tr": "Kütlece %15'lik 200 g tuzlu su ısıtılarak, tuz çökmeden 50 g su buharlaştırılıyor. Son çözeltinin kütlece yüzde derişimi kaçtır?",
        "en": "200 g of 15% by mass salt water is heated and 50 g of water is evaporated without any salt crystallising. What is the percent by mass of the final solution?",
        "de": "200 g Salzwasser mit 15 Massenprozent werden erhitzt, und 50 g Wasser verdampfen, ohne dass Salz ausfällt. Wie viel Massenprozent hat die Lösung danach?",
        "fr": "On chauffe 200 g d'eau salée à 15 % en masse et on évapore 50 g d'eau sans que le sel ne cristallise. Quel est le pourcentage massique de la solution finale ?",
        "ru": "Из 200 г раствора соли с массовой долей 15 % при нагревании выпарили 50 г воды; соль в осадок не выпала. Какова массовая доля соли в конечном растворе?",
        "ar": "يُسخَّن 200 g من ماء مالح تركيزه 15% بالكتلة فيتبخر 50 g من الماء دون أن يترسب الملح. ما النسبة المئوية الكتلية للمحلول النهائي؟",
        "zh": "将200 g质量分数为15%的盐水加热，蒸发掉50 g水，且没有盐析出。最终溶液的质量分数是多少？",
        "ku": "200 g ava şor a %15 a girseyî tê germkirin û bêyî ku xwê binişe 50 g av hilm dibe. Sedîya girseyî ya çareseriya dawî çend e?"
      },
      "options": [
        {
          "tr": "%10",
          "en": "10%",
          "de": "10 %",
          "fr": "10 %",
          "ru": "10 %",
          "ar": "10%",
          "zh": "10%",
          "ku": "%10"
        },
        {
          "tr": "%12",
          "en": "12%",
          "de": "12 %",
          "fr": "12 %",
          "ru": "12 %",
          "ar": "12%",
          "zh": "12%",
          "ku": "%12"
        },
        {
          "tr": "%15",
          "en": "15%",
          "de": "15 %",
          "fr": "15 %",
          "ru": "15 %",
          "ar": "15%",
          "zh": "15%",
          "ku": "%15"
        },
        {
          "tr": "%20",
          "en": "20%",
          "de": "20 %",
          "fr": "20 %",
          "ru": "20 %",
          "ar": "20%",
          "zh": "20%",
          "ku": "%20"
        },
        {
          "tr": "%25",
          "en": "25%",
          "de": "25 %",
          "fr": "25 %",
          "ru": "25 %",
          "ar": "25%",
          "zh": "25%",
          "ku": "%25"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Tuz kütlesi = 200 · 0,15 = 30 g ve buharlaştırmada değişmez. Yeni çözelti kütlesi = 200 − 50 = 150 g. Yüzde = (30 / 150) · 100 = %20. Kütleyi 250 g almak (su eklenmiş gibi) %12; derişimin değişmediğini sanmak %15; tuzu kalan suya (120 g) bölmek %25 gibi yanlış sonuçlar verir.",
        "en": "Mass of salt = 200 · 0.15 = 30 g and it does not change on evaporation. New mass of solution = 200 − 50 = 150 g. Percentage = (30 / 150) · 100 = 20%. Taking the mass as 250 g (as if water were added) gives 12%; assuming the concentration is unchanged gives 15%; dividing by the remaining water (120 g) gives 25% — all wrong.",
        "de": "Salzmasse = 200 · 0,15 = 30 g; sie ändert sich beim Verdampfen nicht. Neue Lösungsmasse = 200 − 50 = 150 g. Prozent = (30 / 150) · 100 = 20 %. Mit 250 g zu rechnen (als wäre Wasser zugegeben) ergibt 12 %, eine unveränderte Konzentration anzunehmen 15 %, durch das verbleibende Wasser (120 g) zu teilen 25 % — alles falsch.",
        "fr": "Masse de sel = 200 · 0,15 = 30 g, inchangée par l'évaporation. Nouvelle masse de solution = 200 − 50 = 150 g. Pourcentage = (30 / 150) · 100 = 20 %. Prendre 250 g (comme si on avait ajouté de l'eau) donne 12 % ; supposer la concentration inchangée donne 15 % ; diviser par l'eau restante (120 g) donne 25 % : erreurs.",
        "ru": "Масса соли = 200 · 0,15 = 30 г, при выпаривании она не меняется. Новая масса раствора = 200 − 50 = 150 г. Массовая доля = (30 / 150) · 100 = 20 %. Если взять массу 250 г (как будто воду добавили), получится 12 %; если считать концентрацию неизменной — 15 %; если делить на оставшуюся воду (120 г) — 25 %. Всё это ошибки.",
        "ar": "كتلة الملح = 200 · 0.15 = 30 g ولا تتغير بالتبخير. كتلة المحلول الجديدة = 200 − 50 = 150 g. النسبة = (30 / 150) · 100 = 20%. اعتبار الكتلة 250 g (كأن الماء أُضيف) يعطي 12%، وافتراض ثبات التركيز يعطي 15%، والقسمة على الماء المتبقي (120 g) تعطي 25%، وكلها خطأ.",
        "zh": "盐的质量 = 200 · 0.15 = 30 g，蒸发时不变。新溶液质量 = 200 − 50 = 150 g。质量分数 = (30 / 150) · 100 = 20%。把质量当作250 g（像加了水一样）得12%，认为浓度不变得15%，除以剩余的水(120 g)得25%，都是错误的。",
        "ku": "Girseya xwê = 200 · 0,15 = 30 g û bi hilmkirinê naguhere. Girseya nû ya çareseriyê = 200 − 50 = 150 g. Sedî = (30 / 150) · 100 = %20. Girse wek 250 g hesibandin (wek ku av hatibe zêdekirin) %12, giranbûn neguherî hesibandin %15, parvekirina li ava mayî (120 g) %25 dide; hemû şaş in."
      }
    },
    {
      "id": "u08-twin07",
      "stem": {
        "tr": "Kütlece %25'lik 160 g şekerli suya, aynı sıcaklıkta tamamı çözünecek şekilde kaç gram şeker eklenirse kütlece %40'lık çözelti elde edilir?",
        "en": "How many grams of sugar must be added to 160 g of a 25% by mass sugar solution, all of it dissolving at the same temperature, to obtain a 40% by mass solution?",
        "de": "Wie viel Gramm Zucker muss man 160 g einer Zuckerlösung mit 25 Massenprozent bei gleicher Temperatur zufügen (der Zucker löst sich vollständig), um eine Lösung mit 40 Massenprozent zu erhalten?",
        "fr": "Combien de grammes de sucre faut-il ajouter à 160 g d'eau sucrée à 25 % en masse, le sucre se dissolvant entièrement à la même température, pour obtenir une solution à 40 % en masse ?",
        "ru": "Сколько граммов сахара нужно добавить при той же температуре к 160 г раствора сахара с массовой долей 25 %, чтобы весь сахар растворился и получился раствор с массовой долей 40 %?",
        "ar": "كم غرامًا من السكر يجب إضافتها إلى 160 g من محلول سكري تركيزه 25% بالكتلة، بحيث يذوب كله عند درجة الحرارة نفسها، للحصول على محلول تركيزه 40% بالكتلة؟",
        "zh": "向160 g质量分数为25%的糖水中加入多少克糖（在同一温度下全部溶解），可得到质量分数为40%的溶液？",
        "ku": "Ji bo ku çareseriyek %40 a girseyî bê bidestxistin, divê çend gram şekir li 160 g ava şekirî ya %25 a girseyî were zêdekirin (di heman germahiyê de hemû dihele)?"
      },
      "options": [
        {
          "tr": "16 g",
          "en": "16 g",
          "de": "16 g",
          "fr": "16 g",
          "ru": "16 г",
          "ar": "16 g",
          "zh": "16 g",
          "ku": "16 g"
        },
        {
          "tr": "24 g",
          "en": "24 g",
          "de": "24 g",
          "fr": "24 g",
          "ru": "24 г",
          "ar": "24 g",
          "zh": "24 g",
          "ku": "24 g"
        },
        {
          "tr": "32 g",
          "en": "32 g",
          "de": "32 g",
          "fr": "32 g",
          "ru": "32 г",
          "ar": "32 g",
          "zh": "32 g",
          "ku": "32 g"
        },
        {
          "tr": "40 g",
          "en": "40 g",
          "de": "40 g",
          "fr": "40 g",
          "ru": "40 г",
          "ar": "40 g",
          "zh": "40 g",
          "ku": "40 g"
        },
        {
          "tr": "64 g",
          "en": "64 g",
          "de": "64 g",
          "fr": "64 g",
          "ru": "64 г",
          "ar": "64 g",
          "zh": "64 g",
          "ku": "64 g"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Başlangıçtaki şeker = 160 · 0,25 = 40 g. Eklenen şeker x olsun; hem çözünen hem çözelti kütlesi x kadar artar: (40 + x) / (160 + x) = 0,40 → 40 + x = 64 + 0,4x → 0,6x = 24 → x = 40 g. Kontrol: 80 / 200 = %40. Çözelti kütlesinin de arttığını unutup 0,40 · 160 − 40 = 24 g bulmak ya da 64 g'ı eklenecek şeker sanmak tipik hatalardır.",
        "en": "Initial sugar = 160 · 0.25 = 40 g. Let the added sugar be x; both the solute and the solution mass increase by x: (40 + x) / (160 + x) = 0.40 → 40 + x = 64 + 0.4x → 0.6x = 24 → x = 40 g. Check: 80 / 200 = 40%. Forgetting that the solution mass also increases (0.40 · 160 − 40 = 24 g) or taking 64 g as the sugar to add are typical errors.",
        "de": "Anfangszucker = 160 · 0,25 = 40 g. Zugegebener Zucker sei x; Gelöstes und Lösung nehmen beide um x zu: (40 + x) / (160 + x) = 0,40 → 40 + x = 64 + 0,4x → 0,6x = 24 → x = 40 g. Probe: 80 / 200 = 40 %. Typische Fehler: vergessen, dass auch die Lösungsmasse wächst (0,40 · 160 − 40 = 24 g), oder 64 g für die zuzugebende Menge halten.",
        "fr": "Sucre initial = 160 · 0,25 = 40 g. Soit x le sucre ajouté ; la masse de soluté et celle de la solution augmentent toutes deux de x : (40 + x) / (160 + x) = 0,40 → 40 + x = 64 + 0,4x → 0,6x = 24 → x = 40 g. Vérification : 80 / 200 = 40 %. Oublier que la masse de solution augmente aussi (0,40 · 160 − 40 = 24 g) ou prendre 64 g pour la masse à ajouter sont des erreurs classiques.",
        "ru": "Исходный сахар = 160 · 0,25 = 40 г. Пусть добавлено x г сахара; масса и растворённого вещества, и раствора увеличивается на x: (40 + x) / (160 + x) = 0,40 → 40 + x = 64 + 0,4x → 0,6x = 24 → x = 40 г. Проверка: 80 / 200 = 40 %. Типичные ошибки — забыть, что растёт и масса раствора (0,40 · 160 − 40 = 24 г), или принять 64 г за добавляемое количество.",
        "ar": "السكر الابتدائي = 160 · 0.25 = 40 g. ليكن السكر المضاف x؛ فتزداد كتلة المذاب وكتلة المحلول كلتاهما بمقدار x: (40 + x) / (160 + x) = 0.40 → 40 + x = 64 + 0.4x → 0.6x = 24 → x = 40 g. التحقق: 80 / 200 = 40%. من الأخطاء الشائعة نسيان ازدياد كتلة المحلول (0.40 · 160 − 40 = 24 g) أو اعتبار 64 g هي الكمية المضافة.",
        "zh": "原有糖 = 160 · 0.25 = 40 g。设加入糖x g，溶质和溶液的质量都增加x：(40 + x) / (160 + x) = 0.40 → 40 + x = 64 + 0.4x → 0.6x = 24 → x = 40 g。检验：80 / 200 = 40%。忘记溶液质量也增加(0.40 · 160 − 40 = 24 g)，或把64 g当作要加入的糖，都是典型错误。",
        "ku": "Şekirê destpêkê = 160 · 0,25 = 40 g. Bila şekirê zêdekirî x be; hem girseya helbûyî hem ya çareseriyê bi qasî x zêde dibe: (40 + x) / (160 + x) = 0,40 → 40 + x = 64 + 0,4x → 0,6x = 24 → x = 40 g. Kontrol: 80 / 200 = %40. Jibîrkirina zêdebûna girseya çareseriyê (0,40 · 160 − 40 = 24 g) an 64 g wek şekirê ku bê zêdekirin hesibandin şaşiyên berbelav in."
      }
    },
    {
      "id": "u08-twin08",
      "stem": {
        "tr": "Karışımlarla ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Tuzlu su, her yerinde aynı özelliği gösteren homojen bir karışımdır.\nII. Zeytinyağı-su karışımı, katının sıvıda dağıldığı bir süspansiyondur.\nIII. Sis, sıvı damlacıklarının havada dağılmasıyla oluşan bir aerosoldür.",
        "en": "Which of the following statements about mixtures are correct?\nI. Salt water is a homogeneous mixture with the same properties throughout.\nII. An olive oil–water mixture is a suspension in which a solid is dispersed in a liquid.\nIII. Fog is an aerosol formed by liquid droplets dispersed in air.",
        "de": "Welche der folgenden Aussagen über Gemische sind richtig?\nI. Salzwasser ist ein homogenes Gemisch, das überall dieselben Eigenschaften hat.\nII. Ein Olivenöl-Wasser-Gemisch ist eine Suspension, in der ein Feststoff in einer Flüssigkeit verteilt ist.\nIII. Nebel ist ein Aerosol aus in Luft verteilten Flüssigkeitströpfchen.",
        "fr": "Parmi les affirmations suivantes sur les mélanges, lesquelles sont exactes ?\nI. L'eau salée est un mélange homogène qui a les mêmes propriétés en tout point.\nII. Le mélange huile d'olive–eau est une suspension où un solide est dispersé dans un liquide.\nIII. Le brouillard est un aérosol formé de gouttelettes de liquide dispersées dans l'air.",
        "ru": "Какие из следующих утверждений о смесях верны?\nI. Солёная вода — однородная смесь, во всех точках имеющая одинаковые свойства.\nII. Смесь оливкового масла с водой — суспензия, в которой твёрдое вещество распределено в жидкости.\nIII. Туман — аэрозоль, образованный капельками жидкости, распределёнными в воздухе.",
        "ar": "أيّ العبارات الآتية عن المخاليط صحيحة؟\nI. الماء المالح خليط متجانس له الخصائص نفسها في جميع أجزائه.\nII. خليط زيت الزيتون والماء معلق تنتشر فيه مادة صلبة في سائل.\nIII. الضباب هباء جوي (أيروسول) يتكون من قطيرات سائلة منتشرة في الهواء.",
        "zh": "下列关于混合物的说法中，哪些是正确的？\nI. 盐水是各处性质相同的均匀混合物。\nII. 橄榄油-水混合物是固体分散在液体中的悬浊液。\nIII. 雾是液滴分散在空气中形成的气溶胶。",
        "ku": "Ji van hukmên jêrîn ên derbarê tevliheviyan de kîjan rast in?\nI. Ava şor tevliheviyek homojen e ku li her derê xwe heman taybetmendiyê nîşan dide.\nII. Tevliheviya rûnê zeytûnê-avê suspansiyonek e ku tê de madeyek hişk di şilê de belav bûye.\nIII. Mij aerosolek e ku ji belavbûna dilopên şil di hewayê de çêdibe."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "只有 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "只有 II",
          "ku": "Tenê II"
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
        "tr": "I doğrudur: tuz suda iyonlarına ayrılarak tamamen çözünür, tek fazlı homojen karışım (çözelti) oluşur. II yanlıştır: zeytinyağı katı değil sıvıdır; birbiri içinde çözünmeyen iki sıvının karışımı süspansiyon değil emülsiyondur. III doğrudur: sisde dağılan madde sıvı, dağılma ortamı gazdır; bu tür karışımlar aerosoldür.",
        "en": "I is correct: salt dissolves completely in water as ions, forming a single-phase homogeneous mixture (a solution). II is wrong: olive oil is a liquid, not a solid; a mixture of two immiscible liquids is an emulsion, not a suspension. III is correct: in fog the dispersed substance is a liquid and the medium is a gas, which makes it an aerosol.",
        "de": "I ist richtig: Salz löst sich vollständig in Ionen, es entsteht ein einphasiges homogenes Gemisch (Lösung). II ist falsch: Olivenöl ist eine Flüssigkeit, kein Feststoff; ein Gemisch zweier nicht mischbarer Flüssigkeiten ist eine Emulsion, keine Suspension. III ist richtig: Im Nebel ist der verteilte Stoff flüssig und das Medium gasförmig, also ein Aerosol.",
        "fr": "I est exacte : le sel se dissout entièrement sous forme d'ions et forme un mélange homogène monophasique (solution). II est fausse : l'huile d'olive est un liquide, pas un solide ; un mélange de deux liquides non miscibles est une émulsion, non une suspension. III est exacte : dans le brouillard, la phase dispersée est liquide et le milieu est gazeux : c'est un aérosol.",
        "ru": "I верно: соль полностью растворяется, распадаясь на ионы, и образуется однофазная однородная смесь (раствор). II неверно: оливковое масло — жидкость, а не твёрдое вещество; смесь двух несмешивающихся жидкостей — эмульсия, а не суспензия. III верно: в тумане распределено жидкое вещество, а среда газообразная, это аэрозоль.",
        "ar": "I صحيحة: يذوب الملح في الماء كليًا متفككًا إلى أيونات فيتكون خليط متجانس أحادي الطور (محلول). II خاطئة: زيت الزيتون سائل لا صلب، وخليط سائلين غير ممتزجين مستحلب لا معلق. III صحيحة: في الضباب تكون المادة المنتشرة سائلة ووسط الانتشار غازيًا، فهو هباء جوي.",
        "zh": "I正确：盐在水中以离子形式完全溶解，形成单相的均匀混合物（溶液）。II错误：橄榄油是液体而不是固体；两种不互溶液体的混合物是乳浊液，不是悬浊液。III正确：雾中分散的是液体，分散介质是气体，所以是气溶胶。",
        "ku": "I rast e: xwê di avê de dibe îyon û bi tevahî dihele, tevliheviyek homojen a yek-qonaxî (çareserî) çêdibe. II şaş e: rûnê zeytûnê ne hişk, şil e; tevliheviya du şilên ku di hev de nahelin ne suspansiyon, emulsiyon e. III rast e: di mijê de madeya belavbûyî şil û navgîna belavbûnê gaz e; ev aerosol e."
      }
    },
    {
      "id": "u08-twin09",
      "stem": {
        "tr": "Bir öğrenci, saydam görünen bir sıvı karışımla şu gözlemleri yapıyor:\n• Karanlık odada karışımdan lazer ışını geçirildiğinde ışığın izlediği yol görünüyor.\n• Karışım süzgeç kâğıdından süzüldüğünde kâğıt üzerinde kalıntı kalmıyor.\n• Birkaç gün bekletildiğinde dipte çökelme olmuyor.\nBu karışım aşağıdakilerden hangisi olabilir?",
        "en": "A student makes the following observations on a liquid mixture that looks transparent:\n• When a laser beam is passed through it in a dark room, the path of the light is visible.\n• When it is filtered through filter paper, no residue remains on the paper.\n• After standing for a few days, nothing settles at the bottom.\nWhich of the following could this mixture be?",
        "de": "Ein Schüler macht an einem durchsichtig aussehenden flüssigen Gemisch folgende Beobachtungen:\n• Schickt man im dunklen Raum einen Laserstrahl hindurch, ist der Lichtweg sichtbar.\n• Beim Filtrieren durch Filterpapier bleibt kein Rückstand auf dem Papier.\n• Nach einigen Tagen Stehen setzt sich nichts am Boden ab.\nWelches der folgenden Gemische könnte es sein?",
        "fr": "Un élève fait les observations suivantes sur un mélange liquide d'aspect transparent :\n• Dans une pièce sombre, lorsqu'on y fait passer un faisceau laser, le trajet de la lumière est visible.\n• Filtré sur papier filtre, il ne laisse aucun résidu sur le papier.\n• Après quelques jours de repos, rien ne se dépose au fond.\nLequel des mélanges suivants peut-il être ?",
        "ru": "Ученик проводит наблюдения над прозрачной на вид жидкой смесью:\n• Если в тёмной комнате пропустить через неё лазерный луч, виден путь света.\n• При фильтровании через фильтровальную бумагу на бумаге не остаётся осадка.\n• После нескольких дней стояния на дне ничего не оседает.\nКакой из перечисленных смесей это может быть?",
        "ar": "يجري طالب الملاحظات الآتية على خليط سائل يبدو شفافًا:\n• عند تمرير شعاع ليزر خلاله في غرفة مظلمة يظهر مسار الضوء.\n• عند ترشيحه بورق الترشيح لا يبقى أي راسب على الورق.\n• عند تركه بضعة أيام لا يترسب شيء في القاع.\nأيّ مما يأتي يمكن أن يكون هذا الخليط؟",
        "zh": "某学生对一种看起来透明的液体混合物进行了以下观察：\n• 在暗室中让激光束通过它时，可以看到光的路径。\n• 用滤纸过滤时，滤纸上没有残留物。\n• 静置几天后，底部没有沉淀。\n这种混合物可能是下列哪一种？",
        "ku": "Xwendekarek li ser tevliheviyek şil a ku zelal xuya dike van çavdêriyan dike:\n• Dema di odeyek tarî de tîrêjek lazerê di nav wê re tê derbaskirin, riya ronahiyê tê dîtin.\n• Dema bi kaxeza parzûnê tê parzûnkirin, li ser kaxezê tu bermayî namîne.\n• Piştî çend rojan hiştinê, li binî tiştek naniştin.\nEv tevlihevî dikare kîjan ji van be?"
      },
      "options": [
        {
          "tr": "Jelatinli su",
          "en": "Gelatine in water",
          "de": "Gelatine in Wasser",
          "fr": "Gélatine dans l'eau",
          "ru": "Вода с желатином",
          "ar": "الجيلاتين في الماء",
          "zh": "明胶水溶液",
          "ku": "Jelatîn di avê de"
        },
        {
          "tr": "Şekerli su",
          "en": "Sugar water",
          "de": "Zuckerwasser",
          "fr": "Eau sucrée",
          "ru": "Вода с сахаром",
          "ar": "الماء المحلّى بالسكر",
          "zh": "糖水",
          "ku": "Ava şekirî"
        },
        {
          "tr": "Tuzlu su",
          "en": "Salt water",
          "de": "Salzwasser",
          "fr": "Eau salée",
          "ru": "Вода с солью",
          "ar": "الماء المالح",
          "zh": "盐水",
          "ku": "Ava şor"
        },
        {
          "tr": "Tebeşir tozu-su",
          "en": "Chalk powder in water",
          "de": "Kreidepulver in Wasser",
          "fr": "Poudre de craie dans l'eau",
          "ru": "Мел с водой",
          "ar": "مسحوق الطباشير في الماء",
          "zh": "粉笔灰与水",
          "ku": "Toza tebeşîrê-av"
        },
        {
          "tr": "Zeytinyağı-su",
          "en": "Olive oil and water",
          "de": "Olivenöl und Wasser",
          "fr": "Huile d'olive et eau",
          "ru": "Оливковое масло с водой",
          "ar": "زيت الزيتون والماء",
          "zh": "橄榄油与水",
          "ku": "Rûnê zeytûnê-av"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Işık yolunun görünmesi (Tyndall etkisi) taneciklerin kolloit boyutunda (yaklaşık 1–1000 nm) olduğunu gösterir; kolloidal tanecikler süzgeç kâğıdından geçer ve bekletilince çökmez. Jelatinli su bir kolloittir. Şekerli su ve tuzlu su gerçek çözeltidir, ışığı saçmaz. Tebeşir tozu-su süspansiyondur, süzgeçte kalıntı bırakır ve çöker; zeytinyağı-su emülsiyondur, bekletilince iki tabakaya ayrılır.",
        "en": "A visible light path (Tyndall effect) shows that the particles are of colloidal size (about 1–1000 nm); colloidal particles pass through filter paper and do not settle on standing. Gelatine in water is a colloid. Sugar water and salt water are true solutions and do not scatter light. Chalk in water is a suspension that leaves residue on the filter and settles; olive oil–water is an emulsion that separates into two layers on standing.",
        "de": "Ein sichtbarer Lichtweg (Tyndall-Effekt) zeigt Teilchen kolloidaler Größe (etwa 1–1000 nm); sie passieren Filterpapier und setzen sich nicht ab. Gelatine in Wasser ist ein Kolloid. Zucker- und Salzwasser sind echte Lösungen und streuen kein Licht. Kreide in Wasser ist eine Suspension, hinterlässt Rückstand und setzt sich ab; Olivenöl-Wasser ist eine Emulsion, die sich beim Stehen in zwei Schichten trennt.",
        "fr": "Un trajet lumineux visible (effet Tyndall) indique des particules de taille colloïdale (environ 1–1000 nm) ; elles traversent le papier filtre et ne sédimentent pas. La gélatine dans l'eau est un colloïde. L'eau sucrée et l'eau salée sont de vraies solutions et ne diffusent pas la lumière. La craie dans l'eau est une suspension qui laisse un résidu et se dépose ; l'huile d'olive–eau est une émulsion qui se sépare en deux couches au repos.",
        "ru": "Видимый путь луча (эффект Тиндаля) говорит о частицах коллоидного размера (примерно 1–1000 нм); они проходят через фильтровальную бумагу и не оседают. Вода с желатином — коллоид. Вода с сахаром и вода с солью — истинные растворы и свет не рассеивают. Мел с водой — суспензия: оставляет осадок на фильтре и оседает; оливковое масло с водой — эмульсия, при стоянии расслаивается на два слоя.",
        "ar": "ظهور مسار الضوء (ظاهرة تندال) يدل على أن الدقائق بحجم غروي (نحو 1–1000 nm)، والدقائق الغروية تمر عبر ورق الترشيح ولا تترسب عند الترك. والجيلاتين في الماء غروي. أما الماء المحلّى والماء المالح فمحاليل حقيقية لا تشتت الضوء. والطباشير في الماء معلق يترك راسبًا ويترسب، وزيت الزيتون والماء مستحلب ينفصل إلى طبقتين عند الترك.",
        "zh": "能看到光路（丁达尔效应）说明粒子是胶体大小(约1–1000 nm)；胶体粒子能透过滤纸，静置也不沉降。明胶水溶液是胶体。糖水和盐水是真溶液，不散射光。粉笔灰与水是悬浊液，会在滤纸上留下残留物并沉降；橄榄油与水是乳浊液，静置后分成两层。",
        "ku": "Xuyabûna riya ronahiyê (bandora Tyndall) nîşan dide ku perçe bi mezinahiya kolloîdî ne (nêzîkî 1–1000 nm); perçeyên kolloîdî di kaxeza parzûnê re derbas dibin û naniştin. Jelatîn di avê de kolloîd e. Ava şekirî û ava şor çareseriyên rastîn in, ronahiyê belav nakin. Toza tebeşîrê-av suspansiyon e, bermayî dihêle û diniştin; rûnê zeytûnê-av emulsiyon e û dema tê hiştin dibe du qat."
      }
    },
    {
      "id": "u08-twin10",
      "stem": {
        "tr": "Aşağıdaki karışım – ayırma yöntemi eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following mixture – separation method pairs is wrong?",
        "de": "Welche der folgenden Zuordnungen Gemisch – Trennverfahren ist falsch?",
        "fr": "Laquelle des associations mélange – méthode de séparation suivantes est fausse ?",
        "ru": "Какое из следующих сочетаний «смесь – метод разделения» неверно?",
        "ar": "أيّ المزاوجات الآتية (خليط – طريقة فصل) خاطئة؟",
        "zh": "下列“混合物 – 分离方法”的对应中，哪一项是错误的？",
        "ku": "Ji van hevgirtinên tevlihevî – rêbaza veqetandinê yên jêrîn kîjan şaş e?"
      },
      "options": [
        {
          "tr": "Demir tozu-kükürt tozu – mıknatısla ayırma",
          "en": "Iron filings–sulfur powder – magnetic separation",
          "de": "Eisenpulver-Schwefelpulver – Magnetscheidung",
          "fr": "Limaille de fer–poudre de soufre – séparation magnétique",
          "ru": "Железный порошок–порошок серы – магнитная сепарация",
          "ar": "برادة الحديد-مسحوق الكبريت – الفصل المغناطيسي",
          "zh": "铁粉-硫粉 – 磁铁分离",
          "ku": "Toza hesin-toza kukurtê – veqetandina bi mexnatîsê"
        },
        {
          "tr": "Kum-su – süzme",
          "en": "Sand–water – filtration",
          "de": "Sand-Wasser – Filtration",
          "fr": "Sable–eau – filtration",
          "ru": "Песок–вода – фильтрование",
          "ar": "الرمل-الماء – الترشيح",
          "zh": "沙子-水 – 过滤",
          "ku": "Qûm-av – parzûnkirin"
        },
        {
          "tr": "Zeytinyağı-su – ayırma hunisi",
          "en": "Olive oil–water – separatory funnel",
          "de": "Olivenöl-Wasser – Scheidetrichter",
          "fr": "Huile d'olive–eau – ampoule à décanter",
          "ru": "Оливковое масло–вода – делительная воронка",
          "ar": "زيت الزيتون-الماء – قمع الفصل",
          "zh": "橄榄油-水 – 分液漏斗",
          "ku": "Rûnê zeytûnê-av – hunîya veqetandinê"
        },
        {
          "tr": "Talaş-kum – su ile yüzdürme",
          "en": "Sawdust–sand – flotation in water",
          "de": "Sägemehl-Sand – Flotation in Wasser",
          "fr": "Sciure–sable – flottation dans l'eau",
          "ru": "Опилки–песок – флотация в воде",
          "ar": "نشارة الخشب-الرمل – التعويم في الماء",
          "zh": "木屑-沙子 – 用水浮选",
          "ku": "Qirş-qûm – flotasyona bi avê"
        },
        {
          "tr": "Şekerli su – süzme",
          "en": "Sugar water – filtration",
          "de": "Zuckerwasser – Filtration",
          "fr": "Eau sucrée – filtration",
          "ru": "Раствор сахара в воде – фильтрование",
          "ar": "الماء المحلّى بالسكر – الترشيح",
          "zh": "糖水 – 过滤",
          "ku": "Ava şekirî – parzûnkirin"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Şekerli su homojen bir çözeltidir; şeker molekülleri süzgeç kâğıdının gözeneklerinden kolayca geçtiği için süzme ile ayrılamaz. Şeker, suyun buharlaştırılmasıyla (su da istenirse basit damıtmayla) elde edilir. Diğer eşleştirmeler doğrudur: demir mıknatısa çekilir, kum süzgeçte kalır, karışmayan zeytinyağı ve su ayırma hunisinde iki tabaka oluşturur, talaş suda yüzerken kum batar.",
        "en": "Sugar water is a homogeneous solution; sugar molecules pass easily through the pores of filter paper, so filtration cannot separate it. The sugar is recovered by evaporating the water (or by simple distillation if the water is wanted too). The other pairs are correct: iron is attracted by a magnet, sand stays on the filter, immiscible oil and water form two layers in the funnel, and sawdust floats on water while sand sinks.",
        "de": "Zuckerwasser ist eine homogene Lösung; Zuckermoleküle passieren die Poren des Filterpapiers leicht, daher lässt sie sich nicht filtrieren. Den Zucker gewinnt man durch Verdampfen des Wassers (oder einfache Destillation, wenn auch Wasser gewünscht ist). Die übrigen Zuordnungen stimmen: Eisen wird vom Magneten angezogen, Sand bleibt im Filter, nicht mischbares Öl und Wasser bilden im Trichter zwei Schichten, Sägemehl schwimmt auf Wasser, Sand sinkt.",
        "fr": "L'eau sucrée est une solution homogène ; les molécules de sucre traversent facilement les pores du papier filtre, la filtration ne peut donc pas la séparer. On récupère le sucre en évaporant l'eau (ou par distillation simple si l'on veut aussi l'eau). Les autres associations sont correctes : le fer est attiré par l'aimant, le sable reste sur le filtre, l'huile et l'eau non miscibles forment deux couches dans l'ampoule, la sciure flotte sur l'eau tandis que le sable coule.",
        "ru": "Раствор сахара в воде — однородная смесь; молекулы сахара легко проходят через поры фильтровальной бумаги, поэтому фильтрованием его не разделить. Сахар получают выпариванием воды (или простой перегонкой, если нужна и вода). Остальные сочетания верны: железо притягивается магнитом, песок остаётся на фильтре, несмешивающиеся масло и вода образуют в воронке два слоя, опилки плавают на воде, а песок тонет.",
        "ar": "الماء المحلّى بالسكر محلول متجانس؛ تمر جزيئات السكر بسهولة عبر مسام ورق الترشيح، فلا يمكن فصله بالترشيح. ويُحصل على السكر بتبخير الماء (أو بالتقطير البسيط إذا أُريد الماء أيضًا). أما المزاوجات الأخرى فصحيحة: ينجذب الحديد إلى المغناطيس، ويبقى الرمل على المرشح، ويكوّن الزيت والماء غير الممتزجين طبقتين في القمع، وتطفو النشارة على الماء بينما يغوص الرمل.",
        "zh": "糖水是均匀溶液；糖分子很容易透过滤纸的孔隙，所以不能用过滤分离。糖可以通过蒸发水得到（若也要得到水，则用简单蒸馏）。其余对应都正确：铁被磁铁吸引，沙子留在滤纸上，不互溶的油和水在分液漏斗中分成两层，木屑浮在水面而沙子下沉。",
        "ku": "Ava şekirî çareseriyek homojen e; molekulên şekir bi hêsanî di qulên kaxeza parzûnê re derbas dibin, ji ber vê yekê bi parzûnkirinê nayê veqetandin. Şekir bi hilmkirina avê (ger av jî bê xwestin bi distilasyona hêsan) tê bidestxistin. Hevgirtinên din rast in: hesin ber bi mexnatîsê ve tê kişandin, qûm li ser parzûnê dimîne, rûn û ava ku tevlî hev nabin di hunîyê de du qatan çêdikin, qirş li ser avê avjenî dike û qûm dadikeve."
      }
    },
    {
      "id": "u08-twin11",
      "stem": {
        "tr": "Çözünürlüğü sıcaklıkla büyük ölçüde artan KNO3 ile çözünürlüğü sıcaklıkla çok az değişen NaCl'den oluşan katı bir karışımdan saf KNO3 elde edilmek isteniyor. Karışım az miktarda sıcak suda çözülüyor, çözelti soğutuluyor ve oluşan kristaller süzülüyor.\nBu ayırmada kullanılan yöntem ve yararlanılan ayırt edici özellik aşağıdakilerden hangisinde birlikte doğru verilmiştir?",
        "en": "Pure KNO3 is to be obtained from a solid mixture of KNO3, whose solubility increases greatly with temperature, and NaCl, whose solubility changes very little with temperature. The mixture is dissolved in a small amount of hot water, the solution is cooled and the crystals formed are filtered off.\nIn which of the following are the method used and the distinguishing property exploited both given correctly?",
        "de": "Aus einem Feststoffgemisch aus KNO3, dessen Löslichkeit mit der Temperatur stark zunimmt, und NaCl, dessen Löslichkeit sich mit der Temperatur kaum ändert, soll reines KNO3 gewonnen werden. Das Gemisch wird in wenig heißem Wasser gelöst, die Lösung abgekühlt und die entstehenden Kristalle abfiltriert.\nIn welcher Antwort sind das Verfahren und die genutzte Stoffeigenschaft beide richtig angegeben?",
        "fr": "On veut obtenir du KNO3 pur à partir d'un mélange solide de KNO3, dont la solubilité augmente fortement avec la température, et de NaCl, dont la solubilité varie très peu avec la température. Le mélange est dissous dans un peu d'eau chaude, la solution est refroidie et les cristaux formés sont filtrés.\nDans quelle proposition la méthode utilisée et la propriété distinctive exploitée sont-elles toutes deux correctes ?",
        "ru": "Из твёрдой смеси KNO3, растворимость которого сильно растёт с температурой, и NaCl, растворимость которого почти не зависит от температуры, нужно получить чистый KNO3. Смесь растворяют в небольшом количестве горячей воды, раствор охлаждают, а образовавшиеся кристаллы отфильтровывают.\nВ каком ответе правильно указаны и метод, и использованное отличительное свойство?",
        "ar": "يُراد الحصول على KNO3 نقي من خليط صلب من KNO3 الذي تزداد ذائبيته كثيرًا بارتفاع درجة الحرارة وNaCl الذي تتغير ذائبيته قليلًا جدًا بتغير درجة الحرارة. يُذاب الخليط في كمية قليلة من الماء الساخن، ثم يُبرَّد المحلول وتُرشَّح البلورات المتكونة.\nفي أيّ مما يأتي ذُكرت الطريقة المستخدمة والخاصية المميزة المستفاد منها صحيحتين معًا؟",
        "zh": "要从KNO3（溶解度随温度升高而大幅增大）和NaCl（溶解度随温度变化很小）组成的固体混合物中得到纯KNO3。把混合物溶于少量热水，冷却溶液，再滤出析出的晶体。\n下列哪一项中所用的方法和所利用的区别性质都正确？",
        "ku": "Tê xwestin ku ji tevliheviyek hişk a KNO3 (helbûna wê bi germahiyê gelek zêde dibe) û NaCl (helbûna wê bi germahiyê pir kêm diguhere) KNO3 ya safî bê bidestxistin. Tevlihevî di hindik ava germ de tê helandin, çareserî tê sarkirin û krîstalên ku çêdibin tên parzûnkirin.\nDi kîjan ji van de rêbaza ku tê bikaranîn û taybetmendiya cudaker a ku jê sûd tê wergirtin herdu bi hev re rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "Ayırma hunisi – yoğunluk farkı",
          "en": "Separatory funnel – difference in density",
          "de": "Scheidetrichter – Dichteunterschied",
          "fr": "Ampoule à décanter – différence de masse volumique",
          "ru": "Делительная воронка – различие плотностей",
          "ar": "قمع الفصل – اختلاف الكثافة",
          "zh": "分液漏斗 – 密度差异",
          "ku": "Hunîya veqetandinê – cudahiya çiriyê"
        },
        {
          "tr": "Ayrımsal damıtma – kaynama noktası farkı",
          "en": "Fractional distillation – difference in boiling point",
          "de": "Fraktionierte Destillation – Siedepunktunterschied",
          "fr": "Distillation fractionnée – différence de température d'ébullition",
          "ru": "Фракционная перегонка – различие температур кипения",
          "ar": "التقطير التجزيئي – اختلاف درجة الغليان",
          "zh": "分馏 – 沸点差异",
          "ku": "Distilasyona perçeyî – cudahiya xala kelandinê"
        },
        {
          "tr": "Diyaliz – tanecik boyutu farkı",
          "en": "Dialysis – difference in particle size",
          "de": "Dialyse – Unterschied der Teilchengröße",
          "fr": "Dialyse – différence de taille des particules",
          "ru": "Диализ – различие размеров частиц",
          "ar": "الديلزة – اختلاف حجم الدقائق",
          "zh": "透析 – 粒子大小差异",
          "ku": "Diyaliz – cudahiya mezinahiya perçeyan"
        },
        {
          "tr": "Ayrımsal kristallendirme – çözünürlük farkı",
          "en": "Fractional crystallisation – difference in solubility",
          "de": "Fraktionierte Kristallisation – Löslichkeitsunterschied",
          "fr": "Cristallisation fractionnée – différence de solubilité",
          "ru": "Дробная кристаллизация – различие растворимости",
          "ar": "التبلور التجزيئي – اختلاف الذائبية",
          "zh": "分步结晶 – 溶解度差异",
          "ku": "Krîstalbûna perçeyî – cudahiya helbûnê"
        },
        {
          "tr": "Mıknatısla ayırma – manyetik özellik farkı",
          "en": "Magnetic separation – difference in magnetic properties",
          "de": "Magnetscheidung – Unterschied der magnetischen Eigenschaften",
          "fr": "Séparation magnétique – différence de propriétés magnétiques",
          "ru": "Магнитная сепарация – различие магнитных свойств",
          "ar": "الفصل المغناطيسي – اختلاف الخواص المغناطيسية",
          "zh": "磁选 – 磁性差异",
          "ku": "Veqetandina bi mexnatîsê – cudahiya taybetmendiya mexnatîsî"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Soğutulunca KNO3'ün çözünürlüğü çok azaldığından fazlası kristallenir; NaCl'nin çözünürlüğü pek değişmediği için çözeltide kalır. Böylece iki katı, sıcaklıkla değişen çözünürlükleri farkından yararlanılarak ayrımsal kristallendirme ile ayrılır. Karışımda sıvı-sıvı tabakalar, kaynama noktası farkıyla ayrılacak sıvılar, kolloidal tanecikler ya da manyetik madde bulunmadığından diğer yöntemler uygun değildir.",
        "en": "On cooling, the solubility of KNO3 drops sharply, so the excess crystallises, while NaCl, whose solubility hardly changes, stays in solution. The two solids are thus separated by fractional crystallisation, exploiting their different solubility changes with temperature. There are no liquid layers, no liquids to be separated by boiling point, no colloidal particles and no magnetic substance, so the other methods do not apply.",
        "de": "Beim Abkühlen sinkt die Löslichkeit von KNO3 stark, der Überschuss kristallisiert aus; NaCl, dessen Löslichkeit sich kaum ändert, bleibt gelöst. Die beiden Feststoffe werden also durch fraktionierte Kristallisation aufgrund ihrer unterschiedlichen Löslichkeit getrennt. Es gibt keine Flüssigkeitsschichten, keine nach Siedepunkt trennbaren Flüssigkeiten, keine Kolloidteilchen und keinen magnetischen Stoff, daher passen die anderen Verfahren nicht.",
        "fr": "Au refroidissement, la solubilité de KNO3 chute fortement et l'excès cristallise, tandis que NaCl, dont la solubilité varie peu, reste en solution. Les deux solides sont donc séparés par cristallisation fractionnée, grâce à leur différence de solubilité en fonction de la température. Il n'y a ni couches liquides, ni liquides séparables par ébullition, ni particules colloïdales, ni substance magnétique : les autres méthodes ne conviennent pas.",
        "ru": "При охлаждении растворимость KNO3 резко падает, и его избыток кристаллизуется, а NaCl, растворимость которого почти не меняется, остаётся в растворе. Таким образом, два твёрдых вещества разделяют дробной кристаллизацией, используя различие их растворимости. Жидких слоёв, жидкостей для разделения по температуре кипения, коллоидных частиц и магнитных веществ здесь нет, поэтому остальные методы не подходят.",
        "ar": "عند التبريد تقل ذائبية KNO3 كثيرًا فيتبلور الفائض منه، بينما يبقى NaCl الذي لا تتغير ذائبيته تقريبًا في المحلول. وهكذا يُفصل الصلبان بالتبلور التجزيئي اعتمادًا على اختلاف ذائبيتهما مع درجة الحرارة. ولا توجد في الخليط طبقات سائلة ولا سوائل تُفصل بدرجة الغليان ولا دقائق غروية ولا مادة مغناطيسية، لذا لا تصلح الطرق الأخرى.",
        "zh": "冷却时KNO3的溶解度大幅下降，多余部分结晶析出；NaCl的溶解度几乎不变，留在溶液中。因此利用两者溶解度随温度变化的差异，用分步结晶法分离这两种固体。混合物中没有分层的液体、没有可按沸点分离的液体、没有胶体粒子，也没有磁性物质，所以其他方法都不适用。",
        "ku": "Dema tê sarkirin helbûna KNO3 gelek kêm dibe û zêdeya wê krîstal dibe; NaCl ku helbûna wê hema naguhere di çareseriyê de dimîne. Bi vî awayî herdu madeyên hişk bi sûdwergirtina ji cudahiya helbûna wan bi krîstalbûna perçeyî tên veqetandin. Di tevliheviyê de ne qatên şil, ne şilên ku bi xala kelandinê bên veqetandin, ne perçeyên kolloîdî û ne jî madeya mexnatîsî hene; ji ber vê yekê rêbazên din ne guncan in."
      }
    },
    {
      "id": "u08-twin12",
      "stem": {
        "tr": "Aynı dış basınç altında bulunan aşağıdaki sıvılar ısıtılıyor:\nI. Saf su\nII. 1 kg suda 0,1 mol NaCl çözünmüş çözelti\nIII. 1 kg suda 0,1 mol glikoz (C6H12O6) çözünmüş çözelti\nBu sıvıların kaynamaya başlama sıcaklıklarının büyükten küçüğe doğru sıralanışı hangisidir?",
        "en": "The following liquids, all under the same external pressure, are heated:\nI. Pure water\nII. A solution of 0.1 mol NaCl dissolved in 1 kg of water\nIII. A solution of 0.1 mol glucose (C6H12O6) dissolved in 1 kg of water\nWhat is the order of the temperatures at which they start to boil, from highest to lowest?",
        "de": "Folgende Flüssigkeiten werden beim gleichen äußeren Druck erhitzt:\nI. Reines Wasser\nII. Lösung von 0,1 mol NaCl in 1 kg Wasser\nIII. Lösung von 0,1 mol Glucose (C6H12O6) in 1 kg Wasser\nWie lautet die Reihenfolge der Siedebeginn-Temperaturen vom höchsten zum niedrigsten Wert?",
        "fr": "On chauffe les liquides suivants, tous sous la même pression extérieure :\nI. Eau pure\nII. Solution de 0,1 mol de NaCl dans 1 kg d'eau\nIII. Solution de 0,1 mol de glucose (C6H12O6) dans 1 kg d'eau\nQuel est l'ordre des températures de début d'ébullition, de la plus élevée à la plus basse ?",
        "ru": "Следующие жидкости нагревают при одинаковом внешнем давлении:\nI. Чистая вода\nII. Раствор 0,1 моль NaCl в 1 кг воды\nIII. Раствор 0,1 моль глюкозы (C6H12O6) в 1 кг воды\nКаков порядок температур начала кипения от наибольшей к наименьшей?",
        "ar": "تُسخَّن السوائل الآتية وجميعها تحت الضغط الخارجي نفسه:\nI. ماء نقي\nII. محلول من 0.1 mol من NaCl مذاب في 1 kg من الماء\nIII. محلول من 0.1 mol من الغلوكوز (C6H12O6) مذاب في 1 kg من الماء\nما ترتيب درجات حرارة بدء غليانها من الأعلى إلى الأدنى؟",
        "zh": "在相同外压下加热下列液体：\nI. 纯水\nII. 1 kg水中溶解0.1 mol NaCl的溶液\nIII. 1 kg水中溶解0.1 mol葡萄糖(C6H12O6)的溶液\n它们开始沸腾的温度由高到低的顺序是哪一项？",
        "ku": "Ev şilên jêrîn di bin heman pestoya derve de tên germkirin:\nI. Ava safî\nII. Çareseriya ku 0,1 mol NaCl di 1 kg avê de helandiye\nIII. Çareseriya ku 0,1 mol glukoz (C6H12O6) di 1 kg avê de helandiye\nRêzkirina germahiyên destpêka kelandina van şilan ji mezin ber bi piçûk kîjan e?"
      },
      "options": [
        {
          "tr": "II > III > I",
          "en": "II > III > I",
          "de": "II > III > I",
          "fr": "II > III > I",
          "ru": "II > III > I",
          "ar": "II > III > I",
          "zh": "II > III > I",
          "ku": "II > III > I"
        },
        {
          "tr": "I > III > II",
          "en": "I > III > II",
          "de": "I > III > II",
          "fr": "I > III > II",
          "ru": "I > III > II",
          "ar": "I > III > II",
          "zh": "I > III > II",
          "ku": "I > III > II"
        },
        {
          "tr": "II = III > I",
          "en": "II = III > I",
          "de": "II = III > I",
          "fr": "II = III > I",
          "ru": "II = III > I",
          "ar": "II = III > I",
          "zh": "II = III > I",
          "ku": "II = III > I"
        },
        {
          "tr": "III > II > I",
          "en": "III > II > I",
          "de": "III > II > I",
          "fr": "III > II > I",
          "ru": "III > II > I",
          "ar": "III > II > I",
          "zh": "III > II > I",
          "ku": "III > II > I"
        },
        {
          "tr": "I > II > III",
          "en": "I > II > III",
          "de": "I > II > III",
          "fr": "I > II > III",
          "ru": "I > II > III",
          "ar": "I > II > III",
          "zh": "I > II > III",
          "ku": "I > II > III"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Uçucu olmayan bir madde çözündüğünde çözeltinin kaynamaya başlama sıcaklığı saf sudan yüksek olur ve artış çözünmüş tanecik derişimiyle orantılıdır. NaCl suda Na+ ve Cl- iyonlarına ayrışır: 0,1 mol NaCl → 0,2 mol tanecik. Glikoz molekül hâlinde çözünür: 0,1 mol tanecik. Bu nedenle sıralama II > III > I'dir. İki çözeltiyi eşit saymak, NaCl'nin iyonlaştığını gözden kaçırmaktır.",
        "en": "When a non-volatile substance dissolves, the solution starts to boil at a higher temperature than pure water, and the rise is proportional to the concentration of dissolved particles. NaCl dissociates into Na+ and Cl- ions: 0.1 mol NaCl → 0.2 mol particles. Glucose dissolves as molecules: 0.1 mol particles. Hence the order is II > III > I. Treating the two solutions as equal overlooks the ionisation of NaCl.",
        "de": "Löst sich ein nichtflüchtiger Stoff, beginnt die Lösung bei höherer Temperatur zu sieden als reines Wasser; die Erhöhung ist proportional zur Konzentration gelöster Teilchen. NaCl dissoziiert in Na+ und Cl-: 0,1 mol NaCl → 0,2 mol Teilchen. Glucose löst sich molekular: 0,1 mol Teilchen. Daher gilt II > III > I. Beide Lösungen gleichzusetzen übersieht die Dissoziation von NaCl.",
        "fr": "Lorsqu'une substance non volatile se dissout, la solution commence à bouillir à une température plus élevée que l'eau pure, et l'élévation est proportionnelle à la concentration en particules dissoutes. NaCl se dissocie en ions Na+ et Cl- : 0,1 mol de NaCl → 0,2 mol de particules. Le glucose se dissout sous forme de molécules : 0,1 mol de particules. L'ordre est donc II > III > I. Considérer les deux solutions comme égales revient à oublier la dissociation de NaCl.",
        "ru": "При растворении нелетучего вещества раствор начинает кипеть при более высокой температуре, чем чистая вода, причём повышение пропорционально концентрации растворённых частиц. NaCl диссоциирует на ионы Na+ и Cl-: 0,1 моль NaCl → 0,2 моль частиц. Глюкоза растворяется в виде молекул: 0,1 моль частиц. Поэтому порядок II > III > I. Считать оба раствора одинаковыми — значит упустить диссоциацию NaCl.",
        "ar": "عند ذوبان مادة غير متطايرة يبدأ المحلول بالغليان عند درجة أعلى من الماء النقي، ويتناسب الارتفاع مع تركيز الدقائق المذابة. يتفكك NaCl إلى أيونات Na+ وCl-: 0.1 mol من NaCl → 0.2 mol من الدقائق. أما الغلوكوز فيذوب على هيئة جزيئات: 0.1 mol من الدقائق. لذا يكون الترتيب II > III > I. واعتبار المحلولين متساويين إغفال لتفكك NaCl.",
        "zh": "非挥发性物质溶解后，溶液开始沸腾的温度高于纯水，升高的幅度与溶解粒子的浓度成正比。NaCl 电离为 Na+ 和 Cl- 离子：0.1 mol NaCl → 0.2 mol粒子。葡萄糖以分子形式溶解：0.1 mol粒子。因此顺序为 II > III > I。认为两种溶液相同，就是忽视了NaCl的电离。",
        "ku": "Dema madeyek ne-firok dihele, çareserî di germahiyek ji ava safî bilindtir de dest bi kelandinê dike û zêdebûn bi giranbûna perçeyên helbûyî re hevrêje ye. NaCl dibe îyonên Na+ û Cl-: 0,1 mol NaCl → 0,2 mol perçe. Glukoz wek molekul dihele: 0,1 mol perçe. Ji ber vê yekê rêz II > III > I ye. Wekhev hesibandina herdu çareseriyan îyonbûna NaCl ji bîr dike."
      }
    },
    {
      "id": "u08-twin13",
      "stem": {
        "tr": "Kışın buzlanmayı önlemek amacıyla karayollarına tuz serpilir. Bu uygulamanın temel nedeni aşağıdakilerden hangisidir?",
        "en": "In winter, salt is spread on roads to prevent icing. What is the main reason for this practice?",
        "de": "Im Winter wird Salz auf Straßen gestreut, um Glatteis zu verhindern. Was ist der Hauptgrund dafür?",
        "fr": "En hiver, on répand du sel sur les routes pour éviter le verglas. Quelle est la raison principale de cette pratique ?",
        "ru": "Зимой дороги посыпают солью, чтобы предотвратить обледенение. Какова основная причина этого?",
        "ar": "في الشتاء يُرش الملح على الطرق لمنع تكوّن الجليد. ما السبب الرئيس لهذا الإجراء؟",
        "zh": "冬天人们在公路上撒盐以防止结冰。这样做的主要原因是什么？",
        "ku": "Di zivistanê de ji bo pêşîgirtina qeşagirtinê xwê li ser rêyan tê reşandin. Sedema bingehîn a vê kirinê kîjan e?"
      },
      "options": [
        {
          "tr": "Tuzun buzla ısı açığa çıkaran bir kimyasal tepkime vermesi",
          "en": "Salt undergoes a heat-releasing chemical reaction with ice",
          "de": "Salz geht mit Eis eine wärmefreisetzende chemische Reaktion ein",
          "fr": "Le sel subit avec la glace une réaction chimique qui dégage de la chaleur",
          "ru": "Соль вступает со льдом в химическую реакцию с выделением тепла",
          "ar": "يتفاعل الملح مع الجليد تفاعلًا كيميائيًا يطلق حرارة",
          "zh": "盐与冰发生放热的化学反应",
          "ku": "Xwê bi qeşayê re reaksiyonek kîmyayî ya ku germê derdixe dide"
        },
        {
          "tr": "Tuzlu suyun donmaya başlama sıcaklığının saf sudan düşük olması",
          "en": "Salt water starts to freeze at a lower temperature than pure water",
          "de": "Salzwasser beginnt bei niedrigerer Temperatur zu gefrieren als reines Wasser",
          "fr": "L'eau salée commence à geler à une température plus basse que l'eau pure",
          "ru": "Солёная вода начинает замерзать при более низкой температуре, чем чистая",
          "ar": "يبدأ الماء المالح بالتجمد عند درجة أدنى من الماء النقي",
          "zh": "盐水开始凝固的温度比纯水低",
          "ku": "Ava şor di germahiyek ji ava safî nizmtir de dest bi qerisînê dike"
        },
        {
          "tr": "Tuzun suyun kaynama noktasını düşürmesi",
          "en": "Salt lowers the boiling point of water",
          "de": "Salz senkt den Siedepunkt des Wassers",
          "fr": "Le sel abaisse la température d'ébullition de l'eau",
          "ru": "Соль понижает температуру кипения воды",
          "ar": "يخفض الملح درجة غليان الماء",
          "zh": "盐降低水的沸点",
          "ku": "Xwê xala kelandina avê nizm dike"
        },
        {
          "tr": "Tuzun buzu sıvılaşmadan doğrudan buhara dönüştürmesi",
          "en": "Salt turns ice directly into vapour without melting",
          "de": "Salz verwandelt Eis ohne Schmelzen direkt in Dampf",
          "fr": "Le sel transforme la glace directement en vapeur sans fusion",
          "ru": "Соль превращает лёд прямо в пар, минуя плавление",
          "ar": "يحوّل الملح الجليد إلى بخار مباشرة دون أن ينصهر",
          "zh": "盐使冰不经熔化直接变成水蒸气",
          "ku": "Xwê qeşayê bêyî helînê rasterast dike hilm"
        },
        {
          "tr": "Tuzun buzun yoğunluğunu artırarak yol yüzeyinden uzaklaşmasını sağlaması",
          "en": "Salt increases the density of ice so that it moves away from the road surface",
          "de": "Salz erhöht die Dichte des Eises, sodass es sich von der Straßenoberfläche löst",
          "fr": "Le sel augmente la masse volumique de la glace, qui quitte alors la surface de la route",
          "ru": "Соль увеличивает плотность льда, и он уходит с поверхности дороги",
          "ar": "يزيد الملح كثافة الجليد فيبتعد عن سطح الطريق",
          "zh": "盐增大冰的密度，使冰离开路面",
          "ku": "Xwê çiriya qeşayê zêde dike û wê ji rûyê rê dûr dixe"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Tuz, buz yüzeyindeki ince su tabakasında çözünerek tuzlu su oluşturur. Çözünmüş tanecikler suyun donma noktasını düşürür; bu yüzden tuzlu su 0 °C'nin altındaki sıcaklıklarda da sıvı kalır ve buz erir. Bu bir kimyasal tepkime değil, çözeltinin fiziksel bir (koligatif) özelliğidir; ayrıca çözünen madde kaynama noktasını düşürmez, yükseltir.",
        "en": "Salt dissolves in the thin water film on the ice and forms salt water. Dissolved particles lower the freezing point of water, so salt water stays liquid even below 0 °C and the ice melts. This is not a chemical reaction but a physical (colligative) property of the solution; moreover, a dissolved substance raises the boiling point rather than lowering it.",
        "de": "Salz löst sich im dünnen Wasserfilm auf dem Eis und bildet Salzwasser. Gelöste Teilchen senken den Gefrierpunkt des Wassers, daher bleibt Salzwasser auch unter 0 °C flüssig und das Eis schmilzt. Das ist keine chemische Reaktion, sondern eine physikalische (kolligative) Eigenschaft der Lösung; außerdem erhöht ein gelöster Stoff den Siedepunkt, statt ihn zu senken.",
        "fr": "Le sel se dissout dans le mince film d'eau à la surface de la glace et forme de l'eau salée. Les particules dissoutes abaissent la température de congélation de l'eau : l'eau salée reste liquide même en dessous de 0 °C et la glace fond. Ce n'est pas une réaction chimique mais une propriété physique (colligative) de la solution ; de plus, un soluté élève la température d'ébullition au lieu de l'abaisser.",
        "ru": "Соль растворяется в тонкой плёнке воды на льду, образуя солёную воду. Растворённые частицы понижают температуру замерзания воды, поэтому солёная вода остаётся жидкой и ниже 0 °C, и лёд тает. Это не химическая реакция, а физическое (коллигативное) свойство раствора; кроме того, растворённое вещество повышает, а не понижает температуру кипения.",
        "ar": "يذوب الملح في الطبقة الرقيقة من الماء على سطح الجليد مكوّنًا ماءً مالحًا. والدقائق المذابة تخفض درجة تجمد الماء، فيبقى الماء المالح سائلًا حتى دون 0 °C وينصهر الجليد. وهذا ليس تفاعلًا كيميائيًا بل خاصية فيزيائية (تجميعية) للمحلول؛ كما أن المذاب يرفع درجة الغليان ولا يخفضها.",
        "zh": "盐溶解在冰面上的一层薄水中形成盐水。溶解的粒子使水的凝固点降低，所以盐水在0 °C以下仍保持液态，冰随之融化。这不是化学反应，而是溶液的物理（依数）性质；另外，溶质会使沸点升高而不是降低。",
        "ku": "Xwê di qata zirav a avê ya li ser qeşayê de dihele û ava şor çêdike. Perçeyên helbûyî xala qerisîna avê nizm dikin; ji ber vê yekê ava şor di bin 0 °C de jî şil dimîne û qeşa dihele. Ev ne reaksiyonek kîmyayî ye, taybetmendiyek fîzîkî (kolîgatîf) a çareseriyê ye; herwiha madeya helbûyî xala kelandinê nizm nake, bilind dike."
      }
    },
    {
      "id": "u08-twin14",
      "stem": {
        "tr": "Bir diş macununun etiketinde kütlece %0,15 florür içerdiği belirtilmektedir. Bu diş macunundaki florür derişimi kaç ppm'dir?",
        "en": "The label of a toothpaste states that it contains 0.15% fluoride by mass. What is the fluoride concentration of this toothpaste in ppm?",
        "de": "Auf dem Etikett einer Zahnpasta steht, dass sie 0,15 Massenprozent Fluorid enthält. Wie groß ist die Fluoridkonzentration in ppm?",
        "fr": "L'étiquette d'un dentifrice indique qu'il contient 0,15 % de fluorure en masse. Quelle est la concentration en fluorure de ce dentifrice en ppm ?",
        "ru": "На этикетке зубной пасты указано, что массовая доля фторида в ней равна 0,15 %. Какова концентрация фторида в этой пасте в ppm?",
        "ar": "يُذكر على ملصق معجون أسنان أنه يحتوي على 0.15% فلوريد بالكتلة. ما تركيز الفلوريد في هذا المعجون بوحدة ppm؟",
        "zh": "某牙膏标签上注明其含氟化物的质量分数为0.15%。这种牙膏中氟化物的浓度是多少ppm？",
        "ku": "Li ser etîketa melhema diranan hatiye nivîsandin ku ew %0,15 a girseyî florîd dihewîne. Giranbûna florîdê di vê melhemê de çend ppm e?"
      },
      "options": [
        {
          "tr": "0,15 ppm",
          "en": "0.15 ppm",
          "de": "0,15 ppm",
          "fr": "0,15 ppm",
          "ru": "0,15 ppm",
          "ar": "0.15 ppm",
          "zh": "0.15 ppm",
          "ku": "0,15 ppm"
        },
        {
          "tr": "1,5 ppm",
          "en": "1.5 ppm",
          "de": "1,5 ppm",
          "fr": "1,5 ppm",
          "ru": "1,5 ppm",
          "ar": "1.5 ppm",
          "zh": "1.5 ppm",
          "ku": "1,5 ppm"
        },
        {
          "tr": "15 ppm",
          "en": "15 ppm",
          "de": "15 ppm",
          "fr": "15 ppm",
          "ru": "15 ppm",
          "ar": "15 ppm",
          "zh": "15 ppm",
          "ku": "15 ppm"
        },
        {
          "tr": "150 ppm",
          "en": "150 ppm",
          "de": "150 ppm",
          "fr": "150 ppm",
          "ru": "150 ppm",
          "ar": "150 ppm",
          "zh": "150 ppm",
          "ku": "150 ppm"
        },
        {
          "tr": "1500 ppm",
          "en": "1500 ppm",
          "de": "1500 ppm",
          "fr": "1500 ppm",
          "ru": "1500 ppm",
          "ar": "1500 ppm",
          "zh": "1500 ppm",
          "ku": "1500 ppm"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Kütlece %0,15, 100 g macunda 0,15 g florür demektir. ppm = (çözünen kütlesi / toplam kütle) · 10^6 = (0,15 / 100) · 10^6 = 1500 ppm. Kısayol: 1 ppm = %0,0001 olduğundan yüzde değeri 10^4 ile çarpılır (0,15 · 10^4 = 1500). Çarpanı 100 ya da 1000 sanmak daha küçük, hatalı değerler verir.",
        "en": "0.15% by mass means 0.15 g of fluoride in 100 g of paste. ppm = (mass of solute / total mass) · 10^6 = (0.15 / 100) · 10^6 = 1500 ppm. Shortcut: since 1 ppm = 0.0001%, the percentage is multiplied by 10^4 (0.15 · 10^4 = 1500). Using 100 or 1000 as the factor gives smaller, wrong values.",
        "de": "0,15 Massenprozent bedeutet 0,15 g Fluorid in 100 g Paste. ppm = (Masse des Stoffes / Gesamtmasse) · 10^6 = (0,15 / 100) · 10^6 = 1500 ppm. Abkürzung: Da 1 ppm = 0,0001 %, multipliziert man den Prozentwert mit 10^4 (0,15 · 10^4 = 1500). Ein Faktor 100 oder 1000 liefert zu kleine, falsche Werte.",
        "fr": "0,15 % en masse signifie 0,15 g de fluorure pour 100 g de pâte. ppm = (masse de soluté / masse totale) · 10^6 = (0,15 / 100) · 10^6 = 1500 ppm. Raccourci : comme 1 ppm = 0,0001 %, on multiplie le pourcentage par 10^4 (0,15 · 10^4 = 1500). Prendre 100 ou 1000 comme facteur donne des valeurs trop petites et fausses.",
        "ru": "Массовая доля 0,15 % означает 0,15 г фторида в 100 г пасты. ppm = (масса вещества / общая масса) · 10^6 = (0,15 / 100) · 10^6 = 1500 ppm. Короче: так как 1 ppm = 0,0001 %, значение в процентах умножают на 10^4 (0,15 · 10^4 = 1500). Множитель 100 или 1000 даёт заниженные, неверные значения.",
        "ar": "0.15% بالكتلة تعني 0.15 g من الفلوريد في 100 g من المعجون. ppm = (كتلة المذاب / الكتلة الكلية) · 10^6 = (0.15 / 100) · 10^6 = 1500 ppm. طريقة مختصرة: بما أن 1 ppm = 0.0001%، تُضرب النسبة المئوية في 10^4 (0.15 · 10^4 = 1500). واعتبار المعامل 100 أو 1000 يعطي قيمًا أصغر وخاطئة.",
        "zh": "质量分数0.15%表示100 g牙膏中含0.15 g氟化物。ppm = (溶质质量 / 总质量) · 10^6 = (0.15 / 100) · 10^6 = 1500 ppm。简便方法：因为1 ppm = 0.0001%，把百分数乘以10^4即可(0.15 · 10^4 = 1500)。把乘数当作100或1000会得到偏小的错误数值。",
        "ku": "%0,15 a girseyî tê wateya 0,15 g florîd di 100 g melhemê de. ppm = (girseya helbûyî / girseya giştî) · 10^6 = (0,15 / 100) · 10^6 = 1500 ppm. Rêya kurt: ji ber ku 1 ppm = %0,0001 e, nirxa sedî bi 10^4 re tê lêdan (0,15 · 10^4 = 1500). Hesibandina lêkerê wek 100 an 1000 nirxên piçûktir û şaş dide."
      }
    },
    {
      "id": "u08-twin15",
      "stem": {
        "tr": "Aşağıdaki ayırma yöntemlerinden hangileri tanecik boyutu farkına dayanır?\nI. Diyaliz\nII. Ayrımsal damıtma\nIII. Santrifüjleme",
        "en": "Which of the following separation methods are based on a difference in particle size?\nI. Dialysis\nII. Fractional distillation\nIII. Centrifugation",
        "de": "Welche der folgenden Trennverfahren beruhen auf einem Unterschied der Teilchengröße?\nI. Dialyse\nII. Fraktionierte Destillation\nIII. Zentrifugieren",
        "fr": "Parmi les méthodes de séparation suivantes, lesquelles reposent sur une différence de taille des particules ?\nI. Dialyse\nII. Distillation fractionnée\nIII. Centrifugation",
        "ru": "Какие из следующих методов разделения основаны на различии размеров частиц?\nI. Диализ\nII. Фракционная перегонка\nIII. Центрифугирование",
        "ar": "أيّ طرق الفصل الآتية تعتمد على اختلاف حجم الدقائق؟\nI. الديلزة\nII. التقطير التجزيئي\nIII. الطرد المركزي",
        "zh": "下列分离方法中，哪些是依据粒子大小的差异？\nI. 透析\nII. 分馏\nIII. 离心",
        "ku": "Ji van rêbazên veqetandinê yên jêrîn kîjan li ser cudahiya mezinahiya perçeyan in?\nI. Diyaliz\nII. Distilasyona perçeyî\nIII. Santrîfujkirin"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "只有 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "只有 II",
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
        "tr": "Diyalizde küçük iyon ve moleküller yarı geçirgen zarın gözeneklerinden geçer, büyük kolloidal tanecikler geçemez; yani ayırma tanecik boyutuna dayanır. Ayrımsal damıtma bileşenlerin kaynama noktası farkına dayanır. Santrifüjlemede hızlı dönme, yoğunluğu büyük olan taneciklerin dibe daha çabuk çökmesini sağlar; temel ayırt edici özellik yoğunluk farkıdır.",
        "en": "In dialysis, small ions and molecules pass through the pores of a semipermeable membrane while large colloidal particles do not, so the separation is based on particle size. Fractional distillation is based on differences in boiling point. In centrifugation, fast spinning makes denser particles settle faster; the key property is the difference in density.",
        "de": "Bei der Dialyse passieren kleine Ionen und Moleküle die Poren einer semipermeablen Membran, große Kolloidteilchen nicht – die Trennung beruht also auf der Teilchengröße. Die fraktionierte Destillation beruht auf Siedepunktunterschieden. Beim Zentrifugieren setzen sich dichtere Teilchen durch schnelles Drehen schneller ab; entscheidend ist der Dichteunterschied.",
        "fr": "En dialyse, les petits ions et molécules traversent les pores d'une membrane semi-perméable alors que les grosses particules colloïdales ne passent pas : la séparation repose sur la taille. La distillation fractionnée repose sur la différence de température d'ébullition. En centrifugation, la rotation rapide fait sédimenter plus vite les particules les plus denses ; la propriété exploitée est la masse volumique.",
        "ru": "При диализе малые ионы и молекулы проходят через поры полупроницаемой мембраны, а крупные коллоидные частицы — нет, то есть разделение основано на размере частиц. Фракционная перегонка основана на различии температур кипения. При центрифугировании быстрое вращение ускоряет оседание более плотных частиц; ключевое свойство — различие плотностей.",
        "ar": "في الديلزة تمر الأيونات والجزيئات الصغيرة عبر مسام غشاء شبه منفذ ولا تمر الدقائق الغروية الكبيرة، فالفصل يعتمد على حجم الدقائق. أما التقطير التجزيئي فيعتمد على اختلاف درجات الغليان. وفي الطرد المركزي يؤدي الدوران السريع إلى ترسب الدقائق الأكبر كثافة أسرع، فالخاصية الأساسية هي اختلاف الكثافة.",
        "zh": "透析时，小离子和小分子能透过半透膜的孔隙，大的胶体粒子不能透过，所以分离依据的是粒子大小。分馏依据的是沸点差异。离心时，高速旋转使密度大的粒子更快沉降，关键性质是密度差异。",
        "ku": "Di diyalizê de îyon û molekulên piçûk di qulên perdeya nîv-derbasbar re derbas dibin, perçeyên kolloîdî yên mezin derbas nabin; yanî veqetandin li ser mezinahiya perçeyan e. Distilasyona perçeyî li ser cudahiya xala kelandinê ye. Di santrîfujkirinê de zivirîna bilez dike ku perçeyên bi çiriya mezintir zûtir binişin; taybetmendiya bingehîn cudahiya çiriyê ye."
      }
    },
    {
      "id": "u08-twin16",
      "stem": {
        "tr": "Kütlece %20'lik ve yoğunluğu 1,2 g/mL olan 500 mL NaOH çözeltisinde kaç gram NaOH çözünmüştür?",
        "en": "How many grams of NaOH are dissolved in 500 mL of an NaOH solution that is 20% by mass and has a density of 1.2 g/mL?",
        "de": "Wie viel Gramm NaOH sind in 500 mL einer NaOH-Lösung mit 20 Massenprozent und einer Dichte von 1,2 g/mL gelöst?",
        "fr": "Combien de grammes de NaOH sont dissous dans 500 mL d'une solution de NaOH à 20 % en masse, de masse volumique 1,2 g/mL ?",
        "ru": "Сколько граммов NaOH растворено в 500 мл раствора NaOH с массовой долей 20 % и плотностью 1,2 г/мл?",
        "ar": "كم غرامًا من NaOH مذاب في 500 mL من محلول NaOH تركيزه 20% بالكتلة وكثافته 1.2 g/mL؟",
        "zh": "500 mL质量分数为20%、密度为1.2 g/mL的NaOH溶液中溶有多少克NaOH？",
        "ku": "Di 500 mL çareseriya NaOH ya %20 a girseyî û bi çiriya 1,2 g/mL de çend gram NaOH helandî ye?"
      },
      "options": [
        {
          "tr": "83,3 g",
          "en": "83.3 g",
          "de": "83,3 g",
          "fr": "83,3 g",
          "ru": "83,3 г",
          "ar": "83.3 g",
          "zh": "83.3 g",
          "ku": "83,3 g"
        },
        {
          "tr": "100 g",
          "en": "100 g",
          "de": "100 g",
          "fr": "100 g",
          "ru": "100 г",
          "ar": "100 g",
          "zh": "100 g",
          "ku": "100 g"
        },
        {
          "tr": "120 g",
          "en": "120 g",
          "de": "120 g",
          "fr": "120 g",
          "ru": "120 г",
          "ar": "120 g",
          "zh": "120 g",
          "ku": "120 g"
        },
        {
          "tr": "480 g",
          "en": "480 g",
          "de": "480 g",
          "fr": "480 g",
          "ru": "480 г",
          "ar": "480 g",
          "zh": "480 g",
          "ku": "480 g"
        },
        {
          "tr": "600 g",
          "en": "600 g",
          "de": "600 g",
          "fr": "600 g",
          "ru": "600 г",
          "ar": "600 g",
          "zh": "600 g",
          "ku": "600 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Önce hacim kütleye çevrilir: çözelti kütlesi = yoğunluk · hacim = 1,2 · 500 = 600 g. NaOH kütlesi = 600 · 0,20 = 120 g. Yoğunluğu kullanmadan 500 · 0,20 = 100 g bulmak, hacmi yoğunluğa bölmek (500 / 1,2 · 0,20 ≈ 83,3 g) ya da su kütlesini (480 g) veya çözelti kütlesini (600 g) cevap sanmak tipik hatalardır.",
        "en": "First convert volume to mass: mass of solution = density · volume = 1.2 · 500 = 600 g. Mass of NaOH = 600 · 0.20 = 120 g. Ignoring the density (500 · 0.20 = 100 g), dividing the volume by the density (500 / 1.2 · 0.20 ≈ 83.3 g), or taking the water mass (480 g) or the solution mass (600 g) as the answer are typical errors.",
        "de": "Zuerst Volumen in Masse umrechnen: Masse der Lösung = Dichte · Volumen = 1,2 · 500 = 600 g. Masse NaOH = 600 · 0,20 = 120 g. Typische Fehler: Dichte ignorieren (500 · 0,20 = 100 g), Volumen durch die Dichte teilen (500 / 1,2 · 0,20 ≈ 83,3 g) oder die Wassermasse (480 g) bzw. Lösungsmasse (600 g) als Antwort nehmen.",
        "fr": "On convertit d'abord le volume en masse : masse de solution = masse volumique · volume = 1,2 · 500 = 600 g. Masse de NaOH = 600 · 0,20 = 120 g. Ignorer la masse volumique (500 · 0,20 = 100 g), diviser le volume par la masse volumique (500 / 1,2 · 0,20 ≈ 83,3 g) ou donner la masse d'eau (480 g) ou de solution (600 g) sont des erreurs classiques.",
        "ru": "Сначала переводят объём в массу: масса раствора = плотность · объём = 1,2 · 500 = 600 г. Масса NaOH = 600 · 0,20 = 120 г. Типичные ошибки: не учитывать плотность (500 · 0,20 = 100 г), делить объём на плотность (500 / 1,2 · 0,20 ≈ 83,3 г) или принимать за ответ массу воды (480 г) либо раствора (600 г).",
        "ar": "يُحوَّل الحجم أولًا إلى كتلة: كتلة المحلول = الكثافة · الحجم = 1.2 · 500 = 600 g. كتلة NaOH = 600 · 0.20 = 120 g. ومن الأخطاء الشائعة إهمال الكثافة (500 · 0.20 = 100 g)، أو قسمة الحجم على الكثافة (500 / 1.2 · 0.20 ≈ 83.3 g)، أو اعتبار كتلة الماء (480 g) أو كتلة المحلول (600 g) هي الجواب.",
        "zh": "先把体积换算成质量：溶液质量 = 密度 · 体积 = 1.2 · 500 = 600 g。NaOH质量 = 600 · 0.20 = 120 g。忽略密度(500 · 0.20 = 100 g)、用体积除以密度(500 / 1.2 · 0.20 ≈ 83.3 g)，或把水的质量(480 g)、溶液质量(600 g)当作答案，都是典型错误。",
        "ku": "Pêşî hecm tê guhertin bo girseyê: girseya çareseriyê = çirî · hecm = 1,2 · 500 = 600 g. Girseya NaOH = 600 · 0,20 = 120 g. Şaşiyên berbelav: çirî paşguh kirin (500 · 0,20 = 100 g), parvekirina hecmê li çiriyê (500 / 1,2 · 0,20 ≈ 83,3 g), an girseya avê (480 g) an girseya çareseriyê (600 g) wek bersiv hesibandin."
      }
    }
  ]
};

export default unit08;
