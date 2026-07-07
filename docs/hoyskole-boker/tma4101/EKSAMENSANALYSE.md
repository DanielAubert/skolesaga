# Eksamensanalyse: TMA4106 Matematikk 2 (NTNU) — med forgjenger-arkiv TMA4105

> Grunnlagsdokument for en eksamensrettet lærebok i **TMA4106 Matematikk 2** ved NTNU. Bygger på et **eksamensarkiv for forgjengeremnet TMA4105 Matematikk 2** (~114 filer, oppgaver + offisielle løsningsforslag; ca. **52 eksamensavviklinger 2000–2026** med fasit, inklusiv forgjengerkoden SIF5005), en omskrevet fagbeskrivelse, og direkte oppslag mot NTNUs emnesider, kurswiki (`wiki.math.ntnu.no`) og temasiden `tma41x1.math.ntnu.no`. **Alt innhold er omskrevet med egne ord.** Matematiske uttrykk og teoremnavn er standard fagnotasjon uten opphavsrett. Analysen er kvantitativ der kildene tillater det.

> ## ⚠️ HOVEDFUNN — LES DETTE FØRST: arkivet og målemnet er IKKE samme fag
>
> Denne profileringen skiller seg fundamentalt fra de øvrige etterfølger-profileringene (sos1004, psy1000, kjm1110), der etterfølgeren var **innholdskontinuerlig** med forgjengeren. Her er premisset «arkivet (TMA4105) er en trygg proxy for målemnet (TMA4106)» **ikke holdbart**:
>
> | | **TMA4105** (arkivet, utgått) | **TMA4106** (målemnet, aktivt) |
> |---|---|---|
> | Rolle | «Matematikk 2» i den **gamle** hovedløypa (TMA4100→4105→4110→4120) | «Matematikk 2» i den **reformerte** integrerte løypa (TMA4101→4106→4111→4121) for MTELSYS/MTKJ/MTTK |
> | Faktisk innhold | **Flervariabel kalkulus + vektoranalyse**: partiell derivasjon, gradient, ekstremalverdier/Lagrange, doble/triple integraler, Green/Stokes/Gauss | **Differensiallikninger + Fourier + lineær algebra + kompleks analyse**: ODE-metoder, matriseeksponential `e^{At}`, Fourier-analyse, indreproduktrom, vektorrom/lineæravbildninger/generaliserte egenvektorer, funksjoner av reell og kompleks variabel |
> | Overlapp mot hverandre | ⟵ **tilnærmet null i temainventar** ⟶ | |
>
> **Arkivet inneholder 0 forekomster av Fourier, 0 differensiallikninger, 0 egenverdier/egenvektorer, 0 kompleks analyse og 0 indreprodukt** (verifisert ved fulltekstsøk i alle 52 løsningsforslag). Det er 100 % flervariabel kalkulus/vektoranalyse. TMA4106 tester i praksis **det motsatte** pensumet.
>
> **Hva har skjedd (verifisert):** NTNUs matematikkreform flyttet flervariabel-innholdet som lå i TMA4105 **ned i TMA4101 Matematikk 1** (som nå dekker partielle deriverte, gradient, doble integraler, polarkoordinater), mens TMA4106 Matematikk 2 tok over ODE-/Fourier-/lineæralgebra-/kompleks-stoffet som tidligere lå i **Matematikk 3 (TMA4110/4115) og Matematikk 4K (TMA4120)** — bekreftet av at TMA4106 gir studiepoengreduksjon nettopp mot TMA4110/4115/4120, **ikke** mot TMA4105. «TMA4105 er erstattet av TMA4106» er altså en **administrativ etterfølging av emnekoden/plass-i-løypa**, ikke en innholdsmessig videreføring.
>
> **Konsekvens for boka (se del 7):** Arkivet er en **utmerket kilde for en TMA4101/TMA4105-orientert flervariabelbok**, men en **svak kilde for en TMA4106-bok**. For TMA4106 overfører arkivet i praksis bare (a) NTNU-IMFs **eksamenskultur og føringsstandard**, og (b) et tynt **lineæralgebra-/egenverdi-sjikt**. Selve TMA4106-pensumet (ODE, Fourier, indreprodukt, kompleks) har **null arkivbelegg** og må hentes fra TMA4106s egne gamle eksamener (på kurswikien) og pensumboka. **Anbefaling: bygg boka mot TMA4106s eget pensum og bruk arkivet kun til eksamenskultur — eller retarget arkivet til en TMA4101-bok.**

