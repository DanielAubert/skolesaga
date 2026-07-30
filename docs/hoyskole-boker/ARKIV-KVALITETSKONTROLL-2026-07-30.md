# Kvalitetskontroll av `_nedlastet-2026-07-30`

**Kontrollert:** 30. juli 2026, kl. 17:00–19:20.
**Øyeblikksbilde lagt til grunn:** kl. 19:14 — **2 815 filer i 81 emnemapper.**

> ⚠ **Mappa ble skrevet til hele tiden mens kontrollen pågikk.** Kl. 18:50 lå det
> 2 270 filer i 70 mapper; kl. 19:09 var det 2 677 i 82; kl. 19:14 var det 2 815
> i 84 (81 med innhold + 3 pekermapper). Alt under er målt på nytt til slutt, så
> tabellen er internt konsistent — men den er ikke nødvendigvis komplett.
> Kommer det flere filer, må tellingen kjøres på nytt.
>
> **`LES-MEG.md` og `INNHOLD.md` er utdaterte.** De oppgir 1 182 / 1 222 filer og
> 52 / 56 emner. Femten mapper er ikke nevnt i noen av dem: `FY0001`, `FY1001`,
> `JUR1590`, `MA0001`, `MA1101`, `MAT112`, `MAT121`, `MAT1105`, `MAT212`,
> `PSY1300`, `SPED1001`, `TFY4102`, `TFY4170`, `TFY4230`, `TMA4100`, `TMA4105`,
> `TMA4110`, `TMA4245`, `UVEXFAC10`. Ingenting er slettet.

---

## Kortversjon

| Spørsmål | Svar |
|---|---|
| Er filene ekte? | Ja. Ingen 0-byte-filer, ingen passordbeskyttede, ingen avkuttede. `pdfinfo` går rent på alle 2 714 PDF-er. |
| Er noe egentlig HTML-feilsider? | Ja — **27 filer i `TMA4135`** heter `.pdf`, men er NTNUs «Fant ikke dokumentet»-side (2 036 byte, alle 27 bit-identiske). |
| Hvor mye mangler tekstlag? | **348 av 2 714 PDF-er (12,8 %)**, sterkt konsentrert i NTNU-fysikk og UiB-matte. |
| Hvor mange unike sett? | **1 134 unike eksamensterminer** fordelt på 81 mapper — mot 2 815 filer. Ca. **2,5 filer per sett**. |
| Med fasit/sensorveiledning? | **893 av 1 134 sett (79 %)**. |
| Duplikater? | 31 grupper / 56 overflødige filer (5,4 MB). Kun **ett** kryssmappe-tilfelle. |
| Feil emne? | To reelle funn, én feilnavngitt fil — og to mapper der **mappenavnet er direkte misvisende**. |

### Det viktigste funnet

**To av de tre største mappene handler nesten ikke om emnet de er navngitt etter.**

| mappe | filer | filer som faktisk gjelder emnet i mappenavnet |
|---|---:|---|
| `MEVIT1010` | 305 | **8** (4 oppgavesett H22–H25 + 4 sensorveiledninger) |
| `EXFAC03-MUS` | 205 | **7** (5 oppgavetekster H18–H22 + 2 sensorveiledninger) |

`MEVIT1010` er hele IMKs sensorveiledningsarkiv: 305 filer fordelt på **79
emnekoder**, hvorav 110 filer er masternivå (MEVIT4xxx) og 34 er 3000-nivå.
`EXFAC03-MUS` er IMVs arkiv: 205 filer på **32 MUS-koder**, 106 av dem på
2000-nivå. `LES-MEG.md` sier riktignok at dette er delte instituttarkiv, men
tabellen der fører dem opp som «MEVIT1010: 305 filer» og «EXFAC03-MUS: 205
filer». Bygges en bok på det tallet, blir hver eneste «N av M sett»-påstand feil
med to størrelsesordener.

Samme mekanisme, mildere: `TMA4110` (201 filer) er TMA4110 **og** TMA4115 blandet;
`TMA4135` (104 filer) inneholder 27 feilsider, 24 dublettpar og noen få
4N/4K-sett.

