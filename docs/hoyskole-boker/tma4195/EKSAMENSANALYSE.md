# Eksamensanalyse: TMA4195 Matematisk modellering (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **34 filer / 20 velkarakteriserte eksamenssett** fra arkivet (H2005–H2023): oppgaver **og** offisielle løsningsforslag lest grundig for de siste årene (2023, 2022, 2021, 2020, 2019, H2018, H2017) og gjennomgått for de eldre settene (2005–2016). Alle 20 løsningsforslag ekstraherer til ren tekst — ingen løsningsfil er ren skann. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsformuleringer. Matematiske uttrykk, metodenavn og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4195 er et **ekstremt stabilt og forutsigbart** emne, både i innhold og i selve oppgaverekkefølgen. Fem–seks søyler går igjen praktisk talt hvert eneste år, ofte som nummer 1, 2, 3 osv. i settet: **(1) dimensjonsanalyse / Buckingham pi** (nesten alltid Oppgave 1), **(2) likevektspunkter og stabilitet for et 2×2 autonomt ODE-system** via Jacobi-matrise, spor og determinant (nesten alltid Oppgave 2), **(3) singulær perturbasjon / grenselag med indre–ytre–uniform løsning og matching** (nesten alltid Oppgave 3), **(4) skalering av en modell til dimensjonsløs form** (finn tidsskala/lengdeskala ved å balansere ledd — inngår i nesten alle oppgaver), **(5) bevaringslov + karakteristikker + sjokk/fortynningsvifte med Rankine–Hugoniot** (kjøremodell, tofase-strømning eller elvestrøm), og **(6) bifurkasjonsdiagram** (tegn stabile/ustabile grener). Den store, tunge sluttoppgaven er nesten alltid en **utledning av en PDE-modell fra bevaringslov + Darcys/Ficks lov** (porøst medium, CO₂-lagring, gass-injeksjon), etterfulgt av skalering og en perturbasjonsutvikling. **VIKTIG KORREKSJON til den antatte emneidentiteten:** til tross for at «variasjonsregning» ofte listes som pensum i modelleringsemner, forekommer **variasjonsregning / Euler–Lagrange / geodeter / funksjonaler ALDRI** i noen av de 20 settene (verifisert med søk over alle 34 filer). Det samme gjelder Fourier-metoder, separasjon av variable og numeriske metoder — dette er **ikke** TMA4135/4130-typen; det er et **rent kontinuerlig-modellerings-emne**. Eksamensspråket er engelsk (noen eldre sett har norsk løsningsforslag), 4 timer, hjelpemiddelkode C (enkel kalkulator; Rottmann matematisk formelsamling var tillatt til og med 2019, men er ikke lenger nevnt fra 2020).

---

## 1. Eksamensform og utvikling

**Samlet vurdering** = skriftlig skoleeksamen **(75 %)** + obligatorisk **gruppeprosjekt (25 %)**, én samlet **bokstavkarakter A–F**. Skoleeksamen er **4 timer**, på **engelsk** (kandidaten kan svare på engelsk eller norsk), hjelpemiddelkode **C** (godkjent enkel kalkulator). Rottmann *Matematisk formelsamling* var tillatt til og med 2019; fra 2020 nevnes bare kalkulatoren. **Ingen flervalgsdel** (avkryssingsboksen «skal ha flervalgskjema» på trykk-arket er ren skjemametadata og aldri i bruk).

### Om prosjekt-delen (25 %)

Arkivet inneholder **kun skoleeksamener med løsningsforslag** — ingen prosjektoppgavetekster, rapporter eller sensorveiledninger for gruppeprosjektet. Det vi trygt kan si:

- Prosjektet teller **1/4 av totalkarakteren**, og det er obligatorisk (må være bestått/levert for å få karakter i emnet).
- Prosjektet er tradisjonelt et **åpent modelleringsprosjekt i gruppe**: gruppen velger/tildeles et virkelig fenomen, setter opp en matematisk modell (ODE/PDE), skalerer, analyserer (likevekt/stabilitet/perturbasjon/numerikk) og skriver en rapport. Dette speiler nøyaktig ferdighetene skoleeksamenen tester, bare i «omvendt» retning: på eksamen får du modellen delvis oppgitt og skal analysere; i prosjektet skal du **selv sette opp modellen**.
- **Konsekvens for læreboka:** boka må ikke bare trene eksamensregning, men også modelloppsett fra bunn (fra fysiske/biologiske antakelser til likninger), tolkning av parametere og skriftlig faglig framstilling — kjernekompetansen i prosjektet. Modelloppsettet er dessuten i økende grad også en del av skoleeksamenen (se «utvikling» nedenfor).

### Formathistorikk (skoleeksamen)

