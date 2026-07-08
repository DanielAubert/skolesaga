# Eksamensanalyse: MA1201 Lineær algebra og geometri (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 17 lesbare eksamenssett med tekst (ordinære desembereksamener + augustkonter, 2005–2024) trukket fra et arkiv på 50 PDF-er (2004–2024), samt løsningsforslag/fasiter (2013–2024; de eldste kun som skannede bilder, OCR-lest). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Analysen er kvantitativ der kildene tillater det; usikre punkter er merket «(verifiser)».
>
> **Overlapp:** MA1201 er NTNUs grunnkurs i lineær algebra og overlapper *tematisk* med UiO MAT1120 (Lineær algebra) og NTNUs egen TMA4110/TMA4115-tradisjon (lineær algebra-delen). MA1201 er likevel et **selvstendig emne med tydelig geometri- og kjeglesnittprofil**: hovedaksetransformasjon/klassifisering av kjeglesnitt er en fast signaturoppgave som skiller det fra rene «matrise-kurs». Denne analysen står på egne ben og er kalibrert mot MA1201s *faktiske* arkiv, ikke mot slektskursene.

---

## 1. Eksamensform og utvikling

MA1201 vurderes med **én avsluttende skriftlig skoleeksamen** (4 timer, karakterskala A–F). Det finnes ingen midtveiseksamen som teller på karakteren (øvingsopplegg er kun adgangsgivende). Dette forenkler bildet sammenlignet med f.eks. MAT1100: **hele karakteren avgjøres av ett sett**, og settet må derfor dekke bredt.

**Faste rammer på tvers av alle år:**
- **Varighet:** 4 timer (09:00–13:00; enkelte år 15:00–19:00).
- **Hjelpemidler:** Kode D — «bestemt, enkel kalkulator tillatt», ingen trykte/håndskrevne hjelpemidler. Kalkulatoren kan **ikke** regne med matriser eller tegne grafer; instruksen (2020) sier dette eksplisitt. All matriseregning skal altså gjøres for hånd.
- **Vekting:** Settet består typisk av **5–7 oppgaver med til sammen ~9–12 delspørsmål**, og **alle delspørsmål teller likt** (fast formulering i instruksene 2012, 2016, 2020). Tidsbudsjett ~20–30 min per delspørsmål.
- **Begrunnelseskrav:** «Alle svar skal begrunnes» står i hvert sett. Fra 2020-instruksen: ta med *nok* mellomregning og *henvisninger til egenskaper og teoremer fra pensum* til at fremgangsmåten er tydelig. Dette er emnets viktigste metaregel (se del 4).
- **Emnekode:** deles med **MA6201** (videreutdanningsvariant) — samme oppgavesett.
- **Målform:** Både bokmål og nynorsk tilbys; ett engelsk sett finnes i arkivet (2014, «MA1201/MA6201 Linear Algebra»). Analysen bygger på bokmålsettene.

**Format-/strukturhistorikk:**

| Periode | Struktur og innhold | Kommentar |
|---|---|---|
| 2004–2011 | 5–6 oppgaver; **komplekse tall som fast egen oppgave** (polarform + z^n-røtter, skisse i planet), pluss vektorgeometri (plan, normalvektor, avstand), Gauss-eliminasjon, egenverdier + kjeglesnitt, ett teori-/bevispunkt | Komplekse tall og «plan i R³»-geometri var rutine i denne epoken |
| 2012–2016 | 5–7 oppgaver; komplekse tall fremdeles til stede (2012 begge sett), men **vektorgeometri i R³ og kjeglesnitt-oppgaven blir tyngdepunktet**; radreduksjon/rang/nullrom formaliseres tydeligere | 2012-settet hadde egen Cayley–Hamilton-/Fibonacci-oppgave; 2014 (eng.) hadde komplekse egenverdier |
| 2017–2024 | 5–6 oppgaver med ~10–12 likt vektede delspørsmål; **fast «ryggrad»**: (1) løs lineært system + rang, (2) vektorer/kryssprodukt/volum, (3) egenverdier + diagonalisering + kjeglesnitt, (4–6) bevisoppgaver (symmetri, ortogonalitet, lineær uavhengighet) | Komplekse tall **nesten forsvunnet** som egen oppgave etter 2012; dukket opp igjen i 2024 kun som ett sant/usant-punkt |
| 2020 (korona) | Digital hjemmeeksamen i Inspera, **10 delspørsmål**, alle offline hjelpemidler tillatt, men **håndskrevet besvarelse påkrevd** («maskinskrevne løsninger gir ingen uttelling»); kildehenvisning til teoremnummer i pensumboka påbudt | Kompensert med skjerpet begrunnelses- og kildekrav; ett oppgaveledd var innpakket i en morsom «gå fra hybel til Realfagsbygget»-tekst (heltalls-steg = løs lineært system) |

