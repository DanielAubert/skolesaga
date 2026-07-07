# Eksamensanalyse: STV1020 Politisk analyse 2 – Forskningsdesign og kvantitative metoder (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på hele det tilgjengelige eksamensarkivet ved Institutt for statsvitenskap, UiO: 11 komplette eksamenssett uten fasit (V2012, H2012, V2013, H2013, V2014, V2015, H2015, V2016, H2016, V2017, V2018) og 5 sett med fullstendig sensorveiledning (V2019, V2020, V2021, V2022, V2023) — til sammen **16 distinkte sett** som dekker perioden 2012–2023. **Alt innhold er omskrevet med egne ord.** Ingen oppgavetekster eller sensorformuleringer er gjengitt ordrett; formler, R-funksjonsnavn og standard statistisk notasjon er faglig allmenneie. Analysen er kvantitativ der kildene tillater det.
>
> Emnet het tidligere «Metode og statistikk» (og deles historisk med det nå nedlagte fjernundervisningsemnet STV1021). Kjernepensum er metodeboken **Kellstedt & Whitten, *The Fundamentals of Political Science Research*** — sensorveiledningene siterer den (K&W) side for side, spesielt for kausalitetskriteriene og OLS-forutsetningene. Faget er en **hybrid**: omtrent halvparten forskningsdesign/metodeteori (drøfting) og halvparten anvendt regresjonsstatistikk (regne + tolke). Dette er ikke et sannsynlighetsteori-fag som ECON2130 — det finnes ingen fordelinger, kombinatorikk eller bevis. Statistikken er nesten utelukkende **regresjonstolkning og enkle tabellutregninger**.

---

## 1. Eksamensform og utvikling

### Form

| Periode | Form | Struktur | Kommentar |
|---|---|---|---|
| 2012–2014 | Skriftlig skoleeksamen på papir, **4 timer**. Formelark vedlagt (kjikvadrat, Fi, gamma, tau, rho, Scott's Pi, modalprosent, t = b/s_b) samt kjikvadrat- og t-tabell | Tre–fire romertallsdeler (I, II, III …). Blanding av **begrepsutgreiing** (definer 6–8 begreper kort), **krysstabellanalyse** (gamma, rho, odds ratio, kjikvadrat regnet for hånd) og **regresjonstolkning** | «Gammelt regime»: mye håndregning på tabellmål og rangkorrelasjon. Ingen flervalgsdel |
| 2015–2018 | Skriftlig skoleeksamen på papir, **4 timer**. Formelark + t-tabell (og utdrag i selve oppgaven) | **Del 1: 30 flervalgsoppgaver (30 % / 30 poeng), rettes automatisk.** **Del 2: kortsvarsoppgaver (70 % / 70 poeng)**, én sammenhengende case med a)–u) deloppgaver | Regimeskifte til dagens mal: Del 2 følger en fast «forskningsprosess-løype» fra hypotese til residualdiagnostikk |
| 2019–2020 | Som over (Del 1 flervalg + Del 2 kortsvar). Eksplisitte poenggrenser i veiledningene | Del 2: én lang case, ~15–20 deloppgaver | Sensorveiledningene er detaljerte og poengsetter hvert delsvar |
| 2021 (korona) | **4-timers digital hjemmeeksamen** med tilgang til pensum og notater (individuell, plagiatkontrollert) | Del 1 flervalg + Del 2 (20 deloppgaver). **R-utskrift introdusert**: kandidaten leser og tolker ferdige R-regresjonstabeller | R som verktøy synlig for første gang; ellers samme metodefokus |
| 2022–2023 | Digital skoleeksamen. V2023 bygde hele settet på en **ekte fagartikkel** (Kolltveit, Karlsen & Figenschou om «fiendtlig medie-persepsjon») | Del 1 flervalg + Del 2 (4 oppgaver med 13–15 deloppgaver) | R-tabeller med signifikansstjerner (`***`), standardfeil i parentes; artikkelforankret case |
| Gjeldende emnebeskrivelse (2024→) | Skriftlig skoleeksamen **3 timer**, flervalgsoppgaver, ordbok + digital kalkulator i Inspera. **R er kursets statistikkverktøy** | (Ikke dokumentert i arkivet etter 2023) | Merk avvik: emnesiden i dag oppgir 3 timer og en flervalgsprofil, mens arkivets sett t.o.m. 2023 er 4-timers med både flervalgsdel og en tung kortsvarsdel |

### Karakter- og poenghistorikk (eksplisitt i veiledningene)

Total 100 poeng: **Del 1 = 30 poeng** (flervalg, auto), **Del 2 = 70 poeng** (kortsvar). Poenggrenser varierer noe fra år til år:

| Sett | E | D | C | B | A |
|---|---|---|---|---|---|
| V2020 | 28 | 34 | 43 | 68 | 90 |
| V2021 | 30 | 35 | 45 | 65 | 80 |
| V2023 | 20 | 35 | 50 | 68 | 85 |

Bestått (E) krever i praksis at man løser de «mekaniske» kjerneoppgavene (målenivå, tolke konstant/koeffisient, R², enkel t-test); A krever bredde på tvers av både metodedrøfting og regnestykker.

### Konstanter på tvers av alle sett

