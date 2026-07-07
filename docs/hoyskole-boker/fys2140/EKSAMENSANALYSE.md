# Eksamensanalyse: FYS2140 Kvantefysikk (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på eksamensarkivet i
> `~/Desktop/Eksamner/UiO/FYS2140/` — **15 komplette oppgavesett** (skoleeksamener
> vår + kontinuasjon/høst) fra 2015 til 2024. **Alle 15 settene er lest i sin
> helhet**; de siste ~8 årene (2017–2024, 11 sett) er analysert deloppgave for
> deloppgave, og 2015–2016 (4 sett) er gjennomgått grundig for tema- og
> sjangerregistrering. **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekster. Formlene er standard kvantemekanikk-notasjon og
> ikke opphavsrettslig beskyttet tekst.
>
> **VIKTIG KILDEFORBEHOLD:** Arkivet inneholder **ingen løsningsforslag og ingen
> sensorveiledninger** — kun oppgavesettene. Alt om «sensorkrav», forventet metode
> og poenglogikk i del 3–5 er derfor **utledet fra oppgaveteksten selv** (verbvalg,
> hint, oppgitte formler, synlige poengvekter i enkelte sett) og fra pensumboka
> Griffiths, *ikke* fra offisiell fasit. Der en bestemt metode er forventet, er den
> markert som slutning. Emnet er **AKTIVT** (undervises ved UiO vår 2026).
>
> Pensumbok er **David J. Griffiths, *Introduction to Quantum Mechanics*** — bekreftet
> av eksplisitte referanser i settene («den radiale ligningen … ligning 4.53 i
> Griffiths», V2021; «samme uttrykk som i Griffiths (spredning mot potensialbrønn)
> og for potensialbarriere i oblig 8», V2021). Flere sett viser til «FYS2140-
> kompendiet» (H2018, H2019).

---

## 1. Eksamensform og utvikling

### Form gjennom perioden

| Periode | Eksamen | Struktur | Hjelpemidler / kommentar |
|---|---|---|---|
| 2015–2016 (V15, H15, V16) | Skriftlig skoleeksamen, **4 t** | 2–3 **store, tematiske** oppgaver med mange deloppgaver (opptil 13); ofte innpakket i en aktuell/forskningsnær ramme | Rottman (matematisk formelsamling) + Øgrim/Lian og Angell/Lian (Fysiske størrelser og enheter) + kalkulator + **ett eget A4-notatark** (begge sider). Ingen utdelt formelside |
| 2017–2019 (V17–H19) | Skriftlig skoleeksamen, **4 t** | **3 oppgaver** med 3–9 deloppgaver hver; standardisert oppsett (eksperiment → 1D-system/kvantemekanikk → hydrogen/spinn) | Samme hjelpemidler. Enkelte sett (V17, H17) har synlige **poengvekter per deloppgave** (3–10 poeng) |
| 2020 (V20, pandemi) | **Hjemmeeksamen** over 8 dager (utlevert 28. mai, innlevering 5. juni), alle hjelpemidler, samarbeid tillatt | **6 oppgaver**, tett og bredt; teller 80 % av karakteren; eneste sett som **inviterer til numerikk** («noen deloppgaver kan/bør løses numerisk, inkluder gjerne plott og programkode») | Unntaksår, ikke normgivende for form. Faglig kjerne som normalt |
| 2021–2024 (V21–H24) | Skriftlig skoleeksamen, **4 t** | Spennvidde: **3 store, sammensatte** oppgaver (V24, H24, V18-mønsteret) *eller* **6 kortere** (V22, V23) | Samme hjelpemidler. **Nytt fra ~2022–2023:** enkelte sett deler ut en egen **konstant- og formelside** (integraltabell, Hermite-polynomer H₀–H₅, `hc = 1240 eV·nm`, Bohr-radius). Ikke gjennomført i alle sett |

### Faste regler (gjeldende regime)

- **Format:** Skriftlig skoleeksamen, **4 timer**, penn og papir. Karakterskala **A–F**.
  Besvarelse kan skrives på norsk, svensk, dansk eller engelsk.
- **Adgangskrav:** Et minimum av de ukentlige **obligatoriske innleveringene**
  («obliger», ~6–8 av dem) må være godkjent for å gå opp til eksamen. Obligene
  refereres direkte i oppgavene (V2021 nevner «oblig 8» om potensialbarriere) —
  eksamen bygger altså på at studenten har regnet obligene.
- **Hjelpemidler (stabilt hele perioden):** Rottman *Matematisk formelsamling*,
  Øgrim/Lian og Angell/Lian *Fysiske størrelser og enheter*, godkjent kalkulator,
  og **ett A4-ark med egne notater** (begge sider). Notatarket er sentralt — det er
  her studenten selv tar med bølgefunksjoner, egenverdier og standarduttrykk.
- **Utdelte formler:** Nyere sett (særlig V2022, V2023) legger ved en egen side med
  **konstanter** (`m_e = 0.511 MeV/c²`, `c`, `e`, `ħ`, `k_e`, Bohr-radius
  `a₀ ≈ 0.053 nm`) og en **integraltabell** (`∫₀^∞ xⁿe^{−βx}dx = n!/β^{n+1}`,
  gaussiske integraler, trigonometriske integraler, delvis integrasjon). Ved
  harmonisk-oscillator-oppgaver oppgis **Hermite-polynomene H₀–H₅**. Der arket
  finnes, er integralene lagt inn *fordi de trengs* — bruk dem aktivt.

### Utviklingstrekk (viktig for læreboka)

1. **Fra kreativ/forskningsnær til standardisert.** De eldste settene (2015–2016)
   er påfallende **lange, tematiske og ambisiøse**: hydrogen omskrevet til
   positronium og til en variasjonstilnærming som gir Wallis' formel for π (V2016),
   graviton-dispersjon fra LIGO-oppdagelsen (V2016), koherente tilstander som
   egenfunksjoner til senkeoperatoren (H2015), 2D harmonisk oscillator i magnetfelt
   (V2015). Fra ~2018 blir settene **standardiserte og forutsigbare**: samme tre
   søyler går igjen (eksperiment → grunnleggende KM/1D-system → hydrogen/spinn).
   Læreboka bør trene den standardiserte formen, men de eldre settene viser hvor
   dypt sensor kan gå på et enkelt tema.