---

## 1. Eksamensform og utvikling

### 1a. Målemnet TMA4106 (aktivt) — verifisert form

| Element | TMA4106 Matematikk 2 |
|---|---|
| Studiepoeng | 7,5 |
| Nivå / språk | Grunnleggende (nivå I) / norsk, Trondheim |
| Studieprogram | MTELSYS, MTKJ, MTTK (kybernetikk, kjemi, elektronikk) |
| Vurdering | **Skriftlig skoleeksamen, 4 timer**, bokstavkarakterer A–F |
| Hjelpemidler | **Kode E: ingen hjelpemidler tillatt** (strengere enn TMA4105) |
| Obligatorisk | Én oblig som må være godkjent (typisk innlevert før påske) |
| Merknad | **Ingen Python på eksamen** (selv om kurset bruker Python-skript i undervisningen); konteeksamen (august) kan bli **muntlig** i stedet for skriftlig |
| Pensumbok | Arne Hole, *Kalkulus og lineær algebra* (referert «H»); supplert med Borthwick og Feynman-forelesninger |

Verifisert mot NTNUs emneside (2025-årgangen) og kurswiki `wiki.math.ntnu.no/tma4106/2025v`. **(verifiser):** Emnesiden for 2026-årgangen returnerte «ingen informasjon for dette studieåret», og søk antyder at NTNU er i ferd med en **ny reformrunde** (bl.a. et nytt TMA4400 «Matematikk 1: Kalkulus og lineær algebra», og TMA4101 markert «tilbys ikke lenger»). Sjekk om TMA4106 fortsatt kjøres uendret ved bokas ferdigstilling, eller om koden igjen er under omlegging.

**TMA4106s faktiske temaliste (verifisert fra emneside + wiki):**
- Differensiallikninger: løsningsmetoder, systemer av lineære ODE, **matriseeksponential `e^{At}`**, ev. numerisk løsning
- **Fourier-analyse**: Fourier-rekker og -metoder (Python-plotting i undervisning, men ikke på eksamen)
- **Lineær algebra**: vektorrom, lineæravbildninger, egenrom og diagonalisering, **generaliserte egenvektorer**, indreproduktrom
- **Funksjoner av reell og kompleks variabel**; anvendelser mot fysikk (bl.a. Schrödinger-likningen)
- Regresjon/minste kvadrater i indreproduktrom-rammen

### 1b. Arkivemnet TMA4105 (utgått) — dokumentert form

| Periode | Struktur | Hjelpemidler |
|---|---|---|
| 2000–2003 (SIF5005) | 5–7 hovedoppgaver, ofte tredelte | Kode C (godkjent kalkulator + Rottmann formelsamling) |
| 2004–2014 (TMA4105) | 4–7 hovedoppgaver, lengre deloppgaver | **Kode C** verifisert i tekst: «Enkel kalkulator (HP 30S) + Rottmann» |
| 2015–2018 | Overgang mot flere, kortere oppgaver | Innstramming mot kode D |
| **2019–2026** | **10 korte oppgaver (Oppgave 1–10)** som sveiper hele pensum | **Kode D** (enkel kalkulator, ingen trykte/håndskrevne) — *(verifiser: koden står ikke i selve oppgaveteksten i de nyeste settene)* |

- **4 timer, A–F, målform veksler** (nyere sett dels på nynorsk).
- Verifisert strukturskifte: 2008-settet har 7 nummererte hovedoppgaver; 2019-settet har eksakt **Oppgave 1–10**. Fra ca. 2019 er malen ti relativt korte oppgaver som til sammen treffer hele bredden, hver med et **konkret sluttsvar** (tallverdi, punkt, funksjon).
- Fordi kode D fjernet Rottmann, oppgir nyere sett nødvendige spesialformler (f.eks. buelengde i polarkoordinater) **direkte i oppgaveteksten**. Løsninger bør skrives uten forutsetning om formelsamling.

