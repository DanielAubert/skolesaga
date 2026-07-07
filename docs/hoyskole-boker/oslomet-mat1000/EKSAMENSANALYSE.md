# Eksamensanalyse: Matematikk 1000 (DAFE1000 / FO010A) — OsloMet ingeniørutdanning

> Grunnlagsdokument for eksamensrettet lærebok i ingeniørmatematikk. Bygger på **23 lesbare eksamenssett fra Matematikk 1000 (2010–2017)** med tilhørende løsningsforslag der de foreligger, pluss formelsamlingen for faget. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Analysen er kvantitativ der kildene tillater det.
>
> Dette er **ingeniørmatematikk**, ikke ren kalkulus: tyngdepunktet ligger på *anvendelse og metode* (integrasjonsteknikk, differensiallikninger, numeriske metoder, matriseregning), ikke på bevis og ε-δ-teori slik som i universitetenes kalkulusemner (jf. MAT1100). Boken skal speile dette.

---

## 0. Emnekode, avgrensning og kildekritikk

**Emnet og kodene.** Faget heter *Matematikk 1000* og er ingeniørutdanningens grunnkurs i matematikk ved OsloMet (tidligere Høgskolen i Oslo → Høgskolen i Oslo og Akershus). Emnekoden har endret seg over tid:

| Periode | Kode(r) på eksamensforsidene | Institusjon |
|---|---|---|
| 2010–2014 | **FO010A** «Matematikk 1000» | Høgskolen i Oslo (og Akershus) |
| 2015–2017 | Felleseksamen merket **DAFE / ELFE / BYFE / EMFE / KJFE / MAFE / MEK 1000** | HiOA → OsloMet |
| I dag | **DAFE1000** (m/ paralleller ELFE1000, BYFE1000, TRFE1000, EMFE1000, KJFE1000, MAFE1000, MEK1000) | OsloMet |

Alle disse er samme grunnemne kjørt for ulike ingeniørprogram (data/elektro/bygg/energi-miljø/kjemi/maskin). Fra 2015 kjøres én **felleseksamen** for alle programmene samtidig — forsidene lister flere koder. DAFE1000 (data/IT) er den gjeldende varianten mot dagens bachelor i data-/programvareteknikk.

**Streng avgrensning — kun 1000-nivå.** Arkivmappen (`Matematikk1000-2000-ingeniør`, ~669 filer) er en *blandingsmappe* som inneholder mange kurs. Følgende er identifisert og **holdt utenfor** analysen:

- **Matematikk 2000** (kode M2000 / BYPE2000): uendelige rekker, Taylor-/potensrekker med konvergenstester, funksjoner av flere variable (partiellderiverte, tangentplan, kritiske punkter, gradient i R²), flervariable grenser, egenverdier/diagonalisering brukt til systemer og potenser, lineære ODE-system. Dette er *oppfølgeremnet* og er eksplisitt ekskludert.
- **Forkurs matematikk** (kode FO929A, «Forkurs, Avdeling for Ingeniørutdanning»; filnavn `eksamen-2007…2009`, `peksamen-*`, `forkurs_eksamen_*`): elementær algebra, geometri, vektorregning i rommet, tallteori, endelige rekker. Prep-kurs, ekskludert.
- **Fysikk** (kode FO340E; `FO340_deleksamen*`): mekanikk — kollisjoner, treghetsmoment, rulling. Ekskludert.
- **FO152A** og diverse forelesningsnotater/øvinger/obliger (daglige `20xx-xx-xx_*`-filer): ekskludert.

Det som står igjen som *ekte Matematikk 1000* er filene `*_M1000_Eksamen*.pdf` (og deres `_LF`). Det er **26 M1000-eksamenssett** i arkivet; av disse er **23 maskinlesbare** (tekstlag), mens 3 kun finnes som skannede bilder uten tekst (2014.02, 2014.12, 2015.02) og er registrert på metadata, ikke innhold.

**Arkivet stopper i august 2017.** Den nyeste eksamenen i arkivet er 01.08.2017. Emneplanen for DAFE1000 er verifisert aktiv i 2026. Det er altså et **gap på ~9 år** mellom siste dokumenterte sett og dagens emneplan. Prognosene i del 7 er kalibrert mot 2015–2017-formen (den nyeste dokumenterte), med forbehold som må sjekkes mot ferske sett når de blir tilgjengelige.

---

## 1. Eksamensform og utvikling

Matematikk 1000 vurderes med **én skriftlig slutteksamen, 5 timer (kl. 09–14)**, med obligatoriske innleveringer (normalt 4) som må være godkjent for å gå opp. Det finnes **ingen deleksamen/midtveiseksamen** i arkivet — hele karakteren avgjøres av sluttprøven (til forskjell fra f.eks. MAT1100). Karakterskala A–F.

**Tre eksamenssesjonger per studieår.** Faget kjøres både høst og vår, og med kontinuasjon. Datomønsteret i arkivet viser tre årlige sesjoner: **vår-ordinær (mai/juni)**, **kontinuasjon (august)** og **høst-ordinær (november/desember)** — samt en ekstra utsatt prøve i februar/mars enkelte år. Dette gir mange sett per år og forklarer den store bredden i arkivet. Alle sesjonene har samme form og pensum; kontinuasjons- og ordinærsett er ikke systematisk forskjellige.

**Den viktigste utviklingen: hjelpemiddel- og formatskiftet 2014→2015.** Faget deler seg tydelig i to epoker:

