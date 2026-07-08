# Eksamensanalyse: TMA4123 Matematikk 4M (NTNU)

> **Grunnlag.** Kildearkiv: `~/Desktop/Eksamner/NTNU/TMA4123/` (38 PDF-er som blander 4M-, 4N- og 4D-sett). Analysen bygger på **6 velkarakteriserte, ekte 4M-sett** der oppgaver og/eller offisielle løsningsforslag er lest oppgave-for-oppgave: **TMA4123 vår 2009** (`lfTMA4123-09v`), **TMA4123 vår 2011** (`tma4123mbokmaal` + `tma4123og25mai20_2011losningsforslag`), **TMA4123/4125 vår 2013** (`eksamen2013v` + `losning2013v`), **TMA4123/4125 vår 2014** (`v14-english`), **TMA4122/23 kont august 2009** (`lfTMA4122-23-09k`), og **TMA4122 Matematikk 4M des 2015** (`oppgaver2` + `losningsforslag3`). Fellesmaterialet (SIF5013/5016 4N-fasiter, TMA4130-sett, `lf_tma4135_*`, `TMA4ND2007k`, `lfTMA41xx4ND-10k`) er skummet for kontekst og for å isolere den ekte 4M-poolen. Det utdelte formelarket (numerikk-side) er lest. **Alt innhold er omskrevet med egne ord** — ingen ordrette oppgavetekster eller fasitformuleringer. Matematiske uttrykk, metodenavn og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet.

> **⚠️ Hovedfunn — les dette først (VIKTIG KORRIGERING mot oppdragspremisset):** Oppdraget forutsatte at TMA4123 (4M) **legger mer vekt på kompleks analyse** (analytisitet, Cauchy–Riemann, residyer, Laurent, konform avbildning) enn 4N/4D. **Denne premissen holder ikke mot arkivet.** Etter å ha skannet alle 38 filer for kompleksanalyse-nøkkelord (analytisk funksjon, Cauchy–Riemann, residy, Laurent, konform, holomorf, kompleks integrasjon, integralteorem): **null treff i noen fil.** De faktiske TMA4123/TMA4122 4M-settene handler om **(1) Fourier-rekker** (odde/like utvidelse, summering av tallrekker), **(2) Fourier-transform**, **(3) PDE via separasjon av variable**, og — tyngst av alt — **(4) numeriske metoder** (interpolasjon, Gauss–Seidel/Jacobi, Newtons metode for systemer, Heun/Euler/RK, trapes/Simpson med feil). Det eneste som skiller 4M fra 4N i de delte settene er at **4M hopper over Laplace-transform** (den er 4N-only) og i stedet gjør **numerisk lineær algebra / MATLAB-oppgaver**. Med andre ord: i dette arkivet er 4M om noe den *mer numerisk-anvendte* varianten, ikke den mer kompleks-analytiske. **Konklusjon:** en 4M-bok bør bygges på Fourier/PDE-kjernen (delt med **tma4135**) pluss numerikk-laget (også dekket av **tma4135**) — **ikke** på kompleksanalyse-modulen fra tma4121, siden arkivet ikke belegger noe kompleks-analyse-innhold i 4M. Kompleksanalyse-avsnittene under er beholdt kun som eksplisitt merket «premiss-hypotese, ikke belagt».

> **Status:** **NEDLAGT.** NTNUs emneside for TMA4123 svarer «Det finnes ingen informasjon for dette studieåret / ingen emner med denne koden er tilgjengelige». Emnet er del av den utfasede Matematikk 4-serien (4M/4N/4D → TMA4420-serien fra H2026).

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, bokstavkarakter A–F. Hjelpemiddelkode **C**: bestemt, enkel kalkulator (HP30S / Citizen SR-270X) + **Rottmann matematisk formelsamling** + **ett vedlagt formelark** (1–2 sider; på de nyere settene en ren *numerikk*-formelside). Fast instruks på hvert sett: **«Alle svar skal begrunnes, og det skal gå klart fram hvordan svarene er oppnådd.»** Bar fasit uten utledning gir ikke full uttelling. Oppgavene teller likt (eldre sett angir eksplisitt antall likevektede «punkter», f.eks. 11 punkter fordelt på a/b-deler).

### To emnekoder for «Matematikk 4M»
Arkivet viser at «Matematikk 4M» hadde **to kodede varianter** i LK-perioden:

| Kode | Semester | Paret med | Merknad |
|---|---|---|---|
| **TMA4123** | vår | **TMA4125 Matematikk 4N** (delt oppgavesett) | vår-varianten; hovedkoden i oppdraget |
| **TMA4122** | høst | (egen 4M-høst, delvis delt med TMA4123 i kont) | des-2015-settet + kont-2009 er merket TMA4122/23 |

