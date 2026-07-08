# Eksamensanalyse: SØK1004 / SOK1004 Statistikk for økonomer (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK1004/` (33 filer): oppgavesett fra V2010 til H2025 samt sensorveiledninger og løsningsforslag. **Lest grundig:** 7 sensorveiledninger/fasiter (V2015, H2016, V2020, V2021, H2024, én udatert bokmålsveiledning, samt V2015-fasit i sin helhet), 3 fullstendige løsningsforslag (H2022 med detaljerte svar, V2022 answer keys — sistnevnte kun bildeskanning, H2025 løsningsforslag) og oppgavesettene for H2023, V2024, V2025, H2025, «Norsk» (nyere sett). Eldre sett (V/H 2010–2019) er skummet for struktur- og temabekreftelse. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster, fasiter eller sensorformuleringer. Tallsvar, formler og faglige sammenhenger er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode-merknad:** Emnet skrives både «SØK1004» (arkivets filnavn og eldre forsider) og «SOK1004» (offisiell kode i dag). Samme emne. Fullt navn: *Statistikk for økonomer*, 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. Status: **aktiv** (verifisert juli 2026).

---

## 0. Kort om emnet + NTNU/UiO-forskjellen (les dette først)

SØK1004 er NTNUs innføringsemne i statistikk for økonomistudenter: sannsynlighet og usikkerhet, deskriptiv statistikk, stokastiske variable og fordelinger (normal, binomisk), estimering og intervallestimering, hypotesetesting, kovarians/korrelasjon, enkel regresjon og kjikvadrat/variansanalyse. Det er **forkunnskap for videre økonometri** (SOK3001 / SOK3514) og ligger på lavere/likt nivå som UiOs **ECON2130 Statistikk 1** (som nå også bærer tittelen «Statistikk for økonomer»). De to emnene overlapper i **pensumkjernen**, men er nesten motsatte i **verktøy og eksamensstil** — det er den viktigste konklusjonen for bokdesignet.

| | **SØK1004 (NTNU)** | **ECON2130 (UiO)** |
|---|---|---|
| Sjanger | «Business statistics» à la Anderson/Sweeney/Newbold: kokebok-metode, håndregning, tabelloppslag | «Statistikk for samfunnsvitere med R»: simulering, dataanalyse, tolkning |
| Verktøy | **Enkel kalkulator + trykt normal-/t-/F-tabell.** Ingen programvare på nyere skoleeksamener | **R** går igjen i hvert sett (skrive/tolke kode, Monte Carlo, `t.test`); i 2025 hands-on CSV-analyse |
| Hjelpemidler i dag | **Kode D** — kun enkel kalkulator, formelsamling som digital ressurs, ingen trykte notater | Alle trykte/skrevne hjelpemidler tillatt (formelark i praksis foran kandidaten) |
| Eksamensform | **Skoleeksamen 4 timer**, håndregning på ark, sjusifret kode | Skoleeksamen 3–4 t (varierende R-regime) |
| Oppgavestil | Kontekst-innpakkede **regneoppgaver** + begrepsoppgave + flervalg | Bygger-på-hverandre deloppgaver med tung tolknings-/designdrøfting |
| Signaturtema | F-test for to varianser, kjikvadrat/uavhengighet, Simpsons paradoks, Chebyshev, trimmet gjennomsnitt, matched samples | Monte Carlo-simulering, «er p-verdien stokastisk?», kausalitet/seleksjon, teststyrke ved simulering |
| Regresjon | **Er faktisk testet** (regresjonslinje, tolkning, R²) — flere sett | Aldri testet på 13 sett (kun korrelasjon én gang) |
| Pensumprofil | Amerikansk business-statistikk-lærebok (Anderson–Sweeney–Williams-typen: startlønn USA, ACS-data, kredittkortgjeld, akseptsampling) | Imai/Yakir, samfunnsdata (V-Dem, WVS, SSB, NLSY) |

**Overlappskonklusjon.** SØK1004 og ECON2130 dekker **samme kjernepensum** (sannsynlighet, fordelinger, inferens-kjeden estimator → SE → KI → test → p-verdi, to-utvalg, korrelasjon) på omtrent samme nivå. Men:

