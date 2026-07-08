# Eksamensanalyse: TMA4185 Kodeteori (NTNU)

> Grunnlagsdokument for et eventuelt eksamensrettet kodeteori-tillegg (se
> arbeidsdeling i del 7). Bygger på arkivet i
> `~/Desktop/Eksamner/NTNU/TMA4185/` — **23 filer, 2003–2021**: oppgavesett
> `ex-YYYY-{en,nb}.pdf` (samt ett skann `eks190514tma4185.pdf`) og
> løsningsforslag `lf-YYYY-en.pdf` for **2003, 2004, 2010, 2012, 2013 og 2016**.
> Alle seks løsningsforslag er lest i sin helhet; oppgavesettene for
> 2010, 2011, 2012, 2013, 2015, 2016, 2017, 2019 og 2021 er lest grundig, og de
> eldre settene (2003–2009) er skummet for temaregistrering. **Alt innhold er
> omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller
> fasitformuleringer. Matematiske definisjoner, teoremer, algoritmenavn og
> notasjon er standard fagstoff og ikke opphavsrettslig beskyttet. Analysen er
> kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4185 var et smalt, algebraisk
> spesialemne i klassisk kanalkodeteori, og eksamenstradisjonen er **svært
> stabil** over hele perioden 2003–2021. Fire søyler går igjen på nesten hvert
> sett: **(1) lineære blokk-koder fra generator-/paritetssjekkmatrise** (standardform,
> dimensjon, minimumsavstand, syndrom-dekoding), **(2) sykliske koder via
> generatorpolynom** (faktorisering av `xⁿ−1`, dual kode, dimensjon/avstand),
> **(3) Reed–Solomon-/BCH-koder** med endelige kropper `GF(q)` som fundament
> (syndrom-, feillokalisator- og strykningsdekoding), og **(4) konvolusjonskoder**
> (generatorpolynom/skiftregister, Trellis-/Viterbi-dekoding, katastrofale
> kodere). Rundt dette ligger et fast lag av **grenser** (Hamming/sfærepakking,
> Singleton, Gilbert–Varshamov) og **kombinatoriske bevisoppgaver** om
> lineære koder. **Viktig statusmerknad:** emnet er **nedlagt** — det ble sist
> avholdt rundt vår 2021 og har ingen klar enkelt-etterfølger. Det algebraiske
> fundamentet (endelige kropper, polynomaritmetikk) deles med **TMA4150 Algebra**
> og **TMA4160 Kryptografi**. Analysen er derfor skrevet som grunnlag for et
> mulig **kort kodeteori-tillegg til kryptografi-boka**, ikke en egen bok (se del 7).

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4–5 timer**, bokstavkarakter A–F. Undervist på engelsk,
avholdt i vårsemesteret. Fast instruks på alle sett: **«Vis utregningen / begrunn
alle svar»** (eng. «Show your work», «All answers should be explained»). Bar fasit
uten begrunnelse gir ikke full uttelling.

### Emnekode- og formathistorikk

| Periode | Emnekode | Varighet | Struktur | Hjelpemidler |
|---|---|---|---|---|
| **2003** | **SIF5032 Kodeteori** | 9:00–14:00 (5 t) | 5 hovedoppgaver med deloppgaver | **Alle trykte/skrevne hjelpemidler** + godkjent kalkulator (kode B) |
| **2004–2005** | **TMA4185 Kodeteori** (kodeskifte) | 5 t | 4–5 oppgaver | Alle trykte/skrevne + kalkulator |
| **2007–2013** | TMA4185 | 4 t (0900–1300) | 3–5 oppgaver, **deloppgavene teller likt** | Alle trykte/skrevne + enkel kalkulator |
| **2015** | TMA4185 | 4 t | 5 oppgaver | **Kode C**: enkel kalkulator + **ett gult, stemplet A4-ark** med egne notater |
| **2016–2017** | TMA4185 | 4 t | 3–5 oppgaver | Alle trykte/skrevne + kalkulator; **Trellis-vedlegg** utdelt (2016) |
| **2019** | TMA4185 | 15:00–19:00 (4 t) | 5 oppgaver | **Kode C**: kalkulator + **læreboka** Huffman & Pless, *Fundamentals of Error-Correcting Codes* |
| **2021** | TMA4185 | 4 t | **3 oppgaver, 10 delpunkter à 10 %** | (siste kjente sett) |

### Konstanter på tvers av årene
- **3–5 oppgaver med deloppgaver, 4–5 timer, ingen flervalg.** Avkryssingsboksen
  «skal ha flervalgskjema» på trykk-informasjonsarket (synlig fra 2017-utgaven) er
  skjemametadata og er aldri i bruk.