---

## Hovedtabell: emne → filer → unike sett → med fasit → årsspenn → hull

| emne | filer | brukbare | unike sett | m/fasit | årsspenn | hull | uten tekstlag | merknad |
|---|---:|---:|---:|---:|---|---|---:|---|
| `TMA4110` | 201 | 201 | **68** | 58 | 2004–2025 | – | 23 | TMA4110+TMA4115 blandet; 7 udaterte skann |
| `TMA4100` | 115 | 115 | **58** | 56 | 1997–2025 | – | 3 |  |
| `MAT121` | 110 | 110 | **53** | 38 | 1997–2021 | – | 38 | inkl. deleksamen; 38 filer uten tekstlag |
| `TFY4165` | 94 | 94 | **46** | 46 | 1996–2024 | 2021 | 49 | gamle koder 74306/SIF4016/FY1005; 49 filer uten tekstlag |
| `TFY4215` | 78 | 78 | **38** | 38 | 2002–2022 | 2020 | 2 |  |
| `MA1101` | 77 | 77 | **38** | 35 | 2003–2023 | – | 29 | inkl. MA6101 (samme eksamen, videreutdanning); 29 filer uten tekstlag |
| `MAT111` | 101 | 101 | **37** | 37 | 2003–2020 | – | 9 | inkl. deleksamen/undervegsvurdering som egne papirer |
| `FY1001` | 68 | 68 | **35** | 34 | 1988–2024 | 1989, 1991, 1992, 1993, 1994, 1… | 18 | gamle NTH-koder 76532/66032/61105/TFY4145 |
| `TMA4245` | 121 | 121 | **32** | 31 | 2009–2019 | – | 1 |  |
| `TFY4125` | 62 | 62 | **31** | 31 | 2004–2025 | 2006, 2007, 2013 | 9 |  |
| `TFY4170` | 54 | 54 | **31** | 25 | 1999–2025 | 2009, 2010, 2011, 2012, 2013, 2016 | 9 | gammel kode SIF4022 |
| `MAT112` | 65 | 65 | **30** | 17 | 2000–2014 | – | 38 | inkl. deleksamen |
| `TFY4240` | 68 | 68 | **29** | 29 | 1989–2025 | 1994, 1995, 1996, 1997, 1998, 1… | 32 | gamle koder 74316/SIF4060 |
| `TFY4230` | 58 | 58 | **28** | 27 | 1982–2020 | 1983, 1989, 1990, 1991, 1992, 1… | 19 | 2 filer fra 1982 udatert; hull 1989–2004 |
| `TFY4106` | 53 | 53 | **28** | 27 | 2006–2020 | – | 20 |  |
| `TMA4135` | 104 | 77 | **27** | 26 | 2003–2015 | – | 3 | 27 filer er 404-sider; 24 dublett-par; delt 4N/4D-eksamen |
| `MA0001` | 64 | 64 | **27** | 22 | 2003–2024 | 2005, 2006, 2007, 2008 | 4 | inkl. midtsemesterprøver |
| `TFY4104` | 54 | 54 | **27** | 25 | 2009–2025 | – | 3 |  |
| `JUR1590` | 33 | 33 | **26** | 8 | 2013–2025 | 2016 | 2 |  |
| `FY0001` | 48 | 48 | **25** | 20 | 2004–2026 | 2014 | 20 |  |
| `TMA4105` | 50 | 50 | **23** | 22 | 1998–2009 | – | 0 |  |
| `TDT4110` | 40 | 40 | **21** | 17 | 2010–2019 | – | 1 |  |
| `SVEXFAC03` | 28 | 28 | **21** | 16 | 2012–2026 | 2015, 2016, 2017 | 0 | 2012–14 har to papirer (4t/5t) per termin; hull 2015–2017 |
| `EXPHIL03` | 86 | 86 | **20** | 6 | 2017–2026 | – | 0 | sett = semester; hvert semester har 2–4 ULIKE papirer (seminar/selvstudium/utsatt) |
| `PSYC1202` | 24 | 24 | **18** | 14 | 2010–2026 | 2011, 2012, 2013, 2021 | 0 | psyc2102-2015h.pdf er feilnavngitt – innholdet er PSYC1202 |
| `SGO1900` | 20 | 20 | **18** | 1 | 2003–2016 | – | 0 | 1 fasit av 18 sett |
| `MEVIT1010` | 305 | 305 | **13** | 10 | 2021–2025 | – | 0 | **instituttarkiv** – 79 emnekoder, kun 8 filer om MEVIT1010 |
| `STV1400` | 17 | 17 | **13** | 8 | 2010–2025 | 2015, 2016, 2017 | 0 |  |
| `INTER1000` | 14 | 14 | **13** | 8 | 2010–2025 | 2017, 2020, 2021 | 0 |  |
| `TFY4102` | 26 | 26 | **12** | 12 | 2007–2017 | 2014 | 10 | 2 filer er bit-identiske med FY1001-mappa |
| `NOR1300` | 25 | 25 | **12** | 12 | 2020–2025 | – | 0 |  |
| `MAT1120` | 21 | 21 | **12** | 9 | 2003–2014 | – | 1 |  |
| `STV1100` | 15 | 15 | **12** | 6 | 2010–2025 | 2015, 2017, 2021, 2024 | 0 |  |
| `LING1100` | 13 | 13 | **12** | 1 | 2011–2024 | 2016, 2023 | 0 | 1 fasit av 12 |
| `STV1200` | 14 | 14 | **11** | 6 | 2010–2025 | 2015, 2016, 2019, 2020, 2024 | 0 |  |
| `NFI1101` | 13 | 13 | **11** | 2 | 2011–2025 | 2017, 2020, 2022, 2024 | 0 |  |
| `NFI1100` | 10 | 10 | **10** | 1 | 2011–2025 | 2015, 2016, 2017, 2020, 2022, 2024 | 1 | 1 generell veiledning, ingen fasit per sett |
| `LING1111` | 9 | 9 | **9** | 2 | 2011–2024 | 2015, 2019, 2020, 2022, 2023 | 0 | ingen fasit |
| `EXFAC03-MUS` | 205 | 205 | **8** | 2 | 2018–2025 | 2023 | 3 | **instituttarkiv** – 32 MUS-koder, kun 7 filer om EXFAC03-MUS |
| `PSY1300` | 12 | 12 | **8** | 7 | 2019–2026 | 2025 | 0 |  |
| `IN1140` | 11 | 11 | **8** | 4 | 2017–2024 | 2018 | 0 |  |
| `PSY1200` | 8 | 8 | **8** | 0 | 2009–2016 | – | 0 | ingen fasit |
| `IN1020` | 31 | 31 | **7** | 7 | 2017–2024 | 2021 | 0 | sensorveiledning for alle 7 sett |
| `SOSANT1050` | 13 | 13 | **7** | 6 | 2020–2025 | – | 1 |  |
| `EXFAC03-NORD` | 7 | 7 | **7** | 6 | 2019–2025 | 2020 | 0 |  |
| `HIS1400` | 7 | 7 | **7** | 7 | 2020–2026 | – | 0 |  |
| `PSY1250` | 12 | 12 | **6** | 6 | 2018–2023 | – | 0 |  |
| `EXFAC03-EAST` | 10 | 10 | **6** | 4 | 2021–2025 | – | 0 |  |
| `SOS1100` | 8 | 8 | **6** | 4 | 2022–2026 | – | 0 |  |
| `EXFAC03-SPR` | 7 | 7 | **6** | 4 | 2011–2025 | 2012, 2013, 2014, 2015, 2016, 2… | 0 |  |
| `KRIM1300` | 12 | 12 | **5** | 1 | 2021–2025 | – | 0 |  |
| `SOS1004` | 8 | 8 | **5** | 5 | 2021–2025 | – | 0 |  |
| `KIN1500` | 6 | 6 | **5** | 2 | 2021–2025 | – | 0 |  |
| `KIN1503` | 6 | 6 | **5** | 3 | 2021–2026 | 2025 | 0 |  |
| `KRIM1100` | 6 | 6 | **5** | 1 | 2021–2025 | – | 0 |  |
| `HIS1200` | 5 | 5 | **5** | 5 | 2020–2024 | – | 0 |  |
| `EXFAC03-HARK` | 6 | 6 | **4** | 4 | 2020–2024 | 2023 | 0 |  |
| `MAT1080` | 5 | 5 | **4** | 0 | 2025–2025 | – | 0 | ingen fasit |
| `STV1010` | 4 | 4 | **4** | 4 | 2022–2025 | – | 0 |  |
| `NOR1301` | 5 | 5 | **3** | 3 | 2023–2025 | – | 0 |  |
| `NOR1100` | 4 | 4 | **3** | 3 | 2023–2026 | 2024 | 0 |  |
| `MAT1105` | 22 | 22 | **2** | 2 | 2024–2025 | – | 0 |  |
| `TYSK1000` | 11 | 11 | **2** | 2 | 2024–2025 | – | 0 |  |
| `FRA1111` | 2 | 2 | **2** | 0 | 2024–2025 | – | 0 | ingen fasit |
| `JAP1501` | 2 | 2 | **2** | 2 | 2024–2025 | – | 0 |  |
| `PER1010` | 2 | 2 | **2** | 2 | 2024–2025 | – | 0 |  |
| `TFEXFAC03` | 2 | 2 | **2** | 2 | 2023–2024 | – | 0 |  |
| `TFF1002` | 2 | 2 | **2** | 2 | 2023–2024 | – | 0 |  |
| `MAT212` | 3 | 3 | **1** | 1 | — | – | 0 | udatert |
| `UVEXFAC10` | 2 | 2 | **1** | 0 | — | – | 0 | 1 HTML-side som inneholder flere års oppgaver |
| `ARA1010` | 1 | 1 | **1** | 1 | 2024–2024 | – | 0 |  |
| `ARK1000` | 1 | 1 | **1** | 1 | 2020–2020 | – | 0 | generelle vurderingskriterier |
| `HIS1000` | 1 | 1 | **1** | 1 | 2024–2024 | – | 0 |  |
| `JAP1010` | 1 | 1 | **1** | 1 | 2024–2024 | – | 0 |  |
| `KIN1010` | 1 | 1 | **1** | 1 | — | – | 0 | udatert, generelle vurderingskriterier |
| `KJM1101` | 1 | 1 | **1** | 1 | 2017–2017 | – | 0 |  |
| `MØNA1000` | 1 | 1 | **1** | 1 | 2024–2024 | – | 0 |  |
| `MØNA1505` | 1 | 1 | **1** | 1 | 2025–2025 | – | 0 |  |
| `PED1001` | 1 | 1 | **1** | 0 | — | – | 0 | 1 HTML-side som inneholder flere års oppgaver |
| `SPED1001` | 1 | 1 | **1** | 0 | 2015–2015 | – | 0 |  |
| `TYR1010` | 1 | 1 | **1** | 1 | 2024–2024 | – | 0 |  |