### Kode-historikk og felles-eksamen
- **SIF-æra (≤ ~2003):** kodene SIF5013/SIF5016 i arkivet er alle merket **Matematikk 4N** (ikke 4M) — de er Laplace/Fourier/PDE-fasiter og hører til fellesmaterialet, ikke til en 4M-forgjenger. (Oppdragets antakelse om at SIF5013 bærer «4M-profilen med kompleksanalyse» stemmer ikke; disse settene inneholder ingen kompleks analyse.)
- **TMA-æra (fra ~2004):** 4M = TMA4123 (vår) / TMA4122 (høst); 4N = TMA4125 (vår) / TMA4130 (høst); 4D = TMA4135. Vår-settene ble **delt mellom 4M (TMA4123) og 4N (TMA4125)** med noen få oppgaver merket «Kun for …».
- **4M/4N-splitten (verifisert):** i det delte vårsettet er de aller fleste oppgavene identiske. Splitten er liten og fast:
  - **Laplace-transform-oppgaven er 4N-only** (2013 O6: «Kun for TMA4125/Matematikk 4N»).
  - **En numerisk lineær-algebra-/MATLAB-oppgave er 4M-only** (2013 O7: «Kun for TMA4123/Matematikk 4M» — Jacobi/Gauss–Seidel-iterasjon på et 4×4-system, gitt som MATLAB-script, med konvergensspørsmål).
- **Nedlagt:** NTNUs emneside gir «ingen informasjon / ingen emner med denne koden». 4M/4N/4D er faset ut til fordel for TMA4420-serien fra H2026. Dette må stå i enhver læreboks forord: emnet finnes ikke lenger som eget eksamensmål.

---

## 2. Temafrekvens-tabell

Celleverdi = antall av de **6 velkarakteriserte 4M-settene** (2009v, 2011v, 2013v, 2014v, kont2009, des2015) der temaet forekommer som minst én (del)oppgave i **4M-varianten**. Sortert etter gjenganger-score. Kolonnen «4M-status» markerer hva som er delt med 4N/4D vs. distinkt.

| Tema | Forekomst | **Gjenganger-score** | 4M-status |
|---|---|---|---|
| **Fourier-rekker** (odde/like utvidelse, cos-/sin-rekke, kompleks form, sum av tallrekke) | 6/6 | **100 %** | Delt med 4N/4D |
| **Numeriske metoder – interpolasjon** (Lagrange / Newtons dividerte differanser + feilledd) | 5/6 | **83 %** | Delt med 4N/4D |
| **PDE via separasjon av variable** (varmelikning; egenverdier fra rand; superposisjon) | 5/6 | **83 %** | Delt med 4N/4D |
| **Numerisk ODE-løser for system** (Heun/forbedret Euler, implisitt trapes, ett skritt) | 5/6 | **83 %** | Delt med 4N/4D |
| **Fourier-transform** (utregning fra definisjon; Fourier-integral for reelt integral; filter/konvolusjon) | 4/6 | **67 %** | Delt med 4N/4D |
| **Numerisk lineær algebra: Gauss–Seidel / Jacobi** (iterasjon + konvergens) | 4/6 | **67 %** | **4M-distinkt** (er 4N-only i noen sett, men 4M-only i vårsplitt 2013) |
| **Newtons metode for ikke-lineært system** (Jacobi-matrise, ett skritt) | 2/6 | **33 %** | Delt |
| **Numerisk integrasjon** (trapes/Simpson + feilanslag, valg av `n`) | 2/6 | **33 %** | Delt |
| **Numerisk derivasjon / MATLAB-kodeforståelse** (les/forklar script, lovlige operasjoner) | 2/6 | **33 %** | **4M-distinkt** (MATLAB-innslag) |
| **Laplace-transform** (invers, IVP, Heaviside) | 1/6 | **17 %** | **4N-only i vårsplitt** — 4M *hopper over* denne |
| **Kompleks analyse** (analytisitet, Cauchy–Riemann, residy, Laurent, konform) | **0/6** | **0 %** | ❗ **IKKE belagt** i noe 4M-sett i arkivet |

**Viktigste funn:**
1. **Fire søyler bærer hvert 4M-sett:** Fourier-rekker (100 %), interpolasjon (83 %), PDE-separasjon (83 %) og numerisk ODE-løser (83 %). Behersker man disse fire perfekt, dekker man klart mer enn 80 % av poengene på et typisk 4M-sett.
2. **Numerikk er tyngdepunktet, ikke kompleks analyse.** Minst 3–4 av 6–8 oppgaver på et 4M-sett er numeriske (interpolasjon, iterativ lineær algebra, ODE-skritt, kvadratur). Dette er *stikk motsatt* av oppdragspremisset.
3. **Det som faktisk skiller 4M fra 4N** i vårsplitten er lite: 4M **hopper over Laplace-oppgaven** og gjør i stedet en **numerisk-lineær-algebra-/MATLAB-oppgave** (Gauss–Seidel/Jacobi). Fourier/transform/PDE/interpolasjon/ODE-skritt er identisk for begge.
4. **Kompleks analyse forekommer ikke i noe 4M-sett i arkivet (0/6, 0 treff globalt).** Premisset om at 4M er «kompleksanalyse-tungt» er ikke støttet av kildene.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen i 4M-settene, med løsningsforslagets foretrukne metode (verifisert mot fasitene der de finnes). **A–E er felleskjernen (delt med 4N/4D); F–H er de reelt 4M-distinkte innslagene; K er premiss-hypotesen (ikke belagt).**

