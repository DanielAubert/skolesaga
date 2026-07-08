# Eksamensanalyse: MA1301 Tallteori (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på arkivet i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1301/` (82 PDF-er, 2003–2025). Kjernekorpuset er **15 løsningsforslag til ordinære slutt-/kont-eksamener 2014–2025 lest i detalj**, supplert med eldre oppgavesett og løsningsforslag (2003–2013) lest/skummet for temaregistrering, samt midtsemesterprøver med løsning. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Matematisk notasjon og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det; usikre punkter er merket «(verifiser)».

---

## 1. Eksamensform og utvikling

MA1301 «Tallteori» (7,5 studiepoeng) undervises om høsten og vurderes med **én skriftlig skoleeksamen på 4 timer** (kl. 09:00–13:00) som teller 100 %. Karakterskala A–F. Opptakskrav R2 fra videregående. I tillegg finnes vanligvis en **utsatt/kontinuasjonseksamen om sommeren (august)** — arkivet har flere slike (2019, 2023, 2024-kont, 2025-kont), og de er identiske i form og pensum med desembereksamen. Emnet har delt kode med **MA6301** (samme oppgavesett, videreutdanningsvariant); flere sett er merket «MA1301/MA6301».

Den viktigste form-observasjonen er at eksamen er **helt begrunnelsesbasert langsvar** hele veien gjennom arkivet — det finnes ingen flervalgsepoke slik MAT1100 hadde. Settet består av **7–9 hovedoppgaver med delpunkter**, i nyere år eksplisitt organisert som **«10 delpunkt som alle teller likt»**.

### Formathistorikk

| Periode | Struktur | Hjelpemidler | Kommentar |
|---|---|---|---|
| 2003–2011 | 5–8 oppgaver, begrunnet langsvar, 4 timer | Kode D: bestemt/enkel kalkulator (HP30S nevnt i 2007) | Bredt tema-repertoar; kjedebrøk/Pell/irrasjonalitet var faste (2007–2009) |
| 2012–2019 | 8–9 oppgaver med delpunkter, likt vektet | Kode D: enkel kalkulator | Fast «kjerne-dramaturgi» (se under) etablerer seg |
| 2020 (korona) | 10 delpunkt, likt vektet | **Kode A: alle hjelpemidler + alle kalkulatorer** | Instruks skjerpet: «i og med at alle hjelpemidler er tillatt, er det viktig at svarene er godt begrunnet» |
| 2021–2024 (des.) | 10 delpunkt, likt vektet | Kode D: bestemt, enkel kalkulator | «Alle svar må begrunnes» |
| Kont-sett 2024/2025 (aug.) | 10 delpunkt (7 hovedoppgaver), likt vektet | Enkelte kont-sett Kode A (2025-kont) | Speiler desemberformen |

**Konstanter på tvers av alle år:**
- **Ingen formelsamling og ingen tabeller** — alt regnes for hånd med enkel kalkulator (Euklids algoritme, potenser modulo n, faktorisering). Kalkulatoren brukes til aritmetikk, ikke til å omgå metodene.
- **Fast dramaturgi** (tydelig fra ~2014): settet åpner nesten alltid med (1) en **lineær diofantisk likning / lineær kongruens via Euklids algoritme** og (2) et **kinesisk restteorem-system**, går videre til (3) **RSA / dekryptering** og (4) **Fermat/Euler/Wilson-restberegninger med fakultet**, deretter (5) **kvadratiske rester / Legendre / resiprositet** og (6–8) **orden / primitive røtter / tallteoretiske funksjoner / bevisoppgaver**.
- Hver hovedoppgave er praktisk talt selvstendig (ikke kjedet slik MAT1100-oppgavene er) — ett tema per oppgave. Tidsbudsjett ~24–30 min per hovedoppgave / ~24 min per «delpunkt».
- Kombinasjonen **regneferdighet (Euklid frem og tilbake, modulær potensopphøyning) + bevis (induksjon, motsigelse, delelighet)** går igjen i hvert eneste sett.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett der temaet forekommer som (del)oppgave. Kjernekorpus = de **15 løsningsforslagene 2014–2025** lest i detalj (2014h, 2015h, 2016h, 2017h, 2017-kont, 2018h, 2019-kont, 2020h, 2021h, 2022h, 2022-kont, 2023h, 2023-kont, 2024h, 2025-kont). Tallene er opptelt fra faktisk innhold i disse settene.

