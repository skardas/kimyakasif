# Kimolab – store graphics

Generated 2026-11-15 from the running app (dark theme, seeded mid-progress demo profile) with headless Chrome. All PNGs are sRGB; every image is RGB without alpha except the Play icon (RGBA, fully opaque, 32-bit as Play asks). Captions are taken verbatim from `store/STORE_LISTING.md` §3. Visual contact sheet: [`overview.html`](overview.html).

## Folder layout

```
store/assets/
  appstore/AppIcon-1024.png                    App Store 1024 icon (no alpha) – same artwork as the Xcode AppIcon
  appstore/<lang>/iphone-6.9in_1320x2868/      6 iPhone screenshots
  appstore/<lang>/ipad-13in_2064x2752/         6 iPad screenshots (sidebar tablet layout)
  googleplay/icon-512.png                      Play icon
  googleplay/feature-graphic-notext-1024x500.png  text-free feature graphic (language-neutral)
  googleplay/<lang>/feature-graphic_1024x500.png
  googleplay/<lang>/phone_1080x1920/           6 phone screenshots
  googleplay/<lang>/tablet-7in_1080x1920/      6 7-inch tablet screenshots (600 dp wide layout)
  googleplay/<lang>/tablet-10in_1440x2560/     6 10-inch tablet screenshots (sidebar layout)
  googleplay/<lang>/chromebook_1920x1080/      6 Chromebook screenshots (landscape, text-free, optional slot)
  promo/<lang>/promo-banner_1920x1080.png      optional marketing banner (not a store slot)
  search-preview/<lang>.png                    App Store search-result mock – NOT for upload
  ku_later-website-only/                       Kurdish (Kurmanji): same structure; not uploadable to either store today
```

`<lang>` = tr, en, de, fr, ru, ar, zh. Console locales: App Store Connect Turkish / English (U.S.) / German / French / Russian / Arabic / Chinese (Simplified); Play Console tr-TR / en-US / de-DE / fr-FR / ru-RU / ar / zh-CN.

## What each screenshot shows

