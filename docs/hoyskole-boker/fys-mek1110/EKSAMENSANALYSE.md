# Eksamensanalyse: FYS-MEK1110 Mekanikk (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i
> `~/Desktop/Eksamner/UiO/FYS-MEK1110/` (`eksamen/` for oppgavesett,
> `losningsforslag/` for løsningsforslag) samt uttrekte tekstfiler i scratchpad.
> Lest grundig: de tre avsluttende eksamenene vår 2021, 2022 og 2023 (alle med
> løsningsforslag), kontinuasjonseksamen vår 2022 (august, med løsningsforslag),
> midtveiseksamenene 2021, 2022 og 2023 (2021 og 2022 med fullt løsningsforslag
> og sensorveiledning, 2023 med fasit) — samt **etterfølgerens** avsluttende
> eksamen **FYS1100 Mekanikk og modellering, høst 2023** (med detaljert
> sensorveiledning), som er lest for å kalibrere overgangen. **Alt innhold er
> omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster,
> fasiter eller sensorformuleringer. Fysiske formler, lover og notasjon er
> standard fagstoff og ikke opphavsrettslig beskyttet. Analysen er kvantitativ
> der kildene tillater det.

---

## 0. Kritisk forbehold: nedlagt emne, videreført gjennom FYS1100

FYS-MEK1110 er **nedlagt**. Dette må ligge til grunn for hele boka, på samme måte
som epokeforbeholdet i MAT2400-analysen:

| Trekk | Status |
|---|---|
| Siste ordinære undervisning | **Vår 2022** |
| Siste eksamen | **Vår 2024** (arkivet her stopper på vår 2023 + konte august 2022) |
| Etterfølger | **FYS1100 – Mekanikk og modellering** (fra og med høsten 2022/2023) |
| Overlapp | FYS1100 er lavere vektet (7 sp mot FYS-MEK1110s 10 sp), men deler **det aller meste** av den klassiske mekanikk-kjernen |

**Den viktigste konsekvensen for kalibrering:** boka er *byggeverdig* fordi
pensumkjernen lever videre i FYS1100. Der pensum er felles (kinematikk, Newtons
lover og frilegemediagram, arbeid–energi, energibevaring, bevegelsesmengde/støt,
sirkelbevegelse, rotasjon/spinn/treghetsmoment, gravitasjon, luftmotstand +
numerisk løsning, spesiell relativitet) skal boka kalibreres mot **FYS1100s
gjeldende eksamensform og nivå**. Der FYS-MEK1110 gikk dypere enn FYS1100 —
særlig **roterende referansesystemer og fiktive krefter (Coriolis/sentrifugal),
Lorentz-transformasjoner med Minkowski-diagram, og elastisitet (spenning/tøyning,
E-modul)** — dekkes stoffet fortsatt for fullstendighet, men merkes som
«dypere enn FYS1100-nivå; kalibrer vekt lavt hvis boka primært skal støtte
FYS1100-studenter».

**Forholdet FYS-MEK1110 → FYS1100** (basert på FYS1100 H2023-settet, del 4):
FYS1100-settet er tydelig **mildere og bredere**. Det starter med et rent skrått
kast med tallsvar (helt fraværende i FYS-MEK1110s avsluttende), har flere
«forklar/diskuter»-oppgaver, en eksplisitt **Taylor-utvikling** og **separabel
differensialligning for terminalfart** (matematisk modellering løftet fram), en
**ChatGPT-kritikk-oppgave** om spinnbevaring (kildekritikk/metakognisjon), og en
relativitetsoppgave på omtrent samme nivå som FYS-MEK1110. Det som **mangler** i
FYS1100-settet mot FYS-MEK1110: roterende referansesystemer/Coriolis, elastisitet,
og de tyngste kombinerte rotasjons-/spinn-utledningene (rullende dekk, roterende
kule på underlag). Kort sagt: FYS1100 = FYS-MEK1110s kjerne minus de vanskeligste
temaene, pluss mer eksplisitt numerikk/modellering og litt mer matematisk
metodikk (separasjon, Taylor).

---

## 1. Eksamensform og vurdering

FYS-MEK1110 hadde **todelt vurdering**:

| Element | Vekt | Form |
|---|---|---|
| **Midtveiseksamen** | **20 %** | Egen deleksamen tidlig i semesteret |
| **Avsluttende skriftlig eksamen** | **80 %** | Skoleeksamen, **4 timer** |

Karakterskala A–F. Obligatoriske innleveringer/ukesett måtte være godkjent for
eksamensadgang (oppgavene refererer stadig til «ukesett», «diskusjonsoppgave Dx»,
«Test deg selv Tx» og Mentimeter-spørsmål fra forelesning — se del 4).

### Avsluttende eksamen — struktur