| **SUM** | **2815** | **2788** | **1134** | **893** | 1982–2026 | | **348** | |

*Kolonnene:* **filer** = alt i mappa. **brukbare** = minus HTML-feilsider.
**unike sett** = distinkte eksamensterminer (emne + år + vår/høst/kont), altså
det tallet «M» i «N av M sett» skal være. **m/fasit** = sett der minst én fil er
løsningsforslag, sensorveiledning eller fasit. **uten tekstlag** = PDF-er som
`pdftotext` ikke får tekst ut av.

For `MEVIT1010` og `EXFAC03-MUS` gjelder «unike sett» kun filene som faktisk
handler om emnet i mappenavnet (13 hhv. 8 — inkludert nabokodene MEVIT1011,
MEVIT1700, MUS1445 som instituttet dekker i samme arkiv).

---

## Ubrukelig materiale

| hva | antall | hvor |
|---|---:|---|
| HTML-feilsider maskert som PDF («Fant ikke dokumentet», 2 036 B) | **27** | `TMA4135/SIF5013*.pdf`, `TMA4135/SIF5017*.pdf`, `TMA4135/lfSIF*.pdf` |
| Bit-identiske dubletter, samme mappe | 24 par | `TMA4135` (samme fil under to navnekonvensjoner, f.eks. `lf_tma4135_04h.pdf` = `lfTMA4135-04h.pdf`) |
| Bit-identiske dubletter, samme mappe | 5 par | `EXFAC03-MUS` (`sensorveiledningmus1254.pdf` = `…h19.pdf` osv.) |
| Bit-identiske dubletter, **på tvers av mapper** | 2 filer | `TFY4102/E-_FY1001-08des2006.pdf` = `FY1001/E-_FY1001-08des2006.pdf` (og L-varianten) |

