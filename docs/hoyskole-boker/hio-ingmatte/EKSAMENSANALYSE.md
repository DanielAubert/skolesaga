# Eksamensanalyse: ITD15020 Kalkulus — Høgskolen i Østfold (ingeniørmatematikk)

> Grunnlagsdokument for en eksamensrettet lærebok i ingeniørmatematikk (kalkulus). Bygger på **12 lesbare eksamenssett i ITD15020 Kalkulus (desember 2020 – mai 2026)** med tilhørende løsningsforslag og seks offisielle sensorveiledninger, pluss det utdelte formelheftet, 12 ukentlige øvingssett fra høsten 2024 (som kartlegger hele pensum) og de eldre forgjenger-settene (Matematikk 1 / ITD15013 og Ingeniørmatematikk 2). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, metodenavn og standardformler er allmenn fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.
>
> **Hovedfunn (les dette først):** ITD15020 er et bemerkelsesverdig **stabilt og forutsigbart** enkelt-faglærer-emne (Christian F. Heide er både faglærer og oppgavesetter gjennom hele arkivet). Fire søyler er praktisk talt garantert på hvert sett: **(1) differensiallikninger** (både 1. og 2. orden — den klart tyngste blokken), **(2) integrasjon** (fra ledd-for-ledd til substitusjon/delvis/delbrøk, ofte som areal- eller volumoppgave), **(3) derivasjon med implisitt derivasjon og tangentlinje**, og **(4) grenseverdier med l'Hôpital**. Rundt disse roterer et fast repertoar av mindre sjangre: vektorer i R³ (vinkel + kryssprodukt), partiellderiverte, Taylorpolynom av grad 2, og omdreiningsvolum. Alt tester **anvendt regneteknikk og metode, ikke bevis** — dette er ingeniørmatematikk, ikke universitetenes rene kalkulus. Et **formelhefte deles ut** (pluss to A4-ark egne notater og utdelt kalkulator), så eksamen tester **bruk, ikke pugging**. Den viktigste utviklingen: emnet har (a) forlatt både lineær algebra og Laplace-transform som forgjengerne ITD15013/Ingeniørmatematikk 2 hadde, og (b) i praksis **droppet komplekse tall som eksamenstema** selv om det står i pensum — 0 av 12 sett har en kompleks-tall-oppgave.

---

## 0. Emnekode, avgrensning og kildekritikk

### Emnet og kode-linjen

Faget heter **Kalkulus**, emnekode **ITD15020**, og er grunnkurset i matematikk ved ingeniør- og IT-utdanningene på Høgskolen i Østfold (campus Halden, Institutt for informasjonsteknologi). Verifisert mot hiof.no: **10 studiepoeng**, aktivt emne (emnesider finnes for 2020 til og med 2025/26), undervist på norsk, faglærer Christian F. Heide.

Arkivmappen er navngitt `ITD15020-ITD15013-matematikk` fordi den blander dagens emne med to eldre forgjengere. Forsidene og innholdet gjør skillet tydelig:

| Periode / filgruppe | Emnekode / -navn på forsiden | Oppgavesetter | Innholdsprofil |
|---|---|---|---|
| des 2020 – mai 2026 (`kalkulus_eksamen_*`) | **ITD15020 «Kalkulus»** | Christian F. Heide | Ren kalkulus: derivasjon, integrasjon, DE, grenser, vektorer, partiellderiverte, Taylor |
| des 2018 – jan 2020 (`m1_deleksamen*`, `m1_eksamen*`) | **ITD15013 «Matematikk 1»** | Christian F. Heide | Kalkulus **pluss** lineær algebra (matriser, determinant, invers, egenverdier, basisskifte, Markov) **pluss** komplekse tall og Laplace-transform |
| des 2012 – juni 2019 (`m1_deleksamen1/2_*`) | **ITD15013 «Matematikk 1 — første/andre deleksamen»** | Christian F. Heide | Samme som over, delt i to deleksamener |
| 2009–2011 (`eksamen_ingmat2_*`, `proveeksamen_h2012`) | **«Ingeniørmatematikk 2»** | Monica Kristiansen | Lineær algebra (kryptering via matriseinvers, basis/basisskifte, egenverdier/egenvektorer), rekker/Taylor, DE, kurvedrøfting |

**Hva som er forgjenger vs. dagens emne.** Sammenhengen er: *Ingeniørmatematikk 2* (Kristiansen, t.o.m. 2011/2012) → *Matematikk 1* (ITD15013, Heide, delt i to deleksamener 2012–2019, deretter samlet «Matematikk 1»-eksamen jan 2020) → *Kalkulus* (ITD15020, Heide, fra des 2020). Det avgjørende bruddet ligger mellom ITD15013 og ITD15020: ved overgangen til Kalkulus ble **hele lineær-algebra-halvdelen og Laplace-transformen skilt ut** (i dag ligger dette i separate HiØ-emner, jf. ITD27021 «Lineær algebra og integraltransformer»). Dagens ITD15020 er altså kalkulus-halvdelen av det gamle Matematikk 1, renset for matriser og transformer.

### Hvilke filer er eksamen, hvilke er øving