- **Hvert sett dekker bredden:** minst én blokk-kode-oppgave (G/H, dekoding), én
  syklisk/RS/BCH-oppgave med endelig-kropp-aritmetikk, og — fra ~2009 og utover —
  én konvolusjonskode-oppgave. Grense-/bevisoppgaver fyller ut.
- **Konsistent notasjon og teoremreferanser** i fasitene peker mot en fast
  pensumbok (fra 2019 eksplisitt **Huffman & Pless**); eldre fasiter refererer til
  «Corollary 4.2.18», «Theorem 4.5.2», «Algorithm 6.3.2», «Algorithm 7.1.11» osv.

### De to viktigste utviklingstrekkene
1. **Kodeskifte SIF5032 → TMA4185** mellom 2003 og 2004 (samme fag, ny nummerering
   ved omleggingen av NTNUs emnekoder). Faglig innhold uendret.
2. **Konvolusjonskoder vokser fram som fast tredje søyle.** I de tidligste settene
   (2003–2008) dominerer blokk-koder, sykliske koder og RS/BCH. Fra 2009–2010 er
   konvolusjonskoder (skiftregister, Trellis/Viterbi, katastrofale kodere,
   fri distanse, punktering) en fast egen oppgave, og i det siste settet (2021) er
   en hel tredjedel viet konvolusjonskoder.

Merk også at **hjelpemiddelregimet strammet seg til** fra 2015 (fra «alle
hjelpemidler» til kode C med ett A4-ark), og at 2019 tillot læreboka.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én
(del)oppgave. Basert på **15 tekst-lesbare sett**: Periode A (2003–2009: 2003,
2004, 2005, 2007, 2008, 2009 — 6 sett; 2006 er skann), Periode B (2010–2015: 2010,
2011, 2012, 2013, 2015 — 5 sett), Periode C (2016–2021: 2016, 2017, 2019, 2021 — 4 sett).

| Tema | A (6) | B (5) | C (4) | **Gjenganger-score** |
|---|---|---|---|---|
| **Lineær blokk-kode fra G/H** (standardform, dim., paritetssjekk) | 5 | 3 | 3 | **11/15 = 73 %** |
| **Minimumsavstand / feilrettings- og deteksjonsevne** | 6 | 4 | 4 | **14/15 = 93 %** |
| **Endelige kropper `GF(q)`** (aritmetikk, `αⁱ`-tabell, minimalpolynom) | 6 | 5 | 4 | **15/15 = 100 %** |
| **Sykliske koder via generatorpolynom** (`xⁿ−1`-faktorisering, dim./avstand) | 5 | 4 | 4 | **13/15 = 87 %** |
| **Dual kode** (`C⊥`, resiproke/paritets-argument) | 4 | 2 | 1 | **7/15 = 47 %** |
| **Reed–Solomon-/BCH-dekoding** (syndrom, feillokalisator, strykninger) | 5 | 3 | 2 | **10/15 = 67 %** |
| **Grenser** (Hamming/sfærepakking, Singleton, Gilbert–Varshamov) | 4 | 1 | 2 | **7/15 = 47 %** |
| **Perfekte / MDS-koder** (verifisér sfære-/Singleton-likhet) | 2 | 2 | 1 | **5/15 = 33 %** |
| **Syndrom-dekoding / standard array / cosetledere** | 3 | 1 | 2 | **6/15 = 40 %** |
| **Konvolusjonskoder** (skiftregister/generatorpoly., Trellis/Viterbi) | 1 | 4 | 4 | **9/15 = 60 %** |
| **Katastrofal koder / fri distanse / punktering** (konvolusjon) | 0 | 1 | 2 | **3/15 = 20 %** (kun B→C) |
| **Kombinatorisk bevisoppgave om lineære koder** (`(u,u+v)`, snitt, restr.) | 4 | 1 | 3 | **8/15 = 53 %** |
| **Sykliske burst-feil-koder** | 2 | 0 | 0 | **2/15 = 13 %** (kun eldre) |
| **Golay-koden** (dekoding) | 1 | 0 | 0 | **1/15 = 7 %** |
| **Hamming-kode** (konstruér H, dekod) | 2 | 1 | 2 | **5/15 = 33 %** |
| **Reed–Muller-koder** (induktiv konstruksjon, dim./avstand-bevis) | 0 | 1 | 0 | **1/15 = 7 %** (kun 2015) |
| **Berlekamp–Massey-algoritmen** (finn lineær rekurrens) | 0 | 1 | 0 | **1/15 = 7 %** (kun 2010) |
| **Cyklotomiske klasser / antall sykliske koder** | 1 | 1 | 3 | **5/15 = 33 %** |
| **Ikke-lineær / sjekksiffer-kode** (ISBN mod 11) | 0 | 1 | 0 | **1/15 = 7 %** (kun 2012) |
| **Primitive polynom / resiprokt polynom** | 1 | 0 | 1 | **2/15 = 13 %** |