Ingen 0-byte-filer. Ingen passordbeskyttede PDF-er. Ingen PDF-er der `pdfinfo`
eller `pdftotext` feiler. Én fil mangler `%%EOF` i de siste 2 kB
(`TFY4215/E-TFY4215-06aug2018.pdf`), men den leser fint fra første til siste side
— den er ikke avkuttet.

`.docx`-filene (46) og `.doc`-filene (2) er ekte Word-dokumenter.
`mevit4319-sensorveiledninghost-2025.docx` rapporteres som `application/zip` av
`file`; det er normalt for docx og ikke et problem.

## Mistenkelig, men brukbart

- **Manifestet overteller — og henger etter.** `MANIFEST.csv` hadde
  **3 642 rader** kl. 19:16, mens 2 952 filer lå på disk. De 812 radene uten fil
  er nøyaktig speilene av de delte arkivene: `MEVIT1011` (304), `MEVIT1700` (303),
  `MUS1445` (205) — bokføringen er altså konsistent. Motsatt vei lå 122 filer på
  disk uten manifestrad (119 av dem i `MA0001`, som ble lastet ned mens jeg
  skrev). **Enhver telling som starter i manifestet blir ca. 30 % for høy.**
- **`PED1001/tidligere-gitte-eksamensoppgaver.html` og
  `UVEXFAC10/tidligere-eksamensoppgaver.html`** er *én* fil hver, men inneholder
  oppgavetekst fra **flere semestre** i brødteksten. Her undertelles sett, ikke
  overtelles. Må hentes ut manuelt.