### A. Fourier-rekker (odde/like utvidelse, cos-/sin-rekke, kompleks form)
- **Krav:** Utnytt symmetri **før** du regner: en funksjon utvidet odde → ren sinusrekke (`aₙ=0`); utvidet like → ren cosinusrekke (`bₙ=0`). Oppgaven ber typisk om å **utvide** `f` gitt på `[0,π]` (eller `[0,L]`) til en odde og en like `2π`-periodisk funksjon, **skissere** begge over flere perioder, og angi/rekne ut rekkene. Koeffisienter ved Euler-formlene, ofte via **delvis integrasjon** (`x·sin/cos`, `x²·sin`) — et vink med det aktuelle standardintegralet gis ofte i oppgaveteksten. **Summering av tallrekke:** sett inn et smart `x` (kontinuitetspunkt gir `S(x)=f(x)`; sprangpunkt gir `S(x)=½(f(x⁺)+f(x⁻))`). **Kompleks Fourier-rekke** `Σcₙe^{inx}`, `cₙ=(1/2π)∫f e^{−inx}` forekommer også (2013 O2). Fasiten aksepterer å la svaret stå på integralform når teksten sier «det er ikke nødvendig å forenkle».
- **Frekvens:** 6/6 (100 %). Nesten alltid oppgave 1.
- **Omskrevet eksempel:** «`f(x)=sin x` på `[0,π]` utvides til en odde funksjon `g` og en like funksjon `h`, begge med periode `2π`. Skissér `g` og `h` på `[−2π,2π]`, angi Fourier-rekka for `g` uten regning, og finn rekka for `h`; bruk den til å summere `Σ 1/((2k)²−1)` og `Σ (−1)ᵏ/((2k)²−1)`.» (2011 O1)

### B. Fourier-transform (definisjon, Fourier-integral, filter/konvolusjon)
- **Krav:** Regn den Fourier-transformerte **direkte fra definisjonen** `f̂(w)=(1/√2π)∫f e^{−iwx}dx` (2009 O2, 2013 O1, des2015 O2), typisk for `e^{−a|x|}` eller en boks-/`sin(ax)/x`-funksjon. Bruk deretter **Fourier-integralet / inversjonsformelen** til å regne ut et reelt integral (`∫cos(wx)/(w²+a²)dw`) ved å lese det av som invers-transformen av et kjent par. **Filter-/konvolusjonsvariant:** en konvolusjon `g=hₐ∗f` svarer i transformdomenet til produkt `ĝ=√(2π)·ĥₐ·f̂`; siden `ĥₐ` er en boks (lavpass) forklarer man at høyfrekvente komponenter kuttes (2011 O2). Deriverings- og konvolusjonsreglene brukes flittig.
- **Frekvens:** 4/6 (67 %).
- **Omskrevet eksempel:** «Vis fra definisjonen at Fourier-transformen til `f(x)=e^{−a|x|}` er `√(2/π)·a/(a²+w²)`, og bruk Fourier-integralet til å regne ut `∫₀^∞ cos(wx)/(w²+a²) dw`.» (2013 O1)

### C. PDE via separasjon av variable (varmelikning)
- **Krav (stapleoppgave):** Sett `u(x,t)=F(x)G(t)`, del i to ODE-er med felles separasjonskonstant. Fasiten viser at bare ett fortegn på konstanten gir ikke-trivielle løsninger som oppfyller randbetingelsene; egenverdiene `(nπ/L)²` og egenfunksjonene `sin(nπx/L)` (Dirichlet) følger av `F(0)=F(L)=0`. **Superponér** og **match initialbetingelsen** ved å lese av Fourier-koeffisienter — ofte trivielt når initialdata alt er en sinus-sum (f.eks. `sin(πx/L)+½sin(3πx/L)`). **Ikke-homogen rand** (`u(0,t)=0`, `u(L,t)=T`): finn først en tidsuavhengig stasjonær løsning (lineær profil `Tx/L`), trekk den fra, løs resten homogent (2011 O3).
- **Frekvens:** 5/6 (83 %). Offisiell fasit finnes.
- **Omskrevet eksempel:** «Finn alle ikke-trivielle produktløsninger `u=F(x)G(t)` av `uₜ=u_xx` på `0≤x≤L` med `u(0,t)=u(L,t)=0`, og deretter løsningene som oppfyller (i) `u(x,0)=−3sin(13πx/L)` og (ii) `u(x,0)=10`.» (2013 O3)

