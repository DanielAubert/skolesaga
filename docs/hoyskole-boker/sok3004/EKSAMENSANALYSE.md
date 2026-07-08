# Eksamensanalyse: SØK3004 / SOK3004 Videregående matematisk analyse (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv i `~/Desktop/Eksamner/NTNU/SOK3004/` — et stort arkiv på ca. 48 filer som dekker perioden **høst 2010 til høst 2025**. Arkivet inneholder oppgavesett fra V/H 2010–2025 (med enkelte hull) og **10 sensorveiledninger/løsningsforslag** (V2015, H2015, V2017, H2017, H2018, V2020, V2021, H2021, V2022, H2023, V2024, H2024 — der de fleste er håndskrevne, skannede fasitark). Siste ~8 år (2018–2025) er lest grundig; eldre sett er skummet for tema- og formatregistrering. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Matematiske uttrykk, teoremnavn, modellsammenhenger og tallsvar er standard fagnotasjon / faglige fakta uten verkshøyde. Analysen er kvantitativ der kildene tillater det.
>
> **Kildemerknad om leselighet:** De fleste sensorveiledningene og de fullstendige løsningsforslagene i arkivet er **håndskrevne og skannede** (bildebaserte PDF-er) og gir lite eller ingen tekst med `pdftotext`. Sensorveiledningen for **V2021** foreligger som ren tekst og er lest fullstendig; øvrige fasitark er lest via OCR (`tesseract`, norsk+engelsk) med de begrensninger det gir for håndskrift. **Oppgavesettene** er derimot overveiende tekstbaserte og er lest direkte. Analysen av oppgaveinnhold hviler derfor primært på selve oppgavesettene (grundig), supplert med de fasitene som lot seg lese.
>
> **Emnekode-merknad:** Emnet skrives både «SØK3004» og «SOK3004» i arkivet og på NTNUs sider (samme emne). Fullt navn: *Videregående matematisk analyse* (engelsk: *Advanced Mathematics for Economists*), **15 studiepoeng**, aktivt masteremne ved Institutt for samfunnsøkonomi, NTNU.

---

## 0. Kort om emnet + NTNU/UiO-forskjellen (les dette først)

SØK3004 er **masterøkonomenes matematikk-kurs** ved NTNU. Til tross for «master»-plasseringen er det et rendyrket **matematikkemne** — ikke økonometri, ikke modelleringsteori — som skal gi samfunnsøkonomistudenter det matematiske apparatet de trenger i mikro-, makro- og finansfagene på masternivå. Det bygger videre på bachelor-matematikken (**SØK1001**, tidlig innføringsmatematikk for økonomer) men går **vesentlig dypere**: der SØK1001 stopper ved endimensjonal/flervariabel derivasjon og enkel optimering, legger SØK3004 til hele apparatet:

- **integrasjon** (ubestemt/bestemt, delvis integrasjon, substitusjon, uegentlige integraler, arealberegning);
- **lineær algebra** (matriseregning, determinanter, rang, Cramers regel, invers, egenverdier/egenvektorer, likningssystemer);
- **differensiallikninger** (første- og andreordens, systemer, faseromsanalyse, stabilitet);
- **statisk optimering med og uten bibetingelser** (stasjonærpunkter og andreordensbetingelser via Hesse-matrise, Lagrange, Kuhn–Tucker);
- **mikroøkonomiske anvendelser** (produksjonsteknologi, kostnadsminimering, profittmaksimering, konsumentteori, indirekte nytte, risikoaversjon, nåverdi).

### Den direkte UiO-parallellen: ECON3120/ECON4120 «Mathematics 2»

Den beste UiO-motsvarigheten er **ECON3120/ECON4120 *Mathematics 2 — Calculus and Linear Algebra*** (Økonomisk institutt). Sammenlign gjerne den eksisterende analysen i `../econ3120/EKSAMENSANALYSE.md` — overlappet er stort og reelt:

| | **SØK3004 (NTNU)** | **ECON3120/4120 (UiO)** |
|---|---|---|
| Nivå/plassering | Master, 15 sp, «Advanced Mathematics for Economists» | Bachelor+master (dobbeltkodet), 10 sp, «Mathematics 2» |
| Kjerneinnhold | Integrasjon · lineær algebra · diff.likninger · optimering (Lagrange/Kuhn–Tucker) | Lineær algebra · diff.likninger · betinget optimering (Lagrange/Kuhn–Tucker) · implisitt funksjonsteori |
| Pensumbok | Sydsæter/Hammond/Strøm m.fl. (*Essential/Further Mathematics for Economic Analysis*); Varian for mikro-anvendelsene | Sydsæter/Hammond m.fl. (samme familie) |
| Eksamensspråk | Bokmål + nynorsk (2020–2025 én av dem; eldre ofte begge) | Engelsk (eldre tospråklig) |
| Format | 4 (nyere) / 5 (eldre) oppgaver, jevn vekting | 4–5 oppgaver, ~12–14 items, jevn vekting |
| Sensorprofil | Håndskrevne fasitark; «begrunn svarene» | Uttrykte veiledninger; «state reasons for all your answers» |

**Konklusjon:** SØK3004 og ECON3120/4120 dekker i praksis samme matematiske pensum for økonomer. De hører til samme «matematisk-analyse-for-økonomer»-familie på master-/høyere bachelornivå, sammen med UiOs videre kurs. Der ECON3120 legger noe mer vekt på **implisitt/omvendt funksjonsteorem og bevis-orientert argumentasjon**, legger SØK3004 mer vekt på **regneferdighet og konkrete økonomiske anvendelser** (nåverdi/finans, produksjonsteknologi, OLS via lineær algebra). En felles lærebokstamme kan derfor tjene begge emner, med SØK3004-spesifikke regne-drilloppgaver på toppen.

