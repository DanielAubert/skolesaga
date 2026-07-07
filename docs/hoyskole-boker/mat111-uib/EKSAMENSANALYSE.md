# Eksamensanalyse: MAT111 Grunnkurs i matematikk I (UiB)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 34 lesbare eksamenssett med løsningsforslag (H2003–V2020, to sett per år: vår + høst), 5 midtsemesterprøver (2003–2005), og pensumlister for 14 årganger. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Analysen er kvantitativ der kildene tillater det. Søsteranalysen for UiO-emnet MAT1100 ligger i `../mat1100/EKSAMENSANALYSE.md`; tydelige UiB/UiO-forskjeller er markert underveis.

---

## 1. Eksamensform og utvikling

MAT111 vurderes med **én avsluttende skriftlig skoleeksamen på 5 timer** (kl. 09–14). Ingen midtveiseksamen teller i karakteren i moderne tid (deleksamen/midtsemesterprøve fantes bare 2003–2005). Emnet undervises primært om høsten, men det avholdes **full eksamen både i desember og i mai** — arkivet har derfor to komplette sett per år, dobbelt så mye treningsmateriale som UiO-arkivet gir.

**Den viktigste rammeforskjellen mot UiO: MAT111 er åpen bok.** Tillatte hjelpemidler er læreboken (Adams & Essex, *Calculus: A Complete Course*) og godkjent kalkulator. Dette preger oppgavedesignet direkte: standardintegraler kan slås opp i permen, så oppgavene krever eksplisitt at man «løser med grunnleggende teknikker, ikke ved oppslag», og fasit påpeker at kandidater som skrev av lærebokeksempler ikke fikk uttelling. Boken må trene *utledning og føring*, ikke formelmemorering.

### Formathistorikk

| Periode | Struktur | Kommentar |
|---|---|---|
| 2003–2005 | 4 timer (09–13), 7–10 oppgaver; M100-fellessett med tilleggsoppgaver (+2 t) i 2003/V2004 | Overgangsperiode etter emnereform: pensum inkluderte uendelige rekker og tangentplan/kritiske punkter i to variable |
| 2006–2008 | **5 timer** (09–14), 5–9 oppgaver | Rekker og flervariabelt stoff fases ut; ren enkeltvariabelprofil etableres |
| 2009–2019 | 5 timer, 5–12 hovedoppgaver oppdelt i **13–18 deloppgaver som alle teller likt** (eksplisitt i oppgaveheadingen fra 2009) | Fast instruks: «Alle svar skal begrunnes, men begrunnelsene skal være korte»; nok mellomregning til at fremgangsmåten er tydelig |
| V2020 (korona) | Digital hjemmeeksamen: blanding av flervalg/kortsvar og filopplasting per oppgave | Egenerklæring om selvstendighet; teorispørsmål («beskriv trapesmetoden», «er Simpson alltid bedre?») kompenserer for hjelpemiddelfrihet |

**Konstanter på tvers av alle år (2009–2019):**
- 13–18 likt vektede deloppgaver på 5 timer gir et tidsbudsjett på ~17–23 min per deloppgave.
- Fast dramaturgi: settet **åpner nesten alltid med komplekse tall** (billige poeng), midten er teori (ε-δ, kontinuitet/deriverbarhet, invers, eksistensbevis) og integrasjon, og settet **slutter nesten alltid med en anvendt differensiallikning eller relaterte rater** med realistisk kontekst (skip som mister motorkraft, algeoppblomstring, epidemi, tømming av tank).
- Fra 2019 sies det eksplisitt at **riktig fremgangsmåte gir godt med poeng selv uten korrekt sluttsvar** — motsatt fortegn av UiOs «ubegrunnet svar = 0», men samme realitet: føringen er det som måles.
- Vårsettene er stort sett noe kortere (7–9 oppgaver) og av og til på engelsk; enkelte vårsett (2015) brukte poengvekting i stedet for lik vekting.

### Pensumgrunnlag
Pensum har vært stabilt 2006–2019: Adams & Essex kap. P, 1, 2 (grenser/kontinuitet, inkl. formell definisjon), 3 (transcendente funksjoner), 4 (anvendelser av derivasjon: relaterte rater, ekstremverdi, Newton, ubestemte former, lineærapproksimasjon, Taylorpolynomer), 5 (integralet, fundamentalteoremet), 6.1–6.3 + 6.5–6.7 (integrasjonsteknikk, uegentlige integraler, trapes/midtpunkt, Simpson), 7.1 + 7.9 (omdreiningsvolum, førsteordens differensiallikninger) og Appendiks I (komplekse tall) + algebraens fundamentalteorem. Maple-avhengig stoff er eksplisitt unntatt.

### UiB vs. UiO — strukturelt
| | MAT111 (UiB) | MAT1100 (UiO) |
|---|---|---|
| Vurdering | Én 5-timers eksamen (100 %) | Midtveis (1/3, flervalg) + slutteksamen (2/3) |
| Hjelpemidler | **Lærebok + kalkulator (åpen bok)** | Formelark/formelsamling + kalkulator |
| Sett per år | To (vår + høst) | Ett (desember) |
| Pensumprofil | Ren enkeltvariabel + komplekse tall + **numerikk og difflikninger** | Enkeltvariabel + komplekse tall + **lineær algebra og flervariabel** |
| Ikke i arkivet | Lineær algebra, gradient, matriser (finnes ikke i pensum) | Difflikninger, rekker, numerikk (0 forekomster) |

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som egen (del)oppgave. Perioder: 2003–2010 (15 sett), 2011–2015 (10 sett), 2016–2020 (9 sett); totalt 34.