**Viktigste funn:**
1. **Endelige kropper `GF(q)` er det universelle fundamentet — 100 %.** Nesten
   hvert sett krever regning i `GF(8)`, `GF(9)`, `GF(16)` eller lignende (potens-
   /polynom-tabell for `αⁱ`, minimalpolynom, primitivt element). Uten sikker
   kroppsaritmetikk faller RS/BCH-, sykliske- og mange bevisoppgaver sammen.
2. **De fire søylene bærer settet:** blokk-koder fra G/H (73 %), sykliske koder
   via generatorpolynom (87 %), RS/BCH-dekoding (67 %) og konvolusjonskoder (60 %).
   Minimumsavstand og feilrettingsevne (93 %) veves inn i praktisk talt alle disse.
3. **Konvolusjonskoder er den tydeligste utviklingslinjen:** fraværende/marginale
   i 2003–2008, fast egen oppgave fra 2009–2010, og med moderne varianter
   (katastrofal koder, fri distanse, punktering, modifisert Viterbi for
   strykninger) i 2015–2021.
4. **Grense- og bevisoppgaver er en fast «teori-kvote»:** Hamming-/Singleton-/GV-
   grenser (47 %) og kombinatoriske bevis om lineære koder (`(u,u+v)`-konstruksjon,
   snitt av sykliske koder, restriksjon/punktering, halvparten har lik vekt) (53 %)
   opptrer jevnt og skiller karakternivåene.
5. **Enkelte temaer er «engangs-signaturer»** knyttet til den enkelte foreleser:
   Reed–Muller-koder (2015, Smalø), Berlekamp–Massey (2010, Gjøsteen),
   ISBN-sjekksiffer (2012, Petrides), Golay-koden (2004). Disse må dekkes for
   fullstendighet, men har lav gjenganger-verdi.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode
(verifisert mot de seks offisielle fasitene der de finnes).

### A. Konstruksjon/analyse av lineær kode fra G eller H
- **Krav:** Gitt en matrise (rader som utspenner koden, eller en paritetssjekk-
  matrise). Bruk **Gauss-eliminasjon** til å finne en generatormatrise `G` på
  **standardform** `[I | A]` og les av **dimensjonen** (antall lineært uavhengige
  rader). Fra `G=[I|A]` følger paritetssjekkmatrisen `H=[−Aᵀ | I]` (og omvendt).
  Finnes ikke standardform direkte, bytt kolonner og arbeid med en
  **permutasjonsekvivalent** kode (fasiten gjør dette eksplisitt, 2016 O1b).
- **Fasitens metode:** radreduksjon vist steg for steg; dimensjon = rang.
- **Frekvens:** ~11/15; nesten alltid O1.
- **Omskrevet eksempel:** «La `C` være koden utspent av radene i en gitt 5×7-matrise
  over `F₂`. Finn en generatormatrise på standardform og bestem dimensjonen; finn
  deretter en paritetssjekkmatrise.» (jf. 2013 O1)

### B. Minimumsavstand og feilrettings-/deteksjonsevne
- **Krav:** Bestem `d` fra `H`: `d` = minste antall lineært avhengige kolonner i
  `H` (ekvivalent: ingen `d−1` kolonner er avhengige). For binære koder brukes
  standardargumentet «ingen to rader i `Hᵀ` summerer til 0 ⇒ `d>2`; en kodeord-
  vekt = 3 ⇒ `d=3`». Feilretting `t = ⌊(d−1)/2⌋`; feildeteksjon opp til `d−1`.
- **Fasitens metode:** kolonneuavhengighet i `H` + minste kodeord-vekt.
- **Frekvens:** 14/15 (nesten universelt, oftest som del av A).
- **Omskrevet eksempel:** «Vis at koden med gitt `H` har minimumsavstand 3, og
  angi hvor mange feil den kan rette og hvor mange den kan oppdage.» (jf. 2017 O1b)

### C. Syndrom-dekoding og standard array (IMLD)
- **Krav:** List cosetene til `C` i `Fₙ`; velg **cosetleder** = element med minst
  vekt i hver coset; sett opp **syndrom–cosetleder-tabellen** (SDA). Dekod et
  mottatt ord `w` ved å regne syndromet `wH`, slå opp cosetlederen `e`, og returnér
  `c = w + e` (nærmeste kodeord, IMLD). For ikke-binære koder er cosetlederne
  vektorer av vekt 1 (alle skalar-multipler av `H`-radene), 2016 O1d.