**Forhold til SØK1001:** SØK1001 er forkunnskapen (grunnleggende derivasjon, funksjonslære, enkel optimering). SØK3004 forutsetter dette som kjent og bruker eksamenstiden på det SØK1001 utelater: **integrasjon, matriseregning, egenverdier, differensiallikninger og betinget optimering med Lagrange/Kuhn–Tucker.** Boka bør derfor ikke bruke plass på repetisjon av elementær derivasjon utover en kort verktøyoppfriskning.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 5 timer**, karakter A–F, 15 studiepoeng. (Nyere sett oppgir 09:00–14:00; V2020-settet presiserer at 15 min ekstra kun er til opplasting av håndtegninger.)
- **Digital (Inspera).** Deloppgaver besvares dels direkte i Inspera, dels på papirark med sjusifret kode som lastes opp (typisk oppgaver med regning/figur). Kun blå/svart kulepenn på håndark.
- **Hjelpemidler — VARIERER, og dette er en viktig planleggingsvariabel:**
  - **Kode H** (H2025): *ingen* trykte/skrevne hjelpemidler, kun kalkulator. Da må formler og standardresultater sitte i hodet.
  - **Kode C** (V2025 og typisk ellers): godkjent kalkulator **+ Sydsæters matematiske formelsamling** (*Matematisk formelsamling for økonomer*, Sydsæter et al.).
  - Praktisk konsekvens: boka bør trene studenten både til å **slå opp effektivt** i Sydsæter-formelsamlingen og til å **huske kjerneresultatene** (integrasjonsregler, egenverdiformel for 2×2, løsningsformler for 1./2. ordens diff.likninger, Kuhn–Tucker-oppsettet), siden noen semestre kjøres uten formelsamling.
- **Målform:** oppgaveteksten gis på **bokmål og/eller nynorsk** (eldre sett ofte begge parallelt; enkelte fasiter/oppgaver har engelsk terminologi i parentes, f.eks. «particular solution», «globally asymptotically stable»).
- **Faglærere/oppgavestillere roterer** og forklarer stilvariasjonen mellom år: bl.a. Snorre Lindset, Simone Valente, Colin Green (2025). Rotasjonen forklarer at noen sett er «mekanisk regnetunge» og andre mer anvendelses-/økonomitunge.
- **Standardinstruksjon i alle sett:** «Ta de forutsetninger du finner nødvendig» og «%-satsene bak oppgavenummereringen er kun en indikasjon på vekting». Studenten oppfordres til å **presisere egne antakelser**.

### Struktur — to regimer

**Regime A (eldre, ca. 2010–2019): 5 (av og til 4) oppgaver, anvendelsestunge.** Her var oppgavene ofte pakket inn i en økonomisk fortelling: prismatriser og arbitrasje, indirekte nyttefunksjon, korttids tilbuds- og profittfunksjon, risikoaversjon (u′>0, u″<0), nåverdi/investering, biologiske vekst- og symbiosemodeller (fase­diagram med Jacobi-matrise), og **Kuhn–Tucker-programmering** med økonomisk tolkning av multiplikatoren. OLS-estimatoren `b = (X′X)⁻¹X′y` ble utledet fra lineær algebra (V2019).

**Regime B (2020–2024): fast 4-oppgavemal, 25 % hver, mer mekanisk.** Nesten låst mønster:

| Oppgave | Tema | Fast innhold |
|---|---|---|
| **1** | **Integrasjon** | 3 ubestemte integraler (potens, ln/brøk, `x·eˣ`/delvis int.) + arealberegning under/over x-aksen for en parabel |
| **2** | **Lineær algebra** | `A+B`, `AB`, determinanter; `CD` med determinant + rang; likningssystem `Ax=b` (Cramer/Gauss) — av og til egenverdier/egenvektorer |
| **3** | **Differensiallikninger** | 1. ordens lineær (`ẋ+ax=b`), 1. ordens separabel, 2. ordens (`ẍ+…`) eller lineært system med likevekt/stabilitet |
| **4** | **Optimering** | Stasjonærpunkt for `f(x,y[,z])` + klassifisering (maks/min/sadel via Hesse); deretter Lagrange (likhet) **eller** Kuhn–Tucker/ulikhetsbibetingelser |

**Regime C (2025, nye faglærere): tilbake mot variasjon.** V2025 (5 oppgaver, kode C): integrasjon, **geometri i R³** (plan/linje/skjæring), en **andreordens diff.likning av Black–Scholes-type** (`½σ²x²F″+rxF′−rF=0`), separabel DE + lineært DE-system med stabilitet, og et **Lagrange-problem med tolkning av λ**. H2025 (4 oppgaver, kode H): integrasjon (inkl. numerisk/uegentlig), **matrisebevis** (`(PQ)²`, symmetri av `A′A`), 1. ordens DE med steady state/stabilitet og variabelskifte, og profittmaksimering (`pxᵃ−wx`) + Cobb–Douglas-nyttemaksimering med budsjettbibetingelse.

### Vektings-/strukturhistorikk (utvalg fra arkivet)