- **Alt er pakket inn i en anvendt statsvitenskapelig case.** Gjennomgangstemaer: eiendomsskatt og politisk styre i kommuner, demokrati og BNP/økonomisk vekst, kvinnelig yrkesdeltakelse og foreldrepermisjon, barn og politisk deltakelse, partimedlemskap og politisk kunnskap, bosetting av flyktninger, holdning til privatisering/beskatning, lykkenivå og levekår, medie-persepsjon, valgdeltakelse i distrikter. Konteksten er alltid politikk/samfunn.
- **Hjelpemidler er romslige** (formelark og tabeller vedlagt, i 2021 hele pensum). Derfor gir ren formelgjengivelse lite — poengene ligger i **riktig metodevalg, begrunnelse og substansiell tolkning i kontekst**.
- **Følgefeil straffes mildt.** Veiledningene sier gjennomgående at et galt mellomsvar ikke skal trekke videre nedover i deloppgavene så lenge kandidaten viser at hun forstår hvert trinn.
- **Del 2 er nesten alltid én lang, sammenhengende case** som følger forskningsprosessen: hypotese → populasjon/enheter/variabler → utvalg → operasjonalisering/målenivå → kausalmodell → regresjonsligning → tolke tabell → signifikanstest → dummy/samspill → OLS-diagnostikk → validitet/kausalitet til slutt.

---

## 2. Temafrekvens-tabell

Basert på alle 16 sett. Årsgrupper: **2012–14** (5 sett: V2012, H2012, V2013, H2013, V2014), **2015–17** (5: V2015, H2015, V2016, H2016, V2017), **2018–20** (3: V2018, V2019, V2020), **2021–23** (3: V2021, V2022, V2023). Celleverdi = antall sett i gruppen der temaet er egen deloppgave eller mer. Flervalgsdelen (Del 1) er også regnet med der temaet er identifiserbart.

| Tema | 2012–14 (5) | 2015–17 (5) | 2018–20 (3) | 2021–23 (3) | **Gjenganger-score** |
|---|---|---|---|---|---|
| Målenivå (nominal/kategorisk, ordinal, intervall, forholdstall/metrisk) — bestem + begrunn | 5 | 5 | 3 | 3 | **16/16 = 100 %** |
| Tolke regresjonstabell: konstantledd + stigningskoeffisient i kontekst | 5 | 5 | 3 | 3 | **16/16 = 100 %** |
| Utvalg/sannsynlighetsutvelging (enkel tilfeldig, stratifisert, systematisk, klynge) + begrunn | 4 | 5 | 3 | 3 | **15/16 = 94 %** |
| Kausalmodell / stimodell tegne (bakenforliggende, mellomliggende, spuriøs) | 4 | 4 | 3 | 3 | **14/16 = 88 %** |
| R² — tolkning (forklart varians) og endring mellom modeller | 4 | 5 | 3 | 3 | **15/16 = 94 %** |
| Deskriptiv statistikk fra frekvenstabell/figur (median, modus, variasjonsbredde, gjennomsnitt) | 5 | 5 | 2 | 1 | **13/16 = 81 %** |
| Populasjon / enheter / variabler + avhengig vs. uavhengig variabel | 3 | 4 | 3 | 3 | **13/16 = 81 %** |
| t-verdi / t-test / signifikanstest (df = N−k−1, t-tabell, b/SE) | 4 | 4 | 3 | 2 | **13/16 = 81 %** |
| Prediksjon: regn ut forventet Y for gitte X-verdier | 3 | 5 | 3 | 2 | **13/16 = 81 %** |
| Dummyvariabler (opprette fra kategorisk variabel, referansekategori) | 3 | 4 | 3 | 3 | **13/16 = 81 %** |
| OLS-forutsetninger + residualdiagnostikk (normalfordelte restledd, heteroskedastisitet, autokorrelasjon) | 3 | 4 | 3 | 3 | **13/16 = 81 %** |
| Regresjonsligning på generell/estimert form (skrive opp) | 3 | 5 | 3 | 2 | **13/16 = 81 %** |
| Operasjonalisering + validitet/reliabilitet (definisjonsmessig validitet, målevaliditet) | 3 | 3 | 3 | 3 | **12/16 = 75 %** |
| Korrelasjonsmål-valg (Pearson r, gamma, tau, rho, kjikvadrat, Fi, Cramers V) etter målenivå | 4 | 4 | 1 | 2 | **11/16 = 69 %** |
| Kausalitet: Kellstedt & Whittens fire kriterier / drøfte årsakssammenheng | 2 | 2 | 3 | 3 | **10/16 = 63 %** |
| Standardfeil beregning (SE = b/t, eller SE(p̂) = √[p̂(1−p̂)/n]) | 2 | 4 | 2 | 1 | **9/16 = 56 %** |
| Case-studie-design (teoritestende/teoriutviklende, most similar/different, case-utvalg) | 2 | 4 | 1 | 2 | **9/16 = 56 %** |
| Samspill / interaksjonsledd — sette opp og tolke | 2 | 3 | 2 | 2 | **9/16 = 56 %** |
| Krysstabell-mål regnet for hånd (gamma, rho, odds ratio, kjikvadrat) | 5 | 1 | 0 | 0 | **6/16 = 38 %** (nesten kun gammelt regime) |
| Panel/tidsserie, endring over tid (diakron vs. synkron, bruttoendring, ja-siing) | 4 | 1 | 0 | 1 | **6/16 = 38 %** |
| Intervju/datainnsamling (strukturert, semistrukturert, formelt, deltakende obs., enquête) | 1 | 2 | 0 | 1 | **4/16 = 25 %** |
| Dekomponering / stianalyse (skille direkte/indirekte/spuriøs effekt) | 1 | 1 | 2 | 1 | **5/16 = 31 %** |
| p-verdi som eget tolkningsspørsmål | 0 | 0 | 1 | 3 | **4/16 = 25 %** (nytt i R-regimet) |
| Utelatt variabelskjevhet (omitted variable bias) | 1 | 2 | 1 | 1 | **5/16 = 31 %** |
| Restledd for én enhet (regne ut e_i = Y − Ŷ) | 0 | 3 | 0 | 0 | **3/16 = 19 %** |
| Standardiserte koeffisienter (beta) | 0 | 1 | 1 | 0 | **2/16 = 13 %** |
| Feilslutninger (økologisk/atomistisk/aggregativ) | 0 | 2 | 0 | 0 | **2/16 = 13 %** (flervalg) |
| Lese R-utskrift (regresjon fra R, stjerner, SE i parentes) | 0 | 0 | 0 | 3 | **3/16 = 19 %** (kun 2021–23) |

