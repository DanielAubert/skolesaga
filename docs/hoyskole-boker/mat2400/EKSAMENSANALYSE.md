# Eksamensanalyse: MAT2400 Reell analyse (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på arkivet i
> `~/Desktop/Eksamner/UiO/MAT2400/`: 20 oppgavesett (vår 2004 t.o.m. vår 2022,
> ordinær), 3 kontinuasjonssett (2018, 2021, 2022) og 10 løsningsforslag/
> sensorfasiter (2010, 2015, 2016, 2018, 2020, 2021, 2021-konte, 2022,
> 2022-konte; 2017-fasit er en skannet bildefil uten tekstlag). Løsningsforslag
> og de åtte siste årene er lest grundig; 2004–2009 er skummet for temaregistrering.
> **Alt innhold er omskrevet med egne ord** – ingen ordrette gjengivelser av
> oppgavetekster eller fasiter. Matematiske definisjoner, teoremer og notasjon er
> standard fagstoff og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der
> kildene tillater det.

---

## 0. Kritisk forbehold: tre kurs i ett arkiv

Arkivet spenner over tre navngivningsepoker for det som i dag heter MAT2400, og
**pensumet har flyttet seg betydelig**. Dette må ligge til grunn for hele boka:

| Periode | Emnenavn på settet | Karakter |
|---|---|---|
| 2004–2009 | **MAT1300 – Analyse 1** | Forløper. Sup/inf og kompletthet av **R**, kompakthet (Bolzano–Weierstrass, åpne overdekninger), uniform kontinuitet, uniform konvergens, kontraksjon + ODE, invers/implisitt funksjonsteorem, Riemann-integral (Thomae-funksjonen). **Ingen målteori.** |
| 2010–2012 | **MAT2400 – Analyse 1** | Overgang. Metriske rom, normerte rom, operatornorm – og **målteori kommer inn** (2011–2012). |
| 2013–2022 | **MAT2400 – Reell analyse / Real Analysis** | Dagens kurs. Metriske/normerte rom, kompletthet, kompakthet, Fréchet-derivasjon, invers/implisitt funksjonsteorem, Fourier-analyse, Hilbertrom. |

**Den viktigste enkeltobservasjonen for kalibrering:** Lebesgue-/målteori er
**eksamenstestet i 2011, 2012, 2013, 2014 og 2015 – og deretter fullstendig
fraværende i alle ni sett fra 2016 t.o.m. 2022** (inkl. konte). Samtidig lister
den gjeldende emnebeskrivelsen (verifisert 2026) fortsatt «konstruksjon av
Lebesgue-mål», «Lebesgue-integrasjon» og «monoton og dominert konvergens» som
sentrale tema. Dette er samme divergens som MAT1100-analysen flagget for rekker:
**boka må dekke målteori fordi emnebeskrivelsen krever det, men eksamenstreningen
kalibreres mot metriske/normerte rom, differensiabilitet og Fourier, som eier de
siste ni settene.** Sjekk eksamenssett fra 2023 og senere før boka kalibreres endelig.

Lærebokreferansene i fasitene (Teorem 4.6.2, Proposisjon 3.4.4, 5.3.11, 6.1.8,
Korollar 4.3.6, «Bolzano–Weierstrass-egenskapen») identifiserer pensumboka
entydig som **Tom Lindstrøms _Spaces: An Introduction to Real Analysis_**. Bokas
kapittelstruktur er den naturlige ryggraden også for vår lærebok.

---

## 1. Eksamensform og utvikling

MAT2400 vurderes i dag med **én avsluttende skriftlig skoleeksamen som teller
100 %**. To obligatoriske innleveringer må være godkjent for adgang. Karakterskala
A–F. Ingen midtveiseksamen (til forskjell fra MAT1100).

| Trekk | Dagens form (2013–2022) |
|---|---|
| Varighet | **4 timer** (14:30–18:30, 15:00–19:00 eller 09:00–13:00) |
| Struktur | **10–11 deloppgaver, hver verdt 10 poeng, sum 100** – alle punkter teller (nesten) likt |
| Hjelpemidler | **Ingen** (unntak: 2020 og 2021 var digitale hjemmeeksamener, «alle hjelpemidler» – men oppgavene forble rene bevisoppgaver, der hjelpemidler er til liten nytte) |
| Vedlegg | Ingen. Et lite **faktaark** ligger ofte bakerst: norm-/Fourier-aksiomer, definisjon av retningsderivert, Weierstrass' M-test, geometrisk rekke |
| Språk | Norsk (2013–2016) eller engelsk (2017–2022, engelsktalende foreleser). **Studenten kan svare på begge språk** |
| Instruks | «Alle svar må begrunnes» / «show enough details so that it is easy to follow your arguments». Resultater fra tidligere deloppgaver kan brukes fritt videre selv om de ikke er løst |

**Formathistorikk:**