- **ECON2130 tester ALDRI enkel regresjon; SØK1004 gjør det jevnlig.** Motsatt prioritering.
- **SØK1004 tester kjikvadrat og F-test for to varianser** (klassisk business-statistikk); disse er fraværende i ECON2130-arkivet.
- **ECON2130 er R-basert med simulering, kausalitet og seleksjonsdrøfting;** SØK1004 har ingen programmering på nyere skoleeksamen (unntak: V2021 brukte Stata under korona-hjemmeeksamen) og lite eksplisitt kausalitets-/designdrøfting.
- **SØK1004 har et bredere deskriptivt/begrepslag** (Simpsons paradoks, Chebyshevs teorem, trimmet gjennomsnitt, matched samples, målenivåer) som ECON2130 ikke prøver eksplisitt.
- **Signaturspørsmålene skiller lag:** ECON2130 spør «er p-verdien en stokastisk variabel?» og krever CLT navngitt + Poisson-forutsetninger; SØK1004 spør «tolk p-verdien / konfidensintervallet», F-test for varianser og regresjonstolkning.

En SØK1004-bok bør derfor bruke ECON2130-boka som **søsterverk for det felles kjernepensumet** (kap. om sannsynlighet, fordelinger og inferens kan i stor grad deles), men legge til **egne kapitler** om (i) deskriptiv statistikk med business-begrepene, (ii) enkel regresjon, og (iii) kjikvadrat + F-test for varianser — og kutte R/simulering/kausalitetstyngden. Se `/Users/danielandreasaubert/eksamenssett/Skolesaga/docs/hoyskole-boker/econ2130/EKSAMENSANALYSE.md` for det felles laget.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer** (09–13), karakter A–F, 7,5 studiepoeng. Digital via Inspera; nyere sett besvares «på ark» med håndtegninger som lastes opp og en sjusifret kode per oppgave.
- **Hjelpemidler — regimeskifte over tid:**
  - **Eldre papir-/tidlig digital-æra (t.o.m. ca. 2019):** **kode C** — matematisk formelsamling (Sydsæter/Strøm/Berck) + spesifikk godkjent kalkulator (Casio fx-82ES PLUS, Citizen SR-270X m.fl.). Statistiske tabeller (normal/t/F) vedlagt oppgavesettet.
  - **Korona-hjemmeeksamen (2020–2021):** **kode A / alle hjelpemidler.** V2021 og S2021 var på engelsk og krevde **Stata** på oppgave 1 (last ned `.dta`-datasett, kjør `summarize`, lever do-fil) — ellers håndregning. Dette er et engangs-avvik, ikke nåtidsregimet.
  - **Nåtid (2024–2025):** overgang mot **kode D** — kun **enkel kalkulator**, ingen trykte/håndskrevne hjelpemidler; formelsamling ligger som **digital ressurs** i oppgavesettet. H2025 er eksplisitt kode D. V2025/V2024 var kode C med enkel kalkulator + digital formelsamling. **Bokens formelsamling må derfor være selvforsynt** — studenten kan ikke ta med egne notater.
- **Målform/språk:** oppgavesettene veksler mellom **bokmål og nynorsk** (norske sett) og **engelsk** (korona-årene 2021–2022, samt V2024 og H2024-fasiten er på engelsk). Emnet har hatt både norsk og engelsk oppgavetekst; boken bør bruke norsk terminologi men gjenkjenne engelske faguttrykk.
- **Faglærere (roterer):** Per Tovmo, Costanza Biavaschi, Quynh Trang Nguyen m.fl.

### Struktur — bred, men stabil sjangermiks
Grunnmalen er **4–7 oppgaver** som dekker hele pensumbredden, med vekt oppgitt per oppgave. Typisk profil:
- **Én begreps-/definisjonsoppgave** (10–20 %) — «forklar kort 2–3 setninger».
- **Flere sannsynlighets-/fordelingsoppgaver** (betinget sannsynlighet/Bayes, binomisk, normalfordeling).
- **Én eller flere inferensoppgaver** (KI, hypotesetest, utvalgsstørrelse).
- **Ofte en kovarians/korrelasjon- eller regresjonsoppgave**, og/eller en **kjikvadrat/varians-oppgave**.
- **H2022 og H2023** hadde en stor **flervalgsblokk** (ca. 20 %, «finn korrekt svaralternativ, utregning ikke nødvendig») — et NTNU-Inspera-trekk.

### Vektings-/strukturhistorikk (utvalg)

