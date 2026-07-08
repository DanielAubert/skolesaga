# Eksamensanalyse: MA1103 Flerdimensjonal analyse (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på **18 selvstendige slutteksamenssett** fra MA1103 (2004–2014), i alt 33 PDF-er i arkivet inkludert **14 løsningsforslag/fasiter** (av varierende kvalitet: 6 er maskinlesbar tekst, resten skannede/håndskrevne som er OCR-lest). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Analysen er kvantitativ der arkivet tillater det, men **arkivet er lite og stopper i 2014**; forventningene er kalibrert deretter, og usikre punkter er merket «(verifiser)».
>
> **Om overlappen med andre analyser i dette prosjektet:** MA1103 er NTNUs kurs i flervariabel- og vektoranalyse. Det overlapper *tematisk* med flervariabel-delen av UiO MAT1110 og med TMA4105-tradisjonen ved NTNU, men er et **selvstendig emne** med egen tyngde på klassisk vektoranalyse (Green, Stokes, divergensteoremet) og et eget, distinkt NTNU-arkiv. Denne analysen står på egne ben; overlappen er kun nevnt her, ikke lagt til grunn for prioriteringene.

---

## Kildeblokk

**Emneidentitet (verifisert mot NTNUs emneside 2025):**
- **MA1103 Flerdimensjonal analyse** (engelsk: *Multivariable Analysis*), 7,5 studiepoeng, **aktivt** emne (undervises vår).
- **Forkunnskaper:** Grunnkurs i analyse 1 + Lineær algebra og geometri.
- **Vurdering i dag:** todelt — **skriftlig eksamen (70 %) + prosjekt (30 %)**. Se del 1 for utvikling.
- **Pensum (dagens emnebeskrivelse):** funksjoner av flere reelle variable og klassisk vektoranalyse — partiellderiverte og retningsderiverte, gradient og optimering, Lagranges multiplikatormetode, multiple integraler (dobbelt-/trippelintegral), linje- og flateintegraler, vektorfelt (divergens, curl/virvling, fluks), Greens teorem, Stokes' teorem og divergensteoremet, med anvendelser.

**Arkivet (33 PDF-er, `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1103/`):** dekker vår- (og noen kontinuasjons-/august-) eksamener 2004–2014. Historisk er alle sett i arkivet **ren skriftlig eksamen på 4 timer** med enkel kalkulator + formelark; prosjektdelen (30 %) er en **nyere ordning som ikke er representert i arkivet**.

**Viktigste kildebegrensning:** Arkivet stopper i 2014. Alle sett 2015→ mangler, og hele prosjektdelen mangler. Frekvenstallene er derfor et bilde av 2004–2014-praksisen, ikke nødvendigvis dagens. Se del 8 for full fil-til-år-oversikt og kvalitetsmerknader.

---

## 1. Eksamensform og utvikling

### Dagens ordning (fra NTNUs emneside)
MA1103 vurderes i dag **todelt**: en **skriftlig slutteksamen som teller 70 %** og et **prosjekt som teller 30 %**. Prosjektdelen er en moderne tilføyelse; den er **ikke dokumentert i arkivet** (som stopper i 2014), og formatet, omfanget og temavalget for prosjektet må **verifiseres mot en fersk emnebeskrivelse/faglærer** før boken kalibreres mot den. En eksamensrettet bok bør likevel forberede prosjektarbeid ved å inkludere større, sammensatte anvendelsesoppgaver (modellering med vektorfelt, fluks/arbeid i en fysisk kontekst, optimering av en realistisk målfunksjon) — dette er sjangre som allerede finnes i arkivets tekstoppgaver (båt over havbunn 2004, varmluftballong 2005, postpakke-volum 2013).

### Den skriftlige eksamenens form (2004–2014, dokumentert)
| Trekk | Verdi |
|---|---|
| Varighet | **4 timer** (09.00–13.00; enkelte vår-sett 15.00–19.00, f.eks. 2011) |
| Hjelpemidler | **Bestemt, enkel kalkulator** (HP30S eller Citizen SR-270X) + **vedlagt formelark/formelliste**. Ingen andre hjelpemidler (kode D fra ca. 2011). Eldre sett tillot i tillegg Rottmanns formelsamling (kode C, f.eks. kont. aug. 2012). |
| Antall oppgaver | **5–10 hovedoppgaver**, uten flervalg. Eldre sett (2004–2006) hadde typisk **5 store oppgaver**; nyere sett (2008, 2012, 2013, 2014) hadde **7–10 kortere oppgaver**. |
| Instruks | «Alle svar skal begrunnes» — fra ca. 2012 skjerpet til: «det skal være med **så mye mellomregning at fremgangsmåten fremgår tydelig** av besvarelsen». |
| Poeng | Poeng er som regel ikke trykt på oppgavesettet; oppgavene teller i praksis omtrent likt. Tidsbudsjett ~24–48 min per hovedoppgave avhengig av antall. |