**Viktigste strukturfunn:** Fra 2017 og fram har settet en **svært stabil dramaturgi** — de tre første oppgavene er «regneoppgavene» (system+rang, vektor/volum, egenverdi/diagonalisering/kjeglesnitt), og de siste 2–3 oppgavene er **rene bevis-/teorioppgaver** (vis at AB er symmetrisk hviss A og B kommuterer; vis lineær uavhengighet av egenvektorer; Cauchy–Schwarz-anvendelse). En eksamensrettet bok må trene begge modusene like grundig: mekanisk regning **og** korte strukturbevis.

---

## 2. Temafrekvens-tabell (kvantitativ)

Basert på **17 sett med lesbar tekst**: 2005H, 2007H, 2008H, 2011H (skannede eldre delvis), 2012des, 2012aug(konte), 2013, 2014(eng), 2015des, 2016, 2017, 2020, 2021, 2022, 2023H, 2023aug(konte), 2024. Celleverdi = antall sett i perioden der temaet forekommer som eget delspørsmål.

| Tema | 2005–13 (≈8 sett) | 2014–19 (4) | 2020–24 (7) | **Gjenganger-score** |
|---|---|---|---|---|
| **Lineære likningssystemer + Gauss/radreduksjon + rang** | 8 | 4 | 7 | **~19/19 ≈ 100 %** (åpner nesten alltid settet) |
| **Egenverdier + egenvektorer** | 7 | 3 | 7 | **~17/19 ≈ 89 %** |
| **Diagonalisering (særlig ortogonal, symmetriske matriser)** | 6 | 3 | 7 | **~16/19 ≈ 84 %** |
| **Determinant + inverterbarhet (det ≠ 0 ⇔ invertibel)** | 7 | 3 | 6 | **~16/19 ≈ 84 %** |
| **Kjeglesnitt / hovedaksetransformasjon (kvadratisk form → standardform)** | 6 | 3 | 4 | **~13/19 ≈ 68 %** (emnets signaturoppgave) |
| **Vektorer: kryssprodukt, areal, volum (parallellepiped/tetraeder)** | 5 | 2 | 4 | **~11/19 ≈ 58 %** |
| **Underrom / basis / dimensjon / kolonne-rad-nullrom** | 3 | 3 | 6 | **~12/19 ≈ 63 %** (voksende) |
| **Ortogonalitet: skalarprodukt, projeksjon, Gram–Schmidt, ortonormal basis** | 3 | 2 | 5 | **~10/19 ≈ 53 %** (voksende) |
| **Bevis-/teorioppgave (matriseidentiteter, symmetri, lin. uavhengighet)** | 5 | 4 | 7 | **~16/19 ≈ 84 %** (minst én per sett, ofte 2–3) |
| **Invers ved elementære radoperasjoner** | 5 | 2 | 3 | **~10/19 ≈ 53 %** |
| **Lineær-/matrisetransformasjon (finn A, surjektiv, avbild figur)** | 4 | 2 | 3 | **~9/19 ≈ 47 %** |
| **Vektorgeometri i R³: plan, normalvektor, avstand** | 5 | 0 | 1 | **~6/19 ≈ 32 %** (fallende — levde i 2005–2011) |
| **Komplekse tall (polarform, z^n-røtter, faktorisering)** | 6 | 1 | 1 | **~8/19 ≈ 42 %** (nesten borte etter 2012; 2024 kun som T/F-punkt) |
| **Logikk / mengdelære / sant-usant-blokk** | 3 | 0 | 2 | **~5/19 ≈ 26 %** (2024 hadde 10-punkts sant/usant-åpning) |
| **Matrisepotens / Aⁿ-mønster (A⁵, A¹⁰⁰⁰, Cayley–Hamilton, Fibonacci)** | 1 | 0 | 3 | **~4/19 ≈ 21 %** (stigende: 2021, 2024) |

**Viktigste funn:**
1. **Lineære systemer + egenverdier + diagonalisering + determinant er den harde kjernen** — hver av dem i 84–100 % av settene. En bok som gjør studenten trygg her, sikrer ståkarakter alene.
2. **Kjeglesnitt-/hovedaksetransformasjonsoppgaven er emnets signatur** (~68 %, og nesten årviss i regne-tunge sett). Den binder sammen *hele* pensumkjeden: kvadratisk form → symmetrisk matrise → egenverdier → ortogonal diagonalisering → klassifisering (ellipse/hyperbel/parabel) → skisse. Dette er den mest lærerike enkeltoppgaven og bør gis stor plass.
3. **Minst én bevis-/teorioppgave per sett, oftest to–tre** (84 %). Typene er stabile: «vis at X er et underrom», «vis at egenvektorer til ulike egenverdier er lineært uavhengige», «vis at AB er symmetrisk hviss AB = BA», «vis at en ortogonal matrise bevarer lengder/vinkler/volum». Boken må ha et eget beviskapittel med disse malene.
4. **Komplekse tall og R³-plangeometri har falt kraftig** etter ~2012. De står fortsatt i emnebeskrivelsen (komplekse tall, logikk, mengdelære nevnes eksplisitt), men arkivbelegget for dem som *egne regneoppgaver* er tynt i nyere tid. **2024-settet gjenintroduserte** en sant/usant-blokk med bl.a. komplekse tall (z² = i, komplekse inverser) — mulig tegn på at temaene er på vei tilbake etter emnerevisjonen fra 2024. **(verifiser mot 2025-settet når det foreligger.)**
5. **Ortogonalitet/Gram–Schmidt og underrom-teori er i vekst** i 2020–2024-epoken — projeksjon, ortonormal basis og radrom/kolonnerom/nullrom opptrer hyppigere enn i den eldre epoken.

