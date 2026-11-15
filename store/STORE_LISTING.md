# Store listing – Kimolab (working name: Kimya YKS 3D)

App id / bundle id: `com.kimyager.ykskimya` · Version 1.0 · iOS 15.0+ (iPhone + iPad) · Android minSdk 24, targetSdk 36 (phone + tablet)

Prepared 2026-11-15. Nothing has been registered, reserved or uploaded.

Contents: 1. Name research · 2. Verified facts used in the copy · 3. Store copy per language (tr, en, de, fr, ru, ar, zh, ku) · 4. Common App Store settings · 5. Common Google Play settings · 6. Graphic assets · 7. Open items and sources

---

## 1. Name research

Goal: one Latin-script brand, ≤ 30 characters with a localized suffix, unique on both stores, readable in all 8 markets, no exam names in the brand itself.

Method (2026-11-15): exact-term search through the iTunes Search API (App Store; `country=tr` and/or `us`), Google Play web search (`play.google.com/store/search?q=…&c=apps`), and a general web search (companies, trademarks). These are spot checks, not a legal clearance: no trademark-office search (TÜRKPATENT, EUIPO, WIPO) and no domain check was done.

| # | Candidate | App Store | Google Play | Web / trademarks | Verdict |
|---|---|---|---|---|---|
| 1 | **Kimolab** (recommended) | 0 results for "Kimolab" (TR storefront). | No app with that name. Nearest: "Kimi" (Moonshot AI), "Kimo: Aesthetic AI Editor", "Kimo & Z0": different words, different categories. | No company or product named Kimolab. Similar but distinct: KimLab (a Kyung Hee University research lab), Okolab (microscopy), Kolab (Korean CRO). | **Clear.** Turkish users read it as *kimya + lab*. Elsewhere it is a neutral, easy-to-say word (Ki-mo-lab) that works in Latin, Cyrillic, Arabic and Chinese contexts. Fits the 3D-lab angle. |
| 2 | Orbitalia | 0 exact (US). Results are space/orbit apps and "Atomic Orbitalz". | No exact match. Nearest "Orbia" (unrelated). | No brand found; the word only appears in anatomy ("orbita" = eye socket in Latin languages). | Clear, chemistry meaning (orbitals). Weaker: sounds Italian/space-themed, and in Turkish it carries no "chemistry" hint. Good fallback. |
| 3 | Atomiva | 0 exact (US). Results: Atomas, AtomPro, Atom in a Box. | No exact match, but chemistry apps "Atomia Games", "Atomify: Chemical Formulation", "Atomarium: 3D Atom & Chemistry" sit very close. | No company named Atomiva. Atomvie (radiopharma) and Atomivo (Belgian company) exist. | Usable, but crowded "Atom…" space in the same category. Medium confusion risk. |
| 4 | Kemiva | 0 exact (US). | No exact match (Keeva, Kimy). | **Kemira** is a large Finnish chemicals company, one letter different and in the chemistry field. | Not recommended (trademark proximity to Kemira). |
| 5 | Kemistra | 0 exact (US and TR). | No exact match, **but** "Kemistri" and "Kemistri Everyday" (Edbetter Limited, chemistry education), "KEMISTRY DEMYSTIFIED" (Education Marshal Media). App Store also has "Kemistri" and "Kemistry: Chemistry Toolkit". | Several USPTO marks for KEMISTRY / KEMISTRE (clothing, cosmetics, chemicals). | Not recommended: confusingly similar to existing chemistry-education apps. |

**Recommendation: Kimolab.** Store names per locale: `Kimolab: Kimya 3D`, `Kimolab: Chemistry 3D`, `Kimolab: Chemie 3D`, `Kimolab : Chimie 3D`, `Kimolab: Химия 3D`, `Kimolab: كيمياء 3D`, `Kimolab：3D化学`. Turkish search terms "TYT AYT" go in the Turkish subtitle (App Store) and title (Play), not in the brand.

Before committing: (a) reserve the name by creating the App Store Connect record and Play Console app (names must be unique on the App Store); (b) run a TÜRKPATENT / EUIPO search for "Kimolab" in classes 9 and 41; (c) check `kimolab.com` / `kimolab.app` availability; (d) change the on-device name (currently `Kimya 3D YKS` in `ios/App/App/Info.plist` `CFBundleDisplayName` and Android `res/values/strings.xml` `app_name`) so it matches the store name — not done here, because source files were not to be edited.

---

## 2. Verified facts used in the copy

Checked in the code on branch `feat/level-labels-and-store` (2026-11-15). Note that the working tree had uncommitted changes from another session in `src/data/threeScenesData.ts`, `src/engine/*.ts` and a new `src/i18n/examLevels.ts`; the counts below were read from the files as they were on disk.

| Claim | Value | Where verified |
|---|---|---|
| Units | 24 = 10 TYT/Basic + 14 AYT/Advanced | `ALL_CHEMISTRY_UNITS` (run via tsx: 10 × TYT, 14 × AYT) |
| Questions | 128 per unit → 3,072 per language, 5 options, explanation per question; 8 sets of 16 per unit | `QUESTIONS_PER_UNIT = 128`, `CompiledQuestion` (`options` 5-tuple, `setNumber 1–8`, `explanation`) |
| Mock exams | 80 = 40 TYT/Basic (7 q, 10 min) + 40 AYT/Advanced (13 q, 20 min); review after submit; TR net = correct − wrong/4 | `ALL_MOCK_EXAM_SPECS.length = 80`, `mockExamCatalog.ts`, `calculateOsymNet`, `QuizSessionModal` review state |
| Study slides | 9 per unit → 216 | `TOTAL_SLIDES = 9` in `UnitSlideDeckModal.tsx`, 24 deep study guides |
| Diagrams | 2 per unit → 48 (built from 27 diagram archetypes), zoomable | `diagramPair` + zoom button in `UnitSlideDeckModal.tsx`, `DiagramArchetypeId` |
| 3D scenes | 32 scenes, 99 hotspots | `PRIMARY_32_SCENES` (8 more entries in `LEGACY_CONTRACT_SCENES` are aliases of the same scenes) |
| Flashcards | 396 cards, Leitner 5 boxes (1/2/5/9/14 days) | `compileAllFlashcards` → 396 (tr/en/ar), `leitnerEngine.ts` |
| Mini-games | 6 | `GamesHub.tsx` (periodic-hunter, equation-balancer, compound-synthesis, lewis-builder, titration-simulator, chem-blitz) |
| Mistakes / bookmarks / profiles | mistake notebook with last wrong pick, bookmarks, several local profiles, daily goal, per-unit mastery, study suggestions | `LearnerProfile`, `ProfileView.tsx` tabs, `aiCoachEngine.ts` |
| Theme / text / audio | light & dark; 4 text sizes; synthesized SFX; 7 procedural music tracks | `useAppStore` theme, `TextSizeStep 0–3`, `sfx.ts`, `MUSIC_TRACKS` |
| Typeset equations | KaTeX + chemistry notation helpers | `katex` dependency, `mathTypeset.ts`, `chemNotation.ts` |
| Languages / RTL | tr, en, de, fr, ru, ar, zh, ku; Arabic RTL | `src/i18n/*`, RTL handling in slide deck and tests |
| Devices | iPhone + iPad (`TARGETED_DEVICE_FAMILY = "1,2"`), Android phone/tablet | `project.pbxproj`, `AndroidManifest.xml` |
| Offline, no data collection | No `fetch`/XHR/WebSocket/analytics/ads SDKs, no external URLs in `src`, `index.html` or `public`; fonts bundled; service worker caches same-origin files only; all state in `localStorage` on the device | grep over `src`, `public`, `index.html`; `package.json` dependencies |

Deliberately **not** claimed in the copy:
- "AI" — the profile tab is labelled "AI Koç", but `aiCoachEngine.ts` is rule-based and runs on the device. The copy says "study suggestions".
- Reminders/notifications — `LearnerProfile` has `notificationsEnabled`/`reminderTime`, but no notification plugin is installed.
- Rank or percentile predictions — `estimateTgPercentile` exists, but it is a rough heuristic.
- "Original questions" — originality cannot be checked from the code.
- "Flashcards for every unit" — `compileAllFlashcards` uses only the first 22 units (`units.slice(0, 22)`), so units 23–24 have no cards. The copy states the total (396) only.


## 3. Store copy per language

Counts in brackets are Unicode characters (what both consoles count). French uses a no-break space (U+00A0) before `:` and as thousands separator; it counts as one character. Keywords: comma-separated, no spaces after commas, no word repeated from the Name or Subtitle (Apple indexes Name + Subtitle + Keywords together), no competitor brands. Apple enforces the keyword limit per character in practice; UTF-8 byte length is shown for non-Latin scripts for information only.


---

### 3.1 Türkçe

Store locale: App Store Connect **Turkish** · Play Console **Turkish – tr-TR**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: Kimya 3D` | [17] |
| Subtitle (30) | `TYT AYT Soru Bankası ve Deneme` | [30] |
| Keywords (100) | `yks,mol,organik,periyodik,tablo,molekül,konu,anlatımı,test,sınav,lise,formül,asit,baz,denklem,deney` | [99] (104 bytes UTF-8) |

**Promotional Text (170)** [150]

```text
3.072 çözümlü soru, 80 deneme, 216 görselli slayt ve 3D laboratuvar tek uygulamada. İnternetsiz çalışır; hesap, reklam ve uygulama içi satın alma yok.
```

**Description (4000)** [2169]

```text
Kimolab, YKS’ye hazırlanan öğrenciler için tasarlanmış eksiksiz bir kimya çalışma uygulamasıdır. MEB müfredatındaki 24 ünitenin tamamı (10 TYT ve 14 AYT ünitesi) konu anlatımı, soru bankası, deneme sınavları ve 3D laboratuvarla bir arada. İnternet gerekmez: otobüste, kütüphanede ya da çekmeyen bir köşede çalışmaya devam edersin.

KONU ANLATIMI
• Her ünitede 9 görselli slayt, toplam 216 slayt
• Ünite başına 2, toplam 48 kimya diyagramı; yakınlaştırıp ayrıntısına in
• Sınav tuzakları ve sık yapılan hatalar ayrıca vurgulanır

SORU BANKASI
• 3.072 soru: her ünitede 128 soru, beşer seçenek
• Her sorunun adım adım çözümü; denklemler ve formüller düzgün dizilir
• Her ünitede 16’şar soruluk 8 çalışma seti, diyagramlı sorular

DENEME SINAVLARI
• 80 süreli deneme: 40 TYT (7 soru, 10 dk) ve 40 AYT (13 soru, 20 dk)
• ÖSYM usulü net hesabı: 4 yanlış 1 doğruyu götürür
• Sınavdan sonra soru soru çözümlü inceleme

3D LABORATUVAR
• 32 etkileşimli 3D sahne: NaCl kristali, VSEPR geometrileri, Daniell pili, titrasyon, elektroliz, benzen halkası ve daha fazlası
• 99 etkileşim noktası: döndür, yakınlaştır, dokun ve açıklamayı oku