### D. Interpolasjon (Lagrange / Newtons dividerte differanser)
- **Krav:** «Finn polynomet av lavest mulig grad som interpolerer datasettet» — fasiten aksepterer **enten Lagrange eller Newtons dividerte differanser** (des2015 O4 nevner begge + rett lineært system). Lagrange: kardinalfunksjoner `lₖ(x)=Πⱼ≠ₖ(x−xⱼ)/(xₖ−xⱼ)`. Newton: differansetabell + `p(x)=f₀+(x−x₀)f[x₀,x₁]+…`. **Feilleddet** `Π(x−xᵢ)·f^{(n+1)}(ξ)/(n+1)!` (fra formelarket) brukes til feilanslag. Ofte kjedet: interpolér `1/(1+x²)`, bruk polynomet til å tilnærme et integral eller en ODE-løsning, og regn den **absolutte feilen** mot den eksakte verdien (2013 O4).
- **Frekvens:** 5/6 (83 %).
- **Omskrevet eksempel:** «Finn andregradspolynomet som interpolerer `f(x)=1/(1+x²)` i `x=0,1,2`; bruk det til å tilnærme løsningen av `y′=1/(1+x²)`, `y(0)=1`, i `x=5`, og angi den absolutte feilen mot eksakt løsning.» (2013 O4)

### E. Numerisk ODE-løser for system (Heun / forbedret Euler / implisitt trapes)
- **Krav:** Utfør **ett skritt for hånd** med Heuns metode (forbedret Euler: `k₁=hf(xₙ,yₙ)`, `k₂=hf(xₙ+h,yₙ+k₁)`, `yₙ₊₁=yₙ+½(k₁+k₂)`) på et **system** av 1. ordens ODE-er, med gitt steglengde (2013 O5, des2015 O6, kont2009). Beskrivelsen av metoden ligger på formelarket. Implisitt trapesmetode i kont-settene. Klassisk RK4 og bakover-Euler står også på arket.
- **Frekvens:** 5/6 (83 %).
- **Omskrevet eksempel:** «Gjør én iterasjon av Heuns metode med `h=0,2` på systemet `x′=−x+y, y′=−x−y`, `x(0)=0, y(0)=4`.» (2013 O5)

### F. Numerisk lineær algebra: Gauss–Seidel / Jacobi (4M-distinkt)
- **Krav:** Gitt et lineært system (ofte 3×3 eller 4×4), **omordne til diagonaldominans** om nødvendig, sett opp iterasjonsformelen (`x^{(k+1)}=b−Lx^{(k+1)}−Ux^{(k)}` for Gauss–Seidel; `x^{(k+1)}=b+(I−A)x^{(k)}` for Jacobi), og **utfør én iterasjon** fra en gitt startvektor. **Konvergensspørsmål:** avgjør om iterasjonen konvergerer (diagonaldominans / spektralradius `<1`). I vårsplitten 2013 er dette den **eksplisitt 4M-only** oppgaven, presentert som et **MATLAB-script** man skal gjenkjenne som Gauss–Seidel og iterere.
- **Frekvens:** 4/6 (67 %). Dette er kjernen i det som faktisk skiller 4M fra 4N i det delte vårsettet.
- **Omskrevet eksempel:** «MATLAB-scriptet oppdaterer `x,y,z,w` i en løkke. (a) Hvilken metode er dette? Gjør én iterasjon (`N=1`). (b) Vil metoden konvergere?» (2013 O7, kun TMA4123/4M)

### G. Newtons metode for ikke-lineært system (4M-distinkt aksent)
- **Krav:** For `F(x)=0`: `J(x^{(k)})(x^{(k+1)}−x^{(k)})=−F(x^{(k)})` — regn ut Jacobi-matrisen, løs det lineære systemet for korreksjonen, **utfør ett skritt** fra gitt startverdi (des2015 O5).
- **Frekvens:** 2/6 (33 %).

### H. Numerisk integrasjon (trapes/Simpson + feil) og MATLAB-kodeforståelse (4M-distinkt aksent)
- **Krav:** Trapesmetoden `(h/2)[f₀+2f₁+…+2fₙ₋₁+fₙ]` og Simpsons `(h/3)[f₀+4f₁+2f₂+…+fₙ]` med `n` delintervaller; oppgi svar med gitt antall signifikante siffer. **Velg `n`** slik at feilleddet (`h²`-trapes, `h⁴`-Simpson, fra formelarket) er under en toleranse (des2015 O7). **MATLAB-kodeforståelse:** forklar et gitt script/funksjon, avgjør hvilke MATLAB-operasjoner som er lovlige (2011 O6, 4M). Numerisk derivasjon (fremover-/sentraldifferanse + feil `O(h)`/`O(h²)`) står også på arket.
- **Frekvens:** integrasjon 2/6, MATLAB-kode 2/6 (33 % hver).

