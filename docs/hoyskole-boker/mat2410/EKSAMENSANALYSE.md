# Eksamensanalyse: MAT2410 Innføring i kompleks analyse (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på arkivet i
> `~/Desktop/Eksamner/UiO/MAT2410/`: eksamenssett fra MAT2300-epoken 2003–2009,
> MAT2410-epoken 2010–2023 (ordinære sett + kontinuasjon), samt obligatoriske
> innleveringer (h22, h23). Løsningsforslag/sensorfasiter og de nyeste
> oppgavesettene er lest **grundig oppgave-for-oppgave**; de eldre MAT2300-settene
> er skummet for temaregistrering. **Alt innhold er omskrevet med egne ord** –
> ingen ordrette gjengivelser av oppgavetekster eller fasiter. Matematiske
> definisjoner, teoremer og notasjon er standard fagstoff og ikke opphavsrettslig
> beskyttet. Analysen er kvantitativ der kildene tillater det.

---

## 0. Kort forbehold: ett fag, tre emnenavn

I motsetning til MAT2400 («tre kurs i ett arkiv», med betydelig pensumforskyvning)
er MAT2410 **innholdsmessig stabilt hele veien – det er kompleks analyse fra
2003 til 2023.** Men arkivet spenner over en navneendring, som er verdt å merke
seg for den som leser de eldste settene:

| Periode | Emnenavn på settet | Innhold |
|---|---|---|
| 2003–2009 | **MAT2300 – Analyse 2 / Analysis II** (én skannet fasit er t.o.m. hodet «MAT2700») | Kompleks analyse: residyregning, Laurent-/potensrekker, singularitetsklassifikasjon, maksimumsprinsippet, Rouché, harmoniske funksjoner, røtter/kompleks likning. |
| 2010–2023 | **MAT2410 – Innføring i kompleks analyse** | Samme fagområde. Fra ~2018 tydelig fast mal (se del 1). |

**Konklusjon:** den eneste praktiske konsekvensen av navneendringen er at man må
lete under to emnekoder i UiOs arkiv. Pensumkjernen – analytiske og harmoniske
funksjoner, potens- og Laurentrekker, isolerte singulariteter, Cauchys
integralteorem/-formel, residyregning, maksimumsprinsippet, Schwarz' lemma,
Möbius-/konforme avbildninger og argumentprinsippet/Rouché – er den samme
gjennom hele arkivet. Fasitreferansene («Gamelin p. 64», «Rule 2/Rule 3,
Gamelin p. 197») identifiserer pensumboka entydig som **Theodore W. Gamelins
_Complex Analysis_ (Springer UTM)**, som er den naturlige ryggraden også for vår
lærebok.

---

## 1. Eksamensform og utvikling

MAT2410 vurderes i dag med **én avsluttende skriftlig skoleeksamen som teller
100 %**. To obligatoriske innleveringer må være godkjent for adgang (arkivet har
`h22_compulsory1/2` og `h23_compulsory1/2` med rettede besvarelser). Karakterskala
A–F. Emnet er **aktivt** (10 studiepoeng).

| Trekk | Dagens form (2013–2023) |
|---|---|
| Varighet | **4 timer** (09:00–13:00, 14:30–18:30 eller 15:00–19:00) |
| Struktur | **5–7 oppgaver med eksplisitt vektprosent** (10 %, 20 % eller 30 %), sum 100 %. Store oppgaver (20–30 %) har a/b/c-deler som bygger på hverandre |
| Hjelpemidler | **Ingen** – MED ETT UNNTAK: pandemiårene **2020 og 2021** var digitale hjemmeeksamener med «alle hjelpemidler» tillatt. Oppgavene forble likevel rene bevis-/regneoppgaver der hjelpemidler er til liten nytte. Fra 2022 igjen «ingen hjelpemidler» |
| Vedlegg | **Ingen** (ingen utdelt formel-/residytabell – alt må kunnes utenat) |
| Språk | Norsk (bokmål) eller engelsk, varierer år for år; enkelte fasiter blander språk. Studenten kan svare på begge |
| Instruks | «Svaret skal begrunnes» / «remember to include appropriate justifications». Fra 2021 eksplisitt: **resultater fra tidligere deloppgaver kan brukes videre selv om de ikke er løst** |

**Formatutvikling:**

| Periode | Struktur |
|---|---|
| 2003–2009 (MAT2300) | 3 timer, 4–5 oppgaver, ofte med teori/definisjonsspørsmål («Formuler Moreras teorem og anvend det …») |
| 2010–2017 | 4 timer, overgang; flere deler per oppgave; noen sett har en Fourier-/reell-analyse-rest (2017, 2019) |
| 2018–2023 | **Fast mal:** 5–7 vektede oppgaver, 4 timer. Én tung «singularitet + Laurent + residy + reelt integral»-oppgave (20–30 %) er nesten alltid med. En kort Rouché-/argumentprinsipp-oppgave (10 %) og en kort «vis at f er konstant»-oppgave (CR/Liouville/maks, 10 %) er faste |

**Konstanter på tvers av dagens epoke:**
- **Oppgavene er vektet ulikt** (til forskjell fra MAT2400s likevektede blokker).
  Den tunge residy-/konturintegral-oppgaven er verdt mest (20–30 %) og skiller
  karakterene.
- **Kjeding er innbygd og oppmuntres:** en stor oppgave går typisk a) klassifiser
  singulariteter/finn residuer → b) regn et lukket konturintegral → c) bruk dette
  til å regne et reelt uegentlig integral over ℝ via halvsirkel + ML-estimat.