- **23 ekte HTML-sider** (`STV1100`, `STV1200`, `STV1400`, `INTER1000` 2010–2014,
  `JUR1590`, `PED1001`, `UVEXFAC10`) inneholder full oppgavetekst i brødteksten og er fullt brukbare —
  men de må parses, ikke PDF-leses.
- **`PSYC1202/psyc2102-2015h.pdf`** er *feilnavngitt*, ikke feilplassert:
  innholdet er «Hjemmeeksamen i PSYC1202 – Etikk og profesjonsrolle, haust 2015».
- **`TMA4135/TMA413X2007k_bm.pdf`** er «EKSAMEN I MATEMATIKK 4N (TMA4130)» —
  et annet emne. `TMA4135/xoppgAm2.pdf` er Matematikk 4K.
  *Men:* flere filer som ser feilplasserte ut, er det ikke — NTNU kjørte felles
  eksamen, f.eks. `lf_tma4135_07k.pdf`: «EKSAMEN I MATEMATIKK 4N/D (TMA4125
  TMA4130 TMA4135)». Bare de to nevnte er reelt utenfor emnet.
- **`TFY4165/E-FY1005-18jun2004.pdf`** har trykt dato 26. mai overstrøket og
  **18. juni skrevet for hånd**. Forsiden sier dessuten «Oppgåver: Sjå vedlegg» —
  selve oppgavene ligger i et vedlegg som ikke er med. Slike rene forsider finnes
  det flere av i TFY-mappene.
- **`MEVIT1010/sensorveiledning-mevit2616-v25.pdf`** og `…-v24.pdf` har identisk
  tekst på de tre første sidene, men ulike bytes. Enten gjenbrukt dokument eller
  feilmerket år.
- **111 filer er udaterte** etter alle metoder. Verst: `MEVIT1010` (11),
  `TMA4110` (7, alle «scanned_from_a_xerox…»), `FY0001` (5), `JUR1590` (4),
  `MAT1080` (4), `MAT212` (3).

