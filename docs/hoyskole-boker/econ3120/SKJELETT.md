# Bokskjelett: ECON3120/ECON4120 Mathematics 2 — Calculus and Linear Algebra (UiO)

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (15 skriftlige skoleeksamener V2015–H2025 og **9 offisielle
> sensorveiledninger/løsningsforslag** V2018 + H2018–H2025 fra Økonomisk institutt,
> UiO). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i skjelettet er omskrivninger med nyskrevne tallverdier;
> forfatteren skal variere dem videre (nye tall, ny innramming), aldri kopiere inn
> ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ3120` |
| Tittel | **ECON3120/ECON4120 Mathematics 2: Calculus and Linear Algebra** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (Økonomisk institutt) |
| Arketype | Regnefag (matematisk verktøyfag for økonomer, fast oppgavemal) |
| Antall kapitler | **40** (2 eksamenskart + 34 tema/drill + 4 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 2 700 min ≈ 45 timer** (uten prøver) |
| Quiz totalt | **597** (krav ≥500) |
| Flashcards totalt | **564** (krav ≥500) |
| Eksamensspråk | **Engelsk** → tospråklig begrepsbank (norsk / English) |

**Pitch (ett avsnitt):** ECON3120/4120 er UiOs andre matematikkemne for økonomer og
bygger direkte på ECON1100 Matematikk 1. Eksamen er **4 timer, engelsk, Inspera**, med
**4–5 oppgaver** delt i jevnt vektede bokstav-items (typisk 12–14 items totalt), og et
forhåndskunngjort **«Rules and formulas»-vedlegg** som følger med i eksamenslokalet.
Settet har vært ekstremt stabilt 2015–2023 og hviler på **fire faste søyler** som bærer
~80 % av poengene: **(1) matrisealgebra + parametriske likningssystemer** (100 % av
settene, alltid egen oppgave), **(2) betinget optimering med Lagrange** (100 %), **(3)
integrasjon + differensiallikning av 1. orden** (~93–100 %, oftest i samme oppgave), og
**(4) implisitt derivasjon / komparativ statikk** (73 %, nesten alltid Oppgave 1). En
femte oppgave roterer (grenser/l'Hôpital, konveksitet/Hessian, homogenitet, sadelpunkt).
Boka mekaniserer de fire søylene til automatikk og driller — viktigst av alt — fagets
strengeste sensorregel: **metodelydighet**. Denne boka lærer studenten å *bruke*
vedlegget (identifisere hvilket teorem som gjelder), ikke pugge det, og å følge **påbudte
metoder til punkt og prikke** — for feil metode gir **null poeng selv med riktig svar**.

**⚠️ Rammemerknad — ÉN eksamen, to koder (dokumenteres i Del 0).** ECON3120 (bachelor)
og ECON4120 (master) er **samme emne, samme undervisning og samme eksamen**. Oppgavesett
for hvert delt år (H2018–H2025 + V2018) er *byte-identiske* mellom kodene, tittelblokka
lyder «ECON3120/4120 Mathematics 2», og karakterstatistikk rapporteres slått sammen.
**Ett rammeverk (denne boka) dekker BEGGE kodene fullt ut.** Den eneste formelle
forskjellen ligger utenfor prøvingen (masterkoden kan ha egne adgangskrav / obligatoriske
innleveringer). Del 0.1 sier dette rett ut så studenten på begge koder vet at boka gjelder
uavkortet.

**⚠️ Rammemerknad — MAJOR pensumskifte H2024 (styrer vektingen i HELE boka).** Fra og med
H2024 ble pensum lagt vesentlig om, og boka er kalibrert mot **det nye regimet (H2024→)**:
- **Kuhn–Tucker (ulikhetsbibetingelser) er TATT UT.** Betinget optimering testes nå kun
  med **likhetsbibetingelser (Lagrange)**; to bibetingelser krever nå tre variabler.
- **Integrasjon ved substitusjon (change of variable) er TATT UT.** Nyere sett ber
  eksplisitt om å løse integraler *uten* substitusjon (ekspander polynom / delvis
  integrasjon).
- **NYE tema lagt til med full behandling:** **differenslikninger** (Del 8) og **dynamisk
  programmering / Bellman** (Del 9).
- **Kuhn–Tucker (kap. 5.6) og integrasjon ved substitusjon (i kap. 6.3)** beholdes som
  **bakgrunn / eldre pensum «bør kjenne til»** — fortsatt nyttig for forståelse og for de
  eldre settene, men eksplisitt merket utgått. Eksamensvinkel-blokkene deres SKAL si dette
  rett ut.

**Kritiske stil- og notasjonsregler (gjelder HELE boka).** Bruk eksamenssettenes og
vedleggets notasjon, ikke lærebok-alternativer:

1. **Begrunn alt («state reasons for all your answers»).** Bart tallsvar gir lite
   uttelling; metoden og korrekt bruk av vedleggets teoremer bærer poengene. Hvert
   løsningsforslag skrives som en A-besvarelse med utregning/argument synlig.
2. **Metodelydighet er den dyreste enkeltregelen.** Når en oppgave påbyr en metode
   (Gauss-eliminasjon for invers, Cramér der det kreves, «bruk det differensierte
   systemet», integrasjon uten substitusjon, «vis ved antiderivasjon») gis **null poeng
   for enhver annen metode — SELV MED RIKTIG SVAR**. Hvert metodekapittel har derfor en
   egen **«Sensor krever denne metoden»-boks** (type `warning`).
3. **Notasjon.** Prime `′` for både transponert (matriser) og derivert (funksjoner),
   kontekstavhengig — sensor tillater «any reasonable notation». Partiellderiverte
   $f'_x$, $f''_{xx}$, $f''_{xy}$ (kryssderivert); $\partial/\partial x$ likestilt.
   Lagrange-funksjon $L$, multiplikatorer $\lambda$ (evt. $\alpha,\beta,\gamma,\mu$),
   optimum $x^*$, verdifunksjon $V$. Hessian-determinant $D = f''_{xx}f''_{yy} -
   (f''_{xy})^2$. Matriseregler $(AB)' = B'A'$; $AA'$ og $A'A$ symmetriske;
   $|A'A| = |A|^2$, $|A^2| = |A|^2$, $|cA| = c^n|A|$; adjungat $A^{-1} = \frac{1}{|A|}C'$;
   Cramér $x_i = |A_i|/|A|$. Tegnet `∼` betyr **«ekvivalent likningssystem»** (ikke
   radekvivalens); vertikal separator i $(A\,|\,b)$ tillatt. Bibetingelse i
   Kuhn–Tucker-stoffet skrives $g(x) \le b$ (læreboka).
4. **Tospråklig terminologi (eksamen er engelsk).** Hvert delkapittel som bruker
   fagbegreper introduserer dem som **norsk (English)** ved første forekomst — f.eks.
   determinant (determinant), invers (inverse), bibetingelse (constraint), skyggepris
   (shadow price), baklengs induksjon (backward induction). Symbol- og formellisten er
   tospråklig. Nøkkelfrasene sensor bruker gjengis på engelsk der de er slående («a grave
   sin in this course», «state reasons for all your answers», «no score for other
   methods»).
5. **Vedlegget («Rules and formulas»).** Boka lærer å *bruke* det medfølgende vedlegget,
   ikke å pugge det. Hvert kapittel peker på hvilket teorem/formel fra vedlegget som
   gjelder («identifisering av oppgavetypen er halve poenget»). Del 0.2 er dedikert til
   vedleggsbruk + metodelydighet.

**Kritisk faglig avgrensning (gjelder HELE boka).** **Egenverdier og diagonalisering
(eigenvalues, diagonalization) forekommer 0/15 i arkivet** — lineær algebra i dette emnet
er *utelukkende* matriseprodukt, transponert, determinant, invers, Cramér, Gauss og
parametriske likningssystemer. Egenverdier nevnes KUN som kort bakgrunn i kap. 2.2 (for å
knytte definitthet til Hessian), aldri som en drillet ferdighet, og grunnbeskrivelsens
temaliste skal **ikke love egenverdier**. Dette skiller ECON3120 skarpt fra MAT1120
(lineær algebra med egenverdier) — ikke lån struktur derfra.

**Forgjengerkobling (ECON1100).** ECON3120 forutsetter ECON1100 Matematikk 1
(partiellderivasjon, endimensjonal/flervariabel fri optimering, homogenitet/Euler,
konveksitet, omhyllingsteoremet). Forgjengerboka `econ1100` er **skjelett, ikke bygget** —
derfor skrives ECON1100-forkunnskaper som **klartekst med aktiveringsmarkør** (rask
oppfriskning i kap. 2.1), ikke som kryssbok-lenke. Kryssbok-lenker peker kun på **verifiserte
VGS-kapitler** (R1/R2/S2) for det helt elementære. NB fra analysen: fra 2019 er
omhyllingsteoremet *ikke lenger* forkunnskap fra ECON1100 — derfor lærer denne boka det på
nytt (kap. 5.5).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del (vises som
«Kapittel N: <tittel>» på bokforsiden).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, vedlegg og metodelydighet | 2 | — | Prioriteringsverktøyet + fagets dyreste regel (metodelydighet) og vedleggsbruk. Kjerne i studieguiden. |
| 1 | Matrisealgebra og parametriske likningssystemer | 7 | **PERFEKT** | **100 %** — fast egen oppgave hvert sett. Produkt/orden, determinant, invers (Gauss påbudt vs. adjungat), Cramér, antall løsninger med grensetilfellet det=0. Størst del + eget drillkapittel. |
| 2 | Flervariabel kalkulus, konveksitet og Hessian | 3 | **KUNNE** (bærer tilstrekkelighet) | Partiell/differensial (bro fra ECON1100) + konveksitet/Hessian ~67 % (bærer tilstrekkelighet i optimering) + sadelpunkt/andrederiverttest ~33 %. |
| 3 | Implisitt derivasjon og komparativ statikk | 5 | **PERFEKT** | 73 %, nesten alltid Oppgave 1, stigende. Differensier systemet ledd for ledd + Cramér/Jacobi + lineær approksimasjon + homogenitet/Euler. Teori + drill. |
| 4 | Grenser, l'Hôpital og eksistenssetninger | 2 | **KUNNE** | Grenser/l'Hôpital ~67 % (synkende); ekstremverdisetningen ~53 % + skjæringssetningen ~33 % (eksistens, ikke entydighet). |
| 5 | Betinget optimering: Lagrange | 7 | **PERFEKT** | **100 %** — kjernen i emnet, ofte to oppgaver. Full FOC-utskriving, test av punkt, konkavitet-tilstrekkelighet, flere bibetingelser (nytt regime), omhyllingsteorem/skyggepris. Kuhn–Tucker som bakgrunn. Teori + drill. |
| 6 | Integrasjon | 3 | **PERFEKT** (redusert) | ~100 %, men redusert etter 2024. Delvis integrasjon, uegentlige integraler m/konvergens, ekspandering (erstatter substitusjon), Leibniz' regel. |
| 7 | Differensiallikninger av 1. orden | 3 | **PERFEKT** (redusert) | ~93 %. Lineær (integrerende faktor) og separabel (konstantløsning-sjekken FØRST). Oftest sammen med integrasjon → felles drill. |
| 8 | Differenslikninger *(nytt pensum 2024)* | 2 | **NY — full behandling** | NY H2024. Generell + partikulær løsning, ubestemte koeffisienter. Full behandling tross tynt eksempelgrunnlag; forvent gjentakelse. |
| 9 | Dynamisk programmering og Bellman *(nytt pensum 2024)* | 2 | **NY — full behandling** | NY H2024 (baklengs induksjon) + H2025 (optimal stopping/Bellman). 2/2 siden 2024. Full behandling; prognosert som fast Oppgave 4. |
| 10 | Eksamenstrening | 4 | — | Metodelydighet-stordrillen (fagets dyreste regel, kryssgående) + 3 komplette 4-timers øvingseksamener med vedlegg (2 nytt regime, 1 eldre regime for bredde). |

**Avvik fra DNA-malen (dokumentert):**

1. **Del 0 har to kapitler i stedet for ett.** DNA legger opp til ett eksamenskart-kapittel.
   Her får **metodelydighet + vedleggsbruk et eget kapittel (0.2)** fordi metodelydighet er
   fagets *dyreste enkeltregel* («no score for other methods, even with the right answer»)
   og det medfølgende vedlegget er en formatendring (2019→) som styrer hele lesestrategien.
   Å skille det ut fra frekvenskartet gjør begge skarpere.
2. **Drillkapitlene ligger inne i temadelene sine** (1.7 matrisealgebra, 3.5 komparativ
   statikk, 5.7 Lagrange, 7.3 integrasjon+ODE), ikke samlet i siste del. Dette er de
   perfekt-sjangrene som må automatiseres umiddelbart etter teorien. Del 10 beholder den
   ene *kryssgående* drillen — metodelydighet-katalogen — fordi den trekker på ALLE
   temaene, pluss øvingseksamenene.
3. **Boka er over DNA-ens omfangsintervall (40 kapitler mot «20–35»).** Grunnen er
   strukturell: emnet er genuint bredt — det dekker *hele* lineær algebra, flervariabel
   kalkulus, konveksitet, grenser, betinget optimering, integrasjon, differensiallikninger
   **pluss to helt nye fulle temaer** (differenslikninger + dynamisk programmering) som
   pensumskiftet 2024 påla. Fire distinkte PERFEKT-søyler (Del 1, 3, 5, 6/7) rommer 25 av
   34 temakapitler; frekvensvektingen er ivaretatt. Sammenlign econ1100 (38 kap., smalere
   emne) og mat1110 (34 kap.).
4. **Egenverdier er bevisst *ikke* et eget tema** (0/15 i arkivet) tross at kursnavnet
   inneholder «Linear Algebra» — kun en kort bakgrunnsnote i kap. 2.2. Dokumentert i §1.
5. **Kuhn–Tucker (5.6) og integrasjon ved substitusjon (i 6.3) er nedgradert til
   bakgrunn** etter pensumskiftet, tross høy *historisk* frekvens (KT var 13/15). De kuttes
   ikke helt (de eldre settene og robust forståelse), men Eksamensvinkel-blokkene merker
   dem eksplisitt «utgått fra pensum H2024 — bør kjenne til».

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som studentens
sjekkliste):
`MA` matrisealgebra + parametriske system (den faste LA-oppgaven) ·
`CS` implisitt derivasjon / komparativ statikk (ofte Oppgave 1) ·
`LG` betinget optimering med Lagrange ·
`HE` konveksitet/Hessian/tilstrekkelighet ·
`SA` sadelpunkt / andrederiverttest (fri optimering) ·
`LH` grenser og l'Hôpital ·
`EV` eksistenssetninger (ekstremverdi / skjæringssetning) ·
`OM` omhyllingsteorem / skyggepris ·
`HG` homogenitet / Eulers teorem ·
`IN` integrasjon (delvis, uegentlig, ekspandering, Leibniz) ·
`DE` differensiallikning 1. orden (lineær / separabel) ·
`DL` differenslikning *(ny 2024)* ·
`DP` dynamisk programmering / Bellman *(ny 2024)* ·
`KT` Kuhn–Tucker *(bakgrunn / utgått 2024)* ·
`SU` integrasjon ved substitusjon *(bakgrunn / utgått 2024)*.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **NY** (nivå 3, nytt pensum 2024) / **BAKGRUNN** (utgått, bør kjenne
til). Symbol- og formelliste-blokk (per delkapittel, tospråklig) og de øvrige obligatoriske
kapittel-DNA-blokkene spesifiseres i BYGGEKONTRAKT — her angis innholdet de skal dekke.
Kryssbok-lenker peker på verifiserte R1/R2/S2-kapitler; ECON1100-forkunnskap skrives som
klartekst (forgjengerboka er ikke bygget).

---

### Del 0 — Eksamenskart, vedlegg og metodelydighet

#### Kapittel 0.1: Eksamenskartet: slik testes ECON3120/4120

- **id:** `econ3120-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fire faste søylene, temafrekvensene, to-kode-rammeverket og pensumskiftet 2024 — prioriteringsverktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 15 sett. Skal gjengi: (i) **formen**: én skriftlig skoleeksamen (Inspera), 4 timer, engelsk, 4–5 oppgaver (nesten alltid 5) med bokstav-items, typisk 12–14 items totalt, **jevn vekting over items som utgangspunkt**; karakter A–F (E dårligste ståkarakter, F stryk); strykgrense konstant 40 %; masterkoden krever normalt tre godkjente obliger for adgang; ingen midtveiseksamen. To faste forsideinstruksjoner: «state reasons for all your answers» og «senere deloppgaver kan bruke resultat fra tidligere» (uavhengig av om du løste dem). (ii) **De fire faste søylene** (~80 % av poengene): matrisealgebra + parametriske system (100 %), betinget optimering Lagrange (100 %), integrasjon + differensiallikning (~93–100 %, oftest samme oppgave), implisitt derivasjon/komparativ statikk (73 %, oftest Oppgave 1). En femte oppgave roterer. (iii) **Temafrekvens-tabellen** (andel av 15 sett): matrisealgebra 100 %, Lagrange/betinget optimering 100 %, integrasjon ~100 %, ODE 1. orden ~93 %, implisitt derivasjon/komparativ statikk 73 %, Kuhn–Tucker 87 % **t.o.m. 2023 (utgått)**, grenser/l'Hôpital ~67 %, konveksitet/Hessian ~67 %, ekstremverdisetningen ~53 %, omhyllingsteorem 47 %, homogenitet/Euler ~33 %, skjæringssetning ~33 %, sadelpunkt ~33 %, dynamisk programmering 2/2 siden 2024 (NY), differenslikninger NY 2024. (iv) **Fraværsbildet** — én setning: egenverdier/diagonalisering forekommer *aldri* (0/15); studenten kan trygt la dem ligge. (v) **To-kode-rammeverket**: ECON3120 (bachelor) og ECON4120 (master) er samme eksamen, byte-identiske oppgavesett, statistikk slått sammen — boka gjelder begge koder uavkortet. (vi) **Formathistorikk + pensumskiftet 2024** kort: ≤V2018 åpen bok / 3 timer / tospråklig; H2019→ 4 timer / engelsk / medbrakt materiale erstattet av «Rules and formulas»-vedlegg; H2020 COVID-unntaksår (5 timer, ikke representativt); H2024 pensumskifte (Kuhn–Tucker + substitusjon UT, differenslikninger + dynamisk programmering INN). (vii) **Karakterskillene**: bestått henter poeng på de mekaniske delpunktene (differensier systemet, regn matriseprodukt/determinant, Lagrange-oppsett med FOC, enkel integrasjon/separabel ODE); midtsjiktet fullfører likningssystem for én derivert (Cramér), invers ved påbudt metode, komplett Lagrange med multiplikatorverdier, konkavitet-tilstrekkelighet; toppsjiktet mestrer grensetilfellet det=0, konstantløsning før deling, skyggepris-tolkning av $\lambda$, påvist l'Hôpital-anvendbarhet og baklengs induksjon.
- **Innholdskontrakt:** Sjangerkatalogen `MA, CS, LG, HE, SA, LH, EV, OM, HG, IN, DE, DL, DP, KT, SU` presenteres som studentens sjekkliste med typisk plassering og vekt. **Prognosen for neste ordinære eksamen** (fra H2024–H2025-malen, 5 oppgaver, ~jevn vekting, 4 timer, engelsk, med vedlegg): Oppg. 1 implisitt derivasjon av likningssystem (differensier + approksimer/Cramér) ELLER parametrisk lineært system; Oppg. 2 matrisealgebra (produkter/orden, determinant, invers, antall løsninger); Oppg. 3 Lagrange (likhetsbibetingelser, ev. 3 variabler + 2 bibetingelser) med konkavitet-tilstrekkelighet og omhyllingsteorem til slutt; Oppg. 4 dynamisk programmering/Bellman (baklengs induksjon eller optimal stopping); Oppg. 5 integrasjon (delvis + uegentlig m/konvergens) + differensiallikning og/eller differenslikning. Avslutt med **leseplan**: Del 1, 3, 5, 6, 7 er «må perfekt»; Del 2, 4 «må kunne»; Del 8, 9 «nytt pensum, dekk fullt»; Kuhn–Tucker (5.6) og substitusjon (6.3) «bør kjenne til».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 5 oppgaver, ~13 jevnt vektede items og 240 minutter — sett opp et tidsbudsjett når Oppg. 3 har 4 items og Oppg. 5 har 3».
- **Typiske feil:** Metafeilene: bruke tid på temaer som ikke testes (egenverdier); pugge vedlegget i stedet for å øve på å *identifisere* riktig teorem; forberede seg på Kuhn–Tucker som kjerneoppgave (utgått) i stedet for å drille det nye pensumet; nedprioritere de billige mekaniske poengene (matriseprodukt, differensier systemet).
- **Quiz: 12 · Flashcards: 14** (form, søyler, frekvenser, to-kode, pensumskifte, fraværsbilde)