- **Ingen utdelt tabell:** residyformlene (enkel pol, pol av orden n),
  Møbius-formelen, standard potensrekker (eˢ, sin, cos, tan, Log(1+z),
  geometrisk rekke) forventes memorert.

---

## 2. Temafrekvens

Tellegrunnlaget er de **11 MAT2410-settene der jeg har full oppgavetekst**: 2013,
2016, 2017, 2018, 2019, 2020 (ordinær), 2020-konte (jan-2021), 2021, 2022, 2023,
og 2010-fasiten. MAT2300-epoken (2003–2009) og obligene kommenteres i teksten.
Celleverdi = antall av de 11 settene der temaet er (minst) én egen deloppgave. Et
sett tester typisk 4–6 av temaene. Prosent er avrundet.

| Tema | Frekvens (av 11) | Trend |
|---|---|---|
| **Residyregning: klassifiser singulariteter + finn residuer + lukket konturintegral** | **10/11 ≈ 91 %** | Kursets ryggrad, gjennomgående |
| **Cauchy–Riemann / analytisitet / «vis at f er konstant» / harmoniske funksjoner** | **9/11 ≈ 82 %** | Stabil, nesten årlig |
| **Laurent-/potensrekker + konvergensområde (annuli)** | **8/11 ≈ 73 %** | Stabil, tett koblet til residy/singularitet |
| **Reelt uegentlig integral via halvsirkel/kontur + ML-estimat** | **7/11 ≈ 64 %** | Stabil signatur i den tunge oppgaven |
| **Argumentprinsippet / Rouchés teorem (antall nullpunkt i område)** | **7/11 ≈ 64 %** | Stigende – i så godt som hvert sett 2018–2023 |
| **Isolerte singulariteter: klassifisering (pol/vesentlig/hevbar) + orden** | **7/11 ≈ 64 %** | Stabil, ofte del av residyoppgaven |
| **Möbius-/konforme avbildninger + bildemengder** | **6/11 ≈ 55 %** | Stabil klassiker (svakere 2022–2023) |
| **Entire funksjoner: Liouville / polynom-karakterisering / vesentlig sing. i ∞** | **5/11 ≈ 45 %** | Stigende – 2016, 2020, 2021, 2022 |
| **Maksimumsprinsippet / Schwarz' lemma / middelverdiegenskap** | **4/11 ≈ 36 %** | Stabil, ofte i «vis konstant»-oppgaver |
| **Primitiv / grenoppdelt (kutt-) logaritme / eksistens av primitiv** | **4/11 ≈ 36 %** | Stigende (2019, 2020, 2022, 2023) |
| **Potensrekke: konvergensradius + leddvis derivasjon/integrasjon** | **4/11 ≈ 36 %** | Stabil |
| **Kompleks likning / røtter (z^n = w, e^z, kompleks log)** | **3/11 ≈ 27 %** | Stabil, ofte som lav-vekts åpning |
| **Cauchys integralformel/-teorem + estimater (som eksplisitt teorem)** | **4/11 ≈ 36 %** | Underliggende overalt; eksplisitt i 2020-3b, 2023-2 |
| **Fourier-rekke (reell-analyse-rest fra beslektet pensum)** | **2/11 ≈ 18 %** | Kun 2017, 2019 – se delkommentar 6 |
| **Reelt trigonometrisk integral via enhetssirkel (∫₀^{2π} … dθ)** | **2/11 ≈ 18 %** | 2019, 2020-konte |
| **Væskestrøm / kompleks hastighetspotensial (harmonisk anvendelse)** | **1/11 ≈ 9 %** | Kun 2021 |

### Delkommentarer

1. **Residyregning er kursets ryggrad.** Ni av ti settene har minst én oppgave der
   man skal finne singularitetene til en rasjonal/meromorf funksjon, klassifisere
   dem, regne residuene, og bruke residysetningen `∮ = 2πi·ΣRes` på en lukket
   kurve. Den nesten obligatoriske «signaturoppgaven» (20–30 % vekt) kjeder dette
   videre til et reelt integral (se punkt 3).

2. **«Vis at f er konstant» er den mest gjentatte korte oppgaven.** Den opptrer i
   mange forkledninger, alle med samme kjerne (Cauchy–Riemann ⇒ alle
   partiellderiverte 0 ⇒ konstant på et sammenhengende område): `u = 2v` (2022),
   `g = ū − iv̄` analytisk (2021), `f̄` analytisk (2023), `f` reellverdig (2013),
   `Re f = Im f` (2013), `f` reell på randen + maksimumsprinsipp på Im f (2016).
   Dette er den tryggeste poengkilden i hele faget.

3. **Den kjedede residy-/kontur-/reelt-integral-oppgaven er signaturarketypen.**
   Malen går nesten ordrett igjen: (a) klassifiser singulariteter og finn
   residuer; (b) regn et lukket konturintegral (halvsirkel Γ_r i øvre halvplan,
   eller |z|=r); (c) vis at halvsirkelbuen → 0 med **ML-estimatet** (`|e^{iz}| =
   e^{−y} ≤ 1` for `y ≥ 0`; `|z^4 + …| ≥ R^4 − …`) og konkludér verdien av
   `∫_{−∞}^{∞}`. Ta real-/imaginærdel til slutt for `cos/sin`-varianten
   (2013 `cos(ax)/(1+x²)`, 2016 `sin x/(x+x³)`, 2021 `cos x/(x⁴+2x²+1)`,
   2022 `2e^{ix}/(1+x²)`, 2023 `1/(z²+1)²`).