| Trekk | Detalj |
|---|---|
| Varighet | **4 timer** (typisk 15:00–19:00; 2021 var 09:00–13:30 som hjemmeeksamen) |
| Oppgaver | **6 oppgaver**, hver med a–f-deloppgaver; oppgavesettet 4–7 sider |
| Fast mal (2022/2023) | Oppg. 1 = flervalg *eller* kort begrepsoppgave; oppg. 2 = kort tekstoppgave; oppg. 3–6 = store regne-/numerikk-/relativitetsoppgaver |
| Poeng | Deloppgaver 2–6 poeng hver; **«Alle deloppgaver teller likt»** oppgis eksplisitt (2023) |
| Hjelpemidler | **Rottmann (matematisk formelsamling), Øgrim & Lian / Angell m.fl. (størrelser og enheter), godkjent kalkulator.** 2021 (pandemi-hjemmeeksamen) hadde «alle hjelpemidler» |
| Utdelt formelark | **Ja** — ett rikt formelark bakerst (se del 6). Konstantene/formlene *hentes*, ikke pugges |
| Instruks | **«Husk at alle svar må begrunnes!»** — går igjen på hvert eneste sett |

**Formatutvikling:** 2021 var digital hjemmeeksamen (pandemi) og hadde en
innledende **flervalgsdel med krav om forklaring** (1 poeng for riktig alternativ
+ 2 poeng for begrunnelse) integrert i selve slutteksamenen. 2022 hadde samme
flervalgsdel som oppgave 1. 2023 droppet flervalgsdelen og gikk over til rene
begreps-/regneoppgaver. Kontinuasjonseksamen (august 2022) fulgte 2022-malen med
flervalgsdel.

### Midtveiseksamen — eget format

| Trekk | Detalj |
|---|---|
| Varighet | **3 timer** (09:00–12:00) |
| Form | **Rent flervalg** i moderne form: **20 flervalgsoppgaver** (2022, 2023). 2021 var blandet: flervalg + tekstbesvarelse + tre store regneoppgaver (76 poeng totalt) |
| Pensumdekning | **Kun første halvdel**: kinematikk (bevegelsesligninger, skrått kast), Newtons lover + frilegemediagram, friksjon (statisk/dynamisk), arbeid–energi og energibevaring, potensial/likevektspunkter (stabil/ustabil via U(x)-graf), sirkelbevegelse/sentripetal, bevegelsesmengde/impuls/støt, luftmotstand + terminalfart, Euler-Cromer |
| **Aldri på midtveis** | Rotasjon av stive legemer/treghetsmoment/spinn, roterende referansesystemer, spesiell relativitet, elastisitet — disse ligger i andre halvdel og testes bare på avsluttende |

Midtveis-mønsteret er svært stabilt: 2022 og 2023 er begge 20 rene flervalg som
tester begrepsforståelse (konstant akselerasjon-grafer, normalkraft i heis/på
bakketopp, hva som er bevart i støt, retning på akselerasjon i pendel, avlese
likevektspunkter fra U(x) eller F(x)-graf). Flervalg gir rask kartlegging av
misoppfatninger.

---

## 2. Temafrekvens

**Tellegrunnlag:** 3 avsluttende (2021, 2022, 2023) + 1 konte (2022) = **4
avsluttende-type sett**, samt 3 midtveis (2021, 2022, 2023) holdt for seg. I
tillegg refereres FYS1100 H2023 som kalibreringssett. Celleverdi = antall sett
der temaet er en egen (del)oppgave. Et avsluttende sett tester typisk 6–8 av
temaene (én per hovedoppgave, ofte flere per oppgave).

### Avsluttende + konte (4 sett)

| Tema | Frekvens (av 4) | Kommentar |
|---|---|---|
| **Newtons 2. lov + frilegemediagram (FLD)** | **4/4 = 100 %** | Grunnmuren; nesten hver hovedoppgave starter med et FLD |
| **Rotasjon / spinn / treghetsmoment / spinnbevaring** | **4/4 = 100 %** | Kursets signaturtema på avsluttende — alltid minst én stor oppgave (dekk, kloss som tipper, roterende kule, dør + prosjektil) |
| **Spesiell relativitet: Lorentz-transformasjon, tidsdilatasjon, lengdekontraksjon** | **4/4 = 100 %** | **Alltid oppgave 5 eller 6.** Enten fireHendelser-scenario (stav/romskip, samtidighet, Minkowski) eller partikkel-henfall (pion, tidsdilatasjon) |
| **Arbeid–energi-setningen + energibevaring** | **4/4 = 100 %** | Bærebjelke; brukes til å finne sluttfart etter gli/rull/kollisjon, loop-betingelser |
| **Bevegelsesmengde / impuls / støt (elastisk/uelastisk)** | **3/4 = 75 %** | Ofte koblet til spinn (dør+prosjektil) eller 2D (bilkollisjon med vinkel) |
| **Friksjon (statisk + dynamisk) + skråplan** | **3/4 = 75 %** | To klosser på skråplan, gli-før-rull, kritisk helningsvinkel |
| **Numerisk modellering (Euler-Cromer, kodeskisse)** | **3/4 = 75 %** | Én deloppgave i en større oppgave: «skisser initialbetingelser + integrasjonsløkke» |
| **Potensial → kraft (F = −dU/dx / −∇U), likevektspunkter** | **2/4 = 50 %** | 1D og 2D potensial, konservativ kraft, curl = 0-argument, stabil/ustabil |
| **Roterende referansesystem / fiktive krefter (Coriolis + sentrifugal)** | **2/4 = 50 %** | Karusell (2021), perle på roterende stang (2022) — **FYS-MEK1110-signatur, ikke i FYS1100** |
| **Gravitasjon / baner (Newtons gravitasjonslov, U = −γmM/r)** | **2/4 = 50 %** | Satellitt i sirkel-/ellipsebane, ion i 1/r-potensial |
| **Sirkelbevegelse / sentripetalakselerasjon** | **2/4 = 50 %** | Loop, sirkelbane-betingelse N ≥ 0 |
| **Statisk likevekt (kraft + kraftmoment = 0)** | **2/4 = 50 %** | Stang i hengsel + tau, kiste i snor over støttestav |
| **Elastisitet (spenning/tøyning, E-modul)** | **0/4 avsluttende** | Kun på formelarket; ikke en egen oppgave i de leste settene — **lavfrekvent** |

