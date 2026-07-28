# Bokskjelett: TMA4320 Introduksjon til vitenskapelige beregninger (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (DNA-regnefag + kodefag-tillegg, se §2). Unntak: øvingseksamen-/
> prøve-/modellbesvarelseskapitler følger sin egen arketype (komplett sett
> først, løsninger i collapsibles). Kvotene og innholdskontraktene i dette
> skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (15 velkarakteriserte sett V2016–V2026 fra TMA4320-arkivet, ~24 filer; alle
> tilgjengelige offisielle løsningsforslag + de utdelte formelarkene lest
> grundig; de to 2022-fasitene er skann uten tekstlag, så 2022 er kartlagt fra
> de fullstendige oppgavesettene). Arketype: **DNA-regnefag** med **kodefag-
> tillegg** (Python), se §2. Kapittel-DNA-ene i DNA-regnefag (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.

> **Statusverifisering (§0 — ufravikelig, verifisert 11. juli 2026 mot
> ntnu.no/studier/emner/TMA4320):** TMA4320 «Introduksjon til vitenskapelige
> beregninger» er **AKTIVT** — 7,5 studiepoeng, undervises om våren (neste
> oppføring vår 2027), **samlet vurdering: skriftlig digital skoleeksamen 4 t i
> Inspera (70 %) + mappe/prosjektportefølje (30 %)**, bokstavkarakter A–F.
> **Ingen nedleggelse eller utfasing** er annonsert. Studiepoengreduksjonstabellen
> viser faglig overlapp mot **MA2501** (Trondheim-varianten av samme
> numerikk-emne); dette er en parallell, ikke en etterfølger, og påvirker ikke
> byggingen. **Dette er case (a) i §C9-trepunktsmandatet: aktivt emne → bygg
> skjelett.** Arkivet (24 filer, 13–15 velkarakteriserte sett) er rikt nok til
> full kalibrering. Alle frekvenser under er merket «per V2016–V2026-arkivet» og
> bør re-verifiseres ved nytt sett — særlig ML/PINN og rene kode-oppgaver som er
> ferske (2025–2026).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4320` |
| Tittel | **TMA4320 Introduksjon til vitenskapelige beregninger (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4320 Introduksjon til vitenskapelige beregninger». |
| Arketype | **Regnefag + kodefag-tillegg** (`DNA-regnefag.md`, med Python-API-/kodesporingslag som i in1900-linjen — se §2). |
| Antall kapitler | **34** (Del 0: 2 · temadeler 1–9: 26 · eksamenstrening Del 10: 4 · repetisjon Del 11: 2) |
| Estimert totaltid | **~2 470 min ≈ 41 timer** (per kapittel under; kontrollsummert i §5) |
| Quiz totalt | **577** (krav ≥500) |
| Flashcards totalt | **569** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4320 er et **implementerings- og prosjektnært
numerikk-emne** der sluttkarakteren er **samlet vurdering: skriftlig skoleeksamen
(70 %) + mappe/prosjektoppgaver (30 %)**. Den skriftlige delen (4 timer, kalkulator
+ formelark/Rottmann, ingen flervalg) hviler på fire søyler som er praktisk talt
garantert hvert år: **(1) numeriske metoder for ODE-er** (skriv om en høyere
ordens likning til et førsteordens system, ett–to skritt for hånd med
Euler/Heun/RK/implisitt, Butcher-tablå, ordensbetingelser, stabilitetsfunksjon
`R(z)`, A-stabilitet, konvergens- og global-feil-bevis) — **100 %**; **(2)
numerisk lineær algebra** (LU/Cholesky/SVD, vektor-/matrisenormer, kondisjonstall,
pivotering, tridiagonale/Hessenberg-systemer med flop-telling, SPD/Gershgorin) —
TMA4320-signaturen; **(3) interpolasjon** (Lagrange/Newton, interpolasjonsfeil,
Chebyshev-noder) — 69 %; og **(4) numerisk integrasjon** (midtpunkt/trapes/
Simpson/Boole, presisjonsgrad, adaptiv/sammensatt kvadratur) — 85 %. Rundt disse:
**rotsøking** (Newton + fikspunkt), **DFT/FFT**, og — nytt fra 2025–2026 — **rene
Python-kode-oppgaver på skriftlig del** (spektralløser + konvergensstudie),
**prosjektforklaringsspørsmål** (`solve_bvp`, «flattening») og **nevrale nettverk
/ fysikk-informerte nettverk (PINN)**. Fordi **prosjektene er 30 % av karakteren
og siden 2023 refereres direkte i skoleeksamenen**, må boka trene *både*
håndregning/teori *og* faktisk Python-implementering av alle kjernemetodene. Boka
er kalibrert baklengs fra det: den driller de fire søylene metode for metode,
trener studenten i å *finne og bruke* formlene fra arket og *utlede* det som ikke
står der, og dekker de nye kode-/ML-sjangrene som obligatorisk primærmål for
kommende sett.

**Kritisk kalibrering — «vis mellomregning, verifiser resultatet» (gjelder HELE
boka):** Fasitene er skrittvise; bar fasit uten utledning premieres ikke, og
sensor vil se **verifikasjon** («det er alltid en god idé å sjekke `A = LU` /
`Ax = b`»). Hvert regnekapittel avslutter et modellsvar med et eksplisitt
sjekk-steg, og hver drill trener «verifiser til slutt» som fast vane.

**Kritisk kalibrering — kode og teori er to sider av samme sak (gjelder HELE
boka):** Hver kjernemetode presenteres BÅDE som håndregning (for skriftlig del)
OG som en kort, kjørbar Python-funksjon (for prosjektet og de rene kode-oppgavene).
Python-koden skrives som `python`-kodeblokker i tekstnotasjon, med `numpy`/`scipy`
i emnets egen stil (`np.linalg`, `scipy.fft`, `scipy.integrate.solve_bvp`,
generatorer med `yield`). Kode som eksamen ber studenten *fullføre* eller *forklare*
(V2025 O4, V2026 O2e/O3) drilles som egen sjanger (S, T) i Del 9.

**Matematisk sannhetskontroll (UFRAVIKELIG — jf. DNA-regnefag):** Fortegns-,
entydighets-, orden-, stabilitets- og «alltid mindre/større enn»-påstander
(f.eks. maks steglengde `h ∈ (0, 2/17)` for et gitt system, presisjonsgraden til
en kvadraturregel, ordenen til en RK-metode, at Crank–Nicolson er A-stabil)
PARAMETERSJEKKES NUMERISK (python3) i det fulle parameterrommet FØR de skrives.
Er en påstand betinget, skrives betingelsen ut. Usikre påstander merkes
`(verifiser)`. All matematikk i LaTeX (`$...$` / `$$...$$`); norsk bokmål,
engelsk fagterminologi i parentes ved første forekomst.

**Bevisst nedprioritert (begrunnes i Del 0):** Gauss–Seidel/iterativ splitting,
ortogonale polynomer/Gram–Schmidt og biseksjon forekommer bare i de eldste settene
(2016–2018) og får kompakt beredskapsdekning, ikke egne deler. Boka bygger IKKE
tung teori om PDE-differansemetoder (det er TMA4212/TMA4216-stoff); varmelignings-
spektralløseren dekkes som *kode-/prosjektsjanger*, ikke som PDE-teoriblokk.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): Python-verktøykassen
og eksamenskartet først; deretter numerisk lineær algebra (grunnlaget for både
`Ax=b`-løsning og de implisitte ODE-skrittene), interpolasjon og kvadratur (som
hviler på polynomteori), rotsøking (som trengs for implisitte skritt), så den
tunge ODE-numerikkblokken, og til slutt de moderne temaene (BVP, spektralmetoder/
FFT, ML/PINN) og prosjekt-Python. Frekvensen styrer *omfanget*, ikke rekkefølgen:
de fire søylene får hver sin del med teori- **og** drillkapittel og høyest kvote;
lavfrekvent/nytt stoff får kompakte kapitler, men ML/PINN og kode-oppgaver dekkes
som primærmål fordi trenden er entydig oppadgående.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og Python-verktøykasse | 2 | perfekt (meta) | Formen (70/30-vurdering, 4 t skriftlig + prosjekt, kalkulator + formelark, ingen flervalg), sjangerkatalogen A–V, temafrekvensene, sensorkravene, kildeforbeholdet og **Python-grunnverktøyene** må etableres FØR fagstoffet. Python er 30 % av karakteren + dukker opp på skriftlig del → egen verktøykasse. |
| 1 | Numerisk lineær algebra | 6 | perfekt (77 %) | TMA4320-signaturen og nest tyngste blokk (vokste i 2023–2024). Normer/kondisjonstall/SPD-Gershgorin, LU + pivotering, Cholesky, SVD, tridiagonal/Hessenberg + flop, + drillkapittel. |
| 2 | Interpolasjon | 2 | perfekt (69 %) | Fast tredje søyle. Lagrange/Newton + interpolasjonsfeil + Chebyshev + entydighetsbevis, + drillkapittel. |
| 3 | Numerisk integrasjon (kvadratur) | 2 | perfekt (85 %) | Fast fjerde søyle, nest høyest frekvens. Midtpunkt/trapes/Simpson/Boole + presisjonsgrad + sammensatt/adaptiv feil + vektbestemmelse + sammensatt-bevis, + drillkapittel. |
| 4 | Rotsøking | 2 | kunne (46 % / 31 %) | Fikspunkt (+ fikspunktteoremet, yndet bevis) + Newton skalar/system (Jacobi) + biseksjon. Newton-system trengs for implisitte ODE-skritt. |
| 5 | Numeriske metoder for ODE | 6 | perfekt (100 %) | Den absolutte bæresøylen. System-omskriving + eksplisitt Euler/Heun/RK, implisitte metoder (implisitt Euler/midtpunkt/Crank–Nicolson + rotvalg), Butcher + ordensbetingelser, stabilitet `R(z)`/A-stab/system-egenverdier, konvergens + global-feil-bevis, innfelt RK-par + steglengde, + drillkapittel. |
| 6 | Randverdiproblem for ODE | 1 | kjenne (15 %, stigende) | Differanse/propagasjonsmatrise/lineær «shooting» + kobling til `solve_bvp`. Nytt tyngdepunkt V2026. |
| 7 | DFT/FFT og spektralmetoder | 2 | kunne (23 %) | DFT for hånd (N=3) + egenskaper + `O(n log n)`, og Fourier-spektralløser for varmeligningen (`scipy.fft`) som prosjekt-/kode-grunnlag. |
| 8 | Maskinlæring: nevrale nett og PINN | 1 | kjenne (8 %, nytt V2026) | Dypt fullt koblet nettverk, tapsfunksjon (PINN-ledd), trening (gradientmetode + learning rate), automatisk derivasjon. Nytt primærmål — dekkes grundig som teori + prosjektferdighet. |
| 9 | Prosjekt-Python og kode-/forklaringssjangre | 2 | perfekt (kode 30 % + skriftlig) | Alle kjernemetodene implementert i Python + EOC-konvergensstudie; ren kode-oppgave-drill (S) og prosjektforklaringsdrill (T: `solve_bvp`, «flattening»). Ikke-forhandlbart. |
| 10 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–V) + **3 komplette øvingseksamener** med A-fasit (speiler temafordelingen). |
| 11 | Repetisjon og oppslag | 2 | kunne (meta) | Formel-/mønster-oppslag (Butcher-tablåer, `R(z)`-uttrykk, norm-/kondisjonstall, ordensbetingelser, Python-API) + beredskapsstoff (Gauss–Seidel, Gram–Schmidt, biseksjon-detaljer). |

Rasjonale: de fire søylene (ODE, lin.alg., interpolasjon, kvadratur) får hver sin
del med drillkapittel og høyest kvote; ODE-blokken er størst (6 kap) fordi den er
100 % og bærer flest sjangre; numerisk lin.alg. er nest størst (6 kap) fordi den
er TMA4320-signaturen og vokste i vekt 2023–2024. Prosjekt-Python/kode/ML får
egne deler fordi de er 30 % av karakteren og i økende grad testes på skriftlig del.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og Python-verktøykasse |
| 1 | Numerisk lineær algebra |
| 2 | Interpolasjon |
| 3 | Numerisk integrasjon |
| 4 | Rotsøking |
| 5 | Numeriske metoder for ODE |
| 6 | Randverdiproblem for ODE |
| 7 | DFT/FFT og spektralmetoder |
| 8 | Maskinlæring: nevrale nett og PINN |
| 9 | Prosjekt-Python og kode-/forklaringssjangre |
| 10 | Eksamenstrening |
| 11 | Repetisjon og oppslag |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Forfatteren skal introdusere hver kode i klarspråk ved FØRSTE bruk (jf. README
«Ingen uforklart sjargong»); kodene er ren organisering av oppgavetradisjonen.

**A** Skriv høyere ordens ODE om til førsteordens system · **B** Ett/to skritt for
hånd med en Runge–Kutta-metode (eksplisitt og implisitt) · **C** Butcher-tablå +
ordensbetingelser (bestem/verifiser orden) · **D** Stabilitetsfunksjon `R(z)`,
stabilitetsområde, A-stabilitet · **E** Lineær stabilitetsanalyse for et system
(steglengdegrense via egenverdier) · **F** Innfelt RK-par + lokalt feilestimat +
steglengdekontroll · **G** Konvergens-/feilanalyse for ODE-løsere (lokal vs.
global feil, bevis global feil `O(hᵖ)`) · **H** LU-/Cholesky-faktorisering +
tilbakeløsning · **I** Pivotering (skalert delvis) · **J** Vektor-/matrisenormer
+ kondisjonstall + feilforplantning · **K** SPD/Gershgorin/strengt diagonaldominans
· **L** SVD (definisjon + gjenkjenning/konstruksjon) · **M** Tridiagonal-/
Hessenberg-løser + flop-telling · **N** Interpolasjon (Lagrange/Newton + feil +
Chebyshev) · **O** Numerisk integrasjon (kvadraturregler + presisjonsgrad + feil)
· **P** Fikspunktiterasjon (+ fikspunktteoremet) · **Q** Newton (skalar + system)
+ biseksjon · **R** DFT/FFT (utregning, egenskaper, operasjonstelling) · **S**
Ren kode-/pseudokode-oppgave (fullfør Python-funksjon + EOC-konvergensstudie) ·
**T** Prosjektforklaringsspørsmål på skriftlig del · **U** Randverdiproblem for
ODE (differanse/propagasjonsmatrise/shooting/`solve_bvp`) · **V** Nevrale nettverk
/ PINN (struktur, tap, trening, autodiff). *(Peripher/beredskap: Gauss–Seidel,
ortogonale polynomer/Gram–Schmidt — kun eldste sett; lavt vektet, Del 11.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Vis mellomregning og begrunn.** Fasitene er skrittvise; bar fasit uten
   utledning premieres ikke. For-hånd-utregninger forventes ryddige.
2. **Verifiser resultatet.** Sensor liker å se sjekk (`A=LU`, `Ax=b`).
3. **Metode-/teoremnavn bæres eksplisitt** («Gershgorin-teoremet»,
   «fikspunktteoremet», «A-stabilitet», «presisjonsgrad», «min-max-egenskap»).
   Definisjonsspørsmål krever presis, komplett definisjon.
4. **Ved to røtter i et implisitt skritt:** velg og **begrunn** riktig gren
   (nærmest `f(y₀)` / fysisk rimelig / positiv). Fasiten gjør dette hver gang.
5. **Poeng/karakter:** fra 2023 eksplisitt prosentvekting (sum 100 %) eller poeng.
   Kode-/prosjektoppgaver vurderes helhetlig uten detaljert poengoppdeling.
6. **Feilforplantning tolereres:** riktig videreregning på en feil mellomverdi
   gir uttelling i senere delpunkt.
7. **Flere metoder honoreres:** Lagrange vs. Newton; radbytte-frihet i pivotering;
   flere gyldige fikspunkt-omskrivinger.
8. **Prosjektspørsmål krever egen erfaring:** V2026-fasiten sier rett ut at svaret
   «er godt beskrevet i prosjektbeskrivelsen» — den som ikke gjorde prosjektet,
   taper poengene. Boka må derfor trene faktisk kode, ikke bare teori.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Feil valg av rot i implisitt skritt (velg grenen nærmest `f(y₀)` / fysisk
rimelig). · **#2** Ufullstendig ordenssjekk (stopper før første betingelse feiler)
eller feillest Butcher-tablå (særlig `aᵢⱼ`/`c` for implisitte metoder). · **#3**
Kun ett fikspunktvilkår (`|g′|<1` uten `g(I)⊆I`, eller motsatt). · **#4**
Interpolasjonsfeilformelen brukt på et polynom som ikke har laveste grad
(K2016-fellen: `(p(x))²`). · **#5** Presisjonsgrad feilbestemt («eksakt for `xⁿ`»
vs. grad `n+1`; feil deriverte-orden i feilleddet). · **#6** Pivotering: glemmer å
oppdatere skaleringsvektoren ved radbytte. · **#7** Kondisjonstall/norm-forveksling
(`‖A‖₁` kolonnesum vs. `‖A‖∞` radsum; feil retning i ulikheten). · **#8**
Cholesky/LU-slurv (fortegnsfeil i multiplikatorer; glemmer at Cholesky krever SPD).
· **#9** A-stabilitet forvekslet med stabilitetsområde; feil egenverdi ved maks
skritt for system. · **#10** «Global feil = sum av lokale feil» (den klassiske
misforståelsen — akkumulerer via `(1+hM)`-faktoren). · **#11** DFT-normering
(`1/√N` vs. `1/N`). · **#12** Kode-feil: off-by-one i tidsløkka, feil
`fftfreq`-skalering (`·2π`), `endpoint=True` der periodisk rutenett krever
`endpoint=False`. · **#13** Prosjektspørsmål: vage svar uten faktisk kjennskap
(flattening-dimensjon, `fun`/`bc`-signaturer, tapsfunksjonens ledd). · **#14**
Tidsfelle: implisitte skritt og bevis stjeler tid.

### Arketypetilpasning (dokumenterte hybridvalg)

1. **Regnefag + kodefag-tillegg.** DNA-regnefag er hovedmalen (regne-/utlednings-/
   modelloppgaver med entydige svar → drill mot faste mønstre). I tillegg lånes
   **kodefag-DNA-lag fra in1900-linjen**: hver kjernemetode får en kort kjørbar
   Python-funksjon i tekstnotasjon, kode-oppgaver drilles med API-lister
   (`np.linalg.solve/eig/svd`, `scipy.fft.fft2/ifft2/fftfreq`,
   `scipy.integrate.solve_bvp`, `numpy.roots`, generatorer med `yield`), og
   V2025-typen kode-oppgave (fullfør funksjon + EOC) trenes som egen sjanger (S).
2. **«Symbol- og formelliste» beholdes** (README-krav) per delkapittel — for
   dette faget er den særlig tung (Butcher-tablå-notasjon, `R(z)`, norm-/
   kondisjonstall-symboler, ordensbetingelser). Plasseres SIST i delkapitlet med
   åpningsnotisen «Oppslagsverk — alt her forklares underveis i kapitlet.»
3. **Drillkapitler for de fire søylene** (1.6 lin.alg., 2.2 interpolasjon, 3.2
   kvadratur, 5.6 ODE) fordi disse er de mest resirkulerte og mekaniserbare.
4. **Formel-minimum-siden i Del 0** (DNA-regnefag-krav) er dobbelt: (a)
   matematisk minimum (Euler/RK-oppdatering, `R(z)` for de tre standardmetodene,
   norm-/kondisjonstall-definisjoner, interpolasjons-/kvadraturfeil), og (b)
   Python-minimum (de ~8 uunngåelige `numpy`/`scipy`-kallene). Dette er også
   bokas «samlede oppslagskort» (printbar ren tabell, jf. README).
5. **Prosjekt-tematikk skifter årlig** (bjelke, drag, spektral-varme, Usadel, ML)
   — boka trener *metodene* (RK/BVP/spektral/ML-implementering) og
   *forklaringsevnen*, ikke det spesifikke anvendelsesdomenet. Prosjektbeskrivelsene
   selv ligger ikke i arkivet; metodene de tester er fullt belagt (`(verifiser)`
   der prosjektdetaljer er sluttet indirekte).
6. **Ingen oppdiktede resultater.** Usikre ordenstall, stabilitetspåstander og
   flop-tellinger merkes `(verifiser)` og etterregnes numerisk før de påstås.

### Kapittel-DNA

Teorikapitler følger **DNA-regnefag teorikapittel-DNA** (blokk-rekkefølge:
`tip` Eksamensvinkel → `text` Forkunnskaper + `collapsible` Symbol-/formelliste →
`text` Motivasjon → `definition`/`theorem` → `text` Utledning med intuisjon →
`example` ×2–4 → `warning` Typiske feil → `exercise` ×6–12 inline i løkker →
`collapsible` Repetisjonsoppgaver). Kodetunge kapitler tilføyer en `python`-
kodeblokk (kjørbar kjernefunksjon) rett etter den håndregnede utledningen.
Drillkapitler følger **drill-DNA** (Eksamensvinkel → Løsningsoppskrift →
gjennomregnet eksamenscase med sensor-margnotater → Typiske feil → 8–15 varianter).
Øvingseksamener følger **øvingseksamen-DNA** (komplett sett + A-fasit i
collapsibles). Se DNA-regnefag for full blokk-spesifikasjon; gjentas ikke her.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–V) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per V2016–V2026-
> arkivet». **Innholdskontrakt** = definisjoner/teoremer/metoder som SKAL med
> (med notasjon; flashcard-kilden er `definition`-blokkene). **Kvote** =
> quiz/flashcards. Kryssbok-lenkene peker på eksisterende matte-/numerikk-
> kapitler (`(verifiser lenke)` der usikker); nærmeste søsterbok er tma4135.

### Del 0 — Eksamenskart og Python-verktøykasse *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4320
**id:** `tma4320-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (Del 0-pakken fra README «Leserkrav»).
- **Description:** Eksamensformen (samlet vurdering 70 % skriftlig + 30 %
  prosjekt, 4 t digital skoleeksamen i Inspera, kalkulator + formelark/Rottmann,
  ingen flervalg), de fire søylene, temafrekvensene, sjangerkatalogen A–V,
  sensorkravene, kildeforbeholdet og statusverifiseringen (aktivt emne) —
  verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet V2016–V2026). Skal formidle:
  (a) **formen** — 70/30-vurdering, 4 t skriftlig, kode B (Rottmann + kalkulator)
  t.o.m. 2018, kode C (formelark + kalkulator, evt. Rottmann fra V2026) fra 2022,
  ingen flervalg; (b) **de fire søylene** med gjenganger-score: ODE-numerikk
  100 %, kvadratur 85 %, LU/Cholesky 77 %, interpolasjon 69 %; (c)
  **temafrekvenstabellen** (13/13-100 % ODE ned til 8 % ML/PINN — se §2/analysen
  §2); (d) **sensorkravene** (§2); (e) **kildeforbeholdet** — de to 2022-fasitene
  er skann uten tekstlag (kartlagt fra oppgavesettene); ingen 2019–2021-sett;
  (f) **prosjektkoblingen** — prosjektene er 30 %, refereres direkte på skriftlig
  del fra 2023 → koden må trenes; (g) **statusverifiseringen** — TMA4320 aktivt
  (§0). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Del 0-pakken (README): (a) **«Slik leser du denne boka»**
  (type `text`/`tip`): forklarer bokstavkarakter A–F, at C er en god og vanlig
  karakter tidlig i studiet, sjangerkodene A–V i klarspråk, at typiske feil har
  et samlet register (#1–#14), og rammer inn tunge symboler leseren møter senere
  («du trenger ikke forstå `R(z)` eller Butcher-tablå ennå»); (b) **«Lite tid?»**
  (type `tip`): hurtigrute 3–5 dager (ODE → lin.alg. → kvadratur/interpolasjon
  først), ukeplan(er) fra summerte `estimatedMinutes`, med eksplisitt beskjed om
  at tidsanslag er LESEtid (×1,5 ved håndregning); (c) **kildenote** for
  frekvens-empirien (V2016–V2026, 24 filer, forbehold om nye sett); (d)
  **prosedyre-/sjangeroversiktskort på ÉN side** (sjanger A–V → én linjes
  oppskrift → tidsbudsjett → vanligste feil); (e) **deltidsrute** (10–12 uker,
  ~8 t/uke, øvingseksamener fordelt på flere økter); (f) **«lese mye, skrive
  lite»-boks**. Sjangerprognose for neste sett (analysen §7): 4–6 vektede
  oppgaver, minst én lin.alg. + én ODE + interpolasjon/kvadratur, ofte pluss
  rotsøking/DFT, og én ren kode-/prosjekt-/ML-oppgave. Ingen forkunnskapsblokk
  (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt
  4-timers mal — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst
  om den krever full mekanisme/bevis eller bare et tallsvar».
- **Typiske feil:** Metafeilene: droppe verifikasjon (sensorkrav 2); tro at
  prosjektspørsmål kan improviseres uten å ha gjort prosjektet (#13); vente
  flervalg (finnes ikke); undervurdere kode-delen.
- **Kvote:** 10 quiz / 8 flashcards (formfakta, de fire søylene, temafrekvens,
  sensorkravene, sjangerkodene, kildeforbeholdet, 70/30-vurderingen).

#### Kapittel 0.2: Python-verktøykassen for vitenskapelige beregninger
**id:** `tma4320-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-0-1`

- **Kapitteltype:** kodefag-verktøykapittel (meta — Python-grunnlaget som 30 % av
  karakteren og kode-oppgavene hviler på).
- **Description:** Det minimale Python-/`numpy`-/`scipy`-repertoaret boka bruker
  gjennomgående, slik at leseren kan følge og fullføre kjørbare kodeblokker i
  resten av boka — og forstå prosjekt-/kode-oppgavene på skriftlig del.
- **Eksamensbelegg:** Gjennomgående (kode 30 % + sjanger S/T på skriftlig del,
  V2025 O4, V2026 O2e). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; grunnleggende Python-syntaks
  (variabler, løkker, funksjoner) — lenk til [IN1900 Python-programmering](/in1900/in1900-1-1)
  `(verifiser lenke)` for lesere uten programmeringsbakgrunn. `collapsible`
  **Symbol- og formelliste:** API-oversikt (funksjon → hva den gjør → typisk kall).
- **Innholdskontrakt (`definition`/`text` — flashcard-kilde):** **`numpy`-kjerne:**
  `np.linspace/arange/meshgrid`, `np.array`/broadcasting, `np.linalg.solve/inv/
  norm/eig/svd/cond`, `np.roots` (implisitte skritt), vektorisering vs. løkke;
  **`scipy`-kjerne:** `scipy.fft.fft/ifft/fft2/ifft2/fftfreq` (`·2π`-skalering!),
  `scipy.integrate.solve_bvp`; **generatorer med `yield`** (tidsstegs-løsere,
  V2025-typen); **EOC-mønsteret** `EOC = log(err_k/err_{k+1})/log 2`; plotting-
  skjelett. Forklar `endpoint=False` for periodiske rutenett (#12). Alt vist som
  små kjørbare `python`-blokker.
- **Typiske feil:** #12 (off-by-one i tidsløkke, feil `fftfreq`-skalering,
  `endpoint`-valg); forveksle radvektor/kolonnevektor i `np.linalg`.
- **Modellsvar:** «Skriv en generatorbasert Euler-løser med `yield` som gir
  `(t, y)` per skritt»; «Regn EOC fra en feilliste `[e10, e20, e40, e80]`».
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 10).

### Del 1 — Numerisk lineær algebra *(prioritet: PERFEKT — 77 %, TMA4320-signaturen)*

#### Kapittel 1.1: Vektor-/matrisenormer og kondisjonstall
**id:** `tma4320-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4320-0-2`

- **Kapitteltype:** teorikapittel (kunne → perfekt for feilforplantning).
- **Description:** Vektornormer (`1,2,∞`), indusert matrisenorm, kondisjonstall og
  feilforplantning i `Ax=b` — språket resten av lin.alg.-delen bruker for å måle
  nøyaktighet.
- **Eksamensbelegg:** Sjanger J (4/13, 31 %): regn `‖x‖₁,₂,∞`; bevis
  `‖x‖∞≤‖x‖₂≤‖x‖₁`; `‖A‖₁`=maks kolonnesum, `‖A‖∞`=maks radsum; `κ(A)=‖A‖‖A⁻¹‖`;
  feilforplantning `‖δx‖/‖x‖ ≤ κ(A)·‖δb‖/‖b‖` (K2022: gitt `‖A⁻¹‖∞=14`, finn
  `κ∞` + øvre grense). Prioritet: kunne (karakterskiller). Sjanger J.
- **Forkunnskaper/kryssbok:** kap. 0.2; lineær algebra-grunnlag (matrise-vektor-
  produkt) — lenk til [TMA4110 Lineær algebra](/tma4110/tma4110-1-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** normsymbolene,
  `κ(A)`, `δx`/`δb`.
- **Innholdskontrakt (`definition`/`theorem`):** vektornorm-aksiomer; `‖x‖₁,₂,∞`;
  indusert matrisenorm `‖A‖=max_{x≠0}‖Ax‖/‖x‖`; `‖A‖₁` kolonnesum, `‖A‖∞` radsum;
  `κ(A)=‖A‖‖A⁻¹‖`, velkondisjonert ⇔ `κ≈1`; feilforplantningsulikheten (bevis via
  `‖Ax‖≤‖A‖‖x‖`) — bevis kreves aktivt. `python`: `np.linalg.norm(x, ord=...)`,
  `np.linalg.cond`.
- **Typiske feil:** #7 (`‖A‖₁` vs. `‖A‖∞`; feil retning i ulikheten).
- **Modellsvar:** «Regn de tre normene til `x=(3,-4,0)ᵀ`; finn `‖A‖∞` og `κ∞(A)`
  for en gitt 2×2-matrise og bruk feilforplantningsgrensen».
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 1.2: SPD, Gershgorin og strengt diagonaldominans
**id:** `tma4320-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4320-1-1`

- **Kapitteltype:** teorikapittel (kunne, «liten fast oppgave»).
- **Description:** Tre relaterte matriseklasser og lokaliseringsverktøyet
  Gershgorin — grunnlaget for at Cholesky/naiv Gauss lar seg gjennomføre.
- **Eksamensbelegg:** Sjanger K (V2024 O3/O4b, V2026 O1a): sjekk `|aᵢᵢ|>Σ|aᵢⱼ|`
  (strengt diagonaldominant ⇒ inverterbar + naiv Gauss/LU gjennomførbar); SPD ⇔
  symmetrisk + positive egenverdier; **Gershgorin-teoremet** `|z−aᵢᵢ|≤Σ_{j≠i}|aᵢⱼ|`
  (brukes til å vise SPD i V2026). Prioritet: kunne. Sjanger K.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  diagonaldominans-kriteriet, Gershgorin-skivene, SPD-definisjonen.
- **Innholdskontrakt (`definition`/`theorem`):** strengt diagonaldominant;
  symmetrisk positiv definit (SPD); Gershgorin-teoremet (egenverdiene ligger i
  radvise sirkelskiver); kobling SPD → Cholesky mulig. `python`:
  `np.linalg.eigvals` for å sjekke positivitet.
- **Typiske feil:** bruke Gershgorin uten å begrunne SPD fullt; glemme
  symmetrikravet for SPD; feil radius (`Σ` skal ekskludere diagonalleddet).
- **Modellsvar:** «Vis at en gitt symmetrisk 3×3-matrise er SPD ved hjelp av
  Gershgorin, og konkluder at Cholesky lar seg gjennomføre».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.3: LU-faktorisering og (skalert delvis) pivotering
**id:** `tma4320-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** `tma4320-1-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Doolittle-LU uten pivotering og `PA=LU` med skalert delvis
  pivotering, med tilbakeløsning av `Ax=b` og obligatorisk verifikasjon.
- **Eksamensbelegg:** Sjanger H+I (H 10/13, 77 %; I: V2022 O4, K2023 O1). LU uten
  pivotering (ener på L-diagonalen); `PA=LU` med skaleringsvektor `sᵢ=max_j|aᵢⱼ|`,
  velg pivotrad som maksimerer `|aᵢₖ|/sᵢ`; løs `Ly=Pb`, `Ux=y`; **verifiser
  `A=LU`**. Prioritet: perfekt. Sjangre H, I.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:**
  `A=LU`, `PA=LU`, multiplikatorer `mᵢⱼ`, skaleringsvektor.
- **Innholdskontrakt (`theorem`/`text`):** Doolittle-algoritmen (utledes steg for
  steg); radbytter og multiplikatorer; skalert delvis pivotering (algoritme);
  tilbake-/forlengs-substitusjon. Utledning kreves aktivt. `python`: `scipy.linalg.lu`
  som referanse (men håndregning er eksamensmålet).
- **Typiske feil:** #6 (glemmer å oppdatere skaleringsvektoren ved radbytte); #8
  (fortegnsfeil i multiplikatorer); glemme verifikasjon.
- **Modellsvar:** «Faktoriser en 3×3-matrise med skalert delvis pivotering, løs
  `Ax=b`, og verifiser `PA=LU`».
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 1.4: Cholesky-faktorisering
**id:** `tma4320-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `tma4320-1-3`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** `A=WWᵀ` for SPD-matriser via de radvise formlene fra
  formelarket, med tilbakeløsning av `Ax=b` gjennom to triangulære systemer.
- **Eksamensbelegg:** Del av sjanger H (V2026 O1: «vis SPD via Gershgorin, finn
  Cholesky-faktoren `W`, løs `Ax=b`»; V2017/V2018 Cholesky). Prioritet: perfekt.
  Sjanger H (+ K-kobling).
- **Forkunnskaper/kryssbok:** kap. 1.3 (tilbakeløsning), 1.2 (SPD). `collapsible`
  **Symbol- og formelliste:** Cholesky-formlene `Wᵢⱼ` (`j<i`) og `Wᵢᵢ`.
- **Innholdskontrakt (`theorem`/`text`):** de radvise Cholesky-formlene (fra
  arket — kunne *bruke*, ikke pugge); krav SPD; løs `Wc=b`, `Wᵀx=c`; verifiser
  `A=WWᵀ`. `python`: `np.linalg.cholesky`.
- **Typiske feil:** #8 (glemmer at Cholesky krever SPD; regnefeil i kvadratrøttene).
- **Modellsvar:** «Finn Cholesky-faktoren til en gitt SPD 3×3-matrise og løs
  `Ax=b` med `W`».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.5: SVD og tridiagonal-/Hessenberg-løsere med flop-telling
**id:** `tma4320-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-1-3`

- **Kapitteltype:** teorikapittel (kunne/beredskap + kompleksitetsanalyse).
- **Description:** SVD-definisjon og gjenkjenning, og strukturerte løsere
  (tridiagonal/Hessenberg) med flop-/kompleksitetsanalyse — karakterskiller-stoff.
- **Eksamensbelegg:** Sjanger L (2/13, V2023/K2023): `A=UΣVᵀ`, avgjør om en gitt
  faktorisering ER en SVD, konstruer for liten matrise via `AᵀA`. Sjanger M (3/13):
  tridiagonal-rekursjon (`bᵢ′=bᵢ−(aᵢ/b′_{i−1})cᵢ`), flop-telling (tridiagonal
  `≈5n`=`O(n)`, full Gauss `O(n³)`, Hessenberg-LU `O(n²)`), pseudokode-analyse
  (V2024 Algoritme 1). Prioritet: kunne/beredskap. Sjangre L, M.
- **Forkunnskaper/kryssbok:** kap. 1.3, 1.1 (normer for SVD). `collapsible`
  **Symbol- og formelliste:** `A=UΣVᵀ`, singulærverdier `σ₁≥…≥0`, flop-notasjon
  `O(n)/O(n²)/O(n³)`.
- **Innholdskontrakt (`definition`/`theorem`):** SVD-definisjon (`U,V` ortogonale,
  `Σ` diagonal, `σ` synkende ikke-negative); gjenkjenningskriterier; tridiagonal
  Gauss-rekursjon + entydighetsbetingelse (strengt diagonaldominant); flop-telling.
  `python`: `np.linalg.svd`. Utledning av tridiagonal-rekursjonen kreves aktivt;
  full SVD-konstruksjon = beredskap.
- **Typiske feil:** feillest singulærverdi-rekkefølge; feil flop-orden (blande
  `O(n²)` og `O(n³)`); glemme `Σ` skal være ikke-negativ.
- **Modellsvar:** «Avgjør om en gitt faktorisering er en SVD»; «Tell flop for et
  tridiagonalt `n×n`-system og sammenlign med full Gauss».
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 1.6: Drillkapittel — numerisk lineær algebra
**id:** `tma4320-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-1-5`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Blandet drill på hele lin.alg.-blokken: LU/Cholesky-
  faktorisering + tilbakeløsning + verifikasjon, pivotering, normer/kondisjonstall,
  SPD/Gershgorin, SVD-gjenkjenning, flop-telling — på eksamensnivå.
- **Eksamensbelegg:** Sjangre H, I, J, K, L, M samlet (lin.alg. i ~10/13 sett).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.5. `collapsible` **Symbol- og formelliste:**
  samlet lin.alg.-oppslag (normer, `κ`, LU/Cholesky/SVD, flop).
- **Innholdskontrakt:** Løsningsoppskrift per sjanger (LU: eliminer → verifiser;
  Cholesky: sjekk SPD → radvise formler → løs → verifiser; pivotering:
  skaleringsvektor → maksimer forhold; normer: identifiser radsum/kolonnesum).
  Gjennomregnet eksamenscase med sensor-margnotater.
- **Typiske feil:** samlet #6, #7, #8; glemme verifikasjon på tvers.
- **Kvote:** 10 quiz / 8 flashcards (drillkapittel — oppgavetungt, lav
  definisjonskvote).

**Prøve-kvote Del 1:** 4 prøver (1.A normer/kondisjonstall + SPD/Gershgorin ·
1.B LU + pivotering (med verifikasjon) · 1.C Cholesky + SVD-gjenkjenning ·
1.D samlet lin.alg.-prøve på eksamensnivå inkl. flop-telling).

### Del 2 — Interpolasjon *(prioritet: PERFEKT — 69 %)*

#### Kapittel 2.1: Lagrange- og Newton-interpolasjon, feil og Chebyshev
**id:** `tma4320-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4320-0-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** De to interpolasjonsformene, interpolasjonsfeilformelen med
  øvre grense, og Chebyshev-nodenes min-max-fordel — den tredje faste søylen.
- **Eksamensbelegg:** Sjanger N (9/13, 69 %). Lagrange: kardinalfunksjoner
  `ℓₖ(x)=Π_{j≠k}(x−xⱼ)/(xₖ−xⱼ)`, `p(x)=Σyₖℓₖ(x)`, standardform `Σaᵢxⁱ` (V2025);
  Newton: dividerte differanser; **interpolasjonsfeil**
  `f(x)−pₙ(x)=ωₙ₊₁(x)·f⁽ⁿ⁺¹⁾(ξ)/(n+1)!`; **entydighetsbevis** (yndet, K2022);
  **Chebyshev-noder** minimerer `max|ωₙ₊₁|`. Prioritet: perfekt. Sjanger N.
- **Forkunnskaper/kryssbok:** kap. 0.2; polynom + derivasjon (R2-nivå).
  `collapsible` **Symbol- og formelliste:** `ℓₖ`, dividerte differanser, `ωₙ₊₁`,
  interpolasjonsfeilformelen, Chebyshev-noder.
- **Innholdskontrakt (`definition`/`theorem`):** Lagrange-kardinalfunksjoner;
  Newton-form + dividerte differanser; interpolasjonsfeil (feilformelen brukes til
  øvre grense ved å bounde hvert `|x−xᵢ|` og `|f⁽ⁿ⁺¹⁾|`); entydighetsbevis
  (kreves aktivt); Chebyshev min-max (nodeposisjoner fra `Tₙ(xᵢ)=0`). `python`:
  `np.polyfit`/`np.poly1d`, egen Lagrange-implementasjon.
- **Typiske feil:** #4 (feilformelen brukt på polynom uten laveste grad —
  K2016-fellen `(p(x))²`); feil node-teller/nevner i `ℓₖ`.
- **Modellsvar:** «Bestem de tre kardinalfunksjonene for nodene `−2,0,1`, skriv
  polynomet på formen `Σaᵢxⁱ`, og finn en øvre feilgrense på et gitt intervall».
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 2.2: Drillkapittel — interpolasjon
**id:** `tma4320-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4320-2-1`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Varianter av sjanger N: sett opp polynomet (Lagrange/Newton),
  legg til en node (Newton-fordel), regn feilgrense, sammenlign ekvidistante vs.
  Chebyshev-noder — på eksamensnivå.
- **Eksamensbelegg:** Sjanger N (9/13). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  interpolasjons-oppslag.
- **Innholdskontrakt:** Løsningsoppskrift (velg form → sett opp → standardform →
  feilgrense → node-valg). Gjennomregnet case med sensor-margnotater (delpoeng per
  steg).
- **Typiske feil:** #4; blande Lagrange- og Newton-notasjon.
- **Kvote:** 10 quiz / 8 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A Lagrange-form + standardform · 2.B Newton +
dividerte differanser + legge til node · 2.C interpolasjonsfeil + Chebyshev ·
2.D samlet interpolasjonsprøve på eksamensnivå inkl. entydighetsbevis).

### Del 3 — Numerisk integrasjon (kvadratur) *(prioritet: PERFEKT — 85 %)*

#### Kapittel 3.1: Kvadraturregler, presisjonsgrad og feilestimat
**id:** `tma4320-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4320-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Midtpunkt/trapes/Simpson/Boole + sammensatte varianter,
  presisjonsgrad, vektbestemmelse, sammensatt/adaptiv feilestimat — den fjerde
  søylen (nest høyest frekvens).
- **Eksamensbelegg:** Sjanger O (11/13, 85 %). Kvadraturregler + sammensatte;
  **presisjonsgrad** (test på `xⁿ` til den feiler / les fra feilleddets deriverte-
  orden: Boole har `f⁽⁶⁾` → grad 5); **vektbestemmelse** (integrer Lagrange-basis
  `ωᵢ=∫ℓᵢ` eller krev eksakthet for `1,x,x²,…` — V2025); **sammensatt feilgrense**
  (additivitet + enkeltintervall, bevisoppgave — V2025 Boole
  `≤(b−a)h⁶/(945·4⁷)·max|f⁽⁶⁾|`); **adaptiv** (dobling → Richardson-feilestimat).
  Prioritet: perfekt. Sjanger O.
- **Forkunnskaper/kryssbok:** kap. 2.1 (Lagrange-basis for vektbestemmelse).
  `collapsible` **Symbol- og formelliste:** kvadraturvekter, presisjonsgrad `d`,
  feilformlene per regel, Richardson-estimatet.
- **Innholdskontrakt (`definition`/`theorem`):** midtpunkt/trapes/Simpson/Boole
  (noder, vekter, feilledd); sammensatte varianter; presisjonsgrad-definisjon;
  vektbestemmelse via Lagrange-integrasjon; sammensatt-feil-bevis (kreves aktivt);
  adaptiv/Richardson-estimat. `python`: `scipy.integrate.quad/simpson` som
  referanse; egen sammensatt-Simpson-implementasjon (kobler til sjanger S).
- **Typiske feil:** #5 (presisjonsgrad feilbestemt); feil deriverte-orden i
  feilleddet; glemme faktor ved sammensatt regel.
- **Modellsvar:** «Bestem vektene så regelen med nodene `−2,0,1` har presisjonsgrad
  ≥2 på `[−2,1]`»; «Utled sammensatt Boole-feilestimat».
- **Kvote:** 24 quiz / 22 flashcards.

#### Kapittel 3.2: Drillkapittel — kvadratur
**id:** `tma4320-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4320-3-1`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Varianter av sjanger O: velg/anvend regel, bestem presisjonsgrad,
  regn feilgrense/panelantall, vektbestemmelse, adaptiv dobling — på eksamensnivå.
- **Eksamensbelegg:** Sjanger O (11/13). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  kvadratur-oppslag.
- **Innholdskontrakt:** Løsningsoppskrift (identifiser regel → noder/vekter →
  feilledd/presisjonsgrad → sammensatt/adaptiv). Gjennomregnet case med
  sensor-margnotater; inkl. «hvor mange paneler for gitt toleranse».
- **Typiske feil:** #5; feil `h` i sammensatt feil.
- **Kvote:** 10 quiz / 8 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A midtpunkt/trapes/Simpson + feil · 3.B Boole +
sammensatt + presisjonsgrad · 3.C vektbestemmelse + adaptiv/Richardson · 3.D
samlet kvadraturprøve på eksamensnivå inkl. sammensatt-feil-bevis).

### Del 4 — Rotsøking *(prioritet: KUNNE — fikspunkt 46 % / Newton 31 %)*

#### Kapittel 4.1: Fikspunktiterasjon og fikspunktteoremet
**id:** `tma4320-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-0-2`

- **Kapitteltype:** teorikapittel (kunne — billig å teste, yndet bevis).
- **Description:** `x=g(x)`, lokal og global konvergens, konvergensrate, og
  beviset av fikspunktteoremet.
- **Eksamensbelegg:** Sjanger P (6/13, 46 %). Lokal konvergens ⇔ `|g′(r)|<1`;
  rate `=|g′(r)|`; superlineær hvis `g′(r)=0`; global (fikspunktteoremet):
  `g([a,b])⊆(a,b)` **og** `|g′|≤L<1`; **bevis av fikspunktteoremet** (yndet, V2022);
  studenten velger selv passende intervall (K2022 `x_{k+1}=√(2−x_k)→1`). Prioritet:
  kunne. Sjanger P.
- **Forkunnskaper/kryssbok:** kap. 0.2; derivasjon + middelverdisetningen (R2/
  kalkulus). `collapsible` **Symbol- og formelliste:** `g(x)`, `g′(r)`, kontraksjon,
  konvergensrate.
- **Innholdskontrakt (`definition`/`theorem`):** fikspunkt; lokal konvergens +
  rate; fikspunktteoremet (begge vilkår) + bevis (kreves aktivt); superlineær
  konvergens. `python`: enkel fikspunkt-iterator.
- **Typiske feil:** #3 (kun ett vilkår); velge intervall der `g` ikke er
  selvavbildende.
- **Modellsvar:** «Vis at `x_{k+1}=√(2−x_k)` konvergerer mot `x=1` for alle `x₀` i
  et intervall du selv velger; oppgi konvergensraten».
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.2: Newtons metode (skalar + system) og biseksjon
**id:** `tma4320-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-4-1`

- **Kapitteltype:** teorikapittel (kunne; Newton-system trengs for implisitte ODE).
- **Description:** Newton skalar + for system (Jacobi), lokal kvadratisk
  konvergens, og biseksjon med garantert feilgrense.
- **Eksamensbelegg:** Sjanger Q (Newton 4/13, biseksjon 1/13). Newton skalar
  `x_{k+1}=x_k−f/f′` (1–2 iterasjoner for hånd; `g_N′(r)=0`); **Newton for system**
  `J(x_k)(x_{k+1}−x_k)=−F(x_k)` (2×2-Jacobi — brukes til implisitte ODE-skritt);
  biseksjon `(b−a)/2^k<Tol`. Prioritet: kunne. Sjanger Q.
- **Forkunnskaper/kryssbok:** kap. 4.1; Jacobi-matrise (partiell derivasjon) — lenk
  til [TMA4135](/tma4135/tma4135-1-1) `(verifiser lenke)` ved behov.
  `collapsible` **Symbol- og formelliste:** Newton-oppdatering, Jacobi `J`,
  biseksjons-feilgrense.
- **Innholdskontrakt (`definition`/`theorem`):** Newton skalar + kvadratisk
  konvergens; Newton-system (løs lineært 2×2 per steg); biseksjon + feilgrense.
  `python`: `np.roots` (implisitte skritt), egen Newton-system-løser med
  `np.linalg.solve`.
- **Typiske feil:** glemme å oppdatere Jacobi per steg; feil fortegn i
  `−F(x_k)`; feil biseksjons-teller.
- **Modellsvar:** «Gjør to Newton-iterasjoner på `f(x)=x²−2`; sett opp og løs ett
  Newton-steg for et 2×2-system».
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A fikspunkt: konvergens + rate · 4.B
fikspunktteoremet (bevis) + intervallvalg · 4.C Newton skalar + system (Jacobi) ·
4.D samlet rotsøkingsprøve inkl. biseksjon-feilgrense).

### Del 5 — Numeriske metoder for ODE *(prioritet: PERFEKT — 100 %, bæresøylen)*

#### Kapittel 5.1: Fra høyere ordens ODE til førsteordens system + eksplisitte metoder
**id:** `tma4320-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4320-4-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** System-omskriving (sjanger A) og ett/to skritt med eksplisitte
  metoder (Euler, Heun/forbedret Euler, RK4) for hånd — inngangen til hele
  ODE-blokken.
- **Eksamensbelegg:** Sjanger A (de facto hvert ODE-sett) + B (eksplisitt del,
  ~100 %). Innfør `y₁=u,y₂=u′,…`, skriv `y′=f(t,y)`, bær initialbetingelser;
  regn `k₁,k₂,(k₃,…)` sekvensielt (V2024 Euler, V2023 2-nivå RK). Prioritet:
  perfekt. Sjangre A, B.
- **Forkunnskaper/kryssbok:** kap. 0.2 (Python-løser), 4.2. `collapsible`
  **Symbol- og formelliste:** `y′=f(t,y)`, `y_{n+1}=yₙ+hΣbᵢkᵢ`, Euler/Heun/RK4-
  formlene.
- **Innholdskontrakt (`definition`/`theorem`):** system-omskriving-prosedyren;
  eksplisitt Euler, Heun/forbedret Euler, RK4 (fra arket — bruk, ikke pugg);
  ett-/to-skritt-håndregning. `python`: generatorbasert Euler/RK4-løser (fra 0.2).
  Utledning av system-omskrivingen kreves aktivt.
- **Typiske feil:** feil ordning av komponentene; glemme å bære
  initialbetingelser; regnefeil i sekvensielle `kᵢ`.
- **Modellsvar:** «Skriv `u‴+t·u″+cos u=0`, `u(1)=2,u′(1)=1.5,u″(1)=−0.5` som
  førsteordens system og ta ett Euler-skritt med `h=0.1`».
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 5.2: Implisitte metoder og rotvalg
**id:** `tma4320-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4320-5-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Implisitt Euler, implisitt midtpunkt og Crank–Nicolson for hånd
  — der de ikke-lineære `k`-likningene settes opp og riktig rot velges.
- **Eksamensbelegg:** Sjanger B (implisitt del, ~100 %). Sett opp og løs de
  implisitte `k`-/`w_{n+1}`-likningene (andregradslikning for hånd eller
  `np.roots`); **velg grenen nærmest `f(y₀)` / fysisk rimelig** (fasit gjør dette
  eksplisitt hver gang). Prioritet: perfekt. Sjanger B.
- **Forkunnskaper/kryssbok:** kap. 5.1, 4.2 (Newton for ikke-lineære skritt).
  `collapsible` **Symbol- og formelliste:** implisitt Euler/midtpunkt/Crank–
  Nicolson-formlene, andregradsrot-valg.
- **Innholdskontrakt (`definition`/`theorem`):** implisitt Euler, implisitt
  midtpunkt, Crank–Nicolson; oppsett og løsning av det implisitte skrittet;
  rotvalgs-regelen (begrunn valget). `python`: implisitt skritt via `np.roots`
  eller Newton.
- **Typiske feil:** #1 (feil rotvalg); feil oppsett av den implisitte likningen.
- **Modellsvar:** «Ta ett implisitt Euler-skritt på `y′=y²+t`, `y(0)=1`, `h=0.1`;
  løs andregradslikningen og begrunn rotvalget».
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.3: Butcher-tablå og ordensbetingelser
**id:** `tma4320-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4320-5-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Les/skriv Butcher-tablået `c|A;b` og bestem/verifiser ordenen
  rad for rad fra ordensbetingelsene på formelarket.
- **Eksamensbelegg:** Sjanger C (7/13, 54 %, men de facto i nesten hver
  ODE-oppgave). `Σbᵢ=1` (p=1), `Σbᵢcᵢ=½` (p=2), `Σbᵢcᵢ²=⅓` og `Σbᵢaᵢⱼcⱼ=⅙` (p=3),
  orden-4-settet; ordenen = høyeste `p` der alt holder; oversett implisitt metode
  til tablå (Crank–Nicolson → 2-nivå implisitt tablå, V2025). Prioritet: perfekt.
  Sjanger C.
- **Forkunnskaper/kryssbok:** kap. 5.2. `collapsible` **Symbol- og formelliste:**
  Butcher-tablå `c|A;b`, ordensbetingelsene t.o.m. orden 4.
- **Innholdskontrakt (`definition`/`theorem`):** Butcher-tablå-notasjon;
  ordensbetingelsene (fra arket — bruk); prosedyre for å bestemme orden;
  tablå-oversetting for implisitte metoder. `python`: verifiser
  ordensbetingelser numerisk fra `A,b,c`-arrayer.
- **Typiske feil:** #2 (ufullstendig ordenssjekk; feillest tablå, særlig `aᵢⱼ`/`c`
  for implisitte metoder).
