import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit14: ChemistryUnitSeedData = {
  "id": "u14",
  "order": 14,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Sıvı Çözeltiler ve Derişim Birimleri",
    "en": "Liquid Solutions & Concentrations",
    "de": "Flüssige Lösungen & Konzentrationen",
    "fr": "Solutions Liquides & Concentrations",
    "ru": "Жидкие растворы и концентрации",
    "ar": "المحاليل السائلة والتركيز",
    "zh": "溶液与浓度单位",
    "ku": "Şilavên Çareseriyê û Yekeyên Hêrbûnê"
  },
  "subtitle": {
    "tr": "Molarite, Molalite, Mol Kesri ve Seyreltme",
    "en": "Molarity, Molality, Mole Fraction",
    "de": "Molarität, Molalität, Stoffmengenanteil und Verdünnung",
    "fr": "Molarité, molalité, fraction taupe et dilution",
    "ru": "Молярность, моляльность, мольная доля и разбавление",
    "ar": "المولارية، المولالية، الكسر المولي والتخفيف",
    "zh": "物质的量浓度、质量摩尔浓度、摩尔分数和稀释",
    "ku": "Molarity, Molality, Mole Fraction and Dilution"
  },
  "facts": [
    {
      "id": "u14-f01",
      "fact": {
        "tr": "Molarite (M), 1 litre çözeltide çözünmüş maddenin mol sayısıdır (M = n / V_çözelti(L)).",
        "en": "Molarity (M) is the number of moles of dissolved substance in 1 liter of solution (M = n / V_solution(L)).",
        "de": "Molarität (M) ist die Anzahl der Mol gelöster Substanz in 1 Liter Lösung (M = n / V_Lösung(L)).",
        "fr": "La molarité (M) est le nombre de moles de substance dissoute dans 1 litre de solution (M = n / V_solution(L)).",
        "ru": "Молярность (М) – это количество молей растворенного вещества в 1 л раствора (М = n/V_раствор(L)).",
        "ar": "المولارية (M) هي عدد مولات المادة المذابة في 1 لتر من المحلول (M = n / V_solution(L)).",
        "zh": "摩尔浓度 (M) 是 1 升溶液中溶解物质的摩尔数 (M = n / V_solution(L))。",
        "ku": "Molarîte (M) hejmara molên maddeya ku di 1 lîtreya çareseriyê de hatiye hilweşandin e (M = n / V_çareserî(L))."
      },
      "trap": {
        "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
        "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
        "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
        "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
        "ru": "Молярность – это количество молей растворенного вещества в 1 килограмме растворителя.",
        "ar": "المولارية هي عدد مولات المذاب في 1 كيلوجرام من المذيب.",
        "zh": "摩尔浓度是1千克溶剂中溶质的摩尔数。",
        "ku": "Molarity hejmara molên maddeya çareserkirî ye di 1 kîloya helwêstê de."
      }
    },
    {
      "id": "u14-f02",
      "fact": {
        "tr": "Molalite (m), 1 kilogram (1000 g) çözücüde çözünmüş maddenin mol sayısıdır (m = n / kg_çözücü).",
        "en": "Molality (m) is the number of moles of solute dissolved in 1 kilogram (1000 g) of solvent (m = n / kg_solvent).",
        "de": "Molalität (m) ist die Anzahl der Mol gelöster Stoffe, die in 1 Kilogramm (1000 g) Lösungsmittel gelöst sind (m = n / kg_Lösungsmittel).",
        "fr": "La molalité (m) est le nombre de moles de soluté dissoutes dans 1 kilogramme (1 000 g) de solvant (m = n / kg_solvant).",
        "ru": "Моляльность (m) — это количество молей растворенного вещества, растворенного в 1 килограмме (1000 г) растворителя (m = n/кг_растворителя).",
        "ar": "المولالية (م) هي عدد مولات المذاب المذابة في 1 كيلوجرام (1000 جم) من المذيب (م = ن / كجم_المذيب).",
        "zh": "质量摩尔浓度 (m) 是溶解在 1 千克（1000 克）溶剂中的溶质的物质的量（m = n / kg_溶剂）。",
        "ku": "Molalîte (m) hejmara molên maddeya ku di 1 kîlo (1000 g) helwêstê de tê helandin e (m = n / kg_solvent)."
      },
      "trap": {
        "tr": "Molalite çözeltinin toplam hacmine bölünerek bulunur.",
        "en": "Molality is found by dividing by the total volume of the solution.",
        "de": "Die Molalität wird durch Division durch das Gesamtvolumen der Lösung ermittelt.",
        "fr": "La molalité se trouve en divisant par le volume total de la solution.",
        "ru": "Моляльность находится путем деления на общий объем раствора.",
        "ar": "يتم العثور على المولالية عن طريق القسمة على الحجم الكلي للحل.",
        "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
        "ku": "Molality bi dabeşkirina bi qebareya tevahî ya çareseriyê ve tê dîtin."
      }
    },
    {
      "id": "u14-f03",
      "fact": {
        "tr": "Mol kesri (X), bir bileşenin mol sayısının toplam mol sayısına oranıdır (XA = nA / ntoplam); toplamı 1'dir.",
        "en": "Mole fraction (X) is the ratio of the number of moles of a component to the total number of moles (XA = nA / ntotal); total is 1.",
        "de": "Der Molenbruch (X) ist das Verhältnis der Molzahl einer Komponente zur Gesamtmolzahl (XA = nA / ntotal); Insgesamt ist 1.",
        "fr": "La fraction molaire (X) est le rapport du nombre de moles d'un composant au nombre total de moles (XA = nA/ntotal) ; le total est de 1.",
        "ru": "Мольная доля (Х) – отношение количества молей компонента к общему количеству молей (ХА = nA/nобщ); итого 1.",
        "ar": "الكسر المولي (X) هو نسبة عدد مولات المكون إلى إجمالي عدد الشامات (XA = nA / ntotal)؛ المجموع هو 1.",
        "zh": "摩尔分数（X）是某一组分的摩尔数与总摩尔数的比值（XA=nA/ntotal）；总计为 1。",
        "ku": "Parçeya molê (X) rêjeya jimara molên hêmanekê bi tevahî hejmara molan re ye (XA = nA / ntotal); giştî 1 e."
      },
      "trap": {
        "tr": "Mol kesri 1'den büyük değerler alabilir.",
        "en": "The mole fraction can take values ​​greater than 1.",
        "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
        "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
        "ru": "Мольная доля может принимать значения больше 1.",
        "ar": "يمكن أن يأخذ جزء المول قيمًا أكبر من 1.",
        "zh": "摩尔分数可以取大于1的值。",
        "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
      }
    },
    {
      "id": "u14-f04",
      "fact": {
        "tr": "Özkütle ve kütlece yüzde bilindiğinde molarite: M = (%C * d * 10) / MA formülüyle hesaplanır.",
        "en": "When the density and mass percentage are known, molarity is calculated with the formula: M = (%C * d * 10) / MA.",
        "de": "Wenn die Dichte und der Massenanteil bekannt sind, wird die Molarität mit der Formel berechnet: M = (%C * d * 10) / MA.",
        "fr": "Lorsque la densité et le pourcentage massique sont connus, la molarité est calculée avec la formule : M = (%C * d * 10) / MA.",
        "ru": "Когда известны плотность и массовый процент, молярность рассчитывают по формуле: M = (%C * d * 10) / MA.",
        "ar": "عندما تكون الكثافة ونسبة الكتلة معروفة، يتم حساب المولارية بالصيغة: M = (%C * d * 10) / MA.",
        "zh": "当密度和质量百分比已知时，摩尔浓度的计算公式为：M = (%C * d * 10) / MA。",
        "ku": "Dema ku tîrbûn û rêjeya girseyê tê zanîn, molarî bi formulê tê hesibandin: M = (%C * d * 10) / MA."
      },
      "trap": {
        "tr": "Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.",
        "en": "When calculating molarity, the solution density is divided by mass percentage.",
        "de": "Bei der Berechnung der Molarität wird die Lösungsdichte durch den Massenprozentsatz dividiert.",
        "fr": "Lors du calcul de la molarité, la densité de la solution est divisée par le pourcentage massique.",
        "ru": "При расчете молярности плотность раствора делят на массовые проценты.",
        "ar": "عند حساب المولارية، يتم تقسيم كثافة المحلول على النسبة المئوية للكتلة.",
        "zh": "计算摩尔浓度时，用溶液密度除以质量百分比。",
        "ku": "Dema ku molarity tê hesibandin, dendika çareseriyê bi rêjeya girseyî tê dabeş kirin."
      }
    },
    {
      "id": "u14-f05",
      "fact": {
        "tr": "Çözeltilerin karıştırılması formülü: M1V1 + M2V2 + ... = M_son * V_toplam'dır.",
        "en": "The formula for mixing solutions is: M1V1 + M2V2 + ... = M_last * V_total.",
        "de": "Die Formel zum Mischen von Lösungen lautet: M1V1 + M2V2 + ... = M_last * V_total.",
        "fr": "La formule de mélange des solutions est la suivante : M1V1 + M2V2 + ... = M_last * V_total.",
        "ru": "Формула смешивания растворов: M1V1 + M2V2 + ... = M_last * V_total.",
        "ar": "صيغة خلط المحاليل هي: M1V1 + M2V2 + ... = M_last * V_total.",
        "zh": "混合解的公式为：M1V1 + M2V2 + ... = M_last * V_total。",
        "ku": "Formula tevlihevkirina çareseriyan ev e: M1V1 + M2V2 + ... = M_dawîn * V_total."
      },
      "trap": {
        "tr": "Çözeltiler karıştırıldığında hacimler asla toplanamaz.",
        "en": "Volumes can never be summed when solutions are mixed.",
        "de": "Volumina können niemals summiert werden, wenn Lösungen gemischt werden.",
        "fr": "Les volumes ne peuvent jamais être additionnés lorsque les solutions sont mélangées.",
        "ru": "Объемы никогда не суммируются при смешивании растворов.",
        "ar": "لا يمكن أبدًا جمع الأحجام عند خلط المحاليل.",
        "zh": "当溶液混合时，体积永远无法相加。",
        "ku": "Dema ku çareserî tevlihev bibin cild qet nayên berhev kirin."
      }
    },
    {
      "id": "u14-f06",
      "fact": {
        "tr": "İyonik katı suda çözündüğünde çözeltideki iyon derişimi tuzun molaritesi ile iyon katsayısının çarpımıdır.",
        "en": "When an ionic solid is dissolved in water, the ion concentration in the solution is the product of the molarity of the salt and the ionic coefficient.",
        "de": "Wenn ein ionischer Feststoff in Wasser gelöst wird, ist die Ionenkonzentration in der Lösung das Produkt aus der Molarität des Salzes und dem Ionenkoeffizienten.",
        "fr": "Lorsqu'un solide ionique est dissous dans l'eau, la concentration en ions dans la solution est le produit de la molarité du sel et du coefficient ionique.",
        "ru": "Когда ионное твердое вещество растворяется в воде, концентрация ионов в растворе является произведением молярности соли и ионного коэффициента.",
        "ar": "عندما تذوب مادة صلبة أيونية في الماء، فإن تركيز الأيونات في المحلول يكون حاصل ضرب مولارية الملح والمعامل الأيوني.",
        "zh": "当离子固体溶解在水中时，溶液中的离子浓度是盐的摩尔浓度和离子系数的乘积。",
        "ku": "Dema ku hişkek îyonî di nav avê de tê hilweşandin, kombûna îyonê ya di nav çareseriyê de hilbera molarîteya xwê û rêjeya îyonî ye."
      },
      "trap": {
        "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
        "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
        "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
        "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
        "ru": "Концентрация хлорид-ионов в 0,1 М растворе AlCl3 составляет 0,1 М.",
        "ar": "تركيز أيون الكلوريد في محلول 0.1 مولار AlCl3 هو 0.1 مولار.",
        "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
        "ku": "Di çareseriya 0,1 M AlCl3 de rêjeya îyona klorîdê 0,1 M e."
      },
      "osymTip": {
        "tr": "0,1 M AlCl3'te [Cl-] = 3 * 0,1 = 0,3 M'dır!",
        "en": "In 0.1 M AlCl3, [Cl-] = 3 * 0.1 = 0.3 M!",
        "de": "In 0,1 M AlCl3 ist [Cl-] = 3 * 0,1 = 0,3 M!",
        "fr": "Dans 0,1 M AlCl3, [Cl-] = 3 * 0,1 = 0,3 M !",
        "ru": "В 0,1 М AlCl3 [Cl-] = 3*0,1 = 0,3 М!",
        "ar": "في 0.1 مولار AlCl3، [Cl-] = 3 * 0.1 = 0.3 مولار!",
        "zh": "在 0.1 M AlCl3 中，[Cl-] = 3 * 0.1 = 0.3 M！",
        "ku": "Di 0,1 M AlCl3, [Cl-] = 3 * 0,1 = 0,3 M!"
      }
    },
    {
      "id": "u14-f07",
      "fact": {
        "tr": "Çözeltiye saf su eklendiğinde (seyreltme) çözünenin mol sayısı değişmez; formül M1V1 = M2V2'dir.",
        "en": "When pure water is added to the solution (dilution), the number of moles of solute does not change; The formula is M1V1 = M2V2.",
        "de": "Wenn der Lösung reines Wasser zugesetzt wird (Verdünnung), ändert sich die Molzahl des gelösten Stoffes nicht; Die Formel lautet M1V1 = M2V2.",
        "fr": "Lorsque de l’eau pure est ajoutée à la solution (dilution), le nombre de moles de soluté ne change pas ; La formule est M1V1 = M2V2.",
        "ru": "При добавлении к раствору чистой воды (разбавлении) количество молей растворенного вещества не меняется; Формула: M1V1 = M2V2.",
        "ar": "عند إضافة الماء النقي إلى المحلول (التخفيف)، لا يتغير عدد مولات المذاب؛ الصيغة هي M1V1 = M2V2.",
        "zh": "当溶液中加入纯水（稀释）时，溶质的摩尔数不变；公式为M1V1=M2V2。",
        "ku": "Dema ku ava saf li haletê tê zêdekirin (dilution), hêjmara molên sosret naguhere; Formula M1V1 = M2V2 e."
      },
      "trap": {
        "tr": "Su eklendiğinde çözünenin mol sayısı yarıya iner.",
        "en": "When water is added, the number of moles of solute is halved.",
        "de": "Bei Zugabe von Wasser halbiert sich die Molzahl des gelösten Stoffes.",
        "fr": "Lorsque de l’eau est ajoutée, le nombre de moles de soluté est réduit de moitié.",
        "ru": "При добавлении воды количество молей растворенного вещества уменьшается вдвое.",
        "ar": "عند إضافة الماء، ينخفض ​​عدد مولات المذاب إلى النصف.",
        "zh": "当添加水时，溶质的摩尔数减半。",
        "ku": "Dema ku av lê tê zêdekirin, hejmara molên maddeyê nîvî dibe."
      }
    },
    {
      "id": "u14-f08",
      "fact": {
        "tr": "Çözeltiden çökme olmadan su buharlaştırılırsa (deriştirme) molarite artar.",
        "en": "If water is evaporated from solution without precipitating (concentration), molarity increases.",
        "de": "Wenn Wasser aus der Lösung verdampft wird, ohne dass es zur Ausfällung kommt (Konzentration), erhöht sich die Molarität.",
        "fr": "Si l'eau s'évapore de la solution sans précipiter (concentration), la molarité augmente.",
        "ru": "Если воду испарять из раствора без выпадения в осадок (концентрирование), то молярность увеличивается.",
        "ar": "إذا تبخر الماء من المحلول دون ترسيب (تركيز)، تزداد المولارية.",
        "zh": "如果水从溶液中蒸发而没有沉淀（浓缩），则摩尔浓度会增加。",
        "ku": "Ger av ji çareseriyê bê barandin (tevlihevkirin) bê hilmandin, molarî zêde dibe."
      },
      "trap": {
        "tr": "Su buharlaştırıldığında çözünen madde kütlesi azalır.",
        "en": "When water is evaporated, the mass of solute decreases.",
        "de": "Wenn Wasser verdunstet, nimmt die Masse des gelösten Stoffes ab.",
        "fr": "Lorsque l’eau s’évapore, la masse de soluté diminue.",
        "ru": "При испарении воды масса растворенного вещества уменьшается.",
        "ar": "عندما يتبخر الماء، تقل كتلة المذاب.",
        "zh": "当水蒸发时，溶质的质量减少。",
        "ku": "Dema ku av tê hilmikandin, girseya maddeyê kêm dibe."
      }
    },
    {
      "id": "u14-f09",
      "fact": {
        "tr": "Farklı çözeltiler karıştırıldığında ortak iyonların toplam molü toplam hacme bölünerek yeni derişim bulunur.",
        "en": "When different solutions are mixed, the new concentration is found by dividing the total moles of common ions by the total volume.",
        "de": "Wenn verschiedene Lösungen gemischt werden, wird die neue Konzentration ermittelt, indem die Gesamtmole der gemeinsamen Ionen durch das Gesamtvolumen dividiert werden.",
        "fr": "Lorsque différentes solutions sont mélangées, la nouvelle concentration est trouvée en divisant le nombre total de moles d’ions communs par le volume total.",
        "ru": "При смешивании разных растворов новую концентрацию определяют путем деления общего количества молей общих ионов на общий объем.",
        "ar": "عند خلط محاليل مختلفة، يتم الحصول على التركيز الجديد بقسمة إجمالي مولات الأيونات الشائعة على الحجم الإجمالي.",
        "zh": "当混合不同的溶液时，通过将公共离子的总摩尔数除以总体积来找到新的浓度。",
        "ku": "Dema ku çareseriyên cihêreng tevdigerin, bi dabeşkirina tevaya molên îyonên hevpar bi qebareya tevayî re konsantasyona nû tê dîtin."
      },
      "trap": {
        "tr": "Ortak iyonların derişimi karıştırmadan etkilenmez.",
        "en": "The concentration of common ions is not affected by mixing.",
        "de": "Die Konzentration gemeinsamer Ionen wird durch das Mischen nicht beeinflusst.",
        "fr": "La concentration des ions communs n'est pas affectée par le mélange.",
        "ru": "Смешивание не влияет на концентрацию общих ионов.",
        "ar": "لا يتأثر تركيز الأيونات المشتركة بالخلط.",
        "zh": "共同离子的浓度不受混合的影响。",
        "ku": "Tevlihevkirina îyonên hevpar bi tevlihevkirinê bandor nabe."
      }
    },
    {
      "id": "u14-f10",
      "fact": {
        "tr": "Sıcaklık arttıkça sıvı çözeltilerin hacmi genleştiğinden molarite bir miktar azalır; molalite ise sıcaklıkla değişmez.",
        "en": "As the temperature increases, the molarity decreases slightly as the volume of liquid solutions expands; Molality does not change with temperature.",
        "de": "Mit steigender Temperatur nimmt die Molarität leicht ab, da sich das Volumen flüssiger Lösungen ausdehnt; Die Molalität ändert sich nicht mit der Temperatur.",
        "fr": "À mesure que la température augmente, la molarité diminue légèrement à mesure que le volume des solutions liquides augmente ; La molalité ne change pas avec la température.",
        "ru": "С повышением температуры молярность несколько уменьшается по мере расширения объема жидких растворов; Моляльность не меняется с температурой.",
        "ar": "مع زيادة درجة الحرارة، تنخفض المولية قليلاً مع توسع حجم المحاليل السائلة؛ المولالية لا تتغير مع درجة الحرارة.",
        "zh": "随着温度的升高，随着液体溶液体积的膨胀，摩尔浓度略有下降；质量摩尔浓度不随温度变化。",
        "ku": "Her ku germahî zêde dibe, dema ku qebareya çareseriyên şilek berfireh dibe, molarî hinekî kêm dibe; Molality bi germê nayê guhertin."
      },
      "trap": {
        "tr": "Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.",
        "en": "Molality decreases as temperature increases due to volume expansion.",
        "de": "Die Molalität nimmt mit steigender Temperatur aufgrund der Volumenausdehnung ab.",
        "fr": "La molalité diminue à mesure que la température augmente en raison de l'expansion du volume.",
        "ru": "Моляльность уменьшается с увеличением температуры из-за объемного расширения.",
        "ar": "تتناقص المولالية مع زيادة درجة الحرارة بسبب توسع الحجم.",
        "zh": "由于体积膨胀，质量摩尔浓度随温度升高而降低。",
        "ku": "Her ku germahî zêde dibe ji ber berbelavbûna qebareyê molalîte kêm dibe."
      }
    },
    {
      "id": "u14-f11",
      "fact": {
        "tr": "Doymamış bir çözeltiyi doygun hale getirmek için çözünen eklemek, su buharlaştırmak veya soğutmak (endotermikse) gerekir.",
        "en": "To make an unsaturated solution saturated, it is necessary to add solute, evaporate water, or cool (if endothermic).",
        "de": "Um eine ungesättigte Lösung zu sättigen, ist es notwendig, gelösten Stoff hinzuzufügen, Wasser zu verdampfen oder abzukühlen (falls endotherm).",
        "fr": "Pour saturer une solution insaturée, il est nécessaire d’ajouter du soluté, d’évaporer de l’eau ou de la refroidir (si elle est endothermique).",
        "ru": "Чтобы сделать ненасыщенный раствор насыщенным, необходимо добавить растворенное вещество, выпарить воду или охладить (если эндотермический).",
        "ar": "لجعل المحلول غير المشبع مشبعًا، من الضروري إضافة الماء المذاب أو المتبخر أو البارد (إذا كان ماصًا للحرارة).",
        "zh": "要使不饱和溶液饱和，需要添加溶质、蒸发水或冷却（如果是吸热的）。",
        "ku": "Ji bo ku çareseriyek ne têrkirî têr bibe, pêdivî ye ku meriv soletê lê zêde bike, avê bikelînin, an jî sar bike (eger endotermîk)."
      },
      "trap": {
        "tr": "Doymamış çözeltiye su eklenirse doygun hale gelir.",
        "en": "If water is added to an unsaturated solution, it becomes saturated.",
        "de": "Fügt man einer ungesättigten Lösung Wasser hinzu, wird diese gesättigt.",
        "fr": "Si de l'eau est ajoutée à une solution insaturée, elle devient saturée.",
        "ru": "Если к ненасыщенному раствору добавить воду, он станет насыщенным.",
        "ar": "إذا أضيف الماء إلى محلول غير مشبع، يصبح مشبعا.",
        "zh": "如果将水添加到不饱和溶液中，它就会变成饱和溶液。",
        "ku": "Ger av li çaraleke têrnebûyî were zêdekirin, ew têr dibe."
      }
    },
    {
      "id": "u14-f12",
      "fact": {
        "tr": "Elektrolit çözeltiler serbest iyonlar içerdiği için elektrik akımını iletir (tuzlu su, asitler, bazlar).",
        "en": "Electrolyte solutions conduct electric current because they contain free ions (salt water, acids, bases).",
        "de": "Elektrolytlösungen leiten elektrischen Strom, weil sie freie Ionen (Salzwasser, Säuren, Basen) enthalten.",
        "fr": "Les solutions électrolytiques conduisent le courant électrique car elles contiennent des ions libres (eau salée, acides, bases).",
        "ru": "Растворы электролитов проводят электрический ток, поскольку содержат свободные ионы (соленая вода, кислоты, основания).",
        "ar": "تقوم محاليل الإلكتروليت بتوصيل التيار الكهربائي لأنها تحتوي على أيونات حرة (ماء مالح، أحماض، قواعد).",
        "zh": "电解质溶液之所以能传导电流，是因为它们含有自由离子（盐水、酸、碱）。",
        "ku": "Çareseriyên elektrolîtê îyonên azad (ava xwê, asîd, baz) dihewîne elektrîkê."
      },
      "trap": {
        "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
        "en": "Sugar water conducts electricity very well because it contains free ions.",
        "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
        "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
        "ru": "Сахарная вода очень хорошо проводит электричество, поскольку содержит свободные ионы.",
        "ar": "يوصل الماء بالسكر الكهرباء بشكل جيد للغاية لأنه يحتوي على أيونات حرة.",
        "zh": "糖水导电性很好，因为它含有自由离子。",
        "ku": "Ava şekir elektrîkê pir baş derbas dike ji ber ku îyonên belaş dihewîne."
      }
    },
    {
      "id": "u14-f13",
      "fact": {
        "tr": "Moleküler çözünen maddeler (glikoz C6H12O6, etil alkol C2H5OH) elektrik akımını iletmez (elektrolit değildir).",
        "en": "Molecular solutes (glucose C6H12O6, ethyl alcohol C2H5OH) do not conduct electric current (are not electrolytes).",
        "de": "Molekulare gelöste Stoffe (Glucose C6H12O6, Ethylalkohol C2H5OH) leiten keinen elektrischen Strom (sind keine Elektrolyte).",
        "fr": "Les solutés moléculaires (glucose C6H12O6, alcool éthylique C2H5OH) ne conduisent pas le courant électrique (ne sont pas des électrolytes).",
        "ru": "Молекулярные растворенные вещества (глюкоза C6H12O6, этиловый спирт C2H5OH) не проводят электрический ток (не являются электролитами).",
        "ar": "المذابات الجزيئية (الجلوكوز C6H12O6، الكحول الإيثيلي C2H5OH) لا توصل التيار الكهربائي (ليست إلكتروليتات).",
        "zh": "分子溶质（葡萄糖C6H12O6、乙醇C2H5OH）不导电（不是电解质）。",
        "ku": "Alkolên molekulî (glîkoz C6H12O6, alkola etîl C2H5OH) elektrîkê nagirin (elektrolît ne)."
      },
      "trap": {
        "tr": "Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.",
        "en": "Sugar ionizes in water and dissociates into H+ and OH- ions.",
        "de": "Zucker ionisiert in Wasser und zerfällt in H+- und OH--Ionen.",
        "fr": "Le sucre s'ionise dans l'eau et se dissocie en ions H+ et OH-.",
        "ru": "Сахар ионизируется в воде и диссоциирует на ионы H+ и OH-.",
        "ar": "يتأين السكر في الماء ويتفكك إلى أيونات H+ و OH-.",
        "zh": "糖在水中电离并解离成 H+ 和 OH- 离子。",
        "ku": "Şekir di avê de îyonîze dibe û dibe îyonên H+ û OH-."
      }
    },
    {
      "id": "u14-f14",
      "fact": {
        "tr": "0,2 M 500 mL NaCl çözeltisinde çözünmüş NaCl mol sayısı n = M * V = 0,2 * 0,5 = 0,1 moldür.",
        "en": "The number of moles of NaCl dissolved in 0.2 M 500 mL NaCl solution is n = M * V = 0.2 * 0.5 = 0.1 mol.",
        "de": "Die Anzahl der Mol NaCl, gelöst in 0,2 M 500 ml NaCl-Lösung, beträgt n = M * V = 0,2 * 0,5 = 0,1 Mol.",
        "fr": "Le nombre de moles de NaCl dissoutes dans une solution de NaCl 0,2 M dans 500 ml est n = M * V = 0,2 * 0,5 = 0,1 mol.",
        "ru": "Число молей NaCl, растворенного в 0,2 М растворе NaCl в 500 мл, равно n = M * V = 0,2 * 0,5 = 0,1 моль.",
        "ar": "عدد مولات NaCl المذابة في محلول NaCl 0.2 M 500 ml هو n = M * V = 0.2 * 0.5 = 0.1 mol.",
        "zh": "0.2 M 500 mL NaCl 溶液中溶解的 NaCl 摩尔数为 n = M * V = 0.2 * 0.5 = 0.1 mol。",
        "ku": "Hejmara molên NaCl yên ku di 0,2 M 500 mL çareseriya NaCl de têne hilweşandin n = M * V = 0,2 * 0,5 = 0,1 mol e."
      },
      "trap": {
        "tr": "0,2 M 500 mL çözeltide 1 mol tuz çözünmüştür.",
        "en": "1 mole of salt was dissolved in 500 mL of 0.2 M solution.",
        "de": "1 Mol Salz wurde in 500 ml einer 0,2 M Lösung gelöst.",
        "fr": "1 mole de sel a été dissoute dans 500 ml de solution 0,2 M.",
        "ru": "1 моль соли растворяли в 500 мл 0,2 М раствора.",
        "ar": "تم إذابة 1 مول من الملح في 500 مل من محلول 0.2 م.",
        "zh": "将 1 摩尔盐溶解在 500 mL 0.2 M 溶液中。",
        "ku": "1 mol xwê di 500 ml çareseriya 0,2 M de hate hilweşandin."
      }
    },
    {
      "id": "u14-f15",
      "fact": {
        "tr": "Çözelti derişimi arttıkça birim hacimdeki çözünen tanecik sayısı artar.",
        "en": "As the solution concentration increases, the number of solute particles in the unit volume increases.",
        "de": "Mit zunehmender Lösungskonzentration nimmt die Anzahl der gelösten Partikel im Einheitsvolumen zu.",
        "fr": "À mesure que la concentration de la solution augmente, le nombre de particules de soluté dans l’unité de volume augmente.",
        "ru": "По мере увеличения концентрации раствора количество частиц растворенного вещества в единице объема увеличивается.",
        "ar": "مع زيادة تركيز المحلول، يزداد عدد جزيئات المذاب في وحدة الحجم.",
        "zh": "随着溶液浓度的增加，单位体积内溶质颗粒的数量增加。",
        "ku": "Her ku tansiyona soliyan zêde dibe, hejmara pariyên soletê yên di yekeya yekîneyê de zêde dibe."
      },
      "trap": {
        "tr": "Derişik çözelti daima doygun çözelti demektir.",
        "en": "Concentrated solution always means saturated solution.",
        "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
        "fr": "Une solution concentrée signifie toujours une solution saturée.",
        "ru": "Концентрированный раствор всегда означает насыщенный раствор.",
        "ar": "المحلول المركز يعني دائمًا المحلول المشبع.",
        "zh": "浓溶液总是意味着饱和溶液。",
        "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
      }
    },
    {
      "id": "u14-f16",
      "fact": {
        "tr": "Hacimce yüzde derişim = (Çözünen Sıvı Hacmi / Çözelti Toplam Hacmi) x 100'dür (örn. 80° kolonya).",
        "en": "Percent concentration by volume = (Volume of Dissolved Liquid / Total Volume of Solution) x 100 (e.g. 80° cologne).",
        "de": "Prozentuale Konzentration nach Volumen = (Volumen der gelösten Flüssigkeit / Gesamtvolumen der Lösung) x 100 (z. B. 80° Cologne).",
        "fr": "Pourcentage de concentration en volume = (Volume de liquide dissous / Volume total de solution) x 100 (par exemple eau de Cologne à 80°).",
        "ru": "Процентная концентрация по объему = (объем растворенной жидкости / общий объем раствора) x 100 (например, одеколон 80°).",
        "ar": "نسبة التركيز بالحجم = (حجم السائل المذاب / الحجم الإجمالي للمحلول) × 100 (على سبيل المثال 80 درجة كولونيا).",
        "zh": "体积百分比浓度 =（溶解液体体积 / 溶液总体积）x 100（例如 80° 古龙水）。",
        "ku": "Ji sedî berhevdana ji hêla cildê = (Hejmara Hêviya Hilweşiyayî / Tevahiya Hêjmara Çareseriyê) x 100 (mînak 80° Koln)."
      },
      "trap": {
        "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
        "en": "Percent by volume is used only in solid-liquid solutions.",
        "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
        "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
        "ru": "Объемные проценты используются только в твердожидких растворах.",
        "ar": "يتم استخدام النسبة المئوية للحجم فقط في المحاليل الصلبة والسائلة.",
        "zh": "体积百分比仅用于固液溶液。",
        "ku": "Ji sedî ji hêla volume tenê di çareseriyên hişk-avî de tê bikaranîn."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u14-c01",
      "conceptA": {
        "tr": "Molarite",
        "en": "Molarity",
        "de": "Molarität",
        "fr": "Molarité",
        "ru": "Молярность",
        "ar": "المولارية",
        "zh": "物质的量浓度 (Molarite)",
        "ku": "Molarîte"
      },
      "conceptB": {
        "tr": "Molalite",
        "en": "Molality",
        "de": "Molalität",
        "fr": "Molalité",
        "ru": "Моляльность",
        "ar": "المولالية",
        "zh": "质量摩尔浓度 (Molalite)",
        "ku": "Molalîte"
      },
      "distinction": {
        "tr": "Molarite mol/Litre çözeltidir (sıcaklıkla değişir); molalite mol/kg çözücüdür (sıcaklıktan bağımsızdır).",
        "en": "Molarity is mol/Liter of solution (varies with temperature); molality is mol/kg solvent (independent of temperature).",
        "de": "Die Molarität ist Mol/Liter Lösung (variiert je nach Temperatur); Molalität ist Mol/kg Lösungsmittel (unabhängig von der Temperatur).",
        "fr": "La molarité est en mol/litre de solution (varie en fonction de la température) ; La molalité est mol/kg de solvant (indépendante de la température).",
        "ru": "Молярность — моль/литр раствора (меняется в зависимости от температуры); моляльность — моль/кг растворителя (независимо от температуры).",
        "ar": "المولارية هي مول/لتر من المحلول (تختلف باختلاف درجة الحرارة)؛ المولالية هي مول/كجم من المذيب (مستقل عن درجة الحرارة).",
        "zh": "物质的量浓度是每升溶液中溶质的物质的量（随温度变化）；质量摩尔浓度是每千克溶剂中溶质的物质的量（与温度无关）。",
        "ku": "Molarity mol/Litera çareseriyê ye (li gor germahiyê diguhere); molalîtî mol/kg helwêst e (ji germahiyê serbixwe ye)."
      }
    },
    {
      "id": "u14-c02",
      "conceptA": {
        "tr": "Elektrolit Çözelti",
        "en": "Electrolyte Solution",
        "de": "Elektrolytlösung",
        "fr": "Solution électrolytique",
        "ru": "Электролитный раствор",
        "ar": "محلول بالكهرباء",
        "zh": "电解液",
        "ku": "Çareseriya Elektrolîtê"
      },
      "conceptB": {
        "tr": "Elektrolit Olmayan Çözelti",
        "en": "Non-Electrolyte Solution",
        "de": "Nicht-Elektrolyt-Lösung",
        "fr": "Solution sans électrolyte",
        "ru": "Неэлектролитный раствор",
        "ar": "محلول غير بالكهرباء",
        "zh": "非电解质溶液",
        "ku": "Çareseriya Ne-Elektrolîte"
      },
      "distinction": {
        "tr": "Elektrolit çözeltiler iyonların hareketiyle elektriği iletir; elektrolit olmayan çözeltilerde çözünen moleküller hâlinde bulunduğundan elektrik iletilmez.",
        "en": "Electrolyte solutions conduct electricity through the movement of ions; in non-electrolyte solutions the solute is present as molecules, so they do not conduct.",
        "de": "Elektrolytlösungen leiten den Strom durch die Bewegung von Ionen; in Nichtelektrolytlösungen liegt der gelöste Stoff als Moleküle vor, daher leiten sie nicht.",
        "fr": "Les solutions électrolytiques conduisent l'électricité grâce au déplacement des ions ; dans les solutions non électrolytiques, le soluté est sous forme de molécules, elles ne conduisent donc pas.",
        "ru": "Растворы электролитов проводят ток за счёт движения ионов; в растворах неэлектролитов растворённое вещество находится в виде молекул, поэтому они не проводят ток.",
        "ar": "تنقل محاليل الإلكتروليتات الكهرباء بحركة الأيونات؛ أما في محاليل غير الإلكتروليتات فيوجد المذاب على شكل جزيئات، لذلك لا تنقل الكهرباء.",
        "zh": "电解质溶液依靠离子的移动导电；非电解质溶液中溶质以分子形式存在，因此不导电。",
        "ku": "Çareseriyên elektrolît bi tevgera îyonan elektrîkê diguhezînin; di çareseriyên ne-elektrolît de maddeya helbûyî wekî molekul heye, ji ber vê elektrîkê naguhezînin."
      }
    },
    {
      "id": "u14-c03",
      "conceptA": {
        "tr": "Seyreltme",
        "en": "Dilution",
        "de": "Verdünnen",
        "fr": "Dilution",
        "ru": "Разбавление",
        "ar": "التخفيف",
        "zh": "稀释",
        "ku": "Sivikkirin (dîlûsyon)"
      },
      "conceptB": {
        "tr": "Deriştirme",
        "en": "Concentrating",
        "de": "Aufkonzentrieren",
        "fr": "Concentration par évaporation",
        "ru": "Концентрирование",
        "ar": "زيادة التركيز",
        "zh": "浓缩",
        "ku": "Tîrkirin (konsantrekirin)"
      },
      "distinction": {
        "tr": "Seyreltmede çözeltiye çözücü eklenir, çözünenin mol sayısı değişmez ve derişim azalır; deriştirmede çökme olmadan çözücü buharlaştırılır ya da çözünen eklenir ve derişim artar.",
        "en": "In dilution, solvent is added, the moles of solute stay the same and the concentration decreases; in concentrating, solvent is evaporated without precipitation or more solute is added, and the concentration increases.",
        "de": "Beim Verdünnen wird Lösungsmittel zugegeben, die Stoffmenge des gelösten Stoffes bleibt gleich und die Konzentration sinkt; beim Aufkonzentrieren wird ohne Ausfällung Lösungsmittel verdampft oder gelöster Stoff zugegeben, und die Konzentration steigt.",
        "fr": "Lors d'une dilution, on ajoute du solvant : la quantité de soluté reste la même et la concentration diminue ; lors d'une concentration, on évapore du solvant sans précipitation ou on ajoute du soluté, et la concentration augmente.",
        "ru": "При разбавлении к раствору добавляют растворитель, количество молей растворённого вещества не меняется, а концентрация уменьшается; при концентрировании растворитель выпаривают без выпадения осадка или добавляют растворённое вещество, и концентрация увеличивается.",
        "ar": "في التخفيف يُضاف المذيب إلى المحلول فيبقى عدد مولات المذاب ثابتًا ويقل التركيز؛ وفي زيادة التركيز يُبخَّر المذيب دون ترسيب أو يُضاف مذاب فيزداد التركيز.",
        "zh": "稀释时向溶液中加入溶剂，溶质的物质的量不变，浓度减小；浓缩时在不析出固体的情况下蒸发溶剂或加入溶质，浓度增大。",
        "ku": "Di sivikkirinê de helker li çareseriyê tê zêdekirin, hejmara molên maddeya helbûyî naguhere û konsantrasyon kêm dibe; di tîrkirinê de bêyî niştinê helker tê hilmijandin an maddeya helbûyî tê zêdekirin û konsantrasyon zêde dibe."
      }
    },
    {
      "id": "u14-c04",
      "conceptA": {
        "tr": "Mol Kesri (X)",
        "en": "Mole Fraction (X)",
        "de": "Molenanteil (X)",
        "fr": "Fraction molaire (X)",
        "ru": "Мольная доля (X)",
        "ar": "الكسر المولي (X)",
        "zh": "摩尔分数 (X)",
        "ku": "Parçeya Mole (X)"
      },
      "conceptB": {
        "tr": "Kütlece Yüzde (%C)",
        "en": "Percent by Mass (%C)",
        "de": "Massenprozent (%C)",
        "fr": "Pourcentage en masse (%C)",
        "ru": "Процент по массе (%C)",
        "ar": "النسبة المئوية للكتلة (٪ C)",
        "zh": "质量百分比 (%C)",
        "ku": "Ji sedî bi girseyî (%C)"
      },
      "distinction": {
        "tr": "Mol kesri bir bileşenin molünün toplam mole oranıdır; kütlece yüzde çözünen kütlesinin toplam çözelti kütlesine oranıdır.",
        "en": "Mole fraction is the ratio of moles of a component to total moles; It is the ratio of the mass percent solute mass to the total solution mass.",
        "de": "Der Molenbruch ist das Verhältnis der Mol einer Komponente zur Gesamtmolzahl; Es ist das Verhältnis der Massenprozente der gelösten Substanz zur Gesamtlösungsmasse.",
        "fr": "La fraction molaire est le rapport entre les moles d'un composant et le nombre total de moles ; C'est le rapport entre le pourcentage en masse de soluté et la masse totale de la solution.",
        "ru": "Мольная доля представляет собой отношение молей компонента к общему количеству молей; Это отношение массового процента растворенного вещества к общей массе раствора.",
        "ar": "الكسر المولي هو نسبة مولات المكون إلى إجمالي الشامات. إنها نسبة الكتلة في المائة من كتلة المذاب إلى كتلة المحلول الإجمالي.",
        "zh": "摩尔分数是一种组分的摩尔数与总摩尔数的比值；它是溶质质量的质量百分比与总溶液质量的比值。",
        "ku": "Parçeya molê rêjeya molên hêmanekê bi gişt molan re ye; Ew rêjeya rêjeya ji sedî ya girseya çareserkirinê bi tevaya girseya çareseriyê re ye."
      }
    },
    {
      "id": "u14-c05",
      "conceptA": {
        "tr": "Derişik Çözelti",
        "en": "Concentrated Solution",
        "de": "Konzentrierte Lösung",
        "fr": "Solution concentrée",
        "ru": "Концентрированный раствор",
        "ar": "محلول مركز",
        "zh": "浓溶液",
        "ku": "Çareseriya konsantrekirî"
      },
      "conceptB": {
        "tr": "Seyreltik Çözelti",
        "en": "Dilute Solution",
        "de": "Verdünnte Lösung",
        "fr": "Solution diluée",
        "ru": "Разбавленный раствор",
        "ar": "المحلول المخفف",
        "zh": "稀溶液",
        "ku": "Çareseriya sivik"
      },
      "distinction": {
        "tr": "Derişik çözeltide birim hacimdeki çözünen miktarı fazladır; seyreltik çözeltide birim hacimdeki çözünen miktarı azdır.",
        "en": "In concentrated solution, the amount of solute per unit volume is greater; In dilute solution, the amount of solute per unit volume is small.",
        "de": "In konzentrierter Lösung ist die Menge an gelöstem Stoff pro Volumeneinheit größer; In verdünnter Lösung ist die Menge an gelöstem Stoff pro Volumeneinheit gering.",
        "fr": "En solution concentrée, la quantité de soluté par unité de volume est plus grande ; En solution diluée, la quantité de soluté par unité de volume est faible.",
        "ru": "В концентрированном растворе количество растворенного вещества в единице объема больше; В разбавленном растворе количество растворенного вещества в единице объема невелико.",
        "ar": "في المحلول المركز، تكون كمية المذاب لكل وحدة حجم أكبر؛ في المحلول المخفف، تكون كمية المذاب في وحدة الحجم صغيرة.",
        "zh": "在浓溶液中，单位体积的溶质含量较多；在稀溶液中，单位体积的溶质含量很少。",
        "ku": "Di çareseriya konsantrekirî de, mîqdara soleya li ser yekîneya hecmê mezintir e; Di nav heliya zirav de, mîqdara sosta li ser yekîneya hecmê hindik e."
      }
    },
    {
      "id": "u14-c06",
      "conceptA": {
        "tr": "Homojen Çözelti",
        "en": "Homogeneous Solution",
        "de": "Homogene Lösung",
        "fr": "Solution homogène",
        "ru": "Гомогенный раствор",
        "ar": "محلول متجانس",
        "zh": "均质溶液",
        "ku": "Çareseriya homojen"
      },
      "conceptB": {
        "tr": "Doygun Çözelti",
        "en": "Saturated Solution",
        "de": "Gesättigte Lösung",
        "fr": "Solution saturée",
        "ru": "Насыщенный раствор",
        "ar": "محلول مشبع",
        "zh": "饱和溶液",
        "ku": "Çareseriya Têrbûyî"
      },
      "distinction": {
        "tr": "Homojen çözelti tek fazlı karışımdır (doymamış da olabilir); doygun çözelti o sıcaklıkta maksimum maddeyi çözmüştür.",
        "en": "Homogeneous solution is a single-phase mixture (may also be unsaturated); The saturated solution dissolved the maximum amount of substance at that temperature.",
        "de": "Homogene Lösung ist ein einphasiges Gemisch (kann auch ungesättigt sein); Die gesättigte Lösung löste bei dieser Temperatur die maximale Stoffmenge.",
        "fr": "Une solution homogène est un mélange monophasique (peut également être insaturé) ; La solution saturée a dissous la quantité maximale de substance à cette température.",
        "ru": "Гомогенный раствор представляет собой однофазную смесь (может быть и ненасыщенной); Насыщенный раствор растворил максимальное количество вещества при данной температуре.",
        "ar": "المحلول المتجانس عبارة عن خليط أحادي الطور (وقد يكون غير مشبع أيضًا)؛ يذيب المحلول المشبع أكبر كمية من المادة عند درجة الحرارة تلك.",
        "zh": "均质溶液是单相混合物（也可以是不饱和的）；饱和溶液在该温度下溶解了最大量的物质。",
        "ku": "Çareseriya homojen tevliheviyek yek-qonaxê ye (dibe ku ne têrbûyî jî be); Çareseriya têrbûyî di wê germahiyê de mîqdara herî zêde ya maddeyê hilweşand."
      }
    },
    {
      "id": "u14-c07",
      "conceptA": {
        "tr": "ppm (Milyonda Bir)",
        "en": "ppm (One Per Million)",
        "de": "ppm (Eins pro Million)",
        "fr": "ppm (un par million)",
        "ru": "ppm (один на миллион)",
        "ar": "جزء في المليون (واحد لكل مليون)",
        "zh": "ppm（百万分之一）",
        "ku": "ppm (Ji Mîlyonek Yek)"
      },
      "conceptB": {
        "tr": "ppb (Milyarda Bir)",
        "en": "ppb (One Per Billion)",
        "de": "ppb (Eins pro Milliarde)",
        "fr": "ppb (un par milliard)",
        "ru": "ppb (Один на миллиард)",
        "ar": "ppb (واحد لكل مليار)",
        "zh": "ppb（十亿分之一）",
        "ku": "ppb (Yek Per Bilyon)"
      },
      "distinction": {
        "tr": "ppm 1 kilogram çözeltideki miligram çözünendir (10^-6); ppb ise mikrogram mertebesindeki çok eser derişimdir (10^-9).",
        "en": "ppm is the milligrams of solute in 1 kilogram of solution (10^-6); ppb is the trace concentration in micrograms (10^-9).",
        "de": "ppm sind die Milligramm gelöster Substanz in 1 Kilogramm Lösung (10^-6); ppb ist die Spurenkonzentration in Mikrogramm (10^-9).",
        "fr": "ppm correspond aux milligrammes de soluté dans 1 kilogramme de solution (10^-6) ; ppb est la concentration en traces en microgrammes (10^-9).",
        "ru": "ppm — миллиграммы растворенного вещества в 1 килограмме раствора (10^-6); ppb — следовая концентрация в микрограммах (10^-9).",
        "ar": "جزء في المليون هو ملليغرام المذاب في 1 كيلوغرام من المحلول (10^-6)؛ ppb هو التركيز النزر بالميكروجرام (10^-9).",
        "zh": "ppm 是 1 千克溶液中溶质的毫克数 (10^-6)； ppb 是以微克为单位的痕量浓度 (10^-9)。",
        "ku": "ppm mîlîgramên madeya çareserkirî ya di 1 kîloya haletê de ye (10^-6); ppb bi mîkrograman (10 ^ - 9 ) hûrbûna şopê ye."
      }
    },
    {
      "id": "u14-c08",
      "conceptA": {
        "tr": "İyon Derişimi",
        "en": "Ion Concentration",
        "de": "Ionenkonzentration",
        "fr": "Concentration ionique",
        "ru": "Концентрация ионов",
        "ar": "تركيز الأيونات",
        "zh": "离子浓度",
        "ku": "Ion Concentration"
      },
      "conceptB": {
        "tr": "Bileşik Molaritesi",
        "en": "Compound Molarity",
        "de": "Zusammengesetzte Molarität",
        "fr": "Molarité composée",
        "ru": "Молярность соединения",
        "ar": "المولارية المركبة",
        "zh": "化合物摩尔浓度",
        "ku": "Molarity Compound"
      },
      "distinction": {
        "tr": "Tuzun molaritesi formüldeki iyon katsayısıyla çarpılarak her bir iyonun derişimi bulunur (ör. 0,1 M AlCl3 -> 0,3 M Cl-).",
        "en": "The molarity of the salt is multiplied by the ionic coefficient in the formula to find the concentration of each ion (e.g. 0.1 M AlCl3 -> 0.3 M Cl-).",
        "de": "Die Molarität des Salzes wird mit dem Ionenkoeffizienten in der Formel multipliziert, um die Konzentration jedes Ions zu ermitteln (z. B. 0,1 M AlCl3 -> 0,3 M Cl-).",
        "fr": "La molarité du sel est multipliée par le coefficient ionique dans la formule pour trouver la concentration de chaque ion (par exemple 0,1 M AlCl3 -> 0,3 M Cl-).",
        "ru": "Молярность соли умножают на ионный коэффициент в формуле, чтобы найти концентрацию каждого иона (например, 0,1 М AlCl3 -> 0,3 М Cl-).",
        "ar": "يتم ضرب مولارية الملح في المعامل الأيوني في الصيغة للعثور على تركيز كل أيون (على سبيل المثال 0.1 M AlCl3 -> 0.3 M Cl-).",
        "zh": "将盐的摩尔浓度乘以公式中的离子系数即可得出每种离子的浓度（例如 0.1 M AlCl3 -> 0.3 M Cl-）。",
        "ku": "Molarîteya xwê bi rêjeya îyonî ya di formulê de tê zêdekirin da ku giraniya her îyonekê bibîne (mînak 0,1 M AlCl3 -> 0,3 M Cl-)."
      }
    }
  ],
  "sequences": [
    {
      "id": "u14-s01",
      "title": {
        "tr": "Çözelti Karıştırma Hesap Adımları",
        "en": "Solution Mixing Calculation Steps",
        "de": "Berechnungsschritte für das Lösungsmischen",
        "fr": "Étapes de calcul du mélange de solutions",
        "ru": "Этапы расчета смешивания раствора",
        "ar": "خطوات حساب خلط الحل",
        "zh": "溶液混合计算步骤",
        "ku": "Pêngavên Hesabkirina Têkelkirina Çareserî"
      },
      "steps": [
        {
          "tr": "Her çözeltideki iyon mol sayılarını bul (n = M * V)",
          "en": "Find the number of moles of ions in each solution (n = M * V)",
          "de": "Finden Sie die Anzahl der Mol Ionen in jeder Lösung (n = M * V)",
          "fr": "Trouver le nombre de moles d'ions dans chaque solution (n = M * V)",
          "ru": "Найдите количество молей ионов в каждом растворе (n = M * V)",
          "ar": "أوجد عدد مولات الأيونات في كل محلول (n = M * V)",
          "zh": "找出每个溶液中离子的摩尔数 (n = M * V)",
          "ku": "Di her çareseriyê de hejmara molên îyonan bibînin (n = M * V)"
        },
        {
          "tr": "Toplam hacmi hesapla (V1 + V2)",
          "en": "Calculate total volume (V1 + V2)",
          "de": "Gesamtvolumen berechnen (V1 + V2)",
          "fr": "Calculer le volume total (V1 + V2)",
          "ru": "Рассчитать общий объем (V1 + V2)",
          "ar": "حساب الحجم الإجمالي (V1 + V2)",
          "zh": "计算总体积（V1 + V2）",
          "ku": "Bihejmêre qebareya giştî (V1 + V2)"
        },
        {
          "tr": "İstenen iyonun toplam molünü topla",
          "en": "Add the total moles of the desired ion",
          "de": "Addieren Sie die gesamten Mol des gewünschten Ions",
          "fr": "Ajouter le nombre total de moles de l'ion souhaité",
          "ru": "Добавьте общее количество молей желаемого иона",
          "ar": "أضف إجمالي الشامات للأيون المطلوب",
          "zh": "添加所需离子的总摩尔数",
          "ku": "Bi tevahî molên îyona xwestinê zêde bikin"
        },
        {
          "tr": "M_son = n_toplam / V_toplam formülünü uygula",
          "en": "Apply the formula M_last = n_total / V_total",
          "de": "Wenden Sie die Formel M_last = n_total / V_total an",
          "fr": "Appliquer la formule M_last = n_total / V_total",
          "ru": "Примените формулу M_last = n_total / V_total",
          "ar": "قم بتطبيق الصيغة M_last = n_total / V_total",
          "zh": "应用公式 M_last = n_total / V_total",
          "ku": "Formula M_dawîn = n_total / V_total bicîh bikin"
        }
      ]
    },
    {
      "id": "u14-s02",
      "title": {
        "tr": "Molar Çözelti Hazırlama",
        "en": "Molar Solution Preparation",
        "de": "Herstellung einer molaren Lösung",
        "fr": "Préparation de la solution molaire",
        "ru": "Приготовление молярного раствора",
        "ar": "إعداد الحل المولي",
        "zh": "摩尔溶液的制备",
        "ku": "Amadekirina Çareseriya Molar"
      },
      "steps": [
        {
          "tr": "Çözünecek katı kütlesi hassas terazide tartılır",
          "en": "The solid mass to be dissolved is weighed on a precision balance.",
          "de": "Die aufzulösende Feststoffmasse wird auf einer Präzisionswaage gewogen.",
          "fr": "La masse solide à dissoudre est pesée sur une balance de précision.",
          "ru": "Твердую массу, подлежащую растворению, взвешивают на прецизионных весах.",
          "ar": "يتم وزن الكتلة الصلبة المراد إذابتها على ميزان دقيق.",
          "zh": "在精密天平上称量待溶解的固体物质。",
          "ku": "Girseya hişk a ku were hilweşandin, li ser hevsengiyek rast tê mêzandin."
        },
        {
          "tr": "Az miktar saf su ile beherde tamamen çözünür",
          "en": "Completely dissolves in a beaker with a small amount of pure water.",
          "de": "Löst sich in einem Becherglas mit etwas reinem Wasser vollständig auf.",
          "fr": "Se dissout complètement dans un bécher avec un peu d'eau pure.",
          "ru": "Полностью растворяется в стакане с небольшим количеством чистой воды.",
          "ar": "يذوب تماما في كوب مع كمية صغيرة من الماء النقي.",
          "zh": "在烧杯中用少量纯水完全溶解。",
          "ku": "Bi tevayî di kaxezek bi mîqdarek piçûk a ava paqij de dihele."
        },
        {
          "tr": "Hacmi bilinen balon jojeye aktarılır",
          "en": "It is transferred to a volumetric flask of known volume.",
          "de": "Es wird in einen Messkolben mit bekanntem Volumen überführt.",
          "fr": "Il est transféré dans une fiole jaugée de volume connu.",
          "ru": "Его переносят в мерную колбу известного объема.",
          "ar": "يتم نقله إلى دورق حجمي ذي حجم معروف.",
          "zh": "将其转移至已知体积的容量瓶中。",
          "ku": "Ew vediguhezîne flaskek voltîkî ya qebareya naskirî."
        },
        {
          "tr": "Çizgiye kadar saf su eklenip menisküs ayarlanır",
          "en": "Pure water is added up to the calibration mark and the meniscus is adjusted",
          "de": "Reines Wasser wird bis zur Eichmarke aufgefüllt und der Meniskus eingestellt",
          "fr": "On complète avec de l'eau pure jusqu'au trait de jauge en ajustant le ménisque",
          "ru": "Добавляют чистую воду до метки и выравнивают мениск",
          "ar": "يُضاف الماء النقي حتى علامة المعايرة ويُضبط سطح السائل المقعر (الهلال)",
          "zh": "加纯水至刻度线并调整弯月面",
          "ku": "Ava paqij heta xeta nîşankirî tê zêdekirin û menîsk tê eyarkirin"
        }
      ]
    },
    {
      "id": "u14-s03",
      "title": {
        "tr": "Çözelti Seyreltme Hesabı",
        "en": "Solution Dilution Calculation",
        "de": "Berechnung der Lösungsverdünnung",
        "fr": "Calcul de la dilution de la solution",
        "ru": "Расчет разбавления раствора",
        "ar": "حساب تخفيف الحل",
        "zh": "溶液稀释计算",
        "ku": "Çareseriya Dilution Hesabkirina"
      },
      "steps": [
        {
          "tr": "Başlangıç derişimi M1 ve hacmi V1 belirlenir",
          "en": "The initial concentration M1 and volume V1 are determined",
          "de": "Es werden die Anfangskonzentration M1 und das Volumen V1 bestimmt",
          "fr": "La concentration initiale M1 et le volume V1 sont déterminés",
          "ru": "Определяются начальная концентрация М1 и объем V1.",
          "ar": "يتم تحديد التركيز الأولي M1 والحجم V1",
          "zh": "确定初始浓度M1和体积V1",
          "ku": "Pîvana destpêkê M1 û volume V1 têne destnîşankirin"
        },
        {
          "tr": "Üzerine eklenen su ile son hacim V2 bulunur",
          "en": "The final volume V2 is found by adding water to it.",
          "de": "Das endgültige Volumen V2 wird durch Zugabe von Wasser ermittelt.",
          "fr": "Le volume final V2 est trouvé en y ajoutant de l'eau.",
          "ru": "Конечный объем V2 находится добавлением к нему воды.",
          "ar": "تم العثور على الحجم النهائي V2 بإضافة الماء إليه.",
          "zh": "通过向其中加水得出最终体积 V2。",
          "ku": "Hêjmara dawîn V2 bi lê zêdekirina avê tê dîtin."
        },
        {
          "tr": "M1.V1 = M2.V2 eşitliği yazılır",
          "en": "The equation M1.V1 = M2.V2 is written",
          "de": "Die Gleichung M1.V1 = M2.V2 wird geschrieben",
          "fr": "L'équation M1.V1 = M2.V2 s'écrit",
          "ru": "Уравнение M1.V1 = M2.V2 записывается",
          "ar": "يتم كتابة المعادلة M1.V1 = M2.V2",
          "zh": "方程 M1.V1 = M2.V2 写为",
          "ku": "Hevkêşana M1.V1 = M2.V2 tê nivîsandin"
        },
        {
          "tr": "Seyrelmiş yeni çözeltinin derişimi M2 hesaplanır",
          "en": "The concentration M2 of the new diluted solution is calculated",
          "de": "Die Konzentration M2 der neuen verdünnten Lösung wird berechnet",
          "fr": "La concentration M2 de la nouvelle solution diluée est calculée",
          "ru": "Рассчитывается концентрация М2 нового разбавленного раствора.",
          "ar": "يتم حساب التركيز M2 للمحلول المخفف الجديد",
          "zh": "计算新稀释溶液的浓度M2",
          "ku": "Kêmbûna M2 ya çareseriya nû ya nû tê hesibandin"
        }
      ]
    },
    {
      "id": "u14-s04",
      "title": {
        "tr": "İki Çözeltinin Karıştırılması",
        "en": "Mixing Two Solutions",
        "de": "Mischen zweier Lösungen",
        "fr": "Mélanger deux solutions",
        "ru": "Смешивание двух растворов",
        "ar": "خلط حلين",
        "zh": "两种溶液的混合",
        "ku": "Têkelkirina Du Çareyan"
      },
      "steps": [
        {
          "tr": "Birinci çözeltinin mol sayısı n1 = M1.V1 bulunur",
          "en": "The number of moles of the first solution is n1 = M1.V1",
          "de": "Die Molzahl der ersten Lösung beträgt n1 = M1.V1",
          "fr": "Le nombre de moles de la première solution est n1 = M1.V1",
          "ru": "Число молей первого раствора n1 = M1.V1.",
          "ar": "عدد مولات المحلول الأول هو n1 = M1.V1",
          "zh": "第一种溶液的摩尔数为n1 = M1.V1",
          "ku": "Hejmara molên çareseriya yekem n1 = M1.V1 e"
        },
        {
          "tr": "İkinci çözeltinin mol sayısı n2 = M2.V2 bulunur",
          "en": "The number of moles of the second solution is n2 = M2.V2",
          "de": "Die Molzahl der zweiten Lösung beträgt n2 = M2.V2",
          "fr": "Le nombre de moles de la deuxième solution est n2 = M2.V2",
          "ru": "Число молей второго раствора n2 = M2.V2.",
          "ar": "عدد مولات المحلول الثاني هو n2 = M2.V2",
          "zh": "第二溶液的摩尔数为n2 = M2.V2",
          "ku": "Hejmara molên çareseriya duyemîn n2 = M2.V2 ye"
        },
        {
          "tr": "Toplam mol sayısı ntoplam = n1 + n2 hesaplanır",
          "en": "The total number of moles is calculated as ntotal = n1 + n2",
          "de": "Die Gesamtzahl der Mol errechnet sich zu ntotal = n1 + n2",
          "fr": "Le nombre total de taupes est calculé comme ntotal = n1 + n2",
          "ru": "Общее количество молей рассчитывается как ntotal = n1 + n2",
          "ar": "يتم حساب العدد الإجمالي للشامات على النحو التالي: ntotal = n1 + n2",
          "zh": "总摩尔数计算公式为 ntotal = n1 + n2",
          "ku": "Bi tevahî hejmara molan wekî ntotal = n1 + n2 tê hesibandin"
        },
        {
          "tr": "Toplam hacme bölünerek son derişim Mson bulunur",
          "en": "The final concentration Mson is found by dividing by the total volume.",
          "de": "Die Endkonzentration Mson wird durch Division durch das Gesamtvolumen ermittelt.",
          "fr": "La concentration finale Mson se trouve en divisant par le volume total.",
          "ru": "Конечная концентрация Mson находится путем деления на общий объем.",
          "ar": "يتم العثور على التركيز النهائي Mson عن طريق القسمة على الحجم الإجمالي.",
          "zh": "最终浓度 Mson 通过除以总体积得出。",
          "ku": "Giraniya dawîn a Mson bi dabeşkirina bi qebareya giştî ve tê dîtin."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u14-twin01",
      "stem": {
        "tr": "0,4 M 200 mL Ca(NO3)2 çözeltisi ile 0,2 M 300 mL NaNO3 çözeltisi karıştırıldığında son çözeltideki NO3- iyonu derişimi kaç molar olur?",
        "en": "When 0.4 M 200 mL Ca(NO3)2 solution and 0.2 M 300 mL NaNO3 solution are mixed, what is the molar concentration of NO3- ion in the final solution?",
        "de": "Wie hoch ist die molare Konzentration der NO3-Ionen in der Endlösung, wenn 0,4 M 200 ml Ca(NO3)2-Lösung und 0,2 M 300 ml NaNO3-Lösung gemischt werden?",
        "fr": "Lorsque 0,4 M 200 mL de solution de Ca(NO3)2 et 0,2 M 300 mL de solution de NaNO3 sont mélangés, quelle est la concentration molaire de l’ion NO3- dans la solution finale ?",
        "ru": "Какова молярная концентрация иона NO3- в конечном растворе, если смешать 0,4 М 200 мл раствора Ca(NO3)2 и 0,2 М 300 мл раствора NaNO3?",
        "ar": "عند خلط محلول 0.4 M 200 mL Ca(NO3)2 مع 0.2 M 300 mL NaNO3، ما التركيز المولي لأيون NO3- في المحلول النهائي؟",
        "zh": "当 0.4 M 200 mL Ca(NO3)2 溶液和 0.2 M 300 mL NaNO3 溶液混合时，最终溶液中 NO3- 离子的摩尔浓度是多少？",
        "ku": "Dema ku 0,4 M 200 mL çareseriya Ca(NO3)2 û 0,2 M 300 mL çareseriya NaNO3 têkel bibin, di çareya dawîn de îyona NO3-ê çi qas e?"
      },
      "options": [
        {
          "tr": "0,44 M",
          "en": "0.44 M",
          "de": "0,44 M",
          "fr": "0,44 M",
          "ru": "0,44 М",
          "ar": "0.44 م",
          "zh": "0.44 M",
          "ku": "0,44 M"
        },
        {
          "tr": "0,30 M",
          "en": "0.30 M",
          "de": "0,30 M",
          "fr": "0,30 M",
          "ru": "0,30 М",
          "ar": "0.30 م",
          "zh": "0.30 M",
          "ku": "0,30 M"
        },
        {
          "tr": "0,20 M",
          "en": "0.20 M",
          "de": "0,20 M",
          "fr": "0,20 M",
          "ru": "0,20 М",
          "ar": "0.20 م",
          "zh": "0.20 M",
          "ku": "0,20 M"
        },
        {
          "tr": "0,60 M",
          "en": "0.60 M",
          "de": "0,60 M",
          "fr": "0,60 M",
          "ru": "0,60 М",
          "ar": "0.60 م",
          "zh": "0.60 M",
          "ku": "0,60 M"
        },
        {
          "tr": "0,50 M",
          "en": "0.50 M",
          "de": "0,50 M",
          "fr": "0,50 M",
          "ru": "0,50 М",
          "ar": "0.50 م",
          "zh": "0.50 M",
          "ku": "0,50 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n(NO3-) = (2 * 0,4 * 0,2) + (1 * 0,2 * 0,3) = 0,16 + 0,06 = 0,22 mol. V_toplam = 0,2 + 0,3 = 0,5 L. [NO3-] = 0,22 / 0,5 = 0,44 M.",
        "en": "n(NO3-) = (2 * 0.4 * 0.2) + (1 * 0.2 * 0.3) = 0.16 + 0.06 = 0.22 mol. V_total = 0.2 + 0.3 = 0.5 L. [NO3-] = 0.22 / 0.5 = 0.44 M.",
        "de": "n(NO3-) = (2 * 0,4 * 0,2) + (1 * 0,2 * 0,3) = 0,16 + 0,06 = 0,22 mol. V_total = 0,2 + 0,3 = 0,5 L. [NO3-] = 0,22 / 0,5 = 0,44 M.",
        "fr": "n(NO3-) = (2 * 0,4 * 0,2) + (1 * 0,2 * 0,3) = 0,16 + 0,06 = 0,22 mol. V_total = 0,2 + 0,3 = 0,5 L. [NO3-] = 0,22 / 0,5 = 0,44 M.",
        "ru": "n(NO3-) = (2*0,4*0,2) + (1*0,2*0,3) = 0,16 + 0,06 = 0,22 мол. V_total = 0,2 + 0,3 = 0,5 л. [NO3-] = 0,22/0,5 = 0,44 М.",
        "ar": "n(NO3-) = (2 * 0.4 * 0.2) + (1 * 0.2 * 0.3) = 0.16 + 0.06 = 0.22 مول. V_total = 0.2 + 0.3 = 0.5 لتر. [NO3-] = 0.22 / 0.5 = 0.44 م.",
        "zh": "n(NO3-) = (2 * 0.4 * 0.2) + (1 * 0.2 * 0.3) = 0.16 + 0.06 = 0.22 摩尔。 V_total = 0.2 + 0.3 = 0.5 L。 [NO3-] = 0.22 / 0.5 = 0.44 M。",
        "ku": "n(NO3-) = (2 * 0,4 * 0,2) + (1 * 0,2 * 0,3) = 0,16 + 0,06 = 0,22 mol. V_tevahî = 0,2 + 0,3 = 0,5 L. [NO3-] = 0,22 / 0,5 = 0,44 M."
      }
    },
    {
      "id": "u14-twin02",
      "stem": {
        "tr": "Özkütlesi 1,2 g/mL olan kütlece %36,5'lik derişik HCl çözeltisinin molar derişimi kaçtır? (HCl: 36,5)",
        "en": "What is the molar concentration of a 36.5% concentrated HCl solution by mass with a density of 1.2 g/mL? (HCl: 36.5)",
        "de": "Wie hoch ist die molare Konzentration einer 36,5 %igen konzentrierten HCl-Lösung mit einer Dichte von 1,2 g/ml? (HCl: 36,5)",
        "fr": "Quelle est la concentration molaire d'une solution de HCl concentrée à 36,5 % en masse avec une densité de 1,2 g/mL ? (HCl : 36,5)",
        "ru": "Какова молярная концентрация 36,5%-ного по массе концентрированного раствора HCl с плотностью 1,2 г/мл? (HCl: 36,5)",
        "ar": "ما التركيز المولي لمحلول حمض الهيدروكلوريك المركز 36.5% بالكتلة وكثافته 1.2 جم/مل؟ (حمض الهيدروكلوريك: 36.5)",
        "zh": "按质量计、密度为 1.2 g/mL 的 36.5% 浓 HCl 溶液的摩尔浓度是多少？ (盐酸：36.5)",
        "ku": "Pîvana molê ya 36,5% çareseriyek HCl ya konsantrekirî ya bi girseya bi 1,2 g/mL çi ye? (HCl: 36.5)"
      },
      "options": [
        {
          "tr": "12,0 M",
          "en": "12.0 M",
          "de": "12,0 M",
          "fr": "12,0 M",
          "ru": "12,0 М",
          "ar": "12.0 م",
          "zh": "12.0 M",
          "ku": "12,0 M"
        },
        {
          "tr": "6,0 M",
          "en": "6.0 M",
          "de": "6,0 M",
          "fr": "6,0 M",
          "ru": "6,0 М",
          "ar": "6.0 م",
          "zh": "6.0 M",
          "ku": "6,0 M"
        },
        {
          "tr": "1,2 M",
          "en": "1.2 M",
          "de": "1,2 M",
          "fr": "1,2 M",
          "ru": "1,2 М",
          "ar": "1.2 م",
          "zh": "1.2 M",
          "ku": "1,2 M"
        },
        {
          "tr": "10,0 M",
          "en": "10.0 M",
          "de": "10,0 M",
          "fr": "10,0 M",
          "ru": "10,0 М",
          "ar": "10.0 م",
          "zh": "10.0 M",
          "ku": "10,0 M"
        },
        {
          "tr": "3,65 M",
          "en": "3.65 M",
          "de": "3,65 M",
          "fr": "3,65 M",
          "ru": "3,65 М",
          "ar": "3.65 م",
          "zh": "3.65 M",
          "ku": "3,65 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "M = (%C * d * 10) / MA -> M = (36,5 * 1,2 * 10) / 36,5 = 12,0 M.",
        "en": "M = (%C * d * 10) / MA -> M = (36.5 * 1.2 * 10) / 36.5 = 12.0 M.",
        "de": "M = (%C * d * 10) / MA -> M = (36,5 * 1,2 * 10) / 36,5 = 12,0 M.",
        "fr": "M = (%C * d * 10) / MA -> M = (36,5 * 1,2 * 10) / 36,5 = 12,0 M.",
        "ru": "М = (%C*d*10)/МА -> М = (36,5*1,2*10)/36,5 = 12,0 М.",
        "ar": "M = (%C * d * 10) / MA -> M = (36.5 * 1.2 * 10) / 36.5 = 12.0 م.",
        "zh": "M = (%C * d * 10) / MA -> M = (36.5 * 1.2 * 10) / 36.5 = 12.0 M。",
        "ku": "M = (%C * d * 10) / MA -> M = (36,5 * 1,2 * 10) / 36,5 = 12,0 M."
      }
    },
    {
      "id": "u14-twin03",
      "stem": {
        "tr": "Kimya dersinde Sıvı Çözeltiler ve Derişim Birimleri ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Liquid Solutions & Concentrations, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Flüssige Lösungen & Konzentrationen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Solutions Liquides & Concentrations, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Жидкие растворы и концентрации», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المحاليل السائلة والتركيز\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“溶液与浓度单位”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
          "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
          "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
          "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
          "ru": "Концентрация хлорид-ионов в 0,1 М растворе AlCl3 составляет 0,1 М.",
          "ar": "تركيز أيون الكلوريد في محلول 0.1 مولار AlCl3 هو 0.1 مولار.",
          "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
          "ku": "Di çareseriya 0,1 M AlCl3 de rêjeya îyona klorîdê 0,1 M e."
        },
        {
          "tr": "Ortak iyonların derişimi karıştırmadan etkilenmez.",
          "en": "The concentration of common ions is not affected by mixing.",
          "de": "Die Konzentration gemeinsamer Ionen wird durch das Mischen nicht beeinflusst.",
          "fr": "La concentration des ions communs n'est pas affectée par le mélange.",
          "ru": "Смешивание не влияет на концентрацию общих ионов.",
          "ar": "لا يتأثر تركيز الأيونات المشتركة بالخلط.",
          "zh": "共同离子的浓度不受混合的影响。",
          "ku": "Tevlihevkirina îyonên hevpar bi tevlihevkirinê bandor nabe."
        },
        {
          "tr": "Mol kesri (X), bir bileşenin mol sayısının toplam mol sayısına oranıdır (XA = nA / ntoplam); toplamı 1'dir.",
          "en": "Mole fraction (X) is the ratio of the number of moles of a component to the total number of moles (XA = nA / ntotal); total is 1.",
          "de": "Der Molenbruch (X) ist das Verhältnis der Molzahl einer Komponente zur Gesamtmolzahl (XA = nA / ntotal); Insgesamt ist 1.",
          "fr": "La fraction molaire (X) est le rapport du nombre de moles d'un composant au nombre total de moles (XA = nA/ntotal) ; le total est de 1.",
          "ru": "Мольная доля (Х) – отношение количества молей компонента к общему количеству молей (ХА = nA/nобщ); итого 1.",
          "ar": "الكسر المولي (X) هو نسبة عدد مولات المكون إلى إجمالي عدد الشامات (XA = nA / ntotal)؛ المجموع هو 1.",
          "zh": "摩尔分数（X）是某一组分的摩尔数与总摩尔数的比值（XA=nA/ntotal）；总计为 1。",
          "ku": "Parçeya molê (X) rêjeya jimara molên hêmanekê bi tevahî hejmara molan re ye (XA = nA / ntotal); giştî 1 e."
        },
        {
          "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
          "en": "Sugar water conducts electricity very well because it contains free ions.",
          "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
          "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
          "ru": "Сахарная вода очень хорошо проводит электричество, поскольку содержит свободные ионы.",
          "ar": "يوصل الماء بالسكر الكهرباء بشكل جيد للغاية لأنه يحتوي على أيونات حرة.",
          "zh": "糖水导电性很好，因为它含有自由离子。",
          "ku": "Ava şekir elektrîkê pir baş derbas dike ji ber ku îyonên belaş dihewîne."
        },
        {
          "tr": "Derişik çözelti daima doygun çözelti demektir.",
          "en": "Concentrated solution always means saturated solution.",
          "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
          "fr": "Une solution concentrée signifie toujours une solution saturée.",
          "ru": "Концентрированный раствор всегда означает насыщенный раствор.",
          "ar": "المحلول المركز يعني دائمًا المحلول المشبع.",
          "zh": "浓溶液总是意味着饱和溶液。",
          "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Mol kesri (X), bir bileşenin mol sayısının toplam mol sayısına oranıdır (XA = nA / ntoplam); toplamı 1'dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Mole fraction (X) is the ratio of the number of moles of a component to the total number of moles (XA = nA / ntotal); total is 1.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Molenbruch (X) ist das Verhältnis der Molzahl einer Komponente zur Gesamtmolzahl (XA = nA / ntotal); Insgesamt ist 1.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La fraction molaire (X) est le rapport du nombre de moles d'un composant au nombre total de moles (XA = nA/ntotal) ; le total est de 1.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Мольная доля (Х) – отношение количества молей компонента к общему количеству молей (ХА = nA/nобщ); итого 1.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الكسر المولي (X) هو نسبة عدد مولات المكون إلى إجمالي عدد الشامات (XA = nA / ntotal)؛ المجموع هو 1.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“摩尔分数（X）是某一组分的摩尔数与总摩尔数的比值（XA=nA/ntotal）；总计为 1。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Parçeya molê (X) rêjeya jimara molên hêmanekê bi tevahî hejmara molan re ye (XA = nA / ntotal); giştî 1 e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Sıvı Çözeltiler ve Derişim Birimleri konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Liquid Solutions & Concentrations?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Flüssige Lösungen & Konzentrationen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Solutions Liquides & Concentrations ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Жидкие растворы и концентрации»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المحاليل السائلة والتركيز\"؟",
        "zh": "根据“溶液与浓度单位”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de rast e?"
      },
      "options": [
        {
          "tr": "Su eklendiğinde çözünenin mol sayısı yarıya iner.",
          "en": "When water is added, the number of moles of solute is halved.",
          "de": "Bei Zugabe von Wasser halbiert sich die Molzahl des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, le nombre de moles de soluté est réduit de moitié.",
          "ru": "При добавлении воды количество молей растворенного вещества уменьшается вдвое.",
          "ar": "عند إضافة الماء، ينخفض ​​عدد مولات المذاب إلى النصف.",
          "zh": "当添加水时，溶质的摩尔数减半。",
          "ku": "Dema ku av lê tê zêdekirin, hejmara molên maddeyê nîvî dibe."
        },
        {
          "tr": "Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.",
          "en": "Molality decreases as temperature increases due to volume expansion.",
          "de": "Die Molalität nimmt mit steigender Temperatur aufgrund der Volumenausdehnung ab.",
          "fr": "La molalité diminue à mesure que la température augmente en raison de l'expansion du volume.",
          "ru": "Моляльность уменьшается с увеличением температуры из-за объемного расширения.",
          "ar": "تتناقص المولالية مع زيادة درجة الحرارة بسبب توسع الحجم.",
          "zh": "由于体积膨胀，质量摩尔浓度随温度升高而降低。",
          "ku": "Her ku germahî zêde dibe ji ber berbelavbûna qebareyê molalîte kêm dibe."
        },
        {
          "tr": "Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.",
          "en": "Sugar ionizes in water and dissociates into H+ and OH- ions.",
          "de": "Zucker ionisiert in Wasser und zerfällt in H+- und OH--Ionen.",
          "fr": "Le sucre s'ionise dans l'eau et se dissocie en ions H+ et OH-.",
          "ru": "Сахар ионизируется в воде и диссоциирует на ионы H+ и OH-.",
          "ar": "يتأين السكر في الماء ويتفكك إلى أيونات H+ و OH-.",
          "zh": "糖在水中电离并解离成 H+ 和 OH- 离子。",
          "ku": "Şekir di avê de îyonîze dibe û dibe îyonên H+ û OH-."
        },
        {
          "tr": "Özkütle ve kütlece yüzde bilindiğinde molarite: M = (%C * d * 10) / MA formülüyle hesaplanır.",
          "en": "When the density and mass percentage are known, molarity is calculated with the formula: M = (%C * d * 10) / MA.",
          "de": "Wenn die Dichte und der Massenanteil bekannt sind, wird die Molarität mit der Formel berechnet: M = (%C * d * 10) / MA.",
          "fr": "Lorsque la densité et le pourcentage massique sont connus, la molarité est calculée avec la formule : M = (%C * d * 10) / MA.",
          "ru": "Когда известны плотность и массовый процент, молярность рассчитывают по формуле: M = (%C * d * 10) / MA.",
          "ar": "عندما تكون الكثافة ونسبة الكتلة معروفة، يتم حساب المولارية بالصيغة: M = (%C * d * 10) / MA.",
          "zh": "当密度和质量百分比已知时，摩尔浓度的计算公式为：M = (%C * d * 10) / MA。",
          "ku": "Dema ku tîrbûn û rêjeya girseyê tê zanîn, molarî bi formulê tê hesibandin: M = (%C * d * 10) / MA."
        },
        {
          "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
          "en": "Percent by volume is used only in solid-liquid solutions.",
          "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
          "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
          "ru": "Объемные проценты используются только в твердожидких растворах.",
          "ar": "يتم استخدام النسبة المئوية للحجم فقط في المحاليل الصلبة والسائلة.",
          "zh": "体积百分比仅用于固液溶液。",
          "ku": "Ji sedî ji hêla volume tenê di çareseriyên hişk-avî de tê bikaranîn."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Özkütle ve kütlece yüzde bilindiğinde molarite: M = (%C * d * 10) / MA formülüyle hesaplanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When the density and mass percentage are known, molarity is calculated with the formula: M = (%C * d * 10) / MA.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Dichte und der Massenanteil bekannt sind, wird die Molarität mit der Formel berechnet: M = (%C * d * 10) / MA.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque la densité et le pourcentage massique sont connus, la molarité est calculée avec la formule : M = (%C * d * 10) / MA.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Когда известны плотность и массовый процент, молярность рассчитывают по формуле: M = (%C * d * 10) / MA.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عندما تكون الكثافة ونسبة الكتلة معروفة، يتم حساب المولارية بالصيغة: M = (%C * d * 10) / MA.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当密度和质量百分比已知时，摩尔浓度的计算公式为：M = (%C * d * 10) / MA。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku tîrbûn û rêjeya girseyê tê zanîn, molarî bi formulê tê hesibandin: M = (%C * d * 10) / MA.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Sıvı Çözeltiler ve Derişim Birimleri sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Liquid Solutions & Concentrations, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Flüssige Lösungen & Konzentrationen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Solutions Liquides & Concentrations, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Жидкие растворы и концентрации», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المحاليل السائلة والتركيز\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“溶液与浓度单位”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Su buharlaştırıldığında çözünen madde kütlesi azalır.",
          "en": "When water is evaporated, the mass of solute decreases.",
          "de": "Wenn Wasser verdunstet, nimmt die Masse des gelösten Stoffes ab.",
          "fr": "Lorsque l’eau s’évapore, la masse de soluté diminue.",
          "ru": "При испарении воды масса растворенного вещества уменьшается.",
          "ar": "عندما يتبخر الماء، تقل كتلة المذاب.",
          "zh": "当水蒸发时，溶质的质量减少。",
          "ku": "Dema ku av tê hilmikandin, girseya maddeyê kêm dibe."
        },
        {
          "tr": "Doymamış çözeltiye su eklenirse doygun hale gelir.",
          "en": "If water is added to an unsaturated solution, it becomes saturated.",
          "de": "Fügt man einer ungesättigten Lösung Wasser hinzu, wird diese gesättigt.",
          "fr": "Si de l'eau est ajoutée à une solution insaturée, elle devient saturée.",
          "ru": "Если к ненасыщенному раствору добавить воду, он станет насыщенным.",
          "ar": "إذا أضيف الماء إلى محلول غير مشبع، يصبح مشبعا.",
          "zh": "如果将水添加到不饱和溶液中，它就会变成饱和溶液。",
          "ku": "Ger av li çaraleke têrnebûyî were zêdekirin, ew têr dibe."
        },
        {
          "tr": "0,2 M 500 mL çözeltide 1 mol tuz çözünmüştür.",
          "en": "1 mole of salt was dissolved in 500 mL of 0.2 M solution.",
          "de": "1 Mol Salz wurde in 500 ml einer 0,2 M Lösung gelöst.",
          "fr": "1 mole de sel a été dissoute dans 500 ml de solution 0,2 M.",
          "ru": "1 моль соли растворяли в 500 мл 0,2 М раствора.",
          "ar": "تم إذابة 1 مول من الملح في 500 مل من محلول 0.2 م.",
          "zh": "将 1 摩尔盐溶解在 500 mL 0.2 M 溶液中。",
          "ku": "1 mol xwê di 500 ml çareseriya 0,2 M de hate hilweşandin."
        },
        {
          "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
          "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
          "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
          "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
          "ru": "Молярность – это количество молей растворенного вещества в 1 килограмме растворителя.",
          "ar": "المولارية هي عدد مولات المذاب في 1 كيلوجرام من المذيب.",
          "zh": "摩尔浓度是1千克溶剂中溶质的摩尔数。",
          "ku": "Molarity hejmara molên maddeya çareserkirî ye di 1 kîloya helwêstê de."
        },
        {
          "tr": "Çözeltilerin karıştırılması formülü: M1V1 + M2V2 + ... = M_son * V_toplam'dır.",
          "en": "The formula for mixing solutions is: M1V1 + M2V2 + ... = M_last * V_total.",
          "de": "Die Formel zum Mischen von Lösungen lautet: M1V1 + M2V2 + ... = M_last * V_total.",
          "fr": "La formule de mélange des solutions est la suivante : M1V1 + M2V2 + ... = M_last * V_total.",
          "ru": "Формула смешивания растворов: M1V1 + M2V2 + ... = M_last * V_total.",
          "ar": "صيغة خلط المحاليل هي: M1V1 + M2V2 + ... = M_last * V_total.",
          "zh": "混合解的公式为：M1V1 + M2V2 + ... = M_last * V_total。",
          "ku": "Formula tevlihevkirina çareseriyan ev e: M1V1 + M2V2 + ... = M_dawîn * V_total."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltilerin karıştırılması formülü: M1V1 + M2V2 + ... = M_son * V_toplam'dır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The formula for mixing solutions is: M1V1 + M2V2 + ... = M_last * V_total.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Formel zum Mischen von Lösungen lautet: M1V1 + M2V2 + ... = M_last * V_total.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La formule de mélange des solutions est la suivante : M1V1 + M2V2 + ... = M_last * V_total.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Формула смешивания растворов: M1V1 + M2V2 + ... = M_last * V_total.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"صيغة خلط المحاليل هي: M1V1 + M2V2 + ... = M_last * V_total.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“混合解的公式为：M1V1 + M2V2 + ... = M_last * V_total。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Formula tevlihevkirina çareseriyan ev e: M1V1 + M2V2 + ... = M_dawîn * V_total.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin06",
      "stem": {
        "tr": "Aşağıda Sıvı Çözeltiler ve Derişim Birimleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Liquid Solutions & Concentrations, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Flüssige Lösungen & Konzentrationen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Solutions Liquides & Concentrations, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Жидкие растворы и концентрации», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المحاليل السائلة والتركيز\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“溶液与浓度单位”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "İyonik katı suda çözündüğünde çözeltideki iyon derişimi tuzun molaritesi ile iyon katsayısının çarpımıdır.",
          "en": "When an ionic solid is dissolved in water, the ion concentration in the solution is the product of the molarity of the salt and the ionic coefficient.",
          "de": "Wenn ein ionischer Feststoff in Wasser gelöst wird, ist die Ionenkonzentration in der Lösung das Produkt aus der Molarität des Salzes und dem Ionenkoeffizienten.",
          "fr": "Lorsqu'un solide ionique est dissous dans l'eau, la concentration en ions dans la solution est le produit de la molarité du sel et du coefficient ionique.",
          "ru": "Когда ионное твердое вещество растворяется в воде, концентрация ионов в растворе является произведением молярности соли и ионного коэффициента.",
          "ar": "عندما تذوب مادة صلبة أيونية في الماء، فإن تركيز الأيونات في المحلول يكون حاصل ضرب مولارية الملح والمعامل الأيوني.",
          "zh": "当离子固体溶解在水中时，溶液中的离子浓度是盐的摩尔浓度和离子系数的乘积。",
          "ku": "Dema ku hişkek îyonî di nav avê de tê hilweşandin, kombûna îyonê ya di nav çareseriyê de hilbera molarîteya xwê û rêjeya îyonî ye."
        },
        {
          "tr": "Ortak iyonların derişimi karıştırmadan etkilenmez.",
          "en": "The concentration of common ions is not affected by mixing.",
          "de": "Die Konzentration gemeinsamer Ionen wird durch das Mischen nicht beeinflusst.",
          "fr": "La concentration des ions communs n'est pas affectée par le mélange.",
          "ru": "Смешивание не влияет на концентрацию общих ионов.",
          "ar": "لا يتأثر تركيز الأيونات المشتركة بالخلط.",
          "zh": "共同离子的浓度不受混合的影响。",
          "ku": "Tevlihevkirina îyonên hevpar bi tevlihevkirinê bandor nabe."
        },
        {
          "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
          "en": "Sugar water conducts electricity very well because it contains free ions.",
          "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
          "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
          "ru": "Сахарная вода очень хорошо проводит электричество, поскольку содержит свободные ионы.",
          "ar": "يوصل الماء بالسكر الكهرباء بشكل جيد للغاية لأنه يحتوي على أيونات حرة.",
          "zh": "糖水导电性很好，因为它含有自由离子。",
          "ku": "Ava şekir elektrîkê pir baş derbas dike ji ber ku îyonên belaş dihewîne."
        },
        {
          "tr": "Derişik çözelti daima doygun çözelti demektir.",
          "en": "Concentrated solution always means saturated solution.",
          "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
          "fr": "Une solution concentrée signifie toujours une solution saturée.",
          "ru": "Концентрированный раствор всегда означает насыщенный раствор.",
          "ar": "المحلول المركز يعني دائمًا المحلول المشبع.",
          "zh": "浓溶液总是意味着饱和溶液。",
          "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
        },
        {
          "tr": "Molalite çözeltinin toplam hacmine bölünerek bulunur.",
          "en": "Molality is found by dividing by the total volume of the solution.",
          "de": "Die Molalität wird durch Division durch das Gesamtvolumen der Lösung ermittelt.",
          "fr": "La molalité se trouve en divisant par le volume total de la solution.",
          "ru": "Моляльность находится путем деления на общий объем раствора.",
          "ar": "يتم العثور على المولالية عن طريق القسمة على الحجم الكلي للحل.",
          "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
          "ku": "Molality bi dabeşkirina bi qebareya tevahî ya çareseriyê ve tê dîtin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İyonik katı suda çözündüğünde çözeltideki iyon derişimi tuzun molaritesi ile iyon katsayısının çarpımıdır.\" ifadesidir. 0,1 M AlCl3'te [Cl-] = 3 * 0,1 = 0,3 M'dır!",
        "en": "The correct statement is: \"When an ionic solid is dissolved in water, the ion concentration in the solution is the product of the molarity of the salt and the ionic coefficient.\". In 0.1 M AlCl3, [Cl-] = 3 * 0.1 = 0.3 M!",
        "de": "Die zutreffende Aussage lautet: \"Wenn ein ionischer Feststoff in Wasser gelöst wird, ist die Ionenkonzentration in der Lösung das Produkt aus der Molarität des Salzes und dem Ionenkoeffizienten.\". In 0,1 M AlCl3 ist [Cl-] = 3 * 0,1 = 0,3 M!",
        "fr": "L'affirmation exacte est: \"Lorsqu'un solide ionique est dissous dans l'eau, la concentration en ions dans la solution est le produit de la molarité du sel et du coefficient ionique.\". Dans 0,1 M AlCl3, [Cl-] = 3 * 0,1 = 0,3 M !",
        "ru": "Правильное утверждение: «Когда ионное твердое вещество растворяется в воде, концентрация ионов в растворе является произведением молярности соли и ионного коэффициента.». В 0,1 М AlCl3 [Cl-] = 3*0,1 = 0,3 М!",
        "ar": "العبارة الصحيحة هي: \"عندما تذوب مادة صلبة أيونية في الماء، فإن تركيز الأيونات في المحلول يكون حاصل ضرب مولارية الملح والمعامل الأيوني.\". في 0.1 مولار AlCl3، [Cl-] = 3 * 0.1 = 0.3 مولار!",
        "zh": "正确表述为：“当离子固体溶解在水中时，溶液中的离子浓度是盐的摩尔浓度和离子系数的乘积。”。在 0.1 M AlCl3 中，[Cl-] = 3 * 0.1 = 0.3 M！",
        "ku": "Gotina rast ev e: \"Dema ku hişkek îyonî di nav avê de tê hilweşandin, kombûna îyonê ya di nav çareseriyê de hilbera molarîteya xwê û rêjeya îyonî ye.\". Di 0,1 M AlCl3, [Cl-] = 3 * 0,1 = 0,3 M!"
      }
    },
    {
      "id": "u14-twin07",
      "stem": {
        "tr": "Sıvı Çözeltiler ve Derişim Birimleri konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Liquid Solutions & Concentrations, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Flüssige Lösungen & Konzentrationen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Solutions Liquides & Concentrations, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Жидкие растворы и концентрации», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المحاليل السائلة والتركيز\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“溶液与浓度单位”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.",
          "en": "Molality decreases as temperature increases due to volume expansion.",
          "de": "Die Molalität nimmt mit steigender Temperatur aufgrund der Volumenausdehnung ab.",
          "fr": "La molalité diminue à mesure que la température augmente en raison de l'expansion du volume.",
          "ru": "Моляльность уменьшается с увеличением температуры из-за объемного расширения.",
          "ar": "تتناقص المولالية مع زيادة درجة الحرارة بسبب توسع الحجم.",
          "zh": "由于体积膨胀，质量摩尔浓度随温度升高而降低。",
          "ku": "Her ku germahî zêde dibe ji ber berbelavbûna qebareyê molalîte kêm dibe."
        },
        {
          "tr": "Çözeltiye saf su eklendiğinde (seyreltme) çözünenin mol sayısı değişmez; formül M1V1 = M2V2'dir.",
          "en": "When pure water is added to the solution (dilution), the number of moles of solute does not change; The formula is M1V1 = M2V2.",
          "de": "Wenn der Lösung reines Wasser zugesetzt wird (Verdünnung), ändert sich die Molzahl des gelösten Stoffes nicht; Die Formel lautet M1V1 = M2V2.",
          "fr": "Lorsque de l’eau pure est ajoutée à la solution (dilution), le nombre de moles de soluté ne change pas ; La formule est M1V1 = M2V2.",
          "ru": "При добавлении к раствору чистой воды (разбавлении) количество молей растворенного вещества не меняется; Формула: M1V1 = M2V2.",
          "ar": "عند إضافة الماء النقي إلى المحلول (التخفيف)، لا يتغير عدد مولات المذاب؛ الصيغة هي M1V1 = M2V2.",
          "zh": "当溶液中加入纯水（稀释）时，溶质的摩尔数不变；公式为M1V1=M2V2。",
          "ku": "Dema ku ava saf li haletê tê zêdekirin (dilution), hêjmara molên sosret naguhere; Formula M1V1 = M2V2 e."
        },
        {
          "tr": "Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.",
          "en": "Sugar ionizes in water and dissociates into H+ and OH- ions.",
          "de": "Zucker ionisiert in Wasser und zerfällt in H+- und OH--Ionen.",
          "fr": "Le sucre s'ionise dans l'eau et se dissocie en ions H+ et OH-.",
          "ru": "Сахар ионизируется в воде и диссоциирует на ионы H+ и OH-.",
          "ar": "يتأين السكر في الماء ويتفكك إلى أيونات H+ و OH-.",
          "zh": "糖在水中电离并解离成 H+ 和 OH- 离子。",
          "ku": "Şekir di avê de îyonîze dibe û dibe îyonên H+ û OH-."
        },
        {
          "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
          "en": "Percent by volume is used only in solid-liquid solutions.",
          "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
          "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
          "ru": "Объемные проценты используются только в твердожидких растворах.",
          "ar": "يتم استخدام النسبة المئوية للحجم فقط في المحاليل الصلبة والسائلة.",
          "zh": "体积百分比仅用于固液溶液。",
          "ku": "Ji sedî ji hêla volume tenê di çareseriyên hişk-avî de tê bikaranîn."
        },
        {
          "tr": "Mol kesri 1'den büyük değerler alabilir.",
          "en": "The mole fraction can take values ​​greater than 1.",
          "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
          "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
          "ru": "Мольная доля может принимать значения больше 1.",
          "ar": "يمكن أن يأخذ جزء المول قيمًا أكبر من 1.",
          "zh": "摩尔分数可以取大于1的值。",
          "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltiye saf su eklendiğinde (seyreltme) çözünenin mol sayısı değişmez; formül M1V1 = M2V2'dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When pure water is added to the solution (dilution), the number of moles of solute does not change; The formula is M1V1 = M2V2.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn der Lösung reines Wasser zugesetzt wird (Verdünnung), ändert sich die Molzahl des gelösten Stoffes nicht; Die Formel lautet M1V1 = M2V2.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque de l’eau pure est ajoutée à la solution (dilution), le nombre de moles de soluté ne change pas ; La formule est M1V1 = M2V2.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При добавлении к раствору чистой воды (разбавлении) количество молей растворенного вещества не меняется; Формула: M1V1 = M2V2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند إضافة الماء النقي إلى المحلول (التخفيف)، لا يتغير عدد مولات المذاب؛ الصيغة هي M1V1 = M2V2.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当溶液中加入纯水（稀释）时，溶质的摩尔数不变；公式为M1V1=M2V2。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku ava saf li haletê tê zêdekirin (dilution), hêjmara molên sosret naguhere; Formula M1V1 = M2V2 e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Sıvı Çözeltiler ve Derişim Birimleri ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Liquid Solutions & Concentrations, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Flüssige Lösungen & Konzentrationen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Solutions Liquides & Concentrations, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Жидкие растворы и концентрации», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المحاليل السائلة والتركيز\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶液与浓度单位”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Doymamış çözeltiye su eklenirse doygun hale gelir.",
          "en": "If water is added to an unsaturated solution, it becomes saturated.",
          "de": "Fügt man einer ungesättigten Lösung Wasser hinzu, wird diese gesättigt.",
          "fr": "Si de l'eau est ajoutée à une solution insaturée, elle devient saturée.",
          "ru": "Если к ненасыщенному раствору добавить воду, он станет насыщенным.",
          "ar": "إذا أضيف الماء إلى محلول غير مشبع، يصبح مشبعا.",
          "zh": "如果将水添加到不饱和溶液中，它就会变成饱和溶液。",
          "ku": "Ger av li çaraleke têrnebûyî were zêdekirin, ew têr dibe."
        },
        {
          "tr": "0,2 M 500 mL çözeltide 1 mol tuz çözünmüştür.",
          "en": "1 mole of salt was dissolved in 500 mL of 0.2 M solution.",
          "de": "1 Mol Salz wurde in 500 ml einer 0,2 M Lösung gelöst.",
          "fr": "1 mole de sel a été dissoute dans 500 ml de solution 0,2 M.",
          "ru": "1 моль соли растворяли в 500 мл 0,2 М раствора.",
          "ar": "تم إذابة 1 مول من الملح في 500 مل من محلول 0.2 م.",
          "zh": "将 1 摩尔盐溶解在 500 mL 0.2 M 溶液中。",
          "ku": "1 mol xwê di 500 ml çareseriya 0,2 M de hate hilweşandin."
        },
        {
          "tr": "Çözeltiden çökme olmadan su buharlaştırılırsa (deriştirme) molarite artar.",
          "en": "If water is evaporated from solution without precipitating (concentration), molarity increases.",
          "de": "Wenn Wasser aus der Lösung verdampft wird, ohne dass es zur Ausfällung kommt (Konzentration), erhöht sich die Molarität.",
          "fr": "Si l'eau s'évapore de la solution sans précipiter (concentration), la molarité augmente.",
          "ru": "Если воду испарять из раствора без выпадения в осадок (концентрирование), то молярность увеличивается.",
          "ar": "إذا تبخر الماء من المحلول دون ترسيب (تركيز)، تزداد المولارية.",
          "zh": "如果水从溶液中蒸发而没有沉淀（浓缩），则摩尔浓度会增加。",
          "ku": "Ger av ji çareseriyê bê barandin (tevlihevkirin) bê hilmandin, molarî zêde dibe."
        },
        {
          "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
          "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
          "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
          "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
          "ru": "Молярность – это количество молей растворенного вещества в 1 килограмме растворителя.",
          "ar": "المولارية هي عدد مولات المذاب في 1 كيلوجرام من المذيب.",
          "zh": "摩尔浓度是1千克溶剂中溶质的摩尔数。",
          "ku": "Molarity hejmara molên maddeya çareserkirî ye di 1 kîloya helwêstê de."
        },
        {
          "tr": "Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.",
          "en": "When calculating molarity, the solution density is divided by mass percentage.",
          "de": "Bei der Berechnung der Molarität wird die Lösungsdichte durch den Massenprozentsatz dividiert.",
          "fr": "Lors du calcul de la molarité, la densité de la solution est divisée par le pourcentage massique.",
          "ru": "При расчете молярности плотность раствора делят на массовые проценты.",
          "ar": "عند حساب المولارية، يتم تقسيم كثافة المحلول على النسبة المئوية للكتلة.",
          "zh": "计算摩尔浓度时，用溶液密度除以质量百分比。",
          "ku": "Dema ku molarity tê hesibandin, dendika çareseriyê bi rêjeya girseyî tê dabeş kirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltiden çökme olmadan su buharlaştırılırsa (deriştirme) molarite artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If water is evaporated from solution without precipitating (concentration), molarity increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Wasser aus der Lösung verdampft wird, ohne dass es zur Ausfällung kommt (Konzentration), erhöht sich die Molarität.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'eau s'évapore de la solution sans précipiter (concentration), la molarité augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если воду испарять из раствора без выпадения в осадок (концентрирование), то молярность увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تبخر الماء من المحلول دون ترسيب (تركيز)، تزداد المولارية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果水从溶液中蒸发而没有沉淀（浓缩），则摩尔浓度会增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger av ji çareseriyê bê barandin (tevlihevkirin) bê hilmandin, molarî zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Sıvı Çözeltiler ve Derişim Birimleri konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Liquid Solutions & Concentrations, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Flüssige Lösungen & Konzentrationen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Solutions Liquides & Concentrations, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Жидкие растворы и концентрации», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المحاليل السائلة والتركيز\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“溶液与浓度单位”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
          "en": "Sugar water conducts electricity very well because it contains free ions.",
          "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
          "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
          "ru": "Сахарная вода очень хорошо проводит электричество, поскольку содержит свободные ионы.",
          "ar": "يوصل الماء بالسكر الكهرباء بشكل جيد للغاية لأنه يحتوي على أيونات حرة.",
          "zh": "糖水导电性很好，因为它含有自由离子。",
          "ku": "Ava şekir elektrîkê pir baş derbas dike ji ber ku îyonên belaş dihewîne."
        },
        {
          "tr": "Derişik çözelti daima doygun çözelti demektir.",
          "en": "Concentrated solution always means saturated solution.",
          "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
          "fr": "Une solution concentrée signifie toujours une solution saturée.",
          "ru": "Концентрированный раствор всегда означает насыщенный раствор.",
          "ar": "المحلول المركز يعني دائمًا المحلول المشبع.",
          "zh": "浓溶液总是意味着饱和溶液。",
          "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
        },
        {
          "tr": "Molalite çözeltinin toplam hacmine bölünerek bulunur.",
          "en": "Molality is found by dividing by the total volume of the solution.",
          "de": "Die Molalität wird durch Division durch das Gesamtvolumen der Lösung ermittelt.",
          "fr": "La molalité se trouve en divisant par le volume total de la solution.",
          "ru": "Моляльность находится путем деления на общий объем раствора.",
          "ar": "يتم العثور على المولالية عن طريق القسمة على الحجم الكلي للحل.",
          "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
          "ku": "Molality bi dabeşkirina bi qebareya tevahî ya çareseriyê ve tê dîtin."
        },
        {
          "tr": "Farklı çözeltiler karıştırıldığında ortak iyonların toplam molü toplam hacme bölünerek yeni derişim bulunur.",
          "en": "When different solutions are mixed, the new concentration is found by dividing the total moles of common ions by the total volume.",
          "de": "Wenn verschiedene Lösungen gemischt werden, wird die neue Konzentration ermittelt, indem die Gesamtmole der gemeinsamen Ionen durch das Gesamtvolumen dividiert werden.",
          "fr": "Lorsque différentes solutions sont mélangées, la nouvelle concentration est trouvée en divisant le nombre total de moles d’ions communs par le volume total.",
          "ru": "При смешивании разных растворов новую концентрацию определяют путем деления общего количества молей общих ионов на общий объем.",
          "ar": "عند خلط محاليل مختلفة، يتم الحصول على التركيز الجديد بقسمة إجمالي مولات الأيونات الشائعة على الحجم الإجمالي.",
          "zh": "当混合不同的溶液时，通过将公共离子的总摩尔数除以总体积来找到新的浓度。",
          "ku": "Dema ku çareseriyên cihêreng tevdigerin, bi dabeşkirina tevaya molên îyonên hevpar bi qebareya tevayî re konsantasyona nû tê dîtin."
        },
        {
          "tr": "Çözeltiler karıştırıldığında hacimler asla toplanamaz.",
          "en": "Volumes can never be summed when solutions are mixed.",
          "de": "Volumina können niemals summiert werden, wenn Lösungen gemischt werden.",
          "fr": "Les volumes ne peuvent jamais être additionnés lorsque les solutions sont mélangées.",
          "ru": "Объемы никогда не суммируются при смешивании растворов.",
          "ar": "لا يمكن أبدًا جمع الأحجام عند خلط المحاليل.",
          "zh": "当溶液混合时，体积永远无法相加。",
          "ku": "Dema ku çareserî tevlihev bibin cild qet nayên berhev kirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Farklı çözeltiler karıştırıldığında ortak iyonların toplam molü toplam hacme bölünerek yeni derişim bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When different solutions are mixed, the new concentration is found by dividing the total moles of common ions by the total volume.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn verschiedene Lösungen gemischt werden, wird die neue Konzentration ermittelt, indem die Gesamtmole der gemeinsamen Ionen durch das Gesamtvolumen dividiert werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque différentes solutions sont mélangées, la nouvelle concentration est trouvée en divisant le nombre total de moles d’ions communs par le volume total.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При смешивании разных растворов новую концентрацию определяют путем деления общего количества молей общих ионов на общий объем.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند خلط محاليل مختلفة، يتم الحصول على التركيز الجديد بقسمة إجمالي مولات الأيونات الشائعة على الحجم الإجمالي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当混合不同的溶液时，通过将公共离子的总摩尔数除以总体积来找到新的浓度。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku çareseriyên cihêreng tevdigerin, bi dabeşkirina tevaya molên îyonên hevpar bi qebareya tevayî re konsantasyona nû tê dîtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin10",
      "stem": {
        "tr": "Kimya dersinde Sıvı Çözeltiler ve Derişim Birimleri ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Liquid Solutions & Concentrations, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Flüssige Lösungen & Konzentrationen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Solutions Liquides & Concentrations, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Жидкие растворы и концентрации», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المحاليل السائلة والتركيز\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“溶液与浓度单位”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.",
          "en": "Sugar ionizes in water and dissociates into H+ and OH- ions.",
          "de": "Zucker ionisiert in Wasser und zerfällt in H+- und OH--Ionen.",
          "fr": "Le sucre s'ionise dans l'eau et se dissocie en ions H+ et OH-.",
          "ru": "Сахар ионизируется в воде и диссоциирует на ионы H+ и OH-.",
          "ar": "يتأين السكر في الماء ويتفكك إلى أيونات H+ و OH-.",
          "zh": "糖在水中电离并解离成 H+ 和 OH- 离子。",
          "ku": "Şekir di avê de îyonîze dibe û dibe îyonên H+ û OH-."
        },
        {
          "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
          "en": "Percent by volume is used only in solid-liquid solutions.",
          "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
          "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
          "ru": "Объемные проценты используются только в твердожидких растворах.",
          "ar": "يتم استخدام النسبة المئوية للحجم فقط في المحاليل الصلبة والسائلة.",
          "zh": "体积百分比仅用于固液溶液。",
          "ku": "Ji sedî ji hêla volume tenê di çareseriyên hişk-avî de tê bikaranîn."
        },
        {
          "tr": "Mol kesri 1'den büyük değerler alabilir.",
          "en": "The mole fraction can take values ​​greater than 1.",
          "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
          "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
          "ru": "Мольная доля может принимать значения больше 1.",
          "ar": "يمكن أن يأخذ جزء المول قيمًا أكبر من 1.",
          "zh": "摩尔分数可以取大于1的值。",
          "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
        },
        {
          "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
          "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
          "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
          "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
          "ru": "Концентрация хлорид-ионов в 0,1 М растворе AlCl3 составляет 0,1 М.",
          "ar": "تركيز أيون الكلوريد في محلول 0.1 مولار AlCl3 هو 0.1 مولار.",
          "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
          "ku": "Di çareseriya 0,1 M AlCl3 de rêjeya îyona klorîdê 0,1 M e."
        },
        {
          "tr": "Sıcaklık arttıkça sıvı çözeltilerin hacmi genleştiğinden molarite bir miktar azalır; molalite ise sıcaklıkla değişmez.",
          "en": "As the temperature increases, the molarity decreases slightly as the volume of liquid solutions expands; Molality does not change with temperature.",
          "de": "Mit steigender Temperatur nimmt die Molarität leicht ab, da sich das Volumen flüssiger Lösungen ausdehnt; Die Molalität ändert sich nicht mit der Temperatur.",
          "fr": "À mesure que la température augmente, la molarité diminue légèrement à mesure que le volume des solutions liquides augmente ; La molalité ne change pas avec la température.",
          "ru": "С повышением температуры молярность несколько уменьшается по мере расширения объема жидких растворов; Моляльность не меняется с температурой.",
          "ar": "مع زيادة درجة الحرارة، تنخفض المولية قليلاً مع توسع حجم المحاليل السائلة؛ المولالية لا تتغير مع درجة الحرارة.",
          "zh": "随着温度的升高，随着液体溶液体积的膨胀，摩尔浓度略有下降；质量摩尔浓度不随温度变化。",
          "ku": "Her ku germahî zêde dibe, dema ku qebareya çareseriyên şilek berfireh dibe, molarî hinekî kêm dibe; Molality bi germê nayê guhertin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Sıcaklık arttıkça sıvı çözeltilerin hacmi genleştiğinden molarite bir miktar azalır; molalite ise sıcaklıkla değişmez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the temperature increases, the molarity decreases slightly as the volume of liquid solutions expands; Molality does not change with temperature.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit steigender Temperatur nimmt die Molarität leicht ab, da sich das Volumen flüssiger Lösungen ausdehnt; Die Molalität ändert sich nicht mit der Temperatur.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la température augmente, la molarité diminue légèrement à mesure que le volume des solutions liquides augmente ; La molalité ne change pas avec la température.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «С повышением температуры молярность несколько уменьшается по мере расширения объема жидких растворов; Моляльность не меняется с температурой.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مع زيادة درجة الحرارة، تنخفض المولية قليلاً مع توسع حجم المحاليل السائلة؛ المولالية لا تتغير مع درجة الحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着温度的升高，随着液体溶液体积的膨胀，摩尔浓度略有下降；质量摩尔浓度不随温度变化。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku germahî zêde dibe, dema ku qebareya çareseriyên şilek berfireh dibe, molarî hinekî kêm dibe; Molality bi germê nayê guhertin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Sıvı Çözeltiler ve Derişim Birimleri konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Liquid Solutions & Concentrations?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Flüssige Lösungen & Konzentrationen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Solutions Liquides & Concentrations ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Жидкие растворы и концентрации»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المحاليل السائلة والتركيز\"؟",
        "zh": "根据“溶液与浓度单位”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de rast e?"
      },
      "options": [
        {
          "tr": "Doymamış bir çözeltiyi doygun hale getirmek için çözünen eklemek, su buharlaştırmak veya soğutmak (endotermikse) gerekir.",
          "en": "To make an unsaturated solution saturated, it is necessary to add solute, evaporate water, or cool (if endothermic).",
          "de": "Um eine ungesättigte Lösung zu sättigen, ist es notwendig, gelösten Stoff hinzuzufügen, Wasser zu verdampfen oder abzukühlen (falls endotherm).",
          "fr": "Pour saturer une solution insaturée, il est nécessaire d’ajouter du soluté, d’évaporer de l’eau ou de la refroidir (si elle est endothermique).",
          "ru": "Чтобы сделать ненасыщенный раствор насыщенным, необходимо добавить растворенное вещество, выпарить воду или охладить (если эндотермический).",
          "ar": "لجعل المحلول غير المشبع مشبعًا، من الضروري إضافة الماء المذاب أو المتبخر أو البارد (إذا كان ماصًا للحرارة).",
          "zh": "要使不饱和溶液饱和，需要添加溶质、蒸发水或冷却（如果是吸热的）。",
          "ku": "Ji bo ku çareseriyek ne têrkirî têr bibe, pêdivî ye ku meriv soletê lê zêde bike, avê bikelînin, an jî sar bike (eger endotermîk)."
        },
        {
          "tr": "0,2 M 500 mL çözeltide 1 mol tuz çözünmüştür.",
          "en": "1 mole of salt was dissolved in 500 mL of 0.2 M solution.",
          "de": "1 Mol Salz wurde in 500 ml einer 0,2 M Lösung gelöst.",
          "fr": "1 mole de sel a été dissoute dans 500 ml de solution 0,2 M.",
          "ru": "1 моль соли растворяли в 500 мл 0,2 М раствора.",
          "ar": "تم إذابة 1 مول من الملح في 500 مل من محلول 0.2 م.",
          "zh": "将 1 摩尔盐溶解在 500 mL 0.2 M 溶液中。",
          "ku": "1 mol xwê di 500 ml çareseriya 0,2 M de hate hilweşandin."
        },
        {
          "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
          "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
          "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
          "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
          "ru": "Молярность – это количество молей растворенного вещества в 1 килограмме растворителя.",
          "ar": "المولارية هي عدد مولات المذاب في 1 كيلوجرام من المذيب.",
          "zh": "摩尔浓度是1千克溶剂中溶质的摩尔数。",
          "ku": "Molarity hejmara molên maddeya çareserkirî ye di 1 kîloya helwêstê de."
        },
        {
          "tr": "Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.",
          "en": "When calculating molarity, the solution density is divided by mass percentage.",
          "de": "Bei der Berechnung der Molarität wird die Lösungsdichte durch den Massenprozentsatz dividiert.",
          "fr": "Lors du calcul de la molarité, la densité de la solution est divisée par le pourcentage massique.",
          "ru": "При расчете молярности плотность раствора делят на массовые проценты.",
          "ar": "عند حساب المولارية، يتم تقسيم كثافة المحلول على النسبة المئوية للكتلة.",
          "zh": "计算摩尔浓度时，用溶液密度除以质量百分比。",
          "ku": "Dema ku molarity tê hesibandin, dendika çareseriyê bi rêjeya girseyî tê dabeş kirin."
        },
        {
          "tr": "Su eklendiğinde çözünenin mol sayısı yarıya iner.",
          "en": "When water is added, the number of moles of solute is halved.",
          "de": "Bei Zugabe von Wasser halbiert sich die Molzahl des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, le nombre de moles de soluté est réduit de moitié.",
          "ru": "При добавлении воды количество молей растворенного вещества уменьшается вдвое.",
          "ar": "عند إضافة الماء، ينخفض ​​عدد مولات المذاب إلى النصف.",
          "zh": "当添加水时，溶质的摩尔数减半。",
          "ku": "Dema ku av lê tê zêdekirin, hejmara molên maddeyê nîvî dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Doymamış bir çözeltiyi doygun hale getirmek için çözünen eklemek, su buharlaştırmak veya soğutmak (endotermikse) gerekir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"To make an unsaturated solution saturated, it is necessary to add solute, evaporate water, or cool (if endothermic).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Um eine ungesättigte Lösung zu sättigen, ist es notwendig, gelösten Stoff hinzuzufügen, Wasser zu verdampfen oder abzukühlen (falls endotherm).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pour saturer une solution insaturée, il est nécessaire d’ajouter du soluté, d’évaporer de l’eau ou de la refroidir (si elle est endothermique).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Чтобы сделать ненасыщенный раствор насыщенным, необходимо добавить растворенное вещество, выпарить воду или охладить (если эндотермический).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لجعل المحلول غير المشبع مشبعًا، من الضروري إضافة الماء المذاب أو المتبخر أو البارد (إذا كان ماصًا للحرارة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“要使不饱和溶液饱和，需要添加溶质、蒸发水或冷却（如果是吸热的）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji bo ku çareseriyek ne têrkirî têr bibe, pêdivî ye ku meriv soletê lê zêde bike, avê bikelînin, an jî sar bike (eger endotermîk).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Sıvı Çözeltiler ve Derişim Birimleri sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Liquid Solutions & Concentrations, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Flüssige Lösungen & Konzentrationen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Solutions Liquides & Concentrations, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Жидкие растворы и концентрации», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المحاليل السائلة والتركيز\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“溶液与浓度单位”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Derişik çözelti daima doygun çözelti demektir.",
          "en": "Concentrated solution always means saturated solution.",
          "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
          "fr": "Une solution concentrée signifie toujours une solution saturée.",
          "ru": "Концентрированный раствор всегда означает насыщенный раствор.",
          "ar": "المحلول المركز يعني دائمًا المحلول المشبع.",
          "zh": "浓溶液总是意味着饱和溶液。",
          "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
        },
        {
          "tr": "Elektrolit çözeltiler serbest iyonlar içerdiği için elektrik akımını iletir (tuzlu su, asitler, bazlar).",
          "en": "Electrolyte solutions conduct electric current because they contain free ions (salt water, acids, bases).",
          "de": "Elektrolytlösungen leiten elektrischen Strom, weil sie freie Ionen (Salzwasser, Säuren, Basen) enthalten.",
          "fr": "Les solutions électrolytiques conduisent le courant électrique car elles contiennent des ions libres (eau salée, acides, bases).",
          "ru": "Растворы электролитов проводят электрический ток, поскольку содержат свободные ионы (соленая вода, кислоты, основания).",
          "ar": "تقوم محاليل الإلكتروليت بتوصيل التيار الكهربائي لأنها تحتوي على أيونات حرة (ماء مالح، أحماض، قواعد).",
          "zh": "电解质溶液之所以能传导电流，是因为它们含有自由离子（盐水、酸、碱）。",
          "ku": "Çareseriyên elektrolîtê îyonên azad (ava xwê, asîd, baz) dihewîne elektrîkê."
        },
        {
          "tr": "Molalite çözeltinin toplam hacmine bölünerek bulunur.",
          "en": "Molality is found by dividing by the total volume of the solution.",
          "de": "Die Molalität wird durch Division durch das Gesamtvolumen der Lösung ermittelt.",
          "fr": "La molalité se trouve en divisant par le volume total de la solution.",
          "ru": "Моляльность находится путем деления на общий объем раствора.",
          "ar": "يتم العثور على المولالية عن طريق القسمة على الحجم الكلي للحل.",
          "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
          "ku": "Molality bi dabeşkirina bi qebareya tevahî ya çareseriyê ve tê dîtin."
        },
        {
          "tr": "Çözeltiler karıştırıldığında hacimler asla toplanamaz.",
          "en": "Volumes can never be summed when solutions are mixed.",
          "de": "Volumina können niemals summiert werden, wenn Lösungen gemischt werden.",
          "fr": "Les volumes ne peuvent jamais être additionnés lorsque les solutions sont mélangées.",
          "ru": "Объемы никогда не суммируются при смешивании растворов.",
          "ar": "لا يمكن أبدًا جمع الأحجام عند خلط المحاليل.",
          "zh": "当溶液混合时，体积永远无法相加。",
          "ku": "Dema ku çareserî tevlihev bibin cild qet nayên berhev kirin."
        },
        {
          "tr": "Su buharlaştırıldığında çözünen madde kütlesi azalır.",
          "en": "When water is evaporated, the mass of solute decreases.",
          "de": "Wenn Wasser verdunstet, nimmt die Masse des gelösten Stoffes ab.",
          "fr": "Lorsque l’eau s’évapore, la masse de soluté diminue.",
          "ru": "При испарении воды масса растворенного вещества уменьшается.",
          "ar": "عندما يتبخر الماء، تقل كتلة المذاب.",
          "zh": "当水蒸发时，溶质的质量减少。",
          "ku": "Dema ku av tê hilmikandin, girseya maddeyê kêm dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Elektrolit çözeltiler serbest iyonlar içerdiği için elektrik akımını iletir (tuzlu su, asitler, bazlar).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Electrolyte solutions conduct electric current because they contain free ions (salt water, acids, bases).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Elektrolytlösungen leiten elektrischen Strom, weil sie freie Ionen (Salzwasser, Säuren, Basen) enthalten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les solutions électrolytiques conduisent le courant électrique car elles contiennent des ions libres (eau salée, acides, bases).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворы электролитов проводят электрический ток, поскольку содержат свободные ионы (соленая вода, кислоты, основания).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تقوم محاليل الإلكتروليت بتوصيل التيار الكهربائي لأنها تحتوي على أيونات حرة (ماء مالح، أحماض، قواعد).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电解质溶液之所以能传导电流，是因为它们含有自由离子（盐水、酸、碱）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareseriyên elektrolîtê îyonên azad (ava xwê, asîd, baz) dihewîne elektrîkê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin13",
      "stem": {
        "tr": "Aşağıda Sıvı Çözeltiler ve Derişim Birimleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Liquid Solutions & Concentrations, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Flüssige Lösungen & Konzentrationen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Solutions Liquides & Concentrations, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Жидкие растворы и концентрации», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المحاليل السائلة والتركيز\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“溶液与浓度单位”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
          "en": "Percent by volume is used only in solid-liquid solutions.",
          "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
          "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
          "ru": "Объемные проценты используются только в твердожидких растворах.",
          "ar": "يتم استخدام النسبة المئوية للحجم فقط في المحاليل الصلبة والسائلة.",
          "zh": "体积百分比仅用于固液溶液。",
          "ku": "Ji sedî ji hêla volume tenê di çareseriyên hişk-avî de tê bikaranîn."
        },
        {
          "tr": "Mol kesri 1'den büyük değerler alabilir.",
          "en": "The mole fraction can take values ​​greater than 1.",
          "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
          "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
          "ru": "Мольная доля может принимать значения больше 1.",
          "ar": "يمكن أن يأخذ جزء المول قيمًا أكبر من 1.",
          "zh": "摩尔分数可以取大于1的值。",
          "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
        },
        {
          "tr": "Moleküler çözünen maddeler (glikoz C6H12O6, etil alkol C2H5OH) elektrik akımını iletmez (elektrolit değildir).",
          "en": "Molecular solutes (glucose C6H12O6, ethyl alcohol C2H5OH) do not conduct electric current (are not electrolytes).",
          "de": "Molekulare gelöste Stoffe (Glucose C6H12O6, Ethylalkohol C2H5OH) leiten keinen elektrischen Strom (sind keine Elektrolyte).",
          "fr": "Les solutés moléculaires (glucose C6H12O6, alcool éthylique C2H5OH) ne conduisent pas le courant électrique (ne sont pas des électrolytes).",
          "ru": "Молекулярные растворенные вещества (глюкоза C6H12O6, этиловый спирт C2H5OH) не проводят электрический ток (не являются электролитами).",
          "ar": "المذابات الجزيئية (الجلوكوز C6H12O6، الكحول الإيثيلي C2H5OH) لا توصل التيار الكهربائي (ليست إلكتروليتات).",
          "zh": "分子溶质（葡萄糖C6H12O6、乙醇C2H5OH）不导电（不是电解质）。",
          "ku": "Alkolên molekulî (glîkoz C6H12O6, alkola etîl C2H5OH) elektrîkê nagirin (elektrolît ne)."
        },
        {
          "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
          "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
          "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
          "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
          "ru": "Концентрация хлорид-ионов в 0,1 М растворе AlCl3 составляет 0,1 М.",
          "ar": "تركيز أيون الكلوريد في محلول 0.1 مولار AlCl3 هو 0.1 مولار.",
          "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
          "ku": "Di çareseriya 0,1 M AlCl3 de rêjeya îyona klorîdê 0,1 M e."
        },
        {
          "tr": "Ortak iyonların derişimi karıştırmadan etkilenmez.",
          "en": "The concentration of common ions is not affected by mixing.",
          "de": "Die Konzentration gemeinsamer Ionen wird durch das Mischen nicht beeinflusst.",
          "fr": "La concentration des ions communs n'est pas affectée par le mélange.",
          "ru": "Смешивание не влияет на концентрацию общих ионов.",
          "ar": "لا يتأثر تركيز الأيونات المشتركة بالخلط.",
          "zh": "共同离子的浓度不受混合的影响。",
          "ku": "Tevlihevkirina îyonên hevpar bi tevlihevkirinê bandor nabe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Moleküler çözünen maddeler (glikoz C6H12O6, etil alkol C2H5OH) elektrik akımını iletmez (elektrolit değildir).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Molecular solutes (glucose C6H12O6, ethyl alcohol C2H5OH) do not conduct electric current (are not electrolytes).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Molekulare gelöste Stoffe (Glucose C6H12O6, Ethylalkohol C2H5OH) leiten keinen elektrischen Strom (sind keine Elektrolyte).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les solutés moléculaires (glucose C6H12O6, alcool éthylique C2H5OH) ne conduisent pas le courant électrique (ne sont pas des électrolytes).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Молекулярные растворенные вещества (глюкоза C6H12O6, этиловый спирт C2H5OH) не проводят электрический ток (не являются электролитами).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المذابات الجزيئية (الجلوكوز C6H12O6، الكحول الإيثيلي C2H5OH) لا توصل التيار الكهربائي (ليست إلكتروليتات).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分子溶质（葡萄糖C6H12O6、乙醇C2H5OH）不导电（不是电解质）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkolên molekulî (glîkoz C6H12O6, alkola etîl C2H5OH) elektrîkê nagirin (elektrolît ne).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin14",
      "stem": {
        "tr": "Sıvı Çözeltiler ve Derişim Birimleri konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Liquid Solutions & Concentrations, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Flüssige Lösungen & Konzentrationen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Solutions Liquides & Concentrations, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Жидкие растворы и концентрации», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المحاليل السائلة والتركيز\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“溶液与浓度单位”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
          "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
          "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
          "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
          "ru": "Молярность – это количество молей растворенного вещества в 1 килограмме растворителя.",
          "ar": "المولارية هي عدد مولات المذاب في 1 كيلوجرام من المذيب.",
          "zh": "摩尔浓度是1千克溶剂中溶质的摩尔数。",
          "ku": "Molarity hejmara molên maddeya çareserkirî ye di 1 kîloya helwêstê de."
        },
        {
          "tr": "Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.",
          "en": "When calculating molarity, the solution density is divided by mass percentage.",
          "de": "Bei der Berechnung der Molarität wird die Lösungsdichte durch den Massenprozentsatz dividiert.",
          "fr": "Lors du calcul de la molarité, la densité de la solution est divisée par le pourcentage massique.",
          "ru": "При расчете молярности плотность раствора делят на массовые проценты.",
          "ar": "عند حساب المولارية، يتم تقسيم كثافة المحلول على النسبة المئوية للكتلة.",
          "zh": "计算摩尔浓度时，用溶液密度除以质量百分比。",
          "ku": "Dema ku molarity tê hesibandin, dendika çareseriyê bi rêjeya girseyî tê dabeş kirin."
        },
        {
          "tr": "Su eklendiğinde çözünenin mol sayısı yarıya iner.",
          "en": "When water is added, the number of moles of solute is halved.",
          "de": "Bei Zugabe von Wasser halbiert sich die Molzahl des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, le nombre de moles de soluté est réduit de moitié.",
          "ru": "При добавлении воды количество молей растворенного вещества уменьшается вдвое.",
          "ar": "عند إضافة الماء، ينخفض ​​عدد مولات المذاب إلى النصف.",
          "zh": "当添加水时，溶质的摩尔数减半。",
          "ku": "Dema ku av lê tê zêdekirin, hejmara molên maddeyê nîvî dibe."
        },
        {
          "tr": "0,2 M 500 mL NaCl çözeltisinde çözünmüş NaCl mol sayısı n = M * V = 0,2 * 0,5 = 0,1 moldür.",
          "en": "The number of moles of NaCl dissolved in 0.2 M 500 mL NaCl solution is n = M * V = 0.2 * 0.5 = 0.1 mol.",
          "de": "Die Anzahl der Mol NaCl, gelöst in 0,2 M 500 ml NaCl-Lösung, beträgt n = M * V = 0,2 * 0,5 = 0,1 Mol.",
          "fr": "Le nombre de moles de NaCl dissoutes dans une solution de NaCl 0,2 M dans 500 ml est n = M * V = 0,2 * 0,5 = 0,1 mol.",
          "ru": "Число молей NaCl, растворенного в 0,2 М растворе NaCl в 500 мл, равно n = M * V = 0,2 * 0,5 = 0,1 моль.",
          "ar": "عدد مولات NaCl المذابة في محلول NaCl 0.2 M 500 ml هو n = M * V = 0.2 * 0.5 = 0.1 mol.",
          "zh": "0.2 M 500 mL NaCl 溶液中溶解的 NaCl 摩尔数为 n = M * V = 0.2 * 0.5 = 0.1 mol。",
          "ku": "Hejmara molên NaCl yên ku di 0,2 M 500 mL çareseriya NaCl de têne hilweşandin n = M * V = 0,2 * 0,5 = 0,1 mol e."
        },
        {
          "tr": "Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.",
          "en": "Molality decreases as temperature increases due to volume expansion.",
          "de": "Die Molalität nimmt mit steigender Temperatur aufgrund der Volumenausdehnung ab.",
          "fr": "La molalité diminue à mesure que la température augmente en raison de l'expansion du volume.",
          "ru": "Моляльность уменьшается с увеличением температуры из-за объемного расширения.",
          "ar": "تتناقص المولالية مع زيادة درجة الحرارة بسبب توسع الحجم.",
          "zh": "由于体积膨胀，质量摩尔浓度随温度升高而降低。",
          "ku": "Her ku germahî zêde dibe ji ber berbelavbûna qebareyê molalîte kêm dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"0,2 M 500 mL NaCl çözeltisinde çözünmüş NaCl mol sayısı n = M * V = 0,2 * 0,5 = 0,1 moldür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The number of moles of NaCl dissolved in 0.2 M 500 mL NaCl solution is n = M * V = 0.2 * 0.5 = 0.1 mol.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Anzahl der Mol NaCl, gelöst in 0,2 M 500 ml NaCl-Lösung, beträgt n = M * V = 0,2 * 0,5 = 0,1 Mol.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le nombre de moles de NaCl dissoutes dans une solution de NaCl 0,2 M dans 500 ml est n = M * V = 0,2 * 0,5 = 0,1 mol.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Число молей NaCl, растворенного в 0,2 М растворе NaCl в 500 мл, равно n = M * V = 0,2 * 0,5 = 0,1 моль.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عدد مولات NaCl المذابة في محلول NaCl 0.2 M 500 ml هو n = M * V = 0.2 * 0.5 = 0.1 mol.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“0.2 M 500 mL NaCl 溶液中溶解的 NaCl 摩尔数为 n = M * V = 0.2 * 0.5 = 0.1 mol。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hejmara molên NaCl yên ku di 0,2 M 500 mL çareseriya NaCl de têne hilweşandin n = M * V = 0,2 * 0,5 = 0,1 mol e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Sıvı Çözeltiler ve Derişim Birimleri ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Liquid Solutions & Concentrations, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Flüssige Lösungen & Konzentrationen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Solutions Liquides & Concentrations, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Жидкие растворы и концентрации», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المحاليل السائلة والتركيز\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶液与浓度单位”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Molalite çözeltinin toplam hacmine bölünerek bulunur.",
          "en": "Molality is found by dividing by the total volume of the solution.",
          "de": "Die Molalität wird durch Division durch das Gesamtvolumen der Lösung ermittelt.",
          "fr": "La molalité se trouve en divisant par le volume total de la solution.",
          "ru": "Моляльность находится путем деления на общий объем раствора.",
          "ar": "يتم العثور على المولالية عن طريق القسمة على الحجم الكلي للحل.",
          "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
          "ku": "Molality bi dabeşkirina bi qebareya tevahî ya çareseriyê ve tê dîtin."
        },
        {
          "tr": "Çözeltiler karıştırıldığında hacimler asla toplanamaz.",
          "en": "Volumes can never be summed when solutions are mixed.",
          "de": "Volumina können niemals summiert werden, wenn Lösungen gemischt werden.",
          "fr": "Les volumes ne peuvent jamais être additionnés lorsque les solutions sont mélangées.",
          "ru": "Объемы никогда не суммируются при смешивании растворов.",
          "ar": "لا يمكن أبدًا جمع الأحجام عند خلط المحاليل.",
          "zh": "当溶液混合时，体积永远无法相加。",
          "ku": "Dema ku çareserî tevlihev bibin cild qet nayên berhev kirin."
        },
        {
          "tr": "Su buharlaştırıldığında çözünen madde kütlesi azalır.",
          "en": "When water is evaporated, the mass of solute decreases.",
          "de": "Wenn Wasser verdunstet, nimmt die Masse des gelösten Stoffes ab.",
          "fr": "Lorsque l’eau s’évapore, la masse de soluté diminue.",
          "ru": "При испарении воды масса растворенного вещества уменьшается.",
          "ar": "عندما يتبخر الماء، تقل كتلة المذاب.",
          "zh": "当水蒸发时，溶质的质量减少。",
          "ku": "Dema ku av tê hilmikandin, girseya maddeyê kêm dibe."
        },
        {
          "tr": "Doymamış çözeltiye su eklenirse doygun hale gelir.",
          "en": "If water is added to an unsaturated solution, it becomes saturated.",
          "de": "Fügt man einer ungesättigten Lösung Wasser hinzu, wird diese gesättigt.",
          "fr": "Si de l'eau est ajoutée à une solution insaturée, elle devient saturée.",
          "ru": "Если к ненасыщенному раствору добавить воду, он станет насыщенным.",
          "ar": "إذا أضيف الماء إلى محلول غير مشبع، يصبح مشبعا.",
          "zh": "如果将水添加到不饱和溶液中，它就会变成饱和溶液。",
          "ku": "Ger av li çaraleke têrnebûyî were zêdekirin, ew têr dibe."
        },
        {
          "tr": "Çözelti derişimi arttıkça birim hacimdeki çözünen tanecik sayısı artar.",
          "en": "As the solution concentration increases, the number of solute particles in the unit volume increases.",
          "de": "Mit zunehmender Lösungskonzentration nimmt die Anzahl der gelösten Partikel im Einheitsvolumen zu.",
          "fr": "À mesure que la concentration de la solution augmente, le nombre de particules de soluté dans l’unité de volume augmente.",
          "ru": "По мере увеличения концентрации раствора количество частиц растворенного вещества в единице объема увеличивается.",
          "ar": "مع زيادة تركيز المحلول، يزداد عدد جزيئات المذاب في وحدة الحجم.",
          "zh": "随着溶液浓度的增加，单位体积内溶质颗粒的数量增加。",
          "ku": "Her ku tansiyona soliyan zêde dibe, hejmara pariyên soletê yên di yekeya yekîneyê de zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Çözelti derişimi arttıkça birim hacimdeki çözünen tanecik sayısı artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the solution concentration increases, the number of solute particles in the unit volume increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Lösungskonzentration nimmt die Anzahl der gelösten Partikel im Einheitsvolumen zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la concentration de la solution augmente, le nombre de particules de soluté dans l’unité de volume augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «По мере увеличения концентрации раствора количество частиц растворенного вещества в единице объема увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مع زيادة تركيز المحلول، يزداد عدد جزيئات المذاب في وحدة الحجم.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着溶液浓度的增加，单位体积内溶质颗粒的数量增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku tansiyona soliyan zêde dibe, hejmara pariyên soletê yên di yekeya yekîneyê de zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u14-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Sıvı Çözeltiler ve Derişim Birimleri konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Liquid Solutions & Concentrations, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Flüssige Lösungen & Konzentrationen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Solutions Liquides & Concentrations, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Жидкие растворы и концентрации», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المحاليل السائلة والتركيز\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“溶液与浓度单位”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Şilavên Çareseriyê û Yekeyên Hêrbûnê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Hacimce yüzde derişim = (Çözünen Sıvı Hacmi / Çözelti Toplam Hacmi) x 100'dür (örn. 80° kolonya).",
          "en": "Percent concentration by volume = (Volume of Dissolved Liquid / Total Volume of Solution) x 100 (e.g. 80° cologne).",
          "de": "Prozentuale Konzentration nach Volumen = (Volumen der gelösten Flüssigkeit / Gesamtvolumen der Lösung) x 100 (z. B. 80° Cologne).",
          "fr": "Pourcentage de concentration en volume = (Volume de liquide dissous / Volume total de solution) x 100 (par exemple eau de Cologne à 80°).",
          "ru": "Процентная концентрация по объему = (объем растворенной жидкости / общий объем раствора) x 100 (например, одеколон 80°).",
          "ar": "نسبة التركيز بالحجم = (حجم السائل المذاب / الحجم الإجمالي للمحلول) × 100 (على سبيل المثال 80 درجة كولونيا).",
          "zh": "体积百分比浓度 =（溶解液体体积 / 溶液总体积）x 100（例如 80° 古龙水）。",
          "ku": "Ji sedî berhevdana ji hêla cildê = (Hejmara Hêviya Hilweşiyayî / Tevahiya Hêjmara Çareseriyê) x 100 (mînak 80° Koln)."
        },
        {
          "tr": "Mol kesri 1'den büyük değerler alabilir.",
          "en": "The mole fraction can take values ​​greater than 1.",
          "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
          "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
          "ru": "Мольная доля может принимать значения больше 1.",
          "ar": "يمكن أن يأخذ جزء المول قيمًا أكبر من 1.",
          "zh": "摩尔分数可以取大于1的值。",
          "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
        },
        {
          "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
          "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
          "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
          "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
          "ru": "Концентрация хлорид-ионов в 0,1 М растворе AlCl3 составляет 0,1 М.",
          "ar": "تركيز أيون الكلوريد في محلول 0.1 مولار AlCl3 هو 0.1 مولار.",
          "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
          "ku": "Di çareseriya 0,1 M AlCl3 de rêjeya îyona klorîdê 0,1 M e."
        },
        {
          "tr": "Ortak iyonların derişimi karıştırmadan etkilenmez.",
          "en": "The concentration of common ions is not affected by mixing.",
          "de": "Die Konzentration gemeinsamer Ionen wird durch das Mischen nicht beeinflusst.",
          "fr": "La concentration des ions communs n'est pas affectée par le mélange.",
          "ru": "Смешивание не влияет на концентрацию общих ионов.",
          "ar": "لا يتأثر تركيز الأيونات المشتركة بالخلط.",
          "zh": "共同离子的浓度不受混合的影响。",
          "ku": "Tevlihevkirina îyonên hevpar bi tevlihevkirinê bandor nabe."
        },
        {
          "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
          "en": "Sugar water conducts electricity very well because it contains free ions.",
          "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
          "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
          "ru": "Сахарная вода очень хорошо проводит электричество, поскольку содержит свободные ионы.",
          "ar": "يوصل الماء بالسكر الكهرباء بشكل جيد للغاية لأنه يحتوي على أيونات حرة.",
          "zh": "糖水导电性很好，因为它含有自由离子。",
          "ku": "Ava şekir elektrîkê pir baş derbas dike ji ber ku îyonên belaş dihewîne."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Hacimce yüzde derişim = (Çözünen Sıvı Hacmi / Çözelti Toplam Hacmi) x 100'dür (örn. 80° kolonya).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Percent concentration by volume = (Volume of Dissolved Liquid / Total Volume of Solution) x 100 (e.g. 80° cologne).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Prozentuale Konzentration nach Volumen = (Volumen der gelösten Flüssigkeit / Gesamtvolumen der Lösung) x 100 (z. B. 80° Cologne).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pourcentage de concentration en volume = (Volume de liquide dissous / Volume total de solution) x 100 (par exemple eau de Cologne à 80°).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Процентная концентрация по объему = (объем растворенной жидкости / общий объем раствора) x 100 (например, одеколон 80°).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نسبة التركيز بالحجم = (حجم السائل المذاب / الحجم الإجمالي للمحلول) × 100 (على سبيل المثال 80 درجة كولونيا).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“体积百分比浓度 =（溶解液体体积 / 溶液总体积）x 100（例如 80° 古龙水）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji sedî berhevdana ji hêla cildê = (Hejmara Hêviya Hilweşiyayî / Tevahiya Hêjmara Çareseriyê) x 100 (mînak 80° Koln).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit14;