### Formatutvikling innen arkivperioden
- **2004–2006:** Færre, større oppgaver (5 stk). Hver oppgave er ofte flerdelt (a/b/c/d) og bygger en hel case: én funksjon drøftes fullt ut, ett romområde beregnes både med volum, fluks og divergensteorem. Tydelig «kjedet» design.
- **2007–2008:** Overgang mot flere, mer selvstendige oppgaver (7–9 stk), hver med ett klart tema. Mer «bredde» enn «dybde per oppgave».
- **2009–2011:** Stabil mal med ~6 oppgaver, sterk vekt på anvendte kontekster (maur som kryper langs kurve og opplever temperaturendring, flue langs skjæringskurve). Retningsderivert-med-fart-langs-kurve er signatur i denne perioden.
- **2012–2014:** Flest oppgaver (8–10), korte og «poengeffektive». Innslag av rene teori-/verifikasjonsoppgaver («vis at curl ∇f = 0 for en C²-funksjon», «vis at en Hölder-/Lipschitz-betingelse gir kontinuitet»). Kontinuasjonseksamener (august) følger samme mal som våreksamenene.

**Konstanter på tvers av hele arkivet:**
1. **Vektoranalyse er ryggraden.** Nesten hvert eneste sett har minst én fluks-/flateintegraloppgave (14/18) og minst én oppgave om konservative felt / potensial (10/18). De tre store integralsatsene (Green, Stokes, divergens) roterer: minst én av dem er nesten alltid med.
2. **Todelt oppgavestruktur i vektoranalysen:** oppgaven ber først om et *direkte* oppsett (regn fluksen direkte som flateintegral), og deretter om å *kontrollere* svaret med et teorem (divergensteoremet / Stokes). Å beherske begge veier — og se at de gir samme svar — er selve poenget.
3. **Optimering opptrer i to former i nesten hvert sett:** (i) fri optimering via kritiske punkt + Hessian/annenderiverttest (13/18), og (ii) betinget optimering (Lagrange eller substitusjon av bibetingelse) på en kurve/flate (12/18).
4. Det er **ingen midtveiseksamen** i arkivet (i motsetning til f.eks. MAT1100). Historisk var det én skriftlig sluttprøve; prosjektdelen er den nye «andre komponenten».

---

## 2. Temafrekvens-tabell (kvantitativ)

Celleverdi = **antall av de 18 distinkte oppgavesettene der temaet forekommer som (del)oppgave**. Tellingen er gjort maskinelt på tekst-/OCR-utdrag og deretter kontrollert manuelt; OCR-støy gjør enkelte tall til **nedre grenser** (markert «≥»). Med kun 18 sett er én enhet ≈ 5–6 prosentpoeng — behandle prosentene som grove.

| Tema | Sett med forekomst | Andel | Merknad |
|---|---|---|---|
| **Fluks / flateintegral** (direkte og/eller via teorem) | 14/18 | **~78 %** | Kjernesjangeren; nesten alltid koblet til et av teoremene under. |
| **Kritiske punkt + klassifisering (Hessian/annenderiverttest)** | 13/18 | **~72 %** | Fri optimering i to variable; ofte etterfulgt av global drøfting. |
| **Kontinuitet / partiellderiverte / deriverbarhet i ett punkt** | 13/18 | **~72 %** | Signaturteorioppgaven (stykkevis definert funksjon i origo). |
| **Volum av romområde (trippelintegral)** | 12/18 | **~67 %** | Nesten alltid i sylinder- eller kulekoordinater. |
| **Betinget optimering** (Lagrange / substitusjon på kurve/flate) | 12/18 | **~67 %** | Lagrange nevnes eksplisitt sjelden (≥1), men metoden kreves ofte. |
| **Konservativt felt / potensialfunksjon** | 10/18 | **~56 %** | «Vis at F er konservativt og finn φ» / «regn arbeidet». |
| **Gradient / retningsderivert** | ≥10/18 | **~56 %+** | OCR undertelling sannsynlig; reelt trolig høyere. |
| **Linje-/kurveintegral / arbeid** | 8/18 | **~44 %** | Ofte løst via konservativt felt eller Green. |
| **Divergensteorem (Gauss)** | 7/18 | **~39 %** | 2004, 2006, V2007, H2007, aug.2012, V2014, aug.2014. |
| **Curl-beregning (og curl-egenskaper)** | 7/18 | **~39 %** | Inkl. «vis curl ∇f = 0», «finn vektorpotensial». |
| **Dobbeltintegral / variabelskifte (Jacobi, byttet rekkefølge)** | 7/18 | **~39 %** | Bytt integrasjonsrekkefølge; ikke-triviell Jacobi. |
| **Green(s teorem)** | 6/18 | **~33 %** | H2005, V2006, H2007, aug.2012, V2014, aug.2014. |
| **Parametrisering av kurve** (tangentvektor, fart, buelengde) | 6/18 | **~33 %** | Ofte skjæringskurve mellom to flater. |
| **Grenseverdi for funksjon av flere variable** | 5/18 | **~28 %** | «Avgjør om lim eksisterer» — polar vs. veier inn mot origo. |
| **Tangentplan / tangentvektor** | 5/18 | **~28 %** | Til graf eller til nivåflate. |
| **Stokes' teorem** | 4/18 | **~22 %** | H2006, aug.2012, V2014, aug.2014 (+ implisitt i flere). |
| **Harmonisk funksjon / verifisering av PDE (kjerneregel)** | 4/18 | **~22 %** | V2007, V2012, V2013, aug.2013 — voksende mot slutten av arkivet. |
| **Buelengde av romkurve** | 2/18 | **~11 %** | V2007, H2007 (fallende; sjelden i nyere sett). |
| **Nivåkurver / nivåflater** (skisse + normal) | 2/18 | **~11 %** | H2007, V2011. |

