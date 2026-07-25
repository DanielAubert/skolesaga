# Lengde-tell: omfangsmåling for hele plattformen

Målt 25. juli 2026 med `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs`
(uten argument = alle quizfiler).

## Hva dette er

En student som ikke kan pensum kan gjette riktig ved å velge det **lengste**
svaralternativet. Det skjer fordi fasiten skrives fullstendig og presist, mens
distraktorene skrives raskt og kort. Ved tilfeldig fordeling skal fasiten være
eneste lengste alternativ i **~25 %** av spørsmålene.

Regelen står i `docs/hoyskole-boker/BYGGEPLAN-MAL.md` «LENGDE-TELL» og gjelder
alle nye bøker. Denne målingen gjelder det som alt ligger på disk.

## Totalbildet

| | |
|---|---|
| Quizfiler | 162 |
| Spørsmål | 37 301 |
| Filer over terskel | **68** |
| Spørsmål i flaggede filer | **12 111** |
| Eneste-lengst, hele plattformen | 32 % |
| Median per fil | 29 % |

Fordelingen er tvedelt: nye høyskolebøker bygget etter at regelen kom er rene
(econ1310 står på 0 %), mens eldre VGS- og ungdomsskolebøker ligger på 70–85 %.

## Alle filer, sortert etter alvor

«Eneste lengst» = fasiten er alene lengst (det gjettbare). «Delt lengst» = fasiten
er blant de lengste. Terskelen for 🟢 er 32 %, altså litt over tilfeldig nivå.