| Tema | 2003–10 (15) | 2011–15 (10) | 2016–20 (9) | **Gjenganger-score** |
|---|---|---|---|---|
| Differensiallikninger (separabel/lineær 1. orden, ofte anvendt) | 15 | 10 | 8 | **33/34 = 97 %** |
| Integrasjonsteknikk (substitusjon/delvis/delbrøk/polynomdivisjon) | 15 | 10 | 8 | **33/34 = 97 %** |
| Komplekse tall (polarform, de Moivre, n-te røtter, faktorisering) | 10 | 10 | 8 | **28/34 = 82 %** |
| Taylorpolynom/restledd med feilanalyse | 11 | 8 | 6 | **25/34 = 74 %** |
| Omdreiningsvolum/areal (skive/skall) | 11 | 5 | 7 | **23/34 = 68 %** |
| Grenseverdier/L'Hôpital som egen deloppgave | 10 | 8 | 5 | **23/34 = 68 %** |
| Kontinuitet/deriverbarhet i ett punkt (stykkevis, skvis, differansekvotient) | 5 | 8 | 7 | **20/34 = 59 %** (15/19 = 79 % siste ti år) |
| Uegentlige integraler (konvergens/sammenligning/beregning) | 7 | 6 | 5 | **18/34 = 53 %** |
| Eksistens + entydighet (skjæringssetning + monotoni/Rolle/MVT) | 5 | 5 | 7 | **17/34 = 50 %** (7/9 siste ni sett — stigende) |
| Funksjonsdrøfting/ekstremverdi/optimering | 6 | 8 | 3 | **17/34 = 50 %** |
| ε-δ-grensebevis (kvantitativt, «velg δ = min») | 4 | 4 | 7 | **15/34 = 44 %** (7/9 siste ni sett — fast gratisoppgave) |
| Implisitt derivasjon/tangent/relaterte rater | 4 | 4 | 7 | **15/34 = 44 %** (7/9 siste ni sett — stigende) |
| Newtons metode (alltid med over-/underestimat-drøfting) | 5 | 5 | 4 | **14/34 = 41 %** |
| Numerisk integrasjon (trapes/Simpson + feilestimat) | 4 | 6 | 3 | **13/34 = 38 %** |
| Invers funksjon (eksistens, uttrykk, derivert av invers) | 5 | 2 | 5 | **12/34 = 35 %** |
| Fundamentalteoremet: derivere integral med variable grenser | 5 | 2 | 3 | **10/34 = 29 %** |
| Induksjonsbevis (typisk formel for n-te derivert) | 4 | 1 | 1 | **6/34 = 18 %** |
| Uendelige rekker/konvergenstester | 5 | 0 | 0 | **5/34 = 15 %** — alle ≤ 2005; ute av pensum etterpå (se funn 3) |
| Flervariabelt (tangentplan, kritiske punkter i to variable) | 6 | 0 | 0 | **6/34 = 18 %** — alle ≤ V2006; ute av pensum etterpå |
| Fikspunktiterasjon | 1 | 1 | 1 | **3/34 = 9 %** (men står i gjeldende emnebeskrivelse) |

**Viktigste funn:**

1. **Differensiallikninger og integrasjonsteknikk er emnets ryggrad** — praktisk talt hvert eneste sett i 17 år har begge. Dette er den skarpeste kontrasten til UiO, der difflikninger har 0 forekomster. Den anvendte, modellerende difflikningen (sett opp likningen fra en verbal beskrivelse, løs separabelt, tolk svaret) er UiBs faste avslutningsoppgave.
2. **Numerikk-klyngen er en UiB-signatur**: Newtons metode (41 %), trapes/Simpson med feilestimatformler (38 %) og fikspunktiterasjon finnes ikke i UiO-arkivet, men går igjen konstant her — ofte kjedet: skjæringssetningen gir eksistens → monotoni gir entydighet → Newton gir tilnærming → krumningsargument avgjør om tilnærmingen er for stor eller for liten.
3. **Emnebeskrivelsen (verifisert 2026) nevner uendelige rekker og konvergenstester — men arkivet har 0 forekomster etter 2005**, og pensumlistene 2006–2019 utelater rekke-kapitlet konsekvent. Rekkene må være gjeninnført ved en pensumjustering etter 2020 (arkivet stopper der). Boken må dekke dem, men eksamenstreningen kalibreres mot de dokumenterte sjangrene; sjekk sett fra 2021+ når de foreligger. (Samme forbeholdstype som MAT1100-analysen gjorde for rekker/Taylor der.)
4. **Teoretiseringstrend fra ~2016**: ε-δ, eksistens/entydighet og implisitt derivasjon har alle 7/9 forekomster i siste periode. Knutsen-settene (H2016–H2018) er de mest teoritunge og de best dokumenterte (fyldige sensor-merknader), og H2019 følger samme mal.
5. **Komplekse tall åpner settet** i så godt som alle moderne sett (unntak H2018) — normalform-aritmetikk, polarform, n-te røtter av z^n = konstant, og faktorisering av reelle polynomer over C og R.
6. **Vår- og høstsett deler mal**, i motsetning til UiOs komplementære midtveis/slutt-deling: samme temaprofil testes i mai som i desember, bare med litt kortere sett. For bokformål betyr det dobbelt så mange øvingssett per sjanger.

---

## 3. Oppgavetype-katalog

De 13 sjangrene som bærer moderne MAT111-eksamener.

