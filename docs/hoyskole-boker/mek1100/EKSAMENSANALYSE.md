# Eksamensanalyse: MEK1100 Feltteori og vektoranalyse (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på **25 avsluttende eksamenssett** (vår og høst 2004–2018) og **17 offisielle løsningsforslag/sensorfasiter** (de fleste settene fra 2006 og senere; de eldste fasitene 2004–2008 finnes kun som innskannede, ikke maskinlesbare håndskrevne ark og er derfor kartlagt via oppgavetekst + parallelle fasiter). Den utdelte formelsamlingen (Rottmann) og de vedlagte formeltilleggene er lest. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, operatorer og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** MEK1100 er et bemerkelsesverdig **stabilt og forutsigbart** emne. I motsetning til MAT1110 (som fikk et regimeskifte i 2025) har MEK1100 hatt praktisk talt samme oppgavearkitektur i hele arkivet: hvert eneste sett er bygget rundt **todimensjonal potensialstrøm** (finn hastighetsfelt, divergens og virvling, strømfunksjon ψ og hastighetspotensial φ, strømlinjer og stagnasjonspunkter) kombinert med **integralsatsene** (sirkulasjon via Stokes, fluks via Gauss), **varmeledning/Fouriers lov**, og **trykk via Bernoulli eller Eulers likning**. En bok som driller disse fem ryggradene til automatikk dekker >90 % av all poenguttelling. **Det viktigste forbeholdet er tid:** arkivet stopper i **V2018**, mens emnet fortsatt undervises (vår 2026). Det finnes altså et 8-årig hull mot dagens praksis — verifiser mot nyere sett så snart de foreligger, og sjekk om emneansvarlig har endret vekting (jf. MAT1110-erfaringen).

---

## 1. Eksamensform og utvikling

MEK1100 vurderes med **to prøver** (som forgjengeren i emnebeskrivelsen): **midtsemestereksamen (25 %)** og **avsluttende skriftlig eksamen (75 %)**, i tillegg til **to obligatoriske innleveringer** som må være godkjent. Hjelpemidler: **K. Rottmann, Matematische Formelsammlung** + godkjent kalkulator; fra 2009 også et vedlagt **formeltillegg på 2 sider** (operatorer i kartesiske/sylinder-/kulekoordinater, materialderivert, integralsatser, strømfunksjon–potensial-relasjoner).

> **Arkiv-forbehold:** Arkivet inneholder **kun avsluttende eksamener**. Det finnes **ingen midtsemestereksamener** i mappen, så all kvantitativ analyse under gjelder den avsluttende eksamenen. Midtsemesterets form/temafordeling (som logisk dekker første halvdel: feltbegreper, gradient, div/curl, strømfunksjon/potensial, integralsatser — før den fysikktunge fluid-/varmedelen) bør hentes inn separat før boken kalibrerer midtveisdelen.

### Formathistorikk

| Periode | Struktur | Kommentar |
|---|---|---|
| 2004–2008 | 3–4 hovedoppgaver med ulik intern vekt, **3 timer**, **ingen formeltillegg** | Formlene som trengs skrives inn i oppgaveteksten (gradient/divergens i polar, ψ-relasjoner). Sensor forventer at studenten kan resten fra Rottmann. |
| 2009–2010 | Hovedoppgaver med **eksplisitt prosentvekt** per deloppgave (f.eks. «Oppgave 1 (vekt 40 %)»), **3 timer** | Formeltillegg på 2 sider innføres som fast vedlegg. |
| 2011–2018 | **Fast mal: 10 delspørsmål, hvert 0–10 poeng, maks 100**, **4 timer** (09–13 eller 14:30–18:30) | Den stabile normen. 3–5 hovedoppgaver med 2–4 deler hver. Vår- og høstsett identiske i form. |

**Konstanter på tvers av alle år:**
- **Fysisk innkledning er regelen, ikke unntaket.** Nesten hver oppgave er formulert som et konkret strømnings- eller varmeproblem (elv, rør, karusell, hevert, roterende kopp, telt i vind, flaskebunn, akvarium, kule som varmes opp). Studenten må **oversette fysikk til feltmatematikk** og tilbake.
- **«Navngi tydelig hva som er divergens og hva som er virvling.»** / **«Hva heter integralsatsen?»** — settene krever gjennomgående at studenten **navngir** begreper og teoremer eksplisitt, ikke bare regner.
- **Dimensjonskontroll er poenggivende.** Flere sett har egne deloppgaver om fysiske enheter (benevning) til konstantene, og fasiten sjekker rutinemessig at sluttsvaret har riktig benevning.
- **Deloppgavene er kjedet:** senere punkter gjenbruker felt, ψ, φ eller trykk fra tidligere punkter (f.eks. Gauss brukt på fluks funnet i et tidligere punkt — H2009 O3d, V2017 O1b, H2012 O3).
- **Bredde:** et typisk sett treffer (1) et 2D-felt med ψ/φ/strømlinjer, (2) en integralsats (Stokes/Gauss), (3) et varmeproblem (Fourier), og (4) et trykk-/Bernoulli-problem.