2. **INGEN «computational essay»/Python-tradisjon.** I motsetning til søsteremnet
   FYS1120 (der numerisk Python er obligatorisk fra 2018) er FYS2140 **ren analytisk
   penn-og-papir-fysikk**. Numerikk nevnes kun i **ett** sett — hjemmeeksamen V2020 —
   og da som en invitasjon, ikke et krav («kan/bør løses numerisk … inkluder gjerne
   plott»). Alle ordinære skoleeksamener er analytiske. Læreboka trenger **ikke** et
   Python-spor; den bør i stedet drille håndregning av integraler, egenverdier og
   forventningsverdier under tidspress.
3. **Hydrogenatomet + angulærmoment + superposisjon er den stabile kjernen.**
   Tvers gjennom hele perioden er tyngdepunktet: hydrogenets kvantetall/energinivåer,
   L̂²/L̂_z-egenverdier, og en superponert tilstand som utvikles i tid med
   energimåling. Dette «harde midtstykket» er i praksis oppgave 2 eller 3 hvert
   eneste år.
4. **Vår vs. høst.** Vårsettene er hovedeksamen og bærer de mest sammensatte/kreative
   oppgavene; høstsettene (kontinuasjon: H2015, H2017, H2018, H2019, H2024) er
   gjennomgående **kortere og mer standardiserte**. Temaene roterer likevel bredt i
   begge.
5. **Potensialbarriere/tunnelering og harmonisk oscillator er svakere representert
   enn man skulle tro.** Til tross for at dette er «signatur»-temaer i kvantefysikk,
   dukker ren barriere/spredning opp i bare ~20 % av settene og harmonisk oscillator
   i ~40 %. Eksamen vekter hydrogen, angulærmoment, superposisjon og spinn/fler-
   elektron tyngre. Læreboka bør speile dette (se del 7).

---

## 2. Temafrekvens-tabell

Temaklassifisering av alle **15 settene**, gruppert i fire årsklynger. Celleverdi =
antall sett i klyngen der temaet forekommer som minst én deloppgave. Klyngene:
**2015–16** (V15, H15, V16 = 3 sett), **2017–18** (V17, H17, V18, H18 = 4),
**2019–20** (V19, H19, V20 = 3), **2021–24** (V21, V22, V23, V24, H24 = 5).
Gjenganger-scoren teller alle 15 settene.

| Tema | 2015–16 (3) | 2017–18 (4) | 2019–20 (3) | 2021–24 (5) | **Gjenganger-score** |
|---|---|---|---|---|---|
| **Forventningsverdier & standardavvik (σ) — operatorbruk** | 3 | 4 | 3 | 5 | **≈ 93 %** (universell ferdighet) |
| **Hydrogenatomet (kvantetall, radialdel, energinivå, foton, normering)** | 2 | 2 | 3 | 4 | **≈ 73 %** |
| **Superposisjon & tidsutvikling (energimåling, tidsuavhengighet)** | 1 | 4 | 2 | 4 | **≈ 73 %** |
| **Fler-elektron / to-partikkel / symmetri / spinn / Pauli / atomkonfig** | 2 | 2 | 2 | 5 | **≈ 73 %** |
| **Eksperimentell kvantefysikk (de Broglie/Bragg, Compton, fotoelektrisk)** | 2 | 4 | 1 | 4 | **≈ 73 %** |
| **Angulærmoment L̂², L̂_z (egenverdier, superposisjon, L_z-måling)** | 2 | 2 | 3 | 3 | **≈ 67 %** |
| **Schrödingerligning-grunnlag (TASL/TUSL, separasjon, planbølge, bølgepakke)** | 1 | 3 | 1 | 2 | **≈ 47 %** |
| **Heisenbergs uskarphetsrelasjon / kommutatorer (eksplisitt)** | 1 | 1 | 1 | 4 | **≈ 47 %** |
| **Harmonisk oscillator (Hermite, stige-/senkeoperator, 2D, gaussisk)** | 2 | 1 | 1 | 2 | **≈ 40 %** |
| **Perturbasjon-tillegg: relativistisk korr. / spinn-bane (LS) / Zeeman** | 0 | 1 | 2 | 2 | **≈ 33 %** |
| **Uendelig brønn / partikkel i boks (inkl. partikkel på sirkel)** | 0 | 3 | 0 | 2 | **≈ 33 %** |
| **Degenerasjon (begrep + telling d = n²)** | 1 | 2 | 1 | 1 | **≈ 33 %** |
| **Potensialbarriere / tunnelering / spredningstilstand / deltabrønn** | 0 | 0 | 2 | 1 | **≈ 20 %** |
| **Diatomisk molekyl (rotasjon/vibrasjon, redusert masse)** | 0 | 0 | 1 | 1 | **≈ 13 %** |
| **Stern–Gerlach-eksperimentet (spesifikt)** | 0 | 0 | 1 | 1 | **≈ 13 %** |

**Viktigste funn:**

- **Fem søyler bærer nesten hvert sett:** (1) evnen til å regne **forventningsverdier
  og standardavvik** for en gitt ψ (universell — ~93 %), (2) **hydrogenatomet**, (3)
  **superposisjon + tidsutvikling** med målingspostulatet, (4) **fler-elektron/spinn/
  symmetri**, og (5) **eksperimentell kvantefysikk** (åpningsoppgaven). Et typisk
  moderne sett har oppgave 1 = eksperiment (de Broglie/Compton/fotoelektrisk),
  oppgave 2 = hydrogen/superposisjon/1D-system, oppgave 3 = fler-elektron/spinn.
- **Hydrogen, angulærmoment og superposisjon er tett sammenvevd.** De opptrer ofte i
  *samme* oppgave: en superposisjon av ψ_{nlm}-tilstander som normeres, får
  egenverdier for Ĥ/L̂²/L̂_z, utvikles i tid, og der man skal måle energi eller L_z
  og finne sannsynligheter. Å beherske denne «pakken» er den enkeltferdigheten som
  gir flest poeng.