AKILDA KALICI TEKRAR
• 396 bilgi kartı, 5 kutulu Leitner sistemiyle aralıklı tekrar
• Hata defteri: yanlış yaptığın sorular ve verdiğin cevap saklanır
• Yer işaretleriyle önemli soruları tek dokunuşla yeniden çöz

6 MİNİ OYUN
Periyodik Avcı, Denklem Dengeleyici, Lewis Nokta Ustası, Titrasyon Simülatörü, Bileşik Sentez Kazanı ve Chem-Blitz 60s ile kimyayı oynayarak pekiştir.

İLERLEMENİ GÖR
• Profil ve istatistikler, günlük hedef, ünite ünite başarı durumu
• Eksik konularına göre çalışma önerileri
• Aynı cihazda birden fazla öğrenci profili

SANA GÖRE AYARLA
• Açık ve koyu tema, 4 kademeli yazı boyutu
• Ses efektleri ve 7 farklı çalışma müziği (istersen kapat)
• 8 dil: Türkçe, İngilizce, Almanca, Fransızca, Rusça, Arapça (sağdan sola), Çince (basitleştirilmiş) ve Kurmancî
• iPhone ve iPad’de çalışır.

GİZLİLİK
Hesap açman gerekmez. Reklam yok, uygulama içi satın alma yok, hiçbir veri toplanmaz. İlerlemen yalnızca kendi cihazında saklanır.

Kimolab bağımsız bir eğitim uygulamasıdır; ÖSYM veya MEB ile resmî bir bağlantısı yoktur.
```

**What's New in This Version (4000), v1.0** [200]

```text
Kimolab’ın ilk sürümü yayında! 24 ünite, 3.072 çözümlü soru, 80 deneme sınavı, 3D laboratuvar, bilgi kartları ve 6 mini oyun seni bekliyor. Görüş ve önerilerini destek adresimizden bize iletebilirsin.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 ünite, tek uygulama [22] | 10 TYT + 14 AYT ünitesi, MEB müfredatına uygun [46] |
| 2 | Quiz + worked explanation + typeset equation | Her sorunun çözümü var [22] | 3.072 soru, adım adım çözüm, düzgün dizilmiş denklemler [55] |
| 3 | Study slide with diagram | Görselli konu anlatımı [22] | 216 slayt ve 48 kimya diyagramı [31] |
| 4 | 3D lab | Kimyayı 3D gör [14] | 32 etkileşimli sahne: döndür, yakınlaştır, dokun [48] |
| 5 | Flashcards | Bilgi kartlarıyla tekrar [24] | 396 kart, 5 kutulu Leitner sistemi [34] |
| 6 | Exam center / mock exams | 80 süreli deneme sınavı [23] | 40 TYT + 40 AYT, net hesabı ve çözümlü inceleme [47] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: Kimya 3D TYT AYT` | [25] |
| Short description (80) | `TYT-AYT kimya: 3.072 çözümlü soru, 80 deneme, 3D laboratuvar. İnternetsiz.` | [74] |
| Feature graphic headline (≤ 30) | `TYT-AYT kimya cebinde` | [21] |
| Feature graphic subline (≤ 50) | `3.072 soru · 80 deneme · 3D lab · İnternetsiz` | [45] |

**Full description (4000)** [2324]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab ile TYT ve AYT kimyaya internetsiz hazırlan: konu anlatımı, çözümlü soru bankası, deneme sınavları ve 3D laboratuvar tek uygulamada.

Kimolab, YKS’ye hazırlanan öğrenciler için tasarlanmış eksiksiz bir kimya çalışma uygulamasıdır. MEB müfredatındaki 24 ünitenin tamamı (10 TYT ve 14 AYT ünitesi) konu anlatımı, soru bankası, deneme sınavları ve 3D laboratuvarla bir arada. İnternet gerekmez: otobüste, kütüphanede ya da çekmeyen bir köşede çalışmaya devam edersin.

KONU ANLATIMI
• Her ünitede 9 görselli slayt, toplam 216 slayt
• Ünite başına 2, toplam 48 kimya diyagramı; yakınlaştırıp ayrıntısına in
• Sınav tuzakları ve sık yapılan hatalar ayrıca vurgulanır

SORU BANKASI
• 3.072 soru: her ünitede 128 soru, beşer seçenek
• Her sorunun adım adım çözümü; denklemler ve formüller düzgün dizilir
• Her ünitede 16’şar soruluk 8 çalışma seti, diyagramlı sorular

DENEME SINAVLARI
• 80 süreli deneme: 40 TYT (7 soru, 10 dk) ve 40 AYT (13 soru, 20 dk)
• ÖSYM usulü net hesabı: 4 yanlış 1 doğruyu götürür
• Sınavdan sonra soru soru çözümlü inceleme

3D LABORATUVAR
• 32 etkileşimli 3D sahne: NaCl kristali, VSEPR geometrileri, Daniell pili, titrasyon, elektroliz, benzen halkası ve daha fazlası
• 99 etkileşim noktası: döndür, yakınlaştır, dokun ve açıklamayı oku

AKILDA KALICI TEKRAR
• 396 bilgi kartı, 5 kutulu Leitner sistemiyle aralıklı tekrar
• Hata defteri: yanlış yaptığın sorular ve verdiğin cevap saklanır
• Yer işaretleriyle önemli soruları tek dokunuşla yeniden çöz

6 MİNİ OYUN
Periyodik Avcı, Denklem Dengeleyici, Lewis Nokta Ustası, Titrasyon Simülatörü, Bileşik Sentez Kazanı ve Chem-Blitz 60s ile kimyayı oynayarak pekiştir.

İLERLEMENİ GÖR
• Profil ve istatistikler, günlük hedef, ünite ünite başarı durumu
• Eksik konularına göre çalışma önerileri
• Aynı cihazda birden fazla öğrenci profili

SANA GÖRE AYARLA
• Açık ve koyu tema, 4 kademeli yazı boyutu
• Ses efektleri ve 7 farklı çalışma müziği (istersen kapat)
• 8 dil: Türkçe, İngilizce, Almanca, Fransızca, Rusça, Arapça (sağdan sola), Çince (basitleştirilmiş) ve Kurmancî
• Android telefon ve tabletlerde çalışır.

GİZLİLİK
Hesap açman gerekmez. Reklam yok, uygulama içi satın alma yok, hiçbir veri toplanmaz. İlerlemen yalnızca kendi cihazında saklanır.

Kimolab bağımsız bir eğitim uygulamasıdır; ÖSYM veya MEB ile resmî bir bağlantısı yoktur.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.2 English

Store locale: App Store Connect **English (U.S.)** · Play Console **English (United States) – en-US**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: Chemistry 3D` | [21] |
| Subtitle (30) | `High School Chem Course & Quiz` | [30] |
| Keywords (100) | `periodic,table,molecule,exam,mock,test,flashcards,organic,stoichiometry,mole,acid,base,lab,offline` | [98] |

**Promotional Text (170)** [149]

```text
3,072 questions with worked solutions, 80 timed mock exams, 216 illustrated slides and a 3D chemistry lab. Fully offline, with no account and no ads.
```

**Description (4000)** [2147]

```text
Kimolab is a complete high-school chemistry course in your pocket. All 24 units are here, 10 at the Basic level and 14 at the Advanced level, each with illustrated lessons, questions with worked solutions and interactive 3D scenes, plus timed mock exams for both levels. No internet needed: keep studying on the bus, in the library or anywhere without a signal.

LESSONS
• 9 illustrated slides per unit, 216 in total
• 2 chemistry diagrams per unit, 48 in total, which you can zoom into
• Common traps and typical mistakes are highlighted

QUESTION BANK
• 3,072 questions: 128 per unit, five options each
• A step-by-step solution for every question, with properly typeset equations and formulas
• 8 practice sets of 16 questions per unit, including diagram-based questions

MOCK EXAMS
• 80 timed mock exams: 40 Basic (7 questions, 10 min) and 40 Advanced (13 questions, 20 min)
• Review every question with its solution after you submit

3D LAB
• 32 interactive 3D scenes: NaCl crystal lattice, VSEPR shapes, Daniell cell, titration, electrolysis, the benzene ring and more
• 99 hotspots: rotate, zoom, tap and read the explanation

REVIEW THAT STICKS
• 396 flashcards with 5-box Leitner spaced repetition
• Mistake notebook: keeps every question you missed and the answer you picked
• Bookmarks: re-solve important questions with one tap

6 MINI-GAMES
Practise while you play with Periodic Hunter, Equation Balancer, Lewis Dot Builder, Titration Simulator, Compound Synthesis Lab and Chem-Blitz 60s.

TRACK YOUR PROGRESS
• Profile and statistics, a daily goal and mastery for each unit
• Study suggestions based on your weak topics
• Several student profiles on one device

MAKE IT YOURS
• Light and dark themes, 4 text sizes
• Sound effects and 7 study-music tracks (switch them off any time)
• 8 languages: English, Turkish, German, French, Russian, Arabic (right-to-left), Simplified Chinese and Kurmanji Kurdish
• Runs on iPhone and iPad.

PRIVACY
No account required. No ads, no in-app purchases and no data collection. Your progress is stored only on your device.

The content follows the Turkish national high-school chemistry curriculum.
```

**What's New in This Version (4000), v1.0** [207]

```text
Welcome to the first release of Kimolab! 24 units, 3,072 questions with worked solutions, 80 mock exams, a 3D lab, flashcards and 6 mini-games are ready for you. We’d love your feedback via the support page.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 units, one complete course [29] | 10 Basic + 14 Advanced units of high-school chemistry [53] |
| 2 | Quiz + worked explanation + typeset equation | Every answer, explained [23] | 3,072 questions with step-by-step solutions [43] |
| 3 | Study slide with diagram | Learn with visual slides [24] | 216 illustrated slides and 48 chemistry diagrams [48] |
| 4 | 3D lab | See chemistry in 3D [19] | 32 interactive scenes: rotate, zoom, tap to explore [51] |
| 5 | Flashcards | Make it stick [13] | 396 flashcards with 5-box Leitner spaced repetition [51] |
| 6 | Exam center / mock exams | 80 timed mock exams [19] | 40 Basic + 40 Advanced, with full answer review [47] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: Chemistry 3D & Quiz` | [28] |
| Short description (80) | `High-school chemistry: 3,072 solved questions, 80 mock exams, 3D lab. Offline.` | [78] |
| Feature graphic headline (≤ 30) | `Chemistry, in your pocket` | [25] |
| Feature graphic subline (≤ 50) | `3,072 questions · 3D lab · Works offline` | [40] |

**Full description (4000)** [2331]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab is a complete high-school chemistry course and exam-practice app that works offline: lessons, a question bank with worked solutions, timed mock exams and a 3D lab.

Kimolab is a complete high-school chemistry course in your pocket. All 24 units are here, 10 at the Basic level and 14 at the Advanced level, each with illustrated lessons, questions with worked solutions and interactive 3D scenes, plus timed mock exams for both levels. No internet needed: keep studying on the bus, in the library or anywhere without a signal.