### A. Anvendt førsteordens differensiallikning (avslutningsoppgaven)
- **Krav:** Oversett en verbal situasjon til en difflikning (ofte oppgitt, av og til utledes den — f.eks. fra Torricellis lov eller en tangentbetingelse), klassifiser (separabel eller lineær), løs med full føring: separér og integrer begge sider, eller finn integrerende faktor. **Konstante løsninger skal nevnes og avvises mot initialbetingelsen** (fasit sjekker alltid y ≡ 0). Bestem konstanter fra to datapunkter, og svar på det anvendte spørsmålet (tømmetid, tid til 69 % smittet, temperatur ved et klokkeslett) med tolkning.
- **Frekvens:** 33/34. Kontekster brukt: alger, epidemi (logistisk), skip som mister fart (v² -motstand), radioaktivitet, Newtons avkjøling, batteridrift, ryktespredning, saltvann, borekostnad, tanker som tømmes (Torricelli), edderkoppbestand med sesongledd.
- **Omskrevet eksempel:** «En båts fart avtar med en rate proporsjonal med kvadratet av farten. Farten faller fra 25 til 5 km/t på en halvtime. Sett opp og løs en differensiallikning, og finn når farten passerer 1 km/t.»
- **Varianter:** logistisk likning løses via delbrøkoppspalting (hint gis ofte); Torricelli-oppgaven kjeder volum-ved-skiver → implisitt derivasjon → separabel likning → tømmetid (H2009, H2012, V2012, H2014, H2017).

### B. Integrasjonsteknikk-kjeder
- **Krav:** De fire teknikkene med UiBs føringsstandard: substitusjon (bokfør u, du og nye grenser), delvis integrasjon (dokumentér valget av u/v′; «ensomme» funksjoner som arctan og ln integreres delvis mot 1), delbrøkoppspalting (også med irreduserbar kvadratisk faktor → fullført kvadrat → arctan-ledd; polynomdivisjon først når tellergrad ≥ nevnergrad), og trigonometrisk substitusjon (x = a sin θ for √(a²−x²)-former). Oppgavene kjeder gjerne to teknikker (substitusjon → delvis; substitusjon → delbrøk).
- **Åpen bok-regelen:** oppgaveteksten sier eksplisitt at integralet skal løses «med grunnleggende teknikker, ikke ved å slå opp i permen» — utledningen er hele poenget.
- **Frekvens:** 33/34; typisk 2–4 deloppgaver per sett.
- **Omskrevet eksempel:** «Beregn integralet av 1/(eˣ + 1) dx.» (Fasit: u = eˣ, deretter delbrøk — og viser fire alternative veier.)

### C. Komplekse tall (åpningsoppgaven)
- **Krav:** Normalform-aritmetikk (kvotient via konjugering), polarform begge veier med kvadrantbevissthet (tegn punktet), potenser via de Moivre med vinkelreduksjon mod 2π, alle n-te røtter av z^n = c (n røtter jevnt fordelt på sirkel, start i prinsipalroten), løsning av andregradslikninger med negativ diskriminant, og faktorisering av reelle polynomer både i lineære faktorer over C og i lineære + kvadratiske faktorer over R (konjugerte rotpar multipliseres til reell kvadratisk faktor; alternativt polynomdivisjon). Sjeldnere: geometriske mengder (|z+i| = |z−1|, |z| = r), likninger der både z og z̄ inngår, bikvadratiske likninger via substitusjon.
- **Frekvens:** 28/34; oppgave 1 i nesten alle moderne sett. Full pott krever at polarform-svar skrives helt ut til normalform når det spørres om det (sensormerknad H2016).
- **Omskrevet eksempel:** «Løs z³ = −1, skriv løsningene på normalform, og faktoriser z³ + 1 over C og over R.»

### D. ε-δ-grensebevis (gratisoppgaven med føringskrav)
- **Krav:** Skriv definisjonen, faktoriser |f(x) − L| = |x − a|·|rest|, avgrens restfaktoren på et kontrollintervall (typisk |x − a| < 1), og **velg δ = min{1, ε/K}**. Fasit påpeker at flere ulike gyldige δ finnes og godtas. Varianten mot uendelig (finn R = R(ε)) forekommer i vårsett. H2019 hadde i tillegg et beslektet teorispørsmål: utled L'Hôpital-lignende kvotientgrense direkte fra derivertdefinisjonen og grensesetningene — definisjonsbruk under kontrollerte forhold.
- **Frekvens:** 15/34 totalt, men 7/9 siste ni sett — i praksis fast innslag nå. Polynomer av grad 2–3 er standard; e^(−1/x²) (H2012) og √|x| (V2016) er de vanskeligste variantene i arkivet.
- **Omskrevet eksempel:** «Bruk den formelle definisjonen av grenseverdi til å vise at x² + x + 1 → 3 når x → 1.»
- **Sensorinnsikt (H2019-fotnote):** på slike «gratisoppgaver» vurderes *føringen* — minstekravet er å eksplisitt vise at definisjonens betingelser er oppfylt.

### E. Kontinuitet og deriverbarhet i ett punkt
- **Krav:** To hovedformer. (i) *Kontinuerlig utvidelse*: bestem konstanten c som gjør en funksjon med hull kontinuerlig — regn grensen (L'Hôpital eller skvis) og **koble den eksplisitt til f(a)**; å bare regne grensen gir trekk (sensormerknad H2016). Skviseoppgavene bruker begrenset-faktor-familien (ln x)·cos(1/(x−1)) o.l., der begrensetheten skal uttales. (ii) *Deriverbarhet i punkt*: **differansekvotienten er eneste gyldige bevis** — typisk for x^k·sin/cos(1/x^m)-familien, med skvis på kvotienten. Kjernefellen (eksplisitt sensormerknad H2016, eksamensoppgave H2004): f kan være deriverbar i punktet selv om lim f′(x) ikke finnes; og H2017 hadde motsatt retning som bevisoppgave (finnes lim f′(x) og f er kontinuerlig, er f′(a) = grensen — via sekantsetningen eller L'Hôpital). Skjøtevarianten: bestem a, b slik at en stykkevis funksjon blir kontinuerlig og deriverbar — én likning per betingelse, ensidige grenser hver for seg.
- **Frekvens:** 20/34; 79 % siste ti år. Dette er samme signatursjanger som ved UiO (der 5/6 siste år) — sjangeren er felles norsk kalkulus-arv.
- **Omskrevet eksempel:** «La f(x) = x sin x · cos(1/x²) for x ≠ 0, f(0) = 0. Avgjør om f er deriverbar i 0.»