| Sett | Struktur (oppgaver × vekt) | Merknad |
|---|---|---|
| V2015 | 4 oppg. 25/25/20/30 | Kovarians/korrelasjon, binomisk+test, test av snitt, **regresjon/korrelasjonstest** |
| H2016 | 4 oppg. 15/15/40/30 | Normal, diskret fordeling, to-utvalgs test + **F-test varianser**, korrelasjonstest |
| V2020 | 4 oppg. 10/25/25/40 | Bayes, binomisk+normaltilnærming+test, **regresjonslinje**, normal+binomisk+t-test |
| V2021 (korona) | 3 oppg. (65/…) engelsk | **Stata** på oppg. 1 (ACS-data), KI for andel, inferens |
| H2022 | flervalg-blokk + regneoppgaver | ~14+ flervalgsspørsmål (1 p hver) + fritekst |
| H2023 | 4 oppg. 20/10/40/30 | **Flervalg (20 %)** + Bayes + KI + kjikvadrat/varianstest |
| V2024 | 5 oppg. 30/15/20/15/20 (engelsk) | Krysstabell/simultanfordeling, normal, KI+tolkning, andels-test+p-verdi, **F/kjikvadrat-varianstest** |
| V2025 | 7 oppg. (begrep 10 / sanns. 10×3 / est.+test 25 / hypotese 20) | Begrep, sannsynlighet, andel-KI + **utvalgsstørrelse**, hypotesetest |
| H2025 | 6 oppg. (begrep 10 / binom 20 / normal 20 / KI 15 / krysstabell 20 / …15) | **Kode D.** Begrep, akseptsampling (binomisk), normal, KI z-vs-t, krysstabell/kjikvadrat |

**Konstanter på tvers av settene:**
1. **Kontekst-innpakning fra business/økonomi:** startlønn USA, kredittkortgjeld, akseptsampling i elektronikk, eiendomsmegler-lønn, kjøring på rødt lys, hotellrangeringer, iskrembar-salg, fotballdommere. Modellen under er alltid standard.
2. **Begrepsoppgaven** trekker fra en fast liste: kategoriske/ordinale data, punkt-/intervallestimat, kovarians, korrelasjon, kumulativ frekvensfordeling, type I/II-feil, Chebyshevs teorem, sentralgrenseteoremet, Simpsons paradoks, trimmet gjennomsnitt, matched sample-design, statistisk inferens, frekvensfordeling.
3. **Inferens-kjeden** (estimator → SE → KI → test → p-verdi) bærer størstedelen av poengene i hvert sett.
4. **Tabelloppslag** (normal, t, F) forutsettes — men på kode-D-eksamen ligger tabellene digitalt i settet.

---

## 2. Temafrekvens

Score = andel av de undersøkte settene/veiledningene (≈ 15 sett/fasiter med lesbart innhold 2015–2025) der temaet inngår som deloppgave eller mer.

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Hypotesetesting** (H₀/H₁, testobservator, kritisk verdi/konklusjon) | **~100 %** | Selve ryggraden; én/to utvalg, snitt/andel/varians |
| **Normalfordeling: standardisering + tabelloppslag** | **~95 %** | Z = (X−μ)/σ; P(X<a), P(a<X<b), invers («finn k så P(X>k)=…») |
| **Betinget sannsynlighet / Bayes / total sannsynlighet** | **~85 %** | Diagnose-/testeksempler (Sol-testen V2020, sykdomstest); addisjonsregel |
| **Konfidensintervall + tolkning** | **~85 %** | «Ved gjentatte utvalg dekker X % av intervallene sann parameter»; z vs. t |
| **Binomisk fordeling** (+ normaltilnærming) | **~80 %** | E=nπ, Var=nπ(1−π); akseptsampling; normaltilnærming når nπ, n(1−π)≥5 |
| **Deskriptiv statistikk** (snitt, median, varians, standardavvik, tolkning) | **~75 %** | Ofte fra rådata/frekvenstabell; kommenter median vs. snitt ved uteliggere |
| **Begrepsforklaring** (definisjonsoppgave) | **~70 %** | Fast liste; 2–3 setninger per begrep |
| **Diskret stokastisk variabel** (E=Σxp, Var=Σ(x−E)²p) | **~70 %** | Fra frekvenstabell; ofte forløper til KI/test |
| **p-verdi** (beregne + tolke) | **~65 %** | «Laveste signifikansnivå H₀ kan forkastes på»; ensidig/tosidig |
| **Kovarians og korrelasjon** (beregne + tolke) | **~60 %** | Cov, Corr∈[−1,1], tolkning; kovarians «sier ingenting om styrke» |
| **To-utvalgs sammenligning** (snitt eller andeler) | **~55 %** | Med felles/separat varians; matched vs. uavhengige utvalg |
| **Regneregler forventning/varians, lineærkombinasjoner** | **~50 %** | E(X±Y), Var med kovariansledd; profitt/sum-transformasjoner |
| **Enkel lineær regresjon** (regresjonslinje, tolkning, R²) | **~45 %** | Minste kvadraters linje, stigningstall tolkes, R²; V2015, V2020, V2016 |
| **Utvalgsstørrelse** (n for gitt feilmargin) | **~40 %** | n fra margin/konfidensnivå (snitt og andel) |
| **Kjikvadrat / F-test for varianser** | **~40 %** | F=S₁²/S₂² for to varianser; kji-kvadrat på krysstabell/uavhengighet |
| **Krysstabell / simultanfordeling** | **~35 %** | Fyll ut simultan-sannsynlighetstabell; betingede/marginale sannsynligheter |
| **Sentralgrenseteoremet** (eksplisitt navngitt) | **~35 %** | Begrunner normaltilnærming av snitt/andel |
| **Kombinatorikk** (kombinasjoner/permutasjoner) | **~25 %** | «Hvor mange måter å velge k av n»; med/uten rekkefølge |
| **Type I/II-feil, Chebyshev, Simpsons paradoks, trimmet snitt** | **~25 %** | Primært i begrepsoppgaven, men fast tilstede |
| **Stata/programvare** | **~10 %** | Kun korona-hjemmeeksamen 2021; ikke nåtidsregime |

