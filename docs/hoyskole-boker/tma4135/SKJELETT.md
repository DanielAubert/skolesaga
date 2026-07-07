# Bokskjelett: TMA4135 Matematikk 4D — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (13 velkarakteriserte sett H2015–Kont2024 fra
> TMA4135/TMA4130-arkivet, ~26 filer, alle tilgjengelige løsningsforslag +
> det utdelte formelarket lest grundig). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4135` |
| Tittel | **TMA4135 Matematikk 4D — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU |
| Arketype | Regnefag (kvantitativt emne med svært fast oppgavetradisjon) |
| Antall kapitler | **36** (1 eksamenskart + 1 repetisjon + 30 tema, hvorav 4 drill + 4 eksamenstrening) |
| Estimert totaltid | **2 730 min ≈ 45,5 timer** |
| Quiz totalt | **539** (krav ≥500) |
| Flashcards totalt | **546** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4135 er blant de mest forutsigbare emnene i arkivet.
Fire søyler er praktisk talt garantert på hvert sett og bærer sammen >80 % av
poengene: **(1) Laplace-transform** (ODE/IVP, integro-differensiallikning/
konvolusjon, Heaviside/Dirac) — 100 %; **(2) Fourier** (rekke og/eller
transform) — 100 %; **(3) separasjon av variable** for en PDE (varme-/bølge-/
Laplace-likning) — 92 %; og **(4) numeriske metoder** — der hver enkelt metode
har lav–middels frekvens, men **3–4 numeriske sjangre opptrer på hvert sett**
(interpolasjon, integrasjon, rotsøking/fikspunkt, ODE-løsere og differanse-
metoder for PDE). Eksamen er en **4-timers skriftlig skoleeksamen**, hjelpemiddel-
kode **C**, karakter A–F, med **6–10 oppgaver** og **ingen flervalgsdel**
(avkryssingsboksen «skal ha flervalgskjema» på trykk-arket er bare skjemametadata
og er aldri i bruk). Et **formelark deles ut** (Laplace- og Fourier-tabeller +
en full numerikk-side), så eksamen tester **bruk og utledning — ikke pugg**.
Denne boka er kalibrert mot nettopp det: den drilles ryggraden søyle for søyle,
trener studenten i å *finne og bruke* formlene fra arket og *utlede* det som ikke
står der, og dekker de nye 2022–2024-sjangrene (innfelt RK-par med steglengde-
kontroll, DFT, Gauss–Legendre) som obligatorisk primærmål for kommende sett.

**Kritisk kalibrering — «alt begrunnes» (gjelder HELE boka):** Den faste instruksen
på hvert sett er *«Alle svar må begrunnes; ta med nok mellomregning til at
tenkemåten klart framgår.»* Bar fasit uten utledning gir **ikke** full uttelling.
To sensorregler går igjen i alle innholdskontrakter under:
1. **Metode-/teoremnavn skal bæres eksplisitt** — «andreforskyvningsteoremet»,
   «konvolusjonsteoremet», «fikspunktteoremet», «mellomverdisetningen»,
   «d'Alemberts formel». Fasiten skriver dem ut; det skal boka også.
2. **Flere gyldige metoder premieres alle** — delbrøk **vs.** kvadratkomplettering,
   reell **vs.** kompleks delbrøk, cover-up **vs.** lineært system for delbrøk-
   koeffisienter, Lagrange **vs.** Newtons dividerte differanser. Der en sjanger
   har flere aksepterte veier, skal kapitlet vise **minst to** og navngi dem.
3. **Feilforplantning tolereres** — får studenten feil mellomverdi (f.eks. feil
   konstant $L$) men **regner riktig videre**, gis full uttelling i senere
   delpunkt. Kapitlene skal lære kjedet føring, ikke fasit-avhengighet.

**Formelark-prinsippet (gjelder HVER delkapittel — bokas viktigste didaktiske
grep):** Fordi kode C gir et vedlagt formelark, må hvert kapittel eksplisitt
skille to slags innhold:
- **«Står på formelarket — tren oppslaget»**: hentes fra arket, og ferdigheten
  er å velge riktig rad/tabell, sette inn riktig $a$/$\omega$/frihetsgrad og
  bruke den riktig. Dette gjelder: Laplace-tabellen ($\cos\omega t$, $\sin\omega t$,
  $\cosh$, $\sinh$, $t^n\!\leftrightarrow\! n!/s^{n+1}$, $e^{at}\!\leftrightarrow\!1/(s-a)$,
  andreforskyvning $f(t-a)u(t-a)\leftrightarrow e^{-as}F(s)$, $\delta(t-a)\leftrightarrow e^{-as}$),
  Fourier-transform-tabellen (Gauss-par, $e^{-a|x|}$, $1/(x^2+a^2)$, boksfunksjon),
  trigonometriske identiteter, delvis-integrasjon-reduksjonsformlene for
  $\int x^n\cos ax\,dx$ / $\int x^n\sin ax\,dx$, og hele numerikk-siden (Newton
  skalar+system, Lagrange + interpolasjonsfeil $\varepsilon_n(x)=\prod(x-x_k)\,f^{(n+1)}(\xi)/(n+1)!$,
  Chebyshev-punkter, Newtons dividerte differanser, trapes/Simpson med feilledd,
  Jacobi/Gauss–Seidel, Euler/forbedret Euler/RK4/bakover-Euler, differanse-
  kvotienter, Crank–Nicolson, og fra 2022 **RK-ordensbetingelsene** for $p=1..4$).
- **«Må kunnes/utledes aktivt»**: transformere en ODE og løse for $Y(s)$;
  delbrøk + kvadratkomplettering; andreforskyvning på Heaviside-ledd; symmetri-
  utnyttelse og koeffisientintegraler i Fourier-rekker; alle tre $k$-tilfellene
  i separasjon av variable; Fourier-matching; d'Alembert; verifikasjon av PDE-
  løsning; presisjonsgrad ved å teste $x^n$; **begge** fikspunktvilkårene;
  rad-for-rad ordensverifikasjon i Butcher-tabellen; lokalt feilestimat i innfelt
  par; stabilitetsanalyse ($R(z)$, $h\le 2/|\lambda|$, $r\le\tfrac12$); falsk-rand-
  behandling og kodefeil-lokalisering. Studenten skal også trenes i å **lage sitt
  eget gule A5-ark** (kap. 9.1) som en del av eksamensforberedelsen.

**Notasjonskonvensjoner boka skal speile slavisk** (fra settene og formelarket):
- Laplace: $\mathcal{L}$, $F(s)=\mathcal{L}\{f\}$, $Y(s)$; derivasjonsregelen
  $\mathcal{L}\{y'\}=sY-y(0)$; Heaviside $u(t-a)$, Dirac $\delta(t-a)$;
  konvolusjon $(g*y)(t)=\int_0^t g(\tau)y(t-\tau)\,d\tau$.
- Fourier: $f̂(\omega)$ for transformen; Fourier-koeffisienter $a_n$, $b_n$
  (reell rekke) og $c_n$ (kompleks rekke $\sum c_n e^{inx}$); halvintervall $[0,L]$.
- PDE: separasjonsansatsen $u(x,t)=F(x)G(t)$, separasjonskonstant $k$
  (behandle **alltid** $k>0$, $k=0$, $k<0$); bølgefart $c$; d'Alemberts formel.
- Numerikk: Butcher-tabell $\begin{array}{c|c} c & A \\ \hline & b^{\!\top}\end{array}$;
  stabilitetsfunksjon $R(z)$ med $z=\lambda h$; $U_i^n \approx u(x_i,t_n)$.
  **Notasjonsklash (må håndteres eksplisitt):** analysen/formelarket bruker
  $r=k/h^2$ for differanseskjema der $k$ er **tidssteget** — men $k$ er også
  separasjonskonstanten i Del 5. I Del 8 skal boka skrive tidssteget som
  $\Delta t$ og stabilitetstallet $r=\Delta t/h^2$, med en fotnote om at
  **formelarket kaller tidssteget $k$** (så studenten kjenner igjen arket).
- Svar oppgis som **eksakt uttrykk** der mulig, ellers tallverdi med nok siffer.
- Engelsk fagterminologi i parentes ved første forekomst der den er innarbeidet
  (f.eks. «steglengdekontroll (step-size control)»).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:
«må beherskes perfekt»-søyler får full kapittelkjede + drillkapittel, «må kunne»-
temaer kompaktere dekning, «bør kjenne»-stoff kortest.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og formelark-strategi | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer sjanger-katalogen A–S og formelark-prinsippet. |
| 1 | Komplekse tall og funksjoner (repetisjon) | 1 | Ikke egen eksamensoppgave, men *forutsetning* for kompleks delbrøk (Laplace), kompleks Fourier-rekke, DFT (enhetsrøtter) og komplekse egenverdier. Kort — «bør kjenne». |
| 2 | Laplace-transform | 5 | **100 %**, nesten alltid O1–O2 → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. Delbrøk + kvadratkomplettering + begge forskyvningsteoremene + konvolusjon. |
| 3 | Fourier-rekker | 4 | **100 %** → nivå 1 «perfekt» → 3 teorikapitler + drillkapittel. Symmetri, halvintervall-utvidelse, midling i diskontinuiteter, kompleks form. |
| 4 | Fourier-transform og DFT | 3 | Fourier-transform 77 % (utregning + løse PDE på $\mathbb{R}$); DFT 15 % men fast i de to siste kontinuasjonssettene → dekkes grundig som ny primærsjanger. |
| 5 | Partielle differensiallikninger: separasjon, varme, bølge, d'Alembert | 5 | Separasjon 92 % (stapleoppgave 14–20 poeng) → nivå 1 «perfekt» → drillkapittel; bølge/d'Alembert/verifiser-PDE 77 % = **4D-signaturen** → eget kapittel. |
| 6 | Numerisk analyse I: interpolasjon, integrasjon, rotsøking | 4 | Numerisk integrasjon 62 %, interpolasjon 54 %, fikspunkt 46 %, Newton/biseksjon 31 %/15 %. Gauss–Legendre (ny) inn i integrasjonskapitlet. |
| 7 | Numeriske metoder for ODE | 5 | ODE-løser generelt 92 % → nivå 1; Butcher+orden 38 %; innfelt RK-par 23 % (ny, obligatorisk fra 2022); stabilitet 23 % → drillkapittel. |
| 8 | Differansemetoder for PDE og randverdiproblemer | 4 | **85 %** → nivå 1. Eksplisitt + Crank–Nicolson, stabilitet $r\le\tfrac12$, falsk rand, avkuttingsfeil via Taylor, kodefeil-lokalisering. |
| 9 | Eksamenstrening | 4 | Formelark-verksted (bygg ditt A5-ark + sjanger-oppslagsdrill) + 3 komplette øvingseksamener (6–10 oppgaver) med A-løsningsforslag. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og formelark-strategi |
| 1 | Komplekse tall og funksjoner (repetisjon) |
| 2 | Laplace-transform |
| 3 | Fourier-rekker |
| 4 | Fourier-transform og DFT |
| 5 | Partielle differensiallikninger |
| 6 | Numerisk analyse I: interpolasjon, integrasjon, rotsøking |
| 7 | Numeriske metoder for ODE |
| 8 | Differansemetoder for PDE og randverdiproblemer |
| 9 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **36 kapitler** — over DNA-rammen (20–35), på linje med tma4245 (35).
   Begrunnelse: emnet har **fire garanterte søyler** som hver krever full
   kapittelkjede, **pluss** den bredeste numerikk-blokken i hele arkivet (interpolasjon,
   integrasjon, rotsøking, ODE-løsere og differansemetoder — 3–4 sjangre per sett).
   Ingen del kan kuttes uten å miste en dokumentert sjanger.
2. **Numerikk er delt på tre deler (6, 7, 8)** i stedet for én — DNA sier én del
   per hovedtema, men numerikk-blokken er for stor og faglig heterogen for én del;
   splitten følger naturlige undertema (interpolasjon/integrasjon/rotsøking vs.
   ODE-løsere vs. differansemetoder for PDE) og gir hver sitt drill-/prøvenivå.
3. **Fire drillkapitler (2.5, 3.4, 5.5, 7.5)** ligger inne i temadelene sine i
   stedet for i siste del — sjangrene er 92–100 %-gjengangere (Laplace-ODE,
   Fourier-rekke, separasjon av variable, numerisk ODE) som må drilles umiddelbart
   etter teorien (samme grep som ECON1310/TMA4245). Del 9 beholder formelark-
   verkstedet og øvingseksamenene.
4. **Del 1 (komplekse tall) er en ren repetisjonsdel** på ett kapittel og får
   **2 prøver** i stedet for 4 (den er forutsetning, ikke egen eksamenssjanger) —
   dokumentert i §4.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–S)** refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
A Laplace ODE/IVP · B Laplace integro-diff./konvolusjon · C Laplace Heaviside/Dirac ·
D Fourier-rekker · E Fourier-transform (utregning) · F Fourier-transform for PDE på $\mathbb{R}$ ·
G separasjon av variable · H bølge/d'Alembert/verifiser-PDE (4D-signatur) ·
I interpolasjon (Lagrange/Newton) · J numerisk integrasjon + presisjonsgrad ·
K fikspunktiterasjon/kontraksjon · L rotsøking (Newton/biseksjon/sekant) ·
M ODE-løsere (Euler/Heun/RK) · N innfelt RK-par + steglengdekontroll ·
O stabilitetsfunksjon $R(z)$ · P differansemetode for PDE/RVP ·
Q avkuttingsfeil via Taylor + avrundings-/avkuttingsavveining · R DFT ·
S lineæralgebra-numerikk (LU/Doolittle, Jacobi/Gauss–Seidel — utdøende beredskap).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (alle symboler
og formler i delkapitlet, per delkapittel — ikke arvet), `text` **Motivasjon**,
`definition`/`theorem` i emnets notasjon **med formelark-markering**, `text`
**Utledning med intuisjon** (kun for det som skal kunne *utledes*), 2–4 `example`
(siste på eksamensnivå, løst som A-besvarelse), `warning` **Typiske feil**,
6–12 `exercise` (stigende, `solution` + `hints`), `collapsible` **Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart og formelark-strategi

#### Kapittel 0.1: Slik testes TMA4135 — de fire søylene og formelarket

- **id:** `tma4135-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fire garanterte søylene, temafrekvensene, sjanger-katalogen A–S og formelark-strategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 13 velkarakteriserte sett. Skal gjengi: (i) **formen** (4-timers skriftlig skoleeksamen 09–13, kode C, A–F, 6–10 oppgaver, **ingen flervalg**, alle svar begrunnes); (ii) formathistorikken kort (ren 4D 2015–2017 med Rottmann; **felles 4N/4D fra 2018** med gult A5-ark + vedlagt formelark; poengvekting sum 100 og prosentbasert karakterskala fra 2018/2023); (iii) **temafrekvens-tabellen** (Laplace 100 %, Fourier-rekker 100 %, separasjon 92 %, numerisk ODE-løser 92 %, differansemetode PDE 85 %, Fourier-transform 77 %, bølge/d'Alembert/verifiser-PDE 77 %, numerisk integrasjon 62 %, interpolasjon 54 %, fikspunkt 46 %, Butcher+orden 38 %, Newton 31 %, innfelt RK-par 23 %, stabilitet 23 %, biseksjon 15 %, DFT 15 %, Jacobi/Gauss–Seidel 15 %, gradient 15 %, LU 8 %, sekant 8 %); (iv) **4N/4D-splitten**: fra 2018 er eksamen felles med TMA4130 (4N); kun 1 oppgave per sett har egne varianter, og de **4D-spesifikke** er nesten alltid **verifikasjon av at en funksjon løser en PDE** eller et **gradient-/retningsderivert-innslag** — boka dekker alle fellestemaene + disse; (v) **nye sjangre 2022–2024** (innfelt RK-par med steglengdekontroll, DFT, Gauss–Legendre) som primærmål med tynt arkivbelegg (merk usikkerheten); (vi) **utdøende sjangre** (LU/Doolittle, Jacobi/Gauss–Seidel, sekant) som står på formelarket → beredskap/kjenne.
- **Innholdskontrakt:** Presenter **sjanger-katalogen A–S** som studentens sjekkliste med typisk plassering: A/B/C Laplace (O1–O2), D Fourier-rekke (O3), E/F Fourier-transform, G separasjon (14–20 poeng, tyngst enkeltoppgave), H 4D-verifikasjon, I–S numerikk-blokken (O6–O10, 3–4 per sett). Presenter **formelark-prinsippet** (fra §1) med den konkrete lista over hva som *står på arket* vs. *må kunnes/utledes* — dette er kapitlets kjerne og gjentas som markør i hvert senere kapittel. **Sensorens fem metaregler:** begrunn alt; bær teorem-/metodenavn; vis flere metoder der de finnes; delpunkt-gjenbruk er designet inn («bruk formelen fra b) i c)»); feilforplantning tolereres. **Karakterskillene:** bestått ≈ mekaniske delpunkt (transformer ODE-en, sett opp koeffisientintegralet, sett $u=FG$, ett Euler-skritt); midtsjikt ≈ delbrøk + kvadratkomplettering, alle tre $k$-tilfellene, presisjonsgrad, a-priori-estimat; toppsjikt ≈ **begge** fikspunktvilkårene, rad-for-rad ordensverifikasjon, korrekt rand-/stabilitetsbehandling, delpunkt-koblinger, andreforskyvning riktig brukt. **Prognose for neste sett** (fra analysen §7): O1–O2 Laplace, O3 Fourier-rekke (evt. DFT), O4–O5 separasjon + (Fourier-transform-PDE eller d'Alembert/verifiser), O6–O10 numerikk-blokk.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og et sett med søylene Laplace/Fourier/separasjon + 4 numeriske deloppgaver — sett opp et tidsbudsjett» og «avgjør for hvert av disse uttrykkene om det står på formelarket eller må utledes».
- **Typiske feil:** Tidsfella — bruke for lang tid på den tunge separasjon-/differanseoppgaven og miste de dyre sluttoppgavene; å lete etter en formel på arket som må utledes (og omvendt pugge noe som står der).
- **Quiz: 12 · Flashcards: 14** (form, frekvenser, sjanger-katalog A–S, formelark-innhold, metaregler)

---

### Del 1 — Komplekse tall og funksjoner (repetisjon)

#### Kapittel 1.1: Komplekse tall, Eulers formel og enhetsrøtter

- **id:** `tma4135-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Kort repetisjon av det komplekse apparatet boka trenger: polar form, Eulers formel, komplekse røtter og delbrøk med komplekse poler.
- **Eksamensbelegg:** Ikke egen eksamensoppgave, men **forutsetning** i flere søyler: kompleks delbrøk / komplekse røtter $a\pm bi$ i invers Laplace (H2022 O2 viser reell **og** kompleks delbrøk), kompleks Fourier-rekke $\sum c_n e^{inx}$ (H2018–H2020), enhetsrøtter $w=e^{2\pi i/N}$ i DFT (Kont2023/2024), og komplekse egenverdier i stabilitet. Prioritet: **kjenne** (fundament — kortest mulig).
- **Innholdskontrakt:** Alt kun til *bruk*, ingen dype utledninger. Kartesisk vs. polar form $z=re^{i\theta}=r(\cos\theta+i\sin\theta)$; **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$ og følgene $\cos\theta=\tfrac12(e^{i\theta}+e^{-i\theta})$, $\sin\theta=\tfrac{1}{2i}(e^{i\theta}-e^{-i\theta})$ (nøkkelen til å oversette mellom reell og kompleks Fourier-form); modulus/argument, konjugat $\bar z$, $|z|^2=z\bar z$; komplekse røtter og **de $N$ enhetsrøttene** $w^k=e^{2\pi ik/N}$ (bildet av DFT); kort om komplekse partialbrøk med konjugerte polpar $\tfrac{A}{s-(a+bi)}+\tfrac{\bar A}{s-(a-bi)}$ som gir reelle $e^{at}\cos/\sin$-ledd. Marker at kvadratsetning/faktorisering for andregradsnevnere **ikke** står på formelarket (må kunnes), mens trig-identitetene gjør det.
- **Oppgavesjangre:** Støttesjanger til A/D/R. Mønstereksempel: «Skriv $\sqrt{3}+i$ på polar form og finn alle tredjerøtter; skriv deretter $\cos 2x$ ved hjelp av komplekse eksponentialer.»
- **Typiske feil:** Feil kvadrant for argumentet; glemme at et konjugert polpar gir ett reelt ledd (ikke to komplekse i sluttsvaret); rote med fortegn i $\tfrac{1}{2i}$-formelen for $\sin$.
- **Quiz: 14 · Flashcards: 18**

---

### Del 2 — Laplace-transform  *(prioritet: PERFEKT)*

#### Kapittel 2.1: Laplace-transformen, derivasjonsregelen og ODE/IVP

- **id:** `tma4135-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-1-1 · **kapitteltype:** teori
- **description:** Grunnmekanikken i Laplace-metoden: transformer likningen, sett inn initialbetingelsene, løs algebraisk for $Y(s)$, invers-transformer.
- **Eksamensbelegg:** Sjanger A i **13/13 sett (100 %)**, nesten alltid O1. Omskrevet mønster (Kont2023): «Løs $y'''-y'=1$ med $y(0)=y'(0)=0,\ y''(0)=1$.» Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES/ANVENDES AKTIVT. Definisjonen $F(s)=\mathcal{L}\{f\}=\int_0^\infty e^{-st}f(t)\,dt$ (nevnes; utregnes ikke fra bunn på eksamen — tabellen brukes); **derivasjonsregelen** $\mathcal{L}\{y'\}=sY-y(0)$, $\mathcal{L}\{y''\}=s^2Y-sy(0)-y'(0)$ (MÅ kunnes — den er selve motoren); linearitet; **førsteforskyvningsteoremet** $\mathcal{L}\{e^{at}f(t)\}=F(s-a)$. **Formelark-markering:** transformparene ($\cos\omega t$, $\sin\omega t$, $\cosh$, $\sinh$, $t^n\leftrightarrow n!/s^{n+1}$, $e^{at}\leftrightarrow 1/(s-a)$) *står på arket — tren oppslaget*; derivasjonsregelen og selve løsningsalgoritmen *må kunnes*. Løsningsalgoritmen i fire steg (transformer → sett inn IB → løs for $Y(s)$ → invers via tabell) presenteres her og gjenbrukes i 2.2–2.4.
- **Oppgavesjangre:** A. Mønstereksempel: «Bruk Laplace-transform til å løse $y''+4y=e^{-t}$ med $y(0)=0,\ y'(0)=1$; oppgi svaret som eksakt uttrykk.»
- **Typiske feil:** Glemme et ledd i $\mathcal{L}\{y''\}$ (særlig $-sy(0)$); sette inn initialbetingelsene for sent/feil; blande $\mathcal{L}\{y'\}$ med produktregelen.
- **Quiz: 22 · Flashcards: 24** (transformpar er flashcard-gull — rask gjenkjenning selv med formelark)

#### Kapittel 2.2: Invers Laplace — delbrøk og kvadratkomplettering

- **id:** `tma4135-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-2-1 · **kapitteltype:** teori
- **description:** De to teknikkene for å bringe $Y(s)$ på tabellform: delbrøkoppspalting og kvadratkomplettering — begge honoreres, boka viser begge.
- **Eksamensbelegg:** Fast del av 100 %-Laplace-blokken. Fasiten viser **flere metoder eksplisitt** (H2022 O2: reell delbrøk, kompleks delbrøk *og* kvadratkomplettering — kaller kvadratkomplettering «den raskeste»). Delbrøk-koeffisienter finnes ved **cover-up / innsetting av spesielle $s$** eller ved å **løse et lineært system** — begge godtatt (H2022 O1). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Delbrøkoppspalting**: enkle poler, multiple poler, irredusible andregradsnevnere; koeffisienter via cover-up **og** via lineært system (vis begge, si at de gir samme svar). **Kvadratkomplettering** for å treffe tabellformen $\dfrac{\omega}{(s-a)^2+\omega^2}\leftrightarrow e^{at}\sin\omega t$ og $\dfrac{s-a}{(s-a)^2+\omega^2}\leftrightarrow e^{at}\cos\omega t$ (kobling til førsteforskyvning fra 2.1). **Reell vs. kompleks delbrøk** (kobling 1.1) — begge veier vises. **Formelark-markering:** måltabellformene *står på arket*; selve delbrøk-/kvadratkompletterings-manøvren *må kunnes* (står ikke der).
- **Oppgavesjangre:** A (invers-delen). Mønstereksempel: «Finn den inverse Laplace-transformen av $\dfrac{s+3}{s^2+4s+13}$ ved kvadratkomplettering, og vis at reell delbrøk gir samme svar.»
- **Typiske feil (analysen §5.5):** Feil fortegn/plassering i delbrøken; glemme kvadratkomplettering slik at en irredusibel nevner ikke treffer tabellformen; feil $\omega$ etter kvadratkomplettering.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.3: Forskyvningsteoremene, Heaviside og Dirac

- **id:** `tma4135-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-2-2 · **kapitteltype:** teori
- **description:** Stykkevis og impulsdrevet last: andreforskyvningsteoremet for trappefunksjoner og Dirac-delta — «finn $f$ først, forskyv sist».
- **Eksamensbelegg:** Heaviside/Dirac (sjanger C) i flere sett (H2020, Kont2020, H2022, Kont2019, Kont2015). Toppsjikt-markør: korrekt **andreforskyvningsteorem** (finn $f$ først). Omskrevet mønster (H2020): stykkevis konstant last skrevet som sum av trappeledd før transform. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Andreforskyvningsteoremet** $\mathcal{L}\{f(t-a)u(t-a)\}=e^{-as}F(s)$ — og den omvendte veien som er kilden til feil: for å invers-transformere $e^{-as}F(s)$, **finn $f(t)$ av $F(s)$ først, deretter skriv $y(t)=u(t-a)f(t-a)$**. Heaviside/trappefunksjon $u(t-a)$; skriv en stykkevis konstant/lineær $f$ som sum av trappeledd (f.eks. $f=1+(c-1)u(t-1)$) **før** transform. **Dirac-delta** $\mathcal{L}\{\delta(t-a)\}=e^{-as}$ og impulsrespons. **Formelark-markering:** $f(t-a)u(t-a)\leftrightarrow e^{-as}F(s)$ og $\delta(t-a)\leftrightarrow e^{-as}$ *står på arket*; oppdelingen i trappeledd og «finn $f$ først»-rekkefølgen *må kunnes*.
- **Oppgavesjangre:** C. Mønstereksempel: «En kraft slås på ved $t=2$: løs $y''+y=u(t-2)$, $y(0)=y'(0)=0$, ved Laplace — finn først den inverse av $F(s)=1/(s(s^2+1))$ og forskyv.»
- **Typiske feil (analysen §5.2):** Bruke *første* i stedet for *andre* forskyvningsteorem; glemme å skrive $y=u(t-a)f(t-a)$ etter å ha funnet $f$; feil oppdeling av den stykkevise funksjonen i trappeledd.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.4: Konvolusjon og integro-differensiallikninger

- **id:** `tma4135-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-2-3 · **kapitteltype:** teori
- **description:** Konvolusjonsteoremet og hvordan det knekker likninger med et integralledd $\int_0^t g(\tau)y(t-\tau)\,d\tau$.
- **Eksamensbelegg:** Integro-differensiallikning/konvolusjon (sjanger B) i ~7/13 sett — fast Laplace-variant. Omskrevet mønster (H2022): «Løs $y'(t)+5\int_0^t e^{2\tau}y(t-\tau)\,d\tau=e^{2t}$, $y(0)=0$.» Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Konvolusjonen** $(g*y)(t)=\int_0^t g(\tau)y(t-\tau)\,d\tau$ og **konvolusjonsteoremet** $\mathcal{L}\{g*y\}=G(s)\,Y(s)$; gjenkjenn integralleddet som en konvolusjon, transformer til produkt, løs algebraisk for $Y(s)$, faktoriser nevneren, delbrøk (kobling 2.2), invers. Kort om invers via konvolusjon når $Y=F\cdot G$ ikke står på tabellen. **Formelark-markering:** konvolusjonsteoremet nevnes ofte *ikke* eksplisitt på arket → *må kunnes og navngis*; delbrøk-/tabelldelen som følger *står på arket*.
- **Oppgavesjangre:** B. Mønstereksempel: «Løs $y(t)=t+\int_0^t \sin(t-\tau)\,y(\tau)\,d\tau$ ved å gjenkjenne konvolusjonen og bruke konvolusjonsteoremet.»
- **Typiske feil:** Ikke se konvolusjonsstrukturen (prøve å derivere seg ut i stedet); feil argument-rekkefølge i $g(\tau)y(t-\tau)$; glemme å navngi konvolusjonsteoremet (sensorkrav).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.5: Drill — Laplace-sjangeren fra ende til annen

- **id:** `tma4135-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** tma4135-2-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele A/B/C-komplekset: fra oppgitt likning til ferdig $y(t)$ i A-besvarelsesform, med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjangrene A (100 %), B (~54 %) og C — Laplace-blokken som åpner nesten hvert sett (O1–O2). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) klassifiser (ren ODE / integro-diff / Heaviside-Dirac); 2) transformer og bruk derivasjonsregelen med IB; 3) ved konvolusjon: konvolusjonsteoremet; ved trappelast: skriv $f$ som trappeledd; 4) løs for $Y(s)$; 5) invers via delbrøk **og/eller** kvadratkomplettering (velg raskeste, nevn alternativet); 6) ved Heaviside: finn $f$ først, forskyv sist; 7) oppgi eksakt svar. **Gjennomregnet eksamenscase** med margnotater om hva som gir uttelling ved hvert steg (transformoppslag markeres «fra tabellen …»). 10–15 varianter som roterer hele Laplace-katalogen (ren IVP, integro-diff, Heaviside-trappe, Dirac-impuls, kompleks vs. reell delbrøk), alle på eksamensnivå.
- **Oppgavesjangre:** A, B, C. Mønstereksempel (kjedet à la reelle sett): «(a) Finn $\mathcal{L}^{-1}\{1/((s-1)(s^2+4))\}$. (b) Bruk resultatet fra (a) til å løse $y''+4y=e^{t}$, $y(0)=y'(0)=0$. (c) Slå på en enhetsimpuls ved $t=\pi$ og finn den nye løsningen.»
- **Typiske feil:** Hele §5-repertoaret for Laplace samlet: feil forskyvningsteorem (§5.2), feil delbrøk/manglende kvadratkomplettering (§5.5), ubegrunnet transformoppslag, glemt teoremnavn.
- **Quiz: 14 · Flashcards: 10**

---

### Del 3 — Fourier-rekker  *(prioritet: PERFEKT)*

#### Kapittel 3.1: Fourier-rekker — koeffisienter og symmetriutnyttelse

- **id:** `tma4135-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-1-1 · **kapitteltype:** teori
- **description:** Den reelle Fourier-rekka, koeffisientintegralene og hvordan symmetri halverer arbeidet før man regner.
- **Eksamensbelegg:** Del av 100 %-Fourier-blokken. Fast triks: utnytt symmetri **før** integrasjon (odde → ren sinus, like → ren cosinus). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Fourier-rekka $f(x)=a_0+\sum_{n\ge1}\big(a_n\cos\tfrac{n\pi x}{L}+b_n\sin\tfrac{n\pi x}{L}\big)$ med $a_0=\tfrac1{2L}\int_{-L}^{L}f$, $a_n=\tfrac1L\int_{-L}^{L}f\cos\tfrac{n\pi x}{L}$, $b_n=\tfrac1L\int_{-L}^{L}f\sin\tfrac{n\pi x}{L}$; **symmetriregler** (odde $\Rightarrow a_n=0$, like $\Rightarrow b_n=0$); **delvis integrasjon** for $x\cos$-, $x\sin$- og $x^2\sin$-ledd — nesten alle Fourier-koeffisienter krever den. **Formelark-markering:** **reduksjonsformlene** for $\int x^n\cos ax\,dx$ / $\int x^n\sin ax\,dx$ og trig-identitetene *står på arket* (tren oppslaget); koeffisientintegralene og symmetriargumentet *må kunnes*.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn Fourier-rekka til $f(x)=x^2$ på $[-\pi,\pi]$, og bruk symmetri til å begrunne hvorfor $b_n=0$.»
- **Typiske feil:** Regne alle koeffisientene uten å utnytte symmetri (tidssluk og feilkilde); fortegnsfeil i delvis integrasjon; feil $L$/periodefaktor i argumentet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Halvintervall-utvidelser, konvergens og midling

- **id:** `tma4135-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-3-1 · **kapitteltype:** teori
- **description:** Utvide en funksjon på $[0,L]$ til en odde eller like periodisk funksjon, skissere over flere perioder, og vite hva rekka konvergerer mot i sprang.
- **Eksamensbelegg:** Fourier-blokk (100 %). Oppgaven ber ofte om å **utvide** $f$ på $[0,L]$ til odde/like og **skissere** grafen over flere perioder (H2022: «Utvid $f(x)=2+x$ på $[0,1]$ til odde $g$ med periode 2, skissér på $[-3,3]$»). Konvergens til $\tfrac12(f(x^+)+f(x^-))$ i diskontinuiteter. Innsetting av konkret $x$ for å summere en tallrekke (H2017: $\sum 1/(2n+1)^2=\pi^2/8$). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Odde og like halvintervall-utvidelse (ren sinus- hhv. cosinusrekke); **skisse** av den periodiske utvidelsen over flere perioder (beskriv figuren slik sensor forventer den: periodisitet, sprang, verdi i endepunktene); **konvergensteoremet** — i et sprang konvergerer rekka til gjennomsnittet $\tfrac12(f(x^+)+f(x^-))$; sette inn en spesiell $x$ for å utlede en tallrekkesum. **Formelark-markering:** ingen ny formel fra arket her; alt *må kunnes* (utvidelsesregel, midling, skissekonvensjon).
- **Oppgavesjangre:** D. Mønstereksempel: «Utvid $f(x)=x$ på $[0,1]$ til en like funksjon med periode 2, skissér den på $[-2,2]$, finn cosinusrekka og angi hva rekka gir i $x=1$.»
- **Typiske feil (analysen §5.4):** Glemme midlingen i diskontinuitetspunkt (bruke funksjonsverdien i stedet for $\tfrac12(f^++f^-)$); tegne feil paritet i skissen; forveksle odde og like utvidelse.
- **Quiz: 17 · Flashcards: 18**

#### Kapittel 3.3: Kompleks Fourier-rekke

- **id:** `tma4135-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** tma4135-3-1 · **kapitteltype:** teori
- **description:** Den komplekse formen $\sum c_n e^{inx}$, koeffisienten $c_n$ og broen til den reelle rekka via Eulers formel.
- **Eksamensbelegg:** Kompleks Fourier-rekke i H2018, H2019, H2020 — del av 100 %-blokken, og bro videre til Fourier-transform og DFT. Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. $f(x)=\sum_{n=-\infty}^{\infty} c_n e^{inx}$ med $c_n=\tfrac1{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\,dx$ (generelt $c_n=\tfrac1{2L}\int_{-L}^{L} f e^{-in\pi x/L}$); sammenhengen med de reelle koeffisientene $c_n=\tfrac12(a_n-ib_n)$, $c_{-n}=\bar c_n$ (kobling 1.1, Eulers formel); reell funksjon $\Rightarrow$ konjugert symmetri i $c_n$. **Formelark-markering:** ingen egen rad — hele apparatet *må kunnes*; trig-/Euler-oversettelsen støttes av identitetene på arket.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn den komplekse Fourier-rekka til $f(x)=e^{x}$ på $[-\pi,\pi]$ og vis hvordan $a_n,b_n$ følger av $c_n$.»
- **Typiske feil:** Fortegn i eksponenten ($e^{-inx}$ i integralet, $e^{+inx}$ i rekka); glemme $n=0$-leddet; ikke bruke konjugert symmetri til å halvere arbeidet.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.4: Drill — Fourier-rekke-sjangeren

- **id:** `tma4135-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** tma4135-3-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele D-komplekset: symmetri → utvidelse → koeffisienter → skisse → konvergens/tallrekke, i A-besvarelsesform.
- **Eksamensbelegg:** Dekker sjanger D (100 %) i alle varianter (reell sinus/cosinus, halvintervall-utvidelse, kompleks form, tallrekkesum). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) avgjør paritet/periode (og gjør evt. odde/like utvidelse); 2) sett opp koeffisientintegralene, dropp de som er null ved symmetri; 3) delvis integrasjon (bruk reduksjonsformlene fra arket); 4) skriv rekka; 5) skissér den periodiske utvidelsen over flere perioder; 6) angi konvergensverdi i spesielle punkt (midling); 7) evt. sett inn $x$ for en tallrekkesum. **Gjennomregnet eksamenscase** med margnotater. 8–15 varianter (firkantpuls, sagtann, $|x|$, $x^2$, stykkevis lineær, kompleks form), alle på eksamensnivå.
- **Oppgavesjangre:** D. Mønstereksempel: «(a) Utvid $f(x)=\pi-x$ på $[0,\pi]$ til en odde funksjon med periode $2\pi$ og skissér den. (b) Finn Fourier-rekka. (c) Bruk et passende punkt til å vise at $\sum_{n\ge1} 1/n \cdot(\dots)$ konvergerer mot en oppgitt sum.»
- **Typiske feil:** §5.4 (manglende midling) og §3.1–3.2-fellene i alle varianter; feil skisse-paritet; stoppe før tallrekke-innsettingen når den er spurt.
- **Quiz: 14 · Flashcards: 10**

---

### Del 4 — Fourier-transform og DFT

#### Kapittel 4.1: Fourier-transformen — tabell, derivasjons- og konvolusjonsregel

- **id:** `tma4135-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-3-3 · **kapitteltype:** teori
- **description:** Fourier-transformen $f̂(\omega)$, tabellen på formelarket og reglene som gjør at man sjelden integrerer fra bunn: derivasjon og konvolusjon.
- **Eksamensbelegg:** Fourier-transform (sjanger E) i 10/13 sett (77 %), både ren utregning og for å løse integrallikninger (Kont2019, H2022, Kont2024). Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + tabelloppslag. Konvensjonen fra arket $f(x)=\tfrac1{\sqrt{2\pi}}\int f̂(\omega)e^{i\omega x}\,d\omega$, $f̂(\omega)=\tfrac1{\sqrt{2\pi}}\int f(x)e^{-i\omega x}\,dx$; **derivasjonsregelen** $\widehat{f'}=i\omega\,f̂$; **konvolusjonsteoremet** $\widehat{f*g}=\sqrt{2\pi}\,f̂\,ĝ$; bruk av Gauss-paret for integrallikninger (gjenkjenn konvolusjon, transformer til produkt, løs for $f̂$, invers-transformer — ofte via $ĝ'=i\omega ĝ$). **Formelark-markering:** **transformtabellen** (Gauss $e^{-ax^2}\leftrightarrow \tfrac1{\sqrt{2a}}e^{-\omega^2/4a}$, $e^{-a|x|}$, $1/(x^2+a^2)$, boksfunksjon $1_{|x|<a}\leftrightarrow\sqrt{2/\pi}\,\sin(\omega a)/\omega$) *står på arket*; derivasjons-/konvolusjonsreglene og manøvren *må kunnes*.
- **Oppgavesjangre:** E. Mønstereksempel: «Løs integrallikningen $\int_{-\infty}^{\infty} e^{-(x-t)^2}f(t)\,dt = e^{-x^2/2}$ ved Fourier-transform.»
- **Typiske feil:** Feil $\sqrt{2\pi}$-faktor (konvensjonsavhengig — vær konsistent); bruke feil rad i tabellen (blande $e^{-ax^2}$ og $e^{-a|x|}$); glemme konvolusjonsteoremets $\sqrt{2\pi}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: Fourier-transform for PDE på hele $\mathbb{R}$

- **id:** `tma4135-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-4-1 · **kapitteltype:** teori
- **description:** Transformer PDE-en i $x$, løs ODE-en i $t$, bestem konstanten fra initialdata og invers-transformer — varmekjerne-metoden.
- **Eksamensbelegg:** Sjanger F i Kont2019 O4, H2022 O5, Kont2024 O7 (~23 %, men fast innslag i den ene «Fourier-transform»-oppgaven). Omskrevet mønster (H2022): «Bruk Fourier-transform til å løse $u_t=u_x+u$, $x\in\mathbb{R},t>0$, med $u(x,0)=\sin x/x$.» Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Fourier-transformer PDE-en i $x$ (bruk $\widehat{u_x}=i\omega û$, $\widehat{u_{xx}}=-\omega^2 û$); dette gir en **ODE i $t$** for $û(\omega,t)$; løs den ($û(\omega,t)=C(\omega)e^{\dots}$), bestem $C(\omega)=û(\omega,0)$ fra initialbetingelsen, invers-transformer (svaret ofte en Gauss-/varmekjerne-**konvolusjon**). **Formelark-markering:** transformparene og reglene *står på arket / fra 4.1*; oversettelsen PDE→ODE og tilbaketransformasjonen *må kunnes*.
- **Oppgavesjangre:** F. Mønstereksempel: «Løs varmelikningen $u_t=u_{xx}$ på $\mathbb{R}$ med $u(x,0)=e^{-x^2}$ ved Fourier-transform, og uttrykk svaret ved varmekjernen.»
- **Typiske feil:** Feil fortegn på $-\omega^2$ for $u_{xx}$; behandle $t$-ODE-en som om $\omega$ varierer (den er konstant der); glemme å sette inn initialdata for $C(\omega)$.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 4.3: Diskret Fourier-transform (DFT)

- **id:** `tma4135-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-4-1 · **kapitteltype:** teori
- **description:** Den nye sjangeren fra kontinuasjonssettene: DFT med enhetsrøtter, aliasing og skifteegenskapen.
- **Eksamensbelegg:** Sjanger R — **ny fra 2022** (Kont2023 O3+O8-bevis, Kont2024 O8), 2/13 (15 %) men **fast i de to siste kontinuasjonssettene** → dekk grundig som ny primærsjanger. **Merk (usikkerhet):** tynt arkivbelegg, konsentrert i kont-sett — verifiser vekten mot første framtidige ordinære 4D-sett. Prioritet: **kunne** (ny primærsjanger).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. DFT $\hat c = F_N f$ med $c_k=\tfrac1N\sum_{j=0}^{N-1} f_j w^{-jk}$, $w=e^{2\pi i/N}$ (kobling til enhetsrøtter 1.1); les av koeffisientene for et **båndbegrenset signal** (aliasing-lemmaet); avgjør om et invers-DFT-signal er **reelt** (konjugert symmetri); **skifteegenskapen** $\tilde c_j=w^j c_j$ for syklisk skift (bevis). **Normeringsmerknad:** fasiten godtar flere konvensjoner ($1/N$ foran DFT vs. IDFT vs. unitær $1/\sqrt N$) så lenge de er **konsistente** — boka velger én og markerer at andre er tillatt. **Formelark-markering:** DFT står vanligvis *ikke* på arket → alt *må kunnes*.
- **Oppgavesjangre:** R. Mønstereksempel: «Gitt datavektoren $f=(1,0,-1,0)$, regn ut DFT-en $\hat c$ og avgjør om det inverse signalet er reelt; vis så at et syklisk skift av $f$ svarer til $\tilde c_j=w^j c_j$.»
- **Typiske feil (analysen §5.11):** Feil $1/N$-faktor (fysisk vs. unitær konvensjon) — eller inkonsistent bruk mellom DFT og IDFT; feil fortegn i $w^{-jk}$; glemme aliasing ved for få punkter.
- **Quiz: 14 · Flashcards: 16**

---

### Del 5 — Partielle differensiallikninger  *(prioritet: PERFEKT)*

#### Kapittel 5.1: Separasjon av variable — varmelikningen og de tre $k$-tilfellene

- **id:** `tma4135-5-1` · **number:** 5.1 · **estimatedMinutes:** 70 · **prerequisites:** tma4135-3-1 · **kapitteltype:** teori
- **description:** Emnets tyngste enkeltoppgave: sett $u=F(x)G(t)$, del i to ODE-er, og behandl **alle tre** tilfellene $k>0$, $k=0$, $k<0$ for å finne egenverdiene.
- **Eksamensbelegg:** Sjanger G i 12/13 sett (92 %), ofte 14–20 poeng — den tyngste enkeltoppgaven. Offisiell fasit finnes for flere sett. Toppsjikt-markør: **eksplisitt behandling av alle tre $k$-tilfellene**. Omskrevet mønster (H2022): «Finn alle ikke-trivielle løsninger $u(x,t)=F(x)G(t)$ av $u_t=4u_{xx}$, $-1<x<1$, $u(-1,t)=u(1,t)=0$.» Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT, steg for steg. Ansatsen $u(x,t)=F(x)G(t)$; innsetting og separasjon i to ODE-er med **felles konstant $k$** ($F''/F=G'/(c^2G)=-k$ eller tilsvarende, med tydelig fortegnskonvensjon); **behandle alle tre tilfellene**: $k>0$, $k=0$, $k<0$ — vis at bare ett gir ikke-trivielle løsninger som oppfyller randbetingelsene, og at de andre bare gir triviell løsning; egenverdiene $k_n$ og egenfunksjonene $F_n(x)$ følger av randbetingelsene (Dirichlet $u=0$ → sinus; **Neumann $u_x=0$ → cosinus**, Kont2023). **Formelark-markering:** ingen snarvei på arket — hele separasjonsprosessen og $k$-analysen *må kunnes*.
- **Oppgavesjangre:** G (oppsettsdelen). Mønstereksempel: «Bruk separasjon av variable på $u_t=u_{xx}$, $0<x<\pi$, $u(0,t)=u(\pi,t)=0$, og finn egenverdiene og egenfunksjonene ved å behandle alle tre tilfellene for separasjonskonstanten.»
- **Typiske feil (analysen §5.3):** Hoppe over ett $k$-tilfelle (særlig vise at $k>0$ og $k=0$ bare gir triviell løsning); feil fortegnskonvensjon på $k$; blande sinus- og cosinus-egenfunksjoner (Dirichlet vs. Neumann).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.2: Superposisjon, Fourier-matching og ikke-homogene problemer

- **id:** `tma4135-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-5-1 · **kapitteltype:** teori
- **description:** Superponer egenløsningene, match initialbetingelsen ved å lese av Fourier-koeffisienter, og reduser ikke-homogene problemer via en stasjonær løsning.
- **Eksamensbelegg:** Andre halvdel av separasjon-oppgaven (sjanger G, 92 %). Fourier-matching er ofte triviell når initialdata alt er en sinus-/cosinus-sum (f.eks. $\sin 2x+\sin 4x$). Ikke-homogen reduksjon (H2020 O5); grensen $t\to\infty$ plukker ut stasjonær komponent. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Superposisjon** $u(x,t)=\sum_n B_n F_n(x)G_n(t)$; **Fourier-matching** — bestem $B_n$ ved å utvikle initialbetingelsen $u(x,0)$ i egenfunksjonene (les av direkte når initialdata er en endelig sinus-/cosinus-sum; ellers koeffisientintegral fra Del 3); **ikke-homogen varmelikning** $u_t=c^2u_{xx}+\alpha$: finn stasjonær partikulærløsning $w(x)$, sett $v=u-w$, løs $v$ homogent (kobling 5.1); **langtidsoppførsel** $t\to\infty$: de eksponentielt dempede leddene dør ut, stasjonærkomponenten står igjen. **Formelark-markering:** Fourier-koeffisientintegralene *finnes via Del 3 / delvis avledet fra arkets reduksjonsformler*; superposisjons- og reduksjonsgrepet *må kunnes*.
- **Oppgavesjangre:** G (matching-delen). Mønstereksempel: «Løs $u_t=u_{xx}$, $0<x<\pi$, $u(0,t)=u(\pi,t)=0$, $u(x,0)=3\sin x-\sin 4x$, og bestem hva løsningen nærmer seg når $t\to\infty$.»
- **Typiske feil:** Regne et koeffisientintegral der initialdata alt er en egenfunksjonssum (bortkastet tid); glemme reduksjonen $v=u-w$ ved ikke-homogenitet; feil egenfunksjonsbasis ved Neumann-rand.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.3: Bølgeligningen og d'Alemberts formel

- **id:** `tma4135-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-5-1 · **kapitteltype:** teori
- **description:** Bølgeligningen på $\mathbb{R}$: d'Alemberts formel for initialverdiproblemet og variabelskiftet som gjør bølgeligningen til $u_{yz}=0$.
- **Eksamensbelegg:** Del av bølge/d'Alembert-blokken (sjanger H, 77 %). d'Alembert i Kont2015, H2019 (4N), Kont2024; variabelskifte $y=x+t,z=x-t\Rightarrow u_{yz}=0$ (Kont2020, 4D). Prioritet: **kunne** (grensende til perfekt — 4D-relevant).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **d'Alemberts formel** $u(x,t)=\tfrac12\big(f(x+ct)+f(x-ct)\big)+\tfrac1{2c}\int_{x-ct}^{x+ct} g(s)\,ds$ for $u_{tt}=c^2u_{xx}$ med $u(x,0)=f$, $u_t(x,0)=g$; tolkning (to bølger med fart $c$ i hver retning); **variabelskiftet** $y=x+t$, $z=x-t$ som gir $u_{yz}=0$ og dermed generell løsning $u=\phi(x+ct)+\psi(x-ct)$. **Formelark-markering:** d'Alemberts formel står *ikke alltid* på arket → *må kunnes og navngis*.
- **Oppgavesjangre:** H (d'Alembert-delen). Mønstereksempel: «Bruk d'Alemberts formel til å løse $u_{tt}=4u_{xx}$ med $u(x,0)=e^{-x^2}$, $u_t(x,0)=0$, og beskriv løsningen som to bølger.»
- **Typiske feil:** Feil bølgefart $c$ i argumentene ($x\pm ct$, ikke $x\pm t$); glemme $\tfrac1{2c}$-faktoren foran integralet; feil integrasjonsgrenser $x\pm ct$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: Verifiser at en funksjon løser en PDE + klassifisering (4D-signaturen)

- **id:** `tma4135-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-5-3 · **kapitteltype:** teori
- **description:** Den faste 4D-spesifikke oppgaven: regn $u_{xx}$, $u_{tt}$/$u_t$ ved direkte innsetting og vis likhet — pluss klassifisering lineær/ikke-lineær og et gradient-innslag.
- **Eksamensbelegg:** **4D-signaturen** etter 2018 (den 4D-spesifikke splitt-oppgaven), sjanger H i 10/13 sett (77 %). Verifikasjon ved innsetting: H2018 (varmekjerne), H2019 ($(x-t)^3+\sin(x+t)$ løser bølgeligningen), H2020 (sum av bølgeledd), H2022 (klassifiser + verifiser); klassifisering lineær/ikke-lineær (H2022); **gradient/retningsderivert** (Kont2019 O2c, H2016 O5) som sporadisk 4D-innslag. Prioritet: **kunne** (4D-signatur — må sitte for 4D-kandidater; gradient: **kjenne**).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Verifikasjon ved direkte innsetting**: gitt $u(x,t)$, regn de partielle deriverte ($u_x,u_{xx},u_t,u_{tt}$) og vis at PDE-en er oppfylt (bølge $u_{tt}=c^2u_{xx}$ eller varme $u_t=c^2u_{xx}$); sjekk også initial-/randbetingelser hvis oppgitt. **Klassifisering** lineær/ikke-lineær (og orden) — kjennetegn: lineær = ingen produkter/potenser av $u$ og dens deriverte. Kort **gradient-/retningsderivert-innslag** (nivå 3, kjenne): $\nabla f$, retningsderivert $D_{\mathbf v}f=\nabla f\cdot\hat{\mathbf v}$, nivåkurver — som selvstendig 4D-deloppgave. **Formelark-markering:** ren derivasjon → ingenting fra arket; alt *må kunnes*.
- **Oppgavesjangre:** H (verifikasjonsdelen). Mønstereksempel: «Vis ved innsetting at $u(x,t)=(x-2t)^3+\cos(x+2t)$ løser $u_{tt}=4u_{xx}$, og avgjør om likningen er lineær.»
- **Typiske feil:** Regnefeil i kjerneregelen for de sammensatte argumentene $x\pm ct$; forveksle $u_t$ og $u_{tt}$ (varme vs. bølge); kalle en likning ikke-lineær pga. et ikke-lineært *inhomogenitetsledd* i $x,t$ alene.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 5.5: Drill — separasjon av variable fra ende til annen

- **id:** `tma4135-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** tma4135-5-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele G-komplekset (den 14–20-poengs stapleoppgaven): oppsett → tre $k$-tilfeller → egenverdier → superposisjon → Fourier-matching, som A-besvarelse.
- **Eksamensbelegg:** Dekker sjanger G (92 %, tyngste enkeltoppgave) i alle varianter (Dirichlet/Neumann-rand, homogen/ikke-homogen, varme/bølge/Laplace-likning). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) sett $u=F(x)G(t)$ og separer; 2) behandl **alle tre** $k$-tilfellene eksplisitt; 3) bruk randbetingelsene til egenverdier/egenfunksjoner (sinus ved Dirichlet, cosinus ved Neumann); 4) løs $t$-ODE-en; 5) superponer; 6) Fourier-match initialbetingelsen (les av direkte når mulig); 7) ved ikke-homogenitet: stasjonær $w$ + $v=u-w$; 8) evt. $t\to\infty$. **Gjennomregnet eksamenscase** med margnotater om poenguttelling per steg (særlig at alle tre $k$-tilfellene må vises). 8–15 varianter på eksamensnivå (Dirichlet, Neumann, blandet rand, ikke-homogen, Laplace-likning på rektangel).
- **Oppgavesjangre:** G. Mønstereksempel: «Løs $u_t=2u_{xx}$, $0<x<1$, $u_x(0,t)=u_x(1,t)=0$ (isolerte ender), $u(x,0)=1+\cos 2\pi x$, og finn likevektstemperaturen når $t\to\infty$.»
- **Typiske feil:** §5.3 (glemt $k$-tilfelle) i alle varianter; feil egenfunksjonsbasis ved Neumann; unødvendig koeffisientintegral; tidsfella (bruke for lang tid på denne dyre oppgaven).
- **Quiz: 14 · Flashcards: 8**

---

### Del 6 — Numerisk analyse I: interpolasjon, integrasjon, rotsøking

#### Kapittel 6.1: Interpolasjon — Lagrange og Newtons dividerte differanser

- **id:** `tma4135-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-1-1 · **kapitteltype:** teori
- **description:** De to måtene å legge et polynom gjennom punkter — Lagrange og Newton — og interpolasjonsfeilen fra formelarket.
- **Eksamensbelegg:** Sjanger I i 7/13 sett (54 %). Fasiten aksepterer **eksplisitt enten Lagrange eller Newton** (H2019 O5). Symmetriargument for at et interpolasjonspolynom er odde/like (Kont2023 O5: entydighet + $q(x)=-p(-x)$). Omskrevet mønster (H2020): «Finn interpolasjonspolynomet av minste grad for $(-2,-5),(-1,0),(1,1),(2,4)$ på både Lagrange- og Newton-form og vis at de er like.» Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (begge metoder — de premieres begge). **Lagrange**: kardinalfunksjoner $\ell_k(x)=\prod_{j\ne k}\dfrac{x-x_j}{x_k-x_j}$, $p(x)=\sum_k f_k\,\ell_k(x)$. **Newtons dividerte differanser**: differanstabell, $p(x)=f_0+(x-x_0)f[x_0,x_1]+\dots$; **entydighet** av interpolasjonspolynomet (grunnlaget for symmetriargumentet). **Interpolasjonsfeilen** $\varepsilon_n(x)=\prod_{k}(x-x_k)\,\dfrac{f^{(n+1)}(\xi)}{(n+1)!}$ til feilanslag. **Formelark-markering:** Lagrange-formelen, dividerte differanser, **interpolasjonsfeilen** og **Chebyshev-punktene** $x_k=\cos\tfrac{(2k+1)\pi}{2n+2}$ *står på arket* (tren oppslaget: riktig node-indeksering); selve differanstabellen og entydighets-/symmetriargumentet *må kunnes*.
- **Oppgavesjangre:** I. Mønstereksempel: «Finn polynomet av minste grad gjennom $(0,1),(1,3),(3,1)$ på Newton-form, og anslå interpolasjonsfeilen på $[0,3]$ hvis $|f'''|\le 6$.»
- **Typiske feil:** Feil node i en kardinalfunksjon; regnefeil i differanstabellen; glemme at Lagrange og Newton gir **samme** polynom (skal verifiseres når spurt); feil $(n+1)!$ i feilformelen.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.2: Numerisk integrasjon — trapes, Simpson, presisjonsgrad og Gauss–Legendre

- **id:** `tma4135-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-6-1 · **kapitteltype:** teori
- **description:** Trapes- og Simpson-regelen med feilledd, presisjonsgrad ved å teste $x^n$, og den nye Gauss–Legendre-kvadraturen med utdelt node-/vekt-tabell.
- **Eksamensbelegg:** Sjanger J i 8/13 sett (62 %). Presisjonsgrad ved å teste $x^n$ (H2019 O6: Simpson eksakt for $x^3$, feil for $x^4$ → grad 3; Gauss med $N$ noder → grad $2N-1$). Feilleddene for å velge $h$ (Kont2017: trapesfeil $<0{,}1$). **Gauss–Legendre** (ny, Kont2024 O9) med utdelt tabell. Prioritet: **kunne** (Gauss–Legendre: ny primærsjanger, **merk tynt arkivbelegg**).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Trapesregelen** og **Simpsons regel** $\tfrac{h}{3}[f_0+4f_1+2f_2+\dots+f_n]$ (sammensatte varianter); **presisjonsgrad** — test formelen på $1,x,x^2,\dots$ til den feiler (Simpson eksakt t.o.m. $x^3$ → grad 3); **Gauss–Legendre** med node/vekt-tabell: transformer $[a,b]\to[-1,1]$ ved $x(\xi)=\tfrac{(b-a)\xi+(a+b)}{2}$, $dx=\tfrac{b-a}{2}d\xi$, og $N$ noder gir grad $2N-1$; bruk **feilleddene** til å velge $h$. **Formelark-markering:** **trapes + feil** $|\varepsilon|\le\tfrac{b-a}{12}h^2\max|f''|$ og **Simpson + feil** $|\varepsilon|\le\tfrac{b-a}{180}h^4\max|f^{(4)}|$ *står på arket* (tren oppslaget); Gauss-tabellen deles ut i oppgaven; presisjonsgrad-testen og $[a,b]\to[-1,1]$-transformasjonen *må kunnes*.
- **Oppgavesjangre:** J. Mønstereksempel: «Bestem presisjonsgraden til Simpsons regel ved å teste den på $x^n$, og finn så antall delintervall $n$ som gir trapesfeil under $0{,}01$ for $\int_0^1 e^{x}\,dx$.»
- **Typiske feil (analysen §5.8):** Stoppe $x^n$-testingen for tidlig eller forveksle «eksakt for $x^3$» med grad 4; feil vektmønster $1,4,2,\dots,4,1$ i Simpson; glemme $\tfrac{b-a}{2}$-jakobianten i Gauss-transformasjonen.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.3: Fikspunktiterasjon og kontraksjon

- **id:** `tma4135-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-6-1 · **kapitteltype:** teori
- **description:** Skriv $x=g(x)$ og vis konvergens ved **begge** fikspunktvilkårene, deretter a-priori-estimatet for nødvendig antall iterasjoner.
- **Eksamensbelegg:** Sjanger K i 6/13 sett (46 %). Offisiell fasit finnes. Toppsjikt-markør: **begge** vilkårene ($|g'|<1$ **og** $g(I)\subseteq I$). A-priori-estimatet (H2022 O7, Kont2023 O1, H2020 O6). Omskrevet mønster (H2022): «Vis at $x_{k+1}=\sqrt{x_k+2}$ konvergerer mot roten for enhver $x_0\in[1,9]$, og finn antall iterasjoner til $|x_{k+1}-r|\le 2^{-10}$.» Prioritet: **kunne** (grensende til perfekt — toppsjikt-skille).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Omskriv likningen til fikspunktform $x=g(x)$. **Fikspunktteoremet — begge vilkår**: (i) $|g'(x)|\le L<1$ på intervallet (finn maks av $|g'|$, ofte via monotoni); (ii) $g$ **avbilder intervallet inn i seg selv**, $g(I)\subseteq I$ (via monotoni + endepunktsverdier). **A-priori-estimatet** $|x_{k+1}-r|\le\dfrac{L^{k+1}}{1-L}|g(x_0)-x_0|$ til å regne nødvendig antall iterasjoner (rund **oppover**); den svakere varianten (erstatt $|g(x_0)-x_0|$ med intervallengden) godtas også. **Formelark-markering:** a-priori-estimatet står vanligvis *ikke* på arket → *må kunnes*; navngi **fikspunktteoremet**.
- **Oppgavesjangre:** K. Mønstereksempel: «Vis at $x_{k+1}=\tfrac14(x_k^2+1)$ har et entydig fikspunkt i $[0,1]$ og konvergerer for alle $x_0\in[0,1]$; bestem hvor mange iterasjoner som trengs for feil under $10^{-4}$.»
- **Typiske feil (analysen §5.1, §5.9):** Sjekke bare **ett** av de to vilkårene (fasiten viser alltid begge); feil eksponent ($L^{k+1}$ vs. $L^k$); runde antall iterasjoner **nedover**.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.4: Rotsøking — Newtons metode, biseksjon og sekant

- **id:** `tma4135-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-6-3 · **kapitteltype:** teori
- **description:** Newtons metode (skalar + system), biseksjonens iterasjonstelling, og sekantmetoden som beredskap.
- **Eksamensbelegg:** Sjanger L — Newton 4/13 (31 %), biseksjon 2/13 (15 %). Newton skalar: vis **entydig rot** via monoton $f$ + fortegnsskift + mellomverdisetningen, deretter én iterasjon (H2019 O7). Newton system: robotlokalisering (H2016 O6). Biseksjon: $k=\log_2\tfrac{b-a}{2\cdot\text{tol}}$ (Kont2024 O10: 9 iterasjoner). **Sekant** kun eldre (Kont2015) → **kjenne/beredskap**. Prioritet: **kunne** (Newton/biseksjon); **kjenne** (sekant).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Newtons metode** $x_{k+1}=x_k-\dfrac{f(x_k)}{f'(x_k)}$; argumentér **entydig rot** (monoton $f$ + fortegnsskift + **mellomverdisetningen**) før iterasjon. **Newton for system** $\mathbf x_{k+1}=\mathbf x_k-J_F(\mathbf x_k)^{-1}F(\mathbf x_k)$ med Jacobi-matrisen $J_F$. **Biseksjon**: antall skritt for absolutt feil $\le$ tol fra $k=\log_2\tfrac{b-a}{2\cdot\text{tol}}$ (rund oppover). **Sekantmetoden** (beredskap): $x_{k+1}=x_k-f(x_k)\dfrac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}$. **Formelark-markering:** Newton (skalar + system med $J_F$) *står på arket*; entydighetsargumentet (mellomverdisetningen) og biseksjons-tellingen *må kunnes*.
- **Oppgavesjangre:** L. Mønstereksempel: «Vis at $f(x)=x^3+x-1$ har nøyaktig én reell rot, gjør ett Newton-skritt fra $x_0=1$, og angi hvor mange biseksjonsskritt som trengs for feil under $10^{-3}$ på $[0,1]$.»
- **Typiske feil:** Hoppe over entydighetsargumentet (bare iterere); glemme å navngi mellomverdisetningen; feil Jacobi-inversjon i systemtilfellet; runde biseksjonsskritt nedover.
- **Quiz: 15 · Flashcards: 16**

---

### Del 7 — Numeriske metoder for ODE

#### Kapittel 7.1: Euler, Heun og Runge–Kutta — ett skritt for hånd

- **id:** `tma4135-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-6-4 · **kapitteltype:** teori
- **description:** De tre grunnleggende ODE-løserne og det som testes oftest: å ta ett skritt for hånd med riktig oppsett av stegene.
- **Eksamensbelegg:** ODE-løser generelt i 12/13 sett (92 %). Ett skritt for hånd med Euler/Heun/RK4 (H2015K, Kont2017, H2019 O8). **Bakover-Euler** (implisitt) for stive problemer (Kont2019, Kont2020). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Eksplisitt Euler** $y_{n+1}=y_n+hf(t_n,y_n)$; **forbedret Euler / Heun** $y_{n+1}=y_n+\tfrac{h}{2}(k_1+k_2)$ med $k_1=f(t_n,y_n)$, $k_2=f(t_n+h,y_n+hk_1)$; **klassisk RK4** (fire stigningstall $k_1..k_4$, vekter $\tfrac16(k_1+2k_2+2k_3+k_4)$); **bakover-Euler** $y_{n+1}=y_n+hf(t_{n+1},y_{n+1})$ (implisitt — løs likningen for $y_{n+1}$) for stive problemer. Regn **ett konkret skritt** for hvert, ryddig oppstilt. **Formelark-markering:** **Euler, forbedret Euler, RK4 og bakover-Euler *står på arket*** (tren oppslaget: sett inn riktig $f$, $h$, $t_n$, $y_n$); at bakover-Euler krever likningsløsning *må kunnes*.
- **Oppgavesjangre:** M. Mønstereksempel: «Gitt $y'=t-y^2$, $y(0)=1$, $h=0{,}1$: ta ett skritt med Heun og ett med RK4, og sammenlign.»
- **Typiske feil:** Bruke $y_n$ i stedet for det oppdaterte argumentet i $k_2$/$k_3$; feil vekter i RK4; behandle bakover-Euler som eksplisitt (glemme at $y_{n+1}$ står på begge sider).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: Butcher-tabeller og ordensbetingelser

- **id:** `tma4135-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-7-1 · **kapitteltype:** teori
- **description:** Les en Runge–Kutta-metode fra en Butcher-tabell (eller Python-kode) og verifiser ordenen rad for rad til én betingelse feiler.
- **Eksamensbelegg:** Butcher+orden (sjanger M-varianten) i 5/13 sett (38 %). Les/skriv Butcher-tabell fra kode og **verifiser orden** ved å sjekke ordensbetingelsene til én feiler (H2016, H2018, H2020, H2022 O8: $b_3a_{32}c_2\ne\tfrac16$ → metoden er kun orden 2). Ordensbetingelsene deles ut på arket fra 2022. Toppsjikt-markør: **rad-for-rad ordensverifikasjon**. Prioritet: **kunne** (toppsjikt-skille).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Butcher-tabellen** $\begin{array}{c|c} c & A \\ \hline & b^{\!\top}\end{array}$ og hvordan den koder $k_i=f(t_n+c_ih,\,y_n+h\sum_j a_{ij}k_j)$, $y_{n+1}=y_n+h\sum_i b_ik_i$; **les tabellen fra Python-kode** (særlig $a_{ij}$-innslagene); **ordensbetingelsene** $\sum b_i=1$ (orden 1), $\sum b_ic_i=\tfrac12$ (orden 2), $\sum b_ic_i^2=\tfrac13$ og $\sum b_ia_{ij}c_j=\tfrac16$ (orden 3), osv. — sjekk **rad for rad** til den første feiler; da er ordenen én mindre. **Formelark-markering:** **ordensbetingelsene $p=1..4$ *står på arket* fra 2022** (tren oppslaget); avlesing av Butcher-tabell fra kode og verifikasjonslogikken *må kunnes*.
- **Oppgavesjangre:** M. Mønstereksempel: «En metode er gitt ved Butcher-tabellen [nyskrevet 3-stegs tabell]. Verifiser ordensbetingelsene i tur og orden og avgjør metodens orden.»
- **Typiske feil (analysen §5.6):** Stoppe før første ordensbetingelse feiler (påstå for høy orden); feillese $a_{ij}$ fra koden; forveksle $c_i$ (nodene) med $b_i$ (vektene).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.3: Innfelt RK-par og steglengdekontroll

- **id:** `tma4135-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-7-2 · **kapitteltype:** teori
- **description:** Den nye sjangeren fra 2022: to $b$-rader gir et lokalt feilestimat som styrer aksept/forkast og neste steglengde.
- **Eksamensbelegg:** Sjanger N — **ny fra 2022** (H2022 O9; Kont2023 O4 «BogSham»; Kont2024 O4), 3/13 (23 %) men **fast i alle tre 2022–2024-settene** → obligatorisk primærmål. **Merk (usikkerhet):** tynt arkivbelegg, kun etter 2022. Prioritet: **kunne** (ny primærsjanger).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Innfelt par**: to $b$-rader (orden $p$ og $p+1$) i samme Butcher-tabell gir to estimater $y_1$ og $\hat y_1$; **lokalt feilestimat** $\hat\varepsilon=h\big|\sum_i(b_i-\hat b_i)k_i\big|$ (eller $|\hat y_1-y_1|$); **aksept/forkast** mot toleranse; **ny steglengde** $h_{\text{new}}=P\big(\text{Tol}/\hat\varepsilon\big)^{1/(p+1)}$ med sikkerhetsfaktor $P$. Variant: feilestimatet oppfører seg som $Ch^3$ → løs for $h_1$ så neste $\text{est}\approx\text{Tol}$ (Kont2023/Kont2024). **Formelark-markering:** steglengdeformelen står vanligvis *ikke* på arket (Butcher-tabellen deles ut i oppgaven) → estimat- og steglengdelogikken *må kunnes*.
- **Oppgavesjangre:** N. Mønstereksempel: «Et innfelt par (orden 2 og 3) gir etter ett skritt $y_1$ og $\hat y_1$. Beregn det lokale feilestimatet, avgjør om skrittet aksepteres mot Tol $=10^{-3}$, og foreslå neste steglengde.»
- **Typiske feil:** Feil eksponent $1/(p+1)$ i steglengdeformelen; bruke ordenen $p$ i stedet for $p+1$; glemme sikkerhetsfaktoren; forveksle de to $b$-radene.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 7.4: Stabilitetsfunksjonen $R(z)$ og stabilitetsintervall

- **id:** `tma4135-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** tma4135-7-1 · **kapitteltype:** teori
- **description:** Bruk metoden på testlikningen $y'=\lambda y$, finn $R(z)$ med $z=\lambda h$, og bestem det stabile steglengdeintervallet — også for systemer via egenverdiene.
- **Eksamensbelegg:** Sjanger O i 3/13 sett (23 %). Euler: $R(z)=1+z$ → $-2\le z\le0$ → $h\le 2/|\lambda|$. Heun: $R(z)=1+z+z^2/2$ (H2019 O8). System: $\lambda$ = egenverdiene til $A$, mest negative bestemmer maks skritt (Kont2023 O10: egenverdier $-1,-7\Rightarrow h\le 2/7$). Toppsjikt-markør: korrekt stabilitetsanalyse. Prioritet: **kunne** (toppsjikt-skille).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Bruk metoden på **testlikningen** $y'=\lambda y$; da er $y_{n+1}=R(z)y_n$ med $z=\lambda h$; **absolutt stabilitet** krever $|R(z)|\le1$. Utled $R(z)$ for Euler ($1+z$), Heun/forbedret Euler ($1+z+\tfrac12z^2$), RK4 (opp til $z^4$); finn **stabilitetsintervallet** på den reelle aksen og dermed maks $h$. **System**: $\lambda$ = egenverdiene til systemmatrisen $A$; den **mest negative** egenverdien bestemmer maks skritt ($h\le 2/\max|\lambda|$). Kort om implisitte metoder (bakover-Euler) som A-stabile. **Formelark-markering:** ingen ferdig $R(z)$ på arket → utledningen *må kunnes*; metodeformlene (fra 7.1) *står på arket*.
- **Oppgavesjangre:** O. Mønstereksempel: «Finn stabilitetsfunksjonen til Heuns metode og det største steget $h$ som gir stabil løsning av $y'=-5y$; gjør det samme for systemet med egenverdier $-2$ og $-10$.»
- **Typiske feil (analysen §5.10):** Feil $R(z)$ (glemme et ledd); bruke feil (minst negative) egenverdi for systemet; blande $z=\lambda h$-substitusjonen.
- **Quiz: 13 · Flashcards: 14**

#### Kapittel 7.5: Drill — numerisk ODE-sjangeren

- **id:** `tma4135-7-5` · **number:** 7.5 · **estimatedMinutes:** 85 · **prerequisites:** tma4135-7-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele M/N/O-komplekset: ett skritt, orden fra Butcher, innfelt par + steglengde, og stabilitet — som A-besvarelse med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjangrene M (92 %), Butcher+orden (38 %), N (23 %, ny) og O (23 %) samlet — numerikk-blokkens ODE-del, 1–2 deloppgaver per sett. Prioritet: **perfekt** (M) / **kunne** (øvrige).
- **Innholdskontrakt:** Løsningsoppskrift per undertype: (a) ett skritt → velg metode, sett opp $k_i$ ryddig; (b) orden → les Butcher-tabell, sjekk ordensbetingelser rad for rad; (c) innfelt par → to estimater, feilestimat, aksept/forkast, ny $h$; (d) stabilitet → $R(z)$, $z=\lambda h$, intervall, maks $h$ (system: egenverdier). **Gjennomregnet eksamenscase** med margnotater. 8–15 varianter på eksamensnivå som roterer alle undertypene (Euler/Heun/RK4-skritt, Butcher-ordensverifikasjon fra kode, innfelt par-steglengde, stabilitetsintervall skalar + system, bakover-Euler for stivt problem).
- **Oppgavesjangre:** M, N, O. Mønstereksempel: «(a) Ta ett RK4-skritt for $y'=y-t^2+1$, $y(0)=0{,}5$, $h=0{,}2$. (b) En 3-stegs metode er gitt ved en Butcher-tabell — bestem ordenen. (c) Finn maks $h$ for stabil eksplisitt Euler på $y'=-8y$.»
- **Typiske feil:** §5.6 (ufullstendig ordenssjekk) og §5.10 (stabilitetsfeil) i alle varianter; feil argument i $k_2/k_3$; feil eksponent i steglengdeformelen.
- **Quiz: 12 · Flashcards: 8**

---

### Del 8 — Differansemetoder for PDE og randverdiproblemer

#### Kapittel 8.1: Differansekvotienter og avkuttingsfeil via Taylor

- **id:** `tma4135-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-6-2 · **kapitteltype:** teori
- **description:** Differansekvotientene for $u_x$ og $u_{xx}$, hvorfor sentraldifferansen er $O(h^2)$ (Taylor), og avveiningen mellom avrundings- og avkuttingsfeil.
- **Eksamensbelegg:** Grunnlaget for hele Del 8 (differansemetode 85 %). Avkuttingsfeil via Taylor (sjanger Q): vis $O(h^2)$ for sentraldifferansen (Kont2019 O6, Kont2020 O9); balanser avrundingsfeil $O(\varepsilon/h)$ mot avkuttingsfeil $O(h^p)$ for optimal $h$ (H2022 O6, 4N-variant: $h=O(\varepsilon^{1/3})$). Prioritet: **kunne** (Taylor-utledningen: toppsjikt-kortsvar).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Differansekvotienter**: forlengs/baklengs $u_x\approx\tfrac{U_{i+1}-U_i}{h}$; **sentraldifferanse** $u_x\approx\tfrac{U_{i+1}-U_{i-1}}{2h}$ og $u_{xx}\approx\tfrac{U_{i+1}-2U_i+U_{i-1}}{h^2}$. **Taylor-utledning** av avkuttingsfeilen: vis at sentraldifferansen for $u_x$ er $O(h^2)$ (leddene i $h^1$ kanselleres). **Avrundings-/avkuttingsavveining**: total feil $\approx O(\varepsilon/h)+O(h^p)$; deriver/balanser for **optimal $h$** (f.eks. $h^3=O(\varepsilon)\Rightarrow h=O(\varepsilon^{1/3})$). **Formelark-markering:** **differansekvotientene *står på arket*** (tren oppslaget); Taylor-utledningen og avveiningsargumentet *må kunnes*.
- **Oppgavesjangre:** Q + oppsett til P. Mønstereksempel: «Vis ved Taylor-utvikling at $\tfrac{u(x+h)-2u(x)+u(x-h)}{h^2}$ tilnærmer $u''(x)$ med feil $O(h^2)$, og finn den $h$ som balanserer avrundings- mot avkuttingsfeil når avrundingsfeilen er $O(\varepsilon/h^2)$.»
- **Typiske feil (analysen §5.7):** Stoppe Taylor-utviklingen for tidlig (miste ledd som avgjør ordenen); feil fortegn i baklengs-differansen; feil balansering (sette leddene lik uten å løse for $h$).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 8.2: Eksplisitt skjema for varmelikningen og stabilitet $r\le\tfrac12$

- **id:** `tma4135-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-8-1 · **kapitteltype:** teori
- **description:** Det eksplisitte (forward-Euler) skjemaet for varmelikningen, ett gitterpunkt for hånd, og stabilitetskravet $r\le\tfrac12$.
- **Eksamensbelegg:** Del av sjanger P (85 %). Eksplisitt skjema $U_i^{n+1}=U_i^n+r(\dots)$ med $r=\Delta t/h^2$; regn et konkret gitterpunkt for hånd (H2019 O4c, Kont2023 O9). **Stabilitet** krever $r\le\tfrac12$ (Kont2019 O9). Toppsjikt-markør: korrekt $r$-faktor og stabilitetskrav. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Sett inn differansekvotientene (fra 8.1) i $u_t=c^2u_{xx}$: forlengs i tid + sentral i rom gir det **eksplisitte skjemaet** $U_i^{n+1}=U_i^n+r\,(U_{i+1}^n-2U_i^n+U_{i-1}^n)$ med $r=c^2\Delta t/h^2$ (**merk: formelarket kaller tidssteget $k$, altså $r=k/h^2$** — bruk $\Delta t$ i teksten for å unngå kollisjon med separasjonskonstanten $k$); regn **ett konkret gitterpunkt** for hånd fra gitt initial-/randdata; **stabilitetskravet $r\le\tfrac12$** (ellers vokser feilen). **Formelark-markering:** differansekvotientene og Crank–Nicolson-formelen *står på arket*; oppsettet av det eksplisitte skjemaet og stabilitetsgrensen *må kunnes*.
- **Oppgavesjangre:** P. Mønstereksempel: «Gitt $u_t=u_{xx}$ på $[0,1]$ med $u(x,0)=\sin\pi x$, $h=0{,}25$, $\Delta t=0{,}02$: avgjør om skjemaet er stabilt, og regn $U_2^1$ for hånd.»
- **Typiske feil (analysen §5.7):** Feil $r$-faktor (glemme $c^2$ eller bytte $\Delta t$ og $h^2$); bruke skjemaet med $r>\tfrac12$ uten å kommentere ustabilitet; feil indeksering av naboverdiene.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.3: Crank–Nicolson og implisitte skjemaer

- **id:** `tma4135-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** tma4135-8-2 · **kapitteltype:** teori
- **description:** Det implisitte Crank–Nicolson-skjemaet (trapes i tid), det tridiagonale systemet det gir, og hvorfor det er ubetinget stabilt.
- **Eksamensbelegg:** Del av sjanger P (85 %). Crank–Nicolson / trapesregel (implisitt, tridiagonalt system) i H2015, H2016, H2017, H2020 O10. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE ANVENDES (utledningen kort). **Crank–Nicolson** for varmelikningen: gjennomsnitt av eksplisitt og implisitt → $(2+2r)U_{i}^{n+1}-r(U_{i+1}^{n+1}+U_{i-1}^{n+1})=(2-2r)U_i^n+r(U_{i+1}^n+U_{i-1}^n)$ (formen på arket); dette gir et **tridiagonalt lineært system** $A\mathbf U^{n+1}=\mathbf b$ som løses per tidssteg; **ubetinget stabilitet** (ingen $r$-grense) — kontrast til det eksplisitte skjemaet. Sett opp systemet for et lite gitter for hånd. **Formelark-markering:** **Crank–Nicolson-formelen *står på arket*** (tren oppslaget: sett inn riktig $r$); oppsettet av det tridiagonale systemet og stabilitetsegenskapen *må kunnes*.
- **Oppgavesjangre:** P. Mønstereksempel: «Sett opp Crank–Nicolson-systemet for $u_t=u_{xx}$ på et gitter med tre indre punkter, og forklar hvorfor skjemaet er stabilt for enhver $r$.»
- **Typiske feil:** Feil fortegn/plassering i tridiagonalmatrisen; behandle skjemaet som eksplisitt (ikke løse systemet); glemme randbidragene i høyresiden $\mathbf b$.
- **Quiz: 13 · Flashcards: 12**

#### Kapittel 8.4: Randverdiproblemer, falsk rand og kodefeil-lokalisering

- **id:** `tma4135-8-4` · **number:** 8.4 · **estimatedMinutes:** 60 · **prerequisites:** tma4135-8-2 · **kapitteltype:** teori
- **description:** Sett opp $A\mathbf U=\mathbf b$ for et randverdiproblem, håndter Neumann-rand med falsk node, og finn den innebygde feilen i en gitt Python-kode.
- **Eksamensbelegg:** Del av sjanger P (85 %). Randverdiproblem $u''+q(x)u=r(x)$: sett opp $A\mathbf U=\mathbf b$; Neumann-rand $u'(0)=0$ med **falsk-rand-triks** (fiktiv node) (H2018 O9, H2022 O10). **Kodefeil-lokalisering** (H2022 O10; Kont2023 O6): gitt Python-kode med én feil — se at randbetingelsen ikke er oppfylt og pek på linja. Toppsjikt-markør: korrekt falsk-rand-behandling + kodefeil-lokalisering. Prioritet: **kunne** (toppsjikt-skille).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Diskretiser et **randverdiproblem** $u''+q(x)u=r(x)$ med sentraldifferanser → **lineært system** $A\mathbf U=\mathbf b$ (tridiagonalt); **Dirichlet-rand** settes rett inn; **Neumann-rand** ($u'(0)=0$) via **falsk/fiktiv node**: bruk sentraldifferansen i randpunktet og eliminer den fiktive verdien. **Kodefeil-lokalisering**: les et kort Python-differanseskjema, sjekk at rand-/initialbetingelsen faktisk er implementert, og pek på den feilende linja (typisk feil matriseoppføring eller feil randledd). **Formelark-markering:** differansekvotientene *står på arket*; systemoppsettet, falsk-rand-elimineringen og feilsøkingslogikken *må kunnes*.
- **Oppgavesjangre:** P. Mønstereksempel: «Diskretiser $u''-u=x$ på $[0,1]$ med $u(0)=0$, $u'(1)=0$ og fire delintervall; sett opp $A\mathbf U=\mathbf b$ med falsk node ved høyre rand. Deretter: en gitt kodeversjon gir feil svar — finn linja som bryter randbetingelsen.»
- **Typiske feil (analysen §5.7):** Feil falsk-rand-ledd (glemme faktor 2 ved eliminering); feil matriseoppføring; ikke se at en kodefeil bryter randbetingelsen (lete i selve løkka i stedet).
- **Quiz: 14 · Flashcards: 14**

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Formelark-verksted — bygg ditt A5-ark og tren oppslaget

- **id:** `tma4135-9-1` · **number:** 9.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 2–8 · **kapitteltype:** drill
- **description:** Samle transformparene og teoremene, bygg et effektivt gult A5-ark, og drill det raske oppslaget under tidspress — pluss en samlet sjangeroversikt A–S.
- **Eksamensbelegg:** Metakapittel som operasjonaliserer **formelark-prinsippet** (fra Del 0). Kode C betyr at det utdelte formelarket + ett eget A5-ark alltid er med — analysen anbefaler eksplisitt å **lage et mønster-A5-ark** som del av forberedelsen. Prioritet: gjelder alle sjangre.
- **Innholdskontrakt:** To leveranser. (1) **A5-arket**: en kuratert samling av det som *ikke* står på det utdelte arket men ofte trengs — konvolusjonsteoremet, a-priori-iterasjonsestimatet, d'Alemberts formel, RK-ordensbetingelsene (før 2022-arkene), steglengdeformelen, DFT-definisjonen, «finn $f$ først»-regelen for Heaviside, de tre $k$-tilfellenes struktur, $r=\Delta t/h^2$ og $r\le\tfrac12$. (2) **Oppslagsdrillen**: for hver sjanger A–S, hvilken rad/tabell på det utdelte arket løser den, og hva som må hentes fra hodet/A5-arket. Samlet **sjangeroversikt A–S** med løsningsoppskriftene fra drillkapitlene (2.5, 3.4, 5.5, 7.5) i kortform. Flashcards her er rene gjenkjenningskort (transformpar, teoremnavn, formler → sjanger).
- **Oppgavesjangre:** Alle A–S i kortform. Mønstereksempel: «For hvert av disse ti uttrykkene: si hvilken sjanger det tilhører, om det løses med en rad fra det utdelte arket eller må utledes, og hvilket teorem du ville navngi.»
- **Typiske feil:** Bruke tid på å pugge det som står på arket; ikke ha konvolusjonsteoremet/a-priori-estimatet/d'Alembert klart (de står ofte ikke på arket).
- **Quiz: 18 · Flashcards: 26** (samler transformpar/teoremer på tvers — rask gjenkjenning)

#### Kapittel 9.2: Øvingseksamen 1 — den klassiske malen

- **id:** `tma4135-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** tma4135-9-1 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett (8 oppgaver) etter den stabile malen: Laplace + Fourier-rekke + separasjon + numerikk-blokk.
- **Eksamensbelegg/miks:** Speiler et typisk sett (jf. prognosen §7): **O1** Laplace ren ODE/IVP (A); **O2** Laplace integro-diff./Heaviside (B/C); **O3** Fourier-rekke med odde/like utvidelse + skisse (D); **O4** separasjon av variable for varmelikningen med Fourier-matching (G); **O5** d'Alembert / verifiser-PDE (H, 4D-varianten); **O6** interpolasjon Lagrange/Newton (I); **O7** fikspunktiterasjon med a-priori-estimat (K); **O8** numerisk ODE — ett skritt + orden fra Butcher (M). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave, med `tip`-notat om delpoeng (sum 100, prosentbasert skala) og tidsbudsjett.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2 — Fourier-transform og differansemetoder

- **id:** `tma4135-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** tma4135-9-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett (9 oppgaver) som vrir tyngden mot Fourier-transform, ikke-homogen PDE og differansemetoder.
- **Eksamensbelegg/miks:** **O1** Laplace med konvolusjon (B); **O2** kompleks Fourier-rekke (D); **O3** Fourier-transform utregning/integrallikning (E); **O4** Fourier-transform for PDE på $\mathbb{R}$ (F); **O5** separasjon — ikke-homogen varmelikning med stasjonær reduksjon (G); **O6** numerisk integrasjon + presisjonsgrad, inkl. Gauss–Legendre (J); **O7** Newtons metode + entydig rot (L); **O8** eksplisitt differanseskjema for varmelikningen + stabilitet $r\le\tfrac12$ (P); **O9** randverdiproblem med falsk rand + kodefeil-lokalisering (P). Justert for å dekke sjangrene E, F, J, P som Øvingseksamen 1 ikke traff. Løsningsforslag som A-besvarelse med vektings-tips.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3 — nyeste mal med DFT og innfelt RK-par

- **id:** `tma4135-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** tma4135-9-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett (10 oppgaver à 10 poeng) etter 2022–2024-malen med de nye sjangrene DFT, innfelt RK-par og Gauss–Legendre.
- **Eksamensbelegg/miks:** Speiler kont-settene 2023/2024 (10 oppgaver à 10 poeng, prosentbasert skala): **O1** Laplace ODE (A); **O2** Laplace Heaviside/Dirac (C); **O3** DFT — koeffisienter + reell-test (R); **O4** separasjon med Neumann-rand (G); **O5** verifiser/klassifiser PDE (H, 4D); **O6** interpolasjon med symmetriargument (I); **O7** Gauss–Legendre-kvadratur med utdelt tabell (J); **O8** innfelt RK-par + steglengdekontroll (N); **O9** stabilitet $R(z)$ for et system (O); **O10** Crank–Nicolson eller differanseskjema med kodefeil (P). Dekker de nye 2022–2024-sjangrene eksplisitt. Løsningsforslag som A-besvarelse; markér hvor de nye sjangrene har tynnest arkivbelegg.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 14 |
| 1 | 1.1 | 14 | 18 |
| 2 | 2.1–2.5 | 22+20+20+16+14 = **92** | 24+20+22+18+10 = **94** |
| 3 | 3.1–3.4 | 20+17+14+14 = **65** | 20+18+16+10 = **64** |
| 4 | 4.1–4.3 | 18+12+14 = **44** | 22+12+16 = **50** |
| 5 | 5.1–5.5 | 20+16+18+14+14 = **82** | 20+16+18+16+8 = **78** |
| 6 | 6.1–6.4 | 18+18+16+15 = **67** | 20+20+16+16 = **72** |
| 7 | 7.1–7.5 | 18+16+14+13+12 = **73** | 18+18+14+14+8 = **72** |
| 8 | 8.1–8.4 | 14+16+13+14 = **57** | 16+16+12+14 = **58** |
| 9 | 9.1–9.4 | 18+5+5+5 = **33** | 26+0+0+0 = **26** |
| **Sum** | **36 kap.** | **539 ≥ 500 ✓** | **546 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** TMA4135 er transform- og
teoremtungt. Selv om formelarket gjør at lite skal *pugges*, er transformpar
(Laplace/Fourier), teoremnavn (andreforskyvning, konvolusjon, fikspunkt,
d'Alembert) og formel→sjanger-koblinger **flashcard-gull for rask gjenkjenning**
under tidspress — derfor ligger flashcards (546) noe over quiz (539) og godt over
gulvet, med tyngdepunkt i de fire perfekt-søylene (Del 2+3+5 bærer 236 av 546
flashcards). Numerikk-blokken (Del 6+7+8 = 197 quiz) reflekterer at 3–4 numeriske
sjangre opptrer per sett.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 2–8; 2 for repetisjonsdelen Del 1 — 30 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang i minutter. **Avvik dokumentert:** Del 0 (eksamenskart)
og Del 9 (eksamenstrening) har ingen egne prøver; Del 1 er en ren repetisjonsdel
på ett kapittel og får **2** prøver i stedet for 4 (den er forutsetning, ikke en
egen eksamenssjanger).

**Del 1 — Komplekse tall (repetisjon)**
1. Prøve 1.A (20 min): Polar form, Eulers formel, komplekse røtter.
2. Prøve 1.B (20 min): Enhetsrøtter og komplekse partialbrøk (bro til Laplace/DFT).

**Del 2 — Laplace-transform**
1. Prøve 2.A (35 min): Ren ODE/IVP med derivasjonsregelen (sjanger A).
2. Prøve 2.B (35 min): Invers Laplace — delbrøk **og** kvadratkomplettering, reell vs. kompleks (sjanger A).
3. Prøve 2.C (35 min): Heaviside/Dirac med andreforskyvningsteoremet (sjanger C).
4. Prøve 2.D (45 min): Integro-differensiallikning med konvolusjon, full kjede som eksamens O1–O2 (sjanger B + A, eksamensnivå).

**Del 3 — Fourier-rekker**
1. Prøve 3.A (35 min): Reell rekke med symmetriutnyttelse + delvis integrasjon (sjanger D).
2. Prøve 3.B (30 min): Halvintervall-utvidelse, skisse og midling i sprang (sjanger D).
3. Prøve 3.C (30 min): Kompleks Fourier-rekke og broen til $a_n,b_n$ (sjanger D).
4. Prøve 3.D (45 min): Full Fourier-oppgave med tallrekkesum via innsetting (sjanger D, eksamensnivå).

**Del 4 — Fourier-transform og DFT**
1. Prøve 4.A (35 min): Fourier-transform-utregning + integrallikning (sjanger E).
2. Prøve 4.B (35 min): Fourier-transform for en PDE på $\mathbb{R}$ (sjanger F).
3. Prøve 4.C (30 min): DFT — koeffisienter, reell-test, skifteegenskap (sjanger R).
4. Prøve 4.D (40 min): Blandet transformoppgave (E + F/R) på eksamensnivå.

**Del 5 — Partielle differensiallikninger**
1. Prøve 5.A (45 min): Separasjon — alle tre $k$-tilfellene + egenverdier (sjanger G).
2. Prøve 5.B (40 min): Superposisjon + Fourier-matching + ikke-homogen reduksjon (sjanger G).
3. Prøve 5.C (35 min): d'Alembert + variabelskifte (sjanger H).
4. Prøve 5.D (45 min): 4D-signaturen — verifiser/klassifiser PDE + gradient-innslag (sjanger H, eksamensnivå).

**Del 6 — Numerisk analyse I**
1. Prøve 6.A (35 min): Interpolasjon Lagrange **og** Newton + feilanslag (sjanger I).
2. Prøve 6.B (35 min): Numerisk integrasjon + presisjonsgrad + Gauss–Legendre (sjanger J).
3. Prøve 6.C (35 min): Fikspunktiterasjon — begge vilkår + a-priori-estimat (sjanger K).
4. Prøve 6.D (40 min): Newtons metode (entydig rot) + biseksjonstelling (sjanger L, eksamensnivå).

**Del 7 — Numeriske metoder for ODE**
1. Prøve 7.A (35 min): Ett skritt Euler/Heun/RK4 + bakover-Euler (sjanger M).
2. Prøve 7.B (35 min): Butcher-tabell fra kode + ordensverifikasjon rad for rad (sjanger M).
3. Prøve 7.C (35 min): Innfelt RK-par + steglengdekontroll (sjanger N).
4. Prøve 7.D (40 min): Stabilitet $R(z)$ skalar + system, maks $h$ (sjanger O, eksamensnivå).

**Del 8 — Differansemetoder**
1. Prøve 8.A (35 min): Differansekvotienter + avkuttingsfeil via Taylor + avveining (sjanger Q).
2. Prøve 8.B (40 min): Eksplisitt varmeskjema, gitterpunkt for hånd + stabilitet $r\le\tfrac12$ (sjanger P).
3. Prøve 8.C (35 min): Crank–Nicolson tridiagonalt system (sjanger P).
4. Prøve 8.D (45 min): Randverdiproblem $A\mathbf U=\mathbf b$ + falsk rand + kodefeil-lokalisering (sjanger P, eksamensnivå).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Mal den speiler | Miks (oppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 9.2) | Klassisk stabil mal, 8 oppg. | Laplace (A,B/C) + Fourier-rekke (D) + separasjon (G) + d'Alembert (H) + interpolasjon (I) + fikspunkt (K) + numerisk ODE (M) |
| Øvingseksamen 2 (kap. 9.3) | Fourier-transform-/differansetung, 9 oppg. | Laplace-konvolusjon (B) + kompleks Fourier (D) + Fourier-transform (E,F) + ikke-homogen PDE (G) + integrasjon (J) + Newton (L) + eksplisitt + RVP-differanse (P,P) |
| Øvingseksamen 3 (kap. 9.4) | Nyeste 2022–2024-mal, 10 oppg. à 10 p | Laplace (A,C) + DFT (R) + separasjon Neumann (G) + verifiser-PDE (H) + interpolasjon (I) + Gauss–Legendre (J) + innfelt RK-par (N) + stabilitet system (O) + Crank–Nicolson/kodefeil (P) |

Til sammen dekker de tre settene samtlige sjangre A–R minst én gang (S =
lineæralgebra-numerikk er beredskap og dekkes i teori/quiz, ikke i øvingseksamen).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4t, kode C, 6–10 oppgaver, ingen flervalg,
   «alle svar begrunnes»), formathistorikken og 4N/4D-splitten (fra kap. 0.1).
2. **De fire søylene og prioriteringskartet** — temafrekvens-tabellen omgjort til
   tre lesenivåer: **perfekt** (Laplace Del 2, Fourier-rekker Del 3, separasjon
   Del 5, numerisk ODE Del 7, differansemetode Del 8), **kunne** (Fourier-transform/
   DFT Del 4, numerisk analyse Del 6), **kjenne** (gradient, LU/Doolittle,
   Jacobi/Gauss–Seidel, sekant).
3. **Formelark-strategien** — hva som *står på det utdelte arket* vs. *må kunnes*,
   og oppskriften på det egne A5-arket (fra kap. 9.1).
4. **Sjangerguiden** — de 19 oppgavetypene A–S med løsningsoppskriftene fra
   drillkapitlene (2.5, 3.4, 5.5, 7.5) i kortform.
5. **Sensorreglene** — «alt begrunnes», bær teoremnavn, flere metoder premieres,
   feilforplantning tolereres, delpunkt-gjenbruk; karakterskille-listen (begge
   fikspunktvilkårene, tre $k$-tilfeller, rad-for-rad orden, rand-/stabilitets-
   behandling, andreforskyvning riktig).
6. **Feilkatalogen** — de 12 typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → perfekt-søylene 2 → 3 → 5 → 7 → 8, deretter 4 og 6, prøver underveis,
   øvingseksamenene de tre siste ukene under tidspress (240 min, vektstyrt budsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tma4135` med alle 36
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer sjanger-katalogen A–S, frekvenstallene og
   formelark-prinsippet som resten refererer til.
3. **Del 1** (kap. 1.1) — forutsetningsapparatet (komplekse tall/Euler/enhetsrøtter).
4. **Perfekt-søylene i avhengighetsrekkefølge**: Del 2 (Laplace) → Del 3
   (Fourier-rekker) → Del 5 (PDE; krever 3.1). Del 4 (Fourier-transform/DFT)
   etter Del 3.
5. **Numerikk-blokken**: Del 6 → Del 7 (krever 6.4) → Del 8 (krever 6.2).
6. **Del 9** (øvingseksamenene til slutt — de gjenbruker alt); prøvene (§4)
   legges i respektive delers siste kapittel eller som egne exercise-seksjoner
   etter plattformens mønster.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle uttrykk i `$...$`/`$$...$$`; `\\` i JSON; ingen unicode-brøker;
  konsistent notasjon ($\mathcal{L}$, $F(s)$, $Y(s)$, $u(t-a)$, $\delta$, $f̂(\omega)$,
  $a_n$/$b_n$/$c_n$, $u=F(x)G(t)$, $R(z)$, $z=\lambda h$, $U_i^n$).
- [ ] **Formelark-markering**: hvert kapittel skiller eksplisitt «står på arket —
  tren oppslaget» fra «må kunnes/utledes aktivt» (grep etter begge frasene).
- [ ] **Notasjonsklash $k$**: i Del 8 er tidssteget $\Delta t$ (ikke $k$), med
  fotnote om at arket kaller det $k$ ($r=k/h^2$); separasjonskonstanten $k$ kun i Del 5.
- [ ] **Teorem-/metodenavn båret eksplisitt**: andreforskyvnings-, konvolusjons-,
  fikspunkt-, mellomverdi-teoremet, d'Alemberts formel skrives ut der de brukes.
- [ ] **Flere metoder vist** der sjangeren har dem (delbrøk vs. kvadratkomplettering;
  Lagrange vs. Newton; reell vs. kompleks delbrøk).
- [ ] **Toppsjikt-markørene dekket**: begge fikspunktvilkårene (6.3), alle tre
  $k$-tilfellene (5.1/5.5), rad-for-rad ordensverifikasjon (7.2), rand-/stabilitets-
  behandling (7.4/8.2/8.4) — hver med egen `warning`/drillmål.
- [ ] **Nye sjangre merket**: DFT (4.3), innfelt RK-par (7.3), Gauss–Legendre (6.2)
  har `tip`-notat om tynt arkivbelegg / verifiser mot framtidige sett.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  Symbol-/formelliste-`collapsible`, Typiske feil-`warning`, 2–4 eksempler (siste
  på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 539 og flashcard-sum ≥ 546** per kvotetabellen (§3).
- [ ] **Prøver**: 4 per temadel 2–8 + 2 for Del 1 (30 stk) + 3 øvingseksamener som
  sammen dekker sjangrene A–R.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og kontekst;
  ingen formuleringer fra reelle sett eller løsningsforslag (skjelettets
  mønstereksempler er selv omskrivninger og varieres videre, kopieres ikke inn ordrett).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