- **Eksamenssett i ITD15020 (analysert grundig, 12 stk med tekstlag):** `kalkulus_eksamen_` for des20, juni21, des21, feb22, des22, feb23, des23, feb24, nov24, juni25, des25 (11 oppgavesett) + `mai26_losning` (kun løsningsforslag foreligger; oppgaveteksten er rekonstruert fra fasiten). Alle har rent tekstlag.
- **Sensorveiledninger (lest for vurderingskriterier, 6 stk):** des22, feb23, des23, nov24, juni25, des25.
- **Ukentlige øvinger (skummet for pensumdekning, ikke frekvensvektet):** `kalkulus_oving1_h24` … `kalkulus_oving12_h24` med løsninger. Disse er *ikke* eksamenssett og teller ikke i frekvenstabellen, men de kartlegger hele pensum og avslører temaer som undervises, men sjelden kommer på eksamen (Newtons metode, rekker).
- **Forgjenger-sett (skummet for kildekritikk, ikke frekvensvektet):** `m1_deleksamen1_*` (des12–juni19), `m1_deleksamen2_*` (mai13–jan15), `m1_eksamen_jan20`, `eksamen_ingmat2_h2009/h2010/v2011`, `proveeksamen_h2012`. Disse beskriver en bredere pensumprofil (lineær algebra + Laplace + komplekse tall) som ikke lenger gjelder ITD15020.
- **Tilleggsmateriell / pensumhint:** `oppgaver_kap5` (definisjons-/verdimengde), `oppgaver_kap7-*` (derivasjon), `oppgaver_kap9` (DE), `oppgaver_kap11` (rekker), `oppgaver_kap13` (Taylor), `thomas_complex_numbers` (Thomas' Calculus, tillegg A.7), `laplacetransformer` og `diffligninger_systematikk` (Heides oppsummeringsark), `matlab_intro`, `summen_av_alle_positive_heltall`. Kapittelnummereringen peker på **Thomas' Calculus** som lærebok. Laplace-arket er legacy-materiell fra ITD15013, ikke dagens Kalkulus-pensum.

### Skannet uten tekstlag / ekskludert

`703.pdf` har intet tekstlag (skannet) og er registrert kun på metadata. `rotete_eksamensbesvarelse.pdf` er en studentbesvarelse (illustrasjon av dårlig føring), ikke et oppgavesett. Håndskrevne løsnings-PDF-er blant `oppgaver_kap*` er lest som bilder for kapittelidentifikasjon, ikke innhold.

### Arkivets tidsspenn og aktualitet

Eksamenssettene spenner **desember 2020 – mai 2026** — nyeste sett er bare måneder gammelt, og oppgavesetteren er den samme gjennom hele perioden. I motsetning til mange arkiver er det her **intet aktualitetsgap**: prognosene i del 7 kan kalibreres direkte mot dagens form med høy tillit. Den eneste usikkerheten er en gradvis dreining i settstruktur (se del 1) som er godt dokumentert i selve arkivet.

---

## 1. Eksamensform og utvikling

**Fast form gjennom hele arkivet:** individuell skriftlig skoleeksamen, **4 timer**, bokstavkarakter A–F. Tillatte hjelpemidler er konstante på hvert sett:

- **To A4-ark (fire sider) med valgfritt eget innhold** på begge sider.
- **Formelhefte** (utdelt; se del 6 for hva det inneholder og forutsetter).
- **Kalkulator som deles ut samtidig med oppgavesettet** (studenten tar ikke med egen).

Det finnes **ingen deleksamen eller midtveisprøve** i ITD15020 — hele karakteren avgjøres av sluttprøven. (Forgjengeren ITD15013 hadde derimot to deleksamener, «første» og «andre deleksamen», jf. `m1_deleksamen1/2_*` — dette er borte i Kalkulus.)

**Tre eksamenssesjonger.** Datomønsteret viser ordinær høsteksamen (**november/desember**), en «ny og utsatt»-kontinuasjon (**februar**) og en ordinær/utsatt våreksamen (**mai/juni**). Kontinuasjonssettene («Ny og utsatt») har samme form og pensum som de ordinære; de er ikke systematisk lettere eller vanskeligere. Enkelte kontinuasjoner er lagt til ettermiddag (feb22 kl. 16–20, feb23 kl. 17–21), men tiden er alltid 4 timer.

**Fast instruks på hvert sett:** «Ved sensuren teller hver oppgave like mye» og «Husk å vise utregninger og hvordan du kommer fram til svarene.» Fra og med 2025-settene er begrunnelseskravet skjerpet i ordlyd: *«Et svar uten utregning eller begrunnelse vil som hovedregel ikke godkjennes som et riktig svar.»*

**Den viktigste utviklingen — settstrukturen krymper og delspørsmål-vekting innføres:**

| Periode | Antall oppgaver | Vektingsprinsipp | Signatur |
|---|---|---|---|
| 2020–2023 | **10 oppgaver** (des20, des21, feb22, des22, feb23) | Hver oppgave teller likt (inntil 10 poeng × 10 = 100) | Bred meny; ett innslag av vektorer, ett av partiellderiverte, ett Taylor |
| 2023–2024 | **9 oppgaver** (des23, feb24, nov24) | Hver oppgave teller likt (10 × 9 = 90) | Litt færre, litt tyngre oppgaver; deloppgaver a/b vanligere |
| 2025– | **8–9 oppgaver, men vektet per delspørsmål** (juni25: 8 oppgaver; des25: 9 oppgaver / 12 delspørsmål) | **Hvert delspørsmål** teller likt (des25: 10 × 12 = 120 poeng) | Flere sammensatte oppgaver med a/b/c; begrunnelseskravet eksplisitt skjerpet |

Utviklingen er altså mot **færre, men mer sammensatte oppgaver**, og fra 2025 mot **poengvekting på delspørsmålsnivå** framfor på hel oppgave. Innholdsmenyen er derimot slående stabil (se del 2). En annen stille observasjon: **komplekse tall** — som er i pensum og på øving 1 — dukker **aldri opp** som eksamensoppgave i noen av de 12 settene (den eneste «komplekse» forekomsten er komplekse røtter i den karakteristiske likningen for 2.-ordens DE, som står forklart i formelheftet).

**Konsekvens for boken.** Boken bør vekte de fire søylene (DE, integrasjon, derivasjon/tangent, grenser) tyngst, deretter det faste satellitt-repertoaret (vektorer, partiellderiverte, Taylor grad 2, omdreiningsvolum). Komplekse tall og Newtons metode bør dekkes fordi de står i pensum, men markeres som lav-frekvente på selve eksamen. Lineær algebra og Laplace hører **ikke** til ITD15020 og skal ikke tas inn.

---

## 2. Temafrekvens-tabell

Celleverdi = antall av de **12 lesbare ITD15020-settene** (des20 → mai26) der temaet forekommer som (del)oppgave. Øvinger og forgjenger-sett er **ikke** talt med her.

| Tema | Sett (12) | **Frekvens** | Kommentar |
|---|---|---|---|
| **Differensiallikninger — 2. orden, konstante koeffisienter** (homogen + partikulær) | 12 | **12/12 = 100 %** | Ryggraden. Alle tre rot-tilfellene forekommer; ofte a) homogen + b) inhomogen med samme venstreside |
| **Differensiallikninger — 1. orden** (separabel eller lineær m/ integrerende faktor, ofte IVP) | 12 | **12/12 = 100 %** | Minst én per sett; separabel og integrerende faktor omtrent like ofte |
| **Integrasjon — teknikk** (ledd-for-ledd, substitusjon, delvis, delbrøk, trig) | 12 | **12/12 = 100 %** | 2–4 integraler per sett; ofte kledd som areal- eller volumoppgave |
| **Derivasjon m/ implisitt derivasjon og tangentlinje** | 10 | **10/12 = 83 %** | «Punktet (a,b) ligger på kurven — finn tangenten» er nesten årviss standardoppgave |
| **Grenseverdi med l'Hôpital** (eksplisitt påbudt, ikke kalkulator) | 9 | **9/12 = 75 %** | Fast E1-tungt innslag; mangler kun i juni25/des25/mai26 |
| **Areal under/mellom grafer** (bestemt integral) | 6 | **6/12 = 50 %** | Ofte med figur; noen ganger areal mellom kurve og linje |
| **Partiellderiverte** (1. og 2. orden av f(x,y); noen ganger kritisk punkt / lineær approks.) | 6 | **6/12 = 50 %** | Fast innslag i 10-oppgave-æraen; sjeldnere i de nyeste settene |
| **Taylorpolynom av grad 2 om x = 0** | 5 | **5/12 = 42 %** | Alltid grad 2, alltid om a = 0; aldri uendelige rekker |
| **Vektorer i R³** (vinkel mellom + kryssprodukt) | 5 | **5/12 = 42 %** | Fast oppskrift: skalarprodukt→vinkel (grader+radianer), så u×v |
| **Omdreiningsvolum** (rotasjon, y-aksen dominerer) | 5 | **5/12 = 42 %** | y-aksen er hovedtilfellet (vase, snurrebass, beholder); én om x-aksen |
| **Logaritmisk derivasjon** (f(x)^g(x)) | 3 | **3/12 = 25 %** | Egen liten sjanger, ofte som deloppgave b) |
| **Funksjonstransformasjon / translasjon** (flytt grafen, finn g(x)) | 3 | **3/12 = 25 %** | «Flytt f to enheter høyre og tre ned» |
| **Trigonometrisk likning** (løs for x i [0, 2π⟩) | 2 | **2/12 = 17 %** | Andregradslikning i cos x el.l. |
| **Grafgjenkjenning** (hvilken er f, f′, f″?) | 2 | **2/12 = 17 %** | Begrunn ut fra monotoni/fortegn |
| **Invers funksjon / definisjons- og verdimengde / asymptoter / symmetri** | 2 | **2/12 = 17 %** | Kurvedrøftings-innslag |
| **Uegentlig integral** | 1 | **1/12 = 8 %** | Sjelden, men i pensum (øving 9) |
| **Newtons metode (manuell iterasjon)** | 1 | **1/12 = 8 %** | Kun feb24, tross fast plass i pensum (øving 5) |
| **Uendelig rekke** (geometrisk, konvergens + sum) | 1 | **1/12 = 8 %** | Kun feb23, tross fast plass i pensum (øving 12) |
| **Optimering** (maks/min, største rektangel) | 1 | **1/12 = 8 %** | Sjelden som ren eksamensoppgave |
| **Lineær approksimasjon** (av f(x,y)) | 1 | **1/12 = 8 %** | Deloppgave under partiellderiverte |
| **Anvendt DE-modellering** (utled DE fra tekst + tolk) | 1 | **1/12 = 8 %** | Kun juni21 (radioaktiv nedbrytning); ellers gis DE-ene ferdig oppstilt |
| **Komplekse tall** (som eget tema) | 0 | **0/12 = 0 %** | I pensum + øving 1, men **aldri** eksamensoppgave. «Komplekse løsninger» opptrer bare som DE-røtter |
| **Numerisk integrasjon fra tabell/graf** (trapes/Simpson) | 0 | **0/12 = 0 %** | I pensum (øving 9), men ikke på eksamen |
| **Matriser / determinant / egenverdier / basisskifte** | 0 | **0/12 = 0 %** | Hører til forgjengeren ITD15013, flyttet til eget lineær-algebra-emne |
| **Laplace-transform** | 0 | **0/12 = 0 %** | Legacy ITD15013, ikke dagens Kalkulus |
| **Bevis (ε-δ, MVT-konstruksjon)** | 0 | **0/12 = 0 %** | Ikke ingeniørmatte-sjanger |

### Viktigste funn

1. **Differensiallikninger er den doble ryggraden (100 % + 100 %).** Hvert eneste sett inneholder minst én 1.-ordens DE (separabel eller lineær via integrerende faktor, ofte som initialverdiproblem) **og** minst én 2.-ordens DE med konstante koeffisienter. 2.-ordens-oppgaven har ofte formen «a) løs den homogene, b) løs den inhomogene med samme venstreside» — et fast mønster der partikulærløsningen finnes ved ubestemte koeffisienter og alle tre rot-tilfellene (to reelle / dobbeltrot / komplekst par) er i spill. En bok som ikke gjør DE til hovedsøylen, bommer på faget.