**Viktigste funn:**

1. **Regresjonstolkning er faget.** Å tolke konstantledd + stigningskoeffisient i kontekst, tolke R², regne prediksjoner og gjennomføre t-test går igjen i praktisk talt hvert sett. Dette er ryggraden.
2. **Målenivå er det mest sikre enkelttemaet (16/16).** Kandidaten må kunne bestemme og *begrunne* om en variabel er nominal/kategorisk, ordinal, intervall eller forholdstall/metrisk — og vite hvilke statistiske operasjoner hvert nivå tillater. Dette styrer alt annet (valg av korrelasjonsmål, om man må lage dummyer, om man kan regne gjennomsnitt).
3. **Faget skiftet karakter rundt 2015.** Det gamle regimet (2012–14) hadde tung håndregning på krysstabellmål (gamma, rho, odds ratio, kjikvadrat) og essaypreget begrepsdrøfting. Det nye regimet (2015→) er OLS-regresjon + forskningsdesign etter en fast mal, med en auto-rettet flervalgsdel foran. **Boken bør prioritere det nye regimet**, men beholde et solid krysstabell-/korrelasjonskapittel siden korrelasjonsmål-valg fortsatt testes.
4. **OLS-diagnostikk er et fast avslutningsgrep.** Nesten hvert nyere sett ender med et residualplot: «kan du stole på signifikanstestene?» (normalfordelte restledd), heteroskedastisitet eller autokorrelasjon — med krav om å koble figuren til riktig forutsetning *og* si konsekvensen for tolkningen.
5. **Kausalitet skiller dette faget fra ren statistikk.** Kellstedt & Whittens fire kriterier (troverdig mekanisme, utelukke omvendt kausalitet, samvariasjon, utelukke bakenforliggende Z) er direkte pensum og stilles nesten ordrett i flere sett. Korrelasjon ≠ kausalitet er et gjennomgående krav.
6. **R er nåtidsregimet, men lavterskel.** Fra 2021 leser man R-utskrift; man skriver ikke egen R-kode på eksamen slik som i ECON2130. Boken bør vise hvordan en R-regresjonstabell ser ut og hvordan stjerner/SE-i-parentes leses.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav destillert fra sensorveiledningene. Grovt tredelt: **(A–D) forskningsdesign/drøfting**, **(E–G) deskriptiv/bivariat statistikk**, **(H–N) regresjon**.

### A. Hypotesens anatomi: populasjon, enheter, variabler
- **Krav:** Identifiser **populasjon** (f.eks. «alle kommuner i Norge», «alle verdens land», «den norske befolkningen»), **analyseenhet** (kommune, land, individ), og **avhengig vs. uavhengig variabel** i en gitt hypotese. Fast åpningsoppgave (ofte 3–4 p).
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Hypotese: venstrestyrte kommuner krever inn mer eiendomsskatt per innbygger enn høyrestyrte. Hva er populasjonen, enhetene og variablene?»

### B. Utvalg og sannsynlighetsutvelging
- **Krav:** Velg og begrunn en **utvalgsteknikk**. Alle former for *sannsynlighetsutvelging* godkjennes, men begrunnelsen må inn: man må kjenne hver enhets sannsynlighet for å bli trukket for å kunne beregne feilmarginer / generalisere. Kjenn skillet enkel tilfeldig / systematisk (fast avstand fra tilfeldig startpunkt) / stratifisert (proporsjonalt vs. disproporsjonalt, stratifiseringsvariabel) / klynge. Kjenn **universliste**. Lav svarprosent → drøft skjevhet/frafall og trussel mot generalisering (ytre validitet).
- **Frekvens:** 15/16.
- **Omskrevet eksempel:** «Du skal teste hypotesen på et utvalg. Hvilken utvalgsteknikk bør du bruke, og hvorfor? En kollega vil heller undersøke hele populasjonen — hvilke utfordringer sikter hun til?»

### C. Operasjonalisering, validitet og reliabilitet
- **Krav:** Foreslå en **operasjonell definisjon** (hvordan begrepet konkret måles). Drøft **validitet** (måler vi det vi tror? — K&W: umiddelbar/face, innholds-, begrepsvaliditet; «definisjonsmessig validitet») og **reliabilitet** (samme verdi hver gang, uavhengig av måler). Typisk mønster: et formelt policy-mål har høy reliabilitet men svikter på validitet fordi det bare fanger én dimensjon. Skille **intern vs. ytre validitet** (intern = riktig estimert effekt i utvalget; ytre = generaliserbarhet).
- **Frekvens:** 12/16.
- **Omskrevet eksempel:** «Er ‘antall dager statlig betalt permisjon’ en god operasjonalisering av foreldrepermisjonsordninger? Foreslå et bedre mål og begrunn.»

### D. Kausalitet: modell, kriterier og observasjonsstudiens grense
- **Krav:** (i) **Tegn kausalmodell/stimodell** med korrekt rekkefølge og piler — bakenforliggende variabel (ligger forut, skaper spuriøsitet), mellomliggende variabel (formidler indirekte effekt), spuriøs sammenheng. Kjenn rekursiv vs. ikke-rekursiv, generell vs. spesifikk (fortegn/styrke angitt) modell. (ii) **Kellstedt & Whittens fire kriterier** for kausalitet: troverdig mekanisme; utelukke omvendt kausalitet; samvariasjon (X og Y henger sammen); utelukke bakenforliggende Z. (iii) Drøft hvorfor **observasjonsdata sjelden gir sikker kausalslutning** (kan aldri utelukke alle Z), og hvorfor **kontroll/multippel regresjon** trengs for å isolere direkte effekt.
- **Frekvens:** 14/16 (modell) + 10/16 (kriterier eksplisitt).
- **Omskrevet eksempel:** «En rapport konkluderer at små kommuner har mest fornøyde innbyggere, og en politiker leser dette som årsakssammenheng. Hvilke kriterier må være oppfylt før vi kan snakke om kausalitet?»