| Periode | Struktur |
|---|---|
| 2004–2009 (MAT1300) | 3 timer, 3–4 hovedoppgaver med vektprosent (f.eks. 40 %/20 %/40 %) heller enn poeng. Mer definisjonsspørsmål |
| 2010–2012 | 3–4 timer, overgang til «hvert delspørsmål 10 poeng» |
| 2013–2022 | Fast mal: ~10 likt vektede 10-poengs deloppgaver, 4 timer |

**Konstanter på tvers av dagens epoke:**
- **Deloppgavene er selvstendige og likt vektede.** Tidsbudsjett ~22–24 min per
  10-poengsblokk. Ingen lang kjedet flervalgsdel som i MAT1100.
- **Kjeding oppmuntres eksplisitt:** flere sett sier at man kan bruke resultater
  fra punkter man ikke har løst. En typisk oppgave har a) «regn/vis en formel»
  og b) «bruk a) til å …».
- **Faktaarket** forteller hva studenten forventes å ha for hånden (norm-aksiomer,
  Fourier-koeffisienter, M-testen) – og indirekte hva som skal kunnes utenat
  (alt annet).

---

## 2. Temafrekvens

Tellegrunnlaget er de **12 ordinære MAT2400-settene 2010–2022** (2019 mangler i
arkivet; 2023+ finnes ikke). Kontinuasjonssettene (2018, 2021, 2022) og
MAT1300-epoken (2004–2009) kommenteres i teksten. Celleverdi = antall av de 12
settene der temaet er en egen deloppgave. Et sett tester typisk 4–6 av temaene.

| Tema | Frekvens (av 12) | Trend |
|---|---|---|
| **Normerte rom: norm-aksiomer, operatornorm, begrensede lineære operatorer, normekvivalens** | **8/12 = 67 %** | Stabil, gjennomgående |
| **Fourier-analyse: reelle/komplekse koeffisienter, konvergens (punktvis/uniform/L²), beregning** | **7/12 = 58 %** | Stigende – 6 av 7 siste sett |
| **Metriske rom: metrikk-aksiomer, tillukning/rand/opphopning, åpen/lukket, kompakthet, kompletthet** | **7/12 = 58 %** (bredt tolket ~10/12) | Stabil, kursets grunnmur |
| **Uniform kontinuitet** | **6/12 = 50 %** | Stabil |
| **Fréchet-/retningsderivert (Gateaux) + invers-/implisitt funksjonsteorem** | **6/12 = 50 %** | **Kraftig stigende – 4 av 5 siste ordinære + ALLE 3 konte** |
| **Kompletthet / Cauchy-følger (som eget bevistema)** | **5/12 = 42 %** | Stabil |
| **Målteori / Lebesgue: σ-algebra, målbarhet, Lebesgue-integral, konvergensteoremer, «n.o.»** | **5/12 = 42 %** | **Kollapset – 5/5 i 2011–2015, deretter 0/9** |
| **Uniform konvergens av funksjonsfølger/-rekker (+ M-test, ledd-for-ledd)** | **5/12 = 42 %** | Fallende i ren form, lever videre i Fourier/rekker |
| **Kontraksjon + Banachs fikspunktteorem (+ ODE-anvendelse)** | **3/12 = 25 %** | Stabil, klassiker |
| **Hilbertrom: indreprodukt, ortonormal basis, Bessel, Riesz-representasjon** | **3/12 = 25 %** (+ 2018-konte) | Stabil |
| **Kompakthet i funksjonsrom: Arzelà–Ascoli, ekvikontinuitet, «enhetskule ikke kompakt»** | **3/12 = 25 %** (tungt i konte) | Stigende i konte |
| **Weierstrass' approksimasjonsteorem (polynomer tette i C[a,b])** | **2/12 = 17 %** (2018 + 2021-konte) | Signaturbevis |
| **Potensrekker: konvergensradius, ledd-for-ledd derivasjon, analytisitet** | **2/12 = 17 %** | Lav |
| **Sup/inf, kompletthetsaksiomet for R (som eget tema)** | **1/12 = 8 %** | Var MAT1300-staple, nesten borte |
| **ℓ^p-/følgerom (som eksplisitt ramme)** | **4/12 = 33 %** | Stigende (2011, 2020, 2021-konte, 2022-konte) |

### Delkommentarer

1. **Normerte rom er kursets ryggrad.** To tredeler av settene har minst én
   deloppgave der man skal verifisere at noe er en norm, regne ut/estimere en
   operatornorm, eller vise at to normer er (ikke) ekvivalente. Norm-aksiomene
   (positivitet+definitthet, homogenitet, trekantulikhet) er det mest gjentatte
   enkeltbeviset i hele arkivet.

2. **Differensiabilitet i uendeligdimensjonale/vektorrom er den stigende
   signaturen.** Fréchet-derivert, retningsderivert (Gateaux) og invers-/implisitt
   funksjonsteorem opptrer i **hvert eneste av de fem siste ordinære settene**
   (2016, 2018, 2020, 2021, 2022) **og i alle tre kontinuasjonssettene**. Dette er
   MAT2400s tydeligste karakterskiller – analog til MAT1100s «kontinuitet/
   deriverbarhet i punkt». Malen (linearitet → begrensethet → restleddet
   σ(r)/‖r‖ → 0) går igjen nesten ordrett år etter år.

