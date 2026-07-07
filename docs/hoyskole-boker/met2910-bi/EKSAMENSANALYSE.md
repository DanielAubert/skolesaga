# Eksamensanalyse: MET 2910 Matematikk for økonomer — Handelshøyskolen BI

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **BIs eget eksamensarkiv for MET 2910**: 15 komplette sett av **hovedeksamen/Del 2** (skoleeksamen 2015V–2023H + samlet eksamen H2025) og 6 sett av **grunnleggende del / kontrollprøve / fagoppgave (Del 1)** med tilhørende offisielle **sensorveiledninger** for fem av dem (kontrollprøve V2019 og H2022, fagoppgave H2019 og V2020, samt V2023/V2024-settene). Det utdelte **formelarket** (V2022→ og H2025) er lest i sin helhet. Alle sensorveiledninger i arkivet er lest grundig; hovedeksamenssettene fra de siste ~8 årene er gjennomgått i detalj, de eldste (2015–2016) er skummet. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst eller sensorformuleringer. Analysen er kvantitativ der arkivet tillater det.
>
> **Rammemerknad:** MET 2910 er *matematikk for økonomer* — det obligatoriske grunnleggende matematikkfaget i BIs bachelor i økonomi og administrasjon (7,5 ECTS). Faget er et **verktøyfag**: det leverer regneteknikken (derivasjon, optimering, finansmatematikk, matriseregning) som mikro-, makro- og finansfagene bygger videre på. Tyngdepunktet er **mekanisk regneferdighet** og **anvendt optimering i bedriftsøkonomisk innramming** (overskuddsmaksimering, kostnadsminimering, annuitetslån), ikke bevistung matematisk analyse. Dette skiller MET 2910 fra UiOs ECON1100 på to viktige måter: MET 2910 **inneholder** både lineær algebra (determinant/Cramer/Gauss), finansmatematikk (annuiteter) og integrasjonsteknikker (substitusjon, delvis integrasjon) — temaer som er helt fraværende i ECON1100 — men **mangler** ECON1100s teoritunge innslag (omhyllingsteorem, Euler-relasjon, homogenitet, ekte Lagrange med multiplikator). MET 2910 ligger dermed nærmere en norsk VGS-R2/ingeniørmatematikk-profil enn en universitetsøkonom-profil, men med gjennomført bedriftsøkonomisk innpakning.

---

## 1. Eksamensform og utvikling

### BI-spesifikke særtrekk (styrer bokstrukturen)

MET 2910 skiller seg fra UiO/NTNU-fagene på flere punkter som er relevante for hvordan boken bør bygges:

- **Kalkulator er eneste hjelpemiddel — og et sentralt sådan.** BI-godkjent finanskalkulator **Texas Instruments BA II Plus** (senere «enkel kalkulator» også tillatt). Kalkulatoren har innebygde finansfunksjoner (TVM: nåverdi/sluttverdi/annuitet), men **utregningen må vises**: «Alle utregninger skal vises. Det er ikke nok å kun oppgi svaret, eller å vise til tastetrykk på kalkulator.» Denne setningen står øverst på **hvert eneste sett** og er fagets sterkeste enkeltsignal. Boken må derfor lære **formlene og de manuelle mellomstegene**, ikke kalkulatorprosedyrer.
- **Vekttall, ikke poeng.** Oppgavene vektes med **vekttall** (typisk 23–28 til sammen = 100 %), ikke et 100-poengsbudsjett. Fra 2017 presiseres at deloppgaver innen en oppgave i hovedsak er likt vektet. Enkelte eldre sett har **bonusoppgaver** («kan sløyfes, men gir opptil 2 vekttall/poeng ekstra») — nesten alltid et integral eller en litt tyngre finans-/sparevariant.
- **Karakterskala A–F.** Ingen midtveiseksamen i det nye formatet; hele karakteren hviler på sluttprøven.
- **Formelark utdeles (fra V2022 for Del 2, fast fra H2025).** De to siste sidene i settet inneholder potens-/kvadrat-/logaritmeregler, abc-formel, derivasjons- og integrasjonsregler (inkl. delvis integrasjon og substitusjon), lineær-funksjon-formler, geometriske rekker, **annuitets-/nåverdiformlene** og **AC−B²-klassifiseringen av stasjonære punkter i to variabler**. Konsekvens for boken: kandidaten trenger ikke pugge formlene, men må kunne **velge riktig formel og bruke den raskt**. I den eldste modellen (t.o.m. H2019) ble **ingen** formelark delt ut.
- **To-delt vurdering historisk.** Faget besto lenge av en **grunnleggende del** (kontrollprøve/fagoppgave, ~20 %) og en **hovedeksamen** (Del 2, 80 %). Fra H2025 er alt slått sammen til **én samlet skoleeksamen**.

### Emnekodenes utvikling (viktig for å lese arkivet)

