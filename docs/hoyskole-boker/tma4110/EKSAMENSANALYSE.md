# Eksamensanalyse: TMA4111 Matematikk 3 (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. TMA4111 er et **nytt, aktivt emne** i NTNUs matematikkreform (programspesifikk «Matematikk 3» for MTELSYS, MTKJ og MTTK), men det finnes **ingen offentlig eksamensarkiv for TMA4111 ennå** (første ordinære eksamen etter reformen holdes 20.11.2026). Analysen bygger derfor på tre uavhengige ben: **(1)** NTNUs gjeldende emnebeskrivelse + semesterplanen på `wiki.math.ntnu.no` (verifisert innhold og eksamensform); **(2)** eksamensarkivet for det utgående søsteremnet **TMA4110/TMA4115 «Matematikk 3»** (~55 karakteriserte sett, 2004–2025, oppgaver + offisielle løsningsforslag) — brukt til å kalibrere **eksamenskultur og karakterstil**, IKKE innhold; **(3)** to innholdsnære forbilder i samme institusjon/nivå: `mat1110` (vektorkalkulus/flerintegraler) og `tma4135` (PDE via separasjon av variable). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser. Matematiske uttrykk og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det, og eksplisitt merket `(verifiser)` der den hviler på antakelse.

> **HOVEDFUNN — LES DETTE FØRST (kritisk avvik fra vanlig etterfølger-profilering):**
> Til forskjell fra sos1004/psy1000/kjm1110 — der etterfølgeren beholdt det meste av forgjengerens pensum — har NTNUs matematikkreform **flyttet innholdet på tvers av emnekodene**. «Matematikk 3» byttet betydning:
> - **TMA4110/TMA4115 «Matematikk 3» (forgjenger, utgående)** = **lineær algebra + elementære komplekse tall + differensiallikninger** (Gauss, vektorrom, egenverdier, diagonalisering, indreprodukt/Gram–Schmidt, minste kvadrater, lineærtransformasjoner; 2. ordens ODE + ODE-system; komplekse røtter/polarform).
> - **TMA4111 «Matematikk 3» (dagens emne)** = **multivariabel-integraler og vektorkalkulus + partielle differensiallikninger + kompleks funksjonsteori**. Lineær algebra er skjøvet til de tidligere reformemnene (TMA4101/TMA4106); trippelintegraler og Maxwell er skjøvet ut til TMA4121.
> **Konsekvens:** TMA4110-arkivet er en **svak innholds-forgjenger** for TMA4111. Det som overføres robust er **eksamensformen og karakterkulturen** (4 timer skriftlig, A–F, «alle svar skal begrunnes», ~10 likt vektede deloppgaver, ingen flervalg i normalår, eksakte svar, navngitte teoremer). Én viktig **endring**: hjelpemidler gikk fra **kode C** (enkel kalkulator) i TMA4110 til **kode E (ingen hjelpemidler)** i TMA4111 — puggekravet er strengere. Innholdsmessig gjenbrukes bare den **elementære kompleks-tall-basisen** (som TMA4111s komplekse funksjonsteori bygger videre på); resten av arkivpensumet er **utenfor TMA4111-pensum**. De tre bærebjelkene i TMA4111 (vektorkalkulus, PDE, kompleks funksjonsteori) har **null dekning** i TMA4110-arkivet. Boken må derfor bygges tilnærmet «grønn eng» fra emnebeskrivelsen, med `mat1110` og `tma4135` som innholdsforbilder og TMA4110 kun som formkalibrering. Temafrekvensene i del 2B er **prognostiske og merket `(verifiser)`** til første TMA4111-sett foreligger.

---

## 1. Eksamensform og utvikling

### 1A. TMA4111 — verifisert form (dagens emne)

| Egenskap | Verdi | Kilde |
|---|---|---|
| Studiepoeng | 7,5 sp | emneside (verifisert) |
| Vurdering | Skriftlig skoleeksamen, **4 timer** | emneside (verifisert) |
| Neste ordinære eksamen | **20.11.2026 kl. 09:00** | emneside (verifisert) |
| Hjelpemidler | **Kode E — ingen hjelpemidler** (ingen kalkulator, ingen notater, ingen koding) | emneside + wiki 2025h (verifisert) |
| Karakter | Bokstavkarakter **A–F** | emneside (verifisert) |
| Obligatorisk arbeid | Ingen obliger (H2025) | wiki 2025h (verifisert) |
| Forkunnskaper | TMA4101 (Matematikk 1) + TMA4106 (Matematikk 2) | emneside (verifisert) |
| Studieprogram | MTELSYS, MTKJ, MTTK (+ enkelte BKJ) | wiki/emneside (verifisert) |
| Undervisningsstatus | «Det tilbys ikke lenger undervisning i emnet» — siste underviste kull H2025; kontinuasjonseksamen (muntlig) august | emneside (verifisert) |
| Lærebøker | Hole «Kalkulus og lineær algebra»; Kreyszig «Advanced Engineering Mathematics», 10. utg.; Feynman Lectures (nett) | wiki 2025h (verifisert) |