- **Fler-elektron/spinn er i sterk vekst:** til stede i **alle** fem settene 2021–24
  (mot 2 av 3 tidlig). Kjernen er de fire to-elektron spinn-egenfunksjonene
  (triplett + singlett), symmetrikravet (Pauli), utvekslingskraften, og oppfylling
  av atomorbitaler (Hund) for et navngitt grunnstoff.
- **Perturbasjon-tilleggene er «det harde sluttstykket» (~33 %):** relativistisk
  korreksjon til kinetisk energi (V2021), spinn-bane/LS-kobling og finstruktur
  (V2018), og Zeeman-ledd i magnetfelt (V2020, V2024). Disse ligger i ytterkanten av
  pensum og skiller toppkarakterene.
- **Barriere/tunnelering er lavfrekvent (~20 %)** og harmonisk oscillator moderat
  (~40 %) — mindre enn den klassiske kvantefysikk-forventningen. Dekk dem solid, men
  ikke som satsingsområde.
- **Numerikk er fraværende** som eksamensform (kun antydet i V2020-hjemmeeksamen).

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen. Fordi **ingen sensorveiledning finnes**, er
«forventet metode» utledet fra oppgavetekst, hint, oppgitte formler og Griffiths.
Verbfordelingen i settene er styrende: **«Vis at …»** (utledning) er det klart
dominerende verbet, tett fulgt av **«Beregn/Finn …»** (regn) og **«Forklar/Begrunn
… med egne ord»** (tolk). Nesten hver oppgave blander alle tre.

### A. Eksperimentell kvantefysikk I — materiens bølgenatur (de Broglie, Bragg, Davisson–Germer)
- **Krav:** Skriv de Broglie-bølgelengden `λ = h/p`. **Sentralt poeng ved
  «relativistisk»-varianten:** `λ = h/p` gjelder alltid, men `p` må hentes fra den
  relativistiske energirelasjonen `E² = (E₀)² + (pc)²` → `pc = √(E² − E₀²)`, *ikke*
  fra `p = √(2mK)`. Ikke-relativistisk (termiske nøytroner/elektroner, `v ≪ c`):
  `λ = h/√(2mK)`. Regn i eV og eV/c med `hc = 1240 eV·nm`. Bragg: utled
  `2d sinθ = nλ` fra konstruktiv interferens (veiforskjell `2d sinθ` = helt antall
  bølgelengder); sammenlign observert λ med de Broglie-λ.
- **Frekvens:** de Broglie/Bragg i ~40 % av settene; åpningsoppgave når den er med.

### B. Eksperimentell kvantefysikk II — Compton-spredning
- **Krav:** `λ' − λ = (h/m_e c)(1 − cosθ)`; foton `E = hc/λ`, `p = h/λ`. Forklar de
  **to detektortoppene**: den uforskjøvne (`λ₀`, spredning mot tungt bundet elektron/
  hele atomet) og den forskjøvne (`λ'`, mot tilnærmet fritt elektron), og at
  `λ₀`-toppen er nesten uavhengig av θ. Nevn de tre forutsetningene: energibevaring,
  impulsbevaring, foton som partikkel. Tegn impulsvektorene i `γ + e → γ' + e'`.
- **Frekvens:** ~27 %; går ofte sammen med de Broglie i samme sett.

### C. Eksperimentell kvantefysikk III — fotoelektrisk effekt
- **Krav:** `K_max = hν − w₀`. Fra Millikan-/`K_max`-mot-`ν`-graf: stigningstall = `h`,
  skjæring gir arbeidsfunksjonen `w₀ = hν₀`. To gyldige avlesninger: (A) les
  stigningstall direkte, (B) to punkter → `h = ΔK/Δν`. Grunnleggende innsikt:
  lysets kvantisering/partikkelnatur. Kvalitativ variant (V2023): navngi de tre
  eksperimentelle resultatene bølgeteorien ikke kan forklare, og Einsteins
  fotonhypotese fra 1905.
- **Frekvens:** ~33 % — den vanligste av de tre eksperiment-typene.

### D. Forventningsverdier og standardavvik for en gitt ψ(x) (den universelle ferdigheten)
- **Krav:** Gitt en polynomisk (`C(a²−x²)`), gaussisk (`Ae^{−a²x²/2}`) eller
  eksponentiell (`Ne^{−ax}`) bølgefunksjon: normér (`∫|ψ|²dx = 1`), argumentér for
  `⟨x⟩ = ⟨p⟩ = 0` ved symmetri (`|ψ|²` jevn ⇒ `⟨x⟩ = 0`; reell ψ ⇒ `⟨p⟩ = 0`),
  beregn `⟨x²⟩`, `⟨p²⟩`, `σ_x = √(⟨x²⟩−⟨x⟩²)`, `σ_p = √(⟨p²⟩−⟨p⟩²)`, og sjekk
  `σ_x σ_p ≥ ħ/2`. **`⟨p²⟩` to veier:** (A) direkte `∫ψ*(−ħ²ψ'')dx`; (B) via
  `⟨p²⟩ = ħ²∫|ψ'|²dx` (delvis integrasjon — ofte enklere, og eksplisitt anbefalt via
  hint i V2021). Bruk integraltabellen. Gauss gir likhet i Heisenberg, polynom litt
  over.
- **Frekvens:** ~93 % — inngår i praksis i hvert sett, ofte som flere deloppgaver.

### E. Hydrogenatomet — kvantetall, radialdel, energinivåer, fotonoverganger
- **Krav (kvantetall):** `n = 1,2,…`; `l = 0,…,n−1`; `m_l = −l,…,+l`; `L̂²→ħ²l(l+1)`,
  `L̂_z→ħm_l`; degenerasjon `d = n²` (uten spinn) — vises ofte eksplisitt.
- **Krav (foton):** `E_γ = E₀(1/n_f² − 1/n_i²)`, `E₀ = 13.6 eV`, `λ = hc/E_γ`.
- **Krav (normering / bestem a, E₁):** to grep. (A) Normeringsintegralet
  `∫₀^∞|R|²r²dr = 1` (eller `∫|u|²dr = 1` med `u = rR`) via `∫₀^∞ xⁿe^{−x/a}dx =
  n!a^{n+1}`. (B) Sett `ψ₁₀₀` eller `u₁₀` inn i den (modulerte) radielle/tidsuavhengige
  Schrödingerligningen og les av `a` og `E₁` ved koeffisient-matching (krev at
  ligningen holder for alle `r`). Griffiths' `∇²` i sfæriske koordinater oppgis ofte.