### 1c. Arkivets viktigste metodiske styrke

Arkivet har **offisielt løsningsforslag fra Institutt for matematiske fag for tilnærmet hver eneste avvikling** (≈52 fasiter, 2000–2026). Det er langt rikere fasitdekning enn i de fleste andre høyskole-arkivene (til sammenligning hadde MAT1110-arkivet bare 3 offisielle fasiter). For **metodekalibrering av eksamenskultur** (hvordan IMF vil se løsninger ført) er dette gull — men det gjelder eksamenskulturen, ikke TMA4106-pensumet.

---

## 2. Temafrekvens (TMA4105-arkivet, 52 avviklinger 2000–2026)

Celleverdi = antall av 52 avviklinger der temaet er påvist ved fulltekstsøk i løsningsforslaget. **Metodeforbehold:** søkeordbasert deteksjon **underteller** temaer som fasiten løser uten å nevne temanavnet (særlig doble/triple integraler, som ofte bare settes opp med integraltegn). Aggregerte «minst-tall» nederst er derfor mer pålitelige enn enkeltordradene.

| Tema (flervariabel kalkulus / vektoranalyse) | Påvist i | **Gjenganger-score** |
|---|---|---|
| **Vektoranalyse-teorem (Green, Stokes eller Gauss) — minst ett** | 51/52 | **98 %** |
| Trippelintegral / volum (sylinder-/kulekoordinater) | 46/52 | **88 %** |
| Flateintegral / fluks (`∫F·n dS`, flateareal) | 43/52 | **83 %** |
| Dobbeltintegral / polarkoordinater | 42/52 | **81 %** |
| Gauss' divergensteorem (som navngitt teorem) | 38/52 | 73 % |
| Stokes' teorem | 37/52 | 71 % |
| Kritiske punkter + annenderiverttest (fri ekstremal) | 33/52 | 63 % |
| Konservativt felt / potensial / fundamentalteorem for linjeintegral | 32/52 | 62 % |
| Lagrange / betinget optimering | 26/52 | 50 % |
| Tangentplan til nivåflate | 26/52 | 50 % |
| Sylinderkoordinater (som navngitt) | 23/52 | 44 % |
| Green i planet (som navngitt) | 21/52 | 40 % |
| Retningsderivert / gradient | 17/52 | 33 % |
| Grenseverdi / kontinuitet i flere variable | 17/52 | 33 % |
| Linjeintegral (eksplisitt term) | 15/52 | 29 % (undertelt) |
| Kulekoordinater (som navngitt) | 14/52 | 27 % |
| Krumning av romkurve | 13/52 | 25 % |
| Buelengde / kurvelengde | 12/52 | 23 % |
| Jacobi-determinant / variabelskifte | 9/52 | 17 % |

### Viktigste funn (for en flervariabel-/TMA4101-bok)
1. **Vektoranalyse er ryggraden:** 51/52 sett har minst ett av Green/Stokes/Gauss. Dette er det mest stabile signalet i hele arkivet og skiller TMA4105 skarpt fra UiO-slektningen MAT1110 (der Gauss/Stokes først kom i 2025).
2. **Multiple integraler er praktisk talt garantert** (dobbelt 81 %, trippel/volum 88 %) — hvert sett har oppsett av minst ett multipelt integral med områdeskisse og koordinatvalg.
3. **Optimering** finnes i to former som ofte begge er med: fri ekstremal med annenderiverttest (63 %) og betinget/Lagrange (50 %). Nyere sett kombinerer indre kritiske punkter + rand-optimering på lukket område.
4. **Konservative felt/potensial (62 %)** er en fast gjenganger — fasiten foretrekker å bruke potensialet framfor å parametrisere.
5. **Kurveteori** (krumning ~25 %, buelengde ~23 %) og **flervariable grenser/kontinuitet** (33 %) er stabile, mindre blokker.
6. **Taylor i flere variable:** nevnt i pensumet, men **0 løsningsforslag** bruker det eksplisitt — samme mønster som i UiO-emnene. Fasiten bruker Taylor/`o`-notasjon kun som hjelpeteknikk i grensebevis.