- **Fasitens metode:** eksplisitt coset-liste + SDA + oppslag (2003 O1, 2012 O3b).
- **Frekvens:** 6/15.
- **Omskrevet eksempel:** «Sett opp standard dekodingsarray for koden med gitt `H`
  og dekod de mottatte ordene `w₁` og `w₂`.» (jf. 2003 O1)

### D. Endelige kropper `GF(q)`: aritmetikk, irredusible/primitive polynom
- **Krav:** Konstruér `GF(q) = F_p[x]/⟨f(x)⟩` med `f` irredusibel; sett opp
  **potenstabellen** `αⁱ ↔ polynom/vektor`; regn produkter/inverser via potens-
  addisjon modulo `q−1`. Vis at et polynom er **irredusibelt** (ingen røtter / ingen
  faktorer av lavere grad). Finn **minimalpolynomet** `M_{αʲ}(x)` som produktet
  `∏(x−αʲᵖᵏ)` over den `p`-cyklotomiske klassen til `j`. Avgjør om et polynom er
  **primitivt** (roten genererer hele `F_q^*`); resiprokt polynom `f*` er primitivt
  hviss `f` er det (2021 O2).
- **Fasitens metode:** potenstabell + cyklotomiske klasser (2008 O4a, 2012 O2c).
- **Frekvens:** 15/15 som verktøy; egen oppgave i flere sett.
- **Omskrevet eksempel:** «Med `F₈ = F₂[x]/⟨x³+x²+1⟩` og `α = x`, finn
  minimalpolynomet til `α³` over `F₂` og forklar hvordan `x⁸−x` faktoriseres.» (jf. 2008 O4a)

### E. Sykliske koder via generatorpolynom
- **Krav:** En syklisk kode av lengde `n` over `F_q` svarer til en **divisor
  `g(x)` av `xⁿ−1`**. (i) Beskriv **alle** sykliske koder ved å faktorisere `xⁿ−1`
  i irredusible faktorer og telle produktene (`2^r` mulige for `r` faktorer).
  (ii) For en gitt `g(x)`: **dimensjon** `k = n − deg g`, **minimumsavstand** fra
  antall påfølgende nullpunkter (BCH-grense) eller vekten til `g`. (iii) Minste
  sykliske kode som inneholder et ord `v(x)`: `g(x) = gcd(v(x), xⁿ−1)` (Euklids
  algoritme). (iv) **Dual kode**: `g⊥(x) = xᵏ h(x⁻¹)` der `h = (xⁿ−1)/g` (resiprokt
  av kofaktoren).
- **Fasitens metode:** gcd/Euklid for `g`; faktorisering av `xⁿ−1`; resiprokt for `C⊥`.
- **Frekvens:** 13/15.
- **Omskrevet eksempel:** «Finn generatorpolynomet for den minste sykliske koden
  som inneholder ordet `0101100`, og angi en generatormatrise samt generatorpolynomet
  for `C⊥`.» (jf. 2003 O3)

### F. Reed–Solomon-/BCH-konstruksjon og dekoding
- **Krav (tung stapleoppgave):** **Konstruksjon:** RS/BCH-kode av lengde `n` over
  `F_q` med definerende mengde (påfølgende nullpunkter `{1,2,…,δ−1}`);
  `g(x) = ∏(x−αⁱ)`; MDS-egenskap `d = n−k+1`. **Dekoding (Algorithm 6.3.2-typen):**
  (1) regn syndromene `sₗ = w(αˡ)`; (2) finn rang av syndrom-matrisen `M'` = antall
  feil; (3) løs det lineære systemet for **feillokalisatorpolynomet** `σ(x)`;
  (4) finn røttene til `σ` (feilposisjoner), ofte via variabelskifte og en
  `y²+y`-tabell; (5) løs for **feilstørrelsene**; (6) verifisér at resultatet er et
  kodeord (`g | c`). **Strykningsdekoding:** strykningslokalisator `σ_B`, modifiserte
  syndromer `s*`, kombinér med feillokalisator; korrekt dekoding krever `2e + ρ ≤ d−1`
  (`ρ` = antall strykninger).
- **Fasitens metode:** full seks-stegs-algoritme vist i lf-2003 og lf-2004; MDS-
  telling og strykningsvariant i lf-2016.
- **Frekvens:** 10/15.
- **Omskrevet eksempel:** «For `RS(2³,5)`-koden over `GF(8)` med gitt `g(x)`: hvor
  mange feil kan rettes? Dekod det mottatte ordet `w = (1,0,1,0,0,0,β)`.» (jf. 2003 O4)