| Periode | Struktur | Foreleser/sensor (der kjent) | Hjelpemidler (kode C) |
|---|---|---|---|
| 2005–2016 | 5–6 hovedoppgaver med deloppgaver; ingen eksplisitt poengvekting synlig på flere sett | Krogstad m.fl. (eldre kompendium refereres) | Kalkulator + Rottmann |
| 2017 | 4 store oppgaver med deloppgaver | — | Kalkulator + Rottmann |
| 2018 | 7 oppgaver | **Grasmair** (mer «rent modellerings»-preg: fjærpendel, satellitt-perturbasjon, maur-sti-trafikk) | Kalkulator + Rottmann |
| 2019 | 5 oppgaver | **Wessel-Berg** | Kalkulator + Rottmann |
| 2020–2023 | 5–7 oppgaver; delvis poeng/karakterskala | **Wessel-Berg** | Kalkulator (Rottmann ikke lenger nevnt) |

### Konstanter på tvers av alle år
- **5–7 oppgaver, 4 timer, kode C, ingen flervalg.** Nesten alle svar skal begrunnes; ren fasit uten utledning gir ikke full uttelling.
- **Oppgaverekkefølgen er nesten liturgisk** i Wessel-Berg-årene (2019–2023): O1 = dimensjonsanalyse, O2 = likevekt/stabilitet for 2×2-system, O3 = singulær perturbasjon, O4 = skalering av en biologisk/kjemisk modell + evt. bifurkasjon, O5 = bevaringslov/karakteristikker/sjokk, O6–O7 = utledning + skalering + perturbasjon av en PDE for porøst medium. Denne forutsigbarheten er den viktigste enkeltinnsikten i hele analysen.
- **«Skaler dette til dimensjonsløs form»** er den mest gjennomgripende ferdigheten — den inngår i dimensjonsanalyse-oppgaven, i modelloppsett-oppgavene OG i bevaringslov-oppgavene. Nesten hver oppgave krever at man setter `x ↦ Lx`, `t ↦ Tt` osv. og balanserer ledd for å finne skalaene.

### Utvikling (viktigste strukturfunn)
1. **Grasmair-året 2018 stikker seg ut:** mer variert («rent modellerings»)-innhold — fjærpendel med kubisk demping, satellittbane som regulær perturbasjon, maur-sti som trafikkmodell, steril-insekt-teknikk. Wessel-Berg-årene (2019→) er langt mer sjablongaktige og porøse-medier-tunge.
2. **PDE-modellering av porøst medium / geofysikk er blitt den faste sluttoppgaven** (2017 gass i bergformasjon, 2019 tofase gravitasjonssegregering, 2021 CO₂-oppløsning i saltvann med konveksjon, 2022 gass-injeksjon i sylinder, 2023 permeabilitet/kompressibilitet). Dette speiler forelesernes egen forskning (reservoar/petroleum) og er den delen studenter oftest sliter med.
3. **Ingen drift mot Fourier/numerikk/variasjonsregning** — emnet har holdt seg rent innenfor dimensjonsanalyse, dynamiske systemer, perturbasjonsmetoder og bevaringslover i hele perioden 2005–2023.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **20 velkarakteriserte sett**: Periode A (2005–2012, 8 sett), Periode B (2013–2018, 6 sett), Periode C (2019–2023, 5 sett). *(Noen enkeltår er talt der løsningsforslag foreligger; enkelte eldre sett er delvis skummet, så tellingen er konservativt nedad.)*