## PDF-er uten tekstlag (348 = 12,8 %)

| type | antall | konsekvens |
|---|---:|---|
| Ren skann — bilde, ingen font i det hele tatt | 294 | krever OCR |
| Skann med tekststempel/overlegg (arkivstempel over bildet) | 41 | krever OCR |
| Type3-bitmapfont (gammel `dvipdfm`-LaTeX) | 7 | krever OCR, men **skarp** gjengivelse |
| Verken font eller bilde (vektorsatt tekst uten fontinfo) | 6 | krever OCR, men **skarp** gjengivelse |

Verstinger: `TFY4165` 49/94, `MAT112` 38/65, `MAT121` 38/110, `TFY4240` 32/68,
`MA1101` 29/77, `TMA4110` 23/201, `FY0001` 20/48, `TFY4106` 20/53, `TFY4230` 19/58,
`FY1001` 18/68.

**Viktig nyanse:** «uten tekstlag» er ikke det samme som «dårlig kvalitet». Jeg
renderte stikkprøver til bilde og så på dem. `MAT121/M102_2002_h_oppg.pdf` og
`MAT121/MAT121_2020_h_eksamen.pdf` gir null tekst, men er knivskarpe
LaTeX-sider — OCR vil ha svært høy treffrate. De ekte skannene i TFY-mappene er
gråtoneskann av papir fra 1989–2007; lesbare, men med skjevheter, håndskrift i
margen og støy. Regn med at OCR på TFY-arkivet trenger manuell etterkontroll,
særlig for formler.

## Emner jeg mener IKKE holder til å bygge bok på

**1. Verken emne eller volum — mappenavnet lover noe det ikke leverer**

`MEVIT1010` (8 relevante filer), `EXFAC03-MUS` (7). Materialet er ekte og
verdifullt, men det er *instituttarkiv*, ikke emnearkiv. Bruk det til å bygge
bøker for de emnene som faktisk er dekket (MUS2270 har 18 filer, MEVIT2725 har
9), eller behandle det som bakgrunnsmateriale.

**2. For få sett (1–2 unike terminer)**

`ARA1010`, `ARK1000`, `HIS1000`, `JAP1010`, `JAP1501`, `KIN1010`, `KJM1101`,
`MAT212`, `MØNA1000`, `MØNA1505`, `PED1001`, `PER1010`, `SPED1001`, `TFEXFAC03`,
`TFF1002`, `TYR1010`, `TYSK1000`, `UVEXFAC10`, `FRA1111`, `MAT1105`.
Flere av disse er dessuten *generelle vurderingskriterier*, ikke konkrete sett
(`ARK1000`, `KIN1010`, `JAP1010`).

**3. Nok sett, men ingen fasit å forankre modellbesvarelser i**

| emne | sett | m/fasit |
|---|---:|---:|
| `SGO1900` | 18 | 1 |
| `LING1100` | 12 | 1 |
| `NFI1101` | 11 | 2 |
| `NFI1100` | 10 | 1 |
| `LING1111` | 9 | 0 (kun oppgavesett) |
| `PSY1200` | 8 | 0 |
| `EXFAC03-MUS` | 8 | 2 |

Uten sensorveiledning kan vi ikke si hva sensor gir poeng for. Disse kan bli
oppgavesamlinger, men ikke eksamensrettede bøker med troverdige
løsningsstrategier.

**4. Bygg gjerne bok på disse**

`TMA4110`, `TMA4100`, `MAT121`, `TFY4165`, `MA1101`, `TFY4215`, `MAT111`,
`FY1001`, `TMA4245`, `TFY4125`, `TFY4170`, `TFY4240`, `TFY4230`, `TFY4106`,
`TFY4104`, `MA0001`, `TMA4135`, `TMA4105`, `FY0001`, `TDT4110`, `MAT112`,
`EXPHIL03`, `SVEXFAC03`, `JUR1590`, `NOR1300`, `PSYC1202`, `MAT1120`, `IN1020`,
`STV1400`, `STV1100`, `STV1200`, `INTER1000` — alle har ≥ 7 unike sett, og de
fleste har fasit på over 80 % av settene.