### G. Konvolusjonskoder: skiftregister, Trellis/Viterbi, katastrofale kodere
- **Krav:** Gitt generatorpolynom/-matrise `G(D)` (f.eks. `(1+D, 1+D+D²)`):
  (i) **tegn skiftregisteret** og **kod** en meldingssekvens (interleavet utgang);
  (ii) **Trellis-/Viterbi-dekoding**: bygg trellis, merk grenvekter (Hamming-avstand
  til mottatt blokk), spor minste totalvekt til slutt-tilstand og les av meldingen;
  (iii) **katastrofal koder**: `G` er dårlig hvis generatorene har en felles faktor
  `(1+D | …)` — finn en bedre (ikke-katastrofal) ekvivalent koder; (iv) **fri
  distanse**, **høyre-invers** (polynom vs. potensrekke), **punktering** og
  modifisert Viterbi for strykninger (2013, 2015, 2021).
- **Fasitens metode:** state-machine/tabell for koding; annotert trellis med grønne/
  rosa stier for Viterbi (lf-2010, lf-2016).
- **Frekvens:** 9/15 (dominerende fra 2009).
- **Omskrevet eksempel:** «Forklar hvorfor `G = (1+D², 1+D²+D³+D⁴)` er en dårlig
  koder, foreslå en bedre, og kod meldingen `10 11 00`. Dekod deretter en gitt
  mottatt sekvens med Viterbi når meldingen slutter på to nuller.» (jf. 2016 O4)

### H. Grenser: Hamming (sfærepakking), Singleton, Gilbert–Varshamov
- **Krav:** **Hamming/sfærepakking:** `|C| ≤ qⁿ / Σₖ₌₀ᵗ (n choose k)(q−1)ᵏ` — gir
  øvre skranke for `k`. **Singleton:** `d ≤ n−k+1` (likhet ⇒ MDS). **Gilbert–
  Varshamov:** en `(n,k,d)`-kode eksisterer hvis `Σₖ₌₀^{d−2} (n−1 choose k)(q−1)ᵏ <
  q^{n−k}` — gir nedre eksistens-skranke. Typisk brukes to grenser sammen: én
  utelukker, én garanterer eksistens (2016 O3).
- **Fasitens metode:** sett inn tall, sammenlign med `q^k`; ved store tall
  argumenteres med at det dominerende leddet bestemmer logaritmen (lf-2016 O3).
- **Frekvens:** 7/15.
- **Omskrevet eksempel:** «For binære `(12,k,4)`-koder: hvilken øvre skranke for `k`
  gir Hamming-grensen, og hva er største `k` som Gilbert–Varshamov-grensen
  garanterer eksisterer?» (jf. 2003 O2)

### I. Perfekte og duale koder + kombinatoriske bevisoppgaver
- **Krav:** **Perfekt** ⇔ likhet i sfærepakkingsgrensen; **MDS** ⇔ likhet i
  Singleton. **Duale koder:** vis at `C⊥` er lineær/syklisk, finn dimensjon `n−k`
  og generatorpolynom. **Kombinatoriske bevis** (fast «teori-kvote»): `(u,u+v)`-
  konstruksjonen er en `[2n, k₁+k₂, min{2d₁,d₂}]`-kode (2007 O5, 2019 O2); snittet
  av to sykliske koder er syklisk med `g = lcm(g₁,g₂)` (2003 O5); en binær lineær
  kode har enten alle eller nøyaktig halvparten kodeord med jevn vekt (2009 O5);
  restriksjon/punktering bevarer eller senker dim./avstand med 1 (2013 O3–4).
- **Fasitens metode:** direkte lukkethetsargument (sum av kodeord, syklisk skift),
  vekt-formel `wt(u+v) = wt u + wt v − 2 wt(u∩v)` (lf-2004 O5).
- **Frekvens:** perfekt/MDS 5/15; bevisoppgaver 8/15.
- **Omskrevet eksempel:** «Vis at `C = {(u, u+v) | u∈C₁, v∈C₂}` er en lineær
  `[2n, k₁+k₂, min{2d₁,d₂}]`-kode.» (jf. 2019 O2)

---

## 4. Sensorens krav (bevis vs. regning)

### Faste metaregler (fra oppgaveinstrukser og de seks fasitene)
1. **Begrunn/vis utregning på alt.** Ordrett instruks på hvert sett («Show your
   work», «Alle svar skal begrunnes»). Ubegrunnet riktig svar gir ikke full uttelling.
2. **Algoritme- og teoremnavn skal bæres eksplisitt:** «Berlekamp–Massey»,
   «Viterbi/Trellis-dekoding», «sfærepakkingsgrensen», «Singleton-grensen»,
   «Gilbert–Varshamov», «Euklids algoritme», «BCH-grensen». Fasitene navngir dem.