| Kode | Rolle | Format |
|---|---|---|
| **MET 29101 / 29102** | Kontrollprøve (grunnleggende del). 29101 = bokmål, 29102 = nynorsk | Forkunnskapsdel: algebra, likninger, ulikheter, rette linjer, lineære likningssystemer. Dels flerdagers hjemmeoppgave (utlevering → innlevering ~2 uker senere), dels kort skoleprøve |
| **MET 29103** | Fagoppgave (grunnleggende del, bredere) | Som over + derivasjon, funksjonsdrøfting, marginalanalyse, annuitetslån. En «mini-hovedeksamen» |
| **MET 29104 / 29106** | **Hovedeksamen (Del 2, 80 %)** t.o.m. H2023 | Skoleeksamen **4 timer** (09–13), **5–7 oppgaver, 23–28 vekttall**, A–F |
| **MET 29105** | Forenklet grunnleggende del (V2024) | 4 oppgaver, tyngdepunkt algebra/likninger/ulikheter/rette linjer/én-variabel overskudd |
| **MET 29107** | **Samlet eksamen (nytt format, fra H2025)** | Skoleeksamen **5 timer** (09–14), **6 oppgaver / 28 likt vektede delpunkter**, formelark inkludert, A–F. Dekker hele pensumbredden i ett sett |

### Format-utvikling og dramaturgi

**Del 2-hovedeksamen (2015–2023)** var påfallende stabil i oppbygning:

1. **Oppgave 1 — «Deriver … / løs likningene / løs ulikhetene / beregn integralene».** Alltid åpningsoppgaven, høyest vektet (6–9 vekttall). En ren teknikk-sekk: 2–4 deriverte + 2–3 likninger + 2 ulikheter + 1–2 integraler.
2. **Oppgave 2–3 — funksjonsdrøfting av én variabel** (nullpunkt → f′ → voksende/avtakende → f″ → vendepunkt/konkav-konveks → skisse; ofte med areal eller asymptoter) **+ annuitet/finansoppgave**.
3. **Oppgave 4–5 — den store bedriftsøkonomiske optimeringsoppgaven**: «en bedrift produserer/selger to varer/i to fabrikker». Vis profittfunksjonen → partielle deriverte → stasjonærpunkt → AC−B²-klassifisering → maksimalt overskudd → **optimering under kapasitets-/eksportbibetingelse**.
4. **Siste oppgave — lineær algebra** (determinant + Cramer, senere Gauss-eliminasjon) og/eller **graflesning av f′(x)**.

**Samlet eksamen (H2025, MET 29107)** beholder de samme byggeklossene, men fordeler dem på 6 oppgaver med 28 likt vektede delpunkter, og legger til noen **konseptuelle vrier** som er nye for faget:
- **kontinuerlig rente** `A = P·e^{rt}` og **doblingstid** ved å løse `e^{rt} = 2` (også forbrukslån-dobling);
- **avgjøre om et likningssystem er lineært** (og dermed om det har reell løsning) — ett ledd er kvadrert;
- **avlese fortegn til f′ og f″ direkte fra grafen til f** (ikke bare fra grafen til f′);
- **kvalitativ integral-sammenligning**: avgjøre hvilket av to bestemte integraler som er størst ut fra at integranden er voksende, uten å regne dem ut;
- **marginal kostnadssammenligning** som motivasjon for hvorfor begge varer produseres.

### Gjennomgående sensorprinsipper (gjentas nesten ordrett i alle sett)

1. **Utregning må vises.** Kun svar, eller henvisning til kalkulatortastetrykk, gir **ingen uttelling** — selv om svaret er riktig. Dette er fagets viktigste enkeltregel og gjentas i oppgaveteksten på hvert sett.
2. **Rett fremgangsmåte og korrekte formler bærer poengene**, ikke bare sluttsvaret.
3. **Svaret oppgis eksakt og forenklet**, med enhet/økonomisk tolkning der oppgaven er anvendt.
4. **Sensorveiledningene er kompakte og utregningsdrevne** — hver linje er ett algebrasteg. Løsningsforslag i boken bør etterligne denne knappe, stegvise stilen.
5. **Fortegnsskjema (fortegnslinje) er obligatorisk verktøy** for alle ulikheter og for fortegnsanalyse av f, f′ og f″ — ikke intuitiv gjetting.

---

## 2. Temafrekvens

Faget har to nivåer med ulik temaprofil. Tabellene under teller **komplette sett med lesbart innhold** i arkivet. Boken skal kalibreres mot **den samlede eksamenen (MET 29107)**, som fletter begge nivåene inn i ett sett — men frekvensene under viser hvor tyngden ligger.

### 2A. Hovedeksamen / Del 2 (n = 15 sett: 2015V–2023H + H2025)