### Stabilitet framfor regimeskifte
Der MAT1110 hadde ett dramatisk skifte, viser MEK1100 **jevn drift**: fra en løsere 3–4-oppgavers form (2004–2008) mot den strømlinjeformede «10 × 10»-malen (2011–2018). Temainnholdet er derimot nesten uendret gjennom hele perioden. **Den eneste virkelige usikkerheten er de manglende årene 2019–2026** (se del 7).

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som selvstendig (del)oppgave. Basert på 25 avsluttende sett: **2004–2008 (9 sett)**, **2009–2013 (10)**, **2014–2018 (6, kun vår)**. Frekvensene er utledet ved parafrase-kartlegging av oppgavetekst (og fasit der den finnes), ikke ordrett gjengivelse.

| Tema | 2004–08 (9) | 2009–13 (10) | 2014–18 (6) | **Gjenganger-score** |
|---|---|---|---|---|
| **Strømfunksjon ψ og/eller hastighetspotensial φ: eksistens + finn** | 9 | 10 | 5 | **24/25 = 96 %** |
| **Divergens og virvling (curl) av et gitt felt** | 6 | 8 | 6 | **20/25 = 80 %** |
| **Strømlinjer + stagnasjonspunkt (+ singulære punkt) + skisse** | 6 | 8 | 5 | **19/25 = 76 %** |
| **Bernoullis likning: betingelser + anvend for trykk/fart** | 6 | 9 | 4 | **19/25 = 76 %** |
| **Varmefluks / Fouriers lov / varmeledningslikning** | 4 | 7 | 5 | **16/25 = 64 %** |
| **Sirkulasjon (kurveintegral) + Stokes' teorem** | 6 | 5 | 4 | **15/25 = 60 %** |
| **Fluks (flateintegral) + Gauss' divergensteorem** | 5 | 7 | 3 | **15/25 = 60 %** |
| **Dimensjonsanalyse / fysiske enheter (benevning)** | 4 | 7 | 4 | **15/25 = 60 %** |
| **Potensialstrøm ved superposisjon (navngi kilde/sluk/uniform/dipol/virvel)** | 8 | 3 | 1 | **12/25 = 48 %** (fallende) |
| **Materialderivert / akselerasjon (lokal + konvektiv)** | 3 | 5 | 3 | **11/25 = 44 %** |
| **Eulers likning brukt direkte for trykk (ikke bare Bernoulli)** | 1 | 4 | 4 | **9/25 = 36 %** (stigende) |
| **Hydrostatisk trykk + total trykkraft på flate (kraftintegral)** | 1 | 5 | 2 | **8/25 = 32 %** |
| **Fri overflateform z = η(r) (roterende/strømmende væske)** | 0 | 3 | 3 | **6/25 = 24 %** (stigende) |
| **Krumlinjede koordinater: skaleringsfaktorer, ortogonalitet, volumelement** | 0 | 4 | 1 | **5/25 = 20 %** |
| **Ekviskalarkurver til φ og ψ står normalt (vis)** | 4 | 2 | 0 | **6/25 = 24 %** (eldre) |
| **Gradient / retningsderivert (terreng, «mygg mot varmere/kaldere»)** | 0 | 4 | 2 | **6/25 = 24 %** |
| **Enhetsnormal n og flateelement dσ til gitt flate (parametrisering)** | 2 | 3 | 0 | **5/25 = 20 %** |
| **Kontinuitetslikning: utled fra massebevaring / bruk for volumfluks** | 1 | 3 | 1 | **5/25 = 20 %** |
| **Utled varmeledningslikninga fra energibevaring** | 0 | 2 | 0 | **2/25 = 8 %** |
| **Laplace-likning ∇²φ = 0 eksplisitt (Laplaceisk felt / punktkilde)** | 2 | 4 | 0 | **6/25 = 24 %** |

**Viktigste funn:**
1. **Strømfunksjon/potensial er det suverent mest stabile temaet** — det åpner nesten hvert sett. Studenten må kunne (a) avgjøre om φ finnes (⇔ virvelfritt) og om ψ finnes (⇔ divergensfritt, 2D), (b) finne dem ved antiderivasjon fra ψ–v-relasjonene, (c) tegne strømlinjer og ekvipotensialer, (d) finne stagnasjonspunkter. Dette er bokens kjerne.
2. **Div/curl + de to integralsatsene (Stokes for sirkulasjon, Gauss for fluks) utgjør vektoranalyse-motoren** og går igjen i 60–80 % av settene. Ofte kreves at **samme størrelse regnes to veier** (direkte kurveintegral *og* Stokes; direkte flateintegral *og* Gauss) for å bekrefte svaret.
3. **Varme-blokka (Fouriers lov, varmeledning, ∂T/∂t-fortegn, «myggen»)** er en nesten fast egen oppgave, 64 %. Kombineres ofte med enhetsanalyse og gradient.
4. **Trykk hentes enten via Bernoulli (76 %, med eksplisitte betingelser) eller direkte via Eulers likning (36 %, stigende).** Skillet mellom når hver kan brukes er en **sentral karakterskiller** (se del 4/5).
5. **Den navngitte potensialstrøm-katalogen (uniform stream + kilde/sluk + dipol + virvel, superponert til Rankine-legeme / strøm forbi sylinder / kilde ved vegg)** dominerte 2004–2008 (8/9) men falt kraftig etter 2012. Beholdes som beredskap, men vektes lavere enn før.
6. **Krumlinjede koordinater (skaleringsfaktorer, ortogonalitet, volumelement)** er en periodisk «teori-oppgave» (~20 %), oftest 2010–2013.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med fasitens foretrukne metode. Metode er verifisert mot de tilgjengelige fasitene (2006–2017); for sjangre som bare er belagt i eldre sett uten maskinlesbar fasit er metoden den faglig etablerte standarden, merket ⚠️.