### Midtveis (3 sett) — temafordeling i flervalgene

| Tema | Kommentar |
|---|---|
| **Newtons lover, FLD, normalkraft-resonnement** | Svært hyppig (heis, bakketopp, helikopter, esker i tau, jump) |
| **Energibevaring / arbeid–energi** | Hyppig (fart ved høyde h uavhengig av vinkel, loop, halfpipe) |
| **Bevegelsesmengde / impuls / støt** | Hyppig (bilkollisjon-skade, elastisk umulig, sprett fra vegg) |
| **Sirkelbevegelse / sentripetal** | Hyppig (bakketopp «lette», DVD-maur, jojo i horisontalplan) |
| **Friksjon (statisk/dynamisk)** | Hyppig (når glir kasse, fart-uavhengig dynamisk friksjon) |
| **Kinematikk / bevegelsesligninger + grafer** | Middels (konstant a-graf, tid til topp, skråplan-tid) |
| **Potensial U(x)/F(x) → likevektspunkter** | Middels (avlese stabil/ustabil fra graf) |
| **Luftmotstand / terminalfart** | Middels |
| **Differensialligning (separabel) / integrasjon** | Lav-middels (sandkorn-henfall, motorsykkel med konstant effekt) |

**Viktigste funn:**

- **Fem søyler bærer hvert eneste avsluttende sett:** (1) Newtons 2. lov med
  frilegemediagram, (2) arbeid–energi + energibevaring, (3) rotasjon/spinn/
  treghetsmoment, (4) bevegelsesmengde/støt, (5) **spesiell relativitet**. De to
  siste hovedoppgavene i et avsluttende sett er nesten alltid én stor
  rotasjons-/spinn-oppgave og én relativitetsoppgave.
- **Spesiell relativitet er garantert på avsluttende (4/4)** og opptrer i to
  arketyper: (a) **flerhendelses-samtidighet** — stav eller to romskip med
  lysblink/klaffer, Lorentz-transformér fire hendelser, forklar samtidighetens
  relativitet, tegn Minkowski-diagram; (b) **partikkelhenfall** — pion beveger
  seg nær c, finn levetid/strekning via tidsdilatasjon og lengdekontraksjon.
  Aldri på midtveis.
- **Rotasjon av stive legemer (4/4) er kursets tyngste og mest utledningskrevende
  tema.** Spinnbevaring om et smart valgt punkt (kontaktpunkt, hengsel) er
  gjennomgangsmelodien: fordi normalkraft, tyngde og friksjon i kontaktpunktet
  har null kraftarm, er spinnet bevart. Parallellakseteoremet, treghetsmoment ved
  integrasjon, og rullebetingelsen v = ωR er faste ingredienser.
- **Numerikk (Euler-Cromer) er en fast, men liten, deloppgave (3/4).** Den ber om
  en *kodeskisse* — initialbetingelser + integrasjonsløkke — ikke et kjørbart
  program, og «alle programmeringsspråk er tillatt; syntaksfeil trekker ikke».
  Euler-Cromer (oppdater v først, så r med den nye v) er den forventede metoden.
  I FYS1100 er dette løftet fram (full kode med while-løkke, luftmotstand).
- **Roterende referansesystemer (Coriolis/sentrifugal) er FYS-MEK1110s dypeste
  særtrekk (2/4), og finnes IKKE i FYS1100.** Formelarket gir hele uttrykket for
  fiktive krefter; oppgavene ber om å identifisere hvilke ledd som overlever og
  forklare hva de avhenger av.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensors dokumenterte foretrukne metode.
**Gjennomgående metodekrav for ALLE typer: begrunn alt, tegn og navngi krefter i
frilegemediagram, angi loven ved navn (spinnbevaring/N2L/energibevaring), oppgi
retning der det er en vektor, og kommenter fysikken.**

### A. Frilegemediagram (FLD) + Newtons 2. lov
- **Krav:** Tegn alle krefter med navn (tyngde G, normalkraft N, snordrag/tau S/T,
  friksjon f, kontakt-/hengselkraft F). Sett opp N2L komponentvis i valgt
  koordinatsystem. **Sensor trekker for å legge på en «sentripetalkraft»** (den er
  ikke en egen kraft, men resultatet av de virkelige kreftene) og for å tegne
  akselerasjonsvektoren feil. Motkrefter (Newtons 3.) skal med når to legemer er i
  kontakt (kloss-på-kloss, kloss-på-kile).
- **Frekvens:** 4/4 avsluttende (nesten hver hovedoppgave åpner med FLD).