LESSONS
• 9 illustrated slides per unit, 216 in total
• 2 chemistry diagrams per unit, 48 in total, which you can zoom into
• Common traps and typical mistakes are highlighted

QUESTION BANK
• 3,072 questions: 128 per unit, five options each
• A step-by-step solution for every question, with properly typeset equations and formulas
• 8 practice sets of 16 questions per unit, including diagram-based questions

MOCK EXAMS
• 80 timed mock exams: 40 Basic (7 questions, 10 min) and 40 Advanced (13 questions, 20 min)
• Review every question with its solution after you submit

3D LAB
• 32 interactive 3D scenes: NaCl crystal lattice, VSEPR shapes, Daniell cell, titration, electrolysis, the benzene ring and more
• 99 hotspots: rotate, zoom, tap and read the explanation

REVIEW THAT STICKS
• 396 flashcards with 5-box Leitner spaced repetition
• Mistake notebook: keeps every question you missed and the answer you picked
• Bookmarks: re-solve important questions with one tap

6 MINI-GAMES
Practise while you play with Periodic Hunter, Equation Balancer, Lewis Dot Builder, Titration Simulator, Compound Synthesis Lab and Chem-Blitz 60s.

TRACK YOUR PROGRESS
• Profile and statistics, a daily goal and mastery for each unit
• Study suggestions based on your weak topics
• Several student profiles on one device

MAKE IT YOURS
• Light and dark themes, 4 text sizes
• Sound effects and 7 study-music tracks (switch them off any time)
• 8 languages: English, Turkish, German, French, Russian, Arabic (right-to-left), Simplified Chinese and Kurmanji Kurdish
• Runs on Android phones and tablets.

PRIVACY
No account required. No ads, no in-app purchases and no data collection. Your progress is stored only on your device.

The content follows the Turkish national high-school chemistry curriculum.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.3 Deutsch

Store locale: App Store Connect **German** · Play Console **German – de-DE**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: Chemie 3D` | [18] |
| Subtitle (30) | `Schulchemie lernen und testen` | [29] |
| Keywords (100) | `periodensystem,moleküle,quiz,prüfung,klausur,übungen,karteikarten,organisch,mol,säure,base,labor` | [96] (100 bytes UTF-8) |

**Promotional Text (170)** [153]

```text
3.072 Aufgaben mit Lösungsweg, 80 Probeprüfungen mit Zeitlimit, 216 illustrierte Folien und ein 3D-Labor – komplett offline, ohne Konto und ohne Werbung.
```

**Description (4000)** [2316]

```text
Kimolab ist dein kompletter Chemiekurs für die Oberstufe – immer dabei. Alle 24 Einheiten, 10 im Bereich Grundlagen und 14 im Bereich Vertiefung, bringen illustrierte Lektionen, Aufgaben mit Lösungsweg und interaktive 3D-Szenen mit – dazu Probeprüfungen mit Zeitlimit für beide Bereiche. Internet brauchst du dafür nicht: Lerne im Bus, in der Bibliothek oder im Funkloch weiter.

LEKTIONEN
• 9 illustrierte Folien pro Einheit, insgesamt 216
• 2 Chemie-Diagramme pro Einheit, insgesamt 48 – zum Hineinzoomen
• Typische Fallen und häufige Fehler werden hervorgehoben

AUFGABENSAMMLUNG
• 3.072 Aufgaben: 128 pro Einheit, jeweils fünf Antwortmöglichkeiten
• Zu jeder Aufgabe ein Lösungsweg Schritt für Schritt, mit sauber gesetzten Gleichungen und Formeln
• 8 Übungssets mit je 16 Aufgaben pro Einheit, auch mit Diagrammaufgaben

PROBEPRÜFUNGEN
• 80 Probeprüfungen mit Zeitlimit: 40 × Grundlagen (7 Aufgaben, 10 Min.) und 40 × Vertiefung (13 Aufgaben, 20 Min.)
• Nach der Abgabe jede Aufgabe mit Lösung durchgehen

3D-LABOR
• 32 interaktive 3D-Szenen: NaCl-Kristallgitter, VSEPR-Geometrien, Daniell-Element, Titration, Elektrolyse, Benzolring und mehr
• 99 Infopunkte: drehen, zoomen, antippen und die Erklärung lesen

WIEDERHOLEN, DAS HÄNGEN BLEIBT
• 396 Karteikarten mit der 5-Fächer-Lernkartei nach Leitner
• Fehlerheft: speichert jede falsch beantwortete Aufgabe samt deiner Antwort
• Lesezeichen: wichtige Aufgaben mit einem Tipp erneut lösen

6 MINISPIELE
Festige dein Wissen spielerisch mit Perioden-Jäger, Gleichungs-Ausgleicher, Lewis-Punkt-Meister, Titrations-Simulator, Synthese-Labor und Chem-Blitz 60s.

FORTSCHRITT IM BLICK
• Profil und Statistiken, Tagesziel und Lernstand für jede Einheit
• Lernvorschläge passend zu deinen Schwachstellen
• Mehrere Lernprofile auf einem Gerät

GANZ NACH DEINEM GESCHMACK
• Helles und dunkles Design, 4 Schriftgrößen
• Soundeffekte und 7 Lernmusik-Tracks (jederzeit abschaltbar)
• 8 Sprachen: Deutsch, Englisch, Türkisch, Französisch, Russisch, Arabisch (von rechts nach links), vereinfachtes Chinesisch und Kurmandschi
• Läuft auf iPhone und iPad.

DATENSCHUTZ
Kein Konto nötig. Keine Werbung, keine In-App-Käufe, keine Datenerfassung. Dein Lernfortschritt bleibt ausschließlich auf deinem Gerät.

Die Inhalte folgen dem türkischen Chemie-Lehrplan für die Sekundarstufe.
```

**What's New in This Version (4000), v1.0** [215]

```text
Die erste Version von Kimolab ist da! 24 Einheiten, 3.072 Aufgaben mit Lösungsweg, 80 Probeprüfungen, ein 3D-Labor, Karteikarten und 6 Minispiele warten auf dich. Wir freuen uns über Feedback über die Support-Seite.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 Einheiten, ein ganzer Kurs [29] | 10 Einheiten Grundlagen + 14 Einheiten Vertiefung [49] |
| 2 | Quiz + worked explanation + typeset equation | Jede Lösung erklärt [19] | 3.072 Aufgaben mit Schritt-für-Schritt-Lösung [45] |
| 3 | Study slide with diagram | Lernen mit Bildern [18] | 216 illustrierte Folien und 48 Chemie-Diagramme [47] |
| 4 | 3D lab | Chemie in 3D erleben [20] | 32 interaktive Szenen: drehen, zoomen, antippen [47] |
| 5 | Flashcards | Karteikarten, die sitzen [24] | 396 Karten mit der 5-Fächer-Lernkartei nach Leitner [51] |
| 6 | Exam center / mock exams | 80 Probeprüfungen [17] | 40 × Grundlagen, 40 × Vertiefung – mit Auswertung [49] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: Chemie 3D & Quiz` | [25] |
| Short description (80) | `Schulchemie: 3.072 Aufgaben mit Lösungen, 80 Probeprüfungen, 3D-Labor. Offline.` | [79] |
| Feature graphic headline (≤ 30) | `Chemie für die Hosentasche` | [26] |
| Feature graphic subline (≤ 50) | `3.072 Aufgaben · 3D-Labor · Offline` | [35] |

**Full description (4000)** [2507]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab ist ein kompletter Chemiekurs für die Oberstufe mit Prüfungstraining, der offline funktioniert: Lektionen, Aufgaben mit Lösungsweg, Probeprüfungen und ein 3D-Labor.

Kimolab ist dein kompletter Chemiekurs für die Oberstufe – immer dabei. Alle 24 Einheiten, 10 im Bereich Grundlagen und 14 im Bereich Vertiefung, bringen illustrierte Lektionen, Aufgaben mit Lösungsweg und interaktive 3D-Szenen mit – dazu Probeprüfungen mit Zeitlimit für beide Bereiche. Internet brauchst du dafür nicht: Lerne im Bus, in der Bibliothek oder im Funkloch weiter.

LEKTIONEN
• 9 illustrierte Folien pro Einheit, insgesamt 216
• 2 Chemie-Diagramme pro Einheit, insgesamt 48 – zum Hineinzoomen
• Typische Fallen und häufige Fehler werden hervorgehoben

AUFGABENSAMMLUNG
• 3.072 Aufgaben: 128 pro Einheit, jeweils fünf Antwortmöglichkeiten
• Zu jeder Aufgabe ein Lösungsweg Schritt für Schritt, mit sauber gesetzten Gleichungen und Formeln
• 8 Übungssets mit je 16 Aufgaben pro Einheit, auch mit Diagrammaufgaben

PROBEPRÜFUNGEN
• 80 Probeprüfungen mit Zeitlimit: 40 × Grundlagen (7 Aufgaben, 10 Min.) und 40 × Vertiefung (13 Aufgaben, 20 Min.)
• Nach der Abgabe jede Aufgabe mit Lösung durchgehen

3D-LABOR
• 32 interaktive 3D-Szenen: NaCl-Kristallgitter, VSEPR-Geometrien, Daniell-Element, Titration, Elektrolyse, Benzolring und mehr
• 99 Infopunkte: drehen, zoomen, antippen und die Erklärung lesen

WIEDERHOLEN, DAS HÄNGEN BLEIBT
• 396 Karteikarten mit der 5-Fächer-Lernkartei nach Leitner
• Fehlerheft: speichert jede falsch beantwortete Aufgabe samt deiner Antwort
• Lesezeichen: wichtige Aufgaben mit einem Tipp erneut lösen

6 MINISPIELE
Festige dein Wissen spielerisch mit Perioden-Jäger, Gleichungs-Ausgleicher, Lewis-Punkt-Meister, Titrations-Simulator, Synthese-Labor und Chem-Blitz 60s.

FORTSCHRITT IM BLICK
• Profil und Statistiken, Tagesziel und Lernstand für jede Einheit
• Lernvorschläge passend zu deinen Schwachstellen
• Mehrere Lernprofile auf einem Gerät

GANZ NACH DEINEM GESCHMACK
• Helles und dunkles Design, 4 Schriftgrößen
• Soundeffekte und 7 Lernmusik-Tracks (jederzeit abschaltbar)
• 8 Sprachen: Deutsch, Englisch, Türkisch, Französisch, Russisch, Arabisch (von rechts nach links), vereinfachtes Chinesisch und Kurmandschi
• Läuft auf Android-Smartphones und -Tablets.

DATENSCHUTZ
Kein Konto nötig. Keine Werbung, keine In-App-Käufe, keine Datenerfassung. Dein Lernfortschritt bleibt ausschließlich auf deinem Gerät.

Die Inhalte folgen dem türkischen Chemie-Lehrplan für die Sekundarstufe.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.4 Français

Store locale: App Store Connect **French** · Play Console **French (France) – fr-FR**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab : Chimie 3D` | [19] |
| Subtitle (30) | `Cours de lycée, QCM et examens` | [30] |
| Keywords (100) | `tableau,périodique,molécules,exercices,révision,fiches,organique,mole,acide,base,labo,quiz,équations` | [100] (104 bytes UTF-8) |

