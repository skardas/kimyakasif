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
    "ru": "Жидкие растворы и способы выражения концентрации",
    "ar": "المحاليل السائلة ووحدات التركيز",
    "zh": "溶液与浓度单位",
    "ku": "Şilavên Çareseriyê û Yekeyên Hêrbûnê"
  },
  "subtitle": {
    "tr": "Molarite, Molalite, Mol Kesri ve Seyreltme",
    "en": "Molarity, Molality, Mole Fraction",
    "de": "Molarität, Molalität, Stoffmengenanteil und Verdünnung",
    "fr": "Molarité, molalité, fraction taupe et dilution",
    "ru": "Молярность, моляльность, мольная доля и разбавление",
    "ar": "المولارية والمولالية والكسر المولي والتخفيف",
    "zh": "物质的量浓度、质量摩尔浓度、物质的量分数与稀释",
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
        "ru": "Молярная концентрация (молярность, M) — число молей растворённого вещества в 1 л раствора (M = n / V_раствора(л)).",
        "ar": "المولارية (M) هي عدد مولات المادة المذابة في 1 L من المحلول (M = n / V_solution(L)).",
        "zh": "物质的量浓度(M)是每 1 L 溶液中所含溶质的物质的量(M = n / V溶液(L))。",
        "ku": "Molarîte (M) hejmara molên maddeya helbûyî ye di 1 lître çareseriyê de (M = n / V_çareserî(L))."
      },
      "trap": {
        "tr": "Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.",
        "en": "Molarity is the number of moles of solute in 1 kilogram of solvent.",
        "de": "Die Molarität ist die Anzahl der Mol gelöster Substanz in 1 Kilogramm Lösungsmittel.",
        "fr": "La molarité est le nombre de moles de soluté dans 1 kilogramme de solvant.",
        "ru": "Молярность — число молей растворённого вещества в 1 кг растворителя.",
        "ar": "المولارية هي عدد مولات المذاب في 1 kg من المذيب.",
        "zh": "物质的量浓度是每 1 kg 溶剂中所含溶质的物质的量。",
        "ku": "Molarîte hejmara molên çareserbûyî ye di 1 kîlogram çareserker de."
      },
      "whyTrapIsFalse": {
        "tr": "Bu tanım molaliteye aittir. Molaritede payda çözücü kütlesi değil, litre cinsinden çözeltinin toplam hacmidir.",
        "en": "That definition belongs to molality. In molarity the denominator is not the mass of solvent but the total volume of solution in litres.",
        "de": "Diese Definition gehört zur Molalität. Bei der Molarität steht im Nenner nicht die Masse des Lösungsmittels, sondern das Gesamtvolumen der Lösung in Litern.",
        "fr": "Cette définition est celle de la molalité. Pour la molarité, le dénominateur n'est pas la masse du solvant mais le volume total de la solution en litres.",
        "ru": "Это определение моляльности. В молярности в знаменателе стоит не масса растворителя, а общий объём раствора в литрах.",
        "ar": "هذا التعريف خاص بالمولالية. في المولارية لا يكون المقام كتلة المذيب بل الحجم الكلي للمحلول باللتر.",
        "zh": "这是质量摩尔浓度的定义。物质的量浓度的分母不是溶剂的质量，而是以升为单位的溶液总体积。",
        "ku": "Ev pênase ya molalîteyê ye. Di molarîteyê de li binê kesrê ne girseya çareserker, lê qebareya giştî ya çareseriyê bi lître heye."
      }
    },
    {
      "id": "u14-f02",
      "fact": {
        "tr": "Molalite (m), 1 kilogram (1000 g) çözücüde çözünmüş maddenin mol sayısıdır (m = n / kg_çözücü).",
        "en": "Molality (m) is the number of moles of solute dissolved in 1 kilogram (1000 g) of solvent (m = n / kg_solvent).",
        "de": "Molalität (m) ist die Anzahl der Mol gelöster Stoffe, die in 1 Kilogramm (1000 g) Lösungsmittel gelöst sind (m = n / kg_Lösungsmittel).",
        "fr": "La molalité (m) est le nombre de moles de soluté dissoutes dans 1 kilogramme (1 000 g) de solvant (m = n / kg_solvant).",
        "ru": "Моляльность (m) — число молей растворённого вещества в 1 кг (1000 г) растворителя (m = n / кг_растворителя).",
        "ar": "المولالية (m) هي عدد مولات المذاب في 1 kg (1000 g) من المذيب (m = n / kg_solvent).",
        "zh": "质量摩尔浓度(m)是每 1 kg(1000 g)溶剂中所含溶质的物质的量(m = n / kg溶剂)。",
        "ku": "Molalîte (m) hejmara molên çareserbûyî ye ku di 1 kîlogram (1000 g) çareserker de heliyane (m = n / kg_solvent)."
      },
      "trap": {
        "tr": "Molalite, çözünenin mol sayısının çözeltinin toplam hacmine bölünmesiyle bulunur.",
        "en": "Molality is found by dividing the moles of solute by the total volume of the solution.",
        "de": "Die Molalität erhält man, indem man die Stoffmenge des gelösten Stoffes durch das Gesamtvolumen der Lösung teilt.",
        "fr": "La molalité s'obtient en divisant le nombre de moles de soluté par le volume total de la solution.",
        "ru": "Моляльность находят делением числа молей растворённого вещества на общий объём раствора.",
        "ar": "تُحسب المولالية بقسمة عدد مولات المذاب على الحجم الكلي للمحلول.",
        "zh": "质量摩尔浓度是用溶质的物质的量除以溶液的总体积求得的。",
        "ku": "Molalîte bi dabeşkirina hejmara molên çareserbûyî li ser qebareya giştî ya çareseriyê tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Mol sayısını çözelti hacmine bölmek molariteyi verir. Molalitede mol sayısı hacme değil, kilogram cinsinden yalnızca çözücünün kütlesine bölünür.",
        "en": "Dividing the moles by the solution volume gives molarity. In molality the moles are divided not by a volume but by the mass of the solvent alone, in kilograms.",
        "de": "Teilt man die Stoffmenge durch das Lösungsvolumen, erhält man die Molarität. Bei der Molalität wird nicht durch ein Volumen, sondern nur durch die Masse des Lösungsmittels in Kilogramm geteilt.",
        "fr": "Diviser le nombre de moles par le volume de solution donne la molarité. Pour la molalité, on divise non par un volume mais par la seule masse du solvant, en kilogrammes.",
        "ru": "Деление числа молей на объём раствора даёт молярность. В моляльности число молей делят не на объём, а только на массу растворителя в килограммах.",
        "ar": "قسمة عدد المولات على حجم المحلول تعطي المولارية. أما في المولالية فيُقسم عدد المولات لا على الحجم بل على كتلة المذيب وحده بالكيلوغرام.",
        "zh": "用物质的量除以溶液体积得到的是物质的量浓度。质量摩尔浓度是用物质的量除以溶剂本身的质量（千克），而不是除以体积。",
        "ku": "Dabeşkirina hejmara molan li ser qebareya çareseriyê molarîteyê dide. Di molalîteyê de hejmara molan ne li ser qebareyê, lê tenê li ser girseya çareserker bi kîlogram tê dabeşkirin."
      }
    },
    {
      "id": "u14-f03",
      "fact": {
        "tr": "Mol kesri (X), bir bileşenin mol sayısının toplam mol sayısına oranıdır (XA = nA / ntoplam); bir çözeltideki tüm bileşenlerin mol kesirleri toplamı 1'dir.",
        "en": "Mole fraction (X) is the ratio of the moles of a component to the total moles (XA = nA / ntotal); the mole fractions of all components of a solution add up to 1.",
        "de": "Der Stoffmengenanteil (X) ist das Verhältnis der Stoffmenge einer Komponente zur Gesamtstoffmenge (XA = nA / ngesamt); die Stoffmengenanteile aller Komponenten einer Lösung ergeben zusammen 1.",
        "fr": "La fraction molaire (X) est le rapport du nombre de moles d'un constituant au nombre total de moles (XA = nA / ntotal) ; la somme des fractions molaires de tous les constituants d'une solution vaut 1.",
        "ru": "Мольная доля (X) — отношение числа молей компонента к общему числу молей (XA = nA / nобщ); сумма мольных долей всех компонентов раствора равна 1.",
        "ar": "الكسر المولي (X) هو نسبة عدد مولات أحد المكونات إلى العدد الكلي للمولات (XA = nA / ntotal)؛ ومجموع الكسور المولية لجميع مكونات المحلول يساوي 1.",
        "zh": "物质的量分数(X)是某一组分的物质的量与总物质的量之比(XA = nA / n总)；溶液中所有组分的物质的量分数之和为1。",
        "ku": "Parçeya molê (X) rêjeya hejmara molên pêkhênerekê bi hejmara giştî ya molan re ye (XA = nA / ntotal); koma parçeyên molê yên hemû pêkhênerên çareseriyekê 1 e."
      },
      "trap": {
        "tr": "Mol kesri 1'den büyük değerler alabilir.",
        "en": "The mole fraction can take values greater than 1.",
        "de": "Der Stoffmengenanteil kann Werte größer als 1 annehmen.",
        "fr": "La fraction molaire peut prendre des valeurs supérieures à 1.",
        "ru": "Мольная доля может принимать значения больше 1.",
        "ar": "يمكن أن يأخذ الكسر المولي قيمًا أكبر من 1.",
        "zh": "物质的量分数可以大于1。",
        "ku": "Parçeya molê dikare ji 1-ê mezintir nirxan bigire."
      },
      "whyTrapIsFalse": {
        "tr": "Bir bileşenin mol sayısı karışımın toplam mol sayısından büyük olamaz. Bu yüzden mol kesri 0 ile 1 arasında kalır ve tüm bileşenlerin mol kesirleri toplamı 1'dir.",
        "en": "The moles of one component can never exceed the total moles of the mixture. So a mole fraction stays between 0 and 1, and the mole fractions of all components add up to 1.",
        "de": "Die Stoffmenge einer Komponente kann nie größer sein als die Gesamtstoffmenge des Gemisches. Deshalb liegt ein Stoffmengenanteil zwischen 0 und 1, und die Anteile aller Komponenten ergeben zusammen 1.",
        "fr": "Le nombre de moles d'un constituant ne peut jamais dépasser le nombre total de moles du mélange. La fraction molaire reste donc entre 0 et 1, et la somme des fractions molaires de tous les constituants vaut 1.",
        "ru": "Число молей одного компонента не может превышать общее число молей смеси. Поэтому мольная доля лежит между 0 и 1, а сумма мольных долей всех компонентов равна 1.",
        "ar": "لا يمكن أن يزيد عدد مولات مكوّن واحد على العدد الكلي لمولات المخلوط. لذلك يبقى الكسر المولي بين 0 و1، ومجموع الكسور المولية لجميع المكونات يساوي 1.",
        "zh": "某一组分的物质的量不可能超过混合物的总物质的量，因此物质的量分数总在0到1之间，所有组分的物质的量分数之和为1。",
        "ku": "Hejmara molan a pêkhateyekê nikare ji hejmara giştî ya molan a tevlîheviyê mezintir be. Ji ber vê yekê kesra molî di navbera 0 û 1 de dimîne û berhevoka kesrên molî yên hemû pêkhateyan 1 e."
      }
    },
    {
      "id": "u14-f04",
      "fact": {
        "tr": "Özkütle ve kütlece yüzde bilindiğinde molarite: M = (%C * d * 10) / MA formülüyle hesaplanır.",
        "en": "When the density and mass percentage are known, molarity is calculated with the formula: M = (%C * d * 10) / MA.",
        "de": "Wenn die Dichte und der Massenanteil bekannt sind, wird die Molarität mit der Formel berechnet: M = (%C * d * 10) / MA.",
        "fr": "Lorsque la densité et le pourcentage massique sont connus, la molarité est calculée avec la formule : M = (%C * d * 10) / MA.",
        "ru": "Если известны плотность раствора и массовая доля растворённого вещества (в %), молярность вычисляют по формуле M = (%C * d * 10) / MA.",
        "ar": "إذا عُلمت الكثافة والنسبة المئوية الكتلية تُحسب المولارية بالعلاقة: M = (%C * d * 10) / MA.",
        "zh": "已知密度和质量分数时，物质的量浓度可用公式 M = (%C * d * 10) / MA 计算。",
        "ku": "Dema ku tîrbûn û ji sedî bi girseyî tên zanîn, molarîte bi vê formulê tê hesibandin: M = (%C * d * 10) / MA."
      },
      "trap": {
        "tr": "Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.",
        "en": "When calculating molarity, the solution density is divided by mass percentage.",
        "de": "Bei der Berechnung der Molarität wird die Lösungsdichte durch den Massenprozentsatz dividiert.",
        "fr": "Lors du calcul de la molarité, la densité de la solution est divisée par le pourcentage massique.",
        "ru": "При расчёте молярности плотность раствора делят на массовую долю (%).",
        "ar": "عند حساب المولارية تُقسم كثافة المحلول على النسبة المئوية الكتلية.",
        "zh": "计算物质的量浓度时，用溶液密度除以质量分数。",
        "ku": "Dema molarîte tê hesibandin, tîrbûna çareseriyê li ser ji sedî bi girseyî tê dabeşkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Özkütle ile kütlece yüzde birbirine bölünmez, çarpılır: 1000·d bir litre çözeltinin kütlesini, bunun %C'si çözünen kütlesini (10·d·%C) verir; bu kütle MA'ya bölünerek mol/L bulunur.",
        "en": "Density and mass percentage are multiplied, not divided: 1000·d is the mass of one litre of solution, %C of it is the solute mass (10·d·%C), and dividing this mass by the molar mass gives mol/L.",
        "de": "Dichte und Massenanteil werden multipliziert, nicht dividiert: 1000·d ist die Masse eines Liters Lösung, %C davon ist die Masse des gelösten Stoffes (10·d·%C), und diese Masse geteilt durch die molare Masse ergibt mol/L.",
        "fr": "La masse volumique et le pourcentage massique se multiplient, ils ne se divisent pas : 1000·d est la masse d'un litre de solution, %C de cette masse est la masse de soluté (10·d·%C), et cette masse divisée par la masse molaire donne des mol/L.",
        "ru": "Плотность и массовую долю не делят друг на друга, а перемножают: 1000·d — масса одного литра раствора, %C от неё — масса растворённого вещества (10·d·%C); разделив эту массу на молярную массу (MA), получают моль/л.",
        "ar": "لا تُقسم الكثافة على النسبة المئوية الكتلية بل تُضرب فيها: 1000·d هي كتلة لتر من المحلول، و%C منها هي كتلة المذاب (10·d·%C)، وقسمة هذه الكتلة على الكتلة المولية تعطي mol/L.",
        "zh": "密度与质量分数应相乘而不是相除：1000·d 是1升溶液的质量，其中 %C 部分是溶质质量(10·d·%C)，再除以摩尔质量即得 mol/L。",
        "ku": "Tîrbûn û ji sedî bi girseyî li hev nayên dabeşkirin, tên pirjimarkirin: 1000·d girseya lîtreyek çareseriyê ye, %C ya wê girseya çareserbûyî ye (10·d·%C), û dabeşkirina vê girseyê li ser girseya molî mol/L dide."
      }
    },
    {
      "id": "u14-f05",
      "fact": {
        "tr": "Aynı çözünenin çözeltileri karıştırıldığında M1V1 + M2V2 + ... = M_son * V_toplam yazılır (seyreltik sulu çözeltilerde hacimlerin toplanabildiği kabul edilir).",
        "en": "When solutions of the same solute are mixed, M1V1 + M2V2 + ... = M_final * V_total is written (for dilute aqueous solutions the volumes are assumed to be additive).",
        "de": "Beim Mischen von Lösungen desselben gelösten Stoffes gilt M1V1 + M2V2 + ... = M_End * V_gesamt (bei verdünnten wässrigen Lösungen nimmt man an, dass sich die Volumina addieren).",
        "fr": "Lorsqu'on mélange des solutions d'un même soluté, on écrit M1V1 + M2V2 + ... = M_finale * V_total (pour des solutions aqueuses diluées, on admet que les volumes s'additionnent).",
        "ru": "При смешивании растворов одного и того же вещества записывают M1V1 + M2V2 + ... = M_кон * V_общ (для разбавленных водных растворов объёмы считают аддитивными).",
        "ar": "عند خلط محاليل للمذاب نفسه نكتب M1V1 + M2V2 + ... = M_final * V_total (في المحاليل المائية المخففة يُفترض أن الحجوم تُجمع).",
        "zh": "将同一溶质的几种溶液混合时，有 M1V1 + M2V2 + ... = M终 * V总（对于稀的水溶液，近似认为体积可以相加）。",
        "ku": "Dema ku çareseriyên heman çareserbûyî tên tevlihevkirin, M1V1 + M2V2 + ... = M_dawî * V_giştî tê nivîsandin (di çareseriyên avî yên sist de tê qebûlkirin ku qebare li hev zêde dibin)."
      },
      "trap": {
        "tr": "Farklı hacimlerdeki iki çözelti karıştırıldığında son molarite, iki molaritenin aritmetik ortalamasıdır.",
        "en": "When two solutions of different volumes are mixed, the final molarity is the arithmetic mean of the two molarities.",
        "de": "Mischt man zwei Lösungen unterschiedlichen Volumens, ist die Endmolarität das arithmetische Mittel der beiden Molaritäten.",
        "fr": "Lorsqu'on mélange deux solutions de volumes différents, la molarité finale est la moyenne arithmétique des deux molarités.",
        "ru": "При смешивании двух растворов разного объёма конечная молярность равна среднему арифметическому двух молярностей.",
        "ar": "عند خلط محلولين مختلفين في الحجم تكون المولارية النهائية هي المتوسط الحسابي للمولاريتين.",
        "zh": "将两种体积不同的溶液混合时，最终的物质的量浓度等于两个浓度的算术平均值。",
        "ku": "Dema ku du çareseriyên bi qebareyên cuda tên tevlihevkirin, molarîteya dawî navîniya hejmarî ya her du molarîteyan e."
      },
      "whyTrapIsFalse": {
        "tr": "Aritmetik ortalama yalnızca eşit hacimler karıştırıldığında doğru sonuç verir. Genel durumda her çözeltinin mol sayısı (M·V) hesaplanır ve toplam mol toplam hacme bölünür.",
        "en": "The arithmetic mean is correct only when equal volumes are mixed. In general the moles of each solution (M·V) are calculated and the total moles are divided by the total volume.",
        "de": "Das arithmetische Mittel stimmt nur, wenn gleiche Volumina gemischt werden. Allgemein berechnet man die Stoffmenge jeder Lösung (M·V) und teilt die Gesamtstoffmenge durch das Gesamtvolumen.",
        "fr": "La moyenne arithmétique n'est juste que si l'on mélange des volumes égaux. En général, on calcule les moles de chaque solution (M·V) puis on divise le total des moles par le volume total.",
        "ru": "Среднее арифметическое верно только при смешивании равных объёмов. В общем случае находят число молей в каждом растворе (M·V) и делят сумму молей на общий объём.",
        "ar": "المتوسط الحسابي صحيح فقط عند خلط حجوم متساوية. في الحالة العامة يُحسب عدد مولات كل محلول (M·V) ثم يُقسم مجموع المولات على الحجم الكلي.",
        "zh": "只有混合等体积溶液时算术平均值才正确。一般情况下应先求出每种溶液中溶质的物质的量(M·V)，再用总物质的量除以总体积。",
        "ku": "Navîniya hejmarî tenê dema ku qebareyên wekhev tên tevlihevkirin rast e. Bi giştî hejmara molan a her çareseriyê (M·V) tê hesabkirin û hejmara giştî ya molan li ser qebareya giştî tê dabeşkirin."
      }
    },
    {
      "id": "u14-f06",
      "fact": {
        "tr": "İyonik katı suda çözündüğünde çözeltideki iyon derişimi tuzun molaritesi ile iyon katsayısının çarpımıdır.",
        "en": "When an ionic solid is dissolved in water, the ion concentration in the solution is the product of the molarity of the salt and the ionic coefficient.",
        "de": "Wenn ein ionischer Feststoff in Wasser gelöst wird, ist die Ionenkonzentration in der Lösung das Produkt aus der Molarität des Salzes und dem Ionenkoeffizienten.",
        "fr": "Lorsqu'un solide ionique est dissous dans l'eau, la concentration en ions dans la solution est le produit de la molarité du sel et du coefficient ionique.",
        "ru": "При растворении ионного твёрдого вещества в воде концентрация каждого иона равна молярности соли, умноженной на число этих ионов в формуле.",
        "ar": "عندما تذوب مادة صلبة أيونية في الماء يكون تركيز الأيون في المحلول حاصل ضرب مولارية الملح في معامل ذلك الأيون.",
        "zh": "离子化合物溶于水后，溶液中某种离子的浓度等于盐的物质的量浓度乘以化学式中该离子的个数。",
        "ku": "Dema hişkeke îyonî di avê de dihele, hûrbûna îyonekê di çareseriyê de bi qasî hilbera molarîteya xwêyê û hejmara wê îyonê ya di formulê de ye."
      },
      "trap": {
        "tr": "0,1 M AlCl3 çözeltisinde klor iyonu derişimi 0,1 M'dır.",
        "en": "The chloride ion concentration in 0.1 M AlCl3 solution is 0.1 M.",
        "de": "Die Chloridionenkonzentration in 0,1 M AlCl3-Lösung beträgt 0,1 M.",
        "fr": "La concentration en ions chlorure dans une solution 0,1 M d’AlCl3 est de 0,1 M.",
        "ru": "В 0,1 M растворе AlCl3 концентрация хлорид-ионов равна 0,1 M.",
        "ar": "في محلول AlCl3 تركيزه 0.1 M يكون تركيز أيون الكلوريد 0.1 M.",
        "zh": "0.1 M AlCl3 溶液中的氯离子浓度为 0.1 M。",
        "ku": "Di çareseriya 0,1 M AlCl3 de hûrbûna îyona klorîdê 0,1 M e."
      },
      "whyTrapIsFalse": {
        "tr": "Bir AlCl3 birimi çözündüğünde bir Al3+ ve üç Cl- iyonu verir. Tuz derişimini iyon katsayısıyla çarpmayı unutmak [Cl-] değerini üç kat küçük bulmak demektir.",
        "en": "Each AlCl3 unit releases one Al3+ and three Cl- ions when it dissolves. Forgetting to multiply the salt concentration by the ion coefficient makes [Cl-] three times too small.",
        "de": "Jede AlCl3-Einheit liefert beim Lösen ein Al3+ und drei Cl--Ionen. Wer vergisst, die Salzkonzentration mit dem Ionenkoeffizienten zu multiplizieren, erhält [Cl-] dreimal zu klein.",
        "fr": "Chaque unité AlCl3 libère en se dissolvant un ion Al3+ et trois ions Cl-. Oublier de multiplier la concentration du sel par le coefficient de l'ion donne une valeur de [Cl-] trois fois trop petite.",
        "ru": "Каждая формульная единица AlCl3 при растворении даёт один ион Al3+ и три иона Cl-. Если забыть умножить концентрацию соли на число ионов, значение [Cl-] получится втрое меньше.",
        "ar": "كل وحدة AlCl3 تعطي عند ذوبانها أيون Al3+ واحدًا وثلاثة أيونات Cl-. ونسيان ضرب تركيز الملح في معامل الأيون يعطي لـ [Cl-] قيمة تساوي ثلث قيمتها الصحيحة.",
        "zh": "1 个 AlCl3 溶解时产生 1 个 Al3+ 和 3 个 Cl-。忘记把盐的浓度乘以离子个数，求得的 [Cl-] 就只有实际值的三分之一。",
        "ku": "Her yekeya AlCl3 dema ku dihele îyonek Al3+ û sê îyonên Cl- dide. Jibîrkirina pirjimarkirina hûrbûna xwê bi rêjeya îyonê [Cl-] sê caran biçûktir dide."
      },
      "osymTip": {
        "tr": "0,1 M AlCl3'te [Cl-] = 3 * 0,1 = 0,3 M'dır!",
        "en": "In 0.1 M AlCl3, [Cl-] = 3 * 0.1 = 0.3 M!",
        "de": "In 0,1 M AlCl3 ist [Cl-] = 3 * 0,1 = 0,3 M!",
        "fr": "Dans 0,1 M AlCl3, [Cl-] = 3 * 0,1 = 0,3 M !",
        "ru": "В 0,1 M AlCl3 [Cl-] = 3 * 0,1 = 0,3 M!",
        "ar": "في محلول AlCl3 تركيزه 0.1 M يكون [Cl-] = 3 * 0.1 = 0.3 M!",
        "zh": "0.1 M AlCl3 溶液中，[Cl-] = 3 * 0.1 = 0.3 M！",
        "ku": "Di 0,1 M AlCl3 de [Cl-] = 3 * 0,1 = 0,3 M e!"
      }
    },
    {
      "id": "u14-f07",
      "fact": {
        "tr": "Çözeltiye saf su eklendiğinde (seyreltme) çözünenin mol sayısı değişmez; formül M1V1 = M2V2'dir.",
        "en": "When pure water is added to the solution (dilution), the number of moles of solute does not change; The formula is M1V1 = M2V2.",
        "de": "Wenn der Lösung reines Wasser zugesetzt wird (Verdünnung), ändert sich die Molzahl des gelösten Stoffes nicht; Die Formel lautet M1V1 = M2V2.",
        "fr": "Lorsque de l’eau pure est ajoutée à la solution (dilution), le nombre de moles de soluté ne change pas ; La formule est M1V1 = M2V2.",
        "ru": "При добавлении к раствору чистой воды (разбавлении) число молей растворённого вещества не меняется: M1V1 = M2V2.",
        "ar": "عند إضافة الماء النقي إلى المحلول (التخفيف) لا يتغير عدد مولات المذاب؛ والعلاقة هي M1V1 = M2V2.",
        "zh": "向溶液中加入纯水（稀释）时，溶质的物质的量不变；公式为 M1V1 = M2V2。",
        "ku": "Dema ku ava paqij li çareseriyê tê zêdekirin (sivikkirin), hejmara molên çareserbûyî naguhere; formul M1V1 = M2V2 ye."
      },
      "trap": {
        "tr": "Su eklendiğinde çözünenin mol sayısı yarıya iner.",
        "en": "When water is added, the number of moles of solute is halved.",
        "de": "Bei Zugabe von Wasser halbiert sich die Molzahl des gelösten Stoffes.",
        "fr": "Lorsque de l’eau est ajoutée, le nombre de moles de soluté est réduit de moitié.",
        "ru": "При добавлении воды число молей растворённого вещества уменьшается вдвое.",
        "ar": "عند إضافة الماء، ينخفض عدد مولات المذاب إلى النصف.",
        "zh": "加水后，溶质的物质的量减半。",
        "ku": "Dema av lê tê zêdekirin, hejmara molên çareserbûyî nîvî dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Su eklemek yalnızca çözücü miktarını ve hacmi artırır. Çözünen eklenmediği veya uzaklaştırılmadığı için mol sayısı sabit kalır; azalan, derişimdir.",
        "en": "Adding water only increases the amount of solvent and the volume. Since no solute is added or removed, the number of moles stays the same; what decreases is the concentration.",
        "de": "Zugabe von Wasser erhöht nur die Lösungsmittelmenge und das Volumen. Da kein gelöster Stoff hinzukommt oder entfernt wird, bleibt die Stoffmenge gleich; sinkt nur die Konzentration.",
        "fr": "Ajouter de l'eau augmente seulement la quantité de solvant et le volume. Comme aucun soluté n'est ajouté ni retiré, le nombre de moles reste le même ; c'est la concentration qui diminue.",
        "ru": "Добавление воды увеличивает только количество растворителя и объём раствора. Растворённое вещество не добавляют и не удаляют, поэтому число его молей не меняется; уменьшается концентрация.",
        "ar": "إضافة الماء تزيد كمية المذيب والحجم فقط. وبما أنه لا يُضاف مذاب ولا يُزال، يبقى عدد المولات ثابتًا؛ والذي يقل هو التركيز.",
        "zh": "加水只增加溶剂的量和溶液体积。溶质既没有加入也没有移走，所以其物质的量不变，降低的是浓度。",
        "ku": "Zêdekirina avê tenê mîqdara çareserker û qebareyê zêde dike. Ji ber ku çareserbûyî nayê zêdekirin an derxistin, hejmara molan wek xwe dimîne; ya ku kêm dibe hûrbûn e."
      }
    },
    {
      "id": "u14-f08",
      "fact": {
        "tr": "Çözeltiden çökme olmadan su buharlaştırılırsa (deriştirme) molarite artar.",
        "en": "If water is evaporated from solution without precipitating (concentration), molarity increases.",
        "de": "Wenn Wasser aus der Lösung verdampft wird, ohne dass es zur Ausfällung kommt (Konzentration), erhöht sich die Molarität.",
        "fr": "Si l'eau s'évapore de la solution sans précipiter (concentration), la molarité augmente.",
        "ru": "Если выпаривать воду из раствора так, чтобы осадок не выпадал (концентрирование), молярность увеличивается.",
        "ar": "إذا بُخّر الماء من المحلول دون حدوث ترسب (زيادة التركيز)، تزداد المولارية.",
        "zh": "在没有晶体析出的情况下蒸发溶液中的水（浓缩），物质的量浓度增大。",
        "ku": "Ger av ji çareseriyê bêyî niştinê were hilmkirin (tîrkirin), molarîte zêde dibe."
      },
      "trap": {
        "tr": "Su buharlaştırıldığında çözünen madde kütlesi azalır.",
        "en": "When water is evaporated, the mass of solute decreases.",
        "de": "Wenn Wasser verdunstet, nimmt die Masse des gelösten Stoffes ab.",
        "fr": "Lorsque l’eau s’évapore, la masse de soluté diminue.",
        "ru": "При испарении воды масса растворённого вещества уменьшается.",
        "ar": "عندما يتبخر الماء، تقل كتلة المذاب.",
        "zh": "蒸发水时，溶质的质量减少。",
        "ku": "Dema av tê hilmkirin, girseya maddeya çareserbûyî kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Buharlaşan yalnızca sudur; çökme olmadığı sürece çözünen kütlesi değişmez. Hacim azaldığı için değişen, derişimin artmasıdır.",
        "en": "Only the water evaporates; as long as nothing precipitates, the mass of solute does not change. Because the volume decreases, what changes is that the concentration rises.",
        "de": "Nur das Wasser verdampft; solange nichts ausfällt, bleibt die Masse des gelösten Stoffes gleich. Weil das Volumen abnimmt, steigt lediglich die Konzentration.",
        "fr": "Seule l'eau s'évapore ; tant qu'il n'y a pas de précipitation, la masse de soluté ne change pas. Comme le volume diminue, c'est la concentration qui augmente.",
        "ru": "Испаряется только вода; пока осадок не выпадает, масса растворённого вещества не меняется. Объём уменьшается, поэтому меняется лишь концентрация — она растёт.",
        "ar": "الذي يتبخر هو الماء فقط؛ وما دام لا يحدث ترسب فإن كتلة المذاب لا تتغير. وبما أن الحجم يقل فالذي يتغير هو أن التركيز يزداد.",
        "zh": "蒸发掉的只是水；只要没有晶体析出，溶质的质量就不变。体积减小，因而变化的是浓度增大。",
        "ku": "Tenê av dibe hilm; heta ku tiştek neniştibe, girseya çareserbûyî naguhere. Ji ber ku qebare kêm dibe, ya ku diguhere zêdebûna hûrbûnê ye."
      }
    },
    {
      "id": "u14-f09",
      "fact": {
        "tr": "Aralarında tepkime olmayan, ortak iyon içeren çözeltiler karıştırıldığında ortak iyonun toplam mol sayısı toplam hacme bölünerek yeni derişimi bulunur.",
        "en": "When solutions that share a common ion and do not react with each other are mixed, the new concentration of the common ion is found by dividing its total moles by the total volume.",
        "de": "Werden Lösungen mit einem gemeinsamen Ion gemischt, die nicht miteinander reagieren, erhält man die neue Konzentration des gemeinsamen Ions, indem man seine gesamte Stoffmenge durch das Gesamtvolumen teilt.",
        "fr": "Lorsqu'on mélange des solutions qui contiennent un ion commun et ne réagissent pas entre elles, la nouvelle concentration de l'ion commun s'obtient en divisant son nombre total de moles par le volume total.",
        "ru": "При смешивании не реагирующих между собой растворов с одноимённым ионом новую концентрацию этого иона находят, разделив общее число его молей на общий объём.",
        "ar": "عند خلط محاليل تحتوي على أيون مشترك ولا تتفاعل فيما بينها، يُحسب التركيز الجديد للأيون المشترك بقسمة مجموع مولاته على الحجم الكلي.",
        "zh": "把含有共同离子且彼此不反应的溶液混合时，用该共同离子的总物质的量除以总体积，即得其新浓度。",
        "ku": "Dema çareseriyên ku îyoneke hevpar tê de ye û bi hev re reaksiyonê nakin tên tevlihevkirin, hûrbûna nû ya îyona hevpar bi dabeşkirina hejmara giştî ya molên wê li ser qebareya giştî tê dîtin."
      },
      "trap": {
        "tr": "Ortak iyon içeren iki çözelti karıştırıldığında ortak iyonun son derişimi, iki çözeltideki derişimlerinin toplamına eşittir.",
        "en": "When two solutions containing a common ion are mixed, the final concentration of the common ion equals the sum of its concentrations in the two solutions.",
        "de": "Werden zwei Lösungen mit einem gemeinsamen Ion gemischt, ist die Endkonzentration des gemeinsamen Ions gleich der Summe seiner Konzentrationen in den beiden Lösungen.",
        "fr": "Lorsqu'on mélange deux solutions contenant un ion commun, la concentration finale de l'ion commun est égale à la somme de ses concentrations dans les deux solutions.",
        "ru": "При смешивании двух растворов с одноимённым ионом конечная концентрация этого иона равна сумме его концентраций в исходных растворах.",
        "ar": "عند خلط محلولين يحتويان على أيون مشترك، يساوي التركيز النهائي للأيون المشترك مجموع تركيزيه في المحلولين.",
        "zh": "把两种含有共同离子的溶液混合时，该共同离子的最终浓度等于它在两种溶液中的浓度之和。",
        "ku": "Dema du çareseriyên ku îyoneke hevpar tê de ye tên tevlihevkirin, hûrbûna dawî ya îyona hevpar bi qasî koma hûrbûnên wê yên di her du çareseriyan de ye."
      },
      "whyTrapIsFalse": {
        "tr": "Toplanan derişimler değil, mol sayılarıdır; karıştırmada hacim de büyür. Yeni derişim toplam mol / toplam hacim ile bulunur ve iki başlangıç derişiminin toplamı değil, hacimlere göre ağırlıklı ortalamasıdır.",
        "en": "It is the moles that add up, not the concentrations; on mixing the volume grows too. The new concentration is total moles / total volume, which is not the sum of the two starting concentrations but their volume-weighted average.",
        "de": "Addiert werden die Stoffmengen, nicht die Konzentrationen; beim Mischen wächst auch das Volumen. Die neue Konzentration ist Gesamtstoffmenge / Gesamtvolumen, also nicht die Summe der beiden Ausgangskonzentrationen, sondern ihr volumengewichteter Mittelwert.",
        "fr": "Ce sont les moles qui s'additionnent, pas les concentrations ; lors du mélange, le volume augmente aussi. La nouvelle concentration vaut moles totales / volume total : ce n'est pas la somme des deux concentrations initiales mais leur moyenne pondérée par les volumes.",
        "ru": "Складывают не концентрации, а числа молей; при смешивании растёт и объём. Новая концентрация равна общему числу молей, делённому на общий объём, — это не сумма двух исходных концентраций, а их средневзвешенное по объёмам значение.",
        "ar": "الذي يُجمع هو المولات لا التراكيز؛ وعند الخلط يكبر الحجم أيضًا. التركيز الجديد يساوي مجموع المولات / الحجم الكلي، فهو ليس مجموع التركيزين الابتدائيين بل متوسطهما المرجّح بالحجوم.",
        "zh": "相加的是物质的量，而不是浓度；混合时体积也随之增大。新浓度 = 总物质的量 / 总体积，它不是两个初始浓度之和，而是二者按体积加权的平均值。",
        "ku": "Yên ku li hev tên zêdekirin hejmarên molan in, ne hûrbûn; di tevlihevkirinê de qebare jî mezin dibe. Hûrbûna nû hejmara giştî ya molan / qebareya giştî ye; ew ne koma her du hûrbûnên destpêkê ye, lê navîniya wan a li gorî qebareyan giranîkirî ye."
      }
    },
    {
      "id": "u14-f10",
      "fact": {
        "tr": "Sıcaklık arttıkça sıvı çözeltilerin hacmi genleştiğinden molarite bir miktar azalır; molalite ise sıcaklıkla değişmez.",
        "en": "As the temperature increases, the molarity decreases slightly as the volume of liquid solutions expands; Molality does not change with temperature.",
        "de": "Mit steigender Temperatur nimmt die Molarität leicht ab, da sich das Volumen flüssiger Lösungen ausdehnt; Die Molalität ändert sich nicht mit der Temperatur.",
        "fr": "À mesure que la température augmente, la molarité diminue légèrement à mesure que le volume des solutions liquides augmente ; La molalité ne change pas avec la température.",
        "ru": "С повышением температуры жидкие растворы расширяются, поэтому молярность немного уменьшается; моляльность от температуры не зависит.",
        "ar": "بارتفاع درجة الحرارة يتمدد حجم المحاليل السائلة فتنخفض المولارية قليلًا؛ أما المولالية فلا تتغير بتغير درجة الحرارة.",
        "zh": "温度升高时液态溶液的体积膨胀，物质的量浓度略有减小；质量摩尔浓度则不随温度变化。",
        "ku": "Her ku germahî zêde dibe, ji ber ku qebareya çareseriyên şil fireh dibe molarîte hinekî kêm dibe; molalîte bi germahiyê naguhere."
      },
      "trap": {
        "tr": "Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.",
        "en": "Molality decreases as temperature increases due to volume expansion.",
        "de": "Die Molalität nimmt mit steigender Temperatur aufgrund der Volumenausdehnung ab.",
        "fr": "La molalité diminue à mesure que la température augmente en raison de l'expansion du volume.",
        "ru": "С повышением температуры моляльность уменьшается из-за теплового расширения раствора.",
        "ar": "تتناقص المولالية بارتفاع درجة الحرارة بسبب تمدد الحجم.",
        "zh": "质量摩尔浓度随温度升高而减小，因为溶液体积膨胀。",
        "ku": "Her ku germahî zêde dibe ji ber berbelavbûna qebareyê molalîte kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Molalitenin tanımında hacim yoktur; mol sayısı ve çözücü kütlesi ısınmayla değişmediği için molalite sabit kalır. Hacim genleşmesinden etkilenen molaritedir.",
        "en": "Volume does not appear in the definition of molality; the moles and the solvent mass do not change on heating, so molality stays constant. It is molarity that is affected by volume expansion.",
        "de": "Im Ausdruck der Molalität kommt kein Volumen vor; Stoffmenge und Lösungsmittelmasse ändern sich beim Erwärmen nicht, daher bleibt die Molalität konstant. Von der Volumenausdehnung betroffen ist die Molarität.",
        "fr": "Le volume n'intervient pas dans la définition de la molalité ; le nombre de moles et la masse de solvant ne changent pas au chauffage, donc la molalité reste constante. C'est la molarité qui subit l'effet de la dilatation.",
        "ru": "В определение моляльности объём не входит; число молей и масса растворителя при нагревании не меняются, поэтому моляльность постоянна. От теплового расширения зависит молярность.",
        "ar": "لا يدخل الحجم في تعريف المولالية؛ فعدد المولات وكتلة المذيب لا يتغيران بالتسخين، لذلك تبقى المولالية ثابتة. أما التي تتأثر بتمدد الحجم فهي المولارية.",
        "zh": "质量摩尔浓度的定义中没有体积；加热时溶质的物质的量和溶剂质量都不变，所以质量摩尔浓度不变。受体积膨胀影响的是物质的量浓度。",
        "ku": "Di pênaseya molalîteyê de qebare tune; hejmara molan û girseya çareserker bi germbûnê naguherin, ji ber vê molalîte wek xwe dimîne. Ya ku ji fireh bûna qebareyê bandor dibe molarîte ye."
      }
    },
    {
      "id": "u14-f11",
      "fact": {
        "tr": "Doymamış bir çözelti; çözünen eklenerek, çökme olmadan çözücü buharlaştırılarak ya da çözünmesi endotermik olan maddelerde sıcaklık düşürülerek doygun hâle getirilebilir.",
        "en": "An unsaturated solution can be made saturated by adding solute, by evaporating solvent without precipitation, or, for substances whose dissolution is endothermic, by lowering the temperature.",
        "de": "Eine ungesättigte Lösung kann gesättigt werden, indem man gelösten Stoff zugibt, Lösungsmittel ohne Ausfällung verdampft oder – bei Stoffen mit endothermem Lösungsvorgang – die Temperatur senkt.",
        "fr": "Une solution insaturée peut être rendue saturée en ajoutant du soluté, en évaporant du solvant sans précipitation ou, pour les substances dont la dissolution est endothermique, en abaissant la température.",
        "ru": "Ненасыщенный раствор можно сделать насыщенным, добавив растворённое вещество, выпарив растворитель без выпадения осадка или — для веществ с эндотермическим растворением — понизив температуру.",
        "ar": "يمكن جعل المحلول غير المشبع مشبعًا بإضافة مذاب، أو بتبخير المذيب دون ترسب، أو بخفض درجة الحرارة في المواد التي يكون ذوبانها ماصًا للحرارة.",
        "zh": "不饱和溶液可以通过加入溶质、在不析出的情况下蒸发溶剂，或者（对溶解吸热的物质）降低温度而变为饱和溶液。",
        "ku": "Çareseriyek netêr dikare bi zêdekirina çareserbûyî, bi hilmkirina çareserker bêyî niştinê, an jî ji bo maddeyên ku helandina wan endotermîk e bi daxistina germahiyê were têrkirin."
      },
      "trap": {
        "tr": "Doymamış çözeltiye su eklenirse doygun hâle gelir.",
        "en": "If water is added to an unsaturated solution, it becomes saturated.",
        "de": "Fügt man einer ungesättigten Lösung Wasser hinzu, wird diese gesättigt.",
        "fr": "Si de l'eau est ajoutée à une solution insaturée, elle devient saturée.",
        "ru": "Если к ненасыщенному раствору добавить воду, он станет насыщенным.",
        "ar": "إذا أُضيف الماء إلى محلول غير مشبع يصبح مشبعًا.",
        "zh": "向不饱和溶液中加水，它就会变成饱和溶液。",
        "ku": "Ger av li çareseriyeke netêr were zêdekirin, ew têr dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Su eklemek çözücüyü artırır ve çözeltiyi daha da seyreltir; çözelti doygunluktan uzaklaşır. Doygun hâle getirmek için tam tersine çözücü azaltılmalı ya da çözünen eklenmelidir.",
        "en": "Adding water increases the solvent and dilutes the solution further, moving it away from saturation. To saturate it, the solvent must instead be reduced or solute added.",
        "de": "Wasserzugabe vergrößert die Lösungsmittelmenge und verdünnt die Lösung weiter; sie entfernt sich von der Sättigung. Zum Sättigen muss man im Gegenteil Lösungsmittel entfernen oder gelösten Stoff zugeben.",
        "fr": "Ajouter de l'eau augmente le solvant et dilue encore la solution, qui s'éloigne de la saturation. Pour la saturer, il faut au contraire réduire le solvant ou ajouter du soluté.",
        "ru": "Добавление воды увеличивает количество растворителя и ещё больше разбавляет раствор, удаляя его от насыщения. Чтобы сделать раствор насыщенным, нужно, наоборот, уменьшить количество растворителя или добавить растворённое вещество.",
        "ar": "إضافة الماء تزيد المذيب وتخفف المحلول أكثر فيبتعد عن التشبع. ولجعله مشبعًا يجب على العكس إنقاص المذيب أو إضافة مذاب.",
        "zh": "加水会增加溶剂、使溶液更稀，离饱和更远。要使其饱和，恰恰相反，应减少溶剂或加入溶质。",
        "ku": "Zêdekirina avê çareserker zêde dike û çareseriyê hîn sisttir dike; çareserî ji têrbûnê dûr dikeve. Ji bo têrkirinê berevajî divê çareserker kêm bibe an çareserbûyî were zêdekirin."
      }
    },
    {
      "id": "u14-f12",
      "fact": {
        "tr": "Elektrolit çözeltiler serbest iyonlar içerdiği için elektrik akımını iletir (tuzlu su, asitler, bazlar).",
        "en": "Electrolyte solutions conduct electric current because they contain free ions (salt water, acids, bases).",
        "de": "Elektrolytlösungen leiten elektrischen Strom, weil sie freie Ionen (Salzwasser, Säuren, Basen) enthalten.",
        "fr": "Les solutions électrolytiques conduisent le courant électrique car elles contiennent des ions libres (eau salée, acides, bases).",
        "ru": "Растворы электролитов проводят электрический ток, так как содержат свободные ионы (солёная вода, растворы кислот и оснований).",
        "ar": "توصل المحاليل الإلكتروليتية التيار الكهربائي لاحتوائها على أيونات حرة (الماء المالح، الأحماض، القواعد).",
        "zh": "电解质溶液含有自由移动的离子，因此能导电（如盐水、酸溶液、碱溶液）。",
        "ku": "Çareseriyên elektrolît ji ber ku îyonên azad dihewînin herikîna elektrîkê diguhezînin (ava xwê, asîd, baz)."
      },
      "trap": {
        "tr": "Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.",
        "en": "Sugar water conducts electricity very well because it contains free ions.",
        "de": "Zuckerwasser leitet Elektrizität sehr gut, da es freie Ionen enthält.",
        "fr": "L’eau sucrée conduit très bien l’électricité car elle contient des ions libres.",
        "ru": "Раствор сахара в воде очень хорошо проводит электрический ток, так как содержит свободные ионы.",
        "ar": "يوصل الماء المحلّى بالسكر الكهرباء جيدًا جدًا لاحتوائه على أيونات حرة.",
        "zh": "糖水含有自由离子，因此导电性很好。",
        "ku": "Ava bi şekir ji ber ku îyonên azad dihewîne elektrîkê pir baş diguhezîne."
      },
      "whyTrapIsFalse": {
        "tr": "Şeker moleküler bir maddedir; suda iyonlarına ayrışmadan moleküller hâlinde çözünür. Çözeltide akımı taşıyacak serbest iyon bulunmadığı için şekerli su elektriği iletmez.",
        "en": "Sugar is a molecular substance; it dissolves in water as intact molecules without splitting into ions. With no free ions to carry charge, sugar water does not conduct electricity.",
        "de": "Zucker ist ein molekularer Stoff; er löst sich in Wasser als ganze Moleküle, ohne in Ionen zu zerfallen. Ohne freie Ionen als Ladungsträger leitet Zuckerwasser keinen Strom.",
        "fr": "Le sucre est une substance moléculaire ; il se dissout dans l'eau sous forme de molécules entières sans se dissocier en ions. Sans ions libres pour porter les charges, l'eau sucrée ne conduit pas le courant.",
        "ru": "Сахар — молекулярное вещество; он растворяется в воде в виде молекул, не распадаясь на ионы. В растворе нет свободных ионов, которые переносили бы заряд, поэтому раствор сахара не проводит ток.",
        "ar": "السكر مادة جزيئية؛ يذوب في الماء على شكل جزيئات كاملة دون أن يتفكك إلى أيونات. ولعدم وجود أيونات حرة تنقل الشحنة، لا يوصل الماء المحلى الكهرباء.",
        "zh": "糖是由分子构成的物质，在水中以分子形式溶解，不电离成离子。溶液中没有能导电的自由离子，所以糖水不导电。",
        "ku": "Şeker maddeyek molekulî ye; di avê de wek molekulên tam dihele û naqete îyonan. Ji ber ku îyonên azad ên barkêş tune ne, ava bi şeker elektrîkê naguhêze."
      }
    },
    {
      "id": "u14-f13",
      "fact": {
        "tr": "Suda iyonlaşmadan, molekülleri hâlinde çözünen maddelerin (glikoz C6H12O6, etil alkol C2H5OH) sulu çözeltileri elektrik akımını iletmez; bu maddeler elektrolit değildir.",
        "en": "Aqueous solutions of substances that dissolve as molecules without ionizing (glucose C6H12O6, ethyl alcohol C2H5OH) do not conduct electric current; these substances are non-electrolytes.",
        "de": "Wässrige Lösungen von Stoffen, die sich ohne Ionenbildung als Moleküle lösen (Glucose C6H12O6, Ethylalkohol C2H5OH), leiten den elektrischen Strom nicht; diese Stoffe sind keine Elektrolyte.",
        "fr": "Les solutions aqueuses des substances qui se dissolvent sous forme de molécules sans s'ioniser (glucose C6H12O6, alcool éthylique C2H5OH) ne conduisent pas le courant électrique ; ces substances ne sont pas des électrolytes.",
        "ru": "Водные растворы веществ, которые растворяются в виде молекул, не распадаясь на ионы (глюкоза C6H12O6, этиловый спирт C2H5OH), не проводят электрический ток; эти вещества — неэлектролиты.",
        "ar": "المحاليل المائية للمواد التي تذوب على هيئة جزيئات دون أن تتأين (الجلوكوز C6H12O6، الكحول الإيثيلي C2H5OH) لا توصل التيار الكهربائي؛ فهذه المواد ليست إلكتروليتات.",
        "zh": "以分子形式溶解而不电离的物质(葡萄糖 C6H12O6、乙醇 C2H5OH)的水溶液不导电；这些物质不是电解质。",
        "ku": "Çareseriyên avî yên maddeyên ku bêyî îyonbûnê wek molekul dihelin (glîkoz C6H12O6, alkola etîl C2H5OH) herikîna elektrîkê naguhezînin; ev madde ne elektrolît in."
      },
      "trap": {
        "tr": "Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.",
        "en": "Sugar ionizes in water and dissociates into H+ and OH- ions.",
        "de": "Zucker ionisiert in Wasser und zerfällt in H+- und OH--Ionen.",
        "fr": "Le sucre s'ionise dans l'eau et se dissocie en ions H+ et OH-.",
        "ru": "Сахар в воде диссоциирует на ионы H+ и OH-.",
        "ar": "يتأين السكر في الماء ويتفكك إلى أيونات H+ وOH-.",
        "zh": "糖在水中电离出 H+ 和 OH-。",
        "ku": "Şekir di avê de îyonîze dibe û dibe îyonên H+ û OH-."
      },
      "whyTrapIsFalse": {
        "tr": "Şeker molekülündeki OH grupları karbona kovalent bağlıdır ve suda OH- iyonu olarak kopmaz; molekül H+ da vermez. Şeker ne asit ne baz gibi davranır, moleküller hâlinde çözünür.",
        "en": "The OH groups in a sugar molecule are covalently bonded to carbon and do not break off as OH- ions in water; the molecule does not release H+ either. Sugar behaves neither as an acid nor as a base and dissolves as molecules.",
        "de": "Die OH-Gruppen im Zuckermolekül sind kovalent an Kohlenstoff gebunden und spalten sich in Wasser nicht als OH--Ionen ab; auch H+ wird nicht abgegeben. Zucker verhält sich weder als Säure noch als Base und löst sich molekular.",
        "fr": "Les groupes OH de la molécule de sucre sont liés de façon covalente au carbone et ne se détachent pas en ions OH- dans l'eau ; la molécule ne libère pas non plus de H+. Le sucre n'est ni un acide ni une base et se dissout sous forme moléculaire.",
        "ru": "Группы OH в молекуле сахара ковалентно связаны с углеродом и не отщепляются в воде в виде ионов OH-; ионы H+ молекула тоже не отдаёт. Сахар не ведёт себя ни как кислота, ни как основание и растворяется в виде молекул.",
        "ar": "مجموعات OH في جزيء السكر مرتبطة تساهميًا بالكربون ولا تنفصل في الماء على شكل أيونات OH-؛ كما أن الجزيء لا يطلق H+. السكر لا يسلك سلوك حمض ولا قاعدة ويذوب على شكل جزيئات.",
        "zh": "糖分子中的 OH 基团以共价键与碳相连，在水中不会以 OH- 形式脱离，分子也不释放 H+。糖既不表现为酸也不表现为碱，以分子形式溶解。",
        "ku": "Komên OH yên di molekula şekir de bi kovalent bi karbonê ve girêdayî ne û di avê de wek îyonên OH- naqetin; molekul H+ jî nade. Şeker ne wek asîd ne jî wek baz tevdigere û wek molekul dihele."
      }
    },
    {
      "id": "u14-f14",
      "fact": {
        "tr": "0,2 M 500 mL NaCl çözeltisinde çözünmüş NaCl mol sayısı n = M * V = 0,2 * 0,5 = 0,1 moldür.",
        "en": "The number of moles of NaCl dissolved in 0.2 M 500 mL NaCl solution is n = M * V = 0.2 * 0.5 = 0.1 mol.",
        "de": "Die Anzahl der Mol NaCl, gelöst in 0,2 M 500 ml NaCl-Lösung, beträgt n = M * V = 0,2 * 0,5 = 0,1 Mol.",
        "fr": "Le nombre de moles de NaCl dissoutes dans une solution de NaCl 0,2 M dans 500 ml est n = M * V = 0,2 * 0,5 = 0,1 mol.",
        "ru": "В 500 мл 0,2 M раствора NaCl содержится n = M * V = 0,2 * 0,5 = 0,1 моль NaCl.",
        "ar": "عدد مولات NaCl المذابة في 500 mL من محلول NaCl تركيزه 0.2 M هو n = M * V = 0.2 * 0.5 = 0.1 mol.",
        "zh": "500 mL 0.2 M NaCl 溶液中所溶解 NaCl 的物质的量为 n = M * V = 0.2 * 0.5 = 0.1 mol。",
        "ku": "Hejmara molên NaCl ya ku di 500 mL çareseriya NaCl ya 0,2 M de heliyaye n = M * V = 0,2 * 0,5 = 0,1 mol e."
      },
      "trap": {
        "tr": "0,2 M 500 mL çözeltide 1 mol tuz çözünmüştür.",
        "en": "1 mole of salt was dissolved in 500 mL of 0.2 M solution.",
        "de": "1 Mol Salz wurde in 500 ml einer 0,2 M Lösung gelöst.",
        "fr": "1 mole de sel a été dissoute dans 500 ml de solution 0,2 M.",
        "ru": "В 500 мл 0,2 M раствора растворён 1 моль соли.",
        "ar": "يحتوي 500 mL من محلول تركيزه 0.2 M على 1 mol من الملح المذاب.",
        "zh": "500 mL 0.2 M 溶液中溶解了 1 mol 盐。",
        "ku": "Di 500 mL çareseriya 0,2 M de 1 mol xwê heliyaye."
      },
      "whyTrapIsFalse": {
        "tr": "1 mol çözünen için 0,2 M'lık çözeltiden 5 L gerekirdi. 500 mL = 0,5 L olduğundan n = 0,2 · 0,5 = 0,1 mol bulunur.",
        "en": "1 mol of solute would need 5 L of a 0.2 M solution. Since 500 mL = 0.5 L, n = 0.2 · 0.5 = 0.1 mol.",
        "de": "Für 1 mol gelösten Stoff bräuchte man 5 L einer 0,2 M Lösung. Da 500 mL = 0,5 L sind, ist n = 0,2 · 0,5 = 0,1 mol.",
        "fr": "Pour 1 mol de soluté, il faudrait 5 L d'une solution à 0,2 M. Comme 500 mL = 0,5 L, n = 0,2 · 0,5 = 0,1 mol.",
        "ru": "Для 1 моль растворённого вещества понадобилось бы 5 л 0,2 M раствора. Так как 500 мл = 0,5 л, n = 0,2 · 0,5 = 0,1 моль.",
        "ar": "لاحتواء 1 mol من المذاب يلزم 5 L من محلول تركيزه 0.2 M. وبما أن 500 mL = 0.5 L فإن n = 0.2 · 0.5 = 0.1 mol.",
        "zh": "要含有 1 mol 溶质，需要 5 L 0.2 M 溶液。500 mL = 0.5 L，所以 n = 0.2 × 0.5 = 0.1 mol。",
        "ku": "Ji bo 1 mol çareserbûyî 5 L ji çareseriya 0,2 M pêwîst bû. Ji ber ku 500 mL = 0,5 L e, n = 0,2 · 0,5 = 0,1 mol e."
      }
    },
    {
      "id": "u14-f15",
      "fact": {
        "tr": "Çözelti derişimi arttıkça birim hacimdeki çözünen tanecik sayısı artar.",
        "en": "As the solution concentration increases, the number of solute particles in the unit volume increases.",
        "de": "Mit zunehmender Lösungskonzentration nimmt die Anzahl der gelösten Partikel im Einheitsvolumen zu.",
        "fr": "À mesure que la concentration de la solution augmente, le nombre de particules de soluté dans l’unité de volume augmente.",
        "ru": "С увеличением концентрации раствора растёт число частиц растворённого вещества в единице объёма.",
        "ar": "بزيادة تركيز المحلول يزداد عدد جسيمات المذاب في وحدة الحجم.",
        "zh": "溶液浓度越大，单位体积中溶质粒子的数目越多。",
        "ku": "Her ku hûrbûna çareseriyê zêde dibe, hejmara perçeyên çareserbûyî di yekeya qebareyê de zêde dibe."
      },
      "trap": {
        "tr": "Derişik çözelti daima doygun çözelti demektir.",
        "en": "Concentrated solution always means saturated solution.",
        "de": "Konzentrierte Lösung bedeutet immer gesättigte Lösung.",
        "fr": "Une solution concentrée signifie toujours une solution saturée.",
        "ru": "Концентрированный раствор — всегда насыщенный.",
        "ar": "المحلول المركّز يعني دائمًا محلولًا مشبعًا.",
        "zh": "浓溶液一定是饱和溶液。",
        "ku": "Çareseriya konsantrekirî her tim tê wateya çareseriya têrbûyî."
      },
      "whyTrapIsFalse": {
        "tr": "Derişik/seyreltik, çözünen miktarının göreli çokluğunu; doygun/doymamış ise çözünürlük sınırına ulaşılıp ulaşılmadığını anlatır. Çözünürlüğü yüksek bir maddenin derişik ama doymamış, çözünürlüğü düşük bir maddenin seyreltik ama doygun çözeltisi olabilir.",
        "en": "Concentrated/dilute describes how much solute there is relatively; saturated/unsaturated describes whether the solubility limit has been reached. A highly soluble substance can give a concentrated but unsaturated solution, and a poorly soluble one a dilute but saturated solution.",
        "de": "Konzentriert/verdünnt beschreibt die relative Menge an gelöstem Stoff, gesättigt/ungesättigt, ob die Löslichkeitsgrenze erreicht ist. Ein gut löslicher Stoff kann eine konzentrierte, aber ungesättigte, ein schwer löslicher eine verdünnte, aber gesättigte Lösung bilden.",
        "fr": "Concentrée/diluée décrit la quantité relative de soluté ; saturée/insaturée indique si la limite de solubilité est atteinte. Une substance très soluble peut donner une solution concentrée mais insaturée, et une substance peu soluble une solution diluée mais saturée.",
        "ru": "Понятия «концентрированный/разбавленный» говорят об относительном количестве растворённого вещества, а «насыщенный/ненасыщенный» — о том, достигнут ли предел растворимости. Хорошо растворимое вещество может дать концентрированный, но ненасыщенный раствор, а малорастворимое — разбавленный, но насыщенный.",
        "ar": "وصفا «مركّز» و«مخفف» يعبّران عن الكمية النسبية للمذاب، أما وصفا «مشبع» و«غير مشبع» فيعبّران عن بلوغ حد الذائبية أو عدمه. يمكن لمادة عالية الذائبية أن تعطي محلولًا مركزًا غير مشبع، ولمادة قليلة الذائبية أن تعطي محلولًا مخففًا مشبعًا.",
        "zh": "浓/稀描述溶质的相对多少，饱和/不饱和描述是否达到溶解度极限。溶解度大的物质可以形成浓而不饱和的溶液，溶解度小的物质可以形成稀而饱和的溶液。",
        "ku": "Hûr/sist mîqdara nisbî ya çareserbûyî nîşan dide; têr/netêr jî nîşan dide ka sînorê helbûnê hatiye gihîştin an na. Maddeyek bi helbûna bilind dikare çareseriyek hûr lê netêr, maddeyek bi helbûna nizm jî çareseriyek sist lê têr çêke."
      }
    },
    {
      "id": "u14-f16",
      "fact": {
        "tr": "Hacimce yüzde derişim = (Çözünen Sıvı Hacmi / Çözelti Toplam Hacmi) x 100'dür (örn. 80° kolonya).",
        "en": "Percent concentration by volume = (Volume of Dissolved Liquid / Total Volume of Solution) x 100 (e.g. 80° cologne).",
        "de": "Prozentuale Konzentration nach Volumen = (Volumen der gelösten Flüssigkeit / Gesamtvolumen der Lösung) x 100 (z. B. 80° Cologne).",
        "fr": "Pourcentage de concentration en volume = (Volume de liquide dissous / Volume total de solution) x 100 (par exemple eau de Cologne à 80°).",
        "ru": "Объёмная доля (%) = (объём растворённой жидкости / общий объём раствора) x 100 (например, одеколон крепостью 80°).",
        "ar": "النسبة المئوية الحجمية = (حجم السائل المذاب / الحجم الكلي للمحلول) × 100 (مثل الكولونيا 80°).",
        "zh": "体积分数 = (溶质液体的体积 / 溶液总体积) x 100，例如 80° 的古龙水。",
        "ku": "Hûrbûna ji sedî bi qebareyî = (Qebareya Şileya Helbûyî / Qebareya Giştî ya Çareseriyê) x 100 (mînak: kolonyaya 80°)."
      },
      "trap": {
        "tr": "Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.",
        "en": "Percent by volume is used only in solid-liquid solutions.",
        "de": "Volumenprozent wird nur in Fest-Flüssig-Lösungen verwendet.",
        "fr": "Le pourcentage en volume est utilisé uniquement dans les solutions solides-liquides.",
        "ru": "Объёмную долю (%) используют только для растворов твёрдых веществ в жидкостях.",
        "ar": "تُستخدم النسبة المئوية الحجمية في محاليل صلب–سائل فقط.",
        "zh": "体积分数只用于固体溶于液体形成的溶液。",
        "ku": "Ji sedî bi qebareyî tenê di çareseriyên hişk-şil de tê bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "Hacimce yüzde, bileşen hacimlerinin ölçülebildiği sıvı-sıvı (alkol-su gibi) ve gaz karışımlarında kullanılır. Katının çözündüğü çözeltilerde genellikle kütlece yüzde kullanılır.",
        "en": "Percent by volume is used for liquid–liquid mixtures (such as alcohol–water) and gas mixtures, where the volumes of the components can be measured. For solutions of solids, percent by mass is normally used.",
        "de": "Volumenprozent verwendet man bei Flüssig-flüssig-Gemischen (z. B. Alkohol–Wasser) und Gasgemischen, deren Komponentenvolumina messbar sind. Für Lösungen von Feststoffen nimmt man meist Massenprozent.",
        "fr": "Le pourcentage en volume s'utilise pour les mélanges liquide–liquide (comme alcool–eau) et les mélanges gazeux, dont on peut mesurer les volumes des constituants. Pour les solutions de solides, on utilise en général le pourcentage massique.",
        "ru": "Объёмную долю используют для смесей жидкостей (например, спирт — вода) и газовых смесей, где объёмы компонентов можно измерить. Для растворов твёрдых веществ обычно применяют массовую долю.",
        "ar": "تُستخدم النسبة المئوية الحجمية في مخاليط سائل–سائل (مثل الكحول–الماء) ومخاليط الغازات حيث يمكن قياس حجوم المكونات. أما في محاليل المواد الصلبة فتُستخدم عادة النسبة المئوية الكتلية.",
        "zh": "体积分数用于能测量各组分体积的液-液混合物（如酒精-水）和气体混合物。固体溶于液体形成的溶液通常用质量分数表示。",
        "ku": "Sedeya qebareyî di tevlîheviyên şile–şile (wek alkol–av) û tevlîheviyên gazan de tê bikaranîn ku qebareya pêkhateyan dikare were pîvandin. Di çareseriyên ku hişkek tê de heliyaye de bi giştî sedeya girseyî tê bikaranîn."
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
        "zh": "物质的量浓度",
        "ku": "Molarîte"
      },
      "conceptB": {
        "tr": "Molalite",
        "en": "Molality",
        "de": "Molalität",
        "fr": "Molalité",
        "ru": "Моляльность",
        "ar": "المولالية",
        "zh": "质量摩尔浓度",
        "ku": "Molalîte"
      },
      "distinction": {
        "tr": "Molarite, 1 L çözeltide çözünmüş maddenin mol sayısıdır ve sıcaklıkla değişir; molalite ise 1 kg çözücüde çözünmüş maddenin mol sayısıdır ve sıcaklıkla değişmez.",
        "en": "Molarity is the moles of solute in 1 L of solution and changes with temperature; molality is the moles of solute in 1 kg of solvent and does not change with temperature.",
        "de": "Molarität ist die Stoffmenge des gelösten Stoffes in 1 L Lösung und ändert sich mit der Temperatur; Molalität ist die Stoffmenge des gelösten Stoffes in 1 kg Lösungsmittel und ändert sich nicht mit der Temperatur.",
        "fr": "La molarité est le nombre de moles de soluté dans 1 L de solution et varie avec la température ; la molalité est le nombre de moles de soluté dans 1 kg de solvant et ne varie pas avec la température.",
        "ru": "Молярность — число молей растворённого вещества в 1 л раствора, зависящее от температуры; моляльность — число молей растворённого вещества в 1 кг растворителя, не зависящее от температуры.",
        "ar": "المولارية مقدار يساوي عدد مولات المذاب في 1 L من المحلول ويتغير بتغير درجة الحرارة؛ أما المولالية فمقدار يساوي عدد مولات المذاب في 1 kg من المذيب ولا يتغير بتغير درجة الحرارة.",
        "zh": "物质的量浓度是每 1 L 溶液中所含溶质的物质的量，随温度变化；而质量摩尔浓度是每 1 kg 溶剂中所含溶质的物质的量，不随温度变化。",
        "ku": "Molarîte hejmara molên çareserbûyî ye di 1 L çareseriyê de û bi germahiyê diguhere; molalîte hejmara molên çareserbûyî ye di 1 kg çareserker de û bi germahiyê naguhere."
      }
    },
    {
      "id": "u14-c02",
      "conceptA": {
        "tr": "Elektrolit Çözelti",
        "en": "Electrolyte Solution",
        "de": "Elektrolytlösung",
        "fr": "Solution électrolytique",
        "ru": "Раствор электролита",
        "ar": "المحلول الإلكتروليتي",
        "zh": "电解质溶液",
        "ku": "Çareseriya Elektrolîtê"
      },
      "conceptB": {
        "tr": "Elektrolit Olmayan Çözelti",
        "en": "Non-Electrolyte Solution",
        "de": "Nicht-Elektrolyt-Lösung",
        "fr": "Solution sans électrolyte",
        "ru": "Раствор неэлектролита",
        "ar": "المحلول غير الإلكتروليتي",
        "zh": "非电解质的溶液",
        "ku": "Çareseriya Ne-Elektrolîte"
      },
      "distinction": {
        "tr": "Elektrolit çözeltiler iyonların hareketiyle elektriği iletir; elektrolit olmayan çözeltilerde çözünen moleküller hâlinde bulunduğundan elektrik iletilmez.",
        "en": "Electrolyte solutions conduct electricity through the movement of ions; in non-electrolyte solutions the solute is present as molecules, so they do not conduct.",
        "de": "Elektrolytlösungen leiten den Strom durch die Bewegung von Ionen; in Nichtelektrolytlösungen liegt der gelöste Stoff als Moleküle vor, daher leiten sie nicht.",
        "fr": "Les solutions électrolytiques conduisent l'électricité grâce au déplacement des ions ; dans les solutions non électrolytiques, le soluté est sous forme de molécules, elles ne conduisent donc pas.",
        "ru": "Раствор электролита проводит электрический ток за счёт движения ионов; раствор неэлектролита не проводит ток, так как растворённое вещество находится в нём в виде молекул.",
        "ar": "المحلول الإلكتروليتي يوصل الكهرباء بحركة الأيونات؛ أما المحلول غير الإلكتروليتي فيوجد فيه المذاب على هيئة جزيئات، لذلك لا يوصل الكهرباء.",
        "zh": "电解质溶液依靠离子的定向移动导电；非电解质的溶液中溶质以分子形式存在，因此不导电。",
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
        "ru": "Разбавление — добавление к раствору растворителя: число молей растворённого вещества не меняется, а концентрация уменьшается; концентрирование — выпаривание растворителя без выпадения осадка или добавление растворённого вещества, в результате чего концентрация увеличивается.",
        "ar": "في التخفيف يُضاف المذيب إلى المحلول فيبقى عدد مولات المذاب ثابتًا ويقل التركيز؛ وفي زيادة التركيز يُبخَّر المذيب دون ترسيب أو يُضاف مذاب فيزداد التركيز.",
        "zh": "稀释是向溶液中加入溶剂，溶质的物质的量不变，浓度减小；而浓缩是在不析出固体的情况下蒸发溶剂或加入溶质，浓度增大。",
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
        "zh": "物质的量分数(X)",
        "ku": "Parçeya Molê (X)"
      },
      "conceptB": {
        "tr": "Kütlece Yüzde (%C)",
        "en": "Percent by Mass (%C)",
        "de": "Massenprozent (%C)",
        "fr": "Pourcentage en masse (%C)",
        "ru": "Массовая доля (%C)",
        "ar": "النسبة المئوية الكتلية (%C)",
        "zh": "质量分数(%C)",
        "ku": "Ji sedî bi girseyî (%C)"
      },
      "distinction": {
        "tr": "Mol kesri, bir bileşenin mol sayısının toplam mol sayısına oranıdır; kütlece yüzde ise çözünen kütlesinin çözelti kütlesine oranının 100 ile çarpımıdır.",
        "en": "Mole fraction is the ratio of the moles of a component to the total moles; percent by mass is the ratio of the mass of solute to the mass of solution, multiplied by 100.",
        "de": "Molenanteil ist das Verhältnis der Stoffmenge einer Komponente zur Gesamtstoffmenge; Massenprozent ist das mit 100 multiplizierte Verhältnis der Masse des gelösten Stoffes zur Masse der Lösung.",
        "fr": "La fraction molaire est le rapport du nombre de moles d'un constituant au nombre total de moles ; le pourcentage en masse est le rapport de la masse de soluté à la masse de la solution, multiplié par 100.",
        "ru": "Мольная доля (X) — отношение числа молей компонента к общему числу молей; массовая доля (%C) — отношение массы растворённого вещества к массе раствора, умноженное на 100.",
        "ar": "الكسر المولي نسبةُ عدد مولات أحد المكونات إلى العدد الكلي للمولات؛ أما النسبة المئوية الكتلية فنسبةُ كتلة المذاب إلى كتلة المحلول مضروبةً في 100.",
        "zh": "物质的量分数(X)是某一组分的物质的量与总物质的量之比；而质量分数(%C)是溶质质量与溶液质量之比乘以 100。",
        "ku": "Parçeya molê rêjeya hejmara molên pêkhênerekê bi hejmara giştî ya molan re ye; ji sedî bi girseyî rêjeya girseya çareserbûyî bi girseya çareseriyê re ye ku bi 100 tê pirjimarkirin."
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
        "ar": "المحلول المركز",
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
        "ru": "Концентрированный раствор содержит много растворённого вещества в единице объёма; разбавленный раствор содержит мало растворённого вещества в единице объёма.",
        "ar": "في المحلول المركز تكون كمية المذاب في وحدة الحجم كبيرة؛ أما في المحلول المخفف فتكون كمية المذاب في وحدة الحجم قليلة.",
        "zh": "浓溶液中单位体积所含的溶质较多；而稀溶液中单位体积所含的溶质较少。",
        "ku": "Di çareseriya konsantrekirî de mîqdara çareserbûyî ya di yekeya qebareyê de zêde ye; di çareseriya sivik de mîqdara çareserbûyî ya di yekeya qebareyê de hindik e."
      }
    },
    {
      "id": "u14-c06",
      "conceptA": {
        "tr": "Doymamış Çözelti",
        "en": "Unsaturated Solution",
        "de": "Ungesättigte Lösung",
        "fr": "Solution insaturée",
        "ru": "Ненасыщенный раствор",
        "ar": "المحلول غير المشبع",
        "zh": "不饱和溶液",
        "ku": "Çareseriya Netêr"
      },
      "conceptB": {
        "tr": "Doygun Çözelti",
        "en": "Saturated Solution",
        "de": "Gesättigte Lösung",
        "fr": "Solution saturée",
        "ru": "Насыщенный раствор",
        "ar": "المحلول المشبع",
        "zh": "饱和的溶液",
        "ku": "Çareseriya Têrbûyî"
      },
      "distinction": {
        "tr": "Doymamış çözelti, belirli bir sıcaklıkta çözebileceğinden daha az çözünen içerir ve bir miktar daha çözünen çözebilir; doygun çözelti ise o sıcaklıkta çözebileceği en fazla çözüneni içerir.",
        "en": "An unsaturated solution contains less solute than it can dissolve at a given temperature and can still dissolve more; a saturated solution contains the maximum amount of solute it can dissolve at that temperature.",
        "de": "Eine ungesättigte Lösung enthält bei einer bestimmten Temperatur weniger gelösten Stoff als die lösbare Höchstmenge und kann noch weiteren Stoff lösen; eine gesättigte Lösung enthält die Höchstmenge an gelöstem Stoff, die bei dieser Temperatur lösbar ist.",
        "fr": "Une solution insaturée contient, à une température donnée, moins de soluté qu'elle ne peut en dissoudre et peut encore en dissoudre ; une solution saturée contient la quantité maximale de soluté qu'elle peut dissoudre à cette température.",
        "ru": "Ненасыщенный раствор при данной температуре содержит меньше растворённого вещества, чем может растворить, и может растворить ещё; насыщенный раствор содержит наибольшее количество вещества, которое может раствориться при этой температуре.",
        "ar": "المحلول غير المشبع يحتوي عند درجة حرارة معينة على كمية من المذاب أقل مما يستطيع إذابته، ويمكنه إذابة المزيد؛ أما المحلول المشبع فيحتوي على أكبر كمية من المذاب يمكنه إذابتها عند تلك الدرجة.",
        "zh": "不饱和溶液在一定温度下所含溶质少于它能溶解的量，还能继续溶解溶质；而饱和的溶液含有该温度下它所能溶解的最大量溶质。",
        "ku": "Çareseriya netêr di germahiyeke diyarkirî de ji mîqdara ku dikare bihelîne kêmtir çareserbûyî dihewîne û dikare hinekî din jî bihelîne; çareseriya têrbûyî mîqdara herî zêde ya çareserbûyî ya ku di wê germahiyê de dikare bihelîne dihewîne."
      }
    },
    {
      "id": "u14-c07",
      "conceptA": {
        "tr": "ppm (Milyonda Bir)",
        "en": "ppm (One Per Million)",
        "de": "ppm (Eins pro Million)",
        "fr": "ppm (un par million)",
        "ru": "ppm (миллионная доля)",
        "ar": "ppm (جزء في المليون)",
        "zh": "ppm(百万分之一)",
        "ku": "ppm (Ji Mîlyonek Yek)"
      },
      "conceptB": {
        "tr": "ppb (Milyarda Bir)",
        "en": "ppb (One Per Billion)",
        "de": "ppb (Eins pro Milliarde)",
        "fr": "ppb (un par milliard)",
        "ru": "ppb (миллиардная доля)",
        "ar": "ppb (جزء في المليار)",
        "zh": "ppb(十亿分之一)",
        "ku": "ppb (Ji Mîlyarek Yek)"
      },
      "distinction": {
        "tr": "ppm, 1 kg çözeltideki çözünenin miligram cinsinden kütlesidir (mg/kg); ppb ise 1 kg çözeltideki çözünenin mikrogram cinsinden kütlesidir (µg/kg) ve ppm'den 1000 kat daha küçük derişimleri ifade eder.",
        "en": "ppm is the mass of solute in milligrams per 1 kg of solution (mg/kg); ppb is the mass of solute in micrograms per 1 kg of solution (µg/kg) and expresses concentrations 1000 times smaller than ppm.",
        "de": "ppm ist die Masse des gelösten Stoffes in Milligramm je 1 kg Lösung (mg/kg); ppb ist die Masse des gelösten Stoffes in Mikrogramm je 1 kg Lösung (µg/kg) und beschreibt 1000-mal kleinere Konzentrationen als ppm.",
        "fr": "Le ppm est la masse de soluté en milligrammes par 1 kg de solution (mg/kg) ; le ppb est la masse de soluté en microgrammes par 1 kg de solution (µg/kg) et exprime des concentrations 1000 fois plus faibles que le ppm.",
        "ru": "ppm (миллионная доля) — масса растворённого вещества в миллиграммах на 1 кг раствора (мг/кг); ppb (миллиардная доля) — масса растворённого вещества в микрограммах на 1 кг раствора (мкг/кг), то есть единица для концентраций, в 1000 раз меньших, чем ppm.",
        "ar": "ppm هو كتلة المذاب بالمليغرام في 1 kg من المحلول (mg/kg)؛ أما ppb فهو كتلة المذاب بالميكروغرام في 1 kg من المحلول (µg/kg) ويعبّر عن تراكيز أصغر بـ 1000 مرة من ppm.",
        "zh": "ppm(百万分之一)是每 1 kg 溶液中所含溶质的毫克数(mg/kg)；而 ppb(十亿分之一)是每 1 kg 溶液中所含溶质的微克数(µg/kg)，所表示的浓度只有前者的千分之一。",
        "ku": "ppm girseya çareserbûyî ya bi mîlîgram e di 1 kg çareseriyê de (mg/kg); ppb girseya çareserbûyî ya bi mîkrogram e di 1 kg çareseriyê de (µg/kg) û hûrbûnên 1000 caran ji ppm biçûktir nîşan dide."
      }
    },
    {
      "id": "u14-c08",
      "conceptA": {
        "tr": "İyon Derişimi",
        "en": "Ion Concentration",
        "de": "Ionenkonzentration",
        "fr": "Concentration d'un ion",
        "ru": "Концентрация ионов",
        "ar": "تركيز الأيون",
        "zh": "离子浓度",
        "ku": "Hûrbûna îyonê"
      },
      "conceptB": {
        "tr": "Bileşik Molaritesi",
        "en": "Molarity of the Compound",
        "de": "Molarität der Verbindung",
        "fr": "Molarité du composé",
        "ru": "Молярность соединения",
        "ar": "مولارية المركّب",
        "zh": "化合物的物质的量浓度",
        "ku": "Molarîteya pêkhateyê"
      },
      "distinction": {
        "tr": "İyon derişimi, bileşik molaritesinin formüldeki o iyonun sayısıyla çarpılmasıyla bulunur; bileşik molaritesi ise 1 L çözeltide çözünen formül biriminin mol sayısıdır (0,1 M AlCl3 çözeltisinde [Al3+] = 0,1 M, [Cl-] = 0,3 M).",
        "en": "Ion concentration is found by multiplying the molarity of the compound by the number of that ion in the formula; the molarity of the compound is the moles of formula units dissolved in 1 L of solution (in 0.1 M AlCl3, [Al3+] = 0.1 M and [Cl-] = 0.3 M).",
        "de": "Ionenkonzentration erhält man, indem man die Molarität der Verbindung mit der Anzahl dieses Ions in der Formel multipliziert; die Molarität der Verbindung ist die Stoffmenge gelöster Formeleinheiten in 1 L Lösung (in 0,1 M AlCl3 ist [Al3+] = 0,1 M und [Cl-] = 0,3 M).",
        "fr": "La concentration d'un ion s'obtient en multipliant la molarité du composé par le nombre de cet ion dans la formule ; la molarité du composé est le nombre de moles d'unités formulaires dissoutes dans 1 L de solution (dans AlCl3 0,1 M, [Al3+] = 0,1 M et [Cl-] = 0,3 M).",
        "ru": "Концентрация ионов определяется умножением молярности соединения на число этих ионов в формуле; молярность соединения — число молей растворённых формульных единиц в 1 л раствора (в 0,1 M AlCl3 [Al3+] = 0,1 M, [Cl-] = 0,3 M).",
        "ar": "تركيز الأيون يُحسب بضرب مولارية المركّب في عدد ذلك الأيون في الصيغة؛ أما مولارية المركّب فعددُ مولات وحدات الصيغة المذابة في 1 L من المحلول (في محلول AlCl3 تركيزه 0.1 M يكون [Al3+] = 0.1 M و[Cl-] = 0.3 M).",
        "zh": "离子浓度等于化合物的物质的量浓度乘以化学式中该离子的个数；而化合物的物质的量浓度是每 1 L 溶液中所溶解的化学式单元的物质的量(0.1 M AlCl3 溶液中 [Al3+] = 0.1 M，[Cl-] = 0.3 M)。",
        "ku": "Hûrbûna îyonê bi pirjimarkirina molarîteya pêkhateyê bi hejmara wê îyonê ya di formulê de tê dîtin; molarîteya pêkhateyê hejmara molan a yekeyên formulê ye ku di 1 L çareseriyê de heliyane (di 0,1 M AlCl3 de [Al3+] = 0,1 M û [Cl-] = 0,3 M)."
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
        "ru": "Порядок расчёта при смешивании растворов",
        "ar": "حساب تراكيز المحاليل المخلوطة",
        "zh": "溶液混合计算步骤",
        "ku": "Pêngavên Hesabkirina Tevlihevkirina Çareseriyan"
      },
      "steps": [
        {
          "tr": "Her çözeltinin molaritesi, hacmi ve formülündeki istenen iyonun sayısı belirlenir",
          "en": "The molarity and volume of each solution and the number of the required ion in each formula are identified",
          "de": "Molarität und Volumen jeder Lösung sowie die Anzahl des gesuchten Ions in jeder Formel werden festgestellt",
          "fr": "On relève la molarité et le volume de chaque solution ainsi que le nombre de l'ion cherché dans chaque formule",
          "ru": "Определяют молярность и объём каждого раствора и число искомых ионов в формуле каждого вещества",
          "ar": "تُحدَّد مولارية كل محلول وحجمه وعدد الأيون المطلوب في صيغته",
          "zh": "确定每种溶液的物质的量浓度、体积以及化学式中所求离子的个数",
          "ku": "Molarîte û qebareya her çareseriyê û hejmara îyona xwestî ya di her formulê de tên diyarkirin"
        },
        {
          "tr": "Her çözeltideki istenen iyonun mol sayısı hesaplanır (n = M · V · iyon sayısı)",
          "en": "The moles of the required ion in each solution are calculated (n = M · V · number of ions)",
          "de": "Die Stoffmenge des gesuchten Ions in jeder Lösung wird berechnet (n = M · V · Ionenzahl)",
          "fr": "On calcule le nombre de moles de l'ion cherché dans chaque solution (n = M · V · nombre d'ions)",
          "ru": "Вычисляют число молей искомого иона в каждом растворе (n = M · V · число ионов)",
          "ar": "يُحسب عدد مولات الأيون المطلوب في كل محلول (n = M · V · عدد الأيونات)",
          "zh": "计算每种溶液中所求离子的物质的量(n = M · V · 离子个数)",
          "ku": "Hejmara molên îyona xwestî di her çareseriyê de tê hesibandin (n = M · V · hejmara îyonan)"
        },
        {
          "tr": "Bulunan mol sayıları toplanır, çözelti hacimleri de toplanır (n_toplam, V_toplam)",
          "en": "The moles found are added together, and the solution volumes are added together (n_total, V_total)",
          "de": "Die berechneten Stoffmengen werden addiert, ebenso die Volumina der Lösungen (n_gesamt, V_gesamt)",
          "fr": "On additionne les nombres de moles obtenus, puis les volumes des solutions (n_total, V_total)",
          "ru": "Складывают найденные числа молей, а также объёмы растворов (n_общ, V_общ)",
          "ar": "تُجمع أعداد المولات الناتجة، وتُجمع حجوم المحاليل (n_total, V_total)",
          "zh": "把求得的物质的量相加，并把各溶液的体积相加(n总、V总)",
          "ku": "Hejmarên molan ên hatine dîtin li hev tên zêdekirin, qebareyên çareseriyan jî li hev tên zêdekirin (n_giştî, V_giştî)"
        },
        {
          "tr": "Son derişim bulunur: [iyon] = n_toplam / V_toplam",
          "en": "The final concentration is found: [ion] = n_total / V_total",
          "de": "Die Endkonzentration wird bestimmt: [Ion] = n_gesamt / V_gesamt",
          "fr": "On obtient la concentration finale : [ion] = n_total / V_total",
          "ru": "Находят конечную концентрацию: [ион] = n_общ / V_общ",
          "ar": "يُحسب التركيز النهائي: [الأيون] = n_total / V_total",
          "zh": "求出最终浓度：[离子] = n总 / V总",
          "ku": "Hûrbûna dawî tê dîtin: [îyon] = n_giştî / V_giştî"
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
        "ru": "Приготовление раствора заданной молярной концентрации",
        "ar": "تحضير محلول مولاري",
        "zh": "配制一定物质的量浓度的溶液",
        "ku": "Amadekirina Çareseriya Molar"
      },
      "steps": [
        {
          "tr": "Çözünecek katının kütlesi hassas terazide tartılır",
          "en": "The mass of the solid to be dissolved is weighed on a precision balance",
          "de": "Die Masse des zu lösenden Feststoffs wird auf einer Präzisionswaage abgewogen",
          "fr": "On pèse la masse du solide à dissoudre sur une balance de précision",
          "ru": "Растворяемое твёрдое вещество взвешивают на аналитических весах",
          "ar": "تُوزن كتلة المادة الصلبة المراد إذابتها على ميزان حساس",
          "zh": "用精密天平称量待溶解固体的质量",
          "ku": "Girseya maddeya hişk a ku dê were helandin li ser terazûya hesas tê pîvandin"
        },
        {
          "tr": "Tartılan katı, beherde az miktar saf suyla tamamen çözülür",
          "en": "The weighed solid is dissolved completely in a small amount of pure water in a beaker",
          "de": "Der abgewogene Feststoff wird in einem Becherglas in wenig reinem Wasser vollständig gelöst",
          "fr": "On dissout complètement le solide pesé dans un peu d'eau pure, dans un bécher",
          "ru": "Навеску полностью растворяют в небольшом количестве дистиллированной воды в химическом стакане",
          "ar": "تُذاب المادة الموزونة تمامًا في قليل من الماء النقي في كأس زجاجية",
          "zh": "把称好的固体放入烧杯，用少量纯水使其完全溶解",
          "ku": "Maddeya pîvayî di beherê de bi hindik ava paqij bi tevahî tê helandin"
        },
        {
          "tr": "Çözelti, istenen hacimdeki balon jojeye aktarılır",
          "en": "The solution is transferred to a volumetric flask of the required volume",
          "de": "Die Lösung wird in einen Messkolben mit dem gewünschten Volumen überführt",
          "fr": "On transvase la solution dans une fiole jaugée du volume voulu",
          "ru": "Раствор переносят в мерную колбу нужного объёма",
          "ar": "يُنقل المحلول إلى دورق حجمي بالحجم المطلوب",
          "zh": "把溶液转移到所需容积的容量瓶中",
          "ku": "Çareserî tê veguhestin bo balona pîvanê ya bi qebareya xwestî"
        },
        {
          "tr": "Balon jojenin ölçü çizgisine kadar saf su eklenir ve çözelti çalkalanarak karıştırılır",
          "en": "Pure water is added up to the calibration mark of the flask and the solution is mixed by shaking",
          "de": "Bis zur Eichmarke des Messkolbens wird reines Wasser aufgefüllt und die Lösung durch Schütteln gemischt",
          "fr": "On complète avec de l'eau pure jusqu'au trait de jauge de la fiole et on agite pour homogénéiser",
          "ru": "Доливают дистиллированную воду до метки мерной колбы и перемешивают раствор, переворачивая колбу",
          "ar": "يُضاف الماء النقي حتى علامة المعايرة في الدورق الحجمي ويُرجّ المحلول ليتجانس",
          "zh": "加纯水至容量瓶的刻度线，摇匀",
          "ku": "Heta xeta pîvanê ya balona pîvanê ava paqij tê zêdekirin û çareserî bi hejandinê tê tevlihevkirin"
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
        "ru": "Расчёт при разбавлении раствора",
        "ar": "حساب تخفيف المحلول",
        "zh": "溶液稀释计算",
        "ku": "Hesabkirina Sivikkirina Çareseriyê"
      },
      "steps": [
        {
          "tr": "Başlangıç derişimi M1 ve hacmi V1 belirlenir",
          "en": "The initial concentration M1 and volume V1 are determined",
          "de": "Es werden die Anfangskonzentration M1 und das Volumen V1 bestimmt",
          "fr": "La concentration initiale M1 et le volume V1 sont déterminés",
          "ru": "Определяют начальную концентрацию M1 и объём V1",
          "ar": "يُحدَّد التركيز الابتدائي M1 والحجم V1",
          "zh": "确定初始浓度 M1 和体积 V1",
          "ku": "Hûrbûna destpêkê M1 û qebareya destpêkê V1 tên diyarkirin"
        },
        {
          "tr": "Üzerine eklenen su ile son hacim V2 bulunur",
          "en": "The final volume V2 is found by adding water to it.",
          "de": "Das endgültige Volumen V2 wird durch Zugabe von Wasser ermittelt.",
          "fr": "Le volume final V2 est trouvé en y ajoutant de l'eau.",
          "ru": "Находят конечный объём V2 с учётом добавленной воды",
          "ar": "يُحسب الحجم النهائي V2 بعد إضافة الماء",
          "zh": "加水后求出最终体积 V2",
          "ku": "Bi ava ku lê tê zêdekirin qebareya dawî V2 tê dîtin"
        },
        {
          "tr": "M1.V1 = M2.V2 eşitliği yazılır",
          "en": "The equation M1.V1 = M2.V2 is written",
          "de": "Die Gleichung M1.V1 = M2.V2 wird geschrieben",
          "fr": "On écrit l'égalité M1.V1 = M2.V2",
          "ru": "Записывают равенство M1.V1 = M2.V2",
          "ar": "تُكتب العلاقة M1.V1 = M2.V2",
          "zh": "写出等式 M1.V1 = M2.V2",
          "ku": "Wekheviya M1.V1 = M2.V2 tê nivîsandin"
        },
        {
          "tr": "Seyrelmiş yeni çözeltinin derişimi M2 hesaplanır",
          "en": "The concentration M2 of the new diluted solution is calculated",
          "de": "Die Konzentration M2 der neuen verdünnten Lösung wird berechnet",
          "fr": "La concentration M2 de la nouvelle solution diluée est calculée",
          "ru": "Вычисляют концентрацию M2 нового разбавленного раствора",
          "ar": "يُحسب التركيز M2 للمحلول المخفف الجديد",
          "zh": "计算稀释后新溶液的浓度 M2",
          "ku": "Hûrbûna M2 ya çareseriya nû ya sivikkirî tê hesibandin"
        }
      ]
    },
    {
      "id": "u14-s04",
      "title": {
        "tr": "Kütlece Yüzdeden Molariteye Geçiş",
        "en": "From Percent by Mass to Molarity",
        "de": "Von Massenprozent zur Molarität",
        "fr": "Du pourcentage en masse à la molarité",
        "ru": "Переход от массовой доли к молярной концентрации",
        "ar": "الانتقال من النسبة المئوية الكتلية إلى المولارية",
        "zh": "由质量分数换算物质的量浓度",
        "ku": "Ji Sedî bi Girseyî ber bi Molarîteyê"
      },
      "steps": [
        {
          "tr": "1 L (1000 mL) çözeltinin kütlesi özkütleden bulunur (m_çözelti = 1000 · d)",
          "en": "The mass of 1 L (1000 mL) of solution is found from the density (m_solution = 1000 · d)",
          "de": "Aus der Dichte wird die Masse von 1 L (1000 mL) Lösung bestimmt (m_Lösung = 1000 · d)",
          "fr": "On calcule la masse de 1 L (1000 mL) de solution à partir de la masse volumique (m_solution = 1000 · d)",
          "ru": "По плотности находят массу 1 л (1000 мл) раствора (m_раствора = 1000 · d)",
          "ar": "تُحسب كتلة 1 L (1000 mL) من المحلول من الكثافة (m_solution = 1000 · d)",
          "zh": "由密度求出 1 L(1000 mL)溶液的质量(m溶液 = 1000 · d)",
          "ku": "Girseya 1 L (1000 mL) çareseriyê ji tîrbûnê tê dîtin (m_çareserî = 1000 · d)"
        },
        {
          "tr": "Çözelti kütlesi kütlece yüzdeyle çarpılarak çözünenin kütlesi bulunur (m_çözünen = 1000 · d · % / 100)",
          "en": "The mass of solution is multiplied by the percent by mass to find the mass of solute (m_solute = 1000 · d · % / 100)",
          "de": "Die Masse der Lösung wird mit dem Massenprozent multipliziert; so erhält man die Masse des gelösten Stoffes (m_gelöst = 1000 · d · % / 100)",
          "fr": "On multiplie la masse de solution par le pourcentage en masse pour obtenir la masse de soluté (m_soluté = 1000 · d · % / 100)",
          "ru": "Массу раствора умножают на массовую долю и получают массу растворённого вещества (m_вещества = 1000 · d · % / 100)",
          "ar": "تُضرب كتلة المحلول في النسبة المئوية الكتلية فتنتج كتلة المذاب (m_solute = 1000 · d · % / 100)",
          "zh": "用溶液质量乘以质量分数，求出溶质的质量(m溶质 = 1000 · d · % / 100)",
          "ku": "Girseya çareseriyê bi ji sedî bi girseyî tê pirjimarkirin û girseya çareserbûyî tê dîtin (m_çareserbûyî = 1000 · d · % / 100)"
        },
        {
          "tr": "Çözünenin kütlesi mol kütlesine bölünerek mol sayısı bulunur (n = m_çözünen / MA)",
          "en": "The mass of solute is divided by the molar mass to find the number of moles (n = m_solute / MA)",
          "de": "Die Masse des gelösten Stoffes wird durch die Molmasse geteilt; so erhält man die Stoffmenge (n = m_gelöst / MA)",
          "fr": "On divise la masse de soluté par la masse molaire pour obtenir le nombre de moles (n = m_soluté / MA)",
          "ru": "Массу растворённого вещества делят на молярную массу и получают число молей (n = m_вещества / MA)",
          "ar": "تُقسم كتلة المذاب على الكتلة المولية فينتج عدد المولات (n = m_solute / MA)",
          "zh": "用溶质的质量除以摩尔质量，求出物质的量(n = m溶质 / MA)",
          "ku": "Girseya çareserbûyî li ser girseya molar tê dabeşkirin û hejmara molan tê dîtin (n = m_çareserbûyî / MA)"
        },
        {
          "tr": "1 L çözeltideki bu mol sayısı molarite olarak yazılır (M = 10 · d · % / MA)",
          "en": "This number of moles in 1 L of solution is written as the molarity (M = 10 · d · % / MA)",
          "de": "Diese Stoffmenge in 1 L Lösung wird als Molarität angegeben (M = 10 · d · % / MA)",
          "fr": "Ce nombre de moles dans 1 L de solution est la molarité (M = 10 · d · % / MA)",
          "ru": "Это число молей в 1 л раствора записывают как молярность (M = 10 · d · % / MA)",
          "ar": "يُكتب عدد المولات هذا في 1 L من المحلول على أنه المولارية (M = 10 · d · % / MA)",
          "zh": "1 L 溶液中的这一物质的量即为物质的量浓度(M = 10 · d · % / MA)",
          "ku": "Ev hejmara molan a di 1 L çareseriyê de wek molarîte tê nivîsandin (M = 10 · d · % / MA)"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u14-twin01",
      "stem": {
        "tr": "0,4 M'lık 200 mL Ca(NO3)2 çözeltisi ile 0,2 M'lık 300 mL NaNO3 çözeltisi karıştırılıyor. Tuzların suda tamamen iyonlaştığı ve hacimlerin toplanabildiği kabul edildiğine göre, son çözeltideki NO3- iyonu derişimi kaç molardır?",
        "en": "200 mL of 0.4 M Ca(NO3)2 solution is mixed with 300 mL of 0.2 M NaNO3 solution. Assuming the salts are completely dissociated and the volumes are additive, what is the molar concentration of NO3- ions in the final solution?",
        "de": "200 mL einer 0,4 M Ca(NO3)2-Lösung werden mit 300 mL einer 0,2 M NaNO3-Lösung gemischt. Die Salze sind vollständig dissoziiert und die Volumina additiv. Wie groß ist die molare Konzentration der NO3--Ionen in der Endlösung?",
        "fr": "On mélange 200 mL d'une solution de Ca(NO3)2 à 0,4 M avec 300 mL d'une solution de NaNO3 à 0,2 M. En admettant que les sels sont totalement dissociés et que les volumes s'additionnent, quelle est la concentration molaire des ions NO3- dans la solution finale ?",
        "ru": "Смешивают 200 мл 0,4 M раствора Ca(NO3)2 и 300 мл 0,2 M раствора NaNO3. Считая, что соли полностью диссоциированы, а объёмы складываются, определите молярную концентрацию ионов NO3- в полученном растворе.",
        "ar": "يُخلط 200 mL من محلول Ca(NO3)2 تركيزه 0.4 M مع 300 mL من محلول NaNO3 تركيزه 0.2 M. بافتراض أن الملحين يتأينان تمامًا وأن الحجوم تُجمع، ما التركيز المولاري لأيون NO3- في المحلول النهائي؟",
        "zh": "把 200 mL 0.4 M 的 Ca(NO3)2 溶液与 300 mL 0.2 M 的 NaNO3 溶液混合。假设盐完全电离且体积可以相加，最终溶液中 NO3- 离子的物质的量浓度是多少？",
        "ku": "200 mL çareseriya Ca(NO3)2 ya 0,4 M bi 300 mL çareseriya NaNO3 ya 0,2 M re tê tevlihevkirin. Bi qebûlkirina ku xwê bi tevahî îyonîze dibin û qebare li hev zêde dibin, hûrbûna molar a îyona NO3- di çareseriya dawî de çend M e?"
      },
      "options": [
        {
          "tr": "0,44 M",
          "en": "0.44 M",
          "de": "0,44 M",
          "fr": "0,44 M",
          "ru": "0,44 M",
          "ar": "0.44 M",
          "zh": "0.44 M",
          "ku": "0,44 M"
        },
        {
          "tr": "0,28 M",
          "en": "0.28 M",
          "de": "0,28 M",
          "fr": "0,28 M",
          "ru": "0,28 M",
          "ar": "0.28 M",
          "zh": "0.28 M",
          "ku": "0,28 M"
        },
        {
          "tr": "0,20 M",
          "en": "0.20 M",
          "de": "0,20 M",
          "fr": "0,20 M",
          "ru": "0,20 M",
          "ar": "0.20 M",
          "zh": "0.20 M",
          "ku": "0,20 M"
        },
        {
          "tr": "0,60 M",
          "en": "0.60 M",
          "de": "0,60 M",
          "fr": "0,60 M",
          "ru": "0,60 M",
          "ar": "0.60 M",
          "zh": "0.60 M",
          "ku": "0,60 M"
        },
        {
          "tr": "0,50 M",
          "en": "0.50 M",
          "de": "0,50 M",
          "fr": "0,50 M",
          "ru": "0,50 M",
          "ar": "0.50 M",
          "zh": "0.50 M",
          "ku": "0,50 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Her Ca(NO3)2 birimi 2, her NaNO3 birimi 1 NO3- iyonu verir: n(NO3-) = 2 · 0,4 · 0,2 + 1 · 0,2 · 0,3 = 0,16 + 0,06 = 0,22 mol. Toplam hacim 0,2 + 0,3 = 0,5 L olduğundan [NO3-] = 0,22 / 0,5 = 0,44 M bulunur. Ca(NO3)2'deki 2 katsayısını unutan öğrenci (0,08 + 0,06) / 0,5 = 0,28 M bulur.",
        "en": "Each Ca(NO3)2 unit gives 2 NO3- ions and each NaNO3 unit gives 1: n(NO3-) = 2 · 0.4 · 0.2 + 1 · 0.2 · 0.3 = 0.16 + 0.06 = 0.22 mol. The total volume is 0.2 + 0.3 = 0.5 L, so [NO3-] = 0.22 / 0.5 = 0.44 M. A student who forgets the factor 2 for Ca(NO3)2 gets (0.08 + 0.06) / 0.5 = 0.28 M.",
        "de": "Jede Formeleinheit Ca(NO3)2 liefert 2 NO3--Ionen, jede Formeleinheit NaNO3 liefert 1: n(NO3-) = 2 · 0,4 · 0,2 + 1 · 0,2 · 0,3 = 0,16 + 0,06 = 0,22 mol. Das Gesamtvolumen beträgt 0,2 + 0,3 = 0,5 L, also [NO3-] = 0,22 / 0,5 = 0,44 M. Wer den Faktor 2 bei Ca(NO3)2 vergisst, erhält (0,08 + 0,06) / 0,5 = 0,28 M.",
        "fr": "Chaque unité Ca(NO3)2 fournit 2 ions NO3- et chaque unité NaNO3 en fournit 1 : n(NO3-) = 2 · 0,4 · 0,2 + 1 · 0,2 · 0,3 = 0,16 + 0,06 = 0,22 mol. Le volume total vaut 0,2 + 0,3 = 0,5 L, donc [NO3-] = 0,22 / 0,5 = 0,44 M. L'élève qui oublie le facteur 2 pour Ca(NO3)2 trouve (0,08 + 0,06) / 0,5 = 0,28 M.",
        "ru": "Каждая формульная единица Ca(NO3)2 даёт 2 иона NO3-, а NaNO3 — 1: n(NO3-) = 2 · 0,4 · 0,2 + 1 · 0,2 · 0,3 = 0,16 + 0,06 = 0,22 моль. Общий объём 0,2 + 0,3 = 0,5 л, поэтому [NO3-] = 0,22 / 0,5 = 0,44 M. Ученик, забывший множитель 2 для Ca(NO3)2, получит (0,08 + 0,06) / 0,5 = 0,28 M.",
        "ar": "كل وحدة Ca(NO3)2 تعطي 2 من أيونات NO3- وكل وحدة NaNO3 تعطي 1: n(NO3-) = 2 · 0.4 · 0.2 + 1 · 0.2 · 0.3 = 0.16 + 0.06 = 0.22 mol. الحجم الكلي 0.2 + 0.3 = 0.5 L، إذن [NO3-] = 0.22 / 0.5 = 0.44 M. الطالب الذي ينسى المعامل 2 لـ Ca(NO3)2 يحصل على (0.08 + 0.06) / 0.5 = 0.28 M.",
        "zh": "每个 Ca(NO3)2 单元提供 2 个 NO3-，每个 NaNO3 单元提供 1 个：n(NO3-) = 2 · 0.4 · 0.2 + 1 · 0.2 · 0.3 = 0.16 + 0.06 = 0.22 mol。总体积为 0.2 + 0.3 = 0.5 L，所以 [NO3-] = 0.22 / 0.5 = 0.44 M。忘记 Ca(NO3)2 的系数 2 的学生会得到 (0.08 + 0.06) / 0.5 = 0.28 M。",
        "ku": "Her yekeya Ca(NO3)2 2 îyonên NO3-, her yekeya NaNO3 jî 1 îyon dide: n(NO3-) = 2 · 0,4 · 0,2 + 1 · 0,2 · 0,3 = 0,16 + 0,06 = 0,22 mol. Qebareya giştî 0,2 + 0,3 = 0,5 L e, loma [NO3-] = 0,22 / 0,5 = 0,44 M e. Xwendekarê ku faktora 2 ya Ca(NO3)2 ji bîr dike (0,08 + 0,06) / 0,5 = 0,28 M dibîne."
      }
    },
    {
      "id": "u14-twin02",
      "stem": {
        "tr": "Özkütlesi 1,2 g/mL olan kütlece %36,5'lik derişik HCl çözeltisinin molar derişimi kaç M'dır? (HCl: 36,5 g/mol)",
        "en": "What is the molar concentration of a concentrated HCl solution that is 36.5% HCl by mass and has a density of 1.2 g/mL? (HCl: 36.5 g/mol)",
        "de": "Wie groß ist die molare Konzentration einer konzentrierten HCl-Lösung mit einem Massenanteil von 36,5 % und einer Dichte von 1,2 g/mL? (HCl: 36,5 g/mol)",
        "fr": "Quelle est la concentration molaire d'une solution concentrée de HCl à 36,5 % en masse et de masse volumique 1,2 g/mL ? (HCl : 36,5 g/mol)",
        "ru": "Какова молярная концентрация концентрированного раствора HCl с массовой долей 36,5 % и плотностью 1,2 г/мл? (HCl: 36,5 г/моль)",
        "ar": "ما التركيز المولاري لمحلول HCl المركز الذي نسبته الكتلية 36.5% وكثافته 1.2 g/mL؟ (HCl: 36.5 g/mol)",
        "zh": "质量分数为 36.5%、密度为 1.2 g/mL 的浓盐酸的物质的量浓度是多少 M？(HCl：36.5 g/mol)",
        "ku": "Hûrbûna molar a çareseriya HCl ya konsantrekirî ku ji sedî 36,5 bi girseyî ye û tîrbûna wê 1,2 g/mL ye çend M e? (HCl: 36,5 g/mol)"
      },
      "options": [
        {
          "tr": "12,0 M",
          "en": "12.0 M",
          "de": "12,0 M",
          "fr": "12,0 M",
          "ru": "12,0 M",
          "ar": "12.0 M",
          "zh": "12.0 M",
          "ku": "12,0 M"
        },
        {
          "tr": "6,0 M",
          "en": "6.0 M",
          "de": "6,0 M",
          "fr": "6,0 M",
          "ru": "6,0 M",
          "ar": "6.0 M",
          "zh": "6.0 M",
          "ku": "6,0 M"
        },
        {
          "tr": "1,2 M",
          "en": "1.2 M",
          "de": "1,2 M",
          "fr": "1,2 M",
          "ru": "1,2 M",
          "ar": "1.2 M",
          "zh": "1.2 M",
          "ku": "1,2 M"
        },
        {
          "tr": "10,0 M",
          "en": "10.0 M",
          "de": "10,0 M",
          "fr": "10,0 M",
          "ru": "10,0 M",
          "ar": "10.0 M",
          "zh": "10.0 M",
          "ku": "10,0 M"
        },
        {
          "tr": "3,65 M",
          "en": "3.65 M",
          "de": "3,65 M",
          "fr": "3,65 M",
          "ru": "3,65 M",
          "ar": "3.65 M",
          "zh": "3.65 M",
          "ku": "3,65 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "1 L (1000 mL) çözeltinin kütlesi 1000 · 1,2 = 1200 g'dır. Bunun %36,5'i HCl'dir: 1200 · 0,365 = 438 g. n(HCl) = 438 / 36,5 = 12 mol olduğundan derişim 12,0 M'dır; aynı sonuç M = (% · d · 10) / MA = (36,5 · 1,2 · 10) / 36,5 bağıntısından da bulunur. Özkütleyi hesaba katmayıp 1 L çözeltiyi 1000 g alan öğrenci 10,0 M bulur.",
        "en": "The mass of 1 L (1000 mL) of solution is 1000 · 1.2 = 1200 g. Of this, 36.5% is HCl: 1200 · 0.365 = 438 g. n(HCl) = 438 / 36.5 = 12 mol, so the concentration is 12.0 M; the same result follows from M = (% · d · 10) / MA = (36.5 · 1.2 · 10) / 36.5. A student who ignores the density and takes 1 L of solution as 1000 g gets 10.0 M.",
        "de": "Die Masse von 1 L (1000 mL) Lösung beträgt 1000 · 1,2 = 1200 g. Davon sind 36,5 % HCl: 1200 · 0,365 = 438 g. n(HCl) = 438 / 36,5 = 12 mol, die Konzentration ist also 12,0 M; dasselbe ergibt M = (% · d · 10) / MA = (36,5 · 1,2 · 10) / 36,5. Wer die Dichte nicht berücksichtigt und 1 L Lösung als 1000 g ansetzt, erhält 10,0 M.",
        "fr": "La masse de 1 L (1000 mL) de solution vaut 1000 · 1,2 = 1200 g. HCl en représente 36,5 % : 1200 · 0,365 = 438 g. n(HCl) = 438 / 36,5 = 12 mol, donc la concentration est 12,0 M ; on retrouve ce résultat avec M = (% · d · 10) / MA = (36,5 · 1,2 · 10) / 36,5. L'élève qui néglige la masse volumique et prend 1 L de solution pour 1000 g trouve 10,0 M.",
        "ru": "Масса 1 л (1000 мл) раствора равна 1000 · 1,2 = 1200 г. Из них 36,5 % приходится на HCl: 1200 · 0,365 = 438 г. n(HCl) = 438 / 36,5 = 12 моль, значит, концентрация 12,0 M; тот же результат даёт формула M = (% · d · 10) / MA = (36,5 · 1,2 · 10) / 36,5. Ученик, не учитывающий плотность и принимающий массу 1 л раствора за 1000 г, получит 10,0 M.",
        "ar": "كتلة 1 L (1000 mL) من المحلول تساوي 1000 · 1.2 = 1200 g. ومنها 36.5% HCl: 1200 · 0.365 = 438 g. n(HCl) = 438 / 36.5 = 12 mol، فالتركيز 12.0 M؛ وتعطي العلاقة M = (% · d · 10) / MA = (36.5 · 1.2 · 10) / 36.5 النتيجة نفسها. الطالب الذي يهمل الكثافة ويعدّ 1 L من المحلول 1000 g يحصل على 10.0 M.",
        "zh": "1 L(1000 mL)溶液的质量为 1000 · 1.2 = 1200 g。其中 36.5% 是 HCl：1200 · 0.365 = 438 g。n(HCl) = 438 / 36.5 = 12 mol，所以浓度为 12.0 M；用 M = (% · d · 10) / MA = (36.5 · 1.2 · 10) / 36.5 也得到同样结果。不考虑密度、把 1 L 溶液当作 1000 g 的学生会得到 10.0 M。",
        "ku": "Girseya 1 L (1000 mL) çareseriyê 1000 · 1,2 = 1200 g e. Ji vê ji sedî 36,5 HCl e: 1200 · 0,365 = 438 g. n(HCl) = 438 / 36,5 = 12 mol e, loma hûrbûn 12,0 M e; heman encam ji M = (% · d · 10) / MA = (36,5 · 1,2 · 10) / 36,5 jî tê dîtin. Xwendekarê ku tîrbûnê nahesibîne û 1 L çareseriyê wek 1000 g digire 10,0 M dibîne."
      }
    },
    {
      "id": "u14-twin03",
      "stem": {
        "tr": "8 g NaOH katısı saf suda çözülerek hacmi 250 mL olan bir çözelti hazırlanıyor. Bu çözeltinin molar derişimi kaç M'dır? (NaOH: 40 g/mol)",
        "en": "A solution with a volume of 250 mL is prepared by dissolving 8 g of solid NaOH in pure water. What is the molar concentration of this solution in M? (NaOH: 40 g/mol)",
        "de": "Durch Lösen von 8 g festem NaOH in reinem Wasser wird eine Lösung mit einem Volumen von 250 mL hergestellt. Welche molare Konzentration (in M) hat diese Lösung? (NaOH: 40 g/mol)",
        "fr": "On prépare une solution de 250 mL en dissolvant 8 g de NaOH solide dans de l'eau pure. Quelle est la concentration molaire de cette solution, en M ? (NaOH : 40 g/mol)",
        "ru": "Растворив 8 г твёрдого NaOH в чистой воде, приготовили 250 мл раствора. Чему равна молярная концентрация этого раствора (M)? (NaOH: 40 г/моль)",
        "ar": "يُحضَّر محلول حجمه 250 mL بإذابة 8 g من NaOH الصلب في ماء نقي. ما التركيز المولاري لهذا المحلول بوحدة M؟ (NaOH: 40 g/mol)",
        "zh": "将 8 g 固体 NaOH 溶于纯水，配成 250 mL 溶液。该溶液的物质的量浓度是多少 M？(NaOH：40 g/mol)",
        "ku": "Bi helandina 8 g NaOH ya hişk di ava paqij de çareseriyek bi qebareya 250 mL tê amadekirin. Hûrbûna molarî ya vê çareseriyê çend M e? (NaOH: 40 g/mol)"
      },
      "options": [
        {
          "tr": "0,032 M",
          "en": "0.032 M",
          "de": "0,032 M",
          "fr": "0,032 M",
          "ru": "0,032 M",
          "ar": "0.032 M",
          "zh": "0.032 M",
          "ku": "0,032 M"
        },
        {
          "tr": "0,2 M",
          "en": "0.2 M",
          "de": "0,2 M",
          "fr": "0,2 M",
          "ru": "0,2 M",
          "ar": "0.2 M",
          "zh": "0.2 M",
          "ku": "0,2 M"
        },
        {
          "tr": "0,8 M",
          "en": "0.8 M",
          "de": "0,8 M",
          "fr": "0,8 M",
          "ru": "0,8 M",
          "ar": "0.8 M",
          "zh": "0.8 M",
          "ku": "0,8 M"
        },
        {
          "tr": "3,2 M",
          "en": "3.2 M",
          "de": "3,2 M",
          "fr": "3,2 M",
          "ru": "3,2 M",
          "ar": "3.2 M",
          "zh": "3.2 M",
          "ku": "3,2 M"
        },
        {
          "tr": "32 M",
          "en": "32 M",
          "de": "32 M",
          "fr": "32 M",
          "ru": "32 M",
          "ar": "32 M",
          "zh": "32 M",
          "ku": "32 M"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n(NaOH) = 8 / 40 = 0,2 mol; V = 250 mL = 0,25 L. M = n / V = 0,2 / 0,25 = 0,8 M. 0,2 M sonucu mol sayısını derişim sanmaktan, 0,032 M sonucu hacmi litreye çevirmeden 250'ye bölmekten, 32 M sonucu kütleyi (g) doğrudan litreye bölmekten kaynaklanır.",
        "en": "n(NaOH) = 8 / 40 = 0.2 mol; V = 250 mL = 0.25 L. M = n / V = 0.2 / 0.25 = 0.8 M. The result 0.2 M comes from mistaking the number of moles for the concentration, 0.032 M from dividing by 250 without converting to litres, and 32 M from dividing the mass in grams directly by the volume in litres.",
        "de": "n(NaOH) = 8 / 40 = 0,2 mol; V = 250 mL = 0,25 L. M = n / V = 0,2 / 0,25 = 0,8 M. 0,2 M entsteht, wenn man die Stoffmenge für die Konzentration hält, 0,032 M, wenn man ohne Umrechnung in Liter durch 250 teilt, und 32 M, wenn man die Masse in Gramm direkt durch das Volumen in Litern teilt.",
        "fr": "n(NaOH) = 8 / 40 = 0,2 mol ; V = 250 mL = 0,25 L. M = n / V = 0,2 / 0,25 = 0,8 M. Le résultat 0,2 M vient de la confusion entre nombre de moles et concentration, 0,032 M d'une division par 250 sans conversion en litres, et 32 M de la division directe de la masse en grammes par le volume en litres.",
        "ru": "n(NaOH) = 8 / 40 = 0,2 моль; V = 250 мл = 0,25 л. M = n / V = 0,2 / 0,25 = 0,8 M. Ответ 0,2 M получается, если принять число молей за концентрацию, 0,032 M — если делить на 250 без перевода в литры, 32 M — если делить массу в граммах прямо на объём в литрах.",
        "ar": "n(NaOH) = 8 / 40 = 0.2 mol؛ V = 250 mL = 0.25 L. M = n / V = 0.2 / 0.25 = 0.8 M. النتيجة 0.2 M تنتج عن اعتبار عدد المولات هو التركيز، و0.032 M عن القسمة على 250 دون التحويل إلى لتر، و32 M عن قسمة الكتلة بالغرام مباشرة على الحجم باللتر.",
        "zh": "n(NaOH) = 8 / 40 = 0.2 mol；V = 250 mL = 0.25 L。M = n / V = 0.2 / 0.25 = 0.8 M。得到 0.2 M 是把物质的量当成了浓度，0.032 M 是没有换算成升就除以 250，32 M 是直接用质量(g)除以体积(L)。",
        "ku": "n(NaOH) = 8 / 40 = 0,2 mol; V = 250 mL = 0,25 L. M = n / V = 0,2 / 0,25 = 0,8 M. Encama 0,2 M ji hesibandina hejmara molan wek hûrbûnê, 0,032 M ji dabeşkirina li ser 250 bêyî guhertina bo lître, û 32 M ji dabeşkirina rasterast a girseyê (g) li ser lître tê."
      }
    },
    {
      "id": "u14-twin04",
      "stem": {
        "tr": "23,4 g NaCl, 200 g suda tamamen çözünüyor. Oluşan çözeltinin molal derişimi (molalitesi) kaç molaldir? (NaCl: 58,5 g/mol)",
        "en": "23.4 g of NaCl dissolves completely in 200 g of water. What is the molal concentration (molality) of the resulting solution, in mol/kg? (NaCl: 58.5 g/mol)",
        "de": "23,4 g NaCl lösen sich vollständig in 200 g Wasser. Welche Molalität (in mol/kg) hat die entstandene Lösung? (NaCl: 58,5 g/mol)",
        "fr": "23,4 g de NaCl se dissolvent complètement dans 200 g d'eau. Quelle est la molalité de la solution obtenue, en mol/kg ? (NaCl : 58,5 g/mol)",
        "ru": "23,4 г NaCl полностью растворили в 200 г воды. Чему равна моляльность полученного раствора (моль/кг)? (NaCl: 58,5 г/моль)",
        "ar": "يذوب 23.4 g من NaCl ذوبانًا تامًا في 200 g من الماء. ما التركيز المولالي (المولالية) للمحلول الناتج بوحدة mol/kg؟ (NaCl: 58.5 g/mol)",
        "zh": "23.4 g NaCl 完全溶解在 200 g 水中。所得溶液的质量摩尔浓度是多少 mol/kg？(NaCl：58.5 g/mol)",
        "ku": "23,4 g NaCl bi tevahî di 200 g avê de dihele. Hûrbûna molal (molalîte) ya çareseriya çêbûyî çend mol/kg e? (NaCl: 58,5 g/mol)"
      },
      "options": [
        {
          "tr": "0,002 m",
          "en": "0.002 m",
          "de": "0,002 m",
          "fr": "0,002 m",
          "ru": "0,002 m",
          "ar": "0.002 m",
          "zh": "0.002 m",
          "ku": "0,002 m"
        },
        {
          "tr": "0,117 m",
          "en": "0.117 m",
          "de": "0,117 m",
          "fr": "0,117 m",
          "ru": "0,117 m",
          "ar": "0.117 m",
          "zh": "0.117 m",
          "ku": "0,117 m"
        },
        {
          "tr": "0,4 m",
          "en": "0.4 m",
          "de": "0,4 m",
          "fr": "0,4 m",
          "ru": "0,4 m",
          "ar": "0.4 m",
          "zh": "0.4 m",
          "ku": "0,4 m"
        },
        {
          "tr": "1,8 m",
          "en": "1.8 m",
          "de": "1,8 m",
          "fr": "1,8 m",
          "ru": "1,8 m",
          "ar": "1.8 m",
          "zh": "1.8 m",
          "ku": "1,8 m"
        },
        {
          "tr": "2,0 m",
          "en": "2.0 m",
          "de": "2,0 m",
          "fr": "2,0 m",
          "ru": "2,0 m",
          "ar": "2.0 m",
          "zh": "2.0 m",
          "ku": "2,0 m"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "n(NaCl) = 23,4 / 58,5 = 0,4 mol; çözücü kütlesi = 200 g = 0,2 kg. m = n / kg çözücü = 0,4 / 0,2 = 2,0 molal. Mol sayısı çözücü yerine çözelti kütlesine (223,4 g) bölünürse yaklaşık 1,8; gram kilograma çevrilmezse 0,002; kütle kütleye bölünürse 0,117 bulunur. 0,4 ise derişim değil, mol sayısıdır.",
        "en": "n(NaCl) = 23.4 / 58.5 = 0.4 mol; mass of solvent = 200 g = 0.2 kg. m = n / kg solvent = 0.4 / 0.2 = 2.0 mol/kg. Dividing by the mass of solution (223.4 g) instead of the solvent gives about 1.8; not converting grams to kilograms gives 0.002; dividing mass by mass gives 0.117. The value 0.4 is the number of moles, not a concentration.",
        "de": "n(NaCl) = 23,4 / 58,5 = 0,4 mol; Masse des Lösungsmittels = 200 g = 0,2 kg. b = n / kg Lösungsmittel = 0,4 / 0,2 = 2,0 mol/kg. Teilt man durch die Lösungsmasse (223,4 g) statt durch das Lösungsmittel, erhält man etwa 1,8; ohne Umrechnung von g in kg 0,002; teilt man Masse durch Masse, 0,117. 0,4 ist die Stoffmenge, keine Konzentration.",
        "fr": "n(NaCl) = 23,4 / 58,5 = 0,4 mol ; masse de solvant = 200 g = 0,2 kg. m = n / kg de solvant = 0,4 / 0,2 = 2,0 mol/kg. En divisant par la masse de solution (223,4 g) au lieu de celle du solvant, on obtient environ 1,8 ; sans convertir les grammes en kilogrammes, 0,002 ; en divisant une masse par une masse, 0,117. La valeur 0,4 est un nombre de moles, pas une concentration.",
        "ru": "n(NaCl) = 23,4 / 58,5 = 0,4 моль; масса растворителя = 200 г = 0,2 кг. m = n / кг растворителя = 0,4 / 0,2 = 2,0 моль/кг. Если делить на массу раствора (223,4 г), а не растворителя, получится около 1,8; без перевода граммов в килограммы — 0,002; при делении массы на массу — 0,117. Значение 0,4 — это число молей, а не концентрация.",
        "ar": "n(NaCl) = 23.4 / 58.5 = 0.4 mol؛ كتلة المذيب = 200 g = 0.2 kg. المولالية = n / kg مذيب = 0.4 / 0.2 = 2.0 mol/kg. القسمة على كتلة المحلول (223.4 g) بدل المذيب تعطي نحو 1.8؛ وعدم تحويل الغرام إلى كيلوغرام يعطي 0.002؛ وقسمة كتلة على كتلة تعطي 0.117. أما 0.4 فهي عدد المولات وليست تركيزًا.",
        "zh": "n(NaCl) = 23.4 / 58.5 = 0.4 mol；溶剂质量 = 200 g = 0.2 kg。质量摩尔浓度 = n / 溶剂千克数 = 0.4 / 0.2 = 2.0 mol/kg。若除以溶液质量(223.4 g)而不是溶剂质量，约得 1.8；不把克换算成千克得 0.002；用质量除以质量得 0.117。0.4 是物质的量，不是浓度。",
        "ku": "n(NaCl) = 23,4 / 58,5 = 0,4 mol; girseya çareserker = 200 g = 0,2 kg. m = n / kg çareserker = 0,4 / 0,2 = 2,0 mol/kg. Ger li şûna çareserker li ser girseya çareseriyê (223,4 g) were dabeşkirin, nêzîkî 1,8; ger gram nebe kîlogram, 0,002; ger girse li ser girseyê were dabeşkirin, 0,117 tê dîtin. 0,4 jî hejmara molan e, ne hûrbûn e."
      }
    },
    {
      "id": "u14-twin05",
      "stem": {
        "tr": "Bir içme suyu örneğinin 250 g'ında 0,5 mg florür (F-) iyonu bulunmaktadır. Bu sudaki F- iyonu derişimi kaç ppm'dir?",
        "en": "A 250 g sample of drinking water contains 0.5 mg of fluoride (F-) ions. What is the F- concentration of this water in ppm?",
        "de": "Eine Trinkwasserprobe von 250 g enthält 0,5 mg Fluorid-Ionen (F-). Wie groß ist die F--Konzentration dieses Wassers in ppm?",
        "fr": "Un échantillon de 250 g d'eau potable contient 0,5 mg d'ions fluorure (F-). Quelle est la concentration en F- de cette eau, en ppm ?",
        "ru": "В пробе питьевой воды массой 250 г содержится 0,5 мг фторид-ионов (F-). Какова концентрация F- в этой воде в ppm?",
        "ar": "تحتوي عينة كتلتها 250 g من ماء الشرب على 0.5 mg من أيونات الفلوريد (F-). ما تركيز F- في هذا الماء بوحدة ppm؟",
        "zh": "250 g 饮用水样品中含有 0.5 mg 氟离子(F-)。该水中 F- 的浓度是多少 ppm？",
        "ku": "Di 250 g nimûneya ava vexwarinê de 0,5 mg îyonên florîdê (F-) hene. Hûrbûna F- ya vê avê çend ppm e?"
      },
      "options": [
        {
          "tr": "0,002 ppm",
          "en": "0.002 ppm",
          "de": "0,002 ppm",
          "fr": "0,002 ppm",
          "ru": "0,002 ppm",
          "ar": "0.002 ppm",
          "zh": "0.002 ppm",
          "ku": "0,002 ppm"
        },
        {
          "tr": "2 ppm",
          "en": "2 ppm",
          "de": "2 ppm",
          "fr": "2 ppm",
          "ru": "2 ppm",
          "ar": "2 ppm",
          "zh": "2 ppm",
          "ku": "2 ppm"
        },
        {
          "tr": "20 ppm",
          "en": "20 ppm",
          "de": "20 ppm",
          "fr": "20 ppm",
          "ru": "20 ppm",
          "ar": "20 ppm",
          "zh": "20 ppm",
          "ku": "20 ppm"
        },
        {
          "tr": "200 ppm",
          "en": "200 ppm",
          "de": "200 ppm",
          "fr": "200 ppm",
          "ru": "200 ppm",
          "ar": "200 ppm",
          "zh": "200 ppm",
          "ku": "200 ppm"
        },
        {
          "tr": "2000 ppm",
          "en": "2000 ppm",
          "de": "2000 ppm",
          "fr": "2000 ppm",
          "ru": "2000 ppm",
          "ar": "2000 ppm",
          "zh": "2000 ppm",
          "ku": "2000 ppm"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "ppm = çözünen kütlesi (mg) / çözelti kütlesi (kg). 250 g = 0,25 kg olduğundan ppm = 0,5 / 0,25 = 2 ppm. Aynı sonuç (0,5·10^-3 g / 250 g)·10^6 = 2 ile de bulunur. Kütleyi kilograma çevirmeden mg/g hesaplayan 0,002; miligramı gram gibi alıp 10^6 ile çarpan 2000 bulur.",
        "en": "ppm = mass of solute (mg) / mass of solution (kg). Since 250 g = 0.25 kg, ppm = 0.5 / 0.25 = 2 ppm. The same result follows from (0.5·10^-3 g / 250 g)·10^6 = 2. Calculating mg/g without converting to kilograms gives 0.002; treating milligrams as grams and multiplying by 10^6 gives 2000.",
        "de": "ppm = Masse des gelösten Stoffes (mg) / Masse der Lösung (kg). Da 250 g = 0,25 kg sind, ist ppm = 0,5 / 0,25 = 2 ppm. Dasselbe ergibt (0,5·10^-3 g / 250 g)·10^6 = 2. Wer mg/g ohne Umrechnung in Kilogramm rechnet, erhält 0,002; wer Milligramm wie Gramm behandelt und mit 10^6 multipliziert, erhält 2000.",
        "fr": "ppm = masse de soluté (mg) / masse de solution (kg). Comme 250 g = 0,25 kg, ppm = 0,5 / 0,25 = 2 ppm. On retrouve ce résultat avec (0,5·10^-3 g / 250 g)·10^6 = 2. Calculer des mg/g sans convertir en kilogrammes donne 0,002 ; prendre les milligrammes pour des grammes et multiplier par 10^6 donne 2000.",
        "ru": "ppm = масса растворённого вещества (мг) / масса раствора (кг). Так как 250 г = 0,25 кг, ppm = 0,5 / 0,25 = 2 ppm. То же даёт (0,5·10^-3 г / 250 г)·10^6 = 2. Расчёт в мг/г без перевода в килограммы даёт 0,002; если принять миллиграммы за граммы и умножить на 10^6, получится 2000.",
        "ar": "ppm = كتلة المذاب (mg) / كتلة المحلول (kg). وبما أن 250 g = 0.25 kg فإن ppm = 0.5 / 0.25 = 2 ppm. وتُعطي العلاقة (0.5·10^-3 g / 250 g)·10^6 = 2 النتيجة نفسها. حساب mg/g دون التحويل إلى كيلوغرام يعطي 0.002؛ واعتبار المليغرام غرامًا ثم الضرب في 10^6 يعطي 2000.",
        "zh": "ppm = 溶质质量(mg)/ 溶液质量(kg)。250 g = 0.25 kg，所以 ppm = 0.5 / 0.25 = 2 ppm。也可用 (0.5·10^-3 g / 250 g)·10^6 = 2 得到相同结果。不换算成千克而算 mg/g 得 0.002；把毫克当成克再乘以 10^6 得 2000。",
        "ku": "ppm = girseya çareserbûyî (mg) / girseya çareseriyê (kg). Ji ber ku 250 g = 0,25 kg e, ppm = 0,5 / 0,25 = 2 ppm. Heman encam bi (0,5·10^-3 g / 250 g)·10^6 = 2 jî tê dîtin. Kesê ku bêyî guhertina bo kîlogram mg/g hesab dike 0,002, kesê ku mîlîgram wek gram digire û bi 10^6 zêde dike 2000 dibîne."
      }
    },
    {
      "id": "u14-twin06",
      "stem": {
        "tr": "Kapalı bir kapta bulunan doymamış KNO3 sulu çözeltisi, buharlaşma ve çökme olmadan 20 °C'den 60 °C'ye ısıtılıyor. Bu işlemle ilgili; I. Çözeltinin molar derişimi bir miktar azalır. II. Çözeltinin molal derişimi artar. III. Çözeltideki KNO3'ün kütlece yüzdesi değişmez. yargılarından hangileri doğrudur?",
        "en": "An unsaturated aqueous KNO3 solution in a closed container is heated from 20 °C to 60 °C without evaporation or precipitation. Regarding this process: I. The molarity of the solution decreases slightly. II. The molality of the solution increases. III. The mass percentage of KNO3 in the solution does not change. Which of these statements are correct?",
        "de": "Eine ungesättigte wässrige KNO3-Lösung in einem geschlossenen Gefäß wird ohne Verdunstung und ohne Ausfällung von 20 °C auf 60 °C erwärmt. Zu diesem Vorgang: I. Die Molarität der Lösung nimmt etwas ab. II. Die Molalität der Lösung nimmt zu. III. Der Massenanteil (in %) von KNO3 in der Lösung ändert sich nicht. Welche Aussagen sind richtig?",
        "fr": "Une solution aqueuse insaturée de KNO3, dans un récipient fermé, est chauffée de 20 °C à 60 °C sans évaporation ni précipitation. À propos de cette opération : I. La molarité de la solution diminue légèrement. II. La molalité de la solution augmente. III. Le pourcentage massique de KNO3 dans la solution ne change pas. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Ненасыщенный водный раствор KNO3 в закрытом сосуде нагревают от 20 °C до 60 °C без испарения воды и выпадения осадка. Какие из утверждений об этом процессе верны? I. Молярная концентрация раствора немного уменьшается. II. Моляльность раствора увеличивается. III. Массовая доля (%) KNO3 в растворе не меняется.",
        "ar": "يُسخَّن محلول مائي غير مشبع من KNO3 في وعاء مغلق من 20 °C إلى 60 °C دون تبخر أو ترسب. بخصوص هذه العملية: I. تقل مولارية المحلول قليلًا. II. تزداد مولالية المحلول. III. لا تتغير النسبة المئوية الكتلية لـ KNO3 في المحلول. أيّ هذه العبارات صحيحة؟",
        "zh": "密闭容器中的不饱和 KNO3 水溶液在无蒸发、无析出的条件下从 20 °C 加热到 60 °C。关于此过程，有下列说法：I. 溶液的物质的量浓度略有减小。II. 溶液的质量摩尔浓度增大。III. 溶液中 KNO3 的质量分数不变。其中正确的是哪些？",
        "ku": "Çareseriya avî ya netêr a KNO3 ku di firaxeke girtî de ye, bêyî hilmbûn û niştinê ji 20 °C heta 60 °C tê germkirin. Derbarê vê pêvajoyê de: I. Molarîteya çareseriyê hinekî kêm dibe. II. Molalîteya çareseriyê zêde dibe. III. Sedeya girseyî ya KNO3 di çareseriyê de naguhere. Kîjan ji van gotinan rast in?"
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
        "tr": "I doğru: Isınan sıvı çözelti genleşir, mol sayısı aynı kalırken hacim büyüdüğü için molarite biraz azalır. II yanlış: Molalite mol sayısı / çözücü kütlesidir; ikisi de ısınmayla değişmediği için molalite sabittir. III doğru: Buharlaşma ve çökme olmadığından çözünen ve çözelti kütleleri değişmez, kütlece yüzde sabit kalır. Doğru yargılar I ve III'tür.",
        "en": "I is correct: the heated solution expands; the moles stay the same while the volume grows, so molarity decreases slightly. II is wrong: molality is moles / mass of solvent, and neither changes on heating, so molality is constant. III is correct: with no evaporation or precipitation the masses of solute and solution do not change, so the mass percentage stays constant. The correct statements are I and III.",
        "de": "I ist richtig: Die erwärmte Lösung dehnt sich aus; die Stoffmenge bleibt gleich, das Volumen wächst, daher sinkt die Molarität etwas. II ist falsch: Molalität ist Stoffmenge / Masse des Lösungsmittels; beides ändert sich beim Erwärmen nicht, die Molalität bleibt konstant. III ist richtig: Ohne Verdunstung und Ausfällung bleiben die Massen von gelöstem Stoff und Lösung gleich, der Massenanteil ist konstant. Richtig sind I und III.",
        "fr": "I est correcte : la solution chauffée se dilate ; le nombre de moles reste le même tandis que le volume augmente, donc la molarité diminue légèrement. II est fausse : la molalité vaut moles / masse de solvant, deux grandeurs qui ne changent pas au chauffage ; elle reste constante. III est correcte : sans évaporation ni précipitation, les masses de soluté et de solution ne changent pas, le pourcentage massique est constant. Les affirmations correctes sont I et III.",
        "ru": "I верно: при нагревании раствор расширяется; число молей не меняется, а объём растёт, поэтому молярность немного уменьшается. II неверно: моляльность — это число молей, делённое на массу растворителя, а обе величины при нагревании не меняются, поэтому моляльность постоянна. III верно: без испарения и выпадения осадка массы растворённого вещества и раствора не меняются, массовая доля постоянна. Верны I и III.",
        "ar": "I صحيحة: يتمدد المحلول عند تسخينه؛ يبقى عدد المولات ثابتًا بينما يكبر الحجم، فتقل المولارية قليلًا. II خاطئة: المولالية = عدد المولات / كتلة المذيب، ولا يتغير أيّ منهما بالتسخين، فتبقى المولالية ثابتة. III صحيحة: لعدم حدوث تبخر أو ترسب لا تتغير كتلتا المذاب والمحلول، فتبقى النسبة المئوية الكتلية ثابتة. العبارتان الصحيحتان هما I وIII.",
        "zh": "I 正确：溶液受热膨胀，溶质的物质的量不变而体积增大，所以物质的量浓度略有减小。II 错误：质量摩尔浓度 = 物质的量 / 溶剂质量，二者加热时都不变，所以它保持不变。III 正确：没有蒸发和析出，溶质和溶液的质量都不变，质量分数不变。正确的是 I 和 III。",
        "ku": "I rast e: çareseriya germbûyî fireh dibe; hejmara molan wek xwe dimîne lê qebare mezin dibe, ji ber vê molarîte hinekî kêm dibe. II şaş e: molalîte hejmara molan / girseya çareserker e; her du jî bi germbûnê naguherin, molalîte sabît e. III rast e: ji ber ku hilmbûn û niştin tune ne, girseya çareserbûyî û çareseriyê naguhere, sedeya girseyî sabît dimîne. Gotinên rast I û III in."
      }
    },
    {
      "id": "u14-twin07",
      "stem": {
        "tr": "Aşağıdaki çözünen – çözücü çiftlerinden hangisinde, çözünme sırasında tanecikler arasında oluşan baskın etkileşim yanlış verilmiştir?",
        "en": "In which of the following solute – solvent pairs is the dominant interaction formed between the particles during dissolution given incorrectly?",
        "de": "Bei welchem der folgenden Paare gelöster Stoff – Lösungsmittel ist die beim Lösen zwischen den Teilchen vorherrschende Wechselwirkung falsch angegeben?",
        "fr": "Pour lequel des couples soluté – solvant suivants l'interaction dominante qui s'établit entre les particules lors de la dissolution est-elle indiquée de façon incorrecte ?",
        "ru": "В какой из пар «растворённое вещество — растворитель» неверно указано преобладающее взаимодействие между частицами при растворении?",
        "ar": "في أيّ من أزواج المذاب – المذيب الآتية ذُكر خطأً التآثر السائد الذي ينشأ بين الجسيمات أثناء الذوبان؟",
        "zh": "下列溶质–溶剂组合中，哪一组所给出的溶解时粒子间形成的主要相互作用是错误的？",
        "ku": "Di kîjan ji van cotên çareserbûyî – çareserker de, têkiliya serdest a ku di dema helandinê de di navbera perçeyan de çêdibe şaş hatiye dayîn?"
      },
      "options": [
        {
          "tr": "CCl4 – C6H6 (benzen): dipol–dipol etkileşimi",
          "en": "CCl4 – C6H6 (benzene): dipole–dipole interaction",
          "de": "CCl4 – C6H6 (Benzol): Dipol-Dipol-Wechselwirkung",
          "fr": "CCl4 – C6H6 (benzène) : interaction dipôle–dipôle",
          "ru": "CCl4 – C6H6 (бензол): диполь–дипольное взаимодействие",
          "ar": "CCl4 – C6H6 (البنزين): تآثر ثنائي القطب – ثنائي القطب",
          "zh": "CCl4 – C6H6（苯）：偶极–偶极作用",
          "ku": "CCl4 – C6H6 (benzen): têkiliya dîpol–dîpol"
        },
        {
          "tr": "NaCl – H2O: iyon–dipol etkileşimi",
          "en": "NaCl – H2O: ion–dipole interaction",
          "de": "NaCl – H2O: Ion-Dipol-Wechselwirkung",
          "fr": "NaCl – H2O : interaction ion–dipôle",
          "ru": "NaCl – H2O: ион–дипольное взаимодействие",
          "ar": "NaCl – H2O: تآثر أيون – ثنائي القطب",
          "zh": "NaCl – H2O：离子–偶极作用",
          "ku": "NaCl – H2O: têkiliya îyon–dîpol"
        },
        {
          "tr": "CH3OH – H2O: hidrojen bağı",
          "en": "CH3OH – H2O: hydrogen bonding",
          "de": "CH3OH – H2O: Wasserstoffbrückenbindung",
          "fr": "CH3OH – H2O : liaison hydrogène",
          "ru": "CH3OH – H2O: водородная связь",
          "ar": "CH3OH – H2O: رابطة هيدروجينية",
          "zh": "CH3OH – H2O：氢键",
          "ku": "CH3OH – H2O: girêdana hîdrojenê"
        },
        {
          "tr": "I2 – CCl4: London kuvvetleri",
          "en": "I2 – CCl4: London (dispersion) forces",
          "de": "I2 – CCl4: London-Kräfte (Dispersionskräfte)",
          "fr": "I2 – CCl4 : forces de London (dispersion)",
          "ru": "I2 – CCl4: лондоновские (дисперсионные) силы",
          "ar": "I2 – CCl4: قوى لندن (التشتت)",
          "zh": "I2 – CCl4：色散力（伦敦力）",
          "ku": "I2 – CCl4: hêzên London"
        },
        {
          "tr": "Br2 – H2O: dipol–indüklenmiş dipol etkileşimi",
          "en": "Br2 – H2O: dipole–induced dipole interaction",
          "de": "Br2 – H2O: Dipol-induzierter-Dipol-Wechselwirkung",
          "fr": "Br2 – H2O : interaction dipôle–dipôle induit",
          "ru": "Br2 – H2O: взаимодействие диполь–наведённый диполь",
          "ar": "Br2 – H2O: تآثر ثنائي القطب – ثنائي القطب المستحث",
          "zh": "Br2 – H2O：偶极–诱导偶极作用",
          "ku": "Br2 – H2O: têkiliya dîpol–dîpola îndukekirî"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "CCl4 ve benzen (C6H6) apolar moleküllerdir; kalıcı dipolleri olmadığından aralarında dipol–dipol değil London kuvvetleri etkindir, eşleştirme yanlıştır. NaCl'nin iyonları polar su molekülleriyle iyon–dipol, CH3OH ile su O–H grupları sayesinde hidrojen bağı, apolar I2 ile apolar CCl4 London kuvvetleri, apolar Br2 ile polar su ise dipol–indüklenmiş dipol etkileşimi oluşturur; bunlar doğrudur.",
        "en": "CCl4 and benzene (C6H6) are nonpolar molecules; having no permanent dipoles, they interact through London forces, not dipole–dipole forces, so this pairing is wrong. The ions of NaCl form ion–dipole interactions with polar water, CH3OH and water form hydrogen bonds through their O–H groups, nonpolar I2 and nonpolar CCl4 interact by London forces, and nonpolar Br2 with polar water gives dipole–induced dipole interactions; these are all correct.",
        "de": "CCl4 und Benzol (C6H6) sind unpolare Moleküle; ohne permanente Dipole wirken zwischen ihnen London-Kräfte und keine Dipol-Dipol-Kräfte, diese Zuordnung ist falsch. Die Ionen von NaCl bilden mit polarem Wasser Ion-Dipol-Wechselwirkungen, CH3OH und Wasser über ihre O–H-Gruppen Wasserstoffbrücken, unpolares I2 und unpolares CCl4 London-Kräfte, unpolares Br2 und polares Wasser Dipol-induzierter-Dipol-Wechselwirkungen; diese Angaben stimmen.",
        "fr": "CCl4 et le benzène (C6H6) sont des molécules apolaires ; sans dipôle permanent, ils interagissent par des forces de London et non dipôle–dipôle : cette association est fausse. Les ions de NaCl forment des interactions ion–dipôle avec l'eau polaire, CH3OH et l'eau des liaisons hydrogène grâce à leurs groupes O–H, I2 et CCl4, tous deux apolaires, des forces de London, et Br2 apolaire avec l'eau polaire des interactions dipôle–dipôle induit ; ces associations sont correctes.",
        "ru": "CCl4 и бензол (C6H6) — неполярные молекулы; у них нет постоянных диполей, поэтому между ними действуют лондоновские силы, а не диполь–дипольные, — это сочетание неверно. Ионы NaCl с полярной водой дают ион–дипольное взаимодействие, CH3OH и вода — водородные связи за счёт групп O–H, неполярные I2 и CCl4 — лондоновские силы, неполярный Br2 с полярной водой — взаимодействие диполь–наведённый диполь; эти сочетания верны.",
        "ar": "CCl4 والبنزين (C6H6) جزيئات غير قطبية؛ ولعدم وجود ثنائيات أقطاب دائمة تسود بينهما قوى لندن لا تآثرات ثنائي القطب – ثنائي القطب، لذا فهذا الاقتران خاطئ. أيونات NaCl تكوّن مع الماء القطبي تآثر أيون – ثنائي القطب، وCH3OH مع الماء روابط هيدروجينية عبر مجموعات O–H، وI2 غير القطبي مع CCl4 غير القطبي قوى لندن، وBr2 غير القطبي مع الماء القطبي تآثر ثنائي القطب – ثنائي القطب المستحث؛ وهذه صحيحة.",
        "zh": "CCl4 和苯(C6H6)都是非极性分子，没有永久偶极，它们之间是色散力而不是偶极–偶极作用，所以这一组是错误的。NaCl 的离子与极性水分子形成离子–偶极作用，CH3OH 与水通过 O–H 基团形成氢键，非极性 I2 与非极性 CCl4 之间是色散力，非极性 Br2 与极性水之间是偶极–诱导偶极作用，这些都正确。",
        "ku": "CCl4 û benzen (C6H6) molekulên nepolar in; ji ber ku dîpolên wan ên daîmî tune ne, di navbera wan de ne dîpol–dîpol lê hêzên London hene, ev cot şaş e. Îyonên NaCl bi ava polar re îyon–dîpol, CH3OH bi avê re bi komên O–H girêdana hîdrojenê, I2 ya nepolar bi CCl4 ya nepolar re hêzên London, Br2 ya nepolar bi ava polar re têkiliya dîpol–dîpola îndukekirî çêdike; ev rast in."
      }
    },
    {
      "id": "u14-twin08",
      "stem": {
        "tr": "0,6 M 200 mL HNO3 çözeltisinin derişimini 0,2 M'a düşürmek için çözeltiye kaç mL saf su eklenmelidir? (Hacimlerin toplanabildiği kabul edilecektir.)",
        "en": "How many mL of pure water must be added to 200 mL of a 0.6 M HNO3 solution to lower its concentration to 0.2 M? (Assume the volumes are additive.)",
        "de": "Wie viele mL reines Wasser müssen zu 200 mL einer 0,6 M HNO3-Lösung gegeben werden, um ihre Konzentration auf 0,2 M zu senken? (Die Volumina sollen als additiv angenommen werden.)",
        "fr": "Combien de mL d'eau pure faut-il ajouter à 200 mL d'une solution de HNO3 à 0,6 M pour ramener sa concentration à 0,2 M ? (On admet que les volumes s'additionnent.)",
        "ru": "Сколько мл чистой воды нужно добавить к 200 мл 0,6 M раствора HNO3, чтобы снизить его концентрацию до 0,2 M? (Объёмы считать аддитивными.)",
        "ar": "كم mL من الماء النقي يجب إضافتها إلى 200 mL من محلول HNO3 تركيزه 0.6 M لخفض تركيزه إلى 0.2 M؟ (يُفترض أن الحجوم تُجمع.)",
        "zh": "要把 200 mL 0.6 M HNO3 溶液的浓度降到 0.2 M，需要加入多少 mL 纯水？（假设体积可以相加。）",
        "ku": "Ji bo daxistina hûrbûna 200 mL çareseriya HNO3 ya 0,6 M bo 0,2 M, divê çend mL ava paqij lê were zêdekirin? (Tê qebûlkirin ku qebare li hev zêde dibin.)"
      },
      "options": [
        {
          "tr": "200 mL",
          "en": "200 mL",
          "de": "200 mL",
          "fr": "200 mL",
          "ru": "200 мл",
          "ar": "200 mL",
          "zh": "200 mL",
          "ku": "200 mL"
        },
        {
          "tr": "300 mL",
          "en": "300 mL",
          "de": "300 mL",
          "fr": "300 mL",
          "ru": "300 мл",
          "ar": "300 mL",
          "zh": "300 mL",
          "ku": "300 mL"
        },
        {
          "tr": "400 mL",
          "en": "400 mL",
          "de": "400 mL",
          "fr": "400 mL",
          "ru": "400 мл",
          "ar": "400 mL",
          "zh": "400 mL",
          "ku": "400 mL"
        },
        {
          "tr": "600 mL",
          "en": "600 mL",
          "de": "600 mL",
          "fr": "600 mL",
          "ru": "600 мл",
          "ar": "600 mL",
          "zh": "600 mL",
          "ku": "600 mL"
        },
        {
          "tr": "800 mL",
          "en": "800 mL",
          "de": "800 mL",
          "fr": "800 mL",
          "ru": "800 мл",
          "ar": "800 mL",
          "zh": "800 mL",
          "ku": "800 mL"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Seyreltmede çözünenin mol sayısı değişmez: M1V1 = M2V2 → 0,6 · 200 = 0,2 · V2 → V2 = 600 mL. Bu, son çözeltinin hacmidir; başlangıçta 200 mL bulunduğundan eklenmesi gereken su 600 − 200 = 400 mL'dir. 600 mL'yi eklenecek su sanmak en sık yapılan hatadır.",
        "en": "On dilution the moles of solute do not change: M1V1 = M2V2 → 0.6 · 200 = 0.2 · V2 → V2 = 600 mL. This is the volume of the final solution; since 200 mL were present at the start, the water to be added is 600 − 200 = 400 mL. Taking 600 mL as the water added is the most common mistake.",
        "de": "Beim Verdünnen ändert sich die Stoffmenge des gelösten Stoffes nicht: M1V1 = M2V2 → 0,6 · 200 = 0,2 · V2 → V2 = 600 mL. Das ist das Volumen der Endlösung; da anfangs 200 mL vorlagen, müssen 600 − 200 = 400 mL Wasser zugegeben werden. 600 mL für die zuzugebende Wassermenge zu halten, ist der häufigste Fehler.",
        "fr": "Lors d'une dilution, le nombre de moles de soluté ne change pas : M1V1 = M2V2 → 0,6 · 200 = 0,2 · V2 → V2 = 600 mL. C'est le volume de la solution finale ; comme il y avait 200 mL au départ, il faut ajouter 600 − 200 = 400 mL d'eau. Prendre 600 mL pour le volume d'eau ajouté est l'erreur la plus fréquente.",
        "ru": "При разбавлении число молей растворённого вещества не меняется: M1V1 = M2V2 → 0,6 · 200 = 0,2 · V2 → V2 = 600 мл. Это объём конечного раствора; так как вначале было 200 мл, добавить нужно 600 − 200 = 400 мл воды. Самая частая ошибка — считать 600 мл объёмом добавленной воды.",
        "ar": "في التخفيف لا يتغير عدد مولات المذاب: M1V1 = M2V2 → 0.6 · 200 = 0.2 · V2 → V2 = 600 mL. هذا هو حجم المحلول النهائي؛ وبما أنه كان في البداية 200 mL فإن الماء الواجب إضافته هو 600 − 200 = 400 mL. اعتبار 600 mL هو حجم الماء المضاف هو الخطأ الأكثر شيوعًا.",
        "zh": "稀释时溶质的物质的量不变：M1V1 = M2V2 → 0.6 × 200 = 0.2 × V2 → V2 = 600 mL。这是最终溶液的体积；原有 200 mL，所以需加水 600 − 200 = 400 mL。把 600 mL 当作加入的水量是最常见的错误。",
        "ku": "Di sistkirinê de hejmara molan a çareserbûyî naguhere: M1V1 = M2V2 → 0,6 · 200 = 0,2 · V2 → V2 = 600 mL. Ev qebareya çareseriya dawî ye; ji ber ku di destpêkê de 200 mL hebû, ava ku divê were zêdekirin 600 − 200 = 400 mL e. Hesibandina 600 mL wek ava zêdekirî şaşiya herî berbelav e."
      }
    },
    {
      "id": "u14-twin09",
      "stem": {
        "tr": "34,2 g Al2(SO4)3 katısı suda tamamen çözünüp iyonlarına ayrışarak 500 mL çözelti hazırlanıyor. Bu çözeltideki toplam iyon derişimi kaç M'dır? (Al: 27, S: 32, O: 16 g/mol)",
        "en": "34.2 g of solid Al2(SO4)3 dissolves completely in water and dissociates into its ions, giving 500 mL of solution. What is the total ion concentration in this solution, in M? (Al: 27, S: 32, O: 16 g/mol)",
        "de": "34,2 g festes Al2(SO4)3 lösen sich vollständig in Wasser und dissoziieren in ihre Ionen; es entstehen 500 mL Lösung. Wie groß ist die Gesamtionenkonzentration dieser Lösung in M? (Al: 27, S: 32, O: 16 g/mol)",
        "fr": "34,2 g de Al2(SO4)3 solide se dissolvent complètement dans l'eau en se dissociant en ions, ce qui donne 500 mL de solution. Quelle est la concentration totale en ions de cette solution, en M ? (Al : 27, S : 32, O : 16 g/mol)",
        "ru": "34,2 г твёрдого Al2(SO4)3 полностью растворили в воде (соль распадается на ионы) и получили 500 мл раствора. Чему равна суммарная концентрация ионов в этом растворе (M)? (Al: 27, S: 32, O: 16 г/моль)",
        "ar": "يذوب 34.2 g من Al2(SO4)3 الصلب ذوبانًا تامًا في الماء ويتفكك إلى أيوناته ليتكون 500 mL من المحلول. ما التركيز الكلي للأيونات في هذا المحلول بوحدة M؟ (Al: 27، S: 32، O: 16 g/mol)",
        "zh": "34.2 g 固体 Al2(SO4)3 完全溶于水并电离成离子，配成 500 mL 溶液。该溶液中离子的总浓度是多少 M？(Al：27，S：32，O：16 g/mol)",
        "ku": "34,2 g Al2(SO4)3 ya hişk bi tevahî di avê de dihele û diqete îyonên xwe, û 500 mL çareserî çêdibe. Hûrbûna giştî ya îyonan di vê çareseriyê de çend M e? (Al: 27, S: 32, O: 16 g/mol)"
      },
      "options": [
        {
          "tr": "0,2 M",
          "en": "0.2 M",
          "de": "0,2 M",
          "fr": "0,2 M",
          "ru": "0,2 M",
          "ar": "0.2 M",
          "zh": "0.2 M",
          "ku": "0,2 M"
        },
        {
          "tr": "0,4 M",
          "en": "0.4 M",
          "de": "0,4 M",
          "fr": "0,4 M",
          "ru": "0,4 M",
          "ar": "0.4 M",
          "zh": "0.4 M",
          "ku": "0,4 M"
        },
        {
          "tr": "0,6 M",
          "en": "0.6 M",
          "de": "0,6 M",
          "fr": "0,6 M",
          "ru": "0,6 M",
          "ar": "0.6 M",
          "zh": "0.6 M",
          "ku": "0,6 M"
        },
        {
          "tr": "0,8 M",
          "en": "0.8 M",
          "de": "0,8 M",
          "fr": "0,8 M",
          "ru": "0,8 M",
          "ar": "0.8 M",
          "zh": "0.8 M",
          "ku": "0,8 M"
        },
        {
          "tr": "1,0 M",
          "en": "1.0 M",
          "de": "1,0 M",
          "fr": "1,0 M",
          "ru": "1,0 M",
          "ar": "1.0 M",
          "zh": "1.0 M",
          "ku": "1,0 M"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "MA[Al2(SO4)3] = 2·27 + 3·(32 + 4·16) = 342 g/mol; n = 34,2 / 342 = 0,1 mol; M = 0,1 / 0,5 = 0,2 M. Al2(SO4)3(k) → 2Al3+(suda) + 3SO4^2-(suda) olduğundan [Al3+] = 0,4 M, [SO4^2-] = 0,6 M; toplam iyon derişimi 0,4 + 0,6 = 1,0 M. 0,2 M tuzun derişimi, 0,4 M yalnız Al3+, 0,6 M yalnız SO4^2- derişimidir.",
        "en": "M[Al2(SO4)3] = 2·27 + 3·(32 + 4·16) = 342 g/mol; n = 34.2 / 342 = 0.1 mol; M = 0.1 / 0.5 = 0.2 M. Since Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq), [Al3+] = 0.4 M and [SO4^2-] = 0.6 M; the total ion concentration is 0.4 + 0.6 = 1.0 M. 0.2 M is the salt concentration, 0.4 M only Al3+, 0.6 M only SO4^2-.",
        "de": "M[Al2(SO4)3] = 2·27 + 3·(32 + 4·16) = 342 g/mol; n = 34,2 / 342 = 0,1 mol; c = 0,1 / 0,5 = 0,2 M. Wegen Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq) ist [Al3+] = 0,4 M und [SO4^2-] = 0,6 M; die Gesamtionenkonzentration beträgt 0,4 + 0,6 = 1,0 M. 0,2 M ist die Salzkonzentration, 0,4 M nur Al3+, 0,6 M nur SO4^2-.",
        "fr": "M[Al2(SO4)3] = 2·27 + 3·(32 + 4·16) = 342 g/mol ; n = 34,2 / 342 = 0,1 mol ; C = 0,1 / 0,5 = 0,2 M. Comme Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq), [Al3+] = 0,4 M et [SO4^2-] = 0,6 M ; la concentration totale en ions vaut 0,4 + 0,6 = 1,0 M. 0,2 M est la concentration du sel, 0,4 M celle de Al3+ seul, 0,6 M celle de SO4^2- seul.",
        "ru": "M[Al2(SO4)3] = 2·27 + 3·(32 + 4·16) = 342 г/моль; n = 34,2 / 342 = 0,1 моль; M = 0,1 / 0,5 = 0,2 M. Так как Al2(SO4)3(тв) → 2Al3+(р-р) + 3SO4^2-(р-р), [Al3+] = 0,4 M, [SO4^2-] = 0,6 M; суммарная концентрация ионов 0,4 + 0,6 = 1,0 M. 0,2 M — концентрация соли, 0,4 M — концентрация только Al3+, 0,6 M — только SO4^2-.",
        "ar": "الكتلة المولية لـ Al2(SO4)3 = 2·27 + 3·(32 + 4·16) = 342 g/mol؛ n = 34.2 / 342 = 0.1 mol؛ M = 0.1 / 0.5 = 0.2 M. وبما أن Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq) فإن [Al3+] = 0.4 M و[SO4^2-] = 0.6 M؛ والتركيز الكلي للأيونات 0.4 + 0.6 = 1.0 M. القيمة 0.2 M هي تركيز الملح، و0.4 M تركيز Al3+ وحده، و0.6 M تركيز SO4^2- وحده.",
        "zh": "Al2(SO4)3 的摩尔质量 = 2×27 + 3×(32 + 4×16) = 342 g/mol；n = 34.2 / 342 = 0.1 mol；c = 0.1 / 0.5 = 0.2 M。由于 Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq)，[Al3+] = 0.4 M，[SO4^2-] = 0.6 M；离子总浓度 = 0.4 + 0.6 = 1.0 M。0.2 M 是盐的浓度，0.4 M 只是 Al3+，0.6 M 只是 SO4^2-。",
        "ku": "Girseya molî ya Al2(SO4)3 = 2·27 + 3·(32 + 4·16) = 342 g/mol; n = 34,2 / 342 = 0,1 mol; M = 0,1 / 0,5 = 0,2 M. Ji ber ku Al2(SO4)3(s) → 2Al3+(aq) + 3SO4^2-(aq), [Al3+] = 0,4 M û [SO4^2-] = 0,6 M; hûrbûna giştî ya îyonan 0,4 + 0,6 = 1,0 M e. 0,2 M hûrbûna xwê ye, 0,4 M tenê Al3+, 0,6 M tenê SO4^2- ye."
      }
    },
    {
      "id": "u14-twin10",
      "stem": {
        "tr": "36 g su ile 46 g etil alkol (C2H5OH) karıştırılarak bir çözelti hazırlanıyor. Bu çözeltide etil alkolün mol kesri yaklaşık kaçtır? (H: 1, C: 12, O: 16 g/mol)",
        "en": "A solution is prepared by mixing 36 g of water with 46 g of ethyl alcohol (C2H5OH). What is the approximate mole fraction of ethyl alcohol in this solution? (H: 1, C: 12, O: 16 g/mol)",
        "de": "Durch Mischen von 36 g Wasser mit 46 g Ethanol (C2H5OH) wird eine Lösung hergestellt. Wie groß ist ungefähr der Stoffmengenanteil des Ethanols in dieser Lösung? (H: 1, C: 12, O: 16 g/mol)",
        "fr": "On prépare une solution en mélangeant 36 g d'eau et 46 g d'éthanol (C2H5OH). Quelle est approximativement la fraction molaire de l'éthanol dans cette solution ? (H : 1, C : 12, O : 16 g/mol)",
        "ru": "Раствор приготовили, смешав 36 г воды и 46 г этилового спирта (C2H5OH). Чему приблизительно равна мольная доля этилового спирта в этом растворе? (H: 1, C: 12, O: 16 г/моль)",
        "ar": "يُحضَّر محلول بخلط 36 g من الماء مع 46 g من الكحول الإيثيلي (C2H5OH). ما الكسر المولي التقريبي للكحول الإيثيلي في هذا المحلول؟ (H: 1، C: 12، O: 16 g/mol)",
        "zh": "将 36 g 水与 46 g 乙醇(C2H5OH)混合配成溶液。该溶液中乙醇的物质的量分数约为多少？(H：1，C：12，O：16 g/mol)",
        "ku": "Bi tevlihevkirina 36 g avê û 46 g alkola etîl (C2H5OH) çareseriyek tê amadekirin. Kesra molî ya alkola etîl di vê çareseriyê de nêzîkî çend e? (H: 1, C: 12, O: 16 g/mol)"
      },
      "options": [
        {
          "tr": "0,25",
          "en": "0.25",
          "de": "0,25",
          "fr": "0,25",
          "ru": "0,25",
          "ar": "0.25",
          "zh": "0.25",
          "ku": "0,25"
        },
        {
          "tr": "0,33",
          "en": "0.33",
          "de": "0,33",
          "fr": "0,33",
          "ru": "0,33",
          "ar": "0.33",
          "zh": "0.33",
          "ku": "0,33"
        },
        {
          "tr": "0,50",
          "en": "0.50",
          "de": "0,50",
          "fr": "0,50",
          "ru": "0,50",
          "ar": "0.50",
          "zh": "0.50",
          "ku": "0,50"
        },
        {
          "tr": "0,56",
          "en": "0.56",
          "de": "0,56",
          "fr": "0,56",
          "ru": "0,56",
          "ar": "0.56",
          "zh": "0.56",
          "ku": "0,56"
        },
        {
          "tr": "0,67",
          "en": "0.67",
          "de": "0,67",
          "fr": "0,67",
          "ru": "0,67",
          "ar": "0.67",
          "zh": "0.67",
          "ku": "0,67"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n(H2O) = 36 / 18 = 2 mol; n(C2H5OH) = 46 / 46 = 1 mol; toplam 3 mol. X(alkol) = 1 / 3 ≈ 0,33. 0,67 suyun mol kesridir; 0,50 alkol molünü toplam mol yerine su molüne bölmekle, 0,56 ise mol yerine kütleleri oranlamakla (46 / 82) bulunur.",
        "en": "n(H2O) = 36 / 18 = 2 mol; n(C2H5OH) = 46 / 46 = 1 mol; total 3 mol. X(alcohol) = 1 / 3 ≈ 0.33. 0.67 is the mole fraction of water; 0.50 comes from dividing the moles of alcohol by the moles of water instead of the total, and 0.56 from using a ratio of masses instead of moles (46 / 82).",
        "de": "n(H2O) = 36 / 18 = 2 mol; n(C2H5OH) = 46 / 46 = 1 mol; insgesamt 3 mol. x(Alkohol) = 1 / 3 ≈ 0,33. 0,67 ist der Stoffmengenanteil des Wassers; 0,50 entsteht, wenn man die Alkoholstoffmenge durch die Wasserstoffmenge statt durch die Gesamtstoffmenge teilt, 0,56, wenn man Massen statt Stoffmengen ins Verhältnis setzt (46 / 82).",
        "fr": "n(H2O) = 36 / 18 = 2 mol ; n(C2H5OH) = 46 / 46 = 1 mol ; total 3 mol. X(alcool) = 1 / 3 ≈ 0,33. 0,67 est la fraction molaire de l'eau ; 0,50 vient de la division des moles d'alcool par les moles d'eau au lieu du total, et 0,56 d'un rapport de masses au lieu de moles (46 / 82).",
        "ru": "n(H2O) = 36 / 18 = 2 моль; n(C2H5OH) = 46 / 46 = 1 моль; всего 3 моль. X(спирта) = 1 / 3 ≈ 0,33. 0,67 — мольная доля воды; 0,50 получается при делении молей спирта на моли воды вместо общего числа молей, 0,56 — при отношении масс вместо молей (46 / 82).",
        "ar": "n(H2O) = 36 / 18 = 2 mol؛ n(C2H5OH) = 46 / 46 = 1 mol؛ المجموع 3 mol. الكسر المولي للكحول = 1 / 3 ≈ 0.33. القيمة 0.67 هي الكسر المولي للماء؛ و0.50 تنتج عن قسمة مولات الكحول على مولات الماء بدل المجموع، و0.56 عن استخدام نسبة الكتل بدل المولات (46 / 82).",
        "zh": "n(H2O) = 36 / 18 = 2 mol；n(C2H5OH) = 46 / 46 = 1 mol；共 3 mol。X(乙醇) = 1 / 3 ≈ 0.33。0.67 是水的物质的量分数；0.50 是用乙醇的物质的量除以水的物质的量（而不是总量）得到的，0.56 是用质量比代替物质的量之比(46 / 82)得到的。",
        "ku": "n(H2O) = 36 / 18 = 2 mol; n(C2H5OH) = 46 / 46 = 1 mol; bi giştî 3 mol. X(alkol) = 1 / 3 ≈ 0,33. 0,67 kesra molî ya avê ye; 0,50 ji dabeşkirina molên alkolê li ser molên avê li şûna ya giştî, 0,56 jî ji rêjeya girseyan li şûna molan (46 / 82) tê."
      }
    },
    {
      "id": "u14-twin11",
      "stem": {
        "tr": "I. C12H22O11 (sakkaroz) II. KNO3 III. HCl(g) Yukarıdaki maddeler ayrı ayrı saf suda çözünüyor. Oluşan sulu çözeltilerden hangileri elektrik akımını iletir?",
        "en": "I. C12H22O11 (sucrose) II. KNO3 III. HCl(g) Each of the substances above is dissolved separately in pure water. Which of the resulting aqueous solutions conduct electric current?",
        "de": "I. C12H22O11 (Saccharose) II. KNO3 III. HCl(g) Die obigen Stoffe werden jeweils getrennt in reinem Wasser gelöst. Welche der entstehenden wässrigen Lösungen leiten den elektrischen Strom?",
        "fr": "I. C12H22O11 (saccharose) II. KNO3 III. HCl(g) Chacune de ces substances est dissoute séparément dans de l'eau pure. Lesquelles des solutions aqueuses obtenues conduisent le courant électrique ?",
        "ru": "I. C12H22O11 (сахароза) II. KNO3 III. HCl(г) Каждое из этих веществ по отдельности растворяют в чистой воде. Какие из полученных водных растворов проводят электрический ток?",
        "ar": "I. C12H22O11 (السكروز) II. KNO3 III. HCl(g) تُذاب كل مادة من المواد السابقة على حدة في ماء نقي. أيّ المحاليل المائية الناتجة توصل التيار الكهربائي؟",
        "zh": "I. C12H22O11（蔗糖） II. KNO3 III. HCl(g) 将以上物质分别溶于纯水。所得水溶液中哪些能导电？",
        "ku": "I. C12H22O11 (sakaroz) II. KNO3 III. HCl(g) Maddeyên jorîn her yek bi serê xwe di ava paqij de tên helandin. Kîjan ji çareseriyên avî yên çêbûyî herikîna elektrîkê diguhêzin?"
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
      "correctIndex": 3,
      "explanation": {
        "tr": "I: Sakkaroz moleküler bir maddedir, suda moleküller hâlinde çözünür ve iyon oluşturmaz; çözeltisi akım iletmez. II: KNO3 iyonik bir tuzdur, suda K+ ve NO3- iyonlarına ayrışır; çözeltisi iletir. III: HCl gaz hâlde moleküler olsa da suda iyonlaşarak H+ (H3O+) ve Cl- iyonları oluşturur; çözeltisi iletir. İletkenler II ve III'tür.",
        "en": "I: Sucrose is a molecular substance; it dissolves as molecules and forms no ions, so its solution does not conduct. II: KNO3 is an ionic salt that dissociates into K+ and NO3- ions in water; its solution conducts. III: Although HCl is molecular as a gas, it ionizes in water to give H+ (H3O+) and Cl- ions; its solution conducts. The conductors are II and III.",
        "de": "I: Saccharose ist ein molekularer Stoff; sie löst sich in Form von Molekülen und bildet keine Ionen, ihre Lösung leitet nicht. II: KNO3 ist ein ionisches Salz, das in Wasser in K+- und NO3--Ionen dissoziiert; die Lösung leitet. III: HCl ist als Gas molekular, ionisiert in Wasser aber zu H+ (H3O+) und Cl-; die Lösung leitet. Leitfähig sind II und III.",
        "fr": "I : le saccharose est une substance moléculaire ; il se dissout sous forme de molécules sans former d'ions, sa solution ne conduit pas. II : KNO3 est un sel ionique qui se dissocie dans l'eau en ions K+ et NO3- ; sa solution conduit. III : bien que HCl soit moléculaire à l'état gazeux, il s'ionise dans l'eau en H+ (H3O+) et Cl- ; sa solution conduit. Les solutions conductrices sont II et III.",
        "ru": "I: сахароза — молекулярное вещество, растворяется в виде молекул и не образует ионов; её раствор не проводит ток. II: KNO3 — ионная соль, в воде распадается на ионы K+ и NO3-; раствор проводит ток. III: HCl в газообразном состоянии молекулярен, но в воде ионизируется с образованием H+ (H3O+) и Cl-; раствор проводит ток. Проводят II и III.",
        "ar": "I: السكروز مادة جزيئية تذوب على شكل جزيئات ولا تكوّن أيونات، فمحلولها لا يوصل التيار. II: KNO3 ملح أيوني يتفكك في الماء إلى أيونات K+ وNO3-، فمحلوله موصل. III: مع أن HCl جزيئي في الحالة الغازية فإنه يتأين في الماء معطيًا أيونات H+ (H3O+) وCl-، فمحلوله موصل. المحاليل الموصلة هي II وIII.",
        "zh": "I：蔗糖是分子物质，以分子形式溶解，不生成离子，其溶液不导电。II：KNO3 是离子化合物，在水中电离成 K+ 和 NO3-，其溶液导电。III：HCl 气态时是分子，但在水中电离生成 H+(H3O+)和 Cl-，其溶液导电。能导电的是 II 和 III。",
        "ku": "I: Sakaroz maddeyek molekulî ye, wek molekul dihele û îyon çênake; çareseriya wê elektrîkê naguhêze. II: KNO3 xwêyek îyonî ye, di avê de diqete îyonên K+ û NO3-; çareseriya wê diguhêze. III: HCl di rewşa gazê de molekulî be jî, di avê de îyonîze dibe û îyonên H+ (H3O+) û Cl- çêdike; çareseriya wê diguhêze. Yên ku diguhêzin II û III in."
      }
    },
    {
      "id": "u14-twin12",
      "stem": {
        "tr": "Kütlece %20'lik 200 g şeker çözeltisine aynı sıcaklıkta 50 g şeker eklenip tamamen çözünüyor. Oluşan çözeltinin kütlece yüzde derişimi kaçtır?",
        "en": "50 g of sugar is added at the same temperature to 200 g of a 20% (by mass) sugar solution and dissolves completely. What is the percentage by mass of the resulting solution?",
        "de": "Zu 200 g einer Zuckerlösung mit 20 Massenprozent werden bei gleicher Temperatur 50 g Zucker gegeben, die sich vollständig lösen. Welchen Massenanteil (in %) hat die entstandene Lösung?",
        "fr": "On ajoute, à la même température, 50 g de sucre à 200 g d'une solution sucrée à 20 % en masse ; le sucre se dissout complètement. Quel est le pourcentage massique de la solution obtenue ?",
        "ru": "К 200 г раствора сахара с массовой долей 20 % при той же температуре добавили 50 г сахара, и он полностью растворился. Чему равна массовая доля (%) сахара в полученном растворе?",
        "ar": "أُضيف عند درجة الحرارة نفسها 50 g من السكر إلى 200 g من محلول سكر تركيزه 20% بالكتلة فذاب تمامًا. ما النسبة المئوية الكتلية للمحلول الناتج؟",
        "zh": "在相同温度下，向 200 g 质量分数为 20% 的糖溶液中加入 50 g 糖并完全溶解。所得溶液的质量分数是多少？",
        "ku": "Di heman germahiyê de 50 g şeker li 200 g çareseriya şekir a %20 (bi girseyî) tê zêdekirin û bi tevahî dihele. Sedeya girseyî ya çareseriya çêbûyî çend e?"
      },
      "options": [
        {
          "tr": "%25",
          "en": "25%",
          "de": "25 %",
          "fr": "25 %",
          "ru": "25%",
          "ar": "25%",
          "zh": "25%",
          "ku": "%25"
        },
        {
          "tr": "%30",
          "en": "30%",
          "de": "30 %",
          "fr": "30 %",
          "ru": "30%",
          "ar": "30%",
          "zh": "30%",
          "ku": "%30"
        },
        {
          "tr": "%36",
          "en": "36%",
          "de": "36 %",
          "fr": "36 %",
          "ru": "36%",
          "ar": "36%",
          "zh": "36%",
          "ku": "%36"
        },
        {
          "tr": "%40",
          "en": "40%",
          "de": "40 %",
          "fr": "40 %",
          "ru": "40%",
          "ar": "40%",
          "zh": "40%",
          "ku": "%40"
        },
        {
          "tr": "%45",
          "en": "45%",
          "de": "45 %",
          "fr": "45 %",
          "ru": "45%",
          "ar": "45%",
          "zh": "45%",
          "ku": "%45"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Başlangıçta şeker = 200 · 0,20 = 40 g, su = 160 g. 50 g şeker eklenince şeker = 90 g, çözelti = 250 g olur. Kütlece % = 90 / 250 · 100 = %36. Eklenen şekeri çözelti kütlesine katmayıp 90 / 200 alan %45, yalnızca eklenen kısmı hesaba katıp 50 / 200 alan %25 bulur.",
        "en": "Initially sugar = 200 · 0.20 = 40 g and water = 160 g. After adding 50 g of sugar, sugar = 90 g and solution = 250 g. Mass % = 90 / 250 · 100 = 36%. Forgetting to add the sugar to the solution mass (90 / 200) gives 45%, and considering only the added portion (50 / 200) gives 25%.",
        "de": "Anfangs: Zucker = 200 · 0,20 = 40 g, Wasser = 160 g. Nach Zugabe von 50 g Zucker: Zucker = 90 g, Lösung = 250 g. Massenanteil = 90 / 250 · 100 = 36 %. Wer den zugegebenen Zucker nicht zur Lösungsmasse zählt (90 / 200), erhält 45 %, wer nur die zugegebene Menge betrachtet (50 / 200), 25 %.",
        "fr": "Au départ : sucre = 200 · 0,20 = 40 g, eau = 160 g. Après ajout de 50 g de sucre : sucre = 90 g, solution = 250 g. Pourcentage massique = 90 / 250 · 100 = 36 %. Oublier d'ajouter le sucre à la masse de la solution (90 / 200) donne 45 %, ne compter que la partie ajoutée (50 / 200) donne 25 %.",
        "ru": "Вначале сахара 200 · 0,20 = 40 г, воды 160 г. После добавления 50 г сахара его масса 90 г, масса раствора 250 г. Массовая доля = 90 / 250 · 100 = 36%. Если не прибавить добавленный сахар к массе раствора (90 / 200), получится 45%; если учесть только добавленную порцию (50 / 200) — 25%.",
        "ar": "في البداية: السكر = 200 · 0.20 = 40 g، والماء = 160 g. بعد إضافة 50 g من السكر يصبح السكر 90 g والمحلول 250 g. النسبة الكتلية = 90 / 250 · 100 = 36%. نسيان إضافة السكر إلى كتلة المحلول (90 / 200) يعطي 45%، واحتساب الجزء المضاف فقط (50 / 200) يعطي 25%.",
        "zh": "开始时糖 = 200 × 0.20 = 40 g，水 = 160 g。加入 50 g 糖后，糖 = 90 g，溶液 = 250 g。质量分数 = 90 / 250 × 100 = 36%。若忘了把加入的糖计入溶液质量(90 / 200)得 45%，只考虑加入的部分(50 / 200)得 25%。",
        "ku": "Di destpêkê de şeker = 200 · 0,20 = 40 g, av = 160 g. Piştî zêdekirina 50 g şekir, şeker = 90 g, çareserî = 250 g. Sedeya girseyî = 90 / 250 · 100 = %36. Kesê ku şekirê zêdekirî naxe nav girseya çareseriyê (90 / 200) %45, kesê ku tenê beşa zêdekirî dihesibîne (50 / 200) %25 dibîne."
      }
    },
    {
      "id": "u14-twin13",
      "stem": {
        "tr": "Hacimce %40'lık etil alkol çözeltisinden 150 mL alınıp saf su ile 500 mL'ye tamamlanıyor. Son çözeltinin hacimce yüzde derişimi kaçtır?",
        "en": "150 mL of a 40% (by volume) ethyl alcohol solution is taken and made up to 500 mL with pure water. What is the percentage by volume of the final solution?",
        "de": "150 mL einer Ethanollösung mit 40 Volumenprozent werden mit reinem Wasser auf 500 mL aufgefüllt. Welchen Volumenanteil (in %) hat die Endlösung?",
        "fr": "On prélève 150 mL d'une solution d'éthanol à 40 % en volume et on complète à 500 mL avec de l'eau pure. Quel est le pourcentage en volume de la solution finale ?",
        "ru": "150 мл раствора этилового спирта с объёмной долей 40 % доводят чистой водой до 500 мл. Чему равна объёмная доля (%) спирта в полученном растворе?",
        "ar": "يُؤخذ 150 mL من محلول كحول إيثيلي تركيزه 40% بالحجم ويُكمَّل بالماء النقي إلى 500 mL. ما النسبة المئوية الحجمية للمحلول النهائي؟",
        "zh": "取 150 mL 体积分数为 40% 的乙醇溶液，用纯水定容至 500 mL。最终溶液的体积分数是多少？",
        "ku": "150 mL ji çareseriya alkola etîl a %40 (bi qebareyî) tê girtin û bi ava paqij heta 500 mL tê temamkirin. Sedeya qebareyî ya çareseriya dawî çend e?"
      },
      "options": [
        {
          "tr": "%8",
          "en": "8%",
          "de": "8 %",
          "fr": "8 %",
          "ru": "8%",
          "ar": "8%",
          "zh": "8%",
          "ku": "%8"
        },
        {
          "tr": "%12",
          "en": "12%",
          "de": "12 %",
          "fr": "12 %",
          "ru": "12%",
          "ar": "12%",
          "zh": "12%",
          "ku": "%12"
        },
        {
          "tr": "%30",
          "en": "30%",
          "de": "30 %",
          "fr": "30 %",
          "ru": "30%",
          "ar": "30%",
          "zh": "30%",
          "ku": "%30"
        },
        {
          "tr": "%40",
          "en": "40%",
          "de": "40 %",
          "fr": "40 %",
          "ru": "40%",
          "ar": "40%",
          "zh": "40%",
          "ku": "%40"
        },
        {
          "tr": "%60",
          "en": "60%",
          "de": "60 %",
          "fr": "60 %",
          "ru": "60%",
          "ar": "60%",
          "zh": "60%",
          "ku": "%60"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Alınan kısımdaki alkol hacmi = 150 · 0,40 = 60 mL. Su eklemek alkol hacmini değiştirmez; son hacim 500 mL olduğundan hacimce % = 60 / 500 · 100 = %12. 60 mL alkol hacmini yüzde sanan %60, alınan çözelti hacmini (150 mL) alkol gibi kullanan %30, yüzdeyi seyreltilmemiş sanan %40, alkol yerine 40'ı son hacme bölen %8 bulur.",
        "en": "Volume of alcohol in the portion taken = 150 · 0.40 = 60 mL. Adding water does not change the alcohol volume; the final volume is 500 mL, so volume % = 60 / 500 · 100 = 12%. Taking the 60 mL as a percentage gives 60%, treating the whole 150 mL as alcohol gives 30%, assuming no dilution gives 40%, and dividing 40 by the final volume gives 8%.",
        "de": "Alkoholvolumen im entnommenen Teil = 150 · 0,40 = 60 mL. Wasserzugabe ändert das Alkoholvolumen nicht; das Endvolumen ist 500 mL, also Volumenanteil = 60 / 500 · 100 = 12 %. Wer 60 mL als Prozentwert nimmt, erhält 60 %, wer die ganzen 150 mL als Alkohol rechnet, 30 %, wer keine Verdünnung annimmt, 40 %, und wer 40 durch das Endvolumen teilt, 8 %.",
        "fr": "Volume d'alcool dans la portion prélevée = 150 · 0,40 = 60 mL. L'ajout d'eau ne change pas ce volume ; le volume final est 500 mL, donc pourcentage en volume = 60 / 500 · 100 = 12 %. Prendre 60 mL pour un pourcentage donne 60 %, compter les 150 mL comme de l'alcool donne 30 %, supposer qu'il n'y a pas de dilution donne 40 %, et diviser 40 par le volume final donne 8 %.",
        "ru": "Объём спирта во взятой порции = 150 · 0,40 = 60 мл. Добавление воды не меняет объём спирта; конечный объём 500 мл, значит объёмная доля = 60 / 500 · 100 = 12%. Если принять 60 мл за проценты, получится 60%, если считать все 150 мл спиртом — 30%, если не учесть разбавление — 40%, если разделить 40 на конечный объём — 8%.",
        "ar": "حجم الكحول في الجزء المأخوذ = 150 · 0.40 = 60 mL. إضافة الماء لا تغير حجم الكحول؛ والحجم النهائي 500 mL، إذن النسبة الحجمية = 60 / 500 · 100 = 12%. اعتبار 60 mL نسبة مئوية يعطي 60%، واعتبار الـ 150 mL كلها كحولًا يعطي 30%، وافتراض عدم حدوث تخفيف يعطي 40%، وقسمة 40 على الحجم النهائي تعطي 8%.",
        "zh": "所取部分中乙醇体积 = 150 × 0.40 = 60 mL。加水不改变乙醇体积；最终体积为 500 mL，所以体积分数 = 60 / 500 × 100 = 12%。把 60 mL 当作百分数得 60%，把 150 mL 全当作乙醇得 30%，认为没有稀释得 40%，用 40 除以最终体积得 8%。",
        "ku": "Qebareya alkolê di beşa girtî de = 150 · 0,40 = 60 mL. Zêdekirina avê qebareya alkolê naguhere; qebareya dawî 500 mL e, ji ber vê sedeya qebareyî = 60 / 500 · 100 = %12. Kesê ku 60 mL wek sedeyê digire %60, yê ku hemû 150 mL wek alkol dihesibîne %30, yê ku sistkirinê nahesibîne %40, yê ku 40 li ser qebareya dawî dabeş dike %8 dibîne."
      }
    },
    {
      "id": "u14-twin14",
      "stem": {
        "tr": "I. 0,2 M 100 mL Na2SO4 çözeltisi II. 0,1 M 200 mL KCl çözeltisi III. 0,1 M 200 mL AlCl3 çözeltisi Tuzların suda tamamen iyonlarına ayrıştığı bu çözeltilerdeki toplam iyon mol sayılarının büyükten küçüğe sıralanışı hangisidir?",
        "en": "I. 100 mL of 0.2 M Na2SO4 solution II. 200 mL of 0.1 M KCl solution III. 200 mL of 0.1 M AlCl3 solution In these solutions the salts are completely dissociated into ions. Which shows the total number of moles of ions in decreasing order?",
        "de": "I. 100 mL 0,2 M Na2SO4-Lösung II. 200 mL 0,1 M KCl-Lösung III. 200 mL 0,1 M AlCl3-Lösung In diesen Lösungen sind die Salze vollständig in Ionen dissoziiert. Welche Reihenfolge gibt die Gesamtstoffmenge der Ionen von groß nach klein an?",
        "fr": "I. 100 mL de solution de Na2SO4 à 0,2 M II. 200 mL de solution de KCl à 0,1 M III. 200 mL de solution de AlCl3 à 0,1 M Dans ces solutions, les sels sont totalement dissociés en ions. Quel est l'ordre décroissant du nombre total de moles d'ions ?",
        "ru": "I. 100 мл 0,2 M раствора Na2SO4 II. 200 мл 0,1 M раствора KCl III. 200 мл 0,1 M раствора AlCl3 В этих растворах соли полностью диссоциированы на ионы. В каком варианте растворы расположены в порядке убывания общего числа молей ионов?",
        "ar": "I. 100 mL من محلول Na2SO4 تركيزه 0.2 M II. 200 mL من محلول KCl تركيزه 0.1 M III. 200 mL من محلول AlCl3 تركيزه 0.1 M تتفكك الأملاح في هذه المحاليل إلى أيوناتها تفككًا تامًا. ما ترتيب العدد الكلي لمولات الأيونات في هذه المحاليل من الأكبر إلى الأصغر؟",
        "zh": "有下列三种溶液：I. 100 mL 0.2 M Na2SO4 溶液；II. 200 mL 0.1 M KCl 溶液；III. 200 mL 0.1 M AlCl3 溶液。这些溶液中的盐都完全电离，按离子总物质的量由大到小排列，正确的是哪一项？",
        "ku": "I. 100 mL çareseriya Na2SO4 ya 0,2 M II. 200 mL çareseriya KCl ya 0,1 M III. 200 mL çareseriya AlCl3 ya 0,1 M Di van çareseriyan de xwê bi tevahî diqetin îyonan. Rêzkirina hejmara giştî ya molên îyonan ji mezin ber bi biçûk kîjan e?"
      },
      "options": [
        {
          "tr": "I > II > III",
          "en": "I > II > III",
          "de": "I > II > III",
          "fr": "I > II > III",
          "ru": "I > II > III",
          "ar": "I > II > III",
          "zh": "I > II > III",
          "ku": "I > II > III"
        },
        {
          "tr": "II > I > III",
          "en": "II > I > III",
          "de": "II > I > III",
          "fr": "II > I > III",
          "ru": "II > I > III",
          "ar": "II > I > III",
          "zh": "II > I > III",
          "ku": "II > I > III"
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
          "tr": "III > I > II",
          "en": "III > I > II",
          "de": "III > I > II",
          "fr": "III > I > II",
          "ru": "III > I > II",
          "ar": "III > I > II",
          "zh": "III > I > II",
          "ku": "III > I > II"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "n(iyon) = M · V · (formüldeki iyon sayısı). I: 0,2 · 0,1 · 3 = 0,06 mol (2Na+ + SO4^2-). II: 0,1 · 0,2 · 2 = 0,04 mol (K+ + Cl-). III: 0,1 · 0,2 · 4 = 0,08 mol (Al3+ + 3Cl-). Sıralama III > I > II'dir. Hacimleri hesaba katmadan yalnızca iyon derişimlerini (I: 0,6 M, III: 0,4 M, II: 0,2 M) karşılaştıran öğrenci I > III > II sıralamasına ulaşır.",
        "en": "n(ions) = M · V · (number of ions in the formula). I: 0.2 · 0.1 · 3 = 0.06 mol (2Na+ + SO4^2-). II: 0.1 · 0.2 · 2 = 0.04 mol (K+ + Cl-). III: 0.1 · 0.2 · 4 = 0.08 mol (Al3+ + 3Cl-). The order is III > I > II. A student who compares only the ion concentrations (I: 0.6 M, III: 0.4 M, II: 0.2 M) and ignores the volumes arrives at I > III > II.",
        "de": "n(Ionen) = c · V · (Anzahl Ionen in der Formel). I: 0,2 · 0,1 · 3 = 0,06 mol (2Na+ + SO4^2-). II: 0,1 · 0,2 · 2 = 0,04 mol (K+ + Cl-). III: 0,1 · 0,2 · 4 = 0,08 mol (Al3+ + 3Cl-). Reihenfolge: III > I > II. Wer nur die Ionenkonzentrationen vergleicht (I: 0,6 M, III: 0,4 M, II: 0,2 M) und die Volumina vergisst, kommt auf I > III > II.",
        "fr": "n(ions) = C · V · (nombre d'ions dans la formule). I : 0,2 · 0,1 · 3 = 0,06 mol (2Na+ + SO4^2-). II : 0,1 · 0,2 · 2 = 0,04 mol (K+ + Cl-). III : 0,1 · 0,2 · 4 = 0,08 mol (Al3+ + 3Cl-). L'ordre est III > I > II. Un élève qui compare seulement les concentrations en ions (I : 0,6 M, III : 0,4 M, II : 0,2 M) sans tenir compte des volumes obtient I > III > II.",
        "ru": "n(ионов) = M · V · (число ионов в формуле). I: 0,2 · 0,1 · 3 = 0,06 моль (2Na+ + SO4^2-). II: 0,1 · 0,2 · 2 = 0,04 моль (K+ + Cl-). III: 0,1 · 0,2 · 4 = 0,08 моль (Al3+ + 3Cl-). Порядок: III > I > II. Ученик, сравнивающий только концентрации ионов (I: 0,6 M, III: 0,4 M, II: 0,2 M) без учёта объёмов, получит I > III > II.",
        "ar": "n(الأيونات) = M · V · (عدد الأيونات في الصيغة). I: 0.2 · 0.1 · 3 = 0.06 mol (2Na+ + SO4^2-). II: 0.1 · 0.2 · 2 = 0.04 mol (K+ + Cl-). III: 0.1 · 0.2 · 4 = 0.08 mol (Al3+ + 3Cl-). الترتيب III > I > II. الطالب الذي يقارن تراكيز الأيونات فقط (I: 0.6 M، III: 0.4 M، II: 0.2 M) دون مراعاة الحجوم يصل إلى I > III > II.",
        "zh": "n(离子) = c · V · (化学式中离子个数)。I：0.2 × 0.1 × 3 = 0.06 mol(2Na+ + SO4^2-)。II：0.1 × 0.2 × 2 = 0.04 mol(K+ + Cl-)。III：0.1 × 0.2 × 4 = 0.08 mol(Al3+ + 3Cl-)。顺序为 III > I > II。只比较离子浓度(I：0.6 M，III：0.4 M，II：0.2 M)而忽略体积的学生会得到 I > III > II。",
        "ku": "n(îyon) = M · V · (hejmara îyonan di formulê de). I: 0,2 · 0,1 · 3 = 0,06 mol (2Na+ + SO4^2-). II: 0,1 · 0,2 · 2 = 0,04 mol (K+ + Cl-). III: 0,1 · 0,2 · 4 = 0,08 mol (Al3+ + 3Cl-). Rêz III > I > II e. Xwendekarê ku tenê hûrbûnên îyonan (I: 0,6 M, III: 0,4 M, II: 0,2 M) bêyî qebareyan dide ber hev, digihîje I > III > II."
      }
    },
    {
      "id": "u14-twin15",
      "stem": {
        "tr": "0,1 M 250 mL CuSO4 çözeltisi hazırlamak isteyen bir öğrenci ile ilgili; I. 4,0 g CuSO4 tartması gerekir. II. Tarttığı CuSO4'ü 250 mL saf suya eklerse istenen çözeltiyi elde eder. III. Hazırladığı çözeltiden 50 mL alıp başka bir kaba koyarsa bu kısmın derişimi 0,02 M olur. yargılarından hangileri doğrudur? (CuSO4: 160 g/mol)",
        "en": "A student wants to prepare 250 mL of 0.1 M CuSO4 solution. I. The student must weigh out 4.0 g of CuSO4. II. Adding the weighed CuSO4 to 250 mL of pure water gives the desired solution. III. If 50 mL of the prepared solution is poured into another container, the concentration of this portion is 0.02 M. Which of these statements are correct? (CuSO4: 160 g/mol)",
        "de": "Ein Schüler möchte 250 mL einer 0,1 M CuSO4-Lösung herstellen. I. Er muss 4,0 g CuSO4 abwiegen. II. Gibt er das abgewogene CuSO4 zu 250 mL reinem Wasser, erhält er die gewünschte Lösung. III. Füllt er 50 mL der hergestellten Lösung in ein anderes Gefäß, hat dieser Teil die Konzentration 0,02 M. Welche Aussagen sind richtig? (CuSO4: 160 g/mol)",
        "fr": "Un élève veut préparer 250 mL d'une solution de CuSO4 à 0,1 M. I. Il doit peser 4,0 g de CuSO4. II. S'il ajoute le CuSO4 pesé à 250 mL d'eau pure, il obtient la solution voulue. III. S'il verse 50 mL de la solution préparée dans un autre récipient, la concentration de cette portion est de 0,02 M. Lesquelles de ces affirmations sont correctes ? (CuSO4 : 160 g/mol)",
        "ru": "Ученик хочет приготовить 250 мл 0,1 M раствора CuSO4. I. Ему нужно взвесить 4,0 г CuSO4. II. Если добавить взвешенный CuSO4 к 250 мл чистой воды, получится нужный раствор. III. Если отлить 50 мл приготовленного раствора в другой сосуд, концентрация этой порции будет 0,02 M. Какие утверждения верны? (CuSO4: 160 г/моль)",
        "ar": "يريد طالب تحضير 250 mL من محلول CuSO4 تركيزه 0.1 M. I. يجب أن يزن 4.0 g من CuSO4. II. إذا أضاف CuSO4 الموزون إلى 250 mL من الماء النقي حصل على المحلول المطلوب. III. إذا أخذ 50 mL من المحلول المحضَّر ووضعها في وعاء آخر يصبح تركيز هذا الجزء 0.02 M. أيّ هذه العبارات صحيحة؟ (CuSO4: 160 g/mol)",
        "zh": "某学生要配制 250 mL 0.1 M CuSO4 溶液。有下列说法：I. 他需要称取 4.0 g CuSO4。II. 把称好的 CuSO4 加入 250 mL 纯水中即可得到所需溶液。III. 从配好的溶液中取出 50 mL 放入另一容器，这部分溶液的浓度为 0.02 M。其中正确的是哪些？(CuSO4：160 g/mol)",
        "ku": "Xwendekarek dixwaze 250 mL çareseriya CuSO4 ya 0,1 M amade bike. I. Divê 4,0 g CuSO4 bikişîne. II. Ger CuSO4 ya kişandî li 250 mL ava paqij zêde bike, çareseriya xwestî bi dest dixe. III. Ger 50 mL ji çareseriya amadekirî bixe firaxeke din, hûrbûna vê beşê 0,02 M dibe. Kîjan ji van gotinan rast in? (CuSO4: 160 g/mol)"
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
        "tr": "I doğru: n = 0,1 · 0,25 = 0,025 mol; m = 0,025 · 160 = 4,0 g. II yanlış: Molarite çözelti hacmine göre tanımlanır; katı az suda çözülüp balon jojede toplam hacim 250 mL'ye tamamlanmalıdır, 250 mL suya eklenirse hacim 250 mL'den farklı olur. III yanlış: Homojen bir çözeltiden alınan her kısmın derişimi aynıdır (0,1 M); yalnızca mol sayısı azalır (0,005 mol). Doğru olan yalnız I'dir.",
        "en": "I is correct: n = 0.1 · 0.25 = 0.025 mol; m = 0.025 · 160 = 4.0 g. II is wrong: molarity refers to the volume of solution; the solid must be dissolved in a little water and made up to a total of 250 mL in a volumetric flask, whereas adding it to 250 mL of water gives a volume different from 250 mL. III is wrong: every portion of a homogeneous solution has the same concentration (0.1 M); only the number of moles is smaller (0.005 mol). Only I is correct.",
        "de": "I ist richtig: n = 0,1 · 0,25 = 0,025 mol; m = 0,025 · 160 = 4,0 g. II ist falsch: Die Molarität bezieht sich auf das Lösungsvolumen; der Feststoff wird in wenig Wasser gelöst und im Messkolben auf insgesamt 250 mL aufgefüllt – gibt man ihn zu 250 mL Wasser, weicht das Volumen von 250 mL ab. III ist falsch: Jeder Teil einer homogenen Lösung hat dieselbe Konzentration (0,1 M); nur die Stoffmenge ist kleiner (0,005 mol). Richtig ist nur I.",
        "fr": "I est correcte : n = 0,1 · 0,25 = 0,025 mol ; m = 0,025 · 160 = 4,0 g. II est fausse : la molarité se rapporte au volume de solution ; il faut dissoudre le solide dans un peu d'eau puis compléter à 250 mL au total dans une fiole jaugée, alors que l'ajouter à 250 mL d'eau donne un volume différent de 250 mL. III est fausse : toute portion d'une solution homogène a la même concentration (0,1 M) ; seul le nombre de moles diminue (0,005 mol). Seule I est correcte.",
        "ru": "I верно: n = 0,1 · 0,25 = 0,025 моль; m = 0,025 · 160 = 4,0 г. II неверно: молярность относится к объёму раствора; вещество растворяют в небольшом количестве воды и доводят объём в мерной колбе до 250 мл, а если добавить его к 250 мл воды, объём раствора будет отличаться от 250 мл. III неверно: любая порция однородного раствора имеет ту же концентрацию (0,1 M); уменьшается лишь число молей (0,005 моль). Верно только I.",
        "ar": "I صحيحة: n = 0.1 · 0.25 = 0.025 mol؛ m = 0.025 · 160 = 4.0 g. II خاطئة: المولارية تُنسب إلى حجم المحلول؛ يجب إذابة الصلب في قليل من الماء ثم إكمال الحجم الكلي إلى 250 mL في دورق حجمي، أما إضافته إلى 250 mL من الماء فتعطي حجمًا مختلفًا عن 250 mL. III خاطئة: كل جزء من محلول متجانس له التركيز نفسه (0.1 M)؛ والذي يقل هو عدد المولات فقط (0.005 mol). الصحيحة I فقط.",
        "zh": "I 正确：n = 0.1 × 0.25 = 0.025 mol；m = 0.025 × 160 = 4.0 g。II 错误：物质的量浓度以溶液体积为准；应先用少量水溶解固体，再在容量瓶中定容至总体积 250 mL，而加入 250 mL 水中所得体积并不是 250 mL。III 错误：均匀溶液的任何一部分浓度都相同(0.1 M)，只是物质的量变少(0.005 mol)。只有 I 正确。",
        "ku": "I rast e: n = 0,1 · 0,25 = 0,025 mol; m = 0,025 · 160 = 4,0 g. II şaş e: molarîte li gorî qebareya çareseriyê ye; divê hişk di hindik avê de were helandin û di balona pîvanê de qebareya giştî heta 250 mL were temamkirin, lê ger li 250 mL avê were zêdekirin qebare ji 250 mL cuda dibe. III şaş e: her beşeke çareseriyeke homojen heman hûrbûnê heye (0,1 M); tenê hejmara molan kêm dibe (0,005 mol). Tenê I rast e."
      }
    },
    {
      "id": "u14-twin16",
      "stem": {
        "tr": "25 °C'de 100 g suda X katısından en çok 0,2 g, şekerden ise en çok 200 g çözünebilmektedir. Bu sıcaklıkta 1. kapta 100 g suya 0,2 g X, 2. kapta 100 g suya 50 g şeker eklenip tamamen çözünüyor. Buna göre aşağıdaki ifadelerden hangisi doğrudur?",
        "en": "At 25 °C, at most 0.2 g of solid X and at most 200 g of sugar can dissolve in 100 g of water. At this temperature, 0.2 g of X is added to 100 g of water in container 1, and 50 g of sugar to 100 g of water in container 2; both dissolve completely. Which of the following statements is correct?",
        "de": "Bei 25 °C lösen sich in 100 g Wasser höchstens 0,2 g des Feststoffs X und höchstens 200 g Zucker. Bei dieser Temperatur werden in Gefäß 1 0,2 g X und in Gefäß 2 50 g Zucker jeweils zu 100 g Wasser gegeben und vollständig gelöst. Welche der folgenden Aussagen ist richtig?",
        "fr": "À 25 °C, 100 g d'eau peuvent dissoudre au maximum 0,2 g du solide X et au maximum 200 g de sucre. À cette température, on ajoute 0,2 g de X à 100 g d'eau dans le récipient 1 et 50 g de sucre à 100 g d'eau dans le récipient 2 ; tout se dissout. Laquelle des affirmations suivantes est correcte ?",
        "ru": "При 25 °C в 100 г воды может раствориться не более 0,2 г твёрдого вещества X и не более 200 г сахара. При этой температуре в сосуд 1 к 100 г воды добавили 0,2 г X, а в сосуд 2 к 100 г воды — 50 г сахара; оба вещества полностью растворились. Какое из утверждений верно?",
        "ar": "عند 25 °C يذوب في 100 g من الماء 0.2 g على الأكثر من المادة الصلبة X و200 g على الأكثر من السكر. عند هذه الدرجة أُضيف 0.2 g من X إلى 100 g من الماء في الوعاء 1، و50 g من السكر إلى 100 g من الماء في الوعاء 2، فذاب كل منهما تمامًا. أيّ العبارات الآتية صحيحة؟",
        "zh": "25 °C 时，100 g 水中最多能溶解 0.2 g 固体 X，最多能溶解 200 g 糖。在此温度下，向 1 号容器的 100 g 水中加入 0.2 g X，向 2 号容器的 100 g 水中加入 50 g 糖，均完全溶解。下列说法中正确的是哪一项？",
        "ku": "Di 25 °C de di 100 g avê de herî zêde 0,2 g ji hişka X û herî zêde 200 g şeker dikare bihele. Di vê germahiyê de li firaxa 1. 0,2 g X li 100 g avê, li firaxa 2. jî 50 g şeker li 100 g avê tê zêdekirin û her du bi tevahî dihelin. Li gorî vê, kîjan ji gotinên jêrîn rast e?"
      },
      "options": [
        {
          "tr": "1. kaptaki çözelti hem doymamış hem seyreltiktir.",
          "en": "The solution in container 1 is both unsaturated and dilute.",
          "de": "Die Lösung in Gefäß 1 ist ungesättigt und verdünnt.",
          "fr": "La solution du récipient 1 est à la fois insaturée et diluée.",
          "ru": "Раствор в сосуде 1 ненасыщенный и разбавленный.",
          "ar": "المحلول في الوعاء 1 غير مشبع ومخفف معًا.",
          "zh": "1 号容器中的溶液既不饱和又稀。",
          "ku": "Çareseriya di firaxa 1. de hem netêr hem sist e."
        },
        {
          "tr": "2. kaptaki çözelti hem doygun hem derişiktir.",
          "en": "The solution in container 2 is both saturated and concentrated.",
          "de": "Die Lösung in Gefäß 2 ist gesättigt und konzentriert.",
          "fr": "La solution du récipient 2 est à la fois saturée et concentrée.",
          "ru": "Раствор в сосуде 2 насыщенный и концентрированный.",
          "ar": "المحلول في الوعاء 2 مشبع ومركّز معًا.",
          "zh": "2 号容器中的溶液既饱和又浓。",
          "ku": "Çareseriya di firaxa 2. de hem têr hem hûr e."
        },
        {
          "tr": "Her iki kaptaki çözelti de doymamıştır.",
          "en": "The solutions in both containers are unsaturated.",
          "de": "Die Lösungen in beiden Gefäßen sind ungesättigt.",
          "fr": "Les solutions des deux récipients sont insaturées.",
          "ru": "Растворы в обоих сосудах ненасыщенные.",
          "ar": "المحلول في كلا الوعاءين غير مشبع.",
          "zh": "两个容器中的溶液都不饱和。",
          "ku": "Çareseriyên di her du firaxan de jî netêr in."
        },
        {
          "tr": "1. kaptaki çözelti doygun olduğu hâlde seyreltik, 2. kaptaki çözelti doymamış olduğu hâlde derişiktir.",
          "en": "The solution in container 1 is dilute although saturated, and the solution in container 2 is concentrated although unsaturated.",
          "de": "Die Lösung in Gefäß 1 ist verdünnt, obwohl gesättigt, und die Lösung in Gefäß 2 ist konzentriert, obwohl ungesättigt.",
          "fr": "La solution du récipient 1 est diluée bien que saturée, et celle du récipient 2 est concentrée bien qu'insaturée.",
          "ru": "Раствор в сосуде 1 разбавленный, хотя и насыщенный, а раствор в сосуде 2 концентрированный, хотя и ненасыщенный.",
          "ar": "المحلول في الوعاء 1 مخفف مع أنه مشبع، والمحلول في الوعاء 2 مركّز مع أنه غير مشبع.",
          "zh": "1 号容器中的溶液虽然饱和却很稀，2 号容器中的溶液虽然不饱和却很浓。",
          "ku": "Çareseriya di firaxa 1. de her çend têr be jî sist e, ya di firaxa 2. de her çend netêr be jî hûr e."
        },
        {
          "tr": "2. kaba aynı sıcaklıkta 200 g şeker daha eklenirse tamamı çözünür.",
          "en": "If 200 g more sugar is added to container 2 at the same temperature, all of it dissolves.",
          "de": "Gibt man bei gleicher Temperatur weitere 200 g Zucker in Gefäß 2, löst sich alles.",
          "fr": "Si l'on ajoute 200 g de sucre supplémentaires dans le récipient 2 à la même température, tout se dissout.",
          "ru": "Если при той же температуре добавить в сосуд 2 ещё 200 г сахара, он растворится полностью.",
          "ar": "إذا أُضيف 200 g أخرى من السكر إلى الوعاء 2 عند درجة الحرارة نفسها فإنها تذوب كلها.",
          "zh": "在相同温度下再向 2 号容器中加入 200 g 糖，糖会全部溶解。",
          "ku": "Ger di heman germahiyê de 200 g şekirê din li firaxa 2. were zêdekirin, hemû dihele."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "1. kapta 100 g suda çözünebilecek en fazla miktar (0,2 g X) çözünmüştür; çözelti doygundur ama çözünen miktarı çok az olduğu için seyreltiktir. 2. kapta 200 g çözünebilecekken 50 g şeker çözünmüştür; çözelti doymamıştır ama içerdiği çözünen miktarı fazla olduğu için derişiktir. Doygunluk çözünürlük sınırıyla, derişiklik ise çözünen miktarının çokluğuyla ilgilidir. 2. kaba 200 g daha eklenirse toplam 250 g olur; bu çözünürlüğü (200 g) aştığından 50 g şeker çözünmeden kalır.",
        "en": "In container 1 the maximum amount that 100 g of water can dissolve (0.2 g of X) has dissolved, so the solution is saturated, but with so little solute it is dilute. In container 2 only 50 g of sugar has dissolved where 200 g could, so the solution is unsaturated, but it contains a large amount of solute and is concentrated. Saturation is about the solubility limit, concentration about how much solute there is. Adding 200 g more to container 2 would make 250 g in total, exceeding the solubility (200 g), so 50 g of sugar would remain undissolved.",
        "de": "In Gefäß 1 hat sich die Höchstmenge gelöst, die 100 g Wasser lösen können (0,2 g X); die Lösung ist gesättigt, wegen der sehr kleinen Stoffmenge aber verdünnt. In Gefäß 2 haben sich nur 50 g Zucker gelöst, obwohl 200 g möglich wären; die Lösung ist ungesättigt, enthält aber viel gelösten Stoff und ist konzentriert. Sättigung betrifft die Löslichkeitsgrenze, Konzentration die Menge des gelösten Stoffes. Würde man in Gefäß 2 weitere 200 g geben, wären es insgesamt 250 g; das übersteigt die Löslichkeit (200 g), 50 g Zucker blieben ungelöst.",
        "fr": "Dans le récipient 1, la quantité maximale que 100 g d'eau peuvent dissoudre (0,2 g de X) est dissoute : la solution est saturée mais, avec si peu de soluté, diluée. Dans le récipient 2, seuls 50 g de sucre sont dissous alors que 200 g pourraient l'être : la solution est insaturée mais contient beaucoup de soluté, elle est concentrée. La saturation concerne la limite de solubilité, la concentration la quantité de soluté. Ajouter 200 g de plus au récipient 2 donnerait 250 g au total, au-delà de la solubilité (200 g) : 50 g de sucre resteraient non dissous.",
        "ru": "В сосуде 1 растворилось максимальное количество X, которое может раствориться в 100 г воды (0,2 г), — раствор насыщенный, но из-за очень малого количества растворённого вещества разбавленный. В сосуде 2 растворилось лишь 50 г сахара из возможных 200 г — раствор ненасыщенный, но концентрированный, так как содержит много растворённого вещества. Насыщенность связана с пределом растворимости, а концентрированность — с количеством растворённого вещества. Если добавить в сосуд 2 ещё 200 г сахара, всего будет 250 г, что больше растворимости (200 г), и 50 г сахара останутся нерастворёнными.",
        "ar": "في الوعاء 1 ذابت أكبر كمية يمكن أن تذوب في 100 g من الماء (0.2 g من X)، فالمحلول مشبع لكنه مخفف لأن كمية المذاب قليلة جدًا. في الوعاء 2 ذاب 50 g فقط من السكر مع أنه يمكن أن يذوب 200 g، فالمحلول غير مشبع لكنه مركّز لاحتوائه على كمية كبيرة من المذاب. التشبع يتعلق بحد الذائبية، والتركيز يتعلق بكمية المذاب. ولو أُضيف 200 g أخرى إلى الوعاء 2 لأصبح المجموع 250 g، وهذا يتجاوز الذائبية (200 g)، فيبقى 50 g من السكر دون ذوبان.",
        "zh": "1 号容器中溶解了 100 g 水所能溶解的最大量(0.2 g X)，溶液是饱和的，但溶质极少，所以很稀。2 号容器中最多可溶 200 g 糖，只溶了 50 g，溶液不饱和，但溶质很多，所以很浓。饱和与否取决于溶解度极限，浓稀取决于溶质的多少。若再向 2 号容器加入 200 g 糖，共 250 g，超过溶解度(200 g)，会有 50 g 糖不能溶解。",
        "ku": "Di firaxa 1. de mîqdara herî zêde ya ku 100 g av dikare bihelîne (0,2 g X) heliyaye; çareserî têr e lê ji ber ku çareserbûyî gelek hindik e sist e. Di firaxa 2. de dema ku 200 g dikaribû bihele, tenê 50 g şeker heliyaye; çareserî netêr e lê ji ber ku gelek çareserbûyî tê de heye hûr e. Têrbûn bi sînorê helbûnê, hûrbûn jî bi mîqdara çareserbûyî ve girêdayî ye. Ger 200 g din li firaxa 2. were zêdekirin bi giştî 250 g dibe; ev ji helbûnê (200 g) derbas dibe, ji ber vê 50 g şeker naheliyê."
      }
    }
  ]
};

export default unit14;