---

## 3. Oppgavetype-katalog

De faste sjangrene med krav, frekvens og **ett omskrevet eksempel** per type. Alle eksempler er nykonstruerte med egne tall.

### A. Løs lineært system + rang (åpningsoppgaven)
- **Krav:** Sett opp total-/koeffisientmatrise, radreduser til (redusert) trappeform, les av løsningsmengde. For homogene systemer: beskriv løsningsrommet parametrisk (fri variabel → basisvektorer). For inhomogene: finn en partikulær løsning + homogen løsning (fasitene skriver eksplisitt «alle løsninger = x₀ + span{…}»). **Rang** = antall ledende ettall; koble til løsbarhet («løsbart for alle høyresider ⇔ rang = antall rader»). Parametervarianter: for hvilke t/a har systemet ingen / nøyaktig én / uendelig mange løsninger (drøft via pivot-/determinantbetingelse).
- **Frekvens:** ~19/19 — nesten alltid oppgave 1.
- **Omskrevet eksempel:** «Løs det homogene systemet med koeffisientmatrise A, angi løsningsrommet som et span, og bestem rangen til A. Er systemet Ax = c løsbart for enhver høyreside c?»

### B. Egenverdier og egenvektorer
- **Krav:** Sett opp det karakteristiske polynomet det(A − λI) = 0 (for 3×3 gjerne med et oppgitt hint om én egenverdi), løs for λ, og finn egenrom(mene) ved å løse (A − λI)x = 0 for hver λ. Angi **basis** for hvert egenrom. Ofte etterfulgt av «vis at de oppgitte vektorene er egenvektorer» (sett inn og verifiser Av = λv).
- **Frekvens:** ~17/19.
- **Omskrevet eksempel:** «Gitt en 3×3-matrise A der én egenverdi er 1. Finn alle egenverdiene og en basis for hvert tilhørende egenrom.»

### C. Diagonalisering — særlig ortogonal (symmetriske matriser)
- **Krav:** To varianter. (i) **Vanlig:** finn invertibel P og diagonal D med A = PDP⁻¹, der P har egenvektorene som kolonner og D egenverdiene. (ii) **Ortogonal** (symmetrisk A): begrunn at A er ortogonalt diagonaliserbar (**spektralteoremet: symmetrisk ⇒ ortogonalt diagonaliserbar**), normaliser egenvektorene, sett P ortogonal (P⁻¹ = Pᵀ) med PᵀAP = D. Egenvektorer til ulike egenverdier er automatisk ortogonale for symmetriske matriser — dette skal påpekes.
- **Frekvens:** ~16/19; ortogonal-varianten er den vanligste i nyere sett.
- **Omskrevet eksempel:** «Vis at den symmetriske matrisen A er ortogonalt diagonaliserbar, og finn en ortogonal P og diagonal D med PᵀAP = D.»

### D. Kjeglesnitt / hovedaksetransformasjon (signaturoppgaven)
- **Krav:** Gitt en annengradsligning i x, y (evt. x₁, x₂) med kryssledd. (1) Skriv den kvadratiske formen som xᵀBx med **symmetrisk** B (av-diagonalelementene = halve kryssleddkoeffisienten — vanlig feilkilde). (2) Diagonaliser B ortogonalt: PᵀBP = D. (3) Bytt til nye koordinater (x′, y′) = Pᵀ(x, y) slik at kryssleddet forsvinner → standardform. (4) **Klassifiser** ut fra fortegnene til egenverdiene: begge positive/negative ⇒ ellipse, ulike fortegn ⇒ hyperbel, én null ⇒ parabel; ev. degenerert (punkt/linje/to linjer). (5) **Skisser** kurven med de nye aksene. Varianten «finn ligningen til den roterte kjeglesnittet» (2014, 2020) går motsatt vei: gitt rotasjon → sett opp ny ligning.
- **Frekvens:** ~13/19; nesten årviss i regne-tunge sett. Binder hele pensumkjeden sammen.
- **Omskrevet eksempel:** «Avgjør om ligningen 3x² + 2xy + 3y² + √2·x − √2·y − 8 = 0 beskriver en ellipse, hyperbel eller parabel. Overfør først den kvadratiske formen til standardform uten kryssledd via en symmetrisk matrise B og en ortogonal matrise P, og lag en skisse.»