- **Krav (`⟨r⟩`, `σ_r`, `⟨θ⟩`, `⟨φ⟩`):** `⟨r⟩ = ∫r|R|²r²dr` osv.; oppgi i nm.
- **Frekvens:** ~73 %.

### F. Angulærmoment L̂², L̂_z — egenverdier, superposisjon, L_z-måling
- **Krav (ren ψ_{nlm}):** `L̂²→ħ²l(l+1)`, `L̂_z→ħm_l`; vis `(ħm_l)² ≤ ħ²l(l+1)`.
- **Krav (superposisjon over l, m_l):** normér ved `Σ|c|² = 1`; forventningsverdi
  `⟨Ô⟩ = Σ|c_i|²o_i` (vektet snitt av egenverdiene) — raskest når tilstanden er gitt
  i egenbasis.
- **Krav (L_z-måling):** utvikle en gitt vinkelfunksjon i `Y_l^m` (oppgitte `Y_1^{±1}`,
  `sinφ = (e^{iφ}−e^{−iφ})/2i`); `P(m_l ħ) = |koeffisient|²`.
- **Frekvens:** ~67 %; nesten alltid koblet til hydrogen/superposisjon.

### G. Superposisjon og tidsutvikling (tidsavhengig Schrödinger + målingspostulatet)
- **Krav (separasjon):** vis at `Ψ(r,t) = ψ(r)e^{−iEt/ħ}` løser TASL og at ψ oppfyller
  TUSL; kjenn `|Ψ|²` som normert sannsynlighetstetthet.
- **Krav (tidsutvikling):** hver egentilstand får sin fasefaktor `e^{−iE_n t/ħ}`;
  `Ψ = Σ c_n ψ_n e^{−iE_n t/ħ}`; normering bevares (`Σ|c_n|² = 1`).
- **Krav (energimåling):** utfall er én `E_n` med `P = |c_n|²`; `⟨E⟩ = Σ|c_n|²E_n`
  og `σ_E`. `⟨E⟩` er tidsuavhengig.
- **Krav («hvilke forventningsverdier er tidsuavhengige?»):** begrunn via kommutator
  med Ĥ — størrelser som **kommuterer med Ĥ** (energi; `L̂²`, `L̂_z` når `[Ĥ,L̂]=0`)
  er konstante; `⟨r⟩` og andre kan oscillere med `(E_m−E_n)/ħ`. Ehrenfests teorem
  brukes til `⟨v(t)⟩` (H2018). **Begrunn, ikke bare påstå.**
- **Frekvens:** ~73 %.

### H. Fler-elektron / to-partikkelsystemer — symmetri, spinn, exchange, atomkonfig
- **Krav (fire spinntilstander):** triplett (symmetrisk, `S=1`, `m_s = +1,0,−1`):
  `↑↑`, `(↑↓+↓↑)/√2`, `↓↓`; singlett (antisymmetrisk, `S=0`): `(↑↓−↓↑)/√2`. Oppgi
  `Ŝ²→ħ²S(S+1)`, `Ŝ_z→ħm_s`. Vis `Ŝ² = 0` for singletten (H2017).
- **Krav (Pauli):** hele Ψ = ψ_rom·χ_spinn må være antisymmetrisk under 1↔2;
  symmetrisk spinn ⇒ antisymmetrisk rom, og omvendt. Vis antisymmetrien eksplisitt.
- **Krav (utvekslingskraft):** ikke en ekte kraft, men statistisk følge av
  symmetrikravet — symmetrisk romdel ⇒ elektroner nærmere (`⟨(x₁−x₂)²⟩` mindre).
  Forklarer Hunds regel: karbons/nitrogens/oksygens grunntilstand fyller p-orbitaler
  med parallelle spinn (triplett) → antisymmetrisk rom → lavere Coulomb → lavest
  energi. Tegn nivåskjema og fyll inn elektroner for navngitt Z.
- **Krav (finstruktur/spinn-bane, V2018):** `Ĥ_LS = C L̂·Ŝ`; `Ĵ = L̂+Ŝ`,
  `L̂·Ŝ = ½(Ĵ²−L̂²−Ŝ²)` → egenverdi `½ħ²[j(j+1)−l(l+1)−s(s+1)]`. Splitting av
  `n=2, l=1` i `j=½, 3/2`; finn `C` fra oppgitt `Δλ` via `ΔE = hc·Δλ/λ²`.
- **Frekvens:** ~73 % (100 % 2021–24).

### I. 1D-systemer — uendelig brønn, partikkel i boks, partikkel på sirkel
- **Krav:** Utled TUSL på formen `ψ'' = −k²ψ`, `k = √(2mE)/ħ`; vis at `A sin(kx)` løser
  den; randbetingelser `ψ(0) = ψ(a) = 0` → `k_n = nπ/a`, `E_n = n²π²ħ²/(2ma²)`
  (pass på breddedefinisjon `a` vs `2a` — brønnen sentrert om origo gir cos/sin med
  paritet). Superposisjon i brønnen (`A(a²−x²)` eller `C sin³`): normér, prosjekter
  på egentilstandene (`c_n = ∫ψ_nψ dx`), `P(E_n) = |c_n|²`. Partikkel på sirkel
  (V2017): periodisk randbetingelse `ψ(0) = ψ(L)`, egenverdier for `p̂_x`, degenerasjon.
- **Vanlig felle:** hopp ikke over projeksjonen ved energimåling — poenget *er*
  overlappintegralet. Sjekk paritet: bare egenfunksjoner med samme paritet som ψ
  overlapper.
- **Frekvens:** ~33 %.

