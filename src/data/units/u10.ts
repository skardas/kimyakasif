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
    "ru": "Чистящие средства, полимеры, косметика и лекарства",
    "ar": "مواد التنظيف والبوليمرات ومستحضرات التجميل والأدوية",
    "zh": "清洁剂、聚合物、化妆品和药品",
    "ku": "Madeyên Paqijkirinê, Polîmer, Kozmetîk û Derman"
  },
  "facts": [
    {
      "id": "u10-f01",
      "fact": {
        "tr": "Sert (beyaz) sabunlar yağ asitlerinin sodyum tuzlarıdır (örn. C17H35COONa, sodyum stearat); yumuşak sabunlar (arap sabunu) ise potasyum tuzlarıdır (örn. C17H35COOK, potasyum stearat).",
        "en": "Hard (white) soaps are sodium salts of fatty acids (e.g. C17H35COONa, sodium stearate); soft soaps are potassium salts (e.g. C17H35COOK, potassium stearate).",
        "de": "Harte (weiße) Seifen sind Natriumsalze von Fettsäuren (z. B. C17H35COONa, Natriumstearat); weiche Seifen (Schmierseifen) sind Kaliumsalze (z. B. C17H35COOK, Kaliumstearat).",
        "fr": "Les savons durs (blancs) sont des sels de sodium d'acides gras (ex. C17H35COONa, stéarate de sodium) ; les savons mous sont des sels de potassium (ex. C17H35COOK, stéarate de potassium).",
        "ru": "Твёрдое (белое) мыло — натриевые соли жирных кислот (например, C17H35COONa, стеарат натрия), а мягкое (жидкое) мыло — калиевые соли (например, C17H35COOK, стеарат калия).",
        "ar": "الصابون الصلب (الأبيض) هو أملاح الصوديوم للأحماض الدهنية (مثل C17H35COONa، ستيارات الصوديوم)؛ أما الصابون الطري فهو أملاح البوتاسيوم (مثل C17H35COOK، ستيارات البوتاسيوم).",
        "zh": "硬（白）肥皂是脂肪酸的钠盐(如 C17H35COONa，硬脂酸钠)；软皂是脂肪酸的钾盐(如 C17H35COOK，硬脂酸钾)。",
        "ku": "Sabûnên hişk (spî) xwêyên sodyûmê yên asîdên rûnî ne (mînak C17H35COONa, stearata sodyûmê); sabûnên nerm (sabûna erebî) jî xwêyên potasyûmê ne (mînak C17H35COOK, stearata potasyûmê)."
      },
      "trap": {
        "tr": "Arap sabununda potasyum yerine kalsiyum iyonu bulunur.",
        "en": "Arab soap contains calcium ions instead of potassium.",
        "de": "Arabische Seife enthält Calciumionen anstelle von Kalium.",
        "fr": "Le savon arabe contient des ions calcium au lieu du potassium.",
        "ru": "Мягкое (жидкое) мыло содержит вместо ионов калия ионы кальция.",
        "ar": "يحتوي الصابون الطري على أيونات الكالسيوم بدلًا من أيونات البوتاسيوم.",
        "zh": "软皂中含有的是钙离子而不是钾离子。",
        "ku": "Di sabûna erebî de li şûna potasyûmê îyonên kalsiyûmê hene."
      },
      "whyTrapIsFalse": {
        "tr": "Arap sabunu (yumuşak sabun) yağ asitlerinin potasyum tuzudur. Kalsiyumlu yağ asidi tuzları suda çözünmez; sert suda oluşan ve temizlemeyen tortu (kireç sabunu) budur.",
        "en": "Soft soap is the potassium salt of fatty acids. Calcium salts of fatty acids are insoluble in water; they are the non-cleaning scum that forms in hard water.",
        "de": "Schmierseife (weiche Seife) ist das Kaliumsalz von Fettsäuren. Calciumsalze der Fettsäuren sind wasserunlöslich; sie bilden die nicht reinigende Kalkseife in hartem Wasser.",
        "fr": "Le savon mou est le sel de potassium des acides gras. Les sels de calcium des acides gras sont insolubles dans l’eau ; c’est le dépôt non nettoyant (savon calcaire) qui se forme dans l’eau dure.",
        "ru": "Мягкое (жидкое) мыло — калиевая соль жирных кислот. Кальциевые соли жирных кислот нерастворимы в воде; именно они образуют в жёсткой воде осадок (известковое мыло), который не моет.",
        "ar": "الصابون الطري هو ملح البوتاسيوم للأحماض الدهنية. أما أملاح الكالسيوم للأحماض الدهنية فلا تذوب في الماء، وهي الراسب غير المنظِّف (صابون الكلس) الذي يتكون في الماء العسر.",
        "zh": "软皂是脂肪酸的钾盐。脂肪酸的钙盐不溶于水，它正是硬水中形成的、没有去污作用的沉淀（钙皂）。",
        "ku": "Sabûna erebî (sabûna nerm) xwêya potasyûmê ya asîdên rûnî ye. Xwêyên kalsiyûmê yên asîdên rûnî di avê de nahelin; ew niştekên ku di ava hişk de çêdibin û paqij nakin (sabûna kilsê) ev in."
      }
    },
    {
      "id": "u10-f02",
      "fact": {
        "tr": "Sabun molekülünün polar olan baş kısmı hidrofil (suyu seven), apolar uzun hidrokarbon kuyruğu hidrofobdur (suyu sevmeyen, yağı seven).",
        "en": "The polar head part of the soap molecule is hydrophilic (loving water), while the long, non-polar hydrocarbon tail is hydrophobic (loving oil, hating water).",
        "de": "Der polare Kopfteil des Seifenmoleküls ist hydrophil (liebt Wasser), während der lange, unpolare Kohlenwasserstoffschwanz hydrophob ist (liebt Öl, hasst Wasser).",
        "fr": "La partie polaire de la molécule de savon est hydrophile (aime l’eau), tandis que la longue queue d’hydrocarbure non polaire est hydrophobe (aime l’huile, déteste l’eau).",
        "ru": "Полярная головка молекулы мыла гидрофильна (притягивает воду), а длинный неполярный углеводородный хвост гидрофобен (отталкивает воду и притягивается к жирам).",
        "ar": "الرأس القطبي لجزيء الصابون محب للماء، في حين أن الذيل الهيدروكربوني الطويل غير القطبي كاره للماء (لا يحب الماء ويحب الزيت).",
        "zh": "肥皂分子的极性头部是亲水的（喜水），长的非极性烃基尾部是疏水的（憎水、亲油）。",
        "ku": "Serê polar ê molekula sabûnê hîdrofîl e (ji avê hez dike); dûvika hîdrokarbonî ya dirêj û nepolar jî hîdrofob e (ji avê hez nake, ji rûn hez dike)."
      },
      "trap": {
        "tr": "Sabunun polar baş kısmı apolar kire tutunur.",
        "en": "The polar head of the soap clings to non-polar dirt.",
        "de": "Der polare Kopf der Seife haftet an unpolarem Schmutz.",
        "fr": "La tête polaire du savon adhère à la saleté non polaire.",
        "ru": "Полярная головка мыла прикрепляется к неполярной грязи.",
        "ar": "يلتصق الرأس القطبي للصابون بالأوساخ غير القطبية.",
        "zh": "肥皂的极性头部附着在非极性污垢上。",
        "ku": "Serê polar ê sabûnê bi qirêja nepolar ve dizeliqe."
      },
      "whyTrapIsFalse": {
        "tr": "Benzer benzeri çözer: apolar kir ancak apolar hidrokarbon kuyrukla etkileşir. Polar baş ise su molekülleriyle etkileşerek kirin suya taşınmasını sağlar.",
        "en": "Like dissolves like: non-polar dirt interacts only with the non-polar hydrocarbon tail. The polar head interacts with water molecules and carries the dirt into the water.",
        "de": "Gleiches löst sich in Gleichem: unpolarer Schmutz wechselwirkt nur mit dem unpolaren Kohlenwasserstoffschwanz. Der polare Kopf wechselwirkt mit Wassermolekülen und trägt den Schmutz ins Wasser.",
        "fr": "Le semblable dissout le semblable : la saleté apolaire n’interagit qu’avec la queue hydrocarbonée apolaire. La tête polaire interagit avec les molécules d’eau et entraîne la saleté dans l’eau.",
        "ru": "Подобное растворяется в подобном: неполярная грязь взаимодействует только с неполярным углеводородным хвостом. Полярная же головка взаимодействует с молекулами воды и обеспечивает перенос грязи в воду.",
        "ar": "الشبيه يذيب الشبيه: لا تتآثر الأوساخ غير القطبية إلا مع الذيل الهيدروكربوني غير القطبي، أما الرأس القطبي فيتآثر مع جزيئات الماء فيُمكّن من نقل الأوساخ إلى الماء.",
        "zh": "相似相溶：非极性污垢只与非极性的烃基尾部相互作用；极性头部与水分子相互作用，把污垢带入水中。",
        "ku": "Wekhev wekhevê dihelîne: qirêja nepolar tenê bi dûvika hîdrokarbonî ya nepolar re dikeve têkiliyê. Serê polar jî bi molekulên avê re dikeve têkiliyê û qirêjê dibe nav avê."
      }
    },
    {
      "id": "u10-f03",
      "fact": {
        "tr": "Deterjanlar çoğunlukla petrol türevlerinden üretilir ve sert sulardaki Ca2+ ve Mg2+ iyonlarıyla çökelek oluşturmadığından sert sularda da iyi temizler.",
        "en": "Detergents are mostly made from petroleum derivatives and clean well in hard water as they do not form precipitates with the Ca2+ and Mg2+ ions in hard water.",
        "de": "Synthetische Reinigungsmittel werden überwiegend aus Erdölderivaten hergestellt und reinigen gut in hartem Wasser, da sie in hartem Wasser keine Niederschläge mit den Ca2+- und Mg2+-Ionen bilden.",
        "fr": "Les détergents sont surtout fabriqués à partir de dérivés du pétrole et nettoient bien dans l'eau dure car ils ne forment pas de précipités avec les ions Ca2+ et Mg2+ dans l'eau dure.",
        "ru": "Синтетические моющие средства производят в основном из продуктов переработки нефти; они не образуют осадка с ионами Ca2+ и Mg2+, поэтому хорошо моют и в жёсткой воде.",
        "ar": "تُصنع المنظفات الصناعية غالبًا من مشتقات البترول، وتنظف جيدًا في الماء العسر أيضًا لأنها لا تكوّن رواسب مع أيونات Ca2+ وMg2+ الموجودة فيه.",
        "zh": "洗涤剂大多由石油衍生物制得，不与硬水中的 Ca2+ 和 Mg2+ 离子形成沉淀，因此在硬水中也能很好地去污。",
        "ku": "Deterjan bi piranî ji derûvên neftê têne çêkirin; ji ber ku bi îyonên Ca2+ û Mg2+ yên ava hişk re niştek çênakin, di ava hişk de jî baş paqij dikin."
      },
      "trap": {
        "tr": "Deterjan sert suda çökelerek temizleme özelliğini kaybeder.",
        "en": "Detergent precipitates in hard water and loses its cleaning properties.",
        "de": "Reinigungsmittel setzt sich in hartem Wasser ab und verliert seine Reinigungswirkung.",
        "fr": "Le détergent précipite dans l’eau dure et perd ses propriétés nettoyantes.",
        "ru": "Синтетическое моющее средство в жёсткой воде выпадает в осадок и теряет моющую способность.",
        "ar": "يترسب المنظف الصناعي في الماء العسر ويفقد قدرته على التنظيف.",
        "zh": "洗涤剂在硬水中会沉淀而失去去污能力。",
        "ku": "Deterjan di ava hişk de dinişe û taybetmendiya xwe ya paqijkirinê winda dike."
      },
      "whyTrapIsFalse": {
        "tr": "Sert sudaki Ca2+ ve Mg2+ iyonlarıyla suda çözünmeyen tuz oluşturup çöken sabundur. Deterjanların bu iyonlarla oluşturduğu tuzlar suda çözünür; bu yüzden deterjan sert suda da köpürüp temizler.",
        "en": "It is soap that forms insoluble salts with the Ca2+ and Mg2+ ions of hard water and precipitates. The salts detergents form with these ions are soluble, so detergents still lather and clean in hard water.",
        "de": "Es ist die Seife, die mit den Ca2+- und Mg2+-Ionen des harten Wassers unlösliche Salze bildet und ausfällt. Die Salze der Detergenzien mit diesen Ionen sind löslich, daher schäumen und reinigen Detergenzien auch in hartem Wasser.",
        "fr": "C’est le savon qui forme des sels insolubles avec les ions Ca2+ et Mg2+ de l’eau dure et précipite. Les sels que forment les détergents avec ces ions sont solubles ; les détergents moussent et nettoient donc aussi en eau dure.",
        "ru": "С ионами Ca2+ и Mg2+ жёсткой воды нерастворимые соли образует и выпадает в осадок именно мыло. Соли синтетических моющих средств с этими ионами растворимы, поэтому СМС пенятся и моют и в жёсткой воде.",
        "ar": "الصابون هو الذي يكوّن مع أيونات Ca2+ وMg2+ في الماء العسر أملاحًا لا تذوب فيترسب. أما الأملاح التي تكوّنها المنظفات الصناعية مع هذه الأيونات فتذوب في الماء، لذا تُرغي المنظفات وتنظف في الماء العسر أيضًا.",
        "zh": "与硬水中的 Ca2+、Mg2+ 形成不溶性盐而沉淀的是肥皂。合成洗涤剂与这些离子形成的盐可溶于水，因此洗涤剂在硬水中也能起泡和去污。",
        "ku": "Ya ku bi îyonên Ca2+ û Mg2+ yên ava hişk re xwêyên nehelbar çêdike û dinişe sabûn e. Xwêyên ku deterjan bi van îyonan re çêdikin di avê de dihelin; ji ber vê yekê deterjan di ava hişk de jî kef dike û paqij dike."
      }
    },
    {
      "id": "u10-f04",
      "fact": {
        "tr": "Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanır; deterjanlar ise daha zor parçalandıkları için çevre ve su kirliliğine daha fazla yol açar.",
        "en": "Soaps are easily broken down by microorganisms in nature, whereas detergents degrade more slowly and therefore cause more environmental and water pollution.",
        "de": "Seifen werden in der Natur leicht von Mikroorganismen abgebaut; Detergenzien werden dagegen schwerer abgebaut und verursachen daher mehr Umwelt- und Gewässerverschmutzung.",
        "fr": "Les savons sont facilement dégradés par les micro-organismes dans la nature, tandis que les détergents se dégradent plus difficilement et causent donc davantage de pollution de l’environnement et de l’eau.",
        "ru": "Мыло в природе легко разлагается микроорганизмами, а синтетические моющие средства разлагаются труднее и поэтому сильнее загрязняют окружающую среду и воду.",
        "ar": "تحلل الكائنات الدقيقة الصابونَ في الطبيعة بسهولة، أما المنظفات فتتحلل بصعوبة أكبر ولذلك تسبب قدرًا أكبر من تلوث البيئة والمياه.",
        "zh": "肥皂在自然界中容易被微生物分解，而洗涤剂较难分解，因此造成的环境和水污染更严重。",
        "ku": "Sabûn di xwezayê de ji aliyê mîkroorganîzmayan ve bi hêsanî tê perçekirin; lê deterjan bi zehmetî perçe dibin, loma bêtir dibin sedema qirêjiya jîngehê û avê."
      },
      "trap": {
        "tr": "Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.",
        "en": "Detergents biodegrade much faster in nature than soaps.",
        "de": "Waschmittel werden in der Natur viel schneller biologisch abgebaut als Seifen.",
        "fr": "Les détergents se biodégradent beaucoup plus rapidement dans la nature que les savons.",
        "ru": "Синтетические моющие средства разлагаются в природе гораздо быстрее, чем мыло.",
        "ar": "تتحلل المنظفات الصناعية بيولوجيًا في الطبيعة أسرع بكثير من الصابون.",
        "zh": "洗涤剂在自然界中的生物降解速度比肥皂快得多。",
        "ku": "Deterjan di xwezayê de ji sabûnan pir zûtir bi rêya biyolojîk perçe dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Durum tam tersidir: sabun doğal yağlardan elde edildiği için mikroorganizmalarca kolay parçalanır. Petrol kaynaklı deterjanlar doğada daha uzun süre kalır ve köpük ile su kirliliğine yol açar.",
        "en": "It is the other way round: soap, made from natural fats, is easily broken down by microorganisms. Petroleum-based detergents persist longer in nature and cause foam and water pollution.",
        "de": "Es ist genau umgekehrt: Seife wird, da sie aus natürlichen Fetten stammt, leicht von Mikroorganismen abgebaut. Detergenzien auf Erdölbasis bleiben länger in der Natur und verursachen Schaum und Gewässerverschmutzung.",
        "fr": "C’est l’inverse : le savon, issu de graisses naturelles, est facilement dégradé par les micro-organismes. Les détergents issus du pétrole persistent plus longtemps dans la nature et provoquent mousse et pollution de l’eau.",
        "ru": "Всё наоборот: мыло получают из природных жиров, поэтому оно легко разлагается микроорганизмами. Синтетические моющие средства на нефтяной основе дольше сохраняются в природе, вызывают пенообразование и загрязнение воды.",
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
        "ru": "Полимеризация — образование гигантских молекул (макромолекул) из небольших молекул — мономеров, которые соединяются друг с другом ковалентными связями.",
        "ar": "البلمرة ارتباط جزيئات صغيرة تُسمّى المونومرات بعضها ببعض بروابط تساهمية لتكوين جزيئات ضخمة عملاقة.",
        "zh": "聚合反应是指称为单体的小分子以共价键相互连接，形成巨大的高分子。",
        "ku": "Polîmerîzasyon çêbûna makromolekulên mezin e, bi girêdana molekulên piçûk ên bi navê monomer bi girêdanên kovalent."
      },
      "trap": {
        "tr": "Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.",
        "en": "Polymers are small compounds held together only by weak van der Waals bonds.",
        "de": "Polymere sind kleine Verbindungen, die nur durch schwache Van-der-Waals-Bindungen zusammengehalten werden.",
        "fr": "Les polymères sont de petits composés maintenus ensemble uniquement par de faibles liaisons de Van der Waals.",
        "ru": "Полимеры — небольшие молекулы, удерживаемые вместе только слабыми силами Ван-дер-Ваальса.",
        "ar": "البوليمرات مركبات صغيرة لا يربطها معًا سوى روابط فان در فالس الضعيفة.",
        "zh": "聚合物是仅靠微弱的范德华力结合在一起的小分子化合物。",
        "ku": "Polîmer pêkhateyên piçûk in ku tenê bi girêdanên Van der Waals ên qels li hev têne girtin."
      },
      "whyTrapIsFalse": {
        "tr": "Polimer zincirinde monomerler birbirine güçlü kovalent bağlarla bağlıdır ve molekül kütlesi çok büyüktür. Van der Waals etkileşimleri yalnızca ayrı zincirler arasında etkilidir.",
        "en": "In a polymer chain the monomers are joined by strong covalent bonds and the molar mass is very large. Van der Waals interactions act only between separate chains.",
        "de": "In einer Polymerkette sind die Monomere durch starke kovalente Bindungen verknüpft, und die Molekülmasse ist sehr groß. Van-der-Waals-Kräfte wirken nur zwischen getrennten Ketten.",
        "fr": "Dans une chaîne de polymère, les monomères sont liés par de fortes liaisons covalentes et la masse molaire est très grande. Les interactions de van der Waals n’agissent qu’entre chaînes distinctes.",
        "ru": "В полимерной цепи мономеры соединены прочными ковалентными связями, а молярная масса полимера очень велика. Силы Ван-дер-Ваальса действуют лишь между отдельными цепями.",
        "ar": "ترتبط المونومرات في سلسلة البوليمر بروابط تساهمية قوية وتكون الكتلة المولية كبيرة جدًا، أما قوى فان در فالس فتعمل فقط بين السلاسل المنفصلة.",
        "zh": "聚合物链中单体之间以牢固的共价键相连，相对分子质量非常大；范德华力只存在于不同的链之间。",
        "ku": "Di zincîra polîmerê de monomer bi girêdanên kovalent ên xurt bi hev ve girêdayî ne û girseya molî pir mezin e. Têkiliyên Van der Waals tenê di navbera zincîrên cuda de bandor dikin."
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
        "zh": "聚乙烯(PE)用于生产塑料袋和管材，聚氯乙烯(PVC)用于门窗型材。",
        "ku": "Polîetîlen (PE) di çêkirina kîs û boriyan de, polîvînîl klorîd (PVC) jî di profîlên derî û pencereyan de tê bikaranîn."
      },
      "trap": {
        "tr": "Market poşetleri en çok Teflon (PTFE) polimerinden üretilir.",
        "en": "Shopping bags are mostly made of the polymer Teflon (PTFE).",
        "de": "Einkaufstüten werden überwiegend aus dem Polymer Teflon (PTFE) hergestellt.",
        "fr": "Les sacs de caisse sont principalement fabriqués en Téflon (PTFE).",
        "ru": "Пакеты для покупок чаще всего изготавливают из тефлона (ПТФЭ).",
        "ar": "تُصنع أكياس التسوق البلاستيكية في الغالب من بوليمر التفلون (PTFE).",
        "zh": "超市购物袋主要由聚四氟乙烯(特氟龙，PTFE)制成。",
        "ku": "Kîsikên bazarê bi piranî ji polîmera Teflon (PTFE) têne çêkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Market poşetleri ucuz ve kolay işlenen polietilenden (PE) yapılır. Teflon pahalıdır; yüksek sıcaklık dayanımı nedeniyle yapışmaz kaplamalarda kullanılır.",
        "en": "Shopping bags are made of cheap, easily processed polyethylene (PE). Teflon is expensive and is used for non-stick coatings because of its heat resistance.",
        "de": "Einkaufstüten bestehen aus billigem, leicht verarbeitbarem Polyethylen (PE). Teflon ist teuer und wird wegen seiner Hitzebeständigkeit für Antihaftbeschichtungen verwendet.",
        "fr": "Les sacs de caisse sont faits de polyéthylène (PE), bon marché et facile à mettre en forme. Le Téflon est cher et sert aux revêtements antiadhésifs grâce à sa résistance à la chaleur.",
        "ru": "Пакеты для покупок делают из дешёвого и легко обрабатываемого полиэтилена (ПЭ). Тефлон дорог; благодаря термостойкости его применяют в антипригарных покрытиях.",
        "ar": "تُصنع أكياس التسوق من البولي إيثيلين (PE) الرخيص السهل التشكيل، أما التفلون فغالي الثمن ويُستخدم في الطلاءات غير اللاصقة لمقاومته العالية للحرارة.",
        "zh": "购物袋由便宜、易加工的聚乙烯(PE)制成。特氟龙价格昂贵，因耐高温而用于不粘涂层。",
        "ku": "Kîsikên bazarê ji polîetîlena (PE) erzan a ku bi hêsanî tê teşekirin têne çêkirin. Teflon biha ye û ji ber berxwedana xwe ya li hember germê di rûpoşên nezeliqok de tê bikaranîn."
      }
    },
    {
      "id": "u10-f07",
      "fact": {
        "tr": "Politetrafloroetilen (Teflon - PTFE), yapışmaz tava ve tencere kaplamalarında yüksek ısı direnci nedeniyle kullanılır.",
        "en": "Polytetrafluoroethylene (Teflon - PTFE) is used in non-stick pan and pot coatings due to its high heat resistance.",
        "de": "Polytetrafluorethylen (Teflon – PTFE) wird aufgrund seiner hohen Hitzebeständigkeit in Antihaftbeschichtungen für Pfannen und Töpfe verwendet.",
        "fr": "Le polytétrafluoroéthylène (Téflon - PTFE) est utilisé dans les revêtements antiadhésifs des poêles et des casseroles en raison de sa haute résistance à la chaleur.",
        "ru": "Политетрафторэтилен (тефлон, ПТФЭ) благодаря высокой термостойкости применяют в антипригарных покрытиях сковород и кастрюль.",
        "ar": "يُستخدم البولي تترافلوروإيثيلين (التفلون - PTFE) في طلاء المقالي والقدور غير اللاصقة بسبب مقاومته العالية للحرارة.",
        "zh": "聚四氟乙烯(特氟龙，PTFE)耐高温，因此用于不粘平底锅和炖锅的涂层。",
        "ku": "Polîtetrafloroetîlen (Teflon - PTFE) ji ber berxwedana xwe ya bilind a li hember germê di rûpoşên nezeliqok ên tawe û beroşan de tê bikaranîn."
      },
      "trap": {
        "tr": "Teflon kolayca alev alan ve eriyen bir polimerdir.",
        "en": "Teflon is a polymer that easily catches fire and melts.",
        "de": "Teflon ist ein Polymer, das leicht Feuer fängt und schmilzt.",
        "fr": "Le téflon est un polymère qui s’enflamme et fond facilement.",
        "ru": "Тефлон — легко воспламеняющийся и легкоплавкий полимер.",
        "ar": "التفلون بوليمر سريع الاشتعال وسهل الانصهار.",
        "zh": "特氟龙是一种容易着火和熔化的聚合物。",
        "ku": "Teflon polîmerek e ku bi hêsanî agir digire û dihele."
      },
      "whyTrapIsFalse": {
        "tr": "Teflondaki C–F bağları çok sağlamdır; bu yüzden Teflon yüksek sıcaklığa dayanır, zor yanar ve kimyasallara karşı dirençlidir. Yapışmaz tavalarda kullanılmasının nedeni de budur.",
        "en": "The C–F bonds in Teflon are very strong, so Teflon withstands high temperatures, is hard to ignite and resists chemicals. That is exactly why it is used on non-stick pans.",
        "de": "Die C–F-Bindungen im Teflon sind sehr stark; daher hält Teflon hohen Temperaturen stand, brennt schwer und ist chemikalienbeständig. Genau deshalb wird es für Antihaftpfannen verwendet.",
        "fr": "Les liaisons C–F du Téflon sont très solides ; le Téflon résiste donc aux hautes températures, s’enflamme difficilement et résiste aux produits chimiques. C’est justement pour cela qu’on l’utilise sur les poêles antiadhésives.",
        "ru": "Связи C–F в тефлоне очень прочные, поэтому тефлон выдерживает высокие температуры, трудно воспламеняется и химически стоек. Именно поэтому его используют для антипригарных сковород.",
        "ar": "روابط C–F في التفلون قوية جدًا، لذلك يتحمل التفلون درجات الحرارة العالية ويصعب اشتعاله ويقاوم المواد الكيميائية، وهذا بالضبط سبب استخدامه في المقالي غير اللاصقة.",
        "zh": "特氟龙中的 C–F 键非常牢固，因此它耐高温、难燃烧、耐化学腐蚀，这正是它被用于不粘锅的原因。",
        "ku": "Girêdanên C–F yên di Teflonê de pir xurt in; ji ber vê yekê Teflon li ber germahiya bilind radiweste, bi zehmetî dişewite û li hember madeyên kîmyewî berxwedêr e. Sedema bikaranîna wê di taweyên nezeliqok de jî ev e."
      }
    },
    {
      "id": "u10-f08",
      "fact": {
        "tr": "Kevlar, kurşun geçirmez yelek, miğfer ve uçak parçalarında kullanılan hafif ve aşırı dayanıklı sentetik poliamiddir.",
        "en": "Kevlar is a lightweight and extremely durable synthetic polyamide used in bulletproof vests, helmets and aircraft parts.",
        "de": "Kevlar ist ein leichtes und extrem haltbares synthetisches Polyamid, das in kugelsicheren Westen, Helmen und Flugzeugbauteilen verwendet wird.",
        "fr": "Le Kevlar est un polyamide synthétique léger et extrêmement durable utilisé dans les gilets pare-balles, les casques et des pièces d'avion.",
        "ru": "Кевлар — лёгкий и чрезвычайно прочный синтетический полиамид; его используют в бронежилетах, шлемах и деталях самолётов.",
        "ar": "الكيفلار بولي أميد صناعي خفيف ومتين للغاية، يُستخدم في السترات الواقية من الرصاص والخوذ وأجزاء الطائرات.",
        "zh": "凯夫拉是一种轻质、极其坚固的合成聚酰胺，用于防弹背心、头盔和飞机部件。",
        "ku": "Kevlar polîamîdeke sentetîk a sivik û pir xurt e ku di êlekên dijgule, kask û parçeyên balafiran de tê bikaranîn."
      },
      "trap": {
        "tr": "Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.",
        "en": "Kevlar is used in the production of disposable plastic cups.",
        "de": "Kevlar wird bei der Herstellung von Einweg-Plastikbechern verwendet.",
        "fr": "Le Kevlar est utilisé dans la production de gobelets en plastique jetables.",
        "ru": "Кевлар используют для производства одноразовых пластиковых стаканчиков.",
        "ar": "يُستخدم الكيفلار في إنتاج الأكواب البلاستيكية أحادية الاستعمال.",
        "zh": "凯夫拉用于生产一次性塑料杯。",
        "ku": "Kevlar di çêkirina piyalên plastîk ên yekcarî de tê bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "Kevlar çok dayanıklı ve pahalı bir yüksek performans polimeridir; çelik yelek, kask gibi koruyucu malzemelerde kullanılır. Tek kullanımlık bardaklar ucuz polimerlerden (örn. polistiren, polipropilen) yapılır.",
        "en": "Kevlar is a very strong and expensive high-performance polymer used in protective gear such as body armour and helmets. Disposable cups are made of cheap polymers (e.g. polystyrene, polypropylene).",
        "de": "Kevlar ist ein sehr festes und teures Hochleistungspolymer für Schutzausrüstung wie Schutzwesten und Helme. Einwegbecher bestehen aus billigen Polymeren (z. B. Polystyrol, Polypropylen).",
        "fr": "Le Kevlar est un polymère haute performance très résistant et coûteux, utilisé dans les équipements de protection (gilets pare-balles, casques). Les gobelets jetables sont faits de polymères bon marché (p. ex. polystyrène, polypropylène).",
        "ru": "Кевлар — очень прочный и дорогой полимер с высокими эксплуатационными характеристиками; из него делают защитное снаряжение (бронежилеты, шлемы). Одноразовые стаканчики делают из дешёвых полимеров (например, полистирола, полипропилена).",
        "ar": "الكيفلار بوليمر عالي الأداء شديد المتانة وغالي الثمن يُستخدم في معدات الحماية كالسترات الواقية والخوذ، أما الأكواب أحادية الاستعمال فتُصنع من بوليمرات رخيصة (مثل البوليستيرين والبولي بروبيلين).",
        "zh": "凯夫拉是一种非常坚固且昂贵的高性能聚合物，用于防弹衣、头盔等防护装备；一次性杯子由廉价聚合物（如聚苯乙烯、聚丙烯）制成。",
        "ku": "Kevlar polîmereke bi performansa bilind, pir xurt û biha ye; di amûrên parastinê yên wek êlekên dijgule û kaskan de tê bikaranîn. Piyalên yekcarî ji polîmerên erzan (wek polîstîren, polîpropîlen) têne çêkirin."
      }
    },
    {
      "id": "u10-f09",
      "fact": {
        "tr": "Kauçuk doğal (kauçuk ağacından) veya sentetik olarak üretilir ve elastikiyeti sayesinde araba lastiklerinde kullanılır.",
        "en": "Rubber is produced naturally (from the rubber tree) or synthetically and is used in car tires thanks to its elasticity.",
        "de": "Kautschuk wird auf natürliche Weise (aus dem Kautschukbaum) oder synthetisch hergestellt und wird aufgrund seiner Elastizität in Autoreifen verwendet.",
        "fr": "Le caoutchouc est produit naturellement (à partir de l'hévéa) ou synthétiquement et est utilisé dans les pneus de voiture grâce à son élasticité.",
        "ru": "Каучук бывает натуральным (из сока каучукового дерева) и синтетическим; благодаря эластичности его используют в производстве автомобильных шин.",
        "ar": "يُنتَج المطاط طبيعيًا (من شجرة المطاط) أو صناعيًا، ويُستخدم في إطارات السيارات بفضل مرونته.",
        "zh": "橡胶可以是天然的（取自橡胶树）或合成的，因具有弹性而用于汽车轮胎。",
        "ku": "Kauçûk bi awayekî xwezayî (ji dara kauçûkê) an jî sentetîk tê hilberandin û bi saya elastîkbûna xwe di tekerên otomobîlan de tê bikaranîn."
      },
      "trap": {
        "tr": "Kauçuk sert kırılgan kristal bir maddedir.",
        "en": "Rubber is a hard brittle crystalline substance.",
        "de": "Gummi ist eine harte, spröde kristalline Substanz.",
        "fr": "Le caoutchouc est une substance cristalline dure et cassante.",
        "ru": "Каучук — твёрдое хрупкое кристаллическое вещество.",
        "ar": "المطاط مادة بلورية صلبة وهشة.",
        "zh": "橡胶是一种坚硬易碎的晶体物质。",
        "ku": "Kauçûk madeyeke krîstalî ya hişk û şikestbar e."
      },
      "whyTrapIsFalse": {
        "tr": "Kauçuk uzun ve düzensiz polimer zincirlerinden oluşan esnek (elastik) bir maddedir; çekilince uzar, bırakılınca eski hâline döner. Bu özelliği nedeniyle lastik yapımında kullanılır.",
        "en": "Rubber is an elastic material made of long, disordered polymer chains; it stretches when pulled and returns to its shape when released. That property is why it is used for tyres.",
        "de": "Kautschuk ist ein elastischer Stoff aus langen, ungeordneten Polymerketten; er dehnt sich beim Ziehen und kehrt beim Loslassen in seine Form zurück. Deshalb wird er für Reifen verwendet.",
        "fr": "Le caoutchouc est un matériau élastique formé de longues chaînes polymères désordonnées ; il s’allonge quand on le tire et reprend sa forme quand on le relâche. C’est pour cela qu’on l’utilise pour les pneus.",
        "ru": "Каучук — эластичный материал из длинных неупорядоченных полимерных цепей: при растяжении он удлиняется, а после снятия нагрузки восстанавливает форму. Поэтому его используют для изготовления шин.",
        "ar": "المطاط مادة مرنة تتكون من سلاسل بوليمرية طويلة وغير منتظمة؛ تستطيل عند الشد وتعود إلى شكلها عند الترك، ولهذا تُستخدم في صناعة الإطارات.",
        "zh": "橡胶是由长而无序的聚合物链构成的弹性材料，拉伸时伸长、松开后恢复原状，因此用于制造轮胎。",
        "ku": "Kauçûk madeyeke nerm û elastîk e ku ji zincîrên polîmer ên dirêj û bêrêz pêk tê; dema tê kişandin dirêj dibe, dema tê berdan vedigere şiklê xwe. Ji ber vê taybetmendiyê di çêkirina tekeran de tê bikaranîn."
      }
    },
    {
      "id": "u10-f10",
      "fact": {
        "tr": "PET (Polietilen tereftalat) su şişeleri ve meşrubat kaplarında kullanılan geri dönüştürülebilir polimerdir.",
        "en": "PET (Polyethylene terephthalate) is a recyclable polymer used in water bottles and beverage containers.",
        "de": "PET (Polyethylenterephthalat) ist ein recycelbares Polymer, das in Wasserflaschen und Getränkebehältern verwendet wird.",
        "fr": "Le PET (polyéthylène téréphtalate) est un polymère recyclable utilisé dans les bouteilles d'eau et les contenants de boissons.",
        "ru": "ПЭТ (полиэтилентерефталат) — полимер, пригодный для вторичной переработки; из него делают бутылки для воды и ёмкости для напитков.",
        "ar": "البولي إيثيلين تيريفثاليت (PET) بوليمر قابل لإعادة التدوير يُستخدم في قوارير المياه وعبوات المشروبات.",
        "zh": "PET(聚对苯二甲酸乙二醇酯)是一种可回收利用的聚合物，用于饮用水瓶和饮料容器。",
        "ku": "PET (polîetîlen tereftalat) polîmereke vezîvirbar e ku di şûşeyên avê û firaxên vexwarinan de tê bikaranîn."
      },
      "trap": {
        "tr": "PET ambalajlar geri dönüştürülemez.",
        "en": "PET packaging cannot be recycled.",
        "de": "PET-Verpackungen können nicht recycelt werden.",
        "fr": "Les emballages PET ne peuvent pas être recyclés.",
        "ru": "ПЭТ-упаковка не подлежит вторичной переработке.",
        "ar": "لا يمكن إعادة تدوير عبوات PET.",
        "zh": "PET 包装不能回收。",
        "ku": "Ambalajên PET nayên vezîvirandin."
      },
      "whyTrapIsFalse": {
        "tr": "PET bir termoplastiktir; eritilip yeniden şekillendirilebilir. Geri dönüşüm kodu 1 olan PET şişeler toplanıp tekstil lifine ve yeni ambalajlara dönüştürülür.",
        "en": "PET is a thermoplastic: it can be melted and reshaped. PET bottles, recycling code 1, are collected and turned into textile fibres and new packaging.",
        "de": "PET ist ein Thermoplast: Es lässt sich schmelzen und neu formen. PET-Flaschen mit dem Recyclingcode 1 werden gesammelt und zu Textilfasern und neuen Verpackungen verarbeitet.",
        "fr": "Le PET est un thermoplastique : il peut être fondu et remis en forme. Les bouteilles en PET, code de recyclage 1, sont collectées et transformées en fibres textiles et en nouveaux emballages.",
        "ru": "ПЭТ — термопласт: его можно расплавить и снова сформовать. ПЭТ-бутылки с кодом переработки 1 собирают и превращают в текстильное волокно и новую упаковку.",
        "ar": "PET من اللدائن الحرارية، يمكن صهره وإعادة تشكيله، وتُجمع قوارير PET ذات رمز إعادة التدوير 1 لتتحول إلى ألياف نسيجية وعبوات جديدة.",
        "zh": "PET 是热塑性塑料，可以熔化后重新成型。回收代码为 1 的 PET 瓶被收集后制成纺织纤维和新的包装。",
        "ku": "PET termoplastîk e: dikare were helandin û ji nû ve were teşekirin. Şûşeyên PET ên bi koda vezîvirandinê 1 têne berhevkirin û vediguherin têlên tekstîlê û ambalajên nû."
      }
    },
    {
      "id": "u10-f11",
      "fact": {
        "tr": "Misel yapısında sabunun hidrofob kuyrukları apolar kir taneciğini sarar, hidrofil başları su ile etkileşerek kiri yüzeyden söker.",
        "en": "In the micelle structure, the hydrophobic tails of the soap surround the nonpolar dirt particle, and the hydrophilic heads interact with water and remove the dirt from the surface.",
        "de": "In der Mizellenstruktur umgeben die hydrophoben Schwänze der Seife die unpolaren Schmutzpartikel, und die hydrophilen Köpfe interagieren mit Wasser und entfernen den Schmutz von der Oberfläche.",
        "fr": "Dans la structure micelle, les queues hydrophobes du savon entourent la particule de saleté non polaire, et les têtes hydrophiles interagissent avec l'eau et éliminent la saleté de la surface.",
        "ru": "В мицелле гидрофобные хвосты мыла окружают неполярную частицу грязи, а гидрофильные головки взаимодействуют с водой и отрывают грязь от поверхности.",
        "ar": "في بنية المذيلة تحيط ذيول الصابون الكارهة للماء بجسيم الأوساخ غير القطبي، وتتآثر الرؤوس المحبة للماء مع الماء فتقتلع الأوساخ من السطح.",
        "zh": "在胶束结构中，肥皂的疏水尾部包围非极性污垢颗粒，亲水头部与水相互作用，把污垢从表面拉下来。",
        "ku": "Di avahiya mîselê de dûvikên hîdrofob ên sabûnê dora perçeya qirêjê ya nepolar digirin; serên hîdrofîl jî bi avê re dikevin têkiliyê û qirêjê ji rûyê tiştî vediqetînin."
      },
      "trap": {
        "tr": "Misel oluşumunda hidrofil başlar kire saplanır.",
        "en": "During micelle formation, hydrophilic heads get stuck in the dirt.",
        "de": "Bei der Mizellenbildung bleiben hydrophile Köpfe im Schmutz stecken.",
        "fr": "Lors de la formation des micelles, les têtes hydrophiles restent coincées dans la terre.",
        "ru": "При образовании мицеллы гидрофильные головки внедряются в грязь.",
        "ar": "عند تكوّن المذيلة تنغرس الرؤوس المحبة للماء في الأوساخ.",
        "zh": "形成胶束时，亲水头部嵌入污垢中。",
        "ku": "Di çêbûna mîselê de serên hîdrofîl di nav qirêjê de diçikin."
      },
      "whyTrapIsFalse": {
        "tr": "Miselde yerleşim tersidir: apolar kuyruklar içe, kire doğru; polar (hidrofil) başlar dışa, suya doğru yönelir. Başlar kire gömülseydi kir suda dağılamazdı.",
        "en": "In a micelle it is the reverse: the non-polar tails point inwards into the dirt, the polar (hydrophilic) heads point outwards into the water. If the heads were buried in the dirt, it could not disperse in water.",
        "de": "In der Mizelle ist es umgekehrt: Die unpolaren Schwänze zeigen nach innen in den Schmutz, die polaren (hydrophilen) Köpfe nach außen ins Wasser. Steckten die Köpfe im Schmutz, könnte er sich nicht im Wasser verteilen.",
        "fr": "Dans une micelle, c’est l’inverse : les queues apolaires sont tournées vers l’intérieur, dans la saleté, les têtes polaires (hydrophiles) vers l’extérieur, vers l’eau. Si les têtes s’enfonçaient dans la saleté, celle-ci ne pourrait pas se disperser dans l’eau.",
        "ru": "В мицелле всё наоборот: неполярные хвосты направлены внутрь, к грязи, а полярные (гидрофильные) головки — наружу, к воде. Если бы головки погружались в грязь, она не могла бы распределиться в воде.",
        "ar": "في المذيلة يكون الترتيب معكوسًا: تتجه الذيول غير القطبية إلى الداخل نحو الأوساخ، وتتجه الرؤوس القطبية (المحبة للماء) إلى الخارج نحو الماء. ولو انغرست الرؤوس في الأوساخ لما تشتتت في الماء.",
        "zh": "胶束中的排列正好相反：非极性尾部朝内伸入污垢，极性（亲水）头部朝外朝向水。如果头部嵌入污垢，污垢就无法分散到水中。",
        "ku": "Di mîselê de rêzbûn berevajî ye: dûvikên nepolar ber bi hundir, ber bi qirêjê ve; serên polar (hîdrofîl) ber bi derve, ber bi avê ve ne. Heke ser di nav qirêjê de biçikiyana, qirêj di avê de belav nedibû."
      }
    },
    {
      "id": "u10-f12",
      "fact": {
        "tr": "İlaçlar etki yerine ve hızına göre farklı formlarda üretilir; tablet, draje, kapsül, şurup, ampul (enjeksiyon), merhem, krem ve damla bu formlardan bazılarıdır.",
        "en": "Medicines are produced in different forms according to where and how fast they act; tablets, dragees, capsules, syrups, ampoules (injection), ointments, creams and drops are some of these forms.",
        "de": "Arzneimittel werden je nach Wirkort und Wirkgeschwindigkeit in verschiedenen Formen hergestellt; Tabletten, Dragees, Kapseln, Sirupe, Ampullen (Injektion), Salben, Cremes und Tropfen sind einige davon.",
        "fr": "Les médicaments sont fabriqués sous différentes formes selon le lieu et la rapidité d’action ; comprimés, dragées, gélules, sirops, ampoules (injection), pommades, crèmes et gouttes en sont quelques-unes.",
        "ru": "Лекарства выпускают в разных формах в зависимости от места и скорости действия: таблетки, драже, капсулы, сиропы, ампулы (инъекции), мази, кремы, капли и др.",
        "ar": "تُصنع الأدوية بأشكال مختلفة بحسب مكان تأثيرها وسرعته، ومن هذه الأشكال: الأقراص والأقراص الملبسة والكبسولات والشراب والأمبولات (الحقن) والمراهم والكريمات والقطرات.",
        "zh": "药物根据作用部位和起效速度制成不同剂型，如片剂、糖衣片、胶囊、糖浆、安瓿（注射剂）、软膏、乳膏和滴剂等。",
        "ku": "Derman li gorî cihê bandorê û leza bandorê bi formên cuda têne çêkirin; tablet, draje, kapsûl, şurub, ampûl (derzî), melhem, krem û dilop hin ji van forman in."
      },
      "trap": {
        "tr": "Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.",
        "en": "All medications are consumed only orally as pills.",
        "de": "Alle Medikamente werden ausschließlich oral in Form von Tabletten eingenommen.",
        "fr": "Tous les médicaments sont consommés uniquement par voie orale sous forme de pilules.",
        "ru": "Все лекарства принимают только внутрь в виде таблеток.",
        "ar": "تُتناول جميع الأدوية عن طريق الفم فقط على شكل أقراص.",
        "zh": "所有药物都只能以药片形式口服。",
        "ku": "Hemû derman tenê bi rêya devê, wek heb têne xwarin."
      },
      "whyTrapIsFalse": {
        "tr": "İlaçlar etki yerine ve hızına göre farklı formlarda hazırlanır. Enjeksiyonla kas ya da damar yoluyla, merhem ve kremle deriden, damlayla göz veya burundan da verilebilir.",
        "en": "Medicines are prepared in different forms depending on where and how fast they must act. They can also be given by injection into a muscle or vein, through the skin as ointments and creams, or as eye or nasal drops.",
        "de": "Arzneimittel werden je nach Wirkort und Wirkgeschwindigkeit in verschiedenen Formen hergestellt. Sie können auch per Injektion in Muskel oder Vene, als Salbe und Creme über die Haut oder als Augen- bzw. Nasentropfen gegeben werden.",
        "fr": "Les médicaments sont préparés sous différentes formes selon le lieu et la rapidité d’action souhaités. Ils peuvent aussi être administrés par injection intramusculaire ou intraveineuse, par la peau sous forme de pommades et de crèmes, ou en gouttes oculaires ou nasales.",
        "ru": "Лекарства выпускают в разных формах в зависимости от места и скорости действия. Их также вводят инъекцией в мышцу или вену, наносят на кожу в виде мазей и кремов, закапывают в глаза или нос в виде капель.",
        "ar": "تُحضَّر الأدوية بأشكال مختلفة بحسب مكان تأثيرها وسرعته، فيمكن إعطاؤها أيضًا بالحقن في العضل أو الوريد، أو عبر الجلد على شكل مراهم وكريمات، أو كقطرات للعين أو الأنف.",
        "zh": "药物根据作用部位和起效速度被制成不同剂型，也可以通过肌肉或静脉注射、以软膏和乳膏经皮肤、或以眼药水、滴鼻剂的形式给药。",
        "ku": "Derman li gorî cihê bandorê û leza bandorê bi formên cuda têne amadekirin. Ew dikarin bi derziyê bi rêya masûlkeyê an damarê, bi melhem û kremê bi rêya çerm, bi dilopan jî bi rêya çav an pozê werin dayîn."
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
        "zh": "化妆品中用作防腐剂的对羟基苯甲酸酯类以及部分用作增塑剂的邻苯二甲酸酯，可能使某些人过敏或损害健康，因此其用量受法定限量约束。",
        "ku": "Parabenên ku di kozmetîkê de wek parêzker û hin ftalatên ku wek nermker têne bikaranîn dikarin li hin kesan bandorên alerjîk an zirardar çêbikin; ji ber vê yekê bikaranîna wan bi sînorên zagonî tê rêkxistin."
      },
      "trap": {
        "tr": "Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.",
        "en": "Preservative chemicals in cosmetic products are completely harmless organic nutrients.",
        "de": "Konservierungschemikalien in Kosmetikprodukten sind völlig harmlose organische Nährstoffe.",
        "fr": "Les conservateurs chimiques contenus dans les produits cosmétiques sont des nutriments organiques totalement inoffensifs.",
        "ru": "Консерванты в косметике — совершенно безвредные органические питательные вещества.",
        "ar": "المواد الكيميائية الحافظة الموجودة في مستحضرات التجميل هي مغذيات عضوية غير ضارة تمامًا.",
        "zh": "化妆品中的防腐剂是完全无害的有机营养素。",
        "ku": "Madeyên kîmyewî yên parêzker ên di hilberên kozmetîkê de xurekên organîk ên bi temamî bêzirar in."
      },
      "whyTrapIsFalse": {
        "tr": "Koruyucular besin değil, ürünün mikroorganizmalarla bozulmasını önlemek için eklenen katkı maddeleridir. Parabenler gibi bazılarının alerjik ya da sağlığa zararlı etkileri olabileceği için kullanım miktarları yasal sınırlarla düzenlenir.",
        "en": "Preservatives are not nutrients but additives that stop the product from being spoiled by microorganisms. Some of them, such as parabens, may have allergenic or harmful effects, so their amounts are limited by law.",
        "de": "Konservierungsstoffe sind keine Nährstoffe, sondern Zusatzstoffe, die den Verderb durch Mikroorganismen verhindern. Einige, etwa Parabene, können allergen oder gesundheitsschädlich wirken, daher sind ihre Mengen gesetzlich begrenzt.",
        "fr": "Les conservateurs ne sont pas des nutriments mais des additifs qui empêchent l’altération du produit par les micro-organismes. Certains, comme les parabènes, peuvent avoir des effets allergisants ou nocifs ; leurs quantités sont donc limitées par la loi.",
        "ru": "Консерванты — не питательные вещества, а добавки, предотвращающие порчу продукта микроорганизмами. Некоторые из них, например парабены, могут вызывать аллергию или вредить здоровью, поэтому их количество ограничено законом.",
        "ar": "المواد الحافظة ليست مغذيات، بل إضافات تمنع فساد المنتج بفعل الكائنات الدقيقة، وقد يكون لبعضها كالبارابينات تأثيرات تحسسية أو ضارة، لذا تُحدَّد كمياتها بالقانون.",
        "zh": "防腐剂不是营养素，而是为防止产品因微生物而变质加入的添加剂。其中一些（如对羟基苯甲酸酯类）可能致敏或有害健康，因此其用量受法规限制。",
        "ku": "Parêzker ne xurek in; ew madeyên lêzêdekirî ne ku nahêlin hilber ji ber mîkroorganîzmayan xera bibe. Hin ji wan, wek parabenan, dikarin bandorên alerjîk an zirardar bikin; ji ber vê yekê mîqdarên wan bi sînorên zagonî têne diyarkirin."
      }
    },
    {
      "id": "u10-f14",
      "fact": {
        "tr": "Sızma zeytinyağı asitliği en düşük, mekanik yolla elde edilen doğal ve kaliteli yağdır.",
        "en": "Extra virgin olive oil is a natural and high-quality oil with the lowest acidity, obtained mechanically.",
        "de": "Extra natives Olivenöl ist ein natürliches und hochwertiges Öl mit dem geringsten Säuregehalt, das mechanisch gewonnen wird.",
        "fr": "L'huile d'olive extra vierge est une huile naturelle et de haute qualité avec la plus faible acidité, obtenue mécaniquement.",
        "ru": "Оливковое масло Extra Virgin — натуральное высококачественное масло с самой низкой кислотностью, полученное механическим способом.",
        "ar": "زيت الزيتون البكر الممتاز زيت طبيعي عالي الجودة، يُستخلص بالطرق الميكانيكية، وحموضته هي الأدنى.",
        "zh": "特级初榨橄榄油是仅用机械方法获得、酸度最低的天然优质橄榄油。",
        "ku": "Rûnê zeytûnê yê paqij rûnekî xwezayî û bikalîte ye ku asîdiya wî herî kêm e û tenê bi rêya mekanîkî tê bidestxistin."
      },
      "trap": {
        "tr": "Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.",
        "en": "Riviera oil is the purest natural olive oil that has not undergone any processing.",
        "de": "Riviera-Öl ist das reinste natürliche Olivenöl, das keiner Verarbeitung unterzogen wurde.",
        "fr": "L'huile Riviera est l'huile d'olive naturelle la plus pure qui n'a subi aucune transformation.",
        "ru": "Масло «Ривьера» — чистейшее натуральное оливковое масло, не подвергавшееся никакой обработке.",
        "ar": "زيت زيتون ريفييرا هو أنقى زيت زيتون طبيعي لم يخضع لأي معالجة.",
        "zh": "里维埃拉橄榄油是未经任何加工、最纯的天然橄榄油。",
        "ku": "Rûnê zeytûnê yê Riviera rûnê zeytûnê yê xwezayî yê herî saf e ku tu pêvajo lê nehatiye kirin."
      },
      "whyTrapIsFalse": {
        "tr": "Riviera zeytinyağı rafine edilmiş (işlem görmüş) zeytinyağı ile natürel zeytinyağının karışımıdır. Hiçbir kimyasal işlem görmeden yalnızca mekanik yolla elde edilen yağ natürel sızma zeytinyağıdır.",
        "en": "Riviera olive oil is a blend of refined (processed) olive oil and virgin olive oil. The oil obtained only by mechanical means without any chemical treatment is extra virgin olive oil.",
        "de": "Riviera-Olivenöl ist eine Mischung aus raffiniertem (behandeltem) Olivenöl und nativem Olivenöl. Das nur mechanisch, ohne chemische Behandlung gewonnene Öl ist natives Olivenöl extra.",
        "fr": "L’huile d’olive Riviera est un mélange d’huile d’olive raffinée (traitée) et d’huile d’olive vierge. L’huile obtenue uniquement par des procédés mécaniques, sans traitement chimique, est l’huile d’olive vierge extra.",
        "ru": "Оливковое масло «Ривьера» — смесь рафинированного (обработанного) и натурального оливкового масла. Масло, полученное только механическим способом без химической обработки, — это оливковое масло Extra Virgin.",
        "ar": "زيت زيتون ريفييرا خليط من زيت الزيتون المكرر (المعالَج) وزيت الزيتون البكر، أما الزيت المستخرج بالطرق الميكانيكية فقط دون أي معالجة كيميائية فهو زيت الزيتون البكر الممتاز.",
        "zh": "里维埃拉橄榄油是精炼（经过加工的）橄榄油与初榨橄榄油的混合物。只用机械方法、未经任何化学处理得到的才是特级初榨橄榄油。",
        "ku": "Rûnê zeytûnê yê Riviera tevliheviya rûnê zeytûnê yê rafînekirî (pêvajo lê hatî kirin) û rûnê zeytûnê yê xwezayî ye. Rûnê ku bê tu pêvajoya kîmyewî, tenê bi rêya mekanîkî tê bidestxistin rûnê zeytûnê yê paqij e."
      }
    },
    {
      "id": "u10-f15",
      "fact": {
        "tr": "Hidrojenasyon yöntemiyle doymamış bitkisel sıvı yağlara hidrojen katılarak margarinler elde edilir.",
        "en": "Margarines are obtained by adding hydrogen to unsaturated vegetable oils through the hydrogenation method.",
        "de": "Margarinen werden durch Zugabe von Wasserstoff zu ungesättigten Pflanzenölen durch das Hydrierungsverfahren gewonnen.",
        "fr": "Les margarines sont obtenues en ajoutant de l'hydrogène à des huiles végétales insaturées par la méthode d'hydrogénation.",
        "ru": "Маргарин получают гидрированием: к ненасыщенным жидким растительным маслам присоединяют водород.",
        "ar": "يُحصل على المارجرين بإضافة الهيدروجين إلى الزيوت النباتية السائلة غير المشبعة بطريقة الهدرجة.",
        "zh": "人造黄油是用氢化方法向不饱和植物油中加氢制得的。",
        "ku": "Margarîn bi rêbaza hîdrojenasyonê, bi lêzêdekirina hîdrojenê li rûnên riwekî yên şile û netêr têne bidestxistin."
      },
      "trap": {
        "tr": "Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.",
        "en": "Margarines are produced by boiling animal bones.",
        "de": "Margarinen werden durch Kochen von Tierknochen hergestellt.",
        "fr": "Les margarines sont produites en faisant bouillir des os d'animaux.",
        "ru": "Маргарин получают вывариванием костей животных.",
        "ar": "يُنتَج المارجرين بغلي عظام الحيوانات.",
        "zh": "人造黄油是用动物骨头熬煮制成的。",
        "ku": "Margarîn bi kelandina hestiyên heywanan têne çêkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Margarin bitkisel kaynaklıdır: doymamış sıvı yağların ikili bağlarına katalizör eşliğinde hidrojen katılarak yağ katılaştırılır. Kemiklerin kaynatılmasıyla margarin değil, jelatin gibi başka ürünler elde edilir.",
        "en": "Margarine is plant-based: hydrogen is added to the double bonds of unsaturated liquid oils with a catalyst, which solidifies the oil. Boiling bones gives other products such as gelatin, not margarine.",
        "de": "Margarine ist pflanzlich: An die Doppelbindungen ungesättigter flüssiger Öle wird mit einem Katalysator Wasserstoff addiert, wodurch das Öl fest wird. Durch Auskochen von Knochen erhält man andere Produkte wie Gelatine, keine Margarine.",
        "fr": "La margarine est d’origine végétale : on additionne de l’hydrogène aux doubles liaisons des huiles liquides insaturées en présence d’un catalyseur, ce qui solidifie l’huile. En faisant bouillir des os, on obtient d’autres produits comme la gélatine, pas de la margarine.",
        "ru": "Маргарин имеет растительное происхождение: к двойным связям ненасыщенных жидких масел в присутствии катализатора присоединяют водород, и масло затвердевает. Вываривая кости, получают другие продукты, например желатин, а не маргарин.",
        "ar": "المارجرين نباتي المصدر: يُضاف الهيدروجين إلى الروابط الثنائية في الزيوت السائلة غير المشبعة بوجود عامل حفاز فيتصلب الزيت. أما غلي العظام فينتج مواد أخرى كالجيلاتين لا المارجرين.",
        "zh": "人造黄油来源于植物：在催化剂作用下向不饱和液态油的双键中加氢，使油变为固态。熬煮骨头得到的是明胶等其他产品，而不是人造黄油。",
        "ku": "Margarîn ji çavkaniyên riwekî tê: bi alîkariya katalîzorê hîdrojen li girêdanên ducar ên rûnên şile yên netêr tê zêdekirin û rûn hişk dibe. Bi kelandina hestiyan ne margarîn, lê hilberên din ên wek jelatînê têne bidestxistin."
      }
    },
    {
      "id": "u10-f16",
      "fact": {
        "tr": "Pastörizasyon gıdadaki patojen bakterileri öldürmek için 60-75 °C'de kısa süreli ısıtma işlemidir.",
        "en": "Pasteurization is a short-term heating process at 60-75 °C to kill pathogenic bacteria in food.",
        "de": "Bei der Pasteurisierung handelt es sich um einen kurzzeitigen Erhitzungsprozess bei 60–75 °C, um krankheitserregende Bakterien in Lebensmitteln abzutöten.",
        "fr": "La pasteurisation est un processus de chauffage à court terme entre 60 et 75 °C destiné à tuer les bactéries pathogènes présentes dans les aliments.",
        "ru": "Пастеризация — кратковременное нагревание пищевых продуктов до 60–75 °C для уничтожения болезнетворных бактерий.",
        "ar": "البسترة تسخين قصير عند 60-75 °C لقتل البكتيريا الممرضة في الغذاء.",
        "zh": "巴氏杀菌是在 60-75 °C 下短时间加热，以杀死食品中致病菌的方法。",
        "ku": "Pastorîzasyon germkirineke demkurt e di 60-75 °C de, ji bo kuştina bakteriyên nexweşîçêker ên di xwarinê de."
      },
      "trap": {
        "tr": "Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.",
        "en": "Pasteurization is a method of sterilizing food by freezing.",
        "de": "Pasteurisierung ist eine Methode zur Sterilisierung von Lebensmitteln durch Einfrieren.",
        "fr": "La pasteurisation est une méthode de stérilisation des aliments par congélation.",
        "ru": "Пастеризация — способ стерилизации пищевых продуктов замораживанием.",
        "ar": "البسترة طريقة لتعقيم الغذاء بالتجميد.",
        "zh": "巴氏杀菌是通过冷冻对食品进行灭菌的方法。",
        "ku": "Pastorîzasyon rêbaza sterîlkirina xwarinê bi cemidandinê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Pastörizasyon soğutma değil ısıtma işlemidir ve sterilizasyon değildir: gıda kısa süre ısıtılıp hızla soğutulur, zararlı mikroorganizmaların çoğu ölür ama tamamı ölmez. Dondurma mikroorganizmaları öldürmez, yalnızca çoğalmalarını yavaşlatır.",
        "en": "Pasteurisation is heating, not cooling, and it is not sterilisation: the food is heated briefly and cooled quickly, killing most but not all harmful microorganisms. Freezing does not kill microorganisms; it only slows their growth.",
        "de": "Pasteurisieren ist Erhitzen, nicht Kühlen, und keine Sterilisation: Das Lebensmittel wird kurz erhitzt und rasch abgekühlt; die meisten, aber nicht alle schädlichen Mikroorganismen sterben. Einfrieren tötet Mikroorganismen nicht, es bremst nur ihr Wachstum.",
        "fr": "La pasteurisation est un chauffage, pas un refroidissement, et ce n’est pas une stérilisation : l’aliment est chauffé brièvement puis refroidi rapidement, ce qui tue la plupart des micro-organismes nuisibles, mais pas tous. La congélation ne tue pas les micro-organismes, elle ralentit seulement leur multiplication.",
        "ru": "Пастеризация — это нагревание, а не охлаждение, и не стерилизация: продукт кратковременно нагревают и быстро охлаждают, при этом гибнет большинство, но не все вредные микроорганизмы. Замораживание микроорганизмы не убивает, а лишь замедляет их размножение.",
        "ar": "البسترة عملية تسخين لا تبريد، وليست تعقيمًا: يُسخَّن الغذاء لمدة قصيرة ثم يُبرَّد بسرعة فيموت معظم الكائنات الدقيقة الضارة لا جميعها. أما التجميد فلا يقتل الكائنات الدقيقة بل يبطئ تكاثرها فقط.",
        "zh": "巴氏杀菌是加热而不是冷却，也不是灭菌：食品被短时间加热后迅速冷却，大部分而非全部有害微生物被杀死。冷冻不能杀死微生物，只能减缓其繁殖。",
        "ku": "Pastorîzasyon germkirin e, ne sarkirin, û ne jî sterîlîzasyon e: xwarin demeke kurt tê germkirin û zû tê sarkirin; piraniya mîkroorganîzmayên zirardar dimirin, lê hemû namirin. Cemidandin mîkroorganîzmayan nakuje, tenê pirbûna wan hêdî dike."
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
        "ru": "Синтетическое моющее средство",
        "ar": "المنظف الصناعي",
        "zh": "洗涤剂",
        "ku": "Deterjan"
      },
      "conceptB": {
        "tr": "Sabun",
        "en": "Soap",
        "de": "Seife",
        "fr": "Savon",
        "ru": "Мыло",
        "ar": "الصابون",
        "zh": "肥皂",
        "ku": "Sabûn"
      },
      "distinction": {
        "tr": "Deterjan çoğunlukla petrol türevlerinden üretilir, sert sularda da temizler ancak doğada zor parçalandığı için çevreyi daha çok kirletir; sabun ise bitkisel veya hayvansal yağlardan üretilir, sert suda çökelek oluşturur ve doğada kolay parçalanır.",
        "en": "A detergent is mostly made from petroleum derivatives, cleans in hard water too, but pollutes the environment more because it breaks down slowly in nature; soap is made from vegetable or animal fats, forms a precipitate in hard water and breaks down easily in nature.",
        "de": "Ein Detergens wird überwiegend aus Erdölderivaten hergestellt, reinigt auch in hartem Wasser, belastet die Umwelt aber stärker, weil es in der Natur nur schwer abgebaut wird; Seife wird aus pflanzlichen oder tierischen Fetten hergestellt, bildet in hartem Wasser einen Niederschlag und wird in der Natur leicht abgebaut.",
        "fr": "Un détergent est surtout fabriqué à partir de dérivés du pétrole, nettoie aussi en eau dure, mais pollue davantage l'environnement car il se dégrade difficilement dans la nature ; le savon est fabriqué à partir de graisses végétales ou animales, forme un précipité en eau dure et se dégrade facilement dans la nature.",
        "ru": "Синтетическое моющее средство получают в основном из продуктов переработки нефти; оно моет и в жёсткой воде, но сильнее загрязняет окружающую среду, так как с трудом разлагается в природе; мыло получают из растительных или животных жиров, в жёсткой воде оно образует осадок, а в природе легко разлагается.",
        "ar": "المنظف الصناعي يُصنع غالبًا من مشتقات البترول وينظف في الماء العسر أيضًا، لكنه يلوث البيئة أكثر لأنه يتحلل بصعوبة في الطبيعة؛ أما الصابون فيُصنع من الدهون النباتية أو الحيوانية ويكوّن راسبًا في الماء العسر ويتحلل بسهولة في الطبيعة.",
        "zh": "洗涤剂大多由石油衍生物制得，在硬水中也能去污，但在自然界中难以分解，因而对环境污染更大；肥皂由植物或动物油脂制得，在硬水中会生成沉淀，在自然界中容易分解。",
        "ku": "Deterjan bi piranî ji derûvên neftê tê çêkirin, di ava hişk de jî paqij dike, lê ji ber ku di xwezayê de bi zehmetî perçe dibe jîngehê bêtir qirêj dike; sabûn ji rûnên riwekî an heywanî tê çêkirin, di ava hişk de niştek çêdike û di xwezayê de bi hêsanî perçe dibe."
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
        "ru": "Белое мыло — натриевая соль жирных кислот, оно твёрдое; мягкое мыло — калиевая соль жирных кислот, оно мягкое.",
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
        "ku": "Rûnê zeytûnê yê paqij"
      },
      "conceptB": {
        "tr": "Riviera Zeytinyağı",
        "en": "Riviera Olive Oil",
        "de": "Riviera-Olivenöl",
        "fr": "Huile d'olive Riviera",
        "ru": "Оливковое масло «Ривьера»",
        "ar": "زيت زيتون ريفييرا",
        "zh": "里维埃拉橄榄油",
        "ku": "Rûnê zeytûnê yê Riviera"
      },
      "distinction": {
        "tr": "Sızma zeytinyağı zeytinden yalnızca mekanik yolla elde edilen, asitliği en düşük natürel yağdır; riviera zeytinyağı rafine zeytinyağı ile natürel zeytinyağının karışımıdır.",
        "en": "Extra virgin olive oil is a natural oil obtained from olives only by mechanical means and has the lowest acidity; Riviera olive oil is a blend of refined olive oil and virgin olive oil.",
        "de": "Natives Olivenöl extra wird nur mechanisch aus Oliven gewonnen und hat den geringsten Säuregehalt; Riviera-Olivenöl ist eine Mischung aus raffiniertem und nativem Olivenöl.",
        "fr": "L'huile d'olive vierge extra est obtenue uniquement par des procédés mécaniques et a l'acidité la plus faible ; l'huile d'olive Riviera est un mélange d'huile d'olive raffinée et d'huile d'olive vierge.",
        "ru": "Оливковое масло Extra Virgin получают из оливок только механическим способом, у него самая низкая кислотность; оливковое масло «Ривьера» — смесь рафинированного и натурального оливкового масла.",
        "ar": "زيت الزيتون البكر الممتاز: زيت طبيعي يُستخلص من الزيتون بالطرق الميكانيكية فقط، وهو الأقل حموضة؛ أما زيت زيتون ريفييرا فخليط من زيت الزيتون المكرر وزيت الزيتون البكر.",
        "zh": "特级初榨橄榄油仅通过机械方法从橄榄中获得，酸度最低；里维埃拉橄榄油是精炼橄榄油与初榨橄榄油的混合物。",
        "ku": "Rûnê zeytûnê yê paqij tenê bi rêya mekanîkî ji zeytûnê tê bidestxistin û asîdiya wî herî kêm e; rûnê zeytûnê yê Riviera tevliheviya rûnê zeytûnê yê rafînekirî û rûnê zeytûnê yê xwezayî ye."
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
        "ru": "Гидрофильный конец обладает полярностью, притягивается к воде и удерживается в ней; гидрофобный конец представляет собой неполярную углеводородную цепь и удерживается на загрязнении.",
        "ar": "الطرف المحب للماء قطبي ويحب الماء ويلتصق به؛ أما الطرف الكاره للماء فسلسلة هيدروكربونية غير قطبية تلتصق بالأوساخ.",
        "zh": "亲水端具有极性，易与水结合；疏水端是非极性的烃链，与污垢结合。",
        "ku": "Serê hîdrofîl polar e, ji avê hez dike û bi avê ve dizeliqe; serê hîdrofob zincîreke hîdrokarbonî ya nepolar e û bi qirêjê ve dizeliqe."
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
        "tr": "Doğal polimerler (nişasta, selüloz, proteinler, DNA) canlılar tarafından üretilir; sentetik polimerler (PE, PVC, Teflon, Kevlar) ise monomerlerden fabrikada üretilir.",
        "en": "Natural polymers (starch, cellulose, proteins, DNA) are made by living organisms; synthetic polymers (PE, PVC, Teflon, Kevlar) are made from monomers in factories.",
        "de": "Ein natürliches Polymer kommt in der Natur vor (Stärke, Cellulose, DNA); synthetische Makromoleküle wie PE, PVC, Teflon und Kevlar werden dagegen industriell hergestellt.",
        "fr": "Un polymère naturel se trouve dans la nature (amidon, cellulose, ADN) ; un polymère synthétique est fabriqué en usine (PE, PVC, Téflon, Kevlar).",
        "ru": "Природный полимер встречается в природе (крахмал, целлюлоза, ДНК); синтетический полимер получают на заводе (ПЭ, ПВХ, тефлон, кевлар).",
        "ar": "تُنتج الكائنات الحية البوليمرات الطبيعية (النشا والسليلوز والبروتينات والحمض النووي DNA)؛ أما البوليمرات الاصطناعية (PE وPVC والتفلون والكيفلار) فتُنتَج في المصانع من المونومرات.",
        "zh": "天然聚合物（淀粉、纤维素、蛋白质、DNA）由生物体合成；合成聚合物（PE、PVC、特氟龙、凯夫拉）则在工厂中由单体制得。",
        "ku": "Polîmerên xwezayî (nîşasta, selûloz, proteîn, DNA) ji aliyê zindiyan ve têne çêkirin; polîmerên sentetîk (PE, PVC, Teflon, Kevlar) jî di fabrîkeyan de ji monomeran têne çêkirin."
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
        "ar": "البوليمر اللدن بالحرارة",
        "zh": "热塑性塑料",
        "ku": "Termoplastîk"
      },
      "conceptB": {
        "tr": "Termoset Polimer",
        "en": "Thermosetting Polymer",
        "de": "Duroplast",
        "fr": "Polymère thermodurcissable",
        "ru": "Термореактивный полимер",
        "ar": "البوليمر المتصلب بالحرارة",
        "zh": "热固性聚合物",
        "ku": "Polîmera termoset"
      },
      "distinction": {
        "tr": "Termoplastik ısıtıldığında yumuşar ve yeniden şekillendirilebilir; termoset polimer ise çapraz bağlı yapısı nedeniyle ısıtıldığında yumuşamaz, yeniden şekillendirilemez ve yüksek sıcaklıkta bozunur.",
        "en": "A thermoplastic softens when heated and can be reshaped; a thermosetting polymer, because of its cross-linked structure, does not soften when heated, cannot be reshaped and decomposes at high temperature.",
        "de": "Ein Thermoplast wird beim Erhitzen weich und lässt sich neu formen; ein Duroplast wird wegen seiner vernetzten Struktur beim Erhitzen nicht weich, lässt sich nicht neu formen und zersetzt sich bei hoher Temperatur.",
        "fr": "Un thermoplastique ramollit à la chaleur et peut être remodelé ; un polymère thermodurcissable, à cause de sa structure réticulée, ne ramollit pas à la chaleur, ne peut pas être remodelé et se décompose à haute température.",
        "ru": "Термопласт при нагревании размягчается, и ему можно придать новую форму; термореактивный полимер из-за сшитой структуры при нагревании не размягчается, не поддаётся повторному формованию и при высокой температуре разлагается.",
        "ar": "البوليمر اللدن بالحرارة يلين عند التسخين ويمكن إعادة تشكيله؛ أما البوليمر المتصلب بالحرارة فلا يلين عند التسخين بسبب بنيته المتشابكة، ولا يمكن إعادة تشكيله، ويتحلل عند درجات الحرارة العالية.",
        "zh": "热塑性塑料受热时变软，可以重新塑形；热固性聚合物由于具有交联结构，受热时不变软，不能重新塑形，在高温下会分解。",
        "ku": "Termoplastîk dema tê germkirin nerm dibe û dikare ji nû ve were teşekirin; polîmera termoset ji ber avahiya xwe ya bi girêdanên navzincîrî dema tê germkirin nerm nabe, ji nû ve nayê teşekirin û di germahiya bilind de hildiweşe."
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
        "zh": "漂白水(NaClO)",
        "ku": "Ava spîkirinê (NaClO)"
      },
      "conceptB": {
        "tr": "Kireç Kaymağı (CaOCl2)",
        "en": "Bleaching Powder (CaOCl2)",
        "de": "Chlorkalk (CaOCl2)",
        "fr": "Chlorure de chaux (CaOCl2)",
        "ru": "Хлорная известь (CaOCl2)",
        "ar": "مسحوق التبييض (CaOCl2)",
        "zh": "漂白粉(CaOCl2)",
        "ku": "Toza spîkirinê (CaOCl2)"
      },
      "distinction": {
        "tr": "Çamaşır suyu, sodyum hipokloritin sulu çözeltisidir; kireç kaymağı ise katı hâlde bulunan bir ağartıcı ve dezenfektandır. İkisinin de etkisi suda oluşan hipoklorit (ClO-) iyonundan kaynaklanır.",
        "en": "Liquid bleach is an aqueous solution of sodium hypochlorite; bleaching powder is a solid whitening agent and disinfectant. Both act through the hypochlorite (ClO-) ion formed in water.",
        "de": "Bleichlauge ist eine wässrige Lösung von Natriumhypochlorit; Chlorkalk ist dagegen ein festes Bleich- und Desinfektionsmittel. Beide wirken über das Hypochlorit-Ion (ClO-), das in Wasser entsteht.",
        "fr": "L'eau de Javel est une solution aqueuse d'hypochlorite de sodium ; le chlorure de chaux est un agent de blanchiment et un désinfectant solide. Tous deux agissent grâce à l'ion hypochlorite (ClO-) formé dans l'eau.",
        "ru": "Отбеливатель (NaClO) представляет собой водный раствор гипохлорита натрия; хлорная известь (CaOCl2) — твёрдое отбеливающее и дезинфицирующее средство. Действие обоих средств обусловлено гипохлорит-ионом (ClO-), который образуется в воде.",
        "ar": "ماء الجافيل محلول مائي لهيبوكلوريت الصوديوم؛ أما مسحوق التبييض فمادة مبيِّضة ومطهِّرة صلبة. وكلاهما يعمل بواسطة أيون الهيبوكلوريت (ClO-) المتكوّن في الماء.",
        "zh": "漂白水是次氯酸钠的水溶液；漂白粉则是固态的漂白剂和消毒剂。二者都依靠在水中生成的次氯酸根离子(ClO-)起作用。",
        "ku": "Ava spîkirinê çareseriya avî ya hîpoklorîta sodyûmê ye; toza spîkirinê jî spîker û dezenfektaneke hişk e. Bandora herduyan ji îyona hîpoklorîtê (ClO-) tê ku di avê de çêdibe."
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
        "zh": "盐酸洁厕剂(HCl)",
        "ku": "Ruhê xwê (HCl)"
      },
      "conceptB": {
        "tr": "Lavabo Açıcı (NaOH/KOH)",
        "en": "Drain Opener (NaOH/KOH)",
        "de": "Abflussreiniger (NaOH/KOH)",
        "fr": "Déboucheur (NaOH/KOH)",
        "ru": "Средство для прочистки труб (NaOH/KOH)",
        "ar": "مسلّك المجاري (NaOH/KOH)",
        "zh": "管道疏通剂(NaOH/KOH)",
        "ku": "Vekerê lavaboyê (NaOH/KOH)"
      },
      "distinction": {
        "tr": "Tuz ruhu, hidroklorik asidin sulu çözeltisidir ve kireç (CaCO3) lekelerini çözer; lavabo açıcı ise NaOH veya KOH gibi kuvvetli bazlar içerir ve yağ ile saçtan oluşan tıkanıklıkları giderir.",
        "en": "Spirit of salt is an aqueous solution of hydrochloric acid that dissolves limescale (CaCO3); a drain opener contains strong bases such as NaOH or KOH and clears clogs of grease and hair.",
        "de": "Salzsäure ist als Haushaltsreiniger eine wässrige Lösung von Chlorwasserstoff und löst Kalkflecken (CaCO3); ein Abflussreiniger enthält dagegen starke Basen wie NaOH oder KOH und beseitigt Verstopfungen aus Fett und Haaren.",
        "fr": "L'esprit de sel est une solution aqueuse d'acide chlorhydrique qui dissout le calcaire (CaCO3) ; un déboucheur contient des bases fortes comme NaOH ou KOH et élimine les bouchons de graisse et de cheveux.",
        "ru": "Соляная кислота (HCl) — водный раствор хлороводорода, растворяющий известковый налёт (CaCO3); средство для прочистки труб (NaOH/KOH) содержит сильные основания и устраняет засоры из жира и волос.",
        "ar": "روح الملح محلول مائي لحمض الهيدروكلوريك يذيب الترسبات الكلسية (CaCO3)؛ أما مسلّك المجاري فيحتوي على قواعد قوية مثل NaOH أو KOH ويزيل انسدادات الدهون والشعر.",
        "zh": "盐酸洁厕剂是氯化氢的水溶液，能溶解水垢(CaCO3)；管道疏通剂则含有 NaOH 或 KOH 等强碱，能清除油脂和头发造成的堵塞。",
        "ku": "Ruhê xwê çareseriya avî ya asîda hîdroklorîk e û lekeyên kilsê (CaCO3) dihelîne; vekerê lavaboyê jî bazên bihêz ên wek NaOH an KOH dihewîne û girtinên ji rûn û por vedike."
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
        "ru": "Механизм удаления загрязнений мылом",
        "ar": "آلية إزالة الصابون للأوساخ",
        "zh": "肥皂的去污机理",
        "ku": "Mekanîzmaya Paqijkirina Qirêjê ya Sabûnê"
      },
      "steps": [
        {
          "tr": "Sabun suda çözünerek anyon ve katyonlarına ayrışır",
          "en": "Soap dissolves in water and dissociates into anions and cations",
          "de": "Seife löst sich in Wasser und dissoziiert in Anionen und Kationen",
          "fr": "Le savon se dissout dans l'eau et se dissocie en anions et cations",
          "ru": "Мыло растворяется в воде и диссоциирует на анионы и катионы",
          "ar": "يذوب الصابون في الماء ويتفكك إلى أنيونات وكاتيونات",
          "zh": "肥皂溶于水，电离出阴离子和阳离子",
          "ku": "Sabûn di avê de dihele û li anyon û katyonên xwe vediqete"
        },
        {
          "tr": "Sabun anyonlarının apolar kuyrukları apolar kire tutunur",
          "en": "The nonpolar tails of the soap anions attach to the nonpolar dirt",
          "de": "Die unpolaren Schwänze der Seifenanionen haften am unpolaren Schmutz",
          "fr": "Les queues apolaires des anions du savon s'accrochent à la saleté apolaire",
          "ru": "Неполярные хвосты анионов мыла прикрепляются к неполярной грязи",
          "ar": "تلتصق الذيول غير القطبية لأنيونات الصابون بالأوساخ غير القطبية",
          "zh": "肥皂阴离子的非极性尾部附着在非极性污垢上",
          "ku": "Dûvikên nepolar ên anyonên sabûnê bi qirêja nepolar ve dizeliqin"
        },
        {
          "tr": "Kir taneciği, polar başları dışa (suya) dönük bir misel ile sarılır",
          "en": "The dirt particle is enclosed in a micelle whose polar heads face outward toward the water",
          "de": "Das Schmutzteilchen wird von einer Mizelle umschlossen, deren polare Köpfe nach außen zum Wasser zeigen",
          "fr": "La particule de saleté est enfermée dans une micelle dont les têtes polaires sont tournées vers l'eau",
          "ru": "Частица грязи оказывается внутри мицеллы, полярные головки которой обращены наружу, к воде",
          "ar": "يُحاط جسيم الأوساخ بمذيلة تتجه رؤوسها القطبية إلى الخارج نحو الماء",
          "zh": "污垢颗粒被胶束包裹，胶束的极性头部朝外（朝向水）",
          "ku": "Perçeya qirêjê di nav mîselekê de tê pêçan ku serên wê yên polar ber bi derve (ber bi avê) ve ne"
        },
        {
          "tr": "Çalkalama ile miseller yüzeyden sökülür ve suyla uzaklaştırılır",
          "en": "With agitation, the micelles are lifted from the surface and carried away by water",
          "de": "Durch Bewegen werden die Mizellen von der Oberfläche gelöst und mit dem Wasser fortgespült",
          "fr": "Par agitation, les micelles se détachent de la surface et sont entraînées par l'eau",
          "ru": "При встряхивании мицеллы отрываются от поверхности и уносятся водой",
          "ar": "بالتحريك تنفصل المذيلات عن السطح ويحملها الماء بعيدًا",
          "zh": "经搅动，胶束从表面脱离并被水带走",
          "ku": "Bi hejandinê mîsel ji rûyê tiştî vediqetin û bi avê re diçin"
        }
      ]
    },
    {
      "id": "u10-s02",
      "title": {
        "tr": "Sabun Üretimi",
        "en": "Soap Production",
        "de": "Seifenherstellung",
        "fr": "Fabrication du savon",
        "ru": "Получение мыла",
        "ar": "إنتاج الصابون",
        "zh": "肥皂的制取",
        "ku": "Hilberîna Sabûnê"
      },
      "steps": [
        {
          "tr": "Bitkisel veya hayvansal yağ, derişik NaOH çözeltisiyle karıştırılır",
          "en": "Vegetable or animal fat is mixed with concentrated NaOH solution",
          "de": "Pflanzliches oder tierisches Fett wird mit konzentrierter NaOH-Lösung gemischt",
          "fr": "La graisse végétale ou animale est mélangée à une solution concentrée de NaOH",
          "ru": "Растительный или животный жир смешивают с концентрированным раствором NaOH",
          "ar": "يُخلط الزيت النباتي أو الدهن الحيواني بمحلول NaOH المركّز",
          "zh": "将植物油或动物脂肪与浓 NaOH 溶液混合",
          "ku": "Rûnê riwekî an heywanî bi çareseriya NaOH-a tîr re tê tevlihevkirin"
        },
        {
          "tr": "Karışım ısıtılarak sabunlaşma (saponifikasyon) tepkimesi gerçekleştirilir",
          "en": "The mixture is heated so that the saponification reaction takes place",
          "de": "Das Gemisch wird erhitzt, sodass die Verseifung abläuft",
          "fr": "Le mélange est chauffé pour que la réaction de saponification ait lieu",
          "ru": "Смесь нагревают, и протекает реакция омыления",
          "ar": "يُسخَّن الخليط فيحدث تفاعل التصبّن",
          "zh": "加热混合物，发生皂化反应",
          "ku": "Tevlihevî tê germkirin û reaksiyona sabûnbûnê (saponîfîkasyon) pêk tê"
        },
        {
          "tr": "Oluşan karışıma yemek tuzu (NaCl) eklenerek sabun çöktürülür",
          "en": "Table salt (NaCl) is added to the resulting mixture to precipitate the soap",
          "de": "Dem entstandenen Gemisch wird Kochsalz (NaCl) zugesetzt, um die Seife auszufällen",
          "fr": "On ajoute du sel de cuisine (NaCl) au mélange obtenu pour faire précipiter le savon",
          "ru": "К полученной смеси добавляют поваренную соль (NaCl), и мыло высаливается",
          "ar": "يُضاف ملح الطعام (NaCl) إلى الخليط الناتج فيترسّب الصابون",
          "zh": "向所得混合物中加入食盐(NaCl)，使肥皂析出（盐析）",
          "ku": "Li tevliheviya çêbûyî xwêya xwarinê (NaCl) tê zêdekirin û sabûn tê niştandin"
        },
        {
          "tr": "Çöken sabun, gliserinli sıvıdan ayrılarak kalıplara dökülür",
          "en": "The precipitated soap is separated from the glycerol-containing liquid and poured into moulds",
          "de": "Die ausgefällte Seife wird von der glycerinhaltigen Flüssigkeit getrennt und in Formen gegossen",
          "fr": "Le savon précipité est séparé du liquide contenant la glycérine et coulé dans des moules",
          "ru": "Выделившееся мыло отделяют от жидкости, содержащей глицерин, и разливают по формам",
          "ar": "يُفصل الصابون المترسّب عن السائل المحتوي على الغليسرين ويُصبّ في قوالب",
          "zh": "将析出的肥皂与含甘油的液体分离，倒入模具成型",
          "ku": "Sabûna niştî ji şileya bi glîserîn tê veqetandin û di qaliban de tê rijandin"
        }
      ]
    },
    {
      "id": "u10-s03",
      "title": {
        "tr": "Katılma Polimerleşmesi (Polietilen Örneği)",
        "en": "Addition Polymerisation (Polyethylene Example)",
        "de": "Additionspolymerisation (Beispiel Polyethylen)",
        "fr": "Polymérisation par addition (exemple du polyéthylène)",
        "ru": "Полимеризация присоединением (на примере полиэтилена)",
        "ar": "البلمرة بالإضافة (مثال البولي إيثيلين)",
        "zh": "加成聚合（以聚乙烯为例）",
        "ku": "Polîmerîzasyona Lêzêdekirinê (mînaka polîetîlenê)"
      },
      "steps": [
        {
          "tr": "Küçük doymamış monomer molekülleri seçilir",
          "en": "Small unsaturated monomer molecules are selected",
          "de": "Es werden kleine ungesättigte Monomermoleküle ausgewählt",
          "fr": "De petites molécules de monomères insaturés sont sélectionnées",
          "ru": "Берут небольшие молекулы непредельного мономера",
          "ar": "تُختار جزيئات مونومر صغيرة غير مشبعة",
          "zh": "选用不饱和的小分子单体",
          "ku": "Molekulên monomer ên piçûk û netêr têne hilbijartin"
        },
        {
          "tr": "Yüksek sıcaklık ve basınçta katalizör eklenir",
          "en": "Catalyst is added at high temperature and pressure",
          "de": "Der Katalysator wird bei hoher Temperatur und hohem Druck zugegeben",
          "fr": "Le catalyseur est ajouté à haute température et pression",
          "ru": "При высокой температуре и давлении добавляют катализатор",
          "ar": "يُضاف الحفاز عند درجة حرارة وضغط مرتفعين",
          "zh": "在高温高压下加入催化剂",
          "ku": "Di germahî û zexta bilind de katalîzor tê lêzêdekirin"
        },
        {
          "tr": "Monomerlerdeki karbon-karbon ikili bağları açılarak monomerler birbirine bağlanır",
          "en": "The carbon–carbon double bonds of the monomers open and the monomers link to each other",
          "de": "Die Kohlenstoff-Kohlenstoff-Doppelbindungen der Monomere öffnen sich, und die Monomere verbinden sich miteinander",
          "fr": "Les doubles liaisons carbone–carbone des monomères s’ouvrent et les monomères se lient entre eux",
          "ru": "Двойные связи углерод–углерод в мономерах раскрываются, и мономеры соединяются друг с другом",
          "ar": "تنفتح الروابط الثنائية كربون–كربون في المونومرات فترتبط المونومرات ببعضها",
          "zh": "单体中的碳碳双键打开，单体彼此连接",
          "ku": "Girêdanên ducar ên karbon–karbon ên monomeran vedibin û monomer bi hev ve girê didin"
        },
        {
          "tr": "Binlerce birimden oluşan dev polimer zinciri oluşur",
          "en": "A giant polymer chain consisting of thousands of units is formed",
          "de": "Es entsteht eine riesige Polymerkette, die aus Tausenden von Einheiten besteht",
          "fr": "Une chaîne polymère géante composée de milliers d’unités se forme",
          "ru": "Образуется гигантская полимерная цепь из тысяч звеньев",
          "ar": "تتكون سلسلة بوليمرية عملاقة من آلاف الوحدات",
          "zh": "形成由数千个结构单元组成的巨大聚合物链",
          "ku": "Zincîreke polîmer a mezin çêdibe ku ji bi hezaran yekeyan pêk tê"
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
        "ku": "Gavên Vezîvirandina Ambalajên PET"
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
          "ku": "Ambalaj li gorî kodên vezîvirandinê li cureyan têne veqetandin"
        },
        {
          "tr": "Ayrılan PET'ler yıkanır ve küçük pullar hâlinde kırılır",
          "en": "The separated PET is washed and shredded into small flakes",
          "de": "Das aussortierte PET wird gewaschen und zu kleinen Flakes zerkleinert",
          "fr": "Le PET trié est lavé et broyé en petites paillettes",
          "ru": "Отсортированный ПЭТ моют и измельчают в мелкие хлопья",
          "ar": "يُغسل PET المفصول ويُفرم إلى رقائق صغيرة",
          "zh": "分离出的PET经清洗后粉碎成小薄片",
          "ku": "PET-ên veqetandî têne şuştin û dibin pelikên piçûk"
        },
        {
          "tr": "Pullar eritilerek granül hâline getirilir ve yeni ürünlerin üretiminde kullanılır",
          "en": "The flakes are melted into granules and used to make new products",
          "de": "Die Flakes werden zu Granulat geschmolzen und zur Herstellung neuer Produkte verwendet",
          "fr": "Les paillettes sont fondues en granulés et servent à fabriquer de nouveaux produits",
          "ru": "Хлопья расплавляют и превращают в гранулы, из которых производят новые изделия",
          "ar": "تُصهر الرقائق إلى حبيبات تُستخدم في تصنيع منتجات جديدة",
          "zh": "薄片熔融制成颗粒，用于生产新产品",
          "ku": "Pelik têne helandin, dibin granûl û di çêkirina hilberên nû de têne bikaranîn"
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
        "ru": "Какое из утверждений о механизме моющего действия мыла и синтетических моющих средств неверно?",
        "ar": "أيّ العبارات الآتية حول آلية التنظيف بالصابون والمنظفات الصناعية خاطئة؟",
        "zh": "下列关于肥皂和洗涤剂去污原理的叙述中，不正确的是哪一项？",
        "ku": "Derbarê mekanîzmaya paqijkirinê ya sabûn û deterjanan de kîjan ji van gotinan şaş e?"
      },
      "options": [
        {
          "tr": "Deterjanın polar baş kısmı apolar kire tutunur.",
          "en": "The polar head of the detergent clings to non-polar dirt.",
          "de": "Die polare Spitze des Reinigungsmittels haftet an unpolarem Schmutz.",
          "fr": "La tête polaire du détergent adhère à la saleté non polaire.",
          "ru": "Полярная головка частицы синтетического моющего средства прикрепляется к неполярной грязи.",
          "ar": "يلتصق الرأس القطبي للمنظف الصناعي بالأوساخ غير القطبية.",
          "zh": "洗涤剂的极性头部附着在非极性污垢上。",
          "ku": "Serê polar ê deterjanê bi qirêja nepolar ve dizeliqe."
        },
        {
          "tr": "Sabunun apolar kuyruk kısmı kiri sarar.",
          "en": "The non-polar tail of the soap envelops the dirt.",
          "de": "Der unpolare Schwanz der Seife umhüllt den Schmutz.",
          "fr": "La queue non polaire du savon enveloppe la saleté.",
          "ru": "Неполярный хвост мыла обволакивает грязь.",
          "ar": "يحيط الذيل غير القطبي للصابون بالأوساخ.",
          "zh": "肥皂的非极性尾部包裹着污垢。",
          "ku": "Dûvika nepolar a sabûnê qirêjê dipêçe."
        },
        {
          "tr": "Kir genellikle apolar organik bileşiklerden oluşur.",
          "en": "Dirt generally consists of nonpolar organic compounds.",
          "de": "Schmutz besteht im Allgemeinen aus unpolaren organischen Verbindungen.",
          "fr": "La saleté est généralement constituée de composés organiques non polaires.",
          "ru": "Грязь обычно состоит из неполярных органических соединений.",
          "ar": "تتكون الأوساخ عمومًا من مركبات عضوية غير قطبية.",
          "zh": "污垢通常由非极性有机化合物组成。",
          "ku": "Qirêj bi gelemperî ji pêkhateyên organîk ên nepolar pêk tê."
        },
        {
          "tr": "Sabunun hidrofil başı su molekülleri ile etkileşir.",
          "en": "The hydrophilic head of the soap interacts with water molecules.",
          "de": "Der hydrophile Kopf der Seife interagiert mit Wassermolekülen.",
          "fr": "La tête hydrophile du savon interagit avec les molécules d'eau.",
          "ru": "Гидрофильная головка мыла взаимодействует с молекулами воды.",
          "ar": "يتفاعل رأس الصابون المحب للماء مع جزيئات الماء.",
          "zh": "肥皂的亲水头与水分子相互作用。",
          "ku": "Serê hîdrofîl ê sabûnê bi molekulên avê re dikeve têkiliyê."
        },
        {
          "tr": "Deterjanlar sert sularda sabunlara göre daha az çökelek oluşturur.",
          "en": "Detergents form less precipitate in hard water than soaps.",
          "de": "Reinigungsmittel bilden in hartem Wasser weniger Niederschläge als Seifen.",
          "fr": "Les détergents forment moins de précipités dans l’eau dure que les savons.",
          "ru": "В жёсткой воде синтетические моющие средства образуют меньше осадка, чем мыло.",
          "ar": "تكوّن المنظفات الصناعية في الماء العسر رواسب أقل مما يكوّنه الصابون.",
          "zh": "洗涤剂在硬水中形成的沉淀比肥皂少。",
          "ku": "Deterjan di ava hişk de ji sabûnan kêmtir niştek çêdikin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Sabun ve deterjan taneciklerinde polar baş kısım hidrofildir, su molekülleriyle etkileşir; apolar kire tutunan kısım ise hidrofob hidrokarbon kuyruğudur. Bu nedenle polar başın kire tutunduğunu söyleyen ifade yanlıştır. Diğer ifadeler doğrudur: kir genellikle apolardır ve kuyruklar tarafından sarılır; deterjanlar da sert sudaki Ca2+ ve Mg2+ iyonlarıyla sabunlar gibi çökmez.",
        "en": "In soap and detergent particles the polar head is hydrophilic and interacts with water molecules; the part that holds on to non-polar dirt is the hydrophobic hydrocarbon tail. So the statement that the polar head clings to dirt is false. The other statements are true: dirt is generally non-polar and is enveloped by the tails, and detergents do not precipitate with the Ca2+ and Mg2+ ions of hard water the way soaps do.",
        "de": "In Seifen- und Detergensteilchen ist der polare Kopf hydrophil und wechselwirkt mit Wassermolekülen; am unpolaren Schmutz haftet der hydrophobe Kohlenwasserstoffschwanz. Die Aussage, der polare Kopf hafte am Schmutz, ist daher falsch. Die übrigen Aussagen sind richtig: Schmutz ist meist unpolar und wird von den Schwänzen umschlossen, und Detergenzien fallen mit den Ca2+- und Mg2+-Ionen des harten Wassers nicht aus wie Seifen.",
        "fr": "Dans les particules de savon et de détergent, la tête polaire est hydrophile et interagit avec les molécules d'eau ; la partie qui s'accroche à la saleté apolaire est la queue hydrocarbonée hydrophobe. L'affirmation selon laquelle la tête polaire s'accroche à la saleté est donc fausse. Les autres affirmations sont vraies : la saleté est généralement apolaire et est entourée par les queues, et les détergents ne précipitent pas avec les ions Ca2+ et Mg2+ de l'eau dure comme le font les savons.",
        "ru": "В частицах мыла и синтетических моющих средств полярная головка гидрофильна и взаимодействует с молекулами воды; к неполярной грязи прикрепляется гидрофобный углеводородный хвост. Поэтому утверждение, что к грязи прикрепляется полярная головка, неверно. Остальные утверждения верны: грязь обычно неполярна и окружается хвостами, а синтетические моющие средства, в отличие от мыла, не выпадают в осадок с ионами Ca2+ и Mg2+ жёсткой воды.",
        "ar": "في جسيمات الصابون والمنظفات يكون الرأس القطبي محبًّا للماء ويتآثر مع جزيئات الماء؛ أما الجزء الذي يلتصق بالأوساخ غير القطبية فهو الذيل الهيدروكربوني الكاره للماء. لذلك فالعبارة القائلة إن الرأس القطبي يلتصق بالأوساخ خاطئة. والعبارات الأخرى صحيحة: فالأوساخ غير قطبية غالبًا وتحيط بها الذيول، والمنظفات لا تترسب مع أيونات Ca2+ وMg2+ في الماء العسر كما يترسب الصابون.",
        "zh": "在肥皂和洗涤剂的粒子中，极性头部是亲水的，与水分子相互作用；与非极性污垢结合的是疏水的烃基尾部。因此，认为极性头部附着在污垢上的说法是错误的。其余说法都正确：污垢通常是非极性的，被尾部包围；洗涤剂不像肥皂那样与硬水中的 Ca2+、Mg2+ 离子生成沉淀。",
        "ku": "Di perçeyên sabûn û deterjanê de serê polar hîdrofîl e û bi molekulên avê re dikeve têkiliyê; beşa ku bi qirêja nepolar ve dizeliqe dûvika hîdrokarbonî ya hîdrofob e. Ji ber vê yekê gotina ku dibêje serê polar bi qirêjê ve dizeliqe şaş e. Gotinên din rast in: qirêj bi gelemperî nepolar e û dûvik dora wê digirin; deterjan jî bi îyonên Ca2+ û Mg2+ yên ava hişk re wek sabûnan naniştin."
      }
    },
    {
      "id": "u10-twin02",
      "stem": {
        "tr": "Şekilde X ve Y polimerlerinin zincirlerinden birer kesit verilmiştir.\nI. X'in monomeri tetrafloroetilendir (CF2=CF2).\nII. Y, yapışmaz tava ve tencere kaplamalarında kullanılan polimerdir.\nIII. X ve Y, monomerlerindeki C=C ikili bağlarının açılmasıyla oluşan katılma polimerleridir.\nyargılarından hangileri doğrudur?",
        "en": "The figure shows a section of the chains of polymers X and Y. Which of the following statements are true?\nI. The monomer of X is tetrafluoroethylene (CF2=CF2).\nII. Y is the polymer used to coat non-stick pans and pots.\nIII. X and Y are addition polymers formed by opening the C=C double bonds of their monomers.",
        "de": "Die Abbildung zeigt je einen Kettenausschnitt der Polymere X und Y. Welche Aussagen sind richtig?\nI. Das Monomer von X ist Tetrafluorethylen (CF2=CF2).\nII. Y ist das Polymer, mit dem Antihaft-Pfannen und -Töpfe beschichtet werden.\nIII. X und Y sind Additionspolymere, die durch Öffnen der C=C-Doppelbindungen ihrer Monomere entstehen.",
        "fr": "La figure montre un fragment de chaîne des polymères X et Y. Quelles affirmations sont vraies ?\nI. Le monomère de X est le tétrafluoroéthylène (CF2=CF2).\nII. Y est le polymère utilisé pour le revêtement des poêles et casseroles antiadhésives.\nIII. X et Y sont des polymères d'addition formés par ouverture des doubles liaisons C=C de leurs monomères.",
        "ru": "На рисунке показаны фрагменты цепей полимеров X и Y. Какие утверждения верны?\nI. Мономер X — тетрафторэтилен (CF2=CF2).\nII. Y — полимер, которым покрывают антипригарные сковороды и кастрюли.\nIII. X и Y — продукты полимеризации присоединением, образующиеся при раскрытии двойных связей C=C мономеров.",
        "ar": "يبيّن الشكل جزءًا من سلسلة كلٍّ من البوليمرين X وY. أيّ العبارات الآتية صحيحة؟\nI. مونومر X هو رباعي فلورو الإيثيلين (CF2=CF2).\nII. Y هو البوليمر المستخدم في طلاء المقالي والقدور غير اللاصقة.\nIII. X وY بوليمرات إضافة تتكوّن بانفتاح الروابط الثنائية C=C في مونومراتها.",
        "zh": "图中分别给出了聚合物 X 和 Y 的一段分子链。下列说法中哪些正确？\nI. X 的单体是四氟乙烯(CF2=CF2)。\nII. Y 是用于不粘锅涂层的聚合物。\nIII. X 和 Y 都是单体中的 C=C 双键打开后形成的加聚物。",
        "ku": "Di şiklê de ji zincîrên polîmerên X û Y her yek beşek hatiye dayîn. Kîjan ji van gotinan rast in?\nI. Monomera X tetrafloroetîlen e (CF2=CF2).\nII. Y ew polîmer e ku di rûpoşa tawe û beroşên nezeliqok de tê bikaranîn.\nIII. X û Y polîmerên lêzêdekirinê ne ku bi vebûna girêdanên ducar ên C=C yên monomerên xwe çêdibin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
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
        "tr": "Şekilde X zincirinin tekrarlanan birimi –CF2–CF2–'dir; bu, monomeri CF2=CF2 olan Teflondur (PTFE). Y zincirinin tekrarlanan birimi –CH2–CHCl–'dir; bu, monomeri vinil klorür (CH2=CHCl) olan PVC'dir. I doğrudur. II yanlıştır: yapışmaz kaplamada kullanılan polimer X'tir (Teflon); PVC pencere profili ve boru yapımında kullanılır. III doğrudur: her iki monomerde de C=C ikili bağı açılır ve monomerler kovalent bağlarla uç uca eklenir. Zincirdeki Cl atomlarını gözden kaçırıp Y'yi Teflon sanmak tipik bir hatadır.",
        "en": "In the figure the repeating unit of chain X is –CF2–CF2–; this is Teflon (PTFE), whose monomer is CF2=CF2. The repeating unit of chain Y is –CH2–CHCl–; this is PVC, whose monomer is vinyl chloride (CH2=CHCl). I is true. II is false: the non-stick coating polymer is X (Teflon); PVC is used for window frames and pipes. III is true: in both monomers the C=C double bond opens and the monomers join end to end by covalent bonds. Overlooking the Cl atoms in the chain and taking Y for Teflon is a typical mistake.",
        "de": "In der Abbildung ist die Wiederholungseinheit der Kette X –CF2–CF2–; das ist Teflon (PTFE) mit dem Monomer CF2=CF2. Die Wiederholungseinheit der Kette Y ist –CH2–CHCl–; das ist PVC mit dem Monomer Vinylchlorid (CH2=CHCl). I ist richtig. II ist falsch: Das Polymer für Antihaftbeschichtungen ist X (Teflon); PVC wird für Fensterprofile und Rohre verwendet. III ist richtig: In beiden Monomeren öffnet sich die C=C-Doppelbindung, und die Monomere verknüpfen sich kovalent zu einer Kette. Ein typischer Fehler ist, die Cl-Atome in der Kette zu übersehen und Y für Teflon zu halten.",
        "fr": "Sur la figure, le motif de la chaîne X est –CF2–CF2– : c'est le Téflon (PTFE), dont le monomère est CF2=CF2. Le motif de la chaîne Y est –CH2–CHCl– : c'est le PVC, dont le monomère est le chlorure de vinyle (CH2=CHCl). I est vraie. II est fausse : le polymère des revêtements antiadhésifs est X (Téflon) ; le PVC sert aux profilés de fenêtres et aux tuyaux. III est vraie : dans les deux monomères, la double liaison C=C s'ouvre et les monomères s'unissent bout à bout par des liaisons covalentes. Ne pas voir les atomes de Cl de la chaîne et prendre Y pour du Téflon est une erreur typique.",
        "ru": "На рисунке повторяющееся звено цепи X — –CF2–CF2–; это тефлон (ПТФЭ), мономер которого CF2=CF2. Повторяющееся звено цепи Y — –CH2–CHCl–; это ПВХ, мономер которого винилхлорид (CH2=CHCl). I верно. II неверно: антипригарным покрытием служит полимер X (тефлон), а ПВХ применяют для оконных профилей и труб. III верно: в обоих мономерах раскрывается двойная связь C=C, и мономеры соединяются ковалентными связями в цепь. Не заметить атомы Cl в цепи и принять Y за тефлон — типичная ошибка.",
        "ar": "في الشكل الوحدة المتكررة في السلسلة X هي –CF2–CF2–، وهذا هو التفلون (PTFE) الذي مونومره CF2=CF2. والوحدة المتكررة في السلسلة Y هي –CH2–CHCl–، وهذا هو PVC الذي مونومره كلوريد الفينيل (CH2=CHCl). العبارة I صحيحة. العبارة II خاطئة: البوليمر المستخدم في الطلاء غير اللاصق هو X (التفلون)، أما PVC فيُستخدم في إطارات النوافذ والأنابيب. العبارة III صحيحة: في كلا المونومرين تنفتح الرابطة الثنائية C=C وترتبط المونومرات طرفًا بطرف بروابط تساهمية. ومن الأخطاء الشائعة إغفال ذرات Cl في السلسلة وعدّ Y تفلونًا.",
        "zh": "图中 X 链的重复单元为 –CF2–CF2–，即单体为 CF2=CF2 的特氟龙(PTFE)；Y 链的重复单元为 –CH2–CHCl–，即单体为氯乙烯(CH2=CHCl)的 PVC。I 正确。II 错误：用作不粘涂层的是 X(特氟龙)，PVC 用于门窗型材和管道。III 正确：两种单体中的 C=C 双键都打开，单体以共价键首尾相连。忽略链中的 Cl 原子而把 Y 当作特氟龙，是典型错误。",
        "ku": "Di şiklê de yekeya dubarebûyî ya zincîra X –CF2–CF2– ye; ev Teflon (PTFE) e ku monomera wê CF2=CF2 ye. Yekeya dubarebûyî ya zincîra Y –CH2–CHCl– ye; ev PVC ye ku monomera wê vînîl klorîd (CH2=CHCl) e. I rast e. II şaş e: polîmera ku di rûpoşa nezeliqok de tê bikaranîn X (Teflon) e; PVC di profîlên pencereyan û boriyan de tê bikaranîn. III rast e: di herdu monomeran de girêdana ducar a C=C vedibe û monomer bi girêdanên kovalent li pey hev tên girêdan. Nedîtina atomên Cl ên di zincîrê de û hesibandina Y wek Teflon xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 230,
        "markup": "<text x=\"22\" y=\"62\" class=\"qf-big\">X</text><line x1=\"62\" y1=\"57\" x2=\"86\" y2=\"57\" class=\"qf-line\"/><text x=\"95\" y=\"62\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"104\" y1=\"57\" x2=\"151\" y2=\"57\" class=\"qf-line\"/><line x1=\"95\" y1=\"48\" x2=\"95\" y2=\"33\" class=\"qf-line\"/><text x=\"95\" y=\"29\" text-anchor=\"middle\">F</text><line x1=\"95\" y1=\"66\" x2=\"95\" y2=\"81\" class=\"qf-line\"/><text x=\"95\" y=\"95\" text-anchor=\"middle\">F</text><text x=\"160\" y=\"62\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"169\" y1=\"57\" x2=\"216\" y2=\"57\" class=\"qf-line\"/><line x1=\"160\" y1=\"48\" x2=\"160\" y2=\"33\" class=\"qf-line\"/><text x=\"160\" y=\"29\" text-anchor=\"middle\">F</text><line x1=\"160\" y1=\"66\" x2=\"160\" y2=\"81\" class=\"qf-line\"/><text x=\"160\" y=\"95\" text-anchor=\"middle\">F</text><text x=\"225\" y=\"62\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"234\" y1=\"57\" x2=\"281\" y2=\"57\" class=\"qf-line\"/><line x1=\"225\" y1=\"48\" x2=\"225\" y2=\"33\" class=\"qf-line\"/><text x=\"225\" y=\"29\" text-anchor=\"middle\">F</text><line x1=\"225\" y1=\"66\" x2=\"225\" y2=\"81\" class=\"qf-line\"/><text x=\"225\" y=\"95\" text-anchor=\"middle\">F</text><text x=\"290\" y=\"62\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"290\" y1=\"48\" x2=\"290\" y2=\"33\" class=\"qf-line\"/><text x=\"290\" y=\"29\" text-anchor=\"middle\">F</text><line x1=\"290\" y1=\"66\" x2=\"290\" y2=\"81\" class=\"qf-line\"/><text x=\"290\" y=\"95\" text-anchor=\"middle\">F</text><line x1=\"299\" y1=\"57\" x2=\"330\" y2=\"57\" class=\"qf-line\"/><line x1=\"10\" y1=\"118\" x2=\"350\" y2=\"118\" class=\"qf-dash\"/><text x=\"22\" y=\"182\" class=\"qf-big\">Y</text><line x1=\"62\" y1=\"177\" x2=\"86\" y2=\"177\" class=\"qf-line\"/><text x=\"95\" y=\"182\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"104\" y1=\"177\" x2=\"151\" y2=\"177\" class=\"qf-line\"/><line x1=\"95\" y1=\"168\" x2=\"95\" y2=\"153\" class=\"qf-line\"/><text x=\"95\" y=\"149\" text-anchor=\"middle\">H</text><line x1=\"95\" y1=\"186\" x2=\"95\" y2=\"201\" class=\"qf-line\"/><text x=\"95\" y=\"215\" text-anchor=\"middle\">H</text><text x=\"160\" y=\"182\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"169\" y1=\"177\" x2=\"216\" y2=\"177\" class=\"qf-line\"/><line x1=\"160\" y1=\"168\" x2=\"160\" y2=\"153\" class=\"qf-line\"/><text x=\"160\" y=\"149\" text-anchor=\"middle\">H</text><line x1=\"160\" y1=\"186\" x2=\"160\" y2=\"201\" class=\"qf-line\"/><text x=\"160\" y=\"215\" text-anchor=\"middle\">Cl</text><text x=\"225\" y=\"182\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"234\" y1=\"177\" x2=\"281\" y2=\"177\" class=\"qf-line\"/><line x1=\"225\" y1=\"168\" x2=\"225\" y2=\"153\" class=\"qf-line\"/><text x=\"225\" y=\"149\" text-anchor=\"middle\">H</text><line x1=\"225\" y1=\"186\" x2=\"225\" y2=\"201\" class=\"qf-line\"/><text x=\"225\" y=\"215\" text-anchor=\"middle\">H</text><text x=\"290\" y=\"182\" text-anchor=\"middle\" class=\"qf-strong\">C</text><line x1=\"290\" y1=\"168\" x2=\"290\" y2=\"153\" class=\"qf-line\"/><text x=\"290\" y=\"149\" text-anchor=\"middle\">H</text><line x1=\"290\" y1=\"186\" x2=\"290\" y2=\"201\" class=\"qf-line\"/><text x=\"290\" y=\"215\" text-anchor=\"middle\">Cl</text><line x1=\"299\" y1=\"177\" x2=\"330\" y2=\"177\" class=\"qf-line\"/>"
      }
    },
    {
      "id": "u10-twin03",
      "stem": {
        "tr": "Sabun ve deterjanlarla ilgili\nI. Sabunlar bitkisel veya hayvansal yağların NaOH ya da KOH ile tepkimesinden elde edilir.\nII. Deterjanlar sert suda sabunlara göre daha iyi temizler.\nIII. Sabunlar asidik suda (pH değeri düşük ortamda) daha etkili temizler.\nyargılarından hangileri doğrudur?",
        "en": "Regarding soaps and detergents:\nI. Soaps are obtained by reacting vegetable or animal fats with NaOH or KOH.\nII. Detergents clean better than soaps in hard water.\nIII. Soaps clean more effectively in acidic water (low pH).\nWhich of these statements are correct?",
        "de": "Zu Seifen und Detergenzien:\nI. Seifen entstehen durch Reaktion pflanzlicher oder tierischer Fette mit NaOH oder KOH.\nII. Detergenzien reinigen in hartem Wasser besser als Seifen.\nIII. Seifen reinigen in saurem Wasser (niedriger pH-Wert) wirksamer.\nWelche Aussagen sind richtig?",
        "fr": "À propos des savons et des détergents :\nI. Les savons s’obtiennent par réaction de graisses végétales ou animales avec NaOH ou KOH.\nII. Les détergents nettoient mieux que les savons en eau dure.\nIII. Les savons nettoient plus efficacement en eau acide (pH bas).\nLesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения о мыле и синтетических моющих средствах:\nI. Мыло получают реакцией растительных или животных жиров с NaOH или KOH.\nII. В жёсткой воде синтетические моющие средства моют лучше, чем мыло.\nIII. В кислой воде (при низком pH) мыло моет эффективнее.\nКакие из них верны?",
        "ar": "فيما يتعلق بالصابون والمنظفات:\nI. يُحضَّر الصابون من تفاعل الدهون النباتية أو الحيوانية مع NaOH أو KOH.\nII. تنظف المنظفات في الماء العسر أفضل من الصابون.\nIII. ينظف الصابون بفعالية أكبر في الماء الحمضي (ذي الرقم الهيدروجيني المنخفض).\nأيّ العبارات صحيحة؟",
        "zh": "关于肥皂和洗涤剂：\nI. 肥皂由植物或动物油脂与 NaOH 或 KOH 反应制得。\nII. 在硬水中洗涤剂比肥皂去污效果好。\nIII. 肥皂在酸性水(pH 低)中去污效果更好。\n以上说法中哪些正确？",
        "ku": "Derbarê sabûn û deterjanan de:\nI. Sabûn ji reaksiyona rûnên riwekî an heywanî bi NaOH an KOH re têne bidestxistin.\nII. Deterjan di ava hişk de ji sabûnan baştir paqij dikin.\nIII. Sabûn di ava asîdî de (pH nizm) bi bandortir paqij dikin.\nKîjan ji van gotinan rast in?"
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
        "ru": "I верно: реакция жиров с сильным основанием (омыление) даёт мыло и глицерин; с NaOH получается твёрдое мыло, с KOH — мягкое. II верно: мыло осаждается ионами Ca2+ и Mg2+ жёсткой воды, а соли синтетических моющих средств с этими ионами растворимы. III неверно: в кислой среде анион мыла присоединяет H+ и превращается в нерастворимую в воде жирную кислоту, моющая способность снижается; мыло хорошо действует в слабощелочной среде. Верны I и II.",
        "ar": "العبارة I صحيحة: تفاعل الدهون مع قاعدة قوية (التصبن) يعطي الصابون والغليسرين؛ ويعطي NaOH صابونًا صلبًا وKOH صابونًا طريًا. العبارة II صحيحة: يترسب الصابون مع أيونات Ca2+ وMg2+ في الماء العسر، بينما تذوب الأملاح التي تكوّنها المنظفات مع هذه الأيونات. العبارة III خاطئة: في الوسط الحمضي يكتسب أنيون الصابون H+ ويتحول إلى حمض دهني لا يذوب في الماء فتقل قدرته على التنظيف؛ ويعمل الصابون جيدًا في الوسط القاعدي الضعيف. العبارتان الصحيحتان هما I وII.",
        "zh": "I 正确：油脂与强碱反应（皂化）生成肥皂和甘油；NaOH 得硬皂，KOH 得软皂。II 正确：肥皂会与硬水中的 Ca2+、Mg2+ 生成沉淀，而洗涤剂与这些离子形成的盐可溶。III 错误：在酸性介质中肥皂阴离子结合 H+ 变成不溶于水的脂肪酸，去污能力下降；肥皂在弱碱性介质中效果好。正确的是 I 和 II。",
        "ku": "I rast e: reaksiyona rûnan bi bazeke bihêz re (sabûnbûn) sabûn û glîserîn dide; NaOH sabûna hişk, KOH sabûna nerm çêdike. II rast e: sabûn bi Ca2+ û Mg2+ yên ava hişk re dinişe, lê xwêyên ku deterjan bi van îyonan re çêdikin dihelin. III şaş e: di derdora asîdî de anyona sabûnê H+ werdigire û dibe asîdeke rûnî ya ku di avê de nahele, loma hêza paqijkirinê kêm dibe; sabûn di derdora hinekî bazîk de baş dixebite. Gotinên rast I û II ne."
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
        "zh": "用硬水洗手时，肥皂不易起泡，洗手池表面形成白色黏性沉积物。产生这一现象的主要原因是下列哪一项？",
        "ku": "Dema dest bi ava hişk têne şuştin, sabûn baş kef nake û li ser lavaboyê niştekeke spî û zeliqok çêdibe. Sedema bingehîn a vê dîtinê kîjan e?"
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
          "ku": "pH-ya ava hişk pir nizm e (bi xurtî asîdî ye)"
        },
        {
          "tr": "Sabunun Na+ iyonlarının suda çözünmeyen bir bileşik oluşturması",
          "en": "The Na+ ions of the soap form a water-insoluble compound",
          "de": "Die Na+-Ionen der Seife bilden eine wasserunlösliche Verbindung",
          "fr": "Les ions Na+ du savon forment un composé insoluble dans l’eau",
          "ru": "Ионы Na+ мыла образуют нерастворимое в воде соединение",
          "ar": "تكوّن أيونات Na+ في الصابون مركّبًا لا يذوب في الماء",
          "zh": "肥皂中的 Na+ 离子形成不溶于水的化合物",
          "ku": "Îyonên Na+ yên sabûnê pêkhateyeke nehelbar çêdikin"
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
        "ru": "Жёсткость воды обусловлена ионами Ca2+ и Mg2+. Анионы мыла (например, C17H35COO-) образуют с ними нерастворимые соли кальция и магния, которые выпадают в виде белого налёта, и мыло не пенится. Ион Na+ даёт растворимые соли, поэтому налёт вызывает не он. Жёсткая вода не кислая, а глицерин — побочный продукт производства мыла, при мытье он не образуется.",
        "ar": "ينتج عسر الماء عن أيونات Ca2+ وMg2+ فيه. تكوّن أنيونات الصابون (مثل C17H35COO-) معها أملاح كالسيوم/مغنيسيوم لا تذوب في الماء فتترسب على شكل رواسب بيضاء ولا يستطيع الصابون أن يُرغي. أيون Na+ يكوّن أملاحًا ذائبة فليس سببًا للراسب. والماء العسر ليس حمضيًا، والغليسرين ناتج ثانوي لصناعة الصابون ولا يتكون أثناء الغسل.",
        "zh": "水的硬度来自其中的 Ca2+ 和 Mg2+。肥皂阴离子(如 C17H35COO-)与它们形成不溶于水的钙/镁盐，以白色沉淀析出，肥皂因此不能起泡。Na+ 形成的是可溶性盐，不是沉淀的原因。硬水并不呈酸性；甘油是制皂的副产物，洗涤时不会生成。",
        "ku": "Hişkiya avê ji îyonên Ca2+ û Mg2+ yên di avê de tê. Anyonên sabûnê (mînak C17H35COO-) bi van îyonan re xwêyên kalsiyûm/magnezyûmê yên nehelbar çêdikin; ev xwê wek niştekeke spî dinişin û sabûn nikare kef bike. Îyona Na+ xwêyên helbar çêdike, ji ber vê yekê ne sedema niştekê ye. Ava hişk ne asîdî ye; glîserîn jî hilbera alî ya çêkirina sabûnê ye, di şuştinê de çênabe."
      }
    },
    {
      "id": "u10-twin05",
      "stem": {
        "tr": "Aşağıdaki polimer – kullanım alanı eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following polymer – use pairings is incorrect?",
        "de": "Welche der folgenden Zuordnungen Polymer – Verwendung ist falsch?",
        "fr": "Laquelle des associations polymère – utilisation suivantes est incorrecte ?",
        "ru": "Какое из соответствий «полимер — область применения» указано неверно?",
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
          "ru": "ПЭТ — автомобильная шина",
          "ar": "PET – إطار السيارة",
          "zh": "PET – 汽车轮胎",
          "ku": "PET – tekera otomobîlê"
        },
        {
          "tr": "PVC – pencere profili",
          "en": "PVC – window frame profile",
          "de": "PVC – Fensterprofil",
          "fr": "PVC – profilé de fenêtre",
          "ru": "ПВХ — оконный профиль",
          "ar": "PVC – إطارات النوافذ",
          "zh": "PVC – 窗框型材",
          "ku": "PVC – profîla pencereyê"
        },
        {
          "tr": "Polietilen (PE) – market poşeti",
          "en": "Polyethylene (PE) – shopping bag",
          "de": "Polyethylen (PE) – Einkaufstüte",
          "fr": "Polyéthylène (PE) – sac de caisse",
          "ru": "Полиэтилен (ПЭ) — пакет для покупок",
          "ar": "البولي إيثيلين (PE) – كيس التسوق",
          "zh": "聚乙烯(PE) – 购物袋",
          "ku": "Polîetîlen (PE) – kîsikê bazarê"
        },
        {
          "tr": "Kevlar – kurşun geçirmez yelek",
          "en": "Kevlar – bulletproof vest",
          "de": "Kevlar – kugelsichere Weste",
          "fr": "Kevlar – gilet pare-balles",
          "ru": "Кевлар — бронежилет",
          "ar": "الكيفلار – السترة الواقية من الرصاص",
          "zh": "凯夫拉 – 防弹衣",
          "ku": "Kevlar – êleka dijgule"
        },
        {
          "tr": "Polistiren (PS) – köpük (strafor) yalıtım ve ambalaj malzemesi",
          "en": "Polystyrene (PS) – foam insulation and packaging material",
          "de": "Polystyrol (PS) – Schaumstoff-Dämm- und Verpackungsmaterial",
          "fr": "Polystyrène (PS) – mousse isolante et matériau d’emballage",
          "ru": "Полистирол (ПС) — пенопласт для теплоизоляции и упаковки",
          "ar": "البوليستيرين (PS) – الرغوة البيضاء (الفلين الصناعي) للعزل والتغليف",
          "zh": "聚苯乙烯(PS) – 泡沫保温与包装材料",
          "ku": "Polîstîren (PS) – materyala kefî ya îzolasyon û ambalajê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "PET su ve meşrubat şişelerinde kullanılan, sert ve şeffaf bir termoplastiktir; esnek değildir. Araba lastiklerinde elastik yapısı nedeniyle (doğal veya sentetik) kauçuk kullanılır. Diğer eşleştirmeler doğrudur: PVC dayanıklılığı nedeniyle pencere profillerinde, PE ucuz ve esnek olduğu için poşetlerde, Kevlar çok yüksek dayanımı nedeniyle çelik yeleklerde, PS köpük hâlinde yalıtım ve ambalajda kullanılır.",
        "en": "PET is a rigid, transparent thermoplastic used for water and soft-drink bottles; it is not elastic. Car tyres use (natural or synthetic) rubber because of its elasticity. The other pairings are correct: PVC is used for window profiles because it is durable, PE for bags because it is cheap and flexible, Kevlar for bulletproof vests because of its very high strength, and PS as foam for insulation and packaging.",
        "de": "PET ist ein harter, durchsichtiger Thermoplast für Wasser- und Getränkeflaschen; er ist nicht elastisch. Für Autoreifen wird wegen seiner Elastizität (natürlicher oder synthetischer) Kautschuk verwendet. Die übrigen Zuordnungen stimmen: PVC wegen seiner Beständigkeit für Fensterprofile, PE als billiges, flexibles Material für Tüten, Kevlar wegen seiner sehr hohen Festigkeit für Schutzwesten, PS als Schaumstoff für Dämmung und Verpackung.",
        "fr": "Le PET est un thermoplastique rigide et transparent utilisé pour les bouteilles d’eau et de boissons ; il n’est pas élastique. Les pneus utilisent du caoutchouc (naturel ou synthétique) pour son élasticité. Les autres associations sont correctes : le PVC pour les profilés de fenêtre grâce à sa durabilité, le PE pour les sacs car il est bon marché et souple, le Kevlar pour les gilets pare-balles grâce à sa très grande résistance, le PS en mousse pour l’isolation et l’emballage.",
        "ru": "ПЭТ — жёсткий прозрачный термопласт, из которого делают бутылки для воды и напитков; он не эластичен. Для шин используют (натуральный или синтетический) каучук благодаря его эластичности. Остальные соответствия верны: ПВХ благодаря прочности применяют в оконных профилях, ПЭ как дешёвый и гибкий материал — в пакетах, кевлар благодаря очень высокой прочности — в бронежилетах, ПС в виде пенопласта — для изоляции и упаковки.",
        "ar": "PET لدن حراري صلب وشفاف يُستخدم في قوارير الماء والمشروبات الغازية، وهو غير مرن. أما إطارات السيارات فيُستخدم فيها المطاط (الطبيعي أو الصناعي) لمرونته. وبقية المزاوجات صحيحة: PVC لمتانته في إطارات النوافذ، وPE لرخصه ومرونته في الأكياس، والكيفلار لمتانته الفائقة في السترات الواقية، وPS على شكل رغوة في العزل والتغليف.",
        "zh": "PET 是用于饮用水和饮料瓶的硬质透明热塑性塑料，没有弹性。汽车轮胎因需要弹性而使用（天然或合成）橡胶。其余配对均正确：PVC 因耐用用于窗框型材，PE 因便宜柔韧用于购物袋，凯夫拉因强度极高用于防弹衣，PS 以泡沫形式用于保温和包装。",
        "ku": "PET termoplastîkeke hişk û zelal e ku di şûşeyên av û vexwarinan de tê bikaranîn; ne elastîk e. Di tekerên otomobîlan de ji ber elastîkbûna wê kauçûk (xwezayî an sentetîk) tê bikaranîn. Cotkirinên din rast in: PVC ji ber xurtbûnê di profîlên pencereyan de, PE ji ber erzanî û nermbûnê di kîsikan de, Kevlar ji ber xurtiya pir bilind di êlekên dijgule de, PS jî wek kef di îzolasyon û ambalajê de tê bikaranîn."
      }
    },
    {
      "id": "u10-twin06",
      "stem": {
        "tr": "Tabloda dört su örneğinde çözünmüş olarak bulunan başlıca iyonlar verilmiştir (iyon derişimleri musluk suyu düzeyindedir).\nI. L ve N örneklerinde sabun, suda çözünmeyen tuzlar oluşturarak tortu bırakır.\nII. M örneğinde sabun, Na+ iyonları nedeniyle köpürmez.\nIII. Deterjan dört örneğin hepsinde köpürür.\nyargılarından hangileri doğrudur?",
        "en": "The table lists the main ions dissolved in four water samples (ion concentrations are at tap-water level). Which of the following statements are true?\nI. In samples L and N, soap forms insoluble salts and leaves a scum.\nII. In sample M, soap does not lather because of the Na+ ions.\nIII. Detergent lathers in all four samples.",
        "de": "Die Tabelle nennt die wichtigsten gelösten Ionen in vier Wasserproben (Ionenkonzentrationen wie in Leitungswasser). Welche Aussagen sind richtig?\nI. In den Proben L und N bildet Seife unlösliche Salze und hinterlässt einen Belag.\nII. In Probe M schäumt Seife wegen der Na+-Ionen nicht.\nIII. Ein Detergens schäumt in allen vier Proben.",
        "fr": "Le tableau donne les principaux ions dissous dans quatre échantillons d'eau (concentrations du niveau de l'eau du robinet). Quelles affirmations sont vraies ?\nI. Dans les échantillons L et N, le savon forme des sels insolubles et laisse un dépôt.\nII. Dans l'échantillon M, le savon ne mousse pas à cause des ions Na+.\nIII. Le détergent mousse dans les quatre échantillons.",
        "ru": "В таблице указаны основные ионы, растворённые в четырёх пробах воды (концентрации ионов — как в водопроводной воде). Какие утверждения верны?\nI. В пробах L и N мыло образует нерастворимые соли и даёт налёт.\nII. В пробе M мыло не пенится из-за ионов Na+.\nIII. Синтетическое моющее средство пенится во всех четырёх пробах.",
        "ar": "يبيّن الجدول الأيونات الرئيسة الذائبة في أربع عينات من الماء (تراكيز الأيونات بمستوى ماء الصنبور). أيّ العبارات الآتية صحيحة؟\nI. في العينتين L وN يكوّن الصابون أملاحًا غير ذائبة ويترك راسبًا.\nII. في العينة M لا يُرغي الصابون بسبب أيونات Na+.\nIII. يُرغي المنظف الصناعي في العينات الأربع جميعها.",
        "zh": "表中列出了四种水样中溶解的主要离子（离子浓度与自来水相当）。下列说法中哪些正确？\nI. 在 L 和 N 水样中，肥皂会生成不溶性盐并留下沉渣。\nII. 在 M 水样中，肥皂因 Na+ 离子而不起泡。\nIII. 洗涤剂在四种水样中都能起泡。",
        "ku": "Di tabloyê de îyonên sereke yên ku di çar nimûneyên avê de helandî ne hatine dayîn (tîrbûna îyonan di asta ava lûleyê de ye). Kîjan ji van gotinan rast in?\nI. Di nimûneyên L û N de sabûn xwêyên ku di avê de nahelin çêdike û niştek dihêle.\nII. Di nimûneya M de sabûn ji ber îyonên Na+ kef nade.\nIII. Deterjan di her çar nimûneyan de jî kef dide."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
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
        "tr": "Suyun sertliğine Ca2+ ve Mg2+ iyonları yol açar. Tablodaki L örneğinde Ca2+, N örneğinde Mg2+ bulunduğundan bu iki örnek serttir; sabun anyonları bu iyonlarla suda çözünmeyen kalsiyum ve magnezyum tuzları oluşturup tortu bırakır; I doğrudur. M örneğindeki Na+ iyonu sabunla çözünen tuz oluşturur, sertlik yapmaz; sabun M'de de köpürür; II yanlıştır. Deterjanların Ca2+ ve Mg2+ ile oluşturduğu tuzlar suda çözündüğü için deterjan sert sularda da köpürür; III doğrudur. Suda çözünmüş her iyonu sertlik nedeni sanmak tipik bir hatadır.",
        "en": "Water hardness is caused by Ca2+ and Mg2+ ions. Sample L in the table contains Ca2+ and sample N contains Mg2+, so these two samples are hard; soap anions form insoluble calcium and magnesium salts with these ions and leave a scum; I is true. The Na+ ion in sample M forms a soluble salt with soap and does not cause hardness; soap lathers in M too; II is false. Because the salts that detergents form with Ca2+ and Mg2+ are soluble, detergent lathers in hard water as well; III is true. Thinking that every dissolved ion causes hardness is a typical mistake.",
        "de": "Die Wasserhärte wird durch Ca2+- und Mg2+-Ionen verursacht. Probe L in der Tabelle enthält Ca2+ und Probe N Mg2+, daher sind diese beiden Proben hart; Seifenanionen bilden mit diesen Ionen unlösliche Calcium- und Magnesiumsalze und hinterlassen einen Belag; I ist richtig. Das Na+-Ion in Probe M bildet mit Seife ein lösliches Salz und verursacht keine Härte; Seife schäumt auch in M; II ist falsch. Da die Salze, die Detergenzien mit Ca2+ und Mg2+ bilden, löslich sind, schäumen Detergenzien auch in hartem Wasser; III ist richtig. Ein typischer Fehler ist, jedes gelöste Ion für eine Ursache der Härte zu halten.",
        "fr": "La dureté de l'eau est due aux ions Ca2+ et Mg2+. L'échantillon L du tableau contient Ca2+ et l'échantillon N contient Mg2+ : ces deux eaux sont dures ; les anions du savon forment avec ces ions des sels de calcium et de magnésium insolubles et laissent un dépôt ; I est vraie. L'ion Na+ de l'échantillon M forme un sel soluble avec le savon et ne cause pas de dureté ; le savon mousse aussi dans M ; II est fausse. Comme les sels que forment les détergents avec Ca2+ et Mg2+ sont solubles, le détergent mousse aussi en eau dure ; III est vraie. Croire que tout ion dissous rend l'eau dure est une erreur typique.",
        "ru": "Жёсткость воды обусловлена ионами Ca2+ и Mg2+. Проба L в таблице содержит Ca2+, а проба N — Mg2+, поэтому эти две пробы жёсткие; анионы мыла образуют с этими ионами нерастворимые соли кальция и магния и дают налёт; I верно. Ион Na+ в пробе M образует с мылом растворимую соль и не создаёт жёсткости; в M мыло тоже пенится; II неверно. Соли, которые синтетические моющие средства образуют с Ca2+ и Mg2+, растворимы, поэтому такие средства пенятся и в жёсткой воде; III верно. Считать причиной жёсткости любой растворённый ион — типичная ошибка.",
        "ar": "تنتج عسرة الماء عن أيونات Ca2+ وMg2+. تحتوي العينة L في الجدول على Ca2+ والعينة N على Mg2+، لذا فهاتان العينتان عسرتان؛ وتكوّن أنيونات الصابون مع هذه الأيونات أملاح كالسيوم ومغنيسيوم غير ذائبة وتترك راسبًا؛ العبارة I صحيحة. أما أيون Na+ في العينة M فيكوّن مع الصابون ملحًا ذائبًا ولا يسبب العسرة، فيُرغي الصابون في M أيضًا؛ العبارة II خاطئة. ولأن الأملاح التي تكوّنها المنظفات الصناعية مع Ca2+ وMg2+ ذائبة، يُرغي المنظف في الماء العسر أيضًا؛ العبارة III صحيحة. ومن الأخطاء الشائعة الظن أن كل أيون ذائب يسبب العسرة.",
        "zh": "水的硬度由 Ca2+ 和 Mg2+ 离子引起。表中 L 水样含 Ca2+，N 水样含 Mg2+，所以这两种水是硬水；肥皂阴离子与这些离子生成不溶性的钙盐和镁盐，留下沉渣；I 正确。M 水样中的 Na+ 与肥皂生成可溶性盐，不造成硬度，肥皂在 M 中也能起泡；II 错误。洗涤剂与 Ca2+、Mg2+ 生成的盐可溶，所以洗涤剂在硬水中也能起泡；III 正确。认为任何溶解的离子都会造成硬度，是典型错误。",
        "ku": "Hişkbûna avê ji îyonên Ca2+ û Mg2+ tê. Di tabloyê de nimûneya L Ca2+ û nimûneya N Mg2+ dihewîne, ji ber vê yekê ev herdu nimûne hişk in; anyonên sabûnê bi van îyonan re xwêyên kalsiyûm û magnezyûmê yên ku nahelin çêdikin û niştek dihêlin; I rast e. Îyona Na+ ya di nimûneya M de bi sabûnê re xwêyeke helbar çêdike û hişkbûnê çênake; sabûn di M de jî kef dide; II şaş e. Ji ber ku xwêyên ku deterjan bi Ca2+ û Mg2+ re çêdikin dihelin, deterjan di ava hişk de jî kef dide; III rast e. Hesibandina her îyoneke helandî wek sedema hişkbûnê xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Örnek",
            "en": "Sample",
            "de": "Probe",
            "fr": "Échantillon",
            "ru": "Проба",
            "ar": "العينة",
            "zh": "水样",
            "ku": "Nimûne"
          },
          {
            "tr": "Çözünmüş başlıca iyonlar",
            "en": "Main dissolved ions",
            "de": "Wichtigste gelöste Ionen",
            "fr": "Principaux ions dissous",
            "ru": "Основные растворённые ионы",
            "ar": "الأيونات الذائبة الرئيسة",
            "zh": "主要溶解离子",
            "ku": "Îyonên sereke yên helandî"
          }
        ],
        "rows": [
          [
            "K",
            {
              "tr": "Yok (damıtık su)",
              "en": "None (distilled water)",
              "de": "Keine (destilliertes Wasser)",
              "fr": "Aucun (eau distillée)",
              "ru": "Нет (дистиллированная вода)",
              "ar": "لا يوجد (ماء مقطر)",
              "zh": "无（蒸馏水）",
              "ku": "Tune (ava distîlekirî)"
            }
          ],
          [
            "L",
            "Ca2+, HCO3-"
          ],
          [
            "M",
            "Na+, Cl-"
          ],
          [
            "N",
            "Mg2+, SO4^2-"
          ]
        ]
      }
    },
    {
      "id": "u10-twin07",
      "stem": {
        "tr": "Şekilde, sulu ortamda bir kir taneciğinin sabun tanecikleri tarafından sarılmasıyla oluşan yapı modellenmiş; yapının farklı kısımları K, L ve M ile gösterilmiştir.\nI. K kısmı, su molekülleriyle etkileşen iyonik (polar) uçtur.\nII. L ve M kısımları apolardır.\nIII. M taneciği polar olduğu için sabun olmadan da suda kolayca dağılır.\nyargılarından hangileri doğrudur?",
        "en": "The figure models the structure formed when a dirt particle is surrounded by soap particles in water; different parts of the structure are marked K, L and M. Which of the following statements are true?\nI. Part K is the ionic (polar) end that interacts with water molecules.\nII. Parts L and M are nonpolar.\nIII. Particle M is polar, so it disperses easily in water even without soap.",
        "de": "Die Abbildung zeigt modellhaft die Struktur, die entsteht, wenn ein Schmutzteilchen in Wasser von Seifenteilchen umhüllt wird; verschiedene Teile sind mit K, L und M markiert. Welche Aussagen sind richtig?\nI. Teil K ist das ionische (polare) Ende, das mit Wassermolekülen wechselwirkt.\nII. Die Teile L und M sind unpolar.\nIII. Teilchen M ist polar und verteilt sich daher auch ohne Seife leicht in Wasser.",
        "fr": "La figure modélise la structure formée lorsqu'une particule de saleté est entourée de particules de savon dans l'eau ; différentes parties sont notées K, L et M. Quelles affirmations sont vraies ?\nI. La partie K est l'extrémité ionique (polaire) qui interagit avec les molécules d'eau.\nII. Les parties L et M sont apolaires.\nIII. La particule M est polaire, elle se disperse donc facilement dans l'eau même sans savon.",
        "ru": "На рисунке смоделирована структура, образующаяся в воде, когда частицу грязи окружают частицы мыла; разные части структуры обозначены K, L и M. Какие утверждения верны?\nI. Часть K — ионный (полярный) конец, взаимодействующий с молекулами воды.\nII. Части L и M неполярны.\nIII. Частица M полярна, поэтому легко распределяется в воде и без мыла.",
        "ar": "يمثّل الشكل البنية المتكوّنة عندما تحيط دقائق الصابون بدقيقة من الأوساخ في الماء، وقد رُمز إلى أجزاء البنية بـ K وL وM. أيّ العبارات الآتية صحيحة؟\nI. الجزء K هو الطرف الأيوني (القطبي) الذي يتفاعل مع جزيئات الماء.\nII. الجزآن L وM غير قطبيين.\nIII. الدقيقة M قطبية، لذا تنتشر في الماء بسهولة حتى دون صابون.",
        "zh": "图中模拟了在水中肥皂粒子包围一个污垢粒子所形成的结构，结构的不同部分分别用 K、L、M 表示。下列说法中哪些正确？\nI. K 部分是与水分子相互作用的离子性（极性）端。\nII. L 和 M 部分都是非极性的。\nIII. M 粒子是极性的，所以没有肥皂也能在水中轻易分散。",
        "ku": "Di şiklê de avahiya ku dema perçeyeke qirêjê di nav avê de ji aliyê perçeyên sabûnê ve tê dorpêçkirin çêdibe hatiye modelkirin; beşên cuda yên avahiyê bi K, L û M hatine nîşandan. Kîjan ji van gotinan rast in?\nI. Beşa K serê îyonî (polar) e ku bi molekulên avê re têkiliyê datîne.\nII. Beşên L û M apolar in.\nIII. Perçeya M polar e, ji ber vê yekê bê sabûn jî di avê de bi hêsanî belav dibe."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
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
        "tr": "Şekildeki yapı bir miseldir. Dışta suya dönük K kısımları sabun taneciklerinin –COO- Na+ içeren iyonik (polar, hidrofil) başlarıdır ve su molekülleriyle etkileşir; I doğrudur. L, uzun hidrokarbon kuyruğudur; M ise kuyrukların sardığı yağlı kir taneciğidir. Benzer benzeri çözdüğü için apolar kuyruklar apolar kire tutunur; II doğrudur. Kir apolar olduğundan suda kendiliğinden dağılmaz; ancak dışı polar başlarla kaplı misel içine alınınca suyla uzaklaştırılır; III yanlıştır. Başların kire, kuyrukların suya yöneldiğini sanmak tipik bir hatadır.",
        "en": "The structure in the figure is a micelle. The outer parts K, facing the water, are the ionic (polar, hydrophilic) heads of the soap particles containing –COO- Na+, and they interact with water molecules; I is true. L is the long hydrocarbon tail and M is the greasy dirt particle surrounded by the tails. Since like dissolves like, the nonpolar tails attach to the nonpolar dirt; II is true. Dirt is nonpolar, so it does not disperse in water by itself; only when it is enclosed in a micelle whose surface is covered with polar heads can it be washed away; III is false. Thinking that the heads point towards the dirt and the tails towards the water is a typical mistake.",
        "de": "Die Struktur in der Abbildung ist eine Mizelle. Die äußeren, dem Wasser zugewandten Teile K sind die ionischen (polaren, hydrophilen) Köpfe der Seifenteilchen mit –COO- Na+ und wechselwirken mit Wassermolekülen; I ist richtig. L ist der lange Kohlenwasserstoffschwanz, M das fettige Schmutzteilchen, das von den Schwänzen umschlossen wird. Da sich Gleiches in Gleichem löst, haften die unpolaren Schwänze am unpolaren Schmutz; II ist richtig. Schmutz ist unpolar und verteilt sich nicht von selbst in Wasser; erst eingeschlossen in eine Mizelle, deren Oberfläche aus polaren Köpfen besteht, wird er ausgewaschen; III ist falsch. Ein typischer Fehler ist anzunehmen, die Köpfe zeigten zum Schmutz und die Schwänze zum Wasser.",
        "fr": "La structure de la figure est une micelle. Les parties K, à l'extérieur et tournées vers l'eau, sont les têtes ioniques (polaires, hydrophiles) –COO- Na+ des particules de savon ; elles interagissent avec les molécules d'eau ; I est vraie. L est la longue queue hydrocarbonée et M la particule de saleté grasse entourée par les queues. Comme le semblable dissout le semblable, les queues apolaires s'accrochent à la saleté apolaire ; II est vraie. La saleté est apolaire et ne se disperse pas seule dans l'eau ; elle n'est entraînée qu'une fois enfermée dans une micelle dont la surface est couverte de têtes polaires ; III est fausse. Croire que les têtes sont tournées vers la saleté et les queues vers l'eau est une erreur typique.",
        "ru": "Структура на рисунке — мицелла. Внешние части K, обращённые к воде, — ионные (полярные, гидрофильные) головки частиц мыла с группой –COO- Na+; они взаимодействуют с молекулами воды; I верно. L — длинный углеводородный хвост, M — жирная частица грязи, окружённая хвостами. Подобное растворяется в подобном, поэтому неполярные хвосты прилипают к неполярной грязи; II верно. Грязь неполярна и сама в воде не распределяется; она смывается только внутри мицеллы, поверхность которой покрыта полярными головками; III неверно. Типичная ошибка — думать, что головки направлены к грязи, а хвосты к воде.",
        "ar": "البنية في الشكل هي مُذيلة (ميسيل). الأجزاء الخارجية K المتجهة نحو الماء هي الرؤوس الأيونية (القطبية، المحبة للماء) لدقائق الصابون التي تحتوي على –COO- Na+، وهي تتفاعل مع جزيئات الماء؛ العبارة I صحيحة. L هو الذيل الهيدروكربوني الطويل، وM دقيقة الأوساخ الدهنية التي تحيط بها الذيول. ولأن الشبيه يذيب الشبيه، تلتصق الذيول غير القطبية بالأوساخ غير القطبية؛ العبارة II صحيحة. الأوساخ غير قطبية فلا تنتشر في الماء من تلقاء نفسها، ولا تُزال إلا بعد احتجازها داخل مُذيلة سطحها مغطى برؤوس قطبية؛ العبارة III خاطئة. ومن الأخطاء الشائعة الظن أن الرؤوس تتجه نحو الأوساخ والذيول نحو الماء.",
        "zh": "图中的结构是胶束。朝向水的外侧 K 部分是肥皂粒子含 –COO- Na+ 的离子性（极性、亲水）头部，与水分子相互作用；I 正确。L 是长的烃链尾部，M 是被尾部包围的油性污垢粒子。根据相似相溶，非极性尾部附着在非极性污垢上；II 正确。污垢是非极性的，不会自行分散在水中，只有被包进表面覆盖着极性头部的胶束后才能被水冲走；III 错误。认为头部朝向污垢、尾部朝向水，是典型错误。",
        "ku": "Avahiya di şiklê de mîsel e. Beşên K yên li derve û ber bi avê ve, serên îyonî (polar, hîdrofîl) yên perçeyên sabûnê ne ku –COO- Na+ dihewînin û bi molekulên avê re têkiliyê datînin; I rast e. L dûvê dirêj ê hîdrokarbonî ye; M jî perçeya qirêja rûnî ye ku dûv wê dorpêç dikin. Ji ber ku wekhev wekhevê dihelîne, dûvên apolar bi qirêja apolar ve dizeliqin; II rast e. Qirêj apolar e û bi serê xwe di avê de belav nabe; tenê dema ku dikeve nav mîseleke ku rûyê wê bi serên polar hatiye pêçandin, bi avê tê rakirin; III şaş e. Hesibandina ku ser ber bi qirêjê û dûv ber bi avê ve ne xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 232,
        "markup": "<rect x=\"8\" y=\"8\" width=\"344\" height=\"216\" rx=\"10\" class=\"qf-water\"/><text x=\"22\" y=\"30\" class=\"qf-small\">{{water}}</text><circle cx=\"180\" cy=\"118\" r=\"34\" class=\"qf-hl2\"/><text x=\"180\" y=\"124\" text-anchor=\"middle\" class=\"qf-big\">M</text><line x1=\"214.2\" y1=\"106.9\" x2=\"246.6\" y2=\"96.4\" class=\"qf-line\"/><circle cx=\"254.2\" cy=\"93.9\" r=\"8\" class=\"qf-accent\"/><line x1=\"201.2\" y1=\"88.9\" x2=\"221.1\" y2=\"61.4\" class=\"qf-line\"/><circle cx=\"225.8\" cy=\"54.9\" r=\"8\" class=\"qf-accent\"/><line x1=\"180.0\" y1=\"82.0\" x2=\"180.0\" y2=\"48.0\" class=\"qf-line\"/><circle cx=\"180.0\" cy=\"40.0\" r=\"8\" class=\"qf-accent\"/><line x1=\"158.8\" y1=\"88.9\" x2=\"138.9\" y2=\"61.4\" class=\"qf-line\"/><circle cx=\"134.2\" cy=\"54.9\" r=\"8\" class=\"qf-accent\"/><line x1=\"145.8\" y1=\"106.9\" x2=\"113.4\" y2=\"96.4\" class=\"qf-line\"/><circle cx=\"105.8\" cy=\"93.9\" r=\"8\" class=\"qf-accent\"/><line x1=\"145.8\" y1=\"129.1\" x2=\"113.4\" y2=\"139.6\" class=\"qf-line\"/><circle cx=\"105.8\" cy=\"142.1\" r=\"8\" class=\"qf-accent\"/><line x1=\"158.8\" y1=\"147.1\" x2=\"138.9\" y2=\"174.6\" class=\"qf-line\"/><circle cx=\"134.2\" cy=\"181.1\" r=\"8\" class=\"qf-accent\"/><line x1=\"180.0\" y1=\"154.0\" x2=\"180.0\" y2=\"188.0\" class=\"qf-line\"/><circle cx=\"180.0\" cy=\"196.0\" r=\"8\" class=\"qf-accent\"/><line x1=\"201.2\" y1=\"147.1\" x2=\"221.1\" y2=\"174.6\" class=\"qf-line\"/><circle cx=\"225.8\" cy=\"181.1\" r=\"8\" class=\"qf-accent\"/><line x1=\"214.2\" y1=\"129.1\" x2=\"246.6\" y2=\"139.6\" class=\"qf-line\"/><circle cx=\"254.2\" cy=\"142.1\" r=\"8\" class=\"qf-accent\"/><line x1=\"263.2\" y1=\"90.9\" x2=\"286.2\" y2=\"79.9\" class=\"qf-line\"/><text x=\"290.2\" y=\"81.9\" class=\"qf-big\">K</text><line x1=\"129.6\" y1=\"134.4\" x2=\"99.6\" y2=\"174.4\" class=\"qf-line\"/><text x=\"85.6\" y=\"186.4\" class=\"qf-big\">L</text>",
        "labels": {
          "water": {
            "tr": "su",
            "en": "water",
            "de": "Wasser",
            "fr": "eau",
            "ru": "вода",
            "ar": "ماء",
            "zh": "水",
            "ku": "av"
          }
        }
      }
    },
    {
      "id": "u10-twin08",
      "stem": {
        "tr": "Formülü C17H35COONa olan sodyum stearat ile ilgili\nI. –COO- Na+ ucu polar (hidrofil) kısımdır.\nII. C17H35– hidrokarbon kuyruğu suda iyi çözünür.\nIII. Bu bileşik sert (katı) sabun sınıfındadır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding sodium stearate, formula C17H35COONa:\nI. The –COO- Na+ end is the polar (hydrophilic) part.\nII. The C17H35– hydrocarbon tail dissolves well in water.\nIII. This compound belongs to the hard (solid) soaps.\nWhich of these statements are correct?",
        "de": "Zu Natriumstearat mit der Formel C17H35COONa:\nI. Das –COO- Na+-Ende ist der polare (hydrophile) Teil.\nII. Der C17H35–-Kohlenwasserstoffschwanz löst sich gut in Wasser.\nIII. Diese Verbindung gehört zu den harten (festen) Seifen.\nWelche Aussagen sind richtig?",
        "fr": "À propos du stéarate de sodium, de formule C17H35COONa :\nI. L’extrémité –COO- Na+ est la partie polaire (hydrophile).\nII. La queue hydrocarbonée C17H35– se dissout bien dans l’eau.\nIII. Ce composé fait partie des savons durs (solides).\nLesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения о стеарате натрия C17H35COONa:\nI. Группа –COO- Na+ — полярная (гидрофильная) часть.\nII. Углеводородный хвост C17H35– хорошо растворяется в воде.\nIII. Это соединение относится к твёрдым мылам.\nКакие из них верны?",
        "ar": "فيما يتعلق بستيارات الصوديوم ذات الصيغة C17H35COONa:\nI. الطرف –COO- Na+ هو الجزء القطبي (المحب للماء).\nII. يذوب الذيل الهيدروكربوني C17H35– جيدًا في الماء.\nIII. ينتمي هذا المركّب إلى الصابون الصلب.\nأيّ العبارات صحيحة؟",
        "zh": "关于化学式为 C17H35COONa 的硬脂酸钠：\nI. –COO- Na+ 端是极性（亲水）部分。\nII. C17H35– 烃基尾部易溶于水。\nIII. 该化合物属于硬皂（固体皂）。\n以上说法中哪些正确？",
        "ku": "Derbarê stearata sodyûmê ya bi formula C17H35COONa de:\nI. Serê –COO- Na+ beşa polar (hîdrofîl) e.\nII. Dûvika hîdrokarbonî ya C17H35– di avê de baş dihele.\nIII. Ev pêkhate ji koma sabûnên hişk (qalibî) ye.\nKîjan ji van gotinan rast in?"
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
        "ru": "I верно: карбоксилатная группа (–COO-) ионная (полярная), поэтому взаимодействует с молекулами воды. II неверно: длинная углеводородная цепь из 17 атомов углерода неполярна и в воде не растворяется; она взаимодействует с жиром и грязью (гидрофобна). III верно: натриевые соли жирных кислот образуют твёрдое (белое, кусковое) мыло, калиевые — мягкое. Верны I и III.",
        "ar": "العبارة I صحيحة: طرف الكربوكسيلات (–COO-) أيوني/قطبي فيتفاعل مع جزيئات الماء. العبارة II خاطئة: السلسلة الهيدروكربونية الطويلة ذات 17 ذرة كربون غير قطبية ولا تذوب في الماء، بل تتفاعل مع الدهون والأوساخ (كارهة للماء). العبارة III صحيحة: أملاح الصوديوم للأحماض الدهنية تكوّن الصابون الصلب وأملاح البوتاسيوم تكوّن الصابون الطري. العبارتان الصحيحتان هما I وIII.",
        "zh": "I 正确：羧酸根(–COO-)端为离子性/极性，能与水分子相互作用。II 错误：含 17 个碳的长烃链为非极性，不溶于水，而与油脂和污垢相互作用（疏水）。III 正确：脂肪酸的钠盐形成硬皂，钾盐形成软皂。正确的是 I 和 III。",
        "ku": "I rast e: serê karboksîlatê (–COO-) îyonîk/polar e û bi molekulên avê re dikeve têkiliyê. II şaş e: zincîra hîdrokarbonî ya dirêj a bi 17 karbonan nepolar e û di avê de nahele; bi rûn û qirêjê re dikeve têkiliyê (hîdrofob). III rast e: xwêyên sodyûmê yên asîdên rûnî sabûnên hişk (spî, qalibî), xwêyên potasyûmê jî sabûnên nerm çêdikin. Gotinên rast I û III ne."
      }
    },
    {
      "id": "u10-twin09",
      "stem": {
        "tr": "İki zeytinyağı şişesinin etiketlerinde şu bilgiler yazmaktadır:\nX: Zeytinden yalnızca mekanik (fiziksel) yöntemlerle, hiçbir kimyasal işlem uygulanmadan elde edilmiştir; serbest yağ asitliği %0,5'tir.\nY: Rafine zeytinyağı ile natürel zeytinyağının karıştırılmasıyla elde edilmiştir.\nX ve Y yağları sırasıyla aşağıdakilerden hangisidir?",
        "en": "The labels of two olive-oil bottles state:\nX: Obtained from olives only by mechanical (physical) methods, with no chemical treatment; free acidity 0.5%.\nY: Obtained by blending refined olive oil with virgin olive oil.\nWhat are oils X and Y, respectively?",
        "de": "Auf den Etiketten zweier Olivenölflaschen steht:\nX: Nur durch mechanische (physikalische) Verfahren ohne chemische Behandlung aus Oliven gewonnen; Gehalt an freien Fettsäuren 0,5 %.\nY: Durch Mischen von raffiniertem Olivenöl mit nativem Olivenöl hergestellt.\nWelche Öle sind X und Y?",
        "fr": "Les étiquettes de deux bouteilles d’huile d’olive indiquent :\nX : obtenue à partir d’olives uniquement par des procédés mécaniques (physiques), sans aucun traitement chimique ; acidité libre de 0,5 %.\nY : obtenue en mélangeant de l’huile d’olive raffinée et de l’huile d’olive vierge.\nQue sont, respectivement, les huiles X et Y ?",
        "ru": "На этикетках двух бутылок оливкового масла написано:\nX: получено из оливок только механическими (физическими) методами, без химической обработки; кислотность 0,5 %.\nY: получено смешиванием рафинированного оливкового масла с натуральным.\nКакие это масла (X и Y соответственно)?",
        "ar": "كُتب على ملصقَي زجاجتين من زيت الزيتون:\nX: استُخرج من الزيتون بالطرق الميكانيكية (الفيزيائية) فقط دون أي معالجة كيميائية؛ نسبة الحموضة الحرة 0.5%.\nY: حُضّر بخلط زيت الزيتون المكرر مع زيت الزيتون البكر.\nما الزيتان X وY على الترتيب؟",
        "zh": "两瓶橄榄油的标签上写着：\nX：仅用机械（物理）方法从橄榄中获得，未经任何化学处理；游离酸度 0.5%。\nY：由精炼橄榄油与初榨橄榄油混合而成。\nX 和 Y 分别是哪种油？",
        "ku": "Li ser etîketên du şûşeyên rûnê zeytûnê ev agahî hene:\nX: Tenê bi rêbazên mekanîkî (fîzîkî), bê tu pêvajoya kîmyewî ji zeytûnê hatiye bidestxistin; asîdiya azad %0,5 e.\nY: Bi tevlîkirina rûnê zeytûnê yê rafînekirî û rûnê zeytûnê yê xwezayî hatiye bidestxistin.\nRûnên X û Y bi rêzê kîjan in?"
      },
      "options": [
        {
          "tr": "Riviera, natürel sızma",
          "en": "Riviera, extra virgin",
          "de": "Riviera, nativ extra",
          "fr": "Riviera, vierge extra",
          "ru": "«Ривьера», Extra Virgin",
          "ar": "ريفييرا، بكر ممتاز",
          "zh": "里维埃拉、特级初榨",
          "ku": "Riviera, paqij"
        },
        {
          "tr": "Rafine, riviera",
          "en": "Refined, Riviera",
          "de": "Raffiniert, Riviera",
          "fr": "Raffinée, Riviera",
          "ru": "Рафинированное, «Ривьера»",
          "ar": "مكرر، ريفييرا",
          "zh": "精炼、里维埃拉",
          "ku": "Rafînekirî, Riviera"
        },
        {
          "tr": "Natürel sızma, riviera",
          "en": "Extra virgin, Riviera",
          "de": "Nativ extra, Riviera",
          "fr": "Vierge extra, Riviera",
          "ru": "Extra Virgin, «Ривьера»",
          "ar": "بكر ممتاز، ريفييرا",
          "zh": "特级初榨、里维埃拉",
          "ku": "Paqij, Riviera"
        },
        {
          "tr": "Natürel sızma, rafine",
          "en": "Extra virgin, refined",
          "de": "Nativ extra, raffiniert",
          "fr": "Vierge extra, raffinée",
          "ru": "Extra Virgin, рафинированное",
          "ar": "بكر ممتاز، مكرر",
          "zh": "特级初榨、精炼",
          "ku": "Paqij, rafînekirî"
        },
        {
          "tr": "Riviera, rafine",
          "en": "Riviera, refined",
          "de": "Riviera, raffiniert",
          "fr": "Riviera, raffinée",
          "ru": "«Ривьера», рафинированное",
          "ar": "ريفييرا، مكرر",
          "zh": "里维埃拉、精炼",
          "ku": "Riviera, rafînekirî"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "X yağı yalnızca mekanik yolla, kimyasal işlem görmeden elde edilmiş ve asitliği düşüktür; bu, natürel sızma zeytinyağının tanımıdır. Y yağı rafine yağ ile natürel yağın karışımıdır; bu da riviera zeytinyağıdır. Rafine zeytinyağı tek başına kimyasal/fiziksel arıtma görmüş yağdır; içine natürel yağ katılmadığı için Y'yi tanımlamaz. Bu nedenle X natürel sızma, Y riviera zeytinyağıdır.",
        "en": "Oil X was obtained only mechanically, without chemical treatment, and has low acidity: this is the definition of extra virgin olive oil. Oil Y is a blend of refined and virgin oil: this is Riviera olive oil. Refined olive oil on its own is oil that has undergone purification and contains no added virgin oil, so it does not describe Y. Hence X is extra virgin and Y is Riviera olive oil.",
        "de": "Öl X wurde nur mechanisch, ohne chemische Behandlung gewonnen und hat eine niedrige Säure: Das ist natives Olivenöl extra. Öl Y ist eine Mischung aus raffiniertem und nativem Öl: Das ist Riviera-Olivenöl. Raffiniertes Olivenöl allein ist gereinigtes Öl ohne Zusatz von nativem Öl und beschreibt Y daher nicht. Also ist X nativ extra und Y Riviera-Olivenöl.",
        "fr": "L’huile X a été obtenue uniquement mécaniquement, sans traitement chimique, et a une faible acidité : c’est la définition de l’huile d’olive vierge extra. L’huile Y est un mélange d’huile raffinée et d’huile vierge : c’est l’huile d’olive Riviera. L’huile raffinée seule a subi une purification et ne contient pas d’huile vierge ajoutée ; elle ne décrit donc pas Y. Ainsi, X est vierge extra et Y est Riviera.",
        "ru": "Масло X получено только механическим способом, без химической обработки, и имеет низкую кислотность — это определение оливкового масла Extra Virgin. Масло Y — смесь рафинированного и натурального масла, то есть масло «Ривьера». Рафинированное масло само по себе прошло очистку и не содержит добавленного натурального масла, поэтому не подходит под описание Y. Значит, X — Extra Virgin, а Y — «Ривьера».",
        "ar": "الزيت X استُخرج بالطرق الميكانيكية فقط دون معالجة كيميائية وحموضته منخفضة، وهذا تعريف زيت الزيتون البكر الممتاز. والزيت Y خليط من زيت مكرر وزيت بكر، وهو زيت ريفييرا. أما زيت الزيتون المكرر وحده فهو زيت خضع للتنقية دون إضافة زيت بكر، فلا ينطبق على Y. إذن X بكر ممتاز وY ريفييرا.",
        "zh": "X 只用机械方法获得、未经化学处理且酸度低，这正是特级初榨橄榄油的定义。Y 是精炼油与初榨油的混合物，即里维埃拉橄榄油。单独的精炼橄榄油是经过精制、未掺初榨油的油，不符合 Y 的描述。因此 X 为特级初榨，Y 为里维埃拉橄榄油。",
        "ku": "Rûnê X tenê bi rêya mekanîkî, bê pêvajoya kîmyewî hatiye bidestxistin û asîdiya wî nizm e: ev pênaseya rûnê zeytûnê yê paqij e. Rûnê Y tevliheviya rûnê rafînekirî û rûnê xwezayî ye: ev rûnê zeytûnê yê Riviera ye. Rûnê rafînekirî bi tena serê xwe rûnekî paqijkirî ye û rûnê xwezayî lê nehatiye zêdekirin, ji ber vê yekê Y-yê rave nake. Ango X rûnê paqij, Y jî rûnê Riviera ye."
      }
    },
    {
      "id": "u10-twin10",
      "stem": {
        "tr": "Şekildeki grafik, aynı çiğ sütten alınan iki örneğe uygulanan X ve Y ısıl işlemlerinde sütün sıcaklığının zamanla değişimini göstermektedir (X işleminde süt en yüksek sıcaklıkta yaklaşık 15 saniye, Y işleminde yaklaşık 3 saniye tutulmuştur).\nI. X işlemi pastörizasyondur ve bu süt buzdolabında saklanmalıdır.\nII. Y işlemi uygulanmış süt, açılmamış aseptik ambalajında oda sıcaklığında aylarca bozulmadan kalabilir.\nIII. X işleminde sütteki mikroorganizmaların ve sporlarının tamamı yok edilir.\nyargılarından hangileri doğrudur?",
        "en": "The graph shows how the temperature of milk changes with time in heat treatments X and Y applied to two samples of the same raw milk (in X the milk is held at its highest temperature for about 15 seconds, in Y for about 3 seconds). Which of the following statements are true?\nI. Treatment X is pasteurization, and this milk must be kept in a refrigerator.\nII. Milk given treatment Y can keep for months at room temperature in its unopened aseptic package.\nIII. Treatment X destroys all the microorganisms and spores in the milk.",
        "de": "Das Diagramm zeigt den zeitlichen Temperaturverlauf der Milch bei den Wärmebehandlungen X und Y, die an zwei Proben derselben Rohmilch durchgeführt werden (bei X wird die Milch etwa 15 Sekunden, bei Y etwa 3 Sekunden auf der Höchsttemperatur gehalten). Welche Aussagen sind richtig?\nI. Behandlung X ist eine Pasteurisierung; diese Milch muss im Kühlschrank aufbewahrt werden.\nII. Mit Y behandelte Milch hält sich in der ungeöffneten aseptischen Verpackung monatelang bei Raumtemperatur.\nIII. Bei Behandlung X werden alle Mikroorganismen und Sporen in der Milch abgetötet.",
        "fr": "Le graphique montre l'évolution de la température du lait au cours des traitements thermiques X et Y appliqués à deux échantillons du même lait cru (dans X, le lait est maintenu à sa température maximale environ 15 secondes, dans Y environ 3 secondes). Quelles affirmations sont vraies ?\nI. Le traitement X est une pasteurisation et ce lait doit être conservé au réfrigérateur.\nII. Le lait traité par Y peut se conserver des mois à température ambiante dans son emballage aseptique non ouvert.\nIII. Le traitement X détruit tous les micro-organismes et toutes les spores du lait.",
        "ru": "На графике показано изменение температуры молока со временем при тепловой обработке X и Y двух проб одного и того же сырого молока (при X молоко выдерживают при максимальной температуре около 15 секунд, при Y — около 3 секунд). Какие утверждения верны?\nI. Обработка X — пастеризация, и такое молоко нужно хранить в холодильнике.\nII. Молоко, прошедшее обработку Y, в невскрытой асептической упаковке может храниться при комнатной температуре месяцами.\nIII. При обработке X уничтожаются все микроорганизмы и споры в молоке.",
        "ar": "يبيّن الرسم البياني تغيّر درجة حرارة الحليب مع الزمن في المعالجتين الحراريتين X وY المطبقتين على عينتين من الحليب الخام نفسه (في X يُبقى الحليب عند أعلى درجة حرارة نحو 15 ثانية، وفي Y نحو 3 ثوانٍ). أيّ العبارات الآتية صحيحة؟\nI. المعالجة X هي البسترة، ويجب حفظ هذا الحليب في الثلاجة.\nII. يمكن أن يبقى الحليب المعالج بـ Y أشهرًا في درجة حرارة الغرفة داخل عبوته المعقمة غير المفتوحة.\nIII. تقضي المعالجة X على جميع الكائنات الدقيقة وأبواغها في الحليب.",
        "zh": "图中给出了对同一种生牛奶的两个样品分别进行热处理 X 和 Y 时，牛奶温度随时间的变化（X 中牛奶在最高温度下保持约 15 秒，Y 中约 3 秒）。下列说法中哪些正确？\nI. 处理 X 是巴氏杀菌，这种奶必须冷藏保存。\nII. 经处理 Y 的牛奶在未开封的无菌包装中可在室温下保存数月。\nIII. 处理 X 能杀灭牛奶中全部微生物及其芽孢。",
        "ku": "Grafîka di şiklê de nîşan dide ku di pêvajoyên germkirinê yên X û Y de ku li du nimûneyên heman şîrê xav tên sepandin, germahiya şîr bi demê re çawa diguhere (di X de şîr li germahiya herî bilind nêzî 15 çirkeyan, di Y de nêzî 3 çirkeyan tê hiştin). Kîjan ji van gotinan rast in?\nI. Pêvajoya X pastorîzasyon e û divê ev şîr di sarincê de were parastin.\nII. Şîrê ku pêvajoya Y lê hatiye sepandin di pakêta xwe ya aseptîk a venebûyî de dikare bi mehan di germahiya odeyê de xera nebe.\nIII. Di pêvajoya X de hemû mîkroorganîzma û spor ên di şîr de têne tunekirin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
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
        "tr": "Grafikte X işleminde süt yaklaşık 72 °C'ye ısıtılıp kısa süre bekletilmiş ve 4 °C'ye soğutulmuştur; bu pastörizasyondur. Pastörizasyon zararlı mikroorganizmaların çoğunu öldürür ama dayanıklı sporların tamamını yok etmez; bu yüzden süt soğukta ve kısa süre saklanır; I doğru, III yanlıştır. Y işleminde süt yaklaşık 140 °C'ye çıkarılmıştır; bu UHT işlemidir. Bu sıcaklıkta mikroorganizmalar sporlarıyla birlikte büyük ölçüde yok edildiği için süt aseptik ambalajda oda sıcaklığında aylarca saklanabilir; II doğrudur. Pastörizasyonun sterilizasyon olduğunu sanmak tipik bir hatadır.",
        "en": "On the graph, in treatment X the milk is heated to about 72 °C, held briefly and cooled to 4 °C; this is pasteurization. Pasteurization kills most harmful microorganisms but not all resistant spores, so the milk is kept cold and for a short time; I is true and III is false. In treatment Y the milk is raised to about 140 °C; this is UHT treatment. At this temperature microorganisms and their spores are largely destroyed, so the milk keeps for months at room temperature in aseptic packaging; II is true. Thinking that pasteurization is sterilization is a typical mistake.",
        "de": "Im Diagramm wird die Milch bei Behandlung X auf etwa 72 °C erhitzt, kurz gehalten und auf 4 °C abgekühlt; das ist Pasteurisierung. Sie tötet die meisten schädlichen Mikroorganismen ab, aber nicht alle widerstandsfähigen Sporen; deshalb wird die Milch gekühlt und nur kurz gelagert; I ist richtig, III falsch. Bei Behandlung Y wird die Milch auf etwa 140 °C gebracht; das ist die UHT-Behandlung. Bei dieser Temperatur werden Mikroorganismen samt Sporen weitgehend abgetötet, daher hält sich die Milch in aseptischer Verpackung monatelang bei Raumtemperatur; II ist richtig. Ein typischer Fehler ist, Pasteurisierung für Sterilisation zu halten.",
        "fr": "Sur le graphique, dans le traitement X le lait est chauffé à environ 72 °C, maintenu brièvement puis refroidi à 4 °C : c'est la pasteurisation. Elle tue la plupart des micro-organismes nuisibles, mais pas toutes les spores résistantes ; le lait se conserve donc au froid et peu de temps ; I est vraie, III est fausse. Dans le traitement Y, le lait est porté à environ 140 °C : c'est le traitement UHT. À cette température, les micro-organismes et leurs spores sont en grande partie détruits, d'où une conservation de plusieurs mois à température ambiante en emballage aseptique ; II est vraie. Confondre pasteurisation et stérilisation est une erreur typique.",
        "ru": "По графику при обработке X молоко нагревают примерно до 72 °C, недолго выдерживают и охлаждают до 4 °C — это пастеризация. Она убивает большинство вредных микроорганизмов, но не все устойчивые споры, поэтому молоко хранят в холоде и недолго; I верно, III неверно. При обработке Y молоко нагревают примерно до 140 °C — это ультрапастеризация (UHT). При такой температуре микроорганизмы вместе со спорами в основном уничтожаются, поэтому в асептической упаковке молоко хранится месяцами при комнатной температуре; II верно. Считать пастеризацию стерилизацией — типичная ошибка.",
        "ar": "في الرسم البياني يُسخَّن الحليب في المعالجة X إلى نحو 72 °C ويُبقى مدة قصيرة ثم يُبرَّد إلى 4 °C، وهذه هي البسترة. تقتل البسترة معظم الكائنات الدقيقة الضارة لكنها لا تقضي على جميع الأبواغ المقاومة، لذا يُحفظ الحليب باردًا ولمدة قصيرة؛ العبارة I صحيحة و III خاطئة. وفي المعالجة Y يُرفع الحليب إلى نحو 140 °C، وهذه معالجة UHT. عند هذه الدرجة تُقتل الكائنات الدقيقة مع أبواغها إلى حد كبير، فيبقى الحليب أشهرًا في درجة حرارة الغرفة داخل عبوة معقمة؛ العبارة II صحيحة. ومن الأخطاء الشائعة الظن أن البسترة تعقيم.",
        "zh": "图中处理 X 将牛奶加热到约 72 °C，短时保持后冷却到 4 °C，这是巴氏杀菌。巴氏杀菌能杀死大多数有害微生物，但不能杀灭全部耐热芽孢，所以牛奶要冷藏且只能短期保存；I 正确，III 错误。处理 Y 将牛奶加热到约 140 °C，这是 UHT 超高温处理。在此温度下微生物连同芽孢基本被杀灭，因此牛奶在无菌包装中可在室温下保存数月；II 正确。把巴氏杀菌当作灭菌，是典型错误。",
        "ku": "Di grafîkê de di pêvajoya X de şîr heta nêzî 72 °C tê germkirin, demeke kurt tê hiştin û heta 4 °C tê sarkirin; ev pastorîzasyon e. Pastorîzasyon piraniya mîkroorganîzmayên zirardar dikuje lê hemû sporên berxwedêr tune nake; ji ber vê yekê şîr di sermayê de û demeke kurt tê parastin; I rast e, III şaş e. Di pêvajoya Y de şîr heta nêzî 140 °C tê bilindkirin; ev pêvajoya UHT ye. Di vê germahiyê de mîkroorganîzma bi sporên xwe re bi piranî têne tunekirin, ji ber vê yekê şîr di pakêta aseptîk de bi mehan di germahiya odeyê de dimîne; II rast e. Hesibandina pastorîzasyonê wek sterîlîzasyon xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman",
          "en": "Time",
          "de": "Zeit",
          "fr": "Temps",
          "ru": "Время",
          "ar": "الزمن",
          "zh": "时间",
          "ku": "Dem"
        },
        "yLabel": {
          "tr": "Sıcaklık (°C)",
          "en": "Temperature (°C)",
          "de": "Temperatur (°C)",
          "fr": "Température (°C)",
          "ru": "Температура (°C)",
          "ar": "درجة الحرارة (°C)",
          "zh": "温度 (°C)",
          "ku": "Germahî (°C)"
        },
        "xMax": 100,
        "yMax": 160,
        "yTicks": [
          4,
          25,
          72,
          140
        ],
        "series": [
          {
            "points": [
              [
                0,
                4
              ],
              [
                22,
                72
              ],
              [
                42,
                72
              ],
              [
                58,
                4
              ],
              [
                100,
                4
              ]
            ],
            "label": "X",
            "dashed": true,
            "tone": 0
          },
          {
            "points": [
              [
                0,
                4
              ],
              [
                30,
                140
              ],
              [
                34,
                140
              ],
              [
                50,
                25
              ],
              [
                100,
                25
              ]
            ],
            "label": "Y",
            "tone": 1
          }
        ]
      }
    },
    {
      "id": "u10-twin11",
      "stem": {
        "tr": "Sıvı bir bitkisel yağ, nikel (Ni) katalizörü varlığında H2 gazı ile tepkimeye sokularak yarı katı bir ürüne dönüştürülüyor. Bu işlemle ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "A liquid vegetable oil is reacted with H2 gas in the presence of a nickel (Ni) catalyst and turned into a semi-solid product. Which of the following about this process is correct?",
        "de": "Ein flüssiges Pflanzenöl wird in Gegenwart eines Nickelkatalysators (Ni) mit H2-Gas umgesetzt und in ein halbfestes Produkt umgewandelt. Was trifft auf diesen Vorgang zu?",
        "fr": "Une huile végétale liquide réagit avec du dihydrogène H2 en présence d’un catalyseur au nickel (Ni) et se transforme en un produit semi-solide. Laquelle des affirmations suivantes sur ce procédé est correcte ?",
        "ru": "Жидкое растительное масло в присутствии никелевого (Ni) катализатора обрабатывают газом H2 и превращают в полутвёрдый продукт. Какое утверждение об этом процессе верно?",
        "ar": "يُفاعَل زيت نباتي سائل مع غاز H2 بوجود عامل حفاز من النيكل (Ni) فيتحول إلى منتج شبه صلب. أيّ مما يأتي صحيح بشأن هذه العملية؟",
        "zh": "在镍(Ni)催化剂存在下，使液态植物油与 H2 气体反应，转化为半固态产品。关于这一过程，下列哪项正确？",
        "ku": "Rûnekî riwekî yê şile, li ber katalîzora nîkelê (Ni) bi gaza H2 re dikeve reaksiyonê û dibe hilbereke nîvhişk. Derbarê vê pêvajoyê de kîjan gotin rast e?"
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
          "ku": "Netêrbûna rûn zêde dibe."
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
        "ru": "Этот процесс — гидрирование (получение маргарина). С помощью катализатора H2 присоединяется по двойным связям C=C ненасыщенных молекул масла; двойные связи становятся одинарными, масло становится более насыщенным и затвердевает, так как повышается его температура плавления. Водород присоединяется, а не отщепляется; ненасыщенность не растёт, а уменьшается. Мыло и глицерин образуются при реакции жира с NaOH/KOH (омыление). Продукт — растительный маргарин, а не сливочное масло.",
        "ar": "هذه العملية هي الهدرجة (إنتاج المارجرين). بمساعدة العامل الحفاز يُضاف H2 إلى الروابط الثنائية C=C في جزيئات الزيت غير المشبعة، فتتحول إلى روابط أحادية ويصبح الزيت أكثر تشبعًا ويتصلب لارتفاع درجة انصهاره. فالهيدروجين يُضاف ولا يُنزع، وعدم التشبع يقل ولا يزداد. أما الصابون والغليسرين فينتجان من تفاعل الدهن مع NaOH/KOH (التصبن). والمنتج مارجرين نباتي لا زبدة.",
        "zh": "该过程是氢化（制造人造黄油）。在催化剂作用下，H2 加成到不饱和油分子的 C=C 双键上，双键变为单键，油的饱和程度提高，熔点升高而变为固态。氢是被加入而不是被除去；不饱和程度降低而非增加。肥皂和甘油是油脂与 NaOH/KOH 反应（皂化）的产物。产品是植物来源的人造黄油，不是黄油。",
        "ku": "Ev pêvajo hîdrojenasyon e (çêkirina margarînê). Bi alîkariya katalîzorê H2 li girêdanên ducar ên C=C yên molekulên rûnê netêr zêde dibe; girêdanên ducar dibin yekane, rûn têrtir dibe û ji ber ku xala helînê bilind dibe hişk dibe. Hîdrojen tê zêdekirin, nayê derxistin; netêrbûn zêde nabe, kêm dibe. Sabûn û glîserîn di reaksiyona rûn bi NaOH/KOH re (sabûnbûn) de çêdibin. Hilber margarîna riwekî ye, ne rûnê nivişk e."
      }
    },
    {
      "id": "u10-twin12",
      "stem": {
        "tr": "İlaç formlarıyla ilgili\nI. Ampul (enjeksiyon) formu, etken maddenin kana hızla ulaşmasını sağlar.\nII. Merhem ve kremler mideden emilerek etki gösterir.\nIII. Göz damlası, tabletin sıvı hâlidir ve ağızdan alınır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding dosage forms:\nI. The ampoule (injection) form lets the active ingredient reach the blood quickly.\nII. Ointments and creams act after being absorbed from the stomach.\nIII. Eye drops are the liquid version of a tablet and are taken by mouth.\nWhich of these statements are correct?",
        "de": "Zu Darreichungsformen:\nI. Die Ampulle (Injektion) bringt den Wirkstoff schnell ins Blut.\nII. Salben und Cremes wirken nach Aufnahme über den Magen.\nIII. Augentropfen sind die flüssige Form einer Tablette und werden geschluckt.\nWelche Aussagen sind richtig?",
        "fr": "À propos des formes galéniques :\nI. La forme ampoule (injection) permet au principe actif d’atteindre rapidement le sang.\nII. Les pommades et les crèmes agissent après absorption par l’estomac.\nIII. Les gouttes oculaires sont la forme liquide d’un comprimé et se prennent par la bouche.\nLesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения о лекарственных формах:\nI. Ампульная (инъекционная) форма обеспечивает быстрое поступление действующего вещества в кровь.\nII. Мази и кремы действуют после всасывания в желудке.\nIII. Глазные капли — жидкая форма таблетки, их принимают внутрь.\nКакие из них верны?",
        "ar": "فيما يتعلق بأشكال الأدوية:\nI. يتيح شكل الأمبولة (الحقن) وصول المادة الفعالة إلى الدم بسرعة.\nII. تؤثر المراهم والكريمات بعد امتصاصها من المعدة.\nIII. قطرة العين هي الشكل السائل للقرص وتؤخذ عن طريق الفم.\nأيّ العبارات صحيحة؟",
        "zh": "关于药物剂型：\nI. 安瓿（注射）剂型能使有效成分迅速进入血液。\nII. 软膏和乳膏经胃吸收后起作用。\nIII. 眼药水是片剂的液体形式，需要口服。\n以上说法中哪些正确？",
        "ku": "Derbarê formên dermanan de:\nI. Forma ampûlê (derzî) dihêle ku madeya çalak zû bigihîje xwînê.\nII. Melhem û krem piştî ku ji mîdeyê têne kişandin bandor dikin.\nIII. Dilopa çavan forma şile ya tabletê ye û bi rêya devê tê girtin.\nKîjan ji van gotinan rast in?"
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
        "ku": "I rast e: dermanê ku bi derziyê tê dayîn bê ku di pergala helandina xwarinê re derbas bibe rasterast dikeve xwînê an masûlkeyê, ji ber vê yekê zû bandor dike. II şaş e: melhem û krem li çerm têne sûtin û li cihê ku lê hatine sûtin bandor dikin. III şaş e: dilopa çavan şileyeke sterîl e ku rasterast li çav tê dilopandin, bi rêya devê nayê girtin. Tenê I rast e; derman bi formên cuda têne çêkirin da ku li gorî cih û leza bandorê rêya guncav were hilbijartin."
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
        "ar": "فيما يأتي بعض مواد التنظيف المنزلية واستخداماتها:\nI. روح الملح (HCl المخفف) – إذابة بقع الكلس (CaCO3) على المغاسل والبلاط.\nII. مسلّك المجاري (يحتوي على NaOH) – إزالة انسداد المصارف الناتج عن الدهون والشعر.\nIII. مسحوق التبييض – تطهير الماء والأسطح وتبييضها.\nأيّ هذه المزاوجات صحيحة؟",
        "zh": "下面给出一些家用清洁剂及其用途：\nI. 盐酸(稀 HCl) – 溶解洗手池和瓷砖上的水垢(CaCO3)。\nII. 管道疏通剂(含 NaOH) – 清除由油脂和头发造成的下水道堵塞。\nIII. 漂白粉 – 对水和物体表面消毒、漂白。\n以上配对中哪些正确？",
        "ku": "Hin madeyên paqijkirinê yên malê û armancên bikaranîna wan hatine dayîn:\nI. Ruhê xwê (HCl ya sist) – helandina lekeyên kilsê (CaCO3) yên li ser lavabo û kaşiyan.\nII. Vekerê lavaboyê (NaOH dihewîne) – rakirina girtina boriyê ya ji rûn û por.\nIII. Toza spîkirinê – dezenfektekirina av û rûberan, spîkirin.\nKîjan ji van cotkirinan rast in?"
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
        "ru": "I верно: известковый налёт — это CaCO3, он растворяется, реагируя с кислотой (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II верно: сильные основания, такие как NaOH, омыляют жиры и разрушают белки волос, поэтому их используют в средствах для прочистки труб. III верно: хлорная известь (CaOCl2) в воде даёт гипохлорит-ион (ClO-) и применяется как отбеливающее и дезинфицирующее средство. Все три соответствия верны. Эти средства (особенно кислоты и средства с гипохлоритом) нельзя смешивать друг с другом.",
        "ar": "العبارة I صحيحة: بقع الكلس هي CaCO3 وتذوب بتفاعلها مع الحمض (CaCO3 + 2HCl → CaCl2 + H2O + CO2). العبارة II صحيحة: القواعد القوية مثل NaOH تصبّن الدهون وتفكك بروتينات الشعر، لذا تُستخدم في مسلّكات المجاري. العبارة III صحيحة: يعطي مسحوق التبييض (CaOCl2) في الماء أيون الهيبوكلوريت (ClO-) ويُستخدم مبيضًا ومطهرًا. المزاوجات الثلاث صحيحة. ويجب ألّا تُخلط هذه المواد ببعضها (خاصة الأحماض والمواد المحتوية على الهيبوكلوريت).",
        "zh": "I 正确：水垢是 CaCO3，与酸反应而溶解(CaCO3 + 2HCl → CaCl2 + H2O + CO2)。II 正确：NaOH 等强碱能使油脂皂化并分解头发中的蛋白质，因此用于管道疏通剂。III 正确：漂白粉(CaOCl2)在水中产生次氯酸根离子(ClO-)，用作漂白剂和消毒剂。三个配对都正确。这些清洁剂（尤其是酸与含次氯酸盐的产品）不能混用。",
        "ku": "I rast e: lekeya kilsê CaCO3 e û bi reaksiyona bi asîdê re dihele (CaCO3 + 2HCl → CaCl2 + H2O + CO2). II rast e: bazên bihêz ên wek NaOH rûnan dikin sabûn û proteînên porê perçe dikin; loma di vekerên lavaboyê de têne bikaranîn. III rast e: toza spîkirinê (CaOCl2) di avê de îyona hîpoklorîtê (ClO-) dide û wek spîker û dezenfektan tê bikaranîn. Her sê cotkirin rast in. Divê ev made (bi taybetî asîd û yên hîpoklorîtdar) bi hev re neyên tevlîkirin."
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
        "ku": "Di lîsteya pêkhateyên kremeke destan de \"metîlparaben\" heye. Armanca sereke ya lêzêdekirina vê madeyê li kremê kîjan e?"
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
          "ku": "Dayîna rengî bi kremê"
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
          "zh": "延缓护手霜因微生物而变质",
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
          "ru": "Сделать среду крема сильнокислой",
          "ar": "جعل الكريم حمضيًا قويًا",
          "zh": "使护手霜呈强酸性",
          "ku": "Kirina pH-ya kremê bi xurtî asîdî"
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
        "ku": "Paraben (metîl-, propîlparaben û hwd.) di kozmetîkê de wek parêzker têne bikaranîn; di krem û losyonên avdar de nahêlin bakterî û kufik pir bibin û dema hilanînê ya hilberê dirêj dikin. Reng û bêhn ji boyax û parfûman tên; nirxa xurekî ya parabenê tune ye. Ji ber ku dikarin li hin kesan bertekên alerjîk çêbikin û bandorên wan ên gengaz li ser tenduristiyê têne nîqaşkirin, mîqdarên parabenê yên destûrdayî di kozmetîkê de bi sînorên zagonî hatine diyarkirin."
      }
    },
    {
      "id": "u10-twin15",
      "stem": {
        "tr": "Etilen (CH2=CH2) monomerlerinden polietilen elde edilmesiyle ilgili\nI. Monomerlerdeki ikili bağlar açılarak monomerler birbirine kovalent bağlarla bağlanır.\nII. Oluşan polimerin mol kütlesi, monomerin mol kütlesinden çok büyüktür.\nIII. Polietilenin kimyasal ve fiziksel özellikleri etileninkiyle aynıdır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding the production of polyethylene from ethylene (CH2=CH2) monomers:\nI. The double bonds of the monomers open and the monomers are joined by covalent bonds.\nII. The molar mass of the polymer formed is much larger than that of the monomer.\nIII. The chemical and physical properties of polyethylene are the same as those of ethylene.\nWhich of these statements are correct?",
        "de": "Zur Herstellung von Polyethylen aus Ethen-Monomeren (CH2=CH2):\nI. Die Doppelbindungen der Monomere öffnen sich, und die Monomere werden durch kovalente Bindungen verknüpft.\nII. Die Molekülmasse des Polymers ist viel größer als die des Monomers.\nIII. Die chemischen und physikalischen Eigenschaften von Polyethylen sind dieselben wie die von Ethen.\nWelche Aussagen sind richtig?",
        "fr": "À propos de l’obtention du polyéthylène à partir de monomères d’éthylène (CH2=CH2) :\nI. Les doubles liaisons des monomères s’ouvrent et les monomères se lient par des liaisons covalentes.\nII. La masse molaire du polymère formé est bien plus grande que celle du monomère.\nIII. Les propriétés chimiques et physiques du polyéthylène sont les mêmes que celles de l’éthylène.\nLesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения о получении полиэтилена из этилена (CH2=CH2):\nI. Двойные связи в мономерах раскрываются, и мономеры соединяются друг с другом ковалентными связями.\nII. Молярная масса образовавшегося полимера намного больше молярной массы мономера.\nIII. Химические и физические свойства полиэтилена такие же, как у этилена.\nКакие из них верны?",
        "ar": "فيما يتعلق بتحضير البولي إيثيلين من مونومرات الإيثيلين (CH2=CH2):\nI. تنفتح الروابط الثنائية في المونومرات وترتبط المونومرات ببعضها بروابط تساهمية.\nII. الكتلة المولية للبوليمر الناتج أكبر بكثير من الكتلة المولية للمونومر.\nIII. الخواص الكيميائية والفيزيائية للبولي إيثيلين مماثلة لخواص الإيثيلين.\nأيّ العبارات صحيحة؟",
        "zh": "关于由乙烯(CH2=CH2)单体制取聚乙烯：\nI. 单体中的双键打开，单体之间以共价键相连。\nII. 生成的聚合物的摩尔质量远大于单体的摩尔质量。\nIII. 聚乙烯的化学和物理性质与乙烯相同。\n以上说法中哪些正确？",
        "ku": "Derbarê bidestxistina polîetîlenê ji monomerên etîlenê (CH2=CH2) de:\nI. Girêdanên ducar ên monomeran vedibin û monomer bi girêdanên kovalent bi hev ve girê didin.\nII. Girseya molî ya polîmera çêbûyî ji ya monomerê pir mezintir e.\nIII. Taybetmendiyên kîmyewî û fîzîkî yên polîetîlenê wek yên etîlenê ne.\nKîjan ji van gotinan rast in?"
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
        "ru": "I верно: при полимеризации присоединением двойная связь этилена раскрывается, и тысячи мономеров соединяются ковалентными связями в цепь. II верно: цепь состоит из тысяч мономерных звеньев, поэтому молярная масса очень велика (макромолекула). III неверно: полимер — другое вещество; этилен при комнатных условиях — газ и из-за двойной связи легко вступает в реакции, а полиэтилен — твёрдый, гибкий и химически более устойчивый материал. Верны I и II.",
        "ar": "العبارة I صحيحة: في البلمرة بالإضافة تنفتح الرابطة الثنائية في الإيثيلين وترتبط آلاف المونومرات طرفًا بطرف بروابط تساهمية. العبارة II صحيحة: تتكون السلسلة من آلاف الوحدات فتكون كتلتها المولية كبيرة جدًا (جزيء ضخم). العبارة III خاطئة: البوليمر مادة مختلفة عن المونومر؛ فالإيثيلين غاز في ظروف الغرفة ونشط كيميائيًا بسبب رابطته الثنائية، أما البولي إيثيلين فصلب ومرن وأكثر ثباتًا كيميائيًا. العبارتان الصحيحتان هما I وII.",
        "zh": "I 正确：加成聚合中乙烯的双键打开，成千上万个单体以共价键首尾相连。II 正确：聚合物链由成千上万个单体单元构成，因此摩尔质量非常大（高分子）。III 错误：聚合物与单体是不同的物质；乙烯在室温下是气体，因含双键而较活泼，聚乙烯则是固体，柔韧且化学性质更稳定。正确的是 I 和 II。",
        "ku": "I rast e: di polîmerîzasyona lêzêdekirinê de girêdana ducar a etîlenê vedibe û bi hezaran monomer bi girêdanên kovalent li pey hev girê didin. II rast e: zincîr ji bi hezaran yekeyên monomer pêk tê, ji ber vê yekê girseya molî pir mezin e (makromolekul). III şaş e: polîmer madeyeke ji monomerê cuda ye; etîlen di şertên odeyê de gaz e û ji ber girêdana ducar zû dikeve reaksiyonê, lê polîetîlen hişk, nerm û ji aliyê kîmyewî ve aramtir e. Gotinên rast I û II ne."
      }
    },
    {
      "id": "u10-twin16",
      "stem": {
        "tr": "Hazır gıdaların seçilmesi ve saklanmasıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about choosing and storing packaged foods is incorrect?",
        "de": "Welche der folgenden Aussagen über Auswahl und Lagerung verpackter Lebensmittel ist falsch?",
        "fr": "Laquelle des affirmations suivantes sur le choix et la conservation des aliments emballés est incorrecte ?",
        "ru": "Какое утверждение о выборе и хранении готовых пищевых продуктов неверно?",
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
          "ku": "Berî kirînê divê dîroka dawî ya bikaranînê ya li ser etîketê were kontrolkirin."
        },
        {
          "tr": "Çözülmüş dondurulmuş gıdalar yeniden dondurulup aylarca güvenle saklanabilir.",
          "en": "Thawed frozen foods can be refrozen and safely stored for months.",
          "de": "Aufgetaute Tiefkühlkost kann wieder eingefroren und monatelang sicher gelagert werden.",
          "fr": "Les aliments surgelés décongelés peuvent être recongelés et conservés des mois en toute sécurité.",
          "ru": "Размороженные продукты можно снова заморозить и безопасно хранить месяцами.",
          "ar": "يمكن إعادة تجميد الأغذية المجمدة بعد إذابتها وحفظها بأمان أشهرًا.",
          "zh": "解冻后的冷冻食品可以重新冷冻并安全保存数月。",
          "ku": "Xwarinên cemidandî yên ku helyane dikarin dîsa werin cemidandin û bi mehan bi ewlehî werin hilanîn."
        },
        {
          "tr": "Kapağı şişmiş konserve, içinde mikroorganizmaların gaz üretmiş olabileceği için tüketilmemelidir.",
          "en": "A can with a bulging lid should not be eaten, because microorganisms may have produced gas inside.",
          "de": "Eine Konserve mit gewölbtem Deckel darf nicht verzehrt werden, weil Mikroorganismen darin Gas gebildet haben können.",
          "fr": "Une conserve au couvercle bombé ne doit pas être consommée, car des micro-organismes ont pu y produire du gaz.",
          "ru": "Консервы со вздутой крышкой нельзя есть, так как внутри микроорганизмы могли образовать газ.",
          "ar": "لا ينبغي تناول المعلبات التي انتفخ غطاؤها، لأن الكائنات الدقيقة ربما أنتجت غازًا بداخلها.",
          "zh": "盖子鼓起的罐头不应食用，因为里面的微生物可能产生了气体。",
          "ku": "Konserveya ku qapaxa wê werimiye nayê xwarin, ji ber ku dibe ku mîkroorganîzmayan di hundir de gaz çêkiribe."
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
        "ru": "Замораживание не убивает микроорганизмы, а лишь останавливает их размножение. После размораживания они снова начинают размножаться; повторное замораживание их не уничтожает и к тому же ухудшает структуру и пищевую ценность продукта. Поэтому размороженный продукт нельзя замораживать снова — его нужно быстро употребить. Остальные утверждения верны: нужно проверять срок годности и состав, не есть консервы со вздутой крышкой (возможен газ, выделенный бактериями), хранить продукты в рекомендованных условиях.",
        "ar": "التجميد لا يقتل الكائنات الدقيقة بل يوقف تكاثرها فقط. وعند إذابة الغذاء تبدأ بالتكاثر من جديد، وإعادة التجميد لا تقضي عليها بل تفسد بنية الغذاء وقيمته الغذائية أيضًا. لذا لا يُعاد تجميد الغذاء المذاب بل يُستهلك سريعًا. وبقية العبارات صحيحة: يجب التحقق من تاريخ الصلاحية والمكونات، وعدم تناول المعلبات المنتفخة (احتمال غاز بكتيري)، وحفظ الأغذية في الظروف الموصى بها.",
        "zh": "冷冻不能杀死微生物，只能使其停止繁殖。食品解冻后微生物会重新繁殖；再次冷冻并不能消灭它们，还会破坏食品的组织结构和营养价值。因此解冻后的食品不应再冷冻，而应尽快食用。其余说法都正确：应检查食用期限和配料，盖子鼓起的罐头（可能有细菌产气）不应食用，食品应按建议条件储存。",
        "ku": "Cemidandin mîkroorganîzmayan nakuje, tenê pirbûna wan radiwestîne. Dema xwarin dihele, mîkroorganîzma dîsa pir dibin; cemidandina ji nû ve wan tune nake û avahî û nirxa xurekî ya xwarinê jî xera dike. Ji ber vê yekê divê xwarina helyayî dîsa neyê cemidandin û zû were xwarin. Gotinên din rast in: divê dîroka dawî ya bikaranînê û pêkhate werin kontrolkirin, konserveya werimî (gengaziya gaza bakteriyan) neyê xwarin û xwarin di şertên pêşniyarkirî de werin hilanîn."
      }
    }
  ]
};

export default unit10;