3. **Fourier-analyse er nesten årlig** de siste årene og opptrer i to former: (a)
   **beregn Fourier-rekka** til en konkret funksjon (trinnfunksjon, |x|, x, t²,
   sin x/x) og ofte bruk den til å summere en tallrekke (π/4 = 1 − 1/3 + 1/5 − …;
   ∫sin x/x = π); (b) **konvergensteori** – uniform konvergens under
   ∑|αₙ| < ∞, entydighet (like Fourier-koeffisienter ⇒ like funksjoner) via Fejér/
   Cesàro eller L², Riemann–Lebesgue-lemmaet, konvolusjon (cₙ = aₙbₙ).

4. **Målteori-kollapsen** (se del 0) er den største fella i å bygge boka etter
   arkivet alene. 2011–2015 hadde tunge målteorioppgaver (entydighet av
   integralet fra fire aksiomer, σ-algebra ved induksjon, begrenset
   konvergensteorem, L¹-approksimasjon med enkle/kontinuerlige funksjoner,
   målbarhet av sammensetninger). Fra 2016 er alt dette borte. Boka dekker det
   for pensumsdekning, men eksamensvekten legges på de øvrige temaene.

5. **«Gi et moteksempel»-sjangeren** er gjennomgående: 2011, 2013, 2014, 2016,
   2021 og 2022 (+ konte) har minst én deloppgave som ber om et konkret
   eksempel/moteksempel. Fasit krever da **verifikasjon av at eksempelet oppfyller
   alle kravene** – et eksempel uten sjekk er ikke fullt svar. Typiske
   moteksempler: incomplete metrisk rom uten fikspunkt (0,1]; enhetskule i
   uendeligdimensjon som ikke er kompakt; punktvis grense som bryter en egenskap
   uniform grense bevarer.

---

## 3. Oppgavetype-katalog

MAT2400 er et **rent bevisemne**. Anslått fordeling av deloppgavene i de siste
åtte settene:

| Sjanger | Andel | Kommentar |
|---|---|---|
| **«Vis at / Bevis at»** (bevis) | **~75 %** | Verifiser aksiomer, egenskaper, konvergens, kompletthet, kontinuitet |
| **«Finn et eksempel / moteksempel»** | **~12 %** | Konstruksjon + full verifikasjon av alle krav |
| **«Beregn / Finn»** (regn, men med begrunnelse) | **~12 %** | Fourier-koeffisienter, Jacobimatrise, konvergensradius, formel for derivert |
| **«Definer / Hva betyr»** (state definisjon) | **~1 %** | Nesten borte etter MAT1300-epoken |

**Bevis-andelen er altså ~90 %+.** Selv «regne»-punktene (Fourier-koeffisient,
Jacobimatrise) må føres med full begrunnelse og er innbakt i en bevisoppgave.
Dette er den grunnleggende forskjellen fra regnekurs som MAT1100: her finnes det
knapt en eneste oppgave der man bare regner et tall.

De faktiske arketypene som går igjen:

### A. Verifiser at noe er en metrikk / norm
- **Krav:** Sjekk **alle** aksiomene eksplisitt. Metrikk: (i) d ≥ 0 med likhet ⇔
  x = y, (ii) symmetri, (iii) trekantulikhet (den eneste ikke-trivielle – fokuser
  der). Norm: (i) ‖u‖ ≥ 0 med likhet ⇔ u = 0, (ii) ‖αu‖ = |α|‖u‖, (iii)
  trekantulikhet. Fasit lister alltid alle tre og gjør (i)–(ii) kort.
- **Frekvens:** ~8/12. Konkrete rom: sup-norm på C[a,b], max-metrikk d = max(d₁,d₂),
  sum d₁+d₂, ℓ¹/ℓ^p-normer, ‖x‖_A = ‖Ax‖, ∑|f(m)| på endelig-støtte-følger.
- **Omskrevet eksempel:** «La d₁ og d₂ være metrikker på X. Vis at
  d(x,y) = max{d₁(x,y), d₂(x,y)} er en metrikk.»

### B. Fréchet-differensiabilitet (den stigende signaturen)
- **Krav – den faste tredelsmalen:** (i) gjett kandidaten A(r) ved å regne
  **retningsderiverten** F′(x;r) = limₜ→₀ (F(x+tr) − F(x))/t; (ii) vis at A er
  **lineær**; (iii) vis at A er **begrenset** (‖A(r)‖ ≤ C‖r‖); (iv) vis at
  restleddet σ(r) = F(x+r) − F(x) − A(r) oppfyller ‖σ(r)‖/‖r‖ → 0 (typisk
  σ(r) = O(‖r‖²)). Sensor forlanger alle fire ledd.
- **Frekvens:** 6/12 ordinære + alle 3 konte. Kontekster: F(f) = ∫f³, F(x) =
  x(0)x(1), F(f) = ∫e⁻ˢx(s)², F(f)(t) = 2f² − e^{f−t²}, F(a) = (sin aᵢ) på ℓ^p,
  F(x) = ‖x‖² i indreproduktrom, F: R²→R² polynomavbildning.