### F. Eksistens + entydighet + Newton-kjeden
- **Krav:** Tre ledd som ofte er samme oppgave. (i) *Eksistens*: skjæringssetningen — sjekk fortegn i to punkter, pek på kontinuitet, **navngi setningen**. (ii) *Entydighet*: monotoni (f′ > 0 overalt) eller Rolle-motsigelse (to nullpunkter ville gitt f′(c) = 0). Fasit viser ofte begge som likeverdige alternativer. (iii) *Newton*: sett opp iterasjonsformelen, regn 1–4 steg, og — det som skiller karakternivåene — **avgjør om tilnærmingen er for stor eller for liten** med et krumningsargument: konveksitet/konkavitet på *hele* intervallet mellom startpunkt og rot (bare å sjekke f″ i ett punkt er utilstrekkelig — eksplisitt sensormerknad H2016). H2019 krevde til og med et fullt monotont konvergensbevis for Newton-følgen (induksjon + krumning).
- **Frekvens:** Eksistens/entydighet 17/34 (7/9 siste sett); Newton 14/34. Fikspunktiterasjon er sjeldnere (3/34) men samme apparat: vis at løsningen er fikspunkt for g, iterér, og forklar konvergens via |g′| < 1 / kontraksjon, gjerne med spiral-/trappeskisse.
- **Omskrevet eksempel:** «Vis at x³eˣ = 1 har nøyaktig én løsning på R og at den ligger i (0,1). Forklar hvorfor løsningen er et fikspunkt for g(x) = e^(−x/3), utfør to iterasjoner fra x₀ = 0, og lag en skisse som viser om tilnærmingen er for stor eller for liten.»

### G. Taylorpolynom med restledd og feilinnkapsling
- **Krav:** Skriv P_n om et gitt punkt (typisk grad 1–3, om et «pent» punkt som 1, 4, 8, 9), bruk det til en tallnærming (∛11, √10, ln 2), og **bruk Lagrange-restleddet aktivt**: finn skranker K ≤ f^(n+1)(c) ≤ L på intervallet, og lever et *intervall* som fanger den sanne verdien — eller avgjør fortegnet på feilen (for stor/for liten). Skjerpede varianter: rekursivt definerte koeffisienter fra en likning f″ = x·f (H2013), innkapsling P₃ + Gx⁴ < f < P₃ + Hx⁴ (V2018), og minste mulige intervall for f(3) gitt skranker på f″ (H2018 — løses med Taylor, integralskranker eller gjentatt sekantsetning; fasit viser at sekantveien gir et *svakere* intervall).
- **Frekvens:** 25/34 — dette er en hovedsjanger ved UiB, mot en marginal teorioppgave ved UiO. Optimal (skarpest mulig) skranke gir full pott; grovere skranker gir delvis uttelling (sensormerknad H2016).
- **Omskrevet eksempel:** «Finn Taylorpolynomet av grad 2 til ∛x om x = 8, bruk det til å tilnærme ∛11, og bruk restleddet til å angi et minst mulig intervall som inneholder den sanne verdien.»

### H. Omdreiningsvolum og areal
- **Krav:** Tegn/forstå området, **velg metode etter akse** (skiver om rotasjonsaksen når tverrsnittet er kjent; sylinderskall når man integrerer langs den andre aksen), sett opp integralet og løs det med dokumentert teknikk (ofte delvis integrasjon: ∫x ln x, ∫x e^x-familien). Fasit viser regelmessig *begge* metoder som likeverdige. Uegentlige varianter (rotasjon av e^(−x²) eller e^(−x) over [0,∞)) kombinerer sjangeren med grenseføring. Utlednings-varianten: utled V(h) for en beholder med gitt profil — første ledd i Torricelli-kjeden (sjanger A).
- **Frekvens:** 23/34.
- **Typisk felle (sensormerknad H2016):** rotasjon om feil akse, eller å levere *arealet* av området i stedet for volumet — og å skrive av et lignende eksempel fra læreboken uten å svare på det som ble spurt.
- **Omskrevet eksempel:** «Området avgrenset av y = 0, y = 1, x = 0 og y = ln x dreies om y-aksen. Finn volumet, og løs integralet med grunnleggende teknikker.»

### I. Uegentlige integraler
- **Krav:** Identifiser singulariteten/uendelighetsgrensen, **før med eksplisitt lim-notasjon** («sett inn uendelig» underkjennes), og enten beregn direkte (substitusjon → arctan-form er vanlig) eller avgjør konvergens med sammenligningskriteriet: klem integranden mot et navngitt p-integral eller e^(−x)-hale. Full uttelling krever **både** at integranden er ikke-negativ **og** at majoranten har endelig integral (eksplisitt fasitkrav H2014). Splitt i alle singulariteter (∫ over [−4,4] av 1/x² må deles i 0 — klassisk felle, H2011).
- **Frekvens:** 18/34.
- **Omskrevet eksempel:** «Beregn integralet fra 1 til uendelig av 1/(√x(x+1)).» (Substitusjon u = √x gir arctan; grensen gir π/2.)