| | **Epoke 1: FO010A (2010–2014)** | **Epoke 2: DAFE-fellessett (2015–2017)** |
|---|---|---|
| Hjelpemidler | **Ingen** (kun utdelt formelark) | **Kalkulator + formelark** |
| Struktur | **6–9 store oppgaver**, hver med flere kjedede delpunkter | **8–15 korte, selvstendige oppgaver**, «alle deloppgaver teller likt» |
| Signaturinnhold | Egenverdier/diagonalisering, ODE-system via egenvektorer, lineære transformasjoner i R³, teoretisk lineær algebra (nullrom, basis) | MATLAB/Octave-skript, numeriske metoder (Newton/Euler/halvering/trapes/Simpson), Taylorpolynom, anvendt DE-modellering |
| Regnetempo | Tyngre algebra for hånd | Kalkulator forutsettes; vekt på metode og oppsett |
| Faglærere (forside) | Lars Tuset, Sølve Selstø, Steinar Johannesen | Fellessett (uten navngitt enkeltlærer) |
| Målform | Bokmål og nynorsk om hverandre | Bokmål og nynorsk om hverandre |

Konstant på tvers av alle sett: **«Alle svar skal grunngis. Alle deloppgaver har lik vekt.»** Formelark er alltid vedlagt (se del 6 for innhold). Mellomregning og begrunnelse skal føres.

**Konsekvens for boken.** Epoke 2 (2015–2017) er den mest prediktive for dagens DAFE1000, både fordi den er nyest og fordi den matcher emneplanens vekt på numerisk programvare (MATLAB/Python). Egenverdi-/diagonaliseringsstoffet som dominerte 2010–2012 er **borte** fra 2013 og utover (antatt flyttet til Matematikk 2000). Boken bør vekte epoke 2-sjangrene tyngst, men dekke epoke 1-repertoaret som utvidelse.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer. Kolonnene: **E1** = FO010A-epoken 2010–2014 (13 sett), **E2** = DAFE-epoken 2015–2017 (10 sett). Gjenganger-score er over alle 23 lesbare sett.

| Tema | E1 (13) | E2 (10) | **Score (23)** | Trend |
|---|---|---|---|---|
| **Differensiallikninger** (1. + 2. orden, IVP) | 13 | 10 | **23/23 = 100 %** | Ryggraden, stabil |
| **Matriseregning** (produkt/sum/transp./det/invers/matriselikning) | 13 | 10 | **23/23 = 100 %** | Stabil, alltid oppgave 1 i E2 |
| **Integrasjon** (ubestemt + bestemt; sub./delvis/delbrøk/trig/uegentlig/\|·\|) | 12 | 10 | **22/23 = 96 %** | Stabil |
| **Derivasjon** (kjerne/produkt/kvotient, implisitt, tangentlinje) | 12 | 6 | **18/23 = 78 %** | Svakt fallende som egen oppgave |
| **Lineært likningssystem m/ parameter** (entydig/uendelig/ingen) | 11 | 6 | **17/23 = 74 %** | Stabil |
| **Lineær transformasjon** (standardmatrise, rotasjon/speiling/projeksjon) | 9 | 6 | **15/23 = 65 %** | Stabil |
| **Komplekse tall** (kartesisk↔polar, lineær kompleks likn., z ⁿ-røtter, kvadratisk) | 3 | 10 | **13/23 = 57 %** | **10/10 i E2 — årviss signatur** |
| **MATLAB/Octave-skripttolking** (Newton/Euler/Riemann/halvering/trapes/løkker) | 4 | 8 | **12/23 = 52 %** | **0 før 2013 → nesten alltid i E2** |
| **Anvendt DE-modellering** (avkjøling, logistisk, befolkning, Torricelli, RLC, svingning, tank) | 5 | 8 | **13/23 = 57 %** | **Sterkt stigende** |
| **Omdreiningsvolum** (rotasjon om y-aksen dominerer) | 5 | 7 | **12/23 = 52 %** | Stigende, y-akse er hovedtilfellet |
| **Numerisk integrasjon fra tabell/graf** (trapes/Riemann/Simpson, strekning fra fart) | 4 | 7 | **11/23 = 48 %** | **0 før 2013 → årviss i E2** |
| **Newtons metode / halveringsmetoden** (manuell: «ett nullpunkt» + iterasjoner) | 1 | 8 | **9/23 = 39 %** | **7/8 i E2 — ny signatur** |
| **Grenseverdier / L'Hôpital** | 7 | 3 | **10/23 = 43 %** | Fallende (E1-tungt) |
| **Egenverdier / diagonalisering** | 8 | 0 | **8/23 = 35 %** | **DØENDE — 0 etter 2012** |
| **Lineær uavhengighet / basis / nullrom / redusert trappeform** | 4 | 4 | **8/23 = 35 %** | Stabil |
| **Relaterte rater** (kjegle, ballong, drone, fiskesnøre) | 5 | 4 | **9/23 = 39 %** | Stabil |
| **Optimering** (max/min, nærmeste punkt, min-av-maks) | 2 | 5 | **7/23 = 30 %** | Stigende |
| **Numerisk derivasjon fra tabell** (midtpunkt/differanse) | 3 | 3 | **6/23 = 26 %** | Stabil (ofte del av tabelloppgave) |
| **Taylorpolynom om x = a** (ikke rekker!) | 1 | 3 | **4/23 = 17 %** | E2 (2014–2016) |
| **Graf-/kurvetolking** (identifiser f, f′, F; retningsfelt; matche løsningskurve) | 1 | 3 | **4/23 = 17 %** | Stigende, E2 |
| **Deriverbarhet av delt (stykkevis) funksjon** (finn a, b) | 0 | 2 | **2/23 = 9 %** | Kun E2 |
| **Fundamentalteorem / derivert av integral m/ variabel grense** | 0 | 2 | **2/23 = 9 %** | Sjelden |
| **Injektivitet / invers funksjon / definisjonsmengde** | 1 | 0 | **1/23 = 4 %** | Sjelden |
| **Buelengde** (eget oppsett; formel på formelark) | 0 | 1 | **1/23 = 4 %** | Sjelden |
| **Polynominterpolasjon** (finn polynom gjennom gitte punkter) | 0 | 1 | **1/23 = 4 %** | Sjelden |
| **Uendelige rekker** | 0 | 0 | **0/23 = 0 %** | Hører til M2000 |
| **Flervariabel kalkulus / partiellderivert / gradient** | 0 | 0 | **0/23 = 0 %** | Hører til M2000 |
| **Bevis (ε-δ, MVT-konstruksjon o.l.)** | 0 | 0 | **0/23 = 0 %** | Ikke ingeniørmatte-sjanger |