> **Viktig endring vs. forgjenger:** TMA4110/4115 kjørte **kode C** (bestemt enkel kalkulator, i noen år også Rottmann formelsamling; 2018–2021 stramt til «ingen hjelpemidler»). TMA4111 er entydig **kode E / ingen hjelpemidler**. Boken må derfor trene **utenat-flyt** i formler (parametriseringer, div/curl, Green/Gauss/Stokes, separasjonsansatser, Cauchy–Riemann, residyformelen) — ingenting kan slås opp på eksamen.

### 1B. Innholdsprofil TMA4111 (verifisert, med én åpen node)

Emnebeskrivelsen angir **tre bærebjelker** (verifisert):
1. **Multivariabel-integraler og vektorkalkulus**
2. **Partielle differensiallikninger (PDE)**
3. **Kompleks funksjonsteori**

Den konkrete semesterplanen H2025 (wiki) detaljerer bærebjelke 1–2 uke for uke: kurver → funksjoner av flere variable → **optimering** → vektorfelt → **linjeintegraler I** → **dobbeltintegraler** → **koordinattransformasjoner** → **analysens fundamentalteorem II og III** (Greens/Gauss'/Stokes' teorem) → linjeintegraler II → **Laplace-operatoren I** → **flateintegraler**. Merk scoping: **trippelintegraler og Maxwells likninger er flyttet ut til TMA4121** — TMA4111 stopper på dobbeltintegraler + flateintegraler.

> **Åpen node `(verifiser)`:** Den uke-for-uke-planen jeg fikk lest ut for H2025 vektet **vektorkalkulus + Laplace-operatoren** og eksponerte ikke eksplisitt en egen **kompleks funksjonsteori**-bolk, mens den offisielle (nyeste) emnebeskrivelsen lister kompleks funksjonsteori som en av tre likeverdige bærebjelker. To tolkninger: (a) kompleks funksjonsteori ligger i de siste ukene / en senere planrevisjon; (b) vektingen mellom de tre bærebjelkene varierer mellom kull. Boken bør dekke alle tre fullt, men **prioriteringen mellom pillar 2 (PDE) og pillar 3 (kompleks funksjonsteori) må reverifiseres** mot pensumlista for kullet som tar eksamen 20.11.2026 og mot Kreyszig-kapitlene som faktisk står på pensum.

### 1C. TMA4110/4115 — dokumentert form (forgjenger, kun til formkalibrering)

Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, A–F. Faste trekk gjennom hele arkivet (~55 sett, 2004–2025):
- **~10 oppgaver som teller likt** («alle oppgaver teller likt») er normen; eldre sett hadde 7–10 oppgaver med a/b-deler. Tidsbudsjett ~24 min per deloppgave.
- Fast instruks: **«Alle svar skal begrunnes»** (front-side-papirer 2017–2022v); digitale Inspera-sett (2022h→) legger «Begrunn svaret» på hver deloppgave. Ren fasit uten utledning gir ikke full uttelling.
- **Siste oppgave er så godt som alltid et bevis** (f.eks. `A` inverterbar ⇔ `AᵀA` inverterbar; `A²=A ⇒ egenverdier ∈ {0,1}`; `A³=0 ⇒ (I−A)⁻¹ = I+A+A²`).
- Formatunntak: pandemi-årene (2020v, 2021v hjemme-eksamen med varianter/flervalg, kode A alle hjelpemidler; 2020h COVID-splitt 5 flervalg + 5 skriftlige; 2020-kont 40-punkts begrepssjekk; 2022h 10 flervalg + 7 skriftlige). **Normalårene har ingen flervalgsdel** — dette er robust overførbart til TMA4111 (som er ren skriftlig, kode E).

---

## 2. Temafrekvens

### 2A. Hva TMA4110/4115-arkivet faktisk testet (dokumentert, ~55 sett)