| Sett | Struktur | Sett | Struktur |
|---|---|---|---|
| H2010 | 5 oppg. (int/DE/matrise blandet) | H2019 | 4 oppg. (int/lin.alg/DE/optimering) |
| V2012 | 4 oppg. 30/30/20/20 (Kuhn–Tucker + DE-system) | V2020 | 4 oppg. 25×4 (nåverdi/lin.alg/DE 2.ordn/produsent) |
| V2013 | 4 oppg. (Lagrange m/verdifunksjon) | H2020 | 5 oppg. 20×5 (int/matrise/DE/ikke-lineær prog./komparativ statikk) |
| H2013 | 5 oppg. | V2021 | 5 oppg. (int/matrise/DE/Kuhn–Tucker/konveks profittfunksjon) |
| V2014 | 4 oppg. (DE-system + Jacobi/egenverdi) | H2021 | 4 oppg. 25×4 |
| V2015 | — (fasit i arkivet) | V2022 | 4 oppg. 25×4 |
| H2015 | — (fasit i arkivet) | H2022 | 4 oppg. 25×4 |
| V2016 | 4 oppg. 30/30/20/20 (DE-system + Kuhn–Tucker) | H2023 | 4 oppg. 25×4 |
| H2016 | 4 oppg. 25×4 (DE-vekst + nyttetolkning) | V2024 | 4 oppg. 25×4 (m/egenverdier i oppg. 2) |
| V2017 | 4 oppg. (DE-system/Jacobi + indirekte nytte) | H2024 | 4 oppg. 25×4 (Taylor-approks. i oppg. 1) |
| H2017 | 5 oppg. (int/DE/prismatrise/Taylor/produsent) | V2025 | 5 oppg. 20×5 (R³-geometri, Black–Scholes-DE) |
| H2018 | — (fasit i arkivet) | H2025 | 4 oppg. 25×4 (kode H; matrisebevis) |

**Konstanter på tvers av 15 år:**
1. **De fire søylene er alltid til stede** i en eller annen form: integrasjon, lineær algebra, differensiallikninger, optimering. Ingen eksamen mangler diff.likninger eller optimering.
2. **Økonomisk innpakning roterer** (aksjeverdi/nåverdi, produksjonsteknologi, konsument, OLS, biologisk vekst) men den matematiske kjernen er stabil.
3. **Vektingen er tilnærmet jevn** (25 % ved 4 oppgaver, 20 % ved 5) — ingen enkeltoppgave dominerer.
4. **Kuhn–Tucker / ulikhetsbibetingelser** er et fast innslag i optimeringsoppgaven (eksplisitt i 2012, 2016, 2020, 2021; som `x≤a, y≤b`-programmer i 2022–2024).

---

## 2. Temafrekvens

Score = anslått andel av lesbare sett (≈20 sett 2012–2025) der temaet inngår som deloppgave eller mer. Delt i de fire spor faget alltid prøver.

### 2A. Integrasjon (Oppgave 1)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| Ubestemte integraler av potensfunksjoner (`∫xⁿ dx`) | **~100 %** | Alltid første deloppgave; ren regnetrening |
| **Delvis integrasjon** (`∫x·eˣ dx`, `∫x²eˣ dx`, `∫ln x dx`) | **~90 %** | Signaturteknikken i oppgave 1c nesten hvert år |
| **Substitusjon** (`∫ln x / x dx`, `∫x/(x²+2) dx`, `∫x√(x+1) dx`) | **~70 %** | Ofte kombinert med delvis integrasjon i én oppgave |
| **Bestemt integral + arealberegning** (parabel over/under x-aksen) | **~75 %** | Krever oppdeling der kurven skifter fortegn; klassisk fallgruve |
| **Uegentlige integraler** (`∫₀^∞ e^{−ks}D(s) ds`) | **~30 %** | Nåverdi av kontinuerlig dividende-/kontantstrøm (V2020, H2017) |
| **Taylor-approksimasjon** (2.–4. ordens; `e`, `e^{−rt}`, Gauss-integral) | **~35 %** | H2017, V2019, H2024; kobles ofte til nåverdi |
| Integral som funksjon av grense + derivasjon (analysens hovedsetning) | ~15 % | V2019 c/d |

### 2B. Lineær algebra (Oppgave 2)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Matriseaddisjon og -produkt** (`A+B`, `AB`, `CD`), dimensjonskrav | **~90 %** | Sjekk at produktet eksisterer; `AB≠BA` |
| **Determinant** (2×2, 3×3), regneregler, `det(AB)=det A·det B` | **~85 %** | Ofte flere matriser i samme oppgave |
| **Rang** av matrise / utvidet koeffisientmatrise | **~70 %** | Kobles til løsbarhet: `r(A)=r(Ab)` ⇒ løsning finnes |
| **Likningssystem `Ax=b`** (Gauss-eliminasjon, Cramers regel, parameterverdier) | **~85 %** | Både numerisk og med konstanter `m,n`; fri variabel/uendelig mange løsninger |
| **Egenverdier og egenvektorer** | **~40 %** | Eksplisitt (V2024, V2014) + implisitt i stabilitet av DE-systemer |
| **Invers matrise / for hvilke verdier eksisterer invers** | ~30 % | V2012, OLS-utledningen V2019 |
| **Matrisebevis / abstrakte identiteter** (`(PQ)²`, symmetri av `A′A`) | ~20 % | H2025, V2014 — mer bevisorientert vri |
| Geometri i Rⁿ (plan, linje, normalvektor, skjæring) | ~10 % | V2025 (nytt innslag) |

### 2C. Differensiallikninger (Oppgave 3)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **1. ordens lineær** (`ẋ+ax=b`), generell + partikulær løsning | **~95 %** | Standardformelen `x=Ce^{−at}+b/a`; likevekt/steady state |
| **1. ordens separabel** (`ẋ=g(t)h(x)`, `ẋ=t/x`, `ẋ=−3tx³`) | **~80 %** | Med startbetingelse → integralkurve |
| **2. ordens lineær med konstante koeffisienter** (`ẍ+bẋ+cx=f(t)`) | **~65 %** | Karakteristisk likning; homogen + partikulær; globalt asymptotisk stabil? |
| **System av 1. ordens DE** (`ẋ=…, ẏ=…`), likevekt | **~55 %** | Finn likevekt; stabilitet via egenverdier/spor+determinant |
| **Stabilitetsanalyse** (asymptotisk/globalt), faseromsdiagram, nullisokliner | **~55 %** | Både grafisk og analytisk; Jacobi-matrise ved ikke-lineære systemer |
| **Variabelskifte til avvik fra steady state** (`y=x−x_ss`) | ~20 % | H2025 — pedagogisk standard-triks |
| Andreordens ØDE av finanstype (Black–Scholes-lignende) | ~10 % | V2025 — potensfunksjon-ansatz `F=x^r` |
| Anvendelse: befolknings-/populasjonsvekst, symbiosemodell | ~25 % | H2016, V2012, V2014 (biologisk innpakning) |

