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
    "zh": "物质的状态",
    "ku": "Rewşên Madeyê"
  },
  "subtitle": {
    "tr": "Katılar, Sıvılar, Buhar Basıncı ve Viskozite",
    "en": "Solids, Liquids, Vapor Pressure",
    "de": "Feststoffe, Flüssigkeiten, Dampfdruck und Viskosität",
    "fr": "Solides, liquides, pression de vapeur et viscosité",
    "ru": "Твёрдые вещества, жидкости, давление пара и вязкость",
    "ar": "المواد الصلبة والسوائل وضغط البخار واللزوجة",
    "zh": "固体、液体、蒸气压与黏度",
    "ku": "Madeyên Hişk, Şile, Zexta Buharê û Vîskozîte"
  },
  "facts": [
    {
      "id": "u04-f01",
      "fact": {
        "tr": "Denge buhar basıncı sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınca ve yüzey alanına bağlı değildir.",
        "en": "Equilibrium vapour pressure depends on the type, purity and temperature of the liquid; It does NOT depend on external pressure and surface area.",
        "de": "Der Gleichgewichtsdampfdruck hängt von der Art, Reinheit und Temperatur der Flüssigkeit ab; Es hängt NICHT vom äußeren Druck und der Oberfläche ab.",
        "fr": "La pression de vapeur à l'équilibre dépend du type, de la pureté et de la température du liquide ; Cela ne dépend PAS de la pression externe et de la surface.",
        "ru": "Равновесное давление пара зависит от природы жидкости, её чистоты и температуры; оно не зависит от внешнего давления и площади поверхности.",
        "ar": "يعتمد ضغط البخار المتزن على نوع السائل ونقائه ودرجة حرارته، ولا يعتمد على الضغط الخارجي ولا على مساحة السطح.",
        "zh": "平衡蒸气压取决于液体的种类、纯度和温度，与外界压强和表面积无关。",
        "ku": "Zexta buharê ya hevsengiyê bi cureyê şileyê, paqijiya wê û germahiyê ve girêdayî ye; bi zexta derve û rûbera şileyê ve ne girêdayî ye."
      },
      "trap": {
        "tr": "Denge buhar basıncı dış atmosfer basıncı arttıkça artar.",
        "en": "Equilibrium vapour pressure increases as the external atmospheric pressure increases.",
        "de": "Der Gleichgewichtsdampfdruck steigt mit zunehmendem äußeren Atmosphärendruck.",
        "fr": "La pression de vapeur à l’équilibre augmente à mesure que la pression atmosphérique externe augmente.",
        "ru": "Равновесное давление пара растёт с увеличением внешнего атмосферного давления.",
        "ar": "يزداد ضغط البخار المتزن بزيادة الضغط الجوي الخارجي.",
        "zh": "平衡蒸气压随外界大气压的增大而增大。",
        "ku": "Her ku zexta atmosferê ya derve zêde dibe, zexta buharê ya hevsengiyê jî zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Denge buhar basıncı, buharlaşma ve yoğuşma hızlarının eşitlendiği anda buharın yaptığı basınçtır ve yalnızca sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınç kaynama noktasını değiştirir, buhar basıncını değiştirmez.",
        "en": "Equilibrium vapour pressure is the pressure of the vapour when evaporation and condensation rates are equal, and it depends only on the kind of liquid, its purity and the temperature; external pressure changes the boiling point, not the vapour pressure.",
        "de": "Der Gleichgewichtsdampfdruck ist der Druck des Dampfes, wenn Verdunstungs- und Kondensationsgeschwindigkeit gleich sind; er hängt nur von der Art der Flüssigkeit, ihrer Reinheit und der Temperatur ab. Der äußere Druck ändert den Siedepunkt, nicht den Dampfdruck.",
        "fr": "La pression de vapeur d'équilibre est la pression de la vapeur lorsque les vitesses d'évaporation et de condensation sont égales ; elle ne dépend que de la nature du liquide, de sa pureté et de la température. La pression extérieure modifie le point d'ébullition, pas la pression de vapeur.",
        "ru": "Равновесное давление пара — это давление пара при равенстве скоростей испарения и конденсации; оно зависит только от природы жидкости, её чистоты и температуры. Внешнее давление меняет температуру кипения, а не давление пара.",
        "ar": "ضغط البخار المتزن هو ضغط البخار عندما تتساوى سرعتا التبخر والتكاثف، ولا يعتمد إلا على نوع السائل ونقائه ودرجة الحرارة؛ أما الضغط الخارجي فيغيّر درجة الغليان لا ضغط البخار.",
        "zh": "平衡蒸气压是蒸发速率与凝结速率相等时蒸气产生的压强，只取决于液体的种类、纯度和温度；外界压强改变的是沸点，而不是蒸气压。",
        "ku": "Zexta buharê ya hevsengiyê ew zext e ku buhar dema leza buharbûnê û leza şilebûnê wekhev dibin çêdike; tenê bi cureyê şileyê, paqijiya wê û germahiyê ve girêdayî ye. Zexta derve xala kelînê diguherîne, ne zexta buharê."
      },
      "osymTip": {
        "tr": "ÖSYM tuzağı: Buhar basıncı dış basınca bağlı değildir!",
        "en": "Exam trap: Vapour pressure does not depend on external pressure!",
        "de": "Prüfungsfalle: Dampfdruck ist nicht vom Außendruck abhängig!",
        "fr": "Piège d’examen : la pression de vapeur ne dépend pas de la pression extérieure !",
        "ru": "Типичная ловушка на экзамене: давление пара не зависит от внешнего давления!",
        "ar": "فخ شائع في الامتحان: ضغط البخار لا يعتمد على الضغط الخارجي!",
        "zh": "考试陷阱：蒸气压与外界压强无关！",
        "ku": "Xefika azmûnê: Zexta buharê bi zexta derve ve ne girêdayî ye!"
      }
    },
    {
      "id": "u04-f02",
      "fact": {
        "tr": "Kaynama olayı sıvının iç buhar basıncının dış atmosfer basıncına eşit olduğu anda gerçekleşir.",
        "en": "Boiling occurs when the internal vapour pressure of the liquid equals the external atmospheric pressure.",
        "de": "Sieden tritt auf, wenn der innere Dampfdruck der Flüssigkeit dem äußeren Atmosphärendruck entspricht.",
        "fr": "L'ébullition se produit lorsque la pression de vapeur interne du liquide est égale à la pression atmosphérique externe.",
        "ru": "Жидкость закипает, когда давление её пара становится равным внешнему атмосферному давлению.",
        "ar": "يحدث الغليان عندما يكون ضغط البخار الداخلي للسائل مساوياً للضغط الجوي الخارجي.",
        "zh": "当液体的蒸气压等于外界大气压时，液体沸腾。",
        "ku": "Kelîn dema ku zexta buharê ya şileyê bi zexta atmosferê ya derve re wekhev dibe pêk tê."
      },
      "trap": {
        "tr": "Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.",
        "en": "Boiling is simply evaporation that occurs at the surface of the liquid.",
        "de": "Beim Sieden handelt es sich lediglich um eine Verdunstung, die an der Oberfläche der Flüssigkeit auftritt.",
        "fr": "L’ébullition est simplement une évaporation qui se produit à la surface du liquide.",
        "ru": "Кипение — это просто испарение, происходящее только с поверхности жидкости.",
        "ar": "الغليان تبخرٌ يحدث على سطح السائل فقط.",
        "zh": "沸腾只是发生在液体表面的蒸发。",
        "ku": "Kelîn tenê buharbûneke li ser rûyê şileyê ye."
      },
      "whyTrapIsFalse": {
        "tr": "Yalnızca yüzeyde gerçekleşen olay buharlaşmadır; kaynamada buhar kabarcıkları sıvının her yerinde oluşur.",
        "en": "The process that happens only at the surface is evaporation; in boiling, vapour bubbles form throughout the liquid.",
        "de": "Nur an der Oberfläche findet die Verdunstung statt; beim Sieden bilden sich Dampfblasen in der ganzen Flüssigkeit.",
        "fr": "C'est l'évaporation qui ne se produit qu'en surface ; lors de l'ébullition, des bulles de vapeur se forment dans tout le liquide.",
        "ru": "Только с поверхности происходит испарение; при кипении пузырьки пара образуются во всём объёме жидкости.",
        "ar": "العملية التي تحدث عند السطح فقط هي التبخر؛ أما في الغليان فتتكوّن فقاعات البخار في جميع أجزاء السائل.",
        "zh": "只在表面发生的是蒸发；沸腾时整个液体内部都产生气泡。",
        "ku": "Bûyera ku tenê li ser rûyê şileyê pêk tê buharbûn e; di kelînê de bilbilên buharê li her derê şileyê çêdibin."
      }
    },
    {
      "id": "u04-f03",
      "fact": {
        "tr": "Sıvıların akmaya karşı gösterdiği dirence viskozite denir; sıcaklık arttıkça viskozite azalır.",
        "en": "The resistance of liquids to flow is called viscosity; As temperature increases, viscosity decreases.",
        "de": "Der Strömungswiderstand von Flüssigkeiten wird als Viskosität bezeichnet; Mit zunehmender Temperatur nimmt die Viskosität ab.",
        "fr": "La résistance des liquides à l’écoulement est appelée viscosité ; À mesure que la température augmente, la viscosité diminue.",
        "ru": "Сопротивление жидкости течению называется вязкостью; с повышением температуры вязкость уменьшается.",
        "ar": "تُسمّى مقاومة السوائل للجريان اللزوجة؛ وتقل اللزوجة بارتفاع درجة الحرارة.",
        "zh": "液体对流动的阻力称为黏度；温度升高，黏度减小。",
        "ku": "Ji berxwedana şileyan a li hember herikînê re vîskozîte tê gotin; her ku germahî zêde dibe, vîskozîte kêm dibe."
      },
      "trap": {
        "tr": "Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.",
        "en": "As the temperature increases, the viscosity of honey and glycerin increases.",
        "de": "Mit steigender Temperatur erhöht sich die Viskosität von Honig und Glycerin.",
        "fr": "À mesure que la température augmente, la viscosité du miel et de la glycérine augmente.",
        "ru": "С повышением температуры вязкость мёда и глицерина увеличивается.",
        "ar": "تزداد لزوجة العسل والغليسرين بارتفاع درجة الحرارة.",
        "zh": "温度升高时，蜂蜜和甘油的黏度增大。",
        "ku": "Her ku germahî zêde dibe, vîskozîteya hingiv û glîserînê zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Isınan moleküllerin kinetik enerjisi artar ve aralarındaki çekimi daha kolay yener; bu yüzden bal ve gliserin ısıtılınca daha kolay akar, yani viskozite artmaz, azalır.",
        "en": "Heated molecules gain kinetic energy and overcome their mutual attraction more easily, so honey and glycerol flow more easily when warmed: viscosity decreases, not increases.",
        "de": "Erwärmte Moleküle haben mehr kinetische Energie und überwinden ihre Anziehung leichter; Honig und Glycerin fließen daher warm leichter – die Viskosität sinkt, statt zu steigen.",
        "fr": "Chauffées, les molécules gagnent de l'énergie cinétique et surmontent plus facilement leur attraction : le miel et le glycérol coulent mieux à chaud, la viscosité diminue au lieu d'augmenter.",
        "ru": "При нагревании кинетическая энергия молекул растёт, и они легче преодолевают взаимное притяжение; поэтому мёд и глицерин текут легче — вязкость не растёт, а уменьшается.",
        "ar": "عند التسخين تزداد الطاقة الحركية للجزيئات فتتغلب على تجاذبها بسهولة أكبر، لذا يسيل العسل والغليسرين بسهولة أكبر، أي تقل اللزوجة ولا تزداد.",
        "zh": "受热后分子动能增大，更容易克服分子间吸引，所以蜂蜜和甘油加热后更容易流动，黏度不是增大而是减小。",
        "ku": "Enerjiya kînetîk a molekulên ku germ dibin zêde dibe û ew bi hêsanî bi ser kişandina di navbera xwe de dikevin; loma hingiv û glîserîn dema germ dibin hêsantir diherikin, ango vîskozîte zêde nabe, kêm dibe."
      }
    },
    {
      "id": "u04-f04",
      "fact": {
        "tr": "Cam ve kauçuk (lastik) gibi amorf katıların belirli bir erime noktası yoktur; ısıtıldıklarında bir sıcaklık aralığında yumuşayarak akışkanlaşırlar.",
        "en": "Amorphous solids such as glass and rubber have no definite melting point; when heated they soften and flow over a range of temperatures.",
        "de": "Amorphe Feststoffe wie Glas und Kautschuk (Gummi) haben keinen bestimmten Schmelzpunkt; beim Erhitzen erweichen sie über einen Temperaturbereich und werden fließfähig.",
        "fr": "Les solides amorphes comme le verre et le caoutchouc n'ont pas de point de fusion défini ; chauffés, ils se ramollissent et deviennent fluides sur un intervalle de températures.",
        "ru": "Аморфные твёрдые вещества, например стекло и каучук (резина), не имеют определённой температуры плавления: при нагревании они размягчаются и становятся текучими в интервале температур.",
        "ar": "ليس للمواد الصلبة غير المتبلورة مثل الزجاج والمطاط درجة انصهار محددة؛ فعند تسخينها تلين وتسيل تدريجيًا ضمن مدى من درجات الحرارة.",
        "zh": "玻璃和橡胶等非晶体没有固定的熔点，受热时在一个温度范围内逐渐软化而流动。",
        "ku": "Hişkên amorf ên wekî cam û kauçuk (lastîk) xwedî xaleke helînê ya diyar nînin; dema têne germkirin di navbereke germahiyê de nerm dibin û diherikin."
      },
      "trap": {
        "tr": "Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.",
        "en": "Glass has an ionic crystal structure and a sharp melting point.",
        "de": "Glas hat eine ionische Kristallstruktur und einen scharfen Schmelzpunkt.",
        "fr": "Le verre a une structure cristalline ionique et un point de fusion précis.",
        "ru": "Стекло имеет ионную кристаллическую структуру и чёткую температуру плавления.",
        "ar": "الزجاج ذو بنية بلورية أيونية وله درجة انصهار حادة.",
        "zh": "玻璃是离子晶体，有明确的熔点。",
        "ku": "Cam xwedî avahiya krîstala îyonîk e û xala wê ya helînê tûj e."
      },
      "whyTrapIsFalse": {
        "tr": "Camın tanecikleri düzenli bir kristal örgü oluşturmaz, rastgele dizilir; bu nedenle cam belirli bir sıcaklıkta değil, bir sıcaklık aralığında yumuşayarak erir.",
        "en": "The particles of glass do not form an ordered crystal lattice but are randomly arranged, so glass softens and melts over a temperature range rather than at a fixed temperature.",
        "de": "Die Teilchen des Glases bilden kein geordnetes Kristallgitter, sondern sind ungeordnet; Glas erweicht daher über einen Temperaturbereich statt bei einer festen Temperatur.",
        "fr": "Les particules du verre ne forment pas de réseau cristallin ordonné mais sont disposées au hasard : le verre se ramollit et fond sur un intervalle de températures, pas à une température fixe.",
        "ru": "Частицы стекла не образуют упорядоченной кристаллической решётки, а расположены хаотично, поэтому стекло размягчается и плавится в интервале температур, а не при определённой температуре.",
        "ar": "لا تكوّن دقائق الزجاج شبكة بلورية منتظمة بل تترتب عشوائياً، ولذلك يلين الزجاج وينصهر ضمن مدى من درجات الحرارة لا عند درجة محددة.",
        "zh": "玻璃的微粒没有形成有序的晶格，而是无序排列，所以玻璃在一个温度范围内逐渐软化熔化，而没有固定的熔点。",
        "ku": "Perçeyên camê tora krîstalî ya rêkûpêk çênakin, bêserûber rêz dibin; loma cam ne di germahiyeke diyar de, lê di navbereke germahiyê de nerm dibe û dihele."
      }
    },
    {
      "id": "u04-f05",
      "fact": {
        "tr": "Elmas ve kuvars (SiO2), kovalent ağ örgülü kristal katılara örnektir.",
        "en": "Diamond and quartz (SiO2) are examples of covalent networked crystalline solids.",
        "de": "Diamant und Quarz (SiO2) sind Beispiele für kovalent vernetzte kristalline Feststoffe.",
        "fr": "Le diamant et le quartz (SiO2) sont des exemples de solides cristallins en réseau covalent.",
        "ru": "Алмаз и кварц (SiO2) — примеры веществ с атомной (ковалентной) кристаллической решёткой.",
        "ar": "الماس والكوارتز (SiO2) من أمثلة المواد الصلبة البلورية التساهمية الشبكية.",
        "zh": "金刚石和石英(SiO2)是共价晶体的实例。",
        "ku": "Elmas û kuvars (SiO2) mînakên madeyên hişk ên krîstalî yên bi tora kovalent in."
      },
      "trap": {
        "tr": "Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.",
        "en": "Quartz is a molecular solid held together by van der Waals bonds.",
        "de": "Quarz ist ein molekularer Feststoff, der durch Van-der-Waals-Bindungen zusammengehalten wird.",
        "fr": "Le quartz est un solide moléculaire maintenu par des liaisons de Van der Waals.",
        "ru": "Кварц — молекулярное твёрдое вещество, частицы которого удерживаются ван-дер-ваальсовыми силами.",
        "ar": "الكوارتز مادة صلبة جزيئية تتماسك جزيئاتها بقوى فان در فالس.",
        "zh": "石英是靠范德华力结合的分子晶体。",
        "ku": "Kuvars madeyeke hişk a molekulî ye ku bi hêzên Van der Waals li hev tê girtin."
      },
      "whyTrapIsFalse": {
        "tr": "Kuvarsta (SiO2) ayrı moleküller yoktur; Si ve O atomları kovalent bağlarla üç boyutlu bir ağ hâlinde bağlıdır. Bu yüzden kuvars çok sert ve erime noktası çok yüksektir.",
        "en": "Quartz (SiO2) contains no separate molecules; Si and O atoms are covalently linked in a three-dimensional network. That is why quartz is very hard and has a very high melting point.",
        "de": "Quarz (SiO2) enthält keine einzelnen Moleküle; Si- und O-Atome sind kovalent zu einem dreidimensionalen Netz verknüpft. Deshalb ist Quarz sehr hart und hat einen sehr hohen Schmelzpunkt.",
        "fr": "Le quartz (SiO2) ne contient pas de molécules distinctes ; les atomes Si et O sont liés de façon covalente en un réseau tridimensionnel. C'est pourquoi il est très dur et fond à très haute température.",
        "ru": "В кварце (SiO2) нет отдельных молекул: атомы Si и O связаны ковалентными связями в трёхмерную сетку. Поэтому кварц очень твёрдый и имеет очень высокую температуру плавления.",
        "ar": "لا توجد جزيئات منفصلة في الكوارتز (SiO2)؛ بل ترتبط ذرات Si وO بروابط تساهمية في شبكة ثلاثية الأبعاد، ولذلك فهو شديد الصلابة ودرجة انصهاره عالية جداً.",
        "zh": "石英(SiO2)中没有独立的分子，Si 和 O 原子以共价键连成三维网状结构，所以石英非常坚硬、熔点很高。",
        "ku": "Di kuvarsê (SiO2) de molekulên cuda tune ne; atomên Si û O bi girêdanên kovalent di toreke sê-alî de bi hev ve girêdayî ne. Ji ber vê yekê kuvars pir hişk e û xala wê ya helînê pir bilind e."
      }
    },
    {
      "id": "u04-f06",
      "fact": {
        "tr": "Kuru buz (katı CO2) ve buz (katı H2O) moleküler kristal katılardır.",
        "en": "Dry ice (solid CO2) and ice (solid H2O) are molecular crystalline solids.",
        "de": "Trockeneis (festes CO2) und Eis (festes H2O) sind molekulare kristalline Feststoffe.",
        "fr": "La neige carbonique (CO2 solide) et la glace (H2O solide) sont des solides cristallins moléculaires.",
        "ru": "Сухой лёд (твёрдый CO2) и лёд (твёрдая H2O) — вещества с молекулярной кристаллической решёткой.",
        "ar": "الجليد الجاف (CO2 الصلب) والجليد (H2O الصلب) مواد صلبة بلورية جزيئية.",
        "zh": "干冰(固态 CO2)和冰(固态 H2O)都是分子晶体。",
        "ku": "Qeşaya hişk (CO2-ya hişk) û qeşa (H2O-ya hişk) madeyên hişk ên krîstala molekulî ne."
      },
      "trap": {
        "tr": "Kuru buz kovalent ağ örgülü çok sert bir kristaldir.",
        "en": "Dry ice is a very hard crystal with a covalent network.",
        "de": "Trockeneis ist ein sehr harter Kristall mit einem kovalenten Netzwerk.",
        "fr": "La neige carbonique est un cristal très dur doté d’un réseau covalent.",
        "ru": "Сухой лёд — очень твёрдый кристалл с атомной (ковалентной) решёткой.",
        "ar": "الجليد الجاف بلورة شديدة الصلابة ذات شبكة تساهمية.",
        "zh": "干冰是具有共价网状结构、非常坚硬的晶体。",
        "ku": "Qeşaya hişk krîstaleke pir req a bi tora kovalent e."
      },
      "whyTrapIsFalse": {
        "tr": "Kuru buzda CO2 molekülleri birbirine yalnızca zayıf London kuvvetleriyle tutunur; bu nedenle yumuşaktır ve oda koşullarında kolayca süblimleşir.",
        "en": "In dry ice the CO2 molecules are held together only by weak London forces; it is therefore soft and sublimes easily at room conditions.",
        "de": "In Trockeneis halten die CO2-Moleküle nur durch schwache London-Kräfte zusammen; es ist daher weich und sublimiert bei Raumbedingungen leicht.",
        "fr": "Dans la glace carbonique, les molécules de CO2 ne sont unies que par de faibles forces de London ; elle est donc tendre et se sublime facilement dans les conditions ambiantes.",
        "ru": "В сухом льду молекулы CO2 удерживаются лишь слабыми лондоновскими силами, поэтому он мягкий и легко возгоняется при комнатных условиях.",
        "ar": "في الجليد الجاف تتماسك جزيئات CO2 بقوى لندن الضعيفة فقط، لذا فهو طري ويتسامى بسهولة في الظروف العادية.",
        "zh": "干冰中 CO2 分子之间只靠微弱的色散力结合，所以质软，在常温常压下容易升华。",
        "ku": "Di qeşaya hişk de molekulên CO2 tenê bi hêzên London ên qels li hev tên girtin; loma nerm e û di şertên odeyê de bi hêsanî sublîme dibe."
      }
    },
    {
      "id": "u04-f07",
      "fact": {
        "tr": "Yemek tuzu (NaCl) ve kireç taşı (CaCO3) iyonik kristal katılara örnektir.",
        "en": "Table salt (NaCl) and limestone (CaCO3) are examples of ionic crystalline solids.",
        "de": "Speisesalz (NaCl) und Kalkstein (CaCO3) sind Beispiele für ionische kristalline Feststoffe.",
        "fr": "Le sel de table (NaCl) et le calcaire (CaCO3) sont des exemples de solides cristallins ioniques.",
        "ru": "Поваренная соль (NaCl) и известняк (CaCO3) — примеры веществ с ионной кристаллической решёткой.",
        "ar": "ملح الطعام (NaCl) والحجر الجيري (CaCO3) من أمثلة المواد الصلبة البلورية الأيونية.",
        "zh": "食盐(NaCl)和石灰石(CaCO3)是离子晶体的实例。",
        "ku": "Xwêya xwarinê (NaCl) û kevirê kilsî (CaCO3) mînakên madeyên hişk ên krîstala îyonîk in."
      },
      "trap": {
        "tr": "NaCl moleküler katı sınıfında yer alır.",
        "en": "NaCl is in the molecular solid class.",
        "de": "NaCl gehört zur Klasse der molekularen Feststoffe.",
        "fr": "NaCl appartient à la classe des solides moléculaires.",
        "ru": "NaCl относится к молекулярным твёрдым веществам.",
        "ar": "ينتمي NaCl إلى فئة المواد الصلبة الجزيئية.",
        "zh": "NaCl 属于分子晶体。",
        "ku": "NaCl di çîna madeyên hişk ên molekulî de cih digire."
      },
      "whyTrapIsFalse": {
        "tr": "NaCl'de molekül yoktur; Na+ ve Cl- iyonları iyonik bağlarla kristal örgüde dizilir. Yüksek erime noktası ve eriyiğinin elektriği iletmesi iyonik katı olduğunu gösterir.",
        "en": "NaCl has no molecules; Na+ and Cl- ions are arranged in a crystal lattice held by ionic bonds. Its high melting point and the conductivity of its melt show it is an ionic solid.",
        "de": "NaCl enthält keine Moleküle; Na+- und Cl--Ionen bilden ein durch Ionenbindungen zusammengehaltenes Kristallgitter. Hoher Schmelzpunkt und leitende Schmelze zeigen, dass es ein Ionenkristall ist.",
        "fr": "NaCl ne contient pas de molécules ; les ions Na+ et Cl- forment un réseau cristallin maintenu par des liaisons ioniques. Son point de fusion élevé et la conductivité de son état fondu montrent que c'est un solide ionique.",
        "ru": "В NaCl нет молекул: ионы Na+ и Cl- образуют кристаллическую решётку, удерживаемую ионными связями. Высокая температура плавления и электропроводность расплава показывают, что это ионное кристаллическое вещество.",
        "ar": "لا توجد جزيئات في NaCl؛ بل تترتب أيونات Na+ وCl- في شبكة بلورية تربطها روابط أيونية، وتدل درجة انصهاره العالية وتوصيل مصهوره للكهرباء على أنه صلب أيوني.",
        "zh": "NaCl 中没有分子，Na+ 和 Cl- 通过离子键排列成晶格。熔点高、熔融态能导电，说明它是离子晶体。",
        "ku": "Di NaCl-ê de molekul tune ne; îyonên Na+ û Cl- bi girêdanên îyonîk di tora krîstalî de rêz dibin. Xala helînê ya bilind û guhestina elektrîkê ya di rewşa wê ya helandî de nîşan didin ku ew madeyeke hişk a îyonîk e."
      }
    },
    {
      "id": "u04-f08",
      "fact": {
        "tr": "Demir, bakır ve altın metalik kristal sınıfındadır ve değerlik elektronları serbestçe hareket eder.",
        "en": "Iron, copper and gold are in the metallic crystal class and their valence electrons move freely.",
        "de": "Eisen, Kupfer und Gold gehören zur Klasse der metallischen Kristalle und ihre Valenzelektronen bewegen sich frei.",
        "fr": "Le fer, le cuivre et l’or appartiennent à la classe des cristaux métalliques et leurs électrons de valence se déplacent librement.",
        "ru": "Железо, медь и золото имеют металлическую кристаллическую решётку, их валентные электроны свободно перемещаются.",
        "ar": "الحديد والنحاس والذهب بلورات فلزية تتحرك فيها إلكترونات التكافؤ بحرية.",
        "zh": "铁、铜和金属于金属晶体类，它们的价电子可以自由移动。",
        "ku": "Hesin, sifir û zêr di çîna krîstalên metalîk de ne û elektronên wan ên valansê bi azadî dilivin."
      },
      "trap": {
        "tr": "Demir katısı kovalent kristal olduğu için elektriği iletmez.",
        "en": "Since iron solid is a covalent crystal, it does not conduct electricity.",
        "de": "Da fester Eisen ein kovalenter Kristall ist, leitet er keinen Strom.",
        "fr": "Le fer solide étant un cristal covalent, il ne conduit pas l’électricité.",
        "ru": "Твёрдое железо — ковалентный кристалл, поэтому оно не проводит электрический ток.",
        "ar": "الحديد الصلب بلورة تساهمية، لذا لا يوصل الكهرباء.",
        "zh": "铁是共价晶体，所以不导电。",
        "ku": "Ji ber ku hesinê hişk krîstaleke kovalent e, elektrîkê naguhezîne."
      },
      "whyTrapIsFalse": {
        "tr": "Demir metalik bir kristaldir; değerlik elektronları metal örgüsü içinde serbestçe hareket ettiği için katı hâlde de elektriği iyi iletir.",
        "en": "Iron is a metallic crystal; its valence electrons move freely through the metal lattice, so it conducts electricity well even as a solid.",
        "de": "Eisen ist ein Metallkristall; seine Valenzelektronen bewegen sich frei im Metallgitter, daher leitet es auch im festen Zustand gut.",
        "fr": "Le fer est un cristal métallique ; ses électrons de valence se déplacent librement dans le réseau, il conduit donc bien l'électricité même à l'état solide.",
        "ru": "Железо — металлический кристалл; его валентные электроны свободно движутся в решётке, поэтому оно хорошо проводит ток и в твёрдом состоянии.",
        "ar": "الحديد بلورة فلزية تتحرك إلكترونات تكافؤها بحرية داخل الشبكة الفلزية، لذا يوصل الكهرباء جيداً حتى في الحالة الصلبة.",
        "zh": "铁是金属晶体，价电子能在金属晶格中自由移动，所以固态时也能很好地导电。",
        "ku": "Hesin krîstaleke metalîk e; elektronên valansê di nav tora metalê de bi azadî dilivin, loma di rewşa hişk de jî elektrîkê baş diguhezîne."
      }
    },
    {
      "id": "u04-f09",
      "fact": {
        "tr": "Buharlaşma her sıcaklıkta gerçekleşirken, kaynama belirli bir sıcaklıkta tüm sıvıda gerçekleşir.",
        "en": "While evaporation occurs at any temperature, boiling occurs in the entire liquid at a particular temperature.",
        "de": "Während es bei jeder Temperatur zu einer Verdampfung kommt, kommt es bei einer bestimmten Temperatur zum Sieden der gesamten Flüssigkeit.",
        "fr": "Alors que l’évaporation se produit à n’importe quelle température, l’ébullition se produit dans tout le liquide à une température particulière.",
        "ru": "Испарение происходит при любой температуре, а кипение — при определённой температуре и во всём объёме жидкости.",
        "ar": "يحدث التبخر عند أي درجة حرارة، في حين يحدث الغليان في السائل كله عند درجة حرارة معينة.",
        "zh": "蒸发在任何温度下都能发生，而沸腾在一定温度下、在整个液体中发生。",
        "ku": "Buharbûn di her germahiyê de pêk tê, lê kelîn di germahiyeke diyar de di tevahiya şileyê de pêk tê."
      },
      "trap": {
        "tr": "Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.",
        "en": "Evaporation occurs only at boiling temperature.",
        "de": "Die Verdunstung erfolgt erst bei Siedetemperatur.",
        "fr": "L'évaporation ne se produit qu'à la température d'ébullition.",
        "ru": "Испарение происходит только при температуре кипения.",
        "ar": "لا يحدث التبخر إلا عند درجة الغليان.",
        "zh": "蒸发只在沸点时发生。",
        "ku": "Buharbûn tenê di germahiya kelînê de pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Yeterli kinetik enerjiye sahip yüzey molekülleri her sıcaklıkta sıvıdan kopabilir; örneğin oda sıcaklığındaki su birikintisi zamanla kurur. Belirli bir sıcaklıkta gerçekleşen olay kaynamadır.",
        "en": "Surface molecules with enough kinetic energy can escape from a liquid at any temperature; a puddle at room temperature dries up, for example. It is boiling that happens at a definite temperature.",
        "de": "Oberflächenmoleküle mit genügend kinetischer Energie können bei jeder Temperatur entweichen; eine Pfütze trocknet z. B. bei Raumtemperatur. An eine bestimmte Temperatur gebunden ist das Sieden.",
        "fr": "Les molécules de surface ayant assez d'énergie cinétique peuvent quitter le liquide à toute température ; une flaque sèche par exemple à température ambiante. C'est l'ébullition qui se produit à une température déterminée.",
        "ru": "Поверхностные молекулы с достаточной кинетической энергией покидают жидкость при любой температуре: например, лужа высыхает при комнатной температуре. При определённой температуре происходит кипение.",
        "ar": "يمكن لجزيئات السطح التي تملك طاقة حركية كافية أن تغادر السائل في أيّ درجة حرارة؛ فبركة الماء مثلاً تجف في درجة حرارة الغرفة. أما الذي يحدث عند درجة محددة فهو الغليان.",
        "zh": "具有足够动能的表面分子在任何温度下都能逸出液体，例如室温下的水洼会慢慢变干。在确定温度下发生的是沸腾。",
        "ku": "Molekulên rûyê ku xwedî enerjiya kînetîk a têr in, di her germahiyê de dikarin ji şileyê veqetin; mînak, gola avê di germahiya odeyê de bi demê re ziwa dibe. Bûyera ku di germahiyeke diyar de pêk tê kelîn e."
      }
    },
    {
      "id": "u04-f10",
      "fact": {
        "tr": "Dış basınç azaldıkça (yüksek dağlara çıkıldıkça) suyun kaynama noktası düşer.",
        "en": "As the external pressure decreases (as you climb higher mountains), the boiling point of water decreases.",
        "de": "Wenn der äußere Druck abnimmt (beim Aufstieg auf höhere Berge), sinkt der Siedepunkt des Wassers.",
        "fr": "À mesure que la pression externe diminue (à mesure que vous gravissez des montagnes plus hautes), le point d’ébullition de l’eau diminue.",
        "ru": "С уменьшением внешнего давления (например, при подъёме высоко в горы) температура кипения воды понижается.",
        "ar": "تنخفض درجة غليان الماء بانخفاض الضغط الخارجي (كلما صعدنا إلى قمم الجبال العالية).",
        "zh": "外界压强降低时（如登上高山），水的沸点降低。",
        "ku": "Her ku zexta derve kêm dibe (her ku em hildikişin çiyayên bilind), xala kelînê ya avê nizm dibe."
      },
      "trap": {
        "tr": "Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.",
        "en": "Since the external pressure decreases in the pressure cooker, food cooks faster.",
        "de": "Da im Schnellkochtopf der Außendruck abnimmt, garen die Speisen schneller.",
        "fr": "Puisque la pression externe diminue dans la cocotte minute, les aliments cuisent plus rapidement.",
        "ru": "В скороварке пища готовится быстрее, потому что внешнее давление в ней понижается.",
        "ar": "يُطهى الطعام في قدر الضغط أسرع لأن الضغط الخارجي فيه ينخفض.",
        "zh": "用高压锅时外界压强降低，所以食物熟得更快。",
        "ku": "Ji ber ku di beroşa bi zext de zexta derve kêm dibe, xwarin zûtir dipije."
      },
      "whyTrapIsFalse": {
        "tr": "Düdüklü tencerede kapak buharı hapsettiği için iç basınç düşmez, artar; artan basınç suyun kaynama noktasını 100 °C'nin üzerine çıkarır ve yemek daha yüksek sıcaklıkta pişer.",
        "en": "In a pressure cooker the lid traps the steam, so the pressure inside rises rather than falls; the higher pressure raises water's boiling point above 100 °C and food cooks at a higher temperature.",
        "de": "Im Schnellkochtopf hält der Deckel den Dampf zurück, der Innendruck steigt also, statt zu sinken; dadurch liegt der Siedepunkt über 100 °C und das Essen gart bei höherer Temperatur.",
        "fr": "Dans un autocuiseur, le couvercle retient la vapeur : la pression intérieure augmente au lieu de diminuer, ce qui élève le point d'ébullition au-dessus de 100 °C et les aliments cuisent à plus haute température.",
        "ru": "В скороварке крышка удерживает пар, поэтому давление внутри не падает, а растёт; повышенное давление поднимает температуру кипения воды выше 100 °C, и пища готовится при более высокой температуре.",
        "ar": "في قدر الضغط يحبس الغطاء البخار فيرتفع الضغط الداخلي ولا ينخفض، فترتفع درجة غليان الماء فوق 100 °C ويُطهى الطعام عند درجة حرارة أعلى.",
        "zh": "高压锅的锅盖把蒸汽封住，锅内压强不是降低而是升高，压强升高使水的沸点超过 100 °C，食物在更高温度下煮熟。",
        "ku": "Di beroşa bi zext de qapax buharê di hundir de digire, loma zexta hundir kêm nabe, zêde dibe; zexta zêde xala kelînê ya avê ji 100 °C bilindtir dike û xwarin di germahiyeke bilindtir de dipije."
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
        "ar": "الرطوبة النسبية هي نسبة الضغط الجزئي لبخار الماء في الهواء إلى ضغط البخار المشبع عند درجة الحرارة نفسها.",
        "zh": "相对湿度是空气中水蒸气的分压与同温度下饱和蒸气压之比。",
        "ku": "Şiliya nisbî rêjeya zexta qismî ya buhara avê ya di hewayê de li hember zexta buharê ya têr a di wê germahiyê de ye."
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
        "ku": "Şiliya nisbî rêjeya zexta buhara avê ya di hewayê de li hember zexta buharê ya têr a di wê germahiyê de ye; nirxa %100 nayê wê wateyê ku hewa bi tevahî ji avê pêk tê, lê nîşan dide ku hewa têr bûye û êdî nikare buhara avê zêdetir bigire."
      }
    },
    {
      "id": "u04-f12",
      "fact": {
        "tr": "Plazma hâli nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.",
        "en": "The plasma state is an electrically conductive state in which neutral atoms, ions, free electrons and photons coexist.",
        "de": "Der Plasmazustand ist ein elektrisch leitender Zustand, in dem neutrale Atome, Ionen, freie Elektronen und Photonen nebeneinander existieren.",
        "fr": "L’état plasma est un état électriquement conducteur dans lequel coexistent des atomes neutres, des ions, des électrons libres et des photons.",
        "ru": "Плазма — электропроводящее состояние вещества, в котором одновременно присутствуют нейтральные атомы, ионы, свободные электроны и фотоны.",
        "ar": "حالة البلازما حالة موصلة للكهرباء تتعايش فيها الذرات المتعادلة والأيونات والإلكترونات الحرة والفوتونات.",
        "zh": "等离子态是中性原子、离子、自由电子和光子共存的导电状态。",
        "ku": "Rewşa plazmayê rewşeke ku elektrîkê diguhezîne ye; tê de atomên notr, îyon, elektronên azad û foton bi hev re hene."
      },
      "trap": {
        "tr": "Plazma hâli elektriği iletmez ve manyetik alandan etkilenmez.",
        "en": "The plasma state does not conduct electricity and is not affected by the magnetic field.",
        "de": "Der Plasmazustand leitet keinen Strom und wird durch das Magnetfeld nicht beeinflusst.",
        "fr": "L’état plasma ne conduit pas l’électricité et n’est pas affecté par le champ magnétique.",
        "ru": "Плазма не проводит электрический ток и не испытывает действия магнитного поля.",
        "ar": "حالة البلازما لا توصل الكهرباء ولا تتأثر بالمجال المغناطيسي.",
        "zh": "等离子态不导电，也不受磁场影响。",
        "ku": "Rewşa plazmayê elektrîkê naguhezîne û ji qada magnetîk bandor nabe."
      },
      "whyTrapIsFalse": {
        "tr": "Plazmada serbest elektronlar ve iyonlar gibi yüklü tanecikler bulunur; bu yüklü tanecikler sayesinde plazma elektriği iletir ve manyetik alandan etkilenir.",
        "en": "Plasma contains charged particles such as free electrons and ions; thanks to them it conducts electricity and is affected by magnetic fields.",
        "de": "Plasma enthält geladene Teilchen wie freie Elektronen und Ionen; dadurch leitet es Strom und wird von Magnetfeldern beeinflusst.",
        "fr": "Le plasma contient des particules chargées comme des électrons libres et des ions ; grâce à elles il conduit l'électricité et subit l'action des champs magnétiques.",
        "ru": "В плазме есть заряженные частицы — свободные электроны и ионы; благодаря им плазма проводит ток и испытывает действие магнитного поля.",
        "ar": "تحتوي البلازما على دقائق مشحونة كالإلكترونات الحرة والأيونات، وبفضلها توصل الكهرباء وتتأثر بالمجال المغناطيسي.",
        "zh": "等离子体中含有自由电子和离子等带电微粒，因此能导电，并受磁场影响。",
        "ku": "Di plazmayê de perçeyên barkirî yên wekî elektronên azad û îyonan hene; bi saya van perçeyên barkirî plazma elektrîkê diguhezîne û ji qada magnetîk bandor dibe."
      }
    },
    {
      "id": "u04-f13",
      "fact": {
        "tr": "Aynı sıcaklıkta moleküller arası çekim kuvvetleri güçlü olan sıvıların buhar basıncı düşük, viskozitesi genellikle yüksektir.",
        "en": "At the same temperature, liquids with strong intermolecular forces have a low vapour pressure and usually a high viscosity.",
        "de": "Bei gleicher Temperatur haben Flüssigkeiten mit starken zwischenmolekularen Kräften einen niedrigen Dampfdruck und meist eine hohe Viskosität.",
        "fr": "À la même température, les liquides à fortes forces intermoléculaires ont une faible pression de vapeur et, en général, une viscosité élevée.",
        "ru": "При одинаковой температуре жидкости с сильным межмолекулярным притяжением имеют низкое давление пара и, как правило, высокую вязкость.",
        "ar": "عند درجة الحرارة نفسها يكون ضغط بخار السوائل ذات قوى التجاذب القوية بين الجزيئات منخفضًا ولزوجتها عالية في الغالب.",
        "zh": "相同温度下，分子间作用力强的液体蒸气压低，黏度通常较大。",
        "ku": "Di heman germahiyê de zexta buharê ya şileyên ku hêzên wan ên navmolekulî xurt in nizm e û vîskozîteya wan bi gelemperî bilind e."
      },
      "trap": {
        "tr": "Moleküller arası çekim kuvveti güçlü olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.",
        "en": "Liquids with strong intermolecular forces evaporate very quickly and have high vapour pressure.",
        "de": "Flüssigkeiten mit starken zwischenmolekularen Kräften verdampfen sehr schnell und haben einen hohen Dampfdruck.",
        "fr": "Les liquides à fortes forces intermoléculaires s'évaporent très rapidement et ont une pression de vapeur élevée.",
        "ru": "Жидкости с сильным межмолекулярным притяжением очень быстро испаряются и имеют высокое давление пара.",
        "ar": "السوائل ذات قوى التجاذب القوية بين الجزيئات تتبخر بسرعة كبيرة ولها ضغط بخار مرتفع.",
        "zh": "分子间作用力强的液体蒸发得很快，蒸气压高。",
        "ku": "Şileyên ku hêzên wan ên navmolekulî xurt in pir zû buhar dibin û zexta wan a buharê bilind e."
      },
      "whyTrapIsFalse": {
        "tr": "Moleküller arası çekim güçlü olduğunda moleküllerin sıvıdan kopması zorlaşır; bu yüzden böyle sıvılar yavaş buharlaşır ve buhar basınçları düşüktür.",
        "en": "When intermolecular attraction is strong, it is harder for molecules to escape from the liquid, so such liquids evaporate slowly and have low vapour pressures.",
        "de": "Bei starker zwischenmolekularer Anziehung entweichen Moleküle schwerer aus der Flüssigkeit; solche Flüssigkeiten verdunsten langsam und haben einen niedrigen Dampfdruck.",
        "fr": "Quand l'attraction intermoléculaire est forte, les molécules quittent plus difficilement le liquide : ces liquides s'évaporent lentement et ont une faible pression de vapeur.",
        "ru": "При сильном межмолекулярном притяжении молекулам труднее покинуть жидкость, поэтому такие жидкости испаряются медленно и имеют низкое давление пара.",
        "ar": "عندما يكون التجاذب بين الجزيئات قوياً يصعب عليها مغادرة السائل، لذا تتبخر هذه السوائل ببطء ويكون ضغط بخارها منخفضاً.",
        "zh": "分子间吸引力强时，分子难以脱离液体，所以这类液体蒸发慢，蒸气压低。",
        "ku": "Dema kişandina di navbera molekulan de xurt be, veqetîna molekulan ji şileyê zehmet dibe; loma şileyên wiha hêdî buhar dibin û zexta wan a buharê nizm e."
      }
    },
    {
      "id": "u04-f14",
      "fact": {
        "tr": "Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).",
        "en": "The equilibrium vapour pressures of all pure liquids boiling in the same environment are equal to each other (equal to the external pressure).",
        "de": "Die Gleichgewichtsdampfdrücke aller reinen Flüssigkeiten, die in derselben Umgebung sieden, sind einander gleich (gleich dem Außendruck).",
        "fr": "Les pressions de vapeur à l'équilibre de tous les liquides purs bouillant dans le même environnement sont égales les unes aux autres (égales à la pression externe).",
        "ru": "Равновесные давления пара всех чистых жидкостей, кипящих в одних и тех же условиях, равны друг другу (и равны внешнему давлению).",
        "ar": "ضغوط البخار المتزنة لجميع السوائل النقية التي تغلي في الوسط نفسه متساوية (وتساوي الضغط الخارجي).",
        "zh": "在同一环境中沸腾的所有纯液体，其平衡蒸气压都相等（都等于外界压强）。",
        "ku": "Zextên buharê yên hevsengiyê yên hemû şileyên paqij ên ku di heman derdorê de dikelin bi hev re wekhev in (bi zexta derve re wekhev in)."
      },
      "trap": {
        "tr": "Aynı ortamda kaynamakta olan etil alkolün buhar basıncı, kaynamakta olan suyun buhar basıncından büyüktür.",
        "en": "In the same environment, the vapour pressure of boiling ethyl alcohol is greater than that of boiling water.",
        "de": "In derselben Umgebung ist der Dampfdruck von siedendem Ethylalkohol höher als der von siedendem Wasser.",
        "fr": "Dans un même milieu, la pression de vapeur de l'alcool éthylique en ébullition est supérieure à celle de l'eau en ébullition.",
        "ru": "В одних и тех же условиях давление пара кипящего этилового спирта больше, чем у кипящей воды.",
        "ar": "في الوسط نفسه يكون ضغط بخار الكحول الإيثيلي أثناء غليانه أكبر من ضغط بخار الماء أثناء غليانه.",
        "zh": "在同一环境中，沸腾的乙醇的蒸气压大于沸腾的水的蒸气压。",
        "ku": "Di heman derdorê de zexta buharê ya etîl alkola ku dikele ji ya ava ku dikele mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Bir sıvı, buhar basıncı dış basınca eşit olduğunda kaynar; aynı ortamda kaynayan alkol ve suyun buhar basınçları dış basınca, dolayısıyla birbirine eşittir. Alkol yalnızca daha düşük sıcaklıkta kaynar.",
        "en": "A liquid boils when its vapour pressure equals the external pressure; alcohol and water boiling in the same place both have vapour pressure equal to the external pressure, hence to each other. Alcohol simply boils at a lower temperature.",
        "de": "Eine Flüssigkeit siedet, wenn ihr Dampfdruck dem äußeren Druck gleich ist; siedender Alkohol und siedendes Wasser am selben Ort haben daher denselben Dampfdruck. Alkohol siedet nur bei niedrigerer Temperatur.",
        "fr": "Un liquide bout quand sa pression de vapeur égale la pression extérieure ; l'alcool et l'eau bouillant au même endroit ont donc la même pression de vapeur. L'alcool bout seulement à une température plus basse.",
        "ru": "Жидкость кипит, когда давление её пара равно внешнему; у спирта и воды, кипящих в одних и тех же условиях, давление пара равно внешнему давлению, а значит, и друг другу. Спирт лишь кипит при более низкой температуре.",
        "ar": "يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي؛ فالكحول والماء اللذان يغليان في الوسط نفسه يساوي ضغط بخار كلٍّ منهما الضغط الخارجي، فهما متساويان. وكل ما في الأمر أن الكحول يغلي عند درجة حرارة أدنى.",
        "zh": "液体在蒸气压等于外界压强时沸腾；在同一环境中沸腾的酒精和水，其蒸气压都等于外界压强，因而彼此相等。酒精只是沸腾温度更低。",
        "ku": "Şile dema zexta wê ya buharê bi zexta derve re wekhev dibe dikele; zextên buharê yên alkol û ava ku li heman cihî dikelin bi zexta derve re, ango bi hev re jî wekhev in. Alkol tenê di germahiyeke nizmtir de dikele."
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
        "ar": "بزيادة مساحة سطح السائل تزداد سرعة التبخر، لكن ضغط البخار المتزن لا يتغير.",
        "zh": "液体表面积增大，蒸发速率增大，但平衡蒸气压不变。",
        "ku": "Her ku rûbera şileyê mezin dibe, leza buharbûnê zêde dibe, lê zexta buharê ya hevsengiyê naguhere."
      },
      "trap": {
        "tr": "Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.",
        "en": "The equilibrium vapour pressure of water in the wide container is greater than that in the narrow container.",
        "de": "Der Gleichgewichtsdampfdruck von Wasser im breiten Behälter ist größer als der im schmalen Behälter.",
        "fr": "La pression de vapeur d’équilibre de l’eau dans le récipient large est supérieure à celle du récipient étroit.",
        "ru": "Равновесное давление пара воды в широком сосуде больше, чем в узком.",
        "ar": "ضغط بخار الماء المتزن في الوعاء الواسع أكبر منه في الوعاء الضيق.",
        "zh": "宽口容器中水的平衡蒸气压比窄口容器中的大。",
        "ku": "Zexta buharê ya hevsengiyê ya ava di firaxa fireh de ji ya di firaxa teng de mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Geniş yüzey buharlaşma hızını artırır ama yoğuşma hızını da aynı oranda artırır; dengede buhar basıncı yalnızca sıcaklığa, sıvının cinsine ve saflığına bağlıdır.",
        "en": "A larger surface increases the evaporation rate but increases the condensation rate in the same proportion; at equilibrium the vapour pressure depends only on temperature and on the kind and purity of the liquid.",
        "de": "Eine größere Oberfläche erhöht die Verdunstungs-, aber im gleichen Maß auch die Kondensationsgeschwindigkeit; im Gleichgewicht hängt der Dampfdruck nur von der Temperatur sowie von Art und Reinheit der Flüssigkeit ab.",
        "fr": "Une plus grande surface augmente la vitesse d'évaporation mais aussi, dans la même proportion, celle de condensation ; à l'équilibre, la pression de vapeur ne dépend que de la température, de la nature du liquide et de sa pureté.",
        "ru": "Большая поверхность увеличивает скорость испарения, но в той же мере и скорость конденсации; при равновесии давление пара зависит только от температуры, природы жидкости и её чистоты.",
        "ar": "تزيد المساحة السطحية الكبيرة سرعة التبخر لكنها تزيد سرعة التكاثف بالنسبة نفسها، وعند الاتزان لا يعتمد ضغط البخار إلا على درجة الحرارة ونوع السائل ونقائه.",
        "zh": "表面积大使蒸发速率增大，但凝结速率也按同样比例增大；达到平衡时蒸气压只取决于温度以及液体的种类和纯度。",
        "ku": "Rûbera fireh leza buharbûnê zêde dike, lê leza şilebûnê jî bi heman rêjeyê zêde dike; di hevsengiyê de zexta buharê tenê bi germahiyê, cureyê şileyê û paqijiya wê ve girêdayî ye."
      }
    },
    {
      "id": "u04-f16",
      "fact": {
        "tr": "Rüzgârlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.",
        "en": "In windy weather, the evaporation rate increases because vapour molecules on the surface are removed.",
        "de": "Bei windigem Wetter erhöht sich die Verdunstungsrate, da Dampfmoleküle an der Oberfläche entfernt werden.",
        "fr": "Par temps venteux, le taux d’évaporation augmente car les molécules de vapeur à la surface sont éliminées.",
        "ru": "В ветреную погоду испарение идёт быстрее, так как ветер уносит молекулы пара от поверхности.",
        "ar": "تزداد سرعة التبخر في الجو الذي تهب فيه الرياح لأن جزيئات البخار تُزاح بعيداً عن السطح.",
        "zh": "有风时，液面附近的蒸气分子被吹走，蒸发速率增大。",
        "ku": "Di hewaya bayî de leza buharbûnê zêde dibe, ji ber ku molekulên buharê yên li ser rûyê şileyê tên dûrxistin."
      },
      "trap": {
        "tr": "Rüzgârlı havada çamaşırların kuruma süresi uzar.",
        "en": "In windy weather, the drying time of laundry takes longer.",
        "de": "Bei windigem Wetter dauert das Trocknen der Wäsche länger.",
        "fr": "Par temps venteux, le temps de séchage du linge prend plus de temps.",
        "ru": "В ветреную погоду время высыхания белья увеличивается.",
        "ar": "تستغرق الملابس المغسولة وقتاً أطول لتجف في الجو الذي تهب فيه الرياح.",
        "zh": "有风的天气里，衣服晾干所需的时间更长。",
        "ku": "Di hewaya bayî de dema ziwabûna cilên şuştî dirêjtir dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Rüzgâr, yüzeydeki su buharını uzaklaştırarak buharın geri yoğuşmasını azaltır; buharlaşma hızlandığı için çamaşırlar daha kısa sürede kurur.",
        "en": "Wind carries away the water vapour near the surface and reduces re-condensation; evaporation speeds up, so the laundry dries in a shorter time.",
        "de": "Wind trägt den Wasserdampf an der Oberfläche fort und verringert die Rückkondensation; die Verdunstung wird schneller, die Wäsche trocknet in kürzerer Zeit.",
        "fr": "Le vent emporte la vapeur d'eau près de la surface et réduit la recondensation ; l'évaporation s'accélère et le linge sèche plus vite.",
        "ru": "Ветер уносит водяной пар от поверхности и уменьшает обратную конденсацию; испарение ускоряется, и бельё сохнет быстрее.",
        "ar": "تُبعد الرياح بخار الماء عن السطح فتقلّل تكاثفه من جديد، فيتسارع التبخر وتجف الملابس في وقت أقصر.",
        "zh": "风把表面附近的水蒸气带走，减少了水蒸气重新凝结，蒸发加快，衣服干得更快。",
        "ku": "Ba buhara avê ya li ser rûyê dûr dixe û şilebûna wê ya paşve kêm dike; ji ber ku buharbûn bilez dibe, cil di demeke kurttir de ziwa dibin."
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
        "ku": "Buharbûn"
      },
      "conceptB": {
        "tr": "Kaynama",
        "en": "Boiling",
        "de": "Sieden",
        "fr": "Ébullition",
        "ru": "Кипение",
        "ar": "الغليان",
        "zh": "沸腾",
        "ku": "Kelîn"
      },
      "distinction": {
        "tr": "Buharlaşma her sıcaklıkta ve sadece yüzeyde; kaynama belirli sıcaklıkta ve sıvının her yerinde gerçekleşir.",
        "en": "Evaporation occurs at all temperatures and only on the surface; Boiling occurs at a certain temperature and everywhere in the liquid.",
        "de": "Die Verdunstung erfolgt bei allen Temperaturen und nur an der Oberfläche; Das Sieden findet bei einer bestimmten Temperatur und überall in der Flüssigkeit statt.",
        "fr": "L'évaporation se produit à toutes les températures et uniquement en surface ; L'ébullition se produit à une certaine température et partout dans le liquide.",
        "ru": "Испарение происходит при любой температуре и только с поверхности жидкости; кипение происходит при определённой температуре и во всём объёме жидкости.",
        "ar": "يحدث التبخر في جميع درجات الحرارة وعلى السطح فقط؛ أما الغليان فيحدث عند درجة حرارة معينة وفي السائل كله.",
        "zh": "蒸发在任何温度下都能发生，且只发生在液体表面；而沸腾在一定温度下发生，液体内部和表面同时汽化。",
        "ku": "Buharbûn di her germahiyê de û tenê li ser rûyê şileyê pêk tê; kelîn di germahiyeke diyar de û li her derê şileyê pêk tê."
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
        "ar": "الصلب غير المتبلور",
        "zh": "非晶态固体",
        "ku": "Madeya Hişk a Amorf"
      },
      "conceptB": {
        "tr": "Kristal Katı",
        "en": "Crystalline Solid",
        "de": "Kristalliner Feststoff",
        "fr": "Solide cristallin",
        "ru": "Кристаллическое твёрдое вещество",
        "ar": "الصلب البلوري",
        "zh": "晶体",
        "ku": "Madeya Hişk a Krîstal"
      },
      "distinction": {
        "tr": "Amorf katıların belirli bir erime noktası yoktur, ısıtıldıkça yumuşayarak bir sıcaklık aralığında erir; kristal katıların tanecikleri düzenli istiflenmiştir ve keskin bir erime noktası vardır.",
        "en": "Amorphous solids have no definite melting point and soften gradually over a temperature range when heated; crystalline solids have regularly stacked particles and a sharp melting point.",
        "de": "Amorphe Feststoffe haben keinen bestimmten Schmelzpunkt und erweichen beim Erhitzen allmählich über einen Temperaturbereich; kristalline Feststoffe haben regelmäßig angeordnete Teilchen und einen scharfen Schmelzpunkt.",
        "fr": "Les solides amorphes n'ont pas de point de fusion défini et se ramollissent progressivement sur un intervalle de température ; les solides cristallins ont des particules empilées de façon ordonnée et un point de fusion net.",
        "ru": "Аморфное твёрдое вещество не имеет определённой температуры плавления и при нагревании постепенно размягчается в интервале температур; кристаллическое твёрдое вещество имеет упорядоченную упаковку частиц и чёткую температуру плавления.",
        "ar": "الصلب غير المتبلور ليس له درجة انصهار محددة، ويلين تدريجيًا عند التسخين فينصهر ضمن مدى من درجات الحرارة؛ أما الصلب البلوري فدقائقه مرتبة بانتظام وله درجة انصهار حادة.",
        "zh": "非晶态固体没有固定熔点，受热时在一定温度范围内逐渐软化熔化；而晶体中微粒排列有序，有固定的熔点。",
        "ku": "Madeya hişk a amorf xala helînê ya diyar tune ye û dema tê germkirin di navbereke germahiyê de hêdî hêdî nerm dibe û dihele; di madeya hişk a krîstal de perçe bi rêkûpêk rêz bûne û xala helînê tûj e."
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
        "zh": "黏度",
        "ku": "Vîskozîte"
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
        "ru": "Вязкость — внутреннее сопротивление жидкости течению; текучесть — противоположное свойство, способность жидкости легко течь.",
        "ar": "اللزوجة مقاومة داخلية يبديها السائل للجريان؛ أما السيولة فخاصية معاكسة لها، أي سهولة جريان السائل.",
        "zh": "黏度是液体流动时的内部阻力；而流动性则相反，表示液体容易流动的程度。",
        "ku": "Vîskozîte berxwedana navxweyî ya şileyê li hember herikînê ye; herikbarî taybetmendiya berevajî ye, ango şile çiqas bi hêsanî diherike."
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
        "zh": "外界压强",
        "ku": "Zexta Derve"
      },
      "distinction": {
        "tr": "Buhar basıncı, sıvının cinsine ve sıcaklığına bağlı olarak buharının yaptığı basınçtır; dış basınç ise ortam atmosferinin sıvı yüzeyine uyguladığı basınçtır.",
        "en": "Vapour pressure is the pressure exerted by a liquid's vapour and depends on the kind of liquid and its temperature; external pressure is the pressure the surrounding atmosphere exerts on the liquid surface.",
        "de": "Der Dampfdruck ist der Druck des Dampfes einer Flüssigkeit und hängt von der Flüssigkeit und ihrer Temperatur ab; der äußere Druck ist der Druck der umgebenden Atmosphäre auf die Flüssigkeitsoberfläche.",
        "fr": "La pression de vapeur est la pression exercée par la vapeur d'un liquide et dépend de la nature du liquide et de sa température ; la pression extérieure est celle que l'atmosphère exerce sur la surface du liquide.",
        "ru": "Давление пара — давление, создаваемое паром жидкости и зависящее от её природы и температуры; внешнее давление — давление окружающей атмосферы на поверхность жидкости.",
        "ar": "ضغط البخار هو الضغط الذي يُحدثه بخار السائل ويعتمد على نوع السائل ودرجة حرارته؛ أما الضغط الخارجي فهو الضغط الذي يؤثر به الغلاف الجوي المحيط في سطح السائل.",
        "zh": "蒸气压是液体的蒸气产生的压强，取决于液体的种类和温度；而外界压强是周围大气作用在液面上的压强。",
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
        "ru": "Атомный (ковалентный) кристалл",
        "ar": "البلورة التساهمية الشبكية",
        "zh": "共价晶体",
        "ku": "Krîstala Tora Kovalent"
      },
      "distinction": {
        "tr": "Moleküler kristallerde (buz, kuru buz) moleküller zayıf etkileşimlerle bir arada tutunur ve erime noktaları düşüktür; kovalent ağ örgülü kristallerde (elmas, kuvars) atomlar kovalent bağlarla bağlıdır ve erime noktaları çok yüksektir.",
        "en": "In molecular crystals (ice, dry ice) molecules are held together by weak interactions and melting points are low; in covalent network crystals (diamond, quartz) atoms are joined by covalent bonds and melting points are very high.",
        "de": "In Molekülkristallen (Eis, Trockeneis) werden die Moleküle durch schwache Wechselwirkungen zusammengehalten, die Schmelzpunkte sind niedrig; in kovalenten Netzwerkkristallen (Diamant, Quarz) sind die Atome durch kovalente Bindungen verknüpft, die Schmelzpunkte sind sehr hoch.",
        "fr": "Un cristal moléculaire (glace, neige carbonique) est formé de molécules liées par des interactions faibles et son point de fusion est bas ; dans un réseau covalent (diamant, quartz), les atomes sont unis par des liaisons covalentes et le point de fusion est très élevé.",
        "ru": "Молекулярный кристалл (лёд, сухой лёд) состоит из молекул, удерживаемых слабыми взаимодействиями, и имеет низкую температуру плавления; атомный (ковалентный) кристалл (алмаз, кварц) состоит из атомов, связанных ковалентными связями, и имеет очень высокую температуру плавления.",
        "ar": "في البلورة الجزيئية (الجليد، الجليد الجاف) ترتبط الجزيئات بتآثرات ضعيفة، ودرجة الانصهار منخفضة؛ أما في البلورة التساهمية الشبكية (الماس، الكوارتز) فترتبط الذرات بروابط تساهمية، ودرجة الانصهار مرتفعة جدًا.",
        "zh": "分子晶体（冰、干冰）中分子靠弱相互作用结合，熔点低；而共价晶体（金刚石、石英）中原子以共价键相连，熔点很高。",
        "ku": "Di krîstala molekulî de (qeşa, qeşaya hişk) molekul bi têkiliyên qels li hev tên girtin û xala helînê nizm e; di krîstala tora kovalent de (elmas, kuvars) atom bi girêdanên kovalent bi hev ve girêdayî ne û xala helînê pir bilind e."
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
        "tr": "Gaz, kritik sıcaklığının üzerinde bulunduğu için yalnızca basınç artırılarak sıvılaştırılamayan akışkandır (oda koşullarında O2, N2, He); buhar ise kritik sıcaklığının altında bulunduğundan yalnızca basınç artırılarak yoğuşturulabilen akışkandır (su buharı, iyot buharı).",
        "en": "Gas is a fluid above its critical temperature, so it cannot be liquefied by raising the pressure alone (O2, N2, He at room conditions); vapour is a fluid below its critical temperature, so it can be condensed by raising the pressure alone (water vapour, iodine vapour).",
        "de": "Gas ist ein Fluid oberhalb seiner kritischen Temperatur und lässt sich deshalb nicht allein durch Druckerhöhung verflüssigen (O2, N2, He bei Raumbedingungen); Dampf ist ein Fluid unterhalb seiner kritischen Temperatur und lässt sich allein durch Druckerhöhung kondensieren (Wasserdampf, Ioddampf).",
        "fr": "Un gaz est un fluide au-dessus de sa température critique : on ne peut pas le liquéfier en augmentant seulement la pression (O2, N2, He dans les conditions ambiantes) ; une vapeur est un fluide au-dessous de sa température critique : une simple augmentation de pression suffit à la condenser (vapeur d'eau, vapeur de diiode).",
        "ru": "Газ — текучая среда выше своей критической температуры, поэтому его нельзя сжижить одним лишь повышением давления (O2, N2, He при комнатных условиях); пар — текучая среда ниже своей критической температуры, его можно сконденсировать одним повышением давления (водяной пар, пары иода).",
        "ar": "الغاز مائع فوق درجة حرارته الحرجة، فلا يمكن إسالته بزيادة الضغط وحدها (O2 وN2 وHe في الظروف العادية)؛ أما البخار فمائع تحت درجة حرارته الحرجة، فيمكن تكثيفه بزيادة الضغط وحدها (بخار الماء، بخار اليود).",
        "zh": "气体是处于其临界温度以上的流体，仅靠加压不能使其液化（常温下的 O2、N2、He）；而蒸气是处于其临界温度以下的流体，仅靠加压就能使其凝结（水蒸气、碘蒸气）。",
        "ku": "Gaz ew herikbar e ku li ser germahiya xwe ya krîtîk e, ji ber vê tenê bi zêdekirina zextê nayê şilekirin (di şertên odeyê de O2, N2, He); buhar jî ew herikbar e ku li binê germahiya xwe ya krîtîk e, ji ber vê tenê bi zêdekirina zextê dikare were şilekirin (buhara avê, buhara îyotê)."
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
        "ar": "الغاز",
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
        "ku": "Plazma"
      },
      "distinction": {
        "tr": "Gaz nötr atom veya moleküllerden oluşur; plazma ise iyonlar, serbest elektronlar ve nötr taneciklerin bir arada bulunduğu iletken akışkandır.",
        "en": "Gas consists of neutral atoms or molecules; Plasma is a conductive fluid in which ions, free electrons and neutral particles coexist.",
        "de": "Gas besteht aus neutralen Atomen oder Molekülen; Plasma ist ein elektrisch leitfähiges Fluid, in der Ionen, freie Elektronen und neutrale Teilchen nebeneinander existieren.",
        "fr": "Le gaz est constitué d’atomes ou de molécules neutres ; Le plasma est un fluide conducteur dans lequel coexistent des ions, des électrons libres et des particules neutres.",
        "ru": "Газ состоит из нейтральных атомов или молекул; плазма — электропроводящая среда, в которой одновременно присутствуют ионы, свободные электроны и нейтральные частицы.",
        "ar": "يتكون الغاز من ذرات أو جزيئات متعادلة؛ أما البلازما فمائع موصل تتعايش فيه الأيونات والإلكترونات الحرة والدقائق المتعادلة.",
        "zh": "气体由中性原子或分子构成；而等离子体是离子、自由电子和中性微粒共存的导电流体。",
        "ku": "Gaz ji atom an molekulên notr pêk tê; plazma jî herikbareke guhêzbar e ku tê de îyon, elektronên azad û perçeyên notr bi hev re hene."
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
        "ku": "Krîstala Îyonîk"
      },
      "conceptB": {
        "tr": "Metalik Kristal",
        "en": "Metallic Crystal",
        "de": "Metallkristall",
        "fr": "Cristal métallique",
        "ru": "Металлический кристалл",
        "ar": "البلورة الفلزية",
        "zh": "金属晶体",
        "ku": "Krîstala Metalîk"
      },
      "distinction": {
        "tr": "İyonik kristallerde katyon ve anyonlar iyonik bağla bağlıdır ve bu kristaller katı hâlde elektriği iletmez; metalik kristallerde pozitif metal iyonları elektron denizi ile bir arada tutulur ve bu kristaller katı hâlde elektriği iletir.",
        "en": "In ionic crystals, cations and anions are held by ionic bonds and the solid does not conduct electricity; in metallic crystals, positive metal ions are held by an electron sea and the solid conducts electricity.",
        "de": "In Ionenkristallen sind Kationen und Anionen durch Ionenbindungen verbunden, und der Feststoff leitet keinen Strom; in Metallkristallen sind positive Metallionen durch einen Elektronensee verbunden, und der Feststoff leitet Strom.",
        "fr": "Un cristal ionique est formé de cations et d'anions unis par des liaisons ioniques et ne conduit pas l'électricité à l'état solide ; dans un solide métallique, les ions métalliques positifs sont liés par une mer d'électrons et le solide conduit l'électricité.",
        "ru": "Ионный кристалл состоит из катионов и анионов, связанных ионной связью, и в твёрдом состоянии не проводит ток; металлический кристалл состоит из положительных ионов металла, удерживаемых „электронным морем“, и проводит ток в твёрдом состоянии.",
        "ar": "في البلورة الأيونية ترتبط الكاتيونات والأنيونات بروابط أيونية، ولا توصل هذه البلورات الكهرباء في الحالة الصلبة؛ أما في البلورة الفلزية فترتبط أيونات الفلز الموجبة ببحر الإلكترونات، وتوصل هذه البلورات الكهرباء في الحالة الصلبة.",
        "zh": "离子晶体中阴、阳离子以离子键结合，固态时不导电；而金属晶体中的阳离子靠自由电子“海”结合在一起，固态时能导电。",
        "ku": "Di krîstala îyonîk de katyon û anyon bi girêdana îyonîk bi hev ve girêdayî ne û di rewşa hişk de elektrîkê naguhezîne; di krîstala metalîk de îyonên metal ên pozîtîf bi deryaya elektronan li hev tên girtin û di rewşa hişk de elektrîkê diguhezîne."
      }
    }
  ],
  "sequences": [
    {
      "id": "u04-s01",
      "title": {
        "tr": "Kapalı Kaptaki Sıvının Isıtılması",
        "en": "Heating a Liquid in a Closed Container",
        "de": "Erwärmen einer Flüssigkeit im geschlossenen Gefäß",
        "fr": "Chauffage d'un liquide en récipient fermé",
        "ru": "Нагревание жидкости в закрытом сосуде",
        "ar": "تسخين سائل في وعاء مغلق",
        "zh": "加热密闭容器中的液体",
        "ku": "Germkirina Şileyê di Firaxeke Girtî de"
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
          "ku": "Hejmara molekulên ku têra xwe enerjiya wan heye ku ji rûyê şileyê veqetin zêde dibe"
        },
        {
          "tr": "Buharlaşma hızı artar",
          "en": "Evaporation rate increases",
          "de": "Die Verdunstungsrate steigt",
          "fr": "Le taux d’évaporation augmente",
          "ru": "Скорость испарения увеличивается",
          "ar": "تزداد سرعة التبخر",
          "zh": "蒸发速率增大",
          "ku": "Leza buharbûnê zêde dibe"
        },
        {
          "tr": "Kapalı kapta daha yüksek bir denge buhar basıncına ulaşılır",
          "en": "A higher equilibrium vapour pressure is reached in a closed container",
          "de": "Im geschlossenen Gefäß stellt sich ein höherer Gleichgewichtsdampfdruck ein",
          "fr": "Une pression de vapeur d'équilibre plus élevée est atteinte en récipient fermé",
          "ru": "В закрытом сосуде устанавливается более высокое равновесное давление пара",
          "ar": "يصل ضغط البخار المتزن في الوعاء المغلق إلى قيمة أعلى",
          "zh": "在密闭容器中达到更高的平衡蒸气压",
          "ku": "Di firaxa girtî de zexta buharê ya hevsengiyê ya bilindtir pêk tê"
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
        "ru": "Нагревание чистой воды и смена агрегатного состояния (1 атм)",
        "ar": "تسخين الماء النقي وتغير حالته (1 atm)",
        "zh": "纯水的受热与状态变化(1 atm)",
        "ku": "Germbûn û Guherîna Rewşê ya Ava Paqij (1 atm)"
      },
      "steps": [
        {
          "tr": "0 °C'deki buz eriyerek suya dönüşür",
          "en": "Ice at 0 °C melts and turns into water",
          "de": "Eis schmilzt bei 0 °C und verwandelt sich in Wasser",
          "fr": "La glace à 0 °C fond et se transforme en eau",
          "ru": "Лёд при 0 °C тает и превращается в воду",
          "ar": "ينصهر الجليد عند 0 °C ويتحول إلى ماء",
          "zh": "0 °C 的冰熔化成水",
          "ku": "Qeşaya 0 °C dihele û dibe av"
        },
        {
          "tr": "Sıvı su 100 °C'ye kadar ısınır",
          "en": "Liquid water heats up to 100 °C",
          "de": "Flüssiges Wasser erhitzt sich auf bis zu 100 °C",
          "fr": "L'eau liquide chauffe jusqu'à 100 °C",
          "ru": "Жидкая вода нагревается до 100 °C",
          "ar": "يسخن الماء السائل حتى 100 °C",
          "zh": "液态水加热至 100 °C",
          "ku": "Ava şile heta 100 °C germ dibe"
        },
        {
          "tr": "100 °C'de sabit sıcaklıkta kaynar",
          "en": "Boils at a constant temperature of 100 °C",
          "de": "Siedet bei einer konstanten Temperatur von 100 °C",
          "fr": "Bouillonne à une température constante de 100 °C",
          "ru": "Вода кипит при постоянной температуре 100 °C",
          "ar": "يغلي الماء عند 100 °C وتبقى درجة حرارته ثابتة",
          "zh": "在 100 °C 恒温下沸腾",
          "ku": "Di 100 °C de, di germahiyeke sabît de dikele"
        },
        {
          "tr": "Su buharının sıcaklığı yükselmeye devam eder",
          "en": "The temperature of water vapour continues to rise",
          "de": "Die Temperatur des Wasserdampfes steigt weiter an",
          "fr": "La température de la vapeur d'eau continue d'augmenter",
          "ru": "Температура водяного пара продолжает расти",
          "ar": "تستمر درجة حرارة بخار الماء في الارتفاع",
          "zh": "水蒸气温度持续升高",
          "ku": "Germahiya buhara avê bilind dibe û didome"
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
          "ku": "Di hewaya ku sar dibe de zexta buharê ya têr a avê nizm dibe"
        },
        {
          "tr": "Havadaki su buharı basıncı doygun buhar basıncına ulaşır; bağıl nem %100 olur",
          "en": "The water-vapour pressure in the air reaches the saturated vapour pressure; relative humidity becomes 100%",
          "de": "Der Wasserdampfdruck der Luft erreicht den Sättigungsdampfdruck; die relative Feuchte wird 100 %",
          "fr": "La pression de vapeur d'eau de l'air atteint la pression de vapeur saturante ; l'humidité relative atteint 100 %",
          "ru": "Давление водяного пара в воздухе достигает давления насыщенного пара; относительная влажность становится 100 %",
          "ar": "يبلغ ضغط بخار الماء في الهواء ضغط البخار المشبع فتصبح الرطوبة النسبية 100%",
          "zh": "空气中的水蒸气压达到饱和蒸气压，相对湿度变为 100%",
          "ku": "Zexta buhara avê ya di hewayê de digihîje zexta buharê ya têr; şiliya nisbî dibe %100"
        },
        {
          "tr": "Su buharı soğuk yüzeylerde yoğuşarak çiğ damlaları oluşturur",
          "en": "Water vapour condenses on cold surfaces and forms dew drops",
          "de": "Wasserdampf kondensiert an kalten Oberflächen zu Tautropfen",
          "fr": "La vapeur d'eau se condense sur les surfaces froides en gouttes de rosée",
          "ru": "Водяной пар конденсируется на холодных поверхностях в капли росы",
          "ar": "يتكاثف بخار الماء على الأسطح الباردة مكوّناً قطرات الندى",
          "zh": "水蒸气在冷的表面凝结成露珠",
          "ku": "Buhara avê li ser rûyên sar şile dibe û dilopên xunavê çêdike"
        }
      ]
    },
    {
      "id": "u04-s04",
      "title": {
        "tr": "Pistonlu Kaptaki Gazın Sıkıştırılması",
        "en": "Compressing a Gas in a Piston Container",
        "de": "Kompression eines Gases im Kolbengefäß",
        "fr": "Compression d'un gaz dans un récipient à piston",
        "ru": "Сжатие газа в сосуде с поршнем",
        "ar": "ضغط غاز في وعاء ذي مكبس",
        "zh": "压缩活塞容器中的气体",
        "ku": "Pêçandina Gazê di Firaxa bi Piston de"
      },
      "steps": [
        {
          "tr": "Hareketli piston aşağı doğru itilir",
          "en": "The moving piston is pushed down",
          "de": "Der bewegliche Kolben wird nach unten gedrückt",
          "fr": "Le piston mobile est poussé vers le bas",
          "ru": "Подвижный поршень опускают вниз",
          "ar": "يُدفع المكبس المتحرك إلى الأسفل",
          "zh": "向下推动活塞",
          "ku": "Pistona livok ber bi jêr ve tê pêldan"
        },
        {
          "tr": "Gazın kapladığı hacim daralır",
          "en": "The volume occupied by the gas decreases",
          "de": "Das vom Gas eingenommene Volumen nimmt ab",
          "fr": "Le volume occupé par le gaz diminue",
          "ru": "Объём, занимаемый газом, уменьшается",
          "ar": "يتناقص الحجم الذي يشغله الغاز",
          "zh": "气体所占的体积减少",
          "ku": "Qebareya ku gaz digire kêm dibe"
        },
        {
          "tr": "Birim hacme düşen tanecik sayısı artar",
          "en": "The number of particles per unit volume increases",
          "de": "Die Anzahl der Partikel pro Volumeneinheit nimmt zu",
          "fr": "Le nombre de particules par unité de volume augmente",
          "ru": "Число частиц в единице объёма увеличивается",
          "ar": "يزداد عدد الجزيئات لكل وحدة حجم",
          "zh": "单位体积内的微粒数增加",
          "ku": "Hejmara perçeyan di yekîneya qebareyê de zêde dibe"
        },
        {
          "tr": "Çeperlere yapılan çarpma sayısı ve basınç artar",
          "en": "The number of collisions with the container walls and the pressure increase",
          "de": "Die Zahl der Stöße auf die Gefäßwände und der Druck nehmen zu",
          "fr": "Le nombre de chocs sur les parois et la pression augmentent",
          "ru": "Число ударов о стенки сосуда и давление увеличиваются",
          "ar": "يزداد عدد التصادمات مع جدران الوعاء ويزداد الضغط",
          "zh": "分子撞击器壁的次数和压强增大",
          "ku": "Hejmara lêketinên li dîwarên firaxê û zext zêde dibin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u04-twin01",
      "stem": {
        "tr": "Şekildeki kapalı kaplarda sıvı ile buharı arasında denge kurulmuştur.\nKaplardaki denge buhar basınçları (P) arasındaki ilişki aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "In the closed containers shown, equilibrium has been reached between each liquid and its vapour.\nIn which option is the relationship between the equilibrium vapour pressures (P) in the containers given correctly?",
        "de": "In den abgebildeten geschlossenen Gefäßen hat sich jeweils ein Gleichgewicht zwischen Flüssigkeit und Dampf eingestellt.\nIn welcher Antwort ist die Beziehung zwischen den Gleichgewichtsdampfdrücken (P) in den Gefäßen richtig angegeben?",
        "fr": "Dans les récipients fermés représentés, l'équilibre s'est établi entre chaque liquide et sa vapeur.\nDans quelle proposition la relation entre les pressions de vapeur à l'équilibre (P) dans les récipients est-elle correcte ?",
        "ru": "В изображённых закрытых сосудах установилось равновесие между жидкостью и её паром.\nВ каком варианте верно указано соотношение равновесных давлений пара (P) в сосудах?",
        "ar": "في الأوعية المغلقة المبيّنة في الشكل وصل كل سائل إلى حالة اتزان مع بخاره.\nفي أيّ الخيارات الآتية أُعطيت العلاقة بين ضغوط البخار عند الاتزان (P) في الأوعية بشكل صحيح؟",
        "zh": "图示的密闭容器中，液体与其蒸气之间已达到平衡。\n下列哪一项正确表示了各容器中平衡蒸气压（P）之间的关系？",
        "ku": "Di firaxên girtî yên di şiklê de di navbera şileyê û buhara wê de hevsengî çêbûye.\nTêkiliya di navbera zextên buharê yên hevsengiyê (P) yên di firaxan de di kîjan vebijarkê de rast hatiye dayîn?"
      },
      "options": [
        {
          "tr": "P(I) = P(II) = P(III)",
          "en": "P(I) = P(II) = P(III)",
          "de": "P(I) = P(II) = P(III)",
          "fr": "P(I) = P(II) = P(III)",
          "ru": "P(I) = P(II) = P(III)",
          "ar": "P(I) = P(II) = P(III)",
          "zh": "P(I) = P(II) = P(III)",
          "ku": "P(I) = P(II) = P(III)"
        },
        {
          "tr": "P(II) > P(I) > P(III)",
          "en": "P(II) > P(I) > P(III)",
          "de": "P(II) > P(I) > P(III)",
          "fr": "P(II) > P(I) > P(III)",
          "ru": "P(II) > P(I) > P(III)",
          "ar": "P(II) > P(I) > P(III)",
          "zh": "P(II) > P(I) > P(III)",
          "ku": "P(II) > P(I) > P(III)"
        },
        {
          "tr": "P(I) = P(II) > P(III)",
          "en": "P(I) = P(II) > P(III)",
          "de": "P(I) = P(II) > P(III)",
          "fr": "P(I) = P(II) > P(III)",
          "ru": "P(I) = P(II) > P(III)",
          "ar": "P(I) = P(II) > P(III)",
          "zh": "P(I) = P(II) > P(III)",
          "ku": "P(I) = P(II) > P(III)"
        },
        {
          "tr": "P(III) > P(I) = P(II)",
          "en": "P(III) > P(I) = P(II)",
          "de": "P(III) > P(I) = P(II)",
          "fr": "P(III) > P(I) = P(II)",
          "ru": "P(III) > P(I) = P(II)",
          "ar": "P(III) > P(I) = P(II)",
          "zh": "P(III) > P(I) = P(II)",
          "ku": "P(III) > P(I) = P(II)"
        },
        {
          "tr": "P(I) > P(II) > P(III)",
          "en": "P(I) > P(II) > P(III)",
          "de": "P(I) > P(II) > P(III)",
          "fr": "P(I) > P(II) > P(III)",
          "ru": "P(I) > P(II) > P(III)",
          "ar": "P(I) > P(II) > P(III)",
          "zh": "P(I) > P(II) > P(III)",
          "ku": "P(I) > P(II) > P(III)"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Denge buhar basıncı yalnızca sıvının cinsine, saflığına ve sıcaklığına bağlıdır; sıvı miktarına ve kaptaki buhar hacmine bağlı değildir. I ve II'de aynı sıcaklıkta (25 °C) saf su bulunduğundan, su miktarları farklı olsa da P(I) = P(II)'dir. III'te suda uçucu olmayan NaCl çözünmüştür; çözünen tanecikler yüzeydeki su moleküllerinin bir kısmının yerini aldığından buharlaşma azalır ve buhar basıncı aynı sıcaklıktaki saf sudan düşüktür. Sıralama: P(I) = P(II) > P(III).",
        "en": "Equilibrium vapour pressure depends only on the identity, purity and temperature of the liquid, not on the amount of liquid or the volume above it. I and II both contain pure water at the same temperature (25 °C), so P(I) = P(II) even though the amounts differ. In III, non-volatile NaCl is dissolved in the water; dissolved particles take the place of some water molecules at the surface, evaporation decreases and the vapour pressure is lower than that of pure water at the same temperature. Order: P(I) = P(II) > P(III).",
        "de": "Der Gleichgewichtsdampfdruck hängt nur von Art, Reinheit und Temperatur der Flüssigkeit ab, nicht von der Flüssigkeitsmenge oder dem Gasraum darüber. I und II enthalten reines Wasser bei derselben Temperatur (25 °C), also ist P(I) = P(II), obwohl die Mengen verschieden sind. In III ist nichtflüchtiges NaCl gelöst; gelöste Teilchen besetzen einen Teil der Oberfläche, die Verdunstung nimmt ab und der Dampfdruck ist niedriger als der von reinem Wasser gleicher Temperatur. Reihenfolge: P(I) = P(II) > P(III).",
        "fr": "La pression de vapeur à l'équilibre ne dépend que de la nature, de la pureté et de la température du liquide, et non de la quantité de liquide ni du volume au-dessus. I et II contiennent de l'eau pure à la même température (25 °C) : P(I) = P(II), même si les quantités diffèrent. En III, du NaCl non volatil est dissous ; les particules dissoutes occupent une partie de la surface, l'évaporation diminue et la pression de vapeur est inférieure à celle de l'eau pure à la même température. Ordre : P(I) = P(II) > P(III).",
        "ru": "Равновесное давление пара зависит только от природы, чистоты и температуры жидкости, но не от количества жидкости или объёма над ней. В I и II чистая вода при одной и той же температуре (25 °C), поэтому P(I) = P(II), хотя количества воды разные. В III растворён нелетучий NaCl; растворённые частицы занимают часть поверхности, испарение уменьшается, и давление пара ниже, чем у чистой воды при той же температуре. Порядок: P(I) = P(II) > P(III).",
        "ar": "يعتمد ضغط البخار عند الاتزان على نوع السائل ونقاوته ودرجة حرارته فقط، لا على كمية السائل أو حجم الفراغ فوقه. يحتوي الوعاءان I و II على ماء نقي عند درجة الحرارة نفسها (25 °C)، لذا P(I) = P(II) رغم اختلاف الكميتين. وفي III ذاب NaCl غير المتطاير في الماء؛ فتشغل الجسيمات المذابة جزءًا من السطح ويقل التبخر، فيكون ضغط البخار أقل منه للماء النقي عند درجة الحرارة نفسها. الترتيب: P(I) = P(II) > P(III).",
        "zh": "平衡蒸气压只取决于液体的种类、纯度和温度，与液体的量及其上方空间的体积无关。I 和 II 中都是相同温度（25 °C）的纯水，虽然水量不同，P(I) = P(II)。III 中溶有不挥发的 NaCl，溶质粒子占据了部分液面，蒸发减少，蒸气压低于同温度下的纯水。顺序：P(I) = P(II) > P(III)。",
        "ku": "Zexta buharê ya hevsengiyê tenê bi cure, paqijî û germahiya şileyê ve girêdayî ye; bi mîqdara şileyê an qebareya ser wê ve ne girêdayî ye. Di I û II de di heman germahiyê de (25 °C) ava pak heye, ji ber vê her çend mîqdar cuda bin jî P(I) = P(II) e. Di III de NaCl ya nefirok di avê de heliyaye; perçeyên helandî cihê hin molekulên avê yên li ser rûyê digirin, buharbûn kêm dibe û zexta buharê ji ya ava pak a di heman germahiyê de nizmtir e. Rêz: P(I) = P(II) > P(III)."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 196,
        "markup": "<rect x=\"15\" y=\"30\" width=\"90\" height=\"120\" class=\"qf-fill\"/><rect x=\"16\" y=\"31\" width=\"88\" height=\"91\" class=\"qf-gas\"/><rect x=\"16\" y=\"122\" width=\"88\" height=\"27\" class=\"qf-water\"/><text x=\"60\" y=\"22\" text-anchor=\"middle\" class=\"qf-small\">25 °C</text><text x=\"60\" y=\"168\" text-anchor=\"middle\" class=\"qf-small\">{{pure}}</text><text x=\"60\" y=\"188\" text-anchor=\"middle\" class=\"qf-big\">I</text><rect x=\"135\" y=\"30\" width=\"90\" height=\"120\" class=\"qf-fill\"/><rect x=\"136\" y=\"31\" width=\"88\" height=\"41\" class=\"qf-gas\"/><rect x=\"136\" y=\"72\" width=\"88\" height=\"77\" class=\"qf-water\"/><text x=\"180\" y=\"22\" text-anchor=\"middle\" class=\"qf-small\">25 °C</text><text x=\"180\" y=\"168\" text-anchor=\"middle\" class=\"qf-small\">{{pure}}</text><text x=\"180\" y=\"188\" text-anchor=\"middle\" class=\"qf-big\">II</text><rect x=\"255\" y=\"30\" width=\"90\" height=\"120\" class=\"qf-fill\"/><rect x=\"256\" y=\"31\" width=\"88\" height=\"69\" class=\"qf-gas\"/><rect x=\"256\" y=\"100\" width=\"88\" height=\"49\" class=\"qf-water\"/><text x=\"300\" y=\"22\" text-anchor=\"middle\" class=\"qf-small\">25 °C</text><text x=\"300\" y=\"168\" text-anchor=\"middle\" class=\"qf-small\">{{salt}}</text><text x=\"300\" y=\"188\" text-anchor=\"middle\" class=\"qf-big\">III</text><circle cx=\"280\" cy=\"118\" r=\"2.6\" class=\"qf-accent2\"/><circle cx=\"305\" cy=\"132\" r=\"2.6\" class=\"qf-accent2\"/><circle cx=\"325\" cy=\"112\" r=\"2.6\" class=\"qf-accent2\"/><circle cx=\"270\" cy=\"138\" r=\"2.6\" class=\"qf-accent2\"/><circle cx=\"318\" cy=\"140\" r=\"2.6\" class=\"qf-accent2\"/>",
        "labels": {
          "pure": {
            "tr": "saf su",
            "en": "pure water",
            "de": "reines Wasser",
            "fr": "eau pure",
            "ru": "чистая вода",
            "ar": "ماء نقي",
            "zh": "纯水",
            "ku": "ava pak"
          },
          "salt": {
            "tr": "NaCl(suda)",
            "en": "NaCl(aq)",
            "de": "NaCl(aq)",
            "fr": "NaCl(aq)",
            "ru": "NaCl (р-р)",
            "ar": "NaCl(aq)",
            "zh": "NaCl(aq)",
            "ku": "NaCl(aq)"
          }
        }
      }
    },
    {
      "id": "u04-twin02",
      "stem": {
        "tr": "Aynı ortamda kaynamakta olan saf su ve saf etil alkol için aşağıdakilerden hangisi kesinlikle eşittir?",
        "en": "Which of the following is definitely equal for pure water and pure ethyl alcohol boiling in the same environment?",
        "de": "Welche der folgenden Größen ist für reines Wasser und reinen Ethylalkohol, die in derselben Umgebung sieden, auf jeden Fall gleich?",
        "fr": "Laquelle des grandeurs suivantes est nécessairement égale pour l'eau pure et l'éthanol pur bouillant dans le même environnement ?",
        "ru": "Какая из величин обязательно одинакова для чистой воды и чистого этилового спирта, кипящих в одних и тех же условиях?",
        "ar": "أي مما يلي متساوٍ حتمًا للماء النقي والكحول الإيثيلي النقي اللذين يغليان في الوسط نفسه؟",
        "zh": "在同一环境中沸腾的纯水和纯乙醇，下列哪项一定相等？",
        "ku": "Ji bo ava paqij û etîl alkola paqij ên ku di heman derdorê de dikelin, kîjan ji yên jêrîn bi teqez wekhev e?"
      },
      "options": [
        {
          "tr": "Buhar basınçları",
          "en": "vapour pressures",
          "de": "Dampfdrücke",
          "fr": "pressions de vapeur",
          "ru": "Давление пара",
          "ar": "ضغوط البخار",
          "zh": "蒸气压",
          "ku": "Zextên buharê"
        },
        {
          "tr": "Kaynama sıcaklıkları",
          "en": "boiling temperatures",
          "de": "Siedetemperaturen",
          "fr": "températures d'ébullition",
          "ru": "Температура кипения",
          "ar": "درجات حرارة الغليان",
          "zh": "沸腾温度",
          "ku": "Germahiyên kelînê"
        },
        {
          "tr": "Buharlaşma ısıları",
          "en": "Heats of evaporation",
          "de": "Verdunstungswärme",
          "fr": "Chaleurs d'évaporation",
          "ru": "Теплота испарения",
          "ar": "حرارة التبخر",
          "zh": "蒸发热",
          "ku": "Germên buharbûnê"
        },
        {
          "tr": "Viskoziteleri",
          "en": "Viscosities",
          "de": "Viskositäten",
          "fr": "Viscosités",
          "ru": "Вязкость",
          "ar": "اللزوجة",
          "zh": "黏度",
          "ku": "Vîskozîte"
        },
        {
          "tr": "Özkütleleri",
          "en": "Density",
          "de": "Dichte",
          "fr": "Densité",
          "ru": "Плотность",
          "ar": "الكثافة",
          "zh": "密度",
          "ku": "Çirî"
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
        "zh": "液体在蒸气压等于外界压强时沸腾。在同一环境中外界压强相同，所以沸腾的水和沸腾的乙醇的蒸气压都等于这一压强，因而彼此相等。沸点、汽化热、黏度和密度取决于液体的种类，各不相同；例如在 1 atm 下水在 100 °C 沸腾，乙醇在 78 °C 沸腾。",
        "ku": "Şile dema zexta wê ya buharê bi zexta derve re wekhev dibe dikele. Ji ber ku di heman derdorê de zexta derve yek e, zextên buharê yên ava ku dikele û etîl alkola ku dikele bi vê zexta derve re, ango bi hev re jî wekhev in. Germahiya kelînê, germa buharbûnê, vîskozîte û çirî bi cureyê şileyê ve girêdayî ne, loma cuda ne; mînak, di 1 atm de av di 100 °C de, etîl alkol di 78 °C de dikele."
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
        "ar": "ضغط بخار الماء المشبع عند 25 °C هو 24 mmHg. إذا كان الضغط الجزئي لبخار الماء في الهواء عند الدرجة نفسها 18 mmHg، فكم تبلغ الرطوبة النسبية للهواء بالنسبة المئوية (%)؟",
        "zh": "25 °C 时水的饱和蒸气压为 24 mmHg。若同温度下空气中水蒸气的分压为 18 mmHg，则空气的相对湿度是百分之多少（%）？",
        "ku": "Di 25 °C de zexta buharê ya têr a avê 24 mmHg e. Heke di heman germahiyê de zexta qismî ya buhara avê ya di hewayê de 18 mmHg be, şiliya nisbî ya hewayê ji sedî (%) çend e?"
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
        "zh": "相对湿度 = (空气中水蒸气压 / 饱和蒸气压) · 100 = (18 / 24) · 100 = 75。把比值颠倒会得到 (24 / 18) · 100 ≈ 133，这与相对湿度不能超过 100 相矛盾。(24 − 18) / 24 · 100 = 25 表示离饱和还差多少；43 和 57 是除以两压强之和得到的。",
        "ku": "Şiliya nisbî = (zexta buhara avê ya di hewayê de / zexta buharê ya têr) · 100 = (18 / 24) · 100 = 75. Heke rêje berevajî were danîn, (24 / 18) · 100 ≈ 133 derdikeve; ev li dijî wê rastiyê ye ku şiliya nisbî nikare ji 100 derbas bibe. (24 − 18) / 24 · 100 = 25 nîşan dide ka hewa çiqas ji têrbûnê dûr e; 43 û 57 ji parvekirina li ser berhevoka zextan derdikevin."
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
        "ku": "Derbarê xala kelînê ya şileyên paqij de kîjan ji van gotinan rast in?\nI. Her ku zexta derve zêde dibe, xala kelînê bilind dibe.\nII. Di dema kelînê de germahiya şileya paqij her zêde dibe.\nIII. Di heman zexta derve de, kişandinên navmolekulî yên şileya ku xala wê ya kelînê bilindtir e bi giştî xurttir in."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
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
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: sıvı, buhar basıncı dış basınca eşit olduğunda kaynar; dış basınç büyüdükçe bu eşitliğe daha yüksek sıcaklıkta ulaşılır. II yanlıştır: saf bir sıvı kaynarken verilen ısı moleküller arası çekimleri yenmek için harcanır, sıcaklık sabit kalır. III doğrudur: moleküller arası çekim güçlü olan sıvının buhar basıncı düşük olduğundan dış basınca ulaşmak için daha yüksek sıcaklık gerekir. Doğru yanıt: I ve III.",
        "en": "I is true: a liquid boils when its vapour pressure equals the external pressure; with a higher external pressure this happens at a higher temperature. II is false: while a pure liquid boils, the heat supplied is used to overcome intermolecular attractions and the temperature stays constant. III is true: a liquid with strong intermolecular attractions has a low vapour pressure and needs a higher temperature to reach the external pressure. Answer: I and III.",
        "de": "I ist richtig: Eine Flüssigkeit siedet, wenn ihr Dampfdruck gleich dem äußeren Druck ist; bei höherem Druck geschieht das bei höherer Temperatur. II ist falsch: Beim Sieden einer reinen Flüssigkeit wird die zugeführte Wärme zum Überwinden der Anziehungskräfte verbraucht, die Temperatur bleibt konstant. III ist richtig: Starke Anziehungskräfte bedeuten niedrigen Dampfdruck, also ist eine höhere Temperatur nötig. Antwort: I und III.",
        "fr": "I est vraie : un liquide bout quand sa pression de vapeur égale la pression extérieure ; si celle-ci augmente, il faut une température plus élevée. II est fausse : pendant l'ébullition d'un liquide pur, la chaleur fournie sert à vaincre les attractions intermoléculaires et la température reste constante. III est vraie : un liquide aux attractions fortes a une faible pression de vapeur et doit être chauffé davantage pour atteindre la pression extérieure. Réponse : I et III.",
        "ru": "I верно: жидкость кипит, когда давление её пара равно внешнему; при большем внешнем давлении это достигается при более высокой температуре. II неверно: при кипении чистой жидкости подводимая теплота расходуется на преодоление межмолекулярного притяжения, температура постоянна. III верно: при сильном притяжении давление пара низкое, и для достижения внешнего давления нужна более высокая температура. Ответ: I и III.",
        "ar": "العبارة I صحيحة: يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي، وكلما زاد الضغط الخارجي تحقق ذلك عند درجة أعلى. العبارة II خاطئة: أثناء غليان السائل النقي تُستهلك الحرارة في التغلب على التجاذب بين الجزيئات فتبقى درجة الحرارة ثابتة. العبارة III صحيحة: السائل قوي التجاذب ضغط بخاره منخفض فيحتاج درجة أعلى ليبلغ الضغط الخارجي. الإجابة: I وIII.",
        "zh": "I 正确：液体在蒸气压等于外界压强时沸腾，外界压强越大，达到这一条件所需温度越高。II 错误：纯液体沸腾时吸收的热量用于克服分子间吸引，温度保持不变。III 正确：分子间吸引力强的液体蒸气压低，需要更高温度才能达到外界压强。答案：I 和 III。",
        "ku": "I rast e: şile dema zexta wê ya buharê bi zexta derve re wekhev dibe dikele; her ku zexta derve mezin dibe, ev wekhevî di germahiyeke bilindtir de pêk tê. II şaş e: dema şileya paqij dikele, germa ku tê dayîn ji bo bi ser ketina li kişandinên navmolekulî tê xerckirin û germahî sabît dimîne. III rast e: zexta buharê ya şileya bi kişandinên navmolekulî yên xurt nizm e, loma ji bo gihîştina zexta derve germahiyeke bilindtir lazim e. Bersiv: I û III."
      }
    },
    {
      "id": "u04-twin05",
      "stem": {
        "tr": "Grafikte saf X, Y ve Z sıvılarının buhar basınçlarının sıcaklıkla değişimi verilmiştir.\nBu sıvılarla ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Moleküller arası çekim kuvvetleri en güçlü olan Z'dir.\nII. Dış basınç 760 mmHg iken Y'nin kaynama noktası 65 °C'dir.\nIII. Dış basınç 400 mmHg olduğunda X'in kaynama noktası Z'ninkinden yüksek olur.",
        "en": "The graph shows how the vapour pressures of the pure liquids X, Y and Z change with temperature.\nWhich of the following statements about these liquids are correct?\nI. Z has the strongest intermolecular forces.\nII. When the external pressure is 760 mmHg, the boiling point of Y is 65 °C.\nIII. When the external pressure is 400 mmHg, the boiling point of X is higher than that of Z.",
        "de": "Das Diagramm zeigt, wie sich die Dampfdrücke der reinen Flüssigkeiten X, Y und Z mit der Temperatur ändern.\nWelche der folgenden Aussagen über diese Flüssigkeiten sind richtig?\nI. Z hat die stärksten zwischenmolekularen Kräfte.\nII. Bei einem äußeren Druck von 760 mmHg liegt der Siedepunkt von Y bei 65 °C.\nIII. Bei einem äußeren Druck von 400 mmHg ist der Siedepunkt von X höher als der von Z.",
        "fr": "Le graphique montre la variation des pressions de vapeur des liquides purs X, Y et Z en fonction de la température.\nLesquelles des affirmations suivantes sur ces liquides sont exactes ?\nI. C'est Z qui a les forces intermoléculaires les plus fortes.\nII. Sous une pression extérieure de 760 mmHg, la température d'ébullition de Y est 65 °C.\nIII. Sous une pression extérieure de 400 mmHg, la température d'ébullition de X est supérieure à celle de Z.",
        "ru": "На графике показана зависимость давления пара чистых жидкостей X, Y и Z от температуры.\nКакие из утверждений об этих жидкостях верны?\nI. Наиболее сильное межмолекулярное притяжение у Z.\nII. При внешнем давлении 760 мм рт. ст. температура кипения Y равна 65 °C.\nIII. При внешнем давлении 400 мм рт. ст. температура кипения X выше, чем у Z.",
        "ar": "يبيّن الرسم البياني تغيّر ضغط بخار السوائل النقية X وY وZ مع درجة الحرارة.\nأيّ العبارات الآتية عن هذه السوائل صحيحة؟\nI. أقوى قوى تجاذب بين الجزيئات هي في Z.\nII. عندما يكون الضغط الخارجي 760 mmHg تكون درجة غليان Y هي 65 °C.\nIII. عندما يكون الضغط الخارجي 400 mmHg تكون درجة غليان X أعلى من درجة غليان Z.",
        "zh": "图中给出了纯液体 X、Y、Z 的蒸气压随温度的变化。\n关于这些液体，下列说法中正确的是哪些？\nI. 分子间作用力最强的是 Z。\nII. 外界压强为 760 mmHg 时，Y 的沸点是 65 °C。\nIII. 外界压强为 400 mmHg 时，X 的沸点高于 Z 的沸点。",
        "ku": "Di grafîkê de guherîna zexta buharê ya şileyên paqij X, Y û Z li gorî germahiyê hatiye dayîn.\nKîjan ji van hukmên derbarê van şileyan de rast in?\nI. Hêzên navmolekulî yên herî xurt ên Z ne.\nII. Dema zexta derve 760 mmHg be, xala kelînê ya Y 65 °C ye.\nIII. Dema zexta derve 400 mmHg be, xala kelînê ya X ji ya Z bilindtir dibe."
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Grafikte her sıcaklıkta buhar basıncı en düşük olan Z'dir; molekülleri birbirini en kuvvetli çeken sıvının buharlaşma eğilimi en azdır (I doğru). Bir sıvı, buhar basıncı dış basınca eşit olduğunda kaynar; Y'nin eğrisi 760 mmHg değerine 65 °C'de ulaşır (II doğru). 400 mmHg'de X'in eğrisi bu değere 20 °C'nin altında, Z'ninki ise 80 °C'nin üzerinde ulaşır; dış basınç düşünce tüm kaynama noktaları düşer ama sıralama değişmez ve X yine Z'den düşük sıcaklıkta kaynar (III yanlış). Doğru yanıt: I ve II.",
        "en": "On the graph Z has the lowest vapour pressure at every temperature; the liquid whose molecules attract each other most strongly has the least tendency to evaporate (I correct). A liquid boils when its vapour pressure equals the external pressure; the curve of Y reaches 760 mmHg at 65 °C (II correct). At 400 mmHg the curve of X reaches this value below 20 °C and that of Z above 80 °C; lowering the external pressure lowers all boiling points but does not change their order, so X still boils at a lower temperature than Z (III false). Answer: I and II.",
        "de": "Im Diagramm hat Z bei jeder Temperatur den niedrigsten Dampfdruck; die Flüssigkeit, deren Moleküle sich am stärksten anziehen, verdampft am wenigsten (I richtig). Eine Flüssigkeit siedet, wenn ihr Dampfdruck dem äußeren Druck entspricht; die Kurve von Y erreicht 760 mmHg bei 65 °C (II richtig). Bei 400 mmHg erreicht die Kurve von X diesen Wert unterhalb von 20 °C, die von Z oberhalb von 80 °C; ein niedrigerer äußerer Druck senkt alle Siedepunkte, ändert aber nicht ihre Reihenfolge, X siedet also weiterhin bei tieferer Temperatur als Z (III falsch). Antwort: I und II.",
        "fr": "Sur le graphique, Z a la plus faible pression de vapeur à toute température ; le liquide dont les molécules s'attirent le plus fortement a la plus faible tendance à s'évaporer (I exacte). Un liquide bout lorsque sa pression de vapeur égale la pression extérieure ; la courbe de Y atteint 760 mmHg à 65 °C (II exacte). À 400 mmHg, la courbe de X atteint cette valeur en dessous de 20 °C et celle de Z au-dessus de 80 °C ; une baisse de la pression extérieure abaisse toutes les températures d'ébullition sans changer leur ordre, X bout donc toujours à plus basse température que Z (III fausse). Réponse : I et II.",
        "ru": "На графике у Z наименьшее давление пара при любой температуре; жидкость, молекулы которой притягиваются сильнее всего, испаряется хуже всего (I верно). Жидкость кипит, когда давление её пара равно внешнему; кривая Y достигает 760 мм рт. ст. при 65 °C (II верно). При 400 мм рт. ст. кривая X достигает этого значения ниже 20 °C, а кривая Z — выше 80 °C; понижение внешнего давления снижает все температуры кипения, но не меняет их порядок, поэтому X по-прежнему кипит при более низкой температуре, чем Z (III неверно). Ответ: I и II.",
        "ar": "في الرسم يكون ضغط بخار Z هو الأدنى عند كل درجة حرارة؛ فالسائل الذي تتجاذب جزيئاته بأكبر قوة يكون أقل ميلًا إلى التبخر (I صحيحة). يغلي السائل عندما يساوي ضغط بخاره الضغط الخارجي، ومنحنى Y يبلغ 760 mmHg عند 65 °C (II صحيحة). عند 400 mmHg يبلغ منحنى X هذه القيمة دون 20 °C ومنحنى Z فوق 80 °C؛ فخفض الضغط الخارجي يخفض جميع درجات الغليان دون أن يغيّر ترتيبها، ويظل X يغلي عند درجة أقل من Z (III خاطئة). الإجابة: I و II.",
        "zh": "图中任一温度下 Z 的蒸气压都最低；分子间吸引最强的液体最不易蒸发（I 正确）。液体的蒸气压等于外界压强时沸腾，Y 的曲线在 65 °C 时达到 760 mmHg（II 正确）。在 400 mmHg 时，X 的曲线在 20 °C 以下就达到该值，而 Z 的曲线在 80 °C 以上才达到；外界压强降低会使所有沸点降低，但不改变它们的顺序，X 仍比 Z 在更低温度下沸腾（III 错误）。答案：I 和 II。",
        "ku": "Di grafîkê de di her germahiyê de zexta buharê ya herî nizm a Z ye; şileya ku molekulên wê herî xurt hev dikişînin meyla wê ya buharbûnê herî kêm e (I rast e). Şile dema zexta buhara wê bi zexta derve re wekhev dibe dikele; xêza Y di 65 °C de digihîje 760 mmHg (II rast e). Di 400 mmHg de xêza X di bin 20 °C de, ya Z jî li ser 80 °C digihîje vê nirxê; kêmbûna zexta derve hemû xalên kelînê nizm dike lê rêza wan naguherîne, ji ber vê X hîn jî di germahiyeke ji Z nizmtir de dikele (III şaş e). Bersiv: I û II."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Sıcaklık (°C)",
          "en": "Temperature (°C)",
          "de": "Temperatur (°C)",
          "fr": "Température (°C)",
          "ru": "Температура (°C)",
          "ar": "درجة الحرارة (°C)",
          "zh": "温度 (°C)",
          "ku": "Germahî (°C)"
        },
        "yLabel": {
          "tr": "Buhar basıncı (mmHg)",
          "en": "Vapour pressure (mmHg)",
          "de": "Dampfdruck (mmHg)",
          "fr": "Pression de vapeur (mmHg)",
          "ru": "Давление пара (мм рт. ст.)",
          "ar": "ضغط البخار (mmHg)",
          "zh": "蒸气压 (mmHg)",
          "ku": "Zexta buharê (mmHg)"
        },
        "xMin": 0,
        "xMax": 110,
        "yMin": 0,
        "yMax": 1000,
        "xTicks": [
          20,
          35,
          65,
          80,
          100
        ],
        "yTicks": [
          400,
          760
        ],
        "series": [
          {
            "points": [
              [
                0,
                185
              ],
              [
                10,
                290
              ],
              [
                20,
                442
              ],
              [
                30,
                640
              ],
              [
                35,
                760
              ],
              [
                40,
                900
              ]
            ],
            "label": "X"
          },
          {
            "points": [
              [
                0,
                30
              ],
              [
                10,
                55
              ],
              [
                20,
                96
              ],
              [
                30,
                160
              ],
              [
                40,
                260
              ],
              [
                50,
                410
              ],
              [
                60,
                625
              ],
              [
                65,
                760
              ],
              [
                70,
                925
              ]
            ],
            "label": "Y"
          },
          {
            "points": [
              [
                0,
                5
              ],
              [
                20,
                18
              ],
              [
                40,
                55
              ],
              [
                60,
                149
              ],
              [
                70,
                234
              ],
              [
                80,
                355
              ],
              [
                90,
                526
              ],
              [
                100,
                760
              ],
              [
                105,
                906
              ]
            ],
            "label": "Z"
          }
        ]
      }
    },
    {
      "id": "u04-twin06",
      "stem": {
        "tr": "Grafikte saf X katısının sabit basınçta, sabit hızla ısıtılmasıyla elde edilen sıcaklık–zaman eğrisi verilmiştir.\nX ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "en": "The graph shows the temperature–time curve obtained when a pure solid X is heated at constant pressure and at a constant rate.\nWhich of the following about X is incorrect?",
        "de": "Das Diagramm zeigt die Temperatur-Zeit-Kurve, die beim gleichmäßigen Erhitzen eines reinen Feststoffs X bei konstantem Druck erhalten wird.\nWelche der folgenden Aussagen über X ist falsch?",
        "fr": "Le graphique donne la courbe température–temps obtenue en chauffant un solide pur X à pression constante et à vitesse constante.\nLaquelle des affirmations suivantes sur X est incorrecte ?",
        "ru": "На графике приведена кривая «температура — время», полученная при равномерном нагревании чистого твёрдого вещества X при постоянном давлении.\nКакое утверждение об X неверно?",
        "ar": "يبيّن الرسم البياني منحنى درجة الحرارة–الزمن الناتج عن تسخين مادة صلبة نقية X عند ضغط ثابت وبمعدل ثابت.\nأيّ العبارات الآتية عن X خاطئة؟",
        "zh": "图中给出了在恒压下以恒定速率加热纯固体 X 得到的温度–时间曲线。\n关于 X，下列说法错误的是哪一项？",
        "ku": "Di grafîkê de xêza germahî–demê ya ku bi germkirina hişka paqij X di zexta sabît de û bi leza sabît hatiye bidestxistin heye.\nDerbarê X de kîjan ji van şaş e?"
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
          "ku": "Xala kelînê ya X di vê zextê de 60 °C ye."
        },
        {
          "tr": "6–9. dakikalar arasında X yalnızca sıvı hâldedir.",
          "en": "Between 6 and 9 min X is liquid only.",
          "de": "Zwischen 6 und 9 min ist X nur flüssig.",
          "fr": "Entre 6 et 9 min, X est uniquement liquide.",
          "ru": "С 6-й по 9-ю минуту X находится только в жидком состоянии.",
          "ar": "بين الدقيقتين 6 و9 تكون X في الحالة السائلة فقط.",
          "zh": "6–9 min 时 X 只以液态存在。",
          "ku": "Di navbera deqeyên 6–9. de X tenê di rewşa şile de ye."
        },
        {
          "tr": "2–6. dakikalar arasında katı ve sıvı X bir arada bulunur.",
          "en": "Between 2 and 6 min solid and liquid X are present together.",
          "de": "Zwischen 2 und 6 min liegen fester und flüssiger Stoff X nebeneinander vor.",
          "fr": "Entre 2 et 6 min, X solide et X liquide coexistent.",
          "ru": "С 2-й по 6-ю минуту X находится одновременно в твёрдом и жидком состоянии.",
          "ar": "بين الدقيقتين 2 و6 توجد X الصلبة والسائلة معاً.",
          "zh": "2–6 min 时固态和液态 X 共存。",
          "ku": "Di navbera deqeyên 2–6. de X-ya hişk û X-ya şile bi hev re hene."
        },
        {
          "tr": "9–15. dakikalar arasında X taneciklerinin ortalama kinetik enerjisi artar.",
          "en": "Between 9 and 15 min the average kinetic energy of the particles of X increases.",
          "de": "Zwischen 9 und 15 min nimmt die mittlere kinetische Energie der Teilchen von X zu.",
          "fr": "Entre 9 et 15 min, l'énergie cinétique moyenne des particules de X augmente.",
          "ru": "С 9-й по 15-ю минуту средняя кинетическая энергия частиц X увеличивается.",
          "ar": "بين الدقيقتين 9 و15 يزداد متوسط الطاقة الحركية لدقائق X.",
          "zh": "9–15 min 时 X 微粒的平均动能增大。",
          "ku": "Di navbera deqeyên 9–15. de enerjiya kînetîk a navînî ya perçeyên X zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Grafikte sıcaklığın sabit kaldığı ilk bölüm (2–6. dakika, 10 °C) erime, ikinci bölüm (9–15. dakika, 60 °C) kaynamadır; 2–6. dakikalarda katı ve sıvı bir aradadır, 6–9. dakikalarda yalnızca sıvı ısınır. Ortalama kinetik enerji sıcaklığa bağlıdır; 9–15. dakikalarda sıcaklık sabit olduğundan ortalama kinetik enerji değişmez, verilen ısı moleküller arası çekimleri yenmek için harcanır (potansiyel enerji artar). Bu yüzden yanlış olan ifade kinetik enerjinin arttığını söyleyendir.",
        "en": "On the graph the first plateau (2–6 min, 10 °C) is melting and the second (9–15 min, 60 °C) is boiling; from 2 to 6 min solid and liquid coexist, and from 6 to 9 min only liquid is warming. Average kinetic energy depends on temperature; from 9 to 15 min the temperature is constant, so average kinetic energy does not change — the heat goes into overcoming intermolecular attractions (potential energy rises). The incorrect statement is therefore the one saying kinetic energy increases.",
        "de": "Im Diagramm ist der erste Haltepunkt (2–6 min, 10 °C) das Schmelzen, der zweite (9–15 min, 60 °C) das Sieden; von 2 bis 6 min liegen fest und flüssig nebeneinander vor, von 6 bis 9 min erwärmt sich nur Flüssigkeit. Die mittlere kinetische Energie hängt von der Temperatur ab; von 9 bis 15 min ist die Temperatur konstant, sie ändert sich also nicht – die Wärme dient zum Überwinden der Anziehungskräfte (potenzielle Energie steigt). Falsch ist daher die Aussage über steigende kinetische Energie.",
        "fr": "Sur le graphique, le premier palier (2–6 min, 10 °C) correspond à la fusion et le second (9–15 min, 60 °C) à l'ébullition ; de 2 à 6 min solide et liquide coexistent, de 6 à 9 min seul le liquide s'échauffe. L'énergie cinétique moyenne dépend de la température ; de 9 à 15 min la température est constante, elle ne varie donc pas : la chaleur sert à vaincre les attractions intermoléculaires (l'énergie potentielle augmente). L'affirmation fausse est celle qui parle d'une hausse de l'énergie cinétique.",
        "ru": "На графике первая площадка (2–6 мин, 10 °C) — плавление, вторая (9–15 мин, 60 °C) — кипение; с 2-й по 6-ю минуту твёрдая и жидкая фазы сосуществуют, с 6-й по 9-ю нагревается только жидкость. Средняя кинетическая энергия зависит от температуры; с 9-й по 15-ю минуту температура постоянна, значит, средняя кинетическая энергия не меняется — теплота идёт на преодоление межмолекулярного притяжения (растёт потенциальная энергия). Поэтому неверно утверждение о росте кинетической энергии.",
        "ar": "في الرسم يمثل الثبات الأول لدرجة الحرارة (الدقائق 2–6، 10 °C) الانصهار والثاني (الدقائق 9–15، 60 °C) الغليان؛ وبين الدقيقتين 2 و6 توجد الحالتان الصلبة والسائلة معًا، وبين 6 و9 يسخن السائل فقط. ويعتمد متوسط الطاقة الحركية على درجة الحرارة، وبين 9 و15 تكون الدرجة ثابتة فلا يتغير، بل تُستهلك الحرارة في التغلب على التجاذب بين الجزيئات (تزداد الطاقة الكامنة). لذا فالعبارة الخاطئة هي التي تقول إن الطاقة الحركية تزداد.",
        "zh": "图中第一个温度不变的阶段（2–6 min，10 °C）是熔化，第二个（9–15 min，60 °C）是沸腾；2–6 min 固液共存，6–9 min 只有液体在升温。平均动能取决于温度；9–15 min 温度不变，平均动能不变，吸收的热量用于克服分子间吸引（势能增大）。所以错误的是“平均动能增大”这一说法。",
        "ku": "Di grafîkê de beşa yekem a ku germahî sabît dimîne (deqeyên 2–6., 10 °C) helîn e, ya duyem (deqeyên 9–15., 60 °C) kelîn e; di deqeyên 2–6. de hişk û şile bi hev re ne, di deqeyên 6–9. de tenê şile germ dibe. Enerjiya kînetîk a navînî bi germahiyê ve girêdayî ye; di deqeyên 9–15. de germahî sabît e, loma enerjiya kînetîk a navînî naguhere — germa ku tê dayîn ji bo bi ser ketina li kişandinên navmolekulî tê xerckirin (enerjiya potansiyel zêde dibe). Ji ber vê yekê gotina şaş ew e ku dibêje enerjiya kînetîk zêde dibe."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman (dk)",
          "en": "Time (min)",
          "de": "Zeit (min)",
          "fr": "Temps (min)",
          "ru": "Время (мин)",
          "ar": "الزمن (دقيقة)",
          "zh": "时间 (min)",
          "ku": "Dem (deq)"
        },
        "yLabel": {
          "tr": "Sıcaklık (°C)",
          "en": "Temperature (°C)",
          "de": "Temperatur (°C)",
          "fr": "Température (°C)",
          "ru": "Температура (°C)",
          "ar": "درجة الحرارة (°C)",
          "zh": "温度 (°C)",
          "ku": "Germahî (°C)"
        },
        "xMin": 0,
        "xMax": 16,
        "yMin": -30,
        "yMax": 80,
        "xTicks": [
          2,
          6,
          9,
          15
        ],
        "yTicks": [
          -20,
          10,
          60
        ],
        "series": [
          {
            "points": [
              [
                0,
                -20
              ],
              [
                2,
                10
              ],
              [
                6,
                10
              ],
              [
                9,
                60
              ],
              [
                15,
                60
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "u04-twin07",
      "stem": {
        "tr": "Tabloda X, Y ve Z katılarının bazı özellikleri verilmiştir (+: iletir, −: iletmez).\nX, Y ve Z katıları sırasıyla aşağıdakilerden hangisi olabilir?",
        "en": "The table lists some properties of the solids X, Y and Z (+: conducts, −: does not conduct).\nWhich of the following could X, Y and Z be, respectively?",
        "de": "Die Tabelle gibt einige Eigenschaften der Feststoffe X, Y und Z an (+: leitet, −: leitet nicht).\nUm welche Stoffe kann es sich bei X, Y und Z der Reihe nach handeln?",
        "fr": "Le tableau indique quelques propriétés des solides X, Y et Z (+ : conduit, − : ne conduit pas).\nQue peuvent être, respectivement, X, Y et Z ?",
        "ru": "В таблице приведены некоторые свойства твёрдых веществ X, Y и Z (+: проводит, −: не проводит).\nЧем могут быть соответственно X, Y и Z?",
        "ar": "يبيّن الجدول بعض خواص المواد الصلبة X وY وZ (+: يوصل، −: لا يوصل).\nماذا يمكن أن تكون X وY وZ على الترتيب؟",
        "zh": "表中列出了固体 X、Y、Z 的一些性质（+：导电，−：不导电）。\nX、Y、Z 依次可能是下列哪一组？",
        "ku": "Di tabloyê de hin taybetmendiyên hişkên X, Y û Z hatine dayîn (+: diguhezîne, −: naguhezîne).\nX, Y û Z bi rêzê dikarin kîjan bin?"
      },
      "options": [
        {
          "tr": "NaCl, kuvars (SiO2), buz",
          "en": "NaCl, quartz (SiO2), ice",
          "de": "NaCl, Quarz (SiO2), Eis",
          "fr": "NaCl, quartz (SiO2), glace",
          "ru": "NaCl, кварц (SiO2), лёд",
          "ar": "NaCl، الكوارتز (SiO2)، الجليد",
          "zh": "NaCl、石英(SiO2)、冰",
          "ku": "NaCl, kuvars (SiO2), qeşa"
        },
        {
          "tr": "Buz, NaCl, kuvars (SiO2)",
          "en": "Ice, NaCl, quartz (SiO2)",
          "de": "Eis, NaCl, Quarz (SiO2)",
          "fr": "Glace, NaCl, quartz (SiO2)",
          "ru": "Лёд, NaCl, кварц (SiO2)",
          "ar": "الجليد، NaCl، الكوارتز (SiO2)",
          "zh": "冰、NaCl、石英(SiO2)",
          "ku": "Qeşa, NaCl, kuvars (SiO2)"
        },
        {
          "tr": "Kuvars (SiO2), NaCl, buz",
          "en": "Quartz (SiO2), NaCl, ice",
          "de": "Quarz (SiO2), NaCl, Eis",
          "fr": "Quartz (SiO2), NaCl, glace",
          "ru": "Кварц (SiO2), NaCl, лёд",
          "ar": "الكوارتز (SiO2)، NaCl، الجليد",
          "zh": "石英(SiO2)、NaCl、冰",
          "ku": "Kuvars (SiO2), NaCl, qeşa"
        },
        {
          "tr": "Kuvars (SiO2), buz, NaCl",
          "en": "Quartz (SiO2), ice, NaCl",
          "de": "Quarz (SiO2), Eis, NaCl",
          "fr": "Quartz (SiO2), glace, NaCl",
          "ru": "Кварц (SiO2), лёд, NaCl",
          "ar": "الكوارتز (SiO2)، الجليد، NaCl",
          "zh": "石英(SiO2)、冰、NaCl",
          "ku": "Kuvars (SiO2), qeşa, NaCl"
        },
        {
          "tr": "Demir, NaCl, buz",
          "en": "Iron, NaCl, ice",
          "de": "Eisen, NaCl, Eis",
          "fr": "Fer, NaCl, glace",
          "ru": "Железо, NaCl, лёд",
          "ar": "الحديد، NaCl، الجليد",
          "zh": "铁、NaCl、冰",
          "ku": "Hesin, NaCl, qeşa"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Tabloya göre X çok sert, erime noktası çok yüksek ve hiçbir hâlde iletken değildir: atomları kovalent bağlarla üç boyutlu ağ oluşturmuş bir katıdır, yani kuvars (SiO2). Y sert ama kırılgan, erime noktası yüksek; katıyken iletmeyip sıvıyken iletir: iyonları katıda sabit, eriyikte serbest olan iyonik katıdır, yani NaCl. Z yumuşak, erime noktası düşük ve yalıtkandır: molekülleri zayıf etkileşimlerle tutunan moleküler katıdır, yani buz. Demir katı hâlde de elektriği ilettiği için X olamaz.",
        "en": "From the table, X is very hard, has a very high melting point and conducts in neither state: a solid whose atoms form a three-dimensional covalent network, i.e. quartz (SiO2). Y is hard but brittle with a high melting point, and conducts only when molten: an ionic solid whose ions are fixed in the solid and free in the melt, i.e. NaCl. Z is soft, melts at a low temperature and is an insulator: a molecular solid held by weak interactions, i.e. ice. Iron conducts electricity even as a solid, so it cannot be X.",
        "de": "Laut Tabelle ist X sehr hart, hat einen sehr hohen Schmelzpunkt und leitet in keinem Zustand: ein Feststoff, dessen Atome ein dreidimensionales kovalentes Netz bilden, also Quarz (SiO2). Y ist hart, aber spröde, schmilzt hoch und leitet nur als Schmelze: ein Ionenkristall, dessen Ionen im Feststoff fixiert und in der Schmelze frei sind, also NaCl. Z ist weich, schmilzt niedrig und isoliert: ein Molekülkristall mit schwachen Wechselwirkungen, also Eis. Eisen leitet schon im festen Zustand und kann daher nicht X sein.",
        "fr": "D'après le tableau, X est très dur, a une température de fusion très élevée et ne conduit dans aucun état : solide dont les atomes forment un réseau covalent tridimensionnel, donc le quartz (SiO2). Y est dur mais cassant, fond à haute température et ne conduit qu'à l'état fondu : solide ionique dont les ions sont fixes dans le solide et libres dans le liquide, donc NaCl. Z est mou, fond à basse température et est isolant : solide moléculaire maintenu par de faibles interactions, donc la glace. Le fer conduit déjà à l'état solide, il ne peut donc pas être X.",
        "ru": "По таблице X очень твёрдый, плавится при очень высокой температуре и не проводит ток ни в каком состоянии: это вещество с трёхмерной ковалентной сеткой атомов, то есть кварц (SiO2). Y твёрдый, но хрупкий, тугоплавкий и проводит только в расплаве: ионный кристалл, ионы которого закреплены в твёрдом веществе и свободны в расплаве, то есть NaCl. Z мягкий, легкоплавкий и не проводит ток: молекулярный кристалл со слабыми взаимодействиями, то есть лёд. Железо проводит ток и в твёрдом виде, поэтому не может быть X.",
        "ar": "من الجدول: X شديد الصلابة ودرجة انصهاره عالية جدًا ولا يوصل في أيّ حالة: مادة صلبة تكوّن ذراتها شبكة تساهمية ثلاثية الأبعاد، أي الكوارتز (SiO2). وY صلب لكنه هش ودرجة انصهاره عالية، لا يوصل صلبًا ويوصل مصهورًا: مادة صلبة أيونية أيوناتها ثابتة في الصلب وحرة في المصهور، أي NaCl. وZ لين ودرجة انصهاره منخفضة وعازل: مادة صلبة جزيئية تتماسك بتآثرات ضعيفة، أي الجليد. الحديد يوصل الكهرباء وهو صلب، فلا يمكن أن يكون X.",
        "zh": "由表可知，X 很硬、熔点很高、在任何状态下都不导电：原子以共价键形成三维网状结构的固体，即石英（SiO2）。Y 硬而脆、熔点高、固态不导电而熔融态导电：离子在固体中固定、在熔体中自由移动的离子晶体，即 NaCl。Z 软、熔点低、不导电：靠较弱作用力结合的分子晶体，即冰。铁在固态时也导电，所以不可能是 X。",
        "ku": "Li gorî tabloyê X gelek hişk e, xala wê ya helînê gelek bilind e û di tu rewşê de naguhezîne: hişkeke ku atomên wê bi girêdanên kovalent tora sêrehendî çêkirine, ango kuvars (SiO2). Y hişk lê şikestbar e, xala helînê bilind e; di rewşa hişk de naguhezîne, di rewşa şile de diguhezîne: hişkeke îyonîk e ku îyonên wê di hişkê de sabît û di helandinê de azad in, ango NaCl. Z nerm e, xala helînê nizm e û îzolator e: hişkeke molekulî ye ku bi têkiliyên lawaz bi hev ve girêdayî ye, ango qeşa. Hesin di rewşa hişk de jî elektrîkê diguhezîne, ji ber vê nikare X be."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Katı",
            "en": "Solid",
            "de": "Feststoff",
            "fr": "Solide",
            "ru": "Вещество",
            "ar": "المادة",
            "zh": "固体",
            "ku": "Hişk"
          },
          {
            "tr": "Sertlik",
            "en": "Hardness",
            "de": "Härte",
            "fr": "Dureté",
            "ru": "Твёрдость",
            "ar": "الصلابة",
            "zh": "硬度",
            "ku": "Hişkî"
          },
          {
            "tr": "Erime noktası",
            "en": "Melting point",
            "de": "Schmelzpunkt",
            "fr": "T. de fusion",
            "ru": "Т. плавления",
            "ar": "درجة الانصهار",
            "zh": "熔点",
            "ku": "Xala helînê"
          },
          {
            "tr": "İletkenlik (katı / sıvı)",
            "en": "Conductivity (solid / liquid)",
            "de": "Leitfähigkeit (fest / flüssig)",
            "fr": "Conductivité (solide / liquide)",
            "ru": "Проводимость (тв. / ж.)",
            "ar": "التوصيل (صلب / سائل)",
            "zh": "导电性（固 / 液）",
            "ku": "Guhezbarî (hişk / şile)"
          }
        ],
        "rows": [
          [
            "X",
            {
              "tr": "Çok sert",
              "en": "Very hard",
              "de": "Sehr hart",
              "fr": "Très dur",
              "ru": "Очень твёрдый",
              "ar": "شديد الصلابة",
              "zh": "很硬",
              "ku": "Gelek hişk"
            },
            {
              "tr": "Çok yüksek",
              "en": "Very high",
              "de": "Sehr hoch",
              "fr": "Très élevée",
              "ru": "Очень высокая",
              "ar": "عالية جدًا",
              "zh": "很高",
              "ku": "Gelek bilind"
            },
            "− / −"
          ],
          [
            "Y",
            {
              "tr": "Sert, kırılgan",
              "en": "Hard, brittle",
              "de": "Hart, spröde",
              "fr": "Dur, cassant",
              "ru": "Твёрдый, хрупкий",
              "ar": "صلب، هش",
              "zh": "硬而脆",
              "ku": "Hişk, şikestbar"
            },
            {
              "tr": "Yüksek",
              "en": "High",
              "de": "Hoch",
              "fr": "Élevée",
              "ru": "Высокая",
              "ar": "عالية",
              "zh": "高",
              "ku": "Bilind"
            },
            "− / +"
          ],
          [
            "Z",
            {
              "tr": "Yumuşak",
              "en": "Soft",
              "de": "Weich",
              "fr": "Mou",
              "ru": "Мягкий",
              "ar": "لين",
              "zh": "软",
              "ku": "Nerm"
            },
            {
              "tr": "Düşük",
              "en": "Low",
              "de": "Niedrig",
              "fr": "Basse",
              "ru": "Низкая",
              "ar": "منخفضة",
              "zh": "低",
              "ku": "Nizm"
            },
            "− / −"
          ]
        ]
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
        "ku": "Dema cam tê germkirin, di germahiyeke diyar de nahele; di navbereke fireh a germahiyê de hêdî hêdî nerm dibe û diherike. Sedema vê kîjan e?"
      },
      "options": [
        {
          "tr": "Camın metalik bağlı bir katı olması",
          "en": "Glass is a metallically bonded solid",
          "de": "Glas ist ein metallisch gebundener Feststoff",
          "fr": "Le verre est un solide à liaison métallique",
          "ru": "Металлическая связь в стекле",
          "ar": "كون الزجاج مادة صلبة ذات روابط فلزية",
          "zh": "玻璃是以金属键结合的固体",
          "ku": "Cam madeyeke hişk a bi girêdana metalîk e"
        },
        {
          "tr": "Cam taneciklerinin düzenli bir örgü oluşturmadan gelişigüzel dizilmiş olması",
          "en": "The particles of glass are arranged randomly without forming an ordered lattice",
          "de": "Die Teilchen des Glases sind ungeordnet, ohne ein regelmäßiges Gitter zu bilden",
          "fr": "Les particules du verre sont disposées au hasard, sans former de réseau ordonné",
          "ru": "Хаотичное расположение частиц стекла без упорядоченной решётки",
          "ar": "ترتّب دقائق الزجاج عشوائياً دون تكوين شبكة منتظمة",
          "zh": "玻璃微粒杂乱排列，没有形成有序的晶格",
          "ku": "Perçeyên camê bêyî ku toreke rêkûpêk çêkin, bêserûber rêz bûne"
        },
        {
          "tr": "Cam taneciklerinin düzenli ve tekrarlanan bir kristal örgüde dizilmesi",
          "en": "The particles of glass are arranged in a regular, repeating crystal lattice",
          "de": "Die Teilchen des Glases bilden ein regelmäßiges, sich wiederholendes Kristallgitter",
          "fr": "Les particules du verre forment un réseau cristallin régulier et répétitif",
          "ru": "Расположение частиц стекла в правильной повторяющейся кристаллической решётке",
          "ar": "ترتّب دقائق الزجاج في شبكة بلورية منتظمة ومتكررة",
          "zh": "玻璃微粒排列成规则、重复的晶格",
          "ku": "Perçeyên camê di toreke krîstalî ya rêkûpêk û dubarebûyî de rêz bûne"
        },
        {
          "tr": "Camın moleküler kristal olması",
          "en": "Glass is a molecular crystal",
          "de": "Glas ist ein Molekülkristall",
          "fr": "Le verre est un cristal moléculaire",
          "ru": "Молекулярная кристаллическая структура стекла",
          "ar": "كون الزجاج بلورة جزيئية",
          "zh": "玻璃是分子晶体",
          "ku": "Cam krîstaleke molekulî ye"
        },
        {
          "tr": "Camın içindeki suyun ısıtılınca buharlaşması",
          "en": "The water inside the glass evaporates when heated",
          "de": "Das Wasser im Glas verdampft beim Erhitzen",
          "fr": "L'eau contenue dans le verre s'évapore quand on le chauffe",
          "ru": "Испарение воды, содержащейся в стекле, при нагревании",
          "ar": "تبخّر الماء الموجود داخل الزجاج عند التسخين",
          "zh": "玻璃中的水受热蒸发",
          "ku": "Ava di hundirê camê de dema tê germkirin buhar dibe"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kristal katılarda tanecikler düzenli bir örgüde dizildiği için tüm bağlar aynı sıcaklıkta yenilir ve keskin bir erime noktası gözlenir. Camda ise tanecikler gelişigüzel (amorf) dizildiğinden aralarındaki etkileşimlerin gücü yer yer farklıdır; bu etkileşimler farklı sıcaklıklarda yenildiği için cam bir sıcaklık aralığında yumuşar. Cam metalik veya moleküler kristal değildir; yumuşamanın nedeni su kaybı da değildir.",
        "en": "In crystalline solids the particles form an ordered lattice, so all the interactions are overcome at the same temperature and a sharp melting point is seen. In glass the particles are arranged randomly (amorphous), so the strength of the interactions varies from place to place; they are overcome at different temperatures and glass softens over a range. Glass is neither a metallic nor a molecular crystal, and the softening is not caused by loss of water.",
        "de": "In kristallinen Feststoffen bilden die Teilchen ein geordnetes Gitter, alle Wechselwirkungen werden bei derselben Temperatur überwunden – es gibt einen scharfen Schmelzpunkt. Im Glas sind die Teilchen ungeordnet (amorph), die Wechselwirkungen sind unterschiedlich stark und werden bei verschiedenen Temperaturen überwunden; Glas erweicht daher über einen Bereich. Glas ist weder Metall- noch Molekülkristall, und das Erweichen kommt nicht von Wasserverlust.",
        "fr": "Dans un solide cristallin, les particules forment un réseau ordonné : toutes les interactions cèdent à la même température et l'on observe un point de fusion net. Dans le verre, les particules sont disposées au hasard (amorphe), la force des interactions varie d'un endroit à l'autre ; elles cèdent à des températures différentes et le verre se ramollit sur un intervalle. Le verre n'est ni un cristal métallique ni un cristal moléculaire, et le ramollissement n'est pas dû à une perte d'eau.",
        "ru": "В кристаллических веществах частицы образуют упорядоченную решётку, и все взаимодействия преодолеваются при одной температуре — наблюдается чёткая температура плавления. В стекле частицы расположены хаотично (аморфно), сила взаимодействий между ними различается, и они преодолеваются при разных температурах, поэтому стекло размягчается в интервале температур. Стекло не является ни металлическим, ни молекулярным кристаллом, а размягчение не связано с потерей воды.",
        "ar": "في المواد الصلبة البلورية تترتب الدقائق في شبكة منتظمة، فيُتغلَّب على جميع التآثرات عند الدرجة نفسها وتظهر درجة انصهار حادة. أما في الزجاج فتترتب الدقائق عشوائياً (غير متبلور)، فتختلف قوة التآثرات من موضع لآخر ويُتغلَّب عليها عند درجات مختلفة، فيلين الزجاج على مدى من الدرجات. والزجاج ليس بلورة فلزية ولا جزيئية، وليونته لا تعود إلى فقد الماء.",
        "zh": "晶体中微粒排列成有序的晶格，所有相互作用在同一温度被克服，所以有固定熔点。玻璃中微粒杂乱排列（非晶态），各处相互作用强弱不同，在不同温度下被克服，因此玻璃在一个温度范围内软化。玻璃既不是金属晶体也不是分子晶体，软化也不是失水造成的。",
        "ku": "Di madeyên hişk ên krîstalî de perçe di toreke rêkûpêk de rêz dibin, loma hemû têkilî di heman germahiyê de tên şikandin û xala helînê ya tûj tê dîtin. Di camê de perçe bêserûber (amorf) rêz bûne, loma hêza têkiliyên di navbera wan de ji cihekî bo cihekî cuda ye; ev têkilî di germahiyên cuda de tên şikandin û cam di navbereke germahiyê de nerm dibe. Cam ne krîstala metalîk e, ne jî krîstala molekulî; sedema nermbûnê windabûna avê jî nîne."
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
        "ku": "Sedema ku xwarin di beroşa bi zext de ji beroşa asayî zûtir dipije kîjan e?"
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
          "ku": "Di beroşê de germa buharbûnê ya avê dadikeve sifirê."
        },
        {
          "tr": "Kapak ısı kaybını önlediği için su 100 °C'nin altında kaynar.",
          "en": "The lid prevents heat loss, so water boils below 100 °C.",
          "de": "Der Deckel verhindert Wärmeverluste, daher siedet Wasser unter 100 °C.",
          "fr": "Le couvercle empêche les pertes de chaleur, l'eau bout donc en dessous de 100 °C.",
          "ru": "Крышка предотвращает потери тепла, поэтому вода кипит ниже 100 °C.",
          "ar": "يمنع الغطاء فقد الحرارة فيغلي الماء تحت 100 °C.",
          "zh": "锅盖防止热量散失，所以水在 100 °C 以下沸腾。",
          "ku": "Ji ber ku qapax rê li windabûna germê digire, av di binê 100 °C de dikele."
        },
        {
          "tr": "Tencere içindeki basınç arttığından su 100 °C'nin üzerinde kaynar.",
          "en": "The pressure inside increases, so water boils above 100 °C.",
          "de": "Der Innendruck steigt, daher siedet Wasser über 100 °C.",
          "fr": "La pression intérieure augmente, l'eau bout donc au-dessus de 100 °C.",
          "ru": "Давление внутри повышается, поэтому вода кипит выше 100 °C.",
          "ar": "يرتفع الضغط داخل القدر فيغلي الماء فوق 100 °C.",
          "zh": "锅内压强增大，所以水在 100 °C 以上沸腾。",
          "ku": "Ji ber ku zexta hundirê beroşê zêde dibe, av di ser 100 °C de dikele."
        },
        {
          "tr": "Basınç arttıkça suyun viskozitesi artar ve ısıyı daha iyi iletir.",
          "en": "As pressure rises, water's viscosity increases and it conducts heat better.",
          "de": "Mit steigendem Druck nimmt die Viskosität des Wassers zu und es leitet Wärme besser.",
          "fr": "Quand la pression augmente, la viscosité de l'eau augmente et elle conduit mieux la chaleur.",
          "ru": "С ростом давления вязкость воды растёт, и она лучше проводит тепло.",
          "ar": "بازدياد الضغط تزداد لزوجة الماء فيوصل الحرارة توصيلاً أفضل.",
          "zh": "压强增大时水的黏度增大，导热更好。",
          "ku": "Her ku zext zêde dibe, vîskozîteya avê zêde dibe û germê baştir diguhezîne."
        },
        {
          "tr": "Buhar dışarı kaçamadığı için su hiç kaynamaz, yalnızca ısınır.",
          "en": "Since steam cannot escape, the water never boils and only heats up.",
          "de": "Da der Dampf nicht entweichen kann, siedet das Wasser nie, es wird nur warm.",
          "fr": "Comme la vapeur ne peut s'échapper, l'eau ne bout jamais et ne fait que chauffer.",
          "ru": "Так как пар не выходит, вода вообще не кипит, а только нагревается.",
          "ar": "لأن البخار لا يستطيع الخروج فإن الماء لا يغلي أبداً بل يسخن فقط.",
          "zh": "由于蒸汽无法逸出，水根本不沸腾，只是升温。",
          "ku": "Ji ber ku buhar nikare derkeve, av qet nakele, tenê germ dibe."
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
        "zh": "高压锅的锅盖把蒸汽封住，锅内压强高于 1 atm。水在蒸气压等于这个较高压强时才沸腾，所以沸点升到 100 °C 以上(约 120 °C)，食物在更高温度下熟得更快。压强增大不会使沸点降低；水照样沸腾，只是温度更高。",
        "ku": "Qapaxa beroşa bi zext buharê di hundir de digire, loma zexta hundir ji 1 atm bilindtir dibe. Ji ber ku av dema zexta wê ya buharê bi vê zexta bilindtir re wekhev dibe dikele, xala kelînê ji 100 °C bilindtir dibe (nêzîkî 120 °C) û xwarin di germahiyeke bilindtir de zûtir dipije. Zêdebûna zextê xala kelînê nizm nake; av dîsa dikele, lê di germahiyeke bilindtir de."
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
          "ku": "Qeşaya di sarincokê de"
        },
        {
          "tr": "Şimşek sırasında oluşan iyonlaşmış hava",
          "en": "The ionised air formed during lightning",
          "de": "Die bei einem Blitz entstehende ionisierte Luft",
          "fr": "L'air ionisé formé lors d'un éclair",
          "ru": "Ионизированный воздух, образующийся при молнии",
          "ar": "الهواء المتأين المتكوّن أثناء البرق",
          "zh": "闪电时形成的电离空气",
          "ku": "Hewaya îyonîzebûyî ya ku di dema birûskê de çêdibe"
        },
        {
          "tr": "Çaydanlıktan çıkan su buharı",
          "en": "Water vapour coming out of a kettle",
          "de": "Wasserdampf aus dem Wasserkessel",
          "fr": "La vapeur d'eau qui sort d'une bouilloire",
          "ru": "Водяной пар, выходящий из чайника",
          "ar": "بخار الماء الخارج من الإبريق",
          "zh": "从水壶里冒出的水蒸气",
          "ku": "Buhara avê ya ku ji çaydankê derdikeve"
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
          "ku": "Qeşaya hişk"
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
        "ku": "Plazma ew rewş e ku piştî perçeyên gazê bi enerjiyeke pir bilind îyonîze dibin, îyon, elektronên azad û perçeyên notr bi hev re hene. Di birûskê de enerjiya valabûna elektrîkê hewayê îyonîze dike û plazma çêdibe; Roj, stêrk û lampeyên floresan jî mînakên plazmayê ne. Buhara avê gazeke ji molekulên notr e; qeşa û qeşaya hişk madeyên hişk in, azota şile jî şile ye."
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
        "ku": "Di şevên sar ên zivistanê de buhara avê ya di hewayê de, bêyî ku bibe şile, rasterast li ser camên pencereyan dibe krîstalên qeşayê. Ev mînaka kîjan guherîna rewşê ye?"
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
          "ku": "Şilebûn"
        },
        {
          "tr": "Kırağılaşma",
          "en": "Deposition",
          "de": "Resublimation",
          "fr": "Condensation solide (déposition)",
          "ru": "Десублимация",
          "ar": "الترسّب (التحول من غاز إلى صلب)",
          "zh": "凝华",
          "ku": "Desublîmebûn"
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
        "ku": "Veguherîna rasterast a madeyeke gaz bo hişk bêyî ku bibe şile desublîmebûn tê gotin; qirav û gulên qeşayê yên li ser camê bi vî awayî çêdibin. Sublîmebûn berevajiyê vê ye, ji hişk bo gaz. Şilebûn ji gaz bo şile, cemidîn ji şile bo hişk, helîn jî ji hişk bo şile ye; ji ber ku di vê bûyerê de qonaxa şile çênabe, ev li vir nagunjin."
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
        "ku": "Derbarê taybetmendiyên giştî yên gazan de kîjan ji van gotinan şaş e?"
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
          "ku": "Valahiyên di navbera perçeyên wan de ji yên di şileyan de kêmtir in."
        },
        {
          "tr": "Bulundukları kabın tamamını doldururlar.",
          "en": "They fill the whole of their container.",
          "de": "Sie füllen ihren Behälter vollständig aus.",
          "fr": "Ils remplissent entièrement leur récipient.",
          "ru": "Они заполняют весь сосуд.",
          "ar": "تملأ الوعاء الذي توجد فيه كله.",
          "zh": "气体能充满整个容器。",
          "ku": "Tevahiya firaxa ku tê de ne tije dikin."
        },
        {
          "tr": "Kolayca sıkıştırılabilirler.",
          "en": "They can be compressed easily.",
          "de": "Sie lassen sich leicht zusammendrücken.",
          "fr": "Ils sont facilement compressibles.",
          "ru": "Они легко сжимаются.",
          "ar": "يمكن ضغطها بسهولة.",
          "zh": "气体容易被压缩。",
          "ku": "Bi hêsanî tên pêçandin."
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
          "ku": "Perçeyên wan li dîwarên firaxê dikevin û zextê çêdikin."
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
        "ku": "Dûrahiya di navbera perçeyên gazê de li gorî mezinahiya perçeyan pir mezin e; ev valahî ji yên di şileyan de gelek zêdetir in. Ji ber vê yekê gaz bi hêsanî tên pêçandin, tevahiya firaxê tije dikin û bi her rêjeyê bi hev re tevlihev dibin. Perçeyên ku bi lez dilivin li dîwarên firaxê dikevin û zextê çêdikin."
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
        "ku": "Ji bo ku cilên şil di demeke kurttir de ziwa bibin, divê kîjan ji van werin kirin?\nI. Cilan bi awayekî ku rûbera wan fireh be raxistin\nII. Cilan li cihekî bi ba daliqandin\nIII. Cilan di hewayeke ku şiliya nisbî bilind e de daliqandin"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
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
        "zh": "蒸发速率随表面积增大而增大，把衣服展开增大了与空气接触的水面(I 正确)。风把表面的水蒸气带走，减少重新凝结，加快蒸发(II 正确)。相对湿度高时空气接近饱和，净蒸发变慢，衣服干得慢(III 错误)。答案：I 和 II。",
        "ku": "Leza buharbûnê bi mezinbûna rûberê re zêde dibe; raxistina fireh a cilan rûbera avê ya ku bi hewayê re di têkiliyê de ye mezin dike (I rast e). Ba buhara avê ya li ser rûyê dûr dixe, şilebûna paşve kêm dike û buharbûnê bilez dike (II rast e). Dema şiliya nisbî bilind be, hewa nêzîkî têrbûnê ye; buharbûna net hêdî dibe û cil dereng ziwa dibin (III şaş e). Bersiv: I û II."
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
        "ku": "Sedema ku di zivistanê de gol ji rûyê xwe ve dest bi cemidînê dikin û qeşa li ser avê dimîne kîjan e?"
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
          "ku": "Molekulên qeşayê ji molekulên ava şile piçûktir in"
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
          "ru": "Лёд — кристалл с атомной (ковалентной) решёткой",
          "ar": "الجليد بلورة تساهمية شبكية",
          "zh": "冰是共价网状晶体",
          "ku": "Qeşa krîstaleke bi tora kovalent e"
        },
        {
          "tr": "Sıvı suda moleküller arasında hidrojen bağı bulunmaması",
          "en": "There are no hydrogen bonds between molecules in liquid water",
          "de": "In flüssigem Wasser gibt es keine Wasserstoffbrücken zwischen den Molekülen",
          "fr": "Il n'y a pas de liaisons hydrogène entre les molécules d'eau liquide",
          "ru": "В жидкой воде между молекулами нет водородных связей",
          "ar": "لا توجد روابط هيدروجينية بين جزيئات الماء السائل",
          "zh": "液态水分子之间没有氢键",
          "ku": "Di ava şile de di navbera molekulan de girêdana hîdrojenê tune ye"
        },
        {
          "tr": "Buzda hidrojen bağlarının molekülleri boşluklu düzenli bir yapıda tutması nedeniyle buzun özkütlesinin sıvı sudan küçük olması",
          "en": "In ice, hydrogen bonds hold the molecules in an open, ordered structure, so ice is less dense than liquid water",
          "de": "Im Eis halten Wasserstoffbrücken die Moleküle in einer offenen, geordneten Struktur, daher hat Eis eine geringere Dichte als flüssiges Wasser",
          "fr": "Dans la glace, les liaisons hydrogène maintiennent les molécules dans une structure ordonnée et lacunaire, d'où une masse volumique inférieure à celle de l'eau liquide",
          "ru": "Во льду водородные связи удерживают молекулы в упорядоченной ажурной структуре, поэтому плотность льда меньше плотности жидкой воды",
          "ar": "في الجليد تُبقي الروابط الهيدروجينية الجزيئات في بنية منتظمة ذات فراغات، فتكون كثافة الجليد أقل من كثافة الماء السائل",
          "zh": "冰中的氢键使分子排列成有空隙的有序结构，因此冰的密度比液态水小",
          "ku": "Di qeşayê de girêdanên hîdrojenê molekulan di avahiyeke rêkûpêk û bi valahî de digirin, loma çiriya qeşayê ji ya ava şile kêmtir e"
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
        "ku": "Dema av dicemide, her molekul bi cîranên xwe re girêdanên hîdrojenê çêdike û di avahiyeke rêkûpêk û bi valahî de cih digire; loma qebareya qeşayê ji ya ava şile ya bi heman girseyê mezintir e, çiriya wê kêmtir e û qeşa li ser avê dimîne. Ava rûyê ya ku sar dibe dicemide, li jor dimîne û ava jêrîn ji sermayê diparêze. Di cemidînê de girse tê parastin û mezinahiya molekulan naguhere; qeşa krîstaleke molekulî ye û di ava şile de jî girêdanên hîdrojenê hene."
      }
    },
    {
      "id": "u04-twin15",
      "stem": {
        "tr": "Kapalı bir kaba bir miktar su konup sabit sıcaklıkta bekletiliyor. Kapta sıvı su varken buharlaşma–yoğuşma dengesi kurulduğunda aşağıdakilerden hangisi doğrudur?",
        "en": "Some water is placed in a closed container and kept at constant temperature. Once evaporation–condensation equilibrium is reached with liquid still present, which statement is correct?",
        "de": "Etwas Wasser wird in einem geschlossenen Gefäß bei konstanter Temperatur stehen gelassen. Welche Aussage ist richtig, wenn sich bei noch vorhandener Flüssigkeit das Verdunstungs-Kondensations-Gleichgewicht eingestellt hat?",
        "fr": "On place un peu d'eau dans un récipient fermé à température constante. Une fois l'équilibre évaporation–condensation atteint, avec du liquide encore présent, quelle affirmation est correcte ?",
        "ru": "В закрытый сосуд налили немного воды и оставили при постоянной температуре. Какое утверждение верно после установления равновесия «испарение — конденсация», пока в сосуде есть жидкая вода?",
        "ar": "وُضعت كمية من الماء في وعاء مغلق وتُركت عند درجة حرارة ثابتة. عندما يتحقق اتزان التبخر–التكاثف مع بقاء سائل في الوعاء، أيّ العبارات الآتية صحيحة؟",
        "zh": "把少量水放入密闭容器中，在恒温下放置。当容器中仍有液态水且达到蒸发–凝结平衡时，下列说法正确的是哪一项？",
        "ku": "Hinek av di firaxeke girtî de tê danîn û di germahiya sabît de tê hiştin. Dema ku hîn ava şile di firaxê de heye û hevsengiya buharbûn–şilebûnê pêk tê, kîjan ji yên jêrîn rast e?"
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
          "ku": "Leza buharbûnê bi leza şilebûnê re wekhev dibe."
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
          "ku": "Leza şilebûnê ji leza buharbûnê mezintir dibe."
        },
        {
          "tr": "Kaptaki suyun tamamı zamanla buharlaşır.",
          "en": "All the water in the container eventually evaporates.",
          "de": "Das gesamte Wasser im Gefäß verdunstet mit der Zeit.",
          "fr": "Toute l'eau du récipient finit par s'évaporer.",
          "ru": "Со временем вся вода в сосуде испаряется.",
          "ar": "يتبخر كل الماء في الوعاء مع مرور الوقت.",
          "zh": "容器中的水最终会全部蒸发。",
          "ku": "Bi demê re hemû ava di firaxê de buhar dibe."
        },
        {
          "tr": "Buhar basıncı zamanla sürekli artmaya devam eder.",
          "en": "The vapour pressure keeps rising with time.",
          "de": "Der Dampfdruck steigt mit der Zeit immer weiter.",
          "fr": "La pression de vapeur continue d'augmenter avec le temps.",
          "ru": "Давление пара со временем продолжает расти.",
          "ar": "يستمر ضغط البخار في الارتفاع مع الزمن.",
          "zh": "蒸气压随时间不断增大。",
          "ku": "Zexta buharê bi demê re bê rawestan zêde dibe."
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
        "ku": "Di firaxeke girtî de pêşî buharbûn serdest e; her ku molekulên buharê zêde dibin, leza şilebûnê zêde dibe û di dawiyê de her du lez wekhev dibin. Ev hevsengiya dînamîk e: buharbûn û şilebûn naqedin, bi heman lezê didomin; loma mîqdarên şile û buharê û zexta buharê sabît dimînin. Ji ber ku firax girtî ye, hemû av buhar nabe."
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
        "zh": "下列物态变化中，哪一个是吸热过程？",
        "ku": "Kîjan ji van guherînên rewşê bi wergirtina germê (bi awayê endotermîk) pêk tê?"
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
          "ku": "Şilebûna buhara avê li ser rûyekî sar"
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
          "ku": "Hişkbûna mûma helandî"
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
        "ku": "Guherînên ku tê de kişandina di navbera perçeyan de tê şikandin, ango derbasbûna ji rewşa rêkûpêktir bo rewşa bêserûbertir (helîn, buharbûn, sublîmebûn), germê werdigirin. Ji ber vê yekê derbasbûna naftalînê ya rasterast ji hişk bo gaz (sublîmebûn) endotermîk e. Şilebûn, cemidîn, hişkbûn û veguherîna rasterast a gazê bo hişk (desublîmebûn) germê didin (ekzotermîk), ji ber ku perçe nêzîkî hev dibin û hêzên kişandinê çêdibin."
      }
    }
  ]
};

export default unit04;