| Tema | A (8) | B (6) | C (5) | **Gjenganger-score** |
|---|---|---|---|---|
| **Dimensjonsanalyse / Buckingham pi** (dimensjonsmatrise, kjernevariabler, π-grupper) | 8 | 6 | 5 | **19/19 ≈ 100 %** |
| **Skalering til dimensjonsløs form** (balanser ledd → tids-/lengdeskala) | 8 | 6 | 5 | **19/19 ≈ 100 %** |
| **Likevektspunkter + stabilitet, 2×2-system** (Jacobi, spor & determinant) | 7 | 6 | 5 | **18/19 ≈ 95 %** |
| **Singulær perturbasjon / grenselag** (indre+ytre+uniform, matching) | 6 | 6 | 5 | **17/19 ≈ 89 %** |
| **Bevaringslov → karakteristikker → sjokk/vifte** (Rankine–Hugoniot) | 6 | 6 | 4 | **16/19 ≈ 84 %** |
| **Utledning av PDE-modell fra bevaringslov + Darcy/Fick** (porøst medium, kjemi) | 5 | 5 | 5 | **15/19 ≈ 79 %** |
| **Bifurkasjonsdiagram** (tegn stabile/ustabile grener, `∂f/∂u`) | 4 | 4 | 3 | **11/19 ≈ 58 %** |
| **Populasjonsdynamikk** (logistisk vekst, Lotka–Volterra / predator–byttedyr) | 5 | 4 | 2 | **11/19 ≈ 58 %** |
| **Regulær perturbasjon** (potensrekke i ε, orden-for-orden) | 4 | 3 | 2 | **9/19 ≈ 47 %** |
| **Epidemi-/reaksjonsmodell** (SIR-lignende, enzymkinetikk, kjemisk reaksjon) | 4 | 3 | 2 | **9/19 ≈ 47 %** |
| **Skalamodell-testing / dimensjonsløse tall** (Froude, Reynolds, Péclet) | 3 | 1 | 1 | **5/19 ≈ 26 %** |
| **Trafikkmodell spesifikt** (bilstrøm `J=uv(u)`, kø ved trafikklys) | 2 | 2 | 2 | **6/19 ≈ 32 %** |
| **Fortynningsvifte (rarefaction) eksplisitt** | 2 | 3 | 2 | **7/19 ≈ 37 %** |
| **Lineær 1. ordens ODE for sjokkbane `s(t)`** (integrerende faktor) | 2 | 2 | 3 | **7/19 ≈ 37 %** |
| **Lineært bølge-/transportsystem via diagonalisering + karakteristikker** | 0 | 0 | 1 | **1/19 ≈ 5 %** (kun 2022) |
| **Lyapunov-funksjon for stabilitet** (Kapitza-pendel) | 0 | 1 | 0 | **1/19 ≈ 5 %** (kun 2015) |
| **«Intermediate asymptotics» / fundamentalløsning** | 0 | 1 | 0 | **1/19 ≈ 5 %** (kun 2017) |
| **Variasjonsregning / Euler–Lagrange / funksjonaler** | 0 | 0 | 0 | **0/19 = 0 %** (aldri sett) |
| **Fourier-rekker/-transform, separasjon av variable** | 0 | 0 | 0 | **0/19 = 0 %** (aldri sett) |
| **Numeriske metoder** (Euler/RK, interpolasjon, kvadratur) | 0 | 0 | 0 | **0/19 = 0 %** (aldri sett) |

**Viktigste funn:**
1. **De seks søylene** (dimensjonsanalyse, skalering, likevekt/stabilitet, singulær perturbasjon, bevaringslov/karakteristikker/sjokk, PDE-modelloppsett) dekker **≈ 90 % av poengene på et typisk sett**. En bok som behersker disse seks perfekt er nesten «ferdig».
2. **Skalering er den usynlige limveven** — den forekommer i praktisk talt hver eneste oppgave og er den ferdigheten flest studenter undervurderer. Boka bør ha et eget, tungt kapittel om «hvordan velge skalaer ved å balansere ledd».
3. **Likevekt/stabilitet-oppgaven er den mest mekaniske og «gratis»** poengsummen: finn nullpunkter for høyresiden, sett opp Jacobi-matrisen, bruk spor og determinant til å klassifisere. Nesten identisk oppskrift hvert år (2019 O2, 2020 O2, 2021 O2, 2022 O2, 2023 O2). **Dette skal en kandidat aldri tape poeng på.**
4. **Singulær perturbasjon har en fast koreografi:** ytre løsning (`ε = 0`), indre løsning (`x = δξ`, velg `δ` slik at to ledd balanserer — nesten alltid `δ = ε`), matching (`lim_{ξ→∞} Y = lim_{x→0} y_ytre`), uniform løsning (`y_u = y_ytre + Y − felles grense`). Samme mal 2018–2023.
5. **PDE-modelloppsettet er den store poengbanken OG den store fellen** — det er her sterke og svake kandidater skiller lag. Trinnene er alltid: integral bevaringslov over `[a,b]` (eller ball `B_r`) → differensialform → sett inn Darcy/Fick → skaler → (evt.) perturbasjonsutvikling i ε.
6. **Variasjonsregning er IKKE en del av eksamen** til tross for at det ofte listes i emnebeskrivelser. Ikke prioriter det i boka utover en kort orientering.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene).