- **Feller:** forveksle Gateaux med Fréchet (retningsderivert kan finnes uten at
  F er Fréchet-deriverbar – jf. 2016-5b der ensidige grenser skiller); glemme
  begrensethetssteget; ikke vise at restleddet går mot null **fortere** enn ‖r‖.

### C. Invers- og implisitt funksjonsteorem
- **Krav:** Regn Jacobimatrisen, vis at den er **inverterbar i punktet**
  (det ≠ 0), konkludér med teoremet at det finnes åpne omegner U, V med
  bijeksjon/lokal løsbarhet, og regn (F⁻¹)′ = (F′)⁻¹ eller partiellderivert via
  Cramer. Navngi teoremet.
- **Frekvens:** ~5/12 (2005, 2006, 2007, 2010, 2020-implisitt, 2021, 2021-konte).
- **Omskrevet eksempel:** «Systemet har løsning (1,1,−1). Vis at det finnes et
  åpent intervall om −1 og funksjoner X(z), Y(z) slik at (X(z), Y(z), z) løser
  systemet.»

### D. Operatornorm og begrensede lineære operatorer
- **Krav:** Vis linearitet + begrensethet ‖L(f)‖ ≤ C‖f‖ (da C = øvre skranke for
  ‖L‖); for eksakt operatornorm ‖L‖ = C vises begge ulikheter, der den nedre
  krever en **konkret nesten-optimal testfunksjon** (fasit 2010: lineær hattefunksjon
  med ‖f‖ = 1). Variant: vis at en invers operator er **ubegrenset** ved en
  følge med ‖gₙ‖ fast men ‖L⁻¹gₙ‖ → ∞.
- **Frekvens:** ~5/12.

### E. Fourier-rekke: beregning + rekkesum
- **Krav:** Bruk paritet (odde ⇒ kun sinusledd, like ⇒ kun cosinus) for å halvere
  arbeidet; regn koeffisientene med delvis integrasjon; sett inn et bestemt punkt
  (der f er kontinuerlig/deriverbar, så **Dinis test** gir at rekka konvergerer
  til f(x)) for å summere en tallrekke.
- **Frekvens:** 2012, 2015, 2018-konte, 2020, 2022, 2022-konte.
- **Omskrevet eksempel:** «Vis at Fourier-rekka til trinnfunksjonen er
  ½ + (2/π)∑(−1)ⁿ/(2n+1)·cos((2n+1)x), og bruk dette til å finne
  1 − 1/3 + 1/5 − 1/7 + … .»

### F. Fourier/funksjonalanalyse-konvergens
- **Krav:** Uniform konvergens av Fourier-rekka når ∑|αₙ| < ∞ (M-test-argument);
  entydighet (like koeffisienter ⇒ f = g) via Fejér/Cesàro eller L²; konvolusjon
  cₙ = aₙbₙ; ikke-eksistens av «enhet» for konvolusjon via Riemann–Lebesgue.
- **Frekvens:** 2016, 2017, 2020, 2021.

### G. Kompletthet / Cauchy
- **Krav:** Vis at et rom er komplett (Cauchy ⇒ konvergent) ELLER at det ikke er
  det (konkret Cauchy-følge uten grense i rommet). Standardteknikker: lukket
  underrom av komplett rom er komplett; punktvis grense + uniform kontroll ⇒
  grensefunksjon i rommet; isometri bevarer kompletthet.
- **Frekvens:** 5/12. Klassisk moteksempel: endelig-støtte-følger eller C_K(R) er
  ikke lukket/komplett i sup-normen.

### H. Kompakthet
- **Krav:** I R^n: kompakt ⇔ lukket + begrenset (Bolzano–Weierstrass/Heine–Borel).
  I funksjonsrom: **Arzelà–Ascoli** – kompakt ⇔ lukket + begrenset +
  **ekvikontinuerlig** (det siste er poenget: enhetskula er lukket+begrenset men
  IKKE kompakt i uendeligdimensjon). Ekstremverdisetningen brukes konstant:
  kontinuerlig funksjon på kompakt mengde oppnår min/maks (f.eks. nærmeste punkt,
  dist(x,E) oppnås).
- **Frekvens:** ~5/12 (tungt i konte).

### I. Kontraksjon + Banachs fikspunktteorem
- **Krav:** Vis d(T(x), T(y)) ≤ k·d(x,y) med k < 1 (ofte via at integranden er
  Lipschitz og integrasjon glatter), sjekk at rommet er **komplett**, konkludér
  med entydig fikspunkt. Klassisk anvendelse: eksistens/entydighet av ODE-løsning
  (Picard). Fella: (0,1] er ikke komplett ⇒ kontraksjon uten fikspunkt.
- **Frekvens:** 2015, 2018, 2021 (+ 2006, 2007, 2008).