### B. Arbeid–energi-setningen og energibevaring
- **Krav:** Skill **konservative** (tyngde, fjær, gravitasjon) fra **ikke-
  konservative** (dynamisk friksjon, luftmotstand) krefter. Ved bare konservative
  krefter: mekanisk energi bevart, K₀+U₀ = K₁+U₁. Ved friksjon/luftmotstand:
  arbeid–energi-setningen W = ΔK, der W_friksjon = −f·(veilengde) (men se fella
  under). Faste anvendelser: fart etter kompresjon av fjær, fart i toppen av loop
  (+ betingelse v ≥ √(gR) fra N ≥ 0), fart etter glidning ned skråplan.
- **Sensorpoeng:** krev eksplisitt begrunnelse for *hvorfor* mekanisk energi er
  bevart (ellers −1). **Fella (dokumentert i to sett):** når et legeme både ruller
  og glir, er energitapet **ikke** lik f·d, fordi kontaktpunktet delvis er i ro —
  man må trekke fra den delen av veien legemet har rullet.
- **Frekvens:** 4/4.

### C. Rotasjon, spinn og treghetsmoment
- **Krav (den faste malen):**
  1. **Treghetsmoment:** oppgi det (som regel gitt), eller regn I = ∫ρ²dm; bruk
     **parallellakseteoremet** I = I_cm + Md² for akse gjennom sidekant/kontaktpunkt.
  2. **Spinnbevaring om smart punkt:** vis at netto kraftmoment om punktet er null
     (kreftene har null kraftarm der), altså τ_net = dL/dt = 0 ⇒ L bevart.
  3. **Rullebetingelsen** v = ωR (og a = αR ved derivasjon) kobler translasjon og
     rotasjon.
  4. **Total kinetisk energi** K = ½Mv² + ½Iω² (translasjon + rotasjon).
- **Arketyper:** rullende bildekk (hul sylinder, tre faser gli→gli+rull→ren rull),
  roterende kule satt ned på underlag (ω = (2/7)ω₀), kloss som hekter seg og
  tipper (spinn før = ½Mvb), dør + prosjektil (fullstendig uelastisk,
  spinnbevaring om hengsel), jojo (N2L + rotasjons-N2L → a = 2g/3), kunstløper
  (spinnbevaring, ChatGPT-kritikk i FYS1100).
- **Faste trekk:** −2 hvis kraftmomentet til tyngdekraften om massesenteret ikke
  settes til null (tyngden angriper i massesenteret), −2 for å ikke også bruke N2L
  (jojo), krev begrunnelse for spinnbevaring.
- **Frekvens:** 4/4 — kursets signatur på avsluttende.

### D. Bevegelsesmengde, impuls og støt
- **Krav:** Argumenter at det ikke er ytre horisontale krefter ⇒ bevegelsesmengde
  bevart (evt. komponentvis: bevart i friksjonsfri retning, ikke i retning med
  ytre kraft). **Impuls J = ∫F dt = Δp**; ved konstant kraft J = FΔt. Klassifiser
  støtet: elastisk (K bevart), uelastisk, fullstendig uelastisk (legemene henger
  sammen — K **ikke** bevart, regn tapet). 2D-variant: bevar p_x og p_y hver for
  seg (bilkollisjon med vinkel: tan θ = m_A v_A / m_B v_B).
- **Faste trekk (fra FYS1100-veiledning, samme kultur):** **0 poeng for å bruke
  energibevaring i en uelastisk kollisjon**; −1 for å ikke begrunne hvorfor
  bevegelsesmengde er bevart; delvis uttelling som følgefeil hvis man konsekvent
  regner videre på gal antakelse.
- **Frekvens:** 3/4 avsluttende, svært hyppig på midtveis.

### E. Friksjon på skråplan
- **Krav:** N2L normalt på planet gir N = mg cos θ; statisk friksjon |f_s| ≤ μ_s N
  (bruk **maksimal** statisk friksjon ved kritisk vinkel: tan θ_max-utledning),
  dynamisk |f_d| = μ_d N (mot bevegelsesretning). Kombiner med arbeid–energi for
  sluttfart: v = √(2gd(sin θ − μ_d cos θ)).
- **Frekvens:** 3/4, tungt på midtveis.

### F. Spesiell relativitet — flerhendelses-samtidighet
- **Krav:** Sett opp de fire hendelsenes koordinater i det ene systemet, bruk
  **Lorentz-transformasjonen** x′ = γ(x − vt), t′ = γ(t − vx/c²) (og de inverse)
  til å finne koordinatene i det andre. Konkludér om **rekkefølge/samtidighet**
  (fortegnet på Δt′). Forklar «paradokset» (hver observatør mener den fanget den
  andre) via samtidighetens relativitet + lengdekontraksjon. Tegn
  **Minkowski-diagram** med begge aksesett og merk hendelsene.
- **Feller:** blande merkede/umerkede koordinater, glemme γ, feil fortegn i t′.
- **Frekvens:** 2/4 (den «tyngre» relativitetstypen).

### G. Spesiell relativitet — partikkelhenfall
- **Krav:** Egentid τ = Δt₀ i partikkelens hvilesystem; laboratoriet måler
  Δt = γτ (**tidsdilatasjon**). Strekning i lab d = vΔt = vγτ; løs for v.
  Alternativt lengdekontraksjon l = l₀/γ sett fra partikkelen. Lorentzkontraksjon
  av stav: l = l₀√(1 − v²/c²).