| Tema | Forekomst (av 15) | Gjenganger-score | Kommentar |
|---|---|---|---|
| **Euklids algoritme (frem + baklengs / Bézout)** | 15 | **100 %** | Fundamentet; brukes i diofant, lineær kongruens, RSA-invers. Åpner nesten alltid settet |
| **Eulers ϕ-funksjon + Eulers teorem** (restberegning) | 14 | **93 %** | ϕ(n) via faktorisering, deretter aᵠ⁽ⁿ⁾≡1; regn ut aᴺ mod n |
| **Kinesisk restteorem (CRT)** | 12 | **80 %** | System av lineære kongruenser; ofte med forenkling/forkorting først |
| **Wilsons teorem** ((p−1)!≡−1) | 11 | **73 %** | Nesten alltid koblet til rest av k·(n!) mod p |
| **RSA / dekryptering** | 10 | **67 %** | Finn d fra e·d≡1 mod ϕ(n); dekrypter cᵈ mod n. Egen oppgave i de fleste år |
| **Lineær diofantisk likning** (ax+by=c, full løsningsmengde) | 10 | **67 %** | Ofte med parameter i koeffisientene (vis gcd=1 via lineærkombinasjon) |
| **Legendre-symbol / kvadratiske rester / resiprositet** | 10 | **67 %** | Avgjør om x²≡a (mod p) er løsbar; kvadratisk resiprositetslov + multiplikativitet |
| **Orden modulo n / primitive røtter** | 9 | **60 %** | Orden deler ϕ(n); finn/verifiser primitiv rot; tell tall av gitt orden |
| **Fermats lille teorem** (aᵖ⁻¹≡1) | 8 | **53 %** | Eget verktøy i restberegninger; grensen mot Euler er flytende |
| **Induksjonsbevis** | 8 | **53 %** | Summeformler, Fibonacci-identiteter, ulikheter, aᵖ≡a |
| **Tallteoretiske funksjoner** (τ, σ, multiplikativitet) | 7 | **47 %** | Regn τ(n)/σ(n); finn minste n med gitt τ(n); multiplikativ-egenskap i bevis |
| **Delelighet / primtallsteori-bevis** (Euklids lemma, aritmetikkens fundamentalteorem, sammensatte tall) | ~8 | **~53 %** | Vis mn\|k, 2ⁿ−1 sammensatt hvis n sammensatt, p\|C(p,k), uendelig mange primtall av en type |
| **Fibonacci-tall / rekursive følger** | 3 | **20 %** | 2014h, 2015h, 2017h (identiteter bevist ved induksjon); vanligere i eldre sett |
| **Pytagoreiske tripler** (primitive, parametrisering) | 3 | **20 %** | 2015h, 2017h + eldre; 3\|xy-typen, finn tripler med gitt katet |
| **Kjedebrøk / konvergenter** | 2 (+ eldre) | **~13 %** | 2016h (√72 = [8;2,16], konvergent C₃); fast tema 2007–2009 |
| **Pells likning** | 0 i kjernekorpus (2007–2009) | **spesialtema** | Koblet til kjedebrøk; kun i 2007–2009-æraen i arkivet |
| **Irrasjonalitet-bevis** (∛7 e.l.) | 0 i kjernekorpus (2007) | **spesialtema** | Eldre; motsigelsesbevis via delelighet |

### Viktigste funn

1. **Fem søyler bærer hvert eneste sett:** Euklids algoritme (100 %), Euler/ϕ (93 %), CRT (80 %), Wilson (73 %) og RSA (67 %). En student som behersker disse fem mekanisk henter ~5 av 10 delpunkter uansett årgang. Boken må gi disse dominerende plass med rikelig regnetrening.

2. **«Store fire»-teoremene deler arbeidet:** Fermats lille teorem, Eulers teorem, Wilsons teorem og CRT er verktøykassen for **restberegninger**. Signaturoppgaven er *«finn resten når du deler [stort uttrykk, ofte med fakultet] på [modulus]»* — den kombinerer rutinemessig faktorisering av modulus → ϕ → Euler-reduksjon av eksponent → Wilson-triks på fakultetet. Denne oppgavetypen finnes i praktisk talt hvert sett fra 2014 og frem.

3. **Kvadratisk resiprositet er den tydelige karakterskilleren i andre halvdel av settet:** Legendre-symbol-oppgaven (67 %) krever sikker bruk av resiprositetsloven, multiplikativitet og periodisitet, og supplementsregelen for (2/p). Studenter som ikke har automatisert regnereglene taper her.

4. **Orden/primitive røtter (60 %) og tallteoretiske funksjoner (47 %) er den «øvre» halvdelen** som skiller C fra A: «orden deler ϕ(n)», eksistens/telling av primitive røtter, τ og σ som multiplikative funksjoner.

5. **Bevisoppgaver er obligatoriske, ikke valgfrie:** Hvert sett har minst én ren bevisoppgave (induksjon, motsigelse eller delelighetsargument). Induksjon (53 %) er den vanligste bevisformen og er nesten alltid enten en summeformel, en Fibonacci-identitet, en ulikhet eller «aᵖ≡a (mod p)».