#### Kapittel 0.2: Vedlegget og metodelydighet: fagets dyreste regel

- **id:** `econ3120-0-2` · **number:** 0.2 · **estimatedMinutes:** 30 · **prerequisites:** `econ3120-0-1`
- **Kapitteltype:** eksamenskart (metode)
- **description:** Hvordan bruke «Rules and formulas»-vedlegget, og hvorfor påbudt metode må følges til punkt og prikke — feil metode gir null poeng selv med riktig svar.
- **Eksamensbelegg:** Metakapittel bygget på alle 9 sensorveiledninger. **Metodelydighet er sensors mest gjennomgående krav og den enkeltregelen som koster flest poeng.** Skal etablere de to metareglene som gjentas nesten ordrett i alle fasitdokumenter: (1) begrunn alt — bart svar gir lite, korrekt bruk av vedleggets teoremer bærer poengene; (2) identifiser oppgavetypen og riktig formel fra vedlegget — «Identifying the problem type is a big part of this course.»
- **Innholdskontrakt:** (a) **Vedlegget** («Rules and formulas», ~9 sider, kunngjort på forhånd): grenser, l'Hôpital, derivasjon, optimering inkl. Lagrange/Kuhn–Tucker, integrasjon, differensiallikninger, lineær algebra, determinanter, Cramér, homogenitet. Poeng: vedlegget skal *brukes*, ikke pugges; det er tillatt å sitere det, men **å identifisere hvilken formel/teorem som gjelder er halve poenget**. Gjennomgå én liten «hvilket teorem gjelder?»-øvelse per søyle. (b) **Metodelydighet-katalogen** (den røde tråden i hele boka): når en oppgave påbyr en metode gis **null poeng for andre metoder — selv med riktig svar**. De fem påbudte-metode-signalene: (1) **Gauss-eliminasjon** for invers ($AX=I$) — ikke adjungat når Gauss er påbudt; (2) **Cramérs regel** der den påbys (f.eks. «vis at $x_2 = 0$»); (3) **«bruk det differensierte systemet»** i komparativ statikk — ikke eliminer en variabel fra utgangssystemet; (4) **integrasjon uten substitusjon** (ekspander polynom / delvis integrasjon) fra 2024; (5) **«vis ved antiderivasjon»** — ikke deriver høyresiden for å «vise» en antiderivert. (c) De to «divisjon med mulig null»-fellene som også er metoderegler: aldri skalér et parametrisk system med $1/t$; aldri del i separabel ODE uten konstantløsning-sjekk («a grave sin in this course»). Introduser **«Sensor krever denne metoden»-boksen** som studenten vil møte i hvert metodekapittel.
- **Oppgavesjangre:** Ingen regneoppgaver; 4–5 «hvilken metode er påbudt her, og hva ville gitt null poeng?»-refleksjonsoppgaver.
- **Typiske feil:** Anta at riktig svar alltid gir poeng (det gjør det ikke ved påbudt metode); pugge vedlegget i stedet for å trene identifisering; overse ordlyd som signaliserer påbudt metode («by Gauss elimination», «using Cramer's rule», «without substitution», «by antidifferentiation»).
- **Quiz: 14 · Flashcards: 18** (vedleggets seksjoner + de fem påbudte-metode-signalene + de to null-divisjon-fellene)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Matrisealgebra og parametriske likningssystemer *(prioritet: PERFEKT — 100 %, den faste LA-oppgaven)*

#### Kapittel 1.1: Matriser, matriseprodukt, orden og veldefinerthet

- **id:** `econ3120-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Radgang-kolonne-produktet, når et produkt er veldefinert, og orden $m\times n$ — der elementvis «multiplikasjon» er den dyre fellen.
- **Eksamensbelegg:** Del av den faste matrisealgebra-oppgaven (100 %). Nyere trekk: **matriseprodukt gir poeng i seg selv** («it used not to be the case»). Settene konstrueres ofte slik at et *ikke*-produkt (f.eks. $v^2$ for ikke-kvadratisk $v$) lokker den uforsiktige. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Matrise (matrix), orden $m\times n$, element $a_{ij}$. Matriseprodukt (matrix product) som radgang-kolonne: $(AB)_{ij} = \sum_k a_{ik}b_{kj}$; **veldefinert kun når indre dimensjoner stemmer** ($A$ er $m\times p$, $B$ er $p\times n$ → $AB$ er $m\times n$). **Ikke-kommutativitet**: $AB \ne BA$ i sin alminnelighet (ofte ikke engang begge veldefinert). Regn ut noen produkter for hånd; avgjør for en liste par hvilke som er veldefinerte og deres orden. Skalar-, sum- og potensregler ($A^2 = AA$ krever kvadratisk). Poeng: **elementvis multiplikasjon er ikke matriseprodukt** — den grove feilen sensor jakter på.
- **Oppgavesjangre:** MA. Mønstereksempel: «La $A$ være $2\times 3$ og $B$ være $3\times 2$. Avgjør hvilke av $AB$, $BA$, $A^2$, $B'A$ som er veldefinerte, og oppgi orden. Regn ut $AB$ når $A=\begin{pmatrix}1&0&2\\ -1&3&1\end{pmatrix}$, $B=\begin{pmatrix}2&1\\0&-1\\1&4\end{pmatrix}$.»
- **Typiske feil:** Elementvis «produkt»; anta kommutativitet; kalle $v^2$ veldefinert for ikke-kvadratisk $v$; feil orden på produktet.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.2: Transponert, symmetri og matriseregler

- **id:** `econ3120-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ3120-1-1`
- **Kapitteltype:** teori
- **description:** Transponert, regelen $(AB)'=B'A'$, og at $AA'$ og $A'A$ alltid er symmetriske — som skal gjenkjennes før utregning.
- **Eksamensbelegg:** Fast innslag i matrisealgebra-oppgaven. Sensor forventer at **$AA'$/$A'A$ gjenkjennes som symmetrisk før utregning**, og at $(AB)' = B'A'$ (rekkefølgen snus) brukes riktig. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Transponert (transpose) $A'$; $(A')' = A$; $(A+B)'=A'+B'$; **$(AB)' = B'A'$** (rekkefølgen snus — vanlig felle). Symmetrisk matrise (symmetric matrix): $A' = A$. **$AA'$ og $A'A$ er alltid symmetriske** (og kvadratiske, men av ulik orden) — vis hvorfor: $(AA')' = (A')'A' = AA'$. Identitetsmatrisen $I$; $AI = IA = A$. Diagonalmatrise. Kobling til determinant (kap. 1.3): $|A'| = |A|$.
- **Oppgavesjangre:** MA. Mønstereksempel: «La $A$ være $3\times 2$. Forklar uten utregning hvorfor $A'A$ er symmetrisk, og oppgi orden. Er $(A'A)' = A'A$?»
- **Typiske feil:** Glemme å snu rekkefølgen i $(AB)'=B'A'$; tro $AA'$ er kvadratisk av samme orden som $A$; blande $A'A$ og $AA'$ (ulik orden).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 1.3: Determinanter: cofaktor, radoperasjoner og snarveiene

- **id:** `econ3120-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-1-2`
- **Kapitteltype:** teori
- **description:** Determinant kun for kvadratiske matriser, cofaktorutvikling langs raden med flest nuller, og snarveiene $|A'A|=|A|^2$, $|A^2|=|A|^2$, $|cA|=c^n|A|$.
- **Eksamensbelegg:** Fast delpunkt i matrisealgebra-oppgaven. **Fast «twist» siden 2019: determinant kun for kvadratiske** — for ikke-kvadratiske skal det påpekes eksplisitt. Settene konstrueres så ethvert cofaktor-valg krever ≥2 cofaktorer. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Determinant (determinant) — **kun definert for kvadratiske matriser**. $2\times2$: $ad-bc$. Cofaktorutvikling (cofactor expansion) langs en rad/kolonne; **velg raden/kolonnen med flest nuller** for å spare arbeid. Radoperasjoner til triangulær form (determinant = produkt av diagonalen). Regnesnarveier fra vedlegget: **$|A'A| = |A|^2$**, **$|A^2| = |A|^2$**, **$|cA| = c^n|A|$** (for $n\times n$), $|AB| = |A||B|$, $|A'| = |A|$. Tolkning: $|A| \ne 0 \Leftrightarrow A$ invertibel. **Warning:** determinant av ikke-kvadratisk matrise finnes ikke — påpek det eksplisitt når oppgaven frister med det.
- **Oppgavesjangre:** MA. Mønstereksempel: «Regn ut $|A|$ for $A=\begin{pmatrix}2&0&1\\ -1&3&0\\ 4&0&2\end{pmatrix}$ ved cofaktorutvikling langs kolonnen med flest nuller. Bruk deretter en regel fra vedlegget til å finne $|A^2|$ og $|3A|$ uten videre utregning.»
- **Typiske feil:** Forsøke determinant av ikke-kvadratisk matrise; utvikle langs en tung rad (unødig arbeid); regne $|A^2|$ ved å multiplisere ut $A^2$; glemme eksponenten $n$ i $|cA|=c^n|A|$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.4: Invers matrise: Gauss–Jordan (påbudt) vs. adjungat

- **id:** `econ3120-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-1-3`
- **Kapitteltype:** teori
- **description:** De to inversmetodene — Gauss–Jordan på $(A\,|\,I)$ og adjungatformelen — og den strenge regelen om at påbudt metode gir null poeng for alternativet.
- **Eksamensbelegg:** Fast delpunkt. **Metodelydighet i sin reneste form:** når oppgaven påbyr **Gauss-eliminasjon** ($AX=I$) gis **null poeng for adjungat-metoden**, og omvendt. Verifikasjon av oppgitt invers gjøres ved $AA^{-1}=I$. Prioritet: **PERFEKT**. **Inneholder «Sensor krever denne metoden»-boks.**
- **Innholdskontrakt:** Invers (inverse) $A^{-1}$: $AA^{-1}=A^{-1}A=I$; eksisterer $\Leftrightarrow |A|\ne 0$. **Metode 1 — Gauss–Jordan:** radreduser $(A\,|\,I)$ til $(I\,|\,A^{-1})$; føringsstandard med radoperasjoner merket over `∼`. **Metode 2 — adjungat/cofaktor:** $A^{-1} = \frac{1}{|A|}C'$ der $C$ er cofaktormatrisen (adjungatet er $C'$). Standardresultat: **$|C| = d^{n-1}$ når $|A| = d$**. **Verifikasjon:** regn $AA^{-1}=I$ (billig sikring). **«Sensor krever denne metoden»-boks:** «by Gauss elimination» → bruk KUN Gauss; ellers står du fritt, men verifiser. Regel $(AB)^{-1} = B^{-1}A^{-1}$.
- **Oppgavesjangre:** MA. Mønstereksempel: «Finn $A^{-1}$ for $A=\begin{pmatrix}1&2\\3&5\end{pmatrix}$ **ved Gauss–Jordan** (radoperasjoner skal vises). Verifiser svaret ved å regne $AA^{-1}$.»
- **Typiske feil:** Bruke adjungat der Gauss er påbudt (null poeng); regnefeil i radoperasjonene; glemme $1/|A|$-faktoren i adjungatformelen; transponere cofaktormatrisen feil vei.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.5: Cramérs regel

- **id:** `econ3120-1-5` · **number:** 1.5 · **estimatedMinutes:** 40 · **prerequisites:** `econ3120-1-4`
- **Kapitteltype:** teori
- **description:** $x_i = |A_i|/|A|$ — den ryddige metoden når bare én ukjent trengs, og en påbudt metode når oppgaven ber om den.
- **Eksamensbelegg:** Brukes når den **påbys** (f.eks. «vis at $x_2 = 0$ ved Cramérs regel») — da null poeng for andre metoder — og som ryddig vei når bare én derivert/ukjent trengs (brukt i H2024/H2025-fasitene, også i komparativ statikk, Del 3). Prioritet: **PERFEKT**. **Inneholder «Sensor krever denne metoden»-boks.**
- **Innholdskontrakt:** Cramérs regel (Cramer's rule): for $Ax = b$ med $|A|\ne 0$ er $x_i = |A_i|/|A|$, der $A_i$ er $A$ med kolonne $i$ erstattet av $b$. **Krav: $|A|\ne 0$** (regelen gjelder bare entydig løsning). Fordelen: én ukjent kan finnes uten å løse hele systemet — ryddig når oppgaven spør etter én størrelse. **«Sensor krever denne metoden»-boks:** «using Cramer's rule» / «show that $x_2=0$» → bruk KUN Cramér. Kobling fremover: samme regel løser det differensierte Jacobi-systemet for én partiellderivert (kap. 3.3).
- **Oppgavesjangre:** MA (+ bro til CS). Mønstereksempel: «Bruk **Cramérs regel** til å vise at $x_2 = 0$ i systemet $\begin{cases}2x_1 + x_2 - x_3 = 4\\ x_1 - x_2 = 1\\ 3x_1 + 2x_3 = 9\end{cases}$ (anta $|A|\ne 0$).»
- **Typiske feil:** Bruke Cramér når $|A|=0$ (ugyldig); erstatte feil kolonne; bruke annen metode når Cramér er påbudt (null poeng); regnefeil i teller-determinanten.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 1.6: Antall løsninger av $Ax=b$ og parametriske systemer

- **id:** `econ3120-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-1-5`
- **Kapitteltype:** teori
- **description:** Kronjuvelen i LA-oppgaven: ingen / nøyaktig én / uendelig mange løsninger som funksjon av en parameter — med de to farligste fellene i hele emnet.
- **Eksamensbelegg:** Det tyngste og mest karakterskillende delpunktet i matrisealgebra-oppgaven (100 %). Rommer **sensors mest fryktede feil**: den «stubbornly widespread false equivalence» mellom $\det\ne 0$ og *eksistens*. Prioritet: **PERFEKT**. **Inneholder to felle-warnings.**
- **Innholdskontrakt:** Antall løsninger av $Ax=b$: **$|A|\ne 0 \Leftrightarrow$ entydig løsning** (unik). **$|A| = 0 \Rightarrow$ behandle grensetilfellet separat** med radoperasjoner → enten ingen løsning eller uendelig mange. Parametrisk system: $A$ (og/eller $b$) avhenger av en parameter ($t, w, h, q, s, a$); finn parameterverdiene der $|A|=0$, og analyser hver separat. Føringsstandard: `∼` betyr **«ekvivalent likningssystem»** (ikke radekvivalens); det er tillatt å **slette en nullrad**. Raden $(0\,0\,0\,|\,1)$ betyr $0=1$ (ingen løsning); $(0\,1\,0\,|\,0)$ betyr $x_2 = 0$ (helt annet). **Felle-warning 1 (det≠0-feilslutningen):** $\det = 0$ betyr *ikke* «ingen løsning» — det kan bety uendelig mange; og $\det\ne 0$ garanterer *entydighet*, ikke bare eksistens. Ikke bland «determinanten er null» med «parameteren er null». **Felle-warning 2 (aldri del på parameteren):** skalér ALDRI en rad med $1/t$ — divisjon med mulig null er en grov feil; «skyv $t$ inn i fremtiden» (multipliser opp i stedet, eller behandle $t=0$ som eget tilfelle).
- **Oppgavesjangre:** MA. Mønstereksempel: «For hvilke verdier av $t$ har systemet $\begin{cases} t x_1 + x_2 = 1\\ x_1 + t x_2 = t\end{cases}$ ingen, nøyaktig én, eller uendelig mange løsninger? Behandl grensetilfellene $|A|=0$ separat med radoperasjoner — ikke del på $t$.»
- **Typiske feil:** Slutte fra $\det = 0$ til «ingen løsning» (#4 — sensors mest utbredte feilslutning); dele en rad på $t$ (#5); blande $(0\,0\,0\,|\,1)$ og $(0\,1\,0\,|\,0)$; forveksle determinant-null med parameter-null.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.7: Drill: matrisealgebra-oppgaven fra ende til annen

- **id:** `econ3120-1-7` · **number:** 1.7 · **estimatedMinutes:** 80 · **prerequisites:** `econ3120-1-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele den faste LA-oppgaven: veldefinerthet/produkt → determinant → invers (påbudt metode) → antall løsninger med parameter.
- **Eksamensbelegg:** Dekker MA (100 %) i full bredde — den ene oppgaven som garantert kommer. Målet er å automatisere de billige mekaniske poengene og sikre grensetilfellet det=0 (toppsjikt-markør). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for LA-oppgaven: 1) avgjør veldefinerthet + orden for hvert forespurt produkt (elementvis? nei); 2) determinant — kvadratisk? velg lettest cofaktor / bruk $|A^2|=|A|^2$; 3) invers — sjekk hvilken metode som er *påbudt*, ellers adjungat + verifiser $AA^{-1}=I$; 4) antall løsninger — finn $|A|=0$-verdiene, behandl hver separat, aldri del på parameter, husk det≠0-feilslutningen. **Gjennomregnet eksamenscase med sensor-margnotater** (hva gir uttelling: rett metode valgt, ikke-kvadratisk påpekt, grensetilfellet behandlet, ingen $1/t$-skalering). **10–14 oppgaver** som roterer alle delpunktene med nyskrevne matriser og parametre; minst tre med påbudt metode (Gauss / Cramér), minst tre med parametrisk grensetilfelle.
- **Oppgavesjangre:** MA. Mønstereksempel (full oppgave): «(a) Avgjør hvilke av $AB, BA, A'A$ som er veldefinerte. (b) Finn $|A|$ og $|A^2|$. (c) Finn $A^{-1}$ **ved Gauss**. (d) For hvilke $w$ har $Ax=b$ entydig løsning, og hva skjer ellers?»
- **Typiske feil:** Hele §0.2-katalogen: brutt påbudt metode (#1), elementvis produkt (#2), determinant av ikke-kvadratisk (#3), det≠0-feilslutning (#4), $1/t$-skalering (#5), uforenklede uttrykk som sløser tid (#15).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A produkt/orden/veldefinerthet + transponert/symmetri, sjanger MA; 1.B determinant med snarveier + ikke-kvadratisk-twist, MA; 1.C invers ved påbudt metode + Cramér, MA; 1.D parametrisk system med grensetilfellet det=0 på eksamensnivå, MA).

---

### Del 2 — Flervariabel kalkulus, konveksitet og Hessian *(prioritet: KUNNE — bærer tilstrekkelighet)*

#### Kapittel 2.1: Partiellderiverte, differensial og gradient (oppfriskning)

- **id:** `econ3120-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på ECON1100 (partiellderivasjon) — skrevet som klartekst her (forgjengerboka ikke bygget). Elementær derivasjon: [Derivasjonsregler](/bok/r1/r1-4-1), [Kjerneregelen](/bok/r1/r1-4-3), [Produktregelen og kvotientregelen](/bok/r1/r1-4-4) fra R1.
- **description:** Det flervariable derivasjonsapparatet resten av boka forutsetter: partiellderiverte, andreordens og kryssderivert, differensial og gradient — i emnets notasjon.
- **Eksamensbelegg:** Fundamentet under komparativ statikk (Del 3), konveksitet (2.2) og optimering (Del 5). Selv ikke direkte testet som egen oppgave, men **kjerneregel-feil på ledd som $3(KL)^{1/3}$** er en gjenganger. Prioritet: **KUNNE** (verktøykapittel).
- **Innholdskontrakt:** Partiellderivert (partial derivative) $f'_x$, $f'_y$ — deriver mht. én variabel, hold resten konstant; $\partial/\partial x$ likestilt. Andreordens $f''_{xx}$, $f''_{yy}$ og **kryssderivert** $f''_{xy}$; Youngs teorem ($f''_{xy}=f''_{yx}$). Kjerneregelen på $e^{g}$, $\ln(g)$, $(g)^n$ og sammensatte ledd. **Differensial (differential/total differential)** $df = f'_x\,dx + f'_y\,dy$ — **begge ledd med**. Gradient som vektor av partiellderiverte. Lineær approksimasjon $f(x)\approx f(x_0) + \sum f'_i\,\Delta x_i$ (utdypes i 3.3). Notasjonen speiler eksamenssettene og vedlegget.
- **Oppgavesjangre:** Verktøy (bro til CS/HE/LG). Mønstereksempel: «La $f(x,y) = 3(xy)^{1/3} + \ln(x^2+y)$. Finn $f'_x$, $f'_y$, $f''_{xy}$ og sett opp differensialet $df$.»
- **Typiske feil:** Glemme kjerneregelen på ledd som $(xy)^{1/3}$; utelate ett ledd i differensialet; behandle den andre variabelen som variabel; anta $f''_{xy}\ne f''_{yx}$.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 2.2: Konvekse og konkave funksjoner, Hessian og definitthet

- **id:** `econ3120-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-2-1`
- **Kapitteltype:** teori
- **description:** Hessian-determinanten $D = f''_{xx}f''_{yy}-(f''_{xy})^2$, konveks/konkav-klassifisering og «sum av konkave er konkav» — verktøyet som gir tilstrekkelighet i optimering.
- **Eksamensbelegg:** Konveksitet/Hessian i ~67 % av settene, **nesten alltid innbakt i optimeringsoppgaven** (vis at Lagrange-punkt er optimum). Sensor krever konkavitet for å konkludere globalt maksimum. Prioritet: **KUNNE** (men bærer tilstrekkelighet i den 100 %-tunge Del 5). **Egenverdier nevnes KUN som bakgrunn her.**
- **Innholdskontrakt:** Konveks (convex) / konkav (concave) funksjon. Hessian-matrisen og **Hessian-determinanten** $D = f''_{xx}f''_{yy} - (f''_{xy})^2$: $D>0, f''_{xx}>0$ → (lokalt) konveks/min; $D>0, f''_{xx}<0$ → konkav/maks; $D<0$ → sadel. **«Sum av konkave funksjoner er konkav»** — sensors foretrukne raske argument. Negativ-definitt Hessian ($f''_{xx}<0$ og $D>0$) ⟹ streng konkavitet ⟹ globalt maksimum. **Bakgrunnsnote (KJENNE, kort):** definitthet kan også avgjøres via egenverdienes fortegn — men **egenverdier testes aldri i dette emnet (0/15)**, så bruk Hessian-determinanten; noten finnes kun for å knytte begrepene sammen. Broen fremover: dette gir tilstrekkelighet i fri optimering (2.3) og betinget optimering (Del 5).
- **Oppgavesjangre:** HE (som delpunkt i LG/SA). Mønstereksempel: «Vis at $f(x,y) = -2x^2 - 3y^2 + 2xy + 5x$ er konkav ved å regne ut Hessian-determinanten, og forklar hvorfor et stasjonærpunkt da er globalt maksimum.»
- **Typiske feil:** Konkludere maks/min uten å sjekke $f''_{xx}$-fortegnet i tillegg til $D$; regne $D$ med feil kryssledd; påstå «sum av konkave» uten at hvert ledd faktisk er konkavt; forsøke egenverdier (unødig, ikke pensum).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: Stasjonærpunkt, andrederiverttest og sadelpunkt

- **id:** `econ3120-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-2-2`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Andrederiverte og vendepunkter](/bok/s2/s2-3-2) og [Optimering](/bok/s2/s2-3-3) fra S2 (endimensjonalt).
- **description:** Fri optimering i to variabler: verifiser stasjonaritet FØRST, klassifiser med Hessian, og gjenkjenn sadelpunkt via $f''_{xx}f''_{yy} - (f''_{xy})^2 < 0$.
- **Eksamensbelegg:** Sadelpunkt/andrederiverttest i ~33 % av settene (roterer inn som femte oppgave eller delpunkt). **Fast «did you remember»-felle:** verifiser at punktet er stasjonært ($f'_x = f'_y = 0$) FØR andrederiverttesten. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Stasjonærpunkt (stationary point): $f'_x = f'_y = 0$ — **finn dem først**. Andrederiverttest (second-derivative test) via Hessian-determinanten fra 2.2: $D>0, f''_{xx}<0$ → lokalt maks; $D>0, f''_{xx}>0$ → lokalt min; **$D<0$ → sadelpunkt (saddle point)** uansett fortegnet på $f''_{xy}$; $D=0$ → inkonklusiv. Globalt vs. lokalt: negativ-/positiv-definitt Hessian *overalt* gir globalt ekstremum. **Warning:** en andrederiverttest på et punkt som *ikke* er stasjonært er meningsløs — verifiser $f'_x=f'_y=0$ først.
- **Oppgavesjangre:** SA. Mønstereksempel: «Finn og klassifiser de stasjonære punktene til $f(x,y) = x^3 - 3xy + y^2$. Vis at $f'_x = f'_y = 0$ i hvert kandidatpunkt før du bruker andrederiverttesten.»
- **Typiske feil:** Bruke andrederiverttest uten å verifisere stasjonaritet (#12); regnefeil i $D$; konkludere fra $D=0$ (inkonklusiv); blande lokalt og globalt.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 2:** 4 prøver (2.A partiellderiverte, andreordens, kryssderivert og differensial, sjanger CS/verktøy; 2.B konveksitet/konkavitet via Hessian-determinant + «sum av konkave», HE; 2.C stasjonærpunkt + andrederiverttest + sadelpunkt, SA; 2.D blandet konveksitet/klassifisering på eksamensnivå, HE/SA).

---

### Del 3 — Implisitt derivasjon og komparativ statikk *(prioritet: PERFEKT — 73 %, oftest Oppgave 1)*

#### Kapittel 3.1: Implisitt derivasjon av én likning; nivåkurvehelning

- **id:** `econ3120-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-2-1`
- **Kapitteltype:** teori
- **description:** Å derivere en likning som definerer $y$ implisitt som funksjon av $x$, og nivåkurvens helning $y'(x) = -F'_x/F'_y$ — oppvarmingen til systemtilfellet.
- **Eksamensbelegg:** Byggesteinen under komparativ statikk (73 %). Implisitt funksjonsteorem forutsetter Jacobi-determinant $\ne 0$. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Implisitt derivasjon (implicit differentiation): når $F(x,y)=c$ definerer $y=y(x)$, gir kjerneregelen $F'_x + F'_y\,y' = 0$, altså **nivåkurvens helning $y'(x) = -F'_x/F'_y$** (krever $F'_y\ne 0$). Implisitt funksjonsteorem (implicit function theorem): systemet definerer deriverbare funksjoner lokalt når **Jacobi-determinanten $\ne 0$**. Andrederivert av implisitt funksjon (krumning) ved å derivere helningsuttrykket. Broen: samme prinsipp på et *system* av likninger i Del 3.2–3.3.
- **Oppgavesjangre:** CS. Mønstereksempel: «Likningen $x^2 y + e^{y} = 3$ definerer $y$ som funksjon av $x$ nær $(1, 0)$. Finn $y'(1)$ ved implisitt derivasjon.»
- **Typiske feil:** Glemme kjerneregelen på $y$-ledd (behandle $y$ som konstant); feil fortegn i $-F'_x/F'_y$; dele på $F'_y$ når den kan være null uten å sjekke.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 3.2: Differensier systemet ledd for ledd (Metode A)

- **id:** `econ3120-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-3-1`
- **Kapitteltype:** teori
- **description:** Vedleggets oppskrift: ta differensialet ledd for ledd i hver likning, sett inn tallpunktet, nullstill konstante differensialer, og løs det lineære systemet — uten å eliminere en variabel.
- **Eksamensbelegg:** Selve Oppgave 1-metoden i 73 % av settene. **«Bruk det differensierte systemet»** er en påbudt metode: eliminerer du en variabel fra utgangssystemet, gis null poeng. Prioritet: **PERFEKT**. **Inneholder «Sensor krever denne metoden»-boks.**
- **Innholdskontrakt:** Et likningssystem antas å bestemme funksjoner (f.eks. $x(s,t), y(s,t)$) rundt et gitt punkt. **Metode A — differensialer ledd for ledd:** ta differensialet av hver likning ledd for ledd (det er **eksplisitt OK å ikke samle koeffisienter**); **sett inn tallpunktet FØR du løser** (ellers blir systemet ulineært); nullstill differensialene til variabler som holdes konstant (f.eks. $dt=0$ når kun $\partial y/\partial s$ spørres); løs det lineære systemet for de resterende differensialene. **«Sensor krever denne metoden»-boks:** «differentiate the system» / «use the differentiated system» → **ikke eliminer** en variabel fra utgangssystemet. Vis kjerneregelen på sammensatte ledd som $3(KL)^{1/3}$ eksplisitt.
- **Oppgavesjangre:** CS. Mønstereksempel: «Systemet $\begin{cases} xu + y = 5\\ x + u y = 4\end{cases}$ definerer $u(x,y)$ og $y$... (velg to endogene). Differensier systemet ledd for ledd, sett inn $(x,y)=(2,1)$, og finn $\partial u/\partial x$ ved å holde det som skal holdes konstant.»
- **Typiske feil:** Eliminere en variabel der «bruk det differensierte systemet» er påbudt (null poeng); løse før tallpunktet settes inn (ulineært); nullstille feil differensial (#: $dp$ i stedet for $dt$); glemme kjerneregelen på sammensatte ledd.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.3: Cramér/Jacobi på det differensierte systemet; lineær approksimasjon (Metode B)

- **id:** `econ3120-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-3-2`, `econ3120-1-5`
- **Kapitteltype:** teori
- **description:** Skriv det differensierte systemet som $A\,[dx,dy]' = [\dots]$ og løs med Cramér når bare én derivert trengs — pluss lineær approksimasjon $x(t_1)\approx x(t_0)+dx$.
- **Eksamensbelegg:** Den ryddige komparativ-statikk-metoden brukt i H2024/H2025-fasitene, særlig når bare én derivert spørres. Lineær approksimasjon er fast siste delpunkt. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Metode B — matriseform + Cramér:** skriv det differensierte systemet som $A\begin{pmatrix}dx\\ dy\end{pmatrix} = \begin{pmatrix}\dots\\ \dots\end{pmatrix}$ (Jacobi-matrisen $A$), og løs med **Cramér** (kap. 1.5) for den ene deriverte som trengs — ryddigere enn full eliminasjon. Krever Jacobi-determinant $\ne 0$ (implisitt funksjonsteorem). **Lineær approksimasjon (linear approximation):** $x(t_1) \approx x(t_0) + dx$ med $dt = t_1 - t_0$; alle ledd med. Sammenlign Metode A og B på samme oppgave; begge godtas med mindre én er påbudt.
- **Oppgavesjangre:** CS. Mønstereksempel: «Bruk det differensierte systemet fra forrige oppgave. Skriv det på matriseform og finn $\partial y/\partial s$ i punktet ved Cramérs regel. Bruk deretter lineær approksimasjon til å anslå $y$ når $s$ øker fra $2$ til $2{,}1$.»
- **Typiske feil:** Sette opp Jacobi-matrisen med feil koeffisienter; bruke Cramér når Jacobi-determinanten er null; utelate ledd i lineær approksimasjon; blande hvilken variabel som holdes konstant.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 3.4: Homogenitet og Eulers teorem

- **id:** `econ3120-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3120-2-1`
- **Kapitteltype:** teori
- **description:** Avgjør homogenitet via Eulers teorem $x f'_x + y f'_y = k f$, ikke via definisjonen — og hva grad av en partiellderivert blir.
- **Eksamensbelegg:** Homogenitet/Euler i ~33 % av settene (stigende: H2015, H2022, H2023, H2024), ofte innbakt. **Avgjøres via Euler, ikke definisjonen** (sensorsignatur). Prioritet: **KUNNE**.
- **Innholdskontrakt:** Homogen (homogeneous) av grad $k$: $f(tx, ty) = t^k f(x,y)$. **Eulers teorem (Euler's theorem):** for homogen $f$ av grad $k$ gjelder $x f'_x + y f'_y = k f$. **Sensors metode:** avgjør homogenitet ved å sjekke om $x f'_x + y f'_y$ er en skalering ($k\cdot f$) av $f$; **vis at venstresiden IKKE er $k f$ for å konkludere ikke-homogen**. Grad av en partiellderivert = $k - 1$. Homotetisk (homothetic) = monoton transformasjon av homogen funksjon (enhver homogen er homotetisk). Kort utledning av Euler (deriver $f(tx,ty)=t^k f$ mht. $t$, sett $t=1$) — en av utledningene eksamen kan kreve aktivt.
- **Oppgavesjangre:** HG. Mønstereksempel: «Er $f(x,y) = x^2 + xy + y^3$ homogen? Avgjør ved Eulers teorem (regn ut $x f'_x + y f'_y$ og sammenlign med $k f$), ikke ved definisjonen.»
- **Typiske feil:** Bruke definisjonen der Euler er raskere/forventet; feil grad; blande homogen og homotetisk; regnefeil i $x f'_x + y f'_y$.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 3.5: Drill: komparativ statikk (Oppgave 1-sjangeren)

- **id:** `econ3120-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ3120-3-3`, `econ3120-3-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på Oppgave 1: differensier systemet → sett inn punkt → løs for én derivert (Cramér) → lineær approksimasjon, med den påbudte metoden i sentrum.
- **Eksamensbelegg:** Dekker CS (73 %, nesten alltid Oppgave 1) i full bredde. Automatiserer den påbudte «differensier systemet»-metoden og Cramér-veien til én derivert. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for Oppgave 1: 1) skriv systemet, identifiser endogene/eksogene variabler; 2) differensier ledd for ledd (ikke eliminer); 3) sett inn tallpunktet FØR løsning; 4) nullstill differensialer til konstante variabler; 5) løs (Cramér når bare én derivert trengs); 6) lineær approksimasjon til slutt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling: differensiert systemet som påbudt, punkt satt inn før løsning, riktig differensial nullstilt, én derivert via Cramér). **10–14 oppgaver** med nyskrevne systemer (produsent-, likevekts-, nyttekontekst); minst tre der «bruk det differensierte systemet» er eksplisitt påbudt.
- **Oppgavesjangre:** CS. Mønstereksempel (full Oppg. 1): «(a) Vis at systemet definerer $K(p,t), L(p,t)$ nær punktet. (b) Differensier systemet. (c) Finn $\partial K/\partial t$ ved Cramér. (d) Anslå $K$ når $t$ øker med $0{,}2$.»
- **Typiske feil:** Eliminere variabel (brutt påbudt metode); løse før innsetting; nullstille feil differensial; glemme kjerneregel på sammensatte ledd; hoppe over lineær-approksimasjon-delpunktet.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A implisitt derivasjon av én likning + nivåkurvehelning, sjanger CS; 3.B differensier systemet ledd for ledd med påbudt metode, CS; 3.C Cramér/Jacobi + lineær approksimasjon, CS; 3.D homogenitet via Euler + full komparativ statikk på eksamensnivå, CS/HG).