### J. Uniform vs. punktvis konvergens
- **Krav:** Vis punktvis grense; avgjør uniform konvergens. Standardvåpen mot
  uniform konvergens: **«uniform grense av kontinuerlige er kontinuerlig»** – hvis
  den punktvise grensen er diskontinuerlig, kan konvergensen ikke være uniform.
  For uniform: M-test eller direkte supₓ|fₙ(x) − f(x)| → 0.
- **Frekvens:** 2011, 2013, 2014 (+ 2004–2009 tungt). Typiske følger: arctan(x²ⁿ),
  nxe⁻ⁿˣ², n²x²e⁻ⁿˣ, cos^n.

### K. Hilbertrom / indreprodukt
- **Krav:** Cauchy–Schwarz, ortonormal basis, **Bessels ulikhet** (∑|⟨u,eₙ⟩|² ≤
  ‖u‖²), Fourier-koeffisienter ⟨u,eₙ⟩, entydighet av koeffisienter,
  **Riesz-representasjon** (kontinuerlig funksjonal A(x) = ⟨x,y⟩). Kontinuitet av
  indreproduktet under grenser.
- **Frekvens:** 2013, 2016, 2022 (+ 2018-konte).

---

## 4. Sensorkrav og bevisstringens

Fasitene er usedvanlig informative om standarden:

1. **Alt skal begrunnes, men trivielt får være kort.** Fasit 2015 skriver rett ut
   «This is easy» om metrikk-verifikasjonen og «This is straight forward (don't
   write that on an exam)» om at noe er en norm. Sensor vet hva som er
   rutine – men det **må stå der**, om enn kortfattet. Det er trekantulikheten,
   begrensetheten og restleddsestimatet som gir poeng, ikke positivitet/symmetri.

2. **Alternative løsninger honoreres konsekvent.** Nesten hver oppgave i fasitene
   har et eksplisitt «Alternatively:». Eksempler: kompakthet via minimerende følge
   ELLER via ekstremverdisetningen; Fréchet-derivasjon direkte fra definisjonen
   ELLER via produkt-/kjerneregel; Fourier-entydighet via Fejér ELLER via L².
   Boka bør lære **begge veier og når hver egner seg**.

3. **Bevismalene er faste og forventes fulgt.** Sensor leter etter den kjente
   strukturen: for Fréchet – de fire leddene; for norm/metrikk – de tre
   aksiomene; for kontraksjon – Lipschitz-konstant < 1 **pluss** kompletthet;
   for Arzelà–Ascoli – lukket + begrenset + ekvikontinuerlig. Å hoppe over ett
   ledd (typisk begrensethet eller ekvikontinuitet) er den dyreste enkeltfeilen.

4. **Forutsetningene skal sjekkes eksplisitt før et teorem påberopes.** Banach
   krever kompletthet (2021-1 straffer nettopp manglende kompletthet); Arzelà–
   Ascoli krever ekvikontinuitet; ekstremverdisetningen krever kompakthet +
   kontinuitet; ledd-for-ledd derivasjon/integrasjon krever uniform konvergens av
   den **deriverte/integrerte** rekka (2016-1b velger et delintervall [a,∞) for å
   få uniform kontroll).

5. **Navngi teoremet.** Fasitene skriver «by the Extreme Value Theorem», «by
   Banach's Fixed Point Theorem», «by the Inverse Function Theorem», «by
   Weierstrass' M-test», «by Bessel's inequality», «by the Riemann–Lebesgue
   lemma». Å referere til det påberopte resultatet med navn er en del av
   standarden.

6. **Moteksempler krever verifikasjon.** Å oppgi «X = (0,1)» er ikke nok – man må
   vise at eksempelet faktisk bryter (eller oppfyller) den aktuelle egenskapen.

### Hva som skiller karakternivåene
- **Bestått** henter poeng på de mekaniske delene: verifisere norm-/metrikk-
  aksiomer, regne en Jacobimatrise, regne Fourier-koeffisienter, sette opp
  retningsderiverten, punktvis grense.
- **Midtsjiktet** fullfører de faste malene korrekt: alle fire Fréchet-ledd,
  operatornorm med testfunksjon, kompletthetsargument med lukket underrom,
  uniform konvergens med riktig M-test-skranke.
- **Toppsjiktet** kjennetegnes av: (i) presis håndtering av **når** et teorem
  gjelder (kompletthet før Banach, ekvikontinuitet før Ascoli, uniform konvergens
  før ledd-for-ledd); (ii) korrekt skille Gateaux/Fréchet og bevissthet om at
  retningsderivert ikke er nok; (iii) selvstendig konstruerte moteksempler med
  full verifikasjon; (iv) å se og bruke koblingen mellom a)- og b)-punkt; (v)
  ryddig ε-argumentasjon med riktig kvantorrekkefølge.

---

## 5. Typiske feil (utledet fra fasiter, sensorkommentarer og distraktordesign)

1. **Manglende ledd i Fréchet-beviset** – oftest begrensethetssteget eller
   restleddsestimatet. Å stoppe ved retningsderiverten og kalle den «derivert».
2. **Gateaux forvekslet med Fréchet** – tro at eksistens av alle retningsderiverte
   medfører differensiabilitet (falskt; jf. 2016-oppgaven der ensidige grenser
   spriker og F ikke er deriverbar).