### A. Strømfunksjon ψ og hastighetspotensial φ — eksistens og bestemmelse
- **Krav:** Slå først fast **eksistensbetingelsene** og navngi dem: **φ finnes ⇔ feltet er virvelfritt** (`∇×v = 0`, konservativt); **ψ finnes ⇔ feltet er divergensfritt** (`∇·v = 0`) og 2D. Er begge oppfylt er strømmen **potensialstrøm** og `∇²φ = 0` (Laplace). Finn så ved **antiderivasjon** fra relasjonene: 2D kartesisk `vx = ∂φ/∂x = ∂ψ/∂y`, `vy = ∂φ/∂y = −∂ψ/∂x` (fasitkonvensjon H2012/H2008); polart `vr = ∂φ/∂r = −(1/r)∂ψ/∂θ`, `vθ = (1/r)∂φ/∂θ = ∂ψ/∂r`. Fasiten integrerer den ene relasjonen, setter inn i den andre for å finne integrasjons«konstanten» `F(y)`, og bemerker at **den frie konstanten kan velges lik null**.
- **Frekvens:** 24/25 — praktisk talt garantert, oftest O1. Fasit finnes.
- **Omskrevet eksempel:** «Undersøk om `v = xy²i − x²yj` har en strømfunksjon og et potensial, og finn dem i så fall.»

### B. Divergens og virvling av et gitt felt (+ navngi)
- **Krav:** Regn `∇·v` og `∇×v` i det koordinatsystemet oppgaven ber om (kartesisk, sylinder eller kule — formler i vedlegg/Rottmann). **«Navngi tydelig hva som er divergens og hva som er virvling.»** For 2D-felt er virvlingen `(∂vy/∂x − ∂vx/∂y)k`. Fasiten tolker ofte resultatet fysisk (divergensfri = inkompressibel/kildefri; virvelfri = ingen rotasjon av væskeelementer).
- **Frekvens:** 20/25. Fasit finnes.

### C. Strømlinjer, stagnasjons- og singulære punkter, skisse
- **Krav:** Stagnasjonspunkt: løs `v = 0` (begge komponenter). Singulært punkt: der `|v| → ∞`. Strømlinjer: **nivåkurver til ψ** (`ψ = konstant`), eller integrer `dy/dx = vy/vx`. Fasiten finner spesielt **strømlinjene gjennom stagnasjonspunktet** (sett `ψ = ψ(stagn.)`, faktoriser). Skissen skal ha: `•` for stagnasjonspunkt, heltrukne strømlinjer, stiplede ekvipotensialer, og **piler for retning** (bestemmes av fortegnet til en hastighetskomponent i hver kvadrant).
- **Frekvens:** 19/25. Fasit finnes (med figur).
- **Omskrevet eksempel:** «Finn stagnasjonspunktene, tegn strømlinjene gjennom dem, og marker feltets retning med piler.»