### Viktigste funn

1. **Differensiallikninger + matriseregning er den doble ryggraden** (100 % hver). Nesten hvert eneste sett åpner med en matriseoppgave (operasjoner + determinant + invers + matriselikning `AX = B`) og inneholder 2–3 DE-oppgaver (1. og 2. orden, ofte med anvendt modellering). En bok som ikke gjør disse to temaene til hovedsøyler, bommer på faget.

2. **Numerisk metode + programvare er den definerende nyvinningen i epoke 2.** Fra 2013 dukker MATLAB/Octave-skript opp (52 % totalt, ~8/10 i E2), sammen med manuell Newton/halvering (39 %) og numerisk integrasjon fra tabell (48 %). Dette er *ikke* i MAT1100-tradisjonen — det er ingeniørmatematikkens signatur og speiler emneplanens krav om implementering av numeriske algoritmer. Studenten må kunne (a) *lese* et ukommentert skript og si hva det regner ut / hvilken feil det har, og (b) *utføre* metoden for hånd med kalkulator.

3. **Komplekse tall gikk fra fraværende til årvisst.** 0/13 i E1, men 10/10 i E2. Standardformen er alltid den samme: løs en *lineær* kompleks likning og skriv svaret på polarform `reⁱᶿ`, ofte fulgt av `zⁿ`-røtter via de Moivre eller en kompleks andregradslikning. Dette er billige, høyfrekvente poeng i dagens form.

4. **Egenverdier/diagonalisering forsvant.** Dominerte 2010–2012 (8/8 tidlige sett, brukt til å løse lineære ODE-system `y′ = Ay`), men er 0/11 fra 2013 og utover. Pensumjustering: temaet er antatt flyttet til Matematikk 2000. Boken bør dekke det som utvidelsesstoff, men *ikke* eksamenstrene mot det for dagens DAFE1000.

5. **Anvendt modellering er retningen faget beveger seg.** DE-oppgaver kles i stadig mer «virkelige» drakter: Newtons avkjølingslov, logistisk vekst (bakterier/smittespredning), befolkningsmodeller med migrasjon, Torricellis lov, RLC-kretser, dempet harmonisk svingning, tankblanding. Studenten skal ofte (i) *utlede* differensiallikningen fra en tekstbeskrivelse, (ii) løse eller (iii) tolke likevekt/langtidsoppførsel *uten* å løse.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav og et omskrevet eksempel hver. Rekkefølgen følger omtrentlig frekvens i epoke 2 (dagens form).

### A. Matriseregning og matriselikning
- **Krav:** Regn ut sum/differanse/produkt/transponert av oppgitte matriser — og **avgjør først om operasjonen er definert** (dimensjonssjekk; fasit belønner at man forklarer *hvorfor* f.eks. `BA` ikke finnes). Determinant (2×2 direkte, 3×3 ved kofaktor), invers (2×2-formel eller Gauss-Jordan for 3×3), og `det(Aⁿ) = (det A)ⁿ`, `det(A⁻¹) = 1/det(A)` som snarveier. Løs matriselikning `AX = B` / `AX + 2B = C` symbolsk før innsetting (isoler X, gang med A⁻¹ fra riktig side).
- **Frekvens:** 23/23; nesten alltid oppgave 1.
- **Omskrevet eksempel:** «Gitt A (2×2), B (2×3) og C (2×2): regn ut A + C, AB, BA og det(A⁻¹), og forklar kort hvis noe ikke er definert.»

### B. Differensiallikninger — analytisk løsning
- **Krav:** Gjenkjenn typen og bruk riktig oppskrift (alle står på formelarket):
  - **Separabel:** skill variablene, integrer begge sider, løs for y, sett inn initialkrav.
  - **Lineær 1. orden** `y′ + f(x)y = g(x)`: integrerende faktor `e^{F(x)}`, `(y·e^F)′ = g·e^F`.
  - **2. orden, konstante koeffisienter** `y″ + py′ + qy = r(x)`: karakteristisk likning → tre tilfeller (to reelle røtter / dobbeltrot / komplekst par → dempet svingning). Partikulærløsning ved ubestemte koeffisienter for polynom/eksponential/sinus-høyresider; husk resonanstilfellet.
  - **Initialverdiproblem:** bestem konstantene til slutt.
- **Frekvens:** 23/23; typisk 2–3 delpunkter per sett.
- **Omskrevet eksempel:** «Løs `y″ − 6y′ + 9y = 0`, og finn deretter den generelle løsningen av `y″ − 6y′ + 9y = 13 cos 2x`.»