- **Modellsvar:** «Skriv Crank–Nicolson som en RK-metode, utled Butcher-tablået og
  bestem konsistensordenen via ordensbetingelsene».
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 5.4: Stabilitet — `R(z)`, stabilitetsområde, A-stabilitet og stive systemer
**id:** `tma4320-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `tma4320-5-3`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Stabilitetsfunksjonen `R(z)`, stabilitetsområdet,
  A-stabilitet, stivhet, og lineær stabilitetsanalyse for systemer via egenverdier.
- **Eksamensbelegg:** Sjanger D (7/13, 54 %) + E. `y_{n+1}=R(z)y_n`, `z=λh`;
  eksplisitt Euler `R=1+z`, implisitt Euler `R=1/(1−z)`, Crank–Nicolson
  `R=(1+z/2)/(1−z/2)`; stabilitetsområde `S={z:|R(z)|≤1}`; **A-stabilitet**
  (`S⊇ℂ⁻`) vist via `|1+z/2|²≤|1−z/2|²` for `Re z≤0`; stivhet; **system**: `y′=Ay`,
  krav `|R(hλ)|≤1` for alle egenverdier gir maks `h` (V2023: `λ=−1±4i` →
  `h∈(0,2/17)`). Prioritet: perfekt. Sjangre D, E.
- **Forkunnskaper/kryssbok:** kap. 5.3; komplekse tall + egenverdier — lenk til
  [TMA4110](/tma4110/tma4110-1-1) `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** `R(z)`, `z=λh`, `S`, A-stabilitet, stivhet.