> **NB:** Hele denne tabellen beskriver **TMA4105-pensum**. For TMA4106 er den relevante «temafrekvensen» ukjent fra dette arkivet og må bygges fra TMA4106s egne gamle eksamener (ODE-systemer, Fourier-rekker, egenrom/diagonalisering, indreprodukt/regresjon, kompleks). Se del 7.

---

## 3. Oppgavesjangre og fasitens foretrukne metode (TMA4105-arkivet)

Destillert fra de offisielle løsningsforslagene (grundig gjennomgang av nyere sett + skumming av eldre). Metodene er sensor-verifiserte der de er belagt av fasit.

1. **Fri ekstremal:** `∇f = 0` → kandidater; klassifiser med annenderiverttesten `Δ = f_xx f_yy − f_xy²`. Fasiten setter **alltid opp Hesse/Δ eksplisitt** før konklusjon (jf. V2026 O1: fire kritiske punkter klassifisert via `Δ = 36(x−1)y`).
2. **Optimering på lukket område / rand:** indre kritiske punkter + **parametrisér hvert randstykke** og optimér énvariabelt; sammenlign alle kandidatverdier til slutt. Alle randstykker sjekkes hver for seg (ikke bare hjørner).
3. **Lagrange:** `∇f = λ∇g` + bibetingelsen; brukes ved én bindingslikning. Fasiten viser ofte **både** rand-parametrisering og Lagrange for samme oppgave.
4. **Gradient og retningsderivert:** `D_u f = ∇f·u` med `u` **normalisert**; størst vekst i retning `∇f/|∇f|` med verdi `|∇f|`.
5. **Tangentplan til nivåflate:** `∇F(a,b,c)` er normalvektor; `∇F·(x−a,y−b,z−c)=0`. Parallellitet med gitt plan ↔ `∇F = λn`.
6. **Konservativt felt + potensial:** vis `∂Q/∂x = ∂P/∂y` (ev. `curl F = 0`), finn `φ` med `∇φ = F`, og bruk `∫_C F·dr = φ(slutt) − φ(start)` (jf. V2026 O2: `φ = x²y + y³/3`).
7. **Grense/kontinuitet i flere variable:** nærm deg origo langs `y = kx` (eller `y = λx²`) og vis retningsavhengighet; Taylor/`o`-notasjon for ryddig utregning.
8. **Dobbeltintegral:** **tegn området først**, les av grenser, bytt rekkefølge ved behov; polar ved sirkelsymmetri.
9. **Greens teorem:** `∮ P dx + Q dy = ∬(∂Q/∂x − ∂P/∂y) dA`; også areal `A = ½∮(x dy − y dx)`, og divergensform i planet for utstrømning.
10. **Stokes' teorem:** `∮ F·dr = ∬ curl F·n dS`; parametriser flaten, regn `n dS = (s_x × s_y)dxdy` med riktig orientering, reduser til dobbeltintegral (ofte polar).
11. **Gauss' divergensteorem:** `∯ F·n dS = ∭ div F dV`; ved åpen flate: lukk legemet, bruk teoremet på hele randen, **trekk fra** de tilføyde flatene.
12. **Trippelintegral/volum:** velg koordinater etter geometri (sylinder ved sirkulær symmetri, kule ved kulesymmetri); **løs skjæringen først**, husk Jacobi-faktor (`r` hhv. `ρ²sinφ`).
13. **Flateintegral / overflateareal:** `dS = √(1+f_x²+f_y²)dA`; fluks for graf `z=f(x,y)`: `n dS = (−f_x,−f_y,1)dA`.
14. **Krumning:** `κ = |r'×r''|/|r'|³`; ekstremér uttrykket for største/minste krumning.
15. **Buelengde:** `L = ∫|r'(t)|dt`; polar `L = ∫√(r²+(dr/dθ)²)dθ`; forenkle `|r'|` med trig-identitet før integrasjon.
16. **Variabelskifte:** nye `(u,v)`, regn `∂(x,y)/∂(u,v)`, transformer integrand + grenser + areaelement.

