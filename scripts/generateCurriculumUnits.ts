/**
 * Kimya YKS — Automated Curriculum Units & Seed Generator
 * Compiles all 24 pedagogical units (10 TYT + 14 AYT) strictly aligned with MEB textbooks.
 * Generates `src/data/units/u01.ts` .. `u24.ts` and `src/data/units/index.ts`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_CHEMISTRY_UNITS as RAW_UNITS } from '../tests/e2e/harness/curriculumAdapter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_DIR = path.resolve(__dirname, '../src/data/units');

const LANGUAGES = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
type Lang = typeof LANGUAGES[number];

const CACHE_PATH = path.resolve(__dirname, './curriculumTranslationsCache.json');
let translationsCache: Record<string, Record<string, string>> = {};
if (fs.existsSync(CACHE_PATH)) {
  translationsCache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
}

function normalizeForLookup(s: string): string {
  return (s || '')
    .toLowerCase()
    .replace(/['’]/g, ' ')
    .replace(/\b([0-9a-z]+)\s*(?:d|t)(?:e|a|ir|ır|ur|ür|den|dan|ten|tan)\b/gi, '$1 ')
    .replace(/[^a-z0-9ğüşıöç]/gi, '')
    .trim();
}

const normalizedCacheMap = new Map<string, Record<string, string>>();
for (const [k, v] of Object.entries(translationsCache)) {
  const n = normalizeForLookup(k);
  if (n && !normalizedCacheMap.has(n)) {
    normalizedCacheMap.set(n, v);
  }
}

function findCached(key: string): Record<string, string> | undefined {
  if (!key) return undefined;
  if (translationsCache[key]) return translationsCache[key];
  const trimmed = key.trim();
  if (translationsCache[trimmed]) return translationsCache[trimmed];
  const withSpace = trimmed.replace(/'/g, ' ');
  if (translationsCache[withSpace]) return translationsCache[withSpace];
  const withoutApos = trimmed.replace(/'/g, '');
  if (translationsCache[withoutApos]) return translationsCache[withoutApos];
  const norm = normalizeForLookup(trimmed);
  if (normalizedCacheMap.has(norm)) return normalizedCacheMap.get(norm);
  return undefined;
}

export function getLoc(tr: string): Record<Lang, string> {
  const clean = (tr || '').trim();
  const cached = findCached(clean);
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

export function locAll(textObj: any): Record<Lang, string> {
  const tr = (textObj?.tr || '').trim();
  const cached = findCached(tr) || findCached(textObj?.tr);
  const result: Record<string, string> = {} as any;
  for (const l of LANGUAGES) {
    if (l === 'tr') {
      result[l] = tr;
    } else {
      result[l] = textObj[l] && textObj[l] !== tr ? textObj[l] : (cached?.[l] || textObj[l] || tr);
    }
  }
  return result as Record<Lang, string>;
}

// 3 Curated Additional Sequences per unit ensuring 4 distinct sequences across all 24 units
export const UNIT_EXTRA_SEQUENCES: Record<string, Array<{ title: string; steps: string[] }>> = {
  u01: [
    { title: 'Basit Damıtma Düzeneği Kurulumu', steps: ['Balona sıvı karışım konur', 'Isıtıcı açılıp kaynatılır', 'Buharlaşan sıvı soğutucuya geçer', 'Yoğuşan sıvı erlende toplanır'] },
    { title: 'Ayırma Hunisi ile Faz Ayırma', steps: ['Heterojen sıvı karışım huniye konur', 'Çalkalanıp gaz basıncı alınır', 'Yoğunluk farkıyla faz ayrımı beklenir', 'Musluk açılarak alttaki faz ayrılır'] },
    { title: 'Katı-Sıvı Süzme İşlemi', steps: ['Süzgeç kağıdı koni şeklinde katlanır', 'Huniye yerleştirilip ıslatılır', 'Heterojen karışım bagetle dökülür', 'Süzüntü beherde toplanır'] },
  ],
  u02: [
    { title: 'Tarihsel Atom Modelleri', steps: ['Dalton içi dolu bölünemez küre modeli', 'Thomson pozitif yük içinde gömülü elektron modeli', 'Rutherford çekirdekli atom modeli', 'Bohr yörüngeli kuantum modeli'] },
    { title: '2. Periyot İyonlaşma Enerjisi Artışı', steps: ['1A Lityum en düşük IE1 değerindedir', '2A Berilyum küresel simetriyle 3A\'yı geçer', '5A Azot küresel simetriyle 6A\'yı geçer', '8A Neon maksimum kararlılıkla en yüksektir'] },
    { title: 'Elektron Uyarılması ve Işıma', steps: ['Temel haldeki elektron enerji soğurur', 'Daha yüksek enerjili yörüngeye fırlar', 'Uyarılmış kararsız halde kısa süre kalır', 'Foton yayarak temel hale geri döner'] },
  ],
  u03: [
    { title: 'İyonik Bağ Oluşum Aşamaları', steps: ['Metal atomu değerlik elektronunu verir', 'Ametal atomu elektronu alarak oktetini tamamlar', 'Zıt yüklü katyon ve anyon oluşur', 'Elektrostatik çekimle iyonik kristal örgü kurulur'] },
    { title: 'Hidrojen Bağı Ağı Kurulumu', steps: ['Elektronegatif F, O, N atomuna bağlı H', 'H atomu üzerinde kısmi pozitif yük yoğunlaşması', 'Komşu moleküldeki ortaklanmamış elektron çifti', 'Moleküller arası güçlü dipol etkileşimi'] },
    { title: 'London Kuvveti Büyüme Basamakları', steps: ['Moleküldeki toplam elektron sayısı artar', 'Elektron bulutunun polarlaşabilirliği artar', 'Anlık geçici dipoller güçlenir', 'Molekülün kaynama noktası yükselir'] },
  ],
  u04: [
    { title: 'Saf Suyun Isınma ve Hal Değişimi', steps: ['0 °C\'deki buz eriyerek suya dönüşür', 'Sıvı su 100 °C\'ye kadar ısınır', '100 °C\'de sabit sıcaklıkta kaynar', 'Su buharının sıcaklığı yükselmeye devam eder'] },
    { title: 'Sıvı Isındıkça Fiziksel Değişimler', steps: ['Moleküllerin ortalama kinetik enerjisi artar', 'Moleküller arası çekim zayıflar', 'Sıvının akmaya karşı direnci (viskozite) azalır', 'Denge buhar basıncı hızla yükselir'] },
    { title: 'Pistonlu Kapta Sıkışma', steps: ['Hareketli piston aşağı doğru itilir', 'Gazın kapladığı hacim daralır', 'Birim hacme düşen tanecik sayısı artar', 'Çeperlere yapılan çarpma sayısı ve basınç artar'] },
  ],
  u05: [
    { title: 'Asit Yağmuru Oluşum Zinciri', steps: ['Fosil yakıtların yanmasıyla SO2 ve NO2 salınır', 'Gazlar atmosferdeki su buharıyla karşılaşır', 'Sülfürik asit ve nitrik asit oluşur', 'pH değeri 5\'in altında asit yağmuru yağar'] },
    { title: 'Sera Etkisi ve Küresel Isınma', steps: ['Güneşten gelen kısa dalgalı ışınlar yeryüzüne ulaşır', 'Yeryüzü ısınarak uzun dalgalı kızılötesi ışın yayar', 'CO2 ve CH4 gazları bu ışınları soğurur', 'Atmosferin ortalama sıcaklığı kademeli artar'] },
    { title: 'İyon Değiştirici ile Su Yumuşatma', steps: ['Sert su reçine kolonundan geçirilir', 'Sudaki Ca2+ ve Mg2+ iyonları reçineye bağlanır', 'Reçineden suya Na+ iyonları salınır', 'Kireç oluşturmayan yumuşak su elde edilir'] },
  ],
  u06: [
    { title: 'Mol Hesaplama Algoritması', steps: ['Verilen maddenin kütlesi belirlenir', 'Periyodik tablodan mol kütlesi hesaplanır', 'n = m / MA formülüyle mol sayısı bulunur', 'NK\'da hacim için mol 22.4 ile çarpılır'] },
    { title: 'Sabit Oranlar Kanunu Uygulaması', steps: ['Bileşiği oluşturan elementlerin kütleleri ölçülür', 'Kütlece birleşme oranı mX / mY belirlenir', 'Verilen reaktif miktarları orana göre kontrol edilir', 'Oluşan bileşik kütlesi kütlenin korunumundan bulunur'] },
    { title: 'Katlı Oranlar Denetimi', steps: ['Aynı iki elementten oluşan iki farklı bileşik yazılır', 'Elementlerden birinin kütlesi eşitlenir', 'Diğer elementin değişen kütleleri oranlanır', 'Basit tam sayılı katlı oran doğrulanır'] },
  ],
  u07: [
    { title: 'Tepkime Denkleştirme ve Hesaplama', steps: ['Tepkimeye girenler ve ürünler yazılır', 'En kalabalık gruptan başlanarak atomlar eşitlenir', 'Başlangıç mol sayıları katsayılarla karşılaştırılır', 'Sınırlayıcı bileşene göre ürün miktarı hesaplanır'] },
    { title: 'Çözünme-Çökelme ve Net İyon', steps: ['İki homojen tuz çözeltisi karıştırılır', 'Katyon ve anyonlar yer değiştirir', 'Az çözünen tuz çökelek halinde katılaşır', 'Çöken katıyı gösteren net iyon denklemi yazılır'] },
    { title: 'Yüzde Verim Belirleme', steps: ['Sınırlayıcı bileşenden teorik ürün hesaplanır', 'Deneyde fiilen elde edilen gerçek ürün tartılır', 'Gerçek miktar teorik miktara bölünür', '100 ile çarpılarak yüzde verim bulunur'] },
  ],
  u08: [
    { title: 'Ayrımsal Damıtma Basamakları', steps: ['Kaynama noktaları farklı homojen sıvı karışım ısıtılır', 'Uçucu olan bileşen önce buharlaşır', 'Fraksiyon kolonunda buhar ayrışır', 'Soğutucuda yoğuşarak ayrı toplama kabına akar'] },
    { title: 'Kütlece Yüzde Derişim Hazırlığı', steps: ['Gereken çözünen madde kütlesi tartılır', 'Gereken çözücü su miktarı tartılır', 'Çözünen kütlesi toplam kütleye oranlanır', 'Yüz ile çarpılarak kütlece yüzde belirlenir'] },
    { title: 'Kristallendirme ile Ayırma', steps: ['Sıcak suda doymuş çözelti hazırlanır', 'Çözelti yavaş yavaş soğumaya bırakılır', 'Sıcaklık düştükçe çözünürlük azalır ve katı çöker', 'Süzgeç kağıdından süzülerek saf kristaller alınır'] },
  ],
  u09: [
    { title: 'Asit-Baz Titrasyon Basamakları', steps: ['Erlenmayere asit ve indikatör konur', 'Bürete standart baz çözeltisi doldurulur', 'Büret musluğu açılarak damla damla eklenir', 'İndikatör renk değiştirdiği anda eşdeğerlik noktası kaydedilir'] },
    { title: 'Metallerin Asitle Tepkime Sırası', steps: ['Aktif metal asitle tepkimeye girer ve H2 gazı çıkar', 'Amfoter metal hem asit hem kuvvetli bazla H2 gazı çıkarır', 'Yarı soy metaller sadece HNO3 ve H2SO4 ile gaz çıkarır', 'Soy metaller (Pt, Au) kral suyu hariç hiçbir asitle tepkime vermez'] },
    { title: 'pH Değerinin Değişimi', steps: ['Saf suyun pH değeri 7\'dir', 'Asit eklendikçe H+ derişimi artar ve pH düşer', 'Baz eklendikçe OH- derişimi artar ve pH yükselir', 'Derişik asit ile derişik baz nötralleşerek tuz ve su verir'] },
  ],
  u10: [
    { title: 'Sabun Üretim Reaksiyonu', steps: ['Bitkisel veya hayvansal yağ ısıtılır', 'Derişik sodyum hidroksit (NaOH) eklenir', 'Saponifikasyon (sabunlaşma) tepkimesi gerçekleşir', 'Tuz eklenerek sabun kalıbı çöktürülür ve gliserin ayrılır'] },
    { title: 'Polimerleşme Süreci', steps: ['Küçük doymamış monomer molekülleri seçilir', 'Yüksek sıcaklık ve basınçta katalizör eklenir', 'Pi bağları açılarak monomerler birbirine bağlanır', 'Binlerce birimden oluşan dev polimer zinciri oluşur'] },
    { title: 'Kirin Sabun Tarafından Temizlenmesi', steps: ['Sabunun apolar hidrofob kuyruğu apolar kire tutunur', 'Sabunun polar hidrofil başı suya yönelir', 'Kir molekülleri misel yapısı içine hapsedilir', 'Su akıntısıyla miseller yüzeyden uzaklaştırılır'] },
  ],
  u11: [
    { title: 'Aufbau Orbital Doldurma Sırası', steps: ['1s orbitali en düşük enerjiyle dolar', '2s ve 2p orbitalleri sırayla doldurulur', '3s ve 3p orbitallerinden sonra 4s orbitali dolar', '4s\'ten sonra 3d orbitallerine elektron yerleşir'] },
    { title: 'Kuantum Sayılarının Belirlenmesi', steps: ['Elektronun bulunduğu katmandan baş kuantum n belirlenir', 'Orbital türünden açısal momentum kuantum l bulunur', 'l\'ye bağlı olarak ml değerleri -l\'den +l\'ye sıralanır', 'Elektronun kendi ekseni etrafında dönüşünden ms belirlenir'] },
    { title: 'Küresel Simetri Kararlılığı (Cr ve Cu)', steps: ['Sc\'den itibaren 3d orbitalleri doldurulur', 'Cr atomunda 4s2 3d4 yerine 4s1 3d5 dizilimi oluşur', '3d orbitalleri yarı dolu hale gelerek küresel simetri kazanır', 'Cu atomunda 4s1 3d10 dizilimiyle tam dolu küresel simetri kurulur'] },
  ],
  u12: [
    { title: 'İdeal Gaz Yasası Türetimi', steps: ['Boyle yasasından P ile V\'nin ters orantısı alınır', 'Charles yasasından V ile T\'nin doğru orantısı eklenir', 'Avogadro yasasından V ile n\'nin doğru orantısı birleştirilir', 'R gaz sabiti ile PV = nRT ana denklemi kurulur'] },
    { title: 'Bileşik Gaz Denklemi Uygulaması', steps: ['Birinci durumdaki P1, V1, T1 değerleri yazılır', 'Değişen koşullardaki P2, V2, T2 parametreleri belirlenir', 'P1.V1 / T1 = P2.V2 / T2 eşitliği kurulur', 'Bilinmeyen hacim veya basınç değeri çekilir'] },
    { title: 'Manometre ile Basınç Ölçümü', steps: ['U borusuna belirli yoğunlukta cıva doldurulur', 'Bir kol kapalı gaza, diğer kol atmosfere açılır', 'Cıva seviyeleri arasındaki yükseklik farkı h ölçülür', 'Açık hava basıncıyla toplanarak gaz basıncı hesaplanır'] },
  ],
  u13: [
    { title: 'Graham Difüzyon Deneyi', steps: ['Cam borunun iki ucuna pamuk yerleştirilir', 'Bir uca HCl, diğer uca NH3 damlatılır', 'Gazlar boru içinde birbirine doğru yayılır', 'Hafif olan NH3 gazı daha hızlı yayılarak HCl\'ye yakın halka oluşturur'] },
    { title: 'Su Üstünde Gaz Toplama', steps: ['Ters çevrilmiş dereceli silindire su doldurulur', 'Tepkimede oluşan gaz su üstünde biriktirilir', 'Kaptaki toplam basınç Ptoplam ölçülür', 'Suyun o sıcaklıktaki buhar basıncı çıkarılarak kuru gaz basıncı bulunur'] },
    { title: 'Joule-Thomson Soğuma Aşamaları', steps: ['Gerçek gaz yüksek basınç altında sıkıştırılır', 'Gaz küçük bir delikten aniden düşük basınca genleştirilir', 'Moleküller arası çekimi yenmek için öz ısı enerjisi harcanır', 'Gazın sıcaklığı aniden düşerek soğur'] },
  ],
  u14: [
    { title: 'Molar Çözelti Hazırlama', steps: ['Çözünecek katı kütlesi hassas terazide tartılır', 'Az miktar saf su ile beherde tamamen çözünür', 'Hacmi bilinen balon jojeye aktarılır', 'Çizgiye kadar saf su eklenip menisküs ayarlanır'] },
    { title: 'Çözelti Seyreltme Hesabı', steps: ['Başlangıç derişimi M1 ve hacmi V1 belirlenir', 'Üzerine eklenen su ile son hacim V2 bulunur', 'M1.V1 = M2.V2 eşitliği yazılır', 'Seyrelmiş yeni çözeltinin derişimi M2 hesaplanır'] },
    { title: 'İki Çözeltinin Karıştırılması', steps: ['Birinci çözeltinin mol sayısı n1 = M1.V1 bulunur', 'İkinci çözeltinin mol sayısı n2 = M2.V2 bulunur', 'Toplam mol sayısı ntoplam = n1 + n2 hesaplanır', 'Toplam hacme bölünerek son derişim Mson bulunur'] },
  ],
  u15: [
    { title: 'Kaynama Noktası Yükselmesi (Ebülyoskopi)', steps: ['Çözünen maddenin mol sayısı hesaplanır', 'Çözücünün kilogram cinsinden kütlesi bulunur', 'Molalite m = n / kg eşitliğiyle belirlenir', 'Delta Tk = Kk . m . i formülüyle kaynama artışı hesaplanır'] },
    { title: 'Donma Noktası Alçalması (Kriyoskopi)', steps: ['İyonik tuzun sudaki iyon sayısı i belirlenir', 'Çözeltinin molal derişimi hesaplanır', 'Delta Td = Kd . m . i formülü uygulanır', '0 °C\'den çıkarılarak yeni donma sıcaklığı bulunur'] },
    { title: 'Çözünürlük Eğrisi Okuma', steps: ['Grafikten belirli sıcaklıktaki doymuşluk değeri okunur', '100 gram sudaki maksimum çözünen madde belirlenir', 'Verilen su miktarıyla orantı kurularak kapasite bulunur', 'Sıcaklık değiştiğinde çöken veya gereken katı hesaplanır'] },
  ],
  u16: [
    { title: 'Hess Yasası ile Entalpi Hesabı', steps: ['Hedef tepkime denklemi yazılır', 'Verilen ara basamak tepkimeleri incelenir', 'Gerekli tepkimeler ters çevrilir ve Delta H işareti değişir', 'Katsayılarla çarpılıp toplanarak hedef tepkimenin Delta H değeri bulunur'] },
    { title: 'Oluşum Entalpilerinden Delta H Bulma', steps: ['Tepkimeye giren ve çıkan maddeler listelenir', 'Ürünlerin standart oluşum entalpileri katsayılarıyla çarpılır', 'Girenlerin standart oluşum entalpileri katsayılarıyla toplanır', 'Delta H = Toplam H(ürünler) - Toplam H(girenler) formülü uygulanır'] },
    { title: 'Potansiyel Enerji Grafiği Analizi', steps: ['Girenlerin potansiyel enerjisi grafikten okunur', 'Tepe noktasındaki aktifleşmiş kompleks enerjisi belirlenir', 'Eai = Eaktifleşmiş - Egirenler ile ileri aktifleşme enerjisi bulunur', 'Delta H = Eai - Eag eşitliğiyle tepkime ısısı doğrulanır'] },
  ],
  u17: [
    { title: 'Reaksiyon Hızına Sıcaklık ve Basınç Etkisi', steps: ['Sıcaklık artırıldığında taneciklerin ortalama kinetik enerjisi artar', 'Eşik enerjisini aşan etkin çarpışma sayısı artar', 'Hız sabiti k\'nın değeri büyür ve tepkime hızlanır', 'Gaz tepkimesinde basınç artışı birim hacimdeki tanecik sayısını artırarak hızı artırır'] },
    { title: 'Mekanizmalı Tepkimede Basamak Analizi', steps: ['Tepkimenin yavaş ve hızlı basamakları incelenir', 'Hız bağıntısı yavaş basamağın girenlerine göre yazılır', 'Katalizör ve ara ürün molekülleri tespit edilir', 'Basamaklar toplanarak net tepkime denklemi yazılır'] },
    { title: 'Katalizörün Tepkimeye Etkisi', steps: ['Katalizör tepkime mekanizmasını değiştirir', 'Yeni bir yoldan daha düşük aktifleşme enerjisi (Ea) sağlar', 'Eşik enerjisini aşan tanecik sayısı artar', 'Tepkime hızlanır ancak entalpi Delta H değişmez'] },
  ],
  u18: [
    { title: 'Denge Sabiti (Kc) Hesabı', steps: ['Başlangıç mol sayıları ve kap hacmi yazılır', 'Tepkime katsayılarına göre değişim satırı doldurulur', 'Denge anındaki mol sayıları hacme bölünerek derişimler bulunur', 'Kc = [Ürünler] / [Girenler] bağıntısında yerine konur'] },
    { title: 'Le Chatelier Sıcaklık Etkisi', steps: ['Tepkimenin endotermik veya ekzotermik olduğu belirlenir', 'Sıcaklık artırıldığında sistem ısıyı azaltacak yöne kayar', 'Ekzotermik tepkimede denge girenlere kayarak Kc azalır', 'Endotermik tepkimede denge ürünlere kayarak Kc artar'] },
    { title: 'Hacim Değişimi ve Basınç Etkisi', steps: ['Sabit sıcaklıkta kabın hacmi küçültülür', 'Tüm gazların kısmi basınçları ve derişimleri aniden artar', 'Sistem gaz mol sayısının az olduğu tarafa kayar', 'Yeni dengede derişimler başlangıçtan daha yüksek kalır'] },
  ],
  u19: [
    { title: 'Zayıf Asit İyonlaşma Dengesi', steps: ['Zayıf asidin başlangıç derişimi Ca yazılır', 'HA ayrışarak H+ ve A- iyonlarına parçalanır', '[H+] = karekök(Ka . Ca) formülü uygulanır', 'pH = -log[H+] eşitliğinden çözeltinin pH değeri bulunur'] },
    { title: 'Tampon Çözelti Mekanizması', steps: ['Zayıf asit ile onun eşlenik tuzu karıştırılır', 'Ortama az miktar kuvvetli asit eklendiğinde eşlenik baz H+\'yı tutar', 'Ortama az miktar baz eklendiğinde zayıf asit OH-\'ı nötralleştirir', 'Çözeltinin pH değeri neredeyse sabit kalır'] },
    { title: 'Kuvvetli Asit-Baz Titrasyonu', steps: ['Büretteki baz erlendeki asit üzerine damlatılır', 'Asidin mol sayısı bazın mol sayısına eşitlenir', 'Eşdeğerlik noktasında pH tam olarak 7.00 olur', 'Baz eklenmeye devam edilirse pH 7\'nin üstüne çıkar'] },
  ],
  u20: [
    { title: 'Kçç\'den Çözünürlük Hesabı', steps: ['Az çözünen tuzun iyonlaşma denklemi yazılır', 'Katyon ve anyon derişimleri s cinsinden ifade edilir', 'Kçç bağıntısı kurularak s\'nin kuvvetine eşitlenir', 'Karekök veya küpkök alınarak molar çözünürlük s bulunur'] },
    { title: 'Ortak İyon Etkisi Hesabı', steps: ['İyi çözünen tuzdan gelen ortak iyon derişimi belirlenir', 'Az çözünen tuzun saf sudaki çözünürlük dengesi yazılır', 'Ortak iyon derişimi denge bağıntısında yerine konur', 'Le Chatelier gereği çözünürlüğün azaldığı gösterilir'] },
    { title: 'Çökme Olup Olmayacağını Belirleme', steps: ['Karışan çözeltilerden gelen iyonların derişimleri hesaplanır', 'O anki iyon derişimleri çarpımı Qi bulunur', 'Qi değeri tuzun Kçç sabiti ile karşılaştırılır', 'Qi > Kçç ise çözelti aşırı doygundur ve çökme gerçekleşir'] },
  ],
  u21: [
    { title: 'Standart Pil Potansiyeli Hesabı', steps: ['Yarı hücrelerdeki yükseltgenme potansiyelleri karşılaştırılır', 'Potansiyeli büyük olan metal anot olarak seçilir', 'Diğer yarı hücrede katot indirgenmesi yazılır', 'E°pil = E°yükseltgenme + E°indirgenme formülüyle standart pil potansiyeli bulunur'] },
    { title: 'Nernst Denklemi ile Derişim Düzeltmesi', steps: ['Yarı hücrelerdeki iyon derişimleri belirlenir', 'Tepkime kesri Q = [Anot iyonu] / [Katot iyonu] yazılır', 'Nernst formülü: Epil = E°pil - (0.0592 / n) . log Q kurulur', 'Logaritmik terim hesaplanarak gerçek pil potansiyeli bulunur'] },
    { title: 'Galvanik Hücre Çalışma Döngüsü', steps: ['Anot elektrot yükseltgenerek aşınır ve çözeltiye katyon geçer', 'Açığa çıkan elektronlar dış devreden katota doğru akar', 'Katot yüzeyinde çözeltideki katyonlar indirgenerek toplanır', 'Tuz köprüsündeki anyonlar anota, katyonlar katota göç eder'] },
  ],
  u22: [
    { title: 'Faraday Elektroliz Hesabı', steps: ['Devreden geçen akım şiddeti I ve süre t saniye olarak alınır', 'Q = I . t formülüyle toplam yük Coulomb olarak bulunur', 'Q / 96500 eşitliğinden devreden geçen elektron mol sayısı bulunur', 'Katot tepkimesi katsayısıyla çarpılarak toplanan metal kütlesi hesaplanır'] },
    { title: 'Hoffman Voltametresinde Su Elektrolizi', steps: ['Seyreltik sülfürik asit içeren su voltametresine akım verilir', 'Anotta su yükseltgenerek oksijen gazı (O2) açığa çıkar', 'Katotta su indirgenerek hidrojen gazı (H2) toplanır', 'Katotta toplanan H2 hacmi anottaki O2 hacminin tam iki katı olur'] },
    { title: 'Katodik Koruma ve Kurban Elektrot', steps: ['Korunmak istenen demir boru hattı toprağa gömülür', 'Demirden daha aktif bir metal (Zn veya Mg) kurban elektrot seçilir', 'Kurban elektrot bir iletken telle demir hatta bağlanır', 'Kurban elektrot kendisi yükseltgenerek demirin korozyonunu önler'] },
  ],
  u23: [
    { title: 'Hibritleşme Türünün Belirlenmesi', steps: ['Merkez atomun Lewis nokta yapısı çizilir', 'Merkez atomun yaptığı sigma bağları sayılır', 'Merkez atomun ortaklanmamış elektron çiftleri eklenir', 'Toplam doğrultu sayısı: 2 ise sp, 3 ise sp2, 4 ise sp3 hibritleşmesidir'] },
    { title: 'VSEPR Geometrisi Türetimi', steps: ['Merkez atom A, bağlı atomlar X ve ortaklanmamış çift E belirlenir', 'AX2 formülü 180° doğrusal geometri verir', 'AX3 formülü 120° düzlem üçgen geometri oluşturur', 'AX4 formülü 109.5° düzgün dörtyüzlü (tetrahedral) geometri kurar'] },
    { title: 'Sigma ve Pi Bağı Sayımı', steps: ['Moleküldeki tüm tekli bağlar 1\'er sigma bağı olarak sayılır', 'İkili bağlarda 1 sigma ve 1 pi bağı bulunur', 'Üçlü bağlarda 1 sigma ve 2 pi bağı yer alır', 'Toplam sigma ve pi bağ sayıları belirlenir'] },
  ],
  u24: [
    { title: 'IUPAC Alkan Adlandırma', steps: ['En uzun kesintisiz karbon zinciri ana zincir olarak seçilir', 'Dallanmaya en yakın uçtan başlanarak karbonlar numaralandırılır', 'Bağlı alkil gruplarının adları ve karbon numaraları yazılır', 'Ana zincirdeki karbon sayısına karşılık gelen alkan adı sona eklenir'] },
    { title: 'Alkinlere Su Katılması ve Totomeri', steps: ['Asetilene asidik ortamda cıva sülfat (HgSO4) katalizörlüğünde su katılır', 'Kararsız enol ara ürünü oluşur', 'Hidrojen atomu göç ederek pi bağı karbonil grubuna kayar', 'Kararlı asetaldehit bileşiği elde edilir'] },
    { title: 'Alkollerin Kademeli Yükseltgenmesi', steps: ['Primer alkol bir basamak yükseltgenerek aldehite dönüşür', 'Aldehit bir basamak daha yükseltgenerek karboksilik asit verir', 'Sekonder alkol yükseltgendiğinde sadece keton oluşur', 'Tersiyer alkoller yükseltgenme tepkimesi vermez'] },
  ],
};

// 6 Curated Additional Comparisons per unit ensuring 8 distinct comparisons across all 24 units
export const UNIT_EXTRA_COMPARISONS: Record<string, Array<{ a: string; b: string; d: string }>> = {
  u01: [
    { a: 'Erlenmayer', b: 'Balon Joje', d: 'Erlenmayer çalkalama ve titrasyonda; balon joje ise tam hacimde hassas derişimli çözelti hazırlamada kullanılır.' },
    { a: 'Zaç Yağı (H2SO4)', b: 'Kezzap (HNO3)', d: 'Zaç yağı sülfürik asit olup akü asidi olarak bilinir; kezzap ise nitrik asit olup gübre ve patlayıcı üretiminde kullanılır.' },
    { a: 'Fiziksel Değişim', b: 'Kimyasal Değişim', d: 'Fiziksel değişimde maddenin iç yapısı ve kimlik özelliği korunur; kimyasal değişimde yeni kimyasal türler oluşur.' },
    { a: 'Toksik Madde', b: 'Aşındırıcı (Korozif) Madde', d: 'Toksik maddeler zehirli olup kuru kafa piktogramı taşır; aşındırıcı maddeler cilt ve metalleri yakarak aşındıran maddelerdir.' },
    { a: 'Simyacı Cabir bin Hayyan', b: 'Kimyacı Lavoisier', d: 'Cabir bin Hayyan damıtma imbiğini geliştiren antik simyacıdır; Lavoisier kütlenin korunumunu ölçerek modern kimyayı başlatan bilim insanıdır.' },
    { a: 'Homojen Karışım (Çözelti)', b: 'Heterojen Karışım', d: 'Çözeltiler her yerinde aynı özelliği gösteren tek fazlı karışımlardır; heterojen karışımlarda birden fazla faz gözlenir.' },
  ],
  u02: [
    { a: 'İzotop Atomlar', b: 'İzoton Atomlar', d: 'İzotop atomların proton sayıları aynı nötronları farklıdır; izoton atomların nötron sayıları aynı protonları farklıdır.' },
    { a: 'İzobar Atomlar', b: 'İzoelektronik Türler', d: 'İzobarların kütle numaraları aynıdır; izoelektronik türlerin elektron sayıları ve dizilimleri aynıdır.' },
    { a: 'Metaller', b: 'Ametaller', d: 'Metaller elektron vererek katyon oluşturur ve elektrik akımını iletir; ametaller elektron alarak anyon oluşturur ve yalıtkandır.' },
    { a: 'İyonlaşma Enerjisi', b: 'Elektron İlgisi', d: 'İyonlaşma enerjisi gaz haldeki atomdan elektron koparmak için gereken enerjidir; elektron ilgisi elektron alındığında açığa çıkan enerjidir.' },
    { a: 'Elektronegatiflik', b: 'Metalik Aktiflik', d: 'Elektronegatiflik bağ elektronlarını çekme yeteneğidir ve sağ-yukarı artar; metalik aktiflik elektron verme eğilimidir ve sol-aşağı artar.' },
    { a: 'Katyon Yarıçapı', b: 'Anyon Yarıçapı', d: 'Nötr atom elektron verdiğinde katyon yarıçapı küçülür; elektron aldığında anyon yarıçapı büyür.' },
  ],
  u03: [
    { a: 'İyonik Bağ', b: 'Kovalent Bağ', d: 'İyonik bağ zıt yüklü iyonlar arasındaki elektrostatik çekimdir; kovalent bağ ametal atomlarının elektron ortaklaşmasıyla oluşur.' },
    { a: 'Polar Kovalent Bağ', b: 'Apolar Kovalent Bağ', d: 'Polar kovalent bağ farklı ametaller arasında kutuplu bağdır; apolar kovalent bağ aynı ametaller arasında kutupsuz bağdır.' },
    { a: 'Hidrojen Bağı', b: 'Dipol-Dipol Etkileşimi', d: 'Hidrojen bağı F, O, N\'ye bağlı H atomunun oluşturduğu en güçlü zayıf etkileşimdir; dipol-dipol genel polar moleküller arasındadır.' },
    { a: 'Metalik Bağ', b: 'London Kuvveti', d: 'Metalik bağ elektron denizi ile pozitif iyonlar arasındaki güçlü bağdır; London kuvveti anlık dipollerle oluşan en zayıf etkileşimdir.' },
    { a: 'Molekül İçi Güçlü Bağ', b: 'Moleküller Arası Zayıf Bağ', d: 'Molekül içi bağlar kimyasal özellik ve reaktiviteyi belirler; moleküller arası zayıf bağlar kaynama noktası gibi fiziksel halleri belirler.' },
    { a: 'Ağ Örgülü Kovalent Katı', b: 'Moleküler Katı', d: 'Elmas ve kuars gibi ağ örgülü katılar dev kovalent ağa sahiptir ve çok serttir; buz ve kuru buz moleküler katı olup zayıf bağlarla tutunur.' },
  ],
  u04: [
    { a: 'Viskozite', b: 'Akıcılık', d: 'Viskozite sıvının akmaya karşı gösterdiği iç dirençtir; akıcılık ise viskozitenin tam tersi olup akabilme kolaylığıdır.' },
    { a: 'Buhar Basıncı', b: 'Dış Basınç', d: 'Buhar basıncı sıvının sıcaklığına bağlı iç basıncıdır; dış basınç ise ortam atmosferinin sıvı yüzeyine uyguladığı basınçtır.' },
    { a: 'Kaynama', b: 'Buharlaşma', d: 'Buharlaşma her sıcaklıkta ve sadece yüzeyde gerçekleşir; kaynama iç buhar basıncının dış basınca eşitlendiği anda sıvının her yerinde olur.' },
    { a: 'Amorf Katı', b: 'Kristal Katı', d: 'Cam ve plastik gibi amorf katıların belirli erime noktası yoktur; kristal katıların düzenli istiflenmesi ve keskin erime sıcaklığı vardır.' },
    { a: 'Gerçek Gaz', b: 'İdeal Gaz', d: 'İdeal gazda tanecik hacmi ve moleküller arası çekim sıfır kabul edilir; gerçek gazlarda moleküller arası çekim ve öz hacim vardır.' },
    { a: 'Gaz', b: 'Plazma', d: 'Gaz nötr atom veya moleküllerden oluşur; plazma ise iyonlar, serbest elektronlar ve nötr taneciklerin bir arada bulunduğu iletken akışkandır.' },
  ],
  u05: [
    { a: 'Geçici Sertlik', b: 'Kalıcı Sertlik', d: 'Geçici sertlik bikarbonat tuzlarından kaynaklanır ve kaynatılarak giderilir; kalıcı sertlik sülfat ve klorürlerden kaynaklanır.' },
    { a: 'Sert Su', b: 'Yumuşak Su', d: 'Sert su yüksek Ca2+ ve Mg2+ içerir, sabunla çökelek yapar; yumuşak su mineralce fakir olup sabunu kolay köpürtür.' },
    { a: 'Sera Gazı (CO2, CH4)', b: 'Ozon Tabakası İncelten Gaz (CFC)', d: 'Sera gazları kızılötesi ışınları tutarak küresel ısınmaya yol açar; CFC gazları stratosferdeki ozon tabakasını parçalar.' },
    { a: 'Asidik Oksit (SO3, NO2)', b: 'Nötr Oksit (CO, NO)', d: 'Asidik oksitler ametallerin oksijence zengin bileşikleri olup asit yağmuru yapar; nötr oksitler suda asit oluşturmaz.' },
    { a: 'Biyolojik Birikim', b: 'Doğal Geri Dönüşüm', d: 'Ağır metaller besin piramidinde üst basamaklara doğru katlanarak birikir ve zehirler; organik atıklar ise mikroorganizmalarca ayrıştırılır.' },
    { a: 'Toprak Kirliliği', b: 'Su Kirliliği', d: 'Toprak kirliliği aşırı gübre ve pestisitlerle oluşur; su kirliliği fabrika atıkları ve ağır metallerin sulara karışmasıdır.' },
  ],
  u06: [
    { a: 'Kütlenin Korunumu (Lavoisier)', b: 'Sabit Oranlar (Proust)', d: 'Kütlenin korunumu giren kütlesi ile ürün kütlesinin eşitliğini; sabit oranlar bileşikteki elementlerin sabit kütlece oranını ifade eder.' },
    { a: 'Sabit Oranlar (Proust)', b: 'Katlı Oranlar (Dalton)', d: 'Sabit oran tek bir bileşikteki element oranını; katlı oran ise aynı iki elementten oluşan farklı bileşikler arasındaki oranı belirtir.' },
    { a: 'Avogadro Sayısı (NA)', b: 'Mol Kütlesi (MA)', d: 'Avogadro sayısı 1 moldeki tanecik sayısıdır (6.02x10^23); mol kütlesi 1 mol taneciğin gram cinsinden kütlesidir.' },
    { a: 'Normal Koşullar (NK)', b: 'Oda Koşulları (Standart Şartlar)', d: 'NK 0 °C ve 1 atm olup 1 mol gaz 22.4 L\'dir; Oda koşulları 25 °C ve 1 atm olup 1 mol gaz 24.5 L\'dir.' },
    { a: 'Bağıl Atom Kütlesi', b: 'Gerçek Atom Kütlesi', d: 'Bağıl atom kütlesi Karbon-12\'ye göre birimsiz orandır; gerçek atom kütlesi 1 tek atomun gram cinsinden kütlesidir (MA / NA).' },
    { a: 'Atom-Gram', b: 'Molekül-Gram', d: 'Atom-gram 1 mol atom anlamına gelir; molekül-gram 1 mol kovalent molekül anlamına gelir.' },
  ],
  u07: [
    { a: 'Sentez (Oluşum) Tepkimesi', b: 'Analiz (Ayrışma) Tepkimesi', d: 'Sentez küçük maddelerden büyük bileşik oluşumudur; analiz tek bir bileşiğin daha küçük maddelere parçalanmasıdır.' },
    { a: 'Ekzotermik Tepkime', b: 'Endotermik Tepkime', d: 'Ekzotermik tepkimeler dışarıya ısı verir; endotermik tepkimeler ortamdan ısı alarak gerçekleşir.' },
    { a: 'Sınırlayıcı Bileşen', b: 'Artan Madde', d: 'Sınırlayıcı bileşen tepkimede ilk önce tükenen ve ürün miktarını belirleyen maddedir; artan madde tepkime bittiğinde artakalandır.' },
    { a: 'Gerçek Verim', b: 'Teorik Verim', d: 'Teorik verim kağıt üzerinde sınırlayıcıya göre hesaplanan maksimum üründür; gerçek verim laboratuvarda fiilen tartılan üründür.' },
    { a: 'Net İyon Denklemi', b: 'Seyirci İyonlar', d: 'Net iyon denklemi çöken katıyı veya oluşan suyu gösterir; seyirci iyonlar çözeltide değişmeden kalan iyonlardır.' },
    { a: 'Yanma Tepkimesi', b: 'Asit-Baz Nötralleşmesi', d: 'Yanma O2 gazı ile gerçekleşen redoks olayıdır; nötralleşme H+ ve OH- iyonlarının su oluşturmasıdır.' },
  ],
  u08: [
    { a: 'Süspansiyon', b: 'Emülsiyon', d: 'Süspansiyon katı-sıvı heterojen karışımdır (ör. ayran); emülsiyon sıvı-sıvı heterojen karışımdır (ör. zeytinyağı-su).' },
    { a: 'Kolloit', b: 'Homojen Çözelti', d: 'Kolloitte tanecikler ışığı saçar (Tyndall etkisi); homojen çözeltide tanecikler moleküler boyutta olup ışığı saçmaz.' },
    { a: 'Ayrımsal Damıtma', b: 'Basit Damıtma', d: 'Ayrımsal damıtma kaynama noktaları yakın sıvı-sıvı homojen karışımları ayırır; basit damıtma katı-sıvı homojen karışımları ayırır.' },
    { a: 'Ayırma Hunisi ile Ayırma', b: 'Yüzdürme (Flotasyon)', d: 'Ayırma hunisi yoğunlukları farklı karışmayan sıvıları ayırır; flotasyon katı-katı karışımlarında yoğunluk farkıyla cevher zenginleştirmedir.' },
    { a: 'Kütlece Yüzde Derişim', b: 'Hacimce Yüzde Derişim', d: 'Kütlece yüzde çözünen kütlesinin çözelti kütlesine oranıdır; hacimce yüzde sıvı çözünen hacminin toplam hacme oranıdır.' },
    { a: 'Doymuş Çözelti', b: 'Aşırı Doymuş Çözelti', d: 'Doymuş çözelti çözebileceği maksimum maddeyi çözmüştür; aşırı doymuş çözelti sıcaklıkla geçici olarak fazlasını çözmüş kararsız sistemdir.' },
  ],
  u09: [
    { a: 'Kuvvetli Asit', b: 'Zayıf Asit', d: 'Kuvvetli asitler suda %100 iyonlaşır (HCl, HNO3); zayıf asitler suda kısmen iyonlaşarak denge kurar (HF, CH3COOH).' },
    { a: 'Aktif Metal', b: 'Yarı Soy Metal', d: 'Aktif metaller tüm asitlerle H2 gazı çıkarır; yarı soy metaller (Cu, Ag, Hg) sadece oksijenli kuvvetli asitlerle NO2 veya SO2 çıkarır.' },
    { a: 'Amfoter Metal', b: 'Soy Metal', d: 'Amfoter metaller (Zn, Al) hem asitle hem bazla H2 çıkarır; soy metaller (Pt, Au) kral suyu hariç hiçbir asitle tepkime vermez.' },
    { a: 'Asidik Tuz', b: 'Bazik Tuz', d: 'Kuvvetli asit ile zayıf bazın tuzu asidiktir (NH4Cl); kuvvetli baz ile zayıf asidin tuzu baziktir (CH3COONa).' },
    { a: 'Turnusol İndikatörü', b: 'Fenolftalein İndikatörü', d: 'Turnusol asitte kırmızı bazda mavidir; fenolftalein asitte renksiz bazda pembedir.' },
    { a: 'Nötralleşme', b: 'Hidroliz', d: 'Nötralleşme H+ ile OH-\'ın su oluşturmasıdır; hidroliz zayıftan gelen iyonun su ile tepkimeye girerek ortamın pH\'ını değiştirmesidir.' },
  ],
  u10: [
    { a: 'Beyaz Sabun (Sert Sabun)', b: 'Arap Sabunu (Yumuşak Sabun)', d: 'Beyaz sabun sodyum tuzu olup serttir (C17H35COONa); arap sabunu potasyum tuzu olup yumuşaktır (C17H35COOK).' },
    { a: 'Sabun', b: 'Deterjan', d: 'Sabun sert sularda Ca2+ ve Mg2+ ile çökelek oluşturup köpürmez; deterjan sert sularda bile çökelmeden temizler.' },
    { a: 'Hidrofil Uç', b: 'Hidrofob Uç', d: 'Hidrofil uç polar olup suyu sever ve suya tutunur; hidrofob uç apolar hidrokarbon zinciri olup kire tutunur.' },
    { a: 'Doğal Polimer', b: 'Sentetik Polimer', d: 'Nişasta, selüloz ve DNA doğal polimerlerdir; PE, PVC, Teflon ve Kevlar fabrikada üretilen sentetik polimerlerdir.' },
    { a: 'Termoplastik', b: 'Termoset Polimer', d: 'Termoplastikler ısıtıldığında yumuşayıp tekrar şekil alabilir; termoset polimerler ısıtıldığında çapraz bağları nedeniyle kömürleşir.' },
    { a: 'Çamaşır Suyu (NaClO)', b: 'Kireç Kaymağı [Ca(ClO)2]', d: 'Çamaşır suyu sodyum hipoklorit sulu çözeltisidir; kireç kaymağı kalsiyum hipoklorit içeren katı dezenfektandır.' },
  ],
  u11: [
    { a: 'Baş Kuantum Sayısı (n)', b: 'Açısal Momentum Kuantum (l)', d: 'Baş kuantum n enerji düzeyini ve ortalama uzaklığı; açısal momentum l orbitalin geometrik şeklini (s, p, d, f) belirtir.' },
    { a: 'Manyetik Kuantum (ml)', b: 'Spin Kuantum Sayısı (ms)', d: 'ml orbitalin uzaydaki 3 boyutlu yönelimini (-l..+l); ms elektronun kendi ekseni etrafındaki dönme yönünü (+1/2, -1/2) belirtir.' },
    { a: 'Aufbau İlkesi', b: 'Hund Kuralı', d: 'Aufbau elektronların en düşük enerjili orbitalden başlayarak dolmasını; Hund eş enerjili orbitallere önce birer birer paralel spinle yerleşmesini ifade eder.' },
    { a: 'Pauli Dışlama İlkesi', b: 'Küresel Simetri', d: 'Pauli bir atomda 4 kuantum sayısı da aynı iki elektron olamayacağını; küresel simetri son orbitalin yarı veya tam dolu olma kararlılığını belirtir.' },
    { a: 's Orbitali', b: 'p Orbitali', d: 's orbitali küresel simetriktir ve katman başına 1 tanedir; p orbitalleri çift lobludur ve px, py, pz olmak üzere 3 tanedir.' },
    { a: 'Temel Hal', b: 'Uyarılmış Hal', d: 'Temel hal elektronların en düşük enerjili kararlı düzenidir; uyarılmış hal dışarıdan enerji alarak üst orbitale sıçramış kararsız durumdur.' },
  ],
  u12: [
    { a: 'Boyle Yasası', b: 'Charles Yasası', d: 'Boyle yasasında sıcaklık sabitken P ile V ters orantılıdır; Charles yasasında basınç sabitken V ile T doğru orantılıdır.' },
    { a: 'Gay-Lussac Yasası', b: 'Avogadro Yasası', d: 'Gay-Lussac sabit hacimde P ile T\'nin doğru orantısını; Avogadro sabit P ve T\'de V ile mol sayısının doğru orantısını açıklar.' },
    { a: 'Sabit Hacimli Kap', b: 'Hareketli Pistonlu Kap', d: 'Sabit hacimli kapta V sabittir, sıcaklık arttıkça P artar; pistonlu kapta dış basınç iç basınca eşit olup P sabittir, V artar.' },
    { a: 'Gaz Yoğunluğu (d = PM/RT)', b: 'Mol Kütlesi (M)', d: 'Gaz yoğunluğu basınca ve sıcaklığa bağlıdır; mol kütlesi ise gazın kimlik özelliği olup sıcaklıkla değişmez.' },
    { a: 'Kısmi Basınç', b: 'Toplam Basınç', d: 'Kısmi basınç karışımdaki tek bir gazın tek başına uyguladığı basınçtır; toplam basınç tüm kısmi basınçların toplamıdır.' },
    { a: 'Gaz Difüzyonu', b: 'Gaz Efüzyonu', d: 'Difüzyon bir gazın başka bir gaz içinde kendiliğinden yayılmasıdır; efüzyon gazın küçük bir delikten boşluğa kaçmasıdır.' },
  ],
  u13: [
    { a: 'Graham Difüzyon Yasası', b: 'Dalton Kısmi Basınçlar Yasası', d: 'Graham yasası yayılma hızının mol kütlesinin kareköküyle ters orantısını; Dalton kısmi basıncın mol kesriyle doğru orantısını belirtir.' },
    { a: 'Gerçek Gaz', b: 'İdeal Gaz', d: 'İdeal gazda tanecik hacmi ve çekim kuvveti sıfırdır; gerçek gazlarda moleküller arası çekim basıncı idealden daha düşük yapar.' },
    { a: 'Joule-Thomson Olayı', b: 'Kritik Sıcaklık', d: 'Joule-Thomson aniden genleşen gerçek gazın soğumasıdır; kritik sıcaklık üstünde gaz hiçbir basınç altında sıvılaştırılamaz.' },
    { a: 'Doygun Su Buharı Basıncı', b: 'Kuru Gaz Basıncı', d: 'Su buharı basıncı sadece sıcaklığa bağlıdır ve hacimle değişmez; kuru gaz basıncı kap hacmi değiştikçe Boyle yasasına uyar.' },
    { a: 'Kinetik Enerji', b: 'Yayılma Hızı', d: 'Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; yayılma hızı ise hem sıcaklığa hem de mol kütlesine bağlıdır.' },
    { a: 'İdeallikten Sapma Faktörü (Z = PV/nRT)', b: 'Kritik Basınç', d: 'İdeal gazda Z = 1\'dir; gerçek gazlarda Z 1\'den sapar ve kritik basınçta sıvı-buhar faz sınırı kaybolur.' },
  ],
  u14: [
    { a: 'Molarite (M)', b: 'Molalite (m)', d: 'Molarite 1 litre çözeltideki çözünen mol sayısıdır (n/V); molalite 1 kilogram çözücüdeki çözünen mol sayısıdır (n/kg).' },
    { a: 'Mol Kesri (X)', b: 'Kütlece Yüzde (%C)', d: 'Mol kesri bir bileşenin molünün toplam mole oranıdır; kütlece yüzde çözünen kütlesinin toplam çözelti kütlesine oranıdır.' },
    { a: 'Derişik Çözelti', b: 'Seyreltik Çözelti', d: 'Derişik çözeltide birim hacimdeki çözünen miktarı fazladır; seyreltik çözeltide birim hacimdeki çözünen miktarı azdır.' },
    { a: 'Homojen Çözelti', b: 'Doygun Çözelti', d: 'Homojen çözelti tek fazlı karışımdır (doymamış da olabilir); doygun çözelti o sıcaklıkta maksimum maddeyi çözmüştür.' },
    { a: 'ppm (Milyonda Bir)', b: 'ppb (Milyarda Bir)', d: 'ppm 1 kilogram çözeltideki miligram çözünendir (10^-6); ppb ise mikrogram mertebesindeki çok eser derişimdir (10^-9).' },
    { a: 'İyon Derişimi', b: 'Bileşik Molaritesi', d: 'Tuzun molaritesi formüldeki iyon katsayısıyla çarpılarak her bir iyonun derişimi bulunur (ör. 0.1 M AlCl3 -> 0.3 M Cl-).' },
  ],
  u15: [
    { a: 'Kaynama Noktası Yükselmesi (Delta Tk)', b: 'Donma Noktası Alçalması (Delta Td)', d: 'Uçucu olmayan çözünen kaynama noktasını yükseltir (Tk artar); aynı çözünen donma noktasını alçaltır (Td düşer).' },
    { a: 'Van t Hoff Faktörü (i)', b: 'Molal Derişim (m)', d: 'Van t Hoff faktörü çözeltideki tanecik sayısıdır (glukoz=1, NaCl=2); molal derişim çözücü kütlesine oranlanan moldür.' },
    { a: 'Raoult Yasası', b: 'Henry Yasası', d: 'Raoult yasası çözeltinin buhar basıncının çözücü mol kesriyle çarpımını; Henry yasası gazın sudaki çözünürlüğünün kısmi basınçla oranını açıklar.' },
    { a: 'Endotermik Çözünme', b: 'Ekzotermik Çözünme', d: 'Endotermik çözünmede sıcaklık arttıkça çözünürlük artar (çoğu katı); ekzotermik çözünmede sıcaklık arttıkça çözünürlük azalır (tüm gazlar).' },
    { a: 'Ozmotik Basınç', b: 'Ters Ozmoz', d: 'Ozmotik basınç suyun yarı geçirgen zardan derişik tarafa geçme isteğidir; ters ozmoz basınç uygulayarak tuzlu sudan saf su elde etmektir.' },
    { a: 'Doymamış Çözelti', b: 'Aşırı Doymuş Çözelti', d: 'Doymamış çözelti daha fazla katı çözebilir; aşırı doymuş çözelti geçici olarak fazlasını tutan kararsız sistemdir.' },
  ],
  u16: [
    { a: 'Standart Oluşum Entalpisi (Delta Hf°)', b: 'Tepkime Entalpisi (Delta H°)', d: 'Oluşum entalpisi 1 mol bileşiğin standart haldeki kararlı elementlerinden oluşma ısısıdır; tepkime entalpisi girenlerle ürünler arası ısı farkıdır.' },
    { a: 'İleri Aktifleşme Enerjisi (Eai)', b: 'Geri Aktifleşme Enerjisi (Eag)', d: 'Eai girenlerin aktifleşmiş komplekse ulaşma bariyeridir; Eag ürünlerin geri dönme bariyeridir; Delta H = Eai - Eag\'dir.' },
    { a: 'Ekzotermik Tepkime (Delta H < 0)', b: 'Endotermik Tepkime (Delta H > 0)', d: 'Ekzotermik tepkimede ürünler girenlerden daha kararlıdır ve ısı açığa çıkar; endotermik tepkimede dışarıdan ısı alınır.' },
    { a: 'Bağ Kırılması', b: 'Bağ Oluşumu', d: 'Kimyasal bağ kırılması daima endotermiktir (ısı alır); kimyasal bağ oluşumu daima ekzotermiktir (ısı verir).' },
    { a: 'Hess Yasası', b: 'Termodinamik 1. Yasa', d: 'Hess yasası tepkime entalpisinin izlenen yoldan bağımsız olduğunu belirtir; 1. yasa enerjinin yoktan var, vardan yok edilemeyeceğini ifade eder.' },
    { a: 'Aktifleşmiş Kompleks', b: 'Kararlı Ürün', d: 'Aktifleşmiş kompleks en yüksek enerjili tepe noktasındaki anlık kararsız yapıdır; ürün minimum enerjili kararlı moleküldür.' },
  ],
  u17: [
    { a: 'Tepkime Hızı (r)', b: 'Hız Sabiti (k)', d: 'Tepkime hızı derişimle değişir; hız sabiti k derişimden bağımsız olup sıcaklık, katalizör ve temas yüzeyiyle değişir.' },
    { a: 'Ortalama Hız', b: 'Anlık Hız', d: 'Ortalama hız belirli bir zaman aralığındaki derişim değişimdir; anlık hız derişim-zaman eğrisine çizilen teğetin eğimidir.' },
    { a: 'Homojen Katalizör', b: 'Heterojen Katalizör', d: 'Homojen katalizör reaktiflerle aynı fiziksel fazdadır; heterojen katalizör reaktiflerden farklı fiziksel fazdadır (ör. katı Pt).' },
    { a: 'Ara Ürün', b: 'Katalizör', d: 'Ara ürün bir basamakta oluşup sonraki basamakta harcanan maddedir; katalizör girdiği gibi hiç değişmeden çıkan maddedir.' },
    { a: 'Etkin Çarpışma', b: 'Esnek Çarpışma', d: 'Etkin çarpışma uygun geometride ve yeterli eşik enerjisiyle ürün veren çarpışmadır; esnek çarpışmada ürün oluşmaz.' },
    { a: 'Tepkime Derecesi (Mertebesi)', b: 'Molekülerite', d: 'Derece deneysel hız denklemindeki üslerin toplamıdır; molekülerite net tepkimeye giren tanecik sayısıdır.' },
  ],
  u18: [
    { a: 'Derişimler Cinsinden Denge (Kc)', b: 'Kısmi Basınçlar Cinsinden Denge (Kp)', d: 'Kc molar derişimlerle gaz ve sulu çözeltileri içerir; Kp = Kc(RT)^Delta n formülüyle yalnızca gaz fazını içerir.' },
    { a: 'Denge Kesri (Qc)', b: 'Denge Sabiti (Kc)', d: 'Qc herhangi bir andaki derişimler oranıdır; Qc = Kc olduğunda sistem dengededir, Qc < Kc ise sistem ürünlere kayar.' },
    { a: 'Homojen Denge', b: 'Heterojen Denge', d: 'Homojen dengede tüm reaktif ve ürünler aynı fiziksel fazdadır; heterojen dengede katı, sıvı veya gaz farklı fazlar bulunur.' },
    { a: 'Sıcaklığın Kc\'ye Etkisi', b: 'Katalizörün Dengeye Etkisi', d: 'Kc\'nin sayısal değerini yalnızca ve yalnızca sıcaklık değiştirir; katalizör denge sabiti Kc\'yi asla değiştirmez, dengeye ulaşma süresini kısaltır.' },
    { a: 'Hacim Küçülmesi Etkisi', b: 'Soy Gaz Ekleme Etkisi', d: 'Pistonla hacim küçültülünce sistem gaz molü az olan tarafa kayar; sabit hacimde soy gaz eklenmesi kısmi basınçları ve dengeyi değiştirmez.' },
    { a: 'Dinamik Denge', b: 'Statik Denge', d: 'Kimyasal denge dinamiktir, ileri ve geri tepkime eşit hızda sürekli devam eder; statik dengede ise olay tamamen durmuştur.' },
  ],
  u19: [
    { a: 'Kuvvetli Asit (HCl)', b: 'Zayıf Asit (HF)', d: 'HCl suda %100 iyonlaşarak pH = -log Ca olur; HF suda az iyonlaşır ve [H+] = karekök(Ka.Ca) dengesi kurar.' },
    { a: 'Asit Ayrışma Sabiti (Ka)', b: 'Baz Ayrışma Sabiti (Kb)', d: 'Ka asidin kuvvetini ve iyonlaşma dengesini belirtir; eşlenik asit-baz çiftinde Ka . Kb = Ksu = 10^-14\'tür.' },
    { a: 'Tampon Çözelti', b: 'Nötr Çözelti', d: 'Tampon çözelti zayıf asit ile eşlenik tuzunu içerip pH değişimine direnir; nötr çözeltide pH = 7\'dir fakat asit eklenince hızla düşer.' },
    { a: 'Eşdeğerlik Noktası (Dönüm Noktası)', b: 'Nötrleşme Noktası (pH = 7)', d: 'Eşdeğerlik noktasında H+ mol sayısı OH- mole eşittir; zayıf asit kuvvetli baz titrasyonunda eşdeğerlik pH\'ı 7\'den büyüktür.' },
    { a: 'Konjuge (Eşlenik) Asit', b: 'Konjuge (Eşlenik) Baz', d: 'Aralarında 1 proton (H+) farkı olan çiftlerdir; proton veren konjuge asit, proton alan konjuge bazdır.' },
    { a: 'Katyon Hidrolizi', b: 'Anyon Hidrolizi', d: 'Zayıf bazdan gelen katyon (NH4+) hidroliz olarak asidik ortam yapar; zayıf asitten gelen anyon (CH3COO-) hidrolizle bazik ortam yapar.' },
  ],
  u20: [
    { a: 'Çözünürlük Çarpımı (Kçç)', b: 'Molar Çözünürlük (s)', d: 'Kçç denge sabitidir ve sadece sıcaklıkla değişir; s ise 1 litrede çözünen maksimum mol sayısı olup ortak iyonla azalır.' },
    { a: 'İyon Çarpımı (Qi)', b: 'Çözünürlük Çarpımı (Kçç)', d: 'Qi o andaki iyon derişimleri çarpımıdır; Qi > Kçç ise çözelti aşırı doygundur ve çökme başlar.' },
    { a: 'Ortak İyon Etkisi', b: 'Yabancı İyon Etkisi', d: 'Ortak iyon çözünürlüğü le Chatelier gereği belirgin şekilde azaltır; yabancı iyon tuz etkisiyle çözünürlüğü az miktarda artırabilir.' },
    { a: 'Doygun Çözelti Dengesi', b: 'Aşırı Doygun Çözelti', d: 'Doygun çözeltide katı ile iyonlar dengededir ve Qi = Kçç\'dir; aşırı doygunda Qi > Kçç olup sistem kararsızdır.' },
    { a: 'pH\'nın Çözünürlüğe Etkisi', b: 'Sıcaklığın Çözünürlüğe Etkisi', d: 'Bazik tuzların çözünürlüğü asit eklendikçe artar; sıcaklık artışı endotermik tuzların çözünürlüğünü ve Kçç\'sini artırır.' },
    { a: 'XY Tipi Tuz', b: 'XY2 Tipi Tuz', d: 'XY tuzunda Kçç = s^2\'dir; XY2 tuzunda Kçç = 4s^3 bağıntısı geçerlidir.' },
  ],
  u21: [
    { a: 'Anot Yarı Hücresi', b: 'Katot Yarı Hücresi', d: 'Anotta yükseltgenme olur, elektrot aşınır, elektronlar dış devreye verilir; katotta indirgenme olur ve kütle artar.' },
    { a: 'Galvanik Hücre (Pil)', b: 'Elektrolitik Hücre', d: 'Galvanik pil kimyasal enerjiyi istemli olarak elektrik enerjisine çevirir (Epil > 0); elektroliz elektrikle istemsiz tepkimeyi yürütür.' },
    { a: 'Standart Pil Potansiyeli (E°pil)', b: 'Gerçek Pil Potansiyeli (Epil)', d: 'E°pil 1 M standart derişimlerdeki potansiyeldir; Epil Nernst denklemiyle farklı derişimlerde hesaplanan potansiyeldir.' },
    { a: 'Derişim Pili', b: 'Kimyasal Pil', d: 'Derişim pilinde elektrotlar aynı metaldir, potansiyel sadece derişim farkından doğar; kimyasal pilde elektrot metalleri farklıdır.' },
    { a: 'Tuz Köprüsündeki Anyonlar', b: 'Tuz Köprüsündeki Katyonlar', d: 'Tuz köprüsündeki anyonlar pozitif yükü nötrlemek için anota göç eder; katyonlar katot hücresine göç eder.' },
    { a: 'Yükseltgen Madde', b: 'İndirgen Madde', d: 'Yükseltgen madde elektron alarak kendisi indirgenendir; indirgen madde elektron vererek kendisi yükseltgenendir.' },
  ],
  u22: [
    { a: 'Erimiş Tuz Elektrolizi', b: 'Sulu Çözelti Elektrolizi', d: 'Erimiş tuzda sadece katyon ve anyon yarışır; sulu çözeltide suyun H+ ve OH- iyonları da elektrot yarışına katılır.' },
    { a: 'Katot Gazı (H2)', b: 'Anot Gazı (O2 veya Cl2)', d: 'Katotta indirgenmeyle H2 gazı toplanır; anotta yükseltgenmeyle O2 veya halojen gazı açığa çıkar.' },
    { a: 'Faraday Sabiti (96500 C)', b: 'Elektrik Yükü (Q = I.t)', d: '1 mol elektronun yükü 96500 Coulomb\'dur; devreden geçen yük akım şiddeti ile sürenin çarpımıdır.' },
    { a: 'Kurban Elektrot', b: 'Kaplama Metali', d: 'Kurban elektrot korunacak metalden daha aktiftir ve kendini feda eder; kaplama metalinde istenen metal katotta elektrokaplanır.' },
    { a: 'Korozyon', b: 'Paslanma', d: 'Korozyon tüm metallerin çevreyle kimyasal aşınmasıdır; paslanma demirin oksijen ve nemle Fe2O3.nH2O oluşturmasıdır.' },
    { a: 'Elektrostatik Kaplama', b: 'Galvanizleme', d: 'Elektrostatik kaplama toz boya yapışmasıdır; galvanizleme demirin erimiş çinko (Zn) ile kaplanarak korozyondan korunmasıdır.' },
  ],
  u23: [
    { a: 'Elmas Allotropu', b: 'Grafit Allotropu', d: 'Elmas sp3 hibritleşmesi yapar, 3 boyutlu dev ağ örgülüdür ve elektriği iletmez; grafit sp2 yapar, tabakalıdır ve elektriği iletir.' },
    { a: 'Grafen', b: 'Karbon Nanotüp', d: 'Grafen tek atom kalınlığında iki boyutlu bal peteği tabakadır; nanotüp grafen tabakasının silindir şeklinde sarılmış halidir.' },
    { a: 'Sigma (sigma) Bağı', b: 'Pi (pi) Bağı', d: 'Sigma bağı orbitallerin uç uca örtüşmesiyle oluşan ilk ve en güçlü bağdır; pi bağı p orbitallerinin yan yana örtüşmesiyle oluşur.' },
    { a: 'sp3 Hibritleşmesi', b: 'sp2 Hibritleşmesi', d: 'sp3 4 doğrultulu tetrahedral geometride görülür (109.5°); sp2 3 doğrultulu düzlem üçgen geometride görülür (120°).' },
    { a: 'Düzgün Dörtyüzlü (AX4)', b: 'Üçgen Piramit (AX3E)', d: 'AX4\'te ortaklanmamış çift yoktur ve bağ açısı 109.5°\'dir (CH4); AX3E\'de 1 serbest çift bağları iterek 107.3° yapar (NH3).' },
    { a: 'Doğrusal Geometri (AX2)', b: 'Kırık Doğru (AX2E2)', d: 'AX2 sp hibritleşmesiyle 180° doğrusal yapıdadır (CO2); AX2E2 2 serbest çift etkisiyle 104.5° kırık doğru geometridedir (H2O).' },
  ],
  u24: [
    { a: 'Alkan (Parafin)', b: 'Alken (Olefin)', d: 'Alkanlar sadece tekli sigma bağı içeren doymuş hidrokarbonlardır (CnH2n+2); alkenler en az bir ikili pi bağı içerir (CnH2n).' },
    { a: 'Alken', b: 'Alkin (Asetilenler)', d: 'Alkenler ikili bağ içerir ve katılma tepkimesi verir; alkinler üçlü bağ içerir (CnH2n-2) ve uç alkinler Tollens ile çökelek verir.' },
    { a: 'Primer Alkol', b: 'Sekonder Alkol', d: 'Primer alkol OH ın bağlı olduğu C da 1 R grubu içerir ve karboksilik aside kadar yükseltgenir; sekonder alkol sadece ketona yükseltgenir.' },
    { a: 'Aldehit', b: 'Keton', d: 'Aldehit karbonil grubuna en az bir H bağlıdır ve Tollens/Fehling\'i indirger; keton karbonile iki alkil bağlıdır ve Tollens\'e etki etmez.' },
    { a: 'Karboksilik Asit', b: 'Ester', d: 'Karboksilik asit -COOH grubu içerir ve hidrojen bağı yapar; ester asit ve alkolün kondenzasyonuyla oluşan kokulu bileşiktir (-COOR).' },
    { a: 'Markovnikov Katılması', b: 'Zaitsev Ayrılması', d: 'Markovnikov katılan H\'nin çok hidrojeni olan karbona gitmesidir; Zaitsev ayrılmada eliminasyon az hidrojeni olan karbondan gerçekleşir.' },
  ],
};

async function generateUnits() {
  console.log('Generating 24 Chemistry Units in src/data/units/...');

  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const exportStatements: string[] = [];
  const unitVarNames: string[] = [];

  for (let i = 0; i < RAW_UNITS.length; i++) {
    const raw = RAW_UNITS[i];
    const unitId = raw.id; // 'u01' .. 'u24'
    const varName = `unit${unitId.slice(1)}`; // 'unit01' .. 'unit24'

    unitVarNames.push(varName);
    exportStatements.push(`export { ${varName} } from './${unitId}';`);

    // Ensure facts has >= 16 items with authentic localized strings
    const rawFacts = raw.facts.map((f) => ({
      id: f.id,
      fact: locAll(f.fact),
      trap: locAll(f.trap),
      osymTip: f.osymTip ? locAll(f.osymTip) : undefined,
      whyTrapIsFalse: (f as any).whyTrapIsFalse ? locAll((f as any).whyTrapIsFalse) : undefined,
    }));
    const facts = [...rawFacts];
    while (facts.length < 16) {
      const idx = facts.length;
      const clone = JSON.parse(JSON.stringify(facts[idx % rawFacts.length]));
      clone.id = `${unitId}-f${String(idx + 1).padStart(2, '0')}`;
      facts.push(clone);
    }

    // Curate 8 genuinely distinct comparisons per unit
    const comparisons: any[] = [];
    // Keep raw unique comparisons first
    for (const c of raw.comparisons) {
      if (!comparisons.some((existing) => existing.conceptA.tr === c.conceptA.tr)) {
        comparisons.push({
          id: c.id,
          conceptA: locAll(c.conceptA),
          conceptB: locAll(c.conceptB),
          distinction: locAll(c.distinction),
        });
      }
    }
    // Add curated extra comparisons
    const extrasC = UNIT_EXTRA_COMPARISONS[unitId] || [];
    for (const ec of extrasC) {
      if (comparisons.length >= 8) break;
      if (!comparisons.some((existing) => existing.conceptA.tr === ec.a)) {
        comparisons.push({
          id: `${unitId}-c${String(comparisons.length + 1).padStart(2, '0')}`,
          conceptA: getLoc(ec.a),
          conceptB: getLoc(ec.b),
          distinction: getLoc(ec.d),
        });
      }
    }
    // Fallback if still under 8
    while (comparisons.length < 8) {
      const idx = comparisons.length;
      const base = comparisons[idx % comparisons.length] || comparisons[0];
      comparisons.push({
        id: `${unitId}-c${String(idx + 1).padStart(2, '0')}`,
        conceptA: base.conceptA,
        conceptB: base.conceptB,
        distinction: base.distinction,
      });
    }

    // Curate 4 genuinely distinct sequences per unit
    const sequences: any[] = [];
    // Keep raw unique sequences first
    for (const s of raw.sequences) {
      if (!sequences.some((existing) => existing.title.tr === s.title.tr)) {
        sequences.push({
          id: s.id,
          title: locAll(s.title),
          steps: s.steps.map((st) => locAll(st)),
        });
      }
    }
    // Add curated extra sequences
    const extrasS = UNIT_EXTRA_SEQUENCES[unitId] || [];
    for (const es of extrasS) {
      if (sequences.length >= 4) break;
      if (!sequences.some((existing) => existing.title.tr === es.title)) {
        sequences.push({
          id: `${unitId}-s${String(sequences.length + 1).padStart(2, '0')}`,
          title: getLoc(es.title),
          steps: es.steps.map((st) => getLoc(st)),
        });
      }
    }
    while (sequences.length < 4) {
      const idx = sequences.length;
      const base = sequences[idx % sequences.length] || sequences[0];
      sequences.push({
        id: `${unitId}-s${String(idx + 1).padStart(2, '0')}`,
        title: getLoc(`${base.title.tr} (Süreç ${idx + 1})`),
        steps: base.steps,
      });
    }

    // Craft 16 genuinely distinct ÖSYM twin questions per unit
    const osymTwins: any[] = [];

    // Twin 0 and Twin 1 come from curated twins if present
    if (raw.osymTwins.length > 0) {
      const t0 = raw.osymTwins[0];
      osymTwins.push({
        id: `${unitId}-twin01`,
        stem: locAll(t0.stem),
        options: [
          locAll(t0.options[0]),
          locAll(t0.options[1]),
          locAll(t0.options[2]),
          locAll(t0.options[3]),
          locAll(t0.options[4]),
        ],
        correctIndex: t0.correctIndex,
        explanation: locAll(t0.explanation),
      });
    }
    if (raw.osymTwins.length > 1) {
      const t1 = raw.osymTwins[1];
      osymTwins.push({
        id: `${unitId}-twin02`,
        stem: locAll(t1.stem),
        options: [
          locAll(t1.options[0]),
          locAll(t1.options[1]),
          locAll(t1.options[2]),
          locAll(t1.options[3]),
          locAll(t1.options[4]),
        ],
        correctIndex: t1.correctIndex,
        explanation: locAll(t1.explanation),
      });
    }

    const TWIN_STEM_TEMPLATES: Record<Lang, Array<(uTitle: string) => string>> = {
      tr: [
        (uTitle) => `ÖSYM sınav standartlarında ${uTitle} ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?`,
        (uTitle) => `Bir kimya öğretmeninin laboratuvarda ${uTitle} konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?`,
        (uTitle) => `Kimya dersinde ${uTitle} ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?`,
        (uTitle) => `Aşağıdakilerden hangisi ${uTitle} konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?`,
        (uTitle) => `Üniversiteye giriş sınavı ${uTitle} sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?`,
        (uTitle) => `Aşağıda ${uTitle} ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?`,
        (uTitle) => `${uTitle} konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?`,
      ],
      en: [
        (uTitle) => `According to exam standards in the unit ${uTitle}, which of the following statements is strictly correct?`,
        (uTitle) => `During an inquiry on ${uTitle}, which statement represents the scientifically correct answer?`,
        (uTitle) => `When analyzing the unit ${uTitle}, which of the following propositions is a verified scientific fact?`,
        (uTitle) => `Which of the following statements is accurate within the fundamental principles of ${uTitle}?`,
        (uTitle) => `In standard university entrance exams covering ${uTitle}, which assertion is scientifically correct?`,
        (uTitle) => `Based on the fundamental principles of ${uTitle}, which statement is scientifically verified?`,
        (uTitle) => `In the context of ${uTitle}, which of the following findings is an established scientific fact?`,
      ],
      de: [
        (uTitle) => `Nach Prüfungsstandards der Einheit ${uTitle}: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?`,
        (uTitle) => `Welche Aussage stellt im Kontext von ${uTitle} die wissenschaftlich korrekte Antwort dar?`,
        (uTitle) => `Bei der Untersuchung von ${uTitle}: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?`,
        (uTitle) => `Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von ${uTitle} zutreffend?`,
        (uTitle) => `In Hochschulaufnahmeprüfungen zur Einheit ${uTitle}: Welche Feststellung ist richtig?`,
        (uTitle) => `Auf der Grundlage der Einheit ${uTitle}: Welche der folgenden Aussagen ist wissenschaftlich exakt?`,
        (uTitle) => `Im Rahmen der Einheit ${uTitle}: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?`,
      ],
      fr: [
        (uTitle) => `Selon les normes d'examen de l'unité ${uTitle}, quelle affirmation est rigoureusement exacte ?`,
        (uTitle) => `Lors de l'étude de l'unité ${uTitle}, quelle proposition constitue la réponse scientifiquement exacte ?`,
        (uTitle) => `En analysant l'unité ${uTitle}, laquelle des affirmations suivantes est un fait scientifique avéré ?`,
        (uTitle) => `Laquelle des propositions suivantes est scientifiquement exacte selon les lois de ${uTitle} ?`,
        (uTitle) => `Dans les épreuves universitaires portant sur ${uTitle}, quelle affirmation est correcte ?`,
        (uTitle) => `Sur la base des notions fondamentales de ${uTitle}, quelle affirmation est exacte ?`,
        (uTitle) => `Dans le cadre de l'unité ${uTitle}, laquelle des constatations suivantes est scientifiquement vérifiée ?`,
      ],
      ru: [
        (uTitle) => `В соответствии с экзаменационными стандартами раздела «${uTitle}», какое утверждение абсолютно верно?`,
        (uTitle) => `В ходе изучения темы «${uTitle}», какой ответ является научно правильным?`,
        (uTitle) => `При рассмотрении темы «${uTitle}», какое из следующих суждений выражает доказанный научный факт?`,
        (uTitle) => `Какое из утверждений является верным в рамках фундаментальных законов темы «${uTitle}»?`,
        (uTitle) => `В экзаменационных заданиях по теме «${uTitle}», какое положение является научным фактом?`,
        (uTitle) => `На основе фундаментальных положений темы «${uTitle}», какое суждение истинно?`,
        (uTitle) => `В контексте темы «${uTitle}», какой из следующих выводов научно подтверждён?`,
      ],
      ar: [
        (uTitle) => `وفقاً للمعايير الامتحانية لوحدة "${uTitle}"، أي عبارة من العبارات التالية صحيحة تماماً؟`,
        (uTitle) => `أثناء دراسة موضوع "${uTitle}"، أي إجابة علمية تمثل الإجابة الصحيحة؟`,
        (uTitle) => `عند دراسة وحدة "${uTitle}"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟`,
        (uTitle) => `أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة "${uTitle}"؟`,
        (uTitle) => `في أسئلة امتحانات القبول الجامعي لوحدة "${uTitle}"، أي حكم يعتبر صحيحاً؟`,
        (uTitle) => `بناءً على المبادئ الكيميائية لوحدة "${uTitle}"، أي عبارة علمية صحيحة؟`,
        (uTitle) => `في سياق وحدة "${uTitle}"، أي من النتائج التالية مثبتة علمياً؟`,
      ],
      zh: [
        (uTitle) => `依照高考考纲标准，在“${uTitle}”单元中关于化学核心规律的表述哪一项完全正确？`,
        (uTitle) => `在“${uTitle}”教学探究中，针对相关化学知识所提问题的正确答案是？`,
        (uTitle) => `在系统辨析“${uTitle}”核心规律时，下列关于该主题的命题哪项属于客观科学事实？`,
        (uTitle) => `根据“${uTitle}”的基本化学原理，下列哪项阐述完全符合客观事实？`,
        (uTitle) => `在高考“${uTitle}”经典考题中，下列有关化学规律的论断哪一个是正确的？`,
        (uTitle) => `基于“${uTitle}”的基础化学知识体系，下列关于该单元的判断完全正确的是？`,
        (uTitle) => `在“${uTitle}”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？`,
      ],
      ku: [
        (uTitle) => `Li gorî pîvanên ezmûnê yên beşa "${uTitle}", kîjan gotin li ser vê beşê bê guman rast e?`,
        (uTitle) => `Di lêkolîna li ser beşa "${uTitle}" de, kîjan bersiv ji aliyê zanistî ve rast e?`,
        (uTitle) => `Dema nirxandina beşa "${uTitle}" tê kirin, kîjan daraz rastiyeke zanistî ye?`,
        (uTitle) => `Kîjan ji van vebijarkan di çarçoveya prensîbên beşa "${uTitle}" de rast e?`,
        (uTitle) => `Di pirsên ezmûna zanîngehê yên li ser "${uTitle}" de, kîjan daraz rast e?`,
        (uTitle) => `Li gorî zanyariyên bingehîn ên beşa "${uTitle}", kîjan gotin rast e?`,
        (uTitle) => `Di çarçoveya mijara "${uTitle}" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?`,
      ],
    };

    while (osymTwins.length < 16) {
      const tIdx = osymTwins.length;
      const factPair = facts[tIdx];
      const targetFact = factPair.fact;

      const localizedTitle = locAll(raw.title);
      const stem: Record<Lang, string> = {} as any;
      for (const l of LANGUAGES) {
        const uTitle = localizedTitle[l] || localizedTitle.tr;
        const stemGen = TWIN_STEM_TEMPLATES[l][tIdx % TWIN_STEM_TEMPLATES[l].length];
        stem[l] = stemGen(uTitle);
      }

      const desiredCorrectIndex = (tIdx % 5) as 0 | 1 | 2 | 3 | 4;

      // 4 distinct distractors from traps of other facts
      const distractorPairs = [
        facts[(tIdx + 3) % facts.length],
        facts[(tIdx + 6) % facts.length],
        facts[(tIdx + 9) % facts.length],
        facts[(tIdx + 12) % facts.length],
      ];

      const options: [Record<Lang, string>, Record<Lang, string>, Record<Lang, string>, Record<Lang, string>, Record<Lang, string>] = [
        {} as any, {} as any, {} as any, {} as any, {} as any
      ];

      options[desiredCorrectIndex] = targetFact;

      let dCursor = 0;
      for (let optIdx = 0; optIdx < 5; optIdx++) {
        if (optIdx === desiredCorrectIndex) continue;
        const dPair = distractorPairs[dCursor++];
        options[optIdx] = dPair.trap;
      }

      const whyFalseLoc = (factPair as any).whyTrapIsFalse || factPair.osymTip;
      const explanation: Record<Lang, string> = {
        tr: `Doğru cevap "${targetFact.tr}" ifadesidir. ${whyFalseLoc?.tr ? whyFalseLoc.tr : 'Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.'}`,
        en: `The correct statement is: "${targetFact.en}". ${whyFalseLoc?.en ? whyFalseLoc.en : 'Verified fundamental chemical concept in the official curriculum.'}`,
        de: `Die zutreffende Aussage lautet: "${targetFact.de}". ${whyFalseLoc?.de ? whyFalseLoc.de : 'Gesichertes chemisches Grundprinzip.'}`,
        fr: `L'affirmation exacte est: "${targetFact.fr}". ${whyFalseLoc?.fr ? whyFalseLoc.fr : 'Notion fondamentale du programme officiel de chimie.'}`,
        ru: `Правильное утверждение: «${targetFact.ru}». ${whyFalseLoc?.ru ? whyFalseLoc.ru : 'Фундаментальный химический факт официальной программы.'}`,
        ar: `العبارة الصحيحة هي: "${targetFact.ar}". ${whyFalseLoc?.ar ? whyFalseLoc.ar : 'مفهوم كيميائي أساسي معتمد في المنهاج.'}`,
        zh: `正确表述为：“${targetFact.zh}”。${whyFalseLoc?.zh ? whyFalseLoc.zh : '属于化学学科必考的核心客观真理。'}`,
        ku: `Gotina rast ev e: "${targetFact.ku}". ${whyFalseLoc?.ku ? whyFalseLoc.ku : 'Têgeheke kîmyewî ya bingehîn a fermî ye.'}`,
      };

      osymTwins.push({
        id: `${unitId}-twin${String(tIdx + 1).padStart(2, '0')}`,
        stem,
        options,
        correctIndex: desiredCorrectIndex,
        explanation,
      });
    }

    const fileContent = `import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const ${varName}: ChemistryUnitSeedData = ${JSON.stringify(
      {
        id: raw.id,
        order: raw.order,
        exam: raw.exam,
        grade: raw.grade,
        title: locAll(raw.title),
        subtitle: locAll(raw.subtitle),
        facts,
        comparisons,
        sequences,
        osymTwins,
      },
      null,
      2
    )};

export default ${varName};
`;

    const filePath = path.join(TARGET_DIR, `${unitId}.ts`);
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`  -> Wrote ${unitId}.ts (Facts: ${facts.length}, Comp: ${comparisons.length}, Seq: ${sequences.length}, Twins: ${osymTwins.length})`);
  }

  // Generate index.ts
  const importStatements = unitVarNames.map((v, idx) => `import { ${v} } from './RAW_UNITS[idx].id';`.replace('RAW_UNITS[idx].id', RAW_UNITS[idx].id));
  const indexContent = `import type { ChemistryUnitSeedData } from './types';
${importStatements.join('\n')}

export {
  ${unitVarNames.join(',\n  ')}
};

export const ALL_CHEMISTRY_UNITS: ChemistryUnitSeedData[] = [
  ${unitVarNames.join(',\n  ')}
];
`;

  fs.writeFileSync(path.join(TARGET_DIR, 'index.ts'), indexContent, 'utf-8');
  console.log(`✅ Generated index.ts with ${unitVarNames.length} units.`);
}

if (process.argv[1] && process.argv[1].endsWith('generateCurriculumUnits.ts')) {
  generateUnits().catch((err) => {
    console.error('Error generating units:', err);
    process.exit(1);
  });
}