6. **Spesialtemaene roterer:** Emnebeskrivelsen nevner «varierende spesialtema» (kjedebrøk, Pell, rasjonale approksimasjoner). Arkivet viser at disse var faste i **2007–2009** (kjedebrøk + Pell + irrasjonalitet), forsvant nesten helt, og dukket opp igjen som ett innslag (kjedebrøk, 2016). De er lavfrekvente i kjernekorpuset, men boken bør dekke dem fordi emnebeskrivelsen holder dem åpne og de kan gjenoppstå (verifiser mot nyeste sett).

---

## 3. Oppgavetype-katalog

De faste sjangrene, med metodekrav (slik løsningsforslagene fører dem), frekvens og ett omskrevet eksempel per sjanger.

### A. Lineær diofantisk likning (ax + by = c)
- **Krav:** Regn gcd(a,b) med **Euklids algoritme**, sjekk at gcd \| c (ellers ingen løsning). **Reverser algoritmen** for å skrive gcd = ax₀+by₀ (Bézout), skaler opp til c. Skriv **hele løsningsmengden**: x = x₀ + (b/d)t, y = y₀ − (a/d)t, t ∈ ℤ. Variant: koeffisientene inneholder en parameter (f.eks. 5a−3 og 2a−1) — vis gcd = 1 ved å presentere 1 som en eksplisitt lineærkombinasjon. Variant: bare løsninger i et gitt intervall for y (2017h) → finn hvilke t-verdier som treffer.
- **Frekvens:** 10/15 (nesten alltid oppgave 1).
- **Omskrevet eksempel:** «Finn samtlige heltallsløsninger av 582x + 402y = 6, og angi den generelle løsningen.»

### B. Lineær kongruens (ax ≡ b mod m)
- **Krav:** Sett d = gcd(a,m); løsbar ⇔ d \| b, og gir da d inkongruente løsninger modulo m. Forkort kongruensen med d når mulig (deler også modulusen). Finn invers via Euklid baklengs, gang opp. List alle d løsningene som x₀ + k·(m/d).
- **Frekvens:** Inngår i ~10/15 (ofte del av diofant/RSA/CRT-oppgaver).
- **Omskrevet eksempel:** «Løs 164x ≡ 64 (mod 200), og oppgi alle inkongruente løsninger.»

### C. Kinesisk restteorem (system av kongruenser)
- **Krav:** Sjekk at modulusene er **parvis relativt primiske** (påpekes eksplisitt). Forenkle hver kongruens først (forkort, reduser koeffisient mod modulus). Standardmetode: Nₖ = M/mₖ, løs Nₖxₖ ≡ 1 (mod mₖ), sett x ≡ Σ bₖNₖxₖ (mod M). Alternativt **suksessiv innsetting** (fasit sier begge er fullgode). Variant der modulusene *ikke* er parvis primiske: bruk «a≡b (mod mn) ⇔ a≡b (mod m) og (mod n)» til å splitte/rydde (2016h). Uløselig-variant: utled motsigelse modulo en felles faktor (2014h).
- **Frekvens:** 12/15 (vanligvis oppgave 2 eller 3).
- **Omskrevet eksempel:** «Finn det minste positive heltallet x med x ≡ 0 (mod 9), x ≡ 2 (mod 4) og x ≡ 1 (mod 5).»

### D. RSA / dekryptering
- **Krav:** n = pq, ϕ(n) = (p−1)(q−1). Offentlig nøkkel (n,e); finn privat d ved å løse e·d ≡ 1 (mod ϕ(n)) (Euklid). Dekrypter: m ≡ cᵈ (mod n) med **effektiv potensopphøyning** (kvadrer-og-multipliser, binærutvikling av eksponenten — fasit skriver eksponenten binært og bygger opp potensene). Variant: bygg et helt nøkkelpar fra oppgitte p, q, e (2016h); variant: forklar/bevis hvorfor (Mᵉ)ᵈ ≡ M (mod n) (2019).
- **Frekvens:** 10/15 (nesten alltid egen oppgave).
- **Omskrevet eksempel:** «I et RSA-system er den offentlige nøkkelen (n,e) = (253, 13). Finn dekrypteringseksponenten og dekrypter meldingen c = 4.»

### E. Restberegning med Fermat/Euler + Wilson (fakultetsoppgaven)
- **Krav:** To sammenvevde teknikker:
  - **Eksponentreduksjon:** faktoriser modulus, regn ϕ, sjekk gcd(a,n)=1, reduser eksponenten modulo ϕ(n) (Euler) eller mod (p−1) (Fermat). Håndter tilfellet gcd≠1 separat (kan ikke bruke Euler — argumenter direkte eller via induksjon).
  - **Wilson-triks:** for rest av k·(m!) mod p (p primtall): bruk (p−1)! ≡ −1, skriv de manglende faktorene p−1, p−2, … som −1, −2, … mod p, forkort.