**Viktigste funn:**
1. **Inferens-kjeden er selve emnet.** Hypotesetest + KI + p-verdi dekker mest, alltid i konkret kontekst. Boken må drille firetrinns-oppskriften (definer H₀/H₁ → velg testobservator og begrunn fordeling → sammenlign mot kritisk verdi/p-verdi → konkluder i kontekst) i alle varianter: én-utvalgs z og t, to-utvalgs, andels-test, varians-test.
2. **Normalfordeling + betinget sannsynlighet er de to mest stabile «byggeklossene»** — nesten hvert sett.
3. **Regresjon MÅ dekkes** (til forskjell fra ECON2130): regresjonslinje via minste kvadrater, tolkning av stigningstall og R², forutsetninger.
4. **Kjikvadrat og F-test for to varianser** er faste NTNU-innslag som ECON2130-boka ikke har — egne seksjoner kreves.
5. **Begrepsoppgaven gir «gratis» poeng** hvis den faste listen sitter (12–15 begreper). Chebyshev, Simpsons paradoks, trimmet gjennomsnitt og matched samples er små, men gjengangende og lette å glemme.
6. **z-vs-t-valget** er et fast metodesignal: t med n−1 frihetsgrader ved lite utvalg/estimert varians, z ved stort n/kjent varians.

---

## 3. Oppgavesjangre

### A. Begrepsforklaring (definisjonsoppgave, 10–20 %)
- **Krav:** Presis definisjon på 2–3 setninger per begrep; formel der naturlig. Sensor forventer å treffe kjernen, ikke ordrett gjengivelse. Full uttelling ≈ 2 poeng per begrep.
- **Gjengangerbegreper:** kategoriske/ordinale data, punktestimat, intervallestimat, kovarians, korrelasjon, kumulativ frekvensfordeling, type I-/II-feil, Chebyshevs teorem, sentralgrenseteoremet, Simpsons paradoks, trimmet gjennomsnitt, matched sample-design, statistisk inferens, frekvensfordeling, korrelasjonskoeffisient.
- **Omskrevet eksempel:** «Forklar kort hva Chebyshevs teorem sier, og hva minst-andelen innenfor to standardavvik blir.»

### B. Betinget sannsynlighet, Bayes og hendelsesalgebra
- **Krav:** Total sannsynlighet P(D)=P(D|S)P(S)+P(D|Sᶜ)P(Sᶜ); Bayes P(S|D)=P(S)P(D|S)/P(D); addisjonsregelen P(A∪B)=P(A)+P(B)−P(A∩B) omskrevet for P(A∩B); betinget P(K|R)=P(R∩K)/P(R).
- **Omskrevet eksempel:** «En test gir positiv diagnose i 80 % av tilfellene når personen er syk, og korrekt negativ i 95 % ellers. 3 % er syke. Finn P(positiv) og P(syk | positiv).»

### C. Diskret stokastisk variabel og regneregler
- **Krav:** Fra frekvens-/sannsynlighetstabell: E(X)=Σx·f(x), Var(X)=Σ(x−E)²f(x)=E(X²)−[E(X)]². Kombiner variable: E(X±Y), Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y), og påpek at uavhengighet (Cov=0) trengs i variansleddet.
- **Omskrevet eksempel:** «Gitt de marginale fordelingene til X og Y, finn E, Var, Cov(X,Y), Corr(X,Y), og E og Var for totalprofitten Z=X+Y.»