### Viktigste funn
1. **Vektoranalysen dominerer helt.** Slår vi sammen fluks, konservative felt, curl/div, linjeintegral og de tre store teoremene, berører vektoranalyse **hvert eneste sett** i arkivet, ofte med 2–4 av settets oppgaver. Dette er emnets identitet og må få mest plass i boken. (Dette er den viktigste forskjellen fra en ren kalkulus-analyse à la MAT1100, der lineær algebra og komplekse tall bærer mye.)
2. **De tre integralsatsene roterer, men minst én er alltid med.** Divergensteorem (7), Green (6) og Stokes (4) opptrer sjelden alle tre i samme sett, men det er nesten utenkelig med et sett uten minst én av dem. Boken må trene alle tre *og* trene valget mellom dem.
3. **Optimering er andre bærebjelke:** fri (kritiske punkt + Hessian, 13/18) *og* betinget (Lagrange/substitusjon, 12/18) er begge nesten allestedsnærværende. Merk at Lagrange sjelden *navngis* i oppgaveteksten — studenten må selv gjenkjenne at «største verdi på sirkelen/flaten» = betinget optimering.
4. **Teori-/verifikasjonsoppgaver vokser mot slutten av arkivet.** Fra ca. 2012 kommer flere oppgaver av typen «vis at …» (curl ∇f = 0, harmonisitet bevares under en substitusjon, Hölder-betingelse ⇒ kontinuitet). Dette er karakterskillende og bør trenes eksplisitt.
5. **Enkelte klassiske en-variabel-arvede sjangre er på vei ut:** buelengde (kun 2004-tallets sett) og rene nivåkurve-skisser er sjeldne i nyere sett. De bør dekkes, men prioriteres lavere.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav, frekvens og **ett omskrevet eksempel per sjanger** (egne ord, egne tall).

### A. Fluks / flateintegral — direkte og via teorem
- **Krav:** Del overflaten i naturlige biter (grafflate, kuleflate, plan). For hver bit: velg parametrisering og korrekt orientert normalvektor N̂, sett opp flateelementet dS (grafformel `dS = √(gₓ²+g_y²+1) dxdy`, eller kulekoordinat `dS = ρ² sin φ dθ dφ`), utfør prikkproduktet **før** koordinatbytte, og pass på at N̂ peker *ut av* området. Nesten alltid to delspørsmål: (i) regn fluksen **direkte**, (ii) **kontroller** med divergensteoremet (lukket flate) eller Stokes (curl F gjennom flate = randintegral).
- **Fallgruve som testes:** divergensteoremet er *ikke* gyldig når feltet ikke er definert i et indre punkt (f.eks. `1/(x²+y²+z²)`-ledd med singularitet i origo) — man kan likevel få rett svar «tilfeldigvis», men skal ikke bruke teoremet ukritisk (eksplisitt sensorpoeng, V2009).
- **Frekvens:** 14/18; oftest settets tyngste oppgave.
- **Omskrevet eksempel:** «La R være romområdet mellom paraboloiden z = x² + y² og planet z = 4, og la S være hele overflaten til R med utadrettet normal. Regn ut fluksen av F = (x, y, 2z) gjennom S både direkte og ved hjelp av divergensteoremet, og kontroller at svarene stemmer.»

### B. Kritiske punkt + klassifisering (fri optimering)
- **Krav:** Sett ∇f = 0, løs likningssystemet **fullstendig** (vis at ingen løsninger er oversett — sensor krever dette eksplisitt). Klassifiser med Hessianmatrisen / annenderiverttesten (diskriminant Δ = f_xx·f_yy − f_xy², fortegn på f_xx). **Når Δ = 0 gir testen ingen konklusjon** — da må punktet undersøkes langs utvalgte veier (sensorpoeng: det holder *ikke* å finne ett høyere og ett lavere punkt langt unna; man må vise oppførsel *vilkårlig nær* punktet). Ofte påbygg: har f globalt maks/min?
- **Frekvens:** 13/18.
- **Omskrevet eksempel:** «Finn og klassifiser alle kritiske punkt for f(x, y) = x⁴ + 3x²y − y³ som lokalt maksimum, lokalt minimum eller sadelpunkt, og avgjør om f har et globalt maksimum.»

### C. Betinget optimering (Lagrange / substitusjon)
- **Krav:** Optimer f under en bibetingelse g = konstant (på en sirkel, ellipse, kule eller skjæringskurve). To likeverdige veier, begge dokumentert i fasit: (i) **Lagrange**: løs ∇f = λ∇g sammen med g = c — og **kommenter alltid hva som skjer når en faktor du forkorter er null** (kritisk sensorpoeng, V2010: de fleste mistet punkter fordi de strøk x og y uten å sjekke nullpunktene, og satt igjen med to punkter med samme verdi — en varselklokke); (ii) **substitusjon/parametrisering** av bibetingelsen til én variabel — men da **må endepunktene sjekkes**. Ved lukket område (disk/kule): sammenlign indre kritiske punkt med randens ekstremalverdier.
- **Frekvens:** 12/18 (Lagrange eksplisitt navngitt kun ~1 gang, men metoden kreves gjennomgående).
- **Omskrevet eksempel:** «Bruk Lagranges multiplikatormetode til å finne største og minste verdi av f(x, y) = x² + xy + y² på enhetssirkelen x² + y² = 1, og angi deretter globalt maksimum og minimum av f på hele enhetsdisken.»