| # | File stem | Screen shown (identical in every language) |
|---|---|---|
| 1 | `01-home-units` | Home / curriculum: unit list (All · 24), today's goal 14/20, progress bars on units 1–7 |
| 2 | `02-quiz-solution` | Starred-question session, unit 13 question 15 (Graham's law, CH4 vs SO2 in a 100 cm tube), answer E 66.7 cm picked → green worked solution with typeset √(64/16) and fractions |
| 3 | `03-study-slide` | Unit 19 (Acid–base equilibrium & titration) slide 1 "Big picture" with the titration-curve / burette diagram |
| 4 | `04-3d-lab` | 3D Lab, scene "Methane tetrahedral molecule" (unit 7), WebGL render, hotspot 1 (central carbon sp³) open, pins 1–3 visible |
| 5 | `05-flashcards` | Flashcards, first card (unit 1), Leitner boxes 340/20/18/12/6 |
| 6 | `06-mock-exams` | Exam Centre, Basic tab: featured mock #4, mock #1 with best score, mistake notebook 23, starred 1 |

## Where each file goes

| Files | Size | Upload to |
|---|---|---|
| `appstore/<lang>/iphone-6.9in_1320x2868/*` | 1320 × 2868 | App Store Connect → app → iOS version → localization → Previews and Screenshots → **iPhone 6.9" Display** (Apple scales it for smaller iPhones) |
| `appstore/<lang>/ipad-13in_2064x2752/*` | 2064 × 2752 | same page → **iPad 13" Display** |
| `appstore/AppIcon-1024.png` | 1024 × 1024 | Not uploaded separately: App Store Connect takes the icon from the build. Matches `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` |
| `googleplay/icon-512.png` | 512 × 512 | Play Console → Grow users → Store presence → Main store listing → **App icon** |
| `googleplay/<lang>/feature-graphic_1024x500.png` | 1024 × 500 | Main store listing (per translation) → **Feature graphic** |
| `googleplay/feature-graphic-notext-1024x500.png` | 1024 × 500 | Alternative feature graphic without text (any language) |
| `googleplay/<lang>/phone_1080x1920/*` | 1080 × 1920 | Main store listing → **Phone screenshots** |
| `googleplay/<lang>/tablet-7in_1080x1920/*` | 1080 × 1920 | Main store listing → **7-inch tablet screenshots** |
| `googleplay/<lang>/tablet-10in_1440x2560/*` | 1440 × 2560 | Main store listing → **10-inch tablet screenshots** |
| `googleplay/<lang>/chromebook_1920x1080/*` | 1920 × 1080 | Main store listing → **Chromebook screenshots** (optional) |
| `promo/<lang>/promo-banner_1920x1080.png` | 1920 × 1080 | Website / social / press. No App Store or Play slot |
| `search-preview/<lang>.png` | 1179 × 1440 | Review only |

Notes
- Foldables: Google Play has no separate foldable upload slot; foldables and large screens use the tablet (and Chromebook) sets. Google asks large-screen screenshots to avoid text outside the app experience; the Chromebook set is text-free, the tablet sets carry the same captions as the phone set (swap in text-free versions if you want to follow that guidance strictly).
- Play tablet sizes follow the current rule in STORE_LISTING.md §6.2 (9:16, each side 1080–7680 px), not the older 1200×1920 / 1600×2560 sizes.
- The Kurdish set is complete but neither store offers Kurdish as a listing language (see STORE_LISTING.md §3.8).

## File index

| Folder | File | Pixels | Mode | Size |
|---|---|---|---|---|
| `appstore` | `AppIcon-1024.png` | 1024 × 1024 | RGB | 198 KB |
| `appstore/ar/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.1 MB |
| `appstore/ar/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 844 KB |
| `appstore/ar/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 922 KB |
| `appstore/ar/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/ar/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 837 KB |
| `appstore/ar/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/ar/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 815 KB |
| `appstore/ar/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 752 KB |
| `appstore/ar/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 924 KB |
| `appstore/ar/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/ar/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 696 KB |
| `appstore/ar/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 987 KB |
| `appstore/de/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/de/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 898 KB |
| `appstore/de/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 987 KB |
| `appstore/de/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/de/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 881 KB |
| `appstore/de/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/de/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 889 KB |
| `appstore/de/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 814 KB |
| `appstore/de/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 1001 KB |
| `appstore/de/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/de/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 828 KB |
| `appstore/de/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.0 MB |
| `appstore/en/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/en/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 888 KB |
| `appstore/en/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 953 KB |
| `appstore/en/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/en/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 868 KB |
| `appstore/en/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/en/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 885 KB |
| `appstore/en/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 834 KB |
| `appstore/en/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 1014 KB |
| `appstore/en/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/en/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 758 KB |
| `appstore/en/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.0 MB |
| `appstore/fr/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/fr/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 904 KB |
| `appstore/fr/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 987 KB |
| `appstore/fr/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/fr/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 875 KB |
| `appstore/fr/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/fr/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 915 KB |
| `appstore/fr/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 859 KB |
| `appstore/fr/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 1007 KB |
| `appstore/fr/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/fr/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 783 KB |
| `appstore/fr/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.0 MB |
| `appstore/ru/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/ru/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 878 KB |
| `appstore/ru/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 1006 KB |
| `appstore/ru/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/ru/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 970 KB |
| `appstore/ru/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/ru/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 868 KB |
| `appstore/ru/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 827 KB |
| `appstore/ru/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 1006 KB |
| `appstore/ru/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.0 MB |
| `appstore/ru/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 814 KB |
| `appstore/ru/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/tr/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/tr/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 872 KB |
| `appstore/tr/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 940 KB |
| `appstore/tr/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/tr/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 847 KB |
| `appstore/tr/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.3 MB |
| `appstore/tr/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 864 KB |
| `appstore/tr/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 850 KB |
| `appstore/tr/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 971 KB |
| `appstore/tr/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/tr/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 765 KB |
| `appstore/tr/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.0 MB |
| `appstore/zh/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.1 MB |
| `appstore/zh/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 868 KB |
| `appstore/zh/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 920 KB |
| `appstore/zh/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `appstore/zh/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 829 KB |
| `appstore/zh/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.4 MB |
| `appstore/zh/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 773 KB |
| `appstore/zh/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 768 KB |
| `appstore/zh/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 887 KB |
| `appstore/zh/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `appstore/zh/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 670 KB |
| `appstore/zh/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.0 MB |
| `googleplay` | `feature-graphic-notext-1024x500.png` | 1024 × 500 | RGB | 297 KB |
| `googleplay` | `icon-512.png` | 512 × 512 | RGBA | 105 KB |
| `googleplay/ar` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 263 KB |
| `googleplay/ar/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 218 KB |
| `googleplay/ar/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 142 KB |
| `googleplay/ar/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 278 KB |
| `googleplay/ar/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 357 KB |
| `googleplay/ar/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 143 KB |
| `googleplay/ar/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 337 KB |
| `googleplay/ar/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 624 KB |
| `googleplay/ar/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 596 KB |
| `googleplay/ar/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 640 KB |
| `googleplay/ar/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 699 KB |
| `googleplay/ar/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 562 KB |
| `googleplay/ar/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 684 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 802 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 546 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 596 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 760 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 548 KB |
| `googleplay/ar/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 878 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 437 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 419 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 523 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 618 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 388 KB |
| `googleplay/ar/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 571 KB |
| `googleplay/de` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 275 KB |
| `googleplay/de/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 235 KB |
| `googleplay/de/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 155 KB |
| `googleplay/de/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 316 KB |
| `googleplay/de/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 363 KB |
| `googleplay/de/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 154 KB |
| `googleplay/de/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 361 KB |
| `googleplay/de/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 663 KB |
| `googleplay/de/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 647 KB |
| `googleplay/de/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 702 KB |
| `googleplay/de/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 725 KB |
| `googleplay/de/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 631 KB |
| `googleplay/de/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 726 KB |
| `googleplay/de/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 877 KB |
| `googleplay/de/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 595 KB |
| `googleplay/de/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 650 KB |
| `googleplay/de/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 788 KB |
| `googleplay/de/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 591 KB |
| `googleplay/de/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 927 KB |
| `googleplay/de/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 478 KB |
| `googleplay/de/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 464 KB |
| `googleplay/de/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 585 KB |
| `googleplay/de/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 625 KB |
| `googleplay/de/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 426 KB |
| `googleplay/de/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 619 KB |
| `googleplay/en` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 275 KB |
| `googleplay/en/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 224 KB |
| `googleplay/en/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 145 KB |
| `googleplay/en/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 284 KB |
| `googleplay/en/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 369 KB |
| `googleplay/en/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 144 KB |
| `googleplay/en/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 352 KB |
| `googleplay/en/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 657 KB |
| `googleplay/en/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 647 KB |
| `googleplay/en/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 688 KB |
| `googleplay/en/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 728 KB |
| `googleplay/en/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 604 KB |
| `googleplay/en/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 705 KB |
| `googleplay/en/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 856 KB |
| `googleplay/en/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 584 KB |
| `googleplay/en/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 625 KB |
| `googleplay/en/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 792 KB |
| `googleplay/en/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 577 KB |
| `googleplay/en/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 942 KB |
| `googleplay/en/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 471 KB |
| `googleplay/en/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 451 KB |
| `googleplay/en/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 564 KB |
| `googleplay/en/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 632 KB |
| `googleplay/en/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 412 KB |
| `googleplay/en/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 599 KB |
| `googleplay/fr` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 274 KB |
| `googleplay/fr/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 240 KB |
| `googleplay/fr/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 156 KB |
| `googleplay/fr/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 293 KB |
| `googleplay/fr/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 366 KB |
| `googleplay/fr/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 152 KB |
| `googleplay/fr/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 371 KB |
| `googleplay/fr/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 676 KB |
| `googleplay/fr/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 662 KB |
| `googleplay/fr/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 710 KB |
| `googleplay/fr/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 716 KB |
| `googleplay/fr/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 613 KB |
| `googleplay/fr/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 732 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 897 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 598 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 651 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 784 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 586 KB |
| `googleplay/fr/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 934 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 493 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 467 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 582 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 624 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 415 KB |
| `googleplay/fr/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 631 KB |
| `googleplay/ru` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 273 KB |
| `googleplay/ru/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 247 KB |
| `googleplay/ru/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 151 KB |
| `googleplay/ru/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 309 KB |
| `googleplay/ru/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 380 KB |
| `googleplay/ru/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 147 KB |
| `googleplay/ru/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 297 KB |
| `googleplay/ru/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 650 KB |
| `googleplay/ru/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 643 KB |
| `googleplay/ru/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 706 KB |
| `googleplay/ru/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 716 KB |
| `googleplay/ru/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 623 KB |
| `googleplay/ru/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 728 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 855 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 583 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 668 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 814 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 606 KB |
| `googleplay/ru/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 932 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 465 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 453 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 595 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 645 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 431 KB |
| `googleplay/ru/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 632 KB |
| `googleplay/tr` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 274 KB |
| `googleplay/tr/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 232 KB |
| `googleplay/tr/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 144 KB |
| `googleplay/tr/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 284 KB |
| `googleplay/tr/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 367 KB |
| `googleplay/tr/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 136 KB |
| `googleplay/tr/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 330 KB |
| `googleplay/tr/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 644 KB |
| `googleplay/tr/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 637 KB |
| `googleplay/tr/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 678 KB |
| `googleplay/tr/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 712 KB |
| `googleplay/tr/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 602 KB |
| `googleplay/tr/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 696 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 833 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 574 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 614 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 793 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 562 KB |
| `googleplay/tr/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 922 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 448 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 441 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 556 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 640 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 404 KB |
| `googleplay/tr/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 587 KB |
| `googleplay/zh` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 264 KB |
| `googleplay/zh/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 232 KB |
| `googleplay/zh/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 149 KB |
| `googleplay/zh/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 271 KB |
| `googleplay/zh/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 353 KB |
| `googleplay/zh/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 126 KB |
| `googleplay/zh/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 346 KB |
| `googleplay/zh/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 616 KB |
| `googleplay/zh/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 617 KB |
| `googleplay/zh/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 636 KB |
| `googleplay/zh/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 708 KB |
| `googleplay/zh/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 552 KB |
| `googleplay/zh/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 722 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 821 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 573 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 597 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 767 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 544 KB |
| `googleplay/zh/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 958 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 443 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 439 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 532 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 624 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 379 KB |
| `googleplay/zh/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 588 KB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `01-home-units.png` | 2064 × 2752 | RGB | 1.2 MB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `02-quiz-solution.png` | 2064 × 2752 | RGB | 874 KB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `03-study-slide.png` | 2064 × 2752 | RGB | 978 KB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `04-3d-lab.png` | 2064 × 2752 | RGB | 1.2 MB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `05-flashcards.png` | 2064 × 2752 | RGB | 863 KB |
| `ku_later-website-only/appstore/ku/ipad-13in_2064x2752` | `06-mock-exams.png` | 2064 × 2752 | RGB | 1.4 MB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `01-home-units.png` | 1320 × 2868 | RGB | 853 KB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `02-quiz-solution.png` | 1320 × 2868 | RGB | 782 KB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `03-study-slide.png` | 1320 × 2868 | RGB | 995 KB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `04-3d-lab.png` | 1320 × 2868 | RGB | 1.1 MB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `05-flashcards.png` | 1320 × 2868 | RGB | 776 KB |
| `ku_later-website-only/appstore/ku/iphone-6.9in_1320x2868` | `06-mock-exams.png` | 1320 × 2868 | RGB | 1.1 MB |
| `ku_later-website-only/googleplay/ku` | `feature-graphic_1024x500.png` | 1024 × 500 | RGB | 274 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `01-home-units.png` | 1920 × 1080 | RGB | 243 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `02-quiz-solution.png` | 1920 × 1080 | RGB | 149 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `03-study-slide.png` | 1920 × 1080 | RGB | 288 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `04-3d-lab.png` | 1920 × 1080 | RGB | 387 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `05-flashcards.png` | 1920 × 1080 | RGB | 144 KB |
| `ku_later-website-only/googleplay/ku/chromebook_1920x1080` | `06-mock-exams.png` | 1920 × 1080 | RGB | 365 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 655 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 624 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 695 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 731 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 611 KB |
| `ku_later-website-only/googleplay/ku/phone_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 737 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `01-home-units.png` | 1440 × 2560 | RGB | 855 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `02-quiz-solution.png` | 1440 × 2560 | RGB | 573 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `03-study-slide.png` | 1440 × 2560 | RGB | 641 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `04-3d-lab.png` | 1440 × 2560 | RGB | 821 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `05-flashcards.png` | 1440 × 2560 | RGB | 573 KB |
| `ku_later-website-only/googleplay/ku/tablet-10in_1440x2560` | `06-mock-exams.png` | 1440 × 2560 | RGB | 952 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `01-home-units.png` | 1080 × 1920 | RGB | 467 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `02-quiz-solution.png` | 1080 × 1920 | RGB | 445 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `03-study-slide.png` | 1080 × 1920 | RGB | 572 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `04-3d-lab.png` | 1080 × 1920 | RGB | 662 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `05-flashcards.png` | 1080 × 1920 | RGB | 411 KB |
| `ku_later-website-only/googleplay/ku/tablet-7in_1080x1920` | `06-mock-exams.png` | 1080 × 1920 | RGB | 642 KB |
| `ku_later-website-only/promo/ku` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 685 KB |
| `ku_later-website-only/search-preview` | `ku.png` | 1179 × 1440 | RGB | 383 KB |
| `promo/ar` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 671 KB |
| `promo/de` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 694 KB |
| `promo/en` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 686 KB |
| `promo/fr` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 687 KB |
| `promo/ru` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 686 KB |
| `promo/tr` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 682 KB |
| `promo/zh` | `promo-banner_1920x1080.png` | 1920 × 1080 | RGB | 683 KB |
| `search-preview` | `ar.png` | 1179 × 1440 | RGB | 335 KB |
| `search-preview` | `de.png` | 1179 × 1440 | RGB | 396 KB |
| `search-preview` | `en.png` | 1179 × 1440 | RGB | 363 KB |
| `search-preview` | `fr.png` | 1179 × 1440 | RGB | 396 KB |
| `search-preview` | `ru.png` | 1179 × 1440 | RGB | 398 KB |
| `search-preview` | `tr.png` | 1179 × 1440 | RGB | 366 KB |
| `search-preview` | `zh.png` | 1179 × 1440 | RGB | 351 KB |

Total: 315 PNG files.