- **Frekvens:** 2/4 (den «mildere» relativitetstypen; FYS1100 H2023 bruker denne).

### H. Roterende referansesystem / fiktive krefter
- **Krav:** Start fra det generelle uttrykket (på formelarket):
  ma′ = ΣF_ext − mA − mα×r′ − 2mω×v′ − mω×(ω×r′). Argumenter bort ledd
  (A = 0, α = 0 ved konstant ω, a′ = 0 hvis konstant fart i S′). Identifiser
  **Coriolis** −2mω×v′ (avhenger av hastighet i S′) og **sentrifugal**
  −mω×(ω×r′) (avhenger av avstand fra aksen). Regn størrelser: a_s = ω²r′,
  a_c = 2ωv′ via kryssprodukt med enhetsvektorer.
- **Frekvens:** 2/4. **Særegent for FYS-MEK1110; ikke i FYS1100.**

### I. Potensial, konservativ kraft og likevektspunkter
- **Krav:** 1D: F(x) = −dU/dx; en posisjonsavhengig 1D-kraft er alltid konservativ.
  Likevekt der F = 0 (dU/dx = 0); stabil ved minimum (d²U/dx² > 0), ustabil ved
  maksimum. 2D/3D: F = −∇U; sjekk konservativitet via **∇×F = 0** (curl), som
  automatisk holder når F = −∇U. Gravitasjon/1-r-potensial: F = −γmM r̂/r²,
  U = −γmM/r.
- **Frekvens:** 2/4 avsluttende; hyppig på midtveis (avlese fra graf).

### J. Numerisk modellering (Euler-Cromer, kodeskisse)
- **Krav:** Sett opp initialbetingelser (r[0], v[0], evt. transformasjon S′→S),
  og en **integrasjonsløkke**: beregn akselerasjon fra kreftene i hvert steg,
  **oppdater v før r** (Euler-Cromer): `v[i+1] = v[i] + a*dt`, deretter
  `r[i+1] = r[i] + v[i+1]*dt`. Ved luftmotstand F_D = −D|v|v: bruk fart-avhengig
  akselerasjon med begge komponenter. Riktig stoppbetingelse (ballen forlater
  karusellen, treffer bakken).
- **Faste trekk (FYS1100-veiledning):** syntaksfeil trekker ikke, alle språk
  tillatt, valgfri integrasjonsmetode gir full uttelling; **maks halv pott hvis
  ikke både x- og y-retning tas med**; −1 for feil i akselerasjonskomponentene
  (f.eks. glemme å gange med |v|).
- **Frekvens:** 3/4 avsluttende + midtveis 2021; **100 % og mer utbygd i FYS1100**.

### K. Statisk likevekt (stang/bjelke)
- **Krav:** ΣF = 0 (komponentvis) **og** Στ = 0 om et smart valgt punkt (ofte
  hengselet, så hengselkraften faller ut). Homogen stang ⇒ tyngden angriper i
  midten. Finn tauspenning, så hengselkraftens komponenter og størrelse.
- **Frekvens:** 2/4 avsluttende, hyppig som flervalg (balansert stokk).

### L. Kvalitative / begreps- og flervalgsoppgaver
- **Krav:** Kort, presist, med korrekt lovreferanse. På avsluttende
  flervalg: **1 poeng for riktig alternativ + 2 poeng for forklaringen** —
  forklaringen bærer oppgaven. Gjengangere: hva er bevart i et støt; retning på
  akselerasjon i pendel/sirkelbevegelse; normalkraft i heis/bakketopp; vekt ved
  ekvator vs. Oslo (sentrifugal + jordform); kildekritikk av ChatGPT (FYS1100).
- **Frekvens:** minst én per sett; hele midtveis er av denne typen.

---

## 4. Sensorens krav

Løsningsforslagene (ACL & JB) og særlig FYS1100-**sensorveiledningen** (20.12.2023)
er svært informative og stabile på tvers av år. Metareglene:

1. **«Alle svar må begrunnes».** Dette står på hvert sett. **Lite eller ingen
   poeng for riktig svar uten begrunnelse**, og **ingen poeng for å bare skrive
   opp likninger** uten å tilpasse dem til problemet. Selv på flervalgsdelen gir
   forklaringen 2 av 3 poeng.
2. **Loven skal navngis og betingelsen sjekkes.** Spinnbevaring krever eksplisitt
   argument for at netto kraftmoment er null; energibevaring krever begrunnelse
   for at bare konservative krefter gjør arbeid; bevegelsesmengdebevaring krever
   argument om fravær av ytre krefter i den aktuelle retningen. Å hoppe over dette
   trekker selv når sluttsvaret er riktig.
3. **Følgefeil straffes ikke.** Regner man videre korrekt på et galt delsvar, gis
   full uttelling videre — forutsatt at mellomregningen er vist. (FYS1100-
   veiledningen sier dette rett ut, og gir 5/5 til en som brukte energibevaring i
   a) og konsekvent fikk forholdet 1 i b).)
4. **Deloppgaver gis 0–5 (FYS1100) / 2–6 poeng (FYS-MEK1110), og teller likt.**
   «Alle deloppgaver teller likt» oppgis eksplisitt.