### D. Konservativt felt + potensial + arbeid
- **Krav:** Vis at F er konservativt ved å (a) sjekke curl F = 0 (nødvendig; og tilstrekkelig på enkelt sammenhengende område — nevn dette), og (b) **konstruere en potensialfunksjon φ** ved suksessiv integrasjon (integrer F₁ mhp. x, deriver mhp. y for å bestemme integrasjonskonstanten som funksjon av y osv.). Deretter er arbeidet langs en kurve = φ(sluttpunkt) − φ(startpunkt); langs lukket kurve = 0. Variant: bestem en ukjent funksjon h(x) i én komponent slik at feltet blir konservativt.
- **Frekvens:** 10/18.
- **Omskrevet eksempel:** «Vis at G(x, y, z) = (yeˣʸ + 2, xeˣʸ + z², 2yz + 1) er konservativt ved å finne en potensialfunksjon φ, og bestem arbeidet G utfører langs en vilkårlig glatt kurve fra origo til (0, 1, 2).»

### E. Gradient og retningsderivert (ofte med bevegelse langs kurve)
- **Krav:** ∇f komponentvis, evaluer i punktet. Retningen for raskest vekst er ∇f, med rate |∇f|. Retningsderivert i retning û: D_û f = ∇f · û der **û normaliseres**. Signatur i NTNU-arkivet: et objekt (maur, flue) beveger seg *langs en skjæringskurve mellom to flater* med gitt fart — finn tangentvektoren til kurven (parametriser, deriver, normaliser), ta prikkproduktet med ∇f (temperaturendring per lengdeenhet), og **gang med farten** for endring per tidsenhet. Vanlig sensorpoeng: man kan *ikke* bare se på eksponenten i en `e^{...}`-funksjon — det gir riktig *retning* men gale *størrelser* (V2010).
- **Frekvens:** ≥10/18.
- **Omskrevet eksempel:** «Temperaturen er T(x,y,z) = e^{−(x²+3y²+z²)}. En partikkel følger skjæringskurven mellom z = x² og x + y + z = 1 med fart 0,5 idet den passerer (1, −1, 1). Finn temperaturendringen partikkelen opplever per sekund i det øyeblikket.»

### F. Volum og masse i sylinder-/kulekoordinater
- **Krav:** Skisser romområdet, finn skjæringen mellom de avgrensende flatene (ofte oppgitt som «flatene skjærer hverandre i planet z = …»), velg sylinder- (`dV = r dz dr dθ`) eller kulekoordinater (`dV = ρ² sin φ dρ dθ dφ`), sett grensene og integrer. Masse-/tyngdepunktvariant: tetthet proporsjonal med kvadratet av avstanden til origo → `ρ²`-ledd i integranden. Trippelintegral-oppsett brukes også til å *utlede* kjente formler (f.eks. keglevolum V = ⅓Ah).
- **Frekvens:** 12/18.
- **Omskrevet eksempel:** «Finn massen til den øvre halvkulen med radius a når tettheten i et punkt er proporsjonal med kvadratet av avstanden til sentrum.»