2. **Integrasjon er alltid til stede (100 %), som teknikk og som anvendelse.** Et typisk sett har ett ledd-for-ledd-integral (polynom + trig + eksponential + 1/x), ett med substitusjon eller delvis integrasjon, og ett med delbrøkoppspalting — pluss ofte en areal- eller volumoppgave som «pakker inn» integralet i en figur. Delbrøk over `(x−a)²` og over `(x²+1)`-typer går igjen.

3. **Implisitt derivasjon + tangentlinje er den mest stabile «mellomstore» sjangeren (83 %).** Oppskriften er alltid lik: et punkt oppgis å ligge på en implisitt kurve, deriver implisitt, finn stigningstallet, skriv tangentlikningen. Dette er billige, høyfrekvente poeng.

4. **l'Hôpital er fast (75 %) og eksplisitt påbudt** — oppgaveteksten sier gjentatte ganger «bruk l'Hôpitals regel, ikke kalkulator». Studenten må vise metoden, ikke bare svaret.

5. **Vektorer, partiellderiverte, Taylor grad 2 og omdreiningsvolum utgjør et fast satellitt-repertoar (42–50 % hver).** Hvert av disse har en helt fast form: vektorer = vinkel (grader + radianer) + kryssprodukt; partiellderiverte = alle 1.- og 2.-ordens av f(x,y); Taylor = grad 2 om x = 0; volum = rotasjon om y-aksen. De er forutsigbare og bør trenes til refleks.