### E. Deskriptiv statistikk fra tabell/figur
- **Krav:** Regn **modus** (hyppigste verdi), **median** (midtverdi — krav om minst ordinalnivå), **gjennomsnitt** (krav om metrisk nivå), **variasjonsbredde** (maks − min), **kvartildifferanse**, **modalprosent**. Gjør absolutt frekvensfordeling om til relativ (prosent), evt. med/uten «vet ikke». Regn vektet/samlet gjennomsnitt av to grupper. Vurder når median er å foretrekke framfor gjennomsnitt (skjev fordeling). Forklar hva standardavvik ville fortelle uten å regne det.
- **Frekvens:** 13/16 (dominerer 2012–17).
- **Omskrevet eksempel:** «Frekvenstabellen viser prøveskår 0–15 for 399 elever. Finn variasjonsbredden, medianen og gjennomsnittlig skår blant elevene med skår ≥ 10.»

### F. Krysstabell og bivariate tabellmål (gammelt regime)
- **Krav:** Regn **odds** og **odds ratio** fra en 2×k-tabell (odds = enig/uenig; OR = odds_gruppe1 / odds_gruppe2; OR = 1 betyr ingen sammenheng). Regn **gamma** (basert på samstemte P og motstridende Q par: γ = (P−Q)/(P+Q)) og **rho** (Spearmans rangkorrelasjon, ρ = 1 − 6Σd²/(N³−N)). Gjennomfør **kjikvadrat-test** med formelark og kjikvadrat-tabell, tolk mot kritisk verdi. Kjenn **normerte mål** (varierer i fast intervall, f.eks. [−1,1] eller [0,1]) vs. ikke-normerte (kjikvadrat).
- **Frekvens:** 6/16 — konsentrert i 2012–14, men **valg av korrelasjonsmål** (uten håndregning) lever videre.
- **Omskrevet eksempel:** «Beregn gamma for sammenhengen mellom levekår og lykkenivå i nifeltstabellen, og kommenter resultatet.»

### G. Valg av korrelasjonsmål etter målenivå
- **Krav:** Koble målenivå til riktig mål: to metriske/kontinuerlige → **Pearsons r** (måler lineær sammenheng); to ordinale → **gamma / tau / rho** (monoton sammenheng); to nominale/kategoriske → **kjikvadrat / Fi / Cramers V**; kategorisk X + kontinuerlig Y → **sammenligne gjennomsnitt + t-test** (eller bivariat regresjon). Begrunnelsen (målenivået til begge variabler) er poenget.
- **Frekvens:** 11/16.
- **Omskrevet eksempel:** «Hvilket korrelasjonsmål passer for sammenhengen mellom prøveskår (forholdstall) og mors utdanning (ordinal, tre kategorier)? Begrunn.»

### H. Skrive regresjonsligningen (generell og estimert form)
- **Krav:** Skriv modellen på **generell form**: Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + eᵢ (residual/feilledd må med for full uttelling; variabelnavn eller symboler godkjennes likt; parenteser og små i-er er ikke påkrevd). Skriv **estimert form** ved å sette inn tallene fra tabellen. For kategoriske variabler med >2 verdier: dummyer i ligningen (se J).
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Skriv opp regresjonsmodellen på generell form med BNP per capita, DEMOKRATI og FAGFORENINGSSTYRKE.»

### I. Tolke konstantledd, koeffisient, R² og prediksjon
- **Krav:** **Konstantledd** = forventet Y når *alle* uavhengige er 0 (tolk i kontekst; kommenter om det er substansielt meningsfullt — negativt/urealistisk konstantledd er ofte ikke-tolkbart). **Stigningskoeffisient** = forventet endring i Y per én enhets økning i X, *kontrollert for de andre* variablene. **R²** = andel av variasjonen i Y som modellen forklarer (0,19 → 19 %); tolk *endring* i R² mellom modeller. **Prediksjon**: sett inn X-verdier i estimert ligning og regn Ŷ (vis utregning; delvis uttelling for delvis riktig; trekk per feil verdi). **Restledd** for én enhet: e = Y_observert − Ŷ.
- **Frekvens:** 16/16 (tolkning) / 13/16 (prediksjon) / 15/16 (R²).
- **Omskrevet eksempel:** «Hva er forventet eiendomsskatt per innbygger i en liten, venstrestyrt kommune? Vis utregningen.» / «Cornelia (jente, mor med universitetsgrad) fikk skår 4. Hva er restleddet hennes?»

### J. Dummyvariabler for kategoriske variabler
- **Krav:** En kategorisk variabel med *k* kategorier kodes som **k−1 dummyer** (én kategori blir **referansekategori**, utelatt av modellen). Hver enhet får 1 på sin dummy og 0 på de andre. Ordinal variabel som skal inn i regresjon: samme prosedyre (kan ikke brukes direkte med mindre man antar lik avstand). Etter dummy-koding endres tolkningen av konstantleddet (= gjennomsnitt for referansekategorien). **Kritisk poeng:** riktig antall dummyer (k−1). Med k kategorier og k dummyer får man perfekt multikolinearitet.
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Regionsvariabelen har fem kategorier (Europa, Afrika, Sør-Amerika, Nord-Amerika, Asia). Forklar hvordan du inkluderer den, og hva det gjør med tolkningen av konstantleddet.»