### G. Green, Stokes, divergensteoremet — anvendelse og formulering
- **Krav:** (i) **Formuler teoremet korrekt** (dette spørres direkte: «Formuler Stokes' teorem», «Hva sier Greens teorem?») med alle forutsetninger (glatt vektorfelt, orientert rand/flate, regulært område). (ii) **Verifiser** teoremet ved å regne begge sider for et konkret felt og flate. (iii) **Anvend** til å forenkle: Green forvandler et vanskelig kurveintegral til et dobbeltintegral (curl-integrand); Stokes gjør ∮ langs rand om til fluks av curl (velg gjerne en enklere flate med samme rand); divergensteoremet gjør en lukket-flate-fluks om til ∭ div F dV. Signatur: `∮ (−y dx + x dy)/(x²+y²)`-integralet (= 2π rundt origo) med flere kurver som omslutter/ikke omslutter origo (V2011, H2007) — tester forståelse av singularitet + Greens teorem på et hullete område.
- **Frekvens:** divergensteorem 7/18, Green 6/18, Stokes 4/18 (minst én av dem i nesten alle sett).
- **Omskrevet eksempel:** «Formuler Stokes' teorem. Verifiser det deretter for øvre enhetshalvkule z = √(1 − x² − y²) og vektorfeltet F = (x, y, z) ved å regne både randintegralet og fluksen av curl F.»

### H. Kontinuitet / partiellderiverte / deriverbarhet i ett punkt (signatur-teorioppgaven)
- **Krav:** En stykkevis definert funksjon med en egen forskrift i (0,0). (a) **Kontinuitet i origo:** vis at grensen eksisterer og er lik funksjonsverdien — bruk polarkoordinater eller skviseargument (begrensethet av trig-faktorer skal uttales), eller vis at grensen *ikke* finnes ved å få ulik verdi langs to veier (f.eks. y = x mot y = x²). (b) **Partiellderiverte i origo:** må regnes fra **grensedefinisjonen** `f_x(0,0) = lim_{h→0} [f(h,0)−f(0,0)]/h`, ikke ved å sette inn i en derivertformel. (c) **Deriverbarhet (differensierbarhet):** sjekk lineariseringsrestleddet `[f(a+h)−f(a)−∇f·h]/|h| → 0`; og vis satsen «deriverbar ⇒ kontinuerlig» (H2009 var nettopp dette beviset). Variant: finn konstanter A, B slik at partiellderiverte får gitte verdier, og avgjør så kontinuitet.
- **Frekvens:** 13/18 — emnets tydeligste teori-/karakterskiller.
- **Omskrevet eksempel:** «La f(x,y) = x²y/(x²+y²) + |x| for (x,y) ≠ (0,0) og f(0,0) = 0. Avgjør om f er kontinuerlig i origo, og om de partiellderiverte eksisterer der.»

### I. Grenseverdi for funksjon av flere variable
- **Krav:** For å vise at en grense **eksisterer**: polarkoordinater der r → 0 og resten er begrenset (uttal begrensethet av cos/sin!), eller skvis. For å vise at den **ikke eksisterer**: finn to veier inn mot origo (typisk y = 0, y = x, y = x²) som gir ulik verdi — det klassiske skillet er `x²y/(x⁴+y²)` (grense 0 langs rette linjer, men ≠ 0 langs y = x²).
- **Frekvens:** 5/18 (oftere i eldre sett; ofte innledningsoppgave).
- **Omskrevet eksempel:** «Avgjør om grensen lim_{(x,y)→(0,0)} 4x²y/(x⁴+y²) eksisterer.»

### J. Parametrisering, tangentplan og kjerneregel/verifikasjon
- **Krav:** (a) Parametriser en skjæringskurve mellom to flater (velg ofte x som parameter, uttrykk y og z), finn tangentvektor og evt. normaliser til fart 1; finn planet normalt på kurven i et punkt. (b) Tangentplan til en graf `z = f(x,y)` eller til en nivåflate `F(x,y,z) = c` (normal = ∇F). (c) **Verifikasjonsoppgaver:** vis at en gitt funksjon løser varmelikningen / er harmonisk, eller at harmonisitet bevares under en substitusjon — dette krever ryddig bruk av **kjerneregelen** for funksjoner av flere variable, og sensor vil se «hvor du bruker at funksjonen er C²».
- **Frekvens:** parametrisering/tangent 6/18, tangentplan 5/18, harmonisk/PDE-verifikasjon 4/18 (voksende).
- **Omskrevet eksempel:** «Vis at hvis g er harmonisk (g_xx + g_yy = 0), så er også f(x,y) = g(x²−y², 2xy) harmonisk. Si tydelig hvor du bruker at g er to ganger kontinuerlig deriverbar.»

---

## 4. Sensorens krav

Utledet fra fasitene med sensorkommentarer (særlig V2009 og V2010, som er maskinlesbare og fulle av «Kommentar:»-avsnitt) og fra instruksene på oppgavesettene.

1. **«Alle svar skal begrunnes» — og fra ca. 2012 skjerpet til at det skal være *så mye mellomregning at fremgangsmåten fremgår tydelig*.** Et riktig sluttsvar uten synlig vei dit gir lite uttelling.
2. **Forkorting av faktorer må kommenteres.** Den mest gjentatte sensoranmerkningen (V2010): når du forkorter bort x, y eller et felles ledd i en Lagrange-likning, **skal du eksplisitt sjekke og kommentere tilfellet der leddet er null** — ellers mister du løsninger. At to gjenværende punkter gir samme funksjonsverdi «bør få en varselklokke til å ringe».
3. **Definisjonene skal brukes der de kreves.** Partiellderiverte og deriverbarhet i et skjøtepunkt/origo skal vises fra **grensedefinisjonen**, ikke ved innsetting i en derivertformel.
4. **Klassifiser med riktig verktøy, og håndter Δ = 0.** Annenderiverttesten gir *ingen* konklusjon når diskriminanten er null; da kreves egen argumentasjon om oppførsel vilkårlig nær punktet — og det er *ikke nok* å peke på fjerne punkter med høyere/lavere verdi.
5. **Sjekk endepunkt og forutsetninger.** Ved substitusjonsmetoden i betinget optimering skal endepunktene alltid kontrolleres. Ved bruk av Green/Stokes/divergensteoremet skal det **eksplisitt kommenteres at forutsetningene er oppfylt** (glatt felt, definert i hele området, riktig orientering).
6. **Ikke bruk teoremer ukritisk.** Divergensteoremet gjelder ikke når feltet har en singularitet inne i området; fasit (V2009) understreker at man kan få riktig svar «flaks», men at det ikke kan begrunnes uten å studere flate-/divergensbidraget fra singulariteten.
7. **Orientering og normalretning teller.** Fluks «ut av» området, kurve «mot klokka», fortegn i divergens-/Stokes-anvendelser skal være riktig — og oppgaven ber ofte eksplisitt om at du *spesifiserer* om du regner med eller mot klokka.
8. **Begrensethet skal uttales i skvis-/polarargumenter.** «|cos θ| ≤ 1»-typen skal skrives, ikke underforstås (V2009-kommentar).
9. **Alternative løsninger honoreres.** Fasitene skisserer gjennomgående flere veier (Lagrange vs. substitusjon, direkte fluks vs. divergensteorem, polar vs. veier for grenser) og godtar alle korrekt gjennomførte.

### Hva som skiller karakternivåene (utledet)
- **Bestått** henter poeng på de mekaniske delene: ∇f og retningsderivert, oppsett av trippelintegral for volum i sylinderkoordinater, curl-/div-beregning, «vis at F er konservativt og finn φ».
- **Midtsjiktet** behersker i tillegg fluks direkte *og* via teorem med riktig orientering, betinget optimering med korrekt håndtering av nullfaktorer og endepunkt, og kontinuitetsdelen av signaturoppgaven.
- **Toppsjiktet** kjennetegnes av: korrekt bruk av **definisjonen** for deriverbarhet i skjøtepunkt; presis sjekk av teoremenes **forutsetninger** (inkl. singularitetsfellen i divergensteoremet); rene **verifikasjons-/bevisoppgaver** (curl ∇f = 0 for C², harmonisitet under substitusjon, Hölder/Lipschitz ⇒ kontinuitet) der det sies tydelig hvor C²-antakelsen brukes; og full drøfting av globale ekstrema (indre kritiske punkt *mot* randverdier).

---

## 5. Typiske feil (dokumentert i fasiter/sensorkommentarer eller bygget inn i oppgavene)

1. **Forkorter x/y i Lagrange uten å sjekke null** — den hyppigste eksplisitte sensorfeilen (V2010); fører til tapte ekstremalpunkter og selvmotsigende konklusjoner.
2. **«Bare se på eksponenten»** i `e^{g(x,y)}`-oppgaver for retningsderivert — gir riktig retning, men gale tallverdier (V2010).
3. **Deriverbarhet/partiellderiverte «vist» med derivertformel** i stedet for grensedefinisjonen i origo/skjøtepunkt.
4. **Bruker divergensteoremet på et felt med singularitet** inne i området, uten å sjekke at teoremet i det hele tatt gjelder (V2009).
5. **Feil eller uspesifisert orientering** — normal som peker inn i stedet for ut, kurve mot klokka forvekslet med med klokka; å ikke oppgi hvilken vei man regner.
6. **Glemmer å sjekke endepunkt** i substitusjonsmetoden ved betinget optimering.
7. **Δ = 0 behandlet som avgjort** av annenderiverttesten (som ikke konkluderer der), eller «sadelpunkt» begrunnet med fjerne punkter i stedet for oppførsel vilkårlig nær.
8. **Glemte faktorer i integraler:** Jacobi-faktoren r (sylinder) eller ρ² sin φ (kule); manglende flateelement dS; feil grenser når to flater skjærer hverandre.
9. **Begrunnelse mangler på «opplagte» steg:** begrensethet av trig-faktorer i polar-/skvisargument, at eksponentialfunksjonen er kontinuerlig når man trekker en konklusjon fra eksponenten, at forutsetningene for et teorem er oppfylt.
10. **Ufullstendig løsning av ∇f = 0-systemet** — man finner noen kritiske punkt men viser ikke at det ikke finnes flere (sensorpoeng V2009).
11. ** Ikke gjennomført variabelskiftet for integranden**, kun for grensene, ved flytting/skalering av koordinatsystem (V2006-merknad).

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, formulere og delvis bevise)