Celleverdi = antall sett i perioden der temaet forekom. **NB: Dette er forgjengerens pensum (lineær algebra + ODE + elementære komplekse tall). Kun rad 1 (elementære komplekse tall) er delvis relevant for TMA4111; radene 2–15 er utenfor TMA4111-pensum og tas med her for å dokumentere avviket presist.**

| # | Tema (TMA4110-pensum) | 2004–13 (n=26) | 2014–19 (n=13) | 2020–25 (n=16) | Total /55 | Gjenganger | TMA4111-relevans |
|---|---|:--:|:--:|:--:|:--:|:--:|:--|
| 1 | Elementære komplekse tall (`zⁿ=c`, de Moivre/polar, kompleks eksp.) | 26 | 12 | 14 | **52** | **95 %** | **Delvis — basis for pillar 3** |
| 2 | Egenverdier/egenvektorer/diagonalisering/`Aⁿ` | 25 | 13 | 14 | 52 | 95 % | Utenfor pensum |
| 3 | Søylerom/nullrom (basis, rang) | 24 | 13 | 12 | 49 | 89 % | Utenfor pensum |
| 4 | Vektorrom/underrom/basis/dimensjon | 24 | 9 | 12 | 45 | 82 % | Utenfor pensum |
| 5 | 2. ordens lineær ODE (konst. koeff., resonans, ubest. koeff.) | 26 | 11 | 8 | 45 | 82 % | Utenfor pensum* |
| 6 | Indreprodukt/ortogonalitet/Gram–Schmidt/projeksjon | 22 | 10 | 12 | 44 | 80 % | Utenfor pensum |
| 7 | Lineære system / Gauss / parameteravhengig løsningsantall | 22 | 10 | 11 | 43 | 78 % | Utenfor pensum |
| 8 | Minste kvadrater (normalligninger) | 7 | 8 | 11 | 26 | 47 % | Utenfor pensum |
| 9 | Determinanter/kofaktor/inverterbarhet | 7 | 7 | 11 | 25 | 45 % | Utenfor pensum |
| 10 | System av 1. ordens ODE (`y'=Ay` via egenverdier) | 4 | 10 | 11 | 25 | 45 % | Utenfor pensum* |
| 11 | Bevis/abstrakte oppgaver (underrom, nilpotent, inverterbarhet) | 3 | 8 | 12 | 23 | 42 % | Utenfor pensum |
| 12 | Lineærtransformasjoner (matrise, kjerne, bilde, inj./surj.) | 3 | 6 | 12 | 21 | 38 % | Utenfor pensum |
| 13 | Matriseregning (multiplikasjon, invers, transponert) | 7 | 6 | 7 | 20 | 36 % | Utenfor pensum |
| 14 | Markov/stokastiske matriser/likevekt | 2 | 8 | 8 | 18 | 33 % | Utenfor pensum |
| 15 | Lineær uavhengighet i abstrakt rom (`P₂`-polynomer) | 2 | 2 | 6 | 10 | 18 % | Utenfor pensum |

\* Vanlige ODE-metoder (2. orden, system) er **forkunnskap** i TMA4111 (ligger i TMA4106/utgående emner), ikke selvstendig eksamensstoff, men trengs som verktøy i separasjon-av-variable-oppgaver (pillar 2).

**Nøkkelfunn fra arkivet (relevant for overføringen):**
1. **Kompleks-tall-dybden er strengt elementær** i alle ~55 sett: binomiske likninger `zⁿ=c`, de Moivre/polar/eksponentialform, komplekse annen-/tredjegradslikninger (faktorisering + abc), konjugat og `|z|²`, geometriske steder (`|z−a|=|z−b|`). **Ingenting** nærmer seg analytiske funksjoner, Cauchy-integralteoremet eller residyer. Dette betyr at selv TMA4111s **komplekse pillar bare deler fundamentet** med arkivet — hele den analytiske funksjonsteorien er nytt stoff.
2. **Curriculum-drift 2012→2025:** minste kvadrater, lineærtransformasjoner, Markov, abstrakte `P₂`-oppgaver og ODE-system steg inn i moderne sett, mens Euler–Cauchy-ODE forsvant. Dette er intern TMA4110-utvikling og har **ingen bæring på TMA4111**.

### 2B. Prognostisk temafrekvens for TMA4111 (fra pensum + forbilder — `(verifiser)`)

Ingen TMA4111-sett finnes ennå, så disse frekvensene er **estimert** fra (i) semesterplanens vekting, (ii) `mat1110`-arkivets frekvenser for de tilsvarende vektorkalkulus-sjangrene (en UiO-parallell med samme kjerne), og (iii) `tma4135`-arkivet for PDE-separasjon. **Alle merket `(verifiser)`** — de skal kalibreres mot første ekte TMA4111-sett. Estimert forventet forekomst per eksamen:

| Pillar | Tema | Forventet per sett | Grunnlag |
|---|---|:--:|---|
| **1 Vektorkalkulus** | Dobbeltintegral over kurveavgrenset område (evt. polar) | **Svært høy** | mat1110: 95 % `(verifiser)` |
| 1 | Linjeintegral + Greens teorem i planet | Høy | mat1110: 60 % `(verifiser)` |
| 1 | Flateintegral (skalar `∫f dS` / fluks `∫F·n dS`) | Høy | wiki (egen bolk) `(verifiser)` |
| 1 | Gauss' divergensteorem (fluks via `∭ div F`) | Høy | wiki «fundamentalteorem III» `(verifiser)` |
| 1 | Stokes' teorem (`∮F·dr = ∬ curl F·n dS`) | Middels–høy | wiki «fundamentalteorem III» `(verifiser)` |
| 1 | Optimering av flervariabel funksjon (stasjonære + Hesse; evt. Lagrange) | Middels–høy | wiki (egen bolk) + mat1110 60 % `(verifiser)` |
| 1 | Koordinattransformasjon / Jacobideterminant | Middels | wiki (egen bolk) `(verifiser)` |
| 1 | Vektorfelt: `div`, `curl`, konservativt felt / potensial | Middels | wiki (egen bolk) `(verifiser)` |
| 1 | Kurver: parametrisering, buelengde, tangent | Middels | wiki (uke 34) `(verifiser)` |
| **2 PDE** | Separasjon av variable (varme-/bølge-/**Laplace**-likning) | **Høy** | wiki «Laplace-operator» + tma4135 (praktisk talt garantert) `(verifiser)` |
| 2 | Randverdiproblem / egenverdiproblem for PDE, Fourier-koeffisienter | Middels–høy | tma4135-analogi `(verifiser)` |
| **3 Kompleks funksjonsteori** | Analytiske funksjoner, Cauchy–Riemann-likningene | Middels–høy | Kreyszig-pensum `(verifiser)` |
| 3 | Cauchys integralteorem/-formel; kompleks integrasjon | Middels | Kreyszig-pensum `(verifiser)` |
| 3 | Residyteoremet; Laurent-rekke; poler/singulariteter | Middels | Kreyszig-pensum `(verifiser)` |
| 3 | (Basis) elementære komplekse tall: polarform, `eiθ`, røtter | Lav–middels | **Eneste som er arkivbelagt** (TMA4110: 95 %) |
| 3 | Konforme avbildninger | Lav | Kreyszig-pensum `(verifiser)` |

> **Les tabellen slik:** vektorkalkulus (pillar 1) er den bredeste og tyngste bolken i semesterplanen og vil trolig fylle flertallet av deloppgavene; PDE (pillar 2) leverer minst én tung separasjonsoppgave; kompleks funksjonsteori (pillar 3) leverer 1–2 oppgaver hvis den står på kullets pensum (se åpen node i §1B). Fordelingen er **antatt** og må reverifiseres.

---

## 3. Oppgavesjangre (med forventet fasitmetode)

Sjangrene under er hentet fra pensum og innholdsforbildene. Metodekravene er den **faglig etablerte standarden** (Kreyszig/Hole/mat1110-fasitpraksis) og er merket `(verifiser)` fordi de ennå ikke er sett-verifisert for TMA4111. Sjangre A–C bygger på `mat1110`-fasitens dokumenterte praksis for identiske oppgavetyper.

**Pillar 1 — Vektorkalkulus**
- **A. Dobbeltintegral over kurveavgrenset område.** Finn skjæringspunkter, beskriv området som ulikheter (`a≤x≤b, u(x)≤y≤v(x)`), integrer innerst i `y`; velg `dy dx` vs. `dx dy` for å unngå oppdeling; **polarkoordinater** ved sirkelsymmetri (`dA = r dr dθ`). `(verifiser)`
- **B. Linjeintegral + Greens teorem.** `∮_C P dx + Q dy = ∬_A (∂Q/∂x − ∂P/∂y) dA`; areal via `A = ∮ x dy`; konservativt felt ⇒ lukket linjeintegral `= 0` når `∂P/∂y = ∂Q/∂x`. `(verifiser)`
- **C. Flateintegral / fluks.** Parametriser `ϕ(u,v)`, regn **fundamentalt vektorprodukt** `ϕ_u × ϕ_v`; `dS = |ϕ_u × ϕ_v|` (skalar) eller `F·n dS = F·(ϕ_u × ϕ_v)` (fluks); **sjekk at normalen peker som oppgitt** (bytt fortegn ellers). `(verifiser)`
- **D. Gauss' divergensteorem.** `∭_V div F dV = ∯_{∂V} F·n dS`; brukes til å finne fluks gjennom krum delflate ved å trekke fra fluks gjennom plan delflate; alle `n` peker **ut av** `V`. `(verifiser)`
- **E. Stokes' teorem.** `∮_C F·dr = ∬_T curl F·n dS`; regn `curl F`, kontroller orientering (høyrehåndsregel `n ↔ C`). `(verifiser)`
- **F. Flervariabel optimering.** `∇f = 0` → klassifiser med Hesse-determinanten `D = f_xx f_yy − f_xy²`; sett opp Hesse-matrisen eksplisitt. Betinget: Lagrange `∇f = λ∇g` med `∇g=0`-sjekk og tilfelledeling; eksistens via ekstremalverdisetningen på kompakt mengde. `(verifiser)`
- **G. Koordinattransformasjon.** `∬_D f dx dy = ∬_S f·|∂(x,y)/∂(u,v)| du dv`; Jacobideterminant regnes eksplisitt. `(verifiser)`

**Pillar 2 — PDE**
- **H. Separasjon av variable.** Ansett `u(x,t) = X(x)T(t)`, splitt i to ODE-er via separasjonskonstant, løs egenverdiproblemet for `X` med randbetingelser, superponer og bestem koeffisienter fra initialbetingelsen (Fourier-koeffisienter). Klassiske likninger: varmelikning, bølgelikning, **Laplace-likning** (potensialteori — knytter til vektorfelt-pillaren). `(verifiser)` — forbilde: `tma4135`.

**Pillar 3 — Kompleks funksjonsteori**
- **I. Analytisitet.** Sjekk **Cauchy–Riemann-likningene** `u_x = v_y, u_y = −v_x`; harmonisk konjugert; `f'(z)`. `(verifiser)`
- **J. Kompleks integrasjon.** Cauchys integralteorem (`∮ f dz = 0` for analytisk `f`), Cauchys integralformel `f(z₀) = (1/2πi)∮ f(z)/(z−z₀) dz`. `(verifiser)`
- **K. Residyer.** Klassifiser singulariteter, regn residyer, `∮ f dz = 2πi Σ Res`; Laurent-rekke; anvend på reelle integraler. `(verifiser)`
- **L. Elementære komplekse tall (basis).** Polarform, `r eiθ`, `n`-te røtter via de Moivre, skisse i det komplekse planet. **Eneste sjanger med direkte arkivbelegg** (TMA4110 O1-standard, 95 %).

---

## 4. Sensorkrav

Metareglene under er **robust overførbare** fra TMA4110/4115 og deles av alle NTNU-regnefag (bekreftet identisk i `tma4135`):

1. **«Alle svar skal begrunnes; vis nok mellomregning til at tenkemåten klart framgår.»** Ordrett standardinstruks. Ubegrunnet svar gir ikke full uttelling.
2. **Teoremer skal navngis** når de bærer argumentet: Greens teorem, divergensteoremet, Stokes' teorem, Cauchys integralteorem/-formel, residyteoremet, ekstremalverdisetningen, annenderiverttesten.
3. **Kode E — alt utenat.** Ingen hjelpemidler ⇒ studenten må kunne parametriseringer, `div`/`curl`, teoremformlene, separasjonsansatser, Cauchy–Riemann og residyformelen uten oppslag. Boken må trene formel-flyt.
4. **Eksakte svar** (`4π/5`, `−π²/4`, `2πi`), aldri desimaltilnærming (og uansett ingen kalkulator).
5. **Føringsstandard:** integrasjonsgrenser skrives som eksplisitte ulikheter **før** oppsett; substitusjon bokføres; orientering/fortegn kontrolleres i hver fluks-/Stokes-oppgave (`ϕ_u × ϕ_v` vs. oppgitt `n`, høyrehåndsregel).
6. **Delpunkt-kobling premieres:** flervariabel-oppgaver kjeder deler (bruk `div F`-integralet i fluks-delen; gjenbruk et allerede utregnet felt i Stokes). `(verifiser mot TMA4111-sett)`
7. **Siste oppgave er ofte et «vis at …».** I TMA4110 var det et LA-bevis; i TMA4111 forventes tilsvarende korte bevis knyttet til vektoranalyse/kompleks analyse (f.eks. vis at et felt er konservativt, eller at en funksjon er analytisk). `(verifiser)`

### Karakterskiller (forventet)
- **Bestått:** mekaniske delpunkter — riktig oppsatt dobbeltintegral med grenser, `∇f=0`+Hesse, standard fluks-parametrisering, separasjonsansats.
- **Midtsjikt:** Green/Gauss på lukket kurve/flate med korrekt fortegn, Lagrange med tilfelledeling, Cauchy–Riemann + `f'`, separasjon med korrekte Fourier-koeffisienter.
- **Toppsjikt:** korrekt orienteringskontroll i fluks/Stokes, eksistensbegrunnelse på kompakt mengde, residyregning med riktig singularitetsklassifisering, og å se delpunkt-koblingene.

---

## 5. Typiske feil

Fra TMA4110-fasitpraksis (overførbare metodiske feil) + innholdsforbildene (`mat1110`, `tma4135`):

1. **Feil fortegn/normalretning i fluks** — `ϕ_u × ϕ_v` peker motsatt av oppgitt `n`; forplanter seg i hele oppgavekjeden. (mat1110-fasiten sjekker retningen hver gang.)
2. **Feil integrasjonsgrenser når flater/kurver møtes** — løs skjæringen først, ikke gjett.
3. **Hoppet over `∇g=0`-tilfellet i Lagrange** eller manglende tilfelledeling.
4. **Manglende/gal eksistensbegrunnelse** — ekstremalverdisetningen krever lukket OG begrenset (kompakt) mengde.
5. **PDE-separasjon:** feil håndtering av randbetingelsene når egenverdiproblemet settes opp; glemte Fourier-koeffisienter. `(verifiser)`
6. **Kompleks analyse:** hoppe over Cauchy–Riemann-sjekken før man kaller `f` analytisk; feil klassifisering av pol-orden før residy; glemme `2πi`-faktoren. `(verifiser)`
7. **Resonans-arv fra ODE-verktøykassen** (forkunnskap): når kilden løser den homogene likningen, må ansatsen ganges med ekstra `t`/`t²` — LF-ene i forgjengeren flagget dette gjentatte ganger.
8. **Desimalsvar / kalkulatoravhengighet** — verdiløst under kode E; svar skal være eksakte.
9. **Tidsfelle:** vektoranalyse-kjeder og residyintegraler er tunge; feil tidsbruk tidlig stjeler fra dyre sluttoppgaver.

---

## 6. Symbol- og metodeapparat (må beherskes aktivt — kode E)

**Vektorkalkulus:** `∇f` gradient; `div F`, `curl F`; parametrisering av kurver/flater; fundamentalt vektorprodukt `ϕ_u × ϕ_v`; `dS`, fluks `∫F·n dS`; dobbeltintegral med områdebeskrivelse; polar/Jacobideterminant `∂(x,y)/∂(u,v)`; **Greens teorem**, **Gauss' divergensteorem**, **Stokes' teorem**; konservativt felt/potensial; Hesse `D = f_xx f_yy − f_xy²`; Lagrange; ekstremalverdisetningen. Buelengde `L = ∫|r'(t)| dt`.
**PDE:** separasjonsansats `u = X(x)T(t)`; separasjonskonstant; egenverdiproblem med randbetingelser; superposisjon; Fourier-koeffisienter; varme-/bølge-/**Laplace-likning** (`∇²u = 0`).
**Kompleks funksjonsteori:** `z = x+iy = r eiθ`; **Cauchy–Riemann** `u_x=v_y, u_y=−v_x`; analytisk/holomorf; harmonisk konjugert; `∮ f dz`; **Cauchys integralteorem/-formel**; Laurent-rekke; residy `Res_{z₀} f`; **residyteoremet** `∮ f dz = 2πi Σ Res`; pol-orden; (konform avbildning).
**Forkunnskap (fra TMA4101/4106, forutsettes):** ODE 1./2. orden, matriseregning, egenverdier, integrasjonsteknikker, Taylor-rekker.

> Kode E betyr **ingen formelsamling** — hele apparatet over må sitte utenat. Dette er den viktigste kalibrerings-endringen fra forgjengeren.

---

## 7. Prognose, prioritering og overføringsvurdering

### 7A. Overføringsrisiko TMA4110 → TMA4111 (eksplisitt)

| Element | Overførbart? | Vurdering |
|---|---|---|
| Eksamensform (4 t, A–F, skriftlig, ~10 likt vektede deloppgaver, ingen flervalg i normalår) | **Robust** | Identisk NTNU-regnefag-mal; bekreftet i TMA4110 + tma4135 |
| Karakterkultur («begrunn alt», navngi teoremer, eksakte svar, siste oppgave = bevis) | **Robust** | Stabil på tvers av alle NTNU-mattesett |
| Hjelpemidler | **ENDRET** | C (kalkulator) → **E (ingen)**. Strengere puggekrav — kalibrer boken deretter |
| Elementære komplekse tall (polar, `eiθ`, røtter) | **Delvis** | Basis for pillar 3; men arkivet stopper her (ingen analytisk teori) |
| Lineær algebra, ODE 2. orden/system, indreprodukt, minste kvadrater | **IKKE pensum** | Flyttet til TMA4101/4106/utgående emner — ikke TMA4111-eksamensstoff |
| Vektorkalkulus (linje-/dobbelt-/flateintegral, Green/Gauss/Stokes, div/curl) | **Ikke i arkivet** | Null dekning i TMA4110; bruk `mat1110` som forbilde |
| PDE (separasjon, Laplace) | **Ikke i arkivet** | Null dekning i TMA4110; bruk `tma4135` som forbilde |
| Kompleks funksjonsteori (Cauchy–Riemann, integralteorem, residyer) | **Ikke i arkivet** | Helt nytt; bygg fra Kreyszig-pensum |

**Konklusjon:** TMA4110-arkivet er en **pålitelig form-forgjenger, men en upålitelig innholds-forgjenger**. Behandle innholds-prognosen (del 2B/3) som **near-greenfield** og reverifiser alt mot første TMA4111-sett + kullets Kreyszig-pensum.

### 7B. Prioritering for boken (fra pensumvekting)

**Nivå 1 — bærebjelke, mest sannsynlig tyngst vektet:**
1. Dobbeltintegral (kurveavgrenset + polar) og iterert integrasjon.
2. Vektorfelt + linjeintegral + **Greens teorem**.
3. **Fluks + Gauss' divergensteorem + Stokes' teorem** (vektoranalyse-kjeden).
4. Flervariabel optimering (stasjonære + Hesse; Lagrange).
5. **Separasjon av variable** for PDE (varme/bølge/Laplace) — minst én tung oppgave.

**Nivå 2 — full dekning, karakterskillere:**
6. Flateintegral (skalar + areal); koordinattransformasjon/Jacobi.
7. **Kompleks funksjonsteori**: Cauchy–Riemann → Cauchys integralteorem/-formel → residyteoremet + Laurent. `(verifiser vekt mot pensum — se åpen node §1B)`
8. Kurver: parametrisering, buelengde; `div`/`curl` og konservative felt/potensial.

**Nivå 3 — bredde/robusthet:**
9. Elementære komplekse tall som oppvarming til pillar 3.
10. Korte «vis at …»-bevis (konservativt felt, analytisk funksjon).

### 7C. Konkret prognose for eksamen 20.11.2026 (mest sannsynlig scenario, `(verifiser)`)
**~10 likt vektede deloppgaver over 4 timer, kode E**, bredt fordelt over de tre bærebjelkene:
- **Pillar 1 (flest deloppgaver):** ett dobbeltintegral (evt. polar), én linjeintegral/Greens-oppgave, én fluks/divergens- eller Stokes-oppgave, én flervariabel-optimering.
- **Pillar 2:** én separasjon-av-variable-PDE (Laplace/varme/bølge) med randbetingelser.
- **Pillar 3:** 1–2 oppgaver — analytisitet/Cauchy–Riemann og/eller kompleks integrasjon/residy (avhengig av kullets pensumvekt).
- **Avslutning:** ett kort bevis.

**Usikkerhetsmoment:** hele prognosen hviler på pensumbeskrivelse + analoge emner, ikke ett eneste TMA4111-sett. Vekten pillar 2 vs. pillar 3 er den mest usikre variabelen (§1B åpen node). **Reverifiser mot 20.11.2026-settet så snart det foreligger.**

### 7D. Anbefalt arketype
**`DNA-regnefag`** (kvantitativt emne med regne-/utlednings-/modelloppgaver og entydige fasitsvar) — samme familie som `mat1110` og `tma4135`. Konkret:
- **Del 0 — Eksamenskart:** eksamensform (4 t, kode E), de tre bærebjelkene, prognostisk temafrekvens (del 2B), lesestrategi. Understrek kode E → utenat-flyt.
- **Del 1 — Vektorkalkulus** (tyngst; 2–4 kapitler + drillkapittel): kurver → flervariabel + optimering → vektorfelt/div/curl → linje-/dobbelt-/flateintegral → Green/Gauss/Stokes.
- **Del 2 — Partielle differensiallikninger:** separasjon av variable, randverdi-/egenverdiproblem, Laplace-likning (bro til potensialteori i del 1).
- **Del 3 — Kompleks funksjonsteori:** elementære komplekse tall (oppvarming) → analytiske funksjoner/Cauchy–Riemann → kompleks integrasjon → residyer/Laurent.
- **Siste del — Eksamenstrening:** ett sjangerkapittel per oppgavetype (del 3 over) + komplette øvingseksamener med løsningsforslag skrevet slik en NTNU-sensor vil se dem (begrunnet, navngitte teoremer, eksakte svar, ingen hjelpemidler).
Kalibrer alt til **kode E**: hvert kapittel trener formlene utenat, ingen «slå opp i formelsamling».

---

## 8. Kildeliste

**Verifisert (TMA4111, dagens emne):**
- NTNUs emneside TMA4111 (bokmål): `https://www.ntnu.no/studier/emner/TMA4111` — 7,5 sp; 4 t skriftlig; kode E; A–F; eksamen 20.11.2026; forkunnskap TMA4101+TMA4106; tre bærebjelker (multivariabel-integraler/vektorkalkulus, PDE, kompleks funksjonsteori).
- NTNU course page TMA4111 (engelsk): `https://www.ntnu.edu/studies/courses/TMA4111` — bekrefter innhold og kode E.
- Semesterplan H2025: `https://wiki.math.ntnu.no/tma4111/2025h/start` — uke-for-uke-temaliste (kurver … flateintegraler), lærebøker (Hole, Kreyszig 10e, Feynman), ingen obliger, ingen koding, MTELSYS/MTKJ/MTTK, trippelintegraler+Maxwell flyttet til TMA4121.
- Wiki-oversikt: `https://wiki.math.ntnu.no/tma4111` (programtilhørighet, historikk fra 2021h).

**Formkalibrering (TMA4110/TMA4115-arkivet, ~55 sett):** `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4110/` — bl.a. offisielle LF `tma4110_h24_lf.pdf`, `tma4110_2023h_nb_lf.pdf`, `TMA4110_host_2019_losningsforslag.pdf`, `tma4110-eksamen-h21-LF.pdf`, `v25-tma4115-LF.pdf`, `tma4115-kont25-LF.pdf`, `tma4115_2024v_loes.pdf`, `EksamenTMA4115Vår2022-BM_LF.pdf`. 2017–2025 lest oppgave-for-oppgave; 2004–2013 skummet. Brukt **kun** til eksamensform/karakterkultur og til å dokumentere at kompleks-tall-dybden er elementær (del 2A).

**Innholdsforbilder (samme nivå, tilsvarende pensum):**
- `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (UiO) — vektorkalkulus/flerintegraler/Green–Gauss–Stokes/optimering; frekvensgrunnlag for del 2B–3, pillar 1.
- `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (NTNU Matematikk 4D) — PDE via separasjon av variable; forbilde for pillar 2 og for NTNU-sensorkultur.
- `docs/hoyskole-boker/DNA-regnefag.md` — anbefalt arketype og bokstruktur.

**Fagbeskrivelse:** omskrevet sammendrag i scratchpad `fagbeskrivelse-tma4111.md` (dekker forgjengeren TMA4110 i detalj; brukt til formkalibrering).

**Merknader om kildene:**
- **Ingen TMA4111-eksamensarkiv finnes ennå.** All innholds-temafrekvens (del 2B) og oppgavemetode (del 3) er **prognostisk** fra pensum + analoge emner, merket `(verifiser)`. Reverifiser mot første ordinære TMA4111-sett (20.11.2026) og mot kullets faktiske Kreyszig-kapitler.
- **Åpen node (§1B):** vekten på kompleks funksjonsteori vs. PDE i det aktuelle kullets pensum er ikke entydig fastslått — H2025-planen jeg leste vektet vektorkalkulus + Laplace; emnebeskrivelsen lister kompleks funksjonsteori som likeverdig bærebjelke.
- **Opphavsrett:** Alle beskrivelser av oppgaver, metoder og sensorkrav er parafrasert og omstrukturert med egne ord. Matematiske uttrykk og teoremnavn er standard fagnotasjon.