6. **Tre pensum-temaer undervises, men kommer sjelden/aldri på eksamen: komplekse tall (0/12), Newtons metode (1/12), rekker (1/12) og numerisk integrasjon fra tabell (0/12).** Øvingene 1, 5, 9 og 12 dekker dem, og de står i den offisielle emnebeskrivelsen — men oppgavesetteren prioriterer dem lavt. Boken bør dekke dem (de *kan* komme, og de er pensum), men merke dem som lav-sannsynlige.

---

## 3. Oppgavesjangre

De sjangrene som faktisk går igjen, med krav og et omskrevet eksempel hver. Rekkefølgen følger frekvens.

### A. Differensiallikning, 2. orden med konstante koeffisienter
- **Krav:** Sett opp den karakteristiske likningen og skill de tre tilfellene: to reelle røtter (`C₁e^{λ₁t} + C₂e^{λ₂t}`), dobbeltrot (`(C₁ + C₂t)e^{λt}`), komplekst rotpar (`e^{αt}(C₁cos βt + C₂sin βt)`). For inhomogen likning: finn `y_h`, gjett `y_p` med samme form som høyresiden (polynom / eksponential / sinus-cosinus), **sjekk om ansatzen må oppgraderes ved resonans**, balanser ledd for ledd, og bestem konstantene til slutt ved initialbetingelser.
- **Frekvens:** 12/12. Ofte todelt: a) homogen, b) inhomogen med samme venstreside.
- **Omskrevet eksempel:** «a) Løs `y″ + 6y′ + 25y = 0`. b) Løs `y″ + 6y′ + 25y = 25x² − 13x + 21`.»

### B. Differensiallikning, 1. orden (separabel / lineær)
- **Krav:** Gjenkjenn typen. Separabel: skill variablene, integrer begge sider, løs for y, sett inn initialkrav. Lineær `y′ + p(x)y = r(x)`: bring på standardform, finn integrerende faktor `e^{∫p dx}`, skriv venstresiden som en derivert av et produkt, integrer. Ofte gitt som initialverdiproblem med `y(0)` eller `y(1)`.
- **Frekvens:** 12/12.
- **Omskrevet eksempel:** «Løs initialverdiproblemet `2y′ = y/(x+4)`, `y(0) = 10`, for x ≥ 0.»

### C. Integrasjonsteknikk
- **Krav:** De faste teknikkene med føring: **ledd-for-ledd** (polynom, `1/x → ln`, `1/x² `, trig, `e^{ax}`), **substitusjon** (bytt variabel, oppdater grenser ved bestemt integral), **delvis integrasjon** (dokumentér u/v′-valg; klassikere `xe^x`, `x sin x`), **delbrøkoppspalting** (over `(x−a)(x−b)`, `(x−a)²`, og `(x²+1)`-nevnere). Husk integrasjonskonstant ved ubestemt integral — sensor trekker for manglende konstant.
- **Frekvens:** 12/12; 2–4 per sett.
- **Omskrevet eksempel:** «Regn ut `∫ (x+1)/(x−2)² dx`.»

### D. Implisitt derivasjon og tangentlinje
- **Krav:** Vis eventuelt at punktet ligger på kurven, deriver likningen implisitt mhp. x, løs ut `y′`, sett inn punktet, skriv tangentlikningen `y − y₀ = y′(x − x₀)`.
- **Frekvens:** 10/12.
- **Omskrevet eksempel:** «Kurven er gitt ved `(y+2)e^{−x} + x²y³ = x² + 3`. Finn tangenten i punktet (0, 1).»

### E. Grenseverdi med l'Hôpital
- **Krav:** Marker den ubestemte formen (`[0/0]`, `[∞/∞]`, evt. `0·∞` omskrevet), deriver teller og nevner (gjenta ved behov), bruk standardgrenser. **Kalkulator er eksplisitt forbudt** for disse — metoden skal vises.
- **Frekvens:** 9/12.
- **Omskrevet eksempel:** «Bruk l'Hôpital: `lim_{x→0} (1 − cos x)/ln(1 + x²)`.»

### F. Areal under/mellom grafer
- **Krav:** Tegn/les området, sett opp det bestemte integralet (evt. differansen mellom to funksjoner), løs med relevant integrasjonsteknikk. Ofte gitt med figur og et skravert område.
- **Frekvens:** 6/12.
- **Omskrevet eksempel:** «Grafen til `f(x) = −3x⁴ + 4x³` er tegnet. Finn det eksakte arealet av det skraverte området.»