| Tema | Antall sett | **Gjenganger-score** | Kommentar |
|---|---|---|---|
| **Derivasjon** (Oppg. 1) | 15 | **15/15 = 100 %** | Alltid åpningsoppgave. Potens/produkt/kvotient/kjerne, ln, eˣ, aˣ, √ |
| **Løs likninger** (2.grad, brøk, eksp., ln) | 15 | **15/15 = 100 %** | Alltid del av Oppg. 1/2 |
| **Løs ulikheter** (fortegnsskjema) | 15 | **15/15 = 100 %** | Polynom- og brøkulikheter |
| **Funksjonsdrøfting, én variabel** | 15 | **15/15 = 100 %** | Nullpunkt, f′, f″, vendepunkt, ekstremal (lokal/global), skisse |
| **Finansmatematikk / annuitet** | 15 | **15/15 = 100 %** | Terminbeløp, renter/avdrag, restgjeld, sparing, månedlig omregning |
| **2-variabel optimering + AC−B²-klassifisering** | 15 | **15/15 = 100 %** | «Bedrift med to varer/fabrikker»; vis profittfunksjon → stasjonærpunkt → klassifiser |
| **Integrasjon** | 15 | **15/15 = 100 %** | Polynom/eˣ, substitusjon, delvis integrasjon. Ofte Oppg. 1d; bonus i eldre sett |
| **Optimering under bibetingelse** (kapasitet/eksport) | ~14 | **~14/15 = 93 %** | x+y = k, y = 2x, x = y; løst ved innsetting i profittfunksjonen |
| **Lineær algebra** (det./Cramer/Gauss) | 12 | **12/15 = 80 %** | Fast t.o.m. 2022; **fraværende 2018H, 2023V, 2023H**; tilbake konseptuelt H2025 |
| **Graflesning av f′(x)** | 10 | **10/15 = 67 %** | Finn ekstrem-/vendepunkt/konveksitet fra graf. H2025: fra grafen til **f** |
| **Areal under/mellom kurver** | 9 | **9/15 = 60 %** | Bestemt integral mellom nullpunkter/skjæringspunkter |
| **Elastisitet** | 3+ | **3/15 = 20 %** (stigende) | Fast Oppg. 4 fra 2023; priselastisitet av etterspørsel, `El = −1` maks. inntekt |
| **Rasjonale funksjoner + asymptoter** | 4 | **4/15 = 27 %** | Vertikal/horisontal asymptote, skisse |
| **Kontinuerlig rente eʳᵗ / doblingstid** | 4 | **4/15 = 27 %** (stigende) | 2019V, 2022H, 2023H, H2025 |
| **Marginalanalyse** (grense-/gjennomsnittskostnad) | ~5 | **~5/15 = 33 %** | K′(x), g(x)=K(x)/x; ofte innvevd i produsentoppgaver |

### 2B. Grunnleggende del / kontrollprøve / fagoppgave (n = 6)

| Tema | **Gjenganger-score** | Kommentar |
|---|---|---|
| **Algebra: faktorisering & forenkling** | **6/6 = 100 %** | Fellesfaktor, konjugat, kvadratsetninger, brøksammentrekning (MFN) |
| **Potens- og rotforenkling** | **~5/6 = 83 %** | Potensregler til én potens; rasjonalisere/trekke ut felles rot |
| **Løs likninger** (2.grad/brøk/eksp./ln) | **6/6 = 100 %** | abc med diskriminant skrevet ut; forkast røtter som nuller nevner |
| **Løs ulikheter** (fortegnsskjema) | **6/6 = 100 %** | Alt over på én side → felles brøkstrek → faktoriser → fortegnslinje |
| **Rette linjer** (topunkt/skjæring) | **~4/6 = 67 %** | Topunktsformel; «skjærer x-aksen» ⇒ y = 0; skjæring ved å sette like |
| **Lineære likningssystemer** (2×2/3×3) | **~3/6 = 50 %** | Innsettings- og addisjonsmetode likestilt |
| **Én-variabel kostnad/overskudd** | **~4/6 = 67 %** | Lineær K(x) fra to punkter; O = I − K; grense-/gjennomsnittskostnad |
| **Polynomdivisjon** | **~2/6 = 33 %** | Faktorisering av 3.gradspolynom |

### Fravær — like viktig som forekomst

Følgende temaer som ofte forbindes med «matematikk for økonomer», har **0 forekomster** i hele MET 2910-arkivet (2015–2025):

- **Ekte Lagrange-metode med multiplikator (λ) og førsteordensbetingelser** — 0. Bibetingelsesoppgaver løses **ved innsetting** av bibetingelsen i profittfunksjonen, deretter én-variabel-optimering. (Den økonomiske «betbetalingsvillighet for å slippe bibetingelsen» finnes, men multiplikatorteknikken gjør det ikke.)
- **Omhyllingsteoremet, Eulers teorem, homogenitet, substitusjonselastisitet, CES/Cobb-Douglas** — 0. (Alle sentrale i ECON1100; ingen av dem i MET 2910.)
- **Differensiallikninger, Taylor-/rekkeutvikling utover geometriske rekker, komplekse tall** — 0.
- **Implisitt derivasjon / nivåkurver** — 0 (i motsetning til ECON1100 der det er nesten allestedsnærværende).

