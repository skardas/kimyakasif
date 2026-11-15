import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit05: ChemistryUnitSeedData = {
  "id": "u05",
  "order": 5,
  "exam": "TYT",
  "grade": 9,
  "title": {
    "tr": "Doğa ve Kimya",
    "en": "Nature & Chemistry",
    "de": "Natur und Chemie",
    "fr": "Nature et Chimie",
    "ru": "Природа и химия",
    "ar": "الطبيعة والكيمياء",
    "zh": "自然与化学",
    "ku": "Xwezayî û Kîmya"
  },
  "subtitle": {
    "tr": "Su Arıtımı, Çevre Kirliliği ve Sera Gazları",
    "en": "Water Treatment & Green Chemistry",
    "de": "Wasseraufbereitung, Umweltverschmutzung und Treibhausgase",
    "fr": "Traitement de l'eau, pollution de l'environnement et gaz à effet de serre",
    "ru": "Водоочистка, загрязнение окружающей среды и парниковые газы",
    "ar": "معالجة المياه والتلوث البيئي والغازات الدفيئة",
    "zh": "水处理、环境污染和温室气体",
    "ku": "Dermankirina avê, qirêjiya jîngehê û gazên serayê"
  },
  "facts": [
    {
      "id": "u05-f01",
      "fact": {
        "tr": "Sert sular Ca2+ ve Mg2+ iyonları derişimi yüksek olan sulardır; sabun sarfiyatını artırır ve tortu bırakır.",
        "en": "Hard waters are waters with high concentrations of Ca2+ and Mg2+ ions; It increases soap consumption and leaves residue.",
        "de": "Hartes Wasser ist Wasser mit hohen Konzentrationen an Ca2+- und Mg2+-Ionen; Es erhöht den Seifenverbrauch und hinterlässt Rückstände.",
        "fr": "Les eaux dures sont des eaux avec de fortes concentrations d’ions Ca2+ et Mg2+ ; Cela augmente la consommation de savon et laisse des résidus.",
        "ru": "К жестким водам относятся воды с высоким содержанием ионов Ca2+ и Mg2+; Это увеличивает расход мыла и оставляет следы.",
        "ar": "المياه العسرة هي مياه تحتوي على تركيزات عالية من أيونات Ca2+ وMg2+؛ يزيد من استهلاك الصابون ويترك بقايا.",
        "zh": "硬水是Ca2+和Mg2+离子浓度高的水；它会增加肥皂的消耗并留下残留物。",
        "ku": "Avên hişk, avên bi îyonên Ca2+ û Mg2+ yên bi giranî ne; Ew vexwarina sabûnê zêde dike û bermayiyê dihêle."
      },
      "trap": {
        "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
        "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
        "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
        "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
        "ru": "В жесткой воде моющее средство не пенится и полностью теряет свои чистящие свойства.",
        "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
        "zh": "在硬水中，洗涤剂不会起泡并完全失去其清洁性能。",
        "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
      }
    },
    {
      "id": "u05-f02",
      "fact": {
        "tr": "Geçici sertlik Ca(HCO3)2 ve Mg(HCO3)2 den kaynaklanır ve suyu kaynatarak giderilebilir.",
        "en": "Temporary hardness is caused by Ca(HCO3)2 and Mg(HCO3)2 and can be removed by boiling water.",
        "de": "Vorübergehende Härte wird durch Ca(HCO3)2 und Mg(HCO3)2 verursacht und kann durch kochendes Wasser entfernt werden.",
        "fr": "La dureté temporaire est causée par Ca(HCO3)2 et Mg(HCO3)2 et peut être éliminée par de l'eau bouillante.",
        "ru": "Временная жесткость вызвана Ca(HCO3)2 и Mg(HCO3)2 и может быть устранена кипячением воды.",
        "ar": "تنتج العسر المؤقت عن Ca(HCO3)2 وMg(HCO3)2 ويمكن إزالتها بالماء المغلي.",
        "zh": "暂时硬度是由Ca(HCO3)2和Mg(HCO3)2引起的，可以用沸水去除。",
        "ku": "Serhişkiya demkî ji hêla Ca(HCO3)2 û Mg(HCO3)2 ve çêdibe û bi ava kelandî dikare jê were derxistin."
      },
      "trap": {
        "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
        "en": "Persistent hardness is completely eliminated by simply boiling the water.",
        "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
        "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
        "ru": "Постоянная жесткость полностью устраняется простым кипячением воды.",
        "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
        "zh": "只需将水煮沸即可完全消除持续的硬度。",
        "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
      }
    },
    {
      "id": "u05-f03",
      "fact": {
        "tr": "Kalıcı sertlik sülfat (SO4^2-) ve klorür (Cl-) tuzlarından kaynaklanır ve iyon değiştirici reçinelerle giderilir.",
        "en": "Permanent hardness is caused by sulfate (SO4^2-) and chloride (Cl-) salts and is removed by ion exchange resins.",
        "de": "Die dauerhafte Härte wird durch Sulfat- (SO4^2-) und Chlorid- (Cl-) Salze verursacht und durch Ionenaustauscherharze entfernt.",
        "fr": "La dureté permanente est causée par les sels de sulfate (SO4^2-) et de chlorure (Cl-) et est éliminée par des résines échangeuses d'ions.",
        "ru": "Постоянная жесткость создается сульфатными (SO4^2-) и хлоридными (Cl-) солями и удаляется ионообменными смолами.",
        "ar": "ينتج العسر الدائم عن أملاح الكبريتات (SO4^2-) والكلوريد (Cl-)، ويتم إزالتها بواسطة راتنجات التبادل الأيوني.",
        "zh": "永久硬度是由硫酸盐 (SO4^2-) 和氯化物 (Cl-) 盐引起的，可通过离子交换树脂去除。",
        "ku": "Serhişkiya daîmî ji ber xwêyên sulfate (SO4^2-) û klorîd (Cl-) çêdibe û bi rezînên veguheztina îyonan tê derxistin."
      },
      "trap": {
        "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
        "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
        "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
        "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
        "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
        "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
        "zh": "引起永久硬度的盐（如 CaSO4 和 MgCl2）在煮沸水时会以 CaCO3 形式沉淀而被除去。",
        "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
      }
    },
    {
      "id": "u05-f04",
      "fact": {
        "tr": "CO2, CH4, N2O ve su buharı (H2O) temel bir sera gazı olarak atmosferde kızılötesi ışınları tutar; bu sera gazları küresel ısınmaya yol açar.",
        "en": "CO2, CH4, N2O and water vapor (H2O) trap infrared rays in the atmosphere as a major greenhouse gas; These greenhouse gases cause global warming.",
        "de": "CO2, CH4, N2O und Wasserdampf (H2O) fangen Infrarotstrahlen als wichtige Treibhausgase in der Atmosphäre ein; Diese Treibhausgase verursachen die globale Erwärmung.",
        "fr": "Le CO2, le CH4, le N2O et la vapeur d'eau (H2O) piègent les rayons infrarouges dans l'atmosphère et constituent un gaz à effet de serre majeur ; Ces gaz à effet de serre provoquent le réchauffement climatique.",
        "ru": "CO2, CH4, N2O и водяной пар (H2O) улавливают инфракрасные лучи в атмосфере и являются основными парниковыми газами; Эти парниковые газы вызывают глобальное потепление.",
        "ar": "يحبس ثاني أكسيد الكربون والميثان وأكسيد النيتروز وبخار الماء الأشعة تحت الحمراء في الغلاف الجوي باعتبارها غازًا رئيسيًا من غازات الدفيئة؛ تسبب هذه الغازات الدفيئة ظاهرة الاحتباس الحراري.",
        "zh": "CO2、CH4、N2O和水蒸气（H2O）作为主要温室气体在大气中捕获红外线；这些温室气体导致全球变暖。",
        "ku": "CO2, CH4, N2O û buhara avê (H2O) tîrêjên infrasor di atmosferê de wekî gaza serayê ya sereke digire; Ev gazên serayê dibin sedema germbûna global."
      },
      "trap": {
        "tr": "O2 ve N2 gazları dünyadaki sera etkisinin %90'ından sorumludur.",
        "en": "O2 and N2 gases are responsible for 90% of the world's greenhouse effect.",
        "de": "O2- und N2-Gase sind für 90 % des weltweiten Treibhauseffekts verantwortlich.",
        "fr": "Les gaz O2 et N2 sont responsables de 90 % de l’effet de serre mondial.",
        "ru": "Газы O2 и N2 ответственны за 90% мирового парникового эффекта.",
        "ar": "تعتبر غازات O2 وN2 مسؤولة عن 90% من ظاهرة الاحتباس الحراري في العالم.",
        "zh": "世界上 90% 的温室效应是由氧气和氮气造成的。",
        "ku": "Gazên O2 û N2 ji %90 bandora serayê ya cîhanê berpirsiyar in."
      }
    },
    {
      "id": "u05-f05",
      "fact": {
        "tr": "Kükürt dioksit (SO2), kükürt trioksit (SO3) ve azot oksitler (NO2) asit yağmurlarına yol açan gazlardır.",
        "en": "Sulfur dioxide (SO2), sulfur trioxide (SO3) and nitrogen oxides (NO2) are gases that cause acid rain.",
        "de": "Schwefeldioxid (SO2), Schwefeltrioxid (SO3) und Stickoxide (NO2) sind Gase, die sauren Regen verursachen.",
        "fr": "Le dioxyde de soufre (SO2), le trioxyde de soufre (SO3) et les oxydes d'azote (NO2) sont des gaz responsables des pluies acides.",
        "ru": "Диоксид серы (SO2), триоксид серы (SO3) и оксиды азота (NO2) — это газы, вызывающие кислотные дожди.",
        "ar": "ثاني أكسيد الكبريت (SO2)، وثالث أكسيد الكبريت (SO3) وأكاسيد النيتروجين (NO2) هي غازات تسبب الأمطار الحمضية.",
        "zh": "二氧化硫 (SO2)、三氧化硫 (SO3) 和氮氧化物 (NO2) 是导致酸雨的气体。",
        "ku": "Doksîda kewkurtê (SO2), trioksîdê kewkurtê (SO3) û oksîtên nîtrojenê (NO2) gazên ku dibin sedema barana asîd in."
      },
      "trap": {
        "tr": "Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.",
        "en": "Acid rain is caused by pure oxygen and nitrogen gases in the atmosphere.",
        "de": "Saurer Regen wird durch reine Sauerstoff- und Stickstoffgase in der Atmosphäre verursacht.",
        "fr": "Les pluies acides sont causées par l’oxygène pur et l’azote présents dans l’atmosphère.",
        "ru": "Кислотные дожди вызываются чистым кислородом и азотными газами в атмосфере.",
        "ar": "وينتج المطر الحمضي عن وجود غازي الأكسجين والنيتروجين النقي في الغلاف الجوي.",
        "zh": "酸雨是由大气中的纯氧气和氮气引起的。",
        "ku": "Barana asîdî ji ber gazên oksîjen û nîtrojenê yên paqij ên li atmosferê çêdibe."
      }
    },
    {
      "id": "u05-f06",
      "fact": {
        "tr": "Kloroflorokarbonlar (CFC gazları) stratosferdeki ozon (O3) tabakasının incelmesine neden olur.",
        "en": "Chlorofluorocarbons (CFC gases) cause depletion of the ozone (O3) layer in the stratosphere.",
        "de": "Fluorchlorkohlenwasserstoffe (FCKW-Gase) verursachen einen Abbau der Ozonschicht (O3) in der Stratosphäre.",
        "fr": "Les chlorofluorocarbures (gaz CFC) provoquent l'appauvrissement de la couche d'ozone (O3) dans la stratosphère.",
        "ru": "Хлорфторуглероды (газы CFC) вызывают истощение озонового слоя (O3) в стратосфере.",
        "ar": "تتسبب مركبات الكلوروفلوروكربون (غازات مركبات الكربون الكلورية فلورية) في استنفاد طبقة الأوزون (O3) في طبقة الستراتوسفير.",
        "zh": "氯氟烃（CFC 气体）会导致平流层臭氧 (O3) 层消耗。",
        "ku": "Klorofluorokarbon (gazên CFC) dibin sedema tinebûna qata ozonê (O3) a li stratosferê."
      },
      "trap": {
        "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
        "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
        "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
        "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
        "ru": "Газы CFC восстанавливают озоновый слой и полностью блокируют ультрафиолетовые лучи.",
        "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
        "zh": "CFC气体修复臭氧层并完全阻挡紫外线。",
        "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
      }
    },
    {
      "id": "u05-f07",
      "fact": {
        "tr": "Ağır metaller (kurşun Pb, cıva Hg, kadmiyum Cd) biyolojik birikimle besin zincirinde zehir etkisi yapar.",
        "en": "Heavy metals (lead Pb, mercury Hg, cadmium Cd) have a toxic effect on the food chain through bioaccumulation.",
        "de": "Schwermetalle (Blei Pb, Quecksilber Hg, Cadmium Cd) wirken durch Bioakkumulation toxisch auf die Nahrungskette.",
        "fr": "Les métaux lourds (plomb Pb, mercure Hg, cadmium Cd) ont un effet toxique sur la chaîne alimentaire par bioaccumulation.",
        "ru": "Тяжелые металлы (свинец Pb, ртуть Hg, кадмий Cd) оказывают токсическое воздействие на пищевую цепь путем биоаккумуляции.",
        "ar": "المعادن الثقيلة (الرصاص Pb، الزئبق Hg، الكادميوم Cd) لها تأثير سام على السلسلة الغذائية من خلال التراكم الحيوي.",
        "zh": "重金属（铅Pb、汞Hg、镉Cd）通过生物累积对食物链产生毒性作用。",
        "ku": "Metalên giran (serpîb Pb, merkur Hg, kadmium Cd) bi biyolojîkî bandorek jehrîn li ser zincîra xwarinê dikin."
      },
      "trap": {
        "tr": "Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.",
        "en": "Mercury is a useful mineral that is easily broken down in the human body.",
        "de": "Quecksilber ist ein nützliches Mineral, das im menschlichen Körper leicht abgebaut wird.",
        "fr": "Le mercure est un minéral utile qui se décompose facilement dans le corps humain.",
        "ru": "Ртуть – полезный минерал, который легко расщепляется в организме человека.",
        "ar": "الزئبق معدن مفيد يتحلل بسهولة في جسم الإنسان.",
        "zh": "汞是一种有用的矿物质，很容易在人体内分解。",
        "ku": "Mercury mîneralek kêrhatî ye ku di laşê mirovan de bi hêsanî tê perçe kirin."
      }
    },
    {
      "id": "u05-f08",
      "fact": {
        "tr": "Sert sular su ısıtıcıları, çamaşır makineleri ve borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.",
        "en": "Hard water creates a limestone (CaCO3) layer in water heaters, washing machines and pipes, causing energy loss.",
        "de": "Hartes Wasser bildet in Warmwasserbereitern, Waschmaschinen und Rohren eine Kalkschicht (CaCO3), die zu Energieverlusten führt.",
        "fr": "L'eau dure crée une couche de calcaire (CaCO3) dans les chauffe-eau, les machines à laver et les canalisations, entraînant une perte d'énergie.",
        "ru": "Жесткая вода создает слой известняка (CaCO3) в водонагревателях, стиральных машинах и трубах, что приводит к потерям энергии.",
        "ar": "يشكل الماء العسر طبقة من الحجر الجيري (CaCO3) في سخانات المياه والغسالات والأنابيب، مما يتسبب في فقدان الطاقة.",
        "zh": "硬水会在热水器、洗衣机和管道中形成石灰石 (CaCO3) 层，导致能量损失。",
        "ku": "Ava hişk di nav germkerên avê, makîneyên şuştinê û boriyan de qatek kevirê kilsin (CaCO3) çêdike û dibe sedema windakirina enerjiyê."
      },
      "trap": {
        "tr": "Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.",
        "en": "Hard water does not create scale in the pipes, on the contrary, it protects the pipes against corrosion.",
        "de": "Hartes Wasser bildet keinen Kalk in den Rohren, sondern schützt die Rohre im Gegenteil vor Korrosion.",
        "fr": "L’eau dure ne crée pas de tartre dans les canalisations, au contraire, elle protège les canalisations contre la corrosion.",
        "ru": "Жесткая вода не создает накипи в трубах, а наоборот, защищает трубы от коррозии.",
        "ar": "الماء العسر لا يخلق ترسبات في الأنابيب، بل على العكس، فهو يحمي الأنابيب من التآكل.",
        "zh": "硬水不会在管道中产生水垢，相反，它可以保护管道免受腐蚀。",
        "ku": "Ava hişk di lûleyan de pîvanê çênake, berovajî boriyan ji korozyonê diparêze."
      }
    },
    {
      "id": "u05-f09",
      "fact": {
        "tr": "Koagülasyon (pıhtılaştırma) ve flokülasyon (yumaklaştırma) su arıtımında askıdaki katı tanecikleri çöktürmek için uygulanır.",
        "en": "Coagulation and flocculation are applied in water treatment to settle suspended solid particles.",
        "de": "Koagulation und Flockung werden in der Wasseraufbereitung angewendet, um suspendierte Feststoffteilchen abzusetzen.",
        "fr": "La coagulation et la floculation sont appliquées dans le traitement de l'eau pour faire décanter les particules solides en suspension.",
        "ru": "Коагуляция и флокуляция применяются при очистке воды для осаждения взвешенных твёрдых частиц.",
        "ar": "يُطبَّق التخثير والتلبيد في معالجة المياه لترسيب الجسيمات الصلبة العالقة.",
        "zh": "在水处理中采用混凝和絮凝使悬浮的固体颗粒沉降。",
        "ku": "Koagulasyon û flokulasyon di paqijkirina avê de ji bo niştandina perçeyên hişk ên daliqandî tên bikaranîn."
      },
      "trap": {
        "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
        "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
        "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
        "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
        "ru": "Коагуляция – это процесс испарения извести в воде путем ее кипячения.",
        "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
        "zh": "混凝是通过煮沸水中的石灰来蒸发的过程。",
        "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
      }
    },
    {
      "id": "u05-f10",
      "fact": {
        "tr": "Klorlama, içme sularındaki patojen mikroorganizmaları yok etmek amacıyla uygulanan dezenfeksiyon işlemidir.",
        "en": "Chlorination is a disinfection process applied to destroy pathogenic microorganisms in drinking water.",
        "de": "Chlorierung ist ein Desinfektionsverfahren zur Abtötung pathogener Mikroorganismen im Trinkwasser.",
        "fr": "La chloration est un procédé de désinfection appliqué pour détruire les micro-organismes pathogènes présents dans l'eau potable.",
        "ru": "Хлорирование – это процесс дезинфекции, применяемый для уничтожения патогенных микроорганизмов в питьевой воде.",
        "ar": "الكلورة هي عملية تطهير تطبق لتدمير الكائنات الحية الدقيقة المسببة للأمراض في مياه الشرب.",
        "zh": "氯化是一种用于消灭饮用水中病原微生物的消毒过程。",
        "ku": "Klorkirin pêvajoyek dezenfektekirinê ye ku ji bo tunekirina mîkrojenîzmayên pathogenîk ên di ava vexwarinê de tê bikar anîn."
      },
      "trap": {
        "tr": "Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.",
        "en": "Chlorination is done to precipitate lead and mercury in water.",
        "de": "Durch Chlorierung werden Blei und Quecksilber im Wasser ausgefällt.",
        "fr": "La chloration vise à précipiter le plomb et le mercure dans l'eau.",
        "ru": "Хлорирование проводится для осаждения свинца и ртути в воде.",
        "ar": "تتم عملية الكلورة لترسيب الرصاص والزئبق في الماء.",
        "zh": "进行氯化以沉淀水中的铅和汞。",
        "ku": "Klorkirin ji bo niştandina sirb û merkurê di avê de tê kirin."
      }
    },
    {
      "id": "u05-f11",
      "fact": {
        "tr": "Ters ozmoz (reverse osmosis), yarı geçirgen zardan yüksek basınç uygulayarak tuzlu sudan tatlı su elde etme yöntemidir.",
        "en": "Reverse osmosis is a method of obtaining fresh water from salt water by applying high pressure through a semi-permeable membrane.",
        "de": "Umkehrosmose ist eine Methode zur Gewinnung von Frischwasser aus Salzwasser durch Anwendung von hohem Druck durch eine semipermeable Membran.",
        "fr": "L'osmose inverse est une méthode permettant d'obtenir de l'eau douce à partir d'eau salée en appliquant une haute pression à travers une membrane semi-perméable.",
        "ru": "Обратный осмос – это метод получения пресной воды из соленой воды путем подачи высокого давления через полупроницаемую мембрану.",
        "ar": "التناضح العكسي هو وسيلة للحصول على المياه العذبة من المياه المالحة عن طريق الضغط العالي من خلال غشاء شبه منفذ.",
        "zh": "反渗透是一种通过半透膜施加高压从盐水中获取淡水的方法。",
        "ku": "osmoza berevajî rêbazek e ku ji ava şor ava şirîn tê bidestxistin bi pêkanîna tansiyona bilind di nav membranek nîv-permeable de."
      },
      "trap": {
        "tr": "Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.",
        "en": "No energy or pressure is required in the reverse osmosis process.",
        "de": "Für den Umkehrosmoseprozess ist weder Energie noch Druck erforderlich.",
        "fr": "Aucune énergie ni pression n’est requise dans le processus d’osmose inverse.",
        "ru": "В процессе обратного осмоса не требуется никакой энергии или давления.",
        "ar": "لا توجد حاجة إلى طاقة أو ضغط في عملية التناضح العكسي.",
        "zh": "反渗透过程不需要能量或压力。",
        "ku": "Di pêvajoya osmoza berevajî de tu enerjî an zext hewce nake."
      }
    },
    {
      "id": "u05-f12",
      "fact": {
        "tr": "Fosil yakıtların kontrolsüz yakılması küresel karbon döngüsünü bozarak atmosferde CO2 birikimine yol açar.",
        "en": "Uncontrolled burning of fossil fuels disrupts the global carbon cycle, leading to CO2 accumulation in the atmosphere.",
        "de": "Die unkontrollierte Verbrennung fossiler Brennstoffe stört den globalen Kohlenstoffkreislauf und führt zur CO2-Anreicherung in der Atmosphäre.",
        "fr": "La combustion incontrôlée de combustibles fossiles perturbe le cycle mondial du carbone, entraînant une accumulation de CO2 dans l’atmosphère.",
        "ru": "Неконтролируемое сжигание ископаемого топлива нарушает глобальный углеродный цикл, что приводит к накоплению CO2 в атмосфере.",
        "ar": "يؤدي حرق الوقود الأحفوري بشكل غير منضبط إلى تعطيل دورة الكربون العالمية، مما يؤدي إلى تراكم ثاني أكسيد الكربون في الغلاف الجوي.",
        "zh": "化石燃料不受控制的燃烧扰乱了全球碳循环，导致二氧化碳在大气中积累。",
        "ku": "Şewitandina bêkontrol a sotemeniyên fosîl çerxa karbonê ya gerdûnî têk dibe û dibe sedema kombûna CO2 li atmosferê."
      },
      "trap": {
        "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
        "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
        "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
        "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
        "ru": "Когда ископаемое топливо сжигается, в атмосферу выделяется только чистый водяной пар.",
        "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
        "zh": "当化石燃料燃烧时，它们仅向大气中释放纯净的水蒸气。",
        "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
      }
    },
    {
      "id": "u05-f13",
      "fact": {
        "tr": "pH değeri 5,6'nın altında olan yağışlar asit yağmuru olarak kabul edilir.",
        "en": "Precipitation with a pH value below 5.6 is considered acid rain.",
        "de": "Als saurer Regen gilt Niederschlag mit einem pH-Wert unter 5,6.",
        "fr": "Les précipitations dont le pH est inférieur à 5,6 sont considérées comme des pluies acides.",
        "ru": "Осадки со значением pH ниже 5,6 считаются кислотными дождями.",
        "ar": "ويعتبر هطول الأمطار مع قيمة الرقم الهيدروجيني أقل من 5.6 المطر الحمضي.",
        "zh": "pH值低于5.6的降水被视为酸雨。",
        "ku": "Barîna bi nirxa pH di bin 5,6 de wekî barana asîd tê hesibandin."
      },
      "trap": {
        "tr": "Doğal saf yağmur suyunun pH değeri tam 7,0'dır.",
        "en": "The pH value of natural pure rainwater is exactly 7.0.",
        "de": "Der pH-Wert von natürlichem, reinem Regenwasser beträgt genau 7,0.",
        "fr": "Le pH de l’eau de pluie pure et naturelle est exactement de 7,0.",
        "ru": "Значение pH природной чистой дождевой воды составляет ровно 7,0.",
        "ar": "قيمة الرقم الهيدروجيني لمياه الأمطار الطبيعية النقية هي بالضبط 7.0.",
        "zh": "天然纯净雨水的pH值恰好为7.0。",
        "ku": "Nirxa pH ya ava baranê ya safî ya xwezayî tam 7.0 e."
      }
    },
    {
      "id": "u05-f14",
      "fact": {
        "tr": "Toprak ve su kirliliğine neden olan piller kesinlikle çöpe atılmamalı, atık pil kutularında toplanmalıdır.",
        "en": "Batteries that cause soil and water pollution should never be thrown away and should be collected in waste battery boxes.",
        "de": "Batterien, die Boden- und Wasserverschmutzung verursachen, sollten niemals weggeworfen und in Altbatterieboxen gesammelt werden.",
        "fr": "Les batteries qui polluent le sol et l’eau ne doivent jamais être jetées et doivent être collectées dans des conteneurs pour batteries usagées.",
        "ru": "Батарейки, загрязняющие почву и воду, никогда не следует выбрасывать, их следует собирать в контейнеры для использованных батарей.",
        "ar": "لا ينبغي أبدًا التخلص من البطاريات التي تسبب تلوث التربة والمياه، ويجب جمعها في صناديق نفايات البطاريات.",
        "zh": "造成土壤和水污染的电池切勿丢弃，应收集在废电池箱中。",
        "ku": "Pîlên ku dibin sedema qirêjiya ax û avê divê tu carî neyên avêtin û di qutiyên pîlê yên çopê de werin berhev kirin."
      },
      "trap": {
        "tr": "Kullanılmış piller yakılarak güvenle yok edilebilir.",
        "en": "Used batteries can be safely disposed of by burning.",
        "de": "Verbrauchte Batterien können durch Verbrennen sicher entsorgt werden.",
        "fr": "Les piles usagées peuvent être éliminées en toute sécurité en les brûlant.",
        "ru": "Использованные батарейки можно безопасно утилизировать путем сжигания.",
        "ar": "يمكن التخلص من البطاريات المستعملة بشكل آمن عن طريق حرقها.",
        "zh": "废旧电池可以通过焚烧的方式安全处置。",
        "ku": "Pîlên bikar anîn dikarin bi şewitandinê bi ewlehî werin avêtin."
      }
    },
    {
      "id": "u05-f15",
      "fact": {
        "tr": "Yeşil kimya ilkeleri, atık oluşumunu kaynağında önlemeyi ve yenilenebilir hammadde kullanımını hedefler.",
        "en": "Green chemistry principles aim to prevent waste generation at its source and use renewable raw materials.",
        "de": "Die Grundsätze der Grünen Chemie zielen darauf ab, die Entstehung von Abfällen an der Quelle zu verhindern und nachwachsende Rohstoffe zu verwenden.",
        "fr": "Les principes de la chimie verte visent à prévenir la production de déchets à la source et à utiliser des matières premières renouvelables.",
        "ru": "Принципы зеленой химии направлены на предотвращение образования отходов у их источника и использование возобновляемого сырья.",
        "ar": "تهدف مبادئ الكيمياء الخضراء إلى منع توليد النفايات من مصدرها واستخدام المواد الخام المتجددة.",
        "zh": "绿色化学原则旨在从源头防止废物产生并使用可再生原材料。",
        "ku": "Prensîbên kîmya kesk armanc dike ku pêşî li hilberîna bermayiyê li çavkaniya xwe bigire û madeyên xav ên nûvekirî bikar bîne."
      },
      "trap": {
        "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
        "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
        "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
        "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
        "ru": "Зеленая химия выступает за хранение ядерных отходов на дне океана.",
        "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
        "zh": "绿色化学提倡将核废料储存在海底。",
        "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
      }
    },
    {
      "id": "u05-f16",
      "fact": {
        "tr": "Yumuşak sular Ca2+ ve Mg2+ iyonlarınca fakir olduğundan sabunu kolay köpürtür ve tesisatta kireç tortusu bırakmaz.",
        "en": "Soft waters are poor in Ca2+ and Mg2+ ions, so they lather soap easily and do not leave limescale in plumbing.",
        "de": "Weiches Wasser ist arm an Ca2+- und Mg2+-Ionen; daher schäumt Seife leicht und es bildet sich kein Kalk in den Leitungen.",
        "fr": "Les eaux douces sont pauvres en ions Ca2+ et Mg2+ ; elles font donc facilement mousser le savon et ne laissent pas de tartre dans la plomberie.",
        "ru": "Мягкая вода бедна ионами Ca2+ и Mg2+, поэтому мыло в ней легко пенится, а в трубах не образуется накипь.",
        "ar": "المياه اليسرة فقيرة بأيونات Ca2+ وMg2+، لذا تُرغي الصابون بسهولة ولا تترك ترسبات كلسية في التمديدات.",
        "zh": "软水中 Ca2+ 和 Mg2+ 离子含量低，因此肥皂易起泡，且不会在管道中留下水垢。",
        "ku": "Avên nerm ji aliyê îyonên Ca2+ û Mg2+ ve feqîr in, ji ber vê yekê sabûn bi hêsanî kef dike û di boriyan de kils namîne."
      },
      "trap": {
        "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
        "en": "Soft waters leave plenty of lime deposits.",
        "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
        "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
        "ru": "Мягкие воды оставляют много известковых отложений.",
        "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
        "zh": "软水会留下大量石灰沉积物。",
        "ku": "Avên nerm gelek depoyên lîmê dihêlin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u05-c01",
      "conceptA": {
        "tr": "Geçici Sertlik",
        "en": "Temporary Hardness",
        "de": "Vorübergehende Härte",
        "fr": "Dureté temporaire",
        "ru": "Временная жёсткость",
        "ar": "العسر المؤقت",
        "zh": "临时硬度",
        "ku": "Serhişkiya Demkî"
      },
      "conceptB": {
        "tr": "Kalıcı Sertlik",
        "en": "Permanent Hardness",
        "de": "Dauerhafte Härte",
        "fr": "Dureté permanente",
        "ru": "Постоянная жёсткость",
        "ar": "العسر الدائم",
        "zh": "永久硬度",
        "ku": "Serhişkiya Daîmî"
      },
      "distinction": {
        "tr": "Geçici sertlik bikarbonat tuzlarından kaynaklanır ve kaynatılarak giderilir; kalıcı sertlik sülfat/klorür tuzlarından kaynaklanır reçineyle giderilir.",
        "en": "Temporary hardness is caused by bicarbonate salts and is removed by boiling; Permanent hardness is caused by sulfate/chloride salts and is removed by the resin.",
        "de": "Vorübergehende Härte entsteht durch Bikarbonatsalze und wird durch Kochen beseitigt; Dauerhafte Härte entsteht durch Sulfat-/Chloridsalze und wird durch das Harz abgebaut.",
        "fr": "La dureté temporaire est causée par les sels de bicarbonate et est éliminée par ébullition ; La dureté permanente est causée par les sels de sulfate/chlorure et est éliminée par la résine.",
        "ru": "Временная жесткость вызвана бикарбонатными солями и удаляется кипячением; Постоянная жесткость вызвана сульфатными/хлоридными солями и удаляется смолой.",
        "ar": "ينتج العسر المؤقت عن أملاح البيكربونات ويُزال بالغليان؛ وينتج العسر الدائم عن أملاح الكبريتات/الكلوريد ويُزال بالراتنج.",
        "zh": "暂时硬度是由碳酸氢盐引起的，可通过煮沸去除；永久硬度是由硫酸盐/氯化物盐引起的，并被树脂去除。",
        "ku": "Serhişkiya demkî ji ber xwêyên bîkarbonat çêdibe û bi kelandinê tê derxistin; serhişkiya daîmî ji ber xwêyên sulfat/klorîdê çêdibe û bi rezînê tê derxistin."
      }
    },
    {
      "id": "u05-c02",
      "conceptA": {
        "tr": "Sera Etkisi",
        "en": "Greenhouse Effect",
        "de": "Treibhauseffekt",
        "fr": "Effet de serre",
        "ru": "Парниковый эффект",
        "ar": "تأثير الاحتباس الحراري",
        "zh": "温室效应",
        "ku": "Bandora serayê"
      },
      "conceptB": {
        "tr": "Ozon Tabakası İncelmesi",
        "en": "Ozone Layer Depletion",
        "de": "Abbau der Ozonschicht",
        "fr": "Appauvrissement de la couche d'ozone",
        "ru": "Истощение озонового слоя",
        "ar": "استنفاد طبقة الأوزون",
        "zh": "臭氧层消耗",
        "ku": "Hilweşîna Layera Ozonê"
      },
      "distinction": {
        "tr": "Sera etkisi küresel ısınmaya yol açarken ozon incelmesi zararlı UV ışınlarının yeryüzüne ulaşmasına neden olur.",
        "en": "While the greenhouse effect causes global warming, ozone depletion causes harmful UV rays to reach the earth.",
        "de": "Während der Treibhauseffekt die globale Erwärmung verursacht, führt der Ozonabbau dazu, dass schädliche UV-Strahlen die Erde erreichen.",
        "fr": "Alors que l’effet de serre provoque le réchauffement climatique, l’appauvrissement de la couche d’ozone provoque la propagation des rayons UV nocifs sur la Terre.",
        "ru": "В то время как парниковый эффект вызывает глобальное потепление, разрушение озона приводит к тому, что вредные ультрафиолетовые лучи достигают земли.",
        "ar": "في حين أن ظاهرة الاحتباس الحراري تسبب ظاهرة الاحتباس الحراري، فإن استنفاد الأوزون يؤدي إلى وصول الأشعة فوق البنفسجية الضارة إلى الأرض.",
        "zh": "温室效应导致全球变暖，而臭氧层消耗则导致有害的紫外线到达地球。",
        "ku": "Dema ku bandora serayê dibe sedema germbûna gerdûnî, hilweşîna ozonê dibe sedem ku tîrêjên UV yên zirardar bigihîje erdê."
      }
    },
    {
      "id": "u05-c03",
      "conceptA": {
        "tr": "Sert Su",
        "en": "Hard Water",
        "de": "Hartes Wasser",
        "fr": "Eau Dure",
        "ru": "Жесткая вода",
        "ar": "الماء العسر",
        "zh": "硬水",
        "ku": "Ava hişk"
      },
      "conceptB": {
        "tr": "Yumuşak Su",
        "en": "Soft Water",
        "de": "Weiches Wasser",
        "fr": "Eau douce",
        "ru": "Мягкая вода",
        "ar": "الماء اليسر",
        "zh": "软水",
        "ku": "Avê nerm"
      },
      "distinction": {
        "tr": "Sert su yüksek Ca2+ ve Mg2+ içerir, sabunla çökelek yapar; yumuşak su mineralce fakir olup sabunu kolay köpürtür.",
        "en": "Hard water contains high Ca2+ and Mg2+ and forms precipitates with soap; Soft water is low in minerals and makes soap lather easily.",
        "de": "Hartes Wasser enthält viel Ca2+ und Mg2+ und bildet mit Seife Niederschläge; Weiches Wasser ist arm an Mineralien und sorgt dafür, dass Seife leicht schäumt.",
        "fr": "L'eau dure contient beaucoup de Ca2+ et de Mg2+ et forme des précipités avec le savon ; L’eau douce est pauvre en minéraux et fait mousser facilement le savon.",
        "ru": "Жесткая вода содержит большое количество Ca2+ и Mg2+ и образует осадки с мылом; В мягкой воде мало минералов, поэтому мыло легко пенится.",
        "ar": "يحتوي الماء العسر على نسبة عالية من Ca2+ وMg2+ ويتشكل رواسب مع الصابون؛ الماء اليسر منخفض في المعادن ويجعل الصابون رغويًا بسهولة.",
        "zh": "硬水含有较高的Ca2+和Mg2+，与肥皂形成沉淀；软水矿物质含量低，容易使肥皂起泡。",
        "ku": "Di ava hişk de Ca2+ û Mg2+-ya zêde heye û bi sabûnê diherike; Ava nerm di mîneralan de kêm e û sabûnê bi hêsanî çêdike."
      }
    },
    {
      "id": "u05-c04",
      "conceptA": {
        "tr": "Koagülasyon (Pıhtılaştırma)",
        "en": "Coagulation",
        "de": "Koagulation",
        "fr": "Coagulation",
        "ru": "Коагуляция",
        "ar": "التخثير",
        "zh": "混凝",
        "ku": "Koagulasyon"
      },
      "conceptB": {
        "tr": "Klorlama (Dezenfeksiyon)",
        "en": "Chlorination (Disinfection)",
        "de": "Chlorung (Desinfektion)",
        "fr": "Chloration (désinfection)",
        "ru": "Хлорирование (дезинфекция)",
        "ar": "الكلورة (التطهير)",
        "zh": "氯化（消毒）",
        "ku": "Klorkirin (Dezenfeksiyon)"
      },
      "distinction": {
        "tr": "Koagülasyon, askıdaki küçük tanecikleri alüminyum sülfat gibi maddelerle topaklaştırıp çöktürür; klorlama ise sudaki hastalık yapıcı mikroorganizmaları öldürür.",
        "en": "Coagulation clumps small suspended particles together with agents such as aluminium sulfate so that they settle; chlorination kills disease-causing microorganisms in the water.",
        "de": "Die Koagulation ballt kleine Schwebeteilchen mit Mitteln wie Aluminiumsulfat zusammen, sodass sie sich absetzen; die Chlorung tötet krankheitserregende Mikroorganismen im Wasser ab.",
        "fr": "La coagulation agglomère les petites particules en suspension à l'aide d'agents comme le sulfate d'aluminium pour qu'elles décantent ; la chloration tue les micro-organismes pathogènes de l'eau.",
        "ru": "Коагуляция с помощью веществ вроде сульфата алюминия укрупняет мелкие взвешенные частицы, и они оседают; хлорирование убивает болезнетворные микроорганизмы в воде.",
        "ar": "يجمّع التخثير الجسيمات العالقة الصغيرة بمواد مثل كبريتات الألومنيوم فتترسب؛ أما الكلورة فتقتل الكائنات الدقيقة المسببة للأمراض في الماء.",
        "zh": "混凝是用硫酸铝等试剂使细小悬浮颗粒聚集沉降；氯化则杀死水中的致病微生物。",
        "ku": "Koagulasyon perçeyên piçûk ên daliqandî bi madeyên wek sulfata aluminyûmê kom dike da ku binişin; klorkirin jî mîkroorganîzmayên nexweşîçêker ên di avê de dikuje."
      }
    },
    {
      "id": "u05-c05",
      "conceptA": {
        "tr": "Asidik Oksit (SO3, NO2)",
        "en": "Acidic Oxide (SO3, NO2)",
        "de": "Saures Oxid (SO3, NO2)",
        "fr": "Oxyde acide (SO3, NO2)",
        "ru": "Кислый оксид (SO3, NO2)",
        "ar": "أكسيد حمضي (SO3، NO2)",
        "zh": "酸性氧化物（SO3、NO2）",
        "ku": "Oksîdê Asîdî (SO3, NO2)"
      },
      "conceptB": {
        "tr": "Nötr Oksit (CO, NO)",
        "en": "Neutral Oxide (CO, NO)",
        "de": "Neutrales Oxid (CO, NO)",
        "fr": "Oxyde neutre (CO, NO)",
        "ru": "Нейтральный оксид (CO, NO)",
        "ar": "أكسيد محايد (CO، NO)",
        "zh": "中性氧化物（CO、NO）",
        "ku": "Oksîdê Bêalî (CO, NO)"
      },
      "distinction": {
        "tr": "Asidik oksitler ametallerin oksijence zengin bileşikleri olup asit yağmuru yapar; nötr oksitler suda asit oluşturmaz.",
        "en": "Acidic oxides are oxygen-rich compounds of nonmetals and cause acid rain; Neutral oxides do not form acids in water.",
        "de": "Saure Oxide sind sauerstoffreiche Verbindungen von Nichtmetallen und verursachen sauren Regen; Neutrale Oxide bilden im Wasser keine Säuren.",
        "fr": "Les oxydes acides sont des composés de non-métaux riches en oxygène et provoquent des pluies acides ; Les oxydes neutres ne forment pas d'acides dans l'eau.",
        "ru": "Кислотные оксиды представляют собой богатые кислородом соединения неметаллов и вызывают кислотные дожди; Нейтральные оксиды не образуют кислот в воде.",
        "ar": "الأكاسيد الحمضية عبارة عن مركبات غنية بالأكسجين من اللافلزات وتسبب المطر الحمضي. لا تشكل الأكاسيد المحايدة أحماضًا في الماء.",
        "zh": "酸性氧化物是非金属的富氧化合物，会引起酸雨；中性氧化物在水中不形成酸。",
        "ku": "Oksîdên asîdî pêkhateyên nemetalên dewlemend ên oksîjenê ne û dibin sedema barana asîd; Oksîdên bêalî di avê de asîd çênabin."
      }
    },
    {
      "id": "u05-c06",
      "conceptA": {
        "tr": "Biyolojik Birikim",
        "en": "Bioaccumulation",
        "de": "Bioakkumulation",
        "fr": "Bioaccumulation",
        "ru": "Биоаккумуляция",
        "ar": "التراكم الحيوي",
        "zh": "生物累积性",
        "ku": "Biyokombûn"
      },
      "conceptB": {
        "tr": "Doğal Geri Dönüşüm",
        "en": "Natural Recycling",
        "de": "Natürliches Recycling",
        "fr": "Recyclage naturel",
        "ru": "Естественная переработка",
        "ar": "إعادة التدوير الطبيعية",
        "zh": "自然回收",
        "ku": "Vezîvirandina xwezayî"
      },
      "distinction": {
        "tr": "Ağır metaller besin piramidinde üst basamaklara doğru katlanarak birikir ve zehirler; organik atıklar ise mikroorganizmalarca ayrıştırılır.",
        "en": "Heavy metals accumulate and poison towards the upper levels of the food pyramid; Organic waste is decomposed by microorganisms.",
        "de": "Schwermetalle sammeln sich an und vergiften die oberen Ebenen der Ernährungspyramide; Organische Abfälle werden durch Mikroorganismen zersetzt.",
        "fr": "Les métaux lourds s’accumulent et s’empoisonnent vers les niveaux supérieurs de la pyramide alimentaire ; Les déchets organiques sont décomposés par des micro-organismes.",
        "ru": "Тяжелые металлы накапливаются и отравляют верхние уровни пищевой пирамиды; Органические отходы разлагаются микроорганизмами.",
        "ar": "تتراكم المعادن الثقيلة وتتسمم باتجاه المستويات العليا للهرم الغذائي؛ تتحلل النفايات العضوية بواسطة الكائنات الحية الدقيقة.",
        "zh": "重金属向食物金字塔的上层累积并产生毒害；有机废物被微生物分解。",
        "ku": "Metalên giran ber bi astên jor ên pîramîda xwarinê kom dibin û jehrê dikin; Bermayiyên organîk ji aliyê mîkroorganîzmayan ve tê hilweşandin."
      }
    },
    {
      "id": "u05-c07",
      "conceptA": {
        "tr": "Toprak Kirliliği",
        "en": "Soil Pollution",
        "de": "Bodenverschmutzung",
        "fr": "Pollution des sols",
        "ru": "Загрязнение почвы",
        "ar": "تلوث التربة",
        "zh": "土壤污染",
        "ku": "Qirêjiya axê"
      },
      "conceptB": {
        "tr": "Su Kirliliği",
        "en": "Water Pollution",
        "de": "Wasserverschmutzung",
        "fr": "Pollution de l'eau",
        "ru": "Загрязнение воды",
        "ar": "تلوث المياه",
        "zh": "水污染",
        "ku": "Avê qirêjbûn"
      },
      "distinction": {
        "tr": "Toprak kirliliği aşırı gübre ve pestisitlerle oluşur; su kirliliği fabrika atıkları ve ağır metallerin sulara karışmasıdır.",
        "en": "Soil pollution occurs with excessive fertilizers and pesticides; Water pollution is the mixing of factory wastes and heavy metals into water.",
        "de": "Bodenverschmutzung entsteht durch übermäßige Düngung und Pestizide; Unter Wasserverschmutzung versteht man die Vermischung von Fabrikabfällen und Schwermetallen mit dem Wasser.",
        "fr": "La pollution des sols se produit avec un excès d'engrais et de pesticides ; La pollution de l’eau est le mélange de déchets d’usine et de métaux lourds dans l’eau.",
        "ru": "Загрязнение почвы происходит из-за чрезмерного внесения удобрений и пестицидов; Загрязнение воды – это попадание в воду промышленных отходов и тяжелых металлов.",
        "ar": "يحدث تلوث التربة بالإفراط في استخدام الأسمدة والمبيدات الحشرية؛ تلوث المياه هو خلط نفايات المصانع والمعادن الثقيلة في الماء.",
        "zh": "化肥、农药过量造成土壤污染；水污染是工厂废物和重金属混合到水中。",
        "ku": "Qirêjiya axê bi gubre û dermanên zêde çêdibe; Qirêjiya avê tevlihevkirina bermahiyên kargehan û metalên giran di nav avê de ye."
      }
    },
    {
      "id": "u05-c08",
      "conceptA": {
        "tr": "Ters Ozmoz",
        "en": "Reverse Osmosis",
        "de": "Umkehrosmose",
        "fr": "Osmose inverse",
        "ru": "Обратный осмос",
        "ar": "التناضح العكسي",
        "zh": "反渗透",
        "ku": "Osmoza berevajî"
      },
      "conceptB": {
        "tr": "Damıtma",
        "en": "Distillation",
        "de": "Destillation",
        "fr": "Distillation",
        "ru": "Дистилляция",
        "ar": "التقطير",
        "zh": "蒸馏",
        "ku": "Distîlasyon"
      },
      "distinction": {
        "tr": "Ters ozmozda tuzlu suya basınç uygulanır, su molekülleri yarı geçirgen zardan geçer ve iyonlar zarda tutulur; damıtmada su ısıtılarak buharlaştırılır ve buhar yoğuşturularak saf su elde edilir.",
        "en": "In reverse osmosis, pressure is applied to salt water so that water molecules pass through a semi-permeable membrane while the ions are retained; in distillation, water is heated to vaporize it and the vapor is condensed to obtain pure water.",
        "de": "Bei der Umkehrosmose wird Druck auf Salzwasser ausgeübt, sodass Wassermoleküle eine semipermeable Membran passieren und die Ionen zurückgehalten werden; bei der Destillation wird Wasser durch Erhitzen verdampft und der Dampf zu reinem Wasser kondensiert.",
        "fr": "En osmose inverse, on applique une pression à l'eau salée : les molécules d'eau traversent une membrane semi-perméable et les ions sont retenus ; en distillation, l'eau est chauffée pour être vaporisée, puis la vapeur est condensée pour obtenir de l'eau pure.",
        "ru": "При обратном осмосе на солёную воду оказывают давление, молекулы воды проходят через полупроницаемую мембрану, а ионы задерживаются; при дистилляции воду нагревают до испарения, а пар конденсируют, получая чистую воду.",
        "ar": "في التناضح العكسي يُطبَّق ضغط على الماء المالح فتعبر جزيئات الماء غشاءً شبه منفذ وتُحتجز الأيونات؛ وفي التقطير يُسخَّن الماء حتى يتبخر ثم يُكثَّف البخار للحصول على ماء نقي.",
        "zh": "反渗透是对盐水加压，使水分子透过半透膜而离子被截留；蒸馏是加热使水汽化，再将水蒸气冷凝得到纯水。",
        "ku": "Di osmoza berevajî de zext li ava şor tê kirin, molekulên avê di parzûna nîv-derbasbar re derbas dibin û îyon li ser parzûnê dimînin; di distîlasyonê de av tê germkirin û dibe buhar, paşê buhar tê kondensekirin û ava paqij tê bidestxistin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u05-s01",
      "title": {
        "tr": "İçme Suyu Arıtma Aşamaları",
        "en": "Drinking Water Purification Stages",
        "de": "Stufen der Trinkwasseraufbereitung",
        "fr": "Étapes de purification de l’eau potable",
        "ru": "Этапы очистки питьевой воды",
        "ar": "مراحل تنقية مياه الشرب",
        "zh": "饮用水净化阶段",
        "ku": "Qonaxên Paqijkirina Ava Vexwarinê"
      },
      "steps": [
        {
          "tr": "Kaba ızgaradan geçirme",
          "en": "Coarse screening",
          "de": "Grobe Siebung",
          "fr": "Criblage grossier",
          "ru": "Грубый скрининг",
          "ar": "الفحص الخشن",
          "zh": "粗筛",
          "ku": "Derbaskirin ji parzûna qelew"
        },
        {
          "tr": "Koagülasyon ve çöktürme",
          "en": "Coagulation and precipitation",
          "de": "Koagulation und Niederschlag",
          "fr": "Coagulation et précipitation",
          "ru": "Коагуляция и осаждение",
          "ar": "التخثير والترسيب",
          "zh": "混凝沉淀",
          "ku": "Koagulasyon û niştandin"
        },
        {
          "tr": "Kum filtrelerinden süzme",
          "en": "Filtering through sand filters",
          "de": "Filterung durch Sandfilter",
          "fr": "Filtrage à travers des filtres à sable",
          "ru": "Фильтрация через песочные фильтры",
          "ar": "التصفية من خلال المرشحات الرملية",
          "zh": "通过砂滤器过滤",
          "ku": "Parzûnkirina bi parzûnên qûmê"
        },
        {
          "tr": "Klorla dezenfeksiyon",
          "en": "Disinfection with chlorine",
          "de": "Desinfektion mit Chlor",
          "fr": "Désinfection au chlore",
          "ru": "Дезинфекция хлором",
          "ar": "التطهير بالكلور",
          "zh": "用氯消毒",
          "ku": "Dezenfektekirina bi klorê"
        }
      ]
    },
    {
      "id": "u05-s02",
      "title": {
        "tr": "Asit Yağmuru Oluşum Zinciri",
        "en": "Acid Rain Formation Chain",
        "de": "Entstehungskette des sauren Regens",
        "fr": "Chaîne de formation des pluies acides",
        "ru": "Цепочка образования кислотных дождей",
        "ar": "سلسلة تكوين المطر الحمضي",
        "zh": "酸雨形成链",
        "ku": "Zincîra Çêkirina Barana Acid"
      },
      "steps": [
        {
          "tr": "Fosil yakıtların yanmasıyla SO2 ve NO2 salınır",
          "en": "SO2 and NO2 are released by burning fossil fuels",
          "de": "SO2 und NO2 werden bei der Verbrennung fossiler Brennstoffe freigesetzt",
          "fr": "Le SO2 et le NO2 sont libérés par la combustion de combustibles fossiles",
          "ru": "SO2 и NO2 выделяются при сжигании ископаемого топлива.",
          "ar": "يتم إطلاق ثاني أكسيد الكبريت وثاني أكسيد النيتروجين عن طريق حرق الوقود الأحفوري",
          "zh": "燃烧化石燃料会释放 SO2 和 NO2",
          "ku": "SO2 û NO2 bi şewitandina sotemeniyên fosîl tên berdan"
        },
        {
          "tr": "Gazlar atmosferdeki su buharıyla karşılaşır",
          "en": "Gases encounter water vapor in the atmosphere",
          "de": "Gase treffen in der Atmosphäre auf Wasserdampf",
          "fr": "Les gaz rencontrent de la vapeur d'eau dans l'atmosphère",
          "ru": "Газы встречаются с водяным паром в атмосфере",
          "ar": "تواجه الغازات بخار الماء في الغلاف الجوي",
          "zh": "气体在大气中遇到水蒸气",
          "ku": "Gaz di atmosferê de bi buhra avê re rû bi rû dimînin"
        },
        {
          "tr": "Sülfürik asit ve nitrik asit oluşur",
          "en": "Sulfuric acid and nitric acid are formed",
          "de": "Es entstehen Schwefelsäure und Salpetersäure",
          "fr": "De l'acide sulfurique et de l'acide nitrique se forment",
          "ru": "Образуются серная и азотная кислоты.",
          "ar": "يتكون حمض الكبريتيك وحمض النيتريك",
          "zh": "生成硫酸和硝酸",
          "ku": "Asîdê sulfurîk û asîda nîtrîk çêdibin"
        },
        {
          "tr": "pH değeri 5,6'nın altında olan asit yağmuru yağar",
          "en": "Acid rain with a pH below 5.6 falls",
          "de": "Es fällt saurer Regen mit einem pH-Wert unter 5,6",
          "fr": "Il tombe une pluie acide de pH inférieur à 5,6",
          "ru": "Выпадает кислотный дождь с pH ниже 5,6",
          "ar": "يهطل مطر حمضي قيمة الرقم الهيدروجيني له أقل من 5.6",
          "zh": "降下 pH 低于 5.6 的酸雨",
          "ku": "Barana asîdî ya bi pH di bin 5,6 de dibare"
        }
      ]
    },
    {
      "id": "u05-s03",
      "title": {
        "tr": "Sera Etkisi ve Küresel Isınma",
        "en": "Greenhouse Effect and Global Warming",
        "de": "Treibhauseffekt und globale Erwärmung",
        "fr": "Effet de serre et réchauffement climatique",
        "ru": "Парниковый эффект и глобальное потепление",
        "ar": "تأثير الاحتباس الحراري والاحتباس الحراري",
        "zh": "温室效应和全球变暖",
        "ku": "Bandora Serayê û Germbûna Gerdûnî"
      },
      "steps": [
        {
          "tr": "Güneşten gelen kısa dalgalı ışınlar yeryüzüne ulaşır",
          "en": "Short wave rays from the sun reach the earth",
          "de": "Kurzwellige Strahlen der Sonne erreichen die Erde",
          "fr": "Les rayons à ondes courtes du soleil atteignent la terre",
          "ru": "Коротковолновые лучи Солнца достигают Земли",
          "ar": "تصل الأشعة القصيرة الموجة القادمة من الشمس إلى الأرض",
          "zh": "来自太阳的短波光线到达地球",
          "ku": "Tîrêjên pêlên kurt ên rojê digihêjin erdê"
        },
        {
          "tr": "Yeryüzü ısınarak uzun dalgalı kızılötesi ışın yayar",
          "en": "The earth heats up and emits long-wave infrared radiation",
          "de": "Die Erde erwärmt sich und sendet langwellige Infrarotstrahlung aus",
          "fr": "La Terre se réchauffe et émet un rayonnement infrarouge à ondes longues",
          "ru": "Земля нагревается и испускает длинноволновое инфракрасное излучение.",
          "ar": "تسخن الأرض وتنبعث منها الأشعة تحت الحمراء ذات الموجة الطويلة",
          "zh": "地球升温并发出长波红外辐射",
          "ku": "Erd germ dibe û tîrêjên înfrasor ên pêlên dirêj derdixe"
        },
        {
          "tr": "CO2 ve CH4 gazları bu ışınları soğurur",
          "en": "CO2 and CH4 gases absorb these rays",
          "de": "CO2- und CH4-Gase absorbieren diese Strahlen",
          "fr": "Les gaz CO2 et CH4 absorbent ces rayons",
          "ru": "Газы CO2 и CH4 поглощают эти лучи.",
          "ar": "وتمتص غازات ثاني أكسيد الكربون والميثان هذه الأشعة",
          "zh": "CO2 和 CH4 气体吸收这些射线",
          "ku": "Gazên CO2 û CH4 van tîrêjan digirin"
        },
        {
          "tr": "Atmosferin ortalama sıcaklığı kademeli artar",
          "en": "The average temperature of the atmosphere gradually increases",
          "de": "Die durchschnittliche Temperatur der Atmosphäre steigt allmählich an",
          "fr": "La température moyenne de l'atmosphère augmente progressivement",
          "ru": "Средняя температура атмосферы постепенно повышается",
          "ar": "ويرتفع متوسط درجة حرارة الغلاف الجوي تدريجياً",
          "zh": "大气平均温度逐渐升高",
          "ku": "Germahiya navîn ya atmosferê gav bi gav zêde dibe"
        }
      ]
    },
    {
      "id": "u05-s04",
      "title": {
        "tr": "İyon Değiştirici ile Su Yumuşatma",
        "en": "Water Softening with Ion Exchanger",
        "de": "Wasserenthärtung mit Ionenaustauscher",
        "fr": "Adoucissement de l'eau avec échangeur d'ions",
        "ru": "Умягчение воды ионообменником",
        "ar": "تليين المياه باستخدام المبادل الأيوني",
        "zh": "使用离子交换器软化水",
        "ku": "Nermkirina Avê bi Ion Exchanger"
      },
      "steps": [
        {
          "tr": "Sert su reçine kolonundan geçirilir",
          "en": "Hard water is passed through the resin column",
          "de": "Hartes Wasser wird durch die Harzsäule geleitet",
          "fr": "L'eau dure passe à travers la colonne de résine",
          "ru": "Жесткая вода проходит через колонну смолы.",
          "ar": "يتم تمرير الماء العسر من خلال عمود الراتنج",
          "zh": "硬水通过树脂柱",
          "ku": "Ava hişk di stûna resin re derbas dibe"
        },
        {
          "tr": "Sudaki Ca2+ ve Mg2+ iyonları reçineye bağlanır",
          "en": "Ca2+ and Mg2+ ions in water bind to the resin",
          "de": "Ca2+- und Mg2+-Ionen im Wasser binden an das Harz",
          "fr": "Les ions Ca2+ et Mg2+ dans l'eau se lient à la résine",
          "ru": "Ионы Ca2+ и Mg2+ в воде связываются со смолой.",
          "ar": "ترتبط أيونات Ca2+ وMg2+ الموجودة في الماء بالراتنج",
          "zh": "水中的 Ca2+ 和 Mg2+ 离子与树脂结合",
          "ku": "Di avê de îyonên Ca2+ û Mg2+ bi resinê ve girêdidin"
        },
        {
          "tr": "Reçineden suya Na+ iyonları salınır",
          "en": "Na+ ions are released from the resin into the water",
          "de": "Na+-Ionen werden aus dem Harz an das Wasser abgegeben",
          "fr": "Les ions Na+ sont libérés de la résine dans l'eau",
          "ru": "Ионы Na+ выделяются из смолы в воду.",
          "ar": "يتم إطلاق أيونات Na+ من الراتنج إلى الماء",
          "zh": "Na+离子从树脂中释放到水中",
          "ku": "Îyonên Na+ ji resinê berdidin nav avê"
        },
        {
          "tr": "Kireç oluşturmayan yumuşak su elde edilir",
          "en": "Soft water that does not form lime is obtained",
          "de": "Man erhält weiches Wasser, das keinen Kalk bildet",
          "fr": "On obtient de l'eau douce qui ne forme pas de calcaire",
          "ru": "Получается мягкая вода, не образующая извести.",
          "ar": "يتم الحصول على الماء اليسر الذي لا يشكل الجير",
          "zh": "获得不形成石灰的软水",
          "ku": "Ava nerm a ku lîm çênabe tê bidestxistin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u05-twin01",
      "stem": {
        "tr": "Aşağıdaki gazlardan hangisi atmosferde asit yağmuru oluşumuna doğrudan katkı sağlayan asidik oksitlerden biridir?",
        "en": "Which of the following gases is one of the acidic oxides that directly contribute to the formation of acid rain in the atmosphere?",
        "de": "Welches der folgenden Gase gehört zu den sauren Oxiden, die direkt zur Bildung von saurem Regen in der Atmosphäre beitragen?",
        "fr": "Lequel des gaz suivants fait partie des oxydes acides qui contribuent directement à la formation de pluies acides dans l’atmosphère ?",
        "ru": "Какой из следующих газов относится к числу кислотных оксидов, которые непосредственно способствуют образованию кислотных дождей в атмосфере?",
        "ar": "أي الغازات التالية يعد أحد الأكاسيد الحمضية التي تساهم بشكل مباشر في تكوين المطر الحمضي في الغلاف الجوي؟",
        "zh": "以下哪种气体是直接导致大气中酸雨形成的酸性氧化物之一？",
        "ku": "Kîjan ji van gazên jêrîn yek ji wan oksîtên asîd e ku rasterast beşdarî çêbûna barana asîd li atmosferê dibe?"
      },
      "options": [
        {
          "tr": "SO3",
          "en": "SO3",
          "de": "SO3",
          "fr": "SO3",
          "ru": "SO3",
          "ar": "SO3",
          "zh": "SO3",
          "ku": "SO3"
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
          "tr": "N2",
          "en": "N2",
          "de": "N2",
          "fr": "N2",
          "ru": "N2",
          "ar": "N2",
          "zh": "N2",
          "ku": "N2"
        },
        {
          "tr": "He",
          "en": "He",
          "de": "He",
          "fr": "He",
          "ru": "He",
          "ar": "He",
          "zh": "He",
          "ku": "He"
        },
        {
          "tr": "CO",
          "en": "CO",
          "de": "CO",
          "fr": "CO",
          "ru": "CO",
          "ar": "CO",
          "zh": "CO",
          "ku": "CO"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "SO3 asidik oksittir ve su buharı ile tepkimeye girerek sülfürik asit (H2SO4) oluşturur: SO3 + H2O -> H2SO4.",
        "en": "SO3 is an acidic oxide and reacts with water vapor to form sulfuric acid (H2SO4): SO3 + H2O -> H2SO4.",
        "de": "SO3 ist ein saures Oxid und reagiert mit Wasserdampf zu Schwefelsäure (H2SO4): SO3 + H2O -> H2SO4.",
        "fr": "Le SO3 est un oxyde acide et réagit avec la vapeur d'eau pour former de l'acide sulfurique (H2SO4) : SO3 + H2O -> H2SO4.",
        "ru": "SO3 является кислотным оксидом и реагирует с парами воды с образованием серной кислоты (H2SO4): SO3 + H2O -> H2SO4.",
        "ar": "SO3 هو أكسيد حمضي ويتفاعل مع بخار الماء لتكوين حمض الكبريتيك (H2SO4): SO3 + H2O -> H2SO4.",
        "zh": "SO3 是酸性氧化物，与水蒸气反应生成硫酸（H2SO4）：SO3 + H2O -> H2SO4。",
        "ku": "SO3 oksîdeke asîdî ye û bi buxara avê re reaksiyonê dike asîda sulfurîk (H2SO4): SO3 + H2O -> H2SO4."
      }
    },
    {
      "id": "u05-twin02",
      "stem": {
        "tr": "Sularda sertliğe neden olan temel katyonlar aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Which of the following correctly lists the main cations that cause hardness in water?",
        "de": "Welche der folgenden Aussagen führt die wichtigsten Kationen, die Wasserhärte verursachen, korrekt auf?",
        "fr": "Lequel des énoncés suivants répertorie correctement les principaux cations qui causent la dureté de l’eau ?",
        "ru": "В каком из следующих пунктов правильно перечислены основные катионы, вызывающие жесткость воды?",
        "ar": "أي مما يلي يُدرج بشكل صحيح الكاتيونات الرئيسية التي تسبب عسر الماء؟",
        "zh": "以下哪项正确列出了导致水硬度的主要阳离子？",
        "ku": "Kîjan ji yên jêrîn kationên sereke ên ku di avê de dibin sedema serhişkiyê rast rêz dike?"
      },
      "options": [
        {
          "tr": "Ca2+ ve Mg2+",
          "en": "Ca2+ and Mg2+",
          "de": "Ca2+ und Mg2+",
          "fr": "Ca2+ et Mg2+",
          "ru": "Ca2+ и Mg2+",
          "ar": "Ca2+ و Mg2+",
          "zh": "Ca2+ 和 Mg2+",
          "ku": "Ca2+ û Mg2+"
        },
        {
          "tr": "Na+ ve K+",
          "en": "Na+ and K+",
          "de": "Na+ und K+",
          "fr": "Na+ et K+",
          "ru": "Na+ и K+",
          "ar": "Na+ و K+",
          "zh": "Na+ 和 K+",
          "ku": "Na+ û K+"
        },
        {
          "tr": "Fe3+ ve Al3+",
          "en": "Fe3+ and Al3+",
          "de": "Fe3+ und Al3+",
          "fr": "Fe3+ et Al3+",
          "ru": "Fe3+ и Al3+",
          "ar": "Fe3+ و Al3+",
          "zh": "Fe3+ 和 Al3+",
          "ku": "Fe3+ û Al3+"
        },
        {
          "tr": "Ag+ ve Cu2+",
          "en": "Ag+ and Cu2+",
          "de": "Ag+ und Cu2+",
          "fr": "Ag+ et Cu2+",
          "ru": "Ag+ и Cu2+",
          "ar": "Ag+ و Cu2+",
          "zh": "Ag+ 和 Cu2+",
          "ku": "Ag+ û Cu2+"
        },
        {
          "tr": "H+ ve NH4+",
          "en": "H+ and NH4+",
          "de": "H+ und NH4+",
          "fr": "H+ et NH4+",
          "ru": "H+ и NH4+",
          "ar": "H+ و NH4+",
          "zh": "H+ 和 NH4+",
          "ku": "H+ û NH4+"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Su sertliği temel olarak çözünmüş kalsiyum (Ca2+) ve magnezyum (Mg2+) iyonlarından kaynaklanır.",
        "en": "Water hardness is mainly caused by dissolved calcium (Ca2+) and magnesium (Mg2+) ions.",
        "de": "Die Wasserhärte wird hauptsächlich durch gelöste Calcium- (Ca2+) und Magnesiumionen (Mg2+) verursacht.",
        "fr": "La dureté de l’eau est principalement causée par les ions calcium (Ca2+) et magnésium (Mg2+) dissous.",
        "ru": "Жесткость воды в основном обусловлена ​​растворенными ионами кальция (Ca2+) и магния (Mg2+).",
        "ar": "ترجع عسر الماء أساسًا إلى أيونات الكالسيوم (Ca2+) والمغنيسيوم (Mg2+) الذائبة.",
        "zh": "水的硬度主要是由溶解的钙（Ca2+）和镁（Mg2+）离子引起的。",
        "ku": "Serhişkiya avê bi giranî ji îyonên kalsiyûmê (Ca2+) û magnezyûm (Mg2+) yên heliyayî pêk tê."
      }
    },
    {
      "id": "u05-twin03",
      "stem": {
        "tr": "Kimya dersinde Doğa ve Kimya ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Nature & Chemistry, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Natur und Chemie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Nature et Chimie, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Природа и химия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الطبيعة والكيمياء\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“自然与化学”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Xwezayî û Kîmya\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
          "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
          "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
          "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
          "ru": "Газы CFC восстанавливают озоновый слой и полностью блокируют ультрафиолетовые лучи.",
          "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
          "zh": "CFC气体修复臭氧层并完全阻挡紫外线。",
          "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
        },
        {
          "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
          "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
          "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
          "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
          "ru": "Коагуляция – это процесс испарения извести в воде путем ее кипячения.",
          "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
          "zh": "混凝是通过煮沸水中的石灰来蒸发的过程。",
          "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
        },
        {
          "tr": "Kalıcı sertlik sülfat (SO4^2-) ve klorür (Cl-) tuzlarından kaynaklanır ve iyon değiştirici reçinelerle giderilir.",
          "en": "Permanent hardness is caused by sulfate (SO4^2-) and chloride (Cl-) salts and is removed by ion exchange resins.",
          "de": "Die dauerhafte Härte wird durch Sulfat- (SO4^2-) und Chlorid- (Cl-) Salze verursacht und durch Ionenaustauscherharze entfernt.",
          "fr": "La dureté permanente est causée par les sels de sulfate (SO4^2-) et de chlorure (Cl-) et est éliminée par des résines échangeuses d'ions.",
          "ru": "Постоянная жесткость создается сульфатными (SO4^2-) и хлоридными (Cl-) солями и удаляется ионообменными смолами.",
          "ar": "ينتج العسر الدائم عن أملاح الكبريتات (SO4^2-) والكلوريد (Cl-)، ويتم إزالتها بواسطة راتنجات التبادل الأيوني.",
          "zh": "永久硬度是由硫酸盐 (SO4^2-) 和氯化物 (Cl-) 盐引起的，可通过离子交换树脂去除。",
          "ku": "Serhişkiya daîmî ji ber xwêyên sulfate (SO4^2-) û klorîd (Cl-) çêdibe û bi rezînên veguheztina îyonan tê derxistin."
        },
        {
          "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
          "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
          "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
          "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
          "ru": "Когда ископаемое топливо сжигается, в атмосферу выделяется только чистый водяной пар.",
          "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
          "zh": "当化石燃料燃烧时，它们仅向大气中释放纯净的水蒸气。",
          "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
        },
        {
          "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
          "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
          "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
          "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
          "ru": "Зеленая химия выступает за хранение ядерных отходов на дне океана.",
          "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
          "zh": "绿色化学提倡将核废料储存在海底。",
          "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kalıcı sertlik sülfat (SO4^2-) ve klorür (Cl-) tuzlarından kaynaklanır ve iyon değiştirici reçinelerle giderilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Permanent hardness is caused by sulfate (SO4^2-) and chloride (Cl-) salts and is removed by ion exchange resins.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die dauerhafte Härte wird durch Sulfat- (SO4^2-) und Chlorid- (Cl-) Salze verursacht und durch Ionenaustauscherharze entfernt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La dureté permanente est causée par les sels de sulfate (SO4^2-) et de chlorure (Cl-) et est éliminée par des résines échangeuses d'ions.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Постоянная жесткость создается сульфатными (SO4^2-) и хлоридными (Cl-) солями и удаляется ионообменными смолами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ينتج العسر الدائم عن أملاح الكبريتات (SO4^2-) والكلوريد (Cl-)، ويتم إزالتها بواسطة راتنجات التبادل الأيوني.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“永久硬度是由硫酸盐 (SO4^2-) 和氯化物 (Cl-) 盐引起的，可通过离子交换树脂去除。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Serhişkiya daîmî ji ber xwêyên sulfate (SO4^2-) û klorîd (Cl-) çêdibe û bi rezînên veguheztina îyonan tê derxistin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Doğa ve Kimya konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Nature & Chemistry?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Natur und Chemie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Nature et Chimie ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Природа и химия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الطبيعة والكيمياء\"؟",
        "zh": "根据“自然与化学”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Xwezayî û Kîmya\" de rast e?"
      },
      "options": [
        {
          "tr": "Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.",
          "en": "Mercury is a useful mineral that is easily broken down in the human body.",
          "de": "Quecksilber ist ein nützliches Mineral, das im menschlichen Körper leicht abgebaut wird.",
          "fr": "Le mercure est un minéral utile qui se décompose facilement dans le corps humain.",
          "ru": "Ртуть – полезный минерал, который легко расщепляется в организме человека.",
          "ar": "الزئبق معدن مفيد يتحلل بسهولة في جسم الإنسان.",
          "zh": "汞是一种有用的矿物质，很容易在人体内分解。",
          "ku": "Mercury mîneralek kêrhatî ye ku di laşê mirovan de bi hêsanî tê perçe kirin."
        },
        {
          "tr": "Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.",
          "en": "Chlorination is done to precipitate lead and mercury in water.",
          "de": "Durch Chlorierung werden Blei und Quecksilber im Wasser ausgefällt.",
          "fr": "La chloration vise à précipiter le plomb et le mercure dans l'eau.",
          "ru": "Хлорирование проводится для осаждения свинца и ртути в воде.",
          "ar": "تتم عملية الكلورة لترسيب الرصاص والزئبق في الماء.",
          "zh": "进行氯化以沉淀水中的铅和汞。",
          "ku": "Klorkirin ji bo niştandina sirb û merkurê di avê de tê kirin."
        },
        {
          "tr": "Doğal saf yağmur suyunun pH değeri tam 7,0'dır.",
          "en": "The pH value of natural pure rainwater is exactly 7.0.",
          "de": "Der pH-Wert von natürlichem, reinem Regenwasser beträgt genau 7,0.",
          "fr": "Le pH de l’eau de pluie pure et naturelle est exactement de 7,0.",
          "ru": "Значение pH природной чистой дождевой воды составляет ровно 7,0.",
          "ar": "قيمة الرقم الهيدروجيني لمياه الأمطار الطبيعية النقية هي بالضبط 7.0.",
          "zh": "天然纯净雨水的pH值恰好为7.0。",
          "ku": "Nirxa pH ya ava baranê ya safî ya xwezayî tam 7.0 e."
        },
        {
          "tr": "CO2, CH4, N2O ve su buharı (H2O) temel bir sera gazı olarak atmosferde kızılötesi ışınları tutar; bu sera gazları küresel ısınmaya yol açar.",
          "en": "CO2, CH4, N2O and water vapor (H2O) trap infrared rays in the atmosphere as a major greenhouse gas; These greenhouse gases cause global warming.",
          "de": "CO2, CH4, N2O und Wasserdampf (H2O) fangen Infrarotstrahlen als wichtige Treibhausgase in der Atmosphäre ein; Diese Treibhausgase verursachen die globale Erwärmung.",
          "fr": "Le CO2, le CH4, le N2O et la vapeur d'eau (H2O) piègent les rayons infrarouges dans l'atmosphère et constituent un gaz à effet de serre majeur ; Ces gaz à effet de serre provoquent le réchauffement climatique.",
          "ru": "CO2, CH4, N2O и водяной пар (H2O) улавливают инфракрасные лучи в атмосфере и являются основными парниковыми газами; Эти парниковые газы вызывают глобальное потепление.",
          "ar": "يحبس ثاني أكسيد الكربون والميثان وأكسيد النيتروز وبخار الماء الأشعة تحت الحمراء في الغلاف الجوي باعتبارها غازًا رئيسيًا من غازات الدفيئة؛ تسبب هذه الغازات الدفيئة ظاهرة الاحتباس الحراري.",
          "zh": "CO2、CH4、N2O和水蒸气（H2O）作为主要温室气体在大气中捕获红外线；这些温室气体导致全球变暖。",
          "ku": "CO2, CH4, N2O û buhara avê (H2O) tîrêjên infrasor di atmosferê de wekî gaza serayê ya sereke digire; Ev gazên serayê dibin sedema germbûna global."
        },
        {
          "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
          "en": "Soft waters leave plenty of lime deposits.",
          "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
          "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
          "ru": "Мягкие воды оставляют много известковых отложений.",
          "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
          "zh": "软水会留下大量石灰沉积物。",
          "ku": "Avên nerm gelek depoyên lîmê dihêlin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"CO2, CH4, N2O ve su buharı (H2O) temel bir sera gazı olarak atmosferde kızılötesi ışınları tutar; bu sera gazları küresel ısınmaya yol açar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"CO2, CH4, N2O and water vapor (H2O) trap infrared rays in the atmosphere as a major greenhouse gas; These greenhouse gases cause global warming.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"CO2, CH4, N2O und Wasserdampf (H2O) fangen Infrarotstrahlen als wichtige Treibhausgase in der Atmosphäre ein; Diese Treibhausgase verursachen die globale Erwärmung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le CO2, le CH4, le N2O et la vapeur d'eau (H2O) piègent les rayons infrarouges dans l'atmosphère et constituent un gaz à effet de serre majeur ; Ces gaz à effet de serre provoquent le réchauffement climatique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «CO2, CH4, N2O и водяной пар (H2O) улавливают инфракрасные лучи в атмосфере и являются основными парниковыми газами; Эти парниковые газы вызывают глобальное потепление.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يحبس ثاني أكسيد الكربون والميثان وأكسيد النيتروز وبخار الماء الأشعة تحت الحمراء في الغلاف الجوي باعتبارها غازًا رئيسيًا من غازات الدفيئة؛ تسبب هذه الغازات الدفيئة ظاهرة الاحتباس الحراري.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“CO2、CH4、N2O和水蒸气（H2O）作为主要温室气体在大气中捕获红外线；这些温室气体导致全球变暖。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"CO2, CH4, N2O û buhara avê (H2O) tîrêjên infrasor di atmosferê de wekî gaza serayê ya sereke digire; Ev gazên serayê dibin sedema germbûna global.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Doğa ve Kimya sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Nature & Chemistry, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Natur und Chemie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Nature et Chimie, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Природа и химия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الطبيعة والكيمياء\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“自然与化学”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Xwezayî û Kîmya\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.",
          "en": "Hard water does not create scale in the pipes, on the contrary, it protects the pipes against corrosion.",
          "de": "Hartes Wasser bildet keinen Kalk in den Rohren, sondern schützt die Rohre im Gegenteil vor Korrosion.",
          "fr": "L’eau dure ne crée pas de tartre dans les canalisations, au contraire, elle protège les canalisations contre la corrosion.",
          "ru": "Жесткая вода не создает накипи в трубах, а наоборот, защищает трубы от коррозии.",
          "ar": "الماء العسر لا يخلق ترسبات في الأنابيب، بل على العكس، فهو يحمي الأنابيب من التآكل.",
          "zh": "硬水不会在管道中产生水垢，相反，它可以保护管道免受腐蚀。",
          "ku": "Ava hişk di lûleyan de pîvanê çênake, berovajî boriyan ji korozyonê diparêze."
        },
        {
          "tr": "Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.",
          "en": "No energy or pressure is required in the reverse osmosis process.",
          "de": "Für den Umkehrosmoseprozess ist weder Energie noch Druck erforderlich.",
          "fr": "Aucune énergie ni pression n’est requise dans le processus d’osmose inverse.",
          "ru": "В процессе обратного осмоса не требуется никакой энергии или давления.",
          "ar": "لا توجد حاجة إلى طاقة أو ضغط في عملية التناضح العكسي.",
          "zh": "反渗透过程不需要能量或压力。",
          "ku": "Di pêvajoya osmoza berevajî de tu enerjî an zext hewce nake."
        },
        {
          "tr": "Kullanılmış piller yakılarak güvenle yok edilebilir.",
          "en": "Used batteries can be safely disposed of by burning.",
          "de": "Verbrauchte Batterien können durch Verbrennen sicher entsorgt werden.",
          "fr": "Les piles usagées peuvent être éliminées en toute sécurité en les brûlant.",
          "ru": "Использованные батарейки можно безопасно утилизировать путем сжигания.",
          "ar": "يمكن التخلص من البطاريات المستعملة بشكل آمن عن طريق حرقها.",
          "zh": "废旧电池可以通过焚烧的方式安全处置。",
          "ku": "Pîlên bikar anîn dikarin bi şewitandinê bi ewlehî werin avêtin."
        },
        {
          "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
          "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
          "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
          "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
          "ru": "В жесткой воде моющее средство не пенится и полностью теряет свои чистящие свойства.",
          "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
          "zh": "在硬水中，洗涤剂不会起泡并完全失去其清洁性能。",
          "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
        },
        {
          "tr": "Kükürt dioksit (SO2), kükürt trioksit (SO3) ve azot oksitler (NO2) asit yağmurlarına yol açan gazlardır.",
          "en": "Sulfur dioxide (SO2), sulfur trioxide (SO3) and nitrogen oxides (NO2) are gases that cause acid rain.",
          "de": "Schwefeldioxid (SO2), Schwefeltrioxid (SO3) und Stickoxide (NO2) sind Gase, die sauren Regen verursachen.",
          "fr": "Le dioxyde de soufre (SO2), le trioxyde de soufre (SO3) et les oxydes d'azote (NO2) sont des gaz responsables des pluies acides.",
          "ru": "Диоксид серы (SO2), триоксид серы (SO3) и оксиды азота (NO2) — это газы, вызывающие кислотные дожди.",
          "ar": "ثاني أكسيد الكبريت (SO2)، وثالث أكسيد الكبريت (SO3) وأكاسيد النيتروجين (NO2) هي غازات تسبب الأمطار الحمضية.",
          "zh": "二氧化硫 (SO2)、三氧化硫 (SO3) 和氮氧化物 (NO2) 是导致酸雨的气体。",
          "ku": "Doksîda kewkurtê (SO2), trioksîdê kewkurtê (SO3) û oksîtên nîtrojenê (NO2) gazên ku dibin sedema barana asîd in."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Kükürt dioksit (SO2), kükürt trioksit (SO3) ve azot oksitler (NO2) asit yağmurlarına yol açan gazlardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Sulfur dioxide (SO2), sulfur trioxide (SO3) and nitrogen oxides (NO2) are gases that cause acid rain.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Schwefeldioxid (SO2), Schwefeltrioxid (SO3) und Stickoxide (NO2) sind Gase, die sauren Regen verursachen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le dioxyde de soufre (SO2), le trioxyde de soufre (SO3) et les oxydes d'azote (NO2) sont des gaz responsables des pluies acides.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Диоксид серы (SO2), триоксид серы (SO3) и оксиды азота (NO2) — это газы, вызывающие кислотные дожди.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ثاني أكسيد الكبريت (SO2)، وثالث أكسيد الكبريت (SO3) وأكاسيد النيتروجين (NO2) هي غازات تسبب الأمطار الحمضية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“二氧化硫 (SO2)、三氧化硫 (SO3) 和氮氧化物 (NO2) 是导致酸雨的气体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Doksîda kewkurtê (SO2), trioksîdê kewkurtê (SO3) û oksîtên nîtrojenê (NO2) gazên ku dibin sedema barana asîd in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin06",
      "stem": {
        "tr": "Aşağıda Doğa ve Kimya ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Nature & Chemistry, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Natur und Chemie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Nature et Chimie, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Природа и химия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الطبيعة والكيمياء\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“自然与化学”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Xwezayî û Kîmya\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kloroflorokarbonlar (CFC gazları) stratosferdeki ozon (O3) tabakasının incelmesine neden olur.",
          "en": "Chlorofluorocarbons (CFC gases) cause depletion of the ozone (O3) layer in the stratosphere.",
          "de": "Fluorchlorkohlenwasserstoffe (FCKW-Gase) verursachen einen Abbau der Ozonschicht (O3) in der Stratosphäre.",
          "fr": "Les chlorofluorocarbures (gaz CFC) provoquent l'appauvrissement de la couche d'ozone (O3) dans la stratosphère.",
          "ru": "Хлорфторуглероды (газы CFC) вызывают истощение озонового слоя (O3) в стратосфере.",
          "ar": "تتسبب مركبات الكلوروفلوروكربون (غازات مركبات الكربون الكلورية فلورية) في استنفاد طبقة الأوزون (O3) في طبقة الستراتوسفير.",
          "zh": "氯氟烃（CFC 气体）会导致平流层臭氧 (O3) 层消耗。",
          "ku": "Klorofluorokarbon (gazên CFC) dibin sedema tinebûna qata ozonê (O3) a li stratosferê."
        },
        {
          "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
          "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
          "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
          "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
          "ru": "Коагуляция – это процесс испарения извести в воде путем ее кипячения.",
          "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
          "zh": "混凝是通过煮沸水中的石灰来蒸发的过程。",
          "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
        },
        {
          "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
          "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
          "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
          "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
          "ru": "Когда ископаемое топливо сжигается, в атмосферу выделяется только чистый водяной пар.",
          "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
          "zh": "当化石燃料燃烧时，它们仅向大气中释放纯净的水蒸气。",
          "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
        },
        {
          "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
          "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
          "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
          "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
          "ru": "Зеленая химия выступает за хранение ядерных отходов на дне океана.",
          "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
          "zh": "绿色化学提倡将核废料储存在海底。",
          "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
        },
        {
          "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
          "en": "Persistent hardness is completely eliminated by simply boiling the water.",
          "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
          "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
          "ru": "Постоянная жесткость полностью устраняется простым кипячением воды.",
          "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
          "zh": "只需将水煮沸即可完全消除持续的硬度。",
          "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kloroflorokarbonlar (CFC gazları) stratosferdeki ozon (O3) tabakasının incelmesine neden olur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Chlorofluorocarbons (CFC gases) cause depletion of the ozone (O3) layer in the stratosphere.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Fluorchlorkohlenwasserstoffe (FCKW-Gase) verursachen einen Abbau der Ozonschicht (O3) in der Stratosphäre.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les chlorofluorocarbures (gaz CFC) provoquent l'appauvrissement de la couche d'ozone (O3) dans la stratosphère.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хлорфторуглероды (газы CFC) вызывают истощение озонового слоя (O3) в стратосфере.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتسبب مركبات الكلوروفلوروكربون (غازات مركبات الكربون الكلورية فلورية) في استنفاد طبقة الأوزون (O3) في طبقة الستراتوسفير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“氯氟烃（CFC 气体）会导致平流层臭氧 (O3) 层消耗。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Klorofluorokarbon (gazên CFC) dibin sedema tinebûna qata ozonê (O3) a li stratosferê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin07",
      "stem": {
        "tr": "Doğa ve Kimya konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Nature & Chemistry, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Natur und Chemie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Nature et Chimie, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Природа и химия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الطبيعة والكيمياء\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“自然与化学”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Xwezayî û Kîmya\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.",
          "en": "Chlorination is done to precipitate lead and mercury in water.",
          "de": "Durch Chlorierung werden Blei und Quecksilber im Wasser ausgefällt.",
          "fr": "La chloration vise à précipiter le plomb et le mercure dans l'eau.",
          "ru": "Хлорирование проводится для осаждения свинца и ртути в воде.",
          "ar": "تتم عملية الكلورة لترسيب الرصاص والزئبق في الماء.",
          "zh": "进行氯化以沉淀水中的铅和汞。",
          "ku": "Klorkirin ji bo niştandina sirb û merkurê di avê de tê kirin."
        },
        {
          "tr": "Ağır metaller (kurşun Pb, cıva Hg, kadmiyum Cd) biyolojik birikimle besin zincirinde zehir etkisi yapar.",
          "en": "Heavy metals (lead Pb, mercury Hg, cadmium Cd) have a toxic effect on the food chain through bioaccumulation.",
          "de": "Schwermetalle (Blei Pb, Quecksilber Hg, Cadmium Cd) wirken durch Bioakkumulation toxisch auf die Nahrungskette.",
          "fr": "Les métaux lourds (plomb Pb, mercure Hg, cadmium Cd) ont un effet toxique sur la chaîne alimentaire par bioaccumulation.",
          "ru": "Тяжелые металлы (свинец Pb, ртуть Hg, кадмий Cd) оказывают токсическое воздействие на пищевую цепь путем биоаккумуляции.",
          "ar": "المعادن الثقيلة (الرصاص Pb، الزئبق Hg، الكادميوم Cd) لها تأثير سام على السلسلة الغذائية من خلال التراكم الحيوي.",
          "zh": "重金属（铅Pb、汞Hg、镉Cd）通过生物累积对食物链产生毒性作用。",
          "ku": "Metalên giran (serpîb Pb, merkur Hg, kadmium Cd) bi biyolojîkî bandorek jehrîn li ser zincîra xwarinê dikin."
        },
        {
          "tr": "Doğal saf yağmur suyunun pH değeri tam 7,0'dır.",
          "en": "The pH value of natural pure rainwater is exactly 7.0.",
          "de": "Der pH-Wert von natürlichem, reinem Regenwasser beträgt genau 7,0.",
          "fr": "Le pH de l’eau de pluie pure et naturelle est exactement de 7,0.",
          "ru": "Значение pH природной чистой дождевой воды составляет ровно 7,0.",
          "ar": "قيمة الرقم الهيدروجيني لمياه الأمطار الطبيعية النقية هي بالضبط 7.0.",
          "zh": "天然纯净雨水的pH值恰好为7.0。",
          "ku": "Nirxa pH ya ava baranê ya safî ya xwezayî tam 7.0 e."
        },
        {
          "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
          "en": "Soft waters leave plenty of lime deposits.",
          "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
          "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
          "ru": "Мягкие воды оставляют много известковых отложений.",
          "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
          "zh": "软水会留下大量石灰沉积物。",
          "ku": "Avên nerm gelek depoyên lîmê dihêlin."
        },
        {
          "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
          "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
          "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
          "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
          "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
          "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
          "zh": "引起永久硬度的盐（如 CaSO4 和 MgCl2）在煮沸水时会以 CaCO3 形式沉淀而被除去。",
          "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Ağır metaller (kurşun Pb, cıva Hg, kadmiyum Cd) biyolojik birikimle besin zincirinde zehir etkisi yapar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Heavy metals (lead Pb, mercury Hg, cadmium Cd) have a toxic effect on the food chain through bioaccumulation.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Schwermetalle (Blei Pb, Quecksilber Hg, Cadmium Cd) wirken durch Bioakkumulation toxisch auf die Nahrungskette.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux lourds (plomb Pb, mercure Hg, cadmium Cd) ont un effet toxique sur la chaîne alimentaire par bioaccumulation.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Тяжелые металлы (свинец Pb, ртуть Hg, кадмий Cd) оказывают токсическое воздействие на пищевую цепь путем биоаккумуляции.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المعادن الثقيلة (الرصاص Pb، الزئبق Hg، الكادميوم Cd) لها تأثير سام على السلسلة الغذائية من خلال التراكم الحيوي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“重金属（铅Pb、汞Hg、镉Cd）通过生物累积对食物链产生毒性作用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên giran (serpîb Pb, merkur Hg, kadmium Cd) bi biyolojîkî bandorek jehrîn li ser zincîra xwarinê dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Doğa ve Kimya ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Nature & Chemistry, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Natur und Chemie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Nature et Chimie, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Природа и химия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الطبيعة والكيمياء\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“自然与化学”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Xwezayî û Kîmya\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.",
          "en": "No energy or pressure is required in the reverse osmosis process.",
          "de": "Für den Umkehrosmoseprozess ist weder Energie noch Druck erforderlich.",
          "fr": "Aucune énergie ni pression n’est requise dans le processus d’osmose inverse.",
          "ru": "В процессе обратного осмоса не требуется никакой энергии или давления.",
          "ar": "لا توجد حاجة إلى طاقة أو ضغط في عملية التناضح العكسي.",
          "zh": "反渗透过程不需要能量或压力。",
          "ku": "Di pêvajoya osmoza berevajî de tu enerjî an zext hewce nake."
        },
        {
          "tr": "Kullanılmış piller yakılarak güvenle yok edilebilir.",
          "en": "Used batteries can be safely disposed of by burning.",
          "de": "Verbrauchte Batterien können durch Verbrennen sicher entsorgt werden.",
          "fr": "Les piles usagées peuvent être éliminées en toute sécurité en les brûlant.",
          "ru": "Использованные батарейки можно безопасно утилизировать путем сжигания.",
          "ar": "يمكن التخلص من البطاريات المستعملة بشكل آمن عن طريق حرقها.",
          "zh": "废旧电池可以通过焚烧的方式安全处置。",
          "ku": "Pîlên bikar anîn dikarin bi şewitandinê bi ewlehî werin avêtin."
        },
        {
          "tr": "Sert sular su ısıtıcıları, çamaşır makineleri ve borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.",
          "en": "Hard water creates a limestone (CaCO3) layer in water heaters, washing machines and pipes, causing energy loss.",
          "de": "Hartes Wasser bildet in Warmwasserbereitern, Waschmaschinen und Rohren eine Kalkschicht (CaCO3), die zu Energieverlusten führt.",
          "fr": "L'eau dure crée une couche de calcaire (CaCO3) dans les chauffe-eau, les machines à laver et les canalisations, entraînant une perte d'énergie.",
          "ru": "Жесткая вода создает слой известняка (CaCO3) в водонагревателях, стиральных машинах и трубах, что приводит к потерям энергии.",
          "ar": "يشكل الماء العسر طبقة من الحجر الجيري (CaCO3) في سخانات المياه والغسالات والأنابيب، مما يتسبب في فقدان الطاقة.",
          "zh": "硬水会在热水器、洗衣机和管道中形成石灰石 (CaCO3) 层，导致能量损失。",
          "ku": "Ava hişk di nav germkerên avê, makîneyên şuştinê û boriyan de qatek kevirê kilsin (CaCO3) çêdike û dibe sedema windakirina enerjiyê."
        },
        {
          "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
          "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
          "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
          "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
          "ru": "В жесткой воде моющее средство не пенится и полностью теряет свои чистящие свойства.",
          "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
          "zh": "在硬水中，洗涤剂不会起泡并完全失去其清洁性能。",
          "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
        },
        {
          "tr": "O2 ve N2 gazları dünyadaki sera etkisinin %90'ından sorumludur.",
          "en": "O2 and N2 gases are responsible for 90% of the world's greenhouse effect.",
          "de": "O2- und N2-Gase sind für 90 % des weltweiten Treibhauseffekts verantwortlich.",
          "fr": "Les gaz O2 et N2 sont responsables de 90 % de l’effet de serre mondial.",
          "ru": "Газы O2 и N2 ответственны за 90% мирового парникового эффекта.",
          "ar": "تعتبر غازات O2 وN2 مسؤولة عن 90% من ظاهرة الاحتباس الحراري في العالم.",
          "zh": "世界上 90% 的温室效应是由氧气和氮气造成的。",
          "ku": "Gazên O2 û N2 ji %90 bandora serayê ya cîhanê berpirsiyar in."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Sert sular su ısıtıcıları, çamaşır makineleri ve borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Hard water creates a limestone (CaCO3) layer in water heaters, washing machines and pipes, causing energy loss.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Hartes Wasser bildet in Warmwasserbereitern, Waschmaschinen und Rohren eine Kalkschicht (CaCO3), die zu Energieverlusten führt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'eau dure crée une couche de calcaire (CaCO3) dans les chauffe-eau, les machines à laver et les canalisations, entraînant une perte d'énergie.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Жесткая вода создает слой известняка (CaCO3) в водонагревателях, стиральных машинах и трубах, что приводит к потерям энергии.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يشكل الماء العسر طبقة من الحجر الجيري (CaCO3) في سخانات المياه والغسالات والأنابيب، مما يتسبب في فقدان الطاقة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“硬水会在热水器、洗衣机和管道中形成石灰石 (CaCO3) 层，导致能量损失。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ava hişk di nav germkerên avê, makîneyên şuştinê û boriyan de qatek kevirê kilsin (CaCO3) çêdike û dibe sedema windakirina enerjiyê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Doğa ve Kimya konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Nature & Chemistry, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Natur und Chemie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Nature et Chimie, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Природа и химия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الطبيعة والكيمياء\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“自然与化学”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Xwezayî û Kîmya\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
          "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
          "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
          "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
          "ru": "Когда ископаемое топливо сжигается, в атмосферу выделяется только чистый водяной пар.",
          "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
          "zh": "当化石燃料燃烧时，它们仅向大气中释放纯净的水蒸气。",
          "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
        },
        {
          "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
          "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
          "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
          "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
          "ru": "Зеленая химия выступает за хранение ядерных отходов на дне океана.",
          "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
          "zh": "绿色化学提倡将核废料储存在海底。",
          "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
        },
        {
          "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
          "en": "Persistent hardness is completely eliminated by simply boiling the water.",
          "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
          "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
          "ru": "Постоянная жесткость полностью устраняется простым кипячением воды.",
          "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
          "zh": "只需将水煮沸即可完全消除持续的硬度。",
          "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
        },
        {
          "tr": "Koagülasyon (pıhtılaştırma) ve flokülasyon (yumaklaştırma) su arıtımında askıdaki katı tanecikleri çöktürmek için uygulanır.",
          "en": "Coagulation and flocculation are applied in water treatment to settle suspended solid particles.",
          "de": "Koagulation und Flockung werden in der Wasseraufbereitung angewendet, um suspendierte Feststoffteilchen abzusetzen.",
          "fr": "La coagulation et la floculation sont appliquées dans le traitement de l'eau pour faire décanter les particules solides en suspension.",
          "ru": "Коагуляция и флокуляция применяются при очистке воды для осаждения взвешенных твёрдых частиц.",
          "ar": "يُطبَّق التخثير والتلبيد في معالجة المياه لترسيب الجسيمات الصلبة العالقة.",
          "zh": "在水处理中采用混凝和絮凝使悬浮的固体颗粒沉降。",
          "ku": "Koagulasyon û flokulasyon di paqijkirina avê de ji bo niştandina perçeyên hişk ên daliqandî tên bikaranîn."
        },
        {
          "tr": "Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.",
          "en": "Acid rain is caused by pure oxygen and nitrogen gases in the atmosphere.",
          "de": "Saurer Regen wird durch reine Sauerstoff- und Stickstoffgase in der Atmosphäre verursacht.",
          "fr": "Les pluies acides sont causées par l’oxygène pur et l’azote présents dans l’atmosphère.",
          "ru": "Кислотные дожди вызываются чистым кислородом и азотными газами в атмосфере.",
          "ar": "وينتج المطر الحمضي عن وجود غازي الأكسجين والنيتروجين النقي في الغلاف الجوي.",
          "zh": "酸雨是由大气中的纯氧气和氮气引起的。",
          "ku": "Barana asîdî ji ber gazên oksîjen û nîtrojenê yên paqij ên li atmosferê çêdibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Koagülasyon (pıhtılaştırma) ve flokülasyon (yumaklaştırma) su arıtımında askıdaki katı tanecikleri çöktürmek için uygulanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Coagulation and flocculation are applied in water treatment to settle suspended solid particles.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Koagulation und Flockung werden in der Wasseraufbereitung angewendet, um suspendierte Feststoffteilchen abzusetzen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La coagulation et la floculation sont appliquées dans le traitement de l'eau pour faire décanter les particules solides en suspension.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Коагуляция и флокуляция применяются при очистке воды для осаждения взвешенных твёрдых частиц.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يُطبَّق التخثير والتلبيد في معالجة المياه لترسيب الجسيمات الصلبة العالقة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在水处理中采用混凝和絮凝使悬浮的固体颗粒沉降。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Koagulasyon û flokulasyon di paqijkirina avê de ji bo niştandina perçeyên hişk ên daliqandî tên bikaranîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin10",
      "stem": {
        "tr": "Kimya dersinde Doğa ve Kimya ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Nature & Chemistry, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Natur und Chemie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Nature et Chimie, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Природа и химия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الطبيعة والكيمياء\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“自然与化学”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Xwezayî û Kîmya\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Doğal saf yağmur suyunun pH değeri tam 7,0'dır.",
          "en": "The pH value of natural pure rainwater is exactly 7.0.",
          "de": "Der pH-Wert von natürlichem, reinem Regenwasser beträgt genau 7,0.",
          "fr": "Le pH de l’eau de pluie pure et naturelle est exactement de 7,0.",
          "ru": "Значение pH природной чистой дождевой воды составляет ровно 7,0.",
          "ar": "قيمة الرقم الهيدروجيني لمياه الأمطار الطبيعية النقية هي بالضبط 7.0.",
          "zh": "天然纯净雨水的pH值恰好为7.0。",
          "ku": "Nirxa pH ya ava baranê ya safî ya xwezayî tam 7.0 e."
        },
        {
          "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
          "en": "Soft waters leave plenty of lime deposits.",
          "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
          "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
          "ru": "Мягкие воды оставляют много известковых отложений.",
          "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
          "zh": "软水会留下大量石灰沉积物。",
          "ku": "Avên nerm gelek depoyên lîmê dihêlin."
        },
        {
          "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
          "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
          "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
          "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
          "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
          "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
          "zh": "引起永久硬度的盐（如 CaSO4 和 MgCl2）在煮沸水时会以 CaCO3 形式沉淀而被除去。",
          "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
        },
        {
          "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
          "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
          "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
          "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
          "ru": "Газы CFC восстанавливают озоновый слой и полностью блокируют ультрафиолетовые лучи.",
          "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
          "zh": "CFC气体修复臭氧层并完全阻挡紫外线。",
          "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
        },
        {
          "tr": "Klorlama, içme sularındaki patojen mikroorganizmaları yok etmek amacıyla uygulanan dezenfeksiyon işlemidir.",
          "en": "Chlorination is a disinfection process applied to destroy pathogenic microorganisms in drinking water.",
          "de": "Chlorierung ist ein Desinfektionsverfahren zur Abtötung pathogener Mikroorganismen im Trinkwasser.",
          "fr": "La chloration est un procédé de désinfection appliqué pour détruire les micro-organismes pathogènes présents dans l'eau potable.",
          "ru": "Хлорирование – это процесс дезинфекции, применяемый для уничтожения патогенных микроорганизмов в питьевой воде.",
          "ar": "الكلورة هي عملية تطهير تطبق لتدمير الكائنات الحية الدقيقة المسببة للأمراض في مياه الشرب.",
          "zh": "氯化是一种用于消灭饮用水中病原微生物的消毒过程。",
          "ku": "Klorkirin pêvajoyek dezenfektekirinê ye ku ji bo tunekirina mîkrojenîzmayên pathogenîk ên di ava vexwarinê de tê bikar anîn."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Klorlama, içme sularındaki patojen mikroorganizmaları yok etmek amacıyla uygulanan dezenfeksiyon işlemidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Chlorination is a disinfection process applied to destroy pathogenic microorganisms in drinking water.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Chlorierung ist ein Desinfektionsverfahren zur Abtötung pathogener Mikroorganismen im Trinkwasser.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La chloration est un procédé de désinfection appliqué pour détruire les micro-organismes pathogènes présents dans l'eau potable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хлорирование – это процесс дезинфекции, применяемый для уничтожения патогенных микроорганизмов в питьевой воде.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الكلورة هي عملية تطهير تطبق لتدمير الكائنات الحية الدقيقة المسببة للأمراض في مياه الشرب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“氯化是一种用于消灭饮用水中病原微生物的消毒过程。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Klorkirin pêvajoyek dezenfektekirinê ye ku ji bo tunekirina mîkrojenîzmayên pathogenîk ên di ava vexwarinê de tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Doğa ve Kimya konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Nature & Chemistry?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Natur und Chemie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Nature et Chimie ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Природа и химия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الطبيعة والكيمياء\"؟",
        "zh": "根据“自然与化学”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Xwezayî û Kîmya\" de rast e?"
      },
      "options": [
        {
          "tr": "Ters ozmoz (reverse osmosis), yarı geçirgen zardan yüksek basınç uygulayarak tuzlu sudan tatlı su elde etme yöntemidir.",
          "en": "Reverse osmosis is a method of obtaining fresh water from salt water by applying high pressure through a semi-permeable membrane.",
          "de": "Umkehrosmose ist eine Methode zur Gewinnung von Frischwasser aus Salzwasser durch Anwendung von hohem Druck durch eine semipermeable Membran.",
          "fr": "L'osmose inverse est une méthode permettant d'obtenir de l'eau douce à partir d'eau salée en appliquant une haute pression à travers une membrane semi-perméable.",
          "ru": "Обратный осмос – это метод получения пресной воды из соленой воды путем подачи высокого давления через полупроницаемую мембрану.",
          "ar": "التناضح العكسي هو وسيلة للحصول على المياه العذبة من المياه المالحة عن طريق الضغط العالي من خلال غشاء شبه منفذ.",
          "zh": "反渗透是一种通过半透膜施加高压从盐水中获取淡水的方法。",
          "ku": "osmoza berevajî rêbazek e ku ji ava şor ava şirîn tê bidestxistin bi pêkanîna tansiyona bilind di nav membranek nîv-permeable de."
        },
        {
          "tr": "Kullanılmış piller yakılarak güvenle yok edilebilir.",
          "en": "Used batteries can be safely disposed of by burning.",
          "de": "Verbrauchte Batterien können durch Verbrennen sicher entsorgt werden.",
          "fr": "Les piles usagées peuvent être éliminées en toute sécurité en les brûlant.",
          "ru": "Использованные батарейки можно безопасно утилизировать путем сжигания.",
          "ar": "يمكن التخلص من البطاريات المستعملة بشكل آمن عن طريق حرقها.",
          "zh": "废旧电池可以通过焚烧的方式安全处置。",
          "ku": "Pîlên bikar anîn dikarin bi şewitandinê bi ewlehî werin avêtin."
        },
        {
          "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
          "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
          "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
          "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
          "ru": "В жесткой воде моющее средство не пенится и полностью теряет свои чистящие свойства.",
          "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
          "zh": "在硬水中，洗涤剂不会起泡并完全失去其清洁性能。",
          "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
        },
        {
          "tr": "O2 ve N2 gazları dünyadaki sera etkisinin %90'ından sorumludur.",
          "en": "O2 and N2 gases are responsible for 90% of the world's greenhouse effect.",
          "de": "O2- und N2-Gase sind für 90 % des weltweiten Treibhauseffekts verantwortlich.",
          "fr": "Les gaz O2 et N2 sont responsables de 90 % de l’effet de serre mondial.",
          "ru": "Газы O2 и N2 ответственны за 90% мирового парникового эффекта.",
          "ar": "تعتبر غازات O2 وN2 مسؤولة عن 90% من ظاهرة الاحتباس الحراري في العالم.",
          "zh": "世界上 90% 的温室效应是由氧气和氮气造成的。",
          "ku": "Gazên O2 û N2 ji %90 bandora serayê ya cîhanê berpirsiyar in."
        },
        {
          "tr": "Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.",
          "en": "Mercury is a useful mineral that is easily broken down in the human body.",
          "de": "Quecksilber ist ein nützliches Mineral, das im menschlichen Körper leicht abgebaut wird.",
          "fr": "Le mercure est un minéral utile qui se décompose facilement dans le corps humain.",
          "ru": "Ртуть – полезный минерал, который легко расщепляется в организме человека.",
          "ar": "الزئبق معدن مفيد يتحلل بسهولة في جسم الإنسان.",
          "zh": "汞是一种有用的矿物质，很容易在人体内分解。",
          "ku": "Mercury mîneralek kêrhatî ye ku di laşê mirovan de bi hêsanî tê perçe kirin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ters ozmoz (reverse osmosis), yarı geçirgen zardan yüksek basınç uygulayarak tuzlu sudan tatlı su elde etme yöntemidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Reverse osmosis is a method of obtaining fresh water from salt water by applying high pressure through a semi-permeable membrane.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Umkehrosmose ist eine Methode zur Gewinnung von Frischwasser aus Salzwasser durch Anwendung von hohem Druck durch eine semipermeable Membran.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'osmose inverse est une méthode permettant d'obtenir de l'eau douce à partir d'eau salée en appliquant une haute pression à travers une membrane semi-perméable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Обратный осмос – это метод получения пресной воды из соленой воды путем подачи высокого давления через полупроницаемую мембрану.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"التناضح العكسي هو وسيلة للحصول على المياه العذبة من المياه المالحة عن طريق الضغط العالي من خلال غشاء شبه منفذ.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“反渗透是一种通过半透膜施加高压从盐水中获取淡水的方法。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"osmoza berevajî rêbazek e ku ji ava şor ava şirîn tê bidestxistin bi pêkanîna tansiyona bilind di nav membranek nîv-permeable de.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Doğa ve Kimya sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Nature & Chemistry, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Natur und Chemie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Nature et Chimie, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Природа и химия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الطبيعة والكيمياء\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“自然与化学”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Xwezayî û Kîmya\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
          "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
          "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
          "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
          "ru": "Зеленая химия выступает за хранение ядерных отходов на дне океана.",
          "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
          "zh": "绿色化学提倡将核废料储存在海底。",
          "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
        },
        {
          "tr": "Fosil yakıtların kontrolsüz yakılması küresel karbon döngüsünü bozarak atmosferde CO2 birikimine yol açar.",
          "en": "Uncontrolled burning of fossil fuels disrupts the global carbon cycle, leading to CO2 accumulation in the atmosphere.",
          "de": "Die unkontrollierte Verbrennung fossiler Brennstoffe stört den globalen Kohlenstoffkreislauf und führt zur CO2-Anreicherung in der Atmosphäre.",
          "fr": "La combustion incontrôlée de combustibles fossiles perturbe le cycle mondial du carbone, entraînant une accumulation de CO2 dans l’atmosphère.",
          "ru": "Неконтролируемое сжигание ископаемого топлива нарушает глобальный углеродный цикл, что приводит к накоплению CO2 в атмосфере.",
          "ar": "يؤدي حرق الوقود الأحفوري بشكل غير منضبط إلى تعطيل دورة الكربون العالمية، مما يؤدي إلى تراكم ثاني أكسيد الكربون في الغلاف الجوي.",
          "zh": "化石燃料不受控制的燃烧扰乱了全球碳循环，导致二氧化碳在大气中积累。",
          "ku": "Şewitandina bêkontrol a sotemeniyên fosîl çerxa karbonê ya gerdûnî têk dibe û dibe sedema kombûna CO2 li atmosferê."
        },
        {
          "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
          "en": "Persistent hardness is completely eliminated by simply boiling the water.",
          "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
          "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
          "ru": "Постоянная жесткость полностью устраняется простым кипячением воды.",
          "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
          "zh": "只需将水煮沸即可完全消除持续的硬度。",
          "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
        },
        {
          "tr": "Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.",
          "en": "Acid rain is caused by pure oxygen and nitrogen gases in the atmosphere.",
          "de": "Saurer Regen wird durch reine Sauerstoff- und Stickstoffgase in der Atmosphäre verursacht.",
          "fr": "Les pluies acides sont causées par l’oxygène pur et l’azote présents dans l’atmosphère.",
          "ru": "Кислотные дожди вызываются чистым кислородом и азотными газами в атмосфере.",
          "ar": "وينتج المطر الحمضي عن وجود غازي الأكسجين والنيتروجين النقي في الغلاف الجوي.",
          "zh": "酸雨是由大气中的纯氧气和氮气引起的。",
          "ku": "Barana asîdî ji ber gazên oksîjen û nîtrojenê yên paqij ên li atmosferê çêdibe."
        },
        {
          "tr": "Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.",
          "en": "Hard water does not create scale in the pipes, on the contrary, it protects the pipes against corrosion.",
          "de": "Hartes Wasser bildet keinen Kalk in den Rohren, sondern schützt die Rohre im Gegenteil vor Korrosion.",
          "fr": "L’eau dure ne crée pas de tartre dans les canalisations, au contraire, elle protège les canalisations contre la corrosion.",
          "ru": "Жесткая вода не создает накипи в трубах, а наоборот, защищает трубы от коррозии.",
          "ar": "الماء العسر لا يخلق ترسبات في الأنابيب، بل على العكس، فهو يحمي الأنابيب من التآكل.",
          "zh": "硬水不会在管道中产生水垢，相反，它可以保护管道免受腐蚀。",
          "ku": "Ava hişk di lûleyan de pîvanê çênake, berovajî boriyan ji korozyonê diparêze."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Fosil yakıtların kontrolsüz yakılması küresel karbon döngüsünü bozarak atmosferde CO2 birikimine yol açar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Uncontrolled burning of fossil fuels disrupts the global carbon cycle, leading to CO2 accumulation in the atmosphere.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die unkontrollierte Verbrennung fossiler Brennstoffe stört den globalen Kohlenstoffkreislauf und führt zur CO2-Anreicherung in der Atmosphäre.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La combustion incontrôlée de combustibles fossiles perturbe le cycle mondial du carbone, entraînant une accumulation de CO2 dans l’atmosphère.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Неконтролируемое сжигание ископаемого топлива нарушает глобальный углеродный цикл, что приводит к накоплению CO2 в атмосфере.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يؤدي حرق الوقود الأحفوري بشكل غير منضبط إلى تعطيل دورة الكربون العالمية، مما يؤدي إلى تراكم ثاني أكسيد الكربون في الغلاف الجوي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“化石燃料不受控制的燃烧扰乱了全球碳循环，导致二氧化碳在大气中积累。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Şewitandina bêkontrol a sotemeniyên fosîl çerxa karbonê ya gerdûnî têk dibe û dibe sedema kombûna CO2 li atmosferê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin13",
      "stem": {
        "tr": "Aşağıda Doğa ve Kimya ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Nature & Chemistry, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Natur und Chemie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Nature et Chimie, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Природа и химия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الطبيعة والكيمياء\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“自然与化学”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Xwezayî û Kîmya\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
          "en": "Soft waters leave plenty of lime deposits.",
          "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
          "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
          "ru": "Мягкие воды оставляют много известковых отложений.",
          "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
          "zh": "软水会留下大量石灰沉积物。",
          "ku": "Avên nerm gelek depoyên lîmê dihêlin."
        },
        {
          "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
          "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
          "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
          "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
          "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
          "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
          "zh": "引起永久硬度的盐（如 CaSO4 和 MgCl2）在煮沸水时会以 CaCO3 形式沉淀而被除去。",
          "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
        },
        {
          "tr": "pH değeri 5,6'nın altında olan yağışlar asit yağmuru olarak kabul edilir.",
          "en": "Precipitation with a pH value below 5.6 is considered acid rain.",
          "de": "Als saurer Regen gilt Niederschlag mit einem pH-Wert unter 5,6.",
          "fr": "Les précipitations dont le pH est inférieur à 5,6 sont considérées comme des pluies acides.",
          "ru": "Осадки со значением pH ниже 5,6 считаются кислотными дождями.",
          "ar": "ويعتبر هطول الأمطار مع قيمة الرقم الهيدروجيني أقل من 5.6 المطر الحمضي.",
          "zh": "pH值低于5.6的降水被视为酸雨。",
          "ku": "Barîna bi nirxa pH di bin 5,6 de wekî barana asîd tê hesibandin."
        },
        {
          "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
          "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
          "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
          "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
          "ru": "Газы CFC восстанавливают озоновый слой и полностью блокируют ультрафиолетовые лучи.",
          "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
          "zh": "CFC气体修复臭氧层并完全阻挡紫外线。",
          "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
        },
        {
          "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
          "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
          "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
          "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
          "ru": "Коагуляция – это процесс испарения извести в воде путем ее кипячения.",
          "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
          "zh": "混凝是通过煮沸水中的石灰来蒸发的过程。",
          "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"pH değeri 5,6'nın altında olan yağışlar asit yağmuru olarak kabul edilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Precipitation with a pH value below 5.6 is considered acid rain.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Als saurer Regen gilt Niederschlag mit einem pH-Wert unter 5,6.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les précipitations dont le pH est inférieur à 5,6 sont considérées comme des pluies acides.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Осадки со значением pH ниже 5,6 считаются кислотными дождями.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ويعتبر هطول الأمطار مع قيمة الرقم الهيدروجيني أقل من 5.6 المطر الحمضي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“pH值低于5.6的降水被视为酸雨。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Barîna bi nirxa pH di bin 5,6 de wekî barana asîd tê hesibandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin14",
      "stem": {
        "tr": "Doğa ve Kimya konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Nature & Chemistry, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Natur und Chemie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Nature et Chimie, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Природа и химия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الطبيعة والكيمياء\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“自然与化学”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Xwezayî û Kîmya\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
          "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
          "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
          "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
          "ru": "В жесткой воде моющее средство не пенится и полностью теряет свои чистящие свойства.",
          "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
          "zh": "在硬水中，洗涤剂不会起泡并完全失去其清洁性能。",
          "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
        },
        {
          "tr": "O2 ve N2 gazları dünyadaki sera etkisinin %90'ından sorumludur.",
          "en": "O2 and N2 gases are responsible for 90% of the world's greenhouse effect.",
          "de": "O2- und N2-Gase sind für 90 % des weltweiten Treibhauseffekts verantwortlich.",
          "fr": "Les gaz O2 et N2 sont responsables de 90 % de l’effet de serre mondial.",
          "ru": "Газы O2 и N2 ответственны за 90% мирового парникового эффекта.",
          "ar": "تعتبر غازات O2 وN2 مسؤولة عن 90% من ظاهرة الاحتباس الحراري في العالم.",
          "zh": "世界上 90% 的温室效应是由氧气和氮气造成的。",
          "ku": "Gazên O2 û N2 ji %90 bandora serayê ya cîhanê berpirsiyar in."
        },
        {
          "tr": "Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.",
          "en": "Mercury is a useful mineral that is easily broken down in the human body.",
          "de": "Quecksilber ist ein nützliches Mineral, das im menschlichen Körper leicht abgebaut wird.",
          "fr": "Le mercure est un minéral utile qui se décompose facilement dans le corps humain.",
          "ru": "Ртуть – полезный минерал, который легко расщепляется в организме человека.",
          "ar": "الزئبق معدن مفيد يتحلل بسهولة في جسم الإنسان.",
          "zh": "汞是一种有用的矿物质，很容易在人体内分解。",
          "ku": "Mercury mîneralek kêrhatî ye ku di laşê mirovan de bi hêsanî tê perçe kirin."
        },
        {
          "tr": "Toprak ve su kirliliğine neden olan piller kesinlikle çöpe atılmamalı, atık pil kutularında toplanmalıdır.",
          "en": "Batteries that cause soil and water pollution should never be thrown away and should be collected in waste battery boxes.",
          "de": "Batterien, die Boden- und Wasserverschmutzung verursachen, sollten niemals weggeworfen und in Altbatterieboxen gesammelt werden.",
          "fr": "Les batteries qui polluent le sol et l’eau ne doivent jamais être jetées et doivent être collectées dans des conteneurs pour batteries usagées.",
          "ru": "Батарейки, загрязняющие почву и воду, никогда не следует выбрасывать, их следует собирать в контейнеры для использованных батарей.",
          "ar": "لا ينبغي أبدًا التخلص من البطاريات التي تسبب تلوث التربة والمياه، ويجب جمعها في صناديق نفايات البطاريات.",
          "zh": "造成土壤和水污染的电池切勿丢弃，应收集在废电池箱中。",
          "ku": "Pîlên ku dibin sedema qirêjiya ax û avê divê tu carî neyên avêtin û di qutiyên pîlê yên çopê de werin berhev kirin."
        },
        {
          "tr": "Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.",
          "en": "Chlorination is done to precipitate lead and mercury in water.",
          "de": "Durch Chlorierung werden Blei und Quecksilber im Wasser ausgefällt.",
          "fr": "La chloration vise à précipiter le plomb et le mercure dans l'eau.",
          "ru": "Хлорирование проводится для осаждения свинца и ртути в воде.",
          "ar": "تتم عملية الكلورة لترسيب الرصاص والزئبق في الماء.",
          "zh": "进行氯化以沉淀水中的铅和汞。",
          "ku": "Klorkirin ji bo niştandina sirb û merkurê di avê de tê kirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Toprak ve su kirliliğine neden olan piller kesinlikle çöpe atılmamalı, atık pil kutularında toplanmalıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Batteries that cause soil and water pollution should never be thrown away and should be collected in waste battery boxes.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Batterien, die Boden- und Wasserverschmutzung verursachen, sollten niemals weggeworfen und in Altbatterieboxen gesammelt werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les batteries qui polluent le sol et l’eau ne doivent jamais être jetées et doivent être collectées dans des conteneurs pour batteries usagées.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Батарейки, загрязняющие почву и воду, никогда не следует выбрасывать, их следует собирать в контейнеры для использованных батарей.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لا ينبغي أبدًا التخلص من البطاريات التي تسبب تلوث التربة والمياه، ويجب جمعها في صناديق نفايات البطاريات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“造成土壤和水污染的电池切勿丢弃，应收集在废电池箱中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pîlên ku dibin sedema qirêjiya ax û avê divê tu carî neyên avêtin û di qutiyên pîlê yên çopê de werin berhev kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Doğa ve Kimya ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Nature & Chemistry, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Natur und Chemie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Nature et Chimie, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Природа и химия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الطبيعة والكيمياء\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“自然与化学”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Xwezayî û Kîmya\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
          "en": "Persistent hardness is completely eliminated by simply boiling the water.",
          "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
          "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
          "ru": "Постоянная жесткость полностью устраняется простым кипячением воды.",
          "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
          "zh": "只需将水煮沸即可完全消除持续的硬度。",
          "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
        },
        {
          "tr": "Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.",
          "en": "Acid rain is caused by pure oxygen and nitrogen gases in the atmosphere.",
          "de": "Saurer Regen wird durch reine Sauerstoff- und Stickstoffgase in der Atmosphäre verursacht.",
          "fr": "Les pluies acides sont causées par l’oxygène pur et l’azote présents dans l’atmosphère.",
          "ru": "Кислотные дожди вызываются чистым кислородом и азотными газами в атмосфере.",
          "ar": "وينتج المطر الحمضي عن وجود غازي الأكسجين والنيتروجين النقي في الغلاف الجوي.",
          "zh": "酸雨是由大气中的纯氧气和氮气引起的。",
          "ku": "Barana asîdî ji ber gazên oksîjen û nîtrojenê yên paqij ên li atmosferê çêdibe."
        },
        {
          "tr": "Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.",
          "en": "Hard water does not create scale in the pipes, on the contrary, it protects the pipes against corrosion.",
          "de": "Hartes Wasser bildet keinen Kalk in den Rohren, sondern schützt die Rohre im Gegenteil vor Korrosion.",
          "fr": "L’eau dure ne crée pas de tartre dans les canalisations, au contraire, elle protège les canalisations contre la corrosion.",
          "ru": "Жесткая вода не создает накипи в трубах, а наоборот, защищает трубы от коррозии.",
          "ar": "الماء العسر لا يخلق ترسبات في الأنابيب، بل على العكس، فهو يحمي الأنابيب من التآكل.",
          "zh": "硬水不会在管道中产生水垢，相反，它可以保护管道免受腐蚀。",
          "ku": "Ava hişk di lûleyan de pîvanê çênake, berovajî boriyan ji korozyonê diparêze."
        },
        {
          "tr": "Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.",
          "en": "No energy or pressure is required in the reverse osmosis process.",
          "de": "Für den Umkehrosmoseprozess ist weder Energie noch Druck erforderlich.",
          "fr": "Aucune énergie ni pression n’est requise dans le processus d’osmose inverse.",
          "ru": "В процессе обратного осмоса не требуется никакой энергии или давления.",
          "ar": "لا توجد حاجة إلى طاقة أو ضغط في عملية التناضح العكسي.",
          "zh": "反渗透过程不需要能量或压力。",
          "ku": "Di pêvajoya osmoza berevajî de tu enerjî an zext hewce nake."
        },
        {
          "tr": "Yeşil kimya ilkeleri, atık oluşumunu kaynağında önlemeyi ve yenilenebilir hammadde kullanımını hedefler.",
          "en": "Green chemistry principles aim to prevent waste generation at its source and use renewable raw materials.",
          "de": "Die Grundsätze der Grünen Chemie zielen darauf ab, die Entstehung von Abfällen an der Quelle zu verhindern und nachwachsende Rohstoffe zu verwenden.",
          "fr": "Les principes de la chimie verte visent à prévenir la production de déchets à la source et à utiliser des matières premières renouvelables.",
          "ru": "Принципы зеленой химии направлены на предотвращение образования отходов у их источника и использование возобновляемого сырья.",
          "ar": "تهدف مبادئ الكيمياء الخضراء إلى منع توليد النفايات من مصدرها واستخدام المواد الخام المتجددة.",
          "zh": "绿色化学原则旨在从源头防止废物产生并使用可再生原材料。",
          "ku": "Prensîbên kîmya kesk armanc dike ku pêşî li hilberîna bermayiyê li çavkaniya xwe bigire û madeyên xav ên nûvekirî bikar bîne."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Yeşil kimya ilkeleri, atık oluşumunu kaynağında önlemeyi ve yenilenebilir hammadde kullanımını hedefler.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Green chemistry principles aim to prevent waste generation at its source and use renewable raw materials.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Grundsätze der Grünen Chemie zielen darauf ab, die Entstehung von Abfällen an der Quelle zu verhindern und nachwachsende Rohstoffe zu verwenden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les principes de la chimie verte visent à prévenir la production de déchets à la source et à utiliser des matières premières renouvelables.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Принципы зеленой химии направлены на предотвращение образования отходов у их источника и использование возобновляемого сырья.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تهدف مبادئ الكيمياء الخضراء إلى منع توليد النفايات من مصدرها واستخدام المواد الخام المتجددة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“绿色化学原则旨在从源头防止废物产生并使用可再生原材料。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Prensîbên kîmya kesk armanc dike ku pêşî li hilberîna bermayiyê li çavkaniya xwe bigire û madeyên xav ên nûvekirî bikar bîne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u05-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Doğa ve Kimya konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Nature & Chemistry, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Natur und Chemie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Nature et Chimie, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Природа и химия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الطبيعة والكيمياء\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“自然与化学”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Xwezayî û Kîmya\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Yumuşak sular Ca2+ ve Mg2+ iyonlarınca fakir olduğundan sabunu kolay köpürtür ve tesisatta kireç tortusu bırakmaz.",
          "en": "Soft waters are poor in Ca2+ and Mg2+ ions, so they lather soap easily and do not leave limescale in plumbing.",
          "de": "Weiches Wasser ist arm an Ca2+- und Mg2+-Ionen; daher schäumt Seife leicht und es bildet sich kein Kalk in den Leitungen.",
          "fr": "Les eaux douces sont pauvres en ions Ca2+ et Mg2+ ; elles font donc facilement mousser le savon et ne laissent pas de tartre dans la plomberie.",
          "ru": "Мягкая вода бедна ионами Ca2+ и Mg2+, поэтому мыло в ней легко пенится, а в трубах не образуется накипь.",
          "ar": "المياه اليسرة فقيرة بأيونات Ca2+ وMg2+، لذا تُرغي الصابون بسهولة ولا تترك ترسبات كلسية في التمديدات.",
          "zh": "软水中 Ca2+ 和 Mg2+ 离子含量低，因此肥皂易起泡，且不会在管道中留下水垢。",
          "ku": "Avên nerm ji aliyê îyonên Ca2+ û Mg2+ ve feqîr in, ji ber vê yekê sabûn bi hêsanî kef dike û di boriyan de kils namîne."
        },
        {
          "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
          "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
          "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
          "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
          "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
          "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
          "zh": "引起永久硬度的盐（如 CaSO4 和 MgCl2）在煮沸水时会以 CaCO3 形式沉淀而被除去。",
          "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
        },
        {
          "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
          "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
          "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
          "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
          "ru": "Газы CFC восстанавливают озоновый слой и полностью блокируют ультрафиолетовые лучи.",
          "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
          "zh": "CFC气体修复臭氧层并完全阻挡紫外线。",
          "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
        },
        {
          "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
          "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
          "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
          "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
          "ru": "Коагуляция – это процесс испарения извести в воде путем ее кипячения.",
          "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
          "zh": "混凝是通过煮沸水中的石灰来蒸发的过程。",
          "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
        },
        {
          "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
          "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
          "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
          "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
          "ru": "Когда ископаемое топливо сжигается, в атмосферу выделяется только чистый водяной пар.",
          "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
          "zh": "当化石燃料燃烧时，它们仅向大气中释放纯净的水蒸气。",
          "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Yumuşak sular Ca2+ ve Mg2+ iyonlarınca fakir olduğundan sabunu kolay köpürtür ve tesisatta kireç tortusu bırakmaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Soft waters are poor in Ca2+ and Mg2+ ions, so they lather soap easily and do not leave limescale in plumbing.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Weiches Wasser ist arm an Ca2+- und Mg2+-Ionen; daher schäumt Seife leicht und es bildet sich kein Kalk in den Leitungen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les eaux douces sont pauvres en ions Ca2+ et Mg2+ ; elles font donc facilement mousser le savon et ne laissent pas de tartre dans la plomberie.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Мягкая вода бедна ионами Ca2+ и Mg2+, поэтому мыло в ней легко пенится, а в трубах не образуется накипь.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المياه اليسرة فقيرة بأيونات Ca2+ وMg2+، لذا تُرغي الصابون بسهولة ولا تترك ترسبات كلسية في التمديدات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“软水中 Ca2+ 和 Mg2+ 离子含量低，因此肥皂易起泡，且不会在管道中留下水垢。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Avên nerm ji aliyê îyonên Ca2+ û Mg2+ ve feqîr in, ji ber vê yekê sabûn bi hêsanî kef dike û di boriyan de kils namîne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit05;