### K. Kompleks analyse — PREMISS-HYPOTESE, IKKE BELAGT I ARKIVET
> **⚠️ Ingen av de 6 4M-settene inneholder kompleks analyse; en global søk på tvers av alle 38 filer ga 0 treff på analytisk funksjon / Cauchy–Riemann / residy / Laurent / konform / holomorf / kompleks integrasjon / integralteorem.** Følgende sjangre er derfor **ikke** dokumentert for TMA4123 og tas kun med fordi oppdraget etterspurte dem — de er ekstrapolert fra den generelle Matematikk 4-tradisjonen (jf. tma4121/tma4120) og skal **ikke** vektes i en 4M-bok uten uavhengig verifikasjon mot autentiske 4M-oppgaver:
> - **Analytisitet / Cauchy–Riemann / harmonisk konjugert** (`uₓ=v_y, u_y=−vₓ`; analytisitet krever hel omegn).
> - **Cauchys integralteorem/-formel** (`∮=0` for analytisk integrand; `f(z₀)=(1/2πi)∮ f/(z−z₀)`).
> - **Taylor/Laurent-rekker + konvergensområde** (annuli via geometrisk rekke).
> - **Residyregning** (lukket kurve `∮=2πi·ΣRes`; enkel pol `lim(z−z₀)f`, dobbeltpol via derivert).
> - **Residy for reelt uegentlig integral** (halvsirkel + ML-ulikheten).
> - **Konform avbildning.**
>
> For faktisk kildebelagt dekning av disse temaene, se `docs/hoyskole-boker/tma4121/EKSAMENSANALYSE.md` (sjangrene E, F, G, H, K der). De hører hjemme i et kompleksanalyse-emne (TMA4120/4121), ikke i den rekonstruerte 4M-profilen.

---

## 4. Sensorens krav

Fra oppgaveinstrukser og de offisielle 4M-fasitene:
1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett. Ubegrunnet svar gir ikke full uttelling selv om det er riktig.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «superposisjonsprinsippet», «Euler-formlene for Fourier-koeffisienter», «konvolusjonsteoremet», «Newtons dividerte differanser», «Gauss–Seidel-/Jacobi-iterasjon», «Heuns metode». Fasiten skriver dem ut.
3. **Føringsstandard:** transform- og tabelloppslag markeres; delvis-integrasjons-steg vises; svar oppgis som **eksakt uttrykk** der mulig, ellers med tallverdi og oppgitt antall signifikante siffer (numerikkoppgavene ber ofte om «4 signifikante siffer» / «4 desimaler»).
4. **Flere metoder honoreres eksplisitt:** Lagrange vs. Newtons dividerte differanser vs. rett lineært system for interpolasjon (des2015 O4); rekke-summering via Fourier vs. direkte (2011 O1-fasit viser begge).
5. **Delpunktgjenbruk er designet inn:** interpolasjonspolynomet fra a) brukes i b) og c); den Fourier-transformerte fra a) brukes til å regne integralet i b). Å se koblingen premieres.
6. **Feilforplantning tolereres:** en riktig regnet videreføring fra en feil mellomverdi gir uttelling i senere delpunkt.
7. **4M-spesifikt:** Laplace-oppgaven skal **ikke** besvares av 4M-kandidater; den 4M-only numeriske-lineær-algebra-/MATLAB-oppgaven skal.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske grepene: sett opp Fourier-koeffisientintegralet, sett `u=FG` og få de to ODE-ene, ett Heun-skritt for hånd, én Gauss–Seidel-iterasjon, sett opp interpolasjonspolynomet.
- **Midtsjiktet** behersker i tillegg: symmetriutnyttelse + delvis integrasjon for `x²·sin`-koeffisienter, korrekt håndtering av alle konstant-tilfellene i separasjon, summering av tallrekke via innsatt punkt, feilanslag med interpolasjons-/kvadraturfeilledd.
- **Toppsjiktet** kjennetegnes av: (i) korrekt **ikke-homogen reduksjon** i PDE (stasjonær løsning trekkes fra); (ii) korrekt **Fourier-integral-inversjon** for å regne et reelt integral; (iii) korrekt **konvergensargument** for Gauss–Seidel/Jacobi (diagonaldominans); (iv) korrekt **valg av `n`** fra kvadraturfeilleddet; (v) å se og bruke **delpunkt-koblingene**.

---

## 5. Typiske feil