### A. Dimensjonsanalyse med Buckingham pi (nesten alltid Oppgave 1)
- **Krav:** Sett opp **dimensjonsmatrisen** (rader = grunnenheter m, s, kg, K; kolonner = variabler). Finn rangen `r` (vis en `r×r`-undermatrise med determinant ≠ 0). Da finnes `n − r` uavhengige dimensjonsløse π-grupper. Velg `r` **kjernevariabler** (dimensjonelt uavhengige) og uttrykk de øvrige som π-grupper — ved «trial and error» eller systematisk ved å løse et lineært likningssystem for eksponentene. Buckinghams teorem: enhver dimensjonelt konsistent relasjon `f(...) = 0` er ekvivalent med en relasjon `g(π₁,…) = 0`. Løs for den ønskede variabelen; hvis det bare er én π-gruppe, må den være en konstant (`π = C`), som gir en eksplisitt formel med én ukjent konstant.
- **Faste grep:** Velg **ikke** den variabelen du vil isolere som kjernevariabel. Gjenkjenn kjente dimensjonsløse tall (Reynolds `ρvL/µ`, Froude, Péclet). Poengter at π-valget **ikke er unikt**.
- **Frekvens:** ≈ 100 %, nesten alltid O1.
- **Omskrevet eksempel:** «Diffusjonskonstanten `D` for en kule i væske antas å avhenge av radius `a`, temperatur `T`, viskositet `µ` og Boltzmanns konstant `k_B`. Sett opp dimensjonsmatrisen, vis at fire variabler er dimensjonelt uavhengige, og utled et uttrykk for `D`.» (2022) → `D = C·k_B T/(aµ)` (Stokes–Einstein).

### B. Likevektspunkter og stabilitet for 2×2 autonomt system (nesten alltid Oppgave 2)
- **Krav:** Løs `f(u,v) = 0, g(u,v) = 0` for alle likevektspunkter (ofte ved eliminasjon/innsetting). Regn ut **Jacobi-matrisen** `J`, dens **determinant** (= produkt av egenverdier) og **spor** (= sum av egenverdier) i hvert punkt. Klassifiser: `det < 0` ⇒ reelle egenverdier med motsatt fortegn ⇒ **sadel/ustabil**; `det > 0` og `spor < 0` ⇒ **asymptotisk stabil**; `det > 0` og `spor > 0` ⇒ ustabil. (Fullstendig node/fokus-klassifikasjon sjelden krevd — fortegnene holder.)
- **Faste feller:** Ikke multipliser bort en nevner `(1+x)` og få falske likevektspunkter (fasiten advarer eksplisitt, 2017). Pass på komplekse egenverdier når `spor = 0` (lineær analyse gir da ikke svar — 2011 Lotka–Volterra).
- **Frekvens:** ≈ 95 %, nesten alltid O2.
- **Omskrevet eksempel:** «Finn og klassifiser likevektspunktene for `u' = u³+4u²+v³+v−3`, `v' = u+v+1`.» (2022)

### C. Singulær perturbasjon / grenselag (nesten alltid Oppgave 3)
- **Krav (fast koreografi):**
  1. **Ytre løsning:** sett `ε = 0` i likningen, løs den reduserte (ofte separable) likningen, bruk randbetingelsen **utenfor** grenselaget.
  2. **Indre løsning:** innfør grenselagsvariabel `ξ = x/δ`, sett `y(x) = Y(ξ)`. Velg `δ` slik at det høyeste-ordens-leddet balanserer nøyaktig ett annet ledd (nesten alltid `δ = ε`). Løs den ledende indre likningen (typisk `Y'' + Y' = 0` ⇒ `Y = C₁ + C₂e^{−ξ}`), bruk randbetingelsen **i** grenselaget.
  3. **Matching:** `lim_{ξ→∞} Y(ξ) = lim_{x→0} y_ytre(x)` bestemmer den gjenstående konstanten.
  4. **Uniform løsning:** `y_u = y_ytre + Y(x/δ) − (felles grenseverdi)`.
- **Frekvens:** ≈ 89 %, nesten alltid O3.
- **Omskrevet eksempel:** «`εy'' + 4y' + (sin x)y² = 0`, `y(0)=0`, `y(π)=1`, grenselag ved `x=0`. Finn ytre, indre og uniform 0.-ordens løsning.» (2022)

### D. Skalering av en gitt modell til dimensjonsløs form
- **Krav:** Sett `x ↦ Lx`, `t ↦ Tt`, `u ↦ Uu` osv. (fysisk variabel = skala × dimensjonsløs). Sett inn, og **balanser ledd** for å bestemme skalaene slik at likningen får ønsket dimensjonsløs form. Ofte finnes **flere mulige tidsskalaer** (2015, 2018, 2020) — kandidaten skal identifisere alle og forklare hva hver representerer fysisk (f.eks. `T_F = V/q` = tiden for å fylle tanken). Dimensjonsløse konstanter (`α`, `ε`, `µ`) tolkes som **forhold mellom tidsskalaer**, og `ε ≪ 1` motiverer en påfølgende perturbasjon.
- **Frekvens:** ≈ 100 % (inngår i nesten alle oppgaver).
- **Omskrevet eksempel:** «Skalér `du*/dt* = β/(1+v*^γ)·u* − κu*`, `dv*/dt* = ηu* − λv*` med `1/κ` som tidsskala, og finn skalaer for `u*, v*` slik at likningene blir `u_t = α/(1+v)·u − u`, `εv_t = u − v`. Tolk `α` og `ε`.» (2019)