### J. Numerisk integrasjon med feilestimat
- **Krav:** Utfør trapes- eller Simpson-tilnærming med n = 4–6 delintervaller (også fra måletabeller: CO₂, NO₂, fartsdata), og bruk **feilformlene aktivt**: skaff K = max|f″| (trapes) eller max|f⁗| (Simpson) på intervallet, og finn hvor stort n må være for gitt presisjon. Teorivarianter: beskriv metodene, vis at Simpson er eksakt for tredjegradspolynomer (f⁗ = 0), og konstruer et moteksempel der trapes slår Simpson (V2020).
- **Frekvens:** 13/34 — jevnt tilbakevendende siden 2007. Finnes ikke i UiO-arkivet.
- **Omskrevet eksempel:** «Bruk trapesmetoden med fire delintervaller på integralet av (1+t⁴)^(3/2) fra 0 til 1, og avgjør hvor mange delintervaller som trengs for feil høyst 0,04.»

### K. Implisitt derivasjon, tangenter og relaterte rater
- **Krav:** (i) Verifiser at punktet ligger på kurven (settes inn — glemmes ofte), deriver implisitt, løs for y′, skriv tangentlikningen. (ii) Finn y″ i et punkt *uten* å løse likningen (derivér relasjonen to ganger). (iii) Relaterte rater: modeller geometrien (Pytagoras-snor, synsvinkel, veinettkurve), deriver mhp. t, sett inn kjente rater, **tolk svaret med enhet og fortegn**. Fasit viser gjerne 3–4 likeverdige veier (implisitt derivasjon, kjerneregel-oppsett, startverdiproblem).
- **Frekvens:** 15/34; 7/9 siste ni sett.
- **Omskrevet eksempel:** «Kurven x³ + y³ = 4x + 4y beskriver et veinett. En bil passerer (0,2) med y′(0) = 6 — finn x′(0).»

### L. Invers funksjon
- **Krav:** Eksistens via strengt monotoni (f′ med fast fortegn — begrunnelsen kan også gå via Rolle/sekantsetningen: to like verdier ville gitt f′ = 0), finn uttrykk for f⁻¹ der det spørres (løs y = f(x) for x, **med riktig definisjonsmengde** — fasit gir «pluss i margen» for den), eller bruk derivert-av-invers-formelen (f⁻¹)′(b) = 1/f′(a) for tangenter til den inverse. Subtil variant: finn det største intervallet rundt et gitt punkt der f er inverterbar (fortegnsskjema for f′, V2020); moteksempel-variant: g′ > 0 er ikke nok når definisjonsmengden er usammenhengende (V2010).
- **Frekvens:** 12/34.
- **Omskrevet eksempel:** «Vis at f(x) = ln(x² − 2x + 2) er én-til-én på [1,∞), og finn en formel for f⁻¹.»

### M. Funksjonsdrøfting, optimering og grenseteknikk
- **Krav:** Full drøfting med fortegnsskjema for f′ og f″, monotoni, konveksitet/vendepunkter, asymptoter og skisse; eksistensen av globale ekstremalverdier skal *begrunnes* (Max-Min-teoremet på lukket intervall; grenser mot ±∞ ellers) — mangelfulle eksistensbegrunnelser er hyppig påpekt (H2016). Grafgjenkjenning (koble f, f′, f″ eller skissér f′ fra f) går igjen. Optimering fra geometri (innskrevne rektangler, kraftlinje land/sjø, korteste bro) krever modellering + kandidatsjekk. Grenseoppgavene dekker alle ubestemte former; **ubestemt form skal identifiseres før L'Hôpital brukes**, og former som 0⁰, 1^∞, ∞ − ∞ omskrives via logaritme/konjugat først.
- **Frekvens:** drøfting/optimering 17/34; egne grenseoppgaver 23/34.
- **Omskrevet eksempel:** «Drøft f(x) = x³e^(−x) + 2: monotoni, globale ekstremalverdier (finnes de?), krumning og skisse.»

### N. Induksjonsbevis
- **Krav:** Nesten alltid formelen for den n-te deriverte av en logaritme- eller potensfunksjon (ln(2x+1), 1/(1+x)², ln x): verifiser basissteget mot direkte regning, gjennomfør induksjonstrinnet med eksplisitt derivasjon, konkluder med full induksjonsstruktur. Eldre sett hadde også delsum-formler og monotoni/skranke-induksjon for rekursive følger.
- **Frekvens:** 6/34 — lav, men H2018 viser at sjangeren gjenoppstår. (UiO-parallellen bandt alltid induksjon til matrisepotenser; UiB binder den til n-te deriverte.)

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og løsningsforslag)
1. **«Alle svar skal begrunnes, men begrunnelsene skal være korte»** — stående instruks siden ~2009, med krav om nok mellomregning til at fremgangsmåten er tydelig. Fra 2019 eksplisitt: riktig fremgangsmåte gir godt med poeng selv uten riktig sluttsvar. (Mildere formulert enn UiOs «ubegrunnet = 0», men innholdet er det samme: metoden er det som måles.)
2. **Åpen bok forplikter**: der fasitsvaret står i lærebokpermen, krever oppgaven eksplisitt at utregningen vises («vis utregningen, ikke slå opp»; «grunnleggende integrasjonsteknikker»). Avskrift av lærebokeksempler uten tilpasning gir null (dokumentert H2016: mange skrev av et areal-eksempel fra §6.5 i stedet for å svare på volumspørsmålet).
3. **Teoremer navngis med referanse**: løsningsforslagene refererer konsekvent til navngitte setninger — skjæringssetningen, sekantsetningen (MVT), Rolle, skviseteoremet, ekstremalverdisetningen, fundamentalteoremet, de Moivre, kompletthetsprinsippet — ofte med paragraf-/sidereferanse til Adams. Kandidater forventes å begrunne ved teoremnavn, og L'Hôpitals forutsetninger skal sjekkes før bruk.
4. **Alternative løsninger honoreres konsekvent**: fasitene fører regelmessig 2–4 fullverdige veier («begge er like gode») — skive vs. skall, separabel vs. integrerende faktor, monotoni vs. Rolle, optimal vs. grovere restleddskranke (sistnevnte med gradert uttelling). Kandidater som *kommenterte* en meningsløs deloppgave i settet fikk kreditt for det (H2004).
5. **Eksistens og entydighet er to separate leveranser** — hyppigste sensoranmerkning: kandidater leverer det ene og tror de har levert begge.
6. **Kvantitative teoriverktøy skal brukes kvantitativt**: restledd og feilformler skal gi tallintervaller/skranker, ikke bare siteres; ved Newton skal krumningen på hele intervallet begrunne retningen på feilen.
7. **«Gratisoppgaver» vurderes på føring** (H2019-fotnote): selv der alt er standard, er minstekravet å liste opp hvorfor teoremets betingelser er oppfylt.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på: kompleks aritmetikk og røtter etter oppskrift, standard substitusjon/delvis integrasjon, separabel likning med gitt modell, trapes-/Simpson-utregning fra tabell, tangent ved implisitt derivasjon.
- **Midtsjiktet** behersker i tillegg: delbrøk med irreduserbar kvadratisk faktor, ε-δ med min-valg, kontinuerlig utvidelse med kobling til f(a), konvergensargument med navngitt majorant, volumoppsett med riktig metodevalg, eksistens via navngitt skjæringssetning.
- **Toppsjiktet** kjennetegnes av: (i) differansekvotient-bevis med skvis og kjennskap til oscillasjonsfellen (lim f′ finnes ikke ⇏ ikke deriverbar); (ii) restleddsanalyse med *skarpest mulige* skranker og korrekt intervallkonklusjon; (iii) Newton/fikspunkt med fullstendig krumnings-/kontraksjonsargument over hele intervallet; (iv) entydighetsbevis (Rolle-motsigelse) i tillegg til eksistens; (v) å se kjedene i oppgavedesignet (faktorisering fra oppgave 1c gjenbrukt i integralet i 1f; volumformelen fra a) matet inn i difflikningen i b)); (vi) domene- og gyldighetsforbehold (definisjonsmengde for invers, verdimengde for arcsin, konstant-løsninger i separable likninger, A = 0-degenerasjon i parametriske oppgaver).