1. **Glemt symmetriutnyttelse:** regne alle koeffisienter for en odde/like funksjon i stedet for å nullstille `aₙ` (odde) eller `bₙ` (like) med én gang.
2. **Glemt midling i sprangpunkt:** Fourier-rekka konvergerer til `½(f(x⁺)+f(x⁻))`, ikke funksjonsverdien — kritisk ved summering av tallrekke.
3. **Hoppe over konstant-tilfellene i separasjon:** ikke vise at feil fortegn på separasjonskonstanten bare gir triviell løsning.
4. **Manglende ikke-homogen reduksjon:** prøve å matche ikke-homogene randbetingelser direkte i stedet for å trekke fra den stasjonære løsningen.
5. **Feil i Fourier-transform fra definisjon:** feil fortegn i eksponenten `e^{−iwx}`, eller å glemme `1/√(2π)`-normeringen (konvensjonen som brukes på formelarket).
6. **Iterasjonsfeil i Gauss–Seidel:** bruke gamle verdier der oppdaterte skal brukes (forveksle med Jacobi), eller feilbedømme konvergens uten å sjekke diagonaldominans.
7. **Feil steg i Heun for system:** regne komponentvis feil i `k₁/k₂`, eller bruke `k₁` der `k₂` skal.
8. **Kvadratur:** feil `n`/`h`-relasjon eller feil feilledd (`h²` vs. `h⁴`) når man velger antall delintervaller.
9. **Interpolasjonsfeil feilbestemt:** feil grad på polynomet, eller feil bruk av feilleddet.
10. **4M/4N-forveksling:** en 4M-kandidat besvarer Laplace-oppgaven (som ikke teller) og hopper over den 4M-only numeriske oppgaven.
11. **Tidsfelle:** separasjon-av-variable-oppgaven og den kjedede interpolasjons-/numerikk-oppgaven er tunge; for lang tid tidlig stjeler fra de dyre sluttoppgavene.

---

## 6. Teorem-, notasjons- og formelapparat

### Utdelt formelark + Rottmann (må kunne brukes, ikke pugges)
Vedlagt hvert sett: **Rottmann** (generell formelsamling: integraltabeller, trig-identiteter, rekker) + **ett vedlagt formelark** som på 4M-settene i praksis er en **numerikk-side**:
- **Interpolasjon:** interpolasjonsfeilformelen `f(x)−p(x)=(1/(n+1)!)·f^{(n+1)}(ξ)·Π(x−xᵢ)`; Newtons dividerte differansers polynom; Lagrange-kardinalfunksjoner.
- **Numerisk derivasjon:** fremover-/sentraldifferanse med feilledd.
- **Numerisk integrasjon:** trapesregelen og **Simpsons regel** med feilledd (`h⁴·(b−a)/180·max|f⁴|`).
- **Iterative lineære løsere:** **Jacobi** (`x^{(k+1)}=b+(I−A)x^{(k)}`) og **Gauss–Seidel** (`x^{(k+1)}=b−Lx^{(k+1)}−Ux^{(k)}`, `A=I+L+U`).
- **Rotsøking:** Newtons metode (skalar `xₖ₊₁=xₖ−f/f′`) og for system (Jacobi-matrise).
- **ODE-løsere:** Euler, **forbedret Euler / Heun**, klassisk **Runge–Kutta (RK4)**, bakover-Euler.
- Fourier-/Laplace-tabellinnslag på de eldre 1–2-siders arkene (transformpar + skift-/derivasjonsregler); Fourier-transformen gitt med `1/√(2π)`-konvensjonen.

> **Merk:** siden Rottmann + formelark er tilgjengelig, tester eksamen **bruk og utledning, ikke pugging**. En 4M-bok bør trene studenten på å *finne og bruke* formlene fra arket, og på å gjenkjenne hvilken numerisk metode et gitt (MATLAB-)uttrykk implementerer.

### Må beherskes aktivt (kunne anvende og navngi)
- **Fourier:** reelle sinus-/cosinusrekker, odde/like periodisk utvidelse, kompleks Fourier-rekke, symmetriutnyttelse, konvergens til `½(f⁺+f⁻)`, summering av tallrekke; Fourier-transform fra definisjon + Fourier-integral-inversjon + konvolusjon/filter.
- **PDE:** separasjon av variable, egenverdi/egenfunksjon fra randbetingelser, superposisjon + Fourier-matching, ikke-homogen reduksjon via stasjonær løsning.
- **Numerikk (tyngdepunktet):** Lagrange/Newton-interpolasjon + feilledd; trapes/Simpson + feil + valg av `n`; Gauss–Seidel/Jacobi + konvergens (diagonaldominans); Newtons metode (skalar + system); Euler/Heun/RK4/bakover-Euler ett-skritt; numerisk derivasjon; MATLAB-kodelesing.
- **IKKE påkrevd (arkivet):** kompleks analyse. (Laplace er 4N-only.)

### Notasjonskonvensjoner boken bør speile
`aₙ/bₙ/cₙ` Fourier-koeffisienter; `f̂(w)=(1/√2π)∫f e^{−iwx}dx`; `u=F(x)G(t)`, separasjonskonstant; `p(x)`/`f[x₀,…,xₖ]` interpolasjon; `x^{(k+1)}` iterasjonsvektor, `A=I+L+U`; `k₁,k₂` Heun-inkrementer; eksakte svar der mulig, ellers oppgitt antall signifikante siffer.

---

## 7. Prognose og prioritering