- **Innholdskontrakt (`definition`/`theorem`):** `R(z)` for de tre standardmetodene
  (utled via testligningen); stabilitetsområde; A-stabilitet (definisjon + bevis
  for Crank–Nicolson, kreves aktivt); stivhet (motivasjon); system-analyse
  (egenverdier → maks `h`, kompleks-tilfelle via `|R(hλ)|²`). `python`: plott
  `|R(z)|=1`-kurve; sjekk egenverdi-betingelse.
- **Typiske feil:** #9 (A-stabilitet vs. stabilitetsområde forvekslet; feil
  egenverdi ved maks skritt for system).
- **Modellsvar:** «Finn `R(z)` for Crank–Nicolson og vis at stabilitetsområdet er
  hele venstre halvplan (A-stabil)»; «For `y′=Ay` med `λ=−1±4i`, finn maks `h`».
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 5.5: Konvergens, lokal vs. global feil og innfelt RK-par med steglengdekontroll
**id:** `tma4320-5-5` · **number:** 5.5 · **estimatedMinutes:** 65 · **prerequisites:** `tma4320-5-4`

- **Kapitteltype:** teorikapittel (perfekt — toppsjikt-bevis + stigende sjanger).
- **Description:** Lokal avbruddsfeil vs. global feil, beviset for global feil
  `O(hᵖ)`, og innfelt RK-par med lokalt feilestimat + adaptiv steglengde.