### Viktigste funn

1. **Seks temaer bærer hovedeksamen og forekommer i praksis i hvert sett:** derivasjon, likninger, ulikheter, én-variabel funksjonsdrøfting, finansmatematikk/annuitet og 2-variabel optimering (bedrift). En kandidat som mekaniserer disse, sikrer et bredt poenggulv.
2. **Den bedriftsøkonomiske to-vare-optimeringen er fagets signaturoppgave** (100 %). Alltid: «vis at profittfunksjonen er … → partielle deriverte → stasjonærpunkt → AC−B²-klassifisering → maksimalt overskudd → optimering under kapasitets-/eksportkrav ved innsetting».
3. **Finansmatematikk er et fullverdig, tilbakevendende hovedtema** (100 %) — det klareste skillet mot ECON1100. Annuitetslån (terminbeløp, renter/avdrag, restgjeld), sparing (sluttverdi), månedlig vs. årlig omregning, og fra 2019 kontinuerlig rente + doblingstid.
4. **Lineær algebra er stabil, men i endring.** Determinant + Cramers regel dominerte t.o.m. 2019; fra 2022 dreide det mot **Gauss-eliminasjon**; H2025 spør konseptuelt («er systemet lineært, har det løsning?»). Boken må dekke alle tre teknikkene, men vekte Gauss høyest for fremtidige sett.
5. **Formatet er nå «Samlet eksamen» (MET 29107).** H2025-settet, med formelark, 28 likt vektede delpunkter og de nye konseptuelle vriene, er malen boken skal kalibreres mot. De eldste settene (2015–2016, uten formelark, med tunge bonusintegraler) er minst representative.

---

## 3. Oppgavesjangre — katalog

### A. Teknikk-sekken (Oppgave 1 — 100 %)
Åpningsoppgaven som samler ren regneteknikk. Fire faste underdeler:
- **Deriver 2–4 funksjoner.** Repertoar: potens-/sum-/produkt-/kvotient-/kjerneregel, `(ln u)′ = u′/u`, `(eᵘ)′ = u′eᵘ`, `(aˣ)′ = aˣ ln a`, `√x → 1/(2√x)`. Alle reglene står på formelarket.
- **Løs likninger.** Andregrad med abc (diskriminant skrevet ut); brøklikning (multipliser med fellesnevner, forkast røtter som nuller nevner); eksponential (`aˣ = b ⇒ x = ln b/ln a`); logaritmisk (`ln(…) = 0 ⇒ … = 1`).
- **Løs ulikheter.** Alt over på én side → felles brøkstrek → faktoriser teller og nevner → **fortegnsskjema**. Nevner som `x²` markeres «alltid positiv / udefinert i null».
- **Beregn integraler.** Bestemte og ubestemte: potensregelen baklengs, `∫eˣ`, `∫1/x = ln|x|`, **substitusjon** (`∫f(g(x))g′(x)dx`), **delvis integrasjon** (`∫x·eˣ`, `∫x·ln x`). Alt på formelarket.

### B. Én-variabel funksjonsdrøfting (100 %)
Fast oppskrift: (i) `f(x) = 0` og fortegn via fortegnsskjema; (ii) `f′(x) = 0` → voksende/avtakende + klassifiser maks/min (skill **lokale og globale** når definisjonsmengden er begrenset, f.eks. `Df = [0,4]`); (iii) `f″(x) = 0` → konkav/konveks + **vendepunkt**; (iv) evt. **asymptoter** (rasjonale funksjoner); (v) **skisse** konsistent med funnene; (vi) evt. **tangent** `y − f(a) = f′(a)(x − a)` og **areal** ved bestemt integral. Funksjonstyper: 3.-/4.gradspolynom, `x·eˣ`, `(2x−1)e⁻²ˣ`, rasjonale `(x²−1)/(x+1)`.

### C. Bedriftsøkonomisk to-variabel-optimering (100 % — signaturoppgaven)
Standardforløp:
1. **Vis profittfunksjonen** `f(x,y) = I(x,y) − C(x,y)`, der inntekt bygges fra prisfunksjoner `p = a − bx − cy`, `q = d − ex − gy` (ofte krysspriseffekt), og kostnad `C(x,y)`.
2. **Partielle deriverte** `f_x = 0`, `f_y = 0` → løs 2×2-systemet → **stasjonærpunkt**.
3. **Klassifiser med annenderiverttesten** (formelarket): `A = f_xx`, `B = f_xy`, `C = f_yy`; `AC − B² > 0, A < 0 ⇒` maks. Regn ut **maksimalt overskudd**.
4. **Optimering under bibetingelse:** kapasitet `x + y = k`, eksportkrav `y = 2x`, eller `x = y`. **Metoden er innsetting** — sett bibetingelsen inn i `f`, reduser til én variabel, deriver og sett lik null. Ikke Lagrange.
5. **Tolkningsspørsmål:** «hvor mye er bedriften villig til å betale for å slippe kapasitetsbegrensningen?» = forskjellen mellom fri og bunden maksimalprofitt; «minste kompensasjon» ved eksportkrav på samme vis.