### E. Kryssprodukt, areal og volum
- **Krav:** Kryssprodukt u × v komponentvis (kofaktor-«oppskrift»); **areal av parallellogram = ‖u × v‖**; **areal av trekant = ½‖u × v‖**. Volum av parallellepiped = |det[u v w]| = |u·(v × w)| (skalartrippelprodukt); **tetraeder/pyramide = 1/6 av parallellepiped-volumet** (faktoren glemmes lett; 2017 oppga formelen ⅓·A·h eksplisitt). Parametervariant (2023H): velg t i en matrise slik at det = 1 / slik at volumet av det transformerte legemet blir gitt.
- **Frekvens:** ~11/19.
- **Omskrevet eksempel:** «La u, v, w være tre vektorer i R³. Finn arealet av parallellogrammet utspent av u og v via kryssproduktet, og volumet av tetraederet utspent av alle tre.»

### F. Underrom, basis, dimensjon (kolonnerom/radrom/nullrom)
- **Krav:** «Vis at M er et underrom»: sjekk (i) inneholder 0, (ii) lukket under addisjon, (iii) lukket under skalarmultiplikasjon — eller vis at M = null-/kolonnerom til en matrise. Definisjon av kolonnerom/radrom skal kunne gjengis. Finn **basis** (lineært uavhengige utspennende vektorer, les av fra trappeform), oppgi **dimensjon = rang**; nullrom/nullity via fri-variabel-vektorene; rang–nullitet-setningen (rang + nullity = antall kolonner) brukes for konsistenssjekk.
- **Frekvens:** ~12/19 (voksende).
- **Omskrevet eksempel:** «La M = {x ∈ R³ | x₁ = x₂ + 2x₃}. Vis at M er et underrom av R³, og finn en ortogonal basis for M.»

### G. Ortogonalitet: projeksjon, Gram–Schmidt, ortonormal basis
- **Krav:** Skalarprodukt og norm; **projeksjon av v på u** = (v·u/‖u‖²)u; projeksjon på et underrom W = sum av projeksjoner på en ortogonal basis for W. **Gram–Schmidt** for å ortogonalisere en gitt basis (og normalisere til ortonormal). «Vis at to ortogonale ikke-null-vektorer er lineært uavhengige» (fast delpunkt). Utvid en ortonormal mengde til en ortonormal basis for Rⁿ.
- **Frekvens:** ~10/19 (voksende).
- **Omskrevet eksempel:** «Bruk Gram–Schmidt til å finne en ortogonal basis for underrommet W utspent av w₁, w₂, w₃, og beregn projeksjonen av v ned på W.»

### H. Determinant og inverterbarhet
- **Krav:** Determinant ved kofaktorutvikling eller radreduksjon; sentralregelen **A invertibel ⇔ det A ≠ 0**; det(AB) = det A·det B, det(cA) = cⁿ det A (n = størrelse — fast T/F-felle), det(Aⁿ) = (det A)ⁿ. Parameterdrøfting: «for hvilke t er A invertibel?» = løs det(A(t)) ≠ 0. Invers 2×2 med standardformel; invers n×n via elementære radoperasjoner ([A | I] → [I | A⁻¹]). Verifikasjon: sjekk AB = I.
- **Frekvens:** ~16/19 (ofte flettet inn i A/B/C).
- **Omskrevet eksempel:** «For hvilke reelle t er matrisen A(t) invertibel? For t = 1, finn A(1)⁻¹ ved elementære radoperasjoner.»

### I. Lineær-/matrisetransformasjon
- **Krav:** Finn standardmatrisen A til en transformasjon gitt ved bildene av basisvektorene (kolonnene i A = bildene av eₖ); regn ut TA(x) = Ax; avgjør surjektivitet/injektivitet via rang. Geometrisk variant (2020): finn matrisen som avbilder én trekant på en annen. Bevis at Im TA / Ker TA er underrom.
- **Frekvens:** ~9/19.
- **Omskrevet eksempel:** «En lineær transformasjon TA: R³ → R³ er gitt ved bildene av de tre standardbasisvektorene. Finn matrisen A, beregn TA(v) for en gitt v, og avgjør om TA er surjektiv.»

### J. Bevis-/teorioppgaver (settets bakre halvdel)
- **Krav:** Korte, selvstendige bevis med eksplisitt bruk av definisjoner og navngitte teoremer. Faste arketyper i arkivet:
  - **Lineær uavhengighet av egenvektorer** til *ulike* egenverdier (2022, 2023H, 2024) — standard motsigelses-/kombinasjonsargument.
  - **Symmetri:** «AB symmetrisk ⇔ AB = BA» for symmetriske A, B (2023H); «AᵀA er alltid symmetrisk» (2024).
  - **Ortogonale matriser bevarer** lengde/skalarprodukt/vinkel/volum (2013, 2017) — bruk Pu·Pv = (Pu)ᵀ(Pv) = uᵀPᵀPv = uᵀv.
  - **Radreduksjon bevarer løsningsmengden** / «Ax = b og PAx = Pb har samme løsninger for invertibel P» (2022, 2023aug).
  - **Anvendt ulikhet:** bruk Cauchy–Schwarz til å vise (Σaᵢ)(Σ1/aⱼ) ≥ n² (2023H).
  - **Nilpotent/idempotent:** Am = 0 ⇒ I − A invertibel (2012aug); A² = A ⇒ egenverdier ∈ {0,1} (2008); Cayley–Hamilton + Fibonacci-potenser (2012des).