3. **To arbeidsmoduser vektlegges ulikt:**
   - **Regne-/algoritme-oppgaver** (blokk-kode-analyse, RS/BCH-dekoding, koding
     med skiftregister, Trellis) krever korrekt **føring steg for steg** — hvert
     mellomledd (syndromer, `σ(x)`-koeffisienter, feilposisjoner) skal vises.
   - **Bevisoppgaver** (`(u,u+v)`, snitt, perfekt/MDS, halvparten-jevn-vekt,
     Reed–Muller-egenskaper) krever et **fullstendig, generelt argument** — ikke
     eksempler. Lukkethet under addisjon/skalar/syklisk skift skal skrives ut.
4. **Flere gyldige metoder honoreres eksplisitt:** fasitene skriver ofte «other
   answers are also possible» / «many other arguments are possible» (lf-2013
   innledning) — f.eks. `g(x)` via gcd **eller** faktorisering; avstand via
   kolonneuavhengighet **eller** full kodeord-liste; koding via matrisemultiplikasjon
   **eller** state-machine.
5. **Verifikasjonssteg premieres:** i RS-dekoding er «sjekk at svaret er et kodeord»
   ikke en del av selve algoritmen, men fasiten anbefaler det eksplisitt (lf-2003
   Step 6) fordi algoritmen kan «gå gjennom» selv når det er flere feil enn `t`.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på det mekaniske: Gauss-reduksjon til
  standardform, lese av dimensjon, sette opp `H`, regne ett syndrom, kode en
  melding med et gitt skiftregister, faktorisere `xⁿ−1` for små `n`.
- **Midtsjiktet** behersker i tillegg: full syndrom-dekoding med standard array,
  `GF(q)`-aritmetikk via potenstabell, `g(x)=gcd` og dual kode, Hamming-/Singleton-/
  GV-grensene med korrekt innsetting, Trellis-/Viterbi-dekoding med sporing.
- **Toppsjiktet** kjennetegnes av: (i) **fullstendig RS/BCH-dekoding** inkl.
  feillokalisatorpolynom, rot-søking og feilstørrelser (og strykningsvarianten
  med `2e+ρ≤d−1`); (ii) **korrekte, generelle bevis** (`(u,u+v)`-avstand, perfekt/
  MDS, Reed–Muller dim./avstand/dual); (iii) **katastrofal-koder-analyse** og valg
  av ikke-katastrofal ekvivalent; (iv) cyklotomiske klasser + minimalpolynom for å
  telle/konstruere sykliske og BCH-koder med gitt designavstand.

---

## 5. Typiske feil

1. **Blande første/andre kolonneuavhengighet for `d`:** å slutte `d=3` uten å
   sjekke at ingen to kolonner i `H` er avhengige (eller motsatt telle feil).
2. **Standardform vs. permutasjonsekvivalens:** å påstå at `G` ikke finnes på
   standardform i stedet for å bytte kolonner og arbeide med en permutasjonsekvivalent
   kode (og glemme å invertere permutasjonen for `H`).
3. **`GF(q)`-aritmetikkfeil:** feil i potenstabellen, glemme at eksponenter regnes
   modulo `q−1`, eller forveksle polynom- og vektorrepresentasjon.
4. **Feil generatorpolynom:** ta et vilkårlig multiplum i stedet for `gcd(v, xⁿ−1)`;
   eller feilaktig dimensjon (`k = n − deg g`, ikke `deg g`).
5. **Ufullstendig RS-dekoding:** stoppe ved feilposisjonene uten å regne
   feilstørrelsene, eller hoppe over verifikasjonssteget slik at et «svar» som ikke
   er et kodeord passerer (for mange feil).
6. **Strykningsdekoding:** feil betingelse (`2e+ρ ≤ d−1`), eller glemme å bygge
   strykningslokalisatoren og de modifiserte syndromene.
7. **Katastrofal koder oversett:** ikke oppdage felles faktor i generatorene, eller
   ikke kunne begrunne hvorfor katastrofale kodere er farlige (endelig antall
   kanalfeil kan gi uendelig mange dekodingsfeil).
8. **Trellis/Viterbi-føring:** feil grenvekter (Hamming-avstand), eller glemme
   kravet om at stien må ende i null-tilstanden når meldingen «avsluttes med nuller».
9. **Grenser forvekslet:** bruke Singleton der sfærepakking kreves, eller feiltolke
   GV som en øvre (i stedet for nedre eksistens-) skranke.
10. **Bevis med eksempel:** å «vise» en generell påstand (lineær, syklisk, perfekt)
    med ett talleksempel i stedet for et generelt lukkethets-/telleargument.

---

## 6. Teorem-, definisjons- og notasjonsapparat

