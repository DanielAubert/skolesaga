# Eksamensanalyse: SØK2012 Atferdsøkonomi (Behavioral Economics) (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK2012/`: 9 oppgavesett (V2021, V2022, H2022, H2023, V2024, H2024, V2025, H2025) + separat oppgavesett H2018/H2019 gjengitt i sensorveiledningene, samt **6 sensorveiledninger/løsningsforslag lest grundig** (H2018, H2019, V2021, H2023-fullløsning, H2024, V2025, H2025 — flere er komplette fasiter med tallsvar). Dette er **det minste arkivet i samlingen (14 filer)**, men det er tett: nesten hvert oppgavesett har medfølgende fasit, så oppgavetyper og forventede svar er svært godt dokumentert. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde).
>
> **Emnekode-merknad:** Arkivet bruker skrivemåten «SØK2012»; offisiell kode i studieplanen i dag kan skrives «SOK2012». Fullt navn: *Atferdsøkonomi* / *Behavioral Economics* (også stavet «Adferdsøkonomi» på forsidene), 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. **Aktivt emne, skoleeksamen 4 timer, 100 % av karakteren.** Oppgavesettene gis i all hovedsak på **engelsk** (V2022, H2022–H2024, V2024/V2025), men H2025 er på **norsk (bokmål)** — begge målformer forekommer. Faglærere/oppgavestillere som er navngitt i arkivet: **Jacopo Magnani** (V2024, H2024, V2025), **Colin Green** (H2025), samt eldre sett fra en foreleser med lærebokreferanser på norsk (H2018–V2021).

---

## 0. Kort om emnet + plassering (les dette først)

SØK2012 er NTNUs **atferdsøkonomi-emne** og skiller seg fundamentalt fra resten av econ-serien. Der SOK1002/ECON1210 handler om nyttemaksimering med perfekt rasjonelle aktører, handler SØK2012 om **de systematiske avvikene fra rasjonalitet**: hvordan folk faktisk beslutter under risiko, over tid og overfor andre — og hvordan psykologi og eksperimenter forklarer det.

**Overlappssjekk (viktig konklusjon):** Et grep over hele bokarkivet (`docs/hoyskole-boker/`) etter «atferd»/«behavioral» gir treff i **kun ett** beslektet emne: **UiOs ECON2220** (mikro III). Men overlappet er lite og synkende:

| | **SØK2012 (NTNU)** | **ECON2220 (UiO) — den lille overlappen** |
|---|---|---|
| Status for atferdsøkonomi | **Selve emnet** — hele pensum | **Fjernet fra eksamen etter 2022**; 0 av 7 sett 2023–2025 |
| Hva som ev. overlapper | Sosiale preferanser, ultimatum-/tillitsspill, spillteoretiske likevekter | Kun Fehr-Schmidt-ulikhetsaversjon + ultimatum-/tillitsspill (et smalt hjørne av SØK2012) |
| Metode | Prospektteori, verdifunksjon, hyperbolsk diskontering, Bayes/heuristikker | Standard mikroteori; atferd var et tilleggskapittel |

**Konklusjon: SØK2012 er et reelt nytt fag i samlingen, ikke et duplikat.** Ingen eksisterende analyse dekker prospektteori, intertemporalt valg med β-δ-modellen, heuristikker/bias eller beslutning under risiko i atferdsøkonomisk forstand. Det eneste temaet som deles med et annet emne (ECON2220) er sosiale preferanser/ultimatumspill — og der har ECON2220 faktisk *droppet* stoffet, mens det står sentralt i SØK2012. Faget grenser også mot **spillteori** (Nash-likevekt, blandede strategier, delspillperfekt likevekt), men bruker spillteorien i atferdsøkonomisk innpakning (tillitsspill, ultimatumspill, sosiale preferanser i utbetalingsmatrisen).