---

## 5. Typiske feil (dokumentert i sensor-merknader eller innebygget i oppgavedesignet)

1. **Deriverbarhet «avgjort» uten differansekvotienten** — inkludert den dokumenterte misforståelsen (H2016) om at grensen i tillegg må være lik «den deriverte av funksjonsverdien» (meningsløst), og den klassiske fellen der lim f′(x) ikke finnes men f likevel er deriverbar (x²sin(1/x)-familien, eksamensstoff H2004).
2. **Kontinuitet «vist» ved bare å regne grensen** — uten å koble den til funksjonsverdien f(a); i skjøtepunkter sjekkes bare én side.
3. **Krumning sjekket i ett punkt** i Newton-oppgaver: f″(x₀) < 0 er ikke nok — argumentet krever fast krumningsfortegn på hele intervallet mellom startverdi og rot (sensormerknad H2016).
4. **Rotasjon om feil akse, eller areal levert som volum**; lærebokeksempel kopiert uten at det svarer på spørsmålet (H2016). Feil oppsett kan tilfeldigvis gi riktig tall — uten begrunnelse gir det likevel ikke uttelling (H2009-merknad).
5. **Manglende eksistensbegrunnelse for globale ekstremalverdier** — kandidatene finner kritiske punkter, men begrunner ikke at maks/min finnes (eller ikke finnes: grense mot −∞ overses).
6. **Konvergensargument uten begge premisser**: sammenligningstesten brukt uten å nevne at integranden er ikke-negativ, eller uten navngitt konvergent majorant (eksplisitt fasitkrav H2014); singulariteter inne i intervallet overses (1/x² over [−4,4]).
7. **Konstante løsninger glemt i separable likninger** — fasit sjekker alltid y ≡ 0/likevektsløsninger mot initialbetingelsen før det deles på y; degenererte parameterverdier (A = 0) overses (H2016-merknad: ingen kandidater så det).
8. **Restleddet sitert men ikke brukt**: tilnærmingen leveres uten feilskranke, eller med grove skranker der skarpe var tilgjengelige; fortegnet på feilen (for stor/for liten) ikke vurdert.
9. **Ubestemt form ikke identifisert før L'Hôpital**, og forutsetningene ikke sjekket; former som 1^∞ og ∞ − ∞ angrepet direkte i stedet for via logaritme/konjugat.
10. **Polarform-slurv**: argument i feil kvadrant (tegn punktet!), vinkler ikke redusert mod 2π ved høye potenser, polarsvar ikke skrevet ut til normalform når oppgaven ber om det (H2016: koster full pott).
11. **Definisjonsmengder ignorert**: invers funksjon uten definisjonsmengde, verdimengdekrav for arcsin/arctan i substitusjoner (dokumentert sensorkommentar 2004), inverterbarhet påstått fra f′ > 0 på usammenhengende mengde.
12. **Unødvendig arbeid som stjeler tid**: begge ensidige grenser regnet der ordinær grense holder (H2016-merknad), fire Newton-iterasjoner der én er bedt om — med 17–23 min per deloppgave er tidsdisiplin en reell faktor.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)

**Grenser og kontinuitet:**
- **ε-δ-definisjonen** av grenseverdi (og R-ε-varianten mot uendelig): kvantitativt, med faktoriser-avgrens-velg-δ = min-malen. Dette er *bevissjangeren* ved UiB — mot UiOs mer teoretiske kvantorspørsmål.
- **Skviseteoremet** — med uttalt begrensethetsargument (|cos| ≤ 1).
- **Skjæringssetningen** (mellomverdisetningen): fortegnsskifte + kontinuitet + navn.
- **Ekstremalverdisetningen** (Max-Min): eksistens av globale ekstremalverdier på lukket, begrenset intervall — brukes også «uten regning».
- **L'Hôpital** med formsjekk før bruk; alle ubestemte former via logaritme-/konjugatomskriving. H2019 krevde utledning av 0/0-spesialtilfellet fra derivertdefinisjonen — kandidatene må kjenne beviset, ikke bare regelen.
- Standardgrenser: sin x/x → 1, veksthierarkiet, x ln x → 0.