### D. Sirkulasjon via Stokes' teorem
- **Krav:** `∮_C v·dr = ∬_S (∇×v)·n dσ`. Fasitens faste grep: regn `∇×v`, velg en enkel flate `S` med `C` som rand (typisk plan skive med `n = k`), og reduser flateintegralet — ofte til `(∇×v)·n × areal` når virvlingen er konstant (H2008: `−2 × πr²`). Krever **navngi teoremet** («Stokes' sats») og **kontroller orientering** (høyrehåndsregel `n ↔ C`). Ofte bes studenten regne **både** direkte som kurveintegral **og** via Stokes for å bekrefte.
- **Frekvens:** 15/25. Fasit finnes.

### E. Fluks via Gauss' divergensteorem
- **Krav:** `∯_{∂V} v·n dσ = ∭_V ∇·v dτ`. Brukes til å regne fluks gjennom en **krum delflate** ved å ta volumintegralet av `∇·v` og trekke fra fluksen gjennom en enklere delflate: `q_krum = ∭ ∇·v dτ − q_plan` (H2009 O3d, H2006, H2012 O3, V2010 O1d). **Alle `n` må peke ut av `V`** — fasiten bytter eksplisitt fortegn på den delflaten der den opprinnelige `n` pekte innover. For lukket flate om et kildefritt felt er fluksen 0 uansett form (V2007/V2008: «hvorfor blir svaret uavhengig av sentrum?»).
- **Frekvens:** 15/25. Fasit finnes.

### F. Fluks/volumfluks ved direkte flateintegral (parametrisering)
- **Krav:** Parametriser flaten `r(u,v)`, regn det fundamentale vektorproduktet `r_u × r_v`, og bruk `v·n dσ = v·(r_u × r_v) du dv`. Velg fortegn slik at `n·k > 0` (eller «ut av røret» e.l.) som oppgaven krever. Fasiten bruker gjerne **sylinderkoordinater fullt ut** for kjegle-/rørflater (H2009 O3c). **Sjekk benevning** på svaret (`m³/s` for volumfluks).
- **Frekvens:** inngår i E-oppgavene + selvstendig i V2009 O2, V2010 O1d, H2006. Fasit finnes.

### G. Bernoullis likning: betingelser + anvendelse
- **Krav:** **Skriv betingelsene eksplisitt:** ideelt/friksjonsfritt fluid, stasjonært felt, konstant tetthet. Da er `p/ρ + ½v² + gz = H₀` **konstant langs en strømlinje** — **og overalt hvis feltet er virvelfritt**. Anvend ved å **legge en strømlinje** mellom to punkter med kjent trykk/fart (typisk fri overflate der `v ≈ 0` og `p = p₀`, til et tappepunkt/innsnevring). Klassiske innkledninger: **hevert** (V2012/V2013/V2014/V2016 — finn maksimal høyde `H ≤ p₀/(ρg)` før kavitasjon), **rør med innsnevring** (V2004), **utstrømning fra tank / Torricelli** `v = √(2gh)` (H2005), **trakt** (V2011), **strøm forbi sylinder/telt** (H2006/V2007).
- **Frekvens:** 19/25. Fasit finnes.

### H. Eulers likning direkte for trykkfelt
- **Krav:** Når Bernoulli **ikke** kan brukes på tvers av strømlinjer (virvlete felt, eller trykkvariasjon vinkelrett på strømmen), bruk `ρ Dv/Dt = −∇p + ρg` komponentvis og integrer opp trykket. Fasiten (V2016 3f) er eksplisitt: for `v = α√z i` er feltet virvlete, så Bernoulli sier ingenting om `p(z)` på tvers av strømlinjene — bruk Euler, som gir det hydrostatiske `p = p₀ − ρgz` likevel. Roterende væske som fast legeme (V2015, V2018): integrer Euler i `r` og `z` for å få `p(r,z)`, deretter fri overflate fra `p = p₀`.
- **Frekvens:** 9/25, **stigende** (4/6 i 2014–2018). Fasit finnes.

### I. Varmefluks, Fouriers lov og varmeledningslikning
- **Krav:** Fouriers lov `H = −k∇T` (ren ledning) eller `H = ρcvT − k∇T` (ledning + konveksjon) — **definer alle symboler med enheter**. Total varmefluks/energistrøm gjennom en flate: `∫ H·n dσ`. Fortegn på `∂T/∂t` avgjøres fra varmelikninga `∂T/∂t + v·∇T = κ∇²T` (fast stoff: `∂T/∂t = κ∇²T`): regn `∇²T` i punktet — positiv Laplace ⇒ temperaturen stiger, negativ ⇒ synker. Stasjonær radiell ledning i **sylinderskall** gir `T(r) = A ln r + B` (V2010/V2012); i **kuleskall** gir `T(r) = A/r + B` (H2010). Randkrav `T(a)=T_a`, `T(b)=T_b` bestemmer konstantene.
- **Frekvens:** 16/25. Fasit finnes.

### J. Materialderivert / akselerasjon (lokal + konvektiv)
- **Krav:** `a = Dv/Dt = ∂v/∂t + (v·∇)v`. **Navngi leddene:** `∂v/∂t` = lokal (tidslig) akselerasjon, `(v·∇)v` = konvektiv (advektiv) akselerasjon. For stasjonære felt er den lokale null. Fasiten regner ledd for ledd, ofte i sylinderkoordinater (husk at `∂ir/∂θ = iθ` og `∂iθ/∂θ = −ir` gir sentripetalledd). Kan følges av **partikkelbane** (integrer `dr/dt = v`, H2007/V2009).
- **Frekvens:** 11/25. Fasit finnes.

### K. Hydrostatisk trykk + total trykkraft på en flate
- **Krav:** Hydrostatisk `p = p₀ − ρg z` (evt. `+ A` fra Euler). Total kraft `F = ∫ (p₀ − p) n dσ` eller `∫ p n dσ` over flaten; ofte omskrives netto trykkraft via **Gauss/divergensteoremet** til et volumintegral (Arkimedes: netto = oppdrift, H2013 akvarium, H2011 flaskebunn, V2015 kopp). Parametriser flaten, finn `n dσ`, integrer.
- **Frekvens:** 8/25. Fasit finnes.

### L. Krumlinjede (ortogonale) koordinater
- **Krav:** Skaleringsfaktorer `h_i = |∂r/∂q_i|`; **ortogonal** hvis `iu·iv = 0` osv.; **høyrehåndssystem** hvis `iu × iv = iw`; volumelement `dτ = h_u h_v h_w du dv dw`; volum = `∭ dτ`. Klassiske sett: parabolske koordinater (H2010), generelle krumlinjede (V2012, H2013), enkel lineær transformasjon (V2016).
- **Frekvens:** 5/25. Fasit finnes.

### M. Potensialstrøm ved superposisjon (navngi elementærfeltene) — eldre signaturoppgave
- **Krav:** ⚠️ Gjenkjenn og **navngi elementærstrømmene**: uniform strøm (`ψ = Uy`), **kilde/sluk** (`ψ = (A/2π)θ`, `φ = A ln r` i 2D; `φ = −A/r` i 3D), **dipol/doublet** (`ψ = −Ua²y/(x²+y²)`), **virvel** (`ψ = A ln r`, `φ = Aθ`). Superponer (lineært), finn dividing streamline `ψ = ψ(stagnasjon)` som gir f.eks. **Rankine-legeme / strøm forbi sylinder** (`r = a` er strømlinje) eller **kilde ved vegg** (speilbilde, H2007). Bruk deretter Bernoulli for trykk-/kraftfordeling (løft på telt/sylinder).
- **Frekvens:** 12/25, konsentrert 2004–2008 (8/9), fallende. Delvis fasit.

### N. Gradient, retningsderivert og enhetsnormal
- **Krav:** Retningsderivert `= ∇h·û` (V2012 terreng). Raskeste vei til høyere verdi = langs `+∇T`; til lavere = langs `−∇T` («myggen», V2012–V2014, H2012). Enhetsnormal til nivåflate `f = C`: `n = ∇f/|∇f|` (V2010 vis at gradienten står normalt på flaten; H2011 flaskebunn `n` + `dσ`).
- **Frekvens:** gradient/retningsderivert 6/25; enhetsnormal 5/25. Fasit finnes.

### O. Utledninger (teori)
- **Krav:** ⚠️ **Utled kontinuitetslikninga** fra massebevaring: `∂/∂t ∫ρ dτ = −∮ ρv·n dσ`, bruk Gauss ⇒ `∂ρ/∂t + ∇·(ρv) = 0` (H2008). **Utled varmeledningslikninga** fra energibevaring (V2009). **Vis at φ er veluavhengig** for virvelfritt felt via Stokes (H2009 O2). **Vis at ∇f ⊥ nivåflate** (V2010). Disse krever ryddig navngivning av teoremer og forutsetninger.
- **Frekvens:** utledninger totalt ~5/25. Fasit finnes.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og fasitene 2006–2017)
1. **Navngi begreper og teoremer eksplisitt.** Settene ber ordrett om det: «Navngi tydelig hva som er divergens og hva som er virvling», «Hva heter integralsatsen?», «Gi navn til feltene». Fasiten skriver «Stokes' sats», «Gauss' sats», «kilde», «dipol», «uniform strøm».
2. **Oppgi eksistensbetingelser før du finner ψ/φ.** Fasiten sier eksplisitt «feltet er divergensfritt og todimensjonalt, derfor finnes en strømfunksjon» / «feltet er ikke virvelfritt, derfor finnes ikke et potensial» (V2016 3c). Å bare finne funksjonen uten å begrunne eksistensen gir ikke full uttelling.
3. **Betingelsene for Bernoulli skal skrives ned hver gang** (ideelt fluid, stasjonært, konstant tetthet; konstant langs strømlinje / overalt hvis virvelfri). Dette er et eget poeng i mange sett.
4. **Dimensjonskontroll premieres.** Fasiten setter opp benevnings-tabeller (`ρ ∼ kg/m³`, `v ∼ m/s`, `H ∼ J/(m²s)`) og verifiserer at sluttsvaret har riktig enhet — og påpeker at **andre enhetsvalg (ikke-SI) godtas fullt ut** så lenge de er konsistente.
5. **Fortegns- og konstantfrihet godtas.** Fasiten skriver rutinemessig «det aksepteres fullt ut at svaret har motsatt fortegn, det avhenger av hvordan strømfunksjonen er definert» og «`+ C` hvor `C` er en vilkårlig konstant». Sensor straffer *ikke* et konsistent fortegns-/konstantvalg.
6. **Orientering og normalretning kontrolleres hver gang** i fluks-/sirkulasjonsoppgaver: `n` skal peke ut av volumet (Gauss), og randorienteringen matche normalen (Stokes, høyrehåndsregel). Fasiten bytter fortegn eksplisitt der `n` snus.
7. **Fysisk gyldighetsområde skal diskuteres.** Trykk kan ikke bli negativt / under damptrykket ⇒ **kavitasjon** setter grense på `|x|` eller `H` (H2009 1d, V2016 O1). Modeller som er urealistiske langt unna origo/bakken skal flagges (H2013 O2a, V2016 O3).
8. **Alternative løsningsveier honoreres.** Fasiten viser gjerne to metoder (direkte kurveintegral *og* Stokes; sylinder- *og* kartesiske koordinater) og godtar begge; å bekrefte samme svar to veier er ofte selve oppgaven.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: regne `∇·v` og `∇×v`, finne ψ/φ ved antiderivasjon, sette opp og regne et enkelt flate-/kurveintegral, bruke Fouriers lov, sette opp Bernoulli mellom to punkter.
- **Midtsjiktet** behersker i tillegg: eksistensbegrunnelse for ψ/φ, strømlinjer *gjennom stagnasjonspunkt* med korrekt skisse og retningspiler, Stokes/Gauss med riktig orientering, dimensjonskontroll, radiell varmeledning med randkrav.
- **Toppsjiktet** kjennetegnes av: (i) **å velge riktig trykklikning** — vite når Bernoulli er ugyldig på tvers av strømlinjer og bytte til Euler (V2016 3f er den reneste karakterskilleren i arkivet); (ii) **fri-overflate-problemer** (`p = p₀` gir `z = η(r)` for roterende/strømmende væske); (iii) **superposisjon + dividing streamline** (Rankine-legeme, kilde ved vegg via speilbilde); (iv) **kavitasjons-/gyldighetsdiskusjon**; (v) å se og bruke **delpunkt-koblingene** (Gauss på en alt utregnet fluks, gjenbruk av ψ/trykk).