### C. Differensiallikning fra tekst (modellering)
- **Krav:** Oversett en verbal beskrivelse til en DE — utled hvert ledd fra premissene (vekst-/tap-/tilførsels-ledd), *begrunn* oppsettet. Ofte skal man deretter (i) løse, eller (ii) finne **likevekt / langtidsverdi** ved å sette `y′ = 0` uten å løse, eller (iii) matche løsningskurve mot figur. Klassiske kontekster: Newtons avkjøling, logistisk vekst, befolkning med migrasjon, tank-/blandingsproblem, Torricellis lov, RLC-krets, dempet svingning.
- **Frekvens:** 13/23; 8/10 i epoke 2.
- **Omskrevet eksempel:** «Et lands folketall taper 6 % i året, men får 300 000 innvandrere årlig, slik at `F′ = 0.3 − 0.06F`. Hva stabiliserer folketallet seg på, og hva blir `F(t)` når `F(0) = 12`?»

### D. Integrasjon — teknikk
- **Krav:** De faste teknikkene, alle med føring: **substitusjon** (bokfør u, du, nye grenser), **delvis integrasjon** (dokumentér u/v′-valg; klassikere `x²eˣ`, `x ln x`, `x sin x`), **delbrøkoppspalting** (også `(ax+b)/(x²+c)` → ln-del + arctan-del), **trigonometriske** integraler, **fullføre kvadrat** → arctan-form, samt **absoluttverdi** (del opp intervallet) og **uegentlige integraler** (grense-notasjon eksplisitt, `∫₀^∞ xⁿe^{−xᵏ}`).
- **Frekvens:** 22/23; 2–4 delpunkter per sett.
- **Omskrevet eksempel:** «Regn ut `∫₀^∞ x⁵e^{−x³} dx` (uegentlig) og `∫₀² |x − 1| dx`.»

### E. MATLAB/Octave-skripttolking
- **Krav:** Gitt et *ukommentert* skript, avgjør hva det beregner. De faste malene: **Newtons metode** (`x = x − f/f′` i while-løkke → «hvilken likning løses?»), **Eulers metode** (`y(k+1) = y(k) + F·h` → «hvilket IVP estimeres?»), **Riemann-/rektangelsum** (`R = R + f(x)·dx` → «hva nærmer R seg når N øker?» = det bestemte integralet), **halveringsmetoden** (fortegnstest på midtpunkt → nullpunkt, feil ≈ intervallbredde/2ᴺ), **trapesmetoden**, og enkle **for/while-løkker** (geometrisk sum o.l.). Varianter: «finn feilen i skriptet», «hvordan gjøre svaret mer nøyaktig?» (flere steg / mindre toleranse).
- **Frekvens:** 12/23; ~8/10 i epoke 2, alltid fra 2013.
- **Omskrevet eksempel:** «Skriptet oppdaterer `R = R + f(x)·Δx` i en løkke over `[a,b]`. Hva kalles denne summen, og hva nærmer R seg når N øker?»

### F. Newtons metode / halveringsmetoden — manuell
- **Krav:** To faste steg: (i) **vis at funksjonen har nøyaktig ett nullpunkt** i `[a,b]` (skjæringssetningen: kontinuitet + fortegnsskifte `f(a)·f(b) < 0`; entydighet: `f` er strengt monoton, dvs. `f′` har fast fortegn); (ii) **utfør oppgitt antall iterasjoner** av Newton `xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)` fra gitt `x₀`, eller halveringsmetoden til feilen `< 1/2ᴺ`.
- **Frekvens:** 9/23; 7/10 i epoke 2.
- **Omskrevet eksempel:** «Vis at `g(x) = ln x − 1/x` har nøyaktig ett nullpunkt i `[1,2]`, og utfør to Newton-iterasjoner fra `x₀ = 1`.»

### G. Komplekse tall
- **Krav:** Løs en **lineær kompleks likning** `az + b = cz + d` (isoler z, forleng med konjugert nevner) → svar på **både kartesisk og polar form** `reⁱᶿ` (riktig kvadrant for argumentet). `zⁿ = w`-røtter via de Moivre (n røtter jevnt fordelt på sirkel med radius `|w|^{1/n}`). Kompleks andregradslikning via abc-formel med negativ diskriminant. Faktoriser reelt/komplekst polynom.
- **Frekvens:** 13/23; **10/10 i epoke 2**.
- **Omskrevet eksempel:** «Løs `(1 + √3 i)z = √3 z` og oppgi svaret eksakt på kartesisk og polar form.»

### H. Lineær transformasjon
- **Krav:** Tre undertyper: (i) **bygg standardmatrisen fra kjente bilder** av vektorer (løs for kolonnene, eller skriv målvektoren som lineærkombinasjon av kjente og bruk lineariteten — fasit foretrekker den korte lineærkombinasjons-veien); (ii) **geometriske transformasjoner** — rotasjon `[[cos, −sin],[sin, cos]]`, speiling om linje/akse, ortogonal projeksjon, forlengelse, og **komposisjoner** av disse (matriseprodukt i riktig rekkefølge); (iii) finn alle vektorer som sendes til en gitt vektor (løs `Mx = b`).
- **Frekvens:** 15/23.
- **Omskrevet eksempel:** «T roterer først π/2 mot klokken og speiler så om x-aksen. Finn standardmatrisen.»