Den eneste betydelige forkunnskapen faget forutsetter, er **sannsynlighetsregning** (Bayes' teorem oppgis på formelarket hvert år) og grunnleggende spillteori (Nash-likevekt i rene og blandede strategier). Ingen kalkulus tyngre enn kvadratrøtter og potenser kreves.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer, karakter A–F, 7,5 studiepoeng, 100 % av karakteren.** Digital i Inspera; håndtegninger/figurer kan lastes opp med sjusifret kode (15 min ekstra til opplasting).
- **Hjelpemidler:** normalt **kode C** — matematisk formelsamling (Sydsæter, Strøm & Berck, *Matematisk formelsamling for økonomer* / *Economists' mathematical manual*) + spesifikk enkel kalkulator (Casio FX-82-serien m.fl.). H2025 oppgir kode **H**. Under korona var V2021 en forkortet **3-timers hjemme-eksamen med 70 % vekt**.
- **Formelark:** Bayes' teorem trykkes på hver eksamen (`P(A|B) = P(B|A)P(A) / [P(B|A)P(A) + P(B|¬A)P(¬A)]`). Studenten forventes altså **ikke** å pugge Bayes, men å kunne anvende den.
- **Målform:** de fleste settene er på **engelsk**; H2025 er på **norsk bokmål**. Begreper forventes kjent på engelsk (framing, endowment effect, decoy effect, base rate neglect osv.).

### Struktur — stabil «mange små spørsmål»-mal
I motsetning til de tunge to-oppgave-settene i SOK1002 er SØK2012 bygget som **mange likeveide korte spørsmål**:

- **Standardmalen (2023–2025): 7–8 spørsmål med lik vekt.** H2023, H2024, V2024, V2025 har 8 spørsmål; H2025 har 7. Hvert spørsmål teller altså 12,5–14 %.
- **Eldre mal (2018–2022): 4–5 oppgaver** med flere deloppgaver, også lik vekt (H2018 5 oppgaver, H2019 8 oppgaver, V2021 4 oppgaver, V2022 5 oppgaver, H2022 4 oppgaver).
- **Fast miks i hvert sett:** typisk **3–4 «diskuter et begrep»-spørsmål** (framing, endowment, decoy, mental accounting, commitment osv.) + **1–2 regneoppgaver på verdifunksjon/prospektteori** + **1 Bayes/base-rate-oppgave** + **1 intertemporal diskonteringsoppgave** + **1–2 spillteorioppgaver** (ofte med sosiale preferanser).

### Vektings-/strukturhistorikk

| Sett | Struktur | Målform | Faglærer |
|---|---|---|---|
| H2018 | 5 oppg., lik vekt (verdifunksjon, β-δ, Bayes, spill, nudge) | eng/no | — |
| H2019 | 8 oppg., lik vekt | eng | — |
| V2021 | 4 oppg., lik vekt (**3 t hjemme, 70 %**) | eng | — |
| V2022 | 5 oppg., lik vekt (diskontering, chicken, sunk cost, gevinst/tap, ultimatum) | eng | — |
| H2022 | 4 oppg., lik vekt (begreper, Bayes-mynt, verdifunksjon, spill) | eng | — |
| H2023 | 8 oppg., lik vekt | eng | — |
| V2024 | 8 oppg., lik vekt | eng | Magnani |
| H2024 | 8 oppg., lik vekt | eng | Magnani |
| V2025 | 8 oppg., lik vekt | eng | Magnani |
| H2025 | 7 oppg., lik vekt | **no (bokmål)** | Green |

**Konstanter på tvers av settene:**
1. **Fem faste temablokker prøves i så å si hvert sett:** (i) begrepsdiskusjoner om beslutningsanomalier, (ii) prospektteori/verdifunksjon (regning), (iii) beslutning under risiko / forventet nytte / sikkerhetsekvivalent, (iv) Bayes-oppdatering og base-rate neglect, (v) intertemporalt valg med eksponensiell vs. hyperbolsk (β-δ) diskontering, (vi) spillteori med sosiale preferanser.
2. **Tallene endres, oppgavetypen gjentas nesten ordrett.** Taxi-/base-rate-oppgaven går igjen i H2023, V2024, V2025 med kun endrede prosenttall. Retirement-account-diskonteringsoppgaven (Ann eksponensiell / Bob sofistikert hyperbolsk) er nesten identisk i H2024 og V2025. Hatt-oppgaven (WTA vs. WTP med endowment-verdifunksjon) er identisk struktur i H2023, H2024. Trust-/sender-mottaker-spillet gjentas i H2023 og H2025.
3. **Formelarket med Bayes** ligger fast.

---

## 2. Temafrekvens

Score = andel av de 10 dokumenterte settene (H2018–H2025) der temaet inngår som eget spørsmål eller deloppgave. Vurderingen bygger på oppgavetekster + 6 sensorveiledninger.

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Prospektteori: verdifunksjon, gevinst/tap, tapsaversjon** | **~100 %** | Kjerneverktøyet. Regnes (v(x)=√x / −2√\|x\| e.l.) og forklares. WTA/WTP, endowment effect, framing bygger alle på den |
| **Beslutning under risiko: forventet nytte, sikkerhetsekvivalent, risikoholdning** | **~90 %** | Konkav u → risikoavers; CE < forventet verdi; St. Petersburg-paradokset (H2024) |
| **Bayes-oppdatering + base-rate neglect** | **~90 %** | Minst én oppgave nesten hvert sett (taxi, mynt, doping, alkoholtest). Formel oppgis |
| **Intertemporalt valg: eksponensiell vs. hyperbolsk (β-δ) diskontering** | **~90 %** | Present bias, tidsinkonsistens, sofistikert vs. naiv, commitment device |
| **Spillteori: Nash-likevekt (rene + blandede strategier)** | **~80 %** | 2×2-matriser; blandet likevekt via indifferensbetingelse; chicken-spill |
| **Sosiale preferanser i spill (altruisme, misunnelse, ulikhetsaversjon, Rawls)** | **~70 %** | Nash-likevekt regnes på nytt etter at nyttefunksjonen transformeres: u(x,y)=0,5x+0,5y (altruist), x−y (misunnelig), min{x,y} (Rawls) |
| **Ultimatum-/tillits-/diktator-/sender-mottaker-spill** | **~70 %** | Delspillperfekt likevekt via baklengs induksjon vs. faktisk oppførsel; positiv resiprositet |
| **Begrepsdiskusjoner om anomalier** (framing, decoy, endowment, mental accounting, commitment, sunk cost) | **~90 %** | 3–4 slike per sett i 2023–2025; «definer + eksempel + forklar årsak» |
| **Heuristikker og bias** (representativitet, tilgjengelighet, konjunksjonsfeil, law of small numbers, gambler's fallacy, bekreftelsestendens, ambiguitetsaversjon) | **~60 %** | Ofte som del av begrepsoppgaver eller Bayes-kontekst |
| **Mental regnskapsføring + hedonisk redigering** (integrere/segregere gevinster/tap) | **~50 %** | H2023, V2025, H2025; «silver lining», bundling |
| **Rasjonalitet: fullstendige/transitive preferanser, nyttefunksjon-representasjon** | **~40 %** | H2024, V2025 (kaffe/melk/te-preferanser: er de rasjonelle? finnes en nyttefunksjon?); ekspansjonsbetingelsen (H2025 øl/vin/martini) |
| **Nudge / libertariansk paternalisme** | ~15 % | H2018; kan komme igjen |
| **Beauty contest / guessing game + level-k-modell** | ~20 % | H2019, H2024; iterativ eliminering, k-nivå strategisk tenkning |
| **Offentlige goder / gratispassasjer / bidragsspill** | ~10 % | H2019 |

**Viktigste funn:**
1. **Emnet har seks pilarer.** En lærebok må bygges rundt (i) prospektteori/verdifunksjon, (ii) beslutning under risiko og forventet nytte, (iii) Bayes/heuristikker/bias, (iv) intertemporalt valg med β-δ, (v) spillteori med sosiale preferanser, og (vi) et bredt begrepsapparat av anomalier. Alt annet er anvendelser eller spesialtilfeller.
2. **Verdifunksjonen er signaturverktøyet** — analogt til Cobb-Douglas i SOK1002. Studenten må kunne regne på en stykkevis definert v(x) med ulik krumning/helning for gevinst og tap, og bruke den til WTA/WTP, endowment effect, framing, integrering/segregering og risikoholdning.
3. **Oppgavene resirkuleres med nye tall.** Fordi arkivet inneholder fasit til nesten alle sett, kan boka trygt bygge øvingsoppgaver rundt de faste malene (taxi-Bayes, retirement-diskontering, hatt-WTA/WTP, trust-spill, sosiale-preferanse-matriser).
4. **Begrepsdiskusjonene har fast form:** «definer begrepet + gi et eksempel + forklar den bakenforliggende årsaken (ofte en heuristikk eller verdifunksjonens form)».

---

## 3. Oppgavetype-katalog

### A. Begrepsdiskusjon om en anomali (dominerende sjanger, 3–4 per sett)
- **Krav:** Presis definisjon + konkret eksempel + forklaring av **årsaken** (typisk knyttet til verdifunksjonens form eller en heuristikk). Sensorveiledningene godtar egne eksempler, men vil ha at mekanismen forklares.
- **Faste begreper:** framing effect, decoy effect (menyavhengighet, brudd på ekspansjonsbetingelsen), endowment effect, mental accounting, hedonisk redigering, commitment, sunk cost, opportunity cost, tapsaversjon, ambiguitetsaversjon.
- **Omskrevet eksempel:** «Forklar decoy-effekten. Definer begrepet, gi et eksempel og forklar hvorfor den oppstår.»

### B. Verdifunksjon / prospektteori (regning)
- **Krav:** Sett inn i en stykkevis definert v(x) med brattere/annerledes helning for tap enn gevinst, regn ut verdien, tolk. Ofte kobles det til tapsaversjon eller framing.
- **Fasit-eksempler:** hatt-oppgaven — v(x−x̄)=x−x̄ ved gevinst, 1,5(x−x̄) ved tap ⇒ WTA=1,5, WTP=1 (H2023), fordi salg oppleves som tap som veies tyngre; casino-oppgaven — v=√x/2 (gevinst), −2√\|x\| (tap): segregert tap+gevinst = −14,14+4 = −10,14 mot integrert v(−18)=−8,49 ⇒ integrering best (H2025).
- **Omskrevet eksempel:** «En person har verdifunksjon v(x)=√x for gevinst og −2√\|x\| for tap. Personen taper 50 og vinner 32. Regn ut totalverdien ved segregering og ved integrering, og avgjør hva som er best.»

### C. Beslutning under risiko: forventet nytte og sikkerhetsekvivalent
- **Krav:** Regn forventet nytte E[u] = Σ pᵢu(xᵢ), finn sikkerhetsekvivalenten CE ved å løse u(CE)=E[u], sammenlign med forventet verdi, konkluder om risikoholdning (konkav u ⇒ risikoavers ⇒ CE < forventet verdi). St. Petersburg: forklar hvorfor forventet verdi divergerer (=∞) og at forventet nytte med avtakende grensenytte gir endelig betalingsvilje.
- **Fasit-eksempel:** spill betaler 100 (p=1/5), 25 (p=2/5), 0 (p=2/5), u=√x ⇒ CE = (1/5)√100+(2/5)√25 = 16, forventet verdi = 30 (V2025).
- **Omskrevet eksempel:** «Et spill gir 100 med sannsynlighet 1/5, 25 med sannsynlighet 2/5 og 0 ellers. Med u(x)=√x, finn sikkerhetsekvivalenten og forklar hvorfor den avviker fra forventet verdi.»

### D. Bayes-oppdatering og base-rate neglect (fast sjanger)
- **Krav:** Sett opp Bayes' teorem (formel oppgis), regn ut posterior-sannsynligheten, og forklar **base-rate neglect**: at man ignorerer den lave grunnraten gir en overdrevet posterior nær testens treffsikkerhet.
- **Fasit-eksempler:** taxi — 130 biler, 10 blå, vitne 80 % pålitelig ⇒ P(blå\|vitne sier blå)=0,25 (H2023); alkoholtest — 5 % drikker, test 95 % nøyaktig ⇒ P(påvirket\|positiv)=0,5, og base-rate neglect ⇒ tror det er ~95 % (H2025); doping-test ⇒ 0,77 (H2019).
- **Omskrevet eksempel:** «En test er 95 % nøyaktig og 5 % av populasjonen er positive. En person tester positivt — hva er sannsynligheten for at de faktisk er positive? Hva ville en person med base-rate neglect tro?»

### E. Intertemporalt valg: eksponensiell vs. hyperbolsk (β-δ) diskontering
- **Krav:** Diskonter en nytteserie med den eksponensielle modellen U⁰=u₀+δu₁+δ²u₂ og med kvasi-hyperbolsk (β-δ): U⁰=u₀+βδu₁+βδ²u₂. Vis **tidsinkonsistens**: at rangeringen sett fra t=0 kan snu sett fra t=1 når β<1 (present bias). Skill **sofistikert** (forutser eget fremtidige svik, velger commitment device) fra **naiv**. Koble til selvkontroll.
- **Fasit-eksempel:** retirement-oppgaven — Ann eksponensiell (δ=1/2) velger «checking, small withdrawal» (U=24); Bob sofistikert hyperbolsk (δ=1/2, β=1/3) vet at han vil ta ut alt ved t=1, så han velger pensjonskontoen som binding (U=7 > 6) (H2024, V2025).
- **Omskrevet eksempel:** «Alternativ A gir nytte 0/4/30 ved t=0/1/2, alternativ B gir 0/20/2. Med δ=0,7, hvilket velges? Endres valget hvis personen er hyperbolsk diskonterer med β=0,8? Vis utregningene.»

### F. Spillteori: Nash-likevekt i rene og blandede strategier
- **Krav:** Finn Nash-likevekt(er) i rene strategier i en 2×2-matrise ved beste-svar-argument. For blandet likevekt: sett opp indifferensbetingelsen (motspilleren må være indifferent) og løs for sannsynlighetene. Chicken-spillet og fangens dilemma-varianter går igjen.
- **Fasit-eksempel:** skatt/kontroll-spillet — ingen ren Nash; blandet: skattemyndighet reviderer med p=1/3, skattyter betaler med q=5/6 (H2025); koordineringsspill (U,L) og (D,R) med blandet p=q=1/2 (H2018).
- **Omskrevet eksempel:** «I skattekontroll-spillet, vis om det finnes en Nash-likevekt i rene strategier, og finn den blandede likevekten.»

### G. Sosiale preferanser transformerer spillet
- **Krav:** Ta en utbetalingsmatrise i penger, transformer hver celle via spillernes **sosiale nyttefunksjon**, og finn Nash-likevekten på nytt i nytte. Faste former: altruist u=0,5x+0,5y, misunnelig u=x−y, Rawlsiansk u=min{x,y}. Kommenter Pareto-effektivitet.
- **Fasit-eksempel:** samme pengematrise gir ulik Nash avhengig av preferanser; altruister ⇒ (U,L) (H2023); Rawls ⇒ to likevekter, kun (U,L) Pareto-effektiv (H2024).
- **Omskrevet eksempel:** «Spillerne er altruistiske med u(x,y)=0,5x+0,5y. Skriv om utbetalingsmatrisen i nytte og finn Nash-likevekten i rene strategier.»

### H. Ultimatum-/tillits-/sender-mottaker-spill: teori vs. faktisk atferd
- **Krav:** Finn den **delspillperfekte likevekten** ved baklengs induksjon (egeninteressert: forslagsstiller tilbyr ~0, mottaker aksepterer alt positivt; i tillitsspill sender/returnerer ingen). Kontrast mot **eksperimentell atferd** (jevnere delinger, positive returer) og forklar med sosiale preferanser, resiprositet, tillit, ulikhetsaversjon.
- **Fasit-eksempel:** tillitsspill — sender ~5 dollar, mottaker returnerer ~4–5 (positiv resiprositet); delspillperfekt likevekt er (0,0) og Pareto-ineffektiv (H2023, H2025).
- **Omskrevet eksempel:** «I tillitsspillet: skriv ut utbetalingene, finn den delspillperfekte likevekten og forklar hvorfor folk ofte avviker fra den.»

### I. Rasjonalitet: preferanser og nyttefunksjon-representasjon
- **Krav:** Sjekk om en preferanserelasjon er **fullstendig og transitiv** (rasjonell). Hvis rasjonell: finn en representerende nyttefunksjon. Hvis ikke transitiv: ingen nyttefunksjon finnes. Ekspansjonsbetingelsen: at et tredje alternativ endrer rangeringen mellom to andre er irrasjonelt.
- **Fasit-eksempel:** kaffe/melk/te-preferanser der coffee≽milk, milk≽tea, men ikke coffee≽tea ⇒ ikke transitiv ⇒ ikke rasjonell ⇒ ingen nyttefunksjon (H2024).
- **Omskrevet eksempel:** «Du bestiller øl, men bytter til vin når martini blir tilgjengelig. Er dette rasjonelt? Forklar med ekspansjonsbetingelsen.»

---

## 4. Sensorens krav

Basert på de 6 sensorveiledningene/løsningsforslagene.

### Faste metaregler
1. **Definisjon + eksempel + årsak.** Ved begrepsoppgaver er alle tre ledd nødvendige. Egne eksempler godtas, men mekanismen (verdifunksjonens form, en heuristikk) må forklares. Figur er «et pluss» ved decoy, framing, verdifunksjon.
2. **Regning skal tolkes.** Ved verdifunksjon, CE og diskontering holder det ikke å presentere tallet — studenten skal konkludere økonomisk (tapsaversjon, risikoaversjon, present bias, commitment).
3. **Vis mekanismen bak likevekten.** Ved Nash-oppgaver vil sensor se beste-svar-resonnementet, ikke bare svaret. Ved blandet likevekt kreves indifferensbetingelsen eksplisitt.
4. **Kontrast teori mot atferd.** Ved ultimatum-/tillitsspill er poenget nettopp gapet mellom den delspillperfekte likevekten og observert atferd — begge deler må med, pluss forklaringen (sosiale preferanser/resiprositet).
5. **Bruk Bayes korrekt og forklar base-rate neglect verbalt.** Formelen er oppgitt; poenget er anvendelse + tolkning av hvorfor intuisjonen bommer.
6. **Egne forutsetninger tillates.** Forsidene ber uttrykkelig studenten gjøre og oppgi egne antakelser ved uklare oppgaver.

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktig definisjon av begrepene, riktig oppsett av verdifunksjon/Bayes/diskontering, korrekt identifisert Nash-likevekt i rene strategier.
- **Midt (C):** komplette utregninger med korrekt tolkning (risikoholdning, tapsaversjon, present bias), korrekt blandet likevekt, korrekt transformert sosial-preferanse-matrise, riktig kontrast teori/atferd.
- **Topp (A/B):** ser de subtile poengene — at **sofistikerte** hyperbolske diskonterere velger commitment devices (og at rekkefølgen på *fremtidige* valg bevares selv med β<1), at **små sannsynligheter overvektes** (prospektteoriens fire-felts-mønster: risikoavers/risikosøkende avhengig av både domene og sannsynlighet), at long-shot-utfall (200 med 10 %) får liten vekt i forventet nytte, at level-k-modellen forklarer beauty-contest-tallene, og at St. Petersburg løses via avtakende grensenytte. Skiller integrering fra segregering korrekt (hedonisk redigering) og bruker figurer.

---

## 5. Typiske feil

Utledet av det veiledningene forklarer nøye (og dermed antyder at studenter bommer på):

1. **Base-rate neglect i egen besvarelse:** regne ut P(positiv\|tilstand) i stedet for P(tilstand\|positiv), eller konkludere at en 95 %-nøyaktig test gir 95 % sannsynlighet for tilstanden — nettopp feilen oppgaven skal avsløre.
2. **Glemme å skille sofistikert fra naiv** hyperbolsk diskonterer, og dermed overse commitment device-poenget (sofistikert velger bindingen fordi han vet han vil svikte).
3. **Ikke transformere matrisen** ved sosiale preferanser — regne Nash på pengeutbetalingene i stedet for på den sosiale nyttefunksjonen.
4. **Blande gevinst- og tapsdel av verdifunksjonen**, eller bruke feil helning/krumning (tap er brattere; gevinst konkav, tap konveks).
5. **Bare finne den delspillperfekte likevekten** i ultimatum-/tillitsspill uten å kontrastere med faktisk atferd og forklare den med sosiale preferanser.
6. **Forveksle sikkerhetsekvivalent med forventet verdi**, eller ikke forklare hvorfor CE < forventet verdi (risikoaversjon fra konkav nytte).
7. **Feil retning på framing/tapsaversjon:** ikke se at tap-frame gir risikosøking og gevinst-frame gir risikoaversjon (S-formet verdifunksjon).
8. **Overse overvekting av små sannsynligheter** — anta at risikoaversjon i gevinstdomenet alltid gjelder, også for små p (der prospektteorien snur til risikosøking).
9. **Ved integrering/segregering:** regne feil på om det lønner seg å slå sammen eller skille gevinster/tap (segregér gevinster, integrér tap; men integrér liten tap i stor gevinst; segregér liten gevinst fra stort tap — silver lining).
10. **Glemme å sjekke transitivitet** før man erklærer preferanser rasjonelle / leter etter en nyttefunksjon.

---

## 6. Prioritering for boka

### Nivå 1 — må beherskes perfekt (avgjør karakteren, ~100 % frekvens)
1. **Prospektteori og verdifunksjonen** — stykkevis v(x), tapsaversjon, referansepunkt, gevinst/tap-asymmetri, framing, endowment effect (WTA vs. WTP), integrering/segregering. Selve motoren i faget.
2. **Beslutning under risiko** — forventet nytte, sikkerhetsekvivalent, risikoholdning fra nyttefunksjonens krumning, prospektteoriens fire-felts-mønster (domene × sannsynlighet), St. Petersburg-paradokset.
3. **Bayes-oppdatering + base-rate neglect** — anvende oppgitt formel, tolke posterior, forklare grunnratefeilen (samt konjunksjonsfeil/representativitet der relevant).
4. **Intertemporalt valg** — eksponensiell vs. kvasi-hyperbolsk (β-δ) diskontering, present bias, tidsinkonsistens, naiv vs. sofistikert, commitment devices.
5. **Spillteori med sosiale preferanser** — Nash i rene og blandede strategier, transformasjon av matrisen via altruistisk/misunnelig/Rawlsiansk nytte, Pareto-effektivitet.

### Nivå 2 — må kunne (gir 12–14 % når de kommer, ~70–90 %)
6. **Begrepsapparatet av anomalier** — decoy effect, mental accounting, hedonisk redigering, commitment, sunk cost, ambiguitetsaversjon; hver med definisjon + eksempel + årsak.
7. **Ultimatum-/tillits-/diktatorspill** — delspillperfekt likevekt vs. eksperimentell atferd, resiprositet, ulikhetsaversjon (Fehr-Schmidt).
8. **Heuristikker og bias** — representativitet, tilgjengelighet, law of small numbers / gambler's fallacy, bekreftelsestendens, konjunksjonsfeil.
9. **Rasjonalitet** — fullstendige/transitive preferanser, nyttefunksjon-representasjon, ekspansjonsbetingelsen.

### Nivå 3 — bør kjenne (roterer sjeldnere inn)
10. **Beauty contest / guessing game + level-k-modellen** — iterativ eliminering, strategisk kognitivt nivå.
11. **Nudge og libertariansk paternalisme** — definisjon, eksempler, kritikk.
12. **Offentlige goder / gratispassasjer-spill** — Nash-bidrag null vs. observerte positive bidrag.

**Prognose for neste eksamen:** med stor sannsynlighet **7–8 likeveide korte spørsmål** som dekker de fem pilarene: minst én verdifunksjon-regneoppgave, én Bayes/base-rate-oppgave, én β-δ-diskonteringsoppgave, én til to spillteorioppgaver (minst én med sosiale preferanser), og tre–fire begrepsdiskusjoner fra den faste listen. Tallene vil endres, men malene gjenbrukes. Boka bør bygges som **fem kjernekapitler** (verdifunksjon/prospektteori, risiko/forventet nytte, Bayes/heuristikker, intertemporalt valg, spillteori+sosiale preferanser) + **ett bredt begrepsleksikon** over anomalier, hver med definisjon–eksempel–årsak og en resirkulerbar øvingsoppgave.

---

## 7. Pensum, notasjon og kildeankere

### Pensumbok
Sensorveiledningene (H2018, H2019, V2021) refererer gjennomgående til en **lærebok med kapittelhenvisninger på norsk**: kap. 3.2/3.3 (opportunity/sunk cost), s. 100–101 (law of small numbers), s. 147 (sikkerhetsekvivalent), kap. 11.2 (sosiale preferanser/altruisme), kap. 11.3 (tillit/resiprositet), kap. 11.4 (beauty contest/level-k), s. 243 (utvidede nyttefunksjoner). Selve tittelen navngis ikke eksplisitt i arkivet, men innhold og struktur peker mot en standard atferdsøkonomi-lærebok (typisk *Behavioral Economics* av Cartwright eller Angner, *A Course in Behavioral Economics*, som begge har denne kapittelinndelingen — Angners kap. 11 dekker sosiale preferanser og beauty contest). **Boka bør speile denne kapittelstrukturen.**

### Notasjonskonvensjoner (stabil på tvers av settene)
- **Verdifunksjon:** `v(x)`, der x er endring relativt til et **referansepunkt** (gevinst x>0, tap x<0); stykkevis definert med brattere helning for tap (tapsaversjon). S-formet: konkav for gevinst, konveks for tap.
- **Nytte under risiko:** `u(x)` (ofte √x), forventet nytte `E[u]=Σ pᵢu(xᵢ)`, sikkerhetsekvivalent `CE` løst fra `u(CE)=E[u]`, forventet verdi `E[x]=Σ pᵢxᵢ`.
- **Diskontering:** eksponensiell `U⁰=u₀+δu₁+δ²u₂+…`; kvasi-hyperbolsk **β-δ-modell** `U⁰=u₀+βδu₁+βδ²u₂+…`, der 0<β≤1 måler present bias / manglende selvkontroll; sett fra t=1: `U¹=u₁+βδu₂`.
- **Bayes:** `P(A|B)=P(B|A)P(A) / [P(B|A)P(A)+P(B|¬A)P(¬A)]` (oppgitt på formelark).
- **Spill:** 2×2 utbetalingsmatrise (rad = spiller 1, kolonne = spiller 2, første tall = spiller 1s payoff); Nash-likevekt i rene og blandede strategier; blandede sannsynligheter p, q via indifferensbetingelse; delspillperfekt likevekt via baklengs induksjon.
- **Sosiale preferanser:** `u(x,y)` der x = egen payoff, y = motspillers payoff; altruist `0,5x+0,5y`, misunnelig `x−y`, Rawlsiansk `min{x,y}`, generell form `ax^α+by^β`.

### Må beherskes aktivt (regnes, tegnes, forklares)
1. Regne på stykkevis verdifunksjon; WTA/WTP; integrering vs. segregering.
2. Forventet nytte, sikkerhetsekvivalent, risikoholdning fra krumning.
3. Bayes' teorem numerisk + forklare base-rate neglect.
4. Eksponensiell og β-δ-diskontering; vise tidsinkonsistens; sofistikert commitment.
5. Nash-likevekt i rene og blandede strategier; transformere matrisen via sosial nytte.
6. Delspillperfekt likevekt ved baklengs induksjon; kontrastere med eksperimentell atferd.

### Matematisk verktøykasse (lett — kalkulator + formelsamling tillatt)
Kvadratrøtter og potenser, veide summer (forventningsverdier), enkel algebra for å løse indifferensbetingelser og CE, brøkregning. **Ingen kalkulus tyngre enn dette** — faget er konseptuelt/anvendt, ikke matematisk tungt slik SOK1002 er.

### Skal IKKE bygges på
- Tung mikroteori (Lagrange, Slutsky-dekomponering, kostnadsfunksjoner) — det hører til SOK1002/ECON2220, ikke SØK2012.
- Makroøkonomi, generell likevekt, markedsdesign.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/SOK2012/`.

**Sensorveiledninger/løsningsforslag lest grundig (6):**
- `Assessment guidelines SØK 2012 H2019 (2).pdf` (H2019 — full fasit: tapsaversjon, doping-Bayes 0,77, β-δ studenteksempel, offentlig-gode-spill, blandet Nash, nudge, beauty contest/level-k).
- `sensorrettlsok2012h18.pdf` (H2018 — full fasit: referansepunkt-verdifunksjon, β-δ tidsinkonsistens, Bayes-mynt, koordineringsspill blandet likevekt, nudge/libertariansk paternalisme).
- `Sensurveiledning SØK2012, vår 21.pdf` (V2021, 70 %/3 t — gambler's fallacy/Lotto, ultimatum/diktator + utvidede nyttefunksjoner, tapsaversjon-bonusordning, β-δ selvkontroll-chipsmodell).
- `SØK2012_F23_exam_SOLUTION.pdf` (H2023 — full løsning alle 8: decoy, mental accounting/hedonisk redigering, commitment, sender-mottaker/tillitsspill, hatt-WTA/WTP, verdifunksjon-risiko, taxi-Bayes 0,25, altruist-Nash).
- `SØK2012 sensorveiledning h24.pdf` (H2024 — full løsning: framing/Asian disease, St. Petersburg, konjunksjonsfeil + base-rate, beauty contest/level-k, hatt-WTA/WTP, transitivitet/rasjonalitet, retirement-diskontering Ann/Bob, Rawls-spill).
- `SØK2012 H25 sensorveiledning.pdf` (H2025 — full løsning: ekspansjonsbetingelse øl/vin/martini, casino integrering/segregering, CE, diskontering δ+hyperbolsk, skatt/kontroll blandet Nash, tillitsspill, alkoholtest-Bayes 0,5).
- `SØK2012 V25 sensorveiledning.pdf` (V2025 — full løsning: decoy, hedonisk redigering 3 scenarier, prospektteoriens fire-felts-mønster, CE=16, taxi-Bayes 0,2, transitivitet, retirement-diskontering, sosiale preferanser vs. resiprositet).

**Oppgavesett lest grundig (8):** `Exam SØK2012 2022 vår.pdf` (V2022), `SØK2012 H22.pdf`, `SØK2012 H23.pdf`, `SØK2012 V24.pdf`, `SØK2012 H24.pdf`, `SØK2012 V25.pdf`, `SØK2012 H25.pdf`. Eldre oppgavetekst for H2018/H2019 er lest via de gjengitte oppgavene i sensorveiledningene.

**Merknader om kildene:**
- **Tett fasitdekning:** 6 av ~10 sett har medfølgende komplett løsning med tallsvar. Oppgavetyper og forventede svar er derfor uvanlig godt dokumentert til tross for at dette er samlingens minste arkiv.
- Ingen egen fagbeskrivelse for SØK2012 finnes i bokrepoet; fagprofilen er utledet av arkivet (oppgaver + veiledninger).
- **Overlappssjekk:** grep i `docs/hoyskole-boker/` etter «atferd»/«behavioral» gir kun treff i ECON2220 (UiO), der atferdsøkonomi er fjernet fra eksamen etter 2022 og uansett bare dekket et smalt hjørne (Fehr-Schmidt/ultimatumspill). SØK2012 er derfor et **reelt nytt fag** i samlingen.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller sensorformuleringer er gjengitt ordrett. Modellsammenhenger og tallsvar er faglige fakta uten verkshøyde.