### J. Harmonisk oscillator — Hermite-polynomer, stige-/senkeoperatorer, 2D
- **Krav (senkeoperator):** `â₋ = (1/√(2ħmω))(ip̂ + mωx)`; regn `â₋ψ₀`. To veier:
  sett inn `p̂ = −iħ d/dx`, eller bruk at `â₋ψ₀ = 0`. Stigeoperator-algebra:
  `â₊ψ_n = √(n+1)ψ_{n+1}`, `â₋ψ_n = √n ψ_{n−1}`, `[â₋,â₊] = 1`; koherente tilstander
  som egentilstander til `â₋` (H2015).
- **Krav (Hermite-diff.likning):** bestem `K` i `(d²/dξ² − 2ξ d/dξ + (K−1))H_n = 0`
  ved å sette inn oppgitt `H_n` og lese av `K = 2n+1` (⇔ `E_n = (n+½)ħω`). Vis
  regningen.
- **Krav (2D/separasjon):** `ψ(x,y) = ψ_x(x)ψ_y(y)`, `E = ħω(n+1)`, degenerasjon,
  L̂_z-egentilstander `ψ_± = (ψ₁₀ ± iψ₀₁)/√2` (V2015).
- **Krav (halv-oscillator / avkuttet potensial, V2023):** kun de odde `ψ_n` (som
  forsvinner i `x=0`) overlever → `E = (n+½)ħω` med `n = 1,3,5,…`; begrunn med
  `ψ(0) = 0`.
- **Frekvens:** ~40 %.

### K. Potensialbarriere / tunnelering / spredningstilstand / potensialsteg / deltabrønn
- **Krav (kvalitativt):** klassisk vs. kvantemekanisk. `E > V₀`: klassisk passerer
  alltid; kvantemekanisk delvis refleksjon, lengre `λ` og lavere amplitude over
  barrieren. `E < V₀`: klassisk full refleksjon; kvantemekanisk eksponentielt
  avtagende ψ inne i barrieren + endelig transmisjon (tunnelering). **Skisse:** tegn
  ψ mot høyre med riktig endring i bølgelengde og amplitude i hvert område.
- **Krav (kvantitativt):** planbølger i hvert område, match ψ og ψ' ved grensene,
  finn amplitudeforhold, `T = (k_ut/k_inn)|F/A|²` og `R`; sjekk `T + R = 1`. For
  barriere: forenkle til uttrykk med `sin²(k₁L)`. Deltabrønn (V2021):
  `V = −αδ(x)`, gitt grunntilstand, `⟨V⟩`, `⟨K⟩`, `σ_x`, `σ_p`.
- **Frekvens:** ~20 %.

### L. Perturbasjon-tillegg — relativistisk korreksjon, LS-kobling, Zeeman
- **Krav (relativistisk, V2021):** rekkeutvikle `√(1+x)`, `K ≈ K₀ − p⁴/8m³c²`; regn
  `⟨K'⟩` for grunntilstanden via `⟨(p̂²u)*(p̂²u)⟩`; skaler til tyngre atom via `Z`
  (gull, `Z=79`) og kommenter at relativistisk korreksjon vokser sterkt med `Z`.
- **Krav (Zeeman, V2020/V2024):** `Ĥ = Ĥ₀ + (e/2m_e)B L̂_z`; vis at ψ_{nlm} fortsatt
  har skarp energi (er egentilstand), finn den nye egenverdien, og la tilstanden
  utvikle seg i tid med to karakteristiske frekvenser.
- **Krav (LS, V2018):** se H over.
- **Frekvens:** ~33 %.

### M. Grunnleggende KM og begreper (kvalitative)
- **Krav:** kort, presist, riktig fagbegrep. Gjengangere: forklar egenfunksjoner /
  stasjonære tilstander (V2021); tolkning og krav til `|Ψ|²`; hvordan en klassisk
  størrelse `Q(r,p)` blir operator; separasjon av TASL → TUSL; fase- og
  gruppehastighet for en bølgepakke; fermioner vs. bosoner; degenerasjon-begrepet;
  forskjell på superposisjon og egentilstand og hva en måling gir for hver.
- **Frekvens:** minst én slik deloppgave i nesten hvert sett.

---

## 4. Sensorens krav (utledet — ingen offisiell veiledning i arkivet)

> Fordi arkivet **mangler sensorveiledninger**, bygger dette på oppgavenes egne
> signaler (verbvalg, hint, oppgitte formler, de få synlige poengvektene) og på
> hva pensumboka Griffiths krever. Behandle som velbegrunnet slutning, ikke fasit.

1. **«Vis at …» dominerer — mellomregningen ER svaret.** Det hyppigste verbet i
   settene er utledningsimperativet. Et riktig sluttresultat uten sporbar
   utledning gir lite; sensor vil se separasjonen, koeffisient-matchingen,
   integralet, egenverdi-innsettingen. Skriv hvert steg.
2. **«Begrunn/Forklar med egne ord» er selvstendig poenggivende.** Mange deloppgaver
   ber eksplisitt om kvalitativ begrunnelse (hvorfor `⟨x⟩ = 0`; hvorfor to
   Compton-topper; hvorfor en forventningsverdi er tidsuavhengig; hvorfor triplett
   gir lavest energi). I settene med synlige poeng (V2017, H2017) er slike
   kvalitative deloppgaver verdt **3–5 poeng** — like mye som en regneoppgave.
3. **Symmetri- og paritetsargument før integrasjon.** Ved forventningsverdier,
   overlappintegraler (brønn, oscillator) og L_z-utvikling forventes det at man
   først avgjør om integranden er odde (⇒ 0) og hvilke egenfunksjoner som faktisk
   overlapper. Dette sparer regning og er en dokumentert forståelse.
4. **Sannsynlighet = |projeksjon|².** Ved energi-/L_z-måling må man projisere på
   egentilstandene (`|c_n|²`), ikke gjette. Den mest sannsynlige enkeltfeilen i
   brønn-/superposisjonsoppgaver.
5. **Tidsuavhengighet begrunnes med kommutator.** Å påstå at `⟨Ô⟩` er konstant uten
   å vise at Ô kommuterer med Ĥ er ikke nok — oppgavene sier eksplisitt «begrunn
   svaret».
6. **Relativistisk vs. ikke-relativistisk impuls.** `p = √(2mK)` gjelder bare for
   `v ≪ c`; for raske partikler må `pc = √(E²−E₀²)`. Flere sett tester nettopp dette
   skillet i åpningsoppgaven.