5. **Frilegemediagram er strengt vurdert:** trekk for å legge på en
   «sentripetalkraft», for feil retning på akselerasjonsvektoren, for uforholds-
   messige kraftpiler, og for å ikke navngi/definere kreftene.
6. **Tallsvar:** fornuftig antall gjeldende siffer; ett siffer for mye/lite
   godtas; avrundingsavvik i mellomsvar straffes normalt ikke; enhet skal med.
7. **Numerikk:** metode og språk er fritt, syntaks er sekundært — det er
   **fysikken i løkka** (riktig akselerasjon, begge komponenter, Euler-Cromer-
   oppdateringsrekkefølge, stoppbetingelse) som gir poeng.
8. **Metakommentarer og fysisk rimelighet honoreres:** å påpeke at et resultat er
   ufysisk, eller at en oppgave (ChatGPT) er selvmotsigende, gir uttelling.
9. **Alternative løsninger og tolkninger godtas.** Fasitene har ofte
   «Alternativt:» (impuls vs. energibevaring; symmetri vs. full utregning) og
   ACLs kommentarer aksepterer eksplisitt rimelige alternative tolkninger av
   tvetydige oppgaver (snorvinkel, hva svaret skal uttrykkes ved).

### Hva skiller karakternivåene
- **Bestått:** tegner riktig FLD, setter opp N2L/energibevaring, får sluttsvar på
  de «billige» deloppgavene, kjenner Lorentz-formlene fra arket.
- **Midtsjikt:** fullfører flertrinnsutledningene (spinnbevaring + parallellakse +
  rullebetingelse; arbeid–energi med korrekt fortegn; fire Lorentz-hendelser)
  med begrunnelser.
- **Toppsjikt:** (i) begrunner bevaringslover og sjekker betingelser uoppfordret,
  (ii) velger smart referansepunkt for spinn/kraftmoment, (iii) håndterer
  fiktive krefter med korrekt kryssprodukt og enhetsvektorer, (iv) skiller
  rulle- fra glidebidrag i energitap, (v) skriver en korrekt Euler-Cromer-løkke
  med begge komponenter og fysisk stoppbetingelse, (vi) tegner et korrekt
  Minkowski-diagram og forklarer samtidighetens relativitet presist.

---

## 5. Typiske feil (utledet fra fasiter og sensorveiledninger)

1. **Riktig svar uten begrunnelse** — den dyreste enkeltfeilen; koster
   mesteparten av poengene på begreps-/flervalgsoppgaver.
2. **«Sentripetalkraft» tegnet som egen kraft** i frilegemediagram — den er
   resultatet av virkelige krefter, ikke en av dem.
3. **Energibevaring brukt i en (fullstendig) uelastisk kollisjon** — 0 poeng;
   mekanisk energi er *ikke* bevart der. Motsatt: å hevde at bevegelsesmengde
   ikke er bevart når den er det.
4. **Manglende begrunnelse for en bevaringslov** — spinn/energi/bevegelsesmengde
   påberopt uten å vise at forutsetningen (null kraftmoment / bare konservative
   krefter / ingen ytre kraft) holder.
5. **Kraftmoment til tyngdekraften om massesenteret ikke satt til null** — tyngden
   angriper i massesenteret og har null kraftarm der (−2 i jojo/rotasjon).
6. **Energitap satt lik f·d når legemet både ruller og glir** — feil, fordi
   kontaktpunktet delvis er i ro; må trekke fra rullestrekningen.
7. **Rullebetingelsen v = ωR glemt** eller feil koblet mellom translasjon og
   rotasjon.
8. **Lorentz: blandet merkede/umerkede koordinater, glemt γ, feil fortegn i t′**,
   eller byttet om l og l₀ i lengdekontraksjon.
9. **Numerikk:** kun én romlig komponent der oppgaven krever to (maks halv pott);
   glemt å gange luftmotstanden med |v|; feil oppdateringsrekkefølge (Euler i
   stedet for Euler-Cromer der det er bedt om).
10. **Fiktive krefter:** feil ledd beholdt/forkastet, feil kryssprodukt, eller å
    forveksle Coriolis (hastighetsavhengig) med sentrifugal (posisjonsavhengig).
11. **Statisk friksjon: ikke bruke maksimalverdien μ_s N** ved kritisk
    (gli-begynner) situasjon.
12. **Tallsvar uten enhet / urimelig antall gjeldende siffer**, og manglende
    retning på en vektorstørrelse.

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut **ett formelark** (bakerst) og tillater Rottmann + Øgrim&Lian.
Skillet nedenfor er hva som må kunne **brukes aktivt under tidspress** (velges,
kombineres, argumenteres) mot hva som bare hentes.

### Utdelt på formelarket (skal gjenkjennes og brukes, ikke pugges)
Formelarket (verifisert fra 2023-arket) inneholder:
- **N2L og kinematikk:** ΣF = ma = dp/dt, p = mv, a = dv/dt = d²r/dt²;
  bevegelsesligninger for konstant a og konstant α; baneakselerasjon (tangentiell
  + sentripetal).