---

## 5. Typiske feil (bygget inn i oppgavene eller synlige i fasitpraksis)

1. **Forveksle eksistensbetingelsene:** hevde at `φ` finnes for et virvlete felt, eller at `ψ` finnes uten at feltet er divergensfritt. `φ ⇔ ∇×v = 0`, `ψ ⇔ ∇·v = 0` (2D) — å bytte om disse er den vanligste konseptuelle feilen.
2. **Fortegnsfeil i ψ-relasjonene** (`vr = −(1/r)∂ψ/∂θ`, `vθ = ∂ψ/∂r`) — leddene byttes eller får feil fortegn. (Selve fortegnskonvensjonen er fri, men den må brukes *konsistent*.)
3. **Bruke Bernoulli på tvers av strømlinjer i et virvlete felt.** Bernoulli-konstanten er bare felles overalt hvis feltet er virvelfritt; ellers gjelder den kun langs én strømlinje. Å bruke den til å sammenligne punkter på ulike strømlinjer i et rotasjonsfelt gir feil trykk — man må bruke Euler (V2016).
4. **Glemme å navngi teoremet / begrunne eksistens** — poeng trekkes selv om regningen er riktig, fordi settene eksplisitt ber om navn og betingelser.
5. **Feil normalretning / orientering:** `n` peker innover i stedet for ut av volumet i Gauss, eller randkurve og normal bryter høyrehåndsregelen i Stokes ⇒ fortegnsfeil som forplanter seg i hele kjeden.
6. **Hoppe over dimensjonskontroll** når den er etterspurt, eller sette opp en benevning som ikke går opp (glemmer at `∇` har dimensjon `1/m`).
7. **Feil operator i krumlinjede koordinater:** bruke kartesisk `∇·v` eller `∇²` i sylinder-/kulekoordinater i stedet for de vekttunge formlene med `1/r`, `r²`, `sin θ`.
8. **Glemme kavitasjons-/gyldighetsgrensen:** oppgi svaret uten å diskutere at trykket ikke kan bli negativt (grense på `H` i hevert, på `r` nær en kilde/virvel, på `|x|`).
9. **Feil retning for «myggen»:** fly langs `−∇T` for å komme til kaldere, `+∇T` for varmere — fortegnet forveksles.
10. **Regne `∇²T`-fortegnet feil** og dermed konkludere feil om temperaturen stiger eller synker ved `t = t₀`.
11. **Konvektivt ledd i sylinderkoordinater:** glemme sentripetalbidraget fra `∂ir/∂θ = iθ` når `(v·∇)v` regnes.
12. **Tidsfelle:** de fysisk innkledde 3–4-delers oppgavene (hevert + trykkraft + fri overflate) er tunge; å bruke for lang tid på skisser og elementærfelt stjeler fra de dyre trykk-/integralsats-punktene.