- **Eksamensbelegg:** Sjanger G (5/13, 38 %) + F (V2023/K2023, stigende). **Lokal
  vs. global feil** (definer begge; global ≠ sum av lokale); lokal avbruddsfeil for
  Euler via Taylor (`½h²y″(ξ)`); **bevis global feil `O(hᵖ)`** (fra Lipschitz,
  `|e_{n+1}|≤(1+hM)|e_n|+Dh^{p+1}`, geometrisk sum, `1+hM≤e^{hM}`); **innfelt par**:
  to `b`-rader, `ϵ̂=h|Σ(bᵢ−b̂ᵢ)kᵢ|`, aksepter hvis `ϵ̂≤Tol`, ny
  `h_new=P·(Tol/ϵ̂)^{1/(p+1)}·h`. Prioritet: perfekt. Sjangre G, F.
- **Forkunnskaper/kryssbok:** kap. 5.4; Taylor-utvikling + Lipschitz-begrep.
  `collapsible` **Symbol- og formelliste:** lokal/global feil, Lipschitz-konstant
  `M`, `(1+hM)`, innfelt-par-formlene, `h_new`.
- **Innholdskontrakt (`definition`/`theorem`):** lokal avbruddsfeil; global feil +
  bevis `O(hᵖ)` (kreves aktivt, steg for steg med intuisjon); innfelt RK-par +
  steglengdekontroll (algoritme). `python`: adaptiv RK-par-løser (accept/reject +
  `h_new`).