### Må beherskes aktivt (kunne anvende og navngi)
- **Lineære blokk-koder:** `[n,k,d]`-notasjon, Hamming-vekt/-avstand,
  minimumsavstand, generator-/paritetssjekkmatrise, standardform `[I|A]` ⇔
  `H=[−Aᵀ|I]`, syndrom `wHᵀ`, coset/standard array/IMLD, dual kode `C⊥`,
  Hamming-koder.
- **Endelige kropper:** `GF(q)=F_p[x]/⟨f⟩`, primitivt element, potenstabell,
  irredusibelt/primitivt polynom, resiprokt polynom, minimalpolynom, `p`-cyklotomiske
  klasser, faktorisering av `xⁿ−1`.
- **Sykliske koder:** generatorpolynom `g|xⁿ−1`, sjekkpolynom `h=(xⁿ−1)/g`,
  dimensjon `n−deg g`, dual `g⊥=xᵏh(x⁻¹)`, BCH-grense (påfølgende nullpunkter),
  burst-feil-koder.
- **RS/BCH:** definerende mengde/designavstand, MDS (`d=n−k+1`), full dekodings-
  algoritme (syndromer → feillokalisator `σ(x)` → røtter → feilstørrelser → sjekk),
  strykningsdekoding (`2e+ρ≤d−1`), Berlekamp–Massey.
- **Konvolusjonskoder:** generatormatrise `G(D)`/skiftregister, Trellis, Viterbi-
  dekoding, katastrofal koder, fri distanse, høyre-invers, punktering, koderate.
- **Grenser og eksistens:** sfærepakking/Hamming, Singleton, Gilbert–Varshamov,
  perfekte og MDS-koder, `A_q(n,d)`.
- **Bevisstandard:** lukkethet (addisjon/skalar/syklisk skift), vekt-formelen
  `wt(u+v)=wt u+wt v−2 wt(u∩v)`, `(u,u+v)`-konstruksjonen, Reed–Muller induktivt.

### Notasjonskonvensjoner et tillegg bør speile
`[n,k,d]`; `wt`, `d(x,y)`; `G`, `H`, `C⊥`; `GF(q)=F_q`, `α` primitivt element,
`αⁱ`-tabell; `g(x)`, `h(x)`, `xⁿ−1`; syndrom `s=wHᵀ`; feillokalisator `σ(x)`;
`G(D)`/`G(x)` for konvolusjon; `A_q(n,d)`; MDS/perfekt.

### Hjelpemidler (historisk)
Hjelpemiddelregimet varierte (se del 1): fra «alle trykte og skrevne hjelpemidler»
(2003–2013, 2016–2017) til kode C med ett håndskrevet A4-ark (2015) eller læreboka
Huffman & Pless (2019). Et eksamensrettet tillegg bør derfor trene **anvendelse og
utledning** (potenstabeller, algoritmer) snarere enn ren pugging, og gjerne inneholde
et kompakt formel-/algoritme-oppslag (grenser, RS-dekodingssteg, `xⁿ−1`-faktoriseringer,
cyklotomiske klasser).

---

## 7. Prognose og prioritering

> **Statusmerknad:** TMA4185 Kodeteori er **nedlagt** og har ingen klar
> enkelt-etterfølger. Det er derfor **ingen framtidig eksamen å prognostisere for**.
> Prioriteringen nedenfor beskriver hva et eventuelt kodeteori-tillegg må dekke for
> å reflektere den historiske eksamenstradisjonen, dersom behovet melder seg.

### Nivå 1 — kjernen (bærer den historiske eksamenen)
1. **Endelige kropper `GF(q)`** — 100 %. Potenstabell, minimalpolynom, cyklotomiske
   klasser, primitive/irredusible/resiproke polynom. Fundamentet for alt annet.
2. **Lineære blokk-koder fra G/H** — 73 %, med minimumsavstand/feilrettingsevne (93 %).
3. **Sykliske koder via generatorpolynom** — 87 %. `g=gcd`, `xⁿ−1`-faktorisering,
   dual kode.
4. **Reed–Solomon-/BCH-konstruksjon og -dekoding** — 67 %. Full dekodingsalgoritme
   + strykninger.
5. **Konvolusjonskoder** — 60 %. Skiftregister/`G(D)`, Trellis/Viterbi, katastrofal
   koder.

### Nivå 2 — bredde og karakterskiller
6. **Grenser** (Hamming/sfærepakking, Singleton, Gilbert–Varshamov) — 47 %.
7. **Kombinatoriske bevisoppgaver** (`(u,u+v)`, snitt, halvparten-jevn-vekt,
   restriksjon/punktering) — 53 %.
8. **Perfekte / MDS-koder** — 33 %. Verifisér likhet i sfære-/Singleton-grensen.
9. **Syndrom-dekoding / standard array** — 40 %.
10. **Hamming-koder** (konstruér `H`, dekod) og **cyklotomiske klasser / telling av
    sykliske koder** — 33 %.