---

## 6. Teorem- og notasjonsapparat

### Utdelte hjelpemidler
- **Rottmann, Matematische Formelsammlung** (standard integraler, trig, serier) — alltid tillatt.
- **Formeltillegg (2 sider, fra 2009):** operatorene `∇φ`, `∇·v`, `∇×v`, `∇²` i **kartesiske, sylinder- og kulekoordinater**; strømfunksjon–potensial-relasjonene i kartesiske og polare koordinater; materialderivert `Dv/Dt = ∂v/∂t + v·∇v`; integralsatsene; skaleringsfaktorer.
- **NB:** I de eldste settene (2004–2008) er **ingen** formeltillegg gitt — de nødvendige formlene (gradient/divergens i polar, ψ-relasjoner) er skrevet inn i oppgaveteksten. Boken bør derfor lære studenten å **utlede/huske** disse, ikke bare slå dem opp.

### Må beherskes aktivt (kunne anvende og navngi)
- **Feltoperatorer:** gradient `∇φ`; divergens `∇·v`; virvling/curl `∇×v`; Laplace `∇²φ` — i kartesiske, sylinder- (`∇·v = (1/r)∂(rvr)/∂r + (1/r)∂vθ/∂θ + ∂vz/∂z`) og kulekoordinater.
- **Strømfunksjon og potensial:** eksistensbetingelser (virvelfri ⇒ φ; divergensfri 2D ⇒ ψ), potensialstrøm ⇒ `∇²φ = 0`; relasjonene i kartesiske og polare koordinater; strømlinjer = `ψ = konst`, ekvipotensialer = `φ = konst`, og at de står normalt på hverandre.
- **Integralsatser:** **Gauss' divergensteorem** `∭∇·v dτ = ∯v·n dσ`; **Stokes' teorem** `∮v·dr = ∬(∇×v)·n dσ`; Greens teorem i planet som 2D-spesialtilfelle av Stokes. Orientering/høyrehåndsregel.
- **Kurve- og flateintegraler:** sirkulasjon `Γ = ∮v·dr`; fluks/volumfluks `Q = ∫v·n dσ`; parametrisering av kurver og flater, fundamentalt vektorprodukt `r_u × r_v`, `n dσ`.
- **Fluidkinematikk:** hastighetsfelt, strømlinjer, stagnasjons-/singulære punkter, materialderivert (lokal + konvektiv akselerasjon), partikkelbaner.
- **Fluiddynamikk:** kontinuitetslikninga `∂ρ/∂t + ∇·(ρv) = 0` (og inkompressibelt `∇·v = 0`); **Eulers likning** `ρDv/Dt = −∇p + ρg`; **Bernoullis likning** `p/ρ + ½v² + gz = H₀` med betingelser; hydrostatisk trykk og trykkraft (kraftintegral); fri overflate `p = p₀`.
- **Elementær potensialstrøm:** uniform strøm, kilde/sluk (2D og 3D), dipol/doublet, virvel; superposisjon; Rankine-legeme, strøm forbi sylinder, kilde/sluk ved vegg (speilbilde).
- **Varmetransport:** Fouriers lov `H = −k∇T` (+ konveksjon `ρcvT`); varmeledningslikninga `∂T/∂t + v·∇T = κ∇²T`; radiell stasjonær ledning i sylinder (`A ln r + B`) og kule (`A/r + B`).
- **Krumlinjede koordinater:** skaleringsfaktorer, ortogonalitet, høyrehåndssystem, volumelement.
- **Dimensjonsanalyse:** benevning til feltstørrelser og konstanter; SI-konsistens.