- **Rotasjon:** v = ω×r, a = α×r + ω×(ω×r).
- **Referansesystemer:** Galilei-transformasjon r = R + r′, v = V + v′.
- **Krefter:** fjærkraft F = −k(x−x₀); luftmotstand F_D = −kv **eller**
  F_D = −D|v|v; statisk |f_s| ≤ μ_s N; dynamisk |f_d| = μ_d N.
- **Arbeid/energi:** W = ∫F·v dt = ∫F·dr = K₁−K₀; K = ½mv²; U = mgy (tyngde),
  U = ½k(x−x₀)² (fjær); effekt P = F·v; konservativ kraft F = −∇U.
- **Impuls:** J = ∫F dt = Δp; rakettligningen F_ext + v_rel dm/dt = ma.
- **Massesenter:** R = (1/M)Σm_i r_i = (1/M)∫r dm.
- **Kraftmoment/spinn:** τ = r×F, L = r×p, spinnsats τ = dL/dt; stive legemer
  L_z = I_z ω_z, τ_z = I_z α_z; K_rot = ½Iω²; I = Σm_iρ_i² = ∫ρ² dm.
- **Parallellakseteoremet:** I = I_cm + Md²; rullebetingelse V = ωR.
- **Fiktive krefter:** ma′ = ΣF_ext − mA − mα×r′ − 2mω×v′ − mω×(ω×r′).
- **Gravitasjon:** F = −G(m₁m₂/r²)û_r, U = −G m₁m₂/r.
- **Elastisitet:** σ = F/A = E(Δl/l) = Eε; tverrkontraksjon Δd/d = −ν(Δl/l).
- **Relativitet:** Lorentz x′ = γ(x−ut), t′ = γ(t − ux/c²), γ = 1/√(1−u²/c²);
  tidsdilatasjon Δt = γΔt₀; lengdekontraksjon l = l₀/γ; hastighets-
  transformasjon v′ = (v−u)/(1−uv/c²).

### Må beherskes aktivt (kjerneverktøyene — selv om de står på arket)
1. **N2L komponentvis + frilegemediagram** for alle geometrier (skråplan, kile,
   loop, hengsel, kontakt kloss-på-kloss).
2. **Arbeid–energi + energibevaring**, skille konservativ/ikke-konservativ, loop-
   betingelse v ≥ √(gR).
3. **Rotasjon:** treghetsmoment + parallellakseteorem, spinnbevaring om smart
   punkt, rullebetingelse, K = ½Mv² + ½Iω².
4. **Bevegelsesmengde/impuls:** komponentvis bevaring, elastisk/uelastisk,
   energitap i uelastisk støt.
5. **Sirkelbevegelse:** sentripetalakselerasjon v²/R, N ≥ 0-betingelser.
6. **Potensial ↔ kraft:** F = −dU/dx og F = −∇U, likevekt og stabilitet, curl = 0.
7. **Gravitasjon:** F = −γmM r̂/r², U = −γmM/r, sirkel-/ellipsebaner.
8. **Fiktive krefter:** velge/argumentere bort ledd, Coriolis vs. sentrifugal,
   kryssprodukt med enhetsvektorer.
9. **Spesiell relativitet:** Lorentz-transformere hendelser, tidsdilatasjon,
   lengdekontraksjon, samtidighet, Minkowski-diagram.
10. **Numerikk (aktiv ferdighet, ikke på arket):** Euler-Cromer-løkke, fart-
    avhengig kraft, begge komponenter, stoppbetingelse.

### Lavfrekvent / dypere enn FYS1100 (dekk, men vekt lavt)
- **Elastisitet (spenning/tøyning, E-modul, Poisson ν):** kun på formelarket,
  ikke en egen oppgave i de leste settene.
- **Roterende referansesystemer / Coriolis:** signaturtema i FYS-MEK1110, men
  **fraværende i FYS1100** — merk deretter.
- **Rakettligningen:** på arket, sjelden i oppgave.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer hvert avsluttende sett)
1. **Newtons 2. lov + frilegemediagram** — 4/4; grunnmuren i hver oppgave.
2. **Arbeid–energi + energibevaring** — 4/4; skille konservativ/ikke-konservativ,
   loop-betingelse, energitap.
3. **Rotasjon/spinn/treghetsmoment** — 4/4; spinnbevaring om smart punkt,
   parallellakse, rullebetingelse, kombinert K. Kursets tyngste tema.
4. **Bevegelsesmengde/impuls/støt** — 3/4 (+ hyppig midtveis); komponentvis
   bevaring, elastisk/uelastisk, 2D.
5. **Spesiell relativitet** — 4/4 avsluttende; Lorentz-hendelser + samtidighet +
   Minkowski **og** partikkelhenfall + tidsdilatasjon/lengdekontraksjon.
6. **Numerisk modellering (Euler-Cromer)** — 3/4 (og fullt utbygd i FYS1100);
   kodeskisse med begge komponenter og fysisk stoppbetingelse.

### Nivå 2 — må kunne (gir bredden, avgjør B mot C)
7. **Friksjon på skråplan** — statisk maksimal ved kritisk vinkel, dynamisk +
   arbeid–energi.
8. **Sirkelbevegelse / sentripetal** — N ≥ 0-betingelser, bakketopp/loop.
9. **Potensial ↔ kraft, likevektspunkter** — F = −∇U, curl = 0, stabil/ustabil.
10. **Gravitasjon / baner** — F og U for 1/r, sirkel vs. ellipse, arbeid over
    periode.
