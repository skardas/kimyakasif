import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit07: ChemistryUnitSeedData = {
  "id": "u07",
  "order": 7,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Kimyasal Tepkimeler ve Hesaplamalar",
    "en": "Chemical Reactions & Stoichiometry",
    "de": "Chemische Reaktionen & Stöchiometrie",
    "fr": "Réactions Chimiques & Calculs",
    "ru": "Химические реакции и стехиометрия",
    "ar": "التفاعلات الكيميائية والحسابات",
    "zh": "化学反应与计算",
    "ku": "Reaksiyonên Kîmyewî û Hesab"
  },
  "subtitle": {
    "tr": "Tepkime Türleri, Artan Madde ve Verim Hesapları",
    "en": "Limiting Reagents, Yield & Net Ionic",
    "de": "Reaktionstypen, Reststoff- und Ausbeuteberechnungen",
    "fr": "Types de réactions, matières résiduelles et calculs de rendement",
    "ru": "Типы реакций, избыток и недостаток, расчёт выхода продукта",
    "ar": "أنواع التفاعلات وحسابات المادة الفائضة والمردود",
    "zh": "反应类型、过量计算与产率计算",
    "ku": "Cureyên Reaksiyonê, Reaktanta Zêde û Hesabên Berhemê"
  },
  "facts": [
    {
      "id": "u07-f01",
      "fact": {
        "tr": "Yanma tepkimeleri bir maddenin O2 ile tepkimesidir ve genellikle ekzotermiktir; N2 gazının O2 ile azot oksitleri oluşturduğu tepkime ise ısı alan (endotermik) bir tepkimedir.",
        "en": "Combustion reactions are reactions of a substance with O2 and are generally exothermic; however, the reaction of N2 gas with O2 forming nitrogen oxides absorbs heat (endothermic).",
        "de": "Verbrennungsreaktionen sind Reaktionen eines Stoffes mit O2 und meist exotherm; die Reaktion von N2-Gas mit O2 zu Stickstoffoxiden nimmt dagegen Wärme auf (endotherm).",
        "fr": "Les réactions de combustion sont des réactions d'une substance avec O2 et sont généralement exothermiques ; en revanche, la réaction du diazote N2 avec O2 donnant des oxydes d'azote absorbe de la chaleur (endothermique).",
        "ru": "Реакции горения — реакции веществ с O2; обычно они экзотермические, однако реакция N2 с O2 с образованием оксидов азота идёт с поглощением теплоты (эндотермическая).",
        "ar": "تفاعلات الاحتراق هي تفاعلات مادة مع O2 وتكون عادةً طاردة للحرارة؛ أما تفاعل غاز N2 مع O2 لتكوين أكاسيد النيتروجين فهو ماص للحرارة.",
        "zh": "燃烧反应是物质与 O2 的反应，通常是放热的；而 N2 与 O2 反应生成氮氧化物则是吸热反应。",
        "ku": "Reaksiyonên şewitînê reaksiyonên madeyekê bi O2 re ne û piranî ekzotermîk in; lê reaksiyona gaza N2 bi O2 re ya ku oksîtên nîtrojenê çêdike germê digire (endotermîk e)."
      },
      "trap": {
        "tr": "Bir maddenin O2 ile verdiği tepkimelerin tamamı dışarıya ısı verir; bunun hiçbir istisnası yoktur.",
        "en": "All reactions of substances with O2 release heat; there are no exceptions.",
        "de": "Alle Reaktionen von Stoffen mit O2 geben Wärme ab; es gibt keine Ausnahme.",
        "fr": "Toutes les réactions d'une substance avec O2 dégagent de la chaleur ; il n'y a aucune exception.",
        "ru": "Все реакции веществ с O2 идут с выделением теплоты; исключений нет.",
        "ar": "جميع تفاعلات المواد مع O2 تطلق حرارة، ولا يوجد أي استثناء.",
        "zh": "物质与 O2 的所有反应都放出热量，没有任何例外。",
        "ku": "Hemû reaksiyonên madeyan bi O2 re germê didin derdorê; tu îstîsna tune ye."
      },
      "whyTrapIsFalse": {
        "tr": "Bu yargı O2 ile her tepkimenin ısı verdiğini varsayıyor. Oysa N2 + O2 -> 2NO tepkimesi ısı alır; bu yüzden \"istisnasız ekzotermik\" genellemesi yanlıştır.",
        "en": "This statement assumes every reaction with O2 releases heat. But N2 + O2 -> 2NO absorbs heat, so the \"exothermic without exception\" generalisation is false.",
        "de": "Diese Aussage setzt voraus, dass jede Reaktion mit O2 Wärme abgibt. N2 + O2 -> 2NO nimmt jedoch Wärme auf, daher ist die Verallgemeinerung „ausnahmslos exotherm“ falsch.",
        "fr": "Cette affirmation suppose que toute réaction avec O2 dégage de la chaleur. Or N2 + O2 -> 2NO absorbe de la chaleur ; la généralisation « exothermique sans exception » est donc fausse.",
        "ru": "Это утверждение предполагает, что любая реакция с O2 выделяет теплоту. Но реакция N2 + O2 -> 2NO идёт с поглощением теплоты, поэтому обобщение «без исключений экзотермична» неверно.",
        "ar": "تفترض هذه العبارة أن كل تفاعل مع O2 يطلق حرارة، لكن التفاعل N2 + O2 -> 2NO يمتص الحرارة، لذا فالتعميم «طارد للحرارة دون استثناء» خاطئ.",
        "zh": "该说法假定与 O2 的每个反应都放热，但 N2 + O2 -> 2NO 吸收热量，因此“无一例外都放热”的概括是错误的。",
        "ku": "Ev gotin wisa dihesibîne ku her reaksiyona bi O2 re germê dide. Lê N2 + O2 -> 2NO germê digire; ji ber vê yekê gelemperîkirina \"bê îstîsna ekzotermîk\" şaş e."
      },
      "osymTip": {
        "tr": "N2 + O2 -> 2NO tepkimesi ısı alır; sorularda \"O2 ile her tepkime ısı verir\" genellemesi bu örnekle çürütülür.",
        "en": "N2 + O2 -> 2NO absorbs heat; questions use this example to refute the generalisation \"every reaction with O2 releases heat\".",
        "de": "N2 + O2 -> 2NO nimmt Wärme auf; in Aufgaben widerlegt dieses Beispiel die Verallgemeinerung „jede Reaktion mit O2 gibt Wärme ab“.",
        "fr": "N2 + O2 -> 2NO absorbe de la chaleur ; les questions utilisent cet exemple pour réfuter la généralisation « toute réaction avec O2 dégage de la chaleur ».",
        "ru": "Реакция N2 + O2 -> 2NO идёт с поглощением теплоты; в задачах этим примером опровергают обобщение «любая реакция с O2 выделяет теплоту».",
        "ar": "التفاعل N2 + O2 -> 2NO ماص للحرارة؛ وتُستخدم هذه الحالة في الأسئلة لدحض التعميم «كل تفاعل مع O2 يطلق حرارة».",
        "zh": "N2 + O2 -> 2NO 吸收热量；题目常用此例否定“与 O2 的反应都放热”这一概括。",
        "ku": "N2 + O2 -> 2NO germê digire; di pirsan de gelemperîkirina \"her reaksiyona bi O2 re germê dide\" bi vê mînakê tê redkirin."
      }
    },
    {
      "id": "u07-f02",
      "fact": {
        "tr": "Asit-baz nötralleşme tepkimelerinde asitten gelen H+ ile bazdan gelen OH- birleşerek su (H2O) oluşturur.",
        "en": "In acid-base neutralization reactions, H+ from the acid and OH- from the base combine to form water (H2O).",
        "de": "Bei Säure-Base-Neutralisationsreaktionen verbinden sich H+ aus der Säure und OH- aus der Base zu Wasser (H2O).",
        "fr": "Dans les réactions de neutralisation acide-base, H+ de l’acide et OH- de la base se combinent pour former de l’eau (H2O).",
        "ru": "В реакциях кислотно-основной нейтрализации H+ кислоты и OH- основания соединяются с образованием воды (H2O).",
        "ar": "في تفاعلات التعادل بين الحمض والقاعدة يتحد H+ من الحمض مع OH- من القاعدة لتكوين الماء (H2O).",
        "zh": "在酸碱中和反应中，酸中的 H+ 和碱中的 OH- 结合生成水(H2O)。",
        "ku": "Di reaksiyonên neutralîzasyonê yên asîd-bazê de H+ ya ji asîdê û OH- ya ji bazê dibin yek û av (H2O) çêdibe."
      },
      "trap": {
        "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
        "en": "In all acid-base reactions, salt and water are formed together.",
        "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
        "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
        "ru": "Во всех кислотно-основных реакциях обязательно образуются и соль, и вода.",
        "ar": "في جميع تفاعلات الحمض مع القاعدة يتكون الملح والماء معًا حتمًا.",
        "zh": "所有酸碱反应都一定同时生成盐和水。",
        "ku": "Di hemû reaksiyonên asîd-bazê de bê guman xwê û av bi hev re çêdibin."
      },
      "whyTrapIsFalse": {
        "tr": "Nötralleşmede ortak olan H+ ile OH- birleşmesidir; ancak OH- içermeyen NH3 gibi bazlarla (NH3 + HCl -> NH4Cl) su oluşmadan yalnızca tuz oluşur. Bu yüzden \"mutlaka su da oluşur\" demek yanlıştır.",
        "en": "What neutralisations share is H+ combining with OH-; but with bases that contain no OH-, such as NH3 (NH3 + HCl -> NH4Cl), only a salt forms and no water. So \"water always forms too\" is false.",
        "de": "Gemeinsam ist Neutralisationen die Vereinigung von H+ mit OH-; mit Basen ohne OH- wie NH3 (NH3 + HCl -> NH4Cl) entsteht jedoch nur ein Salz und kein Wasser. „Es entsteht immer auch Wasser“ ist daher falsch.",
        "fr": "Ce que les neutralisations ont en commun, c'est l'union de H+ et OH- ; mais avec des bases sans OH- comme NH3 (NH3 + HCl -> NH4Cl), il ne se forme qu'un sel, sans eau. Dire « il se forme toujours de l'eau » est donc faux.",
        "ru": "Общее у реакций нейтрализации — соединение H+ с OH-; но с основаниями без OH-, например NH3 (NH3 + HCl -> NH4Cl), образуется только соль, без воды. Поэтому «всегда образуется и вода» — неверно.",
        "ar": "القاسم المشترك في التعادل هو اتحاد H+ مع OH-، لكن مع قواعد لا تحتوي OH- مثل NH3 (NH3 + HCl -> NH4Cl) يتكون ملح فقط دون ماء، لذا فعبارة «يتكون الماء دائمًا» خاطئة.",
        "zh": "中和反应的共同点是 H+ 与 OH- 结合；但与不含 OH- 的碱如 NH3 反应(NH3 + HCl -> NH4Cl)时只生成盐而不生成水，所以“一定也生成水”是错误的。",
        "ku": "Tiştê hevpar ê neutralîzasyonê yekbûna H+ û OH- ye; lê bi bazên ku OH- nahewînin, wek NH3 (NH3 + HCl -> NH4Cl), tenê xwê çêdibe û av çênabe. Ji ber vê yekê gotina \"her tim av jî çêdibe\" şaş e."
      },
      "osymTip": {
        "tr": "OH- içermeyen NH3 bazı ile tepkimede yalnızca tuz oluşur, su oluşmaz!",
        "en": "In the reaction with NH3, a base that contains no OH-, only a salt forms; no water is produced!",
        "de": "Bei der Reaktion mit NH3, einer Base ohne OH-, entsteht nur ein Salz und kein Wasser!",
        "fr": "Avec NH3, une base qui ne contient pas de OH-, il ne se forme qu'un sel, pas d'eau !",
        "ru": "В реакции с NH3 — основанием, не содержащим OH-, — образуется только соль, вода не образуется!",
        "ar": "في التفاعل مع NH3، وهي قاعدة لا تحتوي على OH-، يتكون ملح فقط ولا يتكون ماء!",
        "zh": "与不含 OH- 的碱 NH3 反应时，只生成盐，不生成水！",
        "ku": "Di reaksiyona bi baza NH3 re, ku OH- nahewîne, tenê xwê çêdibe, av çênabe!"
      }
    },
    {
      "id": "u07-f03",
      "fact": {
        "tr": "Sentez (oluşum) tepkimesinde iki veya daha fazla madde birleşerek tek bir bileşik meydana getirir.",
        "en": "In a synthesis reaction, two or more substances combine to form a single compound.",
        "de": "Bei einer Synthesereaktion verbinden sich zwei oder mehr Stoffe zu einer einzigen Verbindung.",
        "fr": "Dans une réaction de synthèse, deux ou plusieurs substances se combinent pour former un seul composé.",
        "ru": "В реакции соединения (синтеза) два или более веществ соединяются в одно сложное вещество.",
        "ar": "في تفاعل الاتحاد (التكوين) تتحد مادتان أو أكثر لتكوين مركب واحد.",
        "zh": "在化合（合成）反应中，两种或两种以上物质结合生成一种化合物。",
        "ku": "Di reaksiyona sentezê (çêbûnê) de du an bêtir made dibin yek û pêkhateyek tenê çêdikin."
      },
      "trap": {
        "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
        "en": "The breaking down of a single compound into smaller substances is a synthesis reaction.",
        "de": "Die Zerlegung einer einzelnen Verbindung in kleinere Stoffe ist eine Synthesereaktion.",
        "fr": "La décomposition d'un seul composé en substances plus petites est une réaction de synthèse.",
        "ru": "Распад одного соединения на более простые вещества — это реакция соединения (синтеза).",
        "ar": "تفكك مركب واحد إلى مواد أصغر هو تفاعل اتحاد.",
        "zh": "一种化合物分解成几种较简单的物质属于化合（合成）反应。",
        "ku": "Perçebûna pêkhateyekê bo madeyên piçûktir reaksiyona sentezê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Burada anlatılan bir bileşiğin parçalanmasıdır; bu analiz (ayrışma) tepkimesidir. Sentezde ise maddeler birleşerek tek bir bileşik oluşturur, yani yön tam tersidir.",
        "en": "What is described here is the breaking down of a compound, which is an analysis (decomposition) reaction. In synthesis, substances combine to form a single compound — the opposite direction.",
        "de": "Beschrieben wird hier die Zerlegung einer Verbindung, also eine Analyse (Zersetzung). Bei der Synthese vereinigen sich Stoffe zu einer einzigen Verbindung – genau die umgekehrte Richtung.",
        "fr": "Ce qui est décrit est la décomposition d'un composé, c'est-à-dire une réaction d'analyse. Dans la synthèse, les substances s'unissent pour former un seul composé : c'est le sens inverse.",
        "ru": "Здесь описан распад соединения — это реакция разложения. В реакции соединения вещества, наоборот, объединяются в одно сложное вещество.",
        "ar": "ما وُصف هنا هو تفكك مركب، وهذا تفاعل تفكك (تحليل). أما في تفاعل الاتحاد فتتحد المواد لتكوين مركب واحد، أي في الاتجاه المعاكس تمامًا.",
        "zh": "这里描述的是一种化合物的分解，属于分解反应；化合（合成）反应则是几种物质结合成一种化合物，方向正好相反。",
        "ku": "Li vir perçebûna pêkhateyekê tê vegotin; ev reaksiyona analîzê (perçebûnê) ye. Di sentezê de made dibin yek û pêkhateyek tenê çêdikin, ango rêya wê tam berevajî ye."
      }
    },
    {
      "id": "u07-f04",
      "fact": {
        "tr": "Analiz (ayrışma) tepkimesinde bir bileşik ısı veya elektrik enerjisiyle daha basit maddelere ayrışır.",
        "en": "In an analysis (decomposition) reaction, a compound is broken down into simpler substances by heat or electrical energy.",
        "de": "Bei einer Analysereaktion (Zersetzung) wird eine Verbindung durch Wärme oder elektrische Energie in einfachere Stoffe zerlegt.",
        "fr": "Lors d'une réaction d'analyse (décomposition), un composé est décomposé en substances plus simples par la chaleur ou l'énergie électrique.",
        "ru": "В реакции разложения сложное вещество под действием теплоты или электрического тока распадается на более простые вещества.",
        "ar": "في تفاعل التفكك (التحليل) يتفكك المركب إلى مواد أبسط بالحرارة أو بالطاقة الكهربائية.",
        "zh": "在分解反应中，化合物在加热或通电的条件下分解成更简单的物质。",
        "ku": "Di reaksiyona analîzê (perçebûnê) de pêkhateyek bi germ an enerjiya elektrîkê dibe madeyên hêsantir."
      },
      "trap": {
        "tr": "Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.",
        "en": "Analysis reactions always occur spontaneously and exothermically.",
        "de": "Analysereaktionen laufen immer spontan und exotherm ab.",
        "fr": "Les réactions d'analyse se produisent toujours de manière spontanée et exothermique.",
        "ru": "Реакции разложения всегда протекают самопроизвольно и с выделением теплоты.",
        "ar": "تحدث تفاعلات التفكك دائمًا تلقائيًا وتكون طاردة للحرارة.",
        "zh": "分解反应总是自发进行并且放热。",
        "ku": "Reaksiyonên analîzê her tim xweber û ekzotermîk pêk tên."
      },
      "whyTrapIsFalse": {
        "tr": "Analiz tepkimelerinin çoğu dışarıdan ısı veya elektrik enerjisi verilmeden yürümez, yani genellikle endotermiktir. Örneğin suyun elektrolizi ve CaCO3'ün ayrışması kendiliğinden gerçekleşmez.",
        "en": "Most analysis reactions do not proceed unless heat or electrical energy is supplied, so they are usually endothermic. For example, electrolysis of water and decomposition of CaCO3 do not happen spontaneously.",
        "de": "Die meisten Zersetzungsreaktionen laufen nur ab, wenn Wärme oder elektrische Energie zugeführt wird; sie sind also meist endotherm. Die Elektrolyse von Wasser und die Zersetzung von CaCO3 laufen z. B. nicht von selbst ab.",
        "fr": "La plupart des réactions de décomposition n'ont lieu que si l'on fournit de la chaleur ou de l'énergie électrique ; elles sont donc généralement endothermiques. Par exemple, l'électrolyse de l'eau et la décomposition de CaCO3 ne sont pas spontanées.",
        "ru": "Большинство реакций разложения не идут без подвода теплоты или электрической энергии, то есть обычно они эндотермические. Например, электролиз воды и разложение CaCO3 не происходят самопроизвольно.",
        "ar": "معظم تفاعلات التفكك لا تحدث دون تزويدها بالحرارة أو الطاقة الكهربائية، لذا فهي عادةً ماصة للحرارة؛ فمثلًا التحليل الكهربائي للماء وتفكك CaCO3 لا يحدثان تلقائيًا.",
        "zh": "大多数分解反应需要外界提供热能或电能才能进行，通常是吸热的。例如水的电解和 CaCO3 的分解都不会自发进行。",
        "ku": "Piraniya reaksiyonên analîzê heta ku ji derve germ an enerjiya elektrîkê neyê dayîn pêk nayên, ango piranî endotermîk in. Wek mînak, elektrolîza avê û perçebûna CaCO3 xweber pêk nayên."
      }
    },
    {
      "id": "u07-f05",
      "fact": {
        "tr": "Çözünme-çökelme tepkimesinde iki sulu çözelti karıştırıldığında suda az çözünen katı bir çökelti oluşur.",
        "en": "In a dissolution-precipitation reaction, when two aqueous solutions are mixed, a solid precipitate that is slightly soluble in water is formed.",
        "de": "Bei einer Lösungs-Fällungs-Reaktion entsteht beim Mischen zweier wässriger Lösungen ein fester Niederschlag, der in Wasser schwer löslich ist.",
        "fr": "Dans une réaction de dissolution-précipitation, lorsque deux solutions aqueuses sont mélangées, il se forme un précipité solide peu soluble dans l'eau.",
        "ru": "В реакции осаждения при смешивании двух водных растворов образуется твёрдый малорастворимый осадок.",
        "ar": "في تفاعل الترسيب، عند خلط محلولين مائيين يتكون راسب صلب قليل الذوبان في الماء.",
        "zh": "在沉淀反应中，两种水溶液混合时生成难溶于水的固体沉淀。",
        "ku": "Di reaksiyona helbûn-niştinê de, dema du çareseriyên avî tên tevlihevkirin, niştekeke hişk a ku di avê de kêm dihele çêdibe."
      },
      "trap": {
        "tr": "Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.",
        "en": "The precipitate formed in the dissolution-precipitation reaction consists of spectator ions.",
        "de": "Der bei der Lösungs-Fällungs-Reaktion gebildete Niederschlag besteht aus Zuschauerionen.",
        "fr": "Le précipité formé lors de la réaction de dissolution-précipitation est constitué d'ions spectateurs.",
        "ru": "Осадок в реакции осаждения образуют ионы-наблюдатели.",
        "ar": "في تفاعل الترسيب يتكون الراسب من الأيونات المتفرجة.",
        "zh": "沉淀反应中生成的沉淀由旁观离子组成。",
        "ku": "Nişteka ku di reaksiyona helbûn-niştinê de çêdibe ji îyonên temaşevan pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Seyirci iyonlar tepkimeye katılmayıp çözeltide değişmeden kalan iyonlardır. Çökelti, birbiriyle suda az çözünen bileşik oluşturan iyonlardan (örneğin Ag+ ve Cl-) meydana gelir.",
        "en": "Spectator ions are the ions that take no part in the reaction and stay unchanged in solution. The precipitate is formed by the ions that together make a sparingly soluble compound (e.g. Ag+ and Cl-).",
        "de": "Zuschauerionen nehmen nicht an der Reaktion teil und bleiben unverändert in Lösung. Der Niederschlag entsteht aus den Ionen, die miteinander eine schwer lösliche Verbindung bilden (z. B. Ag+ und Cl-).",
        "fr": "Les ions spectateurs ne participent pas à la réaction et restent inchangés en solution. Le précipité est formé par les ions qui donnent ensemble un composé peu soluble (par ex. Ag+ et Cl-).",
        "ru": "Ионы-наблюдатели не участвуют в реакции и остаются в растворе без изменений. Осадок образуют ионы, дающие вместе малорастворимое соединение (например, Ag+ и Cl-).",
        "ar": "الأيونات المتفرجة لا تشارك في التفاعل وتبقى في المحلول دون تغيير، أما الراسب فيتكون من الأيونات التي تكوّن معًا مركبًا قليل الذوبان (مثل Ag+ وCl-).",
        "zh": "旁观离子不参与反应，在溶液中保持不变；沉淀是由能结合成难溶化合物的离子(如 Ag+ 和 Cl-)形成的。",
        "ku": "Îyonên temaşevan beşdarî reaksiyonê nabin û di çareseriyê de bê guhertin dimînin. Niştek ji wan îyonan çêdibe ku bi hev re pêkhateyeke di avê de kêm helbar çêdikin (mînak Ag+ û Cl-)."
      }
    },
    {
      "id": "u07-f06",
      "fact": {
        "tr": "Çözünme-çökelme tepkimesinde net iyon denklemi katı çökeltiyi oluşturan iyonlara göre yazılır.",
        "en": "In a dissolution-precipitation reaction, the net ionic equation is written with the ions that form the solid precipitate.",
        "de": "Bei der Lösungs-Fällungs-Reaktion wird die Nettoionengleichung mit den Ionen geschrieben, die den festen Niederschlag bilden.",
        "fr": "Dans une réaction de dissolution-précipitation, l'équation ionique nette s'écrit à partir des ions qui forment le précipité solide.",
        "ru": "Для реакции осаждения сокращённое ионное уравнение составляют по ионам, образующим твёрдый осадок.",
        "ar": "في تفاعل الترسيب تُكتب المعادلة الأيونية الصافية بالأيونات التي تكوّن الراسب الصلب.",
        "zh": "在沉淀反应中，净离子方程式按照生成固体沉淀的离子来书写。",
        "ku": "Di reaksiyona helbûn-niştinê de hevkêşeya îyonî ya net li gorî îyonên ku nişteka hişk çêdikin tê nivîsandin."
      },
      "trap": {
        "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
        "en": "The net ionic equation is written with the spectator ions that remain in the solution.",
        "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
        "fr": "L'équation ionique nette s'écrit à partir des ions spectateurs qui restent dans la solution.",
        "ru": "Сокращённое ионное уравнение составляют по ионам-наблюдателям, остающимся в растворе.",
        "ar": "تُكتب المعادلة الأيونية الصافية بالأيونات المتفرجة المتبقية في المحلول.",
        "zh": "净离子方程式按照留在溶液中的旁观离子来书写。",
        "ku": "Hevkêşeya îyonî ya net li gorî îyonên temaşevan ên ku di çareseriyê de dimînin tê nivîsandin."
      },
      "whyTrapIsFalse": {
        "tr": "Seyirci iyonlar değişime uğramadığı için iki tarafta da aynen yer alır ve net iyon denkleminden çıkarılır. Net denklem yalnızca çökeltiyi oluşturan iyonları gösterir.",
        "en": "Because spectator ions do not change, they appear identically on both sides and are cancelled out of the net ionic equation. The net equation shows only the ions that form the precipitate.",
        "de": "Da sich Zuschauerionen nicht verändern, stehen sie auf beiden Seiten gleich und werden aus der Netto-Ionengleichung gestrichen. Die Nettogleichung zeigt nur die Ionen, die den Niederschlag bilden.",
        "fr": "Comme les ions spectateurs ne changent pas, ils figurent à l'identique des deux côtés et sont éliminés de l'équation ionique nette. Celle-ci ne montre que les ions qui forment le précipité.",
        "ru": "Поскольку ионы-наблюдатели не изменяются, они одинаково стоят в обеих частях и сокращаются в сокращённом ионном уравнении. Оно показывает только ионы, образующие осадок.",
        "ar": "لأن الأيونات المتفرجة لا تتغير فإنها تظهر في الطرفين بالشكل نفسه وتُحذف من المعادلة الأيونية الصافية، التي لا تُظهر إلا الأيونات المكونة للراسب.",
        "zh": "旁观离子没有发生变化，在方程式两边同样出现，因此在净离子方程式中被消去；净离子方程式只表示生成沉淀的离子。",
        "ku": "Ji ber ku îyonên temaşevan naguherin, li her du aliyan wek xwe cih digirin û ji hevkêşeya îyonî ya net tên derxistin. Hevkêşeya net tenê îyonên ku niştekê çêdikin nîşan dide."
      }
    },
    {
      "id": "u07-f07",
      "fact": {
        "tr": "Sınırlayıcı bileşen, tepkimede ilk tükenen ve oluşan ürün miktarını belirleyen reaktiftir.",
        "en": "The limiting reactant is the reactant that is used up first in the reaction and determines the amount of product formed.",
        "de": "Der limitierende Reaktant ist das Edukt, das bei der Reaktion zuerst verbraucht wird und die Menge des gebildeten Produkts bestimmt.",
        "fr": "Le réactif limitant est le réactif qui est consommé en premier dans la réaction et qui détermine la quantité de produit formé.",
        "ru": "Лимитирующий реагент (вещество в недостатке) расходуется в реакции первым и определяет количество образующегося продукта.",
        "ar": "المادة المحددة هي المادة المتفاعلة التي تُستهلك أولًا في التفاعل وتحدد كمية الناتج المتكوّن.",
        "zh": "限量反应物是反应中最先消耗完并决定生成产物的量的反应物。",
        "ku": "Reaktanta sînordar ew reaktant e ku di reaksiyonê de pêşî diqede û mîqdara hilbera ku çêdibe diyar dike."
      },
      "trap": {
        "tr": "Sınırlayıcı bileşen kütlesi en az olan maddedir.",
        "en": "The limiting reactant is the substance with the smallest mass.",
        "de": "Der limitierende Reaktant ist der Stoff mit der geringsten Masse.",
        "fr": "Le réactif limitant est la substance ayant la plus petite masse.",
        "ru": "Лимитирующий реагент — это вещество с наименьшей массой.",
        "ar": "المادة المحددة هي المادة ذات الكتلة الأقل.",
        "zh": "限量反应物是质量最小的物质。",
        "ku": "Reaktanta sînordar ew made ye ku girseya wê herî kêm e."
      },
      "whyTrapIsFalse": {
        "tr": "Sınırlayıcılığı kütle değil, mol sayısının katsayıya oranı belirler. Kütlesi az olan madde, mol kütlesi küçükse daha çok mol içerebilir ve tepkimede artabilir.",
        "en": "Limiting status is decided not by mass but by the ratio of moles to coefficient. A substance with a smaller mass may contain more moles if its molar mass is small, and may even be left over.",
        "de": "Nicht die Masse, sondern das Verhältnis Stoffmenge/Koeffizient entscheidet über den limitierenden Reaktanten. Ein Stoff mit kleinerer Masse kann bei kleiner molarer Masse mehr Mol enthalten und sogar übrig bleiben.",
        "fr": "Ce n'est pas la masse mais le rapport quantité de matière/coefficient qui détermine le réactif limitant. Une substance de plus petite masse peut contenir plus de moles si sa masse molaire est faible, et même être en excès.",
        "ru": "Лимитирующий реагент определяется не массой, а отношением количества вещества к коэффициенту. Вещество меньшей массы при малой молярной массе может содержать больше моль и даже остаться в избытке.",
        "ar": "لا تحدد الكتلة المادة المحددة، بل نسبة عدد المولات إلى المعامل؛ فالمادة الأقل كتلة قد تحتوي مولات أكثر إذا كانت كتلتها المولية صغيرة، وقد يتبقى منها جزء بعد التفاعل.",
        "zh": "决定限量反应物的不是质量，而是物质的量与系数之比。质量小的物质若摩尔质量也小，其物质的量反而可能更大，在反应中甚至有剩余。",
        "ku": "Sînordarbûnê ne girse, rêjeya hejmara molan bi hevberê diyar dike. Madeyeke bi girseya kêm, eger girseya wê ya molî piçûk be, dikare bêtir mol bihewîne û di reaksiyonê de jî bimîne."
      }
    },
    {
      "id": "u07-f08",
      "fact": {
        "tr": "Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.",
        "en": "Percent yield is calculated with the formula (Actual Yield / Theoretical Yield) x 100.",
        "de": "Die prozentuale Ausbeute wird mit der Formel (tatsächliche Ausbeute / theoretische Ausbeute) x 100 berechnet.",
        "fr": "Le rendement en pourcentage est calculé avec la formule = (Rendement réel / Rendement théorique) x 100.",
        "ru": "Выход продукта (%) = (практический выход / теоретический выход) x 100.",
        "ar": "النسبة المئوية للمردود = (المردود الفعلي / المردود النظري) × 100.",
        "zh": "百分产率 =（实际产量/理论产量）x 100。",
        "ku": "Berhema ji sedî bi formula (Berhema rastîn / Berhema teorîk) x 100 tê hesibandin."
      },
      "trap": {
        "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
        "en": "The actual yield is always greater than the theoretical yield.",
        "de": "Die tatsächliche Ausbeute ist immer größer als die theoretische Ausbeute.",
        "fr": "Le rendement réel est toujours supérieur au rendement théorique.",
        "ru": "Практический выход всегда больше теоретического.",
        "ar": "المردود الفعلي دائمًا أكبر من المردود النظري.",
        "zh": "实际产量总是大于理论产量。",
        "ku": "Berhema rastîn her gav ji berhema teorîk mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Teorik verim, tepkime tamamen gerçekleşseydi oluşacak en fazla ürün miktarıdır. Kayıplar ve yan tepkimeler nedeniyle gerçek verim bunun altında kalır; yüzde verim %100'ü aşamaz.",
        "en": "The theoretical yield is the maximum amount of product that would form if the reaction went to completion. Because of losses and side reactions the actual yield stays below it; percent yield cannot exceed 100%.",
        "de": "Die theoretische Ausbeute ist die größtmögliche Produktmenge bei vollständigem Ablauf. Wegen Verlusten und Nebenreaktionen bleibt die tatsächliche Ausbeute darunter; die prozentuale Ausbeute kann 100 % nicht übersteigen.",
        "fr": "Le rendement théorique est la quantité maximale de produit qui se formerait si la réaction était totale. À cause des pertes et des réactions secondaires, le rendement réel reste inférieur ; le pourcentage de rendement ne peut pas dépasser 100 %.",
        "ru": "Теоретический выход — максимальное количество продукта при полном протекании реакции. Из-за потерь и побочных реакций практический выход меньше; выход продукта не может превышать 100 %.",
        "ar": "المردود النظري هو أكبر كمية من الناتج تتكون لو اكتمل التفاعل. وبسبب الفقد والتفاعلات الجانبية يبقى المردود الفعلي أقل منه، ولا يمكن أن تتجاوز النسبة المئوية للمردود 100%.",
        "zh": "理论产量是反应完全进行时所能得到的最大产物量。由于损失和副反应，实际产量低于理论产量，百分产率不可能超过 100%。",
        "ku": "Berhema teorîk mîqdara herî zêde ya hilberê ye ku dê çêbibûya eger reaksiyon bi tevahî pêk bihata. Ji ber windabûn û reaksiyonên lawekî berhema rastîn ji wê kêmtir dimîne; berhema ji sedî nikare ji %100 derbas bibe."
      }
    },
    {
      "id": "u07-f09",
      "fact": {
        "tr": "Hidrokarbonlar (CxHy) tam yandıklarında yalnızca CO2 ve H2O oluşturur.",
        "en": "Hydrocarbons (CxHy) produce only CO2 and H2O when completely burned.",
        "de": "Kohlenwasserstoffe (CxHy) erzeugen bei vollständiger Verbrennung nur CO2 und H2O.",
        "fr": "Les hydrocarbures (CxHy) ne produisent que du CO2 et du H2O lorsqu'ils sont complètement brûlés.",
        "ru": "При полном сгорании углеводородов (CxHy) образуются только CO2 и H2O.",
        "ar": "تُنتج الهيدروكربونات (CxHy) عند احتراقها احتراقًا كاملًا CO2 وH2O فقط.",
        "zh": "烃(CxHy)完全燃烧时只生成 CO2 和 H2O。",
        "ku": "Hîdrokarbon (CxHy) dema bi tevahî dişewitin tenê CO2 û H2O çêdikin."
      },
      "trap": {
        "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
        "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
        "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
        "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
        "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
        "ar": "عند احتراق الهيدروكربونات ينطلق غاز H2 مع CO2.",
        "zh": "烃燃烧时，除 CO2 外还会放出 H2 气体。",
        "ku": "Dema hîdrokarbon dişewitin, ligel CO2 gaza H2 jî derdikeve."
      },
      "whyTrapIsFalse": {
        "tr": "Hidrokarbondaki hidrojen yanma sırasında O2 ile birleşip H2O'ya dönüşür. Bu nedenle tam yanmada serbest H2 gazı açığa çıkmaz.",
        "en": "During combustion the hydrogen in a hydrocarbon combines with O2 and becomes H2O. Therefore no free H2 gas is released in complete combustion.",
        "de": "Beim Verbrennen verbindet sich der Wasserstoff des Kohlenwasserstoffs mit O2 zu H2O. Bei vollständiger Verbrennung wird daher kein freies H2-Gas frei.",
        "fr": "Lors de la combustion, l'hydrogène de l'hydrocarbure se combine avec O2 pour donner H2O. Une combustion complète ne libère donc pas de dihydrogène H2.",
        "ru": "При горении водород углеводорода соединяется с O2 и превращается в H2O. Поэтому при полном сгорании свободный H2 не выделяется.",
        "ar": "أثناء الاحتراق يتحد هيدروجين الهيدروكربون مع O2 ويتحول إلى H2O، لذا لا ينطلق غاز H2 حر في الاحتراق الكامل.",
        "zh": "燃烧时烃中的氢与 O2 结合生成 H2O，因此完全燃烧不会放出游离的 H2 气体。",
        "ku": "Di dema şewitînê de hîdrojena di hîdrokarbonê de bi O2 re dibe yek û vediguhere H2O. Ji ber vê yekê di şewitîna tevahî de gaza H2 ya azad dernakeve."
      }
    },
    {
      "id": "u07-f10",
      "fact": {
        "tr": "Kimyasal tepkimelerde kütle, atom sayısı ve türü, toplam proton, nötron ve elektron sayısı daima korunur.",
        "en": "In chemical reactions, mass, the number and type of atoms, and the total numbers of protons, neutrons and electrons are always conserved.",
        "de": "Bei chemischen Reaktionen bleiben Masse, Anzahl und Art der Atome sowie die Gesamtzahl der Protonen, Neutronen und Elektronen stets erhalten.",
        "fr": "Dans les réactions chimiques, la masse, le nombre et la nature des atomes ainsi que le nombre total de protons, de neutrons et d'électrons sont toujours conservés.",
        "ru": "В химических реакциях всегда сохраняются масса, число и вид атомов, а также общее число протонов, нейтронов и электронов.",
        "ar": "في التفاعلات الكيميائية تُحفظ دائمًا الكتلة وعدد الذرات ونوعها والعدد الكلي للبروتونات والنيوترونات والإلكترونات.",
        "zh": "在化学反应中，质量、原子的数目和种类以及质子、中子和电子的总数始终守恒。",
        "ku": "Di reaksiyonên kîmyewî de girse, hejmar û cureyê atoman û hejmara giştî ya proton, notron û elektronan her tim tên parastin."
      },
      "trap": {
        "tr": "Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.",
        "en": "In all chemical reactions, the number of molecules and the gas volume are always conserved.",
        "de": "Bei allen chemischen Reaktionen bleiben die Anzahl der Moleküle und das Gasvolumen stets erhalten.",
        "fr": "Dans toutes les réactions chimiques, le nombre de molécules et le volume de gaz sont toujours conservés.",
        "ru": "Во всех химических реакциях число молекул и объём газов обязательно сохраняются.",
        "ar": "في جميع التفاعلات الكيميائية، يظل عدد الجزيئات وحجم الغاز محفوظين دائمًا.",
        "zh": "在所有化学反应中，分子数和气体体积始终守恒。",
        "ku": "Di hemû reaksiyonên kîmyewî de hejmara molekulan û qebareya gazê bê guman tên parastin."
      },
      "whyTrapIsFalse": {
        "tr": "Molekül sayısı ve gaz hacmi atomlar gibi korunmaz, katsayılara bağlıdır. Örneğin N2 + 3H2 -> 2NH3 tepkimesinde 4 molekül gazdan 2 molekül gaz oluşur.",
        "en": "Unlike atoms, the number of molecules and the gas volume are not conserved; they depend on the coefficients. For example, in N2 + 3H2 -> 2NH3, 4 gas molecules give 2 gas molecules.",
        "de": "Anders als Atome bleiben Molekülzahl und Gasvolumen nicht erhalten; sie hängen von den Koeffizienten ab. Bei N2 + 3H2 -> 2NH3 entstehen z. B. aus 4 Gasmolekülen 2 Gasmoleküle.",
        "fr": "Contrairement aux atomes, le nombre de molécules et le volume gazeux ne sont pas conservés ; ils dépendent des coefficients. Par exemple, dans N2 + 3H2 -> 2NH3, 4 molécules de gaz en donnent 2.",
        "ru": "В отличие от атомов, число молекул и объём газа не сохраняются — они зависят от коэффициентов. Например, в реакции N2 + 3H2 -> 2NH3 из 4 молекул газа образуются 2.",
        "ar": "على عكس الذرات، لا يُحفظ عدد الجزيئات ولا حجم الغاز، بل يعتمدان على المعاملات؛ ففي التفاعل N2 + 3H2 -> 2NH3 ينتج من 4 جزيئات غاز جزيئان فقط.",
        "zh": "与原子不同，分子数和气体体积并不守恒，而取决于系数。例如 N2 + 3H2 -> 2NH3 中，4 个气体分子生成 2 个气体分子。",
        "ku": "Berevajî atoman, hejmara molekulan û qebareya gazê nayên parastin; ew bi hevberan ve girêdayî ne. Wek mînak, di N2 + 3H2 -> 2NH3 de ji 4 molekulên gazê 2 molekulên gazê çêdibin."
      }
    },
    {
      "id": "u07-f11",
      "fact": {
        "tr": "Artan madde hesabında girenlerin mol sayıları katsayılarına bölünür; oranı en küçük olan madde sınırlayıcı bileşendir, diğer girenden artan kalır.",
        "en": "In excess-reactant problems, the moles of each reactant are divided by its coefficient; the one with the smallest ratio is the limiting reactant and some of the other reactant is left over.",
        "de": "Bei Überschussrechnungen teilt man die Stoffmengen der Edukte durch ihre Koeffizienten; der Stoff mit dem kleinsten Quotienten ist der limitierende Reaktant, vom anderen bleibt ein Rest.",
        "fr": "Dans les calculs d'excès, on divise la quantité de matière (en moles) de chaque réactif par son coefficient ; celui dont le rapport est le plus petit est le réactif limitant et l'autre réactif est en excès.",
        "ru": "В задачах на избыток количество вещества (моль) каждого реагента делят на его коэффициент; реагент с наименьшим отношением — лимитирующий, другой реагент остаётся в избытке.",
        "ar": "في مسائل المادة الفائضة يُقسم عدد مولات كل مادة متفاعلة على معاملها؛ والمادة ذات النسبة الأصغر هي المادة المحددة، ويتبقى جزء من المادة الأخرى.",
        "zh": "在过量计算中，用各反应物的物质的量除以其系数；比值最小者为限量反应物，另一种反应物有剩余。",
        "ku": "Di hesabê reaktanta zêde de hejmara molên her reaktantê li hevberê wê tê parvekirin; ya ku rêjeya wê herî piçûk e reaktanta sînordar e, ji reaktanta din jî beşek dimîne."
      },
      "trap": {
        "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
        "en": "Whichever substance has the most moles, that substance runs out first.",
        "de": "Der Stoff, von dem die meisten Mol vorhanden sind, wird zuerst aufgebraucht.",
        "fr": "La substance qui a le plus grand nombre de moles s'épuise en premier.",
        "ru": "Первым заканчивается то вещество, количество которого (в моль) больше.",
        "ar": "المادة التي عدد مولاتها أكبر هي التي تنفد أولًا.",
        "zh": "哪种反应物的物质的量最大，哪种就先消耗完。",
        "ku": "Kîjan made bêtir mol jê hebe, ew made pêşî diqede."
      },
      "whyTrapIsFalse": {
        "tr": "Tükenme sırası yalnız mol sayısına değil katsayıya da bağlıdır. Mol/katsayı oranı en küçük olan madde önce biter; mol sayısı fazla olan madde ise çoğu zaman artan maddedir.",
        "en": "Which substance runs out first depends not only on the number of moles but also on the coefficient. The one with the smallest mole/coefficient ratio runs out first; the substance with more moles is usually the one left over.",
        "de": "Welcher Stoff zuerst verbraucht ist, hängt nicht nur von der Stoffmenge, sondern auch vom Koeffizienten ab. Der Stoff mit dem kleinsten Verhältnis Mol/Koeffizient ist zuerst verbraucht; der Stoff mit mehr Mol bleibt meist übrig.",
        "fr": "Le réactif épuisé en premier dépend non seulement du nombre de moles mais aussi du coefficient. Celui qui a le plus petit rapport moles/coefficient s'épuise d'abord ; celui qui a le plus de moles est le plus souvent en excès.",
        "ru": "Какое вещество израсходуется первым, зависит не только от количества вещества, но и от коэффициента. Первым заканчивается вещество с наименьшим отношением моль/коэффициент; вещество с большим числом моль обычно остаётся в избытке.",
        "ar": "ترتيب النفاد لا يعتمد على عدد المولات وحده بل على المعامل أيضًا؛ فالمادة ذات أصغر نسبة مول/معامل تنفد أولًا، بينما المادة ذات المولات الأكثر تكون غالبًا هي الفائضة.",
        "zh": "哪种物质先耗尽不仅取决于物质的量，还取决于系数。物质的量/系数比值最小者先耗尽；物质的量多的反应物通常是过量的。",
        "ku": "Kîjan made pêşî diqede ne tenê bi hejmara molan, bi hevberê jî ve girêdayî ye. Madeya ku rêjeya wê ya mol/hevber herî piçûk e pêşî diqede; madeya ku bêtir mol jê heye piranî ew e ya ku dimîne."
      }
    },
    {
      "id": "u07-f12",
      "fact": {
        "tr": "Saflık yüzdesi = (Saf Madde Kütlesi / Numune Kütlesi) x 100'dür.",
        "en": "Purity percentage = (Pure Substance Mass / Sample Mass) x 100.",
        "de": "Reinheitsprozentsatz = (Reinstoffmasse / Probenmasse) x 100.",
        "fr": "Pourcentage de pureté = (Masse de substance pure / Masse d'échantillon) x 100.",
        "ru": "Массовая доля чистого вещества (%) = (масса чистого вещества / масса образца) x 100.",
        "ar": "نسبة النقاء = (كتلة المادة النقية / كتلة العينة) × 100.",
        "zh": "纯度百分比 =（纯物质质量/样品质量）x 100。",
        "ku": "Paqijiya ji sedî = (Girseya madeya paqij / Girseya nimûneyê) x 100."
      },
      "trap": {
        "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
        "en": "When calculating percent purity, the impure part of the sample is assumed to take part in the reaction.",
        "de": "Bei der Berechnung der Reinheit in Prozent wird angenommen, dass der unreine Anteil der Probe mitreagiert.",
        "fr": "Lors du calcul du pourcentage de pureté, on suppose que la partie impure de l'échantillon réagit.",
        "ru": "При расчёте массовой доли чистого вещества считают, что примеси тоже вступают в реакцию.",
        "ar": "عند حساب نسبة النقاء يُفترض أن الجزء غير النقي من العينة يتفاعل.",
        "zh": "计算纯度时，认为样品中的杂质也参加反应。",
        "ku": "Dema paqijiya ji sedî tê hesibandin, tê qebûlkirin ku beşa ne paqij a nimûneyê jî dikeve reaksiyonê."
      },
      "whyTrapIsFalse": {
        "tr": "Safsızlıklar tepkimeye girmez kabul edilir. Bu yüzden hesaplamada numunenin tamamı değil, yalnızca içindeki saf madde kütlesi kullanılır.",
        "en": "Impurities are assumed not to react. Therefore only the mass of the pure substance in the sample, not the whole sample, is used in calculations.",
        "de": "Verunreinigungen gelten als nicht reagierend. Deshalb wird in der Rechnung nur die Masse des reinen Stoffes in der Probe verwendet, nicht die ganze Probe.",
        "fr": "On considère que les impuretés ne réagissent pas. On n'utilise donc dans le calcul que la masse de substance pure contenue dans l'échantillon, et non l'échantillon entier.",
        "ru": "Считается, что примеси в реакцию не вступают. Поэтому в расчёте используется только масса чистого вещества в образце, а не масса всего образца.",
        "ar": "يُفترض أن الشوائب لا تتفاعل، لذا لا يُستخدم في الحساب إلا كتلة المادة النقية في العينة وليس كتلة العينة كلها.",
        "zh": "计算时认为杂质不参加反应，因此只用样品中纯物质的质量，而不是整个样品的质量。",
        "ku": "Tê qebûlkirin ku madeyên ne paqij nakevin reaksiyonê. Ji ber vê yekê di hesabê de ne tevahiya nimûneyê, tenê girseya madeya paqij a di nav wê de tê bikaranîn."
      }
    },
    {
      "id": "u07-f13",
      "fact": {
        "tr": "Demirin paslanması (basitçe 4Fe + 3O2 -> 2Fe2O3 ile gösterilir) alevsiz yavaş yanmaya, yani yavaş oksitlenmeye örnektir.",
        "en": "Rusting of iron (written simply as 4Fe + 3O2 -> 2Fe2O3) is an example of slow, flameless combustion, i.e. slow oxidation.",
        "de": "Das Rosten von Eisen (vereinfacht 4Fe + 3O2 -> 2Fe2O3) ist ein Beispiel für eine langsame, flammenlose Verbrennung, also eine langsame Oxidation.",
        "fr": "La rouille du fer (écrite simplement 4Fe + 3O2 -> 2Fe2O3) est un exemple de combustion lente sans flamme, c'est-à-dire d'oxydation lente.",
        "ru": "Ржавление железа (упрощённо 4Fe + 3O2 -> 2Fe2O3) — пример медленного беспламенного горения, то есть медленного окисления.",
        "ar": "صدأ الحديد (يُكتب ببساطة 4Fe + 3O2 -> 2Fe2O3) مثال على الاحتراق البطيء دون لهب، أي الأكسدة البطيئة.",
        "zh": "铁生锈(简化表示为 4Fe + 3O2 -> 2Fe2O3)是无焰的缓慢燃烧，即缓慢氧化的例子。",
        "ku": "Zengarbûna hesin (bi awayekî sade bi 4Fe + 3O2 -> 2Fe2O3 tê nîşandan) mînaka şewitîna hêdî ya bê agir, ango oksîdasyona hêdî ye."
      },
      "trap": {
        "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
        "en": "Rusting of iron is a physical dissolution phenomenon.",
        "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
        "fr": "La rouille du fer est un phénomène de dissolution physique.",
        "ru": "Ржавление железа — физический процесс растворения.",
        "ar": "صدأ الحديد عملية ذوبان فيزيائية.",
        "zh": "铁生锈是一种物理溶解过程。",
        "ku": "Zengarbûna hesin bûyereke fîzîkî ya helbûnê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Paslanmada demir oksijenle tepkimeye girip yeni bir madde (demir oksit) oluşturur. Bu kimyasal bir değişmedir; çözünmede ise yeni madde oluşmaz.",
        "en": "In rusting, iron reacts with oxygen and forms a new substance (iron oxide). This is a chemical change, whereas dissolving produces no new substance.",
        "de": "Beim Rosten reagiert Eisen mit Sauerstoff zu einem neuen Stoff (Eisenoxid). Das ist eine chemische Veränderung; beim Lösen entsteht dagegen kein neuer Stoff.",
        "fr": "Lors de la rouille, le fer réagit avec le dioxygène et forme une nouvelle substance (oxyde de fer). C'est une transformation chimique, alors qu'une dissolution ne crée pas de nouvelle substance.",
        "ru": "При ржавлении железо реагирует с кислородом и образует новое вещество (оксид железа). Это химическое изменение, а при растворении новое вещество не образуется.",
        "ar": "في الصدأ يتفاعل الحديد مع الأكسجين ويكوّن مادة جديدة (أكسيد الحديد)، وهذا تغير كيميائي، بينما لا تتكون مادة جديدة في الذوبان.",
        "zh": "生锈时铁与氧气反应生成新物质（铁的氧化物），这是化学变化；而溶解不会生成新物质。",
        "ku": "Di zengarbûnê de hesin bi oksîjenê re dikeve reaksiyonê û madeyeke nû (oksîta hesin) çêdike. Ev guherîneke kîmyewî ye; lê di helbûnê de madeya nû çênabe."
      }
    },
    {
      "id": "u07-f14",
      "fact": {
        "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde seyirci iyonlar Na+ ve NO3-'tır.",
        "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq), the spectator ions are Na+ and NO3-.",
        "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) sind die Zuschauerionen Na+ und NO3-.",
        "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq), les ions spectateurs sont Na+ et NO3-.",
        "ru": "В реакции AgNO3(р-р) + NaCl(р-р) -> AgCl(тв) + NaNO3(р-р) ионами-наблюдателями являются Na+ и NO3-.",
        "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)، تكون الأيونات المتفرجة Na+ وNO3-.",
        "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) 中，旁观离子是 Na+ 和 NO3-。",
        "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) de îyonên temaşevan Na+ û NO3- ne."
      },
      "trap": {
        "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde Ag+ ve Cl- seyirci iyonlardır.",
        "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq), Ag+ and Cl- are spectator ions.",
        "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) sind Ag+ und Cl- Zuschauerionen.",
        "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq), Ag+ et Cl- sont des ions spectateurs.",
        "ru": "В реакции AgNO3(р-р) + NaCl(р-р) -> AgCl(тв) + NaNO3(р-р) ионами-наблюдателями являются Ag+ и Cl-.",
        "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)، يكون Ag+ وCl- أيونين متفرجين.",
        "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) 中，Ag+ 和 Cl- 是旁观离子。",
        "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq) de Ag+ û Cl- îyonên temaşevan in."
      },
      "whyTrapIsFalse": {
        "tr": "Ag+ ve Cl- iyonları birleşerek AgCl katısını oluşturduğu için tepkimeye katılan iyonlardır. Çözeltide değişmeden kalan seyirci iyonlar Na+ ve NO3-'tır.",
        "en": "Ag+ and Cl- combine to form solid AgCl, so they are the ions that take part in the reaction. The spectator ions that stay unchanged in solution are Na+ and NO3-.",
        "de": "Ag+ und Cl- vereinigen sich zu festem AgCl und nehmen daher an der Reaktion teil. Die unverändert in Lösung bleibenden Zuschauerionen sind Na+ und NO3-.",
        "fr": "Ag+ et Cl- s'unissent pour former le solide AgCl : ce sont donc les ions qui réagissent. Les ions spectateurs restés inchangés en solution sont Na+ et NO3-.",
        "ru": "Ag+ и Cl- соединяются в твёрдый AgCl, значит, именно они участвуют в реакции. Ионы-наблюдатели, остающиеся в растворе без изменений, — это Na+ и NO3-.",
        "ar": "يتحد Ag+ وCl- لتكوين AgCl الصلب، فهما الأيونان المشاركان في التفاعل، أما الأيونات المتفرجة الباقية دون تغيير في المحلول فهي Na+ وNO3-.",
        "zh": "Ag+ 与 Cl- 结合生成固体 AgCl，因此它们是参与反应的离子；在溶液中保持不变的旁观离子是 Na+ 和 NO3-。",
        "ku": "Ag+ û Cl- dibin yek û AgCl-a hişk çêdikin, ji ber vê yekê ew beşdarî reaksiyonê dibin. Îyonên temaşevan ên ku di çareseriyê de bê guhertin dimînin Na+ û NO3- ne."
      }
    },
    {
      "id": "u07-f15",
      "fact": {
        "tr": "İki reaktiften eşit mol alındığında katsayısı büyük olan reaktif sınırlayıcı bileşendir.",
        "en": "When equal moles of two reactants are taken, the reactant with the larger coefficient is the limiting reactant.",
        "de": "Werden von zwei Edukten gleiche Stoffmengen eingesetzt, ist das Edukt mit dem größeren Koeffizienten der limitierende Reaktant.",
        "fr": "Lorsque deux réactifs sont pris en quantités de matière égales, le réactif ayant le plus grand coefficient est le réactif limitant.",
        "ru": "Если два реагента взяты в равных количествах вещества, лимитирующим является реагент с большим коэффициентом.",
        "ar": "عند أخذ عدد مولات متساوٍ من مادتين متفاعلتين، تكون المادة ذات المعامل الأكبر هي المادة المحددة.",
        "zh": "两种反应物取相同物质的量时，系数较大的反应物是限量反应物。",
        "ku": "Dema ji du reaktantan bi qasî hev mol tê girtin, reaktanta ku hevbera wê mezintir e reaktanta sînordar e."
      },
      "trap": {
        "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
        "en": "When equal moles are taken, the reactant with the smaller coefficient is used up first.",
        "de": "Bei gleichen Stoffmengen wird zuerst das Edukt mit dem kleineren Koeffizienten verbraucht.",
        "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
        "ru": "При равных количествах вещества первым расходуется реагент с меньшим коэффициентом.",
        "ar": "عند أخذ مولات متساوية تُستهلك أولًا المادة المتفاعلة ذات المعامل الأصغر.",
        "zh": "取相同物质的量时，系数较小的反应物先消耗完。",
        "ku": "Dema bi qasî hev mol tê girtin, reaktanta ku hevbera wê piçûktir e pêşî diqede."
      },
      "whyTrapIsFalse": {
        "tr": "Eşit mol alındığında katsayısı büyük olan madde her birim tepkimede daha çok harcanır, bu yüzden önce o tükenir. Katsayısı küçük olan madde ise artar.",
        "en": "When equal moles are taken, the substance with the larger coefficient is consumed faster in every unit of reaction, so it runs out first. The one with the smaller coefficient is left over.",
        "de": "Bei gleichen Stoffmengen wird der Stoff mit dem größeren Koeffizienten pro Formelumsatz stärker verbraucht und ist daher zuerst aufgebraucht. Der Stoff mit dem kleineren Koeffizienten bleibt übrig.",
        "fr": "À quantités de matière égales, la substance de plus grand coefficient est davantage consommée à chaque unité de réaction ; elle s'épuise donc en premier. Celle de plus petit coefficient est en excès.",
        "ru": "При равных количествах вещества реагента с большим коэффициентом на каждый акт реакции расходуется больше, поэтому он заканчивается первым. Реагент с меньшим коэффициентом остаётся в избытке.",
        "ar": "عند تساوي عدد المولات تُستهلك المادة ذات المعامل الأكبر بكمية أكبر في كل وحدة تفاعل فتنفد أولًا، أما المادة ذات المعامل الأصغر فتتبقى.",
        "zh": "物质的量相同时，系数大的物质每进行一次反应消耗得更多，因此先耗尽；系数小的物质有剩余。",
        "ku": "Dema bi qasî hev mol tê girtin, madeya ku hevbera wê mezintir e di her yekîneya reaksiyonê de bêtir tê xerckirin, ji ber vê yekê pêşî ew diqede. Madeya ku hevbera wê piçûktir e dimîne."
      }
    },
    {
      "id": "u07-f16",
      "fact": {
        "tr": "Aynı sıcaklık ve basınçta tepkimeye giren ve oluşan gazların hacimleri arasında basit tam sayılı oranlar vardır (Gay-Lussac); Avogadro hipotezine göre bu hacim oranları mol oranlarına eşittir.",
        "en": "At the same temperature and pressure, the volumes of reacting and produced gases are in simple whole-number ratios (Gay-Lussac); according to Avogadro’s hypothesis these volume ratios equal the mole ratios.",
        "de": "Bei gleicher Temperatur und gleichem Druck stehen die Volumina reagierender und entstehender Gase in einfachen ganzzahligen Verhältnissen (Gay-Lussac); nach der Avogadro-Hypothese entsprechen diese Volumenverhältnisse den Stoffmengenverhältnissen.",
        "fr": "À même température et même pression, les volumes des gaz qui réagissent et qui se forment sont dans des rapports simples de nombres entiers (Gay-Lussac) ; selon l'hypothèse d'Avogadro, ces rapports de volumes sont égaux aux rapports molaires.",
        "ru": "При одинаковых температуре и давлении объёмы реагирующих и образующихся газов относятся как небольшие целые числа (Гей-Люссак); согласно гипотезе Авогадро эти объёмные отношения равны мольным.",
        "ar": "عند درجة الحرارة والضغط نفسيهما تكون حجوم الغازات المتفاعلة والناتجة بنسب أعداد صحيحة بسيطة (قانون جاي لوساك)، ووفق فرضية أفوجادرو تساوي هذه النسب الحجمية النسب المولية.",
        "zh": "在同温同压下，参加反应和生成的气体体积之间成简单整数比（盖-吕萨克）；根据阿伏加德罗假说，这些体积比等于物质的量之比。",
        "ku": "Di heman germahî û zextê de di navbera qebareyên gazên ku dikevin reaksiyonê û yên ku çêdibin de rêjeyên hêsan ên hejmarên tam hene (Gay-Lussac); li gorî hîpoteza Avogadro ev rêjeyên qebareyan bi rêjeyên molan re wekhev in."
      },
      "trap": {
        "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
        "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
        "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
        "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
        "ru": "В газовых реакциях суммарный объём реагентов всегда равен суммарному объёму продуктов.",
        "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
        "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
        "ku": "Di reaksiyonên gazan de qebareya giştî ya reaktantan her tim bi qebareya giştî ya hilberan re wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "Aynı koşullarda gaz hacmi mol sayısıyla orantılıdır; bu nedenle hacim ancak girenlerin ve ürünlerin gaz katsayı toplamları eşitse korunur. Örneğin 2H2(g) + O2(g) -> 2H2O(g) tepkimesinde 3 hacimden 2 hacim oluşur.",
        "en": "Under the same conditions, gas volume is proportional to the number of moles, so volume is conserved only if the gas coefficients of reactants and products add up to the same total. In 2H2(g) + O2(g) -> 2H2O(g), for example, 3 volumes give 2 volumes.",
        "de": "Unter gleichen Bedingungen ist das Gasvolumen proportional zur Stoffmenge; das Volumen bleibt daher nur erhalten, wenn die Summen der Gaskoeffizienten links und rechts gleich sind. Bei 2H2(g) + O2(g) -> 2H2O(g) entstehen z. B. aus 3 Volumina 2 Volumina.",
        "fr": "Dans les mêmes conditions, le volume d'un gaz est proportionnel au nombre de moles ; le volume n'est donc conservé que si les sommes des coefficients gazeux des réactifs et des produits sont égales. Dans 2H2(g) + O2(g) -> 2H2O(g), par exemple, 3 volumes en donnent 2.",
        "ru": "При одинаковых условиях объём газа пропорционален количеству вещества, поэтому объём сохраняется, только если суммы газовых коэффициентов слева и справа равны. Например, в реакции 2H2(г) + O2(г) -> 2H2O(г) из 3 объёмов получается 2.",
        "ar": "في الظروف نفسها يتناسب حجم الغاز مع عدد المولات، لذا لا يُحفظ الحجم إلا إذا تساوى مجموع معاملات الغازات في الطرفين؛ ففي التفاعل 2H2(g) + O2(g) -> 2H2O(g) ينتج من 3 حجوم حجمان فقط.",
        "zh": "同条件下气体体积与物质的量成正比，因此只有当反应物和生成物的气体系数之和相等时体积才不变。例如 2H2(g) + O2(g) -> 2H2O(g) 中 3 体积生成 2 体积。",
        "ku": "Di heman şertan de qebareya gazê bi hejmara molan re rêjeyî ye; ji ber vê yekê qebare tenê dema ku berhevoka hevberên gazî yên reaktantan û ya hilberan wekhev bin tê parastin. Wek mînak, di 2H2(g) + O2(g) -> 2H2O(g) de ji 3 qebareyan 2 qebare çêdibin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u07-c01",
      "conceptA": {
        "tr": "Sentez",
        "en": "Synthesis",
        "de": "Synthese",
        "fr": "Synthèse",
        "ru": "Реакция соединения",
        "ar": "تفاعل الاتحاد",
        "zh": "化合反应",
        "ku": "Sentez"
      },
      "conceptB": {
        "tr": "Analiz",
        "en": "Analysis",
        "de": "Analyse",
        "fr": "Analyse",
        "ru": "Реакция разложения",
        "ar": "تفاعل التفكك",
        "zh": "分解反应",
        "ku": "Analîz"
      },
      "distinction": {
        "tr": "Sentez maddelerin birleşerek tek ürün vermesi; analiz tek bileşiğin parçalanarak ayrışmasıdır.",
        "en": "In synthesis, substances combine to give a single product; analysis is the breakdown of a single compound.",
        "de": "Bei der Synthese verbinden sich Stoffe zu einem einzigen Produkt; die Analyse ist die Zerlegung einer einzelnen Verbindung.",
        "fr": "Dans la synthèse, des substances se combinent pour donner un seul produit ; l'analyse est la décomposition d'un seul composé.",
        "ru": "Реакция соединения — объединение нескольких веществ в один продукт; реакция разложения — распад одного сложного вещества на несколько более простых.",
        "ar": "في تفاعل الاتحاد تتحد مادتان أو أكثر لتعطي ناتجًا واحدًا؛ أما في تفاعل التفكك فيتفكك مركب واحد إلى مواد أبسط.",
        "zh": "化合反应是多种物质结合生成一种产物的反应；分解反应是由一种物质生成几种较简单物质的反应。",
        "ku": "Di sentezê de made dibin yek û hilberek tenê çêdikin; analîz perçebûna pêkhateyekê ye."
      }
    },
    {
      "id": "u07-c02",
      "conceptA": {
        "tr": "Gerçek Verim",
        "en": "Actual Yield",
        "de": "Tatsächliche Ausbeute",
        "fr": "Rendement réel",
        "ru": "Практический выход",
        "ar": "المردود الفعلي",
        "zh": "实际产量",
        "ku": "Berhema Rastîn"
      },
      "conceptB": {
        "tr": "Teorik Verim",
        "en": "Theoretical Yield",
        "de": "Theoretische Ausbeute",
        "fr": "Rendement théorique",
        "ru": "Теоретический выход",
        "ar": "المردود النظري",
        "zh": "理论产量",
        "ku": "Berhema Teorîk"
      },
      "distinction": {
        "tr": "Teorik verim hesaplanan en fazla ürün miktarıdır; gerçek verim deneyde fiilen elde edilen ürün miktarıdır.",
        "en": "The theoretical yield is the calculated maximum amount of product; the actual yield is the amount actually obtained in the experiment.",
        "de": "Die theoretische Ausbeute ist die berechnete maximale Produktmenge; die tatsächliche Ausbeute ist die im Experiment tatsächlich erhaltene Menge.",
        "fr": "Le rendement théorique est la quantité maximale de produit calculée ; le rendement réel est la quantité réellement obtenue lors de l'expérience.",
        "ru": "Теоретический выход — рассчитанное максимальное количество продукта; практический выход — количество продукта, реально полученное в опыте.",
        "ar": "المردود النظري هو أكبر كمية ناتج محسوبة؛ أما المردود الفعلي فهو الكمية التي يُحصل عليها فعلًا في التجربة.",
        "zh": "理论产量是计算得到的最大产物量；实际产量是实验中实际得到的量。",
        "ku": "Berhema teorîk mîqdara herî zêde ya hilberê ye ku bi hesabê tê dîtin; berhema rastîn mîqdara hilberê ye ku di ceribandinê de bi rastî tê bidestxistin."
      }
    },
    {
      "id": "u07-c03",
      "conceptA": {
        "tr": "Saflık Yüzdesi",
        "en": "Percent Purity",
        "de": "Reinheit in Prozent",
        "fr": "Pourcentage de pureté",
        "ru": "Массовая доля чистого вещества",
        "ar": "نسبة النقاء",
        "zh": "纯度百分比",
        "ku": "Paqijiya ji sedî"
      },
      "conceptB": {
        "tr": "Yüzde Verim",
        "en": "Percent Yield",
        "de": "Prozentuale Ausbeute",
        "fr": "Rendement en pourcentage",
        "ru": "Выход продукта",
        "ar": "النسبة المئوية للمردود",
        "zh": "百分产率",
        "ku": "Berhema ji sedî"
      },
      "distinction": {
        "tr": "Saflık yüzdesi numunedeki saf madde kütlesinin numune kütlesine oranıdır (x100); yüzde verim gerçekte elde edilen ürün miktarının hesaplanan en fazla ürün miktarına oranıdır (x100).",
        "en": "Percent purity is the ratio of the mass of pure substance to the mass of the sample (x100); percent yield is the ratio of the amount of product actually obtained to the maximum amount of product calculated (x100).",
        "de": "Die Reinheit in Prozent ist das Verhältnis der Masse des reinen Stoffes zur Masse der Probe (x100); die prozentuale Ausbeute ist das Verhältnis der tatsächlich erhaltenen Produktmenge zur berechneten maximalen Produktmenge (x100).",
        "fr": "Le pourcentage de pureté est le rapport de la masse de substance pure à la masse de l'échantillon (x100) ; le rendement en pourcentage est le rapport de la quantité de produit réellement obtenue à la quantité maximale de produit calculée (x100).",
        "ru": "Массовая доля чистого вещества — отношение массы чистого вещества к массе образца (x100); выход продукта — отношение практически полученного количества продукта к теоретически рассчитанному максимальному (x100).",
        "ar": "نسبة النقاء ناتج قسمة كتلة المادة النقية على كتلة العينة (x100)؛ والنسبة المئوية للمردود ناتج قسمة كمية الناتج التي حُصل عليها فعلًا على أكبر كمية ناتج محسوبة (x100).",
        "zh": "纯度百分比是纯物质质量与样品质量之比(x100)；百分产率是实际得到的产物量与计算出的最大产物量之比(x100)。",
        "ku": "Paqijiya ji sedî rêjeya girseya madeya paqij a di nimûneyê de bi girseya nimûneyê ye (x100); berhema ji sedî rêjeya mîqdara hilberê ya bi rastî hatî bidestxistin bi mîqdara herî zêde ya hesabkirî ye (x100)."
      }
    },
    {
      "id": "u07-c04",
      "conceptA": {
        "tr": "Ekzotermik Tepkime",
        "en": "Exothermic Reaction",
        "de": "Exotherme Reaktion",
        "fr": "Réaction exothermique",
        "ru": "Экзотермическая реакция",
        "ar": "التفاعل الطارد للحرارة",
        "zh": "放热反应",
        "ku": "Reaksiyona ekzotermîk"
      },
      "conceptB": {
        "tr": "Endotermik Tepkime",
        "en": "Endothermic Reaction",
        "de": "Endotherme Reaktion",
        "fr": "Réaction endothermique",
        "ru": "Эндотермическая реакция",
        "ar": "التفاعل الماص للحرارة",
        "zh": "吸热反应",
        "ku": "Reaksiyona endotermîk"
      },
      "distinction": {
        "tr": "Ekzotermik tepkimeler dışarıya ısı verir; endotermik tepkimeler ortamdan ısı alarak gerçekleşir.",
        "en": "Exothermic reactions release heat to the surroundings; endothermic reactions take place by absorbing heat from the surroundings.",
        "de": "Eine exotherme Reaktion gibt Wärme an die Umgebung ab; eine endotherme Reaktion läuft unter Aufnahme von Wärme aus der Umgebung ab.",
        "fr": "Une réaction exothermique libère de la chaleur vers le milieu extérieur ; une réaction endothermique se produit en absorbant de la chaleur du milieu extérieur.",
        "ru": "Экзотермическая реакция идёт с выделением теплоты в окружающую среду; эндотермическая реакция идёт с поглощением теплоты из окружающей среды.",
        "ar": "التفاعل الطارد للحرارة يطلق الحرارة إلى الوسط المحيط؛ أما التفاعل الماص للحرارة فيحدث بامتصاص الحرارة من الوسط المحيط.",
        "zh": "放热反应向外界放出热量；吸热反应要从环境中吸收热量才能进行。",
        "ku": "Reaksiyona ekzotermîk germê dide derdorê; reaksiyona endotermîk bi wergirtina germê ji derdorê pêk tê."
      }
    },
    {
      "id": "u07-c05",
      "conceptA": {
        "tr": "Sınırlayıcı Bileşen",
        "en": "Limiting Reactant",
        "de": "Limitierender Reaktant",
        "fr": "Réactif limitant",
        "ru": "Лимитирующий реагент",
        "ar": "المادة المحددة",
        "zh": "限量反应物",
        "ku": "Reaktanta sînordar"
      },
      "conceptB": {
        "tr": "Artan Madde",
        "en": "Excess Reactant",
        "de": "Überschussreaktant",
        "fr": "Réactif en excès",
        "ru": "Вещество в избытке",
        "ar": "المادة الفائضة",
        "zh": "过量反应物",
        "ku": "Reaktanta zêde"
      },
      "distinction": {
        "tr": "Sınırlayıcı bileşen tepkimede ilk önce tükenen ve ürün miktarını belirleyen maddedir; artan madde ise tepkime bittiğinde bir kısmı tepkimeye girmeden kalan maddedir.",
        "en": "The limiting reactant is the substance that is used up first in the reaction and determines the amount of product; the excess reactant is the substance part of which is left unreacted when the reaction ends.",
        "de": "Der limitierende Reaktant ist der Stoff, der bei der Reaktion zuerst verbraucht wird und die Produktmenge bestimmt; der Überschussreaktant ist der Stoff, von dem nach Ende der Reaktion ein Teil unverbraucht übrig bleibt.",
        "fr": "Le réactif limitant est la substance consommée en premier dans la réaction et qui détermine la quantité de produit ; le réactif en excès est la substance dont une partie reste sans avoir réagi à la fin de la réaction.",
        "ru": "Лимитирующий реагент расходуется в реакции первым и определяет количество продукта; вещество в избытке частично остаётся непрореагировавшим после окончания реакции.",
        "ar": "المادة المحددة: المادة التي تُستهلك أولًا في التفاعل وتحدد كمية الناتج؛ والمادة الفائضة: المادة التي يبقى جزء منها دون تفاعل عند انتهاء التفاعل.",
        "zh": "限量反应物是反应中最先消耗完并决定产物量的物质；过量反应物是反应结束时有一部分未参加反应而剩余的物质。",
        "ku": "Reaktanta sînordar ew made ye ku di reaksiyonê de pêşî diqede û mîqdara hilberê diyar dike; reaktanta zêde ew made ye ku dema reaksiyon diqede beşek jê bêyî ku bikeve reaksiyonê dimîne."
      }
    },
    {
      "id": "u07-c06",
      "conceptA": {
        "tr": "Net İyon Denklemi",
        "en": "Net Ionic Equation",
        "de": "Nettoionengleichung",
        "fr": "Équation ionique nette",
        "ru": "Сокращённое ионное уравнение",
        "ar": "المعادلة الأيونية الصافية",
        "zh": "净离子方程式",
        "ku": "Hevkêşeya îyonî ya net"
      },
      "conceptB": {
        "tr": "Seyirci İyonlar",
        "en": "Spectator Ions",
        "de": "Zuschauerionen",
        "fr": "Ions spectateurs",
        "ru": "Ионы-наблюдатели",
        "ar": "الأيونات المتفرجة",
        "zh": "旁观离子",
        "ku": "Îyonên temaşevan"
      },
      "distinction": {
        "tr": "Çöken katıyı veya oluşan suyu gösteren denklem yalnızca tepkimeye katılan iyonlarla yazılır; seyirci iyonlar ise çözeltide değişmeden kalan iyonlardır.",
        "en": "The net ionic equation shows the precipitate or the water that forms and contains only the ions that take part in the reaction; spectator ions are ions that remain unchanged in solution.",
        "de": "Die Nettoionengleichung zeigt den ausgefällten Feststoff bzw. das gebildete Wasser und enthält nur die an der Reaktion beteiligten Ionen; Zuschauerionen sind Ionen, die in Lösung unverändert bleiben.",
        "fr": "L'équation ionique nette montre le solide précipité ou l'eau formée et ne contient que les ions qui participent à la réaction ; les ions spectateurs sont des ions qui restent inchangés en solution.",
        "ru": "Сокращённое ионное уравнение показывает выпавший осадок или образовавшуюся воду и содержит только ионы, участвующие в реакции; ионы-наблюдатели — ионы, которые остаются в растворе без изменений.",
        "ar": "المعادلة الأيونية الصافية: معادلة تبيّن تكوّن الراسب الصلب أو الماء ولا تُكتب فيها إلا الأيونات المشاركة في التفاعل؛ أما الأيونات المتفرجة فأيونات تبقى في المحلول دون تغيير.",
        "zh": "净离子方程式表示生成的沉淀或水，只包含参加反应的离子；旁观离子是在溶液中保持不变的离子。",
        "ku": "Hevkêşeya îyonî ya net madeya hişk a ku dinişe an ava ku çêdibe nîşan dide û tenê îyonên ku beşdarî reaksiyonê dibin dihewîne; îyonên temaşevan ew îyon in ku di çareseriyê de bê guhertin dimînin."
      }
    },
    {
      "id": "u07-c07",
      "conceptA": {
        "tr": "Yanma Tepkimesi",
        "en": "Combustion Reaction",
        "de": "Verbrennungsreaktion",
        "fr": "Réaction de combustion",
        "ru": "Реакция горения",
        "ar": "تفاعل الاحتراق",
        "zh": "燃烧反应",
        "ku": "Reaksiyona şewitînê"
      },
      "conceptB": {
        "tr": "Asit-Baz Nötralleşmesi",
        "en": "Acid-Base Neutralization",
        "de": "Säure-Base-Neutralisation",
        "fr": "Neutralisation acido-basique",
        "ru": "Кислотно-основная нейтрализация",
        "ar": "تعادل الحمض والقاعدة",
        "zh": "酸碱中和",
        "ku": "Neutralîzasyona asîd-bazê"
      },
      "distinction": {
        "tr": "Yanma, bir maddenin O2 ile tepkimeye girmesidir (yükseltgenme-indirgenme); nötralleşme ise asidin H+ iyonu ile bazın OH- iyonunun birleşerek su oluşturmasıdır.",
        "en": "Combustion is the reaction of a substance with O2 (an oxidation-reduction reaction); neutralization is the combination of H+ from the acid and OH- from the base to form water.",
        "de": "Die Verbrennung ist die Reaktion eines Stoffes mit O2 (eine Redoxreaktion); bei der Neutralisation verbinden sich die H+-Ionen der Säure mit den OH--Ionen der Base zu Wasser.",
        "fr": "La combustion est la réaction d'une substance avec O2 (réaction d'oxydoréduction) ; la neutralisation est la combinaison des ions H+ de l'acide et OH- de la base pour former de l'eau.",
        "ru": "Реакция горения — взаимодействие вещества с O2 (окислительно-восстановительная реакция); кислотно-основная нейтрализация — соединение ионов H+ кислоты и OH- основания с образованием воды.",
        "ar": "تفاعل الاحتراق: تفاعل مادة مع O2 (تفاعل أكسدة واختزال)؛ أما تعادل الحمض والقاعدة فاتحاد أيونات H+ من الحمض مع أيونات OH- من القاعدة لتكوين الماء.",
        "zh": "燃烧反应是物质与 O2 发生的反应（氧化还原反应）；酸碱中和是酸的 H+ 与碱的 OH- 结合生成水。",
        "ku": "Reaksiyona şewitînê reaksiyona madeyekê bi O2 re ye (reaksiyoneke oksîdasyon-redûksiyonê); neutralîzasyona asîd-bazê jî yekbûna îyona H+ ya asîdê û îyona OH- ya bazê ye ku pê av çêdibe."
      }
    },
    {
      "id": "u07-c08",
      "conceptA": {
        "tr": "Mol Oranı",
        "en": "Mole Ratio",
        "de": "Stoffmengenverhältnis",
        "fr": "Rapport molaire",
        "ru": "Мольное соотношение",
        "ar": "النسبة المولية",
        "zh": "物质的量之比",
        "ku": "Rêjeya molan"
      },
      "conceptB": {
        "tr": "Kütle Oranı",
        "en": "Mass Ratio",
        "de": "Massenverhältnis",
        "fr": "Rapport massique",
        "ru": "Массовое соотношение",
        "ar": "النسبة الكتلية",
        "zh": "质量比",
        "ku": "Rêjeya girseyan"
      },
      "distinction": {
        "tr": "Mol oranı, denkleştirilmiş tepkimedeki katsayıların oranına eşittir; kütle oranı ise katsayılar mol kütleleriyle çarpılarak bulunur.",
        "en": "The mole ratio equals the ratio of the coefficients in the balanced equation; the mass ratio is found by multiplying the coefficients by the molar masses.",
        "de": "Das Stoffmengenverhältnis entspricht dem Verhältnis der Koeffizienten in der ausgeglichenen Gleichung; das Massenverhältnis erhält man, indem man die Koeffizienten mit den molaren Massen multipliziert.",
        "fr": "Le rapport molaire est égal au rapport des coefficients de l'équation équilibrée ; le rapport massique s'obtient en multipliant les coefficients par les masses molaires.",
        "ru": "Мольное соотношение равно отношению коэффициентов в уравненной реакции; массовое соотношение находят, умножая коэффициенты на молярные массы.",
        "ar": "النسبة المولية: نسبة المعاملات في المعادلة الموزونة؛ أما النسبة الكتلية فتُحسب بضرب المعاملات في الكتل المولية.",
        "zh": "物质的量之比等于配平的化学方程式中各物质的系数之比；质量比则由系数乘以各自的摩尔质量求得。",
        "ku": "Rêjeya molan bi rêjeya hevberên di hevkêşeya hevsengkirî de wekhev e; rêjeya girseyan jî bi lêxistina hevberan bi girseyên molî tê dîtin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u07-s01",
      "title": {
        "tr": "Stokiyometrik Problem Çözüm Adımları",
        "en": "Steps for Solving a Stoichiometry Problem",
        "de": "Schritte zur stöchiometrischen Problemlösung",
        "fr": "Étapes de résolution d'un problème de stœchiométrie",
        "ru": "Этапы решения стехиометрической задачи",
        "ar": "خطوات حل مسألة في الحسابات الكيميائية",
        "zh": "化学计量计算题的解题步骤",
        "ku": "Gavên çareserkirina pirsgirêkeke stokiyometrîk"
      },
      "steps": [
        {
          "tr": "Denkleştirilmiş tepkimeyi yaz",
          "en": "Write the balanced equation",
          "de": "Die ausgeglichene Reaktionsgleichung aufschreiben",
          "fr": "Écrire l'équation équilibrée",
          "ru": "Записать уравненную реакцию",
          "ar": "اكتب معادلة التفاعل الموزونة",
          "zh": "写出配平的化学方程式",
          "ku": "Hevkêşeya reaksiyonê ya hevsengkirî binivîse"
        },
        {
          "tr": "Verilen miktarları mole çevir",
          "en": "Convert the given amounts to moles",
          "de": "Gegebene Mengen in Mol umrechnen",
          "fr": "Convertir les quantités données en moles",
          "ru": "Перевести данные величины в количество вещества (моль)",
          "ar": "حوّل الكميات المعطاة إلى مولات",
          "zh": "将已知量换算成物质的量",
          "ku": "Mîqdarên dayî veguherîne molan"
        },
        {
          "tr": "Molü katsayıya bölüp sınırlayıcıyı bul",
          "en": "Divide each mole number by its coefficient to find the limiting reactant",
          "de": "Stoffmengen durch die Koeffizienten teilen und den limitierenden Reaktanten bestimmen",
          "fr": "Diviser le nombre de moles par le coefficient et trouver le réactif limitant",
          "ru": "Разделить количество вещества каждого реагента на его коэффициент и найти лимитирующий реагент",
          "ar": "اقسم عدد المولات على المعامل وحدد المادة المحددة",
          "zh": "用物质的量除以系数，找出限量反应物",
          "ku": "Hejmara molan li hevberê parve bike û reaktanta sînordar bibîne"
        },
        {
          "tr": "Sınırlayıcı üzerinden ürün molünü ve kütlesini hesapla",
          "en": "Calculate the moles and mass of product from the limiting reactant",
          "de": "Stoffmenge und Masse des Produkts über den limitierenden Reaktanten berechnen",
          "fr": "Calculer le nombre de moles et la masse de produit à partir du réactif limitant",
          "ru": "По лимитирующему реагенту рассчитать количество вещества и массу продукта",
          "ar": "احسب عدد مولات الناتج وكتلته اعتمادًا على المادة المحددة",
          "zh": "根据限量反应物计算产物的物质的量和质量",
          "ku": "Li gorî reaktanta sînordar mol û girseya hilberê hesab bike"
        }
      ]
    },
    {
      "id": "u07-s02",
      "title": {
        "tr": "Tepkime Denkleştirme Adımları",
        "en": "Steps for Balancing a Reaction",
        "de": "Schritte zum Ausgleichen einer Reaktionsgleichung",
        "fr": "Étapes pour équilibrer une réaction",
        "ru": "Расстановка коэффициентов в уравнении реакции",
        "ar": "خطوات موازنة التفاعل",
        "zh": "配平化学方程式的步骤",
        "ku": "Gavên hevsengkirina reaksiyonê"
      },
      "steps": [
        {
          "tr": "Girenlerin ve ürünlerin formülleri doğru yazılır",
          "en": "The formulas of the reactants and products are written correctly",
          "de": "Die Formeln der Edukte und Produkte werden korrekt aufgeschrieben",
          "fr": "Les formules des réactifs et des produits sont écrites correctement",
          "ru": "Правильно записывают формулы реагентов и продуктов",
          "ar": "تُكتب صيغ المواد المتفاعلة والنواتج كتابةً صحيحة",
          "zh": "正确写出反应物和生成物的化学式",
          "ku": "Formulên reaktantan û hilberan rast tên nivîsandin"
        },
        {
          "tr": "En çok atom içeren bileşikten başlanır",
          "en": "Start with the compound containing the most atoms",
          "de": "Man beginnt mit der Verbindung, die die meisten Atome enthält",
          "fr": "On commence par le composé qui contient le plus d'atomes",
          "ru": "Начинают с соединения, содержащего больше всего атомов",
          "ar": "يُبدأ بالمركب الذي يحتوي على أكبر عدد من الذرات",
          "zh": "从含原子数最多的化合物开始",
          "ku": "Ji pêkhateya ku herî zêde atom dihewîne dest pê dibe"
        },
        {
          "tr": "Genellikle önce metal ve ametal atomları, en son H ve O atomları eşitlenir",
          "en": "Usually metal and nonmetal atoms are balanced first, H and O atoms last",
          "de": "Meist werden zuerst Metall- und Nichtmetallatome, zuletzt H- und O-Atome ausgeglichen",
          "fr": "On équilibre généralement d'abord les atomes de métaux et de non-métaux, puis en dernier H et O",
          "ru": "Обычно сначала уравнивают атомы металлов и неметаллов, в последнюю очередь — H и O",
          "ar": "تُوازن عادةً ذرات الفلزات واللافلزات أولًا، وذرات H وO في النهاية",
          "zh": "通常先配平金属和非金属原子，最后配平 H 和 O 原子",
          "ku": "Piranî pêşî atomên metal û nemetalan, herî dawî jî atomên H û O tên wekhevkirin"
        },
        {
          "tr": "Katsayılar en küçük tam sayılara indirgenir",
          "en": "Reduce the coefficients to the smallest whole numbers",
          "de": "Die Koeffizienten werden auf die kleinsten ganzen Zahlen gekürzt",
          "fr": "Les coefficients sont réduits aux plus petits nombres entiers",
          "ru": "Коэффициенты приводят к наименьшим целым числам",
          "ar": "تُختزل المعاملات إلى أصغر أعداد صحيحة",
          "zh": "将系数化为最简整数",
          "ku": "Hevber heta hejmarên tam ên herî piçûk tên sadekirin"
        }
      ]
    },
    {
      "id": "u07-s03",
      "title": {
        "tr": "Çözünme-Çökelme Tepkimesi ve Net İyon Denklemi",
        "en": "Precipitation Reaction and Net Ionic Equation",
        "de": "Fällungsreaktion und Nettoionengleichung",
        "fr": "Réaction de précipitation et équation ionique nette",
        "ru": "Реакция осаждения и сокращённое ионное уравнение",
        "ar": "تفاعل الترسيب والمعادلة الأيونية الصافية",
        "zh": "沉淀反应与净离子方程式",
        "ku": "Reaksiyona helbûn-niştinê û hevkêşeya îyonî ya net"
      },
      "steps": [
        {
          "tr": "İki tuzun sulu çözeltisi karıştırılır",
          "en": "Aqueous solutions of two salts are mixed",
          "de": "Die wässrigen Lösungen zweier Salze werden gemischt",
          "fr": "Les solutions aqueuses de deux sels sont mélangées",
          "ru": "Смешивают водные растворы двух солей",
          "ar": "يُخلط محلولان مائيان لملحين",
          "zh": "将两种盐的水溶液混合",
          "ku": "Çareseriyên avî yên du xwêyan tên tevlihevkirin"
        },
        {
          "tr": "Katyon ve anyonlar yer değiştirir",
          "en": "The cations and anions exchange partners",
          "de": "Kationen und Anionen tauschen ihre Partner",
          "fr": "Les cations et les anions échangent leurs partenaires",
          "ru": "Катионы и анионы обмениваются партнёрами",
          "ar": "تتبادل الكاتيونات والأنيونات شركاءها",
          "zh": "阳离子和阴离子互相交换",
          "ku": "Katyon û anyon cihê xwe bi hev diguherin"
        },
        {
          "tr": "Suda az çözünen tuz katı hâlde çöker",
          "en": "The sparingly soluble salt precipitates as a solid",
          "de": "Das schwerlösliche Salz fällt als Feststoff aus",
          "fr": "Le sel peu soluble précipite sous forme solide",
          "ru": "Малорастворимая соль выпадает в осадок в виде твёрдого вещества",
          "ar": "يترسب الملح القليل الذوبان على هيئة مادة صلبة",
          "zh": "难溶的盐以固体形式沉淀出来",
          "ku": "Xwêya ku di avê de kêm dihele wek madeya hişk dinişe"
        },
        {
          "tr": "Çöken katıyı gösteren net iyon denklemi yazılır",
          "en": "The net ionic equation showing the precipitated solid is written",
          "de": "Die Nettoionengleichung, die den ausgefällten Feststoff zeigt, wird aufgestellt",
          "fr": "On écrit l'équation ionique nette qui montre le solide précipité",
          "ru": "Записывают сокращённое ионное уравнение, показывающее выпавший осадок",
          "ar": "تُكتب المعادلة الأيونية الصافية التي تبيّن المادة الصلبة المترسبة",
          "zh": "写出表示沉淀的净离子方程式",
          "ku": "Hevkêşeya îyonî ya net a ku madeya hişk a niştî nîşan dide tê nivîsandin"
        }
      ]
    },
    {
      "id": "u07-s04",
      "title": {
        "tr": "Yüzde Verim Belirleme",
        "en": "Determining Percent Yield",
        "de": "Bestimmung der prozentualen Ausbeute",
        "fr": "Détermination du pourcentage de rendement",
        "ru": "Определение выхода продукта",
        "ar": "تحديد النسبة المئوية للمردود",
        "zh": "百分产率的测定",
        "ku": "Diyarkirina berhema ji sedî"
      },
      "steps": [
        {
          "tr": "Tepkime gerçekleştirilir; oluşan ürün karışımdan ayrılıp kurutulur",
          "en": "The reaction is carried out; the product formed is separated from the mixture and dried",
          "de": "Die Reaktion wird durchgeführt; das gebildete Produkt wird aus dem Gemisch abgetrennt und getrocknet",
          "fr": "On réalise la réaction ; le produit formé est séparé du mélange puis séché",
          "ru": "Проводят реакцию; образовавшийся продукт отделяют от смеси и высушивают",
          "ar": "يُجرى التفاعل، ثم يُفصل الناتج المتكوّن عن الخليط ويُجفف",
          "zh": "进行反应；将生成的产物从混合物中分离出来并干燥",
          "ku": "Reaksiyon tê pêkanîn; hilbera çêbûyî ji tevliheviyê tê veqetandin û tê ziwakirin"
        },
        {
          "tr": "Kuru ürün tartılarak gerçek verim belirlenir",
          "en": "The dry product is weighed to determine the actual yield",
          "de": "Das trockene Produkt wird gewogen, um die tatsächliche Ausbeute zu bestimmen",
          "fr": "Le produit sec est pesé pour déterminer le rendement réel",
          "ru": "Сухой продукт взвешивают и определяют практический выход",
          "ar": "يُوزن الناتج الجاف لتحديد المردود الفعلي",
          "zh": "称量干燥的产物，确定实际产量",
          "ku": "Hilbera ziwa tê kêşan û bi vî awayî berhema rastîn tê diyarkirin"
        },
        {
          "tr": "Gerçek verim, hesaplanan teorik verime bölünür",
          "en": "The actual yield is divided by the calculated theoretical yield",
          "de": "Die tatsächliche Ausbeute wird durch die berechnete theoretische Ausbeute geteilt",
          "fr": "Le rendement réel est divisé par le rendement théorique calculé",
          "ru": "Практический выход делят на рассчитанный теоретический выход",
          "ar": "يُقسم المردود الفعلي على المردود النظري المحسوب",
          "zh": "用实际产量除以计算出的理论产量",
          "ku": "Berhema rastîn li berhema teorîk a hesabkirî tê parvekirin"
        },
        {
          "tr": "Bölüm 100 ile çarpılarak yüzde verim bulunur",
          "en": "The quotient is multiplied by 100 to give the percent yield",
          "de": "Der Quotient wird mit 100 multipliziert und ergibt die prozentuale Ausbeute",
          "fr": "Le quotient est multiplié par 100 pour obtenir le pourcentage de rendement",
          "ru": "Частное умножают на 100 и получают выход продукта в процентах",
          "ar": "يُضرب ناتج القسمة في 100 للحصول على النسبة المئوية للمردود",
          "zh": "将商乘以 100 得到百分产率",
          "ku": "Encama parvekirinê bi 100 tê lêxistin û berhema ji sedî tê dîtin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u07-twin01",
      "stem": {
        "tr": "C3H8 + 5 O2 -> 3 CO2 + 4 H2O tepkimesine göre 0,2 mol C3H8'in tamamen yanması için normal koşullarda en az kaç litre O2 gazı gereklidir?",
        "en": "According to the reaction C3H8 + 5 O2 -> 3 CO2 + 4 H2O, what is the minimum volume in litres of O2 gas, at standard conditions (STP), needed for the complete combustion of 0.2 mol C3H8?",
        "de": "Wie viele Liter O2-Gas werden gemäß der Reaktion C3H8 + 5 O2 -> 3 CO2 + 4 H2O unter Normalbedingungen mindestens für die vollständige Verbrennung von 0,2 mol C3H8 benötigt?",
        "fr": "D'après la réaction C3H8 + 5 O2 -> 3 CO2 + 4 H2O, quel volume minimal de dioxygène O2, en litres, mesuré dans les conditions normales, faut-il pour la combustion complète de 0,2 mol de C3H8 ?",
        "ru": "Какой наименьший объём O2 (в литрах, н. у.) необходим для полного сгорания 0,2 моль C3H8 по реакции C3H8 + 5 O2 -> 3 CO2 + 4 H2O?",
        "ar": "وفقًا للتفاعل C3H8 + 5 O2 -> 3 CO2 + 4 H2O، ما أقل حجم من غاز O2 باللتر يلزم في الظروف القياسية للاحتراق الكامل لـ 0.2 mol من C3H8؟",
        "zh": "根据反应 C3H8 + 5 O2 -> 3 CO2 + 4 H2O，0.2 mol C3H8 完全燃烧至少需要标准状况下多少升 O2？",
        "ku": "Li gorî reaksiyona C3H8 + 5 O2 -> 3 CO2 + 4 H2O, ji bo şewitîna tevahî ya 0,2 mol C3H8 di şertên normal (ŞN) de herî kêm çend lître gaza O2 hewce ye?"
      },
      "options": [
        {
          "tr": "2,24 L",
          "en": "2.24 L",
          "de": "2,24 L",
          "fr": "2,24 L",
          "ru": "2,24 л",
          "ar": "2.24 L",
          "zh": "2.24 L",
          "ku": "2,24 L"
        },
        {
          "tr": "5,6 L",
          "en": "5.6 L",
          "de": "5,6 L",
          "fr": "5,6 L",
          "ru": "5,6 л",
          "ar": "5.6 L",
          "zh": "5.6 L",
          "ku": "5,6 L"
        },
        {
          "tr": "11,2 L",
          "en": "11.2 L",
          "de": "11,2 L",
          "fr": "11,2 L",
          "ru": "11,2 л",
          "ar": "11.2 L",
          "zh": "11.2 L",
          "ku": "11,2 L"
        },
        {
          "tr": "22,4 L",
          "en": "22.4 L",
          "de": "22,4 L",
          "fr": "22,4 L",
          "ru": "22,4 л",
          "ar": "22.4 L",
          "zh": "22.4 L",
          "ku": "22,4 L"
        },
        {
          "tr": "44,8 L",
          "en": "44.8 L",
          "de": "44,8 L",
          "fr": "44,8 L",
          "ru": "44,8 л",
          "ar": "44.8 L",
          "zh": "44.8 L",
          "ku": "44,8 L"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "1 mol C3H8 için 5 mol O2 gerekir. 0,2 mol C3H8 için 0,2 x 5 = 1,0 mol O2 gerekir. Normal koşullarda 1 mol gaz 22,4 L hacim kaplar; gereken O2 22,4 L'dir.",
        "en": "1 mol C3H8 needs 5 mol O2, so 0.2 mol C3H8 needs 0.2 x 5 = 1.0 mol O2. At STP 1 mol of gas occupies 22.4 L, so 22.4 L of O2 is needed.",
        "de": "Für 1 mol C3H8 werden 5 mol O2 benötigt, für 0,2 mol C3H8 also 0,2 x 5 = 1,0 mol O2. Unter Normalbedingungen nimmt 1 mol Gas 22,4 L ein; benötigt werden 22,4 L O2.",
        "fr": "1 mol de C3H8 nécessite 5 mol de O2 ; 0,2 mol de C3H8 nécessite donc 0,2 x 5 = 1,0 mol de O2. Dans les conditions normales, 1 mol de gaz occupe 22,4 L : il faut 22,4 L de O2.",
        "ru": "На 1 моль C3H8 нужно 5 моль O2, значит на 0,2 моль C3H8 — 0,2 x 5 = 1,0 моль O2. При н. у. 1 моль газа занимает 22,4 л, поэтому нужно 22,4 л O2.",
        "ar": "يلزم 5 mol من O2 لكل 1 mol من C3H8، إذن يلزم 0.2 × 5 = 1.0 mol من O2. وفي الظروف القياسية يشغل 1 mol من الغاز 22.4 L، فالمطلوب 22.4 L من O2.",
        "zh": "1 mol C3H8 需要 5 mol O2，因此 0.2 mol C3H8 需要 0.2 x 5 = 1.0 mol O2。标准状况下 1 mol 气体体积为 22.4 L，故需 O2 22.4 L。",
        "ku": "Ji bo 1 mol C3H8 5 mol O2 hewce ye; ji ber vê ji bo 0,2 mol C3H8 0,2 x 5 = 1,0 mol O2 hewce ye. Di şertên normal de 1 mol gaz 22,4 L qebare digire; ji ber vê 22,4 L O2 hewce ye."
      }
    },
    {
      "id": "u07-twin02",
      "stem": {
        "tr": "AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) tepkimesi için net iyon denklemi aşağıdakilerden hangisidir?",
        "en": "Which of the following is the net ionic equation for the reaction AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq)?",
        "de": "Welche der folgenden ist die Nettoionengleichung für die Reaktion AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq)?",
        "fr": "Laquelle des formules suivantes est l'équation ionique nette de la réaction AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq) ?",
        "ru": "Какое из приведённых уравнений является сокращённым ионным уравнением реакции AgNO3(р-р) + KBr(р-р) -> AgBr(тв) + KNO3(р-р)?",
        "ar": "أي مما يلي يمثل المعادلة الأيونية الصافية للتفاعل AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq)؟",
        "zh": "反应 AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq) 的净离子方程式是下列哪一项？",
        "ku": "Kîjan ji yên jêrîn hevkêşeya îyonî ya net a reaksiyona AgNO3(aq) + KBr(aq) -> AgBr(s) + KNO3(aq) e?"
      },
      "options": [
        {
          "tr": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "en": "Ag+(aq) + Br-(aq) -> AgBr(s)",
          "de": "Ag+(aq) + Br-(aq) -> AgBr(s)",
          "fr": "Ag+(aq) + Br-(aq) -> AgBr(s)",
          "ru": "Ag+(р-р) + Br-(р-р) -> AgBr(тв)",
          "ar": "Ag+(aq) + Br-(aq) -> AgBr(s)",
          "zh": "Ag+(aq) + Br-(aq) -> AgBr(s)",
          "ku": "Ag+(aq) + Br-(aq) -> AgBr(s)"
        },
        {
          "tr": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "en": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "de": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "fr": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "ru": "K+(р-р) + NO3-(р-р) -> KNO3(р-р)",
          "ar": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "zh": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "ku": "K+(aq) + NO3-(aq) -> KNO3(aq)"
        },
        {
          "tr": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "en": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "de": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "fr": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "ru": "AgNO3(р-р) -> Ag+(р-р) + NO3-(р-р)",
          "ar": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "zh": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "ku": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)"
        },
        {
          "tr": "K+(aq) + Br-(aq) -> KBr(k)",
          "en": "K+(aq) + Br-(aq) -> KBr(s)",
          "de": "K+(aq) + Br-(aq) -> KBr(s)",
          "fr": "K+(aq) + Br-(aq) -> KBr(s)",
          "ru": "K+(р-р) + Br-(р-р) -> KBr(тв)",
          "ar": "K+(aq) + Br-(aq) -> KBr(s)",
          "zh": "K+(aq) + Br-(aq) -> KBr(s)",
          "ku": "K+(aq) + Br-(aq) -> KBr(s)"
        },
        {
          "tr": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "en": "AgBr(s) -> Ag+(aq) + Br-(aq)",
          "de": "AgBr(s) -> Ag+(aq) + Br-(aq)",
          "fr": "AgBr(s) -> Ag+(aq) + Br-(aq)",
          "ru": "AgBr(тв) -> Ag+(р-р) + Br-(р-р)",
          "ar": "AgBr(s) -> Ag+(aq) + Br-(aq)",
          "zh": "AgBr(s) -> Ag+(aq) + Br-(aq)",
          "ku": "AgBr(s) -> Ag+(aq) + Br-(aq)"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Çözünme-çökelme tepkimelerinde net iyon denklemi yalnızca çökeltiyi oluşturan iyonlarla yazılır: Ag+(aq) + Br-(aq) -> AgBr(k). K+ ve NO3- iyonları çözeltide değişmeden kalan seyirci iyonlardır; bu yüzden net iyon denkleminde yer almaz.",
        "en": "In a dissolution-precipitation reaction the net ionic equation is written only with the ions that form the precipitate: Ag+(aq) + Br-(aq) -> AgBr(s). K+ and NO3- are spectator ions that stay unchanged in solution, so they do not appear in the net ionic equation.",
        "de": "Bei einer Lösungs-Fällungs-Reaktion wird die Nettoionengleichung nur mit den Ionen geschrieben, die den Niederschlag bilden: Ag+(aq) + Br-(aq) -> AgBr(s). K+ und NO3- sind Zuschauerionen, die unverändert in Lösung bleiben, und erscheinen deshalb nicht in der Nettoionengleichung.",
        "fr": "Dans une réaction de dissolution-précipitation, l'équation ionique nette s'écrit uniquement avec les ions qui forment le précipité : Ag+(aq) + Br-(aq) -> AgBr(s). K+ et NO3- sont des ions spectateurs qui restent inchangés en solution ; ils ne figurent donc pas dans l'équation ionique nette.",
        "ru": "В реакции растворения-осаждения сокращённое ионное уравнение записывают только с ионами, образующими осадок: Ag+(р-р) + Br-(р-р) -> AgBr(тв). Ионы K+ и NO3- — ионы-наблюдатели: они остаются в растворе без изменений и поэтому в сокращённое ионное уравнение не входят.",
        "ar": "في تفاعل الذوبان والترسيب تُكتب المعادلة الأيونية الصافية بالأيونات التي تكوّن الراسب فقط: Ag+(aq) + Br-(aq) -> AgBr(s). أما K+ وNO3- فأيونان متفرجان يبقيان في المحلول دون تغيير، ولذلك لا يظهران في المعادلة الأيونية الصافية.",
        "zh": "在沉淀反应中，净离子方程式只用生成沉淀的离子来书写：Ag+(aq) + Br-(aq) -> AgBr(s)。K+ 和 NO3- 是留在溶液中不发生变化的旁观离子，因此不出现在净离子方程式中。",
        "ku": "Di reaksiyonên helbûn-niştinê de hevkêşeya îyonî ya net tenê bi îyonên ku niştekê çêdikin tê nivîsandin: Ag+(aq) + Br-(aq) -> AgBr(s). K+ û NO3- îyonên temaşevan in ku di çareseriyê de bê guhertin dimînin; ji ber vê yekê di hevkêşeya îyonî ya net de cih nagirin."
      }
    },
    {
      "id": "u07-twin03",
      "stem": {
        "tr": "a Al(k) + b O2(g) -> c Al2O3(k) tepkimesi en küçük tam sayılarla denkleştirildiğinde a + b + c toplamı kaç olur?",
        "en": "When the reaction a Al(s) + b O2(g) -> c Al2O3(s) is balanced with the smallest whole numbers, what is the sum a + b + c?",
        "de": "Wenn die Reaktion a Al(s) + b O2(g) -> c Al2O3(s) mit den kleinsten ganzen Zahlen ausgeglichen wird, wie groß ist die Summe a + b + c?",
        "fr": "Lorsque la réaction a Al(s) + b O2(g) -> c Al2O3(s) est équilibrée avec les plus petits nombres entiers, que vaut la somme a + b + c ?",
        "ru": "Чему равна сумма a + b + c, если уравнение a Al(тв) + b O2(г) -> c Al2O3(тв) уравнять наименьшими целыми коэффициентами?",
        "ar": "عند موازنة التفاعل a Al(s) + b O2(g) -> c Al2O3(s) بأصغر أعداد صحيحة، كم يساوي المجموع a + b + c؟",
        "zh": "用最小整数配平反应 a Al(s) + b O2(g) -> c Al2O3(s) 后，a + b + c 之和是多少？",
        "ku": "Dema reaksiyona a Al(s) + b O2(g) -> c Al2O3(s) bi hejmarên tam ên herî piçûk tê hevsengkirin, berhevoka a + b + c çend e?"
      },
      "options": [
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
          "tr": "7",
          "en": "7",
          "de": "7",
          "fr": "7",
          "ru": "7",
          "ar": "7",
          "zh": "7",
          "ku": "7"
        },
        {
          "tr": "9",
          "en": "9",
          "de": "9",
          "fr": "9",
          "ru": "9",
          "ar": "9",
          "zh": "9",
          "ku": "9"
        },
        {
          "tr": "10",
          "en": "10",
          "de": "10",
          "fr": "10",
          "ru": "10",
          "ar": "10",
          "zh": "10",
          "ku": "10"
        },
        {
          "tr": "12",
          "en": "12",
          "de": "12",
          "fr": "12",
          "ru": "12",
          "ar": "12",
          "zh": "12",
          "ku": "12"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Sağda Al2O3'te 3 O atomu, solda O2'de 2 O atomu vardır; O sayısını eşitlemek için ekok 6 alınır: 3 O2 ve 2 Al2O3. Sağda 4 Al atomu olduğundan sola 4 Al yazılır: 4Al + 3O2 -> 2Al2O3. Toplam 4 + 3 + 2 = 9 olur. 2Al + 3O2 -> 2Al2O3 yazıp 7 bulan öğrenci Al atomlarını eşitlemeyi unutmuş olur.",
        "en": "Al2O3 on the right has 3 O atoms and O2 on the left has 2; to equalise O take the LCM 6: 3 O2 and 2 Al2O3. The right side then has 4 Al atoms, so write 4 Al on the left: 4Al + 3O2 -> 2Al2O3. The sum is 4 + 3 + 2 = 9. A student who writes 2Al + 3O2 -> 2Al2O3 and gets 7 has forgotten to balance Al.",
        "de": "Rechts enthält Al2O3 3 O-Atome, links O2 2 O-Atome; zum Ausgleich nimmt man das kgV 6: 3 O2 und 2 Al2O3. Rechts stehen dann 4 Al-Atome, also links 4 Al: 4Al + 3O2 -> 2Al2O3. Summe 4 + 3 + 2 = 9. Wer 2Al + 3O2 -> 2Al2O3 schreibt und 7 erhält, hat vergessen, Al auszugleichen.",
        "fr": "À droite, Al2O3 contient 3 atomes O et à gauche O2 en contient 2 ; pour égaliser O on prend le PPCM 6 : 3 O2 et 2 Al2O3. La droite contient alors 4 atomes Al, d'où 4 Al à gauche : 4Al + 3O2 -> 2Al2O3. Somme : 4 + 3 + 2 = 9. Écrire 2Al + 3O2 -> 2Al2O3 (somme 7) revient à oublier d'équilibrer Al.",
        "ru": "Справа в Al2O3 3 атома O, слева в O2 — 2; для уравнивания берём НОК 6: 3 O2 и 2 Al2O3. Тогда справа 4 атома Al, значит слева 4 Al: 4Al + 3O2 -> 2Al2O3. Сумма 4 + 3 + 2 = 9. Кто пишет 2Al + 3O2 -> 2Al2O3 и получает 7, забыл уравнять Al.",
        "ar": "في الطرف الأيمن يحتوي Al2O3 على 3 ذرات O، وفي الأيسر يحتوي O2 على ذرتين؛ ولموازنة O نأخذ المضاعف المشترك الأصغر 6: ‏3 O2 و2 Al2O3. يصبح في اليمين 4 ذرات Al فنكتب 4 Al في اليسار: 4Al + 3O2 -> 2Al2O3. المجموع 4 + 3 + 2 = 9. ومن يكتب 2Al + 3O2 -> 2Al2O3 فيحصل على 7 فقد نسي موازنة Al.",
        "zh": "右边 Al2O3 含 3 个 O 原子，左边 O2 含 2 个；取最小公倍数 6：3 O2 和 2 Al2O3。此时右边有 4 个 Al 原子，左边写 4 Al：4Al + 3O2 -> 2Al2O3。总和 4 + 3 + 2 = 9。写成 2Al + 3O2 -> 2Al2O3 得 7 的学生忘了配平 Al。",
        "ku": "Li rastê di Al2O3 de 3 atomên O, li çepê di O2 de 2 atomên O hene; ji bo wekhevkirina O pirjimara hevpar a herî piçûk, 6, tê girtin: 3 O2 û 2 Al2O3. Wê demê li rastê 4 atomên Al hene, ji ber vê li çepê 4 Al tê nivîsandin: 4Al + 3O2 -> 2Al2O3. Berhevok 4 + 3 + 2 = 9 e. Xwendekarê ku 2Al + 3O2 -> 2Al2O3 dinivîse û 7 dibîne, wekhevkirina atomên Al ji bîr kiriye."
      }
    },
    {
      "id": "u07-twin04",
      "stem": {
        "tr": "Aşağıda üç tepkime ve bunlarla ilgili birer yargı verilmiştir.\nI. CaCO3(k) -> CaO(k) + CO2(g) tepkimesi bir analiz (ayrışma) tepkimesidir.\nII. 2H2(g) + O2(g) -> 2H2O(s) tepkimesi hem sentez hem de yanma tepkimesidir.\nIII. HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(s) tepkimesinde Na+ ve Cl- iyonları seyirci iyonlardır.\nBu yargılardan hangileri doğrudur?",
        "en": "Three reactions and one statement about each are given below.\nI. CaCO3(s) -> CaO(s) + CO2(g) is an analysis (decomposition) reaction.\nII. 2H2(g) + O2(g) -> 2H2O(l) is both a synthesis and a combustion reaction.\nIII. In HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l), Na+ and Cl- are spectator ions.\nWhich of these statements are correct?",
        "de": "Unten sind drei Reaktionen mit je einer Aussage angegeben.\nI. CaCO3(s) -> CaO(s) + CO2(g) ist eine Zersetzungsreaktion (Analyse).\nII. 2H2(g) + O2(g) -> 2H2O(l) ist sowohl eine Synthese als auch eine Verbrennung.\nIII. Bei HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) sind Na+ und Cl- Zuschauerionen.\nWelche dieser Aussagen sind richtig?",
        "fr": "Trois réactions et une affirmation sur chacune sont données ci-dessous.\nI. CaCO3(s) -> CaO(s) + CO2(g) est une réaction de décomposition (analyse).\nII. 2H2(g) + O2(g) -> 2H2O(l) est à la fois une synthèse et une combustion.\nIII. Dans HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l), Na+ et Cl- sont des ions spectateurs.\nLesquelles de ces affirmations sont correctes ?",
        "ru": "Ниже даны три реакции и по одному утверждению о каждой.\nI. CaCO3(тв) -> CaO(тв) + CO2(г) — реакция разложения.\nII. 2H2(г) + O2(г) -> 2H2O(ж) — одновременно реакция соединения и горения.\nIII. В реакции HCl(р-р) + NaOH(р-р) -> NaCl(р-р) + H2O(ж) ионы Na+ и Cl- являются ионами-наблюдателями.\nКакие из этих утверждений верны?",
        "ar": "فيما يلي ثلاثة تفاعلات وعبارة تتعلق بكل منها:\nI. التفاعل CaCO3(s) -> CaO(s) + CO2(g) تفاعل تفكك (تحليل).\nII. التفاعل 2H2(g) + O2(g) -> 2H2O(l) تفاعل اتحاد واحتراق في آن واحد.\nIII. في التفاعل HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) يكون Na+ وCl- أيونين متفرجين.\nأي هذه العبارات صحيحة؟",
        "zh": "下面给出三个反应及关于每个反应的一个说法：\nI. CaCO3(s) -> CaO(s) + CO2(g) 是分解反应。\nII. 2H2(g) + O2(g) -> 2H2O(l) 既是化合反应又是燃烧反应。\nIII. 在 HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) 中，Na+ 和 Cl- 是旁观离子。\n以上说法中哪些正确？",
        "ku": "Li jêr sê reaksiyon û li ser her yekê gotinek hatine dayîn.\nI. CaCO3(s) -> CaO(s) + CO2(g) reaksiyoneke analîzê (perçebûnê) ye.\nII. 2H2(g) + O2(g) -> 2H2O(l) hem reaksiyona sentezê hem jî ya şewitînê ye.\nIII. Di HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) de îyonên Na+ û Cl- îyonên temaşevan in.\nKîjan ji van gotinan rast in?"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "I doğrudur: tek bir bileşik (CaCO3) ısıyla iki basit maddeye ayrışmaktadır. II doğrudur: iki element birleşerek tek bileşik oluşturduğu için sentez, H2 maddesi O2 ile tepkimeye girdiği için yanmadır. III doğrudur: net iyon denklemi H+(aq) + OH-(aq) -> H2O(s) olup Na+ ve Cl- çözeltide değişmeden kalır. Üç yargı da doğrudur.",
        "en": "I is correct: a single compound (CaCO3) splits into two simpler substances on heating. II is correct: two elements combine into one compound (synthesis) and H2 reacts with O2 (combustion). III is correct: the net ionic equation is H+(aq) + OH-(aq) -> H2O(l), and Na+ and Cl- remain unchanged in solution. All three statements are correct.",
        "de": "I ist richtig: Eine einzige Verbindung (CaCO3) zerfällt beim Erhitzen in zwei einfachere Stoffe. II ist richtig: Zwei Elemente vereinigen sich zu einer Verbindung (Synthese), und H2 reagiert mit O2 (Verbrennung). III ist richtig: Die Netto-Ionengleichung lautet H+(aq) + OH-(aq) -> H2O(l); Na+ und Cl- bleiben unverändert in Lösung. Alle drei Aussagen sind richtig.",
        "fr": "I est correcte : un seul composé (CaCO3) se décompose par chauffage en deux substances plus simples. II est correcte : deux éléments s'unissent en un composé (synthèse) et H2 réagit avec O2 (combustion). III est correcte : l'équation ionique nette est H+(aq) + OH-(aq) -> H2O(l) ; Na+ et Cl- restent inchangés en solution. Les trois affirmations sont correctes.",
        "ru": "I верно: одно соединение (CaCO3) при нагревании распадается на два более простых вещества. II верно: два простых вещества соединяются в одно (реакция соединения), и H2 реагирует с O2 (горение). III верно: сокращённое ионное уравнение H+(р-р) + OH-(р-р) -> H2O(ж), а Na+ и Cl- остаются в растворе без изменений. Верны все три утверждения.",
        "ar": "العبارة I صحيحة: مركب واحد (CaCO3) يتفكك بالتسخين إلى مادتين أبسط. العبارة II صحيحة: يتحد عنصران لتكوين مركب واحد (اتحاد) ويتفاعل H2 مع O2 (احتراق). العبارة III صحيحة: المعادلة الأيونية الصافية H+(aq) + OH-(aq) -> H2O(l)، ويبقى Na+ وCl- دون تغيير في المحلول. العبارات الثلاث صحيحة.",
        "zh": "I 正确：一种化合物(CaCO3)受热分解成两种较简单的物质。II 正确：两种单质结合成一种化合物（化合），且 H2 与 O2 反应（燃烧）。III 正确：净离子方程式为 H+(aq) + OH-(aq) -> H2O(l)，Na+ 和 Cl- 在溶液中保持不变。三个说法都正确。",
        "ku": "I rast e: pêkhateyek tenê (CaCO3) bi germê dibe du madeyên hêsantir. II rast e: du element dibin yek û pêkhateyek çêdikin (sentez), H2 jî bi O2 re dikeve reaksiyonê (şewitîn). III rast e: hevkêşeya îyonî ya net H+(aq) + OH-(aq) -> H2O(l) e; Na+ û Cl- di çareseriyê de bê guhertin dimînin. Her sê gotin rast in."
      }
    },
    {
      "id": "u07-twin05",
      "stem": {
        "tr": "2KClO3(k) -> 2KCl(k) + 3O2(g) tepkimesine göre 24,5 gram KClO3 katısı tamamen ayrıştığında kaç gram O2 gazı oluşur? (KClO3 = 122,5 g/mol, O = 16 g/mol)",
        "en": "According to 2KClO3(s) -> 2KCl(s) + 3O2(g), how many grams of O2 gas form when 24.5 g of solid KClO3 decomposes completely? (KClO3 = 122.5 g/mol, O = 16 g/mol)",
        "de": "Wie viel Gramm O2-Gas entstehen gemäß 2KClO3(s) -> 2KCl(s) + 3O2(g), wenn 24,5 g festes KClO3 vollständig zersetzt werden? (KClO3 = 122,5 g/mol, O = 16 g/mol)",
        "fr": "D'après 2KClO3(s) -> 2KCl(s) + 3O2(g), quelle masse de dioxygène O2 se forme lorsque 24,5 g de KClO3 solide se décomposent complètement ? (KClO3 = 122,5 g/mol, O = 16 g/mol)",
        "ru": "Сколько граммов O2 образуется по реакции 2KClO3(тв) -> 2KCl(тв) + 3O2(г) при полном разложении 24,5 г KClO3? (KClO3 = 122,5 г/моль, O = 16 г/моль)",
        "ar": "وفقًا للتفاعل 2KClO3(s) -> 2KCl(s) + 3O2(g)، كم غرامًا من غاز O2 يتكون عند التفكك الكامل لـ 24.5 g من KClO3 الصلب؟ (KClO3 = 122.5 g/mol، O = 16 g/mol)",
        "zh": "根据 2KClO3(s) -> 2KCl(s) + 3O2(g)，24.5 g 固体 KClO3 完全分解生成多少克 O2？(KClO3 = 122.5 g/mol，O = 16 g/mol)",
        "ku": "Li gorî 2KClO3(s) -> 2KCl(s) + 3O2(g), dema 24,5 g KClO3-ya hişk bi tevahî perçe dibe, çend gram gaza O2 çêdibe? (KClO3 = 122,5 g/mol, O = 16 g/mol)"
      },
      "options": [
        {
          "tr": "9,6 g",
          "en": "9.6 g",
          "de": "9,6 g",
          "fr": "9,6 g",
          "ru": "9,6 г",
          "ar": "9.6 g",
          "zh": "9.6 g",
          "ku": "9,6 g"
        },
        {
          "tr": "12,8 g",
          "en": "12.8 g",
          "de": "12,8 g",
          "fr": "12,8 g",
          "ru": "12,8 г",
          "ar": "12.8 g",
          "zh": "12.8 g",
          "ku": "12,8 g"
        },
        {
          "tr": "19,2 g",
          "en": "19.2 g",
          "de": "19,2 g",
          "fr": "19,2 g",
          "ru": "19,2 г",
          "ar": "19.2 g",
          "zh": "19.2 g",
          "ku": "19,2 g"
        },
        {
          "tr": "24,5 g",
          "en": "24.5 g",
          "de": "24,5 g",
          "fr": "24,5 g",
          "ru": "24,5 г",
          "ar": "24.5 g",
          "zh": "24.5 g",
          "ku": "24,5 g"
        },
        {
          "tr": "28,8 g",
          "en": "28.8 g",
          "de": "28,8 g",
          "fr": "28,8 g",
          "ru": "28,8 г",
          "ar": "28.8 g",
          "zh": "28.8 g",
          "ku": "28,8 g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n(KClO3) = 24,5 / 122,5 = 0,2 mol. Denkleme göre 2 mol KClO3'ten 3 mol O2 oluşur: n(O2) = 0,2 x 3/2 = 0,3 mol. m(O2) = 0,3 x 32 = 9,6 g. 24,5 g cevabı KClO3'ün tamamının O2'ye dönüştüğünü sanmaktan (KCl de oluşur), 19,2 g ise O atomlarının mol sayısını (0,6 mol) O2'nin mol kütlesiyle çarpmaktan gelir.",
        "en": "n(KClO3) = 24.5 / 122.5 = 0.2 mol. By the equation 2 mol KClO3 give 3 mol O2: n(O2) = 0.2 x 3/2 = 0.3 mol. m(O2) = 0.3 x 32 = 9.6 g. The answer 24.5 g comes from assuming all the KClO3 turns into O2 (KCl also forms), and 19.2 g from multiplying the moles of O atoms (0.6 mol) by the molar mass of O2.",
        "de": "n(KClO3) = 24,5 / 122,5 = 0,2 mol. Laut Gleichung liefern 2 mol KClO3 3 mol O2: n(O2) = 0,2 x 3/2 = 0,3 mol. m(O2) = 0,3 x 32 = 9,6 g. 24,5 g erhält, wer annimmt, das ganze KClO3 werde zu O2 (es entsteht auch KCl); 19,2 g erhält, wer die Stoffmenge der O-Atome (0,6 mol) mit der molaren Masse von O2 multipliziert.",
        "fr": "n(KClO3) = 24,5 / 122,5 = 0,2 mol. D'après l'équation, 2 mol de KClO3 donnent 3 mol de O2 : n(O2) = 0,2 x 3/2 = 0,3 mol. m(O2) = 0,3 x 32 = 9,6 g. La réponse 24,5 g suppose que tout le KClO3 devient O2 (il se forme aussi KCl) ; 19,2 g vient de la multiplication de la quantité d'atomes O (0,6 mol) par la masse molaire de O2.",
        "ru": "n(KClO3) = 24,5 / 122,5 = 0,2 моль. По уравнению из 2 моль KClO3 образуется 3 моль O2: n(O2) = 0,2 x 3/2 = 0,3 моль. m(O2) = 0,3 x 32 = 9,6 г. Ответ 24,5 г получается, если считать, что весь KClO3 превращается в O2 (образуется и KCl), а 19,2 г — если число моль атомов O (0,6 моль) умножить на молярную массу O2.",
        "ar": "n(KClO3) = 24.5 / 122.5 = 0.2 mol. وفق المعادلة ينتج 3 mol من O2 من 2 mol من KClO3: n(O2) = 0.2 × 3/2 = 0.3 mol، وm(O2) = 0.3 × 32 = 9.6 g. أما الجواب 24.5 g فيأتي من افتراض تحول KClO3 كله إلى O2 (مع أن KCl يتكون أيضًا)، والجواب 19.2 g من ضرب عدد مولات ذرات O ‏(0.6 mol) في الكتلة المولية لـ O2.",
        "zh": "n(KClO3) = 24.5 / 122.5 = 0.2 mol。由方程式 2 mol KClO3 生成 3 mol O2：n(O2) = 0.2 x 3/2 = 0.3 mol，m(O2) = 0.3 x 32 = 9.6 g。得 24.5 g 是误以为 KClO3 全部变成 O2 (还生成 KCl)；得 19.2 g 是把 O 原子的物质的量(0.6 mol)乘以 O2 的摩尔质量。",
        "ku": "n(KClO3) = 24,5 / 122,5 = 0,2 mol. Li gorî hevkêşeyê ji 2 mol KClO3 3 mol O2 çêdibe: n(O2) = 0,2 x 3/2 = 0,3 mol. m(O2) = 0,3 x 32 = 9,6 g. Bersiva 24,5 g ji wê ramanê tê ku hemû KClO3 vediguhere O2 (lê KCl jî çêdibe); 19,2 g jî ji lêxistina hejmara molên atomên O (0,6 mol) bi girseya molî ya O2 tê."
      }
    },
    {
      "id": "u07-twin06",
      "stem": {
        "tr": "2X + 7O2 -> 4CO2 + 6H2O denkleştirilmiş tepkimesine göre X maddesinin formülü aşağıdakilerden hangisidir?",
        "en": "According to the balanced equation 2X + 7O2 -> 4CO2 + 6H2O, what is the formula of substance X?",
        "de": "Welche Formel hat der Stoff X gemäß der ausgeglichenen Gleichung 2X + 7O2 -> 4CO2 + 6H2O?",
        "fr": "D'après l'équation équilibrée 2X + 7O2 -> 4CO2 + 6H2O, quelle est la formule de la substance X ?",
        "ru": "Какова формула вещества X согласно уравнению 2X + 7O2 -> 4CO2 + 6H2O?",
        "ar": "وفقًا للمعادلة الموزونة 2X + 7O2 -> 4CO2 + 6H2O، ما صيغة المادة X؟",
        "zh": "根据已配平的方程式 2X + 7O2 -> 4CO2 + 6H2O，物质 X 的化学式是下列哪一项？",
        "ku": "Li gorî hevkêşeya hevsengkirî 2X + 7O2 -> 4CO2 + 6H2O, formula madeya X kîjan e?"
      },
      "options": [
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
          "tr": "C2H2",
          "en": "C2H2",
          "de": "C2H2",
          "fr": "C2H2",
          "ru": "C2H2",
          "ar": "C2H2",
          "zh": "C2H2",
          "ku": "C2H2"
        },
        {
          "tr": "C2H4",
          "en": "C2H4",
          "de": "C2H4",
          "fr": "C2H4",
          "ru": "C2H4",
          "ar": "C2H4",
          "zh": "C2H4",
          "ku": "C2H4"
        },
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
          "tr": "C3H8",
          "en": "C3H8",
          "de": "C3H8",
          "fr": "C3H8",
          "ru": "C3H8",
          "ar": "C3H8",
          "zh": "C3H8",
          "ku": "C3H8"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Tepkimede atom sayısı ve türü korunur. Ürünlerde 4 C, 12 H ve 4 x 2 + 6 = 14 O atomu vardır. Girenlerde 7O2 zaten 14 O atomu getirdiği için X oksijen içermez. 2X = C4H12 olduğundan X = C2H6'dır. X = C2H4 olsaydı 2X = C4H8 olur, ürünlerdeki 12 H atomunun 4'ü karşılanmazdı.",
        "en": "The number and type of atoms are conserved. The products contain 4 C, 12 H and 4 x 2 + 6 = 14 O atoms. Since 7O2 already supplies 14 O atoms, X contains no oxygen. 2X = C4H12, so X = C2H6. If X were C2H4, 2X would be C4H8, leaving 4 of the 12 H atoms in the products unaccounted for.",
        "de": "Anzahl und Art der Atome bleiben erhalten. Die Produkte enthalten 4 C, 12 H und 4 x 2 + 6 = 14 O-Atome. Da 7O2 bereits 14 O-Atome liefert, enthält X keinen Sauerstoff. 2X = C4H12, also X = C2H6. Wäre X = C2H4, so wäre 2X = C4H8, und 4 der 12 H-Atome der Produkte blieben ungedeckt.",
        "fr": "Le nombre et la nature des atomes sont conservés. Les produits contiennent 4 C, 12 H et 4 x 2 + 6 = 14 atomes O. Comme 7O2 apporte déjà 14 atomes O, X ne contient pas d'oxygène. 2X = C4H12, donc X = C2H6. Si X était C2H4, 2X vaudrait C4H8 et 4 des 12 atomes H des produits ne seraient pas justifiés.",
        "ru": "Число и вид атомов сохраняются. В продуктах 4 атома C, 12 атомов H и 4 x 2 + 6 = 14 атомов O. Поскольку 7O2 уже даёт 14 атомов O, X кислорода не содержит. 2X = C4H12, значит X = C2H6. Если бы X был C2H4, то 2X = C4H8, и 4 из 12 атомов H в продуктах не были бы обеспечены.",
        "ar": "يُحفظ عدد الذرات ونوعها. في النواتج 4 ذرات C و12 ذرة H و4 × 2 + 6 = 14 ذرة O. وبما أن 7O2 يوفر 14 ذرة O فإن X لا يحتوي أكسجين. 2X = C4H12 إذن X = C2H6. ولو كان X هو C2H4 لكان 2X = C4H8، فلا تُغطّى 4 من ذرات H الـ 12 الموجودة في النواتج.",
        "zh": "原子的种类和数目守恒。生成物中有 4 个 C、12 个 H 和 4 x 2 + 6 = 14 个 O。7O2 已提供 14 个 O，故 X 不含氧。2X = C4H12，所以 X = C2H6。若 X 为 C2H4，则 2X = C4H8，生成物中的 12 个 H 原子有 4 个无法对应。",
        "ku": "Di reaksiyonê de hejmar û cureyê atoman tên parastin. Di hilberan de 4 C, 12 H û 4 x 2 + 6 = 14 atomên O hene. Ji ber ku 7O2 jixwe 14 atomên O dide, X oksîjenê nahewîne. 2X = C4H12 e, ango X = C2H6 e. Eger X C2H4 bûya, 2X dê bibûya C4H8 û ji 12 atomên H yên di hilberan de 4 dê kêm bimana."
      }
    },
    {
      "id": "u07-twin07",
      "stem": {
        "tr": "CaCO3(k) -> CaO(k) + CO2(g) tepkimesine göre 50 gram saf CaCO3 ısıtıldığında 22,4 gram CaO elde ediliyor. Tepkimenin yüzde verimi kaçtır? (CaCO3 = 100 g/mol, CaO = 56 g/mol)",
        "en": "According to CaCO3(s) -> CaO(s) + CO2(g), heating 50 g of pure CaCO3 gives 22.4 g of CaO. What is the percent yield of the reaction? (CaCO3 = 100 g/mol, CaO = 56 g/mol)",
        "de": "Gemäß CaCO3(s) -> CaO(s) + CO2(g) erhält man beim Erhitzen von 50 g reinem CaCO3 22,4 g CaO. Wie hoch ist die prozentuale Ausbeute? (CaCO3 = 100 g/mol, CaO = 56 g/mol)",
        "fr": "D'après CaCO3(s) -> CaO(s) + CO2(g), le chauffage de 50 g de CaCO3 pur donne 22,4 g de CaO. Quel est le pourcentage de rendement de la réaction ? (CaCO3 = 100 g/mol, CaO = 56 g/mol)",
        "ru": "По реакции CaCO3(тв) -> CaO(тв) + CO2(г) при нагревании 50 г чистого CaCO3 получено 22,4 г CaO. Каков процентный выход реакции? (CaCO3 = 100 г/моль, CaO = 56 г/моль)",
        "ar": "وفقًا للتفاعل CaCO3(s) -> CaO(s) + CO2(g)، عند تسخين 50 g من CaCO3 النقي نحصل على 22.4 g من CaO. ما النسبة المئوية لمردود التفاعل؟ (CaCO3 = 100 g/mol، CaO = 56 g/mol)",
        "zh": "根据 CaCO3(s) -> CaO(s) + CO2(g)，加热 50 g 纯 CaCO3 得到 22.4 g CaO。该反应的百分产率是多少？(CaCO3 = 100 g/mol，CaO = 56 g/mol)",
        "ku": "Li gorî CaCO3(s) -> CaO(s) + CO2(g), dema 50 g CaCO3-ya paqij tê germkirin 22,4 g CaO tê bidestxistin. Berhema ji sedî ya reaksiyonê çend e? (CaCO3 = 100 g/mol, CaO = 56 g/mol)"
      },
      "options": [
        {
          "tr": "%44,8",
          "en": "44.8%",
          "de": "44,8 %",
          "fr": "44,8 %",
          "ru": "44,8 %",
          "ar": "44.8%",
          "zh": "44.8%",
          "ku": "%44,8"
        },
        {
          "tr": "%80",
          "en": "80%",
          "de": "80 %",
          "fr": "80 %",
          "ru": "80 %",
          "ar": "80%",
          "zh": "80%",
          "ku": "%80"
        },
        {
          "tr": "%89,6",
          "en": "89.6%",
          "de": "89,6 %",
          "fr": "89,6 %",
          "ru": "89,6 %",
          "ar": "89.6%",
          "zh": "89.6%",
          "ku": "%89,6"
        },
        {
          "tr": "%100",
          "en": "100%",
          "de": "100 %",
          "fr": "100 %",
          "ru": "100 %",
          "ar": "100%",
          "zh": "100%",
          "ku": "%100"
        },
        {
          "tr": "%125",
          "en": "125%",
          "de": "125 %",
          "fr": "125 %",
          "ru": "125 %",
          "ar": "125%",
          "zh": "125%",
          "ku": "%125"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n(CaCO3) = 50 / 100 = 0,5 mol; mol oranı 1 : 1 olduğundan teorik olarak 0,5 mol CaO = 0,5 x 56 = 28 g oluşmalıdır. Yüzde verim = (22,4 / 28) x 100 = %80. Gerçek ürün kütlesini başlangıçtaki CaCO3 kütlesine bölen öğrenci %44,8; oranı ters kuran öğrenci %125 bulur, oysa yüzde verim %100'ü aşamaz.",
        "en": "n(CaCO3) = 50 / 100 = 0.5 mol; with a 1 : 1 ratio the theoretical CaO is 0.5 mol = 0.5 x 56 = 28 g. Percent yield = (22.4 / 28) x 100 = 80%. Dividing the product mass by the starting CaCO3 mass gives 44.8%; inverting the ratio gives 125%, but a percent yield cannot exceed 100%.",
        "de": "n(CaCO3) = 50 / 100 = 0,5 mol; beim Verhältnis 1 : 1 entstehen theoretisch 0,5 mol CaO = 0,5 x 56 = 28 g. Prozentuale Ausbeute = (22,4 / 28) x 100 = 80 %. Wer die Produktmasse durch die CaCO3-Masse teilt, erhält 44,8 %; wer das Verhältnis umkehrt, 125 % – eine Ausbeute kann aber 100 % nicht übersteigen.",
        "fr": "n(CaCO3) = 50 / 100 = 0,5 mol ; le rapport étant 1 : 1, il devrait se former 0,5 mol de CaO = 0,5 x 56 = 28 g. Rendement = (22,4 / 28) x 100 = 80 %. Diviser la masse de produit par la masse initiale de CaCO3 donne 44,8 % ; inverser le rapport donne 125 %, or un rendement ne peut pas dépasser 100 %.",
        "ru": "n(CaCO3) = 50 / 100 = 0,5 моль; при соотношении 1 : 1 теоретически образуется 0,5 моль CaO = 0,5 x 56 = 28 г. Выход = (22,4 / 28) x 100 = 80 %. Деление массы продукта на массу исходного CaCO3 даёт 44,8 %, а перевёрнутое отношение — 125 %, хотя выход не может превышать 100 %.",
        "ar": "n(CaCO3) = 50 / 100 = 0.5 mol، وبما أن النسبة المولية 1 : 1 فالكمية النظرية من CaO هي 0.5 mol = 0.5 × 56 = 28 g. النسبة المئوية للمردود = (22.4 / 28) × 100 = 80%. ومن يقسم كتلة الناتج على كتلة CaCO3 الابتدائية يحصل على 44.8%، ومن يعكس النسبة يحصل على 125%، مع أن النسبة المئوية للمردود لا تتجاوز 100%.",
        "zh": "n(CaCO3) = 50 / 100 = 0.5 mol；物质的量之比为 1 : 1，理论上生成 0.5 mol CaO = 0.5 x 56 = 28 g。百分产率 = (22.4 / 28) x 100 = 80%。用产物质量除以 CaCO3 初始质量得 44.8%；把比值倒过来得 125%，但百分产率不可能超过 100%。",
        "ku": "n(CaCO3) = 50 / 100 = 0,5 mol; ji ber ku rêjeya molan 1 : 1 e, li gorî teoriyê divê 0,5 mol CaO = 0,5 x 56 = 28 g çêbibe. Berhema ji sedî = (22,4 / 28) x 100 = %80. Xwendekarê ku girseya hilberê li girseya destpêkê ya CaCO3 parve dike %44,8, yê ku rêjeyê berevajî datîne %125 dibîne; lê berhema ji sedî nikare ji %100 derbas bibe."
      }
    },
    {
      "id": "u07-twin08",
      "stem": {
        "tr": "Bir miktar safsızlık içeren 13 gramlık çinko örneği yeterli miktarda HCl çözeltisiyle Zn(k) + 2HCl(aq) -> ZnCl2(aq) + H2(g) tepkimesine göre tamamen tepkimeye sokuluyor ve 0,2 gram H2 gazı elde ediliyor. Safsızlıklar HCl ile tepkime vermediğine göre örnek kütlece yüzde kaç Zn içerir? (Zn = 65 g/mol, H = 1 g/mol)",
        "en": "A 13 g zinc sample containing some impurities reacts completely with excess HCl solution according to Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g), and 0.2 g of H2 gas is obtained. If the impurities do not react with HCl, what is the percentage of Zn by mass in the sample? (Zn = 65 g/mol, H = 1 g/mol)",
        "de": "Eine 13 g schwere, verunreinigte Zinkprobe reagiert mit überschüssiger HCl-Lösung gemäß Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) vollständig, wobei 0,2 g H2 entstehen. Die Verunreinigungen reagieren nicht mit HCl. Wie viel Massenprozent Zn enthält die Probe? (Zn = 65 g/mol, H = 1 g/mol)",
        "fr": "Un échantillon de zinc impur de 13 g réagit complètement avec un excès de solution de HCl selon Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) et l'on obtient 0,2 g de dihydrogène H2. Les impuretés ne réagissent pas avec HCl. Quel est le pourcentage massique de Zn dans l'échantillon ? (Zn = 65 g/mol, H = 1 g/mol)",
        "ru": "Образец цинка массой 13 г с примесями полностью прореагировал с избытком раствора HCl по реакции Zn(тв) + 2HCl(р-р) -> ZnCl2(р-р) + H2(г); получено 0,2 г H2. Примеси с HCl не реагируют. Какова массовая доля Zn в образце (в %)? (Zn = 65 г/моль, H = 1 г/моль)",
        "ar": "تتفاعل عينة زنك كتلتها 13 g تحتوي على شوائب تفاعلًا كاملًا مع فائض من محلول HCl وفق Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)، فيتكون 0.2 g من غاز H2. إذا كانت الشوائب لا تتفاعل مع HCl، فما النسبة المئوية الكتلية لـ Zn في العينة؟ (Zn = 65 g/mol، H = 1 g/mol)",
        "zh": "13 g 含杂质的锌样品与足量 HCl 溶液按 Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) 完全反应，得到 0.2 g H2。杂质不与 HCl 反应，样品中 Zn 的质量分数是多少？(Zn = 65 g/mol，H = 1 g/mol)",
        "ku": "Nimûneyeke zinkê ya 13 gramî ku hinek madeyên ne paqij tê de hene, li gorî Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) bi mîqdareke têr a çareseriya HCl re bi tevahî dikeve reaksiyonê û 0,2 g gaza H2 tê bidestxistin. Madeyên ne paqij bi HCl re nakevin reaksiyonê; li gorî vê, nimûne ji aliyê girseyê ve ji sedî çend Zn dihewîne? (Zn = 65 g/mol, H = 1 g/mol)"
      },
      "options": [
        {
          "tr": "%50",
          "en": "50%",
          "de": "50 %",
          "fr": "50 %",
          "ru": "50 %",
          "ar": "50%",
          "zh": "50%",
          "ku": "%50"
        },
        {
          "tr": "%65",
          "en": "65%",
          "de": "65 %",
          "fr": "65 %",
          "ru": "65 %",
          "ar": "65%",
          "zh": "65%",
          "ku": "%65"
        },
        {
          "tr": "%75",
          "en": "75%",
          "de": "75 %",
          "fr": "75 %",
          "ru": "75 %",
          "ar": "75%",
          "zh": "75%",
          "ku": "%75"
        },
        {
          "tr": "%80",
          "en": "80%",
          "de": "80 %",
          "fr": "80 %",
          "ru": "80 %",
          "ar": "80%",
          "zh": "80%",
          "ku": "%80"
        },
        {
          "tr": "%100",
          "en": "100%",
          "de": "100 %",
          "fr": "100 %",
          "ru": "100 %",
          "ar": "100%",
          "zh": "100%",
          "ku": "%100"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n(H2) = 0,2 / 2 = 0,1 mol. Mol oranı Zn : H2 = 1 : 1 olduğundan 0,1 mol Zn tepkimeye girmiştir: m(Zn) = 0,1 x 65 = 6,5 g. Saflık = (6,5 / 13) x 100 = %50. H2'nin mol kütlesini 1 g/mol alan öğrenci 0,2 mol Zn = 13 g bulup örneği %100 saf sanır.",
        "en": "n(H2) = 0.2 / 2 = 0.1 mol. With Zn : H2 = 1 : 1, 0.1 mol Zn reacted: m(Zn) = 0.1 x 65 = 6.5 g. Purity = (6.5 / 13) x 100 = 50%. A student who takes the molar mass of H2 as 1 g/mol finds 0.2 mol Zn = 13 g and wrongly concludes the sample is 100% pure.",
        "de": "n(H2) = 0,2 / 2 = 0,1 mol. Bei Zn : H2 = 1 : 1 haben 0,1 mol Zn reagiert: m(Zn) = 0,1 x 65 = 6,5 g. Reinheit = (6,5 / 13) x 100 = 50 %. Wer für H2 die molare Masse 1 g/mol ansetzt, erhält 0,2 mol Zn = 13 g und hält die Probe fälschlich für 100 % rein.",
        "fr": "n(H2) = 0,2 / 2 = 0,1 mol. Comme Zn : H2 = 1 : 1, 0,1 mol de Zn a réagi : m(Zn) = 0,1 x 65 = 6,5 g. Pureté = (6,5 / 13) x 100 = 50 %. Prendre 1 g/mol comme masse molaire de H2 donne 0,2 mol de Zn = 13 g et fait croire à tort que l'échantillon est pur à 100 %.",
        "ru": "n(H2) = 0,2 / 2 = 0,1 моль. Так как Zn : H2 = 1 : 1, прореагировало 0,1 моль Zn: m(Zn) = 0,1 x 65 = 6,5 г. Массовая доля Zn = (6,5 / 13) x 100 = 50 %. Если взять молярную массу H2 равной 1 г/моль, получится 0,2 моль Zn = 13 г и ошибочный вывод, что образец на 100 % чистый.",
        "ar": "n(H2) = 0.2 / 2 = 0.1 mol. وبما أن Zn : H2 = 1 : 1 فقد تفاعل 0.1 mol من Zn: m(Zn) = 0.1 × 65 = 6.5 g. نسبة النقاء = (6.5 / 13) × 100 = 50%. ومن يأخذ الكتلة المولية لـ H2 على أنها 1 g/mol يحصل على 0.2 mol Zn = 13 g فيظن خطأً أن العينة نقية 100%.",
        "zh": "n(H2) = 0.2 / 2 = 0.1 mol。Zn : H2 = 1 : 1，故反应的 Zn 为 0.1 mol：m(Zn) = 0.1 x 65 = 6.5 g。纯度 = (6.5 / 13) x 100 = 50%。把 H2 的摩尔质量当作 1 g/mol 会得到 0.2 mol Zn = 13 g，误认为样品纯度为 100%。",
        "ku": "n(H2) = 0,2 / 2 = 0,1 mol. Ji ber ku rêjeya molan Zn : H2 = 1 : 1 e, 0,1 mol Zn ketiye reaksiyonê: m(Zn) = 0,1 x 65 = 6,5 g. Paqijî = (6,5 / 13) x 100 = %50. Xwendekarê ku girseya molî ya H2 wek 1 g/mol digire 0,2 mol Zn = 13 g dibîne û bi şaşî nimûneyê %100 paqij dihesibîne."
      }
    },
    {
      "id": "u07-twin09",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta 40 mL CO gazı ile 30 mL O2 gazı 2CO(g) + O2(g) -> 2CO2(g) tepkimesine göre tam verimle tepkimeye giriyor. Tepkime sonunda aynı koşullarda kapta toplam kaç mL gaz bulunur?",
        "en": "At the same temperature and pressure, 40 mL of CO gas and 30 mL of O2 gas react with 100% yield according to 2CO(g) + O2(g) -> 2CO2(g). What is the total volume of gas in the container at the end, under the same conditions?",
        "de": "Bei gleicher Temperatur und gleichem Druck reagieren 40 mL CO und 30 mL O2 gemäß 2CO(g) + O2(g) -> 2CO2(g) vollständig. Wie viel mL Gas befinden sich danach unter gleichen Bedingungen insgesamt im Gefäß?",
        "fr": "À même température et même pression, 40 mL de CO et 30 mL de O2 réagissent avec un rendement de 100 % selon 2CO(g) + O2(g) -> 2CO2(g). Quel est le volume total de gaz dans le récipient à la fin, dans les mêmes conditions ?",
        "ru": "При одинаковых температуре и давлении 40 мл CO и 30 мл O2 реагируют со 100 %-ным выходом по уравнению 2CO(г) + O2(г) -> 2CO2(г). Каков общий объём газа в сосуде после реакции при тех же условиях?",
        "ar": "عند نفس درجة الحرارة والضغط يتفاعل 40 mL من غاز CO مع 30 mL من غاز O2 بمردود كامل وفق 2CO(g) + O2(g) -> 2CO2(g). ما الحجم الكلي للغاز في الوعاء بعد التفاعل في الظروف نفسها؟",
        "zh": "同温同压下，40 mL CO 与 30 mL O2 按 2CO(g) + O2(g) -> 2CO2(g) 完全反应。反应结束后在相同条件下容器中气体的总体积是多少毫升？",
        "ku": "Di heman germahî û zextê de 40 mL gaza CO û 30 mL gaza O2 li gorî 2CO(g) + O2(g) -> 2CO2(g) bi berhema %100 dikevin reaksiyonê. Di dawiya reaksiyonê de, di heman şertan de, di firaxê de bi giştî çend mL gaz heye?"
      },
      "options": [
        {
          "tr": "10 mL",
          "en": "10 mL",
          "de": "10 mL",
          "fr": "10 mL",
          "ru": "10 мл",
          "ar": "10 mL",
          "zh": "10 mL",
          "ku": "10 mL"
        },
        {
          "tr": "35 mL",
          "en": "35 mL",
          "de": "35 mL",
          "fr": "35 mL",
          "ru": "35 мл",
          "ar": "35 mL",
          "zh": "35 mL",
          "ku": "35 mL"
        },
        {
          "tr": "40 mL",
          "en": "40 mL",
          "de": "40 mL",
          "fr": "40 mL",
          "ru": "40 мл",
          "ar": "40 mL",
          "zh": "40 mL",
          "ku": "40 mL"
        },
        {
          "tr": "50 mL",
          "en": "50 mL",
          "de": "50 mL",
          "fr": "50 mL",
          "ru": "50 мл",
          "ar": "50 mL",
          "zh": "50 mL",
          "ku": "50 mL"
        },
        {
          "tr": "70 mL",
          "en": "70 mL",
          "de": "70 mL",
          "fr": "70 mL",
          "ru": "70 мл",
          "ar": "70 mL",
          "zh": "70 mL",
          "ku": "70 mL"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Aynı koşullarda hacim oranı mol oranına eşittir. Hacim/katsayı: CO için 40/2 = 20, O2 için 30/1 = 30; CO sınırlayıcıdır. 40 mL CO ile 20 mL O2 harcanır, 40 mL CO2 oluşur, 10 mL O2 artar. Toplam gaz = 40 + 10 = 50 mL. Yalnız oluşan CO2'yi (40 mL) yazmak artan O2'yi, 70 mL demek ise hacmin tepkimede değiştiğini gözden kaçırmaktır.",
        "en": "Under the same conditions volume ratio equals mole ratio. Volume/coefficient: CO 40/2 = 20, O2 30/1 = 30, so CO is limiting. 40 mL CO uses 20 mL O2 and forms 40 mL CO2; 10 mL O2 is left. Total gas = 40 + 10 = 50 mL. Answering 40 mL ignores the leftover O2; answering 70 mL ignores that the volume changes in the reaction.",
        "de": "Unter gleichen Bedingungen entspricht das Volumenverhältnis dem Stoffmengenverhältnis. Volumen/Koeffizient: CO 40/2 = 20, O2 30/1 = 30; CO ist limitierend. 40 mL CO verbrauchen 20 mL O2 und bilden 40 mL CO2; 10 mL O2 bleiben übrig. Gesamtgas = 40 + 10 = 50 mL. 40 mL übersieht den O2-Rest, 70 mL übersieht die Volumenänderung.",
        "fr": "Dans les mêmes conditions, le rapport des volumes est égal au rapport molaire. Volume/coefficient : CO 40/2 = 20, O2 30/1 = 30 ; CO est limitant. 40 mL de CO consomment 20 mL de O2 et forment 40 mL de CO2 ; il reste 10 mL de O2. Gaz total = 40 + 10 = 50 mL. Répondre 40 mL oublie l'excès de O2 ; répondre 70 mL oublie que le volume change au cours de la réaction.",
        "ru": "При одинаковых условиях отношение объёмов равно мольному. Объём/коэффициент: CO 40/2 = 20, O2 30/1 = 30; CO — лимитирующий. 40 мл CO расходуют 20 мл O2 и дают 40 мл CO2; остаётся 10 мл O2. Всего газа 40 + 10 = 50 мл. Ответ 40 мл не учитывает избыток O2, ответ 70 мл — изменение объёма в реакции.",
        "ar": "في الظروف نفسها تساوي نسبة الحجوم نسبة المولات. الحجم/المعامل: CO ‏40/2 = 20 وO2 ‏30/1 = 30، فـ CO هو المادة المحددة. يستهلك 40 mL من CO ‏20 mL من O2 وينتج 40 mL من CO2، ويتبقى 10 mL من O2. مجموع الغاز = 40 + 10 = 50 mL. والجواب 40 mL يهمل O2 المتبقي، والجواب 70 mL يهمل تغير الحجم في التفاعل.",
        "zh": "同条件下体积比等于物质的量之比。体积/系数：CO 为 40/2 = 20，O2 为 30/1 = 30，CO 是限量反应物。40 mL CO 消耗 20 mL O2，生成 40 mL CO2，剩余 10 mL O2。气体总体积 = 40 + 10 = 50 mL。答 40 mL 忽略了剩余的 O2，答 70 mL 忽略了反应中体积的变化。",
        "ku": "Di heman şertan de rêjeya qebareyan bi rêjeya molan re wekhev e. Qebare/hevber: ji bo CO 40/2 = 20, ji bo O2 30/1 = 30; CO sînordar e. 40 mL CO 20 mL O2 xerc dike û 40 mL CO2 çêdike; 10 mL O2 dimîne. Gaza giştî = 40 + 10 = 50 mL. Bersiva 40 mL O2-ya mayî ji bîr dike; bersiva 70 mL jî paşguh dike ku qebare di reaksiyonê de diguhere."
      }
    },
    {
      "id": "u07-twin10",
      "stem": {
        "tr": "Kapalı bir kapta 2SO2(g) + O2(g) -> 2SO3(g) tepkimesi gerçekleşiyor. Bu tepkimede;\nI. toplam kütle,\nII. toplam atom sayısı,\nIII. toplam molekül sayısı\nniceliklerinden hangileri korunur?",
        "en": "The reaction 2SO2(g) + O2(g) -> 2SO3(g) takes place in a closed container. Which of the following quantities are conserved in this reaction?\nI. total mass\nII. total number of atoms\nIII. total number of molecules",
        "de": "In einem geschlossenen Gefäß läuft die Reaktion 2SO2(g) + O2(g) -> 2SO3(g) ab. Welche der folgenden Größen bleiben erhalten?\nI. Gesamtmasse\nII. Gesamtzahl der Atome\nIII. Gesamtzahl der Moleküle",
        "fr": "La réaction 2SO2(g) + O2(g) -> 2SO3(g) a lieu dans un récipient fermé. Lesquelles des grandeurs suivantes sont conservées ?\nI. la masse totale\nII. le nombre total d'atomes\nIII. le nombre total de molécules",
        "ru": "В закрытом сосуде протекает реакция 2SO2(г) + O2(г) -> 2SO3(г). Какие из следующих величин сохраняются?\nI. общая масса\nII. общее число атомов\nIII. общее число молекул",
        "ar": "يحدث التفاعل 2SO2(g) + O2(g) -> 2SO3(g) في وعاء مغلق. أي الكميات التالية تُحفظ في هذا التفاعل؟\nI. الكتلة الكلية\nII. العدد الكلي للذرات\nIII. العدد الكلي للجزيئات",
        "zh": "在密闭容器中发生反应 2SO2(g) + O2(g) -> 2SO3(g)。下列哪些量守恒？\nI. 总质量\nII. 原子总数\nIII. 分子总数",
        "ku": "Di firaxeke girtî de reaksiyona 2SO2(g) + O2(g) -> 2SO3(g) pêk tê. Di vê reaksiyonê de kîjan ji van mîqdaran tên parastin?\nI. girseya giştî\nII. hejmara giştî ya atoman\nIII. hejmara giştî ya molekulan"
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
        "tr": "Kapalı kapta madde giriş-çıkışı olmadığından toplam kütle korunur (I). Atomlar yok olmaz, yalnızca yeniden düzenlenir; her iki tarafta 2 S ve 6 O atomu vardır (II). Molekül sayısı ise katsayılara bağlıdır: 2 + 1 = 3 molekülden 2 molekül oluşur, bu yüzden korunmaz (III yanlış).",
        "en": "In a closed container no matter enters or leaves, so total mass is conserved (I). Atoms are only rearranged, not destroyed: both sides have 2 S and 6 O atoms (II). The number of molecules depends on the coefficients: 2 + 1 = 3 molecules give 2 molecules, so it is not conserved (III is false).",
        "de": "Im geschlossenen Gefäß tritt kein Stoff ein oder aus, also bleibt die Gesamtmasse erhalten (I). Atome werden nur umgeordnet: Beide Seiten enthalten 2 S- und 6 O-Atome (II). Die Molekülzahl hängt von den Koeffizienten ab: Aus 2 + 1 = 3 Molekülen entstehen 2, sie bleibt also nicht erhalten (III falsch).",
        "fr": "Dans un récipient fermé, aucune matière n'entre ni ne sort : la masse totale est conservée (I). Les atomes sont seulement réarrangés : il y a 2 S et 6 O de chaque côté (II). Le nombre de molécules dépend des coefficients : 2 + 1 = 3 molécules en donnent 2, il n'est donc pas conservé (III est faux).",
        "ru": "В закрытом сосуде вещество не поступает и не уходит, поэтому общая масса сохраняется (I). Атомы лишь перегруппировываются: в обеих частях 2 атома S и 6 атомов O (II). Число молекул зависит от коэффициентов: из 2 + 1 = 3 молекул образуются 2, поэтому оно не сохраняется (III неверно).",
        "ar": "في الوعاء المغلق لا تدخل مادة ولا تخرج، لذا تُحفظ الكتلة الكلية (I). والذرات لا تفنى بل يُعاد ترتيبها، ففي كل طرف ذرتا S و6 ذرات O ‏(II). أما عدد الجزيئات فيعتمد على المعاملات: من 2 + 1 = 3 جزيئات ينتج جزيئان، فلا يُحفظ (III خاطئة).",
        "zh": "密闭容器中没有物质进出，总质量守恒(I)。原子只是重新组合：两边都有 2 个 S 和 6 个 O (II)。分子数取决于系数：2 + 1 = 3 个分子生成 2 个分子，因此不守恒(III 错误)。",
        "ku": "Di firaxeke girtî de tu made nakeve hundir û dernakeve, ji ber vê yekê girseya giştî tê parastin (I). Atom winda nabin, tenê ji nû ve tên rêzkirin: li her du aliyan 2 atomên S û 6 atomên O hene (II). Hejmara molekulan bi hevberan ve girêdayî ye: ji 2 + 1 = 3 molekulan 2 molekul çêdibin, ji ber vê nayê parastin (III şaş e)."
      }
    },
    {
      "id": "u07-twin11",
      "stem": {
        "tr": "Pb(NO3)2 ve KI çözeltileri karıştırıldığında Pb(NO3)2(aq) + 2KI(aq) -> PbI2(k) + 2KNO3(aq) tepkimesine göre sarı renkli bir katı oluşuyor. Bu olayla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "When Pb(NO3)2 and KI solutions are mixed, a yellow solid forms according to Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq). Which of the following statements about this process is false?",
        "de": "Beim Mischen von Pb(NO3)2- und KI-Lösung entsteht gemäß Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq) ein gelber Feststoff. Welche der folgenden Aussagen ist falsch?",
        "fr": "Lorsqu'on mélange des solutions de Pb(NO3)2 et de KI, un solide jaune se forme selon Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq). Laquelle des affirmations suivantes est fausse ?",
        "ru": "При смешивании растворов Pb(NO3)2 и KI по реакции Pb(NO3)2(р-р) + 2KI(р-р) -> PbI2(тв) + 2KNO3(р-р) образуется жёлтое твёрдое вещество. Какое из утверждений об этом процессе неверно?",
        "ar": "عند خلط محلولي Pb(NO3)2 وKI يتكون صلب أصفر وفق Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq). أي العبارات التالية حول هذه العملية خاطئة؟",
        "zh": "将 Pb(NO3)2 溶液与 KI 溶液混合，按 Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq) 生成黄色固体。下列有关说法中哪一项是错误的？",
        "ku": "Dema çareseriyên Pb(NO3)2 û KI tên tevlihevkirin, li gorî Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq) madeyeke hişk a zer çêdibe. Kîjan ji van gotinên li ser vê bûyerê şaş e?"
      },
      "options": [
        {
          "tr": "Oluşan sarı katı PbI2'dir.",
          "en": "The yellow solid formed is PbI2.",
          "de": "Der gebildete gelbe Feststoff ist PbI2.",
          "fr": "Le solide jaune formé est PbI2.",
          "ru": "Образовавшееся жёлтое вещество — PbI2.",
          "ar": "الصلب الأصفر المتكوّن هو PbI2.",
          "zh": "生成的黄色固体是 PbI2。",
          "ku": "Madeya hişk a zer a ku çêdibe PbI2 ye."
        },
        {
          "tr": "Net iyon denklemi Pb2+(aq) + 2I-(aq) -> PbI2(k) şeklindedir.",
          "en": "The net ionic equation is Pb2+(aq) + 2I-(aq) -> PbI2(s).",
          "de": "Die Netto-Ionengleichung lautet Pb2+(aq) + 2I-(aq) -> PbI2(s).",
          "fr": "L'équation ionique nette est Pb2+(aq) + 2I-(aq) -> PbI2(s).",
          "ru": "Сокращённое ионное уравнение: Pb2+(р-р) + 2I-(р-р) -> PbI2(тв).",
          "ar": "المعادلة الأيونية الصافية هي Pb2+(aq) + 2I-(aq) -> PbI2(s).",
          "zh": "净离子方程式为 Pb2+(aq) + 2I-(aq) -> PbI2(s)。",
          "ku": "Hevkêşeya îyonî ya net Pb2+(aq) + 2I-(aq) -> PbI2(s) e."
        },
        {
          "tr": "K+ ve NO3- iyonları çözeltide değişmeden kalır.",
          "en": "K+ and NO3- ions remain unchanged in the solution.",
          "de": "K+- und NO3--Ionen bleiben unverändert in der Lösung.",
          "fr": "Les ions K+ et NO3- restent inchangés dans la solution.",
          "ru": "Ионы K+ и NO3- остаются в растворе без изменений.",
          "ar": "تبقى أيونات K+ وNO3- في المحلول دون تغيير.",
          "zh": "K+ 和 NO3- 离子在溶液中保持不变。",
          "ku": "Îyonên K+ û NO3- di çareseriyê de bê guhertin dimînin."
        },
        {
          "tr": "Olay bir çözünme-çökelme tepkimesidir.",
          "en": "The process is a precipitation reaction.",
          "de": "Der Vorgang ist eine Fällungsreaktion.",
          "fr": "Il s'agit d'une réaction de précipitation.",
          "ru": "Это реакция осаждения.",
          "ar": "العملية تفاعل ترسيب.",
          "zh": "该过程是沉淀反应。",
          "ku": "Bûyer reaksiyoneke helbûn-niştinê ye."
        },
        {
          "tr": "Çökelti, K+ ve NO3- iyonlarının birleşmesiyle oluşur.",
          "en": "The precipitate is formed by the combination of K+ and NO3- ions.",
          "de": "Der Niederschlag entsteht durch die Vereinigung von K+- und NO3--Ionen.",
          "fr": "Le précipité se forme par l'union des ions K+ et NO3-.",
          "ru": "Осадок образуется при соединении ионов K+ и NO3-.",
          "ar": "يتكون الراسب من اتحاد أيونات K+ وNO3-.",
          "zh": "沉淀是由 K+ 和 NO3- 离子结合形成的。",
          "ku": "Niştek bi yekbûna îyonên K+ û NO3- çêdibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Sarı katı PbI2'dir; Pb2+ ve I- iyonları birleşip çöktüğü için net iyon denklemi Pb2+(aq) + 2I-(aq) -> PbI2(k) olur ve olay bir çözünme-çökelme tepkimesidir. K+ ve NO3- seyirci iyonlardır, KNO3 suda iyi çözündüğü için çözeltide iyon olarak kalırlar. Dolayısıyla çökeltinin K+ ve NO3- iyonlarından oluştuğunu söyleyen ifade yanlıştır.",
        "en": "The yellow solid is PbI2; since Pb2+ and I- combine and precipitate, the net ionic equation is Pb2+(aq) + 2I-(aq) -> PbI2(s) and the process is a precipitation reaction. K+ and NO3- are spectator ions: KNO3 is very soluble, so they stay in solution as ions. Therefore the statement that the precipitate is formed from K+ and NO3- is false.",
        "de": "Der gelbe Feststoff ist PbI2; da sich Pb2+ und I- vereinigen und ausfallen, lautet die Netto-Ionengleichung Pb2+(aq) + 2I-(aq) -> PbI2(s), und es handelt sich um eine Fällungsreaktion. K+ und NO3- sind Zuschauerionen: KNO3 ist gut löslich, sie bleiben als Ionen in Lösung. Falsch ist daher die Aussage, der Niederschlag bestehe aus K+ und NO3-.",
        "fr": "Le solide jaune est PbI2 ; comme Pb2+ et I- s'unissent et précipitent, l'équation ionique nette est Pb2+(aq) + 2I-(aq) -> PbI2(s) et il s'agit d'une précipitation. K+ et NO3- sont des ions spectateurs : KNO3 est très soluble, ils restent en solution. L'affirmation selon laquelle le précipité est formé de K+ et NO3- est donc fausse.",
        "ru": "Жёлтое вещество — PbI2; так как в осадок выпадают соединившиеся Pb2+ и I-, сокращённое ионное уравнение Pb2+(р-р) + 2I-(р-р) -> PbI2(тв), и это реакция осаждения. K+ и NO3- — ионы-наблюдатели: KNO3 хорошо растворим, они остаются в растворе. Поэтому неверно утверждение, что осадок образован ионами K+ и NO3-.",
        "ar": "الصلب الأصفر هو PbI2؛ ولأن أيونات Pb2+ وI- تتحد وتترسب فالمعادلة الأيونية الصافية Pb2+(aq) + 2I-(aq) -> PbI2(s)، والعملية تفاعل ترسيب. أما K+ وNO3- فأيونات متفرجة، إذ إن KNO3 جيد الذوبان فتبقى في المحلول. لذا فالعبارة القائلة إن الراسب يتكون من K+ وNO3- خاطئة.",
        "zh": "黄色固体是 PbI2；Pb2+ 与 I- 结合沉淀，净离子方程式为 Pb2+(aq) + 2I-(aq) -> PbI2(s)，该过程是沉淀反应。K+ 和 NO3- 是旁观离子：KNO3 易溶于水，它们以离子形式留在溶液中。因此“沉淀由 K+ 和 NO3- 结合形成”的说法是错误的。",
        "ku": "Madeya hişk a zer PbI2 ye; ji ber ku Pb2+ û I- dibin yek û dinişin, hevkêşeya îyonî ya net Pb2+(aq) + 2I-(aq) -> PbI2(s) e û bûyer reaksiyoneke helbûn-niştinê ye. K+ û NO3- îyonên temaşevan in: ji ber ku KNO3 di avê de baş dihele, ew wek îyon di çareseriyê de dimînin. Ji ber vê yekê gotina ku niştek ji îyonên K+ û NO3- çêdibe şaş e."
      }
    },
    {
      "id": "u07-twin12",
      "stem": {
        "tr": "Aşağıdaki günlük hayat olaylarından hangisi bir asit-baz (nötralleşme) tepkimesine örnektir?",
        "en": "Which of the following everyday events is an example of an acid–base (neutralisation) reaction?",
        "de": "Welches der folgenden Alltagsereignisse ist ein Beispiel für eine Säure-Base-Reaktion (Neutralisation)?",
        "fr": "Lequel des phénomènes quotidiens suivants est un exemple de réaction acide-base (neutralisation) ?",
        "ru": "Какое из бытовых явлений служит примером кислотно-основной реакции (нейтрализации)?",
        "ar": "أي من الظواهر اليومية التالية مثال على تفاعل حمض-قاعدة (تعادل)؟",
        "zh": "下列日常现象中，哪一项是酸碱（中和）反应的例子？",
        "ku": "Kîjan ji van bûyerên jiyana rojane mînaka reaksiyoneke asîd-bazê (neutralîzasyonê) ye?"
      },
      "options": [
        {
          "tr": "Kireç taşının fırında ısıtılarak sönmemiş kirece (CaO) dönüşmesi",
          "en": "Limestone being heated in a kiln and turning into quicklime (CaO)",
          "de": "Kalkstein wird im Ofen erhitzt und zu Branntkalk (CaO)",
          "fr": "Le calcaire chauffé dans un four qui se transforme en chaux vive (CaO)",
          "ru": "Превращение известняка при прокаливании в печи в негашёную известь (CaO)",
          "ar": "تحول الحجر الجيري بالتسخين في الفرن إلى جير حي (CaO)",
          "zh": "石灰石在窑中加热变成生石灰(CaO)",
          "ku": "Germkirina kevirê kilsê di firnê de û veguherîna wî bo kilsa nevemirî (CaO)"
        },
        {
          "tr": "Mide asidi (HCl) fazlalığının Mg(OH)2 içeren bir antiasit ile giderilmesi",
          "en": "Excess stomach acid (HCl) being relieved with an antacid containing Mg(OH)2",
          "de": "Überschüssige Magensäure (HCl) wird mit einem Mg(OH)2-haltigen Antazidum beseitigt",
          "fr": "L'excès d'acide gastrique (HCl) neutralisé par un antiacide contenant Mg(OH)2",
          "ru": "Устранение избытка желудочной кислоты (HCl) антацидом, содержащим Mg(OH)2",
          "ar": "معالجة فرط حمض المعدة (HCl) بمضاد حموضة يحتوي على Mg(OH)2",
          "zh": "用含 Mg(OH)2 的抗酸药消除过多的胃酸(HCl)",
          "ku": "Rakirina zêdeya asîda mîdeyê (HCl) bi antîasîdeke ku Mg(OH)2 dihewîne"
        },
        {
          "tr": "Doğal gazın (CH4) ocakta yanması",
          "en": "Natural gas (CH4) burning on a stove",
          "de": "Erdgas (CH4) verbrennt auf dem Herd",
          "fr": "Le gaz naturel (CH4) qui brûle sur une cuisinière",
          "ru": "Горение природного газа (CH4) на плите",
          "ar": "احتراق الغاز الطبيعي (CH4) على الموقد",
          "zh": "天然气(CH4)在灶上燃烧",
          "ku": "Şewitîna gaza xwezayî (CH4) li ser ocaxê"
        },
        {
          "tr": "Demir bir çivinin nemli havada paslanması",
          "en": "An iron nail rusting in humid air",
          "de": "Ein Eisennagel rostet an feuchter Luft",
          "fr": "Un clou en fer qui rouille dans l'air humide",
          "ru": "Ржавление железного гвоздя во влажном воздухе",
          "ar": "صدأ مسمار حديدي في الهواء الرطب",
          "zh": "铁钉在潮湿空气中生锈",
          "ku": "Zengarbûna bizmarekî hesin di hewaya şil de"
        },
        {
          "tr": "Musluk suyuna AgNO3 çözeltisi damlatılınca beyaz bulanıklık oluşması",
          "en": "A white cloudiness forming when AgNO3 solution is dropped into tap water",
          "de": "Beim Zutropfen von AgNO3-Lösung zu Leitungswasser entsteht eine weiße Trübung",
          "fr": "Un trouble blanc qui apparaît quand on ajoute quelques gouttes de solution de AgNO3 à l'eau du robinet",
          "ru": "Появление белой мути при добавлении раствора AgNO3 к водопроводной воде",
          "ar": "ظهور عكارة بيضاء عند إضافة قطرات من محلول AgNO3 إلى ماء الصنبور",
          "zh": "向自来水中滴加 AgNO3 溶液出现白色浑浊",
          "ku": "Çêbûna şêlîbûneke spî dema çareseriya AgNO3 dilop dilop li ava şîr tê kirin"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Antiasitteki Mg(OH)2 bazı mide asidi HCl ile tepkimeye girer: Mg(OH)2 + 2HCl -> MgCl2 + 2H2O; H+ ve OH- birleşip su oluşturduğundan bu bir nötralleşmedir. Kireç taşının ısıtılması analiz, doğal gazın yanması yanma, paslanma yavaş yanma (oksitlenme), musluk suyundaki Cl- ile Ag+ iyonlarının AgCl oluşturması ise çözünme-çökelme tepkimesidir.",
        "en": "The base Mg(OH)2 in the antacid reacts with stomach acid HCl: Mg(OH)2 + 2HCl -> MgCl2 + 2H2O; H+ and OH- combine to give water, so this is neutralisation. Heating limestone is an analysis, burning natural gas is combustion, rusting is slow combustion (oxidation), and Ag+ forming AgCl with Cl- in tap water is a precipitation reaction.",
        "de": "Die Base Mg(OH)2 im Antazidum reagiert mit Magensäure HCl: Mg(OH)2 + 2HCl -> MgCl2 + 2H2O; H+ und OH- bilden Wasser – eine Neutralisation. Das Erhitzen von Kalkstein ist eine Zersetzung, das Verbrennen von Erdgas eine Verbrennung, Rosten eine langsame Oxidation, und die Bildung von AgCl aus Ag+ und dem Cl- des Leitungswassers eine Fällungsreaktion.",
        "fr": "La base Mg(OH)2 de l'antiacide réagit avec l'acide gastrique HCl : Mg(OH)2 + 2HCl -> MgCl2 + 2H2O ; H+ et OH- s'unissent pour donner de l'eau, c'est une neutralisation. Le chauffage du calcaire est une décomposition, la combustion du gaz naturel une combustion, la rouille une combustion lente (oxydation), et la formation de AgCl à partir de Ag+ et des ions Cl- de l'eau du robinet une précipitation.",
        "ru": "Основание Mg(OH)2 в антациде реагирует с желудочной кислотой HCl: Mg(OH)2 + 2HCl -> MgCl2 + 2H2O; H+ и OH- соединяются в воду — это нейтрализация. Прокаливание известняка — разложение, горение газа — горение, ржавление — медленное окисление, а образование AgCl из Ag+ и Cl- водопроводной воды — реакция осаждения.",
        "ar": "تتفاعل القاعدة Mg(OH)2 في مضاد الحموضة مع حمض المعدة HCl: ‏Mg(OH)2 + 2HCl -> MgCl2 + 2H2O، ويتحد H+ مع OH- لتكوين الماء، فهذا تعادل. أما تسخين الحجر الجيري فتحليل، واحتراق الغاز الطبيعي احتراق، والصدأ احتراق بطيء (أكسدة)، وتكوّن AgCl من Ag+ وأيونات Cl- في ماء الصنبور تفاعل ترسيب.",
        "zh": "抗酸药中的碱 Mg(OH)2 与胃酸 HCl 反应：Mg(OH)2 + 2HCl -> MgCl2 + 2H2O，H+ 与 OH- 结合成水，属于中和反应。加热石灰石是分解反应，天然气燃烧是燃烧反应，生锈是缓慢氧化，Ag+ 与自来水中的 Cl- 生成 AgCl 是沉淀反应。",
        "ku": "Baza Mg(OH)2 ya di antîasîdê de bi asîda mîdeyê HCl re dikeve reaksiyonê: Mg(OH)2 + 2HCl -> MgCl2 + 2H2O; H+ û OH- dibin yek û av çêdibe, ji ber vê ev neutralîzasyon e. Germkirina kevirê kilsê analîz e, şewitîna gaza xwezayî şewitîn e, zengarbûn şewitîna hêdî (oksîdasyon) e, çêbûna AgCl ji Ag+ û Cl- ya di ava şîr de jî reaksiyona helbûn-niştinê ye."
      }
    },
    {
      "id": "u07-twin13",
      "stem": {
        "tr": "Eşit kütlede, 8'er gram H2 ve O2 gazları alınarak 2H2(g) + O2(g) -> 2H2O(s) tepkimesi tam verimle gerçekleştiriliyor. Tepkime sonunda kaç gram su oluşur? (H = 1 g/mol, O = 16 g/mol)",
        "en": "Equal masses, 8 g each, of H2 and O2 gases are taken and the reaction 2H2(g) + O2(g) -> 2H2O(l) is carried out with 100% yield. How many grams of water form? (H = 1 g/mol, O = 16 g/mol)",
        "de": "Gleiche Massen, je 8 g, H2 und O2 reagieren gemäß 2H2(g) + O2(g) -> 2H2O(l) vollständig. Wie viel Gramm Wasser entstehen? (H = 1 g/mol, O = 16 g/mol)",
        "fr": "On prend des masses égales, 8 g chacune, de H2 et de O2, et on réalise la réaction 2H2(g) + O2(g) -> 2H2O(l) avec un rendement de 100 %. Quelle masse d'eau se forme ? (H = 1 g/mol, O = 16 g/mol)",
        "ru": "Взяли равные массы, по 8 г, газов H2 и O2 и провели реакцию 2H2(г) + O2(г) -> 2H2O(ж) со 100 %-ным выходом. Сколько граммов воды образуется? (H = 1 г/моль, O = 16 г/моль)",
        "ar": "أُخذت كتلتان متساويتان، 8 g من كل من غازي H2 وO2، وأُجري التفاعل 2H2(g) + O2(g) -> 2H2O(l) بمردود كامل. كم غرامًا من الماء يتكون؟ (H = 1 g/mol، O = 16 g/mol)",
        "zh": "取等质量(各 8 g)的 H2 和 O2，按 2H2(g) + O2(g) -> 2H2O(l) 完全反应。生成多少克水？(H = 1 g/mol，O = 16 g/mol)",
        "ku": "Ji gazên H2 û O2 girseyên wekhev, her yek 8 g, tên girtin û reaksiyona 2H2(g) + O2(g) -> 2H2O(l) bi berhema %100 pêk tê. Di dawiya reaksiyonê de çend gram av çêdibe? (H = 1 g/mol, O = 16 g/mol)"
      },
      "options": [
        {
          "tr": "4,5 g",
          "en": "4.5 g",
          "de": "4,5 g",
          "fr": "4,5 g",
          "ru": "4,5 г",
          "ar": "4.5 g",
          "zh": "4.5 g",
          "ku": "4,5 g"
        },
        {
          "tr": "9 g",
          "en": "9 g",
          "de": "9 g",
          "fr": "9 g",
          "ru": "9 г",
          "ar": "9 g",
          "zh": "9 g",
          "ku": "9 g"
        },
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
          "tr": "18 g",
          "en": "18 g",
          "de": "18 g",
          "fr": "18 g",
          "ru": "18 г",
          "ar": "18 g",
          "zh": "18 g",
          "ku": "18 g"
        },
        {
          "tr": "72 g",
          "en": "72 g",
          "de": "72 g",
          "fr": "72 g",
          "ru": "72 г",
          "ar": "72 g",
          "zh": "72 g",
          "ku": "72 g"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n(H2) = 8 / 2 = 4 mol, n(O2) = 8 / 32 = 0,25 mol. Mol/katsayı: H2 için 4/2 = 2, O2 için 0,25/1 = 0,25; O2 sınırlayıcıdır. 0,25 mol O2'den 0,5 mol H2O oluşur: 0,5 x 18 = 9 g. 16 g yanıtı tüm kütlenin suya dönüştüğünü sanmaktan, 72 g yanıtı ise H2'yi sınırlayıcı kabul etmekten gelir; oysa H2'nin büyük kısmı (3,5 mol) artar.",
        "en": "n(H2) = 8 / 2 = 4 mol, n(O2) = 8 / 32 = 0.25 mol. Mole/coefficient: H2 4/2 = 2, O2 0.25/1 = 0.25, so O2 is limiting. 0.25 mol O2 gives 0.5 mol H2O: 0.5 x 18 = 9 g. The answer 16 g assumes all the mass becomes water, and 72 g treats H2 as limiting, although most of the H2 (3.5 mol) is left over.",
        "de": "n(H2) = 8 / 2 = 4 mol, n(O2) = 8 / 32 = 0,25 mol. Mol/Koeffizient: H2 4/2 = 2, O2 0,25/1 = 0,25; O2 ist limitierend. Aus 0,25 mol O2 entstehen 0,5 mol H2O: 0,5 x 18 = 9 g. 16 g setzt voraus, die gesamte Masse werde zu Wasser; 72 g behandelt H2 als limitierend, obwohl der größte Teil des H2 (3,5 mol) übrig bleibt.",
        "fr": "n(H2) = 8 / 2 = 4 mol, n(O2) = 8 / 32 = 0,25 mol. Moles/coefficient : H2 4/2 = 2, O2 0,25/1 = 0,25 ; O2 est limitant. 0,25 mol de O2 donne 0,5 mol de H2O : 0,5 x 18 = 9 g. La réponse 16 g suppose que toute la masse devient de l'eau, et 72 g considère H2 comme limitant, alors que la majeure partie de H2 (3,5 mol) reste en excès.",
        "ru": "n(H2) = 8 / 2 = 4 моль, n(O2) = 8 / 32 = 0,25 моль. Моль/коэффициент: H2 4/2 = 2, O2 0,25/1 = 0,25; O2 — лимитирующий. Из 0,25 моль O2 образуется 0,5 моль H2O: 0,5 x 18 = 9 г. Ответ 16 г предполагает, что вся масса превращается в воду, а 72 г — что лимитирует H2, хотя большая часть H2 (3,5 моль) остаётся.",
        "ar": "n(H2) = 8 / 2 = 4 mol، وn(O2) = 8 / 32 = 0.25 mol. المول/المعامل: H2 ‏4/2 = 2، وO2 ‏0.25/1 = 0.25، فـ O2 هو المادة المحددة. ينتج 0.25 mol من O2 ‏0.5 mol من H2O: ‏0.5 × 18 = 9 g. والجواب 16 g يفترض تحول الكتلة كلها إلى ماء، والجواب 72 g يعدّ H2 مادة محددة مع أن معظم H2 ‏(3.5 mol) يتبقى.",
        "zh": "n(H2) = 8 / 2 = 4 mol，n(O2) = 8 / 32 = 0.25 mol。物质的量/系数：H2 为 4/2 = 2，O2 为 0.25/1 = 0.25，O2 是限量反应物。0.25 mol O2 生成 0.5 mol H2O：0.5 x 18 = 9 g。答 16 g 是误以为全部质量都变成水；答 72 g 是把 H2 当作限量反应物，而实际上大部分 H2 (3.5 mol)剩余。",
        "ku": "n(H2) = 8 / 2 = 4 mol, n(O2) = 8 / 32 = 0,25 mol. Mol/hevber: ji bo H2 4/2 = 2, ji bo O2 0,25/1 = 0,25; O2 sînordar e. Ji 0,25 mol O2 0,5 mol H2O çêdibe: 0,5 x 18 = 9 g. Bersiva 16 g ji wê ramanê tê ku hemû girse dibe av; 72 g jî ji hesibandina H2 wek reaktanta sînordar tê, lê beşa mezin a H2 (3,5 mol) dimîne."
      }
    },
    {
      "id": "u07-twin14",
      "stem": {
        "tr": "CH4 ve C2H6 gazlarından oluşan 0,5 mollük bir karışım tamamen yakıldığında 0,7 mol CO2 gazı oluşuyor. Buna göre karışımdaki C2H6 kaç moldür?",
        "en": "A 0.5 mol mixture of CH4 and C2H6 gases is burned completely and 0.7 mol of CO2 forms. How many moles of C2H6 are in the mixture?",
        "de": "Ein Gemisch aus CH4 und C2H6 mit insgesamt 0,5 mol wird vollständig verbrannt, wobei 0,7 mol CO2 entstehen. Wie viel mol C2H6 enthält das Gemisch?",
        "fr": "Un mélange de 0,5 mol de CH4 et de C2H6 est entièrement brûlé et il se forme 0,7 mol de CO2. Quelle est la quantité de matière de C2H6 dans le mélange ?",
        "ru": "Смесь CH4 и C2H6 общим количеством 0,5 моль полностью сожгли, при этом образовалось 0,7 моль CO2. Сколько моль C2H6 было в смеси?",
        "ar": "خليط من غازي CH4 وC2H6 مقداره 0.5 mol احترق احتراقًا كاملًا فتكوّن 0.7 mol من CO2. كم مولًا من C2H6 في الخليط؟",
        "zh": "由 CH4 和 C2H6 组成的 0.5 mol 混合气体完全燃烧，生成 0.7 mol CO2。混合物中 C2H6 的物质的量是多少？",
        "ku": "Tevliheviyeke 0,5 molî ya gazên CH4 û C2H6 bi tevahî tê şewitandin û 0,7 mol gaza CO2 çêdibe. Li gorî vê, di tevliheviyê de çend mol C2H6 heye?"
      },
      "options": [
        {
          "tr": "0,2 mol",
          "en": "0.2 mol",
          "de": "0,2 mol",
          "fr": "0,2 mol",
          "ru": "0,2 моль",
          "ar": "0.2 mol",
          "zh": "0.2 mol",
          "ku": "0,2 mol"
        },
        {
          "tr": "0,25 mol",
          "en": "0.25 mol",
          "de": "0,25 mol",
          "fr": "0,25 mol",
          "ru": "0,25 моль",
          "ar": "0.25 mol",
          "zh": "0.25 mol",
          "ku": "0,25 mol"
        },
        {
          "tr": "0,3 mol",
          "en": "0.3 mol",
          "de": "0,3 mol",
          "fr": "0,3 mol",
          "ru": "0,3 моль",
          "ar": "0.3 mol",
          "zh": "0.3 mol",
          "ku": "0,3 mol"
        },
        {
          "tr": "0,35 mol",
          "en": "0.35 mol",
          "de": "0,35 mol",
          "fr": "0,35 mol",
          "ru": "0,35 моль",
          "ar": "0.35 mol",
          "zh": "0.35 mol",
          "ku": "0,35 mol"
        },
        {
          "tr": "0,4 mol",
          "en": "0.4 mol",
          "de": "0,4 mol",
          "fr": "0,4 mol",
          "ru": "0,4 моль",
          "ar": "0.4 mol",
          "zh": "0.4 mol",
          "ku": "0,4 mol"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "C atomu korunur: 1 mol CH4'ten 1 mol CO2, 1 mol C2H6'dan 2 mol CO2 oluşur. CH4 = x, C2H6 = y dersek x + y = 0,5 ve x + 2y = 0,7 olur. Taraf tarafa çıkarılırsa y = 0,2 mol C2H6, x = 0,3 mol CH4 bulunur. 0,3 mol yanıtı CH4 ile C2H6'yı karıştırmaktan, 0,35 mol ise CO2 molünü doğrudan ikiye bölmekten gelir.",
        "en": "Carbon is conserved: 1 mol CH4 gives 1 mol CO2 and 1 mol C2H6 gives 2 mol CO2. Let CH4 = x and C2H6 = y: x + y = 0.5 and x + 2y = 0.7. Subtracting gives y = 0.2 mol C2H6 and x = 0.3 mol CH4. The answer 0.3 mol confuses CH4 with C2H6; 0.35 mol comes from simply halving the moles of CO2.",
        "de": "Kohlenstoff bleibt erhalten: 1 mol CH4 liefert 1 mol CO2, 1 mol C2H6 liefert 2 mol CO2. Mit CH4 = x und C2H6 = y gilt x + y = 0,5 und x + 2y = 0,7. Subtraktion ergibt y = 0,2 mol C2H6 und x = 0,3 mol CH4. 0,3 mol verwechselt CH4 mit C2H6; 0,35 mol entsteht durch bloßes Halbieren der CO2-Stoffmenge.",
        "fr": "Le carbone est conservé : 1 mol de CH4 donne 1 mol de CO2 et 1 mol de C2H6 en donne 2. Avec CH4 = x et C2H6 = y : x + y = 0,5 et x + 2y = 0,7. Par soustraction, y = 0,2 mol de C2H6 et x = 0,3 mol de CH4. La réponse 0,3 mol confond CH4 et C2H6 ; 0,35 mol vient du simple fait de diviser par deux la quantité de CO2.",
        "ru": "Углерод сохраняется: из 1 моль CH4 образуется 1 моль CO2, из 1 моль C2H6 — 2 моль CO2. Пусть CH4 = x, C2H6 = y: x + y = 0,5 и x + 2y = 0,7. Вычитая, получаем y = 0,2 моль C2H6 и x = 0,3 моль CH4. Ответ 0,3 моль путает CH4 и C2H6, а 0,35 моль — это просто половина количества CO2.",
        "ar": "تُحفظ ذرات الكربون: ‏1 mol من CH4 ينتج 1 mol من CO2، و1 mol من C2H6 ينتج 2 mol من CO2. بفرض CH4 = x وC2H6 = y: ‏x + y = 0.5 وx + 2y = 0.7. وبالطرح y = 0.2 mol من C2H6 وx = 0.3 mol من CH4. والجواب 0.3 mol يخلط بين CH4 وC2H6، والجواب 0.35 mol ناتج عن قسمة مولات CO2 على 2 مباشرة.",
        "zh": "碳原子守恒：1 mol CH4 生成 1 mol CO2，1 mol C2H6 生成 2 mol CO2。设 CH4 = x，C2H6 = y：x + y = 0.5，x + 2y = 0.7。两式相减得 y = 0.2 mol C2H6，x = 0.3 mol CH4。答 0.3 mol 是把 CH4 和 C2H6 混淆了；答 0.35 mol 是直接把 CO2 的物质的量除以 2。",
        "ku": "Atomên C tên parastin: ji 1 mol CH4 1 mol CO2, ji 1 mol C2H6 2 mol CO2 çêdibe. Bila CH4 = x û C2H6 = y be: x + y = 0,5 û x + 2y = 0,7. Dema hevkêşe ji hev tên kêmkirin, y = 0,2 mol C2H6 û x = 0,3 mol CH4 tê dîtin. Bersiva 0,3 mol ji tevlihevkirina CH4 û C2H6 tê; 0,35 mol jî ji parvekirina rasterast a hejmara molên CO2 li 2-yan tê."
      }
    },
    {
      "id": "u07-twin15",
      "stem": {
        "tr": "Eşit kütlede (1'er gram) CH4, C2H6 ve C3H8 gazları ayrı ayrı tamamen yakılıyor. Harcanan O2 gazlarının mol sayılarının karşılaştırılması aşağıdakilerden hangisinde doğru verilmiştir? (H = 1 g/mol, C = 12 g/mol)",
        "en": "Equal masses (1 g each) of CH4, C2H6 and C3H8 are burned completely, separately. Which of the following correctly compares the numbers of moles of O2 consumed? (H = 1 g/mol, C = 12 g/mol)",
        "de": "Gleiche Massen (je 1 g) CH4, C2H6 und C3H8 werden getrennt vollständig verbrannt. Welcher Vergleich der verbrauchten Stoffmengen an O2 ist richtig? (H = 1 g/mol, C = 12 g/mol)",
        "fr": "Des masses égales (1 g chacune) de CH4, C2H6 et C3H8 sont brûlées complètement, séparément. Laquelle des comparaisons suivantes des quantités de O2 consommées (en moles) est correcte ? (H = 1 g/mol, C = 12 g/mol)",
        "ru": "Равные массы (по 1 г) CH4, C2H6 и C3H8 по отдельности полностью сожгли. Какое сравнение количеств вещества израсходованного O2 верно? (H = 1 г/моль, C = 12 г/моль)",
        "ar": "أُحرقت كتل متساوية (1 g من كل منها) من CH4 وC2H6 وC3H8 احتراقًا كاملًا كلٌّ على حدة. أي المقارنات التالية لعدد مولات O2 المستهلكة صحيحة؟ (H = 1 g/mol، C = 12 g/mol)",
        "zh": "分别将等质量(各 1 g)的 CH4、C2H6 和 C3H8 完全燃烧。下列关于消耗 O2 物质的量的比较哪一项正确？(H = 1 g/mol，C = 12 g/mol)",
        "ku": "Ji gazên CH4, C2H6 û C3H8 girseyên wekhev (her yek 1 g) cuda cuda bi tevahî tên şewitandin. Berawirdkirina hejmara molên O2 yên ku tên xerckirin di kîjan vebijarkê de rast hatiye dayîn? (H = 1 g/mol, C = 12 g/mol)"
      },
      "options": [
        {
          "tr": "C3H8 > C2H6 > CH4",
          "en": "C3H8 > C2H6 > CH4",
          "de": "C3H8 > C2H6 > CH4",
          "fr": "C3H8 > C2H6 > CH4",
          "ru": "C3H8 > C2H6 > CH4",
          "ar": "C3H8 > C2H6 > CH4",
          "zh": "C3H8 > C2H6 > CH4",
          "ku": "C3H8 > C2H6 > CH4"
        },
        {
          "tr": "CH4 = C2H6 = C3H8",
          "en": "CH4 = C2H6 = C3H8",
          "de": "CH4 = C2H6 = C3H8",
          "fr": "CH4 = C2H6 = C3H8",
          "ru": "CH4 = C2H6 = C3H8",
          "ar": "CH4 = C2H6 = C3H8",
          "zh": "CH4 = C2H6 = C3H8",
          "ku": "CH4 = C2H6 = C3H8"
        },
        {
          "tr": "CH4 > C2H6 > C3H8",
          "en": "CH4 > C2H6 > C3H8",
          "de": "CH4 > C2H6 > C3H8",
          "fr": "CH4 > C2H6 > C3H8",
          "ru": "CH4 > C2H6 > C3H8",
          "ar": "CH4 > C2H6 > C3H8",
          "zh": "CH4 > C2H6 > C3H8",
          "ku": "CH4 > C2H6 > C3H8"
        },
        {
          "tr": "C2H6 > CH4 > C3H8",
          "en": "C2H6 > CH4 > C3H8",
          "de": "C2H6 > CH4 > C3H8",
          "fr": "C2H6 > CH4 > C3H8",
          "ru": "C2H6 > CH4 > C3H8",
          "ar": "C2H6 > CH4 > C3H8",
          "zh": "C2H6 > CH4 > C3H8",
          "ku": "C2H6 > CH4 > C3H8"
        },
        {
          "tr": "C3H8 > CH4 > C2H6",
          "en": "C3H8 > CH4 > C2H6",
          "de": "C3H8 > CH4 > C2H6",
          "fr": "C3H8 > CH4 > C2H6",
          "ru": "C3H8 > CH4 > C2H6",
          "ar": "C3H8 > CH4 > C2H6",
          "zh": "C3H8 > CH4 > C2H6",
          "ku": "C3H8 > CH4 > C2H6"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Tam yanma denklemleri: CH4 + 2O2 -> CO2 + 2H2O; C2H6 + 7/2 O2 -> 2CO2 + 3H2O; C3H8 + 5O2 -> 3CO2 + 4H2O. Mol kütleleri 16, 30 ve 44 g/mol olduğundan harcanan O2: CH4 için (1/16) x 2 = 0,125 mol; C2H6 için (1/30) x 3,5 ≈ 0,117 mol; C3H8 için (1/44) x 5 ≈ 0,114 mol. Sıralama CH4 > C2H6 > C3H8'dir. Yalnızca katsayılara bakıp C3H8'in en çok O2 harcadığını söylemek, eşit kütlede mol sayılarının farklı olduğunu gözden kaçırmaktır.",
        "en": "Complete combustion: CH4 + 2O2 -> CO2 + 2H2O; C2H6 + 7/2 O2 -> 2CO2 + 3H2O; C3H8 + 5O2 -> 3CO2 + 4H2O. With molar masses 16, 30 and 44 g/mol, O2 consumed: CH4 (1/16) x 2 = 0.125 mol; C2H6 (1/30) x 3.5 ≈ 0.117 mol; C3H8 (1/44) x 5 ≈ 0.114 mol. So CH4 > C2H6 > C3H8. Looking only at the coefficients and saying C3H8 uses the most O2 overlooks that equal masses contain different numbers of moles.",
        "de": "Vollständige Verbrennung: CH4 + 2O2 -> CO2 + 2H2O; C2H6 + 7/2 O2 -> 2CO2 + 3H2O; C3H8 + 5O2 -> 3CO2 + 4H2O. Mit den molaren Massen 16, 30 und 44 g/mol ergibt sich der O2-Verbrauch: CH4 (1/16) x 2 = 0,125 mol; C2H6 (1/30) x 3,5 ≈ 0,117 mol; C3H8 (1/44) x 5 ≈ 0,114 mol. Also CH4 > C2H6 > C3H8. Wer nur auf die Koeffizienten schaut und C3H8 vorn sieht, übersieht, dass gleiche Massen verschiedene Stoffmengen enthalten.",
        "fr": "Combustions complètes : CH4 + 2O2 -> CO2 + 2H2O ; C2H6 + 7/2 O2 -> 2CO2 + 3H2O ; C3H8 + 5O2 -> 3CO2 + 4H2O. Avec des masses molaires de 16, 30 et 44 g/mol, O2 consommé : CH4 (1/16) x 2 = 0,125 mol ; C2H6 (1/30) x 3,5 ≈ 0,117 mol ; C3H8 (1/44) x 5 ≈ 0,114 mol. D'où CH4 > C2H6 > C3H8. Ne regarder que les coefficients et placer C3H8 en tête revient à oublier que des masses égales contiennent des quantités de matière différentes.",
        "ru": "Полное сгорание: CH4 + 2O2 -> CO2 + 2H2O; C2H6 + 7/2 O2 -> 2CO2 + 3H2O; C3H8 + 5O2 -> 3CO2 + 4H2O. При молярных массах 16, 30 и 44 г/моль расход O2: CH4 (1/16) x 2 = 0,125 моль; C2H6 (1/30) x 3,5 ≈ 0,117 моль; C3H8 (1/44) x 5 ≈ 0,114 моль. Итак, CH4 > C2H6 > C3H8. Если смотреть только на коэффициенты и ставить C3H8 первым, упускается, что равные массы содержат разное количество вещества.",
        "ar": "معادلات الاحتراق الكامل: CH4 + 2O2 -> CO2 + 2H2O؛ C2H6 + 7/2 O2 -> 2CO2 + 3H2O؛ C3H8 + 5O2 -> 3CO2 + 4H2O. والكتل المولية 16 و30 و44 g/mol، فيكون O2 المستهلك: CH4 ‏(1/16) × 2 = 0.125 mol؛ C2H6 ‏(1/30) × 3.5 ≈ 0.117 mol؛ C3H8 ‏(1/44) × 5 ≈ 0.114 mol. إذن CH4 > C2H6 > C3H8. ومن ينظر إلى المعاملات وحدها ويضع C3H8 أولًا يغفل أن الكتل المتساوية تحتوي أعداد مولات مختلفة.",
        "zh": "完全燃烧：CH4 + 2O2 -> CO2 + 2H2O；C2H6 + 7/2 O2 -> 2CO2 + 3H2O；C3H8 + 5O2 -> 3CO2 + 4H2O。摩尔质量分别为 16、30、44 g/mol，消耗 O2：CH4 (1/16) x 2 = 0.125 mol；C2H6 (1/30) x 3.5 ≈ 0.117 mol；C3H8 (1/44) x 5 ≈ 0.114 mol。所以 CH4 > C2H6 > C3H8。只看系数而认为 C3H8 消耗最多，是忽略了等质量物质的物质的量不同。",
        "ku": "Hevkêşeyên şewitîna tevahî: CH4 + 2O2 -> CO2 + 2H2O; C2H6 + 7/2 O2 -> 2CO2 + 3H2O; C3H8 + 5O2 -> 3CO2 + 4H2O. Girseyên molî 16, 30 û 44 g/mol in, ji ber vê O2-ya ku tê xerckirin: ji bo CH4 (1/16) x 2 = 0,125 mol; ji bo C2H6 (1/30) x 3,5 ≈ 0,117 mol; ji bo C3H8 (1/44) x 5 ≈ 0,114 mol. Rêz CH4 > C2H6 > C3H8 e. Xwendekarê ku tenê li hevberan dinêre û dibêje C3H8 herî zêde O2 xerc dike, ji bîr dike ku di girseyên wekhev de hejmara molan cuda ye."
      }
    },
    {
      "id": "u07-twin16",
      "stem": {
        "tr": "X + 2Y -> Z tepkimesi için dört ayrı kapta yapılan deneylerin sonuçları aşağıdadır (tepkimeler tam verimlidir):\nDeney 1: 0,2 mol X + 0,1 mol Y -> 0,05 mol Z\nDeney 2: 0,2 mol X + 0,2 mol Y -> 0,1 mol Z\nDeney 3: 0,2 mol X + 0,4 mol Y -> 0,2 mol Z\nDeney 4: 0,2 mol X + 0,6 mol Y -> 0,2 mol Z\nBuna göre;\nI. 1. ve 2. deneylerde sınırlayıcı bileşen Y'dir.\nII. 4. deneyde tepkime sonunda 0,4 mol Y artar.\nIII. 3. deneyde girenlerin ikisi de tamamen tükenir.\nyargılarından hangileri doğrudur?",
        "en": "The results of experiments in four separate containers for the reaction X + 2Y -> Z are given below (all reactions go to completion):\nExperiment 1: 0.2 mol X + 0.1 mol Y -> 0.05 mol Z\nExperiment 2: 0.2 mol X + 0.2 mol Y -> 0.1 mol Z\nExperiment 3: 0.2 mol X + 0.4 mol Y -> 0.2 mol Z\nExperiment 4: 0.2 mol X + 0.6 mol Y -> 0.2 mol Z\nWhich of the following statements are correct?\nI. In experiments 1 and 2 the limiting reactant is Y.\nII. In experiment 4, 0.4 mol Y is left over at the end.\nIII. In experiment 3 both reactants are used up completely.",
        "de": "Für die Reaktion X + 2Y -> Z wurden in vier Gefäßen folgende Ergebnisse erhalten (vollständiger Umsatz):\nVersuch 1: 0,2 mol X + 0,1 mol Y -> 0,05 mol Z\nVersuch 2: 0,2 mol X + 0,2 mol Y -> 0,1 mol Z\nVersuch 3: 0,2 mol X + 0,4 mol Y -> 0,2 mol Z\nVersuch 4: 0,2 mol X + 0,6 mol Y -> 0,2 mol Z\nWelche Aussagen sind richtig?\nI. In den Versuchen 1 und 2 ist Y der limitierende Reaktant.\nII. In Versuch 4 bleiben am Ende 0,4 mol Y übrig.\nIII. In Versuch 3 werden beide Edukte vollständig verbraucht.",
        "fr": "Les résultats d'expériences réalisées dans quatre récipients pour la réaction X + 2Y -> Z sont donnés ci-dessous (réactions totales) :\nExpérience 1 : 0,2 mol X + 0,1 mol Y -> 0,05 mol Z\nExpérience 2 : 0,2 mol X + 0,2 mol Y -> 0,1 mol Z\nExpérience 3 : 0,2 mol X + 0,4 mol Y -> 0,2 mol Z\nExpérience 4 : 0,2 mol X + 0,6 mol Y -> 0,2 mol Z\nLesquelles des affirmations suivantes sont correctes ?\nI. Dans les expériences 1 et 2, le réactif limitant est Y.\nII. Dans l'expérience 4, il reste 0,4 mol de Y à la fin.\nIII. Dans l'expérience 3, les deux réactifs sont entièrement consommés.",
        "ru": "Ниже приведены результаты опытов в четырёх сосудах для реакции X + 2Y -> Z (реакции идут до конца):\nОпыт 1: 0,2 моль X + 0,1 моль Y -> 0,05 моль Z\nОпыт 2: 0,2 моль X + 0,2 моль Y -> 0,1 моль Z\nОпыт 3: 0,2 моль X + 0,4 моль Y -> 0,2 моль Z\nОпыт 4: 0,2 моль X + 0,6 моль Y -> 0,2 моль Z\nКакие из утверждений верны?\nI. В опытах 1 и 2 лимитирующий реагент — Y.\nII. В опыте 4 в конце остаётся 0,4 моль Y.\nIII. В опыте 3 оба реагента расходуются полностью.",
        "ar": "فيما يلي نتائج تجارب أُجريت في أربعة أوعية للتفاعل X + 2Y -> Z (التفاعلات تامة):\nالتجربة 1: 0.2 mol X + 0.1 mol Y -> 0.05 mol Z\nالتجربة 2: 0.2 mol X + 0.2 mol Y -> 0.1 mol Z\nالتجربة 3: 0.2 mol X + 0.4 mol Y -> 0.2 mol Z\nالتجربة 4: 0.2 mol X + 0.6 mol Y -> 0.2 mol Z\nأي العبارات التالية صحيحة؟\nI. في التجربتين 1 و2 تكون المادة المحددة هي Y.\nII. في التجربة 4 يتبقى 0.4 mol من Y في النهاية.\nIII. في التجربة 3 تُستهلك المادتان المتفاعلتان كليًا.",
        "zh": "对于反应 X + 2Y -> Z，在四个容器中进行实验的结果如下（反应完全进行）：\n实验 1：0.2 mol X + 0.1 mol Y -> 0.05 mol Z\n实验 2：0.2 mol X + 0.2 mol Y -> 0.1 mol Z\n实验 3：0.2 mol X + 0.4 mol Y -> 0.2 mol Z\n实验 4：0.2 mol X + 0.6 mol Y -> 0.2 mol Z\n下列说法中哪些正确？\nI. 实验 1 和 2 中限量反应物是 Y。\nII. 实验 4 结束时剩余 0.4 mol Y。\nIII. 实验 3 中两种反应物都完全耗尽。",
        "ku": "Ji bo reaksiyona X + 2Y -> Z encamên ceribandinên di çar firaxên cuda de li jêr in (hemû reaksiyon bi berhema %100 pêk tên):\nCeribandin 1: 0,2 mol X + 0,1 mol Y -> 0,05 mol Z\nCeribandin 2: 0,2 mol X + 0,2 mol Y -> 0,1 mol Z\nCeribandin 3: 0,2 mol X + 0,4 mol Y -> 0,2 mol Z\nCeribandin 4: 0,2 mol X + 0,6 mol Y -> 0,2 mol Z\nKîjan ji van gotinan rast in?\nI. Di ceribandinên 1 û 2 de reaktanta sînordar Y ye.\nII. Di ceribandina 4 de di dawiya reaksiyonê de 0,4 mol Y dimîne.\nIII. Di ceribandina 3 de her du reaktant jî bi tevahî diqedin."
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
        "tr": "Mol/katsayı oranları karşılaştırılır. 1. deneyde Y: 0,1/2 = 0,05 < X: 0,2; 2. deneyde Y: 0,2/2 = 0,1 < 0,2; her ikisinde de Y sınırlayıcıdır ve oluşan Z miktarı Y'ye göre değişir (I doğru). 3. deneyde 0,2 mol X ile 0,4 mol Y tam 1 : 2 oranındadır, ikisi de tükenir (III doğru). 4. deneyde X sınırlayıcıdır; 0,2 mol X ile 0,4 mol Y harcanır, 0,6 - 0,4 = 0,2 mol Y artar, 0,4 mol değil (II yanlış).",
        "en": "Compare the mole/coefficient ratios. In experiment 1, Y: 0.1/2 = 0.05 < X: 0.2; in experiment 2, Y: 0.2/2 = 0.1 < 0.2; in both Y is limiting and the amount of Z follows Y (I correct). In experiment 3, 0.2 mol X and 0.4 mol Y are exactly in the 1 : 2 ratio, so both are used up (III correct). In experiment 4 X is limiting; 0.2 mol X uses 0.4 mol Y, leaving 0.6 - 0.4 = 0.2 mol Y, not 0.4 mol (II false).",
        "de": "Man vergleicht die Verhältnisse Mol/Koeffizient. Versuch 1: Y 0,1/2 = 0,05 < X 0,2; Versuch 2: Y 0,2/2 = 0,1 < 0,2; in beiden ist Y limitierend, und die Menge an Z richtet sich nach Y (I richtig). In Versuch 3 stehen 0,2 mol X und 0,4 mol Y genau im Verhältnis 1 : 2, beide werden verbraucht (III richtig). In Versuch 4 ist X limitierend; 0,2 mol X verbrauchen 0,4 mol Y, übrig bleiben 0,6 - 0,4 = 0,2 mol Y, nicht 0,4 mol (II falsch).",
        "fr": "On compare les rapports moles/coefficient. Expérience 1 : Y 0,1/2 = 0,05 < X 0,2 ; expérience 2 : Y 0,2/2 = 0,1 < 0,2 ; dans les deux, Y est limitant et la quantité de Z suit Y (I correcte). Dans l'expérience 3, 0,2 mol de X et 0,4 mol de Y sont exactement dans le rapport 1 : 2, les deux sont consommés (III correcte). Dans l'expérience 4, X est limitant ; 0,2 mol de X consomme 0,4 mol de Y, il reste 0,6 - 0,4 = 0,2 mol de Y et non 0,4 mol (II fausse).",
        "ru": "Сравниваем отношения моль/коэффициент. Опыт 1: Y 0,1/2 = 0,05 < X 0,2; опыт 2: Y 0,2/2 = 0,1 < 0,2; в обоих лимитирует Y, и количество Z определяется Y (I верно). В опыте 3 0,2 моль X и 0,4 моль Y находятся точно в отношении 1 : 2, оба расходуются полностью (III верно). В опыте 4 лимитирует X; 0,2 моль X расходуют 0,4 моль Y, остаётся 0,6 - 0,4 = 0,2 моль Y, а не 0,4 моль (II неверно).",
        "ar": "نقارن نسب المول/المعامل. في التجربة 1: ‏Y ‏0.1/2 = 0.05 < X ‏0.2، وفي التجربة 2: ‏Y ‏0.2/2 = 0.1 < 0.2؛ ففي كلتيهما Y هي المادة المحددة وتتبع كمية Z كمية Y ‏(I صحيحة). في التجربة 3 يكون 0.2 mol من X و0.4 mol من Y بنسبة 1 : 2 تمامًا فتُستهلك المادتان (III صحيحة). في التجربة 4 تكون X هي المادة المحددة؛ يستهلك 0.2 mol من X ‏0.4 mol من Y فيتبقى 0.6 - 0.4 = 0.2 mol من Y لا 0.4 mol ‏(II خاطئة).",
        "zh": "比较物质的量/系数之比。实验 1：Y 0.1/2 = 0.05 < X 0.2；实验 2：Y 0.2/2 = 0.1 < 0.2；两者中 Y 都是限量反应物，Z 的量随 Y 而变(I 正确)。实验 3 中 0.2 mol X 与 0.4 mol Y 恰好为 1 : 2，二者都耗尽(III 正确)。实验 4 中 X 是限量反应物；0.2 mol X 消耗 0.4 mol Y，剩余 0.6 - 0.4 = 0.2 mol Y，而不是 0.4 mol (II 错误)。",
        "ku": "Rêjeyên mol/hevber tên berawirdkirin. Di ceribandina 1 de Y: 0,1/2 = 0,05 < X: 0,2; di ceribandina 2 de Y: 0,2/2 = 0,1 < 0,2; di herduyan de jî Y sînordar e û mîqdara Z ya ku çêdibe li gorî Y diguhere (I rast e). Di ceribandina 3 de 0,2 mol X û 0,4 mol Y tam bi rêjeya 1 : 2 ne, herdu jî diqedin (III rast e). Di ceribandina 4 de X sînordar e; 0,2 mol X 0,4 mol Y xerc dike, 0,6 - 0,4 = 0,2 mol Y dimîne, ne 0,4 mol (II şaş e)."
      }
    }
  ]
};

export default unit07;