3. **Teorem påberopt uten å sjekke forutsetningene** – Banach uten kompletthet,
   Arzelà–Ascoli uten ekvikontinuitet, ekstremverdisetning uten kompakthet.
4. **«Lukket + begrenset ⇒ kompakt» i uendeligdimensjon** – gjelder bare i R^n.
   Enhetskula/enhetssfæren i et funksjonsrom er lukket+begrenset men ikke kompakt.
5. **Ledd-for-ledd derivasjon/integrasjon uten uniform konvergens** av den
   deriverte/integrerte rekka; å glemme å velge et delintervall der M-testen gir
   uniform kontroll.
6. **Uniform konvergens «bevist» punktvis** – eller motsatt: å ikke utnytte at en
   diskontinuerlig punktvis grense utelukker uniform konvergens.
7. **Ufullstendig verifikasjon av norm-/metrikk-aksiomer** – hoppe over
   trekantulikheten (den eneste ikke-trivielle) eller definitthets-retningen
   (‖u‖ = 0 ⇒ u = 0).
8. **Operatornorm kun én vei** – vise ‖L‖ ≤ C men glemme den nedre skranken med
   en konkret testfunksjon (eller motsatt).
9. **Kompletthet forvekslet med lukkethet** – et rom kan være lukket i seg selv
   men ikke komplett; en Cauchy-følge som «ser konvergent ut» men har grense
   utenfor rommet.
10. **Fourier: paritet ikke utnyttet** (dobbeltarbeid), feil i delvis integrasjon,
    eller å summere en tallrekke i et punkt der f er diskontinuerlig (da gir Dini
    gjennomsnittet av ensidige grenser, ikke f(x)).
11. **Moteksempel uten verifikasjon** – oppgi en mengde/funksjon uten å vise at
    den faktisk har (eller mangler) egenskapen.
12. **ε–δ-slurv** – byttet kvantorrekkefølge, δ som avhenger av x der uniformitet
    kreves, eller å velge N/δ som ikke er uniform over hele mengden.

---

## 6. Teorem-, definisjons- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og bevise/gjennomføre)

**Metriske rom:**
- Metrikk- og norm-aksiomene; indusert metrikk d(f,g) = ‖f − g‖.
- Åpen/lukket mengde, indre/rand/tillukning; **x ∈ Ā ⇔ ∃ følge fra A mot x**;
  opphopningspunkt ⇔ følge av forskjellige punkter mot punktet.
- **Bolzano–Weierstrass-egenskapen / Heine–Borel**: kompakt ⇔ lukket + begrenset
  i R^n; kompakthet via følgekompakthet.
- **Ekstremverdisetningen**: kontinuerlig funksjon på kompakt mengde oppnår
  min/maks – arbeidshesten i eksistensbevis (nærmeste punkt, dist(x,E)).
- **Kompletthet**: Cauchy ⇔ konvergent; lukket underrom av komplett rom er
  komplett; isometri bevarer kompletthet; R er komplett.
- **Uniform kontinuitet**: definisjon, negasjon (følgekarakterisering), og at
  kontinuerlig på kompakt ⇒ uniformt kontinuerlig; Lipschitz ⇒ uniformt kontinuerlig.

**Konvergens av funksjoner:**
- Punktvis vs. uniform konvergens; **uniform grense av kontinuerlige er kontinuerlig**.
- **Weierstrass' M-test**; ledd-for-ledd integrasjon og derivasjon under uniform
  konvergens (av den relevante rekka).
- **Weierstrass' approksimasjonsteorem**: polynomer tette i C[a,b].
- **Arzelà–Ascoli**: kompakt i C(K) ⇔ lukket + begrenset + ekvikontinuerlig.
- **Dinis teorem** (avtakende følge mot 0 på kompakt ⇒ uniform).