11. **Statisk likevekt** — ΣF = 0 og Στ = 0 om hengsel.

### Nivå 3 — bør dekkes (dypere enn FYS1100 eller lavfrekvent)
12. **Roterende referansesystemer / fiktive krefter (Coriolis + sentrifugal)** —
    2/4 i FYS-MEK1110, **ikke i FYS1100**. Dekk fullt for FYS-MEK1110-
    fullstendighet; merk som «ut over FYS1100».
13. **Elastisitet (spenning/tøyning, E-modul)** — på arket, lav arkivfrekvens;
    kompakt dekning.
14. **Matematisk modellering ut over Euler-Cromer** — separabel diff.likning
    (terminalfart), Taylor-utvikling. **Løftet fram i FYS1100** — bør styrkes hvis
    boka primært skal støtte FYS1100.
15. **Kildekritikk/metakognisjon** (ChatGPT-oppgaven i FYS1100) — ny sjanger i
    etterfølgeren; verdt et avsnitt.

### Prognose for et representativt sett
Et FYS-MEK1110-avsluttende sett: **4 timer, formelark + Rottmann + Øgrim&Lian +
kalkulator, 6 oppgaver, alle deloppgaver teller likt, alt begrunnet.** Typisk
sammensetning: (1) flervalg/begrep med forklaringskrav, (2) kort tekst/diskusjon,
(3) friksjon-/skråplan- eller referansesystem-oppgave med **numerisk kodeskisse**,
(4) potensial-/gravitasjons- eller statikk-oppgave, (5) **stor rotasjons-/
spinn-oppgave**, (6) **spesiell relativitet**. Midtveis: 20 rene flervalg over
3 timer, kun første halvdel av pensum (ingen rotasjon/relativitet).

**Kalibrering mot FYS1100:** hvis boka primært skal støtte dagens FYS1100-
studenter, flytt vekt fra Coriolis/elastisitet mot **eksplisitt numerikk (full
kjørbar kode), separable diff.likninger og Taylor-utvikling**, og behold
relativitet på den «mildere» partikkelhenfall-formen som FYS1100 H2023 brukte.
Behold hele rotasjons-/spinn-sporet — det er felles og bærende i begge emner.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/UiO/FYS-MEK1110/`
(`eksamen/` og `losningsforslag/`); tekstuttrekk i scratchpad `fysmek/`.

**Lest grundig (oppgave + løsningsforslag):**
- **Avsluttende eksamen vår 2021** (hjemmeeksamen) + løsningsforslag
- **Avsluttende eksamen vår 2022** + løsningsforslag
- **Avsluttende eksamen vår 2023** + løsningsforslag (inkl. fullt formelark)
- **Kontinuasjonseksamen vår 2022** (august) + løsningsforslag
- **Midtveiseksamen vår 2021** + fullt løsningsforslag m/sensorveiledning (76 p)
- **Midtveiseksamen vår 2022** + fullt løsningsforslag (20 flervalg)
- **Midtveiseksamen vår 2023** (20 flervalg, med fasit)

**Kalibreringssett (etterfølger), lest grundig:**
- **FYS1100 Mekanikk og modellering, avsluttende eksamen høst 2023** + detaljert
  **sensorveiledning** (20.12.2023) — brukt til å kalibrere overgangen
  FYS-MEK1110 → FYS1100 (se del 0 og del 7).

**Oppsummert tellegrunnlag:** 4 avsluttende-type sett (3 ordinære + 1 konte) med
fasit, 3 midtveissett (2 med fullt løsningsforslag, 1 med fasit), og 1
FYS1100-kalibreringssett med sensorveiledning = **8 FYS-MEK1110-sett + 1
FYS1100-sett, samtlige med tilhørende fasit/løsningsforslag**.

**Merknader om kildene:**
- **Nedlagt emne:** FYS-MEK1110s siste eksamen var vår 2024; arkivet her stopper
  vår 2023 (+ konte august 2022). Emnet er videreført som **FYS1100** (7 sp,
  betydelig overlapp). Se del 0 for det bærende forbeholdet.
- **Stabil sensorkultur:** løsningsforslagene (ACL & JB) er konsistente i stil og
  krav på tvers av år; FYS1100-veiledningen dokumenterer poenglogikken eksplisitt
  og bekrefter at samme kultur (begrunn alt, følgefeil straffes ikke, 0–5 per
  deloppgave, fri numerikk) er videreført.
- **Overlapp med bygde fag:** FYS1120 (elektromagnetisme) deler fakultet, nivå og
  eksamenskultur (4 t skoleeksamen, rikt formelark, symmetri-/lovreferansekrav,
  obligatorisk Python-numerikk, 20 %/25 % midtveis mot 80 %/75 % avsluttende).
  FYS-MEK1110 er det naturlige *forkurset* i mekanikk før FYS1120s felt-teori;
  begge bygger på samme frilegemediagram-/N2L-disiplin og numerikk-forankring.
  Etterfølgeren **FYS1100 gjør denne boka byggeverdig** ved at pensumkjernen
  fortsatt eksamineres.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller veiledningsformuleringer er gjengitt ordrett.
  Formlene er standard fysikknotasjon uten opphavsrettslig vern.