---

### Del 4 — Grenser, l'Hôpital og eksistenssetninger *(prioritet: KUNNE)*

#### Kapittel 4.1: Grenser og l'Hôpitals regel

- **id:** `econ3120-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-2-1`
- **Kapitteltype:** teori
- **description:** l'Hôpital på $0/0$ og $\infty/\infty$ — der du MÅ påvise at formen gjelder før du bruker regelen, ellers trekk.
- **Eksamensbelegg:** Grenser/l'Hôpital i ~67 % av settene (svært hyppig 2015–2021, synkende 2022–2025, ofte egen oppgave med parameter). **Man må eksplisitt sjekke og hevde $0/0$ eller $\infty/\infty$ før bruk** — ellers trekk. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Grense (limit); ubestemte former $0/0$, $\infty/\infty$. **l'Hôpitals regel (l'Hôpital's rule):** $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ — men **KUN etter at $0/0$ eller $\infty/\infty$ er påvist**; gjenta til formen løses opp. Ensidige grenser ($t\to 0^+$), grenser mot $\infty$. **Warning:** behandle aldri $\infty$ som et vanlig tall. Ofte kombinert med parameterfunksjon $h(t)$ der begge grenser ($t\to 0^+$ og $t\to +\infty$) spørres, som ledd til skjæringssetning/stasjonaritet (kap. 4.2).
- **Oppgavesjangre:** LH. Mønstereksempel: «Regn ut $\lim_{x\to 0}\dfrac{e^{2x} - 1 - 2x}{x^2}$. Påvis at formen er $0/0$ før hver anvendelse av l'Hôpital.»
- **Typiske feil:** Bruke l'Hôpital uten å påvise $0/0$/$\infty/\infty$ (#7); derivere brøken som helhet (kvotientregel) i stedet for teller og nevner hver for seg; behandle $\infty$ som tall; stoppe før formen er løst opp.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.2: Vekstordener, skjæringssetningen og ekstremverdisetningen