### 2D. Optimering (Oppgave 4[+5])

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Stasjonærpunkt + klassifisering** (maks/min/sadel) via 2. ordens betingelser / Hesse-matrise | **~85 %** | `f(x,y[,z])`; ledende hovedminorer / definitthet |
| **Lagrange med likhetsbibetingelse** + tolkning av λ | **~75 %** | Nyttemaks (Cobb–Douglas), kostnadsminimering, tidsallokering |
| **Kuhn–Tucker / ulikhetsbibetingelser** (`x≤a`, `x≥0`, ikke-lineær programmering) | **~60 %** | Komplementær slakkhet; sjekk hjørne-/indre løsning |
| **Andreordensbetingelser / definitthet** (konkav ⇒ maks, konveks ⇒ min) | **~70 %** | Kreves for å begrunne at et stasjonærpunkt er maks/min |
| **Mikro-anvendelse: profittmaksimering** (`pxᵃ−wx`, `p·y−C`), tilbudsfunksjon | **~40 %** | Indre maks krever `0<α<1`; H2025, V2020, H2017 |
| **Mikro-anvendelse: konsument/nyttemaks** (Cobb–Douglas, log-nytte), etterspørsel | **~40 %** | `γ ln x+(1−γ)ln y` u.b.b. budsjett (H2025) |
| **Kostnadsminimering / kostnadsfunksjon fra produktfunksjon** | ~25 % | V2020 (to fabrikker), indirekte nytte (V2017) |
| **Konveksitet av profittfunksjonen i faktorpriser** (Varian kap. 3) | ~15 % | V2021 oppg. 5 — begrunn at faktorbruk faller når faktorpris stiger |
| Risikoaversjon (`u′>0, u″<0`), relativ risikoaversjon | ~10 % | V2013 |

**Viktigste funn:**
1. **Emnet ER de fire søylene.** En lærebok skal bygges som fire likestilte hoveddeler: (I) integrasjon, (II) lineær algebra, (III) differensiallikninger, (IV) statisk optimering — med et femte, tynnere lag av **mikroøkonomiske anvendelser** som binder dem sammen.
2. **Regnesikkerhet er alfa og omega i nyere sett.** 2020–2024-malen er mekanisk: kan du integrere ved delvis integrasjon, regne `AB`/determinant/rang, løse en 1./2. ordens diff.likning og klassifisere et stasjonærpunkt — så består du. Boka må derfor ha **rikelig med drilloppgaver med fasit**.
3. **Kuhn–Tucker + λ-tolkning er toppkarakter-differensiatoren.** Å sette opp K–T-betingelsene korrekt (med komplementær slakkhet) og gi λ en **økonomisk tolkning** (skyggepris/grenseverdi) skiller de sterke besvarelsene.
4. **Stabilitet og faseanalyse** er det tyngste diff.liknings-temaet og går igjen i anvendelses-settene (biologisk vekst, DE-systemer). Egenverdier dukker opp både «rent» og som verktøy for stabilitet.
5. **Nåverdi/finans og produksjonsteknologi** er de to faste økonomiske innpakningene — samme matematikk (uegentlig integral hhv. Cobb–Douglas-optimering) i ny drakt.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med typisk plassering og krav. Alle eksempler er **omskrevet**.

### A. Regnetunge integraler
- **Krav:** Behersk potensregelen, delvis integrasjon (`∫u dv = uv − ∫v du`) og substitusjon flytende. Ved bestemt integral: sett inn grenser korrekt; ved areal må kurven deles opp der den skifter fortegn (arealet er integralet av tallverdien).
- **Omskrevet eksempel:** «Regn ut `∫x²eˣ dx`, og finn arealet mellom x-aksen og parabelen `y=(x−2)²−4` fra `x=0` til `x=6`.»

### B. Nåverdi / uegentlig integral
- **Krav:** Sett opp nåverdien som `V₀=∫₀^∞ e^{−ks}D(s) ds` og evaluer for ulike kontantstrømprofiler (konstant, eksponentiell vekst `δe^{gs}`, lineær `δs`). Krever grensen `s→∞` og konvergensbetingelsen `g<k`.
- **Omskrevet eksempel:** «En aksje gir en kontinuerlig dividende­strøm `D(s)`. Med diskonteringsrente `k>0`, finn dagens verdi når `D(s)=δe^{gs}` (`g<k`).»

### C. Taylor-approksimasjon
- **Krav:** Skriv opp Taylor-polynomet av gitt orden om et passende punkt, og bruk det til å tilnærme en tallverdi (`e`, `e^{−rt}`, et Gauss-integral). Gjerne koblet til nåverdi eller en økonomisk tolkning av 1.-ordens leddet.
- **Omskrevet eksempel:** «Bruk en andreordens Taylor-tilnærming til å estimere `∫_{−½}^{½} e^{−x²/2} dx`.»

### D. Matriseregning: sum, produkt, determinant
- **Krav:** Regn `A+B`, `AB` (sjekk dimensjonssamsvar; forklar hvorfor `BA` evt. ikke finnes), og determinanter. Bruk gjerne `det(AB)=det A·det B` som kontroll.
- **Omskrevet eksempel:** «For gitte 2×2-matriser `A` og `B`, finn `A+B`, `AB` og determinantene til `A`, `B` og `AB`.»