4. **Argumentprinsippet/Rouché er stigende og nesten årlig.** «Hvor mange
   nullpunkt har `p(z)` i området D?» løses ved å velge dominerende ledd `f` med
   `|f| > |g|` på ∂D og telle nullpunktene til `f`. Domenene varierer: enhetsdisk
   (2021, 2023), disk `|z| < 2` (2022), kvart-disk-sektor (2020), annulus
   `1 < |z| < 2` (2018, 2019), rektangel (2016, 2017), halvplan (2020-konte).
   Ofte kombinert med **algebraens fundamentalteorem** for å telle nullpunktene i
   komplementet.

5. **Möbius-/konforme avbildninger + bildemengder** er en stabil klassiker: gitt
   tre punkt-korrespondanser eller en formel, bestem bildet av en disk/sirkel.
   Metoden er alltid den samme: en Möbius-avbildning sender generaliserte sirkler
   til generaliserte sirkler; finn bildet av **randen** (linje hvis ett randpunkt
   → ∞, ellers sirkel) ved å sette inn 3 punkter, og avgjør hvilken side disken
   havner på ved å sjekke ett indre punkt (typisk `f(0)`). 2019 tester konform
   selv-avbildning av enhetsdisken med gitt `f(0)` og `f'(0)` (Schwarz/Blaschke).

6. **Fourier-rekker er en epoke-rest, ikke en kjerne.** To sett (2017, 2019) har
   en Fourier-oppgave (beregn koeffisienter, uniform konvergens, summér en
   tallrekke som `1 − 1/3 + 1/5 − … = π/4`). Dette speiler at kompleks analyse og
   Fourier tidvis er undervist sammen. **Den bør dekkes lett** (ikke som
   hovedtema), og merkes «forekommer sporadisk». Merk: dette temaet er nettopp
   der MAT2410 grenser mot tma4121 (se del 7).

---

## 3. Oppgavetype-katalog

MAT2410 er et **blandet regne- og bevisemne**: tyngdepunktet ligger på konkrete
utregninger (residuer, integraler, bildemengder, rekker) som skal **begrunnes**,
med et fast innslag av korte bevis («vis at f er konstant», «vis at f er et
polynom»). Anslått fordeling av deloppgavene i settene 2016–2023:

| Sjanger | Andel | Kommentar |
|---|---|---|
| **«Regn ut / Finn / Bestem»** (med begrunnelse) | **~60 %** | Residuer, konturintegral, reelt integral, Laurent-rekke, bildemengde, røtter |
| **«Vis at / Bevis at»** (bevis) | **~30 %** | f konstant, f polynom, harmonisk, essensiell singularitet, entydig rot |
| **«Klassifiser / Bestem type»** | **~8 %** | Singularitet: pol av orden n / vesentlig / hevbar |
| **«Formuler / State»** (teorem) | **~2 %** | Nesten borte etter MAT2300; ett tilfelle 2017 (residysetningen), 2005 (Morera) |

De faktiske arketypene som går igjen:

### A. Klassifiser singulariteter + finn residuer
- **Krav:** Skriv funksjonen som brøk `p(z)/q(z)` (eller ganger av kjente entire
  funksjoner). Singulariteter der nevner = 0. **Bestem ordenen:** faktorisér
  nevner, eller bruk at et enkelt nullpunkt i nevner (der teller ≠ 0) gir enkel
  pol, dobbelt nullpunkt gir dobbelpol osv. Ordensregnestykke ved sammenfallende
  null i teller (2016-5: teller `e^{iz}−1` har enkelt null i 2πk ⇒ hevbar i 0;
  2022-4: `tan z / z³` gir pol av orden 3−1 = 2 i 0). **Residuer:** enkel pol
  `Res = lim(z−z₀)f`; pol av orden n `Res = (1/(n−1)!)·lim d^{n−1}/dz^{n−1}
  [(z−z₀)ⁿf]` («Rule 2/3» i Gamelin); eller `Res = a_{−1}` fra Laurent-rekka.
- **Frekvens:** ~7/11 (kjerne i signaturoppgaven).
- **Omskrevet eksempel:** «Finn alle singulariteter til `f(z) = tan z / z³`,
  bestem ordenen på polene, og finn residuene.»

### B. Reelt uegentlig integral via halvsirkel + ML (signaturarketypen)
- **Krav – den faste tredelsmalen:** (i) lukk med halvsirkel `Γ_r` i øvre
  halvplan; residysetningen gir `∮_{Γ_r} = 2πi·Σ_{øvre halvplan} Res`; (ii) vis at
  buebidraget `∫_{buen} → 0` med **ML-estimatet** – nesten alltid via `|e^{iz}| =
  e^{−Im z} ≤ 1` (for `y ≥ 0`) og en nedre skranke på nevner fra
  trekantulikheten (`|z⁴ + 2z² + 1| ≥ r⁴ − 2r² − 1`); (iii) ta grensen `r → ∞`
  og ekstrahér real-/imaginærdel for `cos/sin`. **Varianter:** dobbelpol (2023,
  2021: `Res` via derivasjon); nøkkelhull-/kutt-kontur for `z^α/(z²+1)` (2020-4:
  bruk gren diskontinuerlig langs positiv realakse, kontur over/under aksen,
  faktor `1 − e^{i2πα}`); enhetssirkel-parametrisering `z = e^{iθ}` for
  `∫₀^{2π}` (2019-4c, 2020-konte-3).
- **Frekvens:** 7/11.
- **Feller:** glemme ML-argumentet (obligatorisk); feil residyformel for
  dobbelpol; ta feil halvplan; ikke sjekke at integralet konvergerer.