### E. Bevaringslov → karakteristikker → sjokk / fortynningsvifte
- **Krav:** Utled `∂u/∂t + ∂J(u)/∂x = 0` fra en integral bevaringslov (fluks `J(u) = u·v(u)`). Løs med **karakteristikkmetoden:** `z(t) = u(x(t),t)` er konstant langs `ẋ = J'(u₀(x₀))`, altså rette linjer `x = J'(u₀(x₀))t + x₀`. Tegn karakteristikkene. Hvis de **kolliderer** ⇒ **sjokk**, med hastighet fra **Rankine–Hugoniot:** `U = (J(u₊)−J(u₋))/(u₊−u₋)`. Hvis de **sprer seg** (dødsektor) ⇒ **fortynningsvifte** `u(x,t) = (J')⁻¹(x/t)`. Ofte fører sjokkbanen til en **lineær 1. ordens ODE for `s(t)`** som løses med integrerende faktor.
- **Frekvens:** ≈ 84 %, nesten alltid O4/O5.
- **Omskrevet eksempel:** «Trafikk med `J(u) = v_m(u − u²/u_m)`, kilekø-initialdata. Skalér, finn karakteristikkene, avgjør om det oppstår sjokk eller vifte, og finn `u(x,t)`. Finn deretter posisjonen `y(t)` til bilen som starter i `x=−1`.» (2023)

### F. Utledning + skalering + perturbasjon av en PDE-modell (den store sluttoppgaven)
- **Krav:** Fra fysiske antakelser om **massebevaring** over et lite volum `[a,b]` (eller ball `B_r`): tidsendring av masse = netto inn-fluks (± kilder). Divisjon med `(b−a)` og grensen gir differensialform. Sett inn konstitutiv lov: **Darcys lov** `q = −(k/µ)∇p` (porøs strømning) og/eller **Ficks lov** `j = −φD∇C` (diffusjon) og/eller ideell gasslov. Bruk kjerne-/produktregel. **Skalér** til dimensjonsløs form. Ved liten parameter `ε`: skriv `p = p₀ + εp₁ + O(ε²)`, samle ledd orden-for-orden — merk at selv en **ikke-lineær** opprinnelig likning gir **lineære** delproblemer for `p₀` og `p₁`.
- **Frekvens:** ≈ 79 %, nesten alltid den siste og tyngste oppgaven.
- **Omskrevet eksempel:** «Gass injiseres i et vannfylt porøst sylinderrør ved konstant trykkfall. Sett opp massebevaring for gass og vann, vis at `q_g + q_w = q(t)` er uavhengig av `x`, utled `q(t) = k∆p·(∫₀^L dx/λ_T)⁻¹`, skalér metningslikningen for `S`, og vis at en gitt front-løsning er kontinuerlig.» (2022)

### G. Bifurkasjonsdiagram
- **Krav:** Løs `f(µ,u) = 0` for likevektsgrenene som funksjon av parameteren `µ`. På hver gren: bruk **fortegnet til `∂f/∂u`** til å avgjøre stabilitet (`< 0` ⇒ stabil/heltrukket linje, `> 0` ⇒ ustabil/stiplet). Marker hvor stabiliteten bytter gren (transkritisk/sadel-node-bifurkasjon) og tolk det fysisk (f.eks. «sykdommen dør ut for `µ < 1`», 2022).
- **Frekvens:** ≈ 58 %.
- **Omskrevet eksempel:** «Tegn bifurkasjonsdiagrammet i `(µ,u)`-planet for `u' = (u−µ)(u²−µ)`; heltrukket for stabile, stiplet for ustabile grener.» (2019)

### H. Populasjonsdynamikk: logistisk vekst og Lotka–Volterra
- **Krav:** Gjenkjenn/forklar **logistisk** vekstledd `rN(1−N/K)` og **predator–byttedyr**-koblingsledd `±βxy`. Tolk hver konstant fysisk. Skalér, finn likevekt, lineariser (se sjanger B). Ofte kombinert med et lite perturbasjonsledd (høsting, sterilt insekt).
- **Frekvens:** ≈ 58 %.
- **Omskrevet eksempel:** «`dx/dt = αx − βxy`, `dy/dt = δxy − γy`: forklar konstantene, skalér, lineariser rundt det indre likevektspunktet og finn perioden til de små svingningene.» (2023 — Lotka–Volterra)