### E. Likningssystem, rang og løsbarhet
- **Krav:** Løs `Ax=b` med Gauss-eliminasjon eller Cramers regel. Bestem rangen til `A` og til den utvidede matrisen `Ab`, og **relater** til løsningsmengden: `r(A)=r(Ab)<n` ⇒ uendelig mange løsninger (frie variabler); `r(A)<r(Ab)` ⇒ ingen løsning; `r(A)=r(Ab)=n` ⇒ entydig løsning.
- **Omskrevet eksempel:** «Løs systemet, angi rangen til koeffisientmatrisen og den utvidede matrisen, og forklar løsningsmengden i lys av rangene.»

### F. Egenverdier og egenvektorer
- **Krav:** Finn egenverdiene fra `det(A−λI)=0` og de tilhørende egenvektorene. For symmetriske matriser: reelle egenverdier, ortogonale egenvektorer. Bruk egenverdiene til å avgjøre stabilitet av DE-systemer (alle Re λ<0 ⇒ asymptotisk stabilt).
- **Omskrevet eksempel:** «Finn egenverdiene og egenvektorene til `A=[[1,−3],[−3,1]]`.»

### G. Førsteordens differensiallikning (lineær og separabel)
- **Krav:** Lineær `ẋ+ax=b`: generell løsning `x(t)=Ce^{−at}+b/a`, partikulær via startbetingelse, likevekt `x_ss=b/a` og dens stabilitet (stabil hvis `a>0`). Separabel `ẋ=g(t)h(x)`: skill variablene, integrer begge sider, sett inn startbetingelse → integralkurve.
- **Omskrevet eksempel:** «Løs `ẋ+3x=9`; finn eventuell likevekt. Løs deretter `ẋ=−3tx³` og finn integralkurven gjennom `(0,1)`.»

### H. Andreordens differensiallikning
- **Krav:** Homogen `ẍ+bẋ+cx=0`: karakteristisk likning `r²+br+c=0`, tre tilfeller (reelle ulike / dobbel / komplekse røtter). Partikulær løsning ved ubestemte koeffisienter for polynom/eksponensiell høyreside. Global asymptotisk stabilitet krever begge røtter med negativ realdel.
- **Omskrevet eksempel:** «Finn den generelle løsningen av `ẍ−ẋ−6x=0` og en partikulærløsning av `ẍ−ẋ−6x=t²−3`. Er likevekten globalt asymptotisk stabil?»

### I. System av differensiallikninger + stabilitet/fasediagram
- **Krav:** Finn likevekten (`ẋ=ẏ=0`). Avgjør stabilitet via egenverdiene til koeffisient-/Jacobi-matrisen (eller via spor og determinant). Tegn faseromsdiagram med nullisokliner og retningspiler i de fire regionene.
- **Omskrevet eksempel:** «For systemet `ẋ=−2x+2y+3`, `ẏ=−y+3`: finn likevekten, avgjør om den er asymptotisk stabil, og skisser faseromsdiagrammet med nullisoklinene.»

### J. Fri (statisk) optimering: stasjonærpunkt og klassifisering
- **Krav:** Sett gradienten lik null, løs for stasjonærpunkt(er). Klassifiser via andreordensbetingelsene: Hesse-matrisens definitthet (positiv definit ⇒ min, negativ definit ⇒ maks, indefinit ⇒ sadel). For to variabler: sjekk `f_xx`, og `f_xx f_yy − f_xy²`.
- **Omskrevet eksempel:** «Finn stasjonærpunktet til `f(x,y)=2x²−4xy+4y²−4y` og avgjør om det er maks, min eller sadel.»

### K. Lagrange med likhetsbibetingelse
- **Krav:** `ℒ=f(x,y)−λ(g(x,y)−c)`, førsteordensbetingelser, løs for `(x*,y*,λ)`. Bekreft at det er maks/min (andreordens/rand-Hesse). **Tolk λ** som endring i optimal verdi per enhet slakkere bibetingelse (skyggepris). Grafisk løsning (tangering) godtas som supplement.
- **Omskrevet eksempel:** «Maksimer `f(x,y)=xy` gitt `x+4y=16`. Bekreft at løsningen er et maksimum, og tolk lagrangemultiplikatoren.»

### L. Kuhn–Tucker / ikke-lineær programmering
- **Krav:** Sett opp Lagrange-funksjonen og K–T-betingelsene med **komplementær slakkhet**: `∂ℒ/∂xⱼ ≤ 0` (`=0` hvis `xⱼ>0`), `λ≥0` (`=0` hvis bibetingelsen er slakk). Test systematisk hvilke betingelser som binder; sammenlign kandidatløsninger (hjørner vs. indre punkt). Ved `x≤a, y≤b`-programmer: sjekk om det ubetingede optimum ligger innenfor tillatt område.
- **Omskrevet eksempel:** «Maksimer `2xy+2` gitt `x+2y≤2`, `x≥0`, `y≥0`. Sett opp Kuhn–Tucker-betingelsene og finn løsningen.»

### M. Mikro-anvendelse: produsent (profittmaks, kostnad, tilbud)
- **Krav:** Profittmaks `max pxᵃ−wx` → FOC gir `x*=(αp/w)^{1/(1−α)}`; indre maks krever `0<α<1` (konkav profitt). Kostnadsminimering fra Cobb–Douglas produktfunksjon → kostnadsfunksjon `C(y)`. Konveksitet av profittfunksjonen i faktorpriser (Varian) ⇒ faktoretterspørsel faller når egen faktorpris stiger.
- **Omskrevet eksempel:** «En bedrift maksimerer `π=pxᵃ−wx` med `0<α<1`. Finn optimal sysselsetting `x*` og forklar hvorfor det er et indre maksimum.»

