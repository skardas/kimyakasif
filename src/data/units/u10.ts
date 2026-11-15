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
      },
      "whyTrapIsFalse": {
        "tr": "Arap sabunu (yumuşak sabun) yağ asitlerinin potasyum tuzudur. Kalsiyumlu yağ asidi tuzları suda çözünmez; sert suda oluşan ve temizlemeyen tortu (kireç sabunu) budur.",
        "en": "Soft soap is the potassium salt of fatty acids. Calcium salts of fatty acids are insoluble in water; they are the non-cleaning scum that forms in hard water.",
        "de": "Schmierseife (weiche Seife) ist das Kaliumsalz von Fettsäuren. Calciumsalze der Fettsäuren sind wasserunlöslich; sie bilden die nicht reinigende Kalkseife in hartem Wasser.",
        "fr": "Le savon mou est le sel de potassium des acides gras. Les sels de calcium des acides gras sont insolubles dans l’eau ; c’est le dépôt non nettoyant (savon calcaire) qui se forme dans l’eau dure.",
        "ru": "Жидкое (мягкое) мыло — это калиевая соль жирных кислот. Кальциевые соли жирных кислот нерастворимы в воде; это и есть не моющий осадок (известковое мыло) в жёсткой воде.",
        "ar": "الصابون الطري هو ملح البوتاسيوم للأحماض الدهنية. أما أملاح الكالسيوم للأحماض الدهنية فلا تذوب في الماء، وهي الراسب غير المنظِّف (صابون الكلس) الذي يتكون في الماء العسر.",
        "zh": "软皂是脂肪酸的钾盐。脂肪酸的钙盐不溶于水，它正是硬水中形成的、没有去污作用的沉淀（钙皂）。",
        "ku": "Sabûna nerm (sabûna erebî) xwêya potasyûmê ya asîdên rûnî ye. Xwêyên kalsiyûmê yên asîdên rûnî di avê de nahelin; ew tortê ne-paqijker e ku di ava hişk de çêdibe."
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
      },
      "whyTrapIsFalse": {
        "tr": "Benzer benzeri çözer: apolar kir ancak apolar hidrokarbon kuyrukla etkileşir. Polar baş ise su molekülleriyle etkileşerek kirin suya taşınmasını sağlar.",
        "en": "Like dissolves like: non-polar dirt interacts only with the non-polar hydrocarbon tail. The polar head interacts with water molecules and carries the dirt into the water.",
        "de": "Gleiches löst sich in Gleichem: unpolarer Schmutz wechselwirkt nur mit dem unpolaren Kohlenwasserstoffschwanz. Der polare Kopf wechselwirkt mit Wassermolekülen und trägt den Schmutz ins Wasser.",
        "fr": "Le semblable dissout le semblable : la saleté apolaire n’interagit qu’avec la queue hydrocarbonée apolaire. La tête polaire interagit avec les molécules d’eau et entraîne la saleté dans l’eau.",
        "ru": "Подобное растворяется в подобном: неполярная грязь взаимодействует только с неполярным углеводородным хвостом. Полярная головка взаимодействует с молекулами воды и уносит грязь в воду.",
        "ar": "الشبيه يذيب الشبيه: الأوساخ غير القطبية تتفاعل فقط مع الذيل الهيدروكربوني غير القطبي، أما الرأس القطبي فيتفاعل مع جزيئات الماء وينقل الأوساخ إلى الماء.",
        "zh": "相似相溶：非极性污垢只与非极性的烃基尾部相互作用；极性头部与水分子相互作用，把污垢带入水中。",
        "ku": "Wekhev wekhevê dihelîne: qirêja nepolar tenê bi dûvikê hîdrokarbonî yê nepolar re têkildar dibe. Serê polar bi molekulên avê re têkildar dibe û qirêjê dibe nav avê."
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
      },
      "whyTrapIsFalse": {
        "tr": "Sert sudaki Ca2+ ve Mg2+ iyonlarıyla suda çözünmeyen tuz oluşturup çöken sabundur. Deterjanların bu iyonlarla oluşturduğu tuzlar suda çözünür; bu yüzden deterjan sert suda da köpürüp temizler.",
        "en": "It is soap that forms insoluble salts with the Ca2+ and Mg2+ ions of hard water and precipitates. The salts detergents form with these ions are soluble, so detergents still lather and clean in hard water.",
        "de": "Es ist die Seife, die mit den Ca2+- und Mg2+-Ionen des harten Wassers unlösliche Salze bildet und ausfällt. Die Salze der Detergenzien mit diesen Ionen sind löslich, daher schäumen und reinigen Detergenzien auch in hartem Wasser.",
        "fr": "C’est le savon qui forme des sels insolubles avec les ions Ca2+ et Mg2+ de l’eau dure et précipite. Les sels que forment les détergents avec ces ions sont solubles ; les détergents moussent et nettoient donc aussi en eau dure.",
        "ru": "Именно мыло образует с ионами Ca2+ и Mg2+ жёсткой воды нерастворимые соли и выпадает в осадок. Соли синтетических моющих средств с этими ионами растворимы, поэтому детергенты пенятся и моют и в жёсткой воде.",
        "ar": "الصابون هو الذي يكوّن مع أيونات Ca2+ وMg2+ في الماء العسر أملاحًا لا تذوب فيترسب. أما الأملاح التي تكوّنها المنظفات الصناعية مع هذه الأيونات فتذوب في الماء، لذا تُرغي المنظفات وتنظف في الماء العسر أيضًا.",
        "zh": "与硬水中的 Ca2+、Mg2+ 形成不溶性盐而沉淀的是肥皂。合成洗涤剂与这些离子形成的盐可溶于水，因此洗涤剂在硬水中也能起泡和去污。",
        "ku": "Sabûn e ku bi îyonên Ca2+ û Mg2+ yên ava hişk re xwêyên nehelbar çêdike û dadikeve. Xwêyên ku deterjan bi van îyonan re çêdikin di avê de dihelin, ji ber vê yekê deterjan di ava hişk de jî kef dike û paqij dike."
      }
    },
    {
      "id": "u10-f04",
      "fact": {
        "tr": "Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanır; deterjanlar ise daha zor parçalandıkları için çevre ve su kirliliğine daha fazla yol açar.",
        "en": "Soaps are easily broken down by microorganisms in nature, whereas detergents degrade more slowly and therefore cause more environmental and water pollution.",
        "de": "Seifen werden in der Natur leicht von Mikroorganismen abgebaut; Detergenzien werden dagegen schwerer abgebaut und verursachen daher mehr Umwelt- und Gewässerverschmutzung.",
        "fr": "Les savons sont facilement dégradés par les micro-organismes dans la nature, tandis que les détergents se dégradent plus difficilement et causent donc davantage de pollution de l’environnement et de l’eau.",
        "ru": "Мыло легко разлагается микроорганизмами в природе, а детергенты разлагаются труднее и поэтому сильнее загрязняют окружающую среду и воду.",
        "ar": "تحلل الكائنات الدقيقة الصابونَ في الطبيعة بسهولة، أما المنظفات فتتحلل بصعوبة أكبر ولذلك تسبب قدرًا أكبر من تلوث البيئة والمياه.",
        "zh": "肥皂在自然界中容易被微生物分解，而洗涤剂较难分解，因此造成的环境和水污染更严重。",
        "ku": "Sabûn di xwezayê de ji aliyê mîkroorganîzmayan ve bi hêsanî tê perçekirin; lê deterjan bi zehmetî tên perçekirin û ji ber vê yekê zêdetir dibin sedema qirêjiya jîngeh û avê."
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
      },
      "whyTrapIsFalse": {
        "tr": "Durum tam tersidir: sabun doğal yağlardan elde edildiği için mikroorganizmalarca kolay parçalanır. Petrol kaynaklı deterjanlar doğada daha uzun süre kalır ve köpük ile su kirliliğine yol açar.",
        "en": "It is the other way round: soap, made from natural fats, is easily broken down by microorganisms. Petroleum-based detergents persist longer in nature and cause foam and water pollution.",
        "de": "Es ist genau umgekehrt: Seife wird, da sie aus natürlichen Fetten stammt, leicht von Mikroorganismen abgebaut. Detergenzien auf Erdölbasis bleiben länger in der Natur und verursachen Schaum und Gewässerverschmutzung.",
        "fr": "C’est l’inverse : le savon, issu de graisses naturelles, est facilement dégradé par les micro-organismes. Les détergents issus du pétrole persistent plus longtemps dans la nature et provoquent mousse et pollution de l’eau.",
        "ru": "Всё наоборот: мыло, получаемое из природных жиров, легко разлагается микроорганизмами. Детергенты на нефтяной основе дольше сохраняются в природе и вызывают пенообразование и загрязнение воды.",
        "ar": "الأمر معكوس تمامًا: الصابون المصنوع من الدهون الطبيعية تحلله الكائنات الدقيقة بسهولة، أما المنظفات المشتقة من البترول فتبقى مدة أطول في الطبيعة وتسبب الرغوة وتلوث المياه.",
        "zh": "情况正好相反：肥皂由天然油脂制成，容易被微生物分解；石油来源的洗涤剂在自然界中存留时间更长，会造成泡沫和水污染。",
        "ku": "Rewş berevajî ye: sabûn ji rûnên xwezayî tê çêkirin û ji aliyê mîkroorganîzmayan ve bi hêsanî tê perçekirin. Deterjanên ji neftê di xwezayê de demeke dirêjtir dimînin û dibin sedema kef û qirêjiya avê."
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
      },
      "whyTrapIsFalse": {
        "tr": "Polimer zincirinde monomerler birbirine güçlü kovalent bağlarla bağlıdır ve molekül kütlesi çok büyüktür. Van der Waals etkileşimleri yalnızca ayrı zincirler arasında etkilidir.",
        "en": "In a polymer chain the monomers are joined by strong covalent bonds and the molar mass is very large. Van der Waals interactions act only between separate chains.",
        "de": "In einer Polymerkette sind die Monomere durch starke kovalente Bindungen verknüpft, und die Molekülmasse ist sehr groß. Van-der-Waals-Kräfte wirken nur zwischen getrennten Ketten.",
        "fr": "Dans une chaîne de polymère, les monomères sont liés par de fortes liaisons covalentes et la masse molaire est très grande. Les interactions de van der Waals n’agissent qu’entre chaînes distinctes.",
        "ru": "В полимерной цепи мономеры соединены прочными ковалентными связями, а молярная масса очень велика. Ван-дер-ваальсовы силы действуют лишь между отдельными цепями.",
        "ar": "ترتبط المونومرات في سلسلة البوليمر بروابط تساهمية قوية وتكون الكتلة المولية كبيرة جدًا، أما قوى فان دير فالس فتعمل فقط بين السلاسل المنفصلة.",
        "zh": "聚合物链中单体之间以牢固的共价键相连，摩尔质量非常大；范德华力只存在于不同的链之间。",
        "ku": "Di zincîra polîmerê de monomer bi girêdanên kovalent ên xurt bi hev ve girêdayî ne û girseya molekulê pir mezin e. Hêzên Van der Waals tenê di navbera zincîrên cuda de bandor dikin."
      }
    },
    {
      "id": "u10-f06",
      "fact": {
        "tr": "Polietilen (PE) poşet ve boru üretiminde, polivinil klorür (PVC) kapı ve pencere profilinde kullanılır.",
        "en": "Polyethylene (PE) is used to make bags and pipes; polyvinyl chloride (PVC) is used for door and window profiles.",
        "de": "Polyethylen (PE) wird zur Herstellung von Tüten und Rohren verwendet, Polyvinylchlorid (PVC) für Tür- und Fensterprofile.",
        "fr": "Le polyéthylène (PE) sert à fabriquer des sacs et des tuyaux ; le polychlorure de vinyle (PVC) sert aux profilés de portes et de fenêtres.",
        "ru": "Полиэтилен (ПЭ) используют для производства пакетов и труб, а поливинилхлорид (ПВХ) — для дверных и оконных профилей.",
        "ar": "يُستخدم البولي إيثيلين (PE) في صناعة الأكياس والأنابيب، ويُستخدم كلوريد البولي فينيل (PVC) في إطارات الأبواب والنوافذ.",
        "zh": "聚乙烯（PE）用于生产塑料袋和管材，聚氯乙烯（PVC）用于门窗型材。",
        "ku": "Polîetîlen (PE) di çêkirina kîs û boriyan de, polîvînîl klorîd (PVC) jî di profîlên derî û pencereyan de tê bikaranîn."
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
      },
      "whyTrapIsFalse": {
        "tr": "Market poşetleri ucuz ve kolay işlenen polietilenden (PE) yapılır. Teflon pahalıdır; yüksek sıcaklık dayanımı nedeniyle yapışmaz kaplamalarda kullanılır.",
        "en": "Shopping bags are made of cheap, easily processed polyethylene (PE). Teflon is expensive and is used for non-stick coatings because of its heat resistance.",
        "de": "Einkaufstüten bestehen aus billigem, leicht verarbeitbarem Polyethylen (PE). Teflon ist teuer und wird wegen seiner Hitzebeständigkeit für Antihaftbeschichtungen verwendet.",
        "fr": "Les sacs de caisse sont faits de polyéthylène (PE), bon marché et facile à mettre en forme. Le Téflon est cher et sert aux revêtements antiadhésifs grâce à sa résistance à la chaleur.",
        "ru": "Пакеты делают из дешёвого и легко перерабатываемого полиэтилена (ПЭ). Тефлон дорог и применяется в антипригарных покрытиях благодаря термостойкости.",
        "ar": "تُصنع أكياس التسوق من البولي إيثيلين (PE) الرخيص وسهل التشكيل، أما التفلون فغالي الثمن ويُستخدم في الطلاءات غير اللاصقة لمقاومته العالية للحرارة.",
        "zh": "购物袋由便宜、易加工的聚乙烯（PE）制成。特氟龙价格昂贵，因耐高温而用于不粘涂层。",
        "ku": "Kîsikên bazarê ji polîetîlena (PE) erzan û bi hêsanî tê şekildan têne çêkirin. Teflon biha ye û ji ber berxwedana xwe ya li hember germê di pêçanên neçîpok de tê bikaranîn."
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
      },
      "whyTrapIsFalse": {
        "tr": "Teflondaki C–F bağları çok sağlamdır; bu yüzden Teflon yüksek sıcaklığa dayanır, zor yanar ve kimyasallara karşı dirençlidir. Yapışmaz tavalarda kullanılmasının nedeni de budur.",
        "en": "The C–F bonds in Teflon are very strong, so Teflon withstands high temperatures, is hard to ignite and resists chemicals. That is exactly why it is used on non-stick pans.",
        "de": "Die C–F-Bindungen im Teflon sind sehr stark; daher hält Teflon hohen Temperaturen stand, brennt schwer und ist chemikalienbeständig. Genau deshalb wird es für Antihaftpfannen verwendet.",
        "fr": "Les liaisons C–F du Téflon sont très solides ; le Téflon résiste donc aux hautes températures, s’enflamme difficilement et résiste aux produits chimiques. C’est justement pour cela qu’on l’utilise sur les poêles antiadhésives.",
        "ru": "Связи C–F в тефлоне очень прочные, поэтому тефлон выдерживает высокие температуры, трудно воспламеняется и химически стоек. Именно поэтому его используют для антипригарных сковород.",
        "ar": "روابط C–F في التفلون قوية جدًا، لذلك يتحمل التفلون درجات الحرارة العالية ويصعب اشتعاله ويقاوم المواد الكيميائية، وهذا بالضبط سبب استخدامه في المقالي غير اللاصقة.",
        "zh": "特氟龙中的 C–F 键非常牢固，因此它耐高温、难燃烧、耐化学腐蚀，这正是它被用于不粘锅的原因。",
        "ku": "Girêdanên C–F yên di Teflonê de pir xurt in; ji ber vê yekê Teflon li ber germahiya bilind radiweste, bi zehmetî dişewite û li hember kîmyewiyan berxwedêr e. Sedema bikaranîna wê di tawên neçîpok de jî ev e."
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
      },
      "whyTrapIsFalse": {
        "tr": "Kevlar çok dayanıklı ve pahalı bir yüksek performans polimeridir; çelik yelek, kask gibi koruyucu malzemelerde kullanılır. Tek kullanımlık bardaklar ucuz polimerlerden (örn. polistiren, polipropilen) yapılır.",
        "en": "Kevlar is a very strong and expensive high-performance polymer used in protective gear such as body armour and helmets. Disposable cups are made of cheap polymers (e.g. polystyrene, polypropylene).",
        "de": "Kevlar ist ein sehr festes und teures Hochleistungspolymer für Schutzausrüstung wie Schutzwesten und Helme. Einwegbecher bestehen aus billigen Polymeren (z. B. Polystyrol, Polypropylen).",
        "fr": "Le Kevlar est un polymère haute performance très résistant et coûteux, utilisé dans les équipements de protection (gilets pare-balles, casques). Les gobelets jetables sont faits de polymères bon marché (p. ex. polystyrène, polypropylène).",
        "ru": "Кевлар — очень прочный и дорогой высокоэффективный полимер для защитного снаряжения (бронежилеты, шлемы). Одноразовые стаканы делают из дешёвых полимеров (например, полистирола, полипропилена).",
        "ar": "الكيفلار بوليمر عالي الأداء شديد المتانة وغالي الثمن يُستخدم في معدات الحماية كالسترات الواقية والخوذ، أما الأكواب أحادية الاستعمال فتُصنع من بوليمرات رخيصة (مثل البوليستيرين والبولي بروبيلين).",
        "zh": "凯夫拉是一种非常坚固且昂贵的高性能聚合物，用于防弹衣、头盔等防护装备；一次性杯子由廉价聚合物（如聚苯乙烯、聚丙烯）制成。",
        "ku": "Kevlar polîmereke bi performansa bilind, pir xurt û biha ye; di amûrên parastinê yên wek êlekên li dijî guleyan û kaskan de tê bikaranîn. Piyalên yekcarî ji polîmerên erzan (wek polîstîren, polîpropîlen) têne çêkirin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Kauçuk uzun ve düzensiz polimer zincirlerinden oluşan esnek (elastik) bir maddedir; çekilince uzar, bırakılınca eski hâline döner. Bu özelliği nedeniyle lastik yapımında kullanılır.",
        "en": "Rubber is an elastic material made of long, disordered polymer chains; it stretches when pulled and returns to its shape when released. That property is why it is used for tyres.",
        "de": "Kautschuk ist ein elastischer Stoff aus langen, ungeordneten Polymerketten; er dehnt sich beim Ziehen und kehrt beim Loslassen in seine Form zurück. Deshalb wird er für Reifen verwendet.",
        "fr": "Le caoutchouc est un matériau élastique formé de longues chaînes polymères désordonnées ; il s’allonge quand on le tire et reprend sa forme quand on le relâche. C’est pour cela qu’on l’utilise pour les pneus.",
        "ru": "Каучук — эластичный материал из длинных неупорядоченных полимерных цепей: при растяжении удлиняется, а после снятия нагрузки возвращает форму. Поэтому его используют для шин.",
        "ar": "المطاط مادة مرنة تتكون من سلاسل بوليمرية طويلة وغير منتظمة؛ تستطيل عند الشد وتعود إلى شكلها عند الترك، ولهذا تُستخدم في صناعة الإطارات.",
        "zh": "橡胶是由长而无序的聚合物链构成的弹性材料，拉伸时伸长、松开后恢复原状，因此用于制造轮胎。",
        "ku": "Lastîk maddeyeke nerm û elastîk e ku ji zincîrên polîmer ên dirêj û bêrêz pêk tê; dema tê kişandin dirêj dibe, dema tê berdan vedigere şiklê xwe. Ji ber vê taybetiyê di çêkirina tekeran de tê bikaranîn."
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
      },
      "whyTrapIsFalse": {
        "tr": "PET bir termoplastiktir; eritilip yeniden şekillendirilebilir. Geri dönüşüm kodu 1 olan PET şişeler toplanıp tekstil lifine ve yeni ambalajlara dönüştürülür.",
        "en": "PET is a thermoplastic: it can be melted and reshaped. PET bottles, recycling code 1, are collected and turned into textile fibres and new packaging.",
        "de": "PET ist ein Thermoplast: Es lässt sich schmelzen und neu formen. PET-Flaschen mit dem Recyclingcode 1 werden gesammelt und zu Textilfasern und neuen Verpackungen verarbeitet.",
        "fr": "Le PET est un thermoplastique : il peut être fondu et remis en forme. Les bouteilles en PET, code de recyclage 1, sont collectées et transformées en fibres textiles et en nouveaux emballages.",
        "ru": "ПЭТ — термопласт: его можно расплавить и снова сформовать. ПЭТ-бутылки с кодом переработки 1 собирают и превращают в текстильное волокно и новую упаковку.",
        "ar": "PET لدائن حرارية يمكن صهرها وإعادة تشكيلها، وتُجمع زجاجات PET ذات رمز إعادة التدوير 1 لتتحول إلى ألياف نسيجية وعبوات جديدة.",
        "zh": "PET 是热塑性塑料，可以熔化后重新成型。回收代码为 1 的 PET 瓶被收集后制成纺织纤维和新的包装。",
        "ku": "PET termoplastîk e; dikare were helandin û ji nû ve were şekildan. Şûşeyên PET yên bi koda vezîvirandinê 1 têne berhevkirin û dibin têlên tekstîlê û pakêtên nû."
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
      },
      "whyTrapIsFalse": {
        "tr": "Miselde yerleşim tersidir: apolar kuyruklar içe, kire doğru; polar (hidrofil) başlar dışa, suya doğru yönelir. Başlar kire gömülseydi kir suda dağılamazdı.",
        "en": "In a micelle it is the reverse: the non-polar tails point inwards into the dirt, the polar (hydrophilic) heads point outwards into the water. If the heads were buried in the dirt, it could not disperse in water.",
        "de": "In der Mizelle ist es umgekehrt: Die unpolaren Schwänze zeigen nach innen in den Schmutz, die polaren (hydrophilen) Köpfe nach außen ins Wasser. Steckten die Köpfe im Schmutz, könnte er sich nicht im Wasser verteilen.",
        "fr": "Dans une micelle, c’est l’inverse : les queues apolaires sont tournées vers l’intérieur, dans la saleté, les têtes polaires (hydrophiles) vers l’extérieur, vers l’eau. Si les têtes s’enfonçaient dans la saleté, celle-ci ne pourrait pas se disperser dans l’eau.",
        "ru": "В мицелле наоборот: неполярные хвосты направлены внутрь, к грязи, а полярные (гидрофильные) головки — наружу, к воде. Если бы головки погружались в грязь, она не могла бы распределиться в воде.",
        "ar": "في المذيلة يكون الترتيب معكوسًا: تتجه الذيول غير القطبية إلى الداخل نحو الأوساخ، وتتجه الرؤوس القطبية (المحبة للماء) إلى الخارج نحو الماء. ولو انغرست الرؤوس في الأوساخ لما تشتتت في الماء.",
        "zh": "胶束中的排列正好相反：非极性尾部朝内伸入污垢，极性（亲水）头部朝外朝向水。如果头部嵌入污垢，污垢就无法分散到水中。",
        "ku": "Di mîselê de rêzkirin berevajî ye: dûvikên nepolar ber bi hundir, ber bi qirêjê ve; serên polar (hîdrofîl) ber bi derve, ber bi avê ve ne. Heke ser biçûna nav qirêjê, qirêj di avê de belav nedibû."
      }
    },
    {
      "id": "u10-f12",
      "fact": {
        "tr": "İlaçlar etki yerine ve hızına göre farklı formlarda üretilir; tablet, draje, kapsül, şurup, ampul (enjeksiyon), merhem, krem ve damla bu formlardan bazılarıdır.",
        "en": "Medicines are produced in different forms according to where and how fast they act; tablets, dragees, capsules, syrups, ampoules (injection), ointments, creams and drops are some of these forms.",
        "de": "Arzneimittel werden je nach Wirkort und Wirkgeschwindigkeit in verschiedenen Formen hergestellt; Tabletten, Dragees, Kapseln, Sirupe, Ampullen (Injektion), Salben, Cremes und Tropfen sind einige davon.",
        "fr": "Les médicaments sont fabriqués sous différentes formes selon le lieu et la rapidité d’action ; comprimés, dragées, gélules, sirops, ampoules (injection), pommades, crèmes et gouttes en sont quelques-unes.",
        "ru": "Лекарства выпускают в разных формах в зависимости от места и скорости действия; таблетки, драже, капсулы, сиропы, ампулы (инъекции), мази, кремы и капли — лишь некоторые из них.",
        "ar": "تُصنع الأدوية بأشكال مختلفة بحسب مكان تأثيرها وسرعته، ومن هذه الأشكال: الأقراص والأقراص الملبسة والكبسولات والشراب والأمبولات (الحقن) والمراهم والكريمات والقطرات.",
        "zh": "药物根据作用部位和起效速度被制成不同剂型，片剂、糖衣片、胶囊、糖浆、安瓿（注射剂）、软膏、乳膏和滴剂是其中的一部分。",
        "ku": "Derman li gorî cihê bandorê û leza wê bi formên cuda têne çêkirin; tablet, dragee, kapsûl, şurub, ampûl (derzî), melhem, krem û dilop hin ji van forman in."
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
      },
      "whyTrapIsFalse": {
        "tr": "İlaçlar etki yerine ve hızına göre farklı formlarda hazırlanır. Enjeksiyonla kas ya da damar yoluyla, merhem ve kremle deriden, damlayla göz veya burundan da verilebilir.",
        "en": "Medicines are prepared in different forms depending on where and how fast they must act. They can also be given by injection into a muscle or vein, through the skin as ointments and creams, or as eye or nasal drops.",
        "de": "Arzneimittel werden je nach Wirkort und Wirkgeschwindigkeit in verschiedenen Formen hergestellt. Sie können auch per Injektion in Muskel oder Vene, als Salbe und Creme über die Haut oder als Augen- bzw. Nasentropfen gegeben werden.",
        "fr": "Les médicaments sont préparés sous différentes formes selon le lieu et la rapidité d’action souhaités. Ils peuvent aussi être administrés par injection intramusculaire ou intraveineuse, par la peau sous forme de pommades et de crèmes, ou en gouttes oculaires ou nasales.",
        "ru": "Лекарства выпускают в разных формах в зависимости от места и скорости действия. Их вводят также инъекцией в мышцу или вену, через кожу в виде мазей и кремов, в виде глазных или назальных капель.",
        "ar": "تُحضَّر الأدوية بأشكال مختلفة بحسب مكان تأثيرها وسرعته، فيمكن إعطاؤها أيضًا بالحقن في العضل أو الوريد، أو عبر الجلد على شكل مراهم وكريمات، أو كقطرات للعين أو الأنف.",
        "zh": "药物根据作用部位和起效速度被制成不同剂型，也可以通过肌肉或静脉注射、以软膏和乳膏经皮肤、或以眼药水、滴鼻剂的形式给药。",
        "ku": "Derman li gorî cihê bandorê û leza wê bi formên cuda têne amadekirin. Ew dikarin bi derziyê di masûlke an damarê re, bi melhem û kremê di çerm re, an jî wek dilopên çav an pozê werin dayîn."
      }
    },
    {
      "id": "u10-f13",
      "fact": {
        "tr": "Kozmetik ürünlerde koruyucu olarak kullanılan parabenler ve yumuşatıcı olarak kullanılan bazı ftalatlar bazı kişilerde alerjik veya sağlığa zararlı etkiler gösterebilir; bu nedenle kullanımları yasal sınırlarla düzenlenir.",
        "en": "Parabens used as preservatives and some phthalates used as softeners in cosmetics can cause allergic or harmful effects in some people; therefore their use is regulated by legal limits.",
        "de": "Als Konservierungsmittel verwendete Parabene und manche als Weichmacher verwendete Phthalate können in Kosmetika bei manchen Menschen allergische oder gesundheitsschädliche Wirkungen haben; daher ist ihr Einsatz gesetzlich begrenzt.",
        "fr": "Les parabènes utilisés comme conservateurs et certains phtalates utilisés comme plastifiants dans les cosmétiques peuvent provoquer chez certaines personnes des effets allergiques ou nocifs ; leur usage est donc encadré par des limites légales.",
        "ru": "Парабены, используемые в косметике как консерванты, и некоторые фталаты, используемые как смягчители, могут вызывать у части людей аллергию или вредить здоровью; поэтому их применение ограничено законом.",
        "ar": "قد تسبب البارابينات المستخدمة مواد حافظةً وبعض الفثالات المستخدمة ملدّناتٍ في مستحضرات التجميل تأثيرات تحسسية أو ضارة لدى بعض الأشخاص، لذا يُنظَّم استخدامها بحدود قانونية.",
        "zh": "化妆品中用作防腐剂的对羟基苯甲酸酯类以及部分用作增塑剂的邻苯二甲酸酯，可能使某些人产生过敏或有害健康的影响，因此其使用受法定限量约束。",
        "ku": "Parabenên ku di kozmetîkê de wek parastinker û hin ftalatên ku wek nermker têne bikaranîn dikarin li hin kesan bandorên alerjîk an zirardar çêbikin; ji ber vê yekê bikaranîna wan bi sînorên qanûnî tê birêkxistin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Koruyucular besin değil, ürünün mikroorganizmalarla bozulmasını önlemek için eklenen katkı maddeleridir. Parabenler gibi bazılarının alerjik ya da sağlığa zararlı etkileri olabileceği için kullanım miktarları yasal sınırlarla düzenlenir.",
        "en": "Preservatives are not nutrients but additives that stop the product from being spoiled by microorganisms. Some of them, such as parabens, may have allergenic or harmful effects, so their amounts are limited by law.",
        "de": "Konservierungsstoffe sind keine Nährstoffe, sondern Zusatzstoffe, die den Verderb durch Mikroorganismen verhindern. Einige, etwa Parabene, können allergen oder gesundheitsschädlich wirken, daher sind ihre Mengen gesetzlich begrenzt.",
        "fr": "Les conservateurs ne sont pas des nutriments mais des additifs qui empêchent l’altération du produit par les micro-organismes. Certains, comme les parabènes, peuvent avoir des effets allergisants ou nocifs ; leurs quantités sont donc limitées par la loi.",
        "ru": "Консерванты — не питательные вещества, а добавки, предотвращающие порчу продукта микроорганизмами. Некоторые из них, например парабены, могут вызывать аллергию или вредить здоровью, поэтому их количество ограничено законом.",
        "ar": "المواد الحافظة ليست مغذيات، بل إضافات تمنع فساد المنتج بفعل الكائنات الدقيقة، وقد يكون لبعضها كالبارابينات تأثيرات تحسسية أو ضارة، لذا تُحدَّد كمياتها بالقانون.",
        "zh": "防腐剂不是营养素，而是防止产品被微生物变质的添加剂。其中一些（如对羟基苯甲酸酯类）可能致敏或有害健康，因此其用量受法规限制。",
        "ku": "Parastinker ne xurek in; ew madeyên zêdekirî ne ku nahêlin hilber ji ber mîkroorganîzmayan xera bibe. Hin ji wan, wek parabenan, dikarin bandorên alerjîk an zirardar bikin, ji ber vê yekê mîqdarên wan bi qanûnê têne sînorkirin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Riviera zeytinyağı rafine edilmiş (işlem görmüş) zeytinyağı ile natürel zeytinyağının karışımıdır. Hiçbir kimyasal işlem görmeden yalnızca mekanik yolla elde edilen yağ natürel sızma zeytinyağıdır.",
        "en": "Riviera olive oil is a blend of refined (processed) olive oil and virgin olive oil. The oil obtained only by mechanical means without any chemical treatment is extra virgin olive oil.",
        "de": "Riviera-Olivenöl ist eine Mischung aus raffiniertem (behandeltem) Olivenöl und nativem Olivenöl. Das nur mechanisch, ohne chemische Behandlung gewonnene Öl ist natives Olivenöl extra.",
        "fr": "L’huile d’olive Riviera est un mélange d’huile d’olive raffinée (traitée) et d’huile d’olive vierge. L’huile obtenue uniquement par des procédés mécaniques, sans traitement chimique, est l’huile d’olive vierge extra.",
        "ru": "Оливковое масло «Ривьера» — смесь рафинированного (обработанного) и натурального оливкового масла. Масло, полученное только механическим способом без химической обработки, — это оливковое масло extra virgin.",
        "ar": "زيت زيتون ريفييرا خليط من زيت الزيتون المكرر (المعالَج) وزيت الزيتون البكر، أما الزيت المستخرج بالطرق الميكانيكية فقط دون أي معالجة كيميائية فهو زيت الزيتون البكر الممتاز.",
        "zh": "Riviera 橄榄油是精炼（经过加工的）橄榄油与初榨橄榄油的混合物。只用机械方法、未经任何化学处理得到的才是特级初榨橄榄油。",
        "ku": "Rûnê zeytûnê yê Riviera tevliheviya rûnê zeytûnê yê rafînekirî (kar lê hatî kirin) û rûnê zeytûnê yê xwezayî ye. Rûnê ku bê tu karê kîmyayî tenê bi rêya mekanîkî tê bidestxistin rûnê zeytûnê yê xwezayî yê herî paqij (extra virgin) e."
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
      },
      "whyTrapIsFalse": {
        "tr": "Margarin bitkisel kaynaklıdır: doymamış sıvı yağların ikili bağlarına katalizör eşliğinde hidrojen katılarak yağ katılaştırılır. Kemiklerin kaynatılmasıyla margarin değil, jelatin gibi başka ürünler elde edilir.",
        "en": "Margarine is plant-based: hydrogen is added to the double bonds of unsaturated liquid oils with a catalyst, which solidifies the oil. Boiling bones gives other products such as gelatin, not margarine.",
        "de": "Margarine ist pflanzlich: An die Doppelbindungen ungesättigter flüssiger Öle wird mit einem Katalysator Wasserstoff addiert, wodurch das Öl fest wird. Durch Auskochen von Knochen erhält man andere Produkte wie Gelatine, keine Margarine.",
        "fr": "La margarine est d’origine végétale : on additionne de l’hydrogène aux doubles liaisons des huiles liquides insaturées en présence d’un catalyseur, ce qui solidifie l’huile. En faisant bouillir des os, on obtient d’autres produits comme la gélatine, pas de la margarine.",
        "ru": "Маргарин имеет растительное происхождение: к двойным связям ненасыщенных жидких масел в присутствии катализатора присоединяют водород, и масло затвердевает. Вываривая кости, получают другие продукты, например желатин, а не маргарин.",
        "ar": "المارجرين نباتي المصدر: يُضاف الهيدروجين إلى الروابط الثنائية في الزيوت السائلة غير المشبعة بوجود عامل حفاز فيتصلب الزيت. أما غلي العظام فينتج مواد أخرى كالجيلاتين لا المارجرين.",
        "zh": "人造黄油来源于植物：在催化剂作用下向不饱和液态油的双键中加氢，使油变为固态。熬煮骨头得到的是明胶等其他产品，而不是人造黄油。",
        "ku": "Margarîn ji riwekan tê: bi alîkariya katalîzorê hîdrojen li girêdanên ducar ên rûnên şil ên têrnebûyî tê zêdekirin û rûn hişk dibe. Bi kelandina hestiyan ne margarîn, lê berhemên din ên wek jelatînê têne bidestxistin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Pastörizasyon soğutma değil ısıtma işlemidir ve sterilizasyon değildir: gıda kısa süre ısıtılıp hızla soğutulur, zararlı mikroorganizmaların çoğu ölür ama tamamı ölmez. Dondurma mikroorganizmaları öldürmez, yalnızca çoğalmalarını yavaşlatır.",
        "en": "Pasteurisation is heating, not cooling, and it is not sterilisation: the food is heated briefly and cooled quickly, killing most but not all harmful microorganisms. Freezing does not kill microorganisms; it only slows their growth.",
        "de": "Pasteurisieren ist Erhitzen, nicht Kühlen, und keine Sterilisation: Das Lebensmittel wird kurz erhitzt und rasch abgekühlt; die meisten, aber nicht alle schädlichen Mikroorganismen sterben. Einfrieren tötet Mikroorganismen nicht, es bremst nur ihr Wachstum.",
        "fr": "La pasteurisation est un chauffage, pas un refroidissement, et ce n’est pas une stérilisation : l’aliment est chauffé brièvement puis refroidi rapidement, ce qui tue la plupart des micro-organismes nuisibles, mais pas tous. La congélation ne tue pas les micro-organismes, elle ralentit seulement leur multiplication.",
        "ru": "Пастеризация — это нагревание, а не охлаждение, и это не стерилизация: продукт кратковременно нагревают и быстро охлаждают, при этом гибнет большинство, но не все вредные микроорганизмы. Замораживание микроорганизмы не убивает, а лишь замедляет их размножение.",
        "ar": "البسترة عملية تسخين لا تبريد، وليست تعقيمًا: يُسخَّن الغذاء لمدة قصيرة ثم يُبرَّد بسرعة فيموت معظم الكائنات الدقيقة الضارة لا جميعها. أما التجميد فلا يقتل الكائنات الدقيقة بل يبطئ تكاثرها فقط.",
        "zh": "巴氏杀菌是加热而不是冷却，也不是灭菌：食品被短时间加热后迅速冷却，大部分而非全部有害微生物被杀死。冷冻不能杀死微生物，只能减缓其繁殖。",
        "ku": "Pastorîzasyon germkirin e, ne sarkirin, û ne sterîlîzasyon e: xwarin demeke kurt tê germkirin û zû tê sarkirin, piraniya mîkroorganîzmayên zirardar dimirin lê hemû namirin. Cemidandin mîkroorganîzmayan nakuje, tenê zêdebûna wan hêdî dike."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u10-c01",
      "conceptA": {
        "tr": "Deterjan",
        "en": "Detergent",
        "de": "Detergens",
        "fr": "Détergent",
        "ru": "Детергент",
        "ar": "منظف صناعي",
        "zh": "洗涤剂",
        "ku": "Deterjan"
      },
      "conceptB": {
        "tr": "Sabun",
        "en": "Soap",
        "de": "Seife",
        "fr": "Savon",
        "ru": "Мыло",
        "ar": "صابون",
        "zh": "肥皂",
        "ku": "Sabûn"
      },
      "distinction": {
        "tr": "Deterjan petrol türevlerinden üretilir, sert sularda da temizler ancak doğada zor parçalandığı için çevreyi daha çok kirletir; sabun ise bitkisel veya hayvansal yağlardan üretilir, sert suda çökelek oluşturur ve doğada kolay parçalanır.",
        "en": "A detergent is made from petroleum derivatives, cleans in hard water too, but pollutes the environment more because it breaks down slowly in nature; soap is made from vegetable or animal fats, forms a precipitate in hard water and breaks down easily in nature.",
        "de": "Ein Detergens wird aus Erdölderivaten hergestellt, reinigt auch in hartem Wasser, belastet die Umwelt aber stärker, weil es in der Natur nur schwer abgebaut wird; Seife wird aus pflanzlichen oder tierischen Fetten hergestellt, bildet in hartem Wasser einen Niederschlag und wird in der Natur leicht abgebaut.",
        "fr": "Un détergent est fabriqué à partir de dérivés du pétrole, nettoie aussi en eau dure, mais pollue davantage l'environnement car il se dégrade difficilement dans la nature ; le savon est fabriqué à partir de graisses végétales ou animales, forme un précipité en eau dure et se dégrade facilement dans la nature.",
        "ru": "Детергент получают из продуктов переработки нефти, он моет и в жёсткой воде, но сильнее загрязняет окружающую среду, так как трудно разлагается в природе; мыло получают из растительных или животных жиров, в жёсткой воде оно образует осадок, а в природе легко разлагается.",
        "ar": "المنظف الصناعي يُصنع من مشتقات البترول وينظف في الماء العسر أيضًا، لكنه يلوث البيئة أكثر لأنه يتحلل بصعوبة في الطبيعة؛ أما الصابون فيُصنع من الدهون النباتية أو الحيوانية ويكوّن راسبًا في الماء العسر ويتحلل بسهولة في الطبيعة.",
        "zh": "洗涤剂由石油衍生物制得，在硬水中也能去污，但在自然界中难以分解，因而对环境污染更大；肥皂由植物或动物油脂制得，在硬水中会生成沉淀，在自然界中容易分解。",
        "ku": "Deterjan ji berhemên petrolê tê çêkirin, di ava hişk de jî paqij dike, lê ji ber ku di xwezayê de bi zehmetî perçe dibe jîngehê bêtir qirêj dike; sabûn ji rûnên riwekî an heywanî tê çêkirin, di ava hişk de rûniştek çêdike û di xwezayê de bi hêsanî perçe dibe."
      }
    },
    {
      "id": "u10-c02",
      "conceptA": {
        "tr": "Beyaz Sabun",
        "en": "White Soap",
        "de": "Weiße Seife",
        "fr": "Savon blanc",
        "ru": "Белое мыло",
        "ar": "الصابون الأبيض",
        "zh": "白皂",
        "ku": "Sabûna spî"
      },
      "conceptB": {
        "tr": "Arap Sabunu",
        "en": "Soft Soap",
        "de": "Schmierseife",
        "fr": "Savon mou",
        "ru": "Мягкое мыло",
        "ar": "الصابون الطري",
        "zh": "软皂",
        "ku": "Sabûna nerm"
      },
      "distinction": {
        "tr": "Beyaz sabun yağ asitlerinin sodyum tuzudur ve serttir; arap sabunu ise yağ asitlerinin potasyum tuzudur ve yumuşaktır.",
        "en": "White soap is the sodium salt of fatty acids and is hard; soft soap is the potassium salt of fatty acids and is soft.",
        "de": "Weiße Seife ist das Natriumsalz von Fettsäuren und ist hart; Schmierseife ist das Kaliumsalz von Fettsäuren und ist weich.",
        "fr": "Le savon blanc est le sel de sodium d'acides gras et il est dur ; le savon mou est le sel de potassium d'acides gras et il est mou.",
        "ru": "Белое мыло — это натриевая соль жирных кислот, оно твёрдое; мягкое мыло — это калиевая соль жирных кислот, оно мягкое.",
        "ar": "الصابون الأبيض ملح الصوديوم للأحماض الدهنية وهو صلب؛ أما الصابون الطري فملح البوتاسيوم للأحماض الدهنية وهو ليّن.",
        "zh": "白皂是脂肪酸的钠盐，质地坚硬；软皂是脂肪酸的钾盐，质地柔软。",
        "ku": "Sabûna spî xwêya sodyûmê ya asîdên rûnî ye û hişk e; sabûna nerm xwêya potasyûmê ya asîdên rûnî ye û nerm e."
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
        "ru": "Оливковое масло Extra Virgin получают из оливок только механическим путём, его кислотность самая низкая; оливковое масло Riviera — смесь рафинированного и натурального оливкового масла.",
        "ar": "يُستخلص زيت الزيتون البكر الممتاز من الزيتون بطرق ميكانيكية فقط وهو الأقل حموضة؛ أما زيت ريفييرا فهو خليط من زيت الزيتون المكرر وزيت الزيتون البكر.",
        "zh": "特级初榨橄榄油仅通过机械方法从橄榄中获得，酸度最低；里维埃拉橄榄油是精炼橄榄油与初榨橄榄油的混合物。",
        "ku": "Rûnê zeytûnê yê sizma tenê bi rêya mekanîkî ji zeytûnê tê wergirtin û asîdiya wî herî kêm e; rûnê Riviera tevliheviya rûnê zeytûnê yê rafînekirî û rûnê zeytûnê yê xwezayî ye."
      }
    },
    {
      "id": "u10-c04",
      "conceptA": {
        "tr": "Hidrofil Uç",
        "en": "Hydrophilic End",
        "de": "Hydrophiles Ende",
        "fr": "Extrémité hydrophile",
        "ru": "Гидрофильный конец",
        "ar": "الطرف المحب للماء",
        "zh": "亲水端",
        "ku": "Serê hîdrofîl"
      },
      "conceptB": {
        "tr": "Hidrofob Uç",
        "en": "Hydrophobic End",
        "de": "Hydrophobes Ende",
        "fr": "Extrémité hydrophobe",
        "ru": "Гидрофобный конец",
        "ar": "الطرف الكاره للماء",
        "zh": "疏水端",
        "ku": "Serê hîdrofob"
      },
      "distinction": {
        "tr": "Hidrofil uç polar olup suyu sever ve suya tutunur; hidrofob uç apolar hidrokarbon zinciri olup kire tutunur.",
        "en": "The hydrophilic end is polar, attracts water and holds on to water; the hydrophobic end is a non-polar hydrocarbon chain and holds on to dirt.",
        "de": "Ein hydrophiles Ende ist polar, wasserliebend und haftet am Wasser; ein hydrophobes Ende ist eine unpolare Kohlenwasserstoffkette und haftet am Schmutz.",
        "fr": "L'extrémité hydrophile est polaire, aime l'eau et s'accroche à l'eau ; l'extrémité hydrophobe est une chaîne hydrocarbonée apolaire et s'accroche à la saleté.",
        "ru": "Гидрофильный конец полярен, любит воду и удерживается в воде; гидрофобный конец — это неполярная углеводородная цепь, он удерживается на загрязнении.",
        "ar": "الطرف المحب للماء قطبي ويحب الماء ويلتصق به؛ أما الطرف الكاره للماء فسلسلة هيدروكربونية غير قطبية تلتصق بالأوساخ.",
        "zh": "亲水端是极性的，亲水并与水结合；疏水端是非极性的烃链，与污垢结合。",
        "ku": "Serê hîdrofîl polar e, ji avê hez dike û bi avê ve digire; serê hîdrofob zincîreke hîdrokarbonî ya apolar e û bi qirêjê ve digire."
      }
    },
    {
      "id": "u10-c05",
      "conceptA": {
        "tr": "Doğal Polimer",
        "en": "Natural Polymer",
        "de": "Natürliches Polymer",
        "fr": "Polymère naturel",
        "ru": "Природный полимер",
        "ar": "البوليمر الطبيعي",
        "zh": "天然聚合物",
        "ku": "Polîmera xwezayî"
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
        "de": "Ein natürliches Polymer kommt in der Natur vor (Stärke, Cellulose, DNA); synthetische Makromoleküle wie PE, PVC, Teflon und Kevlar werden dagegen industriell hergestellt.",
        "fr": "Un polymère naturel se trouve dans la nature (amidon, cellulose, ADN) ; un polymère synthétique est fabriqué en usine (PE, PVC, Téflon, Kevlar).",
        "ru": "Природный полимер встречается в природе (крахмал, целлюлоза, ДНК); синтетический полимер получают на заводе (ПЭ, ПВХ, тефлон, кевлар).",
        "ar": "النشا والسليلوز والحمض النووي هي بوليمرات طبيعية. PE، PVC، Teflon وKevlar عبارة عن بوليمرات صناعية يتم إنتاجها في المصنع.",
        "zh": "淀粉、纤维素和 DNA 属于天然聚合物；PE、PVC、特氟龙和凯夫拉是工厂生产的合成聚合物。",
        "ku": "Polîmera xwezayî di xwezayê de heye (nîşasta, selûloz, DNA); polîmera sentetîk di fabrîkeyê de tê çêkirin (PE, PVC, Teflon, Kevlar)."
      }
    },
    {
      "id": "u10-c06",
      "conceptA": {
        "tr": "Termoplastik",
        "en": "Thermoplastic",
        "de": "Thermoplast",
        "fr": "Thermoplastique",
        "ru": "Термопласт",
        "ar": "بوليمر لدن بالحرارة",
        "zh": "热塑性塑料",
        "ku": "Termoplastîk"
      },
      "conceptB": {
        "tr": "Termoset Polimer",
        "en": "Thermosetting Polymer",
        "de": "Duroplast",
        "fr": "Polymère thermodurcissable",
        "ru": "Термореактивный полимер",
        "ar": "بوليمر متصلب بالحرارة",
        "zh": "热固性聚合物",
        "ku": "Polîmera termoset"
      },
      "distinction": {
        "tr": "Termoplastik ısıtıldığında yumuşar ve yeniden şekillendirilebilir; termoset polimer ise çapraz bağlı yapısı nedeniyle ısıtıldığında yumuşamaz, yeniden şekillendirilemez ve yüksek sıcaklıkta bozunur.",
        "en": "A thermoplastic softens when heated and can be reshaped; a thermosetting polymer, because of its cross-linked structure, does not soften when heated, cannot be reshaped and decomposes at high temperature.",
        "de": "Ein Thermoplast wird beim Erhitzen weich und lässt sich neu formen; ein Duroplast wird wegen seiner vernetzten Struktur beim Erhitzen nicht weich, lässt sich nicht neu formen und zersetzt sich bei hoher Temperatur.",
        "fr": "Un thermoplastique ramollit à la chaleur et peut être remodelé ; un polymère thermodurcissable, à cause de sa structure réticulée, ne ramollit pas à la chaleur, ne peut pas être remodelé et se décompose à haute température.",
        "ru": "Термопласт при нагревании размягчается и может быть сформован заново; термореактивный полимер из-за сшитой структуры при нагревании не размягчается, не поддаётся повторному формованию и при высокой температуре разлагается.",
        "ar": "البوليمر اللدن بالحرارة يلين عند التسخين ويمكن إعادة تشكيله؛ أما البوليمر المتصلب بالحرارة فلا يلين عند التسخين بسبب بنيته المتشابكة، ولا يمكن إعادة تشكيله، ويتحلل عند درجات الحرارة العالية.",
        "zh": "热塑性塑料受热时变软，可以重新塑形；热固性聚合物由于具有交联结构，受热时不变软，不能重新塑形，在高温下会分解。",
        "ku": "Termoplastîk dema tê germkirin nerm dibe û dikare ji nû ve bê teşekirin; polîmera termoset ji ber avahiya xwe ya bi girêdanên xaçerê dema tê germkirin nerm nabe, ji nû ve nayê teşekirin û di germahiya bilind de xera dibe."
      }
    },
    {
      "id": "u10-c07",
      "conceptA": {
        "tr": "Çamaşır Suyu (NaClO)",
        "en": "Liquid Bleach (NaClO)",
        "de": "Bleichlauge (NaClO)",
        "fr": "Eau de Javel (NaClO)",
        "ru": "Отбеливатель (NaClO)",
        "ar": "ماء الجافيل (NaClO)",
        "zh": "漂白水 (NaClO)",
        "ku": "Ava çilşoyê (NaClO)"
      },
      "conceptB": {
        "tr": "Kireç Kaymağı (CaOCl2)",
        "en": "Bleaching Powder (CaOCl2)",
        "de": "Chlorkalk (CaOCl2)",
        "fr": "Chlorure de chaux (CaOCl2)",
        "ru": "Хлорная известь (CaOCl2)",
        "ar": "مسحوق التبييض (CaOCl2)",
        "zh": "漂白粉 (CaOCl2)",
        "ku": "Toza spîkirinê (CaOCl2)"
      },
      "distinction": {
        "tr": "Çamaşır suyu, sodyum hipokloritin sulu çözeltisidir; kireç kaymağı ise katı hâlde bulunan bir ağartıcı ve dezenfektandır. İkisinin de etkisi suda oluşan hipoklorit (ClO-) iyonundan kaynaklanır.",
        "en": "Liquid bleach is an aqueous solution of sodium hypochlorite; bleaching powder is a solid whitening agent and disinfectant. Both act through the hypochlorite (ClO-) ion formed in water.",
        "de": "Bleichlauge ist eine wässrige Lösung von Natriumhypochlorit; Chlorkalk ist dagegen ein festes Bleich- und Desinfektionsmittel. Beide wirken über das Hypochlorit-Ion (ClO-), das in Wasser entsteht.",
        "fr": "L'eau de Javel est une solution aqueuse d'hypochlorite de sodium ; le chlorure de chaux est un agent de blanchiment et un désinfectant solide. Tous deux agissent grâce à l'ion hypochlorite (ClO-) formé dans l'eau.",
        "ru": "Отбеливатель — это водный раствор гипохлорита натрия; хлорная известь — твёрдое отбеливающее и дезинфицирующее средство. Оба действуют за счёт гипохлорит-иона (ClO-), образующегося в воде.",
        "ar": "ماء الجافيل محلول مائي لهيبوكلوريت الصوديوم؛ أما مسحوق التبييض فمادة مبيِّضة ومطهِّرة صلبة. وكلاهما يعمل بواسطة أيون الهيبوكلوريت (ClO-) المتكوّن في الماء.",
        "zh": "漂白水是次氯酸钠的水溶液；漂白粉则是固态的漂白剂和消毒剂。二者都依靠在水中生成的次氯酸根离子（ClO-）起作用。",
        "ku": "Ava çilşoyê çareseriya avî ya hîpoklorîta sodyûmê ye; toza spîkirinê jî spîker û dezenfektaneke hişk e. Bandora herduyan ji îyona hîpoklorîtê (ClO-) ya ku di avê de çêdibe tê."
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
        "tr": "Tuz ruhu, hidroklorik asidin sulu çözeltisidir ve kireç (CaCO3) lekelerini çözer; lavabo açıcı ise NaOH veya KOH gibi kuvvetli bazlar içerir ve yağ ile saçtan oluşan tıkanıklıkları giderir.",
        "en": "Spirit of salt is an aqueous solution of hydrochloric acid that dissolves limescale (CaCO3); a drain opener contains strong bases such as NaOH or KOH and clears clogs of grease and hair.",
        "de": "Salzsäure ist als Haushaltsreiniger eine wässrige Lösung von Chlorwasserstoff und löst Kalkflecken (CaCO3); ein Abflussreiniger enthält dagegen starke Basen wie NaOH oder KOH und beseitigt Verstopfungen aus Fett und Haaren.",
        "fr": "L'esprit de sel est une solution aqueuse d'acide chlorhydrique qui dissout le calcaire (CaCO3) ; un déboucheur contient des bases fortes comme NaOH ou KOH et élimine les bouchons de graisse et de cheveux.",
        "ru": "Соляная кислота как бытовое чистящее средство — это водный раствор хлороводорода, растворяющий известковый налёт (CaCO3); средство для прочистки труб содержит сильные основания, такие как NaOH или KOH, и устраняет засоры из жира и волос.",
        "ar": "روح الملح محلول مائي لحمض الهيدروكلوريك يذيب الترسبات الكلسية (CaCO3)؛ أما مسلّك المجاري فيحتوي على قواعد قوية مثل NaOH أو KOH ويزيل انسدادات الدهون والشعر.",
        "zh": "盐酸洁厕剂是氯化氢的水溶液，能溶解水垢（CaCO3）；管道疏通剂则含有 NaOH 或 KOH 等强碱，能清除油脂和头发造成的堵塞。",
        "ku": "Ruhê xwê çareseriya avî ya asîda hîdroklorîk e û lekeyên kilsê (CaCO3) dihelîne; vekerê lavaboyê jî bazên xurt ên wek NaOH an KOH dihewîne û girtinên ji rûn û porê vedike."
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
        "tr": "Katılma Polimerleşmesi Süreci (Örn. Polietilen)",
        "en": "Addition Polymerisation Process (e.g. Polyethylene)",
        "de": "Ablauf der Additionspolymerisation (z. B. Polyethylen)",
        "fr": "Processus de polymérisation par addition (p. ex. polyéthylène)",
        "ru": "Процесс полимеризации присоединением (например, полиэтилен)",
        "ar": "عملية البلمرة بالإضافة (مثل البولي إيثيلين)",
        "zh": "加成聚合过程（如聚乙烯）",
        "ku": "Pêvajoya polîmerîzasyona zêdekirinê (mînak: polîetîlen)"
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
          "tr": "Monomerlerdeki karbon-karbon ikili bağları açılarak monomerler birbirine bağlanır",
          "en": "The carbon–carbon double bonds of the monomers open and the monomers link to each other",
          "de": "Die Kohlenstoff-Kohlenstoff-Doppelbindungen der Monomere öffnen sich, und die Monomere verbinden sich miteinander",
          "fr": "Les doubles liaisons carbone–carbone des monomères s’ouvrent et les monomères se lient entre eux",
          "ru": "Двойные связи углерод–углерод в мономерах раскрываются, и мономеры соединяются друг с другом",
          "ar": "تنفتح الروابط الثنائية كربون–كربون في المونومرات فترتبط المونومرات ببعضها",
          "zh": "单体中的碳碳双键打开，单体彼此连接",
          "ku": "Girêdanên ducar ên karbon–karbon ên monomeran vedibin û monomer bi hev ve girêdidin"
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
        "tr": "Sabun ve deterjan taneciklerinde polar baş kısım hidrofildir, su molekülleriyle etkileşir; apolar kire tutunan kısım ise hidrofob hidrokarbon kuyruğudur. Bu nedenle polar başın kire tutunduğunu söyleyen ifade yanlıştır. Diğer ifadeler doğrudur: kir genellikle apolardır ve kuyruklar tarafından sarılır; deterjanlar da sert sudaki Ca2+ ve Mg2+ iyonlarıyla sabunlar gibi çökmez.",
        "en": "In soap and detergent particles the polar head is hydrophilic and interacts with water molecules; the part that holds on to non-polar dirt is the hydrophobic hydrocarbon tail. So the statement that the polar head clings to dirt is false. The other statements are true: dirt is generally non-polar and is enveloped by the tails, and detergents do not precipitate with the Ca2+ and Mg2+ ions of hard water the way soaps do.",
        "de": "In Seifen- und Detergensteilchen ist der polare Kopf hydrophil und wechselwirkt mit Wassermolekülen; am unpolaren Schmutz haftet der hydrophobe Kohlenwasserstoffschwanz. Die Aussage, der polare Kopf hafte am Schmutz, ist daher falsch. Die übrigen Aussagen sind richtig: Schmutz ist meist unpolar und wird von den Schwänzen umschlossen, und Detergenzien fallen mit den Ca2+- und Mg2+-Ionen des harten Wassers nicht aus wie Seifen.",
        "fr": "Dans les particules de savon et de détergent, la tête polaire est hydrophile et interagit avec les molécules d'eau ; la partie qui s'accroche à la saleté apolaire est la queue hydrocarbonée hydrophobe. L'affirmation selon laquelle la tête polaire s'accroche à la saleté est donc fausse. Les autres affirmations sont vraies : la saleté est généralement apolaire et est entourée par les queues, et les détergents ne précipitent pas avec les ions Ca2+ et Mg2+ de l'eau dure comme le font les savons.",
        "ru": "В частицах мыла и детергента полярная головка гидрофильна и взаимодействует с молекулами воды; к неполярной грязи прикрепляется гидрофобный углеводородный хвост. Поэтому утверждение, что полярная головка прикрепляется к грязи, неверно. Остальные утверждения верны: грязь обычно неполярна и окружается хвостами, а детергенты не выпадают в осадок с ионами Ca2+ и Mg2+ жёсткой воды, как мыло.",
        "ar": "في جسيمات الصابون والمنظفات يكون الرأس القطبي محبًّا للماء ويتآثر مع جزيئات الماء؛ أما الجزء الذي يلتصق بالأوساخ غير القطبية فهو الذيل الهيدروكربوني الكاره للماء. لذلك فالعبارة القائلة إن الرأس القطبي يلتصق بالأوساخ خاطئة. والعبارات الأخرى صحيحة: فالأوساخ غير قطبية غالبًا وتحيط بها الذيول، والمنظفات لا تترسب مع أيونات Ca2+ وMg2+ في الماء العسر كما يترسب الصابون.",
        "zh": "在肥皂和洗涤剂的粒子中，极性头部是亲水的，与水分子相互作用；与非极性污垢结合的是疏水的烃基尾部。因此，认为极性头部附着在污垢上的说法是错误的。其余说法都正确：污垢通常是非极性的，被尾部包围；洗涤剂不像肥皂那样与硬水中的 Ca2+、Mg2+ 离子生成沉淀。",
        "ku": "Di parçikên sabûn û deterjanê de serê polar hîdrofîl e û bi molekulên avê re têkilî datîne; beşa ku bi qirêja apolar ve digire dûvikê hîdrokarbonî yê hîdrofob e. Ji ber vê yekê gotina ku dibêje serê polar bi qirêjê ve digire şaş e. Gotinên din rast in: qirêj bi gelemperî apolar e û ji aliyê dûvikan ve tê dorpêçkirin; deterjan jî bi îyonên Ca2+ û Mg2+ yên ava hişk re wek sabûnan rûnaniştek çênakin."
      }
    },
    {
      "id": "u10-twin02",
      "stem": {
        "tr": "Yüksek sıcaklığa dayanıklı olan, kimyasal maddelerle çok zor tepkimeye giren ve yiyeceklerin yapışmasını önlediği için tava ve tencerelerin iç yüzeyini kaplamada kullanılan polimer aşağıdakilerden hangisidir?",
        "en": "Which of the following polymers is heat-resistant, reacts with chemicals only with great difficulty and, because it stops food from sticking, is used to coat the inner surface of pans and pots?",
        "de": "Welches der folgenden Polymere ist hitzebeständig, reagiert nur sehr schwer mit Chemikalien und wird, weil es das Anhaften von Speisen verhindert, zur Beschichtung der Innenfläche von Pfannen und Töpfen verwendet?",
        "fr": "Lequel des polymères suivants résiste aux hautes températures, réagit très difficilement avec les produits chimiques et, parce qu’il empêche les aliments d’attacher, sert à revêtir l’intérieur des poêles et des casseroles ?",
        "ru": "Какой из следующих полимеров термостоек, очень трудно вступает в реакции с химическими веществами и, поскольку не даёт пище пригорать, используется для покрытия внутренней поверхности сковород и кастрюль?",
        "ar": "أيّ البوليمرات الآتية يتحمل درجات الحرارة العالية، ويصعب جدًا أن يتفاعل مع المواد الكيميائية، ويُستخدم لطلاء السطح الداخلي للمقالي والقدور لأنه يمنع التصاق الطعام؟",
        "zh": "下列哪种聚合物耐高温、极难与化学物质发生反应，并因能防止食物粘连而被用于锅具内表面的涂层？",
        "ku": "Kîjan ji van polîmeran li ber germahiya bilind radiweste, bi zehmetî bi kîmyewiyan re reaksiyonê dike û ji ber ku nahêle xwarin pê ve bizeliqe, ji bo pêçana rûyê hundir ê taw û beroşan tê bikaranîn?"
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
        "tr": "Teflon (PTFE, politetrafloroetilen) yüksek sıcaklığa dayanır, kimyasallarla çok zor tepkimeye girer ve yüzeyine yiyecek yapışmaz; bu nedenle tava ve tencere kaplamalarında kullanılır. PVC pencere profili ve boruda, PET içecek şişelerinde, Kevlar kurşun geçirmez yeleklerde, polietilen ise poşet ve ambalajda kullanılır.",
        "en": "Teflon (PTFE, polytetrafluoroethylene) withstands high temperatures, hardly reacts with chemicals and food does not stick to its surface; that is why it is used to coat pans and pots. PVC is used for window profiles and pipes, PET for beverage bottles, Kevlar for bulletproof vests and polyethylene for bags and packaging.",
        "de": "Teflon (PTFE, Polytetrafluorethylen) hält hohen Temperaturen stand, reagiert kaum mit Chemikalien, und Speisen haften nicht an seiner Oberfläche; deshalb wird es zur Beschichtung von Pfannen und Töpfen verwendet. PVC wird für Fensterprofile und Rohre, PET für Getränkeflaschen, Kevlar für kugelsichere Westen und Polyethylen für Tüten und Verpackungen verwendet.",
        "fr": "Le Téflon (PTFE, polytétrafluoroéthylène) résiste aux hautes températures, réagit très difficilement avec les produits chimiques et les aliments n'adhèrent pas à sa surface ; c'est pourquoi il sert à revêtir les poêles et les casseroles. Le PVC sert aux profilés de fenêtres et aux tuyaux, le PET aux bouteilles de boissons, le Kevlar aux gilets pare-balles et le polyéthylène aux sacs et emballages.",
        "ru": "Тефлон (ПТФЭ, политетрафторэтилен) выдерживает высокие температуры, очень трудно вступает в реакции с химическими веществами, и пища не пригорает к его поверхности; поэтому им покрывают сковороды и кастрюли. ПВХ используют для оконных профилей и труб, ПЭТ — для бутылок для напитков, кевлар — для бронежилетов, а полиэтилен — для пакетов и упаковки.",
        "ar": "التفلون (PTFE، بولي تترافلوروإيثيلين) يتحمل درجات الحرارة العالية ويصعب جدًّا أن يتفاعل مع المواد الكيميائية ولا يلتصق الطعام بسطحه؛ لذلك يُستخدم في طلاء المقالي والقدور. أما PVC فيُستخدم في إطارات النوافذ والأنابيب، وPET في قوارير المشروبات، والكيفلار في السترات الواقية من الرصاص، والبولي إيثيلين في الأكياس ومواد التعبئة.",
        "zh": "特氟龙（PTFE，聚四氟乙烯）耐高温，极难与化学物质反应，食物也不会粘在其表面，因此用于平底锅和锅具的涂层。PVC 用于窗框型材和管道，PET 用于饮料瓶，凯夫拉用于防弹衣，聚乙烯用于塑料袋和包装。",
        "ku": "Teflon (PTFE, polîtetrafloroetîlen) li hember germahiya bilind li ber xwe dide, bi madeyên kîmyayî re pir bi zehmetî dikeve reaksiyonê û xwarin bi rûyê wê ve nazeliqe; ji ber vê yekê di rûpûşkirina tawe û beroşan de tê bikaranîn. PVC di profîlên pencereyan û boriyan de, PET di şûşeyên vexwarinan de, Kevlar di êlekên dijî-gule de, polîetîlen jî di kîs û pakêtan de tê bikaranîn."
      }
    },
    {
      "id": "u10-twin03",
      "stem": {
        "tr": "Sabun ve deterjanlarla ilgili\nI. Sabunlar bitkisel veya hayvansal yağların NaOH ya da KOH ile tepkimesinden elde edilir.\nII. Deterjanlar sert suda sabunlara göre daha iyi temizler.\nIII. Sabunlar asidik suda (pH değeri düşük ortamda) daha etkili temizler.\nyargılarından hangileri doğrudur?",
        "en": "Regarding soaps and detergents:\nI. Soaps are obtained by reacting vegetable or animal fats with NaOH or KOH.\nII. Detergents clean better than soaps in hard water.\nIII. Soaps clean more effectively in acidic water (low pH).\nWhich of these statements are correct?",
        "de": "Zu Seifen und Detergenzien:\nI. Seifen entstehen durch Reaktion pflanzlicher oder tierischer Fette mit NaOH oder KOH.\nII. Detergenzien reinigen in hartem Wasser besser als Seifen.\nIII. Seifen reinigen in saurem Wasser (niedriger pH-Wert) wirksamer.\nWelche Aussagen sind richtig?",
        "fr": "À propos des savons et des détergents :\nI. Les savons s’obtiennent par réaction de graisses végétales ou animales avec NaOH ou KOH.\nII. Les détergents nettoient mieux que les savons en eau dure.\nIII. Les savons nettoient plus efficacement en eau acide (pH bas).\nLesquelles de ces affirmations sont correctes ?",
        "ru": "О мыле и детергентах:\nI. Мыло получают реакцией растительных или животных жиров с NaOH или KOH.\nII. В жёсткой воде детергенты моют лучше мыла.\nIII. Мыло моет эффективнее в кислой воде (при низком pH).\nКакие утверждения верны?",
        "ar": "فيما يتعلق بالصابون والمنظفات:\nI. يُحضَّر الصابون من تفاعل الدهون النباتية أو الحيوانية مع NaOH أو KOH.\nII. تنظف المنظفات في الماء العسر أفضل من الصابون.\nIII. ينظف الصابون بفعالية أكبر في الماء الحمضي (ذي الرقم الهيدروجيني المنخفض).\nأيّ العبارات صحيحة؟",
        "zh": "关于肥皂和洗涤剂：\nI. 肥皂由植物或动物油脂与 NaOH 或 KOH 反应制得。\nII. 在硬水中洗涤剂比肥皂去污效果好。\nIII. 肥皂在酸性水（pH 低）中去污效果更好。\n以上说法中哪些正确？",
        "ku": "Derbarê sabûn û deterjanan de:\nI. Sabûn bi reaksiyona rûnên riwekî an heywanî bi NaOH an KOH re tê bidestxistin.\nII. Deterjan di ava hişk de ji sabûnan baştir paqij dikin.\nIII. Sabûn di ava asîdî de (pH nizm) bi bandortir paqij dike.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: yağların kuvvetli bazla tepkimesi (sabunlaşma) sabun ve gliserin verir; NaOH sert, KOH yumuşak sabun oluşturur. II doğrudur: sabun sert sudaki Ca2+ ve Mg2+ ile çöker, deterjanın bu iyonlarla oluşturduğu tuzlar çözünür. III yanlıştır: asidik ortamda sabun anyonu H+ alarak suda çözünmeyen yağ asidine dönüşür ve temizleme gücü azalır; sabun hafif bazik ortamda iyi çalışır. Doğru yargılar I ve II'dir.",
        "en": "I is true: reacting fats with a strong base (saponification) gives soap and glycerol; NaOH gives hard soap, KOH soft soap. II is true: soap precipitates with the Ca2+ and Mg2+ of hard water, whereas the salts detergents form with these ions are soluble. III is false: in acidic medium the soap anion takes up H+ and turns into a water-insoluble fatty acid, so cleaning power drops; soap works well in a slightly basic medium. The correct statements are I and II.",
        "de": "I ist richtig: Die Reaktion von Fetten mit starker Base (Verseifung) liefert Seife und Glycerin; NaOH ergibt Kern-, KOH Schmierseife. II ist richtig: Seife fällt mit Ca2+ und Mg2+ des harten Wassers aus, die Salze der Detergenzien mit diesen Ionen sind löslich. III ist falsch: Im sauren Milieu nimmt das Seifenanion H+ auf und wird zur wasserunlöslichen Fettsäure, die Reinigungskraft sinkt; Seife wirkt gut im schwach basischen Milieu. Richtig sind I und II.",
        "fr": "I est vraie : la réaction des graisses avec une base forte (saponification) donne du savon et du glycérol ; NaOH donne un savon dur, KOH un savon mou. II est vraie : le savon précipite avec les ions Ca2+ et Mg2+ de l’eau dure, alors que les sels formés par les détergents avec ces ions sont solubles. III est fausse : en milieu acide, l’anion du savon capte H+ et devient un acide gras insoluble, le pouvoir nettoyant diminue ; le savon agit bien en milieu légèrement basique. Les affirmations correctes sont I et II.",
        "ru": "I верно: реакция жиров с сильным основанием (омыление) даёт мыло и глицерин; NaOH даёт твёрдое, KOH — жидкое мыло. II верно: мыло осаждается ионами Ca2+ и Mg2+ жёсткой воды, а соли детергентов с этими ионами растворимы. III неверно: в кислой среде анион мыла присоединяет H+ и превращается в нерастворимую жирную кислоту, моющая способность падает; мыло хорошо действует в слабощелочной среде. Верны I и II.",
        "ar": "العبارة I صحيحة: تفاعل الدهون مع قاعدة قوية (التصبن) يعطي الصابون والغليسرين؛ ويعطي NaOH صابونًا صلبًا وKOH صابونًا طريًا. العبارة II صحيحة: يترسب الصابون مع أيونات Ca2+ وMg2+ في الماء العسر، بينما تذوب الأملاح التي تكوّنها المنظفات مع هذه الأيونات. العبارة III خاطئة: في الوسط الحمضي يكتسب أنيون الصابون H+ ويتحول إلى حمض دهني لا يذوب في الماء فتقل قدرته على التنظيف؛ ويعمل الصابون جيدًا في الوسط القاعدي الضعيف. العبارتان الصحيحتان هما I وII.",
        "zh": "I 正确：油脂与强碱反应（皂化）生成肥皂和甘油；NaOH 得硬皂，KOH 得软皂。II 正确：肥皂会与硬水中的 Ca2+、Mg2+ 生成沉淀，而洗涤剂与这些离子形成的盐可溶。III 错误：在酸性介质中肥皂阴离子结合 H+ 变成不溶于水的脂肪酸，去污能力下降；肥皂在弱碱性介质中效果好。正确的是 I 和 II。",
        "ku": "I rast e: reaksiyona rûnan bi bazeke xurt re (sabûnbûn) sabûn û glîserîn dide; NaOH sabûna hişk, KOH sabûna nerm çêdike. II rast e: sabûn bi Ca2+ û Mg2+ yên ava hişk re dadikeve, lê xwêyên ku deterjan bi van îyonan re çêdikin dihelin. III şaş e: di hawîrdora asîdî de anyona sabûnê H+ distîne û dibe asîdeke rûnî ya ku di avê de nahele, hêza paqijkirinê kêm dibe; sabûn di hawîrdora hinekî bazîk de baş dixebite. Gotinên rast I û II ne."
      }
    },
    {
      "id": "u10-twin04",
      "stem": {
        "tr": "Sert su ile yapılan bir el yıkamada sabunun yeterince köpürmediği ve lavabo yüzeyinde beyaz, yapışkan bir tortu oluştuğu gözleniyor. Bu gözlemin temel nedeni aşağıdakilerden hangisidir?",
        "en": "When hands are washed with hard water, the soap does not lather well and a white, sticky deposit forms on the sink. What is the main reason for this observation?",
        "de": "Beim Händewaschen mit hartem Wasser schäumt die Seife kaum, und auf dem Waschbecken bildet sich ein weißer, klebriger Belag. Was ist die Hauptursache dieser Beobachtung?",
        "fr": "Lors d’un lavage des mains à l’eau dure, le savon mousse peu et un dépôt blanc et collant se forme sur le lavabo. Quelle est la cause principale de cette observation ?",
        "ru": "При мытье рук жёсткой водой мыло плохо пенится, а на раковине образуется белый липкий налёт. Какова основная причина этого наблюдения?",
        "ar": "عند غسل اليدين بماء عسر يُلاحظ أن الصابون لا يُرغي جيدًا وتتكون على المغسلة رواسب بيضاء لزجة. ما السبب الرئيس لهذه الملاحظة؟",
        "zh": "用硬水洗手时，肥皂不易起泡，洗手池表面形成白色黏性沉积物。产生这一现象的主要原因是什么？",
        "ku": "Dema destan bi ava hişk têne şûştin, sabûn baş kef nake û li ser lavaboyê tortekî spî û zeliqok çêdibe. Sedema bingehîn a vê dîtinê çi ye?"
      },
      "options": [
        {
          "tr": "Sert sudaki iyonların sabunun apolar kuyruğunu polar hâle getirmesi",
          "en": "The ions in hard water make the soap’s non-polar tail polar",
          "de": "Die Ionen des harten Wassers machen den unpolaren Schwanz der Seife polar",
          "fr": "Les ions de l’eau dure rendent polaire la queue apolaire du savon",
          "ru": "Ионы жёсткой воды делают неполярный хвост мыла полярным",
          "ar": "تجعل أيونات الماء العسر الذيلَ غير القطبي للصابون قطبيًا",
          "zh": "硬水中的离子使肥皂的非极性尾部变为极性",
          "ku": "Îyonên ava hişk dûvikê nepolar ê sabûnê polar dikin"
        },
        {
          "tr": "Sabunun sert suda gliserine dönüşmesi",
          "en": "The soap turns into glycerol in hard water",
          "de": "Die Seife wandelt sich in hartem Wasser in Glycerin um",
          "fr": "Le savon se transforme en glycérol dans l’eau dure",
          "ru": "Мыло превращается в жёсткой воде в глицерин",
          "ar": "يتحول الصابون في الماء العسر إلى غليسرين",
          "zh": "肥皂在硬水中转化为甘油",
          "ku": "Sabûn di ava hişk de dibe glîserîn"
        },
        {
          "tr": "Sert suyun pH değerinin çok düşük (kuvvetli asidik) olması",
          "en": "Hard water has a very low pH (strongly acidic)",
          "de": "Hartes Wasser hat einen sehr niedrigen pH-Wert (stark sauer)",
          "fr": "L’eau dure a un pH très bas (fortement acide)",
          "ru": "Жёсткая вода имеет очень низкий pH (сильнокислая)",
          "ar": "الماء العسر ذو رقم هيدروجيني منخفض جدًا (حمضي قوي)",
          "zh": "硬水的 pH 很低（强酸性）",
          "ku": "pH-ya ava hişk pir nizm e (bi xurtî asîdî)"
        },
        {
          "tr": "Sabunun Na+ iyonlarının suda çözünmeyen bir bileşik oluşturması",
          "en": "The Na+ ions of the soap form a water-insoluble compound",
          "de": "Die Na+-Ionen der Seife bilden eine wasserunlösliche Verbindung",
          "fr": "Les ions Na+ du savon forment un composé insoluble dans l’eau",
          "ru": "Ионы Na+ мыла образуют нерастворимое в воде соединение",
          "ar": "تكوّن أيونات Na+ في الصابون مركّبًا لا يذوب في الماء",
          "zh": "肥皂中的 Na+ 离子形成不溶于水的化合物",
          "ku": "Îyonên Na+ yên sabûnê pêkhateyeke ku di avê de nahele çêdikin"
        },
        {
          "tr": "Sabun anyonlarının sudaki Ca2+ ve Mg2+ iyonlarıyla suda çözünmeyen tuzlar oluşturması",
          "en": "The soap anions form water-insoluble salts with the Ca2+ and Mg2+ ions in the water",
          "de": "Die Seifenanionen bilden mit den Ca2+- und Mg2+-Ionen des Wassers wasserunlösliche Salze",
          "fr": "Les anions du savon forment avec les ions Ca2+ et Mg2+ de l’eau des sels insolubles",
          "ru": "Анионы мыла образуют с ионами Ca2+ и Mg2+ воды нерастворимые соли",
          "ar": "تكوّن أنيونات الصابون مع أيونات Ca2+ وMg2+ في الماء أملاحًا لا تذوب فيه",
          "zh": "肥皂阴离子与水中的 Ca2+、Mg2+ 离子形成不溶于水的盐",
          "ku": "Anyonên sabûnê bi îyonên Ca2+ û Mg2+ yên avê re xwêyên nehelbar çêdikin"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Suyun sertliği içindeki Ca2+ ve Mg2+ iyonlarından kaynaklanır. Sabun anyonları (örn. C17H35COO-) bu iyonlarla suda çözünmeyen kalsiyum/magnezyum tuzları oluşturur; bu tuzlar beyaz tortu olarak çöker ve sabun köpük yapamaz. Na+ iyonu suda çözünen tuzlar oluşturduğu için tortunun nedeni değildir. Sert su asidik değildir; gliserin ise sabun üretiminde yan üründür, yıkamada oluşmaz.",
        "en": "Water hardness is due to its Ca2+ and Mg2+ ions. Soap anions (e.g. C17H35COO-) form water-insoluble calcium/magnesium salts with them; these salts precipitate as a white deposit and the soap cannot lather. The Na+ ion forms soluble salts, so it is not the cause of the deposit. Hard water is not acidic, and glycerol is a by-product of soap making, not something formed during washing.",
        "de": "Die Wasserhärte beruht auf Ca2+- und Mg2+-Ionen. Seifenanionen (z. B. C17H35COO-) bilden mit ihnen wasserunlösliche Calcium-/Magnesiumsalze, die als weißer Belag ausfallen; die Seife kann nicht schäumen. Na+ bildet lösliche Salze und ist daher nicht die Ursache. Hartes Wasser ist nicht sauer, und Glycerin ist ein Nebenprodukt der Seifenherstellung, es entsteht nicht beim Waschen.",
        "fr": "La dureté de l’eau est due aux ions Ca2+ et Mg2+. Les anions du savon (p. ex. C17H35COO-) forment avec eux des sels de calcium/magnésium insolubles, qui précipitent en dépôt blanc ; le savon ne peut plus mousser. L’ion Na+ forme des sels solubles, il n’est donc pas en cause. L’eau dure n’est pas acide, et le glycérol est un sous-produit de la fabrication du savon, il ne se forme pas au lavage.",
        "ru": "Жёсткость воды обусловлена ионами Ca2+ и Mg2+. Анионы мыла (например, C17H35COO-) образуют с ними нерастворимые соли кальция/магния, которые выпадают белым налётом, и мыло не пенится. Ион Na+ даёт растворимые соли, поэтому налёт вызывает не он. Жёсткая вода не является кислой, а глицерин — побочный продукт производства мыла, а не продукт мытья.",
        "ar": "ينتج عسر الماء عن أيونات Ca2+ وMg2+ فيه. تكوّن أنيونات الصابون (مثل C17H35COO-) معها أملاح كالسيوم/مغنيسيوم لا تذوب في الماء فتترسب على شكل رواسب بيضاء ولا يستطيع الصابون أن يُرغي. أيون Na+ يكوّن أملاحًا ذائبة فليس سببًا للراسب. والماء العسر ليس حمضيًا، والغليسرين ناتج ثانوي لصناعة الصابون ولا يتكون أثناء الغسل.",
        "zh": "水的硬度来自其中的 Ca2+ 和 Mg2+。肥皂阴离子（如 C17H35COO-）与它们形成不溶于水的钙/镁盐，以白色沉淀析出，肥皂因此不能起泡。Na+ 形成的是可溶性盐，不是沉淀的原因。硬水并不呈酸性；甘油是制皂的副产物，洗涤时不会生成。",
        "ku": "Hişkiya avê ji îyonên Ca2+ û Mg2+ tê. Anyonên sabûnê (mînak C17H35COO-) bi wan re xwêyên kalsiyûm/magnezyûmê yên nehelbar çêdikin; ev xwê wek tortekî spî dadikevin û sabûn nikare kef bike. Îyona Na+ xwêyên helbar çêdike, ji ber vê yekê ne sedema tortê ye. Ava hişk ne asîdî ye; glîserîn jî berhema alî ya çêkirina sabûnê ye, di şûştinê de çênabe."
      }
    },
    {
      "id": "u10-twin05",
      "stem": {
        "tr": "Aşağıdaki polimer – kullanım alanı eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following polymer – use pairings is incorrect?",
        "de": "Welche der folgenden Zuordnungen Polymer – Verwendung ist falsch?",
        "fr": "Laquelle des associations polymère – utilisation suivantes est incorrecte ?",
        "ru": "Какое из следующих соответствий «полимер – область применения» неверно?",
        "ar": "أيّ المزاوجات الآتية (بوليمر – مجال استخدام) خاطئة؟",
        "zh": "下列聚合物与用途的配对中，哪一项是错误的？",
        "ku": "Kîjan ji van cotkirinên polîmer – qada bikaranînê şaş e?"
      },
      "options": [
        {
          "tr": "PET – araba lastiği",
          "en": "PET – car tyre",
          "de": "PET – Autoreifen",
          "fr": "PET – pneu de voiture",
          "ru": "ПЭТ – автомобильная шина",
          "ar": "PET – إطار السيارة",
          "zh": "PET – 汽车轮胎",
          "ku": "PET – tekera erebeyê"
        },
        {
          "tr": "PVC – pencere profili",
          "en": "PVC – window frame profile",
          "de": "PVC – Fensterprofil",
          "fr": "PVC – profilé de fenêtre",
          "ru": "ПВХ – оконный профиль",
          "ar": "PVC – إطارات النوافذ",
          "zh": "PVC – 窗框型材",
          "ku": "PVC – profîla pencereyê"
        },
        {
          "tr": "Polietilen (PE) – market poşeti",
          "en": "Polyethylene (PE) – shopping bag",
          "de": "Polyethylen (PE) – Einkaufstüte",
          "fr": "Polyéthylène (PE) – sac de caisse",
          "ru": "Полиэтилен (ПЭ) – пакет для покупок",
          "ar": "البولي إيثيلين (PE) – كيس التسوق",
          "zh": "聚乙烯（PE）– 购物袋",
          "ku": "Polîetîlen (PE) – kîsikê bazarê"
        },
        {
          "tr": "Kevlar – kurşun geçirmez yelek",
          "en": "Kevlar – bulletproof vest",
          "de": "Kevlar – kugelsichere Weste",
          "fr": "Kevlar – gilet pare-balles",
          "ru": "Кевлар – бронежилет",
          "ar": "الكيفلار – السترة الواقية من الرصاص",
          "zh": "凯夫拉 – 防弹衣",
          "ku": "Kevlar – êleka li dijî guleyan"
        },
        {
          "tr": "Polistiren (PS) – köpük (strafor) yalıtım ve ambalaj malzemesi",
          "en": "Polystyrene (PS) – foam insulation and packaging material",
          "de": "Polystyrol (PS) – Schaumstoff-Dämm- und Verpackungsmaterial",
          "fr": "Polystyrène (PS) – mousse isolante et matériau d’emballage",
          "ru": "Полистирол (ПС) – пенопласт для теплоизоляции и упаковки",
          "ar": "البوليستيرين (PS) – الفلين للعزل والتغليف",
          "zh": "聚苯乙烯（PS）– 泡沫保温与包装材料",
          "ku": "Polîstîren (PS) – materyala kefî ya îzolasyon û pakêtkirinê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "PET su ve meşrubat şişelerinde kullanılan, sert ve şeffaf bir termoplastiktir; esnek değildir. Araba lastiklerinde elastik yapısı nedeniyle (doğal veya sentetik) kauçuk kullanılır. Diğer eşleştirmeler doğrudur: PVC dayanıklılığı nedeniyle pencere profillerinde, PE ucuz ve esnek olduğu için poşetlerde, Kevlar çok yüksek dayanımı nedeniyle çelik yeleklerde, PS köpük hâlinde yalıtım ve ambalajda kullanılır.",
        "en": "PET is a rigid, transparent thermoplastic used for water and soft-drink bottles; it is not elastic. Car tyres use (natural or synthetic) rubber because of its elasticity. The other pairings are correct: PVC is used for window profiles because it is durable, PE for bags because it is cheap and flexible, Kevlar for bulletproof vests because of its very high strength, and PS as foam for insulation and packaging.",
        "de": "PET ist ein harter, durchsichtiger Thermoplast für Wasser- und Getränkeflaschen; er ist nicht elastisch. Für Autoreifen wird wegen seiner Elastizität (natürlicher oder synthetischer) Kautschuk verwendet. Die übrigen Zuordnungen stimmen: PVC wegen seiner Beständigkeit für Fensterprofile, PE als billiges, flexibles Material für Tüten, Kevlar wegen seiner sehr hohen Festigkeit für Schutzwesten, PS als Schaumstoff für Dämmung und Verpackung.",
        "fr": "Le PET est un thermoplastique rigide et transparent utilisé pour les bouteilles d’eau et de boissons ; il n’est pas élastique. Les pneus utilisent du caoutchouc (naturel ou synthétique) pour son élasticité. Les autres associations sont correctes : le PVC pour les profilés de fenêtre grâce à sa durabilité, le PE pour les sacs car il est bon marché et souple, le Kevlar pour les gilets pare-balles grâce à sa très grande résistance, le PS en mousse pour l’isolation et l’emballage.",
        "ru": "ПЭТ — жёсткий прозрачный термопласт для бутылок для воды и напитков; он не эластичен. Для шин используют (натуральный или синтетический) каучук благодаря его эластичности. Остальные соответствия верны: ПВХ из-за прочности — в оконных профилях, ПЭ как дешёвый и гибкий материал — в пакетах, кевлар благодаря очень высокой прочности — в бронежилетах, ПС в виде пенопласта — для изоляции и упаковки.",
        "ar": "PET لدائن حرارية صلبة وشفافة تُستخدم في زجاجات الماء والمشروبات الغازية، وهي غير مرنة. أما إطارات السيارات فيُستخدم فيها المطاط (الطبيعي أو الصناعي) لمرونته. وبقية المزاوجات صحيحة: PVC لمتانته في إطارات النوافذ، وPE لرخصه ومرونته في الأكياس، والكيفلار لمتانته الفائقة في السترات الواقية، وPS على شكل فلين في العزل والتغليف.",
        "zh": "PET 是用于饮用水和饮料瓶的硬质透明热塑性塑料，没有弹性。汽车轮胎因需要弹性而使用（天然或合成）橡胶。其余配对均正确：PVC 因耐用用于窗框型材，PE 因便宜柔韧用于购物袋，凯夫拉因强度极高用于防弹衣，PS 以泡沫形式用于保温和包装。",
        "ku": "PET termoplastîkeke hişk û zelal e ku di şûşeyên av û vexwarinan de tê bikaranîn; ne elastîk e. Di tekerên erebeyan de ji ber elastîkbûna wê lastîk (xwezayî an sentetîk) tê bikaranîn. Cotkirinên din rast in: PVC ji ber xurtbûnê di profîlên pencereyan de, PE ji ber erzan û nermbûnê di kîsikan de, Kevlar ji ber xurtiya pir bilind di êlekên parastinê de, PS jî wek kef di îzolasyon û pakêtkirinê de tê bikaranîn."
      }
    },
    {
      "id": "u10-twin06",
      "stem": {
        "tr": "Plastik ürünlerin üzerinde, üçgen içindeki sayılarla gösterilen geri dönüşüm kodları bulunur (1: PET, 2: HDPE, 3: PVC, 4: LDPE, 5: PP, 6: PS, 7: diğer). Bir su şişesinin altında 1, bir pencere doğramasında 3, bir yoğurt kabında 5 kodu bulunmaktadır. Bu ürünlerin yapıldığı polimerler sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Plastic products carry recycling codes shown as numbers inside a triangle (1: PET, 2: HDPE, 3: PVC, 4: LDPE, 5: PP, 6: PS, 7: other). A water bottle bears code 1, a window frame code 3 and a yoghurt pot code 5. In which option are the polymers of these products given correctly, in this order?",
        "de": "Kunststoffprodukte tragen Recyclingcodes als Zahlen in einem Dreieck (1: PET, 2: HDPE, 3: PVC, 4: LDPE, 5: PP, 6: PS, 7: sonstige). Eine Wasserflasche trägt den Code 1, ein Fensterrahmen den Code 3 und ein Joghurtbecher den Code 5. In welcher Antwort sind die Polymere dieser Produkte in dieser Reihenfolge richtig angegeben?",
        "fr": "Les produits en plastique portent des codes de recyclage indiqués par des chiffres dans un triangle (1 : PET, 2 : PEHD, 3 : PVC, 4 : PEBD, 5 : PP, 6 : PS, 7 : autres). Une bouteille d’eau porte le code 1, un cadre de fenêtre le code 3 et un pot de yaourt le code 5. Dans quelle proposition les polymères de ces produits sont-ils donnés correctement, dans cet ordre ?",
        "ru": "На пластиковых изделиях есть коды переработки — цифры в треугольнике (1: ПЭТ, 2: ПЭНД, 3: ПВХ, 4: ПЭВД, 5: ПП, 6: ПС, 7: прочие). На бутылке для воды стоит код 1, на оконной раме — 3, на стаканчике от йогурта — 5. В каком варианте полимеры этих изделий указаны верно и в этом порядке?",
        "ar": "تحمل المنتجات البلاستيكية رموز إعادة تدوير على شكل أرقام داخل مثلث (1: PET، 2: HDPE، 3: PVC، 4: LDPE، 5: PP، 6: PS، 7: أخرى). على زجاجة ماء الرمز 1، وعلى إطار نافذة الرمز 3، وعلى علبة لبن الرمز 5. في أيّ خيار وردت بوليمرات هذه المنتجات صحيحة وبهذا الترتيب؟",
        "zh": "塑料制品上印有三角形内数字表示的回收代码（1：PET，2：HDPE，3：PVC，4：LDPE，5：PP，6：PS，7：其他）。某水瓶底部为 1，某窗框上为 3，某酸奶杯上为 5。下列哪一项按顺序正确给出了这些产品的聚合物？",
        "ku": "Li ser hilberên plastîk kodên vezîvirandinê hene ku wek hejmarên di nav sêgoşeyekê de têne nîşandan (1: PET, 2: HDPE, 3: PVC, 4: LDPE, 5: PP, 6: PS, 7: yên din). Li binê şûşeyeke avê koda 1, li ser çarçoveya pencereyekê koda 3 û li ser kûpekî mastê koda 5 heye. Polîmerên van hilberan bi vê rêzê di kîjan bersivê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "PET, PE, PS",
          "en": "PET, PE, PS",
          "de": "PET, PE, PS",
          "fr": "PET, PE, PS",
          "ru": "ПЭТ, ПЭ, ПС",
          "ar": "PET، PE، PS",
          "zh": "PET、PE、PS",
          "ku": "PET, PE, PS"
        },
        {
          "tr": "PVC, PET, PP",
          "en": "PVC, PET, PP",
          "de": "PVC, PET, PP",
          "fr": "PVC, PET, PP",
          "ru": "ПВХ, ПЭТ, ПП",
          "ar": "PVC، PET، PP",
          "zh": "PVC、PET、PP",
          "ku": "PVC, PET, PP"
        },
        {
          "tr": "PET, PP, PVC",
          "en": "PET, PP, PVC",
          "de": "PET, PP, PVC",
          "fr": "PET, PP, PVC",
          "ru": "ПЭТ, ПП, ПВХ",
          "ar": "PET، PP، PVC",
          "zh": "PET、PP、PVC",
          "ku": "PET, PP, PVC"
        },
        {
          "tr": "PET, PVC, PP",
          "en": "PET, PVC, PP",
          "de": "PET, PVC, PP",
          "fr": "PET, PVC, PP",
          "ru": "ПЭТ, ПВХ, ПП",
          "ar": "PET، PVC، PP",
          "zh": "PET、PVC、PP",
          "ku": "PET, PVC, PP"
        },
        {
          "tr": "PE, PVC, PS",
          "en": "PE, PVC, PS",
          "de": "PE, PVC, PS",
          "fr": "PE, PVC, PS",
          "ru": "ПЭ, ПВХ, ПС",
          "ar": "PE، PVC، PS",
          "zh": "PE、PVC、PS",
          "ku": "PE, PVC, PS"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Verilen kod tablosuna göre 1 = PET (su şişesi), 3 = PVC (pencere doğraması), 5 = PP (polipropilen, yoğurt kabı) olur; doğru sıra PET, PVC, PP'dir. Kodlar sırasıyla okunmalıdır: PVC ile PP'nin yerini değiştirmek ya da 5 kodunu polistirenle (kod 6) karıştırmak tipik hatalardır. Kodlar, plastiklerin geri dönüşümde türlerine göre ayrılmasını kolaylaştırır.",
        "en": "According to the code table, 1 = PET (water bottle), 3 = PVC (window frame), 5 = PP (polypropylene, yoghurt pot); the correct order is PET, PVC, PP. The codes must be read in order: swapping PVC and PP, or confusing code 5 with polystyrene (code 6), are typical mistakes. The codes make it easier to sort plastics by type for recycling.",
        "de": "Laut Codetabelle gilt 1 = PET (Wasserflasche), 3 = PVC (Fensterrahmen), 5 = PP (Polypropylen, Joghurtbecher); die richtige Reihenfolge ist PET, PVC, PP. Typische Fehler sind das Vertauschen von PVC und PP oder die Verwechslung von Code 5 mit Polystyrol (Code 6). Die Codes erleichtern das sortenreine Trennen beim Recycling.",
        "fr": "D’après le tableau, 1 = PET (bouteille d’eau), 3 = PVC (cadre de fenêtre), 5 = PP (polypropylène, pot de yaourt) ; l’ordre correct est PET, PVC, PP. Intervertir PVC et PP ou confondre le code 5 avec le polystyrène (code 6) sont des erreurs typiques. Les codes facilitent le tri des plastiques par type pour le recyclage.",
        "ru": "По таблице кодов: 1 = ПЭТ (бутылка для воды), 3 = ПВХ (оконная рама), 5 = ПП (полипропилен, стаканчик от йогурта); верный порядок — ПЭТ, ПВХ, ПП. Типичные ошибки — перепутать ПВХ и ПП или спутать код 5 с полистиролом (код 6). Коды облегчают сортировку пластика по видам при переработке.",
        "ar": "وفق جدول الرموز: 1 = PET (زجاجة الماء)، 3 = PVC (إطار النافذة)، 5 = PP (البولي بروبيلين، علبة اللبن)، فالترتيب الصحيح هو PET، PVC، PP. ومن الأخطاء الشائعة تبديل موضعي PVC وPP أو الخلط بين الرمز 5 والبوليستيرين (الرمز 6). وتسهّل هذه الرموز فرز البلاستيك حسب نوعه عند إعادة التدوير.",
        "zh": "根据代码表：1 = PET（水瓶），3 = PVC（窗框），5 = PP（聚丙烯，酸奶杯），正确顺序为 PET、PVC、PP。把 PVC 与 PP 顺序弄反、或把代码 5 与聚苯乙烯（代码 6）混淆，都是典型错误。回收代码便于在回收时按种类分拣塑料。",
        "ku": "Li gorî tabloya kodan: 1 = PET (şûşeya avê), 3 = PVC (çarçoveya pencereyê), 5 = PP (polîpropîlen, kûpê mastê); rêza rast PET, PVC, PP ye. Guhertina cihê PVC û PP an tevlihevkirina koda 5 bi polîstîrenê (koda 6) re şaşiyên berbelav in. Kod di vezîvirandinê de veqetandina plastîkan li gorî cureyê hêsan dikin."
      }
    },
    {
      "id": "u10-twin07",
      "stem": {
        "tr": "Banyo temizliğinde çamaşır suyu ile tuz ruhunu aynı kovada karıştıran bir kişi kısa süre sonra gözlerinde yanma, öksürük ve nefes darlığı yaşıyor. Bu belirtilere yol açan, karışımdan açığa çıkan zehirli gaz aşağıdakilerden hangisidir?",
        "en": "While cleaning a bathroom, a person mixes bleach and hydrochloric acid (tuz ruhu) in the same bucket and soon suffers burning eyes, coughing and shortness of breath. Which toxic gas released from the mixture causes these symptoms?",
        "de": "Bei der Badreinigung mischt eine Person Bleichlauge und Salzsäure im selben Eimer und hat bald brennende Augen, Husten und Atemnot. Welches giftige Gas aus der Mischung verursacht diese Symptome?",
        "fr": "En nettoyant la salle de bains, une personne mélange de l’eau de Javel et de l’acide chlorhydrique dans le même seau et ressent bientôt des brûlures aux yeux, une toux et un essoufflement. Quel gaz toxique libéré par le mélange provoque ces symptômes ?",
        "ru": "Убирая ванную, человек смешал в одном ведре отбеливатель и соляную кислоту и вскоре почувствовал жжение в глазах, кашель и одышку. Какой ядовитый газ, выделившийся из смеси, вызывает эти симптомы?",
        "ar": "أثناء تنظيف الحمّام خلط شخص ماء الجافيل وحمض الهيدروكلوريك (روح الملح) في الدلو نفسه، وسرعان ما شعر بحرقة في العينين وسعال وضيق تنفس. ما الغاز السام المنبعث من الخليط والمسبب لهذه الأعراض؟",
        "zh": "某人在清洁浴室时把漂白水和盐酸混在同一个桶里，不久出现眼睛灼痛、咳嗽和呼吸困难。混合物放出的导致这些症状的有毒气体是哪一种？",
        "ku": "Kesek di paqijkirina serşokê de ava çilşoyê û asîda hîdroklorîk (tuz ruhu) di heman satilê de tevlî hev dike û piştî demeke kurt çavên wî dişewitin, dikuxe û bêhna wî teng dibe. Gaza jehrîn a ku ji tevliheviyê derdikeve û dibe sedema van nîşanan kîjan e?"
      },
      "options": [
        {
          "tr": "H2",
          "en": "H2",
          "de": "H2",
          "fr": "H2",
          "ru": "H2",
          "ar": "H2",
          "zh": "H2",
          "ku": "H2"
        },
        {
          "tr": "Cl2",
          "en": "Cl2",
          "de": "Cl2",
          "fr": "Cl2",
          "ru": "Cl2",
          "ar": "Cl2",
          "zh": "Cl2",
          "ku": "Cl2"
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
          "tr": "O2",
          "en": "O2",
          "de": "O2",
          "fr": "O2",
          "ru": "O2",
          "ar": "O2",
          "zh": "O2",
          "ku": "O2"
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
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Çamaşır suyundaki sodyum hipoklorit, tuz ruhundaki HCl ile tepkimeye girer: NaClO + 2HCl → NaCl + H2O + Cl2. Açığa çıkan sarımsı yeşil klor gazı (Cl2) göz ve solunum yollarını tahriş eder, yüksek derişimde öldürücüdür. NH3 ancak çamaşır suyu amonyaklı ürünlerle karıştırılırsa söz konusu olur; H2, O2 ve CO2 bu karışımın ürünü değildir. Bu yüzden temizlik maddeleri asla karıştırılmamalı, ortam havalandırılmalıdır.",
        "en": "The sodium hypochlorite in bleach reacts with the HCl: NaClO + 2HCl → NaCl + H2O + Cl2. The yellow-green chlorine gas (Cl2) released irritates the eyes and airways and is lethal at high concentration. NH3 would only matter if bleach were mixed with ammonia-containing products; H2, O2 and CO2 are not products of this mixture. Cleaning agents must therefore never be mixed, and the room should be ventilated.",
        "de": "Das Natriumhypochlorit der Bleichlauge reagiert mit HCl: NaClO + 2HCl → NaCl + H2O + Cl2. Das freigesetzte gelbgrüne Chlorgas (Cl2) reizt Augen und Atemwege und ist in hoher Konzentration tödlich. NH3 spielt nur beim Mischen mit ammoniakhaltigen Mitteln eine Rolle; H2, O2 und CO2 entstehen hier nicht. Reinigungsmittel daher nie mischen und gut lüften.",
        "fr": "L’hypochlorite de sodium de l’eau de Javel réagit avec HCl : NaClO + 2HCl → NaCl + H2O + Cl2. Le dichlore (Cl2), gaz jaune-vert libéré, irrite les yeux et les voies respiratoires et est mortel à forte concentration. NH3 n’interviendrait que si l’eau de Javel était mélangée à des produits ammoniaqués ; H2, O2 et CO2 ne sont pas produits ici. Il ne faut donc jamais mélanger les produits ménagers et il faut aérer.",
        "ru": "Гипохлорит натрия из отбеливателя реагирует с HCl: NaClO + 2HCl → NaCl + H2O + Cl2. Выделяющийся жёлто-зелёный хлор (Cl2) раздражает глаза и дыхательные пути, а в высокой концентрации смертелен. NH3 был бы опасен лишь при смешивании отбеливателя с аммиачными средствами; H2, O2 и CO2 здесь не образуются. Поэтому чистящие средства нельзя смешивать, а помещение нужно проветривать.",
        "ar": "يتفاعل هيبوكلوريت الصوديوم في ماء الجافيل مع HCl: NaClO + 2HCl → NaCl + H2O + Cl2. وغاز الكلور (Cl2) الأصفر المخضر المنبعث يهيّج العينين والمجاري التنفسية وهو قاتل بتراكيز عالية. أما NH3 فلا يظهر إلا عند خلط ماء الجافيل بمنتجات تحتوي على الأمونيا، وH2 وO2 وCO2 ليست من نواتج هذا الخليط. لذا يجب ألّا تُخلط مواد التنظيف أبدًا وأن يُهوّى المكان.",
        "zh": "漂白水中的次氯酸钠与 HCl 反应：NaClO + 2HCl → NaCl + H2O + Cl2。放出的黄绿色氯气（Cl2）刺激眼睛和呼吸道，高浓度时可致命。只有漂白水与含氨产品混合时才涉及 NH3；H2、O2、CO2 都不是此混合物的产物。因此清洁剂绝不能混用，并应保持通风。",
        "ku": "Hîpoklorîta sodyûmê ya di ava çilşoyê de bi HCl re reaksiyonê dike: NaClO + 2HCl → NaCl + H2O + Cl2. Gaza klorê (Cl2) ya zer-kesk a ku derdikeve çav û rêyên bêhnê aciz dike û di tîrbûna bilind de kujer e. NH3 tenê dema ava çilşoyê bi hilberên amonyakdar re were tevlîkirin derdikeve holê; H2, O2 û CO2 ne berhemên vê tevliheviyê ne. Ji ber vê yekê madeyên paqijiyê qet nayên tevlîkirin û divê cih were hewadan."
      }
    },
    {
      "id": "u10-twin08",
      "stem": {
        "tr": "Formülü C17H35COONa olan sodyum stearat ile ilgili\nI. –COO- Na+ ucu polar (hidrofil) kısımdır.\nII. C17H35– hidrokarbon kuyruğu suda iyi çözünür.\nIII. Bu bileşik sert (katı) sabun sınıfındadır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding sodium stearate, formula C17H35COONa:\nI. The –COO- Na+ end is the polar (hydrophilic) part.\nII. The C17H35– hydrocarbon tail dissolves well in water.\nIII. This compound belongs to the hard (solid) soaps.\nWhich of these statements are correct?",
        "de": "Zu Natriumstearat mit der Formel C17H35COONa:\nI. Das –COO- Na+-Ende ist der polare (hydrophile) Teil.\nII. Der C17H35–-Kohlenwasserstoffschwanz löst sich gut in Wasser.\nIII. Diese Verbindung gehört zu den harten (festen) Seifen.\nWelche Aussagen sind richtig?",
        "fr": "À propos du stéarate de sodium, de formule C17H35COONa :\nI. L’extrémité –COO- Na+ est la partie polaire (hydrophile).\nII. La queue hydrocarbonée C17H35– se dissout bien dans l’eau.\nIII. Ce composé fait partie des savons durs (solides).\nLesquelles de ces affirmations sont correctes ?",
        "ru": "О стеарате натрия с формулой C17H35COONa:\nI. Конец –COO- Na+ — полярная (гидрофильная) часть.\nII. Углеводородный хвост C17H35– хорошо растворяется в воде.\nIII. Это соединение относится к твёрдым мылам.\nКакие утверждения верны?",
        "ar": "فيما يتعلق بستيارات الصوديوم ذات الصيغة C17H35COONa:\nI. الطرف –COO- Na+ هو الجزء القطبي (المحب للماء).\nII. يذوب الذيل الهيدروكربوني C17H35– جيدًا في الماء.\nIII. ينتمي هذا المركّب إلى الصابون الصلب.\nأيّ العبارات صحيحة؟",
        "zh": "关于化学式为 C17H35COONa 的硬脂酸钠：\nI. –COO- Na+ 端是极性（亲水）部分。\nII. C17H35– 烃基尾部易溶于水。\nIII. 该化合物属于硬皂（固体皂）。\n以上说法中哪些正确？",
        "ku": "Derbarê stearata sodyûmê ya bi formula C17H35COONa de:\nI. Serê –COO- Na+ beşa polar (hîdrofîl) e.\nII. Dûvikê hîdrokarbonî yê C17H35– di avê de baş dihele.\nIII. Ev pêkhate di nav sabûnên hişk (req) de ye.\nKîjan ji van gotinan rast in?"
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
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "I doğrudur: karboksilat (–COO-) ucu iyonik/polar olduğundan su molekülleriyle etkileşir. II yanlıştır: 17 karbonlu uzun hidrokarbon zinciri apolardır, suda çözünmez; yağ ve kirle etkileşir (hidrofob). III doğrudur: yağ asitlerinin sodyum tuzları sert (beyaz, kalıp) sabunları, potasyum tuzları yumuşak sabunları oluşturur. Doğru yargılar I ve III'tür.",
        "en": "I is true: the carboxylate (–COO-) end is ionic/polar and interacts with water molecules. II is false: the long 17-carbon hydrocarbon chain is non-polar and insoluble in water; it interacts with fat and dirt (hydrophobic). III is true: sodium salts of fatty acids form hard (bar) soaps, potassium salts form soft soaps. The correct statements are I and III.",
        "de": "I ist richtig: Das Carboxylat-Ende (–COO-) ist ionisch/polar und wechselwirkt mit Wassermolekülen. II ist falsch: Die lange Kohlenwasserstoffkette mit 17 C-Atomen ist unpolar und wasserunlöslich; sie wechselwirkt mit Fett und Schmutz (hydrophob). III ist richtig: Natriumsalze von Fettsäuren bilden harte (Kern-)Seifen, Kaliumsalze weiche Seifen. Richtig sind I und III.",
        "fr": "I est vraie : l’extrémité carboxylate (–COO-) est ionique/polaire et interagit avec les molécules d’eau. II est fausse : la longue chaîne hydrocarbonée à 17 carbones est apolaire et insoluble dans l’eau ; elle interagit avec la graisse et la saleté (hydrophobe). III est vraie : les sels de sodium des acides gras forment les savons durs, les sels de potassium les savons mous. Les affirmations correctes sont I et III.",
        "ru": "I верно: карбоксилатный конец (–COO-) ионный/полярный и взаимодействует с молекулами воды. II неверно: длинная углеводородная цепь из 17 атомов углерода неполярна и нерастворима в воде; она взаимодействует с жиром и грязью (гидрофобна). III верно: натриевые соли жирных кислот образуют твёрдое мыло, калиевые — жидкое. Верны I и III.",
        "ar": "العبارة I صحيحة: طرف الكربوكسيلات (–COO-) أيوني/قطبي فيتفاعل مع جزيئات الماء. العبارة II خاطئة: السلسلة الهيدروكربونية الطويلة ذات 17 ذرة كربون غير قطبية ولا تذوب في الماء، بل تتفاعل مع الدهون والأوساخ (كارهة للماء). العبارة III صحيحة: أملاح الصوديوم للأحماض الدهنية تكوّن الصابون الصلب وأملاح البوتاسيوم تكوّن الصابون الطري. العبارتان الصحيحتان هما I وIII.",
        "zh": "I 正确：羧酸根（–COO-）端为离子性/极性，能与水分子相互作用。II 错误：含 17 个碳的长烃链为非极性，不溶于水，而与油脂和污垢相互作用（疏水）。III 正确：脂肪酸的钠盐形成硬皂，钾盐形成软皂。正确的是 I 和 III。",
        "ku": "I rast e: serê karboksîlatê (–COO-) îyonîk/polar e û bi molekulên avê re têkildar dibe. II şaş e: zincîra hîdrokarbonî ya dirêj a bi 17 karbonan nepolar e û di avê de nahele; bi rûn û qirêjê re têkildar dibe (hîdrofob). III rast e: xwêyên sodyûmê yên asîdên rûnî sabûnên hişk, xwêyên potasyûmê sabûnên nerm çêdikin. Gotinên rast I û III ne."
      }
    },
    {
      "id": "u10-twin09",
      "stem": {
        "tr": "İki zeytinyağı şişesinin etiketlerinde şu bilgiler yazmaktadır:\nX: Zeytinden yalnızca mekanik (fiziksel) yöntemlerle, hiçbir kimyasal işlem uygulanmadan elde edilmiştir; serbest yağ asitliği %0,5'tir.\nY: Rafine zeytinyağı ile natürel zeytinyağının karıştırılmasıyla elde edilmiştir.\nBuna göre X ve Y yağları sırasıyla aşağıdakilerden hangisidir?",
        "en": "The labels of two olive-oil bottles state:\nX: Obtained from olives only by mechanical (physical) methods, with no chemical treatment; free acidity 0.5%.\nY: Obtained by blending refined olive oil with virgin olive oil.\nAccordingly, what are oils X and Y, respectively?",
        "de": "Auf den Etiketten zweier Olivenölflaschen steht:\nX: Nur durch mechanische (physikalische) Verfahren ohne chemische Behandlung aus Oliven gewonnen; Gehalt an freien Fettsäuren 0,5 %.\nY: Durch Mischen von raffiniertem Olivenöl mit nativem Olivenöl hergestellt.\nWelche Öle sind X und Y demnach?",
        "fr": "Les étiquettes de deux bouteilles d’huile d’olive indiquent :\nX : obtenue à partir d’olives uniquement par des procédés mécaniques (physiques), sans aucun traitement chimique ; acidité libre de 0,5 %.\nY : obtenue en mélangeant de l’huile d’olive raffinée et de l’huile d’olive vierge.\nQue sont, respectivement, les huiles X et Y ?",
        "ru": "На этикетках двух бутылок оливкового масла написано:\nX: получено из оливок только механическими (физическими) методами без химической обработки; кислотность 0,5 %.\nY: получено смешиванием рафинированного оливкового масла с натуральным.\nКакими маслами являются X и Y соответственно?",
        "ar": "كُتب على ملصقَي زجاجتين من زيت الزيتون:\nX: استُخرج من الزيتون بالطرق الميكانيكية (الفيزيائية) فقط دون أي معالجة كيميائية؛ نسبة الحموضة الحرة 0.5%.\nY: حُضّر بخلط زيت الزيتون المكرر مع زيت الزيتون البكر.\nما الزيتان X وY على الترتيب؟",
        "zh": "两瓶橄榄油的标签上写着：\nX：仅用机械（物理）方法从橄榄中获得，未经任何化学处理；游离酸度 0.5%。\nY：由精炼橄榄油与初榨橄榄油混合而成。\n据此，X 和 Y 分别是哪种油？",
        "ku": "Li ser etîketên du şûşeyên rûnê zeytûnê ev agahî hene:\nX: Tenê bi rêbazên mekanîkî (fîzîkî), bê tu karê kîmyayî ji zeytûnê hatiye bidestxistin; asîdiya azad %0,5 e.\nY: Bi tevlîkirina rûnê zeytûnê yê rafînekirî û rûnê zeytûnê yê xwezayî hatiye bidestxistin.\nLi gorî vê, rûnên X û Y bi rêzê çi ne?"
      },
      "options": [
        {
          "tr": "Riviera, natürel sızma",
          "en": "Riviera, extra virgin",
          "de": "Riviera, nativ extra",
          "fr": "Riviera, vierge extra",
          "ru": "«Ривьера», extra virgin",
          "ar": "ريفييرا، بكر ممتاز",
          "zh": "Riviera、特级初榨",
          "ku": "Riviera, xwezayî ya herî paqij"
        },
        {
          "tr": "Rafine, riviera",
          "en": "Refined, Riviera",
          "de": "Raffiniert, Riviera",
          "fr": "Raffinée, Riviera",
          "ru": "Рафинированное, «Ривьера»",
          "ar": "مكرر، ريفييرا",
          "zh": "精炼、Riviera",
          "ku": "Rafînekirî, Riviera"
        },
        {
          "tr": "Natürel sızma, riviera",
          "en": "Extra virgin, Riviera",
          "de": "Nativ extra, Riviera",
          "fr": "Vierge extra, Riviera",
          "ru": "Extra virgin, «Ривьера»",
          "ar": "بكر ممتاز، ريفييرا",
          "zh": "特级初榨、Riviera",
          "ku": "Xwezayî ya herî paqij, Riviera"
        },
        {
          "tr": "Natürel sızma, rafine",
          "en": "Extra virgin, refined",
          "de": "Nativ extra, raffiniert",
          "fr": "Vierge extra, raffinée",
          "ru": "Extra virgin, рафинированное",
          "ar": "بكر ممتاز، مكرر",
          "zh": "特级初榨、精炼",
          "ku": "Xwezayî ya herî paqij, rafînekirî"
        },
        {
          "tr": "Riviera, rafine",
          "en": "Riviera, refined",
          "de": "Riviera, raffiniert",
          "fr": "Riviera, raffinée",
          "ru": "«Ривьера», рафинированное",
          "ar": "ريفييرا، مكرر",
          "zh": "Riviera、精炼",
          "ku": "Riviera, rafînekirî"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "X yağı yalnızca mekanik yolla, kimyasal işlem görmeden elde edilmiş ve asitliği düşüktür; bu, natürel sızma zeytinyağının tanımıdır. Y yağı rafine yağ ile natürel yağın karışımıdır; bu da riviera zeytinyağıdır. Rafine zeytinyağı tek başına kimyasal/fiziksel arıtma görmüş yağdır; içine natürel yağ katılmadığı için Y'yi tanımlamaz. Bu nedenle X natürel sızma, Y riviera zeytinyağıdır.",
        "en": "Oil X was obtained only mechanically, without chemical treatment, and has low acidity: this is the definition of extra virgin olive oil. Oil Y is a blend of refined and virgin oil: this is Riviera olive oil. Refined olive oil on its own is oil that has undergone purification and contains no added virgin oil, so it does not describe Y. Hence X is extra virgin and Y is Riviera olive oil.",
        "de": "Öl X wurde nur mechanisch, ohne chemische Behandlung gewonnen und hat eine niedrige Säure: Das ist natives Olivenöl extra. Öl Y ist eine Mischung aus raffiniertem und nativem Öl: Das ist Riviera-Olivenöl. Raffiniertes Olivenöl allein ist gereinigtes Öl ohne Zusatz von nativem Öl und beschreibt Y daher nicht. Also ist X nativ extra und Y Riviera-Olivenöl.",
        "fr": "L’huile X a été obtenue uniquement mécaniquement, sans traitement chimique, et a une faible acidité : c’est la définition de l’huile d’olive vierge extra. L’huile Y est un mélange d’huile raffinée et d’huile vierge : c’est l’huile d’olive Riviera. L’huile raffinée seule a subi une purification et ne contient pas d’huile vierge ajoutée ; elle ne décrit donc pas Y. Ainsi, X est vierge extra et Y est Riviera.",
        "ru": "Масло X получено только механически, без химической обработки, и имеет низкую кислотность — это определение оливкового масла extra virgin. Масло Y — смесь рафинированного и натурального масла, то есть масло «Ривьера». Рафинированное масло само по себе прошло очистку и не содержит добавленного натурального масла, поэтому не описывает Y. Значит, X — extra virgin, а Y — «Ривьера».",
        "ar": "الزيت X استُخرج بالطرق الميكانيكية فقط دون معالجة كيميائية وحموضته منخفضة، وهذا تعريف زيت الزيتون البكر الممتاز. والزيت Y خليط من زيت مكرر وزيت بكر، وهو زيت ريفييرا. أما زيت الزيتون المكرر وحده فهو زيت خضع للتنقية دون إضافة زيت بكر، فلا ينطبق على Y. إذن X بكر ممتاز وY ريفييرا.",
        "zh": "X 只用机械方法获得、未经化学处理且酸度低，这正是特级初榨橄榄油的定义。Y 是精炼油与初榨油的混合物，即 Riviera 橄榄油。单独的精炼橄榄油是经过精制、未掺初榨油的油，不符合 Y 的描述。因此 X 为特级初榨，Y 为 Riviera 橄榄油。",
        "ku": "Rûnê X tenê bi rêya mekanîkî, bê karê kîmyayî hatiye bidestxistin û asîdiya wê nizm e: ev pênaseya rûnê zeytûnê yê xwezayî yê herî paqij e. Rûnê Y tevliheviya rûnê rafînekirî û rûnê xwezayî ye: ev rûnê zeytûnê yê Riviera ye. Rûnê rafînekirî bi tena serê xwe hatiye paqijkirin û rûnê xwezayî lê nehatiye zêdekirin, ji ber vê yekê Y nayê ravekirin. Ango X xwezayî ya herî paqij, Y jî Riviera ye."
      }
    },
    {
      "id": "u10-twin10",
      "stem": {
        "tr": "Pastörize süt yaklaşık 72 °C'de 15–20 saniye ısıtılıp hızla soğutulur ve buzdolabında birkaç gün saklanabilir. UHT süt ise yaklaşık 135–150 °C'de 2–4 saniye ısıtılır ve açılmamış ambalajında oda sıcaklığında aylarca bozulmadan kalabilir. Bu bilgilere göre aşağıdaki yargılardan hangisi doğrudur?",
        "en": "Pasteurised milk is heated to about 72 °C for 15–20 seconds, cooled quickly and can be kept in the fridge for a few days. UHT milk is heated to about 135–150 °C for 2–4 seconds and can stay unspoiled for months at room temperature in its unopened pack. According to this information, which statement is correct?",
        "de": "Pasteurisierte Milch wird etwa 15–20 Sekunden auf etwa 72 °C erhitzt, rasch abgekühlt und hält sich im Kühlschrank einige Tage. UHT-Milch wird 2–4 Sekunden auf etwa 135–150 °C erhitzt und bleibt ungeöffnet bei Raumtemperatur monatelang haltbar. Welche Aussage ist nach diesen Angaben richtig?",
        "fr": "Le lait pasteurisé est chauffé à environ 72 °C pendant 15 à 20 secondes, refroidi rapidement et se conserve quelques jours au réfrigérateur. Le lait UHT est chauffé à environ 135–150 °C pendant 2 à 4 secondes et peut se conserver des mois à température ambiante dans son emballage fermé. D’après ces informations, quelle affirmation est correcte ?",
        "ru": "Пастеризованное молоко нагревают примерно до 72 °C на 15–20 секунд, быстро охлаждают; в холодильнике оно хранится несколько дней. Молоко UHT нагревают примерно до 135–150 °C на 2–4 секунды, и в закрытой упаковке оно месяцами не портится при комнатной температуре. Какое утверждение верно согласно этим данным?",
        "ar": "يُسخَّن الحليب المبستر إلى نحو 72 °C لمدة 15–20 ثانية ثم يُبرَّد بسرعة، ويمكن حفظه في الثلاجة بضعة أيام. أما حليب UHT فيُسخَّن إلى نحو 135–150 °C لمدة 2–4 ثوانٍ، ويبقى في عبوته المغلقة دون أن يفسد أشهرًا في درجة حرارة الغرفة. وفقًا لهذه المعلومات، أيّ العبارات الآتية صحيحة؟",
        "zh": "巴氏杀菌奶在约 72 °C 下加热 15–20 秒后迅速冷却，可在冰箱中保存几天。UHT 奶在约 135–150 °C 下加热 2–4 秒，未开封时可在室温下保存数月不变质。根据这些信息，下列哪项说法正确？",
        "ku": "Şîrê pastorîzekirî li dora 72 °C 15–20 çirkeyan tê germkirin, zû tê sarkirin û dikare çend rojan di sarincokê de bimîne. Şîrê UHT li dora 135–150 °C 2–4 çirkeyan tê germkirin û di pakêta xwe ya venekirî de di germahiya odeyê de bi mehan xera nabe. Li gorî van agahiyan kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Pastörizasyon sütteki bütün mikroorganizmaları ve sporlarını yok eder.",
          "en": "Pasteurisation destroys all microorganisms and their spores in milk.",
          "de": "Pasteurisieren vernichtet alle Mikroorganismen und ihre Sporen in der Milch.",
          "fr": "La pasteurisation détruit tous les micro-organismes et leurs spores dans le lait.",
          "ru": "Пастеризация уничтожает все микроорганизмы и их споры в молоке.",
          "ar": "تقضي البسترة على جميع الكائنات الدقيقة وأبواغها في الحليب.",
          "zh": "巴氏杀菌能杀死牛奶中所有微生物及其孢子。",
          "ku": "Pastorîzasyon hemû mîkroorganîzma û sporên wan ên di şîr de tune dike."
        },
        {
          "tr": "UHT sütün raf ömrü pastörize sütünkinden kısadır.",
          "en": "UHT milk has a shorter shelf life than pasteurised milk.",
          "de": "UHT-Milch ist kürzer haltbar als pasteurisierte Milch.",
          "fr": "Le lait UHT a une durée de conservation plus courte que le lait pasteurisé.",
          "ru": "Срок хранения молока UHT короче, чем у пастеризованного.",
          "ar": "مدة صلاحية حليب UHT أقصر من مدة صلاحية الحليب المبستر.",
          "zh": "UHT 奶的保质期比巴氏杀菌奶短。",
          "ku": "Temenê refê yê şîrê UHT ji yê şîrê pastorîzekirî kurttir e."
        },
        {
          "tr": "Pastörize süt, ambalajı açılmadığı sürece oda sıcaklığında aylarca saklanabilir.",
          "en": "Pasteurised milk can be kept for months at room temperature as long as the pack is unopened.",
          "de": "Pasteurisierte Milch ist ungeöffnet monatelang bei Raumtemperatur haltbar.",
          "fr": "Le lait pasteurisé se conserve des mois à température ambiante tant que l’emballage n’est pas ouvert.",
          "ru": "Пастеризованное молоко в закрытой упаковке хранится месяцами при комнатной температуре.",
          "ar": "يمكن حفظ الحليب المبستر أشهرًا في درجة حرارة الغرفة ما دامت عبوته مغلقة.",
          "zh": "巴氏杀菌奶只要不开封，就能在室温下保存数月。",
          "ku": "Şîrê pastorîzekirî heta pakêt venebe dikare bi mehan di germahiya odeyê de bimîne."
        },
        {
          "tr": "UHT işleminde sıcaklık daha yüksek olduğundan mikroorganizmalar sporlarıyla birlikte büyük ölçüde yok edilir.",
          "en": "Because the UHT temperature is higher, microorganisms are largely destroyed together with their spores.",
          "de": "Da die UHT-Temperatur höher ist, werden Mikroorganismen samt ihren Sporen weitgehend abgetötet.",
          "fr": "La température UHT étant plus élevée, les micro-organismes sont en grande partie détruits avec leurs spores.",
          "ru": "Поскольку температура при UHT выше, микроорганизмы в основном уничтожаются вместе со спорами.",
          "ar": "لأن درجة الحرارة في معالجة UHT أعلى، تُقضى على الكائنات الدقيقة مع أبواغها إلى حد كبير.",
          "zh": "由于 UHT 处理温度更高，微生物连同其孢子基本被消灭。",
          "ku": "Ji ber ku germahiya UHT bilindtir e, mîkroorganîzma bi sporên xwe re bi piranî tune dibin."
        },
        {
          "tr": "Her iki yöntemde de süt dondurularak korunur.",
          "en": "In both methods the milk is preserved by freezing.",
          "de": "Bei beiden Verfahren wird die Milch durch Einfrieren haltbar gemacht.",
          "fr": "Dans les deux procédés, le lait est conservé par congélation.",
          "ru": "В обоих методах молоко сохраняют замораживанием.",
          "ar": "في كلتا الطريقتين يُحفظ الحليب بالتجميد.",
          "zh": "两种方法都是通过冷冻来保存牛奶。",
          "ku": "Di her du rêbazan de jî şîr bi cemidandinê tê parastin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "UHT işlemi (sterilizasyona yakın) çok yüksek sıcaklıkta yapıldığı için mikroorganizmalar ve dayanıklı sporları büyük ölçüde yok edilir; bu yüzden aseptik ambalajda aylarca saklanabilir. Pastörizasyon daha düşük sıcaklıkta yapılır, zararlı mikroorganizmaların çoğunu öldürür ama sporların tamamını yok etmez; bu nedenle pastörize süt soğukta ve kısa süre saklanır. Verilere göre UHT sütün raf ömrü daha uzundur. İki yöntem de ısıtma işlemidir, dondurma değildir.",
        "en": "UHT treatment (close to sterilisation) is carried out at a very high temperature, so microorganisms and their resistant spores are largely destroyed; this is why the milk keeps for months in aseptic packaging. Pasteurisation uses a lower temperature, kills most harmful microorganisms but not all spores, so pasteurised milk must be kept cold and only briefly. According to the data UHT milk has the longer shelf life. Both methods are heating processes, not freezing.",
        "de": "Die UHT-Behandlung (nahe an der Sterilisation) erfolgt bei sehr hoher Temperatur, daher werden Mikroorganismen und ihre widerstandsfähigen Sporen weitgehend abgetötet; deshalb hält sich die Milch in aseptischer Verpackung monatelang. Beim Pasteurisieren ist die Temperatur niedriger; die meisten schädlichen Keime sterben, aber nicht alle Sporen, daher muss pasteurisierte Milch kühl und kurz gelagert werden. Laut den Angaben ist UHT-Milch länger haltbar. Beide Verfahren sind Erhitzungsverfahren, kein Einfrieren.",
        "fr": "Le traitement UHT (proche de la stérilisation) se fait à très haute température : les micro-organismes et leurs spores résistantes sont en grande partie détruits, d’où une conservation de plusieurs mois en emballage aseptique. La pasteurisation se fait à plus basse température : elle tue la plupart des germes nuisibles mais pas toutes les spores, le lait pasteurisé se conserve donc au froid et peu de temps. D’après les données, le lait UHT se conserve plus longtemps. Les deux procédés sont des chauffages, pas des congélations.",
        "ru": "Обработка UHT (близкая к стерилизации) проводится при очень высокой температуре, поэтому микроорганизмы и их устойчивые споры в основном уничтожаются; отсюда хранение месяцами в асептической упаковке. Пастеризация идёт при более низкой температуре: гибнет большинство вредных микробов, но не все споры, поэтому пастеризованное молоко хранят в холоде и недолго. По данным, у молока UHT срок хранения больше. Оба метода — нагревание, а не замораживание.",
        "ar": "تُجرى معالجة UHT (القريبة من التعقيم) عند درجة حرارة عالية جدًا، فتُقضى على الكائنات الدقيقة وأبواغها المقاومة إلى حد كبير، ولهذا يُحفظ الحليب أشهرًا في عبوات معقمة. أما البسترة فتتم عند درجة حرارة أقل، فتقتل معظم الكائنات الضارة دون جميع الأبواغ، لذا يُحفظ الحليب المبستر باردًا ولمدة قصيرة. ووفق المعطيات فإن صلاحية حليب UHT أطول. وكلتا الطريقتين تسخين لا تجميد.",
        "zh": "UHT 处理（接近灭菌）在很高温度下进行，微生物及其耐热孢子基本被消灭，因此在无菌包装中可保存数月。巴氏杀菌温度较低，能杀死大多数有害微生物，但不能杀灭全部孢子，所以巴氏杀菌奶需冷藏且保存期短。根据数据，UHT 奶保质期更长。两种方法都是加热，而不是冷冻。",
        "ku": "Karê UHT (nêzîkî sterîlîzasyonê) di germahiyeke pir bilind de tê kirin, ji ber vê yekê mîkroorganîzma û sporên wan ên berxwedêr bi piranî tune dibin; loma şîr di pakêta aseptîk de bi mehan dimîne. Pastorîzasyon di germahiyeke nizmtir de tê kirin; piraniya mîkroban dikuje lê hemû sporan tune nake, ji ber vê yekê şîrê pastorîzekirî divê sar û demeke kurt were hilanîn. Li gorî daneyan temenê şîrê UHT dirêjtir e. Her du rêbaz jî germkirin in, ne cemidandin."
      }
    },
    {
      "id": "u10-twin11",
      "stem": {
        "tr": "Sıvı bir bitkisel yağ, nikel (Ni) katalizörü varlığında H2 gazı ile tepkimeye sokularak yarı katı bir ürüne dönüştürülüyor. Bu işlemle ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "A liquid vegetable oil is reacted with H2 gas in the presence of a nickel (Ni) catalyst and turned into a semi-solid product. Which of the following about this process is correct?",
        "de": "Ein flüssiges Pflanzenöl wird in Gegenwart eines Nickelkatalysators (Ni) mit H2-Gas umgesetzt und in ein halbfestes Produkt umgewandelt. Was trifft auf diesen Vorgang zu?",
        "fr": "Une huile végétale liquide réagit avec du dihydrogène H2 en présence d’un catalyseur au nickel (Ni) et se transforme en un produit semi-solide. Laquelle des affirmations suivantes sur ce procédé est correcte ?",
        "ru": "Жидкое растительное масло в присутствии никелевого (Ni) катализатора обрабатывают газом H2 и превращают в полутвёрдый продукт. Что из следующего верно для этого процесса?",
        "ar": "يُفاعَل زيت نباتي سائل مع غاز H2 بوجود عامل حفاز من النيكل (Ni) فيتحول إلى منتج شبه صلب. أيّ مما يأتي صحيح بشأن هذه العملية؟",
        "zh": "在镍（Ni）催化剂存在下，使液态植物油与 H2 气体反应，转化为半固态产品。关于这一过程，下列哪项正确？",
        "ku": "Rûnekî riwekî yê şil, bi hebûna katalîzora nîkelê (Ni) bi gaza H2 re tê reaksiyonkirin û dibe hilberekê nîv-hişk. Derbarê vê pêvajoyê de kîjan rast e?"
      },
      "options": [
        {
          "tr": "Yağın doymamışlığı artar.",
          "en": "The degree of unsaturation of the oil increases.",
          "de": "Der Ungesättigtheitsgrad des Öls nimmt zu.",
          "fr": "Le degré d’insaturation de l’huile augmente.",
          "ru": "Степень ненасыщенности масла возрастает.",
          "ar": "تزداد درجة عدم التشبع في الزيت.",
          "zh": "油的不饱和程度增加。",
          "ku": "Têrnebûna rûn zêde dibe."
        },
        {
          "tr": "Yağ moleküllerindeki karbon-karbon ikili bağlarının bir kısmı veya tamamı tekli bağa dönüşür.",
          "en": "Some or all of the carbon–carbon double bonds in the oil molecules become single bonds.",
          "de": "Ein Teil oder alle Kohlenstoff-Kohlenstoff-Doppelbindungen der Ölmoleküle werden zu Einfachbindungen.",
          "fr": "Une partie ou la totalité des doubles liaisons carbone–carbone des molécules d’huile deviennent des liaisons simples.",
          "ru": "Часть или все двойные связи углерод–углерод в молекулах масла превращаются в одинарные.",
          "ar": "يتحول بعض الروابط الثنائية كربون–كربون في جزيئات الزيت أو جميعها إلى روابط أحادية.",
          "zh": "油分子中的部分或全部碳碳双键变为单键。",
          "ku": "Hin an hemû girêdanên ducar ên karbon–karbon ên di molekulên rûn de dibin girêdanên yekane."
        },
        {
          "tr": "İşlem sonucunda sabun ve gliserin oluşur.",
          "en": "Soap and glycerol are formed as a result.",
          "de": "Dabei entstehen Seife und Glycerin.",
          "fr": "Il se forme du savon et du glycérol.",
          "ru": "В результате образуются мыло и глицерин.",
          "ar": "ينتج عن العملية صابون وغليسرين.",
          "zh": "反应生成肥皂和甘油。",
          "ku": "Di encamê de sabûn û glîserîn çêdibin."
        },
        {
          "tr": "Elde edilen ürün hayvansal kaynaklı tereyağıdır.",
          "en": "The product obtained is butter of animal origin.",
          "de": "Das Produkt ist Butter tierischen Ursprungs.",
          "fr": "Le produit obtenu est du beurre d’origine animale.",
          "ru": "Полученный продукт — сливочное масло животного происхождения.",
          "ar": "المنتج الناتج زبدة حيوانية المصدر.",
          "zh": "得到的产品是动物来源的黄油。",
          "ku": "Hilbera ku tê bidestxistin rûnê nivişk ê heywanî ye."
        },
        {
          "tr": "İşlem sırasında yağ moleküllerinden hidrojen uzaklaştırılır.",
          "en": "Hydrogen is removed from the oil molecules during the process.",
          "de": "Während des Vorgangs wird den Ölmolekülen Wasserstoff entzogen.",
          "fr": "Au cours du procédé, de l’hydrogène est retiré des molécules d’huile.",
          "ru": "В ходе процесса от молекул масла отщепляется водород.",
          "ar": "يُنزع الهيدروجين من جزيئات الزيت أثناء العملية.",
          "zh": "过程中氢从油分子中被除去。",
          "ku": "Di pêvajoyê de hîdrojen ji molekulên rûn tê derxistin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Bu işlem hidrojenasyondur (margarin üretimi). H2, katalizör yardımıyla doymamış yağ moleküllerindeki C=C ikili bağlarına katılır; ikili bağlar tekli bağa dönüşür, yağ daha doymuş hâle gelir ve erime noktası yükseldiği için katılaşır. Hidrojen uzaklaştırılmaz, katılır; doymamışlık artmaz, azalır. Sabun ve gliserin, yağın NaOH/KOH ile tepkimesinde (sabunlaşma) oluşur. Ürün bitkisel kaynaklı margarindir, tereyağı değildir.",
        "en": "This process is hydrogenation (margarine production). With the catalyst, H2 adds to the C=C double bonds of the unsaturated oil molecules; the double bonds become single bonds, the oil becomes more saturated and, since its melting point rises, it solidifies. Hydrogen is added, not removed; unsaturation decreases rather than increases. Soap and glycerol form when fat reacts with NaOH/KOH (saponification). The product is plant-based margarine, not butter.",
        "de": "Dieser Vorgang ist die Hydrierung (Margarineherstellung). Mithilfe des Katalysators addiert sich H2 an die C=C-Doppelbindungen der ungesättigten Ölmoleküle; Doppel- werden zu Einfachbindungen, das Öl wird gesättigter und erstarrt, weil sein Schmelzpunkt steigt. Wasserstoff wird angelagert, nicht entzogen; die Ungesättigtheit nimmt ab. Seife und Glycerin entstehen bei der Reaktion von Fett mit NaOH/KOH (Verseifung). Das Produkt ist pflanzliche Margarine, keine Butter.",
        "fr": "Ce procédé est l’hydrogénation (fabrication de la margarine). Grâce au catalyseur, H2 s’additionne sur les doubles liaisons C=C des molécules d’huile insaturées ; elles deviennent des liaisons simples, l’huile devient plus saturée et se solidifie car son point de fusion augmente. L’hydrogène est ajouté, pas retiré ; l’insaturation diminue. Savon et glycérol se forment lors de la réaction d’une graisse avec NaOH/KOH (saponification). Le produit est de la margarine végétale, pas du beurre.",
        "ru": "Этот процесс — гидрирование (получение маргарина). С помощью катализатора H2 присоединяется по двойным связям C=C ненасыщенных молекул масла; двойные связи становятся одинарными, масло становится более насыщенным и затвердевает, так как растёт температура плавления. Водород присоединяется, а не отщепляется; ненасыщенность уменьшается. Мыло и глицерин образуются при реакции жира с NaOH/KOH (омыление). Продукт — растительный маргарин, а не сливочное масло.",
        "ar": "هذه العملية هي الهدرجة (إنتاج المارجرين). بمساعدة العامل الحفاز يُضاف H2 إلى الروابط الثنائية C=C في جزيئات الزيت غير المشبعة، فتتحول إلى روابط أحادية ويصبح الزيت أكثر تشبعًا ويتصلب لارتفاع درجة انصهاره. فالهيدروجين يُضاف ولا يُنزع، وعدم التشبع يقل ولا يزداد. أما الصابون والغليسرين فينتجان من تفاعل الدهن مع NaOH/KOH (التصبن). والمنتج مارجرين نباتي لا زبدة.",
        "zh": "该过程是氢化（制造人造黄油）。在催化剂作用下，H2 加成到不饱和油分子的 C=C 双键上，双键变为单键，油的饱和程度提高，熔点升高而变为固态。氢是被加入而不是被除去；不饱和程度降低而非增加。肥皂和甘油是油脂与 NaOH/KOH 反应（皂化）的产物。产品是植物来源的人造黄油，不是黄油。",
        "ku": "Ev pêvajo hîdrojenasyon e (çêkirina margarînê). Bi alîkariya katalîzorê H2 li girêdanên ducar ên C=C yên molekulên rûnê têrnebûyî zêde dibe; girêdanên ducar dibin yekane, rûn têrtir dibe û ji ber ku xala helandinê bilind dibe hişk dibe. Hîdrojen tê zêdekirin, nayê derxistin; têrnebûn kêm dibe. Sabûn û glîserîn di reaksiyona rûn bi NaOH/KOH re (sabûnbûn) de çêdibin. Hilber margarîna riwekî ye, ne rûnê nivişk e."
      }
    },
    {
      "id": "u10-twin12",
      "stem": {
        "tr": "İlaç formlarıyla ilgili\nI. Ampul (enjeksiyon) formu, etken maddenin kana hızla ulaşmasını sağlar.\nII. Merhem ve kremler mideden emilerek etki gösterir.\nIII. Göz damlası, tabletin sıvı hâlidir ve ağızdan alınır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding dosage forms:\nI. The ampoule (injection) form lets the active ingredient reach the blood quickly.\nII. Ointments and creams act after being absorbed from the stomach.\nIII. Eye drops are the liquid version of a tablet and are taken by mouth.\nWhich of these statements are correct?",
        "de": "Zu Darreichungsformen:\nI. Die Ampulle (Injektion) bringt den Wirkstoff schnell ins Blut.\nII. Salben und Cremes wirken nach Aufnahme über den Magen.\nIII. Augentropfen sind die flüssige Form einer Tablette und werden geschluckt.\nWelche Aussagen sind richtig?",
        "fr": "À propos des formes galéniques :\nI. La forme ampoule (injection) permet au principe actif d’atteindre rapidement le sang.\nII. Les pommades et les crèmes agissent après absorption par l’estomac.\nIII. Les gouttes oculaires sont la forme liquide d’un comprimé et se prennent par la bouche.\nLesquelles de ces affirmations sont correctes ?",
        "ru": "О лекарственных формах:\nI. Ампульная (инъекционная) форма обеспечивает быстрое поступление действующего вещества в кровь.\nII. Мази и кремы действуют после всасывания в желудке.\nIII. Глазные капли — жидкая форма таблетки, их принимают внутрь.\nКакие утверждения верны?",
        "ar": "فيما يتعلق بأشكال الأدوية:\nI. يتيح شكل الأمبولة (الحقن) وصول المادة الفعالة إلى الدم بسرعة.\nII. تؤثر المراهم والكريمات بعد امتصاصها من المعدة.\nIII. قطرة العين هي الشكل السائل للقرص وتؤخذ عن طريق الفم.\nأيّ العبارات صحيحة؟",
        "zh": "关于药物剂型：\nI. 安瓿（注射）剂型能使有效成分迅速进入血液。\nII. 软膏和乳膏经胃吸收后起作用。\nIII. 眼药水是片剂的液体形式，需要口服。\n以上说法中哪些正确？",
        "ku": "Derbarê formên dermanan de:\nI. Forma ampûlê (derzî) dihêle ku madeya çalak zû bigihîje xwînê.\nII. Melhem û krem piştî ku ji mîdeyê têne kişandin bandor dikin.\nIII. Dilopa çavan forma şil a tabletê ye û bi devê tê girtin.\nKîjan ji van gotinan rast in?"
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
      "correctIndex": 0,
      "explanation": {
        "tr": "I doğrudur: enjeksiyonla verilen ilaç sindirim sistemine uğramadan doğrudan kana ya da kas dokusuna geçtiği için hızlı etki eder. II yanlıştır: merhem ve kremler deriye sürülür, etkilerini uygulandıkları bölgede gösterir. III yanlıştır: göz damlası doğrudan göze damlatılan steril bir sıvıdır, ağızdan alınmaz. Yalnız I doğrudur; ilaçların farklı formlarda üretilmesinin nedeni etki yerine ve hızına göre uygun yolun seçilmesidir.",
        "en": "I is true: an injected drug enters the blood or muscle tissue directly, bypassing the digestive system, so it acts quickly. II is false: ointments and creams are applied to the skin and act where they are applied. III is false: eye drops are a sterile liquid dropped directly into the eye, not taken by mouth. Only I is correct; drugs come in different forms so that the right route can be chosen for the site and speed of action.",
        "de": "I ist richtig: Ein injiziertes Arzneimittel gelangt unter Umgehung des Verdauungstrakts direkt ins Blut oder Muskelgewebe und wirkt daher schnell. II ist falsch: Salben und Cremes werden auf die Haut aufgetragen und wirken am Anwendungsort. III ist falsch: Augentropfen sind eine sterile Flüssigkeit, die direkt ins Auge getropft und nicht geschluckt wird. Nur I ist richtig; die verschiedenen Formen erlauben den passenden Weg je nach Wirkort und Wirkgeschwindigkeit.",
        "fr": "I est vraie : un médicament injecté passe directement dans le sang ou le muscle sans traverser le tube digestif, il agit donc rapidement. II est fausse : pommades et crèmes s’appliquent sur la peau et agissent à l’endroit d’application. III est fausse : les gouttes oculaires sont un liquide stérile instillé directement dans l’œil, pas avalé. Seule I est correcte ; les différentes formes permettent de choisir la voie adaptée au lieu et à la rapidité d’action.",
        "ru": "I верно: введённый инъекцией препарат попадает прямо в кровь или мышцу, минуя пищеварительную систему, поэтому действует быстро. II неверно: мази и кремы наносят на кожу, и они действуют в месте нанесения. III неверно: глазные капли — стерильная жидкость, которую закапывают прямо в глаз, а не принимают внутрь. Верно только I; разные формы позволяют выбрать путь введения по месту и скорости действия.",
        "ar": "العبارة I صحيحة: الدواء المحقون يصل مباشرة إلى الدم أو النسيج العضلي دون المرور بالجهاز الهضمي فيؤثر بسرعة. العبارة II خاطئة: تُدهن المراهم والكريمات على الجلد وتؤثر في موضع وضعها. العبارة III خاطئة: قطرة العين سائل معقم يُقطَّر مباشرة في العين ولا يؤخذ بالفم. الصحيحة هي I فقط؛ وتُصنع الأدوية بأشكال مختلفة لاختيار الطريق المناسب لمكان التأثير وسرعته.",
        "zh": "I 正确：注射的药物不经消化系统，直接进入血液或肌肉组织，因此起效快。II 错误：软膏和乳膏涂在皮肤上，在涂抹部位起作用。III 错误：眼药水是直接滴入眼内的无菌液体，不能口服。只有 I 正确；药物制成不同剂型，是为了根据作用部位和速度选择合适的给药途径。",
        "ku": "I rast e: dermanê bi derziyê tê dayîn bê ku di pergala helandinê re derbas bibe rasterast dikeve xwînê an masûlkeyê, ji ber vê yekê zû bandor dike. II şaş e: melhem û krem li çerm têne sûtin û li cihê lê hatine sûtin bandor dikin. III şaş e: dilopa çavan şileyeke sterîl e ku rasterast li çav tê dilopandin, bi devê nayê girtin. Tenê I rast e; derman bi formên cuda têne çêkirin da ku li gorî cih û leza bandorê rêya guncav were hilbijartin."
      }
    },
    {
      "id": "u10-twin13",
      "stem": {
        "tr": "Evde kullanılan bazı temizlik maddeleri ve kullanım amaçları aşağıda verilmiştir:\nI. Tuz ruhu (seyreltik HCl) – lavabo ve fayanslardaki kireç (CaCO3) lekelerini çözmek.\nII. Lavabo açıcı (NaOH içeren) – yağ ve saçtan oluşan gider tıkanıklığını gidermek.\nIII. Kireç kaymağı – suyu ve yüzeyleri dezenfekte etmek, ağartmak.\nBu eşleştirmelerden hangileri doğrudur?",
        "en": "Some household cleaning agents and their uses are given:\nI. Hydrochloric acid (dilute HCl) – dissolving limescale (CaCO3) on sinks and tiles.\nII. Drain opener (containing NaOH) – clearing drain clogs made of fat and hair.\nIII. Bleaching powder – disinfecting water and surfaces, bleaching.\nWhich of these pairings are correct?",
        "de": "Einige Haushaltsreiniger und ihre Verwendung:\nI. Salzsäure (verdünnte HCl) – Kalkflecken (CaCO3) an Waschbecken und Fliesen lösen.\nII. Abflussreiniger (mit NaOH) – Verstopfungen aus Fett und Haaren beseitigen.\nIII. Chlorkalk – Wasser und Oberflächen desinfizieren, bleichen.\nWelche Zuordnungen sind richtig?",
        "fr": "Voici quelques produits d’entretien et leurs usages :\nI. Acide chlorhydrique dilué (HCl) – dissoudre le calcaire (CaCO3) des lavabos et carrelages.\nII. Déboucheur (contenant NaOH) – éliminer les bouchons de graisse et de cheveux dans les canalisations.\nIII. Chlorure de chaux – désinfecter l’eau et les surfaces, blanchir.\nLesquelles de ces associations sont correctes ?",
        "ru": "Даны некоторые бытовые чистящие средства и их назначение:\nI. Соляная кислота (разбавленная HCl) — растворение известкового налёта (CaCO3) на раковинах и плитке.\nII. Средство для прочистки труб (с NaOH) — устранение засоров из жира и волос.\nIII. Хлорная известь — дезинфекция воды и поверхностей, отбеливание.\nКакие соответствия верны?",
        "ar": "فيما يأتي بعض مواد التنظيف المنزلية واستخداماتها:\nI. روح الملح (HCl المخفف) – إذابة بقع الكلس (CaCO3) على المغاسل والبلاط.\nII. فتّاحة المجاري (تحتوي على NaOH) – إزالة انسداد المصارف الناتج عن الدهون والشعر.\nIII. مسحوق التبييض – تطهير الماء والأسطح وتبييضها.\nأيّ هذه المزاوجات صحيحة؟",
        "zh": "下面给出一些家用清洁剂及其用途：\nI. 盐酸（稀 HCl）– 溶解洗手池和瓷砖上的水垢（CaCO3）。\nII. 管道疏通剂（含 NaOH）– 清除由油脂和头发造成的下水道堵塞。\nIII. 漂白粉 – 对水和物体表面消毒、漂白。\n以上配对中哪些正确？",
        "ku": "Hin madeyên paqijiyê yên malê û armancên bikaranîna wan hatine dayîn:\nI. Tuz ruhu (HCl ya sivik) – helandina lekeyên kilsê (CaCO3) yên li ser lavabo û kaşiyan.\nII. Vekerê lavaboyê (NaOH dihewîne) – rakirina girtina boriyê ya ji rûn û porê.\nIII. Toza spîkirinê – dezenfektekirina av û rûyan, spîkirin.\nKîjan ji van cotkirinan rast in?"
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
        "tr": "I doğrudur: kireç lekesi CaCO3'tür ve asitle tepkimeye girerek çözünür (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II doğrudur: NaOH gibi kuvvetli bazlar yağları sabunlaştırır, saçtaki proteinleri parçalar; bu yüzden lavabo açıcılarda kullanılır. III doğrudur: kireç kaymağı (CaOCl2) suyla hipoklorit (ClO-) iyonu verir; ağartıcı ve dezenfektan olarak kullanılır. Üç eşleştirme de doğrudur. Bu maddeler (özellikle asitler ile hipoklorit içerenler) birbiriyle karıştırılmamalıdır.",
        "en": "I is true: limescale is CaCO3, which dissolves by reacting with acid (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II is true: strong bases such as NaOH saponify fats and break down hair proteins, which is why they are used in drain openers. III is true: bleaching powder (CaOCl2) gives the hypochlorite (ClO-) ion in water and is used as a bleach and disinfectant. All three pairings are correct. These agents (especially acids and hypochlorite products) must not be mixed.",
        "de": "I ist richtig: Kalk ist CaCO3 und löst sich durch Reaktion mit Säure (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II ist richtig: Starke Basen wie NaOH verseifen Fette und zersetzen Haarproteine; deshalb werden sie in Abflussreinigern eingesetzt. III ist richtig: Chlorkalk (CaOCl2) liefert in Wasser Hypochlorit-Ionen (ClO-) und dient als Bleich- und Desinfektionsmittel. Alle drei Zuordnungen stimmen. Diese Mittel (vor allem Säuren und Hypochloritprodukte) dürfen nicht gemischt werden.",
        "fr": "I est vraie : le calcaire est du CaCO3, qui se dissout en réagissant avec l’acide (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II est vraie : les bases fortes comme NaOH saponifient les graisses et dégradent les protéines des cheveux, d’où leur usage dans les déboucheurs. III est vraie : le chlorure de chaux (CaOCl2) libère dans l’eau l’ion hypochlorite (ClO-) et sert d’agent de blanchiment et de désinfectant. Les trois associations sont correctes. Ces produits (surtout acides et produits à l’hypochlorite) ne doivent pas être mélangés.",
        "ru": "I верно: известковый налёт — это CaCO3, он растворяется, реагируя с кислотой (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II верно: сильные основания, такие как NaOH, омыляют жиры и разрушают белки волос, поэтому их используют в средствах для прочистки труб. III верно: хлорная известь (CaOCl2) в воде даёт гипохлорит-ион (ClO-) и применяется как отбеливатель и дезинфектант. Все три соответствия верны. Эти средства (особенно кислоты и гипохлоритные) нельзя смешивать.",
        "ar": "العبارة I صحيحة: بقع الكلس هي CaCO3 وتذوب بتفاعلها مع الحمض (CaCO3 + 2HCl → CaCl2 + H2O + CO2). العبارة II صحيحة: القواعد القوية مثل NaOH تصبّن الدهون وتفكك بروتينات الشعر، لذا تُستخدم في فتّاحات المجاري. العبارة III صحيحة: يعطي مسحوق التبييض (CaOCl2) في الماء أيون الهيبوكلوريت (ClO-) ويُستخدم مبيضًا ومطهرًا. المزاوجات الثلاث صحيحة. ويجب ألّا تُخلط هذه المواد ببعضها (خاصة الأحماض والمواد المحتوية على الهيبوكلوريت).",
        "zh": "I 正确：水垢是 CaCO3，与酸反应而溶解（CaCO3 + 2HCl → CaCl2 + H2O + CO2）。II 正确：NaOH 等强碱能使油脂皂化并分解头发中的蛋白质，因此用于管道疏通剂。III 正确：漂白粉（CaOCl2）在水中产生次氯酸根离子（ClO-），用作漂白剂和消毒剂。三个配对都正确。这些清洁剂（尤其是酸与含次氯酸盐的产品）不能混用。",
        "ku": "I rast e: lekeya kilsê CaCO3 e û bi reaksiyona bi asîdê re dihele (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II rast e: bazên xurt ên wek NaOH rûnan dikin sabûn û proteînên porê perçe dikin; loma di vekerên lavaboyê de têne bikaranîn. III rast e: toza spîkirinê (CaOCl2) di avê de îyona hîpoklorîtê (ClO-) dide û wek spîker û dezenfektan tê bikaranîn. Her sê cotkirin rast in. Ev made (bi taybetî asîd û yên hîpoklorîtdar) nayên tevlîhevkirin."
      }
    },
    {
      "id": "u10-twin14",
      "stem": {
        "tr": "Bir el kreminin içerik listesinde \"metilparaben\" yer almaktadır. Bu maddenin kreme eklenmesinin temel amacı aşağıdakilerden hangisidir?",
        "en": "The ingredient list of a hand cream includes \"methylparaben\". What is the main purpose of adding this substance to the cream?",
        "de": "In der Zutatenliste einer Handcreme steht \"Methylparaben\". Was ist der Hauptzweck dieses Zusatzes?",
        "fr": "La liste des ingrédients d’une crème pour les mains comporte du « méthylparabène ». Quel est le but principal de l’ajout de cette substance ?",
        "ru": "В составе крема для рук указан «метилпарабен». Какова основная цель добавления этого вещества в крем?",
        "ar": "تتضمن قائمة مكونات كريم لليدين مادة \"ميثيل بارابين\". ما الغرض الرئيس من إضافة هذه المادة إلى الكريم؟",
        "zh": "某护手霜的成分表中有“对羟基苯甲酸甲酯”。在护手霜中加入这种物质的主要目的是什么？",
        "ku": "Di lîsteya pêkhateyên kremekî destan de \"metîlparaben\" heye. Armanca sereke ya zêdekirina vê madeyê li kremê çi ye?"
      },
      "options": [
        {
          "tr": "Kreme renk vermek",
          "en": "To give the cream colour",
          "de": "Der Creme Farbe zu geben",
          "fr": "Donner de la couleur à la crème",
          "ru": "Придать крему цвет",
          "ar": "إعطاء الكريم لونًا",
          "zh": "给护手霜着色",
          "ku": "Dayîna rengê bi kremê"
        },
        {
          "tr": "Kremin kokusunu güzelleştirmek",
          "en": "To improve the cream’s smell",
          "de": "Den Duft der Creme zu verbessern",
          "fr": "Améliorer l’odeur de la crème",
          "ru": "Улучшить запах крема",
          "ar": "تحسين رائحة الكريم",
          "zh": "改善护手霜的气味",
          "ku": "Xweşkirina bêhna kremê"
        },
        {
          "tr": "Kremin mikroorganizmalar tarafından bozulmasını geciktirmek",
          "en": "To delay spoilage of the cream by microorganisms",
          "de": "Den Verderb der Creme durch Mikroorganismen zu verzögern",
          "fr": "Retarder l’altération de la crème par les micro-organismes",
          "ru": "Замедлить порчу крема микроорганизмами",
          "ar": "تأخير فساد الكريم بفعل الكائنات الدقيقة",
          "zh": "延缓护手霜被微生物变质",
          "ku": "Derengxistina xerabûna kremê ji ber mîkroorganîzmayan"
        },
        {
          "tr": "Cilde besin (vitamin ve protein) sağlamak",
          "en": "To supply the skin with nutrients (vitamins and proteins)",
          "de": "Die Haut mit Nährstoffen (Vitaminen und Proteinen) zu versorgen",
          "fr": "Apporter des nutriments (vitamines et protéines) à la peau",
          "ru": "Снабдить кожу питательными веществами (витаминами и белками)",
          "ar": "تزويد الجلد بالمغذيات (الفيتامينات والبروتينات)",
          "zh": "为皮肤提供营养（维生素和蛋白质）",
          "ku": "Dayîna xurekan (vîtamîn û proteîn) bi çerm"
        },
        {
          "tr": "Kremin pH değerini kuvvetli asidik yapmak",
          "en": "To make the cream strongly acidic",
          "de": "Die Creme stark sauer zu machen",
          "fr": "Rendre la crème fortement acide",
          "ru": "Сделать крем сильнокислым",
          "ar": "جعل الكريم حمضيًا قويًا",
          "zh": "使护手霜呈强酸性",
          "ku": "Kremê bi xurtî asîdî kirin"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Parabenler (metil-, propilparaben vb.) kozmetiklerde koruyucu olarak kullanılır; su içeren krem ve losyonlarda bakteri ve küf üremesini engelleyerek ürünün raf ömrünü uzatır. Renk ve koku için boyar maddeler ve parfümler eklenir; parabenin besin değeri yoktur. Bazı kişilerde alerjik tepkiye yol açabildikleri ve olası sağlık etkileri tartışıldığı için kozmetiklerde kullanılabilecek paraben miktarları yasal sınırlarla belirlenmiştir.",
        "en": "Parabens (methyl-, propylparaben, etc.) are used as preservatives in cosmetics; in water-containing creams and lotions they prevent the growth of bacteria and moulds and extend shelf life. Colour and scent come from dyes and perfumes; parabens have no nutritional value. Because they can cause allergic reactions in some people and their possible health effects are debated, the amounts allowed in cosmetics are set by legal limits.",
        "de": "Parabene (Methyl-, Propylparaben usw.) dienen in Kosmetika als Konservierungsmittel; in wasserhaltigen Cremes und Lotionen verhindern sie das Wachstum von Bakterien und Schimmel und verlängern die Haltbarkeit. Farbe und Duft stammen von Farbstoffen und Parfüms; Parabene haben keinen Nährwert. Da sie bei manchen Menschen Allergien auslösen können und mögliche Gesundheitswirkungen diskutiert werden, sind die zulässigen Mengen gesetzlich begrenzt.",
        "fr": "Les parabènes (méthyl-, propylparabène, etc.) servent de conservateurs dans les cosmétiques : dans les crèmes et lotions contenant de l’eau, ils empêchent le développement des bactéries et des moisissures et prolongent la durée de conservation. La couleur et le parfum proviennent de colorants et de parfums ; les parabènes n’ont aucune valeur nutritive. Comme ils peuvent provoquer des allergies chez certaines personnes et que leurs effets possibles sur la santé sont discutés, leurs quantités autorisées sont fixées par la loi.",
        "ru": "Парабены (метил-, пропилпарабен и др.) используются в косметике как консерванты: в кремах и лосьонах, содержащих воду, они подавляют рост бактерий и плесени и продлевают срок годности. Цвет и запах дают красители и отдушки; парабены не имеют питательной ценности. Поскольку у некоторых людей они вызывают аллергию, а их возможное влияние на здоровье обсуждается, допустимое содержание в косметике ограничено законом.",
        "ar": "تُستخدم البارابينات (ميثيل بارابين، بروبيل بارابين وغيرهما) مواد حافظةً في مستحضرات التجميل؛ ففي الكريمات والغسولات المحتوية على الماء تمنع نمو البكتيريا والعفن وتطيل مدة الصلاحية. أما اللون والرائحة فمصدرهما الأصباغ والعطور، وليس للبارابين قيمة غذائية. ولأنها قد تسبب الحساسية لدى بعض الناس وتُناقَش آثارها الصحية المحتملة، حُدّدت كمياتها المسموح بها بالقانون.",
        "zh": "对羟基苯甲酸酯类（甲酯、丙酯等）在化妆品中用作防腐剂：在含水的乳霜和乳液中抑制细菌和霉菌生长，延长保质期。颜色和香味来自色素和香精；对羟基苯甲酸酯没有营养价值。由于它们可能使某些人过敏且其潜在健康影响存在争议，化妆品中的允许用量由法规限定。",
        "ku": "Paraben (metîl-, propîlparaben û hwd.) di kozmetîkê de wek parastinker têne bikaranîn; di krem û losyonên avdar de nahêlin bakterî û kufik zêde bibin û temenê hilberê dirêj dikin. Reng û bêhn ji boyax û parfûman tên; nirxa xurekî ya parabenê tune ye. Ji ber ku dikarin li hin kesan alerjiyê çêbikin û bandorên wan ên gengaz li ser tenduristiyê têne nîqaşkirin, mîqdarên destûrdayî bi qanûnê hatine diyarkirin."
      }
    },
    {
      "id": "u10-twin15",
      "stem": {
        "tr": "Etilen (CH2=CH2) monomerlerinden polietilen elde edilmesiyle ilgili\nI. Monomerlerdeki ikili bağlar açılarak monomerler birbirine kovalent bağlarla bağlanır.\nII. Oluşan polimerin mol kütlesi, monomerin mol kütlesinden çok büyüktür.\nIII. Polietilenin kimyasal ve fiziksel özellikleri etileninkiyle aynıdır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding the production of polyethylene from ethylene (CH2=CH2) monomers:\nI. The double bonds of the monomers open and the monomers are joined by covalent bonds.\nII. The molar mass of the polymer formed is much larger than that of the monomer.\nIII. The chemical and physical properties of polyethylene are the same as those of ethylene.\nWhich of these statements are correct?",
        "de": "Zur Herstellung von Polyethylen aus Ethen-Monomeren (CH2=CH2):\nI. Die Doppelbindungen der Monomere öffnen sich, und die Monomere werden durch kovalente Bindungen verknüpft.\nII. Die Molekülmasse des Polymers ist viel größer als die des Monomers.\nIII. Die chemischen und physikalischen Eigenschaften von Polyethylen sind dieselben wie die von Ethen.\nWelche Aussagen sind richtig?",
        "fr": "À propos de l’obtention du polyéthylène à partir de monomères d’éthylène (CH2=CH2) :\nI. Les doubles liaisons des monomères s’ouvrent et les monomères se lient par des liaisons covalentes.\nII. La masse molaire du polymère formé est bien plus grande que celle du monomère.\nIII. Les propriétés chimiques et physiques du polyéthylène sont les mêmes que celles de l’éthylène.\nLesquelles de ces affirmations sont correctes ?",
        "ru": "О получении полиэтилена из мономеров этилена (CH2=CH2):\nI. Двойные связи мономеров раскрываются, и мономеры соединяются ковалентными связями.\nII. Молярная масса образовавшегося полимера намного больше молярной массы мономера.\nIII. Химические и физические свойства полиэтилена такие же, как у этилена.\nКакие утверждения верны?",
        "ar": "فيما يتعلق بتحضير البولي إيثيلين من مونومرات الإيثيلين (CH2=CH2):\nI. تنفتح الروابط الثنائية في المونومرات وترتبط المونومرات ببعضها بروابط تساهمية.\nII. الكتلة المولية للبوليمر الناتج أكبر بكثير من الكتلة المولية للمونومر.\nIII. الخواص الكيميائية والفيزيائية للبولي إيثيلين مماثلة لخواص الإيثيلين.\nأيّ العبارات صحيحة؟",
        "zh": "关于由乙烯（CH2=CH2）单体制取聚乙烯：\nI. 单体中的双键打开，单体之间以共价键相连。\nII. 生成的聚合物的摩尔质量远大于单体的摩尔质量。\nIII. 聚乙烯的化学和物理性质与乙烯相同。\n以上说法中哪些正确？",
        "ku": "Derbarê bidestxistina polîetîlenê ji monomerên etîlenê (CH2=CH2) de:\nI. Girêdanên ducar ên monomeran vedibin û monomer bi girêdanên kovalent bi hev ve girêdidin.\nII. Girseya molar a polîmera çêbûyî ji ya monomerê pir mezintir e.\nIII. Taybetiyên kîmyayî û fîzîkî yên polîetîlenê wek yên etîlenê ne.\nKîjan ji van gotinan rast in?"
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
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: katılma polimerleşmesinde etilendeki ikili bağ açılır ve binlerce monomer kovalent bağlarla uç uca eklenir. II doğrudur: polimer zinciri binlerce monomer biriminden oluştuğu için mol kütlesi çok büyüktür (makromolekül). III yanlıştır: polimer monomerden farklı bir maddedir; etilen oda koşullarında gaz ve ikili bağ içerdiği için tepkimeye yatkınken polietilen katı, esnek ve kimyasal olarak daha kararlıdır. Doğru yargılar I ve II'dir.",
        "en": "I is true: in addition polymerisation the double bond of ethylene opens and thousands of monomers are joined end to end by covalent bonds. II is true: the chain consists of thousands of monomer units, so its molar mass is very large (macromolecule). III is false: the polymer is a different substance from the monomer; ethylene is a gas at room conditions and reactive because of its double bond, while polyethylene is a solid, flexible and chemically more stable. The correct statements are I and II.",
        "de": "I ist richtig: Bei der Additionspolymerisation öffnet sich die Doppelbindung des Ethens, und Tausende Monomere werden durch kovalente Bindungen aneinandergereiht. II ist richtig: Die Kette besteht aus Tausenden Monomereinheiten, daher ist die Molekülmasse sehr groß (Makromolekül). III ist falsch: Das Polymer ist ein anderer Stoff als das Monomer; Ethen ist bei Raumbedingungen ein Gas und wegen der Doppelbindung reaktiv, Polyethylen dagegen fest, flexibel und chemisch stabiler. Richtig sind I und II.",
        "fr": "I est vraie : en polymérisation par addition, la double liaison de l’éthylène s’ouvre et des milliers de monomères s’enchaînent par des liaisons covalentes. II est vraie : la chaîne comporte des milliers d’unités, sa masse molaire est donc très grande (macromolécule). III est fausse : le polymère est une substance différente du monomère ; l’éthylène est un gaz dans les conditions ambiantes et réactif à cause de sa double liaison, alors que le polyéthylène est solide, souple et chimiquement plus stable. Les affirmations correctes sont I et II.",
        "ru": "I верно: при полимеризации присоединением двойная связь этилена раскрывается, и тысячи мономеров соединяются ковалентными связями в цепь. II верно: цепь состоит из тысяч мономерных звеньев, поэтому молярная масса очень велика (макромолекула). III неверно: полимер — другое вещество; этилен при комнатных условиях газ и реакционноспособен из-за двойной связи, а полиэтилен твёрдый, гибкий и химически более устойчив. Верны I и II.",
        "ar": "العبارة I صحيحة: في البلمرة بالإضافة تنفتح الرابطة الثنائية في الإيثيلين وترتبط آلاف المونومرات طرفًا بطرف بروابط تساهمية. العبارة II صحيحة: تتكون السلسلة من آلاف الوحدات فتكون كتلتها المولية كبيرة جدًا (جزيء ضخم). العبارة III خاطئة: البوليمر مادة مختلفة عن المونومر؛ فالإيثيلين غاز في ظروف الغرفة ونشط كيميائيًا بسبب رابطته الثنائية، أما البولي إيثيلين فصلب ومرن وأكثر ثباتًا كيميائيًا. العبارتان الصحيحتان هما I وII.",
        "zh": "I 正确：加成聚合中乙烯的双键打开，成千上万个单体以共价键首尾相连。II 正确：聚合物链由成千上万个单体单元构成，因此摩尔质量非常大（高分子）。III 错误：聚合物与单体是不同的物质；乙烯在室温下是气体，因含双键而较活泼，聚乙烯则是固体，柔韧且化学性质更稳定。正确的是 I 和 II。",
        "ku": "I rast e: di polîmerîzasyona zêdekirinê de girêdana ducar a etîlenê vedibe û bi hezaran monomer bi girêdanên kovalent li pey hev girê didin. II rast e: zincîr ji bi hezaran yekeyên monomer pêk tê, ji ber vê yekê girseya molar pir mezin e (makromolekul). III şaş e: polîmer madeyeke ji monomerê cuda ye; etîlen di şertên odeyê de gaz e û ji ber girêdana ducar çalak e, lê polîetîlen req, nerm û ji aliyê kîmyayî ve aramtir e. Gotinên rast I û II ne."
      }
    },
    {
      "id": "u10-twin16",
      "stem": {
        "tr": "Hazır gıdaların seçilmesi ve saklanmasıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about choosing and storing packaged foods is incorrect?",
        "de": "Welche der folgenden Aussagen über Auswahl und Lagerung verpackter Lebensmittel ist falsch?",
        "fr": "Laquelle des affirmations suivantes sur le choix et la conservation des aliments emballés est incorrecte ?",
        "ru": "Какое из следующих утверждений о выборе и хранении упакованных продуктов неверно?",
        "ar": "أيّ العبارات الآتية حول اختيار الأغذية الجاهزة وحفظها خاطئة؟",
        "zh": "关于包装食品的选择和储存，下列说法中哪一项是错误的？",
        "ku": "Derbarê hilbijartin û hilanîna xwarinên amade de kîjan gotin şaş e?"
      },
      "options": [
        {
          "tr": "Satın almadan önce etiketteki son tüketim tarihi kontrol edilmelidir.",
          "en": "The use-by date on the label should be checked before buying.",
          "de": "Vor dem Kauf sollte das Verbrauchsdatum auf dem Etikett geprüft werden.",
          "fr": "Il faut vérifier la date limite de consommation sur l’étiquette avant l’achat.",
          "ru": "Перед покупкой нужно проверить срок годности на этикетке.",
          "ar": "يجب التحقق من تاريخ انتهاء الصلاحية على الملصق قبل الشراء.",
          "zh": "购买前应检查标签上的食用期限。",
          "ku": "Berî kirînê divê dîroka dawî ya xwarinê ya li ser etîketê were kontrolkirin."
        },
        {
          "tr": "Çözülmüş dondurulmuş gıdalar yeniden dondurulup aylarca güvenle saklanabilir.",
          "en": "Thawed frozen foods can be refrozen and safely stored for months.",
          "de": "Aufgetaute Tiefkühlkost kann wieder eingefroren und monatelang sicher gelagert werden.",
          "fr": "Les aliments surgelés décongelés peuvent être recongelés et conservés des mois en toute sécurité.",
          "ru": "Размороженные продукты можно снова заморозить и безопасно хранить месяцами.",
          "ar": "يمكن إعادة تجميد الأغذية المجمدة بعد إذابتها وحفظها بأمان أشهرًا.",
          "zh": "解冻后的冷冻食品可以重新冷冻并安全保存数月。",
          "ku": "Xwarinên cemidî yên helyayî dikarin dîsa werin cemidandin û bi mehan bi ewlehî werin hilanîn."
        },
        {
          "tr": "Kapağı şişmiş konserve, içinde mikroorganizmaların gaz üretmiş olabileceği için tüketilmemelidir.",
          "en": "A can with a bulging lid should not be eaten, because microorganisms may have produced gas inside.",
          "de": "Eine Konserve mit gewölbtem Deckel darf nicht verzehrt werden, weil Mikroorganismen darin Gas gebildet haben können.",
          "fr": "Une conserve au couvercle bombé ne doit pas être consommée, car des micro-organismes ont pu y produire du gaz.",
          "ru": "Консервы со вздутой крышкой нельзя есть, так как внутри микроорганизмы могли образовать газ.",
          "ar": "لا يجوز تناول معلَّبة انتفخ غطاؤها، لأن الكائنات الدقيقة ربما أنتجت غازًا بداخلها.",
          "zh": "盖子鼓起的罐头不应食用，因为里面的微生物可能产生了气体。",
          "ku": "Konserveya ku qapaxa wê werimî nayê xwarin, ji ber ku dibe ku mîkroorganîzmayan di hundir de gaz çêkiribe."
        },
        {
          "tr": "Etikette ürünün içeriği ve katkı maddeleri belirtilmelidir.",
          "en": "The label should list the ingredients and additives of the product.",
          "de": "Auf dem Etikett sollten Zutaten und Zusatzstoffe angegeben sein.",
          "fr": "L’étiquette doit indiquer la composition et les additifs du produit.",
          "ru": "На этикетке должны быть указаны состав и пищевые добавки.",
          "ar": "يجب أن يُذكر على الملصق مكونات المنتج والمواد المضافة إليه.",
          "zh": "标签上应标明产品的配料和添加剂。",
          "ku": "Divê li ser etîketê pêkhate û madeyên zêdekirî yên hilberê werin nivîsandin."
        },
        {
          "tr": "Gıdalar ambalajında önerilen sıcaklık ve koşullarda saklanmalıdır.",
          "en": "Foods should be stored at the temperature and conditions recommended on the package.",
          "de": "Lebensmittel sollten bei der auf der Verpackung empfohlenen Temperatur und unter den dort genannten Bedingungen gelagert werden.",
          "fr": "Les aliments doivent être conservés à la température et dans les conditions recommandées sur l’emballage.",
          "ru": "Продукты следует хранить при температуре и в условиях, указанных на упаковке.",
          "ar": "يجب حفظ الأغذية في درجة الحرارة والظروف الموصى بها على العبوة.",
          "zh": "食品应按包装上建议的温度和条件储存。",
          "ku": "Divê xwarin di germahî û şertên ku li ser pakêtê hatine pêşniyarkirin de werin hilanîn."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Dondurma mikroorganizmaları öldürmez, yalnızca çoğalmalarını durdurur. Gıda çözüldüğünde mikroorganizmalar yeniden çoğalmaya başlar; tekrar dondurmak bu mikroorganizmaları yok etmez, ayrıca gıdanın yapısını ve besin değerini bozar. Bu yüzden çözülen gıda yeniden dondurulmamalı, kısa sürede tüketilmelidir. Diğer ifadeler doğrudur: son tüketim tarihi ve içerik bilgisi kontrol edilmeli, şişmiş konserve (bakteri kaynaklı gaz olasılığı) tüketilmemeli, gıdalar önerilen koşullarda saklanmalıdır.",
        "en": "Freezing does not kill microorganisms; it only stops their growth. When the food thaws, microorganisms start multiplying again; refreezing does not destroy them and also damages the food’s texture and nutritional value. Thawed food should therefore not be refrozen but eaten soon. The other statements are correct: the use-by date and ingredient list should be checked, a bulging can (possible bacterial gas) should not be eaten, and foods should be stored under the recommended conditions.",
        "de": "Einfrieren tötet Mikroorganismen nicht, es stoppt nur ihr Wachstum. Beim Auftauen vermehren sie sich wieder; erneutes Einfrieren vernichtet sie nicht und schädigt zudem Struktur und Nährwert. Aufgetaute Lebensmittel sollten daher nicht wieder eingefroren, sondern bald verzehrt werden. Die übrigen Aussagen stimmen: Verbrauchsdatum und Zutatenliste prüfen, gewölbte Konserven (mögliches Bakteriengas) nicht verzehren, Lebensmittel unter den empfohlenen Bedingungen lagern.",
        "fr": "La congélation ne tue pas les micro-organismes, elle arrête seulement leur multiplication. À la décongélation, ils recommencent à se multiplier ; recongeler ne les détruit pas et altère en plus la texture et la valeur nutritive. Un aliment décongelé ne doit donc pas être recongelé mais consommé rapidement. Les autres affirmations sont correctes : vérifier la date limite et la composition, ne pas consommer une conserve bombée (gaz d’origine bactérienne possible), conserver les aliments dans les conditions recommandées.",
        "ru": "Замораживание не убивает микроорганизмы, а лишь останавливает их размножение. После разморозки они снова начинают размножаться; повторное замораживание их не уничтожает и к тому же ухудшает структуру и пищевую ценность продукта. Поэтому размороженный продукт нельзя замораживать снова — его надо быстро съесть. Остальные утверждения верны: проверять срок годности и состав, не есть вздутые консервы (возможен газ от бактерий), хранить продукты в рекомендованных условиях.",
        "ar": "التجميد لا يقتل الكائنات الدقيقة بل يوقف تكاثرها فقط. وعند إذابة الغذاء تبدأ بالتكاثر من جديد، وإعادة التجميد لا تقضي عليها بل تفسد بنية الغذاء وقيمته الغذائية أيضًا. لذا لا يُعاد تجميد الغذاء المذاب بل يُستهلك سريعًا. وبقية العبارات صحيحة: يجب التحقق من تاريخ الصلاحية والمكونات، وعدم تناول المعلبات المنتفخة (احتمال غاز بكتيري)، وحفظ الأغذية في الظروف الموصى بها.",
        "zh": "冷冻不能杀死微生物，只能使其停止繁殖。食品解冻后微生物会重新繁殖；再次冷冻并不能消灭它们，还会破坏食品的组织结构和营养价值。因此解冻后的食品不应再冷冻，而应尽快食用。其余说法都正确：应检查食用期限和配料，盖子鼓起的罐头（可能有细菌产气）不应食用，食品应按建议条件储存。",
        "ku": "Cemidandin mîkroorganîzmayan nakuje, tenê zêdebûna wan radiwestîne. Dema xwarin dihele, mîkroorganîzma dîsa zêde dibin; ji nû ve cemidandin wan tune nake û avahî û nirxa xurekî ya xwarinê jî xera dike. Ji ber vê yekê xwarina helyayî nayê dîsa cemidandin, divê zû were xwarin. Gotinên din rast in: dîroka dawî û pêkhate têne kontrolkirin, konserveya werimî (gengaziya gaza bakteriyan) nayê xwarin, xwarin di şertên pêşniyarkirî de têne hilanîn."
      }
    }
  ]
};

export default unit10;