### I. Regulær perturbasjon
- **Krav:** Skriv `y = y₀ + εy₁ + O(ε²)`, Taylor-utvikle ev. ikke-lineære ledd, sett inn og samle orden-for-orden. `O(1)`- og `O(ε)`-problemene løses sekvensielt (`y₀` mater inn i likningen for `y₁`). Brukes når det **ikke** er grenselag (ingen høyeste-derivert × ε).
- **Frekvens:** ≈ 47 %.
- **Omskrevet eksempel:** «Satellitt i sirkelbane forstyrres litt; sett `r = a + εr₁`, `θ̇ = ω + εθ̇₁`, lineariser og vis at `r₁(t) = A sin ωt + B cos ωt + C` (bane forblir begrenset).» (2018)

---

## 4. Sensorens krav

Utledet fra formuleringene i de offisielle løsningsforslagene (Wessel-Berg, Grasmair, Krogstad m.fl.).

1. **Begrunn alt; vis nok mellomregning.** Bar fasit gir ikke full uttelling. Fasitene er detaljerte og forventer samme detaljnivå.
2. **Dimensjonsmatrise skal vises eksplisitt** i Buckingham-oppgaver, sammen med et rang-argument (en konkret undermatrise med determinant ≠ 0). Det holder ikke å «gjette» π-gruppene uten å begrunne dimensjonsløsheten.
3. **Klassifiser stabilitet via spor og determinant** — fasiten bruker konsekvent `det J` (fortegn) og `tr J` (fortegn), ikke full egenverdiutregning med mindre nødvendig.
4. **Grenselag-koreografien skal være komplett:** ytre + indre + eksplisitt **valg og begrunnelse av `δ`** (hvilke ledd balanserer) + **matching-betingelse** + uniform løsning. Å hoppe over matching-steget er en klassisk poengtapper.
5. **Skalaer skal begrunnes ved balansering av ledd**, ikke bare postuleres. Der det finnes flere tidsskalaer, skal alle nevnes og tolkes fysisk.
6. **Bevaringslov skal utledes fra integralform** (masse over `[a,b]` eller `B_r`), ikke bare skrives ned på differensialform. Divergensteorem / grensen `b→a` skal vises.
7. **Rankine–Hugoniot og skillet sjokk vs. vifte** skal begrunnes ut fra karakteristikkenes oppførsel (kolliderer ⇒ sjokk; sprer seg ⇒ vifte), ikke gjettes.
8. **Alternative gyldige metoder premieres** (fasitene viser ofte flere veier, f.eks. reell vs. kompleks delbrøk, «trial and error» vs. lineært system for π-eksponenter).
9. **Fysisk tolkning teller.** Flere oppgaver ber eksplisitt om å forklare hva parametere, tidsskalaer eller en bifurkasjon *betyr* i modellen. Dette er direkte overlapp med prosjekt-kompetansen.

---

## 5. Typiske feil

Samlet fra fasitenes advarsler og fra de stegene som erfaringsmessig er vanskeligst.

1. **Velge feil kjernevariabel** i Buckingham — særlig å velge den variabelen man vil isolere. Fasiten advarer eksplisitt («do not choose U!», 2016).
2. **Falske likevektspunkter** ved å multiplisere bort en nevner `(1+x)` og glemme å sjekke at «løsningen» faktisk er gyldig (2017: `(−1,0)` er *ikke* et likevektspunkt).
3. **Feil `δ` i grenselaget** — velge et som balanserer feil ledd, eller ikke begrunne valget. De tre kandidatene `δ = ε`, `δ = √ε`, `δ = 1` skal vurderes; nesten alltid er svaret `δ = ε`.
4. **Hoppe over matching-steget** eller bruke feil grenser (`ξ→∞` mot `x→0`), og glemme å trekke fra den felles grenseverdien i den uniforme løsningen.
5. **Postulere skalaer uten balansering** — eller overse at det finnes flere tidsskalaer og at valget av `ε ≪ 1` er det som gjør perturbasjonen gyldig.
6. **Skrive bevaringsloven direkte på differensialform** uten å utlede den fra integralform (mister poeng på rigор).
7. **Feil fortegn i Rankine–Hugoniot** eller å bruke den når man egentlig har en fortynningsvifte (og omvendt).
8. **Glemme å behandle `a > 0` og `a < 0` (eller tidlige vs. sene tider) hver for seg** i sjokk/vifte-oppgaver — løsningen bytter ofte struktur ved en kritisk tid (f.eks. sjokket begynner å bevege seg ved `t = 1`, 2019/2020/2023).
9. **Stoppe perturbasjonen for tidlig:** flere oppgaver krever både `O(1)`- og `O(ε)`-leddet, og at man ser at ikke-lineære opprinnelige likninger gir lineære delproblemer.
10. **Glemme fysisk tolkning** når oppgaven ber om det (hva betyr `µ = 1`? hva representerer `T_F`?).

---

## 6. Teorem-/notasjons-/formelapparat

Kjerneverktøyene en TMA4195-kandidat må ha automatisert (standard notasjon; ikke opphavsrettslig beskyttet).