- **Frekvens:** ~16/19 sett har minst én; ofte to–tre delspørsmål totalt.
- **Omskrevet eksempel:** «La A og B være symmetriske n×n-matriser over R. Vis at AB er symmetrisk hvis og bare hvis A og B kommuterer.»

### K. Komplekse tall (eldre epoke + T/F-gjenkomst)
- **Krav:** Skriv et tall på polarform r(cos θ + i sin θ); finn alle n-te røtter av zⁿ = w via de Moivre (n røtter jevnt fordelt på sirkel med radius r^{1/n}); skisser i det komplekse planet; faktoriser reelt polynom via konjugerte røttepar (x − z₀)(x − z̄₀) = reell kvadratisk faktor. Nyere gjenkomst (2024): sant/usant om eksistens av komplekse løsninger (z² = i) og komplekse inverser.
- **Frekvens:** ~8/19, men konsentrert 2005–2012 (nesten årviss der), så nesten borte, deretter T/F-punkt 2024.
- **Omskrevet eksempel:** «Skriv −16 på polarform og finn alle komplekse røtter av z⁴ + 16 = 0. Bruk røttene til å faktorisere x⁴ + 16 i to reelle annengradsfaktorer.»

### L. Logikk / sant-usant-blokk
- **Krav:** Avgjør om utsagn er sanne eller usanne (2024: uten begrunnelse; eldre: kort begrunnelse). Utsagnene tester **presis kjennskap til definisjoner og setninger**: det(cA)-regelen, diagonaliserbar vs. invertibel, elementærmatriser, underrom-kriteriet, lineær uavhengighet ⇒ invertibel, «AB = 0 ⇒ A = 0 eller B = 0» (usant), komplekse eksistensutsagn. Distraktorene bygger på vanlige misforståelser.
- **Frekvens:** ~5/19; 2024-settet åpnet med en 10-punkts blokk.
- **Omskrevet eksempel:** «Avgjør sant/usant uten begrunnelse: (a) for enhver 4×4-matrise A er det(3A) = 3·det(A); (b) en diagonaliserbar matrise er alltid invertibel; (c) det finnes ingen komplekse tall z med z² = i.»

---

## 4. Sensorens krav

Utledet fra oppgaveinstrukser og løsningsforslag (særlig 2017, 2013, 2012, 2015 + fasit 2024).

1. **«Alle svar skal begrunnes»** — ordrett i hvert sett. Et riktig sluttsvar uten synlig fremgangsmåte gir lite/ingen uttelling. Fra 2020-instruksen skjerpet til: ta med *henvisninger til egenskaper og teoremer fra pensum*.
2. **Teoremer skal navngis / henvises** når de bærer argumentet: spektralteoremet (symmetrisk ⇒ ortogonalt diagonaliserbar), «det ≠ 0 ⇔ invertibel», rang–nullitet-setningen, Cauchy–Schwarz, Gram–Schmidt. På hjemmeeksamen 2020 var **eksplisitt kildehenvisning til teoremnummer i pensumboka påbudt**.
3. **Kalkulator kan ikke redde deg:** hjelpemiddel D-kalkulatoren kan verken regne matriser eller tegne grafer. Radreduksjon, determinanter, egenverdier og skisser gjøres for hånd — og på 2020-hjemmeeksamen ga *maskinskrevne* løsninger null uttelling (håndskrift påbudt).
4. **Delpunktgjenbruk er lov og forventet:** flere sett skriver eksplisitt «du kan bruke resultater fra tidligere deloppgaver selv om du ikke har løst dem» (2021). Å se koblingen (egenverdiene fra a) brukes i diagonaliseringen i b) som brukes i kjeglesnittklassifiseringen i c)) er en del av det som måles.
5. **Symmetrisk matrise må være symmetrisk:** i kjeglesnittoppgaven må av-diagonalelementet være *halvparten* av kryssleddkoeffisienten. Fasitene understreker valget av B og P.
6. **Klassifisering krever begrunnelse via egenverdifortegn**, ikke bare et navn: skriv hvorfor det blir ellipse/hyperbel/parabel og lag skissen med de nye aksene.
7. **Bevis skal bruke definisjonen der definisjonen etterspørres:** «vis at M er et underrom» krever de tre underromsaksiomene (eller identifikasjon som null-/kolonnerom), ikke bare et eksempel. «Lineært uavhengig» skal vises fra definisjonen (kun triviell lineærkombinasjon gir 0).

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: radreduser og løs et system, finn egenverdier/egenvektorer, regn determinant, sett opp kryssprodukt/volum.
- **Midtsjiktet** behersker i tillegg **ortogonal diagonalisering** av en symmetrisk matrise og **hele kjeglesnittkjeden** (form → B → P → standardform → klassifisering → skisse), samt Gram–Schmidt og projeksjon.
- **Toppsjiktet** kjennetegnes av de **korte bevisene**: lineær uavhengighet av egenvektorer, symmetri-/kommuteringsidentiteter, ortogonale matrisers lengde-/volumbevaring, radreduksjon bevarer løsningsmengden, og anvendelse av Cauchy–Schwarz. Her måles presis definisjonsbruk og teoremhenvisning.
- **Alternative løsninger honoreres:** trippelprodukt vs. determinant for volum; to ulike begrunnelser for lineær uavhengighet (ortogonalitet **eller** egenrom-argument, hintet eksplisitt i 2017).