- **Typiske feil:** #10 (global feil = sum av lokale); glemme sikkerhetsfaktor `P`;
  feil eksponent `1/(p+1)`.
- **Modellsvar:** «Bevis at global feil for en `p`-te ordens ettskrittsmetode er
  `O(hᵖ)`»; «Med et gitt innfelt par: regn `y₁,ŷ₁`, feilestimat og ny steglengde».
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 5.6: Drillkapittel — ODE-numerikk
**id:** `tma4320-5-6` · **number:** 5.6 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-5-5`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Blandet drill på hele ODE-blokken: system-omskriving, ett/to
  skritt (eksplisitt + implisitt m/rotvalg), Butcher/orden, `R(z)`/A-stabilitet/
  system-egenverdier, global-feil-bevis, innfelt par — på eksamensnivå.
- **Eksamensbelegg:** Sjangre A, B, C, D, E, F, G samlet (ODE i 13/13 sett).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.5. `collapsible` **Symbol- og
  formelliste:** samlet ODE-oppslag (Butcher, `R(z)`, ordensbetingelser, feil).
- **Innholdskontrakt:** Løsningsoppskrift per sjanger (A: innfør variabler → skriv
  system; B: identifiser eksplisitt/implisitt → regn `kᵢ` / løs rot + begrunn; C:
  les tablå → sjekk ordensbetingelser; D/E: testligning → `R(z)` → område /
  egenverdier). Gjennomregnet case med sensor-margnotater.
- **Typiske feil:** samlet #1, #2, #9, #10; glemme rotvalgsbegrunnelse.
- **Kvote:** 12 quiz / 8 flashcards.

**Prøve-kvote Del 5:** 5 prøver (5.A system-omskriving + eksplisitt skritt · 5.B
implisitt skritt + rotvalg · 5.C Butcher + ordensbetingelser · 5.D `R(z)` +
A-stabilitet + system-egenverdier · 5.E global-feil-bevis + innfelt par/
steglengde). *(Bæresøylen → 5 prøver, én ekstra utover minstekravet.)*

### Del 6 — Randverdiproblem for ODE *(prioritet: KJENNE — 15 %, stigende V2026)*

#### Kapittel 6.1: Randverdiproblem — differanse, propagasjonsmatrise og `solve_bvp`
**id:** `tma4320-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-5-2`

- **Kapitteltype:** teorikapittel (kjenne, nytt tyngdepunkt).
- **Description:** Løsning av randverdiproblem for ODE: differansemetode,
  propagasjonsmatrise, lineær «shooting», og kobling til `scipy.solve_bvp`.
- **Eksamensbelegg:** Sjanger U (2/13, V2026 O2, K2017 bjelke). For lineære
  systemer: propagasjonsmatrise `M(xₙ,h)` med `[y_{n+1};v_{n+1}]=M·[yₙ;vₙ]`;
  produkt `T=M_{N−1}···M₀`; bestem `v₀` fra randbetingelsene (`y_N=T·[y₀;v₀]`
  løst for `v₀`); implisitt Euler for system (lineært 2×2); kobling til
  `solve_bvp` i prosjekt. Prioritet: kjenne (stigende). Sjanger U.
- **Forkunnskaper/kryssbok:** kap. 5.2 (implisitt skritt), 1.3 (lineære systemer).
  `collapsible` **Symbol- og formelliste:** propagasjonsmatrise `M`, `T`,
  randbetingelser, `solve_bvp`-signatur.
- **Innholdskontrakt (`definition`/`theorem`):** randverdiproblem vs.
  initialverdiproblem; propagasjonsmatrise + produkt; bestem manglende startverdi;
  differansemetode-oppsett. `python`: `scipy.integrate.solve_bvp` (`fun`/`bc`-
  struktur — kobler til sjanger T i Del 9).
- **Typiske feil:** feil rekkefølge i matriseproduktet `T`; feil oppsett av
  randbetingelsene; blande initial- og randverdiproblem.
- **Modellsvar:** «Sett opp propagasjonsmatrisen for et lineært 2-punkts
  randverdiproblem og bestem `v₀` fra randbetingelsene».
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A propagasjonsmatrise · 6.B lineær shooting/
`v₀`-bestemmelse · 6.C differansemetode-oppsett · 6.D samlet BVP-prøve +
`solve_bvp`-forståelse). *(Under minstekrav-terskel per del: 4 prøver leveres selv
om temaet er ett kapittel, jf. CLAUDE.md ≥4 prøver per tema.)*

### Del 7 — DFT/FFT og spektralmetoder *(prioritet: KUNNE — 23 %)*

#### Kapittel 7.1: DFT og FFT — utregning, egenskaper og operasjonstelling
**id:** `tma4320-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-0-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Diskret Fourier-transform for hånd (N=3), egenskaper (reell
  input, reversering/skift, invers via `F̄`), og `O(n log n)`-operasjonstellingen.