7. **Enheter og tallsvar.** Oppgi svar med enhet (nm, eV, keV). Regn helst i eV og
   eV/c med `hc = 1240 eV·nm` for å unngå SI-feil. Numeriske svar («vi vil ha den
   numeriske verdien også», V2015) må faktisk regnes ut.
8. **Bruk de oppgitte hjelpemidlene.** Integraltabellen, Hermite-polynomene og
   konstantene på formelsida (der den finnes) er lagt inn fordi løsningen krever
   dem — å utlede dem på nytt er bortkastet tid.

### Hva som trolig skiller karakternivåene
- **Bestått:** setter opp riktig ligning (TUSL/TASL, egenverdiligning), kjenner
  kvantetallreglene, normerer en enkel ψ, og finner de «billige» a-deloppgavene.
- **Midtsjikt:** gjennomfører flertrinns-utledningene (separasjon → TUSL,
  koeffisient-matching for `a`/`E₁`, `⟨p²⟩` via delvis integrasjon, superposisjon →
  tidsutvikling → `P = |c_n|²`) med symmetriargument.
- **Toppsjikt:** (i) begrunner symmetri/paritet og tidsuavhengighet uoppfordret via
  kommutatorer, (ii) håndterer perturbasjon-tilleggene (relativistisk korreksjon,
  LS-kobling, Zeeman) korrekt, (iii) holder vektor/operator/egenverdi fra hverandre
  og oppgir alle svar med enhet, (iv) leverer presise kvalitative forklaringer med
  riktig fagbegrep (utvekslingskraft, dualisme, degenerasjon, tunnelering).

### Figur- og skisse-krav
- **Skisser går igjen:** ψ over en potensialbarriere (riktig λ- og amplitudeendring),
  potensialkurve for diatomisk molekyl med `R` og `V₀`, Stern–Gerlach-oppsett,
  impulsvektorer i Compton-spredning, nivåskjema med elektroner fylt inn for et
  navngitt atom, energinivåer før/etter et perturbasjonsledd. Tegn nøyaktig — flere
  deloppgaver ber *bare* om en skisse.

---

## 5. Typiske feil (utledet fra oppgavenes hint, feller og formuleringer)

1. **Bruke `p = √(2mK)` på relativistiske partikler** i stedet for `pc = √(E²−E₀²)`
   — testes eksplisitt i de Broglie-/Compton-oppgavene.
2. **Hoppe over projeksjonen ved energimåling** og gjette sannsynligheter i stedet
   for å regne `P(E_n) = |c_n|²`.
3. **Ignorere paritet/symmetri** før man integrerer — regne ut integraler som er null
   av symmetrigrunner, eller la feil egenfunksjoner overlappe.
4. **Påstå tidsuavhengighet uten kommutator-argument** («`⟨r⟩` er konstant» uten å
   sjekke `[Ĥ, r̂]`).
5. **Feil breddedefinisjon i brønnen** (`a` vs. `2a`, sentrert om origo vs. `[0,a]`)
   → feil `k_n` og `E_n`, og feil paritet på egenfunksjonene.
6. **Blande sammen singlett og triplett / feil symmetri på romdelen** — glemme at
   *hele* Ψ må være antisymmetrisk, så symmetrisk spinn krever antisymmetrisk rom.
7. **Kalle utvekslingskraften en ekte kraft** — den er en statistisk følge av
   symmetrikravet.
8. **Glemme normeringen** eller normeringskonstanten før man regner
   forventningsverdier.
9. **Droppe enheter / ikke regne ut den numeriske verdien** når oppgaven ber om et
   tall (nm, eV, keV).
10. **Feil egenverdier for L̂²/L̂_z** (`ħ²l(l+1)` og `ħm_l`), eller å bryte
    `|m_l| ≤ l`.
11. **Ikke bruke integraltabellen/Hermite-polynomene** på formelsida, og i stedet
    kaste bort tid på å utlede standardintegraler.
12. **Glemme fasefaktoren `e^{−iE_n t/ħ}` per egentilstand** i tidsutviklingen, eller
    bruke én felles fasefaktor for en superposisjon med ulike energier.

---

## 6. Formel- og notasjonsapparat

Studenten har Rottman + Øgrim/Lian + Angell/Lian + **eget A4-notatark**, og i nyere
sett en **utdelt konstant-/formelside**. Skillet nedenfor er hva som må kunne
*brukes aktivt* under tidspress (og bør stå på notatarket) mot hva som slås opp.

### Bør stå på eget A4-ark / utdelt formelside (gjenkjennes og brukes)
- **Konstanter:** `m_e = 0.511 MeV/c²`, `m_p = 938 MeV/c²`, `c`, `e`, `ħ`, `h`,
  `k_e = 1/4πε₀`, Bohr-radius `a₀ ≈ 0.053 nm`, `E₀ = 13.6 eV`, `hc = 1240 eV·nm`.
- **Integraltabell:** `∫₀^∞ xⁿe^{−βx}dx = n!/β^{n+1}`; gaussiske `∫e^{−βx²}dx`,
  `∫x²e^{−βx²}dx`; trigonometriske `∫sin²`, `∫cos²`, `∫x sin`, `∫x² sin`; delvis
  integrasjon `∫uv'dx = uv − ∫u'v dx`. (Alle disse er faktisk utdelt i V2022/V2023.)
- **Hermite-polynomer H₀–H₅** (utdelt ved HO-oppgaver, V2023).
- **Sfærisk-harmoniske:** `Y₀⁰ = 1/√(4π)`, `Y₁⁰ = √(3/4π)cosθ`, `Y₁^{±1} = ∓√(3/8π)
  sinθ e^{±iφ}` (oppgis ved L_z-måling).
- **Operatorer i sfæriske/sylinderkoordinater:** `∇²`, `L̂² = −ħ²[…]`, `L̂_z =
  −iħ ∂/∂φ` (oppgis når de trengs).

### Må beherskes aktivt (kjerneverktøyene)