---

## 5. Typiske feil (dokumentert i fasiter / bygget inn som distraktorer)

1. **Ikke-symmetrisk B i kjeglesnittoppgaven:** å sette hele kryssleddkoeffisienten i av-diagonalen i stedet for halvparten → feil egenverdier → feil klassifisering.
2. **Glemt 1/6-faktor** for tetraeder/pyramidevolum (og ½-faktor for trekantareal fra kryssprodukt).
3. **Feilklassifisering av kjeglesnitt:** konkludere ut fra opprinnelig ligning med kryssledd i stedet for etter diagonalisering; overse degenererte tilfeller.
4. **Egenvektor uten normalisering** når P skal være *ortogonal* (PᵀAP-varianten) — eller motsatt, normalisere unødig i den vanlige PDP⁻¹-varianten.
5. **Rang/nullitet-forveksling:** telle frie variabler som rang, eller glemme å parametrisere hele løsningsrommet i homogene systemer.
6. **det(cA) = c·det(A)** (skal være cⁿ) — klassisk sant/usant-felle (2024).
7. **«AB = 0 ⇒ A = 0 eller B = 0»** antatt sant (usant — T/F-felle 2024); tilsvarende «diagonaliserbar ⇒ invertibel» (usant).
8. **Bevis erstattet med eksempel:** «vis at M er et underrom» besvart med ett konkret eksempel i stedet for de tre aksiomene; «lineært uavhengig» ikke ført fra definisjonen.
9. **Manglende teoremhenvisning:** hoppe rett til «A er ortogonalt diagonaliserbar» uten å nevne at A er symmetrisk (spektralteoremet).
10. **Ubegrunnet sluttsvar / for lite mellomregning** — bryter hovedregelen; særlig farlig på radreduksjon der stegene *er* argumentet.
11. **Komplekse røtter:** feil kvadrant for argumentet, glemt at n-te-røtter er n stk. jevnt fordelt, modulus ikke r^{1/n}.
12. **Kryssledd ikke fjernet:** stoppe ved diagonaliseringen uten å faktisk skrive standardformen i nye koordinater og skissere.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)

**Matriser og systemer:**
- Gauss/Gauss–Jordan-eliminasjon; (redusert) trappeform; **elementære matriser** (hver radoperasjon = venstremultiplikasjon med invertibel elementærmatrise).
- **Rang, nullitet, rang–nullitet-setningen** (rang + nullity = antall kolonner).
- Kolonnerom, radrom, nullrom (definisjoner + basis fra trappeform).
- **Invertibilitet:** A invertibel ⇔ det A ≠ 0 ⇔ redusert trappeform = I ⇔ kolonnene lineært uavhengige ⇔ Ax = b entydig løsbar for alle b (invertibilitetssetningen).
- Løsbarhetskriterium: Ax = b løsbart ⇔ b i kolonnerommet ⇔ rang[A] = rang[A|b].

**Determinant:**
- Kofaktorutvikling; effekt av radoperasjoner; **det(AB) = det A·det B**, det(cA) = cⁿ det A, det(Aᵀ) = det A, det(Aⁿ) = (det A)ⁿ, det(A⁻¹) = 1/det A.

**Vektorgeometri:**
- Skalarprodukt, norm, vinkel; **kryssprodukt** og skalartrippelprodukt; areal = ‖u×v‖ (trekant ½), volum = |det[u v w]| (tetraeder 1/6); plan via normalvektor, punkt–plan-avstand (eldre epoke).

**Vektorrom / ortogonalitet:**
- Underrom-aksiomer; basis, dimensjon, lineær uavhengighet; **Gram–Schmidt**; projeksjon på vektor og på underrom; ortogonal/ortonormal mengde; «ortogonale ikke-null-vektorer er lineært uavhengige»; utvidelse til ortonormal basis.