**Promotional Text (170)** [157]

```text
3 072 questions corrigées pas à pas, 80 examens blancs chronométrés, 216 diapositives illustrées et un labo 3D. Le tout hors ligne, sans compte ni publicité.
```

**Description (4000)** [2362]

```text
Kimolab, c’est un cours complet de chimie du lycée, toujours avec vous. Les 24 chapitres, 10 de niveau Fondamentaux et 14 de niveau Approfondissement, réunissent leçons illustrées, questions corrigées, examens blancs chronométrés et labo 3D interactif. Pas besoin d’Internet : révisez dans le bus, à la bibliothèque ou là où le réseau ne passe pas.

LEÇONS
• 9 diapositives illustrées par chapitre, 216 au total
• 2 schémas de chimie par chapitre, 48 au total, à agrandir d’un geste
• Les pièges classiques et les erreurs fréquentes sont signalés

BANQUE DE QUESTIONS
• 3 072 questions : 128 par chapitre, cinq propositions chacune
• Un corrigé pas à pas pour chaque question, avec des équations et formules correctement mises en forme
• 8 séries de 16 questions par chapitre, dont des questions à partir de schémas

EXAMENS BLANCS
• 80 examens blancs chronométrés : 40 Fondamentaux (7 questions, 10 min) et 40 Approfondissement (13 questions, 20 min)
• Après la remise, revoyez chaque question avec son corrigé

LABO 3D
• 32 scènes 3D interactives : réseau cristallin de NaCl, géométries VSEPR, pile Daniell, titrage, électrolyse, cycle du benzène et bien d’autres
• 99 points interactifs : faites pivoter, zoomez, touchez et lisez l’explication

RÉVISER POUR DE BON
• 396 fiches avec la méthode Leitner à 5 boîtes (répétition espacée)
• Carnet d’erreurs : chaque question ratée est conservée avec la réponse choisie
• Favoris : refaites les questions importantes en un geste

6 MINI-JEUX
Consolidez vos acquis en jouant avec Chasseur Périodique, Équilibreur d’Équation, Maître de Lewis, Simulateur de Titrage, Synthèse de Composés et Chem-Blitz 60s.

SUIVEZ VOS PROGRÈS
• Profil et statistiques, objectif quotidien et niveau de maîtrise par chapitre
• Des suggestions de révision selon vos points faibles
• Plusieurs profils d’élève sur un même appareil

À VOTRE GOÛT
• Thème clair ou sombre, 4 tailles de texte
• Effets sonores et 7 musiques d’étude (désactivables à tout moment)
• 8 langues : français, anglais, allemand, turc, russe, arabe (de droite à gauche), chinois simplifié et kurde kurmandji
• Fonctionne sur iPhone et iPad.

CONFIDENTIALITÉ
Aucun compte requis. Pas de publicité, pas d’achats intégrés, aucune collecte de données. Votre progression reste uniquement sur votre appareil.

Le contenu suit le programme national turc de chimie du lycée.
```

**What's New in This Version (4000), v1.0** [200]

```text
Première version de Kimolab ! 24 chapitres, 3 072 questions corrigées, 80 examens blancs, un labo 3D, des fiches et 6 mini-jeux vous attendent. Vos avis sont les bienvenus via notre page d’assistance.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 chapitres, un cours complet [30] | 10 chapitres Fondamentaux + 14 Approfondissement [48] |
| 2 | Quiz + worked explanation + typeset equation | Chaque réponse expliquée [24] | 3 072 questions corrigées pas à pas [35] |
| 3 | Study slide with diagram | Des cours en images [19] | 216 diapositives illustrées et 48 schémas de chimie [51] |
| 4 | 3D lab | La chimie en 3D [15] | 32 scènes interactives : pivotez, zoomez, touchez [49] |
| 5 | Flashcards | Des fiches qui restent [22] | 396 fiches et la méthode Leitner à 5 boîtes [43] |
| 6 | Exam center / mock exams | 80 examens blancs [17] | 40 Fondamentaux + 40 Approfondissement, avec corrigé [52] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab : Chimie 3D et QCM` | [26] |
| Short description (80) | `Chimie au lycée : 3 072 questions corrigées, 80 examens blancs et un labo 3D` | [76] |
| Feature graphic headline (≤ 30) | `La chimie dans la poche` | [23] |
| Feature graphic subline (≤ 50) | `3 072 questions · Labo 3D · Hors ligne` | [38] |

**Full description (4000)** [2553]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab est un cours complet de chimie du lycée avec entraînement aux examens, utilisable hors ligne : leçons, questions corrigées, examens blancs chronométrés et labo 3D.

Kimolab, c’est un cours complet de chimie du lycée, toujours avec vous. Les 24 chapitres, 10 de niveau Fondamentaux et 14 de niveau Approfondissement, réunissent leçons illustrées, questions corrigées, examens blancs chronométrés et labo 3D interactif. Pas besoin d’Internet : révisez dans le bus, à la bibliothèque ou là où le réseau ne passe pas.

LEÇONS
• 9 diapositives illustrées par chapitre, 216 au total
• 2 schémas de chimie par chapitre, 48 au total, à agrandir d’un geste
• Les pièges classiques et les erreurs fréquentes sont signalés

BANQUE DE QUESTIONS
• 3 072 questions : 128 par chapitre, cinq propositions chacune
• Un corrigé pas à pas pour chaque question, avec des équations et formules correctement mises en forme
• 8 séries de 16 questions par chapitre, dont des questions à partir de schémas

EXAMENS BLANCS
• 80 examens blancs chronométrés : 40 Fondamentaux (7 questions, 10 min) et 40 Approfondissement (13 questions, 20 min)
• Après la remise, revoyez chaque question avec son corrigé

LABO 3D
• 32 scènes 3D interactives : réseau cristallin de NaCl, géométries VSEPR, pile Daniell, titrage, électrolyse, cycle du benzène et bien d’autres
• 99 points interactifs : faites pivoter, zoomez, touchez et lisez l’explication

RÉVISER POUR DE BON
• 396 fiches avec la méthode Leitner à 5 boîtes (répétition espacée)
• Carnet d’erreurs : chaque question ratée est conservée avec la réponse choisie
• Favoris : refaites les questions importantes en un geste

6 MINI-JEUX
Consolidez vos acquis en jouant avec Chasseur Périodique, Équilibreur d’Équation, Maître de Lewis, Simulateur de Titrage, Synthèse de Composés et Chem-Blitz 60s.

SUIVEZ VOS PROGRÈS
• Profil et statistiques, objectif quotidien et niveau de maîtrise par chapitre
• Des suggestions de révision selon vos points faibles
• Plusieurs profils d’élève sur un même appareil

À VOTRE GOÛT
• Thème clair ou sombre, 4 tailles de texte
• Effets sonores et 7 musiques d’étude (désactivables à tout moment)
• 8 langues : français, anglais, allemand, turc, russe, arabe (de droite à gauche), chinois simplifié et kurde kurmandji
• Fonctionne sur smartphones et tablettes Android.

CONFIDENTIALITÉ
Aucun compte requis. Pas de publicité, pas d’achats intégrés, aucune collecte de données. Votre progression reste uniquement sur votre appareil.

Le contenu suit le programme national turc de chimie du lycée.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.5 Русский

Store locale: App Store Connect **Russian** · Play Console **Russian – ru-RU**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: Химия 3D` | [17] |
| Subtitle (30) | `Курс, тесты, пробные экзамены` | [29] |
| Keywords (100) | `таблица,менделеева,молекулы,задачи,экзамен,карточки,органика,моль,кислоты,реакции,уравнения,офлайн` | [98] (185 bytes UTF-8) |

**Promotional Text (170)** [161]

```text
3072 задачи с подробными решениями, 80 пробных экзаменов на время, 216 иллюстрированных слайдов и 3D-лаборатория. Работает без интернета, без аккаунта и рекламы.
```

**Description (4000)** [2298]

```text
Kimolab — полный курс школьной химии для старшеклассников, который всегда с собой. Все 24 темы — 10 базового и 14 углублённого уровня — включают иллюстрированную теорию, задачи с решениями и интерактивные 3D-сцены, а для обоих уровней есть пробные экзамены на время. Интернет не нужен: занимайтесь в автобусе, в библиотеке или там, где нет связи.

ТЕОРИЯ
• 9 иллюстрированных слайдов в каждой теме, всего 216
• 2 химические схемы в каждой теме, всего 48, — их можно увеличить
• Отдельно отмечены типичные ловушки и частые ошибки

БАНК ЗАДАЧ
• 3072 вопроса: по 128 в каждой теме, по пять вариантов ответа
• Пошаговое решение к каждой задаче, уравнения и формулы аккуратно свёрстаны
• 8 тренировочных наборов по 16 вопросов в каждой теме, в том числе задачи со схемами

ПРОБНЫЕ ЭКЗАМЕНЫ
• 80 пробных экзаменов на время: 40 базовых (7 вопросов, 10 мин) и 40 углублённых (13 вопросов, 20 мин)
• После сдачи — разбор каждого вопроса с решением

3D-ЛАБОРАТОРИЯ
• 32 интерактивные 3D-сцены: кристаллическая решётка NaCl, геометрия молекул по VSEPR, элемент Даниэля, титрование, электролиз, бензольное кольцо и многое другое
• 99 активных точек: вращайте, приближайте, нажимайте и читайте пояснения

ПОВТОРЕНИЕ, КОТОРОЕ РАБОТАЕТ
• 396 карточек и интервальное повторение по системе Лейтнера из 5 коробок
• Тетрадь ошибок: сохраняет каждый неверно решённый вопрос и выбранный вами ответ
• Закладки: важные вопросы можно перерешать одним касанием

6 МИНИ-ИГР
Закрепляйте знания в игре: «Периодическая охота», «Уравнивание реакций», «Мастер формул Льюиса», «Симулятор титрования», «Котёл синтеза» и «Chem-Blitz 60 с».

ВАШ ПРОГРЕСС
• Профиль и статистика, дневная цель и уровень освоения каждой темы
• Рекомендации по слабым темам
• Несколько профилей учеников на одном устройстве

НАСТРОЙТЕ ПОД СЕБЯ
• Светлая и тёмная тема, 4 размера текста
• Звуковые эффекты и 7 музыкальных треков для учёбы (отключаются в любой момент)
• 8 языков: русский, английский, немецкий, французский, турецкий, арабский (справа налево), китайский (упрощённый) и курманджи
• Работает на iPhone и iPad.

КОНФИДЕНЦИАЛЬНОСТЬ
Аккаунт не нужен. Нет рекламы, нет встроенных покупок, данные не собираются. Ваш прогресс хранится только на вашем устройстве.