**Differensialregning i flere variable:**
- **Gradient** ∇f, geometrisk tolkning (peker mot raskest vekst, står normalt på nivåkurve/-flate), rate |∇f|.
- **Retningsderivert** D_û f = ∇f · û (û normalisert), inkl. kombinasjon med kjeden «tangent til kurve × fart».
- **Kjerneregelen for flere variable** (aktivt: verifisere PDE, vise harmonisitet under substitusjon; si hvor C¹/C²-antakelsen brukes).
- **Annenderiverttesten / Hessian**: diskriminant Δ = f_xx f_yy − f_xy², fortegnsanalyse, og eksplisitt bevissthet om at Δ = 0 ⇒ ingen konklusjon.
- **Deriverbarhet (differensierbarhet)**: lineariseringsdefinisjonen med restledd → 0; satsen «deriverbar ⇒ kontinuerlig»; «kontinuerlige partiellderiverte ⇒ deriverbar».
- **Grenser i flere variable**: polarmetoden, veimetoden for ikke-eksistens, skvis (med uttalt begrensethet).
- **Tangentplan** til graf og til nivåflate (∇F som normal).
- **Lagranges multiplikatormetode** ∇f = λ∇g under g = c, med disiplinert nullfaktor- og endepunkthåndtering; global optimering på lukket, begrenset område.

**Integrasjon i flere variable:**
- **Dobbelt-/trippelintegral**, Fubini/bytte av integrasjonsrekkefølge, **variabelskifte med Jacobi-determinant**.
- **Polar-, sylinder- og kulekoordinater** med volumelementene r dz dr dθ og ρ² sin φ dρ dθ dφ.
- **Buelengde** av parametrisert (rom)kurve; **masse/tyngdepunkt** med tetthetsfunksjon.

