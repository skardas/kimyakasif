/**
 * Kimya YKS — Study Slide Decks Generator (24 Units × 9 Slides)
 * Generates modular study slide files:
 *  - src/data/studySlides/slides_u01_u06.ts
 *  - src/data/studySlides/slides_u07_u12.ts
 *  - src/data/studySlides/slides_u13_u18.ts
 *  - src/data/studySlides/slides_u19_u24.ts
 *  - src/data/studySlides/index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { refuseUnlessForced } from './auditedSourceGuard';

// GUARD: src/data/studySlides is hand-audited now; this generator only runs with --force-overwrite-audited.
// (Checked only when this file is the entry point, so buildMultilingualCurriculum can still import RAW_GUIDES.)
if (process.argv[1] && process.argv[1].endsWith('generateStudySlides.ts')) {
  refuseUnlessForced('generateStudySlides.ts', ['src/data/studySlides/*.ts']);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_DIR = path.resolve(__dirname, '../src/data/studySlides');

export interface SlideGuideRaw {
  unitId: string;
  bigPictureQuote: string;
  subtopics: Array<{
    badge: string;
    title: string;
    summary: string;
    keyPoints: [string, string, string];
    accentHex: string;
  }>;
  goldenFormulas: Array<{
    label: string;
    expression: string;
    examNote: string;
  }>;
  mnemonics: Array<{
    codeBadge: string;
    title: string;
    expansion: string;
    memoryTip: string;
  }>;
}

export const RAW_GUIDES: SlideGuideRaw[] = [
  // --- TYT Units 1-6 ---
  {
    unitId: 'u01',
    bigPictureQuote: 'Simyadan modern pozitif bilime uzanan kimya; maddenin yapısını, bileşimini ve uğradığı dönüşümleri laboratuvar güvenliği ve hassas ölçümlerle inceler.',
    subtopics: [
      {
        badge: 'Simyadan Kimyaya',
        title: 'Tarihsel Gelişim ve Kimya Disiplinleri',
        summary: 'Simyacılar teorik temele dayanmayan deneme-yanılma yoluyla çalışmış; Lavoisier kütle korunumu ile kimyayı pozitif bilim yapmıştır.',
        keyPoints: [
          'Cabir bin Hayyan imbiği geliştirmiş, zaç yağı ve kezzabı elde etmiştir.',
          'Robert Boyle elementi kendinden daha basit maddelere ayrılamayan saf madde olarak tanımlamıştır.',
          'Analitik, Biyokimya, Fizikokimya, Organik, Anorganik kimyanın başlıca disiplinleridir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Laboratuvar',
        title: 'Güvenlik Piktogramları ve Kuralları',
        summary: 'Kimyasal maddeler taşınırken ve deney yapılırken piktogram uyarılarına kesinlikle uyulmalıdır.',
        keyPoints: [
          'Ünlem işareti tahriş edici, kuru kafa toksik (zehirli) maddeyi belirtir.',
          'Alev yanıcı, O harfi içeren alev yakıcı (oksitleyici) maddeyi simgeler.',
          'Asit üzerine ASLA su dökülmez; su üzerine yavaşça asit eklenir.'
        ],
        accentHex: '#f43f5e'
      },
      {
        badge: 'Maddeler',
        title: 'Temel Cam Malzemeler ve Yaygın Bileşikler',
        summary: 'Deneylerde kullanılan cam aletlerin işlevi ve geleneksel bileşik adları MEB müfredatında sıkça sorulur.',
        keyPoints: [
          'Büret titrasyonda hassas hacim damlatır; balon joje standart çözelti hazırlar.',
          'Zaç yağı H2SO4, Kezzap HNO3, Tuz ruhu HCl, Kireç taşı CaCO3 tür.',
          'Sudkostik NaOH, Potaskostik KOH, Sönmüş kireç Ca(OH)2 geleneksel adlarıdır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Kütlenin Korunumu (Lavoisier)', expression: 'mgirenler = mürünler', examNote: 'Kapalı sistemde gerçekleşen tüm kimyasal tepkimelerde toplam kütle kesinlikle değişmez.' },
      { label: 'Dört Element Kuramı (Aristo)', expression: 'Ateş (Sıcak-Kuru), Hava (Sıcak-Islak), Su (Soğuk-Islak), Toprak (Soğuk-Kuru)', examNote: 'Simya dönemine ait bu nitelik eşleştirmeleri ÖSYM nin geçmiş yıllarda sorduğu bir konudur.' },
      { label: 'Asit Seyreltme Kuralı', expression: 'Su Üzerine Asit Damlatılır (Ters Yapılmaz!)', examNote: 'Asit suya dökülürse ısı hızla dağılır; asit üzerine su dökülürse ani kaynama ve çevreye sıçrama olur.' }
    ],
    mnemonics: [
      { codeBadge: 'BAPOFEN', title: 'Kimya Disiplinleri', expansion: 'Biyokimya, Analitik, Polimer, Organik, Fizikokimya, Endüstriyel, Anorganik', memoryTip: 'Kimyanın 7 temel disiplinini bu akrostişle zihninize kazıyın.' },
      { codeBadge: 'YAKICI-O', title: 'Yakıcı vs Yanıcı Piktogramı', expansion: 'Oksitleyici piktogramının ortasında O harfi vardır (Oksijen = Yakıcı)', memoryTip: 'Alevin ortasında çember/O varsa yakıcı, sadece alev varsa yanıcı maddedir.' }
    ]
  },
  {
    unitId: 'u02',
    bigPictureQuote: 'Atomun çekirdeğinde saklı proton ve nötronlar ile katmanlardaki elektron dizilimi; elementlerin periyodik sistemdeki yerini ve kimyasal kaderini belirler.',
    subtopics: [
      {
        badge: 'Atom Modelleri',
        title: 'Dalton dan Bohr a Tarihsel Gelişim',
        summary: 'Dalton içi dolu küre, Thomson üzümlü kek, Rutherford çekirdekli atom, Bohr dairesel yörüngeleri önermiştir.',
        keyPoints: [
          'Rutherford altın levha saçılma deneyiyle atomun büyük kısmının boşluk olduğunu ispatlamıştır.',
          'Bohr modeli yalnızca tek elektronlu taneciklerin (H, He+, Li2+) spektrumunu açıklayabilmiştir.',
          'Modern atom teorisinde elektronlar yörüngelerde değil, bulunma olasılığı yüksek orbitallerde yer alır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Tanecikler',
        title: 'İzotop, İzoton, İzobar ve İzoelektronik',
        summary: 'Proton, nötron ve elektron sayılarının eşitlik veya farklılıkları kimyasal ve fiziksel özellikleri tayin eder.',
        keyPoints: [
          'İzotop atomların protonları aynı, nötronları farklıdır; nötr halde kimyasal özellikleri aynıdır.',
          'İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, protonları farklıdır.',
          'Katyon oluşurken çap küçülür, anyon oluşurken elektron başına çekim azaldığından çap büyür.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Periyot',
        title: 'Periyodik Özelliklerin Değişim Trendleri',
        summary: 'Aynı periyotta ve grupta atom yarıçapı, iyonlaşma enerjisi ve elektronegatiflik düzenli eğilim gösterir.',
        keyPoints: [
          'Soldan sağa çap küçülür, yukarıdan aşağıya katman sayısı arttığı için çap büyür.',
          'Flor periyodik sistemin en elektronegatif elementidir (4.0).',
          'Elektron ilgisi en yüksek element istisnai olarak Klor dur (Cl > F).'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Kütle Numarası Bağıntısı', expression: 'A = Z + N  |  İyon Yükü = Proton - Elektron', examNote: 'Sol alt köşe proton, sol üst kütle numarası, sağ alt elektron sayısıdır.' },
      { label: 'İyonlaşma Enerjisi Grup Sıçraması', expression: 'İE(n+1) / İE(n) ≥ 3.5 - 4 Kat Sıçrama', examNote: 'En büyük enerji sıçramasının gerçekleştiği basamak bize değerlik elektron sayısını ve baş grubu verir.' },
      { label: 'Aynı Periyotta İE Sıralaması', expression: '1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A', examNote: 'Küresel simetriden ötürü 2A nın İE si 3A dan, 5A nın İE si 6A dan daha büyüktür!' }
    ],
    mnemonics: [
      { codeBadge: '3 AŞAĞI 5 YUKARI', title: 'İyonlaşma Enerjisi Kuralı', expansion: '3A grubu aşağı iner, 5A grubu yukarı çıkar', memoryTip: '2A ve 5A nın küresel simetri kararlılığını bu tekerleme ile hatırlayın.' },
      { codeBadge: 'KARDAN ADAM', title: 'Atom Yarıçapı Trendi', expansion: 'Aşağı indikçe gövde büyür (çap artar), burnu sağa doğru küçülür (çap azalır)', memoryTip: 'Periyodik tabloda atom çapının değişim yönünü kardan adam modeliyle görselleştirin.' }
    ]
  },
  {
    unitId: 'u03',
    bigPictureQuote: 'Maddenin kimyasal ve fiziksel özellikleri, atomlar ve moleküller arasındaki elektrostatik çekim kuvvetlerinin türü ve gücüyle şekillenir.',
    subtopics: [
      {
        badge: 'Güçlü Bağlar',
        title: 'İyonik, Kovalent ve Metalik Etkileşimler',
        summary: 'Kimyasal türleri bir arada tutan 40 kJ/mol den büyük güçlü bağlar yeni maddelerin kimliğini oluşturur.',
        keyPoints: [
          'İyonik bağ metal-ametal arasında elektron transferiyle kristal örgü oluşturur.',
          'Kovalent bağ ametaller arasında elektron ortaklaşmasıyla polar veya apolar molekül yapar.',
          'Metalik bağ pozitif iyon kökleri ile hareketli elektron denizi arasındaki çekimdir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Zayıf Bağlar',
        title: 'van der Waals ve Hidrojen Bağları',
        summary: 'Moleküller arası fiziksel çekim kuvvetleri erime ve kaynama noktalarını doğrudan belirler.',
        keyPoints: [
          'Dipol-dipol polar moleküller arasında kalıcı kutuplarla gerçekleşir.',
          'London kuvvetleri anlık dipollerle tüm kimyasal türlerde bulunur; e- sayısı arttıkça güçlenir.',
          'Hidrojen bağı F, O, N atomlarına bağlı H atomunun komşu molekülle yaptığı en güçlü zayıf bağdır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Molekül Polarlığı',
        title: 'Lewis Yapıları ve Bağ Polarlığı',
        summary: 'Merkez atomda ortaklanmamış elektron çifti varsa molekül genellikle polar kutuplu olur.',
        keyPoints: [
          'Farklı iki ametal atomu arasındaki bağ daima polardır (H-Cl).',
          'Aynı iki ametal atomu arasındaki bağ apolardır (O=O, N≡N).',
          'CO2 ve CH4 te bağlar polar olmasına rağmen molekül geometrisi simetrik olduğundan apolardır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Bağ Enerjisi Kriteri', expression: 'ΔH > 40 kJ/mol (Kimyasal/Güçlü)  |  ΔH < 40 kJ/mol (Fiziksel/Zayıf)', examNote: 'Suyun buharlaşması 43.9 kJ olmasına rağmen istisnaen fiziksel bir olaydır.' },
      { label: 'İyonik Bağ Sağlamlığı', expression: 'Sağlamlık ∝ (q1 · q2) / r  |  İyonik Karakter ∝ ΔElektronegatiflik', examNote: 'İyon yükü arttıkça erime noktası artar; elektronegatiflik farkı arttıkça iyonik karakter artar.' },
      { label: 'London Dağılım Gücü', expression: 'London Çekimi ∝ Toplam Elektron Sayısı (Mol Kütlesi)', examNote: 'Apolar moleküllerde ve soy gazlarda elektron sayısı arttıkça kaynama noktası yükselir.' }
    ],
    mnemonics: [
      { codeBadge: 'F-O-N', title: 'Hidrojen Bağı Şifresi', expansion: 'Flor, Oksijen, Azot atomlarına bağlı H atomları', memoryTip: 'H atomu doğrudan F, O veya N ye bağlıysa moleküller arası hidrojen bağı vardır.' },
      { codeBadge: 'K-İ-M', title: 'Güçlü Etkileşimler', expansion: 'Kovalent, İyonik, Metalik bağlar', memoryTip: 'Güçlü kimyasal bağları KIM kelimesiyle zayıf etkileşimlerden ayırın.' }
    ]
  },
  {
    unitId: 'u04',
    bigPictureQuote: 'Maddenin katı, sıvı ve gaz halleri arasındaki geçişler; taneciklerin kinetik enerjisi ile çekim kuvvetleri arasındaki dinamik yarışın bir sonucudur.',
    subtopics: [
      {
        badge: 'Katılar',
        title: 'Amorf ve Kristal Katı Türleri',
        summary: 'Belirli erime noktası olmayan amorf katılar ile düzenli geometrik örgüye sahip kristal katılar.',
        keyPoints: [
          'Cam, plastik ve tereyağı amorf katıdır; camsı geçiş sıcaklığında yumuşarlar.',
          'Kristal katılar iyonik (NaCl), moleküler (buz, kuru buz), kovalent ağ (elmas, grafit) ve metaliktir.',
          'Elmas en sert doğal maddedir ve elektriği iletmez; grafit serbest pi elektronlarıyla iletir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Sıvılar',
        title: 'Viskozite, Buhar Basıncı ve Kaynama',
        summary: 'Sıvıların akmaya karşı gösterdiği direnç viskozite; sıvının buharının yaptığı basınç buhar basıncıdır.',
        keyPoints: [
          'Sıcaklık arttıkça sıvıların viskozitesi azalır (akıcılık artar).',
          'Buhar basıncı sıvının cinsine, saflığına ve sıcaklığına bağlıdır; yüzey alanına bağlı DEĞİLDİR!',
          'Kaynama buhar basıncının dış açık hava basıncına eşitlendiği anda sıvının her yerinde başlar.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Gaz & Plazma',
        title: 'Gazların Özellikleri ve Plazma Hali',
        summary: 'Gaz tanecikleri serbest öteleme yapar; plazma hali nötr atom, iyon ve serbest elektron çorbasıdır.',
        keyPoints: [
          'Gazlar bulundukları kabın hacmini ve şeklini tamamen alır.',
          'Plazma elektriği ve ısıyı çok iyi iletir, manyetik alandan etkilenir.',
          'Güneş, şimşek, kutup ışıkları (aurora) ve neon lambaları plazma haline örnektir.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Kaynama Şartı', expression: 'Pbuhar = Pdış (Açık Hava Basıncı)', examNote: 'Aynı ortamda kaynayan tüm sıvıların buhar basınçları birbirine eşittir!' },
      { label: 'Viskozite Sıcaklık İlişkisi', expression: 'Viskozite (η) ∝ 1 / Sıcaklık', examNote: 'Isıtılan bal veya ziftin akıcılığı artar, viskozitesi düşer.' },
      { label: 'Bağıl Nem Bağıntısı', expression: 'Bağıl Nem = (Kısmi Su Buharı Basıncı / Doygun Buhar Basıncı) × 100', examNote: 'Hissedilen sıcaklık bağıl nem arttıkça yazın daha bunaltıcı hissedilir.' }
    ],
    mnemonics: [
      { codeBadge: '3S KURALI', title: 'Buhar Basıncını Değiştirenler', expansion: 'Sıcaklık, Sıvının Cinsi, Saflık (Çözünen Madde)', memoryTip: 'Buhar basıncı yüzey alanına, sıvı miktarına veya kabın şekline ASLA bağlı değildir.' },
      { codeBadge: 'D-A-S', title: 'Kaynama Noktasına Etki Edenler', expansion: 'Dış Basınç, Akışkanın Cinsi, Saflık', memoryTip: 'Kaynama noktasını değiştiren 3 faktörü DAS kelimesiyle hatırlayın.' }
    ]
  },
  {
    unitId: 'u05',
    bigPictureQuote: 'Doğal su döngüsü, çevre kimyası ve yeşil dönüşüm ilkeleri; yerkürenin ekolojik dengesini ve temiz su kaynaklarını korumanın anahtarıdır.',
    subtopics: [
      {
        badge: 'Su Kimyası',
        title: 'Su Tasarrufu ve Su Sertliği',
        summary: 'İçinde Ca2+ ve Mg2+ iyonları fazla olan sular sert sudur; sabun köpürmesini engeller.',
        keyPoints: [
          'Geçici sertlik bikarbonat (HCO3-) iyonlarından kaynaklanır ve kaynatılarak giderilebilir.',
          'Kalıcı sertlik klorür ve sülfat tuzlarından kaynaklanır; iyon değiştirici reçinelerle arıtılır.',
          'Sert sular borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Hava Kirliliği',
        title: 'Sera Gazları ve Asit Yağmurları',
        summary: 'Fosil yakıtların kontrolsüz yanması sera etkisine ve asit yağmurlarına sebep olur.',
        keyPoints: [
          'CO2, CH4 ve su buharı yeryüzünden yansıyan kızılötesi ışınları tutarak küresel ısınmaya yol açar.',
          'SO2, SO3 ve NO2 gazları atmosferde nemle birleşerek sülfürik ve nitrik asit yağmuru yapar.',
          'Asit yağmurları göllerdeki pH ı düşürür, ormanları tahrip eder ve mermer heykelleri aşındırır.'
        ],
        accentHex: '#f43f5e'
      },
      {
        badge: 'Çevre Koruma',
        title: 'Ağır Metaller ve Plastik Kirliliği',
        summary: 'Kurşun, cıva, kadmiyum gibi ağır metaller ve tek kullanımlık plastikler besin zincirinde birikir.',
        keyPoints: [
          'Ağır metaller böbrek ve sinir sisteminde geri dönüşsüz biyolojik birikim yapar.',
          'Plastikler doğada yüzyıllarca çözünmeyerek mikroplastik tehlikesi oluşturur.',
          'Atık yağlar lavaboya dökülmemelidir; 1 litre atık yağ 1 milyon litre temiz suyu kirletir.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Geçici Sertlik Giderilme Reaksiyonu', expression: 'Ca(HCO3)2(suda) + Isı → CaCO3(k)↓ + CO2(g) + H2O(s)', examNote: 'Çaydanlık tabanında biriken kireç kalsiyum karbonat çökeltisidir.' },
      { label: 'Asit Yağmuru Oluşumu', expression: 'SO3(g) + H2O(s) → H2SO4(suda)  |  2NO2(g) + H2O(s) → HNO3 + HNO2', examNote: 'Ametal oksitlerin oksijence zengin halleri (asit anhidritleri) asit yağmuru üretir.' },
      { label: 'Sertlik Birimi (Fransız Derecesi)', expression: '1 °FS = 10 mg/L CaCO3 eşdeğeri', examNote: 'Sert sularda sabun çökelme yaptığından temizleme verimi düşer, deterjan ise köpürür.' }
    ],
    mnemonics: [
      { codeBadge: 'S-O-N', title: 'Asit Yağmuru Gazları', expansion: 'Kükürt dioksit (SO2), Azot dioksit (NO2), Karbon dioksit (CO2)', memoryTip: 'Ametal oksitlerin havadaki asit yağmuru oluşturucuları.' },
      { codeBadge: 'K-M İYONLARI', title: 'Sert Su Yapıcılar', expansion: 'Kalsiyum (Ca2+) ve Magnezyum (Mg2+)', memoryTip: 'Sertliği oluşturan iki temel iki değerlikli katyon.' }
    ]
  },
  {
    unitId: 'u06',
    bigPictureQuote: 'Kimyanın temel kanunları ve mol kavramı; mikro alemdeki atom ve molekülleri makro dünyadaki tartılabilir gramlara bağlayan evrensel köprüdür.',
    subtopics: [
      {
        badge: 'Kanunlar',
        title: 'Kütle Korunumu, Sabit ve Katlı Oranlar',
        summary: 'Lavoisier, Proust ve Dalton un deneysel yasaları atom teorisinin temelini atmıştır.',
        keyPoints: [
          'Kütlenin Korunumu (Lavoisier): Tepkimede yoktan madde var edilemez, var olan yok edilemez.',
          'Sabit Oranlar (Proust): Bir bileşiği oluşturan elementlerin kütleleri oranı daima sabittir.',
          'Katlı Oranlar (Dalton): İki element birden fazla bileşik yapıyorsa, birinin sabit miktarına karşı diğerinin oranları tamsayıdır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Mol Tanımı',
        title: 'Avogadro Sayısı ve Mol Dönüşümleri',
        summary: '1 mol tam olarak 6.02×10^23 tane tanecik demektir ve kimyanın paketleme birimidir.',
        keyPoints: [
          'Avogadro sayısı NA = 6.02 × 10^23 tanedir.',
          '1 mol gaz normal koşullarda (0°C, 1 atm) 22.4 litre hacim kaplar.',
          'Oda koşullarında (25°C, 1 atm) 1 mol gaz 24.5 litre hacim kaplar.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Kütle Birimleri',
        title: 'Atomik Kütle Birimi (akb) ve Bağıl Kütle',
        summary: 'Tek bir atomun kütlesini ifade etmek için kullanılan mikroskobik birim akb dir.',
        keyPoints: [
          '1 tane C-12 atomunun kütlesinin 1/12 sine 1 akb denir.',
          '1 gram = NA akb dir; yani 1 akb = 1 / NA gramdır.',
          '1 tane H2O molekülü 18 akb iken, 1 mol H2O molekülü 18 gramdır!'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Mol Temel Dönüşüm Üçgeni', expression: 'n = m / MA = N / NA = V / 22.4 (NK de Gazlar İçin)', examNote: 'Mol hesaplamalarında bu 3 lü eşitlik tüm soru tiplerinin ortak anahtarıdır.' },
      { label: 'Katlı Oranlar Şartı', expression: 'Aynı 2 element + Basit formülleri farklı + İkiden fazla tür içermez', examNote: 'Fe2O3 ile Fe3O4 te katlı oran vardır; ancak CO2 ile SO2 de veya H2SO4 te katlı oran aranmaz!' },
      { label: 'akb - Gram Dönüşümü', expression: '1 akb = 1 / (6.02 × 10^23) gram  |  1 gram = NA akb', examNote: 'ÖSYM tane ile mol arasındaki akb/gram tuzağını sıkça sorar: 1 tane atom asla gram olamaz!' }
    ],
    mnemonics: [
      { codeBadge: 'L-P-D', title: 'Kanun Kurucuları', expansion: 'Lavoisier (Kütle), Proust (Sabit), Dalton (Katlı)', memoryTip: 'Üç temel kanun ve mucitlerini kronolojik sırayla kodlayın.' },
      { codeBadge: 'TANE AKB - MOL GRAM', title: 'Kütle Ölçeği Kuralı', expansion: 'Tek bir tane için AKB, koca bir mol için GRAM kullanılır', memoryTip: '1 tane H2O = 18 akb; 1 mol H2O = 18 gram ayrımını asla unutmayın.' }
    ]
  },

  // --- TYT/AYT Units 7-12 ---
  {
    unitId: 'u07',
    bigPictureQuote: 'Kimyasal tepkimeler ve stokiyometri; denkleştirilmiş atom bilançosu üzerinden girenlerin tükenişini, ürün verimini ve sınırlayıcı reaktifi matematiksel kesinlikle hesaplar.',
    subtopics: [
      {
        badge: 'Tepkime Türleri',
        title: 'Yanma, Sentez, Analiz ve Asit-Baz',
        summary: 'Maddelerin kimyasal bağlarının kırılarak yeni maddeler oluşturduğu reaksiyon sınıfları.',
        keyPoints: [
          'Yanma O2 ile gerçekleşir; N2 gazının yanması hariç tüm yanmalar ekzotermiktir.',
          'Sentez (oluşum) küçük maddelerden büyük molekül, analiz ise ayrışma tepkimesidir.',
          'Asit-baz tepkimesinde su oluşuyorsa nötralleşme tepkimesi adını alır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Stokiyometri',
        title: 'Katsayı-Mol İlişkisi ve Sınırlayıcı Bileşen',
        summary: 'Denklem katsayıları maddelerin mol oranlarını belirler; ilk tükenen madde sınırlayıcıdır.',
        keyPoints: [
          'Tepkimeye giren maddelerin mol/katsayı oranı en küçük olanı sınırlayıcı bileşendir.',
          'Oluşacak ürün miktarı ve tepkimenin durma anı sınırlayıcı bileşene göre hesaplanır.',
          'Artan madde sınırlayıcı bileşen tükendikten sonra kapta reaksiyona girmeden kalır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Verim & Saflık',
        title: 'Yüzde Verim ve Net İyon Denklemi',
        summary: 'Gerçekte elde edilen ürün miktarının teorik hesaba oranı verim yüzdesini verir.',
        keyPoints: [
          '% Verim = (Gerçek Verim / Teorik Verim) × 100 bağıntısıyla bulunur.',
          'Çözünme-çökelme tepkimesinde net iyon denklemi çöken katıya göre yazılır.',
          'Çözeltide kalan iyonlara seyirci iyonlar denir.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Sınırlayıcı Bileşen Kuralı', expression: 'En küçük (n_başlangıç / Katsayı) oranına sahip reaktif sınırlayıcıdır!', examNote: 'Hesaplamalarda tüm ürün miktarları sınırlayıcı reaktif üzerinden bulunur.' },
      { label: 'Yüzde Verim Formülü', expression: '% Verim = (Gerçekleşen Ürün / Teorik Beklenen) × 100', examNote: 'Teorik verim %100 tam verimli reaksiyonda sınırlayıcıya göre oluşan maksimum üründür.' },
      { label: 'Organik Yanma Denklemi', expression: 'CxHyOz + (x + y/4 - z/2) O2 → x CO2 + (y/2) H2O', examNote: 'Hidrokarbon yandığında karbon sayısı kadar CO2, hidrojen sayısının yarısı kadar H2O oluşur.' }
    ],
    mnemonics: [
      { codeBadge: 'AZA GÖRE HESAP', title: 'Sınırlayıcı Reaktif', expansion: 'n/Katsayısı en az olan biter, hesap ona göre yapılır', memoryTip: 'Pasta yaparken un çok olsa da yumurta biterse pasta yapımı durur!' },
      { codeBadge: 'ÇÖKEN NETTİR', title: 'Net İyon Denklemi', expansion: 'Dibe çöken katı net iyon denklemini oluşturur, kalanlar seyircidir', memoryTip: 'Ag+(aq) + Cl-(aq) → AgCl(k) çöken kristal başroldedir.' }
    ]
  },
  {
    unitId: 'u08',
    bigPictureQuote: 'Karışımlar ve ayırma teknikleri; saf olmayan maddeleri fiziksel özellik farklarından (boyut, yoğunluk, çözünürlük, kaynama noktası) yararlanarak bileşenlerine ayırır.',
    subtopics: [
      {
        badge: 'Sınıflandırma',
        title: 'Homojen ve Heterojen Karışımlar',
        summary: 'Her yerinde aynı özelliği gösteren çözeltiler ile çok fazlı heterojen sistemler.',
        keyPoints: [
          'Gaz-gaz karışımları istisnasız daima homojendir (çözeltidir).',
          'Süspansiyon (katı-sıvı), emülsiyon (sıvı-sıvı), aerosol (gaz-katı/sıvı), kolloit heterojendir.',
          'Kolloitlerde ışık demeti Tyndall etkisi ile saçılır; çözeltide saçılmaz.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Derişim',
        title: 'Kütlece Yüzde, Hacimce Yüzde ve ppm',
        summary: 'Çözeltide çözünen madde miktarının toplam çözelti miktarına oranı.',
        keyPoints: [
          'Kütlece % = (mçözünen / mçözelti) × 100 dür (Paydada çözelti kütlesi vardır!).',
          'ppm (milyonda bir kısım) = (mçözünen / mçözelti) × 10^6 veya 1 mg / 1 kg dır.',
          'Çözeltiler karıştırıldığında C1m1 + C2m2 = Csmort bağıntısı kullanılır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Ayırma',
        title: 'Fiziksel Ayırma Yöntemleri',
        summary: 'Tanecik boyutu, yoğunluk, çözünürlük ve kaynama noktası farkına dayalı teknikler.',
        keyPoints: [
          'Ayırma hunisi yoğunlukları farklı birbiriyle karışmayan sıvılar (zeytinyağı-su) içindir.',
          'Ayrımsal damıtma kaynama noktaları yakın sıvı-sıvı çözeltiler (alkol-su) içindir.',
          'Ayrımsal kristallendirme sıcaklıkla çözünürlük değişimleri farklı katı-katı karışımları ayırır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Kütlece Yüzde Derişim', expression: '%C = (m_çözünen / m_çözelti) × 100  (m_çözelti = m_çözücü + m_çözünen)', examNote: 'Paydaya sadece suyun kütlesini yazmak en yaygın işlem hatasıdır!' },
      { label: 'ppm (Parts Per Million)', expression: 'ppm = (mg çözünen) / (kg çözelti veya L su)', examNote: 'Eser miktardaki su kirlilikleri ve mineral değerleri ppm ile belirtilir.' },
      { label: 'Çözelti Karıştırma Formülü', expression: '%1 · m1 + %2 · m2 = %son · (m1 + m2)', examNote: 'Su buharlaştırılırsa %si 0 alınır veya doğrudan kütle çıkarılır.' }
    ],
    mnemonics: [
      { codeBadge: 'B-Y-Ç-K', title: 'Ayırma Teknikleri Matrisi', expansion: 'Boyut, Yoğunluk, Çözünürlük, Kaynama noktası', memoryTip: 'Dört temel fiziksel ayırma prensibini bu sırayla eşleştirin.' },
      { codeBadge: 'BENZER BENZERİ', title: 'Çözünme Kuralı', expansion: 'Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür', memoryTip: 'Su (polar) alkolü çözer ama benzini (apolar) çözemez.' }
    ]
  },
  {
    unitId: 'u09',
    bigPictureQuote: 'Asitler, bazlar ve tuzlar; sulu çözeltilerde hidrojen ve hidroksit iyonlarının dengesiyle metalleri aşındıran, indikatör renklerini değiştiren ve yaşamı sürdüren kimyasal türlerdir.',
    subtopics: [
      {
        badge: 'Asit ve Baz',
        title: 'Genel Özellikler ve İndikatörler',
        summary: 'Tatları ekşi olan asitler ile kayganlık hissi veren bazların pH ölçeğindeki yeri.',
        keyPoints: [
          '25°C de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.',
          'Turnusol kağıdını asitler kırmızıya, bazlar maviye çevirir.',
          'Asit çözeltisinde [H+] > [OH-], baz çözeltisinde [OH-] > [H+] dir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Metaller',
        title: 'Asitlerin Metallerle Tepkimeleri',
        summary: 'Metalin aktiflik derecesine göre açığa çıkan gazın türü (H2 vs NO/NO2/SO2) değişir.',
        keyPoints: [
          'Aktif metaller (Na, K, Mg, Fe) asitlerle tepkimeye girerek H2 gazı açığa çıkarır.',
          'Yarı soy metaller (Cu, Ag, Hg) sadece HNO3 ve H2SO4 ile tepkime verir; ASLA H2 ÇIKARMAZ!',
          'Tam soy metaller (Au, Pt) sadece kral suyuyla tepkime verir.'
        ],
        accentHex: '#f43f5e'
      },
      {
        badge: 'Amfoterler & Tuz',
        title: 'Amfoter Metaller ve Yaygın Tuzlar',
        summary: 'Hem asitle hem kuvvetli bazla tepkime veren metaller ve hayatımızdaki tuzlar.',
        keyPoints: [
          'Amfoter metaller (Zn, Al, Cr, Pb, Sn, Be) hem asitlerle hem KUVVETLİ bazlarla H2 verir.',
          'Zayıf bazlar (NH3 gibi) amfoter metallerle tepkime vermez.',
          'NaCl, Na2CO3 (çamaşır sodası), NaHCO3 (yemek sodası), CaCO3 ve NH4Cl başlıca tuzlardır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Nötralleşme Şartı (25°C)', expression: 'nH+ = nOH-  ⇒  Ma · Va · za = Mb · Vb · zb  (pH = 7.0)', examNote: 'za ve zb asit ve bazın tesir (etki) değerlikleridir (H2SO4 için z=2).' },
      { label: 'Yarı Soy Metal Tepkimeleri', expression: 'Cu + Derişik HNO3 → NO2(g)  |  Cu + Seyreltik HNO3 → NO(g)  |  Cu + H2SO4 → SO2(g)', examNote: 'Yarı soy metaller asitlerle reaksiyonda KESİNLİKLE H2 gazı üretmez!' },
      { label: 'pH ve pOH Bağıntısı', expression: 'pH = -log[H+]  |  pH + pOH = 14 (25°C de)', examNote: 'Sıcaklık 25°C den farklıysa pH+pOH toplamı 14 ten farklı olur.' }
    ],
    mnemonics: [
      { codeBadge: 'Z-A-N-G-A-R', title: 'Amfoter Metaller', expansion: 'Zn (Çinko), Al (Alüminyum), Cr (Krom), Pb (Kurşun), Sn (Kalay), Be (Berilyum)', memoryTip: 'Hem asitle hem kuvvetli bazla H2 gazı çıkaran amfoter elementler.' },
      { codeBadge: 'CUMHUR AĞLAYANIN', title: 'Yarı Soy Metaller', expansion: 'Cu (Bakır), Ag (Gümüş), Hg (Cıva)', memoryTip: 'Yalnızca oksijenli kuvvetli asitlerle (HNO3, H2SO4) gaz çıkaran yarı soylar.' }
    ]
  },
  {
    unitId: 'u10',
    bigPictureQuote: 'Sabunlardan polimerlere, kozmetiklerden ilaçlara kadar modern hayatın her noktasında kimyanın moleküler mühendisliği devrededir.',
    subtopics: [
      {
        badge: 'Temizlik',
        title: 'Sabun ve Deterjanın Temizleme Mekanizması',
        summary: 'Hidrofil baş ve hidrofob kuyruktan oluşan misel yapısının kir molekülünü hapsetmesi.',
        keyPoints: [
          'Sabun bitkisel/hayvansal yağların NaOH (beyaz sert) veya KOH (Arap sabunu) ile hidrolizidir.',
          'Deterjan petrol türevidir, sert sularda bile çökelmeden köpürür ancak çevreye zararlıdır.',
          'Hidrofob apolar kuyruk apolar kire tutunur; hidrofil polar baş suya yönelir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Polimerler',
        title: 'Doğal ve Sentetik Polimerik Maddeler',
        summary: 'Binlerce monomerin kovalent bağlarla birleşerek oluşturduğu devasa zincir moleküller.',
        keyPoints: [
          'Polietilen (PE) poşet ve borularda, Polietilen tereftalat (PET) içecek şişelerinde kullanılır.',
          'Politetrafloroetilen (PTFE / Teflon) yapışmaz tava ve contalarda kullanılır.',
          'Kevlar kurşun geçirmez yelek ve zırh üretiminde kullanılan çok dayanıklı bir polimerdir.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'İlaç & Gıda',
        title: 'İlaç Formları ve Gıda Kimyası',
        summary: 'Katı, sıvı, yarı katı ilaç formları ile pastörizasyon ve UHT sterilizasyon yöntemleri.',
        keyPoints: [
          'Hap ve draje katı; şurup ve damla sıvı; merhem yarı katı ilaç formudur.',
          'Pastörizasyon (60-72°C) patojen bakterileri öldürür; UHT (135-150°C) tüm mikroorganizmaları yok eder.',
          'Sızma yağ en kaliteli mekanik sıkım yağdır; riviera rafine ile sızmanın karışımıdır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Sert Sabun ve Yumuşak Sabun Formülü', expression: 'C17H35COONa (Beyaz Sabun - Sodyum)  |  C17H35COOK (Arap Sabunu - Potasyum)', examNote: 'Sodyum tuzu sert katı sabun, potasyum tuzu jel/yumuşak Arap sabunu yapar.' },
      { label: 'Çamaşır Suyu Ağartma Reaksiyonu', expression: 'NaClO (Sodyum Hipoklorit) + Asit → Cl2(g) (Zehirli Klor Gazı!)', examNote: 'Çamaşır suyu ile tuz ruhu (HCl) ASLA karıştırılmamalıdır; ölümcül Cl2 gazı çıkar!' },
      { label: 'Misel Temizleme Geometrisi', expression: 'Apolar Kuyruk (Kire) + Polar Baş (Suya) → Misel Emülsiyonu', examNote: 'Kir yağ yapısında apolar olduğu için sabunun apolar kuyruğuyla sarılır.' }
    ],
    mnemonics: [
      { codeBadge: 'BAŞ SUYA KUYRUK KİRE', title: 'Misel Yönelimi', expansion: 'Hidrofil baş suya tutunur, hidrofob kuyruk kire gömülür', memoryTip: 'Sabun molekülünün temizleme yönünü gözünüzde canlandırın.' },
      { codeBadge: 'SERT SUDA SABUN ÇÖKER', title: 'Sabun vs Deterjan', expansion: 'Sabun Ca2+ ile çöker verimi düşer, deterjan sert suda da temizler', memoryTip: 'Deterjanın sert sularda üstünlüğünü ve petrol kökenini aklınızda tutun.' }
    ]
  },
  {
    unitId: 'u11',
    bigPictureQuote: 'Modern atom teorisi; klasik yörünge kavramını yıkarak elektronların üç boyutlu uzaydaki dalga mekaniğini ve kuantum olasılık orbitallerini ortaya koyar.',
    subtopics: [
      {
        badge: 'Kuantum',
        title: 'Dört Kuantum Sayısı ve Orbitaller',
        summary: 'Baş (n), açısal momentum (l), manyetik (ml) ve spin (ms) kuantum sayılarının kuralları.',
        keyPoints: [
          'Baş kuantum sayısı n = 1, 2, 3... katman enerji düzeyini belirtir.',
          'Açısal momentum kuantum sayısı l orbitalin türünü belirler (0:s, 1:p, 2:d, 3:f).',
          'Manyetik kuantum sayısı ml orbitalin uzaydaki yönelişidir (-l ile +l arası, 2l+1 tane).'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Elektron Dizilimi',
        title: 'Aufbau, Pauli ve Hund Kuralları',
        summary: 'Elektronların orbitallere en düşük enerjiden başlayarak yerleşme ilkeleri.',
        keyPoints: [
          'Aufbau ilkesi: Elektronlar önce enerjisi en düşük orbitale girer (n+l kuralı).',
          'Pauli ilkesi: Bir atomda dört kuantum sayısı da aynı olan iki elektron bulunamaz.',
          'Hund kuralı: Eş enerjili orbitallere elektronlar önce teker teker aynı spinle yerleşir.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'İstisnalar',
        title: 'Küresel Simetri ve İyon Elektron Dizilimi',
        summary: '24Cr ve 29Cu elementlerinin temel hal dizilimi ve iyondan kopan elektronun sırası.',
        keyPoints: [
          '24Cr: [Ar] 4s1 3d5 ve 29Cu: [Ar] 4s1 3d10 temel hal küresel simetrisidir; uyarılma DEĞİLDİR!',
          'Katyon oluşurken elektron önce en dıştaki (en büyük n sayılı, yani 4s) orbitalden kopar.',
          'Örneğin 26Fe: [Ar] 4s2 3d6 dır; Fe2+ iyonu [Ar] 3d6 olur (önce 4s kopar).'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Madelung-Kletchkowski (n+l) Kuralı', expression: 'Enerji ∝ (n + l)  |  Eşitse n si büyük olanın enerjisi daha yüksektir', examNote: '4s (4+0=4) orbitalinin enerjisi 3d (3+2=5) den düşük olduğu için önce 4s dolar.' },
      { label: 'Orbital Başına Maksimum Elektron', expression: 'Alt kabuktaki orbital sayısı = 2l + 1  |  Maksimum e- = 2(2l + 1)', examNote: 's de 1 orbital (2e-), p de 3 (6e-), d de 5 (10e-), f de 7 orbital (14e-) bulunur.' },
      { label: 'Küresel Simetri Şartı', expression: 'Son orbitalin yarı dolu (s1, p3, d5, f7) veya tam dolu (s2, p6, d10, f14) olması', examNote: 'Küresel simetri atoma ekstra termodinamik kararlılık kazandırır.' }
    ],
    mnemonics: [
      { codeBadge: 'SAY SAY PARA SAY', title: 'Orbital Enerji Sıralaması', expansion: '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s', memoryTip: 'Say Say Para Say Dede Para Say tekerlemesiyle orbital sırasını hatasız yazın.' },
      { codeBadge: 'ÖNCE 4s KOPAR', title: 'Geçiş Metali İyonu', expansion: 'Koparken en dış kabuktan (n=4 olan 4s ten) kopar', memoryTip: 'Önce 4s ten elektron koparılır, sonra gerekirse 3d ye geçilir.' }
    ]
  },
  {
    unitId: 'u12',
    bigPictureQuote: 'İdeal gaz yasaları; taneciklerin hacmi ve etkileşimleri ihmal edilen gazların basınç, hacim, sıcaklık ve mol değişkenleri arasındaki mükemmel matematiksel uyumunu betimler.',
    subtopics: [
      {
        badge: 'Gaz Yasaları',
        title: 'Boyle, Charles, Gay-Lussac ve Avogadro',
        summary: 'İki değişken sabit tutulduğunda diğer iki değişkenin doğrusal veya ters orantılı değişimi.',
        keyPoints: [
          'Boyle Yasası: Sabit n ve T de P ile V ters orantılıdır (P1V1 = P2V2).',
          'Charles Yasası: Sabit n ve P de V ile mutlak sıcaklık T doğru orantılıdır (V1/T1 = V2/T2).',
          'Gay-Lussac: Sabit n ve V de P ile mutlak sıcaklık T doğru orantılıdır (P1/T1 = P2/T2).'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'İdeal Gaz',
        title: 'İdeal Gaz Denklemi ve Gaz Yoğunluğu',
        summary: 'Dört temel gaz değişkenini R sabiti ile birbirine bağlayan evrensel denklem.',
        keyPoints: [
          'P·V = n·R·T denkleminde P atm, V litre, T Kelvin, n mol birimindedir.',
          'R ideal gaz sabiti = 0.082 L·atm/mol·K veya 22.4 / 273 tür.',
          'Yoğunluk bağlantısı P·MA = d·R·T ile hesaplanır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Birleşik Gaz',
        title: 'Birleşik Gaz Denklemi ve Karışımlar',
        summary: 'Birden fazla değişkenin aynı anda değiştiği durumlarda uygulanan genel bağıntı.',
        keyPoints: [
          '(P1·V1) / (n1·T1) = (P2·V2) / (n2·T2) tüm durumları kapsayan genel orandır.',
          'Hareketli pistonlu kaplarda iç basınç daima dış basınca eşittir.',
          'Sabit hacimli çelik kaplarda gaz eklendikçe veya ısıtıldıkça basınç artar.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'İdeal Gaz Denklemi', expression: 'P · V = n · R · T', examNote: 'Sıcaklık DAİMA Kelvin (K = °C + 273.15) alınmalıdır; Celsius kullanılırsa soru gider!' },
      { label: 'Gaz Yoğunluğu Formülü', expression: 'P · MA = d · R · T', examNote: 'Sabit basınçta sıcaklık arttıkça gaz genleşir, yoğunluğu d azalır.' },
      { label: 'Birleşik Gaz Eşitliği', expression: '(P1 · V1) / (n1 · T1) = (P2 · V2) / (n2 · T2)', examNote: 'Değişmeyen parametreleri denklemden silerek özel yasa formüllerine anında ulaşın.' }
    ],
    mnemonics: [
      { codeBadge: 'PARAN VARSA NE RAHAT', title: 'İdeal Gaz Bağıntısı', expansion: 'P · V = n · R · T', memoryTip: 'Kimyanın en ünlü kodlamasıyla formülü hiç unutmayın.' },
      { codeBadge: 'PİJAMA DAHA RAHAT', title: 'Gaz Yoğunluğu', expansion: 'P · MA = d · R · T', memoryTip: 'Yoğunluk ve mol kütlesi içeren gaz formülünün klasik kodlaması.' }
    ]
  },

  // --- AYT Units 13-18 ---
  {
    unitId: 'u13',
    bigPictureQuote: 'Kinetik teori ve gerçek gazlar; gaz taneciklerinin hız dağılımını, difüzyon yarışını ve van der Waals etkileşimleri ile Joule-Thomson soğutma çevrimini açıklar.',
    subtopics: [
      {
        badge: 'Kinetik Teori',
        title: 'Kinetik Teori İlkeleri ve Difüzyon',
        summary: 'Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; hafif gazlar daha hızlı koşar.',
        keyPoints: [
          'Aynı sıcaklıktaki tüm gazların ortalama kinetik enerjileri birbirine eşittir (Ek = 3/2 kT).',
          'Graham Difüzyon Yasası: Gazın hızı sıcaklığın kareköküyle doğru, MA nın kareköküyle ters orantılıdır.',
          'Örneğin CH4 (16) gazı SO2 (64) gazından 2 kat daha hızlı difüzlenir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Kısmi Basınç',
        title: 'Dalton Kısmi Basınçlar ve Su Üstünde Gaz',
        summary: 'Karışımdaki her gazın tek başına uyguladığı basınç mol kesriyle orantılıdır.',
        keyPoints: [
          'Pi = Xi · Ptoplam bağıntısında Xi = ni / ntoplam dır.',
          'Su üstünde toplanan gazlarda Ptoplam = Pgaz + Pbuhar(H2O) eşitliği geçerlidir.',
          'Suyun buhar basıncı hacme bağlı değildir; yalnızca sıcaklıkla değişir.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Gerçek Gazlar',
        title: 'İdeallikten Sapma ve Joule-Thomson',
        summary: 'Yüksek basınç ve düşük sıcaklıkta gazlar ideallikten sapar; genleşen gazlar soğur.',
        keyPoints: [
          'Yüksek sıcaklık, düşük basınç, küçük mol kütlesi ve zayıf çekim idealliğe yaklaştırır.',
          'Joule-Thomson olayı: Aniden genleşen gerçek gazın tanecikler arası çekimi kırmak için soğumasıdır.',
          'Soğutucu akışkanların kritik sıcaklığı yüksek, kaynama noktası düşük olmalıdır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Graham Difüzyon Bağıntısı', expression: 'v1 / v2 = √[ (T1 · M2) / (T2 · M1) ] = t2 / t1', examNote: 'Hız ile difüzyon süresi t ters orantılıdır: Hızlı gaz boruyu daha kısa sürede geçer!' },
      { label: 'Dalton Kısmi Basınç Formülü', expression: 'P1 = (n1 / ntoplam) · Ptoplam', examNote: 'Gazların kısmi basınçları toplamı toplam basınca eşittir.' },
      { label: 'Su Üstünde Toplanan Gaz Basıncı', expression: 'Ptoplam = Pgaz + P_H2O(buhar)', examNote: 'Hacim değiştiğinde suyun buhar basıncı değişmez; Pgaz ters orantılı değişir.' }
    ],
    mnemonics: [
      { codeBadge: 'Y-D-K-Z', title: 'İdealliğe Yaklaşma Koşulu', expansion: 'Yüksek sıcaklık, Düşük basınç, Küçük MA, Zayıf çekim', memoryTip: 'Gerçek gazların en ideal davrandığı koşulları bu akrostişle ezberleyin.' },
      { codeBadge: 'KÖK İÇİNDE TERS MA', title: 'Difüzyon Hızı Orantısı', expansion: 'Hız mol kütlesinin kareköküyle ters orantılıdır', memoryTip: 'Kütlesi 4 kat büyük olanın hızı yarıya iner (karekök 4 = 2).' }
    ]
  },
  {
    unitId: 'u14',
    bigPictureQuote: 'Sıvı çözeltilerde derişim birimleri; çözünen taneciklerin çözücü molekülleriyle kurduğu solvatasyon etkileşimlerini kantitatif olarak ölçülebilir kılar.',
    subtopics: [
      {
        badge: 'Çözünme',
        title: 'Çözünme Süreci ve Solvatasyon',
        summary: 'Tanecikler arası bağların kırılarak çözücü-çözünen yeni bağlarının kurulması süreci.',
        keyPoints: [
          'Çözücü su ise hidratasyon, başka bir sıvı çözücü ise solvatasyon adını alır.',
          'ΔHçözünme = ΔH1 (çözünen kırılma) + ΔH2 (çözücü açılma) + ΔH3 (yeni bağ oluşumu).',
          'Benzer benzeri çözer ilkesi: Polar maddeler polarda, apolarlar apolarda çözünür.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Derişim',
        title: 'Molarite, Molalite ve Mol Kesri',
        summary: 'Farklı hesaplama ihtiyaçlarına göre çözelti derişimini ifade etme yöntemleri.',
        keyPoints: [
          'Molarite M = n / V (Litre çözelti) dir; sıcaklıkla hacim genleştiği için değişebilir.',
          'Molalite m = n / kg (Çözücü kütlesi) dir; sıcaklıktan etkilenmez.',
          'Mol kesri XA = nA / ntoplam dır ve birimsizdir; toplamları 1 e eşittir.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'İşlemler',
        title: 'Çözelti Seyreltme, Deriştirme ve Karıştırma',
        summary: 'Su ekleme, su buharlaştırma ve farklı derişimdeki çözeltilerin harmanlanması.',
        keyPoints: [
          'Su eklendiğinde veya buharlaştırıldığında çözünen mol sayısı değişmez: M1V1 = M2V2.',
          'Karıştırmada M1V1 + M2V2 + ... = MsonVson uygulanır.',
          'Yoğunluk ve kütlece % verildiğinde M = (%C · d · 10) / MA formülü kullanılır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Denizde Yüzen On Manken Formülü', expression: 'M = ( %C · d · 10 ) / MA', examNote: 'Kütlece yüzde, yoğunluk (d) ve molarite arasındaki en pratik geçiş formülüdür.' },
      { label: 'Molarite ve Molalite Tanımları', expression: 'M = n_çözünen / V_çözelti(L)  |  m = n_çözünen / m_çözücü(kg)', examNote: 'Molalitede paydada çözelti değil, sadece çözücünün kilogramı yer alır!' },
      { label: 'Seyreltme ve Karıştırma', expression: 'M1 · V1 + M2 · V2 = Mson · Vtoplam', examNote: 'Hacimlerin toplamsal olduğu kabul edilir; su eklenirse Msu = 0 alınır.' }
    ],
    mnemonics: [
      { codeBadge: 'DENİZDE YÜZEN ON MANKEN', title: 'Molarite-Yoğunluk', expansion: 'M = ( % · d · 10 ) / MA', memoryTip: 'Deniz (%d), On (10), Manken (MA) akrostişiyle formülü unutmayın.' },
      { codeBadge: 'MOLALİTEDE KİLOGRAM ÇÖZÜCÜ', title: 'Molalite Uyarısı', expansion: 'Payda sadece suyun (çözücünün) kilogramıdır', memoryTip: 'Çözeltinin toplam kütlesini paydaya yazma hatasından kaçının.' }
    ]
  },
  {
    unitId: 'u15',
    bigPictureQuote: 'Koligatif özellikler ve çözünürlük; çözeltilerin buhar basıncı düşmesini, donma ve kaynama noktası ötelenmelerini çözünenin kimliğinden bağımsız tanecik derişimiyle açıklar.',
    subtopics: [
      {
        badge: 'Koligatif',
        title: 'Kaynama Yükselmesi ve Donma Alçalması',
        summary: 'Uçucu olmayan katı çözüldüğünde kaynama noktası yükselir, donma noktası düşer.',
        keyPoints: [
          'Ebülyoskopi: ΔTk = Kk · m · i (Suyun Kk = 0.52 °C·kg/mol).',
          'Kriyoskopi: ΔTd = Kd · m · i (Suyun Kd = 1.86 °C·kg/mol).',
          'van t Hoff faktörü i: Şeker için 1, NaCl için 2, AlCl3 için 4 tür (iyon sayısı).'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Buhar & Ozmoz',
        title: 'Raoult Buhar Basıncı ve Ozmotik Basınç',
        summary: 'Çözeltinin buhar basıncı saf çözücüden düşüktür; yarı geçirgen zarda ozmoz gerçekleşir.',
        keyPoints: [
          'Raoult Yasası: Pçözelti = Pçözücü° · Xçözücü (uçucu olmayan çözünen için).',
          'Ozmoz suyun az yoğun ortamdan çok yoğun ortama kendiliğinden geçişidir.',
          'Ters ozmoz dışarıdan ozmotik basınçtan büyük basınç uygulanarak deniz suyundan tatlı su eldesidir.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Çözünürlük',
        title: 'Çözünürlüğe Etki Eden Faktörler',
        summary: 'Sıcaklık, basınç, ortak iyon ve pH ın çözünürlük dengesi üzerindeki etkileri.',
        keyPoints: [
          'Katıların çoğu endotermik çözünür (sıcaklık arttıkça çözünürlük artar).',
          'Gazların çözünürlüğü DAİMA ekzotermiktir; sıcaklık arttıkça gaz çözünürlüğü azalır.',
          'Basınç yalnızca gazların çözünürlüğünü artırır (Henry Yasası: S = k·P).'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Kaynama ve Donma Ötelemesi', expression: 'ΔTk = Kk · m · i  |  ΔTd = Kd · m · i', examNote: 'i faktörü iyonik bileşiklerde toplam iyon sayısı, moleküler bileşiklerde (glukoz) 1 dir.' },
      { label: 'Raoult Buhar Basıncı Yasası', expression: 'Pçözelti = Pçözücü° · Xçözücü  (Xçözücü = nçözücü / ntoplam)', examNote: 'Çözünen tuz buhar oluşturmadığından buhar basıncını yalnızca çözücü molekülleri yapar.' },
      { label: 'Henry Gaz Çözünürlüğü Yasası', expression: 'Sgaz = kH · Pgaz', examNote: 'Gazlı içeceklerin soğuk içilmesinin ve kapağı açıldığında gaz çıkışının sebebi Henry yasasıdır.' }
    ],
    mnemonics: [
      { codeBadge: 'K-İ-M FORMÜLÜ', title: 'Koligatif Hesaplama', expansion: 'ΔT = K · i · m (Sabit × İyon Sayısı × Molalite)', memoryTip: 'Koligatif sıcaklık sapmasını K-i-m çarpımıyla anında hesaplayın.' },
      { codeBadge: 'GAZLAR EKZOTERMİKTİR', title: 'Gaz Çözünürlüğü', expansion: 'Gazlar soğukta ve yüksek basınçta çok çözünür', memoryTip: 'Derin deniz balıklarının soğuk suları tercih etmesini bu kurala bağlayın.' }
    ]
  },
  {
    unitId: 'u16',
    bigPictureQuote: 'Kimyasal termodinamik ve tepkime enerjisi; kimyasal bağların kırılması ve oluşumu arasındaki entalpi farkını (ΔH) ve Hess yasasının toplamsallığını açıklar.',
    subtopics: [
      {
        badge: 'Entalpi',
        title: 'Ekzotermik ve Endotermik Tepkimeler',
        summary: 'Çevreye ısı veren ekzotermik (ΔH < 0) ve çevreden ısı alan endotermik (ΔH > 0) sistemler.',
        keyPoints: [
          'Ekzotermik tepkimede ürünler girenlerden daha kararlıdır; sistem soğudukça ürünlere kayar.',
          'Endotermik tepkime kendiliğinden devam etmez, sürekli enerji beslemesi gerektirir.',
          'Gazların suda çözünmesi, asit-baz nötralleşmesi ve çoğu yanma ekzotermiktir.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Oluşum',
        title: 'Standart Oluşum Entalpisi (ΔHf°)',
        summary: '25°C ve 1 atm de 1 mol bileşiğin standart haldeki kararlı elementlerinden oluşma ısısı.',
        keyPoints: [
          'Standart şartlarda en kararlı haldeki saf elementlerin oluşum entalpisi sıfır kabul edilir.',
          'O2(g) sıfırdır ama O3(g) sıfır değildir; Grafit sıfırdır ama Elmas sıfır değildir!',
          'Tepkime entalpisi ΔH° = Σ n·ΔHf°(ürünler) - Σ m·ΔHf°(girenler) formülüyle hesaplanır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Hess Yasası',
        title: 'Hess Yasası ve Bağ Enerjileri',
        summary: 'Tepkime entalpisinin izlenen yoldan bağımsız olması ve bağ kırılma-oluşma dengesi.',
        keyPoints: [
          'Tepkime ters çevrilirse ΔH işaret değiştirir (+ ise - olur).',
          'Tepkime bir katsayı ile çarpılırsa ΔH da aynı katsayı ile çarpılır.',
          'Bağ enerjisi ile hesap: ΔH = Σ BE(Kırılan Bağlar) - Σ BE(Oluşan Bağlar).'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Oluşum Entalpisi ile Tepkime Isısı', expression: 'ΔH° = Σ n · ΔHf°(Ürünler) - Σ m · ΔHf°(Girenler)', examNote: 'Ürün eksi giren kuralıdır; standart elementlerin sıfır olduğunu unutmayın.' },
      { label: 'Bağ Enerjisi Bağıntısı', expression: 'ΔH = Σ BE(Kırılan/Girenler) - Σ BE(Oluşan/Ürünler)', examNote: 'Dikkat! Oluşum entalpisi Ürün-Giren iken, Bağ enerjisinde Giren-Ürün yapılır!' },
      { label: 'Potansiyel Enerji - Aktifleşme Bağıntısı', expression: 'ΔH = Eai (İleri Aktifleşme) - Eag (Geri Aktifleşme)', examNote: 'Eai ve Eag daima pozitif değerlerdir; Eai > Eag ise endotermiktir.' }
    ],
    mnemonics: [
      { codeBadge: 'ELEMENTİN EN KARARLISI SIFIR', title: 'Oluşum Entalpisi Kuralı', expansion: 'Standart şartta en kararlı allotrop ve faz sıfırdır', memoryTip: 'Grafit=0, Elmas≠0; O2(g)=0, O3(g)≠0; Br2(s)=0, Br2(g)≠0.' },
      { codeBadge: 'BAĞDA GİREN EKSİ ÜRÜN', title: 'Bağ Enerjisi Uyarısı', expansion: 'Bağ enerjisinde Kırılan (Giren) - Oluşan (Ürün) yapılır', memoryTip: 'Normal ΔH formülünün tam tersi yönünde olduğunu aklınızda tutun.' }
    ]
  },
  {
    unitId: 'u17',
    bigPictureQuote: 'Kimyasal kinetik; etkin çarpışma teorisi, aktifleşme enerjisi engeli ve katalizör mekanizmaları üzerinden tepkimelerin zaman içindeki hızını inceler.',
    subtopics: [
      {
        badge: 'Çarpışma',
        title: 'Çarpışma Teorisi ve Aktifleşmiş Kompleks',
        summary: 'Reaksiyonun gerçekleşmesi için uygun geometri ve eşik enerjisi (Ea) şarttır.',
        keyPoints: [
          'Yeterli kinetik enerjiye sahip taneciklerin doğru doğrultuda çarpışması etkin çarpışmadır.',
          'Tepe noktasındaki yüksek enerjili, kararsız ara duruma aktifleşmiş kompleks denir.',
          'Sıcaklık arttıkça eşik enerjisini aşan tanecik sayısı artar ve tepkime hızlanır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Hız Denklemi',
        title: 'Hız Bağıntısı, Mertebe ve Molekülerite',
        summary: 'Derişimin tepkime hızına etkisi ve deneysel hız denkleminin kurulması.',
        keyPoints: [
          'Hız denklemine yalnızca gazlar ve suda çözünmüş iyonlar yazılır; saf katı ve sıvılar YAZILMAZ!',
          'r = k·[A]^a·[B]^b denkleminde a+b tepkime derecesini (mertebesini) verir.',
          'Hız sabiti k nın birimi: (L/mol)^(n-1) · s^(-1) dir (n = mertebe).'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Katalizör',
        title: 'Mekanizmalı Tepkimeler ve Katalizör Rolü',
        summary: 'Çok basamaklı tepkimelerde hızı yavaş basamak belirler; katalizör Ea yı düşürür.',
        keyPoints: [
          'Mekanizmalı tepkimelerde hız bağıntısı YAVAŞ olan basamağın girenlerine göre yazılır.',
          'Katalizör aktifleşme enerjisini (Ea) DÜŞÜREN TEK FAKTÖRDÜR; ΔH a asla etki etmez!',
          'Ara ürün bir basamakta oluşup sonrakinde harcanan; katalizör girip değişmeden çıkandır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Hız Denklemi Genel İfadesi', expression: 'r = k · [A]^a · [B]^b  (Saf katı ve sıvılar yer almaz)', examNote: 'Katsayılar gaz ve sulu çözeltiler için üs olarak yazılır.' },
      { label: 'Hız Sabiti k Birim Formülü', expression: 'k birimi = (L / mol)^(n-1) · s^(-1)  (n = tepkime derecesi)', examNote: '2. dereceden tepkimede k birimi L/(mol·s), 1. dereceden tepkimede s^(-1) dir.' },
      { label: 'Katalizörün Değiştirmediği Büyüklükler', expression: 'ΔH (Entalpi), r_ürün, r_giren ve Verim DEĞİŞMEZ!', examNote: 'Katalizör hem ileri hem geri aktifleşme enerjisini aynı miktarda düşürür.' }
    ],
    mnemonics: [
      { codeBadge: 'T-S-K-T', title: 'Hız Sabitini (k) Değiştirenler', expansion: 'Temas yüzeyi, Sıcaklık, Katalizör, Tür (Maddenin cinsi)', memoryTip: 'k sabiti derişime bağlı DEĞİLDİR; sadece TSKT faktörleriyle değişir.' },
      { codeBadge: 'YAVAŞ BASAMAK PATRONDUR', title: 'Mekanizma Kuralı', expansion: 'Hız denklemini ve katsayıları yavaş adım belirler', memoryTip: 'Fabrikada en yavaş çalışan bant tüm üretimin hızını sınırlar.' }
    ]
  },
  {
    unitId: 'u18',
    bigPictureQuote: 'Kimyasal denge; kapalı sistemlerde ileri ve geri tepkime hızlarının eşitlendiği, makroskobik durağanlığın ardında mikroskobik hareketliliğin sürdüğü dinamik dengedir.',
    subtopics: [
      {
        badge: 'Denge Şartı',
        title: 'Dinamik Denge ve Denge Bağıntısı (Kc)',
        summary: 'İleri hızın geri hıza eşit olduğu anda derişimler sabit kalır ve Kc bağıntısı yazılır.',
        keyPoints: [
          'ri = rg olduğunda kimyasal denge kurulur; tepkime durmamıştır, dinamiktir.',
          'Kc = [Ürünler] / [Girenler] bağıntısına saf katı ve sıvılar yazılmaz.',
          'Denge sabitini (Kc ve Kp) DEĞİŞTİREN YEGANE ETKEN SICAKLIKTIR!'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Kp ve Kurallar',
        title: 'Kısmi Basınçlar Dengesi (Kp) ve Hess Kuralları',
        summary: 'Kp = Kc(RT)^Δn bağıntısı ve tepkime ters çevrildiğinde Kc nin ters dönmesi.',
        keyPoints: [
          'Kp = Kc · (R·T)^Δn formülünde Δn = ngaz(ürün) - ngaz(giren) dir.',
          'Tepkime ters çevrilirse K = 1/K olur; katsayı ile çarpılırsa üs olarak gelir (K^n).',
          'Tepkimeler toplanırsa denge sabitleri birbiriyle ÇARPILIR (Ktoplam = K1 · K2).'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Le Chatelier',
        title: 'Le Chatelier İlkesi ve Dengeye Etkiler',
        summary: 'Derişim, basınç, hacim ve sıcaklık değişimlerine dengenin verdiği tepkiler.',
        keyPoints: [
          'Madde eklenirse denge o maddeyi harcayacak yöne kayar (grafikte dikey sıçrama olur).',
          'Hacim azaltılırsa basınç artar, denge gaz mol sayısının az olduğu tarafa kayar.',
          'Katalizör dengeyi bozmaz, dengeye ulaşma süresini kısaltır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Köpek Kaçırtan Formülü', expression: 'Kp = Kc · (R · T)^Δn  (Δn = Gaz Ürünler - Gaz Girenler)', examNote: 'Δn = 0 ise Kp = Kc dir; R = 0.082 veya 22.4/273 alınır.' },
      { label: 'Denge Kesri (Qc) Yön Kriteri', expression: 'Qc < Kc (Ürünlere/Sağa Kayar)  |  Qc > Kc (Girenlere/Sola Kayar)', examNote: 'Qc = Kc olduğu an sistem dengededir; hesaplanan anlık derişimlerin orantısıdır.' },
      { label: 'Sıcaklığın Kc ye Etkisi', expression: 'Endotermikte T↑ Kc↑  |  Ekzotermikte T↑ Kc↓', examNote: 'Kc yi derişim, basınç, hacim veya katalizör ASLA değiştiremez; yalnızca sıcaklık değiştirir.' }
    ],
    mnemonics: [
      { codeBadge: 'KÖPEK KAÇIRTAN', title: 'Kp ve Kc İlişkisi', expansion: 'Kp = Kc · (R · T)^Δn', memoryTip: 'KP = KC (R T)^Δn formülünü ünlü tekerlemesiyle aklınızda tutun.' },
      { codeBadge: 'DİK SIÇRAMA EKLEMEDİR', title: 'Denge Grafiği Analizi', expansion: 'Grafikte dikey ani çıkış varsa o madde doğrudan dışarıdan eklenmiştir', memoryTip: 'Derişim grafiğinde dik çizgi = doğrudan ilave; yumuşak eğri = Le Chatelier kayması.' }
    ]
  },

  // --- AYT Units 19-24 ---
  {
    unitId: 'u19',
    bigPictureQuote: 'Asit-baz dengesi ve titrasyon; suyun otoiyonizasyonu, Brønsted-Lowry konjuge çiftleri, tampon çözeltiler ve tuz hidrolizini dinamik dengeyle açıklar.',
    subtopics: [
      {
        badge: 'Otoiyonizasyon',
        title: 'Suyun Otoiyonizasyonu ve pH / pOH',
        summary: '25°C de Ksu = 10^-14 dengesi ve zayıf asit-bazların iyonlaşma dengesi.',
        keyPoints: [
          '25°C de Ksu = [H+][OH-] = 1.0 × 10^-14 ve pH + pOH = 14 tür.',
          'Brønsted-Lowry tanımında H+ veren asit, H+ alan bazdır; aralarında 1 H+ farkı olanlar konjugedir.',
          'Zayıf asitlerde Ka küçüldükçe asitlik kuvveti azalır, pKa değeri büyür.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Zayıf Asit-Baz',
        title: 'İyonlaşma Yüzdesi ve Tuz Hidrolizi',
        summary: 'Zayıf asit seyreltildikçe iyonlaşma yüzdesi artar; tuzların asidik/bazik karakteri.',
        keyPoints: [
          'Zayıf asit çözeltisine su eklendikçe iyonlaşma yüzdesi artar, ancak [H+] derişimi azalır (pH artar).',
          'Kuvvetli asit + Zayıf baz tuzları (NH4Cl) asidiktir; katyonu hidroliz olur.',
          'Zayıf asit + Kuvvetli baz tuzları (CH3COONa) baziktir; anyonu hidroliz olur.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Tampon & Titrasyon',
        title: 'Tampon Çözeltiler ve Eşdeğerlik Noktası',
        summary: 'pH değişimine direnen tamponlar ile büret titrasyonundaki dönüm noktası.',
        keyPoints: [
          'Tampon çözelti zayıf asit ve eşlenik bazından (HF + NaF) oluşur; kanımız bir tampondur.',
          'Titrasyonda eşdeğerlik noktası nH+ = nOH- olduğu andır (kuvvetli-kuvvetli için pH=7).',
          'Zayıf asit kuvvetli bazla titre edilirse eşdeğerlik noktasında pH > 7 bazik olur.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Zayıf Asit [H+] Derişimi', expression: '[H+] = √(Ka · Ca)  |  İyonlaşma % = ([H+] / Ca) × 100', examNote: 'Ca asidin başlangıç molar derişimidir; ihmal kuralı gereği paydadan [H+] çıkarılmaz.' },
      { label: 'Henderson-Hasselbalch Tampon Denklemi', expression: 'pH = pKa + log( [Tuz / Eşlenik Baz] / [Zayıf Asit] )', examNote: 'Tampon çözeltiye az miktarda kuvvetli asit veya baz eklendiğinde pH neredeyse sabit kalır.' },
      { label: 'Titrasyon Eşdeğerlik Eşitliği', expression: 'Ma · Va · za = Mb · Vb · zb', examNote: 'Eşdeğerlik noktasında asidin molü ile bazın molü tesir değerlikleriyle çarpılarak eşitlenir.' }
    ],
    mnemonics: [
      { codeBadge: 'SEYRELTİLDİKÇE İYONLAŞIR', title: 'Ostwald Seyreltme', expansion: 'Zayıf asit seyreltildikçe iyonlaşma yüzdesi ARTAR', memoryTip: 'Su eklendikçe denge iyonların çok olduğu tarafa kayarak iyonlaşma yüzdesini artırır.' },
      { codeBadge: 'GÜÇLÜ OLANIN ADI ÇIKAR', title: 'Tuz Hidrolizi Kuralı', expansion: 'Kuvvetli asit tuzu asidiktir, kuvvetli baz tuzu baziktir', memoryTip: 'Tuzun karakterini kuvvetli ebeveyni belirler; zayıftan gelen iyon hidroliz olur.' }
    ]
  },
  {
    unitId: 'u20',
    bigPictureQuote: 'Çözünürlük dengesi (Kçç); az çözünen iyonik katıların doymuş sulu çözeltilerindeki dinamik dengeyi ve ortak iyon etkisinin çözünürlüğü azaltıcı rolünü matematiksel olarak modeller.',
    subtopics: [
      {
        badge: 'Kçç Dengesi',
        title: 'Çözünürlük Çarpımı Sabiti ve Mol Çözünürlüğü',
        summary: 'Az çözünen tuzların çözünürlüğü (s) ile denge sabiti Kçç arasındaki bağıntılar.',
        keyPoints: [
          'XY tuzu için Kçç = s^2 dir (AgCl gibi).',
          'XY2 tuzu için Kçç = 4s^3 tür (PbI2, CaF2 gibi).',
          'X2Y3 tuzu için Kçç = 108s^5 tir (Al2S3 gibi).'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Çökelme',
        title: 'Çökelme Kriteri ve İyon Çarpımı (Qi)',
        summary: 'Karıştırılan iki çözeltide çökelek oluşup oluşmayacağının tespiti.',
        keyPoints: [
          'İyon çarpımı Qi < Kçç ise çözelti doymamıştır, çökme olmaz.',
          'Qi = Kçç ise çözelti tam doymuştur ve dengededir.',
          'Qi > Kçç ise çözelti aşırı doygundur; sistem dengeye ulaşana kadar ÇÖKME OLUR.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Ortak İyon',
        title: 'Ortak İyon Etkisi ve Sıcaklık',
        summary: 'Ortak iyonun çözünürlüğü azaltması ve sıcaklığın Kçç ye yegane etkisi.',
        keyPoints: [
          'Ortak iyon çözünürlüğü Le Chatelier gereği AZALTIR.',
          'Ortak iyon Kçç sabitinin sayısal değerini ASLA DEĞİŞTİRMEZ!',
          'Kçç değerini değiştiren tek faktör sıcaklıktır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Tuz Tiplerine Göre Kçç Bağıntıları', expression: '1:1 Tuz → Kçç = s^2  |  1:2 Tuz → Kçç = 4s^3  |  2:3 Tuz → Kçç = 108s^5', examNote: 's saf sudaki molar çözünürlüktür; soruda çözünürlük verilip Kçç istenirse katsayı üs alınır.' },
      { label: 'Çökelme Başlama Şartı', expression: 'Qi > Kçç  ⇒  Çökelme Başlar!', examNote: 'Çözeltiler karıştırıldığında hacim 2 katına çıkarsa iyon derişimlerinin yarıya ineceğini unutmayın!' },
      { label: 'Ortak İyonda Çözünürlük Hesabı', expression: 'Kçç = [Katyon] · [Anyon + Ortak]^n  (Tuzdan gelen iyon ihmal edilir)', examNote: 'Az çözünen tuzdan gelen ortak iyon ihmal edilir, sadece kuvvetli kaynaktan gelen alınır.' }
    ],
    mnemonics: [
      { codeBadge: 'ORTAK İYON Kçç DEĞİŞTİRMEZ', title: 'Kritik Sınav Tuzağı', expansion: 'Ortak iyon çözünürlüğü azaltır ama Kçç yi DEĞİŞTİRMEZ!', memoryTip: 'Kçç bir denge sabitidir ve denge sabitleri yalnızca sıcaklıkla değişir.' },
      { codeBadge: 'HACİM İKİ KATSA DERİŞİM YARIYA', title: 'Karıştırma Uyarısı', expansion: 'Eşit hacimde karıştırmada başlangıç derişimleri 2 ye bölünür', memoryTip: 'Qi hesaplarken karışımdan ötürü derişimlerin seyrelmesini gözden kaçırmayın.' }
    ]
  },
  {
    unitId: 'u21',
    bigPictureQuote: 'Elektrokimya ve galvanik piller; kendiliğinden gerçekleşen redoks tepkimelerinin kimyasal enerjisini elektrik enerjisine dönüştüren Daniell hücreleri ve Nernst potansiyelidir.',
    subtopics: [
      {
        badge: 'Redoks',
        title: 'Redoks Tepkimeleri ve Standart Potansiyeller',
        summary: 'Elektron alışverişi, yükseltgenme basamakları ve SHE referans elektrot.',
        keyPoints: [
          'Yükseltgenen madde elektron verir, basamağı artar ve indirgen özellik gösterir.',
          'Standart Hidrojen Elektrodu (SHE) potansiyeli 25°C ve 1 atm de 0.00 V kabul edilir.',
          'Yükseltgenme potansiyeli büyük olan metal daha aktiftir ve pilde anot olur.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Daniell Pili',
        title: 'Galvanik Hücre Çalışma Mekanizması',
        summary: 'Anot, katot, tuz köprüsü ve dış devrede elektron akışının kuralları.',
        keyPoints: [
          'Anotta yükseltgenme olur, elektrot aşınır, çözeltide katyon derişimi artar.',
          'Katotta indirgenme olur, elektrot kütlesi genellikle artar.',
          'Dış devrede elektronlar DAİMA ANOTTAN KATODA doğru akar.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Nernst & Derişim',
        title: 'Nernst Eşitliği ve Derişim Pilleri',
        summary: 'Standart olmayan derişimlerde pil potansiyeli hesabı ve derişim pilleri.',
        keyPoints: [
          'Nernst: Epil = E°pil - (0.0592 / n) · log Q bağıntısıyla bulunur.',
          'Derişim pilinde elektrotlar aynıdır; seyreltik olan kap anot, derişik kap katottur.',
          'Derişimler eşitlendiğinde pil biter ve Epil = 0 olur.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Nernst Eşitliği Formülü', expression: 'Epil = E°pil - (0.0592 / n) · log Q  (Q = [Anot] / [Katot])', examNote: 'n tepkimede aktarılan elektron sayısıdır; derişimler eşitken log 1 = 0 dır.' },
      { label: 'Standart Pil Potansiyeli', expression: 'E°pil = E°yüks(Anot) + E°ind(Katot) > 0 ise İstemlidir', examNote: 'Tepkime bir sayıyla çarpılırsa E° potansiyeli ÇARPILMAZ; ters dönerse işaret değiştirir.' },
      { label: 'Tuz Köprüsü İyon Göçü', expression: 'Anyonlar Anota, Katyonlar Katoda Göç Eder', examNote: 'Tuz köprüsü devreyi tamamlar ve yük denkliğini sağlayarak pilin çalışmasını sürdürür.' }
    ],
    mnemonics: [
      { codeBadge: 'K-İ-M-Y-A', title: 'Anot-Katot Kuralı', expansion: 'Katotta İndirgenme, Yükseltgenme Anotta', memoryTip: 'Elektrokimyanın en temel kuralı: İndirgenme her zaman katotta olur.' },
      { codeBadge: 'A-N-O-T', title: 'Anot Özellikleri', expansion: 'Aşınma olur, Negatif kutuptur, Oksidasyon gerçekleşir, Tuz köprüsünde Anyon gelir', memoryTip: 'Anot hücresinde gerçekleşen 4 temel olayı ANOT harfleriyle hatırlayın.' }
    ]
  },
  {
    unitId: 'u22',
    bigPictureQuote: 'Elektroliz ve korozyon; elektrik enerjisiyle istemsiz reaksiyonların zorla yürütülmesini, Faraday ın kantitatif kaplama yasalarını ve kurban elektrotla katodik korumayı inceler.',
    subtopics: [
      {
        badge: 'Elektroliz',
        title: 'Elektroliz Hücresi ve Erimiş Tuzlar',
        summary: 'Dışarıdan üreteçle elektrik verilerek istemsiz endotermik redoksun gerçekleştirilmesi.',
        keyPoints: [
          'Elektrolizde de anotta yükseltgenme, katotta indirgenme gerçekleşir.',
          'Pilde anot negatif iken, elektrolizde üretecin artı kutbuna bağlı olan anot artıdır.',
          'Erimiş tuzlarda (NaCl) anotta Cl2 gazı açığa çıkar, katotta Na metali toplanır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Sulu Elektroliz',
        title: 'Sulu Çözelti Elektrolizi ve Hoffman Voltametresi',
        summary: 'Suyun ve tuz çözeltilerinin elektrolizinde hangi iyonun önce açığa çıkacağı kuralı.',
        keyPoints: [
          'Anotta yükseltgenme potansiyeli en büyük olan (en kolay yükseltgenen) anyon önce çıkar.',
          'Katotta indirgenme potansiyeli en büyük olan (en kolay indirgenen) katyon önce çıkar.',
          'Suyun elektrolizinde katotta toplanan H2 gazı hacmi, anottaki O2 gazının 2 KATIDIR!'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Faraday & Korozyon',
        title: 'Faraday Kanunları ve Katodik Koruma',
        summary: 'Devreden geçen yük miktarıyla toplanan madde kütlesi hesabı ve paslanmayı önleme.',
        keyPoints: [
          '1 mol elektron = 1 Faraday (F) = 96500 Coulomb elektrik yüküdür.',
          'm = (I · t · MA) / (96500 · z) bağıntısıyla toplanan kütle hesaplanır.',
          'Korozyonu önlemek için korunacak metale ondan daha aktif bir kurban elektrot (Mg/Zn) bağlanır.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Faraday Elektroliz Kütle Bağıntısı', expression: 'm = (I · t · MA) / (96500 · z)  (z = tesir değerliği/elektron sayısı)', examNote: 'I akım (Amper), t süre (Saniye!) olarak alınmalıdır; dakika verilirse 60 ile çarpılır.' },
      { label: 'Suyun Elektrolizi Hacim Oranı', expression: '2 H2O(s) → 2 H2(g) [Katot, 2V] + O2(g) [Anot, 1V]', examNote: 'Katotta toplanan gaz hacmi anotta toplananın daima iki katıdır (V_H2 = 2 V_O2).' },
      { label: 'Elektrik Yükü ve Mol Elektron', expression: 'Q = I · t  |  n_e = Q / 96500', examNote: 'Devreden 1 F yük geçtiğinde katotta 1 eşdeğer gram madde toplanır.' }
    ],
    mnemonics: [
      { codeBadge: 'KATOTTA İKİ KAT HİDROJEN', title: 'Hoffman Gaz Hacmi', expansion: 'H2O formülünde 2 hidrojen olduğu için katotta 2 kat hacim gaz çıkar', memoryTip: 'Katotta H2 (2 hacim), anotta O2 (1 hacim) gazı toplanır.' },
      { codeBadge: 'KURBAN OLSUN DAHA AKTİF', title: 'Kurban Elektrot', expansion: 'Kurban elektrot korunan metalden daha aktif olmalıdır ki önce o aşınsın', memoryTip: 'Gemilerin ve yeraltı borularının gövdesine çinko bloklar bu yüzden takılır.' }
    ]
  },
  {
    unitId: 'u23',
    bigPictureQuote: 'Karbon kimyasına giriş; karbon atomunun 4 kovalent bağ yapabilme yeteneği, sp3-sp2-sp hibritleşmeleri, allotropların büyülü yapıları ve VSEPR molekül geometrilerini keşfeder.',
    subtopics: [
      {
        badge: 'Allotroplar',
        title: 'Karbonun Doğal ve Yapay Allotropları',
        summary: 'Elmas ve grafit gibi doğal yapılar ile fulleren, grafen ve nanotüp gibi nanoteknolojik formlar.',
        keyPoints: [
          'Elmas sp3 hibritleşmesi yapar; düzgün dörtyüzlü örgüsüyle çok serttir ve yalıtkandır.',
          'Grafit sp2 hibritleşmesi yapar; altıgen tabakalarındaki serbest pi elektronlarıyla elektriği iletir.',
          'Grafen tek atom kalınlığında iki boyutlu karbon tabakadır; çelikten kat kat sağlamdır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Hibritleşme',
        title: 'Sigma ve Pi Bağları ile Hibritleşme',
        summary: 'Atomik orbitallerin örtüşerek eş enerjili yeni hibrit orbitaller oluşturması.',
        keyPoints: [
          'Tekli bağlar daima sigma (σ) bağıdır; ikili bağda 1σ + 1π, üçlü bağda 1σ + 2π bulunur.',
          'Sigma bağları uç uca, pi bağları orbitallerin yan yana örtüşmesiyle oluşur.',
          'Merkez atomun doğrultu sayısı = 4 ise sp3, 3 ise sp2, 2 ise sp hibritleşmesi yapmıştır.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'VSEPR',
        title: 'VSEPR Kuramı ve Molekül Geometrileri',
        summary: 'Değerlik katmanı elektron çiftlerinin birbirini itmesiyle oluşan uzaysal molekül şekilleri.',
        keyPoints: [
          'AX2 doğrusal geometri (180°), örneğin BeH2 ve CO2.',
          'AX3 düzlem üçgen (120°), örneğin BH3 ve BF3.',
          'AX4 düzgün dörtyüzlü (109.5° - CH4); AX3E üçgen piramit (107.3° - NH3); AX2E2 kırık doğru (104.5° - H2O).'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Hibritleşme Doğrultu Kuralı', expression: 'Doğrultu Sayısı = Sigma (σ) Bağ Sayısı + Ortaklanmamış Elektron Çifti Sayısı', examNote: 'Doğrultu 4 ise sp3, 3 ise sp2, 2 ise sp dir; pi bağları hibritleşmeye katılmaz!' },
      { label: 'VSEPR Geometri ve Açı Eşleştirmesi', expression: 'AX2 (180°) | AX3 (120°) | AX4 (109.5°) | AX3E (107.3°) | AX2E2 (104.5°)', examNote: 'Ortaklanmamış elektron çifti (E) bağları aşağı doğru iterek bağ açısını daraltır.' },
      { label: 'Organik vs Anorganik Farkı', expression: 'Organik bileşikler kovalenttir, yanıcıdır, erime noktaları düşüktür ve yavaştır', examNote: 'Tüm karbonlu bileşikler organik değildir (CO, CO2, CS2 ve siyanürler anorganiktir!).' }
    ],
    mnemonics: [
      { codeBadge: 'ELMAS YALITKAN GRAFİT İLETKEN', title: 'Allotrop İletkenliği', expansion: 'Elmas sp3 ile yalıtkandır, grafit sp2 serbest pi elektronuyla iletkendir', memoryTip: 'Kurşun kalem ucu grafittir ve devreyi tamamlayarak elektrik iletir.' },
      { codeBadge: 'TEKLİ SİGMA İKİLİ BİR Pİ', title: 'Bağ Türü Sayımı', expansion: 'Tekli bağ = 1σ; İkili bağ = 1σ + 1π; Üçlü bağ = 1σ + 2π', memoryTip: 'Tüm kovalent bağlarda ilk oluşan bağ daima sigmadır.' }
    ]
  },
  {
    unitId: 'u24',
    bigPictureQuote: 'Organik bileşikler; alkanlardan aromatik halkalara, alkollerden esterlere uzanan fonksiyonel grup kimyası ve Markovnikov gibi reaksiyon kurallarıyla canlılığın moleküler zenginliğidir.',
    subtopics: [
      {
        badge: 'Hidrokarbonlar',
        title: 'Alkanlar, Alkenler ve Alkinler',
        summary: 'Yalnızca karbon ve hidrojenden oluşan doymuş ve doymamış organik bileşik sınıfları.',
        keyPoints: [
          'Alkanlar (CnH2n+2) doymuştur, parafindir ve yer değiştirme (sübstitüsyon) tepkimesi verir.',
          'Alkenler (CnH2n) pi bağı içerir, bromlu suyun kırmızı-kahve rengini giderir, cis-trans izomeri gösterir.',
          'Alkinler (CnH2n-2) üçlü bağ içerir; asetilen (C2H2) kaynakçılıkta ve meyve olgunlaştırmada kullanılır.'
        ],
        accentHex: '#06b6d4'
      },
      {
        badge: 'Özel Reaksiyonlar',
        title: 'Markovnikov Kuralı ve Tollens / Fehling Ayıracı',
        summary: 'Katılma yönünü belirleyen kural ile uç alkin ve aldehitleri tanıyan ayıraçlar.',
        keyPoints: [
          'Markovnikov kuralı: Asimetrik alkene HX katıldığında H hidrojence zengin karbona bağlanır.',
          'Uç alkinler Tollens ayıracıyla beyaz, Fehling le kırmızı çökelek verir; iç alkinler VERMEZ!',
          'Aldehitler Tollens ile gümüş aynası oluştururken ketonlar yükseltgenemez.'
        ],
        accentHex: '#f59e0b'
      },
      {
        badge: 'Fonksiyonel Gruplar',
        title: 'Alkoller, Eterler, Karbonil ve Esterler',
        summary: 'Farklı heteroatomlar içeren fonksiyonel gruplar ve yükseltgenme basamakları.',
        keyPoints: [
          'Primer alkol yükseltgenirse aldehit, o da yükseltgenirse karboksilik asit oluşur.',
          'Sekonder alkol yükseltgendiğinde keton oluşur; tersiyer alkoller yükseltgenmez.',
          'Karboksilik asit ile alkolün kondenzasyon tepkimesinden hoş kokulu esterler oluşur.'
        ],
        accentHex: '#10b981'
      }
    ],
    goldenFormulas: [
      { label: 'Markovnikov Katılma İlkesi', expression: 'R-CH=CH2 + H-Br → R-CH(Br)-CH3 (Hidrojen zengin olana gider!)', examNote: 'Ana ürün Markovnikov kuralına göre kararlı karbokatyon üzerinden oluşur.' },
      { label: 'Esterleşme Reaksiyonu', expression: 'R-COOH (Asit) + R -OH (Alkol) ⇌ R-COOR (Ester) + H2O', examNote: 'Esterleşmede asitten -OH grubu, alkolden -H grubu ayrılarak su oluşturur.' },
      { label: 'Alkol Yükseltgenme Basamakları', expression: '1° Alkol → Aldehit → Asit  |  2° Alkol → Keton  |  3° Alkol → Yükseltgenmez!', examNote: 'Tersiyer alkollerin yükseltgenmediği bilgisi ÖSYM nin klasik eleyici sorusudur.' }
    ],
    mnemonics: [
      { codeBadge: 'ZENGİN DAHA ZENGİN', title: 'Markovnikov Kuralı', expansion: 'Katılmada H atomu ikili bağdaki hidrojeni çok olan karbona bağlanır', memoryTip: 'Zengin olan daha zengin olur kuralıyla katılma ürününü şaşırmayın.' },
      { codeBadge: 'UÇ ALKİN ÇÖKER İÇ ALKİN ÇÖKMEZ', title: 'Tollens Ayıracı', expansion: 'Uç alkin asidik H içerdiği için çökelek verir, iç alkinde uç H yoktur', memoryTip: 'Asetilen Tollens ile beyaz patlayıcı gümüş tuzu çökeleği oluşturur.' }
    ]
  }
];

const CACHE_PATH = path.resolve(__dirname, './curriculumTranslationsCache.json');
let translationsCache: Record<string, Record<string, string>> = {};
if (fs.existsSync(CACHE_PATH)) {
  translationsCache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
}

function getLoc(tr: string): Record<string, string> {
  const clean = (tr || '').trim();
  const cached = translationsCache[clean] || translationsCache[tr];
  return {
    tr: clean,
    en: cached?.en || clean,
    de: cached?.de || clean,
    fr: cached?.fr || clean,
    ru: cached?.ru || clean,
    ar: cached?.ar || clean,
    zh: cached?.zh || clean,
    ku: cached?.ku || clean,
  };
}

function buildLocalizedGuide(raw: SlideGuideRaw): string {
  // Translate each string to all 8 languages using L(...) format
  function toL(str: string): string {
    const loc = getLoc(str);
    const escapeStr = (s: string) => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `L("${escapeStr(loc.tr)}", "${escapeStr(loc.en)}", "${escapeStr(loc.de)}", "${escapeStr(loc.fr)}", "${escapeStr(loc.ru)}", "${escapeStr(loc.ar)}", "${escapeStr(loc.zh)}", "${escapeStr(loc.ku)}")`;
  }

  const subtopicsCode = raw.subtopics.map((sub, i) => `      {
        id: '${raw.unitId}-sub-${i + 1}',
        badge: ${toL(sub.badge)},
        title: ${toL(sub.title)},
        summary: ${toL(sub.summary)},
        keyPoints: [
          ${toL(sub.keyPoints[0])},
          ${toL(sub.keyPoints[1])},
          ${toL(sub.keyPoints[2])}
        ],
        accentHex: '${sub.accentHex}'
      }`).join(',\n');

  const formulasCode = raw.goldenFormulas.map((f, i) => `      {
        id: '${raw.unitId}-frule-${i + 1}',
        label: ${toL(f.label)},
        expression: ${toL(f.expression)},
        examNote: ${toL(f.examNote)}
      }`).join(',\n');

  const mnemonicsCode = raw.mnemonics.map((m, i) => `      {
        id: '${raw.unitId}-mnem-${i + 1}',
        codeBadge: ${toL(m.codeBadge)},
        title: ${toL(m.title)},
        expansion: ${toL(m.expansion)},
        memoryTip: ${toL(m.memoryTip)}
      }`).join(',\n');

  return `  ${raw.unitId}: {
    unitId: '${raw.unitId}',
    bigPictureQuote: ${toL(raw.bigPictureQuote)},
    deepSubtopics: [
${subtopicsCode}
    ],
    goldenFormulas: [
${formulasCode}
    ],
    memoryMnemonics: [
${mnemonicsCode}
    ]
  }`;
}

async function generateSlideFiles() {
  console.log('Generating 4 Slide Deck Chunk Files in src/data/studySlides/...');

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const chunks = [
    { name: 'slides_u01_u06.ts', varName: 'STUDY_SLIDES_U01_U06', units: RAW_GUIDES.slice(0, 6) },
    { name: 'slides_u07_u12.ts', varName: 'STUDY_SLIDES_U07_U12', units: RAW_GUIDES.slice(6, 12) },
    { name: 'slides_u13_u18.ts', varName: 'STUDY_SLIDES_U13_U18', units: RAW_GUIDES.slice(12, 18) },
    { name: 'slides_u19_u24.ts', varName: 'STUDY_SLIDES_U19_U24', units: RAW_GUIDES.slice(18, 24) },
  ];

  for (const chunk of chunks) {
    const guidesCode = chunk.units.map(buildLocalizedGuide).join(',\n\n');
    const content = `import { L } from '../units/L';
import type { UnitDeepStudyGuide } from '../../types/chemistry';

export const ${chunk.varName}: Record<string, UnitDeepStudyGuide> = {
${guidesCode}
};
`;
    fs.writeFileSync(path.join(TARGET_DIR, chunk.name), content, 'utf-8');
    console.log(`  -> Wrote ${chunk.name} (${chunk.units.length} units)`);
  }

  // Generate index.ts
  const indexContent = `import type { UnitDeepStudyGuide } from '../../types/chemistry';
import { STUDY_SLIDES_U01_U06 } from './slides_u01_u06';
import { STUDY_SLIDES_U07_U12 } from './slides_u07_u12';
import { STUDY_SLIDES_U13_U18 } from './slides_u13_u18';
import { STUDY_SLIDES_U19_U24 } from './slides_u19_u24';

export const ALL_UNIT_DEEP_STUDY_GUIDES: Record<string, UnitDeepStudyGuide> = {
  ...STUDY_SLIDES_U01_U06,
  ...STUDY_SLIDES_U07_U12,
  ...STUDY_SLIDES_U13_U18,
  ...STUDY_SLIDES_U19_U24,
};

export function getUnitDeepStudyGuide(unitId: string): UnitDeepStudyGuide {
  return ALL_UNIT_DEEP_STUDY_GUIDES[unitId] || ALL_UNIT_DEEP_STUDY_GUIDES['u01'];
}

export * from './slides_u01_u06';
export * from './slides_u07_u12';
export * from './slides_u13_u18';
export * from './slides_u19_u24';
`;

  fs.writeFileSync(path.join(TARGET_DIR, 'index.ts'), indexContent, 'utf-8');
  console.log('  -> Wrote index.ts cleanly!');
  console.log('✅ All 24 study slide decks generated successfully!');
}

if (process.argv[1] && process.argv[1].endsWith('generateStudySlides.ts')) {
  generateSlideFiles().catch((err) => {
    console.error('Fatal error generating slide decks:', err);
    process.exit(1);
  });
}