### K. Signifikanstest av regresjonskoeffisient (t-test)
- **Krav:** Fast firetrinns t-test: (1) frihetsgrader **df = N − k − 1**; (2) slå opp **kritisk t** i t-tabellen (df + signifikansnivå); (3) observert t = **b/SE(b)** (eller gitt i tabell); (4) sammenlign |t_obs| mot t_kritisk og **konkluder i kontekst** (signifikant / ikke signifikant). Alternativt: bruk **p-verdien** direkte — signifikant hvis p < valgt signifikansnivå. Tommelregel: |t| > ca. 2 ≈ signifikant på 5 %. Regn **SE = b/t** når t og b er oppgitt.
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Gjennomfør en t-test av koeffisienten til KOMMUNESTØRRELSE (b = 1703, t = 1,548) på 1 %-nivå med N = 33 og 2 uavhengige variabler.»

### L. p-verdi og signifikansnivå — forståelse
- **Krav:** Tolk **p-verdien** som sannsynligheten for å få et minst like sterkt estimat *dersom det ikke finnes noen sammenheng* (H₀ sann) — altså sannsynligheten for funnet «ved ren tilfeldighet». **Signifikansnivå (α)** = maksimal risiko forskeren aksepterer for å forkaste en *sann* H₀ (= P(type I-feil)). Beslutt på flere nivåer (p = 0,073 → signifikant på 10 %, ikke på 5 %). Kjenn **type I-feil** (forkaste sann H₀) vs. **type II-feil** (beholde falsk H₀).
- **Frekvens:** 4/16 som eget spørsmål, men innbakt i alle t-test-oppgaver.
- **Omskrevet eksempel:** «En p-verdi på 0,943 — hva betyr den substansielt for hypotesen din?»

### M. Samspill / interaksjon
- **Krav:** Legg til et **produktledd** X₁·X₂ i modellen for å teste om effekten av X₁ på Y *avhenger av verdien på X₂*. Tolk samspillskoeffisienten (endring i den ene variabelens effekt per enhets økning i den andre). Regn ut **betinget/direkte effekt** for en gruppe: f.eks. effekten av POLITISK STYRE for små kommuner = hovedkoeffisient + samspillskoeffisient. Vanlig felle: kandidaten svarer «kontroller for kjønn» der oppgaven krever *interaksjon* med kjønn.
- **Frekvens:** 9/16.
- **Omskrevet eksempel:** «Sammenhengen mellom barn og deltakelse er trolig ulik for kvinner og menn. Hvordan tester du dette, og hvordan endrer det tolkningen av barn-koeffisienten?»

### N. OLS-forutsetninger og residualdiagnostikk
- **Krav:** Kjenn **OLS-forutsetningene** (K&W grupperer ni: feilleddet er normalfordelt, har forventning 0, konstant varians / homoskedastisitet, ingen autokorrelasjon, X målt uten feil; modellen er riktig spesifisert og lineær; flere observasjoner enn variabler; variasjon i X). **Les et residualhistogram**: skjevfordelte restledd → forutsetningen om normalitet brutt → standardfeilene kan bli feilestimert → signifikanstestene kan ikke stoles på (spesielt ved lite N). **Heteroskedastisitet** = restleddenes varians varierer systematisk med X (residual-mot-X-plott med trakt/vifteform) → gale standardfeil. **Autokorrelasjon** = restledd korrelert med hverandre (f.eks. paneldata, klynger som skoler/regioner) → gale standardfeil. **Utelatt variabelskjevhet** = relevant bakenforliggende variabel mangler → skjeve estimater; effekten havner i restleddet.
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Residualhistogrammet er tydelig skjevfordelt og N = 28. Kan du stole på signifikanstestene? Begrunn.»

### O. Case-studie- og forskningsdesign (drøfting)
- **Krav:** Skille **teoritestende** vs. **teoriutviklende** casestudie. Drøfte **utvalg av case** (ikke velge på avhengig variabel — Geddes; velge på uavhengig variabel; *most similar / most different systems design*). Sammenligne over tid vs. tverrsnitt; **paneldesign** (samme enheter over tid) vs. gjentatte tverrsnitt. **Diakrone vs. synkrone data**. Kombinere kvantitativ analyse med kvalitativ dybdestudie for å avdekke mekanismen. Skille formelt/strukturert vs. semistrukturert/uformelt intervju, deltakende observasjon, enquête.
- **Frekvens:** 9/16 (case) + spredt i flervalgsdelen.
- **Omskrevet eksempel:** «Skisser et prøveopplegg (design) for å måle effekten av en ny undervisningsmetode, med metodiske begrunnelser. Trekk på ulike pensumbidrag.»

---

## 4. Sensorens krav

### Faste metaregler på tvers av veiledningene