- **Frekvens:** Euler-varianten 14/15; Wilson-varianten 11/15; svært ofte i samme sett.
- **Omskrevet eksempel:** «La p = 101. Finn resten når 5·(98!) deles på 101.» (Bruk Wilson: 100! ≡ −1, skriv 99·100 ≡ (−2)(−1) mod 101, forkort.)

### F. Kvadratiske rester / Legendre-symbol / resiprositet
- **Krav:** Avgjør om x² ≡ a (mod p) er løsbar via Legendre-symbolet (a/p). Verktøy som skal automatiseres: **fullstendig multiplikativitet** (a·b/p) = (a/p)(b/p), **periodisitet** (a/p) avhenger bare av a mod p, **supplementsregel** (2/p) = ±1 etter p mod 8, **kvadratisk resiprositetslov** (p/q)(q/p) = (−1)^{(p−1)/2·(q−1)/2}. Konkluder «to løsninger» eller «ingen løsning». Variant: koble til primitiv rot (primitive røtter er aldri kvadratiske rester, 2022h). Variant: summér alle Legendre-symboler (a/p) for a = 1..p−1 (= 0).
- **Frekvens:** 10/15.
- **Omskrevet eksempel:** «Avgjør om kongruensen x² ≡ 45 (mod 59) har løsning.»

### G. Orden modulo n og primitive røtter
- **Krav:** Ordenen til a mod n er minste k≥1 med aᵏ≡1; **ordenen deler ϕ(n)** (sentralt lemma, ofte selv en bevisdel). Finn orden ved å teste divisorene av ϕ(n). Primitiv rot = element av orden ϕ(n); verifiser ved å sjekke aᵈ≢1 for alle ekte divisorer d av ϕ(n). Tell antall elementer av gitt orden (ϕ(d) stk av orden d når primitiv rot finnes); generer alle primitive røtter som rᵏ med gcd(k,ϕ(n))=1. Kunnskap om at primitive røtter finnes for 2, 4, pᵏ, 2pᵏ.
- **Frekvens:** 9/15.
- **Omskrevet eksempel:** «Vis at 8 er en primitiv rot modulo 29, og finn de to elementene mellom 1 og 28 som har orden 4.»

### H. Tallteoretiske funksjoner (τ, σ, ϕ, multiplikativitet)
- **Krav:** τ(n) = antall divisorer = Π(kᵢ+1); σ(n) = divisorsum. Bruk multiplikativitet på primtallsfaktoriseringen. Optimeringsvariant: finn **minste** n med τ(n) = gitt verdi (fordel eksponentene på de minste primtallene, faktoriser målverdien) (2020h, 2024h). Identitetsvariant: σ(n)/n = Σ_{d\|n} 1/d (2022h). Paritet: τ(n) ≡ σ(n) (mod 2) for oddetall n.
- **Frekvens:** 7/15.
- **Omskrevet eksempel:** «Finn det minste positive heltallet n med nøyaktig 16 positive divisorer.»

### I. Delelighet og primtallsteori (bevisoppgaver)
- **Krav:** Arketyper: (i) **relativt primiske ⇒ mn\|k** (via aritmetikkens fundamentalteorem, Bézout, eller Euklids lemma — alle tre godtas); (ii) **2ⁿ−1 sammensatt hvis n sammensatt** (faktoriser med geometrisk sum); (iii) **p \| C(p,k) for 1≤k≤p−1** (fra k!(p−k)!·C = p! og Euklids lemma), ofte som byggekloss til aᵖ≡a; (iv) **uendelig mange primtall ≡ 2 (mod 3)** e.l. (Euklid-stil motsigelse); (v) primtall p slik at også p+8, p+16 (eller p²+20) er primtall → case-analyse modulo 3.
- **Frekvens:** ~8/15 (minst én bevisoppgave i hvert sett).
- **Omskrevet eksempel:** «Vis at det eneste primtallet p der både p+8 og p+16 også er primtall, er p = 3.»

### J. Induksjon
- **Krav:** Full struktur: basissteg verifisert, induksjonshypotese eksplisitt formulert (fasit markerer stedet der den brukes), induksjonssteg fra n=k til n=k+1. Innhold: **summeformler** (Σm² = n(n+1)(2n+1)/6, ΣFᵢ = F_{n+2}−1, Σ av oddetallsindekserte Fibonacci = F_{2n}), **ulikheter** (C(2n,n) < 2^{2n−2}), **kongruensmønstre** (u_{n+3} ≡ uₙ mod 2), **aᵖ ≡ a (mod p)**.
- **Frekvens:** 8/15.
- **Omskrevet eksempel:** «Vis ved induksjon at 1² + 2² + ⋯ + n² = n(n+1)(2n+1)/6 for alle n ≥ 1.»