### N. Mikro-anvendelse: konsument (nyttemaks, indirekte nytte)
- **Krav:** `max u(x,y)` u.b.b. `pₓx+p_yy=m` via Lagrange → etterspørselsfunksjoner. For log-/Cobb–Douglas-nytte: `x*=γm/pₓ`, `y*=(1−γ)m/p_y`. Indirekte nyttefunksjon ved innsetting; drøft hvordan priser og inntekt påvirker den.
- **Omskrevet eksempel:** «Maksimer `u(x,y)=γ ln x+(1−γ)ln y` gitt `pₓx+p_yy=m`, `0<γ<1`. Finn de optimale mengdene.»

---

## 4. Sensorkrav / vurderingskriterier

Sensorveiledningene i arkivet er overveiende **håndskrevne fullstendige regneutledninger** (fasitark), ikke prosatekst med eksplisitte poengrubrikker. Kriteriene nedenfor er derfor utledet av (i) den lesbare V2021-veiledningen, (ii) OCR av de nyere fasitene (H2023, V2024, H2024), og (iii) de faste instruksjonene i oppgavesettene.

### Faste metaregler
1. **Begrunn svarene.** Oppgavene ber gjennomgående om at studenten *viser* utregningen og *begrunner* konklusjoner («Begrunn svaret», «Er dette et maks/min/sadel?»). Et bart tallsvar uten mellomregning gir lite uttelling.
2. **Presiser egne antakelser.** Instruksjonen «ta de forutsetninger du finner nødvendig» betyr at studenten skal *skrive ned* hvilke forutsetninger som legges til grunn ved tolkning.
3. **Andreordensbetingelser er obligatoriske ved optimering.** Fasitene sjekker konsekvent om et stasjonærpunkt er maks/min/sadel via Hesse-matrisens definitthet, og om et Lagrange-punkt faktisk er et maksimum. Å hoppe over dette gir trekk.
4. **Kuhn–Tucker skal føres systematisk.** V2021-fasiten viser hele resonnementet: sett opp betingelsene, argumenter for hvilke som binder (indre løsning gir høyere verdi enn hjørner her), slutt at `λ>0` ⇒ bibetingelsen bindende med likhet, løs de resulterende likningene.
5. **λ skal tolkes økonomisk.** Der oppgaven spør (f.eks. V2025 oppg. 5c), forventes en tolkning av lagrangemultiplikatoren som skyggepris/grenseverdi av å slakke bibetingelsen.
6. **Rang skal relateres til løsbarhet.** I lineær algebra-oppgaven honoreres at studenten kobler `r(A)` og `r(Ab)` til antall løsninger og antall frie variabler (`n−r(A)`), ikke bare regner ut tallene.
7. **Stabilitet skal konkluderes eksplisitt.** For diff.likninger/-systemer: si klart om likevekten er (globalt/asymptotisk) stabil, og begrunn via fortegn på `a`, røttene, eller egenverdiene/sporet+determinanten.
8. **Fagbøker det henvises til:** V2021-fasiten refererer eksplisitt til **Sydsæters «Further Mathematics»** (formel 5.4.6 for diff.likningen) og til **Varian kap. 3** for konveksitet av profittfunksjonen — pensum er altså Sydsæter-familien for matematikken og Varian for mikro-anvendelsene.

### Hva som skiller karakternivåene (utledet)
- **Bunn (E–D):** korrekt oppsett og hovedmekanikk — regner de tre integralene, setter opp og løser `Ax=b`, finner generell løsning av en 1. ordens DE, finner stasjonærpunktet. Klarer den «mekaniske» 2020–2024-malen på et grunnleggende nivå.
- **Midt (C):** komplette og korrekte utregninger med riktige mellomsteg — inkl. delvis integrasjon/substitusjon, determinant/rang med korrekt løsbarhetstolkning, partikulær + generell DE-løsning med startbetingelse, korrekt klassifisering av stasjonærpunkt via Hesse, korrekt Lagrange-løsning.
- **Topp (A/B):** behersker **Kuhn–Tucker med komplementær slakkhet** og **tolker λ økonomisk**; håndterer **stabilitet/faseanalyse** (egenverdier, spor+determinant, nullisokliner) trygt; ser **spesialtilfeller** (uendelig mange løsninger, sadelpunkt, hjørneløsning, konvergensbetingelse `g<k` i nåverdiintegral); kobler **matematikk til økonomisk innhold** (konveks profittfunksjon ⇒ substitusjon bort fra dyre faktorer); og fører **bevis/generelle argumenter** (symmetri av `A′A`, matriseidentiteter) presist.

---

## 5. Typiske feil

Utledet av det fasitene korrigerer og det oppgavene er konstruert for å avsløre:

1. **Glemme å dele opp arealintegralet** der kurven skifter fortegn — å integrere `y=(x−2)²−4` rett fra 0 til 6 gir feil areal fordi parabelen er under x-aksen på en del av intervallet.
2. **Feil ved delvis integrasjon** — velge feil `u` og `dv`, eller glemme leddet `∫v du`.
3. **Regne `AB` når produktet ikke er definert**, eller anta `AB=BA`. Dimensjonssjekk mangler ofte.
4. **Ikke relatere rang til løsbarhet** — regne ut `r(A)` og `r(Ab)` men ikke trekke konklusjonen om (ingen / entydig / uendelig mange) løsninger og antall frie variabler.
5. **Glemme partikulærløsningen / startbetingelsen** i differensiallikninger, eller stoppe ved den homogene løsningen.
6. **Feil fortegnsregel for stabilitet** — konkludere med stabilitet uten å sjekke at `a>0` (1. ordens), at begge karakteristiske røtter har negativ realdel (2. ordens), eller at alle egenverdiene har negativ realdel (system).
7. **Hoppe over andreordensbetingelsen** ved optimering — påstå «maksimum» uten å sjekke Hesse-matrisens definitthet; forveksle maks/min/sadel.
8. **Behandle et Kuhn–Tucker-problem som et rent Lagrange-problem** — ignorere ikke-negativitetsbetingelsene og komplementær slakkhet, eller bare teste indre løsning uten å vurdere hjørner.
9. **Ikke tolke λ** — regne ut multiplikatoren men la den stå uten økonomisk mening.
10. **Overse konvergensbetingelsen** i uegentlige integraler (nåverdi krever `g<k`; ellers divergerer integralet).
11. **Rote med Jacobi-matrisen / nullisoklinene** i faseanalysen — feil retning på pilene i regionene, eller feil egenvektor til den negative egenverdien.
12. **Ikke oppgi forutsetninger** som oppgaven ber om («ta de forutsetninger du finner nødvendig»).