### D. Finansmatematikk / annuitet (100 %)
- **Annuitetslån:** fast terminbeløp `K = K₀·(1+r)ⁿ·r/((1+r)ⁿ−1)` (formelarket). **Renter i én termin = restgjeld · r**, **avdrag = terminbeløp − renter**. Restgjeld = nåverdi av gjenstående terminer.
- **Sparing:** sluttverdi `Aₙ = K·((1+r)ⁿ−1)/r` (og `·(1+r)` for verdi ett år etter siste innskudd); kombinert spare-/uttaksplan.
- **Endringer:** renteendring midtveis, økt lån, overgang fra årlig til **månedlig** (`r/12`, `n·12`) — sett opp formelen på nytt med oppdatert restgjeld.
- **Kontinuerlig rente:** `A = P·eʳᵗ`; **doblingstid** ved å løse `eʳᵗ = 2 ⇒ t = ln2/r`. Sammenligning årlig vs. kontinuerlig vs. uten rentesrente.

### E. Elastisitet (20 %, stigende — fast Oppg. 4 fra 2023)
Priselastisitet `El_p x(p) = (p/x)·x′(p)`; tolk tallet (elastisk/uelastisk); avgjør prisstrategi for å øke salgsinntekt; finn prisen der `El = −1` (maksimerer inntekt).

### F. Lineær algebra (80 %)
- **Determinant** 2×2 (`ad − bc`) og 3×3 (Sarrus/kofaktor).
- **Cramers regel** (bytt kolonne med konstantvektoren, del på det(A)).
- **Gauss-eliminasjon** på utvidet matrise til trappeform (dominerer fra 2022).
- **Parameteroppgaver:** «ingen entydig løsning» ⇔ `det(A) = 0` → løs for parameteren.
- **Konseptuelt (H2025):** avgjør om et system er **lineært** og om det har reell løsning (et kvadrert ledd gjør systemet ikke-lineært → ingen reell løsning).

### G. Graflesning (67 %)
Gitt grafen til **f′(x)**: ekstrempunkt der f′ skifter fortegn (maks `+→−`, min `−→+`), f konveks der f′ er voksende, vendepunkt der f′ har ekstremalpunkt. **Ny H2025-variant:** gitt grafen til **f** selv, avgjør fortegn til f′ og f″. Vektlegger tolkning, ikke presisjon.

---

## 4. Sensorens krav

### Metaregler (fra oppgavetekst og veiledninger — på hvert sett)
1. **Utregning må vises, med formlene.** Kun svar eller kalkulatortastetrykk ⇒ **ingen uttelling**. Fagets viktigste enkeltregel, og eksplisitt gjentatt i mange finans- og optimeringsoppgaver («Husk at du skal vise utregningen»).
2. **Riktig formelvalg og fremgangsmåte bærer poengene.**
3. **Eksakt, forenklet svar** med enhet/tolkning der oppgaven er økonomisk.
4. **Fortegnsskjema er standardverktøyet** for ulikheter og for f/f′/f″-analyse.

### Fagspesifikke, strenge punkter
- **abc-formelen skal skrives ut med diskriminanten**, ikke bare sluttsvaret (gjennomgående i kontrollprøve-veiledningene).
- **Brøklikninger/-ulikheter:** noter multiplikatoren (f.eks. `| · x²(x−1)`), og **forkast røtter som gjør nevner null**. Behandle `x²` i nevner som «alltid positiv / udefinert i null» — null skal aldri havne i løsningsmengden.
- **Snu ulikhetstegnet** ved multiplikasjon/divisjon med negativt tall — vises eksplisitt.
- **Klassifiseringen skal med.** Etter å ha funnet et stasjonærpunkt må man vise `AC − B² > 0, A < 0` (to variabler) eller `f″`-tegn (én variabel). Å hoppe over dette trekker.
- **Lokal vs. global.** Når `Df` er begrenset (`[0,4]`), må endepunktsverdiene sammenlignes for å avgjøre om et ekstremum er globalt.
- **Riktig finansformel.** Skill sluttverdi (sparing) fra nåverdi (lån); korrekt antall terminer ved renteendring og ved månedlig omregning (`r/12`, `n·12`).
- **Både innsettings- og addisjonsmetode godtas** for lineære systemer; sensor kommenterer at addisjon gir litt mindre regnearbeid i 3×3.
- **Graflesning skal begrunnes** med fortegnsskifte i f′ (ikke bare oppgi punktet).

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på teknikk-sekken (derivasjon, likninger, ulikheter, enkle integraler) og oppsett av annuitet- og profittfunksjon.
- **Midtsjiktet** fullfører funksjonsdrøftingen (f″, vendepunkt, skisse), løser hele annuitetsoppgaven inkl. restgjeld/månedlig, finner og klassifiserer stasjonærpunktet, og løser lineære systemer.
- **Toppsjiktet** behersker **optimering under bibetingelse** og tolkningsspørsmålene (betalingsvillighet/kompensasjon), **lokal-vs-global** i begrenset definisjonsmengde, kontinuerlig rente/doblingstid, og de **konseptuelle H2025-vriene** (er systemet lineært; kvalitativ integralsammenligning; fortegn til f′/f″ lest fra grafen til f).