### K. Spesialtema: kjedebrøk, Pell, pytagoreiske tripler, irrasjonalitet
- **Krav (kjedebrøk):** Utvikle √D som periodisk kjedebrøk [a₀; a₁, a₂, …] ved gjentatt uttrekk av heltallsdel og invertering; regn konvergenter pₙ/qₙ med rekursjonsskjemaet (tabell over aₙ, pₙ, qₙ). **Pell:** første ikke-trivielle løsning av x²−Dy²=1 leses av fra konvergentene; generer flere via (x+y√D)ⁿ. **Pytagoreiske tripler:** primitiv parametrisering x=2st, y=s²−t², z=s²+t² med s>t, gcd(s,t)=1, ulik paritet; typisk «3 deler x eller y», eller «finn alle tripler med gitt katet». **Irrasjonalitet:** motsigelse via delelighet/uendelig nedstigning.
- **Frekvens:** Kjedebrøk 2/15 (2016h + 2007–2009); Pell/irrasjonalitet kun 2007–2009; pytagoreiske tripler 3/15.
- **Omskrevet eksempel (kjedebrøk):** «Finn kjedebrøkutviklingen til √72 og beregn konvergenten C₃.»

---

## 4. Sensorens krav (metaregler fra løsningsforslag)

1. **Alt skal begrunnes** — eksplisitt instruks på hvert sett («Alle svar må begrunnes»), og skjerpet på hjemme-/hjelpemiddel-eksamenene 2020/2025: *«i og med at alle hjelpemidler er tillatt, er det viktig at svarene er godt begrunnet»*. Et riktig sluttall uten metode teller lite.
2. **Teoremer skal navngis** når de bærer argumentet: Euklids algoritme, Bézout, det kinesiske restteoremet, Fermats lille teorem, Eulers teorem, Wilsons teorem, aritmetikkens fundamentalteorem, Euklids lemma, den kvadratiske resiprositetsloven. Fasitene skriver rutinemessig «ved Wilsons teorem», «fra Eulers teorem», «ved det kinesiske restteoremet».
3. **Føringsstandard for Euklid:** algoritmen føres linje for linje **frem** (divisjonene), og **baklengs** som eksplisitt substitusjonskjede til man har gcd = ax+by. Dette forventes fullt utskrevet, ikke bare sluttresultatet.
4. **Løsbarhet før løsning:** ved diofantiske likninger og kongruenser sjekkes og **kommenteres** løsbarhet (d \| c) og antall inkongruente løsninger *før* man løser.
5. **Hele løsningsmengden, ikke bare én løsning:** diofantiske likninger og kongruenser med flere løsninger skal ha full parametrisering / alle d restklasser. «Minste positive» skal svares eksplisitt når det spørres.
6. **Effektiv potensopphøyning skal vises:** ved store eksponenter modulo n føres kvadrer-og-multipliser / eksponentreduksjon via ϕ — ikke «kalkulatoren gir …». Fasit dokumenterer mellomstegene (binærutvikling av eksponenten).
7. **Alternative løsninger honoreres konsekvent:** løsningsforslagene presenterer ofte to (eller tre) fullgode metoder eksplisitt merket likeverdige — CRT-formel vs. suksessiv innsetting; induksjon vs. direkte argument; multiplikativitet vs. Euklids lemma. Boken bør lære minst to veier på kjernesjangrene.
8. **Case-analyse skal være uttømmende:** modulo-argumenter (p ≡ 0/1/2 mod 3) må dekke alle rester; parametriseringer må sjekke alle betingelser (s>t, gcd=1, ulik paritet).

---

## 5. Typiske feil

