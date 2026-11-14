import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit04: ChemistryUnitSeedData = {
  "id": "u04",
  "order": 4,
  "exam": "TYT",
  "grade": 9,
  "title": {
    "tr": "Maddenin Halleri",
    "en": "States of Matter",
    "de": "Aggregatzustände",
    "fr": "États de la Matière",
    "ru": "Агрегатные состояния вещества",
    "ar": "حالات المادة",
    "zh": "物态",
    "ku": "Rewşên Madeyê"
  },
  "subtitle": {
    "tr": "Katılar, Sıvılar, Buhar Basıncı ve Viskozite",
    "en": "Solids, Liquids, Vapor Pressure",
    "de": "Feststoffe, Flüssigkeiten, Dampfdruck und Viskosität",
    "fr": "Solides, liquides, pression de vapeur et viscosité",
    "ru": "Твердые вещества, жидкости, давление паров и вязкость",
    "ar": "المواد الصلبة والسوائل وضغط البخار واللزوجة",
    "zh": "固体、液体、蒸气压和粘度",
    "ku": "Solids, Liquids, Vapor Pressure and Viskozity"
  },
  "facts": [
    {
      "id": "u04-f01",
      "fact": {
        "tr": "Denge buhar basıncı sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınca ve yüzey alanına bağlı DEĞİLDİR.",
        "en": "Equilibrium vapor pressure depends on the type, purity and temperature of the liquid; It does NOT depend on external pressure and surface area.",
        "de": "Der Gleichgewichtsdampfdruck hängt von der Art, Reinheit und Temperatur der Flüssigkeit ab; Es hängt NICHT vom äußeren Druck und der Oberfläche ab.",
        "fr": "La pression de vapeur à l'équilibre dépend du type, de la pureté et de la température du liquide ; Cela ne dépend PAS de la pression externe et de la surface.",
        "ru": "Равновесное давление пара зависит от типа, чистоты и температуры жидкости; Оно НЕ зависит от внешнего давления и площади поверхности.",
        "ar": "ويعتمد ضغط البخار المتوازن على نوع السائل ونقائه ودرجة حرارته؛ لا يعتمد على الضغط الخارجي ومساحة السطح.",
        "zh": "平衡蒸气压取决于液体的类型、纯度和温度；它不依赖于外部压力和表面积。",
        "ku": "Zexta buharê ya hevsengiyê bi celeb, paqijî û germahiya şilê ve girêdayî ye; Ew bi zexta derveyî û qada rûxê ve girêdayî NE."
      },
      "trap": {
        "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
        "en": "Equilibrium vapor pressure increases as the external atmospheric pressure increases.",
        "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
        "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
        "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
        "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
        "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
        "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
      },
      "osymTip": {
        "tr": "ÖSYM tuzağı: Buhar basıncı dış basınca bağlı değildir!",
        "en": "ÖSYM trap: Vapor pressure does not depend on external pressure!",
        "de": "ÖSYM-Falle: Dampfdruck ist nicht vom Außendruck abhängig!",
        "fr": "Piège ÖSYM : La pression de vapeur ne dépend pas de la pression extérieure !",
        "ru": "Сифон ÖSYM: Давление пара не зависит от внешнего давления!",
        "ar": "مصيدة ÖSYM: ضغط البخار لا يعتمد على الضغط الخارجي!",
        "zh": "ÖSYM 疏水阀：蒸气压不依赖于外部压力！",
        "ku": "Xefika ÖSYM: Zexta vaporê bi zexta derve ve namîne!"
      }
    },
    {
      "id": "u04-f02",
      "fact": {
        "tr": "Kaynama olayı sıvının iç buhar basıncının dış atmosfer basıncına eşit olduğu anda gerçekleşir.",
        "en": "Boiling occurs when the internal vapor pressure of the liquid equals the external atmospheric pressure.",
        "de": "Sieden tritt auf, wenn der innere Dampfdruck der Flüssigkeit dem äußeren Atmosphärendruck entspricht.",
        "fr": "L'ébullition se produit lorsque la pression de vapeur interne du liquide est égale à la pression atmosphérique externe.",
        "ru": "Кипение происходит, когда внутреннее давление паров жидкости становится равным внешнему атмосферному давлению.",
        "ar": "يحدث الغليان عندما يكون ضغط البخار الداخلي للسائل مساوياً للضغط الجوي الخارجي.",
        "zh": "当液体的内部蒸气压等于外部大气压时，就会发生沸腾。",
        "ku": "Kelandin çêdibe dema ku tansiyona buhara navxweyî ya şilekê bi zexta atmosfera derve re bibe yek."
      },
      "trap": {
        "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
        "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
        "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
        "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
        "ru": "Кипение – это просто испарение, происходящее на поверхности жидкости.",
        "ar": "الغليان هو ببساطة التبخر الذي يحدث على سطح السائل.",
        "zh": "沸腾只是发生在液体表面的蒸发。",
        "ku": "Kelandîn bi tenê evaporasyon e ku li rûyê şilê çêdibe."
      }
    },
    {
      "id": "u04-f03",
      "fact": {
        "tr": "Sıvıların akmaya karşı gösterdiği dirence viskozite denir; sıcaklık arttıkça viskozite azalır.",
        "en": "The resistance of liquids to flow is called viscosity; As temperature increases, viscosity decreases.",
        "de": "Der Strömungswiderstand von Flüssigkeiten wird als Viskosität bezeichnet; Mit zunehmender Temperatur nimmt die Viskosität ab.",
        "fr": "La résistance des liquides à l’écoulement est appelée viscosité ; À mesure que la température augmente, la viscosité diminue.",
        "ru": "Сопротивление жидкостей течению называется вязкостью; С повышением температуры вязкость уменьшается.",
        "ar": "تسمى مقاومة السوائل للتدفق باللزوجة؛ مع زيادة درجة الحرارة، تنخفض اللزوجة.",
        "zh": "液体流动的阻力称为粘度；随着温度升高，粘度降低。",
        "ku": "Ji berxwedana şilekên li hember herikînê re viskosîte tê gotin; Her ku germahî zêde dibe, vîskozîtî kêm dibe."
      },
      "trap": {
        "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
        "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
        "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
        "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
        "ru": "С повышением температуры вязкость меда и глицерина увеличивается.",
        "ar": "مع ارتفاع درجة الحرارة، تزداد لزوجة العسل والجلسرين.",
        "zh": "随着温度升高，蜂蜜和甘油的粘度增加。",
        "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glycerin zêde dibe."
      }
    },
    {
      "id": "u04-f04",
      "fact": {
        "tr": "Cam, plastik, tereyağı ve lastik belirli bir erime noktası olmayan amorf katılardır.",
        "en": "Glass, plastic, butter and rubber are amorphous solids that do not have a specific melting point.",
        "de": "Glas, Kunststoff, Butter und Gummi sind amorphe Feststoffe, die keinen bestimmten Schmelzpunkt haben.",
        "fr": "Le verre, le plastique, le beurre et le caoutchouc sont des solides amorphes qui n'ont pas de point de fusion spécifique.",
        "ru": "Стекло, пластик, масло и резина представляют собой аморфные твердые вещества, не имеющие определенной температуры плавления.",
        "ar": "الزجاج والبلاستيك والزبدة والمطاط هي مواد صلبة غير متبلورة ليس لها نقطة انصهار محددة.",
        "zh": "玻璃、塑料、黄油和橡胶是无定形固体，没有特定的熔点。",
        "ku": "Cam, plastîk, rûn û gomûk madeyên amorf in ku xwedî xala helînê ya taybetî nînin."
      },
      "trap": {
        "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
        "en": "Glass has an ionic crystal structure and a sharp melting point.",
        "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
        "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
        "ru": "Стекло имеет ионно-кристаллическую структуру и резкую температуру плавления.",
        "ar": "يحتوي الزجاج على بنية بلورية أيونية ونقطة انصهار حادة.",
        "zh": "玻璃具有离子晶体结构和明确的熔点。",
        "ku": "Glass xwedan avahiyek krîstal a yonîkî û xalek helînê ya tûj e."
      }
    },
    {
      "id": "u04-f05",
      "fact": {
        "tr": "Elmas ve kuvars (SiO2), kovalent ağ örgülü kristal katılara örnektir.",
        "en": "Diamond and quartz (SiO2) are examples of covalent networked crystalline solids.",
        "de": "Diamant und Quarz (SiO2) sind Beispiele für kovalent vernetzte kristalline Feststoffe.",
        "fr": "Le diamant et le quartz (SiO2) sont des exemples de solides cristallins en réseau covalent.",
        "ru": "Алмаз и кварц (SiO2) являются примерами кристаллических твердых тел с ковалентной сеткой.",
        "ar": "يعتبر الماس والكوارتز (SiO2) من الأمثلة على المواد الصلبة البلورية الشبكية التساهمية.",
        "zh": "金刚石和石英 (SiO2) 是共价网络结晶固体的例子。",
        "ku": "Almas û quartz (SiO2) mînakên tîrêjên krîstal ên bi tora kovalentî ne."
      },
      "trap": {
        "tr": "Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.",
        "en": "Quartz is a molecular solid held together by van der Waals bonds.",
        "de": "Quarz ist ein molekularer Feststoff, der durch Van-der-Waals-Bindungen zusammengehalten wird.",
        "fr": "Le quartz est un solide moléculaire maintenu par des liaisons de Van der Waals.",
        "ru": "Кварц – это молекулярное твердое вещество, скрепленное ван-дер-ваальсовыми связями.",
        "ar": "الكوارتز عبارة عن مادة صلبة جزيئية متماسكة بواسطة روابط فان دير فالس.",
        "zh": "石英是一种通过范德华键结合在一起的分子固体。",
        "ku": "Quartz hişkek molekular e ku ji hêla girêkên van der Waals ve tê girtin."
      }
    },
    {
      "id": "u04-f06",
      "fact": {
        "tr": "Kuru buz (katı CO2) ve buz (katı H2O) moleküler kristal katılardır.",
        "en": "Dry ice (solid CO2) and ice (solid H2O) are molecular crystalline solids.",
        "de": "Trockeneis (festes CO2) und Eis (festes H2O) sind molekulare kristalline Feststoffe.",
        "fr": "La neige carbonique (CO2 solide) et la glace (H2O solide) sont des solides cristallins moléculaires.",
        "ru": "Сухой лед (твердый CO2) и лед (твердый H2O) представляют собой молекулярные кристаллические твердые вещества.",
        "ar": "الثلج الجاف (CO2 الصلب) والثلج (H2O الصلب) عبارة عن مواد صلبة بلورية جزيئية.",
        "zh": "干冰（固体CO2）和冰（固体H2O）是分子结晶固体。",
        "ku": "Qeşa hişk (CO2 hişk) û qeşa (H2O hişk) madeyên krîstal ên molekulî ne."
      },
      "trap": {
        "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
        "en": "Dry ice is a very hard crystal with a covalent network.",
        "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
        "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
        "ru": "Сухой лед — очень твердый кристалл с ковалентной сетью.",
        "ar": "الثلج الجاف عبارة عن بلورة صلبة للغاية ولها شبكة تساهمية.",
        "zh": "干冰是一种非常坚硬的晶体，具有共价网络。",
        "ku": "Qeşaya hişk krîstaleke pir hişk û bi tevneke kovalent e."
      }
    },
    {
      "id": "u04-f07",
      "fact": {
        "tr": "Yemek tuzu (NaCl) ve kireç taşı (CaCO3) iyonik kristal katılara örnektir.",
        "en": "Table salt (NaCl) and limestone (CaCO3) are examples of ionic crystalline solids.",
        "de": "Speisesalz (NaCl) und Kalkstein (CaCO3) sind Beispiele für ionische kristalline Feststoffe.",
        "fr": "Le sel de table (NaCl) et le calcaire (CaCO3) sont des exemples de solides cristallins ioniques.",
        "ru": "Поваренная соль (NaCl) и известняк (CaCO3) являются примерами ионных кристаллических твердых веществ.",
        "ar": "يعتبر ملح الطعام (NaCl) والحجر الجيري (CaCO3) من الأمثلة على المواد الصلبة البلورية الأيونية.",
        "zh": "食盐 (NaCl) 和石灰石 (CaCO3) 是离子结晶固体的例子。",
        "ku": "Xwêya sifrê (NaCl) û kevirê kilsin (CaCO3) mînakên hişk ên krîstal ên îyonî ne."
      },
      "trap": {
        "tr": "NaCl moleküler katı sınıfında yer alır.",
        "en": "NaCl is in the molecular solid class.",
        "de": "NaCl gehört zur Klasse der molekularen Feststoffe.",
        "fr": "NaCl appartient à la classe des solides moléculaires.",
        "ru": "NaCl относится к классу молекулярных твердых веществ.",
        "ar": "NaCl موجود في الطبقة الصلبة الجزيئية.",
        "zh": "氯化钠属于分子固体类。",
        "ku": "NaCl di çîna molekulê ya hişk de ye."
      }
    },
    {
      "id": "u04-f08",
      "fact": {
        "tr": "Demir, bakır ve altın metalik kristal sınıfındadır ve değerlik elektronları serbestçe hareket eder.",
        "en": "Iron, copper and gold are in the metallic crystal class and their valence electrons move freely.",
        "de": "Eisen, Kupfer und Gold gehören zur Klasse der metallischen Kristalle und ihre Valenzelektronen bewegen sich frei.",
        "fr": "Le fer, le cuivre et l’or appartiennent à la classe des cristaux métalliques et leurs électrons de valence se déplacent librement.",
        "ru": "Железо, медь и золото относятся к классу металлических кристаллов, и их валентные электроны движутся свободно.",
        "ar": "يقع الحديد والنحاس والذهب في فئة البلورات المعدنية وتتحرك إلكترونات التكافؤ الخاصة بها بحرية.",
        "zh": "铁、铜和金属于金属晶体类，它们的价电子可以自由移动。",
        "ku": "Hesin, sifir û zêr di çîna krîstalên metalîk de ne û elektronên wan ên valence bi serbestî tevdigerin."
      },
      "trap": {
        "tr": "Demir katısı kovalent kristal olduğu için elektriği iletmez.",
        "en": "Since iron solid is a covalent crystal, it does not conduct electricity.",
        "de": "Da fester Eisen ein kovalenter Kristall ist, leitet er keinen Strom.",
        "fr": "Le fer solide étant un cristal covalent, il ne conduit pas l’électricité.",
        "ru": "Поскольку твердое железо представляет собой ковалентный кристалл, оно не проводит электричество.",
        "ar": "وبما أن الحديد الصلب عبارة عن بلورة تساهمية، فإنه لا يوصل الكهرباء.",
        "zh": "由于铁固体是共价晶体，因此它不导电。",
        "ku": "Ji ber ku hesin hişk krîstalek kovalent e, elektrîkê nagire."
      }
    },
    {
      "id": "u04-f09",
      "fact": {
        "tr": "Buharlaşma her sıcaklıkta gerçekleşirken, kaynama belirli bir sıcaklıkta tüm sıvıda gerçekleşir.",
        "en": "While evaporation occurs at any temperature, boiling occurs in the entire liquid at a particular temperature.",
        "de": "Während es bei jeder Temperatur zu einer Verdampfung kommt, kommt es bei einer bestimmten Temperatur zum Sieden der gesamten Flüssigkeit.",
        "fr": "Alors que l’évaporation se produit à n’importe quelle température, l’ébullition se produit dans tout le liquide à une température particulière.",
        "ru": "Хотя испарение происходит при любой температуре, при определенной температуре происходит кипение всей жидкости.",
        "ar": "في حين أن التبخر يحدث عند أي درجة حرارة، فإن الغليان يحدث في السائل بأكمله عند درجة حرارة معينة.",
        "zh": "虽然蒸发在任何温度下都会发生，但在特定温度下整个液体都会发生沸腾。",
        "ku": "Dema ku evaporasyon di her germahiyê de çêdibe, di germahiyek taybetî de kelandin di tevahiya şilê de pêk tê."
      },
      "trap": {
        "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
        "en": "Evaporation occurs only at boiling temperature.",
        "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
        "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
        "ru": "Испарение происходит только при температуре кипения.",
        "ar": "يحدث التبخر فقط عند درجة حرارة الغليان.",
        "zh": "蒸发仅在沸腾温度下发生。",
        "ku": "Avhilandin tenê di germahiya kelandinê de pêk tê."
      }
    },
    {
      "id": "u04-f10",
      "fact": {
        "tr": "Dış basınç azaldıkça (yüksek dağlara çıkıldıkça) suyun kaynama noktası düşer.",
        "en": "As the external pressure decreases (as you climb higher mountains), the boiling point of water decreases.",
        "de": "Wenn der äußere Druck abnimmt (beim Aufstieg auf höhere Berge), sinkt der Siedepunkt des Wassers.",
        "fr": "À mesure que la pression externe diminue (à mesure que vous gravissez des montagnes plus hautes), le point d’ébullition de l’eau diminue.",
        "ru": "По мере уменьшения внешнего давления (по мере подъема на более высокие горы) температура кипения воды снижается.",
        "ar": "ومع انخفاض الضغط الخارجي (أثناء تسلق الجبال العالية)، تنخفض درجة غليان الماء.",
        "zh": "随着外部压力降低（当你爬上更高的山时），水的沸点降低。",
        "ku": "Her ku zexta derve kêm dibe (her ku hûn hilkişin çiyayên bilind), xala kelandinê ya avê kêm dibe."
      },
      "trap": {
        "tr": "Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.",
        "en": "Since the external pressure decreases in the pressure cooker, food cooks faster.",
        "de": "Da im Schnellkochtopf der Außendruck abnimmt, garen die Speisen schneller.",
        "fr": "Puisque la pression externe diminue dans la cocotte minute, les aliments cuisent plus rapidement.",
        "ru": "Поскольку в скороварке снижается внешнее давление, пища готовится быстрее.",
        "ar": "نظرًا لانخفاض الضغط الخارجي في قدر الضغط، يتم طهي الطعام بشكل أسرع.",
        "zh": "由于高压锅内的外部压力降低，食物煮得更快。",
        "ku": "Ji ber ku fişara derve di tenûrê de kêm dibe, xwarin zûtir çêdibe."
      }
    },
    {
      "id": "u04-f11",
      "fact": {
        "tr": "Bağıl nem, havadaki mevcut su buharı kısmi basıncının o sıcaklıktaki doygun buhar basıncına oranıdır.",
        "en": "Relative humidity is the ratio of the partial pressure of water vapor in the air to the saturated vapor pressure at that temperature.",
        "de": "Die relative Luftfeuchtigkeit ist das Verhältnis des Partialdrucks des Wasserdampfs in der Luft zum Sättigungsdampfdruck bei dieser Temperatur.",
        "fr": "L'humidité relative est le rapport entre la pression partielle de vapeur d'eau dans l'air et la pression de vapeur saturée à cette température.",
        "ru": "Относительная влажность — это отношение парциального давления водяного пара в воздухе к давлению насыщенного пара при этой температуре.",
        "ar": "الرطوبة النسبية هي نسبة الضغط الجزئي لبخار الماء في الهواء إلى ضغط البخار المشبع عند درجة الحرارة تلك.",
        "zh": "相对湿度是空气中水蒸气的分压与该温度下的饱和水蒸气压的比值。",
        "ku": "Nemiya nisbî rêjeya zexta qismî ya buhara avê ya li hewayê bi tansiyona têrbûyî ya wê germahiyê ye."
      },
      "trap": {
        "tr": "Bağıl nem %100 olduğunda hava neme tamamen doymamıştır.",
        "en": "When the relative humidity is 100%, the air is not completely saturated with moisture.",
        "de": "Bei einer relativen Luftfeuchtigkeit von 100 % ist die Luft nicht vollständig mit Feuchtigkeit gesättigt.",
        "fr": "Lorsque l’humidité relative est de 100 %, l’air n’est pas complètement saturé d’humidité.",
        "ru": "При относительной влажности 100% воздух не полностью насыщен влагой.",
        "ar": "عندما تكون الرطوبة النسبية 100%، لا يكون الهواء مشبعًا تمامًا بالرطوبة.",
        "zh": "当相对湿度为100%时，空气中的水分尚未完全饱和。",
        "ku": "Dema ku nemahiya nisbî 100% be, hewa bi tevahî ji şilbûnê têr nabe."
      }
    },
    {
      "id": "u04-f12",
      "fact": {
        "tr": "Plazma hali nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.",
        "en": "The plasma state is an electrically conductive state in which neutral atoms, ions, free electrons and photons coexist.",
        "de": "Der Plasmazustand ist ein elektrisch leitender Zustand, in dem neutrale Atome, Ionen, freie Elektronen und Photonen nebeneinander existieren.",
        "fr": "L’état plasma est un état électriquement conducteur dans lequel coexistent des atomes neutres, des ions, des électrons libres et des photons.",
        "ru": "Состояние плазмы — это электропроводящее состояние, в котором сосуществуют нейтральные атомы, ионы, свободные электроны и фотоны.",
        "ar": "حالة البلازما هي حالة موصلة للكهرباء تتعايش فيها الذرات والأيونات والإلكترونات الحرة والفوتونات المحايدة.",
        "zh": "等离子体状态是中性原子、离子、自由电子和光子共存的导电状态。",
        "ku": "Rewşa plazmayê rewşek elektrîkê ye ku tê de atomên bêalî, îyon, elektronên azad û foton bi hev re dijîn."
      },
      "trap": {
        "tr": "Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.",
        "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
        "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
        "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
        "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
        "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
        "zh": "等离子体状态不导电，也不受磁场影响。",
        "ku": "Rewşa plazmayê elektrîkê nake û ji qada magnetîsî bandor nake."
      }
    },
    {
      "id": "u04-f13",
      "fact": {
        "tr": "Moleküller arası çekim kuvveti güçlü olan sıvıların viskozitesi yüksek, buhar basıncı düşüktür.",
        "en": "Liquids with strong intermolecular forces have high viscosity and low vapor pressure.",
        "de": "Flüssigkeiten mit starken intermolekularen Kräften haben eine hohe Viskosität und einen niedrigen Dampfdruck.",
        "fr": "Les liquides dotés de fortes forces intermoléculaires ont une viscosité élevée et une faible pression de vapeur.",
        "ru": "Жидкости с сильными межмолекулярными силами имеют высокую вязкость и низкое давление пара.",
        "ar": "السوائل ذات القوى الجزيئية القوية لها لزوجة عالية وضغط بخار منخفض.",
        "zh": "分子间力强的液体具有高粘度和低蒸气压。",
        "ku": "Şîrkên bi hêzên navmolekularî yên xurt xwedî vîskozîtîya bilind û tansiyona vaporê ya kêm in."
      },
      "trap": {
        "tr": "Çekim kuvveti yüksek olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
        "en": "Liquids with high gravitational force evaporate very quickly and have high vapor pressure.",
        "de": "Flüssigkeiten mit hoher Schwerkraft verdampfen sehr schnell und haben einen hohen Dampfdruck.",
        "fr": "Les liquides ayant une force gravitationnelle élevée s’évaporent très rapidement et ont une pression de vapeur élevée.",
        "ru": "Жидкости с высокой силой гравитации очень быстро испаряются и имеют высокое давление пара.",
        "ar": "تتبخر السوائل ذات قوة الجاذبية العالية بسرعة كبيرة ولها ضغط بخار مرتفع.",
        "zh": "具有高重力的液体蒸发得非常快并且具有高蒸气压。",
        "ku": "Şîrkên bi hêza gravîtasyonê ya bilind pir zû diherikin û xwedî tansiyona buharê ya bilind in."
      }
    },
    {
      "id": "u04-f14",
      "fact": {
        "tr": "Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).",
        "en": "The equilibrium vapor pressures of all pure liquids boiling in the same environment are equal to each other (equal to the external pressure).",
        "de": "Die Gleichgewichtsdampfdrücke aller reinen Flüssigkeiten, die in derselben Umgebung sieden, sind einander gleich (gleich dem Außendruck).",
        "fr": "Les pressions de vapeur à l'équilibre de tous les liquides purs bouillant dans le même environnement sont égales les unes aux autres (égales à la pression externe).",
        "ru": "Равновесные давления паров всех чистых жидкостей, кипящих в одной среде, равны друг другу (равны внешнему давлению).",
        "ar": "إن ضغوط البخار المتوازنة لجميع السوائل النقية التي تغلي في نفس البيئة تكون متساوية مع بعضها البعض (مساوية للضغط الخارجي).",
        "zh": "在同一环境中沸腾的所有纯液体的平衡蒸气压彼此相等（等于外部压力）。",
        "ku": "Zextên buharê yên hevseng ên hemî şilekên pak ên ku di heman hawîrdorê de diqelînin bi hevûdu re (wek zexta derve) wekhev in."
      },
      "trap": {
        "tr": "Kaynayan etil alkolün buhar basıncı kaynayan suyunkinden daha büyüktür.",
        "en": "The vapor pressure of boiling ethyl alcohol is greater than that of boiling water.",
        "de": "Der Dampfdruck von siedendem Ethylalkohol ist höher als der von kochendem Wasser.",
        "fr": "La pression de vapeur de l’alcool éthylique bouillant est supérieure à celle de l’eau bouillante.",
        "ru": "Давление паров кипящего этилового спирта больше, чем у кипящей воды.",
        "ar": "يكون ضغط بخار الكحول الإيثيلي المغلي أكبر من ضغط بخار الماء المغلي.",
        "zh": "沸腾的乙醇的蒸气压大于沸水的蒸气压。",
        "ku": "Zexta buharê ya etilalkola kelandî ji ya ava kelandî mezintir e."
      }
    },
    {
      "id": "u04-f15",
      "fact": {
        "tr": "Sıvı yüzey alanı arttıkça buharlaşma hızı artar fakat denge buhar basıncı değişmez.",
        "en": "As the liquid surface area increases, the evaporation rate increases, but the equilibrium vapor pressure does not change.",
        "de": "Mit zunehmender Flüssigkeitsoberfläche nimmt die Verdampfungsrate zu, der Gleichgewichtsdampfdruck ändert sich jedoch nicht.",
        "fr": "À mesure que la surface du liquide augmente, le taux d’évaporation augmente, mais la pression de vapeur à l’équilibre ne change pas.",
        "ru": "С увеличением площади поверхности жидкости скорость испарения увеличивается, но равновесное давление пара не меняется.",
        "ar": "مع زيادة مساحة سطح السائل، يزداد معدل التبخر، ولكن ضغط البخار المتوازن لا يتغير.",
        "zh": "随着液体表面积的增加，蒸发速率增加，但平衡蒸气压不改变。",
        "ku": "Her ku qada rûbera şilekê zêde dibe, rêjeya evaporasyonê zêde dibe, lê tansiyona buharê ya hevsengiyê naguhere."
      },
      "trap": {
        "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
        "en": "The equilibrium vapor pressure of water in the wide container is greater than that in the narrow container.",
        "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
        "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
        "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
        "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
        "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
        "ku": "Pestoya hevsengiya buharê ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
      }
    },
    {
      "id": "u04-f16",
      "fact": {
        "tr": "Rüzgarlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.",
        "en": "In windy weather, the evaporation rate increases because vapor molecules on the surface are removed.",
        "de": "Bei windigem Wetter erhöht sich die Verdunstungsrate, da Dampfmoleküle an der Oberfläche entfernt werden.",
        "fr": "Par temps venteux, le taux d’évaporation augmente car les molécules de vapeur à la surface sont éliminées.",
        "ru": "В ветреную погоду скорость испарения увеличивается за счет удаления молекул пара с поверхности.",
        "ar": "وفي الطقس العاصف، يزداد معدل التبخر بسبب إزالة جزيئات البخار الموجودة على السطح.",
        "zh": "在大风天气中，由于表面的蒸气分子被去除，蒸发率会增加。",
        "ku": "Di hewaya bayê de, ji ber ku molekulên buharê yên li ser rûyê erdê têne rakirin, rêjeya evaporasyonê zêde dibe."
      },
      "trap": {
        "tr": "Rüzgarlı havada çamaşırların kuruma süresi uzar.",
        "en": "In windy weather, the drying time of laundry takes longer.",
        "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
        "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
        "ru": "В ветреную погоду время высыхания белья увеличивается.",
        "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
        "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
        "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u04-c01",
      "conceptA": {
        "tr": "Buharlaşma",
        "en": "evaporation",
        "de": "Verdunstung",
        "fr": "évaporation",
        "ru": "испарение",
        "ar": "التبخر",
        "zh": "蒸发",
        "ku": "evaporation"
      },
      "conceptB": {
        "tr": "Kaynama",
        "en": "boiling",
        "de": "kochend",
        "fr": "bouillante",
        "ru": "кипение",
        "ar": "الغليان",
        "zh": "沸腾",
        "ku": "kelandin"
      },
      "distinction": {
        "tr": "Buharlaşma her sıcaklıkta ve sadece yüzeyde; kaynama belirli sıcaklıkta ve sıvının her yerinde gerçekleşir.",
        "en": "Evaporation occurs at all temperatures and only on the surface; Boiling occurs at a certain temperature and everywhere in the liquid.",
        "de": "Die Verdunstung erfolgt bei allen Temperaturen und nur an der Oberfläche; Das Sieden findet bei einer bestimmten Temperatur und überall in der Flüssigkeit statt.",
        "fr": "L'évaporation se produit à toutes les températures et uniquement en surface ; L'ébullition se produit à une certaine température et partout dans le liquide.",
        "ru": "Испарение происходит при всех температурах и только на поверхности; Кипение происходит при определенной температуре и повсеместно в жидкости.",
        "ar": "يحدث التبخر في جميع درجات الحرارة وعلى السطح فقط؛ يحدث الغليان عند درجة حرارة معينة وفي كل مكان في السائل.",
        "zh": "蒸发在所有温度下都会发生，并且仅发生在表面；沸腾发生在一定温度下，并且发生在液体的各处。",
        "ku": "Evaporation di her germahiyê de û tenê li ser rûyê çêdibe; Kelandin di germahiyek diyar de û li her derê şilê çêdibe."
      }
    },
    {
      "id": "u04-c02",
      "conceptA": {
        "tr": "Amorf Katı",
        "en": "Amorphous Solid",
        "de": "Amorpher Feststoff",
        "fr": "Solide amorphe",
        "ru": "Аморфное твердое вещество",
        "ar": "صلبة غير متبلورة",
        "zh": "非晶固体",
        "ku": "Amorphous Solid"
      },
      "conceptB": {
        "tr": "Kristal Katı",
        "en": "Crystal Solid",
        "de": "Kristallfest",
        "fr": "Cristal solide",
        "ru": "Кристалл Твердый",
        "ar": "كريستال صلب",
        "zh": "水晶固体",
        "ku": "Crystal Solid"
      },
      "distinction": {
        "tr": "Amorf katıların belirli erime noktası yoktur ve camsı geçiş gösterir; kristal katıların düzenli istiflenmesi ve keskin erime noktası vardır.",
        "en": "Amorphous solids do not have a specific melting point and show a glass transition; crystalline solids have orderly stacking and sharp melting point.",
        "de": "Amorphe Feststoffe haben keinen bestimmten Schmelzpunkt und zeigen einen Glasübergang; Kristalline Feststoffe haben eine geordnete Stapelung und einen scharfen Schmelzpunkt.",
        "fr": "Les solides amorphes n'ont pas de point de fusion spécifique et présentent une transition vitreuse ; les solides cristallins ont un empilement ordonné et un point de fusion précis.",
        "ru": "Аморфные твердые вещества не имеют определенной температуры плавления и подвергаются стеклованию; Кристаллические твердые вещества имеют упорядоченную укладку и острую температуру плавления.",
        "ar": "المواد الصلبة غير المتبلورة ليس لها نقطة انصهار محددة وتظهر تزججًا؛ تتميز المواد الصلبة البلورية بتكديس منظم ونقطة انصهار حادة.",
        "zh": "无定形固体没有特定的熔点并表现出玻璃化转变；结晶固体具有有序的堆积和明确的熔点。",
        "ku": "Zeviyên amorf xwedan xalek helînê ya taybetî nînin û veguheztinek cam nîşan didin; solidên krîstal xwedan lihevhatina rêkûpêk û xala helînê ya tûj e."
      }
    },
    {
      "id": "u04-c03",
      "conceptA": {
        "tr": "Viskozite",
        "en": "viscosity",
        "de": "Viskosität",
        "fr": "viscosité",
        "ru": "вязкость",
        "ar": "اللزوجة",
        "zh": "粘度",
        "ku": "vîskozîtî"
      },
      "conceptB": {
        "tr": "Akıcılık",
        "en": "fluency",
        "de": "Geläufigkeit",
        "fr": "maîtrise",
        "ru": "беглость",
        "ar": "الطلاقة",
        "zh": "流畅度",
        "ku": "fluency"
      },
      "distinction": {
        "tr": "Viskozite sıvının akmaya karşı gösterdiği iç dirençtir; akıcılık ise viskozitenin tam tersi olup akabilme kolaylığıdır.",
        "en": "Viscosity is the internal resistance of a liquid to flow; Flowability is the opposite of viscosity and is the ease of flow.",
        "de": "Viskosität ist der innere Widerstand einer Flüssigkeit gegenüber dem Fließen; Fließfähigkeit ist das Gegenteil von Viskosität und bezeichnet die Fließfähigkeit.",
        "fr": "La viscosité est la résistance interne d'un liquide à s'écouler ; La fluidité est l'opposé de la viscosité et correspond à la facilité d'écoulement.",
        "ru": "Вязкость — это внутреннее сопротивление жидкости течению; Текучесть является противоположностью вязкости и означает легкость текучести.",
        "ar": "اللزوجة هي المقاومة الداخلية للسائل للتدفق. قابلية التدفق هي عكس اللزوجة وهي سهولة التدفق.",
        "zh": "粘度是液体流动的内部阻力；流动性与粘度相反，是流动的容易程度。",
        "ku": "Vîskozîtî berxwedana navxweyî ya şilekê ye ku diherike; Herikîn berevajiyê vîskozîteyê ye û hêsaniya herikînê ye."
      }
    },
    {
      "id": "u04-c04",
      "conceptA": {
        "tr": "Buhar Basıncı",
        "en": "Steam Pressure",
        "de": "Dampfdruck",
        "fr": "Pression de vapeur",
        "ru": "Давление пара",
        "ar": "ضغط البخار",
        "zh": "蒸汽压力",
        "ku": "Zexta Steam"
      },
      "conceptB": {
        "tr": "Dış Basınç",
        "en": "External Pressure",
        "de": "Äußerer Druck",
        "fr": "Pression externe",
        "ru": "Внешнее давление",
        "ar": "الضغط الخارجي",
        "zh": "外部压力",
        "ku": "Zexta Derve"
      },
      "distinction": {
        "tr": "Buhar basıncı sıvının sıcaklığına bağlı iç basıncıdır; dış basınç ise ortam atmosferinin sıvı yüzeyine uyguladığı basınçtır.",
        "en": "Vapor pressure is the internal pressure of the liquid depending on its temperature; External pressure is the pressure exerted by the ambient atmosphere on the liquid surface.",
        "de": "Der Dampfdruck ist der Innendruck der Flüssigkeit in Abhängigkeit von ihrer Temperatur; Unter Außendruck versteht man den Druck, den die Umgebungsatmosphäre auf die Flüssigkeitsoberfläche ausübt.",
        "fr": "La pression de vapeur est la pression interne du liquide en fonction de sa température ; La pression externe est la pression exercée par l'atmosphère ambiante sur la surface du liquide.",
        "ru": "Давление пара — внутреннее давление жидкости, зависящее от ее температуры; Внешнее давление – это давление, оказываемое окружающей атмосферой на поверхность жидкости.",
        "ar": "ضغط البخار هو الضغط الداخلي للسائل حسب درجة حرارته؛ الضغط الخارجي هو الضغط الذي يمارسه الجو المحيط على سطح السائل.",
        "zh": "蒸气压是液体的内部压力，取决于其温度；外部压力是环境大气对液体表面施加的压力。",
        "ku": "Zexta vaporê zexta hundurîn a şilê li gorî germahiya wê ye; Zexta derve zexta ku ji hêla atmosfera hawîrdorê ve li ser rûxara şilekê tê meşandin e."
      }
    },
    {
      "id": "u04-c05",
      "conceptA": {
        "tr": "Kaynama",
        "en": "boiling",
        "de": "kochend",
        "fr": "bouillante",
        "ru": "кипение",
        "ar": "الغليان",
        "zh": "沸腾",
        "ku": "kelandin"
      },
      "conceptB": {
        "tr": "Buharlaşma",
        "en": "evaporation",
        "de": "Verdunstung",
        "fr": "évaporation",
        "ru": "испарение",
        "ar": "التبخر",
        "zh": "蒸发",
        "ku": "evaporation"
      },
      "distinction": {
        "tr": "Buharlaşma her sıcaklıkta ve sadece yüzeyde gerçekleşir; kaynama iç buhar basıncının dış basınca eşitlendiği anda sıvının her yerinde olur.",
        "en": "Evaporation occurs at all temperatures and only at the surface; Boiling occurs everywhere in the liquid when the internal vapor pressure equals the external pressure.",
        "de": "Die Verdunstung erfolgt bei allen Temperaturen und nur an der Oberfläche; Sieden findet überall in der Flüssigkeit statt, wenn der innere Dampfdruck dem äußeren Druck entspricht.",
        "fr": "L'évaporation se produit à toutes les températures et uniquement en surface ; L'ébullition se produit partout dans le liquide lorsque la pression de vapeur interne est égale à la pression externe.",
        "ru": "Испарение происходит при всех температурах и только на поверхности; Кипение происходит повсюду в жидкости, когда внутреннее давление пара равно внешнему давлению.",
        "ar": "يحدث التبخر عند جميع درجات الحرارة وعلى السطح فقط؛ يحدث الغليان في كل مكان في السائل عندما يكون ضغط البخار الداخلي مساوياً للضغط الخارجي.",
        "zh": "蒸发发生在所有温度下且仅发生在表面；当内部蒸气压等于外部压力时，液体中各处都会发生沸腾。",
        "ku": "Evaporasyon di her germahiyê de û tenê li rûerdê pêk tê; Kelandin li her derê şilê çêdibe dema ku zexta buhara hundurîn bi zexta derve re bibe hev."
      }
    },
    {
      "id": "u04-c06",
      "conceptA": {
        "tr": "Gerçek Gaz",
        "en": "Real Gas",
        "de": "Echtes Gas",
        "fr": "Gaz réel",
        "ru": "Реальный газ",
        "ar": "الغاز الحقيقي",
        "zh": "真实气体",
        "ku": "Gaza Rastî"
      },
      "conceptB": {
        "tr": "İdeal Gaz",
        "en": "Ideal Gas",
        "de": "Ideales Gas",
        "fr": "Gaz parfait",
        "ru": "Идеальный газ",
        "ar": "الغاز المثالي",
        "zh": "理想气体",
        "ku": "Gaza Îdeal"
      },
      "distinction": {
        "tr": "İdeal gazda tanecik hacmi ve moleküller arası çekim sıfır kabul edilir; gerçek gazlarda moleküller arası çekim ve öz hacim vardır.",
        "en": "In an ideal gas, particle volume and intermolecular attraction are assumed to be zero; In real gases, there is intermolecular attraction and specific volume.",
        "de": "In einem idealen Gas wird davon ausgegangen, dass das Partikelvolumen und die intermolekulare Anziehung Null sind; In realen Gasen gibt es eine intermolekulare Anziehung und ein spezifisches Volumen.",
        "fr": "Dans un gaz parfait, le volume des particules et l'attraction intermoléculaire sont supposés nuls ; Dans les gaz réels, il existe une attraction intermoléculaire et un volume spécifique.",
        "ru": "В идеальном газе объем частицы и межмолекулярное притяжение считаются равными нулю; В реальных газах существует межмолекулярное притяжение и удельный объем.",
        "ar": "في الغاز المثالي، يُفترض أن يكون حجم الجسيمات والجذب بين الجزيئات صفرًا؛ في الغازات الحقيقية، هناك جاذبية بين الجزيئات وحجم محدد.",
        "zh": "在理想气体中，粒子体积和分子间吸引力假定为零；在实际气体中，存在分子间吸引力和比体积。",
        "ku": "Di gazek îdeal de, qebareya pirtik û kêşeya navmolekularî wekî sifir tê hesibandin; Di gazên rastîn de, balkêşiya navmolekular û qebarek taybetî heye."
      }
    },
    {
      "id": "u04-c07",
      "conceptA": {
        "tr": "Gaz",
        "en": "gas",
        "de": "Gas",
        "fr": "gaz",
        "ru": "газ",
        "ar": "غاز",
        "zh": "气体",
        "ku": "gaz"
      },
      "conceptB": {
        "tr": "Plazma",
        "en": "plasma",
        "de": "Plasma",
        "fr": "plasma",
        "ru": "плазма",
        "ar": "البلازما",
        "zh": "等离子",
        "ku": "plasma"
      },
      "distinction": {
        "tr": "Gaz nötr atom veya moleküllerden oluşur; plazma ise iyonlar, serbest elektronlar ve nötr taneciklerin bir arada bulunduğu iletken akışkandır.",
        "en": "Gas consists of neutral atoms or molecules; Plasma is a conductive fluid in which ions, free electrons and neutral particles coexist.",
        "de": "Gas besteht aus neutralen Atomen oder Molekülen; Plasma ist eine leitfähige Flüssigkeit, in der Ionen, freie Elektronen und neutrale Teilchen nebeneinander existieren.",
        "fr": "Le gaz est constitué d’atomes ou de molécules neutres ; Le plasma est un fluide conducteur dans lequel coexistent des ions, des électrons libres et des particules neutres.",
        "ru": "Газ состоит из нейтральных атомов или молекул; Плазма – это проводящая жидкость, в которой сосуществуют ионы, свободные электроны и нейтральные частицы.",
        "ar": "يتكون الغاز من ذرات أو جزيئات محايدة؛ البلازما هي سائل موصل تتعايش فيه الأيونات والإلكترونات الحرة والجسيمات المحايدة.",
        "zh": "气体由中性原子或分子组成；等离子体是离子、自由电子和中性粒子共存的导电流体。",
        "ku": "Gaz ji atom an jî molekulên bêalî pêk tê; Plazma şilekek gîhaq e ku tê de îyon, elektronên azad û pariyên bêalî bi hev re dijîn."
      }
    },
    {
      "id": "u04-c08",
      "conceptA": {
        "tr": "Süblimleşme",
        "en": "Sublimation",
        "de": "Sublimation",
        "fr": "Sublimation",
        "ru": "Сублимация",
        "ar": "التسامي",
        "zh": "升华",
        "ku": "Sublîmasyon"
      },
      "conceptB": {
        "tr": "Kırağılaşma",
        "en": "Deposition",
        "de": "Resublimation",
        "fr": "Condensation solide",
        "ru": "Десублимация",
        "ar": "الترسيب",
        "zh": "凝华",
        "ku": "Qirawbûn"
      },
      "distinction": {
        "tr": "Süblimleşme katının sıvılaşmadan doğrudan gaza geçmesidir; kırağılaşma ise gaz taneciklerinin doğrudan katıya dönüşmesidir.",
        "en": "Sublimation is the direct transition from solid to gas without melting; deposition is the direct transition from gas to solid without condensing.",
        "de": "Sublimation ist der direkte Übergang vom festen in den gasförmigen Zustand; Resublimation ist der direkte Übergang vom Gas zum Feststoff.",
        "fr": "La sublimation est le passage direct de l'état solide à l'état gazeux ; la condensation solide est le passage direct du gaz au solide.",
        "ru": "Сублимация — прямой переход твердого тела в газ минуя жидкость; десублимация — переход газа сразу в твердое состояние.",
        "ar": "التسامي هو التحول المباشر للمادة من الحالة الصلبة إلى الغازية دون المرور بالسيولة؛ الترسيب هو تحول الغاز مباشرة إلى صلب.",
        "zh": "升华是物质不经液态直接从固态转变为气态的过程；凝华是气体不经液态直接转变为固态的过程。",
        "ku": "Sublîmasyon derbasbûna rasterast ji rewşa hişk bo gaza bê helandin e; qirawbûn derbasbûna rasterast ji gazê ber bi hişkê ve ye."
      }
    }
  ],
  "sequences": [
    {
      "id": "u04-s01",
      "title": {
        "tr": "Sıcaklık Arttıkça Değişimler",
        "en": "Changes as Temperature Increases",
        "de": "Ändert sich mit steigender Temperatur",
        "fr": "Changements à mesure que la température augmente",
        "ru": "Изменения по мере повышения температуры",
        "ar": "التغييرات مع زيادة درجة الحرارة",
        "zh": "随着温度升高而变化",
        "ku": "Her ku Germahiya Zêde dibe Diguhere"
      },
      "steps": [
        {
          "tr": "Kinetik enerji artar",
          "en": "Kinetic energy increases",
          "de": "Die kinetische Energie nimmt zu",
          "fr": "L'énergie cinétique augmente",
          "ru": "Кинетическая энергия увеличивается",
          "ar": "تزداد الطاقة الحركية",
          "zh": "动能增加",
          "ku": "Enerjiya kînetîk zêde dibe"
        },
        {
          "tr": "Viskozite azalır",
          "en": "Viscosity decreases",
          "de": "Die Viskosität nimmt ab",
          "fr": "La viscosité diminue",
          "ru": "Вязкость снижается",
          "ar": "اللزوجة تنخفض",
          "zh": "粘度降低",
          "ku": "Vîskozîtî kêm dibe"
        },
        {
          "tr": "Buharlaşma hızı artar",
          "en": "Evaporation rate increases",
          "de": "Die Verdunstungsrate steigt",
          "fr": "Le taux d’évaporation augmente",
          "ru": "Скорость испарения увеличивается",
          "ar": "يزداد معدل التبخر",
          "zh": "蒸发率增加",
          "ku": "Rêjeya evaporasyonê zêde dibe"
        },
        {
          "tr": "Denge buhar basıncı artar",
          "en": "Equilibrium vapor pressure increases",
          "de": "Der Gleichgewichtsdampfdruck steigt",
          "fr": "La pression de vapeur à l’équilibre augmente",
          "ru": "Равновесное давление пара увеличивается",
          "ar": "يزداد ضغط البخار المتوازن",
          "zh": "平衡蒸气压增加",
          "ku": "Zexta vaporê ya hevsengiyê zêde dibe"
        }
      ]
    },
    {
      "id": "u04-s02",
      "title": {
        "tr": "Saf Suyun Isınma ve Hal Değişimi",
        "en": "Heating and State Change of Pure Water",
        "de": "Erwärmung und Zustandsänderung von reinem Wasser",
        "fr": "Chauffage et changement d'état de l'eau pure",
        "ru": "Нагревание и изменение состояния чистой воды",
        "ar": "التدفئة وتغيير حالة المياه النقية",
        "zh": "纯水的加热和状态变化",
        "ku": "Germkirin û Guhertina Dewletê ya Ava Paqij"
      },
      "steps": [
        {
          "tr": "0 °C deki buz eriyerek suya dönüşür",
          "en": "Ice at 0 °C melts and turns into water",
          "de": "Eis schmilzt bei 0 °C und verwandelt sich in Wasser",
          "fr": "La glace à 0 °C fond et se transforme en eau",
          "ru": "Лед при 0°C тает и превращается в воду.",
          "ar": "يذوب الثلج عند درجة 0 مئوية ويتحول إلى ماء",
          "zh": "冰在0°C融化并变成水",
          "ku": "Qeşa di 0 °C de dihele û dibe av"
        },
        {
          "tr": "Sıvı su 100 °C ye kadar ısınır",
          "en": "Liquid water heats up to 100 °C",
          "de": "Flüssiges Wasser erhitzt sich auf bis zu 100 °C",
          "fr": "L'eau liquide chauffe jusqu'à 100 °C",
          "ru": "Жидкая вода нагревается до 100°С.",
          "ar": "يسخن الماء السائل حتى 100 درجة مئوية",
          "zh": "液态水加热至 100 °C",
          "ku": "Ava şil heta 100 °C germ dibe"
        },
        {
          "tr": "100 °C de sabit sıcaklıkta kaynar",
          "en": "Boils at a constant temperature of 100 °C",
          "de": "Siedet bei einer konstanten Temperatur von 100 °C",
          "fr": "Bouillonne à une température constante de 100 °C",
          "ru": "Кипит при постоянной температуре 100°С.",
          "ar": "يغلي عند درجة حرارة ثابتة 100 درجة مئوية",
          "zh": "在 100 °C 恒温下沸腾",
          "ku": "Di germahiyek domdar 100 °C de tê kelandin"
        },
        {
          "tr": "Su buharının sıcaklığı yükselmeye devam eder",
          "en": "The temperature of water vapor continues to rise",
          "de": "Die Temperatur des Wasserdampfes steigt weiter an",
          "fr": "La température de la vapeur d'eau continue d'augmenter",
          "ru": "Температура водяного пара продолжает расти",
          "ar": "تستمر درجة حرارة بخار الماء في الارتفاع",
          "zh": "水蒸气温度持续升高",
          "ku": "Germahiya hilma avê her diçe zêde dibe"
        }
      ]
    },
    {
      "id": "u04-s03",
      "title": {
        "tr": "Sıvı Isındıkça Fiziksel Değişimler",
        "en": "Physical Changes as the Liquid Heates",
        "de": "Physikalische Veränderungen beim Erhitzen der Flüssigkeit",
        "fr": "Changements physiques à mesure que le liquide chauffe",
        "ru": "Физические изменения при нагревании жидкости",
        "ar": "التغيرات الفيزيائية مع تسخين السائل",
        "zh": "液体加热时的物理变化",
        "ku": "Guhertinên Fîzîkî yên wekî Avê Germ dibe"
      },
      "steps": [
        {
          "tr": "Moleküllerin ortalama kinetik enerjisi artar",
          "en": "The average kinetic energy of molecules increases",
          "de": "Die durchschnittliche kinetische Energie von Molekülen nimmt zu",
          "fr": "L'énergie cinétique moyenne des molécules augmente",
          "ru": "Средняя кинетическая энергия молекул увеличивается",
          "ar": "يزداد متوسط الطاقة الحركية للجزيئات",
          "zh": "分子的平均动能增加",
          "ku": "Enerjiya kînetîk a navîn a molekulan zêde dibe"
        },
        {
          "tr": "Moleküller arası çekim zayıflar",
          "en": "Intermolecular attraction weakens",
          "de": "Die intermolekulare Anziehung lässt nach",
          "fr": "L’attraction intermoléculaire s’affaiblit",
          "ru": "Межмолекулярное притяжение ослабевает.",
          "ar": "يضعف الجذب بين الجزيئات",
          "zh": "分子间吸引力减弱",
          "ku": "Balkêşiya navmolekular qels dibe"
        },
        {
          "tr": "Sıvının akmaya karşı direnci (viskozite) azalır",
          "en": "The fluid's resistance to flow (viscosity) decreases",
          "de": "Der Strömungswiderstand (Viskosität) der Flüssigkeit nimmt ab",
          "fr": "La résistance du fluide à l'écoulement (viscosité) diminue",
          "ru": "Сопротивление жидкости течению (вязкость) уменьшается.",
          "ar": "تقل مقاومة السائل للتدفق (اللزوجة).",
          "zh": "流体的流动阻力（粘度）降低",
          "ku": "Berxwedana şilekê ya li hember herikînê (vîskozîtî) kêm dibe"
        },
        {
          "tr": "Denge buhar basıncı hızla yükselir",
          "en": "Equilibrium vapor pressure rises rapidly",
          "de": "Der Gleichgewichtsdampfdruck steigt schnell an",
          "fr": "La pression de vapeur à l’équilibre augmente rapidement",
          "ru": "Равновесное давление пара быстро возрастает.",
          "ar": "يرتفع ضغط البخار المتوازن بسرعة",
          "zh": "平衡蒸气压迅速上升",
          "ku": "Zexta buharê ya hevsengî bi lez bilind dibe"
        }
      ]
    },
    {
      "id": "u04-s04",
      "title": {
        "tr": "Pistonlu Kapta Sıkışma",
        "en": "Piston Cup Jam",
        "de": "Kolbenbecherstau",
        "fr": "Bourrage de la coupelle de piston",
        "ru": "Кубок Поршня Джем",
        "ar": "مربى كأس المكبس",
        "zh": "活塞杯果酱",
        "ku": "Piston Cup Jam"
      },
      "steps": [
        {
          "tr": "Hareketli piston aşağı doğru itilir",
          "en": "The moving piston is pushed down",
          "de": "Der bewegliche Kolben wird nach unten gedrückt",
          "fr": "Le piston mobile est poussé vers le bas",
          "ru": "Движущийся поршень опускается вниз",
          "ar": "يتم دفع المكبس المتحرك إلى الأسفل",
          "zh": "移动活塞被向下推",
          "ku": "Pistona ku diherike tê xwarê"
        },
        {
          "tr": "Gazın kapladığı hacim daralır",
          "en": "The volume occupied by the gas decreases",
          "de": "Das vom Gas eingenommene Volumen nimmt ab",
          "fr": "Le volume occupé par le gaz diminue",
          "ru": "Объем, занимаемый газом, уменьшается",
          "ar": "يتناقص الحجم الذي يشغله الغاز",
          "zh": "气体所占的体积减少",
          "ku": "Hêjmara ku ji gazê tê girtin kêm dibe"
        },
        {
          "tr": "Birim hacme düşen tanecik sayısı artar",
          "en": "The number of particles per unit volume increases",
          "de": "Die Anzahl der Partikel pro Volumeneinheit nimmt zu",
          "fr": "Le nombre de particules par unité de volume augmente",
          "ru": "Количество частиц в единице объема увеличивается",
          "ar": "يزداد عدد الجزيئات لكل وحدة حجم",
          "zh": "单位体积的颗粒数增加",
          "ku": "Hejmara keriyên di yekîneya volmê de zêde dibe"
        },
        {
          "tr": "Çeperlere yapılan çarpma sayısı ve basınç artar",
          "en": "The number of impacts and pressure on the walls increases",
          "de": "Die Anzahl der Stöße und der Druck auf die Wände nehmen zu",
          "fr": "Le nombre d'impacts et la pression sur les murs augmentent",
          "ru": "Увеличивается количество ударов и давления на стены.",
          "ar": "يزداد عدد الصدمات والضغط على الجدران",
          "zh": "墙壁上的冲击次数和压力增加",
          "ku": "Hejmara bandor û zextên li ser dîwaran zêde dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u04-twin01",
      "stem": {
        "tr": "Bir sıvının denge buhar basıncını artırmak için aşağıdakilerden hangisi tek başına uygulanabilir?",
        "en": "Which of the following can be applied alone to increase the equilibrium vapor pressure of a liquid?",
        "de": "Welche der folgenden Maßnahmen kann allein angewendet werden, um den Gleichgewichtsdampfdruck einer Flüssigkeit zu erhöhen?",
        "fr": "Lequel des éléments suivants peut être appliqué seul pour augmenter la pression de vapeur d’équilibre d’un liquide ?",
        "ru": "Что из перечисленного можно применить отдельно для увеличения равновесного давления паров жидкости?",
        "ar": "أي مما يلي يمكن تطبيقه بمفرده لزيادة ضغط البخار المتوازن للسائل؟",
        "zh": "下列哪项可以单独应用来增加液体的平衡蒸气压？",
        "ku": "Kîjan ji yên jêrîn dikare bi tena serê xwe were sepandin da ku tansiyona hevsengiya hilma şilekê zêde bike?"
      },
      "options": [
        {
          "tr": "Sıvının sıcaklığını artırmak",
          "en": "increasing the temperature of the liquid",
          "de": "Erhöhung der Temperatur der Flüssigkeit",
          "fr": "augmenter la température du liquide",
          "ru": "повышение температуры жидкости",
          "ar": "زيادة درجة حرارة السائل",
          "zh": "增加液体的温度",
          "ku": "zêdekirina germahiya şilê"
        },
        {
          "tr": "Dış atmosfer basıncını artırmak",
          "en": "Increasing outside atmospheric pressure",
          "de": "Zunehmender äußerer Atmosphärendruck",
          "fr": "Augmentation de la pression atmosphérique extérieure",
          "ru": "Повышение внешнего атмосферного давления",
          "ar": "زيادة الضغط الجوي الخارجي",
          "zh": "外部大气压增加",
          "ku": "Zêdekirina zexta atmosferê ya derve"
        },
        {
          "tr": "Sıvının yüzey alanını genişletmek",
          "en": "Expanding the surface area of the liquid",
          "de": "Vergrößerung der Oberfläche der Flüssigkeit",
          "fr": "Augmenter la surface du liquide",
          "ru": "Увеличение площади поверхности жидкости",
          "ar": "توسيع مساحة سطح السائل",
          "zh": "扩大液体的表面积",
          "ku": "Berfirehkirina rûbera şilekê"
        },
        {
          "tr": "Kaptaki sıvı miktarını artırmak",
          "en": "Increasing the amount of liquid in the container",
          "de": "Erhöhen der Flüssigkeitsmenge im Behälter",
          "fr": "Augmenter la quantité de liquide dans le récipient",
          "ru": "Увеличение количества жидкости в емкости",
          "ar": "زيادة كمية السائل في الحاوية",
          "zh": "增加容器中的液体量",
          "ku": "Zêdekirina mîqdara şilê di konteynerê de"
        },
        {
          "tr": "Kaba uçucu olmayan tuz eklemek",
          "en": "Adding non-volatile salt to the container",
          "de": "Nichtflüchtiges Salz in den Behälter geben",
          "fr": "Ajouter du sel non volatil au récipient",
          "ru": "Добавление нелетучей соли в емкость",
          "ar": "إضافة الملح غير المتطاير إلى الوعاء",
          "zh": "向容器中添加非挥发性盐",
          "ku": "Zêdekirina xwêya nexwestî li konteynerê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Denge buhar basıncı yalnızca sıcaklık, sıvının cinsi ve saflıkla değişir. Sıcaklık artışı buhar basıncını artırır.",
        "en": "Equilibrium vapor pressure varies only with temperature, type of liquid and purity. Increasing temperature increases vapor pressure.",
        "de": "Der Gleichgewichtsdampfdruck variiert nur mit der Temperatur, der Art der Flüssigkeit und der Reinheit. Mit steigender Temperatur erhöht sich der Dampfdruck.",
        "fr": "La pression de vapeur à l'équilibre varie uniquement en fonction de la température, du type de liquide et de sa pureté. L'augmentation de la température augmente la pression de vapeur.",
        "ru": "Равновесное давление пара меняется только в зависимости от температуры, типа жидкости и чистоты. Повышение температуры увеличивает давление пара.",
        "ar": "يختلف ضغط البخار المتوازن فقط باختلاف درجة الحرارة ونوع السائل والنقاء. زيادة درجة الحرارة يزيد من ضغط البخار.",
        "zh": "平衡蒸气压仅随温度、液体类型和纯度而变化。温度升高会增加蒸气压。",
        "ku": "Zexta buharê ya hevseng tenê bi germahî, celebê şilek û paqijiyê diguhere. Zêdebûna germahiyê zexta buharê zêde dike."
      }
    },
    {
      "id": "u04-twin02",
      "stem": {
        "tr": "Aynı ortamda kaynamakta olan saf su ve saf etil alkol için aşağıdakilerden hangisi kesinlikle eşittir?",
        "en": "Which of the following is absolutely equivalent for pure water and pure ethyl alcohol boiling in the same environment?",
        "de": "Welche der folgenden Aussagen ist für reines Wasser und reinen Ethylalkohol, die in derselben Umgebung sieden, absolut gleichwertig?",
        "fr": "Lequel des énoncés suivants est absolument équivalent pour l’eau pure et l’alcool éthylique pur bouillant dans le même environnement ?",
        "ru": "Что из перечисленного абсолютно эквивалентно кипению чистой воды и чистого этилового спирта в одной и той же среде?",
        "ar": "أي مما يلي يكافئ تمامًا غليان الماء النقي والكحول الإيثيلي النقي في نفس البيئة؟",
        "zh": "纯水和纯乙醇在同一环境下沸腾，下列哪项是绝对等效的？",
        "ku": "Kîjan ji yên jêrîn ji bo ava paqij û alkola etilî ya saf ku di heman hawîrdorê de keliyane bi tevahî wekhev e?"
      },
      "options": [
        {
          "tr": "Buhar basınçları",
          "en": "vapor pressures",
          "de": "Dampfdrücke",
          "fr": "pressions de vapeur",
          "ru": "давление пара",
          "ar": "ضغوط البخار",
          "zh": "蒸气压",
          "ku": "zextên buharê"
        },
        {
          "tr": "Kaynama sıcaklıkları",
          "en": "boiling temperatures",
          "de": "Siedetemperaturen",
          "fr": "températures d'ébullition",
          "ru": "температура кипения",
          "ar": "درجات حرارة الغليان",
          "zh": "沸腾温度",
          "ku": "germên kelandinê"
        },
        {
          "tr": "Buharlaşma ısıları",
          "en": "Heats of evaporation",
          "de": "Verdunstungswärme",
          "fr": "Chaleurs d'évaporation",
          "ru": "Теплота испарения",
          "ar": "حرارة التبخر",
          "zh": "蒸发热",
          "ku": "Germên evaporasyonê"
        },
        {
          "tr": "Viskoziteleri",
          "en": "Viscosities",
          "de": "Viskositäten",
          "fr": "Viscosités",
          "ru": "Вязкость",
          "ar": "اللزوجة",
          "zh": "粘度",
          "ku": "Viskozîtî"
        },
        {
          "tr": "Özkütleleri",
          "en": "Density",
          "de": "Dichte",
          "fr": "Densité",
          "ru": "Плотность",
          "ar": "الكثافة",
          "zh": "密度",
          "ku": "Density"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Aynı ortamda kaynayan sıvıların iç buhar basıncı bulundukları ortamın dış basıncına eşit olduğundan buhar basınçları eşittir.",
        "en": "Since the internal vapor pressure of liquids boiling in the same environment is equal to the external pressure of the environment, their vapor pressures are equal.",
        "de": "Da der innere Dampfdruck von Flüssigkeiten, die in derselben Umgebung sieden, gleich dem äußeren Druck der Umgebung ist, sind ihre Dampfdrücke gleich.",
        "fr": "Puisque la pression de vapeur interne des liquides bouillant dans le même environnement est égale à la pression externe de l'environnement, leurs pressions de vapeur sont égales.",
        "ru": "Поскольку внутреннее давление пара жидкостей, кипящих в одной и той же среде, равно внешнему давлению среды, то и давления их пара равны.",
        "ar": "بما أن ضغط البخار الداخلي للسوائل التي تغلي في نفس البيئة يساوي الضغط الخارجي للبيئة، فإن ضغط بخارها متساوي.",
        "zh": "由于在同一环境中沸腾的液体的内部蒸气压等于环境的外部压力，因此它们的蒸气压相等。",
        "ku": "Ji ber ku tansiyona buhara navxweyî ya şilekên ku di heman hawîrdorê de dikelin bi zexta derve ya hawîrdorê re wekhev e, tansiyona wan a buharê yek in."
      }
    },
    {
      "id": "u04-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Maddenin Halleri konusunu işlerken Viskozite üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on States of Matter, which statement regarding viscosity represents the correct answer?",
        "de": "Welche Aussage zu Viskosität stellt im Kontext von Aggregatzustände die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de États de la Matière, quelle proposition sur viscosité constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Агрегатные состояния вещества», какой ответ относительно «вязкость» является правильным?",
        "ar": "أثناء دراسة موضوع \"حالات المادة\" مخبرياً، أي إجابة بخصوص \"اللزوجة\" تمثل الإجابة الصحيحة؟",
        "zh": "在“物态”实验探究与教学分析中，针对“粘度”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Rewşên Madeyê\" de, kîjan bersiv derbarê \"vîskozîtî\" de rast e?"
      },
      "options": [
        {
          "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
          "en": "Dry ice is a very hard crystal with a covalent network.",
          "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
          "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
          "ru": "Сухой лед — очень твердый кристалл с ковалентной сетью.",
          "ar": "الثلج الجاف عبارة عن بلورة صلبة للغاية ولها شبكة تساهمية.",
          "zh": "干冰是一种非常坚硬的晶体，具有共价网络。",
          "ku": "Qeşaya hişk krîstaleke pir hişk û bi tevneke kovalent e."
        },
        {
          "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
          "en": "Evaporation occurs only at boiling temperature.",
          "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
          "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
          "ru": "Испарение происходит только при температуре кипения.",
          "ar": "يحدث التبخر فقط عند درجة حرارة الغليان.",
          "zh": "蒸发仅在沸腾温度下发生。",
          "ku": "Avhilandin tenê di germahiya kelandinê de pêk tê."
        },
        {
          "tr": "Sıvıların akmaya karşı gösterdiği dirence viskozite denir; sıcaklık arttıkça viskozite azalır.",
          "en": "The resistance of liquids to flow is called viscosity; As temperature increases, viscosity decreases.",
          "de": "Der Strömungswiderstand von Flüssigkeiten wird als Viskosität bezeichnet; Mit zunehmender Temperatur nimmt die Viskosität ab.",
          "fr": "La résistance des liquides à l’écoulement est appelée viscosité ; À mesure que la température augmente, la viscosité diminue.",
          "ru": "Сопротивление жидкостей течению называется вязкостью; С повышением температуры вязкость уменьшается.",
          "ar": "تسمى مقاومة السوائل للتدفق باللزوجة؛ مع زيادة درجة الحرارة، تنخفض اللزوجة.",
          "zh": "液体流动的阻力称为粘度；随着温度升高，粘度降低。",
          "ku": "Ji berxwedana şilekên li hember herikînê re viskosîte tê gotin; Her ku germahî zêde dibe, vîskozîtî kêm dibe."
        },
        {
          "tr": "Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.",
          "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
          "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
          "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
          "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
          "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
          "zh": "等离子体状态不导电，也不受磁场影响。",
          "ku": "Rewşa plazmayê elektrîkê nake û ji qada magnetîsî bandor nake."
        },
        {
          "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
          "en": "The equilibrium vapor pressure of water in the wide container is greater than that in the narrow container.",
          "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
          "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
          "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
          "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
          "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
          "ku": "Pestoya hevsengiya buharê ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Sıvıların akmaya karşı gösterdiği dirence viskozite denir; sıcaklık arttıkça viskozite azalır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The resistance of liquids to flow is called viscosity; As temperature increases, viscosity decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Strömungswiderstand von Flüssigkeiten wird als Viskosität bezeichnet; Mit zunehmender Temperatur nimmt die Viskosität ab.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La résistance des liquides à l’écoulement est appelée viscosité ; À mesure que la température augmente, la viscosité diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Сопротивление жидкостей течению называется вязкостью; С повышением температуры вязкость уменьшается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تسمى مقاومة السوائل للتدفق باللزوجة؛ مع زيادة درجة الحرارة، تنخفض اللزوجة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“液体流动的阻力称为粘度；随着温度升高，粘度降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji berxwedana şilekên li hember herikînê re viskosîte tê gotin; Her ku germahî zêde dibe, vîskozîtî kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin04",
      "stem": {
        "tr": "Kimya dersinde Maddenin Halleri ünitesi incelenirken Buhar Basıncı ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit States of Matter, which of the following propositions concerning Steam Pressure is a verified scientific fact?",
        "de": "Bei der Untersuchung von Aggregatzustände: Welche Behauptung bezüglich Dampfdruck entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité États de la Matière, laquelle des affirmations suivantes concernant Pression de vapeur est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Агрегатные состояния вещества», какое из следующих суждений о «Давление пара» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حالات المادة\"، أي من الأحكام التالية المتعلقة بـ \"ضغط البخار\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“物态”核心规律时，下列关于“蒸汽压力”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Rewşên Madeyê\" tê kirin, kîjan daraza li ser \"Zexta Steam\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "NaCl moleküler katı sınıfında yer alır.",
          "en": "NaCl is in the molecular solid class.",
          "de": "NaCl gehört zur Klasse der molekularen Feststoffe.",
          "fr": "NaCl appartient à la classe des solides moléculaires.",
          "ru": "NaCl относится к классу молекулярных твердых веществ.",
          "ar": "NaCl موجود في الطبقة الصلبة الجزيئية.",
          "zh": "氯化钠属于分子固体类。",
          "ku": "NaCl di çîna molekulê ya hişk de ye."
        },
        {
          "tr": "Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.",
          "en": "Since the external pressure decreases in the pressure cooker, food cooks faster.",
          "de": "Da im Schnellkochtopf der Außendruck abnimmt, garen die Speisen schneller.",
          "fr": "Puisque la pression externe diminue dans la cocotte minute, les aliments cuisent plus rapidement.",
          "ru": "Поскольку в скороварке снижается внешнее давление, пища готовится быстрее.",
          "ar": "نظرًا لانخفاض الضغط الخارجي في قدر الضغط، يتم طهي الطعام بشكل أسرع.",
          "zh": "由于高压锅内的外部压力降低，食物煮得更快。",
          "ku": "Ji ber ku fişara derve di tenûrê de kêm dibe, xwarin zûtir çêdibe."
        },
        {
          "tr": "Çekim kuvveti yüksek olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
          "en": "Liquids with high gravitational force evaporate very quickly and have high vapor pressure.",
          "de": "Flüssigkeiten mit hoher Schwerkraft verdampfen sehr schnell und haben einen hohen Dampfdruck.",
          "fr": "Les liquides ayant une force gravitationnelle élevée s’évaporent très rapidement et ont une pression de vapeur élevée.",
          "ru": "Жидкости с высокой силой гравитации очень быстро испаряются и имеют высокое давление пара.",
          "ar": "تتبخر السوائل ذات قوة الجاذبية العالية بسرعة كبيرة ولها ضغط بخار مرتفع.",
          "zh": "具有高重力的液体蒸发得非常快并且具有高蒸气压。",
          "ku": "Şîrkên bi hêza gravîtasyonê ya bilind pir zû diherikin û xwedî tansiyona buharê ya bilind in."
        },
        {
          "tr": "Cam, plastik, tereyağı ve lastik belirli bir erime noktası olmayan amorf katılardır.",
          "en": "Glass, plastic, butter and rubber are amorphous solids that do not have a specific melting point.",
          "de": "Glas, Kunststoff, Butter und Gummi sind amorphe Feststoffe, die keinen bestimmten Schmelzpunkt haben.",
          "fr": "Le verre, le plastique, le beurre et le caoutchouc sont des solides amorphes qui n'ont pas de point de fusion spécifique.",
          "ru": "Стекло, пластик, масло и резина представляют собой аморфные твердые вещества, не имеющие определенной температуры плавления.",
          "ar": "الزجاج والبلاستيك والزبدة والمطاط هي مواد صلبة غير متبلورة ليس لها نقطة انصهار محددة.",
          "zh": "玻璃、塑料、黄油和橡胶是无定形固体，没有特定的熔点。",
          "ku": "Cam, plastîk, rûn û gomûk madeyên amorf in ku xwedî xala helînê ya taybetî nînin."
        },
        {
          "tr": "Rüzgarlı havada çamaşırların kuruma süresi uzar.",
          "en": "In windy weather, the drying time of laundry takes longer.",
          "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
          "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
          "ru": "В ветреную погоду время высыхания белья увеличивается.",
          "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
          "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
          "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Cam, plastik, tereyağı ve lastik belirli bir erime noktası olmayan amorf katılardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Glass, plastic, butter and rubber are amorphous solids that do not have a specific melting point.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Glas, Kunststoff, Butter und Gummi sind amorphe Feststoffe, die keinen bestimmten Schmelzpunkt haben.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le verre, le plastique, le beurre et le caoutchouc sont des solides amorphes qui n'ont pas de point de fusion spécifique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стекло, пластик, масло и резина представляют собой аморфные твердые вещества, не имеющие определенной температуры плавления.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الزجاج والبلاستيك والزبدة والمطاط هي مواد صلبة غير متبلورة ليس لها نقطة انصهار محددة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“玻璃、塑料、黄油和橡胶是无定形固体，没有特定的熔点。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Cam, plastîk, rûn û gomûk madeyên amorf in ku xwedî xala helînê ya taybetî nînin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Maddenin Halleri konusundaki temel kimyasal kurallar çerçevesinde Kaynama kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes boiling within the fundamental principles of States of Matter?",
        "de": "Welche Aussage beschreibt das Konzept kochend im Rahmen von Aggregatzustände am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement bouillante selon les lois de États de la Matière?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «кипение» в рамках темы «Агрегатные состояния вещества»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"الغليان\" ضمن قواعد \"حالات المادة\"؟",
        "zh": "根据“物态”的基本化学原理，下列哪项阐述能最准确地界定“沸腾”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"kelandin\" di çarçoveya prensîbên \"Rewşên Madeyê\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Demir katısı kovalent kristal olduğu için elektriği iletmez.",
          "en": "Since iron solid is a covalent crystal, it does not conduct electricity.",
          "de": "Da fester Eisen ein kovalenter Kristall ist, leitet er keinen Strom.",
          "fr": "Le fer solide étant un cristal covalent, il ne conduit pas l’électricité.",
          "ru": "Поскольку твердое железо представляет собой ковалентный кристалл, оно не проводит электричество.",
          "ar": "وبما أن الحديد الصلب عبارة عن بلورة تساهمية، فإنه لا يوصل الكهرباء.",
          "zh": "由于铁固体是共价晶体，因此它不导电。",
          "ku": "Ji ber ku hesin hişk krîstalek kovalent e, elektrîkê nagire."
        },
        {
          "tr": "Bağıl nem %100 olduğunda hava neme tamamen doymamıştır.",
          "en": "When the relative humidity is 100%, the air is not completely saturated with moisture.",
          "de": "Bei einer relativen Luftfeuchtigkeit von 100 % ist die Luft nicht vollständig mit Feuchtigkeit gesättigt.",
          "fr": "Lorsque l’humidité relative est de 100 %, l’air n’est pas complètement saturé d’humidité.",
          "ru": "При относительной влажности 100% воздух не полностью насыщен влагой.",
          "ar": "عندما تكون الرطوبة النسبية 100%، لا يكون الهواء مشبعًا تمامًا بالرطوبة.",
          "zh": "当相对湿度为100%时，空气中的水分尚未完全饱和。",
          "ku": "Dema ku nemahiya nisbî 100% be, hewa bi tevahî ji şilbûnê têr nabe."
        },
        {
          "tr": "Kaynayan etil alkolün buhar basıncı kaynayan suyunkinden daha büyüktür.",
          "en": "The vapor pressure of boiling ethyl alcohol is greater than that of boiling water.",
          "de": "Der Dampfdruck von siedendem Ethylalkohol ist höher als der von kochendem Wasser.",
          "fr": "La pression de vapeur de l’alcool éthylique bouillant est supérieure à celle de l’eau bouillante.",
          "ru": "Давление паров кипящего этилового спирта больше, чем у кипящей воды.",
          "ar": "يكون ضغط بخار الكحول الإيثيلي المغلي أكبر من ضغط بخار الماء المغلي.",
          "zh": "沸腾的乙醇的蒸气压大于沸水的蒸气压。",
          "ku": "Zexta buharê ya etilalkola kelandî ji ya ava kelandî mezintir e."
        },
        {
          "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
          "en": "Equilibrium vapor pressure increases as the external atmospheric pressure increases.",
          "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
          "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
          "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
          "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
          "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
          "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
        },
        {
          "tr": "Elmas ve kuvars (SiO2), kovalent ağ örgülü kristal katılara örnektir.",
          "en": "Diamond and quartz (SiO2) are examples of covalent networked crystalline solids.",
          "de": "Diamant und Quarz (SiO2) sind Beispiele für kovalent vernetzte kristalline Feststoffe.",
          "fr": "Le diamant et le quartz (SiO2) sont des exemples de solides cristallins en réseau covalent.",
          "ru": "Алмаз и кварц (SiO2) являются примерами кристаллических твердых тел с ковалентной сеткой.",
          "ar": "يعتبر الماس والكوارتز (SiO2) من الأمثلة على المواد الصلبة البلورية الشبكية التساهمية.",
          "zh": "金刚石和石英 (SiO2) 是共价网络结晶固体的例子。",
          "ku": "Almas û quartz (SiO2) mînakên tîrêjên krîstal ên bi tora kovalentî ne."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Elmas ve kuvars (SiO2), kovalent ağ örgülü kristal katılara örnektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Diamond and quartz (SiO2) are examples of covalent networked crystalline solids.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Diamant und Quarz (SiO2) sind Beispiele für kovalent vernetzte kristalline Feststoffe.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le diamant et le quartz (SiO2) sont des exemples de solides cristallins en réseau covalent.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Алмаз и кварц (SiO2) являются примерами кристаллических твердых тел с ковалентной сеткой.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يعتبر الماس والكوارتز (SiO2) من الأمثلة على المواد الصلبة البلورية الشبكية التساهمية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“金刚石和石英 (SiO2) 是共价网络结晶固体的例子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Almas û quartz (SiO2) mînakên tîrêjên krîstal ên bi tora kovalentî ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Maddenin Halleri sorularında karşılaşılan Gerçek Gaz konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering States of Matter, which assertion regarding Real Gas is correct?",
        "de": "Welche Feststellung bezüglich Echtes Gas ist nach den chemischen Gesetzmäßigkeiten von Aggregatzustände richtig?",
        "fr": "Dans les épreuves universitaires portant sur États de la Matière, quelle affirmation concernant Gaz réel est correcte?",
        "ru": "В экзаменационных заданиях по теме «Агрегатные состояния вещества», какое положение относительно «Реальный газ» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حالات المادة\"، أي حكم متعلق بـ \"الغاز الحقيقي\" يعتبر صحيحاً؟",
        "zh": "在高考“物态”经典考题中，下列有关“真实气体”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Rewşên Madeyê\" de, kîjan daraza li ser \"Gaza Rastî\" rast e?"
      },
      "options": [
        {
          "tr": "Kuru buz (katı CO2) ve buz (katı H2O) moleküler kristal katılardır.",
          "en": "Dry ice (solid CO2) and ice (solid H2O) are molecular crystalline solids.",
          "de": "Trockeneis (festes CO2) und Eis (festes H2O) sind molekulare kristalline Feststoffe.",
          "fr": "La neige carbonique (CO2 solide) et la glace (H2O solide) sont des solides cristallins moléculaires.",
          "ru": "Сухой лед (твердый CO2) и лед (твердый H2O) представляют собой молекулярные кристаллические твердые вещества.",
          "ar": "الثلج الجاف (CO2 الصلب) والثلج (H2O الصلب) عبارة عن مواد صلبة بلورية جزيئية.",
          "zh": "干冰（固体CO2）和冰（固体H2O）是分子结晶固体。",
          "ku": "Qeşa hişk (CO2 hişk) û qeşa (H2O hişk) madeyên krîstal ên molekulî ne."
        },
        {
          "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
          "en": "Evaporation occurs only at boiling temperature.",
          "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
          "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
          "ru": "Испарение происходит только при температуре кипения.",
          "ar": "يحدث التبخر فقط عند درجة حرارة الغليان.",
          "zh": "蒸发仅在沸腾温度下发生。",
          "ku": "Avhilandin tenê di germahiya kelandinê de pêk tê."
        },
        {
          "tr": "Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.",
          "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
          "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
          "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
          "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
          "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
          "zh": "等离子体状态不导电，也不受磁场影响。",
          "ku": "Rewşa plazmayê elektrîkê nake û ji qada magnetîsî bandor nake."
        },
        {
          "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
          "en": "The equilibrium vapor pressure of water in the wide container is greater than that in the narrow container.",
          "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
          "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
          "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
          "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
          "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
          "ku": "Pestoya hevsengiya buharê ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
        },
        {
          "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
          "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
          "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
          "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
          "ru": "Кипение – это просто испарение, происходящее на поверхности жидкости.",
          "ar": "الغليان هو ببساطة التبخر الذي يحدث على سطح السائل.",
          "zh": "沸腾只是发生在液体表面的蒸发。",
          "ku": "Kelandîn bi tenê evaporasyon e ku li rûyê şilê çêdibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kuru buz (katı CO2) ve buz (katı H2O) moleküler kristal katılardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Dry ice (solid CO2) and ice (solid H2O) are molecular crystalline solids.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Trockeneis (festes CO2) und Eis (festes H2O) sind molekulare kristalline Feststoffe.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La neige carbonique (CO2 solide) et la glace (H2O solide) sont des solides cristallins moléculaires.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Сухой лед (твердый CO2) и лед (твердый H2O) представляют собой молекулярные кристаллические твердые вещества.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الثلج الجاف (CO2 الصلب) والثلج (H2O الصلب) عبارة عن مواد صلبة بلورية جزيئية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“干冰（固体CO2）和冰（固体H2O）是分子结晶固体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Qeşa hişk (CO2 hişk) û qeşa (H2O hişk) madeyên krîstal ên molekulî ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin07",
      "stem": {
        "tr": "Aşağıda Maddenin Halleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Gaz ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of States of Matter, which statement about gas is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Aggregatzustände: Welche Aussage über Gas ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de États de la Matière, quelle affirmation relative à gaz est exacte?",
        "ru": "На основе фундаментальных положений темы «Агрегатные состояния вещества», какое суждение о «газ» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حالات المادة\"، أي عبارة حول \"غاز\" صحيحة؟",
        "zh": "基于“物态”的基础化学知识体系，下列关于“气体”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Rewşên Madeyê\", kîjan gotin derbarê \"gaz\" de rast e?"
      },
      "options": [
        {
          "tr": "Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.",
          "en": "Since the external pressure decreases in the pressure cooker, food cooks faster.",
          "de": "Da im Schnellkochtopf der Außendruck abnimmt, garen die Speisen schneller.",
          "fr": "Puisque la pression externe diminue dans la cocotte minute, les aliments cuisent plus rapidement.",
          "ru": "Поскольку в скороварке снижается внешнее давление, пища готовится быстрее.",
          "ar": "نظرًا لانخفاض الضغط الخارجي في قدر الضغط، يتم طهي الطعام بشكل أسرع.",
          "zh": "由于高压锅内的外部压力降低，食物煮得更快。",
          "ku": "Ji ber ku fişara derve di tenûrê de kêm dibe, xwarin zûtir çêdibe."
        },
        {
          "tr": "Yemek tuzu (NaCl) ve kireç taşı (CaCO3) iyonik kristal katılara örnektir.",
          "en": "Table salt (NaCl) and limestone (CaCO3) are examples of ionic crystalline solids.",
          "de": "Speisesalz (NaCl) und Kalkstein (CaCO3) sind Beispiele für ionische kristalline Feststoffe.",
          "fr": "Le sel de table (NaCl) et le calcaire (CaCO3) sont des exemples de solides cristallins ioniques.",
          "ru": "Поваренная соль (NaCl) и известняк (CaCO3) являются примерами ионных кристаллических твердых веществ.",
          "ar": "يعتبر ملح الطعام (NaCl) والحجر الجيري (CaCO3) من الأمثلة على المواد الصلبة البلورية الأيونية.",
          "zh": "食盐 (NaCl) 和石灰石 (CaCO3) 是离子结晶固体的例子。",
          "ku": "Xwêya sifrê (NaCl) û kevirê kilsin (CaCO3) mînakên hişk ên krîstal ên îyonî ne."
        },
        {
          "tr": "Çekim kuvveti yüksek olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
          "en": "Liquids with high gravitational force evaporate very quickly and have high vapor pressure.",
          "de": "Flüssigkeiten mit hoher Schwerkraft verdampfen sehr schnell und haben einen hohen Dampfdruck.",
          "fr": "Les liquides ayant une force gravitationnelle élevée s’évaporent très rapidement et ont une pression de vapeur élevée.",
          "ru": "Жидкости с высокой силой гравитации очень быстро испаряются и имеют высокое давление пара.",
          "ar": "تتبخر السوائل ذات قوة الجاذبية العالية بسرعة كبيرة ولها ضغط بخار مرتفع.",
          "zh": "具有高重力的液体蒸发得非常快并且具有高蒸气压。",
          "ku": "Şîrkên bi hêza gravîtasyonê ya bilind pir zû diherikin û xwedî tansiyona buharê ya bilind in."
        },
        {
          "tr": "Rüzgarlı havada çamaşırların kuruma süresi uzar.",
          "en": "In windy weather, the drying time of laundry takes longer.",
          "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
          "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
          "ru": "В ветреную погоду время высыхания белья увеличивается.",
          "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
          "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
          "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
        },
        {
          "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
          "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
          "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
          "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
          "ru": "С повышением температуры вязкость меда и глицерина увеличивается.",
          "ar": "مع ارتفاع درجة الحرارة، تزداد لزوجة العسل والجلسرين.",
          "zh": "随着温度升高，蜂蜜和甘油的粘度增加。",
          "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glycerin zêde dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Yemek tuzu (NaCl) ve kireç taşı (CaCO3) iyonik kristal katılara örnektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Table salt (NaCl) and limestone (CaCO3) are examples of ionic crystalline solids.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Speisesalz (NaCl) und Kalkstein (CaCO3) sind Beispiele für ionische kristalline Feststoffe.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le sel de table (NaCl) et le calcaire (CaCO3) sont des exemples de solides cristallins ioniques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поваренная соль (NaCl) и известняк (CaCO3) являются примерами ионных кристаллических твердых веществ.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يعتبر ملح الطعام (NaCl) والحجر الجيري (CaCO3) من الأمثلة على المواد الصلبة البلورية الأيونية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“食盐 (NaCl) 和石灰石 (CaCO3) 是离子结晶固体的例子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwêya sifrê (NaCl) û kevirê kilsin (CaCO3) mînakên hişk ên krîstal ên îyonî ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin08",
      "stem": {
        "tr": "Maddenin Halleri konusu kapsamında Süblimleşme ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of States of Matter, which of the following findings regarding Sublimation is scientifically verified?",
        "de": "Im Rahmen der Einheit Aggregatzustände: Welcher der folgenden Befunde zu Sublimation ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité États de la Matière, laquelle des constatations suivantes concernant Sublimation est scientifiquement vérifiée?",
        "ru": "В контексте темы «Агрегатные состояния вещества», какой из следующих выводов относительно «Сублимация» научно подтверждён?",
        "ar": "في سياق موضوع \"حالات المادة\"، أي من النتائج التالية المتعلقة بـ \"التسامي\" مثبتة علمياً؟",
        "zh": "在“物态”主题范畴内，下列关于“升华”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Rewşên Madeyê\" de, kîjan ji van encamên li ser \"Sublîmasyon\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Bağıl nem %100 olduğunda hava neme tamamen doymamıştır.",
          "en": "When the relative humidity is 100%, the air is not completely saturated with moisture.",
          "de": "Bei einer relativen Luftfeuchtigkeit von 100 % ist die Luft nicht vollständig mit Feuchtigkeit gesättigt.",
          "fr": "Lorsque l’humidité relative est de 100 %, l’air n’est pas complètement saturé d’humidité.",
          "ru": "При относительной влажности 100% воздух не полностью насыщен влагой.",
          "ar": "عندما تكون الرطوبة النسبية 100%، لا يكون الهواء مشبعًا تمامًا بالرطوبة.",
          "zh": "当相对湿度为100%时，空气中的水分尚未完全饱和。",
          "ku": "Dema ku nemahiya nisbî 100% be, hewa bi tevahî ji şilbûnê têr nabe."
        },
        {
          "tr": "Kaynayan etil alkolün buhar basıncı kaynayan suyunkinden daha büyüktür.",
          "en": "The vapor pressure of boiling ethyl alcohol is greater than that of boiling water.",
          "de": "Der Dampfdruck von siedendem Ethylalkohol ist höher als der von kochendem Wasser.",
          "fr": "La pression de vapeur de l’alcool éthylique bouillant est supérieure à celle de l’eau bouillante.",
          "ru": "Давление паров кипящего этилового спирта больше, чем у кипящей воды.",
          "ar": "يكون ضغط بخار الكحول الإيثيلي المغلي أكبر من ضغط بخار الماء المغلي.",
          "zh": "沸腾的乙醇的蒸气压大于沸水的蒸气压。",
          "ku": "Zexta buharê ya etilalkola kelandî ji ya ava kelandî mezintir e."
        },
        {
          "tr": "Demir, bakır ve altın metalik kristal sınıfındadır ve değerlik elektronları serbestçe hareket eder.",
          "en": "Iron, copper and gold are in the metallic crystal class and their valence electrons move freely.",
          "de": "Eisen, Kupfer und Gold gehören zur Klasse der metallischen Kristalle und ihre Valenzelektronen bewegen sich frei.",
          "fr": "Le fer, le cuivre et l’or appartiennent à la classe des cristaux métalliques et leurs électrons de valence se déplacent librement.",
          "ru": "Железо, медь и золото относятся к классу металлических кристаллов, и их валентные электроны движутся свободно.",
          "ar": "يقع الحديد والنحاس والذهب في فئة البلورات المعدنية وتتحرك إلكترونات التكافؤ الخاصة بها بحرية.",
          "zh": "铁、铜和金属于金属晶体类，它们的价电子可以自由移动。",
          "ku": "Hesin, sifir û zêr di çîna krîstalên metalîk de ne û elektronên wan ên valence bi serbestî tevdigerin."
        },
        {
          "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
          "en": "Equilibrium vapor pressure increases as the external atmospheric pressure increases.",
          "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
          "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
          "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
          "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
          "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
          "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
        },
        {
          "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
          "en": "Glass has an ionic crystal structure and a sharp melting point.",
          "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
          "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
          "ru": "Стекло имеет ионно-кристаллическую структуру и резкую температуру плавления.",
          "ar": "يحتوي الزجاج على بنية بلورية أيونية ونقطة انصهار حادة.",
          "zh": "玻璃具有离子晶体结构和明确的熔点。",
          "ku": "Glass xwedan avahiyek krîstal a yonîkî û xalek helînê ya tûj e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Demir, bakır ve altın metalik kristal sınıfındadır ve değerlik elektronları serbestçe hareket eder.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Iron, copper and gold are in the metallic crystal class and their valence electrons move freely.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Eisen, Kupfer und Gold gehören zur Klasse der metallischen Kristalle und ihre Valenzelektronen bewegen sich frei.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le fer, le cuivre et l’or appartiennent à la classe des cristaux métalliques et leurs électrons de valence se déplacent librement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Железо, медь и золото относятся к классу металлических кристаллов, и их валентные электроны движутся свободно.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يقع الحديد والنحاس والذهب في فئة البلورات المعدنية وتتحرك إلكترونات التكافؤ الخاصة بها بحرية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“铁、铜和金属于金属晶体类，它们的价电子可以自由移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hesin, sifir û zêr di çîna krîstalên metalîk de ne û elektronên wan ên valence bi serbestî tevdigerin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin09",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Maddenin Halleri ünitesinde ele alınan Buharlaşma hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit States of Matter, which statement about evaporation is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Aggregatzustände: Welche Aussage über Verdunstung ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de États de la Matière, quelle affirmation relative à évaporation est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Агрегатные состояния вещества», какое утверждение о «испарение» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حالات المادة\"، أي عبارة حول \"التبخر\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“物态”单元中关于“蒸发”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Rewşên Madeyê\", kîjan gotin li ser \"evaporation\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.",
          "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
          "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
          "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
          "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
          "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
          "zh": "等离子体状态不导电，也不受磁场影响。",
          "ku": "Rewşa plazmayê elektrîkê nake û ji qada magnetîsî bandor nake."
        },
        {
          "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
          "en": "The equilibrium vapor pressure of water in the wide container is greater than that in the narrow container.",
          "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
          "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
          "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
          "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
          "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
          "ku": "Pestoya hevsengiya buharê ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
        },
        {
          "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
          "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
          "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
          "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
          "ru": "Кипение – это просто испарение, происходящее на поверхности жидкости.",
          "ar": "الغليان هو ببساطة التبخر الذي يحدث على سطح السائل.",
          "zh": "沸腾只是发生在液体表面的蒸发。",
          "ku": "Kelandîn bi tenê evaporasyon e ku li rûyê şilê çêdibe."
        },
        {
          "tr": "Buharlaşma her sıcaklıkta gerçekleşirken, kaynama belirli bir sıcaklıkta tüm sıvıda gerçekleşir.",
          "en": "While evaporation occurs at any temperature, boiling occurs in the entire liquid at a particular temperature.",
          "de": "Während es bei jeder Temperatur zu einer Verdampfung kommt, kommt es bei einer bestimmten Temperatur zum Sieden der gesamten Flüssigkeit.",
          "fr": "Alors que l’évaporation se produit à n’importe quelle température, l’ébullition se produit dans tout le liquide à une température particulière.",
          "ru": "Хотя испарение происходит при любой температуре, при определенной температуре происходит кипение всей жидкости.",
          "ar": "في حين أن التبخر يحدث عند أي درجة حرارة، فإن الغليان يحدث في السائل بأكمله عند درجة حرارة معينة.",
          "zh": "虽然蒸发在任何温度下都会发生，但在特定温度下整个液体都会发生沸腾。",
          "ku": "Dema ku evaporasyon di her germahiyê de çêdibe, di germahiyek taybetî de kelandin di tevahiya şilê de pêk tê."
        },
        {
          "tr": "Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.",
          "en": "Quartz is a molecular solid held together by van der Waals bonds.",
          "de": "Quarz ist ein molekularer Feststoff, der durch Van-der-Waals-Bindungen zusammengehalten wird.",
          "fr": "Le quartz est un solide moléculaire maintenu par des liaisons de Van der Waals.",
          "ru": "Кварц – это молекулярное твердое вещество, скрепленное ван-дер-ваальсовыми связями.",
          "ar": "الكوارتز عبارة عن مادة صلبة جزيئية متماسكة بواسطة روابط فان دير فالس.",
          "zh": "石英是一种通过范德华键结合在一起的分子固体。",
          "ku": "Quartz hişkek molekular e ku ji hêla girêkên van der Waals ve tê girtin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Buharlaşma her sıcaklıkta gerçekleşirken, kaynama belirli bir sıcaklıkta tüm sıvıda gerçekleşir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"While evaporation occurs at any temperature, boiling occurs in the entire liquid at a particular temperature.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Während es bei jeder Temperatur zu einer Verdampfung kommt, kommt es bei einer bestimmten Temperatur zum Sieden der gesamten Flüssigkeit.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Alors que l’évaporation se produit à n’importe quelle température, l’ébullition se produit dans tout le liquide à une température particulière.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хотя испарение происходит при любой температуре, при определенной температуре происходит кипение всей жидкости.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في حين أن التبخر يحدث عند أي درجة حرارة، فإن الغليان يحدث في السائل بأكمله عند درجة حرارة معينة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“虽然蒸发在任何温度下都会发生，但在特定温度下整个液体都会发生沸腾。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku evaporasyon di her germahiyê de çêdibe, di germahiyek taybetî de kelandin di tevahiya şilê de pêk tê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Maddenin Halleri konusunu işlerken Amorf Katı üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on States of Matter, which statement regarding Amorphous Solid represents the correct answer?",
        "de": "Welche Aussage zu Amorpher Feststoff stellt im Kontext von Aggregatzustände die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de États de la Matière, quelle proposition sur Solide amorphe constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Агрегатные состояния вещества», какой ответ относительно «Аморфное твердое вещество» является правильным?",
        "ar": "أثناء دراسة موضوع \"حالات المادة\" مخبرياً، أي إجابة بخصوص \"صلبة غير متبلورة\" تمثل الإجابة الصحيحة؟",
        "zh": "在“物态”实验探究与教学分析中，针对“非晶固体”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Rewşên Madeyê\" de, kîjan bersiv derbarê \"Amorphous Solid\" de rast e?"
      },
      "options": [
        {
          "tr": "Çekim kuvveti yüksek olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
          "en": "Liquids with high gravitational force evaporate very quickly and have high vapor pressure.",
          "de": "Flüssigkeiten mit hoher Schwerkraft verdampfen sehr schnell und haben einen hohen Dampfdruck.",
          "fr": "Les liquides ayant une force gravitationnelle élevée s’évaporent très rapidement et ont une pression de vapeur élevée.",
          "ru": "Жидкости с высокой силой гравитации очень быстро испаряются и имеют высокое давление пара.",
          "ar": "تتبخر السوائل ذات قوة الجاذبية العالية بسرعة كبيرة ولها ضغط بخار مرتفع.",
          "zh": "具有高重力的液体蒸发得非常快并且具有高蒸气压。",
          "ku": "Şîrkên bi hêza gravîtasyonê ya bilind pir zû diherikin û xwedî tansiyona buharê ya bilind in."
        },
        {
          "tr": "Rüzgarlı havada çamaşırların kuruma süresi uzar.",
          "en": "In windy weather, the drying time of laundry takes longer.",
          "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
          "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
          "ru": "В ветреную погоду время высыхания белья увеличивается.",
          "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
          "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
          "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
        },
        {
          "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
          "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
          "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
          "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
          "ru": "С повышением температуры вязкость меда и глицерина увеличивается.",
          "ar": "مع ارتفاع درجة الحرارة، تزداد لزوجة العسل والجلسرين.",
          "zh": "随着温度升高，蜂蜜和甘油的粘度增加。",
          "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glycerin zêde dibe."
        },
        {
          "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
          "en": "Dry ice is a very hard crystal with a covalent network.",
          "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
          "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
          "ru": "Сухой лед — очень твердый кристалл с ковалентной сетью.",
          "ar": "الثلج الجاف عبارة عن بلورة صلبة للغاية ولها شبكة تساهمية.",
          "zh": "干冰是一种非常坚硬的晶体，具有共价网络。",
          "ku": "Qeşaya hişk krîstaleke pir hişk û bi tevneke kovalent e."
        },
        {
          "tr": "Dış basınç azaldıkça (yüksek dağlara çıkıldıkça) suyun kaynama noktası düşer.",
          "en": "As the external pressure decreases (as you climb higher mountains), the boiling point of water decreases.",
          "de": "Wenn der äußere Druck abnimmt (beim Aufstieg auf höhere Berge), sinkt der Siedepunkt des Wassers.",
          "fr": "À mesure que la pression externe diminue (à mesure que vous gravissez des montagnes plus hautes), le point d’ébullition de l’eau diminue.",
          "ru": "По мере уменьшения внешнего давления (по мере подъема на более высокие горы) температура кипения воды снижается.",
          "ar": "ومع انخفاض الضغط الخارجي (أثناء تسلق الجبال العالية)، تنخفض درجة غليان الماء.",
          "zh": "随着外部压力降低（当你爬上更高的山时），水的沸点降低。",
          "ku": "Her ku zexta derve kêm dibe (her ku hûn hilkişin çiyayên bilind), xala kelandinê ya avê kêm dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Dış basınç azaldıkça (yüksek dağlara çıkıldıkça) suyun kaynama noktası düşer.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the external pressure decreases (as you climb higher mountains), the boiling point of water decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn der äußere Druck abnimmt (beim Aufstieg auf höhere Berge), sinkt der Siedepunkt des Wassers.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la pression externe diminue (à mesure que vous gravissez des montagnes plus hautes), le point d’ébullition de l’eau diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «По мере уменьшения внешнего давления (по мере подъема на более высокие горы) температура кипения воды снижается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ومع انخفاض الضغط الخارجي (أثناء تسلق الجبال العالية)، تنخفض درجة غليان الماء.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着外部压力降低（当你爬上更高的山时），水的沸点降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku zexta derve kêm dibe (her ku hûn hilkişin çiyayên bilind), xala kelandinê ya avê kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin11",
      "stem": {
        "tr": "Kimya dersinde Maddenin Halleri ünitesi incelenirken Viskozite ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit States of Matter, which of the following propositions concerning viscosity is a verified scientific fact?",
        "de": "Bei der Untersuchung von Aggregatzustände: Welche Behauptung bezüglich Viskosität entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité États de la Matière, laquelle des affirmations suivantes concernant viscosité est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Агрегатные состояния вещества», какое из следующих суждений о «вязкость» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"حالات المادة\"، أي من الأحكام التالية المتعلقة بـ \"اللزوجة\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“物态”核心规律时，下列关于“粘度”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Rewşên Madeyê\" tê kirin, kîjan daraza li ser \"vîskozîtî\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Bağıl nem, havadaki mevcut su buharı kısmi basıncının o sıcaklıktaki doygun buhar basıncına oranıdır.",
          "en": "Relative humidity is the ratio of the partial pressure of water vapor in the air to the saturated vapor pressure at that temperature.",
          "de": "Die relative Luftfeuchtigkeit ist das Verhältnis des Partialdrucks des Wasserdampfs in der Luft zum Sättigungsdampfdruck bei dieser Temperatur.",
          "fr": "L'humidité relative est le rapport entre la pression partielle de vapeur d'eau dans l'air et la pression de vapeur saturée à cette température.",
          "ru": "Относительная влажность — это отношение парциального давления водяного пара в воздухе к давлению насыщенного пара при этой температуре.",
          "ar": "الرطوبة النسبية هي نسبة الضغط الجزئي لبخار الماء في الهواء إلى ضغط البخار المشبع عند درجة الحرارة تلك.",
          "zh": "相对湿度是空气中水蒸气的分压与该温度下的饱和水蒸气压的比值。",
          "ku": "Nemiya nisbî rêjeya zexta qismî ya buhara avê ya li hewayê bi tansiyona têrbûyî ya wê germahiyê ye."
        },
        {
          "tr": "Kaynayan etil alkolün buhar basıncı kaynayan suyunkinden daha büyüktür.",
          "en": "The vapor pressure of boiling ethyl alcohol is greater than that of boiling water.",
          "de": "Der Dampfdruck von siedendem Ethylalkohol ist höher als der von kochendem Wasser.",
          "fr": "La pression de vapeur de l’alcool éthylique bouillant est supérieure à celle de l’eau bouillante.",
          "ru": "Давление паров кипящего этилового спирта больше, чем у кипящей воды.",
          "ar": "يكون ضغط بخار الكحول الإيثيلي المغلي أكبر من ضغط بخار الماء المغلي.",
          "zh": "沸腾的乙醇的蒸气压大于沸水的蒸气压。",
          "ku": "Zexta buharê ya etilalkola kelandî ji ya ava kelandî mezintir e."
        },
        {
          "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
          "en": "Equilibrium vapor pressure increases as the external atmospheric pressure increases.",
          "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
          "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
          "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
          "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
          "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
          "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
        },
        {
          "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
          "en": "Glass has an ionic crystal structure and a sharp melting point.",
          "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
          "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
          "ru": "Стекло имеет ионно-кристаллическую структуру и резкую температуру плавления.",
          "ar": "يحتوي الزجاج على بنية بلورية أيونية ونقطة انصهار حادة.",
          "zh": "玻璃具有离子晶体结构和明确的熔点。",
          "ku": "Glass xwedan avahiyek krîstal a yonîkî û xalek helînê ya tûj e."
        },
        {
          "tr": "NaCl moleküler katı sınıfında yer alır.",
          "en": "NaCl is in the molecular solid class.",
          "de": "NaCl gehört zur Klasse der molekularen Feststoffe.",
          "fr": "NaCl appartient à la classe des solides moléculaires.",
          "ru": "NaCl относится к классу молекулярных твердых веществ.",
          "ar": "NaCl موجود في الطبقة الصلبة الجزيئية.",
          "zh": "氯化钠属于分子固体类。",
          "ku": "NaCl di çîna molekulê ya hişk de ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Bağıl nem, havadaki mevcut su buharı kısmi basıncının o sıcaklıktaki doygun buhar basıncına oranıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Relative humidity is the ratio of the partial pressure of water vapor in the air to the saturated vapor pressure at that temperature.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die relative Luftfeuchtigkeit ist das Verhältnis des Partialdrucks des Wasserdampfs in der Luft zum Sättigungsdampfdruck bei dieser Temperatur.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'humidité relative est le rapport entre la pression partielle de vapeur d'eau dans l'air et la pression de vapeur saturée à cette température.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Относительная влажность — это отношение парциального давления водяного пара в воздухе к давлению насыщенного пара при этой температуре.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الرطوبة النسبية هي نسبة الضغط الجزئي لبخار الماء في الهواء إلى ضغط البخار المشبع عند درجة الحرارة تلك.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“相对湿度是空气中水蒸气的分压与该温度下的饱和水蒸气压的比值。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Nemiya nisbî rêjeya zexta qismî ya buhara avê ya li hewayê bi tansiyona têrbûyî ya wê germahiyê ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Maddenin Halleri konusundaki temel kimyasal kurallar çerçevesinde Buhar Basıncı kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Steam Pressure within the fundamental principles of States of Matter?",
        "de": "Welche Aussage beschreibt das Konzept Dampfdruck im Rahmen von Aggregatzustände am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Pression de vapeur selon les lois de États de la Matière?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Давление пара» в рамках темы «Агрегатные состояния вещества»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"ضغط البخار\" ضمن قواعد \"حالات المادة\"؟",
        "zh": "根据“物态”的基本化学原理，下列哪项阐述能最准确地界定“蒸汽压力”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Zexta Steam\" di çarçoveya prensîbên \"Rewşên Madeyê\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
          "en": "The equilibrium vapor pressure of water in the wide container is greater than that in the narrow container.",
          "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
          "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
          "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
          "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
          "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
          "ku": "Pestoya hevsengiya buharê ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
        },
        {
          "tr": "Plazma hali nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.",
          "en": "The plasma state is an electrically conductive state in which neutral atoms, ions, free electrons and photons coexist.",
          "de": "Der Plasmazustand ist ein elektrisch leitender Zustand, in dem neutrale Atome, Ionen, freie Elektronen und Photonen nebeneinander existieren.",
          "fr": "L’état plasma est un état électriquement conducteur dans lequel coexistent des atomes neutres, des ions, des électrons libres et des photons.",
          "ru": "Состояние плазмы — это электропроводящее состояние, в котором сосуществуют нейтральные атомы, ионы, свободные электроны и фотоны.",
          "ar": "حالة البلازما هي حالة موصلة للكهرباء تتعايش فيها الذرات والأيونات والإلكترونات الحرة والفوتونات المحايدة.",
          "zh": "等离子体状态是中性原子、离子、自由电子和光子共存的导电状态。",
          "ku": "Rewşa plazmayê rewşek elektrîkê ye ku tê de atomên bêalî, îyon, elektronên azad û foton bi hev re dijîn."
        },
        {
          "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
          "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
          "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
          "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
          "ru": "Кипение – это просто испарение, происходящее на поверхности жидкости.",
          "ar": "الغليان هو ببساطة التبخر الذي يحدث على سطح السائل.",
          "zh": "沸腾只是发生在液体表面的蒸发。",
          "ku": "Kelandîn bi tenê evaporasyon e ku li rûyê şilê çêdibe."
        },
        {
          "tr": "Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.",
          "en": "Quartz is a molecular solid held together by van der Waals bonds.",
          "de": "Quarz ist ein molekularer Feststoff, der durch Van-der-Waals-Bindungen zusammengehalten wird.",
          "fr": "Le quartz est un solide moléculaire maintenu par des liaisons de Van der Waals.",
          "ru": "Кварц – это молекулярное твердое вещество, скрепленное ван-дер-ваальсовыми связями.",
          "ar": "الكوارتز عبارة عن مادة صلبة جزيئية متماسكة بواسطة روابط فان دير فالس.",
          "zh": "石英是一种通过范德华键结合在一起的分子固体。",
          "ku": "Quartz hişkek molekular e ku ji hêla girêkên van der Waals ve tê girtin."
        },
        {
          "tr": "Demir katısı kovalent kristal olduğu için elektriği iletmez.",
          "en": "Since iron solid is a covalent crystal, it does not conduct electricity.",
          "de": "Da fester Eisen ein kovalenter Kristall ist, leitet er keinen Strom.",
          "fr": "Le fer solide étant un cristal covalent, il ne conduit pas l’électricité.",
          "ru": "Поскольку твердое железо представляет собой ковалентный кристалл, оно не проводит электричество.",
          "ar": "وبما أن الحديد الصلب عبارة عن بلورة تساهمية، فإنه لا يوصل الكهرباء.",
          "zh": "由于铁固体是共价晶体，因此它不导电。",
          "ku": "Ji ber ku hesin hişk krîstalek kovalent e, elektrîkê nagire."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Plazma hali nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The plasma state is an electrically conductive state in which neutral atoms, ions, free electrons and photons coexist.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Plasmazustand ist ein elektrisch leitender Zustand, in dem neutrale Atome, Ionen, freie Elektronen und Photonen nebeneinander existieren.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L’état plasma est un état électriquement conducteur dans lequel coexistent des atomes neutres, des ions, des électrons libres et des photons.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Состояние плазмы — это электропроводящее состояние, в котором сосуществуют нейтральные атомы, ионы, свободные электроны и фотоны.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"حالة البلازما هي حالة موصلة للكهرباء تتعايش فيها الذرات والأيونات والإلكترونات الحرة والفوتونات المحايدة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“等离子体状态是中性原子、离子、自由电子和光子共存的导电状态。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rewşa plazmayê rewşek elektrîkê ye ku tê de atomên bêalî, îyon, elektronên azad û foton bi hev re dijîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Maddenin Halleri sorularında karşılaşılan Kaynama konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering States of Matter, which assertion regarding boiling is correct?",
        "de": "Welche Feststellung bezüglich kochend ist nach den chemischen Gesetzmäßigkeiten von Aggregatzustände richtig?",
        "fr": "Dans les épreuves universitaires portant sur États de la Matière, quelle affirmation concernant bouillante est correcte?",
        "ru": "В экзаменационных заданиях по теме «Агрегатные состояния вещества», какое положение относительно «кипение» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"حالات المادة\"، أي حكم متعلق بـ \"الغليان\" يعتبر صحيحاً؟",
        "zh": "在高考“物态”经典考题中，下列有关“沸腾”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Rewşên Madeyê\" de, kîjan daraza li ser \"kelandin\" rast e?"
      },
      "options": [
        {
          "tr": "Rüzgarlı havada çamaşırların kuruma süresi uzar.",
          "en": "In windy weather, the drying time of laundry takes longer.",
          "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
          "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
          "ru": "В ветреную погоду время высыхания белья увеличивается.",
          "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
          "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
          "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
        },
        {
          "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
          "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
          "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
          "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
          "ru": "С повышением температуры вязкость меда и глицерина увеличивается.",
          "ar": "مع ارتفاع درجة الحرارة، تزداد لزوجة العسل والجلسرين.",
          "zh": "随着温度升高，蜂蜜和甘油的粘度增加。",
          "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glycerin zêde dibe."
        },
        {
          "tr": "Moleküller arası çekim kuvveti güçlü olan sıvıların viskozitesi yüksek, buhar basıncı düşüktür.",
          "en": "Liquids with strong intermolecular forces have high viscosity and low vapor pressure.",
          "de": "Flüssigkeiten mit starken intermolekularen Kräften haben eine hohe Viskosität und einen niedrigen Dampfdruck.",
          "fr": "Les liquides dotés de fortes forces intermoléculaires ont une viscosité élevée et une faible pression de vapeur.",
          "ru": "Жидкости с сильными межмолекулярными силами имеют высокую вязкость и низкое давление пара.",
          "ar": "السوائل ذات القوى الجزيئية القوية لها لزوجة عالية وضغط بخار منخفض.",
          "zh": "分子间力强的液体具有高粘度和低蒸气压。",
          "ku": "Şîrkên bi hêzên navmolekularî yên xurt xwedî vîskozîtîya bilind û tansiyona vaporê ya kêm in."
        },
        {
          "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
          "en": "Dry ice is a very hard crystal with a covalent network.",
          "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
          "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
          "ru": "Сухой лед — очень твердый кристалл с ковалентной сетью.",
          "ar": "الثلج الجاف عبارة عن بلورة صلبة للغاية ولها شبكة تساهمية.",
          "zh": "干冰是一种非常坚硬的晶体，具有共价网络。",
          "ku": "Qeşaya hişk krîstaleke pir hişk û bi tevneke kovalent e."
        },
        {
          "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
          "en": "Evaporation occurs only at boiling temperature.",
          "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
          "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
          "ru": "Испарение происходит только при температуре кипения.",
          "ar": "يحدث التبخر فقط عند درجة حرارة الغليان.",
          "zh": "蒸发仅在沸腾温度下发生。",
          "ku": "Avhilandin tenê di germahiya kelandinê de pêk tê."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Moleküller arası çekim kuvveti güçlü olan sıvıların viskozitesi yüksek, buhar basıncı düşüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Liquids with strong intermolecular forces have high viscosity and low vapor pressure.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Flüssigkeiten mit starken intermolekularen Kräften haben eine hohe Viskosität und einen niedrigen Dampfdruck.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les liquides dotés de fortes forces intermoléculaires ont une viscosité élevée et une faible pression de vapeur.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Жидкости с сильными межмолекулярными силами имеют высокую вязкость и низкое давление пара.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"السوائل ذات القوى الجزيئية القوية لها لزوجة عالية وضغط بخار منخفض.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分子间力强的液体具有高粘度和低蒸气压。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Şîrkên bi hêzên navmolekularî yên xurt xwedî vîskozîtîya bilind û tansiyona vaporê ya kêm in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin14",
      "stem": {
        "tr": "Aşağıda Maddenin Halleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Gerçek Gaz ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of States of Matter, which statement about Real Gas is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Aggregatzustände: Welche Aussage über Echtes Gas ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de États de la Matière, quelle affirmation relative à Gaz réel est exacte?",
        "ru": "На основе фундаментальных положений темы «Агрегатные состояния вещества», какое суждение о «Реальный газ» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"حالات المادة\"، أي عبارة حول \"الغاز الحقيقي\" صحيحة؟",
        "zh": "基于“物态”的基础化学知识体系，下列关于“真实气体”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Rewşên Madeyê\", kîjan gotin derbarê \"Gaza Rastî\" de rast e?"
      },
      "options": [
        {
          "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
          "en": "Equilibrium vapor pressure increases as the external atmospheric pressure increases.",
          "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
          "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
          "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
          "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
          "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
          "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
        },
        {
          "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
          "en": "Glass has an ionic crystal structure and a sharp melting point.",
          "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
          "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
          "ru": "Стекло имеет ионно-кристаллическую структуру и резкую температуру плавления.",
          "ar": "يحتوي الزجاج على بنية بلورية أيونية ونقطة انصهار حادة.",
          "zh": "玻璃具有离子晶体结构和明确的熔点。",
          "ku": "Glass xwedan avahiyek krîstal a yonîkî û xalek helînê ya tûj e."
        },
        {
          "tr": "NaCl moleküler katı sınıfında yer alır.",
          "en": "NaCl is in the molecular solid class.",
          "de": "NaCl gehört zur Klasse der molekularen Feststoffe.",
          "fr": "NaCl appartient à la classe des solides moléculaires.",
          "ru": "NaCl относится к классу молекулярных твердых веществ.",
          "ar": "NaCl موجود في الطبقة الصلبة الجزيئية.",
          "zh": "氯化钠属于分子固体类。",
          "ku": "NaCl di çîna molekulê ya hişk de ye."
        },
        {
          "tr": "Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).",
          "en": "The equilibrium vapor pressures of all pure liquids boiling in the same environment are equal to each other (equal to the external pressure).",
          "de": "Die Gleichgewichtsdampfdrücke aller reinen Flüssigkeiten, die in derselben Umgebung sieden, sind einander gleich (gleich dem Außendruck).",
          "fr": "Les pressions de vapeur à l'équilibre de tous les liquides purs bouillant dans le même environnement sont égales les unes aux autres (égales à la pression externe).",
          "ru": "Равновесные давления паров всех чистых жидкостей, кипящих в одной среде, равны друг другу (равны внешнему давлению).",
          "ar": "إن ضغوط البخار المتوازنة لجميع السوائل النقية التي تغلي في نفس البيئة تكون متساوية مع بعضها البعض (مساوية للضغط الخارجي).",
          "zh": "在同一环境中沸腾的所有纯液体的平衡蒸气压彼此相等（等于外部压力）。",
          "ku": "Zextên buharê yên hevseng ên hemî şilekên pak ên ku di heman hawîrdorê de diqelînin bi hevûdu re (wek zexta derve) wekhev in."
        },
        {
          "tr": "Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.",
          "en": "Since the external pressure decreases in the pressure cooker, food cooks faster.",
          "de": "Da im Schnellkochtopf der Außendruck abnimmt, garen die Speisen schneller.",
          "fr": "Puisque la pression externe diminue dans la cocotte minute, les aliments cuisent plus rapidement.",
          "ru": "Поскольку в скороварке снижается внешнее давление, пища готовится быстрее.",
          "ar": "نظرًا لانخفاض الضغط الخارجي في قدر الضغط، يتم طهي الطعام بشكل أسرع.",
          "zh": "由于高压锅内的外部压力降低，食物煮得更快。",
          "ku": "Ji ber ku fişara derve di tenûrê de kêm dibe, xwarin zûtir çêdibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The equilibrium vapor pressures of all pure liquids boiling in the same environment are equal to each other (equal to the external pressure).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Gleichgewichtsdampfdrücke aller reinen Flüssigkeiten, die in derselben Umgebung sieden, sind einander gleich (gleich dem Außendruck).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les pressions de vapeur à l'équilibre de tous les liquides purs bouillant dans le même environnement sont égales les unes aux autres (égales à la pression externe).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Равновесные давления паров всех чистых жидкостей, кипящих в одной среде, равны друг другу (равны внешнему давлению).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن ضغوط البخار المتوازنة لجميع السوائل النقية التي تغلي في نفس البيئة تكون متساوية مع بعضها البعض (مساوية للضغط الخارجي).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在同一环境中沸腾的所有纯液体的平衡蒸气压彼此相等（等于外部压力）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zextên buharê yên hevseng ên hemî şilekên pak ên ku di heman hawîrdorê de diqelînin bi hevûdu re (wek zexta derve) wekhev in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin15",
      "stem": {
        "tr": "Maddenin Halleri konusu kapsamında Gaz ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of States of Matter, which of the following findings regarding gas is scientifically verified?",
        "de": "Im Rahmen der Einheit Aggregatzustände: Welcher der folgenden Befunde zu Gas ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité États de la Matière, laquelle des constatations suivantes concernant gaz est scientifiquement vérifiée?",
        "ru": "В контексте темы «Агрегатные состояния вещества», какой из следующих выводов относительно «газ» научно подтверждён?",
        "ar": "في سياق موضوع \"حالات المادة\"، أي من النتائج التالية المتعلقة بـ \"غاز\" مثبتة علمياً؟",
        "zh": "在“物态”主题范畴内，下列关于“气体”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Rewşên Madeyê\" de, kîjan ji van encamên li ser \"gaz\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
          "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
          "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
          "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
          "ru": "Кипение – это просто испарение, происходящее на поверхности жидкости.",
          "ar": "الغليان هو ببساطة التبخر الذي يحدث على سطح السائل.",
          "zh": "沸腾只是发生在液体表面的蒸发。",
          "ku": "Kelandîn bi tenê evaporasyon e ku li rûyê şilê çêdibe."
        },
        {
          "tr": "Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.",
          "en": "Quartz is a molecular solid held together by van der Waals bonds.",
          "de": "Quarz ist ein molekularer Feststoff, der durch Van-der-Waals-Bindungen zusammengehalten wird.",
          "fr": "Le quartz est un solide moléculaire maintenu par des liaisons de Van der Waals.",
          "ru": "Кварц – это молекулярное твердое вещество, скрепленное ван-дер-ваальсовыми связями.",
          "ar": "الكوارتز عبارة عن مادة صلبة جزيئية متماسكة بواسطة روابط فان دير فالس.",
          "zh": "石英是一种通过范德华键结合在一起的分子固体。",
          "ku": "Quartz hişkek molekular e ku ji hêla girêkên van der Waals ve tê girtin."
        },
        {
          "tr": "Demir katısı kovalent kristal olduğu için elektriği iletmez.",
          "en": "Since iron solid is a covalent crystal, it does not conduct electricity.",
          "de": "Da fester Eisen ein kovalenter Kristall ist, leitet er keinen Strom.",
          "fr": "Le fer solide étant un cristal covalent, il ne conduit pas l’électricité.",
          "ru": "Поскольку твердое железо представляет собой ковалентный кристалл, оно не проводит электричество.",
          "ar": "وبما أن الحديد الصلب عبارة عن بلورة تساهمية، فإنه لا يوصل الكهرباء.",
          "zh": "由于铁固体是共价晶体，因此它不导电。",
          "ku": "Ji ber ku hesin hişk krîstalek kovalent e, elektrîkê nagire."
        },
        {
          "tr": "Bağıl nem %100 olduğunda hava neme tamamen doymamıştır.",
          "en": "When the relative humidity is 100%, the air is not completely saturated with moisture.",
          "de": "Bei einer relativen Luftfeuchtigkeit von 100 % ist die Luft nicht vollständig mit Feuchtigkeit gesättigt.",
          "fr": "Lorsque l’humidité relative est de 100 %, l’air n’est pas complètement saturé d’humidité.",
          "ru": "При относительной влажности 100% воздух не полностью насыщен влагой.",
          "ar": "عندما تكون الرطوبة النسبية 100%، لا يكون الهواء مشبعًا تمامًا بالرطوبة.",
          "zh": "当相对湿度为100%时，空气中的水分尚未完全饱和。",
          "ku": "Dema ku nemahiya nisbî 100% be, hewa bi tevahî ji şilbûnê têr nabe."
        },
        {
          "tr": "Sıvı yüzey alanı arttıkça buharlaşma hızı artar fakat denge buhar basıncı değişmez.",
          "en": "As the liquid surface area increases, the evaporation rate increases, but the equilibrium vapor pressure does not change.",
          "de": "Mit zunehmender Flüssigkeitsoberfläche nimmt die Verdampfungsrate zu, der Gleichgewichtsdampfdruck ändert sich jedoch nicht.",
          "fr": "À mesure que la surface du liquide augmente, le taux d’évaporation augmente, mais la pression de vapeur à l’équilibre ne change pas.",
          "ru": "С увеличением площади поверхности жидкости скорость испарения увеличивается, но равновесное давление пара не меняется.",
          "ar": "مع زيادة مساحة سطح السائل، يزداد معدل التبخر، ولكن ضغط البخار المتوازن لا يتغير.",
          "zh": "随着液体表面积的增加，蒸发速率增加，但平衡蒸气压不改变。",
          "ku": "Her ku qada rûbera şilekê zêde dibe, rêjeya evaporasyonê zêde dibe, lê tansiyona buharê ya hevsengiyê naguhere."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Sıvı yüzey alanı arttıkça buharlaşma hızı artar fakat denge buhar basıncı değişmez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the liquid surface area increases, the evaporation rate increases, but the equilibrium vapor pressure does not change.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Flüssigkeitsoberfläche nimmt die Verdampfungsrate zu, der Gleichgewichtsdampfdruck ändert sich jedoch nicht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la surface du liquide augmente, le taux d’évaporation augmente, mais la pression de vapeur à l’équilibre ne change pas.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «С увеличением площади поверхности жидкости скорость испарения увеличивается, но равновесное давление пара не меняется.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مع زيادة مساحة سطح السائل، يزداد معدل التبخر، ولكن ضغط البخار المتوازن لا يتغير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着液体表面积的增加，蒸发速率增加，但平衡蒸气压不改变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku qada rûbera şilekê zêde dibe, rêjeya evaporasyonê zêde dibe, lê tansiyona buharê ya hevsengiyê naguhere.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u04-twin16",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Maddenin Halleri ünitesinde ele alınan Süblimleşme hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit States of Matter, which statement about Sublimation is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Aggregatzustände: Welche Aussage über Sublimation ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de États de la Matière, quelle affirmation relative à Sublimation est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Агрегатные состояния вещества», какое утверждение о «Сублимация» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"حالات المادة\"، أي عبارة حول \"التسامي\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“物态”单元中关于“升华”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Rewşên Madeyê\", kîjan gotin li ser \"Sublîmasyon\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Rüzgarlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.",
          "en": "In windy weather, the evaporation rate increases because vapor molecules on the surface are removed.",
          "de": "Bei windigem Wetter erhöht sich die Verdunstungsrate, da Dampfmoleküle an der Oberfläche entfernt werden.",
          "fr": "Par temps venteux, le taux d’évaporation augmente car les molécules de vapeur à la surface sont éliminées.",
          "ru": "В ветреную погоду скорость испарения увеличивается за счет удаления молекул пара с поверхности.",
          "ar": "وفي الطقس العاصف، يزداد معدل التبخر بسبب إزالة جزيئات البخار الموجودة على السطح.",
          "zh": "在大风天气中，由于表面的蒸气分子被去除，蒸发率会增加。",
          "ku": "Di hewaya bayê de, ji ber ku molekulên buharê yên li ser rûyê erdê têne rakirin, rêjeya evaporasyonê zêde dibe."
        },
        {
          "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
          "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
          "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
          "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
          "ru": "С повышением температуры вязкость меда и глицерина увеличивается.",
          "ar": "مع ارتفاع درجة الحرارة، تزداد لزوجة العسل والجلسرين.",
          "zh": "随着温度升高，蜂蜜和甘油的粘度增加。",
          "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glycerin zêde dibe."
        },
        {
          "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
          "en": "Dry ice is a very hard crystal with a covalent network.",
          "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
          "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
          "ru": "Сухой лед — очень твердый кристалл с ковалентной сетью.",
          "ar": "الثلج الجاف عبارة عن بلورة صلبة للغاية ولها شبكة تساهمية.",
          "zh": "干冰是一种非常坚硬的晶体，具有共价网络。",
          "ku": "Qeşaya hişk krîstaleke pir hişk û bi tevneke kovalent e."
        },
        {
          "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
          "en": "Evaporation occurs only at boiling temperature.",
          "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
          "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
          "ru": "Испарение происходит только при температуре кипения.",
          "ar": "يحدث التبخر فقط عند درجة حرارة الغليان.",
          "zh": "蒸发仅在沸腾温度下发生。",
          "ku": "Avhilandin tenê di germahiya kelandinê de pêk tê."
        },
        {
          "tr": "Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.",
          "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
          "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
          "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
          "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
          "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
          "zh": "等离子体状态不导电，也不受磁场影响。",
          "ku": "Rewşa plazmayê elektrîkê nake û ji qada magnetîsî bandor nake."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Rüzgarlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In windy weather, the evaporation rate increases because vapor molecules on the surface are removed.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei windigem Wetter erhöht sich die Verdunstungsrate, da Dampfmoleküle an der Oberfläche entfernt werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Par temps venteux, le taux d’évaporation augmente car les molécules de vapeur à la surface sont éliminées.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В ветреную погоду скорость испарения увеличивается за счет удаления молекул пара с поверхности.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وفي الطقس العاصف، يزداد معدل التبخر بسبب إزالة جزيئات البخار الموجودة على السطح.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在大风天气中，由于表面的蒸气分子被去除，蒸发率会增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di hewaya bayê de, ji ber ku molekulên buharê yên li ser rûyê erdê têne rakirin, rêjeya evaporasyonê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit04;