Best forhold mellom volum og fasitdekning: **`TFY4165`** (46/46), **`TFY4215`**
(38/38), **`MAT111`** (37/37), **`TFY4125`** (31/31), **`TMA4100`** (58 sett,
56 med fasit), **`TMA4245`** (32/31), **`MA1101`** (38/35), **`IN1020`** (7/7).

---

## Metode

**Filtype:** `file --mime-type` på hver fil, aldri endelsen. Det avslørte de 27
HTML-sidene i `TMA4135`.

**Tekstlag:** `pdftotext -l 6` på hver PDF, deretter tegn per side. Under 50
tegn/side = «uten tekstlag». Grensen er satt slik at en ren skann med et
arkivstempel (~20 tegn) faller på riktig side, mens en tynn forside med reell
tekst (~300 tegn) ikke gjør det. Medianen i arkivet er 1 228 tegn/side, så de to
gruppene er godt adskilt — det er ikke en glidende skala. De 348 traff jeg
etterpå med `pdffonts` + `pdfimages -list` for å skille ren skann fra
bitmapfont, og renderte stikkprøver med `pdftoppm` og så på dem.

**Unike sett vs. språkvarianter:** jeg grupperer på *eksamenstermin* — (emne, år,
V/H/kont) — ikke på fil. Datoen hentes fra to uavhengige kilder: filnavnet
(21 mønstre, fra `18jun2004` via `_181219` til `2019v`) og oppgaveteksten
(trykt eksamensdato på side 1). Emnekoder strippes fra filnavnet før datosøk, så
`SGO1900` ikke leses som årstallet 1900. Januar- og februareksamener flyttes til
foregående høstsemester (ellers slås `21jan1985` og `10des1985` sammen til ett
sett). Bokmål, nynorsk og engelsk av samme eksamen havner i samme gruppe fordi
de deler termin.

**Rolle** (oppgave / fasit) avgjøres av filnavn *og* innhold: «Løsningsforslag»,
«Løsningsskisse», «Sensorveiledning», «vurderingskriterier», «grading guidelines»
osv. 558 filer inneholder **både** oppgavetekst og sensorveiledning — det er
UiO-standarden fra ca. 2018.

**Duplikater** kontrolleres på SHA-256 av hele fila, aldri på navn. I tillegg
kjørte jeg en normalisert-tekst-hash (små bokstaver, alfanumerisk, første 3 000
tegn) for å fange samme eksamen lagret med ulik PDF-koding. Den fant 3 par til.

**Kryssjekk mot manifest:** (emnekode, filnavn) fra CSV mot faktiske filer.

---

## Hva jeg er usikker på

Dette er de stedene der tallene mine kan være feil, og hvor mye.

**1. «Unike sett» er verifisert på ett emne, estimert på resten.**
Jeg telte `TMA4245` for hånd — 121 filer, strippet språk-/løsningssuffiks
(`eksMai19b/e/l/n` → `Mai19`) — og fikk **32**. Skriptet fikk **32**. Perfekt
treff. Men `TMA4245` har verdens ryddigste filnavn. `TMA4110`, der filnavnet er
en hel `fetch.php?tok=…`-URL og seks filer bare heter `lf.pdf`, `EN.pdf`,
`eks1.pdf`, er langt mindre sikker. Jeg leste TMA4110-grupperingen manuelt og
fant minst tre feil (én kont-2015-fil datert til 2022, kont-2024 lagt i vår, én
udatert gruppe på 7 xerox-skann). **Anslag: `TMA4110`s 68 er trolig 62–68.**
Andre NTNU-mapper med `E-KODE-DDmonYYYY`-navn er nær sikre.

**2. Datoene: 96,4 % enighet mellom filnavn og innhold der begge er eksplisitte.**
1 686 filer har både filnavnsdato og trykt dato i teksten. På årstall er de enige
i 94,7 %; der begge har full dato, i 96,4 % (297 av 308). Ved uenighet lar jeg
filnavnet vinne — jeg kontrollerte et titalls avvik, og tekstdatoen var som regel
en dato *inne i* oppgaven, ikke eksamensdatoen. Det er et valg, ikke en sannhet.