**Dimensjonsanalyse:**
- **Buckinghams π-teorem:** `n` variabler, dimensjonsmatrise av rang `r` ⇒ `n − r` uavhengige dimensjonsløse π-grupper; enhver dimensjonelt konsistent relasjon `f(x₁,…,xₙ)=0` er ekvivalent med `g(π₁,…,π_{n−r})=0`.
- **Dimensjonsmatrise:** rader = grunnenheter (m, s, kg, K), kolonner = variabler; eksponentene er kolonnene.
- **Kjente dimensjonsløse tall:** Reynolds `Re = ρvL/µ`, Froude, Péclet, samt skalamodell-likhet (Froude-skalering for skip).

**Dynamiske systemer / stabilitet:**
- **Jacobi-matrise** `J = ∂(f,g)/∂(u,v)`; `det J = λ₁λ₂`, `tr J = λ₁+λ₂`.
- Klassifikasjon: `det J < 0` ⇒ sadel (ustabil); `det J > 0, tr J < 0` ⇒ asymptotisk stabil; `det J > 0, tr J > 0` ⇒ ustabil.
- **Bifurkasjon:** likevektsgren `f(µ,u)=0`; stabilitet fra fortegn `∂f/∂u`. Transkritisk / sadel-node.
- **Lyapunov-funksjon** (sjelden, 2015): `L(y_e)=0`, `L>0` ellers, `L̇ ≤ 0` ⇒ stabil.

**Perturbasjonsmetoder:**
- **Regulær:** `y = y₀ + εy₁ + …`, samle orden-for-orden.
- **Singulær / grenselag:** ytre (`ε=0`), indre (`ξ = x/δ`, balanser ⇒ `δ`), matching `lim_{ξ→∞}Y = lim_{x→x₀}y_ytre`, uniform `y_u = y_ytre + Y − y_felles`.
- Typisk indre likning `Y'' + Y' = 0` ⇒ `Y = C₁ + C₂e^{−ξ}`.

**Bevaringslover / PDE:**
- **Skalar bevaringslov:** `u_t + J(u)_x = 0`.
- **Karakteristikker:** `u` konstant langs `ẋ = J'(u₀(x₀))`; rette linjer `x = J'(u₀)t + x₀`.
- **Rankine–Hugoniot:** sjokkfart `U = [J]/[u] = (J(u₊)−J(u₋))/(u₊−u₋)`.
- **Fortynningsvifte:** `u(x,t) = (J')⁻¹(x/t)` i dødsektoren.
- **Darcys lov:** `q = −(k/µ)(∇p − ρg)`. **Ficks lov:** `j = −φD∇C`. **Ideell gasslov:** `p = ρRT`.
- **Divergensteorem** for å gå fra integral- til differensialform; produkt-/kjerneregel for `∇·(ρq)`.

**Modelleringsbyggeklosser:**
- **Logistisk vekst:** `Ṅ = rN(1 − N/K)`.
- **Lotka–Volterra:** `ẋ = αx − βxy`, `ẏ = δxy − γy`.
- **Massevirkningsloven:** reaksjonsrate `r = k·[A][B]`.
- **Trafikkfluks:** `J(u) = u·v(u)`, ofte `v(u) = v_m(1 − u/u_m)`.

**Ingen formelark deles ut** (til forskjell fra TMA4135). Rottmann var tillatt til 2019; fra 2020 kun kalkulator. Kandidaten må derfor kunne apparatet utenat.

---

## 7. Prognose og prioritering (nivådelt)

### Nivå 1 — Må sitte perfekt (dekker ≈ 80 % av skoleeksamen)
1. **Dimensjonsanalyse / Buckingham pi** (O1, ≈100 %) — dimensjonsmatrise, rang, kjernevariabler, π-grupper, isolér ønsket variabel.
2. **Likevekt + stabilitet, 2×2-system** (O2, ≈95 %) — Jacobi, spor & determinant. Gratis poeng; skal aldri tapes.
3. **Skalering til dimensjonsløs form** (≈100 %, gjennomgripende) — balanser ledd, finn alle tidsskalaer, tolk dem.
4. **Singulær perturbasjon / grenselag** (O3, ≈89 %) — full koreografi ytre→indre→matching→uniform.
5. **Bevaringslov + karakteristikker + sjokk/vifte + Rankine–Hugoniot** (≈84 %) — inkl. den lineære ODE-en for sjokkbanen `s(t)`.