### G. Partiellderiverte av f(x, y)
- **Krav:** Regn ut alle 1.-ordens (`f_x`, `f_y`) og alle 2.-ordens (`f_xx`, `f_yy`, `f_xy`) partiellderiverte. Varianter: bruk dem til **lineær approksimasjon** i et punkt, eller til å finne og **karakterisere et kritisk punkt**.
- **Frekvens:** 6/12.
- **Omskrevet eksempel:** «Finn alle partiellderiverte av 1. og 2. orden til `f(x, y) = x sin y + x³y⁵ + e^{3xy}`.»

### H. Taylorpolynom av grad 2
- **Krav:** Bestem `P₂(x) = f(0) + f′(0)x + f″(0)/2 · x²` om `a = 0`. Krever to derivasjoner og innsetting. Alltid grad 2, alltid om origo i arkivet.
- **Frekvens:** 5/12.
- **Omskrevet eksempel:** «Finn Taylorpolynomet av grad 2 om x = 0 for `f(x) = 1/√(x²+4)`.»

### I. Vektorer i R³ (vinkel + kryssprodukt)
- **Krav:** Vinkelen via skalarproduktet (`cos θ = u·v / (|u||v|)`), oppgi svaret både i **grader og radianer**; deretter kryssproduktet `u × v` (determinant-oppsett med i, j, k).
- **Frekvens:** 5/12.
- **Omskrevet eksempel:** «Gitt `u = −3i + j + 2k`, `v = i − j − 2k`. a) Finn vinkelen (grader og radianer). b) Finn `u × v`.»

### J. Omdreiningsvolum
- **Krav:** Velg metode etter akse (formler på formelheftet). Om y-aksen (hovedtilfellet): sylinderskall `V = 2π∫x·f(x) dx`. Om x-aksen: skiver `V = π∫f(x)² dx`. Tegn området, sett opp integralet, løs med teknikk. Ofte kledd som en fysisk gjenstand (vase, snurrebass, beholder).
- **Frekvens:** 5/12.
- **Omskrevet eksempel:** «Området under `f(x) = xe^x` på [0, 2] roteres om y-aksen. Finn volumet.»

### K. Logaritmisk derivasjon
- **Krav:** For `f(x) = g(x)^{h(x)}`: ta ln på begge sider, deriver implisitt, løs ut `f′`.
- **Frekvens:** 3/12.
- **Omskrevet eksempel:** «Finn `f′(x)` for `f(x) = (4x + 1)^{sin x}` med logaritmisk derivasjon.»

### L. Funksjonstransformasjon
- **Krav:** Skriv om `f(x)` etter en beskrevet forskyvning (høyre/venstre = `f(x∓a)`, opp/ned = `f(x)±b`).
- **Frekvens:** 3/12.
- **Omskrevet eksempel:** «`f(x) = −x³`. Lag `g(x)` som er `f` flyttet 3 enheter høyre og 2 opp.»