**Egenverdier / diagonalisering:**
- Karakteristisk polynom det(A − λI); egenrom = Ker(A − λI); **egenvektorer til ulike egenverdier er lineært uavhengige**; A = PDP⁻¹.
- **Spektralteoremet:** symmetrisk (reell) matrise er ortogonalt diagonaliserbar; egenvektorer til ulike egenverdier er ortogonale; PᵀAP = D med P ortogonal.
- **Ortogonale matriser:** P⁻¹ = Pᵀ; bevarer lengde, skalarprodukt, vinkel og volum; kolonnene er en ortonormal basis; |det P| = 1.

**Kjeglesnitt (geometriprofilen):**
- Kvadratisk form Q(x) = xᵀBx med symmetrisk B; hovedaksetransformasjon = ortogonal diagonalisering av B; klassifisering fra egenverdifortegn (ellipse/hyperbel/parabel/degenerert); koordinatbytte x′ = Pᵀx; skisse med roterte akser.

**Komplekse tall (pensum, tynnere arkivbelegg nylig):**
- Kartesisk og polarform; de Moivre for potenser og n-te røtter; konjugerte røttepar for reelle polynomer; geometri i det komplekse planet.

**Lineær transformasjon:**
- Standardmatrise fra bilder av basisvektorer; Im/Ker som underrom; injektiv/surjektiv via rang; matriseavbildning av geometriske figurer.

### Må forstås, men testes sjelden/varierende i arkivet
- **Logikk og mengdelære** (implikasjon, kvantorer, mengdeoperasjoner) — nevnt i emnebeskrivelsen; dukker opp som ramme rundt sant/usant-blokker (2024). Dekk grunnleggende, men uten forventning om egne store oppgaver.
- **Matrisepotens/Aⁿ-mønster og Cayley–Hamilton** — sporadisk (2012, 2021, 2024); dekk med diagonaliseringstriks (Aⁿ = PDⁿP⁻¹) og eventuelt Cayley–Hamilton.
- **R³-plangeometri (plan, avstand, høyresystem)** — sentralt 2005–2011, nesten borte etter. Dekk kort; lav nyere frekvens.

### Notasjonskonvensjoner boken bør speile
- Kolonnevektorer; A = [a b c] for matrise med kolonnevektorer; TA for matrisetransformasjon; PᵀAP = D for ortogonal diagonalisering, A = PDP⁻¹ ellers; ‖·‖ for norm; egenrom, rang, nullitet på norsk; hjelpemiddel-realisme (ingen matrise-/graf-kalkulator, alt for hånd).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Lineære systemer + Gauss/radreduksjon + rang** (~100 %) — åpningsoppgaven; parametrisk løsningsrom, inhomogen = partikulær + homogen, løsbarhetskriterium.
2. **Egenverdier + egenvektorer + diagonalisering** (~84–89 %) — karakteristisk polynom, egenrom-basis, PDP⁻¹.
3. **Ortogonal diagonalisering av symmetriske matriser** (~84 %) — spektralteoremet, ortonormale egenvektorer, PᵀAP = D.
4. **Kjeglesnitt / hovedaksetransformasjon** (~68 %, emnets signatur) — hele kjeden form→B→P→standardform→klassifisering→skisse.
5. **Determinant + inverterbarhet** (~84 %) — kofaktor/radreduksjon, det-regler, parameterdrøfting, invers via [A|I].
6. **Kryssprodukt, areal, volum** (~58 %) — med ½- og 1/6-faktorene sikret.

### Nivå 2 — må kunne (gir bredden)
7. **Underrom, basis, dimensjon, kolonne-/rad-/nullrom** (~63 %) — inkl. rang–nullitet-setningen og «vis at M er et underrom».
8. **Ortogonalitet: projeksjon, Gram–Schmidt, ortonormal basis** (~53 %, voksende).
9. **Bevis-verktøykassen** (~84 % har minst én): lineær uavhengighet av egenvektorer; symmetri-/kommuteringsidentiteter; ortogonale matrisers lengde-/volumbevaring; radreduksjon bevarer løsningsmengden; Cauchy–Schwarz-anvendelse. **Eget beviskapittel med maler.**
10. **Invers ved elementære radoperasjoner** (~53 %) og **lineær-/matrisetransformasjon** (~47 %) — standardmatrise, surjektivitet, figuravbildning.

### Nivå 3 — bør dekkes (lavere/variabel arkivfrekvens, men pensum/karakterdifferensiering)
11. **Komplekse tall** (~42 %, men konsentrert i eldre sett + T/F-gjenkomst 2024) — polarform, de Moivre-røtter, reell faktorisering. Dekk fullt; **kan være på vei tilbake etter 2024-revisjonen (verifiser).**
12. **Logikk / mengdelære / sant-usant** (~26 %) — presise definisjonsutsagn og typiske feller; 2024 åpnet med 10-punkts blokk.
13. **Matrisepotens / Aⁿ-mønster / Cayley–Hamilton / Fibonacci-potenser** (~21 %, stigende) — Aⁿ = PDⁿP⁻¹, A⁵/A¹⁰⁰⁰-tilnærming.
14. **R³-plangeometri** (plan, normalvektor, avstand, høyresystem) — lav nyere frekvens; dekk kort for fullstendighet.