1. **Substansiell tolkning i kontekst er selve poenget.** Nesten hver koeffisient-oppgave gir separate poeng for (a) teknisk tolkning («b = −2,5 betyr Y synker 2,5 per enhet X») og (b) *substansiell* tolkning («for hvert ekstra barn synker politisk deltakelse med 2,5 poeng»). Et svar uten kontekst-konklusjon får aldri full uttelling. Sensor er «raus» med ordlyd så lenge forståelsen vises.
2. **Følgefeil straffes minimalt.** Feil mellomsvar skal ikke trekke videre nedover; hvert trinn poengsettes for seg. Delvis riktig utregning gir delvis uttelling — «gi poeng for alle deler av utregningen, ikke bare riktig svar».
3. **Metodefrihet med begrunnelsesplikt.** Alternativ notasjon, variabelnavn eller symbolbruk godkjennes likt. Men *valget* må begrunnes: hvilket målenivå, hvilket korrelasjonsmål, hvorfor akkurat den utvalgsteknikken.
4. **Riktig antall dummyer er hardt krav.** Er det ikke nøyaktig k−1 dummyer (f.eks. 2 for en trekategorivariabel), gis det ikke uttelling for den delen — dette er eksplisitt i flere veiledninger.
5. **Alle tre/fire elementene må nevnes.** Kausalitetskriteriene (4 stk), OLS-forutsetningene (K&W ni, gruppert i tre), validitetstypene (3 stk) poengsettes punkt for punkt — 1–2 p per punkt, ofte bonus for å dekke bredden.
6. **Feil i eksamensteksten tilgis kandidaten.** Der oppgaven selv inneholder en feil (fasit ved en tabell, forvirrende variabelnavn), instruerer veiledningen sensor om å gi full pott / godta begge tolkninger. Boken kan trygt lære «robust» tolkning.
7. **Substansiell vs. statistisk signifikans belønnes.** De beste svarene kommenterer *begge*: en effekt kan være statistisk signifikant men substansielt liten (0,06 på en 1–7-skala), eller motsatt. Å reflektere over dette gir «et pluss».

### Hva som skiller toppkandidatene

- Kommenterer **om konstantleddet er substansielt meningsfullt** (negativt/utenfor dataområdet → ikke tolkbart), ikke bare hva det teknisk er.
- Ser at **endring i en koeffisient når man legger til en kontrollvariabel** avslører spuriøsitet eller mediering (kjønn-effekten forsvinner når mediesyn legges til → mediesyn er mekanismen).
- Kobler **residualdiagnostikk til konkret konsekvens** («skjeve restledd → upålitelige standardfeil → kan ikke stole på t-testen»), ikke bare «ser ikke normalfordelt ut».
- Drøfter **intern vs. ytre validitet** presist og ser at intern validitet er en forutsetning for ytre.
- Skiller **kontroll** (multippel regresjon, fjerner spuriøsitet) fra **interaksjon** (samspill, betinget effekt) — en klassisk forvekslingsfelle.

---

## 5. Typiske feil (nevnt i eller innbakt i veiledningene)

1. **Feil målenivå** — kalle en forholdstallsvariabel «intervall» (mangler naturlig nullpunkt-poenget), eller behandle en ordinal variabel som metrisk og regne gjennomsnitt på den. Målenivå styrer alt nedstrøms.
2. **Regne gjennomsnitt/standardavvik på nominale eller ordinale data** (f.eks. partipreferanse) — bare modus (og median for ordinal) er meningsfullt.
3. **Feil antall dummyer** — k dummyer for k kategorier i stedet for k−1 (perfekt multikolinearitet), eller å glemme referansekategorien.
4. **Forveksle kontroll og interaksjon** — svare «kontroller for kjønn» når hypotesen sier at effekten er *ulik* for kjønn (krever samspillsledd).
5. **Tolke konstantledd/koeffisient uten kontekst** — «konstanten er 3199» uten å si at det er forventet Y for referansekategorien når alle X = 0.
6. **Tolke et urealistisk konstantledd som substansielt** — negativt konstantledd på en prosentskala, eller Y når X = 0 utenfor dataområdet, er ofte ikke meningsfullt og skal flagges.
7. **Kausal tolkning av observasjonsdata / korrelasjon** — trekke politikk-konklusjon («demokrati skaper vekst») fra en regresjon på tverrsnittsdata uten å drøfte omvendt kausalitet, bakenforliggende Z eller manglende mekanisme.
8. **Behandle et selektert/skjevt utvalg som representativt** — regne videre på svarene fra en survey med 27 % svarprosent, eller frivillige deltakere, uten å problematisere frafall/seleksjon og trussel mot ytre validitet.
9. **Glemme residualleddet** i regresjonsligningen på generell form (koster poeng).
10. **z/t- og signifikansfeil** — bruke feil frihetsgrader (df = N − k − 1), lese feil kolonne i t-tabellen, eller konkludere «signifikant» uten å sammenligne mot kritisk verdi/α.
11. **Blande intern og ytre validitet** — kalle et generaliseringsproblem (utvalg → populasjon) for intern validitet, eller motsatt.
12. **Beskrive residualdiagnostikk uten konsekvens** — si at restleddene er skjeve/heteroskedastiske uten å si hva det gjør med standardfeilene og dermed hypotesetestene.
13. **Ufullstendige lister** — nevne to av fire kausalitetskriterier eller én validitetstype og stoppe; veiledningene poengsetter hvert punkt.

---

## 6. Formel- og notasjonsapparat

Notasjonen er stabil. Boken bør bruke nøyaktig denne.