### Bevis/utledninger som kreves aktivt
- Utled **kontinuitetslikninga** fra massebevaring (Gauss). — H2008.
- Utled **varmeledningslikninga** fra energibevaring. — V2009.
- Vis at **hastighetspotensialet er veiuavhengig** for virvelfritt felt (Stokes). — H2009.
- Vis at **gradienten står normalt på en nivåflate** `f = C`. — V2010.
- Vis at **ekviskalarkurvene til φ og ψ står normalt** på hverandre. — V2004/V2005/H2004/V2011/H2010/H2012.

### Notasjonskonvensjoner boken bør speile
`∇φ` gradient; `∇·v` divergens; `∇×v` virvling/curl; `∇²` Laplace; `ψ` strømfunksjon, `φ` (hastighets)potensial; `ir, iθ, iz` / `ir, iθ, iφ` enhetskoordinatvektorer i sylinder/kule; `Dv/Dt` materialderivert; `H₀` Bernoulli-konstant; `κ` varmediffusivitet, `k` varmeledningstall, `c` spesifikk varmekapasitet, `H` varmeflukstetthet; `η(r)` fri overflate; `∼` for «har benevning». Eksakte svar; fysiske enheter oppgis.

---

## 7. Prognose og prioritering

> MEK1100 er så stabilt at prognosen er tryggere enn for de fleste emner — men hviler på et arkiv som **stopper i V2018**. Med et 8-årig hull mot dagens undervisning (aktiv vår 2026) må boken **primært trene den dokumenterte, svært stabile arkitekturen**, men holdes åpen for at emneansvarlig kan ha justert vekting. Reverifiser mot første tilgjengelige sett fra 2019 og senere.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Strømfunksjon ψ og potensial φ: eksistens (navngi betingelser) + antiderivasjon + strømlinjer/ekvipotensialer/stagnasjonspunkt/skisse.** 96 %, åpner nesten hvert sett. Bokens absolutte kjerne.
2. **Divergens og virvling** i kartesiske/sylinder-/kulekoordinater, med fysisk tolkning og navngivning. 80 %.
3. **Sirkulasjon via Stokes** og **fluks via Gauss** — inkludert «regn to veier og bekreft», krum delflate via `∭∇·v − q_plan`, og korrekt orientering. 60 % hver.
4. **Bernoulli: betingelser + anvendelse** (hevert, tank, innsnevring, sylinder) med kavitasjonsgrense. 76 %.
5. **Varmefluks / Fouriers lov / varmeledning** med enhetsanalyse, `∂T/∂t`-fortegn og radiell ledning (sylinder/kule). 64 %.

### Nivå 2 — må kunne (bredde + karakterskiller)
6. **Eulers likning direkte for trykk** — og skillet Bernoulli vs. Euler (virvlete felt, trykk på tvers av strømlinjer). 36 %, **stigende**, den reneste toppkarakter-skilleren.
7. **Materialderivert / akselerasjon (lokal + konvektiv)** + partikkelbane. 44 %.
8. **Hydrostatisk trykk + total trykkraft på flate** (kraftintegral, Gauss/oppdrift). 32 %.
9. **Fri overflateform `z = η(r)`** for roterende/strømmende væske. 24 %, stigende.
10. **Dimensjonsanalyse** som gjennomgående verktøy (ikke bare egen oppgave). 60 %.

### Nivå 3 — bør dekkes (periodisk / eldre / breddekrav)
11. **Krumlinjede koordinater** (skaleringsfaktorer, ortogonalitet, volumelement). 20 %.
12. **Elementær potensialstrøm ved superposisjon** (kilde/sluk/dipol/virvel, Rankine, kilde ved vegg). 48 %, men fallende — hold som beredskap, særlig fordi den er tung når den kommer.
13. **Gradient/retningsderivert, enhetsnormal til nivåflate, ekviskalar-ortogonalitet.** 20–24 %.
14. **Teoriutledninger** (kontinuitet, varmeledning, veiuavhengighet av φ). ~20 % samlet.

### Konkret prognose for neste tilgjengelige eksamen
Basert på den stabile 2011–2018-malen (mest sannsynlig fortsatt gjeldende): **10 likt vektede delspørsmål over 4 timer**, 3–5 fysisk innkledde hovedoppgaver, med:
- **O1:** et 2D-felt → divergens/virvling, ψ og φ (eksistens + finn), strømlinjer + stagnasjonspunkt + skisse.
- **O2:** en integralsats — sirkulasjon via Stokes eller fluks via Gauss, gjerne «to veier»; evt. parametrisert flate.
- **O3:** varmeproblem — Fouriers lov + enheter + `∂T/∂t`-fortegn, eller radiell ledning i sylinder/kule.
- **O4:** trykk — Bernoulli (hevert/rør) eller Euler (roterende/virvlet væske) + fri overflate + kavitasjons-/kraftdiskusjon.
- **Innimellom:** krumlinjede koordinater eller en teoriutledning som «teori-oppgave».