---

## 6. Prioritering for boka

### Nivå 1 — MÅ beherskes perfekt (avgjør ståkarakteren; ~100 % frekvens)
1. **Integrasjonsteknikk** — potens, delvis integrasjon, substitusjon; bestemt integral og arealberegning med oppdeling. (Oppgave 1, alltid.)
2. **Matriseregning + likningssystemer** — `A+B`, `AB`, determinant, rang, `Ax=b` med Cramer/Gauss, og løsbarhetstolkning via rang. (Oppgave 2, alltid.)
3. **Differensiallikninger** — 1. ordens lineær og separabel med start-/likevektsbetingelse; 2. ordens lineær; og stabilitetskonklusjon. (Oppgave 3, alltid.)
4. **Fri optimering** — stasjonærpunkt + klassifisering via Hesse-matrise/andreordensbetingelser. (Oppgave 4a, nesten alltid.)

### Nivå 2 — MÅ kunne (avgjør C→A; høy frekvens)
5. **Lagrange med likhetsbibetingelse** + tolkning av λ.
6. **Kuhn–Tucker / ikke-lineær programmering** med komplementær slakkhet — toppkarakter-differensiatoren.
7. **Egenverdier/egenvektorer** — både rent og som verktøy for stabilitet av DE-systemer.
8. **System av differensiallikninger** — likevekt, egenverdi-/spor-determinant-stabilitet, faseromsdiagram med nullisokliner.

### Nivå 3 — bør kunne godt (roterer inn som anvendelse)
9. **Nåverdi / uegentlige integraler** — kontinuerlig kontantstrøm, konvergensbetingelse.
10. **Taylor-approksimasjon** — 2.–4. ordens, koblet til `e`, `e^{−rt}` eller nåverdi.
11. **Mikro-anvendelser** — profittmaksimering (`pxᵃ−wx`), Cobb–Douglas nyttemaks/etterspørsel, kostnadsfunksjon fra produktfunksjon, indirekte nytte, konveksitet av profittfunksjonen.

### Nivå 4 — nice-to-have (sjeldnere, men gir bredde)
12. **Geometri i Rⁿ** (plan, linje, normalvektor, skjæring) — nytt 2025-innslag.
13. **Matrisebevis / abstrakte identiteter** (`(PQ)²`, symmetri av `A′A`), invers-eksistens.
14. **Risikoaversjon** (`u′>0, u″<0`, relativ risikoaversjon), biologiske vekst-/symbiosemodeller som DE-innpakning.

### Prognose for neste eksamen
Med stor sannsynlighet enten (a) den faste **4-oppgavemalen** (integrasjon · lineær algebra · differensiallikninger · optimering, 25 % hver) hvis en «regime B»-faglærer stiller, eller (b) en **5-oppgavevariant** med samme fire søyler pluss en anvendelses-/geometrioppgave hvis en «regime C»-faglærer stiller. Uansett: **de fire søylene er garantert**, optimeringsoppgaven vil nesten sikkert inneholde enten Lagrange eller Kuhn–Tucker, og diff.likningsoppgaven vil kreve en stabilitets-/likevektskonklusjon. Boka bør bygges som **fire likestilte hoveddeler + et anvendelseskapittel**, med et kort matematisk verktøykapittel (derivasjon, funksjonslære fra SØK1001) i bunn, og med **rikelig drill + fasit** siden nyere sett premierer regnesikkerhet.

---

## 7. Pensum / notasjon / kildeankere

### Pensumbøker (fra sensorveiledningene)
- **Matematikken:** Sydsæter-familien — **Knut Sydsæter, Peter Hammond, Atle Seierstad, Arne Strøm m.fl.: *Further Mathematics for Economic Analysis*** (V2021-fasiten refererer eksplisitt til formel «5.4.6 i Further Mathematics»), med *Essential Mathematics for Economic Analysis* som grunnlag. **Matematisk formelsamling for økonomer** (Sydsæter et al.) er tillatt hjelpemiddel når koden er C.
- **Mikro-anvendelsene:** **Hal R. Varian, *Microeconomic Analysis*** (V2021-fasiten refererer til «kapittel 3 i Varian» for konveksitet av profittfunksjonen).

### Notasjonskonvensjoner (stabile i arkivet)
- **Diff.likninger:** `ẋ = dx/dt`, `ẍ = d²x/dt²` (Newton-notasjon gjennomgående). Likevekt/steady state: `x_ss`. Engelske paranteser forekommer: «particular solution», «steady state», «globally asymptotically stable (G.A.S.)».
- **Lineær algebra:** matriser med store bokstaver `A, B, C, D`; vektorer `x, b`; utvidet koeffisientmatrise `Ab` (eller `[A|b]`); rang `r(A)`; transponert `A′` (også `Aᵀ`); egenverdi `λ`, egenvektor. `det A` / `|A|` for determinant.
- **Optimering:** Lagrange-funksjon `ℒ` (eller `L`), multiplikator `λ`; Kuhn–Tucker-betingelser med komplementær slakkhet skrevet som «`∂ℒ/∂x ≤ 0` (`=0` hvis `x>0`)». Hesse-matrise for andreordensbetingelser; «konkav ⇒ maks, konveks ⇒ min».
- **Mikro:** produktfunksjon Cobb–Douglas `y=x₁ᵃx₂^{1−a}` / `pxᵃ`; nyttefunksjon `u(x,y)`, ofte log/Cobb–Douglas `γ ln x+(1−γ)ln y`; priser `p, pₓ, p_y, w`; inntekt/budsjett `m`; profitt `π`; kostnad `C(y)`. OLS: `b=(X′X)⁻¹X′y`.
- **Integrasjon:** `∫f(x) dx` ubestemt, `∫ₐᵇ` bestemt; uegentlig `∫₀^∞ e^{−ks}D(s) ds` (nåverdi/diskontering); Taylor-polynom av oppgitt orden.