### Notasjonsvalg
- **Regresjon:** Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + eᵢ. Konstantledd b₀ (også kalt α eller «konstant»/«konstantledd»); stigningskoeffisienter b₁, b₂ (også β med indeks); residual/feilledd eᵢ (også εᵢ, μᵢ, «restledd»). Predikert verdi Ŷ. Standardiserte koeffisienter: β (uten enhet, sammenlignbar styrke). Samspillsledd: b₃(X₁·X₂).
- **Norske fagtermer** brukes konsekvent: avhengig/uavhengig variabel, bakenforliggende/mellomliggende variabel, spuriøs sammenheng, dekomponering/stianalyse, direkte/indirekte effekt, dummyvariabel, referansekategori, samspill/interaksjon, forklart varians, restledd, uteligger, innflytelsesrik observasjon.
- **Målenivå:** nominal-/**kategorisk** nivå, **ordinal**, **intervall**, **forholdstall/metrisk** (metrisk = intervall + forholdstall slått sammen; noen sett bruker «metrisk», andre skiller). Dikotom/binær variabel = to verdier.
- **Signifikans:** H₀/H₁ (nullhypotese/alternativhypotese), signifikansnivå α, t-verdi/testobservator, kritisk verdi, frihetsgrader df, p-verdi (signifikanssannsynlighet), type I-/type II-feil. Signifikansstjerner i R-tabeller: `*` = 0,05, `**` = 0,01, `***` = 0,001.

### Må beherskes aktivt (regnes med på nesten hvert sett)

**1. Deskriptive mål (fra frekvenstabell):**
- Modus (hyppigste verdi); median (midtverdi, ≥ ordinal); gjennomsnitt X̄ = Σx/N (metrisk); variasjonsbredde = maks − min; modalprosent = 100·(største andel); relativ frekvens (prosentuering, med/uten «vet ikke»); vektet gjennomsnitt av grupper.

**2. Bivariate tabellmål (gammelt regime, formelark vedlagt):**
- Odds = P(hendelse)/P(ikke-hendelse); odds ratio = odds₁/odds₂ (OR = 1 → ingen sammenheng).
- Gamma γ = (P − Q)/(P + Q), der P = samstemte og Q = motstridende par.
- Rho (Spearman) ρ = 1 − 6Σd²/(N³ − N).
- Kjikvadrat = Σ(f − fₑ)²/fₑ; Fi = √(kjikvadrat/N); tolkes mot kjikvadrat-tabell med df.

**3. Regresjon:**
- Tolkning: b₀ = E(Y | alle X = 0); bⱼ = ∂E(Y)/∂Xⱼ (kontrollert for øvrige); Ŷ = b₀ + Σbⱼxⱼ; e = Y − Ŷ.
- R² ∈ [0,1] = forklart andel av variasjonen i Y; 1 − R² = uforklart andel.
- Dummy: k kategorier → k−1 dummyer + referansekategori.
- Samspill: effekt av X₁ gitt X₂ = b₁ + b₃·X₂.

**4. Inferens:**
- t = b/SE(b); df = N − k − 1 (k = antall uavhengige variabler); sammenlign |t| mot kritisk t fra tabellen ved gitt α og df.
- SE(b) = b/t (når b og t er oppgitt); SE(p̂) = √[p̂(1 − p̂)/n] for en andel.
- p < α → forkast H₀ (statistisk signifikant). |t| > ≈2 ≈ signifikant på 5 %.

### Må forstås kvalitativt
- Målenivåenes egenskaper og hvilke operasjoner de tillater (rangering, avstand, naturlig nullpunkt).
- Kausalitet: Kellstedt & Whittens fire kriterier; mekanisme, omvendt kausalitet, spuriøsitet, bakenforliggende variabel; hvorfor observasjonsstudier ikke gir sikker kausalslutning; randomisert eksperiment som gullstandard.
- Validitet (umiddelbar/innholds-/begreps-; intern vs. ytre) og reliabilitet.
- Utvalgslogikk: sannsynlighetsutvelging, representativitet, generalisering, frafall/seleksjonsskjevhet, stratifisering, klynge.
- OLS-forutsetningene og konsekvensene av brudd (normalitet, homoskedastisitet, autokorrelasjon, utelatt variabelskjevhet, uteliggere/Cook's D, multikolinearitet).
- Substansiell vs. statistisk signifikans; forklart varians (R²).
- Casedesign, paneldata, diakron/synkron, teoritestende/teoriutviklende, most similar/different.
- Feilslutninger: økologisk (aggregat → individ) og atomistisk (individ → aggregat).

### Skal IKKE bygges tungt på
- **Sannsynlighetsteori, fordelinger, kombinatorikk, simulering, bevis:** forekommer ikke. Dette er ikke ECON2130.
- **Egen R-koding:** kandidaten *leser* R-utskrift (2021→), men skriver ikke kode på eksamen.
- **Tunge håndutregninger av gamma/rho/kjikvadrat** er i praksis faset ut etter 2014, men korrelasjonsmål-*valg* og enkle odds/prosent-utregninger lever videre.
- **Kovarians-/matriseregning, maximum likelihood, logistisk regresjon:** ikke pensum på dette nivået (OLS er gjennomgående, selv når Y er en 0/1- eller prosentvariabel).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Målenivå bestemme og begrunne** (16/16): kategorisk/ordinal/intervall/forholdstall, hvilke operasjoner hvert tillater, konsekvens for valg av mål og metode.
2. **Regresjonstolkning i kontekst** (16/16): konstantledd, stigningskoeffisient (kontrollert), R², prediksjon (Ŷ), restledd (e = Y − Ŷ). Både teknisk og substansiell tolkning, alltid.
3. **Hele forskningsprosess-løypa** som Del 2 følger: populasjon/enheter/variabler → utvalgsteknikk med begrunnelse → operasjonalisering/validitet → kausalmodell → regresjonsligning (med residual) → tolke tabell → t-test/signifikans → dummy → samspill → residualdiagnostikk.
4. **t-test og signifikans** (13/16): df = N − k − 1, kritisk verdi fra t-tabell, t = b/SE, p-verdi mot α, konklusjon i kontekst; regne SE = b/t.
5. **Dummyvariabler** (13/16): k−1 dummyer, referansekategori, hva det gjør med konstantleddets tolkning.

### Nivå 2 — må kunne (gir de fleste resterende poengene)
6. **Kausalmodeller + Kellstedt & Whittens fire kriterier** (14/16 + 10/16): tegne stimodell med riktige piler; drøfte om en sammenheng er kausal; korrelasjon ≠ kausalitet.
7. **OLS-forutsetninger og residualdiagnostikk** (13/16): normalfordelte restledd, heteroskedastisitet, autokorrelasjon, utelatt variabelskjevhet — koble figur til forutsetning *og* konsekvens for standardfeil/tester.
8. **Utvalg og validitet** (15/16 + 12/16): sannsynlighetsutvelging (enkel/systematisk/stratifisert/klynge), frafall/seleksjon, intern vs. ytre validitet, reliabilitet.
9. **Deskriptiv statistikk fra tabell/figur** (13/16): modus, median, gjennomsnitt, variasjonsbredde, prosentuering, vektet snitt.
10. **Valg av korrelasjonsmål etter målenivå** (11/16): Pearson r / gamma-tau-rho / kjikvadrat-Fi / gjennomsnittssammenligning.
11. **Samspill/interaksjon** (9/16): produktledd, betinget effekt, ikke forveksle med kontroll.

### Nivå 3 — bør kjenne til (differensierer mot A)
12. **Krysstabellmål regnet for hånd** (gamma, rho, odds ratio, kjikvadrat) — historisk viktig, nå sjeldnere, men billig når det kommer.
13. **Dekomponering/stianalyse** — skille direkte, indirekte og spuriøs effektkomponent (multippel regresjon gir bare direkte effekt; stianalyse gir størrelsen på alle tre).
14. **Case-studie- og kvalitativt design** (teoritestende/teoriutviklende, most similar/different, intervjutyper, paneldata).
15. **p-verdi- og signifikansteori** (type I/II, substansiell vs. statistisk signifikans) — vokser i R-regimet.
16. **Standardiserte koeffisienter (beta)**, uteliggere/Cook's D, multikolinearitet, feilslutninger — flervalgsstoff og A-differensiering.
17. **Lese R-utskrift** — regresjonstabell fra R med stjerner og SE i parentes (nåtidsregimet fra 2021).

### Prognose for neste eksamen
Forvent Del 1 (30 flervalgsspørsmål over hele pensumbredden: målenivå, korrelasjonsmål, OLS-diagnostikk-begreper, casedesign, feilslutninger, definisjoner) + Del 2 som **én sammenhengende, artikkel-/policy-forankret case** som følger forskningsprosessen fra hypotese til residualdiagnostikk, med en R-regresjonstabell i midten. De sikreste enkeltoppgavene: **bestem og begrunn målenivå**; **tolk konstantledd + koeffisient + R²**; **regn en prediksjon**; **skriv regresjonsligningen**; **gjennomfør en t-test**; **lag dummyer for en kategorivariabel**; **tegn en kausalmodell / ramse opp K&W-kriteriene**; **vurder et residualplott mot en OLS-forutsetning**. Sannsynlige tilleggsspørsmål: samspill (kontroll vs. interaksjon), intern vs. ytre validitet, seleksjon/frafall, korrelasjon ≠ kausalitet. Boken bør trene begge halvdeler — **metodedrøfting** og **regresjonsregning/-tolkning** — og bruke gjennomgående statsvitenskapelige caser (kommuner, land, velgere).

### Anbefalt arketype
**Hybrid drøfting/regnefag** — på linje med psy1010, ikke ECON2130. Omtrent 50/50 mellom (a) kvalitativ metodedrøfting (forskningsdesign, kausalitet, validitet, utvalg, casestudier) og (b) anvendt regresjonsstatistikk (tolke tabeller, regne prediksjoner/SE/t, målenivå, dummyer). Statistikkdelen er **lavterskel og tolkningsdrevet** (ingen sannsynlighetsteori eller bevis), men mekanisk presisjon (df, k−1 dummyer, utregninger vist trinn for trinn) må sitte. Læreboken bør organiseres etter forskningsprosessen slik Del 2-casene er, med rikelig med tolknings- og tegneøvelser og et eget kapittel om OLS-forutsetninger/diagnostikk.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/STV1020/`. Arkivet inneholder dubletter (samme sett i rotmappen og i undermappene `eksamen/` og `sensorveiledning/`); listen under er deduplisert.

**Komplette eksamenssett uten fasit, lest (11):**
`eksamen/STV1020-V2012.pdf`, `STV1020-H2012.pdf`, `STV1020-V2013.pdf`, `STV1020-H2013.pdf`, `STV1020-V2014.pdf`, `STV1020-V2015.pdf`, `STV1020-H2015.pdf`, `STV1020-V2016.pdf`, `STV1020-H2016.pdf`, `STV1020-V2017.pdf`, `STV1020-V2018.pdf`. (2015–2017 grundig; 2012–2014 lest for temadekning; V2018 grundig.)

**Sett med fullstendig sensorveiledning, lest grundig (5):**
`sensorveiledning/STV1020-V2019.pdf` (= `eksamen_stv1020_v19_sensor_final..pdf`), `STV1020-V2020.pdf` (= `stv1020-opppg-med-sensorveiledning-(002).pdf`), `STV1020-V2021.pdf` (= `eksamenstv1020_v21_sensorveiledning.pdf`), `STV1020-V2022.pdf` og `STV1020-unknown.pdf` (= `sensorveiledning-stv1020*.pdf`).

**Merknad om filnavn/dublering:** Filene i `sensorveiledning/` er delvis feilmerket. `STV1020-V2022.pdf` inneholder faktisk **våren 2023**-settet (artikkelbasert, Kolltveit m.fl., med terskelverdier A=85…), og `STV1020-unknown.pdf` inneholder **våren 2022**-settet (barn og politisk deltakelse). Analysen bruker de korrekte årstallene V2019–V2023.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside (scratchpad `fagbeskrivelse-stv1020.md`; verifisert aktivt emne, undervises hver vår t.o.m. 2026).

**Forbilder for struktur:** `docs/hoyskole-boker/econ2130/EKSAMENSANALYSE.md` (8-delers mal) og psy1010-analysen (hybrid drøfting/statistikk).

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Formler og standard statistisk notasjon er faglig allmenneie. Kellstedt & Whitten er referert som pensumkilde, ikke sitert.