---

## 5. Typiske feil (dokumentert / utledet fra veiledningene)

1. **Oppgi svar uten utregning** — det eksplisitt straffede feilet; gir null selv med riktig tall.
2. **Glemme å snu ulikhetstegnet** ved multiplikasjon med negativt tall.
3. **Ta med røtter som nuller ut en nevner** i brøklikning/-ulikhet.
4. **Behandle `x²` i nevner som om det kan skifte fortegn** i fortegnsskjemaet.
5. **Hoppe over klassifiseringen** (`f″`-tegn / `AC − B²`) etter å ha funnet et stasjonærpunkt.
6. **Feil finansformel** (sluttverdi vs. nåverdi) eller **feil antall terminer** ved renteendring/månedlig omregning.
7. **Blande lokal og global** ekstremal når definisjonsmengden er begrenset.
8. **Ikke skrive ut diskriminanten** i abc / regne feil fortegn i den.
9. **Feil ved graflesning:** forveksle grafen til f med grafen til f′, eller ikke begrunne med fortegnsskifte.
10. **Regnefeil med fortegn** i partielle deriverte av krysspris-profittfunksjoner (mest tap på selve den store optimeringsoppgaven).
11. **Substitusjon/delvis integrasjon:** glemme å bytte tilbake variabel eller feil valg av `u`/`v′`.

---

## 6. Symbol- og metodeapparat

### Må beherskes aktivt (regne raskt og korrekt)

**Algebra & likninger (grunnleggende del):**
- Faktorisering: fellesfaktor, konjugat `a²−b²`, kvadratsetningene, abc → `a(x−x₁)(x−x₂)`.
- Brøk: minste felles nevner; potens- og rotregler (formelarket).
- Likninger: abc, brøk (multipliser opp), eksponential (`ln` på begge sider), logaritmisk.
- Ulikheter: fortegnsskjema.
- Rette linjer: `y − y₁ = a(x − x₁)`, topunktsformel `y − y₁ = ((y₂−y₁)/(x₂−x₁))(x − x₁)`; skjæring.
- Lineære systemer: innsetting, addisjon, Gauss.

**Derivasjon:** potens/sum/produkt/kvotient/kjerneregel; `ln`, `eˣ`, `aˣ`, `√`. (Alle på formelarket.)

**Funksjonsanalyse:** `f′ = 0` + fortegn; `f″ = 0` + fortegn (konkav/konveks, vendepunkt); ekstremal lokal/global; asymptoter for rasjonale; tangent `y − f(a) = f′(a)(x − a)`.

**Integrasjon:** antideriverte av potens/`eˣ`/`1/x`; bestemte integraler; **substitusjon** `∫f(g(x))g′(x)dx = ∫f(u)du`; **delvis integrasjon** `∫u′v = uv − ∫uv′`; areal under/mellom kurver.

**Finansmatematikk:**
- Sluttverdi sparing `Aₙ = K·((1+r)ⁿ−1)/r` (·(1+r) ett år etter siste innskudd).
- Nåverdi/terminbeløp annuitetslån `K = K₀·(1+r)ⁿr/((1+r)ⁿ−1)`.
- Renter = restgjeld·r; avdrag = terminbeløp − renter; restgjeld = nåverdi av gjenstående terminer.
- Månedlig: `r/12`, `n·12`.
- Kontinuerlig rente `A = P·eʳᵗ`; doblingstid `t = ln2/r`.
- Geometriske rekker (formelarket).

**To-variabel optimering:**
- Partielle deriverte `f_x`, `f_y`, andreordens `f_xx`, `f_yy`, `f_xy`.
- Stasjonærpunkt: `f_x = f_y = 0`.
- **Klassifisering:** `A = f_xx`, `B = f_xy`, `C = f_yy`; `AC − B² > 0, A < 0 ⇒` maks; `> 0, A > 0 ⇒` min; `< 0 ⇒` sadel.
- Bibetingelse **ved innsetting** (ikke Lagrange).

**Lineær algebra:** determinant 2×2/3×3; Cramers regel; Gauss-eliminasjon; `det(A) = 0 ⇒` ingen entydig løsning.

**Elastisitet:** `El_p x = (p/x)·x′(p)`; `El = −1 ⇒` maks. salgsinntekt.