### I. Lineært likningssystem med parameter
- **Krav:** Avgjør for hvilke verdier av parameteren `a` systemet har **entydig / uendelig mange / ingen** løsning. Metode: determinanten til koeffisientmatrisen = 0 gir kandidatverdiene; undersøk hvert tilfelle med Gauss-eliminasjon på totalmatrisen (skill uendelig-mange fra inkonsistent). Skriv løsningene på **parametrisk vektorform** ved uendelig mange.
- **Frekvens:** 17/23.
- **Omskrevet eksempel:** «For hvilke `a` har systemet {`x + az = 3`, `−ay + z = 2`, `ax + ay = 1`} ingen, én eller uendelig mange løsninger?»

### J. Omdreiningsvolum
- **Krav:** **Velg metode etter akse** (begge formler på formelarket): om x-aksen → skiver `V = π∫f² dx`; om y-aksen → sylinderskall `V = 2π∫x|f| dx`. **Y-aksen er hovedtilfellet** i epoke 2 (vaser, beholdere, dreide trestykker). Tegn området, sett opp integralet, løs med relevant teknikk. Ofte koblet til et fyll-/tømme-scenario (relaterte rater, se K).
- **Frekvens:** 12/23.
- **Omskrevet eksempel:** «Grafen til `y = sin x` for `0 ≤ x ≤ π/2` roteres om y-aksen og danner en vase. Finn volumet.»

### K. Relaterte rater
- **Krav:** Modellér sammenhengen (geometri: kjeglevolum, Pytagoras, tan-vinkel), deriver implisitt mhp. `t`, sett inn tallverdiene, tolk fortegnet. Svært ofte koblet til en beholder som fylles/tømmes (kjegle, vase, kar) — kombineres da med volumformel og/eller Torricelli-DE.
- **Frekvens:** 9/23.
- **Omskrevet eksempel:** «En ballong blåses opp så volumet vokser med 300 cm³/s. Hvor fort vokser radien når `r = 10 cm`?»

### L. Numerisk integrasjon/derivasjon fra tabell eller graf
- **Krav:** Gitt en tabell (fart mot tid, effekt mot klokkeslett, strømningshastighet …): estimér **endringsrate** med midtpunkts-/differansekvotient (`f′(x) ≈ (f(x+h) − f(x−h))/2h`) og **total mengde / strekning** med **trapesmetoden** (eller Simpson med ett dobbeltintervall). Sammenlign gjerne med eksakt verdi og angi feilen. Kan også gis som graf (areal under fartskurve = strekning).
- **Frekvens:** 11/23 (integrasjon) + 6/23 (derivasjon).
- **Omskrevet eksempel:** «Farten er logget hvert 2. sekund. Estimér tilbakelagt strekning på 10 sekunder med trapesmetoden.»

### M. Derivasjon, implisitt derivasjon og tangentlinje
- **Krav:** Kjerne-/produkt-/kvotientregel; logaritmisk derivasjon; **implisitt derivasjon** for kurve gitt ved likning → stigningstall og tangentlinje i et punkt (vis først at punktet ligger på kurven).
- **Frekvens:** 18/23 (derivasjon som egen del); implisitt/tangent i ~10/23.
- **Omskrevet eksempel:** «Vis at `(1,2)` ligger på kurven `x²y³ = y ln x + x³`, og finn tangentens likning der.»

### N. Optimering
- **Krav:** Modellér målfunksjonen fra tekst/geometri, deriver, finn og klassifiser stasjonære punkter, begrunn globalt ekstremum (endepunktssjekk på lukket intervall). Egne varianter: **korteste avstand** fra punkt/linje til graf, **min-av-maks** (parameteroptimering).
- **Frekvens:** 7/23.
- **Omskrevet eksempel:** «Finn punktet på grafen til `y = x²` som ligger nærmest `(0,3)`.»

### O. Grenseverdier / L'Hôpital
- **Krav:** Alle ubestemte former via L'Hôpital (markér `[0/0]`/`[∞/∞]`), standardgrenser (`sin x/x → 1`), logaritmetriks for `1^∞`, `0·∞`. Fallende frekvens (E1-tungt), men fortsatt pensum.
- **Frekvens:** 10/23.

### P. Taylorpolynom (ikke rekker)
- **Krav:** Bestem Taylorpolynom `Pₙ(x)` om `x = a` til gitt grad (formel på formelark), evt. bruk det til å **estimere et integral** eller en funksjonsverdi, og vurder restleddet. NB: kun *polynomer* — uendelige Taylor-/potensrekker hører til M2000.
- **Frekvens:** 4/23.

### Q. Deriverbarhet av stykkevis funksjon
- **Krav:** Delt forskrift med ukjente `a, b`: sett opp kontinuitets- **og** derivert-betingelse i skjøtepunktet og løs systemet.
- **Frekvens:** 2/23 (kun epoke 2).

### R. Graf- og kurvetolking
- **Krav:** Identifiser hvilken graf som er `f`, `f′` og `F` (antiderivert) ut fra fortegn/monotoni-sammenhenger; forklar/bruk **retningsfelt**; avgjør hvilken kurve som (ikke) er løsning av en gitt DE.
- **Frekvens:** 4/23, stigende i epoke 2.

---

## 4. Sensorens krav

Fra oppgaveinstrukser og løsningsforslag:

1. **«Alle svar skal grunngis. Alle deloppgaver har lik vekt.»** — trykt på hvert sett. Ubegrunnet svar gir tap, også når tallet er riktig. Mellomregning og begrunnelse skal føres. Fordi delpunktene teller likt, lønner det seg å ta de mange «billige» standardoppgavene (matrise, kompleks likning, Newton-iterasjon, integral) før man bruker tid på de tyngre modelleringsoppgavene.