**Vektoranalyse (emnets kjerne):**
- **Vektorfelt**, **divergens** ∇·F, **curl/virvling** ∇×F, og identitetene curl ∇f = 0, div curl F = 0 (og deres bevis for C²).
- **Konservative felt**: curl F = 0 (nødvendig; tilstrekkelig på enkelt sammenhengende område); konstruksjon av **potensialfunksjon**; veiuavhengighet og ∮ = 0 for lukket kurve.
- **Linje-/kurveintegral** (arbeid) og **flateintegral/fluks** med korrekt orientering.
- **Greens teorem**, **Stokes' teorem**, **divergensteoremet (Gauss)** — formulering *med forutsetninger*, verifikasjon og anvendelse; valg mellom dem; singularitetsfellen; det klassiske `∮(−y dx + x dy)/(x²+y²)`-eksemplet på hullete område.
- **Vektorpotensial**: finne F slik at G = ∇×F (H2006).

### Må forstås, men testes sjeldnere i arkivet
- **Buelengde** og **rene nivåkurve-skisser** (fallende frekvens).
- **Hölder-/Lipschitz-betingelse ⇒ kontinuitet** (V2014) — generell ε-argumentasjon; sjelden, men karakterskillende.
- **Harmonisk funksjon / varmelikning** som verifikasjonskontekst (voksende mot 2012–2013, men fortsatt smal).

### Notasjonskonvensjoner boken bør speile
- Vektorer i hakeparentes `[x, y, z]` eller med î, ĵ, k̂ (begge brukes i arkivet); N̂ for enhetsnormal, T̂ for enhetstangent.
- ∇f (gradient), ∇·F (divergens), ∇×F = curl F (virvling); Jacobi ∂(x,y)/∂(u,v).
- Formelark følger alltid oppgavesettet med koordinatformlene og de tre integralsatsene — boken bør gjengi et tilsvarende formelark og trene *bruk* av det, siden studenten *ikke* trenger å pugge selve formlene men må kunne velge og anvende dem raskt.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Fluks/flateintegral, direkte og via teorem** (~78 %) — settets tyngste, nesten alltid med; tren begge veier og kontroll-mot-kontroll.
2. **De tre integralsatsene: Green, Stokes, divergensteoremet** — formulering med forutsetninger, verifikasjon, anvendelse og valg mellom dem. Minst én i nesten hvert sett.
3. **Kritiske punkt + Hessian/klassifisering** (~72 %) inkl. Δ = 0-håndtering og global drøfting.
4. **Betinget optimering (Lagrange + substitusjon)** (~67 %) med nullfaktor- og endepunktdisiplin — den mest sensorstraffede sjangeren.
5. **Konservative felt + potensial + arbeid** (~56 %) — curl-sjekk + φ-konstruksjon + veiuavhengighet.
6. **Volum/masse i sylinder-/kulekoordinater** (~67 %) med riktige elementer og grenser.
7. **Signaturteorioppgaven: kontinuitet/partiellderivert/deriverbarhet i punkt** (~72 %) — definisjonsbruk, skvis/polar, deriverbar ⇒ kontinuerlig.

### Nivå 2 — må kunne (bredden i poengfangsten)
8. **Gradient/retningsderivert med bevegelse langs kurve** (fart × D_û f) — NTNU-signatur.
9. **Linje-/kurveintegral** via konservativt felt eller Green.
10. **Grenseverdi i flere variable** (polar vs. veier) — vanlig innledningsoppgave.
11. **Parametrisering av skjæringskurve, tangentvektor, tangentplan** (til graf og nivåflate).
12. **Curl- og div-beregning + identitetene** curl ∇f = 0, div curl F = 0 (med bevis for C²).
13. **Dobbeltintegral med variabelskifte / byttet rekkefølge / Jacobi.**
14. **Verifikasjonsoppgaver** (harmonisk funksjon, varmelikning, kjerneregel) — voksende sjanger mot slutten av arkivet.

### Nivå 3 — bør dekkes (lav arkivfrekvens eller nyere/usikkert)
15. **Buelengde av romkurve** — klassisk, men fallende frekvens.
16. **Rene nivåkurve-/nivåflateskisser** med normal.
17. **Vektorpotensial** (finn F med G = ∇×F).
18. **Generell ε-argumentasjon** (Hölder/Lipschitz ⇒ kontinuerlig) — sjeldent, men toppsjikt.
19. **Prosjektforberedende, sammensatte anvendelsesoppgaver** — modellering med vektorfelt/fluks/optimering i fysisk kontekst; dekker den nye 30 %-prosjektdelen som arkivet ikke belyser.

### Prognose for neste skriftlige slutteksamen
Basert på 2008–2014-malen: **7–10 likt vektede oppgaver over 4 timer**, enkel kalkulator + formelark, ingen flervalg. Forventet innhold:
- Én **fluksoppgave** (direkte + kontroll med divergensteorem eller Stokes).
- Én **fri optimering** (kritiske punkt + Hessian, ofte med globalt maks/min).
- Én **betinget optimering** (Lagrange eller substitusjon, på sirkel/flate/kurve).
- Én **konservativt-felt/potensial/arbeid**-oppgave.
- Ett **volum/masse-integral** i sylinder- eller kulekoordinater.
- Signatur-**teorioppgaven** om kontinuitet/deriverbarhet i punkt (evt. med definisjonsbevis).
- Ett innslag fra {gradient/retningsderivert langs kurve, grenseverdi, tangentplan/parametrisering, curl ∇f = 0-verifikasjon, harmonisk funksjon}.
- Sannsynligvis minst én ren **«formuler/verifiser teoremet»**-oppgave.