### D. Binomisk fordeling (+ normaltilnærming)
- **Krav:** Identifiser binomisk (to utfall, konstant π, n uavhengige forsøk). P(X=k)=C(n,k)πᵏ(1−π)ⁿ⁻ᵏ, E=nπ, Var=nπ(1−π). Ved stort n med nπ og n(1−π)≥5: normaltilnærming N(nπ, nπ(1−π)), ofte med kontinuitetskorreksjon (±0,5).
- **Omskrevet eksempel:** «Et parti aksepteres hvis ≤1 % er defekt. Trekk 5 varer. Finn P(0 defekte), P(nøyaktig 1) og P(minst 1), og vurder om du bør akseptere partiet.»

### E. Normalfordeling (standardisering + invers)
- **Krav:** Z=(X−μ)/σ, slå opp i normaltabell. Tre varianter: P(X<a), P(a<X<b), og invers («finn k slik at P(X>k)=0,05» → k=μ+z·σ). Bruk symmetri om μ.
- **Omskrevet eksempel:** «Månedslønn er N(62000, 9800²). Finn P(lønn<45000), P(70000<lønn<80000), og lønnen som overgås av bare 1 %.»

### F. Konfidensintervall (+ tolkning + z-vs-t)
- **Krav:** θ̂ ± (kritisk verdi)·SE. **z** ved kjent σ/stort n (1,645 / 1,96 / 2,576); **t med n−1 frihetsgrader** ved estimert varians og lite utvalg. For andel: p̂ ± z·√(p̂(1−p̂)/n). **Tolkning er eget poeng:** «ved gjentatte utvalg vil X % av slike intervaller inneholde den sanne parameteren» — ikke «parameteren ligger i intervallet med X % sannsynlighet».
- **Omskrevet eksempel:** «Med n=50, snitt 14612, s=6032: konstruer 90 %- og 95 %-KI for populasjonsgjennomsnittet, og forklar hvorfor det ene er bredere.»

### G. Hypotesetest (kjernesjangeren)
- **Krav (fast firetrinnsoppskrift):**
  1. Definer notasjon og sett opp H₀/H₁ — **retningsbestemt spørsmål gir ensidig test.**
  2. Velg testobservator og **begrunn fordelingen** (z ved kjent σ/stort n; t ved estimert σ/lite n; test på andel; F/kji ved varians).
  3. Velg signifikansnivå (1 %/5 %) og finn kritisk verdi.
  4. Sammenlign mot kritisk verdi eller p-verdi og **konkluder i kontekst.**
- **Varianter:** én-utvalgs z: (X̄−μ₀)/(σ/√n); én-utvalgs t: (X̄−μ₀)/(s/√n); andels-test: (p̂−p₀)/√(p₀(1−p₀)/n); to-utvalgs snitt (felles/separat varians); to andeler; **F-test for to varianser** S₁²/S₂² mot F(n₁−1, n₂−1); **kjikvadrat** på varians/krysstabell.
- **Omskrevet eksempel:** «Av 700 dommere har 276 opplevd trakassering. Test på 5 %-nivå om andelen er lavere enn 0,43.»

### H. p-verdi
- **Krav:** Beregn p-verdien fra testobservatoren (ensidig: haleareal; tosidig: doblet), og **tolk den** som «det laveste signifikansnivået H₀ kan forkastes på» / «sannsynligheten for et minst like ekstremt utfall gitt at H₀ er sann». Ved t-fordeling: angi intervall fra t-tabell (f.eks. «mellom 0,01 og 0,025»).
- **Omskrevet eksempel:** «Vis at p-verdien for utvalget blir 0,0049, og forklar hva den betyr.»

### I. Kovarians, korrelasjon og enkel regresjon
- **Krav (kovarians/korrelasjon):** Cov(X,Y)=E(XY)−E(X)E(Y); Corr=Cov/(σ_Xσ_Y)∈[−1,1]. Tolk: kovarians gir retning, korrelasjon gir styrke og er benevningsuavhengig.
- **Krav (regresjon):** Finn minste kvadraters regresjonslinje ŷ=b₀+b₁x, **tolk stigningstallet** («én time ekstra gir b₁ poeng mer»), oppgi antakelser (lineær sammenheng), og bruk/tolke R². Korrelasjonstest: H₀: ρ=0 med testobservator R√(n−2)/√(1−R²) ~ t(n−2).
- **Omskrevet eksempel:** «Estimer regresjonslinjen P=b₀+b₁T for eksamenspoeng mot forberedelsestid, tolk stigningstallet og oppgi R².»

### J. Krysstabell / simultanfordeling / kjikvadrat
- **Krav:** Fyll ut manglende celler i simultan-sannsynlighetstabell; regn marginale og betingede sannsynligheter fra en krysstabell. Kjikvadrat-test for uavhengighet: forventede frekvenser (rad·kolonne/total), Σ(O−E)²/E mot kji-kvadrat med (r−1)(c−1) frihetsgrader.
- **Omskrevet eksempel:** «Gitt en krysstabell over stjernerangering og prisklasse for 300 hoteller, fyll ut simultan-sannsynlighetstabellen og finn P(prisklasse 3 | 3 stjerner).»