---

## 4. Sensorens krav (NTNU IMF-stil, fra ~52 fasiter)

1. **Konkret sluttsvar kreves:** tallverdi, punkt eller funksjon — ikke bare oppsett. Svar oppgis **eksakt** (`64/3`, `5π`, `πab`), ikke desimaltilnærmet.
2. **Navngi teoremet eksplisitt** når det bærer argumentet (Green, Stokes, divergensteoremet, fundamentalteoremet for linjeintegral, annenderiverttesten). Valg av teorem er ofte selve poenget.
3. **Konsis, utledningsdrevet føring:** vis regnekjeden kompakt; unngå lange verbale forklaringer der en formel gjør jobben.
4. **Områdebeskrivelse før oppsett:** integrasjonsgrenser skrives som eksplisitte ulikheter for området, gjerne med skisse, **før** integralet settes opp.
5. **Orientering/fortegn kontrolleres hver gang** i Stokes/fluks/divergens: normalvektorens retning og randkurvens orientering (høyrehåndsregel).
6. **Alternative løsninger honoreres:** fasiten viser rutinemessig to gyldige veier (rand-parametrisering vs. Lagrange; geometrisk snarvei vs. full parametrisering).
7. **Karakterskiller:** bestått henter poeng på mekanikken (`∇f=0`+Hesse, standard multipelt integral med riktige grenser); toppsjiktet kjennetegnes av korrekt orienterings-/fortegnskontroll, valg av riktig teorem, komplett rand-behandling på lukkede områder, og eksistensbegrunnelse der det kreves.

---

## 5. Typiske feil (TMA4105-arkivet)

1. **Glemt å normalisere** retningsvektoren i retningsderivert.
2. **Kun indre kritiske punkter** — hopper over randen (eller sjekker bare hjørnene) i optimering på lukket område.
3. **Feil integrasjonsgrenser** fordi området ikke ble tegnet, eller skjæringen ikke løst før oppsett.
4. **Feil orientering/fortegn** på normalvektor i Stokes/fluks — forplanter seg gjennom hele oppgavekjeden.
5. **Glemt Jacobi-faktor** ved koordinatskifte.
6. **Påstår at en flervariabel grense eksisterer** uten å teste flere retninger.
7. **Regner linjeintegral tungt via parametrisering** når feltet er konservativt (skulle brukt potensialet).
8. **Desimaltilnærming** der eksakt verdi forventes.
9. **Tidsfelle:** vektoranalyse-oppgavene (Stokes/Gauss) og volumintegralene er tunge; feil tidsbudsjett tidlig stjeler fra de dyre sluttoppgavene.

---

## 6. Symbol- og metodeapparat (TMA4105-arkivet)

- `∇f` gradient; `D_u f = ∇f·u` retningsderivert; `∇F` som normalvektor til nivåflate.
- Annenderiverttest `Δ = f_xx f_yy − f_xy²`; Hesse-matrise eksplisitt.
- Lagrange `∇f = λ∇g`; ekstremalverdisetningen for eksistens på lukket, begrenset mengde.
- `dV = r dz dr dθ` (sylinder), `ρ² sinφ dρ dφ dθ` (kule); `dA = r dr dθ` (polar); Jacobi-determinant ved generelt variabelskifte.
- Linjeintegral `∫_C F·dr`; konservativt: `∂Q/∂x = ∂P/∂y`, `curl F = 0`, potensial `φ`.
- Flateintegral `∫∫_S F·n dS`; fundamentalt vektorprodukt `s_u × s_v`; `curl F`, `div F`.
- Green `∮ P dx+Q dy = ∬(Q_x − P_y)dA`; Stokes `∮ F·dr = ∬ curl F·n dS`; Gauss `∯ F·n dS = ∭ div F dV`.
- Krumning `κ = |r'×r''|/|r'|³`; buelengde `L = ∫|r'|dt`.
- Eksakte svar understrekes; teoremnavn skrives ut.

