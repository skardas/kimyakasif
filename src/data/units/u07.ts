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
        "ru": "Процентная доходность рассчитывается по формуле = (Фактическая доходность / Теоретическая доходность) x 100.",
        "ar": "يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.",
        "zh": "百分比收益率的计算公式为 =（实际收益率/理论收益率）x 100。",
        "ku": "Berhema ji sedî bi formula = (Rêberdana Rastî / Berhema Teorîk) x 100 tê hesibandin."
      },
      "trap": {
        "tr": "Gerçek verim teorik verimden daima daha büyüktür.",
        "en": "Actual efficiency is always greater than theoretical efficiency.",
        "de": "Der tatsächliche Wirkungsgrad ist immer größer als der theoretische Wirkungsgrad.",
        "fr": "L'efficacité réelle est toujours supérieure à l'efficacité théorique.",
        "ru": "Фактическая эффективность всегда выше теоретической эффективности.",
        "ar": "الكفاءة الفعلية دائما أكبر من الكفاءة النظرية.",
        "zh": "实际效率总是大于理论效率。",
        "ku": "Karbidestiya rastîn her gav ji karbidestiya teorîkî mezintir e."
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
        "fr": "Quelle que soit la substance qui contient le plus de grains de beauté, elle s’épuise en premier.",
        "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
        "ar": "أيًا كانت المادة التي تحتوي على أكبر عدد من الشامات، فإن تلك المادة تنفد أولاً.",
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
        "ku": "Zehfkirina hesin (4Fe + 3O2 -> 2Fe2O3) mînakek şewitandina hêdî hêdî ye."
      },
      "trap": {
        "tr": "Demirin paslanması fiziksel bir çözünme olayıdır.",
        "en": "Rusting of iron is a physical dissolution phenomenon.",
        "de": "Das Rosten von Eisen ist ein physikalisches Auflösungsphänomen.",
        "fr": "La rouille du fer est un phénomène de dissolution physique.",
        "ru": "Ржавление железа – это явление физического растворения.",
        "ar": "صدأ الحديد هو ظاهرة انحلال فيزيائي.",
        "zh": "铁的生锈是一种物理溶解现象。",
        "ku": "Zehfbûna hesin diyardeyeke fîzîkî ya têkçûyînê ye."
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
        "tr": "Yukarıdaki tepkimede Ag+ ve Cl- seyirci iyonlardır.",
        "en": "In the above reaction, Ag+ and Cl- are spectator ions.",
        "de": "In der obigen Reaktion sind Ag+ und Cl- Zuschauerionen.",
        "fr": "Dans la réaction ci-dessus, Ag+ et Cl- sont des ions spectateurs.",
        "ru": "В приведенной выше реакции Ag+ и Cl- являются ионами-спектаторами.",
        "ar": "في التفاعل أعلاه، Ag+ وCl- هما أيونان متفرجان.",
        "zh": "在上述反应中，Ag+和Cl-是旁观者离子。",
        "ku": "Di reaksiyona jorîn de Ag+ û Cl- îyonên temaşeker in."
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
        "en": "synthesis",
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
        "ku": "Analysis"
      },
      "distinction": {
        "tr": "Sentez maddelerin birleşerek tek ürün vermesi; analiz tek bileşiğin parçalanarak ayrışmasıdır.",
        "en": "Synthetic substances combine to produce a single product; analysis is the disintegration of a single compound.",
        "de": "Synthetische Stoffe verbinden sich zu einem einzigen Produkt; Analyse ist der Zerfall einer einzelnen Verbindung.",
        "fr": "Les substances synthétiques se combinent pour produire un seul produit ; l’analyse est la désintégration d’un seul composé.",
        "ru": "Синтетические вещества объединяются для производства единого продукта; Анализ представляет собой распад одного соединения.",
        "ar": "تجتمع المواد الاصطناعية لتنتج منتجاً واحداً؛ التحليل هو تفكك مركب واحد.",
        "zh": "合成物质结合起来生产单一产品；分析是单个化合物的分解。",
        "ku": "Materyalên sentetîk bi hev re hilberek yekane çêdikin; analîz perçebûna yek pêkhatî ye."
      }
    },
    {
      "id": "u07-c02",
      "conceptA": {
        "tr": "Gerçek Verim",
        "en": "Actual Yield",
        "de": "Tatsächlicher Ertrag",
        "fr": "Rendement réel",
        "ru": "Фактическая доходность",
        "ar": "العائد الفعلي",
        "zh": "实际产量",
        "ku": "Hilberîna Rastî"
      },
      "conceptB": {
        "tr": "Teorik Verim",
        "en": "Theoretical Yield",
        "de": "Theoretischer Ertrag",
        "fr": "Rendement théorique",
        "ru": "Теоретическая доходность",
        "ar": "العائد النظري",
        "zh": "理论产量",
        "ku": "Hilberîna Teorîk"
      },
      "distinction": {
        "tr": "Teorik verim hesaplanan maksimum verim; gerçek verim deneyde elde edilen net miktardır.",
        "en": "The theoretical efficiency is the calculated maximum efficiency; The actual yield is the net amount obtained in the experiment.",
        "de": "Der theoretische Wirkungsgrad ist der berechnete maximale Wirkungsgrad; Die tatsächliche Ausbeute ist die im Experiment erzielte Nettomenge.",
        "fr": "Le rendement théorique est le rendement maximal calculé ; Le rendement réel est le montant net obtenu dans l'expérience.",
        "ru": "Теоретическая эффективность — это расчетная максимальная эффективность; Фактический выход представляет собой чистую сумму, полученную в ходе эксперимента.",
        "ar": "الكفاءة النظرية هي الكفاءة القصوى المحسوبة. العائد الفعلي هو المبلغ الصافي الذي تم الحصول عليه في التجربة.",
        "zh": "理论效率是计算出的最大效率；实际产量为实验中获得的净量。",
        "ku": "Karbidestiya teorîkî karbidestiya herî zêde ya hesabkirî ye; Berhema rastîn mîqdara net e ku di ceribandinê de hatî bidestxistin."
      }
    },
    {
      "id": "u07-c03",
      "conceptA": {
        "tr": "Sentez (Oluşum) Tepkimesi",
        "en": "Synthesis Reaction",
        "de": "Synthesereaktion",
        "fr": "Réaction de synthèse",
        "ru": "Реакция синтеза",
        "ar": "رد فعل التوليف",
        "zh": "合成反应",
        "ku": "Reaksiyona Sentezê"
      },
      "conceptB": {
        "tr": "Analiz (Ayrışma) Tepkimesi",
        "en": "Analysis (Decomposition) Reaction",
        "de": "Analyse (Zersetzung) Reaktion",
        "fr": "Analyse (décomposition) Réaction",
        "ru": "Анализ (разложение) Реакция",
        "ar": "تحليل (التحلل) رد الفعل",
        "zh": "分析（分解）反应",
        "ku": "Reaksîyona Analîz (Pêkvebûn)."
      },
      "distinction": {
        "tr": "Sentez küçük maddelerden büyük bileşik oluşumudur; analiz tek bir bileşiğin daha küçük maddelere parçalanmasıdır.",
        "en": "Synthesis is the formation of large compounds from small substances; Analysis is the breakdown of a single compound into smaller substances.",
        "de": "Synthese ist die Bildung großer Verbindungen aus kleinen Substanzen; Unter Analyse versteht man die Zerlegung einer einzelnen Verbindung in kleinere Substanzen.",
        "fr": "La synthèse est la formation de gros composés à partir de petites substances ; L'analyse est la décomposition d'un seul composé en substances plus petites.",
        "ru": "Синтез — образование крупных соединений из мелких веществ; Анализ – это распад одного соединения на более мелкие вещества.",
        "ar": "التخليق هو تكوين مركبات كبيرة من مواد صغيرة؛ التحليل هو تحلل مركب واحد إلى مواد أصغر.",
        "zh": "合成是由小物质形成大化合物；分析是将单一化合物分解成更小的物质。",
        "ku": "Sentez çêbûna pêkhateyên mezin ji madeyên biçûk e; Analîz dabeşkirina yek pêkhateyek nav maddeyên piçûktir e."
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
        "en": "Limiting Component",
        "de": "Begrenzende Komponente",
        "fr": "Composant limitant",
        "ru": "Ограничивающий компонент",
        "ar": "مكون الحد",
        "zh": "限制元件",
        "ku": "Parvekirina Sînorkirin"
      },
      "conceptB": {
        "tr": "Artan Madde",
        "en": "Increased Matter",
        "de": "Erhöhte Materie",
        "fr": "Matière accrue",
        "ru": "Повышенная материя",
        "ar": "زيادة المادة",
        "zh": "增加物质",
        "ku": "Zêdebûna Madeyê"
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
        "en": "Audience Ions",
        "de": "Publikumsionen",
        "fr": "Ions du public",
        "ru": "Ионы аудитории",
        "ar": "أيونات الجمهور",
        "zh": "观众离子",
        "ku": "Audience Ions"
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
        "tr": "Sentez",
        "en": "synthesis",
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
        "ku": "Analysis"
      },
      "distinction": {
        "tr": "Sentez maddelerin birleşerek tek ürün vermesi; analiz tek bileşiğin parçalanarak ayrışmasıdır.",
        "en": "Synthetic substances combine to produce a single product; analysis is the disintegration of a single compound.",
        "de": "Synthetische Stoffe verbinden sich zu einem einzigen Produkt; Analyse ist der Zerfall einer einzelnen Verbindung.",
        "fr": "Les substances synthétiques se combinent pour produire un seul produit ; l’analyse est la désintégration d’un seul composé.",
        "ru": "Синтетические вещества объединяются для производства единого продукта; Анализ представляет собой распад одного соединения.",
        "ar": "تجتمع المواد الاصطناعية لتنتج منتجاً واحداً؛ التحليل هو تفكك مركب واحد.",
        "zh": "合成物质结合起来生产单一产品；分析是单个化合物的分解。",
        "ku": "Materyalên sentetîk bi hev re hilberek yekane çêdikin; analîz perçebûna yek pêkhatî ye."
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
          "en": "Write the balanced reaction",
          "de": "Schreiben Sie die ausgewogene Reaktion",
          "fr": "Écrivez la réaction équilibrée",
          "ru": "Напишите сбалансированную реакцию",
          "ar": "اكتب التفاعل المتوازن",
          "zh": "写出平衡反应",
          "ku": "Reaksiyona hevseng binivîsin"
        },
        {
          "tr": "Verilen miktarları mole çevir",
          "en": "Convert given amounts to moles",
          "de": "Rechne gegebene Beträge in Mol um",
          "fr": "Convertir les montants donnés en taupes",
          "ru": "Преобразовать заданные количества в моли",
          "ar": "تحويل كميات معينة إلى الشامات",
          "zh": "将给定量转换为摩尔",
          "ku": "Mîqdarên dayîn veguherînin mol"
        },
        {
          "tr": "Molü katsayıya bölüp sınırlayıcıyı bul",
          "en": "Divide the mole by the coefficient and find the limiter",
          "de": "Teilen Sie das Mol durch den Koeffizienten und finden Sie den Begrenzer",
          "fr": "Divisez la taupe par le coefficient et trouvez le limiteur",
          "ru": "Разделите моль на коэффициент и найдите ограничитель",
          "ar": "اقسم المول على المعامل وابحث عن المحدد",
          "zh": "将摩尔除以系数并找到限制器",
          "ku": "Mole bi hevberê dabeş bikin û sînorkerê bibînin"
        },
        {
          "tr": "Sınırlayıcı üzerinden ürün molünü ve kütlesini hesapla",
          "en": "Calculate product mole and mass via delimiter",
          "de": "Berechnen Sie Mol und Masse des Produkts mithilfe des Trennzeichens",
          "fr": "Calculer la mole et la masse du produit via un délimiteur",
          "ru": "Рассчитать моль и массу продукта через разделитель",
          "ar": "حساب الخلد المنتج والكتلة عن طريق المحدد",
          "zh": "通过分隔符计算产物摩尔和质量",
          "ku": "Mole û girseya hilberê bi navbeynkar hesab bikin"
        }
      ]
    },
    {
      "id": "u07-s02",
      "title": {
        "tr": "Tepkime Denkleştirme ve Hesaplama",
        "en": "Reaction Balancing and Calculation",
        "de": "Reaktionsbilanzierung und -berechnung",
        "fr": "Équilibrage et calcul de la réaction",
        "ru": "Балансировка и расчет реакций",
        "ar": "موازنة التفاعل والحساب",
        "zh": "反应平衡与计算",
        "ku": "Balansek û Hesabkirina Reaksiyonê"
      },
      "steps": [
        {
          "tr": "Tepkimeye girenler ve ürünler yazılır",
          "en": "Reactants and products are written",
          "de": "Reaktanten und Produkte werden beschrieben",
          "fr": "Les réactifs et les produits sont écrits",
          "ru": "Реагенты и продукты записаны",
          "ar": "تتم كتابة المواد المتفاعلة والمنتجات",
          "zh": "反应物和产物被写成",
          "ku": "Reaktant û hilber têne nivîsandin"
        },
        {
          "tr": "En kalabalık gruptan başlanarak atomlar eşitlenir",
          "en": "Atoms are equalized starting from the most populous group.",
          "de": "Atome werden ausgehend von der bevölkerungsreichsten Gruppe ausgeglichen.",
          "fr": "Les atomes sont égalisés en commençant par le groupe le plus peuplé.",
          "ru": "Атомы выравниваются, начиная с самой густонаселенной группы.",
          "ar": "يتم تعادل الذرات بدءًا من المجموعة الأكثر اكتظاظًا بالسكان.",
          "zh": "原子从数量最多的组开始被均衡。",
          "ku": "Atoman ji koma herî qelebalix dest pê dikin têne wekhev kirin."
        },
        {
          "tr": "Başlangıç mol sayıları katsayılarla karşılaştırılır",
          "en": "Initial mole numbers are compared with coefficients",
          "de": "Die anfänglichen Molzahlen werden mit Koeffizienten verglichen",
          "fr": "Les nombres de taupes initiaux sont comparés aux coefficients",
          "ru": "Исходные мольные числа сравниваются с коэффициентами",
          "ar": "تتم مقارنة أرقام الخلد الأولية مع المعاملات",
          "zh": "将初始摩尔数与系数进行比较",
          "ku": "Hejmarên mole yên destpêkê bi hevberan re têne berhev kirin"
        },
        {
          "tr": "Sınırlayıcı bileşene göre ürün miktarı hesaplanır",
          "en": "Product quantity is calculated according to the limiting component",
          "de": "Die Produktmenge wird entsprechend der limitierenden Komponente berechnet",
          "fr": "La quantité de produit est calculée en fonction du composant limitant",
          "ru": "Количество продукта рассчитывается по лимитирующему компоненту",
          "ar": "يتم حساب كمية المنتج وفقًا للمكون المحدد",
          "zh": "产品数量按限制成分计算",
          "ku": "Hejmara hilberê li gorî hêmana sînorkirî tê hesibandin"
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
          "ku": "Cîyon û anyon cîhên xwe diguherînin"
        },
        {
          "tr": "Az çözünen tuz çökelek halinde katılaşır",
          "en": "Slightly soluble salt solidifies as precipitate",
          "de": "Schwerlösliches Salz verfestigt sich als Niederschlag",
          "fr": "Le sel légèrement soluble se solidifie sous forme de précipité",
          "ru": "Малорастворимая соль затвердевает в виде осадка.",
          "ar": "يتصلب الملح قليل الذوبان على شكل راسب",
          "zh": "微溶盐凝固成沉淀",
          "ku": "Xwêya hindik tê çareserkirin, wekî tîrêjê hişk dibe"
        },
        {
          "tr": "Çöken katıyı gösteren net iyon denklemi yazılır",
          "en": "The net ionic equation showing the precipitated solid is written",
          "de": "Die Nettoionengleichung, die den ausgefällten Feststoff zeigt, wird geschrieben",
          "fr": "L'équation ionique nette montrant le solide précipité s'écrit",
          "ru": "Чистое ионное уравнение, показывающее выпавшее в осадок твердое вещество, записывается",
          "ar": "يتم كتابة المعادلة الأيونية الصافية التي توضح المادة الصلبة المترسبة",
          "zh": "显示沉淀固体的净离子方程写为",
          "ku": "Hevkêşana îyonî ya tora ku zewaca barkirî nîşan dide tê nivîsandin"
        }
      ]
    },
    {
      "id": "u07-s04",
      "title": {
        "tr": "Yüzde Verim Belirleme",
        "en": "Determining Percent Yield",
        "de": "Bestimmung des prozentualen Ertrags",
        "fr": "Détermination du pourcentage de rendement",
        "ru": "Определение процентной доходности",
        "ar": "تحديد العائد في المئة",
        "zh": "确定收益率百分比",
        "ku": "Tespîtkirina Ji sedî Berhemê"
      },
      "steps": [
        {
          "tr": "Sınırlayıcı bileşenden teorik ürün hesaplanır",
          "en": "The theoretical product is calculated from the limiting component",
          "de": "Aus der limitierenden Komponente wird das theoretische Produkt berechnet",
          "fr": "Le produit théorique est calculé à partir de la composante limite",
          "ru": "Теоретический продукт рассчитывается по предельной составляющей",
          "ar": "يتم حساب المنتج النظري من المكون المحدد",
          "zh": "理论乘积由限制成分计算得出",
          "ku": "Hilbera teorîk ji pêkhateya sînordar tê hesibandin"
        },
        {
          "tr": "Deneyde fiilen elde edilen gerçek ürün tartılır",
          "en": "The actual product actually obtained in the experiment is weighed",
          "de": "Das im Versuch tatsächlich erhaltene Produkt wird gewogen",
          "fr": "Le produit réellement obtenu lors de l'expérience est pesé",
          "ru": "Фактически полученный в эксперименте продукт взвешивают.",
          "ar": "يتم وزن المنتج الفعلي الذي تم الحصول عليه بالفعل في التجربة",
          "zh": "将实验中实际得到的实际产品称重",
          "ku": "Hilbera rastîn a ku di ceribandinê de hatî bidestxistin tê pîvandin"
        },
        {
          "tr": "Gerçek miktar teorik miktara bölünür",
          "en": "Actual amount divided by theoretical amount",
          "de": "Tatsächlicher Betrag dividiert durch theoretischen Betrag",
          "fr": "Montant réel divisé par le montant théorique",
          "ru": "Фактическая сумма, разделенная на теоретическую сумму",
          "ar": "المبلغ الفعلي مقسوما على المبلغ النظري",
          "zh": "实际量除以理论量",
          "ku": "Mîqdara rastîn bi mîqdara teorîk ve tê dabeş kirin"
        },
        {
          "tr": "100 ile çarpılarak yüzde verim bulunur",
          "en": "Percentage efficiency is found by multiplying by 100",
          "de": "Der prozentuale Wirkungsgrad wird durch Multiplikation mit 100 ermittelt",
          "fr": "Le pourcentage d'efficacité est obtenu en multipliant par 100",
          "ru": "Процент эффективности находится путем умножения на 100.",
          "ar": "يتم العثور على الكفاءة المئوية عن طريق الضرب في 100",
          "zh": "乘以 100 即可得出百分比效率",
          "ku": "Rêjeya ji sedî bi 100-ê zêde dibe tê dîtin"
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
          "ku": "Zehfbûna hesin diyardeyeke fîzîkî ya têkçûyînê ye."
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
          "en": "Actual efficiency is always greater than theoretical efficiency.",
          "de": "Der tatsächliche Wirkungsgrad ist immer größer als der theoretische Wirkungsgrad.",
          "fr": "L'efficacité réelle est toujours supérieure à l'efficacité théorique.",
          "ru": "Фактическая эффективность всегда выше теоретической эффективности.",
          "ar": "الكفاءة الفعلية دائما أكبر من الكفاءة النظرية.",
          "zh": "实际效率总是大于理论效率。",
          "ku": "Karbidestiya rastîn her gav ji karbidestiya teorîkî mezintir e."
        },
        {
          "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
          "en": "Whichever substance has the most moles, that substance runs out first.",
          "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
          "fr": "Quelle que soit la substance qui contient le plus de grains de beauté, elle s’épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "أيًا كانت المادة التي تحتوي على أكبر عدد من الشامات، فإن تلك المادة تنفد أولاً.",
          "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
          "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
        },
        {
          "tr": "Yukarıdaki tepkimede Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the above reaction, Ag+ and Cl- are spectator ions.",
          "de": "In der obigen Reaktion sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction ci-dessus, Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В приведенной выше реакции Ag+ и Cl- являются ионами-спектаторами.",
          "ar": "في التفاعل أعلاه، Ag+ وCl- هما أيونان متفرجان.",
          "zh": "在上述反应中，Ag+和Cl-是旁观者离子。",
          "ku": "Di reaksiyona jorîn de Ag+ û Cl- îyonên temaşeker in."
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
          "ku": "Zehfbûna hesin diyardeyeke fîzîkî ya têkçûyînê ye."
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
          "fr": "Quelle que soit la substance qui contient le plus de grains de beauté, elle s’épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "أيًا كانت المادة التي تحتوي على أكبر عدد من الشامات، فإن تلك المادة تنفد أولاً.",
          "zh": "无论哪种物质的摩尔数最多，该物质都会先耗尽。",
          "ku": "Kîjan maddeya ku herî zêde molên wê hebin, ew madde pêşî diqede."
        },
        {
          "tr": "Yukarıdaki tepkimede Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the above reaction, Ag+ and Cl- are spectator ions.",
          "de": "In der obigen Reaktion sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction ci-dessus, Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В приведенной выше реакции Ag+ и Cl- являются ионами-спектаторами.",
          "ar": "في التفاعل أعلاه، Ag+ وCl- هما أيونان متفرجان.",
          "zh": "在上述反应中，Ag+和Cl-是旁观者离子。",
          "ku": "Di reaksiyona jorîn de Ag+ û Cl- îyonên temaşeker in."
        },
        {
          "tr": "Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.",
          "en": "Percentage yield is calculated with the formula = (Actual Yield / Theoretical Yield) x 100.",
          "de": "Der prozentuale Ertrag wird mit der Formel = (tatsächlicher Ertrag / theoretischer Ertrag) x 100 berechnet.",
          "fr": "Le rendement en pourcentage est calculé avec la formule = (Rendement réel / Rendement théorique) x 100.",
          "ru": "Процентная доходность рассчитывается по формуле = (Фактическая доходность / Теоретическая доходность) x 100.",
          "ar": "يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.",
          "zh": "百分比收益率的计算公式为 =（实际收益率/理论收益率）x 100。",
          "ku": "Berhema ji sedî bi formula = (Rêberdana Rastî / Berhema Teorîk) x 100 tê hesibandin."
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
        "ru": "Правильное утверждение: «Процентная доходность рассчитывается по формуле = (Фактическая доходность / Теоретическая доходность) x 100.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم حساب نسبة العائد باستخدام الصيغة = (العائد الفعلي / العائد النظري) × 100.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“百分比收益率的计算公式为 =（实际收益率/理论收益率）x 100。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Berhema ji sedî bi formula = (Rêberdana Rastî / Berhema Teorîk) x 100 tê hesibandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "ku": "Zehfbûna hesin diyardeyeke fîzîkî ya têkçûyînê ye."
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
          "tr": "Yukarıdaki tepkimede Ag+ ve Cl- seyirci iyonlardır.",
          "en": "In the above reaction, Ag+ and Cl- are spectator ions.",
          "de": "In der obigen Reaktion sind Ag+ und Cl- Zuschauerionen.",
          "fr": "Dans la réaction ci-dessus, Ag+ et Cl- sont des ions spectateurs.",
          "ru": "В приведенной выше реакции Ag+ и Cl- являются ионами-спектаторами.",
          "ar": "في التفاعل أعلاه، Ag+ وCl- هما أيونان متفرجان.",
          "zh": "在上述反应中，Ag+和Cl-是旁观者离子。",
          "ku": "Di reaksiyona jorîn de Ag+ û Cl- îyonên temaşeker in."
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
          "en": "Actual efficiency is always greater than theoretical efficiency.",
          "de": "Der tatsächliche Wirkungsgrad ist immer größer als der theoretische Wirkungsgrad.",
          "fr": "L'efficacité réelle est toujours supérieure à l'efficacité théorique.",
          "ru": "Фактическая эффективность всегда выше теоретической эффективности.",
          "ar": "الكفاءة الفعلية دائما أكبر من الكفاءة النظرية.",
          "zh": "实际效率总是大于理论效率。",
          "ku": "Karbidestiya rastîn her gav ji karbidestiya teorîkî mezintir e."
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
          "ku": "Zehfkirina hesin (4Fe + 3O2 -> 2Fe2O3) mînakek şewitandina hêdî hêdî ye."
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
        "ku": "Gotina rast ev e: \"Zehfkirina hesin (4Fe + 3O2 -> 2Fe2O3) mînakek şewitandina hêdî hêdî ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "en": "Actual efficiency is always greater than theoretical efficiency.",
          "de": "Der tatsächliche Wirkungsgrad ist immer größer als der theoretische Wirkungsgrad.",
          "fr": "L'efficacité réelle est toujours supérieure à l'efficacité théorique.",
          "ru": "Фактическая эффективность всегда выше теоретической эффективности.",
          "ar": "الكفاءة الفعلية دائما أكبر من الكفاءة النظرية.",
          "zh": "实际效率总是大于理论效率。",
          "ku": "Karbidestiya rastîn her gav ji karbidestiya teorîkî mezintir e."
        },
        {
          "tr": "Hangi maddeden daha çok mol varsa o madde önce biter.",
          "en": "Whichever substance has the most moles, that substance runs out first.",
          "de": "Welche Substanz auch immer die meisten Mole hat, diese Substanz geht zuerst aus.",
          "fr": "Quelle que soit la substance qui contient le plus de grains de beauté, elle s’épuise en premier.",
          "ru": "В каком бы веществе ни было больше всего молей, оно исчерпается первым.",
          "ar": "أيًا كانت المادة التي تحتوي على أكبر عدد من الشامات، فإن تلك المادة تنفد أولاً.",
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