Содержание соответствует национальной программе по химии для старшей школы Турции.
```

**What's New in This Version (4000), v1.0** [171]

```text
Первая версия Kimolab! Вас ждут 24 темы, 3072 задачи с решениями, 80 пробных экзаменов, 3D-лаборатория, карточки и 6 мини-игр. Будем рады отзывам через страницу поддержки.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 темы — полный курс [21] | 10 тем базового и 14 тем углублённого уровня [44] |
| 2 | Quiz + worked explanation + typeset equation | Решение к каждой задаче [23] | 3072 вопроса с пошаговыми объяснениями [38] |
| 3 | Study slide with diagram | Теория в картинках [18] | 216 иллюстрированных слайдов и 48 схем [38] |
| 4 | 3D lab | Химия в 3D [10] | 32 интерактивные сцены: вращайте, приближайте, нажимайте [56] |
| 5 | Flashcards | Карточки, которые работают [26] | 396 карточек и система Лейтнера из 5 коробок [44] |
| 6 | Exam center / mock exams | 80 пробных экзаменов [20] | 40 базовых + 40 углублённых, с разбором ответов [47] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: Химия 3D и тесты` | [25] |
| Short description (80) | `Школьная химия: 3072 задачи с решениями, 80 пробных экзаменов, 3D-лаборатория` | [77] |
| Feature graphic headline (≤ 30) | `Химия всегда под рукой` | [22] |
| Feature graphic subline (≤ 50) | `3072 задачи · 3D-лаборатория · Офлайн` | [37] |

**Full description (4000)** [2475]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab — полный курс школьной химии с подготовкой к экзаменам, который работает без интернета: теория, задачи с решениями, пробные экзамены и 3D-лаборатория.

Kimolab — полный курс школьной химии для старшеклассников, который всегда с собой. Все 24 темы — 10 базового и 14 углублённого уровня — включают иллюстрированную теорию, задачи с решениями и интерактивные 3D-сцены, а для обоих уровней есть пробные экзамены на время. Интернет не нужен: занимайтесь в автобусе, в библиотеке или там, где нет связи.

ТЕОРИЯ
• 9 иллюстрированных слайдов в каждой теме, всего 216
• 2 химические схемы в каждой теме, всего 48, — их можно увеличить
• Отдельно отмечены типичные ловушки и частые ошибки

БАНК ЗАДАЧ
• 3072 вопроса: по 128 в каждой теме, по пять вариантов ответа
• Пошаговое решение к каждой задаче, уравнения и формулы аккуратно свёрстаны
• 8 тренировочных наборов по 16 вопросов в каждой теме, в том числе задачи со схемами

ПРОБНЫЕ ЭКЗАМЕНЫ
• 80 пробных экзаменов на время: 40 базовых (7 вопросов, 10 мин) и 40 углублённых (13 вопросов, 20 мин)
• После сдачи — разбор каждого вопроса с решением

3D-ЛАБОРАТОРИЯ
• 32 интерактивные 3D-сцены: кристаллическая решётка NaCl, геометрия молекул по VSEPR, элемент Даниэля, титрование, электролиз, бензольное кольцо и многое другое
• 99 активных точек: вращайте, приближайте, нажимайте и читайте пояснения

ПОВТОРЕНИЕ, КОТОРОЕ РАБОТАЕТ
• 396 карточек и интервальное повторение по системе Лейтнера из 5 коробок
• Тетрадь ошибок: сохраняет каждый неверно решённый вопрос и выбранный вами ответ
• Закладки: важные вопросы можно перерешать одним касанием

6 МИНИ-ИГР
Закрепляйте знания в игре: «Периодическая охота», «Уравнивание реакций», «Мастер формул Льюиса», «Симулятор титрования», «Котёл синтеза» и «Chem-Blitz 60 с».

ВАШ ПРОГРЕСС
• Профиль и статистика, дневная цель и уровень освоения каждой темы
• Рекомендации по слабым темам
• Несколько профилей учеников на одном устройстве

НАСТРОЙТЕ ПОД СЕБЯ
• Светлая и тёмная тема, 4 размера текста
• Звуковые эффекты и 7 музыкальных треков для учёбы (отключаются в любой момент)
• 8 языков: русский, английский, немецкий, французский, турецкий, арабский (справа налево), китайский (упрощённый) и курманджи
• Работает на Android-смартфонах и планшетах.

КОНФИДЕНЦИАЛЬНОСТЬ
Аккаунт не нужен. Нет рекламы, нет встроенных покупок, данные не собираются. Ваш прогресс хранится только на вашем устройстве.

Содержание соответствует национальной программе по химии для старшей школы Турции.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.6 العربية (Arabic)

Store locale: App Store Connect **Arabic** · Play Console **Arabic – ar**


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: كيمياء 3D` | [18] |
| Subtitle (30) | `كيمياء الثانوية: دروس وتمارين` | [29] |
| Keywords (100) | `الجدول,الدوري,جزيئات,اختبار,امتحان,بطاقات,عضوية,مول,أحماض,قواعد,معادلات,مختبر,مراجعة,بدون,إنترنت` | [96] (178 bytes UTF-8) |

**Promotional Text (170)** [138]

```text
3072 سؤالًا مع حلول مفصّلة، و80 امتحانًا تجريبيًا موقوتًا، و216 شريحة مصوّرة، ومختبر ثلاثي الأبعاد. يعمل دون إنترنت، بلا حساب ولا إعلانات.
```

**Description (4000)** [2123]

```text
Kimolab منهج متكامل في كيمياء المرحلة الثانوية يرافقك أينما كنت. يضم 24 وحدة، منها 10 وحدات في المستوى الأساسي و14 وحدة في المستوى المتقدم، ولكل وحدة دروس مصوّرة وأسئلة بحلول مفصّلة ومشاهد تفاعلية ثلاثية الأبعاد، إضافةً إلى امتحانات تجريبية موقوتة للمستويين. لا حاجة إلى الإنترنت: تابع دراستك في الحافلة أو المكتبة أو في أي مكان بلا تغطية.

الدروس
• 9 شرائح مصوّرة لكل وحدة، أي 216 شريحة
• مخططان كيميائيان لكل وحدة، أي 48 مخططًا يمكنك تكبيرها
• تنبيهات خاصة على الأفخاخ الشائعة والأخطاء المتكررة

بنك الأسئلة
• 3072 سؤالًا: 128 سؤالًا لكل وحدة، ولكل سؤال خمسة خيارات
• حل مفصّل خطوة بخطوة لكل سؤال، مع معادلات وصيغ كيميائية منسّقة بدقة
• 8 مجموعات تدريبية من 16 سؤالًا لكل وحدة، منها أسئلة قائمة على المخططات

الامتحانات التجريبية
• 80 امتحانًا تجريبيًا موقوتًا: 40 للمستوى الأساسي (7 أسئلة في 10 دقائق) و40 للمستوى المتقدم (13 سؤالًا في 20 دقيقة)
• بعد التسليم، راجع كل سؤال مع حله

المختبر ثلاثي الأبعاد
• 32 مشهدًا تفاعليًا ثلاثي الأبعاد: الشبكة البلورية لكلوريد الصوديوم، والأشكال الهندسية للجزيئات وفق نظرية VSEPR، وخلية دانيال، والمعايرة، والتحليل الكهربائي، وحلقة البنزين، وغيرها
• 99 نقطة تفاعلية: دوّر وكبّر والمس لتقرأ الشرح

مراجعة تثبّت المعلومة
• 396 بطاقة تعليمية مع التكرار المتباعد بنظام لايتنر ذي الصناديق الخمسة
• دفتر الأخطاء: يحفظ كل سؤال أخطأت فيه مع الإجابة التي اخترتها
• الإشارات المرجعية: أعد حل الأسئلة المهمة بلمسة واحدة

6 ألعاب مصغّرة
ثبّت معلوماتك باللعب مع «صياد الجدول الدوري» و«موازن المعادلات» و«خبير تراكيب لويس» و«محاكي المعايرة» و«مرجل التخليق الكيميائي» و«كيم-بليتز 60 ثانية».

تابع تقدّمك
• ملف شخصي وإحصاءات، وهدف يومي، ومستوى الإتقان في كل وحدة
• اقتراحات للمراجعة حسب نقاط ضعفك
• عدة ملفات طلاب على الجهاز نفسه

كما يناسبك
• سمة فاتحة وأخرى داكنة، و4 أحجام للخط
• مؤثرات صوتية و7 مقطوعات موسيقية للدراسة (يمكنك إيقافها متى شئت)
• 8 لغات: العربية (من اليمين إلى اليسار)، والإنجليزية، والتركية، والألمانية، والفرنسية، والروسية، والصينية المبسّطة، والكردية الكرمانجية
• يعمل على iPhone وiPad.

الخصوصية
لا حاجة إلى إنشاء حساب. لا إعلانات، ولا مشتريات داخل التطبيق، ولا جمع لأي بيانات. يُحفظ تقدّمك على جهازك فقط.

يتبع المحتوى المنهج الوطني التركي لمادة الكيمياء في المرحلة الثانوية.
```

**What's New in This Version (4000), v1.0** [184]

```text
الإصدار الأول من Kimolab! بانتظارك 24 وحدة، و3072 سؤالًا مع حلولها، و80 امتحانًا تجريبيًا، ومختبر ثلاثي الأبعاد، وبطاقات تعليمية، و6 ألعاب مصغّرة. يسعدنا تلقّي ملاحظاتك عبر صفحة الدعم.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 وحدة في منهج متكامل [22] | 10 وحدات للمستوى الأساسي و14 للمستوى المتقدم [44] |
| 2 | Quiz + worked explanation + typeset equation | شرح لكل إجابة [13] | 3072 سؤالًا مع حلول خطوة بخطوة [30] |
| 3 | Study slide with diagram | دروس مصوّرة [11] | 216 شريحة مصوّرة و48 مخططًا كيميائيًا [37] |
| 4 | 3D lab | الكيمياء بالأبعاد الثلاثة [25] | 32 مشهدًا تفاعليًا: دوّر وكبّر والمس [36] |
| 5 | Flashcards | بطاقات تثبّت المعلومة [21] | 396 بطاقة بنظام لايتنر ذي الصناديق الخمسة [41] |
| 6 | Exam center / mock exams | 80 امتحانًا تجريبيًا [20] | 40 للمستوى الأساسي و40 للمتقدم مع مراجعة الإجابات [49] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: كيمياء 3D واختبارات` | [28] |
| Short description (80) | `كيمياء الثانوية: 3072 سؤالًا محلولًا و80 امتحانًا تجريبيًا ومختبر ثلاثي الأبعاد` | [79] |
| Feature graphic headline (≤ 30) | `الكيمياء في جيبك` | [16] |
| Feature graphic subline (≤ 50) | `3072 سؤالًا · مختبر ثلاثي الأبعاد · دون إنترنت` | [46] |

**Full description (4000)** [2309]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab منهج كامل في كيمياء المرحلة الثانوية مع تدريب على الامتحانات، ويعمل دون إنترنت: دروس، وبنك أسئلة بحلول مفصّلة، وامتحانات تجريبية موقوتة، ومختبر ثلاثي الأبعاد.