### C. Argumentprinsippet / Rouchés teorem
- **Krav:** Del funksjonen `p = f + g` slik at `|f| > |g|` på ∂D (velg `f` =
  det ledd som dominerer på randen). Rouché gir at `p` og `f` har like mange
  nullpunkt (med multiplisitet) i D. Tell nullpunktene til `f` (enkelt). For
  sammensatte områder (sektor, annulus, rektangel): sjekk ulikheten på **hver del
  av randen**. Kombinér ofte med **algebraens fundamentalteorem** (grad = totalt
  antall nullpunkt) for å telle i komplementære områder (2019, 2021).
- **Frekvens:** 7/11.
- **Omskrevet eksempel:** «Bruk Rouché til å bestemme antall nullpunkt (med
  multiplisitet) av `z⁸ − 3z³ + 1` i `|z| < 1` og i `|z| > 1`.»

### D. Laurent-/potensrekke + konvergensområde
- **Krav:** Bruk **geometrisk rekke** `1/(1−w) = Σwⁿ` med passende substitusjon,
  også «ut/inn»-varianten `(1/z)·1/(1−a/z)` for `|z| > |a|`. Hver annulus (bestemt
  av avstanden fra sentrum til singularitetene) gir sin egen rekke (2013-3c,
  2016-2, 2017-2, 2020-2c: `f = Log(z/(z−1))` gir `−Σ(1/j)z^{−j}` for `|z| > 1`).
  Bruk kjente Maclaurin-rekker (`sin`, `cos`, `tan`, `e^z`, `Log(1+z)`) og dividér
  på potenser av z for Laurent om 0 (2021-2, 2022-4b). **Koeffisienten `a_{−1}`
  = residyen** – koblingen brukes til å regne konturintegral direkte fra rekka
  (2016-2b, 2020-2d, 2021-2).
- **Frekvens:** 8/11.