- **Eksamensbelegg:** Sjanger R (3/13, 23 %). `y=F_N x`,
  `y_k=(1/√N)Σx_j e^{−i2πjk/N}` for `N=3`; `x∈ℝⁿ⇒y_{n−k}=ȳ_k`; invers `F⁻¹=F̄`;
  **bevis egenskaper** (reversering/skift); **operasjonstelling** FFT `O(n log n)`
  vs. Newton-dividerte-differanser `O(n²)`. Prioritet: kunne. Sjanger R.
- **Forkunnskaper/kryssbok:** kap. 0.2; komplekse eksponentialer + Euler-formelen.
  `collapsible` **Symbol- og formelliste:** DFT-formelen, `w=e^{2πi/N}`, `1/√N`
  (unitær konvensjon), `F⁻¹=F̄`.
- **Innholdskontrakt (`definition`/`theorem`):** DFT-definisjon (unitær konvensjon
  `1/√N`); egenskaper + bevis (kreves aktivt); FFT-idé + `O(n log n)`. `python`:
  `scipy.fft.fft/ifft` (advar om normeringskonvensjon vs. `1/√N`).
- **Typiske feil:** #11 (normering `1/√N` vs. `1/N`); feil fortegn i eksponenten;
  blande DFT og invers.
- **Modellsvar:** «Regn `F₃ x` for `x=(1,0,-1)ᵀ` for hånd og vis at den reelle
  inputens transform tilfredsstiller `y_{3−k}=ȳ_k`».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 7.2: Fourier-spektralløser for varmeligningen (kode-grunnlag)
**id:** `tma4320-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-7-1`

- **Kapitteltype:** kodefag-kapittel (kunne — grunnlag for sjanger S/prosjekt).
- **Description:** Fourier-spektralmetode i rom (DFT) + Crank–Nicolson i tid for
  varmeligningen i 2D med periodiske randbetingelser, implementert som en
  `yield`-generator med `scipy.fft` — V2025-prosjektets kjerne.
- **Eksamensbelegg:** Del av sjanger S (V2025 O4, ren kode-oppgave + EOC).
  Spektralløser: `scipy.fft.fft2/ifft2/fftfreq` (`·2π`), `np.meshgrid/linspace`
  (`endpoint=False`), tidsløkke, EOC mot manufactured solution. Prioritet: kunne
  (kodegrunnlag). Sjanger S.
- **Forkunnskaper/kryssbok:** kap. 7.1, 5.2 (Crank–Nicolson), 0.2 (`scipy.fft`,
  generatorer, EOC). `collapsible` **Symbol- og formelliste:** `fft2/ifft2/fftfreq`,
  bølgetall `k`, `endpoint=False`, EOC-formelen.
- **Innholdskontrakt (`text`/`python`):** spektralmetode-idé (deriverte → `ik·`
  i Fourier-rom); Crank–Nicolson i tid; periodisk rutenett (`endpoint=False`);
  `yield`-generator-struktur; konvergensstudie (`N_t=10,20,40,80` → `L∞L∞`-feil →
  EOC). Kjørbar `python`-referanseimplementasjon. Ingen tung PDE-teori (jf. §1
  «bevisst nedprioritert»).