| Fil | Spørsmål | Eneste lengst | Delt lengst | Nivå |
|---|---|---|---|---|
| `krle-8` | 200 | **85 %** | 88 % | 🔴 kritisk |
| `samføkonomi` | 80 | **85 %** | 88 % | 🔴 kritisk |
| `kroppsoving-6` | 50 | **80 %** | 84 % | 🔴 kritisk |
| `norsk-7` | 50 | **80 %** | 84 % | 🔴 kritisk |
| `krle-6` | 45 | **80 %** | 89 % | 🔴 kritisk |
| `musikk-7` | 40 | **80 %** | 88 % | 🔴 kritisk |
| `restaurant-mat-vg1` | 240 | **79 %** | 87 % | 🔴 kritisk |
| `økonomi-ledelse` | 240 | **79 %** | 89 % | 🔴 kritisk |
| `psykologi` | 100 | **79 %** | 84 % | 🔴 kritisk |
| `kroppsoving-5` | 40 | **78 %** | 85 % | 🔴 kritisk |
| `mat-og-helse-7` | 40 | **78 %** | 88 % | 🔴 kritisk |
| `kunst-8` | 200 | **77 %** | 82 % | 🔴 kritisk |
| `samf-engelsk` | 200 | **77 %** | 82 % | 🔴 kritisk |
| `naturbruk-vg1` | 280 | **76 %** | 83 % | 🔴 kritisk |
| `økonomi-drift` | 240 | **76 %** | 87 % | 🔴 kritisk |
| `mat-og-helse-8` | 200 | **76 %** | 81 % | 🔴 kritisk |
| `engelsk-10` | 200 | **75 %** | 81 % | 🔴 kritisk |
| `tysk-3` | 320 | **73 %** | 79 % | 🔴 kritisk |
| `naturfag-vg1` | 280 | **73 %** | 79 % | 🔴 kritisk |
| `norsk-5` | 75 | **73 %** | 81 % | 🔴 kritisk |
| `krle-7` | 40 | **73 %** | 80 % | 🔴 kritisk |
| `kroppsoving-7` | 40 | **73 %** | 78 % | 🔴 kritisk |
| `fransk-3` | 320 | **72 %** | 77 % | 🔴 kritisk |
| `tof-1` | 225 | **72 %** | 81 % | 🔴 kritisk |
| `engelsk-9` | 190 | **72 %** | 81 % | 🔴 kritisk |
| `naturfag-8` | 200 | **71 %** | 80 % | 🔴 kritisk |
| `okonomistyring` | 200 | **71 %** | 85 % | 🔴 kritisk |
| `naturfag-9` | 200 | **70 %** | 80 % | 🔴 kritisk |
| `biologi-1` | 250 | **69 %** | 79 % | 🔴 kritisk |
| `naturfag-10` | 241 | **69 %** | 75 % | 🔴 kritisk |
| `norsk-8` | 212 | **69 %** | 74 % | 🔴 kritisk |
| `kunst-5` | 45 | **69 %** | 69 % | 🔴 kritisk |
| `mat-og-helse-6` | 45 | **69 %** | 71 % | 🔴 kritisk |
| `musikk-6` | 45 | **69 %** | 82 % | 🔴 kritisk |
| `naturfag-7` | 45 | **69 %** | 69 % | 🔴 kritisk |
| `kunst-6` | 80 | **68 %** | 78 % | 🔴 kritisk |
| `samfunnsfag-7` | 40 | **68 %** | 85 % | 🔴 kritisk |
| `tif-vg1` | 275 | **67 %** | 78 % | 🔴 kritisk |
| `samfunnsfag-8` | 200 | **67 %** | 80 % | 🔴 kritisk |
| `naturfag-6` | 50 | **66 %** | 78 % | 🔴 kritisk |
| `musikk-8` | 200 | **65 %** | 79 % | 🔴 kritisk |
| `bygg-anlegg-vg1` | 225 | **64 %** | 71 % | 🔴 kritisk |
| `engelsk-8` | 195 | **64 %** | 72 % | 🔴 kritisk |
| `regnskap-revisjon` | 240 | **63 %** | 85 % | 🔴 kritisk |
| `kjemi2` | 240 | **62 %** | 76 % | 🔴 kritisk |
| `spansk-3` | 320 | **60 %** | 67 % | 🔴 kritisk |
| `musikk-5` | 30 | **60 %** | 73 % | 🔴 kritisk |
| `tysk-2` | 320 | **58 %** | 71 % | 🟠 tydelig |
| `naturfag-5` | 50 | **58 %** | 66 % | 🟠 tydelig |
| `engelsk-7` | 45 | **58 %** | 64 % | 🟠 tydelig |
| `krle-5` | 40 | **58 %** | 70 % | 🟠 tydelig |
| `mat-og-helse-5` | 40 | **58 %** | 60 % | 🟠 tydelig |
| `spansk-2` | 320 | **57 %** | 71 % | 🟠 tydelig |
| `fysikk` | 325 | **54 %** | 72 % | 🟠 tydelig |
| `kjemi1` | 170 | **54 %** | 72 % | 🟠 tydelig |
| `elektro-data-vg1` | 380 | **53 %** | 66 % | 🟠 tydelig |
| `samfunnsfag-6` | 45 | **53 %** | 71 % | 🟠 tydelig |
| `fransk-2` | 320 | **52 %** | 62 % | 🟠 tydelig |
| `s2` | 260 | **52 %** | 68 % | 🟠 tydelig |
| `1t` | 275 | **44 %** | 65 % | 🟠 tydelig |
| `s1` | 443 | **43 %** | 65 % | 🟠 tydelig |
| `fransk-1` | 405 | **43 %** | 56 % | 🟠 tydelig |
| `samfunnsfag-5` | 40 | **43 %** | 63 % | 🟠 tydelig |
| `r1` | 250 | **42 %** | 61 % | 🟠 tydelig |
| `engelsk-6` | 45 | **42 %** | 51 % | 🟠 tydelig |
| `2p` | 175 | **41 %** | 69 % | 🟠 tydelig |
| `spansk-1` | 325 | **38 %** | 52 % | 🟡 svak |
| `tysk-1` | 325 | **35 %** | 54 % | 🟡 svak |
| `2py` | 175 | **35 %** | 67 % | 🟡 svak |
| `exphil03` | 592 | **34 %** | 35 % | 🟡 svak |
| `psy1010` | 548 | **34 %** | 34 % | 🟡 svak |
| `int-engelsk` | 200 | **34 %** | 40 % | 🟡 svak |
| `sosiologi` | 51 | **33 %** | 33 % | 🟡 svak |
| `samfokonomi-1` | 40 | **33 %** | 40 % | 🟡 svak |
| `matematikk-9` | 200 | **32 %** | 66 % | 🟡 svak |
| `tma4110` | 671 | **31 %** | 43 % | 🟢 ok |
| `r2` | 220 | **31 %** | 56 % | 🟢 ok |
| `jus1111` | 546 | **30 %** | 31 % | 🟢 ok |
| `mat1110` | 515 | **30 %** | 41 % | 🟢 ok |
| `matematikk-10` | 200 | **30 %** | 61 % | 🟢 ok |
| `stk1100` | 510 | **29 %** | 46 % | 🟢 ok |
| `kunst-9` | 200 | **29 %** | 31 % | 🟢 ok |
| `samfunnsfag-10` | 200 | **29 %** | 38 % | 🟢 ok |
| `1p` | 210 | **27 %** | 56 % | 🟢 ok |
| `matematikk-8` | 210 | **27 %** | 68 % | 🟢 ok |
| `kroppsoving-9` | 200 | **27 %** | 33 % | 🟢 ok |
| `geografi` | 250 | **26 %** | 33 % | 🟢 ok |
| `tma4245` | 540 | **25 %** | 40 % | 🟢 ok |
| `norsk-vg2` | 210 | **25 %** | 33 % | 🟢 ok |
| `engelsk-5` | 65 | **25 %** | 46 % | 🟢 ok |
| `engelsk-vg1` | 255 | **24 %** | 32 % | 🟢 ok |
| `religion-etikk` | 180 | **24 %** | 28 % | 🟢 ok |
| `it` | 100 | **24 %** | 27 % | 🟢 ok |
| `salg-service-vg1` | 275 | **23 %** | 26 % | 🟢 ok |
| `matematikk-7` | 95 | **23 %** | 53 % | 🟢 ok |
| `kunst-7` | 40 | **23 %** | 33 % | 🟢 ok |
| `norsk-vg3` | 320 | **22 %** | 28 % | 🟢 ok |
| `musikk-10` | 200 | **22 %** | 26 % | 🟢 ok |
| `matematikk-6` | 85 | **22 %** | 58 % | 🟢 ok |
| `stk1110` | 515 | **21 %** | 31 % | 🟢 ok |
| `medieinfo-2` | 200 | **21 %** | 26 % | 🟢 ok |
| `trening-2` | 200 | **21 %** | 24 % | 🟢 ok |
| `im-vg1` | 275 | **20 %** | 24 % | 🟢 ok |
| `filosofi-etikk` | 235 | **20 %** | 23 % | 🟢 ok |
| `fys1001` | 558 | **19 %** | 36 % | 🟢 ok |
| `helseoppvekst-vg2` | 290 | **19 %** | 26 % | 🟢 ok |
| `frisor-blomster-vg1` | 275 | **19 %** | 23 % | 🟢 ok |
| `norsk-10` | 200 | **19 %** | 24 % | 🟢 ok |
| `samfunnsfag-9` | 185 | **19 %** | 29 % | 🟢 ok |
| `norsk-vg1` | 215 | **18 %** | 23 % | 🟢 ok |
| `econ2310` | 528 | **17 %** | 24 % | 🟢 ok |
| `kroppsoving-vg2` | 295 | **17 %** | 20 % | 🟢 ok |
| `handverk-design-vg1` | 275 | **17 %** | 23 % | 🟢 ok |
| `politikk-menneskerett` | 225 | **17 %** | 20 % | 🟢 ok |
| `mat-og-helse-10` | 200 | **17 %** | 21 % | 🟢 ok |
| `musikk-9` | 200 | **17 %** | 24 % | 🟢 ok |
| `tof` | 100 | **17 %** | 25 % | 🟢 ok |
| `mat1120` | 539 | **16 %** | 26 % | 🟢 ok |
| `mat111-uib` | 528 | **16 %** | 30 % | 🟢 ok |
| `mat-og-helse-9` | 200 | **16 %** | 22 % | 🟢 ok |
| `markedsforing` | 50 | **16 %** | 22 % | 🟢 ok |
| `econ2220` | 570 | **15 %** | 28 % | 🟢 ok |
| `samfunnskunnskap` | 410 | **15 %** | 17 % | 🟢 ok |
| `rettslære` | 345 | **15 %** | 21 % | 🟢 ok |
| `tof-2` | 220 | **15 %** | 19 % | 🟢 ok |
| `mat1100` | 570 | **14 %** | 36 % | 🟢 ok |
| `stv1100` | 560 | **14 %** | 16 % | 🟢 ok |
| `kroppsoving-vg1` | 320 | **14 %** | 18 % | 🟢 ok |
| `kroppsoving-vg3` | 50 | **14 %** | 16 % | 🟢 ok |
| `historie` | 375 | **13 %** | 19 % | 🟢 ok |
| `krle-10` | 297 | **13 %** | 19 % | 🟢 ok |
| `kroppsoving-10` | 200 | **13 %** | 15 % | 🟢 ok |
| `medieinfo-1` | 200 | **13 %** | 15 % | 🟢 ok |
| `norsk-9` | 200 | **13 %** | 22 % | 🟢 ok |
| `matematikk-5` | 75 | **13 %** | 47 % | 🟢 ok |
| `komkult-3` | 200 | **12 %** | 15 % | 🟢 ok |
| `psykologi-2` | 200 | **12 %** | 16 % | 🟢 ok |
| `helseoppvekst-vg1` | 275 | **11 %** | 15 % | 🟢 ok |
| `krle-9` | 200 | **11 %** | 18 % | 🟢 ok |
| `trening-1` | 200 | **11 %** | 16 % | 🟢 ok |
| `trening` | 95 | **11 %** | 17 % | 🟢 ok |
| `geofag` | 340 | **10 %** | 16 % | 🟢 ok |
| `kroppsoving-8` | 200 | **10 %** | 17 % | 🟢 ok |
| `biologi-2` | 215 | **9 %** | 19 % | 🟢 ok |
| `trening-3` | 200 | **9 %** | 12 % | 🟢 ok |
| `entrebed` | 480 | **8 %** | 11 % | 🟢 ok |
| `helseoppvekst-vg3` | 250 | **8 %** | 10 % | 🟢 ok |
| `it-2` | 200 | **8 %** | 12 % | 🟢 ok |
| `bi-okonomi` | 275 | **7 %** | 32 % | 🟢 ok |
| `sikkerhetsfag` | 240 | **7 %** | 14 % | 🟢 ok |
| `komkult-1` | 200 | **7 %** | 10 % | 🟢 ok |
| `econ1210` | 545 | **6 %** | 16 % | 🟢 ok |
| `psykologi-1` | 250 | **6 %** | 8 % | 🟢 ok |
| `kunst-10` | 200 | **6 %** | 11 % | 🟢 ok |
| `komkult` | 130 | **5 %** | 5 % | 🟢 ok |
| `medieinfo` | 100 | **5 %** | 10 % | 🟢 ok |
| `it-1` | 205 | **4 %** | 7 % | 🟢 ok |
| `sosiologi-full` | 190 | **3 %** | 4 % | 🟢 ok |
| `komkult-2` | 200 | **2 %** | 4 % | 🟢 ok |
| `norsk-6` | 55 | **2 %** | 2 % | 🟢 ok |
| `econ1310` | 562 | **0 %** | 1 % | 🟢 ok |
| `samfokonomi-2` | 200 | **0 %** | 7 % | 🟢 ok |

## Omfangsvalg — dette er beslutningen som gjenstår

| Alternativ | Filer | Spørsmål | Hva det koster |
|---|---|---|---|
| **A. Bare kritiske (≥60 %)** | 47 | 7513 | Minst arbeid, fjerner den åpenbare gjettestrategien der den er verst |
| **B. Kritiske + tydelige (≥40 %)** | 66 | 11461 | Anbefalt: tar alt som er merkbart over tilfeldig |
| **C. Alt flagget (≥32 %)** | 68 | 12111 | Fullstendig, men halen gir liten gevinst per time |

**Fiksen er innholdsarbeid, ikke et skript:** distraktorene må skrives ut til
samme presisjonsnivå som fasiten. Å korte ned fasiten i stedet ville svekket
læringsverdien. Et skript kan ikke gjøre dette — men `quiz-lengdesjekk.mjs`
måler resultatet etterpå, så arbeidet er etterprøvbart.

**Ikke gjort:** ingen data er endret. Denne fila er bare målingen.