### E. Möbius-/konform avbildning + bildemengde
- **Krav:** For gitt trepunkts-korrespondanse: bruk kryssforholds-/Gamelin-formelen
  for å finne `f`. For bildet av en disk/sirkel: (i) en Möbius sender
  generaliserte sirkler til generaliserte sirkler; (ii) finn bildet av **randen**
  ved 3 punkter (blir en **linje** hvis et randpunkt sendes til ∞, ellers en
  sirkel); (iii) avgjør hvilken side/halvplan disken avbildes på ved å sjekke ett
  indre punkt. **Konform selv-avbildning av enhetsdisken:** Blaschke-faktor
  `e^{iθ}(z−a)/(1−āz)`, bestemt av `f(0)` og `f'(0)` (2019-2, Schwarz' lemma).
- **Frekvens:** 6/11.
- **Omskrevet eksempel:** «`h(z) = z/(z−1)`. Hva blir `h({|z| < 1})`?» (svar:
  halvplanet `Re z < 1/2`).

### F. Entire funksjoner: Liouville / polynom-karakterisering / singularitet i ∞
- **Krav:** For «vis at f er konstant»: **Liouville** (begrenset entire ⇒
  konstant) eller maksimumsprinsipp. For «vis at f er et polynom»: analysér
  singulariteten til `g(z) = f(1/z)` i 0 – pol/hevbar ⇒ polynom, vesentlig ⇒ ikke
  polynom (**Casorati–Weierstrass** utelukker vesentlig når `|g|` er bortre
  begrenset). For «f har vesentlig singularitet i ∞»: uendelig mange
  ikke-null-ledd i potensrekka ⇒ vesentlig sing. for `f(1/z)` i 0 (2022-6).
  Cauchy-estimatet på deriverte (`|f⁽ⁿ⁾|` via integralformelen over `|ζ| = n`)
  brukes til å vise `f'' = 0 ⇒ f = az + b` (2020-3).
- **Frekvens:** 5/11.

### G. «Vis at f er konstant» (Cauchy–Riemann / harmonisk)
- **Krav:** Skriv `f = u + iv`. Bruk Cauchy–Riemann (`u_x = v_y`, `u_y = −v_x`) på
  antakelsen (f̄ analytisk, u = 2v, Re f = Im f, f reell, …) til å utlede at
  **alle fire partiellderiverte er 0**, altså u, v konstante på det
  sammenhengende området. **Harmonisk-variant:** vis at u er harmonisk
  (`u_xx + u_yy = 0`), finn harmonisk konjugert v ved å integrere `v_x = −u_y` og
  `v_y = u_x` (2018-2, 2023-6). **Middelverdiegenskap:** verdien av en harmonisk
  funksjon i sentrum = gjennomsnittet over en sirkel (2023-6b).
- **Frekvens:** 9/11 (bredt tolket, inkl. harmonisk).

### H. Maksimumsprinsippet / Schwarz' lemma
- **Krav:** En ikke-konstant analytisk funksjon oppnår `max|f|` på **randen**
  (2016-4, 2017-3, 2020-konte-4c). Brukes til: å vise at en funksjon er konstant
  (hvis `max` oppnås innvendig), estimere `max|f|` på en lukket mengde,
  argumentere for entydighet. **Schwarz' lemma:** `f: D → D` analytisk med
  `f(0) = 0` ⇒ `|f(z)| ≤ |z|` og `|f'(0)| ≤ 1`; likhet ⇒ rotasjon (grunnlag for
  konforme selv-avbildninger, 2019). **Subtilitet (2023-7):** en harmonisk `u`
  kan være ubegrenset på åpen disk men begrenset på randsirkelen minus ett punkt
  – ingen motsetning med maksimumsprinsippet fordi u ikke er kontinuerlig helt ut
  til randen.
- **Frekvens:** 4/11.

### I. Primitiv / eksistens av primitiv / grenoppdelt logaritme
- **Krav:** En analytisk funksjon har primitiv på et **enkeltsammenhengende**
  område (eller når alle lukkede konturintegraler er 0). `1/z` har **ingen**
  primitiv på `ℂ\{0}` fordi `∮_{|z|=1} dz/z = 2πi ≠ 0` (2023-2). Konstruér
  primitiver via delbrøk + prinsipalgren `Log` (2022-5a: `F = i Log(z+i) −
  i Log(z−i)`), gyldig der argumentet unngår den negative reelle aksen. Bruk
  **grunnleggende teorem for komplekse kurveintegraler** `∫_γ f = F(slutt) −
  F(start)` når primitiv finnes.
- **Frekvens:** 4/11 (stigende).

### J. Kompleks likning / røtter
- **Krav:** Løs `z^n = w` ved polarform (`|z| = |w|^{1/n}`, argumenter fordelt med
  `2π/n`); løs `e^{z} = w` / `e^{z²} = 1` via kompleks logaritme (uendelig mange
  løsninger, `z = Log w + 2πni`); geometrisk tolkning av en gitt kompleks konstant
  (2023-1: `½ + (√3/2)i = e^{iπ/3}`, likesidet trekant, `z⁶ = 1`).
- **Frekvens:** 3/11 (typisk lav-vekts åpningsoppgave).

### K. Fourier-rekke (epoke-rest)
- **Krav:** Kompleks Fourier-koeffisient `c_k = (1/2π)∫_{−π}^{π} f(e^{it})e^{−ikt}
  dt`; beregn (utnytt paritet/eksponensialform), vis uniform konvergens (`Σ|c_k| <
  ∞` ⇒ M-test, eller `f ∈ C²`), summér en tallrekke ved å sette inn et punkt
  (2017-4: `cos(t/2)`; 2019-5: firkantbølge → `1 − 1/3 + 1/5 − … = π/4`).
- **Frekvens:** 2/11 – kun 2017 og 2019. Dekk lett, ikke som kjerne.

---

## 4. Sensorkrav og bevisstringens

Fasitene er informative om standarden:

1. **Alt skal begrunnes.** Fast instruks i alle nyere sett («remember to include
   appropriate justifications», «svaret skal begrunnes»). Et bart tallsvar (f.eks.
   verdien av et integral) uten utledning gir ikke full uttelling – selv i
   «regne»-oppgaver.

2. **ML-estimatet for halvsirkelbuen er ikke valgfritt.** Hver eneste
   reelt-integral-oppgave i fasitene bruker eksplisitt trekantulikhet for nedre
   skranke på nevner + `|e^{iz}| ≤ 1`, og konkluderer `∫_{buen} ≤ ML → 0`. Å
   hoppe over dette steget er den dyreste enkeltfeilen i signaturoppgaven.

3. **Riktig residyformel etter poltype.** Enkel pol: grenseformel. Pol av orden
   n: derivér `(z−z₀)ⁿf` `(n−1)` ganger (fasitene kaller det «Rule 2/Rule 3,
   Gamelin p. 197»). Hevbar singularitet gir residy 0. Feil formel (glemme
   derivasjonen for dobbelpol) straffes.

4. **Forutsetninger skal sjekkes før et teorem påberopes.** Rouché krever `|f| >
   |g|` på **hele** randen (sjekk hver del ved sammensatt område); Liouville
   krever begrensethet **og** entire; primitiv krever enkeltsammenheng (eller
   nullkonturer); maksimumsprinsippet krever kontinuitet ut til randen (jf.
   2023-7-subtiliteten).

5. **Navngi teoremet.** Fasitene skriver «by Rouché's theorem», «by the residue
   theorem», «by Liouville's theorem», «by the Casorati–Weierstrass theorem»,
   «by the maximum modulus principle», «by Cauchy's integral theorem», «by the
   fundamental theorem of algebra». Å referere resultatet med navn er en del av
   standarden.

6. **Alternative løsninger honoreres.** Fasitene tilbyr ofte to veier:
   residy `a_{−1}` fra Laurent-rekka **eller** grenseformel; konturintegral via
   residysetningen **eller** direkte fra Laurent-koeffisienten; deformasjon av
   kontur (2013-3d: fire små sirkler) **eller** residysetningen samlet.

7. **Bildemengder krever verifikasjon av siden.** Å oppgi at randen sendes til en
   linje er ikke nok – man må sjekke ett indre punkt (`f(0)`) for å avgjøre hvilket
   halvplan/side disken avbildes på.

### Hva som skiller karakternivåene
- **Bestått** henter poeng på de mekaniske delene: finn singulariteter, sett opp
  én residy, sett inn 3 punkter i en Möbius, skriv geometrisk rekke, verifiser
  Cauchy–Riemann.
- **Midtsjiktet** fullfører de faste malene: dobbelpol-residy med derivasjon,
  ML-argumentet for buen, riktig annulus for Laurent-rekka, Rouché med sjekk på
  hele randen, harmonisk konjugert.
- **Toppsjiktet** kjennetegnes av: (i) presis håndtering av **når** et teorem
  gjelder (enkeltsammenheng før primitiv, begrensethet før Liouville, kontinuitet
  til randen før maksimumsprinsipp); (ii) korrekt singularitet-i-∞-analyse via
  `f(1/z)` + Casorati–Weierstrass; (iii) nøkkelhull-/grenkontur for `z^α`; (iv) å
  se og bruke koblingen mellom a)/b)/c)-punktene; (v) subtiliteter som 2023-7
  (ubegrenset harmonisk uten motsetning med maksimumsprinsippet).

---