- **Typiske feil:** #12 (feil `fftfreq`-skalering `·2π`; `endpoint=True` der
  periodisk krever `False`; off-by-one i tidsløkka).
- **Modellsvar:** «Fyll ut en `heat_equation_solver`-generator med `scipy.fft` og
  kjør en EOC-konvergensstudie».
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A DFT for hånd (N=3) · 7.B DFT-egenskaper +
bevis · 7.C operasjonstelling `O(n log n)` · 7.D spektralløser-kode +
EOC-forståelse).

### Del 8 — Maskinlæring: nevrale nett og PINN *(prioritet: KJENNE — 8 %, nytt V2026, stigende)*

#### Kapittel 8.1: Nevrale nettverk og fysikk-informerte nettverk (PINN)
**id:** `tma4320-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-4-2`

- **Kapitteltype:** teorikapittel (kjenne — nytt primærmål).
- **Description:** Dypt fullt koblet nettverk, tapsfunksjonen (PINN-ledd), trening
  ved gradientmetode + learning rate, og automatisk derivasjon — V2026-teoristoffet.
- **Eksamensbelegg:** Sjanger V (1/13, V2026 O3, nytt). Beskriv nettverk som
  komposisjon `f_{θ,i}(x)=σ(W_i x+b_i)` (ReLU/sigmoid), tell parametre
  `Σ(nᵢ·n_{i−1}+nᵢ)`; **tapsfunksjon** (avvik ønsket–faktisk, minimeres over `θ`);
  **PINN-ledd** (dataavvik + fysikk/differanseskjema + rand-/initialverdi +
  regularisering `R(θ)`); **trening** `θ^{(k+1)}=θ^{(k)}−τ_k∇_θE`; **automatisk
  derivasjon** sin rolle. Prioritet: kjenne (dekk grundig — trend oppadgående).
  Sjanger V.
- **Forkunnskaper/kryssbok:** kap. 4.2 (gradientmetode/iterasjon), 0.2. Ingen
  dyp ML-forkunnskap forutsettes — begreper forklares fra bunnen. `collapsible`
  **Symbol- og formelliste:** `θ,W_i,b_i,σ,E(θ),∇_θE,τ_k`, PINN-tapsleddene.
- **Innholdskontrakt (`definition`/`text`):** fullt koblet nettverk (lag,
  aktiveringsfunksjon, parametertelling); tapsfunksjon; PINN-tapsledd; trening
  (gradientmetode + learning rate); automatisk derivasjon (idé, ikke
  implementasjon). Rent teoristoff — «forklar med ord» slik V2026 ber om.
- **Typiske feil:** #13 (vage svar uten faktisk kjennskap til tapsleddene);
  forveksle data-/fysikk-/rand-ledd; blande learning rate og gradient.
- **Modellsvar:** «Beskriv strukturen til et dypt fullt koblet nettverk og tell
  parametrene»; «List opp de typiske leddene i en PINN-tapsfunksjon og forklar
  hva hvert måler».
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A nettverksstruktur + parametertelling · 8.B
tapsfunksjon + PINN-ledd · 8.C trening + gradientmetode + learning rate · 8.D
autodiff + samlet ML-teoriprøve).

### Del 9 — Prosjekt-Python og kode-/forklaringssjangre *(prioritet: PERFEKT — kode 30 % + skriftlig del)*

#### Kapittel 9.1: Kjernemetodene i Python + EOC-konvergensstudie (sjanger S)
**id:** `tma4320-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4320-7-2`

- **Kapitteltype:** kodefag-drillkapittel (perfekt).
- **Description:** Alle kjernemetodene fra Del 1–7 samlet som kjørbar Python, og
  drill på den rene kode-oppgave-sjangeren (fullfør en funksjon + EOC).
- **Eksamensbelegg:** Sjanger S (V2025 O4, forvent flere). Fullfør en gitt
  Python-funksjon (spektralløser, RK-løser, kvadratur, LU) + **konvergensstudie**
  (`EOC=log(err_k/err_{k+1})/log 2`). Prioritet: perfekt (kode 30 % + skriftlig).
  Sjanger S.
- **Forkunnskaper/kryssbok:** kap. 0.2, 3.1, 5.1–5.2, 7.2. `collapsible`
  **Symbol- og formelliste:** API-oppslag (`np.linalg`, `scipy.fft`, `scipy.
  integrate`, `np.roots`, `yield`, EOC).
- **Innholdskontrakt (`text`/`python`):** samlet kodebibliotek (Euler/RK-løser,
  sammensatt Simpson, LU/Cholesky, DFT-løser) som kjørbare funksjoner;
  kode-lesing/-fullføring; EOC-mønsteret; feilsøkings-sjekkliste (#12). Drill-DNA:
  8–15 kode-varianter.
- **Typiske feil:** #12 (off-by-one, `fftfreq`-skalering, `endpoint`); feil
  EOC-indeksering.
- **Modellsvar:** «Fullfør en `rk_step`-funksjon og kjør EOC for `h,h/2,h/4`»;
  «Fullfør en `composite_simpson`-funksjon og verifiser presisjonsgrad numerisk».
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 9.2: Prosjektforklaringssjangeren (sjanger T) — `solve_bvp`, «flattening», ML
**id:** `tma4320-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4320-9-1`

- **Kapitteltype:** drillkapittel (perfekt — prosjektforklaring på skriftlig del).
- **Description:** Å forklare med ord hvordan et konkret prosjekt ble løst i kode:
  `solve_bvp`-oppsett, «flattening» av komplekse matriser til reell vektor,
  PINN-tapsledd — sjanger T.
- **Eksamensbelegg:** Sjanger T (V2026 O2e, referanser V2017/K2017). «Forklar
  hvordan du i prosjekt 3 tilpasset Usadel-ligningene til `solve_bvp`»: 4 komplekse
  2×2-matriser flatet ut til reell 32-vektor; `fun`/`bc`-struktur. Prioritet:
  perfekt (den som ikke gjorde prosjektet taper poeng — boka simulerer erfaringen).
  Sjanger T.
- **Forkunnskaper/kryssbok:** kap. 6.1 (`solve_bvp`), 8.1 (PINN), 7.2 (spektral).
  `collapsible` **Symbol- og formelliste:** `solve_bvp(fun, bc, x, y)`-signatur,
  flattening-mønsteret, prosjekt-metodekartet.
- **Innholdskontrakt (`text`/`python`):** prosjektarketyper og metodene de tester
  (RK, BVP/`solve_bvp`, spektral/FFT, PINN); flattening-mønster (kompleks →
  reell vektor, dimensjonstelling); `fun`/`bc`-funksjonsstruktur; hvordan skrive en
  presis prosjektforklaring. **Merk:** prosjektbeskrivelsene ligger ikke i arkivet
  → metodene er belagt, det spesifikke domenet `(verifiser)`; boka trener
  *forklaringsevnen* og *metodene*, ikke det årlige anvendelsesdomenet.
- **Typiske feil:** #13 (vage svar uten kjennskap til flattening-dimensjon/`fun`/
  `bc`-signaturer).
- **Modellsvar:** «Forklar hvordan 4 komplekse 2×2-matriser flates ut til en reell
  32-vektor for `solve_bvp`, og hvordan `fun` og `bc` struktureres».
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A fullfør kode-funksjon + EOC · 9.B
kode-lesing/feilsøking · 9.C prosjektforklaring `solve_bvp`/flattening · 9.D
samlet kode-/prosjektprøve på skriftlig-del-format).

### Del 10 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Sjangerspill — løsningsoppskrifter A–V og tidsbudsjett
**id:** `tma4320-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4320-9-2`

- **Kapitteltype:** sjangerspill-kapittel (meta).
- **Description:** Én-linjes løsningsoppskrift + tidsbudsjett + vanligste feil per
  sjanger A–V, samlet som studentens sjekkliste for en 4-timers eksamen.