1. **Euklid baklengs slurves:** feil i substitusjonskjeden, eller man oppgir bare gcd uten Bézout-koeffisientene — da faller resten av diofant-/invers-oppgaven.
2. **Glemmer å skalere opp:** finner gcd = ax₀+by₀ men glemmer å multiplisere med c/d for å treffe høyresiden.
3. **Bare én løsning oppgitt:** unnlater å skrive hele løsningsmengden (t-parameter) eller alle d inkongruente restklasser; glemmer «minste positive».
4. **Bruker Euler når gcd(a,n) ≠ 1:** anvender aᵠ⁽ⁿ⁾≡1 uten å sjekke relativ primiskhet (eksplisitt advart mot i 2021-fasit: «vi kan ikke bruke Eulers teorem siden 100 og 48 ikke er relativt primiske»).
5. **Feil ϕ ved primtallspotenser:** regner ϕ(pᵏ) = pᵏ−1 i stedet for pᵏ − pᵏ⁻¹; glemmer multiplikativiteten ved sammensatte moduler.
6. **CRT uten å sjekke parvis primiskhet:** anvender standardformelen når modulusene har felles faktorer, i stedet for å rydde/splitte først.
7. **Resiprositetsloven feil:** glemmer fortegnsfaktoren (−1)^{(p−1)/2·(q−1)/2}, forveksler supplementsregelen for (2/p), eller reduserer ikke a mod p først (periodisitet).
8. **Orden ikke verifisert som minste:** viser aᵈ≡1 for én d uten å utelukke ekte divisorer; konkluderer «primitiv rot» uten å teste alle divisorer av ϕ(n).
9. **Wilson-triks feilfortegn:** skriver p−1, p−2, … som +1, +2 i stedet for −1, −2 mod p, eller forkorter med et tall som ikke er relativt primisk til modulusen.
10. **Ufullstendig case-analyse / manglende induksjonshypotese:** modulo-bevis som ikke dekker alle rester; induksjonssteg der hypotesen ikke brukes eksplisitt (fasit markerer alltid hvor den brukes).
11. **Pytagoreisk parametrisering ufullstendig:** glemmer betingelsene s>t, gcd(s,t)=1 og ulik paritet, og får dermed ikke-primitive eller dupliserte tripler.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)

**Delelighet og lineære metoder:**
- **Euklids algoritme** frem og baklengs; **Bézout** (gcd som lineærkombinasjon); gcd \| c som løsbarhetskriterium.
- **Aritmetikkens fundamentalteorem** (entydig primtallsfaktorisering) og **Euklids lemma** (p\|ab ⇒ p\|a eller p\|b) — arbeidshester i delelighetsbevis.
- **Lineær diofantisk likning:** full løsningsstruktur x = x₀+(b/d)t, y = y₀−(a/d)t.

**Kongruenser:**
- **Lineær kongruens** ax≡b (mod m): løsbarhet, antall løsninger, invers via Euklid.
- **Det kinesiske restteoremet** — eksistens/entydighet modulo produktet ved parvis primiske moduler; både formel og suksessiv innsetting.
- **Fermats lille teorem** (aᵖ⁻¹≡1 mod p) og **Eulers teorem** (aᵠ⁽ⁿ⁾≡1 mod n) med gcd-betingelsen; eksponentreduksjon.
- **Wilsons teorem** ((p−1)!≡−1 mod p) og fakultets-triksene.
- **Eulers ϕ-funksjon:** definisjon, ϕ(pᵏ)=pᵏ−pᵏ⁻¹, multiplikativitet.

**Kryptografi:**
- **RSA-algoritmen:** nøkkelgenerering (n=pq, ϕ, e·d≡1 mod ϕ(n)), kryptering/dekryptering, og korrekthetsbeviset (Mᵉ)ᵈ≡M via Fermat/Euler; effektiv modulær potensopphøyning.

**Kvadratiske rester:**
- **Legendre-symbolet** (a/p): fullstendig multiplikativitet, periodisitet, verdi ±1.
- **Eulers kriterium** (a/p) ≡ a^{(p−1)/2} (mod p).
- **Kvadratisk resiprositetslov** + supplementsregler for (−1/p) og (2/p).

**Orden og primitive røtter:**
- **Orden** modulo n; «orden deler ϕ(n)» (aᵗ≡1 ⇔ ord \| t) — sentralt lemma, ofte selv bevisdel.
- **Primitive røtter:** definisjon (orden = ϕ(n)), eksistens for 2, 4, pᵏ, 2pᵏ, telling (ϕ(ϕ(n)) stk), generering.

**Tallteoretiske funksjoner:**
- **τ(n), σ(n), ϕ(n)** som multiplikative funksjoner; formler via primtallsfaktorisering; optimeringsoppgaver (minste n med gitt τ).

**Bevisteknikk:**
- **Matematisk induksjon** (summeformler, ulikheter, kongruensmønstre, Fibonacci-identiteter).
- **Motsigelse / uendelig nedstigning** (irrasjonalitet, uendelig mange primtall av en type).
- **Case-analyse modulo m.**

### Må forstås, men testes sjeldnere / periodevis i arkivet
- **Kjedebrøk og konvergenter** (regnealgoritme + tabell) — fast 2007–2009, ett innslag 2016.
- **Pells likning** x²−Dy²=1 via kjedebrøk — kun 2007–2009 i arkivet.
- **Pytagoreiske tripler** (primitiv parametrisering) — periodisk (2015, 2017 + eldre).
- **Irrasjonalitetsbevis** — eldre (2007).
- **Rasjonale approksimasjoner** (nevnt i emnebeskrivelsen som spesialtema; ikke tydelig belagt som egen oppgavesjanger i arkivet — verifiser mot nyeste sett).