- **id:** `econ3120-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-4-1`
- **Kapitteltype:** teori
- **description:** «Eksponentiell slår polynom slår logaritme», og de to eksistenssetningene som beviser at et nullpunkt/ekstremum finnes uten å regne det ut — der eksistens ikke er det samme som entydighet.
- **Eksamensbelegg:** Skjæringssetningen ~33 %, ekstremverdisetningen ~53 %. **Sensor advarer gjentatt: ekstremverdisetningen gir eksistens, IKKE entydighet.** «Do not attempt to find it!» signaliserer at eksplisitt utregning ikke fører fram. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Vekstordener: eksponentiell vs. polynom vs. logaritme — «eksp slår polynom» kan brukes, men **misbrukes ofte** (særlig med to eksponentialledd eller $\ln$ i eksponenten); vær presis. **Skjæringssetningen (intermediate value theorem, IVT):** en kontinuerlig funksjon som skifter fortegn på $[a,b]$ har et nullpunkt der — brukes til å vise at et nullpunkt/stasjonærpunkt *finnes* uten å regne det ut. **Ekstremverdisetningen (extreme value theorem):** en kontinuerlig funksjon på en lukket og begrenset (kompakt) mengde oppnår maks og min. **Warning:** ekstremverdisetningen gir kun **eksistens**, ikke entydighet — den er ikke tilstrekkelig alene for å konkludere unikt optimum (kobling til tilstrekkelighet i Del 5).
- **Oppgavesjangre:** EV. Mønstereksempel: «La $g(t) = t^3 + t - 5$. Vis ved skjæringssetningen at $g$ har et nullpunkt i $(1,2)$ — ikke prøv å regne det ut. Forklar hvorfor ekstremverdisetningen alene ikke ville gitt entydighet.»
- **Typiske feil:** Forsøke å regne ut nullpunktet i stedet for å bruke IVT; misbruke «eksp slår polynom» med to eksponentialledd; påberope ekstremverdisetningen som *tilstrekkelig* for entydighet (#10); glemme kontinuitet-/kompakthetsforutsetningen.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A l'Hôpital med påvisning av ubestemt form, sjanger LH; 4.B vekstordener og parametergrenser $t\to 0^+/\infty$, LH; 4.C skjæringssetning + ekstremverdisetning (eksistens vs. entydighet), EV; 4.D blandet grense/eksistens på eksamensnivå, LH/EV).

---

### Del 5 — Betinget optimering: Lagrange *(prioritet: PERFEKT — 100 %, kjernen i emnet)*

#### Kapittel 5.1: Lagrange-metoden: oppsett og fullt utskrevne FOC

- **id:** `econ3120-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-2-2`
- **Kapitteltype:** teori
- **description:** Skriv Lagrange-funksjonen eksplisitt og alle førsteordensbetingelsene fullt derivert — for bart $0 = L'_x$ gir trekk.
- **Eksamensbelegg:** Kjernen i faget (100 %, ofte to oppgaver). **Bart $0 = L'_x$ er ikke tilstrekkelig (trekk);** Lagrange-betingelsene inkluderer *stasjonaritet av Lagrangefunksjonen*, ikke bare admissibilitet (H2024-feil: mange sjekket bare bibetingelsene). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Betinget optimering (constrained optimization) med likhetsbibetingelse. **Lagrange-funksjonen (Lagrangian)** $L = f - \sum_j \lambda_j (g_j - b_j)$. **Førsteordensbetingelser (first-order conditions, FOC):** alle $\partial L/\partial x_i = 0$ **fullt derivert** + bibetingelsene selv. Poeng: skriv ut hver FOC ferdig derivert (ikke bare $0 = L'_x$). Tolkning: i optimum tangerer nivåkurvene (MRS = prisforhold). Vis oppsettet på et rent to-variabel nyttemaks/kostnadsmin-problem; eliminer $\lambda$ for å finne optimum. Notasjon: $\lambda$ multiplikator, $x^*$ optimum.
- **Oppgavesjangre:** LG. Mønstereksempel: «Maksimer $f(x,y) = x^{1/2}y^{1/2}$ under $2x + 3y = 24$. Sett opp Lagrange-funksjonen, skriv ut alle FOC fullt derivert, og finn $x^*, y^*, \lambda^*$.»
- **Typiske feil:** Skrive $0 = L'_x$ i stedet for fullt utskrevne FOC (#8); glemme bibetingelsen som en av betingelsene; feil fortegn i $L$; regnefeil i eliminasjon av $\lambda$.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 5.2: Test et gitt punkt; multiplikatorverdier; vis at $\lambda\ne 0$