### K. Utvalgsstørrelse
- **Krav:** Løs for n gitt feilmargin E og konfidensnivå: for snitt n=(z·σ/E)²; for andel n=z²p̂(1−p̂)/E² (bruk p̂=0,5 hvis ukjent).
- **Omskrevet eksempel:** «Hvor mange dommere må undersøkes for at feilmarginen på andelsestimatet skal bli maks 0,01?»

### L. Flervalg (Inspera, H2022/H2023)
- **Krav:** Konseptuelle enkeltspørsmål (1 p hver): definisjoner (histogram vs. stolpediagram), egenskaper (t→normal ved stort n; SE halveres·√2 ved halvert n), hypoteseoppsett (riktig H₀/H₁-retning), P(X=x)=0 for kontinuerlig variabel, tolkning av p-verdi. Utregning kreves ikke.

---

## 4. Sensorkrav / vurderingskriterier

Destillert fra de 7 veiledningene/fasitene (V2015, H2016, V2020, V2021, H2024, udatert bokmålsveiledning, H2025-løsningsforslag):

1. **Riktig oppsett + riktig fordeling + konklusjon i kontekst.** Sensor honorerer korrekt hypoteseoppsett, korrekt valgt testobservator med begrunnet fordeling, og en konklusjon formulert i oppgavens virkelighet — ikke bare «forkast H₀».
2. **Tall skal tolkes.** Elastisiteter finnes ikke her, men korrelasjon, regresjonskoeffisient, p-verdi og KI skal oversettes til ord. Ren regning uten tolkning gir ikke full uttelling.
3. **Begrepsoppgaven er raus, men krever kjernen.** «Ikke forventet ordrett riktig, men i nærheten» (udatert veiledning). Opp til 2 poeng per begrep.
4. **z-vs-t og ensidig/tosidig er metodesignalene.** t ved lite utvalg/estimert varians premieres; feil retning på testen trekker.
5. **Litt regneunøyaktighet tolereres** i tabelloppslag («litt større differanse gir litt trekk», udatert veiledning) — men metoden må være riktig.
6. **Alternative korrekte framgangsmåter godtas.** H2016-fasiten for F-testen aksepterer både S₂²/S₁² og S₁²/S₂² så lenge forkastningsregelen tilpasses; «full uttelling krever bare riktig hypotese, testobservator og fordeling» der tabellen ikke gir entydig konklusjon.
7. **KI-tolkningen er et eget poeng** (gjentatte-utvalg-formuleringen).
8. **Forutsetninger skal nevnes:** tilfeldig/representativt utvalg, normalitet, uavhengighet, binomisk-vilkårene — flere fasiter starter oppgaven med å liste forutsetningene.

---

## 5. Typiske feil

Utledet av det veiledningene retter på og oppgavene er bygget for å avsløre:

1. **KI-tolkningsfellen** — «parameteren ligger i intervallet med 95 % sannsynlighet» i stedet for gjentatte-utvalg-tolkningen.
2. **z der t kreves** — bruke normalfordelingens kritiske verdier ved lite utvalg og estimert varians (skal være t med n−1 frihetsgrader).
3. **Tosidig test på et ensidig spørsmål** («er andelen *lavere* enn …», «er variansen *større* enn …» krever ensidig).
4. **Glemme kontinuitetskorreksjon** ved normaltilnærming av binomisk (±0,5), eller bruke normaltilnærming når nπ eller n(1−π) < 5.
5. **Forveksle kovarians og korrelasjon** — tro at kovariansens størrelse sier noe om styrken (den avhenger av måleskala; bare korrelasjonen er standardisert).
6. **Bayes «feil vei»** — regne P(D|S) når det er P(S|D) som etterspørres.
7. **Median vs. gjennomsnitt** — ikke kommentere at uteliggere trekker gjennomsnittet (H2024 iskrembar: uke med lavt salg trekker snittet under medianen).
8. **Feil frihetsgrader** i t-test, F-test (n₁−1, n₂−1) og kjikvadrat ((r−1)(c−1)).
9. **P(X=x)=0 for kontinuerlig variabel** — flervalgsfelle (H2022).
10. **Kausal tolkning av regresjon/korrelasjon** — trekke årsakskonklusjon av observasjonsdata (mindre vektlagt enn i ECON2130, men nevnes).
11. **Utelate forutsetninger** — regne videre uten å nevne tilfeldig utvalg/normalitet/uavhengighet.
12. **Regnefeil i P(X≥k)** — glem ikke komplement: P(X≥k)=1−P(X≤k−1) for diskrete variable.