**Prognose for neste eksamen** (basert på 2017–2024-malen): 5–6 oppgaver med ~10–12 likt vektede delspørsmål, 4 timer, kalkulator D (ingen matrise-/grafhjelp). Forvent: (1) løs et lineært system + rang; (2) vektorer med kryssprodukt/volum **eller** ortogonalitet/projeksjon; (3) egenverdier → (ortogonal) diagonalisering → **kjeglesnittklassifisering med skisse**; (4–6) to–tre bevis-/teorioppgaver fra {lineær uavhengighet av egenvektorer, symmetri/kommutering, ortogonale matrisers bevaring, radreduksjon/løsningsmengde, en anvendt ulikhet}. **Usikkerhetsmoment:** komplekse tall og logikk/mengdelære er tydelig i emnebeskrivelsen og gjenoppsto i 2024-settet — dersom emnerevisjonen (aktiv fra høst 2024) har løftet disse tilbake som egne oppgaver, må prioriteringen justeres. **Verifiser mot første eksamenssett etter H2024 (H2025) så snart det foreligger.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1201/`.

**Eksamensoppgaver lest grundig (tekstlag, 2015→ særlig grundig):**
`eksamen-2023-hoest-bokmaal.pdf` (H2023), `eksamen-2023-bokmaal-konte.pdf` (aug 2023), `eksamen-2022-bokmaal.pdf` (2022), `h21-bm.pdf` (2021), `eksamenh2020.pdf` (2020), `MA1201eksamen2017bokmaal.pdf` (2017), `eks_bok.pdf` (= H2016), `eksamen-2015-des.pdf` (2015), `2014engelsk.pdf` (2014, engelsk), `ma1201eksh2013.pdf` (2013), `eksamen-des-2012.pdf` (des 2012), `konteeksamen-2012.pdf` (aug 2012).

**Eksamensoppgaver lest fra OCR (skannet original):** `exam_final.pdf` (= H2024, 16. des 2024), `konteeksamen-2015.pdf` (delvis).

**Eldre eksamener skumlest for temaregistrering (tekstlag):** `ma1201eksH05.pdf`, `ma1201eksH06.pdf`, `ma1201eksH07.pdf`, `ma1201eksH08.pdf`, `ma1201eksH09.pdf`, `ma1201eksH10.pdf`, `ma1201eksH11.pdf`, `ma1201eksV07.pdf`, `ma1201eksV08.pdf`, `2005h.pdf`, `2007h.pdf`.

**Løsningsforslag/fasiter lest (OCR av skannet + tekstlag der finnes):** `fasit_eksamen_2024.pdf` (fasit H2024), `MA12012017loesningsforslag.pdf` (OCR, fasit 2017 — grundig), `lf-2015.pdf`, `ma1201h2013lf.pdf`, `lf-2012-12-13.pdf`, `LF.pdf` (alle OCR), `2023-11-28-lf.pdf`, `eksamenh2022lf.pdf`, `lf-2023-08.pdf`, `lf-h21.pdf` (tynt tekstlag — hovedsakelig håndskrevet/typesatt matematikk).

**Emnebeskrivelse:** NTNUs offisielle emneside for MA1201 «Lineær algebra og geometri», 7,5 studiepoeng, skriftlig skoleeksamen A–F, aktiv fra høst 2024 (verifisert utenfor arkivet).

**Merknader om kildene:**
- **Skanne-hull:** En stor del av de eldste settene (2004, 2005v, 2006, 2007v, 2008, 2010, 2011, samt fire eldre løsningsforslag) er rene bildeskann uten tekstlag. Disse er delvis OCR-lest (nor+eng) der de var viktige (fasit 2017, 2015, 2013, 2012); de aller eldste er kun brukt til grov temaregistrering. Frekvenstallene i del 2 er derfor mest presise for 2012→ og bør leses som robuste, ikke eksakte, for eldre epoker («≈»).
- **OCR-forbehold:** Matematisk notasjon OCR-es dårlig (håndskrevne fasiter særlig). Metodebeskrivelsene i del 3–5 for de eldste settene er utledet fra oppgavetekstene + kontinuiteten i fasitpraksis, ikke fra ordrett OCR.
- **Filnavn vs. innhold:** `eks_bok.pdf` er H2016-settet; `exam_final.pdf` er H2024-settet (16. des 2024) — filnavnene er misvisende. Sjekket mot datostempler i PDF-teksten.
- **MA1201 = MA6201:** Samme sett brukes for videreutdanningsvarianten MA6201; ingen forskjell i oppgaver.
- **Emnerevisjon 2024:** Emnet er markert aktivt fra høst 2024. Arkivets nyeste sett (H2024) viser tegn til gjeninnføring av komplekse tall/logikk (sant/usant-blokk). Kalibrer boken mot de dokumenterte sjangrene, men følg opp med H2025-settet.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.
