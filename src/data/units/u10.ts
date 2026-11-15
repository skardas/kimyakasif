import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit10: ChemistryUnitSeedData = {
  "id": "u10",
  "order": 10,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Kimya Her Yerde",
    "en": "Chemistry Everywhere",
    "de": "Chemie Überall",
    "fr": "Chimie Partout",
    "ru": "Химия повсюду",
    "ar": "الكيمياء في كل مكان",
    "zh": "化学无处不在",
    "ku": "Kîmya Li Her Derê"
  },
  "subtitle": {
    "tr": "Temizlik Maddeleri, Polimerler, Kozmetik ve İlaçlar",
    "en": "Soaps, Detergents, Polymers & Medicine",
    "de": "Reinigungsmittel, Polymere, Kosmetika und Pharmazeutika",
    "fr": "Agents de nettoyage, polymères, cosmétiques et produits pharmaceutiques",
    "ru": "Чистящие средства, полимеры, косметика и фармацевтика",
    "ar": "مواد التنظيف والبوليمرات ومستحضرات التجميل والأدوية",
    "zh": "清洁剂、聚合物、化妆品和药品",
    "ku": "Pargîdaniyên Paqijkirinê, Polîmer, Kozmetîk û Derman"
  },
  "facts": [
    {
      "id": "u10-f01",
      "fact": {
        "tr": "Sert (beyaz) sabunlar yağ asitlerinin sodyum tuzlarıdır (örn. C17H35COONa, sodyum stearat); yumuşak sabunlar (arap sabunu) ise potasyum tuzlarıdır (örn. C17H35COOK, potasyum stearat).",
        "en": "Hard (white) soaps are sodium salts of fatty acids (e.g. C17H35COONa, sodium stearate); soft soaps are potassium salts (e.g. C17H35COOK, potassium stearate).",
        "de": "Harte (weiße) Seifen sind Natriumsalze von Fettsäuren (z. B. C17H35COONa, Natriumstearat); weiche Seifen (Schmierseifen) sind Kaliumsalze (z. B. C17H35COOK, Kaliumstearat).",
        "fr": "Les savons durs (blancs) sont des sels de sodium d'acides gras (ex. C17H35COONa, stéarate de sodium) ; les savons mous sont des sels de potassium (ex. C17H35COOK, stéarate de potassium).",
        "ru": "Твёрдое (белое) мыло — натриевые соли жирных кислот (напр., C17H35COONa, стеарат натрия); мягкое (жидкое) мыло — калиевые соли (напр., C17H35COOK, стеарат калия).",
        "ar": "الصابون الصلب (الأبيض) هو أملاح الصوديوم للأحماض الدهنية (مثل C17H35COONa، ستيارات الصوديوم)؛ أما الصابون الطري فهو أملاح البوتاسيوم (مثل C17H35COOK، ستيارات البوتاسيوم).",
        "zh": "硬（白）肥皂是脂肪酸的钠盐（如C17H35COONa，硬脂酸钠）；软皂是脂肪酸的钾盐（如C17H35COOK，硬脂酸钾）。",
        "ku": "Sabûnên hişk (spî) xwêyên sodyûmê yên asîdên rûn in (mînak C17H35COONa, stearata sodyûmê); sabûnên nerm (sabûna erebî) xwêyên potasyûmê ne (mînak C17H35COOK, stearata potasyûmê)."
      },
      "trap": {
        "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
        "en": "Arab soap contains calcium ions instead of potassium.",
        "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
        "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
        "ru": "Арабское мыло содержит ионы кальция вместо калия.",
        "ar": "يحتوي الصابون العربي على أيونات الكالسيوم بدلاً من البوتاسيوم.",
        "zh": "阿拉伯肥皂含有钙离子而不是钾。",
        "ku": "Sabûna Ereban di şûna potasyûmê de îyonên kalsiyûmê dihewîne."
      }
    },
    {
      "id": "u10-f02",
      "fact": {
        "tr": "Sabun molekülünün polar olan baş kısmı hidrofil (suyu seven), apolar uzun hidrokarbon kuyruğu hidrofobdur (suyu sevmeyen, yağı seven).",
        "en": "The polar head part of the soap molecule is hydrophilic (loving water), while the long, non-polar hydrocarbon tail is hydrophobic (loving oil, hating water).",
        "de": "Der polare Kopfteil des Seifenmoleküls ist hydrophil (liebt Wasser), während der lange, unpolare Kohlenwasserstoffschwanz hydrophob ist (liebt Öl, hasst Wasser).",
        "fr": "La partie polaire de la molécule de savon est hydrophile (aime l’eau), tandis que la longue queue d’hydrocarbure non polaire est hydrophobe (aime l’huile, déteste l’eau).",
        "ru": "Полярная головная часть молекулы мыла гидрофильна (любит воду), а длинный неполярный углеводородный хвост гидрофобен (любит масло и ненавидит воду).",
        "ar": "الجزء الرأسي القطبي لجزيء الصابون محب للماء (يحب الماء)، في حين أن الذيل الهيدروكربوني الطويل غير القطبي كاره للماء (يحب الزيت، ويكره الماء).",
        "zh": "肥皂分子的极性头部部分是亲水的（爱水），而长的非极性碳氢化合物尾部是疏水的（爱油，讨厌水）。",
        "ku": "Beşa serê polar a molekula sabûnê hîdrofîlîk e (avîn hez dike), lê dûvika hîdrokarbonê ya dirêj û ne-polar hîdrofobîk e (ji rûnê hez dike, ji avê nefret dike)."
      },
      "trap": {
        "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
        "en": "The polar head of the soap clings to non-polar dirt.",
        "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
        "fr": "La tête polaire du savon adhère à la saleté non polaire.",
        "ru": "Полярная головка мыла прилипает к неполярной грязи.",
        "ar": "يتمسك الرأس القطبي للصابون بالأوساخ غير القطبية.",
        "zh": "肥皂的极性头粘附在非极性污垢上。",
        "ku": "Serê polar ê sabûnê bi qirêjiya ne-polar ve girêdayî ye."
      }
    },
    {
      "id": "u10-f03",
      "fact": {
        "tr": "Deterjanlar petrol türevidir ve sert sulardaki Ca2+ ve Mg2+ iyonlarıyla çökelek oluşturmadığından sert sularda da iyi temizler.",
        "en": "Detergents are petroleum derivatives and clean well in hard water as they do not form precipitates with the Ca2+ and Mg2+ ions in hard water.",
        "de": "Reinigungsmittel sind Erdölderivate und reinigen gut in hartem Wasser, da sie in hartem Wasser keine Niederschläge mit den Ca2+- und Mg2+-Ionen bilden.",
        "fr": "Les détergents sont des dérivés du pétrole et nettoient bien dans l'eau dure car ils ne forment pas de précipités avec les ions Ca2+ et Mg2+ dans l'eau dure.",
        "ru": "Моющие средства являются производными нефти и хорошо очищают в жесткой воде, поскольку не образуют осадка с ионами Ca2+ и Mg2+ в жесткой воде.",
        "ar": "المنظفات هي مشتقات بترولية وتنظف جيدًا في الماء العسر حيث أنها لا تشكل رواسب مع أيونات Ca2+ وMg2+ في الماء العسر.",
        "zh": "清洁剂是石油衍生物，在硬水中清洁效果良好，因为它们不会与硬水中的 Ca2+ 和 Mg2+ 离子形成沉淀。",
        "ku": "Deterjan derûvên neftê ne û di ava hişk de baş paqij dikin ji ber ku ew bi îyonên Ca2+ û Mg2+ di ava hişk de baran çênakin."
      },
      "trap": {
        "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
        "en": "Detergent precipitates in hard water and loses its cleaning properties.",
        "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
        "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
        "ru": "Моющее средство выпадает в осадок в жесткой воде и теряет свои чистящие свойства.",
        "ar": "يترسب المنظف في الماء العسر ويفقد خصائصه التنظيفية.",
        "zh": "洗涤剂在硬水中沉淀并失去其清洁性能。",
        "ku": "Deterjan di ava hişk de tortî çêdike û taybetmendiya xwe ya paqijkirinê winda dike."
      }
    },
    {
      "id": "u10-f04",
      "fact": {
        "tr": "Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanırken, deterjanlar çevre ve su kirliliğine neden olur.",
        "en": "While soaps are easily broken down by microorganisms in nature, detergents cause environmental and water pollution.",
        "de": "Während Seifen in der Natur leicht von Mikroorganismen zersetzt werden, verursachen Waschmittel Umwelt- und Wasserverschmutzung.",
        "fr": "Alors que les savons sont facilement décomposés par les micro-organismes naturels, les détergents polluent l’environnement et l’eau.",
        "ru": "В то время как мыло легко разрушается микроорганизмами в природе, моющие средства вызывают загрязнение окружающей среды и воды.",
        "ar": "في حين أن الصابون يتحلل بسهولة بواسطة الكائنات الحية الدقيقة في الطبيعة، فإن المنظفات تسبب تلوث البيئة والمياه.",
        "zh": "肥皂很容易被自然界的微生物分解，而洗涤剂则会造成环境和水污染。",
        "ku": "Dema ku sabûn di xwezayê de ji hêla mîkroorganîzmayan ve bi hêsanî têne perçe kirin, paqijker dibe sedema qirêjiya jîngehê û avê."
      },
      "trap": {
        "tr": "Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.",
        "en": "Detergents biodegrade much faster in nature than soaps.",
        "de": "Waschmittel werden in der Natur viel schneller biologisch abgebaut als Seifen.",
        "fr": "Les détergents se biodégradent beaucoup plus rapidement dans la nature que les savons.",
        "ru": "Моющие средства в природе разлагаются гораздо быстрее, чем мыло.",
        "ar": "تتحلل المنظفات بيولوجيًا بشكل أسرع بكثير في الطبيعة من الصابون.",
        "zh": "洗涤剂在自然界中的生物降解速度比肥皂快得多。",
        "ku": "Deterjant di xwezayê de ji sabûnan ​​pir zûtir biyolojîk dibin."
      }
    },
    {
      "id": "u10-f05",
      "fact": {
        "tr": "Polimerizasyon, monomer adı verilen küçük moleküllerin kovalent bağlarla bağlanarak dev makromoleküller oluşturmasıdır.",
        "en": "Polymerization is the formation of giant macromolecules by connecting small molecules called monomers with covalent bonds.",
        "de": "Unter Polymerisation versteht man die Bildung riesiger Makromoleküle durch die Verbindung kleiner Moleküle, sogenannter Monomere, mit kovalenten Bindungen.",
        "fr": "La polymérisation est la formation de macromolécules géantes en reliant de petites molécules appelées monomères par des liaisons covalentes.",
        "ru": "Полимеризация — это образование гигантских макромолекул путем соединения небольших молекул, называемых мономерами, ковалентными связями.",
        "ar": "البلمرة هي تكوين جزيئات كبيرة عملاقة عن طريق ربط جزيئات صغيرة تسمى المونومرات بروابط تساهمية.",
        "zh": "聚合是通过用共价键连接称为单体的小分子形成巨型大分子。",
        "ku": "Polîmerîzasyon bi girêdana molekulên piçûk ên bi navê monomer bi girêdanên kovalentî ve pêkhatina makromolekulên mezin e."
      },
      "trap": {
        "tr": "Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.",
        "en": "Polymers are small compounds held together only by weak van der Waals bonds.",
        "de": "Polymere sind kleine Verbindungen, die nur durch schwache Van-der-Waals-Bindungen zusammengehalten werden.",
        "fr": "Les polymères sont de petits composés maintenus ensemble uniquement par de faibles liaisons de Van der Waals.",
        "ru": "Полимеры представляют собой небольшие соединения, удерживаемые вместе только слабыми связями Ван-дер-Ваальса.",
        "ar": "البوليمرات عبارة عن مركبات صغيرة متماسكة معًا فقط بواسطة روابط فان دير فال الضعيفة.",
        "zh": "聚合物是仅通过弱范德华键结合在一起的小化合物。",
        "ku": "Polîmer pêkhateyên piçûk in ku tenê bi girêdanên van der Waals-ê yên qels li hev têne girtin."
      }
    },
    {
      "id": "u10-f06",
      "fact": {
        "tr": "Polietilen (PE) poşet ve boru üretiminde, polivinil klorür (PVC) kapı ve pencere profilinde kullanılır.",
        "en": "It is used in the production of polyethylene (PE) bags and pipes, and in polyvinyl chloride (PVC) door and window profiles.",
        "de": "Es wird bei der Herstellung von Beuteln und Rohren aus Polyethylen (PE) sowie in Tür- und Fensterprofilen aus Polyvinylchlorid (PVC) verwendet.",
        "fr": "Il est utilisé dans la production de sacs et de tuyaux en polyéthylène (PE), ainsi que dans les profilés de portes et fenêtres en polychlorure de vinyle (PVC).",
        "ru": "Он используется в производстве полиэтиленовых (ПЭ) мешков и труб, а также в дверных и оконных профилях из поливинилхлорида (ПВХ).",
        "ar": "يتم استخدامه في إنتاج أكياس وأنابيب البولي إيثيلين (PE)، وفي مقاطع الأبواب والنوافذ المصنوعة من كلوريد البولي فينيل (PVC).",
        "zh": "它用于生产聚乙烯（PE）袋和管材以及聚氯乙烯（PVC）门窗型材。",
        "ku": "Ew di hilberîna çente û lûleyên polîetîlen (PE), û di profîlên derî û pencereyê de polyvinyl chloride (PVC) de tê bikar anîn."
      },
      "trap": {
        "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
        "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
        "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
        "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
        "ru": "Пластиковые пакеты в основном изготавливают из тефлона (ПТФЭ).",
        "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
        "zh": "购物塑料袋主要由聚四氟乙烯（特氟龙，PTFE）制成。",
        "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
      }
    },
    {
      "id": "u10-f07",
      "fact": {
        "tr": "Politetrafloroetilen (Teflon - PTFE), yapışmaz tava ve tencere kaplamalarında yüksek ısı direnci nedeniyle kullanılır.",
        "en": "Polytetrafluoroethylene (Teflon - PTFE) is used in non-stick pan and pot coatings due to its high heat resistance.",
        "de": "Polytetrafluorethylen (Teflon – PTFE) wird aufgrund seiner hohen Hitzebeständigkeit in Antihaftbeschichtungen für Pfannen und Töpfe verwendet.",
        "fr": "Le polytétrafluoroéthylène (Téflon - PTFE) est utilisé dans les revêtements antiadhésifs des poêles et des casseroles en raison de sa haute résistance à la chaleur.",
        "ru": "Политетрафторэтилен (тефлон - ПТФЭ) используется в антипригарных покрытиях для сковород и кастрюль из-за его высокой термостойкости.",
        "ar": "يستخدم بولي تترافلوروإيثيلين (تفلون - PTFE) في طلاء المقالي والأواني غير اللاصقة بسبب مقاومته العالية للحرارة.",
        "zh": "聚四氟乙烯（特氟龙 - PTFE）由于其高耐热性而被用于不粘锅和锅的涂层。",
        "ku": "Polytetrafluoroethylene (Teflon - PTFE) ji ber berxwedana xwe ya bilind a germê di cil û bergên pan û potan de ne-çît tê bikar anîn."
      },
      "trap": {
        "tr": "Teflon kolayca alev alan ve eriyen bir polimerdir.",
        "en": "Teflon is a polymer that easily catches fire and melts.",
        "de": "Teflon ist ein Polymer, das leicht Feuer fängt und schmilzt.",
        "fr": "Le téflon est un polymère qui s’enflamme et fond facilement.",
        "ru": "Тефлон – это полимер, который легко воспламеняется и плавится.",
        "ar": "التفلون هو بوليمر يشتعل بسهولة ويذوب.",
        "zh": "特氟龙是一种容易着火和熔化的聚合物。",
        "ku": "Teflon polîmerek e ku bi hêsanî agir pê dikeve û dihele."
      }
    },
    {
      "id": "u10-f08",
      "fact": {
        "tr": "Kevlar, kurşun geçirmez yelek, miğfer ve uçak kanatlarında kullanılan hafif ve aşırı dayanıklı sentetik poliamiddir.",
        "en": "Kevlar is a lightweight and extremely durable synthetic polyamide used in bulletproof vests, helmets and aircraft wings.",
        "de": "Kevlar ist ein leichtes und extrem haltbares synthetisches Polyamid, das in kugelsicheren Westen, Helmen und Flugzeugflügeln verwendet wird.",
        "fr": "Le Kevlar est un polyamide synthétique léger et extrêmement durable utilisé dans les gilets pare-balles, les casques et les ailes d'avion.",
        "ru": "Кевлар — легкий и чрезвычайно прочный синтетический полиамид, используемый в бронежилетах, шлемах и крыльях самолетов.",
        "ar": "الكيفلار عبارة عن مادة بولي أميد صناعية خفيفة الوزن ومتينة للغاية تستخدم في السترات المضادة للرصاص والخوذات وأجنحة الطائرات.",
        "zh": "凯夫拉纤维是一种轻质且极其耐用的合成聚酰胺，用于防弹背心、头盔和飞机机翼。",
        "ku": "Kevlar polîamîdek sentetîk a sivik û pir domdar e ku di êlekên gulebaranê, helmet û baskên balafirê de tê bikar anîn."
      },
      "trap": {
        "tr": "Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.",
        "en": "Kevlar is used in the production of disposable plastic cups.",
        "de": "Kevlar wird bei der Herstellung von Einweg-Plastikbechern verwendet.",
        "fr": "Le Kevlar est utilisé dans la production de gobelets en plastique jetables.",
        "ru": "Кевлар используется при производстве одноразовых пластиковых стаканчиков.",
        "ar": "يستخدم الكيفلار في إنتاج الأكواب البلاستيكية التي يمكن التخلص منها.",
        "zh": "凯夫拉纤维用于生产一次性塑料杯。",
        "ku": "Kevlar di hilberîna tasên plastîk ên yekcar de tê bikar anîn."
      }
    },
    {
      "id": "u10-f09",
      "fact": {
        "tr": "Kauçuk doğal (kauçuk ağacından) veya sentetik olarak üretilir ve elastikiyeti sayesinde araba lastiklerinde kullanılır.",
        "en": "Rubber is produced naturally (from the rubber tree) or synthetically and is used in car tires thanks to its elasticity.",
        "de": "Kautschuk wird auf natürliche Weise (aus dem Kautschukbaum) oder synthetisch hergestellt und wird aufgrund seiner Elastizität in Autoreifen verwendet.",
        "fr": "Le caoutchouc est produit naturellement (à partir de l'hévéa) ou synthétiquement et est utilisé dans les pneus de voiture grâce à son élasticité.",
        "ru": "Каучук производится естественным путем (из каучукового дерева) или синтетическим путем и благодаря своей эластичности используется в автомобильных шинах.",
        "ar": "يتم إنتاج المطاط بشكل طبيعي (من شجرة المطاط) أو صناعيا ويستخدم في إطارات السيارات بفضل مرونته.",
        "zh": "橡胶是天然（从橡胶树）或合成产生的，由于其弹性而用于汽车轮胎。",
        "ku": "Lastîk bi awayekî xwezayî (ji dara lastîkê) an jî sentetîk tê hilberandin û bi saya elastîkbûna xwe di tekerên otomobîlan de tê bikaranîn."
      },
      "trap": {
        "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
        "en": "Rubber is a hard brittle crystalline substance.",
        "de": "Gummi ist eine harte, spröde kristalline Substanz.",
        "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
        "ru": "Каучук – твердое хрупкое кристаллическое вещество.",
        "ar": "المطاط مادة بلورية صلبة وهشة.",
        "zh": "橡胶是一种硬脆的结晶物质。",
        "ku": "Laçûk maddeyek krîstalî ya hişk e."
      }
    },
    {
      "id": "u10-f10",
      "fact": {
        "tr": "PET (Polietilen tereftalat) su şişeleri ve meşrubat kaplarında kullanılan geri dönüştürülebilir polimerdir.",
        "en": "PET (Polyethylene terephthalate) is a recyclable polymer used in water bottles and beverage containers.",
        "de": "PET (Polyethylenterephthalat) ist ein recycelbares Polymer, das in Wasserflaschen und Getränkebehältern verwendet wird.",
        "fr": "Le PET (polyéthylène téréphtalate) est un polymère recyclable utilisé dans les bouteilles d'eau et les contenants de boissons.",
        "ru": "ПЭТ (полиэтилентерефталат) — это перерабатываемый полимер, используемый в бутылках для воды и контейнерах для напитков.",
        "ar": "PET (البولي إيثيلين تيريفثاليت) هو بوليمر قابل لإعادة التدوير يستخدم في زجاجات المياه وحاويات المشروبات.",
        "zh": "PET（聚对苯二甲酸乙二醇酯）是一种可回收聚合物，用于水瓶和饮料容器。",
        "ku": "PET (Polyethylene terephthalate) polîmerek vezîvirandinê ye ku di şûşeyên avê û konteynerên vexwarinê de tê bikar anîn."
      },
      "trap": {
        "tr": "PET ambalajlar geri dönüştürülemez.",
        "en": "PET packaging cannot be recycled.",
        "de": "PET-Verpackungen können nicht recycelt werden.",
        "fr": "Les emballages PET ne peuvent pas être recyclés.",
        "ru": "ПЭТ-упаковка не подлежит вторичной переработке.",
        "ar": "لا يمكن إعادة تدوير عبوات PET.",
        "zh": "PET 包装不能回收。",
        "ku": "Ambalaja PET nikare were vezîvirandin."
      }
    },
    {
      "id": "u10-f11",
      "fact": {
        "tr": "Misel yapısında sabunun hidrofob kuyrukları apolar kir taneciğini sarar, hidrofil başları su ile etkileşerek kiri yüzeyden söker.",
        "en": "In the micelle structure, the hydrophobic tails of the soap surround the nonpolar dirt particle, and the hydrophilic heads interact with water and remove the dirt from the surface.",
        "de": "In der Mizellenstruktur umgeben die hydrophoben Schwänze der Seife die unpolaren Schmutzpartikel, und die hydrophilen Köpfe interagieren mit Wasser und entfernen den Schmutz von der Oberfläche.",
        "fr": "Dans la structure micelle, les queues hydrophobes du savon entourent la particule de saleté non polaire, et les têtes hydrophiles interagissent avec l'eau et éliminent la saleté de la surface.",
        "ru": "В структуре мицелл гидрофобные хвосты мыла окружают неполярную частицу грязи, а гидрофильные головки взаимодействуют с водой и удаляют грязь с поверхности.",
        "ar": "في بنية المذيلة، تحيط ذيول الصابون الكارهة للماء بجزيئات الأوساخ غير القطبية، وتتفاعل الرؤوس المحبة للماء مع الماء وتزيل الأوساخ من السطح.",
        "zh": "在胶束结构中，肥皂的疏水尾部包围非极性污垢颗粒，亲水头部与水相互作用并去除表面的污垢。",
        "ku": "Di strukturê micelle de, dûvikên hîdrofobîk ên sabûnê dor parça qirêj a nepolar dorpêç dikin, û serê hîdrofîl bi avê re têkilî dikin û qirêjê ji ser rûyê erdê radikin."
      },
      "trap": {
        "tr": "Misel oluşumunda hidrofil başlar kire saplanır.",
        "en": "During micelle formation, hydrophilic heads get stuck in the dirt.",
        "de": "Bei der Mizellenbildung bleiben hydrophile Köpfe im Schmutz stecken.",
        "fr": "Lors de la formation des micelles, les têtes hydrophiles restent coincées dans la terre.",
        "ru": "При образовании мицелл гидрофильные головки застревают в грязи.",
        "ar": "أثناء تكوين المذيلة، تتعثر الرؤوس المحبة للماء في الأوساخ.",
        "zh": "在胶束形成过程中，亲水头会卡在污垢中。",
        "ku": "Di dema damezrandina micelle de, serê hîdrofîl di nav axê de asê dibin."
      }
    },
    {
      "id": "u10-f12",
      "fact": {
        "tr": "İlaç formları: Tablet, draje, şurup, ampul (enjeksiyon), merhem ve damladır.",
        "en": "Drug forms: Tablet, dragee, syrup, ampoule (injection), ointment and drops.",
        "de": "Darreichungsformen: Tablette, Dragee, Sirup, Ampulle (Injektion), Salbe und Tropfen.",
        "fr": "Formes du médicament : Comprimé, dragée, sirop, ampoule (injection), pommade et gouttes.",
        "ru": "Формы выпуска: таблетки, драже, сироп, ампулы (инъекции), мазь и капли.",
        "ar": "أشكال الدواء: أقراص، دراج، شراب، أمبولة (حقن)، مرهم وقطرات.",
        "zh": "药物剂型：片剂、糖衣丸、糖浆、安瓿（注射剂）、软膏和滴剂。",
        "ku": "Formên dermanan: Tablet, dragee, syrup, ampule (derzî), melhem û dilop."
      },
      "trap": {
        "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
        "en": "All medications are consumed only orally as pills.",
        "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
        "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
        "ru": "Все лекарства употребляются только перорально в виде таблеток.",
        "ar": "يتم تناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
        "zh": "所有药物均仅以药丸形式口服。",
        "ku": "Hemî derman tenê bi devkî wekî heban têne vexwarin."
      }
    },
    {
      "id": "u10-f13",
      "fact": {
        "tr": "Kozmetik ürünlerdeki paraben ve ftalatlar koruyucu ve yumuşatıcı olarak eklense de alerjen ve toksik etkileri vardır.",
        "en": "Although parabens and phthalates are added to cosmetic products as preservatives and softeners, they have allergenic and toxic effects.",
        "de": "Obwohl Parabene und Phthalate als Konservierungsmittel und Weichmacher in Kosmetikprodukten eingesetzt werden, haben sie allergene und toxische Wirkungen.",
        "fr": "Bien que les parabènes et les phtalates soient ajoutés aux produits cosmétiques comme conservateurs et adoucissants, ils ont des effets allergisants et toxiques.",
        "ru": "Хотя парабены и фталаты добавляются в косметические средства в качестве консервантов и смягчителей, они обладают аллергенным и токсическим действием.",
        "ar": "على الرغم من إضافة البارابين والفثالات إلى مستحضرات التجميل كمواد حافظة وملينات، إلا أن لها تأثيرات حساسية وسمية.",
        "zh": "尽管对羟基苯甲酸酯和邻苯二甲酸盐作为防腐剂和软化剂添加到化妆品中，但它们具有致敏和毒性作用。",
        "ku": "Her çend paraben û phthalates wekî parastin û nermker li hilberên kozmetîkî têne zêdekirin jî, ew xwedî bandorên alerjîk û jehrîn in."
      },
      "trap": {
        "tr": "Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.",
        "en": "Preservative chemicals in cosmetic products are completely harmless organic nutrients.",
        "de": "Konservierungschemikalien in Kosmetikprodukten sind völlig harmlose organische Nährstoffe.",
        "fr": "Les conservateurs chimiques contenus dans les produits cosmétiques sont des nutriments organiques totalement inoffensifs.",
        "ru": "Консерванты в косметических продуктах представляют собой совершенно безвредные органические питательные вещества.",
        "ar": "المواد الكيميائية الحافظة الموجودة في مستحضرات التجميل هي مغذيات عضوية غير ضارة تمامًا.",
        "zh": "化妆品中的防腐剂是完全无害的有机营养素。",
        "ku": "Kîmyewîyên parastinê yên di hilberên kozmetîkî de madeyên organîk ên bi tevahî bê zirar in."
      }
    },
    {
      "id": "u10-f14",
      "fact": {
        "tr": "Sızma zeytinyağı asitliği en düşük, mekanik yolla elde edilen doğal ve kaliteli yağdır.",
        "en": "Extra virgin olive oil is a natural and high-quality oil with the lowest acidity, obtained mechanically.",
        "de": "Extra natives Olivenöl ist ein natürliches und hochwertiges Öl mit dem geringsten Säuregehalt, das mechanisch gewonnen wird.",
        "fr": "L'huile d'olive extra vierge est une huile naturelle et de haute qualité avec la plus faible acidité, obtenue mécaniquement.",
        "ru": "Оливковое масло Extra Virgin – натуральное и высококачественное масло с самой низкой кислотностью, полученное механическим способом.",
        "ar": "زيت الزيتون البكر الممتاز هو زيت طبيعي وعالي الجودة مع أقل نسبة حموضة، ويتم الحصول عليه ميكانيكيًا.",
        "zh": "特级初榨橄榄油是一种天然优质油，酸度最低，通过机械方法获得。",
        "ku": "Rûnê zeytûnê yê bijîjk, rûnek xwezayî û bi kalîte ye ku bi asîdiya herî kêm heye, ku bi mekanîkî tê wergirtin."
      },
      "trap": {
        "tr": "Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.",
        "en": "Riviera oil is the purest natural olive oil that has not undergone any processing.",
        "de": "Riviera-Öl ist das reinste natürliche Olivenöl, das keiner Verarbeitung unterzogen wurde.",
        "fr": "L'huile Riviera est l'huile d'olive naturelle la plus pure qui n'a subi aucune transformation.",
        "ru": "Масло «Ривьера» — чистейшее натуральное оливковое масло, не подвергавшееся никакой обработке.",
        "ar": "زيت الريفييرا هو أنقى زيت زيتون طبيعي لم يخضع لأي معالجة.",
        "zh": "里维埃拉油是最纯净的天然橄榄油，未经过任何加工。",
        "ku": "Rûnê Riviera rûnê zeytûna xwezayî ya herî paqij e ku ti pêvajoyek nekiriye."
      }
    },
    {
      "id": "u10-f15",
      "fact": {
        "tr": "Hidrojenasyon yöntemiyle doymamış bitkisel sıvı yağlara hidrojen katılarak margarinler elde edilir.",
        "en": "Margarines are obtained by adding hydrogen to unsaturated vegetable oils through the hydrogenation method.",
        "de": "Margarinen werden durch Zugabe von Wasserstoff zu ungesättigten Pflanzenölen durch das Hydrierungsverfahren gewonnen.",
        "fr": "Les margarines sont obtenues en ajoutant de l'hydrogène à des huiles végétales insaturées par la méthode d'hydrogénation.",
        "ru": "Маргарины получают добавлением водорода к ненасыщенным растительным маслам методом гидрирования.",
        "ar": "يتم الحصول على السمن بإضافة الهيدروجين إلى الزيوت النباتية غير المشبعة بطريقة الهدرجة.",
        "zh": "人造黄油是通过氢化方法向不饱和植物油中添加氢气而得到的。",
        "ku": "Margarîn bi lêkirina hîdrojenê li rûnên nebatî yên têrnebûyî bi rêbaza hîdrojenkirinê têne bidestxistin."
      },
      "trap": {
        "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
        "en": "Margarines are produced by boiling animal bones.",
        "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
        "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
        "ru": "Маргарины производят путем варки костей животных.",
        "ar": "يتم إنتاج السمن عن طريق غلي عظام الحيوانات.",
        "zh": "人造黄油是通过煮沸动物骨头制成的。",
        "ku": "Margarîn bi kelandina hestiyên heywanan tên çêkirin."
      }
    },
    {
      "id": "u10-f16",
      "fact": {
        "tr": "Pastörizasyon gıdadaki patojen bakterileri öldürmek için 60-75 °C'de kısa süreli ısıtma işlemidir.",
        "en": "Pasteurization is a short-term heating process at 60-75 °C to kill pathogenic bacteria in food.",
        "de": "Bei der Pasteurisierung handelt es sich um einen kurzzeitigen Erhitzungsprozess bei 60–75 °C, um krankheitserregende Bakterien in Lebensmitteln abzutöten.",
        "fr": "La pasteurisation est un processus de chauffage à court terme entre 60 et 75 °C destiné à tuer les bactéries pathogènes présentes dans les aliments.",
        "ru": "Пастеризация – это кратковременный процесс нагревания при температуре 60-75°С, направленный на уничтожение болезнетворных бактерий в пищевых продуктах.",
        "ar": "البسترة هي عملية تسخين قصيرة المدى عند درجة حرارة 60-75 درجة مئوية لقتل البكتيريا المسببة للأمراض في الطعام.",
        "zh": "巴氏灭菌是在60-75°C的短期加热过程，以杀死食品中的致病菌。",
        "ku": "Pasteurîzasyon pêvajoyek germkirina demek kurt e ku di 60-75 °C de ji bo kuştina bakteriyên pathogenîk ên di xwarinê de ye."
      },
      "trap": {
        "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
        "en": "Pasteurization is a method of sterilizing food by freezing.",
        "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
        "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
        "ru": "Пастеризация – это метод стерилизации пищевых продуктов путем замораживания.",
        "ar": "البسترة هي طريقة لتعقيم الطعام عن طريق التجميد.",
        "zh": "巴氏灭菌是一种通过冷冻对食品进行灭菌的方法。",
        "ku": "Pasteurîzasyon rêbazek sterilkirina xwarinê bi cemidandinê ye."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u10-c01",
      "conceptA": {
        "tr": "Sabun",
        "en": "soap",
        "de": "Seife",
        "fr": "savon",
        "ru": "мыло",
        "ar": "صابون",
        "zh": "肥皂",
        "ku": "sabûn"
      },
      "conceptB": {
        "tr": "Deterjan",
        "en": "detergent",
        "de": "Waschmittel",
        "fr": "détergent",
        "ru": "моющее средство",
        "ar": "المنظفات",
        "zh": "洗涤剂",
        "ku": "detergent"
      },
      "distinction": {
        "tr": "Sabun bitkisel/hayvansal yağdan üretilir doğada parçalanır; deterjan petrol türevidir sert sularda da temizler ama çevre kirliliği yapar.",
        "en": "Soap is produced from vegetable/animal oil and breaks down in nature; Detergent is a petroleum derivative and cleans it in hard water, but it pollutes the environment.",
        "de": "Seife wird aus pflanzlichem/tierischem Öl hergestellt und wird in der Natur abgebaut; Waschmittel ist ein Erdölderivat und reinigt zwar hartes Wasser, belastet jedoch die Umwelt.",
        "fr": "Le savon est produit à partir d’huile végétale/animale et se décompose dans la nature ; Le détergent est un dérivé du pétrole et le nettoie avec de l'eau dure, mais il pollue l'environnement.",
        "ru": "Мыло производится из растительного/животного масла и разлагается в природе; Моющее средство является производным нефти и очищает его в жесткой воде, но загрязняет окружающую среду.",
        "ar": "يتم إنتاج الصابون من الزيوت النباتية/الحيوانية ويتحلل في الطبيعة؛ المنظفات عبارة عن مشتقات بترولية ويتم تنظيفها بالماء العسر، ولكنها تلوث البيئة.",
        "zh": "肥皂由植物/动物油制成，在自然状态下会分解；洗涤剂是石油衍生物，用硬水清洗，但会污染环境。",
        "ku": "Sabûn ji rûnê nebatî/heywanî çêdibe û di xwezayê de perçe dibe; Deterjan berhemeke petrolê ye û di ava hişk de paqij dike, lê jîngehê qirêj dike."
      }
    },
    {
      "id": "u10-c02",
      "conceptA": {
        "tr": "Beyaz Sabun",
        "en": "White Soap",
        "de": "Weiße Seife",
        "fr": "Savon Blanc",
        "ru": "Белое мыло",
        "ar": "الصابون الأبيض",
        "zh": "白皂",
        "ku": "Sabûna Spî"
      },
      "conceptB": {
        "tr": "Arap Sabunu",
        "en": "Arab Soap",
        "de": "Arabische Seife",
        "fr": "Savon Arabe",
        "ru": "Арабское мыло",
        "ar": "الصابون العربي",
        "zh": "阿拉伯肥皂",
        "ku": "Sabûna Ereban"
      },
      "distinction": {
        "tr": "Beyaz sabun sodyum tuzu serttir; arap sabunu potasyum tuzu yumuşaktır.",
        "en": "White soap sodium salt is hard; Arabian soap potassium salt is soft.",
        "de": "Weißes Seifennatriumsalz ist hart; Arabisches Seifenkaliumsalz ist weich.",
        "fr": "Le sel de sodium du savon blanc est dur ; Le sel de potassium du savon arabe est doux.",
        "ru": "Белая мыльная натриевая соль тверда; Аравийская мыльная калийная соль мягкая.",
        "ar": "يعتبر الصابون الأبيض ملح الصوديوم صعباً؛ الصابون العربي ملح بوتاسيوم ناعم .",
        "zh": "白皂钠盐较硬；阿拉伯皂钾盐柔软。",
        "ku": "Xweyê sodyûmê sabûna spî hişk e; Sabûna Ereban xwêya potasyûmê nerm e."
      }
    },
    {
      "id": "u10-c03",
      "conceptA": {
        "tr": "Sızma Zeytinyağı",
        "en": "Extra Virgin Olive Oil",
        "de": "Natives Olivenöl extra",
        "fr": "Huile d'olive vierge extra",
        "ru": "Оливковое масло Extra Virgin",
        "ar": "زيت الزيتون البكر الممتاز",
        "zh": "特级初榨橄榄油",
        "ku": "Rûnê zeytûnê yê sizma"
      },
      "conceptB": {
        "tr": "Riviera Zeytinyağı",
        "en": "Riviera Olive Oil",
        "de": "Riviera-Olivenöl",
        "fr": "Huile d'olive Riviera",
        "ru": "Оливковое масло Riviera",
        "ar": "زيت الزيتون ريفييرا",
        "zh": "里维埃拉橄榄油",
        "ku": "Rûnê zeytûnê yê Riviera"
      },
      "distinction": {
        "tr": "Sızma zeytinyağı zeytinden yalnızca mekanik yolla elde edilen, asitliği en düşük natürel yağdır; riviera zeytinyağı rafine zeytinyağı ile natürel zeytinyağının karışımıdır.",
        "en": "Extra virgin olive oil is a natural oil obtained from olives only by mechanical means and has the lowest acidity; Riviera olive oil is a blend of refined olive oil and virgin olive oil.",
        "de": "Natives Olivenöl extra wird nur mechanisch aus Oliven gewonnen und hat den geringsten Säuregehalt; Riviera-Olivenöl ist eine Mischung aus raffiniertem und nativem Olivenöl.",
        "fr": "L'huile d'olive vierge extra est obtenue uniquement par des procédés mécaniques et a l'acidité la plus faible ; l'huile d'olive Riviera est un mélange d'huile d'olive raffinée et d'huile d'olive vierge.",
        "ru": "Масло Extra Virgin получают из оливок только механическим путём, его кислотность самая низкая; масло Riviera — смесь рафинированного и натурального оливкового масла.",
        "ar": "يُستخلص زيت الزيتون البكر الممتاز من الزيتون بطرق ميكانيكية فقط وهو الأقل حموضة؛ أما زيت ريفييرا فهو خليط من زيت الزيتون المكرر وزيت الزيتون البكر.",
        "zh": "特级初榨橄榄油仅通过机械方法从橄榄中获得，酸度最低；里维埃拉橄榄油是精炼橄榄油与初榨橄榄油的混合物。",
        "ku": "Rûnê zeytûnê yê sizma tenê bi rêya mekanîkî ji zeytûnê tê wergirtin û asîdiya wî herî kêm e; rûnê Riviera tevliheviya rûnê zeytûnê yê rafînekirî û rûnê zeytûnê yê xwezayî ye."
      }
    },
    {
      "id": "u10-c04",
      "conceptA": {
        "tr": "Hidrofil Uç",
        "en": "Hydrophilic Tip",
        "de": "Hydrophile Spitze",
        "fr": "Pointe hydrophile",
        "ru": "Гидрофильный наконечник",
        "ar": "الطرف المحب للماء",
        "zh": "亲水尖端",
        "ku": "Tîpa hîdrofîlî"
      },
      "conceptB": {
        "tr": "Hidrofob Uç",
        "en": "Hydrophobic Tip",
        "de": "Hydrophobe Spitze",
        "fr": "Pointe hydrophobe",
        "ru": "Гидрофобный наконечник",
        "ar": "الطرف الكاره للماء",
        "zh": "疏水尖端",
        "ku": "Tîpa hîdrofobîk"
      },
      "distinction": {
        "tr": "Hidrofil uç polar olup suyu sever ve suya tutunur; hidrofob uç apolar hidrokarbon zinciri olup kire tutunur.",
        "en": "The hydrophilic end is polar and loves water and clings to water; The hydrophobic end is a non-polar hydrocarbon chain and clings to dirt.",
        "de": "Das hydrophile Ende ist polar und liebt Wasser und haftet an Wasser; Das hydrophobe Ende ist eine unpolare Kohlenwasserstoffkette und haftet an Schmutz.",
        "fr": "L'extrémité hydrophile est polaire et aime l'eau et s'accroche à l'eau ; L'extrémité hydrophobe est une chaîne d'hydrocarbures non polaire et adhère à la saleté.",
        "ru": "Гидрофильный конец полярен, любит воду и прилипает к воде; Гидрофобный конец представляет собой неполярную углеводородную цепь и прилипает к грязи.",
        "ar": "الطرف المحب للماء قطبي ويحب الماء ويلتصق به. النهاية الكارهة للماء عبارة عن سلسلة هيدروكربونية غير قطبية وتتشبث بالأوساخ.",
        "zh": "亲水端是极性的，喜水并紧贴水；疏水端是非极性烃链，可粘附污垢。",
        "ku": "Dawiya hîdrofîlîk polar e û ji avê hez dike û bi avê ve girêdide; Dawiya hîdrofobîk zincîra hîdrokarbonê ya ne-polar e û bi axê ve girêdayî ye."
      }
    },
    {
      "id": "u10-c05",
      "conceptA": {
        "tr": "Doğal Polimer",
        "en": "Natural Polymer",
        "de": "Natürliches Polymer",
        "fr": "Polymère naturel",
        "ru": "Натуральный полимер",
        "ar": "البوليمر الطبيعي",
        "zh": "天然高分子",
        "ku": "Polymer xwezayî"
      },
      "conceptB": {
        "tr": "Sentetik Polimer",
        "en": "Synthetic Polymer",
        "de": "Synthetisches Polymer",
        "fr": "Polymère synthétique",
        "ru": "Синтетический полимер",
        "ar": "البوليمر الاصطناعي",
        "zh": "合成聚合物",
        "ku": "Polîmera sentetîk"
      },
      "distinction": {
        "tr": "Nişasta, selüloz ve DNA doğal polimerlerdir; PE, PVC, Teflon ve Kevlar fabrikada üretilen sentetik polimerlerdir.",
        "en": "Starch, cellulose and DNA are natural polymers; PE, PVC, Teflon and Kevlar are factory-produced synthetic polymers.",
        "de": "Stärke, Cellulose und DNA sind natürliche Polymere; PE, PVC, Teflon und Kevlar sind industriell hergestellte synthetische Polymere.",
        "fr": "L'amidon, la cellulose et l'ADN sont des polymères naturels ; Le PE, le PVC, le Téflon et le Kevlar sont des polymères synthétiques produits en usine.",
        "ru": "Крахмал, целлюлоза и ДНК являются природными полимерами; ПЭ, ПВХ, тефлон и кевлар — синтетические полимеры заводского производства.",
        "ar": "النشا والسليلوز والحمض النووي هي بوليمرات طبيعية. PE، PVC، Teflon وKevlar عبارة عن بوليمرات صناعية يتم إنتاجها في المصنع.",
        "zh": "淀粉、纤维素和DNA都是天然聚合物； PE、PVC、Teflon 和 Kevlar 是工厂生产的合成聚合物。",
        "ku": "Starch, selulos û DNA polîmerên xwezayî ne; PE, PVC, Teflon û Kevlar polîmerên sentetîk ên fabrîkî ne."
      }
    },
    {
      "id": "u10-c06",
      "conceptA": {
        "tr": "Termoplastik",
        "en": "thermoplastic",
        "de": "Thermoplast",
        "fr": "thermoplastique",
        "ru": "термопластик",
        "ar": "لدن بالحرارة",
        "zh": "热塑性塑料",
        "ku": "termoplastîk"
      },
      "conceptB": {
        "tr": "Termoset Polimer",
        "en": "Thermosetting Polymer",
        "de": "Duroplastisches Polymer",
        "fr": "Polymère thermodurcissable",
        "ru": "Термореактивный полимер",
        "ar": "البوليمر بالحرارة",
        "zh": "热固性聚合物",
        "ku": "Polîmera germê"
      },
      "distinction": {
        "tr": "Termoplastikler ısıtıldığında yumuşayıp tekrar şekil alabilir; termoset polimerler ısıtıldığında çapraz bağları nedeniyle kömürleşir.",
        "en": "Thermoplastics can soften and reshape when heated; When thermoset polymers are heated, they char due to their cross-linking.",
        "de": "Thermoplaste können beim Erhitzen weich werden und sich neu verformen; Wenn duroplastische Polymere erhitzt werden, verkohlen sie aufgrund ihrer Vernetzung.",
        "fr": "Les thermoplastiques peuvent se ramollir et se remodeler lorsqu'ils sont chauffés ; Lorsque les polymères thermodurcis sont chauffés, ils carbonisent en raison de leur réticulation.",
        "ru": "Термопласты могут размягчаться и изменять форму при нагревании; При нагревании термореактивных полимеров они обугливаются из-за сшивки.",
        "ar": "يمكن لللدائن الحرارية أن تنعم وتعيد تشكيلها عند تسخينها؛ عندما يتم تسخين البوليمرات المتصلبة بالحرارة، فإنها تتفحم بسبب ارتباطها المتقاطع.",
        "zh": "热塑性塑料受热后会软化并重塑形状；当热固性聚合物被加热时，它们会由于交联而烧焦。",
        "ku": "Thermoplastics dikarin nerm bibin û dema ku germ dibin ji nû ve çêdibin; Dema ku polîmerên termoset têne germ kirin, ew ji ber girêdana xwe ya xaçê dişewitînin."
      }
    },
    {
      "id": "u10-c07",
      "conceptA": {
        "tr": "Çamaşır Suyu (NaClO)",
        "en": "Bleach (NaClO)",
        "de": "Bleichlauge (NaClO)",
        "fr": "Eau de Javel (NaClO)",
        "ru": "Отбеливатель (NaClO)",
        "ar": "ماء الجافيل (NaClO)",
        "zh": "漂白水 (NaClO)",
        "ku": "Ava çilşoyê (NaClO)"
      },
      "conceptB": {
        "tr": "Kireç Kaymağı [Ca(ClO)2]",
        "en": "Bleaching Powder [Ca(ClO)2]",
        "de": "Chlorkalk [Ca(ClO)2]",
        "fr": "Chlorure de chaux [Ca(ClO)2]",
        "ru": "Хлорная известь [Ca(ClO)2]",
        "ar": "مسحوق التبييض [Ca(ClO)2]",
        "zh": "漂白粉 [Ca(ClO)2]",
        "ku": "Toza spîkirinê [Ca(ClO)2]"
      },
      "distinction": {
        "tr": "Çamaşır suyu sodyum hipoklorit sulu çözeltisidir; kireç kaymağı kalsiyum hipoklorit içeren katı dezenfektandır.",
        "en": "Bleach is an aqueous solution of sodium hypochlorite; bleaching powder is a solid disinfectant containing calcium hypochlorite.",
        "de": "Bleichlauge ist eine wässrige Natriumhypochloritlösung; Chlorkalk ist ein festes Desinfektionsmittel, das Calciumhypochlorit enthält.",
        "fr": "L'eau de Javel est une solution aqueuse d'hypochlorite de sodium ; le chlorure de chaux est un désinfectant solide contenant de l'hypochlorite de calcium.",
        "ru": "Отбеливатель — водный раствор гипохлорита натрия; хлорная известь — твёрдое дезинфицирующее средство, содержащее гипохлорит кальция.",
        "ar": "ماء الجافيل محلول مائي لهيبوكلوريت الصوديوم؛ أما مسحوق التبييض فهو مطهر صلب يحتوي على هيبوكلوريت الكالسيوم.",
        "zh": "漂白水是次氯酸钠的水溶液；漂白粉是含有次氯酸钙的固体消毒剂。",
        "ku": "Ava çilşoyê çareseriya avî ya hîpoklorîta sodyûmê ye; toza spîkirinê dezenfektaneke hişk e ku hîpoklorîta kalsiyûmê dihewîne."
      }
    },
    {
      "id": "u10-c08",
      "conceptA": {
        "tr": "Tuz Ruhu (HCl)",
        "en": "Spirit of Salt (HCl)",
        "de": "Salzsäure (HCl)",
        "fr": "Esprit de sel (HCl)",
        "ru": "Соляная кислота (HCl)",
        "ar": "روح الملح (HCl)",
        "zh": "盐酸洁厕剂 (HCl)",
        "ku": "Ruhê xwê (HCl)"
      },
      "conceptB": {
        "tr": "Lavabo Açıcı (NaOH/KOH)",
        "en": "Drain Opener (NaOH/KOH)",
        "de": "Abflussreiniger (NaOH/KOH)",
        "fr": "Déboucheur (NaOH/KOH)",
        "ru": "Средство для прочистки труб (NaOH/KOH)",
        "ar": "مسلّك المجاري (NaOH/KOH)",
        "zh": "管道疏通剂 (NaOH/KOH)",
        "ku": "Vekerê lavaboyê (NaOH/KOH)"
      },
      "distinction": {
        "tr": "Tuz ruhu seyreltik HCl çözeltisidir ve kireç (CaCO3) lekelerini çözer; lavabo açıcılar NaOH veya KOH gibi kuvvetli bazlar içerir ve yağ ile saç tıkanıklıklarını giderir.",
        "en": "Spirit of salt is a dilute HCl solution that dissolves limescale (CaCO3); drain openers contain strong bases such as NaOH or KOH and clear grease and hair clogs.",
        "de": "Salzsäure ist eine verdünnte HCl-Lösung und löst Kalkablagerungen (CaCO3); Abflussreiniger enthalten starke Basen wie NaOH oder KOH und lösen Fett- und Haarverstopfungen.",
        "fr": "L'esprit de sel est une solution diluée de HCl qui dissout le calcaire (CaCO3) ; les déboucheurs contiennent des bases fortes comme NaOH ou KOH et éliminent les bouchons de graisse et de cheveux.",
        "ru": "Бытовая соляная кислота — разбавленный раствор HCl, растворяющий известковый налёт (CaCO3); средства для прочистки труб содержат сильные основания (NaOH, KOH) и устраняют засоры из жира и волос.",
        "ar": "روح الملح محلول مخفف من HCl يذيب الترسبات الكلسية (CaCO3)؛ أما مسلّكات المجاري فتحتوي على قواعد قوية مثل NaOH أو KOH وتزيل انسدادات الدهون والشعر.",
        "zh": "盐酸洁厕剂是稀HCl溶液，可溶解水垢（CaCO3）；管道疏通剂含有NaOH或KOH等强碱，可清除油脂和毛发堵塞。",
        "ku": "Ruhê xwê çareseriya sivik a HCl e û lekeyên kilsê (CaCO3) dihelîne; vekerên lavaboyê bazên xurt ên wekî NaOH an KOH dihewînin û girtinên rûn û por vedikin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u10-s01",
      "title": {
        "tr": "Sabunun Kir Temizleme Mekanizması",
        "en": "Dirt Cleaning Mechanism of Soap",
        "de": "Schmutzreinigungsmechanismus von Seife",
        "fr": "Mécanisme de nettoyage de la saleté du savon",
        "ru": "Механизм очистки грязи мылом",
        "ar": "آلية تنظيف الأوساخ من الصابون",
        "zh": "肥皂的去污机理",
        "ku": "Mekanîzmaya Paqijkirina Avê ya Sabûnê"
      },
      "steps": [
        {
          "tr": "Sabun suda çözünerek anyon ve katyonlarına ayrışır",
          "en": "Soap dissolves in water and dissociates into anions and cations",
          "de": "Seife löst sich in Wasser und dissoziiert in Anionen und Kationen",
          "fr": "Le savon se dissout dans l'eau et se dissocie en anions et cations",
          "ru": "Мыло растворяется в воде и диссоциирует на анионы и катионы",
          "ar": "يذوب الصابون في الماء ويتفكك إلى أنيونات وكاتيونات",
          "zh": "肥皂溶于水并电离成阴离子和阳离子",
          "ku": "Sabûn di avê de dihele û dibe anyon û katyon"
        },
        {
          "tr": "Sabun anyonlarının apolar kuyrukları apolar kire tutunur",
          "en": "The nonpolar tails of the soap anions attach to the nonpolar dirt",
          "de": "Die unpolaren Schwänze der Seifenanionen haften am unpolaren Schmutz",
          "fr": "Les queues apolaires des anions du savon s'accrochent à la saleté apolaire",
          "ru": "Неполярные хвосты анионов мыла прикрепляются к неполярной грязи",
          "ar": "تلتصق الذيول غير القطبية لأنيونات الصابون بالأوساخ غير القطبية",
          "zh": "肥皂阴离子的非极性尾部附着在非极性污垢上",
          "ku": "Dûvikên ne-polar ên anyonên sabûnê bi qirêjiya ne-polar ve dizeliqin"
        },
        {
          "tr": "Kir taneciği, polar başları dışa (suya) dönük bir misel ile sarılır",
          "en": "The dirt particle is enclosed in a micelle whose polar heads face outward toward the water",
          "de": "Das Schmutzteilchen wird von einer Mizelle umschlossen, deren polare Köpfe nach außen zum Wasser zeigen",
          "fr": "La particule de saleté est enfermée dans une micelle dont les têtes polaires sont tournées vers l'eau",
          "ru": "Частица грязи заключается в мицеллу, полярные головки которой обращены наружу, к воде",
          "ar": "تُحاط جسيمة الأوساخ بمذيلة تتجه رؤوسها القطبية إلى الخارج نحو الماء",
          "zh": "污垢颗粒被包裹在胶束中，胶束的极性头部朝外指向水",
          "ku": "Perçeya qirêjê di nav miselekê de tê pêçan ku serên wê yên polar ber bi derve (avê) ne"
        },
        {
          "tr": "Çalkalama ile miseller yüzeyden sökülür ve suyla uzaklaştırılır",
          "en": "With agitation, the micelles are lifted from the surface and carried away by water",
          "de": "Durch Bewegen werden die Mizellen von der Oberfläche gelöst und mit dem Wasser fortgespült",
          "fr": "Par agitation, les micelles se détachent de la surface et sont entraînées par l'eau",
          "ru": "При встряхивании мицеллы отрываются от поверхности и уносятся водой",
          "ar": "بالتحريك تنفصل المذيلات عن السطح ويحملها الماء بعيدًا",
          "zh": "经搅动，胶束从表面脱离并被水带走",
          "ku": "Bi hejandinê misel ji ser rûyê tiştî vediqetin û bi avê re diçin"
        }
      ]
    },
    {
      "id": "u10-s02",
      "title": {
        "tr": "Sabun Üretim Reaksiyonu",
        "en": "Soap Production Reaction",
        "de": "Reaktion der Seifenproduktion",
        "fr": "Réaction de production de savon",
        "ru": "Реакция производства мыла",
        "ar": "تفاعل إنتاج الصابون",
        "zh": "制皂反应",
        "ku": "Reaksiyona Hilberîna Sabûnê"
      },
      "steps": [
        {
          "tr": "Bitkisel veya hayvansal yağ ısıtılır",
          "en": "Vegetable or animal oil is heated",
          "de": "Pflanzen- oder tierisches Öl wird erhitzt",
          "fr": "L'huile végétale ou animale est chauffée",
          "ru": "Растительное или животное масло нагревают.",
          "ar": "يتم تسخين الزيت النباتي أو الحيواني",
          "zh": "植物油或动物油被加热",
          "ku": "Rûnê sebze yan jî heywan tê germkirin"
        },
        {
          "tr": "Derişik sodyum hidroksit (NaOH) eklenir",
          "en": "Concentrated sodium hydroxide (NaOH) is added",
          "de": "Konzentriertes Natriumhydroxid (NaOH) wird hinzugefügt",
          "fr": "De l'hydroxyde de sodium concentré (NaOH) est ajouté",
          "ru": "Добавляется концентрированный гидроксид натрия (NaOH).",
          "ar": "يضاف هيدروكسيد الصوديوم المركز (NaOH).",
          "zh": "添加浓氢氧化钠 (NaOH)",
          "ku": "Hîdroksîdê sodyûmê konsantrekirî (NaOH) tê zêdekirin"
        },
        {
          "tr": "Saponifikasyon (sabunlaşma) tepkimesi gerçekleşir",
          "en": "The saponification reaction takes place",
          "de": "Die Verseifungsreaktion findet statt",
          "fr": "La réaction de saponification a lieu",
          "ru": "Реакция омыления протекает",
          "ar": "يحدث تفاعل التصبن",
          "zh": "发生皂化反应",
          "ku": "Reaksiyona saponification pêk tê"
        },
        {
          "tr": "Tuz eklenerek sabun kalıbı çöktürülür ve gliserin ayrılır",
          "en": "By adding salt, the soap bar is precipitated and the glycerin is separated.",
          "de": "Durch die Zugabe von Salz wird das Seifenstück ausgefällt und das Glycerin abgetrennt.",
          "fr": "En ajoutant du sel, le pain de savon est précipité et la glycérine est séparée.",
          "ru": "При добавлении соли кусок мыла осаждается и глицерин отделяется.",
          "ar": "بإضافة الملح، يتم ترسيب قطعة الصابون وفصل الجلسرين.",
          "zh": "通过添加盐，皂条沉淀并分离出甘油。",
          "ku": "Bi zêdekirina xwê, sabûn tê niştandin û glîserîn ji hev vediqete."
        }
      ]
    },
    {
      "id": "u10-s03",
      "title": {
        "tr": "Polimerleşme Süreci",
        "en": "Polymerization Process",
        "de": "Polymerisationsprozess",
        "fr": "Processus de polymérisation",
        "ru": "Процесс полимеризации",
        "ar": "عملية البلمرة",
        "zh": "聚合工艺",
        "ku": "Pêvajoya Polymerization"
      },
      "steps": [
        {
          "tr": "Küçük doymamış monomer molekülleri seçilir",
          "en": "Small unsaturated monomer molecules are selected",
          "de": "Es werden kleine ungesättigte Monomermoleküle ausgewählt",
          "fr": "De petites molécules de monomères insaturés sont sélectionnées",
          "ru": "Отбираются небольшие молекулы ненасыщенного мономера.",
          "ar": "يتم اختيار جزيئات مونومر صغيرة غير مشبعة",
          "zh": "选用小分子不饱和单体",
          "ku": "Molekulên monomer ên biçûk ên têrnebûyî têne hilbijartin"
        },
        {
          "tr": "Yüksek sıcaklık ve basınçta katalizör eklenir",
          "en": "Catalyst is added at high temperature and pressure",
          "de": "Der Katalysator wird bei hoher Temperatur und hohem Druck zugegeben",
          "fr": "Le catalyseur est ajouté à haute température et pression",
          "ru": "Катализатор добавляется при высокой температуре и давлении.",
          "ar": "تتم إضافة المحفز عند درجة حرارة وضغط مرتفعين",
          "zh": "在高温高压下添加催化剂",
          "ku": "Katalîzator di germahî û zexta bilind de tê zêdekirin"
        },
        {
          "tr": "Pi bağları açılarak monomerler birbirine bağlanır",
          "en": "Monomers are bonded to each other by opening pi bonds",
          "de": "Monomere werden durch die Öffnung von Pi-Bindungen miteinander verbunden",
          "fr": "Les monomères sont liés les uns aux autres en ouvrant des liaisons pi",
          "ru": "Мономеры соединяются друг с другом путем разрыва пи-связей.",
          "ar": "ترتبط المونومرات ببعضها البعض عن طريق فتح روابط باي",
          "zh": "单体通过打开 pi 键彼此键合",
          "ku": "Monomer bi vekirina bendên pi bi hev ve têne girêdan"
        },
        {
          "tr": "Binlerce birimden oluşan dev polimer zinciri oluşur",
          "en": "A giant polymer chain consisting of thousands of units is formed",
          "de": "Es entsteht eine riesige Polymerkette, die aus Tausenden von Einheiten besteht",
          "fr": "Une chaîne polymère géante composée de milliers d’unités se forme",
          "ru": "Образуется гигантская полимерная цепь, состоящая из тысяч звеньев.",
          "ar": "يتم تشكيل سلسلة بوليمر عملاقة تتكون من آلاف الوحدات",
          "zh": "形成了由数千个单元组成的巨型聚合物链",
          "ku": "Zincîreke polîmer a mezin ku ji hezaran yekîneyan pêk tê çêdibe"
        }
      ]
    },
    {
      "id": "u10-s04",
      "title": {
        "tr": "PET Ambalajların Geri Dönüşüm Basamakları",
        "en": "Recycling Steps for PET Packaging",
        "de": "Recyclingschritte für PET-Verpackungen",
        "fr": "Étapes du recyclage des emballages PET",
        "ru": "Этапы переработки ПЭТ-упаковки",
        "ar": "مراحل إعادة تدوير عبوات PET",
        "zh": "PET包装的回收步骤",
        "ku": "Gavên vezîvirandina ambalajên PET"
      },
      "steps": [
        {
          "tr": "Kullanılmış PET ambalajlar toplanır",
          "en": "Used PET packaging is collected",
          "de": "Gebrauchte PET-Verpackungen werden gesammelt",
          "fr": "Les emballages PET usagés sont collectés",
          "ru": "Использованную ПЭТ-упаковку собирают",
          "ar": "تُجمع عبوات PET المستعملة",
          "zh": "收集用过的PET包装",
          "ku": "Ambalajên PET ên bikaranîbûyî têne berhevkirin"
        },
        {
          "tr": "Ambalajlar geri dönüşüm kodlarına göre türlerine ayrıştırılır",
          "en": "The packaging is sorted by type according to recycling codes",
          "de": "Die Verpackungen werden nach Recyclingcodes sortiert",
          "fr": "Les emballages sont triés par type selon leur code de recyclage",
          "ru": "Упаковку сортируют по типам согласно кодам переработки",
          "ar": "تُفرز العبوات حسب نوعها وفق رموز إعادة التدوير",
          "zh": "按回收标识对包装进行分类",
          "ku": "Ambalaj li gorî kodên vezîvirandinê li gorî cureyê xwe têne veqetandin"
        },
        {
          "tr": "Ayrılan PET'ler yıkanır ve küçük pullar hâlinde kırılır",
          "en": "The separated PET is washed and shredded into small flakes",
          "de": "Das aussortierte PET wird gewaschen und zu kleinen Flakes zerkleinert",
          "fr": "Le PET trié est lavé et broyé en petites paillettes",
          "ru": "Отсортированный ПЭТ моют и измельчают в мелкие хлопья",
          "ar": "يُغسل PET المفصول ويُفرم إلى رقائق صغيرة",
          "zh": "分离出的PET经清洗后粉碎成小薄片",
          "ku": "PET-ên veqetandî têne şuştin û dibin perçeyên piçûk"
        },
        {
          "tr": "Pullar eritilerek granül hâline getirilir ve yeni ürünlerin üretiminde kullanılır",
          "en": "The flakes are melted into granules and used to make new products",
          "de": "Die Flakes werden zu Granulat geschmolzen und zur Herstellung neuer Produkte verwendet",
          "fr": "Les paillettes sont fondues en granulés et servent à fabriquer de nouveaux produits",
          "ru": "Хлопья расплавляют в гранулы, из которых производят новые изделия",
          "ar": "تُصهر الرقائق إلى حبيبات تُستخدم في تصنيع منتجات جديدة",
          "zh": "薄片熔融制成颗粒，用于生产新产品",
          "ku": "Perçe têne helandin û dibin granûl û di çêkirina berhemên nû de têne bikaranîn"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u10-twin01",
      "stem": {
        "tr": "Sabun ve deterjanların temizleme mekanizması ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about the cleaning mechanism of soaps and detergents is incorrect?",
        "de": "Welche der folgenden Aussagen zum Reinigungsmechanismus von Seifen und Reinigungsmitteln ist falsch?",
        "fr": "Laquelle des affirmations suivantes concernant le mécanisme de nettoyage des savons et des détergents est incorrecte ?",
        "ru": "Какое из следующих утверждений о механизме очистки мыла и моющих средств неверно?",
        "ar": "أي من العبارات التالية حول آلية تنظيف الصابون والمنظفات غير صحيحة؟",
        "zh": "下列关于肥皂和洗涤剂的清洁机理的叙述哪一项是不正确的？",
        "ku": "Di derbarê mekanîzmaya paqijkirina sabûn û deterjantan de ji van gotinên jêrîn kîjan xelet e?"
      },
      "options": [
        {
          "tr": "Deterjanın polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the detergent clings to non-polar dirt.",
          "de": "Die polare Spitze des Reinigungsmittels haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du détergent adhère à la saleté non polaire.",
          "ru": "Полярная головка моющего средства прилипает к неполярной грязи.",
          "ar": "يتمسك الرأس القطبي للمنظف بالأوساخ غير القطبية.",
          "zh": "洗涤剂的极性头粘附在非极性污垢上。",
          "ku": "Serê polar ê deterjanê bi qirêjiya ne-polar ve girêdayî ye."
        },
        {
          "tr": "Sabunun apolar kuyruk kısmı kiri sarar.",
          "en": "The non-polar tail of the soap envelops the dirt.",
          "de": "Der unpolare Schwanz der Seife umhüllt den Schmutz.",
          "fr": "La queue non polaire du savon enveloppe la saleté.",
          "ru": "Неполярный хвостик мыла обволакивает грязь.",
          "ar": "الذيل غير القطبي للصابون يغلف الأوساخ.",
          "zh": "肥皂的非极性尾部包裹着污垢。",
          "ku": "Dûvê ne-polar ê sabûnê qirêjê dipêçe."
        },
        {
          "tr": "Kir genellikle apolar organik bileşiklerden oluşur.",
          "en": "Dirt generally consists of nonpolar organic compounds.",
          "de": "Schmutz besteht im Allgemeinen aus unpolaren organischen Verbindungen.",
          "fr": "La saleté est généralement constituée de composés organiques non polaires.",
          "ru": "Грязь обычно состоит из неполярных органических соединений.",
          "ar": "تتكون الأوساخ عمومًا من مركبات عضوية غير قطبية.",
          "zh": "污垢通常由非极性有机化合物组成。",
          "ku": "Dirt bi gelemperî ji pêkhateyên organîk ên nepolar pêk tê."
        },
        {
          "tr": "Sabunun hidrofil başı su molekülleri ile etkileşir.",
          "en": "The hydrophilic head of the soap interacts with water molecules.",
          "de": "Der hydrophile Kopf der Seife interagiert mit Wassermolekülen.",
          "fr": "La tête hydrophile du savon interagit avec les molécules d'eau.",
          "ru": "Гидрофильная головка мыла взаимодействует с молекулами воды.",
          "ar": "يتفاعل رأس الصابون المحب للماء مع جزيئات الماء.",
          "zh": "肥皂的亲水头与水分子相互作用。",
          "ku": "Serê hîdrofîlî yê sabûnê bi molekulên avê re tevdigere."
        },
        {
          "tr": "Deterjanlar sert sularda sabunlara göre daha az çökelek oluşturur.",
          "en": "Detergents form less precipitate in hard water than soaps.",
          "de": "Reinigungsmittel bilden in hartem Wasser weniger Niederschläge als Seifen.",
          "fr": "Les détergents forment moins de précipités dans l’eau dure que les savons.",
          "ru": "Моющие средства образуют меньше осадка в жесткой воде, чем мыло.",
          "ar": "تترسب المنظفات في الماء العسر بشكل أقل من الصابون.",
          "zh": "洗涤剂在硬水中形成的沉淀比肥皂少。",
          "ku": "Deterjan di ava hişk de ji sabûnan ​​kêmtir baranê çêdikin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Deterjan ve sabunun polar baş kısmı suyu sever (hidrofil), kire tutunan kısım ise apolar hidrofob kuyruktur.",
        "en": "The polar head of detergent and soap loves water (hydrophilic), while the part that clings to dirt is the non-polar hydrophobic tail.",
        "de": "Der polare Kopf von Waschmitteln und Seifen liebt Wasser (hydrophil), während der am Schmutz haftende Teil der unpolare hydrophobe Schwanz ist.",
        "fr": "La tête polaire du détergent et du savon aime l'eau (hydrophile), tandis que la partie qui s'accroche à la saleté est la queue hydrophobe non polaire.",
        "ru": "Полярная головка моющего средства и мыла любит воду (гидрофильная), а часть, которая прилипает к грязи, — это неполярный гидрофобный хвост.",
        "ar": "الرأس القطبي للمنظفات والصابون يحب الماء (محب للماء)، بينما الجزء الذي يلتصق بالأوساخ هو الذيل غير القطبي الكاره للماء.",
        "zh": "洗涤剂和肥皂的极性头部喜欢水（亲水性），而粘附污垢的部分是非极性疏水尾部。",
        "ku": "Serê polar ê deterjant û sabûnê ji avê (hîdrofîl) hez dike, lê beşa ku bi axê ve girêdide dûvika hîdrofobî ya ne-polar e."
      }
    },
    {
      "id": "u10-twin02",
      "stem": {
        "tr": "Yapışmaz tava kaplaması olarak kullanılan ve kimyasal adı politetrafloroetilen olan polimer hangisidir?",
        "en": "Which polymer, whose chemical name is polytetrafluoroethylene, is used as a non-stick pan coating?",
        "de": "Welches Polymer, dessen chemischer Name Polytetrafluorethylen ist, wird als Antihaftbeschichtung für Pfannen verwendet?",
        "fr": "Quel polymère, dont le nom chimique est polytétrafluoroéthylène, est utilisé comme revêtement antiadhésif pour les poêles ?",
        "ru": "Какой полимер, химическое название политетрафторэтилен, используется в качестве антипригарного покрытия для сковородок?",
        "ar": "ما البوليمر، واسمه الكيميائي بولي تترافلوروإيثيلين، الذي يُستخدم كطلاء غير لاصق للمقلاة؟",
        "zh": "哪种聚合物（其化学名称为聚四氟乙烯）用作不粘锅涂层？",
        "ku": "Kîjan polîmer, ku navê wê yê kîmyayî polîtetrafluoroetîlen e, wekî pêlava panê ya neçît tê bikar anîn?"
      },
      "options": [
        {
          "tr": "Teflon (PTFE)",
          "en": "Teflon (PTFE)",
          "de": "Teflon (PTFE)",
          "fr": "Téflon (PTFE)",
          "ru": "Тефлон (ПТФЭ)",
          "ar": "تفلون (PTFE)",
          "zh": "聚四氟乙烯（PTFE）",
          "ku": "Teflon (PTFE)"
        },
        {
          "tr": "PVC",
          "en": "PVC",
          "de": "PVC",
          "fr": "PVC",
          "ru": "PVC",
          "ar": "PVC",
          "zh": "PVC",
          "ku": "PVC"
        },
        {
          "tr": "PET",
          "en": "PET",
          "de": "PET",
          "fr": "PET",
          "ru": "PET",
          "ar": "PET",
          "zh": "PET",
          "ku": "PET"
        },
        {
          "tr": "Kevlar",
          "en": "Kevlar",
          "de": "Kevlar",
          "fr": "Kevlar",
          "ru": "Кевлар",
          "ar": "كيفلر",
          "zh": "凯夫拉尔",
          "ku": "Kevlar"
        },
        {
          "tr": "Polietilen",
          "en": "polyethylene",
          "de": "Polyethylen",
          "fr": "polyéthylène",
          "ru": "полиэтилен",
          "ar": "البولي ايثيلين",
          "zh": "聚乙烯",
          "ku": "polyethylene"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Teflon (PTFE), politetrafloroetilenin ticari adıdır ve yüksek ısı dayanımıyla tavalarda kullanılır.",
        "en": "Teflon (PTFE) is the trade name for polytetrafluoroethylene and is used in pans with its high heat resistance.",
        "de": "Teflon (PTFE) ist der Handelsname für Polytetrafluorethylen und wird aufgrund seiner hohen Hitzebeständigkeit in Pfannen verwendet.",
        "fr": "Le téflon (PTFE) est le nom commercial du polytétrafluoroéthylène et est utilisé dans les casseroles grâce à sa haute résistance à la chaleur.",
        "ru": "Тефлон (ПТФЭ) — торговое название политетрафторэтилена, который используется в сковородах благодаря своей высокой термостойкости.",
        "ar": "التيفلون (PTFE) هو الاسم التجاري للبولي تترافلوروإيثيلين ويستخدم في المقالي التي تتميز بمقاومتها العالية للحرارة.",
        "zh": "特氟龙（PTFE）是聚四氟乙烯的商品名，因其高耐热性而用于平底锅。",
        "ku": "Teflon (PTFE) navê bazirganiyê ye ji bo polytetrafluoroethylene û bi berxwedana germa xwe ya bilind di panan de tê bikar anîn."
      }
    },
    {
      "id": "u10-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimya Her Yerde ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemistry Everywhere, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemie Überall: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Chimie Partout, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химия повсюду», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء في كل مكان\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学无处不在”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya Li Her Derê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
          "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
          "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
          "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
          "ru": "Пластиковые пакеты в основном изготавливают из тефлона (ПТФЭ).",
          "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
          "zh": "购物塑料袋主要由聚四氟乙烯（特氟龙，PTFE）制成。",
          "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
        },
        {
          "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
          "en": "Rubber is a hard brittle crystalline substance.",
          "de": "Gummi ist eine harte, spröde kristalline Substanz.",
          "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
          "ru": "Каучук – твердое хрупкое кристаллическое вещество.",
          "ar": "المطاط مادة بلورية صلبة وهشة.",
          "zh": "橡胶是一种硬脆的结晶物质。",
          "ku": "Laçûk maddeyek krîstalî ya hişk e."
        },
        {
          "tr": "Deterjanlar petrol türevidir ve sert sulardaki Ca2+ ve Mg2+ iyonlarıyla çökelek oluşturmadığından sert sularda da iyi temizler.",
          "en": "Detergents are petroleum derivatives and clean well in hard water as they do not form precipitates with the Ca2+ and Mg2+ ions in hard water.",
          "de": "Reinigungsmittel sind Erdölderivate und reinigen gut in hartem Wasser, da sie in hartem Wasser keine Niederschläge mit den Ca2+- und Mg2+-Ionen bilden.",
          "fr": "Les détergents sont des dérivés du pétrole et nettoient bien dans l'eau dure car ils ne forment pas de précipités avec les ions Ca2+ et Mg2+ dans l'eau dure.",
          "ru": "Моющие средства являются производными нефти и хорошо очищают в жесткой воде, поскольку не образуют осадка с ионами Ca2+ и Mg2+ в жесткой воде.",
          "ar": "المنظفات هي مشتقات بترولية وتنظف جيدًا في الماء العسر حيث أنها لا تشكل رواسب مع أيونات Ca2+ وMg2+ في الماء العسر.",
          "zh": "清洁剂是石油衍生物，在硬水中清洁效果良好，因为它们不会与硬水中的 Ca2+ 和 Mg2+ 离子形成沉淀。",
          "ku": "Deterjan derûvên neftê ne û di ava hişk de baş paqij dikin ji ber ku ew bi îyonên Ca2+ û Mg2+ di ava hişk de baran çênakin."
        },
        {
          "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
          "en": "All medications are consumed only orally as pills.",
          "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
          "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
          "ru": "Все лекарства употребляются только перорально в виде таблеток.",
          "ar": "يتم تناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
          "zh": "所有药物均仅以药丸形式口服。",
          "ku": "Hemî derman tenê bi devkî wekî heban têne vexwarin."
        },
        {
          "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
          "en": "Margarines are produced by boiling animal bones.",
          "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
          "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
          "ru": "Маргарины производят путем варки костей животных.",
          "ar": "يتم إنتاج السمن عن طريق غلي عظام الحيوانات.",
          "zh": "人造黄油是通过煮沸动物骨头制成的。",
          "ku": "Margarîn bi kelandina hestiyên heywanan tên çêkirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Deterjanlar petrol türevidir ve sert sulardaki Ca2+ ve Mg2+ iyonlarıyla çökelek oluşturmadığından sert sularda da iyi temizler.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Detergents are petroleum derivatives and clean well in hard water as they do not form precipitates with the Ca2+ and Mg2+ ions in hard water.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Reinigungsmittel sind Erdölderivate und reinigen gut in hartem Wasser, da sie in hartem Wasser keine Niederschläge mit den Ca2+- und Mg2+-Ionen bilden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les détergents sont des dérivés du pétrole et nettoient bien dans l'eau dure car ils ne forment pas de précipités avec les ions Ca2+ et Mg2+ dans l'eau dure.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Моющие средства являются производными нефти и хорошо очищают в жесткой воде, поскольку не образуют осадка с ионами Ca2+ и Mg2+ в жесткой воде.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المنظفات هي مشتقات بترولية وتنظف جيدًا في الماء العسر حيث أنها لا تشكل رواسب مع أيونات Ca2+ وMg2+ في الماء العسر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“清洁剂是石油衍生物，在硬水中清洁效果良好，因为它们不会与硬水中的 Ca2+ 和 Mg2+ 离子形成沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Deterjan derûvên neftê ne û di ava hişk de baş paqij dikin ji ber ku ew bi îyonên Ca2+ û Mg2+ di ava hişk de baran çênakin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya Her Yerde konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemistry Everywhere?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemie Überall zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Chimie Partout ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химия повсюду»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الكيمياء في كل مكان\"؟",
        "zh": "根据“化学无处不在”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Kîmya Li Her Derê\" de rast e?"
      },
      "options": [
        {
          "tr": "Teflon kolayca alev alan ve eriyen bir polimerdir.",
          "en": "Teflon is a polymer that easily catches fire and melts.",
          "de": "Teflon ist ein Polymer, das leicht Feuer fängt und schmilzt.",
          "fr": "Le téflon est un polymère qui s’enflamme et fond facilement.",
          "ru": "Тефлон – это полимер, который легко воспламеняется и плавится.",
          "ar": "التفلون هو بوليمر يشتعل بسهولة ويذوب.",
          "zh": "特氟龙是一种容易着火和熔化的聚合物。",
          "ku": "Teflon polîmerek e ku bi hêsanî agir pê dikeve û dihele."
        },
        {
          "tr": "PET ambalajlar geri dönüştürülemez.",
          "en": "PET packaging cannot be recycled.",
          "de": "PET-Verpackungen können nicht recycelt werden.",
          "fr": "Les emballages PET ne peuvent pas être recyclés.",
          "ru": "ПЭТ-упаковка не подлежит вторичной переработке.",
          "ar": "لا يمكن إعادة تدوير عبوات PET.",
          "zh": "PET 包装不能回收。",
          "ku": "Ambalaja PET nikare were vezîvirandin."
        },
        {
          "tr": "Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.",
          "en": "Preservative chemicals in cosmetic products are completely harmless organic nutrients.",
          "de": "Konservierungschemikalien in Kosmetikprodukten sind völlig harmlose organische Nährstoffe.",
          "fr": "Les conservateurs chimiques contenus dans les produits cosmétiques sont des nutriments organiques totalement inoffensifs.",
          "ru": "Консерванты в косметических продуктах представляют собой совершенно безвредные органические питательные вещества.",
          "ar": "المواد الكيميائية الحافظة الموجودة في مستحضرات التجميل هي مغذيات عضوية غير ضارة تمامًا.",
          "zh": "化妆品中的防腐剂是完全无害的有机营养素。",
          "ku": "Kîmyewîyên parastinê yên di hilberên kozmetîkî de madeyên organîk ên bi tevahî bê zirar in."
        },
        {
          "tr": "Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanırken, deterjanlar çevre ve su kirliliğine neden olur.",
          "en": "While soaps are easily broken down by microorganisms in nature, detergents cause environmental and water pollution.",
          "de": "Während Seifen in der Natur leicht von Mikroorganismen zersetzt werden, verursachen Waschmittel Umwelt- und Wasserverschmutzung.",
          "fr": "Alors que les savons sont facilement décomposés par les micro-organismes naturels, les détergents polluent l’environnement et l’eau.",
          "ru": "В то время как мыло легко разрушается микроорганизмами в природе, моющие средства вызывают загрязнение окружающей среды и воды.",
          "ar": "في حين أن الصابون يتحلل بسهولة بواسطة الكائنات الحية الدقيقة في الطبيعة، فإن المنظفات تسبب تلوث البيئة والمياه.",
          "zh": "肥皂很容易被自然界的微生物分解，而洗涤剂则会造成环境和水污染。",
          "ku": "Dema ku sabûn di xwezayê de ji hêla mîkroorganîzmayan ve bi hêsanî têne perçe kirin, paqijker dibe sedema qirêjiya jîngehê û avê."
        },
        {
          "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
          "en": "Pasteurization is a method of sterilizing food by freezing.",
          "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
          "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
          "ru": "Пастеризация – это метод стерилизации пищевых продуктов путем замораживания.",
          "ar": "البسترة هي طريقة لتعقيم الطعام عن طريق التجميد.",
          "zh": "巴氏灭菌是一种通过冷冻对食品进行灭菌的方法。",
          "ku": "Pasteurîzasyon rêbazek sterilkirina xwarinê bi cemidandinê ye."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanırken, deterjanlar çevre ve su kirliliğine neden olur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"While soaps are easily broken down by microorganisms in nature, detergents cause environmental and water pollution.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Während Seifen in der Natur leicht von Mikroorganismen zersetzt werden, verursachen Waschmittel Umwelt- und Wasserverschmutzung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Alors que les savons sont facilement décomposés par les micro-organismes naturels, les détergents polluent l’environnement et l’eau.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В то время как мыло легко разрушается микроорганизмами в природе, моющие средства вызывают загрязнение окружающей среды и воды.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في حين أن الصابون يتحلل بسهولة بواسطة الكائنات الحية الدقيقة في الطبيعة، فإن المنظفات تسبب تلوث البيئة والمياه.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“肥皂很容易被自然界的微生物分解，而洗涤剂则会造成环境和水污染。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku sabûn di xwezayê de ji hêla mîkroorganîzmayan ve bi hêsanî têne perçe kirin, paqijker dibe sedema qirêjiya jîngehê û avê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya Her Yerde sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemistry Everywhere, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemie Überall: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Chimie Partout, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химия повсюду», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء في كل مكان\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学无处不在”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya Li Her Derê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.",
          "en": "Kevlar is used in the production of disposable plastic cups.",
          "de": "Kevlar wird bei der Herstellung von Einweg-Plastikbechern verwendet.",
          "fr": "Le Kevlar est utilisé dans la production de gobelets en plastique jetables.",
          "ru": "Кевлар используется при производстве одноразовых пластиковых стаканчиков.",
          "ar": "يستخدم الكيفلار في إنتاج الأكواب البلاستيكية التي يمكن التخلص منها.",
          "zh": "凯夫拉纤维用于生产一次性塑料杯。",
          "ku": "Kevlar di hilberîna tasên plastîk ên yekcar de tê bikar anîn."
        },
        {
          "tr": "Misel oluşumunda hidrofil başlar kire saplanır.",
          "en": "During micelle formation, hydrophilic heads get stuck in the dirt.",
          "de": "Bei der Mizellenbildung bleiben hydrophile Köpfe im Schmutz stecken.",
          "fr": "Lors de la formation des micelles, les têtes hydrophiles restent coincées dans la terre.",
          "ru": "При образовании мицелл гидрофильные головки застревают в грязи.",
          "ar": "أثناء تكوين المذيلة، تتعثر الرؤوس المحبة للماء في الأوساخ.",
          "zh": "在胶束形成过程中，亲水头会卡在污垢中。",
          "ku": "Di dema damezrandina micelle de, serê hîdrofîl di nav axê de asê dibin."
        },
        {
          "tr": "Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.",
          "en": "Riviera oil is the purest natural olive oil that has not undergone any processing.",
          "de": "Riviera-Öl ist das reinste natürliche Olivenöl, das keiner Verarbeitung unterzogen wurde.",
          "fr": "L'huile Riviera est l'huile d'olive naturelle la plus pure qui n'a subi aucune transformation.",
          "ru": "Масло «Ривьера» — чистейшее натуральное оливковое масло, не подвергавшееся никакой обработке.",
          "ar": "زيت الريفييرا هو أنقى زيت زيتون طبيعي لم يخضع لأي معالجة.",
          "zh": "里维埃拉油是最纯净的天然橄榄油，未经过任何加工。",
          "ku": "Rûnê Riviera rûnê zeytûna xwezayî ya herî paqij e ku ti pêvajoyek nekiriye."
        },
        {
          "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
          "en": "Arab soap contains calcium ions instead of potassium.",
          "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
          "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
          "ru": "Арабское мыло содержит ионы кальция вместо калия.",
          "ar": "يحتوي الصابون العربي على أيونات الكالسيوم بدلاً من البوتاسيوم.",
          "zh": "阿拉伯肥皂含有钙离子而不是钾。",
          "ku": "Sabûna Ereban di şûna potasyûmê de îyonên kalsiyûmê dihewîne."
        },
        {
          "tr": "Polimerizasyon, monomer adı verilen küçük moleküllerin kovalent bağlarla bağlanarak dev makromoleküller oluşturmasıdır.",
          "en": "Polymerization is the formation of giant macromolecules by connecting small molecules called monomers with covalent bonds.",
          "de": "Unter Polymerisation versteht man die Bildung riesiger Makromoleküle durch die Verbindung kleiner Moleküle, sogenannter Monomere, mit kovalenten Bindungen.",
          "fr": "La polymérisation est la formation de macromolécules géantes en reliant de petites molécules appelées monomères par des liaisons covalentes.",
          "ru": "Полимеризация — это образование гигантских макромолекул путем соединения небольших молекул, называемых мономерами, ковалентными связями.",
          "ar": "البلمرة هي تكوين جزيئات كبيرة عملاقة عن طريق ربط جزيئات صغيرة تسمى المونومرات بروابط تساهمية.",
          "zh": "聚合是通过用共价键连接称为单体的小分子形成巨型大分子。",
          "ku": "Polîmerîzasyon bi girêdana molekulên piçûk ên bi navê monomer bi girêdanên kovalentî ve pêkhatina makromolekulên mezin e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Polimerizasyon, monomer adı verilen küçük moleküllerin kovalent bağlarla bağlanarak dev makromoleküller oluşturmasıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Polymerization is the formation of giant macromolecules by connecting small molecules called monomers with covalent bonds.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Polymerisation versteht man die Bildung riesiger Makromoleküle durch die Verbindung kleiner Moleküle, sogenannter Monomere, mit kovalenten Bindungen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La polymérisation est la formation de macromolécules géantes en reliant de petites molécules appelées monomères par des liaisons covalentes.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Полимеризация — это образование гигантских макромолекул путем соединения небольших молекул, называемых мономерами, ковалентными связями.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"البلمرة هي تكوين جزيئات كبيرة عملاقة عن طريق ربط جزيئات صغيرة تسمى المونومرات بروابط تساهمية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“聚合是通过用共价键连接称为单体的小分子形成巨型大分子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Polîmerîzasyon bi girêdana molekulên piçûk ên bi navê monomer bi girêdanên kovalentî ve pêkhatina makromolekulên mezin e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin06",
      "stem": {
        "tr": "Aşağıda Kimya Her Yerde ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemistry Everywhere, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemie Überall: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Chimie Partout, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химия повсюду», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء في كل مكان\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学无处不在”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya Li Her Derê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Polietilen (PE) poşet ve boru üretiminde, polivinil klorür (PVC) kapı ve pencere profilinde kullanılır.",
          "en": "It is used in the production of polyethylene (PE) bags and pipes, and in polyvinyl chloride (PVC) door and window profiles.",
          "de": "Es wird bei der Herstellung von Beuteln und Rohren aus Polyethylen (PE) sowie in Tür- und Fensterprofilen aus Polyvinylchlorid (PVC) verwendet.",
          "fr": "Il est utilisé dans la production de sacs et de tuyaux en polyéthylène (PE), ainsi que dans les profilés de portes et fenêtres en polychlorure de vinyle (PVC).",
          "ru": "Он используется в производстве полиэтиленовых (ПЭ) мешков и труб, а также в дверных и оконных профилях из поливинилхлорида (ПВХ).",
          "ar": "يتم استخدامه في إنتاج أكياس وأنابيب البولي إيثيلين (PE)، وفي مقاطع الأبواب والنوافذ المصنوعة من كلوريد البولي فينيل (PVC).",
          "zh": "它用于生产聚乙烯（PE）袋和管材以及聚氯乙烯（PVC）门窗型材。",
          "ku": "Ew di hilberîna çente û lûleyên polîetîlen (PE), û di profîlên derî û pencereyê de polyvinyl chloride (PVC) de tê bikar anîn."
        },
        {
          "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
          "en": "Rubber is a hard brittle crystalline substance.",
          "de": "Gummi ist eine harte, spröde kristalline Substanz.",
          "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
          "ru": "Каучук – твердое хрупкое кристаллическое вещество.",
          "ar": "المطاط مادة بلورية صلبة وهشة.",
          "zh": "橡胶是一种硬脆的结晶物质。",
          "ku": "Laçûk maddeyek krîstalî ya hişk e."
        },
        {
          "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
          "en": "All medications are consumed only orally as pills.",
          "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
          "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
          "ru": "Все лекарства употребляются только перорально в виде таблеток.",
          "ar": "يتم تناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
          "zh": "所有药物均仅以药丸形式口服。",
          "ku": "Hemî derman tenê bi devkî wekî heban têne vexwarin."
        },
        {
          "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
          "en": "Margarines are produced by boiling animal bones.",
          "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
          "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
          "ru": "Маргарины производят путем варки костей животных.",
          "ar": "يتم إنتاج السمن عن طريق غلي عظام الحيوانات.",
          "zh": "人造黄油是通过煮沸动物骨头制成的。",
          "ku": "Margarîn bi kelandina hestiyên heywanan tên çêkirin."
        },
        {
          "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the soap clings to non-polar dirt.",
          "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du savon adhère à la saleté non polaire.",
          "ru": "Полярная головка мыла прилипает к неполярной грязи.",
          "ar": "يتمسك الرأس القطبي للصابون بالأوساخ غير القطبية.",
          "zh": "肥皂的极性头粘附在非极性污垢上。",
          "ku": "Serê polar ê sabûnê bi qirêjiya ne-polar ve girêdayî ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Polietilen (PE) poşet ve boru üretiminde, polivinil klorür (PVC) kapı ve pencere profilinde kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"It is used in the production of polyethylene (PE) bags and pipes, and in polyvinyl chloride (PVC) door and window profiles.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Es wird bei der Herstellung von Beuteln und Rohren aus Polyethylen (PE) sowie in Tür- und Fensterprofilen aus Polyvinylchlorid (PVC) verwendet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Il est utilisé dans la production de sacs et de tuyaux en polyéthylène (PE), ainsi que dans les profilés de portes et fenêtres en polychlorure de vinyle (PVC).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Он используется в производстве полиэтиленовых (ПЭ) мешков и труб, а также в дверных и оконных профилях из поливинилхлорида (ПВХ).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم استخدامه في إنتاج أكياس وأنابيب البولي إيثيلين (PE)، وفي مقاطع الأبواب والنوافذ المصنوعة من كلوريد البولي فينيل (PVC).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“它用于生产聚乙烯（PE）袋和管材以及聚氯乙烯（PVC）门窗型材。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ew di hilberîna çente û lûleyên polîetîlen (PE), û di profîlên derî û pencereyê de polyvinyl chloride (PVC) de tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin07",
      "stem": {
        "tr": "Kimya Her Yerde konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemistry Everywhere, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemie Überall: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Chimie Partout, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химия повсюду», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الكيمياء في كل مكان\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学无处不在”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya Li Her Derê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "PET ambalajlar geri dönüştürülemez.",
          "en": "PET packaging cannot be recycled.",
          "de": "PET-Verpackungen können nicht recycelt werden.",
          "fr": "Les emballages PET ne peuvent pas être recyclés.",
          "ru": "ПЭТ-упаковка не подлежит вторичной переработке.",
          "ar": "لا يمكن إعادة تدوير عبوات PET.",
          "zh": "PET 包装不能回收。",
          "ku": "Ambalaja PET nikare were vezîvirandin."
        },
        {
          "tr": "Politetrafloroetilen (Teflon - PTFE), yapışmaz tava ve tencere kaplamalarında yüksek ısı direnci nedeniyle kullanılır.",
          "en": "Polytetrafluoroethylene (Teflon - PTFE) is used in non-stick pan and pot coatings due to its high heat resistance.",
          "de": "Polytetrafluorethylen (Teflon – PTFE) wird aufgrund seiner hohen Hitzebeständigkeit in Antihaftbeschichtungen für Pfannen und Töpfe verwendet.",
          "fr": "Le polytétrafluoroéthylène (Téflon - PTFE) est utilisé dans les revêtements antiadhésifs des poêles et des casseroles en raison de sa haute résistance à la chaleur.",
          "ru": "Политетрафторэтилен (тефлон - ПТФЭ) используется в антипригарных покрытиях для сковород и кастрюль из-за его высокой термостойкости.",
          "ar": "يستخدم بولي تترافلوروإيثيلين (تفلون - PTFE) في طلاء المقالي والأواني غير اللاصقة بسبب مقاومته العالية للحرارة.",
          "zh": "聚四氟乙烯（特氟龙 - PTFE）由于其高耐热性而被用于不粘锅和锅的涂层。",
          "ku": "Polytetrafluoroethylene (Teflon - PTFE) ji ber berxwedana xwe ya bilind a germê di cil û bergên pan û potan de ne-çît tê bikar anîn."
        },
        {
          "tr": "Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.",
          "en": "Preservative chemicals in cosmetic products are completely harmless organic nutrients.",
          "de": "Konservierungschemikalien in Kosmetikprodukten sind völlig harmlose organische Nährstoffe.",
          "fr": "Les conservateurs chimiques contenus dans les produits cosmétiques sont des nutriments organiques totalement inoffensifs.",
          "ru": "Консерванты в косметических продуктах представляют собой совершенно безвредные органические питательные вещества.",
          "ar": "المواد الكيميائية الحافظة الموجودة في مستحضرات التجميل هي مغذيات عضوية غير ضارة تمامًا.",
          "zh": "化妆品中的防腐剂是完全无害的有机营养素。",
          "ku": "Kîmyewîyên parastinê yên di hilberên kozmetîkî de madeyên organîk ên bi tevahî bê zirar in."
        },
        {
          "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
          "en": "Pasteurization is a method of sterilizing food by freezing.",
          "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
          "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
          "ru": "Пастеризация – это метод стерилизации пищевых продуктов путем замораживания.",
          "ar": "البسترة هي طريقة لتعقيم الطعام عن طريق التجميد.",
          "zh": "巴氏灭菌是一种通过冷冻对食品进行灭菌的方法。",
          "ku": "Pasteurîzasyon rêbazek sterilkirina xwarinê bi cemidandinê ye."
        },
        {
          "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
          "en": "Detergent precipitates in hard water and loses its cleaning properties.",
          "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
          "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
          "ru": "Моющее средство выпадает в осадок в жесткой воде и теряет свои чистящие свойства.",
          "ar": "يترسب المنظف في الماء العسر ويفقد خصائصه التنظيفية.",
          "zh": "洗涤剂在硬水中沉淀并失去其清洁性能。",
          "ku": "Deterjan di ava hişk de tortî çêdike û taybetmendiya xwe ya paqijkirinê winda dike."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Politetrafloroetilen (Teflon - PTFE), yapışmaz tava ve tencere kaplamalarında yüksek ısı direnci nedeniyle kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Polytetrafluoroethylene (Teflon - PTFE) is used in non-stick pan and pot coatings due to its high heat resistance.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Polytetrafluorethylen (Teflon – PTFE) wird aufgrund seiner hohen Hitzebeständigkeit in Antihaftbeschichtungen für Pfannen und Töpfe verwendet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le polytétrafluoroéthylène (Téflon - PTFE) est utilisé dans les revêtements antiadhésifs des poêles et des casseroles en raison de sa haute résistance à la chaleur.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Политетрафторэтилен (тефлон - ПТФЭ) используется в антипригарных покрытиях для сковород и кастрюль из-за его высокой термостойкости.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يستخدم بولي تترافلوروإيثيلين (تفلون - PTFE) في طلاء المقالي والأواني غير اللاصقة بسبب مقاومته العالية للحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“聚四氟乙烯（特氟龙 - PTFE）由于其高耐热性而被用于不粘锅和锅的涂层。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Polytetrafluoroethylene (Teflon - PTFE) ji ber berxwedana xwe ya bilind a germê di cil û bergên pan û potan de ne-çît tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya Her Yerde ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemistry Everywhere, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemie Überall: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Chimie Partout, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химия повсюду», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء في كل مكان\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学无处不在”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya Li Her Derê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Misel oluşumunda hidrofil başlar kire saplanır.",
          "en": "During micelle formation, hydrophilic heads get stuck in the dirt.",
          "de": "Bei der Mizellenbildung bleiben hydrophile Köpfe im Schmutz stecken.",
          "fr": "Lors de la formation des micelles, les têtes hydrophiles restent coincées dans la terre.",
          "ru": "При образовании мицелл гидрофильные головки застревают в грязи.",
          "ar": "أثناء تكوين المذيلة، تتعثر الرؤوس المحبة للماء في الأوساخ.",
          "zh": "在胶束形成过程中，亲水头会卡在污垢中。",
          "ku": "Di dema damezrandina micelle de, serê hîdrofîl di nav axê de asê dibin."
        },
        {
          "tr": "Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.",
          "en": "Riviera oil is the purest natural olive oil that has not undergone any processing.",
          "de": "Riviera-Öl ist das reinste natürliche Olivenöl, das keiner Verarbeitung unterzogen wurde.",
          "fr": "L'huile Riviera est l'huile d'olive naturelle la plus pure qui n'a subi aucune transformation.",
          "ru": "Масло «Ривьера» — чистейшее натуральное оливковое масло, не подвергавшееся никакой обработке.",
          "ar": "زيت الريفييرا هو أنقى زيت زيتون طبيعي لم يخضع لأي معالجة.",
          "zh": "里维埃拉油是最纯净的天然橄榄油，未经过任何加工。",
          "ku": "Rûnê Riviera rûnê zeytûna xwezayî ya herî paqij e ku ti pêvajoyek nekiriye."
        },
        {
          "tr": "Kevlar, kurşun geçirmez yelek, miğfer ve uçak kanatlarında kullanılan hafif ve aşırı dayanıklı sentetik poliamiddir.",
          "en": "Kevlar is a lightweight and extremely durable synthetic polyamide used in bulletproof vests, helmets and aircraft wings.",
          "de": "Kevlar ist ein leichtes und extrem haltbares synthetisches Polyamid, das in kugelsicheren Westen, Helmen und Flugzeugflügeln verwendet wird.",
          "fr": "Le Kevlar est un polyamide synthétique léger et extrêmement durable utilisé dans les gilets pare-balles, les casques et les ailes d'avion.",
          "ru": "Кевлар — легкий и чрезвычайно прочный синтетический полиамид, используемый в бронежилетах, шлемах и крыльях самолетов.",
          "ar": "الكيفلار عبارة عن مادة بولي أميد صناعية خفيفة الوزن ومتينة للغاية تستخدم في السترات المضادة للرصاص والخوذات وأجنحة الطائرات.",
          "zh": "凯夫拉纤维是一种轻质且极其耐用的合成聚酰胺，用于防弹背心、头盔和飞机机翼。",
          "ku": "Kevlar polîamîdek sentetîk a sivik û pir domdar e ku di êlekên gulebaranê, helmet û baskên balafirê de tê bikar anîn."
        },
        {
          "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
          "en": "Arab soap contains calcium ions instead of potassium.",
          "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
          "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
          "ru": "Арабское мыло содержит ионы кальция вместо калия.",
          "ar": "يحتوي الصابون العربي على أيونات الكالسيوم بدلاً من البوتاسيوم.",
          "zh": "阿拉伯肥皂含有钙离子而不是钾。",
          "ku": "Sabûna Ereban di şûna potasyûmê de îyonên kalsiyûmê dihewîne."
        },
        {
          "tr": "Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.",
          "en": "Detergents biodegrade much faster in nature than soaps.",
          "de": "Waschmittel werden in der Natur viel schneller biologisch abgebaut als Seifen.",
          "fr": "Les détergents se biodégradent beaucoup plus rapidement dans la nature que les savons.",
          "ru": "Моющие средства в природе разлагаются гораздо быстрее, чем мыло.",
          "ar": "تتحلل المنظفات بيولوجيًا بشكل أسرع بكثير في الطبيعة من الصابون.",
          "zh": "洗涤剂在自然界中的生物降解速度比肥皂快得多。",
          "ku": "Deterjant di xwezayê de ji sabûnan ​​pir zûtir biyolojîk dibin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kevlar, kurşun geçirmez yelek, miğfer ve uçak kanatlarında kullanılan hafif ve aşırı dayanıklı sentetik poliamiddir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Kevlar is a lightweight and extremely durable synthetic polyamide used in bulletproof vests, helmets and aircraft wings.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kevlar ist ein leichtes und extrem haltbares synthetisches Polyamid, das in kugelsicheren Westen, Helmen und Flugzeugflügeln verwendet wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le Kevlar est un polyamide synthétique léger et extrêmement durable utilisé dans les gilets pare-balles, les casques et les ailes d'avion.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Кевлар — легкий и чрезвычайно прочный синтетический полиамид, используемый в бронежилетах, шлемах и крыльях самолетов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الكيفلار عبارة عن مادة بولي أميد صناعية خفيفة الوزن ومتينة للغاية تستخدم في السترات المضادة للرصاص والخوذات وأجنحة الطائرات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“凯夫拉纤维是一种轻质且极其耐用的合成聚酰胺，用于防弹背心、头盔和飞机机翼。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kevlar polîamîdek sentetîk a sivik û pir domdar e ku di êlekên gulebaranê, helmet û baskên balafirê de tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya Her Yerde konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemistry Everywhere, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemie Überall die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Chimie Partout, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химия повсюду», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء في كل مكان\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学无处不在”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Kîmya Li Her Derê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
          "en": "All medications are consumed only orally as pills.",
          "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
          "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
          "ru": "Все лекарства употребляются только перорально в виде таблеток.",
          "ar": "يتم تناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
          "zh": "所有药物均仅以药丸形式口服。",
          "ku": "Hemî derman tenê bi devkî wekî heban têne vexwarin."
        },
        {
          "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
          "en": "Margarines are produced by boiling animal bones.",
          "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
          "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
          "ru": "Маргарины производят путем варки костей животных.",
          "ar": "يتم إنتاج السمن عن طريق غلي عظام الحيوانات.",
          "zh": "人造黄油是通过煮沸动物骨头制成的。",
          "ku": "Margarîn bi kelandina hestiyên heywanan tên çêkirin."
        },
        {
          "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the soap clings to non-polar dirt.",
          "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du savon adhère à la saleté non polaire.",
          "ru": "Полярная головка мыла прилипает к неполярной грязи.",
          "ar": "يتمسك الرأس القطبي للصابون بالأوساخ غير القطبية.",
          "zh": "肥皂的极性头粘附在非极性污垢上。",
          "ku": "Serê polar ê sabûnê bi qirêjiya ne-polar ve girêdayî ye."
        },
        {
          "tr": "Kauçuk doğal (kauçuk ağacından) veya sentetik olarak üretilir ve elastikiyeti sayesinde araba lastiklerinde kullanılır.",
          "en": "Rubber is produced naturally (from the rubber tree) or synthetically and is used in car tires thanks to its elasticity.",
          "de": "Kautschuk wird auf natürliche Weise (aus dem Kautschukbaum) oder synthetisch hergestellt und wird aufgrund seiner Elastizität in Autoreifen verwendet.",
          "fr": "Le caoutchouc est produit naturellement (à partir de l'hévéa) ou synthétiquement et est utilisé dans les pneus de voiture grâce à son élasticité.",
          "ru": "Каучук производится естественным путем (из каучукового дерева) или синтетическим путем и благодаря своей эластичности используется в автомобильных шинах.",
          "ar": "يتم إنتاج المطاط بشكل طبيعي (من شجرة المطاط) أو صناعيا ويستخدم في إطارات السيارات بفضل مرونته.",
          "zh": "橡胶是天然（从橡胶树）或合成产生的，由于其弹性而用于汽车轮胎。",
          "ku": "Lastîk bi awayekî xwezayî (ji dara lastîkê) an jî sentetîk tê hilberandin û bi saya elastîkbûna xwe di tekerên otomobîlan de tê bikaranîn."
        },
        {
          "tr": "Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.",
          "en": "Polymers are small compounds held together only by weak van der Waals bonds.",
          "de": "Polymere sind kleine Verbindungen, die nur durch schwache Van-der-Waals-Bindungen zusammengehalten werden.",
          "fr": "Les polymères sont de petits composés maintenus ensemble uniquement par de faibles liaisons de Van der Waals.",
          "ru": "Полимеры представляют собой небольшие соединения, удерживаемые вместе только слабыми связями Ван-дер-Ваальса.",
          "ar": "البوليمرات عبارة عن مركبات صغيرة متماسكة معًا فقط بواسطة روابط فان دير فال الضعيفة.",
          "zh": "聚合物是仅通过弱范德华键结合在一起的小化合物。",
          "ku": "Polîmer pêkhateyên piçûk in ku tenê bi girêdanên van der Waals-ê yên qels li hev têne girtin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Kauçuk doğal (kauçuk ağacından) veya sentetik olarak üretilir ve elastikiyeti sayesinde araba lastiklerinde kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Rubber is produced naturally (from the rubber tree) or synthetically and is used in car tires thanks to its elasticity.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kautschuk wird auf natürliche Weise (aus dem Kautschukbaum) oder synthetisch hergestellt und wird aufgrund seiner Elastizität in Autoreifen verwendet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le caoutchouc est produit naturellement (à partir de l'hévéa) ou synthétiquement et est utilisé dans les pneus de voiture grâce à son élasticité.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Каучук производится естественным путем (из каучукового дерева) или синтетическим путем и благодаря своей эластичности используется в автомобильных шинах.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم إنتاج المطاط بشكل طبيعي (من شجرة المطاط) أو صناعيا ويستخدم في إطارات السيارات بفضل مرونته.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“橡胶是天然（从橡胶树）或合成产生的，由于其弹性而用于汽车轮胎。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Lastîk bi awayekî xwezayî (ji dara lastîkê) an jî sentetîk tê hilberandin û bi saya elastîkbûna xwe di tekerên otomobîlan de tê bikaranîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimya Her Yerde ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemistry Everywhere, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemie Überall: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Chimie Partout, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химия повсюду», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء في كل مكان\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学无处不在”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya Li Her Derê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.",
          "en": "Preservative chemicals in cosmetic products are completely harmless organic nutrients.",
          "de": "Konservierungschemikalien in Kosmetikprodukten sind völlig harmlose organische Nährstoffe.",
          "fr": "Les conservateurs chimiques contenus dans les produits cosmétiques sont des nutriments organiques totalement inoffensifs.",
          "ru": "Консерванты в косметических продуктах представляют собой совершенно безвредные органические питательные вещества.",
          "ar": "المواد الكيميائية الحافظة الموجودة في مستحضرات التجميل هي مغذيات عضوية غير ضارة تمامًا.",
          "zh": "化妆品中的防腐剂是完全无害的有机营养素。",
          "ku": "Kîmyewîyên parastinê yên di hilberên kozmetîkî de madeyên organîk ên bi tevahî bê zirar in."
        },
        {
          "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
          "en": "Pasteurization is a method of sterilizing food by freezing.",
          "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
          "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
          "ru": "Пастеризация – это метод стерилизации пищевых продуктов путем замораживания.",
          "ar": "البسترة هي طريقة لتعقيم الطعام عن طريق التجميد.",
          "zh": "巴氏灭菌是一种通过冷冻对食品进行灭菌的方法。",
          "ku": "Pasteurîzasyon rêbazek sterilkirina xwarinê bi cemidandinê ye."
        },
        {
          "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
          "en": "Detergent precipitates in hard water and loses its cleaning properties.",
          "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
          "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
          "ru": "Моющее средство выпадает в осадок в жесткой воде и теряет свои чистящие свойства.",
          "ar": "يترسب المنظف في الماء العسر ويفقد خصائصه التنظيفية.",
          "zh": "洗涤剂在硬水中沉淀并失去其清洁性能。",
          "ku": "Deterjan di ava hişk de tortî çêdike û taybetmendiya xwe ya paqijkirinê winda dike."
        },
        {
          "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
          "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
          "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
          "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
          "ru": "Пластиковые пакеты в основном изготавливают из тефлона (ПТФЭ).",
          "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
          "zh": "购物塑料袋主要由聚四氟乙烯（特氟龙，PTFE）制成。",
          "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
        },
        {
          "tr": "PET (Polietilen tereftalat) su şişeleri ve meşrubat kaplarında kullanılan geri dönüştürülebilir polimerdir.",
          "en": "PET (Polyethylene terephthalate) is a recyclable polymer used in water bottles and beverage containers.",
          "de": "PET (Polyethylenterephthalat) ist ein recycelbares Polymer, das in Wasserflaschen und Getränkebehältern verwendet wird.",
          "fr": "Le PET (polyéthylène téréphtalate) est un polymère recyclable utilisé dans les bouteilles d'eau et les contenants de boissons.",
          "ru": "ПЭТ (полиэтилентерефталат) — это перерабатываемый полимер, используемый в бутылках для воды и контейнерах для напитков.",
          "ar": "PET (البولي إيثيلين تيريفثاليت) هو بوليمر قابل لإعادة التدوير يستخدم في زجاجات المياه وحاويات المشروبات.",
          "zh": "PET（聚对苯二甲酸乙二醇酯）是一种可回收聚合物，用于水瓶和饮料容器。",
          "ku": "PET (Polyethylene terephthalate) polîmerek vezîvirandinê ye ku di şûşeyên avê û konteynerên vexwarinê de tê bikar anîn."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"PET (Polietilen tereftalat) su şişeleri ve meşrubat kaplarında kullanılan geri dönüştürülebilir polimerdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"PET (Polyethylene terephthalate) is a recyclable polymer used in water bottles and beverage containers.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"PET (Polyethylenterephthalat) ist ein recycelbares Polymer, das in Wasserflaschen und Getränkebehältern verwendet wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le PET (polyéthylène téréphtalate) est un polymère recyclable utilisé dans les bouteilles d'eau et les contenants de boissons.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «ПЭТ (полиэтилентерефталат) — это перерабатываемый полимер, используемый в бутылках для воды и контейнерах для напитков.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"PET (البولي إيثيلين تيريفثاليت) هو بوليمر قابل لإعادة التدوير يستخدم في زجاجات المياه وحاويات المشروبات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“PET（聚对苯二甲酸乙二醇酯）是一种可回收聚合物，用于水瓶和饮料容器。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"PET (Polyethylene terephthalate) polîmerek vezîvirandinê ye ku di şûşeyên avê û konteynerên vexwarinê de tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya Her Yerde konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemistry Everywhere?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemie Überall zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Chimie Partout ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химия повсюду»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الكيمياء في كل مكان\"؟",
        "zh": "根据“化学无处不在”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Kîmya Li Her Derê\" de rast e?"
      },
      "options": [
        {
          "tr": "Misel yapısında sabunun hidrofob kuyrukları apolar kir taneciğini sarar, hidrofil başları su ile etkileşerek kiri yüzeyden söker.",
          "en": "In the micelle structure, the hydrophobic tails of the soap surround the nonpolar dirt particle, and the hydrophilic heads interact with water and remove the dirt from the surface.",
          "de": "In der Mizellenstruktur umgeben die hydrophoben Schwänze der Seife die unpolaren Schmutzpartikel, und die hydrophilen Köpfe interagieren mit Wasser und entfernen den Schmutz von der Oberfläche.",
          "fr": "Dans la structure micelle, les queues hydrophobes du savon entourent la particule de saleté non polaire, et les têtes hydrophiles interagissent avec l'eau et éliminent la saleté de la surface.",
          "ru": "В структуре мицелл гидрофобные хвосты мыла окружают неполярную частицу грязи, а гидрофильные головки взаимодействуют с водой и удаляют грязь с поверхности.",
          "ar": "في بنية المذيلة، تحيط ذيول الصابون الكارهة للماء بجزيئات الأوساخ غير القطبية، وتتفاعل الرؤوس المحبة للماء مع الماء وتزيل الأوساخ من السطح.",
          "zh": "在胶束结构中，肥皂的疏水尾部包围非极性污垢颗粒，亲水头部与水相互作用并去除表面的污垢。",
          "ku": "Di strukturê micelle de, dûvikên hîdrofobîk ên sabûnê dor parça qirêj a nepolar dorpêç dikin, û serê hîdrofîl bi avê re têkilî dikin û qirêjê ji ser rûyê erdê radikin."
        },
        {
          "tr": "Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.",
          "en": "Riviera oil is the purest natural olive oil that has not undergone any processing.",
          "de": "Riviera-Öl ist das reinste natürliche Olivenöl, das keiner Verarbeitung unterzogen wurde.",
          "fr": "L'huile Riviera est l'huile d'olive naturelle la plus pure qui n'a subi aucune transformation.",
          "ru": "Масло «Ривьера» — чистейшее натуральное оливковое масло, не подвергавшееся никакой обработке.",
          "ar": "زيت الريفييرا هو أنقى زيت زيتون طبيعي لم يخضع لأي معالجة.",
          "zh": "里维埃拉油是最纯净的天然橄榄油，未经过任何加工。",
          "ku": "Rûnê Riviera rûnê zeytûna xwezayî ya herî paqij e ku ti pêvajoyek nekiriye."
        },
        {
          "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
          "en": "Arab soap contains calcium ions instead of potassium.",
          "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
          "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
          "ru": "Арабское мыло содержит ионы кальция вместо калия.",
          "ar": "يحتوي الصابون العربي على أيونات الكالسيوم بدلاً من البوتاسيوم.",
          "zh": "阿拉伯肥皂含有钙离子而不是钾。",
          "ku": "Sabûna Ereban di şûna potasyûmê de îyonên kalsiyûmê dihewîne."
        },
        {
          "tr": "Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.",
          "en": "Detergents biodegrade much faster in nature than soaps.",
          "de": "Waschmittel werden in der Natur viel schneller biologisch abgebaut als Seifen.",
          "fr": "Les détergents se biodégradent beaucoup plus rapidement dans la nature que les savons.",
          "ru": "Моющие средства в природе разлагаются гораздо быстрее, чем мыло.",
          "ar": "تتحلل المنظفات بيولوجيًا بشكل أسرع بكثير في الطبيعة من الصابون.",
          "zh": "洗涤剂在自然界中的生物降解速度比肥皂快得多。",
          "ku": "Deterjant di xwezayê de ji sabûnan ​​pir zûtir biyolojîk dibin."
        },
        {
          "tr": "Teflon kolayca alev alan ve eriyen bir polimerdir.",
          "en": "Teflon is a polymer that easily catches fire and melts.",
          "de": "Teflon ist ein Polymer, das leicht Feuer fängt und schmilzt.",
          "fr": "Le téflon est un polymère qui s’enflamme et fond facilement.",
          "ru": "Тефлон – это полимер, который легко воспламеняется и плавится.",
          "ar": "التفلون هو بوليمر يشتعل بسهولة ويذوب.",
          "zh": "特氟龙是一种容易着火和熔化的聚合物。",
          "ku": "Teflon polîmerek e ku bi hêsanî agir pê dikeve û dihele."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Misel yapısında sabunun hidrofob kuyrukları apolar kir taneciğini sarar, hidrofil başları su ile etkileşerek kiri yüzeyden söker.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the micelle structure, the hydrophobic tails of the soap surround the nonpolar dirt particle, and the hydrophilic heads interact with water and remove the dirt from the surface.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In der Mizellenstruktur umgeben die hydrophoben Schwänze der Seife die unpolaren Schmutzpartikel, und die hydrophilen Köpfe interagieren mit Wasser und entfernen den Schmutz von der Oberfläche.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la structure micelle, les queues hydrophobes du savon entourent la particule de saleté non polaire, et les têtes hydrophiles interagissent avec l'eau et éliminent la saleté de la surface.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В структуре мицелл гидрофобные хвосты мыла окружают неполярную частицу грязи, а гидрофильные головки взаимодействуют с водой и удаляют грязь с поверхности.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في بنية المذيلة، تحيط ذيول الصابون الكارهة للماء بجزيئات الأوساخ غير القطبية، وتتفاعل الرؤوس المحبة للماء مع الماء وتزيل الأوساخ من السطح.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在胶束结构中，肥皂的疏水尾部包围非极性污垢颗粒，亲水头部与水相互作用并去除表面的污垢。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di strukturê micelle de, dûvikên hîdrofobîk ên sabûnê dor parça qirêj a nepolar dorpêç dikin, û serê hîdrofîl bi avê re têkilî dikin û qirêjê ji ser rûyê erdê radikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya Her Yerde sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemistry Everywhere, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemie Überall: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Chimie Partout, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химия повсюду», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء في كل مكان\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学无处不在”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya Li Her Derê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
          "en": "Margarines are produced by boiling animal bones.",
          "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
          "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
          "ru": "Маргарины производят путем варки костей животных.",
          "ar": "يتم إنتاج السمن عن طريق غلي عظام الحيوانات.",
          "zh": "人造黄油是通过煮沸动物骨头制成的。",
          "ku": "Margarîn bi kelandina hestiyên heywanan tên çêkirin."
        },
        {
          "tr": "İlaç formları: Tablet, draje, şurup, ampul (enjeksiyon), merhem ve damladır.",
          "en": "Drug forms: Tablet, dragee, syrup, ampoule (injection), ointment and drops.",
          "de": "Darreichungsformen: Tablette, Dragee, Sirup, Ampulle (Injektion), Salbe und Tropfen.",
          "fr": "Formes du médicament : Comprimé, dragée, sirop, ampoule (injection), pommade et gouttes.",
          "ru": "Формы выпуска: таблетки, драже, сироп, ампулы (инъекции), мазь и капли.",
          "ar": "أشكال الدواء: أقراص، دراج، شراب، أمبولة (حقن)، مرهم وقطرات.",
          "zh": "药物剂型：片剂、糖衣丸、糖浆、安瓿（注射剂）、软膏和滴剂。",
          "ku": "Formên dermanan: Tablet, dragee, syrup, ampule (derzî), melhem û dilop."
        },
        {
          "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the soap clings to non-polar dirt.",
          "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du savon adhère à la saleté non polaire.",
          "ru": "Полярная головка мыла прилипает к неполярной грязи.",
          "ar": "يتمسك الرأس القطبي للصابون بالأوساخ غير القطبية.",
          "zh": "肥皂的极性头粘附在非极性污垢上。",
          "ku": "Serê polar ê sabûnê bi qirêjiya ne-polar ve girêdayî ye."
        },
        {
          "tr": "Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.",
          "en": "Polymers are small compounds held together only by weak van der Waals bonds.",
          "de": "Polymere sind kleine Verbindungen, die nur durch schwache Van-der-Waals-Bindungen zusammengehalten werden.",
          "fr": "Les polymères sont de petits composés maintenus ensemble uniquement par de faibles liaisons de Van der Waals.",
          "ru": "Полимеры представляют собой небольшие соединения, удерживаемые вместе только слабыми связями Ван-дер-Ваальса.",
          "ar": "البوليمرات عبارة عن مركبات صغيرة متماسكة معًا فقط بواسطة روابط فان دير فال الضعيفة.",
          "zh": "聚合物是仅通过弱范德华键结合在一起的小化合物。",
          "ku": "Polîmer pêkhateyên piçûk in ku tenê bi girêdanên van der Waals-ê yên qels li hev têne girtin."
        },
        {
          "tr": "Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.",
          "en": "Kevlar is used in the production of disposable plastic cups.",
          "de": "Kevlar wird bei der Herstellung von Einweg-Plastikbechern verwendet.",
          "fr": "Le Kevlar est utilisé dans la production de gobelets en plastique jetables.",
          "ru": "Кевлар используется при производстве одноразовых пластиковых стаканчиков.",
          "ar": "يستخدم الكيفلار في إنتاج الأكواب البلاستيكية التي يمكن التخلص منها.",
          "zh": "凯夫拉纤维用于生产一次性塑料杯。",
          "ku": "Kevlar di hilberîna tasên plastîk ên yekcar de tê bikar anîn."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"İlaç formları: Tablet, draje, şurup, ampul (enjeksiyon), merhem ve damladır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Drug forms: Tablet, dragee, syrup, ampoule (injection), ointment and drops.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Darreichungsformen: Tablette, Dragee, Sirup, Ampulle (Injektion), Salbe und Tropfen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Formes du médicament : Comprimé, dragée, sirop, ampoule (injection), pommade et gouttes.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Формы выпуска: таблетки, драже, сироп, ампулы (инъекции), мазь и капли.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"أشكال الدواء: أقراص، دراج، شراب، أمبولة (حقن)، مرهم وقطرات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“药物剂型：片剂、糖衣丸、糖浆、安瓿（注射剂）、软膏和滴剂。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Formên dermanan: Tablet, dragee, syrup, ampule (derzî), melhem û dilop.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin13",
      "stem": {
        "tr": "Aşağıda Kimya Her Yerde ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemistry Everywhere, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemie Überall: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Chimie Partout, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химия повсюду», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء في كل مكان\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学无处不在”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya Li Her Derê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
          "en": "Pasteurization is a method of sterilizing food by freezing.",
          "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
          "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
          "ru": "Пастеризация – это метод стерилизации пищевых продуктов путем замораживания.",
          "ar": "البسترة هي طريقة لتعقيم الطعام عن طريق التجميد.",
          "zh": "巴氏灭菌是一种通过冷冻对食品进行灭菌的方法。",
          "ku": "Pasteurîzasyon rêbazek sterilkirina xwarinê bi cemidandinê ye."
        },
        {
          "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
          "en": "Detergent precipitates in hard water and loses its cleaning properties.",
          "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
          "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
          "ru": "Моющее средство выпадает в осадок в жесткой воде и теряет свои чистящие свойства.",
          "ar": "يترسب المنظف في الماء العسر ويفقد خصائصه التنظيفية.",
          "zh": "洗涤剂在硬水中沉淀并失去其清洁性能。",
          "ku": "Deterjan di ava hişk de tortî çêdike û taybetmendiya xwe ya paqijkirinê winda dike."
        },
        {
          "tr": "Kozmetik ürünlerdeki paraben ve ftalatlar koruyucu ve yumuşatıcı olarak eklense de alerjen ve toksik etkileri vardır.",
          "en": "Although parabens and phthalates are added to cosmetic products as preservatives and softeners, they have allergenic and toxic effects.",
          "de": "Obwohl Parabene und Phthalate als Konservierungsmittel und Weichmacher in Kosmetikprodukten eingesetzt werden, haben sie allergene und toxische Wirkungen.",
          "fr": "Bien que les parabènes et les phtalates soient ajoutés aux produits cosmétiques comme conservateurs et adoucissants, ils ont des effets allergisants et toxiques.",
          "ru": "Хотя парабены и фталаты добавляются в косметические средства в качестве консервантов и смягчителей, они обладают аллергенным и токсическим действием.",
          "ar": "على الرغم من إضافة البارابين والفثالات إلى مستحضرات التجميل كمواد حافظة وملينات، إلا أن لها تأثيرات حساسية وسمية.",
          "zh": "尽管对羟基苯甲酸酯和邻苯二甲酸盐作为防腐剂和软化剂添加到化妆品中，但它们具有致敏和毒性作用。",
          "ku": "Her çend paraben û phthalates wekî parastin û nermker li hilberên kozmetîkî têne zêdekirin jî, ew xwedî bandorên alerjîk û jehrîn in."
        },
        {
          "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
          "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
          "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
          "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
          "ru": "Пластиковые пакеты в основном изготавливают из тефлона (ПТФЭ).",
          "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
          "zh": "购物塑料袋主要由聚四氟乙烯（特氟龙，PTFE）制成。",
          "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
        },
        {
          "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
          "en": "Rubber is a hard brittle crystalline substance.",
          "de": "Gummi ist eine harte, spröde kristalline Substanz.",
          "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
          "ru": "Каучук – твердое хрупкое кристаллическое вещество.",
          "ar": "المطاط مادة بلورية صلبة وهشة.",
          "zh": "橡胶是一种硬脆的结晶物质。",
          "ku": "Laçûk maddeyek krîstalî ya hişk e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kozmetik ürünlerdeki paraben ve ftalatlar koruyucu ve yumuşatıcı olarak eklense de alerjen ve toksik etkileri vardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Although parabens and phthalates are added to cosmetic products as preservatives and softeners, they have allergenic and toxic effects.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Obwohl Parabene und Phthalate als Konservierungsmittel und Weichmacher in Kosmetikprodukten eingesetzt werden, haben sie allergene und toxische Wirkungen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Bien que les parabènes et les phtalates soient ajoutés aux produits cosmétiques comme conservateurs et adoucissants, ils ont des effets allergisants et toxiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хотя парабены и фталаты добавляются в косметические средства в качестве консервантов и смягчителей, они обладают аллергенным и токсическим действием.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"على الرغم من إضافة البارابين والفثالات إلى مستحضرات التجميل كمواد حافظة وملينات، إلا أن لها تأثيرات حساسية وسمية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“尽管对羟基苯甲酸酯和邻苯二甲酸盐作为防腐剂和软化剂添加到化妆品中，但它们具有致敏和毒性作用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her çend paraben û phthalates wekî parastin û nermker li hilberên kozmetîkî têne zêdekirin jî, ew xwedî bandorên alerjîk û jehrîn in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin14",
      "stem": {
        "tr": "Kimya Her Yerde konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemistry Everywhere, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemie Überall: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Chimie Partout, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химия повсюду», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الكيمياء في كل مكان\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学无处不在”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya Li Her Derê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
          "en": "Arab soap contains calcium ions instead of potassium.",
          "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
          "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
          "ru": "Арабское мыло содержит ионы кальция вместо калия.",
          "ar": "يحتوي الصابون العربي على أيونات الكالسيوم بدلاً من البوتاسيوم.",
          "zh": "阿拉伯肥皂含有钙离子而不是钾。",
          "ku": "Sabûna Ereban di şûna potasyûmê de îyonên kalsiyûmê dihewîne."
        },
        {
          "tr": "Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.",
          "en": "Detergents biodegrade much faster in nature than soaps.",
          "de": "Waschmittel werden in der Natur viel schneller biologisch abgebaut als Seifen.",
          "fr": "Les détergents se biodégradent beaucoup plus rapidement dans la nature que les savons.",
          "ru": "Моющие средства в природе разлагаются гораздо быстрее, чем мыло.",
          "ar": "تتحلل المنظفات بيولوجيًا بشكل أسرع بكثير في الطبيعة من الصابون.",
          "zh": "洗涤剂在自然界中的生物降解速度比肥皂快得多。",
          "ku": "Deterjant di xwezayê de ji sabûnan ​​pir zûtir biyolojîk dibin."
        },
        {
          "tr": "Teflon kolayca alev alan ve eriyen bir polimerdir.",
          "en": "Teflon is a polymer that easily catches fire and melts.",
          "de": "Teflon ist ein Polymer, das leicht Feuer fängt und schmilzt.",
          "fr": "Le téflon est un polymère qui s’enflamme et fond facilement.",
          "ru": "Тефлон – это полимер, который легко воспламеняется и плавится.",
          "ar": "التفلون هو بوليمر يشتعل بسهولة ويذوب.",
          "zh": "特氟龙是一种容易着火和熔化的聚合物。",
          "ku": "Teflon polîmerek e ku bi hêsanî agir pê dikeve û dihele."
        },
        {
          "tr": "Sızma zeytinyağı asitliği en düşük, mekanik yolla elde edilen doğal ve kaliteli yağdır.",
          "en": "Extra virgin olive oil is a natural and high-quality oil with the lowest acidity, obtained mechanically.",
          "de": "Extra natives Olivenöl ist ein natürliches und hochwertiges Öl mit dem geringsten Säuregehalt, das mechanisch gewonnen wird.",
          "fr": "L'huile d'olive extra vierge est une huile naturelle et de haute qualité avec la plus faible acidité, obtenue mécaniquement.",
          "ru": "Оливковое масло Extra Virgin – натуральное и высококачественное масло с самой низкой кислотностью, полученное механическим способом.",
          "ar": "زيت الزيتون البكر الممتاز هو زيت طبيعي وعالي الجودة مع أقل نسبة حموضة، ويتم الحصول عليه ميكانيكيًا.",
          "zh": "特级初榨橄榄油是一种天然优质油，酸度最低，通过机械方法获得。",
          "ku": "Rûnê zeytûnê yê bijîjk, rûnek xwezayî û bi kalîte ye ku bi asîdiya herî kêm heye, ku bi mekanîkî tê wergirtin."
        },
        {
          "tr": "PET ambalajlar geri dönüştürülemez.",
          "en": "PET packaging cannot be recycled.",
          "de": "PET-Verpackungen können nicht recycelt werden.",
          "fr": "Les emballages PET ne peuvent pas être recyclés.",
          "ru": "ПЭТ-упаковка не подлежит вторичной переработке.",
          "ar": "لا يمكن إعادة تدوير عبوات PET.",
          "zh": "PET 包装不能回收。",
          "ku": "Ambalaja PET nikare were vezîvirandin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sızma zeytinyağı asitliği en düşük, mekanik yolla elde edilen doğal ve kaliteli yağdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Extra virgin olive oil is a natural and high-quality oil with the lowest acidity, obtained mechanically.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Extra natives Olivenöl ist ein natürliches und hochwertiges Öl mit dem geringsten Säuregehalt, das mechanisch gewonnen wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'huile d'olive extra vierge est une huile naturelle et de haute qualité avec la plus faible acidité, obtenue mécaniquement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Оливковое масло Extra Virgin – натуральное и высококачественное масло с самой низкой кислотностью, полученное механическим способом.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"زيت الزيتون البكر الممتاز هو زيت طبيعي وعالي الجودة مع أقل نسبة حموضة، ويتم الحصول عليه ميكانيكيًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“特级初榨橄榄油是一种天然优质油，酸度最低，通过机械方法获得。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rûnê zeytûnê yê bijîjk, rûnek xwezayî û bi kalîte ye ku bi asîdiya herî kêm heye, ku bi mekanîkî tê wergirtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya Her Yerde ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemistry Everywhere, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemie Überall: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Chimie Partout, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химия повсюду», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء في كل مكان\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学无处不在”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya Li Her Derê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the soap clings to non-polar dirt.",
          "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du savon adhère à la saleté non polaire.",
          "ru": "Полярная головка мыла прилипает к неполярной грязи.",
          "ar": "يتمسك الرأس القطبي للصابون بالأوساخ غير القطبية.",
          "zh": "肥皂的极性头粘附在非极性污垢上。",
          "ku": "Serê polar ê sabûnê bi qirêjiya ne-polar ve girêdayî ye."
        },
        {
          "tr": "Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.",
          "en": "Polymers are small compounds held together only by weak van der Waals bonds.",
          "de": "Polymere sind kleine Verbindungen, die nur durch schwache Van-der-Waals-Bindungen zusammengehalten werden.",
          "fr": "Les polymères sont de petits composés maintenus ensemble uniquement par de faibles liaisons de Van der Waals.",
          "ru": "Полимеры представляют собой небольшие соединения, удерживаемые вместе только слабыми связями Ван-дер-Ваальса.",
          "ar": "البوليمرات عبارة عن مركبات صغيرة متماسكة معًا فقط بواسطة روابط فان دير فال الضعيفة.",
          "zh": "聚合物是仅通过弱范德华键结合在一起的小化合物。",
          "ku": "Polîmer pêkhateyên piçûk in ku tenê bi girêdanên van der Waals-ê yên qels li hev têne girtin."
        },
        {
          "tr": "Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.",
          "en": "Kevlar is used in the production of disposable plastic cups.",
          "de": "Kevlar wird bei der Herstellung von Einweg-Plastikbechern verwendet.",
          "fr": "Le Kevlar est utilisé dans la production de gobelets en plastique jetables.",
          "ru": "Кевлар используется при производстве одноразовых пластиковых стаканчиков.",
          "ar": "يستخدم الكيفلار في إنتاج الأكواب البلاستيكية التي يمكن التخلص منها.",
          "zh": "凯夫拉纤维用于生产一次性塑料杯。",
          "ku": "Kevlar di hilberîna tasên plastîk ên yekcar de tê bikar anîn."
        },
        {
          "tr": "Misel oluşumunda hidrofil başlar kire saplanır.",
          "en": "During micelle formation, hydrophilic heads get stuck in the dirt.",
          "de": "Bei der Mizellenbildung bleiben hydrophile Köpfe im Schmutz stecken.",
          "fr": "Lors de la formation des micelles, les têtes hydrophiles restent coincées dans la terre.",
          "ru": "При образовании мицелл гидрофильные головки застревают в грязи.",
          "ar": "أثناء تكوين المذيلة، تتعثر الرؤوس المحبة للماء في الأوساخ.",
          "zh": "在胶束形成过程中，亲水头会卡在污垢中。",
          "ku": "Di dema damezrandina micelle de, serê hîdrofîl di nav axê de asê dibin."
        },
        {
          "tr": "Hidrojenasyon yöntemiyle doymamış bitkisel sıvı yağlara hidrojen katılarak margarinler elde edilir.",
          "en": "Margarines are obtained by adding hydrogen to unsaturated vegetable oils through the hydrogenation method.",
          "de": "Margarinen werden durch Zugabe von Wasserstoff zu ungesättigten Pflanzenölen durch das Hydrierungsverfahren gewonnen.",
          "fr": "Les margarines sont obtenues en ajoutant de l'hydrogène à des huiles végétales insaturées par la méthode d'hydrogénation.",
          "ru": "Маргарины получают добавлением водорода к ненасыщенным растительным маслам методом гидрирования.",
          "ar": "يتم الحصول على السمن بإضافة الهيدروجين إلى الزيوت النباتية غير المشبعة بطريقة الهدرجة.",
          "zh": "人造黄油是通过氢化方法向不饱和植物油中添加氢气而得到的。",
          "ku": "Margarîn bi lêkirina hîdrojenê li rûnên nebatî yên têrnebûyî bi rêbaza hîdrojenkirinê têne bidestxistin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Hidrojenasyon yöntemiyle doymamış bitkisel sıvı yağlara hidrojen katılarak margarinler elde edilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Margarines are obtained by adding hydrogen to unsaturated vegetable oils through the hydrogenation method.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Margarinen werden durch Zugabe von Wasserstoff zu ungesättigten Pflanzenölen durch das Hydrierungsverfahren gewonnen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les margarines sont obtenues en ajoutant de l'hydrogène à des huiles végétales insaturées par la méthode d'hydrogénation.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Маргарины получают добавлением водорода к ненасыщенным растительным маслам методом гидрирования.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم الحصول على السمن بإضافة الهيدروجين إلى الزيوت النباتية غير المشبعة بطريقة الهدرجة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“人造黄油是通过氢化方法向不饱和植物油中添加氢气而得到的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Margarîn bi lêkirina hîdrojenê li rûnên nebatî yên têrnebûyî bi rêbaza hîdrojenkirinê têne bidestxistin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u10-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya Her Yerde konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemistry Everywhere, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemie Überall die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Chimie Partout, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химия повсюду», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء في كل مكان\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学无处不在”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Kîmya Li Her Derê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Pastörizasyon gıdadaki patojen bakterileri öldürmek için 60-75 °C'de kısa süreli ısıtma işlemidir.",
          "en": "Pasteurization is a short-term heating process at 60-75 °C to kill pathogenic bacteria in food.",
          "de": "Bei der Pasteurisierung handelt es sich um einen kurzzeitigen Erhitzungsprozess bei 60–75 °C, um krankheitserregende Bakterien in Lebensmitteln abzutöten.",
          "fr": "La pasteurisation est un processus de chauffage à court terme entre 60 et 75 °C destiné à tuer les bactéries pathogènes présentes dans les aliments.",
          "ru": "Пастеризация – это кратковременный процесс нагревания при температуре 60-75°С, направленный на уничтожение болезнетворных бактерий в пищевых продуктах.",
          "ar": "البسترة هي عملية تسخين قصيرة المدى عند درجة حرارة 60-75 درجة مئوية لقتل البكتيريا المسببة للأمراض في الطعام.",
          "zh": "巴氏灭菌是在60-75°C的短期加热过程，以杀死食品中的致病菌。",
          "ku": "Pasteurîzasyon pêvajoyek germkirina demek kurt e ku di 60-75 °C de ji bo kuştina bakteriyên pathogenîk ên di xwarinê de ye."
        },
        {
          "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
          "en": "Detergent precipitates in hard water and loses its cleaning properties.",
          "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
          "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
          "ru": "Моющее средство выпадает в осадок в жесткой воде и теряет свои чистящие свойства.",
          "ar": "يترسب المنظف في الماء العسر ويفقد خصائصه التنظيفية.",
          "zh": "洗涤剂在硬水中沉淀并失去其清洁性能。",
          "ku": "Deterjan di ava hişk de tortî çêdike û taybetmendiya xwe ya paqijkirinê winda dike."
        },
        {
          "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
          "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
          "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
          "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
          "ru": "Пластиковые пакеты в основном изготавливают из тефлона (ПТФЭ).",
          "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
          "zh": "购物塑料袋主要由聚四氟乙烯（特氟龙，PTFE）制成。",
          "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
        },
        {
          "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
          "en": "Rubber is a hard brittle crystalline substance.",
          "de": "Gummi ist eine harte, spröde kristalline Substanz.",
          "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
          "ru": "Каучук – твердое хрупкое кристаллическое вещество.",
          "ar": "المطاط مادة بلورية صلبة وهشة.",
          "zh": "橡胶是一种硬脆的结晶物质。",
          "ku": "Laçûk maddeyek krîstalî ya hişk e."
        },
        {
          "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
          "en": "All medications are consumed only orally as pills.",
          "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
          "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
          "ru": "Все лекарства употребляются только перорально в виде таблеток.",
          "ar": "يتم تناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
          "zh": "所有药物均仅以药丸形式口服。",
          "ku": "Hemî derman tenê bi devkî wekî heban têne vexwarin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Pastörizasyon gıdadaki patojen bakterileri öldürmek için 60-75 °C'de kısa süreli ısıtma işlemidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Pasteurization is a short-term heating process at 60-75 °C to kill pathogenic bacteria in food.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Pasteurisierung handelt es sich um einen kurzzeitigen Erhitzungsprozess bei 60–75 °C, um krankheitserregende Bakterien in Lebensmitteln abzutöten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La pasteurisation est un processus de chauffage à court terme entre 60 et 75 °C destiné à tuer les bactéries pathogènes présentes dans les aliments.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Пастеризация – это кратковременный процесс нагревания при температуре 60-75°С, направленный на уничтожение болезнетворных бактерий в пищевых продуктах.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"البسترة هي عملية تسخين قصيرة المدى عند درجة حرارة 60-75 درجة مئوية لقتل البكتيريا المسببة للأمراض في الطعام.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“巴氏灭菌是在60-75°C的短期加热过程，以杀死食品中的致病菌。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pasteurîzasyon pêvajoyek germkirina demek kurt e ku di 60-75 °C de ji bo kuştina bakteriyên pathogenîk ên di xwarinê de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit10;