> **For TMA4106** kreves et **helt annet apparat** (må hentes utenfor arkivet): karakteristisk likning og partikulærløsning for ODE; matriseeksponential `e^{At}` via egenverdier/generaliserte egenvektorer og Jordan-form; Fourier-koeffisienter `a_n, b_n` og komplekse Fourier-rekker; indreprodukt `⟨f,g⟩`, ortogonalitet, ortogonal projeksjon/minste kvadrater; kompleks eksponential og Euler; egenrom/diagonalisering av lineæravbildninger.

---

## 7. Prognose, prioritering og overføringsvurdering

### 7a. Overføringsvurdering TMA4105 → TMA4106 (eksplisitt)

| Komponent | Overførbarhet | Kommentar |
|---|---|---|
| **Eksamenskultur / føringsstandard** (eksakt svar, navngi teorem, konsis utledning, 4 t skriftlig) | ✅ **Robust** | Samme institutt (IMF), samme grunnform. Direkte brukbart som kalibrering av hvordan TMA4106-løsninger bør føres. |
| **Struktur** (~10 korte breddesveipende oppgaver) | 🟠 **Sannsynlig, men (verifiser)** | Trolig samme malfilosofi, men TMA4106s egne sett må sjekkes; kode E (ingen hjelpemidler) er strengere enn TMA4105. |
| **Lineær algebra: egenverdier/egenvektorer/diagonalisering** | 🟠 **Delvis** | TMA4106 tester dette tungt (generaliserte egenvektorer, egenrom). Men **arkivet har 0 slike oppgaver** — TMA4105 brukte ikke egenverdier. Metoden må hentes utenfra. |
| **Multivariabel kalkulus + vektoranalyse** (hele arkivets tyngdepunkt) | 🔴 **Overfører IKKE til TMA4106** | Dette stoffet ligger nå i **TMA4101 Matematikk 1**, ikke i TMA4106. Verdifullt — men for feil emne. |
| **ODE, Fourier, indreprodukt, kompleks analyse** (TMA4106s kjerne) | 🔴 **Null arkivbelegg** | 0 forekomster i alle 52 fasiter. Må bygges fra TMA4106s eget materiale. |

**Konklusjon:** Overføringsrisikoen er **høy for temavalg** og **lav for eksamenskultur**. Å bygge en TMA4106-bok på dette arkivets temaprofil ville treffe feil pensum nesten fullstendig.

### 7b. To veier videre — anbefaling

**Vei A (anbefalt hvis målet virkelig er TMA4106):** Bruk arkivet **kun** som eksamenskultur-referanse (del 1c, 4, 5). Hent TMA4106s **egne gamle eksamenssett** fra kurswikien (`wiki.math.ntnu.no/tma4106/<år>`) og bygg temafrekvens, sjangre og fasitmetode på nytt for ODE-systemer/`e^{At}`, Fourier-rekker, egenrom/diagonalisering, indreprodukt/minste kvadrater og kompleks analyse. Pensumbok: Arne Hole, *Kalkulus og lineær algebra*. **Denne EKSAMENSANALYSE-en dekker da bare ~15–20 % av det boka trenger** (kultur + LA-broen); resten er en ny innhentingsjobb.

**Vei B (høy gjenbruksverdi, men annet emne):** Retarget arkivet til en **TMA4101 Matematikk 1 / klassisk TMA4105-flervariabelbok**. Da er dette dokumentet nær komplett og av høy kvalitet (52 fasiter, robust temaprofil), og delene 2–6 kan brukes direkte.

### 7c. Prioritering *dersom* boka lages for arkivets faktiske innhold (flervariabel, vei B)