- **id:** `econ3120-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-5-1`
- **Kapitteltype:** teori
- **description:** Å sette inn et gitt punkt, regne ut multiplikatorverdiene og argumentere for at en multiplikator må være forskjellig fra null.
- **Eksamensbelegg:** «Test et gitt punkt» er svært vanlig i optimeringsoppgaven; **betingelsene feiler hvis en multiplikator blir negativ** (i KT-stoffet) eller inkonsistent. «Vis at en multiplikator må være $\ne 0$» er vanlig. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Gitt et kandidatpunkt: sett inn i FOC-ene, løs for multiplikatorverdiene $\lambda_j$. Tolkning av verdiene (skyggepris-forvarsel, kap. 5.5). **Argument for at $\lambda\ne 0$:** vis at antakelsen «alle multiplikatorer $= 0$» bryter en FOC eller admissibiliteten — derfor må minst én være $\ne 0$. Ved flere bibetingelser: avgjør hvilke som er aktive. Kobling: i Kuhn–Tucker-stoffet (5.6) feiler betingelsene hvis en multiplikator blir negativ.
- **Oppgavesjangre:** LG. Mønstereksempel: «I problemet fra 5.1, sett inn kandidatpunktet $(x,y)=(6,4)$ og finn $\lambda$. Vis deretter at $\lambda$ ikke kan være null ved å anta det motsatte og utlede en motsigelse fra FOC-ene.»
- **Typiske feil:** Sjekke bare admissibilitet (bibetingelsene), ikke selve Lagrange-betingelsene (#9); regnefeil i multiplikatorverdien; glemme å teste motsigelsen når $\lambda\ne 0$ skal vises.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.3: Tilstrekkelighet via konkavitet; entydighet ⟹ optimalitet

- **id:** `econ3120-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-5-1`, `econ3120-2-2`
- **Kapitteltype:** teori
- **description:** Å vise konkavitet (sum av konkave eller negativ-definitt Hessian) for å konkludere at Lagrange-punktet er et globalt maksimum — for førsteordensbetingelser alene beviser ingenting.
- **Eksamensbelegg:** Tilstrekkelighet er svært vanlig i optimeringsoppgaven (~67 % via konveksitet/Hessian). **Sensoradvarsel gjentatt: ekstremverdisetningen gir eksistens, ikke entydighet;** konkavitet trengs for globalt optimum. Prioritet: **PERFEKT**. **Inneholder felle-warning.**
- **Innholdskontrakt:** Tilstrekkelighet (sufficiency): et Lagrange-punkt er et globalt maksimum **dersom målfunksjonen (eller Lagrangefunksjonen i optimum) er konkav** — vist via **«sum av konkave er konkav»** eller negativ-definitt Hessian ($f''_{xx}<0$, $f''_{xx}f''_{yy}-(f''_{xy})^2>0$). Da er punktet **unikt og optimalt**. **Felle-warning:** ekstremverdisetningen gir kun *eksistens* av maks/min på kompakt mengde — den beviser **ikke** entydighet eller at et bestemt punkt er optimum. Merk: emnet bruker **ordinær konkavitet**, ikke rand-Hessian (bordered Hessian er ikke observert i arkivet).
- **Oppgavesjangre:** LG/HE. Mønstereksempel: «Vis at målfunksjonen i 5.1 er konkav på det admissible området, og konkluder at $(x^*, y^*)$ er et globalt maksimum. Forklar hvorfor det ikke holder å bare henvise til ekstremverdisetningen.»
- **Typiske feil:** Konkludere optimum fra FOC alene uten tilstrekkelighet; påberope ekstremverdisetningen som tilstrekkelig (#10); bruke rand-Hessian (ikke pensum); feil i konkavitetsargumentet.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.4: Flere bibetingelser og tre variabler

- **id:** `econ3120-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3120-5-1`
- **Kapitteltype:** teori
- **description:** Det nye regimet (H2024→): to likhetsbibetingelser krever nå tre variabler, med én multiplikator per bibetingelse.
- **Eksamensbelegg:** Fra H2024, siden Kuhn–Tucker (ulikheter) er ute, testes to bibetingelser med **tre variabler + to multiplikatorer**. Prioritet: **PERFEKT** (nytt regime).
- **Innholdskontrakt:** Lagrange med flere likhetsbibetingelser: $L = f - \lambda_1(g_1 - b_1) - \lambda_2(g_2 - b_2)$, med $x, y, z$ og $\lambda_1, \lambda_2$. Alle $\partial L/\partial x_i = 0$ + begge bibetingelsene → løs det (typisk lineære/symmetriske) systemet. Tilstrekkelighet som i 5.3. Poeng: én multiplikator per bibetingelse; skriv alle FOC fullt derivert. Broen til skyggepris (5.5): $\partial V/\partial b_j = \lambda_j$ for hver bibetingelse.
- **Oppgavesjangre:** LG. Mønstereksempel: «Optimer $f(x,y,z) = xyz$ under $x+y+z = 12$ og $x - z = 0$. Sett opp $L$ med to multiplikatorer, skriv ut alle FOC, og finn optimum.»
- **Typiske feil:** For få multiplikatorer (én for to bibetingelser); glemme en av bibetingelsene; regnefeil i det utvidede systemet; ikke sjekke tilstrekkelighet.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 5.5: Omhyllingsteoremet og skyggepris

- **id:** `econ3120-5-5` · **number:** 5.5 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-5-2`
- **Kapitteltype:** teori
- **description:** $V'(a)$ ved å partiellderivere Lagrangefunksjonen mht. parameteren og sette inn optimum — og at multiplikatoren er skyggeprisen $\partial V/\partial b_j = \lambda_j$.
- **Eksamensbelegg:** Omhyllingsteorem/skyggepris i 47 %, fast som siste deloppgave i optimeringsoppgaven. Sensor (H2024): masterstudenter *bør* vite at $\lambda$ er skyggeprisen — «yet very few pointed it out». Prioritet: **PERFEKT** (toppsjikt-differensiator). **Inneholder felle-warning.**
- **Innholdskontrakt:** **Omhyllingsteoremet (envelope theorem):** $V'(a) = \partial L/\partial a$ evaluert i optimum — **ikke** ved å derivere gjennom $x^*(a)$ (de leddene forsvinner i optimum). **Skyggepris (shadow price):** for en bibetingelses høyreside er $\partial V/\partial b_j = \lambda_j$; førsteordens tilnærming $\Delta V \approx \lambda_j\,\Delta b_j$. **Felle-warning:** når parameteren står **både** i mål og bibetingelse, må begge bidrag med — men leddene er ofte konstruert så det ene forsvinner i optimum; sjekk begge før du konkluderer. Poeng: dette er en av utledningene eksamen kan kreve aktivt, og skyggepris-tolkningen skiller toppsjiktet.
- **Oppgavesjangre:** OM. Mønstereksempel: «I nyttemaksproblemet fra 5.1, la budsjettet være $m$ (høyresiden). Bruk omhyllingsteoremet til å finne $\partial V/\partial m$, tolk $\lambda$ som skyggeprisen på inntekt, og anslå økningen i maksimal nytte når $m$ øker med 2.»
- **Typiske feil:** Derivere gjennom $x^*(a)$ i stedet for å bruke omhyllingsteoremet; glemme skyggepris-tolkningen (#11); overse ett bidrag når parameteren står to steder; feil fortegn.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.6: Kuhn–Tucker *(bakgrunn — eldre pensum, utgått H2024)*

- **id:** `econ3120-5-6` · **number:** 5.6 · **estimatedMinutes:** 40 · **prerequisites:** `econ3120-5-2`
- **Kapitteltype:** teori (bakgrunn)
- **description:** Ulikhetsbibetingelser med komplementær slakkhet — kjerneoppgave t.o.m. 2023, men TATT UT av pensum fra H2024. Bør kjennes til for eldre sett og robust forståelse.
- **Eksamensbelegg:** **Kuhn–Tucker var 13/15 (87 %) t.o.m. 2023, men er FJERNET fra pensum H2024** (0/2 i 2024–2025). Presenteres som **bakgrunn / «bør kjenne til»**. Prioritet: **BAKGRUNN**. **Eksamensvinkel-blokken SKAL si eksplisitt at temaet er utgått fra pensum H2024** og at det kun tas med for eldre sett og forståelse.
- **Innholdskontrakt:** Kuhn–Tucker-betingelser (Kuhn–Tucker conditions) for ulikhetsbibetingelser: skriv $g(x,y) \le b$ (som læreboka); FOC på Lagrangefunksjonen; **komplementær slakkhet (complementary slackness):** $\lambda \ge 0$ og $\lambda = 0$ hvis bibetingelsen er slakk (ikke-bindende). Alternative $\le/\ge/=$-formuleringer og «admissibility»-varianter godtas. «Test et gitt punkt»: avgjør hvilke bibetingelser som er aktive; **betingelsene feiler hvis en multiplikator blir negativ**. Merk tydelig: fra H2024 erstattet av Lagrange med flere variabler/likhetsbibetingelser (5.4). Hold kapitlet kompakt.
- **Oppgavesjangre:** KT *(bakgrunn)*. Mønstereksempel: «(Eldre pensum.) Maksimer $f(x,y) = xy$ under $x + y \le 10$, $x\ge 0$, $y\ge 0$. Sett opp Kuhn–Tucker-betingelsene med komplementær slakkhet og avgjør om bibetingelsen er bindende.»
- **Typiske feil:** Feil fortegn/retning på $\lambda \ge 0$; glemme komplementær slakkhet; behandle temaet som kjernepensum (det er utgått); anta en bibetingelse er bindende uten å teste.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 5.7: Drill: Lagrange-storoppgaven

- **id:** `econ3120-5-7` · **number:** 5.7 · **estimatedMinutes:** 80 · **prerequisites:** `econ3120-5-5`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele optimeringsoppgaven: oppsett + fullt utskrevne FOC → multiplikatorverdier → konkavitet-tilstrekkelighet → omhyllingsteorem/skyggepris.
- **Eksamensbelegg:** Dekker LG (100 %) i full bredde — den garanterte kjerneoppgaven, ofte to per sett. Automatiserer den femtrinns-strukturen sensor belønner. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for optimeringsoppgaven: 1) skriv $L$ eksplisitt; 2) alle FOC fullt derivert + bibetingelser; 3) løs (eliminer $\lambda$ / test gitt punkt / finn multiplikatorverdier); 4) **tilstrekkelighet via konkavitet** (globalt maksimum); 5) omhyllingsteorem/skyggepris som siste punkt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling: FOC fullt utskrevet, ikke bare admissibilitet sjekket, konkavitet vist, $\lambda$ tolket som skyggepris). **10–15 oppgaver** på eksamensnivå: nyttemaks, kostnadsmin, tre variabler + to bibetingelser (nytt regime), noen med omhyllingsteorem; minst to der en multiplikator må vises $\ne 0$.
- **Oppgavesjangre:** LG (+ HE, OM). Mønstereksempel (full oppgave): «(a) Sett opp $L$ og FOC. (b) Finn $x^*, y^*, \lambda^*$. (c) Vis at løsningen er et globalt maksimum. (d) Bruk omhyllingsteoremet til å finne $\partial V/\partial b$ og tolk $\lambda$.»
- **Typiske feil:** Hele Lagrange-feilkatalogen: $0=L'_x$ (#8), bare admissibilitet (#9), manglende tilstrekkelighet (#10), glemt skyggepris (#11), uforenklede uttrykk (#15).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A oppsett + fullt utskrevne FOC + eliminer $\lambda$, sjanger LG; 5.B test av punkt + multiplikatorverdier + $\lambda\ne 0$, LG; 5.C tilstrekkelighet via konkavitet + tre variabler/to bibetingelser, LG/HE; 5.D full Lagrange med omhyllingsteorem/skyggepris på eksamensnivå, LG/OM).

---

### Del 6 — Integrasjon *(prioritet: PERFEKT — ~100 %, redusert etter 2024)*

#### Kapittel 6.1: Delvis integrasjon

- **id:** `econ3120-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Delvis integrasjon](/bok/r2/r2-3-2) fra R2 (elementær teknikk).
- **description:** $\int u v' = uv - \int u'v$ med fornuftig valg av $u$/$v'$ — og at $\int \ln y\,dy = y\ln y - y + C$ forventes kjent.
- **Eksamensbelegg:** Fast gjenganger i integrasjonsoppgaven (~100 %). Flere sett **påbyr delvis integrasjon og forbyr substitusjon**. Prioritet: **PERFEKT**. **Inneholder «Sensor krever denne metoden»-boks.**
- **Innholdskontrakt:** Delvis integrasjon (integration by parts): $\int u v'\,dx = uv - \int u'v\,dx$. Valg av $u$/$v'$: typisk $\ln$-ledd som $u$ (deriveres bort), polynom/eksponential som $v'$. Standardresultat forventet kjent: **$\int \ln y\,dy = y\ln y - y + C$**. Gjentatt delvis integrasjon for $x^2 e^x$-typer. **«Sensor krever denne metoden»-boks:** når oppgaven ber om delvis integrasjon (eller forbyr substitusjon), gir substitusjon null poeng. Antiderivasjon som verifikasjon: når oppgaven ber om å vise en antiderivert **«ved antiderivasjon»**, gis **null poeng for å derivere høyresiden**.
- **Oppgavesjangre:** IN. Mønstereksempel: «Regn ut $\int x\ln x\,dx$ ved delvis integrasjon (velg $u = \ln x$). Vis alle ledd.»
- **Typiske feil:** Velge $u$/$v'$ feil vei (integralet blir verre); glemme fortegn i $-\int u'v$; bruke substitusjon der delvis er påbudt (#1); derivere høyresiden når «vis ved antiderivasjon» kreves (#13).
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 6.2: Uegentlige integraler og konvergenssjekk

- **id:** `econ3120-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-6-1`, `econ3120-4-1`
- **Kapitteltype:** teori
- **description:** Uegentlige integraler behandlet som grenser — der en pol *inne* i området må sjekkes for konvergens, og en fast felle er at integralet faktisk divergerer.
- **Eksamensbelegg:** Fast delpunkt i integrasjonsoppgaven. **Konvergens sjekkes når en pol ligger inne i integrasjonsområdet** — en fast fellesoppgave er at integralet **divergerer** (f.eks. pol i $x=e$ inne i $[e/2, 2e]$). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Uegentlig integral (improper integral): grense mot $\infty$ eller mot en pol. $\int_a^\infty f\,dx = \lim_{b\to\infty}\int_a^b f\,dx$. Pol i endepunkt: grense mot polen. **Pol inne i området:** splitt integralet og sjekk **hver del**; hvis én del divergerer, divergerer hele. **Warning:** ikke integrer «rett gjennom» en pol som ligger inne i området — sjekk konvergens først; en gjenganger er at integralet divergerer. Kobling til grenser (kap. 4.1).
- **Oppgavesjangre:** IN. Mønstereksempel: «Avgjør om $\int_1^\infty \dfrac{1}{x^2}\,dx$ og $\int_0^2 \dfrac{1}{(x-1)^2}\,dx$ konvergerer. Behandl hver som en grense; splitt det andre om polen.»
- **Typiske feil:** Integrere rett gjennom en indre pol uten å splitte; konkludere konvergens uten grensesjekk; regnefeil i grensen; behandle $\infty$ som tall.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Ekspandering, Leibniz' regel og substitusjon *(substitusjon: bakgrunn)*

- **id:** `econ3120-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ3120-6-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Substitusjon bygger på [Variabelskifte (substitusjon)](/bok/r2/r2-3-1) fra R2 (bakgrunnsteknikk).
- **description:** Etter 2024 løses integraler uten substitusjon (ekspander polynom); Leibniz' regel (derivasjon under integraltegnet) er et nyere tillegg; substitusjon vises som bakgrunn.
- **Eksamensbelegg:** **Substitusjon er utfaset fra pensum H2024** — nyere sett ber om å **ekspandere polynom** i stedet. **Leibniz' regel** er et nyere tillegg (H2025). Prioritet: **PERFEKT** for ekspandering/Leibniz, **BAKGRUNN** for substitusjon. **Eksamensvinkel-blokken merker substitusjon utgått.**
- **Innholdskontrakt:** **Ekspandering:** når integranden er et produkt/potens av polynomer, multipliser ut og integrer ledd for ledd — den påbudte veien fra 2024 (i stedet for substitusjon). **Leibniz' regel / derivasjon under integraltegnet (differentiation under the integral sign):** $\frac{d}{dt}\int f(t,x)\,dx = \int \frac{\partial}{\partial t}f(t,x)\,dx$ (f.eks. $\frac{d}{dt}\int e^{tx}\,dx = \int x e^{tx}\,dx$). **Bakgrunn (utgått) — substitusjon (change of variable):** $\int f(u(t))u'(t)\,dt = \int f(u)\,du$; ved bestemte integraler gjør det ubestemte først og sett inn grensene til slutt. Merk eksplisitt at substitusjon er utgått fra pensum 2024 og kun tas med for eldre sett.
- **Oppgavesjangre:** IN (+ SU som bakgrunn). Mønstereksempel: «Regn ut $\int_0^1 (2x+1)^2\,dx$ ved å **ekspandere** parentesen (ikke ved substitusjon), og integrer ledd for ledd.»
- **Typiske feil:** Bruke substitusjon der oppgaven ber om ekspandering (utgått metode, kan gi null poeng); regnefeil i ekspanderingen; feil på grensene; blande Leibniz' regel med kjerneregelen.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (6.A delvis integrasjon + $\int\ln y\,dy$ + «vis ved antiderivasjon», sjanger IN; 6.B uegentlige integraler med konvergens/divergens, IN; 6.C ekspandering og Leibniz' regel, IN; 6.D blandet integrasjon på eksamensnivå med påbudt/forbudt metode, IN).

---

### Del 7 — Differensiallikninger av 1. orden *(prioritet: PERFEKT — ~93 %, redusert etter 2024)*

#### Kapittel 7.1: Lineære 1.-ordens differensiallikninger

- **id:** `econ3120-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ3120-6-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Lineære differensiallikninger](/bok/s2/s2-2-3) fra S2 (elementær innføring).
- **description:** $\dot x + a(t)x = b(t)$ løst med integrerende faktor, den kjente partikulærformen for konstante koeffisienter, og ubestemte koeffisienter.
- **Eksamensbelegg:** Differensiallikning 1. orden i ~93 %, oftest sammen med integrasjon i samme oppgave. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Lineær 1.-ordens differensiallikning (linear first-order ODE): $\dot x + a(t)x = b(t)$. **Integrerende faktor (integrating factor)** $e^{A(t)}$ med $A(t)=\int a\,dt$: $\frac{d}{dt}(x e^{A}) = e^{A}b$; generell løsning = partikulær + $Ce^{-A}$. For **konstante $a, b$**: kjent partikulærform $x(t) = (x_0 - b/a)e^{-a(t-t_0)} + b/a$. **Ubestemte koeffisienter (undetermined coefficients):** gjett partikulærløsning på kildeleddets form (f.eks. $q\cdot 2^{-t} + h$) og bestem konstantene ved innsetting. Initialbetingelse bestemmer $C$.
- **Oppgavesjangre:** DE. Mønstereksempel: «Løs $\dot x + 2x = 6$, $x(0) = 1$, ved integrerende faktor, og skriv løsningen $x(t)$ eksplisitt.»
- **Typiske feil:** Feil integrerende faktor (glemme fortegn i $A$); glemme den homogene delen $Ce^{-A}$; feil bestemmelse av $C$ fra initialbetingelsen; regnefeil i ubestemte koeffisienter.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.2: Separable differensiallikninger og konstantløsning-sjekken

- **id:** `econ3120-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-7-1`
- **Kapitteltype:** teori
- **Forkunnskaper/kryssbok:** Bygger på [Separable differensiallikninger](/bok/s2/s2-2-2) fra S2.
- **description:** $\dot x = f(t)g(x)$ løst ved separasjon — der du ALLTID må sjekke for konstantløsning før du deler, ellers begår du «a grave sin in this course».
- **Eksamensbelegg:** Separabel ODE er fast alternativ. **Det kritiske metodesignalet: sjekk ALLTID for konstantløsning(er) før du deler.** Å dele uten å sjekke nullpunkter kalles eksplisitt **«a grave sin in this course».** Prioritet: **PERFEKT**. **Inneholder felle-warning.**
- **Innholdskontrakt:** Separabel differensiallikning (separable ODE): $\dot x = f(t)g(x)$. **Metode: 1) sjekk konstantløsning(er) FØRST** — nullstill $g(x)=0$; hver rot gir en konstantløsning $x\equiv c$. 2) Deretter (for $g(x)\ne 0$) separer: $\int \frac{dx}{g(x)} = \int f(t)\,dt$. 3) Løs **algebraisk for $x$ uttrykt kun ved $t$** (ikke la stå implisitt). Fortegnet inne i $|\dots|$ avgjøres ut fra hvilken side av konstantløsningen initialpunktet ligger. **Felle-warning:** å dele på $g(x)$ uten å sjekke nullpunkter er «a grave sin in this course» — divisjon med noe som kan være null. Begge metoder (lineær/separabel) godtas for en likning som kan skrives på begge former.
- **Oppgavesjangre:** DE. Mønstereksempel: «Løs $\dot x = t x^2$, $x(0) = 1$. Sjekk først om $x\equiv 0$ er en konstantløsning, del deretter, og skriv $x(t)$ eksplisitt.»
- **Typiske feil:** Dele på $g(x)$ uten å sjekke konstantløsning (#6 — «a grave sin»); la løsningen stå implisitt; feil fortegn i $|\dots|$; glemme initialbetingelsen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 7.3: Drill: integrasjon + differensiallikning (Oppgave 5-sjangeren)

- **id:** `econ3120-7-3` · **number:** 7.3 · **estimatedMinutes:** 80 · **prerequisites:** `econ3120-7-2`, `econ3120-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den kombinerte integrasjon-og-differensiallikning-oppgaven: delvis/uegentlig integrasjon → lineær eller separabel ODE med konstantløsning-sjekken.
- **Eksamensbelegg:** Dekker IN + DE (~100 %/~93 %), som oftest opptrer i **samme oppgave** (prognosert Oppgave 5). Automatiserer metodevalg og konstantløsning-sjekken. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift:** for integrasjon — identifiser om delvis integrasjon / ekspandering er påbudt, sjekk konvergens ved pol; for ODE — lineær (integrerende faktor) eller separabel (konstantløsning FØRST), løs eksplisitt for $x(t)$. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling: påbudt integrasjonsmetode fulgt, konvergens sjekket, konstantløsning sjekket før deling, eksplisitt $x(t)$). **10–14 oppgaver** som kombinerer integrasjon og ODE med nyskrevne uttrykk; minst tre separable der konstantløsning må sjekkes, minst to uegentlige integraler med konvergensspørsmål.
- **Oppgavesjangre:** IN + DE. Mønstereksempel (full oppgave): «(a) Regn ut $\int_1^\infty x e^{-x}\,dx$ ved delvis integrasjon. (b) Løs $\dot x = 3x(1-x)$, $x(0)=\tfrac12$; sjekk konstantløsninger $x\equiv 0$ og $x\equiv 1$ først.»
- **Typiske feil:** Brutt påbudt integrasjonsmetode (#1); manglende konvergenssjekk; hoppet konstantløsning (#6); implisitt løsning; uforenklet svar (#15).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A lineær ODE med integrerende faktor + ubestemte koeffisienter, sjanger DE; 7.B separabel ODE med konstantløsning-sjekken, DE; 7.C kombinert integrasjon + ODE, IN/DE; 7.D full Oppgave 5 på eksamensnivå med påbudt metode, IN/DE).

---

### Del 8 — Differenslikninger *(nytt pensum 2024 — full behandling)*

#### Kapittel 8.1: Førsteordens differenslikninger: generell løsning

- **id:** `econ3120-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-7-1`
- **Kapitteltype:** teori
- **description:** $x_{t+1} = a x_t + b(t)$ — generell løsning som homogen ($C a^t$) pluss partikulær, og hvorfor differenslikninger er det diskrete motstykket til differensiallikninger.
- **Eksamensbelegg:** **NY H2024 (P5).** Differenslikninger har tynt eksempelgrunnlag (1/15) men er nytt pensum og forventes å komme igjen. Prioritet: **NY — full behandling**. **Eksamensvinkel-blokken merker temaet nytt fra H2024.**
- **Innholdskontrakt:** Differenslikning (difference equation) av 1. orden: $x_{t+1} = a x_t + b(t)$. **Homogen løsning:** $x_t^h = C a^t$. **Generell løsning:** $x_t = C a^t + p_t$ (homogen + partikulær). For konstant $b$: likevekt $x^* = b/(1-a)$ (når $a\ne 1$), generell $x_t = (x_0 - x^*)a^t + x^*$. Stabilitet: $|a|<1$ → konvergens mot likevekt; $|a|>1$ → divergens; $a=-1$ → oscillasjon. Diskret analogi til lineær ODE (kap. 7.1) — pek på likheten og forskjellen ($a^t$ i stedet for $e^{-at}$).
- **Oppgavesjangre:** DL. Mønstereksempel: «Finn den generelle løsningen av $x_{t+1} = 3x_t + 4$, og bestem løsningen med $x_0 = 1$. Er likevekten stabil?»
- **Typiske feil:** Feil likevekt $b/(1-a)$ (fortegn/nevner); blande $a^t$ og $e^{at}$; glemme homogen del $C a^t$; feil stabilitetskonklusjon.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.2: Ubestemte koeffisienter, partikulærløsning og initialbetingelse

- **id:** `econ3120-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3120-8-1`
- **Kapitteltype:** teori
- **description:** Partikulærløsning ved ubestemte koeffisienter på kildeleddets form, og bestemmelse av konstanten fra en initialbetingelse.
- **Eksamensbelegg:** **NY H2024.** Ubestemte koeffisienter for partikulærløsning på kildeleddets form (f.eks. $(\alpha t + \beta)(-1)^t$, $\alpha\cdot e^t + \beta\cdot(\pi/2)^t$). Prioritet: **NY — full behandling**.
- **Innholdskontrakt:** **Ubestemte koeffisienter for differenslikninger:** gjett partikulærløsning $p_t$ på kildeleddets $b(t)$-form (polynom → polynom; $(-1)^t$-ledd → $(\alpha t+\beta)(-1)^t$; eksponential → tilsvarende eksponential), sett inn og bestem koeffisientene. Legg til homogen $C a^t$; bruk initialbetingelsen til å finne $C$ til slutt. Resonansregel kort (når kildeleddet matcher $a^t$, multipliser med $t$). Verifiser løsningen ved innsetting.
- **Oppgavesjangre:** DL. Mønstereksempel: «Løs $x_{t+1} = 2x_t + 3\cdot 4^t$, $x_0 = 2$, ved ubestemte koeffisienter (prøv $p_t = A\cdot 4^t$), og skriv $x_t$ eksplisitt.»
- **Typiske feil:** Feil ansatz for partikulærløsningen; bestemme $C$ før partikulærløsningen er lagt til; glemme resonanstilfellet; ikke verifisere ved innsetting.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 8:** 4 prøver (8.A generell + homogen løsning + stabilitet, sjanger DL; 8.B ubestemte koeffisienter for partikulærløsning, DL; 8.C initialbetingelse og eksplisitt $x_t$, DL; 8.D full differenslikning på eksamensnivå, DL).

---

### Del 9 — Dynamisk programmering og Bellman *(nytt pensum 2024 — full behandling)*

#### Kapittel 9.1: Endelig-horisont dynamisk optimering og baklengs induksjon

- **id:** `econ3120-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ3120-8-1`
- **Kapitteltype:** teori
- **description:** Endelig-horisont-problemer med tilstandslikning og periodenytte, løst ved baklengs induksjon — regn verdifunksjonen fra siste periode og bakover.
- **Eksamensbelegg:** **NY H2024 (P4–P5), 2/2 siden 2024.** Dynamisk programmering forventes som fast Oppgave 4 fremover. **Sensor advarer mot å hoppe over selve oppsettet.** Prioritet: **NY — full behandling**. **Eksamensvinkel-blokken merker temaet nytt fra H2024.**
- **Innholdskontrakt:** Dynamisk programmering (dynamic programming), endelig horisont. Tilstandsvariabel (state) $x_t$, kontrollvariabel (control) $c_t$, tilstandslikning $x_{t+1} = h(x_t, c_t)$ (f.eks. $x_{t+1} = 2x_t - c_t$), og en sum av periodekostnader/-nytte. **Baklengs induksjon (backward induction):** regn verdifunksjonen $v_T$ i siste periode, deretter $v_{T-1}, \dots, v_0$ bakover; i hver periode maksimér/minimér mht. kontrollvariabelen. Diskonteringsfaktor $\beta = 1/(1+d)$. Fortegn og diskontering håndteres nøye. Vis hele oppsettet steg for steg (sensor straffer å hoppe over det).
- **Oppgavesjangre:** DP. Mønstereksempel: «En beholdning følger $x_{t+1} = x_t - c_t$ over $t=0,1,2$ med nytte $\sum \sqrt{c_t}$ og $x_0 = 9$, $x_3 = 0$. Finn optimal $c_t$ ved baklengs induksjon; regn $v_2, v_1, v_0$.»
- **Typiske feil:** Hoppe over Bellman-/verdifunksjonsoppsettet (#14); fortegnsfeil eller feil diskonteringsfaktor i baklengs induksjon; kjerneregel-feil i differensiering av kontrollvariabelen; optimere forlengs i stedet for baklengs.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.2: Bellman-likningen og optimal stopping

- **id:** `econ3120-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ3120-9-1`
- **Kapitteltype:** teori
- **description:** Bellman-likningen som rekursiv verdifunksjon, og optimal stopping — velg «stopp» vs. «fortsett» ved å sammenligne verdiene.
- **Eksamensbelegg:** **NY H2025 (P2): optimal stopping / Bellman.** Prioritet: **NY — full behandling**.
- **Innholdskontrakt:** **Bellman-likningen (Bellman equation):** $v_t(x) = \operatorname{opt}_c\{\text{avkastning}(x,c) + \beta\,v_{t+1}(x_{t+1})\}$ under tilstandslikningen $x_{t+1} = h(x_t, c_t)$; løs rekursivt. **Optimal stopping:** i hver tilstand sammenlign verdien av å «stoppe» (umiddelbar gevinst) mot å «fortsette» (forventet/diskontert fremtidig verdi via Bellman); velg det største. Stoppe-regelen som terskel. Kobling til intertemporal økonomi (sparing/investering, optimal stopping). Vis oppsettet eksplisitt før løsning.
- **Oppgavesjangre:** DP. Mønstereksempel: «Et tilbud gir gevinst $g_t = 10 - t$ hvis du stopper i periode $t$ ($t=0,1,2,3$), med diskontering $\beta = 0{,}9$. Sett opp Bellman-likningen og finn den optimale stoppe-regelen ved å sammenligne stopp- og fortsett-verdiene.»
- **Typiske feil:** Ikke sette opp Bellman-likningen (#14); sammenligne feil verdier i stopp/fortsett; glemme diskontering; regne forlengs.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (9.A tilstandslikning + baklengs induksjon i endelig horisont, sjanger DP; 9.B verdifunksjon $v_t$ regnet bakover, DP; 9.C Bellman-likning + optimal stopping, DP; 9.D full dynamisk optimering på eksamensnivå med diskontering, DP).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Metodelydighet-stordrillen: påbudte metoder og null-divisjon-fellene

- **id:** `econ3120-10-1` · **number:** 10.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–9
- **Kapitteltype:** drill
- **description:** Den kryssgående drillen på fagets dyreste regel: gjenkjenn hvilken metode som er påbudt, hva som ville gitt null poeng, og de to null-divisjon-fellene.
- **Eksamensbelegg:** Metodelydighet er **sensors mest gjennomgående krav og den enkeltregelen som koster flest poeng** («no score for other methods, even with the right answer»). Dette er en egen drillsjanger der *metodevalget er hele leveransen*. Prioritet: **PERFEKT** (kryssgående; plassert etter at alle temaer er lært).
- **Innholdskontrakt:** Malen «identifiser påbudt metode → følg den til punkt og prikke → sjekk at ingen null-divisjon skjer» demonstreres, deretter drillbank som dekker ALLE påbudte-metode-signalene fra analysen, hver med henvisning til kapitlet: 1) **Gauss-eliminasjon for invers** (→ 1.4), 2) **Cramér der påbudt** (→ 1.5), 3) **«bruk det differensierte systemet»** i komparativ statikk (→ 3.2), 4) **integrasjon uten substitusjon / ekspandering** (→ 6.3), 5) **«vis ved antiderivasjon»** — ikke deriver høyresiden (→ 6.1), 6) **konstantløsning FØR deling** i separabel ODE — «a grave sin» (→ 7.2), 7) **aldri del på parameteren $1/t$** i parametrisk system (→ 1.6), 8) **det≠0-feilslutningen** — $\det\ne0$ er entydighet, ikke bare eksistens; $\det=0$ er ikke «ingen løsning» (→ 1.6), 9) **fullt utskrevne FOC**, ikke $0=L'_x$ (→ 5.1), 10) **tilstrekkelighet via konkavitet**, ikke ekstremverdisetningen alene (→ 5.3), 11) **påvis l'Hôpital-anvendbarhet** før bruk (→ 4.1), 12) **skyggepris-tolkning av $\lambda$** (→ 5.5). For hver: hvordan gjenkjenne signalet, hva den påbudte metoden er, og hva som ville gitt null/trekk. **20+ drilloppgaver** (blandet metodekrav) der studenten både løser og eksplisitt navngir den påbudte metoden.
- **Oppgavesjangre:** Kryssgående (MA, CS, LG, IN, DE). Mønstereksempel: «For hver oppgave: (i) hvilken metode er påbudt, (ii) løs med den, (iii) hva ville gitt null poeng? (a) «Finn $A^{-1}$ by Gauss elimination.» (b) «Solve $\dot x = tx^2$.» (c) «Show that $x_2=0$ using Cramer's rule.» (d) «Compute $\int(x+1)^2 dx$ without substitution.»»
- **Typiske feil:** Hele §0.2-katalogen samlet: brutt påbudt metode (#1), det≠0-feilslutning (#4), $1/t$-skalering (#5), hoppet konstantløsning (#6), l'Hôpital uten påvisning (#7), $0=L'_x$ (#8), manglende tilstrekkelighet (#10), derivert høyresiden ved «vis ved antiderivasjon» (#13).
- **Quiz: 18 · Flashcards: 40** (én flashcard per påbudt-metode-signal + null-divisjon-felle + gjenkjenningsmønstre — den store repetisjonsbanken)

#### Kapittel 10.2: Øvingseksamen 1: nytt regime (H2024→) med vedlegg

- **id:** `econ3120-10-2` · **number:** 10.2 · **estimatedMinutes:** 240 · **prerequisites:** `econ3120-10-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers, 5-oppgavers engelsk-format sett etter H2024–H2025-malen (nytt regime), med medfølgende «Rules and formulas»-vedlegg.
- **Eksamensbelegg/miks:** Speiler et typisk sett i det nye regimet (~13 jevnt vektede items). **Oppgave 1 (CS):** implisitt derivasjon av likningssystem — differensier systemet, sett inn punkt, finn én derivert (Cramér), lineær approksimasjon. **Oppgave 2 (MA):** matrisealgebra — produkter/orden, determinant (m/ikke-kvadratisk-twist), invers ved påbudt metode, antall løsninger som funksjon av parameter (grensetilfellet det=0). **Oppgave 3 (LG):** betinget optimering med Lagrange (likhetsbibetingelser, tre variabler + to bibetingelser), konkavitet-tilstrekkelighet, omhyllingsteorem/skyggepris til slutt. **Oppgave 4 (DP):** dynamisk programmering — baklengs induksjon eller optimal stopping. **Oppgave 5 (IN + DE/DL):** integrasjon (delvis + uegentlig m/konvergens) + differensiallikning eller differenslikning. Et komprimert **«Rules and formulas»-vedlegg** legges ved i eget `collapsible` (grenser, l'Hôpital, derivasjon, Lagrange, integrasjon, ODE, lineær algebra, determinanter, Cramér, homogenitet). Alle oppgaver nyskrevne med pene tall. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (figurbeskrivelser i ord), med `tip`-notat om vekting og tidsbudsjett (~48 min/oppgave).
- **Oppgavesjangre:** CS, MA, LG, DP, IN, DE/DL.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2: nytt regime, annen miks

- **id:** `econ3120-10-3` · **number:** 10.3 · **estimatedMinutes:** 240 · **prerequisites:** `econ3120-10-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett i nytt regime med en annen søyle-miks: parametrisk lineært system som åpning, l'Hôpital/eksistens som femte oppgave.
- **Eksamensbelegg/miks:** **Oppgave 1 (MA):** parametrisk lineært system — antall løsninger som funksjon av parameter, grensetilfellet det=0 (aldri del på parameter), Gauss ved påbudt metode. **Oppgave 2 (CS):** implisitt derivasjon/komparativ statikk med homogenitet/Euler innbakt. **Oppgave 3 (LG):** Lagrange-kostnadsmin med konkavitet-tilstrekkelighet og «vis at $\lambda\ne 0$». **Oppgave 4 (DL/DP):** differenslikning (generell + partikulær, ubestemte koeffisienter) og/eller Bellman. **Oppgave 5 (LH + EV):** grenser/l'Hôpital med parameter + skjæringssetning/ekstremverdisetning (eksistens vs. entydighet). Vedlegg i eget `collapsible`. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (~48 min/oppgave).
- **Oppgavesjangre:** MA, CS, HG, LG, DL/DP, LH, EV.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3: eldre regime (≤2023) med Kuhn–Tucker og substitusjon

- **id:** `econ3120-10-4` · **number:** 10.4 · **estimatedMinutes:** 240 · **prerequisites:** `econ3120-10-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett kalibrert mot det eldre regimet (2015–2023) for bredde — inkluderer Kuhn–Tucker og integrasjon ved substitusjon (bakgrunnsstoff), for studenter som møter eldre øvingssett.
- **Eksamensbelegg/miks:** Speiler et typisk sett før pensumskiftet (bakgrunn/bredde). **Oppgave 1 (CS):** implisitt derivasjon/komparativ statikk. **Oppgave 2 (MA):** matrisealgebra med determinant/invers/antall løsninger. **Oppgave 3 (KT, *bakgrunn*):** betinget optimering med **Kuhn–Tucker** (ulikhetsbibetingelser, komplementær slakkhet, test av punkt der en multiplikator kan bli negativ) — merket eksplisitt som utgått pensum. **Oppgave 4 (LH):** grenser/l'Hôpital som egen oppgave med parameterfunksjon $h(t)$ og begge grenser ($t\to 0^+/\infty$). **Oppgave 5 (IN + DE):** integrasjon der **substitusjon** var påbudt metode (*bakgrunn*) + separabel ODE med konstantløsning. Vedlegg i eget `collapsible`. **`warning`-notat øverst:** dette settet inneholder utgått pensum (KT + substitusjon) og er tatt med for bredde/eldre sett — det nye regimet (10.2–10.3) er prioritert. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (~48 min/oppgave).
- **Oppgavesjangre:** CS, MA, KT *(bakgrunn)*, LH, IN, SU *(bakgrunn)*, DE.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 10:** ingen egne prøver (delen består av metodelydighet-stordrillen + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 12+14 = **26** | 14+18 = **32** | 0 |
| 1 | 1.1–1.7 | 18+14+18+18+12+20+14 = **114** | 16+14+18+18+12+20+8 = **106** | 4 |
| 2 | 2.1–2.3 | 16+18+16 = **50** | 14+18+14 = **46** | 4 |
| 3 | 3.1–3.5 | 16+18+16+14+14 = **78** | 14+16+14+14+8 = **66** | 4 |
| 4 | 4.1–4.2 | 16+16 = **32** | 16+16 = **32** | 4 |
| 5 | 5.1–5.7 | 18+16+16+14+16+12+14 = **106** | 16+14+16+12+16+14+8 = **96** | 4 |
| 6 | 6.1–6.3 | 16+16+14 = **46** | 14+16+14 = **44** | 4 |
| 7 | 7.1–7.3 | 16+18+14 = **48** | 16+16+8 = **40** | 4 |
| 8 | 8.1–8.2 | 16+16 = **32** | 16+14 = **30** | 4 |
| 9 | 9.1–9.2 | 16+16 = **32** | 16+16 = **32** | 4 |
| 10 | 10.1–10.4 | 18+5+5+5 = **33** | 40+0+0+0 = **40** | 0 (3 øvingseksamener) |
| **Sum** | **40 kap.** | **597 ≥ 500 ✓** | **564 ≥ 500 ✓** | **36 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: de fire PERFEKT-søylene (Del 1 matrisealgebra 114,
Del 5 Lagrange 106, Del 3 komparativ statikk 78, Del 6+7 integrasjon/ODE 94) står for
392 av 597 quiz — de temaene som faktisk bærer eksamenspoengene. **Tettheten (597/564
over 500-gulvet) reflekterer fagets bredde (40 kapitler, PRODUKSJONSLOYPE: «>32 kapitler →
høyere sum») og den *prosedyre-/regeltunge* naturen: hver påbudt metode, hvert
sensorsignal og hver felle er en egen flashcard, og hvert metodevalg har mange
quiz-varianter.** De to nye 2024-delene (8, 9) er fullt kvotert (64 quiz / 62 flashcards)
tross tynt historisk eksempelgrunnlag, som pensumskiftet krever.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Hver del 1–9 får ett prøvekapittel (`econ3120-<del>-prove`, chapterNumber `<del>.P`) med
fire prøver. Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med
løsningsforslag (A-besvarelse med utregning/begrunnelse synlig — begrunn alt) og
poengfordeling. Prøvene per del er spesifisert i «Prøve-kvote Del N»-linjene over.
Oppsummert dekker de:

- **Del 1** (MA): produkt/orden → determinant → invers/Cramér påbudt → parametrisk det=0.
- **Del 2** (CS/HE/SA): partiell/differensial → konveksitet/Hessian → sadelpunkt → blandet.
- **Del 3** (CS/HG): implisitt én likning → differensier systemet → Cramér/approksimasjon → homogenitet + full.
- **Del 4** (LH/EV): l'Hôpital → vekstordener/parametergrenser → eksistens vs. entydighet → blandet.
- **Del 5** (LG/OM): oppsett+FOC → multiplikatorverdier/$\lambda\ne0$ → tilstrekkelighet/3 var. → omhyllingsteorem.
- **Del 6** (IN): delvis/antiderivasjon → uegentlig/konvergens → ekspandering/Leibniz → blandet påbudt metode.
- **Del 7** (DE): lineær/integrerende faktor → separabel/konstantløsning → kombinert IN+DE → full Oppg. 5.
- **Del 8** (DL): generell+stabilitet → ubestemte koeffisienter → initialbetingelse → full.
- **Del 9** (DP): baklengs induksjon → verdifunksjon → Bellman/optimal stopping → full m/diskontering.

### Øvingseksamener (3 komplette sett — kap. 10.2–10.4)

| Sett | Mal den speiler | Storoppgave-miks |
|---|---|---|
| Øvingseksamen 1 (10.2) | Nytt regime (H2024–H2025) | CS + MA + Lagrange (3 var./omhyllingsteorem) + dynamisk programmering + integrasjon/ODE/differenslikning |
| Øvingseksamen 2 (10.3) | Nytt regime, annen miks | Parametrisk MA + CS/homogenitet + Lagrange-kostnadsmin + differenslikning/Bellman + l'Hôpital/eksistens |
| Øvingseksamen 3 (10.4) | Eldre regime (≤2023, bredde) | CS + MA + **Kuhn–Tucker** *(bakgrunn)* + l'Hôpital + integrasjon m/**substitusjon** *(bakgrunn)* + separabel ODE |

Alle tre har fast format: 4 timer, engelsk, 5 oppgaver med jevnt vektede bokstav-items, og
et medfølgende **«Rules and formulas»-vedlegg** i eget `collapsible` (boka trener på å
*bruke* vedlegget). Til sammen dekker øvingseksamenene sjangrene MA, CS, LG, HE, LH, EV,
OM, HG, IN, DE, DL, DP minst én gang, pluss bakgrunnssjangrene KT og SU i sett 3.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 timer, engelsk, Inspera, 4–5 oppgaver med jevnt
   vektede items, «Rules and formulas»-vedlegg), to-kode-rammeverket (ECON3120 = ECON4120,
   samme eksamen), formathistorikken (≤V2018 åpen bok / 3 t; H2019→ 4 t engelsk m/vedlegg;
   H2020 COVID-unntak) og prognosen for neste sett (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til fire lesenivåer: **perfekt**
   (matrisealgebra, Lagrange, komparativ statikk, integrasjon/ODE), **kunne** (konveksitet/
   Hessian, grenser/l'Hôpital, eksistenssetninger, omhyllingsteorem, homogenitet,
   sadelpunkt), **nytt pensum, dekk fullt** (differenslikninger, dynamisk programmering/
   Bellman), **bør kjenne til** (Kuhn–Tucker + substitusjon, utgått 2024). Med fraværsbildet
   uttrykt (egenverdier/diagonalisering = 0/15, la ligge).
3. **Pensumskiftet 2024** — egen seksjon: Kuhn–Tucker + substitusjon UT, differenslikninger
   + dynamisk programmering INN; hva det betyr for hvordan man leser gamle vs. nye sett.
4. **Sjangerguiden** — oppgavetypene MA, CS, LG, IN, DE, DL, DP med løsningsoppskriftene fra
   drillkapitlene (1.7, 3.5, 5.7, 7.3, 10.1) i kortform: LA-oppgave-algoritmen
   (veldefinerthet → determinant → invers påbudt → antall løsninger), komparativ
   statikk-algoritmen (differensier → sett inn punkt → Cramér → approksimasjon), Lagrange-
   algoritmen (oppsett → FOC → multiplikatorverdier → konkavitet → skyggepris), integrasjon+
   ODE-algoritmen, differenslikning- og Bellman-algoritmene.
5. **Metodelydighet — fagets dyreste regel** (karakterskillet, egen seksjon): de påbudte
   metodene og hva som gir null poeng (Gauss for invers, Cramér der påbudt, «bruk det
   differensierte systemet», integrasjon uten substitusjon, «vis ved antiderivasjon»,
   konstantløsning før deling, aldri del på parameter). Med henvisning til kapitlet (1.4,
   1.5, 3.2, 6.1, 6.3, 7.2, 1.6) og til metodelydighet-stordrillen (10.1).
6. **De strenge sensorpunktene og feilkatalogen** — de 15 typiske feilene fra
   sensorveiledningene samlet, hver med henvisning til kapitlet som forebygger den:
   det≠0-feilslutningen (1.6), $1/t$-skalering (1.6), elementvis produkt (1.1),
   determinant av ikke-kvadratisk (1.3), konstantløsning-«grave sin» (7.2), $0=L'_x$ (5.1),
   bare admissibilitet (5.2), ekstremverdisetningen som tilstrekkelig (4.2/5.3), glemt
   skyggepris (5.5), l'Hôpital uten påvisning (4.1), stasjonaritet ikke verifisert (2.3),
   derivert høyresiden ved antiderivasjon (6.1), Bellman-oppsett hoppet over (9.1),
   uforenklede uttrykk (#15, gjennomgående).
7. **Formelark i emnets notasjon** (speiler «Rules and formulas»-vedlegget) — én side:
   matriseprodukt/orden, $(AB)'=B'A'$, $AA'$ symmetrisk; determinant-snarveier $|A'A|=|A|^2$,
   $|A^2|=|A|^2$, $|cA|=c^n|A|$; invers $A^{-1}=\frac{1}{|A|}C'$, $|C|=d^{n-1}$; Cramér
   $x_i=|A_i|/|A|$; $\det\ne0\Leftrightarrow$ entydig; differensial og lineær approksimasjon;
   Jacobi-determinant / implisitt funksjonsteorem; homogenitet + Euler $xf'_x+yf'_y=kf$;
   Hessian $D=f''_{xx}f''_{yy}-(f''_{xy})^2$; l'Hôpital; delvis integrasjon,
   $\int\ln y\,dy=y\ln y-y+C$; integrerende faktor $e^{\int a\,dt}$; separabel + konstantløsning;
   Lagrange $L=f-\sum\lambda_j(g_j-b_j)$, FOC, omhyllingsteorem $\partial V/\partial a=\partial L/\partial a|^*$,
   $\lambda$ = skyggepris; differenslikning $x_t=Ca^t+p_t$; Bellman $v_t(x)=\operatorname{opt}_c\{\dots+\beta v_{t+1}\}$ —
   med markering av hva som skal *utledes/begrunnes* (Euler, omhyllingsteoremet aktivt) vs.
   kun *identifiseres og brukes* fra vedlegget.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1
   (mekaniser LA-oppgaven) → 3 (komparativ statikk/Oppg. 1) → 2 (konveksitet, forbereder
   tilstrekkelighet) → 5 (Lagrange) → 6 → 7 (integrasjon/ODE) — perfekt-kjernen; deretter 4
   (grenser/eksistens) og de nye 8, 9 (differenslikninger, Bellman — dekk fullt); Kuhn–Tucker
   (5.6) og substitusjon (6.3) sist som bakgrunn. Avslutt med metodelydighet-stordrillen
   (10.1) og de tre øvingseksamenene under tidspress (240 min, jevnt tidsbudsjett per item,
   med vedlegget for hånden). Terp prøvene og drillkapitlene — sjangergjenkjenning +
   metodelydighet er poenggulvet.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ3120` med alle 40 kapitler + 9
   prøvekapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-tabellen (§2).
   **`number` er del-basert** («5.3», aldri lineær) — bokforsiden grupperer på
   `number.split('.')[0]`. Prøvekapitler: `econ3120-<del>-prove`, chapterNumber `<del>.P`.
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangerkodene MA–SU, frekvenstallene, to-kode-
   rammeverket, pensumskiftet 2024 og metodelydighet-regelen som resten refererer til.
3. **Perfekt-kjernen i avhengighetsrekkefølge**: Del 1 (matrisealgebra) → Del 3 (komparativ
   statikk; 3.3 og 3.5 avhenger av 1.5) → Del 2 (flervariabel/konveksitet; forbereder
   tilstrekkelighet) → Del 5 (Lagrange; 5.1/5.3 avhenger av 2.2) → Del 6 → Del 7
   (integrasjon/ODE). Bygg én agent per hel del; Del 1 (7 kap.) og Del 5 (7 kap.) kan
   splittes, men gi begge agentene HELE delens kontrakter (jf. PRODUKSJONSLOYPE fase 4).
4. Del 4 (grenser/eksistens) → Del 8 (differenslikninger) → Del 9 (Bellman) — de nye
   2024-delene bygges fullt tross tynt eksempelgrunnlag.
5. Del 10 til slutt (metodelydighet-stordrillen og øvingseksamenene gjenbruker alle
   temaene; øvingseksamen-agenten leser HELE skjelettet). Vedlegget («Rules and formulas»)
   legges i eget `collapsible` per øvingseksamen.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§4) legges i prøvekapitler per del etter byggekontraktens
   spesifikasjon.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
  helst via `json.dump`; escape `"` i norske/engelske sitattegn — f.eks. «a grave sin»);
  `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON (`\\lambda`,
  `\\partial`, `\\det`, `\\frac`, `\\int`, `\\dot x`); ingen unicode-brøker; konsistent
  $f'_x$, $f''_{xy}$, $\lambda$, $x^*$, $L$, $V$, $D=f''_{xx}f''_{yy}-(f''_{xy})^2$,
  $A^{-1}=\frac{1}{|A|}C'$, $x_i=|A_i|/|A|$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ3120-filer. **Forbudte termer:**
  egenverdier/diagonalisering som en *drillet ferdighet* (kun bakgrunnsnote i 2.2 er tillatt);
  rand-Hessian / «bordered Hessian» (ikke pensum — tilstrekkelighet vises via ordinær
  konkavitet); Kuhn–Tucker eller substitusjon presentert som *gjeldende kjernepensum* (skal
  merkes «utgått H2024 / bakgrunn» i 5.6 og 6.3). **Påkrevd/standard:** `∼` = «ekvivalent
  likningssystem»; $\det\ne0\Leftrightarrow$ entydig (ikke «eksistens»); tospråklige
  begreper (norsk (English)) ved første forekomst.
- [ ] **«Sensor krever denne metoden»-bokser**: kap. 1.4 (Gauss for invers), 1.5 (Cramér),
  3.2 (bruk det differensierte systemet), 6.1 (delvis/antiderivasjon), 6.3 (uten
  substitusjon), 7.2 (konstantløsning før deling) har hver en eksplisitt `warning`-blokk om
  påbudt metode og at annet gir null poeng.
- [ ] **De tre kritiske sensor-fellene med warning**: (a) metodelydighet (bokser over +
  stordrill 10.1); (b) null-divisjon — konstantløsning-sjekk i 7.2 («a grave sin») og aldri
  $1/t$-skalering i 1.6; (c) det≠0-feilslutningen i 1.6 (egen `warning`). Alle tre har
  eksplisitt `warning`-blokk med det korrekte argumentet.
- [ ] **Pensumskiftet 2024 håndtert**: differenslikninger (Del 8) og Bellman (Del 9) har
  fulle kapitler + prøver + øvingseksamen-innslag; Kuhn–Tucker (5.6) og substitusjon (i 6.3)
  har Eksamensvinkel-blokker som eksplisitt sier «utgått fra pensum H2024 — bør kjenne til».
- [ ] **Begrunn alt**: hvert løsningsforslag viser utregning/argument (aldri bart svar);
  metoden og korrekt bruk av vedleggets teoremer er synlig; A-besvarelse-standard.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Forkunnskaper-blokk + Symbol- og formelliste-`collapsible` (per delkapittel,
  **tospråklig norsk/English**), Motivasjon-`text`, definisjoner/teoremer i emnets notasjon,
  Utledning-med-intuisjon der eksamen krever aktiv utledning (Euler 3.4, omhyllingsteoremet
  5.5), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler (1.7, 3.5, 5.7, 7.3, 10.1)
  har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver; øvingseksamener har
  «Rules and formulas»-vedlegg i eget `collapsible`.
- [ ] **Quiz-sum ≥ 597 og flashcard-sum ≥ 564** per kvotetabellen (kontrollsummér mot
  §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener; settene og prøvene dekker
  samlet sjangrene MA, CS, LG, HE, SA, LH, EV, OM, HG, IN, DE, DL, DP minst én gang (+ KT/SU
  som bakgrunn i ØE3).
- [ ] **Tospråklig begrepsbank**: flashcards og symbol-/formellister gir fagbegreper som
  norsk (English) — eksamen er engelsk; nøkkelfraser (state reasons for all your answers, no
  score for other methods, a grave sin in this course) gjengis på engelsk.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egen innramming (produksjon/
  konsum/likevekt/sparing), egne formuleringer; ingen oppgavetekster eller sensorformuleringer
  gjengitt ordrett (skjelettets mønstereksempler er selv omskrivninger med nyskrevne tall og
  skal varieres videre); standardteoremer (Lagrange, Euler, Cramér, l'Hôpital, Bellman,
  Kuhn–Tucker) er faglig allemannseie.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