**Normerte rom og operatorer:**
- Begrenset lineær operator; **operatornorm** ‖L‖ = sup_{‖f‖≤1} ‖Lf‖; ‖Lf‖ ≤ ‖L‖‖f‖.
- Normekvivalens (c‖x‖ ≤ ‖x‖' ≤ C‖x‖) ⇔ samme konvergens/kontinuitet.
- Banachrom; **Banachs fikspunktteorem** (kontraksjon på komplett rom) + Picard-ODE.
- **ℓ^p- og funksjonsrom**: C[a,b], Cb, Cc/C_K, ℓ¹, ℓ^p, sup-norm, L¹-norm.

**Differensiabilitet i normerte rom:**
- Retningsderivert (Gateaux) F′(x;r) = limₜ→₀ (F(x+tr) − F(x))/t.
- **Fréchet-derivert** via firetrinnsmalen; forholdet Gateaux ↔ Fréchet;
  produkt-/kjerneregel for deriverte.
- Jacobimatrise; **invers funksjonsteorem** og **implisitt funksjonsteorem** via
  inverterbar Jacobi/derivert; kritisk punkt (F′(a) = 0) i ekstremalpunkt.

**Fourier-analyse og Hilbertrom:**
- Reelle (aₙ, bₙ) og komplekse (αₙ) Fourier-koeffisienter; paritetsforenkling.
- Punktvis konvergens (**Dinis test**), uniform konvergens (∑|αₙ| < ∞),
  **L²/Fejér–Cesàro**-konvergens; **Bessels ulikhet**, **Parsevals identitet**,
  **Riemann–Lebesgue-lemmaet**; konvolusjonsteorem (cₙ = aₙbₙ).
- Indreprodukt, Cauchy–Schwarz, ortonormal basis, **Riesz-representasjonsteorem**.

**Potensrekker:**
- Konvergensradius (rot-/forholdstest, lim sup |aₙ|^{1/n}); analytisitet og
  ledd-for-ledd derivasjon innenfor konvergensintervallet.

### Må dekkes for pensum, men er svakt/ikke arkivbelagt de siste ni årene
- **Målteori / Lebesgue-integrasjon**: σ-algebra, målbare funksjoner, konstruksjon
  av Lebesgue-mål, integral via enkle funksjoner, **monoton og dominert
  konvergens**, mengder av mål null / «nesten overalt», L¹-approksimasjon.
  Eksamenstestet 2011–2015, deretter borte, men står i emnebeskrivelsen (2026).
  Dekk med standardmetoder; merk kapitlene som «ikke arkivbelagt etter 2015».
- **Sammenhengende rom (connectedness)**: nevnt i emnebeskrivelsen, ingen tydelig
  arkivforekomst – dekk kort.
- **Sup/inf og kompletthetsaksiomet for R** som egen bevistematikk: MAT1300-staple,
  nesten borte etter 2010, men et nødvendig fundament tidlig i boka.

### Notasjonskonvensjoner boka bør speile
- F′(x;r) for retningsderivert, F′(x) eller A for Fréchet-derivert, A(r) for
  virkning; σ(r) for restleddet i differensiabilitetsdefinisjonen.
- ‖·‖ for norm, d for metrikk, d∞/‖·‖∞ for sup-norm, ‖·‖₁ for L¹/ℓ¹, ⟨·,·⟩ for
  indreprodukt; Ā for tillukning, ∂A for rand, B(a;r) for kule.
- αₙ = ⟨u,eₙ⟩ for Fourier-/koordinatkoeffisienter; en(x) = eⁱⁿˣ for kompleks basis.
- Fasitspråket: «by the Extreme Value Theorem», firetrinns Fréchet-oppsett,
  eksplisitt «Alternatively:»-løsning, aksiomlister (i)–(iii).

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (bærer eksamen)
1. **Fréchet-/retningsderivert-malen** – 4 av 5 siste ordinære sett + alle konte;
   den tydeligste karakterskilleren. Firetrinnsstrukturen, Gateaux/Fréchet-skillet,
   restleddsestimatet.
2. **Norm- og metrikk-verifikasjon** – 8/12; det mest gjentatte enkeltbeviset.
   Alle aksiomer, med fokus på trekantulikhet og definitthet.
3. **Fourier-rekke: beregning + rekkesum + konvergenstype** – 7/12 og stigende;
   paritet, delvis integrasjon, Dini i et punkt, uniform under ∑|αₙ| < ∞.
4. **Invers-/implisitt funksjonsteorem** – ~5/12; Jacobi inverterbar ⇒ lokal
   bijeksjon/løsbarhet, (F⁻¹)′ = (F′)⁻¹.
5. **Kompletthet + Cauchy** – 5/12; komplett/ikke-komplett med konkret
   moteksempelfølge; lukket underrom av komplett rom.
6. **Kompakthet: ekstremverdisetning + Arzelà–Ascoli** – ~5/12; kompakt ⇔
   lukket+begrenset (R^n), pluss ekvikontinuitet i funksjonsrom.

### Nivå 2 – må kunne (gir bredden)
7. **Operatornorm og begrensede operatorer** – linearitet+begrensethet, eksakt
   norm med testfunksjon, ubegrenset invers.
8. **Uniform vs. punktvis konvergens** – M-test, «uniform grense av kontinuerlige»,
   ledd-for-ledd derivasjon/integrasjon.
9. **Uniform kontinuitet** – definisjon, negasjon, Lipschitz-argument, kontinuerlig
   på kompakt.
10. **Kontraksjon + Banach + Picard-ODE** – kontraksjonskonstant < 1 + kompletthet.
11. **Hilbertrom**: Bessel, ortonormal basis, Fourier-koeffisienter,
    Riesz-representasjon.
12. **Metrisk topologi**: tillukning via følger, rand/opphopning, åpen/lukket,
    A∪B-tillukning.
13. **Normekvivalens** og hvordan den styrer konvergens/kontinuitet.

### Nivå 3 – bør dekkes (pensum/robusthet, lav eller epoke-avhengig arkivfrekvens)
14. **Målteori / Lebesgue** – tungt 2011–2015, null etter; dekkes for
    emnebeskrivelsens skyld (σ-algebra, målbarhet, Lebesgue-integral, monoton/
    dominert konvergens, «n.o.»). Merkes «ikke arkivbelagt etter 2015»; sjekk nye
    sett.
15. **Potensrekker** – konvergensradius, analytisitet, ledd-for-ledd derivasjon.
16. **Weierstrass' approksimasjonsteorem** – signaturbevis (F kontinuerlig som er
    0 på polynomer er 0 overalt).