**3. Termin (vår/høst/kont) er svakere enn årstall.** Enigheten faller til 79 %
når terminen tas med. Jeg vet ikke sikkert at NTNUs `k` alltid betyr kontinuasjon
i august, eller at januareksamener alltid hører til foregående høst. Regelen jeg
bruker er rimelig, men den er min.

**4. Jeg antar at ett semester = ett oppgavesett. Det stemmer ikke alltid.**
Tre steder vet jeg det er galt:
- `EXPHIL03` har **to til fire ulike papirer per semester** (seminarvariant,
  selvstudiumsvariant, utsatt eksamen, 4-timers skoleeksamen). 20 «sett» i
  tabellen er 20 *semestre*, men trolig 35–45 distinkte oppgavesett.
- `SVEXFAC03` 2012–2014 hadde 4-timers og 5-timers varianter samme termin.
- `MAT111`/`MAT112`/`MAT121` har deleksamen/undervegsvurdering i tillegg til
  ordinær eksamen. Jeg teller dem som samme sett.

Motsatt vei: 39 av 1 134 sett har filnavn som tyder på mer enn ett papir
(«utsatt», «uts», «deleksamen», «prøve»). **Konklusjon: 1 134 er et forsiktig
gulv. Antall distinkte oppgavesett er høyere — jeg vet ikke hvor mye.**

**5. Språkdeteksjonen.** Rundt 480 filer fikk «ukjent språk» — de fleste er
skann uten tekstlag. Der jeg *kunne* måle, holdt hypotesen «ekstra filer er
språkvarianter» i 68 % av sittingene med ≥ 2 oppgavefiler; de resterende 32 % var
enten instituttarkivene (mange emner i samme termin) eller ekte ekstra papirer.
Så: språkvariant-antagelsen er riktig for NTNU-matte og -fysikk, og upålitelig
for UiO-mappene.

**6. Hull-kolonnen skiller ikke «vi mangler eksamen» fra «det var ingen eksamen».**
`TFY4230`s 19 hull dekker 1989–2004; jeg vet ikke om emnet lå nede, byttet kode,
eller om filene bare ikke er lagt ut. Behandle hull som «ikke lastet ned», ikke
som «finnes ikke».

**7. Ting jeg ikke har sjekket.**
- Om innholdet i en PDF faktisk *er* eksamen og ikke f.eks. en emnebeskrivelse.
  Jeg leser bare de første sidene maskinelt.
- Om OCR faktisk klarer de 348 filene uten tekstlag. Jeg har sett på dem, ikke
  OCR-et dem.
- Om noen av filene er avkuttet *midt i* (jeg sjekket at siste side lar seg lese,
  ikke at siste side er den siste som fantes).
- 580 filer har rolle «ukjent» — verken tydelig oppgave eller tydelig fasit.
  De fleste er skann uten tekstlag, så klassifiseringen bygger på filnavnet alene.
- Om årsspennene i `LES-MEG.md` stemmer. De er utledet av filnavn, som mine, men
  med et annet skript og på et annet (mindre) filutvalg.

**8. Mappa var i bevegelse — og var det fortsatt da jeg leverte.**
Alt over er målt på 2 815 filer kl. 19:14 30. juli 2026. Kl. 19:16 lå det 2 952
filer der, fordi `MA0001` fikk 119 nye filer mens rapporten ble skrevet. Tabellen
er derfor et øyeblikksbilde, ikke en fasit. Metoden er skriptet og kan kjøres om
igjen på ti minutter når nedlastingen er ferdig — det bør den bli, før noen
bygger bok på tallene.

Skriptene ligger i `~/Desktop/Eksamner/_kvalitetskontroll-skript/`
(`inventory.py` → `pdfscan.py` → `classify.py` → `aggregate.py`, framgangsmåte i
`KJØR.md`). `aggregate.py` skriver også `detalj.json`, som viser nøyaktig hvilke
filer som havnet i hvilket sett — bruk den til å ettergå enhver rad i tabellen
over.