> Arkivet gir et robust bilde av **Fourier + PDE + numerikk** som 4M-kjernen. Kompleks analyse — oppdragets antatte 4M-tyngdepunkt — er **ikke belagt** og prioriteres derfor ikke. Prioriteringen vekter de faktisk dokumenterte søylene.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Fourier-rekker** (odde/like utvidelse, cos-/sin-rekke, kompleks form, summering av tallrekke) — 100 %.
2. **Interpolasjon** (Lagrange + Newtons dividerte differanser + feilledd) — 83 %.
3. **PDE via separasjon av variable** (varmelikning, egenfunksjoner, superposisjon, ikke-homogen reduksjon) — 83 %.
4. **Numerisk ODE-løser for system** (Heun/forbedret Euler, ett skritt) — 83 %.
5. **Fourier-transform** (fra definisjon + Fourier-integral for reelt integral + filter/konvolusjon) — 67 %.

### Nivå 2 — må kunne (bredde + karakterskiller + 4M-distinkt)
6. **Gauss–Seidel / Jacobi-iterasjon + konvergens** — 67 %. **Den reelt 4M-distinkte oppgaven** i vårsplitten (erstatter 4N-ens Laplace-oppgave); ofte som MATLAB-script.
7. **Newtons metode for ikke-lineært system** (Jacobi-matrise, ett skritt) — 33 %.
8. **Numerisk integrasjon** (trapes/Simpson + feil + valg av `n`) og **MATLAB-kodeforståelse** — 33 % hver.

### Nivå 3 — beredskap / lav frekvens
9. **Numerisk derivasjon** (differansekvotienter + feil) — står på formelarket.
10. **Laplace-transform** — **4N-only i vårsplitt**; ta med som *orientering* (4M-kandidaten besvarer den ikke), evt. som beredskap for høst-4M om vekten var annerledes.
11. **Kompleks analyse** — **ikke belagt; ikke prioritér.** Dekkes kun hvis uavhengig verifikasjon mot autentiske 4M-oppgaver skulle vise noe annet (usannsynlig gitt 0/6 + 0 globale treff).

### Konkret prognose for et 4M-sett
Basert på den stabile malen: **6–8 likevektede oppgaver over 4 timer**, kode C (Rottmann + numerikk-formelark), ingen flervalg, typisk:
- **O1:** Fourier-rekke (odde/like utvidelse, skisse, koeffisienter, summering av tallrekke).
- **O2:** Fourier-transform fra definisjon + Fourier-integral for et reelt integral (evt. filter/konvolusjon).
- **O3:** separasjon av variable for varmelikningen (egenfunksjoner + superposisjon; ofte ikke-homogen rand).
- **O4:** interpolasjon (Lagrange/Newton), gjerne kjedet mot en tilnærming + absolutt feil.
- **O5:** Heuns metode ett skritt på et ODE-system.
- **O6–O8 (numerikk-blokk / 4M-distinkt):** Gauss–Seidel/Jacobi-iterasjon + konvergens (MATLAB-script) — den 4M-only oppgaven; evt. Newtons metode for system, trapes/Simpson + feil, eller MATLAB-kodeforståelse. *(I vår-varianten står 4N-ens Laplace-oppgave i stedet for én av disse — 4M-kandidaten hopper over den.)*

**Usikkerhetsmoment:** emnet er nedlagt; det kommer ingen nye sett. Høst-4M (TMA4122) kan ha hatt en litt annen numerikk-miks enn vår-4M (TMA4123). Vektene over er robuste for de 6 kjente settene.

### Arbeidsdeling (les før en bok settes i gang)
**Konklusjon: en egen TMA4123 4M-bok har lav merverdi og bør ikke bygges fra bunn.**

| Lag | Dekning | Anbefaling |
|---|---|---|
| **Fourier-rekker + Fourier-transform + PDE-separasjon** (4M-kjernen) | Fullt dekket av **tma4135** (Matematikk 4D) — samme teoremer, notasjon og separasjonsteknikk | **Kryssreferer tma4135**; ikke dupliser |
| **Numerikk** (interpolasjon, kvadratur, Gauss–Seidel/Jacobi, Newton for system, Heun/Euler/RK) | Fullt dekket av **tma4135**s numerikk-blokk (tma4135 er nettopp det numerikk-tunge 4D-emnet) | **Kryssreferer tma4135**; det 4M-distinkte (iterativ lineær algebra + MATLAB) er en delmengde av 4D-numerikken |
| **Kompleks analyse** (analytisitet, CR, residy, Laurent, konform) | **Ikke i 4M-arkivet.** Dekket kildebelagt av **tma4121/tma4120** | Hører hjemme i et kompleksanalyse-emne, **ikke** i en 4M-rekonstruksjon |