---

## 6. Prioritering for boka

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Hypotesetest-oppskriften i alle varianter** (~100 %): én/to utvalg, snitt/andel/varians, z/t-valg, ensidig/tosidig, p-verdi eller kritisk verdi, konklusjon i kontekst.
2. **Normalfordelingsregning** med standardisering, tabelloppslag og invers (~95 %).
3. **Konfidensintervall** med korrekt kritisk verdi (z/t), andels-KI, og ordrett presis tolkning (~85 %).
4. **Betinget sannsynlighet / Bayes / total sannsynlighet** (~85 %).
5. **Binomisk fordeling** med normaltilnærming og forutsetningsdrøfting (~80 %).

### Nivå 2 — må kunne (gir 20–40 % når de kommer)
6. **Deskriptiv statistikk** (snitt/median/varians/standardavvik/tolkning) + **diskret variabel** (E, Var fra tabell).
7. **Begrepsrepertoaret** (12–15 gjengangere) — presise definisjoner, inkl. Chebyshev, Simpsons paradoks, trimmet snitt, matched samples.
8. **Kovarians, korrelasjon og enkel regresjon** — beregning + tolkning + regresjonslinje/R² (regresjon er *unik* mot ECON2130).
9. **p-verdi** — beregne begge retninger + tolke.
10. **Regneregler E/Var + lineærkombinasjoner** med kovariansledd.

### Nivå 3 — bør dekkes (roterer inn, differensierer)
11. **Kjikvadrat / F-test for to varianser** — NTNU-signatur, fraværende i ECON2130.
12. **Krysstabell / simultanfordeling** — marginale/betingede sannsynligheter.
13. **Utvalgsstørrelse** for gitt feilmargin (snitt og andel).
14. **Kombinatorikk** (kombinasjoner/permutasjoner) + **sentralgrenseteoremet** (navngi når normaltilnærming brukes).
15. **Flervalgsberedskap** — konseptuelle enkeltspørsmål.

### Prognose for neste eksamen
Med stor sannsynlighet **4–7 oppgaver** som dekker bredden: én begrepsoppgave (10 %), én/to sannsynlighetsoppgaver (Bayes + binomisk/normal), én stor inferensoppgave (KI + hypotesetest + p-verdi + evt. utvalgsstørrelse), og minst én av {korrelasjon/regresjon, krysstabell/kjikvadrat, F-test varianser}. **Kode D** (kun kalkulator, digital formelsamling) er nåtidsregimet — boken må ha en selvforsynt formelsamling og drille håndregning med tabelloppslag. Ingen programvare forventes (Stata var et korona-engangstilfelle).

---

## 7. Pensum / notasjon / kildeankere

### Pensumprofil
Ingen pensumbok er navngitt i veiledningene, men innhold og terminologi peker entydig mot en **amerikansk business-statistikk-lærebok av Anderson–Sweeney–Williams-typen** (*Statistics for Business & Economics*) eller tilsvarende (Newbold): eksemplene (startlønn USA/National Association of Colleges and Employers, ACS-data, kredittkortgjeld, akseptsampling, Reynolds Electronics), begrepslisten (Simpsons paradoks, Chebyshevs teorem, trimmet gjennomsnitt, matched samples) og fordelingstabellene (Tabell A.1 = normal) er kanoniske for denne tradisjonen. Formelsamlingen i eldre sett er Sydsæter/Strøm/Berck (matematisk formelsamling for økonomer); nyere kode-D-sett har en **digital statistikk-formelsamling** vedlagt.

### Notasjonskonvensjoner (bruk nøyaktig denne)
- **Deskriptivt:** utvalgsgjennomsnitt X̄, utvalgsstandardavvik/-varians s / s², populasjon μ / σ / σ²; median; frekvensfordeling.
- **Sannsynlighet:** P(A), P(A∩B), P(A∪B), P(A|B), komplement A′/Aᶜ; Bayes og total sannsynlighet.
- **Fordelinger:** X~N(μ, σ²) (varians som andre argument — merk: noen sett skriver N(μ, σ) med *standardavvik*, som i V2020; boken må presisere konvensjonen). Binomisk med π (eller p) som suksesssannsynlighet, n forsøk; E=nπ, Var=nπ(1−π). Standardisering Z=(X−μ)/σ.
- **Inferens:** estimatorer med hatt p̂, θ̂; standardfeil SE; testobservator TS; kritisk verdi; signifikansnivå α; H₀/Hₐ (også H₁); frihetsgrader n−1.
- **Samvariasjon:** Cov(X,Y), Corr(X,Y)=ρ (populasjon) / r (utvalg); regresjonslinje ŷ=b₀+b₁x, forklaringsgrad R².
- **Fordelinger for varians:** F=S₁²/S₂² ~ F(n₁−1, n₂−1); kji-kvadrat χ² med (r−1)(c−1) frihetsgrader.