2. **Definert-sjekk premieres eksplisitt.** I matriseoppgaver forventer fasit at man *forklarer hvorfor* en operasjon ikke er definert (dimensjonskonflikt), ikke bare hopper over den. Dette er innebygd poeng i nesten hvert sett.

3. **Effektiv metode honoreres — men alternative veier godtas.** Løsningsforslagene peker gjentatte ganger på snarveier og kommenterer at den lange veien «krever litt mer arbeid» (f.eks. `det(A⁻¹) = 1/det(A)` framfor å invertere først; lineærkombinasjon framfor å bygge hele standardmatrisen). Begge veier gir full uttelling med korrekt gjennomføring, men studenten bør kjenne snarveiene for tidsbudsjettets skyld.

4. **Numeriske metoder krever *forståelse*, ikke maskinsvar.** Kalkulator er tillatt fra 2015, men skript-oppgavene tester om studenten *forstår* algoritmen (hva den regner ut, hvorfor den konvergerer, hvor feilen ligger). Å «kjøre skriptet i hodet» og gjenkjenne Newton/Euler/Riemann er poenget. Ved manuell Newton/halvering skal iterasjonene vises.

5. **Modelloppgaver: utled, og begrunn hvert ledd.** Ved DE fra tekst skal hvert ledd i likningen forankres i premissene. Ved likevekt/langtidsspørsmål er poenget å sette `y′ = 0` og resonnere — ikke nødvendigvis å løse hele likningen.

6. **Standardform på svar.** Komplekse tall: både kartesisk og polar form når det bes om det, med argument i riktig kvadrant. Uegentlige integraler: eksplisitt grense. Uendelig mange løsninger: parametrisk vektorform. Volum/areal: riktig aksemetode og enhet (ofte omregning til liter).

### Karakterskiller (utledet)
- **Bestått-sjiktet** henter poeng på de mekaniske standardene: matriseoperasjoner + determinant/invers, separabel/lineær 1.-ordens DE, standard integral med dokumentert substitusjon, kompleks lineær likning, én Newton-iterasjonsrekke, volum med riktig akseformel.
- **Midtsjiktet** behersker i tillegg 2.-ordens DE med partikulærløsning (inkl. resonans/dempet svingning), delbrøk/uegentlige integraler, parametersystemer med full tilfellesanalyse, og korrekt tolking av MATLAB-skript.
- **Toppsjiktet** kjennetegnes av: (i) å *utlede* modell-DE-er fra tekst og tolke likevekt/langtidsoppførsel uten å løse; (ii) presis føring av entydighets-/eksistensargument (skjæringssetning + monotoni) før numerisk metode; (iii) å velge effektiv metode og se koblinger mellom delpunkter; (iv) riktig håndtering av randtilfeller (resonans i 2.-ordens DE, dobbeltrot, endepunktsekstrema, uegentlige grenser).

---

## 5. Typiske feil

Dokumentert i/utledet fra løsningsforslagene og oppgavekonstruksjonen:

1. **Dimensjonsfeil i matriseregning** — regner `BA` når kun `AB` er definert, eller glemmer å begrunne hvorfor en operasjon ikke finnes (den begrunnelsen er poenggivende).
2. **Feil aksemetode for omdreiningsvolum** — skiveformel om y-aksen eller skall om x-aksen; å ikke tegne området før oppsett.
3. **Glemte substitusjonsgrenser** — bytter variabel i bestemt integral uten å oppdatere grensene; eller glemmer den indre deriverte.
4. **2.-ordens DE: glemt resonans-/dobbeltrottilfelle** — feil ansatz for partikulærløsning når høyresiden løser den homogene likningen; feil form ved dobbeltrot (`(A + Bx)eʳˣ`) eller komplekst rotpar.
5. **Newton/halvering uten eksistens-/entydighetsargument** — hopper rett til iterasjon uten å vise fortegnsskifte (skjæringssetning) og monotoni.
6. **Skripttolking overfladisk** — gjenkjenner ikke at en rektangel-/trapes-løkke *er* en Riemann-sum som konvergerer mot det bestemte integralet, eller forveksler Newton- og Euler-oppdateringen.
7. **Polarform-slurv** — argument i feil kvadrant, glemt konjugering ved kompleks divisjon, negativ modulus.
8. **Parametersystem: uendelig-mange vs. ingen** — konkluderer «uendelig mange» der Gauss-eliminasjonen faktisk gir en inkonsistent rad (0 = tall).
9. **Relaterte rater: uklar variabelkobling** — deriverer ikke implisitt mhp. t, eller setter inn tallverdier for tidlig (før derivasjon).
10. **Modell-DE: gjettet likning** — setter opp differensiallikningen «på magefølelse» uten å forankre hvert ledd i premissene; fasit krever leddvis begrunnelse.
11. **Enhets-/omregningsfeil** — volum ikke omregnet til liter (dm³), rate i feil tidsenhet.
12. **Tidsfelle** — bruker for lang tid på én tung modelleringsoppgave når alle deloppgaver teller likt; taper de mange billige standardpoengene bakerst i settet.

---

## 6. Formel- og notasjonsapparat

**Formelark utleveres alltid.** Det offisielle «Formelsamling for Matematikk 1000» inneholder (studenten trenger *ikke* pugge disse, men må kunne *bruke* dem):

