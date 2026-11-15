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
    "zh": "水处理、环境污染与温室气体",
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
        "ru": "Жёсткая вода содержит много ионов Ca2+ и Mg2+; она увеличивает расход мыла и оставляет отложения (накипь).",
        "ar": "المياه العسرة هي مياه تحتوي على تركيزات عالية من أيونات Ca2+ وMg2+؛ يزيد من استهلاك الصابون ويترك بقايا.",
        "zh": "硬水是 Ca2+ 和 Mg2+ 浓度较高的水，会增加肥皂用量并留下水垢。",
        "ku": "Avên hişk, avên bi îyonên Ca2+ û Mg2+ yên bi giranî ne; Ew vexwarina sabûnê zêde dike û bermayiyê dihêle."
      },
      "trap": {
        "tr": "Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.",
        "en": "In hard water, detergent does not foam and completely loses its cleaning properties.",
        "de": "In hartem Wasser schäumt das Waschmittel nicht und verliert seine Reinigungswirkung vollständig.",
        "fr": "Dans l'eau dure, le détergent ne mousse pas et perd complètement ses propriétés nettoyantes.",
        "ru": "В жёсткой воде синтетическое моющее средство не пенится и полностью теряет моющую способность.",
        "ar": "في الماء العسر، لا يشكل المنظف رغوة ويفقد خصائصه التنظيفية تمامًا.",
        "zh": "在硬水中，合成洗涤剂不起泡，并完全失去去污能力。",
        "ku": "Di ava hişk de, detergent kef nake û taybetmendiyên xwe yên paqijkirinê bi tevahî winda dike."
      },
      "whyTrapIsFalse": {
        "tr": "Sertlik iyonlarıyla çökelek oluşturan sabundur; sentetik deterjanlar Ca2+ ve Mg2+ ile çökelek oluşturmadığı için sert suda da köpürür ve temizler. Sert su yalnızca sabun tüketimini artırır.",
        "en": "It is soap that forms a precipitate with hardness ions; synthetic detergents do not precipitate with Ca2+ and Mg2+, so they still foam and clean in hard water. Hard water only increases soap consumption.",
        "de": "Mit den Härteionen bildet die Seife einen Niederschlag; synthetische Waschmittel fallen mit Ca2+ und Mg2+ nicht aus und schäumen und reinigen daher auch in hartem Wasser. Hartes Wasser erhöht nur den Seifenverbrauch.",
        "fr": "C'est le savon qui précipite avec les ions de la dureté ; les détergents synthétiques ne précipitent pas avec Ca2+ et Mg2+, ils moussent et nettoient donc aussi en eau dure. L'eau dure augmente seulement la consommation de savon.",
        "ru": "Осадок с ионами жёсткости образует мыло; синтетические моющие средства не осаждаются ионами Ca2+ и Mg2+, поэтому пенятся и моют и в жёсткой воде. Жёсткая вода лишь увеличивает расход мыла.",
        "ar": "الصابون هو الذي يكوّن راسبًا مع أيونات العسر؛ أما المنظفات الصناعية فلا تترسب مع Ca2+ وMg2+، لذا تُرغي وتنظف في الماء العسر أيضًا. الماء العسر يزيد استهلاك الصابون فقط.",
        "zh": "与硬度离子生成沉淀的是肥皂；合成洗涤剂不与 Ca2+ 和 Mg2+ 生成沉淀，因此在硬水中仍能起泡和去污。硬水只是增加肥皂的用量。",
        "ku": "Ya ku bi îyonên hişkiyê re niştek çêdike sabûn e; deterjanên sentetîk bi Ca2+ û Mg2+ re niştek çênakin, ji ber vê yekê di ava hişk de jî kef dikin û paqij dikin. Ava hişk tenê xerckirina sabûnê zêde dike."
      }
    },
    {
      "id": "u05-f02",
      "fact": {
        "tr": "Geçici sertlik Ca(HCO3)2 ve Mg(HCO3)2'den kaynaklanır ve suyu kaynatarak giderilebilir.",
        "en": "Temporary hardness is caused by Ca(HCO3)2 and Mg(HCO3)2 and can be removed by boiling water.",
        "de": "Vorübergehende Härte wird durch Ca(HCO3)2 und Mg(HCO3)2 verursacht und kann durch kochendes Wasser entfernt werden.",
        "fr": "La dureté temporaire est causée par Ca(HCO3)2 et Mg(HCO3)2 et peut être éliminée par de l'eau bouillante.",
        "ru": "Временная жёсткость обусловлена Ca(HCO3)2 и Mg(HCO3)2 и устраняется кипячением воды.",
        "ar": "تنتج العسر المؤقت عن Ca(HCO3)2 وMg(HCO3)2 ويمكن إزالتها بالماء المغلي.",
        "zh": "暂时硬度由 Ca(HCO3)2 和 Mg(HCO3)2 引起，可以通过煮沸除去。",
        "ku": "Serhişkiya demkî ji hêla Ca(HCO3)2 û Mg(HCO3)2 ve çêdibe û bi ava kelandî dikare jê were derxistin."
      },
      "trap": {
        "tr": "Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.",
        "en": "Persistent hardness is completely eliminated by simply boiling the water.",
        "de": "Durch einfaches Abkochen des Wassers wird die bleibende Härte vollständig beseitigt.",
        "fr": "La dureté persistante est complètement éliminée en faisant simplement bouillir l’eau.",
        "ru": "Постоянная жёсткость полностью устраняется простым кипячением воды.",
        "ar": "يتم التخلص من العسر الدائم تمامًا بمجرد غلي الماء.",
        "zh": "只需把水煮沸，就能完全消除永久硬度。",
        "ku": "Serhişkiya daîmî bi tenê bi kelandina avê bi tevahî ji holê radibe."
      },
      "whyTrapIsFalse": {
        "tr": "Kaynatmayla yalnızca bikarbonat kaynaklı geçici sertlik CaCO3 olarak çöker. Kalıcı sertliğe yol açan sülfat ve klorür tuzları ısıtmayla çökmez; iyon değiştirme veya Na2CO3 ile çöktürme gerekir.",
        "en": "Boiling only precipitates the temporary hardness caused by hydrogen carbonates, as CaCO3. The sulfate and chloride salts behind permanent hardness do not precipitate on heating; ion exchange or precipitation with Na2CO3 is needed.",
        "de": "Durch Kochen fällt nur die von Hydrogencarbonaten verursachte temporäre Härte als CaCO3 aus. Die Sulfat- und Chloridsalze der bleibenden Härte fallen beim Erhitzen nicht aus; nötig sind Ionenaustausch oder Fällung mit Na2CO3.",
        "fr": "L'ébullition ne précipite, sous forme de CaCO3, que la dureté temporaire due aux hydrogénocarbonates. Les sulfates et chlorures responsables de la dureté permanente ne précipitent pas à la chaleur ; il faut un échange d'ions ou une précipitation par Na2CO3.",
        "ru": "При кипячении в виде CaCO3 осаждается только временная (гидрокарбонатная) жёсткость. Сульфаты и хлориды, создающие постоянную жёсткость, при нагревании не осаждаются; нужен ионный обмен или осаждение содой Na2CO3.",
        "ar": "الغليان يرسّب فقط العسر المؤقت الناتج عن البيكربونات على شكل CaCO3. أما أملاح الكبريتات والكلوريدات المسببة للعسر الدائم فلا تترسب بالتسخين؛ ويلزم التبادل الأيوني أو الترسيب بـ Na2CO3.",
        "zh": "煮沸只能使碳酸氢盐引起的暂时硬度以 CaCO3 的形式沉淀。造成永久硬度的硫酸盐和氯化物受热不沉淀，需要离子交换或加 Na2CO3 沉淀。",
        "ku": "Bi kelandinê tenê hişkiya demkî ya ji bîkarbonatan wek CaCO3 dinişe. Xwêyên sulfat û klorîdê yên hişkiya daîmî bi germkirinê nanişin; guherandina îyonan an niştandin bi Na2CO3 pêwîst e."
      }
    },
    {
      "id": "u05-f03",
      "fact": {
        "tr": "Kalıcı sertlik sülfat (SO4^2-) ve klorür (Cl-) tuzlarından kaynaklanır; kaynatmayla giderilemez, iyon değiştirici reçinelerle veya Na2CO3 ile çöktürülerek giderilir.",
        "en": "Permanent hardness is caused by sulfate (SO4^2-) and chloride (Cl-) salts; it cannot be removed by boiling but is removed with ion-exchange resins or by precipitation with Na2CO3.",
        "de": "Bleibende Härte wird durch Sulfat- (SO4^2-) und Chloridsalze (Cl-) verursacht; sie lässt sich nicht durch Kochen, sondern mit Ionenaustauscherharzen oder durch Fällung mit Na2CO3 entfernen.",
        "fr": "La dureté permanente est due aux sulfates (SO4^2-) et aux chlorures (Cl-) ; elle ne s'élimine pas par ébullition mais avec des résines échangeuses d'ions ou par précipitation avec Na2CO3.",
        "ru": "Постоянная жёсткость обусловлена сульфатами (SO4^2-) и хлоридами (Cl-); кипячением она не устраняется, её удаляют ионообменными смолами или осаждением содой Na2CO3.",
        "ar": "ينتج العسر الدائم عن أملاح الكبريتات (SO4^2-) والكلوريدات (Cl-)؛ ولا يزول بالغليان، بل يُزال براتنجات التبادل الأيوني أو بالترسيب باستخدام Na2CO3.",
        "zh": "永久硬度由硫酸盐(SO4^2-)和氯化物(Cl-)引起；不能用煮沸除去，而要用离子交换树脂或加 Na2CO3 沉淀除去。",
        "ku": "Hişkiya daîmî ji xwêyên sulfat (SO4^2-) û klorîd (Cl-) çêdibe; bi kelandinê nayê rakirin, bi rezînên guherandina îyonan an bi niştandina bi Na2CO3 tê rakirin."
      },
      "trap": {
        "tr": "Kalıcı sertliğe neden olan CaSO4 ve MgCl2 gibi tuzlar, su kaynatıldığında CaCO3 olarak çöker ve giderilir.",
        "en": "Salts causing permanent hardness, such as CaSO4 and MgCl2, precipitate as CaCO3 and are removed when the water is boiled.",
        "de": "Salze, die bleibende Härte verursachen, wie CaSO4 und MgCl2, fallen beim Abkochen des Wassers als CaCO3 aus und werden so entfernt.",
        "fr": "Les sels responsables de la dureté permanente, comme CaSO4 et MgCl2, précipitent sous forme de CaCO3 et sont éliminés lorsqu'on fait bouillir l'eau.",
        "ru": "Соли, вызывающие постоянную жёсткость, такие как CaSO4 и MgCl2, при кипячении воды выпадают в осадок в виде CaCO3 и удаляются.",
        "ar": "الأملاح المسببة للعسر الدائم، مثل CaSO4 وMgCl2، تترسب على شكل CaCO3 وتُزال عند غلي الماء.",
        "zh": "引起永久硬度的 CaSO4、MgCl2 等盐，在水煮沸时会以 CaCO3 的形式沉淀而被除去。",
        "ku": "Xwêyên ku dibin sedema serhişkiya daîmî, wek CaSO4 û MgCl2, dema av tê kelandin wek CaCO3 dinişin û tên rakirin."
      },
      "whyTrapIsFalse": {
        "tr": "CaSO4 ve MgCl2 yapısında karbonat ya da bikarbonat bulunmadığı için ısıtıldığında CaCO3 oluşamaz. Kaynatınca çöken CaCO3 yalnızca Ca(HCO3)2'nin bozunmasından gelir.",
        "en": "CaSO4 and MgCl2 contain no carbonate or hydrogen carbonate, so heating cannot produce CaCO3 from them. The CaCO3 that precipitates on boiling comes only from the decomposition of Ca(HCO3)2.",
        "de": "CaSO4 und MgCl2 enthalten weder Carbonat noch Hydrogencarbonat, daher kann beim Erhitzen kein CaCO3 aus ihnen entstehen. Das beim Kochen ausfallende CaCO3 stammt nur aus der Zersetzung von Ca(HCO3)2.",
        "fr": "CaSO4 et MgCl2 ne contiennent ni carbonate ni hydrogénocarbonate : le chauffage ne peut donc pas en former du CaCO3. Le CaCO3 qui précipite à l'ébullition provient uniquement de la décomposition de Ca(HCO3)2.",
        "ru": "В CaSO4 и MgCl2 нет карбонат- или гидрокарбонат-ионов, поэтому при нагревании CaCO3 из них образоваться не может. Выпадающий при кипячении CaCO3 получается только при разложении Ca(HCO3)2.",
        "ar": "لا يحتوي CaSO4 وMgCl2 على كربونات أو بيكربونات، لذا لا يمكن أن يتكوّن منهما CaCO3 بالتسخين. فالـ CaCO3 الذي يترسب عند الغليان ينتج فقط من تفكك Ca(HCO3)2.",
        "zh": "CaSO4 和 MgCl2 中不含碳酸根或碳酸氢根，加热不可能由它们生成 CaCO3。煮沸时析出的 CaCO3 只来自 Ca(HCO3)2 的分解。",
        "ku": "Di CaSO4 û MgCl2 de karbonat an bîkarbonat tune ye, ji ber vê yekê bi germkirinê CaCO3 ji wan çênabe. CaCO3 ya ku bi kelandinê dinişe tenê ji hilweşîna Ca(HCO3)2 tê."
      }
    },
    {
      "id": "u05-f04",
      "fact": {
        "tr": "CO2, CH4, N2O ve su buharı kızılötesi ışınları soğurarak sera etkisi oluşturan gazlardır; insan etkinlikleriyle CO2, CH4 ve N2O derişiminin artması küresel ısınmayı hızlandırır, su buharı ise sıcaklığa bağlı olarak artıp bu etkiyi güçlendirir.",
        "en": "CO2, CH4, N2O and water vapour are gases that absorb infrared radiation and cause the greenhouse effect; the human-driven rise in CO2, CH4 and N2O speeds up global warming, while water vapour increases with temperature and amplifies the effect.",
        "de": "CO2, CH4, N2O und Wasserdampf absorbieren Infrarotstrahlung und verursachen den Treibhauseffekt; der vom Menschen verursachte Anstieg von CO2, CH4 und N2O beschleunigt die globale Erwärmung, während Wasserdampf mit der Temperatur zunimmt und den Effekt verstärkt.",
        "fr": "CO2, CH4, N2O et la vapeur d'eau absorbent le rayonnement infrarouge et produisent l'effet de serre ; la hausse de CO2, CH4 et N2O due aux activités humaines accélère le réchauffement climatique, tandis que la vapeur d'eau augmente avec la température et amplifie l'effet.",
        "ru": "CO2, CH4, N2O и водяной пар поглощают инфракрасное излучение и создают парниковый эффект; рост концентраций CO2, CH4 и N2O из-за деятельности человека ускоряет глобальное потепление, а количество водяного пара растёт с температурой и усиливает этот эффект.",
        "ar": "CO2 وCH4 وN2O وبخار الماء غازات تمتص الأشعة تحت الحمراء وتسبب الاحتباس الحراري؛ وارتفاع تراكيز CO2 وCH4 وN2O بفعل الأنشطة البشرية يسرّع الاحترار العالمي، بينما يزداد بخار الماء بارتفاع الحرارة فيضخّم هذا الأثر.",
        "zh": "CO2、CH4、N2O和水蒸气都能吸收红外辐射，产生温室效应；人类活动使CO2、CH4和N2O浓度上升，加速全球变暖，而水蒸气随温度升高而增加，从而放大这一效应。",
        "ku": "CO2, CH4, N2O û buhara avê tîrêjên binsor digirin û bandora serayê çêdikin; zêdebûna CO2, CH4 û N2O bi çalakiyên mirovan germbûna gerdûnî bileztir dike, buhara avê jî bi germahiyê re zêde dibe û vê bandorê xurttir dike."
      },
      "trap": {
        "tr": "O2 ve N2 gazları dünyadaki sera etkisinin %90'ından sorumludur.",
        "en": "O2 and N2 gases are responsible for 90% of the world's greenhouse effect.",
        "de": "O2- und N2-Gase sind für 90 % des weltweiten Treibhauseffekts verantwortlich.",
        "fr": "Les gaz O2 et N2 sont responsables de 90 % de l’effet de serre mondial.",
        "ru": "Газы O2 и N2 обусловливают 90 % парникового эффекта на Земле.",
        "ar": "تعتبر غازات O2 وN2 مسؤولة عن 90% من ظاهرة الاحتباس الحراري في العالم.",
        "zh": "地球上 90% 的温室效应是由 O2 和 N2 造成的。",
        "ku": "Gazên O2 û N2 ji %90 bandora serayê ya cîhanê berpirsiyar in."
      },
      "whyTrapIsFalse": {
        "tr": "N2 ve O2 aynı iki atomdan oluşan apolar moleküllerdir ve kızılötesi ışınları neredeyse hiç soğurmaz. Atmosferde çok bulunmaları onları sera gazı yapmaz; sera etkisini su buharı, CO2, CH4 ve N2O oluşturur.",
        "en": "N2 and O2 are nonpolar molecules made of two identical atoms and absorb almost no infrared radiation. Being abundant does not make them greenhouse gases; the greenhouse effect is due to water vapour, CO2, CH4 and N2O.",
        "de": "N2 und O2 sind unpolare Moleküle aus zwei gleichen Atomen und absorbieren praktisch keine Infrarotstrahlung. Ihre Häufigkeit macht sie nicht zu Treibhausgasen; den Treibhauseffekt verursachen Wasserdampf, CO2, CH4 und N2O.",
        "fr": "N2 et O2 sont des molécules apolaires formées de deux atomes identiques et n'absorbent presque pas le rayonnement infrarouge. Leur abondance n'en fait pas des gaz à effet de serre ; l'effet de serre est dû à la vapeur d'eau, au CO2, au CH4 et au N2O.",
        "ru": "N2 и O2 — неполярные молекулы из двух одинаковых атомов, они почти не поглощают инфракрасное излучение. Их обилие в воздухе не делает их парниковыми газами; парниковый эффект создают водяной пар, CO2, CH4 и N2O.",
        "ar": "N2 وO2 جزيئات غير قطبية مكوّنة من ذرتين متماثلتين ولا تمتص الأشعة تحت الحمراء تقريبًا. وفرتهما في الجو لا تجعلهما غازات دفيئة؛ فالاحتباس الحراري ينتج عن بخار الماء وCO2 وCH4 وN2O.",
        "zh": "N2和O2是由两个相同原子构成的非极性分子，几乎不吸收红外辐射。含量多并不使它们成为温室气体；温室效应来自水蒸气、CO2、CH4和N2O。",
        "ku": "N2 û O2 molekulên nepolar ên ji du atomên wekhev in û hema hema tîrêjên binsor nagirin. Pirbûna wan wan nake gazên serayê; bandora serayê ji buhara avê, CO2, CH4 û N2O tê."
      }
    },
    {
      "id": "u05-f05",
      "fact": {
        "tr": "Kükürt dioksit (SO2), kükürt trioksit (SO3) ve azot dioksit (NO2) asit yağmurlarına yol açan gazlardır.",
        "en": "Sulfur dioxide (SO2), sulfur trioxide (SO3) and nitrogen dioxide (NO2) are gases that cause acid rain.",
        "de": "Schwefeldioxid (SO2), Schwefeltrioxid (SO3) und Stickstoffdioxid (NO2) sind Gase, die sauren Regen verursachen.",
        "fr": "Le dioxyde de soufre (SO2), le trioxyde de soufre (SO3) et le dioxyde d'azote (NO2) sont des gaz responsables des pluies acides.",
        "ru": "Диоксид серы (SO2), триоксид серы (SO3) и диоксид азота (NO2) — газы, вызывающие кислотные дожди.",
        "ar": "ثاني أكسيد الكبريت (SO2) وثالث أكسيد الكبريت (SO3) وثاني أكسيد النيتروجين (NO2) غازات تسبب الأمطار الحمضية.",
        "zh": "二氧化硫(SO2)、三氧化硫(SO3)和二氧化氮(NO2)是导致酸雨的气体。",
        "ku": "Dîoksîda kewkurtê (SO2), trîoksîda kewkurtê (SO3) û dîoksîda nîtrojenê (NO2) gazên ku dibin sedema barana asîdî ne."
      },
      "trap": {
        "tr": "Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.",
        "en": "Acid rain is caused by pure oxygen and nitrogen gases in the atmosphere.",
        "de": "Saurer Regen wird durch reine Sauerstoff- und Stickstoffgase in der Atmosphäre verursacht.",
        "fr": "Les pluies acides sont causées par l’oxygène pur et l’azote présents dans l’atmosphère.",
        "ru": "Кислотные дожди вызывают содержащиеся в атмосфере чистые кислород и азот.",
        "ar": "وينتج المطر الحمضي عن وجود غازي الأكسجين والنيتروجين النقي في الغلاف الجوي.",
        "zh": "酸雨是由大气中的纯氧气和氮气引起的。",
        "ku": "Barana asîdî ji ber gazên oksîjen û nîtrojenê yên paqij ên li atmosferê çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "O2 ve N2 suyla asit oluşturmaz. Asit yağmuruna, yanma sırasında oluşan SO2, SO3 ve azot oksitlerinin su buharıyla tepkimeye girip H2SO4 ve HNO3 oluşturması yol açar.",
        "en": "O2 and N2 do not form acids with water. Acid rain is caused by SO2, SO3 and nitrogen oxides formed during combustion, which react with water vapour to give H2SO4 and HNO3.",
        "de": "O2 und N2 bilden mit Wasser keine Säuren. Saurer Regen entsteht, weil bei Verbrennungen gebildetes SO2, SO3 und Stickoxide mit Wasserdampf zu H2SO4 und HNO3 reagieren.",
        "fr": "O2 et N2 ne forment pas d'acide avec l'eau. Les pluies acides sont dues au SO2, au SO3 et aux oxydes d'azote formés lors des combustions, qui réagissent avec la vapeur d'eau pour donner H2SO4 et HNO3.",
        "ru": "O2 и N2 не образуют кислот с водой. Кислотные дожди вызывают SO2, SO3 и оксиды азота, образующиеся при горении: с водяным паром они дают H2SO4 и HNO3.",
        "ar": "لا يكوّن O2 وN2 أحماضًا مع الماء. ينتج المطر الحمضي عن SO2 وSO3 وأكاسيد النيتروجين المتكوّنة أثناء الاحتراق، إذ تتفاعل مع بخار الماء مكوّنة H2SO4 وHNO3.",
        "zh": "O2 和 N2 与水不生成酸。酸雨是燃烧产生的 SO2、SO3 和氮氧化物与水蒸气反应生成 H2SO4 和 HNO3 造成的。",
        "ku": "O2 û N2 bi avê re asîd çênakin. Barana asîdî ji SO2, SO3 û oksîtên nîtrojenê yên di şewitandinê de çêdibin tê; ew bi buhara avê re H2SO4 û HNO3 çêdikin."
      }
    },
    {
      "id": "u05-f06",
      "fact": {
        "tr": "Kloroflorokarbonlar (CFC gazları) stratosferdeki ozon (O3) tabakasının incelmesine neden olur.",
        "en": "Chlorofluorocarbons (CFC gases) cause depletion of the ozone (O3) layer in the stratosphere.",
        "de": "Fluorchlorkohlenwasserstoffe (FCKW-Gase) verursachen einen Abbau der Ozonschicht (O3) in der Stratosphäre.",
        "fr": "Les chlorofluorocarbures (gaz CFC) provoquent l'appauvrissement de la couche d'ozone (O3) dans la stratosphère.",
        "ru": "Хлорфторуглероды (ХФУ, фреоны) вызывают истончение озонового слоя (O3) в стратосфере.",
        "ar": "تتسبب مركبات الكلوروفلوروكربون (غازات مركبات الكربون الكلورية فلورية) في استنفاد طبقة الأوزون (O3) في طبقة الستراتوسفير.",
        "zh": "氟氯烃(CFC)会使平流层的臭氧(O3)层变薄。",
        "ku": "Klorofluorokarbon (gazên CFC) dibin sedema tinebûna qata ozonê (O3) a li stratosferê."
      },
      "trap": {
        "tr": "CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.",
        "en": "CFC gases repair the ozone layer and completely block ultraviolet rays.",
        "de": "FCKW-Gase reparieren die Ozonschicht und blockieren ultraviolette Strahlen vollständig.",
        "fr": "Les gaz CFC réparent la couche d'ozone et bloquent complètement les rayons ultraviolets.",
        "ru": "ХФУ восстанавливают озоновый слой и полностью задерживают ультрафиолетовое излучение.",
        "ar": "تعمل غازات مركبات الكربون الكلورية فلورية على إصلاح طبقة الأوزون وتمنع الأشعة فوق البنفسجية تمامًا.",
        "zh": "氟氯烃能修复臭氧层，并完全阻挡紫外线。",
        "ku": "Gazên CFC tebeqeya ozonê tamîr dikin û tîrêjên ultraviolet bi tevahî asteng dikin."
      },
      "whyTrapIsFalse": {
        "tr": "CFC molekülleri stratosferde UV ışınlarıyla parçalanınca açığa çıkan Cl atomları O3 moleküllerini zincirleme olarak yıkar. Yani CFC ozonu onarmaz, ozon tabakasını inceltir ve yeryüzüne ulaşan UV ışınını artırır.",
        "en": "When CFC molecules are split by UV light in the stratosphere, the Cl atoms released destroy O3 molecules in a chain process. So CFCs do not repair the ozone layer; they thin it and increase the UV reaching the ground.",
        "de": "Werden FCKW-Moleküle in der Stratosphäre durch UV-Licht gespalten, zerstören die freigesetzten Cl-Atome O3-Moleküle in einer Kettenreaktion. FCKW reparieren die Ozonschicht also nicht, sie dünnen sie aus und erhöhen die UV-Strahlung am Boden.",
        "fr": "Lorsque les CFC sont dissociés par les UV dans la stratosphère, les atomes de Cl libérés détruisent les molécules d'O3 en chaîne. Les CFC ne réparent donc pas la couche d'ozone : ils l'amincissent et augmentent les UV qui atteignent le sol.",
        "ru": "Когда молекулы ХФУ разрушаются УФ-излучением в стратосфере, освободившиеся атомы Cl по цепному механизму разрушают молекулы O3. Значит, ХФУ не восстанавливают озоновый слой, а истончают его и увеличивают УФ-излучение у поверхности.",
        "ar": "عندما تتفكك جزيئات مركبات الكلوروفلوروكربون بالأشعة فوق البنفسجية في الستراتوسفير، تحطم ذرات Cl المتحررة جزيئات O3 بشكل متسلسل. أي أنها لا ترمم طبقة الأوزون بل ترققها وتزيد الأشعة فوق البنفسجية الواصلة إلى الأرض.",
        "zh": "氟氯烃分子在平流层被紫外线分解后，释放出的 Cl 原子以链式方式破坏 O3 分子。所以氟氯烃不会修复臭氧层，而是使其变薄，增加到达地面的紫外线。",
        "ku": "Dema ku molekulên CFC di stratosferê de bi tîrêjên UV tên perçekirin, atomên Cl yên azad molekulên O3 bi rêzê xera dikin. Ango CFC tebeqeya ozonê sererast nake, wê tenik dike û UV ya digihîje erdê zêde dike."
      }
    },
    {
      "id": "u05-f07",
      "fact": {
        "tr": "Ağır metaller (kurşun Pb, cıva Hg, kadmiyum Cd) biyolojik birikimle besin zincirinde zehir etkisi yapar.",
        "en": "Heavy metals (lead Pb, mercury Hg, cadmium Cd) have a toxic effect on the food chain through bioaccumulation.",
        "de": "Schwermetalle (Blei Pb, Quecksilber Hg, Cadmium Cd) wirken durch Bioakkumulation toxisch auf die Nahrungskette.",
        "fr": "Les métaux lourds (plomb Pb, mercure Hg, cadmium Cd) ont un effet toxique sur la chaîne alimentaire par bioaccumulation.",
        "ru": "Тяжёлые металлы (свинец Pb, ртуть Hg, кадмий Cd) накапливаются в организмах (биоаккумуляция) и оказывают токсическое действие по всей пищевой цепи.",
        "ar": "المعادن الثقيلة (الرصاص Pb، الزئبق Hg، الكادميوم Cd) لها تأثير سام على السلسلة الغذائية من خلال التراكم الحيوي.",
        "zh": "重金属(铅 Pb、汞 Hg、镉 Cd)通过生物富集在食物链中产生毒害。",
        "ku": "Metalên giran (serpîb Pb, merkur Hg, kadmium Cd) bi biyolojîkî bandorek jehrîn li ser zincîra xwarinê dikin."
      },
      "trap": {
        "tr": "Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.",
        "en": "Mercury is a useful mineral that is easily broken down in the human body.",
        "de": "Quecksilber ist ein nützliches Mineral, das im menschlichen Körper leicht abgebaut wird.",
        "fr": "Le mercure est un minéral utile qui se décompose facilement dans le corps humain.",
        "ru": "Ртуть — полезный минерал, который легко разрушается в организме человека.",
        "ar": "الزئبق معدن مفيد يتحلل بسهولة في جسم الإنسان.",
        "zh": "汞是一种在人体内容易分解的有益矿物质。",
        "ku": "Mercury mîneralek kêrhatî ye ku di laşê mirovan de bi hêsanî tê perçe kirin."
      },
      "whyTrapIsFalse": {
        "tr": "Cıva bir elementtir; vücutta parçalanamaz ve kolayca atılamaz. Dokularda birikerek özellikle sinir sistemine zarar veren zehirli bir ağır metaldir, yararlı bir mineral değildir.",
        "en": "Mercury is an element; it cannot be broken down in the body and is not easily excreted. It is a toxic heavy metal that accumulates in tissues and damages especially the nervous system, not a useful mineral.",
        "de": "Quecksilber ist ein Element; es kann im Körper nicht abgebaut und nur schwer ausgeschieden werden. Es ist ein giftiges Schwermetall, das sich im Gewebe anreichert und vor allem das Nervensystem schädigt, kein nützliches Mineral.",
        "fr": "Le mercure est un élément : il ne peut pas être décomposé dans l'organisme et s'élimine difficilement. C'est un métal lourd toxique qui s'accumule dans les tissus et atteint surtout le système nerveux, pas un minéral utile.",
        "ru": "Ртуть — химический элемент; в организме она не разлагается и плохо выводится. Это токсичный тяжёлый металл, который накапливается в тканях и поражает прежде всего нервную систему, а не полезный минерал.",
        "ar": "الزئبق عنصر؛ لا يمكن تفكيكه في الجسم ولا يُطرح بسهولة. وهو فلز ثقيل سام يتراكم في الأنسجة ويضر بالجهاز العصبي خاصة، وليس معدنًا مفيدًا.",
        "zh": "汞是一种元素，在体内不能被分解，也不易排出。它是一种在组织中积累、尤其损害神经系统的有毒重金属，而不是有益的矿物质。",
        "ku": "Cîwe hêmanek e; di laş de nayê perçekirin û bi hêsanî dernakeve. Ew metaleke giran a jehrî ye ku di şaneyan de kom dibe û bi taybetî zirarê dide pergala demaran, ne mîneraleke kêrhatî ye."
      }
    },
    {
      "id": "u05-f08",
      "fact": {
        "tr": "Sert sular su ısıtıcıları, çamaşır makineleri ve borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.",
        "en": "Hard water creates a limestone (CaCO3) layer in water heaters, washing machines and pipes, causing energy loss.",
        "de": "Hartes Wasser bildet in Warmwasserbereitern, Waschmaschinen und Rohren eine Kalkschicht (CaCO3), die zu Energieverlusten führt.",
        "fr": "L'eau dure crée une couche de calcaire (CaCO3) dans les chauffe-eau, les machines à laver et les canalisations, entraînant une perte d'énergie.",
        "ru": "Жёсткая вода образует слой накипи (CaCO3) в водонагревателях, стиральных машинах и трубах, что приводит к потерям энергии.",
        "ar": "يشكل الماء العسر طبقة من الحجر الجيري (CaCO3) في سخانات المياه والغسالات والأنابيب، مما يتسبب في فقدان الطاقة.",
        "zh": "硬水会在热水器、洗衣机和管道中形成水垢(CaCO3)层，造成能量损失。",
        "ku": "Ava hişk di nav germkerên avê, makîneyên şuştinê û boriyan de qatek kevirê kilsin (CaCO3) çêdike û dibe sedema windakirina enerjiyê."
      },
      "trap": {
        "tr": "Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.",
        "en": "Hard water does not create scale in the pipes, on the contrary, it protects the pipes against corrosion.",
        "de": "Hartes Wasser bildet keinen Kalk in den Rohren, sondern schützt die Rohre im Gegenteil vor Korrosion.",
        "fr": "L’eau dure ne crée pas de tartre dans les canalisations, au contraire, elle protège les canalisations contre la corrosion.",
        "ru": "Жёсткая вода не образует накипи в трубах, а, наоборот, защищает их от коррозии.",
        "ar": "الماء العسر لا يخلق ترسبات في الأنابيب، بل على العكس، فهو يحمي الأنابيب من التآكل.",
        "zh": "硬水不会在管道中产生水垢，相反，它可以保护管道免受腐蚀。",
        "ku": "Ava hişk di lûleyan de pîvanê çênake, berovajî boriyan ji korozyonê diparêze."
      },
      "whyTrapIsFalse": {
        "tr": "Isınan sert sudaki Ca(HCO3)2 bozunarak CaCO3 çöktürür. Bu kireç taşı boru ve rezistanslarda birikir; ısı iletimini azaltır, enerji kaybına ve tıkanmalara yol açar, boruları korumaz.",
        "en": "When hard water is heated, Ca(HCO3)2 decomposes and CaCO3 precipitates. This limescale builds up in pipes and heating elements, reduces heat transfer and causes energy loss and blockages; it does not protect the pipes.",
        "de": "Beim Erhitzen von hartem Wasser zersetzt sich Ca(HCO3)2 und CaCO3 fällt aus. Dieser Kalkstein lagert sich in Rohren und Heizstäben ab, verschlechtert die Wärmeübertragung und führt zu Energieverlust und Verstopfungen; er schützt die Rohre nicht.",
        "fr": "Quand l'eau dure est chauffée, Ca(HCO3)2 se décompose et CaCO3 précipite. Ce tartre se dépose dans les tuyaux et les résistances, réduit le transfert de chaleur et provoque pertes d'énergie et obstructions ; il ne protège pas les tuyaux.",
        "ru": "При нагревании жёсткой воды Ca(HCO3)2 разлагается и выпадает CaCO3. Эта накипь оседает в трубах и на нагревательных элементах, ухудшает теплопередачу, вызывает потери энергии и засоры; трубы она не защищает.",
        "ar": "عند تسخين الماء العسر يتفكك Ca(HCO3)2 ويترسب CaCO3. تتراكم هذه الترسبات الكلسية في الأنابيب وعناصر التسخين فتقلل انتقال الحرارة وتسبب هدر الطاقة والانسداد؛ ولا تحمي الأنابيب.",
        "zh": "硬水受热时 Ca(HCO3)2 分解，析出 CaCO3。这种水垢沉积在管道和加热元件上，降低传热，造成能量损失和堵塞，并不能保护管道。",
        "ku": "Dema ava hişk germ dibe, Ca(HCO3)2 hildiweşe û CaCO3 dinişe. Ev kevirê kilsê di boriyan û rezîstansan de kom dibe, veguhestina germê kêm dike û dibe sedema windabûna enerjiyê û girtina boriyan; boriyan naparêze."
      }
    },
    {
      "id": "u05-f09",
      "fact": {
        "tr": "Koagülasyon (pıhtılaştırma) ve flokülasyon (yumaklaştırma) su arıtımında askıdaki katı tanecikleri çöktürmek için uygulanır.",
        "en": "Coagulation and flocculation are applied in water treatment to settle suspended solid particles.",
        "de": "Koagulation und Flockung werden in der Wasseraufbereitung angewendet, um suspendierte Feststoffteilchen abzusetzen.",
        "fr": "La coagulation et la floculation sont appliquées dans le traitement de l'eau pour faire décanter les particules solides en suspension.",
        "ru": "Коагуляцию и флокуляцию (хлопьеобразование) применяют при очистке воды, чтобы осадить взвешенные твёрдые частицы.",
        "ar": "يُطبَّق التخثير والتلبيد في معالجة المياه لترسيب الجسيمات الصلبة العالقة.",
        "zh": "在水处理中采用混凝和絮凝使悬浮的固体颗粒沉降。",
        "ku": "Koagulasyon û flokulasyon di paqijkirina avê de ji bo niştandina perçeyên hişk ên daliqandî tên bikaranîn."
      },
      "trap": {
        "tr": "Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.",
        "en": "Coagulation is the process of evaporating the lime in the water by boiling it.",
        "de": "Bei der Koagulation wird der Kalk im Wasser durch Kochen verdampft.",
        "fr": "La coagulation est le processus d'évaporation du calcaire présent dans l'eau en la faisant bouillir.",
        "ru": "Коагуляция — это выпаривание извести из воды при кипячении.",
        "ar": "التخثر هو عملية تبخير الجير الموجود في الماء عن طريق غليه.",
        "zh": "混凝是把水中的水垢煮沸、使其蒸发的过程。",
        "ku": "Coagulation pêvajoya helandina lîmê di nav avê de bi kelandina wê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Koagülasyonda suya Al2(SO4)3 gibi pıhtılaştırıcılar eklenir ve askıdaki ince tanecikler topaklanıp çöktürülür. Bu işlemde ısıtma ya da buharlaştırma yoktur; kireç de buharlaşan bir madde değildir.",
        "en": "In coagulation, coagulants such as Al2(SO4)3 are added and the fine suspended particles clump together and settle. No heating or evaporation is involved, and limescale is not something that evaporates.",
        "de": "Bei der Koagulation werden Flockungsmittel wie Al2(SO4)3 zugesetzt, sodass feine Schwebteilchen zusammenballen und sich absetzen. Dabei wird weder erhitzt noch verdampft, und Kalk ist kein Stoff, der verdampft.",
        "fr": "Lors de la coagulation, on ajoute des coagulants comme Al2(SO4)3 : les fines particules en suspension s'agglomèrent et décantent. Il n'y a ni chauffage ni évaporation, et le calcaire n'est pas une substance qui s'évapore.",
        "ru": "При коагуляции в воду добавляют коагулянты, например Al2(SO4)3, и мелкие взвешенные частицы слипаются и оседают. Нагревания и испарения здесь нет, а накипь вообще не испаряется.",
        "ar": "في التخثير تُضاف مواد مخثرة مثل Al2(SO4)3 فتتكتل الجسيمات الدقيقة العالقة وتترسب. لا يوجد في هذه العملية تسخين أو تبخير، والكلس ليس مادة تتبخر.",
        "zh": "混凝时向水中加入 Al2(SO4)3 等混凝剂，使细小的悬浮颗粒凝聚并沉降。这一过程没有加热或蒸发，水垢也不是会蒸发的物质。",
        "ku": "Di koagulasyonê de madeyên mayînker ên wek Al2(SO4)3 li avê tên zêdekirin û perçeyên hûr ên daliqandî kom dibin û dinişin. Di vê pêvajoyê de germkirin an buharkirin tune ye; kils jî madeyek ku buhar dibe nîne."
      }
    },
    {
      "id": "u05-f10",
      "fact": {
        "tr": "Klorlama, içme sularındaki patojen mikroorganizmaları yok etmek amacıyla uygulanan dezenfeksiyon işlemidir.",
        "en": "Chlorination is a disinfection process applied to destroy pathogenic microorganisms in drinking water.",
        "de": "Chlorierung ist ein Desinfektionsverfahren zur Abtötung pathogener Mikroorganismen im Trinkwasser.",
        "fr": "La chloration est un procédé de désinfection appliqué pour détruire les micro-organismes pathogènes présents dans l'eau potable.",
        "ru": "Хлорирование — дезинфекция питьевой воды, уничтожающая болезнетворные (патогенные) микроорганизмы.",
        "ar": "الكلورة هي عملية تطهير تطبق لتدمير الكائنات الحية الدقيقة المسببة للأمراض في مياه الشرب.",
        "zh": "加氯消毒是用来杀灭饮用水中病原微生物的消毒方法。",
        "ku": "Klorkirin pêvajoyek dezenfektekirinê ye ku ji bo tunekirina mîkrojenîzmayên pathogenîk ên di ava vexwarinê de tê bikar anîn."
      },
      "trap": {
        "tr": "Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.",
        "en": "Chlorination is done to precipitate lead and mercury in water.",
        "de": "Durch Chlorierung werden Blei und Quecksilber im Wasser ausgefällt.",
        "fr": "La chloration vise à précipiter le plomb et le mercure dans l'eau.",
        "ru": "Хлорирование проводят, чтобы осадить содержащиеся в воде свинец и ртуть.",
        "ar": "تتم عملية الكلورة لترسيب الرصاص والزئبق في الماء.",
        "zh": "加氯消毒是为了使水中的铅和汞沉淀。",
        "ku": "Klorkirin ji bo niştandina sirb û merkurê di avê de tê kirin."
      },
      "whyTrapIsFalse": {
        "tr": "Klor, mikroorganizmaları öldüren bir dezenfektandır; ağır metal iyonlarını çöktürmez. Kurşun ve cıva gibi ağır metaller çöktürme, iyon değiştirme veya ters ozmoz gibi yöntemlerle giderilir.",
        "en": "Chlorine is a disinfectant that kills microorganisms; it does not precipitate heavy-metal ions. Heavy metals such as lead and mercury are removed by methods such as precipitation, ion exchange or reverse osmosis.",
        "de": "Chlor ist ein Desinfektionsmittel, das Mikroorganismen abtötet; Schwermetallionen fällt es nicht aus. Schwermetalle wie Blei und Quecksilber werden durch Fällung, Ionenaustausch oder Umkehrosmose entfernt.",
        "fr": "Le chlore est un désinfectant qui tue les micro-organismes ; il ne précipite pas les ions des métaux lourds. Les métaux lourds comme le plomb et le mercure s'éliminent par précipitation, échange d'ions ou osmose inverse.",
        "ru": "Хлор — дезинфицирующее вещество, убивающее микроорганизмы; ионы тяжёлых металлов он не осаждает. Свинец, ртуть и другие тяжёлые металлы удаляют осаждением, ионным обменом или обратным осмосом.",
        "ar": "الكلور مطهّر يقتل الكائنات الدقيقة، ولا يرسّب أيونات الفلزات الثقيلة. تُزال الفلزات الثقيلة كالرصاص والزئبق بطرق مثل الترسيب أو التبادل الأيوني أو التناضح العكسي.",
        "zh": "氯是杀灭微生物的消毒剂，不能使重金属离子沉淀。铅、汞等重金属要用沉淀、离子交换或反渗透等方法去除。",
        "ku": "Klor dezenfektanek e ku mîkroorganîzmayan dikuje; îyonên metalên giran naniştîne. Metalên giran ên wek serb û cîwe bi rêbazên wek niştandin, guherandina îyonan an osmoza berevajî tên rakirin."
      }
    },
    {
      "id": "u05-f11",
      "fact": {
        "tr": "Ters ozmoz (reverse osmosis), yarı geçirgen zardan yüksek basınç uygulayarak tuzlu sudan tatlı su elde etme yöntemidir.",
        "en": "Reverse osmosis is a method of obtaining fresh water from salt water by applying high pressure through a semi-permeable membrane.",
        "de": "Umkehrosmose ist eine Methode zur Gewinnung von Frischwasser aus Salzwasser durch Anwendung von hohem Druck durch eine semipermeable Membran.",
        "fr": "L'osmose inverse est une méthode permettant d'obtenir de l'eau douce à partir d'eau salée en appliquant une haute pression à travers une membrane semi-perméable.",
        "ru": "Обратный осмос — способ получения пресной воды из солёной: её под высоким давлением продавливают через полупроницаемую мембрану.",
        "ar": "التناضح العكسي هو وسيلة للحصول على المياه العذبة من المياه المالحة عن طريق الضغط العالي من خلال غشاء شبه منفذ.",
        "zh": "反渗透是在半透膜的盐水一侧施加高压，从盐水中获得淡水的方法。",
        "ku": "osmoza berevajî rêbazek e ku ji ava şor ava şirîn tê bidestxistin bi pêkanîna tansiyona bilind di nav membranek nîv-permeable de."
      },
      "trap": {
        "tr": "Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.",
        "en": "No energy or pressure is required in the reverse osmosis process.",
        "de": "Für den Umkehrosmoseprozess ist weder Energie noch Druck erforderlich.",
        "fr": "Aucune énergie ni pression n’est requise dans le processus d’osmose inverse.",
        "ru": "Для обратного осмоса не требуются ни энергия, ни давление.",
        "ar": "لا توجد حاجة إلى طاقة أو ضغط في عملية التناضح العكسي.",
        "zh": "反渗透过程既不需要能量，也不需要加压。",
        "ku": "Di pêvajoya osmoza berevajî de tu enerjî an zext hewce nake."
      },
      "whyTrapIsFalse": {
        "tr": "Su kendiliğinden seyreltik taraftan derişik tarafa geçer (osmoz). Bu akışı tersine çevirmek için tuzlu su tarafına osmotik basınçtan büyük bir basınç uygulamak, bunun için de pompalarla enerji harcamak gerekir.",
        "en": "Water flows spontaneously from the dilute side to the concentrated side (osmosis). To reverse this flow, a pressure greater than the osmotic pressure must be applied to the salt-water side, which requires pumps and energy.",
        "de": "Wasser fließt von selbst von der verdünnten zur konzentrierten Seite (Osmose). Um diesen Fluss umzukehren, muss auf der Salzwasserseite ein Druck größer als der osmotische Druck angelegt werden, wofür Pumpen und Energie nötig sind.",
        "fr": "L'eau passe spontanément du côté dilué vers le côté concentré (osmose). Pour inverser ce flux, il faut appliquer côté eau salée une pression supérieure à la pression osmotique, ce qui demande des pompes et de l'énergie.",
        "ru": "Вода самопроизвольно переходит из разбавленного раствора в концентрированный (осмос). Чтобы обратить этот поток, на солёную воду нужно подать давление больше осмотического, а для этого нужны насосы и затраты энергии.",
        "ar": "ينتقل الماء تلقائيًا من الجانب المخفف إلى الجانب المركز (التناضح). ولعكس هذا الاتجاه يجب تطبيق ضغط أكبر من الضغط الأسموزي على جانب الماء المالح، وهذا يتطلب مضخات وطاقة.",
        "zh": "水会自发地从稀溶液一侧流向浓溶液一侧（渗透）。要使这一流动反向，必须在盐水一侧施加大于渗透压的压强，这需要用水泵消耗能量。",
        "ku": "Av bi xwe ji aliyê sist ber bi aliyê tîr ve diçe (osmoz). Ji bo berevajîkirina vê herikînê divê li aliyê ava şor zextek ji zexta osmotîk mezintir were sepandin; ji bo vê jî pompe û enerjî pêwîst in."
      }
    },
    {
      "id": "u05-f12",
      "fact": {
        "tr": "Fosil yakıtların kontrolsüz yakılması küresel karbon döngüsünü bozarak atmosferde CO2 birikimine yol açar.",
        "en": "Uncontrolled burning of fossil fuels disrupts the global carbon cycle, leading to CO2 accumulation in the atmosphere.",
        "de": "Die unkontrollierte Verbrennung fossiler Brennstoffe stört den globalen Kohlenstoffkreislauf und führt zur CO2-Anreicherung in der Atmosphäre.",
        "fr": "La combustion incontrôlée de combustibles fossiles perturbe le cycle mondial du carbone, entraînant une accumulation de CO2 dans l’atmosphère.",
        "ru": "Бесконтрольное сжигание ископаемого топлива нарушает глобальный круговорот углерода и приводит к накоплению CO2 в атмосфере.",
        "ar": "يؤدي حرق الوقود الأحفوري بشكل غير منضبط إلى تعطيل دورة الكربون العالمية، مما يؤدي إلى تراكم ثاني أكسيد الكربون في الغلاف الجوي.",
        "zh": "无节制地燃烧化石燃料会破坏全球碳循环，导致 CO2 在大气中积累。",
        "ku": "Şewitandina bêkontrol a sotemeniyên fosîl çerxa karbonê ya gerdûnî têk dibe û dibe sedema kombûna CO2 li atmosferê."
      },
      "trap": {
        "tr": "Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.",
        "en": "When fossil fuels are burned, they release only pure water vapor into the atmosphere.",
        "de": "Bei der Verbrennung fossiler Brennstoffe wird lediglich reiner Wasserdampf in die Atmosphäre abgegeben.",
        "fr": "Lorsque les combustibles fossiles sont brûlés, ils ne rejettent que de la vapeur d’eau pure dans l’atmosphère.",
        "ru": "При сгорании ископаемого топлива в атмосферу выделяется только чистый водяной пар.",
        "ar": "عندما يتم حرق الوقود الأحفوري، فإنه يطلق فقط بخار الماء النقي في الغلاف الجوي.",
        "zh": "化石燃料燃烧时只向大气释放纯净的水蒸气。",
        "ku": "Dema sotemeniyên fosîl dişewitînin, tenê buhara ava paqij berdidin atmosferê."
      },
      "whyTrapIsFalse": {
        "tr": "Fosil yakıtlar karbon içerdiği için yanmaları CO2 (eksik yanmada CO) oluşturur. İçerdikleri kükürt ve havadaki azot nedeniyle SO2 ve azot oksitleri de açığa çıkar; ürün yalnızca su buharı değildir.",
        "en": "Fossil fuels contain carbon, so burning them produces CO2 (CO in incomplete combustion). Because of the sulfur they contain and the nitrogen in air, SO2 and nitrogen oxides are also released; the product is not just water vapour.",
        "de": "Fossile Brennstoffe enthalten Kohlenstoff, ihre Verbrennung liefert daher CO2 (bei unvollständiger Verbrennung CO). Wegen ihres Schwefelgehalts und des Luftstickstoffs entstehen außerdem SO2 und Stickoxide; das Produkt ist nicht nur Wasserdampf.",
        "fr": "Les combustibles fossiles contiennent du carbone : leur combustion produit du CO2 (du CO si elle est incomplète). À cause du soufre qu'ils contiennent et de l'azote de l'air, il se forme aussi du SO2 et des oxydes d'azote ; le produit n'est pas que de la vapeur d'eau.",
        "ru": "Ископаемое топливо содержит углерод, поэтому при его сгорании образуется CO2 (при неполном сгорании — CO). Из-за содержащейся в нём серы и азота воздуха выделяются также SO2 и оксиды азота; продукт — не только водяной пар.",
        "ar": "تحتوي أنواع الوقود الأحفوري على الكربون، لذا ينتج عن احتراقها CO2 (وCO في الاحتراق غير الكامل). وبسبب الكبريت الذي تحتويه ونيتروجين الهواء ينطلق أيضًا SO2 وأكاسيد النيتروجين؛ فالناتج ليس بخار ماء فقط.",
        "zh": "化石燃料含碳，燃烧时生成 CO2(不完全燃烧时生成 CO)。由于其中含硫以及空气中含氮，还会放出 SO2 和氮氧化物；产物并不只是水蒸气。",
        "ku": "Sotemeniyên fosîl karbon dihewînin, ji ber vê yekê şewitandina wan CO2 (di şewitandina netemam de CO) çêdike. Ji ber kewkurta wan û nîtrojena hewayê SO2 û oksîtên nîtrojenê jî derdikevin; berhem tenê buhara avê nîne."
      }
    },
    {
      "id": "u05-f13",
      "fact": {
        "tr": "Kirlenmemiş yağmur suyu, çözünmüş CO2 nedeniyle hafif asidiktir (pH yaklaşık 5,6); pH değeri 5,6'nın altında olan yağışlar asit yağmuru olarak kabul edilir.",
        "en": "Unpolluted rainwater is slightly acidic because of dissolved CO2 (pH about 5.6); precipitation with a pH below 5.6 is considered acid rain.",
        "de": "Unbelastetes Regenwasser ist wegen des gelösten CO2 schwach sauer (pH etwa 5,6); Niederschlag mit einem pH-Wert unter 5,6 gilt als saurer Regen.",
        "fr": "L'eau de pluie non polluée est légèrement acide à cause du CO2 dissous (pH d'environ 5,6) ; les précipitations dont le pH est inférieur à 5,6 sont considérées comme des pluies acides.",
        "ru": "Незагрязнённая дождевая вода из-за растворённого CO2 слабокислая (pH около 5,6); осадки с pH ниже 5,6 считаются кислотными дождями.",
        "ar": "ماء المطر غير الملوث حمضي قليلًا بسبب CO2 الذائب (pH نحو 5.6)؛ ويُعد الهطول الذي يقل pH له عن 5.6 مطرًا حمضيًا.",
        "zh": "未受污染的雨水因溶有 CO2 而呈弱酸性(pH 约为 5.6)；pH 低于 5.6 的降水称为酸雨。",
        "ku": "Ava baranê ya neqirêjbûyî ji ber CO2 ya heliyayî hinekî asîdî ye (pH nêzîkî 5,6); barîna ku pH-ya wê di bin 5,6 de ye wekî barana asîdî tê hesibandin."
      },
      "trap": {
        "tr": "Doğal saf yağmur suyunun pH değeri tam 7,0'dır.",
        "en": "The pH value of natural pure rainwater is exactly 7.0.",
        "de": "Der pH-Wert von natürlichem, reinem Regenwasser beträgt genau 7,0.",
        "fr": "Le pH de l’eau de pluie pure et naturelle est exactement de 7,0.",
        "ru": "pH природной чистой дождевой воды равен ровно 7,0.",
        "ar": "قيمة الرقم الهيدروجيني لمياه الأمطار الطبيعية النقية هي بالضبط 7.0.",
        "zh": "天然纯净雨水的 pH 恰好为 7.0。",
        "ku": "Nirxa pH ya ava baranê ya safî ya xwezayî tam 7.0 e."
      },
      "whyTrapIsFalse": {
        "tr": "Yağmur suyu havadaki CO2'yi çözerek zayıf karbonik asit oluşturur. Bu nedenle kirlenmemiş yağmurun pH değeri 7 değil, yaklaşık 5,6'dır.",
        "en": "Rainwater dissolves CO2 from the air and forms weak carbonic acid. Therefore the pH of unpolluted rain is about 5.6, not 7.",
        "de": "Regenwasser löst CO2 aus der Luft und bildet schwache Kohlensäure. Deshalb liegt der pH-Wert von unbelastetem Regen bei etwa 5,6 und nicht bei 7.",
        "fr": "L'eau de pluie dissout le CO2 de l'air et forme un acide carbonique faible. C'est pourquoi le pH d'une pluie non polluée est d'environ 5,6 et non de 7.",
        "ru": "Дождевая вода растворяет CO2 из воздуха и образует слабую угольную кислоту. Поэтому pH незагрязнённого дождя около 5,6, а не 7.",
        "ar": "يذيب ماء المطر غاز CO2 الموجود في الهواء مكوّنًا حمض الكربونيك الضعيف. لذلك تكون قيمة pH للمطر غير الملوث نحو 5.6 وليست 7.",
        "zh": "雨水溶解空气中的 CO2，形成弱酸碳酸。因此未受污染的雨水 pH 约为 5.6，而不是 7。",
        "ku": "Ava baranê CO2 ya hewayê dihelîne û asîda karbonîk a qels çêdike. Ji ber vê yekê pH ya barana ne qirêj nêzîkî 5,6 ye, ne 7."
      }
    },
    {
      "id": "u05-f14",
      "fact": {
        "tr": "Toprak ve su kirliliğine neden olan piller kesinlikle çöpe atılmamalı, atık pil kutularında toplanmalıdır.",
        "en": "Batteries that cause soil and water pollution should never be thrown away and should be collected in waste battery boxes.",
        "de": "Batterien, die Boden- und Wasserverschmutzung verursachen, sollten niemals weggeworfen und in Altbatterieboxen gesammelt werden.",
        "fr": "Les batteries qui polluent le sol et l’eau ne doivent jamais être jetées et doivent être collectées dans des conteneurs pour batteries usagées.",
        "ru": "Батарейки загрязняют почву и воду, поэтому их ни в коем случае нельзя выбрасывать в мусор — их сдают в специальные контейнеры для сбора.",
        "ar": "لا ينبغي أبدًا التخلص من البطاريات التي تسبب تلوث التربة والمياه، ويجب جمعها في صناديق نفايات البطاريات.",
        "zh": "电池会造成土壤和水污染，绝不能扔进垃圾桶，应投入废电池回收箱。",
        "ku": "Pîlên ku dibin sedema qirêjiya ax û avê divê tu carî neyên avêtin û di qutiyên pîlê yên çopê de werin berhev kirin."
      },
      "trap": {
        "tr": "Kullanılmış piller yakılarak güvenle yok edilebilir.",
        "en": "Used batteries can be safely disposed of by burning.",
        "de": "Verbrauchte Batterien können durch Verbrennen sicher entsorgt werden.",
        "fr": "Les piles usagées peuvent être éliminées en toute sécurité en les brûlant.",
        "ru": "Использованные батарейки можно безопасно уничтожить сжиганием.",
        "ar": "يمكن التخلص من البطاريات المستعملة بشكل آمن عن طريق حرقها.",
        "zh": "废旧电池可以通过焚烧的方式安全处置。",
        "ku": "Pîlên bikar anîn dikarin bi şewitandinê bi ewlehî werin avêtin."
      },
      "whyTrapIsFalse": {
        "tr": "Piller cıva, kadmiyum ve kurşun gibi ağır metaller içerir. Yakıldıklarında bu metaller yok olmaz; zehirli buhar ve kül olarak havaya ve toprağa yayılır. Doğru yol ayrı toplayıp geri kazanmaktır.",
        "en": "Batteries contain heavy metals such as mercury, cadmium and lead. Burning does not destroy these metals; they spread into the air and soil as toxic fumes and ash. The right way is separate collection and recycling.",
        "de": "Batterien enthalten Schwermetalle wie Quecksilber, Cadmium und Blei. Beim Verbrennen verschwinden diese Metalle nicht, sondern gelangen als giftige Dämpfe und Asche in Luft und Boden. Richtig ist getrenntes Sammeln und Recycling.",
        "fr": "Les piles contiennent des métaux lourds comme le mercure, le cadmium et le plomb. L'incinération ne les détruit pas : ils se dispersent dans l'air et le sol sous forme de vapeurs et de cendres toxiques. La bonne solution est la collecte séparée et le recyclage.",
        "ru": "Батарейки содержат тяжёлые металлы — ртуть, кадмий, свинец. При сжигании эти металлы не исчезают, а попадают в воздух и почву в виде ядовитых паров и золы. Правильный путь — раздельный сбор и переработка.",
        "ar": "تحتوي البطاريات على فلزات ثقيلة مثل الزئبق والكادميوم والرصاص. الحرق لا يُفني هذه الفلزات بل ينشرها في الهواء والتربة على شكل أبخرة ورماد سام. والطريقة الصحيحة هي الجمع المنفصل وإعادة التدوير.",
        "zh": "电池含有汞、镉、铅等重金属。焚烧并不能消灭这些金属，它们会以有毒烟气和灰烬的形式进入空气和土壤。正确的做法是分类回收和再利用。",
        "ku": "Pîl metalên giran ên wek cîwe, kadmiyûm û serb dihewînin. Bi şewitandinê ev metal ji holê ranabin; wek buhar û xweliya jehrî li hewa û axê belav dibin. Rêya rast berhevkirina cuda û vezîvirandin e."
      }
    },
    {
      "id": "u05-f15",
      "fact": {
        "tr": "Yeşil kimya ilkeleri, atık oluşumunu kaynağında önlemeyi ve yenilenebilir hammadde kullanımını hedefler.",
        "en": "Green chemistry principles aim to prevent waste generation at its source and use renewable raw materials.",
        "de": "Die Grundsätze der Grünen Chemie zielen darauf ab, die Entstehung von Abfällen an der Quelle zu verhindern und nachwachsende Rohstoffe zu verwenden.",
        "fr": "Les principes de la chimie verte visent à prévenir la production de déchets à la source et à utiliser des matières premières renouvelables.",
        "ru": "Принципы зелёной химии нацелены на предотвращение образования отходов в самом источнике и на использование возобновляемого сырья.",
        "ar": "تهدف مبادئ الكيمياء الخضراء إلى منع توليد النفايات من مصدرها واستخدام المواد الخام المتجددة.",
        "zh": "绿色化学的原则是从源头上防止废物产生，并使用可再生原料。",
        "ku": "Prensîbên kîmya kesk armanc dike ku pêşî li hilberîna bermayiyê li çavkaniya xwe bigire û madeyên xav ên nûvekirî bikar bîne."
      },
      "trap": {
        "tr": "Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.",
        "en": "Green chemistry advocates storing nuclear waste on the ocean floor.",
        "de": "Grüne Chemie befürwortet die Lagerung von Atommüll auf dem Meeresboden.",
        "fr": "La chimie verte prône le stockage des déchets nucléaires au fond des océans.",
        "ru": "Зелёная химия предлагает хранить ядерные отходы на дне океана.",
        "ar": "تدعو الكيمياء الخضراء إلى تخزين النفايات النووية في قاع المحيط.",
        "zh": "绿色化学提倡将核废料储存在海底。",
        "ku": "Kîmyaya kesk parêzvaniya hilanîna bermahiyên nukleerî li ser binê okyanûsê dike."
      },
      "whyTrapIsFalse": {
        "tr": "Yeşil kimya, atığı oluştuktan sonra bir yere taşımayı değil, atığın oluşmasını kaynağında önlemeyi amaçlar. Atıkları okyanus tabanına bırakmak çevreyi kirleten bir uygulamadır.",
        "en": "Green chemistry aims to prevent waste from forming at the source, not to move waste somewhere else after it has formed. Dumping waste on the ocean floor is a polluting practice.",
        "de": "Grüne Chemie will die Entstehung von Abfall an der Quelle verhindern und nicht entstandenen Abfall woanders hinbringen. Abfälle auf dem Meeresboden abzulagern ist umweltschädlich.",
        "fr": "La chimie verte vise à empêcher la formation des déchets à la source, et non à les déplacer une fois formés. Déposer des déchets au fond de l'océan est une pratique polluante.",
        "ru": "Зелёная химия стремится не перемещать уже образовавшиеся отходы, а предотвращать их образование в самом источнике. Сброс отходов на дно океана загрязняет окружающую среду.",
        "ar": "تهدف الكيمياء الخضراء إلى منع تكوّن النفايات من مصدرها، لا إلى نقلها إلى مكان آخر بعد تكوّنها. وإلقاء النفايات في قاع المحيط ممارسة ملوِّثة للبيئة.",
        "zh": "绿色化学的目标是从源头上防止废物产生，而不是在废物产生后把它转移到别处。把废物倾倒在海底是污染环境的做法。",
        "ku": "Kîmyaya kesk armanc dike ku çêbûna bermayiyan ji çavkaniyê ve asteng bike, ne ku piştî çêbûnê wan bibe cihekî din. Avêtina bermayiyan li binê okyanûsê kiryarek qirêjker e."
      }
    },
    {
      "id": "u05-f16",
      "fact": {
        "tr": "Yumuşak sular Ca2+ ve Mg2+ iyonlarınca fakir olduğundan sabunu kolay köpürtür ve tesisatta kireç tortusu ya hiç bırakmaz ya da çok az bırakır.",
        "en": "Soft waters are poor in Ca2+ and Mg2+ ions, so they lather soap easily and leave little or no limescale in plumbing.",
        "de": "Weiches Wasser ist arm an Ca2+- und Mg2+-Ionen, schäumt daher leicht mit Seife und hinterlässt in Leitungen kaum oder keinen Kalk.",
        "fr": "Les eaux douces sont pauvres en ions Ca2+ et Mg2+ : elles font facilement mousser le savon et laissent peu ou pas de tartre dans les canalisations.",
        "ru": "Мягкая вода бедна ионами Ca2+ и Mg2+, поэтому мыло в ней легко пенится, а накипи в трубах почти или совсем не образуется.",
        "ar": "المياه اليسرة فقيرة بأيونات Ca2+ وMg2+، لذا تُرغي الصابون بسهولة ولا تترك ترسبات كلسية في التمديدات أو تترك القليل منها فقط.",
        "zh": "软水中 Ca2+ 和 Mg2+ 很少，肥皂容易起泡，管道中几乎不留水垢。",
        "ku": "Avên nerm ji îyonên Ca2+ û Mg2+ feqîr in, ji ber vê yekê sabûnê bi hêsanî kef dikin û di boriyan de kils qet nahêlin an pir hindik dihêlin."
      },
      "trap": {
        "tr": "Yumuşak sular bol miktarda kireç tortusu bırakır.",
        "en": "Soft waters leave plenty of lime deposits.",
        "de": "Weiches Wasser hinterlässt viele Kalkablagerungen.",
        "fr": "Les eaux douces laissent beaucoup de dépôts calcaires.",
        "ru": "Мягкая вода оставляет много накипи.",
        "ar": "تترك المياه الناعمة الكثير من رواسب الجير.",
        "zh": "软水会留下大量水垢。",
        "ku": "Avên nerm gelek depoyên lîmê dihêlin."
      },
      "whyTrapIsFalse": {
        "tr": "Kireç tortusu (CaCO3) Ca2+ iyonlarından oluşur. Yumuşak suda Ca2+ ve Mg2+ çok az olduğundan tortu oluşmaz ya da önemsiz düzeydedir; bol kireç tortusu sert suya özgüdür.",
        "en": "Limescale (CaCO3) forms from Ca2+ ions. Soft water contains very little Ca2+ and Mg2+, so little or no scale forms; heavy scaling is typical of hard water.",
        "de": "Kalkstein (CaCO3) entsteht aus Ca2+-Ionen. Weiches Wasser enthält sehr wenig Ca2+ und Mg2+, daher bildet sich kaum oder kein Kalk; starke Verkalkung ist typisch für hartes Wasser.",
        "fr": "Le tartre (CaCO3) se forme à partir des ions Ca2+. L'eau douce contient très peu de Ca2+ et de Mg2+ : il se forme peu ou pas de tartre ; un entartrage important est typique de l'eau dure.",
        "ru": "Накипь (CaCO3) образуется из ионов Ca2+. В мягкой воде очень мало Ca2+ и Mg2+, поэтому накипи почти нет; обильная накипь характерна для жёсткой воды.",
        "ar": "تتكوّن الترسبات الكلسية (CaCO3) من أيونات Ca2+. ويحتوي الماء اليسر على كميات قليلة جدًا من Ca2+ وMg2+، لذا لا تتكوّن ترسبات أو تكون ضئيلة؛ والترسبات الغزيرة سمة الماء العسر.",
        "zh": "水垢(CaCO3)由 Ca2+ 形成。软水中 Ca2+ 和 Mg2+ 很少，几乎不产生水垢；大量结垢是硬水的特征。",
        "ku": "Kevirê kilsê (CaCO3) ji îyonên Ca2+ çêdibe. Di ava nerm de Ca2+ û Mg2+ pir kêm in, ji ber vê yekê kils çênabe an pir hindik e; kilsa pir taybetiya ava hişk e."
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
        "zh": "暂时硬度",
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
        "tr": "Geçici sertlik bikarbonat tuzlarından kaynaklanır ve kaynatılarak giderilir; kalıcı sertlik sülfat ve klorür tuzlarından kaynaklanır, kaynatmayla giderilemez ve iyon değiştirici reçineyle giderilir.",
        "en": "Temporary hardness comes from hydrogen carbonate salts and is removed by boiling; permanent hardness comes from sulfate and chloride salts, cannot be removed by boiling and is removed with an ion-exchange resin.",
        "de": "Vorübergehende Härte stammt von Hydrogencarbonaten und wird durch Kochen entfernt; dauerhafte Härte stammt von Sulfaten und Chloriden, lässt sich nicht wegkochen und wird mit Ionenaustauscherharz entfernt.",
        "fr": "La dureté temporaire provient des hydrogénocarbonates et s'élimine par ébullition ; la dureté permanente provient des sulfates et chlorures, ne disparaît pas à l'ébullition et s'élimine par une résine échangeuse d'ions.",
        "ru": "Временная жёсткость вызывается гидрокарбонатами и устраняется кипячением; постоянная жёсткость вызывается сульфатами и хлоридами, кипячением не устраняется и удаляется ионообменной смолой.",
        "ar": "ينتج العسر المؤقت عن أملاح البيكربونات ويزول بالغليان؛ أما العسر الدائم فينتج عن أملاح الكبريتات والكلوريدات ولا يزول بالغليان بل يُزال براتنج التبادل الأيوني.",
        "zh": "暂时硬度来自碳酸氢盐，可通过煮沸除去；而永久硬度来自硫酸盐和氯化物，煮沸不能除去，需用离子交换树脂除去。",
        "ku": "Serhişkiya demkî ji xwêyên bîkarbonatê tê û bi kelandinê tê rakirin; serhişkiya daîmî ji xwêyên sulfat û klorîdê tê, bi kelandinê nayê rakirin û bi rezîna guherandina îyonan tê rakirin."
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
        "ru": "Истончение озонового слоя",
        "ar": "استنفاد طبقة الأوزون",
        "zh": "臭氧层变薄",
        "ku": "Tenikbûna Tebeqeya Ozonê"
      },
      "distinction": {
        "tr": "Sera etkisinin CO2 ve CH4 gibi gazların artışıyla güçlenmesi küresel ısınmaya yol açar; ozon tabakasının CFC gazlarıyla incelmesi ise zararlı UV ışınlarının yeryüzüne daha fazla ulaşmasına neden olur.",
        "en": "The greenhouse effect is strengthened by rising levels of gases such as CO2 and CH4, which leads to global warming; thinning of the ozone layer by CFC gases lets more harmful UV radiation reach the Earth's surface.",
        "de": "Der Treibhauseffekt wird durch die Zunahme von Gasen wie CO2 und CH4 verstärkt, was zur globalen Erwärmung führt; die Ausdünnung der Ozonschicht durch CFC-Gase (FCKW) lässt dagegen mehr schädliche UV-Strahlung zur Erdoberfläche gelangen.",
        "fr": "Le renforcement de l'effet de serre par l'augmentation de gaz tels que CO2 et CH4 entraîne le réchauffement climatique, tandis que l'amincissement de la couche d'ozone par les gaz CFC laisse davantage d'UV nocifs atteindre la surface de la Terre.",
        "ru": "Парниковый эффект усиливается при росте содержания CO2, CH4 и других подобных газов и ведёт к глобальному потеплению; истончение озонового слоя под действием ХФУ пропускает к поверхности Земли больше вредного УФ-излучения.",
        "ar": "يؤدي تعزّز الاحتباس الحراري بازدياد غازات مثل CO2 وCH4 إلى الاحترار العالمي، بينما يسمح ترقق طبقة الأوزون بفعل غازات CFC بوصول مزيد من الأشعة فوق البنفسجية الضارة إلى سطح الأرض.",
        "zh": "温室效应因 CO2、CH4 等气体增加而增强，导致全球变暖；而臭氧层变薄是由氟氯烃(CFC)造成的，它使更多有害紫外线到达地面。",
        "ku": "Bandora serayê bi zêdebûna gazên wekî CO2 û CH4 xurt dibe û dibe sedema germbûna gerdûnî; tenikbûna tebeqeya ozonê ya ji ber gazên CFC jî dihêle ku bêtir tîrêjên UV yên zirardar bigihîjin rûyê erdê."
      }
    },
    {
      "id": "u05-c03",
      "conceptA": {
        "tr": "Sert Su",
        "en": "Hard Water",
        "de": "Hartes Wasser",
        "fr": "Eau dure",
        "ru": "Жёсткая вода",
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
        "ku": "Ava nerm"
      },
      "distinction": {
        "tr": "Sert su Ca2+ ve Mg2+ iyonlarını yüksek derişimde içerir ve sabunla çökelek oluşturur; yumuşak su bu iyonlarca fakirdir ve sabunu kolay köpürtür.",
        "en": "Hard water contains high concentrations of Ca2+ and Mg2+ ions and forms a precipitate with soap; soft water is poor in these ions and lathers easily with soap.",
        "de": "Hartes Wasser enthält Ca2+ und Mg2+ in hoher Konzentration und bildet mit Seife einen Niederschlag; weiches hingegen ist arm an diesen Ionen und schäumt mit Seife leicht.",
        "fr": "L'eau dure contient Ca2+ et Mg2+ en forte concentration et forme un précipité avec le savon ; l'eau douce est pauvre en ces ions et mousse facilement avec le savon.",
        "ru": "Жёсткая вода содержит ионы Ca2+ и Mg2+ в высокой концентрации и образует с мылом осадок; мягкая вода бедна этими ионами, и мыло в ней легко пенится.",
        "ar": "يحتوي الماء العسر على Ca2+ وMg2+ بتركيز مرتفع ويكوّن راسبًا مع الصابون؛ أما الماء اليسر فهو فقير بهذه الأيونات ويرغو بسهولة مع الصابون.",
        "zh": "硬水含有较高浓度的 Ca2+ 和 Mg2+，与肥皂生成沉淀；而软水中这些离子含量很低，肥皂容易起泡。",
        "ku": "Ava hişk Ca2+ û Mg2+ bi rêjeyeke bilind dihewîne û bi sabûnê re niştek çêdike; ya nerm ji van îyonan feqîr e û bi sabûnê re bi hêsanî kef dide."
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
        "zh": "加氯消毒",
        "ku": "Klorkirin (Dezenfeksiyon)"
      },
      "distinction": {
        "tr": "Koagülasyon, askıdaki küçük tanecikleri alüminyum sülfat gibi maddelerle topaklaştırıp çöktürür; klorlama ise sudaki hastalık yapıcı mikroorganizmaları öldürür.",
        "en": "Coagulation clumps small suspended particles together with agents such as aluminium sulfate so that they settle; chlorination kills disease-causing microorganisms in the water.",
        "de": "Die Koagulation ballt kleine Schwebeteilchen mit Mitteln wie Aluminiumsulfat zusammen, sodass sie sich absetzen; die Chlorung tötet krankheitserregende Mikroorganismen im Wasser ab.",
        "fr": "La coagulation agglomère les petites particules en suspension à l'aide d'agents comme le sulfate d'aluminium pour qu'elles décantent ; la chloration tue les micro-organismes pathogènes de l'eau.",
        "ru": "Коагуляция укрупняет мелкие взвешенные частицы с помощью веществ вроде сульфата алюминия, и они оседают; хлорирование (дезинфекция) убивает болезнетворные микроорганизмы в воде.",
        "ar": "يجمّع التخثير الجسيمات العالقة الصغيرة بمواد مثل كبريتات الألومنيوم فتترسب؛ أما الكلورة فتقتل الكائنات الدقيقة المسببة للأمراض في الماء.",
        "zh": "混凝是用硫酸铝等试剂使细小悬浮颗粒聚集沉降；而加氯消毒则杀灭水中的致病微生物。",
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
        "ru": "Кислотный оксид (SO3, NO2)",
        "ar": "أكسيد حمضي (SO3، NO2)",
        "zh": "酸性氧化物(SO3、NO2)",
        "ku": "Oksîdê Asîdî (SO3, NO2)"
      },
      "conceptB": {
        "tr": "Nötr Oksit (CO, NO)",
        "en": "Neutral Oxide (CO, NO)",
        "de": "Neutrales Oxid (CO, NO)",
        "fr": "Oxyde neutre (CO, NO)",
        "ru": "Несолеобразующий оксид (CO, NO)",
        "ar": "أكسيد متعادل (CO، NO)",
        "zh": "中性氧化物(CO、NO)",
        "ku": "Oksîdê Bêalî (CO, NO)"
      },
      "distinction": {
        "tr": "Asidik oksitler suyla tepkimeye girerek asit oluşturur ve asit yağmuruna katkı yapar; nötr oksitler (CO, NO) ise suyla tepkimeye girip asit oluşturmaz.",
        "en": "Acidic oxides react with water to form acids and contribute to acid rain; neutral oxides (CO, NO) do not react with water to form acids.",
        "de": "Ein saures Oxid reagiert mit Wasser zu einer Säure und trägt zum sauren Regen bei; neutrale Oxide (CO, NO) bilden mit Wasser keine Säure.",
        "fr": "Un oxyde acide réagit avec l'eau pour former un acide et contribue aux pluies acides ; les oxydes neutres (CO, NO) ne forment pas d'acide avec l'eau.",
        "ru": "Кислотный оксид (SO3, NO2) реагирует с водой с образованием кислоты и способствует кислотным дождям; несолеобразующий оксид (CO, NO) с водой кислоту не образует.",
        "ar": "الأكسيد الحمضي يتفاعل مع الماء مكوّنًا حمضًا ويسهم في المطر الحمضي؛ أما الأكاسيد المتعادلة (CO وNO) فلا تكوّن حمضًا مع الماء.",
        "zh": "酸性氧化物与水反应生成酸，促成酸雨；而中性氧化物(CO、NO)不与水反应生成酸。",
        "ku": "Oksîdê asîdî bi avê re bertek dide û asîd çêdike, beşdarî barana asîdî dibe; oksîdên bêalî (CO, NO) bi avê re asîd çênakin."
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
        "zh": "生物富集",
        "ku": "Biyokombûn"
      },
      "conceptB": {
        "tr": "Doğal Geri Dönüşüm",
        "en": "Natural Recycling",
        "de": "Natürliches Recycling",
        "fr": "Recyclage naturel",
        "ru": "Естественная переработка",
        "ar": "إعادة التدوير الطبيعية",
        "zh": "自然循环",
        "ku": "Vezîvirandina xwezayî"
      },
      "distinction": {
        "tr": "Ağır metaller besin zincirinin üst basamaklarına doğru canlılarda katlanarak birikir ve zehir etkisi yapar; organik atıklar ise mikroorganizmalarca ayrıştırılarak doğaya geri kazandırılır.",
        "en": "Heavy metals build up in organisms at increasing levels towards the top of the food chain and have a toxic effect; organic wastes, by contrast, are broken down by microorganisms and returned to nature.",
        "de": "Schwermetalle reichern sich in Lebewesen zur Spitze der Nahrungskette hin immer stärker an und wirken giftig; organische Abfälle werden dagegen von Mikroorganismen zersetzt und in den Naturkreislauf zurückgeführt.",
        "fr": "Les métaux lourds se concentrent de plus en plus dans les organismes vers le sommet de la chaîne alimentaire et ont un effet toxique ; les déchets organiques, eux, sont décomposés par les micro-organismes et restitués à la nature.",
        "ru": "Биоаккумуляция — накопление тяжёлых металлов в организмах, которое усиливается к вершине пищевой цепи и вызывает отравление; естественная переработка — разложение органических отходов микроорганизмами и их возвращение в природный круговорот.",
        "ar": "تتركز الفلزات الثقيلة في الكائنات الحية بمقادير متزايدة باتجاه قمة السلسلة الغذائية وتُحدث تأثيرًا سامًّا؛ أما النفايات العضوية فتحللها الكائنات الدقيقة وتعيدها إلى الطبيعة.",
        "zh": "生物富集是指重金属沿食物链向上在生物体内逐级积累并产生毒害；而自然循环是指有机废物被微生物分解，重新回到自然界。",
        "ku": "Metalên giran ber bi jora zincîra xwarinê ve di zindiyan de her ku diçe zêdetir kom dibin û bandora jehrî dikin; bermayiyên organîk jî ji aliyê mîkroorganîzmayan ve têne hilweşandin û vedigerin xwezayê."
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
        "ku": "Qirêjiya avê"
      },
      "distinction": {
        "tr": "Toprak kirliliğinin başlıca kaynakları aşırı gübre ve pestisit kullanımı ile katı atıklardır; su kirliliği ise başlıca sanayi ve evsel atık sularının, ağır metallerin ve tarım ilaçlarının sulara karışmasıyla oluşur.",
        "en": "The main sources of soil pollution are excessive use of fertilisers and pesticides and solid waste; water pollution arises mainly when industrial and domestic wastewater, heavy metals and agricultural chemicals enter water bodies.",
        "de": "Bodenverschmutzung entsteht vor allem durch übermäßigen Dünger- und Pestizideinsatz sowie durch feste Abfälle; Wasserverschmutzung entsteht vor allem, wenn Industrie- und Haushaltsabwässer, Schwermetalle und Agrarchemikalien in Gewässer gelangen.",
        "fr": "Les principales sources de pollution des sols sont l'excès d'engrais et de pesticides ainsi que les déchets solides ; la pollution de l'eau provient surtout du rejet d'eaux usées industrielles et domestiques, de métaux lourds et de produits agricoles dans les eaux.",
        "ru": "Загрязнение почвы вызывается главным образом избытком удобрений и пестицидов и твёрдыми отходами; загрязнение воды возникает главным образом при попадании в водоёмы промышленных и бытовых стоков, тяжёлых металлов и агрохимикатов.",
        "ar": "تلوث التربة ينتج أساسًا عن الإفراط في استخدام الأسمدة والمبيدات وعن النفايات الصلبة؛ أما تلوث المياه فينتج أساسًا عن اختلاط مياه الصرف الصناعي والمنزلي والفلزات الثقيلة والمبيدات الزراعية بالمياه.",
        "zh": "土壤污染的主要来源是过量施用的化肥、农药以及固体废物；而水污染主要由工业废水、生活污水、重金属及农药进入水体造成。",
        "ku": "Qirêjiya axê bi giranî ji bikaranîna zêde ya gubre û pestîsîdan û ji bermayiyên hişk çêdibe; qirêjiya avê jî bi giranî ji tevlîbûna avên bermayî yên pîşesazî û malan, metalên giran û dermanên çandiniyê bi avê re çêdibe."
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
        "fr": "L'osmose inverse consiste à appliquer une pression à l'eau salée : les molécules d'eau traversent une membrane semi-perméable et les ions sont retenus ; la distillation consiste à chauffer l'eau pour la vaporiser, puis à condenser la vapeur pour obtenir de l'eau pure.",
        "ru": "Обратный осмос использует давление на солёную воду: молекулы воды проходят через полупроницаемую мембрану, а ионы задерживаются; дистилляция основана на испарении воды при нагревании и конденсации пара, что даёт чистую воду.",
        "ar": "في التناضح العكسي يُطبَّق ضغط على الماء المالح فتعبر جزيئات الماء غشاءً شبه منفذ وتُحتجز الأيونات؛ وفي التقطير يُسخَّن الماء حتى يتبخر ثم يُكثَّف البخار للحصول على ماء نقي.",
        "zh": "反渗透是对盐水加压，使水分子透过半透膜而离子被截留；而蒸馏是加热使水汽化，再将水蒸气冷凝得到纯水。",
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
        "zh": "饮用水的净化步骤",
        "ku": "Qonaxên Paqijkirina Ava Vexwarinê"
      },
      "steps": [
        {
          "tr": "Kaba ızgaradan geçirme",
          "en": "Coarse screening",
          "de": "Grobe Siebung",
          "fr": "Criblage grossier",
          "ru": "Процеживание через грубые решётки",
          "ar": "الفحص الخشن",
          "zh": "通过粗格栅",
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
          "ru": "Фильтрование через песчаные фильтры",
          "ar": "التصفية من خلال المرشحات الرملية",
          "zh": "砂滤池过滤",
          "ku": "Parzûnkirina bi parzûnên qûmê"
        },
        {
          "tr": "Klorla dezenfeksiyon",
          "en": "Disinfection with chlorine",
          "de": "Desinfektion mit Chlor",
          "fr": "Désinfection au chlore",
          "ru": "Дезинфекция хлором",
          "ar": "التطهير بالكلور",
          "zh": "加氯消毒",
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
        "zh": "酸雨的形成过程",
        "ku": "Zincîra Çêbûna Barana Asîdî"
      },
      "steps": [
        {
          "tr": "Fosil yakıtların yanmasıyla SO2 ve azot oksitleri (NO, NO2) salınır",
          "en": "Burning fossil fuels releases SO2 and nitrogen oxides (NO, NO2)",
          "de": "Beim Verbrennen fossiler Brennstoffe werden SO2 und Stickoxide (NO, NO2) freigesetzt",
          "fr": "La combustion des combustibles fossiles libère du SO2 et des oxydes d'azote (NO, NO2)",
          "ru": "При сжигании ископаемого топлива выделяются SO2 и оксиды азота (NO, NO2)",
          "ar": "يؤدي احتراق الوقود الأحفوري إلى انطلاق SO2 وأكاسيد النيتروجين (NO وNO2)",
          "zh": "化石燃料燃烧放出 SO2 和氮氧化物(NO、NO2)",
          "ku": "Bi şewitandina sotemeniyên fosîl SO2 û oksîtên nîtrojenê (NO, NO2) derdikevin"
        },
        {
          "tr": "Gazlar atmosferdeki su buharıyla karşılaşır",
          "en": "Gases encounter water vapor in the atmosphere",
          "de": "Gase treffen in der Atmosphäre auf Wasserdampf",
          "fr": "Les gaz rencontrent de la vapeur d'eau dans l'atmosphère",
          "ru": "Газы взаимодействуют с водяным паром атмосферы",
          "ar": "تواجه الغازات بخار الماء في الغلاف الجوي",
          "zh": "气体在大气中遇到水蒸气",
          "ku": "Gaz di atmosferê de bi buhra avê re rû bi rû dimînin"
        },
        {
          "tr": "Sülfürik asit ve nitrik asit oluşur",
          "en": "Sulfuric acid and nitric acid are formed",
          "de": "Es entstehen Schwefelsäure und Salpetersäure",
          "fr": "De l'acide sulfurique et de l'acide nitrique se forment",
          "ru": "Образуются серная и азотная кислоты",
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
        "ar": "تأثير الاحتباس الحراري والاحترار العالمي",
        "zh": "温室效应与全球变暖",
        "ku": "Bandora Serayê û Germbûna Gerdûnî"
      },
      "steps": [
        {
          "tr": "Güneşten gelen kısa dalgalı ışınlar yeryüzüne ulaşır",
          "en": "Short wave rays from the sun reach the earth",
          "de": "Kurzwellige Strahlen der Sonne erreichen die Erde",
          "fr": "Les rayons à ondes courtes du soleil atteignent la terre",
          "ru": "Коротковолновое излучение Солнца достигает земной поверхности",
          "ar": "تصل الأشعة القصيرة الموجة القادمة من الشمس إلى الأرض",
          "zh": "太阳发出的短波辐射到达地面",
          "ku": "Tîrêjên pêlên kurt ên rojê digihêjin erdê"
        },
        {
          "tr": "Yeryüzü ısınarak uzun dalgalı kızılötesi ışın yayar",
          "en": "The earth heats up and emits long-wave infrared radiation",
          "de": "Die Erde erwärmt sich und sendet langwellige Infrarotstrahlung aus",
          "fr": "La Terre se réchauffe et émet un rayonnement infrarouge à ondes longues",
          "ru": "Земная поверхность нагревается и испускает длинноволновое инфракрасное излучение",
          "ar": "تسخن الأرض وتنبعث منها الأشعة تحت الحمراء ذات الموجة الطويلة",
          "zh": "地面升温，发出长波红外辐射",
          "ku": "Erd germ dibe û tîrêjên înfrasor ên pêlên dirêj derdixe"
        },
        {
          "tr": "CO2 ve CH4 gazları bu ışınları soğurur",
          "en": "CO2 and CH4 gases absorb these rays",
          "de": "CO2- und CH4-Gase absorbieren diese Strahlen",
          "fr": "Les gaz CO2 et CH4 absorbent ces rayons",
          "ru": "Газы CO2 и CH4 поглощают это излучение",
          "ar": "وتمتص غازات ثاني أكسيد الكربون والميثان هذه الأشعة",
          "zh": "CO2 和 CH4 吸收这些辐射",
          "ku": "Gazên CO2 û CH4 van tîrêjan digirin"
        },
        {
          "tr": "Sera gazı derişimi arttıkça atmosferin ortalama sıcaklığı kademeli olarak artar",
          "en": "As greenhouse-gas concentrations rise, the average temperature of the atmosphere gradually increases",
          "de": "Mit steigender Treibhausgaskonzentration steigt die mittlere Temperatur der Atmosphäre allmählich an",
          "fr": "À mesure que la concentration des gaz à effet de serre augmente, la température moyenne de l'atmosphère s'élève progressivement",
          "ru": "По мере роста концентрации парниковых газов средняя температура атмосферы постепенно повышается",
          "ar": "كلما ازداد تركيز الغازات الدفيئة ارتفع متوسط حرارة الغلاف الجوي تدريجيًا",
          "zh": "随着温室气体浓度增加，大气平均温度逐渐升高",
          "ku": "Her ku giraniya gazên serayê zêde dibe, germahiya navîn a atmosferê hêdî hêdî bilind dibe"
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
        "ru": "Умягчение воды ионообменной смолой",
        "ar": "تليين المياه باستخدام المبادل الأيوني",
        "zh": "用离子交换树脂软化水",
        "ku": "Nermkirina Avê bi Guherkera Îyonan"
      },
      "steps": [
        {
          "tr": "Sert su reçine kolonundan geçirilir",
          "en": "Hard water is passed through the resin column",
          "de": "Hartes Wasser wird durch die Harzsäule geleitet",
          "fr": "L'eau dure passe à travers la colonne de résine",
          "ru": "Жёсткую воду пропускают через колонку с ионообменной смолой",
          "ar": "يتم تمرير الماء العسر من خلال عمود الراتنج",
          "zh": "硬水通过树脂柱",
          "ku": "Ava hişk di stûna resin re derbas dibe"
        },
        {
          "tr": "Sudaki Ca2+ ve Mg2+ iyonları reçineye bağlanır",
          "en": "Ca2+ and Mg2+ ions in water bind to the resin",
          "de": "Ca2+- und Mg2+-Ionen im Wasser binden an das Harz",
          "fr": "Les ions Ca2+ et Mg2+ dans l'eau se lient à la résine",
          "ru": "Ионы Ca2+ и Mg2+ из воды связываются со смолой",
          "ar": "ترتبط أيونات Ca2+ وMg2+ الموجودة في الماء بالراتنج",
          "zh": "水中的 Ca2+ 和 Mg2+ 被树脂吸附",
          "ku": "Di avê de îyonên Ca2+ û Mg2+ bi resinê ve girêdidin"
        },
        {
          "tr": "Reçineden suya Na+ iyonları salınır",
          "en": "Na+ ions are released from the resin into the water",
          "de": "Na+-Ionen werden aus dem Harz an das Wasser abgegeben",
          "fr": "Les ions Na+ sont libérés de la résine dans l'eau",
          "ru": "Смола отдаёт в воду ионы Na+",
          "ar": "يتم إطلاق أيونات Na+ من الراتنج إلى الماء",
          "zh": "树脂向水中释放 Na+",
          "ku": "Îyonên Na+ ji resinê berdidin nav avê"
        },
        {
          "tr": "Kireç oluşturmayan yumuşak su elde edilir",
          "en": "Soft water that does not form lime is obtained",
          "de": "Man erhält weiches Wasser, das keinen Kalk bildet",
          "fr": "On obtient de l'eau douce qui ne forme pas de calcaire",
          "ru": "Получается мягкая вода, не образующая накипи",
          "ar": "يتم الحصول على الماء اليسر الذي لا يشكل الجير",
          "zh": "得到不结水垢的软水",
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
        "ru": "Какой из газов относится к кислотным оксидам, непосредственно способствующим образованию кислотных дождей в атмосфере?",
        "ar": "أي الغازات التالية يعد أحد الأكاسيد الحمضية التي تساهم بشكل مباشر في تكوين المطر الحمضي في الغلاف الجوي؟",
        "zh": "下列气体中，哪一种是直接导致酸雨形成的酸性氧化物？",
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
        "tr": "SO3 asidik oksittir; atmosferdeki su buharıyla tepkimeye girerek sülfürik asit oluşturur: SO3 + H2O → H2SO4. CO da bir oksittir ancak nötr oksittir, suyla asit oluşturmaz; CH4, N2 ve He ise oksit değildir.",
        "en": "SO3 is an acidic oxide; it reacts with water vapour in the atmosphere to form sulfuric acid: SO3 + H2O → H2SO4. CO is also an oxide, but a neutral one that does not form an acid with water; CH4, N2 and He are not oxides.",
        "de": "SO3 ist ein saures Oxid; es reagiert mit dem Wasserdampf der Atmosphäre zu Schwefelsäure: SO3 + H2O → H2SO4. CO ist zwar auch ein Oxid, aber ein neutrales, das mit Wasser keine Säure bildet; CH4, N2 und He sind keine Oxide.",
        "fr": "SO3 est un oxyde acide ; il réagit avec la vapeur d'eau de l'atmosphère pour former de l'acide sulfurique : SO3 + H2O → H2SO4. CO est aussi un oxyde, mais un oxyde neutre qui ne forme pas d'acide avec l'eau ; CH4, N2 et He ne sont pas des oxydes.",
        "ru": "SO3 — кислотный оксид; он реагирует с водяным паром атмосферы с образованием серной кислоты: SO3 + H2O → H2SO4. CO тоже оксид, но несолеобразующий: с водой кислоту не образует; CH4, N2 и He оксидами не являются.",
        "ar": "SO3 أكسيد حمضي؛ يتفاعل مع بخار الماء في الجو مكوّنًا حمض الكبريتيك: SO3 + H2O → H2SO4. أما CO فهو أكسيد أيضًا لكنه متعادل لا يكوّن حمضًا مع الماء؛ وCH4 وN2 وHe ليست أكاسيد.",
        "zh": "SO3 是酸性氧化物，与大气中的水蒸气反应生成硫酸：SO3 + H2O → H2SO4。CO 也是氧化物，但属于中性（不成盐）氧化物，不与水生成酸；CH4、N2 和 He 不是氧化物。",
        "ku": "SO3 oksîdekî asîdî ye; bi buxara avê ya atmosferê re bertek dide û asîda sulfurîk çêdike: SO3 + H2O → H2SO4. CO jî oksîd e, lê oksîdekî bêalî ye û bi avê re asîd çênake; CH4, N2 û He ne oksîd in."
      }
    },
    {
      "id": "u05-twin02",
      "stem": {
        "tr": "Sularda sertliğe neden olan temel katyonlar aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Which of the following correctly lists the main cations that cause hardness in water?",
        "de": "Welche der folgenden Aussagen führt die wichtigsten Kationen, die Wasserhärte verursachen, korrekt auf?",
        "fr": "Lequel des énoncés suivants répertorie correctement les principaux cations qui causent la dureté de l’eau ?",
        "ru": "В каком варианте правильно указаны основные катионы, обусловливающие жёсткость воды?",
        "ar": "أي مما يلي يُدرج بشكل صحيح الكاتيونات الرئيسية التي تسبب عسر الماء؟",
        "zh": "下列哪一项正确列出了导致水硬度的主要阳离子？",
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
        "tr": "Su sertliğine başlıca çözünmüş kalsiyum (Ca2+) ve magnezyum (Mg2+) iyonları neden olur; bu iyonlar sabunla çökelek oluşturur. Na+ ve K+ iyonları sabunla çökelek oluşturmadığından sertliğe yol açmaz.",
        "en": "Water hardness is caused mainly by dissolved calcium (Ca2+) and magnesium (Mg2+) ions, which form a precipitate with soap. Na+ and K+ ions do not precipitate with soap, so they do not cause hardness.",
        "de": "Die Wasserhärte wird hauptsächlich durch gelöste Calcium- (Ca2+) und Magnesiumionen (Mg2+) verursacht, die mit Seife einen Niederschlag bilden. Na+ und K+ bilden mit Seife keinen Niederschlag und verursachen daher keine Härte.",
        "fr": "La dureté de l'eau est due principalement aux ions calcium (Ca2+) et magnésium (Mg2+) dissous, qui forment un précipité avec le savon. Les ions Na+ et K+ ne précipitent pas avec le savon et ne causent donc pas de dureté.",
        "ru": "Жёсткость воды обусловлена главным образом растворёнными ионами кальция (Ca2+) и магния (Mg2+), которые образуют с мылом осадок. Ионы Na+ и K+ осадка с мылом не дают и поэтому жёсткости не вызывают.",
        "ar": "يرجع عسر الماء أساسًا إلى أيونات الكالسيوم (Ca2+) والمغنيسيوم (Mg2+) الذائبة التي تكوّن راسبًا مع الصابون. أما أيونات Na+ وK+ فلا تترسب مع الصابون ولذلك لا تسبب العسر.",
        "zh": "水的硬度主要由溶解的钙离子(Ca2+)和镁离子(Mg2+)引起，它们与肥皂生成沉淀。Na+ 和 K+ 不与肥皂生成沉淀，因此不会造成硬度。",
        "ku": "Serhişkiya avê bi giranî ji îyonên kalsiyûmê (Ca2+) û magnezyûmê (Mg2+) yên heliyayî tê; ev îyon bi sabûnê re niştek çêdikin. Îyonên Na+ û K+ bi sabûnê re niştek çênakin, ji ber vê yekê nabin sedema serhişkiyê."
      }
    },
    {
      "id": "u05-twin03",
      "stem": {
        "tr": "Bir çaydanlıktaki 4 L musluk suyu kaynatılarak tamamen buharlaştırıldığında dipte 0,6 g katı kalıyor ve bu katının tamamının CaCO3 olduğu belirleniyor. Suyun yoğunluğu 1 g/mL alınırsa bu musluk suyundaki çözünmüş CaCO3 derişimi kaç ppm'dir?",
        "en": "When 4 L of tap water in a kettle is boiled until it has completely evaporated, 0.6 g of solid remains, and all of this solid is found to be CaCO3. Taking the density of water as 1 g/mL, what is the dissolved CaCO3 concentration of this tap water in ppm?",
        "de": "Werden 4 L Leitungswasser in einem Wasserkocher gekocht, bis alles verdampft ist, bleiben 0,6 g Feststoff zurück, der vollständig aus CaCO3 besteht. Wie viel ppm beträgt die Konzentration an gelöstem CaCO3 in diesem Leitungswasser, wenn die Dichte des Wassers mit 1 g/mL angenommen wird?",
        "fr": "On fait bouillir 4 L d'eau du robinet dans une bouilloire jusqu'à évaporation complète ; il reste 0,6 g de solide, entièrement constitué de CaCO3. En prenant la masse volumique de l'eau égale à 1 g/mL, quelle est la concentration en CaCO3 dissous de cette eau, en ppm ?",
        "ru": "При кипячении 4 л водопроводной воды в чайнике до полного испарения на дне остаётся 0,6 г твёрдого вещества, целиком состоящего из CaCO3. Принимая плотность воды равной 1 г/мл, найдите концентрацию растворённого CaCO3 в этой воде в ppm.",
        "ar": "عند غلي 4 L من ماء الصنبور في غلاية حتى يتبخر كليًا، يتبقى 0.6 g من مادة صلبة تبيّن أنها CaCO3 بالكامل. إذا اعتُبرت كثافة الماء 1 g/mL، فما تركيز CaCO3 المذاب في ماء الصنبور هذا بوحدة ppm؟",
        "zh": "将水壶中 4 L 自来水煮沸至完全蒸干，壶底留下 0.6 g 固体，经测定全部为 CaCO3。取水的密度为 1 g/mL，这种自来水中溶解的 CaCO3 浓度是多少 ppm？",
        "ku": "Dema 4 L ava şîrê di çaydankekê de tê kelandin heta bi tevahî buhar dibe, 0,6 g madeya hişk dimîne û hemû jê CaCO3 e. Heke tîrbûna avê 1 g/mL were girtin, giraniya CaCO3 ya helandî di vê ava şîrê de çend ppm e?"
      },
      "options": [
        {
          "tr": "15",
          "en": "15",
          "de": "15",
          "fr": "15",
          "ru": "15",
          "ar": "15",
          "zh": "15",
          "ku": "15"
        },
        {
          "tr": "37,5",
          "en": "37.5",
          "de": "37,5",
          "fr": "37,5",
          "ru": "37,5",
          "ar": "37.5",
          "zh": "37.5",
          "ku": "37,5"
        },
        {
          "tr": "150",
          "en": "150",
          "de": "150",
          "fr": "150",
          "ru": "150",
          "ar": "150",
          "zh": "150",
          "ku": "150"
        },
        {
          "tr": "600",
          "en": "600",
          "de": "600",
          "fr": "600",
          "ru": "600",
          "ar": "600",
          "zh": "600",
          "ku": "600"
        },
        {
          "tr": "2400",
          "en": "2400",
          "de": "2400",
          "fr": "2400",
          "ru": "2400",
          "ar": "2400",
          "zh": "2400",
          "ku": "2400"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Suyun kütlesi 4 L × 1000 g/L = 4000 g = 4x10^6 mg. Çözünmüş CaCO3 = 0,6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (seyreltik sularda mg/L ile aynıdır: 600 mg / 4 L = 150). 600 sonucu hacme bölmeyi unutmaktan, 2400 ise 4 ile bölmek yerine çarpmaktan gelir.",
        "en": "Mass of water = 4 L × 1000 g/L = 4000 g = 4x10^6 mg. Dissolved CaCO3 = 0.6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (for dilute water this equals mg/L: 600 mg / 4 L = 150). The result 600 comes from forgetting to divide by the volume, and 2400 from multiplying by 4 instead of dividing.",
        "de": "Masse des Wassers = 4 L × 1000 g/L = 4000 g = 4x10^6 mg. Gelöstes CaCO3 = 0,6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (bei verdünntem Wasser gleich mg/L: 600 mg / 4 L = 150). Das Ergebnis 600 entsteht, wenn man vergisst, durch das Volumen zu teilen, 2400, wenn man mit 4 multipliziert statt zu teilen.",
        "fr": "Masse d'eau = 4 L × 1000 g/L = 4000 g = 4x10^6 mg. CaCO3 dissous = 0,6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (pour une eau diluée, cela équivaut aux mg/L : 600 mg / 4 L = 150). Le résultat 600 vient de l'oubli de la division par le volume, et 2400 d'une multiplication par 4 au lieu d'une division.",
        "ru": "Масса воды = 4 л × 1000 г/л = 4000 г = 4x10^6 мг. Растворённый CaCO3 = 0,6 г = 600 мг. ppm = (600 мг / 4x10^6 мг) × 10^6 = 150 ppm (для разбавленной воды это то же, что мг/л: 600 мг / 4 л = 150). Ответ 600 получается, если забыть разделить на объём, а 2400 — если умножить на 4 вместо деления.",
        "ar": "كتلة الماء = 4 L × 1000 g/L = 4000 g = 4x10^6 mg. CaCO3 المذاب = 0.6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (وهي في المياه المخففة تساوي mg/L: 600 mg / 4 L = 150). الناتج 600 يأتي من نسيان القسمة على الحجم، و2400 من الضرب في 4 بدل القسمة.",
        "zh": "水的质量 = 4 L × 1000 g/L = 4000 g = 4x10^6 mg。溶解的 CaCO3 = 0.6 g = 600 mg。ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm(稀溶液中与 mg/L 数值相同：600 mg / 4 L = 150)。得到 600 是忘了除以体积，得到 2400 是把除以 4 错成乘以 4。",
        "ku": "Girseya avê = 4 L × 1000 g/L = 4000 g = 4x10^6 mg. CaCO3 ya helandî = 0,6 g = 600 mg. ppm = (600 mg / 4x10^6 mg) × 10^6 = 150 ppm (di avên sist de wek mg/L e: 600 mg / 4 L = 150). Encama 600 ji jibîrkirina parvekirina bi qebareyê tê, 2400 jî ji lêxistina bi 4 li şûna parvekirinê."
      }
    },
    {
      "id": "u05-twin04",
      "stem": {
        "tr": "Sert sularla ilgili,\nI. Ca(HCO3)2 içeren su kaynatıldığında CaCO3 çöker ve sertlik azalır.\nII. MgSO4 içeren suyun sertliği kaynatılarak giderilebilir.\nIII. Sabun, sert sudaki Ca2+ iyonlarıyla suda çözünmeyen bir çökelek oluşturur.\nyargılarından hangileri doğrudur?",
        "en": "Regarding hard water,\nI. When water containing Ca(HCO3)2 is boiled, CaCO3 precipitates and the hardness decreases.\nII. The hardness of water containing MgSO4 can be removed by boiling.\nIII. Soap forms an insoluble precipitate with the Ca2+ ions in hard water.\nwhich of the statements are true?",
        "de": "Welche der folgenden Aussagen über hartes Wasser sind richtig?\nI. Beim Kochen von Ca(HCO3)2-haltigem Wasser fällt CaCO3 aus und die Härte nimmt ab.\nII. Die Härte von MgSO4-haltigem Wasser lässt sich durch Kochen entfernen.\nIII. Seife bildet mit den Ca2+-Ionen des harten Wassers einen unlöslichen Niederschlag.",
        "fr": "Concernant les eaux dures,\nI. Quand on fait bouillir une eau contenant Ca(HCO3)2, CaCO3 précipite et la dureté diminue.\nII. La dureté d'une eau contenant MgSO4 peut être éliminée par ébullition.\nIII. Le savon forme un précipité insoluble avec les ions Ca2+ de l'eau dure.\nlesquelles de ces affirmations sont vraies ?",
        "ru": "Какие из утверждений о жёсткой воде верны?\nI. При кипячении воды, содержащей Ca(HCO3)2, выпадает CaCO3 и жёсткость уменьшается.\nII. Жёсткость воды, содержащей MgSO4, можно устранить кипячением.\nIII. Мыло образует с ионами Ca2+ жёсткой воды нерастворимый осадок.",
        "ar": "فيما يتعلق بالماء العسر،\nI. عند غلي ماء يحتوي على Ca(HCO3)2 يترسب CaCO3 ويقل العسر.\nII. يمكن إزالة عسر الماء المحتوي على MgSO4 بالغليان.\nIII. يكوّن الصابون مع أيونات Ca2+ في الماء العسر راسبًا غير ذائب.\nأي العبارات صحيحة؟",
        "zh": "关于硬水的下列说法：\nI. 含 Ca(HCO3)2 的水煮沸时析出 CaCO3，硬度降低。\nII. 含 MgSO4 的水的硬度可以通过煮沸除去。\nIII. 肥皂与硬水中的 Ca2+ 生成不溶于水的沉淀。\n哪些是正确的？",
        "ku": "Derbarê avên hişk de,\nI. Dema ava bi Ca(HCO3)2 tê kelandin, CaCO3 dinişe û hişkî kêm dibe.\nII. Hişkiya ava bi MgSO4 bi kelandinê dikare were rakirin.\nIII. Sabûn bi îyonên Ca2+ yên ava hişk re niştekek nehelbar çêdike.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: Ca(HCO3)2 → CaCO3 + H2O + CO2 tepkimesiyle geçici sertlik çöker. II yanlıştır: MgSO4 kalıcı sertlik yapar, ısıtılınca çökmez; iyon değiştirme veya Na2CO3 ile çöktürme gerekir. III doğrudur: sabun anyonu Ca2+ ile çözünmeyen kalsiyum sabunu (kirli beyaz çökelek) oluşturur, bu yüzden köpük azalır. Doğru yargılar I ve III.",
        "en": "I is true: temporary hardness precipitates by Ca(HCO3)2 → CaCO3 + H2O + CO2. II is false: MgSO4 causes permanent hardness and does not precipitate on heating; ion exchange or precipitation with Na2CO3 is needed. III is true: the soap anion forms insoluble calcium soap (a greyish-white scum) with Ca2+, so lather decreases. The true statements are I and III.",
        "de": "I ist richtig: Die temporäre Härte fällt nach Ca(HCO3)2 → CaCO3 + H2O + CO2 aus. II ist falsch: MgSO4 verursacht bleibende Härte und fällt beim Erhitzen nicht aus; nötig sind Ionenaustausch oder Fällung mit Na2CO3. III ist richtig: Das Seifenanion bildet mit Ca2+ unlösliche Kalkseife, daher schäumt es weniger. Richtig sind I und III.",
        "fr": "I est vraie : la dureté temporaire précipite selon Ca(HCO3)2 → CaCO3 + H2O + CO2. II est fausse : MgSO4 crée une dureté permanente et ne précipite pas à la chaleur ; il faut un échange d'ions ou une précipitation par Na2CO3. III est vraie : l'anion du savon forme avec Ca2+ un savon calcique insoluble, d'où moins de mousse. Les affirmations vraies sont I et III.",
        "ru": "I верно: временная жёсткость осаждается по реакции Ca(HCO3)2 → CaCO3 + H2O + CO2. II неверно: MgSO4 создаёт постоянную жёсткость и при нагревании не осаждается; нужен ионный обмен или осаждение Na2CO3. III верно: анион мыла образует с Ca2+ нерастворимое кальциевое мыло, поэтому пены меньше. Верны I и III.",
        "ar": "العبارة I صحيحة: يترسب العسر المؤقت وفق Ca(HCO3)2 → CaCO3 + H2O + CO2. العبارة II خاطئة: يسبب MgSO4 عسرًا دائمًا ولا يترسب بالتسخين؛ ويلزم التبادل الأيوني أو الترسيب بـ Na2CO3. العبارة III صحيحة: يكوّن أنيون الصابون مع Ca2+ صابون كالسيوم غير ذائب فتقل الرغوة. الصحيح I وIII.",
        "zh": "I 正确：暂时硬度按 Ca(HCO3)2 → CaCO3 + H2O + CO2 沉淀。II 错误：MgSO4 造成永久硬度，受热不沉淀，需离子交换或加 Na2CO3 沉淀。III 正确：肥皂阴离子与 Ca2+ 生成不溶的钙皂，所以泡沫减少。正确的是 I 和 III。",
        "ku": "I rast e: hişkiya demkî bi Ca(HCO3)2 → CaCO3 + H2O + CO2 dinişe. II şaş e: MgSO4 hişkiya daîmî çêdike û bi germkirinê nanişe; guherandina îyonan an niştandin bi Na2CO3 pêwîst e. III rast e: anyona sabûnê bi Ca2+ re sabûna kalsiyûmê ya nehelbar çêdike, ji ber vê kef kêm dibe. Rast I û III in."
      }
    },
    {
      "id": "u05-twin05",
      "stem": {
        "tr": "İçme suyu elde etmede kullanılan bazı işlemler ve amaçları eşleştirilmiştir. Bu eşleştirmelerden hangisi yanlıştır?",
        "en": "Some processes used in producing drinking water are matched with their purposes. Which of these pairs is wrong?",
        "de": "Einige Verfahren der Trinkwassergewinnung sind ihrem Zweck zugeordnet. Welche Zuordnung ist falsch?",
        "fr": "Quelques procédés utilisés pour produire de l'eau potable sont associés à leur but. Quelle association est fausse ?",
        "ru": "Некоторые процессы водоподготовки сопоставлены с их назначением. Какое сопоставление неверно?",
        "ar": "طوبقت بعض العمليات المستخدمة في الحصول على مياه الشرب مع أهدافها. أي من هذه المطابقات خاطئة؟",
        "zh": "下面将生产饮用水的一些处理过程与其目的进行了配对。哪一组配对是错误的？",
        "ku": "Hin pêvajoyên ku ji bo bidestxistina ava vexwarinê tên bikaranîn bi armancên xwe re hatine hevberkirin. Kîjan ji van hevberkirinan şaş e?"
      },
      "options": [
        {
          "tr": "İyon değiştirici reçine – suyu hastalık yapıcı mikroorganizmalardan arındırmak",
          "en": "Ion-exchange resin – freeing the water from disease-causing microorganisms",
          "de": "Ionenaustauscherharz – Befreiung des Wassers von Krankheitserregern",
          "fr": "Résine échangeuse d'ions – débarrasser l'eau des micro-organismes pathogènes",
          "ru": "Ионообменная смола – очистка воды от болезнетворных микроорганизмов",
          "ar": "راتنج التبادل الأيوني – تخليص الماء من الكائنات الدقيقة المسببة للأمراض",
          "zh": "离子交换树脂——除去水中的致病微生物",
          "ku": "Rezîna guherandina îyonan – paqijkirina avê ji mîkroorganîzmayên nexweşîder"
        },
        {
          "tr": "Izgara – suyla gelen iri katı atıkları tutmak",
          "en": "Screen (grating) – holding back large solid debris carried by the water",
          "de": "Rechen – Zurückhalten grober Feststoffe im Wasser",
          "fr": "Dégrillage – retenir les gros déchets solides charriés par l'eau",
          "ru": "Решётка – задержание крупного мусора, приносимого водой",
          "ar": "المصافي (الشبك) – حجز المخلفات الصلبة الكبيرة التي يحملها الماء",
          "zh": "格栅——拦截水中的大块固体杂物",
          "ku": "Izgare – girtina bermayiyên hişk ên mezin ên ku bi avê re tên"
        },
        {
          "tr": "Havalandırma – kötü koku veren gazları uzaklaştırıp suya oksijen kazandırmak",
          "en": "Aeration – removing bad-smelling gases and adding oxygen to the water",
          "de": "Belüftung – Entfernen übelriechender Gase und Anreichern des Wassers mit Sauerstoff",
          "fr": "Aération – éliminer les gaz malodorants et apporter de l'oxygène à l'eau",
          "ru": "Аэрация – удаление дурнопахнущих газов и насыщение воды кислородом",
          "ar": "التهوية – إزالة الغازات ذات الرائحة الكريهة وإكساب الماء الأكسجين",
          "zh": "曝气——除去有臭味的气体并使水中溶入氧气",
          "ku": "Hewadan – rakirina gazên bîhnxirab û dayîna oksîjenê bi avê"
        },
        {
          "tr": "Kum filtresi – çökmeyen ince askıdaki tanecikleri süzerek tutmak",
          "en": "Sand filter – retaining fine suspended particles that did not settle, by filtration",
          "de": "Sandfilter – Zurückhalten nicht abgesetzter feiner Schwebteilchen durch Filtration",
          "fr": "Filtre à sable – retenir par filtration les fines particules en suspension non décantées",
          "ru": "Песчаный фильтр – задержание фильтрованием мелких неосевших взвешенных частиц",
          "ar": "المرشح الرملي – حجز الجسيمات العالقة الدقيقة التي لم تترسب عن طريق الترشيح",
          "zh": "砂滤池——通过过滤截留未沉降的细小悬浮颗粒",
          "ku": "Fîltera qûmê – bi parzûnkirinê girtina perçeyên hûr ên daliqandî yên ku neniştine"
        },
        {
          "tr": "Klorlama – patojen mikroorganizmaları öldürmek",
          "en": "Chlorination – killing pathogenic microorganisms",
          "de": "Chlorung – Abtöten von Krankheitserregern",
          "fr": "Chloration – tuer les micro-organismes pathogènes",
          "ru": "Хлорирование – уничтожение патогенных микроорганизмов",
          "ar": "الكلورة – قتل الكائنات الدقيقة الممرضة",
          "zh": "加氯——杀灭病原微生物",
          "ku": "Klorkirin – kuştina mîkroorganîzmayên patojen"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "İyon değiştirici reçine suyu yumuşatmak için kullanılır: sudaki Ca2+ ve Mg2+ iyonlarını tutup yerine Na+ (veya H+) iyonu verir; mikroorganizmaları öldürmez. Mikroplardan arındırma klorlama (ya da ozonlama, UV) ile yapılır. Izgara, havalandırma, kum filtresi ve klorlama ise doğru amaçlarıyla eşleştirilmiştir.",
        "en": "An ion-exchange resin is used to soften water: it takes up Ca2+ and Mg2+ ions and releases Na+ (or H+) ions instead; it does not kill microorganisms. Removing microbes is done by chlorination (or ozonation, UV). The screen, aeration, sand filter and chlorination are matched with their correct purposes.",
        "de": "Ionenaustauscherharz dient zur Wasserenthärtung: Es bindet Ca2+- und Mg2+-Ionen und gibt dafür Na+- (oder H+-)Ionen ab; Mikroorganismen tötet es nicht. Keime werden durch Chlorung (oder Ozon, UV) entfernt. Rechen, Belüftung, Sandfilter und Chlorung sind richtig zugeordnet.",
        "fr": "La résine échangeuse d'ions sert à adoucir l'eau : elle fixe les ions Ca2+ et Mg2+ et libère à la place des ions Na+ (ou H+) ; elle ne tue pas les micro-organismes. La désinfection se fait par chloration (ou ozonation, UV). Le dégrillage, l'aération, le filtre à sable et la chloration sont correctement associés.",
        "ru": "Ионообменная смола служит для умягчения воды: она поглощает ионы Ca2+ и Mg2+, отдавая вместо них Na+ (или H+); микроорганизмы она не убивает. Обеззараживание проводят хлорированием (или озонированием, УФ). Решётка, аэрация, песчаный фильтр и хлорирование сопоставлены верно.",
        "ar": "يُستخدم راتنج التبادل الأيوني لتيسير الماء: فهو يحتجز أيونات Ca2+ وMg2+ ويطلق بدلها أيونات Na+ (أو H+)، ولا يقتل الكائنات الدقيقة. أما التخلص من الميكروبات فيتم بالكلورة (أو الأوزون أو الأشعة فوق البنفسجية). والمصافي والتهوية والمرشح الرملي والكلورة مطابقة لأهدافها الصحيحة.",
        "zh": "离子交换树脂用于软化水：它吸附 Ca2+ 和 Mg2+，同时释放 Na+(或 H+)，并不能杀灭微生物。除菌要靠加氯（或臭氧、紫外线）。格栅、曝气、砂滤池和加氯的配对都是正确的。",
        "ku": "Rezîna guherandina îyonan ji bo nermkirina avê tê bikaranîn: îyonên Ca2+ û Mg2+ digire û li şûna wan îyonên Na+ (an H+) dide; mîkroorganîzmayan nakuje. Paqijkirina ji mîkroban bi klorkirinê (an ozon, UV) tê kirin. Izgare, hewadan, fîltera qûmê û klorkirin bi armancên xwe yên rast re hatine hevberkirin."
      }
    },
    {
      "id": "u05-twin06",
      "stem": {
        "tr": "Bazı hava kirleticileri ile kaynakları veya etkileri eşleştirilmiştir. Bu eşleştirmelerden hangisi yanlıştır?",
        "en": "Some air pollutants are matched with their sources or effects. Which of these pairs is wrong?",
        "de": "Einige Luftschadstoffe sind ihren Quellen oder Wirkungen zugeordnet. Welche Zuordnung ist falsch?",
        "fr": "Quelques polluants atmosphériques sont associés à leurs sources ou à leurs effets. Quelle association est fausse ?",
        "ru": "Некоторые загрязнители воздуха сопоставлены с их источниками или действием. Какое сопоставление неверно?",
        "ar": "طوبقت بعض ملوثات الهواء مع مصادرها أو آثارها. أي من هذه المطابقات خاطئة؟",
        "zh": "下面将一些空气污染物与其来源或影响进行了配对。哪一组配对是错误的？",
        "ku": "Hin qirêjkerên hewayê bi çavkanî an bandorên xwe re hatine hevberkirin. Kîjan ji van hevberkirinan şaş e?"
      },
      "options": [
        {
          "tr": "SO2 – kükürt içeren kömür ve fuel-oilin yanmasıyla oluşur, asit yağmuruna yol açar.",
          "en": "SO2 – forms when sulfur-containing coal and fuel oil burn; causes acid rain.",
          "de": "SO2 – entsteht bei der Verbrennung schwefelhaltiger Kohle und Heizöls; verursacht sauren Regen.",
          "fr": "SO2 – se forme lors de la combustion de charbon et de fioul soufrés ; provoque des pluies acides.",
          "ru": "SO2 – образуется при сжигании серосодержащего угля и мазута; вызывает кислотные дожди.",
          "ar": "SO2 – يتكوّن باحتراق الفحم وزيت الوقود المحتويين على الكبريت؛ ويسبب المطر الحمضي.",
          "zh": "SO2——含硫煤和燃料油燃烧时生成，导致酸雨。",
          "ku": "SO2 – bi şewitandina komir û fuel-oila bi kewkurt çêdibe; dibe sedema barana asîdî."
        },
        {
          "tr": "CH4 – çöplüklerde ve hayvancılıkta açığa çıkar, sera etkisini artırır.",
          "en": "CH4 – released from landfills and livestock farming; increases the greenhouse effect.",
          "de": "CH4 – wird auf Mülldeponien und in der Tierhaltung frei; verstärkt den Treibhauseffekt.",
          "fr": "CH4 – libéré par les décharges et l'élevage ; renforce l'effet de serre.",
          "ru": "CH4 – выделяется на свалках и в животноводстве; усиливает парниковый эффект.",
          "ar": "CH4 – ينطلق من مكبات النفايات وتربية الماشية؛ ويزيد الاحتباس الحراري.",
          "zh": "CH4——由垃圾填埋场和畜牧业释放，增强温室效应。",
          "ku": "CH4 – ji çopxaneyan û xwedîkirina heywanan derdikeve; bandora serayê zêde dike."
        },
        {
          "tr": "CFC – eskiden sprey ve soğutucularda kullanılmış, ozon tabakasını inceltir.",
          "en": "CFCs – formerly used in sprays and refrigerators; thin the ozone layer.",
          "de": "FCKW – früher in Sprays und Kühlgeräten verwendet; dünnen die Ozonschicht aus.",
          "fr": "CFC – autrefois utilisés dans les aérosols et les réfrigérateurs ; amincissent la couche d'ozone.",
          "ru": "ХФУ – раньше применялись в аэрозолях и холодильниках; истончают озоновый слой.",
          "ar": "مركبات الكلوروفلوروكربون – استُخدمت سابقًا في البخاخات والثلاجات؛ وترقق طبقة الأوزون.",
          "zh": "氟氯烃——过去用于喷雾剂和制冷设备，使臭氧层变薄。",
          "ku": "CFC – berê di spreyan û sarkeran de dihat bikaranîn; tebeqeya ozonê tenik dike."
        },
        {
          "tr": "Partikül madde (is, toz) – solunum yolu hastalıklarını artırır.",
          "en": "Particulate matter (soot, dust) – increases respiratory diseases.",
          "de": "Feinstaub (Ruß, Staub) – erhöht Atemwegserkrankungen.",
          "fr": "Particules (suie, poussières) – augmentent les maladies respiratoires.",
          "ru": "Твёрдые частицы (сажа, пыль) – способствуют росту заболеваний дыхательных путей.",
          "ar": "الجسيمات الدقيقة (السخام والغبار) – تزيد أمراض الجهاز التنفسي.",
          "zh": "颗粒物（烟尘、粉尘）——增加呼吸道疾病。",
          "ku": "Perçeyên hûr (dûde, toz) – nexweşiyên rêya bêhnê zêde dikin."
        },
        {
          "tr": "CO – asidik oksit olduğundan suyla tepkimeye girerek asit yağmurunun başlıca nedenini oluşturur.",
          "en": "CO – being an acidic oxide, it reacts with water and is the main cause of acid rain.",
          "de": "CO – ist als saures Oxid durch Reaktion mit Wasser die Hauptursache des sauren Regens.",
          "fr": "CO – étant un oxyde acide, il réagit avec l'eau et constitue la cause principale des pluies acides.",
          "ru": "CO – будучи кислотным оксидом, реагирует с водой и служит главной причиной кислотных дождей.",
          "ar": "CO – لكونه أكسيدًا حمضيًا يتفاعل مع الماء ويشكّل السبب الرئيسي للمطر الحمضي.",
          "zh": "CO——作为酸性氧化物与水反应，是酸雨的主要原因。",
          "ku": "CO – ji ber ku oksîtek asîdî ye bi avê re tevdigere û sedema sereke ya barana asîdî ye."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "CO nötr (asit oluşturmayan) bir oksittir; suyla asit vermez, bu yüzden asit yağmurunun nedeni değildir. CO eksik yanmada oluşur ve kandaki hemoglobine bağlanarak zehirler. Asit yağmuruna SO2, SO3 ve azot oksitleri yol açar. SO2, CH4, CFC ve partikül madde eşleştirmeleri doğrudur.",
        "en": "CO is a neutral (non-acid-forming) oxide; it gives no acid with water, so it is not a cause of acid rain. CO forms in incomplete combustion and is poisonous because it binds to haemoglobin in the blood. Acid rain is caused by SO2, SO3 and nitrogen oxides. The SO2, CH4, CFC and particulate matter pairs are correct.",
        "de": "CO ist ein neutrales (nicht säurebildendes) Oxid; mit Wasser bildet es keine Säure und verursacht daher keinen sauren Regen. CO entsteht bei unvollständiger Verbrennung und ist giftig, weil es sich an das Hämoglobin im Blut bindet. Sauren Regen verursachen SO2, SO3 und Stickoxide. Die Zuordnungen zu SO2, CH4, FCKW und Feinstaub sind richtig.",
        "fr": "CO est un oxyde neutre (qui ne forme pas d'acide) ; il ne donne pas d'acide avec l'eau et n'est donc pas une cause des pluies acides. CO se forme lors des combustions incomplètes et est toxique car il se fixe sur l'hémoglobine du sang. Les pluies acides sont dues au SO2, au SO3 et aux oxydes d'azote. Les associations pour SO2, CH4, CFC et particules sont correctes.",
        "ru": "CO — несолеобразующий (безразличный) оксид; с водой кислоты не даёт и поэтому не вызывает кислотных дождей. CO образуется при неполном сгорании и ядовит, так как связывается с гемоглобином крови. Кислотные дожди вызывают SO2, SO3 и оксиды азота. Сопоставления для SO2, CH4, ХФУ и твёрдых частиц верны.",
        "ar": "CO أكسيد متعادل (لا يكوّن أحماضًا)؛ لا يعطي حمضًا مع الماء ولذلك ليس سببًا للمطر الحمضي. يتكوّن CO في الاحتراق غير الكامل وهو سام لأنه يرتبط بهيموغلوبين الدم. أما المطر الحمضي فتسببه SO2 وSO3 وأكاسيد النيتروجين. ومطابقات SO2 وCH4 ومركبات الكلوروفلوروكربون والجسيمات الدقيقة صحيحة.",
        "zh": "CO 是中性（不成盐）氧化物，与水不生成酸，因此不是酸雨的成因。CO 在不完全燃烧时生成，能与血液中的血红蛋白结合而使人中毒。酸雨由 SO2、SO3 和氮氧化物引起。SO2、CH4、氟氯烃和颗粒物的配对都是正确的。",
        "ku": "CO oksîtek nêtral e (asîd çênake); bi avê re asîd nade, ji ber vê yekê ne sedema barana asîdî ye. CO di şewitandina netemam de çêdibe û bi girêdana bi hemoglobîna xwînê re jehrî dike. Barana asîdî ji SO2, SO3 û oksîtên nîtrojenê tê. Hevberkirinên SO2, CH4, CFC û perçeyên hûr rast in."
      }
    },
    {
      "id": "u05-twin07",
      "stem": {
        "tr": "X, Y ve Z su örnekleriyle yapılan deneyde şu gözlemler kaydediliyor:\nX: Sabunla bol köpük oluşturuyor; kaynatılınca tortu bırakmıyor.\nY: Sabunla az köpük oluşturuyor; kaynatılınca beyaz tortu oluşuyor, süzülen su sabunla bol köpük veriyor.\nZ: Sabunla az köpük oluşturuyor; kaynatılınca tortu oluşmuyor, kaynatılıp süzülen su da sabunla az köpük veriyor.\nBuna göre aşağıdaki yargılardan hangisi doğrudur?",
        "en": "In an experiment with water samples X, Y and Z, the following observations are recorded:\nX: Gives plenty of lather with soap; leaves no deposit on boiling.\nY: Gives little lather with soap; a white deposit forms on boiling, and the filtered water gives plenty of lather with soap.\nZ: Gives little lather with soap; no deposit forms on boiling, and the boiled and filtered water still gives little lather.\nAccording to this, which statement is correct?",
        "de": "Bei einem Versuch mit den Wasserproben X, Y und Z werden folgende Beobachtungen notiert:\nX: Bildet mit Seife viel Schaum; beim Kochen kein Rückstand.\nY: Bildet mit Seife wenig Schaum; beim Kochen entsteht ein weißer Niederschlag, das filtrierte Wasser schäumt danach stark mit Seife.\nZ: Bildet mit Seife wenig Schaum; beim Kochen kein Niederschlag, auch das gekochte und filtrierte Wasser schäumt wenig.\nWelche Aussage ist demnach richtig?",
        "fr": "Lors d'une expérience avec les échantillons d'eau X, Y et Z, on note :\nX : mousse abondante avec le savon ; aucun dépôt à l'ébullition.\nY : peu de mousse avec le savon ; un dépôt blanc se forme à l'ébullition et l'eau filtrée mousse ensuite abondamment.\nZ : peu de mousse avec le savon ; aucun dépôt à l'ébullition, et l'eau bouillie puis filtrée mousse toujours peu.\nQuelle affirmation est alors correcte ?",
        "ru": "В опыте с образцами воды X, Y и Z записаны наблюдения:\nX: с мылом даёт много пены; при кипячении осадка нет.\nY: с мылом даёт мало пены; при кипячении образуется белый осадок, а отфильтрованная вода даёт с мылом много пены.\nZ: с мылом даёт мало пены; при кипячении осадка нет, и прокипячённая отфильтрованная вода по-прежнему даёт мало пены.\nКакое утверждение верно?",
        "ar": "في تجربة على عينات الماء X وY وZ سُجلت الملاحظات الآتية:\nX: يكوّن رغوة كثيرة مع الصابون؛ ولا يترك راسبًا عند الغليان.\nY: يكوّن رغوة قليلة مع الصابون؛ ويتكوّن راسب أبيض عند الغليان، والماء المرشَّح بعدها يعطي رغوة كثيرة.\nZ: يكوّن رغوة قليلة مع الصابون؛ ولا يتكوّن راسب عند الغليان، والماء المغلي المرشَّح يبقى قليل الرغوة.\nبناءً على ذلك، أي العبارات الآتية صحيحة؟",
        "zh": "用 X、Y、Z 三种水样做实验，记录如下：\nX：与肥皂产生大量泡沫；煮沸后无沉淀。\nY：与肥皂产生的泡沫很少；煮沸后生成白色沉淀，过滤后的水与肥皂产生大量泡沫。\nZ：与肥皂产生的泡沫很少；煮沸后无沉淀，煮沸并过滤后的水泡沫仍然很少。\n据此，下列说法正确的是哪一项？",
        "ku": "Di ceribandinekê de bi nimûneyên avê X, Y û Z ev çavdêrî hatin tomarkirin:\nX: Bi sabûnê re pir kef dide; bi kelandinê niştek nahêle.\nY: Bi sabûnê re kêm kef dide; bi kelandinê niştekek spî çêdibe, ava parzûnkirî paşê bi sabûnê re pir kef dide.\nZ: Bi sabûnê re kêm kef dide; bi kelandinê niştek çênabe, ava kelandî û parzûnkirî jî kêm kef dide.\nLi gorî vê, kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "X sert bir sudur.",
          "en": "X is hard water.",
          "de": "X ist hartes Wasser.",
          "fr": "X est une eau dure.",
          "ru": "X — жёсткая вода.",
          "ar": "X ماء عسر.",
          "zh": "X 是硬水。",
          "ku": "X ava hişk e."
        },
        {
          "tr": "Y'nin sertliği geçici sertliktir.",
          "en": "The hardness of Y is temporary hardness.",
          "de": "Die Härte von Y ist temporäre Härte.",
          "fr": "La dureté de Y est une dureté temporaire.",
          "ru": "Жёсткость Y — временная.",
          "ar": "عسر Y عسر مؤقت.",
          "zh": "Y 的硬度是暂时硬度。",
          "ku": "Hişkiya Y hişkiya demkî ye."
        },
        {
          "tr": "Y'nin sertliği sülfat ve klorür tuzlarından kaynaklanır.",
          "en": "The hardness of Y comes from sulfate and chloride salts.",
          "de": "Die Härte von Y stammt von Sulfat- und Chloridsalzen.",
          "fr": "La dureté de Y provient des sulfates et des chlorures.",
          "ru": "Жёсткость Y обусловлена сульфатами и хлоридами.",
          "ar": "ينتج عسر Y عن أملاح الكبريتات والكلوريدات.",
          "zh": "Y 的硬度来自硫酸盐和氯化物。",
          "ku": "Hişkiya Y ji xwêyên sulfat û klorîdê tê."
        },
        {
          "tr": "Z'nin sertliği kaynatılarak giderilebilir.",
          "en": "The hardness of Z can be removed by boiling.",
          "de": "Die Härte von Z lässt sich durch Kochen entfernen.",
          "fr": "La dureté de Z peut être éliminée par ébullition.",
          "ru": "Жёсткость Z можно устранить кипячением.",
          "ar": "يمكن إزالة عسر Z بالغليان.",
          "zh": "Z 的硬度可以通过煮沸除去。",
          "ku": "Hişkiya Z bi kelandinê dikare were rakirin."
        },
        {
          "tr": "Z'de Ca2+ ve Mg2+ iyonları bulunmaz.",
          "en": "Z contains no Ca2+ or Mg2+ ions.",
          "de": "Z enthält keine Ca2+- und Mg2+-Ionen.",
          "fr": "Z ne contient pas d’ions Ca2+ ni Mg2+.",
          "ru": "В Z нет ионов Ca2+ и Mg2+.",
          "ar": "لا يحتوي Z على أيونات Ca2+ وMg2+.",
          "zh": "Z 中不含 Ca2+ 和 Mg2+。",
          "ku": "Di Z de îyonên Ca2+ û Mg2+ tune ne."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Y kaynatılınca CaCO3 tortusu oluşturup sonra sabunla bol köpük verdiğine göre sertliği kaynatmayla tamamen giderilmiştir; bu bikarbonat kaynaklı geçici sertliktir. X sabunla bol köpük verdiği için yumuşaktır. Z az köpük verdiği hâlde kaynatmayla düzelmediğinden Ca2+/Mg2+ içerir ve sertliği sülfat/klorür kaynaklı kalıcı sertliktir; kaynatmayla giderilemez.",
        "en": "Since Y forms a CaCO3 deposit on boiling and then lathers well with soap, its hardness was completely removed by boiling; this is temporary hardness from hydrogen carbonates. X lathers well, so it is soft. Z lathers poorly and does not improve on boiling, so it contains Ca2+/Mg2+ and has permanent hardness from sulfates/chlorides, which boiling cannot remove.",
        "de": "Da Y beim Kochen CaCO3 abscheidet und danach gut schäumt, wurde seine Härte durch Kochen vollständig entfernt; das ist temporäre Härte aus Hydrogencarbonaten. X schäumt gut und ist daher weich. Z schäumt schlecht und wird durch Kochen nicht besser; es enthält also Ca2+/Mg2+ und hat bleibende Härte aus Sulfaten/Chloriden, die sich nicht wegkochen lässt.",
        "fr": "Comme Y forme un dépôt de CaCO3 à l'ébullition puis mousse bien, sa dureté a été entièrement éliminée par ébullition : c'est une dureté temporaire due aux hydrogénocarbonates. X mousse bien, il est donc doux. Z mousse peu et ne s'améliore pas à l'ébullition : il contient Ca2+/Mg2+ et présente une dureté permanente (sulfates/chlorures) que l'ébullition n'élimine pas.",
        "ru": "Так как Y при кипячении даёт осадок CaCO3, а затем хорошо пенится, его жёсткость полностью устранена кипячением; это временная (гидрокарбонатная) жёсткость. X хорошо пенится, значит, вода мягкая. Z пенится плохо и после кипячения не меняется, значит, содержит Ca2+/Mg2+ и имеет постоянную (сульфатную/хлоридную) жёсткость, не устраняемую кипячением.",
        "ar": "بما أن Y كوّن راسب CaCO3 عند الغليان ثم أعطى رغوة كثيرة، فقد أزيل عسره كليًا بالغليان؛ وهذا عسر مؤقت ناتج عن البيكربونات. X يعطي رغوة كثيرة فهو يسر. أما Z فرغوته قليلة ولا يتحسن بالغليان، فهو يحتوي على Ca2+/Mg2+ وعسره دائم ناتج عن الكبريتات/الكلوريدات ولا يزول بالغليان.",
        "zh": "Y 煮沸时生成 CaCO3 沉淀，之后与肥皂产生大量泡沫，说明其硬度已被煮沸完全除去，是碳酸氢盐引起的暂时硬度。X 泡沫多，是软水。Z 泡沫少且煮沸后无改善，说明含 Ca2+ 或 Mg2+，属于硫酸盐或氯化物引起的永久硬度，不能用煮沸除去。",
        "ku": "Ji ber ku Y bi kelandinê niştekek CaCO3 çêdike û paşê bi sabûnê re pir kef dide, hişkiya wê bi kelandinê bi tevahî hatiye rakirin; ev hişkiya demkî ya ji bîkarbonatan e. X pir kef dide, ji ber vê nerm e. Z kêm kef dide û bi kelandinê baştir nabe; ango Ca2+/Mg2+ dihewîne û hişkiya wê ya daîmî (sulfat/klorîd) e, bi kelandinê nayê rakirin."
      }
    },
    {
      "id": "u05-twin08",
      "stem": {
        "tr": "Cıva ile kirlenmiş bir gölde ölçülen cıva derişimleri şöyledir: göl suyu 0,0001 ppm; plankton 0,01 ppm; küçük balık 0,2 ppm; büyük yırtıcı balık 1 ppm. Bu verilere göre aşağıdakilerden hangisi söylenebilir?",
        "en": "The mercury concentrations measured in a mercury-polluted lake are: lake water 0.0001 ppm; plankton 0.01 ppm; small fish 0.2 ppm; large predatory fish 1 ppm. Which of the following can be concluded from these data?",
        "de": "In einem mit Quecksilber belasteten See werden folgende Quecksilberkonzentrationen gemessen: Seewasser 0,0001 ppm; Plankton 0,01 ppm; kleiner Fisch 0,2 ppm; großer Raubfisch 1 ppm. Welche Aussage lässt sich aus diesen Daten ableiten?",
        "fr": "Dans un lac pollué au mercure, on mesure les concentrations suivantes : eau du lac 0,0001 ppm ; plancton 0,01 ppm ; petit poisson 0,2 ppm ; grand poisson prédateur 1 ppm. Que peut-on conclure de ces données ?",
        "ru": "В озере, загрязнённом ртутью, измерены концентрации ртути: вода 0,0001 ppm; планктон 0,01 ppm; мелкая рыба 0,2 ppm; крупная хищная рыба 1 ppm. Какой вывод можно сделать из этих данных?",
        "ar": "قيست تراكيز الزئبق في بحيرة ملوثة بالزئبق فكانت: ماء البحيرة 0.0001 ppm؛ العوالق 0.01 ppm؛ سمكة صغيرة 0.2 ppm؛ سمكة مفترسة كبيرة 1 ppm. أي مما يلي يمكن استنتاجه من هذه البيانات؟",
        "zh": "在一个受汞污染的湖中测得汞浓度如下：湖水 0.0001 ppm；浮游生物 0.01 ppm；小鱼 0.2 ppm；大型肉食性鱼 1 ppm。根据这些数据可以得出下列哪个结论？",
        "ku": "Di golek bi cîwe qirêjbûyî de giraniyên cîweyê wiha hatin pîvan: ava golê 0,0001 ppm; plankton 0,01 ppm; masiyê biçûk 0,2 ppm; masiyê nêçîrvan ê mezin 1 ppm. Li gorî van daneyan kîjan dikare were gotin?"
      },
      "options": [
        {
          "tr": "Cıva, besin zincirinin üst basamaklarına çıkıldıkça canlılarda parçalanarak azalmaktadır.",
          "en": "Mercury is broken down in organisms and decreases towards the top of the food chain.",
          "de": "Quecksilber wird in Lebewesen abgebaut und nimmt zur Spitze der Nahrungskette hin ab.",
          "fr": "Le mercure est dégradé dans les organismes et diminue vers le sommet de la chaîne alimentaire.",
          "ru": "Ртуть разлагается в организмах и уменьшается к вершине пищевой цепи.",
          "ar": "يتحلل الزئبق في الكائنات الحية ويتناقص كلما صعدنا في السلسلة الغذائية.",
          "zh": "汞在生物体内被分解，越往食物链上层越少。",
          "ku": "Cîwe di zindiyan de tê perçekirin û ber bi jorê zincîra xwarinê kêm dibe."
        },
        {
          "tr": "En yüksek cıva derişimi göl suyunda ölçülmüştür.",
          "en": "The highest mercury concentration was measured in the lake water.",
          "de": "Die höchste Quecksilberkonzentration wurde im Seewasser gemessen.",
          "fr": "La concentration en mercure la plus élevée a été mesurée dans l'eau du lac.",
          "ru": "Наибольшая концентрация ртути измерена в воде озера.",
          "ar": "قيس أعلى تركيز للزئبق في ماء البحيرة.",
          "zh": "最高的汞浓度是在湖水中测得的。",
          "ku": "Giraniya herî bilind a cîweyê di ava golê de hatiye pîvan."
        },
        {
          "tr": "Büyük yırtıcı balıktaki cıva derişimi göl suyundakinin 100 katıdır.",
          "en": "The mercury concentration in the large predatory fish is 100 times that in the lake water.",
          "de": "Die Quecksilberkonzentration im großen Raubfisch ist 100-mal so hoch wie im Seewasser.",
          "fr": "La concentration en mercure du grand prédateur est 100 fois celle de l'eau du lac.",
          "ru": "Концентрация ртути в крупной хищной рыбе в 100 раз больше, чем в воде.",
          "ar": "تركيز الزئبق في السمكة المفترسة الكبيرة يساوي 100 ضعف تركيزه في ماء البحيرة.",
          "zh": "大型肉食性鱼体内的汞浓度是湖水的 100 倍。",
          "ku": "Giraniya cîweyê di masiyê nêçîrvan ê mezin de 100 qatê ya ava golê ye."
        },
        {
          "tr": "Cıva canlılardan kolayca atılamadığı için besin zinciri boyunca birikerek derişimi artmaktadır.",
          "en": "Because mercury is not easily excreted, it accumulates along the food chain and its concentration increases.",
          "de": "Da Quecksilber kaum ausgeschieden wird, reichert es sich entlang der Nahrungskette an und seine Konzentration steigt.",
          "fr": "Comme le mercure s'élimine difficilement, il s'accumule le long de la chaîne alimentaire et sa concentration augmente.",
          "ru": "Поскольку ртуть плохо выводится из организмов, она накапливается по пищевой цепи и её концентрация растёт.",
          "ar": "لأن الزئبق لا يُطرح بسهولة من الكائنات، فإنه يتراكم على طول السلسلة الغذائية ويزداد تركيزه.",
          "zh": "由于汞不易从生物体排出，它沿食物链积累，浓度不断升高。",
          "ku": "Ji ber ku cîwe bi hêsanî ji zindiyan dernakeve, li ser zincîra xwarinê kom dibe û giraniya wê zêde dibe."
        },
        {
          "tr": "Planktondaki cıva derişimi göl suyundakinden düşüktür.",
          "en": "The mercury concentration in plankton is lower than in the lake water.",
          "de": "Die Quecksilberkonzentration im Plankton ist niedriger als im Seewasser.",
          "fr": "La concentration en mercure du plancton est inférieure à celle de l'eau du lac.",
          "ru": "Концентрация ртути в планктоне ниже, чем в воде.",
          "ar": "تركيز الزئبق في العوالق أقل منه في ماء البحيرة.",
          "zh": "浮游生物中的汞浓度低于湖水。",
          "ku": "Giraniya cîweyê di planktonê de ji ya ava golê kêmtir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Derişim su → plankton → küçük balık → büyük balık yönünde sürekli artmaktadır (0,0001 → 0,01 → 0,2 → 1 ppm). Bu, ağır metalin canlılarda parçalanmayıp atılamadan birikmesinin (biyolojik birikim) göstergesidir. En düşük derişim sudadır; planktondaki değer sudakinin 100 katıdır. Büyük balıktaki değer sudakinin 100 katı değil, 1 / 0,0001 = 10000 katıdır.",
        "en": "The concentration rises steadily along water → plankton → small fish → large fish (0.0001 → 0.01 → 0.2 → 1 ppm). This shows that the heavy metal is not broken down or excreted but accumulates in organisms (bioaccumulation). The lowest value is in the water; plankton has 100 times the water value. The large fish has not 100 times but 1 / 0.0001 = 10000 times the water value.",
        "de": "Die Konzentration steigt entlang Wasser → Plankton → kleiner Fisch → großer Fisch stetig an (0,0001 → 0,01 → 0,2 → 1 ppm). Das zeigt, dass das Schwermetall nicht abgebaut oder ausgeschieden wird, sondern sich anreichert (Bioakkumulation). Am niedrigsten ist der Wert im Wasser; Plankton hat das 100-Fache. Der große Fisch hat nicht das 100-Fache, sondern 1 / 0,0001 = 10000-mal so viel wie das Wasser.",
        "fr": "La concentration augmente régulièrement de l'eau au plancton, au petit poisson puis au grand poisson (0,0001 → 0,01 → 0,2 → 1 ppm). Cela montre que le métal lourd n'est ni dégradé ni éliminé mais s'accumule (bioaccumulation). La valeur la plus faible est dans l'eau ; le plancton en a 100 fois plus. Le grand poisson n'en a pas 100 fois plus, mais 1 / 0,0001 = 10000 fois plus que l'eau.",
        "ru": "Концентрация последовательно растёт в ряду вода → планктон → мелкая рыба → крупная рыба (0,0001 → 0,01 → 0,2 → 1 ppm). Это показывает, что тяжёлый металл не разлагается и не выводится, а накапливается (биоаккумуляция). Наименьшее значение — в воде; в планктоне оно в 100 раз больше. В крупной рыбе оно больше не в 100, а в 1 / 0,0001 = 10000 раз.",
        "ar": "يزداد التركيز باستمرار في الاتجاه ماء → عوالق → سمكة صغيرة → سمكة كبيرة (0.0001 → 0.01 → 0.2 → 1 ppm). وهذا يدل على أن الفلز الثقيل لا يتحلل ولا يُطرح بل يتراكم في الكائنات (التراكم الحيوي). أقل قيمة في الماء، وقيمة العوالق 100 ضعف قيمة الماء. أما السمكة الكبيرة فقيمتها ليست 100 ضعف بل 1 / 0.0001 = 10000 ضعف.",
        "zh": "浓度沿着水 → 浮游生物 → 小鱼 → 大鱼的方向不断升高(0.0001 → 0.01 → 0.2 → 1 ppm)，说明重金属在生物体内不被分解、不易排出而积累（生物富集）。最低值在水中；浮游生物是水的 100 倍。大鱼不是水的 100 倍，而是 1 / 0.0001 = 10000 倍。",
        "ku": "Giranî li ser rêza av → plankton → masiyê biçûk → masiyê mezin bi berdewamî zêde dibe (0,0001 → 0,01 → 0,2 → 1 ppm). Ev nîşan dide ku metala giran nayê perçekirin û dernakeve, lê kom dibe (komkirina biyolojîk). Nirxa herî kêm di avê de ye; ya planktonê 100 qatê avê ye. Ya masiyê mezin ne 100 qat, lê 1 / 0,0001 = 10000 qatê avê ye."
      }
    },
    {
      "id": "u05-twin09",
      "stem": {
        "tr": "Üç farklı bölgede toplanan yağmur suyu örneklerinin pH değerleri ölçülüyor:\nI. örnek: pH = 4,2\nII. örnek: pH = 5,3\nIII. örnek: pH = 6,0\nBu örneklerden hangileri asit yağmuru olarak sınıflandırılır?",
        "en": "The pH values of rainwater samples collected in three different regions are measured:\nSample I: pH = 4.2\nSample II: pH = 5.3\nSample III: pH = 6.0\nWhich of these samples are classified as acid rain?",
        "de": "Die pH-Werte von Regenwasserproben aus drei Regionen werden gemessen:\nProbe I: pH = 4,2\nProbe II: pH = 5,3\nProbe III: pH = 6,0\nWelche dieser Proben gelten als saurer Regen?",
        "fr": "On mesure le pH d'échantillons d'eau de pluie prélevés dans trois régions :\nÉchantillon I : pH = 4,2\nÉchantillon II : pH = 5,3\nÉchantillon III : pH = 6,0\nLesquels de ces échantillons sont classés comme pluie acide ?",
        "ru": "Измерены pH проб дождевой воды из трёх районов:\nПроба I: pH = 4,2\nПроба II: pH = 5,3\nПроба III: pH = 6,0\nКакие из проб относятся к кислотным дождям?",
        "ar": "قيست قيم pH لعينات من مياه الأمطار جُمعت من ثلاث مناطق مختلفة:\nالعينة I: pH = 4.2\nالعينة II: pH = 5.3\nالعينة III: pH = 6.0\nأي هذه العينات تُصنَّف مطرًا حمضيًا؟",
        "zh": "测得三个不同地区采集的雨水样品的 pH：\n样品 I：pH = 4.2\n样品 II：pH = 5.3\n样品 III：pH = 6.0\n其中哪些样品属于酸雨？",
        "ku": "pH ya nimûneyên ava baranê yên ji sê herêmên cuda hatin berhevkirin tê pîvan:\nNimûneya I: pH = 4,2\nNimûneya II: pH = 5,3\nNimûneya III: pH = 6,0\nKîjan ji van nimûneyan wek barana asîdî tên dabeşkirin?"
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
        "tr": "Kirlenmemiş yağmur, havadaki CO2 nedeniyle zaten hafif asidiktir ve pH değeri yaklaşık 5,6'dır; asit yağmuru sınırı bu değerdir. pH 4,2 ve 5,3 olan örnekler 5,6'nın altında olduğundan asit yağmurudur. pH 6,0 olan örnek 7'den küçük olsa da 5,6'nın üzerindedir; asit yağmuru sayılmaz. \"pH < 7 ise asit yağmurudur\" düşüncesi yanlış olur.",
        "en": "Unpolluted rain is already slightly acidic because of CO2 in the air, with a pH of about 5.6; this is the acid-rain threshold. Samples with pH 4.2 and 5.3 are below 5.6, so they are acid rain. The sample with pH 6.0 is below 7 but above 5.6, so it is not acid rain. Thinking \"pH < 7 means acid rain\" is the mistake to avoid.",
        "de": "Unbelasteter Regen ist wegen des CO2 der Luft bereits schwach sauer und hat einen pH-Wert von etwa 5,6; das ist die Grenze für sauren Regen. Die Proben mit pH 4,2 und 5,3 liegen darunter und sind saurer Regen. Die Probe mit pH 6,0 ist zwar kleiner als 7, liegt aber über 5,6 und zählt nicht als saurer Regen. Die Annahme \"pH < 7 bedeutet sauren Regen\" ist falsch.",
        "fr": "La pluie non polluée est déjà légèrement acide à cause du CO2 de l'air, avec un pH d'environ 5,6 ; c'est le seuil de la pluie acide. Les échantillons de pH 4,2 et 5,3 sont en dessous : ce sont des pluies acides. L'échantillon de pH 6,0 est inférieur à 7 mais supérieur à 5,6 : ce n'est pas une pluie acide. Penser « pH < 7 signifie pluie acide » est l'erreur à éviter.",
        "ru": "Незагрязнённый дождь уже слабокислый из-за CO2 воздуха, его pH около 5,6; это и есть граница кислотного дождя. Пробы с pH 4,2 и 5,3 ниже 5,6 — это кислотные дожди. Проба с pH 6,0 хотя и меньше 7, но выше 5,6 и кислотным дождём не считается. Ошибочно думать, что «pH < 7 — значит кислотный дождь».",
        "ar": "المطر غير الملوث حمضي قليلًا أصلًا بسبب CO2 في الهواء، وقيمة pH له نحو 5.6؛ وهذه هي عتبة المطر الحمضي. العينتان ذواتا pH 4.2 و5.3 أقل من 5.6 فهما مطر حمضي. أما العينة ذات pH 6.0 فهي أقل من 7 لكنها أعلى من 5.6 فلا تُعدّ مطرًا حمضيًا. والاعتقاد بأن \"pH أقل من 7 يعني مطرًا حمضيًا\" خطأ.",
        "zh": "未受污染的雨水因溶有空气中的 CO2 本来就略呈酸性，pH 约为 5.6，这就是酸雨的界限。pH 为 4.2 和 5.3 的样品低于 5.6，属于酸雨。pH 为 6.0 的样品虽小于 7，但高于 5.6，不算酸雨。认为“pH < 7 就是酸雨”是错误的。",
        "ku": "Barana ne qirêj ji ber CO2 ya hewayê jixwe hinekî asîdî ye û pH ya wê nêzîkî 5,6 ye; sînorê barana asîdî ev nirx e. Nimûneyên bi pH 4,2 û 5,3 ji 5,6 kêmtir in, ji ber vê barana asîdî ne. Nimûneya bi pH 6,0 her çend ji 7 kêmtir be jî ji 5,6 bilindtir e û barana asîdî nayê hesibandin. Fikra \"pH < 7 be barana asîdî ye\" şaş e."
      }
    },
    {
      "id": "u05-twin10",
      "stem": {
        "tr": "Stratosferdeki ozon tabakasının incelmesiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about the thinning of the stratospheric ozone layer is false?",
        "de": "Welche der folgenden Aussagen über die Ausdünnung der stratosphärischen Ozonschicht ist falsch?",
        "fr": "Laquelle des affirmations suivantes sur l'amincissement de la couche d'ozone stratosphérique est fausse ?",
        "ru": "Какое из утверждений об истончении стратосферного озонового слоя неверно?",
        "ar": "أي العبارات الآتية حول ترقق طبقة الأوزون في الستراتوسفير خاطئة؟",
        "zh": "关于平流层臭氧层变薄的下列说法中，哪一项是错误的？",
        "ku": "Derbarê tenikbûna tebeqeya ozonê ya li stratosferê de kîjan gotin şaş e?"
      },
      "options": [
        {
          "tr": "İncelmenin başlıca nedeni fosil yakıtların yanmasıyla açığa çıkan CO2'dir.",
          "en": "The main cause of the thinning is CO2 released by burning fossil fuels.",
          "de": "Hauptursache der Ausdünnung ist das bei der Verbrennung fossiler Brennstoffe freigesetzte CO2.",
          "fr": "La cause principale de l'amincissement est le CO2 libéré par la combustion des combustibles fossiles.",
          "ru": "Главная причина истончения — CO2, выделяющийся при сжигании ископаемого топлива.",
          "ar": "السبب الرئيسي للترقق هو CO2 المنطلق من احتراق الوقود الأحفوري.",
          "zh": "臭氧层变薄的主要原因是燃烧化石燃料放出的 CO2。",
          "ku": "Sedema sereke ya tenikbûnê CO2 ya ji şewitandina sotemeniyên fosîl derdikeve ye."
        },
        {
          "tr": "CFC moleküllerinden UV etkisiyle ayrılan Cl atomları O3 moleküllerini parçalar.",
          "en": "Cl atoms split off from CFC molecules by UV light break down O3 molecules.",
          "de": "Durch UV-Licht aus FCKW-Molekülen abgespaltene Cl-Atome zerlegen O3-Moleküle.",
          "fr": "Les atomes de Cl arrachés aux molécules de CFC par les UV détruisent les molécules d'O3.",
          "ru": "Атомы Cl, отщепляющиеся от молекул ХФУ под действием УФ, разрушают молекулы O3.",
          "ar": "تحطم ذرات Cl المنفصلة عن جزيئات الكلوروفلوروكربون بتأثير الأشعة فوق البنفسجية جزيئات O3.",
          "zh": "紫外线使氟氯烃分子释放出的 Cl 原子会破坏 O3 分子。",
          "ku": "Atomên Cl ên bi bandora UV ji molekulên CFC vediqetin molekulên O3 perçe dikin."
        },
        {
          "tr": "İncelme, yeryüzüne ulaşan zararlı UV ışınlarının miktarını artırır.",
          "en": "The thinning increases the amount of harmful UV radiation reaching the Earth.",
          "de": "Die Ausdünnung erhöht die Menge schädlicher UV-Strahlung, die die Erde erreicht.",
          "fr": "L'amincissement augmente la quantité d'UV nocifs qui atteignent la Terre.",
          "ru": "Истончение увеличивает количество вредного УФ-излучения, достигающего Земли.",
          "ar": "يزيد الترقق كمية الأشعة فوق البنفسجية الضارة التي تصل إلى الأرض.",
          "zh": "臭氧层变薄会增加到达地面的有害紫外线。",
          "ku": "Tenikbûn mîqdara tîrêjên UV yên zirardar ên digihîjin erdê zêde dike."
        },
        {
          "tr": "Cilt kanseri ve göz hastalıkları (katarakt) riskini artırır.",
          "en": "It increases the risk of skin cancer and eye diseases (cataract).",
          "de": "Sie erhöht das Risiko für Hautkrebs und Augenerkrankungen (Katarakt).",
          "fr": "Il augmente le risque de cancer de la peau et de maladies oculaires (cataracte).",
          "ru": "Оно повышает риск рака кожи и болезней глаз (катаракты).",
          "ar": "يزيد خطر الإصابة بسرطان الجلد وأمراض العين (الساد).",
          "zh": "它会增加皮肤癌和眼病（白内障）的风险。",
          "ku": "Ew xetera penceşêra çerm û nexweşiyên çavan (katarakt) zêde dike."
        },
        {
          "tr": "Montreal Protokolü ile CFC üretimi ve kullanımı sınırlandırılmıştır.",
          "en": "The production and use of CFCs have been restricted by the Montreal Protocol.",
          "de": "Durch das Montreal-Protokoll wurden Herstellung und Verwendung von FCKW eingeschränkt.",
          "fr": "Le protocole de Montréal a limité la production et l'utilisation des CFC.",
          "ru": "Монреальский протокол ограничил производство и применение ХФУ.",
          "ar": "قيّد بروتوكول مونتريال إنتاج مركبات الكلوروفلوروكربون واستخدامها.",
          "zh": "《蒙特利尔议定书》限制了氟氯烃的生产和使用。",
          "ku": "Bi Protokola Montrealê hilberîn û bikaranîna CFC hatiye sînordarkirin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Ozon incelmesinin başlıca nedeni CO2 değil, CFC gibi klor ve brom içeren gazlardır: UV ışınıyla serbest kalan Cl atomları zincirleme olarak çok sayıda O3 molekülünü parçalar. CO2 ozonu yıkmaz; sera etkisini güçlendirerek küresel ısınmaya katkı yapar. Bu iki çevre sorunu birbirine karıştırılmamalıdır. Diğer ifadeler (Cl ile O3 yıkımı, UV artışı, sağlık riskleri, Montreal Protokolü) doğrudur.",
        "en": "The main cause of ozone thinning is not CO2 but chlorine- and bromine-containing gases such as CFCs: Cl atoms freed by UV light destroy many O3 molecules in a chain process. CO2 does not destroy ozone; it strengthens the greenhouse effect and contributes to global warming. These two environmental problems must not be confused. The other statements (O3 destruction by Cl, more UV, health risks, the Montreal Protocol) are true.",
        "de": "Hauptursache des Ozonabbaus ist nicht CO2, sondern chlor- und bromhaltige Gase wie FCKW: Durch UV freigesetzte Cl-Atome zerstören in einer Kettenreaktion viele O3-Moleküle. CO2 baut kein Ozon ab, sondern verstärkt den Treibhauseffekt und trägt zur globalen Erwärmung bei. Die beiden Umweltprobleme dürfen nicht verwechselt werden. Die übrigen Aussagen (O3-Abbau durch Cl, mehr UV, Gesundheitsrisiken, Montreal-Protokoll) sind richtig.",
        "fr": "La cause principale de l'amincissement n'est pas le CO2 mais les gaz chlorés et bromés comme les CFC : les atomes de Cl libérés par les UV détruisent en chaîne de nombreuses molécules d'O3. Le CO2 ne détruit pas l'ozone ; il renforce l'effet de serre et contribue au réchauffement climatique. Il ne faut pas confondre ces deux problèmes. Les autres affirmations (destruction d'O3 par Cl, plus d'UV, risques sanitaires, protocole de Montréal) sont vraies.",
        "ru": "Главная причина истончения озонового слоя — не CO2, а хлор- и бромсодержащие газы, например ХФУ: освобождённые УФ-излучением атомы Cl по цепному механизму разрушают множество молекул O3. CO2 озон не разрушает; он усиливает парниковый эффект и способствует глобальному потеплению. Эти две экологические проблемы нельзя путать. Остальные утверждения (разрушение O3 хлором, рост УФ, риск для здоровья, Монреальский протокол) верны.",
        "ar": "السبب الرئيسي لترقق الأوزون ليس CO2 بل الغازات المحتوية على الكلور والبروم مثل مركبات الكلوروفلوروكربون: إذ تحطم ذرات Cl المتحررة بالأشعة فوق البنفسجية عددًا كبيرًا من جزيئات O3 بشكل متسلسل. أما CO2 فلا يحطم الأوزون، بل يعزز الاحتباس الحراري ويسهم في الاحترار العالمي. ويجب عدم الخلط بين المشكلتين. والعبارات الأخرى (تحطيم O3 بالكلور، زيادة الأشعة فوق البنفسجية، المخاطر الصحية، بروتوكول مونتريال) صحيحة.",
        "zh": "臭氧层变薄的主要原因不是 CO2，而是氟氯烃等含氯、含溴的气体：紫外线释放出的 Cl 原子以链式方式破坏大量 O3 分子。CO2 不破坏臭氧，它增强温室效应，促使全球变暖。这两个环境问题不能混淆。其余说法(Cl 破坏 O3、紫外线增加、健康风险、《蒙特利尔议定书》)都是正确的。",
        "ku": "Sedema sereke ya tenikbûna ozonê ne CO2 ye, lê gazên bi klor û bromê yên wek CFC ne: atomên Cl ên bi UV azad dibin bi rêzê gelek molekulên O3 perçe dikin. CO2 ozonê xera nake; bandora serayê xurt dike û beşdarî germbûna gerdûnî dibe. Divê ev her du pirsgirêkên jîngehê neyên tevlihevkirin. Gotinên din (xerakirina O3 bi Cl, zêdebûna UV, xetereyên tenduristiyê, Protokola Montrealê) rast in."
      }
    },
    {
      "id": "u05-twin11",
      "stem": {
        "tr": "Sera etkisiyle ilgili,\nI. Bir CH4 molekülü kızılötesi ışını bir CO2 molekülünden daha etkili tutar.\nII. Atmosferin büyük bölümünü oluşturan N2 ve O2 kızılötesi ışınları önemli ölçüde soğurmaz.\nIII. Su buharı da kızılötesi ışınları soğuran bir sera gazıdır.\nyargılarından hangileri doğrudur?",
        "en": "Regarding the greenhouse effect,\nI. A CH4 molecule traps infrared radiation more effectively than a CO2 molecule.\nII. N2 and O2, which make up most of the atmosphere, do not absorb infrared radiation significantly.\nIII. Water vapour is also a greenhouse gas that absorbs infrared radiation.\nwhich of the statements are true?",
        "de": "Welche der folgenden Aussagen zum Treibhauseffekt sind richtig?\nI. Ein CH4-Molekül hält Infrarotstrahlung wirksamer zurück als ein CO2-Molekül.\nII. N2 und O2, die den größten Teil der Atmosphäre bilden, absorbieren Infrarotstrahlung nicht nennenswert.\nIII. Auch Wasserdampf ist ein Treibhausgas, das Infrarotstrahlung absorbiert.",
        "fr": "Concernant l'effet de serre,\nI. Une molécule de CH4 retient le rayonnement infrarouge plus efficacement qu'une molécule de CO2.\nII. N2 et O2, qui forment la majeure partie de l'atmosphère, n'absorbent pas notablement l'infrarouge.\nIII. La vapeur d'eau est aussi un gaz à effet de serre qui absorbe l'infrarouge.\nlesquelles de ces affirmations sont vraies ?",
        "ru": "Какие из утверждений о парниковом эффекте верны?\nI. Молекула CH4 удерживает инфракрасное излучение эффективнее, чем молекула CO2.\nII. N2 и O2, составляющие большую часть атмосферы, заметно не поглощают инфракрасное излучение.\nIII. Водяной пар — тоже парниковый газ, поглощающий инфракрасное излучение.",
        "ar": "فيما يتعلق بالاحتباس الحراري،\nI. يحتجز جزيء CH4 الأشعة تحت الحمراء بفعالية أكبر من جزيء CO2.\nII. لا يمتص N2 وO2، اللذان يشكلان معظم الغلاف الجوي، الأشعة تحت الحمراء بدرجة تُذكر.\nIII. بخار الماء أيضًا غاز دفيء يمتص الأشعة تحت الحمراء.\nأي العبارات صحيحة؟",
        "zh": "关于温室效应的下列说法：\nI. 一个 CH4 分子截留红外辐射的能力比一个 CO2 分子强。\nII. 占大气绝大部分的 N2 和 O2 基本不吸收红外辐射。\nIII. 水蒸气也是吸收红外辐射的温室气体。\n哪些是正确的？",
        "ku": "Derbarê bandora serayê de,\nI. Molekulek CH4 tîrêjên binsor ji molekulek CO2 bi bandortir digire.\nII. N2 û O2 yên beşa mezin a atmosferê pêk tînin tîrêjên binsor bi awayekî girîng nagirin.\nIII. Buhara avê jî gazeke serayê ye ku tîrêjên binsor digire.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: molekül başına CH4'ün ısı tutma etkisi CO2'ninkinden çok daha büyüktür; CO2'nin toplam katkısının büyük olması atmosferde çok daha fazla bulunmasındandır. II doğrudur: aynı iki atomdan oluşan apolar N2 ve O2 kızılötesi ışınları neredeyse soğurmaz. III doğrudur: su buharı doğal sera etkisine en çok katkı yapan gazdır; miktarı sıcaklıkla değiştiği için ısınmayı güçlendiren bir geri besleme etkisi yapar. Üç yargı da doğrudur.",
        "en": "I is true: per molecule, CH4 traps heat far more strongly than CO2; the large total contribution of CO2 is due to its much greater abundance. II is true: nonpolar N2 and O2, made of two identical atoms, absorb almost no infrared. III is true: water vapour contributes most to the natural greenhouse effect; since its amount depends on temperature, it acts as a feedback that amplifies warming. All three statements are true.",
        "de": "I ist richtig: Pro Molekül hält CH4 Wärme viel stärker zurück als CO2; der große Gesamtbeitrag von CO2 beruht auf seiner viel größeren Menge. II ist richtig: Die unpolaren, aus zwei gleichen Atomen bestehenden N2 und O2 absorbieren kaum Infrarot. III ist richtig: Wasserdampf trägt am meisten zum natürlichen Treibhauseffekt bei; da seine Menge von der Temperatur abhängt, wirkt er als verstärkende Rückkopplung. Alle drei Aussagen sind richtig.",
        "fr": "I est vraie : par molécule, CH4 retient la chaleur bien plus que CO2 ; la grande contribution totale du CO2 vient de son abondance bien plus élevée. II est vraie : N2 et O2, apolaires et formés de deux atomes identiques, n'absorbent presque pas l'infrarouge. III est vraie : la vapeur d'eau contribue le plus à l'effet de serre naturel ; sa quantité dépendant de la température, elle agit comme une rétroaction qui amplifie le réchauffement. Les trois affirmations sont vraies.",
        "ru": "I верно: в расчёте на молекулу CH4 удерживает тепло намного сильнее CO2; большой общий вклад CO2 объясняется его гораздо большим содержанием. II верно: неполярные N2 и O2 из двух одинаковых атомов почти не поглощают ИК-излучение. III верно: водяной пар вносит наибольший вклад в естественный парниковый эффект; так как его количество зависит от температуры, он действует как усиливающая обратная связь. Верны все три утверждения.",
        "ar": "العبارة I صحيحة: لكل جزيء، يحتجز CH4 الحرارة أقوى بكثير من CO2، وكِبَر المساهمة الكلية لـ CO2 سببه وفرته الأكبر بكثير. العبارة II صحيحة: N2 وO2 غير القطبيين والمكوّنين من ذرتين متماثلتين لا يمتصان الأشعة تحت الحمراء تقريبًا. العبارة III صحيحة: بخار الماء أكبر مساهم في الاحتباس الحراري الطبيعي، وبما أن كميته تتبع الحرارة فهو يعمل كتغذية راجعة تضخّم الاحترار. العبارات الثلاث صحيحة.",
        "zh": "I 正确：按每个分子计，CH4 的保温能力远大于 CO2；CO2 总贡献大是因为它在大气中的含量多得多。II 正确：由两个相同原子构成的非极性 N2 和 O2 几乎不吸收红外辐射。III 正确：水蒸气对自然温室效应的贡献最大；其含量随温度变化，起放大变暖的反馈作用。三项都正确。",
        "ku": "I rast e: li gorî her molekulê CH4 germê ji CO2 pir bêtir digire; mezinbûna beşdariya giştî ya CO2 ji ber pirbûna wê ye. II rast e: N2 û O2 yên nepolar ên ji du atomên wekhev hema hema tîrêjên binsor nagirin. III rast e: buhara avê herî zêde beşdarî bandora serayê ya xwezayî dibe; ji ber ku mîqdara wê bi germahiyê ve girêdayî ye, wek vegerandineke ku germbûnê xurt dike tevdigere. Her sê gotin rast in."
      }
    },
    {
      "id": "u05-twin12",
      "stem": {
        "tr": "Bir kimya fabrikası üretim sürecini yeniden tasarlamaktadır. Aşağıdaki uygulamalardan hangisi yeşil kimya ilkeleriyle bağdaşmaz?",
        "en": "A chemical plant is redesigning its production process. Which of the following practices is not compatible with the principles of green chemistry?",
        "de": "Eine Chemiefabrik gestaltet ihren Produktionsprozess neu. Welche der folgenden Maßnahmen ist mit den Prinzipien der Grünen Chemie nicht vereinbar?",
        "fr": "Une usine chimique repense son procédé de production. Laquelle des pratiques suivantes n'est pas compatible avec les principes de la chimie verte ?",
        "ru": "Химический завод меняет технологию производства. Какая из мер не согласуется с принципами зелёной химии?",
        "ar": "يعيد مصنع كيميائي تصميم عملية إنتاجه. أي الممارسات الآتية لا تتوافق مع مبادئ الكيمياء الخضراء؟",
        "zh": "一家化工厂正在重新设计其生产工艺。下列做法中，哪一项不符合绿色化学原则？",
        "ku": "Fabrîqeyek kîmyayî pêvajoya xwe ya hilberînê ji nû ve dîzayn dike. Kîjan ji van kiryaran bi prensîbên kîmyaya kesk re li hev nayê?"
      },
      "options": [
        {
          "tr": "Çözücü olarak mümkün olduğunca su kullanılması",
          "en": "Using water as the solvent wherever possible",
          "de": "Wo immer möglich Wasser als Lösungsmittel verwenden",
          "fr": "Utiliser l'eau comme solvant chaque fois que possible",
          "ru": "По возможности использовать воду в качестве растворителя",
          "ar": "استخدام الماء مذيبًا كلما أمكن",
          "zh": "尽可能用水作溶剂",
          "ku": "Heta ku gengaz be av wek helker bikaranîn"
        },
        {
          "tr": "Petrol yerine bitkisel atıklardan elde edilen hammadde kullanılması",
          "en": "Using raw materials obtained from plant waste instead of petroleum",
          "de": "Rohstoffe aus Pflanzenabfällen statt aus Erdöl verwenden",
          "fr": "Utiliser des matières premières issues de déchets végétaux au lieu du pétrole",
          "ru": "Использовать сырьё из растительных отходов вместо нефти",
          "ar": "استخدام مواد خام مستخلصة من المخلفات النباتية بدل النفط",
          "zh": "用植物废料制得的原料代替石油",
          "ku": "Li şûna petrolê madeyên xav ên ji bermayiyên riwekan bikaranîn"
        },
        {
          "tr": "Ucuz olduğu için zehirli ve uçucu organik çözücülerin tercih edilmesi",
          "en": "Preferring toxic, volatile organic solvents because they are cheap",
          "de": "Giftige, flüchtige organische Lösungsmittel bevorzugen, weil sie billig sind",
          "fr": "Préférer des solvants organiques toxiques et volatils parce qu’ils sont bon marché",
          "ru": "Предпочитать токсичные летучие органические растворители, потому что они дешёвые",
          "ar": "تفضيل المذيبات العضوية السامة والمتطايرة لأنها رخيصة",
          "zh": "因为便宜而选用有毒、易挥发的有机溶剂",
          "ku": "Ji ber erzaniyê tercîhkirina helkerên organîk ên jehrî û firok"
        },
        {
          "tr": "Tepkimenin oda sıcaklığında yürümesini sağlayan katalizör kullanılması",
          "en": "Using a catalyst that lets the reaction proceed at room temperature",
          "de": "Einen Katalysator einsetzen, der die Reaktion bei Raumtemperatur ablaufen lässt",
          "fr": "Utiliser un catalyseur qui permet à la réaction de se dérouler à température ambiante",
          "ru": "Применять катализатор, позволяющий проводить реакцию при комнатной температуре",
          "ar": "استخدام محفّز يتيح سير التفاعل عند درجة حرارة الغرفة",
          "zh": "使用能使反应在室温下进行的催化剂",
          "ku": "Bikaranîna katalîzorekê ku dihêle tevger di germahiya odeyê de bimeşe"
        },
        {
          "tr": "Tepkime yolunun az atık oluşturacak biçimde tasarlanması",
          "en": "Designing the reaction route so that little waste is formed",
          "de": "Den Reaktionsweg so planen, dass wenig Abfall entsteht",
          "fr": "Concevoir la voie de synthèse de façon à former peu de déchets",
          "ru": "Проектировать путь синтеза так, чтобы образовывалось мало отходов",
          "ar": "تصميم مسار التفاعل بحيث تتكوّن نفايات قليلة",
          "zh": "设计产生废物少的反应路线",
          "ku": "Rêya tevgerê wisa dîzayn kirin ku bermayî hindik çêbibin"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Yeşil kimya; atığı kaynağında önlemeyi, daha az zararlı çözücü ve yardımcı maddeler kullanmayı, yenilenebilir hammaddeyi, enerji verimliliğini ve katalizör kullanımını savunur. Zehirli ve uçucu organik çözücülerin yalnızca ucuz oldukları için seçilmesi insan sağlığına ve çevreye zarar verdiğinden bu ilkelere aykırıdır. Su kullanımı, bitkisel hammadde, oda sıcaklığında çalışan katalizör ve az atıklı tasarım ise yeşil kimyanın doğrudan uygulamalarıdır.",
        "en": "Green chemistry promotes preventing waste at the source, safer solvents and auxiliaries, renewable feedstocks, energy efficiency and catalysis. Choosing toxic, volatile organic solvents just because they are cheap harms human health and the environment, so it goes against these principles. Using water, plant-based raw materials, a catalyst working at room temperature and low-waste design are direct applications of green chemistry.",
        "de": "Grüne Chemie fordert Abfallvermeidung an der Quelle, sicherere Lösungs- und Hilfsstoffe, nachwachsende Rohstoffe, Energieeffizienz und Katalyse. Giftige, flüchtige organische Lösungsmittel nur wegen des Preises zu wählen, schadet Gesundheit und Umwelt und widerspricht diesen Prinzipien. Wasser als Lösungsmittel, pflanzliche Rohstoffe, ein bei Raumtemperatur wirksamer Katalysator und abfallarme Planung sind direkte Anwendungen der Grünen Chemie.",
        "fr": "La chimie verte prône la prévention des déchets à la source, des solvants et auxiliaires plus sûrs, les matières premières renouvelables, l'efficacité énergétique et la catalyse. Choisir des solvants organiques toxiques et volatils uniquement parce qu'ils sont bon marché nuit à la santé et à l'environnement, ce qui contredit ces principes. L'eau comme solvant, les matières végétales, un catalyseur actif à température ambiante et une conception peu génératrice de déchets sont des applications directes de la chimie verte.",
        "ru": "Зелёная химия предполагает предотвращение отходов в источнике, более безопасные растворители и вспомогательные вещества, возобновляемое сырьё, энергоэффективность и катализ. Выбор токсичных летучих органических растворителей только из-за дешевизны вредит здоровью и среде и противоречит этим принципам. Вода как растворитель, растительное сырьё, катализатор, работающий при комнатной температуре, и малоотходная схема — прямые применения зелёной химии.",
        "ar": "تدعو الكيمياء الخضراء إلى منع النفايات من مصدرها، واستخدام مذيبات ومواد مساعدة أكثر أمانًا، ومواد خام متجددة، وكفاءة الطاقة، واستخدام المحفزات. واختيار مذيبات عضوية سامة ومتطايرة لمجرد رخصها يضر بصحة الإنسان والبيئة، فهو مخالف لهذه المبادئ. أما استخدام الماء والمواد النباتية والمحفز العامل عند حرارة الغرفة والتصميم قليل النفايات فهي تطبيقات مباشرة للكيمياء الخضراء.",
        "zh": "绿色化学主张从源头防止废物、使用更安全的溶剂和助剂、使用可再生原料、提高能源效率和采用催化。仅因便宜而选用有毒、易挥发的有机溶剂会危害人体健康和环境，违背这些原则。用水作溶剂、使用植物原料、采用室温下起作用的催化剂和少废物设计都是绿色化学的直接应用。",
        "ku": "Kîmyaya kesk pêşîgirtina bermayiyan ji çavkaniyê, helker û madeyên alîkar ên ewletir, madeyên xav ên nûbûyî, karîgeriya enerjiyê û katalîzê diparêze. Hilbijartina helkerên organîk ên jehrî û firok tenê ji ber erzaniyê zirarê dide tenduristî û jîngehê, ji ber vê li dijî van prensîban e. Bikaranîna avê, madeyên riwekî, katalîzora di germahiya odeyê de dixebite û dîzayna bi bermayiyên hindik sepanên rasterast ên kîmyaya kesk in."
      }
    },
    {
      "id": "u05-twin13",
      "stem": {
        "tr": "Deniz suyundan içme suyu elde etmede kullanılan ters ozmoz yöntemiyle ilgili,\nI. Tuzlu su tarafına osmotik basınçtan daha büyük bir basınç uygulanır.\nII. Yarı geçirgen zar Na+ ve Cl- iyonlarının büyük bölümünü tutar.\nIII. Su, damıtmada olduğu gibi önce buharlaştırılıp sonra yoğuşturulur.\nifadelerinden hangileri yanlıştır?",
        "en": "Regarding reverse osmosis, used to obtain drinking water from seawater,\nI. A pressure greater than the osmotic pressure is applied to the salt-water side.\nII. The semipermeable membrane retains most of the Na+ and Cl- ions.\nIII. As in distillation, the water is first evaporated and then condensed.\nwhich of the statements are false?",
        "de": "Welche der folgenden Aussagen zur Umkehrosmose, mit der aus Meerwasser Trinkwasser gewonnen wird, sind falsch?\nI. Auf der Salzwasserseite wird ein Druck angelegt, der größer als der osmotische Druck ist.\nII. Die semipermeable Membran hält den größten Teil der Na+- und Cl--Ionen zurück.\nIII. Wie bei der Destillation wird das Wasser zuerst verdampft und dann kondensiert.",
        "fr": "Concernant l'osmose inverse, utilisée pour produire de l'eau potable à partir d'eau de mer,\nI. On applique côté eau salée une pression supérieure à la pression osmotique.\nII. La membrane semi-perméable retient la plus grande partie des ions Na+ et Cl-.\nIII. Comme dans la distillation, l'eau est d'abord évaporée puis condensée.\nlesquelles de ces affirmations sont fausses ?",
        "ru": "Какие из утверждений об обратном осмосе, используемом для получения питьевой воды из морской, неверны?\nI. Со стороны солёной воды прикладывают давление больше осмотического.\nII. Полупроницаемая мембрана задерживает большую часть ионов Na+ и Cl-.\nIII. Как и при перегонке, воду сначала испаряют, а затем конденсируют.",
        "ar": "فيما يتعلق بالتناضح العكسي المستخدم للحصول على مياه الشرب من مياه البحر،\nI. يُطبَّق على جانب الماء المالح ضغط أكبر من الضغط الأسموزي.\nII. يحتجز الغشاء شبه المنفذ معظم أيونات Na+ وCl-.\nIII. يُبخَّر الماء أولًا ثم يُكثَّف كما في التقطير.\nأي العبارات خاطئة؟",
        "zh": "关于从海水制取饮用水所用的反渗透法，有下列说法：\nI. 在盐水一侧施加大于渗透压的压强。\nII. 半透膜截留大部分 Na+ 和 Cl-。\nIII. 和蒸馏一样，水先被蒸发再被冷凝。\n哪些是错误的？",
        "ku": "Derbarê rêbaza osmoza berevajî ya ji bo bidestxistina ava vexwarinê ji ava deryayê de,\nI. Li aliyê ava şor zextek ji zexta osmotîk mezintir tê sepandin.\nII. Perdeya nîvderbasbar piraniya îyonên Na+ û Cl- digire.\nIII. Wek di dilopkirinê de, av pêşî tê buharkirin û paşê tê çirkirin.\nKîjan ji van gotinan şaş in?"
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
      "correctIndex": 2,
      "explanation": {
        "tr": "I doğrudur: su normalde seyreltik taraftan derişik tarafa geçer; akışı tersine çevirmek için tuzlu su tarafına osmotik basınçtan büyük basınç uygulanır. II doğrudur: su molekülleri zardan geçerken çözünmüş iyonların büyük kısmı zarda tutulur. III yanlıştır: ters ozmozda faz değişimi yoktur, su sıvı hâlde zardan süzülür; buharlaştırma ve yoğuşturma damıtmaya özgüdür. Yanlış olan yalnızca III.",
        "en": "I is true: water normally moves from the dilute to the concentrated side; to reverse the flow, a pressure greater than the osmotic pressure is applied to the salt-water side. II is true: while water molecules pass through the membrane, most dissolved ions are held back. III is false: in reverse osmosis there is no change of state; water passes through the membrane as a liquid, whereas evaporation and condensation belong to distillation. Only III is false.",
        "de": "I ist richtig: Wasser wandert normalerweise von der verdünnten zur konzentrierten Seite; um den Fluss umzukehren, wird auf der Salzwasserseite ein Druck über dem osmotischen Druck angelegt. II ist richtig: Wassermoleküle passieren die Membran, die meisten gelösten Ionen werden zurückgehalten. III ist falsch: Bei der Umkehrosmose gibt es keinen Phasenwechsel; das Wasser durchdringt die Membran flüssig, Verdampfen und Kondensieren gehören zur Destillation. Falsch ist nur III.",
        "fr": "I est vraie : l'eau passe normalement du côté dilué au côté concentré ; pour inverser le flux, on applique côté eau salée une pression supérieure à la pression osmotique. II est vraie : les molécules d'eau traversent la membrane tandis que la plupart des ions dissous sont retenus. III est fausse : en osmose inverse il n'y a pas de changement d'état ; l'eau traverse la membrane à l'état liquide, l'évaporation et la condensation relèvent de la distillation. Seule III est fausse.",
        "ru": "I верно: обычно вода переходит из разбавленного раствора в концентрированный; чтобы обратить поток, со стороны солёной воды прикладывают давление больше осмотического. II верно: молекулы воды проходят через мембрану, а большая часть растворённых ионов задерживается. III неверно: при обратном осмосе нет фазового перехода, вода проходит через мембрану в жидком виде; испарение и конденсация характерны для перегонки. Неверно только III.",
        "ar": "العبارة I صحيحة: ينتقل الماء عادة من الجانب المخفف إلى المركز، ولعكس الاتجاه يُطبَّق على جانب الماء المالح ضغط أكبر من الضغط الأسموزي. العبارة II صحيحة: تعبر جزيئات الماء الغشاء بينما يُحتجز معظم الأيونات المذابة. العبارة III خاطئة: لا يحدث في التناضح العكسي تغيّر في الحالة، فالماء يعبر الغشاء وهو سائل، أما التبخير والتكثيف فيخصّان التقطير. الخاطئة هي III فقط.",
        "zh": "I 正确：水通常从稀溶液一侧向浓溶液一侧渗透；要使其反向，需在盐水一侧施加大于渗透压的压强。II 正确：水分子透过膜，而大部分溶解的离子被截留。III 错误：反渗透没有物态变化，水以液态透过膜；蒸发和冷凝属于蒸馏。只有 III 是错误的。",
        "ku": "I rast e: av bi asayî ji aliyê sist ber bi aliyê tîr ve diçe; ji bo berevajîkirina herikînê li aliyê ava şor zextek ji zexta osmotîk mezintir tê sepandin. II rast e: molekulên avê di perdeyê re derbas dibin, piraniya îyonên helandî tên girtin. III şaş e: di osmoza berevajî de guherîna rewşê tune ye, av wek şile di perdeyê re derbas dibe; buharkirin û çirkirin taybetiya dilopkirinê ne. Tenê III şaş e."
      }
    },
    {
      "id": "u05-twin14",
      "stem": {
        "tr": "Bir su örneğinin toplam sertliği CaCO3 cinsinden 300 ppm olarak ölçülüyor. Su kaynatılıp çöken tortu süzüldükten sonra sertliğin 120 ppm'e düştüğü belirleniyor. Buna göre bu sudaki geçici sertlik, toplam sertliğin yüzde kaçıdır?",
        "en": "The total hardness of a water sample is measured as 300 ppm (as CaCO3). After the water is boiled and the precipitate is filtered off, the hardness has fallen to 120 ppm. What percentage of the total hardness of this water is temporary hardness?",
        "de": "Die Gesamthärte einer Wasserprobe beträgt 300 ppm (als CaCO3). Nach dem Kochen und Abfiltrieren des Niederschlags ist die Härte auf 120 ppm gesunken. Wie viel Prozent der Gesamthärte dieses Wassers ist temporäre Härte?",
        "fr": "La dureté totale d'un échantillon d'eau est de 300 ppm (en CaCO3). Après ébullition et filtration du précipité, la dureté n'est plus que de 120 ppm. Quel pourcentage de la dureté totale de cette eau représente la dureté temporaire ?",
        "ru": "Общая жёсткость пробы воды равна 300 ppm (в пересчёте на CaCO3). После кипячения и отделения осадка фильтрованием жёсткость снизилась до 120 ppm. Сколько процентов общей жёсткости этой воды составляет временная жёсткость?",
        "ar": "قيس العسر الكلي لعينة ماء فكان 300 ppm (مقدّرًا بـ CaCO3). وبعد غلي الماء وترشيح الراسب انخفض العسر إلى 120 ppm. ما النسبة المئوية للعسر المؤقت من العسر الكلي لهذا الماء؟",
        "zh": "某水样的总硬度为 300 ppm(以 CaCO3 计)。将水煮沸并滤去沉淀后，硬度降为 120 ppm。这种水的暂时硬度占总硬度的百分之几？",
        "ku": "Hişkiya giştî ya nimûneyek avê wek CaCO3 300 ppm hatiye pîvan. Piştî ku av tê kelandin û niştek tê parzûnkirin, hişkî dadikeve 120 ppm. Li gorî vê, hişkiya demkî ya vê avê ji sedî çendê hişkiya giştî ye?"
      },
      "options": [
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
        },
        {
          "tr": "%150",
          "en": "150%",
          "de": "150 %",
          "fr": "150 %",
          "ru": "150 %",
          "ar": "150%",
          "zh": "150%",
          "ku": "%150"
        },
        {
          "tr": "%180",
          "en": "180%",
          "de": "180 %",
          "fr": "180 %",
          "ru": "180 %",
          "ar": "180%",
          "zh": "180%",
          "ku": "%180"
        },
        {
          "tr": "%250",
          "en": "250%",
          "de": "250 %",
          "fr": "250 %",
          "ru": "250 %",
          "ar": "250%",
          "zh": "250%",
          "ku": "%250"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kaynatmayla yalnızca geçici sertlik giderilir; kalan 120 ppm kalıcı sertliktir. Geçici sertlik = 300 − 120 = 180 ppm. Toplamdaki payı = 180 / 300 × 100 = %60. %40 sonucu kalan (kalıcı) sertliğin payıdır (120 / 300); %180 ise ppm değerini doğrudan yüzde gibi yazmaktan, %150 ve %250 de oranları ters kurmaktan (180 / 120, 300 / 120) gelir.",
        "en": "Boiling removes only temporary hardness; the remaining 120 ppm is permanent hardness. Temporary hardness = 300 − 120 = 180 ppm. Its share of the total = 180 / 300 × 100 = 60%. The result 40% is the share of the remaining (permanent) hardness (120 / 300); 180% comes from writing the ppm value directly as a percentage, and 150% and 250% from setting up the ratios upside down (180 / 120, 300 / 120).",
        "de": "Durch Kochen wird nur die temporäre Härte entfernt; die verbleibenden 120 ppm sind bleibende Härte. Temporäre Härte = 300 − 120 = 180 ppm. Anteil an der Gesamthärte = 180 / 300 × 100 = 60 %. 40 % ist der Anteil der verbleibenden (bleibenden) Härte (120 / 300); 180 % entsteht, wenn man den ppm-Wert direkt als Prozent schreibt, 150 % und 250 % durch umgekehrt gebildete Verhältnisse (180 / 120, 300 / 120).",
        "fr": "L'ébullition n'élimine que la dureté temporaire ; les 120 ppm restants sont la dureté permanente. Dureté temporaire = 300 − 120 = 180 ppm. Part dans le total = 180 / 300 × 100 = 60 %. Le résultat 40 % est la part de la dureté restante (permanente) (120 / 300) ; 180 % vient de l'écriture directe de la valeur en ppm comme pourcentage, et 150 % et 250 % de rapports inversés (180 / 120, 300 / 120).",
        "ru": "Кипячением устраняется только временная жёсткость; оставшиеся 120 ppm — постоянная жёсткость. Временная жёсткость = 300 − 120 = 180 ppm. Её доля = 180 / 300 × 100 = 60 %. Ответ 40 % — это доля оставшейся (постоянной) жёсткости (120 / 300); 180 % получается, если записать значение в ppm как проценты, а 150 % и 250 % — если перевернуть отношения (180 / 120, 300 / 120).",
        "ar": "يزيل الغليان العسر المؤقت فقط؛ والـ 120 ppm المتبقية هي العسر الدائم. العسر المؤقت = 300 − 120 = 180 ppm. نسبته من الكلي = 180 / 300 × 100 = 60%. الناتج 40% هو نسبة العسر المتبقي (الدائم) (120 / 300)؛ و180% يأتي من كتابة قيمة ppm مباشرة كنسبة مئوية، و150% و250% من قلب النسبتين (180 / 120، 300 / 120).",
        "zh": "煮沸只能除去暂时硬度，剩下的 120 ppm 是永久硬度。暂时硬度 = 300 − 120 = 180 ppm，占总硬度的 180 / 300 × 100 = 60%。40% 是剩余（永久）硬度所占的比例(120 / 300)；180% 是把 ppm 数值直接当成百分数；150% 和 250% 是把比值倒过来算(180 / 120、300 / 120)。",
        "ku": "Bi kelandinê tenê hişkiya demkî tê rakirin; 120 ppm ya mayî hişkiya daîmî ye. Hişkiya demkî = 300 − 120 = 180 ppm. Para wê di giştî de = 180 / 300 × 100 = %60. Encama %40 para hişkiya mayî (daîmî) ye (120 / 300); %180 ji nivîsandina nirxa ppm rasterast wek ji sedî tê, %150 û %250 jî ji berevajîkirina rêjeyan (180 / 120, 300 / 120)."
      }
    },
    {
      "id": "u05-twin15",
      "stem": {
        "tr": "Evde oluşan bazı atıklar ve bunlar için önerilen uygulamalar eşleştirilmiştir. Bu eşleştirmelerden hangisi çevre açısından yanlıştır?",
        "en": "Some household wastes are matched with recommended ways of dealing with them. Which of these pairs is wrong from an environmental point of view?",
        "de": "Einige Haushaltsabfälle sind empfohlenen Entsorgungswegen zugeordnet. Welche Zuordnung ist aus Umweltsicht falsch?",
        "fr": "Quelques déchets ménagers sont associés à la manière recommandée de les traiter. Quelle association est fausse du point de vue de l'environnement ?",
        "ru": "Некоторые бытовые отходы сопоставлены с рекомендуемыми способами обращения с ними. Какое сопоставление неверно с точки зрения охраны окружающей среды?",
        "ar": "طوبقت بعض النفايات المنزلية مع الممارسات الموصى بها للتعامل معها. أي هذه المطابقات خاطئ من الناحية البيئية؟",
        "zh": "下面将一些生活垃圾与其建议的处理方法进行了配对。从环保角度看，哪一组配对是错误的？",
        "ku": "Hin bermayiyên malê bi kiryarên pêşniyarkirî re hatine hevberkirin. Kîjan ji van hevberkirinan ji aliyê jîngehê ve şaş e?"
      },
      "options": [
        {
          "tr": "Kullanılmış pil – atık pil toplama kutusuna atılması",
          "en": "Used battery – putting it in a used-battery collection box",
          "de": "Gebrauchte Batterie – in eine Altbatterie-Sammelbox geben",
          "fr": "Pile usagée – la déposer dans un bac de collecte des piles",
          "ru": "Использованная батарейка – сдать в контейнер для сбора батареек",
          "ar": "البطارية المستعملة – وضعها في صندوق جمع البطاريات المستعملة",
          "zh": "废电池——投入废电池回收箱",
          "ku": "Pîla bikaranî – avêtina wê nav qutiya berhevkirina pîlan"
        },
        {
          "tr": "Cam şişe – cam geri dönüşüm kumbarasına atılması",
          "en": "Glass bottle – putting it in a glass recycling bin",
          "de": "Glasflasche – in den Altglascontainer geben",
          "fr": "Bouteille en verre – la déposer dans le conteneur de recyclage du verre",
          "ru": "Стеклянная бутылка – выбросить в контейнер для переработки стекла",
          "ar": "الزجاجة – وضعها في حاوية إعادة تدوير الزجاج",
          "zh": "玻璃瓶——投入玻璃回收箱",
          "ku": "Şûşeya camî – avêtina wê nav qutiya vezîvirandina camê"
        },
        {
          "tr": "Bozuk floresan lamba – cıva içerdiği için ayrı toplanması",
          "en": "Broken fluorescent lamp – collecting it separately because it contains mercury",
          "de": "Defekte Leuchtstofflampe – wegen ihres Quecksilbergehalts getrennt sammeln",
          "fr": "Tube fluorescent hors d’usage – le collecter à part car il contient du mercure",
          "ru": "Неисправная люминесцентная лампа – собирать отдельно, так как она содержит ртуть",
          "ar": "المصباح الفلوري التالف – جمعه بشكل منفصل لاحتوائه على الزئبق",
          "zh": "坏的荧光灯管——因含汞而单独收集",
          "ku": "Lampaya floresan a xerabûyî – ji ber ku cîwe dihewîne cuda berhevkirin"
        },
        {
          "tr": "Kullanılmış kızartma yağı – lavaboya dökülerek kanalizasyona verilmesi",
          "en": "Used frying oil – pouring it down the sink into the sewer",
          "de": "Gebrauchtes Frittieröl – in die Spüle und damit in die Kanalisation gießen",
          "fr": "Huile de friture usagée – la verser dans l'évier, vers les égouts",
          "ru": "Отработанное масло для жарки – вылить в раковину, в канализацию",
          "ar": "زيت القلي المستعمل – سكبه في المغسلة إلى شبكة الصرف الصحي",
          "zh": "用过的煎炸油——倒入水槽排进下水道",
          "ku": "Rûnê qelandinê yê bikaranî – rijandina wê nav lavaboyê û kanalîzasyonê"
        },
        {
          "tr": "Sebze ve meyve kabukları – kompost yapılarak gübreye dönüştürülmesi",
          "en": "Vegetable and fruit peels – composting them into fertiliser",
          "de": "Gemüse- und Obstschalen – kompostieren und zu Dünger machen",
          "fr": "Épluchures de fruits et légumes – les composter pour en faire de l’engrais",
          "ru": "Очистки овощей и фруктов – компостировать, превращая в удобрение",
          "ar": "قشور الخضار والفواكه – تحويلها إلى سماد بالكمر (الكومبوست)",
          "zh": "果皮菜叶——堆肥制成肥料",
          "ku": "Qalikên sebze û fêkiyan – bi kompostê veguherandina wan bo gubreyê"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Atık yağ suda çözünmez, su yüzeyinde ince bir film oluşturarak suya oksijen geçişini engeller; az miktarı bile çok büyük hacimde suyu kirletir ve kanalizasyon borularını tıkar. Bu nedenle atık yağ kaplarda biriktirilip geri dönüşüme (ör. biyodizel üretimine) verilmelidir. Pilin ve floresan lambanın ağır metal içerdiği için ayrı toplanması, camın geri dönüştürülmesi ve organik atığın kompostlanması doğru uygulamalardır.",
        "en": "Waste oil does not dissolve in water; it forms a thin film on the surface that blocks oxygen transfer into the water. Even a small amount pollutes a very large volume of water and clogs sewer pipes. Waste oil should therefore be collected in containers and sent for recycling (e.g. biodiesel production). Collecting batteries and fluorescent lamps separately because of their heavy metals, recycling glass and composting organic waste are correct practices.",
        "de": "Altöl löst sich nicht in Wasser, bildet auf der Oberfläche einen dünnen Film und behindert den Sauerstoffeintrag; schon kleine Mengen verschmutzen sehr viel Wasser und verstopfen Abwasserrohre. Altöl sollte daher in Behältern gesammelt und dem Recycling (z. B. Biodieselherstellung) zugeführt werden. Batterien und Leuchtstofflampen wegen ihrer Schwermetalle getrennt zu sammeln, Glas zu recyceln und organische Abfälle zu kompostieren, ist richtig.",
        "fr": "L'huile usagée ne se dissout pas dans l'eau ; elle forme un film mince en surface qui empêche le passage de l'oxygène dans l'eau. Même une petite quantité pollue un très grand volume d'eau et bouche les canalisations. Il faut donc la collecter dans des récipients et la confier au recyclage (par exemple pour le biodiesel). Collecter à part piles et tubes fluorescents à cause des métaux lourds, recycler le verre et composter les déchets organiques sont de bonnes pratiques.",
        "ru": "Отработанное масло не растворяется в воде; на поверхности оно образует тонкую плёнку, препятствующую поступлению кислорода в воду. Даже небольшое количество загрязняет очень большой объём воды и засоряет канализационные трубы. Поэтому масло нужно собирать в ёмкости и сдавать на переработку (например, в биодизель). Раздельный сбор батареек и люминесцентных ламп из-за тяжёлых металлов, переработка стекла и компостирование органики — правильные действия.",
        "ar": "لا يذوب الزيت المستعمل في الماء، بل يكوّن طبقة رقيقة على السطح تمنع انتقال الأكسجين إلى الماء؛ وحتى كمية صغيرة منه تلوث حجمًا كبيرًا جدًا من الماء وتسد أنابيب الصرف. لذلك يجب جمعه في أوعية وتسليمه لإعادة التدوير (مثل إنتاج الديزل الحيوي). أما جمع البطاريات والمصابيح الفلورية منفصلة بسبب الفلزات الثقيلة، وإعادة تدوير الزجاج، وتحويل النفايات العضوية إلى سماد فممارسات صحيحة.",
        "zh": "废油不溶于水，会在水面形成一层薄膜，阻碍氧气溶入水中；少量废油就能污染大量的水，并堵塞下水管道。因此应把废油收集在容器中送去回收（如生产生物柴油）。因含重金属而单独收集电池和荧光灯管、回收玻璃以及将有机垃圾堆肥都是正确做法。",
        "ku": "Rûnê bermayî di avê de nahele; li ser rûyê avê pelekî tenik çêdike û derbasbûna oksîjenê bo avê asteng dike. Hindikek jê jî qebareyek pir mezin a avê qirêj dike û boriyên kanalîzasyonê digire. Ji ber vê divê rûnê bermayî di firaxan de were berhevkirin û bo vezîvirandinê (mînak hilberîna bîyodîzelê) were dayîn. Berhevkirina cuda ya pîl û lampayên floresan ji ber metalên giran, vezîvirandina camê û kompostkirina bermayiyên organîk kiryarên rast in."
      }
    },
    {
      "id": "u05-twin16",
      "stem": {
        "tr": "Asit yağmurlarını azaltmak için önerilen aşağıdaki önlemlerden hangisi, kirletici gazların atmosfere salınan miktarını azaltmadığı için etkili bir çözüm değildir?",
        "en": "Which of the following measures proposed to reduce acid rain is not an effective solution, because it does not reduce the amount of polluting gases released into the atmosphere?",
        "de": "Welche der folgenden Maßnahmen gegen sauren Regen ist keine wirksame Lösung, weil sie die in die Atmosphäre abgegebene Menge an Schadgasen nicht verringert?",
        "fr": "Laquelle des mesures suivantes proposées pour réduire les pluies acides n'est pas une solution efficace, parce qu'elle ne diminue pas la quantité de gaz polluants rejetés dans l'atmosphère ?",
        "ru": "Какая из предложенных мер по уменьшению кислотных дождей неэффективна, поскольку не уменьшает количество загрязняющих газов, выбрасываемых в атмосферу?",
        "ar": "أي الإجراءات الآتية المقترحة للحد من المطر الحمضي ليس حلًا فعالًا، لأنه لا يقلل كمية الغازات الملوِّثة المنطلقة إلى الغلاف الجوي؟",
        "zh": "为减少酸雨提出了下列措施，其中哪一项因不能减少排入大气的污染气体总量而不是有效的解决办法？",
        "ku": "Ji bo kêmkirina barana asîdî ji van tedbîrên pêşniyarkirî kîjan, ji ber ku mîqdara gazên qirêjker ên li atmosferê tên berdan kêm nake, ne çareseriyek bi bandor e?"
      },
      "options": [
        {
          "tr": "Fabrika bacalarının yükseltilerek gazların daha uzak bölgelere taşınması",
          "en": "Raising factory chimneys so the gases are carried to more distant regions",
          "de": "Fabrikschornsteine erhöhen, damit die Gase in weiter entfernte Gebiete getragen werden",
          "fr": "Rehausser les cheminées d'usine pour que les gaz soient emportés vers des régions plus éloignées",
          "ru": "Повысить заводские трубы, чтобы газы уносились в более отдалённые районы",
          "ar": "رفع مداخن المصانع لكي تُحمل الغازات إلى مناطق أبعد",
          "zh": "加高工厂烟囱，使气体被带到更远的地区",
          "ku": "Bilindkirina dûkêşên fabrîqeyan da ku gaz bên birin herêmên dûrtir"
        },
        {
          "tr": "Termik santral bacalarına SO2 tutan baca gazı arıtma (desülfürizasyon) sistemi takılması",
          "en": "Fitting flue-gas desulfurisation systems that capture SO2 to power-plant chimneys",
          "de": "Rauchgasentschwefelungsanlagen, die SO2 binden, an Kraftwerksschornsteinen installieren",
          "fr": "Équiper les cheminées des centrales thermiques de systèmes de désulfuration des fumées qui captent le SO2",
          "ru": "Установить на трубах ТЭС системы сероочистки дымовых газов, улавливающие SO2",
          "ar": "تركيب أنظمة إزالة الكبريت من غازات المداخن تحتجز SO2 في محطات الطاقة الحرارية",
          "zh": "在火电厂烟囱上安装吸收 SO2 的烟气脱硫装置",
          "ku": "Danîna pergalên paqijkirina gaza dûkêşê (desulfurîzasyon) yên ku SO2 digirin li dûkêşên santralên termîk"
        },
        {
          "tr": "Kükürt oranı düşük yakıtların kullanılması",
          "en": "Using fuels with a low sulfur content",
          "de": "Brennstoffe mit niedrigem Schwefelgehalt verwenden",
          "fr": "Utiliser des combustibles à faible teneur en soufre",
          "ru": "Использовать топливо с низким содержанием серы",
          "ar": "استخدام أنواع وقود منخفضة المحتوى الكبريتي",
          "zh": "使用低硫燃料",
          "ku": "Bikaranîna sotemeniyên bi rêjeya kewkurtê kêm"
        },
        {
          "tr": "Taşıtlarda azot oksitlerini dönüştüren katalitik konvertör kullanılması",
          "en": "Using catalytic converters that convert nitrogen oxides in vehicles",
          "de": "In Fahrzeugen Katalysatoren einsetzen, die Stickoxide umwandeln",
          "fr": "Équiper les véhicules de pots catalytiques qui transforment les oxydes d'azote",
          "ru": "Применять в автомобилях каталитические нейтрализаторы, превращающие оксиды азота",
          "ar": "استخدام المحولات الحفزية في المركبات لتحويل أكاسيد النيتروجين",
          "zh": "在汽车上使用转化氮氧化物的催化转化器",
          "ku": "Bikaranîna konvertorên katalîtîk ên ku oksîtên nîtrojenê diguherînin di wesayîtan de"
        },
        {
          "tr": "Rüzgâr ve güneş gibi yenilenebilir enerji kaynaklarına yönelinmesi",
          "en": "Turning to renewable energy sources such as wind and solar",
          "de": "Auf erneuerbare Energiequellen wie Wind und Sonne umsteigen",
          "fr": "Se tourner vers des énergies renouvelables comme le vent et le soleil",
          "ru": "Переходить на возобновляемые источники энергии, такие как ветер и солнце",
          "ar": "التوجه إلى مصادر الطاقة المتجددة مثل الرياح والشمس",
          "zh": "转向风能、太阳能等可再生能源",
          "ku": "Berê xwe dan çavkaniyên enerjiyê yên nûbûyî yên wek ba û tav"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bacaları yükseltmek SO2 ve azot oksitlerinin miktarını değiştirmez; yalnızca yerel kirliliği azaltıp gazların rüzgârla daha uzaklara taşınmasına ve asit yağmurunun başka bölgelerde yağmasına yol açar. Baca gazı arıtma, düşük kükürtlü yakıt, katalitik konvertör ve yenilenebilir enerji ise kirletici gazların oluşumunu veya atmosfere salınmasını doğrudan azaltır.",
        "en": "Raising chimneys does not change the amount of SO2 and nitrogen oxides; it only reduces local pollution and lets the wind carry the gases further, so the acid rain falls in other regions. Flue-gas cleaning, low-sulfur fuel, catalytic converters and renewable energy directly reduce the formation or release of the polluting gases.",
        "de": "Höhere Schornsteine ändern die Menge an SO2 und Stickoxiden nicht; sie verringern nur die örtliche Belastung, und der Wind trägt die Gase weiter, sodass der saure Regen in anderen Gebieten fällt. Rauchgasreinigung, schwefelarme Brennstoffe, Katalysatoren und erneuerbare Energien verringern dagegen direkt Bildung oder Ausstoß der Schadgase.",
        "fr": "Rehausser les cheminées ne change pas la quantité de SO2 et d'oxydes d'azote ; cela réduit seulement la pollution locale et le vent emporte les gaz plus loin, si bien que les pluies acides tombent ailleurs. Le traitement des fumées, les combustibles pauvres en soufre, les pots catalytiques et les énergies renouvelables réduisent directement la formation ou le rejet des gaz polluants.",
        "ru": "Повышение труб не меняет количества SO2 и оксидов азота; оно лишь снижает местное загрязнение, а ветер уносит газы дальше, и кислотные дожди выпадают в других районах. Очистка дымовых газов, малосернистое топливо, каталитические нейтрализаторы и возобновляемая энергетика непосредственно уменьшают образование или выброс загрязняющих газов.",
        "ar": "رفع المداخن لا يغيّر كمية SO2 وأكاسيد النيتروجين؛ بل يقلل التلوث المحلي فقط وتحمل الرياح الغازات إلى مسافات أبعد فيهطل المطر الحمضي في مناطق أخرى. أما تنقية غازات المداخن والوقود منخفض الكبريت والمحولات الحفزية والطاقة المتجددة فتقلل مباشرة تكوّن الغازات الملوِّثة أو انطلاقها.",
        "zh": "加高烟囱并不改变 SO2 和氮氧化物的排放量，只是减轻了当地污染，风把气体带到更远处，酸雨落在别的地区。烟气脱硫、低硫燃料、催化转化器和可再生能源则直接减少污染气体的生成或排放。",
        "ku": "Bilindkirina dûkêşan mîqdara SO2 û oksîtên nîtrojenê naguherîne; tenê qirêjiya herêmî kêm dike û ba gazan dûrtir dibe, ji ber vê barana asîdî li herêmên din dibare. Paqijkirina gaza dûkêşê, sotemeniya bi kewkurta kêm, konvertora katalîtîk û enerjiya nûbûyî rasterast çêbûn an berdana gazên qirêjker kêm dikin."
      }
    }
  ]
};

export default unit05;