### Notasjonskonvensjoner boken bør speile
- gcd(a,b), a \| b, a ≡ b (mod m); ϕ(n), τ(n), σ(n); Legendre-symbol skrevet både (a/p) og som brøk. Euklid ført som divisjonskjede + baklengs substitusjonskjede. Fasitspråk: «parvis relativt primiske», «inkongruente løsninger modulo m», «minste positive tall som tilfredsstiller …», «det følger av [teorem] at …».

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer hele eksamen)
1. **Euklids algoritme frem + baklengs (Bézout)** — 100 % frekvens; grunnlaget for diofant, lineær kongruens og RSA-invers.
2. **Lineær diofantisk likning med full løsningsmengde** — 67 %; alltid tidlig, billige poeng med kjent oppskrift (inkl. parameter-i-koeffisient-varianten).
3. **Eulers teorem + ϕ-funksjonen (restberegning med eksponentreduksjon)** — 93 %.
4. **Det kinesiske restteoremet** — 80 %; både formel og suksessiv innsetting, inkl. ikke-primisk-modul-ryddingen.
5. **Wilsons teorem + fakultets-triks** — 73 %; nesten alltid koblet til rest av k·(n!) mod p.
6. **RSA / dekryptering** — 67 %; nøkkelgenerering + effektiv modulær potensopphøyning.

### Nivå 2 — gir bredden i poengfangsten
7. **Legendre-symbol / kvadratisk resiprositet** — 67 %; automatiser multiplikativitet, periodisitet, supplementsregler, resiprositetsloven.
8. **Orden modulo n / primitive røtter** — 60 %; «orden deler ϕ(n)», verifisering og telling.
9. **Fermats lille teorem** — 53 %; som selvstendig verktøy og som bevisbyggekloss.
10. **Induksjonsbevis** — 53 %; summeformler, ulikheter, Fibonacci-identiteter, aᵖ≡a.
11. **Delelighets-/primtallsbevis** — ~53 %; Euklids lemma, aritmetikkens fundamentalteorem, 2ⁿ−1-typen, p\|C(p,k), uendelig-mange-primtall.
12. **Tallteoretiske funksjoner τ, σ** — 47 %; multiplikativitet, minste-n-med-gitt-τ.

### Nivå 3 — bør dekkes (lav/periodisk frekvens, men pensum og karakterdifferensiering)
13. **Kjedebrøk og konvergenter** — periodisk (fast 2007–2009, gjenoppsto 2016).
14. **Pytagoreiske tripler** — periodisk (2015, 2017); primitiv parametrisering.
15. **Pells likning** — kun 2007–2009 i arkivet, men i emnebeskrivelsens spesialtema-liste.
16. **Irrasjonalitet / rasjonale approksimasjoner** — eldre/nevnt; dekk med standardmetoder, merk som lav arkivfrekvens.

### Prognose for neste eksamen (basert på 2018–2025-malen)
**10 likt vektede delpunkt fordelt på ~7 hovedoppgaver, 4 timer, enkel kalkulator, alt begrunnet.** Forventet sammensetning:
- **Oppgave 1:** lineær diofantisk likning via Euklid (svært sannsynlig med parameter i koeffisientene).
- **Oppgave 2:** restberegning som kombinerer Euler/Fermat (eksponentreduksjon) og Wilson (rest av k·(n!) mod p) — ofte 2–3 delpunkt.
- **Oppgave 3:** kinesisk restteorem-system.
- **Oppgave 4/5:** RSA (finn d + dekrypter) og/eller kvadratisk kongruens via Legendre-symbol + resiprositet.
- **Oppgave 6:** orden / primitive røtter, eller tallteoretisk funksjon (minste n med gitt τ).
- **Oppgave 7/8:** minst én ren bevisoppgave (induksjon eller delelighet/primtall), gjerne todelt der del a) beviser et lemma som brukes i del b).
- **Usikkerhetsmoment:** ett roterende spesialtema (kjedebrøk / pytagoreiske tripler / Pell). Sannsynligheten for kjedebrøk øker dersom mønsteret fra 2016 gjentas.