- **Potens- og logaritmeregler; eksakte verdier for sin/cos** (0, π/6, π/4, π/3, π/2); **trigonometriske identiteter** (Pytagoras, sum/differanse, dobbel vinkel, `sin²`/`cos²`-halvvinkel).
- **Komplekse tall:** `z = a + ib = r(cos φ + i sin φ) = reⁱᶠ`, `r² = a² + b²`, `tan φ = b/a`.
- **Derivasjon:** definisjonen, alle regneregler (produkt/kvotient/kjerne), tabell over standardderiverte (inkl. `arcsin`, `arctan`), **midtpunktsformel** for numerisk derivasjon, **L'Hôpital**.
- **Integrasjon:** Riemann-integralet, egenskaper, delvis integrasjon, substitusjon, `∫f(ax+b)dx`, tabell over antideriverte (inkl. `arcsin`/`arctan`-formene).
- **Lengde/areal/volum:** buelengde `L = ∫√(1+(f′)²)dx`, omdreiningsareal, **rotasjonsvolum om x-aksen** `π∫f²dx` og **om y-aksen** `2π∫x|f|dx`, gjennomsnittsverdi.
- **Numeriske metoder:** **Newtons metode** `xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)`, **trapesmetoden** `Tₙ`, **Eulers metode** `yₙ₊₁ = yₙ + F(xₙ,yₙ)h`.
- **Matriser (2×2):** determinant `ad − bc` og inversformel.
- **Differensiallikninger:** separabel `∫h(y)dy = ∫g(x)dx`; lineær 1. orden via integrerende faktor `ye^F = ∫g·e^F`; **2. orden `y″ + py′ + qy = 0`** med alle tre rot-tilfellene (to reelle / dobbeltrot `eʳˣ(A+Bx)` / komplekst par `eᵃˣ(A cos bx + B sin bx)`).
- **Taylorpolynom** `Pₙ(x) = Σ f⁽ᵏ⁾(a)/k!·(x−a)ᵏ` med **restledd** `Rₙ`; **lineær tilnærming** `f(x) ≈ f(a) + f′(a)(x−a)`.

**Notasjonskonvensjoner boken bør speile:** matriser med `det(A)`, `A⁻¹`, `Aᵀ`; komplekse svar på både `a + bi` og `reⁱᶿ`; DE-er med `y′`, `y″` og initialkrav `y(0)`, `y′(0)`; MATLAB/Octave-syntaks i skriptoppgaver (`@(x)`, `for`/`while`-løkker, `exp`, `log` = ln, `.*`); parametrisk vektorform for løsningsmengder.

**Verktøy:** MATLAB/Octave (dagens emneplan nevner også Python). Kalkulator tillatt fra 2015. Studenten skal både *lese* og *utføre* numeriske algoritmer — programvaren er en integrert del av faget, ikke et tillegg.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen, høyfrekvent i dagens form)
1. **Differensiallikninger** — 100 %. Separabel + lineær 1. orden (integrerende faktor) + 2. orden konstante koeffisienter (alle tre rot-tilfeller, partikulærløsning m/ resonans). Både rene og initialverdiproblemer.
2. **Matriseregning + matriselikning** — 100 %; alltid oppgave 1. Operasjoner m/ definert-sjekk, determinant, invers, `AX = B`, snarveiene `det(Aⁿ)`, `det(A⁻¹)`.
3. **Integrasjonsteknikk** — 96 %. Substitusjon, delvis, delbrøk, trig, absoluttverdi, uegentlig — med føringsstandard.
4. **Komplekse tall** — 10/10 i dagens epoke. Lineær kompleks likning → polarform; `zⁿ`-røtter; kompleks andregradslikning.
5. **Numeriske metoder + MATLAB/Octave** — skripttolking (Newton/Euler/Riemann/halvering/trapes), manuell Newton/halvering med eksistens-/entydighetsargument, numerisk integrasjon/derivasjon fra tabell. Til sammen den mest karakteristiske blokken i epoke 2.
6. **Anvendt DE-modellering** — utled DE fra tekst, løs eller tolk likevekt/langtidsoppførsel (avkjøling, logistisk, befolkning, Torricelli, RLC, svingning).

### Nivå 2 — må kunne (gir bredden)
7. **Lineær transformasjon** (65 %) — standardmatrise fra bilder, geometriske transformasjoner og komposisjoner.
8. **Lineært likningssystem med parameter** (74 %) — full tilfellesanalyse, parametrisk vektorform.
9. **Omdreiningsvolum** (52 %) — riktig aksemetode, y-aksen som hovedtilfelle, koblet til fyll-/tømme-scenario.
10. **Derivasjon, implisitt derivasjon og tangentlinje** (78 %).
11. **Relaterte rater** (39 %) og **optimering** (30 %) — inkl. nærmeste-punkt og parameteroptimering.
12. **Grenser / L'Hôpital** (43 %) og **Taylorpolynom om x = a** (17 %).
13. **Lineær uavhengighet / basis / redusert trappeform** (35 %).

### Nivå 3 — bør dekkes (lav/fallende frekvens eller utvidelsesstoff)
14. **Deriverbarhet av stykkevis funksjon** (9 %), **fundamentalteorem m/ variabel grense** (9 %), **graf-/kurvetolking og retningsfelt** (17 %) — alle stigende i epoke 2.
15. **Buelengde** (4 %), **injektivitet/invers funksjon** (4 %), **polynominterpolasjon** (4 %).
16. **Egenverdier / diagonalisering / ODE-system via egenvektorer** — dekk som utvidelse (bygg- og elektro-studenter kan møte det), men **ikke** eksamenstren mot det for DAFE1000: 0 forekomster etter 2012, antatt flyttet til Matematikk 2000.
17. **Uendelige rekker og flervariabel kalkulus** — dekkes *ikke* som M1000-stoff; hører entydig til M2000. Ta dem med bare hvis en fersk emneplan/eksamen (etter 2017) viser at de er kommet inn.