**Marginalanalyse:** grensekostnad `K′(x)`; gjennomsnittskostnad `g(x) = K(x)/x`, minimeres ved `g′(x) = 0`; overskudd `O = I − K`, `O′ = 0`.

### Notasjonskonvensjoner boken bør speile
- Norsk skolenotasjon: `f′(x)`, `f″(x)` (ikke `∂`-tunge uttrykk); partielle skrives gjerne som `f_x`, `f_y` eller «de partielle deriverte av første/andre orden».
- **Vekttall** per oppgave; alle utregninger og formler eksplisitt.
- Løsning på lineært system som ordnet tuppel `(x, y)` / `(x, y, z)`.
- Økonomisk innramming gjennomført: `K(x)` kostnad, `I(x)` inntekt, `O(x)`/`f(x,y)` overskudd/profitt, `p`/`q` priser.

---

## 7. Kobling til økonomifagene (verktøyet i bruk)

MET 2910 er regneverktøyet BIs videre metode-, mikro- og finansfag henter fra. Boken bør vise koblingen:
- **To-variabel optimering** → bedriftens produktvalg og produksjonsplanlegging (flere varer/fabrikker).
- **Bibetingelse (kapasitet/eksport)** → produksjon under ressurs- eller reguleringsskranker; betalingsvillighet for kapasitetsutvidelse = skyggeverdi.
- **Marginalanalyse** (K′, O′) → grensekostnad, grenseinntekt, profittmaksimering `grenseinntekt = grensekostnad`.
- **Elastisitet** → pris- og inntektsstrategi; sammenhengen mellom elastisitet og salgsinntekt.
- **Finansmatematikk** → lån, sparing, investering, nåverdi — direkte inn i finansfagene.
- **Lineær algebra** → likevektsberegninger og systemer med flere ukjente.

Den gjennomførte bedriftsøkonomiske innrammingen (bedrifter, fabrikker, lån, sparing, flyseter, eksportkrav) understreker at faget skal **anvendes**, ikke pugges abstrakt.

---

## 8. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~100 % frekvens)
1. **Teknikk-sekken (Oppg. 1):** derivere, løse likninger, løse ulikheter (fortegnsskjema), beregne integraler (inkl. substitusjon/delvis).
2. **Én-variabel funksjonsdrøfting:** nullpunkt → f′ → f″ → vendepunkt → lokal/global ekstremal → asymptoter → skisse → tangent → areal.
3. **Bedriftsøkonomisk to-variabel-optimering:** vis profittfunksjon → partielle → stasjonærpunkt → AC−B²-klassifisering → maks. overskudd → **bibetingelse ved innsetting** → tolkning (betalingsvillighet/kompensasjon).
4. **Finansmatematikk:** annuitetslån (terminbeløp, renter/avdrag, restgjeld), sparing, månedlig omregning, kontinuerlig rente + doblingstid.

### Nivå 2 — må kunne (bredden i poengfangsten)
5. **Lineær algebra:** Gauss-eliminasjon (primært), determinant + Cramer, parameter-/entydighetsanalyse, «er systemet lineært».
6. **Grunnleggende algebra** (kontrollprøvedelen): faktorisering, brøk, potens/rot, rette linjer, lineære systemer, én-variabel kostnad/overskudd.
7. **Graflesning:** ekstrem-/vendepunkt/konveksitet fra grafen til f′ — og fra grafen til f.
8. **Elastisitet:** priselastisitet, tolkning, `El = −1`-inntektsmaks.

### Nivå 3 — bør dekkes (lav frekvens / karakterdifferensiering)
9. **Marginalanalyse** (grense-/gjennomsnittskostnad) som egen vinkling.
10. **Rasjonale funksjoner med asymptoter** som egen drøftingsoppgave.
11. **Konseptuelle H2025-vrier:** kvalitativ integralsammenligning, ikke-lineære systemer, rentesrente vs. enkel rente.

### Prognose for neste samlede eksamen (MET 29107-malen, basert på H2025)
5 timer, 6 oppgaver, 28 likt vektede delpunkter, formelark utdeles:
- **Oppgave 1:** teknikk-sekk — 2 deriverte, 2 likninger, 2 ulikheter, 2 integraler, evt. ett konseptuelt integralspørsmål.
- **Oppgave 2:** én-variabel funksjonsdrøfting + areal/skjæring.
- **Oppgave 3:** finansmatematikk — annuitet/sparing + kontinuerlig rente eller doblingstid.
- **Oppgave 4:** graflesning (fortegn til f′/f″).
- **Oppgave 5:** bedriftsøkonomisk to-variabel-optimering med bibetingelse.
- **Oppgave 6:** lineært likningssystem (Gauss) + konseptuelt spørsmål om linearitet/løsning.

