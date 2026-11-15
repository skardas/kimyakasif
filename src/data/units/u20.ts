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
    "ar": "حالة الترسيب، علاقات Ktch والأيون المشترك",
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
        "en": "Ksp refers to the concentration of highly soluble salts.",
        "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
        "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
        "ru": "Ksp относится к концентрации хорошо растворимых солей.",
        "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
        "zh": "Ksp 是指高溶解盐的浓度。",
        "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
      }
    },
    {
      "id": "u20-f02",
      "fact": {
        "tr": "Kçç sabiti YALNIZCA sıcaklıkla değişir; ortak iyon, çözünen miktarı veya su eklemek Kçç yi DEĞİŞTİRMEZ.",
        "en": "The Ksp constant changes ONLY with temperature; Adding common ion, amount of solute, or water DOES NOT change Ksp.",
        "de": "Die Ksp-Konstante ändert sich NUR mit der Temperatur; die Zugabe eines gleichen (gemeinsamen) Ions, die Menge an gelöstem Stoff oder Wasser verändert Ksp NICHT.",
        "fr": "La constante Ksp change UNIQUEMENT avec la température ; L'ajout d'ions communs, de quantité de soluté ou d'eau NE modifie PAS Ksp.",
        "ru": "Константа Ksp меняется ТОЛЬКО с температурой; Добавление общего иона, количества растворенного вещества или воды НЕ ИЗМЕНЯЕТ Ksp.",
        "ar": "يتغير ثابت Ksp فقط مع درجة الحرارة؛ إن إضافة الأيون المشترك أو كمية المذاب أو الماء لا يغير Ksp.",
        "zh": "Ksp 常数仅随温度变化；添加同离子、溶质量或水不会改变 Ksp。",
        "ku": "Ksp domdar TENÊ bi germahiyê diguhere; Zêdekirina îyona hevpar, mîqdara madeya çareserkirî, an avê Ksp NAguherîne."
      },
      "trap": {
        "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
        "en": "When the common ion is added, the Ksp value becomes smaller.",
        "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
        "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
        "ru": "При добавлении общего иона значение Ksp становится меньше.",
        "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
        "zh": "当添加同离子时，Ksp值变小。",
        "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
      },
      "osymTip": {
        "tr": "ÖSYM kuralı: Kçç yi sadece sıcaklık değiştirir!",
        "en": "ÖSYM rule: Only temperature changes Ksp!",
        "de": "ÖSYM-Regel: Nur die Temperatur ändert Ksp!",
        "fr": "Règle ÖSYM : seule la température modifie Ksp !",
        "ru": "Правило ÖSYM: Ksp изменяет только температура!",
        "ar": "قاعدة ÖSYM: درجة الحرارة وحدها تغيّر Ksp!",
        "zh": "ÖSYM 规则：只有温度会改变 Ksp！",
        "ku": "Qanûna ÖSYM: Tenê germahî Ksp diguherîne!"
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
        "zh": "同离子效应：根据 Le Chatelier 的说法，溶液中同离子的存在会将平衡转移到反应物并降低溶解度。",
        "ku": "Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike."
      },
      "trap": {
        "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
        "en": "The common ion increases the solubility of the salt.",
        "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
        "fr": "L'ion commun augmente la solubilité du sel.",
        "ru": "Общий ион увеличивает растворимость соли.",
        "ar": "الأيون المشترك يزيد من ذوبان الملح.",
        "zh": "同离子增加了盐的溶解度。",
        "ku": "Iyona hevpar helbûna xwê zêde dike."
      }
    },
    {
      "id": "u20-f07",
      "fact": {
        "tr": "İyon çarpımı Qi (çökelme kesri): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.",
        "en": "Ion product Qi: if Qi > Ksp, the solution is supersaturated and precipitation occurs.",
        "de": "Ionenprodukt Qi: Wenn Qi > Ksp, ist die Lösung übersättigt und es kommt zur Fällung.",
        "fr": "Produit ionique Qi : si Qi > Ksp, la solution est sursaturée et un précipité se forme.",
        "ru": "Ионное произведение Qi: если Qi > Ksp, раствор пересыщен и выпадает осадок.",
        "ar": "الحاصل الأيوني Qi: إذا كان Qi > Ksp يكون المحلول فوق مشبع ويحدث ترسيب.",
        "zh": "离子积Qi：若Qi > Ksp，溶液过饱和，产生沉淀。",
        "ku": "Hevdana îyonan Qi: ger Qi > Ksp be, çareserî ji têrbûnê zêdetir e û nişte çêdibe."
      },
      "trap": {
        "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
        "en": "When Qi < Ksp, precipitation occurs.",
        "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
        "fr": "Lorsque Qi < Ksp, un précipité se forme.",
        "ru": "Когда Qi < Ksp, выпадает осадок.",
        "ar": "عندما يكون Qi < Ksp يحدث ترسيب.",
        "zh": "当 Qi < Ksp 时，发生沉淀。",
        "ku": "Dema Qi < Ksp be, nişte çêdibe."
      }
    },
    {
      "id": "u20-f08",
      "fact": {
        "tr": "Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.",
        "en": "If Qi = Ksp, the solution is fully saturated and there is no precipitation; If Qi < Ksp, the solution is unsaturated.",
        "de": "Wenn Qi = Ksp, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Ksp, ist die Lösung ungesättigt.",
        "fr": "Si Qi = Ksp, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Ksp, la solution est insaturée.",
        "ru": "Если Qi = Ksp, раствор насыщен и осадок не выпадает; если Qi < Ksp, раствор ненасыщенный.",
        "ar": "إذا كان Qi = Ksp يكون المحلول مشبعًا تمامًا ولا يحدث ترسيب؛ وإذا كان Qi < Ksp فالمحلول غير مشبع.",
        "zh": "若Qi=Ksp，则溶液完全饱和，无沉淀；如果 Qi < Ksp，则溶液不饱和。",
        "ku": "Ger Qi = Ksp be, çareserî tam têr e û nişte çênabe; ger Qi < Ksp be, çareserî ne têr e."
      },
      "trap": {
        "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
        "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
        "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
        "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
        "ru": "При Qi = Ksp раствор ненасыщен и соль выпадает в осадок.",
        "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
        "zh": "当Qi = Ksp时，溶液不饱和，盐沉淀。",
        "ku": "Dema Qi = Ksp be, çareserî ne têr e û xwê dinişe."
      }
    },
    {
      "id": "u20-f09",
      "fact": {
        "tr": "AgCl katısının saf sudaki çözünürlüğü, 0,1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.",
        "en": "The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.",
        "de": "Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.",
        "fr": "La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.",
        "ru": "Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.",
        "ar": "إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.",
        "zh": "AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。",
        "ku": "Helbûna AgCl ya hişk di ava saf de ji helbûna wê di çareseriya 0,1 M NaCl de PIR MEZINTIR e."
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
        "tr": "Dipte katısı bulunan doymuş çözeltiye aynı sıcaklıkta su eklenirse dipteki katının bir kısmı çözünür; dipte katı kaldığı sürece iyon derişimleri ve Kçç değişmez.",
        "en": "If water is added at the same temperature to a saturated solution with solid at the bottom, part of the solid dissolves; as long as some solid remains, the ion concentrations and Ksp do not change.",
        "de": "Wird einer gesättigten Lösung mit Bodenkörper bei gleicher Temperatur Wasser zugesetzt, löst sich ein Teil des Bodenkörpers; solange Bodenkörper vorhanden bleibt, ändern sich die Ionenkonzentrationen und Ksp nicht.",
        "fr": "Si l'on ajoute de l'eau à même température à une solution saturée contenant un dépôt solide, une partie du solide se dissout ; tant qu'il reste du solide, les concentrations des ions et Ksp ne changent pas.",
        "ru": "Если к насыщенному раствору с осадком на дне добавить воду при той же температуре, часть осадка растворится; пока осадок остаётся, концентрации ионов и Ksp не изменяются.",
        "ar": "إذا أُضيف الماء عند درجة الحرارة نفسها إلى محلول مشبع في قاعه مادة صلبة، يذوب جزء من الصلب؛ وما دام بعض الصلب باقيًا فلا تتغير تراكيز الأيونات ولا Ksp.",
        "zh": "在同一温度下向底部有固体的饱和溶液中加水，部分固体溶解；只要仍有固体剩余，离子浓度和Ksp都不变。",
        "ku": "Ger di heman germahiyê de av li çareseriya têr a ku li binê wê hişk heye were zêdekirin, beşek ji hişkê dihele; heta ku hişk bimîne, tîrbûna îyonan û Ksp naguherin."
      },
      "trap": {
        "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
        "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
        "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
        "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
        "ru": "Если к раствору с твердыми частицами на дне добавить воду, концентрация раствора быстро возрастает.",
        "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
        "zh": "如果向底部有固体的溶液中添加水，则溶液浓度迅速增加。",
        "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
      }
    },
    {
      "id": "u20-f13",
      "fact": {
        "tr": "Seçimli çöktürme: Aynı tipteki (ör. AgCl ve AgBr gibi XY) tuzların iyonlarını eşit derişimde içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.",
        "en": "Selective precipitation: when a precipitating agent is added to a solution containing equal concentrations of the ions of salts of the same type (e.g. XY salts such as AgCl and AgBr), the one with the smaller Ksp (less soluble) precipitates first.",
        "de": "Selektive Fällung: Wird einer Lösung, die die Ionen gleichartiger Salze (z. B. XY-Salze wie AgCl und AgBr) in gleicher Konzentration enthält, ein Fällungsmittel zugesetzt, fällt das Salz mit dem kleineren Ksp (schwerer löslich) zuerst aus.",
        "fr": "Précipitation sélective : lorsqu'on ajoute un agent précipitant à une solution contenant, à concentrations égales, les ions de sels du même type (ex. sels XY comme AgCl et AgBr), celui dont le Ksp est le plus petit (le moins soluble) précipite en premier.",
        "ru": "Селективное осаждение: при добавлении осадителя к раствору, содержащему в равных концентрациях ионы солей одного типа (напр., солей XY, таких как AgCl и AgBr), первой осаждается соль с меньшим Ksp (менее растворимая).",
        "ar": "الترسيب الانتقائي: عند إضافة عامل مرسِّب إلى محلول يحتوي بتراكيز متساوية على أيونات أملاح من النوع نفسه (مثل أملاح XY كـ AgCl و AgBr)، يترسب أولًا الملح ذو Ksp الأصغر (الأقل ذوبانًا).",
        "zh": "选择性沉淀：向含有等浓度同类型盐（如AgCl和AgBr这类XY型盐）离子的溶液中加入沉淀剂时，Ksp较小（溶解度较小）的先沉淀。",
        "ku": "Niştina hilbijartî: dema ku madeyeke nişteker li çareseriyeke ku îyonên xwêyên ji heman tîpê (mînak xwêyên XY wekî AgCl û AgBr) bi tîrbûna wekhev dihewîne tê zêdekirin, ya ku Ksp wê piçûktir e (kêmtir dihele) pêşî dinişe."
      },
      "trap": {
        "tr": "Aynı tipteki tuzlardan Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
        "en": "Among salts of the same type, the salt with the larger Ksp precipitates from the solution first.",
        "de": "Von gleichartigen Salzen fällt das Salz mit dem größeren Ksp zuerst aus der Lösung aus.",
        "fr": "Parmi des sels du même type, celui dont le Ksp est le plus grand précipite en premier.",
        "ru": "Из солей одного типа первой из раствора осаждается соль с бо́льшим Ksp.",
        "ar": "من بين الأملاح من النوع نفسه، يترسب أولًا الملح ذو Ksp الأكبر.",
        "zh": "在同类型的盐中，Ksp较大的盐先从溶液中沉淀出来。",
        "ku": "Di nav xwêyên ji heman tîpê de, xwêya ku Ksp wê mezintir e pêşî ji çareseriyê dinişe."
      }
    },
    {
      "id": "u20-f14",
      "fact": {
        "tr": "Mağaralardaki sarkıt ve dikitler ile Pamukkale travertenleri, CaCO3'ün çözünme-çökelme dengesiyle oluşur.",
        "en": "Stalactites and stalagmites in caves and the travertines of Pamukkale form through the dissolution-precipitation equilibrium of CaCO3.",
        "de": "Stalaktiten und Stalagmiten in Höhlen sowie die Travertinterrassen von Pamukkale entstehen durch das Lösungs-Fällungs-Gleichgewicht von CaCO3.",
        "fr": "Les stalactites et stalagmites des grottes ainsi que les travertins de Pamukkale se forment grâce à l’équilibre de dissolution-précipitation de CaCO3.",
        "ru": "Сталактиты и сталагмиты в пещерах, а также травертины Памуккале образуются благодаря равновесию растворения-осаждения CaCO3.",
        "ar": "تتكوّن الهوابط والصواعد في الكهوف وترافرتينات باموكالي من خلال اتزان الذوبان-الترسيب لـ CaCO3.",
        "zh": "洞穴中的钟乳石、石笋以及棉花堡的石灰华，都是由CaCO3的溶解-沉淀平衡形成的。",
        "ku": "Stalaktît û stalagmîtên di şikeftan de û travertenên Pamukkaleyê bi hevsengiya helîn-niştinê ya CaCO3 çêdibin."
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
        "tr": "Az çözünen bazların (ör. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.",
        "en": "The solubility of sparingly soluble bases (e.g. Mg(OH)2) increases in an acidic medium because H+ ions neutralize OH- ions, shifting the equilibrium to the right.",
        "de": "Die Löslichkeit schwerlöslicher Basen (z. B. Mg(OH)2) nimmt in saurem Milieu zu, weil H+-Ionen die OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschieben.",
        "fr": "La solubilité des bases peu solubles (ex. Mg(OH)2) augmente en milieu acide car les ions H+ neutralisent les ions OH-, ce qui déplace l’équilibre vers la droite.",
        "ru": "Растворимость малорастворимых оснований (напр., Mg(OH)2) в кислой среде увеличивается, так как ионы H+ нейтрализуют ионы OH- и смещают равновесие вправо.",
        "ar": "تزداد ذوبانية القواعد قليلة الذوبان (مثل Mg(OH)2) في الوسط الحمضي لأن أيونات H+ تعادل أيونات OH- فينزاح الاتزان نحو اليمين.",
        "zh": "难溶碱（如Mg(OH)2）在酸性介质中的溶解度增大，因为H+中和OH-，使平衡向右移动。",
        "ku": "Helbûna bazên kêm-helbar (mînak Mg(OH)2) di navgîna asîdî de zêde dibe, ji ber ku îyonên H+ îyonên OH- bêbandor dikin û hevsengiyê ber bi rastê ve dibin."
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
        "ar": "قد يزيد تكوين الأيونات المعقدة من ذوبانية الأملاح قليلة الذوبان (مثل ذوبان AgCl في وسط يحتوي NH3).",
        "zh": "络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。",
        "ku": "Pêkhatina îyonên kompleks dikare helbûna xwêyên kêm-helbar zêde bike (mînak helîna AgCl di navgîna NH3 de)."
      },
      "trap": {
        "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
        "en": "Complex formation precipitates the salt immediately.",
        "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
        "fr": "La formation de complexes précipite le sel immédiatement.",
        "ru": "При образовании комплекса соль немедленно осаждается.",
        "ar": "يؤدي تكوين المعقد إلى ترسيب الملح فورًا.",
        "zh": "络合物的形成使盐立即沉淀。",
        "ku": "Pêkhatina kompleksê xwê tavilê dinişîne."
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
        "fr": "Qi < Ksp",
        "ru": "Qi < Ksp",
        "ar": "Qi < Ksp",
        "zh": "Qi < Ksp",
        "ku": "Qi < Ksp"
      },
      "conceptB": {
        "tr": "Qi > Kçç",
        "en": "Qi > Ksp",
        "de": "Qi > Ksp",
        "fr": "Qi > Ksp",
        "ru": "Qi > Ksp",
        "ar": "Qi > Ksp",
        "zh": "Qi > Ksp",
        "ku": "Qi > Ksp"
      },
      "distinction": {
        "tr": "Qi < Kçç doymamış çözelti çökelme yok; Qi > Kçç aşırı doymuş çözelti çökelme var demektir.",
        "en": "Qi < Ksp means an unsaturated solution with no precipitation; Qi > Ksp means a supersaturated solution in which precipitation occurs.",
        "de": "Qi < Ksp bedeutet eine ungesättigte Lösung ohne Fällung; Qi > Ksp bedeutet eine übersättigte Lösung, in der Fällung eintritt.",
        "fr": "Qi < Ksp signifie une solution insaturée sans précipitation ; Qi > Ksp signifie une solution sursaturée où un précipité se forme.",
        "ru": "Qi < Ksp — ненасыщенный раствор, осадок не выпадает; Qi > Ksp — пересыщенный раствор, выпадает осадок.",
        "ar": "Qi < Ksp يعني محلولًا غير مشبع بلا ترسيب؛ و Qi > Ksp يعني محلولًا فوق مشبع يحدث فيه ترسيب.",
        "zh": "Qi < Ksp表示不饱和溶液，无沉淀；Qi > Ksp表示过饱和溶液，有沉淀生成。",
        "ku": "Qi < Ksp yanî çareseriya ne têr û nişte çênabe; Qi > Ksp yanî çareseriya ji têrbûnê zêdetir û nişte çêdibe."
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
        "ku": "Helbûn di ava saf de"
      },
      "conceptB": {
        "tr": "Ortak İyon İçeren Çözeltideki Çözünürlük",
        "en": "Solubility in a Solution Containing a Common Ion",
        "de": "Löslichkeit in einer Lösung mit gleichionigem Zusatz",
        "fr": "Solubilité dans une solution contenant un ion commun",
        "ru": "Растворимость в растворе, содержащем общий ион",
        "ar": "الذوبانية في محلول يحتوي على أيون مشترك",
        "zh": "在含同离子溶液中的溶解度",
        "ku": "Helbûn di çareseriya bi îyona hevpar de"
      },
      "distinction": {
        "tr": "Ortak iyon varlığı dengeyi sola kaydırarak çözünürlüğü büyük ölçüde düşürür.",
        "en": "The presence of common ions shifts the equilibrium to the left, greatly reducing the solubility.",
        "de": "Das Vorhandensein gemeinsamer Ionen verschiebt das Gleichgewicht nach links, wodurch die Löslichkeit stark verringert wird.",
        "fr": "La présence d’ions communs déplace l’équilibre vers la gauche, réduisant considérablement la solubilité.",
        "ru": "Присутствие общих ионов смещает равновесие влево, что значительно снижает растворимость.",
        "ar": "يؤدي وجود الأيونات المشتركة إلى تغيير التوازن إلى اليسار، مما يقلل بشكل كبير من قابلية الذوبان.",
        "zh": "同离子的存在使平衡向左移动，大大降低了溶解度。",
        "ku": "Hebûna îyonên hevpar hevsengiyê ber bi çepê ve diguhere, helbûnê pir kêm dike."
      }
    },
    {
      "id": "u20-c03",
      "conceptA": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Solubility Product (Ksp)",
        "de": "Löslichkeitsprodukt (Ksp)",
        "fr": "Produit de solubilité (Ksp)",
        "ru": "Произведение растворимости (Ksp)",
        "ar": "حاصل الإذابة (Ksp)",
        "zh": "溶度积 (Ksp)",
        "ku": "Hevdana Helbûnê (Ksp)"
      },
      "conceptB": {
        "tr": "Molar Çözünürlük (s)",
        "en": "Molar Solubility (s)",
        "de": "Molare Löslichkeit (s)",
        "fr": "Solubilité molaire (s)",
        "ru": "Молярная растворимость (s)",
        "ar": "الذوبانية المولية (s)",
        "zh": "摩尔溶解度（s）",
        "ku": "Helbûna Molar (s)"
      },
      "distinction": {
        "tr": "Kçç denge sabitidir ve sadece sıcaklıkla değişir; s ise 1 litrede çözünen maksimum mol sayısı olup ortak iyonla azalır.",
        "en": "Ksp is the equilibrium constant and varies only with temperature; s is the maximum number of moles dissolved in 1 liter and decreases with the common ion.",
        "de": "Ksp ist die Gleichgewichtskonstante und variiert nur mit der Temperatur; s ist die maximale Anzahl der in 1 Liter gelösten Mol und nimmt mit dem gemeinsamen Ion ab.",
        "fr": "Ksp est la constante d'équilibre et ne varie qu'avec la température ; s est le nombre maximum de moles dissoutes dans 1 litre et diminue avec l'ion commun.",
        "ru": "Ksp — константа равновесия и меняется только с температурой; s — максимальное количество молей, растворенных в 1 литре, которое уменьшается с ростом общего иона.",
        "ar": "Ksp هو ثابت التوازن ويتغير فقط مع درجة الحرارة؛ s هو الحد الأقصى لعدد المولات المذابة في 1 لتر ويتناقص مع الأيون المشترك.",
        "zh": "Ksp 是平衡常数，仅随温度变化； s 是 1 升中溶解的最大摩尔数，随着同离子的增加而减少。",
        "ku": "Ksp berdewamiya hevsengiyê ye û tenê bi germahiyê diguhere; s hejmara herî zêde ya molên ku di 1 lîtreyê de dihele ye û bi îyona hevpar re kêm dibe."
      }
    },
    {
      "id": "u20-c04",
      "conceptA": {
        "tr": "İyon Çarpımı (Qi)",
        "en": "Ion Product (Qi)",
        "de": "Ionenprodukt (Qi)",
        "fr": "Produit ionique (Qi)",
        "ru": "Ионное произведение (Qi)",
        "ar": "الحاصل الأيوني (Qi)",
        "zh": "离子积 (Qi)",
        "ku": "Hevdana Îyonan (Qi)"
      },
      "conceptB": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Solubility Product (Ksp)",
        "de": "Löslichkeitsprodukt (Ksp)",
        "fr": "Produit de solubilité (Ksp)",
        "ru": "Произведение растворимости (Ksp)",
        "ar": "حاصل الإذابة (Ksp)",
        "zh": "溶度积 (Ksp)",
        "ku": "Hevdana Helbûnê (Ksp)"
      },
      "distinction": {
        "tr": "Qi o andaki iyon derişimleri çarpımıdır; Qi > Kçç ise çözelti aşırı doygundur ve çökme başlar.",
        "en": "Qi is the product of ion concentrations at that moment; If Qi > Ksp, the solution is supersaturated and precipitation begins.",
        "de": "Qi ist das Produkt der Ionenkonzentrationen zu diesem Zeitpunkt; Wenn Qi > Ksp, ist die Lösung übersättigt und es beginnt eine Ausfällung.",
        "fr": "Le Qi est le produit des concentrations d’ions à ce moment-là ; Si Qi > Ksp, la solution est sursaturée et la précipitation commence.",
        "ru": "Qi – произведение концентраций ионов в данный момент; Если Qi > Ksp, раствор пересыщается и начинается осаждение.",
        "ar": "Qi هو نتاج تركيزات الأيونات في تلك اللحظة؛ إذا كان Qi > Ksp، يكون المحلول مفرط التشبع ويبدأ الترسيب.",
        "zh": "Qi是该时刻离子浓度的乘积；如果 Qi > Ksp，则溶液过饱和并开始沉淀。",
        "ku": "Qi berhema îyonên wê gavê ye; Ger Qi > Ksp, çareserî pir têr dibe û niştin dest pê dike."
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
        "zh": "同离子效应",
        "ku": "Bandora Îyona Hevpar"
      },
      "conceptB": {
        "tr": "Yabancı İyon Etkisi",
        "en": "Foreign Ion Effect",
        "de": "Fremdioneneffekt",
        "fr": "Effet des ions étrangers",
        "ru": "Эффект инородного иона",
        "ar": "تأثير الأيونات الأجنبية",
        "zh": "外来离子效应",
        "ku": "Bandora Îyona Biyanî"
      },
      "distinction": {
        "tr": "Ortak iyon, Le Chatelier ilkesi gereği çözünürlüğü belirgin şekilde azaltır; yabancı iyon ise tuz etkisiyle çözünürlüğü az miktarda artırabilir.",
        "en": "A common ion markedly decreases solubility in accordance with Le Chatelier's principle; a foreign ion may slightly increase solubility through the salt effect.",
        "de": "Ein gleiches (gemeinsames) Ion verringert die Löslichkeit nach dem Prinzip von Le Chatelier deutlich; ein Fremdion kann die Löslichkeit durch den Salzeffekt leicht erhöhen.",
        "fr": "Un ion commun diminue nettement la solubilité, conformément au principe de Le Chatelier ; un ion étranger peut légèrement l'augmenter par effet de sel.",
        "ru": "Общий ион, согласно принципу Ле Шателье, заметно снижает растворимость; посторонний ион может немного повысить растворимость за счёт солевого эффекта.",
        "ar": "يقلل الأيون المشترك الذوبانية بشكل واضح وفق مبدأ لوشاتلييه؛ أما الأيون الغريب فقد يزيد الذوبانية قليلًا بتأثير الملح.",
        "zh": "根据勒夏特列原理，同离子会明显降低溶解度；外来离子则可能通过盐效应使溶解度略有增大。",
        "ku": "Îyona hevpar li gorî prensîba Le Chatelier helbûnê bi awayekî eşkere kêm dike; îyona biyanî dikare bi bandora xwê helbûnê hinekî zêde bike."
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
        "ar": "اتزان المحلول المشبع",
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
        "ku": "Çareseriya Ji Têrbûnê Zêdetir"
      },
      "distinction": {
        "tr": "Doygun çözeltide katı ile iyonlar dengededir ve Qi = Kçç'dir; aşırı doygunda Qi > Kçç olup sistem kararsızdır.",
        "en": "In saturated solution, the solid and ions are in balance and Qi = Ksp; In oversaturation, Qi > Ksp and the system is unstable.",
        "de": "In gesättigter Lösung sind Feststoff und Ionen im Gleichgewicht und Qi = Ksp; Bei Übersättigung ist Qi > Ksp und das System ist instabil.",
        "fr": "En solution saturée, le solide et les ions sont en équilibre et Qi = Ksp ; En sursaturation, Qi > Ksp et le système est instable.",
        "ru": "В насыщенном растворе твердое вещество и ионы находятся в равновесии и Qi = Ksp; При пересыщении Qi > Ksp и система неустойчива.",
        "ar": "في المحلول المشبع، تكون المواد الصلبة والأيونات متوازنة وQi = Ksp؛ في حالة التشبع الزائد، Qi > Ksp والنظام غير مستقر.",
        "zh": "在饱和溶液中，固体和离子处于平衡状态，Qi = Ksp；过饱和时，Qi > Ksp，系统不稳定。",
        "ku": "Di çareseriya têrbûyî de, hişk û îyon di hevsengiyê de ne û Qi = Ksp; Di zêde têrbûnê de Qi > Ksp û pergal bêîstîkrar e."
      }
    },
    {
      "id": "u20-c07",
      "conceptA": {
        "tr": "pH'nın Çözünürlüğe Etkisi",
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
        "tr": "Bazik tuzların çözünürlüğü asit eklendikçe artar; sıcaklık artışı endotermik tuzların çözünürlüğünü ve Kçç'sini artırır.",
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
        "tr": "XY tuzunda Kçç = s^2'dir; XY2 tuzunda Kçç = 4s^3 bağıntısı geçerlidir.",
        "en": "In the XY salt, Ksp = s^2; In the XY2 salt, the relation Ksp = 4s^3 is valid.",
        "de": "Im XY-Salz ist Ksp = s^2; Im XY2-Salz gilt die Beziehung Ksp = 4s^3.",
        "fr": "Dans le sel XY, Ksp = s^2 ; Dans le sel XY2, la relation Ksp = 4s^3 est valide.",
        "ru": "В соли XY Ksp = s^2; В соли XY2 справедливо соотношение Ksp = 4s^3.",
        "ar": "في ملح XY، Ksp = s^2؛ في ملح XY2، العلاقة Ksp = 4s^3 صحيحة.",
        "zh": "在 XY 盐中，Ksp = s^2；在 XY2 盐中，关系式 Ksp = 4s^3 有效。",
        "ku": "Di xwêya XY de, Ksp = s^2; Di xwêya XY2 de, têkiliya Ksp = 4s^3 derbasdar e."
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
        "fr": "Déterminer si un précipité se formera",
        "ru": "Определение, выпадет ли осадок",
        "ar": "تحديد ما إذا كان سيحدث ترسيب",
        "zh": "判断是否会产生沉淀",
        "ku": "Diyarkirina ka nişte dê çêbibe an na"
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
          "en": "Write the ion product expression: Qi = [A+]^a * [B-]^b",
          "de": "Stelle den Ausdruck für das Ionenprodukt auf: Qi = [A+]^a * [B-]^b",
          "fr": "Écrire l'expression du produit ionique : Qi = [A+]^a * [B-]^b",
          "ru": "Запишите выражение ионного произведения: Qi = [A+]^a * [B-]^b",
          "ar": "اكتب علاقة الحاصل الأيوني: Qi = [A+]^a * [B-]^b",
          "zh": "写出离子积表达式：Qi = [A+]^a * [B-]^b",
          "ku": "Têkiliya hevdana îyonan binivîse: Qi = [A+]^a * [B-]^b"
        },
        {
          "tr": "Qi değerini hesapla",
          "en": "Calculate Qi value",
          "de": "Berechnen Sie den Qi-Wert",
          "fr": "Calculer la valeur Qi",
          "ru": "Рассчитать значение Qi",
          "ar": "حساب قيمة Qi",
          "zh": "计算Qi值",
          "ku": "Nirxa Qi hesab bike"
        },
        {
          "tr": "Qi ile Kçç yi karşılaştır (Qi > Kçç ise çöker)",
          "en": "Compare Qi with Ksp (a precipitate forms if Qi > Ksp)",
          "de": "Vergleiche Qi mit Ksp (bei Qi > Ksp fällt ein Niederschlag aus)",
          "fr": "Comparer Qi à Ksp (un précipité se forme si Qi > Ksp)",
          "ru": "Сравните Qi с Ksp (если Qi > Ksp, выпадает осадок)",
          "ar": "قارن Qi مع Ksp (يحدث ترسيب إذا كان Qi > Ksp)",
          "zh": "比较Qi与Ksp（若Qi > Ksp则产生沉淀）",
          "ku": "Qi bi Ksp re bide ber hev (ger Qi > Ksp be nişte çêdibe)"
        }
      ]
    },
    {
      "id": "u20-s02",
      "title": {
        "tr": "Kçç'den Çözünürlük Hesabı",
        "en": "Solubility Calculation from Ksp",
        "de": "Löslichkeitsberechnung aus Ksp",
        "fr": "Calcul de solubilité à partir de Ksp",
        "ru": "Расчет растворимости по Ksp",
        "ar": "حساب الذوبان من Ksp",
        "zh": "根据 Ksp 计算溶解度",
        "ku": "Hesabkirina Çareseriyê ji Ksp"
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
          "tr": "Kçç bağıntısı kurularak s'nin kuvvetine eşitlenir",
          "en": "The Ksp expression is written in terms of a power of s (e.g. s^2, 4s^3)",
          "de": "Der Ksp-Ausdruck wird als Potenz von s geschrieben (z. B. s^2, 4s^3)",
          "fr": "L'expression de Ksp est écrite en fonction d'une puissance de s (ex. s^2, 4s^3)",
          "ru": "Выражение Ksp записывают через степень s (напр., s^2, 4s^3)",
          "ar": "يُكتب تعبير Ksp بدلالة قوة لـ s (مثل s^2 و 4s^3)",
          "zh": "把Ksp表达式写成s的幂的形式（如s^2、4s^3）",
          "ku": "Têkiliya Ksp bi hêzeke s tê nivîsandin (mînak s^2, 4s^3)"
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
        "zh": "同离子效应计算",
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
          "zh": "测定易溶盐的同离子浓度",
          "ku": "Pîvana îona hevpar a ji xwêyek baş-çareserî tê destnîşankirin"
        },
        {
          "tr": "Az çözünen tuzun çözünme dengesi ve Kçç bağıntısı yazılır",
          "en": "The dissolution equilibrium and Ksp expression of the sparingly soluble salt are written",
          "de": "Das Lösungsgleichgewicht und der Ksp-Ausdruck des schwerlöslichen Salzes werden aufgestellt",
          "fr": "L'équilibre de dissolution et l'expression de Ksp du sel peu soluble sont écrits",
          "ru": "Записываются равновесие растворения малорастворимой соли и выражение Ksp",
          "ar": "تُكتب معادلة اتزان ذوبان الملح قليل الذوبان وعلاقة Ksp",
          "zh": "写出难溶盐的溶解平衡及Ksp表达式",
          "ku": "Hevsengiya helînê û têkiliya Ksp ya xwêya kêm-helbar tên nivîsandin"
        },
        {
          "tr": "Ortak iyon derişimi denge bağıntısında yerine konur",
          "en": "The common ion concentration is substituted into the equilibrium relation",
          "de": "Die gemeinsame Ionenkonzentration wird in die Gleichgewichtsbeziehung eingesetzt",
          "fr": "La concentration en ions communs est substituée dans la relation d'équilibre",
          "ru": "Концентрация обычных ионов подставляется в соотношение равновесия",
          "ar": "يتم استبدال تركيز الأيونات المشتركة في علاقة التوازن",
          "zh": "将同离子浓度代入平衡关系式",
          "ku": "Giraniya îyona hevpar di têkiliya hevsengiyê de tê veguheztin"
        },
        {
          "tr": "Le Chatelier gereği çözünürlüğün azaldığı gösterilir",
          "en": "It is shown that the solubility decreases, in accordance with Le Chatelier's principle",
          "de": "Es wird gezeigt, dass die Löslichkeit nach Le Chatelier abnimmt",
          "fr": "On montre que la solubilité diminue, conformément au principe de Le Chatelier",
          "ru": "Показывают, что растворимость уменьшается в соответствии с принципом Ле Шателье",
          "ar": "يُبيَّن أن الذوبانية تقل وفق مبدأ لوشاتلييه",
          "zh": "根据勒夏特列原理，说明溶解度降低",
          "ku": "Tê nîşandan ku li gorî Le Chatelier helbûn kêm dibe"
        }
      ]
    },
    {
      "id": "u20-s04",
      "title": {
        "tr": "Çökme Olup Olmayacağını Belirleme",
        "en": "Determining Whether Precipitation Will Occur",
        "de": "Bestimmen, ob eine Fällung eintritt",
        "fr": "Déterminer si une précipitation aura lieu",
        "ru": "Определение, произойдёт ли осаждение",
        "ar": "تحديد ما إذا كان الترسيب سيحدث",
        "zh": "判断是否发生沉淀",
        "ku": "Diyarkirina ka niştin dê çêbibe an na"
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
          "ru": "Находят Qi — произведение текущих концентраций ионов",
          "ar": "يُحسب Qi بضرب تراكيز الأيونات في تلك اللحظة",
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
          "en": "If Qi > Ksp, the solution is supersaturated and precipitation occurs",
          "de": "Wenn Qi > Ksp, ist die Lösung übersättigt und es kommt zur Fällung",
          "fr": "Si Qi > Ksp, la solution est sursaturée et un précipité se forme",
          "ru": "Если Qi > Ksp, раствор пересыщен и выпадает осадок",
          "ar": "إذا كان Qi > Ksp يكون المحلول فوق مشبع ويحدث الترسيب",
          "zh": "若Qi > Ksp，溶液过饱和，发生沉淀",
          "ku": "Ger Qi > Ksp be, çareserî ji têrbûnê zêdetir e û niştin çêdibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u20-twin01",
      "stem": {
        "tr": "Belirli bir sıcaklıkta AgCl katısının çözünürlük çarpımı Kçç = 1,0x10^-10 dur. Buna göre AgCl nin saf sudaki çözünürlüğü kaç mol/L dir?",
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
          "tr": "1,0x10^-5 M",
          "en": "1.0x10^-5 M",
          "de": "1,0x10^-5 M",
          "fr": "1,0x10^-5 M",
          "ru": "1,0x10^-5 М",
          "ar": "1.0x10^-5 م",
          "zh": "1.0x10^-5 M",
          "ku": "1.0x10^-5 M"
        },
        {
          "tr": "1,0x10^-10 M",
          "en": "1.0x10^-10 M",
          "de": "1,0x10^-10 M",
          "fr": "1,0x10^-10 M",
          "ru": "1,0x10^-10 М",
          "ar": "1.0x10^-10 م",
          "zh": "1.0x10^-10 M",
          "ku": "1.0x10^-10 M"
        },
        {
          "tr": "2,0x10^-5 M",
          "en": "2.0x10^-5 M",
          "de": "2,0x10^-5 M",
          "fr": "2,0x10^-5 M",
          "ru": "2,0x10^-5 М",
          "ar": "2.0x10^-5 م",
          "zh": "2.0x10^-5 M",
          "ku": "2.0x10^-5 M"
        },
        {
          "tr": "1,0x10^-20 M",
          "en": "1.0x10^-20 M",
          "de": "1,0x10^-20 M",
          "fr": "1,0x10^-20 M",
          "ru": "1,0x10^-20 М",
          "ar": "1.0x10^-20 م",
          "zh": "1.0x10^-20 M",
          "ku": "1.0x10^-20 M"
        },
        {
          "tr": "5,0x10^-6 M",
          "en": "5.0x10^-6 M",
          "de": "5,0x10^-6 M",
          "fr": "5,0x10^-6 M",
          "ru": "5,0x10^-6 М",
          "ar": "5.0x10^-6 م",
          "zh": "5.0x10^-6 M",
          "ku": "5.0x10^-6 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "AgCl ⇌ Ag+ + Cl- -> Kçç = s^2 = 10^-10 -> s = sqrt(10^-10) = 1,0x10^-5 M.",
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
        "tr": "Belirli sıcaklıkta Kçç si 4,0x10^-12 olan XY2 tuzunun saf sudaki molar çözünürlüğü kaçtır?",
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
          "tr": "1,0x10^-4 M",
          "en": "1.0x10^-4 M",
          "de": "1,0x10^-4 M",
          "fr": "1,0x10^-4 M",
          "ru": "1,0x10^-4 М",
          "ar": "1.0x10^-4 م",
          "zh": "1.0x10^-4 M",
          "ku": "1.0x10^-4 M"
        },
        {
          "tr": "2,0x10^-6 M",
          "en": "2.0x10^-6 M",
          "de": "2,0x10^-6 M",
          "fr": "2,0x10^-6 M",
          "ru": "2,0x10^-6 М",
          "ar": "2.0x10^-6 م",
          "zh": "2.0x10^-6 M",
          "ku": "2.0x10^-6 M"
        },
        {
          "tr": "1,0x10^-6 M",
          "en": "1.0x10^-6 M",
          "de": "1,0x10^-6 M",
          "fr": "1,0x10^-6 M",
          "ru": "1,0x10^-6 М",
          "ar": "1.0x10^-6 م",
          "zh": "1.0x10^-6 M",
          "ku": "1.0x10^-6 M"
        },
        {
          "tr": "4,0x10^-4 M",
          "en": "4.0x10^-4 M",
          "de": "4,0x10^-4 M",
          "fr": "4,0x10^-4 M",
          "ru": "4,0x10^-4 М",
          "ar": "4.0x10^-4 م",
          "zh": "4.0x10^-4 M",
          "ku": "4.0x10^-4 M"
        },
        {
          "tr": "2,0x10^-4 M",
          "en": "2.0x10^-4 M",
          "de": "2,0x10^-4 M",
          "fr": "2,0x10^-4 M",
          "ru": "2,0x10^-4 М",
          "ar": "2.0x10^-4 م",
          "zh": "2.0x10^-4 M",
          "ku": "2.0x10^-4 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "XY2 ⇌ X2+ + 2 Y- -> Kçç = s * (2s)^2 = 4s^3 = 4,0x10^-12 -> s^3 = 10^-12 -> s = 1,0x10^-4 M.",
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
        "tr": "Kimya dersinde Çözünürlük Dengesi (Kçç) ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Solubility Product (Ksp), which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Löslichkeitsprodukt: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Produit de Solubilité, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Произведение растворимости», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حاصل الإذابة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“溶度积”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Çareserbûnê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "同离子增加了盐的溶解度。",
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
          "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
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
        "tr": "Aşağıdakilerden hangisi Çözünürlük Dengesi (Kçç) konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Solubility Product (Ksp)?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Löslichkeitsprodukt zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Produit de Solubilité ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Произведение растворимости»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"حاصل الإذابة\"؟",
        "zh": "根据“溶度积”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Çareserbûnê\" de rast e?"
      },
      "options": [
        {
          "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
          "en": "When Qi < Ksp, precipitation occurs.",
          "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
          "fr": "Lorsque Qi < Ksp, un précipité se forme.",
          "ru": "Когда Qi < Ksp, выпадает осадок.",
          "ar": "عندما يكون Qi < Ksp يحدث ترسيب.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp be, nişte çêdibe."
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
          "tr": "Aynı tipteki tuzlardan Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "Among salts of the same type, the salt with the larger Ksp precipitates from the solution first.",
          "de": "Von gleichartigen Salzen fällt das Salz mit dem größeren Ksp zuerst aus der Lösung aus.",
          "fr": "Parmi des sels du même type, celui dont le Ksp est le plus grand précipite en premier.",
          "ru": "Из солей одного типа первой из раствора осаждается соль с бо́льшим Ksp.",
          "ar": "من بين الأملاح من النوع نفسه، يترسب أولًا الملح ذو Ksp الأكبر.",
          "zh": "在同类型的盐中，Ksp较大的盐先从溶液中沉淀出来。",
          "ku": "Di nav xwêyên ji heman tîpê de, xwêya ku Ksp wê mezintir e pêşî ji çareseriyê dinişe."
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
          "ar": "يؤدي تكوين المعقد إلى ترسيب الملح فورًا.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina kompleksê xwê tavilê dinişîne."
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
        "tr": "Üniversiteye giriş sınavı Çözünürlük Dengesi (Kçç) sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Solubility Product (Ksp), which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Löslichkeitsprodukt: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Produit de Solubilité, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Произведение растворимости», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حاصل الإذابة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“溶度积”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Çareserbûnê\" de, kîjan daraz rast e?"
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
          "ku": "Dema Qi = Ksp be, çareserî ne têr e û xwê dinişe."
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
          "en": "Ksp refers to the concentration of highly soluble salts.",
          "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
          "ru": "Ksp относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Ksp 是指高溶解盐的浓度。",
          "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
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
        "tr": "Aşağıda Çözünürlük Dengesi (Kçç) ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Solubility Product (Ksp), which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Löslichkeitsprodukt: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Produit de Solubilité, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Произведение растворимости», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حاصل الإذابة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“溶度积”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.",
          "en": "Common ion effect: The presence of common ions in the solution shifts the equilibrium to the reactants and reduces the solubility, as per Le Chatelier.",
          "de": "Gemeinsamer Ioneneffekt: Das Vorhandensein gemeinsamer Ionen in der Lösung verschiebt das Gleichgewicht zu den Reaktanten und verringert die Löslichkeit, so Le Chatelier.",
          "fr": "Effet des ions communs : La présence d'ions communs dans la solution déplace l'équilibre vers les réactifs et réduit la solubilité, selon Le Chatelier.",
          "ru": "Эффект общего иона: присутствие общих ионов в растворе смещает равновесие в сторону реагентов и снижает растворимость, согласно Ле Шателье.",
          "ar": "تأثير الأيونات المشتركة: يؤدي وجود الأيونات المشتركة في المحلول إلى تحويل التوازن إلى المواد المتفاعلة وتقليل قابلية الذوبان، وفقًا لـ Le Chatelier.",
          "zh": "同离子效应：根据 Le Chatelier 的说法，溶液中同离子的存在会将平衡转移到反应物并降低溶解度。",
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
          "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
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
          "zh": "当添加同离子时，Ksp值变小。",
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
        "zh": "正确表述为：“同离子效应：根据 Le Chatelier 的说法，溶液中同离子的存在会将平衡转移到反应物并降低溶解度。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin07",
      "stem": {
        "tr": "Çözünürlük Dengesi (Kçç) konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Solubility Product (Ksp), which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Löslichkeitsprodukt: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Produit de Solubilité, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Произведение растворимости», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"حاصل الإذابة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“溶度积”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Çareserbûnê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
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
          "en": "Ion product Qi: if Qi > Ksp, the solution is supersaturated and precipitation occurs.",
          "de": "Ionenprodukt Qi: Wenn Qi > Ksp, ist die Lösung übersättigt und es kommt zur Fällung.",
          "fr": "Produit ionique Qi : si Qi > Ksp, la solution est sursaturée et un précipité se forme.",
          "ru": "Ионное произведение Qi: если Qi > Ksp, раствор пересыщен и выпадает осадок.",
          "ar": "الحاصل الأيوني Qi: إذا كان Qi > Ksp يكون المحلول فوق مشبع ويحدث ترسيب.",
          "zh": "离子积Qi：若Qi > Ksp，溶液过饱和，产生沉淀。",
          "ku": "Hevdana îyonan Qi: ger Qi > Ksp be, çareserî ji têrbûnê zêdetir e û nişte çêdibe."
        },
        {
          "tr": "Aynı tipteki tuzlardan Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "Among salts of the same type, the salt with the larger Ksp precipitates from the solution first.",
          "de": "Von gleichartigen Salzen fällt das Salz mit dem größeren Ksp zuerst aus der Lösung aus.",
          "fr": "Parmi des sels du même type, celui dont le Ksp est le plus grand précipite en premier.",
          "ru": "Из солей одного типа первой из раствора осаждается соль с бо́льшим Ksp.",
          "ar": "من بين الأملاح من النوع نفسه، يترسب أولًا الملح ذو Ksp الأكبر.",
          "zh": "在同类型的盐中，Ksp较大的盐先从溶液中沉淀出来。",
          "ku": "Di nav xwêyên ji heman tîpê de, xwêya ku Ksp wê mezintir e pêşî ji çareseriyê dinişe."
        },
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي تكوين المعقد إلى ترسيب الملح فورًا.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina kompleksê xwê tavilê dinişîne."
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
        "en": "The correct statement is: \"Ion product Qi: if Qi > Ksp, the solution is supersaturated and precipitation occurs.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ionenprodukt Qi: Wenn Qi > Ksp, ist die Lösung übersättigt und es kommt zur Fällung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Produit ionique Qi : si Qi > Ksp, la solution est sursaturée et un précipité se forme.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ионное произведение Qi: если Qi > Ksp, раствор пересыщен и выпадает осадок.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الحاصل الأيوني Qi: إذا كان Qi > Ksp يكون المحلول فوق مشبع ويحدث ترسيب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“离子积Qi：若Qi > Ksp，溶液过饱和，产生沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hevdana îyonan Qi: ger Qi > Ksp be, çareserî ji têrbûnê zêdetir e û nişte çêdibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Çözünürlük Dengesi (Kçç) ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Solubility Product (Ksp), which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Löslichkeitsprodukt: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Produit de Solubilité, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Произведение растворимости», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حاصل الإذابة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶度积”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin li ser vê beşê bê guman rast e?"
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
          "en": "If Qi = Ksp, the solution is fully saturated and there is no precipitation; If Qi < Ksp, the solution is unsaturated.",
          "de": "Wenn Qi = Ksp, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Ksp, ist die Lösung ungesättigt.",
          "fr": "Si Qi = Ksp, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Ksp, la solution est insaturée.",
          "ru": "Если Qi = Ksp, раствор насыщен и осадок не выпадает; если Qi < Ksp, раствор ненасыщенный.",
          "ar": "إذا كان Qi = Ksp يكون المحلول مشبعًا تمامًا ولا يحدث ترسيب؛ وإذا كان Qi < Ksp فالمحلول غير مشبع.",
          "zh": "若Qi=Ksp，则溶液完全饱和，无沉淀；如果 Qi < Ksp，则溶液不饱和。",
          "ku": "Ger Qi = Ksp be, çareserî tam têr e û nişte çênabe; ger Qi < Ksp be, çareserî ne têr e."
        },
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Ksp refers to the concentration of highly soluble salts.",
          "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
          "ru": "Ksp относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Ksp 是指高溶解盐的浓度。",
          "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
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
        "en": "The correct statement is: \"If Qi = Ksp, the solution is fully saturated and there is no precipitation; If Qi < Ksp, the solution is unsaturated.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Qi = Ksp, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Ksp, ist die Lösung ungesättigt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si Qi = Ksp, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Ksp, la solution est insaturée.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если Qi = Ksp, раствор насыщен и осадок не выпадает; если Qi < Ksp, раствор ненасыщенный.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كان Qi = Ksp يكون المحلول مشبعًا تمامًا ولا يحدث ترسيب؛ وإذا كان Qi < Ksp فالمحلول غير مشبع.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“若Qi=Ksp，则溶液完全饱和，无沉淀；如果 Qi < Ksp，则溶液不饱和。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger Qi = Ksp be, çareserî tam têr e û nişte çênabe; ger Qi < Ksp be, çareserî ne têr e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Çözünürlük Dengesi (Kçç) konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Solubility Product (Ksp), which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Löslichkeitsprodukt die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Produit de Solubilité, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Произведение растворимости», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"حاصل الإذابة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“溶度积”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Çareserbûnê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
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
          "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
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
          "zh": "当添加同离子时，Ksp值变小。",
          "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
        },
        {
          "tr": "AgCl katısının saf sudaki çözünürlüğü, 0,1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.",
          "en": "The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.",
          "de": "Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.",
          "fr": "La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.",
          "ru": "Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.",
          "ar": "إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.",
          "zh": "AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。",
          "ku": "Helbûna AgCl ya hişk di ava saf de ji helbûna wê di çareseriya 0,1 M NaCl de PIR MEZINTIR e."
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
        "tr": "Doğru cevap \"AgCl katısının saf sudaki çözünürlüğü, 0,1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость твердого вещества AgCl в чистой воде НАМНОГО БОЛЬШЕ, чем его растворимость в 0,1 М растворе NaCl.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Helbûna AgCl ya hişk di ava saf de ji helbûna wê di çareseriya 0,1 M NaCl de PIR MEZINTIR e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin10",
      "stem": {
        "tr": "Kimya dersinde Çözünürlük Dengesi (Kçç) ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Solubility Product (Ksp), which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Löslichkeitsprodukt: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Produit de Solubilité, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Произведение растворимости», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حاصل الإذابة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“溶度积”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Çareserbûnê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Aynı tipteki tuzlardan Kçç si büyük olan tuz çözeltiden ilk önce çöker.",
          "en": "Among salts of the same type, the salt with the larger Ksp precipitates from the solution first.",
          "de": "Von gleichartigen Salzen fällt das Salz mit dem größeren Ksp zuerst aus der Lösung aus.",
          "fr": "Parmi des sels du même type, celui dont le Ksp est le plus grand précipite en premier.",
          "ru": "Из солей одного типа первой из раствора осаждается соль с бо́льшим Ksp.",
          "ar": "من بين الأملاح من النوع نفسه، يترسب أولًا الملح ذو Ksp الأكبر.",
          "zh": "在同类型的盐中，Ksp较大的盐先从溶液中沉淀出来。",
          "ku": "Di nav xwêyên ji heman tîpê de, xwêya ku Ksp wê mezintir e pêşî ji çareseriyê dinişe."
        },
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي تكوين المعقد إلى ترسيب الملح فورًا.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina kompleksê xwê tavilê dinişîne."
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
          "zh": "同离子增加了盐的溶解度。",
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
        "tr": "Aşağıdakilerden hangisi Çözünürlük Dengesi (Kçç) konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Solubility Product (Ksp)?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Löslichkeitsprodukt zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Produit de Solubilité ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Произведение растворимости»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"حاصل الإذابة\"؟",
        "zh": "根据“溶度积”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Çareserbûnê\" de rast e?"
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
          "en": "Ksp refers to the concentration of highly soluble salts.",
          "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
          "ru": "Ksp относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Ksp 是指高溶解盐的浓度。",
          "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
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
          "fr": "Lorsque Qi < Ksp, un précipité se forme.",
          "ru": "Когда Qi < Ksp, выпадает осадок.",
          "ar": "عندما يكون Qi < Ksp يحدث ترسيب.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp be, nişte çêdibe."
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
        "tr": "Üniversiteye giriş sınavı Çözünürlük Dengesi (Kçç) sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Solubility Product (Ksp), which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Löslichkeitsprodukt: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Produit de Solubilité, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Произведение растворимости», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حاصل الإذابة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“溶度积”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Çareserbûnê\" de, kîjan daraz rast e?"
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
          "tr": "Dipte katısı bulunan doymuş çözeltiye aynı sıcaklıkta su eklenirse dipteki katının bir kısmı çözünür; dipte katı kaldığı sürece iyon derişimleri ve Kçç değişmez.",
          "en": "If water is added at the same temperature to a saturated solution with solid at the bottom, part of the solid dissolves; as long as some solid remains, the ion concentrations and Ksp do not change.",
          "de": "Wird einer gesättigten Lösung mit Bodenkörper bei gleicher Temperatur Wasser zugesetzt, löst sich ein Teil des Bodenkörpers; solange Bodenkörper vorhanden bleibt, ändern sich die Ionenkonzentrationen und Ksp nicht.",
          "fr": "Si l'on ajoute de l'eau à même température à une solution saturée contenant un dépôt solide, une partie du solide se dissout ; tant qu'il reste du solide, les concentrations des ions et Ksp ne changent pas.",
          "ru": "Если к насыщенному раствору с осадком на дне добавить воду при той же температуре, часть осадка растворится; пока осадок остаётся, концентрации ионов и Ksp не изменяются.",
          "ar": "إذا أُضيف الماء عند درجة الحرارة نفسها إلى محلول مشبع في قاعه مادة صلبة، يذوب جزء من الصلب؛ وما دام بعض الصلب باقيًا فلا تتغير تراكيز الأيونات ولا Ksp.",
          "zh": "在同一温度下向底部有固体的饱和溶液中加水，部分固体溶解；只要仍有固体剩余，离子浓度和Ksp都不变。",
          "ku": "Ger di heman germahiyê de av li çareseriya têr a ku li binê wê hişk heye were zêdekirin, beşek ji hişkê dihele; heta ku hişk bimîne, tîrbûna îyonan û Ksp naguherin."
        },
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加同离子时，Ksp值变小。",
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
          "ku": "Dema Qi = Ksp be, çareserî ne têr e û xwê dinişe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Dipte katısı bulunan doymuş çözeltiye aynı sıcaklıkta su eklenirse dipteki katının bir kısmı çözünür; dipte katı kaldığı sürece iyon derişimleri ve Kçç değişmez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If water is added at the same temperature to a saturated solution with solid at the bottom, part of the solid dissolves; as long as some solid remains, the ion concentrations and Ksp do not change.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird einer gesättigten Lösung mit Bodenkörper bei gleicher Temperatur Wasser zugesetzt, löst sich ein Teil des Bodenkörpers; solange Bodenkörper vorhanden bleibt, ändern sich die Ionenkonzentrationen und Ksp nicht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'on ajoute de l'eau à même température à une solution saturée contenant un dépôt solide, une partie du solide se dissout ; tant qu'il reste du solide, les concentrations des ions et Ksp ne changent pas.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если к насыщенному раствору с осадком на дне добавить воду при той же температуре, часть осадка растворится; пока осадок остаётся, концентрации ионов и Ksp не изменяются.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا أُضيف الماء عند درجة الحرارة نفسها إلى محلول مشبع في قاعه مادة صلبة، يذوب جزء من الصلب؛ وما دام بعض الصلب باقيًا فلا تتغير تراكيز الأيونات ولا Ksp.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在同一温度下向底部有固体的饱和溶液中加水，部分固体溶解；只要仍有固体剩余，离子浓度和Ksp都不变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger di heman germahiyê de av li çareseriya têr a ku li binê wê hişk heye were zêdekirin, beşek ji hişkê dihele; heta ku hişk bimîne, tîrbûna îyonan û Ksp naguherin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin13",
      "stem": {
        "tr": "Aşağıda Çözünürlük Dengesi (Kçç) ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Solubility Product (Ksp), which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Löslichkeitsprodukt: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Produit de Solubilité, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Произведение растворимости», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حاصل الإذابة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“溶度积”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kompleks oluşumu tuzu hemen çöktürür.",
          "en": "Complex formation precipitates the salt immediately.",
          "de": "Durch die Komplexbildung fällt das Salz sofort aus.",
          "fr": "La formation de complexes précipite le sel immédiatement.",
          "ru": "При образовании комплекса соль немедленно осаждается.",
          "ar": "يؤدي تكوين المعقد إلى ترسيب الملح فورًا.",
          "zh": "络合物的形成使盐立即沉淀。",
          "ku": "Pêkhatina kompleksê xwê tavilê dinişîne."
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
          "tr": "Seçimli çöktürme: Aynı tipteki (ör. AgCl ve AgBr gibi XY) tuzların iyonlarını eşit derişimde içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.",
          "en": "Selective precipitation: when a precipitating agent is added to a solution containing equal concentrations of the ions of salts of the same type (e.g. XY salts such as AgCl and AgBr), the one with the smaller Ksp (less soluble) precipitates first.",
          "de": "Selektive Fällung: Wird einer Lösung, die die Ionen gleichartiger Salze (z. B. XY-Salze wie AgCl und AgBr) in gleicher Konzentration enthält, ein Fällungsmittel zugesetzt, fällt das Salz mit dem kleineren Ksp (schwerer löslich) zuerst aus.",
          "fr": "Précipitation sélective : lorsqu'on ajoute un agent précipitant à une solution contenant, à concentrations égales, les ions de sels du même type (ex. sels XY comme AgCl et AgBr), celui dont le Ksp est le plus petit (le moins soluble) précipite en premier.",
          "ru": "Селективное осаждение: при добавлении осадителя к раствору, содержащему в равных концентрациях ионы солей одного типа (напр., солей XY, таких как AgCl и AgBr), первой осаждается соль с меньшим Ksp (менее растворимая).",
          "ar": "الترسيب الانتقائي: عند إضافة عامل مرسِّب إلى محلول يحتوي بتراكيز متساوية على أيونات أملاح من النوع نفسه (مثل أملاح XY كـ AgCl و AgBr)، يترسب أولًا الملح ذو Ksp الأصغر (الأقل ذوبانًا).",
          "zh": "选择性沉淀：向含有等浓度同类型盐（如AgCl和AgBr这类XY型盐）离子的溶液中加入沉淀剂时，Ksp较小（溶解度较小）的先沉淀。",
          "ku": "Niştina hilbijartî: dema ku madeyeke nişteker li çareseriyeke ku îyonên xwêyên ji heman tîpê (mînak xwêyên XY wekî AgCl û AgBr) bi tîrbûna wekhev dihewîne tê zêdekirin, ya ku Ksp wê piçûktir e (kêmtir dihele) pêşî dinişe."
        },
        {
          "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
          "en": "The common ion increases the solubility of the salt.",
          "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
          "fr": "L'ion commun augmente la solubilité du sel.",
          "ru": "Общий ион увеличивает растворимость соли.",
          "ar": "الأيون المشترك يزيد من ذوبان الملح.",
          "zh": "同离子增加了盐的溶解度。",
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
        "tr": "Doğru cevap \"Seçimli çöktürme: Aynı tipteki (ör. AgCl ve AgBr gibi XY) tuzların iyonlarını eşit derişimde içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Selective precipitation: when a precipitating agent is added to a solution containing equal concentrations of the ions of salts of the same type (e.g. XY salts such as AgCl and AgBr), the one with the smaller Ksp (less soluble) precipitates first.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Selektive Fällung: Wird einer Lösung, die die Ionen gleichartiger Salze (z. B. XY-Salze wie AgCl und AgBr) in gleicher Konzentration enthält, ein Fällungsmittel zugesetzt, fällt das Salz mit dem kleineren Ksp (schwerer löslich) zuerst aus.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Précipitation sélective : lorsqu'on ajoute un agent précipitant à une solution contenant, à concentrations égales, les ions de sels du même type (ex. sels XY comme AgCl et AgBr), celui dont le Ksp est le plus petit (le moins soluble) précipite en premier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Селективное осаждение: при добавлении осадителя к раствору, содержащему в равных концентрациях ионы солей одного типа (напр., солей XY, таких как AgCl и AgBr), первой осаждается соль с меньшим Ksp (менее растворимая).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الترسيب الانتقائي: عند إضافة عامل مرسِّب إلى محلول يحتوي بتراكيز متساوية على أيونات أملاح من النوع نفسه (مثل أملاح XY كـ AgCl و AgBr)، يترسب أولًا الملح ذو Ksp الأصغر (الأقل ذوبانًا).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“选择性沉淀：向含有等浓度同类型盐（如AgCl和AgBr这类XY型盐）离子的溶液中加入沉淀剂时，Ksp较小（溶解度较小）的先沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Niştina hilbijartî: dema ku madeyeke nişteker li çareseriyeke ku îyonên xwêyên ji heman tîpê (mînak xwêyên XY wekî AgCl û AgBr) bi tîrbûna wekhev dihewîne tê zêdekirin, ya ku Ksp wê piçûktir e (kêmtir dihele) pêşî dinişe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin14",
      "stem": {
        "tr": "Çözünürlük Dengesi (Kçç) konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Solubility Product (Ksp), which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Löslichkeitsprodukt: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Produit de Solubilité, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Произведение растворимости», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"حاصل الإذابة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“溶度积”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Çareserbûnê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
          "en": "Ksp refers to the concentration of highly soluble salts.",
          "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
          "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
          "ru": "Ksp относится к концентрации хорошо растворимых солей.",
          "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
          "zh": "Ksp 是指高溶解盐的浓度。",
          "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
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
          "fr": "Lorsque Qi < Ksp, un précipité se forme.",
          "ru": "Когда Qi < Ksp, выпадает осадок.",
          "ar": "عندما يكون Qi < Ksp يحدث ترسيب.",
          "zh": "当 Qi < Ksp 时，发生沉淀。",
          "ku": "Dema Qi < Ksp be, nişte çêdibe."
        },
        {
          "tr": "Mağaralardaki sarkıt ve dikitler ile Pamukkale travertenleri, CaCO3'ün çözünme-çökelme dengesiyle oluşur.",
          "en": "Stalactites and stalagmites in caves and the travertines of Pamukkale form through the dissolution-precipitation equilibrium of CaCO3.",
          "de": "Stalaktiten und Stalagmiten in Höhlen sowie die Travertinterrassen von Pamukkale entstehen durch das Lösungs-Fällungs-Gleichgewicht von CaCO3.",
          "fr": "Les stalactites et stalagmites des grottes ainsi que les travertins de Pamukkale se forment grâce à l’équilibre de dissolution-précipitation de CaCO3.",
          "ru": "Сталактиты и сталагмиты в пещерах, а также травертины Памуккале образуются благодаря равновесию растворения-осаждения CaCO3.",
          "ar": "تتكوّن الهوابط والصواعد في الكهوف وترافرتينات باموكالي من خلال اتزان الذوبان-الترسيب لـ CaCO3.",
          "zh": "洞穴中的钟乳石、石笋以及棉花堡的石灰华，都是由CaCO3的溶解-沉淀平衡形成的。",
          "ku": "Stalaktît û stalagmîtên di şikeftan de û travertenên Pamukkaleyê bi hevsengiya helîn-niştinê ya CaCO3 çêdibin."
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
        "tr": "Doğru cevap \"Mağaralardaki sarkıt ve dikitler ile Pamukkale travertenleri, CaCO3'ün çözünme-çökelme dengesiyle oluşur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Stalactites and stalagmites in caves and the travertines of Pamukkale form through the dissolution-precipitation equilibrium of CaCO3.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Stalaktiten und Stalagmiten in Höhlen sowie die Travertinterrassen von Pamukkale entstehen durch das Lösungs-Fällungs-Gleichgewicht von CaCO3.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les stalactites et stalagmites des grottes ainsi que les travertins de Pamukkale se forment grâce à l’équilibre de dissolution-précipitation de CaCO3.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Сталактиты и сталагмиты в пещерах, а также травертины Памуккале образуются благодаря равновесию растворения-осаждения CaCO3.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتكوّن الهوابط والصواعد في الكهوف وترافرتينات باموكالي من خلال اتزان الذوبان-الترسيب لـ CaCO3.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“洞穴中的钟乳石、石笋以及棉花堡的石灰华，都是由CaCO3的溶解-沉淀平衡形成的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Stalaktît û stalagmîtên di şikeftan de û travertenên Pamukkaleyê bi hevsengiya helîn-niştinê ya CaCO3 çêdibin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Çözünürlük Dengesi (Kçç) ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Solubility Product (Ksp), which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Löslichkeitsprodukt: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Produit de Solubilité, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Произведение растворимости», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حاصل الإذابة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“溶度积”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Çareserbûnê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
          "en": "When the common ion is added, the Ksp value becomes smaller.",
          "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
          "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
          "ru": "При добавлении общего иона значение Ksp становится меньше.",
          "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
          "zh": "当添加同离子时，Ksp值变小。",
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
          "ku": "Dema Qi = Ksp be, çareserî ne têr e û xwê dinişe."
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
          "tr": "Az çözünen bazların (ör. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.",
          "en": "The solubility of sparingly soluble bases (e.g. Mg(OH)2) increases in an acidic medium because H+ ions neutralize OH- ions, shifting the equilibrium to the right.",
          "de": "Die Löslichkeit schwerlöslicher Basen (z. B. Mg(OH)2) nimmt in saurem Milieu zu, weil H+-Ionen die OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschieben.",
          "fr": "La solubilité des bases peu solubles (ex. Mg(OH)2) augmente en milieu acide car les ions H+ neutralisent les ions OH-, ce qui déplace l’équilibre vers la droite.",
          "ru": "Растворимость малорастворимых оснований (напр., Mg(OH)2) в кислой среде увеличивается, так как ионы H+ нейтрализуют ионы OH- и смещают равновесие вправо.",
          "ar": "تزداد ذوبانية القواعد قليلة الذوبان (مثل Mg(OH)2) في الوسط الحمضي لأن أيونات H+ تعادل أيونات OH- فينزاح الاتزان نحو اليمين.",
          "zh": "难溶碱（如Mg(OH)2）在酸性介质中的溶解度增大，因为H+中和OH-，使平衡向右移动。",
          "ku": "Helbûna bazên kêm-helbar (mînak Mg(OH)2) di navgîna asîdî de zêde dibe, ji ber ku îyonên H+ îyonên OH- bêbandor dikin û hevsengiyê ber bi rastê ve dibin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Az çözünen bazların (ör. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of sparingly soluble bases (e.g. Mg(OH)2) increases in an acidic medium because H+ ions neutralize OH- ions, shifting the equilibrium to the right.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit schwerlöslicher Basen (z. B. Mg(OH)2) nimmt in saurem Milieu zu, weil H+-Ionen die OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschieben.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité des bases peu solubles (ex. Mg(OH)2) augmente en milieu acide car les ions H+ neutralisent les ions OH-, ce qui déplace l’équilibre vers la droite.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость малорастворимых оснований (напр., Mg(OH)2) в кислой среде увеличивается, так как ионы H+ нейтрализуют ионы OH- и смещают равновесие вправо.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تزداد ذوبانية القواعد قليلة الذوبان (مثل Mg(OH)2) في الوسط الحمضي لأن أيونات H+ تعادل أيونات OH- فينزاح الاتزان نحو اليمين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“难溶碱（如Mg(OH)2）在酸性介质中的溶解度增大，因为H+中和OH-，使平衡向右移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Helbûna bazên kêm-helbar (mînak Mg(OH)2) di navgîna asîdî de zêde dibe, ji ber ku îyonên H+ îyonên OH- bêbandor dikin û hevsengiyê ber bi rastê ve dibin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u20-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Çözünürlük Dengesi (Kçç) konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Solubility Product (Ksp), which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Löslichkeitsprodukt die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Produit de Solubilité, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Произведение растворимости», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"حاصل الإذابة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“溶度积”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Çareserbûnê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).",
          "en": "Complexation may increase the solubility of poorly soluble salts (e.g. dissolution of AgCl in NH3 medium).",
          "de": "Die Komplexierung kann die Löslichkeit schwerlöslicher Salze erhöhen (z. B. Auflösung von AgCl in NH3-Medium).",
          "fr": "La complexation peut augmenter la solubilité des sels peu solubles (par exemple dissolution d'AgCl dans un milieu NH3).",
          "ru": "Комплексообразование может повысить растворимость плохо растворимых солей (например, растворение AgCl в среде NH3).",
          "ar": "قد يزيد تكوين الأيونات المعقدة من ذوبانية الأملاح قليلة الذوبان (مثل ذوبان AgCl في وسط يحتوي NH3).",
          "zh": "络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。",
          "ku": "Pêkhatina îyonên kompleks dikare helbûna xwêyên kêm-helbar zêde bike (mînak helîna AgCl di navgîna NH3 de)."
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
          "zh": "同离子增加了盐的溶解度。",
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
          "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Complexation may increase the solubility of poorly soluble salts (e.g. dissolution of AgCl in NH3 medium).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Komplexierung kann die Löslichkeit schwerlöslicher Salze erhöhen (z. B. Auflösung von AgCl in NH3-Medium).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La complexation peut augmenter la solubilité des sels peu solubles (par exemple dissolution d'AgCl dans un milieu NH3).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Комплексообразование может повысить растворимость плохо растворимых солей (например, растворение AgCl в среде NH3).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قد يزيد تكوين الأيونات المعقدة من ذوبانية الأملاح قليلة الذوبان (مثل ذوبان AgCl في وسط يحتوي NH3).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“络合可能会增加难溶盐的溶解度（例如 AgCl 在 NH3 介质中的溶解）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pêkhatina îyonên kompleks dikare helbûna xwêyên kêm-helbar zêde bike (mînak helîna AgCl di navgîna NH3 de).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit20;