## 5. Typiske feil (utledet fra fasiter og oppgavedesign)

1. **Glemme ML-argumentet** for at halvsirkelbuen → 0 (obligatorisk), eller feil
   nedre skranke på nevner (`|z⁴ + 2z² + 1| ≥ r⁴ − 2r² − 1`, ikke `+`).
2. **Feil residyformel for pol av orden ≥ 2** – bruke den enkle grenseformelen
   uten derivasjon, eller feil ordenstelling.
3. **Feil poltype/orden** – forveksle hevbar (teller og nevner har sammenfallende
   null) med pol, eller feiltelle orden når teller også har null (`tan z / z³`).
4. **Rouché uten å sjekke hele randen** – ved sektor/annulus/rektangel må `|f| >
   |g|` verifiseres på hver randkomponent.
5. **Möbius: bildets side ikke bestemt** – å finne randlinjen uten å sjekke ett
   indre punkt for å avgjøre riktig halvplan.
6. **Feil annulus / manglende konvergensområde** – feil «ut/inn»-substitusjon i
   geometrisk rekke, eller Laurent-rekke oppgitt uten ringen den gjelder i.
7. **Påberope Liouville/maksimumsprinsipp uten forutsetninger** – Liouville uten
   begrensethet; maksimumsprinsipp uten kontinuitet til randen.
8. **«Vis f konstant»: stoppe for tidlig** – utlede at ett par partiellderiverte
   er 0 uten å konkludere at **alle** er 0 og at området er sammenhengende.
9. **Primitiv antatt uten enkeltsammenheng** – overse at `1/z` mangler primitiv på
   `ℂ\{0}` fordi `∮ dz/z ≠ 0`.
10. **Kompleks likning: tape løsninger** – glemme at `e^z = w` og `z^n = w` har
    henholdsvis uendelig/n løsninger; feil argumentgren.
11. **Bart svar uten begrunnelse** – særlig i integral-/residy-oppgaver, der
    utledningen bærer poengene.
12. **Grenkontur for `z^α`: feil faktor** – overse `1 − e^{i2πα}`-faktoren mellom
    over- og undersiden av kuttet.

---

## 6. Teorem-, definisjons- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og gjennomføre)

**Analytiske og harmoniske funksjoner:**
- **Cauchy–Riemann-likningene** (`u_x = v_y`, `u_y = −v_x`); analytisk ⇒ CR +
  kontinuerlige partiellderiverte; analytisk på et **sammenhengende område** med
  `f' = 0` ⇒ konstant.
- Harmonisk funksjon (`u_xx + u_yy = 0`); real-/imaginærdel av analytisk er
  harmonisk; **harmonisk konjugert** (finnes på enkeltsammenhengende/stjerneformet
  område); **middelverdiegenskapen**.
- **Maksimumsprinsippet** (max |f| på randen) og maksimumsprinsippet for
  harmoniske funksjoner; **Schwarz' lemma** og konforme selv-avbildninger av
  disken (Blaschke-faktorer).

**Kompleks integrasjon:**
- **Cauchys integralteorem** (`∮ = 0` for analytisk på enkeltsammenhengende
  område) og **Cauchys integralformel** for f og deriverte
  (`f⁽ⁿ⁾(z₀) = (n!/2πi)∮ f(ζ)/(ζ−z₀)^{n+1} dζ`); Cauchy-estimatene.
- **Grunnleggende teorem** for komplekse kurveintegraler (`∫_γ f = F(b) − F(a)`);
  **eksistens av primitiv** (enkeltsammenheng / nullkonturer); prinsipalgren `Log`
  og grenoppdelt logaritme/potens `z^α`.
- **ML-estimatet** (`|∫_γ f| ≤ (max|f|)·L`).

**Rekker og singulariteter:**
- **Potensrekke:** konvergensradius (avstand til nærmeste singularitet),
  leddvis derivasjon/integrasjon, analytisitet innenfor radius.
- **Laurent-rekke** og annuli; geometrisk rekke + «ut/inn»-substitusjon; kjente
  Maclaurin-rekker (`e^z, sin, cos, tan, Log(1+z)`).
- **Isolerte singulariteter:** hevbar (Riemanns teorem), pol av orden n, vesentlig
  (**Casorati–Weierstrass**); klassifisering via Laurent-rekke eller nullpunkts-
  orden i teller/nevner; singularitet i ∞ via `f(1/z)`.

**Residyer og telling:**
- **Residysetningen** (`∮ = 2πi·ΣRes`); residy for enkel pol og pol av orden n;
  `Res = a_{−1}`.
- **Reelle integraler:** `∫_{−∞}^{∞}` via halvsirkel + ML; `∫₀^{2π} …dθ` via
  enhetssirkel `z = e^{iθ}`; grenkontur/nøkkelhull for `z^α`.
- **Argumentprinsippet** og **Rouchés teorem**; **algebraens fundamentalteorem**.

**Entire funksjoner:**
- **Liouvilles teorem** (begrenset entire ⇒ konstant); polynom-karakterisering via
  singularitet i ∞; **Moreras teorem** (nevnt i 2005).

**Elementær kompleks aritmetikk:**
- Polarform, De Moivre, `n`-te røtter, `e^z`, kompleks `sin/cos/tan`, kompleks
  logaritme; geometrisk tolkning i planet.

### Bør dekkes lett (sporadisk arkivforekomst)
- **Fourier-rekke** (kompleks koeffisient, uniform konvergens, tallrekkesum) –
  kun 2017 og 2019; grensesone mot tma4121.
- **Kompleks hastighetspotensial / væskestrøm** (harmonisk anvendelse) – kun 2021.
- **Formulere teoremer** (Morera, residysetningen) – MAT2300-rest, nesten borte.