### Prognose for neste eksamen (basert på 2015–2017-malen)
8–15 likt vektede, i hovedsak selvstendige oppgaver over 5 timer med kalkulator + formelark. Forvent: **oppgave 1 = matriseregning** (operasjoner + determinant/invers + `AX = B`); **én kompleks lineær likning** med polarform + evt. `zⁿ`-røtter; **2–3 differensiallikninger** (minst én 1. orden, én 2. orden, ofte én anvendt modelleringsoppgave med likevekts-/langtidsspørsmål); **2–4 integraler** (minst ett med teknikk-kjeding eller uegentlig/absoluttverdi); **ett omdreiningsvolum om y-aksen**; **én manuell Newton/halvering** med «vis ett nullpunkt»-oppsett; **minst én MATLAB/Octave-skripttolking**; **én numerisk integrasjon/derivasjon fra tabell eller graf**; pluss innslag fra {lineær transformasjon, parametersystem, relaterte rater, optimering, Taylorpolynom, graf-tolking}.

**Usikkerhet:** Arkivet stopper i 2017. Dersom emneplanen etter 2017 har (a) tatt inn Taylor-/potensrekker eller (b) endret hjelpemiddelregime (f.eks. digital eksamen / andre tillatte verktøy), må prognosen justeres. Verifiser mot første tilgjengelige sett etter 2017 før boken kalibreres endelig.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/OsloMet/Matematikk1000-2000-ingeniør/` (flat mappe, ~669 filer, blandet innhold fra flere kurs).

**Sampling-strategi (gitt de 669 filene):** Mappen ble først kartlagt for navnekonvensjon og kursidentitet. Kun filer merket `*_M1000_Eksamen*` (kode FO010A / DAFE-fellessett) ble tatt med. Alle 26 M1000-eksamenssett ble forsøkt tekstuttrukket; de 23 med tekstlag ble analysert i innhold, de resterende registrert på metadata. Løsningsforslag (`_LF`) ble lest der de forelå med tekstlag. Predecessor- og nabokurs ble identifisert og ekskludert (se del 0).

**M1000-eksamenssett lest grundig i innhold (23):**
`2010.06`, `2010.08`, `2011.06`, `2011.08`, `2011.11`, `2012.06`, `2012.08`, `2012.10`, `2013.06`, `2013.08`, `2013.12`, `2014.05`, `2014.08`, `2015.05`, `2015.08`, `2015.12.02`, `2016.03.03`, `2016.05.27`, `2016.08.12`, `2016.12`, `2017.03.02`, `2017.05.29`, `2017.08.01` — alle `_M1000_Eksamen.pdf`. Epoke 2 (2015–2017) og de sene E1-settene ble vektet tyngst.

**Løsningsforslag lest for metode-/sensorinnsikt (tekstlag tilgjengelig):**
`2011.06/08/11_LF`, `2012.06_LF`, `2013.06/12_LF`, `2014.05_LF`, `2015.05/08/12_LF`, `2016.03/05/12_LF`, `2017.03/05_LF`. Flere `_LF` (2010.06, 2012.08/10, 2013.08, 2014.02/08, 2016.08, 2017.08) finnes kun som skannede bilder uten tekst.

**Kun metadata-registrert (skannede bilder, intet tekstlag):** `2014.02`, `2014.12`, `2015.02` (M1000_Eksamen).

**Formelsamling:** `M1000_Formelsamling.pdf` (lest i sin helhet — grunnlaget for del 6).

**Kontrastkilde (for å avgrense M1000 mot M2000):** `2014.06.06_Eksamen_M2000.pdf` (bekrefter at rekker, Taylorrekker, flervariabel og diagonalisering hører til 2000-emnet).

**Eksplisitt ekskludert etter identifikasjon:**
- Matematikk 2000: `*M2000*` (6 filer).
- Forkurs matematikk (kode FO929A): `eksamen-2007…2009*`, `peksamen-*`, `*forkurs_eksamen*`, `FO929A-*` — forsidene sier «Forkurs, Avdeling for Ingeniørutdanning».
- Fysikk (kode FO340E): `FO340_*`, `FO340E-*` — mekanikk, ikke matematikk.
- `FO152A`/`FO152_*`, samt alle daglige forelesningsnotater, øvinger og obliger (`20xx-xx-xx_*`, `*oblig*`, `*fmatte*`, `*_notater*`) — ikke eksamenssett.

**Fagbeskrivelse:** omskrevet sammendrag av OsloMets emneplan for DAFE1000 (scratchpad: `fagbeskrivelse-oslomet-mat1000.md`; kilde: student.oslomet.no, emneplaner 2022 og 2024).

**Merknader om kildene:**
- **Ingen deleksamen/midtveis:** Matematikk 1000 har kun sluttprøve; det finnes ikke noe midtveisarkiv (til forskjell fra f.eks. MAT1100).
- **Epokeskille 2014→2015:** hjelpemiddel- og formatskiftet (se del 1) gjør at 2015–2017-settene er de mest prediktive for dagens DAFE1000; 2010–2014-settene (FO010A) beskriver en eldre form med bl.a. egenverdier/diagonalisering som senere er tatt ut.
- **Arkivgrense 2017:** ~9 års gap til dagens verifiserte emneplan; prognoser er markert med forbehold.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og standardformler (formelarket) er allmenn fagnotasjon og ikke opphavsrettslig beskyttet tekst.