### M. Lav-frekvente pensum-sjangre (dekk, men vektlegg lavt)
- **Trigonometrisk likning** (2/12): løs f.eks. `2cos²x + cos x − 2 = cos x − 1` for x ∈ [0, 2π⟩.
- **Grafgjenkjenning** (2/12): begrunn hvilken kurve som er f, f′ og f″ ut fra monotoni/fortegn.
- **Invers funksjon / definisjonsmengde / asymptoter / symmetri** (2/12): kurvedrøfting.
- **Newtons metode** (1/12): `x_{n+1} = x_n − f(x_n)/f′(x_n)`, oppgitt antall iterasjoner fra gitt startverdi.
- **Uendelig rekke** (1/12): vis at en geometrisk rekke konvergerer og finn summen.
- **Uegentlig integral** (1/12), **optimering** (1/12), **anvendt DE-modellering** (1/12: radioaktiv nedbrytning — utled DE, løs, regn halveringstid).
- **Komplekse tall** (0/12): i pensum og på øving 1, men aldri examinert i arkivet. Bør dekkes kort med forbehold.

---

## 4. Sensorens krav / vurderingskriterier

Fra oppgaveinstrukser og de seks sensorveiledningene:

1. **Fast prosentbasert karakterskala** (identisk i alle sensorveiledninger):

   | Karakter | Prosent |
   |---|---|
   | **F** | 0 – 38 % |
   | **E** | 39 – 49 % |
   | **D** | 50 – 59 % |
   | **C** | 60 – 77 % |
   | **B** | 78 – 89 % |
   | **A** | 90 – 100 % |

   Merk det brede C-båndet (60–77 %) og at bestått-grensen (E) går ved 39 %. Sensorene kan justere den endelige karakteren ut fra settets vanskelighetsgrad etter en helhetsvurdering, men prosentscoren er utgangspunktet.

2. **Poeng per oppgave / delspørsmål.** Inntil 10 poeng per oppgave (2020–2024) eller per delspørsmål (2025–). Alle teller likt. Der en oppgave har a/b, deles poengene ofte likt (f.eks. «inntil 5 poeng på hvert av de to delspørsmålene»).

3. **Begrunnelse er obligatorisk.** «Husk å vise utregninger», skjerpet fra 2025 til «Et svar uten utregning eller begrunnelse vil som hovedregel ikke godkjennes som et riktig svar.» Bar fasit gir altså i praksis null, også med riktig tall.

4. **Integrasjonskonstant er poenggivende.** Sensorveiledningene sier eksplisitt at det **trekkes inntil 1 poeng** dersom svaret på et ubestemt integral mangler «+ C». Dette er et gjentakende, konkret trekkpunkt.

5. **DE-oppgaver poengsettes trinnvis.** For 2.-ordens inhomogen DE gis f.eks. «inntil 5 poeng for løsningen av den homogene, og inntil 5 poeng til for den generelle løsningen av den inhomogene». Delvis uttelling gis for korrekt `y_h` selv om `y_p` er feil.

6. **l'Hôpital-metoden må vises.** Der oppgaven forbyr kalkulator, gir et kalkulatorsvar uten l'Hôpital-utregning ikke uttelling.

7. **Effektiv metode honoreres, men alternative veier godtas** ved korrekt gjennomføring (typisk for sensorveiledninger i faget).

### Karakterskiller (utledet)

- **Bestått-sjiktet (E/D)** henter poeng på de mekaniske standardene: separabel/lineær 1.-ordens DE, homogen 2.-ordens DE, standardintegral med «+ C», implisitt derivasjon + tangent, vektor-vinkel + kryssprodukt, l'Hôpital på enkel `[0/0]`.
- **Midtsjiktet (C/B)** behersker i tillegg inhomogen 2.-ordens DE med korrekt `y_p` (inkl. resonans/dobbeltrot/komplekst par), delbrøk og substitusjon i integraler, partiellderiverte av 2. orden, Taylor grad 2, og omdreiningsvolum med riktig aksemetode.
- **Toppsjiktet (A)** kjennetegnes av: feilfri behandling av randtilfeller (resonans, dobbeltrot), presis og fullstendig føring/begrunnelse, riktig håndtering av de lav-frekvente sjangrene (Newton, rekke, uegentlig integral, anvendt DE-modellering) og konsekvent «+ C» / riktige grenser.

---

## 5. Typiske feil

Utledet fra løsningsforslag, sensorveiledninger og oppgavekonstruksjonen:

1. **Manglende integrasjonskonstant** — «+ C» glemmes på ubestemte integraler; eksplisitt poengtrekk i sensorveiledningen.
2. **Glemte substitusjonsgrenser** — variabelbytte i bestemt integral uten å oppdatere grensene, eller glemt indre derivert.
3. **2.-ordens DE: feil partikulæransatz** — glemmer resonans/oppgradering når høyresiden løser den homogene likningen; feil form ved dobbeltrot (`(C₁ + C₂t)e^{λt}`) eller komplekst rotpar.
4. **Feil aksemetode for omdreiningsvolum** — skiveformel om y-aksen eller skallformel om x-aksen; å ikke tegne området før oppsett.
5. **l'Hôpital brukt feil** — deriverer brøken som kvotient i stedet for teller og nevner hver for seg, eller stopper før den ubestemte formen er borte.
6. **Delbrøk-oppsett feil** — feil ansatz for gjentatt faktor `(x−a)²` (må ha både `A/(x−a)` og `B/(x−a)²`) eller for `(x²+1)`-nevner (må ha `(Bx+C)/(x²+1)`).
7. **Implisitt derivasjon: glemt produkt-/kjerneregel** på blandede ledd, eller innsetting av punktet før derivasjon.
8. **Vektor: svar bare i grader** når både grader og radianer kreves; fortegns-/komponentfeil i kryssproduktdeterminanten.
9. **Partiellderivert: forveksler `f_xy`** eller glemmer en av 2.-ordens-derivertene.
10. **Taylor: regnefeil i `f″(0)`** eller glemt `1/2!`-faktoren på annengradsleddet.
11. **1.-ordens lineær DE: feil integrerende faktor** — glemmer å bringe likningen på standardform (koeffisient 1 foran `y′`) før `e^{∫p dx}` regnes ut.
12. **Ubegrunnet svar** — spesielt farlig fra 2025 der bar fasit ikke godkjennes.

---

## 6. Formelhefte og hjelpemidler

**Hva som deles ut / er tillatt (konstant på alle sett):**
- **To A4-ark (fire sider) egne notater** — studenten kan skrive inn det hen vil. Dette forutsetter at studenten selv tar med de tettpakkede standardene (delbrøk-maler, integraltabell, Taylor-formel, vektorformler) hvis hen vil ha dem for hånd.
- **Utdelt formelhefte.** Arkivets vedlegg til hvert eksamenssett er to sider: (1) **tabell over eksakte trigonometriske verdier** for standardvinklene (0, π/6, π/4, π/3, π/2), og (2) **«Løsning av differensialligninger — en oppsummering»** (Heides eget ark, datert 30.01.2018): karakteristisk likning med alle tre rot-tilfellene, ubestemte koeffisienter for inhomogen likning (med påminnelse om oppgradering ved resonans), separabel metode, og integrerende faktor for lineær 1.-ordens DE. Det fullstendige emne-formelheftet (via Leganto/Thomas) inneholder i tillegg derivasjons- og integrasjonstabeller, men **DE-oppsummeringen er det mest sentrale utdelte arket** og forklarer hvorfor DE-oppgaver kan settes uten at metoden repeteres i oppgaveteksten.
- **Utdelt kalkulator** (studenten tar ikke med egen). Merk at kalkulator likevel er **forbudt** for l'Hôpital-oppgavene der metoden skal vises.

**Hva heftet forutsetter.** Fordi DE-oppskriftene og trig-verdiene deles ut, tester eksamen **gjenkjenning og korrekt anvendelse**, ikke pugging: studenten skal vite *hvilken* metode som passer og gjennomføre den feilfritt. De to A4-arkene betyr at flittige studenter kan ha delbrøk-maler, integraltabell, Taylor-formelen og vektorformlene tilgjengelig — boken bør derfor lære studenten å *bygge et godt notatark* som en eksplisitt strategi.

**Notasjonskonvensjoner boken bør speile:** DE med `y′`, `y″` og initialkrav `y(0)`/`y′(0)`; vektorer på både `ai + bj + ck` og `[a, b, c]`-form; partiellderiverte som `f_x`, `f_xy`; Taylor `P₂(x)` om `a`; vinkler oppgitt i **både grader og radianer**; eksakte (ikke desimale) svar der det bes om det.

**Lærebok:** kapittelnummereringen i tilleggsmateriellet (kap. 5, 7, 9, 11, 13 + tillegg A.7 komplekse tall) peker på **Thomas' Calculus** som pensumbok.

---

## 7. Prioritering for læreboken + prognose

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Differensiallikninger, 2. orden konstante koeffisienter** (100 %) — alle tre rot-tilfeller, inhomogen med ubestemte koeffisienter og resonanshåndtering, IVP.
2. **Differensiallikninger, 1. orden** (100 %) — separabel og lineær (integrerende faktor), IVP.
3. **Integrasjonsteknikk** (100 %) — ledd-for-ledd, substitusjon (m/ grensebytte), delvis, delbrøk (alle nevnertyper), «+ C».
4. **Implisitt derivasjon + tangentlinje** (83 %).
5. **Grenseverdi med l'Hôpital** (75 %) — metoden vist, ikke kalkulator.

### Nivå 2 — må kunne (gir bredden)
6. **Areal under/mellom grafer** (50 %).
7. **Partiellderiverte av f(x, y)** (50 %) — 1. og 2. orden, lineær approksimasjon, kritisk punkt.
8. **Taylorpolynom grad 2 om x = 0** (42 %).
9. **Vektorer i R³** (42 %) — vinkel (grader + radianer) + kryssprodukt.
10. **Omdreiningsvolum** (42 %) — riktig aksemetode, y-aksen som hovedtilfelle.
11. **Logaritmisk derivasjon** (25 %) og **funksjonstransformasjon** (25 %).

### Nivå 3 — bør dekkes (lav frekvens, men i pensum)
12. **Trigonometrisk likning** (17 %), **grafgjenkjenning f/f′/f″** (17 %), **kurvedrøfting** (invers/definisjonsmengde/asymptoter/symmetri, 17 %).
13. **Newtons metode** (8 %), **uendelig geometrisk rekke** (8 %), **uegentlig integral** (8 %), **optimering** (8 %), **anvendt DE-modellering** (8 %) — alle på øvingene, så de *kan* komme; dekk dem, men markér lav sannsynlighet.
14. **Komplekse tall** — i pensum og på øving 1, men **0/12 på eksamen**. Dekk kort (kartesisk/polar/eksponentialform, regneoperasjoner) med eksplisitt forbehold om at det er lav-frekvent på ITD15020s eksamen, men at komplekse røtter uansett trengs i 2.-ordens DE.

### Ikke ta med (hører til andre emner)
- **Matriser, determinant, invers, egenverdier, egenvektorer, basisskifte, Markov-kjeder** — dette var ITD15013/Ingeniørmatematikk 2 og ligger nå i eget lineær-algebra-emne (jf. ITD27021). 0/12 i Kalkulus.
- **Laplace-transform** — legacy ITD15013, ikke ITD15020.
- **Bevis/ε-δ-teori** — ikke ingeniørmatte-sjanger.

### Prognose for neste eksamen (høy tillit — samme oppgavesetter, ferskt arkiv)
8–10 oppgaver (evt. 9 oppgaver med ~12 likt vektede delspørsmål), 4 timer, med utdelt kalkulator + formelhefte + to A4-ark. Forvent nær **garantert**: **minst én 1.-ordens DE** (separabel eller integrerende faktor, ofte IVP), **minst én 2.-ordens DE** (typisk a) homogen + b) inhomogen med samme venstreside), **2–4 integraler** (minst ett med substitusjon/delvis/delbrøk), **én implisitt derivasjon + tangent**, og **én l'Hôpital-grense**. Meget sannsynlig i tillegg: **ett vektorinnslag** (vinkel + kryssprodukt), **én partiellderivert-oppgave**, **ett Taylorpolynom grad 2**, og **ett omdreiningsvolum om y-aksen**. Sannsynlige småinnslag: logaritmisk derivasjon, funksjonstransformasjon, trigonometrisk likning eller grafgjenkjenning. Lite sannsynlig, men mulig: Newtons metode, geometrisk rekke, uegentlig integral, anvendt DE-modellering.