**Usikkerhetsmomenter (verifiser):**
1. **Prosjektdelen (30 %)** er helt udekket av arkivet — format, omfang og temavalg må sjekkes mot fersk emnebeskrivelse/faglærer; boken bør likevel inneholde større, prosjektlignende anvendelsesoppgaver.
2. **Arkivet stopper i 2014.** Vektfordelingen mellom temaene kan ha forskjøvet seg etter 2015; sjekk mot første tilgjengelige nyere sett.
3. **Retningsderivert-frekvensen (~56 %) er trolig undertelt** pga. OCR-tap av ∇-symbolet; reell frekvens er antatt høyere.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1103/`. Arkivet inneholder 33 PDF-er; nedenfor er de **18 distinkte oppgavesettene** og de tilhørende **løsningsforslagene**. Tekst er hentet med `pdftotext -layout`; skannede/håndskrevne PDF-er er rasterisert (`pdftoppm`) og OCR-lest (`tesseract -l nor+eng`). OCR-utdrag er brukt for temaregistrering og struktur, ikke for ordrett gjengivelse.

### Oppgavesett lest grundig (18 distinkte sett)
| År/semester | Fil | Uttrekk |
|---|---|---|
| V2004 | `eksamenv04.pdf` (= `NTNU_MA1103.pdf`, duplikat) | ren tekst |
| V2005 | `ma1103eksv05no.pdf` | ren tekst |
| H2005 | `ma1103eksh05nn.pdf` | ren tekst (nynorsk) |
| V2006 | `eksamen06_ma1103_nn.pdf` | ren tekst (nynorsk) |
| H2006 | `ma1103eksh06bm.pdf` | ren tekst |
| V2007 | `ma1103eksv07.pdf` | OCR |
| H2007 | `ma1103eksh07.pdf` | OCR |
| V2008 | `EksamenJun2008.pdf` | OCR |
| V2009 | `eksamen_ma1103_v09_nn.pdf` | ren tekst (nynorsk) |
| H2009 | `ma1103_eksamen_h09.pdf` | ren tekst |
| V2010 | `ma1103_eksamen_v10.pdf` | ren tekst |
| V2011 | `ma1103-20110603-nn.pdf` | ren tekst (nynorsk) |
| V2012 | `EksamenJun2012.pdf` | OCR |
| Kont. aug. 2012 | `eksamenaug2012.pdf` | OCR (inkl. formelliste) |
| V2013 | `eksamenmai2013.pdf` | OCR |
| Kont. aug. 2013 | `EksamenAug2013.pdf` | OCR |
| V2014 | `ma1103_14vNyn.pdf` | ren tekst (nynorsk, inkl. formelark) |
| Kont. aug. 2014 | `ma1103_14k_oppgaver.pdf` | ren tekst (inkl. formelark) |

### Løsningsforslag lest (14)
| Gjelder | Fil | Kvalitet |
|---|---|---|
| V2004 | `losning_v04.pdf` | OCR |
| V2005 | `losning_v05.pdf` | OCR |
| H2005 | `losning2_h05.pdf` | OCR |
| V2006 | `losning_ma1103_v06.pdf` | **ren tekst, svært grundig m/merknader** |
| H2006 | `ma1103eksh06los.pdf` | OCR (stor fil, delvis skann) |
| V2007 | `ma1103eksv07los.pdf` | OCR |
| H2007 | `ma1103eksh07los.pdf` | OCR |
| V2008 | `LosningJun2008.pdf` | OCR (håndskrevet — begrenset) |
| V2009 | `eksamen_ma1103_v09_losning.pdf` | **ren tekst, svært grundig m/sensorkommentarer** |
| V2010 | `ma1103_eksamen_v10_losningsforslag.pdf` | **ren tekst, svært grundig m/sensorkommentarer** |
| V2011 | `lf-ma1103-200110603.pdf` | OCR |
| V2012 | (dekket av `LosningAug2012.pdf` / oppgavetekst) | OCR |
| Kont. aug. 2012 | `LosningAug2012.pdf` | OCR |
| V2013 | `ma1103-v13-lf.pdf` | OCR (delvis håndskrevet — begrenset) |
| Kont. aug. 2013 | `LosningAug2013.pdf` | OCR |

Andre PDF-er i arkivet (`eksamen_ma1103_v09_nn.pdf`, `ma1103-20110603-nn.pdf` m.fl.) er nynorske parallellutgaver eller duplikater av settene over.

### Merknader om kildene
- **Hull i arkivet:** Ingen sett etter 2014. **Hele prosjektdelen (30 % av dagens vurdering) mangler.** Ingen midtveis-/deleksamen finnes (emnet har historisk hatt én skriftlig sluttprøve). Frekvenstallene beskriver 2004–2014-praksisen.
- **OCR-forbehold:** For skannede/håndskrevne sett kan enkelte symboler (∇, brøker, indekser) være feillest; temaene er verifisert manuelt, men detaljtall for slike sett er nedre grenser. De tre grundigste, maskinlesbare fasitene (V2006, V2009, V2010) er hovedgrunnlaget for delene 4 og 5.
- **Duplikater/parallellutgaver:** `NTNU_MA1103.pdf` = `eksamenv04.pdf`; flere sett finnes i både bokmåls- og nynorskversjon (talt som ett distinkt sett).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.