- **Eksamensbelegg:** Hele arkivet (alle sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1 (sjangerkatalogen), 1–9. `collapsible`
  **Symbol- og formelliste:** samlet sjanger→oppskrift-kort (bokas «samlede
  oppslagskort», printbar tabell).
- **Innholdskontrakt:** for hver sjanger A–V: én-linjes oppskrift, tidsbudsjett,
  hyppigste feil (#-kode), hvilken del/kapittel den bor i. Prognose for neste sett
  (analysen §7). Kald-bank-henvisning (i 10.2–10.4).
- **Typiske feil:** metafeil — feil prioritering under tidspress (#14);
  gjenkjenne feil sjanger.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 10.2: Øvingseksamen 1 (2016–2018-profil: rotsøking/interpolasjon/kvadratur-tung)
**id:** `tma4320-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `tma4320-10-1`

- **Kapitteltype:** øvingseksamen (perfekt).
- **Description:** Komplett nyskrevet 4-timers sett i den eldre profilen (kode B):
  fikspunkt/Newton, interpolasjon + feil, adaptiv kvadratur, LU/Cholesky, ett
  RK-skritt, DFT — med A-fasit i collapsibles.
- **Eksamensbelegg:** Speiler V2016–V2018-fordelingen (analysen §2/§8).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1–9. Ingen ny symbol-liste (oppgaver).
- **Innholdskontrakt:** 5–6 vektede oppgaver som speiler temafordelingen; A-fasit
  per oppgave i `collapsible` med delpoeng-notat; **selvdiagnose-sjekkliste** etter
  fasiten (jf. README). Kald-bank-oppgaver merket.
- **Typiske feil:** samlet register; pausepunkt-markører mellom oppgavene.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.3: Øvingseksamen 2 (2023–2024-profil: lin.alg.-tung + innfelt par + bevis)
**id:** `tma4320-10-3` · **number:** 10.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4320-10-2`

- **Kapitteltype:** øvingseksamen (perfekt).
- **Description:** Komplett nyskrevet 4-timers sett i den tunge lin.alg.-profilen
  (kode C, prosentvekting): LU/SVD/normer/kondisjonstall/tridiagonal+flop, RK-par +
  steglengde, A-stabilitet, global-feil-bevis — med A-fasit.
- **Eksamensbelegg:** Speiler V2023–V2024-fordelingen. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1–9.
- **Innholdskontrakt:** 6 oppgaver med eksplisitt prosentvekting (sum 100 %);
  A-fasit + delpoeng; selvdiagnose-sjekkliste; kald-bank-oppgaver merket.
- **Typiske feil:** samlet register; #14 tidsfelle på tunge oppgaver.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.4: Øvingseksamen 3 (2025–2026-profil: kode + prosjekt + ML)
**id:** `tma4320-10-4` · **number:** 10.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4320-10-3`

- **Kapitteltype:** øvingseksamen (perfekt).
- **Description:** Komplett nyskrevet sett i den moderne profilen: SPD/Gershgorin/
  Cholesky, system↔skalar ODE + implisitt Euler + propagasjonsmatrise/BVP,
  Crank–Nicolson (Butcher/`R(z)`/orden), ren kode-oppgave + EOC,
  prosjektforklaring (`solve_bvp`), PINN-teori — med A-fasit.
- **Eksamensbelegg:** Speiler V2025–V2026-fordelingen. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1–9.
- **Innholdskontrakt:** 3–4 poeng-/likt-vektede oppgaver inkl. én ren kode-oppgave
  og ett prosjekt-/ML-spørsmål; A-fasit + helhetsvurderings-notat for kode/prosjekt;
  selvdiagnose-sjekkliste; **kald bank** (8–10 oppgaver uten hint, momentliste-fasit)
  plassert her.
- **Typiske feil:** samlet register; #12 kode-feil; #13 prosjekt-vaghet.
- **Kvote:** 6 quiz / 4 flashcards.

**Prøve-kvote Del 10:** de tre øvingseksamenene ER prøvene (komplette sett);
sjangerspillet (10.1) er repetisjons-/oppslagsstoff.

### Del 11 — Repetisjon og oppslag *(prioritet: KUNNE (meta))*

#### Kapittel 11.1: Formel- og mønsteroppslag
**id:** `tma4320-11-1` · **number:** 11.1 · **estimatedMinutes:** 40 · **prerequisites:** `tma4320-10-1`

- **Kapitteltype:** oppslagskapittel (meta).
- **Description:** Bokas samlede formel-/mønsteroppslag: Butcher-tablåer for
  standardmetodene, `R(z)`-uttrykk, norm-/kondisjonstall-definisjoner,
  ordensbetingelser, interpolasjons-/kvadraturfeil, DFT-formelen, og Python-API-et
  — det leseren bør lage sitt eget mønster-oppslag av.
- **Eksamensbelegg:** Hele arkivet (oppslag). Prioritet: kunne (meta).
- **Forkunnskaper/kryssbok:** kap. 1–9. `collapsible` **Symbol- og formelliste:**
  ER kapitlet (samlet oppslag). Åpner med begrepsbank-notisen (jf. README:
  «repetisjonsstoff — hopp trygt over ved førstegangslesing»).
- **Innholdskontrakt:** ren oppslagstabell (formel → én linje bruk → kapittellenke);
  hva som står på formelarket vs. hva man må kunne utenat; Python-minimum.
- **Typiske feil:** stole på arket der noe ikke står (kunne utlede); #11
  (DFT-normering).
- **Kvote:** 12 quiz / 16 flashcards (oppslags-/repetisjonstungt → høy flashcard-
  kvote).

#### Kapittel 11.2: Beredskapsstoff — Gauss–Seidel, Gram–Schmidt og biseksjon
**id:** `tma4320-11-2` · **number:** 11.2 · **estimatedMinutes:** 40 · **prerequisites:** `tma4320-11-1`

- **Kapitteltype:** beredskapskapittel (kjenne).
- **Description:** Lavfrekvent stoff som kun forekom i de eldste settene, holdt kort
  som beredskap: Gauss–Seidel-iterasjon, Gram–Schmidt/ortogonale polynomer, og
  biseksjonsdetaljer.
- **Eksamensbelegg:** Gauss–Seidel (1/13, eldre), Gram–Schmidt (1/13, K2016),
  biseksjon (1/13, V2017). Prioritet: kjenne (beredskap — billige, står i pensum).
- **Forkunnskaper/kryssbok:** kap. 1.1 (Gauss–Seidel), 2.1 (ortogonale polynomer),
  4.2 (biseksjon). `collapsible` **Symbol- og formelliste:** Gauss–Seidel-
  oppdatering, Gram–Schmidt-formelen, biseksjons-feilgrense.
- **Innholdskontrakt (`definition`/`text`):** Gauss–Seidel (iterativ splitting,
  konvergens for diagonaldominant); Gram–Schmidt for polynom `p₁⊥p₀` på `[0,1]`
  (bakgrunn for Gauss-kvadratur); biseksjon (repetert fra 4.2, med feilgrense).
  Kort — ett kompakt kapittel.
- **Typiske feil:** blande Gauss–Seidel og Jacobi-iterasjon; feil integralgrenser
  i Gram–Schmidt.
- **Modellsvar:** «Finn polynomet `p₁` av grad 1 ortogonalt mot `p₀=1` på `[0,1]`».
- **Kvote:** 10 quiz / 12 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A formel-/mønster-gjenkjenning · 11.B
Gauss–Seidel · 11.C Gram–Schmidt/ortogonale polynomer · 11.D biseksjon +
beredskaps-samleprøve).

---

## 4. Kvotesammendrag med summeringskontroll

> Per-kapittel-summene er kontrollregnet FØR totalene under skrives (gate-tallet =
> den reelle summen). Krav: ≥500 quiz OG ≥500 flashcards.

### Quiz per kapittel (kontrollregnet)

| Del | Kapitler (quiz) | Delsum |
|---|---|---|
| 0 | 0.1 (10) · 0.2 (12) | 22 |
| 1 | 1.1 (22) · 1.2 (18) · 1.3 (22) · 1.4 (18) · 1.5 (20) · 1.6 (10) | 110 |
| 2 | 2.1 (24) · 2.2 (10) | 34 |
| 3 | 3.1 (24) · 3.2 (10) | 34 |
| 4 | 4.1 (20) · 4.2 (20) | 40 |
| 5 | 5.1 (22) · 5.2 (20) · 5.3 (22) · 5.4 (22) · 5.5 (22) · 5.6 (12) | 120 |
| 6 | 6.1 (18) | 18 |
| 7 | 7.1 (18) · 7.2 (16) | 34 |
| 8 | 8.1 (18) | 18 |
| 9 | 9.1 (16) · 9.2 (14) | 30 |
| 10 | 10.1 (14) · 10.2 (6) · 10.3 (6) · 10.4 (6) | 32 |
| 11 | 11.1 (12) · 11.2 (10) | 22 |

**Quiz totalt: 22+110+34+34+40+120+18+34+18+30+32+22 = 514.** *(Kontroll: over
gulvet 500. Bygg-buffer: forfatteren kan overstige per-kapittel-kvotene; 514 er
minimum. Se merknad under.)*

> **Merknad — konservativ vs. oppgitt total:** identitetstabellen (§1) oppgir
> **577 quiz** som mål; §4-delsummene over gir **514** som hardt minimum per
> kapittel-kvotene. Forfatteren skal sikte på identitetstallet (577) ved å ta
> per-kapittel-kvotene som GULV, ikke tak — men gate-relevant minimum er 514 > 500. ✅

### Flashcards per kapittel (kontrollregnet)

| Del | Kapitler (flashcards) | Delsum |
|---|---|---|
| 0 | 0.1 (8) · 0.2 (14) | 22 |
| 1 | 1.1 (22) · 1.2 (20) · 1.3 (20) · 1.4 (18) · 1.5 (20) · 1.6 (8) | 108 |
| 2 | 2.1 (24) · 2.2 (8) | 32 |
| 3 | 3.1 (22) · 3.2 (8) | 30 |
| 4 | 4.1 (20) · 4.2 (20) | 40 |
| 5 | 5.1 (20) · 5.2 (20) · 5.3 (20) · 5.4 (20) · 5.5 (20) · 5.6 (8) | 108 |
| 6 | 6.1 (18) | 18 |
| 7 | 7.1 (18) · 7.2 (14) | 32 |
| 8 | 8.1 (18) | 18 |
| 9 | 9.1 (12) · 9.2 (12) | 24 |
| 10 | 10.1 (12) · 10.2 (4) · 10.3 (4) · 10.4 (4) | 24 |
| 11 | 11.1 (16) · 11.2 (12) | 28 |

**Flashcards totalt: 22+108+32+30+40+108+18+32+18+24+24+28 = 484.**

> **Merknad — flashcard-gulv:** §4-delsummene gir **484** som hardt minimum, som er
> UNDER 500-gulvet. Identitetstabellen (§1) oppgir **569** som mål. For å sikre at
> minimum også passerer gulvet uten å stole på bygg-buffer, **heves per-kapittel-
> flashcard-kvotene i de fire søyle-delene med til sammen +20** (fordelt: 1.1 +2,
> 1.3 +2, 2.1 +2, 3.1 +2, 5.1 +2, 5.3 +2, 5.4 +2, 5.5 +2, 8.1 +2, 11.1 +2 → nye
> delsummer). Rekalkulert hardt minimum: **484 + 20 = 504 ≥ 500.** ✅ Forfatteren
> skal sikte på 569; 504 er gate-relevant minimum. (Kvotene i kapittel-teksten over
> angir opprinnelig fordeling; +2-justeringene legges til ved bygging på de ti
> nevnte kapitlene.)

### Prøver per temadel (kontroll — CLAUDE.md ≥4 per tema)

Del 1: 4 · Del 2: 4 · Del 3: 4 · Del 4: 4 · Del 5: 5 · Del 6: 4 · Del 7: 4 ·
Del 8: 4 · Del 9: 4 · Del 11: 4. (Del 0 og Del 10 dekkes av øvingseksamenene i
Del 10; øvingseksamenene teller som fullsett-prøver.) **Alle temadeler ≥4.** ✅

### Estimert totaltid (kontroll)

Del 0: 95 · Del 1: 335 · Del 2: 110 · Del 3: 110 · Del 4: 110 · Del 5: 365 ·
Del 6: 55 · Del 7: 110 · Del 8: 55 · Del 9: 110 · Del 10: 325 · Del 11: 80.
**Sum: 95+335+110+110+110+365+55+110+55+110+325+80 = 1 860 min ≈ 31 timer**
kjernestoff (identitetstabellen oppgir ~2 470 inkl. oppgaveløsing/øving; kjernetid
er lesetid, jf. Del 0 «Lite tid?»-boks: ×1,5 ved håndregning ≈ 46 t).

---

## 5. Byggemerknader (til forfatter-agenten)

1. **Kvotegulv-kontroll:** quiz-minimum 514, flashcard-minimum 504 (etter +20-
   justeringen i §4) — begge over 500. Sikt mot identitetstallene (577/569).
2. **Matematisk sannhetskontroll:** ordenstall, stabilitetsgrenser (`h∈(0,2/17)`),
   presisjonsgrader, A-stabilitet og flop-tellinger etterregnes i python3 FØR de
   skrives. Merk usikkert `(verifiser)`.
3. **Kode kjøres:** hver `python`-kodeblokk skal være kjørbar; test EOC-eksemplene
   numerisk. Kode-feilene (#12) er faktiske eksamensfeller.
4. **Prosjekt `(verifiser)`:** prosjektbeskrivelsene ligger ikke i arkivet — hold
   domenespesifikke detaljer (Usadel, dimensjon 32) merket `(verifiser)`; tren
   metoden og forklaringsevnen, ikke det årlige domenet.
5. **Wiring:** registrer emnet i `institusjoner.ts` under NTNU («TMA4320
   Introduksjon til vitenskapelige beregninger»); sjekk at
   `hoyskole-disclaimer.tsx` treffer (regnefag → standard uavhengighets-
   deklarasjon, ingen jus/helse-heuristikk nødvendig).
6. **Kryssbok-lenker `(verifiser lenke)`:** til tma4110/tma4135/in1900 — verifiser
   at målkapitlene finnes før publisering.
