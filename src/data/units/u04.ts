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
        "tr": "Denge buhar basıncı sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınca ve yüzey alanına bağlı değildir.",
        "en": "Equilibrium vapour pressure depends on the type, purity and temperature of the liquid; It does NOT depend on external pressure and surface area.",
        "de": "Der Gleichgewichtsdampfdruck hängt von der Art, Reinheit und Temperatur der Flüssigkeit ab; Es hängt NICHT vom äußeren Druck und der Oberfläche ab.",
        "fr": "La pression de vapeur à l'équilibre dépend du type, de la pureté et de la température du liquide ; Cela ne dépend PAS de la pression externe et de la surface.",
        "ru": "Равновесное давление пара зависит от типа, чистоты и температуры жидкости; Оно НЕ зависит от внешнего давления и площади поверхности.",
        "ar": "ويعتمد ضغط البخار المتوازن على نوع السائل ونقائه ودرجة حرارته؛ لا يعتمد على الضغط الخارجي ومساحة السطح.",
        "zh": "平衡蒸气压取决于液体的类型、纯度和温度；它不依赖于外部压力和表面积。",
        "ku": "Zexta buharê ya hevsengiyê bi celeb, paqijî û germahiya şilê ve girêdayî ye; Ew bi zexta derveyî û qada rûxê ve girêdayî NE."
      },
      "trap": {
        "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
        "en": "Equilibrium vapour pressure increases as the external atmospheric pressure increases.",
        "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
        "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
        "ru": "Равновесное давление пара увеличивается по мере увеличения внешнего атмосферного давления.",
        "ar": "يزداد ضغط البخار المتوازن مع زيادة الضغط الجوي الخارجي.",
        "zh": "平衡蒸气压随着外部大气压力的增加而增加。",
        "ku": "Zexta buharê ya hevseng her ku tansiyona atmosferê ya derve zêde dibe zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Denge buhar basıncı, buharlaşma ve yoğuşma hızlarının eşitlendiği anda buharın yaptığı basınçtır ve yalnızca sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınç kaynama noktasını değiştirir, buhar basıncını değiştirmez.",
        "en": "Equilibrium vapour pressure is the pressure of the vapour when evaporation and condensation rates are equal, and it depends only on the kind of liquid, its purity and the temperature; external pressure changes the boiling point, not the vapour pressure.",
        "de": "Der Gleichgewichtsdampfdruck ist der Druck des Dampfes, wenn Verdunstungs- und Kondensationsgeschwindigkeit gleich sind; er hängt nur von der Art der Flüssigkeit, ihrer Reinheit und der Temperatur ab. Der äußere Druck ändert den Siedepunkt, nicht den Dampfdruck.",
        "fr": "La pression de vapeur d'équilibre est la pression de la vapeur lorsque les vitesses d'évaporation et de condensation sont égales ; elle ne dépend que de la nature du liquide, de sa pureté et de la température. La pression extérieure modifie le point d'ébullition, pas la pression de vapeur.",
        "ru": "Равновесное давление пара — это давление пара при равенстве скоростей испарения и конденсации; оно зависит только от природы жидкости, её чистоты и температуры. Внешнее давление меняет температуру кипения, а не давление пара.",
        "ar": "ضغط البخار المتزن هو ضغط البخار عندما تتساوى سرعتا التبخر والتكاثف، ولا يعتمد إلا على نوع السائل ونقائه ودرجة الحرارة؛ أما الضغط الخارجي فيغيّر درجة الغليان لا ضغط البخار.",
        "zh": "平衡蒸气压是蒸发速率与凝结速率相等时蒸气产生的压强，只取决于液体的种类、纯度和温度；外界压强改变的是沸点，而不是蒸气压。",
        "ku": "Zexta buharê ya hevseng zexta buharê ye dema leza buharbûn û hilmbûnê wekhev dibe û tenê bi cureyê şileyê, safbûna wê û germahiyê ve girêdayî ye; zexta derve xala kelandinê diguherîne, ne zexta buharê."
      },
      "osymTip": {
        "tr": "ÖSYM tuzağı: Buhar basıncı dış basınca bağlı değildir!",
        "en": "ÖSYM trap: Vapour pressure does not depend on external pressure!",
        "de": "ÖSYM-Falle: Dampfdruck ist nicht vom Außendruck abhängig!",
        "fr": "Piège ÖSYM : La pression de vapeur ne dépend pas de la pression extérieure !",
        "ru": "Ловушка на экзамене: Давление пара не зависит от внешнего давления!",
        "ar": "مصيدة ÖSYM: ضغط البخار لا يعتمد على الضغط الخارجي!",
        "zh": "高考避坑指南：蒸气压不依赖于外部压力！",
        "ku": "Xefika ÖSYM: Zexta vaporê bi zexta derve ve namîne!"
      }
    },
    {
      "id": "u04-f02",
      "fact": {
        "tr": "Kaynama olayı sıvının iç buhar basıncının dış atmosfer basıncına eşit olduğu anda gerçekleşir.",
        "en": "Boiling occurs when the internal vapour pressure of the liquid equals the external atmospheric pressure.",
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
      },
      "whyTrapIsFalse": {
        "tr": "Yalnızca yüzeyde gerçekleşen olay buharlaşmadır; kaynamada buhar kabarcıkları sıvının her yerinde oluşur.",
        "en": "The process that happens only at the surface is evaporation; in boiling, vapour bubbles form throughout the liquid.",
        "de": "Nur an der Oberfläche findet die Verdunstung statt; beim Sieden bilden sich Dampfblasen in der ganzen Flüssigkeit.",
        "fr": "C'est l'évaporation qui ne se produit qu'en surface ; lors de l'ébullition, des bulles de vapeur se forment dans tout le liquide.",
        "ru": "Только на поверхности происходит испарение; при кипении пузырьки пара образуются во всём объёме жидкости.",
        "ar": "العملية التي تحدث عند السطح فقط هي التبخر؛ أما في الغليان فتتكوّن فقاعات البخار في جميع أجزاء السائل.",
        "zh": "只在表面发生的是蒸发；沸腾时整个液体内部都产生气泡。",
        "ku": "Bûyera ku tenê li ser rûyê çêdibe buharbûn e; di kelandinê de kulîlkên buharê li her derê şileyê çêdibin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Isınan moleküllerin kinetik enerjisi artar ve aralarındaki çekimi daha kolay yener; bu yüzden bal ve gliserin ısıtılınca daha kolay akar, yani viskozite artmaz, azalır.",
        "en": "Heated molecules gain kinetic energy and overcome their mutual attraction more easily, so honey and glycerol flow more easily when warmed: viscosity decreases, not increases.",
        "de": "Erwärmte Moleküle haben mehr kinetische Energie und überwinden ihre Anziehung leichter; Honig und Glycerin fließen daher warm leichter – die Viskosität sinkt, statt zu steigen.",
        "fr": "Chauffées, les molécules gagnent de l'énergie cinétique et surmontent plus facilement leur attraction : le miel et le glycérol coulent mieux à chaud, la viscosité diminue au lieu d'augmenter.",
        "ru": "При нагревании кинетическая энергия молекул растёт, и они легче преодолевают взаимное притяжение; поэтому мёд и глицерин текут легче — вязкость не растёт, а уменьшается.",
        "ar": "عند التسخين تزداد الطاقة الحركية للجزيئات فتتغلب على تجاذبها بسهولة أكبر، لذا يسيل العسل والغليسرين بسهولة أكبر، أي تقل اللزوجة ولا تزداد.",
        "zh": "受热后分子动能增大，更容易克服分子间吸引，所以蜂蜜和甘油加热后更容易流动，黏度不是增大而是减小。",
        "ku": "Enerjiya kînetîk a molekulên germbûyî zêde dibe û kişandina navbera wan hêsantir bindest dikin; loma hingiv û glîserîn dema germ dibin hêsantir diherikin, ango vîskozîte zêde nabe, kêm dibe."
      }
    },
    {
      "id": "u04-f04",
      "fact": {
        "tr": "Cam, plastik, tereyağı ve lastik belirli bir erime noktası olmayan amorf katılardır.",
        "en": "Glass, plastic, butter and rubber are amorphous solids that do not have a specific melting point.",
        "de": "Glas, Kunststoff, Butter und Gummi sind amorphe Feststoffe, die keinen bestimmten Schmelzpunkt haben.",
        "fr": "Le verre, le plastique, le beurre et le caoutchouc sont des solides amorphes qui n'ont pas de point de fusion spécifique.",
        "ru": "Стекло, пластик, сливочное масло и резина представляют собой аморфные твердые вещества, не имеющие определенной температуры плавления.",
        "ar": "الزجاج والبلاستيك والزبدة والمطاط هي مواد صلبة غير متبلورة ليس لها نقطة انصهار محددة.",
        "zh": "玻璃、塑料、黄油和橡胶是无定形固体，没有特定的熔点。",
        "ku": "Cam, plastîk, nivîşk û gomûk madeyên amorf in ku xwedî xala helînê ya taybetî nînin."
      },
      "trap": {
        "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
        "en": "Glass has an ionic crystal structure and a sharp melting point.",
        "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
        "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
        "ru": "Стекло имеет ионно-кристаллическую структуру и резкую температуру плавления.",
        "ar": "يحتوي الزجاج على بنية بلورية أيونية ونقطة انصهار حادة.",
        "zh": "玻璃具有离子晶体结构和明确的熔点。",
        "ku": "Cam xwedan avahiyek krîstal a yonîkî û xalek helînê ya tûj e."
      },
      "whyTrapIsFalse": {
        "tr": "Camın tanecikleri düzenli bir kristal örgü oluşturmaz, rastgele dizilir; bu nedenle cam belirli bir sıcaklıkta değil, bir sıcaklık aralığında yumuşayarak erir.",
        "en": "The particles of glass do not form an ordered crystal lattice but are randomly arranged, so glass softens and melts over a temperature range rather than at a fixed temperature.",
        "de": "Die Teilchen des Glases bilden kein geordnetes Kristallgitter, sondern sind ungeordnet; Glas erweicht daher über einen Temperaturbereich statt bei einer festen Temperatur.",
        "fr": "Les particules du verre ne forment pas de réseau cristallin ordonné mais sont disposées au hasard : le verre se ramollit et fond sur un intervalle de températures, pas à une température fixe.",
        "ru": "Частицы стекла не образуют упорядоченной кристаллической решётки, а расположены хаотично, поэтому стекло размягчается и плавится в интервале температур, а не при определённой температуре.",
        "ar": "لا تكوّن دقائق الزجاج شبكة بلورية منتظمة بل تترتب عشوائياً، ولذلك يلين الزجاج وينصهر ضمن مدى من درجات الحرارة لا عند درجة محددة.",
        "zh": "玻璃的微粒没有形成有序的晶格，而是无序排列，所以玻璃在一个温度范围内逐渐软化熔化，而没有固定的熔点。",
        "ku": "Perçikên camê torê krîstalê ya rêkûpêk çênakin, bi awayekî tevlihev rêz dibin; loma cam ne di germahiyeke diyar de, di navberekê germahiyê de nerm dibe û dihele."
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
        "ku": "Almas û quartz (SiO2) mînakên madeyên hişk ên krîstal ên bi tora kovalentî ne."
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
      },
      "whyTrapIsFalse": {
        "tr": "Kuvarsta (SiO2) ayrı moleküller yoktur; Si ve O atomları kovalent bağlarla üç boyutlu bir ağ hâlinde bağlıdır. Bu yüzden kuvars çok sert ve erime noktası çok yüksektir.",
        "en": "Quartz (SiO2) contains no separate molecules; Si and O atoms are covalently linked in a three-dimensional network. That is why quartz is very hard and has a very high melting point.",
        "de": "Quarz (SiO2) enthält keine einzelnen Moleküle; Si- und O-Atome sind kovalent zu einem dreidimensionalen Netz verknüpft. Deshalb ist Quarz sehr hart und hat einen sehr hohen Schmelzpunkt.",
        "fr": "Le quartz (SiO2) ne contient pas de molécules distinctes ; les atomes Si et O sont liés de façon covalente en un réseau tridimensionnel. C'est pourquoi il est très dur et fond à très haute température.",
        "ru": "В кварце (SiO2) нет отдельных молекул: атомы Si и O связаны ковалентными связями в трёхмерную сетку. Поэтому кварц очень твёрдый и имеет очень высокую температуру плавления.",
        "ar": "لا توجد جزيئات منفصلة في الكوارتز (SiO2)؛ بل ترتبط ذرات Si وO بروابط تساهمية في شبكة ثلاثية الأبعاد، ولذلك فهو شديد الصلابة ودرجة انصهاره عالية جداً.",
        "zh": "石英（SiO2）中没有独立的分子，Si 和 O 原子以共价键连成三维网状结构，所以石英非常坚硬、熔点很高。",
        "ku": "Di kuvarsê (SiO2) de molekulên cuda tune ne; atomên Si û O bi girêdanên kovalent wekî torekê sê-alî bi hev ve girêdayî ne. Ji ber vê yekê kuvars pir hişk e û xala helînê pir bilind e."
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
      },
      "whyTrapIsFalse": {
        "tr": "Kuru buzda CO2 molekülleri birbirine yalnızca zayıf London kuvvetleriyle tutunur; bu nedenle yumuşaktır ve oda koşullarında kolayca süblimleşir.",
        "en": "In dry ice the CO2 molecules are held together only by weak London forces; it is therefore soft and sublimes easily at room conditions.",
        "de": "In Trockeneis halten die CO2-Moleküle nur durch schwache London-Kräfte zusammen; es ist daher weich und sublimiert bei Raumbedingungen leicht.",
        "fr": "Dans la glace carbonique, les molécules de CO2 ne sont unies que par de faibles forces de London ; elle est donc tendre et se sublime facilement dans les conditions ambiantes.",
        "ru": "В сухом льду молекулы CO2 удерживаются лишь слабыми лондоновскими силами, поэтому он мягкий и легко возгоняется при комнатных условиях.",
        "ar": "في الجليد الجاف تتماسك جزيئات CO2 بقوى لندن الضعيفة فقط، لذا فهو طري ويتسامى بسهولة في الظروف العادية.",
        "zh": "干冰中 CO2 分子之间只靠微弱的色散力结合，所以质软，在常温常压下容易升华。",
        "ku": "Di cemeda hişk de molekulên CO2 tenê bi hêzên London ên qels li hev digirin; loma nerm e û di şertên odeyê de bi hêsanî sublîme dibe."
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
        "ar": "ينتمي NaCl إلى فئة المواد الصلبة الجزيئية.",
        "zh": "氯化钠属于分子固体类。",
        "ku": "NaCl di çîna madeyên hişk ên molekulî de ye."
      },
      "whyTrapIsFalse": {
        "tr": "NaCl'de molekül yoktur; Na+ ve Cl- iyonları iyonik bağlarla kristal örgüde dizilir. Yüksek erime noktası ve eriyiğinin elektriği iletmesi iyonik katı olduğunu gösterir.",
        "en": "NaCl has no molecules; Na+ and Cl- ions are arranged in a crystal lattice held by ionic bonds. Its high melting point and the conductivity of its melt show it is an ionic solid.",
        "de": "NaCl enthält keine Moleküle; Na+- und Cl--Ionen bilden ein durch Ionenbindungen zusammengehaltenes Kristallgitter. Hoher Schmelzpunkt und leitende Schmelze zeigen, dass es ein Ionenkristall ist.",
        "fr": "NaCl ne contient pas de molécules ; les ions Na+ et Cl- forment un réseau cristallin maintenu par des liaisons ioniques. Son point de fusion élevé et la conductivité de son état fondu montrent que c'est un solide ionique.",
        "ru": "В NaCl нет молекул: ионы Na+ и Cl- образуют кристаллическую решётку, удерживаемую ионными связями. Высокая температура плавления и электропроводность расплава показывают, что это ионное вещество.",
        "ar": "لا توجد جزيئات في NaCl؛ بل تترتب أيونات Na+ وCl- في شبكة بلورية تربطها روابط أيونية، وتدل درجة انصهاره العالية وتوصيل مصهوره للكهرباء على أنه صلب أيوني.",
        "zh": "NaCl 中没有分子，Na+ 和 Cl- 通过离子键排列成晶格。熔点高、熔融态能导电，说明它是离子晶体。",
        "ku": "Di NaCl de molekul tune; îyonên Na+ û Cl- bi girêdanên îyonîk di torê krîstalê de rêz dibin. Xala helînê ya bilind û guhezîna elektrîkê ya helyaya wê nîşan didin ku hişkeke îyonîk e."
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
        "ku": "Ji ber ku hesinê hişk krîstaleke kovalent e, elektrîkê naguhezîne."
      },
      "whyTrapIsFalse": {
        "tr": "Demir metalik bir kristaldir; değerlik elektronları metal örgüsü içinde serbestçe hareket ettiği için katı hâlde de elektriği iyi iletir.",
        "en": "Iron is a metallic crystal; its valence electrons move freely through the metal lattice, so it conducts electricity well even as a solid.",
        "de": "Eisen ist ein Metallkristall; seine Valenzelektronen bewegen sich frei im Metallgitter, daher leitet es auch im festen Zustand gut.",
        "fr": "Le fer est un cristal métallique ; ses électrons de valence se déplacent librement dans le réseau, il conduit donc bien l'électricité même à l'état solide.",
        "ru": "Железо — металлический кристалл; его валентные электроны свободно движутся в решётке, поэтому оно хорошо проводит ток и в твёрдом состоянии.",
        "ar": "الحديد بلورة فلزية تتحرك إلكترونات تكافئها بحرية داخل الشبكة، لذا يوصل الكهرباء جيداً حتى في الحالة الصلبة.",
        "zh": "铁是金属晶体，价电子能在金属晶格中自由移动，所以固态时也能很好地导电。",
        "ku": "Hesin krîstaleke metalî ye; elektronên valansê di nava torê metalê de bi serbestî dilivin, loma di rewşa hişk de jî elektrîkê baş diguhezîne."
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
      },
      "whyTrapIsFalse": {
        "tr": "Yeterli kinetik enerjiye sahip yüzey molekülleri her sıcaklıkta sıvıdan kopabilir; örneğin oda sıcaklığındaki su birikintisi zamanla kurur. Belirli bir sıcaklıkta gerçekleşen olay kaynamadır.",
        "en": "Surface molecules with enough kinetic energy can escape from a liquid at any temperature; a puddle at room temperature dries up, for example. It is boiling that happens at a definite temperature.",
        "de": "Oberflächenmoleküle mit genügend kinetischer Energie können bei jeder Temperatur entweichen; eine Pfütze trocknet z. B. bei Raumtemperatur. An eine bestimmte Temperatur gebunden ist das Sieden.",
        "fr": "Les molécules de surface ayant assez d'énergie cinétique peuvent quitter le liquide à toute température ; une flaque sèche par exemple à température ambiante. C'est l'ébullition qui se produit à une température déterminée.",
        "ru": "Поверхностные молекулы с достаточной кинетической энергией покидают жидкость при любой температуре: например, лужа высыхает при комнатной температуре. При определённой температуре происходит кипение.",
        "ar": "يمكن لجزيئات السطح التي تملك طاقة حركية كافية أن تغادر السائل في أيّ درجة حرارة؛ فبركة الماء مثلاً تجف في درجة حرارة الغرفة. أما الذي يحدث عند درجة محددة فهو الغليان.",
        "zh": "具有足够动能的表面分子在任何温度下都能逸出液体，例如室温下的水洼会慢慢变干。在确定温度下发生的是沸腾。",
        "ku": "Molekulên rûyê ku enerjiya kînetîk a têr wan heye di her germahiyê de dikarin ji şileyê veqetin; mînak gola avê di germahiya odeyê de hişk dibe. Bûyera ku di germahiyeke diyar de çêdibe kelandin e."
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
        "ku": "Ji ber ku zexta derve di beroşa zextê de kêm dibe, xwarin zûtir çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "Düdüklü tencerede kapak buharı hapsettiği için iç basınç düşmez, artar; artan basınç suyun kaynama noktasını 100 °C'nin üzerine çıkarır ve yemek daha yüksek sıcaklıkta pişer.",
        "en": "In a pressure cooker the lid traps the steam, so the pressure inside rises rather than falls; the higher pressure raises water's boiling point above 100 °C and food cooks at a higher temperature.",
        "de": "Im Schnellkochtopf hält der Deckel den Dampf zurück, der Innendruck steigt also, statt zu sinken; dadurch liegt der Siedepunkt über 100 °C und das Essen gart bei höherer Temperatur.",
        "fr": "Dans un autocuiseur, le couvercle retient la vapeur : la pression intérieure augmente au lieu de diminuer, ce qui élève le point d'ébullition au-dessus de 100 °C et les aliments cuisent à plus haute température.",
        "ru": "В скороварке крышка удерживает пар, поэтому давление внутри не падает, а растёт; повышенное давление поднимает температуру кипения воды выше 100 °C, и пища готовится при более высокой температуре.",
        "ar": "في قدر الضغط يحبس الغطاء البخار فيرتفع الضغط الداخلي ولا ينخفض، فترتفع درجة غليان الماء فوق 100 °C ويُطهى الطعام عند درجة حرارة أعلى.",
        "zh": "高压锅的锅盖把蒸汽封住，锅内压强不是降低而是升高，压强升高使水的沸点超过 100 °C，食物在更高温度下煮熟。",
        "ku": "Di beroşa bi zext de qapax buharê digire, loma zexta hundir kêm nabe, zêde dibe; zexta zêde xala kelandinê ya avê ji 100 °C bilindtir dike û xwarin di germahiyeke bilindtir de dipije."
      }
    },
    {
      "id": "u04-f11",
      "fact": {
        "tr": "Bağıl nem, havadaki mevcut su buharı kısmi basıncının o sıcaklıktaki doygun buhar basıncına oranıdır.",
        "en": "Relative humidity is the ratio of the partial pressure of water vapour in the air to the saturated vapour pressure at that temperature.",
        "de": "Die relative Luftfeuchtigkeit ist das Verhältnis des Partialdrucks des Wasserdampfs in der Luft zum Sättigungsdampfdruck bei dieser Temperatur.",
        "fr": "L'humidité relative est le rapport entre la pression partielle de vapeur d'eau dans l'air et la pression de vapeur saturée à cette température.",
        "ru": "Относительная влажность — это отношение парциального давления водяного пара в воздухе к давлению насыщенного пара при этой температуре.",
        "ar": "الرطوبة النسبية هي نسبة الضغط الجزئي لبخار الماء في الهواء إلى ضغط البخار المشبع عند درجة الحرارة تلك.",
        "zh": "相对湿度是空气中水蒸气的分压与该温度下的饱和水蒸气压的比值。",
        "ku": "Nemiya nisbî rêjeya zexta qismî ya buhara avê ya li hewayê bi tansiyona têrbûyî ya wê germahiyê ye."
      },
      "trap": {
        "tr": "Bağıl nemin %100 olması havanın tamamen su buharından oluştuğu anlamına gelir.",
        "en": "A relative humidity of 100% means the air consists entirely of water vapour.",
        "de": "Eine relative Luftfeuchtigkeit von 100 % bedeutet, dass die Luft vollständig aus Wasserdampf besteht.",
        "fr": "Une humidité relative de 100 % signifie que l'air est entièrement constitué de vapeur d'eau.",
        "ru": "Относительная влажность 100 % означает, что воздух целиком состоит из водяного пара.",
        "ar": "الرطوبة النسبية 100% تعني أن الهواء يتكوّن كلياً من بخار الماء.",
        "zh": "相对湿度为 100% 表示空气完全由水蒸气组成。",
        "ku": "Şiliya nisbî ya %100 tê wê wateyê ku hewa bi tevahî ji buhara avê pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Bağıl nem, havadaki su buharı basıncının o sıcaklıktaki doygun buhar basıncına oranıdır; %100 değeri havanın tamamen sudan oluştuğunu değil, daha fazla su buharı alamayacak kadar doyduğunu gösterir.",
        "en": "Relative humidity is the ratio of the water-vapour pressure in the air to the saturated vapour pressure at that temperature; 100% does not mean the air is made entirely of water, but that it is saturated and can hold no more water vapour.",
        "de": "Die relative Luftfeuchtigkeit ist das Verhältnis des Wasserdampfdrucks der Luft zum Sättigungsdampfdruck bei dieser Temperatur; 100 % bedeutet nicht, dass die Luft nur aus Wasser besteht, sondern dass sie gesättigt ist und keinen weiteren Dampf aufnehmen kann.",
        "fr": "L'humidité relative est le rapport entre la pression de vapeur d'eau de l'air et la pression de vapeur saturante à cette température ; 100 % ne signifie pas que l'air n'est que de l'eau, mais qu'il est saturé et ne peut plus recevoir de vapeur.",
        "ru": "Относительная влажность — отношение давления водяного пара в воздухе к давлению насыщенного пара при данной температуре; 100 % означает не то, что воздух состоит только из воды, а то, что он насыщен и больше пара принять не может.",
        "ar": "الرطوبة النسبية هي نسبة ضغط بخار الماء في الهواء إلى ضغط البخار المشبع عند تلك الدرجة؛ وقيمة 100% لا تعني أن الهواء ماء كله، بل أنه مشبع ولا يستطيع حمل مزيد من البخار.",
        "zh": "相对湿度是空气中水蒸气压强与该温度下饱和蒸气压之比；100% 并不表示空气全由水组成，而是表示空气已饱和，不能再容纳更多水蒸气。",
        "ku": "Şiliya nisbî rêjeya zexta buhara avê ya di hewayê de li hember zexta buharê ya têr a wê germahiyê ye; %100 nayê wê wateyê ku hewa bi tevahî ji avê pêk tê, lê nîşan dide ku hewa têr bûye û êdî buhar nastîne."
      }
    },
    {
      "id": "u04-f12",
      "fact": {
        "tr": "Plazma hâli nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.",
        "en": "The plasma state is an electrically conductive state in which neutral atoms, ions, free electrons and photons coexist.",
        "de": "Der Plasmazustand ist ein elektrisch leitender Zustand, in dem neutrale Atome, Ionen, freie Elektronen und Photonen nebeneinander existieren.",
        "fr": "L’état plasma est un état électriquement conducteur dans lequel coexistent des atomes neutres, des ions, des électrons libres et des photons.",
        "ru": "Состояние плазмы — это электропроводящее состояние, в котором сосуществуют нейтральные атомы, ионы, свободные электроны и фотоны.",
        "ar": "حالة البلازما حالة موصلة للكهرباء تتعايش فيها الذرات المتعادلة والأيونات والإلكترونات الحرة والفوتونات.",
        "zh": "等离子体状态是中性原子、离子、自由电子和光子共存的导电状态。",
        "ku": "Rewşa plazmayê rewşeke ku elektrîkê diguhezîne ye û tê de atomên bêalî, îyon, elektronên azad û foton bi hev re hene."
      },
      "trap": {
        "tr": "Plazma hâli elektriği iletmez ve manyetik alandan etkilenmez.",
        "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
        "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
        "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
        "ru": "Состояние плазмы не проводит электричество и не подвержено влиянию магнитного поля.",
        "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
        "zh": "等离子体状态不导电，也不受磁场影响。",
        "ku": "Rewşa plazmayê elektrîkê naguhezîne û ji qada magnetîsî bandor nabe."
      },
      "whyTrapIsFalse": {
        "tr": "Plazmada serbest elektronlar ve iyonlar gibi yüklü tanecikler bulunur; bu yüklü tanecikler sayesinde plazma elektriği iletir ve manyetik alandan etkilenir.",
        "en": "Plasma contains charged particles such as free electrons and ions; thanks to them it conducts electricity and is affected by magnetic fields.",
        "de": "Plasma enthält geladene Teilchen wie freie Elektronen und Ionen; dadurch leitet es Strom und wird von Magnetfeldern beeinflusst.",
        "fr": "Le plasma contient des particules chargées comme des électrons libres et des ions ; grâce à elles il conduit l'électricité et subit l'action des champs magnétiques.",
        "ru": "В плазме есть заряженные частицы — свободные электроны и ионы; благодаря им плазма проводит ток и реагирует на магнитное поле.",
        "ar": "تحتوي البلازما على دقائق مشحونة كالإلكترونات الحرة والأيونات، وبفضلها توصل الكهرباء وتتأثر بالمجال المغناطيسي.",
        "zh": "等离子体中含有自由电子和离子等带电微粒，因此能导电，并受磁场影响。",
        "ku": "Di plazmayê de perçikên barkirî yên wekî elektronên serbest û îyonan hene; bi saya wan plazma elektrîkê diguhezîne û ji qada magnetîk bandor dibe."
      }
    },
    {
      "id": "u04-f13",
      "fact": {
        "tr": "Moleküller arası çekim kuvveti güçlü olan sıvıların viskozitesi yüksek, buhar basıncı düşüktür.",
        "en": "Liquids with strong intermolecular forces have high viscosity and low vapour pressure.",
        "de": "Flüssigkeiten mit starken intermolekularen Kräften haben eine hohe Viskosität und einen niedrigen Dampfdruck.",
        "fr": "Les liquides dotés de fortes forces intermoléculaires ont une viscosité élevée et une faible pression de vapeur.",
        "ru": "Жидкости с сильными межмолекулярными силами имеют высокую вязкость и низкое давление пара.",
        "ar": "السوائل ذات القوى الجزيئية القوية لها لزوجة عالية وضغط بخار منخفض.",
        "zh": "分子间力强的液体具有高粘度和低蒸气压。",
        "ku": "Şilekên bi hêzên navmolekularî yên xurt xwedî vîskozîtîya bilind û tansiyona vaporê ya kêm in."
      },
      "trap": {
        "tr": "Moleküller arası çekim kuvveti güçlü olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
        "en": "Liquids with strong intermolecular forces evaporate very quickly and have high vapour pressure.",
        "de": "Flüssigkeiten mit starken zwischenmolekularen Kräften verdampfen sehr schnell und haben einen hohen Dampfdruck.",
        "fr": "Les liquides à fortes forces intermoléculaires s'évaporent très rapidement et ont une pression de vapeur élevée.",
        "ru": "Жидкости с сильным межмолекулярным притяжением очень быстро испаряются и имеют высокое давление пара.",
        "ar": "السوائل ذات قوى التجاذب القوية بين الجزيئات تتبخر بسرعة كبيرة ولها ضغط بخار مرتفع.",
        "zh": "分子间作用力强的液体蒸发得非常快，蒸气压高。",
        "ku": "Şilekên ku hêzên kêşanê yên navmolekulî yên xurt hene pir zû hilm dibin û zexta wan a buharê bilind e."
      },
      "whyTrapIsFalse": {
        "tr": "Moleküller arası çekim güçlü olduğunda moleküllerin sıvıdan kopması zorlaşır; bu yüzden böyle sıvılar yavaş buharlaşır ve buhar basınçları düşüktür.",
        "en": "When intermolecular attraction is strong, it is harder for molecules to escape from the liquid, so such liquids evaporate slowly and have low vapour pressures.",
        "de": "Bei starker zwischenmolekularer Anziehung entweichen Moleküle schwerer aus der Flüssigkeit; solche Flüssigkeiten verdunsten langsam und haben einen niedrigen Dampfdruck.",
        "fr": "Quand l'attraction intermoléculaire est forte, les molécules quittent plus difficilement le liquide : ces liquides s'évaporent lentement et ont une faible pression de vapeur.",
        "ru": "При сильном межмолекулярном притяжении молекулам труднее покинуть жидкость, поэтому такие жидкости испаряются медленно и имеют низкое давление пара.",
        "ar": "عندما يكون التجاذب بين الجزيئات قوياً يصعب عليها مغادرة السائل، لذا تتبخر هذه السوائل ببطء ويكون ضغط بخارها منخفضاً.",
        "zh": "分子间吸引力强时，分子难以脱离液体，所以这类液体蒸发慢，蒸气压低。",
        "ku": "Dema kişandina navbera molekulan xurt be, veqetîna molekulan ji şileyê zehmet dibe; loma şileyên weha hêdî dibuhirin û zexta buhara wan nizm e."
      }
    },
    {
      "id": "u04-f14",
      "fact": {
        "tr": "Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).",
        "en": "The equilibrium vapour pressures of all pure liquids boiling in the same environment are equal to each other (equal to the external pressure).",
        "de": "Die Gleichgewichtsdampfdrücke aller reinen Flüssigkeiten, die in derselben Umgebung sieden, sind einander gleich (gleich dem Außendruck).",
        "fr": "Les pressions de vapeur à l'équilibre de tous les liquides purs bouillant dans le même environnement sont égales les unes aux autres (égales à la pression externe).",
        "ru": "Равновесные давления паров всех чистых жидкостей, кипящих в одной среде, равны друг другу (равны внешнему давлению).",
        "ar": "إن ضغوط البخار المتوازنة لجميع السوائل النقية التي تغلي في نفس البيئة تكون متساوية مع بعضها البعض (مساوية للضغط الخارجي).",
        "zh": "在同一环境中沸腾的所有纯液体的平衡蒸气压彼此相等（等于外部压力）。",
        "ku": "Zextên buharê yên hevseng ên hemî şilekên pak ên ku di heman hawîrdorê de diqelînin bi hevûdu re (wek zexta derve) wekhev in."
      },
      "trap": {
        "tr": "Aynı ortamda kaynamakta olan etil alkolün buhar basıncı, kaynamakta olan suyun buhar basıncından büyüktür.",
        "en": "In the same environment, the vapour pressure of boiling ethyl alcohol is greater than that of boiling water.",
        "de": "In derselben Umgebung ist der Dampfdruck von siedendem Ethylalkohol höher als der von siedendem Wasser.",
        "fr": "Dans un même milieu, la pression de vapeur de l'alcool éthylique en ébullition est supérieure à celle de l'eau en ébullition.",
        "ru": "В одних и тех же условиях давление пара кипящего этилового спирта больше, чем у кипящей воды.",
        "ar": "في الوسط نفسه يكون ضغط بخار الكحول الإيثيلي أثناء غليانه أكبر من ضغط بخار الماء أثناء غليانه.",
        "zh": "在同一环境中，沸腾的乙醇的蒸气压大于沸腾的水的蒸气压。",
        "ku": "Di heman hawîrdorê de zexta buharê ya etîl alkola ku dikele ji ya ava ku dikele mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Bir sıvı, buhar basıncı dış basınca eşit olduğunda kaynar; aynı ortamda kaynayan alkol ve suyun buhar basınçları dış basınca, dolayısıyla birbirine eşittir. Alkol yalnızca daha düşük sıcaklıkta kaynar.",
        "en": "A liquid boils when its vapour pressure equals the external pressure; alcohol and water boiling in the same place both have vapour pressure equal to the external pressure, hence to each other. Alcohol simply boils at a lower temperature.",
        "de": "Eine Flüssigkeit siedet, wenn ihr Dampfdruck dem äußeren Druck gleich ist; siedender Alkohol und siedendes Wasser am selben Ort haben daher denselben Dampfdruck. Alkohol siedet nur bei niedrigerer Temperatur.",
        "fr": "Un liquide bout quand sa pression de vapeur égale la pression extérieure ; l'alcool et l'eau bouillant au même endroit ont donc la même pression de vapeur. L'alcool bout seulement à une température plus basse.",
        "ru": "Жидкость кипит, когда давление её пара равно внешнему; у кипящих в одном месте спирта и воды давление пара равно внешнему, а значит, и друг другу. Спирт лишь кипит при более низкой температуре.",
        "ar": "يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي، فالكحول والماء المغليان في المكان نفسه ضغط بخارهما يساوي الضغط الخارجي، وبالتالي متساويان. والكحول يغلي فقط عند درجة حرارة أدنى.",
        "zh": "液体在蒸气压等于外界压强时沸腾；在同一环境中沸腾的酒精和水，其蒸气压都等于外界压强，因而彼此相等。酒精只是沸腾温度更低。",
        "ku": "Şileyek dema zexta buhara wê bi zexta derve re wekhev dibe dikele; alkol û ava ku li heman cihî dikelin zexta buhara wan bi zexta derve, ango bi hev re wekhev e. Alkol tenê di germahiyeke nizmtir de dikele."
      }
    },
    {
      "id": "u04-f15",
      "fact": {
        "tr": "Sıvı yüzey alanı arttıkça buharlaşma hızı artar fakat denge buhar basıncı değişmez.",
        "en": "As the liquid surface area increases, the evaporation rate increases, but the equilibrium vapour pressure does not change.",
        "de": "Mit zunehmender Flüssigkeitsoberfläche nimmt die Verdampfungsrate zu, der Gleichgewichtsdampfdruck ändert sich jedoch nicht.",
        "fr": "À mesure que la surface du liquide augmente, le taux d’évaporation augmente, mais la pression de vapeur à l’équilibre ne change pas.",
        "ru": "С увеличением площади поверхности жидкости скорость испарения увеличивается, но равновесное давление пара не меняется.",
        "ar": "مع زيادة مساحة سطح السائل، يزداد معدل التبخر، ولكن ضغط البخار المتوازن لا يتغير.",
        "zh": "随着液体表面积的增加，蒸发速率增加，但平衡蒸气压不改变。",
        "ku": "Her ku qada rûbera şilekê zêde dibe, rêjeya evaporasyonê zêde dibe, lê tansiyona buharê ya hevsengiyê naguhere."
      },
      "trap": {
        "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
        "en": "The equilibrium vapour pressure of water in the wide container is greater than that in the narrow container.",
        "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
        "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
        "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
        "ar": "يكون ضغط بخار الماء المتوازن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
        "zh": "宽容器中水的平衡蒸气压大于窄容器中水的平衡蒸气压。",
        "ku": "Zexta buharê ya hevseng ya avê di konteynera fireh de ji ya di konteynera teng de mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Geniş yüzey buharlaşma hızını artırır ama yoğuşma hızını da aynı oranda artırır; dengede buhar basıncı yalnızca sıcaklığa, sıvının cinsine ve saflığına bağlıdır.",
        "en": "A larger surface increases the evaporation rate but increases the condensation rate in the same proportion; at equilibrium the vapour pressure depends only on temperature and on the kind and purity of the liquid.",
        "de": "Eine größere Oberfläche erhöht die Verdunstungs-, aber im gleichen Maß auch die Kondensationsgeschwindigkeit; im Gleichgewicht hängt der Dampfdruck nur von der Temperatur sowie von Art und Reinheit der Flüssigkeit ab.",
        "fr": "Une plus grande surface augmente la vitesse d'évaporation mais aussi, dans la même proportion, celle de condensation ; à l'équilibre, la pression de vapeur ne dépend que de la température, de la nature du liquide et de sa pureté.",
        "ru": "Большая поверхность увеличивает скорость испарения, но в той же мере и скорость конденсации; при равновесии давление пара зависит только от температуры, природы жидкости и её чистоты.",
        "ar": "تزيد المساحة السطحية الكبيرة سرعة التبخر لكنها تزيد سرعة التكاثف بالنسبة نفسها، وعند الاتزان لا يعتمد ضغط البخار إلا على درجة الحرارة ونوع السائل ونقائه.",
        "zh": "表面积大使蒸发速率增大，但凝结速率也按同样比例增大；达到平衡时蒸气压只取决于温度以及液体的种类和纯度。",
        "ku": "Rûyê fireh leza buharbûnê zêde dike lê leza hilmbûnê jî bi heman rêjeyê zêde dike; di hevsengiyê de zexta buharê tenê bi germahî, cureyê şileyê û safbûna wê ve girêdayî ye."
      }
    },
    {
      "id": "u04-f16",
      "fact": {
        "tr": "Rüzgârlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.",
        "en": "In windy weather, the evaporation rate increases because vapour molecules on the surface are removed.",
        "de": "Bei windigem Wetter erhöht sich die Verdunstungsrate, da Dampfmoleküle an der Oberfläche entfernt werden.",
        "fr": "Par temps venteux, le taux d’évaporation augmente car les molécules de vapeur à la surface sont éliminées.",
        "ru": "В ветреную погоду скорость испарения увеличивается за счет удаления молекул пара с поверхности.",
        "ar": "وفي الطقس العاصف، يزداد معدل التبخر بسبب إزالة جزيئات البخار الموجودة على السطح.",
        "zh": "在大风天气中，由于表面的蒸气分子被去除，蒸发率会增加。",
        "ku": "Di hewaya bayê de, ji ber ku molekulên buharê yên li ser rûyê şilekê têne rakirin, rêjeya evaporasyonê zêde dibe."
      },
      "trap": {
        "tr": "Rüzgârlı havada çamaşırların kuruma süresi uzar.",
        "en": "In windy weather, the drying time of laundry takes longer.",
        "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
        "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
        "ru": "В ветреную погоду время высыхания белья увеличивается.",
        "ar": "في الطقس العاصف، يستغرق وقت تجفيف الغسيل وقتًا أطول.",
        "zh": "在有风的天气里，衣物的干燥时间需要更长的时间。",
        "ku": "Di hewaya bayê de, dema zuhakirina cilşûştinê dirêjtir dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Rüzgâr, yüzeydeki su buharını uzaklaştırarak buharın geri yoğuşmasını azaltır; buharlaşma hızlandığı için çamaşırlar daha kısa sürede kurur.",
        "en": "Wind carries away the water vapour near the surface and reduces re-condensation; evaporation speeds up, so the laundry dries in a shorter time.",
        "de": "Wind trägt den Wasserdampf an der Oberfläche fort und verringert die Rückkondensation; die Verdunstung wird schneller, die Wäsche trocknet in kürzerer Zeit.",
        "fr": "Le vent emporte la vapeur d'eau près de la surface et réduit la recondensation ; l'évaporation s'accélère et le linge sèche plus vite.",
        "ru": "Ветер уносит водяной пар от поверхности и уменьшает обратную конденсацию; испарение ускоряется, и бельё сохнет быстрее.",
        "ar": "تُبعد الرياح بخار الماء عن السطح فتقلّل تكاثفه من جديد، فيتسارع التبخر وتجف الملابس في وقت أقصر.",
        "zh": "风把表面附近的水蒸气带走，减少了水蒸气重新凝结，蒸发加快，衣服干得更快。",
        "ku": "Ba buhara avê ya li ser rûyê dûr dixe û hilmbûna wê ya dîsa kêm dike; buharbûn bilez dibe, loma cil di demeke kurttir de hişk dibin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u04-c01",
      "conceptA": {
        "tr": "Buharlaşma",
        "en": "Evaporation",
        "de": "Verdunstung",
        "fr": "Évaporation",
        "ru": "Испарение",
        "ar": "التبخر",
        "zh": "蒸发",
        "ku": "Hilmbûn"
      },
      "conceptB": {
        "tr": "Kaynama",
        "en": "Boiling",
        "de": "Sieden",
        "fr": "Ébullition",
        "ru": "Кипение",
        "ar": "الغليان",
        "zh": "沸腾",
        "ku": "Kelandin"
      },
      "distinction": {
        "tr": "Buharlaşma her sıcaklıkta ve sadece yüzeyde; kaynama belirli sıcaklıkta ve sıvının her yerinde gerçekleşir.",
        "en": "Evaporation occurs at all temperatures and only on the surface; Boiling occurs at a certain temperature and everywhere in the liquid.",
        "de": "Die Verdunstung erfolgt bei allen Temperaturen und nur an der Oberfläche; Das Sieden findet bei einer bestimmten Temperatur und überall in der Flüssigkeit statt.",
        "fr": "L'évaporation se produit à toutes les températures et uniquement en surface ; L'ébullition se produit à une certaine température et partout dans le liquide.",
        "ru": "Испарение происходит при всех температурах и только на поверхности; Кипение происходит при определенной температуре и повсеместно в жидкости.",
        "ar": "يحدث التبخر في جميع درجات الحرارة وعلى السطح فقط؛ يحدث الغليان عند درجة حرارة معينة وفي كل مكان في السائل.",
        "zh": "蒸发在所有温度下都会发生，并且仅发生在表面；沸腾发生在一定温度下，并且发生在液体的各处。",
        "ku": "Hilmbûn di her germahiyê de û tenê li ser rûyê çêdibe; Kelandin di germahiyek diyar de û li her derê şilê çêdibe."
      }
    },
    {
      "id": "u04-c02",
      "conceptA": {
        "tr": "Amorf Katı",
        "en": "Amorphous Solid",
        "de": "Amorpher Feststoff",
        "fr": "Solide amorphe",
        "ru": "Аморфное твёрдое вещество",
        "ar": "صلب غير متبلور",
        "zh": "非晶态固体",
        "ku": "Madeya Hişk a Amorf"
      },
      "conceptB": {
        "tr": "Kristal Katı",
        "en": "Crystalline Solid",
        "de": "Kristalliner Feststoff",
        "fr": "Solide cristallin",
        "ru": "Кристаллическое твёрдое вещество",
        "ar": "صلب بلوري",
        "zh": "晶体",
        "ku": "Madeya Hişk a Krîstal"
      },
      "distinction": {
        "tr": "Amorf katıların belirli bir erime noktası yoktur, ısıtıldıkça yumuşayarak bir sıcaklık aralığında erir; kristal katıların tanecikleri düzenli istiflenmiştir ve keskin bir erime noktası vardır.",
        "en": "Amorphous solids have no definite melting point and soften gradually over a temperature range when heated; crystalline solids have regularly stacked particles and a sharp melting point.",
        "de": "Amorphe Feststoffe haben keinen bestimmten Schmelzpunkt und erweichen beim Erhitzen allmählich über einen Temperaturbereich; kristalline Feststoffe haben regelmäßig angeordnete Teilchen und einen scharfen Schmelzpunkt.",
        "fr": "Les solides amorphes n'ont pas de point de fusion défini et se ramollissent progressivement sur un intervalle de température ; les solides cristallins ont des particules empilées de façon ordonnée et un point de fusion net.",
        "ru": "Аморфное твёрдое вещество не имеет определённой температуры плавления и при нагревании постепенно размягчается в интервале температур; у кристаллического вещества частицы упакованы упорядоченно и температура плавления чёткая.",
        "ar": "المواد الصلبة غير المتبلورة ليس لها درجة انصهار محددة وتلين تدريجيًا عند التسخين ضمن مدى من درجات الحرارة؛ أما المواد الصلبة البلورية فدقائقها مرتبة بانتظام ولها درجة انصهار حادة.",
        "zh": "非晶态固体没有固定熔点，受热时在一定温度范围内逐渐软化；晶体中粒子排列有序，具有明确的熔点。",
        "ku": "Madeya hişk a amorf xwedî xala helînê ya diyar nîne û dema germ dibe di navbereke germahiyê de hêdî hêdî nerm dibe; di madeya krîstal de tenoşk bi rêk û pêk rêz bûne û xala wê ya helînê tûj e."
      }
    },
    {
      "id": "u04-c03",
      "conceptA": {
        "tr": "Viskozite",
        "en": "Viscosity",
        "de": "Viskosität",
        "fr": "Viscosité",
        "ru": "Вязкость",
        "ar": "اللزوجة",
        "zh": "粘度",
        "ku": "Vîskozîtî"
      },
      "conceptB": {
        "tr": "Akıcılık",
        "en": "Fluidity",
        "de": "Fließfähigkeit",
        "fr": "Fluidité",
        "ru": "Текучесть",
        "ar": "السيولة",
        "zh": "流动性",
        "ku": "Herikbarî"
      },
      "distinction": {
        "tr": "Viskozite sıvının akmaya karşı gösterdiği iç dirençtir; akıcılık ise bunun tersi olup sıvının kolay akabilme özelliğidir.",
        "en": "Viscosity is the internal resistance of a liquid to flow; fluidity is the opposite property, the ease with which a liquid flows.",
        "de": "Viskosität ist der innere Widerstand einer Flüssigkeit gegen das Fließen; Fließfähigkeit ist die entgegengesetzte Eigenschaft, also die Leichtigkeit, mit der eine Flüssigkeit fließt.",
        "fr": "La viscosité est la résistance interne d'un liquide à l'écoulement ; la fluidité est la propriété inverse, c'est-à-dire la facilité avec laquelle un liquide s'écoule.",
        "ru": "Вязкость — это внутреннее сопротивление жидкости течению; текучесть — противоположное свойство, то есть лёгкость, с которой жидкость течёт.",
        "ar": "اللزوجة هي المقاومة الداخلية التي يبديها السائل للجريان؛ أما السيولة فهي الخاصية المعاكسة، أي سهولة جريان السائل.",
        "zh": "粘度是液体流动时的内部阻力；流动性则是与之相反的性质，表示液体容易流动的程度。",
        "ku": "Vîskozîtî berxwedana navxweyî ya şileyê li hember herikînê ye; herikbarî taybetmendiya berevajî ye, ango hêsaniya herikîna şileyê ye."
      }
    },
    {
      "id": "u04-c04",
      "conceptA": {
        "tr": "Buhar Basıncı",
        "en": "Vapour Pressure",
        "de": "Dampfdruck",
        "fr": "Pression de vapeur",
        "ru": "Давление пара",
        "ar": "ضغط البخار",
        "zh": "蒸气压",
        "ku": "Zexta Buharê"
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
        "tr": "Buhar basıncı, sıvının cinsine ve sıcaklığına bağlı olarak buharının yaptığı basınçtır; dış basınç ise ortam atmosferinin sıvı yüzeyine uyguladığı basınçtır.",
        "en": "Vapour pressure is the pressure exerted by a liquid's vapour and depends on the kind of liquid and its temperature; external pressure is the pressure the surrounding atmosphere exerts on the liquid surface.",
        "de": "Der Dampfdruck ist der Druck des Dampfes einer Flüssigkeit und hängt von der Flüssigkeit und ihrer Temperatur ab; der äußere Druck ist der Druck der umgebenden Atmosphäre auf die Flüssigkeitsoberfläche.",
        "fr": "La pression de vapeur est la pression exercée par la vapeur d'un liquide et dépend de la nature du liquide et de sa température ; la pression extérieure est celle que l'atmosphère exerce sur la surface du liquide.",
        "ru": "Давление пара — давление, создаваемое паром жидкости; оно зависит от природы жидкости и температуры. Внешнее давление — давление окружающей атмосферы на поверхность жидкости.",
        "ar": "ضغط البخار هو الضغط الذي يُحدثه بخار السائل ويعتمد على نوع السائل ودرجة حرارته؛ أما الضغط الخارجي فهو ضغط الغلاف الجوي المحيط على سطح السائل.",
        "zh": "蒸气压是液体的蒸气产生的压强，取决于液体的种类和温度；外界压强是周围大气作用在液面上的压强。",
        "ku": "Zexta buharê ew zext e ku buhara şileyê çêdike û bi cureyê şileyê û germahiya wê ve girêdayî ye; zexta derve ew zext e ku atmosfera derdorê li ser rûyê şileyê dike."
      }
    },
    {
      "id": "u04-c05",
      "conceptA": {
        "tr": "Moleküler Kristal",
        "en": "Molecular Crystal",
        "de": "Molekülkristall",
        "fr": "Cristal moléculaire",
        "ru": "Молекулярный кристалл",
        "ar": "البلورة الجزيئية",
        "zh": "分子晶体",
        "ku": "Krîstala Molekulî"
      },
      "conceptB": {
        "tr": "Kovalent Ağ Örgülü Kristal",
        "en": "Covalent Network Crystal",
        "de": "Kovalenter Netzwerkkristall",
        "fr": "Cristal covalent (réseau covalent)",
        "ru": "Ковалентный (атомный) кристалл",
        "ar": "البلورة التساهمية الشبكية",
        "zh": "共价网络晶体（原子晶体）",
        "ku": "Krîstala Tora Kovalent"
      },
      "distinction": {
        "tr": "Moleküler kristallerde (buz, kuru buz) moleküller zayıf etkileşimlerle bir arada tutunur ve erime noktaları düşüktür; kovalent ağ örgülü kristallerde (elmas, kuvars) atomlar kovalent bağlarla bağlıdır ve erime noktaları çok yüksektir.",
        "en": "In molecular crystals (ice, dry ice) molecules are held together by weak interactions and melting points are low; in covalent network crystals (diamond, quartz) atoms are joined by covalent bonds and melting points are very high.",
        "de": "In Molekülkristallen (Eis, Trockeneis) werden die Moleküle durch schwache Wechselwirkungen zusammengehalten, die Schmelzpunkte sind niedrig; in kovalenten Netzwerkkristallen (Diamant, Quarz) sind die Atome durch kovalente Bindungen verknüpft, die Schmelzpunkte sind sehr hoch.",
        "fr": "Un cristal moléculaire (glace, neige carbonique) est formé de molécules liées par des interactions faibles et son point de fusion est bas ; dans un réseau covalent (diamant, quartz), les atomes sont unis par des liaisons covalentes et le point de fusion est très élevé.",
        "ru": "Молекулярный кристалл (лёд, сухой лёд) состоит из молекул, удерживаемых слабыми взаимодействиями, и имеет низкую температуру плавления; в ковалентном кристалле (алмаз, кварц) атомы связаны ковалентными связями, и температура плавления очень высокая.",
        "ar": "البلورة الجزيئية (الجليد، الثلج الجاف) تتكون من جزيئات ترتبط بتآثرات ضعيفة ودرجة انصهارها منخفضة؛ أما في البلورة التساهمية الشبكية (الماس، الكوارتز) فترتبط الذرات بروابط تساهمية ودرجة انصهارها مرتفعة جدًا.",
        "zh": "分子晶体（冰、干冰）中分子靠弱相互作用结合，熔点低；共价网络晶体（金刚石、石英）中原子以共价键相连，熔点很高。",
        "ku": "Krîstala molekulî (qeşa, qeşaya hişk) ji molekulên ku bi têkiliyên qels li hev tên girtin pêk tê û xala helîna wê nizm e; di krîstala tora kovalent de (elmas, kuarts) atom bi girêdanên kovalent bi hev ve girêdayî ne û xala helînê pir bilind e."
      }
    },
    {
      "id": "u04-c06",
      "conceptA": {
        "tr": "Gaz",
        "en": "Gas",
        "de": "Gas",
        "fr": "Gaz",
        "ru": "Газ",
        "ar": "الغاز",
        "zh": "气体",
        "ku": "Gaz"
      },
      "conceptB": {
        "tr": "Buhar",
        "en": "Vapour",
        "de": "Dampf",
        "fr": "Vapeur",
        "ru": "Пар",
        "ar": "البخار",
        "zh": "蒸气",
        "ku": "Buhar"
      },
      "distinction": {
        "tr": "Gaz, oda koşullarında kendiliğinden bu hâlde bulunan maddelere (O2, N2, CO2) denir; buhar ise oda koşullarında sıvı ya da katı olan bir maddenin (su, iyot) buharlaşarak veya süblimleşerek geçtiği hâle denir.",
        "en": "Gas is the term for substances that exist in this state at room conditions (O2, N2, CO2); vapour is the term for the state that a substance which is liquid or solid at room conditions (water, iodine) enters by evaporating or subliming.",
        "de": "Als Gas bezeichnet man Stoffe, die bei Raumbedingungen in diesem Zustand vorliegen (O2, N2, CO2); als Dampf bezeichnet man den Zustand, in den ein bei Raumbedingungen flüssiger oder fester Stoff (Wasser, Iod) durch Verdampfen oder Sublimieren übergeht.",
        "fr": "On appelle gaz une substance qui se trouve dans cet état dans les conditions ambiantes (O2, N2, CO2) ; on appelle vapeur l'état que prend, par évaporation ou sublimation, une substance liquide ou solide dans ces conditions (eau, diiode).",
        "ru": "Газ — вещество, которое при комнатных условиях находится в этом состоянии (O2, N2, CO2); пар — состояние, в которое при испарении или сублимации переходит вещество, жидкое или твёрдое при комнатных условиях (вода, иод).",
        "ar": "الغاز اسم يُطلق على المواد التي توجد في هذه الحالة في الظروف العادية (O2 وN2 وCO2)؛ أما البخار فهو الحالة التي تتحول إليها بالتبخر أو التسامي مادة تكون سائلة أو صلبة في الظروف العادية (الماء، اليود).",
        "zh": "气体是指在常温常压下就以这种状态存在的物质（O2、N2、CO2）；蒸气则是常温常压下为液态或固态的物质（水、碘）经蒸发或升华后形成的状态。",
        "ku": "Gaz ew nav e ku ji bo madeyên di şertên odeyê de di vê rewşê de ne (O2, N2, CO2) tê bikaranîn; buhar jî ew rewş e ku madeyeke di şertên odeyê de şile an hişk (av, îyot) bi hilmbûn an sublîmasyonê dikeve wê."
      }
    },
    {
      "id": "u04-c07",
      "conceptA": {
        "tr": "Gaz",
        "en": "Gas",
        "de": "Gas",
        "fr": "Gaz",
        "ru": "Газ",
        "ar": "غاز",
        "zh": "气体",
        "ku": "Gaz"
      },
      "conceptB": {
        "tr": "Plazma",
        "en": "Plasma",
        "de": "Plasma",
        "fr": "Plasma",
        "ru": "Плазма",
        "ar": "البلازما",
        "zh": "等离子体",
        "ku": "Plasma"
      },
      "distinction": {
        "tr": "Gaz nötr atom veya moleküllerden oluşur; plazma ise iyonlar, serbest elektronlar ve nötr taneciklerin bir arada bulunduğu iletken akışkandır.",
        "en": "Gas consists of neutral atoms or molecules; Plasma is a conductive fluid in which ions, free electrons and neutral particles coexist.",
        "de": "Gas besteht aus neutralen Atomen oder Molekülen; Plasma ist ein elektrisch leitfähiges Fluid, in der Ionen, freie Elektronen und neutrale Teilchen nebeneinander existieren.",
        "fr": "Le gaz est constitué d’atomes ou de molécules neutres ; Le plasma est un fluide conducteur dans lequel coexistent des ions, des électrons libres et des particules neutres.",
        "ru": "Газ состоит из нейтральных атомов или молекул; Плазма – это проводящая ионизированная среда, в которой сосуществуют ионы, свободные электроны и нейтральные частицы.",
        "ar": "يتكون الغاز من ذرات أو جزيئات محايدة؛ البلازما هي مائع موصل تتعايش فيه الأيونات والإلكترونات الحرة والجسيمات المحايدة.",
        "zh": "气体由中性原子或分子组成；等离子体是离子、自由电子和中性粒子共存的导电流体。",
        "ku": "Gaz ji atom an jî molekulên bêalî pêk tê; Plazma herikbarek ku elektrîkê diguhezîne e ku tê de îyon, elektronên azad û pariyên bêalî bi hev re dijîn."
      }
    },
    {
      "id": "u04-c08",
      "conceptA": {
        "tr": "İyonik Kristal",
        "en": "Ionic Crystal",
        "de": "Ionenkristall",
        "fr": "Cristal ionique",
        "ru": "Ионный кристалл",
        "ar": "البلورة الأيونية",
        "zh": "离子晶体",
        "ku": "Krîstala Îyonî"
      },
      "conceptB": {
        "tr": "Metalik Kristal",
        "en": "Metallic Crystal",
        "de": "Metallkristall",
        "fr": "Cristal métallique",
        "ru": "Металлический кристалл",
        "ar": "البلورة الفلزية",
        "zh": "金属晶体",
        "ku": "Krîstala Metalî"
      },
      "distinction": {
        "tr": "İyonik kristallerde katyon ve anyonlar iyonik bağla bağlıdır ve bu kristaller katı hâlde elektriği iletmez; metalik kristallerde pozitif metal iyonları elektron denizi ile bir arada tutulur ve bu kristaller katı hâlde elektriği iletir.",
        "en": "In ionic crystals, cations and anions are held by ionic bonds and the solid does not conduct electricity; in metallic crystals, positive metal ions are held by an electron sea and the solid conducts electricity.",
        "de": "In Ionenkristallen sind Kationen und Anionen durch Ionenbindungen verbunden, und der Feststoff leitet keinen Strom; in Metallkristallen sind positive Metallionen durch einen Elektronensee verbunden, und der Feststoff leitet Strom.",
        "fr": "Un cristal ionique est formé de cations et d'anions unis par des liaisons ioniques et ne conduit pas l'électricité à l'état solide ; dans un solide métallique, les ions métalliques positifs sont liés par une mer d'électrons et le solide conduit l'électricité.",
        "ru": "Ионный кристалл состоит из катионов и анионов, связанных ионной связью, и в твёрдом состоянии не проводит ток; в металлическом кристалле положительные ионы металла связаны электронным морем, и он проводит ток в твёрдом состоянии.",
        "ar": "البلورة الأيونية تتكون من كاتيونات وأنيونات ترتبط بروابط أيونية ولا توصل الكهرباء في الحالة الصلبة؛ أما في البلورة الفلزية فترتبط أيونات الفلز الموجبة ببحر الإلكترونات وتوصل الكهرباء في الحالة الصلبة.",
        "zh": "离子晶体中阴阳离子以离子键结合，固态时不导电；金属晶体中金属阳离子由电子海结合，固态时导电。",
        "ku": "Krîstala îyonî ji katyon û anyonên ku bi girêdana îyonî bi hev ve girêdayî ne pêk tê û di rewşa hişk de elektrîkê naguhezîne; di krîstala metalî de îyonên metal ên erênî bi deryaya elektronan ve girêdayî ne û ew di rewşa hişk de elektrîkê diguhezîne."
      }
    }
  ],
  "sequences": [
    {
      "id": "u04-s01",
      "title": {
        "tr": "Kapalı Kapta Sıvı Isıtıldığında Gerçekleşen Değişimler",
        "en": "Changes When a Liquid in a Closed Container Is Heated",
        "de": "Vorgänge beim Erwärmen einer Flüssigkeit im geschlossenen Gefäß",
        "fr": "Changements lors du chauffage d'un liquide en récipient fermé",
        "ru": "Изменения при нагревании жидкости в закрытом сосуде",
        "ar": "التغيرات عند تسخين سائل في وعاء مغلق",
        "zh": "加热密闭容器中的液体时发生的变化",
        "ku": "Guhertinên Dema Şileyek di Firaxa Girtî de Tê Germkirin"
      },
      "steps": [
        {
          "tr": "Sıvı moleküllerinin ortalama kinetik enerjisi artar",
          "en": "The average kinetic energy of the liquid's molecules increases",
          "de": "Die mittlere kinetische Energie der Flüssigkeitsmoleküle nimmt zu",
          "fr": "L'énergie cinétique moyenne des molécules du liquide augmente",
          "ru": "Средняя кинетическая энергия молекул жидкости увеличивается",
          "ar": "يزداد متوسط الطاقة الحركية لجزيئات السائل",
          "zh": "液体分子的平均动能增大",
          "ku": "Enerjiya kînetîk a navînî ya molekulên şileyê zêde dibe"
        },
        {
          "tr": "Yüzeyden kopabilecek enerjiye sahip molekül sayısı artar",
          "en": "The number of molecules with enough energy to escape from the surface increases",
          "de": "Die Zahl der Moleküle mit genügend Energie, um die Oberfläche zu verlassen, nimmt zu",
          "fr": "Le nombre de molécules ayant assez d'énergie pour quitter la surface augmente",
          "ru": "Растёт число молекул с энергией, достаточной для отрыва от поверхности",
          "ar": "يزداد عدد الجزيئات التي تملك طاقة كافية للإفلات من السطح",
          "zh": "具有足够能量脱离液面的分子数增加",
          "ku": "Hejmara molekulên ku têra xwe enerjiya wan heye ku ji rûyê şilekê biqetin zêde dibe"
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
          "tr": "Kapalı kapta daha yüksek bir denge buhar basıncına ulaşılır",
          "en": "A higher equilibrium vapour pressure is reached in a closed container",
          "de": "Im geschlossenen Gefäß stellt sich ein höherer Gleichgewichtsdampfdruck ein",
          "fr": "Une pression de vapeur d'équilibre plus élevée est atteinte en récipient fermé",
          "ru": "В закрытом сосуде устанавливается более высокое равновесное давление пара",
          "ar": "يُبلَغ ضغط بخار توازني أعلى في الوعاء المغلق",
          "zh": "在密闭容器中达到更高的平衡蒸气压",
          "ku": "Di firaxa girtî de zexta buharê ya hevseng a bilindtir pêk tê"
        }
      ]
    },
    {
      "id": "u04-s02",
      "title": {
        "tr": "Saf Suyun Isınma ve Hal Değişimi (1 atm)",
        "en": "Heating and State Change of Pure Water (1 atm)",
        "de": "Erwärmung und Zustandsänderung von reinem Wasser (1 atm)",
        "fr": "Chauffage et changement d'état de l'eau pure (1 atm)",
        "ru": "Нагревание и изменение состояния чистой воды (1 атм)",
        "ar": "تسخين الماء النقي وتغير حالته (1 atm)",
        "zh": "纯水的加热和状态变化（1 atm）",
        "ku": "Germbûn û Guherîna Halê ya Ava Paqij (1 atm)"
      },
      "steps": [
        {
          "tr": "0 °C'deki buz eriyerek suya dönüşür",
          "en": "Ice at 0 °C melts and turns into water",
          "de": "Eis schmilzt bei 0 °C und verwandelt sich in Wasser",
          "fr": "La glace à 0 °C fond et se transforme en eau",
          "ru": "Лед при 0°C тает и превращается в воду.",
          "ar": "يذوب الثلج عند درجة 0 مئوية ويتحول إلى ماء",
          "zh": "冰在0°C融化并变成水",
          "ku": "Qeşa di 0 °C de dihele û dibe av"
        },
        {
          "tr": "Sıvı su 100 °C'ye kadar ısınır",
          "en": "Liquid water heats up to 100 °C",
          "de": "Flüssiges Wasser erhitzt sich auf bis zu 100 °C",
          "fr": "L'eau liquide chauffe jusqu'à 100 °C",
          "ru": "Жидкая вода нагревается до 100°С.",
          "ar": "يسخن الماء السائل حتى 100 درجة مئوية",
          "zh": "液态水加热至 100 °C",
          "ku": "Ava şil heta 100 °C germ dibe"
        },
        {
          "tr": "100 °C'de sabit sıcaklıkta kaynar",
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
          "en": "The temperature of water vapour continues to rise",
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
        "tr": "Gece Çiğ Oluşumu",
        "en": "Dew Formation at Night",
        "de": "Taubildung in der Nacht",
        "fr": "Formation de la rosée la nuit",
        "ru": "Образование росы ночью",
        "ar": "تكوّن الندى ليلاً",
        "zh": "夜间露水的形成",
        "ku": "Çêbûna Xunavê bi Şev"
      },
      "steps": [
        {
          "tr": "Gece hava ve yüzeyler soğur",
          "en": "At night the air and surfaces cool down",
          "de": "Nachts kühlen Luft und Oberflächen ab",
          "fr": "La nuit, l'air et les surfaces se refroidissent",
          "ru": "Ночью воздух и поверхности остывают",
          "ar": "في الليل يبرد الهواء والأسطح",
          "zh": "夜间空气和物体表面降温",
          "ku": "Bi şev hewa û rû sar dibin"
        },
        {
          "tr": "Soğuyan havada suyun doygun buhar basıncı düşer",
          "en": "In the cooling air the saturated vapour pressure of water falls",
          "de": "In der abkühlenden Luft sinkt der Sättigungsdampfdruck des Wassers",
          "fr": "Dans l'air qui se refroidit, la pression de vapeur saturante de l'eau diminue",
          "ru": "В остывающем воздухе давление насыщенного водяного пара снижается",
          "ar": "في الهواء البارد ينخفض ضغط بخار الماء المشبع",
          "zh": "空气降温后，水的饱和蒸气压降低",
          "ku": "Di hewaya ku sar dibe de zexta buharê ya têr a avê kêm dibe"
        },
        {
          "tr": "Havadaki su buharı basıncı doygun buhar basıncına ulaşır; bağıl nem %100 olur",
          "en": "The water-vapour pressure in the air reaches the saturated vapour pressure; relative humidity becomes 100%",
          "de": "Der Wasserdampfdruck der Luft erreicht den Sättigungsdampfdruck; die relative Feuchte wird 100 %",
          "fr": "La pression de vapeur d'eau de l'air atteint la pression de vapeur saturante ; l'humidité relative atteint 100 %",
          "ru": "Давление водяного пара в воздухе достигает давления насыщенного пара; относительная влажность становится 100 %",
          "ar": "يبلغ ضغط بخار الماء في الهواء ضغط البخار المشبع فتصبح الرطوبة النسبية 100%",
          "zh": "空气中的水蒸气压达到饱和蒸气压，相对湿度变为 100%",
          "ku": "Zexta buhara avê ya hewayê digihîje zexta buharê ya têr; şiliya nisbî dibe %100"
        },
        {
          "tr": "Su buharı soğuk yüzeylerde yoğuşarak çiğ damlaları oluşturur",
          "en": "Water vapour condenses on cold surfaces and forms dew drops",
          "de": "Wasserdampf kondensiert an kalten Oberflächen zu Tautropfen",
          "fr": "La vapeur d'eau se condense sur les surfaces froides en gouttes de rosée",
          "ru": "Водяной пар конденсируется на холодных поверхностях в капли росы",
          "ar": "يتكاثف بخار الماء على الأسطح الباردة مكوّناً قطرات الندى",
          "zh": "水蒸气在冷的表面凝结成露珠",
          "ku": "Buhara avê li ser rûyên sar hilm dibe û dilopên xunavê çêdike"
        }
      ]
    },
    {
      "id": "u04-s04",
      "title": {
        "tr": "Pistonlu Kapta Sıkışma",
        "en": "Compression in a Piston Container",
        "de": "Kompression in einem Kolbengefäß",
        "fr": "Compression dans un récipient à piston",
        "ru": "Сжатие газа в сосуде с поршнем",
        "ar": "انضغاط الغاز في وعاء ذي مكبس",
        "zh": "活塞容器中的气体压缩",
        "ku": "Pêçandina Gazê di Firaxa bi Piston de"
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
          "ku": "Pistona livok ber bi jêr ve tê pêldan"
        },
        {
          "tr": "Gazın kapladığı hacim daralır",
          "en": "The volume occupied by the gas decreases",
          "de": "Das vom Gas eingenommene Volumen nimmt ab",
          "fr": "Le volume occupé par le gaz diminue",
          "ru": "Объем, занимаемый газом, уменьшается",
          "ar": "يتناقص الحجم الذي يشغله الغاز",
          "zh": "气体所占的体积减少",
          "ku": "Qebareya ku gaz digire kêm dibe"
        },
        {
          "tr": "Birim hacme düşen tanecik sayısı artar",
          "en": "The number of particles per unit volume increases",
          "de": "Die Anzahl der Partikel pro Volumeneinheit nimmt zu",
          "fr": "Le nombre de particules par unité de volume augmente",
          "ru": "Количество частиц в единице объема увеличивается",
          "ar": "يزداد عدد الجزيئات لكل وحدة حجم",
          "zh": "单位体积的颗粒数增加",
          "ku": "Hejmara pirtikan di yekîneya qebareyê de zêde dibe"
        },
        {
          "tr": "Çeperlere yapılan çarpma sayısı ve basınç artar",
          "en": "The number of collisions with the container walls and the pressure increase",
          "de": "Die Zahl der Stöße auf die Gefäßwände und der Druck nehmen zu",
          "fr": "Le nombre de chocs sur les parois et la pression augmentent",
          "ru": "Число ударов о стенки сосуда и давление увеличиваются",
          "ar": "يزداد عدد التصادمات مع جدران الوعاء ويزداد الضغط",
          "zh": "分子撞击器壁的次数和压强增大",
          "ku": "Hejmara lêdanên li dîwarên firaxê û zext zêde dibin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u04-twin01",
      "stem": {
        "tr": "Bir sıvının denge buhar basıncını artırmak için aşağıdakilerden hangisi tek başına uygulanabilir?",
        "en": "Which of the following can be applied alone to increase the equilibrium vapour pressure of a liquid?",
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
          "ku": "Zêdekirina xwêyeke ku hilm nabe li firaxê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Denge buhar basıncı yalnızca sıvının cinsine, saflığına ve sıcaklığına bağlıdır; sıcaklık arttıkça daha çok molekül sıvıdan kopabildiği için buhar basıncı artar. Dış basınç, yüzey alanı ve sıvı miktarı denge buhar basıncını değiştirmez (yüzey alanı yalnızca buharlaşma hızını etkiler); uçucu olmayan tuz eklemek ise buhar basıncını düşürür.",
        "en": "Equilibrium vapour pressure depends only on the kind of liquid, its purity and the temperature; as temperature rises, more molecules can escape from the liquid, so the vapour pressure increases. External pressure, surface area and the amount of liquid do not change the equilibrium vapour pressure (surface area only affects the rate of evaporation), and adding a non-volatile salt lowers it.",
        "de": "Der Gleichgewichtsdampfdruck hängt nur von der Art der Flüssigkeit, ihrer Reinheit und der Temperatur ab; mit steigender Temperatur können mehr Moleküle die Flüssigkeit verlassen, der Dampfdruck steigt. Äußerer Druck, Oberfläche und Flüssigkeitsmenge ändern den Gleichgewichtsdampfdruck nicht (die Oberfläche beeinflusst nur die Verdunstungsgeschwindigkeit); die Zugabe eines nichtflüchtigen Salzes senkt ihn.",
        "fr": "La pression de vapeur d'équilibre ne dépend que de la nature du liquide, de sa pureté et de la température ; quand la température augmente, davantage de molécules peuvent quitter le liquide et la pression de vapeur augmente. La pression extérieure, la surface et la quantité de liquide ne modifient pas la pression de vapeur d'équilibre (la surface n'influe que sur la vitesse d'évaporation) ; l'ajout d'un sel non volatil l'abaisse.",
        "ru": "Равновесное давление пара зависит только от природы жидкости, её чистоты и температуры; с ростом температуры больше молекул способно покинуть жидкость, и давление пара растёт. Внешнее давление, площадь поверхности и количество жидкости не меняют равновесное давление пара (площадь поверхности влияет только на скорость испарения), а добавление нелетучей соли его понижает.",
        "ar": "لا يعتمد ضغط البخار المتزن إلا على نوع السائل ونقائه ودرجة الحرارة؛ وكلما ارتفعت درجة الحرارة استطاع عدد أكبر من الجزيئات الإفلات من السائل فيزداد ضغط البخار. أما الضغط الخارجي ومساحة السطح وكمية السائل فلا تغيّر ضغط البخار المتزن (مساحة السطح تؤثر في سرعة التبخر فقط)، وإضافة ملح غير متطاير تخفضه.",
        "zh": "平衡蒸气压只取决于液体的种类、纯度和温度；温度升高时，能够逸出液体的分子增多，蒸气压增大。外界压强、表面积和液体的量都不改变平衡蒸气压（表面积只影响蒸发速率）；加入难挥发的盐反而使蒸气压降低。",
        "ku": "Zexta buharê ya hevseng tenê bi cureyê şileyê, safbûna wê û germahiyê ve girêdayî ye; dema germahî zêde dibe bêtir molekul dikarin ji şileyê veqetin û zexta buharê zêde dibe. Zexta derve, rûbera rûyê û mîqdara şileyê zexta buharê ya hevseng naguherînin (rûber tenê bandorê li leza hilmbûnê dike); lêzêdekirina xwêyeke ku nabe buhar wê kêm dike."
      }
    },
    {
      "id": "u04-twin02",
      "stem": {
        "tr": "Aynı ortamda kaynamakta olan saf su ve saf etil alkol için aşağıdakilerden hangisi kesinlikle eşittir?",
        "en": "Which of the following is definitely equal for pure water and pure ethyl alcohol boiling in the same environment?",
        "de": "Welche der folgenden Größen ist für reines Wasser und reinen Ethylalkohol, die in derselben Umgebung sieden, auf jeden Fall gleich?",
        "fr": "Laquelle des grandeurs suivantes est nécessairement égale pour l'eau pure et l'éthanol pur bouillant dans le même environnement ?",
        "ru": "Какая из следующих величин обязательно одинакова для чистой воды и чистого этилового спирта, кипящих в одной и той же среде?",
        "ar": "أي مما يلي متساوٍ حتمًا للماء النقي والكحول الإيثيلي النقي اللذين يغليان في الوسط نفسه؟",
        "zh": "在同一环境中沸腾的纯水和纯乙醇，下列哪项一定相等？",
        "ku": "Kîjan ji yên jêrîn ji bo ava paqij û alkola etilî ya saf ku di heman hawîrdorê de keliyane bi tevahî wekhev e?"
      },
      "options": [
        {
          "tr": "Buhar basınçları",
          "en": "vapour pressures",
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
          "ku": "Tîrbûn"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bir sıvı, buhar basıncı dış basınca eşit olduğunda kaynar. Aynı ortamda dış basınç aynı olduğundan kaynamakta olan suyun ve etil alkolün buhar basınçları bu dış basınca, dolayısıyla birbirine eşittir. Kaynama sıcaklığı, buharlaşma ısısı, viskozite ve özkütle ise sıvının cinsine bağlı olduğundan farklıdır; örneğin 1 atm'de su 100 °C'de, etil alkol 78 °C'de kaynar.",
        "en": "A liquid boils when its vapour pressure equals the external pressure. In the same environment the external pressure is the same, so the vapour pressures of boiling water and boiling ethyl alcohol both equal that pressure and therefore each other. Boiling temperature, heat of vaporization, viscosity and density depend on the kind of liquid and differ; for example, at 1 atm water boils at 100 °C and ethyl alcohol at 78 °C.",
        "de": "Eine Flüssigkeit siedet, wenn ihr Dampfdruck gleich dem äußeren Druck ist. In derselben Umgebung ist der äußere Druck gleich, also sind die Dampfdrücke von siedendem Wasser und siedendem Ethylalkohol gleich diesem Druck und damit untereinander gleich. Siedetemperatur, Verdampfungswärme, Viskosität und Dichte hängen von der Art der Flüssigkeit ab und sind verschieden; bei 1 atm siedet Wasser z. B. bei 100 °C, Ethylalkohol bei 78 °C.",
        "fr": "Un liquide bout lorsque sa pression de vapeur égale la pression extérieure. Dans un même milieu la pression extérieure est la même ; les pressions de vapeur de l'eau et de l'alcool éthylique en ébullition sont donc égales à cette pression, et égales entre elles. La température d'ébullition, la chaleur de vaporisation, la viscosité et la masse volumique dépendent de la nature du liquide et diffèrent ; par exemple, sous 1 atm, l'eau bout à 100 °C et l'alcool éthylique à 78 °C.",
        "ru": "Жидкость кипит, когда давление её пара равно внешнему давлению. В одних и тех же условиях внешнее давление одинаково, поэтому давления пара кипящей воды и кипящего этилового спирта равны этому давлению, а значит, и друг другу. Температура кипения, теплота испарения, вязкость и плотность зависят от природы жидкости и различаются; например, при 1 атм вода кипит при 100 °C, а этиловый спирт — при 78 °C.",
        "ar": "يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي. وفي الوسط نفسه يكون الضغط الخارجي واحدًا، لذا فضغط بخار الماء وضغط بخار الكحول الإيثيلي أثناء الغليان يساويان هذا الضغط، فهما متساويان. أما درجة الغليان وحرارة التبخر واللزوجة والكثافة فتعتمد على نوع السائل وتختلف؛ فمثلًا عند 1 atm يغلي الماء عند 100 °C والكحول الإيثيلي عند 78 °C.",
        "zh": "液体在蒸气压等于外界压强时沸腾。在同一环境中外界压强相同，所以沸腾的水和沸腾的乙醇的蒸气压都等于这一压强，因而彼此相等。沸点、汽化热、粘度和密度取决于液体的种类，各不相同；例如在 1 atm 下水在 100 °C 沸腾，乙醇在 78 °C 沸腾。",
        "ku": "Şile dema zexta buhara wê bi zexta derve re wekhev dibe dikele. Di heman hawîrdorê de zexta derve yek e, loma zextên buharê yên ava ku dikele û etîl alkola ku dikele bi vê zextê re, û ji ber vê yekê bi hev re jî wekhev in. Germahiya kelandinê, germa hilmbûnê, vîskozîtî û çirbûn bi cureyê şileyê ve girêdayî ne û cuda ne; mînak di 1 atm de av di 100 °C de, etîl alkol di 78 °C de dikele."
      }
    },
    {
      "id": "u04-twin03",
      "stem": {
        "tr": "25 °C'de suyun doygun buhar basıncı 24 mmHg'dir. Aynı sıcaklıkta havadaki su buharının kısmi basıncı 18 mmHg olduğuna göre havanın bağıl nemi yüzde (%) kaçtır?",
        "en": "At 25 °C the saturated vapour pressure of water is 24 mmHg. If the partial pressure of water vapour in the air at the same temperature is 18 mmHg, what is the relative humidity in percent (%)?",
        "de": "Bei 25 °C beträgt der Sättigungsdampfdruck des Wassers 24 mmHg. Der Partialdruck des Wasserdampfs in der Luft beträgt bei derselben Temperatur 18 mmHg. Wie viel Prozent (%) beträgt die relative Luftfeuchtigkeit?",
        "fr": "À 25 °C, la pression de vapeur saturante de l'eau est de 24 mmHg. Si la pression partielle de la vapeur d'eau dans l'air à la même température est de 18 mmHg, quelle est l'humidité relative en pourcentage (%) ?",
        "ru": "При 25 °C давление насыщенного водяного пара равно 24 мм рт. ст. Парциальное давление водяного пара в воздухе при той же температуре — 18 мм рт. ст. Чему равна относительная влажность в процентах (%)?",
        "ar": "ضغط بخار الماء المشبع عند 25 °C هو 24 mmHg. إذا كان الضغط الجزئي لبخار الماء في الهواء عند الدرجة نفسها 18 mmHg، فكم تبلغ الرطوبة النسبية بالنسبة المئوية (%)؟",
        "zh": "25 °C 时水的饱和蒸气压为 24 mmHg。若同温度下空气中水蒸气的分压为 18 mmHg，则空气的相对湿度是百分之多少（%）？",
        "ku": "Di 25 °C de zexta buharê ya têr a avê 24 mmHg e. Heke di heman germahiyê de zexta beşî ya buhara avê ya di hewayê de 18 mmHg be, şiliya nisbî ya hewayê ji sedî (%) çend e?"
      },
      "options": [
        {
          "tr": "25",
          "en": "25",
          "de": "25",
          "fr": "25",
          "ru": "25",
          "ar": "25",
          "zh": "25",
          "ku": "25"
        },
        {
          "tr": "43",
          "en": "43",
          "de": "43",
          "fr": "43",
          "ru": "43",
          "ar": "43",
          "zh": "43",
          "ku": "43"
        },
        {
          "tr": "57",
          "en": "57",
          "de": "57",
          "fr": "57",
          "ru": "57",
          "ar": "57",
          "zh": "57",
          "ku": "57"
        },
        {
          "tr": "75",
          "en": "75",
          "de": "75",
          "fr": "75",
          "ru": "75",
          "ar": "75",
          "zh": "75",
          "ku": "75"
        },
        {
          "tr": "133",
          "en": "133",
          "de": "133",
          "fr": "133",
          "ru": "133",
          "ar": "133",
          "zh": "133",
          "ku": "133"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Bağıl nem = (havadaki su buharı basıncı / doygun buhar basıncı) · 100 = (18 / 24) · 100 = 75. Oran ters kurulursa (24 / 18) · 100 ≈ 133 bulunur; bu, bağıl nemin 100'ü aşamayacağı bilgisiyle çelişir. (24 − 18) / 24 · 100 = 25 ise havanın doymaya ne kadar uzak olduğunu gösterir; 43 ve 57 değerleri basınçların toplamına bölmekten kaynaklanır.",
        "en": "Relative humidity = (water-vapour pressure in air / saturated vapour pressure) · 100 = (18 / 24) · 100 = 75. Inverting the ratio gives (24 / 18) · 100 ≈ 133, which contradicts the fact that relative humidity cannot exceed 100. (24 − 18) / 24 · 100 = 25 shows how far the air is from saturation; 43 and 57 come from dividing by the sum of the pressures.",
        "de": "Relative Feuchte = (Wasserdampfdruck der Luft / Sättigungsdampfdruck) · 100 = (18 / 24) · 100 = 75. Das umgekehrte Verhältnis (24 / 18) · 100 ≈ 133 widerspricht der Tatsache, dass die relative Feuchte 100 nicht übersteigen kann. (24 − 18) / 24 · 100 = 25 zeigt den Abstand zur Sättigung; 43 und 57 entstehen durch Teilen durch die Summe der Drücke.",
        "fr": "Humidité relative = (pression de vapeur d'eau de l'air / pression de vapeur saturante) · 100 = (18 / 24) · 100 = 75. Le rapport inversé (24 / 18) · 100 ≈ 133 contredit le fait que l'humidité relative ne peut dépasser 100. (24 − 18) / 24 · 100 = 25 indique l'écart à la saturation ; 43 et 57 viennent d'une division par la somme des pressions.",
        "ru": "Относительная влажность = (давление водяного пара в воздухе / давление насыщенного пара) · 100 = (18 / 24) · 100 = 75. Обратное отношение (24 / 18) · 100 ≈ 133 противоречит тому, что относительная влажность не может превышать 100. (24 − 18) / 24 · 100 = 25 показывает, насколько воздух далёк от насыщения; 43 и 57 получаются при делении на сумму давлений.",
        "ar": "الرطوبة النسبية = (ضغط بخار الماء في الهواء / ضغط البخار المشبع) · 100 = (18 / 24) · 100 = 75. وقلب النسبة يعطي (24 / 18) · 100 ≈ 133، وهذا يناقض أن الرطوبة النسبية لا تتجاوز 100. أما (24 − 18) / 24 · 100 = 25 فيبيّن بُعد الهواء عن التشبع، والقيمتان 43 و57 تنتجان عن القسمة على مجموع الضغطين.",
        "zh": "相对湿度 =（空气中水蒸气压 / 饱和蒸气压）· 100 =（18 / 24）· 100 = 75。把比值颠倒会得到（24 / 18）· 100 ≈ 133，这与相对湿度不能超过 100 相矛盾。（24 − 18）/ 24 · 100 = 25 表示离饱和还差多少；43 和 57 是除以两压强之和得到的。",
        "ku": "Şiliya nisbî = (zexta buhara avê ya hewayê / zexta buharê ya têr) · 100 = (18 / 24) · 100 = 75. Heke rêje berovajî were danîn (24 / 18) · 100 ≈ 133 derdikeve; ev bi rastiya ku şiliya nisbî ji 100 derbas nabe re nakok e. (24 − 18) / 24 · 100 = 25 nîşan dide ka hewa çiqas ji têrbûnê dûr e; 43 û 57 ji parvekirina li ser berhevoka zextan tên."
      }
    },
    {
      "id": "u04-twin04",
      "stem": {
        "tr": "Saf sıvıların kaynama noktası ile ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Dış basınç arttıkça kaynama noktası yükselir.\nII. Kaynama süresince saf sıvının sıcaklığı artmaya devam eder.\nIII. Aynı dış basınçta kaynama noktası yüksek olan sıvının moleküller arası çekimleri genellikle daha güçlüdür.",
        "en": "Which of the following statements about the boiling point of pure liquids are correct?\nI. The boiling point rises as the external pressure increases.\nII. The temperature of a pure liquid keeps rising while it boils.\nIII. At the same external pressure, the liquid with the higher boiling point generally has stronger intermolecular attractions.",
        "de": "Welche Aussagen über den Siedepunkt reiner Flüssigkeiten sind richtig?\nI. Mit steigendem äußerem Druck steigt der Siedepunkt.\nII. Während des Siedens steigt die Temperatur einer reinen Flüssigkeit weiter an.\nIII. Bei gleichem äußerem Druck hat die Flüssigkeit mit dem höheren Siedepunkt im Allgemeinen stärkere zwischenmolekulare Anziehungen.",
        "fr": "Lesquelles des affirmations suivantes sur le point d'ébullition des liquides purs sont correctes ?\nI. Le point d'ébullition s'élève quand la pression extérieure augmente.\nII. La température d'un liquide pur continue d'augmenter pendant l'ébullition.\nIII. À même pression extérieure, le liquide au point d'ébullition le plus élevé a en général les attractions intermoléculaires les plus fortes.",
        "ru": "Какие утверждения о температуре кипения чистых жидкостей верны?\nI. С ростом внешнего давления температура кипения повышается.\nII. Во время кипения температура чистой жидкости продолжает расти.\nIII. При одинаковом внешнем давлении у жидкости с более высокой температурой кипения межмолекулярное притяжение, как правило, сильнее.",
        "ar": "أيّ العبارات الآتية عن درجة غليان السوائل النقية صحيحة؟\nI. ترتفع درجة الغليان بازدياد الضغط الخارجي.\nII. تستمر درجة حرارة السائل النقي في الارتفاع أثناء الغليان.\nIII. عند الضغط الخارجي نفسه يكون التجاذب بين جزيئات السائل الأعلى غلياناً أقوى عادةً.",
        "zh": "关于纯液体的沸点，下列说法中哪些正确？\nI. 外界压强增大，沸点升高。\nII. 纯液体沸腾过程中温度不断升高。\nIII. 在相同外界压强下，沸点较高的液体分子间吸引力一般较强。",
        "ku": "Derbarê xala kelandinê ya şileyên saf de kîjan gotin rast in?\nI. Her ku zexta derve zêde dibe xala kelandinê bilind dibe.\nII. Di dema kelandinê de germahiya şileya saf zêde dibe.\nIII. Di heman zexta derve de kişandina navbera molekulên şileya ku xala kelandinê bilindtir e bi giştî xurttir e."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "فقط I",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
          "ru": "Только II",
          "ar": "فقط II",
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
        "tr": "I doğrudur: sıvı, buhar basıncı dış basınca eşit olduğunda kaynar; dış basınç büyüdükçe bu eşitliğe daha yüksek sıcaklıkta ulaşılır. II yanlıştır: saf bir sıvı kaynarken verilen ısı moleküller arası çekimleri yenmek için harcanır, sıcaklık sabit kalır. III doğrudur: moleküller arası çekim güçlü olan sıvının buhar basıncı düşük olduğundan dış basınca ulaşmak için daha yüksek sıcaklık gerekir. Doğru yanıt: I ve III.",
        "en": "I is true: a liquid boils when its vapour pressure equals the external pressure; with a higher external pressure this happens at a higher temperature. II is false: while a pure liquid boils, the heat supplied is used to overcome intermolecular attractions and the temperature stays constant. III is true: a liquid with strong intermolecular attractions has a low vapour pressure and needs a higher temperature to reach the external pressure. Answer: I and III.",
        "de": "I ist richtig: Eine Flüssigkeit siedet, wenn ihr Dampfdruck gleich dem äußeren Druck ist; bei höherem Druck geschieht das bei höherer Temperatur. II ist falsch: Beim Sieden einer reinen Flüssigkeit wird die zugeführte Wärme zum Überwinden der Anziehungskräfte verbraucht, die Temperatur bleibt konstant. III ist richtig: Starke Anziehungskräfte bedeuten niedrigen Dampfdruck, also ist eine höhere Temperatur nötig. Antwort: I und III.",
        "fr": "I est vraie : un liquide bout quand sa pression de vapeur égale la pression extérieure ; si celle-ci augmente, il faut une température plus élevée. II est fausse : pendant l'ébullition d'un liquide pur, la chaleur fournie sert à vaincre les attractions intermoléculaires et la température reste constante. III est vraie : un liquide aux attractions fortes a une faible pression de vapeur et doit être chauffé davantage pour atteindre la pression extérieure. Réponse : I et III.",
        "ru": "I верно: жидкость кипит, когда давление её пара равно внешнему; при большем внешнем давлении это достигается при более высокой температуре. II неверно: при кипении чистой жидкости подводимая теплота расходуется на преодоление межмолекулярного притяжения, температура постоянна. III верно: при сильном притяжении давление пара низкое, и для достижения внешнего давления нужна более высокая температура. Ответ: I и III.",
        "ar": "العبارة I صحيحة: يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي، وكلما زاد الضغط الخارجي تحقق ذلك عند درجة أعلى. العبارة II خاطئة: أثناء غليان السائل النقي تُستهلك الحرارة في التغلب على التجاذب بين الجزيئات فتبقى درجة الحرارة ثابتة. العبارة III صحيحة: السائل قوي التجاذب ضغط بخاره منخفض فيحتاج درجة أعلى ليبلغ الضغط الخارجي. الإجابة: I وIII.",
        "zh": "I 正确：液体在蒸气压等于外界压强时沸腾，外界压强越大，达到这一条件所需温度越高。II 错误：纯液体沸腾时吸收的热量用于克服分子间吸引，温度保持不变。III 正确：分子间吸引力强的液体蒸气压低，需要更高温度才能达到外界压强。答案：I 和 III。",
        "ku": "I rast e: şile dema zexta buhara wê bi zexta derve re wekhev dibe dikele; her ku zexta derve mezin dibe ev wekhevî di germahiyeke bilindtir de pêk tê. II şaş e: dema şileya saf dikele germahiya tê dayîn ji bo bindestkirina kişandinên navbera molekulan tê xerckirin, germahî sabît dimîne. III rast e: zexta buhara şileya bi kişandina xurt nizm e, loma ji bo gihîştina zexta derve germahiyeke bilindtir lazim e. Bersiv: I û III."
      }
    },
    {
      "id": "u04-twin05",
      "stem": {
        "tr": "20 °C'de X, Y ve Z saf sıvılarının denge buhar basınçları sırasıyla 18 mmHg, 44 mmHg ve 442 mmHg'dir. Aynı dış basınçta bu sıvıların kaynama noktalarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "At 20 °C the equilibrium vapour pressures of the pure liquids X, Y and Z are 18 mmHg, 44 mmHg and 442 mmHg respectively. At the same external pressure, what is the order of their boiling points from highest to lowest?",
        "de": "Bei 20 °C betragen die Gleichgewichtsdampfdrücke der reinen Flüssigkeiten X, Y und Z 18 mmHg, 44 mmHg und 442 mmHg. Wie lautet bei gleichem äußerem Druck die Reihenfolge ihrer Siedepunkte von hoch nach niedrig?",
        "fr": "À 20 °C, les pressions de vapeur d'équilibre des liquides purs X, Y et Z valent respectivement 18 mmHg, 44 mmHg et 442 mmHg. À même pression extérieure, quel est l'ordre de leurs points d'ébullition, du plus élevé au plus bas ?",
        "ru": "При 20 °C равновесные давления пара чистых жидкостей X, Y и Z равны соответственно 18, 44 и 442 мм рт. ст. Каков порядок их температур кипения при одинаковом внешнем давлении от наибольшей к наименьшей?",
        "ar": "عند 20 °C تبلغ ضغوط البخار المتزنة للسوائل النقية X وY وZ على الترتيب 18 mmHg و44 mmHg و442 mmHg. ما ترتيب درجات غليانها من الأعلى إلى الأدنى عند الضغط الخارجي نفسه؟",
        "zh": "20 °C 时纯液体 X、Y、Z 的平衡蒸气压依次为 18 mmHg、44 mmHg 和 442 mmHg。在相同外界压强下，它们沸点由高到低的顺序是哪一项？",
        "ku": "Di 20 °C de zextên buharê yên hevseng ên şileyên saf X, Y û Z bi rêzê 18 mmHg, 44 mmHg û 442 mmHg in. Di heman zexta derve de rêzkirina xalên kelandinê yên wan ji bilind ber bi nizm kîjan e?"
      },
      "options": [
        {
          "tr": "X > Y > Z",
          "en": "X > Y > Z",
          "de": "X > Y > Z",
          "fr": "X > Y > Z",
          "ru": "X > Y > Z",
          "ar": "X > Y > Z",
          "zh": "X > Y > Z",
          "ku": "X > Y > Z"
        },
        {
          "tr": "Z > Y > X",
          "en": "Z > Y > X",
          "de": "Z > Y > X",
          "fr": "Z > Y > X",
          "ru": "Z > Y > X",
          "ar": "Z > Y > X",
          "zh": "Z > Y > X",
          "ku": "Z > Y > X"
        },
        {
          "tr": "Y > X > Z",
          "en": "Y > X > Z",
          "de": "Y > X > Z",
          "fr": "Y > X > Z",
          "ru": "Y > X > Z",
          "ar": "Y > X > Z",
          "zh": "Y > X > Z",
          "ku": "Y > X > Z"
        },
        {
          "tr": "Z > X > Y",
          "en": "Z > X > Y",
          "de": "Z > X > Y",
          "fr": "Z > X > Y",
          "ru": "Z > X > Y",
          "ar": "Z > X > Y",
          "zh": "Z > X > Y",
          "ku": "Z > X > Y"
        },
        {
          "tr": "Y > Z > X",
          "en": "Y > Z > X",
          "de": "Y > Z > X",
          "fr": "Y > Z > X",
          "ru": "Y > Z > X",
          "ar": "Y > Z > X",
          "zh": "Y > Z > X",
          "ku": "Y > Z > X"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bir sıvı, buhar basıncı dış basınca eşit olduğunda kaynar. Aynı sıcaklıkta buhar basıncı büyük olan sıvı (Z) dış basınca daha düşük sıcaklıkta ulaşır ve en düşük sıcaklıkta kaynar; buhar basıncı en küçük olan X ise en yüksek sıcaklıkta kaynar. Aynı sıcaklıktaki buhar basıncı büyüdükçe kaynama noktası düştüğü için sıralama X > Y > Z olur. Buhar basıncı büyük olanın kaynama noktasını da büyük sanmak sık yapılan hatadır.",
        "en": "A liquid boils when its vapour pressure equals the external pressure. The liquid with the highest vapour pressure at a given temperature (Z) reaches the external pressure at a lower temperature and boils lowest; X, with the smallest vapour pressure, boils highest. Since the higher the vapour pressure at a given temperature, the lower the boiling point, the order is X > Y > Z. Assuming the liquid with the higher vapour pressure has the higher boiling point is a common mistake.",
        "de": "Eine Flüssigkeit siedet, wenn ihr Dampfdruck gleich dem äußeren Druck ist. Die Flüssigkeit mit dem höchsten Dampfdruck (Z) erreicht ihn bei niedrigerer Temperatur und siedet am niedrigsten; X mit dem kleinsten Dampfdruck siedet am höchsten. Da Dampfdruck und Siedepunkt gegenläufig sind, gilt X > Y > Z. Höheren Dampfdruck mit höherem Siedepunkt gleichzusetzen ist ein häufiger Fehler.",
        "fr": "Un liquide bout quand sa pression de vapeur égale la pression extérieure. Le liquide à la plus forte pression de vapeur (Z) l'atteint à plus basse température et bout le plus bas ; X, à la plus faible pression de vapeur, bout le plus haut. Pression de vapeur et point d'ébullition variant en sens inverse, l'ordre est X > Y > Z. Croire qu'une forte pression de vapeur donne un point d'ébullition élevé est une erreur fréquente.",
        "ru": "Жидкость кипит, когда давление её пара равно внешнему. Жидкость с наибольшим давлением пара (Z) достигает внешнего давления при более низкой температуре и кипит ниже всех; X с наименьшим давлением пара кипит при самой высокой температуре. Давление пара и температура кипения изменяются в противоположных направлениях, поэтому X > Y > Z. Считать, что большее давление пара означает более высокую температуру кипения, — частая ошибка.",
        "ar": "يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي. والسائل الأعلى ضغط بخار (Z) يبلغ الضغط الخارجي عند درجة أدنى فيغلي عند أدنى درجة، أما X الأقل ضغط بخار فيغلي عند أعلى درجة. ولأن ضغط البخار ودرجة الغليان يتغيران عكسياً فالترتيب X > Y > Z. واعتبار السائل الأعلى ضغط بخار هو الأعلى غلياناً خطأ شائع.",
        "zh": "液体在蒸气压等于外界压强时沸腾。同温度下蒸气压最大的 Z 在较低温度就能达到外界压强，沸点最低；蒸气压最小的 X 沸点最高。蒸气压与沸点变化方向相反，所以顺序为 X > Y > Z。认为蒸气压大的液体沸点也高是常见错误。",
        "ku": "Şile dema zexta buhara wê bi zexta derve re wekhev dibe dikele. Şileya ku zexta buhara wê herî mezin e (Z) di germahiyeke nizmtir de digihîje zexta derve û herî nizm dikele; X ya ku zexta buhara wê herî biçûk e herî bilind dikele. Ji ber ku zexta buharê û xala kelandinê berevajî diguherin, rêz X > Y > Z ye. Hesibandina ku şileya bi zexta buharê ya mezin xala kelandinê jî bilind e şaşiyeke asayî ye."
      }
    },
    {
      "id": "u04-twin06",
      "stem": {
        "tr": "Saf bir X katısı sabit basınçta, sabit hızla ısıtılıyor. Sıcaklık–zaman verileri şöyledir:\n0–2. dakika: −20 °C'den 10 °C'ye çıkıyor\n2–6. dakika: 10 °C'de sabit kalıyor\n6–9. dakika: 10 °C'den 60 °C'ye çıkıyor\n9–15. dakika: 60 °C'de sabit kalıyor\nBuna göre aşağıdakilerden hangisi yanlıştır?",
        "en": "A pure solid X is heated at constant pressure and a constant rate. The temperature–time data are:\n0–2 min: rises from −20 °C to 10 °C\n2–6 min: stays at 10 °C\n6–9 min: rises from 10 °C to 60 °C\n9–15 min: stays at 60 °C\nWhich of the following is incorrect?",
        "de": "Ein reiner Feststoff X wird bei konstantem Druck gleichmäßig erhitzt. Temperatur-Zeit-Daten:\n0–2 min: Anstieg von −20 °C auf 10 °C\n2–6 min: konstant bei 10 °C\n6–9 min: Anstieg von 10 °C auf 60 °C\n9–15 min: konstant bei 60 °C\nWelche Aussage ist falsch?",
        "fr": "Un solide pur X est chauffé à pression constante et à vitesse constante. Données température–temps :\n0–2 min : passe de −20 °C à 10 °C\n2–6 min : reste à 10 °C\n6–9 min : passe de 10 °C à 60 °C\n9–15 min : reste à 60 °C\nLaquelle des affirmations suivantes est incorrecte ?",
        "ru": "Чистое твёрдое вещество X равномерно нагревают при постоянном давлении. Данные «температура – время»:\n0–2 мин: от −20 °C до 10 °C\n2–6 мин: постоянно 10 °C\n6–9 мин: от 10 °C до 60 °C\n9–15 мин: постоянно 60 °C\nКакое утверждение неверно?",
        "ar": "تُسخَّن مادة صلبة نقية X عند ضغط ثابت وبمعدل ثابت. بيانات درجة الحرارة والزمن:\n0–2 دقيقة: ترتفع من −20 °C إلى 10 °C\n2–6 دقيقة: تبقى عند 10 °C\n6–9 دقيقة: ترتفع من 10 °C إلى 60 °C\n9–15 دقيقة: تبقى عند 60 °C\nأيّ العبارات الآتية خاطئة؟",
        "zh": "在恒压下以恒定速率加热纯固体 X，温度–时间数据如下：\n0–2 min：由 −20 °C 升至 10 °C\n2–6 min：保持 10 °C\n6–9 min：由 10 °C 升至 60 °C\n9–15 min：保持 60 °C\n下列说法错误的是哪一项？",
        "ku": "Hişkeke saf X di zexta sabît de û bi leza sabît tê germkirin. Daneyên germahî–dem ev in:\n0–2. deqe: ji −20 °C derdikeve 10 °C\n2–6. deqe: li 10 °C sabît dimîne\n6–9. deqe: ji 10 °C derdikeve 60 °C\n9–15. deqe: li 60 °C sabît dimîne\nLi gorî vê, kîjan şaş e?"
      },
      "options": [
        {
          "tr": "X'in erime noktası 10 °C'dir.",
          "en": "The melting point of X is 10 °C.",
          "de": "Der Schmelzpunkt von X beträgt 10 °C.",
          "fr": "Le point de fusion de X est 10 °C.",
          "ru": "Температура плавления X равна 10 °C.",
          "ar": "درجة انصهار X هي 10 °C.",
          "zh": "X 的熔点是 10 °C。",
          "ku": "Xala helînê ya X 10 °C ye."
        },
        {
          "tr": "X'in bu basınçtaki kaynama noktası 60 °C'dir.",
          "en": "The boiling point of X at this pressure is 60 °C.",
          "de": "Der Siedepunkt von X bei diesem Druck beträgt 60 °C.",
          "fr": "Le point d'ébullition de X à cette pression est 60 °C.",
          "ru": "Температура кипения X при этом давлении равна 60 °C.",
          "ar": "درجة غليان X عند هذا الضغط هي 60 °C.",
          "zh": "X 在此压强下的沸点是 60 °C。",
          "ku": "Xala kelandinê ya X di vê zextê de 60 °C ye."
        },
        {
          "tr": "6–9. dakikalar arasında X yalnızca sıvı hâldedir.",
          "en": "Between 6 and 9 min X is liquid only.",
          "de": "Zwischen 6 und 9 min ist X nur flüssig.",
          "fr": "Entre 6 et 9 min, X est uniquement liquide.",
          "ru": "С 6-й по 9-ю минуту X находится только в жидком состоянии.",
          "ar": "بين الدقيقتين 6 و9 تكون X في الحالة السائلة فقط.",
          "zh": "6–9 min 时 X 只以液态存在。",
          "ku": "Di navbera deqeyên 6–9. de X tenê şile ye."
        },
        {
          "tr": "2–6. dakikalar arasında katı ve sıvı X bir arada bulunur.",
          "en": "Between 2 and 6 min solid and liquid X are present together.",
          "de": "Zwischen 2 und 6 min liegen fester und flüssiger Stoff X nebeneinander vor.",
          "fr": "Entre 2 et 6 min, X solide et X liquide coexistent.",
          "ru": "С 2-й по 6-ю минуту твёрдое и жидкое X существуют одновременно.",
          "ar": "بين الدقيقتين 2 و6 توجد X الصلبة والسائلة معاً.",
          "zh": "2–6 min 时固态和液态 X 共存。",
          "ku": "Di navbera deqeyên 2–6. de X ya hişk û şile bi hev re hene."
        },
        {
          "tr": "9–15. dakikalar arasında X taneciklerinin ortalama kinetik enerjisi artar.",
          "en": "Between 9 and 15 min the average kinetic energy of the particles of X increases.",
          "de": "Zwischen 9 und 15 min nimmt die mittlere kinetische Energie der Teilchen von X zu.",
          "fr": "Entre 9 et 15 min, l'énergie cinétique moyenne des particules de X augmente.",
          "ru": "С 9-й по 15-ю минуту средняя кинетическая энергия частиц X увеличивается.",
          "ar": "بين الدقيقتين 9 و15 يزداد متوسط الطاقة الحركية لدقائق X.",
          "zh": "9–15 min 时 X 微粒的平均动能增大。",
          "ku": "Di navbera deqeyên 9–15. de enerjiya kînetîk a navîn a perçikên X zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Isıtma sırasında sıcaklığın sabit kaldığı ilk bölüm (10 °C) erime, ikinci bölüm (60 °C) kaynamadır; 2–6. dakikalarda katı ve sıvı bir aradadır, 6–9. dakikalarda yalnızca sıvı ısınır. Ortalama kinetik enerji sıcaklığa bağlıdır; 9–15. dakikalarda sıcaklık sabit olduğundan ortalama kinetik enerji değişmez, verilen ısı moleküller arası çekimleri yenmek için harcanır (potansiyel enerji artar). Bu yüzden yanlış olan ifade kinetik enerjinin arttığını söyleyendir.",
        "en": "During heating, the first constant-temperature stage (10 °C) is melting and the second (60 °C) is boiling; from 2 to 6 min solid and liquid coexist, and from 6 to 9 min only liquid is warming. Average kinetic energy depends on temperature; from 9 to 15 min the temperature is constant, so average kinetic energy does not change — the heat goes into overcoming intermolecular attractions (potential energy rises). The incorrect statement is therefore the one saying kinetic energy increases.",
        "de": "Beim Erhitzen ist der erste Haltepunkt (10 °C) das Schmelzen, der zweite (60 °C) das Sieden; von 2 bis 6 min liegen fest und flüssig nebeneinander vor, von 6 bis 9 min erwärmt sich nur Flüssigkeit. Die mittlere kinetische Energie hängt von der Temperatur ab; von 9 bis 15 min ist die Temperatur konstant, sie ändert sich also nicht – die Wärme dient zum Überwinden der Anziehungskräfte (potenzielle Energie steigt). Falsch ist daher die Aussage über steigende kinetische Energie.",
        "fr": "Lors du chauffage, le premier palier (10 °C) correspond à la fusion et le second (60 °C) à l'ébullition ; de 2 à 6 min solide et liquide coexistent, de 6 à 9 min seul le liquide s'échauffe. L'énergie cinétique moyenne dépend de la température ; de 9 à 15 min la température est constante, elle ne varie donc pas : la chaleur sert à vaincre les attractions intermoléculaires (l'énergie potentielle augmente). L'affirmation fausse est celle qui parle d'une hausse de l'énergie cinétique.",
        "ru": "При нагревании первая площадка (10 °C) — плавление, вторая (60 °C) — кипение; с 2-й по 6-ю минуту твёрдая и жидкая фазы сосуществуют, с 6-й по 9-ю нагревается только жидкость. Средняя кинетическая энергия зависит от температуры; с 9-й по 15-ю минуту температура постоянна, значит, средняя кинетическая энергия не меняется — теплота идёт на преодоление межмолекулярного притяжения (растёт потенциальная энергия). Поэтому неверно утверждение о росте кинетической энергии.",
        "ar": "أثناء التسخين يمثل الثبات الأول لدرجة الحرارة (10 °C) الانصهار والثاني (60 °C) الغليان؛ وبين الدقيقتين 2 و6 توجد الحالتان الصلبة والسائلة معاً، وبين 6 و9 يسخن السائل فقط. ويعتمد متوسط الطاقة الحركية على درجة الحرارة، وبين 9 و15 تكون الدرجة ثابتة فلا يتغير، بل تُستهلك الحرارة في التغلب على التجاذب بين الجزيئات (تزداد الطاقة الكامنة). لذا فالعبارة الخاطئة هي التي تقول إن الطاقة الحركية تزداد.",
        "zh": "加热过程中第一个温度不变的阶段（10 °C）是熔化，第二个（60 °C）是沸腾；2–6 min 固液共存，6–9 min 只有液体在升温。平均动能取决于温度；9–15 min 温度不变，平均动能不变，吸收的热量用于克服分子间吸引（势能增大）。所以错误的是“平均动能增大”这一说法。",
        "ku": "Di germkirinê de beşa yekem a ku germahî sabît dimîne (10 °C) helîn, ya duyem (60 °C) kelandin e; di deqeyên 2–6. de hişk û şile bi hev re ne, di deqeyên 6–9. de tenê şile germ dibe. Enerjiya kînetîk a navîn bi germahiyê ve girêdayî ye; di deqeyên 9–15. de germahî sabît e, loma naguhere — germahiya tê dayîn ji bo bindestkirina kişandinên navbera molekulan tê xerckirin (enerjiya potansiyel zêde dibe). Ji ber vê yekê gotina şaş ew e ku dibêje enerjiya kînetîk zêde dibe."
      }
    },
    {
      "id": "u04-twin07",
      "stem": {
        "tr": "X, Y ve Z katılarının bazı özellikleri şöyledir:\nX: Çok serttir, erime noktası çok yüksektir; katı ve sıvı hâlde elektriği iletmez.\nY: Sert ama kırılgandır, erime noktası yüksektir; katı hâlde iletmez, sıvı hâlde iletir.\nZ: Yumuşaktır, erime noktası düşüktür; hiçbir hâlde elektriği iletmez.\nBuna göre X, Y ve Z sırasıyla aşağıdakilerden hangisi olabilir?",
        "en": "Some properties of the solids X, Y and Z are:\nX: very hard, very high melting point; does not conduct electricity as a solid or liquid.\nY: hard but brittle, high melting point; does not conduct as a solid but conducts as a liquid.\nZ: soft, low melting point; does not conduct electricity in any state.\nWhich could X, Y and Z be, respectively?",
        "de": "Einige Eigenschaften der Feststoffe X, Y und Z:\nX: sehr hart, sehr hoher Schmelzpunkt; leitet weder fest noch flüssig.\nY: hart, aber spröde, hoher Schmelzpunkt; leitet fest nicht, flüssig schon.\nZ: weich, niedriger Schmelzpunkt; leitet in keinem Zustand.\nWelche Stoffe können X, Y und Z (in dieser Reihenfolge) sein?",
        "fr": "Quelques propriétés des solides X, Y et Z :\nX : très dur, point de fusion très élevé ; ne conduit l'électricité ni à l'état solide ni à l'état liquide.\nY : dur mais cassant, point de fusion élevé ; ne conduit pas à l'état solide mais conduit à l'état liquide.\nZ : tendre, point de fusion bas ; ne conduit l'électricité dans aucun état.\nQue peuvent être respectivement X, Y et Z ?",
        "ru": "Некоторые свойства твёрдых веществ X, Y и Z:\nX: очень твёрдое, очень высокая температура плавления; не проводит ток ни в твёрдом, ни в жидком состоянии.\nY: твёрдое, но хрупкое, высокая температура плавления; в твёрдом состоянии не проводит, в жидком проводит.\nZ: мягкое, низкая температура плавления; не проводит ток ни в каком состоянии.\nКакими веществами могут быть соответственно X, Y и Z?",
        "ar": "فيما يلي بعض خواص المواد الصلبة X وY وZ:\nX: شديدة الصلابة، درجة انصهارها عالية جداً، لا توصل الكهرباء صلبةً ولا سائلةً.\nY: صلبة لكنها هشة، درجة انصهارها عالية، لا توصل صلبةً وتوصل سائلةً.\nZ: طرية، درجة انصهارها منخفضة، لا توصل الكهرباء في أيّ حالة.\nماذا يمكن أن تكون X وY وZ على الترتيب؟",
        "zh": "固体 X、Y、Z 的部分性质如下：\nX：非常坚硬，熔点很高；固态和液态都不导电。\nY：硬而脆，熔点高；固态不导电，液态导电。\nZ：质软，熔点低；任何状态都不导电。\nX、Y、Z 依次可能是下列哪一组？",
        "ku": "Hin taybetiyên hişkên X, Y û Z ev in:\nX: Pir hişk e, xala helînê pir bilind e; di rewşa hişk û şile de elektrîkê naguhezîne.\nY: Hişk lê şikestbar e, xala helînê bilind e; di rewşa hişk de naguhezîne, di rewşa şile de diguhezîne.\nZ: Nerm e, xala helînê nizm e; di tu rewşê de elektrîkê naguhezîne.\nLi gorî vê, X, Y û Z bi rêzê dikarin kîjan bin?"
      },
      "options": [
        {
          "tr": "NaCl, kuvars (SiO2), buz",
          "en": "NaCl, quartz (SiO2), ice",
          "de": "NaCl, Quarz (SiO2), Eis",
          "fr": "NaCl, quartz (SiO2), glace",
          "ru": "NaCl, кварц (SiO2), лёд",
          "ar": "NaCl، الكوارتز (SiO2)، الجليد",
          "zh": "NaCl、石英（SiO2）、冰",
          "ku": "NaCl, kuvars (SiO2), cemed"
        },
        {
          "tr": "Buz, NaCl, kuvars (SiO2)",
          "en": "Ice, NaCl, quartz (SiO2)",
          "de": "Eis, NaCl, Quarz (SiO2)",
          "fr": "Glace, NaCl, quartz (SiO2)",
          "ru": "Лёд, NaCl, кварц (SiO2)",
          "ar": "الجليد، NaCl، الكوارتز (SiO2)",
          "zh": "冰、NaCl、石英（SiO2）",
          "ku": "Cemed, NaCl, kuvars (SiO2)"
        },
        {
          "tr": "Kuvars (SiO2), NaCl, buz",
          "en": "Quartz (SiO2), NaCl, ice",
          "de": "Quarz (SiO2), NaCl, Eis",
          "fr": "Quartz (SiO2), NaCl, glace",
          "ru": "Кварц (SiO2), NaCl, лёд",
          "ar": "الكوارتز (SiO2)، NaCl، الجليد",
          "zh": "石英（SiO2）、NaCl、冰",
          "ku": "Kuvars (SiO2), NaCl, cemed"
        },
        {
          "tr": "Kuvars (SiO2), buz, NaCl",
          "en": "Quartz (SiO2), ice, NaCl",
          "de": "Quarz (SiO2), Eis, NaCl",
          "fr": "Quartz (SiO2), glace, NaCl",
          "ru": "Кварц (SiO2), лёд, NaCl",
          "ar": "الكوارتز (SiO2)، الجليد، NaCl",
          "zh": "石英（SiO2）、冰、NaCl",
          "ku": "Kuvars (SiO2), cemed, NaCl"
        },
        {
          "tr": "Demir, NaCl, buz",
          "en": "Iron, NaCl, ice",
          "de": "Eisen, NaCl, Eis",
          "fr": "Fer, NaCl, glace",
          "ru": "Железо, NaCl, лёд",
          "ar": "الحديد، NaCl، الجليد",
          "zh": "铁、NaCl、冰",
          "ku": "Hesin, NaCl, cemed"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Çok sert, erime noktası çok yüksek ve hiçbir hâlde iletken olmayan X, atomları kovalent bağlarla ağ oluşturmuş bir katıdır: kuvars. Katıyken iletmeyip eriyiği iletken olan, sert ve kırılgan Y iyonik katıdır: NaCl. Yumuşak, erime noktası düşük ve yalıtkan Z moleküler katıdır: buz. Demir katı hâlde elektriği ilettiği için X olamaz.",
        "en": "X — very hard, very high melting point and non-conducting in every state — is a solid whose atoms form a covalent network: quartz. Y — hard and brittle, non-conducting as a solid but conducting when molten — is ionic: NaCl. Z — soft, low-melting and insulating — is a molecular solid: ice. Iron conducts electricity as a solid, so it cannot be X.",
        "de": "X – sehr hart, sehr hoher Schmelzpunkt, in keinem Zustand leitend – ist ein Feststoff mit kovalentem Atomnetz: Quarz. Y – hart und spröde, fest nichtleitend, geschmolzen leitend – ist ionisch: NaCl. Z – weich, niedrig schmelzend, nichtleitend – ist ein Molekülkristall: Eis. Eisen leitet im festen Zustand und kann daher nicht X sein.",
        "fr": "X — très dur, point de fusion très élevé, non conducteur dans tout état — est un solide dont les atomes forment un réseau covalent : le quartz. Y — dur et cassant, isolant à l'état solide mais conducteur fondu — est ionique : NaCl. Z — tendre, à bas point de fusion et isolant — est un solide moléculaire : la glace. Le fer conduit à l'état solide, il ne peut donc pas être X.",
        "ru": "X — очень твёрдое, с очень высокой температурой плавления и не проводящее ток ни в каком состоянии — вещество с ковалентной атомной сеткой: кварц. Y — твёрдое и хрупкое, не проводит в твёрдом виде, но проводит в расплаве — ионное: NaCl. Z — мягкое, легкоплавкое, непроводящее — молекулярное: лёд. Железо проводит ток в твёрдом состоянии, поэтому не может быть X.",
        "ar": "X الشديدة الصلابة العالية الانصهار جداً غير الموصلة في أيّ حالة مادة صلبة ترتبط ذراتها بروابط تساهمية شبكية: الكوارتز. وY الصلبة الهشة غير الموصلة صلبةً والموصلة مصهورةً أيونية: NaCl. وZ الطرية المنخفضة الانصهار العازلة صلب جزيئي: الجليد. والحديد يوصل الكهرباء صلباً فلا يمكن أن يكون X.",
        "zh": "X 非常坚硬、熔点很高、任何状态都不导电，是原子以共价键连成网状结构的固体：石英。Y 硬而脆、固态不导电而熔融态导电，是离子晶体：NaCl。Z 质软、熔点低、不导电，是分子晶体：冰。铁在固态时能导电，所以不可能是 X。",
        "ku": "X ya pir hişk, bi xala helînê ya pir bilind û di tu rewşê de neguhêzer, hişkeke ku atomên wê bi girêdanên kovalent torekê çêdikin e: kuvars. Y ya hişk û şikestbar, di rewşa hişk de neguhêzer lê dema dihele guhêzer, îyonîk e: NaCl. Z ya nerm, bi xala helînê ya nizm û îzolator, hişkeke molekulî ye: cemed. Hesin di rewşa hişk de elektrîkê diguhezîne, loma nabe X."
      }
    },
    {
      "id": "u04-twin08",
      "stem": {
        "tr": "Cam ısıtıldığında belirli bir sıcaklıkta erimez; geniş bir sıcaklık aralığında yavaş yavaş yumuşayarak akışkan hâle gelir. Bunun nedeni aşağıdakilerden hangisidir?",
        "en": "When glass is heated it does not melt at a definite temperature; it gradually softens and becomes fluid over a wide temperature range. What is the reason?",
        "de": "Glas schmilzt beim Erhitzen nicht bei einer bestimmten Temperatur, sondern wird über einen weiten Temperaturbereich allmählich weich und fließfähig. Was ist der Grund?",
        "fr": "Chauffé, le verre ne fond pas à une température déterminée ; il se ramollit progressivement sur un large intervalle de températures. Pourquoi ?",
        "ru": "При нагревании стекло не плавится при определённой температуре, а постепенно размягчается в широком интервале температур. В чём причина?",
        "ar": "عند تسخين الزجاج لا ينصهر عند درجة محددة، بل يلين تدريجياً ويصبح مائعاً على مدى واسع من درجات الحرارة. ما سبب ذلك؟",
        "zh": "玻璃受热时并不在某一固定温度熔化，而是在较宽的温度范围内逐渐软化变成流体。原因是什么？",
        "ku": "Dema cam tê germkirin di germahiyeke diyar de nahele; di navberekê fireh a germahiyê de hêdî hêdî nerm dibe û diherike. Sedema vê çi ye?"
      },
      "options": [
        {
          "tr": "Camın metalik bağlı bir katı olması",
          "en": "Glass is a metallically bonded solid",
          "de": "Glas ist ein metallisch gebundener Feststoff",
          "fr": "Le verre est un solide à liaison métallique",
          "ru": "Стекло — твёрдое вещество с металлической связью",
          "ar": "كون الزجاج مادة صلبة ذات روابط فلزية",
          "zh": "玻璃是以金属键结合的固体",
          "ku": "Cam hişkeke bi girêdana metalî ye"
        },
        {
          "tr": "Cam taneciklerinin düzenli bir örgü oluşturmadan gelişigüzel dizilmiş olması",
          "en": "The particles of glass are arranged randomly without forming an ordered lattice",
          "de": "Die Teilchen des Glases sind ungeordnet, ohne ein regelmäßiges Gitter zu bilden",
          "fr": "Les particules du verre sont disposées au hasard, sans former de réseau ordonné",
          "ru": "Частицы стекла расположены хаотично, не образуя упорядоченной решётки",
          "ar": "ترتّب دقائق الزجاج عشوائياً دون تكوين شبكة منتظمة",
          "zh": "玻璃微粒杂乱排列，没有形成有序的晶格",
          "ku": "Perçikên camê bê ku torekê rêkûpêk çêkin bi awayekî tevlihev rêz bûne"
        },
        {
          "tr": "Cam taneciklerinin düzenli ve tekrarlanan bir kristal örgüde dizilmesi",
          "en": "The particles of glass are arranged in a regular, repeating crystal lattice",
          "de": "Die Teilchen des Glases bilden ein regelmäßiges, sich wiederholendes Kristallgitter",
          "fr": "Les particules du verre forment un réseau cristallin régulier et répétitif",
          "ru": "Частицы стекла образуют правильную повторяющуюся кристаллическую решётку",
          "ar": "ترتّب دقائق الزجاج في شبكة بلورية منتظمة ومتكررة",
          "zh": "玻璃微粒排列成规则、重复的晶格",
          "ku": "Perçikên camê di torê krîstalê ya rêkûpêk û dubarebûyî de rêz bûne"
        },
        {
          "tr": "Camın moleküler kristal olması",
          "en": "Glass is a molecular crystal",
          "de": "Glas ist ein Molekülkristall",
          "fr": "Le verre est un cristal moléculaire",
          "ru": "Стекло — молекулярный кристалл",
          "ar": "كون الزجاج بلورة جزيئية",
          "zh": "玻璃是分子晶体",
          "ku": "Cam krîstaleke molekulî ye"
        },
        {
          "tr": "Camın içindeki suyun ısıtılınca buharlaşması",
          "en": "The water inside the glass evaporates when heated",
          "de": "Das Wasser im Glas verdampft beim Erhitzen",
          "fr": "L'eau contenue dans le verre s'évapore quand on le chauffe",
          "ru": "Вода внутри стекла испаряется при нагревании",
          "ar": "تبخّر الماء الموجود داخل الزجاج عند التسخين",
          "zh": "玻璃中的水受热蒸发",
          "ku": "Ava di hundirê camê de dema tê germkirin dibuhire"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kristal katılarda tanecikler düzenli bir örgüde dizildiği için tüm bağlar aynı sıcaklıkta yenilir ve keskin bir erime noktası gözlenir. Camda ise tanecikler gelişigüzel (amorf) dizildiğinden aralarındaki etkileşimlerin gücü yer yer farklıdır; bu etkileşimler farklı sıcaklıklarda yenildiği için cam bir sıcaklık aralığında yumuşar. Cam metalik veya moleküler kristal değildir; yumuşamanın nedeni su kaybı da değildir.",
        "en": "In crystalline solids the particles form an ordered lattice, so all the interactions are overcome at the same temperature and a sharp melting point is seen. In glass the particles are arranged randomly (amorphous), so the strength of the interactions varies from place to place; they are overcome at different temperatures and glass softens over a range. Glass is neither a metallic nor a molecular crystal, and the softening is not caused by loss of water.",
        "de": "In kristallinen Feststoffen bilden die Teilchen ein geordnetes Gitter, alle Wechselwirkungen werden bei derselben Temperatur überwunden – es gibt einen scharfen Schmelzpunkt. Im Glas sind die Teilchen ungeordnet (amorph), die Wechselwirkungen sind unterschiedlich stark und werden bei verschiedenen Temperaturen überwunden; Glas erweicht daher über einen Bereich. Glas ist weder Metall- noch Molekülkristall, und das Erweichen kommt nicht von Wasserverlust.",
        "fr": "Dans un solide cristallin, les particules forment un réseau ordonné : toutes les interactions cèdent à la même température et l'on observe un point de fusion net. Dans le verre, les particules sont disposées au hasard (amorphe), la force des interactions varie d'un endroit à l'autre ; elles cèdent à des températures différentes et le verre se ramollit sur un intervalle. Le verre n'est ni un cristal métallique ni un cristal moléculaire, et le ramollissement n'est pas dû à une perte d'eau.",
        "ru": "В кристаллических веществах частицы образуют упорядоченную решётку, и все взаимодействия преодолеваются при одной температуре — наблюдается чёткая температура плавления. В стекле частицы расположены хаотично (аморфно), сила взаимодействий различается, и они преодолеваются при разных температурах, поэтому стекло размягчается в интервале. Стекло не металлический и не молекулярный кристалл, а размягчение не связано с потерей воды.",
        "ar": "في المواد الصلبة البلورية تترتب الدقائق في شبكة منتظمة، فيُتغلَّب على جميع التآثرات عند الدرجة نفسها وتظهر درجة انصهار حادة. أما في الزجاج فتترتب الدقائق عشوائياً (غير متبلور)، فتختلف قوة التآثرات من موضع لآخر ويُتغلَّب عليها عند درجات مختلفة، فيلين الزجاج على مدى من الدرجات. والزجاج ليس بلورة فلزية ولا جزيئية، وليونته لا تعود إلى فقد الماء.",
        "zh": "晶体中微粒排列成有序的晶格，所有相互作用在同一温度被克服，所以有固定熔点。玻璃中微粒杂乱排列（非晶态），各处相互作用强弱不同，在不同温度下被克服，因此玻璃在一个温度范围内软化。玻璃既不是金属晶体也不是分子晶体，软化也不是失水造成的。",
        "ku": "Di hişkên krîstalî de perçik di torekê rêkûpêk de rêz dibin, loma hemû têkilî di heman germahiyê de tên bindestkirin û xala helînê ya tûj tê dîtin. Di camê de perçik bi awayekî tevlihev (amorf) rêz bûne, loma hêza têkiliyan ji cihekî bo cihekî cuda ye; ev di germahiyên cuda de tên bindestkirin û cam di navberekê de nerm dibe. Cam ne krîstala metalî ne jî molekulî ye; sedema nermbûnê ne windabûna avê ye."
      }
    },
    {
      "id": "u04-twin09",
      "stem": {
        "tr": "Düdüklü tencerede yemeklerin normal tencereye göre daha kısa sürede pişmesinin nedeni aşağıdakilerden hangisidir?",
        "en": "Why does food cook faster in a pressure cooker than in an ordinary pot?",
        "de": "Warum gart Essen im Schnellkochtopf schneller als in einem gewöhnlichen Topf?",
        "fr": "Pourquoi les aliments cuisent-ils plus vite dans un autocuiseur que dans une casserole ordinaire ?",
        "ru": "Почему в скороварке пища готовится быстрее, чем в обычной кастрюле?",
        "ar": "لماذا يُطهى الطعام في قدر الضغط أسرع منه في القدر العادي؟",
        "zh": "为什么用高压锅煮食物比用普通锅快？",
        "ku": "Çima xwarin di beroşa bi zext de ji beroşa asayî zûtir dipije?"
      },
      "options": [
        {
          "tr": "Tencerede suyun buharlaşma ısısı sıfıra iner.",
          "en": "The heat of vaporisation of water in the pot drops to zero.",
          "de": "Die Verdampfungswärme des Wassers im Topf sinkt auf null.",
          "fr": "La chaleur de vaporisation de l'eau dans l'autocuiseur devient nulle.",
          "ru": "Теплота испарения воды в скороварке становится равной нулю.",
          "ar": "تنخفض حرارة تبخر الماء في القدر إلى الصفر.",
          "zh": "锅内水的汽化热降为零。",
          "ku": "Di beroşê de germahiya buharbûna avê dibe sifir."
        },
        {
          "tr": "Kapak ısı kaybını önlediği için su 100 °C'nin altında kaynar.",
          "en": "The lid prevents heat loss, so water boils below 100 °C.",
          "de": "Der Deckel verhindert Wärmeverluste, daher siedet Wasser unter 100 °C.",
          "fr": "Le couvercle empêche les pertes de chaleur, l'eau bout donc en dessous de 100 °C.",
          "ru": "Крышка предотвращает потери тепла, поэтому вода кипит ниже 100 °C.",
          "ar": "يمنع الغطاء فقد الحرارة فيغلي الماء تحت 100 °C.",
          "zh": "锅盖防止热量散失，所以水在 100 °C 以下沸腾。",
          "ku": "Ji ber ku qapax rê li windabûna germê digire av di bin 100 °C de dikele."
        },
        {
          "tr": "Tencere içindeki basınç arttığından su 100 °C'nin üzerinde kaynar.",
          "en": "The pressure inside increases, so water boils above 100 °C.",
          "de": "Der Innendruck steigt, daher siedet Wasser über 100 °C.",
          "fr": "La pression intérieure augmente, l'eau bout donc au-dessus de 100 °C.",
          "ru": "Давление внутри повышается, поэтому вода кипит выше 100 °C.",
          "ar": "يرتفع الضغط داخل القدر فيغلي الماء فوق 100 °C.",
          "zh": "锅内压强增大，所以水在 100 °C 以上沸腾。",
          "ku": "Ji ber ku zexta hundirê beroşê zêde dibe av li ser 100 °C dikele."
        },
        {
          "tr": "Basınç arttıkça suyun viskozitesi artar ve ısıyı daha iyi iletir.",
          "en": "As pressure rises, water's viscosity increases and it conducts heat better.",
          "de": "Mit steigendem Druck nimmt die Viskosität des Wassers zu und es leitet Wärme besser.",
          "fr": "Quand la pression augmente, la viscosité de l'eau augmente et elle conduit mieux la chaleur.",
          "ru": "С ростом давления вязкость воды растёт, и она лучше проводит тепло.",
          "ar": "بازدياد الضغط تزداد لزوجة الماء فيوصل الحرارة بشكل أفضل.",
          "zh": "压强增大时水的黏度增大，导热更好。",
          "ku": "Her ku zext zêde dibe vîskozîteya avê zêde dibe û germê baştir diguhezîne."
        },
        {
          "tr": "Buhar dışarı kaçamadığı için su hiç kaynamaz, yalnızca ısınır.",
          "en": "Since steam cannot escape, the water never boils and only heats up.",
          "de": "Da der Dampf nicht entweichen kann, siedet das Wasser nie, es wird nur warm.",
          "fr": "Comme la vapeur ne peut s'échapper, l'eau ne bout jamais et ne fait que chauffer.",
          "ru": "Так как пар не выходит, вода вообще не кипит, а только нагревается.",
          "ar": "لأن البخار لا يستطيع الخروج فإن الماء لا يغلي أبداً بل يسخن فقط.",
          "zh": "由于蒸汽无法逸出，水根本不沸腾，只是升温。",
          "ku": "Ji ber ku buhar nikare derkeve av qet nakele, tenê germ dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Düdüklü tencerenin kapağı buharı hapsettiği için içerideki basınç 1 atm'nin üzerine çıkar. Su, buhar basıncı bu daha yüksek basınca eşit olduğunda kaynayacağından kaynama noktası 100 °C'nin üzerine (yaklaşık 120 °C'ye) yükselir ve yemek daha yüksek sıcaklıkta, daha çabuk pişer. Basınç arttığında kaynama noktası düşmez; su yine kaynar, ancak daha yüksek sıcaklıkta.",
        "en": "The lid of a pressure cooker traps steam, so the pressure inside rises above 1 atm. Water boils when its vapour pressure equals this higher pressure, so its boiling point rises above 100 °C (to about 120 °C) and food cooks faster at the higher temperature. A higher pressure does not lower the boiling point; the water still boils, only at a higher temperature.",
        "de": "Der Deckel hält den Dampf zurück, der Innendruck steigt über 1 atm. Wasser siedet, wenn sein Dampfdruck diesem höheren Druck gleich ist; der Siedepunkt steigt über 100 °C (etwa 120 °C), und das Essen gart bei höherer Temperatur schneller. Höherer Druck senkt den Siedepunkt nicht; das Wasser siedet trotzdem, nur heißer.",
        "fr": "Le couvercle retient la vapeur et la pression intérieure dépasse 1 atm. L'eau bout lorsque sa pression de vapeur égale cette pression plus élevée : son point d'ébullition dépasse 100 °C (environ 120 °C) et les aliments cuisent plus vite à cette température. Une pression plus forte n'abaisse pas le point d'ébullition ; l'eau bout quand même, mais plus chaude.",
        "ru": "Крышка скороварки удерживает пар, и давление внутри становится выше 1 атм. Вода кипит, когда давление её пара равно этому повышенному давлению, поэтому температура кипения поднимается выше 100 °C (примерно до 120 °C), и пища готовится быстрее. Повышение давления не снижает температуру кипения; вода всё равно кипит, но при более высокой температуре.",
        "ar": "يحبس غطاء قدر الضغط البخار فيرتفع الضغط الداخلي فوق 1 atm. ولأن الماء يغلي عندما يساوي ضغط بخاره هذا الضغط الأعلى، ترتفع درجة غليانه فوق 100 °C (نحو 120 °C) فيُطهى الطعام أسرع. وزيادة الضغط لا تخفض درجة الغليان؛ فالماء يغلي أيضاً لكن عند درجة أعلى.",
        "zh": "高压锅的锅盖把蒸汽封住，锅内压强高于 1 atm。水在蒸气压等于这个较高压强时才沸腾，所以沸点升到 100 °C 以上（约 120 °C），食物在更高温度下熟得更快。压强增大不会使沸点降低；水照样沸腾，只是温度更高。",
        "ku": "Qapaxa beroşa bi zext buharê digire, loma zexta hundir ji 1 atm bilindtir dibe. Av dema zexta buhara wê bi vê zexta bilindtir re wekhev dibe dikele, loma xala kelandinê ji 100 °C (nêzîkî 120 °C) derbas dibe û xwarin di germahiya bilindtir de zûtir dipije. Zexta zêde xala kelandinê nizm nake; av dîsa dikele, lê di germahiyeke bilindtir de."
      }
    },
    {
      "id": "u04-twin10",
      "stem": {
        "tr": "Aşağıdakilerin hangisinde madde plazma hâlinde bulunur?",
        "en": "In which of the following is matter in the plasma state?",
        "de": "In welchem der folgenden Fälle liegt Materie im Plasmazustand vor?",
        "fr": "Dans lequel des cas suivants la matière est-elle à l'état de plasma ?",
        "ru": "В каком из следующих случаев вещество находится в состоянии плазмы?",
        "ar": "في أيّ مما يلي توجد المادة في حالة البلازما؟",
        "zh": "下列哪一项中的物质处于等离子态？",
        "ku": "Di kîjan ji van de made di rewşa plazmayê de ye?"
      },
      "options": [
        {
          "tr": "Buzdolabındaki buz",
          "en": "Ice in a refrigerator",
          "de": "Eis im Kühlschrank",
          "fr": "La glace du réfrigérateur",
          "ru": "Лёд в холодильнике",
          "ar": "الجليد في الثلاجة",
          "zh": "冰箱里的冰",
          "ku": "Cemeda di sarincokê de"
        },
        {
          "tr": "Şimşek sırasında oluşan iyonlaşmış hava",
          "en": "The ionised air formed during lightning",
          "de": "Die bei einem Blitz entstehende ionisierte Luft",
          "fr": "L'air ionisé formé lors d'un éclair",
          "ru": "Ионизированный воздух, образующийся при молнии",
          "ar": "الهواء المتأين المتكوّن أثناء البرق",
          "zh": "闪电时形成的电离空气",
          "ku": "Hewaya îyonbûyî ya di dema birûskê de çêdibe"
        },
        {
          "tr": "Çaydanlıktan çıkan su buharı",
          "en": "Water vapour coming out of a kettle",
          "de": "Wasserdampf aus dem Wasserkessel",
          "fr": "La vapeur d'eau qui sort d'une bouilloire",
          "ru": "Водяной пар, выходящий из чайника",
          "ar": "بخار الماء الخارج من الإبريق",
          "zh": "从水壶里冒出的水蒸气",
          "ku": "Buhara avê ya ji çaydankê derdikeve"
        },
        {
          "tr": "Sıvı azot",
          "en": "Liquid nitrogen",
          "de": "Flüssiger Stickstoff",
          "fr": "L'azote liquide",
          "ru": "Жидкий азот",
          "ar": "النيتروجين السائل",
          "zh": "液氮",
          "ku": "Azota şile"
        },
        {
          "tr": "Kuru buz",
          "en": "Dry ice",
          "de": "Trockeneis",
          "fr": "La glace carbonique",
          "ru": "Сухой лёд",
          "ar": "الجليد الجاف",
          "zh": "干冰",
          "ku": "Cemeda hişk"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Plazma, gaz taneciklerinin çok yüksek enerjiyle iyonlaşması sonucu iyonların, serbest elektronların ve nötr taneciklerin bir arada bulunduğu hâldir. Şimşekte elektrik boşalmasının enerjisi havayı iyonlaştırır ve plazma oluşur; Güneş, yıldızlar ve floresan lambalar da plazma örnekleridir. Su buharı nötr moleküllerden oluşan bir gazdır; buz ve kuru buz katı, sıvı azot sıvıdır.",
        "en": "Plasma is the state in which ions, free electrons and neutral particles coexist after gas particles have been ionised by very high energy. In lightning, the energy of the electrical discharge ionises the air and plasma forms; the Sun, stars and fluorescent lamps are other examples. Water vapour is a gas of neutral molecules; ice and dry ice are solids and liquid nitrogen is a liquid.",
        "de": "Plasma ist der Zustand, in dem nach Ionisierung von Gasteilchen durch sehr hohe Energie Ionen, freie Elektronen und neutrale Teilchen nebeneinander vorliegen. Beim Blitz ionisiert die Energie der Entladung die Luft; auch Sonne, Sterne und Leuchtstofflampen sind Beispiele. Wasserdampf ist ein Gas aus neutralen Molekülen; Eis und Trockeneis sind fest, flüssiger Stickstoff ist flüssig.",
        "fr": "Le plasma est l'état où coexistent ions, électrons libres et particules neutres après l'ionisation d'un gaz par une énergie très élevée. Lors d'un éclair, l'énergie de la décharge ionise l'air ; le Soleil, les étoiles et les tubes fluorescents en sont d'autres exemples. La vapeur d'eau est un gaz de molécules neutres ; la glace et la glace carbonique sont solides, l'azote liquide est liquide.",
        "ru": "Плазма — состояние, в котором после ионизации газа очень высокой энергией одновременно присутствуют ионы, свободные электроны и нейтральные частицы. При молнии энергия разряда ионизирует воздух; Солнце, звёзды и люминесцентные лампы — тоже примеры плазмы. Водяной пар — газ из нейтральных молекул; лёд и сухой лёд — твёрдые вещества, жидкий азот — жидкость.",
        "ar": "البلازما حالة تتعايش فيها الأيونات والإلكترونات الحرة والدقائق المتعادلة بعد تأين دقائق الغاز بطاقة عالية جداً. وفي البرق تؤيّن طاقة التفريغ الكهربائي الهواء فتتكوّن البلازما، والشمس والنجوم ومصابيح الفلورسنت أمثلة أخرى. أما بخار الماء فغاز من جزيئات متعادلة، والجليد والجليد الجاف صلبان، والنيتروجين السائل سائل.",
        "zh": "等离子体是气体微粒在极高能量下电离后，离子、自由电子和中性微粒共存的状态。闪电时放电的能量使空气电离而形成等离子体；太阳、恒星和荧光灯也是例子。水蒸气是由中性分子组成的气体；冰和干冰是固体，液氮是液体。",
        "ku": "Plazma ew rewş e ku piştî îyonbûna perçikên gazê bi enerjiyeke pir bilind, îyon, elektronên serbest û perçikên bêalî bi hev re hene. Di birûskê de enerjiya valabûna elektrîkê hewayê îyonîze dike û plazma çêdibe; Roj, stêrk û lampeyên floresan jî mînak in. Buhara avê gazeke ji molekulên bêalî ye; cemed û cemeda hişk hişk in, azota şile şile ye."
      }
    },
    {
      "id": "u04-twin11",
      "stem": {
        "tr": "Soğuk kış gecelerinde havadaki su buharının sıvı hâle geçmeden doğrudan pencere camlarında buz kristallerine dönüşmesi hangi hâl değişimine örnektir?",
        "en": "On cold winter nights, water vapour in the air turns directly into ice crystals on window panes without becoming liquid. Which change of state is this?",
        "de": "In kalten Winternächten wird Wasserdampf aus der Luft an Fensterscheiben direkt zu Eiskristallen, ohne flüssig zu werden. Welche Zustandsänderung ist das?",
        "fr": "Par les froides nuits d'hiver, la vapeur d'eau de l'air se transforme directement en cristaux de glace sur les vitres sans passer par l'état liquide. De quel changement d'état s'agit-il ?",
        "ru": "Холодными зимними ночами водяной пар из воздуха превращается на оконных стёклах прямо в кристаллы льда, минуя жидкое состояние. Какой это переход?",
        "ar": "في ليالي الشتاء الباردة يتحول بخار الماء في الهواء مباشرة إلى بلورات جليد على زجاج النوافذ دون أن يصبح سائلاً. ما نوع هذا التغير في الحالة؟",
        "zh": "寒冷的冬夜，空气中的水蒸气不经过液态，直接在窗玻璃上变成冰晶。这是哪种物态变化？",
        "ku": "Di şevên sar ên zivistanê de buhara avê ya hewayê bê ku bibe şile rasterast li ser camên pencereyan dibe krîstalên cemedê. Ev mînaka kîjan guherîna halê ye?"
      },
      "options": [
        {
          "tr": "Erime",
          "en": "Melting",
          "de": "Schmelzen",
          "fr": "Fusion",
          "ru": "Плавление",
          "ar": "الانصهار",
          "zh": "熔化",
          "ku": "Helîn"
        },
        {
          "tr": "Süblimleşme",
          "en": "Sublimation",
          "de": "Sublimation",
          "fr": "Sublimation",
          "ru": "Возгонка (сублимация)",
          "ar": "التسامي",
          "zh": "升华",
          "ku": "Sublîmebûn"
        },
        {
          "tr": "Yoğuşma",
          "en": "Condensation",
          "de": "Kondensation",
          "fr": "Condensation (liquéfaction)",
          "ru": "Конденсация",
          "ar": "التكاثف",
          "zh": "液化",
          "ku": "Hilmbûn"
        },
        {
          "tr": "Kırağılaşma",
          "en": "Deposition",
          "de": "Resublimation",
          "fr": "Condensation solide (déposition)",
          "ru": "Десублимация",
          "ar": "الترسّب (التحول من غاز إلى صلب)",
          "zh": "凝华",
          "ku": "Qirav-bûn (depozîsyon)"
        },
        {
          "tr": "Donma",
          "en": "Freezing",
          "de": "Erstarren",
          "fr": "Solidification",
          "ru": "Кристаллизация (замерзание)",
          "ar": "التجمد",
          "zh": "凝固",
          "ku": "Cemidîn"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Gaz hâlindeki bir maddenin sıvılaşmadan doğrudan katıya dönüşmesine kırağılaşma denir; camlarda buz çiçekleri ve kırağı bu yolla oluşur. Süblimleşme bunun tersi olan katıdan gaza geçiştir. Yoğuşma gazdan sıvıya, donma sıvıdan katıya, erime katıdan sıvıya geçiştir; bu olayda sıvı ara hâl oluşmadığı için bunlar uygun değildir.",
        "en": "The direct change of a gas into a solid without becoming liquid is called deposition; frost and ice patterns on windows form this way. Sublimation is the reverse, solid to gas. Condensation is gas to liquid, freezing is liquid to solid and melting is solid to liquid; none fits, because no liquid stage occurs here.",
        "de": "Der direkte Übergang vom Gas zum Feststoff ohne flüssige Zwischenstufe heißt Resublimation; Raureif und Eisblumen entstehen so. Sublimation ist der umgekehrte Vorgang (fest → gasförmig). Kondensation (gasförmig → flüssig), Erstarren (flüssig → fest) und Schmelzen (fest → flüssig) passen nicht, da hier keine flüssige Phase auftritt.",
        "fr": "Le passage direct d'un gaz à l'état solide sans passer par l'état liquide s'appelle condensation solide (déposition) ; le givre et les fleurs de glace sur les vitres se forment ainsi. La sublimation est le passage inverse, du solide au gaz. La liquéfaction (gaz → liquide), la solidification (liquide → solide) et la fusion (solide → liquide) ne conviennent pas, car il n'y a pas d'étape liquide.",
        "ru": "Переход газа непосредственно в твёрдое состояние, минуя жидкое, называется десублимацией; так образуются иней и ледяные узоры на стёклах. Возгонка — обратный процесс (твёрдое → газ). Конденсация (газ → жидкость), кристаллизация (жидкость → твёрдое) и плавление (твёрдое → жидкость) не подходят, так как жидкой стадии здесь нет.",
        "ar": "يُسمّى تحوّل المادة من الحالة الغازية إلى الصلبة مباشرة دون أن تصبح سائلة الترسّب، وبهذه الطريقة يتكوّن الصقيع ونقوش الجليد على النوافذ. أما التسامي فهو العكس، من الصلب إلى الغاز. والتكاثف (غاز ← سائل) والتجمد (سائل ← صلب) والانصهار (صلب ← سائل) لا تنطبق لأنه لا توجد مرحلة سائلة هنا.",
        "zh": "气态物质不经过液态直接变为固态叫凝华，窗上的冰花和霜就是这样形成的。升华是相反的过程，由固态直接变为气态。液化是气→液，凝固是液→固，熔化是固→液；这里没有液态阶段，所以都不符合。",
        "ku": "Veguherîna rasterast a madeyekê ji gazê bo hişk bê ku bibe şile qirav-bûn (depozîsyon) tê gotin; qirav û gulên cemedê yên li ser camê bi vî awayî çêdibin. Sublîmebûn berevajiyê vê ye, ji hişk bo gazê. Hilmbûn (gaz → şile), cemidîn (şile → hişk) û helîn (hişk → şile) li vir nayên, ji ber ku qonaxa şile tune."
      }
    },
    {
      "id": "u04-twin12",
      "stem": {
        "tr": "Gazların genel özellikleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "Which of the following statements about the general properties of gases is incorrect?",
        "de": "Welche Aussage über die allgemeinen Eigenschaften von Gasen ist falsch?",
        "fr": "Laquelle des affirmations suivantes sur les propriétés générales des gaz est incorrecte ?",
        "ru": "Какое утверждение об общих свойствах газов неверно?",
        "ar": "أيّ العبارات الآتية عن الخواص العامة للغازات خاطئة؟",
        "zh": "关于气体的一般性质，下列说法错误的是哪一项？",
        "ku": "Kîjan ji van gotinên li ser taybetiyên giştî yên gazan şaş e?"
      },
      "options": [
        {
          "tr": "Tanecikleri arasındaki boşluklar sıvılardakinden daha azdır.",
          "en": "The spaces between their particles are smaller than in liquids.",
          "de": "Die Abstände zwischen ihren Teilchen sind kleiner als in Flüssigkeiten.",
          "fr": "Les espaces entre leurs particules sont plus petits que dans les liquides.",
          "ru": "Промежутки между их частицами меньше, чем в жидкостях.",
          "ar": "الفراغات بين دقائقها أقل منها في السوائل.",
          "zh": "气体微粒之间的空隙比液体中的小。",
          "ku": "Valahiyên navbera perçikên wan ji yên şileyan kêmtir in."
        },
        {
          "tr": "Bulundukları kabın tamamını doldururlar.",
          "en": "They fill the whole of their container.",
          "de": "Sie füllen ihren Behälter vollständig aus.",
          "fr": "Ils remplissent entièrement leur récipient.",
          "ru": "Они заполняют весь сосуд.",
          "ar": "تملأ الوعاء الذي توجد فيه كله.",
          "zh": "气体能充满整个容器。",
          "ku": "Hemû firaxa ku tê de ne tije dikin."
        },
        {
          "tr": "Kolayca sıkıştırılabilirler.",
          "en": "They can be compressed easily.",
          "de": "Sie lassen sich leicht zusammendrücken.",
          "fr": "Ils sont facilement compressibles.",
          "ru": "Они легко сжимаются.",
          "ar": "يمكن ضغطها بسهولة.",
          "zh": "气体容易被压缩。",
          "ku": "Bi hêsanî tên pêçandin (kompres kirin)."
        },
        {
          "tr": "Birbirleriyle her oranda homojen karışım oluştururlar.",
          "en": "They form homogeneous mixtures with each other in any proportion.",
          "de": "Sie bilden miteinander in jedem Verhältnis homogene Gemische.",
          "fr": "Ils forment entre eux des mélanges homogènes en toutes proportions.",
          "ru": "Они образуют друг с другом однородные смеси в любых соотношениях.",
          "ar": "تكوّن فيما بينها مخاليط متجانسة بأيّ نسبة.",
          "zh": "气体之间能以任意比例形成均匀混合物。",
          "ku": "Bi hev re bi her rêjeyê tevliheviyên homojen çêdikin."
        },
        {
          "tr": "Tanecikleri kabın çeperlerine çarparak basınç oluşturur.",
          "en": "Their particles hit the container walls and create pressure.",
          "de": "Ihre Teilchen stoßen gegen die Gefäßwände und erzeugen Druck.",
          "fr": "Leurs particules heurtent les parois du récipient et créent une pression.",
          "ru": "Их частицы ударяются о стенки сосуда и создают давление.",
          "ar": "تصطدم دقائقها بجدران الوعاء فتُحدث ضغطاً.",
          "zh": "气体微粒撞击容器壁产生压强。",
          "ku": "Perçikên wan li dîwarên firaxê dikevin û zextê çêdikin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Gaz tanecikleri arasındaki uzaklık, tanecik boyutlarına göre çok büyüktür; bu boşluklar sıvılardakinden çok daha fazladır. Bu nedenle gazlar kolayca sıkıştırılabilir, kabın tamamını doldurur ve birbirleriyle her oranda karışır. Hızla hareket eden tanecikler kabın çeperlerine çarparak basınç oluşturur.",
        "en": "The distances between gas particles are very large compared with the particle size; these spaces are far greater than in liquids. That is why gases are easily compressed, fill their whole container and mix with each other in any proportion. The fast-moving particles strike the container walls and create pressure.",
        "de": "Die Abstände zwischen Gasteilchen sind im Vergleich zur Teilchengröße sehr groß, viel größer als in Flüssigkeiten. Deshalb lassen sich Gase leicht komprimieren, füllen ihren Behälter aus und mischen sich in jedem Verhältnis. Die schnell bewegten Teilchen stoßen gegen die Wände und erzeugen Druck.",
        "fr": "Les distances entre les particules d'un gaz sont très grandes par rapport à leur taille, bien plus que dans les liquides. C'est pourquoi les gaz sont facilement compressibles, remplissent tout le récipient et se mélangent en toutes proportions. Les particules rapides heurtent les parois et créent une pression.",
        "ru": "Расстояния между частицами газа очень велики по сравнению с их размерами — гораздо больше, чем в жидкостях. Поэтому газы легко сжимаются, заполняют весь сосуд и смешиваются в любых соотношениях. Быстро движущиеся частицы ударяются о стенки и создают давление.",
        "ar": "المسافات بين دقائق الغاز كبيرة جداً مقارنة بحجم الدقائق، وهي أكبر بكثير منها في السوائل. ولهذا يمكن ضغط الغازات بسهولة وتملأ وعاءها كله وتختلط بأيّ نسبة، وتصطدم دقائقها السريعة بجدران الوعاء فتُحدث ضغطاً.",
        "zh": "气体微粒之间的距离与微粒本身大小相比非常大，远大于液体中的空隙。所以气体容易被压缩，能充满整个容器，并能以任意比例互相混合。快速运动的微粒撞击容器壁产生压强。",
        "ku": "Dûrahiya navbera perçikên gazê li gorî mezinahiya perçikan pir mezin e; ev valahî ji yên şileyan pir zêdetir in. Ji ber vê yekê gaz bi hêsanî tên pêçandin, hemû firaxê tije dikin û bi her rêjeyê tevlî hev dibin. Perçikên ku bi lez dilivin li dîwaran dikevin û zextê çêdikin."
      }
    },
    {
      "id": "u04-twin13",
      "stem": {
        "tr": "Islak çamaşırların daha kısa sürede kuruması için aşağıdakilerden hangileri yapılmalıdır?\nI. Çamaşırları geniş yüzeyli olacak şekilde sermek\nII. Çamaşırları rüzgâr alan bir yere asmak\nIII. Çamaşırları bağıl nemin yüksek olduğu bir havada asmak",
        "en": "Which of the following should be done so that wet laundry dries in a shorter time?\nI. Spreading the laundry out so that it has a large surface area\nII. Hanging the laundry in a windy place\nIII. Hanging the laundry out when the relative humidity is high",
        "de": "Was sollte man tun, damit nasse Wäsche schneller trocknet?\nI. Die Wäsche großflächig ausbreiten\nII. Die Wäsche an einem windigen Ort aufhängen\nIII. Die Wäsche bei hoher relativer Luftfeuchtigkeit aufhängen",
        "fr": "Que faut-il faire pour que du linge mouillé sèche plus vite ?\nI. Étendre le linge pour qu'il présente une grande surface\nII. Suspendre le linge dans un endroit venteux\nIII. Étendre le linge par temps de forte humidité relative",
        "ru": "Что нужно сделать, чтобы мокрое бельё высохло быстрее?\nI. Развесить бельё так, чтобы площадь поверхности была большой\nII. Повесить бельё в месте, где дует ветер\nIII. Повесить бельё в погоду с высокой относительной влажностью",
        "ar": "أيّ مما يلي يجب فعله لكي تجف الملابس المبللة في وقت أقصر؟\nI. نشر الملابس بحيث تكون مساحة سطحها كبيرة\nII. تعليق الملابس في مكان تهب فيه الرياح\nIII. تعليق الملابس في جو رطوبته النسبية مرتفعة",
        "zh": "为了让湿衣服更快晾干，应采取下列哪些做法？\nI. 把衣服展开，使其表面积大\nII. 把衣服挂在通风的地方\nIII. 在相对湿度高的天气晾衣服",
        "ku": "Ji bo ku cilên şil di demeke kurttir de hişk bibin, divê kîjan werin kirin?\nI. Cilan bi awayekî ku rûyê wan fireh be raxistin\nII. Cilan li cihekî bi ba daleqandin\nIII. Cilan di hewayeke ku şiliya nisbî bilind e de daleqandin"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "فقط I",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
          "ru": "Только III",
          "ar": "فقط III",
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
        "tr": "Buharlaşma hızı yüzey alanı arttıkça artar; çamaşırı geniş sermek suyun havayla temas eden yüzeyini büyütür (I doğru). Rüzgâr, yüzeydeki su buharını uzaklaştırarak geri yoğuşmayı azaltır ve buharlaşmayı hızlandırır (II doğru). Bağıl nem yüksekken hava neme doymaya yakındır; net buharlaşma yavaşlar ve çamaşır geç kurur (III yanlış). Doğru yanıt: I ve II.",
        "en": "Evaporation rate increases with surface area; spreading the laundry out enlarges the water surface in contact with air (I correct). Wind carries away the vapour at the surface, reducing re-condensation and speeding up evaporation (II correct). When relative humidity is high the air is close to saturation, net evaporation slows and the laundry dries late (III wrong). Answer: I and II.",
        "de": "Die Verdunstungsgeschwindigkeit steigt mit der Oberfläche; großflächiges Ausbreiten vergrößert die Wasseroberfläche (I richtig). Wind trägt den Dampf an der Oberfläche fort, verringert die Rückkondensation und beschleunigt die Verdunstung (II richtig). Bei hoher relativer Feuchte ist die Luft nahezu gesättigt, die Nettoverdunstung verlangsamt sich (III falsch). Antwort: I und II.",
        "fr": "La vitesse d'évaporation augmente avec la surface ; étendre le linge agrandit la surface d'eau en contact avec l'air (I correcte). Le vent emporte la vapeur, réduit la recondensation et accélère l'évaporation (II correcte). Par forte humidité relative, l'air est presque saturé : l'évaporation nette ralentit et le linge sèche lentement (III incorrecte). Réponse : I et II.",
        "ru": "Скорость испарения растёт с площадью поверхности; развешивание белья увеличивает поверхность воды, соприкасающуюся с воздухом (I верно). Ветер уносит пар у поверхности, уменьшает обратную конденсацию и ускоряет испарение (II верно). При высокой относительной влажности воздух близок к насыщению, суммарное испарение замедляется и бельё сохнет дольше (III неверно). Ответ: I и II.",
        "ar": "تزداد سرعة التبخر بزيادة المساحة السطحية، ونشر الملابس يكبّر سطح الماء الملامس للهواء (I صحيحة). والرياح تُبعد البخار عن السطح فتقلّل التكاثف من جديد وتسرّع التبخر (II صحيحة). أما عند ارتفاع الرطوبة النسبية فيكون الهواء قريباً من التشبع فيتباطأ التبخر الصافي وتتأخر الملابس في الجفاف (III خاطئة). الإجابة: I وII.",
        "zh": "蒸发速率随表面积增大而增大，把衣服展开增大了与空气接触的水面（I 正确）。风把表面的水蒸气带走，减少重新凝结，加快蒸发（II 正确）。相对湿度高时空气接近饱和，净蒸发变慢，衣服干得慢（III 错误）。答案：I 和 II。",
        "ku": "Leza buharbûnê bi zêdebûna rûyê re zêde dibe; raxistina fireh a cilan rûyê avê yê bi hewayê re têkildar mezin dike (I rast e). Ba buhara li ser rûyê dûr dixe, hilmbûna dîsa kêm dike û buharbûnê bilez dike (II rast e). Dema şiliya nisbî bilind e hewa nêzîkî têrbûnê ye, buharbûna net hêdî dibe û cil dereng hişk dibin (III şaş e). Bersiv: I û II."
      }
    },
    {
      "id": "u04-twin14",
      "stem": {
        "tr": "Kışın göllerin yüzeyden donmaya başlaması ve buzun suyun üzerinde yüzmesi aşağıdakilerden hangisi ile açıklanır?",
        "en": "Lakes start to freeze from the surface in winter, and ice floats on water. How is this explained?",
        "de": "Im Winter beginnen Seen an der Oberfläche zu gefrieren, und Eis schwimmt auf dem Wasser. Wie lässt sich das erklären?",
        "fr": "En hiver, les lacs commencent à geler par la surface et la glace flotte sur l'eau. Comment l'expliquer ?",
        "ru": "Зимой озёра начинают замерзать с поверхности, а лёд плавает на воде. Чем это объясняется?",
        "ar": "تبدأ البحيرات في الشتاء بالتجمد من سطحها، ويطفو الجليد فوق الماء. بمَ يُفسَّر ذلك؟",
        "zh": "冬天湖泊从表面开始结冰，冰浮在水面上。这应如何解释？",
        "ku": "Di zivistanê de gol ji rûyê xwe dest bi cemidînê dikin û cemed li ser avê diavije. Ev bi kîjanê tê ravekirin?"
      },
      "options": [
        {
          "tr": "Buz moleküllerinin sıvı su moleküllerinden daha küçük olması",
          "en": "Ice molecules are smaller than liquid water molecules",
          "de": "Eismoleküle sind kleiner als Moleküle des flüssigen Wassers",
          "fr": "Les molécules de glace sont plus petites que celles de l'eau liquide",
          "ru": "Молекулы льда меньше молекул жидкой воды",
          "ar": "جزيئات الجليد أصغر من جزيئات الماء السائل",
          "zh": "冰分子比液态水分子小",
          "ku": "Molekulên cemedê ji molekulên ava şile biçûktir in"
        },
        {
          "tr": "Donma sırasında suyun kütlesinin azalması",
          "en": "Water loses mass when it freezes",
          "de": "Wasser verliert beim Gefrieren an Masse",
          "fr": "L'eau perd de la masse en gelant",
          "ru": "При замерзании масса воды уменьшается",
          "ar": "تنقص كتلة الماء عند تجمده",
          "zh": "水结冰时质量减小",
          "ku": "Dema av dicemide girseya wê kêm dibe"
        },
        {
          "tr": "Buzun kovalent ağ örgülü bir kristal olması",
          "en": "Ice is a covalent network crystal",
          "de": "Eis ist ein kovalenter Netzwerkkristall",
          "fr": "La glace est un cristal covalent en réseau",
          "ru": "Лёд — ковалентный каркасный кристалл",
          "ar": "الجليد بلورة تساهمية شبكية",
          "zh": "冰是共价网状晶体",
          "ku": "Cemed krîstaleke bi tora kovalent e"
        },
        {
          "tr": "Sıvı suda moleküller arasında hidrojen bağı bulunmaması",
          "en": "There are no hydrogen bonds between molecules in liquid water",
          "de": "In flüssigem Wasser gibt es keine Wasserstoffbrücken zwischen den Molekülen",
          "fr": "Il n'y a pas de liaisons hydrogène entre les molécules d'eau liquide",
          "ru": "В жидкой воде между молекулами нет водородных связей",
          "ar": "لا توجد روابط هيدروجينية بين جزيئات الماء السائل",
          "zh": "液态水分子之间没有氢键",
          "ku": "Di ava şile de di navbera molekulan de girêdana hîdrojenê tune"
        },
        {
          "tr": "Buzda hidrojen bağlarının molekülleri boşluklu düzenli bir yapıda tutması nedeniyle buzun özkütlesinin sıvı sudan küçük olması",
          "en": "In ice, hydrogen bonds hold the molecules in an open, ordered structure, so ice is less dense than liquid water",
          "de": "Im Eis halten Wasserstoffbrücken die Moleküle in einer offenen, geordneten Struktur, daher hat Eis eine geringere Dichte als flüssiges Wasser",
          "fr": "Dans la glace, les liaisons hydrogène maintiennent les molécules dans une structure ordonnée et lacunaire, d'où une masse volumique inférieure à celle de l'eau liquide",
          "ru": "Во льду водородные связи удерживают молекулы в упорядоченной ажурной структуре, поэтому плотность льда меньше плотности жидкой воды",
          "ar": "في الجليد تُبقي الروابط الهيدروجينية الجزيئات في بنية منتظمة ذات فراغات، فتكون كثافة الجليد أقل من كثافة الماء السائل",
          "zh": "冰中的氢键使分子排列成有空隙的有序结构，因此冰的密度比液态水小",
          "ku": "Di cemedê de girêdanên hîdrojenê molekulan di avahiyeke rêkûpêk û bi valahî de digirin, loma çirbûna cemedê ji ya ava şile kêmtir e"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Su donarken her molekül komşularıyla hidrojen bağları yaparak boşluklu, düzenli bir yapıya yerleşir; bu yüzden aynı kütledeki buzun hacmi sıvı sudan büyük, özkütlesi küçüktür ve buz suyun üzerinde yüzer. Soğuyan yüzey suyu donarak yüzeyde kalır ve alttaki suyu yalıtır. Donmada kütle korunur, molekül boyutu değişmez; buz moleküler bir kristaldir ve sıvı suda da hidrojen bağları vardır.",
        "en": "When water freezes, each molecule forms hydrogen bonds with its neighbours and settles into an open, ordered structure; a given mass of ice therefore has a larger volume and lower density than liquid water, so ice floats. The cooled surface water freezes, stays on top and insulates the water below. Mass is conserved on freezing and molecular size does not change; ice is a molecular crystal and liquid water also has hydrogen bonds.",
        "de": "Beim Gefrieren bildet jedes Wassermolekül Wasserstoffbrücken zu seinen Nachbarn und ordnet sich in eine offene, regelmäßige Struktur ein; Eis hat daher bei gleicher Masse ein größeres Volumen und eine kleinere Dichte als flüssiges Wasser und schwimmt. Das abgekühlte Oberflächenwasser gefriert, bleibt oben und isoliert das Wasser darunter. Die Masse bleibt erhalten, die Molekülgröße ändert sich nicht; Eis ist ein Molekülkristall, und auch flüssiges Wasser hat Wasserstoffbrücken.",
        "fr": "En gelant, chaque molécule d'eau forme des liaisons hydrogène avec ses voisines et s'installe dans une structure ordonnée et lacunaire ; à masse égale, la glace occupe donc un plus grand volume et a une masse volumique plus faible : elle flotte. L'eau de surface refroidie gèle, reste en haut et isole l'eau en dessous. La masse se conserve et la taille des molécules ne change pas ; la glace est un cristal moléculaire et l'eau liquide possède aussi des liaisons hydrogène.",
        "ru": "При замерзании каждая молекула воды образует водородные связи с соседями и встраивается в упорядоченную ажурную структуру; поэтому при той же массе лёд занимает больший объём и имеет меньшую плотность, чем жидкая вода, и плавает. Охлаждённая поверхностная вода замерзает, остаётся сверху и изолирует воду под собой. Масса при замерзании сохраняется, размер молекул не меняется; лёд — молекулярный кристалл, а в жидкой воде тоже есть водородные связи.",
        "ar": "عند تجمد الماء يكوّن كل جزيء روابط هيدروجينية مع جيرانه ويستقر في بنية منتظمة ذات فراغات، لذا يكون حجم الجليد أكبر من حجم الكتلة نفسها من الماء السائل وكثافته أقل فيطفو. ويتجمد ماء السطح المبرَّد ويبقى في الأعلى فيعزل الماء الذي تحته. والكتلة محفوظة عند التجمد وحجم الجزيء لا يتغير، والجليد بلورة جزيئية، والماء السائل فيه روابط هيدروجينية أيضاً.",
        "zh": "水结冰时每个分子与周围分子形成氢键，排列成有空隙的有序结构，所以相同质量的冰体积比液态水大、密度比水小，冰浮在水面。冷却的表层水结冰后留在上面，对下面的水起隔热作用。结冰时质量守恒，分子大小不变；冰是分子晶体，液态水中也存在氢键。",
        "ku": "Dema av dicemide her molekul bi cîranên xwe re girêdanên hîdrojenê çêdike û di avahiyeke rêkûpêk û bi valahî de cih digire; loma qebareya cemedê ji ya heman girseya ava şile mezintir, çirbûna wê kêmtir e û cemed diavije. Ava rûyê ya sar dicemide, li jor dimîne û ava jêrîn diparêze. Di cemidînê de girse tê parastin û mezinahiya molekulan naguhere; cemed krîstaleke molekulî ye û di ava şile de jî girêdanên hîdrojenê hene."
      }
    },
    {
      "id": "u04-twin15",
      "stem": {
        "tr": "Kapalı bir kaba bir miktar su konup sabit sıcaklıkta bekletiliyor. Kapta sıvı su varken buharlaşma–yoğuşma dengesi kurulduğunda aşağıdakilerden hangisi doğrudur?",
        "en": "Some water is placed in a closed container and kept at constant temperature. Once evaporation–condensation equilibrium is reached with liquid still present, which statement is correct?",
        "de": "Etwas Wasser wird in einem geschlossenen Gefäß bei konstanter Temperatur stehen gelassen. Welche Aussage ist richtig, wenn sich bei noch vorhandener Flüssigkeit das Verdunstungs-Kondensations-Gleichgewicht eingestellt hat?",
        "fr": "On place un peu d'eau dans un récipient fermé à température constante. Une fois l'équilibre évaporation–condensation atteint, avec du liquide encore présent, quelle affirmation est correcte ?",
        "ru": "В закрытый сосуд налили немного воды и оставили при постоянной температуре. Какое утверждение верно после установления равновесия «испарение – конденсация» при наличии жидкости?",
        "ar": "وُضعت كمية من الماء في وعاء مغلق وتُركت عند درجة حرارة ثابتة. عندما يتحقق اتزان التبخر–التكاثف مع بقاء سائل في الوعاء، أيّ العبارات الآتية صحيحة؟",
        "zh": "把少量水放入密闭容器中，在恒温下放置。当容器中仍有液态水且达到蒸发–凝结平衡时，下列说法正确的是哪一项？",
        "ku": "Hinek av tê xistin firaxeke girtî û di germahiya sabît de tê hiştin. Dema ku hîn şile heye û hevsengiya buharbûn–hilmbûnê pêk tê, kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Buharlaşma hızı yoğuşma hızına eşit olur.",
          "en": "The rate of evaporation equals the rate of condensation.",
          "de": "Die Verdunstungsgeschwindigkeit ist gleich der Kondensationsgeschwindigkeit.",
          "fr": "La vitesse d'évaporation est égale à la vitesse de condensation.",
          "ru": "Скорость испарения равна скорости конденсации.",
          "ar": "تتساوى سرعة التبخر مع سرعة التكاثف.",
          "zh": "蒸发速率等于凝结速率。",
          "ku": "Leza buharbûnê bi leza hilmbûnê re wekhev dibe."
        },
        {
          "tr": "Buharlaşma tamamen durur.",
          "en": "Evaporation stops completely.",
          "de": "Die Verdunstung hört vollständig auf.",
          "fr": "L'évaporation s'arrête complètement.",
          "ru": "Испарение полностью прекращается.",
          "ar": "يتوقف التبخر تماماً.",
          "zh": "蒸发完全停止。",
          "ku": "Buharbûn bi tevahî disekine."
        },
        {
          "tr": "Yoğuşma hızı buharlaşma hızından büyük olur.",
          "en": "The rate of condensation is greater than the rate of evaporation.",
          "de": "Die Kondensationsgeschwindigkeit ist größer als die Verdunstungsgeschwindigkeit.",
          "fr": "La vitesse de condensation est supérieure à la vitesse d'évaporation.",
          "ru": "Скорость конденсации больше скорости испарения.",
          "ar": "تكون سرعة التكاثف أكبر من سرعة التبخر.",
          "zh": "凝结速率大于蒸发速率。",
          "ku": "Leza hilmbûnê ji leza buharbûnê mezintir dibe."
        },
        {
          "tr": "Kaptaki suyun tamamı zamanla buharlaşır.",
          "en": "All the water in the container eventually evaporates.",
          "de": "Das gesamte Wasser im Gefäß verdunstet mit der Zeit.",
          "fr": "Toute l'eau du récipient finit par s'évaporer.",
          "ru": "Со временем вся вода в сосуде испаряется.",
          "ar": "يتبخر كل الماء في الوعاء مع مرور الوقت.",
          "zh": "容器中的水最终会全部蒸发。",
          "ku": "Hemû ava di firaxê de bi demê re dibuhire."
        },
        {
          "tr": "Buhar basıncı zamanla sürekli artmaya devam eder.",
          "en": "The vapour pressure keeps rising with time.",
          "de": "Der Dampfdruck steigt mit der Zeit immer weiter.",
          "fr": "La pression de vapeur continue d'augmenter avec le temps.",
          "ru": "Давление пара со временем продолжает расти.",
          "ar": "يستمر ضغط البخار في الارتفاع مع الزمن.",
          "zh": "蒸气压随时间不断增大。",
          "ku": "Zexta buharê bi demê re her zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Kapalı kapta önce buharlaşma baskındır; buhar molekülleri çoğaldıkça yoğuşma hızı artar ve sonunda iki hız eşitlenir. Bu dinamik dengedir: buharlaşma ve yoğuşma durmaz, aynı hızla sürer; bu yüzden sıvı ve buhar miktarları ile buhar basıncı sabit kalır. Kap kapalı olduğundan suyun tamamı buharlaşmaz.",
        "en": "In a closed container evaporation dominates at first; as vapour molecules accumulate the condensation rate rises until the two rates are equal. This is dynamic equilibrium: evaporation and condensation do not stop but continue at the same rate, so the amounts of liquid and vapour and the vapour pressure stay constant. Because the container is closed, the water does not all evaporate.",
        "de": "Im geschlossenen Gefäß überwiegt zunächst die Verdunstung; mit zunehmender Dampfmenge steigt die Kondensationsgeschwindigkeit, bis beide gleich sind. Das ist ein dynamisches Gleichgewicht: Verdunstung und Kondensation hören nicht auf, sondern laufen gleich schnell ab; Flüssigkeits- und Dampfmenge sowie der Dampfdruck bleiben konstant. Da das Gefäß geschlossen ist, verdunstet nicht das ganze Wasser.",
        "fr": "Dans un récipient fermé, l'évaporation domine d'abord ; à mesure que la vapeur s'accumule, la vitesse de condensation augmente jusqu'à égaler celle d'évaporation. C'est un équilibre dynamique : les deux processus ne s'arrêtent pas mais se poursuivent à la même vitesse ; les quantités de liquide et de vapeur ainsi que la pression de vapeur restent constantes. Le récipient étant fermé, l'eau ne s'évapore pas entièrement.",
        "ru": "В закрытом сосуде сначала преобладает испарение; по мере накопления пара скорость конденсации растёт, пока обе скорости не сравняются. Это динамическое равновесие: испарение и конденсация не прекращаются, а идут с одинаковой скоростью, поэтому количества жидкости и пара и давление пара остаются постоянными. Так как сосуд закрыт, вся вода не испаряется.",
        "ar": "في الوعاء المغلق يغلب التبخر أولاً، ومع تراكم جزيئات البخار تزداد سرعة التكاثف حتى تتساوى السرعتان. وهذا اتزان ديناميكي: لا يتوقف التبخر ولا التكاثف بل يستمران بالسرعة نفسها، فتبقى كميتا السائل والبخار وضغط البخار ثابتة. ولأن الوعاء مغلق لا يتبخر الماء كله.",
        "zh": "密闭容器中开始时蒸发占优势；随着蒸气分子增多，凝结速率增大，直到两者相等。这是动态平衡：蒸发和凝结都没有停止，而是以相同速率进行，所以液体和蒸气的量以及蒸气压保持不变。由于容器是密闭的，水不会全部蒸发。",
        "ku": "Di firaxeke girtî de pêşî buharbûn serdest e; her ku molekulên buharê zêde dibin leza hilmbûnê zêde dibe û di dawiyê de her du lez wekhev dibin. Ev hevsengiya dînamîk e: buharbûn û hilmbûn naqedin, bi heman lezê berdewam dikin; loma mîqdara şile û buharê û zexta buharê sabît dimînin. Ji ber ku firax girtî ye hemû av nabuhire."
      }
    },
    {
      "id": "u04-twin16",
      "stem": {
        "tr": "Aşağıdaki hâl değişimlerinden hangisi ısı alarak (endotermik olarak) gerçekleşir?",
        "en": "Which of the following changes of state takes place by absorbing heat (endothermically)?",
        "de": "Welche der folgenden Zustandsänderungen verläuft unter Wärmeaufnahme (endotherm)?",
        "fr": "Lequel des changements d'état suivants se produit en absorbant de la chaleur (de façon endothermique) ?",
        "ru": "Какой из следующих фазовых переходов происходит с поглощением теплоты (эндотермически)?",
        "ar": "أيّ تغيرات الحالة الآتية يحدث بامتصاص الحرارة (ماصاً للحرارة)؟",
        "zh": "下列物态变化中，哪一个是吸热（吸热过程）的？",
        "ku": "Kîjan ji van guherînên halê bi wergirtina germê (endotermîk) pêk tê?"
      },
      "options": [
        {
          "tr": "Su buharının soğuk bir yüzeyde yoğuşması",
          "en": "Water vapour condensing on a cold surface",
          "de": "Kondensation von Wasserdampf an einer kalten Oberfläche",
          "fr": "La condensation de la vapeur d'eau sur une surface froide",
          "ru": "Конденсация водяного пара на холодной поверхности",
          "ar": "تكاثف بخار الماء على سطح بارد",
          "zh": "水蒸气在冷的表面上液化",
          "ku": "Hilmbûna buhara avê li ser rûyekî sar"
        },
        {
          "tr": "Naftalinin süblimleşmesi",
          "en": "Naphthalene subliming",
          "de": "Sublimation von Naphthalin",
          "fr": "La sublimation de la naphtaline",
          "ru": "Возгонка нафталина",
          "ar": "تسامي النفثالين",
          "zh": "樟脑丸（萘）升华",
          "ku": "Sublîmebûna naftalînê"
        },
        {
          "tr": "Suyun donması",
          "en": "Water freezing",
          "de": "Gefrieren von Wasser",
          "fr": "La congélation de l'eau",
          "ru": "Замерзание воды",
          "ar": "تجمد الماء",
          "zh": "水结冰",
          "ku": "Cemidîna avê"
        },
        {
          "tr": "Erimiş mumun katılaşması",
          "en": "Molten wax solidifying",
          "de": "Erstarren von geschmolzenem Wachs",
          "fr": "La solidification de la cire fondue",
          "ru": "Затвердевание расплавленного воска",
          "ar": "تصلب الشمع المنصهر",
          "zh": "熔化的蜡凝固",
          "ku": "Hişkbûna mûma helyayî"
        },
        {
          "tr": "Gaz hâlindeki iyotun soğuk bir yüzeyde doğrudan katılaşması",
          "en": "Iodine vapour turning directly into solid on a cold surface",
          "de": "Direkte Verfestigung von Ioddampf an einer kalten Oberfläche",
          "fr": "Le passage direct de la vapeur de diiode à l'état solide sur une surface froide",
          "ru": "Переход паров иода прямо в твёрдое состояние на холодной поверхности",
          "ar": "تحوّل بخار اليود مباشرة إلى صلب على سطح بارد",
          "zh": "碘蒸气在冷的表面上直接变成固体",
          "ku": "Hişkbûna rasterast a buhara îyotê li ser rûyekî sar"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Tanecikler arasındaki çekimin yenildiği, yani düzenli hâlden daha düzensiz hâle geçilen değişimler (erime, buharlaşma, süblimleşme) ısı alır. Naftalinin katıdan doğrudan gaza geçmesi (süblimleşme) bu nedenle endotermiktir. Yoğuşma, donma, katılaşma ve gazın doğrudan katıya dönüşmesi (kırağılaşma) ise tanecikler birbirine yaklaşıp çekim kuvvetleri oluştuğu için ısı veren (ekzotermik) olaylardır.",
        "en": "Changes in which attractions between particles are overcome — going from a more ordered to a less ordered state (melting, vaporisation, sublimation) — absorb heat. Naphthalene passing directly from solid to gas (sublimation) is therefore endothermic. Condensation, freezing, solidification and direct gas-to-solid deposition release heat (exothermic), because particles come closer and attractions form.",
        "de": "Zustandsänderungen, bei denen Anziehungskräfte überwunden werden – also vom geordneteren zum ungeordneteren Zustand (Schmelzen, Verdampfen, Sublimieren) –, nehmen Wärme auf. Die Sublimation von Naphthalin ist daher endotherm. Kondensation, Gefrieren, Erstarren und Resublimation geben Wärme ab (exotherm), weil sich die Teilchen annähern und Anziehungen entstehen.",
        "fr": "Les changements où les attractions entre particules sont vaincues — passage d'un état plus ordonné à un état moins ordonné (fusion, vaporisation, sublimation) — absorbent de la chaleur. La sublimation de la naphtaline est donc endothermique. La liquéfaction, la congélation, la solidification et la condensation solide libèrent de la chaleur (exothermiques), car les particules se rapprochent et des attractions se forment.",
        "ru": "Переходы, при которых преодолевается притяжение между частицами, — от более упорядоченного состояния к менее упорядоченному (плавление, испарение, возгонка) — идут с поглощением теплоты. Поэтому возгонка нафталина эндотермична. Конденсация, замерзание, затвердевание и десублимация идут с выделением теплоты (экзотермичны), так как частицы сближаются и возникает притяжение.",
        "ar": "التغيرات التي يُتغلَّب فيها على التجاذب بين الدقائق، أي الانتقال من حالة أكثر انتظاماً إلى أقل انتظاماً (الانصهار والتبخر والتسامي)، تمتص الحرارة؛ لذا فتسامي النفثالين ماص للحرارة. أما التكاثف والتجمد والتصلب والترسّب (غاز ← صلب) فتطلق الحرارة لأن الدقائق تتقارب وتتكوّن قوى التجاذب.",
        "zh": "克服微粒间吸引、由较有序状态变为较无序状态的变化（熔化、汽化、升华）需要吸热，所以萘的升华是吸热过程。液化、凝固以及气体直接变成固体（凝华）都是放热过程，因为微粒相互靠近、形成吸引作用。",
        "ku": "Guherînên ku tê de kişandina navbera perçikan tê bindestkirin, ango ji rewşa rêkûpêktir bo rewşa kêmtir rêkûpêk (helîn, buharbûn, sublîmebûn), germê distînin; loma sublîmebûna naftalînê endotermîk e. Hilmbûn, cemidîn, hişkbûn û veguherîna rasterast a gazê bo hişk (qirav-bûn) germê didin (ekzotermîk), ji ber ku perçik nêzîkî hev dibin û kişandin çêdibin."
      }
    }
  ]
};

export default unit04;
