import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit20: ChemistryUnitSeedData = {
  "id": "u20",
  "order": 20,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Çözünürlük Dengesi (Kçç)",
    "en": "Solubility Product (Ksp)",
    "de": "Löslichkeitsprodukt",
    "fr": "Produit de Solubilité",
    "ru": "Произведение растворимости",
    "ar": "حاصل الإذابة",
    "zh": "溶度积",
    "ku": "Hevsengiya Çareserbûnê"
  },
  "subtitle": {
    "tr": "Çökelme Şartı, Kçç Bağıntıları ve Ortak İyon",
    "en": "Ksp, Common Ion Effect & Selective Precipitation",
    "de": "Niederschlagszustand, Ktch-Beziehungen und gemeinsames Ion",
    "fr": "Conditions de précipitation, relations Ktch et ions communs",
    "ru": "Условия осаждения, отношения Ktch и общий ион",
    "ar": "حالة الهطول، علاقات Ktch والأيون المشترك",
    "zh": "降水条件、Ktch关系和共离子",
    "ku": "Rewşa baranê, Têkiliyên Ktch û Ionê Hevbeş"
  },
  "facts": [
    {
      "id": "u20-f01",
      "fact": {
        "tr": "Çözünürlük çarpımı sabiti (Kçç), az çözünen tuzların doymuş sulu çözeltilerindeki iyon derişimleri çarpımıdır.",
        "en": "The solubility product constant (Ksp) is the product of the ion concentrations of sparingly soluble salts in saturated aqueous solutions.",
        "de": "Die Löslichkeitsproduktkonstante (Ksp) ist das Produkt der Ionenkonzentrationen schwerlöslicher Salze in gesättigten wässrigen Lösungen.",
        "fr": "La constante du produit de solubilité (Ksp) est le produit des concentrations d'ions de sels peu solubles dans des solutions aqueuses saturées.",
        "ru": "Константа произведения растворимости (Ksp) представляет собой произведение концентраций ионов труднорастворимых солей в насыщенных водных растворах.",
        "ar": "ثابت ناتج الذوبان (Ksp) هو حاصل ضرب التركيزات الأيونية للأملاح قليلة الذوبان في المحاليل المائية المشبعة.",
        "zh": "溶度积常数 (Ksp) 是饱和水溶液中难溶盐的离子浓度的乘积。",
        "ku": "Berhema helbûnê ya sabît (Ksp) berhema kombûna îyonê ya xwêyên kêm-çareser ên di nav avên têrbûyî de ye."
      },
      "trap": {
        "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
        "en": "Kçç refers to the concentration of highly soluble salts.",
        "de": "Kçç bezieht sich auf die Konzentration hochlöslicher Salze.",
        "fr": "Kçç fait référence à la concentration de sels hautement solubles.",
        "ru": "Kçç относится к концентрации хорошо растворимых солей.",
        "ar": "يشير Kçç إلى تركيز الأملاح شديدة الذوبان.",
        "zh": "Kçç 是指高溶解盐的浓度。",
        "ku": "Kçç behsa kombûna xwêyên pir heliyaye dike."
      }
    },
    {
      "id": "u20-f02",
      "fact": {
        "tr": "Kçç sabiti YALNIZCA sıcaklıkla değişir; ortak iyon, çözünen miktarı veya su eklemek Kçç yi DEĞİŞTİRMEZ.",
        "en": "The Ksp constant changes ONLY with temperature; Adding common ion, amount of solute, or water DOES NOT change Ksp.",
        "de": "Die Ksp-Konstante ändert sich NUR mit der Temperatur; Die Zugabe von gewöhnlichem Ion, der Menge an gelöstem Stoff oder Wasser verändert Ksp NICHT.",
        "fr": "La constante Ksp change UNIQUEMENT avec la température ; L'ajout d'ions communs, de quantité de soluté ou d'eau NE modifie PAS Ksp.",
        "ru": "Константа Ksp меняется ТОЛЬКО с температурой; Добавление общего иона, количества растворенного вещества или воды НЕ ИЗМЕНЯЕТ Ksp.",
        "ar": "يتغير ثابت Ksp فقط مع درجة الحرارة؛ إن إضافة الأيون المشترك أو كمية المذاب أو الماء لا يغير Ksp.",
        "zh": "Ksp 常数仅随温度变化；添加普通离子、溶质量或水不会改变 Ksp。",
        "ku": "Ksp domdar TENÊ bi germahiyê diguhere; Zêdekirina îyona hevpar, mîqdara madeya çareserkirî, an avê Ksp NAguherîne."
      },
      "trap": {
        "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
        "en": "When the common ion is added, the Ksp value becomes smaller.",
        "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
        "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
        "ru": "При добавлении общего иона значение Ksp становится меньше.",
        "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
        "zh": "当添加普通离子时，Ksp值变小。",
        "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
      },
      "osymTip": {
        "tr": "ÖSYM kuralı: Kçç yi sadece sıcaklık değiştirir!",
        "en": "ÖSYM rule: Only temperature changes Kçç!",
        "de": "ÖSYM-Regel: Nur Temperaturänderungen Kçç!",
        "fr": "Règle ÖSYM : Seuls les changements de température Kçç !",
        "ru": "Правило ÖSYM: Изменения только температуры Kçç!",
        "ar": "قاعدة ÖSYM: فقط درجات الحرارة تتغير Kçç!",
        "zh": "ÖSYM 规则：只有温度会改变 Kçç！",
        "ku": "Qanûna ÖSYM: Tenê germahî diguhere Kçç!"
      }
    },
    {
      "id": "u20-f03",
      "fact": {
        "tr": "1:1 tuzlarda (AgCl) çözünürlük s ise Kçç = s^2 dir (s = sqrt(Kçç)).",
        "en": "If the solubility in 1:1 salts (AgCl) is s, Ksp = s^2 (s = sqrt(Ksp)).",
        "de": "Wenn die Löslichkeit in 1:1-Salzen (AgCl) s beträgt, ist Ksp = s^2 (s = sqrt(Ksp)).",
        "fr": "Si la solubilité dans les sels 1:1 (AgCl) est s, Ksp = s^2 (s = sqrt(Ksp)).",
        "ru": "Если растворимость в солях 1:1 (AgCl) равна s, Ksp = s^2 (s = sqrt(Ksp)).",
        "ar": "إذا كانت قابلية الذوبان في الأملاح 1:1 (AgCl) هي s، فإن Ksp = s^2 (s = sqrt(Ksp)).",
        "zh": "如果 1:1 盐 (AgCl) 中的溶解度为 s，则 Ksp = s^2 (s = sqrt(Ksp))。",
        "ku": "Heke di xwêyên 1:1 (AgCl) de çareserî s be, Ksp = s^2 (s = sqrt(Ksp))."
      },
      "trap": {
        "tr": "AgCl için Kçç = 4s^3 tür.",
        "en": "For AgCl, Ksp = 4s^3.",
        "de": "Für AgCl ist Ksp = 4s^3.",
        "fr": "Pour AgCl, Ksp = 4s^3.",
        "ru": "Для AgCl Ksp = 4s^3.",
        "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
        "zh": "对于 AgCl，Ksp = 4s^3。",
        "ku": "Ji bo AgCl, Ksp = 4s^3."
      }
    },
    {
      "id": "u20-f04",
      "fact": {
        "tr": "1:2 tuzlarda (PbCl2, CaF2) çözünürlük s ise Kçç = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3 tür.",
        "en": "If the solubility in 1:2 salts (PbCl2, CaF2) is s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "de": "Wenn die Löslichkeit in 1:2-Salzen (PbCl2, CaF2) s beträgt, ist Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "fr": "Si la solubilité dans les sels 1:2 (PbCl2, CaF2) est s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "ru": "Если растворимость в солях соотношения 1:2 (PbCl2, CaF2) равна s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "ar": "إذا كانت قابلية الذوبان في الأملاح 1:2 (PbCl2, CaF2) هي s، فإن Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "zh": "如果在 1:2 盐（PbCl2、CaF2）中的溶解度为 s，则 Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3。",
        "ku": "Heke di xwêyên 1:2 de (PbCl2, CaF2) çareserî s be, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3."
      },
      "trap": {
        "tr": "PbCl2 için Kçç = 2s^2 dir.",
        "en": "For PbCl2, Ksp = 2s^2.",
        "de": "Für PbCl2 ist Ksp = 2s^2.",
        "fr": "Pour PbCl2, Ksp = 2s^2.",
        "ru": "Для PbCl2 Ksp = 2s^2.",
        "ar": "بالنسبة لـ PbCl2، Ksp = 2s^2.",
        "zh": "对于 PbCl2，Ksp = 2s^2。",
        "ku": "Ji bo PbCl2, Ksp = 2s^2."
      }
    },
    {
      "id": "u20-f05",
      "fact": {
        "tr": "1:3 tuzlarda (Al(OH)3, Fe(OH)3) çözünürlük s ise Kçç = s * (3s)^3 = 27s^4 tür.",
        "en": "If the solubility in 1:3 salts (Al(OH)3, Fe(OH)3) is s, Ksp = s * (3s)^3 = 27s^4.",
        "de": "Wenn die Löslichkeit in 1:3-Salzen (Al(OH)3, Fe(OH)3) s beträgt, ist Ksp = s * (3s)^3 = 27s^4.",
        "fr": "Si la solubilité dans les sels 1:3 (Al(OH)3, Fe(OH)3) est s, Ksp = s * (3s)^3 = 27s^4.",
        "ru": "Если растворимость в солях соотношения 1:3 (Al(OH)3, Fe(OH)3) равна s, Ksp = s * (3s)^3 = 27s^4.",
        "ar": "إذا كانت الذوبانية في أملاح 1:3 (Al(OH)3, Fe(OH)3) هي s، Ksp = s * (3s)^3 = 27s^4.",
        "zh": "如果在 1:3 盐（Al(OH)3、Fe(OH)3）中的溶解度为 s，则 Ksp = s * (3s)^3 = 27s^4。",
        "ku": "Heke di xwêyên 1:3 de (Al(OH)3, Fe(OH)3) çareserî s be, Ksp = s * (3s)^3 = 27s^4."
      },
      "trap": {
        "tr": "Al(OH)3 için Kçç = 3s^3 tür.",
        "en": "For Al(OH)3, Ksp = 3s^3.",
        "de": "Für Al(OH)3 ist Ksp = 3s^3.",
        "fr": "Pour Al(OH)3, Ksp = 3s^3.",
        "ru": "Для Al(OH)3 Ksp = 3s^3.",
        "ar": "بالنسبة لـ Al(OH)3، Ksp = 3s^3.",
        "zh": "对于 Al(OH)3，Ksp = 3s^3。",
        "ku": "Ji bo Al(OH)3, Ksp = 3s^3."
      }
    },
    {
      "id": "u20-f06",
      "fact": {
        "tr": "Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.",
        "en": "Common ion effect: The presence of common ions in the solution shifts the equilibrium to the reactants and reduces the solubility, as per Le Chatelier.",
        "de": "Gemeinsamer Ioneneffekt: Das Vorhandensein gemeinsamer Ionen in der Lösung verschiebt das Gleichgewicht zu den Reaktanten und verringert die Löslichkeit, so Le Chatelier.",
        "fr": "Effet des ions communs : La présence d'ions communs dans la solution déplace l'équilibre vers les réactifs et réduit la solubilité, selon Le Chatelier.",
        "ru": "Эффект общего иона: присутствие общих ионов в растворе смещает равновесие в сторону реагентов и снижает растворимость, согласно Ле Шателье.",
        "ar": "تأثير الأيونات المشتركة: يؤدي وجود الأيونات المشتركة في المحلول إلى تحويل التوازن إلى المواد المتفاعلة وتقليل قابلية الذوبان، وفقًا لـ Le Chatelier.",
        "zh": "常见离子效应：根据 Le Chatelier 的说法，溶液中常见离子的存在会将平衡转移到反应物并降低溶解度。",
        "ku": "Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike."
      },
      "trap": {
        "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
        "en": "The common ion increases the solubility of the salt.",
        "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
        "fr": "L'ion commun augmente la solubilité du sel.",
        "ru": "Общий ион увеличивает растворимость соли.",
        "ar": "الأيون المشترك يزيد من ذوبان الملح.",
        "zh": "共同离子增加了盐的溶解度。",
        "ku": "Iyona hevpar helbûna xwê zêde dike."
      }
    },
    {
      "id": "u20-f07",
      "fact": {
        "tr": "İyon çarpımı Qi (çökelme kesri): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.",
        "en": "Ion product Qi (precipitation fraction): If Qi > Kçç, the solution is supersaturated and precipitation occurs.",
        "de": "Ionenprodukt Qi (Ausfällungsanteil): Wenn Qi > Kçç, ist die Lösung übersättigt und es kommt zur Ausfällung.",
        "fr": "Produit ionique Qi (fraction de précipitation) : Si Qi > Kçç, la solution est sursaturée et une précipitation se produit.",
        "ru": "Ионный продукт Qi (фракция осадков): Если Qi > Kçç, раствор перенасыщен и происходит осаждение.",
        "ar": "المنتج الأيوني Qi (جزء الهطول): إذا كان Qi > Kçç، يكون المحلول مفرط التشبع ويحدث الهطول.",
        "zh": "离子积 Qi（沉淀分数）：如果 Qi > Kçç，则溶液过饱和并发生沉淀。",
        "ku": "Berhema îyonî Qi (parçeya baranê): Ger Qi > Kçç, çareserî pir têr dibe û barîn çêdibe."
      },
      "trap": {
        "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
        "en": "When Qi < Ksp, precipitation occurs.",
        "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
        "fr": "Lorsque Qi < Ksp, des précipitations se produisent.",
        "ru": "Когда Qi < Ksp, выпадают осадки.",
        "ar": "عندما يكون Qi <Ksp، يحدث هطول الأمطار.",
        "zh": "当 Qi < Ksp 时，发生沉淀。",
        "ku": "Dema Qi < Ksp, barîn çêdibe."
      }
    },
    {
      "id": "u20-f08",
      "fact": {
        "tr": "Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.",
        "en": "If Qi = Kçç, the solution is fully saturated and there is no precipitation; If Qi < Kçç, the solution is unsaturated.",
        "de": "Wenn Qi = Kçç, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Kçç, ist die Lösung ungesättigt.",
        "fr": "Si Qi = Kçç, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Kçç, la solution est insaturée.",
        "ru": "Если Qi = Kçç, раствор полностью насыщен и осадок отсутствует; Если Qi < Kçç, решение ненасыщенное.",
        "ar": "إذا كان Qi = Kçç، يكون المحلول مشبعًا بالكامل ولا يوجد هطول؛ إذا كان Qi < Kçç، فإن المحلول غير مشبع.",
        "zh": "若Qi=Kçç，则溶液完全饱和，无沉淀；如果 Qi < Kçç，则溶液不饱和。",
        "ku": "Heke Qi = Kçç, çareserî bi tevahî têr bûye û barîn tune; Heke Qi < Kçç, çareserî ne têr e."
      },
      "trap": {
        "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
        "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
        "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
        "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
        "ru": "При Qi = Ksp раствор ненасыщен и соль выпадает в осадок.",
        "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
        "zh": "当Qi = Ksp时，溶液不饱和，盐沉淀。",
        "ku": "Dema Qi = Ksp, çareserî têr nabe û xwê dibare."
      }
    },
    {
      "id": "u20-f09",
      "fact": {
        "tr": "AgCl katısının saf sudaki çözünürlüğü, 0.1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.",
        "en": "The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.",
        "de": "Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.",
        "fr": "La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.",
        "ru": "Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.",
        "ar": "إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.",
        "zh": "AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。",
        "ku": "Çareseriya AgCl ya hişk a di ava paqij de ji helbûna wê ya di nav 0,1 M çareseriya NaCl de PÊKIR MEZIRtir e."
      },
      "trap": {
        "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
        "en": "AgCl salt is more soluble in NaCl solution than in pure water.",
        "de": "AgCl-Salz ist in NaCl-Lösung löslicher als in reinem Wasser.",
        "fr": "Le sel AgCl est plus soluble dans une solution de NaCl que dans l’eau pure.",
        "ru": "Соль AgCl более растворима в растворе NaCl, чем в чистой воде.",
        "ar": "ملح AgCl أكثر قابلية للذوبان في محلول NaCl منه في الماء النقي.",
        "zh": "AgCl盐在氯化钠溶液中比在纯水中更易溶解。",
        "ku": "Xwêya AgCl ji ava paqij di çareseriya NaCl de bêtir tê çareserkirin."
      }
    },
    {
      "id": "u20-f10",
      "fact": {
        "tr": "Endotermik çözünen bir tuzda sıcaklık artırılırsa Kçç artar ve çözünürlük artar.",
        "en": "If the temperature is increased in an endothermically dissolving salt, Ksp increases and the solubility increases.",
        "de": "Wird in einem sich endotherm lösenden Salz die Temperatur erhöht, erhöht sich Ksp und die Löslichkeit steigt.",
        "fr": "Si la température augmente dans un sel à dissolution endothermique, Ksp augmente et la solubilité augmente.",
        "ru": "Если температура эндотермически растворяющейся соли повышается, Ksp увеличивается и растворимость увеличивается.",
        "ar": "إذا زادت درجة الحرارة في ملح مذاب ماص للحرارة فإن Ksp تزداد وتزداد ذوبانه.",
        "zh": "如果吸热溶解盐的温度升高，Ksp 增加并且溶解度增加。",
        "ku": "Ger germahî di xwêyek endotermîk de zêde bibe, Ksp zêde dibe û çareserî zêde dibe."
      },
      "trap": {
        "tr": "Endotermik tuzda ısıtma yapılırsa Kçç küçülür.",
        "en": "If heating is done in endothermic salt, Ksp shrinks.",
        "de": "Wenn in endothermem Salz erhitzt wird, schrumpft Ksp.",
        "fr": "Si le chauffage est effectué dans du sel endothermique, Ksp rétrécit.",
        "ru": "Если нагревание происходит в эндотермической соли, Ksp сжимается.",
        "ar": "إذا تم التسخين في ملح ماص للحرارة، فإن Ksp ينكمش.",
        "zh": "如果在吸热盐中加热，Ksp 会收缩。",
        "ku": "Ger germkirin di xwêya endotermîk de were kirin, Ksp piçûk dibe."
      }
    },
    {
      "id": "u20-f11",
      "fact": {
        "tr": "Ekzotermik çözünen bir tuzda sıcaklık artırılırsa Kçç azalır ve çözünürlük azalır.",
        "en": "If the temperature is increased in an exothermically dissolving salt, Ksp decreases and the solubility decreases.",
        "de": "Wird in einem sich exotherm lösenden Salz die Temperatur erhöht, sinkt Ksp und die Löslichkeit nimmt ab.",
        "fr": "Si la température augmente dans un sel à dissolution exothermique, Ksp diminue et la solubilité diminue.",
        "ru": "Если температура экзотермически растворяющейся соли повышается, Ksp уменьшается и растворимость снижается.",
        "ar": "إذا ارتفعت درجة حرارة الملح المذاب طارداً للحرارة، فإن Ksp تنخفض وتقل ذوبانه.",
        "zh": "如果放热溶解盐的温度升高，Ksp 降低并且溶解度降低。",
        "ku": "Ger germahî di xwêya ku bi exotermîk tê helandin de zêde bibe, Ksp kêm dibe û çareserî kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.",
        "en": "In exothermic salts, as the temperature increases, more substances dissolve.",
        "de": "In exothermen Salzen lösen sich mit zunehmender Temperatur mehr Stoffe auf.",
        "fr": "Dans les sels exothermiques, à mesure que la température augmente, davantage de substances se dissolvent.",
        "ru": "В экзотермических солях при повышении температуры растворяется больше веществ.",
        "ar": "في الأملاح الطاردة للحرارة، مع ارتفاع درجة الحرارة، يذوب المزيد من المواد.",
        "zh": "在放热盐中，随着温度升高，更多物质溶解。",
        "ku": "Di xwêyên exotermîk de, her ku germahî zêde dibe, maddeyên zêde dihelin."
      }
    },
    {
      "id": "u20-f12",
      "fact": {
        "tr": "Çözeltiye aynı sıcaklıkta su eklenirse dipteki katı çözünür ancak doymuş çözeltideki iyon derişimleri ve Kçç değişmez.",
        "en": "If water is added to the solution at the same temperature, the bottom solid dissolves, but the ion concentrations and Ksp in the saturated solution do not change.",
        "de": "Wenn der Lösung bei gleicher Temperatur Wasser zugesetzt wird, löst sich der Bodenfeststoff auf, aber die Ionenkonzentrationen und Ksp in der gesättigten Lösung ändern sich nicht.",
        "fr": "Si de l'eau est ajoutée à la solution à la même température, le solide inférieur se dissout, mais les concentrations d'ions et de Ksp dans la solution saturée ne changent pas.",
        "ru": "Если к раствору при той же температуре добавить воду, донный остаток растворится, но концентрации ионов и Kуд в насыщенном растворе не изменяются.",
        "ar": "إذا أضيف الماء إلى المحلول بنفس درجة الحرارة، فإن المادة الصلبة السفلية تذوب، لكن تركيز الأيونات و Ksp في المحلول المشبع لا يتغير.",
        "zh": "如果在相同温度下向溶液中加入水，底部固体溶解，但饱和溶液中的离子浓度和Ksp不改变。",
        "ku": "Ger di heman germahiyê de av li çarenûsê were zêdekirin, qalika binî dihele, lê hêjmara îyonan û Ksp di çareseriya têrbûyî de naguhere."
      },
      "trap": {
        "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
        "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
        "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
        "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
        "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
        "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
        "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
        "ku": "Ger av li çaraleke ku li binê wê maddeyên hişk hene, were zêdekirin, konsantasyona çareseriyê zû zêde dibe."
      }
    },
    {
      "id": "u20-f13",
      "fact": {
        "tr": "Seçimli çöktürme: İki iyon içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.",
        "en": "Selective precipitation: When a precipitant is added to a solution containing two ions, the one with the lower Ksp (less soluble) precipitates first.",
        "de": "Selektive Fällung: Wenn einer Lösung, die zwei Ionen enthält, ein Fällungsmittel zugesetzt wird, fällt zuerst dasjenige mit dem niedrigeren Ksp (weniger löslich) aus.",
        "fr": "Précipitation sélective : lorsqu'un précipitant est ajouté à une solution contenant deux ions, celui avec le Ksp le plus faible (le moins soluble) précipite en premier.",
        "ru": "Селективное осаждение: когда осадитель добавляется к раствору, содержащему два иона, первым выпадает в осадок тот, у которого меньше Ksp (менее растворимый).",
        "ar": "الترسيب الانتقائي: عند إضافة مادة مرسبة إلى محلول يحتوي على أيونين، فإن الذي يحتوي على Ksp الأقل (الأقل قابلية للذوبان) يترسب أولاً.",
        "zh": "选择性沉淀：当将沉淀剂添加到含有两种离子的溶液中时，Ksp 较低（溶解度较小）的离子首先沉淀。",
        "ku": "Barîna hilbijartî: Dema ku rijandinek li çareseriyek ku du îyon tê de tê zêde kirin, ya ku Ksp kêmtir e (kêm tê çareserkirin) pêşî dibare."
      },
      "trap": {
        "tr": "Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
        "en": "The salt with the highest Ksp precipitates out of solution first.",
        "de": "Das Salz mit dem höchsten Ksp fällt zuerst aus der Lösung aus.",
        "fr": "Le sel avec le Ksp le plus élevé précipite en premier hors de la solution.",
        "ru": "Соль с наибольшим Ksp выпадает в осадок из раствора первой.",
        "ar": "يترسب الملح ذو أعلى Ksp خارج المحلول أولاً.",
        "zh": "Ksp 最高的盐首先从溶液中沉淀出来。",
        "ku": "Xwêya bi Ksp-ya herî zêde ewil ji çareseriyê derdikeve."
      }
    },
    {
      "id": "u20-f14",
      "fact": {
        "tr": "Sıcak su mağaralarındaki sarkıt ve dikitler (travertenler), CaCO3 ün çözünürlük dengesi ile oluşur.",
        "en": "Stalactites and stalagmites (travertines) in hot water caves are formed by the solubility balance of CaCO3.",
        "de": "Stalaktiten und Stalagmiten (Travertine) in Heißwasserhöhlen entstehen durch das Löslichkeitsgleichgewicht von CaCO3.",
        "fr": "Les stalactites et stalagmites (travertins) dans les grottes d’eau chaude sont formées par l’équilibre de solubilité du CaCO3.",
        "ru": "Сталактиты и сталагмиты (травертины) в пещерах с горячей водой образуются за счет баланса растворимости CaCO3.",
        "ar": "تتشكل الهوابط والصواعد (الحجر الجيري) في كهوف الماء الساخن من خلال توازن ذوبان CaCO3.",
        "zh": "热水洞中的钟乳石和石笋（石灰华）是由CaCO3的溶解度平衡形成的。",
        "ku": "Stalaktît û stalagmît (travertîn) di şikeftên ava germ de ji balansa çareserbûnê ya CaCO3 çêdibin."
      },
      "trap": {
        "tr": "Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.",
        "en": "Stalactites and stalagmites are accumulations of sand as a result of physical evaporation.",
        "de": "Stalaktiten und Stalagmiten sind Sandansammlungen, die durch physikalische Verdunstung entstanden sind.",
        "fr": "Les stalactites et les stalagmites sont des accumulations de sable résultant de l'évaporation physique.",
        "ru": "Сталактиты и сталагмиты представляют собой скопления песка в результате физического испарения.",
        "ar": "الهوابط والصواعد هي تراكمات من الرمال نتيجة التبخر المادي.",
        "zh": "钟乳石和石笋是由于物理蒸发而形成的沙子堆积物。",
        "ku": "Stalaktît û stalagmît kombûna qûmê ne ku di encama evaporkirina fizîkî de ye."
      }
    },
    {
      "id": "u20-f15",
      "fact": {
        "tr": "Bazik tuzların (örn. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.",
        "en": "The solubility of basic salts (e.g. Mg(OH)2) in an acidic environment increases because H+ ions neutralize OH- ions, shifting the equilibrium to the right.",
        "de": "Die Löslichkeit basischer Salze (z. B. Mg(OH)2) in einer sauren Umgebung erhöht sich, weil H+-Ionen OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschiebt.",
        "fr": "La solubilité des sels basiques (par exemple Mg(OH)2) dans un environnement acide augmente car les ions H+ neutralisent les ions OH-, déplaçant l'équilibre vers la droite.",
        "ru": "Растворимость основных солей (например, Mg(OH)2) в кислой среде увеличивается, поскольку ионы H+ нейтрализуют ионы OH-, смещая равновесие вправо.",
        "ar": "تزداد قابلية ذوبان الأملاح الأساسية (مثل Mg(OH)2) في البيئة الحمضية لأن أيونات H+ تحيد أيونات OH-، مما يؤدي إلى تحويل التوازن إلى اليمين.",
        "zh": "碱性盐（例如 Mg(OH)2）在酸性环境中的溶解度增加，因为 H+ 离子中和 OH- 离子，使平衡向右移动。",
        "ku": "Çareseriya xwêyên bingehîn (mînak Mg(OH)2) di hawîrdora asîd de zêde dibe ji ber ku îyonên H+ îyonên OH- bêbandor dikin, hevsengiyê ber bi rastê ve diguherînin."
      },
      "trap": {
        "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
        "en": "Mg(OH)2 is less soluble in acidic environment.",
        "de": "Mg(OH)2 ist in saurer Umgebung weniger löslich.",
        "fr": "Mg(OH)2 est moins soluble dans un environnement acide.",
        "ru": "Mg(OH)2 менее растворим в кислой среде.",
        "ar": "Mg(OH)2 أقل قابلية للذوبان في البيئة الحمضية.",
        "zh": "Mg(OH)2在酸性环境中溶解度较低。",
        "ku": "Mg(OH)2 di hawîrdora asîd de kêmtir tê çareserkirin."
      }
    },
    {
      "id": "u20-f16",
      "fact": {
        "tr": "Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).",
        "en": "Complexation may increase the solubility of poorly soluble salts (e.g. dissolution of AgCl in NH3 medium).",
        "de": "Die Komplexierung kann die Löslichkeit schwerlöslicher Salze erhöhen (z. B. Auflösung von AgCl in NH3-Medium).",
        "fr": "La complexation peut augmenter la solubilité des sels peu solubles (par exemple dissolution d'AgCl dans un milieu NH3).",
        "ru": "Комплексообразование может повысить растворимость плохо растворимых солей (например, растворение AgCl в среде NH3).",
        "ar": "قد يزيد التعقيد من قابلية ذوبان الأملاح ضعيفة الذوبان (مثل ذوبان AgCl في وسط NH3).",
        "zh": "络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。",
        "ku": "Tevlihevbûn dibe ku helbûna xwêyên kêm-çareserî zêde bike (mînak, belavbûna AgCl di navgîna NH3 de)."
      },
      "trap": {
        "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
        "en": "Complex formation precipitates the salt immediately.",
        "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
        "fr": "La formation de complexes précipite le sel immédiatement.",
        "ru": "При образовании комплекса соль немедленно осаждается.",
        "ar": "يؤدي التكوين المعقد إلى ترسيب الملح على الفور.",
        "zh": "络合物的形成使盐立即沉淀。",
        "ku": "Pêkhatina tevlihev xwê tavilê radike."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u20-c01",
      "conceptA": {
        "tr": "Qi < Kçç",
        "en": "Qi < Ksp",
        "de": "Qi < Ksp",
        "fr": "Qi <Ksp",
        "ru": "Ци <Ксп",
        "ar": "تشى <كسب",
        "zh": "Qi < Ksp",
        "ku": "Qi < Ksp"
      },
      "conceptB": {
        "tr": "Qi > Kçç",
        "en": "Qi > Kçch",
        "de": "Qi > Kçch",
        "fr": "Qi > Kçch",
        "ru": "Ци > Кчч",
        "ar": "تشي> كتش",
        "zh": "齐 > 克奇",
        "ku": "Qi > Kçch"
      },
      "distinction": {
        "tr": "Qi < Kçç doymamış çözelti çökelme yok; Qi > Kçç aşırı doymuş çözelti çökelme var demektir.",
        "en": "Qi < Ksp unsaturated solution no precipitation; Qi > Kçç means there is supersaturated solution precipitation.",
        "de": "Qi < Ksp ungesättigte Lösung kein Niederschlag; Qi > Kçç bedeutet, dass eine übersättigte Lösung ausfällt.",
        "fr": "Qi < Ksp solution insaturée pas de précipitation ; Qi > Kçç signifie qu’il y a précipitation de solution sursaturée.",
        "ru": "Qi < Ksp ненасыщенный раствор без выпадения осадка; Qi > Kçç означает выпадение пересыщенного раствора.",
        "ar": "Qi <Ksp محلول غير مشبع بدون هطول؛ Qi > Kçç يعني وجود ترسيب محلول مفرط التشبع.",
        "zh": "Qi < Ksp 不饱和溶液无沉淀； Qi > Kçç 表示有过饱和溶液沉淀。",
        "ku": "Qi < Ksp çareseriya ne têrbûyî bê barîn; Qi > Kçç tê wê wateyê ku barîna çareseriya pir têrbûyî heye."
      }
    },
    {
      "id": "u20-c02",
      "conceptA": {
        "tr": "Saf Sudaki Çözünürlük",
        "en": "Solubility in Pure Water",
        "de": "Löslichkeit in reinem Wasser",
        "fr": "Solubilité dans l'eau pure",
        "ru": "Растворимость в чистой воде",
        "ar": "الذوبان في الماء النقي",
        "zh": "在纯水中的溶解度",
        "ku": "Çareseriya di ava paqij"
      },
      "conceptB": {
        "tr": "Ortak İyondaki Çözünürlük",
        "en": "Solubility in Common Ion",
        "de": "Löslichkeit in gewöhnlichem Ion",
        "fr": "Solubilité dans l'ion commun",
        "ru": "Растворимость в общем ионе",
        "ar": "الذوبان في الأيونات المشتركة",
        "zh": "在普通离子中的溶解度",
        "ku": "Çareseriya di Ionê de"
      },
      "distinction": {
        "tr": "Ortak iyon varlığı dengeyi sola kaydırarak çözünürlüğü büyük ölçüde düşürür.",
        "en": "The presence of common ions shifts the equilibrium to the left, greatly reducing the solubility.",
        "de": "Das Vorhandensein gemeinsamer Ionen verschiebt das Gleichgewicht nach links, wodurch die Löslichkeit stark verringert wird.",
        "fr": "La présence d’ions communs déplace l’équilibre vers la gauche, réduisant considérablement la solubilité.",
        "ru": "Присутствие общих ионов смещает равновесие влево, что значительно снижает растворимость.",
        "ar": "يؤدي وجود الأيونات المشتركة إلى تغيير التوازن إلى اليسار، مما يقلل بشكل كبير من قابلية الذوبان.",
        "zh": "常见离子的存在使平衡向左移动，大大降低了溶解度。",
        "ku": "Hebûna îyonên hevpar hevsengiyê ber bi çepê ve diguhere, helbûnê pir kêm dike."
      }
    },
    {
      "id": "u20-c03",
      "conceptA": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Resolution Product (Ksp)",
        "de": "Auflösungsprodukt (Ksp)",
        "fr": "Produit de résolution (Ksp)",
        "ru": "Продукт разрешения (Ksp)",
        "ar": "منتج الدقة (Ksp)",
        "zh": "分辨率产品 (Ksp)",
        "ku": "Hilbera Çareseriyê (Ksp)"
      },
      "conceptB": {
        "tr": "Molar Çözünürlük (s)",
        "en": "Molar Solubility (s)",
        "de": "Molare Löslichkeit (en)",
        "fr": "Solubilité(s) molaire(s)",
        "ru": "Молярная растворимость (а)",
        "ar": "الذوبان المولي (ق)",
        "zh": "摩尔溶解度（s）",
        "ku": "Çareseriya Molar (s)"
      },
      "distinction": {
        "tr": "Kçç denge sabitidir ve sadece sıcaklıkla değişir; s ise 1 litrede çözünen maksimum mol sayısı olup ortak iyonla azalır.",
        "en": "Ksp is the equilibrium constant and varies only with temperature; s is the maximum number of moles dissolved in 1 liter and decreases with the common ion.",
        "de": "Ksp ist die Gleichgewichtskonstante und variiert nur mit der Temperatur; s ist die maximale Anzahl der in 1 Liter gelösten Mol und nimmt mit dem gemeinsamen Ion ab.",
        "fr": "Ksp est la constante d'équilibre et ne varie qu'avec la température ; s est le nombre maximum de moles dissoutes dans 1 litre et diminue avec l'ion commun.",
        "ru": "Ksp — константа равновесия и меняется только с температурой; s — максимальное количество молей, растворенных в 1 литре, которое уменьшается с ростом общего иона.",
        "ar": "Ksp هو ثابت التوازن ويتغير فقط مع درجة الحرارة؛ s هو الحد الأقصى لعدد المولات المذابة في 1 لتر ويتناقص مع الأيون المشترك.",
        "zh": "Ksp 是平衡常数，仅随温度变化； s 是 1 升中溶解的最大摩尔数，随着普通离子的增加而减少。",
        "ku": "Ksp berdewamiya hevsengiyê ye û tenê bi germahiyê diguhere; s hejmara herî zêde ya molên ku di 1 lîtreyê de dihele ye û bi îyona hevpar re kêm dibe."
      }
    },
    {
      "id": "u20-c04",
      "conceptA": {
        "tr": "İyon Çarpımı (Qi)",
        "en": "Ion Multiplication (Qi)",
        "de": "Ionenvervielfachung (Qi)",
        "fr": "Multiplication des ions (Qi)",
        "ru": "Умножение ионов (Ци)",
        "ar": "الضرب الأيوني (تشي)",
        "zh": "离子倍增 (Qi)",
        "ku": "Pirbûna îyonan (Qi)"
      },
      "conceptB": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Resolution Product (Ksp)",
        "de": "Auflösungsprodukt (Ksp)",
        "fr": "Produit de résolution (Ksp)",
        "ru": "Продукт разрешения (Ksp)",
        "ar": "منتج الدقة (Ksp)",
        "zh": "分辨率产品 (Ksp)",
        "ku": "Hilbera Çareseriyê (Ksp)"
      },
      "distinction": {
        "tr": "Qi o andaki iyon derişimleri çarpımıdır; Qi > Kçç ise çözelti aşırı doygundur ve çökme başlar.",
        "en": "Qi is the product of ion concentrations at that moment; If Qi > Kçç, the solution is supersaturated and precipitation begins.",
        "de": "Qi ist das Produkt der Ionenkonzentrationen zu diesem Zeitpunkt; Wenn Qi > Kçç, ist die Lösung übersättigt und es beginnt eine Ausfällung.",
        "fr": "Le Qi est le produit des concentrations d’ions à ce moment-là ; Si Qi > Kçç, la solution est sursaturée et la précipitation commence.",
        "ru": "Qi – произведение концентраций ионов в данный момент; Если Qi > Kçç, раствор пересыщается и начинается осаждение.",
        "ar": "تشي هو نتاج تركيزات الأيونات في تلك اللحظة؛ إذا كان Qi > Kçç، يكون المحلول مفرط التشبع ويبدأ هطول الأمطار.",
        "zh": "Qi是该时刻离子浓度的乘积；如果 Qi > Kçç，则溶液过饱和并开始沉淀。",
        "ku": "Qi berhema îyonên wê gavê ye; Ger Qi > Kçç, çareserî pir têr dibe û barîn dest pê dike."
      }
    },
    {
      "id": "u20-c05",
      "conceptA": {
        "tr": "Ortak İyon Etkisi",
        "en": "Common Ion Effect",
        "de": "Gemeinsamer Ioneneffekt",
        "fr": "Effet ionique commun",
        "ru": "Общий ионный эффект",
        "ar": "تأثير الأيونات المشتركة",
        "zh": "共同离子效应",
        "ku": "Bandora Ionê ya Hevbeş"
      },
      "conceptB": {
        "tr": "Yabancı İyon Etkisi",
        "en": "Foreign Ion Effect",
        "de": "Fremdioneneffekt",
        "fr": "Effet des ions étrangers",
        "ru": "Эффект инородного иона",
        "ar": "تأثير الأيونات الأجنبية",
        "zh": "外来离子效应",
        "ku": "Bandora Ion Biyanî"
      },
      "distinction": {
        "tr": "Ortak iyon çözünürlüğü le Chatelier gereği belirgin şekilde azaltır; yabancı iyon tuz etkisiyle çözünürlüğü az miktarda artırabilir.",
        "en": "The common ion solubility significantly reduces the Chatelier requirement; The foreign ion may increase the solubility slightly by salt effect.",
        "de": "Die gemeinsame Ionenlöslichkeit reduziert den Chatelier-Bedarf erheblich; Das Fremdion kann durch Salzeinwirkung die Löslichkeit leicht erhöhen.",
        "fr": "La solubilité des ions communs réduit considérablement les besoins de Chatelier ; L'ion étranger peut augmenter légèrement la solubilité par effet sel.",
        "ru": "Растворимость обычных ионов значительно снижает требования Шателье; Инородный ион может немного увеличить растворимость за счет эффекта соли.",
        "ar": "إن قابلية الذوبان في الأيونات الشائعة تقلل بشكل كبير من متطلبات Chatelier؛ قد يزيد الأيون الأجنبي من قابلية الذوبان قليلاً عن طريق تأثير الملح.",
        "zh": "共同离子溶解度显着降低了夏特列要求；外来离子可以通过盐效应稍微增加溶解度。",
        "ku": "Çareseriya îona hevpar bi girîngî hewcedariya Chatelier kêm dike; Dibe ku îyona biyanî bi bandora xwê re halbûnê hinekî zêde bike."
      }
    },
    {
      "id": "u20-c06",
      "conceptA": {
        "tr": "Doygun Çözelti Dengesi",
        "en": "Saturated Solution Equilibrium",
        "de": "Gleichgewicht der gesättigten Lösung",
        "fr": "Équilibre des solutions saturées",
        "ru": "Равновесие в насыщенном растворе",
        "ar": "توازن الحل المشبع",
        "zh": "饱和溶液平衡",
        "ku": "Hevsengiya Çareseriya Têrbûyî"
      },
      "conceptB": {
        "tr": "Aşırı Doygun Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Перенасыщенный раствор",
        "ar": "محلول مفرط التشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya Supersaturated"
      },
      "distinction": {
        "tr": "Doygun çözeltide katı ile iyonlar dengededir ve Qi = Kçç dir; aşırı doygunda Qi > Kçç olup sistem kararsızdır.",
        "en": "In saturated solution, the solid and ions are in balance and Qi = Kçç; In oversaturation, Qi > Kçç and the system is unstable.",
        "de": "In gesättigter Lösung sind Feststoff und Ionen im Gleichgewicht und Qi = Kçç; Bei Übersättigung ist Qi > Kçç und das System ist instabil.",
        "fr": "En solution saturée, le solide et les ions sont en équilibre et Qi = Kçç ; En sursaturation, Qi > Kçç et le système est instable.",
        "ru": "В насыщенном растворе твердое вещество и ионы находятся в равновесии и Qi = Kçç; При пересыщении Qi > Kçç и система неустойчива.",
        "ar": "في المحلول المشبع، تكون المواد الصلبة والأيونات متوازنة وQi = Kçç؛ في حالة التشبع الزائد، Qi > Kçç والنظام غير مستقر.",
        "zh": "在饱和溶液中，固体和离子处于平衡状态，Qi = Kçç；过饱和时，Qi > Kçç，系统不稳定。",
        "ku": "Di çareseriya têrbûyî de, hişk û îyon di hevsengiyê de ne û Qi = Kçç; Di zêde têrbûnê de Qi > Kçç û pergal bêîstîkrar e."
      }
    },
    {
      "id": "u20-c07",
      "conceptA": {
        "tr": "pH nın Çözünürlüğe Etkisi",
        "en": "Effect of pH on Solubility",
        "de": "Einfluss des pH-Werts auf die Löslichkeit",
        "fr": "Effet du pH sur la solubilité",
        "ru": "Влияние pH на растворимость",
        "ar": "تأثير الرقم الهيدروجيني على الذوبان",
        "zh": "pH 对溶解度的影响",
        "ku": "Bandora pH li ser Çareseriyê"
      },
      "conceptB": {
        "tr": "Sıcaklığın Çözünürlüğe Etkisi",
        "en": "Effect of Temperature on Solubility",
        "de": "Einfluss der Temperatur auf die Löslichkeit",
        "fr": "Effet de la température sur la solubilité",
        "ru": "Влияние температуры на растворимость",
        "ar": "تأثير درجة الحرارة على الذوبان",
        "zh": "温度对溶解度的影响",
        "ku": "Bandora Germahiya li ser Çareseriyê"
      },
      "distinction": {
        "tr": "Bazik tuzların çözünürlüğü asit eklendikçe artar; sıcaklık artışı endotermik tuzların çözünürlüğünü ve Kçç sini artırır.",
        "en": "The solubility of basic salts increases as acid is added; Increasing temperature increases the solubility and Ksp of endothermic salts.",
        "de": "Die Löslichkeit basischer Salze nimmt mit der Säurezugabe zu; Mit zunehmender Temperatur erhöhen sich die Löslichkeit und der Ksp endothermer Salze.",
        "fr": "La solubilité des sels basiques augmente à mesure que l’acide est ajouté ; L'augmentation de la température augmente la solubilité et la Ksp des sels endothermiques.",
        "ru": "Растворимость основных солей увеличивается при добавлении кислоты; Повышение температуры увеличивает растворимость и Ksp эндотермических солей.",
        "ar": "تزداد قابلية ذوبان الأملاح الأساسية مع إضافة الحمض. زيادة درجة الحرارة تزيد من ذوبان و Ksp للأملاح الماصة للحرارة.",
        "zh": "碱性盐的溶解度随着酸的添加而增加；升高温度会增加吸热盐的溶解度和 Ksp。",
        "ku": "Çareserbûna xwêyên bingehîn her ku asîda tê zêdekirin zêde dibe; Zêdebûna germahiyê çareserî û Ksp ya xwêyên endotermîk zêde dike."
      }
    },
    {
      "id": "u20-c08",
      "conceptA": {
        "tr": "XY Tipi Tuz",
        "en": "XY Type Salt",
        "de": "Salz vom Typ XY",
        "fr": "Sel de type XY",
        "ru": "Соль типа XY",
        "ar": "ملح من النوع XY",
        "zh": "XY型盐",
        "ku": "XY Tîpa Xwê"
      },
      "conceptB": {
        "tr": "XY2 Tipi Tuz",
        "en": "XY2 Type Salt",
        "de": "Salz vom Typ XY2",
        "fr": "Sel de type XY2",
        "ru": "Тип XY2 Соль",
        "ar": "XY2 نوع الملح",
        "zh": "XY2型盐",
        "ku": "XY2 Tîpa Xwê"
      },
      "distinction": {
        "tr": "XY tuzunda Kçç = s^2 dir; XY2 tuzunda Kçç = 4s^3 bağıntısı geçerlidir.",
        "en": "In the XY salt, Ksp = s^2; In the XY2 salt, the relation Kçç = 4s^3 is valid.",
        "de": "Im XY-Salz ist Ksp = s^2; Im XY2-Salz gilt die Beziehung Kçç = 4s^3.",
        "fr": "Dans le sel XY, Ksp = s^2 ; Dans le sel XY2, la relation Kçç = 4s^3 est valide.",
        "ru": "В соли XY Ksp = s^2; В соли XY2 справедливо соотношение Kçç = 4s^3.",
        "ar": "في ملح XY، Ksp = s^2؛ في ملح XY2، العلاقة Kçç = 4s^3 صحيحة.",
        "zh": "在 XY 盐中，Ksp = s^2；在 XY2 盐中，关系式 Kçç = 4s^3 有效。",
        "ku": "Di xwêya XY de, Ksp = s^2; Di xwêya XY2 de, têkiliya Kçç = 4s^3 derbasdar e."
      }
    }
  ],
  "sequences": [
    {
      "id": "u20-s01",
      "title": {
        "tr": "Çökelme Olup Olmayacağını Belirleme",
        "en": "Determining Whether Precipitation Will Occur",
        "de": "Bestimmen, ob Niederschlag auftreten wird",
        "fr": "Déterminer si des précipitations se produiront",
        "ru": "Определение того, произойдут ли осадки",
        "ar": "تحديد ما إذا كان هطول الأمطار سيحدث",
        "zh": "确定是否会发生降水",
        "ku": "Tespîtkirin Ka Barîn Dê Biqewime"
      },
      "steps": [
        {
          "tr": "Karışım sonrası iyon derişimlerini hesapla (V_toplam a göre)",
          "en": "Calculate ion concentrations after mixing (according to V_total)",
          "de": "Ionenkonzentrationen nach dem Mischen berechnen (gemäß V_total)",
          "fr": "Calculer les concentrations d'ions après mélange (selon V_total)",
          "ru": "Рассчитать концентрацию ионов после смешивания (по V_total)",
          "ar": "حساب تركيزات الأيونات بعد الخلط (حسب V_total)",
          "zh": "计算混合后的离子浓度（根据V_total）",
          "ku": "Piştî tevlihevkirinê (li gorî V_total) giraniya îyonan hesab bike"
        },
        {
          "tr": "İyon çarpımı bağıntısını yaz: Qi = [A+]^a * [B-]^b",
          "en": "Write the ion multiplication relation: Qi = [A+]^a * [B-]^b",
          "de": "Schreiben Sie die Ionenmultiplikationsbeziehung: Qi = [A+]^a * [B-]^b",
          "fr": "Écrivez la relation de multiplication des ions : Qi = [A+]^a * [B-]^b",
          "ru": "Запишите соотношение умножения ионов: Qi = [A+]^a * [B-]^b",
          "ar": "اكتب علاقة ضرب الأيونات: Qi = [A+]^a * [B-]^b",
          "zh": "写出离子倍增关系：Qi = [A+]^a * [B-]^b",
          "ku": "Têkiliya pirbûna îyonan binivîsin: Qi = [A+]^a * [B-]^b"
        },
        {
          "tr": "Qi değerini hesapla",
          "en": "Calculate Qi value",
          "de": "Berechnen Sie den Qi-Wert",
          "fr": "Calculer la valeur Qi",
          "ru": "Рассчитать значение Ци",
          "ar": "حساب قيمة تشي",
          "zh": "计算Qi值",
          "ku": "Nirxa Qi hesab bike"
        },
        {
          "tr": "Qi ile Kçç yi karşılaştır (Qi > Kçç ise çöker)",
          "en": "Compare Qi with Kçç (collapses if Qi > Kçç)",
          "de": "Vergleichen Sie Qi mit Kçç (kollabiert, wenn Qi > Kçç)",
          "fr": "Comparez Qi avec Kçç (s'effondre si Qi > Kçç)",
          "ru": "Сравнить Ци с Kçç (сворачивается, если Qi > Kçç)",
          "ar": "قارن Qi مع Kçç (ينهار إذا كان Qi > Kçç)",
          "zh": "将 Qi 与 Kçç 进行比较（如果 Qi > Kçç 则折叠）",
          "ku": "Qi bi Kçç re bidin ber hev (heke Qi > Kçç hilweşe)"
        }
      ]
    },
    {
      "id": "u20-s02",
      "title": {
        "tr": "Kçç den Çözünürlük Hesabı",
        "en": "Solubility Calculation from Kçç",
        "de": "Löslichkeitsberechnung aus Kçç",
        "fr": "Calcul de solubilité à partir de Kçç",
        "ru": "Расчет растворимости по Kçç",
        "ar": "حساب الذوبان من Kçç",
        "zh": "根据 Kçç 计算溶解度",
        "ku": "Hesabkirina Çareseriyê ji Kçç"
      },
      "steps": [
        {
          "tr": "Az çözünen tuzun iyonlaşma denklemi yazılır",
          "en": "The ionization equation of the slightly soluble salt is written",
          "de": "Die Ionisationsgleichung des schwerlöslichen Salzes wird geschrieben",
          "fr": "L'équation d'ionisation du sel légèrement soluble s'écrit",
          "ru": "Уравнение ионизации малорастворимой соли запишется",
          "ar": "تتم كتابة معادلة التأين للملح قليل الذوبان",
          "zh": "微溶盐的电离方程写成",
          "ku": "Hevkêşana îyonîzasyona xwêya piçekî çareserbûyî tê nivîsandin"
        },
        {
          "tr": "Katyon ve anyon derişimleri s cinsinden ifade edilir",
          "en": "Cation and anion concentrations are expressed in s",
          "de": "Kationen- und Anionenkonzentrationen werden in s ausgedrückt",
          "fr": "Les concentrations de cations et d'anions sont exprimées en s",
          "ru": "Концентрации катионов и анионов выражаются в с.",
          "ar": "يتم التعبير عن تركيزات الكاتيون والأنيون بـ s",
          "zh": "阳离子和阴离子浓度以 s 表示",
          "ku": "Girêdanên kation û anion di s de têne diyar kirin"
        },
        {
          "tr": "Kçç bağıntısı kurularak s nin kuvvetine eşitlenir",
          "en": "It is equalized to the power of s by establishing the Kçç relation",
          "de": "Es wird durch die Festlegung der Kçç-Relation mit der Potenz s gleichgesetzt",
          "fr": "Il est égalisé à la puissance de s en établissant la relation Kçç",
          "ru": "Его приравнивают к степени s, устанавливая соотношение Kçç",
          "ar": "يتم معادلتها لقوة s من خلال إنشاء علاقة Kçç",
          "zh": "通过建立 Kçç 关系将其等于 s 的幂",
          "ku": "Bi danîna pêwendiya Kçç re bi hêza s-yê re tê wekhev kirin"
        },
        {
          "tr": "Karekök veya küpkök alınarak molar çözünürlük s bulunur",
          "en": "Molar solubility s is found by taking the square root or cube root",
          "de": "Die molare Löslichkeit s wird durch Ziehen der Quadratwurzel oder Kubikwurzel ermittelt",
          "fr": "La solubilité molaire s est trouvée en prenant la racine carrée ou la racine cubique",
          "ru": "Молярная растворимость s находится путем извлечения квадратного или кубического корня.",
          "ar": "يتم العثور على الذوبان المولي عن طريق أخذ الجذر التربيعي أو الجذر التكعيبي",
          "zh": "摩尔溶解度 s 通过求平方根或立方根得出",
          "ku": "Çareseriya molar s bi girtina koka çargoşe an koka kubar tê dîtin"
        }
      ]
    },
    {
      "id": "u20-s03",
      "title": {
        "tr": "Ortak İyon Etkisi Hesabı",
        "en": "Common Ion Effect Calculation",
        "de": "Berechnung des gemeinsamen Ioneneffekts",
        "fr": "Calcul de l'effet ionique commun",
        "ru": "Расчет общего ионного эффекта",
        "ar": "حساب تأثير الأيونات المشتركة",
        "zh": "常见离子效应计算",
        "ku": "Hesabkirina Bandora Ionê ya Hevbeş"
      },
      "steps": [
        {
          "tr": "İyi çözünen tuzdan gelen ortak iyon derişimi belirlenir",
          "en": "The common ion concentration from a well-soluble salt is determined",
          "de": "Es wird die gemeinsame Ionenkonzentration eines gut löslichen Salzes bestimmt",
          "fr": "La concentration en ions communs d'un sel bien soluble est déterminée",
          "ru": "Определена общая концентрация ионов хорошо растворимой соли.",
          "ar": "يتم تحديد تركيز الأيون المشترك من الملح القابل للذوبان بشكل جيد",
          "zh": "测定易溶盐的常见离子浓度",
          "ku": "Pîvana îona hevpar a ji xwêyek baş-çareserî tê destnîşankirin"
        },
        {
          "tr": "Az çözünen tuzun saf sudaki çözünürlük dengesi yazılır",
          "en": "The solubility balance of the slightly soluble salt in pure water is written",
          "de": "Dargestellt wird die Löslichkeitsbilanz des schwerlöslichen Salzes in reinem Wasser",
          "fr": "Le bilan de solubilité du sel légèrement soluble dans l’eau pure s’écrit",
          "ru": "Записан баланс растворимости малорастворимой соли в чистой воде.",
          "ar": "تتم كتابة توازن ذوبان الملح قليل الذوبان في الماء النقي",
          "zh": "微溶盐在纯水中的溶解度平衡写成",
          "ku": "Hevsengiya helbûnê ya xwêya piçek di ava paqij de tê nivîsandin"
        },
        {
          "tr": "Ortak iyon derişimi denge bağıntısında yerine konur",
          "en": "The common ion concentration is substituted into the equilibrium relation",
          "de": "Die gemeinsame Ionenkonzentration wird in die Gleichgewichtsbeziehung eingesetzt",
          "fr": "La concentration en ions communs est substituée dans la relation d'équilibre",
          "ru": "Концентрация обычных ионов подставляется в соотношение равновесия",
          "ar": "يتم استبدال تركيز الأيونات المشتركة في علاقة التوازن",
          "zh": "将共同离子浓度代入平衡关系式",
          "ku": "Giraniya îyona hevpar di têkiliya hevsengiyê de tê veguheztin"
        },
        {
          "tr": "Le Chatelier gereği çözünürlüğün azaldığı gösterilir",
          "en": "It is shown that the resolution decreases according to Le Chatelier",
          "de": "Es zeigt sich, dass die Auflösung nach Le Chatelier abnimmt",
          "fr": "On montre que la résolution diminue selon Le Chatelier",
          "ru": "Показано, что разрешение уменьшается по Ле Шателье.",
          "ar": "لقد تبين أن الدقة تتناقص وفقًا لـ Le Chatelier",
          "zh": "根据勒夏特列 (Le Chatelier) 定律，分辨率会降低",
          "ku": "Tê nîşandan ku li gorî Le Chatelier çareserî kêm dibe"
        }
      ]
    },
    {
      "id": "u20-s04",
      "title": {
        "tr": "Çökme Olup Olmayacağını Belirleme",
        "en": "Determining Whether a Crash Will Occur",
        "de": "Bestimmen, ob ein Absturz auftritt",
        "fr": "Déterminer si un crash va se produire",
        "ru": "Определение того, произойдет ли сбой",
        "ar": "تحديد ما إذا كان العطل سيحدث أم لا",
        "zh": "确定是否会发生崩溃",
        "ku": "Tespîtkirin ka Qezayek Dê Biqewime"
      },
      "steps": [
        {
          "tr": "Karışan çözeltilerden gelen iyonların derişimleri hesaplanır",
          "en": "The concentrations of ions coming from the mixing solutions are calculated",
          "de": "Die Konzentrationen der aus den Mischlösungen stammenden Ionen werden berechnet",
          "fr": "Les concentrations d'ions provenant des solutions de mélange sont calculées",
          "ru": "Рассчитаны концентрации ионов, поступающих из растворов смешения.",
          "ar": "يتم حساب تركيزات الأيونات القادمة من محاليل الخلط",
          "zh": "计算来自混合溶液的离子浓度",
          "ku": "Giraniyên îyonên ku ji çareseriyên tevlihevkirinê têne têne hesibandin"
        },
        {
          "tr": "O anki iyon derişimleri çarpımı Qi bulunur",
          "en": "Qi is found by multiplying the current ion concentrations",
          "de": "Qi wird durch Multiplikation der aktuellen Ionenkonzentrationen ermittelt",
          "fr": "Le Qi est trouvé en multipliant les concentrations d'ions actuelles",
          "ru": "Ци находится путем умножения текущих концентраций ионов",
          "ar": "تم العثور على تشى عن طريق ضرب تركيزات الأيونات الحالية",
          "zh": "Qi 是通过乘以当前离子浓度得出的",
          "ku": "Qi bi pirkirina hûrgelên ionê yên heyî tê dîtin"
        },
        {
          "tr": "Qi değeri tuzun Kçç sabiti ile karşılaştırılır",
          "en": "The Qi value is compared with the Ksp constant of the salt.",
          "de": "Der Qi-Wert wird mit der Ksp-Konstante des Salzes verglichen.",
          "fr": "La valeur Qi est comparée à la constante Ksp du sel.",
          "ru": "Значение Qi сравнивается с константой Ksp соли.",
          "ar": "تتم مقارنة قيمة Qi مع ثابت Ksp للملح.",
          "zh": "将 Qi 值与盐的 Ksp 常数进行比较。",
          "ku": "Nirxa Qi bi berdewamiya Ksp ya xwê re tê berhev kirin."
        },
        {
          "tr": "Qi > Kçç ise çözelti aşırı doygundur ve çökme gerçekleşir",
          "en": "If Qi > Kçç, the solution is supersaturated and collapse occurs.",
          "de": "Wenn Qi > Kçç, ist die Lösung übersättigt und es kommt zum Kollaps.",
          "fr": "Si Qi > Kçç, la solution est sursaturée et un effondrement se produit.",
          "ru": "Если Qi > Kçç, раствор пересыщен и происходит коллапс.",
          "ar": "إذا كان Qi > Kçç، يكون المحلول مفرط التشبع ويحدث الانهيار.",
          "zh": "如果 Qi > Kçç，则溶液过饱和并发生塌陷。",
          "ku": "Ger Qi > Kçç, çareserî pir têr dibe û hilweşîn çêdibe."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u20-twin01",
      "stem": {
        "tr": "Belirli bir sıcaklıkta AgCl katısının çözünürlük çarpımı Kçç = 1.0x10^-10 dur. Buna göre AgCl nin saf sudaki çözünürlüğü kaç mol/L dir?",
        "en": "The solubility product of AgCl solid at a certain temperature is Ksp = 1.0x10^-10. Accordingly, what is the solubility of AgCl in pure water?",
        "de": "Das Löslichkeitsprodukt des festen AgCl bei einer bestimmten Temperatur beträgt Ksp = 1,0x10^-10. Wie hoch ist dementsprechend die Löslichkeit von AgCl in reinem Wasser?",
        "fr": "Le produit de solubilité du solide AgCl à une certaine température est Ksp = 1,0x10^-10. Par conséquent, quelle est la solubilité de AgCl dans l’eau pure ?",
        "ru": "Произведение растворимости твердого AgCl при определенной температуре составляет Ksp = 1,0x10^-10. Соответственно, какова растворимость AgCl в чистой воде?",
        "ar": "منتج ذوبان AgCl الصلب عند درجة حرارة معينة هو Ksp = 1.0x10^-10. وبناء على ذلك، ما هي قابلية ذوبان AgCl في الماء النقي؟",
        "zh": "AgCl固体在一定温度下的溶度积为Ksp=1.0x10^-10。那么AgCl在纯水中的溶解度是多少？",
        "ku": "Berhema çareserbûna AgCl ya hişk li germahiyek diyar Ksp = 1,0x10^-10 e. Li gorî vê yekê, çareserbûna AgCl di ava paqij de çi ye?"
      },
      "options": [
        {
          "tr": "1.0x10^-5 M",
          "en": "1.0x10^-5M",
          "de": "1,0x10^-5M",
          "fr": "1,0x10^-5M",
          "ru": "1,0x10^-5М",
          "ar": "1.0x10^-5 م",
          "zh": "1.0x10^-5M",
          "ku": "1.0x10^-5M"
        },
        {
          "tr": "1.0x10^-10 M",
          "en": "1.0x10^-10M",
          "de": "1,0x10^-10M",
          "fr": "1,0x10^-10M",
          "ru": "1,0x10^-10М",
          "ar": "1.0x10^-10 م",
          "zh": "1.0x10^-10M",
          "ku": "1.0x10^-10M"
        },
        {
          "tr": "2.0x10^-5 M",
          "en": "2.0x10^-5M",
          "de": "2,0x10^-5M",
          "fr": "2,0x10^-5M",
          "ru": "2,0x10^-5М",
          "ar": "2.0x10^-5 م",
          "zh": "2.0x10^-5M",
          "ku": "2.0x10^-5M"
        },
        {
          "tr": "1.0x10^-20 M",
          "en": "1.0x10^-20M",
          "de": "1,0x10^-20M",
          "fr": "1,0x10^-20M",
          "ru": "1,0x10^-20М",
          "ar": "1.0x10^-20 م",
          "zh": "1.0x10^-20M",
          "ku": "1.0x10^-20M"
        },
        {
          "tr": "5.0x10^-6 M",
          "en": "5.0x10^-6M",
          "de": "5,0x10^-6M",
          "fr": "5,0x10^-6M",
          "ru": "5,0x10^-6М",
          "ar": "5.0x10^-6 م",
          "zh": "5.0x10^-6M",
          "ku": "5.0x10^-6M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "AgCl ⇌ Ag+ + Cl- -> Kçç = s^2 = 10^-10 -> s = sqrt(10^-10) = 1.0x10^-5 M.",
        "en": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1.0x10^-5 M.",
        "de": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1,0x10^-5 M.",
        "fr": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1,0x10^-5 M.",
        "ru": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1,0x10^-5 М.",
        "ar": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1.0x10^-5 M.",
        "zh": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1.0x10^-5 M。",
        "ku": "AgCl ⇌ Ag+ + Cl- -> Ksp = s^2 = 10^-10 -> s = sqrt(10^-10) = 1,0x10^-5 M."
      }
    },
    {
      "id": "u20-twin02",
      "stem": {
        "tr": "Belirli sıcaklıkta Kçç si 4.0x10^-12 olan XY2 tuzunun saf sudaki molar çözünürlüğü kaçtır?",
        "en": "What is the molar solubility of salt XY2, whose Ksp is 4.0x10^-12, in pure water at a certain temperature?",
        "de": "Wie hoch ist die molare Löslichkeit des Salzes XY2, dessen Ksp 4,0x10^-12 beträgt, in reinem Wasser bei einer bestimmten Temperatur?",
        "fr": "Quelle est la solubilité molaire du sel XY2, dont le Ksp est de 4,0x10^-12, dans l'eau pure à une certaine température ?",
        "ru": "Какова молярная растворимость соли XY2, Ksp которой составляет 4,0x10^-12, в чистой воде при определенной температуре?",
        "ar": "ما هي قابلية الذوبان المولي للملح XY2، الذي تبلغ قيمة Ksp فيه 4.0x10^-12، في الماء النقي عند درجة حرارة معينة؟",
        "zh": "Ksp为4.0x10^-12的盐XY2在一定温度下在纯水中的摩尔溶解度是多少？",
        "ku": "Di germahiyeke diyar de di ava paqij de helbûna molê ya xwêya XY2 ku Ksp wê 4,0x10^-12 e, çi ye?"
      },
      "options": [
        {
          "tr": "1.0x10^-4 M",
          "en": "1.0x10^-4M",
          "de": "1,0x10^-4M",
          "fr": "1,0x10^-4M",
          "ru": "1,0x10^-4М",
          "ar": "1.0x10^-4 م",
          "zh": "1.0x10^-4M",
          "ku": "1.0x10^-4M"
        },
        {
          "tr": "2.0x10^-6 M",
          "en": "2.0x10^-6M",
          "de": "2,0x10^-6M",
          "fr": "2,0x10^-6M",
          "ru": "2,0x10^-6М",
          "ar": "2.0x10^-6 م",
          "zh": "2.0x10^-6M",
          "ku": "2.0x10^-6M"
        },
        {
          "tr": "1.0x10^-6 M",
          "en": "1.0x10^-6M",
          "de": "1,0x10^-6M",
          "fr": "1,0x10^-6M",
          "ru": "1,0x10^-6М",
          "ar": "1.0x10^-6 م",
          "zh": "1.0x10^-6M",
          "ku": "1.0x10^-6M"
        },
        {
          "tr": "4.0x10^-4 M",
          "en": "4.0x10^-4M",
          "de": "4,0x10^-4M",
          "fr": "4,0x10^-4M",
          "ru": "4,0x10^-4М",
          "ar": "4.0x10^-4 م",
          "zh": "4.0x10^-4M",
          "ku": "4.0x10^-4M"
        },
        {
          "tr": "2.0x10^-4 M",
          "en": "2.0x10^-4M",
          "de": "2,0x10^-4M",
          "fr": "2,0x10^-4M",
          "ru": "2,0x10^-4М",
          "ar": "2.0x10^-4 م",
          "zh": "2.0x10^-4M",
          "ku": "2.0x10^-4M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "XY2 ⇌ X2+ + 2 Y- -> Kçç = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "en": "XY2 ⇌ X2+ + 2 Y- -> Ksp = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "de": "XY2 ⇌ X2+ + 2 Y- -> KL = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "fr": "XY2 ⇌ X2+ + 2 Y- -> Ks = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "ru": "XY2 ⇌ X2+ + 2 Y- -> ПР = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "ar": "XY2 ⇌ X2+ + 2 Y- -> Ksp = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "zh": "XY2 ⇌ X2+ + 2 Y- -> Ksp = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.",
        "ku": "XY2 ⇌ X2+ + 2 Y- -> Ksp = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M."
      }
    },
    {
      "id": "u20-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Çözünürlük Dengesi (Kçç) konusunu işlerken Çözünürlük Çarpımı (Kçç) üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Solubility Product (Ksp), which statement regarding Resolution Product (Ksp) represents the correct answer?",
        "de": "Welche Aussage zu Auflösungsprodukt (Ksp) stellt im Kontext von Löslichkeitsprodukt die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Produit de Solubilité, quelle proposition sur Produit de résolution (Ksp) constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Произведение растворимости», какой ответ относительно «Продукт разрешения (Ksp)» является правильным?",
        "ar": "أثناء دراسة موضوع \"حاصل الإذابة\" مخبرياً، أي إجابة بخصوص \"منتج الدقة (Ksp)\" تمثل الإجابة الصحيحة؟",
        "zh": "在“溶度积”实验探究与教学分析中，针对“分辨率产品 (Ksp)”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Hevsengiya Çareserbûnê\" de, kîjan bersiv derbarê \"Hilbera Çareseriyê (Ksp)\" de rast e?"
      },
      "options": [
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "共同离子增加了盐的溶解度。",
          "ku": "Iyona hevpar helbûna xwê zêde dike."
        },
        {
          "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
          "en": "AgCl salt is more soluble in NaCl solution than in pure water.",
          "de": "AgCl-Salz ist in NaCl-Lösung löslicher als in reinem Wasser.",
          "fr": "Le sel AgCl est plus soluble dans une solution de NaCl que dans l’eau pure.",
          "ru": "Соль AgCl более растворима в растворе NaCl, чем в чистой воде.",
          "ar": "ملح AgCl أكثر قابلية للذوبان في محلول NaCl منه في الماء النقي.",
          "zh": "AgCl盐在氯化钠溶液中比在纯水中更易溶解。",
          "ku": "Xwêya AgCl ji ava paqij di çareseriya NaCl de bêtir tê çareserkirin."
        },
        {
          "tr": "1:1 tuzlarda (AgCl) çözünürlük s ise Kçç = s^2 dir (s = sqrt(Kçç)).",
          "en": "If the solubility in 1:1 salts (AgCl) is s, Ksp = s^2 (s = sqrt(Ksp)).",
          "de": "Wenn die Löslichkeit in 1:1-Salzen (AgCl) s beträgt, ist Ksp = s^2 (s = sqrt(Ksp)).",
          "fr": "Si la solubilité dans les sels 1:1 (AgCl) est s, Ksp = s^2 (s = sqrt(Ksp)).",
          "ru": "Если растворимость в солях 1:1 (AgCl) равна s, Ksp = s^2 (s = sqrt(Ksp)).",
          "ar": "إذا كانت قابلية الذوبان في الأملاح 1:1 (AgCl) هي s، فإن Ksp = s^2 (s = sqrt(Ksp)).",
          "zh": "如果 1:1 盐 (AgCl) 中的溶解度为 s，则 Ksp = s^2 (s = sqrt(Ksp))。",
          "ku": "Heke di xwêyên 1:1 (AgCl) de çareserî s be, Ksp = s^2 (s = sqrt(Ksp))."
        },
        {
          "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
          "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
          "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
          "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
          "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
          "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
          "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
          "ku": "Ger av li çaraleke ku li binê wê maddeyên hişk hene, were zêdekirin, konsantasyona çareseriyê zû zêde dibe."
        },
        {
          "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
          "en": "Mg(OH)2 is less soluble in acidic environment.",
          "de": "Mg(OH)2 ist in saurer Umgebung weniger löslich.",
          "fr": "Mg(OH)2 est moins soluble dans un environnement acide.",
          "ru": "Mg(OH)2 менее растворим в кислой среде.",
          "ar": "Mg(OH)2 أقل قابلية للذوبان في البيئة الحمضية.",
          "zh": "Mg(OH)2在酸性环境中溶解度较低。",
          "ku": "Mg(OH)2 di hawîrdora asîd de kêmtir tê çareserkirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"1:1 tuzlarda (AgCl) çözünürlük s ise Kçç = s^2 dir (s = sqrt(Kçç)).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the solubility in 1:1 salts (AgCl) is s, Ksp = s^2 (s = sqrt(Ksp)).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Löslichkeit in 1:1-Salzen (AgCl) s beträgt, ist Ksp = s^2 (s = sqrt(Ksp)).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la solubilité dans les sels 1:1 (AgCl) est s, Ksp = s^2 (s = sqrt(Ksp)).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если растворимость в солях 1:1 (AgCl) равна s, Ksp = s^2 (s = sqrt(Ksp)).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كانت قابلية الذوبان في الأملاح 1:1 (AgCl) هي s، فإن Ksp = s^2 (s = sqrt(Ksp)).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果 1:1 盐 (AgCl) 中的溶解度为 s，则 Ksp = s^2 (s = sqrt(Ksp))。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heke di xwêyên 1:1 (AgCl) de çareserî s be, Ksp = s^2 (s = sqrt(Ksp)).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin04",
      "stem": {
        "tr": "Kimya dersinde Çözünürlük Dengesi (Kçç) ünitesi incelenirken İyon Çarpımı (Qi) ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Solubility Product (Ksp), which of the following propositions concerning Ion Multiplication (Qi) is a verified scientific fact?",
        "de": "Bei der Untersuchung von Löslichkeitsprodukt: Welche Behauptung bezüglich Ionenvervielfachung (Qi) entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Produit de Solubilité, laquelle des affirmations suivantes concernant Multiplication des ions (Qi) est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Произведение растворимости», какое из следующих суждений о «Умножение ионов (Ци)» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حاصل الإذابة\"، أي من الأحكام التالية المتعلقة بـ \"الضرب الأيوني (تشي)\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“溶度积”核心规律时，下列关于“离子倍增 (Qi)”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Çareserbûnê\" tê kirin, kîjan daraza li ser \"Pirbûna îyonan (Qi)\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
          "en": "When Qi < Ksp, precipitation occurs.",
          "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
          "fr": "Lorsque Qi < Ksp, des précipitations se produisent.",
          "ru": "Когда Qi < Ksp, выпадают осадки.",
          "ar": "عندما يكون Qi <Ksp، يحدث هطول الأمطار.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp, barîn çêdibe."
        },
        {
          "tr": "Endotermik tuzda ısıtma yapılırsa Kçç küçülür.",
          "en": "If heating is done in endothermic salt, Ksp shrinks.",
          "de": "Wenn in endothermem Salz erhitzt wird, schrumpft Ksp.",
          "fr": "Si le chauffage est effectué dans du sel endothermique, Ksp rétrécit.",
          "ru": "Если нагревание происходит в эндотермической соли, Ksp сжимается.",
          "ar": "إذا تم التسخين في ملح ماص للحرارة، فإن Ksp ينكمش.",
          "zh": "如果在吸热盐中加热，Ksp 会收缩。",
          "ku": "Ger germkirin di xwêya endotermîk de were kirin, Ksp piçûk dibe."
        },
        {
          "tr": "Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "The salt with the highest Ksp precipitates out of solution first.",
          "de": "Das Salz mit dem höchsten Ksp fällt zuerst aus der Lösung aus.",
          "fr": "Le sel avec le Ksp le plus élevé précipite en premier hors de la solution.",
          "ru": "Соль с наибольшим Ksp выпадает в осадок из раствора первой.",
          "ar": "يترسب الملح ذو أعلى Ksp خارج المحلول أولاً.",
          "zh": "Ksp 最高的盐首先从溶液中沉淀出来。",
          "ku": "Xwêya bi Ksp-ya herî zêde ewil ji çareseriyê derdikeve."
        },
        {
          "tr": "1:2 tuzlarda (PbCl2, CaF2) çözünürlük s ise Kçç = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3 tür.",
          "en": "If the solubility in 1:2 salts (PbCl2, CaF2) is s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
          "de": "Wenn die Löslichkeit in 1:2-Salzen (PbCl2, CaF2) s beträgt, ist Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
          "fr": "Si la solubilité dans les sels 1:2 (PbCl2, CaF2) est s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
          "ru": "Если растворимость в солях соотношения 1:2 (PbCl2, CaF2) равна s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
          "ar": "إذا كانت قابلية الذوبان في الأملاح 1:2 (PbCl2, CaF2) هي s، فإن Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
          "zh": "如果在 1:2 盐（PbCl2、CaF2）中的溶解度为 s，则 Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3。",
          "ku": "Heke di xwêyên 1:2 de (PbCl2, CaF2) çareserî s be, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3."
        },
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي التكوين المعقد إلى ترسيب الملح على الفور.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina tevlihev xwê tavilê radike."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"1:2 tuzlarda (PbCl2, CaF2) çözünürlük s ise Kçç = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3 tür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the solubility in 1:2 salts (PbCl2, CaF2) is s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Löslichkeit in 1:2-Salzen (PbCl2, CaF2) s beträgt, ist Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la solubilité dans les sels 1:2 (PbCl2, CaF2) est s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если растворимость в солях соотношения 1:2 (PbCl2, CaF2) равна s, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كانت قابلية الذوبان في الأملاح 1:2 (PbCl2, CaF2) هي s، فإن Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果在 1:2 盐（PbCl2、CaF2）中的溶解度为 s，则 Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heke di xwêyên 1:2 de (PbCl2, CaF2) çareserî s be, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Çözünürlük Dengesi (Kçç) konusundaki temel kimyasal kurallar çerçevesinde Ortak İyon Etkisi kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Common Ion Effect within the fundamental principles of Solubility Product (Ksp)?",
        "de": "Welche Aussage beschreibt das Konzept Gemeinsamer Ioneneffekt im Rahmen von Löslichkeitsprodukt am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Effet ionique commun selon les lois de Produit de Solubilité?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Общий ионный эффект» в рамках темы «Произведение растворимости»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"تأثير الأيونات المشتركة\" ضمن قواعد \"حاصل الإذابة\"؟",
        "zh": "根据“溶度积”的基本化学原理，下列哪项阐述能最准确地界定“共同离子效应”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Bandora Ionê ya Hevbeş\" di çarçoveya prensîbên \"Hevsengiya Çareserbûnê\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
          "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
          "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
          "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
          "ru": "При Qi = Ksp раствор ненасыщен и соль выпадает в осадок.",
          "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
          "zh": "当Qi = Ksp时，溶液不饱和，盐沉淀。",
          "ku": "Dema Qi = Ksp, çareserî têr nabe û xwê dibare."
        },
        {
          "tr": "Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.",
          "en": "In exothermic salts, as the temperature increases, more substances dissolve.",
          "de": "In exothermen Salzen lösen sich mit zunehmender Temperatur mehr Stoffe auf.",
          "fr": "Dans les sels exothermiques, à mesure que la température augmente, davantage de substances se dissolvent.",
          "ru": "В экзотермических солях при повышении температуры растворяется больше веществ.",
          "ar": "في الأملاح الطاردة للحرارة، مع ارتفاع درجة الحرارة، يذوب المزيد من المواد.",
          "zh": "在放热盐中，随着温度升高，更多物质溶解。",
          "ku": "Di xwêyên exotermîk de, her ku germahî zêde dibe, maddeyên zêde dihelin."
        },
        {
          "tr": "Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.",
          "en": "Stalactites and stalagmites are accumulations of sand as a result of physical evaporation.",
          "de": "Stalaktiten und Stalagmiten sind Sandansammlungen, die durch physikalische Verdunstung entstanden sind.",
          "fr": "Les stalactites et les stalagmites sont des accumulations de sable résultant de l'évaporation physique.",
          "ru": "Сталактиты и сталагмиты представляют собой скопления песка в результате физического испарения.",
          "ar": "الهوابط والصواعد هي تراكمات من الرمال نتيجة التبخر المادي.",
          "zh": "钟乳石和石笋是由于物理蒸发而形成的沙子堆积物。",
          "ku": "Stalaktît û stalagmît kombûna qûmê ne ku di encama evaporkirina fizîkî de ye."
        },
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Kçç refers to the concentration of highly soluble salts.",
          "de": "Kçç bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Kçç fait référence à la concentration de sels hautement solubles.",
          "ru": "Kçç относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Kçç إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Kçç 是指高溶解盐的浓度。",
          "ku": "Kçç behsa kombûna xwêyên pir heliyaye dike."
        },
        {
          "tr": "1:3 tuzlarda (Al(OH)3, Fe(OH)3) çözünürlük s ise Kçç = s * (3s)^3 = 27s^4 tür.",
          "en": "If the solubility in 1:3 salts (Al(OH)3, Fe(OH)3) is s, Ksp = s * (3s)^3 = 27s^4.",
          "de": "Wenn die Löslichkeit in 1:3-Salzen (Al(OH)3, Fe(OH)3) s beträgt, ist Ksp = s * (3s)^3 = 27s^4.",
          "fr": "Si la solubilité dans les sels 1:3 (Al(OH)3, Fe(OH)3) est s, Ksp = s * (3s)^3 = 27s^4.",
          "ru": "Если растворимость в солях соотношения 1:3 (Al(OH)3, Fe(OH)3) равна s, Ksp = s * (3s)^3 = 27s^4.",
          "ar": "إذا كانت الذوبانية في أملاح 1:3 (Al(OH)3, Fe(OH)3) هي s، Ksp = s * (3s)^3 = 27s^4.",
          "zh": "如果在 1:3 盐（Al(OH)3、Fe(OH)3）中的溶解度为 s，则 Ksp = s * (3s)^3 = 27s^4。",
          "ku": "Heke di xwêyên 1:3 de (Al(OH)3, Fe(OH)3) çareserî s be, Ksp = s * (3s)^3 = 27s^4."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"1:3 tuzlarda (Al(OH)3, Fe(OH)3) çözünürlük s ise Kçç = s * (3s)^3 = 27s^4 tür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the solubility in 1:3 salts (Al(OH)3, Fe(OH)3) is s, Ksp = s * (3s)^3 = 27s^4.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Löslichkeit in 1:3-Salzen (Al(OH)3, Fe(OH)3) s beträgt, ist Ksp = s * (3s)^3 = 27s^4.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la solubilité dans les sels 1:3 (Al(OH)3, Fe(OH)3) est s, Ksp = s * (3s)^3 = 27s^4.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если растворимость в солях соотношения 1:3 (Al(OH)3, Fe(OH)3) равна s, Ksp = s * (3s)^3 = 27s^4.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كانت الذوبانية في أملاح 1:3 (Al(OH)3, Fe(OH)3) هي s، Ksp = s * (3s)^3 = 27s^4.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果在 1:3 盐（Al(OH)3、Fe(OH)3）中的溶解度为 s，则 Ksp = s * (3s)^3 = 27s^4。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heke di xwêyên 1:3 de (Al(OH)3, Fe(OH)3) çareserî s be, Ksp = s * (3s)^3 = 27s^4.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Çözünürlük Dengesi (Kçç) sorularında karşılaşılan Doygun Çözelti Dengesi konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Solubility Product (Ksp), which assertion regarding Saturated Solution Equilibrium is correct?",
        "de": "Welche Feststellung bezüglich Gleichgewicht der gesättigten Lösung ist nach den chemischen Gesetzmäßigkeiten von Löslichkeitsprodukt richtig?",
        "fr": "Dans les épreuves universitaires portant sur Produit de Solubilité, quelle affirmation concernant Équilibre des solutions saturées est correcte?",
        "ru": "В экзаменационных заданиях по теме «Произведение растворимости», какое положение относительно «Равновесие в насыщенном растворе» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حاصل الإذابة\"، أي حكم متعلق بـ \"توازن الحل المشبع\" يعتبر صحيحاً؟",
        "zh": "在高考“溶度积”经典考题中，下列有关“饱和溶液平衡”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Çareserbûnê\" de, kîjan daraza li ser \"Hevsengiya Çareseriya Têrbûyî\" rast e?"
      },
      "options": [
        {
          "tr": "Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.",
          "en": "Common ion effect: The presence of common ions in the solution shifts the equilibrium to the reactants and reduces the solubility, as per Le Chatelier.",
          "de": "Gemeinsamer Ioneneffekt: Das Vorhandensein gemeinsamer Ionen in der Lösung verschiebt das Gleichgewicht zu den Reaktanten und verringert die Löslichkeit, so Le Chatelier.",
          "fr": "Effet des ions communs : La présence d'ions communs dans la solution déplace l'équilibre vers les réactifs et réduit la solubilité, selon Le Chatelier.",
          "ru": "Эффект общего иона: присутствие общих ионов в растворе смещает равновесие в сторону реагентов и снижает растворимость, согласно Ле Шателье.",
          "ar": "تأثير الأيونات المشتركة: يؤدي وجود الأيونات المشتركة في المحلول إلى تحويل التوازن إلى المواد المتفاعلة وتقليل قابلية الذوبان، وفقًا لـ Le Chatelier.",
          "zh": "常见离子效应：根据 Le Chatelier 的说法，溶液中常见离子的存在会将平衡转移到反应物并降低溶解度。",
          "ku": "Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike."
        },
        {
          "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
          "en": "AgCl salt is more soluble in NaCl solution than in pure water.",
          "de": "AgCl-Salz ist in NaCl-Lösung löslicher als in reinem Wasser.",
          "fr": "Le sel AgCl est plus soluble dans une solution de NaCl que dans l’eau pure.",
          "ru": "Соль AgCl более растворима в растворе NaCl, чем в чистой воде.",
          "ar": "ملح AgCl أكثر قابلية للذوبان في محلول NaCl منه في الماء النقي.",
          "zh": "AgCl盐在氯化钠溶液中比在纯水中更易溶解。",
          "ku": "Xwêya AgCl ji ava paqij di çareseriya NaCl de bêtir tê çareserkirin."
        },
        {
          "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
          "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
          "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
          "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
          "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
          "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
          "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
          "ku": "Ger av li çaraleke ku li binê wê maddeyên hişk hene, were zêdekirin, konsantasyona çareseriyê zû zêde dibe."
        },
        {
          "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
          "en": "Mg(OH)2 is less soluble in acidic environment.",
          "de": "Mg(OH)2 ist in saurer Umgebung weniger löslich.",
          "fr": "Mg(OH)2 est moins soluble dans un environnement acide.",
          "ru": "Mg(OH)2 менее растворим в кислой среде.",
          "ar": "Mg(OH)2 أقل قابلية للذوبان في البيئة الحمضية.",
          "zh": "Mg(OH)2在酸性环境中溶解度较低。",
          "ku": "Mg(OH)2 di hawîrdora asîd de kêmtir tê çareserkirin."
        },
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加普通离子时，Ksp值变小。",
          "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Common ion effect: The presence of common ions in the solution shifts the equilibrium to the reactants and reduces the solubility, as per Le Chatelier.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gemeinsamer Ioneneffekt: Das Vorhandensein gemeinsamer Ionen in der Lösung verschiebt das Gleichgewicht zu den Reaktanten und verringert die Löslichkeit, so Le Chatelier.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Effet des ions communs : La présence d'ions communs dans la solution déplace l'équilibre vers les réactifs et réduit la solubilité, selon Le Chatelier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффект общего иона: присутствие общих ионов в растворе смещает равновесие в сторону реагентов и снижает растворимость, согласно Ле Шателье.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تأثير الأيونات المشتركة: يؤدي وجود الأيونات المشتركة في المحلول إلى تحويل التوازن إلى المواد المتفاعلة وتقليل قابلية الذوبان، وفقًا لـ Le Chatelier.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“常见离子效应：根据 Le Chatelier 的说法，溶液中常见离子的存在会将平衡转移到反应物并降低溶解度。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin07",
      "stem": {
        "tr": "Aşağıda Çözünürlük Dengesi (Kçç) ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre pH nın Çözünürlüğe Etkisi ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Solubility Product (Ksp), which statement about Effect of pH on Solubility is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Löslichkeitsprodukt: Welche Aussage über Einfluss des pH-Werts auf die Löslichkeit ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Produit de Solubilité, quelle affirmation relative à Effet du pH sur la solubilité est exacte?",
        "ru": "На основе фундаментальных положений темы «Произведение растворимости», какое суждение о «Влияние pH на растворимость» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حاصل الإذابة\"، أي عبارة حول \"تأثير الرقم الهيدروجيني على الذوبان\" صحيحة؟",
        "zh": "基于“溶度积”的基础化学知识体系，下列关于“pH 对溶解度的影响”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin derbarê \"Bandora pH li ser Çareseriyê\" de rast e?"
      },
      "options": [
        {
          "tr": "Endotermik tuzda ısıtma yapılırsa Kçç küçülür.",
          "en": "If heating is done in endothermic salt, Ksp shrinks.",
          "de": "Wenn in endothermem Salz erhitzt wird, schrumpft Ksp.",
          "fr": "Si le chauffage est effectué dans du sel endothermique, Ksp rétrécit.",
          "ru": "Если нагревание происходит в эндотермической соли, Ksp сжимается.",
          "ar": "إذا تم التسخين في ملح ماص للحرارة، فإن Ksp ينكمش.",
          "zh": "如果在吸热盐中加热，Ksp 会收缩。",
          "ku": "Ger germkirin di xwêya endotermîk de were kirin, Ksp piçûk dibe."
        },
        {
          "tr": "İyon çarpımı Qi (çökelme kesri): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.",
          "en": "Ion product Qi (precipitation fraction): If Qi > Kçç, the solution is supersaturated and precipitation occurs.",
          "de": "Ionenprodukt Qi (Ausfällungsanteil): Wenn Qi > Kçç, ist die Lösung übersättigt und es kommt zur Ausfällung.",
          "fr": "Produit ionique Qi (fraction de précipitation) : Si Qi > Kçç, la solution est sursaturée et une précipitation se produit.",
          "ru": "Ионный продукт Qi (фракция осадков): Если Qi > Kçç, раствор перенасыщен и происходит осаждение.",
          "ar": "المنتج الأيوني Qi (جزء الهطول): إذا كان Qi > Kçç، يكون المحلول مفرط التشبع ويحدث الهطول.",
          "zh": "离子积 Qi（沉淀分数）：如果 Qi > Kçç，则溶液过饱和并发生沉淀。",
          "ku": "Berhema îyonî Qi (parçeya baranê): Ger Qi > Kçç, çareserî pir têr dibe û barîn çêdibe."
        },
        {
          "tr": "Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "The salt with the highest Ksp precipitates out of solution first.",
          "de": "Das Salz mit dem höchsten Ksp fällt zuerst aus der Lösung aus.",
          "fr": "Le sel avec le Ksp le plus élevé précipite en premier hors de la solution.",
          "ru": "Соль с наибольшим Ksp выпадает в осадок из раствора первой.",
          "ar": "يترسب الملح ذو أعلى Ksp خارج المحلول أولاً.",
          "zh": "Ksp 最高的盐首先从溶液中沉淀出来。",
          "ku": "Xwêya bi Ksp-ya herî zêde ewil ji çareseriyê derdikeve."
        },
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي التكوين المعقد إلى ترسيب الملح على الفور.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina tevlihev xwê tavilê radike."
        },
        {
          "tr": "AgCl için Kçç = 4s^3 tür.",
          "en": "For AgCl, Ksp = 4s^3.",
          "de": "Für AgCl ist Ksp = 4s^3.",
          "fr": "Pour AgCl, Ksp = 4s^3.",
          "ru": "Для AgCl Ksp = 4s^3.",
          "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
          "zh": "对于 AgCl，Ksp = 4s^3。",
          "ku": "Ji bo AgCl, Ksp = 4s^3."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"İyon çarpımı Qi (çökelme kesri): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Ion product Qi (precipitation fraction): If Qi > Kçç, the solution is supersaturated and precipitation occurs.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ionenprodukt Qi (Ausfällungsanteil): Wenn Qi > Kçç, ist die Lösung übersättigt und es kommt zur Ausfällung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Produit ionique Qi (fraction de précipitation) : Si Qi > Kçç, la solution est sursaturée et une précipitation se produit.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ионный продукт Qi (фракция осадков): Если Qi > Kçç, раствор перенасыщен и происходит осаждение.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المنتج الأيوني Qi (جزء الهطول): إذا كان Qi > Kçç، يكون المحلول مفرط التشبع ويحدث الهطول.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“离子积 Qi（沉淀分数）：如果 Qi > Kçç，则溶液过饱和并发生沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Berhema îyonî Qi (parçeya baranê): Ger Qi > Kçç, çareserî pir têr dibe û barîn çêdibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin08",
      "stem": {
        "tr": "Çözünürlük Dengesi (Kçç) konusu kapsamında XY Tipi Tuz ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Solubility Product (Ksp), which of the following findings regarding XY Type Salt is scientifically verified?",
        "de": "Im Rahmen der Einheit Löslichkeitsprodukt: Welcher der folgenden Befunde zu Salz vom Typ XY ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Produit de Solubilité, laquelle des constatations suivantes concernant Sel de type XY est scientifiquement vérifiée?",
        "ru": "В контексте темы «Произведение растворимости», какой из следующих выводов относительно «Соль типа XY» научно подтверждён?",
        "ar": "في سياق موضوع \"حاصل الإذابة\"، أي من النتائج التالية المتعلقة بـ \"ملح من النوع XY\" مثبتة علمياً؟",
        "zh": "在“溶度积”主题范畴内，下列关于“XY型盐”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Çareserbûnê\" de, kîjan ji van encamên li ser \"XY Tîpa Xwê\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.",
          "en": "In exothermic salts, as the temperature increases, more substances dissolve.",
          "de": "In exothermen Salzen lösen sich mit zunehmender Temperatur mehr Stoffe auf.",
          "fr": "Dans les sels exothermiques, à mesure que la température augmente, davantage de substances se dissolvent.",
          "ru": "В экзотермических солях при повышении температуры растворяется больше веществ.",
          "ar": "في الأملاح الطاردة للحرارة، مع ارتفاع درجة الحرارة، يذوب المزيد من المواد.",
          "zh": "在放热盐中，随着温度升高，更多物质溶解。",
          "ku": "Di xwêyên exotermîk de, her ku germahî zêde dibe, maddeyên zêde dihelin."
        },
        {
          "tr": "Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.",
          "en": "Stalactites and stalagmites are accumulations of sand as a result of physical evaporation.",
          "de": "Stalaktiten und Stalagmiten sind Sandansammlungen, die durch physikalische Verdunstung entstanden sind.",
          "fr": "Les stalactites et les stalagmites sont des accumulations de sable résultant de l'évaporation physique.",
          "ru": "Сталактиты и сталагмиты представляют собой скопления песка в результате физического испарения.",
          "ar": "الهوابط والصواعد هي تراكمات من الرمال نتيجة التبخر المادي.",
          "zh": "钟乳石和石笋是由于物理蒸发而形成的沙子堆积物。",
          "ku": "Stalaktît û stalagmît kombûna qûmê ne ku di encama evaporkirina fizîkî de ye."
        },
        {
          "tr": "Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.",
          "en": "If Qi = Kçç, the solution is fully saturated and there is no precipitation; If Qi < Kçç, the solution is unsaturated.",
          "de": "Wenn Qi = Kçç, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Kçç, ist die Lösung ungesättigt.",
          "fr": "Si Qi = Kçç, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Kçç, la solution est insaturée.",
          "ru": "Если Qi = Kçç, раствор полностью насыщен и осадок отсутствует; Если Qi < Kçç, решение ненасыщенное.",
          "ar": "إذا كان Qi = Kçç، يكون المحلول مشبعًا بالكامل ولا يوجد هطول؛ إذا كان Qi < Kçç، فإن المحلول غير مشبع.",
          "zh": "若Qi=Kçç，则溶液完全饱和，无沉淀；如果 Qi < Kçç，则溶液不饱和。",
          "ku": "Heke Qi = Kçç, çareserî bi tevahî têr bûye û barîn tune; Heke Qi < Kçç, çareserî ne têr e."
        },
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Kçç refers to the concentration of highly soluble salts.",
          "de": "Kçç bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Kçç fait référence à la concentration de sels hautement solubles.",
          "ru": "Kçç относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Kçç إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Kçç 是指高溶解盐的浓度。",
          "ku": "Kçç behsa kombûna xwêyên pir heliyaye dike."
        },
        {
          "tr": "PbCl2 için Kçç = 2s^2 dir.",
          "en": "For PbCl2, Ksp = 2s^2.",
          "de": "Für PbCl2 ist Ksp = 2s^2.",
          "fr": "Pour PbCl2, Ksp = 2s^2.",
          "ru": "Для PbCl2 Ksp = 2s^2.",
          "ar": "بالنسبة لـ PbCl2، Ksp = 2s^2.",
          "zh": "对于 PbCl2，Ksp = 2s^2。",
          "ku": "Ji bo PbCl2, Ksp = 2s^2."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If Qi = Kçç, the solution is fully saturated and there is no precipitation; If Qi < Kçç, the solution is unsaturated.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Qi = Kçç, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Kçç, ist die Lösung ungesättigt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si Qi = Kçç, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Kçç, la solution est insaturée.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если Qi = Kçç, раствор полностью насыщен и осадок отсутствует; Если Qi < Kçç, решение ненасыщенное.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كان Qi = Kçç، يكون المحلول مشبعًا بالكامل ولا يوجد هطول؛ إذا كان Qi < Kçç، فإن المحلول غير مشبع.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“若Qi=Kçç，则溶液完全饱和，无沉淀；如果 Qi < Kçç，则溶液不饱和。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heke Qi = Kçç, çareserî bi tevahî têr bûye û barîn tune; Heke Qi < Kçç, çareserî ne têr e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin09",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Çözünürlük Dengesi (Kçç) ünitesinde ele alınan Qi < Kçç hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Solubility Product (Ksp), which statement about Qi < Ksp is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Löslichkeitsprodukt: Welche Aussage über Qi < Ksp ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Produit de Solubilité, quelle affirmation relative à Qi <Ksp est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Произведение растворимости», какое утверждение о «Ци <Ксп» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حاصل الإذابة\"، أي عبارة حول \"تشى <كسب\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶度积”单元中关于“Qi < Ksp”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin li ser \"Qi < Ksp\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
          "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
          "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
          "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
          "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
          "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
          "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
          "ku": "Ger av li çaraleke ku li binê wê maddeyên hişk hene, were zêdekirin, konsantasyona çareseriyê zû zêde dibe."
        },
        {
          "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
          "en": "Mg(OH)2 is less soluble in acidic environment.",
          "de": "Mg(OH)2 ist in saurer Umgebung weniger löslich.",
          "fr": "Mg(OH)2 est moins soluble dans un environnement acide.",
          "ru": "Mg(OH)2 менее растворим в кислой среде.",
          "ar": "Mg(OH)2 أقل قابلية للذوبان في البيئة الحمضية.",
          "zh": "Mg(OH)2在酸性环境中溶解度较低。",
          "ku": "Mg(OH)2 di hawîrdora asîd de kêmtir tê çareserkirin."
        },
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加普通离子时，Ksp值变小。",
          "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
        },
        {
          "tr": "AgCl katısının saf sudaki çözünürlüğü, 0.1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.",
          "en": "The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.",
          "de": "Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.",
          "fr": "La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.",
          "ru": "Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.",
          "ar": "إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.",
          "zh": "AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。",
          "ku": "Çareseriya AgCl ya hişk a di ava paqij de ji helbûna wê ya di nav 0,1 M çareseriya NaCl de PÊKIR MEZIRtir e."
        },
        {
          "tr": "Al(OH)3 için Kçç = 3s^3 tür.",
          "en": "For Al(OH)3, Ksp = 3s^3.",
          "de": "Für Al(OH)3 ist Ksp = 3s^3.",
          "fr": "Pour Al(OH)3, Ksp = 3s^3.",
          "ru": "Для Al(OH)3 Ksp = 3s^3.",
          "ar": "بالنسبة لـ Al(OH)3، Ksp = 3s^3.",
          "zh": "对于 Al(OH)3，Ksp = 3s^3。",
          "ku": "Ji bo Al(OH)3, Ksp = 3s^3."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"AgCl katısının saf sudaki çözünürlüğü, 0.1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareseriya AgCl ya hişk a di ava paqij de ji helbûna wê ya di nav 0,1 M çareseriya NaCl de PÊKIR MEZIRtir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Çözünürlük Dengesi (Kçç) konusunu işlerken Saf Sudaki Çözünürlük üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Solubility Product (Ksp), which statement regarding Solubility in Pure Water represents the correct answer?",
        "de": "Welche Aussage zu Löslichkeit in reinem Wasser stellt im Kontext von Löslichkeitsprodukt die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Produit de Solubilité, quelle proposition sur Solubilité dans l'eau pure constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Произведение растворимости», какой ответ относительно «Растворимость в чистой воде» является правильным?",
        "ar": "أثناء دراسة موضوع \"حاصل الإذابة\" مخبرياً، أي إجابة بخصوص \"الذوبان في الماء النقي\" تمثل الإجابة الصحيحة؟",
        "zh": "在“溶度积”实验探究与教学分析中，针对“在纯水中的溶解度”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Hevsengiya Çareserbûnê\" de, kîjan bersiv derbarê \"Çareseriya di ava paqij\" de rast e?"
      },
      "options": [
        {
          "tr": "Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "The salt with the highest Ksp precipitates out of solution first.",
          "de": "Das Salz mit dem höchsten Ksp fällt zuerst aus der Lösung aus.",
          "fr": "Le sel avec le Ksp le plus élevé précipite en premier hors de la solution.",
          "ru": "Соль с наибольшим Ksp выпадает в осадок из раствора первой.",
          "ar": "يترسب الملح ذو أعلى Ksp خارج المحلول أولاً.",
          "zh": "Ksp 最高的盐首先从溶液中沉淀出来。",
          "ku": "Xwêya bi Ksp-ya herî zêde ewil ji çareseriyê derdikeve."
        },
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي التكوين المعقد إلى ترسيب الملح على الفور.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina tevlihev xwê tavilê radike."
        },
        {
          "tr": "AgCl için Kçç = 4s^3 tür.",
          "en": "For AgCl, Ksp = 4s^3.",
          "de": "Für AgCl ist Ksp = 4s^3.",
          "fr": "Pour AgCl, Ksp = 4s^3.",
          "ru": "Для AgCl Ksp = 4s^3.",
          "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
          "zh": "对于 AgCl，Ksp = 4s^3。",
          "ku": "Ji bo AgCl, Ksp = 4s^3."
        },
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "共同离子增加了盐的溶解度。",
          "ku": "Iyona hevpar helbûna xwê zêde dike."
        },
        {
          "tr": "Endotermik çözünen bir tuzda sıcaklık artırılırsa Kçç artar ve çözünürlük artar.",
          "en": "If the temperature is increased in an endothermically dissolving salt, Ksp increases and the solubility increases.",
          "de": "Wird in einem sich endotherm lösenden Salz die Temperatur erhöht, erhöht sich Ksp und die Löslichkeit steigt.",
          "fr": "Si la température augmente dans un sel à dissolution endothermique, Ksp augmente et la solubilité augmente.",
          "ru": "Если температура эндотермически растворяющейся соли повышается, Ksp увеличивается и растворимость увеличивается.",
          "ar": "إذا زادت درجة الحرارة في ملح مذاب ماص للحرارة فإن Ksp تزداد وتزداد ذوبانه.",
          "zh": "如果吸热溶解盐的温度升高，Ksp 增加并且溶解度增加。",
          "ku": "Ger germahî di xwêyek endotermîk de zêde bibe, Ksp zêde dibe û çareserî zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Endotermik çözünen bir tuzda sıcaklık artırılırsa Kçç artar ve çözünürlük artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the temperature is increased in an endothermically dissolving salt, Ksp increases and the solubility increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird in einem sich endotherm lösenden Salz die Temperatur erhöht, erhöht sich Ksp und die Löslichkeit steigt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la température augmente dans un sel à dissolution endothermique, Ksp augmente et la solubilité augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если температура эндотермически растворяющейся соли повышается, Ksp увеличивается и растворимость увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا زادت درجة الحرارة في ملح مذاب ماص للحرارة فإن Ksp تزداد وتزداد ذوبانه.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果吸热溶解盐的温度升高，Ksp 增加并且溶解度增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger germahî di xwêyek endotermîk de zêde bibe, Ksp zêde dibe û çareserî zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin11",
      "stem": {
        "tr": "Kimya dersinde Çözünürlük Dengesi (Kçç) ünitesi incelenirken Çözünürlük Çarpımı (Kçç) ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Solubility Product (Ksp), which of the following propositions concerning Resolution Product (Ksp) is a verified scientific fact?",
        "de": "Bei der Untersuchung von Löslichkeitsprodukt: Welche Behauptung bezüglich Auflösungsprodukt (Ksp) entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Produit de Solubilité, laquelle des affirmations suivantes concernant Produit de résolution (Ksp) est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Произведение растворимости», какое из следующих суждений о «Продукт разрешения (Ksp)» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حاصل الإذابة\"، أي من الأحكام التالية المتعلقة بـ \"منتج الدقة (Ksp)\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“溶度积”核心规律时，下列关于“分辨率产品 (Ksp)”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Çareserbûnê\" tê kirin, kîjan daraza li ser \"Hilbera Çareseriyê (Ksp)\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ekzotermik çözünen bir tuzda sıcaklık artırılırsa Kçç azalır ve çözünürlük azalır.",
          "en": "If the temperature is increased in an exothermically dissolving salt, Ksp decreases and the solubility decreases.",
          "de": "Wird in einem sich exotherm lösenden Salz die Temperatur erhöht, sinkt Ksp und die Löslichkeit nimmt ab.",
          "fr": "Si la température augmente dans un sel à dissolution exothermique, Ksp diminue et la solubilité diminue.",
          "ru": "Если температура экзотермически растворяющейся соли повышается, Ksp уменьшается и растворимость снижается.",
          "ar": "إذا ارتفعت درجة حرارة الملح المذاب طارداً للحرارة، فإن Ksp تنخفض وتقل ذوبانه.",
          "zh": "如果放热溶解盐的温度升高，Ksp 降低并且溶解度降低。",
          "ku": "Ger germahî di xwêya ku bi exotermîk tê helandin de zêde bibe, Ksp kêm dibe û çareserî kêm dibe."
        },
        {
          "tr": "Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.",
          "en": "Stalactites and stalagmites are accumulations of sand as a result of physical evaporation.",
          "de": "Stalaktiten und Stalagmiten sind Sandansammlungen, die durch physikalische Verdunstung entstanden sind.",
          "fr": "Les stalactites et les stalagmites sont des accumulations de sable résultant de l'évaporation physique.",
          "ru": "Сталактиты и сталагмиты представляют собой скопления песка в результате физического испарения.",
          "ar": "الهوابط والصواعد هي تراكمات من الرمال نتيجة التبخر المادي.",
          "zh": "钟乳石和石笋是由于物理蒸发而形成的沙子堆积物。",
          "ku": "Stalaktît û stalagmît kombûna qûmê ne ku di encama evaporkirina fizîkî de ye."
        },
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Kçç refers to the concentration of highly soluble salts.",
          "de": "Kçç bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Kçç fait référence à la concentration de sels hautement solubles.",
          "ru": "Kçç относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Kçç إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Kçç 是指高溶解盐的浓度。",
          "ku": "Kçç behsa kombûna xwêyên pir heliyaye dike."
        },
        {
          "tr": "PbCl2 için Kçç = 2s^2 dir.",
          "en": "For PbCl2, Ksp = 2s^2.",
          "de": "Für PbCl2 ist Ksp = 2s^2.",
          "fr": "Pour PbCl2, Ksp = 2s^2.",
          "ru": "Для PbCl2 Ksp = 2s^2.",
          "ar": "بالنسبة لـ PbCl2، Ksp = 2s^2.",
          "zh": "对于 PbCl2，Ksp = 2s^2。",
          "ku": "Ji bo PbCl2, Ksp = 2s^2."
        },
        {
          "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
          "en": "When Qi < Ksp, precipitation occurs.",
          "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
          "fr": "Lorsque Qi < Ksp, des précipitations se produisent.",
          "ru": "Когда Qi < Ksp, выпадают осадки.",
          "ar": "عندما يكون Qi <Ksp، يحدث هطول الأمطار.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp, barîn çêdibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ekzotermik çözünen bir tuzda sıcaklık artırılırsa Kçç azalır ve çözünürlük azalır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the temperature is increased in an exothermically dissolving salt, Ksp decreases and the solubility decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird in einem sich exotherm lösenden Salz die Temperatur erhöht, sinkt Ksp und die Löslichkeit nimmt ab.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la température augmente dans un sel à dissolution exothermique, Ksp diminue et la solubilité diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если температура экзотермически растворяющейся соли повышается, Ksp уменьшается и растворимость снижается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا ارتفعت درجة حرارة الملح المذاب طارداً للحرارة، فإن Ksp تنخفض وتقل ذوبانه.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果放热溶解盐的温度升高，Ksp 降低并且溶解度降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger germahî di xwêya ku bi exotermîk tê helandin de zêde bibe, Ksp kêm dibe û çareserî kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Çözünürlük Dengesi (Kçç) konusundaki temel kimyasal kurallar çerçevesinde İyon Çarpımı (Qi) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Ion Multiplication (Qi) within the fundamental principles of Solubility Product (Ksp)?",
        "de": "Welche Aussage beschreibt das Konzept Ionenvervielfachung (Qi) im Rahmen von Löslichkeitsprodukt am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Multiplication des ions (Qi) selon les lois de Produit de Solubilité?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Умножение ионов (Ци)» в рамках темы «Произведение растворимости»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"الضرب الأيوني (تشي)\" ضمن قواعد \"حاصل الإذابة\"؟",
        "zh": "根据“溶度积”的基本化学原理，下列哪项阐述能最准确地界定“离子倍增 (Qi)”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Pirbûna îyonan (Qi)\" di çarçoveya prensîbên \"Hevsengiya Çareserbûnê\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
          "en": "Mg(OH)2 is less soluble in acidic environment.",
          "de": "Mg(OH)2 ist in saurer Umgebung weniger löslich.",
          "fr": "Mg(OH)2 est moins soluble dans un environnement acide.",
          "ru": "Mg(OH)2 менее растворим в кислой среде.",
          "ar": "Mg(OH)2 أقل قابلية للذوبان في البيئة الحمضية.",
          "zh": "Mg(OH)2在酸性环境中溶解度较低。",
          "ku": "Mg(OH)2 di hawîrdora asîd de kêmtir tê çareserkirin."
        },
        {
          "tr": "Çözeltiye aynı sıcaklıkta su eklenirse dipteki katı çözünür ancak doymuş çözeltideki iyon derişimleri ve Kçç değişmez.",
          "en": "If water is added to the solution at the same temperature, the bottom solid dissolves, but the ion concentrations and Ksp in the saturated solution do not change.",
          "de": "Wenn der Lösung bei gleicher Temperatur Wasser zugesetzt wird, löst sich der Bodenfeststoff auf, aber die Ionenkonzentrationen und Ksp in der gesättigten Lösung ändern sich nicht.",
          "fr": "Si de l'eau est ajoutée à la solution à la même température, le solide inférieur se dissout, mais les concentrations d'ions et de Ksp dans la solution saturée ne changent pas.",
          "ru": "Если к раствору при той же температуре добавить воду, донный остаток растворится, но концентрации ионов и Kуд в насыщенном растворе не изменяются.",
          "ar": "إذا أضيف الماء إلى المحلول بنفس درجة الحرارة، فإن المادة الصلبة السفلية تذوب، لكن تركيز الأيونات و Ksp في المحلول المشبع لا يتغير.",
          "zh": "如果在相同温度下向溶液中加入水，底部固体溶解，但饱和溶液中的离子浓度和Ksp不改变。",
          "ku": "Ger di heman germahiyê de av li çarenûsê were zêdekirin, qalika binî dihele, lê hêjmara îyonan û Ksp di çareseriya têrbûyî de naguhere."
        },
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加普通离子时，Ksp值变小。",
          "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
        },
        {
          "tr": "Al(OH)3 için Kçç = 3s^3 tür.",
          "en": "For Al(OH)3, Ksp = 3s^3.",
          "de": "Für Al(OH)3 ist Ksp = 3s^3.",
          "fr": "Pour Al(OH)3, Ksp = 3s^3.",
          "ru": "Для Al(OH)3 Ksp = 3s^3.",
          "ar": "بالنسبة لـ Al(OH)3، Ksp = 3s^3.",
          "zh": "对于 Al(OH)3，Ksp = 3s^3。",
          "ku": "Ji bo Al(OH)3, Ksp = 3s^3."
        },
        {
          "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
          "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
          "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
          "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
          "ru": "При Qi = Ksp раствор ненасыщен и соль выпадает в осадок.",
          "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
          "zh": "当Qi = Ksp时，溶液不饱和，盐沉淀。",
          "ku": "Dema Qi = Ksp, çareserî têr nabe û xwê dibare."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltiye aynı sıcaklıkta su eklenirse dipteki katı çözünür ancak doymuş çözeltideki iyon derişimleri ve Kçç değişmez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If water is added to the solution at the same temperature, the bottom solid dissolves, but the ion concentrations and Ksp in the saturated solution do not change.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn der Lösung bei gleicher Temperatur Wasser zugesetzt wird, löst sich der Bodenfeststoff auf, aber die Ionenkonzentrationen und Ksp in der gesättigten Lösung ändern sich nicht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si de l'eau est ajoutée à la solution à la même température, le solide inférieur se dissout, mais les concentrations d'ions et de Ksp dans la solution saturée ne changent pas.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если к раствору при той же температуре добавить воду, донный остаток растворится, но концентрации ионов и Kуд в насыщенном растворе не изменяются.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا أضيف الماء إلى المحلول بنفس درجة الحرارة، فإن المادة الصلبة السفلية تذوب، لكن تركيز الأيونات و Ksp في المحلول المشبع لا يتغير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果在相同温度下向溶液中加入水，底部固体溶解，但饱和溶液中的离子浓度和Ksp不改变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger di heman germahiyê de av li çarenûsê were zêdekirin, qalika binî dihele, lê hêjmara îyonan û Ksp di çareseriya têrbûyî de naguhere.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Çözünürlük Dengesi (Kçç) sorularında karşılaşılan Ortak İyon Etkisi konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Solubility Product (Ksp), which assertion regarding Common Ion Effect is correct?",
        "de": "Welche Feststellung bezüglich Gemeinsamer Ioneneffekt ist nach den chemischen Gesetzmäßigkeiten von Löslichkeitsprodukt richtig?",
        "fr": "Dans les épreuves universitaires portant sur Produit de Solubilité, quelle affirmation concernant Effet ionique commun est correcte?",
        "ru": "В экзаменационных заданиях по теме «Произведение растворимости», какое положение относительно «Общий ионный эффект» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حاصل الإذابة\"، أي حكم متعلق بـ \"تأثير الأيونات المشتركة\" يعتبر صحيحاً؟",
        "zh": "在高考“溶度积”经典考题中，下列有关“共同离子效应”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Çareserbûnê\" de, kîjan daraza li ser \"Bandora Ionê ya Hevbeş\" rast e?"
      },
      "options": [
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي التكوين المعقد إلى ترسيب الملح على الفور.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina tevlihev xwê tavilê radike."
        },
        {
          "tr": "AgCl için Kçç = 4s^3 tür.",
          "en": "For AgCl, Ksp = 4s^3.",
          "de": "Für AgCl ist Ksp = 4s^3.",
          "fr": "Pour AgCl, Ksp = 4s^3.",
          "ru": "Для AgCl Ksp = 4s^3.",
          "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
          "zh": "对于 AgCl，Ksp = 4s^3。",
          "ku": "Ji bo AgCl, Ksp = 4s^3."
        },
        {
          "tr": "Seçimli çöktürme: İki iyon içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.",
          "en": "Selective precipitation: When a precipitant is added to a solution containing two ions, the one with the lower Ksp (less soluble) precipitates first.",
          "de": "Selektive Fällung: Wenn einer Lösung, die zwei Ionen enthält, ein Fällungsmittel zugesetzt wird, fällt zuerst dasjenige mit dem niedrigeren Ksp (weniger löslich) aus.",
          "fr": "Précipitation sélective : lorsqu'un précipitant est ajouté à une solution contenant deux ions, celui avec le Ksp le plus faible (le moins soluble) précipite en premier.",
          "ru": "Селективное осаждение: когда осадитель добавляется к раствору, содержащему два иона, первым выпадает в осадок тот, у которого меньше Ksp (менее растворимый).",
          "ar": "الترسيب الانتقائي: عند إضافة مادة مرسبة إلى محلول يحتوي على أيونين، فإن الذي يحتوي على Ksp الأقل (الأقل قابلية للذوبان) يترسب أولاً.",
          "zh": "选择性沉淀：当将沉淀剂添加到含有两种离子的溶液中时，Ksp 较低（溶解度较小）的离子首先沉淀。",
          "ku": "Barîna hilbijartî: Dema ku rijandinek li çareseriyek ku du îyon tê de tê zêde kirin, ya ku Ksp kêmtir e (kêm tê çareserkirin) pêşî dibare."
        },
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "共同离子增加了盐的溶解度。",
          "ku": "Iyona hevpar helbûna xwê zêde dike."
        },
        {
          "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
          "en": "AgCl salt is more soluble in NaCl solution than in pure water.",
          "de": "AgCl-Salz ist in NaCl-Lösung löslicher als in reinem Wasser.",
          "fr": "Le sel AgCl est plus soluble dans une solution de NaCl que dans l’eau pure.",
          "ru": "Соль AgCl более растворима в растворе NaCl, чем в чистой воде.",
          "ar": "ملح AgCl أكثر قابلية للذوبان في محلول NaCl منه في الماء النقي.",
          "zh": "AgCl盐在氯化钠溶液中比在纯水中更易溶解。",
          "ku": "Xwêya AgCl ji ava paqij di çareseriya NaCl de bêtir tê çareserkirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Seçimli çöktürme: İki iyon içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Selective precipitation: When a precipitant is added to a solution containing two ions, the one with the lower Ksp (less soluble) precipitates first.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Selektive Fällung: Wenn einer Lösung, die zwei Ionen enthält, ein Fällungsmittel zugesetzt wird, fällt zuerst dasjenige mit dem niedrigeren Ksp (weniger löslich) aus.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Précipitation sélective : lorsqu'un précipitant est ajouté à une solution contenant deux ions, celui avec le Ksp le plus faible (le moins soluble) précipite en premier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Селективное осаждение: когда осадитель добавляется к раствору, содержащему два иона, первым выпадает в осадок тот, у которого меньше Ksp (менее растворимый).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الترسيب الانتقائي: عند إضافة مادة مرسبة إلى محلول يحتوي على أيونين، فإن الذي يحتوي على Ksp الأقل (الأقل قابلية للذوبان) يترسب أولاً.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“选择性沉淀：当将沉淀剂添加到含有两种离子的溶液中时，Ksp 较低（溶解度较小）的离子首先沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Barîna hilbijartî: Dema ku rijandinek li çareseriyek ku du îyon tê de tê zêde kirin, ya ku Ksp kêmtir e (kêm tê çareserkirin) pêşî dibare.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin14",
      "stem": {
        "tr": "Aşağıda Çözünürlük Dengesi (Kçç) ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Doygun Çözelti Dengesi ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Solubility Product (Ksp), which statement about Saturated Solution Equilibrium is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Löslichkeitsprodukt: Welche Aussage über Gleichgewicht der gesättigten Lösung ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Produit de Solubilité, quelle affirmation relative à Équilibre des solutions saturées est exacte?",
        "ru": "На основе фундаментальных положений темы «Произведение растворимости», какое суждение о «Равновесие в насыщенном растворе» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حاصل الإذابة\"، أي عبارة حول \"توازن الحل المشبع\" صحيحة؟",
        "zh": "基于“溶度积”的基础化学知识体系，下列关于“饱和溶液平衡”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin derbarê \"Hevsengiya Çareseriya Têrbûyî\" de rast e?"
      },
      "options": [
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Kçç refers to the concentration of highly soluble salts.",
          "de": "Kçç bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Kçç fait référence à la concentration de sels hautement solubles.",
          "ru": "Kçç относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Kçç إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Kçç 是指高溶解盐的浓度。",
          "ku": "Kçç behsa kombûna xwêyên pir heliyaye dike."
        },
        {
          "tr": "PbCl2 için Kçç = 2s^2 dir.",
          "en": "For PbCl2, Ksp = 2s^2.",
          "de": "Für PbCl2 ist Ksp = 2s^2.",
          "fr": "Pour PbCl2, Ksp = 2s^2.",
          "ru": "Для PbCl2 Ksp = 2s^2.",
          "ar": "بالنسبة لـ PbCl2، Ksp = 2s^2.",
          "zh": "对于 PbCl2，Ksp = 2s^2。",
          "ku": "Ji bo PbCl2, Ksp = 2s^2."
        },
        {
          "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
          "en": "When Qi < Ksp, precipitation occurs.",
          "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
          "fr": "Lorsque Qi < Ksp, des précipitations se produisent.",
          "ru": "Когда Qi < Ksp, выпадают осадки.",
          "ar": "عندما يكون Qi <Ksp، يحدث هطول الأمطار.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp, barîn çêdibe."
        },
        {
          "tr": "Sıcak su mağaralarındaki sarkıt ve dikitler (travertenler), CaCO3 ün çözünürlük dengesi ile oluşur.",
          "en": "Stalactites and stalagmites (travertines) in hot water caves are formed by the solubility balance of CaCO3.",
          "de": "Stalaktiten und Stalagmiten (Travertine) in Heißwasserhöhlen entstehen durch das Löslichkeitsgleichgewicht von CaCO3.",
          "fr": "Les stalactites et stalagmites (travertins) dans les grottes d’eau chaude sont formées par l’équilibre de solubilité du CaCO3.",
          "ru": "Сталактиты и сталагмиты (травертины) в пещерах с горячей водой образуются за счет баланса растворимости CaCO3.",
          "ar": "تتشكل الهوابط والصواعد (الحجر الجيري) في كهوف الماء الساخن من خلال توازن ذوبان CaCO3.",
          "zh": "热水洞中的钟乳石和石笋（石灰华）是由CaCO3的溶解度平衡形成的。",
          "ku": "Stalaktît û stalagmît (travertîn) di şikeftên ava germ de ji balansa çareserbûnê ya CaCO3 çêdibin."
        },
        {
          "tr": "Endotermik tuzda ısıtma yapılırsa Kçç küçülür.",
          "en": "If heating is done in endothermic salt, Ksp shrinks.",
          "de": "Wenn in endothermem Salz erhitzt wird, schrumpft Ksp.",
          "fr": "Si le chauffage est effectué dans du sel endothermique, Ksp rétrécit.",
          "ru": "Если нагревание происходит в эндотермической соли, Ksp сжимается.",
          "ar": "إذا تم التسخين في ملح ماص للحرارة، فإن Ksp ينكمش.",
          "zh": "如果在吸热盐中加热，Ksp 会收缩。",
          "ku": "Ger germkirin di xwêya endotermîk de were kirin, Ksp piçûk dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sıcak su mağaralarındaki sarkıt ve dikitler (travertenler), CaCO3 ün çözünürlük dengesi ile oluşur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Stalactites and stalagmites (travertines) in hot water caves are formed by the solubility balance of CaCO3.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Stalaktiten und Stalagmiten (Travertine) in Heißwasserhöhlen entstehen durch das Löslichkeitsgleichgewicht von CaCO3.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les stalactites et stalagmites (travertins) dans les grottes d’eau chaude sont formées par l’équilibre de solubilité du CaCO3.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Сталактиты и сталагмиты (травертины) в пещерах с горячей водой образуются за счет баланса растворимости CaCO3.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتشكل الهوابط والصواعد (الحجر الجيري) في كهوف الماء الساخن من خلال توازن ذوبان CaCO3.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“热水洞中的钟乳石和石笋（石灰华）是由CaCO3的溶解度平衡形成的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Stalaktît û stalagmît (travertîn) di şikeftên ava germ de ji balansa çareserbûnê ya CaCO3 çêdibin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin15",
      "stem": {
        "tr": "Çözünürlük Dengesi (Kçç) konusu kapsamında pH nın Çözünürlüğe Etkisi ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Solubility Product (Ksp), which of the following findings regarding Effect of pH on Solubility is scientifically verified?",
        "de": "Im Rahmen der Einheit Löslichkeitsprodukt: Welcher der folgenden Befunde zu Einfluss des pH-Werts auf die Löslichkeit ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Produit de Solubilité, laquelle des constatations suivantes concernant Effet du pH sur la solubilité est scientifiquement vérifiée?",
        "ru": "В контексте темы «Произведение растворимости», какой из следующих выводов относительно «Влияние pH на растворимость» научно подтверждён?",
        "ar": "في سياق موضوع \"حاصل الإذابة\"، أي من النتائج التالية المتعلقة بـ \"تأثير الرقم الهيدروجيني على الذوبان\" مثبتة علمياً؟",
        "zh": "在“溶度积”主题范畴内，下列关于“pH 对溶解度的影响”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Çareserbûnê\" de, kîjan ji van encamên li ser \"Bandora pH li ser Çareseriyê\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加普通离子时，Ksp值变小。",
          "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
        },
        {
          "tr": "Al(OH)3 için Kçç = 3s^3 tür.",
          "en": "For Al(OH)3, Ksp = 3s^3.",
          "de": "Für Al(OH)3 ist Ksp = 3s^3.",
          "fr": "Pour Al(OH)3, Ksp = 3s^3.",
          "ru": "Для Al(OH)3 Ksp = 3s^3.",
          "ar": "بالنسبة لـ Al(OH)3، Ksp = 3s^3.",
          "zh": "对于 Al(OH)3，Ksp = 3s^3。",
          "ku": "Ji bo Al(OH)3, Ksp = 3s^3."
        },
        {
          "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
          "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
          "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
          "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
          "ru": "При Qi = Ksp раствор ненасыщен и соль выпадает в осадок.",
          "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
          "zh": "当Qi = Ksp时，溶液不饱和，盐沉淀。",
          "ku": "Dema Qi = Ksp, çareserî têr nabe û xwê dibare."
        },
        {
          "tr": "Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.",
          "en": "In exothermic salts, as the temperature increases, more substances dissolve.",
          "de": "In exothermen Salzen lösen sich mit zunehmender Temperatur mehr Stoffe auf.",
          "fr": "Dans les sels exothermiques, à mesure que la température augmente, davantage de substances se dissolvent.",
          "ru": "В экзотермических солях при повышении температуры растворяется больше веществ.",
          "ar": "في الأملاح الطاردة للحرارة، مع ارتفاع درجة الحرارة، يذوب المزيد من المواد.",
          "zh": "在放热盐中，随着温度升高，更多物质溶解。",
          "ku": "Di xwêyên exotermîk de, her ku germahî zêde dibe, maddeyên zêde dihelin."
        },
        {
          "tr": "Bazik tuzların (örn. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.",
          "en": "The solubility of basic salts (e.g. Mg(OH)2) in an acidic environment increases because H+ ions neutralize OH- ions, shifting the equilibrium to the right.",
          "de": "Die Löslichkeit basischer Salze (z. B. Mg(OH)2) in einer sauren Umgebung erhöht sich, weil H+-Ionen OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschiebt.",
          "fr": "La solubilité des sels basiques (par exemple Mg(OH)2) dans un environnement acide augmente car les ions H+ neutralisent les ions OH-, déplaçant l'équilibre vers la droite.",
          "ru": "Растворимость основных солей (например, Mg(OH)2) в кислой среде увеличивается, поскольку ионы H+ нейтрализуют ионы OH-, смещая равновесие вправо.",
          "ar": "تزداد قابلية ذوبان الأملاح الأساسية (مثل Mg(OH)2) في البيئة الحمضية لأن أيونات H+ تحيد أيونات OH-، مما يؤدي إلى تحويل التوازن إلى اليمين.",
          "zh": "碱性盐（例如 Mg(OH)2）在酸性环境中的溶解度增加，因为 H+ 离子中和 OH- 离子，使平衡向右移动。",
          "ku": "Çareseriya xwêyên bingehîn (mînak Mg(OH)2) di hawîrdora asîd de zêde dibe ji ber ku îyonên H+ îyonên OH- bêbandor dikin, hevsengiyê ber bi rastê ve diguherînin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Bazik tuzların (örn. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of basic salts (e.g. Mg(OH)2) in an acidic environment increases because H+ ions neutralize OH- ions, shifting the equilibrium to the right.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit basischer Salze (z. B. Mg(OH)2) in einer sauren Umgebung erhöht sich, weil H+-Ionen OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschiebt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité des sels basiques (par exemple Mg(OH)2) dans un environnement acide augmente car les ions H+ neutralisent les ions OH-, déplaçant l'équilibre vers la droite.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость основных солей (например, Mg(OH)2) в кислой среде увеличивается, поскольку ионы H+ нейтрализуют ионы OH-, смещая равновесие вправо.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تزداد قابلية ذوبان الأملاح الأساسية (مثل Mg(OH)2) في البيئة الحمضية لأن أيونات H+ تحيد أيونات OH-، مما يؤدي إلى تحويل التوازن إلى اليمين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“碱性盐（例如 Mg(OH)2）在酸性环境中的溶解度增加，因为 H+ 离子中和 OH- 离子，使平衡向右移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareseriya xwêyên bingehîn (mînak Mg(OH)2) di hawîrdora asîd de zêde dibe ji ber ku îyonên H+ îyonên OH- bêbandor dikin, hevsengiyê ber bi rastê ve diguherînin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin16",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Çözünürlük Dengesi (Kçç) ünitesinde ele alınan XY Tipi Tuz hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Solubility Product (Ksp), which statement about XY Type Salt is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Löslichkeitsprodukt: Welche Aussage über Salz vom Typ XY ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Produit de Solubilité, quelle affirmation relative à Sel de type XY est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Произведение растворимости», какое утверждение о «Соль типа XY» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حاصل الإذابة\"، أي عبارة حول \"ملح من النوع XY\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶度积”单元中关于“XY型盐”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin li ser \"XY Tîpa Xwê\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).",
          "en": "Complexation may increase the solubility of poorly soluble salts (e.g. dissolution of AgCl in NH3 medium).",
          "de": "Die Komplexierung kann die Löslichkeit schwerlöslicher Salze erhöhen (z. B. Auflösung von AgCl in NH3-Medium).",
          "fr": "La complexation peut augmenter la solubilité des sels peu solubles (par exemple dissolution d'AgCl dans un milieu NH3).",
          "ru": "Комплексообразование может повысить растворимость плохо растворимых солей (например, растворение AgCl в среде NH3).",
          "ar": "قد يزيد التعقيد من قابلية ذوبان الأملاح ضعيفة الذوبان (مثل ذوبان AgCl في وسط NH3).",
          "zh": "络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。",
          "ku": "Tevlihevbûn dibe ku helbûna xwêyên kêm-çareserî zêde bike (mînak, belavbûna AgCl di navgîna NH3 de)."
        },
        {
          "tr": "AgCl için Kçç = 4s^3 tür.",
          "en": "For AgCl, Ksp = 4s^3.",
          "de": "Für AgCl ist Ksp = 4s^3.",
          "fr": "Pour AgCl, Ksp = 4s^3.",
          "ru": "Для AgCl Ksp = 4s^3.",
          "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
          "zh": "对于 AgCl，Ksp = 4s^3。",
          "ku": "Ji bo AgCl, Ksp = 4s^3."
        },
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "共同离子增加了盐的溶解度。",
          "ku": "Iyona hevpar helbûna xwê zêde dike."
        },
        {
          "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
          "en": "AgCl salt is more soluble in NaCl solution than in pure water.",
          "de": "AgCl-Salz ist in NaCl-Lösung löslicher als in reinem Wasser.",
          "fr": "Le sel AgCl est plus soluble dans une solution de NaCl que dans l’eau pure.",
          "ru": "Соль AgCl более растворима в растворе NaCl, чем в чистой воде.",
          "ar": "ملح AgCl أكثر قابلية للذوبان في محلول NaCl منه في الماء النقي.",
          "zh": "AgCl盐在氯化钠溶液中比在纯水中更易溶解。",
          "ku": "Xwêya AgCl ji ava paqij di çareseriya NaCl de bêtir tê çareserkirin."
        },
        {
          "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
          "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
          "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
          "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
          "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
          "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
          "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
          "ku": "Ger av li çaraleke ku li binê wê maddeyên hişk hene, were zêdekirin, konsantasyona çareseriyê zû zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Complexation may increase the solubility of poorly soluble salts (e.g. dissolution of AgCl in NH3 medium).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Komplexierung kann die Löslichkeit schwerlöslicher Salze erhöhen (z. B. Auflösung von AgCl in NH3-Medium).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La complexation peut augmenter la solubilité des sels peu solubles (par exemple dissolution d'AgCl dans un milieu NH3).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Комплексообразование может повысить растворимость плохо растворимых солей (например, растворение AgCl в среде NH3).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قد يزيد التعقيد من قابلية ذوبان الأملاح ضعيفة الذوبان (مثل ذوبان AgCl في وسط NH3).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Tevlihevbûn dibe ku helbûna xwêyên kêm-çareserî zêde bike (mînak, belavbûna AgCl di navgîna NH3 de).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit20;