**Usikkerhetsmoment:** hele prognosen bygger på sett t.o.m. 2018. Verifiser vektingen mot nyere sett så snart de foreligger; sjekk særlig om varme-blokka eller potensialstrøm-katalogen har endret vekt, og om formeltillegget er utvidet.

### Overlapp med MAT1110 (delt vektoranalyse)
MEK1100 og MAT1110 deler **hele det matematiske vektoranalyse-maskineriet**; MEK1100 legger et fysikk-/strømningslag oppå det.

| Verktøy | I MAT1110 | I MEK1100 |
|---|---|---|
| Gradient, divergens, curl | Innføres som operatorer | Forutsettes; brukes på hastighets-/varmefelt, tolkes fysisk (kildefri, virvelfri) |
| Linje-/flateintegral, parametrisering, `r_u × r_v` | Sentralt (fluks, buelengde) | Sentralt (sirkulasjon, volumfluks, kraftintegral) |
| **Gauss' divergensteorem** | Ny signaturoppgave fra V2025 | Fast ryggrad hele veien (fluks, kontinuitetsutledning) |
| **Stokes' teorem** | Ny (konte 2025) | Fast ryggrad (sirkulasjon) |
| **Greens teorem** | Fast (60 %) | Inngår som 2D-Stokes |
| Sylinder-/kulekoordinater | Volum-/trippelintegral | Operatorer + varmeledning + parametrisering |
| Konservativt felt / potensial | `∮ = 0`, `∇×F = 0`, potensialfunksjon | **Samme idé** som hastighetspotensial `φ` (virvelfritt ⇒ konservativt) |
| Skalar-/vektorfelt, nivåflater | Nivåkurver, gradient normalt | Ekviskalarflater, `n = ∇f/|∇f|` |

**Nytt i MEK1100 (ikke i MAT1110):** strømfunksjon `ψ` og eksistensdualiteten ψ↔divergensfri / φ↔virvelfri; fluidkinematikk (materialderivert, strømlinjer, stagnasjonspunkt); Eulers og Bernoullis likninger; kontinuitetslikninga; varmeledning/Fouriers lov; elementær potensialstrøm (kilde/sluk/dipol/virvel); krumlinjede koordinaters skaleringsfaktorer; fri overflate; dimensjonsanalyse av fysiske felt.

**Konsekvens for boken:** En student som har tatt MAT1110s vektoranalyse-blokk har **det matematiske apparatet** (div/curl/gradient, Gauss/Stokes/Green, flate-/kurveintegral, koordinatsystemer, konservative felt). Boken kan **forutsette dette og bygge bro** på de tre siste radene i tabellen, men må bygge det fysiske tolkningslaget (potensial↔virvelfri, strømfunksjon↔divergensfri) og **hele fluid-/varmedelen** fra grunnen. Motsatt vei kan MEK1100-kapitlene om Gauss/Stokes/parametrisering gjenbrukes nesten direkte som støtte for MAT1110s nye vektoranalyse-regime.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MEK1100/`.

**Offisielle løsningsforslag/fasiter lest (17):** `fasit/MEK1100-H2006-fasit.pdf`, `H2007`, `H2008`, `H2009`, `H2010`, `H2011`, `H2012`, `H2013`, `V2006`, `V2009`, `V2011`, `V2012`, `V2013`, `V2014`, `V2015-fasit` (+ `V2015-losningsforslag`), `V2016`, `V2017`. Grundig lest: H2006, H2007, H2008, H2009, V2009, H2012, V2013, V2016 (fyldige, med metode og figurer).

**Eksamensoppgaver lest grundig (siste ~8 år, 2011–2018):** `eksamen/MEK1100-V2018.pdf`, `V2017`, `V2016`, `V2015`, `V2014`, `V2013`, `V2012`, `V2011`, `H2013`, `H2012`, `H2011`.

**Eksamensoppgaver kartlagt oppgave-for-oppgave for temaregistrering (eldre, skummet, 2004–2010):** `eksamen/MEK1100-V2004…V2010` og `H2004…H2010` (14 sett; jf. del 2). De håndskrevne fasitene 2004–2008 er innskannede bilder uten tekstlag og er kartlagt via oppgavetekst + parallelle senere fasiter.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad: `fagbeskrivelse-mek1100.md`).

**Forbilde:** `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (beslektet vektoranalyse, brukt til strukturmal og overlappskartlegging) og `docs/hoyskole-boker/fys1120/` (feltteori).

**Pensumreferanser (nevnt i fasitene, verifiser mot gjeldende emneside):** Gjevik & Fagerland, *Feltteori og vektoranalyse* (UiO-kompendium), og Matthews, *Vector Calculus*.

**Merknader om kildene:**
- **Hull i arkivet:** Ingen sett etter **V2018** (8-årig gap mot dagens aktive undervisning) og **ingen midtsemestereksamener**. Etter H2013 gikk emnet over til **kun vår-eksamen**. Konklusjonene i del 1, 2 og 7 må reverifiseres mot første tilgjengelige sett fra 2019 og senere.
- **Fasithull:** De eldste fasitene (2004–2008) er kun innskannede håndskrevne ark; metodekrav for disse settene er utledet fra oppgavetekst + faglig standard og fra de mange fyldige senere fasitene, og er merket ⚠️ der de ikke er direkte sensor-verifisert.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, feltoperatorer og teoremnavn er standard fagnotasjon.