- **Nivå 1 (bærende):** vektoranalyse-trioen Green/Stokes/Gauss (98 %); multiple integraler med koordinatvalg (81–88 %); fri + betinget optimering (50–63 %); konservative felt/potensial (62 %).
- **Nivå 2:** tangentplan/nivåflate (50 %); gradient/retningsderivert (33 %); flervariable grenser/kontinuitet (33 %); flateintegral/fluks direkte (83 %).
- **Nivå 3:** krumning (25 %), buelengde (23 %), variabelskifte/Jacobi (17 %), Taylor i flere variable (pensum, 0 arkivbelegg).

### 7d. Anbefalt arketype

**Eksamensrettet realfags-arketype «teori → fasitens foretrukne metode → gradert oppgavesett med fullt løsningsforslag», breddesveipende** — samme grunnform som `mat112-uib` og `mat1110`. Boka bør speile NTNU-IMFs føringskultur (eksakt svar, navngitt teorem, konsis utledning) og organiseres i korte, breddedekkende kapitler med rikelig fasit, siden arkivets store styrke nettopp er den nær komplette fasitmengden.

- **For vei A (TMA4106):** samme arketype, men **kapittelinndelt etter TMA4106-pensum** (ODE/`e^{At}` · Fourier · lineær algebra/egenrom · indreprodukt/minste kvadrater · kompleks). Bruk arkivet til å sette føringsstandarden, ikke temaene.
- **For vei B (flervariabel):** arketypen passer arkivet direkte, kapittelinndelt etter del 2/3 over.

---

## 8. Kildeliste

**Eksamensarkiv (forgjenger TMA4105/SIF5005):** `~/Desktop/Eksamner/NTNU/TMA4105/` — ~114 filer. Løsningsforslag lest/analysert for ~52 avviklinger: `lf_sif5005_00k…03v` (2000–2003), `lf_tma4105_04k…14v` (2004–2014), `lf_tma4105_2015_15k…2026v` (2015–2026). Oppgavesett `tma4105_*` / `sif5005_*` brukt til struktur- og hjelpemiddelverifikasjon. Nyere fasiter (2019–2026) lest grundig; eldre skummet for temaregistrering. Tekst uttrukket med `pdftotext -layout`.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TMA4105/TMA4106 (scratchpad `fagbeskrivelse-tma4106.md`).

**Verifisert mot nett (oppslag juli 2026):**
- NTNU emneside TMA4106 (2025-årgangen) — pensum, eksamensform kode E, studiepoeng, studieprogram, studiepoengreduksjon mot TMA4110/4115/4120. *(2026-årgangen: ingen data — reformrunde pågår, verifiser.)*
- `wiki.math.ntnu.no/tma4106/2025v` og `/2024v`, `/2023v`, `/2021v` — pensum (ODE, Fourier, indreprodukt, regresjon, kompleks/Schrödinger), pensumbok (Arne Hole + Borthwick), «ingen Python på eksamen», oblig før påske.
- `tma41x1.math.ntnu.no` — den reformerte løypa TMA4101/4106/4111/4121.
- NTNU emneside/ wiki TMA4101 Matematikk 1 — bekrefter at flervariabel kalkulus (partielle deriverte, gradient, doble integraler 14.1–14.2, polarkoordinater) nå ligger i **Matematikk 1**, ikke i TMA4106.

**Forbilder (strukturmal):** `docs/hoyskole-boker/mat112-uib/EKSAMENSANALYSE.md` og `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (flervariabel kalkulus, samme fagfamilie; 8-delers struktur).

**Merknader:**
- **Opphavsrett:** alle beskrivelser av oppgaver, metoder og sensorkrav er parafrasert med egne ord; ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.
- **Kvantitativt forbehold:** temafrekvens i del 2 er søkeordbasert og underteller temaer fasiten løser uten temanavn (særlig integraltyper); aggregerte «minst-tall» er mer pålitelige enn enkeltordrader.
- **Reform-forbehold:** overføringsanalysen (del 7) hviler på at TMA4106 fortsatt kjøres med pensumet dokumentert for 2023–2025. NTNU er i ny reformrunde (TMA4400 m.m.) — reverifiser TMA4106s status og pensum før boka ferdigstilles.