**Derivasjon:**
- **Derivertdefinisjonen** (differansekvotienten) som aktivt bevisverktøy i punkt-spørsmål.
- **Sekantsetningen (MVT) og Rolle**: entydighetsbevis, ulikhetsbevis (arctan x < x), Lipschitz-estimat, og grense-av-derivert-setningen (H2017-bevis).
- **Derivert av invers**: (f⁻¹)′(b) = 1/f′(a); tangenter til inverse funksjoner.
- Implisitt derivasjon inkl. andrederiverte av relasjoner; logaritmisk derivasjon (x^cos x-familien).
- **Induksjon** på formler for n-te deriverte.

**Integrasjon:**
- **Analysens fundamentalteorem** begge veier; derivasjon av integraler med variable grenser (kjerneregel-faktoren) — inkl. veldefinerthetsargument for integranden (H2018).
- Teknikkene: substitusjon, delvis, delbrøk (alle nevnertyper), trigonometrisk substitusjon, polynomdivisjon.
- **Uegentlige integraler**: lim-føring, sammenligningskriteriet med ikke-negativitet + navngitt majorant, p-integralenes status.
- **Trapes- og Simpson-metoden med feilformler**: E_T ≤ K(b−a)³/(12n²), E_S ≤ K(b−a)⁵/(180n⁴) — brukes til å *dimensjonere* n; Simpsons eksakthet for kubiske polynomer.
- Omdreiningsvolum: skive- og skallmetoden, metodevalg etter akse; areal mellom kurver.

**Numeriske metoder og likninger:**
- **Newtons metode**: iterasjonsformelen, geometrisk tolkning (tangentens nullpunkt), krumningsargument for over-/underestimat, feilrekursjon og konvergensbevis (H2006, H2019).
- **Fikspunktiterasjon**: fikspunktomskriving, kontraksjonsvilkåret |g′| < 1 via MVT, spiral-/trappediagram.
- **Taylors formel med Lagrange-restledd**: aktiv skrankeanalyse; sammenhengen P₁ = tangent = én Newton-iterasjon.

**Differensiallikninger (kap. 7.9-nivå):**
- Separable likninger: full føringsmal inkl. konstante løsninger; logistisk likning via delbrøk.
- Lineære førsteordens: integrerende faktor; variasjon av parameter som alternativ.
- Modelleringsdisiplin: utled likningen fra rate-beskrivelsen, bestem konstanter fra datapunkter, tolk svaret.

**Komplekse tall (Appendiks I + algebraens fundamentalteorem):**
- Normalform-aritmetikk, polarform/eksponentialform begge veier, de Moivre for potenser og n-te røtter, konjugatrotsetningen og reell faktorisering, andregradsformelen med negativ diskriminant, geometriske mengder i planet. Algebraens fundamentalteorem (uten bevis) er eksplisitt pensum.

### Må forstås, men svakt/ikke arkivbelagt
- **Uendelige rekker og konvergenstester** — i gjeldende emnebeskrivelse (2026), men 0 forekomster 2006–2020 (var eksamensstoff 2003–2005: p-rekker, forholdstest, grensesammenligning, integraltest, alternerende rekker, potensrekkers konvergensområde — de gamle settene gir gjenbrukbare sjangermaler hvis stoffet er tilbake). Dekkes i boken, merkes «ikke arkivbelagt etter 2005», og kalibreres mot sett fra 2021+ når de foreligger.
- **Fikspunktteori i full generalitet** — testet tre ganger; emnebeskrivelsen nevner fikspunktiterasjon eksplisitt, så sjangeren skal med.
- Flervariabelt stoff (tangentplan) — ute av pensum siden ~2007; skal *ikke* inn i boken.

### Notasjons- og føringskonvensjoner boken bør speile
- Fasitspråket: navngitte setninger med Adams-referanse; «Alternativt:»-avsnitt for likeverdige veier; eksplisitte formmarkeringer før L'Hôpital; lim-føring i uegentlige integraler; fortegnsskjema for monotoni/krumning; konklusjonssetning med enhet i anvendte oppgaver.
- δ = min{1, ε/K}-malen; z = re^(iθ)-form med kvadrantkontroll; integrerende faktor μ(x) = e^(∫p dx).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Differensiallikningspakken** — 97 % frekvens; separabel + lineær med full føringsdisiplin (konstante løsninger!) og modelleringstrening på arkivets kontekstfamilier. Settets faste avslutning.
2. **Integrasjonsteknikk-repertoaret** — 97 %; kjeding av teknikker med åpen bok-føringskravet («vis utregningen») internalisert.
3. **Komplekse tall komplett** — 82 %, alltid åpningsoppgaven: normalform-tempo, polarform/de Moivre, n-te røtter, reell/kompleks faktorisering.
4. **Taylor med aktiv restleddsanalyse** — 74 %; skranke → intervall → fortegn på feilen. (Hovedforskjell fra UiO-boka, der dette er marginalt.)
5. **Eksistens–entydighet–Newton-kjeden** — kombinert dekker leddene godt over halvparten av settene, og kjeden er UiBs tydeligste karakterskiller (krumningsargumentet).
6. **Kontinuitet/deriverbarhet i punkt** — 79 % siste ti år; differansekvotient + skvis + oscillasjonsfellen.
7. **Omdreiningsvolum med metodevalg** — 68 %; inkl. uegentlige varianter og Torricelli-kjeden.