**Usikkerhetsmoment:** overgangen til samlet eksamen (fra H2025) er fersk — bare ett sett i det nye formatet foreligger. Boken bør derfor dekke **hele bredden** (både den gamle Del 1-forkunnskapen og hele Del 2-hovedeksamen), siden alt nå kan komme i ett sett. Determinant/Cramer bør beholdes selv om Gauss dominerer, og de gamle bonus-integralene (substitusjon/delvis integrasjon) er nå ordinært pensum. Fraværet av Lagrange-multiplikator, omhyllingsteorem, homogenitet, implisitt derivasjon og differensiallikninger er stabilt gjennom hele arkivet (2015–2025) og kan legges til grunn.

### Anbefalt bok-arketype
Samme grunnarketype som **ECON1100/OsloMet-MAT1000: «regnetung anvendt verktøymatematikk»** — teori → metode/oppskrift → økonomisk eksempel → oppgave, med kompakte, stegvise løsningsforslag som speiler sensorstilen. **Men bredere enn ECON1100**: MET 2910-boken trenger tre ekstra hovedmoduler som ECON1100 mangler — **finansmatematikk (annuiteter/rente)**, **lineær algebra (determinant/Cramer/Gauss)** og **integrasjonsteknikker (substitusjon/delvis)** — og kan til gjengjeld droppe ECON1100s teoritunge moduler (Lagrange-multiplikator, omhyllingsteorem, homogenitet, nivåkurver). Boken bør ha en egen **grunnleggende del** (algebra/likninger/ulikheter/rette linjer) foran hoveddelen, siden faget historisk hadde en egen forkunnskaps-kontrollprøve og disse temaene fortsatt åpner hvert sett. Gjennomgående bedriftsøkonomisk innramming (bedrift, fabrikk, lån, sparing) og eksplisitt «vis all utregning»-disiplin.

---

## 9. Kildeliste

Alle filer ligger under `~/Desktop/Eksamner/BI/MET2910/`.

**Sensorveiledninger lest grundig (5):**
- Kontrollprøve/fagoppgave (grunnleggende del): `MET 29101_201910_14.03.2019_EG.pdf` (kontrollprøve V2019), `MET 29101_201920_15.10.2019_EG.pdf` (fagoppgave H2019), `MET 29103_202010_30.03.2020_EG.pdf` (fagoppgave V2020), `MET 29101 202220_30.09.22_EG.pdf` (kontrollprøve H2022).

**Hovedeksamen / Del 2 — oppgavesett med løsbart innhold (15 sett):** samlet i `Samlet - oppgaver.pdf` (MET 29104/29106 fra V2015 t.o.m. H2023, med utdelt formelark fra V2022) + `MET2910_2025-12-18_kl_09_EP.pdf` (MET 29107, **samlet eksamen H2025**, nytt 5-timers format med fullt formelark). Enkeltsett også som `MET2910 Del 2 Høst 2023.pdf`.

**Grunnleggende del — separate oppgavesett:** `utf-8''MET2910 Del 1 Våren 2023.pdf` (MET 29102 V2023, bokmål + nynorsk), `MET 29105_202410_16.05.2024_qp.pdf` (forenklet V2024).

**Øvrige oppgavesett (format-/temaregistrering, uten fasit):** `MET 29101_201820_16.10.2018_QP.pdf`, `MET29104qp.pdf`, `MET29104NYNQP.pdf` (nynorsk), `met29101h22.pdf`, `MET 2910 QP.pdf` (V2022), `O3RNEs-MET29101qp-kopi.pdf`, `Met 29103.pdf`, `met2910QP-kopi.pdf`.

**Formelark:** de to formelsidene i V2022→-settene og H2025-settet er gjennomgått i sin helhet (potens-/kvadrat-/logaritmeregler, abc, derivasjon inkl. produkt/kvotient/kjerne, integrasjon inkl. substitusjon/delvis, lineære funksjoner, geometriske rekker, annuiteter, AC−B²-klassifisering).

**Fagbeskrivelse:** omskrevet sammendrag av BIs emnebeskrivelse for MET 2910 (scratchpad: `fagbeskrivelse-met2910-bi.md`); status verifisert **aktiv 2026** (obligatorisk grunnleggende matematikkfag i BIs bachelor i økonomi og administrasjon).

**Merknader om kildene:**
- **Duplikater:** arkivet inneholder flere kopier av samme sett under ulike filnavn (bekreftet via md5); analysen bygger på ett eksemplar av hvert unike sett.
- **Ett bildebasert sett:** `MET 29101_202420_06.03.2024_QP.pdf` er en ren skann uten tekstlag (ingen innebygde fonter) og kunne ikke tekstutvinnes; ikke tellet i frekvensene.
- **Formatbrudd 2023→2025:** faget gikk fra to-delt vurdering (grunnleggende del + hovedeksamen) til én **samlet eksamen** (MET 29107). Boken kalibreres mot H2025-formatet, men må dekke hele den historiske bredden siden alt nå kan opptre i ett sett.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekst eller fasitformulering er gjengitt ordrett. Matematiske uttrykk, standardformler og -teoremer er faglig allemannseie.