Boken bør kalibrere hovedtreningen mot Nivå 1–2 (som utgjør ~8 av 10 delpunkt i et typisk sett) og gi Nivå 3 solid, men mer kompakt dekning, med tydelig merking av arkivfrekvens. **Sjekk nyeste tilgjengelige sett (etter 2025) før endelig kalibrering.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1301/`. Tekst ekstrahert med `pdftotext -layout`.

**Løsningsforslag lest grundig (15, kjernekorpus 2014–2025):**
`ma1301-2014h-lf.pdf`, `ma1301-2015h-lf.pdf`, `ma1301-2016h-lf.pdf`, `ma1301-2017h-lf.pdf`, `ma1301-2017s-lf.pdf` (kont), `MA1301H2018lf.pdf`, `ma1301k2019bokmaal.pdf` (kont, oppgavetekst m/utfyllende oppgaver), `eksamen_ma1301_h2020_lf.pdf`, `eksamen_ma1301_h2021_lf.pdf`, `lf_ma1301_h2022.pdf`, `eksamen_ma1301_kont2022_lf.pdf`, `lf_kont_ma1301_s2023.pdf`, `ma1301h2023lf.pdf`, `eksamen_ma1301_h2024_lfo.pdf`, `eksamen_ma1301_kont2025_lf.pdf`.

**Løsningsforslag lest / skummet for temaregistrering (eldre + øvrige):**
`ma1301-2003h-lf.pdf`, `ma1301-2004h-lf.pdf`, `ma1301-2004v-lf.pdf`, `ma1301-2005h-lf.pdf`, `ma1301-2011h-lf.pdf`, `ma1301-2012h-lf.pdf`, `ma1301-2013h-lf.pdf`, `ma1301-2010h-lf.pdf`, `ma1301-2017h-msp-lf.pdf` (midtsemester), `ma1301msp05lf.pdf`, `ma1301msp06lf.pdf`, `msp-lf.pdf`, `ma1301-lf-msp.pdf`, `ma1301ma6301_eksamen_h2024_bm.pdf`.

**Oppgavesett (uten fasit) lest / skummet for temaregistrering:**
`EksamenH03.pdf`, `EksamenH04.pdf`, `EksamenH05.pdf`, `EksamenH07.pdf` (kjedebrøk/Pell/irrasjonalitet), `EksamenH08.pdf` (kjedebrøk/Pell), `EksamenH09.pdf` (kjedebrøk/Pell), `EksamenH10.pdf`, `EksamenV05.pdf`, `EksamenV11.pdf`, `ma1301eksh11no.pdf`, `2014.tallteori--eksamen--engelsk.pdf`, `ma1301_en.pdf`, `2013.ma1301_final.pdf`, `eksamenma1301h2023bm.pdf`, `ma1301august2024bm.pdf`, `ma1301_kont_2025_bm.pdf`, `ma1301_h2022norsk.pdf`, `ma1301_kont_s2023norsk.pdf`, `finalexam-bokmaal-v2.pdf`, `NTNU_MA1301.pdf`, samt msp/oppgave-sett (`ma1301msp05.pdf`, `ma1301msp06.pdf`, `ma1301msp07.pdf`, `msph2012.pdf`, `semesterprove.h2013.pdf`, `midtsembm.pdf`, `midtsemesterh08.pdf`, `MidtsemH09.pdf`, `MidtsemH10.pdf`, `ma1301-2014h-msp.pdf`, `ma1301-2015h-msp-nb.pdf`, `ma1301-2016h-msp-nb.pdf`, `ma1301-2017h-msp-nb.pdf`, `ma1301-2015h-nb.pdf`, `ma1301-2016h-nb.pdf`, `ma1301-2016s-nb.pdf`, `ma1301-2017h-nb.pdf`, `ma1301-2017s-nb.pdf`, `h2017_7.pdf`).

**Rene skann — pdftotext ga tom/ubrukelig output, hoppet over (11):**
`EksamenH06.pdf`, `EksamenV10.pdf`, `finalexam-solutionguide.pdf`, `ma1301-2006h-lf.pdf`, `ma1301-2007h-lf.pdf`, `ma1301-2008h-lf.pdf`, `ma1301-2009h-lf.pdf`, `ma1301-2010v-lf.pdf`, `MA1301-midtsem-lf.pdf`, `MA1301H2018bokmaal_copy.pdf` (oppgavetekst; fasiten `MA1301H2018lf.pdf` ble lest i stedet).

### Merknader om kildene
- **Hull i arkivet:** Løsningsforslagene for **2006–2009** er rene skann (ikke maskinlesbare) — temaene for disse årene (kjedebrøk, Pell, irrasjonalitet) er registrert fra de tilhørende *oppgavetekstene* (`EksamenH07/08/09.pdf`), ikke fra fasitene. Metodekravene for skann-årene er derfor utledet fra oppgavetekst + kontinuiteten i fasitpraksis.
- **Duplikater / språkvarianter:** Mange sett finnes i både bokmål, nynorsk og engelsk versjon (f.eks. 2014 engelsk, 2022 norsk, s2023 norsk) og som både oppgave og fasit — tellingen bruker ett sett per eksamensavvikling.
- **Delt emnekode:** Flere sett er merket **MA1301/MA6301** (samme eksamen som videreutdanningsemnet MA6301).
- **Kjernekorpusets avgrensning:** Den kvantitative temafrekvensen (del 2) bygger på de 15 detaljleste løsningsforslagene 2014–2025 for å sikre etterprøvbare tall; eldre sett er brukt til å dokumentere spesialtemaenes rotasjon.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorføring er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon.