17. **Sup/inf og kompletthetsaksiomet** – fundament tidlig i boka; egen
    bevistematikk nesten borte fra eksamen.
18. **Sammenhengende rom** – kort, per emnebeskrivelsen.

### Prognose for neste ordinære eksamen (basert på 2018–2022-malen)
~10 likt vektede 10-poengs deloppgaver over 4 timer, ingen hjelpemidler, alt
begrunnet. Forventet sammensetning:
- **Én Fréchet-/retningsderivert-oppgave** (nesten sikker), gjerne koblet til
  invers-/implisitt funksjonsteorem i b)-punktet.
- **Én Fourier-oppgave** – beregn rekka til en konkret funksjon og/eller vis en
  konvergensegenskap; ofte summér en tallrekke.
- **Én norm-/metrikk-verifikasjon** på et konkret (funksjons- eller følge)rom.
- **Én kompletthet- eller kompakthetsoppgave**, ofte med «gi et moteksempel».
- **Én operatornorm-/begrenset-operator-oppgave** ELLER **én Hilbertrom-oppgave**
  (Bessel/Riesz).
- Muligens **én kontraksjon/fikspunkt-** eller **uniform konvergens**-oppgave.
- **Minst én deloppgave ber om et eksempel/moteksempel** med full verifikasjon.

**Usikkerhetsmoment:** Dersom målteori/Lebesgue er reelt gjeninnført i pensum og
eksamen etter 2022 (den står fortsatt i emnebeskrivelsen), må vektingen justeres
– det ville reaktivere σ-algebra-, målbarhets- og konvergensteorem-sjangrene fra
2011–2015. Verifiser mot første tilgjengelige sett fra 2023 og senere.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MAT2400/`.

**Løsningsforslag/sensorfasiter lest grundig (9):**
`losningsforslag/MAT2400-V2022-losningsforslag.pdf`,
`losningsforslag/MAT2400-V2022-konte-losningsforslag.pdf`,
`losningsforslag/MAT2400-V2021-fasit.pdf`,
`losningsforslag/MAT2400-V2021-konte-fasit.pdf`,
`losningsforslag/MAT2400-V2020-fasit.pdf`,
`losningsforslag/MAT2400-V2018-fasit.pdf`,
`losningsforslag/MAT2400-V2016-fasit.pdf`,
`losningsforslag/MAT2400-V2015-fasit.pdf`,
`losningsforslag/MAT2400-V2010-fasit.pdf`.

**Ordinære eksamenssett lest grundig (8):** `eksamen/MAT2400-V2015.pdf` …
`eksamen/MAT2400-V2022.pdf` (2015, 2016, 2017, 2018, 2020, 2021, 2022) +
`eksamen/MAT2400-V2013.pdf`, `eksamen/MAT2400-V2014.pdf` (målteori-epoken).

**Kontinuasjonssett lest grundig (3):** `utsatt/MAT2400-V2018-konte.pdf`,
`utsatt/MAT2400-V2021-konte.pdf`, `utsatt/MAT2400-V2022-konte.pdf`.

**Eldre sett skumlest for temaregistrering (9):** `eksamen/MAT2400-V2004.pdf` …
`eksamen/MAT2400-V2012.pdf` inkl. de to deleksamenene (`-V2004-deleksamen.pdf`,
`-V2005-deleksamen.pdf`) – dette er MAT1300-/overgangsepoken (se del 0).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad:
`fagbeskrivelse-mat2400.md`; kilde: <https://www.uio.no/studier/emner/matnat/math/MAT2400/>).

**Pensumbok (identifisert via fasitreferanser):** Tom Lindstrøm, _Spaces: An
Introduction to Real Analysis_ (AMS, 2017).

**Merknader om kildene:**
- **Hull i arkivet:** Ingen ordinær eksamen fra **2019** og ingen sett etter
  **2022**. Ingen fasit for 2011, 2012, 2013, 2014, 2017 (2017-fasit er en skannet
  bildefil uten tekstlag). Metodekravene for disse årene er utledet fra
  oppgavetekstene + kontinuiteten i fasitpraksis 2015–2022.
- **Tre kurs i ett arkiv:** Settene 2004–2009 er merket **MAT1300 – Analyse 1**
  (forløper, uten målteori), 2010–2012 **MAT2400 – Analyse 1** (målteori kommer
  inn), 2013–2022 **MAT2400 – Reell analyse**. Frekvensanalysen i del 2 bruker de
  12 ordinære MAT2400-settene 2010–2022. Se del 0 for den viktige pensumfor­
  skyvningen (særlig målteori-kollapsen etter 2015).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske
  uttrykk, definisjoner og teoremer er standard fagnotasjon uten opphavsrettslig
  vern.