**1. Eksperimentell kvantefysikk:**
- de Broglie `λ = h/p`; relativistisk `pc = √(E²−E₀²)`, ikke-rel. `λ = h/√(2mK)`
- Bragg `2d sinθ = nλ`; Compton `λ'−λ = (h/m_ec)(1−cosθ)`; foton `E = hc/λ`, `p = h/λ`
- fotoelektrisk `K_max = hν − w₀`

**2. Bølgefunksjon og operatorer:**
- `|Ψ|²` = sannsynlighetstetthet, `∫|Ψ|²dx = 1`; `p̂ = −iħ d/dx`, `x̂ = x`
- `⟨Ô⟩ = ∫ψ*Ôψ dx`; `σ_O = √(⟨O²⟩−⟨O⟩²)`; kommutator `[x̂,p̂] = iħ`
- generell uskarphet `σ_A²σ_B² ≥ (⟨[Â,B̂]⟩/2i)²` → Heisenberg `σ_xσ_p ≥ ħ/2`

**3. Schrödingerligning:**
- TASL `iħ ∂Ψ/∂t = ĤΨ`, `Ĥ = −(ħ²/2m)∇² + V`; separasjon `Ψ = ψ(r)e^{−iEt/ħ}`
- TUSL `Ĥψ = Eψ`; krav til ψ (normerbar, kontinuerlig, glatt)

**4. 1D-systemer:**
- uendelig brønn `E_n = n²π²ħ²/(2ma²)`, `ψ_n = √(2/a)sin(nπx/a)`
- barriere/steg: planbølger, match ψ og ψ', `T`, `R`, `T+R=1`
- harmonisk oscillator `E_n = (n+½)ħω`, `ψ_n ∝ H_n(ξ)e^{−ξ²/2}`, `ξ = √(mω/ħ)x`;
  `â₊ψ_n = √(n+1)ψ_{n+1}`, `â₋ψ_n = √n ψ_{n−1}`, `[â₋,â₊] = 1`

**5. Hydrogenatomet:**
- `ψ_{nlm} = R_{nl}(r)Y_l^m(θ,φ)`; `E_n = −E₀/n²`, `E₀ = 13.6 eV`; `d = n²`
- kvantetall `n ≥ 1`, `0 ≤ l ≤ n−1`, `−l ≤ m_l ≤ l`
- normering `∫₀^∞|R|²r²dr = 1`; foton `E_γ = E₀(1/n_f²−1/n_i²)`, `λ = hc/E_γ`

**6. Angulærmoment og spinn:**
- `L̂²ψ = ħ²l(l+1)ψ`, `L̂_zψ = ħm_lψ`; `Ŝ²χ = ħ²s(s+1)χ`, `Ŝ_zχ = ħm_sχ`, `s = ½`
- `Ĵ = L̂+Ŝ`, `L̂·Ŝ = ½(Ĵ²−L̂²−Ŝ²)`
- triplett (S=1, symmetrisk) + singlett (S=0, antisymmetrisk)

**7. Superposisjon og måling:**
- `Ψ = Σ c_n ψ_n e^{−iE_n t/ħ}`, `Σ|c_n|² = 1`; `P(E_n) = |c_n|²`; `⟨E⟩ = Σ|c_n|²E_n`
- `⟨Ô⟩` tidsuavhengig ⇔ `[Ĥ,Ô] = 0`; Ehrenfest `d⟨x⟩/dt = ⟨p⟩/m`

**8. Fler-elektron og atomer:**
- Pauli: total Ψ antisymmetrisk under partikkelbytte; `Ψ = ψ_rom·χ_spinn`
- utvekslingskraft (statistisk symmetrieffekt); Hunds regel; orbitaloppfylling `1s,2s,2p…`

**9. Perturbasjon-tillegg:**
- relativistisk `K' = −p̂⁴/8m³c²`; Zeeman `Ĥ = Ĥ₀ + (e/2m_e)B L̂_z`;
  spinn-bane `Ĥ_LS = C L̂·Ŝ`

**10. Diatomisk molekyl:**
- redusert masse `µ = m₁m₂/(m₁+m₂)`; treghetsmoment `I = µR²`; rotasjon `E_l =
  ħ²l(l+1)/2µR²`; vibrasjon (HO) `E_vib = (n+½)ħω`, `ω = √(k/µ)`

### Skal IKKE bygges tungt på
- **Numerisk Python / computational essay:** fraværende som eksamensform (kun
  antydet i pandemi-hjemmeeksamen V2020). Ingen grunn til et eget numerikk-spor.
- **Ren potensialbarriere-kvantitativ (full T/R-algebra):** lavfrekvent (~20 %) —
  dekk kvalitativt + ett kvantitativt eksempel, ikke som satsingsområde.
- **Diatomisk molekyl og Stern–Gerlach som *eget* stort tema:** hver ~13 % — dekk
  kompakt (SG mest som spinn-motivasjon; molekyl som anvendelse av HO + redusert
  masse).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer settet nesten hvert år)

1. **Forventningsverdier og standardavvik for en gitt ψ:** normering, `⟨x⟩=⟨p⟩=0`
   ved symmetri, `⟨p²⟩` (direkte og via delvis integrasjon), `σ_x`, `σ_p`,
   Heisenberg-sjekk. ~93 % — den universelle ferdigheten.
2. **Hydrogenatomet:** kvantetall og degenerasjon `d = n²`, energinivå og
   fotonoverganger (`λ = hc/E_γ`), normering av radialdel og bestemmelse av `a`/`E₁`
   ved koeffisient-matching, `⟨r⟩`/`σ_r`. ~73 %.
3. **Superposisjon + tidsutvikling + målingspostulatet:** normér, `Ψ(t)` med
   fasefaktorer, `P(E_n) = |c_n|²`, `⟨E⟩`/`σ_E`, og «hvilke `⟨Ô⟩` er tidsuavhengige»
   begrunnet med kommutator. ~73 %.
4. **Fler-elektron/spinn/symmetri:** de fire spinn-egenfunksjonene (triplett +
   singlett) med `Ŝ²`/`Ŝ_z`, Pauli-symmetri, utvekslingskraft, og orbitaloppfylling
   (Hund) for et navngitt atom. ~73 %, og i 100 % av settene 2021–24.
