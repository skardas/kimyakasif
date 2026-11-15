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
    "ru": "Типы реакций, остаточные вещества и расчеты выхода.",
    "ar": "أنواع التفاعلات والمواد المتبقية وحسابات المحصول",
    "zh": "反应类型、残留物和产率计算",
    "ku": "Cureyên Reaksiyonê, Madeya Bermayî û Hesabkirina Hilberînê"
  },
  "facts": [
    {
      "id": "u07-f01",
      "fact": {
        "tr": "Yanma tepkimeleri bir maddenin O2 gazı ile tepkimesidir; azotun (N2) yanması hariç ekzotermiktir.",
        "en": "Combustion reactions are the reaction of a substance with O2 gas; It is exothermic except for the burning of nitrogen (N2).",
        "de": "Verbrennungsreaktionen sind die Reaktion eines Stoffes mit O2-Gas; Bis auf die Verbrennung von Stickstoff (N2) ist es exotherm.",
        "fr": "Les réactions de combustion sont la réaction d'une substance avec le gaz O2 ; Il est exothermique sauf pour la combustion de l'azote (N2).",
        "ru": "Реакции горения – это реакция вещества с газообразным О2; Он экзотермичен, за исключением горения азота (N2).",
        "ar": "تفاعلات الاحتراق هي تفاعل المادة مع غاز O2؛ وهو طارد للحرارة باستثناء احتراق النيتروجين (N2).",
        "zh": "燃烧反应是物质与氧气的反应；除氮气（N2）燃烧外，它都是放热的。",
        "ku": "Reaksiyonên şewitandinê reaksiyona maddeyek bi gaza O2 re ye; Ji xeynî şewitandina nîtrojenê (N2) ew exotermîk e."
      },
      "trap": {
        "tr": "Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.",
        "en": "All combustion reactions give off heat, there are no exceptions.",
        "de": "Alle Verbrennungsreaktionen geben Wärme ab, es gibt keine Ausnahmen.",
        "fr": "Toutes les réactions de combustion dégagent de la chaleur, il n'y a pas d'exception.",
        "ru": "Все реакции горения выделяют тепло, исключений нет.",
        "ar": "جميع تفاعلات الاحتراق تطلق حرارة، ولا توجد استثناءات.",
        "zh": "所有燃烧反应都会放出热量，无一例外。",
        "ku": "Hemî reaksiyonên şewitandinê germê didin, îstîsna tune."
      },
      "osymTip": {
        "tr": "N2 gazının yanması endotermiktir!",
        "en": "The burning of N2 gas is endothermic!",
        "de": "Die Verbrennung von N2-Gas ist endotherm!",
        "fr": "La combustion du gaz N2 est endothermique !",
        "ru": "Горение газа N2 эндотермическое!",
        "ar": "احتراق غاز N2 ماص للحرارة!",
        "zh": "N2气体的燃烧是吸热的！",
        "ku": "Şewitandina gaza N2 endotermîk e!"
      }
    },
    {
      "id": "u07-f02",
      "fact": {
        "tr": "Asit-baz nötralleşme tepkimelerinde asitten gelen H+ ile bazdan gelen OH- birleşerek su (H2O) oluşturur.",
        "en": "In acid-base neutralization reactions, H+ from the acid and OH- from the base combine to form water (H2O).",
        "de": "Bei Säure-Base-Neutralisationsreaktionen verbinden sich H+ aus der Säure und OH- aus der Base zu Wasser (H2O).",
        "fr": "Dans les réactions de neutralisation acide-base, H+ de l’acide et OH- de la base se combinent pour former de l’eau (H2O).",
        "ru": "В реакциях кислотно-щелочной нейтрализации H+ кислоты и OH- основания объединяются с образованием воды (H2O).",
        "ar": "في تفاعلات معادلة الحمض مع القاعدة، يتحد H+ من الحمض و OH- من القاعدة لتكوين الماء (H2O).",
        "zh": "在酸碱中和反应中，酸中的 H+ 和碱中的 OH- 结合形成水 (H2O)。",
        "ku": "Di reaksiyonên bêbandorkirina asîd-bazê de H+ ji asîdê û OH- ji bazê bi hev re dibin avê (H2O)."
      },
      "trap": {
        "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
        "en": "In all acid-base reactions, salt and water are formed together.",
        "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
        "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
        "ru": "Во всех кислотно-основных реакциях соль и вода образуются вместе.",
        "ar": "في جميع التفاعلات الحمضية القاعدية، يتكون الملح والماء معًا.",
        "zh": "在所有酸碱反应中，盐和水都会一起形成。",
        "ku": "Di hemû reaksiyonên asîd-bazê de xwê û av bi hev re çêdibin."
      },
      "osymTip": {
        "tr": "Susuz baz NH3 ile tepkimede sadece tuz oluşur, su çıkmaz!",
        "en": "In the reaction with anhydrous base NH3, only salt is formed, no water is produced!",
        "de": "Bei der Reaktion mit der wasserfreien Base NH3 entsteht nur Salz, es entsteht kein Wasser!",
        "fr": "Lors de la réaction avec la base anhydre NH3, seul du sel se forme, aucune eau n’est produite !",
        "ru": "В реакции с безводным основанием NH3 образуется только соль, вода не образуется!",
        "ar": "في التفاعل مع القاعدة اللامائية NH3، يتكون الملح فقط، ولا يتم إنتاج الماء!",
        "zh": "与无水碱NH3反应，只生成盐，不生成水！",
        "ku": "Di reaksiyona bi bingeha bêhîdro NH3 de, tenê xwê çêdibe, av çênabe!"
      }
    },
    {
      "id": "u07-f03",
      "fact": {
        "tr": "Sentez (oluşum) tepkimesinde iki veya daha fazla madde birleşerek tek bir bileşik meydana getirir.",
        "en": "In a synthesis reaction, two or more substances combine to form a single compound.",
        "de": "Bei einer Synthesereaktion verbinden sich zwei oder mehr Stoffe zu einer einzigen Verbindung.",
        "fr": "Dans une réaction de synthèse, deux ou plusieurs substances se combinent pour former un seul composé.",
        "ru": "В реакции синтеза два или более веществ соединяются с образованием одного соединения.",
        "ar": "في تفاعل التوليف، تتحد مادتان أو أكثر لتكوين مركب واحد.",
        "zh": "在合成反应中，两种或多种物质结合形成单一化合物。",
        "ku": "Di reaksiyonek sentezê de, du an zêdetir madde bi hev re dibin yek pêkhateyek."
      },
      "trap": {
        "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
        "en": "It is a synthesis reaction in which a single compound is broken down into smaller substances.",
        "de": "Es handelt sich um eine Synthesereaktion, bei der eine einzelne Verbindung in kleinere Substanzen zerlegt wird.",
        "fr": "Il s’agit d’une réaction de synthèse dans laquelle un seul composé est décomposé en substances plus petites.",
        "ru": "Это реакция синтеза, при которой одно соединение распадается на более мелкие вещества.",
        "ar": "إنه تفاعل تركيبي يتم فيه تقسيم مركب واحد إلى مواد أصغر.",
        "zh": "这是一种合成反应，其中单一化合物被分解成更小的物质。",
        "ku": "Ew reaksiyonek sentezek e ku tê de yek pêkhateyek di nav maddeyên piçûktir de tê perçe kirin."
      }
    },
    {
      "id": "u07-f04",
      "fact": {
        "tr": "Analiz (ayrışma) tepkimesinde bir bileşik ısı veya elektrik enerjisiyle daha basit maddelere ayrışır.",
        "en": "In a decomposition reaction, a compound is broken down into simpler substances by heat or electrical energy.",
        "de": "Bei einer Zersetzungsreaktion wird eine Verbindung durch Wärme oder elektrische Energie in einfachere Stoffe zerlegt.",
        "fr": "Lors d’une réaction de décomposition, un composé est décomposé en substances plus simples par la chaleur ou l’énergie électrique.",
        "ru": "В реакции разложения соединение распадается на более простые вещества под действием тепла или электрической энергии.",
        "ar": "في تفاعل التحلل، يتم تقسيم المركب إلى مواد أبسط عن طريق الحرارة أو الطاقة الكهربائية.",
        "zh": "在分解反应中，化合物通过热或电能分解成更简单的物质。",
        "ku": "Di reaksiyonek hilweşandinê de, pêkhateyek ji hêla germê an enerjiya elektrîkê ve di nav maddeyên hêsan de tê perçe kirin."
      },
      "trap": {
        "tr": "Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.",
        "en": "Analysis reactions always occur spontaneously and exothermically.",
        "de": "Analysereaktionen laufen immer spontan und exotherm ab.",
        "fr": "Les réactions d'analyse se produisent toujours de manière spontanée et exothermique.",
        "ru": "Реакции анализа всегда протекают спонтанно и экзотермически.",
        "ar": "تحدث تفاعلات التحليل دائمًا بشكل عفوي وطارد للحرارة.",
        "zh": "分析反应总是自发且放热地发生。",
        "ku": "Reaksiyonên analîzê her gav bi spontan û exotermîk çêdibin."
      }
    },
    {
      "id": "u07-f05",
      "fact": {
        "tr": "Çözünme-çökelme tepkimesinde iki sulu çözelti karıştırıldığında suda az çözünen katı bir çökelti oluşur.",
        "en": "In a dissolution-precipitation reaction, when two aqueous solutions are mixed, a solid precipitate that is slightly soluble in water is formed.",
        "de": "Bei einer Lösungs-Fällungs-Reaktion entsteht beim Mischen zweier wässriger Lösungen ein fester Niederschlag, der in Wasser schwer löslich ist.",
        "fr": "Dans une réaction de dissolution-précipitation, lorsque deux solutions aqueuses sont mélangées, un précipité solide légèrement soluble dans l'eau se forme.",
        "ru": "В реакции растворения-осаждения при смешивании двух водных растворов образуется твердый осадок, малорастворимый в воде.",
        "ar": "في تفاعل الذوبان والترسيب، عندما يتم خلط محلولين مائيين، يتكون راسب صلب قابل للذوبان قليلاً في الماء.",
        "zh": "在溶解-沉淀反应中，当两种水溶液混合时，会形成微溶于水的固体沉淀物。",
        "ku": "Di reaksiyoneke helbûn-barînê de, dema ku du çareseriyên avî tevlî hev dibin, barîneke zexm a ku hinekî di avê de tê çareserkirin çê dibe."
      },
      "trap": {
        "tr": "Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.",
        "en": "The precipitate formed in the dissolution-precipitation reaction consists of spectator ions.",
        "de": "Der bei der Auflösungs-Fällungsreaktion gebildete Niederschlag besteht aus Zuschauerionen.",
        "fr": "Le précipité formé lors de la réaction de dissolution-précipitation est constitué d'ions spectateurs.",
        "ru": "Осадок, образующийся в реакции растворения-осаждения, состоит из ионов-спектаторов.",
        "ar": "يتكون الراسب المتكون في تفاعل الذوبان والترسيب من أيونات متفرجة.",
        "zh": "溶解-沉淀反应中形成的沉淀物由旁观者离子组成。",
        "ku": "Barîna ku di reaksiyona belavbûn-barînê de çêdibe ji îyonên temaşevanan pêk tê."
      }
    },
    {
      "id": "u07-f06",
      "fact": {
        "tr": "Çözünme-çökelme tepkimesinde net iyon denklemi katı çökeltiyi oluşturan iyonlara göre yazılır.",
        "en": "In the dissolution-precipitation reaction, the net ion equation is written according to the ions that form the solid precipitate.",
        "de": "Bei der Auflösungs-Ausfällungs-Reaktion wird die Nettoionengleichung entsprechend den Ionen geschrieben, die den festen Niederschlag bilden.",
        "fr": "Dans la réaction de dissolution-précipitation, l’équation nette des ions s’écrit en fonction des ions qui forment le précipité solide.",
        "ru": "В реакции растворения-осаждения суммарное ионное уравнение записывается в соответствии с ионами, образующими твердый осадок.",
        "ar": "في تفاعل الذوبان والترسيب، تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات التي تشكل الراسب الصلب.",
        "zh": "在溶解-沉淀反应中，根据形成固体沉淀物的离子编写净离子方程。",
        "ku": "Di reaksiyona belavbûn-barînê de hevkêşeya îyonê ya tevn li gorî îyonên ku barîna hişk pêk tînin tê nivîsandin."
      },
      "trap": {
        "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
        "en": "The net ion equation is written according to the spectator ions remaining in the solution.",
        "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
        "fr": "L'équation des ions nets s'écrit en fonction des ions spectateurs restant dans la solution.",
        "ru": "Чистое ионное уравнение записывается в соответствии с ионами-спектаторами, оставшимися в растворе.",
        "ar": "تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات المتفرجة المتبقية في المحلول.",
        "zh": "根据溶液中剩余的观察者离子编写净离子方程。",
        "ku": "Li gorî îyonên temaşeker ên ku di çareseriyê de mane hevkêşeya îyonên tevniv tê nivîsandin."
      }
    },
    {
      "id": "u07-f07",
      "fact": {
        "tr": "Sınırlayıcı bileşen, tepkimede ilk tükenen ve oluşan ürün miktarını belirleyen reaktiftir.",
        "en": "The limiting component is the reactant that is consumed first in the reaction and determines the amount of product formed.",
        "de": "Die limitierende Komponente ist der Reaktant, der bei der Reaktion zuerst verbraucht wird und die Menge des gebildeten Produkts bestimmt.",
        "fr": "Le composant limitant est le réactif qui est consommé en premier dans la réaction et qui détermine la quantité de produit formé.",
        "ru": "Лимитирующим компонентом является реагент, который расходуется в реакции первым и определяет количество образующегося продукта.",
        "ar": "المكون المحدد هو المادة المتفاعلة التي يتم استهلاكها أولاً في التفاعل وتحدد كمية المنتج المتكون.",
        "zh": "限制组分是在反应中首先消耗的反应物并决定形成的产物的量。",
        "ku": "Hêmana sînordar reaktant e ku pêşî di reaksiyonê de tê vexwarin û mîqdara hilbera çêkirî diyar dike."
      },
      "trap": {
        "tr": "Sınırlayıcı bileşen kütlesi en az olan maddedir.",
        "en": "The limiting component is the substance with the least mass.",
        "de": "Die limitierende Komponente ist der Stoff mit der geringsten Masse.",
        "fr": "Le composant limitant est la substance ayant la plus petite masse.",
        "ru": "Лимитирующим компонентом является вещество с наименьшей массой.",
        "ar": "العنصر المحدد هو المادة ذات الكتلة الأقل.",
        "zh": "限制成分是质量最小的物质。",
        "ku": "Hêmana sînordar maddeya bi girseya herî kêm e."
      }
    },
    {
      "id": "u07-f08",
      "fact": {
        "tr": "Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.",
        "en": "Percentage yield is calculated with the formula = (Actual Yield / Theoretical Yield) x 100.",
        "de": "Der prozentuale Ertrag wird mit der Formel = (tatsächlicher Ertrag / theoretischer Ertrag) x 100 berechnet.",
        "fr": "Le rendement en pourcentage est calculé avec la formule = (Rendement réel / Rendement théorique) x 100.",
        "ru": "Процентный выход рассчитывается по формуле = (Фактический выход / Теоретический выход) x 100.",
        "ar": "يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.",
        "zh": "百分产率的计算公式为 =（实际产量/理论产量）x 100。",
        "ku": "Berhema ji sedî bi formula = (Berhema Rastîn / Berhema Teorîk) x 100 tê hesibandin."
      },
      "trap": {
        "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
        "en": "The actual yield is always greater than the theoretical yield.",
        "de": "Die tatsächliche Ausbeute ist immer größer als die theoretische Ausbeute.",
        "fr": "Le rendement réel est toujours supérieur au rendement théorique.",
        "ru": "Фактический выход всегда больше теоретического выхода.",
        "ar": "العائد الفعلي دائمًا أكبر من العائد النظري.",
        "zh": "实际产量总是大于理论产量。",
        "ku": "Berhema rastîn her gav ji berhema teorîk mezintir e."
      }
    },
    {
      "id": "u07-f09",
      "fact": {
        "tr": "Hidrokarbonlar (CxHy) tam yandıklarında yalnızca CO2 ve H2O oluşturur.",
        "en": "Hydrocarbons (CxHy) produce only CO2 and H2O when completely burned.",
        "de": "Kohlenwasserstoffe (CxHy) erzeugen bei vollständiger Verbrennung nur CO2 und H2O.",
        "fr": "Les hydrocarbures (CxHy) ne produisent que du CO2 et du H2O lorsqu'ils sont complètement brûlés.",
        "ru": "Углеводороды (CxHy) при полном сгорании производят только CO2 и H2O.",
        "ar": "تنتج الهيدروكربونات (CxHy) ثاني أكسيد الكربون وH2O فقط عند حرقها بالكامل.",
        "zh": "碳氢化合物 (CxHy) 完全燃烧时仅产生 CO2 和 H2O。",
        "ku": "Hîdrokarbon (CxHy) dema bi tevahî dişewitin tenê CO2 û H2O derdixin."
      },
      "trap": {
        "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
        "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
        "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
        "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
        "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
        "ar": "عند احتراق الهيدروكربونات، ينطلق غاز H2 مع ثاني أكسيد الكربون.",
        "zh": "当碳氢化合物燃烧时，氢气与二氧化碳一起释放。",
        "ku": "Dema ku hîdrokarbon dişewitin, gaza H2 ligel CO2 derdikeve."
      }
    },
    {
      "id": "u07-f10",
      "fact": {
        "tr": "Tepkimede kütle, atom sayısı ve türü, toplam proton, nötron ve elektron sayısı daima korunur.",
        "en": "In the reaction, mass, number and type of atoms, and total number of protons, neutrons, and electrons are always conserved.",
        "de": "Bei der Reaktion bleiben Masse, Anzahl und Art der Atome sowie die Gesamtzahl der Protonen, Neutronen und Elektronen stets erhalten.",
        "fr": "Dans la réaction, la masse, le nombre et le type d’atomes ainsi que le nombre total de protons, de neutrons et d’électrons sont toujours conservés.",
        "ru": "В реакции всегда сохраняются масса, количество и тип атомов, а также общее число протонов, нейтронов и электронов.",
        "ar": "في التفاعل، يتم دائمًا حفظ الكتلة وعدد ونوع الذرات والعدد الإجمالي للبروتونات والنيوترونات والإلكترونات.",
        "zh": "在反应中，原子的质量、数量和类型以及质子、中子和电子的总数始终守恒。",
        "ku": "Di reaksiyonê de, girse, hejmar û celeb atoman, û hejmara giştî ya proton, notron û elektronan her dem têne parastin."
      },
      "trap": {
        "tr": "Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.",
        "en": "In all chemical reactions, the number of molecules and the gas volume are always conserved.",
        "de": "Bei allen chemischen Reaktionen bleiben die Anzahl der Moleküle und das Gasvolumen stets erhalten.",
        "fr": "Dans toutes les réactions chimiques, le nombre de molécules et le volume de gaz sont toujours conservés.",
        "ru": "Во всех химических реакциях число молекул и объем газа всегда сохраняются.",
        "ar": "في جميع التفاعلات الكيميائية، يظل عدد الجزيئات وحجم الغاز محفوظين دائمًا.",
        "zh": "在所有化学反应中，分子数和气体体积始终守恒。",
        "ku": "Di hemû reaksiyonên kîmyewî de, hejmara molekulan û qebareya gazê timî tê parastin."
      }
    },
    {
      "id": "u07-f11",
      "fact": {
        "tr": "Artan madde hesabı için tepkimeye girenlerin mol sayıları katsayılarına bölünerek sınırlayıcı madde bulunur.",
        "en": "To calculate the residual substance, the limiting substance is found by dividing the number of moles of the reactants by their coefficients.",
        "de": "Zur Berechnung der Restsubstanz wird die limitierende Substanz ermittelt, indem die Molzahl der Reaktanten durch deren Koeffizienten dividiert wird.",
        "fr": "Pour calculer la substance résiduelle, la substance limitante est trouvée en divisant le nombre de moles des réactifs par leurs coefficients.",
        "ru": "Для расчета остаточного вещества предельное вещество находят путем деления количества молей реагирующих веществ на их коэффициенты.",
        "ar": "لحساب المادة المتبقية، يتم العثور على المادة المحددة عن طريق قسمة عدد مولات المواد المتفاعلة على معاملاتها.",
        "zh": "为了计算残留物质，通过将反应物的摩尔数除以它们的系数来找到限制物质。",
        "ku": "Ji bo hesabkirina maddeya mayî, maddeya sînordar bi dabeşkirina hejmara molên reaktantan li ser hevberên wan tê dîtin."
      },
      "trap": {
        "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
        "en": "Whichever substance has the most moles, that substance runs out first.",
        "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
        "fr": "La substance qui a le plus grand nombre de moles s'épuise en premier.",
        "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
        "ar": "المادة التي لديها أكبر عدد من المولات هي التي تنفد أولاً.",
        "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
        "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
      }
    },
    {
      "id": "u07-f12",
      "fact": {
        "tr": "Saflık yüzdesi = (Saf Madde Kütlesi / Numune Kütlesi) x 100'dür.",
        "en": "Purity percentage = (Pure Substance Mass / Sample Mass) x 100.",
        "de": "Reinheitsprozentsatz = (Reinstoffmasse / Probenmasse) x 100.",
        "fr": "Pourcentage de pureté = (Masse de substance pure / Masse d'échantillon) x 100.",
        "ru": "Процент чистоты = (масса чистого вещества / масса образца) x 100.",
        "ar": "نسبة النقاء = (كتلة المادة النقية / كتلة العينة) × 100.",
        "zh": "纯度百分比 =（纯物质质量/样品质量）x 100。",
        "ku": "Rêjeya paqijiyê = (Kirsa madeya paqij / girseya nimûne) x 100."
      },
      "trap": {
        "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
        "en": "When calculating the purity rate, the impurity part of the sample is assumed to react.",
        "de": "Bei der Berechnung der Reinheitsrate wird davon ausgegangen, dass der Verunreinigungsanteil der Probe reagiert.",
        "fr": "Lors du calcul du taux de pureté, la partie impureté de l’échantillon est supposée réagir.",
        "ru": "При расчете степени чистоты предполагается, что примесная часть образца вступает в реакцию.",
        "ar": "عند حساب معدل النقاء، يفترض أن جزء الشوائب من العينة يتفاعل.",
        "zh": "计算纯度时，假设样品的杂质部分发生反应。",
        "ku": "Dema ku rêjeya paqijiyê tê hesibandin, beşa nepakî ya nimûneyê tê texmîn kirin ku bertek nîşan dide."
      }
    },
    {
      "id": "u07-f13",
      "fact": {
        "tr": "Demirin paslanması (4Fe + 3O2 -> 2Fe2O3) alevsiz yavaş yanmaya örnektir.",
        "en": "Rusting of iron (4Fe + 3O2 -> 2Fe2O3) is an example of slow flameless combustion.",
        "de": "Das Rosten von Eisen (4Fe + 3O2 -> 2Fe2O3) ist ein Beispiel für eine langsame flammenlose Verbrennung.",
        "fr": "La rouille du fer (4Fe + 3O2 -> 2Fe2O3) est un exemple de combustion lente sans flamme.",
        "ru": "Ржавление железа (4Fe + 3O2 -> 2Fe2O3) является примером медленного беспламенного горения.",
        "ar": "صدأ الحديد (4Fe + 3O2 -> 2Fe2O3) هو مثال على الاحتراق البطيء عديم اللهب.",
        "zh": "铁生锈（4Fe + 3O2 -> 2Fe2O3）是缓慢无焰燃烧的一个例子。",
        "ku": "Zengarbûna hesin (4Fe + 3O2 -> 2Fe2O3) mînaka şewitandina hêdî ya bê agir e."
      },
      "trap": {
        "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
        "en": "Rusting of iron is a physical dissolution phenomenon.",
        "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
        "fr": "La rouille du fer est un phénomène de dissolution physique.",
        "ru": "Ржавление железа – это явление физического растворения.",
        "ar": "صدأ الحديد هو ظاهرة انحلال فيزيائي.",
        "zh": "铁的生锈是一种物理溶解现象。",
        "ku": "Zengarbûna hesin diyardeyeke fîzîkî ya helbûnê ye."
      }
    },
    {
      "id": "u07-f14",
      "fact": {
        "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde seyirci iyonlar Na+ ve NO3-'dır.",
        "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), the spectator ions are Na+ and NO3-.",
        "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind die Zuschauerionen Na+ und NO3-.",
        "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), les ions spectateurs sont Na+ et NO3-.",
        "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Na+ и NO3-.",
        "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، تكون الأيونات المتفرجة Na+ وNO3-.",
        "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，旁观离子是 Na+ 和 NO3-。",
        "ku": "Di reaksiyonê de AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), îyonên temaşeker Na+ û NO3- in."
      },
      "trap": {
        "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde Ag+ ve Cl- seyirci iyonlardır.",
        "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ and Cl- are spectator ions.",
        "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind Ag+ und Cl- Zuschauerionen.",
        "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ et Cl- sont des ions spectateurs.",
        "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Ag+ и Cl-.",
        "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، يكون Ag+ وCl- أيونين متفرجين.",
        "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，Ag+ 和 Cl- 是旁观离子。",
        "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) de Ag+ û Cl- îyonên temaşeker in."
      }
    },
    {
      "id": "u07-f15",
      "fact": {
        "tr": "Eşit mol sayıda girenlerin tepkimesinde katsayısı büyük olan reaktif sınırlayıcı bileşendir.",
        "en": "In the reaction of equal molar numbers of reactants, the reagent with the highest coefficient is the limiting component.",
        "de": "Bei der Reaktion gleicher Molzahlen von Reaktanten ist das Reagens mit dem höchsten Koeffizienten die limitierende Komponente.",
        "fr": "Dans la réaction de nombres molaires égaux de réactifs, le réactif avec le coefficient le plus élevé est le composant limitant.",
        "ru": "В реакции равного мольного числа реагентов лимитирующим компонентом является реагент с наибольшим коэффициентом.",
        "ar": "في تفاعل الأعداد المولية المتساوية من المواد المتفاعلة، يكون الكاشف ذو المعامل الأعلى هو المكون المحدد.",
        "zh": "在等摩尔数反应物的反应中，系数最高的试剂是限制组分。",
        "ku": "Di reaksiyona hejmarên molar ên reaktantên wekhev de, reagenta bi rêjeya herî bilind pêkhateya sînordar e."
      },
      "trap": {
        "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
        "en": "When equal moles are taken, the reagent with the smaller coefficient is consumed first.",
        "de": "Bei gleichen Molmengen wird zuerst das Reagens mit dem kleineren Koeffizienten verbraucht.",
        "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
        "ru": "При равных молях первым расходуется реагент с меньшим коэффициентом.",
        "ar": "عند أخذ مولات متساوية، يتم استهلاك الكاشف ذو المعامل الأصغر أولاً.",
        "zh": "当等摩尔时，系数较小的试剂先被消耗。",
        "ku": "Dema ku molên wekhev têne girtin, pêşî reagenta bi rêjeya piçûktir tê vexwarin."
      }
    },
    {
      "id": "u07-f16",
      "fact": {
        "tr": "Gaz tepkimelerinde aynı sıcaklık ve basınçta hacim oranları mol oranlarına eşittir (Gay-Lussac).",
        "en": "In gas reactions, volume ratios are equal to mole ratios at the same temperature and pressure (Gay-Lussac).",
        "de": "Bei Gasreaktionen sind die Volumenverhältnisse gleich den Molverhältnissen bei gleicher Temperatur und gleichem Druck (Gay-Lussac).",
        "fr": "Dans les réactions gazeuses, les rapports volumiques sont égaux aux rapports molaires à la même température et pression (Gay-Lussac).",
        "ru": "В газовых реакциях объемные соотношения равны мольным соотношениям при одинаковых температуре и давлении (Гей-Люссак).",
        "ar": "في تفاعلات الغازات، تكون النسب الحجمية مساوية للنسب المولية عند نفس درجة الحرارة والضغط (جاي-لوساك).",
        "zh": "在气体反应中，在相同温度和压力下，体积比等于摩尔比（盖-吕萨克）。",
        "ku": "Di reaksiyonên gazê de, rêjeyên qebareyê bi rêjeyên molê yên di heman germahî û zextê de wekhev in (Gay-Lussac)."
      },
      "trap": {
        "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
        "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
        "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
        "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
        "ru": "В газовых реакциях общий объем реагентов всегда равен общему объему продуктов.",
        "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
        "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
        "ku": "Di reaksiyonên gazê de, qebareya giştî ya reaktantan her dem bi qebareya giştî ya hilberan re wekhev e."
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
        "fr": "synthèse",
        "ru": "синтез",
        "ar": "التوليف",
        "zh": "合成",
        "ku": "sentez"
      },
      "conceptB": {
        "tr": "Analiz",
        "en": "Analysis",
        "de": "Analyse",
        "fr": "Analyse",
        "ru": "Анализ",
        "ar": "التحليل",
        "zh": "分析",
        "ku": "Analîz"
      },
      "distinction": {
        "tr": "Sentez maddelerin birleşerek tek ürün vermesi; analiz tek bileşiğin parçalanarak ayrışmasıdır.",
        "en": "In synthesis, substances combine to give a single product; analysis is the breakdown of a single compound.",
        "de": "Bei der Synthese verbinden sich Stoffe zu einem einzigen Produkt; die Analyse ist die Zerlegung einer einzelnen Verbindung.",
        "fr": "Dans la synthèse, des substances se combinent pour donner un seul produit ; l'analyse est la décomposition d'un seul composé.",
        "ru": "При синтезе вещества соединяются в один продукт; анализ — это разложение одного соединения.",
        "ar": "في التركيب تتحد المواد لتعطي ناتجًا واحدًا؛ والتحليل هو تفكك مركب واحد.",
        "zh": "合成是物质结合生成单一产物；分解（分析）是单一化合物的分解。",
        "ku": "Di sentezê de madde bi hev re dibin yek hilber; analîz perçebûna yek pêkhateyê ye."
      }
    },
    {
      "id": "u07-c02",
      "conceptA": {
        "tr": "Gerçek Verim",
        "en": "Actual Yield",
        "de": "Tatsächlicher Ertrag",
        "fr": "Rendement réel",
        "ru": "Фактический выход",
        "ar": "العائد الفعلي",
        "zh": "实际产量",
        "ku": "Berhema Rastîn"
      },
      "conceptB": {
        "tr": "Teorik Verim",
        "en": "Theoretical Yield",
        "de": "Theoretischer Ertrag",
        "fr": "Rendement théorique",
        "ru": "Теоретический выход",
        "ar": "العائد النظري",
        "zh": "理论产量",
        "ku": "Berhema Teorîk"
      },
      "distinction": {
        "tr": "Teorik verim hesaplanan maksimum verim; gerçek verim deneyde elde edilen net miktardır.",
        "en": "The theoretical yield is the calculated maximum amount of product; the actual yield is the amount actually obtained in the experiment.",
        "de": "Die theoretische Ausbeute ist die berechnete maximale Produktmenge; die tatsächliche Ausbeute ist die im Experiment tatsächlich erhaltene Menge.",
        "fr": "Le rendement théorique est le rendement maximal calculé ; Le rendement réel est le montant net obtenu dans l'expérience.",
        "ru": "Теоретический выход — рассчитанное максимальное количество продукта; фактический выход — количество, реально полученное в эксперименте.",
        "ar": "العائد النظري هو أكبر كمية ناتج محسوبة؛ والعائد الفعلي هو الكمية التي يتم الحصول عليها فعلًا في التجربة.",
        "zh": "理论产量是计算得到的最大产物量；实际产量是实验中实际得到的量。",
        "ku": "Berhema teorîk mîqdara herî zêde ya hilberê ya hesabkirî ye; berhema rastîn mîqdara ku di ceribandinê de bi rastî tê bidestxistin e."
      }
    },
    {
      "id": "u07-c03",
      "conceptA": {
        "tr": "Saflık Yüzdesi",
        "en": "Percent Purity",
        "de": "Reinheit in Prozent",
        "fr": "Pourcentage de pureté",
        "ru": "Процент чистоты",
        "ar": "نسبة النقاء",
        "zh": "纯度百分比",
        "ku": "Rêjeya paqijiyê ya ji sedî"
      },
      "conceptB": {
        "tr": "Yüzde Verim",
        "en": "Percent Yield",
        "de": "Prozentuale Ausbeute",
        "fr": "Rendement en pourcentage",
        "ru": "Процентный выход",
        "ar": "النسبة المئوية للعائد",
        "zh": "百分产率",
        "ku": "Berhema ji sedî"
      },
      "distinction": {
        "tr": "Saflık yüzdesi numunedeki saf madde kütlesinin numune kütlesine oranıdır (x100); yüzde verim gerçekte elde edilen ürün miktarının hesaplanan en fazla ürün miktarına oranıdır (x100).",
        "en": "Percent purity is the ratio of the mass of pure substance to the mass of the sample (x100); percent yield is the ratio of the amount of product actually obtained to the maximum amount of product calculated (x100).",
        "de": "Die Reinheit in Prozent ist das Verhältnis der Masse des reinen Stoffes zur Masse der Probe (x100); die prozentuale Ausbeute ist das Verhältnis der tatsächlich erhaltenen Produktmenge zur berechneten maximalen Produktmenge (x100).",
        "fr": "Le pourcentage de pureté est le rapport de la masse de substance pure à la masse de l'échantillon (x100) ; le rendement en pourcentage est le rapport de la quantité de produit réellement obtenue à la quantité maximale de produit calculée (x100).",
        "ru": "Процент чистоты — это отношение массы чистого вещества к массе образца (x100); процентный выход — это отношение реально полученного количества продукта к рассчитанному максимальному количеству продукта (x100).",
        "ar": "نسبة النقاء هي نسبة كتلة المادة النقية إلى كتلة العينة (x100)؛ والنسبة المئوية للعائد هي نسبة كمية الناتج التي حُصل عليها فعلًا إلى أكبر كمية ناتج محسوبة (x100).",
        "zh": "纯度百分比是纯物质质量与样品质量之比（x100）；百分产率是实际得到的产物量与计算出的最大产物量之比（x100）。",
        "ku": "Rêjeya paqijiyê ya ji sedî rêjeya girseya madeya paqij li girseya nimûneyê ye (x100); berhema ji sedî rêjeya mîqdara hilberê ya bi rastî hatî bidestxistin li mîqdara herî zêde ya hesabkirî ye (x100)."
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
        "ar": "رد فعل طارد للحرارة",
        "zh": "放热反应",
        "ku": "Reaksiyona Exotermîk"
      },
      "conceptB": {
        "tr": "Endotermik Tepkime",
        "en": "Endothermic Reaction",
        "de": "Endotherme Reaktion",
        "fr": "Réaction endothermique",
        "ru": "Эндотермическая реакция",
        "ar": "رد فعل ماص للحرارة",
        "zh": "吸热反应",
        "ku": "Reaksiyona Endotermîk"
      },
      "distinction": {
        "tr": "Ekzotermik tepkimeler dışarıya ısı verir; endotermik tepkimeler ortamdan ısı alarak gerçekleşir.",
        "en": "Exothermic reactions release heat; Endothermic reactions occur by taking heat from the environment.",
        "de": "Exotherme Reaktionen setzen Wärme frei; Endotherme Reaktionen treten auf, indem der Umgebung Wärme entzogen wird.",
        "fr": "Les réactions exothermiques libèrent de la chaleur ; Les réactions endothermiques se produisent en captant la chaleur de l'environnement.",
        "ru": "Экзотермические реакции выделяют тепло; Эндотермические реакции происходят за счет отбора тепла из окружающей среды.",
        "ar": "التفاعلات الطاردة للحرارة تطلق الحرارة؛ تحدث التفاعلات الماصة للحرارة عن طريق أخذ الحرارة من البيئة.",
        "zh": "放热反应放出热量；吸热反应通过从环境中吸收热量而发生。",
        "ku": "Reaksiyonên ezotermîk germê berdidin; Reaksiyonên endotermîk bi hilgirtina germê ji jîngehê pêk tên."
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
        "ru": "Избыточный реагент",
        "ar": "المادة الفائضة",
        "zh": "过量反应物",
        "ku": "Reaktanta zêde"
      },
      "distinction": {
        "tr": "Sınırlayıcı bileşen tepkimede ilk önce tükenen ve ürün miktarını belirleyen maddedir; artan madde tepkime bittiğinde artakalandır.",
        "en": "The limiting component is the substance that is consumed first in the reaction and determines the amount of product; The residue is what remains after the reaction is over.",
        "de": "Die limitierende Komponente ist die Substanz, die bei der Reaktion zuerst verbraucht wird und die Produktmenge bestimmt; Der Rückstand ist das, was nach Beendigung der Reaktion übrig bleibt.",
        "fr": "Le composant limitant est la substance qui est consommée en premier dans la réaction et qui détermine la quantité de produit ; Le résidu est ce qui reste une fois la réaction terminée.",
        "ru": "Лимитирующий компонент — вещество, которое расходуется в реакции первым и определяет количество продукта; Остаток – это то, что остается после окончания реакции.",
        "ar": "العنصر المحدد هو المادة التي يتم استهلاكها أولاً في التفاعل وتحدد كمية المنتج؛ والباقي هو ما يبقى بعد انتهاء التفاعل.",
        "zh": "限制组分是反应中首先消耗的物质，决定产物的量；残留物是反应结束后剩下的东西。",
        "ku": "Hêmana sînordar ew maddeya ku pêşî di reaksiyonê de tê vexwarin û mîqdara hilberê diyar dike; Bermahî ew e ku piştî bidawîbûna reaksiyonê dimîne."
      }
    },
    {
      "id": "u07-c06",
      "conceptA": {
        "tr": "Net İyon Denklemi",
        "en": "Net Ion Equation",
        "de": "Nettoionengleichung",
        "fr": "Équation des ions nets",
        "ru": "Чистое ионное уравнение",
        "ar": "معادلة صافي الأيونات",
        "zh": "净离子方程",
        "ku": "Wekheviya Net Ion"
      },
      "conceptB": {
        "tr": "Seyirci İyonlar",
        "en": "Spectator Ions",
        "de": "Zuschauerionen",
        "fr": "Ions spectateurs",
        "ru": "Ионы-спектаторы",
        "ar": "الأيونات المتفرجة",
        "zh": "旁观离子",
        "ku": "Îyonên temaşeker"
      },
      "distinction": {
        "tr": "Net iyon denklemi çöken katıyı veya oluşan suyu gösterir; seyirci iyonlar çözeltide değişmeden kalan iyonlardır.",
        "en": "The net ionic equation shows the solid precipitated or water formed; Spectator ions are ions that remain unchanged in solution.",
        "de": "Die Nettoionengleichung zeigt den ausgefällten Feststoff bzw. das gebildete Wasser; Zuschauerionen sind Ionen, die in Lösung unverändert bleiben.",
        "fr": "L'équation ionique nette montre le solide précipité ou l'eau formée ; Les ions spectateurs sont des ions qui restent inchangés en solution.",
        "ru": "Чистое ионное уравнение показывает выпавшее твердое вещество или образовавшуюся воду; Ионы-спектаторы — это ионы, которые остаются неизменными в растворе.",
        "ar": "توضح المعادلة الأيونية الصافية المادة الصلبة المترسبة أو الماء المتكون؛ الأيونات المتفرجة هي أيونات تبقى دون تغيير في المحلول.",
        "zh": "净离子方程显示固体沉淀或形成水；观察者离子是在溶液中保持不变的离子。",
        "ku": "Wekheviya îyonî ya tevn tîrêjê barkirî an ava çêbûyî nîşan dide; Îyonên temaşeker îyonên ku di çareseriyê de neguherî dimînin."
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
        "ar": "رد فعل الاحتراق",
        "zh": "燃烧反应",
        "ku": "Reaksiyona şewitandinê"
      },
      "conceptB": {
        "tr": "Asit-Baz Nötralleşmesi",
        "en": "Acid-Base Neutralization",
        "de": "Säure-Base-Neutralisierung",
        "fr": "Neutralisation acido-basique",
        "ru": "Кислотно-щелочная нейтрализация",
        "ar": "تحييد الحمض القاعدي",
        "zh": "酸碱中和",
        "ku": "Asîd-Bas Neutralization"
      },
      "distinction": {
        "tr": "Yanma O2 gazı ile gerçekleşen redoks olayıdır; nötralleşme H+ ve OH- iyonlarının su oluşturmasıdır.",
        "en": "Combustion is a redox event that occurs with O2 gas; Neutralization is the formation of water by H+ and OH- ions.",
        "de": "Die Verbrennung ist ein Redox-Ereignis, das bei O2-Gas auftritt; Unter Neutralisation versteht man die Bildung von Wasser durch H+- und OH--Ionen.",
        "fr": "La combustion est un événement redox qui se produit avec le gaz O2 ; La neutralisation est la formation d'eau par les ions H+ et OH-.",
        "ru": "Горение — это окислительно-восстановительное событие, происходящее с газом O2; Нейтрализация – это образование воды ионами H+ и OH-.",
        "ar": "الاحتراق هو حدث الأكسدة والاختزال الذي يحدث مع غاز O2؛ التحييد هو تكوين الماء بواسطة أيونات H+ و OH-.",
        "zh": "燃烧是氧气发生的氧化还原事件；中和是通过 H+ 和 OH- 离子形成水。",
        "ku": "Şewitandin bûyerek redoksê ye ku bi gaza O2 re çêdibe; Bêalîkirin çêbûna avê bi îyonên H+ û OH- e."
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
        "zh": "摩尔比",
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
        "tr": "Denkleştirilmiş tepkimede maddelerin mol oranı katsayılarına eşittir; kütle oranı ise katsayılar mol kütleleriyle çarpılarak bulunur.",
        "en": "In a balanced equation, the mole ratio of the substances equals their coefficients; the mass ratio is found by multiplying the coefficients by the molar masses.",
        "de": "In einer ausgeglichenen Gleichung entspricht das Stoffmengenverhältnis den Koeffizienten; das Massenverhältnis erhält man, indem man die Koeffizienten mit den molaren Massen multipliziert.",
        "fr": "Dans une équation équilibrée, le rapport molaire des substances est égal à leurs coefficients ; le rapport massique s'obtient en multipliant les coefficients par les masses molaires.",
        "ru": "В уравненной реакции мольное соотношение веществ равно их коэффициентам; массовое соотношение находят, умножая коэффициенты на молярные массы.",
        "ar": "في المعادلة الموزونة تساوي النسبة المولية للمواد معاملاتها؛ أما النسبة الكتلية فتُحسب بضرب المعاملات في الكتل المولية.",
        "zh": "在配平的方程式中，各物质的摩尔比等于其系数之比；质量比则由系数乘以各自的摩尔质量求得。",
        "ku": "Di hevkêşeya hevsengkirî de rêjeya molan a maddeyan bi hevberên wan re wekhev e; rêjeya girseyan jî bi lêdana hevberan bi girseyên molar tê dîtin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u07-s01",
      "title": {
        "tr": "Stokiyometrik Problem Çözüm Adımları",
        "en": "Stoichiometric Problem Solution Steps",
        "de": "Schritte zur stöchiometrischen Problemlösung",
        "fr": "Étapes de solution au problème stœchiométrique",
        "ru": "Этапы решения стехиометрической задачи",
        "ar": "خطوات حل المشكلة المتكافئة",
        "zh": "化学计量问题解决步骤",
        "ku": "Pêngavên Çareseriya Pirsgirêka Stoichiometric"
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
          "ru": "Перевести данные количества в моли",
          "ar": "حوّل الكميات المعطاة إلى مولات",
          "zh": "将已知量换算成摩尔数",
          "ku": "Mîqdarên dayî veguherîne molan"
        },
        {
          "tr": "Molü katsayıya bölüp sınırlayıcıyı bul",
          "en": "Divide each mole number by its coefficient to find the limiting reactant",
          "de": "Stoffmengen durch die Koeffizienten teilen und den limitierenden Reaktanten bestimmen",
          "fr": "Diviser le nombre de moles par le coefficient et trouver le réactif limitant",
          "ru": "Разделить число молей на коэффициент и найти лимитирующий реагент",
          "ar": "اقسم عدد المولات على المعامل وحدد المادة المحددة",
          "zh": "用摩尔数除以系数，找出限量反应物",
          "ku": "Hejmara molan li hevberê parve bike û reaktanta sînordar bibîne"
        },
        {
          "tr": "Sınırlayıcı üzerinden ürün molünü ve kütlesini hesapla",
          "en": "Calculate the moles and mass of product from the limiting reactant",
          "de": "Stoffmenge und Masse des Produkts über den limitierenden Reaktanten berechnen",
          "fr": "Calculer le nombre de moles et la masse de produit à partir du réactif limitant",
          "ru": "Рассчитать количество молей и массу продукта по лимитирующему реагенту",
          "ar": "احسب عدد مولات الناتج وكتلته اعتمادًا على المادة المحددة",
          "zh": "根据限量反应物计算产物的摩尔数和质量",
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
        "ru": "Этапы уравнивания реакции",
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
          "ar": "تُكتب صيغ المواد المتفاعلة والنواتج بشكل صحيح",
          "zh": "正确写出反应物和生成物的化学式",
          "ku": "Formulên reaktant û hilberan rast tên nivîsandin"
        },
        {
          "tr": "En çok atom içeren bileşikten başlanır",
          "en": "Start with the compound containing the most atoms",
          "de": "Man beginnt mit der Verbindung, die die meisten Atome enthält",
          "fr": "On commence par le composé qui contient le plus d'atomes",
          "ru": "Начинают с соединения, содержащего больше всего атомов",
          "ar": "يُبدأ بالمركب الذي يحتوي على أكبر عدد من الذرات",
          "zh": "从含原子数最多的化合物开始",
          "ku": "Ji pêkhateya ku herî zêde atom dihewîne tê destpêkirin"
        },
        {
          "tr": "Önce metal ve ametal atomları, en son H ve O atomları eşitlenir",
          "en": "Balance metal and nonmetal atoms first, H and O atoms last",
          "de": "Zuerst werden Metall- und Nichtmetallatome, zuletzt H- und O-Atome ausgeglichen",
          "fr": "On équilibre d'abord les atomes de métaux et de non-métaux, puis en dernier H et O",
          "ru": "Сначала уравнивают атомы металлов и неметаллов, в последнюю очередь — H и O",
          "ar": "تُوازن ذرات الفلزات واللافلزات أولًا، وذرات H وO في النهاية",
          "zh": "先配平金属和非金属原子，最后配平 H 和 O 原子",
          "ku": "Pêşî atomên metal û nemetalan, herî dawî atomên H û O tên wekhevkirin"
        },
        {
          "tr": "Katsayılar en küçük tam sayılara indirgenir",
          "en": "Reduce the coefficients to the smallest whole numbers",
          "de": "Die Koeffizienten werden auf die kleinsten ganzen Zahlen gekürzt",
          "fr": "Les coefficients sont réduits aux plus petits nombres entiers",
          "ru": "Коэффициенты сокращают до наименьших целых чисел",
          "ar": "تُختزل المعاملات إلى أصغر أعداد صحيحة",
          "zh": "将系数化为最简整数",
          "ku": "Hevber bi hejmarên tam ên herî biçûk tên kêmkirin"
        }
      ]
    },
    {
      "id": "u07-s03",
      "title": {
        "tr": "Çözünme-Çökelme ve Net İyon",
        "en": "Dissolution-Precipitation and Net Ion",
        "de": "Auflösungsfällung und Nettoion",
        "fr": "Dissolution-Précipitation et Ion Net",
        "ru": "Растворение-осаждение и чистый ион",
        "ar": "الذوبان والترسيب وصافي الأيونات",
        "zh": "溶解-沉淀和净离子",
        "ku": "Hilweşîn-Berin û Net Ion"
      },
      "steps": [
        {
          "tr": "İki homojen tuz çözeltisi karıştırılır",
          "en": "Two homogeneous salt solutions are mixed",
          "de": "Zwei homogene Salzlösungen werden gemischt",
          "fr": "Deux solutions salines homogènes sont mélangées",
          "ru": "Смешивают два однородных раствора солей.",
          "ar": "يتم خلط محلولين ملحيين متجانسين",
          "zh": "混合两种均匀的盐溶液",
          "ku": "Du çareseriyên xwê yên homojen têne tevlihev kirin"
        },
        {
          "tr": "Katyon ve anyonlar yer değiştirir",
          "en": "Cations and anions exchange places",
          "de": "Kationen und Anionen tauschen ihre Plätze",
          "fr": "Les cations et les anions échangent des places",
          "ru": "Катионы и анионы меняются местами.",
          "ar": "تبادل الكاتيونات والأنيونات الأماكن",
          "zh": "阳离子和阴离子交换位置",
          "ku": "Katyon û anyon cîhên xwe diguherînin"
        },
        {
          "tr": "Az çözünen tuz çökelek halinde katılaşır",
          "en": "Slightly soluble salt solidifies as precipitate",
          "de": "Schwerlösliches Salz verfestigt sich als Niederschlag",
          "fr": "Le sel légèrement soluble se solidifie sous forme de précipité",
          "ru": "Малорастворимая соль затвердевает в виде осадка.",
          "ar": "يتصلب الملح قليل الذوبان على شكل راسب",
          "zh": "微溶盐凝固成沉淀",
          "ku": "Xwêya kêm-helbar wek niştek hişk dinişe"
        },
        {
          "tr": "Çöken katıyı gösteren net iyon denklemi yazılır",
          "en": "The net ionic equation showing the precipitated solid is written",
          "de": "Die Nettoionengleichung, die den ausgefällten Feststoff zeigt, wird geschrieben",
          "fr": "L'équation ionique nette montrant le solide précipité s'écrit",
          "ru": "Чистое ионное уравнение, показывающее выпавшее в осадок твердое вещество, записывается",
          "ar": "يتم كتابة المعادلة الأيونية الصافية التي توضح المادة الصلبة المترسبة",
          "zh": "显示沉淀固体的净离子方程写为",
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
        "ru": "Определение процентного выхода",
        "ar": "تحديد النسبة المئوية للعائد",
        "zh": "百分产率的测定",
        "ku": "Tespîtkirina Ji sedî Berhemê"
      },
      "steps": [
        {
          "tr": "Sınırlayıcı bileşenden teorik ürün hesaplanır",
          "en": "The theoretical product is calculated from the limiting component",
          "de": "Aus dem limitierenden Reaktanten wird die theoretische Produktmenge berechnet",
          "fr": "La quantité théorique de produit est calculée à partir du réactif limitant",
          "ru": "По лимитирующему реагенту рассчитывают теоретическое количество продукта",
          "ar": "تُحسب كمية الناتج النظرية من المادة المحددة",
          "zh": "由限量反应物计算理论产量",
          "ku": "Hilbera teorîk ji pêkhateya sînordar tê hesibandin"
        },
        {
          "tr": "Deneyde fiilen elde edilen gerçek ürün tartılır",
          "en": "The actual product actually obtained in the experiment is weighed",
          "de": "Das im Versuch tatsächlich erhaltene Produkt wird gewogen",
          "fr": "Le produit réellement obtenu lors de l'expérience est pesé",
          "ru": "Фактически полученный в эксперименте продукт взвешивают",
          "ar": "يُوزن الناتج الفعلي الذي تم الحصول عليه في التجربة",
          "zh": "称量实验中实际得到的产物",
          "ku": "Hilbera rastîn a ku di ceribandinê de hatî bidestxistin tê pîvandin"
        },
        {
          "tr": "Gerçek miktar teorik miktara bölünür",
          "en": "Actual amount divided by theoretical amount",
          "de": "Die tatsächliche Menge wird durch die theoretische Menge geteilt",
          "fr": "La quantité réelle est divisée par la quantité théorique",
          "ru": "Фактическое количество делят на теоретическое",
          "ar": "تُقسم الكمية الفعلية على الكمية النظرية",
          "zh": "用实际产量除以理论产量",
          "ku": "Mîqdara rastîn bi mîqdara teorîk ve tê dabeş kirin"
        },
        {
          "tr": "100 ile çarpılarak yüzde verim bulunur",
          "en": "The percent yield is found by multiplying by 100",
          "de": "Durch Multiplikation mit 100 erhält man die prozentuale Ausbeute",
          "fr": "Le rendement en pourcentage est obtenu en multipliant par 100",
          "ru": "Умножением на 100 находят процентный выход",
          "ar": "يُضرب الناتج في 100 للحصول على النسبة المئوية للعائد",
          "zh": "乘以 100 得到百分产率",
          "ku": "Bi lêdana bi 100 berhema ji sedî tê dîtin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u07-twin01",
      "stem": {
        "tr": "C3H8 + 5 O2 -> 3 CO2 + 4 H2O tepkimesine göre 0.2 mol C3H8'in tamamen yanması için normal koşullarda en az kaç litre O2 gazı gereklidir?",
        "en": "According to the reaction C3H8 + 5 O2 -> 3 CO2 + 4 H2O, how many liters of O2 gas are required under normal conditions for the complete combustion of 0.2 mol C3H8?",
        "de": "Wie viele Liter O2-Gas werden gemäß der Reaktion C3H8 + 5 O2 -> 3 CO2 + 4 H2O unter Normalbedingungen für die vollständige Verbrennung von 0,2 mol C3H8 benötigt?",
        "fr": "D'après la réaction C3H8 + 5 O2 -> 3 CO2 + 4 H2O, combien de litres de gaz O2 sont nécessaires dans des conditions normales pour la combustion complète de 0,2 mole de C3H8 ?",
        "ru": "Сколько литров газообразного О2 требуется в нормальных условиях для полного сгорания 0,2 моля С3Н8, согласно реакции С3Н8 + 5 О2 -> 3 СО2 + 4 Н2О?",
        "ar": "وفقًا للتفاعل C3H8 + 5 O2 -> 3 CO2 + 4 H2O، ما عدد لترات غاز O2 المطلوبة في الظروف العادية للاحتراق الكامل لـ 0.2 mol C3H8؟",
        "zh": "根据反应C3H8 + 5 O2 -> 3 CO2 + 4 H2O，正常情况下0.2摩尔C3H8完全燃烧需要多少升O2气体？",
        "ku": "Li gorî reaksiyona C3H8 + 5 O2 -> 3 CO2 + 4 H2O, ji bo bi tevahî şewitandina 0,2 mol C3H8 di şert û mercên normal de çend lître gaza O2 lazim e?"
      },
      "options": [
        {
          "tr": "22.4 L",
          "en": "22.4L",
          "de": "22,4L",
          "fr": "22,4 L",
          "ru": "22,4 л",
          "ar": "22.4 لتر",
          "zh": "22.4升",
          "ku": "22.4L"
        },
        {
          "tr": "11.2 L",
          "en": "11.2L",
          "de": "11,2 l",
          "fr": "11,2 L",
          "ru": "11,2 л",
          "ar": "11.2 لتر",
          "zh": "11.2升",
          "ku": "11.2L"
        },
        {
          "tr": "5.6 L",
          "en": "5.6L",
          "de": "5,6 l",
          "fr": "5,6 L",
          "ru": "5,6 л",
          "ar": "5.6 لتر",
          "zh": "5.6升",
          "ku": "5.6L"
        },
        {
          "tr": "44.8 L",
          "en": "44.8L",
          "de": "44,8 l",
          "fr": "44,8 L",
          "ru": "44,8 л",
          "ar": "44.8 لتر",
          "zh": "44.8升",
          "ku": "44.8L"
        },
        {
          "tr": "2.24 L",
          "en": "2.24L",
          "de": "2,24 l",
          "fr": "2,24 L",
          "ru": "2,24 л",
          "ar": "2.24 لتر",
          "zh": "2.24升",
          "ku": "2.24L"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "1 mol C3H8 için 5 mol O2 gerekir. 0.2 mol C3H8 için 0.2 * 5 = 1.0 mol O2 gerekir. 1 mol gaz NK'da 22.4 L'dir.",
        "en": "5 moles of O2 are required for 1 mole of C3H8. 0.2 mol C3H8 requires 0.2 * 5 = 1.0 mol O2. 1 mole of gas in NC is 22.4 L.",
        "de": "Für 1 Mol C3H8 werden 5 Mol O2 benötigt. 0,2 mol C3H8 erfordern 0,2 * 5 = 1,0 mol O2. 1 Mol Gas in NC entspricht 22,4 l.",
        "fr": "Il faut 5 moles d’O2 pour 1 mole de C3H8. 0,2 mole de C3H8 nécessite 0,2 * 5 = 1,0 mole d'O2. 1 mole de gaz en NC équivaut à 22,4 L.",
        "ru": "На 1 моль C3H8 требуется 5 молей O2. На 0,2 моль C3H8 требуется 0,2*5 = 1,0 моль O2. 1 моль газа в НК равен 22,4 л.",
        "ar": "مطلوب 5 مولات من O2 للحصول على 1 مول من C3H8. 0.2 مول C3H8 يتطلب 0.2 * 5 = 1.0 مول O2. 1 مول من الغاز في NC يساوي 22.4 لتر.",
        "zh": "1 摩尔 C3H8 需要 5 摩尔 O2。 0.2 mol C3H8 需要 0.2 * 5 = 1.0 mol O2。 NC 中 1 摩尔气体为 22.4 L。",
        "ku": "Ji bo 1 mol C3H8 5 mol O2 hewce ne. 0,2 mol C3H8 0,2 * 5 = 1,0 mol O2 hewce dike. 1 mol gazê li NC 22,4 L e."
      }
    },
    {
      "id": "u07-twin02",
      "stem": {
        "tr": "AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) tepkimesi için net iyon denklemi aşağıdakilerden hangisidir?",
        "en": "Which of the following is the net ionic equation for the reaction AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq)?",
        "de": "Welche der folgenden ist die Nettoionengleichung für die Reaktion AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq)?",
        "fr": "Laquelle des formules suivantes est l'équation ionique nette de la réaction AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) ?",
        "ru": "Что из перечисленного является чистым ионным уравнением реакции AgNO3(водн) + KBr(водн) -> AgBr(k) + KNO3(водн)?",
        "ar": "أي مما يلي يمثل المعادلة الأيونية الصافية للتفاعل AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq)؟",
        "zh": "以下哪项是反应 AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) 的净离子方程？",
        "ku": "Kîjan ji yên jêrîn hevkêşeya îyonî ya tevn a reaksiyona AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) e?"
      },
      "options": [
        {
          "tr": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "en": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "de": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "fr": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "ru": "Ag+(вод) + Br-(вод) -> AgBr(k)",
          "ar": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "zh": "Ag+(aq) + Br-(aq) -> AgBr(k)",
          "ku": "Ag+(aq) + Br-(aq) -> AgBr(k)"
        },
        {
          "tr": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "en": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "de": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "fr": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "ru": "K+(вод) + NO3-(вод) -> KNO3(вод)",
          "ar": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "zh": "K+(aq) + NO3-(aq) -> KNO3(aq)",
          "ku": "K+(aq) + NO3-(aq) -> KNO3(aq)"
        },
        {
          "tr": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "en": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "de": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "fr": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "ru": "AgNO3(водн.) -> Ag+(водн.) + NO3-(водн.)",
          "ar": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "zh": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)",
          "ku": "AgNO3(aq) -> Ag+(aq) + NO3-(aq)"
        },
        {
          "tr": "K+(aq) + Br-(aq) -> KBr(k)",
          "en": "K+(aq) + Br-(aq) -> KBr(k)",
          "de": "K+(aq) + Br-(aq) -> KBr(k)",
          "fr": "K+(aq) + Br-(aq) -> KBr(k)",
          "ru": "К+(вод) + Br-(вод) -> KBr(k)",
          "ar": "K+(aq) + Br-(aq) -> KBr(k)",
          "zh": "K+(aq) + Br-(aq) -> KBr(k)",
          "ku": "K+(aq) + Br-(aq) -> KBr(k)"
        },
        {
          "tr": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "en": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "de": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "fr": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "ru": "AgBr(k) -> Ag+(вод) + Br-(вод)",
          "ar": "AgBr(ك) -> Ag+(aq) + Br-(aq)",
          "zh": "AgBr(k) -> Ag+(aq) + Br-(aq)",
          "ku": "AgBr(k) -> Ag+(aq) + Br-(aq)"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Çözünme-çökelme tepkimelerinde net iyon denklemi çöken katı maddeye göre yazılır: Ag+(aq) + Br-(aq) -> AgBr(k).",
        "en": "In dissolution-precipitation reactions, the net ionic equation is written according to the precipitated solid: Ag+(aq) + Br-(aq) -> AgBr(k).",
        "de": "Bei Auflösungs-Fällungsreaktionen wird die Nettoionengleichung entsprechend dem ausgefällten Feststoff geschrieben: Ag+(aq) + Br-(aq) -> AgBr(k).",
        "fr": "Dans les réactions de dissolution-précipitation, l'équation ionique nette s'écrit en fonction du solide précipité : Ag+(aq) + Br-(aq) -> AgBr(k).",
        "ru": "В реакциях растворения-осаждения итоговое ионное уравнение записывается в соответствии с выпавшим твердым веществом: Ag+(водн.) + Br-(водн.) -> AgBr(k).",
        "ar": "في تفاعلات الذوبان والترسيب، تتم كتابة المعادلة الأيونية الصافية وفقًا للمادة الصلبة المترسبة: Ag+(aq) + Br-(aq) -> AgBr(k).",
        "zh": "在溶解-沉淀反应中，根据沉淀固体编写净离子方程：Ag+(aq) + Br-(aq) -> AgBr(k)。",
        "ku": "Di reaksiyonên veqetandin-barînê de hevkêşeya îyonî ya tevn li gora qalinda barkirî tê nivîsandin: Ag+(aq) + Br-(aq) -> AgBr(k)."
      }
    },
    {
      "id": "u07-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimeler ve Hesaplamalar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemical Reactions & Stoichiometry, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemische Reaktionen & Stöchiometrie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Réactions Chimiques & Calculs, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химические реакции и стехиометрия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التفاعلات الكيميائية والحسابات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应与计算”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Reaksiyonên Kîmyewî û Hesab\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
          "en": "The net ion equation is written according to the spectator ions remaining in the solution.",
          "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
          "fr": "L'équation des ions nets s'écrit en fonction des ions spectateurs restant dans la solution.",
          "ru": "Чистое ионное уравнение записывается в соответствии с ионами-спектаторами, оставшимися в растворе.",
          "ar": "تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات المتفرجة المتبقية في المحلول.",
          "zh": "根据溶液中剩余的观察者离子编写净离子方程。",
          "ku": "Li gorî îyonên temaşeker ên ku di çareseriyê de mane hevkêşeya îyonên tevniv tê nivîsandin."
        },
        {
          "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
          "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
          "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
          "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
          "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
          "ar": "عند احتراق الهيدروكربونات، ينطلق غاز H2 مع ثاني أكسيد الكربون.",
          "zh": "当碳氢化合物燃烧时，氢气与二氧化碳一起释放。",
          "ku": "Dema ku hîdrokarbon dişewitin, gaza H2 ligel CO2 derdikeve."
        },
        {
          "tr": "Sentez (oluşum) tepkimesinde iki veya daha fazla madde birleşerek tek bir bileşik meydana getirir.",
          "en": "In a synthesis reaction, two or more substances combine to form a single compound.",
          "de": "Bei einer Synthesereaktion verbinden sich zwei oder mehr Stoffe zu einer einzigen Verbindung.",
          "fr": "Dans une réaction de synthèse, deux ou plusieurs substances se combinent pour former un seul composé.",
          "ru": "В реакции синтеза два или более веществ соединяются с образованием одного соединения.",
          "ar": "في تفاعل التوليف، تتحد مادتان أو أكثر لتكوين مركب واحد.",
          "zh": "在合成反应中，两种或多种物质结合形成单一化合物。",
          "ku": "Di reaksiyonek sentezê de, du an zêdetir madde bi hev re dibin yek pêkhateyek."
        },
        {
          "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
          "en": "When calculating the purity rate, the impurity part of the sample is assumed to react.",
          "de": "Bei der Berechnung der Reinheitsrate wird davon ausgegangen, dass der Verunreinigungsanteil der Probe reagiert.",
          "fr": "Lors du calcul du taux de pureté, la partie impureté de l’échantillon est supposée réagir.",
          "ru": "При расчете степени чистоты предполагается, что примесная часть образца вступает в реакцию.",
          "ar": "عند حساب معدل النقاء، يفترض أن جزء الشوائب من العينة يتفاعل.",
          "zh": "计算纯度时，假设样品的杂质部分发生反应。",
          "ku": "Dema ku rêjeya paqijiyê tê hesibandin, beşa nepakî ya nimûneyê tê texmîn kirin ku bertek nîşan dide."
        },
        {
          "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
          "en": "When equal moles are taken, the reagent with the smaller coefficient is consumed first.",
          "de": "Bei gleichen Molmengen wird zuerst das Reagens mit dem kleineren Koeffizienten verbraucht.",
          "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
          "ru": "При равных молях первым расходуется реагент с меньшим коэффициентом.",
          "ar": "عند أخذ مولات متساوية، يتم استهلاك الكاشف ذو المعامل الأصغر أولاً.",
          "zh": "当等摩尔时，系数较小的试剂先被消耗。",
          "ku": "Dema ku molên wekhev têne girtin, pêşî reagenta bi rêjeya piçûktir tê vexwarin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Sentez (oluşum) tepkimesinde iki veya daha fazla madde birleşerek tek bir bileşik meydana getirir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In a synthesis reaction, two or more substances combine to form a single compound.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei einer Synthesereaktion verbinden sich zwei oder mehr Stoffe zu einer einzigen Verbindung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans une réaction de synthèse, deux ou plusieurs substances se combinent pour former un seul composé.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции синтеза два или более веществ соединяются с образованием одного соединения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعل التوليف، تتحد مادتان أو أكثر لتكوين مركب واحد.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在合成反应中，两种或多种物质结合形成单一化合物。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonek sentezê de, du an zêdetir madde bi hev re dibin yek pêkhateyek.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimeler ve Hesaplamalar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemical Reactions & Stoichiometry?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemische Reaktionen & Stöchiometrie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Réactions Chimiques & Calculs ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химические реакции и стехиометрия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التفاعلات الكيميائية والحسابات\"؟",
        "zh": "根据“化学反应与计算”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Reaksiyonên Kîmyewî û Hesab\" de rast e?"
      },
      "options": [
        {
          "tr": "Sınırlayıcı bileşen kütlesi en az olan maddedir.",
          "en": "The limiting component is the substance with the least mass.",
          "de": "Die limitierende Komponente ist der Stoff mit der geringsten Masse.",
          "fr": "Le composant limitant est la substance ayant la plus petite masse.",
          "ru": "Лимитирующим компонентом является вещество с наименьшей массой.",
          "ar": "العنصر المحدد هو المادة ذات الكتلة الأقل.",
          "zh": "限制成分是质量最小的物质。",
          "ku": "Hêmana sînordar maddeya bi girseya herî kêm e."
        },
        {
          "tr": "Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.",
          "en": "In all chemical reactions, the number of molecules and the gas volume are always conserved.",
          "de": "Bei allen chemischen Reaktionen bleiben die Anzahl der Moleküle und das Gasvolumen stets erhalten.",
          "fr": "Dans toutes les réactions chimiques, le nombre de molécules et le volume de gaz sont toujours conservés.",
          "ru": "Во всех химических реакциях число молекул и объем газа всегда сохраняются.",
          "ar": "في جميع التفاعلات الكيميائية، يظل عدد الجزيئات وحجم الغاز محفوظين دائمًا.",
          "zh": "在所有化学反应中，分子数和气体体积始终守恒。",
          "ku": "Di hemû reaksiyonên kîmyewî de, hejmara molekulan û qebareya gazê timî tê parastin."
        },
        {
          "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
          "en": "Rusting of iron is a physical dissolution phenomenon.",
          "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
          "fr": "La rouille du fer est un phénomène de dissolution physique.",
          "ru": "Ржавление железа – это явление физического растворения.",
          "ar": "صدأ الحديد هو ظاهرة انحلال فيزيائي.",
          "zh": "铁的生锈是一种物理溶解现象。",
          "ku": "Zengarbûna hesin diyardeyeke fîzîkî ya helbûnê ye."
        },
        {
          "tr": "Analiz (ayrışma) tepkimesinde bir bileşik ısı veya elektrik enerjisiyle daha basit maddelere ayrışır.",
          "en": "In a decomposition reaction, a compound is broken down into simpler substances by heat or electrical energy.",
          "de": "Bei einer Zersetzungsreaktion wird eine Verbindung durch Wärme oder elektrische Energie in einfachere Stoffe zerlegt.",
          "fr": "Lors d’une réaction de décomposition, un composé est décomposé en substances plus simples par la chaleur ou l’énergie électrique.",
          "ru": "В реакции разложения соединение распадается на более простые вещества под действием тепла или электрической энергии.",
          "ar": "في تفاعل التحلل، يتم تقسيم المركب إلى مواد أبسط عن طريق الحرارة أو الطاقة الكهربائية.",
          "zh": "在分解反应中，化合物通过热或电能分解成更简单的物质。",
          "ku": "Di reaksiyonek hilweşandinê de, pêkhateyek ji hêla germê an enerjiya elektrîkê ve di nav maddeyên hêsan de tê perçe kirin."
        },
        {
          "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
          "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
          "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
          "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
          "ru": "В газовых реакциях общий объем реагентов всегда равен общему объему продуктов.",
          "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
          "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
          "ku": "Di reaksiyonên gazê de, qebareya giştî ya reaktantan her dem bi qebareya giştî ya hilberan re wekhev e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Analiz (ayrışma) tepkimesinde bir bileşik ısı veya elektrik enerjisiyle daha basit maddelere ayrışır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In a decomposition reaction, a compound is broken down into simpler substances by heat or electrical energy.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei einer Zersetzungsreaktion wird eine Verbindung durch Wärme oder elektrische Energie in einfachere Stoffe zerlegt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lors d’une réaction de décomposition, un composé est décomposé en substances plus simples par la chaleur ou l’énergie électrique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции разложения соединение распадается на более простые вещества под действием тепла или электрической энергии.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعل التحلل، يتم تقسيم المركب إلى مواد أبسط عن طريق الحرارة أو الطاقة الكهربائية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在分解反应中，化合物通过热或电能分解成更简单的物质。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonek hilweşandinê de, pêkhateyek ji hêla germê an enerjiya elektrîkê ve di nav maddeyên hêsan de tê perçe kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimeler ve Hesaplamalar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemical Reactions & Stoichiometry, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemische Reaktionen & Stöchiometrie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Réactions Chimiques & Calculs, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химические реакции и стехиометрия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التفاعلات الكيميائية والحسابات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应与计算”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
          "en": "The actual yield is always greater than the theoretical yield.",
          "de": "Die tatsächliche Ausbeute ist immer größer als die theoretische Ausbeute.",
          "fr": "Le rendement réel est toujours supérieur au rendement théorique.",
          "ru": "Фактический выход всегда больше теоретического выхода.",
          "ar": "العائد الفعلي دائمًا أكبر من العائد النظري.",
          "zh": "实际产量总是大于理论产量。",
          "ku": "Berhema rastîn her gav ji berhema teorîk mezintir e."
        },
        {
          "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
          "en": "Whichever substance has the most moles, that substance runs out first.",
          "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
          "fr": "La substance qui a le plus grand nombre de moles s'épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "المادة التي لديها أكبر عدد من المولات هي التي تنفد أولاً.",
          "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
          "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
        },
        {
          "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ and Cl- are spectator ions.",
          "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Ag+ и Cl-.",
          "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، يكون Ag+ وCl- أيونين متفرجين.",
          "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，Ag+ 和 Cl- 是旁观离子。",
          "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) de Ag+ û Cl- îyonên temaşeker in."
        },
        {
          "tr": "Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.",
          "en": "All combustion reactions give off heat, there are no exceptions.",
          "de": "Alle Verbrennungsreaktionen geben Wärme ab, es gibt keine Ausnahmen.",
          "fr": "Toutes les réactions de combustion dégagent de la chaleur, il n'y a pas d'exception.",
          "ru": "Все реакции горения выделяют тепло, исключений нет.",
          "ar": "جميع تفاعلات الاحتراق تطلق حرارة، ولا توجد استثناءات.",
          "zh": "所有燃烧反应都会放出热量，无一例外。",
          "ku": "Hemî reaksiyonên şewitandinê germê didin, îstîsna tune."
        },
        {
          "tr": "Çözünme-çökelme tepkimesinde iki sulu çözelti karıştırıldığında suda az çözünen katı bir çökelti oluşur.",
          "en": "In a dissolution-precipitation reaction, when two aqueous solutions are mixed, a solid precipitate that is slightly soluble in water is formed.",
          "de": "Bei einer Lösungs-Fällungs-Reaktion entsteht beim Mischen zweier wässriger Lösungen ein fester Niederschlag, der in Wasser schwer löslich ist.",
          "fr": "Dans une réaction de dissolution-précipitation, lorsque deux solutions aqueuses sont mélangées, un précipité solide légèrement soluble dans l'eau se forme.",
          "ru": "В реакции растворения-осаждения при смешивании двух водных растворов образуется твердый осадок, малорастворимый в воде.",
          "ar": "في تفاعل الذوبان والترسيب، عندما يتم خلط محلولين مائيين، يتكون راسب صلب قابل للذوبان قليلاً في الماء.",
          "zh": "在溶解-沉淀反应中，当两种水溶液混合时，会形成微溶于水的固体沉淀物。",
          "ku": "Di reaksiyoneke helbûn-barînê de, dema ku du çareseriyên avî tevlî hev dibin, barîneke zexm a ku hinekî di avê de tê çareserkirin çê dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Çözünme-çökelme tepkimesinde iki sulu çözelti karıştırıldığında suda az çözünen katı bir çökelti oluşur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In a dissolution-precipitation reaction, when two aqueous solutions are mixed, a solid precipitate that is slightly soluble in water is formed.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei einer Lösungs-Fällungs-Reaktion entsteht beim Mischen zweier wässriger Lösungen ein fester Niederschlag, der in Wasser schwer löslich ist.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans une réaction de dissolution-précipitation, lorsque deux solutions aqueuses sont mélangées, un précipité solide légèrement soluble dans l'eau se forme.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции растворения-осаждения при смешивании двух водных растворов образуется твердый осадок, малорастворимый в воде.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعل الذوبان والترسيب، عندما يتم خلط محلولين مائيين، يتكون راسب صلب قابل للذوبان قليلاً في الماء.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在溶解-沉淀反应中，当两种水溶液混合时，会形成微溶于水的固体沉淀物。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyoneke helbûn-barînê de, dema ku du çareseriyên avî tevlî hev dibin, barîneke zexm a ku hinekî di avê de tê çareserkirin çê dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin06",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimeler ve Hesaplamalar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemical Reactions & Stoichiometry, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemische Reaktionen & Stöchiometrie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Réactions Chimiques & Calculs, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химические реакции и стехиометрия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التفاعلات الكيميائية والحسابات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应与计算”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Reaksiyonên Kîmyewî û Hesab\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Çözünme-çökelme tepkimesinde net iyon denklemi katı çökeltiyi oluşturan iyonlara göre yazılır.",
          "en": "In the dissolution-precipitation reaction, the net ion equation is written according to the ions that form the solid precipitate.",
          "de": "Bei der Auflösungs-Ausfällungs-Reaktion wird die Nettoionengleichung entsprechend den Ionen geschrieben, die den festen Niederschlag bilden.",
          "fr": "Dans la réaction de dissolution-précipitation, l’équation nette des ions s’écrit en fonction des ions qui forment le précipité solide.",
          "ru": "В реакции растворения-осаждения суммарное ионное уравнение записывается в соответствии с ионами, образующими твердый осадок.",
          "ar": "في تفاعل الذوبان والترسيب، تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات التي تشكل الراسب الصلب.",
          "zh": "在溶解-沉淀反应中，根据形成固体沉淀物的离子编写净离子方程。",
          "ku": "Di reaksiyona belavbûn-barînê de hevkêşeya îyonê ya tevn li gorî îyonên ku barîna hişk pêk tînin tê nivîsandin."
        },
        {
          "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
          "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
          "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
          "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
          "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
          "ar": "عند احتراق الهيدروكربونات، ينطلق غاز H2 مع ثاني أكسيد الكربون.",
          "zh": "当碳氢化合物燃烧时，氢气与二氧化碳一起释放。",
          "ku": "Dema ku hîdrokarbon dişewitin, gaza H2 ligel CO2 derdikeve."
        },
        {
          "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
          "en": "When calculating the purity rate, the impurity part of the sample is assumed to react.",
          "de": "Bei der Berechnung der Reinheitsrate wird davon ausgegangen, dass der Verunreinigungsanteil der Probe reagiert.",
          "fr": "Lors du calcul du taux de pureté, la partie impureté de l’échantillon est supposée réagir.",
          "ru": "При расчете степени чистоты предполагается, что примесная часть образца вступает в реакцию.",
          "ar": "عند حساب معدل النقاء، يفترض أن جزء الشوائب من العينة يتفاعل.",
          "zh": "计算纯度时，假设样品的杂质部分发生反应。",
          "ku": "Dema ku rêjeya paqijiyê tê hesibandin, beşa nepakî ya nimûneyê tê texmîn kirin ku bertek nîşan dide."
        },
        {
          "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
          "en": "When equal moles are taken, the reagent with the smaller coefficient is consumed first.",
          "de": "Bei gleichen Molmengen wird zuerst das Reagens mit dem kleineren Koeffizienten verbraucht.",
          "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
          "ru": "При равных молях первым расходуется реагент с меньшим коэффициентом.",
          "ar": "عند أخذ مولات متساوية، يتم استهلاك الكاشف ذو المعامل الأصغر أولاً.",
          "zh": "当等摩尔时，系数较小的试剂先被消耗。",
          "ku": "Dema ku molên wekhev têne girtin, pêşî reagenta bi rêjeya piçûktir tê vexwarin."
        },
        {
          "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
          "en": "In all acid-base reactions, salt and water are formed together.",
          "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
          "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
          "ru": "Во всех кислотно-основных реакциях соль и вода образуются вместе.",
          "ar": "في جميع التفاعلات الحمضية القاعدية، يتكون الملح والماء معًا.",
          "zh": "在所有酸碱反应中，盐和水都会一起形成。",
          "ku": "Di hemû reaksiyonên asîd-bazê de xwê û av bi hev re çêdibin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Çözünme-çökelme tepkimesinde net iyon denklemi katı çökeltiyi oluşturan iyonlara göre yazılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the dissolution-precipitation reaction, the net ion equation is written according to the ions that form the solid precipitate.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Auflösungs-Ausfällungs-Reaktion wird die Nettoionengleichung entsprechend den Ionen geschrieben, die den festen Niederschlag bilden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la réaction de dissolution-précipitation, l’équation nette des ions s’écrit en fonction des ions qui forment le précipité solide.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции растворения-осаждения суммарное ионное уравнение записывается в соответствии с ионами, образующими твердый осадок.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعل الذوبان والترسيب، تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات التي تشكل الراسب الصلب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在溶解-沉淀反应中，根据形成固体沉淀物的离子编写净离子方程。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyona belavbûn-barînê de hevkêşeya îyonê ya tevn li gorî îyonên ku barîna hişk pêk tînin tê nivîsandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin07",
      "stem": {
        "tr": "Kimyasal Tepkimeler ve Hesaplamalar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemical Reactions & Stoichiometry, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemische Reaktionen & Stöchiometrie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Réactions Chimiques & Calculs, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химические реакции и стехиометрия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التفاعلات الكيميائية والحسابات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应与计算”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.",
          "en": "In all chemical reactions, the number of molecules and the gas volume are always conserved.",
          "de": "Bei allen chemischen Reaktionen bleiben die Anzahl der Moleküle und das Gasvolumen stets erhalten.",
          "fr": "Dans toutes les réactions chimiques, le nombre de molécules et le volume de gaz sont toujours conservés.",
          "ru": "Во всех химических реакциях число молекул и объем газа всегда сохраняются.",
          "ar": "في جميع التفاعلات الكيميائية، يظل عدد الجزيئات وحجم الغاز محفوظين دائمًا.",
          "zh": "在所有化学反应中，分子数和气体体积始终守恒。",
          "ku": "Di hemû reaksiyonên kîmyewî de, hejmara molekulan û qebareya gazê timî tê parastin."
        },
        {
          "tr": "Sınırlayıcı bileşen, tepkimede ilk tükenen ve oluşan ürün miktarını belirleyen reaktiftir.",
          "en": "The limiting component is the reactant that is consumed first in the reaction and determines the amount of product formed.",
          "de": "Die limitierende Komponente ist der Reaktant, der bei der Reaktion zuerst verbraucht wird und die Menge des gebildeten Produkts bestimmt.",
          "fr": "Le composant limitant est le réactif qui est consommé en premier dans la réaction et qui détermine la quantité de produit formé.",
          "ru": "Лимитирующим компонентом является реагент, который расходуется в реакции первым и определяет количество образующегося продукта.",
          "ar": "المكون المحدد هو المادة المتفاعلة التي يتم استهلاكها أولاً في التفاعل وتحدد كمية المنتج المتكون.",
          "zh": "限制组分是在反应中首先消耗的反应物并决定形成的产物的量。",
          "ku": "Hêmana sînordar reaktant e ku pêşî di reaksiyonê de tê vexwarin û mîqdara hilbera çêkirî diyar dike."
        },
        {
          "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
          "en": "Rusting of iron is a physical dissolution phenomenon.",
          "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
          "fr": "La rouille du fer est un phénomène de dissolution physique.",
          "ru": "Ржавление железа – это явление физического растворения.",
          "ar": "صدأ الحديد هو ظاهرة انحلال فيزيائي.",
          "zh": "铁的生锈是一种物理溶解现象。",
          "ku": "Zengarbûna hesin diyardeyeke fîzîkî ya helbûnê ye."
        },
        {
          "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
          "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
          "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
          "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
          "ru": "В газовых реакциях общий объем реагентов всегда равен общему объему продуктов.",
          "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
          "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
          "ku": "Di reaksiyonên gazê de, qebareya giştî ya reaktantan her dem bi qebareya giştî ya hilberan re wekhev e."
        },
        {
          "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
          "en": "It is a synthesis reaction in which a single compound is broken down into smaller substances.",
          "de": "Es handelt sich um eine Synthesereaktion, bei der eine einzelne Verbindung in kleinere Substanzen zerlegt wird.",
          "fr": "Il s’agit d’une réaction de synthèse dans laquelle un seul composé est décomposé en substances plus petites.",
          "ru": "Это реакция синтеза, при которой одно соединение распадается на более мелкие вещества.",
          "ar": "إنه تفاعل تركيبي يتم فيه تقسيم مركب واحد إلى مواد أصغر.",
          "zh": "这是一种合成反应，其中单一化合物被分解成更小的物质。",
          "ku": "Ew reaksiyonek sentezek e ku tê de yek pêkhateyek di nav maddeyên piçûktir de tê perçe kirin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Sınırlayıcı bileşen, tepkimede ilk tükenen ve oluşan ürün miktarını belirleyen reaktiftir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The limiting component is the reactant that is consumed first in the reaction and determines the amount of product formed.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die limitierende Komponente ist der Reaktant, der bei der Reaktion zuerst verbraucht wird und die Menge des gebildeten Produkts bestimmt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le composant limitant est le réactif qui est consommé en premier dans la réaction et qui détermine la quantité de produit formé.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Лимитирующим компонентом является реагент, который расходуется в реакции первым и определяет количество образующегося продукта.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المكون المحدد هو المادة المتفاعلة التي يتم استهلاكها أولاً في التفاعل وتحدد كمية المنتج المتكون.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“限制组分是在反应中首先消耗的反应物并决定形成的产物的量。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hêmana sînordar reaktant e ku pêşî di reaksiyonê de tê vexwarin û mîqdara hilbera çêkirî diyar dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimeler ve Hesaplamalar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemical Reactions & Stoichiometry, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemische Reaktionen & Stöchiometrie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Réactions Chimiques & Calculs, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химические реакции и стехиометрия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التفاعلات الكيميائية والحسابات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应与计算”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Reaksiyonên Kîmyewî û Hesab\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
          "en": "Whichever substance has the most moles, that substance runs out first.",
          "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
          "fr": "La substance qui a le plus grand nombre de moles s'épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "المادة التي لديها أكبر عدد من المولات هي التي تنفد أولاً.",
          "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
          "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
        },
        {
          "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ and Cl- are spectator ions.",
          "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Ag+ и Cl-.",
          "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، يكون Ag+ وCl- أيونين متفرجين.",
          "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，Ag+ 和 Cl- 是旁观离子。",
          "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) de Ag+ û Cl- îyonên temaşeker in."
        },
        {
          "tr": "Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.",
          "en": "Percentage yield is calculated with the formula = (Actual Yield / Theoretical Yield) x 100.",
          "de": "Der prozentuale Ertrag wird mit der Formel = (tatsächlicher Ertrag / theoretischer Ertrag) x 100 berechnet.",
          "fr": "Le rendement en pourcentage est calculé avec la formule = (Rendement réel / Rendement théorique) x 100.",
          "ru": "Процентный выход рассчитывается по формуле = (Фактический выход / Теоретический выход) x 100.",
          "ar": "يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.",
          "zh": "百分产率的计算公式为 =（实际产量/理论产量）x 100。",
          "ku": "Berhema ji sedî bi formula = (Berhema Rastîn / Berhema Teorîk) x 100 tê hesibandin."
        },
        {
          "tr": "Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.",
          "en": "All combustion reactions give off heat, there are no exceptions.",
          "de": "Alle Verbrennungsreaktionen geben Wärme ab, es gibt keine Ausnahmen.",
          "fr": "Toutes les réactions de combustion dégagent de la chaleur, il n'y a pas d'exception.",
          "ru": "Все реакции горения выделяют тепло, исключений нет.",
          "ar": "جميع تفاعلات الاحتراق تطلق حرارة، ولا توجد استثناءات.",
          "zh": "所有燃烧反应都会放出热量，无一例外。",
          "ku": "Hemî reaksiyonên şewitandinê germê didin, îstîsna tune."
        },
        {
          "tr": "Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.",
          "en": "Analysis reactions always occur spontaneously and exothermically.",
          "de": "Analysereaktionen laufen immer spontan und exotherm ab.",
          "fr": "Les réactions d'analyse se produisent toujours de manière spontanée et exothermique.",
          "ru": "Реакции анализа всегда протекают спонтанно и экзотермически.",
          "ar": "تحدث تفاعلات التحليل دائمًا بشكل عفوي وطارد للحرارة.",
          "zh": "分析反应总是自发且放热地发生。",
          "ku": "Reaksiyonên analîzê her gav bi spontan û exotermîk çêdibin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Percentage yield is calculated with the formula = (Actual Yield / Theoretical Yield) x 100.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der prozentuale Ertrag wird mit der Formel = (tatsächlicher Ertrag / theoretischer Ertrag) x 100 berechnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le rendement en pourcentage est calculé avec la formule = (Rendement réel / Rendement théorique) x 100.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Процентный выход рассчитывается по формуле = (Фактический выход / Теоретический выход) x 100.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“百分产率的计算公式为 =（实际产量/理论产量）x 100。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Berhema ji sedî bi formula = (Berhema Rastîn / Berhema Teorîk) x 100 tê hesibandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimeler ve Hesaplamalar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemical Reactions & Stoichiometry, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemische Reaktionen & Stöchiometrie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Réactions Chimiques & Calculs, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химические реакции и стехиометрия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التفاعلات الكيميائية والحسابات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应与计算”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
          "en": "When calculating the purity rate, the impurity part of the sample is assumed to react.",
          "de": "Bei der Berechnung der Reinheitsrate wird davon ausgegangen, dass der Verunreinigungsanteil der Probe reagiert.",
          "fr": "Lors du calcul du taux de pureté, la partie impureté de l’échantillon est supposée réagir.",
          "ru": "При расчете степени чистоты предполагается, что примесная часть образца вступает в реакцию.",
          "ar": "عند حساب معدل النقاء، يفترض أن جزء الشوائب من العينة يتفاعل.",
          "zh": "计算纯度时，假设样品的杂质部分发生反应。",
          "ku": "Dema ku rêjeya paqijiyê tê hesibandin, beşa nepakî ya nimûneyê tê texmîn kirin ku bertek nîşan dide."
        },
        {
          "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
          "en": "When equal moles are taken, the reagent with the smaller coefficient is consumed first.",
          "de": "Bei gleichen Molmengen wird zuerst das Reagens mit dem kleineren Koeffizienten verbraucht.",
          "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
          "ru": "При равных молях первым расходуется реагент с меньшим коэффициентом.",
          "ar": "عند أخذ مولات متساوية، يتم استهلاك الكاشف ذو المعامل الأصغر أولاً.",
          "zh": "当等摩尔时，系数较小的试剂先被消耗。",
          "ku": "Dema ku molên wekhev têne girtin, pêşî reagenta bi rêjeya piçûktir tê vexwarin."
        },
        {
          "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
          "en": "In all acid-base reactions, salt and water are formed together.",
          "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
          "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
          "ru": "Во всех кислотно-основных реакциях соль и вода образуются вместе.",
          "ar": "في جميع التفاعلات الحمضية القاعدية، يتكون الملح والماء معًا.",
          "zh": "在所有酸碱反应中，盐和水都会一起形成。",
          "ku": "Di hemû reaksiyonên asîd-bazê de xwê û av bi hev re çêdibin."
        },
        {
          "tr": "Hidrokarbonlar (CxHy) tam yandıklarında yalnızca CO2 ve H2O oluşturur.",
          "en": "Hydrocarbons (CxHy) produce only CO2 and H2O when completely burned.",
          "de": "Kohlenwasserstoffe (CxHy) erzeugen bei vollständiger Verbrennung nur CO2 und H2O.",
          "fr": "Les hydrocarbures (CxHy) ne produisent que du CO2 et du H2O lorsqu'ils sont complètement brûlés.",
          "ru": "Углеводороды (CxHy) при полном сгорании производят только CO2 и H2O.",
          "ar": "تنتج الهيدروكربونات (CxHy) ثاني أكسيد الكربون وH2O فقط عند حرقها بالكامل.",
          "zh": "碳氢化合物 (CxHy) 完全燃烧时仅产生 CO2 和 H2O。",
          "ku": "Hîdrokarbon (CxHy) dema bi tevahî dişewitin tenê CO2 û H2O derdixin."
        },
        {
          "tr": "Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.",
          "en": "The precipitate formed in the dissolution-precipitation reaction consists of spectator ions.",
          "de": "Der bei der Auflösungs-Fällungsreaktion gebildete Niederschlag besteht aus Zuschauerionen.",
          "fr": "Le précipité formé lors de la réaction de dissolution-précipitation est constitué d'ions spectateurs.",
          "ru": "Осадок, образующийся в реакции растворения-осаждения, состоит из ионов-спектаторов.",
          "ar": "يتكون الراسب المتكون في تفاعل الذوبان والترسيب من أيونات متفرجة.",
          "zh": "溶解-沉淀反应中形成的沉淀物由旁观者离子组成。",
          "ku": "Barîna ku di reaksiyona belavbûn-barînê de çêdibe ji îyonên temaşevanan pêk tê."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Hidrokarbonlar (CxHy) tam yandıklarında yalnızca CO2 ve H2O oluşturur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Hydrocarbons (CxHy) produce only CO2 and H2O when completely burned.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kohlenwasserstoffe (CxHy) erzeugen bei vollständiger Verbrennung nur CO2 und H2O.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les hydrocarbures (CxHy) ne produisent que du CO2 et du H2O lorsqu'ils sont complètement brûlés.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Углеводороды (CxHy) при полном сгорании производят только CO2 и H2O.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تنتج الهيدروكربونات (CxHy) ثاني أكسيد الكربون وH2O فقط عند حرقها بالكامل.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“碳氢化合物 (CxHy) 完全燃烧时仅产生 CO2 和 H2O。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hîdrokarbon (CxHy) dema bi tevahî dişewitin tenê CO2 û H2O derdixin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimeler ve Hesaplamalar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemical Reactions & Stoichiometry, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemische Reaktionen & Stöchiometrie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Réactions Chimiques & Calculs, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химические реакции и стехиометрия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التفاعلات الكيميائية والحسابات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应与计算”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Reaksiyonên Kîmyewî û Hesab\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
          "en": "Rusting of iron is a physical dissolution phenomenon.",
          "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
          "fr": "La rouille du fer est un phénomène de dissolution physique.",
          "ru": "Ржавление железа – это явление физического растворения.",
          "ar": "صدأ الحديد هو ظاهرة انحلال فيزيائي.",
          "zh": "铁的生锈是一种物理溶解现象。",
          "ku": "Zengarbûna hesin diyardeyeke fîzîkî ya helbûnê ye."
        },
        {
          "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
          "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
          "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
          "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
          "ru": "В газовых реакциях общий объем реагентов всегда равен общему объему продуктов.",
          "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
          "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
          "ku": "Di reaksiyonên gazê de, qebareya giştî ya reaktantan her dem bi qebareya giştî ya hilberan re wekhev e."
        },
        {
          "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
          "en": "It is a synthesis reaction in which a single compound is broken down into smaller substances.",
          "de": "Es handelt sich um eine Synthesereaktion, bei der eine einzelne Verbindung in kleinere Substanzen zerlegt wird.",
          "fr": "Il s’agit d’une réaction de synthèse dans laquelle un seul composé est décomposé en substances plus petites.",
          "ru": "Это реакция синтеза, при которой одно соединение распадается на более мелкие вещества.",
          "ar": "إنه تفاعل تركيبي يتم فيه تقسيم مركب واحد إلى مواد أصغر.",
          "zh": "这是一种合成反应，其中单一化合物被分解成更小的物质。",
          "ku": "Ew reaksiyonek sentezek e ku tê de yek pêkhateyek di nav maddeyên piçûktir de tê perçe kirin."
        },
        {
          "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
          "en": "The net ion equation is written according to the spectator ions remaining in the solution.",
          "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
          "fr": "L'équation des ions nets s'écrit en fonction des ions spectateurs restant dans la solution.",
          "ru": "Чистое ионное уравнение записывается в соответствии с ионами-спектаторами, оставшимися в растворе.",
          "ar": "تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات المتفرجة المتبقية في المحلول.",
          "zh": "根据溶液中剩余的观察者离子编写净离子方程。",
          "ku": "Li gorî îyonên temaşeker ên ku di çareseriyê de mane hevkêşeya îyonên tevniv tê nivîsandin."
        },
        {
          "tr": "Tepkimede kütle, atom sayısı ve türü, toplam proton, nötron ve elektron sayısı daima korunur.",
          "en": "In the reaction, mass, number and type of atoms, and total number of protons, neutrons, and electrons are always conserved.",
          "de": "Bei der Reaktion bleiben Masse, Anzahl und Art der Atome sowie die Gesamtzahl der Protonen, Neutronen und Elektronen stets erhalten.",
          "fr": "Dans la réaction, la masse, le nombre et le type d’atomes ainsi que le nombre total de protons, de neutrons et d’électrons sont toujours conservés.",
          "ru": "В реакции всегда сохраняются масса, количество и тип атомов, а также общее число протонов, нейтронов и электронов.",
          "ar": "في التفاعل، يتم دائمًا حفظ الكتلة وعدد ونوع الذرات والعدد الإجمالي للبروتونات والنيوترونات والإلكترونات.",
          "zh": "在反应中，原子的质量、数量和类型以及质子、中子和电子的总数始终守恒。",
          "ku": "Di reaksiyonê de, girse, hejmar û celeb atoman, û hejmara giştî ya proton, notron û elektronan her dem têne parastin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tepkimede kütle, atom sayısı ve türü, toplam proton, nötron ve elektron sayısı daima korunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the reaction, mass, number and type of atoms, and total number of protons, neutrons, and electrons are always conserved.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Reaktion bleiben Masse, Anzahl und Art der Atome sowie die Gesamtzahl der Protonen, Neutronen und Elektronen stets erhalten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la réaction, la masse, le nombre et le type d’atomes ainsi que le nombre total de protons, de neutrons et d’électrons sont toujours conservés.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции всегда сохраняются масса, количество и тип атомов, а также общее число протонов, нейтронов и электронов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعل، يتم دائمًا حفظ الكتلة وعدد ونوع الذرات والعدد الإجمالي للبروتونات والنيوترونات والإلكترونات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在反应中，原子的质量、数量和类型以及质子、中子和电子的总数始终守恒。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonê de, girse, hejmar û celeb atoman, û hejmara giştî ya proton, notron û elektronan her dem têne parastin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimeler ve Hesaplamalar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemical Reactions & Stoichiometry?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemische Reaktionen & Stöchiometrie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Réactions Chimiques & Calculs ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химические реакции и стехиометрия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التفاعلات الكيميائية والحسابات\"؟",
        "zh": "根据“化学反应与计算”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Reaksiyonên Kîmyewî û Hesab\" de rast e?"
      },
      "options": [
        {
          "tr": "Artan madde hesabı için tepkimeye girenlerin mol sayıları katsayılarına bölünerek sınırlayıcı madde bulunur.",
          "en": "To calculate the residual substance, the limiting substance is found by dividing the number of moles of the reactants by their coefficients.",
          "de": "Zur Berechnung der Restsubstanz wird die limitierende Substanz ermittelt, indem die Molzahl der Reaktanten durch deren Koeffizienten dividiert wird.",
          "fr": "Pour calculer la substance résiduelle, la substance limitante est trouvée en divisant le nombre de moles des réactifs par leurs coefficients.",
          "ru": "Для расчета остаточного вещества предельное вещество находят путем деления количества молей реагирующих веществ на их коэффициенты.",
          "ar": "لحساب المادة المتبقية، يتم العثور على المادة المحددة عن طريق قسمة عدد مولات المواد المتفاعلة على معاملاتها.",
          "zh": "为了计算残留物质，通过将反应物的摩尔数除以它们的系数来找到限制物质。",
          "ku": "Ji bo hesabkirina maddeya mayî, maddeya sînordar bi dabeşkirina hejmara molên reaktantan li ser hevberên wan tê dîtin."
        },
        {
          "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ and Cl- are spectator ions.",
          "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Ag+ и Cl-.",
          "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، يكون Ag+ وCl- أيونين متفرجين.",
          "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，Ag+ 和 Cl- 是旁观离子。",
          "ku": "Di reaksiyona AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) de Ag+ û Cl- îyonên temaşeker in."
        },
        {
          "tr": "Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.",
          "en": "All combustion reactions give off heat, there are no exceptions.",
          "de": "Alle Verbrennungsreaktionen geben Wärme ab, es gibt keine Ausnahmen.",
          "fr": "Toutes les réactions de combustion dégagent de la chaleur, il n'y a pas d'exception.",
          "ru": "Все реакции горения выделяют тепло, исключений нет.",
          "ar": "جميع تفاعلات الاحتراق تطلق حرارة، ولا توجد استثناءات.",
          "zh": "所有燃烧反应都会放出热量，无一例外。",
          "ku": "Hemî reaksiyonên şewitandinê germê didin, îstîsna tune."
        },
        {
          "tr": "Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.",
          "en": "Analysis reactions always occur spontaneously and exothermically.",
          "de": "Analysereaktionen laufen immer spontan und exotherm ab.",
          "fr": "Les réactions d'analyse se produisent toujours de manière spontanée et exothermique.",
          "ru": "Реакции анализа всегда протекают спонтанно и экзотермически.",
          "ar": "تحدث تفاعلات التحليل دائمًا بشكل عفوي وطارد للحرارة.",
          "zh": "分析反应总是自发且放热地发生。",
          "ku": "Reaksiyonên analîzê her gav bi spontan û exotermîk çêdibin."
        },
        {
          "tr": "Sınırlayıcı bileşen kütlesi en az olan maddedir.",
          "en": "The limiting component is the substance with the least mass.",
          "de": "Die limitierende Komponente ist der Stoff mit der geringsten Masse.",
          "fr": "Le composant limitant est la substance ayant la plus petite masse.",
          "ru": "Лимитирующим компонентом является вещество с наименьшей массой.",
          "ar": "العنصر المحدد هو المادة ذات الكتلة الأقل.",
          "zh": "限制成分是质量最小的物质。",
          "ku": "Hêmana sînordar maddeya bi girseya herî kêm e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Artan madde hesabı için tepkimeye girenlerin mol sayıları katsayılarına bölünerek sınırlayıcı madde bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"To calculate the residual substance, the limiting substance is found by dividing the number of moles of the reactants by their coefficients.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zur Berechnung der Restsubstanz wird die limitierende Substanz ermittelt, indem die Molzahl der Reaktanten durch deren Koeffizienten dividiert wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pour calculer la substance résiduelle, la substance limitante est trouvée en divisant le nombre de moles des réactifs par leurs coefficients.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Для расчета остаточного вещества предельное вещество находят путем деления количества молей реагирующих веществ на их коэффициенты.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لحساب المادة المتبقية، يتم العثور على المادة المحددة عن طريق قسمة عدد مولات المواد المتفاعلة على معاملاتها.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“为了计算残留物质，通过将反应物的摩尔数除以它们的系数来找到限制物质。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji bo hesabkirina maddeya mayî, maddeya sînordar bi dabeşkirina hejmara molên reaktantan li ser hevberên wan tê dîtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimeler ve Hesaplamalar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemical Reactions & Stoichiometry, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemische Reaktionen & Stöchiometrie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Réactions Chimiques & Calculs, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химические реакции и стехиометрия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التفاعلات الكيميائية والحسابات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应与计算”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.",
          "en": "When equal moles are taken, the reagent with the smaller coefficient is consumed first.",
          "de": "Bei gleichen Molmengen wird zuerst das Reagens mit dem kleineren Koeffizienten verbraucht.",
          "fr": "Lorsque des moles égales sont prises, le réactif avec le coefficient le plus petit est consommé en premier.",
          "ru": "При равных молях первым расходуется реагент с меньшим коэффициентом.",
          "ar": "عند أخذ مولات متساوية، يتم استهلاك الكاشف ذو المعامل الأصغر أولاً.",
          "zh": "当等摩尔时，系数较小的试剂先被消耗。",
          "ku": "Dema ku molên wekhev têne girtin, pêşî reagenta bi rêjeya piçûktir tê vexwarin."
        },
        {
          "tr": "Saflık yüzdesi = (Saf Madde Kütlesi / Numune Kütlesi) x 100'dür.",
          "en": "Purity percentage = (Pure Substance Mass / Sample Mass) x 100.",
          "de": "Reinheitsprozentsatz = (Reinstoffmasse / Probenmasse) x 100.",
          "fr": "Pourcentage de pureté = (Masse de substance pure / Masse d'échantillon) x 100.",
          "ru": "Процент чистоты = (масса чистого вещества / масса образца) x 100.",
          "ar": "نسبة النقاء = (كتلة المادة النقية / كتلة العينة) × 100.",
          "zh": "纯度百分比 =（纯物质质量/样品质量）x 100。",
          "ku": "Rêjeya paqijiyê = (Kirsa madeya paqij / girseya nimûne) x 100."
        },
        {
          "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
          "en": "In all acid-base reactions, salt and water are formed together.",
          "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
          "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
          "ru": "Во всех кислотно-основных реакциях соль и вода образуются вместе.",
          "ar": "في جميع التفاعلات الحمضية القاعدية، يتكون الملح والماء معًا.",
          "zh": "在所有酸碱反应中，盐和水都会一起形成。",
          "ku": "Di hemû reaksiyonên asîd-bazê de xwê û av bi hev re çêdibin."
        },
        {
          "tr": "Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.",
          "en": "The precipitate formed in the dissolution-precipitation reaction consists of spectator ions.",
          "de": "Der bei der Auflösungs-Fällungsreaktion gebildete Niederschlag besteht aus Zuschauerionen.",
          "fr": "Le précipité formé lors de la réaction de dissolution-précipitation est constitué d'ions spectateurs.",
          "ru": "Осадок, образующийся в реакции растворения-осаждения, состоит из ионов-спектаторов.",
          "ar": "يتكون الراسب المتكون في تفاعل الذوبان والترسيب من أيونات متفرجة.",
          "zh": "溶解-沉淀反应中形成的沉淀物由旁观者离子组成。",
          "ku": "Barîna ku di reaksiyona belavbûn-barînê de çêdibe ji îyonên temaşevanan pêk tê."
        },
        {
          "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
          "en": "The actual yield is always greater than the theoretical yield.",
          "de": "Die tatsächliche Ausbeute ist immer größer als die theoretische Ausbeute.",
          "fr": "Le rendement réel est toujours supérieur au rendement théorique.",
          "ru": "Фактический выход всегда больше теоретического выхода.",
          "ar": "العائد الفعلي دائمًا أكبر من العائد النظري.",
          "zh": "实际产量总是大于理论产量。",
          "ku": "Berhema rastîn her gav ji berhema teorîk mezintir e."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Saflık yüzdesi = (Saf Madde Kütlesi / Numune Kütlesi) x 100'dür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Purity percentage = (Pure Substance Mass / Sample Mass) x 100.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Reinheitsprozentsatz = (Reinstoffmasse / Probenmasse) x 100.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pourcentage de pureté = (Masse de substance pure / Masse d'échantillon) x 100.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Процент чистоты = (масса чистого вещества / масса образца) x 100.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نسبة النقاء = (كتلة المادة النقية / كتلة العينة) × 100.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“纯度百分比 =（纯物质质量/样品质量）x 100。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rêjeya paqijiyê = (Kirsa madeya paqij / girseya nimûne) x 100.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin13",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimeler ve Hesaplamalar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemical Reactions & Stoichiometry, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemische Reaktionen & Stöchiometrie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Réactions Chimiques & Calculs, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химические реакции и стехиометрия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التفاعلات الكيميائية والحسابات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应与计算”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Reaksiyonên Kîmyewî û Hesab\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.",
          "en": "In gas reactions, the total volume of the reactants is always equal to the total volume of the products.",
          "de": "Bei Gasreaktionen ist das Gesamtvolumen der Reaktanten immer gleich dem Gesamtvolumen der Produkte.",
          "fr": "Dans les réactions gazeuses, le volume total des réactifs est toujours égal au volume total des produits.",
          "ru": "В газовых реакциях общий объем реагентов всегда равен общему объему продуктов.",
          "ar": "في التفاعلات الغازية، يكون الحجم الإجمالي للمواد المتفاعلة دائمًا مساويًا للحجم الإجمالي للنواتج.",
          "zh": "在气体反应中，反应物的总体积始终等于产物的总体积。",
          "ku": "Di reaksiyonên gazê de, qebareya giştî ya reaktantan her dem bi qebareya giştî ya hilberan re wekhev e."
        },
        {
          "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
          "en": "It is a synthesis reaction in which a single compound is broken down into smaller substances.",
          "de": "Es handelt sich um eine Synthesereaktion, bei der eine einzelne Verbindung in kleinere Substanzen zerlegt wird.",
          "fr": "Il s’agit d’une réaction de synthèse dans laquelle un seul composé est décomposé en substances plus petites.",
          "ru": "Это реакция синтеза, при которой одно соединение распадается на более мелкие вещества.",
          "ar": "إنه تفاعل تركيبي يتم فيه تقسيم مركب واحد إلى مواد أصغر.",
          "zh": "这是一种合成反应，其中单一化合物被分解成更小的物质。",
          "ku": "Ew reaksiyonek sentezek e ku tê de yek pêkhateyek di nav maddeyên piçûktir de tê perçe kirin."
        },
        {
          "tr": "Demirin paslanması (4Fe + 3O2 -> 2Fe2O3) alevsiz yavaş yanmaya örnektir.",
          "en": "Rusting of iron (4Fe + 3O2 -> 2Fe2O3) is an example of slow flameless combustion.",
          "de": "Das Rosten von Eisen (4Fe + 3O2 -> 2Fe2O3) ist ein Beispiel für eine langsame flammenlose Verbrennung.",
          "fr": "La rouille du fer (4Fe + 3O2 -> 2Fe2O3) est un exemple de combustion lente sans flamme.",
          "ru": "Ржавление железа (4Fe + 3O2 -> 2Fe2O3) является примером медленного беспламенного горения.",
          "ar": "صدأ الحديد (4Fe + 3O2 -> 2Fe2O3) هو مثال على الاحتراق البطيء عديم اللهب.",
          "zh": "铁生锈（4Fe + 3O2 -> 2Fe2O3）是缓慢无焰燃烧的一个例子。",
          "ku": "Zengarbûna hesin (4Fe + 3O2 -> 2Fe2O3) mînaka şewitandina hêdî ya bê agir e."
        },
        {
          "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
          "en": "The net ion equation is written according to the spectator ions remaining in the solution.",
          "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
          "fr": "L'équation des ions nets s'écrit en fonction des ions spectateurs restant dans la solution.",
          "ru": "Чистое ионное уравнение записывается в соответствии с ионами-спектаторами, оставшимися в растворе.",
          "ar": "تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات المتفرجة المتبقية في المحلول.",
          "zh": "根据溶液中剩余的观察者离子编写净离子方程。",
          "ku": "Li gorî îyonên temaşeker ên ku di çareseriyê de mane hevkêşeya îyonên tevniv tê nivîsandin."
        },
        {
          "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
          "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
          "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
          "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
          "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
          "ar": "عند احتراق الهيدروكربونات، ينطلق غاز H2 مع ثاني أكسيد الكربون.",
          "zh": "当碳氢化合物燃烧时，氢气与二氧化碳一起释放。",
          "ku": "Dema ku hîdrokarbon dişewitin, gaza H2 ligel CO2 derdikeve."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Demirin paslanması (4Fe + 3O2 -> 2Fe2O3) alevsiz yavaş yanmaya örnektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Rusting of iron (4Fe + 3O2 -> 2Fe2O3) is an example of slow flameless combustion.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Rosten von Eisen (4Fe + 3O2 -> 2Fe2O3) ist ein Beispiel für eine langsame flammenlose Verbrennung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La rouille du fer (4Fe + 3O2 -> 2Fe2O3) est un exemple de combustion lente sans flamme.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ржавление железа (4Fe + 3O2 -> 2Fe2O3) является примером медленного беспламенного горения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"صدأ الحديد (4Fe + 3O2 -> 2Fe2O3) هو مثال على الاحتراق البطيء عديم اللهب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“铁生锈（4Fe + 3O2 -> 2Fe2O3）是缓慢无焰燃烧的一个例子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zengarbûna hesin (4Fe + 3O2 -> 2Fe2O3) mînaka şewitandina hêdî ya bê agir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin14",
      "stem": {
        "tr": "Kimyasal Tepkimeler ve Hesaplamalar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemical Reactions & Stoichiometry, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemische Reaktionen & Stöchiometrie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Réactions Chimiques & Calculs, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химические реакции и стехиометрия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التفاعلات الكيميائية والحسابات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应与计算”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.",
          "en": "All combustion reactions give off heat, there are no exceptions.",
          "de": "Alle Verbrennungsreaktionen geben Wärme ab, es gibt keine Ausnahmen.",
          "fr": "Toutes les réactions de combustion dégagent de la chaleur, il n'y a pas d'exception.",
          "ru": "Все реакции горения выделяют тепло, исключений нет.",
          "ar": "جميع تفاعلات الاحتراق تطلق حرارة، ولا توجد استثناءات.",
          "zh": "所有燃烧反应都会放出热量，无一例外。",
          "ku": "Hemî reaksiyonên şewitandinê germê didin, îstîsna tune."
        },
        {
          "tr": "Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.",
          "en": "Analysis reactions always occur spontaneously and exothermically.",
          "de": "Analysereaktionen laufen immer spontan und exotherm ab.",
          "fr": "Les réactions d'analyse se produisent toujours de manière spontanée et exothermique.",
          "ru": "Реакции анализа всегда протекают спонтанно и экзотермически.",
          "ar": "تحدث تفاعلات التحليل دائمًا بشكل عفوي وطارد للحرارة.",
          "zh": "分析反应总是自发且放热地发生。",
          "ku": "Reaksiyonên analîzê her gav bi spontan û exotermîk çêdibin."
        },
        {
          "tr": "Sınırlayıcı bileşen kütlesi en az olan maddedir.",
          "en": "The limiting component is the substance with the least mass.",
          "de": "Die limitierende Komponente ist der Stoff mit der geringsten Masse.",
          "fr": "Le composant limitant est la substance ayant la plus petite masse.",
          "ru": "Лимитирующим компонентом является вещество с наименьшей массой.",
          "ar": "العنصر المحدد هو المادة ذات الكتلة الأقل.",
          "zh": "限制成分是质量最小的物质。",
          "ku": "Hêmana sînordar maddeya bi girseya herî kêm e."
        },
        {
          "tr": "AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde seyirci iyonlar Na+ ve NO3-'dır.",
          "en": "In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), the spectator ions are Na+ and NO3-.",
          "de": "Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind die Zuschauerionen Na+ und NO3-.",
          "fr": "Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), les ions spectateurs sont Na+ et NO3-.",
          "ru": "В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Na+ и NO3-.",
          "ar": "في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، تكون الأيونات المتفرجة Na+ وNO3-.",
          "zh": "在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，旁观离子是 Na+ 和 NO3-。",
          "ku": "Di reaksiyonê de AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), îyonên temaşeker Na+ û NO3- in."
        },
        {
          "tr": "Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.",
          "en": "In all chemical reactions, the number of molecules and the gas volume are always conserved.",
          "de": "Bei allen chemischen Reaktionen bleiben die Anzahl der Moleküle und das Gasvolumen stets erhalten.",
          "fr": "Dans toutes les réactions chimiques, le nombre de molécules et le volume de gaz sont toujours conservés.",
          "ru": "Во всех химических реакциях число молекул и объем газа всегда сохраняются.",
          "ar": "في جميع التفاعلات الكيميائية، يظل عدد الجزيئات وحجم الغاز محفوظين دائمًا.",
          "zh": "在所有化学反应中，分子数和气体体积始终守恒。",
          "ku": "Di hemû reaksiyonên kîmyewî de, hejmara molekulan û qebareya gazê timî tê parastin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde seyirci iyonlar Na+ ve NO3-'dır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the reaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), the spectator ions are Na+ and NO3-.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Reaktion AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) sind die Zuschauerionen Na+ und NO3-.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la réaction AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), les ions spectateurs sont Na+ et NO3-.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции AgNO3(вод) + NaCl(вод) -> AgCl(k) + NaNO3(вод) ионами-спектаторами являются Na+ и NO3-.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعل AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq)، تكون الأيونات المتفرجة Na+ وNO3-.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在反应 AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) 中，旁观离子是 Na+ 和 NO3-。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonê de AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq), îyonên temaşeker Na+ û NO3- in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimeler ve Hesaplamalar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemical Reactions & Stoichiometry, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemische Reaktionen & Stöchiometrie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Réactions Chimiques & Calculs, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химические реакции и стехиометрия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التفاعلات الكيميائية والحسابات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应与计算”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Reaksiyonên Kîmyewî û Hesab\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.",
          "en": "In all acid-base reactions, salt and water are formed together.",
          "de": "Bei allen Säure-Base-Reaktionen entstehen gemeinsam Salz und Wasser.",
          "fr": "Dans toutes les réactions acido-basiques, le sel et l’eau se forment ensemble.",
          "ru": "Во всех кислотно-основных реакциях соль и вода образуются вместе.",
          "ar": "في جميع التفاعلات الحمضية القاعدية، يتكون الملح والماء معًا.",
          "zh": "在所有酸碱反应中，盐和水都会一起形成。",
          "ku": "Di hemû reaksiyonên asîd-bazê de xwê û av bi hev re çêdibin."
        },
        {
          "tr": "Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.",
          "en": "The precipitate formed in the dissolution-precipitation reaction consists of spectator ions.",
          "de": "Der bei der Auflösungs-Fällungsreaktion gebildete Niederschlag besteht aus Zuschauerionen.",
          "fr": "Le précipité formé lors de la réaction de dissolution-précipitation est constitué d'ions spectateurs.",
          "ru": "Осадок, образующийся в реакции растворения-осаждения, состоит из ионов-спектаторов.",
          "ar": "يتكون الراسب المتكون في تفاعل الذوبان والترسيب من أيونات متفرجة.",
          "zh": "溶解-沉淀反应中形成的沉淀物由旁观者离子组成。",
          "ku": "Barîna ku di reaksiyona belavbûn-barînê de çêdibe ji îyonên temaşevanan pêk tê."
        },
        {
          "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
          "en": "The actual yield is always greater than the theoretical yield.",
          "de": "Die tatsächliche Ausbeute ist immer größer als die theoretische Ausbeute.",
          "fr": "Le rendement réel est toujours supérieur au rendement théorique.",
          "ru": "Фактический выход всегда больше теоретического выхода.",
          "ar": "العائد الفعلي دائمًا أكبر من العائد النظري.",
          "zh": "实际产量总是大于理论产量。",
          "ku": "Berhema rastîn her gav ji berhema teorîk mezintir e."
        },
        {
          "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
          "en": "Whichever substance has the most moles, that substance runs out first.",
          "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
          "fr": "La substance qui a le plus grand nombre de moles s'épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "المادة التي لديها أكبر عدد من المولات هي التي تنفد أولاً.",
          "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
          "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
        },
        {
          "tr": "Eşit mol sayıda girenlerin tepkimesinde katsayısı büyük olan reaktif sınırlayıcı bileşendir.",
          "en": "In the reaction of equal molar numbers of reactants, the reagent with the highest coefficient is the limiting component.",
          "de": "Bei der Reaktion gleicher Molzahlen von Reaktanten ist das Reagens mit dem höchsten Koeffizienten die limitierende Komponente.",
          "fr": "Dans la réaction de nombres molaires égaux de réactifs, le réactif avec le coefficient le plus élevé est le composant limitant.",
          "ru": "В реакции равного мольного числа реагентов лимитирующим компонентом является реагент с наибольшим коэффициентом.",
          "ar": "في تفاعل الأعداد المولية المتساوية من المواد المتفاعلة، يكون الكاشف ذو المعامل الأعلى هو المكون المحدد.",
          "zh": "在等摩尔数反应物的反应中，系数最高的试剂是限制组分。",
          "ku": "Di reaksiyona hejmarên molar ên reaktantên wekhev de, reagenta bi rêjeya herî bilind pêkhateya sînordar e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Eşit mol sayıda girenlerin tepkimesinde katsayısı büyük olan reaktif sınırlayıcı bileşendir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the reaction of equal molar numbers of reactants, the reagent with the highest coefficient is the limiting component.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Reaktion gleicher Molzahlen von Reaktanten ist das Reagens mit dem höchsten Koeffizienten die limitierende Komponente.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la réaction de nombres molaires égaux de réactifs, le réactif avec le coefficient le plus élevé est le composant limitant.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакции равного мольного числа реагентов лимитирующим компонентом является реагент с наибольшим коэффициентом.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعل الأعداد المولية المتساوية من المواد المتفاعلة، يكون الكاشف ذو المعامل الأعلى هو المكون المحدد.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在等摩尔数反应物的反应中，系数最高的试剂是限制组分。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyona hejmarên molar ên reaktantên wekhev de, reagenta bi rêjeya herî bilind pêkhateya sînordar e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u07-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimeler ve Hesaplamalar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemical Reactions & Stoichiometry, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemische Reaktionen & Stöchiometrie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Réactions Chimiques & Calculs, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химические реакции и стехиометрия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التفاعلات الكيميائية والحسابات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应与计算”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Reaksiyonên Kîmyewî û Hesab\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Gaz tepkimelerinde aynı sıcaklık ve basınçta hacim oranları mol oranlarına eşittir (Gay-Lussac).",
          "en": "In gas reactions, volume ratios are equal to mole ratios at the same temperature and pressure (Gay-Lussac).",
          "de": "Bei Gasreaktionen sind die Volumenverhältnisse gleich den Molverhältnissen bei gleicher Temperatur und gleichem Druck (Gay-Lussac).",
          "fr": "Dans les réactions gazeuses, les rapports volumiques sont égaux aux rapports molaires à la même température et pression (Gay-Lussac).",
          "ru": "В газовых реакциях объемные соотношения равны мольным соотношениям при одинаковых температуре и давлении (Гей-Люссак).",
          "ar": "في تفاعلات الغازات، تكون النسب الحجمية مساوية للنسب المولية عند نفس درجة الحرارة والضغط (جاي-لوساك).",
          "zh": "在气体反应中，在相同温度和压力下，体积比等于摩尔比（盖-吕萨克）。",
          "ku": "Di reaksiyonên gazê de, rêjeyên qebareyê bi rêjeyên molê yên di heman germahî û zextê de wekhev in (Gay-Lussac)."
        },
        {
          "tr": "Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.",
          "en": "It is a synthesis reaction in which a single compound is broken down into smaller substances.",
          "de": "Es handelt sich um eine Synthesereaktion, bei der eine einzelne Verbindung in kleinere Substanzen zerlegt wird.",
          "fr": "Il s’agit d’une réaction de synthèse dans laquelle un seul composé est décomposé en substances plus petites.",
          "ru": "Это реакция синтеза, при которой одно соединение распадается на более мелкие вещества.",
          "ar": "إنه تفاعل تركيبي يتم فيه تقسيم مركب واحد إلى مواد أصغر.",
          "zh": "这是一种合成反应，其中单一化合物被分解成更小的物质。",
          "ku": "Ew reaksiyonek sentezek e ku tê de yek pêkhateyek di nav maddeyên piçûktir de tê perçe kirin."
        },
        {
          "tr": "Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.",
          "en": "The net ion equation is written according to the spectator ions remaining in the solution.",
          "de": "Die Nettoionengleichung wird entsprechend den in der Lösung verbleibenden Zuschauerionen geschrieben.",
          "fr": "L'équation des ions nets s'écrit en fonction des ions spectateurs restant dans la solution.",
          "ru": "Чистое ионное уравнение записывается в соответствии с ионами-спектаторами, оставшимися в растворе.",
          "ar": "تتم كتابة معادلة الأيونات الصافية وفقًا للأيونات المتفرجة المتبقية في المحلول.",
          "zh": "根据溶液中剩余的观察者离子编写净离子方程。",
          "ku": "Li gorî îyonên temaşeker ên ku di çareseriyê de mane hevkêşeya îyonên tevniv tê nivîsandin."
        },
        {
          "tr": "Hidrokarbonlar yandığında CO2'nin yanında H2 gazı açığa çıkar.",
          "en": "When hydrocarbons burn, H2 gas is released along with CO2.",
          "de": "Bei der Verbrennung von Kohlenwasserstoffen wird neben CO2 auch H2-Gas freigesetzt.",
          "fr": "Lorsque les hydrocarbures brûlent, du gaz H2 est libéré avec du CO2.",
          "ru": "При сгорании углеводородов вместе с CO2 выделяется газ H2.",
          "ar": "عند احتراق الهيدروكربونات، ينطلق غاز H2 مع ثاني أكسيد الكربون.",
          "zh": "当碳氢化合物燃烧时，氢气与二氧化碳一起释放。",
          "ku": "Dema ku hîdrokarbon dişewitin, gaza H2 ligel CO2 derdikeve."
        },
        {
          "tr": "Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.",
          "en": "When calculating the purity rate, the impurity part of the sample is assumed to react.",
          "de": "Bei der Berechnung der Reinheitsrate wird davon ausgegangen, dass der Verunreinigungsanteil der Probe reagiert.",
          "fr": "Lors du calcul du taux de pureté, la partie impureté de l’échantillon est supposée réagir.",
          "ru": "При расчете степени чистоты предполагается, что примесная часть образца вступает в реакцию.",
          "ar": "عند حساب معدل النقاء، يفترض أن جزء الشوائب من العينة يتفاعل.",
          "zh": "计算纯度时，假设样品的杂质部分发生反应。",
          "ku": "Dema ku rêjeya paqijiyê tê hesibandin, beşa nepakî ya nimûneyê tê texmîn kirin ku bertek nîşan dide."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gaz tepkimelerinde aynı sıcaklık ve basınçta hacim oranları mol oranlarına eşittir (Gay-Lussac).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In gas reactions, volume ratios are equal to mole ratios at the same temperature and pressure (Gay-Lussac).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei Gasreaktionen sind die Volumenverhältnisse gleich den Molverhältnissen bei gleicher Temperatur und gleichem Druck (Gay-Lussac).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions gazeuses, les rapports volumiques sont égaux aux rapports molaires à la même température et pression (Gay-Lussac).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В газовых реакциях объемные соотношения равны мольным соотношениям при одинаковых температуре и давлении (Гей-Люссак).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في تفاعلات الغازات، تكون النسب الحجمية مساوية للنسب المولية عند نفس درجة الحرارة والضغط (جاي-لوساك).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在气体反应中，在相同温度和压力下，体积比等于摩尔比（盖-吕萨克）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên gazê de, rêjeyên qebareyê bi rêjeyên molê yên di heman germahî û zextê de wekhev in (Gay-Lussac).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit07;