### Matematisk verktøykasse (forutsettes fra SØK1001 / formelsamling)
Partiell derivasjon, gradient og Hesse-matrise, kjerneregel og implisitt derivasjon, potensfunksjoner og eksponensial/logaritme, løsning av 2×2- og 3×3-likningssystemer, komplekse tall (for karakteristiske røtter), grenser. Dette er et **klart høyere matematisk nivå enn SØK1001** — SØK3004 legger til integrasjon, matrise-/egenverditeori, differensiallikninger og betinget optimering med Kuhn–Tucker.

### Skal bygges bevisst (fire søyler + anvendelser)
Integrasjon · lineær algebra (inkl. egenverdier) · differensiallikninger (inkl. systemer og stabilitet) · statisk optimering (fri, Lagrange, Kuhn–Tucker) — bundet sammen av mikro-/finansanvendelser (nåverdi, produksjonsteknologi, konsumentteori). Boka bør speile ECON3120/4120-analysen (`../econ3120/`) i matematisk innhold, men med SØK3004s vekt på **regnedrill** og **konkrete økonomiske innpakninger**.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK3004/` (ca. 48 filer).

**Sensorveiledninger / løsningsforslag i arkivet (10+):** `SensurveiledningSØK3004-vår17` (V2017), `SØK3004-sensorveiledningH-15` (H2015), `SØK3004Løsningsforslag-V15` (V2015), `SØK3004.losningsforslag_H17` / `losningsforslagSØK3004_H18` (H2017/H2018), `SØK3004.LF_V20` (V2020), `Sensorveiledning SØK3004 vår 2021` (V2021, eneste rene tekst — lest fullstendig), `Sensorveiledning_SØK3004_Høst_2021`, `Sensorveiledning_SØK3004_Vår_2022`, `Løsningsforslag SØK3004_Høst 2023`, `Løsningsforslag SØK3004_Vår 2024`, `SØK3004 sensorveiledning h24` (H2024), samt flere generisk navngitte `SØK3004 sensorveiledning`/`SØK3004-sensorveiledning (1)`. De fleste er håndskrevne, skannede fasitark — lest via OCR (`tesseract`, nor+eng); V2021 lest som ren tekst.

**Oppgavesett lest grundig (siste ~8 år):** `SØK3004 H25`, `SØK3004 v25` (V2025 konte), `SØK3004 H24 Norsk`, `Eksamensoppgave SØK 3004 Vår 2024`, `Eksamensoppgave SOK 3004 Host 2023`, `SØK3004 H22`, `Eksamensoppgave SOK 3004 Var 2022`, `SØK3004 H21`, `SØK3004_V20`, `Eksamensoppgave SOK 3004 Host 2020`, `SØK3004V-19`, `SØK3004 H19`.

**Oppgavesett skummet (eldre, for struktur- og temabekreftelse):** `SØK3004-H-13`, `SØK3004H-12`, `SØK3004V-12`, `SØK3004V-13`, `SØK3004V-14`, `SØK3004V-15`, `SØK3004V-16`, `SØK3004-H-16`, `SØK3004V-17`, `SØK3004H-17-Bokmål`, `SØK3004H-14`, `SØK3004H-10`, `SØK3004V-10`, `SØK3004H-11` m.fl., pluss generiske `3004.pdf`, `SØK3004.pdf`, `SØK3004.bokmål(.the_finale)`.

**Hjelpemiddel/kontekst fra settene:** hjelpemiddelkode oppgis per sett (kode H = kun kalkulator; kode C = kalkulator + Sydsæters matematiske formelsamling). Faglærere navngis (Lindset, Valente, Green m.fl.). Eksamen er 5 timer, digital i Inspera med opplasting av håndtegninger.

**Merknader om kildene:**
- **Leselighet:** flertallet av fasitene er bildebaserte skanninger av håndskrift; disse er lest via OCR med de begrensninger håndskrift gir. Analysen av selve oppgaveinnholdet hviler derfor primært på de tekstbaserte oppgavesettene, som er godt lesbare. Enkelte eldre oppgavesett (H20, V15) er delvis bildebaserte og ga fragmentert tekst.
- **Ingen egen offisiell emnebeskrivelse** er lest inn her; fagprofilen er utledet av arkivet (oppgaver + lesbare veiledninger) supplert med den kjente NTNU/UiO-plasseringen (motsvarer ECON3120/4120).
- **Overlappssjekk:** grep over `docs/hoyskole-boker/` bekrefter at `econ3120/EKSAMENSANALYSE.md` (UiOs *Mathematics 2*) er den nærmeste eksisterende analysen; `econ1100` (UiOs *Mathematics 1*) tilsvarer forkunnskapsnivået (SØK1001-siden), og `mat1110`/`mat1120` dekker beslektet ren kalkulus/lineær algebra. SØK3004-boka bør koordineres med `econ3120`.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Matematiske uttrykk, teoremnavn, standardnotasjon, modellsammenhenger og tallsvar er faglige fakta uten verkshøyde.