**Usikkerhet:** Lav. Den eneste bevegelige faktoren er settstrukturen (mot færre, mer sammensatte oppgaver med delspørsmålsvekting fra 2025) og et gradvis skjerpet begrunnelseskrav — innholdsmenyen er derimot svært stabil. Følg med på om komplekse tall eller numeriske metoder (som *står* i pensum) plutselig aktiveres på eksamen; per arkivet er de sovende.

---

## 8. Overlapp med eksisterende fag

### Stor overlapp: OsloMet Matematikk 1000 (`oslomet-mat1000`) — søsterfaget

Begge er **ingeniørmatematikkens grunnkurs**, samme sjanger (anvendt metode, ikke bevis), samme hjelpemiddelfilosofi (utdelt formelark). Felles kjerne som kan gjenbrukes tungt mellom bøkene:

- **Differensiallikninger** (1. orden separabel + integrerende faktor; 2. orden konstante koeffisienter med alle tre rot-tilfeller og ubestemte koeffisienter) — ryggraden i begge (100 % begge steder).
- **Integrasjonsteknikk** (substitusjon, delvis, delbrøk, trig) — ~100 % begge.
- **Derivasjon, implisitt derivasjon, tangentlinje** — høyfrekvent begge.
- **Grenseverdier / l'Hôpital**, **Taylorpolynom om et punkt**, **omdreiningsvolum** (y-aksen som hovedtilfelle i begge), **optimering / relaterte rater** — felles satellitt-repertoar.

**Unikt for HiØ ITD15020 (finnes ikke, eller er nedtonet, i OsloMet-settene):**
- **Vektorer i R³ med vinkel + kryssprodukt** som fast eksamenssjanger.
- **Partiellderiverte av f(x, y)** som årviss egen oppgave (i OsloMet er flervariabel skilt ut til Matematikk 2000).
- **Trigonometriske likninger** og **funksjonstransformasjon** som egne små sjangre.

**Unikt for OsloMet Matematikk 1000 (finnes IKKE i ITD15020 Kalkulus):**
- **Hele lineær-algebra-blokken** (matriser, determinant, invers, matriselikning, lineære transformasjoner, parametersystemer, egenverdier) — bærende i OsloMet, men fraværende i Kalkulus (flyttet til eget HiØ-emne).
- **Komplekse tall som eksamenstema** (10/10 i OsloMet-epoke 2; 0/12 i ITD15020).
- **MATLAB/Octave-skripttolking og numeriske metoder** (Newton/Euler/Riemann/trapes) som eksamenssjanger — sentralt i OsloMet, nesten fraværende i ITD15020 (Newton bare 1/12, numerisk integrasjon 0/12, tross øvingsdekning).
- **Anvendt DE-modellering fra tekst** er mye vanligere i OsloMet (13/23) enn i ITD15020 (1/12) — HiØ gir stort sett DE-ene ferdig oppstilt.