### Må beherskes aktivt (regnes for hånd med kalkulator + tabell)
1. **Sannsynlighetsalgebra:** addisjon, betinget, total sannsynlighet, Bayes, uavhengighet; kombinatorikk (C(n,k), permutasjoner).
2. **Diskrete fordelinger:** binomisk (formel, E, Var, normaltilnærming med kontinuitetskorreksjon); egendefinerte fra frekvenstabell (E=Σxp, Var=Σ(x−E)²p).
3. **Normalfordeling:** standardisering, tabelloppslag (begge veier), symmetri; CLT som begrunnelse for normaltilnærming av snitt/andel.
4. **Regneregler:** E(aX+bY), Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y), Cov=0 under uavhengighet; Var(X̄)=σ²/n, SE=σ/√n (estimert s/√n).
5. **Inferens-kjeden:** punkt-/intervallestimat, KI med z/t og for andel, hypotesetest (z/t/andel/to-utvalg/varians), p-verdi, utvalgsstørrelse.
6. **Samvariasjon:** kovarians, korrelasjon, enkel lineær regresjon (minste kvadrater, tolkning, R²), korrelasjonstest.
7. **Varians-/tabelltester:** F-test for to varianser, kjikvadrat for uavhengighet/varians, krysstabell/simultanfordeling.

### Skal ikke bygges tungt på
- **R / simulering / Monte Carlo** (definerer ECON2130, men er ikke SØK1004-skoleeksamen; Stata kun korona-hjemmeeksamen 2021).
- **Kausalitet/seleksjon/forsøksdesign** som egen drøftingssjanger (lett berøring, ikke tung som i ECON2130).
- **Poisson-fordeling** (sentral i ECON2130 2024–25, men fraværende i SØK1004-arkivet).
- **Teststyrke ved simulering** og «er p-verdien stokastisk?»-signaturspørsmålet (ECON2130-spesifikt).

### Kildeankere
Alle filer i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK1004/`.

**Sensorveiledninger/fasiter lest grundig (7):** `SØK1004-sensorveil_v15` (V2015, full fasit med tallsvar), `SØK1004-Sensorveiledning-høst+2016` (H2016), `Sensorveiledning SØK 1004 … vår 20` (V2020), `Sensurveiledning SØK1004 V21` (V2021, engelsk, Stata), `SØK1004 sensurveiledning H24` (H2024, engelsk), `SØK1004 Sensorveiledning ` (udatert bokmål), `SØK1004 H25 løsningsforslag.docx` (H2025).

**Løsningsforslag lest (3):** `Exam H22 SØK1004 with detailed solutions` (H2022, flervalg + fritekst), `Exam SOK1004 V22 answer keys` (V2022 — bildeskanning, ga ingen tekst med `pdftotext`), `SØK1004 H25 løsningsforslag`.

**Oppgavesett lest grundig (siste år):** `SØK1004 H25`, `SØK1004 V25`, `SØK1004 V24`, `SØK1004 H23`, `SØK1004 Norsk` (nyere sett), `SØK1004_V20`, `SØK1004 +` (S2021 forside/oppgave).

**Oppgavesett skummet (eldre, strukturbekreftelse):** `SØK1004V-10/H-10/V-11/V-12/H-13/V-15/H-14/V-16/H-17/V-17/V-18/H-18/V-19/H-19`.

**Forside/kontekst:** `SØK1004-Forside_eksamen_bokmål_med_trykkeinfo2` (bekrefter 4 timer, kode C med spesifikk kalkulator/formelsamling, bokmål+nynorsk, faglærer Per Tovmo).

**Merknader om kildene:**
- `Exam SOK1004 V22 answer keys.pdf` er en bildeskanning uten uttrekkbar tekst; V2022-profilen er bekreftet via H2022-løsningen og øvrige nyere sett (samme sjangermiks).
- Hjelpemiddelregimet er i endring: eldre sett kode C (formelsamling + spesifikk kalkulator), korona-år kode A (alle hjelpemidler, Stata i 2021), nyere sett på vei mot kode D (kun enkel kalkulator, digital formelsamling — H2025 eksplisitt kode D). Boken forutsetter kode D som gjeldende.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Formler og tallsvar er standard faglig kunnskap uten verkshøyde.