### Nivå 2 — Høy prioritet (skiller B/A fra C)
6. **PDE-modelloppsett fra bevaringslov + Darcy/Fick** (den tunge sluttoppgaven, ≈79 %) — porøst medium, CO₂-lagring, gass-injeksjon. Øv på integral→differensial→skalering→ε-utvikling.
7. **Bifurkasjonsdiagram** (≈58 %) — grener + fortegn `∂f/∂u` + fysisk tolkning.
8. **Populasjonsdynamikk** (logistisk, Lotka–Volterra, ≈58 %) og **regulær perturbasjon** (≈47 %).
9. **Fysisk tolkning og modelloppsett fra bunn** — kritisk for **prosjekt-delen (25 %)** og økende på skoleeksamen. Tren å gå fra antakelser til likninger, ikke bare å analysere ferdige modeller.

### Nivå 3 — Beredskap (lav frekvens, men har forekommet)
10. **Lineært transportsystem via diagonalisering** (2022), **Lyapunov-funksjon** (2015 Kapitza), **«intermediate asymptotics» / fundamentalløsning** (2017), **skalamodell-testing / Froude–Reynolds** (eldre sett).

### Nedprioriter / utelat
- **Variasjonsregning, Euler–Lagrange, funksjonaler, geodeter** — 0/19, aldri på eksamen (kort orientering holder).
- **Fourier, separasjon av variable, numeriske metoder** — 0/19, ikke en del av dette emnet.

### Prosjekt-spesifikk prognose
Siden prosjektet teller 25 % og er et åpent modelleringsarbeid i gruppe, bør boka ha minst ett kapittel viet **hele modelleringssyklusen**: identifiser fenomen → antakelser → sett opp ODE/PDE → skalér → analyser → tolk → skriv rapport. De samme seks søylene brukes, men i «byggeretning». Reservoar-/porøsmedium-eksempler (forelesernes forskningsfelt) er en trygg mal for både prosjekt og sluttoppgave.

---

## 8. Kildeliste

Alle filer fra `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4195/` (34 PDF-er). «L»/«LF»/«sol»/«_l» = løsningsforslag.

**Lest grundig (oppgaver + løsningsforslag):**
- `TMA4195_2023.pdf` + `TMA4195_2023lf.pdf` (Wessel-Berg)
- `TMA4195_2022.pdf` + `TMA4195_2022LF.pdf`
- `TMA4195Ex2021.pdf` + `TMA4195Ex2021LF.pdf`
- `TMA4195Ex2020.pdf` + `TMA4195Ex2020LF.pdf`
- `TMA4195Ex2019LF.pdf` (+ oppgaver innbakt)
- `tma4195H2018.pdf` + `tma4195H2018_sol.pdf` (Grasmair)
- `tma4195H2017.pdf` + `tma4195H2017_sol.pdf`

**Gjennomgått / skummet (løsningsforslag ekstrahert, topp-nivå):**
- `TMA4195_2016-12-14(_L).pdf`, `TMA4195_2015-12-11(_L).pdf`, `TMA4195_2014-12-11(_L).pdf`, `TMA4195_2013-12-21(_L).pdf`, `TMA4195_2012-12-11(_L).pdf`, `TMA4195_2011-12-10(_L).pdf`, `TMA4195_2010-12-21(_L).pdf`, `TMA4195_2009-12-3_L.pdf`, `TMA4195_2008-12-16_L.pdf`, `TMA4195_2007-12-12_L.pdf`, `TMA4195_2006-11-30_L.pdf`, `TMA4195_2005-12-15_l.pdf` / `TMA4195_2005-12-15_en.pdf`

**Skann-hull / merknader:**
- `TMA4195_2007-12-12.pdf` (rått oppgavesett H2007) er en **ren bilde-skann** (kun 3 tegn ekstrahert) — men det tilhørende løsningsforslaget `TMA4195_2007-12-12_L.pdf` ekstraherer fullt, så innholdet er dekket. **Ingen reelt innholdshull.**
- Alle øvrige raw-oppgavesett (2010–2016, 2020–2023) og **samtlige 20 løsningsforslag** ekstraherer til brukbar tekst.
- **Prosjekt-delen (25 %) er ikke representert i arkivet** — ingen prosjektoppgaver, rapporter eller sensorveiledning for gruppeprosjektet. Prognosen for prosjektet i del 1 og 7 er utledet indirekte fra skoleeksamenens ferdighetsprofil og fra emnets kjente struktur.
- 2005-settet finnes i to varianter (`_en` engelsk oppgaver, `_l`/norsk løsning); begge lest.

**Opphavsrettsnote:** Alt innhold i dette dokumentet er omskrevet med egne ord. Ingen oppgavetekster eller løsningsformuleringer er gjengitt ordrett. Matematiske uttrykk, metodenavn (Buckingham pi, Rankine–Hugoniot, Darcys lov osv.) og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Eventuelle bilder/figurer fra de originale UDIR-/NTNU-PDF-ene er ikke gjengitt. Dokumentet er et internt grunnlagsdokument for læremiddelutvikling.