5. **Angulærmoment L̂²/L̂_z:** egenverdier, superposisjon over `l,m_l`, L_z-måling via
   utvikling i `Y_l^m`. ~67 %; alltid koblet til hydrogen/superposisjon.
6. **Eksperimentell kvantefysikk (åpningsoppgaven):** de Broglie/Bragg
   (relativistisk vs. ikke), Compton (to topper), fotoelektrisk (`K_max = hν − w₀`).
   ~73 % samlet.

### Nivå 2 — må kunne (dukker opp jevnlig, avgjør B mot C)

7. **Schrödinger-grunnlaget:** TASL/TUSL, separasjon, planbølge/bølgepakke,
   fase-/gruppehastighet, `|Ψ|²`-tolkning, begreper (egenfunksjon, stasjonær
   tilstand, degenerasjon). ~47 %.
8. **Heisenberg/kommutatorer eksplisitt:** `[x̂,p̂] = iħ`, generell uskarphetsrelasjon,
   bølgepakkebredde. ~47 %.
9. **Harmonisk oscillator:** Hermite-diff.likning (`K = 2n+1`), stige-/senkeoperatorer,
   2D-separasjon, avkuttet/halv-oscillator. ~40 %.
10. **Uendelig brønn / partikkel i boks / på sirkel:** utled `E_n`, superposisjon og
    projeksjon, randbetingelser og paritet. ~33 %.
11. **Perturbasjon-tilleggene:** relativistisk korreksjon, spinn-bane/LS + finstruktur,
    Zeeman i magnetfelt — «det harde sluttstykket». ~33 %.

### Nivå 3 — bør kjenne til (lavfrekvent, men reelle)

12. **Potensialbarriere/tunnelering/spredning/deltabrønn:** kvalitativ klassisk-vs-
    kvantemekanisk + skisse av ψ, og ett kvantitativt `T`/`R`-eksempel. ~20 %.
13. **Diatomisk molekyl:** redusert masse, rotasjons- og vibrasjonsenergier,
    dissosiasjon. ~13 %.
14. **Stern–Gerlach:** hvilken egenskap ble oppdaget, sekvensielle apparater (tell
    elektroner gjennom A/B/C). ~13 %.

### Prognose for neste eksamen

En **4-timers skriftlig skoleeksamen**, penn og papir, med Rottman + Øgrim/Lian +
Angell/Lian + eget A4-notatark (og sannsynligvis en utdelt konstant-/integralside),
**uten** noe numerisk/Python-innslag. Mest sannsynlig **3 store, sammensatte
oppgaver** (eventuelt 5–6 kortere) etter mønsteret: **(1)** eksperimentell
kvantefysikk (de Broglie/Bragg, Compton *eller* fotoelektrisk) — ofte med en
uskarphets-/forventningsverdi-del på slutten; **(2)** hydrogenatomet med
angulærmoment, en superposisjon som normeres og tidsutvikles, energi-/L_z-måling, og
gjerne et perturbasjonsledd (Zeeman/relativistisk/LS) på toppen; **(3)** fler-
elektron/spinn: de fire spinn-egenfunksjonene, Pauli-symmetri, utvekslingskraft og
orbitaloppfylling for et navngitt atom. Et 1D-system (brønn eller harmonisk
oscillator) opptrer i minst én av oppgavene. Verbfordelingen vil være tung på
**«Vis at …»** og **«Begrunn/Forklar med egne ord»**.

**Læreboka bør derfor** organiseres rundt nivå 1-temaene med full metodedrill
(vis-at-utledninger, symmetri-/paritetsargument, projeksjon `|c_n|²`,
kommutator-begrunnet tidsuavhengighet, vektor/operator/egenverdi-disiplin, enheter i
eV/nm), gi nivå 2 solide standardoppskrifter, dekke nivå 3 kompakt — og **ikke** bruke
ressurser på et numerisk Python-spor, som eksamen ikke tester.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/FYS2140/`
(filnavnmønster `FYS2140_<V|H><år>.pdf`). Arkivet inneholder **15 oppgavesett og
ingen løsningsforslag/sensorveiledninger**.

**Lest i sin helhet, analysert deloppgave for deloppgave (2017–2024, 11 sett):**
- V2017, H2017, V2018, H2018, V2019, H2019, V2020 (hjemmeeksamen), V2021, V2022,
  V2023, V2024, H2024

**Lest grundig for tema- og sjangerregistrering (2015–2016, 4 sett):**
- V2015, H2015, V2016

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside for FYS2140
(scratchpad: `fagbeskrivelse-fys2140.md`), inkl. destillert metodegjennomgang.

**Pensumbok:** David J. Griffiths, *Introduction to Quantum Mechanics* — bekreftet av
direkte referanser i settene (V2021: «ligning 4.53 i Griffiths», «samme uttrykk som
i Griffiths (spredning mot potensialbrønn)»). Flere sett viser til «FYS2140-
kompendiet» (H2018, H2019).

**Merknader om kildene:**
- **Ingen fasit/sensorveiledning finnes i arkivet.** Del 3–5 (metode, sensorkrav,
  typiske feil) er utledet fra oppgavetekst, hint, oppgitte formler, de få synlige
  poengvektene (V2017, H2017, V2015, H2015) og pensumboka Griffiths — ikke fra
  offisiell fasit. Behandle som velbegrunnet, men ikke verifisert.
- Temafrekvensene bygger på fullstendig gjennomlesing av alle 15 sett; usikkerheten
  er lav for temaforekomst, men grensen mellom nært beslektede temaer (f.eks.
  «angulærmoment» vs. «superposisjon» vs. «hydrogen», som ofte er samme oppgave) er
  skjønnsmessig, så prosentene har ±1 sett i slingringsmonn per celle.
- **V2020 var hjemmeeksamen** (pandemi, 8 dager, alle hjelpemidler, teller 80 %) og
  er ikke normgivende for form, men den faglige kjernen er som normalt og er tatt med
  i temafrekvensen.
- **Opphavsrett:** alle beskrivelser av oppgaver og metoder er parafrasert og
  omstrukturert med egne ord. Ingen oppgavetekster er gjengitt ordrett. Formlene er
  standard kvantemekanikk-notasjon og ikke opphavsrettslig beskyttet tekst.