### Nivå 2 — må kunne (bredden i poengfangsten)
8. **ε-δ-malen** — 7/9 siste sett; drill faktoriser-avgrens-min-mønsteret til automatikk (gratispoeng med føringskrav).
9. **Uegentlige integraler** — 53 %; direkte beregning og sammenligning med begge premisser uttalt.
10. **Implisitt derivasjon/relaterte rater** — 7/9 siste sett; punktverifikasjon, y″ fra relasjonen, rate-tolkning.
11. **Trapes/Simpson med feildimensjonering** — 38 %; formlene brukt kvantitativt, også fra tabelldata.
12. **Grensetempo**: alle ubestemte former med formsjekk-disiplin.
13. **Invers funksjon-pakken** — 35 %; monotoni-begrunnelse, uttrykk med definisjonsmengde, derivert av invers.
14. **Drøfting/optimering** med eksistensbegrunnelser og grafgjenkjenning.
15. **Fundamentalteorem-oppgaven**: derivere integraler med variable grenser.

### Nivå 3 — bør dekkes (lav frekvens eller pensum-/fremtidssikring)
16. **Induksjon på n-te derivert** — 18 %, men gjenoppstod H2018; billig å drille.
17. **Fikspunktiterasjon** — 9 %, men eksplisitt i emnebeskrivelsen; kontraksjonsargumentet.
18. **Uendelige rekker** — 0 arkivforekomster etter 2005, men gjeldende emnebeskrivelse krever dem: dekk med standardtestene og de gamle 2003–2005-sjangrene som mal, merk kapitlet «ikke arkivbelagt», verifiser mot første tilgjengelige sett etter 2020.
19. **Teoribevis-varianter** fra Knutsen-settene: grense-av-derivert-setningen, L'Hôpital fra definisjonen, Newton-konvergensbevis, Taylor-innkapsling — toppkarakter-differensiatorer.
20. **Digital-eksamenssjangre** (V2020): sant/usant med begrunnelse, «beskriv metoden», moteksempel-konstruksjon — gjenbrukbart hvis hjemme-/digitalformat vender tilbake.

**Prognose for neste ordinære eksamen** (basert på H2016–H2019-malen): 5 timer, åpen bok, 12–17 likt vektede deloppgaver. Åpning med komplekse tall (normalform + røtter + faktorisering); én ε-δ-oppgave; én kontinuitets-/deriverbarhetsoppgave i punkt (skvis/differansekvotient); én invers- eller FTC-oppgave; én eksistens + entydighet + Newton/fikspunkt-kjede; 2–3 integrasjonsteknikk-deloppgaver; ett uegentlig integral; ett omdreiningsvolum med teknikk-krav; trapes/Simpson med feilestimat *eller* Taylor med restleddsintervall (ofte begge); og til slutt en anvendt separabel differensiallikning eller relaterte rater med kontekst. Usikkerhetsmoment: emnebeskrivelsen av 2026 nevner uendelige rekker — er de reelt tilbake i pensum, må ett til to innslag (konvergenstest + Taylorrekke) påregnes, og prognosen justeres mot første sett etter reformen.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiB/MAT111/` (samt `MAT111_V14/`, som kun inneholder en dublett av V2014-settet).

**Løsningsforslag lest grundig (34):** `MAT111_2003_h_fasit_eksamen.pdf` … `MAT111_2020_v_fasit_eksamen.pdf` — samtlige år 2003–2020, vår + høst. De mest detaljerte (H2016, H2017, H2018 — med eksplisitte sensor-«Merknad»-avsnitt om hva som ga trekk/full pott — samt H2019) er lest tettest.

**Eksamensoppgaver lest grundig (siste ~8 år):** `MAT111_2013_h_eksamen.pdf` … `MAT111_2020_v_eksamen.pdf`; eldre oppgavesett skumlest for form og temaregistrering.

**Midtsemesterprøver (5):** `MAT111_2003_h_*_deleksamen.pdf`, `MAT111_2004_h/v_*_deleksamen.pdf`, `MAT111_2005_h/v_*_undervegsvurdering.pdf` — kun brukt til formhistorikk (ordningen opphørte etter 2005).

**Pensumlister (14 årganger):** `MAT111_2003_h_pensum.pdf` … `MAT111_2019_h_pensum.pdf` — brukt til å datere pensumskiftene (rekker/flervariabelt ut ~2006; stabil Adams-liste 2006–2019).

**Fagbeskrivelse:** omskrevet sammendrag av UiBs emnebeskrivelse, verifisert aktiv 2026 (scratchpad: `fagbeskrivelse-mat111-uib.md`).

**Forbilde/sammenligning:** `docs/hoyskole-boker/mat1100/EKSAMENSANALYSE.md` (UiO MAT1100).

**Merknader om kildene:**
- **Bildebaserte PDF-er uten tekstlag (7):** oppgavesettene V2006, V2007, V2011, H2012, V2012, V2015 og H2020 lot seg ikke tekstkonvertere — men **løsningsforslagene deres har tekstlag og gjengir oppgavene**, så settene er likevel katalogisert (unntak: H2020, der også fasiten er bildebasert; det settet er det eneste hullet i analysen). `UiB_MAT111.pdf` i rotmappen er også bildebasert og ubrukt.
- **OCR-forbehold:** fasiten V2005 er delvis OCR-korrupt; katalogiseringen av det settet er rekonstruert fra formlene og bør etterprøves mot original-PDF før innhold bygges direkte på det.
- **To sett per år:** både vår- og høstsett er fulle ordinære eksamener med samme temaprofil; høstsettene (hovedsemesteret) er gjennomgående noe lengre og mer teoritunge.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.