**Konklusjon:** OsloMet-boken og HiØ-boken deler en stor felles kalkulus-/DE-kjerne som kan gjenbrukes, men de skiller seg på to akser: HiØ har vektorer + partiellderiverte men *ikke* lineær algebra / komplekse tall / MATLAB, mens OsloMet har lineær algebra + komplekse tall + MATLAB men *ikke* vektorer/partiellderiverte som egne temaer. En HiØ-bok kan altså låne DE-, integrasjons-, derivasjons-, grense-, Taylor- og volumkapitlene, men må skrive egne kapitler for vektorer og partiellderiverte og kutte lineær-algebra-/kompleks-/MATLAB-kapitlene.

### Mindre overlapp: NTNU TMA4135 (`tma4135`) — Matematikk 4

TMA4135 er et **høyere** matematikk-emne (Matematikk 4D) som bygger *på* kalkulus. Overlappen er smal:
- **Delt:** Taylorpolynom/-rekker, numerisk integrasjon (trapes/Simpson) og grunnleggende ODE — men i TMA4135 er dette forutsatt kjent og brukt som byggesteiner.
- **Ikke i ITD15020:** TMA4135s fire søyler — **Laplace-transform, Fourier-rekker/-transform, separasjon av variable for PDE-er, og avansert numerikk (interpolasjon, Runge–Kutta, DFT)** — ligger alle *over* ITD15020s nivå. (Laplace var riktignok med i HiØs *forgjenger* ITD15013, men er skilt ut av dagens Kalkulus.)

**Konklusjon:** ITD15020 er et **forkunnskaps-fag** for TMA4135-typen, ikke en parallell. Nesten intet innhold kan gjenbrukes direkte; ITD15020-boken leverer grunnlaget (derivasjon, integrasjon, enkle DE, Taylor) som et Matematikk 4-emne senere forutsetter.

---

## Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/HiØ/ITD15020-ITD15013-matematikk/` (flat mappe, 125 filer, ~56 løsninger, blandet innhold fra tre kursgenerasjoner).

**ITD15020-eksamenssett lest grundig (12):** `kalkulus_eksamen_` des20, juni21, des21, feb22, des22, feb23, des23, feb24, nov24, juni25, des25 (11 oppgavesett med tekstlag) + `mai26_losning` (kun løsningsforslag). Epoke 2023–2026 (færre/sammensatte oppgaver) vektet noe tyngre i prognosen, men innholdsmenyen er stabil hele veien.

**Sensorveiledninger lest for vurderingskriterier (6):** `kalkulus_sensorveiledning_` des22, feb23, des23, nov24, juni25, des25 — grunnlaget for karakterskala (del 4), poengfordeling og trekkpunkter (integrasjonskonstant).

**Øvinger skummet for pensumdekning (12, ikke frekvensvektet):** `kalkulus_oving1_h24` … `oving12_h24` m/ løsninger — kartlegger hele pensum og avdekker at komplekse tall (øving 1), Newtons metode (øving 5), numerisk integrasjon (øving 9) og rekker (øving 12) undervises, men sjelden/aldri examineres.

**Forgjenger-sett skummet for kildekritikk (ikke frekvensvektet):** `m1_deleksamen1_*` (des12–juni19), `m1_deleksamen2_*` (mai13–jan15), `m1_eksamen_jan20` (ITD15013 «Matematikk 1», Heide — kalkulus + lineær algebra + komplekse tall + Laplace/Dirac), samt `eksamen_ingmat2_h2009/h2010/v2011` og `proveeksamen_h2012` (Kristiansen, «Ingeniørmatematikk 2» — kryptering via matriseinvers, basisskifte, egenverdier).

**Tilleggsmateriell / pensumhint:** `oppgaver_kap5/7/9/11/13`, `thomas_complex_numbers` (Thomas' Calculus tillegg A.7), `laplacetransformer` + `diffligninger_systematikk` (Heides oppsummeringsark), `matlab_intro`, `summen_av_alle_positive_heltall`. Kapittelnummereringen indikerer **Thomas' Calculus** som lærebok.

**Emnebeskrivelse:** verifisert mot HiØs emnesider (hiof.no, ITD15020 for 2020–2025): 10 studiepoeng, 4-timers individuell skriftlig eksamen, hjelpemidler = to A4-ark (4 sider) + formelhefte + utdelt kalkulator, karakter A–F, faglærer Christian F. Heide. Pensumtemaer: trigonometri, vektorer/euklidske rom, funksjoner av én og flere variable, derivasjon/partiellderivasjon, grenser/l'Hôpital, Newtons metode og lineær approksimasjon, analytisk og numerisk integrasjon, differensiallikninger, rekker inkl. Taylor-rekker. HiØ tilbyr lineær algebra og integraltransformer i et *eget* emne (ITD27021), noe som forklarer hvorfor ITD15020 mangler matriser og Laplace.

**Skannet uten tekstlag / ekskludert:** `703.pdf` (intet tekstlag, kun metadata), `rotete_eksamensbesvarelse.pdf` (studentbesvarelse, ikke oppgavesett).

**Merknader:**
- **Én oppgavesetter, ferskt arkiv:** Christian F. Heide har satt alle ITD15020-settene, og arkivet går fram til mai 2026 — derfor uvanlig høy prognosetillit.
- **Ingen deleksamen:** ITD15020 har kun sluttprøve (forgjengeren ITD15013 hadde to deleksamener).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og standardformler (formelheftet) er allmenn fagnotasjon.