Kimolab منهج متكامل في كيمياء المرحلة الثانوية يرافقك أينما كنت. يضم 24 وحدة، منها 10 وحدات في المستوى الأساسي و14 وحدة في المستوى المتقدم، ولكل وحدة دروس مصوّرة وأسئلة بحلول مفصّلة ومشاهد تفاعلية ثلاثية الأبعاد، إضافةً إلى امتحانات تجريبية موقوتة للمستويين. لا حاجة إلى الإنترنت: تابع دراستك في الحافلة أو المكتبة أو في أي مكان بلا تغطية.

الدروس
• 9 شرائح مصوّرة لكل وحدة، أي 216 شريحة
• مخططان كيميائيان لكل وحدة، أي 48 مخططًا يمكنك تكبيرها
• تنبيهات خاصة على الأفخاخ الشائعة والأخطاء المتكررة

بنك الأسئلة
• 3072 سؤالًا: 128 سؤالًا لكل وحدة، ولكل سؤال خمسة خيارات
• حل مفصّل خطوة بخطوة لكل سؤال، مع معادلات وصيغ كيميائية منسّقة بدقة
• 8 مجموعات تدريبية من 16 سؤالًا لكل وحدة، منها أسئلة قائمة على المخططات

الامتحانات التجريبية
• 80 امتحانًا تجريبيًا موقوتًا: 40 للمستوى الأساسي (7 أسئلة في 10 دقائق) و40 للمستوى المتقدم (13 سؤالًا في 20 دقيقة)
• بعد التسليم، راجع كل سؤال مع حله

المختبر ثلاثي الأبعاد
• 32 مشهدًا تفاعليًا ثلاثي الأبعاد: الشبكة البلورية لكلوريد الصوديوم، والأشكال الهندسية للجزيئات وفق نظرية VSEPR، وخلية دانيال، والمعايرة، والتحليل الكهربائي، وحلقة البنزين، وغيرها
• 99 نقطة تفاعلية: دوّر وكبّر والمس لتقرأ الشرح

مراجعة تثبّت المعلومة
• 396 بطاقة تعليمية مع التكرار المتباعد بنظام لايتنر ذي الصناديق الخمسة
• دفتر الأخطاء: يحفظ كل سؤال أخطأت فيه مع الإجابة التي اخترتها
• الإشارات المرجعية: أعد حل الأسئلة المهمة بلمسة واحدة

6 ألعاب مصغّرة
ثبّت معلوماتك باللعب مع «صياد الجدول الدوري» و«موازن المعادلات» و«خبير تراكيب لويس» و«محاكي المعايرة» و«مرجل التخليق الكيميائي» و«كيم-بليتز 60 ثانية».

تابع تقدّمك
• ملف شخصي وإحصاءات، وهدف يومي، ومستوى الإتقان في كل وحدة
• اقتراحات للمراجعة حسب نقاط ضعفك
• عدة ملفات طلاب على الجهاز نفسه

كما يناسبك
• سمة فاتحة وأخرى داكنة، و4 أحجام للخط
• مؤثرات صوتية و7 مقطوعات موسيقية للدراسة (يمكنك إيقافها متى شئت)
• 8 لغات: العربية (من اليمين إلى اليسار)، والإنجليزية، والتركية، والألمانية، والفرنسية، والروسية، والصينية المبسّطة، والكردية الكرمانجية
• يعمل على هواتف Android وأجهزتها اللوحية.

الخصوصية
لا حاجة إلى إنشاء حساب. لا إعلانات، ولا مشتريات داخل التطبيق، ولا جمع لأي بيانات. يُحفظ تقدّمك على جهازك فقط.

يتبع المحتوى المنهج الوطني التركي لمادة الكيمياء في المرحلة الثانوية.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.7 简体中文 (Chinese, Simplified)

Store locale: App Store Connect **Chinese (Simplified)** · Play Console **Chinese (Simplified) – zh-CN**

> China mainland App Store needs an ICP filing number for new apps; without one, exclude the China mainland storefront in Pricing and Availability. The Simplified Chinese listing still serves zh-Hans users in other storefronts (Singapore, Malaysia, etc.). Google Play is not available in mainland China.


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab：3D化学` | [12] |
| Subtitle (30) | `高中化学课程、刷题与模拟考` | [13] |
| Keywords (100) | `元素周期表,分子,化学方程式,题库,模拟考试,闪卡,有机化学,摩尔,酸碱,实验,离线,复习,练习,中学,学习,化学平衡,电化学,化学键,气体,溶液,氧化还原,分子模型` | [83] (207 bytes UTF-8) |

**Promotional Text (170)** [57]

```text
3072道题配逐步详解，80套限时模拟考，216张图解课件，外加3D化学实验室。完全离线使用，无需注册，没有广告。
```

**Description (4000)** [799]

```text
Kimolab是一套随身携带的完整高中化学课程。全部24个单元分为基础（10个单元）和进阶（14个单元）两个级别，每个单元都配有图解课程、带详解的练习题和可交互的3D场景，两个级别还各有限时模拟考。无需联网：在公交车上、图书馆里，或者没有信号的地方，都能继续学习。

图解课程
• 每个单元9张图解课件，共216张
• 每个单元2幅化学示意图，共48幅，可放大查看细节
• 重点标出常见陷阱和易错点

题库
• 3072道题：每个单元128道，每题五个选项
• 每道题都有逐步详解，化学方程式和公式规范排版
• 每个单元8组练习，每组16道题，包含看图题

模拟考试
• 80套限时模拟考：基础40套（7道题，10分钟），进阶40套（13道题，20分钟）
• 交卷后可逐题查看解析

3D实验室
• 32个交互式3D场景：氯化钠晶体结构、VSEPR分子构型、丹尼尔电池、酸碱滴定、电解、苯环等
• 99个交互热点：旋转、缩放、点按，即可阅读讲解

高效复习
• 396张闪卡，采用莱特纳五盒间隔重复法
• 错题本：自动保存每道做错的题和你选的答案
• 书签：重要题目一键重做

6款小游戏
在“周期表猎人”“方程式配平”“电子式大师”“酸碱滴定模拟器”“化合物合成工坊”和“60秒化学快答”中边玩边学。

学习进度
• 个人资料与统计数据、每日目标、各单元掌握情况
• 根据薄弱环节给出复习建议
• 同一设备可建立多个学生档案

个性化设置
• 浅色与深色主题，4档字号
• 音效和7首学习背景音乐（可随时关闭）
• 8种语言：简体中文、英语、土耳其语、德语、法语、俄语、阿拉伯语（从右向左显示）和库尔德语（库尔曼吉方言）
• 支持iPhone和iPad。

隐私
无需注册账号。没有广告，没有应用内购买，不收集任何数据。学习进度只保存在你的设备上。

课程内容依据土耳其国家高中化学课程标准编写。
```

**What's New in This Version (4000), v1.0** [78]

```text
Kimolab首个版本正式上线！24个单元、3072道详解题、80套模拟考、3D实验室、闪卡和6款小游戏等你来体验。欢迎通过支持页面告诉我们你的意见和建议。
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24个单元，完整课程 [10] | 基础10个单元＋进阶14个单元，覆盖高中化学 [22] |
| 2 | Quiz + worked explanation + typeset equation | 每道题都有详解 [7] | 3072道题，逐步讲解，公式规范排版 [18] |
| 3 | Study slide with diagram | 图解课件，一看就懂 [9] | 216张图解课件，48幅化学示意图 [17] |
| 4 | 3D lab | 立体看化学 [5] | 32个交互式3D场景：旋转、缩放、点按探索 [21] |
| 5 | Flashcards | 闪卡巩固记忆 [6] | 396张闪卡，莱特纳五盒间隔复习 [16] |
| 6 | Exam center / mock exams | 80套限时模拟考 [8] | 基础40套＋进阶40套，交卷后逐题回顾 [19] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab：3D化学课程与题库` | [17] |
| Short description (80) | `高中化学：3072道详解题、80套模拟考、3D实验室，离线可用。` | [32] |
| Feature graphic headline (≤ 30) | `口袋里的化学课` | [7] |
| Feature graphic subline (≤ 50) | `3072道题 · 3D实验室 · 离线可用` | [21] |

**Full description (4000)** [863]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab是一款可离线使用的高中化学课程与考试练习应用：图解课程、带详解的题库、限时模拟考和3D实验室，一应俱全。

Kimolab是一套随身携带的完整高中化学课程。全部24个单元分为基础（10个单元）和进阶（14个单元）两个级别，每个单元都配有图解课程、带详解的练习题和可交互的3D场景，两个级别还各有限时模拟考。无需联网：在公交车上、图书馆里，或者没有信号的地方，都能继续学习。

图解课程
• 每个单元9张图解课件，共216张
• 每个单元2幅化学示意图，共48幅，可放大查看细节
• 重点标出常见陷阱和易错点

题库
• 3072道题：每个单元128道，每题五个选项
• 每道题都有逐步详解，化学方程式和公式规范排版
• 每个单元8组练习，每组16道题，包含看图题

模拟考试
• 80套限时模拟考：基础40套（7道题，10分钟），进阶40套（13道题，20分钟）
• 交卷后可逐题查看解析

3D实验室
• 32个交互式3D场景：氯化钠晶体结构、VSEPR分子构型、丹尼尔电池、酸碱滴定、电解、苯环等
• 99个交互热点：旋转、缩放、点按，即可阅读讲解

高效复习
• 396张闪卡，采用莱特纳五盒间隔重复法
• 错题本：自动保存每道做错的题和你选的答案
• 书签：重要题目一键重做

6款小游戏
在“周期表猎人”“方程式配平”“电子式大师”“酸碱滴定模拟器”“化合物合成工坊”和“60秒化学快答”中边玩边学。

学习进度
• 个人资料与统计数据、每日目标、各单元掌握情况
• 根据薄弱环节给出复习建议
• 同一设备可建立多个学生档案

个性化设置
• 浅色与深色主题，4档字号
• 音效和7首学习背景音乐（可随时关闭）
• 8种语言：简体中文、英语、土耳其语、德语、法语、俄语、阿拉伯语（从右向左显示）和库尔德语（库尔曼吉方言）
• 支持Android手机和平板电脑。

隐私
无需注册账号。没有广告，没有应用内购买，不收集任何数据。学习进度只保存在你的设备上。

课程内容依据土耳其国家高中化学课程标准编写。
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

### 3.8 Kurdî – Kurmancî (Kurdish)

Store locale: App Store Connect **(not available in App Store Connect)** · Play Console **(not available in Play Console)**

> **Not uploadable today.** Kurdish is not in App Store Connect's 50 metadata languages and not in Play Console's store-listing translation languages (both checked Nov 2026, see §7). Kurdish-speaking users see the Turkish (or English) listing. Keep this copy for the website, press kit and a future store locale; the Turkish and English descriptions already state that the app is available in Kurmanji.


#### App Store

| Field (limit) | Value | Count |
|---|---|---|
| Name (30) | `Kimolab: Kîmya 3D` | [17] |
| Subtitle (30) | `Kîmyaya lîseyê: ders û test` | [27] |
| Keywords (100) | `tabloya,periyodîk,molekul,ezmûn,pirs,kart,organîk,mol,asît,baz,hevkêşe,laboratuwar,dubarekirin` | [94] (100 bytes UTF-8) |

**Promotional Text (170)** [147]

```text
3.072 pirs bi çareseriyên gav bi gav, 80 ezmûnên ceribandinê yên bi dem, 216 slaytên wênedar û laboratuwareke 3D. Bê înternet, bê hesab, bê reklam.
```

**Description (4000)** [2260]

```text
Kimolab qursek temam a kîmyaya lîseyê ye ku her tim bi te re ye. Hemû 24 yekîne, 10 di asta Bingehîn de û 14 di asta Pêşketî de, bi dersên wênedar, pirsên bi çareserî û dîmenên 3D yên înteraktîf tên; ji bo herdu astan jî ezmûnên ceribandinê yên bi dem hene. Înternet ne pêwîst e: di otobusê de, li pirtûkxaneyê an li cihekî bê xet xwendina xwe bidomîne.