### Notasjonskonvensjoner boka bør speile
- `f = u + iv`, `u_x = v_y`, `u_y = −v_x`; `Res[f, z₀]` eller `Res(f; z₀)`;
  `a_{−1}` for Laurent-koeffisient; `Log` for prinsipalgren.
- `Γ_r` for kontur, `C_R`/`β_r` for halvsirkelbue, `∮_{|z|=r}` for lukket kurve;
  annuli `r < |z − z₀| < R`.
- Möbius: kryssforhold, `f(z) = (az+b)/(cz+d)`; Blaschke `e^{iθ}(z−a)/(1−āz)`.
- Fasitspråket: «by the residue theorem», «by Rouché's theorem», «by the
  ML-estimate», «Rule 2/Rule 3 (Gamelin)», eksplisitt «Alternatively:».

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (bærer eksamen)
1. **Residyregning + reelt integral via halvsirkel + ML** – signaturarketypen,
   ~7/11 og alltid tungt vektet (20–30 %). Klassifisering, residyformler,
   ML-argumentet, real-/imaginærdel.
2. **«Vis at f er konstant» (Cauchy–Riemann / harmonisk / Liouville)** – ~9/11;
   den mest gjentatte korte oppgaven, trygg poengkilde.
3. **Argumentprinsippet / Rouché** – ~7/11 og stigende; velg dominerende ledd,
   sjekk hele randen, kombinér med algebraens fundamentalteorem.
4. **Laurent-/potensrekke + konvergensområde** – ~8/11; geometrisk rekke, annuli,
   koblingen `a_{−1} = residy`.
5. **Isolerte singulariteter: klassifisering + orden** – ~7/11; pol av orden n /
   vesentlig / hevbar, singularitet i ∞ via `f(1/z)`.

### Nivå 2 – må kunne (gir bredden)
6. **Möbius-/konforme avbildninger + bildemengder** – ~6/11; randens bilde +
   sidebestemmelse, Blaschke/Schwarz for disk-selvavbildninger.
7. **Maksimumsprinsippet / Schwarz' lemma / middelverdi** – ~4/11; konstant fra
   randmaksimum, estimering, entydighet.
8. **Entire funksjoner: Liouville / polynom-karakterisering** – ~5/11; Cauchy-
   estimater, Casorati–Weierstrass.
9. **Primitiv / eksistens / grenoppdelt logaritme** – ~4/11 og stigende;
   enkeltsammenheng, `Log`, `∮ dz/z = 2πi`.
10. **Cauchys integralteorem/-formel + estimater** – underliggende overalt;
    eksplisitt påberopt i flere sett.

### Nivå 3 – bør dekkes (robusthet, lav/epoke-avhengig frekvens)
11. **Kompleks likning / røtter** – lav vekt, typisk åpningsoppgave.
12. **Potensrekke: konvergensradius + leddvis operasjoner** – som verktøy.
13. **Fourier-rekke** – sporadisk (2017, 2019); dekk lett, merk «grensesone mot
    tma4121».
14. **Kompleks hastighetspotensial / væskestrøm** – kun 2021; kort dekning som
    harmonisk anvendelse.

### Prognose for neste ordinære eksamen (basert på 2018–2023-malen)
5–7 vektede oppgaver over 4 timer, ingen hjelpemidler, alt begrunnet. Forventet
sammensetning:
- **Én tung residy-/kontur-/reelt-integral-oppgave** (20–30 %, nesten sikker),
  kjedet a) singulariteter+residuer → b) lukket integral → c) reelt integral via
  halvsirkel + ML.
- **Én kort «vis at f er konstant»-oppgave** (10 %) via Cauchy–Riemann, harmonisk
  konjugert eller Liouville.
- **Én Rouché-/argumentprinsipp-oppgave** (10 %) – antall nullpunkt i disk/
  annulus/sektor.
- **Én Laurent-rekke-oppgave med konvergensområde**, ofte koblet til
  singularitetsklassifisering.
- **Én Möbius-/bildemengde-** eller **konform-avbildnings-oppgave** (10–20 %).
- Muligens **én maksimumsprinsipp-/harmonisk-** eller **primitiv-/log-oppgave**,
  og en lav-vekts **kompleks-likning-åpning**.

**Usikkerhetsmomenter:** (i) om et sporadisk **Fourier-innslag** dukker opp igjen
(2017/2019-mønsteret) – dekk lett. (ii) Om pandemi-formatet («alle hjelpemidler»)
gjentas; standarden er nå igjen «ingen hjelpemidler» (2022, 2023). Verifiser mot
første tilgjengelige sett fra 2024 og senere.

---

## 8. Overlapp med tma4121 og mat2400 – gjenbrukspotensial

### Sterkt gjenbruk mot tma4121 (kompleks funksjonsteori)
MAT2410 og **tma4121** (NTNU, Matematikk 4) deler en **stor, nesten identisk
kompleks-analyse-kjerne**. Fra tma4121-analysen er «kompleks funksjonsteori»
en av fire søyler, og de gjentakende sjangrene der er de samme som eier MAT2410:

| Tema | MAT2410 | tma4121 (kompleks-analyse-søyle) |
|---|---|---|
| Cauchy–Riemann / analytisitet / harmonisk konjugert | ✅ ~82 % | ✅ 73 % |
| Residyregning (lukket kurve) | ✅ ~91 % | ✅ 91 % |
| Reelt integral via halvsirkel + ML | ✅ ~64 % | ✅ (del av residy-91 %) |
| Laurent-/Taylor-rekker + annuli | ✅ ~73 % | ✅ 82 % |
| Singularitetsklassifisering (pol/vesentlig/hevbar) | ✅ ~64 % | ✅ 55 % |
| Cauchys integralteorem/-formel | ✅ ✓ | ✅ ✓ |
| Konform/Möbius-avbildning | ✅ ~55 % | (kun eldre TMA4120-sett) |
| Argumentprinsippet / Rouché | ✅ ~64 % | (svak i tma4121-arkivet) |
| Liouville / entire funksjoner / sing. i ∞ | ✅ ~45 % | (implisitt) |

**Praktisk gjenbruk:** Metodemalene for **residyregning, ML-halvsirkel-integralet,
Laurent-rekker med annuli, Cauchy–Riemann/harmonisk konjugert, og
singularitetsklassifisering** kan deles/kryssrefereres nesten uendret mellom de to
bøkene – samme teoremer (residysetningen, Cauchys integralteorem, Casorati–
Weierstrass, Liouville), samme notasjon, samme «finn f først, ML på buen»-mal.
**MAT2410 eier i tillegg** en tyngre og bredere kompleks-analyse-flanke som
tma4121 bare berører: **argumentprinsippet/Rouché**, **Möbius-/konforme
avbildninger med bildemengder**, **maksimumsprinsippet/Schwarz' lemma**, og
**primitiv/grenoppdelt logaritme**. Disse er MAT2410s signatur og bør bygges ut
her, mens den delte residy-/rekke-/CR-kjernen kan importeres fra tma4121-arbeidet.
**Viktig forskjell i format:** MAT2410 har **ingen utdelt tabell** (som tma4121s
kode E) – begge bøker bør derfor legge vekt på **memorering og utledning** av
residyformler og standardrekker, ikke tabelloppslag. tma4121 legger dessuten til
flervariabel kalkulus, lineær algebra og transformmetoder (Laplace/Fourier) som
er **utenfor** MAT2410.

### Svakt overlapp mot mat2400 (reell analyse)
**mat2400** er reell analyse (metriske/normerte rom, Fréchet-derivasjon,
kompletthet, Fourier i Hilbertrom-forstand). Den **konseptuelle overlappen er
liten**: MAT2410 er kompleks, konkret-regnende og teorem-anvendende; MAT2400 er
reell, abstrakt og bevistungt. De to berører hverandre kun i grunnbegreper
(kontinuitet, konvergens, kompletthet av ℂ) og i **Fourier-rekker** – men mat2400
behandler Fourier som L²-/Hilbertrom-teori, mens MAT2410s sporadiske Fourier-
innslag er konkret koeffisientregning. **Gjenbrukspotensial: minimalt** utover
felles grunnbegreper. De to bøkene er komplementære, ikke overlappende.

---

## Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/UiO/MAT2410/`.

**Løsningsforslag/sensorfasiter lest grundig (8):**
`mat2410_2022_solutions.pdf`, `mat2410_2021_solutions.pdf`,
`mat2410_2020_fasit.pdf`, `mat2410_2020_konte.pdf`, `mat2410_2017_fasit.pdf`,
`mat2410_2016_fasit.pdf`, `MAT2410_2013_fasit.pdf`, `mat2410exam2023_sol.pdf`
(nyeste – bekrefter «ingen hjelpemidler»-format), samt `MAT2410_2010_2_fasit.pdf`
(headet «MAT2700», se del 0).

**Oppgavesett lest grundig (10):** `mat2410exam2023.pdf`, `mat2410_2022.pdf`,
`mat2410_2021.pdf`, `mat2410_2020.pdf`, `mat2410_2020_konte.pdf`,
`mat2410_2019e.pdf`, `mat2410_2018e.pdf`, `mat2410_2017e/n.pdf`,
`mat2410_2016.pdf`, `MAT2410_2013.pdf`.

**Eldre sett skumlest for temaregistrering (MAT2300-epoken):**
`MAT2300_2003_2.pdf` … `MAT2300_2009_2.pdf`, `Deleks.MAT2300.H.04.pdf`, `konte.pdf`
– kompleks analyse hele veien (se del 0), navnet «Analyse 2 / Analysis II».
Enkelte MAT2410-fasiter (2011, 2012, 2014, 2015) er tunge/skannede PDF-er som
ikke ble tekst-utvunnet her; metodekravene for disse årene er utledet fra
kontinuiteten i fasitpraksis 2013–2023.

**Obligatoriske innleveringer (kalibrering av vanskegrad):**
`mat2410_h22_compulsory1/2(_sol).pdf`, `mat2410_h23_compulsory1(_cor)/2.pdf`.

**Pensumbok (identifisert via fasitreferanser):** Theodore W. Gamelin,
_Complex Analysis_ (Springer, UTM) – «Gamelin p. 64/197», «Rule 2/Rule 3».

**Merknader om kildene:**
- **Ett fag, tre emnenavn:** settene 2003–2009 er merket **MAT2300** (én fasit
  t.o.m. «MAT2700»), 2010–2023 **MAT2410**. Innholdet er kompleks analyse hele
  veien – ingen pensumforskyvning à la MAT2400. Frekvensanalysen (del 2) bruker de
  11 MAT2410-settene med full oppgavetekst.
- **Format:** «ingen hjelpemidler» er hovedregelen; unntaket er hjemmeeksamens-
  årene 2020 og 2021 («alle hjelpemidler»), men oppgavene forble bevis-/
  regneoppgaver. Standarden er igjen «ingen hjelpemidler» fra 2022.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske
  uttrykk, definisjoner og teoremer er standard fagnotasjon uten opphavsrettslig
  vern.