### Nivå 3 — beredskap / foreleser-signaturer
11. **Berlekamp–Massey** (2010), **Reed–Muller-koder** (2015), **Golay-koden** (2004),
    **ISBN-/sjekksiffer-koder** (2012), **sykliske burst-feil-koder** (eldre). Lav
    gjenganger-verdi, men bør nevnes for fullstendighet.

### Arbeidsdeling (viktig)
**TMA4185 Kodeteori deler det algebraiske fundamentet — endelige kropper `GF(q)`
og polynomaritmetikk — med `TMA4150 Algebra` og `TMA4160 Kryptografi`, som begge er
dekket i denne runden.** Kodeteori er et **smalt spesialemne** som dessuten er
**nedlagt**. Ved et framtidig behov er derfor et **kort kodeteori-tillegg som
appendiks til kryptografi-boka (TMA4160)** et **mer kostnadseffektivt alternativ enn
en egen bok**: appendikset kan gjenbruke kryptografi-bokas kapitler om endelige
kropper og polynomringer, og bare legge til det kodeteori-spesifikke laget
(lineære/sykliske koder, RS/BCH, konvolusjonskoder, grenser). **Dette anbefales
eksplisitt fremfor en frittstående kodeteori-bok.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4185/` (23 PDF-er, 2003–2021).

**Løsningsforslag lest i sin helhet (offisielle fasiter, 6 stk.):**
- `lf-2003-en.pdf` (SIF5032: standard array, Hamming/GV-grenser, syklisk `g=gcd`
  + dual, full RS-dekoding + strykninger, snitt av sykliske koder)
- `lf-2004-en.pdf` (grenser, Golay-dekoding, RS-dekoding, burst-feil, jevn-vekt-underkode)
- `lf-2010-en.pdf` (blokk-kode/standardform, sykliske koder over `F₂`, Berlekamp–Massey,
  konvolusjon + Trellis)
- `lf-2012-en.pdf` (konvolusjon fra skiftregister, ternære sykliske/BCH-koder m.
  cyklotomiske klasser, selvdual/MDS `GF(3)`, ISBN-sjekksiffer)
- `lf-2013-en.pdf` (blokk-kode + restriksjon/punktering-bevis, BCH-enkeltfeil,
  konvolusjon + høyre-invers)
- `lf-2016-en.pdf` (`GF(3)`-blokk-kode + punktering, RS-strykninger, GV/sfære-grense,
  katastrofal koder + Viterbi)

**Oppgavesett lest grundig (9 nyere sett):** `ex-2010-en`, `ex-2011-nb`, `ex-2012-en`,
`ex-2013-nb`, `ex-2015-en`, `ex-2016-en`, `ex-2017-en`, `ex-2019-en`, `ex-2021-en`.

**Oppgavesett skummet for temaregistrering (eldre):** `ex-2003-en` (SIF5032),
`ex-2004-en`, `ex-2005-en`, `ex-2007-nb`, `ex-2008-nb`, `ex-2009-en`.

**Merknader om kildene:**
- **Skann (hoppet over):** `ex-2006-en.pdf` og `eks190514tma4185.pdf` gir ingen
  meningsfull tekst ved `pdftotext` (2 tegn hver) — rene bildeskann. `eks190514`
  (datert 2019-05-14) er trolig et skannet duplikat/variant av 2019-settet, som
  uansett finnes som tekst i `ex-2019-en.pdf`. Disse to er ikke OCR-behandlet.
- **Kodeskifte:** 2003-settet er merket **SIF5032 Kodeteori**; fra 2004 er koden
  **TMA4185 Kodeteori** (samme fag, ny NTNU-nummerering).
- **Feilmerket fasit:** `lf-2016-en.pdf` har overskriften «TMA4185 Cryptography»,
  men innholdet er utvilsomt kodeteori (Gauss-eliminasjon på generatormatrise, RS,
  grenser, konvolusjon). Ren skrivefeil i overskriften.
- **Nedlagt emne:** TMA4185 ble sist avholdt ~vår 2021 (arkivet stopper der) og har
  ingen klar enkelt-etterfølger. Analysen er derfor et **historisk grunnlag**, ikke
  en prognose for kommende eksamener (se del 7).
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasit-
  formuleringer er gjengitt ordrett. Matematiske uttrykk, algoritme- og teoremnavn
  er standard fagnotasjon.

**Forbilder:** `docs/hoyskole-boker/mat2400/EKSAMENSANALYSE.md` (bevis-/definisjonstungt
emne) og `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (temafrekvens-/oppgavekatalog-mal).