DERS
• Ji bo her yekîneyê 9 slaytên wênedar, bi giştî 216
• Ji bo her yekîneyê 2 diyagramên kîmyayê, bi giştî 48; dikarî mezin bikî
• Xefik û şaşiyên herî berbelav bi taybetî tên nîşandan

BANKEYA PIRSAN
• 3.072 pirs: ji bo her yekîneyê 128, her yek bi pênc vebijarkan
• Ji bo her pirsê çareseriya gav bi gav, hevkêşe û formul bi rêkûpêkî tên nivîsandin
• Ji bo her yekîneyê 8 komên xebatê yên 16 pirsî, bi pirsên diyagramî jî

EZMÛNÊN CERIBANDINÊ
• 80 ezmûnên bi dem: 40 Bingehîn (7 pirs, 10 deqîqe) û 40 Pêşketî (13 pirs, 20 deqîqe)
• Piştî radestkirinê her pirsê bi çareseriya wê re binirxîne

LABORATUWARA 3D
• 32 dîmenên 3D yên înteraktîf: tora krîstalê ya NaCl, şeklên VSEPR, pîla Daniell, tîtrasyon, elektrolîz, xeleka benzenê û hîn bêtir
• 99 xalên înteraktîf: bizivirîne, mezin bike, pê bigire û şiroveyê bixwîne

DUBAREKIRINA KU DI BÎRÊ DE DIMÎNE
• 396 kart bi dubarekirina navberkirî ya pergala Leitner a 5 qutiyan
• Deftera şaşiyan: her pirsa ku te şaş bersiv daye û bersiva te tê parastin
• Nîşan: pirsên girîng bi yek pêlêkirinê dîsa çareser bike

6 LÎSTIK
Bi Nêçîrvanê Periyodîk, Hevsengkerê Hevkêşeyan, Hostayê Xalên Lewis, Simulatora Tîtrasyonê, Laboratuwara Sentezê û Chem-Blitz 60ç kîmyayê bi lîstinê xurt bike.

PÊŞVEÇÛNA TE
• Profîl û statîstîk, armanca rojane û asta serkeftinê ya her yekîneyê
• Pêşniyarên xebatê li gorî mijarên te yên qels
• Li ser heman cîhazê çend profîlên xwendekaran

LI GORÎ DILÊ TE
• Tema ronî û tarî, 4 mezinahiyên nivîsê
• Efektên dengî û 7 muzîkên xwendinê (her gav dikarî bigirî)
• 8 ziman: Kurmancî, Tirkî, Îngilîzî, Almanî, Fransî, Rûsî, Erebî (ji rastê ber bi çepê) û Çînî (sadekirî)
• Li ser iPhone û iPad dixebite.

NEPENÎTÎ
Hesab ne pêwîst e. Reklam tune, kirîna di nav sepanê de tune, tu dane nayên berhevkirin. Pêşveçûna te tenê li ser cîhaza te tê tomarkirin.

Naverok li gorî bernameya neteweyî ya Tirkiyeyê ya kîmyaya lîseyê hatiye amadekirin.
```

**What's New in This Version (4000), v1.0** [203]

```text
Guhertoya yekem a Kimolab li vir e! 24 yekîne, 3.072 pirsên bi çareserî, 80 ezmûnên ceribandinê, laboratuwara 3D, kart û 6 lîstik li benda te ne. Ji kerema xwe ramanên xwe bi rûpela piştgiriyê re bişîne.
```

**Screenshot captions** (headline ≤ 30 · subline ≤ 60)

| # | Screen | Headline | Subline |
|---|---|---|---|
| 1 | Home / units | 24 yekîne, qursek temam [23] | 10 yekîneyên Bingehîn + 14 yekîneyên Pêşketî [44] |
| 2 | Quiz + worked explanation + typeset equation | Her bersiv bi şirove [20] | 3.072 pirs bi çareseriya gav bi gav [35] |
| 3 | Study slide with diagram | Ders bi wêneyan [15] | 216 slaytên wênedar û 48 diyagramên kîmyayê [43] |
| 4 | 3D lab | Kîmyayê bi 3D bibîne [20] | 32 dîmenên înteraktîf: bizivirîne, mezin bike, pê bigire [56] |
| 5 | Flashcards | Kartên ku di bîrê de dimînin [28] | 396 kart bi pergala Leitner a 5 qutiyan [39] |
| 6 | Exam center / mock exams | 80 ezmûnên ceribandinê [22] | 40 Bingehîn + 40 Pêşketî, bi nirxandina bersivan [48] |

#### Google Play

| Field (limit) | Value | Count |
|---|---|---|
| App name (30) | `Kimolab: Kîmya 3D û Test` | [24] |
| Short description (80) | `Kîmyaya lîseyê: 3.072 pirsên çareserkirî, 80 ezmûn, laboratuwara 3D. Bê înternet` | [80] |
| Feature graphic headline (≤ 30) | `Kîmya di bêrîka te de` | [21] |
| Feature graphic subline (≤ 50) | `3.072 pirs · Laboratuwara 3D · Bê înternet` | [42] |

**Full description (4000)** [2421]  
(Same body as the App Store description with a search-oriented opening paragraph, because Play indexes the full description for search; Apple does not.)

```text
Kimolab qursek temam a kîmyaya lîseyê û amadekariya ezmûnan e ku bê înternet dixebite: ders, pirsên bi çareserî, ezmûnên bi dem û laboratuwara 3D.

Kimolab qursek temam a kîmyaya lîseyê ye ku her tim bi te re ye. Hemû 24 yekîne, 10 di asta Bingehîn de û 14 di asta Pêşketî de, bi dersên wênedar, pirsên bi çareserî û dîmenên 3D yên înteraktîf tên; ji bo herdu astan jî ezmûnên ceribandinê yên bi dem hene. Înternet ne pêwîst e: di otobusê de, li pirtûkxaneyê an li cihekî bê xet xwendina xwe bidomîne.

DERS
• Ji bo her yekîneyê 9 slaytên wênedar, bi giştî 216
• Ji bo her yekîneyê 2 diyagramên kîmyayê, bi giştî 48; dikarî mezin bikî
• Xefik û şaşiyên herî berbelav bi taybetî tên nîşandan

BANKEYA PIRSAN
• 3.072 pirs: ji bo her yekîneyê 128, her yek bi pênc vebijarkan
• Ji bo her pirsê çareseriya gav bi gav, hevkêşe û formul bi rêkûpêkî tên nivîsandin
• Ji bo her yekîneyê 8 komên xebatê yên 16 pirsî, bi pirsên diyagramî jî

EZMÛNÊN CERIBANDINÊ
• 80 ezmûnên bi dem: 40 Bingehîn (7 pirs, 10 deqîqe) û 40 Pêşketî (13 pirs, 20 deqîqe)
• Piştî radestkirinê her pirsê bi çareseriya wê re binirxîne

LABORATUWARA 3D
• 32 dîmenên 3D yên înteraktîf: tora krîstalê ya NaCl, şeklên VSEPR, pîla Daniell, tîtrasyon, elektrolîz, xeleka benzenê û hîn bêtir
• 99 xalên înteraktîf: bizivirîne, mezin bike, pê bigire û şiroveyê bixwîne

DUBAREKIRINA KU DI BÎRÊ DE DIMÎNE
• 396 kart bi dubarekirina navberkirî ya pergala Leitner a 5 qutiyan
• Deftera şaşiyan: her pirsa ku te şaş bersiv daye û bersiva te tê parastin
• Nîşan: pirsên girîng bi yek pêlêkirinê dîsa çareser bike

6 LÎSTIK
Bi Nêçîrvanê Periyodîk, Hevsengkerê Hevkêşeyan, Hostayê Xalên Lewis, Simulatora Tîtrasyonê, Laboratuwara Sentezê û Chem-Blitz 60ç kîmyayê bi lîstinê xurt bike.

PÊŞVEÇÛNA TE
• Profîl û statîstîk, armanca rojane û asta serkeftinê ya her yekîneyê
• Pêşniyarên xebatê li gorî mijarên te yên qels
• Li ser heman cîhazê çend profîlên xwendekaran

LI GORÎ DILÊ TE
• Tema ronî û tarî, 4 mezinahiyên nivîsê
• Efektên dengî û 7 muzîkên xwendinê (her gav dikarî bigirî)
• 8 ziman: Kurmancî, Tirkî, Îngilîzî, Almanî, Fransî, Rûsî, Erebî (ji rastê ber bi çepê) û Çînî (sadekirî)
• Li ser telefon û tabletên Android dixebite.

NEPENÎTÎ
Hesab ne pêwîst e. Reklam tune, kirîna di nav sepanê de tune, tu dane nayên berhevkirin. Pêşveçûna te tenê li ser cîhaza te tê tomarkirin.

Naverok li gorî bernameya neteweyî ya Tirkiyeyê ya kîmyaya lîseyê hatiye amadekirin.
```

**Screenshot captions:** reuse the six App Store captions above (same order).


---

## 4. Common App Store settings (App Store Connect)

### 4.1 App information
| Field | Value |
|---|---|
| Primary language | Turkish (the main market). English (U.S.) is the fallback for every storefront without its own localization. |
| Bundle ID / SKU | `com.kimyager.ykskimya` / SKU suggestion `kimolab-ios-001` |
| Primary category | **Education** |
| Secondary category | **Reference** (optional; leave empty if you prefer) |
| Content rights | "Does not contain, show or access third-party content" — all content ships inside the app. |
| Copyright | `© 2026 TODO: developer legal name` |
| Price | Free (tier 0). No in-app purchases. |
| Availability | All storefronts. China mainland only once an ICP filing number exists (see §3.7); otherwise exclude China mainland. |
| Support URL | `TODO: https://…/support` (required) |
| Marketing URL | `TODO: https://…` (optional) |
| Privacy Policy URL | `TODO: https://…/privacy` (required; host `store/privacy-policy.md`) |
| Contact email (App Review) | `TODO: support@…` |

### 4.2 Age rating questionnaire (current Apple form)
Answer **None / No** to everything:

- In-App Controls: Parental Controls: No · Age Assurance: No
- Capabilities: Unrestricted Web Access: No · User-Generated Content: No · Social Media: No · Messaging and Chat: No · Advertising: No
- Mature Themes: Profanity or Crude Humor: None · Horror/Fear Themes: None · Alcohol, Tobacco, or Drug Use or References: None (organic chemistry names compounds such as ethanol as chemistry, not as drinking or drug use)
- Medical or Wellness: Medical or Treatment Information: None · Health or Wellness Topics: None
- Sexuality or Nudity: all None
- Violence: Cartoon or Fantasy, Realistic, Prolonged Graphic, Guns or Other Weapons: all None
- Chance-Based Activities: Gambling: No · Simulated Gambling: None · Contests: None · Loot Boxes: No

Expected result: **4+**. Do not choose "Made for Kids" (Kids category): the audience is secondary-school students and the Kids category adds rules the app does not need.

### 4.3 App Privacy ("nutrition label")
- "Do you or your third-party partners collect data from this app?" → **No** → label shows **Data Not Collected**.
- Basis: no network code, analytics, ads or crash-reporting SDK. Progress, profiles, flashcard boxes and settings are saved in the web view's `localStorage` on the device and never leave it.
- Privacy manifest: the app's own code adds no native required-reason API calls; Capacitor 8 ships its own `PrivacyInfo.xcprivacy`. Check Xcode → Product → Archive → "Generate Privacy Report" before submitting.

### 4.4 Export compliance
`ITSAppUsesNonExemptEncryption` is **not** set in `ios/App/App/Info.plist`, so App Store Connect asks on every build. Answer: the app uses no encryption, or only encryption exempt under Category 5 Part 2 (it makes no network calls). You can add the key `ITSAppUsesNonExemptEncryption = NO` later to stop the question (source change, not done here).

### 4.5 App Review information
- Sign-in required: **No** (leave demo account empty).
- Notes for review (paste):

```text
Kimolab is an offline chemistry study app for secondary-school students (Turkish national curriculum, 8 interface languages). No login, no account, no network access, no ads, no in-app purchases and no data collection. All content (lessons, 3,072 questions per language, mock exams, 3D scenes, flashcards, mini-games) ships inside the app; progress is stored only on the device.
How to test: on first launch, finish the short onboarding (pick a study focus and a daily goal). Tabs: Curriculum (units and illustrated slides), 3D Lab, Flashcards, Games, Exams, Profile. Change the language and theme in Settings. Arabic switches the layout to right-to-left.
The app works in airplane mode.
```

### 4.6 Version 1.0 release
- What's New: see each language in §3.
- Release: manual release after approval (recommended for the first version).

### 4.7 Product page languages
The App Store's "Languages" row comes from the localizations declared in the app bundle, not from the metadata. `Info.plist` currently declares only `CFBundleDevelopmentRegion = en` and no `CFBundleLocalizations`, so the product page would show "English" only. Add `CFBundleLocalizations` (tr, en, de, fr, ru, ar, zh-Hans, plus Kurdish if Xcode accepts it) before the release build (source change, not done here).

### 4.8 Search result view: which screenshots appear first
In App Store search results a portrait iPhone app shows its **first 3 screenshots** side by side under the name, subtitle and rating. With the plan here they are:
1. **Home / units:** proves scope at a glance (24 units, both levels).
2. **Quiz + worked explanation:** the main daily use (practice with solutions) and shows the typeset equations that set it apart from apps that use plain-text formulas.
3. **Study slide with diagram:** shows that the app teaches, not only tests.

The 3D lab (screenshot 4) is the most visually striking screen. If an A/B test (Product Page Optimization) is possible later, try a variant with the 3D lab in position 2 or 3. Keep headlines short and large (≥ 70 pt on a 1320 px wide canvas) so they stay legible at search-result size. On iPad the first 2–3 screenshots also appear in search, depending on orientation.

---

## 5. Common Google Play settings (Play Console)

### 5.1 Store settings
| Field | Value |
|---|---|
| Default listing language | Turkish – tr-TR (add the other 6 translations; Kurdish is not available, see §3.8) |
| App or game | App |
| Category | **Education** |
| Tags (pick up to 5 in Console) | suggestions: Chemistry, Science, Test preparation, Study, Education |
| Contact email | `TODO: support@…` (required, public) |
| Website | `TODO: https://…` (optional) |
| Privacy policy | `TODO: https://…/privacy` (required) |
| Price | Free. No in-app products. |

### 5.2 App content declarations
| Section | Answer |
|---|---|
| Privacy policy | URL above (TODO) |
| Ads | **No**, the app does not contain ads |
| App access | All functionality is available without special access (no login) |
| Content rating (IARC) | Category: Reference, News, or Educational. Violence / fear / sexuality / language / controlled substances / crude humour: **No**. Gambling or simulated gambling: **No**. Users can interact or exchange content: **No**. Shares user's location: **No**. Allows purchase of digital goods: **No**. Unrestricted internet access: **No**. Expected: PEGI 3, ESRB Everyone, USK 0, IARC 3+. |
| Target audience and content | Age groups: **13–15, 16–17, 18 and over** (see justification below). "Could the app unintentionally appeal to children?" → No. |
| News app | No |
| Data safety | "Does your app collect or share any of the required user data types?" → **No**. Result: *No data collected · No data shared*. Account deletion: not applicable (no accounts). Encryption in transit: not applicable (no transmission). |
| Government app | No |
| Financial features | None |
| Health | None |

Note: `AndroidManifest.xml` declares `android.permission.INTERNET` (Capacitor template default) although the app makes no network requests. This does not change the Data safety answers, which are about data collected or shared. Removing the permission would make "offline" visible on the listing's permission list (source change, not done here).

**Target audience justification:** the content is secondary-school / university-entrance chemistry, written and reviewed for teenagers and adults. Including under-13 age groups would put the app under the Families policy (extra review and design rules) for an audience it is not built for. The app collects no data, so it is safe for younger users who find it anyway, and the App Store 4+ rating reflects that.

### 5.3 Testing before production
If the Play developer account is a **personal account created after 13 Nov 2023**, Google requires a closed test with at least 12 opted-in testers for 14 continuous days before production access (organization accounts are exempt). Plan for this before the launch date. Check the current rule in Play Console Help.

---

## 6. Graphic assets

Checked 2026-11-15 against the official pages. Changes from the brief are in **bold**.

### 6.1 App Store (Apple)
| Asset | Size (px) | Format / notes |
|---|---|---|
| App icon | 1024 × 1024 | PNG, no alpha, no rounded corners. The current `AppIcon-512@2x.png` is 1024 × 1024 with no alpha (checked with `sips`). |
| iPhone 6.9" ("Dynamic Island, large display") | **1320 × 2868** (also accepted: 1290 × 2796, 1260 × 2736) | 6 screenshots, portrait. Upload this set. |
| iPhone 6.3" ("Dynamic Island, medium display") | 1206 × 2622 or 1179 × 2556 | **This is the class Apple now lists as required for iPhone.** If you don't upload it, Apple scales down the 6.5" set, and if that is missing too, the 6.9" set. Uploading only the 6.9" set is enough; a native 6.3" set is optional. |
| iPhone 6.5" ("Face ID, large display") | 1284 × 2778 or 1242 × 2688 | **Not needed when a 6.9" set exists** (required only if there is no 6.9" set). |
| iPad 13" | 2064 × 2752 (or 2048 × 2732) portrait | Required because the app runs on iPad. 6 screenshots. |
| Limits | 1–10 per device size | `.png`, `.jpg` or `.jpeg`, RGB, no transparency. Optional app preview videos (up to 3). |

### 6.2 Google Play
| Asset | Size (px) | Format / notes |
|---|---|---|
| App icon | 512 × 512 | 32-bit PNG **with alpha allowed**, max **1024 KB**. Play applies the round mask. |
| Feature graphic | 1024 × 500 | JPEG or 24-bit PNG, **no alpha**. Required to publish. Keep text inside the central safe area. Headline/subline per language in §3. |
| Phone screenshots | 1080 × 1920 (9:16) recommended | 2–8, JPEG or 24-bit PNG, no alpha; each side 320–3840 px; **the long side may be at most twice the short side** (so 1080 × 2340 is not allowed). At least 4 screenshots of ≥ 1080 px are recommended for promotion eligibility. |
| 7-inch tablet screenshots | e.g. **1080 × 1920** (9:16) | Up to 8. **Large-screen rule: each side 1080–7680 px, 9:16 or 16:9.** Google no longer gives separate 7"/10" pixel sizes, only this rule. |
| 10-inch tablet screenshots | e.g. **1440 × 2560** (9:16) or 2560 × 1440 (16:9) | Up to 8, same large-screen rule. Show tablet layouts, not stretched phone shots. |

The brief's "phone 1080×1920 (16:9)" is correct in size; the ratio is 9:16 in portrait. Add the 2:1 maximum side ratio.

---

## 7. Open items and sources

### 7.1 TODO before submission
- [ ] Final name decision + trademark search (TÜRKPATENT, EUIPO) + domain.
- [ ] Support URL, marketing URL, privacy policy URL, contact email, copyright holder (all marked `TODO`).
- [ ] Host `store/privacy-policy.md` at the privacy URL; fill in its TODOs.
- [ ] Rename the app on the device (`CFBundleDisplayName`, Android `app_name`) to match the store name.
- [ ] Add `CFBundleLocalizations` (§4.7) and optionally `ITSAppUsesNonExemptEncryption = NO` (§4.4).
- [ ] Screenshots: before capturing the non-Turkish sets, check that no screen shows "TYT", "AYT", "YKS" or "ÖSYM" (the level-label work on this branch is still uncommitted). The unused `appTagline` strings in `src/i18n/translations.ts` still contain "TYT & AYT" in every language, but no component renders them.
- [ ] Optional: flashcards cover units 1–22 only (`compileAllFlashcards` → `units.slice(0, 22)`). The copy avoids claiming full coverage.
- [ ] China mainland: ICP filing or exclude storefront.
- [ ] Play: closed test 12 testers × 14 days if the account is a new personal account.

### 7.2 Sources (accessed 2026-11-15)
- Apple – Screenshot specifications: https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications
- Apple – App Store localizations (50 languages, no Kurdish): https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations
- Apple – Age ratings values and definitions: https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions
- Google – Add preview assets to showcase your app: https://support.google.com/googleplay/android-developer/answer/9866151
- Google – Translate and localize your app / store listing languages (no Kurdish): https://support.google.com/googleplay/android-developer/answer/9844778
- Google – App testing requirements for new personal developer accounts: https://support.google.com/googleplay/android-developer/answer/14151465
- Keyword limit counted in characters in practice: https://appdrift.co/blog/aso-localization
- Name checks: iTunes Search API (`https://itunes.apple.com/search?term=<name>&entity=software&country=tr|us`) and `https://play.google.com/store/search?q=<name>&c=apps`; trademark lookalikes via trademarkdir.com / markinton.com search results for "Kemistry"/"Kemistre".