**Praktisk anbefaling:** 4M-profilen slik arkivet faktisk viser den (Fourier + PDE + numerikk, uten kompleks analyse, uten Laplace) er **nesten identisk med tma4135 (Matematikk 4D)** — bare litt mindre Laplace-tung og med iterativ lineær algebra/MATLAB løftet fram. En egen 4M-bok kan derfor best settes sammen som **tma4135-kjernen med en liten 4M-vri** (framhev Gauss–Seidel/Jacobi + MATLAB-kodeforståelse, tone ned Laplace), **framfor bygges fra bunn**. Siden emnet er **nedlagt uten ren enkelt-etterfølger** og arkivet blander 4M/4N/4D, gir en frittstående bok liten verdi. **Om kompleks analyse ønskes dekket** (motivert av navnetradisjonen, ikke av 4M-oppgavene), hør det hjemme i tma4121/tma4120-boka — det skal ikke pådyttes en 4M-bok som premiss.

---

## 8. Kildeliste

Alle filer i `~/Desktop/Eksamner/NTNU/TMA4123/` (38 PDF-er; blander 4M/4N/4D).

**Ekte 4M-sett lest grundig (6 sett):**
- `lfTMA4123-09v.pdf` — TMA4123 Matematikk 4M vår 2009, løsningsforslag (Fourier-sinusrekke + summering; separasjon/varmelikning; Fourier-transform).
- `tma4123mbokmaal.pdf` + `tma4123og25mai20_2011losningsforslag.pdf` — TMA4123/4125 4M/4N vår 2011, oppgaver + fyldig løsningsforslag (Fourier-utvidelse; Fourier-transform/filter; separasjon + ikke-homogen rand; **4M-only: MATLAB-oppgave**).
- `eksamen2013v.pdf` + `losning2013v.pdf` — TMA4123/4125 4M/4N vår 2013, oppgaver + fasit (**eksplisitt 4M/4N-splitt: O6 Laplace = 4N-only, O7 Jacobi/Gauss–Seidel MATLAB = 4M-only**).
- `v14-english.pdf` — «Matematikk 4M and 4N» vår 2014, løsningsforslag (interpolasjon; Fourier-rekke; Fourier-transform for PDE; separasjon; Jacobi; Laplace; DFT/FFT-kodeforståelse).
- `lfTMA4122-23-09k.pdf` — TMA4122/23 Matematikk 4M kont august 2009, løsningsforslag (Fourier; implisitt trapes; Heun).
- `oppgaver2.pdf` + `losningsforslag3.pdf` — TMA4122 Matematikk 4M des 2015, oppgaver + fasit (Fourier-cosinusrekke; Fourier-transform; Gauss–Seidel; interpolasjon; Newton for system; Heun; trapes + feil).

**Fellesmateriale skummet for kontekst / avgrensning (ikke 4M):**
- `lfSIF5013v01/v02/v03`, `lfSIF5013k01/k03`, `lfSIF5016h01/h02` — **alle merket Matematikk 4N** (Laplace/Fourier/PDE); ingen kompleks analyse. (Motbeviser antakelsen om at SIF5013 er en kompleksanalyse-tung 4M-forgjenger.)
- `eksam2014`, `tma4130_h15_bokmal`, `lfTMA4130-08h/-09h/h04/h05/h07/k04/k06`, `loesningsforslag_tma4130_h15_v2`, `solutions_4n_1`, `solutions_v06` — TMA4130 Matematikk 4N (høst).
- `tma4125nbokmaal`, `lfTMA4125v05`, `lfTMA4125V08` — TMA4125 Matematikk 4N (vår).
- `lf_tma4135_14h`, `lf_tma4135_15h`, `tma4135_14h`, `tma4135_15h` — TMA4135 Matematikk 4D.
- `TMA4ND2007k_lf`, `lfTMA41xx4ND-10k` — felles 4N/D kont-sett.
- `tma4123-4125-4130-2015k` — kont 2015 (skannet/bildebasert, lot seg ikke tekst-utvinne).

**Merknader om kildene:**
- **Kompleks-analyse-verifikasjon:** global nøkkelordsøk over alle 38 filer (`analytisk funksjon`, `Cauchy–Riemann`, `residy`, `Laurent`, `konform`, `holomorf`, `kompleks integrasjon`, `integralteorem`) ga **0 treff**. 4M-profilen i arkivet er entydig Fourier + PDE + numerikk.
- **4M/4N-split:** verifisert direkte i 2013-settet («TMA4123 Matematikk 4M: Alt unntatt Oppgave 6 (Laplace)»; «Oppgave 7 Kun for TMA4123/Matematikk 4M»).
- **Status:** NTNUs emneside `https://www.ntnu.no/studier/emner/TMA4123` svarer «ingen informasjon / ingen emner med denne koden» (hentet i arbeidet). Emnet er nedlagt.
- **Skannede sett:** `tma4123-4125-4130-2015k` er bildebasert; ingen tung OCR utført.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Forbilder:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (Fourier/Laplace/PDE + numerikk — nærmest beslektede emne, delt kjerne) og `docs/hoyskole-boker/tma4121/EKSAMENSANALYSE.md` (kompleksanalyse-sjangre + arbeidsdelings-mal).
