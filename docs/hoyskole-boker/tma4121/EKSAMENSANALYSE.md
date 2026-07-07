# Eksamensanalyse: TMA4121 Matematikk 4 (NTNU) — bygd på TMA4120-arkivet

> Grunnlagsdokument for en eksamensrettet lærebok. **Målemne:** TMA4121 Matematikk 4 (NTNUs matematikkreform, bekreftet aktivt undervist vår 2026, faglærer Morten Nome). **Kildearkiv:** forgjengeren **TMA4120 Matematikk 4K** (~47 filer i `~/Desktop/Eksamner/NTNU/TMA4120/`). Analysen bygger på **11 velkarakteriserte eksamenssett (2014–2024)** der oppgaver **og** offisielle løsningsforslag er lest oppgave-for-oppgave: H2024, Kont(aug)2023, Ord(des)2023, H2022, H2021, Kont2018, Ord(des)2018, Kont2017, Kont2016, H2014 — pluss oppgavesett/formelark for flere andre år. Arkivet strekker seg fra 2012 til 2024. **Alt innhold er omskrevet med egne ord** — ingen ordrette oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teorem- og metodenavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **⚠️ Les dette først — overføringsrisiko TMA4120 → TMA4121 (VERIFISERT delvis):**
> NTNUs matematikkreform har **utvidet** faget, ikke bare omdøpt det. Ifølge NTNUs egen emneside dekker **TMA4121 fire områder: (1) flervariabel kalkulus, (2) partielle differensiallikninger, (3) kompleks funksjonsteori, (4) lineær algebra.** TMA4120 dekket kun **kompleks analyse + Fourier + Laplace + PDE**. Konsekvenser:
> - **KONTINUERLIG (arkivet belegger direkte):** kompleks funksjonsteori (analytisitet, Cauchy–Riemann, kompleks integrasjon, residyer, Laurent-rekker) og PDE (separasjon av variable). Disse to søylene er kjernen i TMA4120-arkivet og står eksplisitt i TMA4121-pensum.
> - **DELVIS / USIKKERT (verifiser):** **Fourier-rekker** lever videre som PDE-verktøy (separasjon), men **Fourier- og Laplace-transformasjon** står *ikke* eksplisitt blant TMA4121s fire områder. De kan være redusert i vekt eller flyttet. **Laplace-transform var 100 % i TMA4120** — usikkert om den bærer like tungt i TMA4121.
> - **NYTT i TMA4121 (arkivet dekker IKKE):** **flervariabel kalkulus** og **lineær algebra**. Disse finnes ikke i TMA4120-arkivet og må hentes fra andre kilder (jf. reform-forgjengerne TMA4105/TMA4110, samt forkravsemnene TMA4101/TMA4106/TMA4111 som TMA4121 bygger oppå).
> - **FORMATBRUDD (verifisert):** TMA4121 har **hjelpemiddelkode E — ingen hjelpemidler**, på **Inspera**. TMA4120 hadde **kode C** med **utdelt transformtabell + kalkulator**. Dette er den største enkeltendringen: den utdelte Laplace-/Fourier-tabellen som TMA4120-fasitene henviste til gjennomgående (*«from the table»*) **finnes trolig ikke lenger** — noe som enten tvinger fram memorering eller (mer sannsynlig) skyver eksamen bort fra tabelltung transformregning.
> - **Overlapp bekreftet:** NTNU gir 3,7 sp studiepoengreduksjon mellom TMA4120 og TMA4121 — dvs. betydelig, men *ikke fullstendig*, innholdsoverlapp.

> **Hovedfunn (kjernen boka skal bæres av):** TMA4120 er et **svært stabilt og forutsigbart** emne med 6–8 oppgaver som hvert år dekker de samme fem–seks sjangrene: **(1) Laplace-transform** (ODE/IVP, Volterra/konvolusjon, Heaviside/Dirac), **(2) Fourier-rekke** (sinus/cosinus, sum av tallrekke, sprangkonvergens), **(3) separasjon av variable for en PDE** (varme-/bølge-/Laplace-likning), **(4) analytisitet / Cauchy–Riemann / harmonisk konjugert**, **(5) Taylor/Laurent-rekker med konvergensområde**, og **(6) residyregning** (lukket kurve *og* reelt uegentlig integral via halvsirkel + ML-ulikhet). Der TMA4121-pensum bekrefter kontinuitet (kompleks analyse + PDE), er dette gull; der det er usikkert (transformer), bygg innholdet, men **merk vektusikkerheten (verifiser)** og la det ikke fortrenge flervariabel/lineæralgebra som TMA4121 legger til.

---

## 1. Eksamensform og utvikling

### TMA4120 (kildeemnet) — slik arkivet viser det
Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, bokstavkarakter A–F. Hjelpemiddelkode **C**: bestemt, enkel kalkulator. Fast instruks (nyere sett): *«Alle svar må begrunnes; vis tydelig hvordan du kom fram til svaret.»* Bar fasit uten utledning gir ikke full uttelling.

- **Fast bredde:** **6–8 oppgaver av lik vekt** (nyere sett sier eksplisitt *«have equal weight»*, ev. med a/b-deler som teller likt). Ingen flervalgsdel (avkryssingsboksen «skal ha flervalgskjema» på trykk-arket er skjemametadata, ikke i bruk).
- **Utdelt formelark (kritisk for TMA4120, men se advarsel over):** hvert sett har et vedlegg på 3–5 sider med **Laplace-transformtabell** (inkl. `cosh/sinh`, forskyvningsteoremer, konvolusjon, `δ`, `u(t−a)`), **Fourier-rekke- og Fourier-transformtabell** (med Gauss-paret og deriverings-/konvolusjonsregler, Parseval), **kompleks-analyse-formler** (`e^{x+iy}`, `cos/sin/cosh/sinh` via eksponensialer, Taylor/Laurent-koeffisienter, **residyformelen for pol av orden n**), **standardintegraler** (`∫xⁿ sin/cos`, `∫eᵃˣ sin/cos`, Gauss-integralet), trig-identiteter, geometrisk/eksponensiell rekke, og **generalløsningen av 2. ordens lineær ODE** (tre rot-tilfeller). Løsningene henviser gjennomgående til dette arket; det styrer hvor mye man forventes å utlede kontra slå opp.
- **Lærebok:** **Kreyszig, *Advanced Engineering Mathematics***. Flere fasiter siterer sidetall direkte (f.eks. «Kreyzsig p. 526/527/627/721»).

### Formathistorikk (utvikling i kildearkivet)

| Periode | Trekk |
|---|---|
| 2012–2016 | Ren TMA4120 «Matematikk/Calculus 4K». Kreyszig tillatt/ref. Litt bredere sjangerspenn: **konform avbildning** (des-2018 og eldre), **Maclaurin via leddvis derivasjon**, **Laplace-likning på rektangel** med blandede randbetingelser. |
| 2017–2019 | Stabilisering rundt de seks kjernesjangrene. Formelark standardisert. Enkelte teoretiske kortsvar (*«vis at analytisk `f` med `|f|=1` er konstant»*, radius via nærmeste singularitet). |
| 2021–2024 | Svært stabil mal: 6–8 like-vektede oppgaver, nesten identisk sjangermiks år for år (Laplace + Fourier-rekke + PDE-separasjon + CR/analytisitet + Laurent + residy). Enkelte «teori-innslag» (uniform/absolutt konvergens via **Weierstrass' M-test**, Parseval-ulikhet for en PDE-løsning). |

### TMA4121 (målemnet) — bekreftede endringer
- **Hjelpemiddelkode E — ingen hjelpemidler.** **Inspera Assessment.** 4 timer, bokstavkarakter. (Kilde: NTNUs emneside, hentet i arbeidet.)
- **Bredere pensum:** fire områder (flervariabel kalkulus, PDE, kompleks funksjonsteori, lineær algebra). Lærebok *«oppgis ved semesterstart»* (ikke bekreftet Kreyszig for TMA4121).
- **Konsekvens for oppgaveformen (verifiser mot første reelle TMA4121-sett):** uten utdelt transformtabell forventes enten memorerte standardpar eller mindre tabelltung transformregning. Flervariabel- og lineæralgebra-oppgaver vil ta plass som TMA4120-arkivet ikke belyser.

---

## 2. Temafrekvens-tabell (TMA4120-arkivet)

Celleverdi = antall av **11 velkarakteriserte sett** (H2024, Kont2023, Des2023, H2022, H2021, Kont2018, Des2018, Kont2017, Kont2016, H2014 + ett ekstra karakterisert via formelark/oppgaver) der temaet forekommer som minst én (del)oppgave. Sortert etter gjenganger-score.

| Tema | Forekomst | **Gjenganger-score** | TMA4121-status |
|---|---|---|---|
| **Laplace-transform** (ODE/IVP, Volterra/konvolusjon, Heaviside/Dirac, invers) | 11/11 | **100 %** | ⚠️ *Verifiser vekt* — ikke eksplisitt i TMA4121s fire områder |
| **Residyregning / kurveintegral** (lukket kurve + reelt uegentlig integral via halvsirkel + ML) | 10/11 | **91 %** | ✅ Kontinuerlig (kompleks funksjonsteori) |
| **Separasjon av variable for PDE** (varme-/bølge-/Laplace-likning, rektangel) | 10/11 | **91 %** | ✅ Kontinuerlig (PDE) |
| **Taylor/Laurent-rekker + konvergensområde** (annuli, geometrisk rekke, leddvis derivasjon/integrasjon) | 9/11 | **82 %** | ✅ Kontinuerlig (kompleks funksjonsteori) |
| **Fourier-rekke** (sinus/cosinus/full/kompleks, sum av tallrekke, sprangkonvergens `½(f⁺+f⁻)`) | 8/11 | **73 %** | ✅ Delvis (PDE-verktøy) — *transformdelen usikker* |
| **Analytisitet / Cauchy–Riemann / harmonisk konjugert** | 8/11 | **73 %** | ✅ Kontinuerlig (kompleks funksjonsteori) |
| **Fourier-transform** (utregning, invers via residy, eller for å løse PDE på ℝ + Parseval) | 7/11 | **64 %** | ⚠️ *Verifiser* — ikke eksplisitt i TMA4121 |
| **Singularitetsklassifisering** (pol av orden n, essensiell, hevbar) | 6/11 | **55 %** | ✅ Kontinuerlig |
| **Konform avbildning** | 1/11 | **9 %** (kun eldre) | ? Uavklart for TMA4121 |
| **Kompleks likning** (`sin z = i`, `e^{iz}`, kompleks log) | 1/11 | **9 %** | ✅ Kontinuerlig |
| **Flervariabel kalkulus** | 0/11 | **0 %** | ❗ NYTT i TMA4121 — ikke i arkivet |
| **Lineær algebra** | 0/11 | **0 %** | ❗ NYTT i TMA4121 — ikke i arkivet |

**Viktigste funn:**
1. **Seks søyler bærer så godt som hvert TMA4120-sett:** Laplace, residy/kurveintegral, PDE-separasjon, Laurent/Taylor, Fourier-rekke, og analytisitet/CR. Behersker man disse perfekt, dekker man >80 % av et TMA4120-sett.
2. **Kompleks analyse er ryggraden** (residy 91 %, Laurent 82 %, analytisitet 73 %, singulariteter 55 %) og er **fullt kontinuerlig** inn i TMA4121 («kompleks funksjonsteori»). Dette er den tryggeste delen å bygge boka på.
3. **PDE-separasjon (91 %) er også kontinuerlig.** Fourier-rekker lever videre som verktøyet for koeffisientmatching i separasjon.
4. **Transformblokken (Laplace 100 %, Fourier-transform 64 %) er den store usikkerheten:** høyest frekvens i TMA4120, men ikke listet blant TMA4121s fire eksplisitte områder, *og* den utdelte tabellen forsvinner med kode E. Dekk den grundig, men **merk (verifiser)** og la den ikke definere hele boka.
5. **To helt nye TMA4121-områder mangler i arkivet:** flervariabel kalkulus og lineær algebra. Disse må sourceres separat.

---

## 3. Oppgavetype-katalog (verifisert mot fasitene)

### A. Laplace-transform for ODE/IVP
- **Krav:** Transformér likningen, sett inn initialbetingelsene, løs *algebraisk* for `Y(s)`, invers-transformér via tabell. Faste grep: **delbrøkoppspalting** og **kvadratkomplettering** for å treffe tabellformen `(s−a)/((s−a)²+ω²)` eller `ω/((s−a)²+ω²)` (førsteforskyvningsteoremet gir `e^{at}`). Fasiten viser ofte **både** delbrøk og kvadratkomplettering (H2024 P1(ii): `3s+3)/(s²+2s+2) → 3e^{−t}cos t`). Ved system av ODE-er: transformér begge, løs det lineære `Y`-systemet, invers-transformér ledd for ledd (H2021 P1).
- **Frekvens:** del av 100 %-Laplace-blokken; nesten alltid oppgave 1.

### B. Laplace for Volterra-/integro-differensiallikning (konvolusjon)
- **Krav:** Gjenkjenn konvolusjonen `∫₀ᵗ g(τ)y(t−τ)dτ = (g∗y)(t)`; konvolusjonsteoremet gir `ℒ(g∗y)=G(s)Y(s)`. Løs for `Y(s)`, invers-transformér. Fasiten faktoriserer og delbrøkoppspalter.
- **Omskrevet eksempel:** «Løs `y(t) − 2∫₀ᵗ e^{−2τ}y(t−τ)dτ = e^{−t}`.» (H2024 P1(i), identisk gjenbrukt fra Kont-varianten — svaret `2 − e^{−t}`.)

### C. Laplace med Heaviside-/Dirac-ledd
- **Krav:** Skriv stykkevis tvunget respons via **andreforskyvningsteoremet** `ℒ(f(t−a)u(t−a)) = e^{−as}F(s)` — **finn `f(t)` først**, forskyv sist. Stykkevis `f` skrives som sum av trappeledd `u(t−a)` før transform (Kont2018 P1: `g = u(t) − 2u(t−1) + u(t−2)`; Kont2023 P1). Dirac: `ℒ(δ(t−a)) = e^{−as}` (H2022 P1).
- **Feilnotat i arkivet:** H2022 P1 hadde `δ(t+100)` (senter utenfor `t>0`) — sensor godtok begge tolkninger. Illustrerer at **skift-retningen** må håndteres bevisst.

### D. Fourier-rekke (sinus/cosinus/full/kompleks)
- **Krav:** Utnytt symmetri **først** (odde → ren sinus `aₙ=0`; like → ren cosinus `bₙ=0`). Cosinus-/sinusrekke av `f` på `[0,L]` *er* Fourier-rekka til den **like/odde `2L`-periodiske utvidelsen** — nevn utvidelsen eksplisitt (H2024 P2, Des2023 P2). Koeffisienter via Euler-formlene, ofte med **delvis integrasjon** (formlene står på arket). **Sum av tallrekke:** sett inn et smart punkt — kontinuitetspunkt (`S(x)=f(x)`) eller sprangpunkt (**konvergenssetningen** `S(x)=½[f(x⁺)+f(x⁻)]`, gjennomsnittet av ensidige grenser; H2022 P2 → `Σ(−1)ⁿ/(2n+1)=π/4`; Kont2023 P2 → verdi `π/4` i sprang). Skisse av `S(x)` = periodisk utvidelse med riktige spranghøyder.
- **Nytt teori-innslag (2024):** vis **uniform og absolutt konvergens** via **Weierstrass' M-test** (`|aₙcos(2nx)| ≤ 1/n²`, `Σ1/n²` konvergerer) — H2024 P2(iii).

### E. Analytisitet / Cauchy–Riemann / harmonisk konjugert
- **Krav:** Skriv `f=u+iv`, regn de fire partiellderiverte, sjekk `uₓ=v_y`, `u_y=−vₓ`; konkludér analytisk der likningene holder **og** de partiellderiverte er kontinuerlige. For `|z|²`, `e^{−|z|²}`, `z̄` viser fasiten at CR bare holder **isolert** (ofte kun `z=0`) ⇒ **ingensteds analytisk** (analytisitet krever en hel omegn) (H2024 P4, H2021 P3). Alternativ fasiten godtar: regn `f'(z)` direkte fra grensedefinisjonen. **Harmonisk konjugert:** vis først `u` harmonisk (`uₓₓ+u_yy=0`), integrér `vₓ=−u_y`, derivér, sammenlign med `v_y=uₓ` for å finne `C(y)` (Kont2023 P5, Des2023 P4, Kont2017 P4). Variant: gitt `v`, finn `u` (Des2023 P4).

### F. Taylor/Laurent-rekker + konvergensområde
- **Krav:** Bruk **geometrisk rekke** `1/(1−w)=Σwⁿ` med passende substitusjon — også «ut/inn»-varianten `(1/z)·1/(1−a/z)` for `|z|>|a|`. Sentrum + singularitetenes avstand til sentrum bestemmer **annuli**; hver ring gir én egen rekke (Des2023 P6, H2022 P5, Kont2016 P6, H2014 P4). Ved spørsmål om et gitt punkt konvergerer: regn `|z−z₀|`, plassér i riktig annulus (H2024 P5, H2014 P4c). For `Ln`-/log-typer: derivér, geometrisk rekke, **integrér leddvis** (radius bevares) (H2021 P6). **Maclaurin via leddvis derivasjon** av `1/(1−z)` (Kont2017 P5: `(1−z)⁻³ = Σn(n+1)zⁿ/2`, radius = avstand til nærmeste singularitet).
- **Radius via nærmeste singularitet:** konvergensradius = avstanden fra sentrum til nærmeste singularitet; finn singularitetene som nullpunkt i nevner / `1+cosh z=0` osv. (Kont2018 P5 → radius `π`).

### G. Residyregning — lukket kurve
- **Krav:** Finn og **klassifiser** singularitetene (pol av orden `n`, essensiell, hevbar). Bruk **residysetningen** `∮ = 2πi·ΣRes` over singulariteter innenfor kurven. Enkel pol: `Res = lim(z−z₀)f`. Pol av **orden 2**: `Res = lim d/dz[(z−z₀)²f]` (Kont2016 P6, Des2023 P6-integral). Hevbar singularitet gir residy 0 (Kont2023 P7: `sin z/(z³(z−π))`). For ikke-analytisk integrand (`z̄`, `|z|²`) langs bue: **parametrisér** `z(t)=Re^{it}` og regn `∫f(z(t))z'(t)dt` direkte (H2022 P4, H2021 P4). Analytisk integrand langs lukket kurve: **Cauchys integralteorem** `∮=0` (H2021 P4i), ellers antiderivert mellom endepunkter.

### H. Residyregning — reelt uegentlig integral (halvsirkel + ML)
- **Krav (fast fjerdedel/halvsirkel-oppgave):** Lukk med **halvsirkel `S_R`** (eller kvartsirkel) i øvre halvplan; vis at buebidraget **→ 0** via **ML-ulikheten** (`|∫| ≤ max|f|·L`, med `|e^{iz}|=e^{−y}≤1` for `y≥0` og `|z²+4| ≥ |z|²−4`, `|z⁴+1| ≥ R⁴−1`); regn `I = 2πi·ΣRes` over poler innenfor. Ta real-/imaginærdel til slutt for `cos/sin`-varianten (H2024 P6: `∫eⁱˣ/(x²+4)² → 3π/(16e²)`; Kont2016 P7: `∫x²/(1+x⁴) → π/√2`; Kont2023 P8: kvartsirkel + symmetri-triks `z=ix`). **Log-branch/keyhole-variant:** `∫₀^∞ ln x/(x²+a²)` med innrykket kontur `C_ε ∪ C_R` og `ln z = ln r + iθ` (Kont2018 P6).

### I. Separasjon av variable (varme-/bølge-/Laplace-likning)
- **Krav (stapleoppgave):** Sett `u=F(x)G(t)`, del på `FG`, få **to ODE-er** med separasjonskonstant `k`. Fasiten krever **eksplisitt behandling av `k>0`, `k=0`, `k<0`** og viser hvilke som gir ikke-triviell løsning. **Dirichlet** (`u=0` på rand) → `sin(nπx/L)`; **Neumann** (`uₓ=0`) → `cos(nπx/L)` **inkludert `n=0`!** (H2024 P3, H2022 P6, Kont2016 P3). Løs så `G`/`T` for hver egenverdi (karakteristisk likning; dempet bølge gir `e^{−t}(A cos ωt + B sin ωt)`, H2022 P6, Des2023 P3). **Superposisjon** + **sammenlign koeffisienter** mot initial-/randbetingelse (ofte trivielt når data alt er en `sin/cos`-sum — endelig sum, ikke uendelig rekke). **Laplace-likning på rektangel:** `G` blir eksponensiell/`cosh` (H2021 P7, Kont2017 P2, Kont2016 P3, H2014 P6). **Ikke-homogen reduksjon:** `v = u + sin x` e.l. for å gjøre randbetingelsen homogen (H2014 P6).
- **Variabel-koeffisient-variant (2024):** `(1/(1+2t))uₜ − uₓₓ = 0` — separér likevel; `G`-likningen blir `G' = (1+2t)kG`, løses ved integrasjon (H2024 P3).

### J. Fourier-transform (utregning / invers via residy / PDE på ℝ)
- **Krav:** Bruk tabellens Gauss-par `e^{−ax²} ↔ (1/√2a)e^{−ω²/4a}` og reglene `ℱ(f')=iω f̂`, `ℱ(f∗g)=√2π·f̂ĝ`, Parseval. **Direkte utregning** fra definisjonen for `e^{−ax}u(x)` o.l. (Kont2018 P3). **Invers via residy** når tabellen ikke rekker (Kont2017 P3: `1/(1+iw)² → xe^{−x}u(x)`; Des2018 P6: `1/((x²+1)(x²+4))`, egne tilfeller for `ω>0`/`ω<0`). **PDE på hele ℝ:** Fourier-transformér i `x` (`∂ₓ→iw`), løs den resulterende **1. ordens ODE-en i `t`**, invers-transformér — svaret ofte en Gauss-/varmekjerne eller et argumentskift `g(x±ct)` (H2021 P8, H2014 P3, Kont2023 P4 med Parseval-ulikhet).

### K. Kompleks likning og konform avbildning (lav frekvens)
- **Kompleks likning:** skriv om via eksponensialdefinisjonen (`sin z=(e^{iz}−e^{−iz})/2i`), løs andregradslikning i `w=e^{iz}`, bruk **kompleks logaritme** (`z=−i Log w + 2πn`) — husk `Arg` (H2022 P3: `sin z = i`).
- **Konform avbildning:** konstruér `w(z)` som avbilder en sektor/halvplan på øvre halvplan med gitt punktbetingelse (Des2018 P5). **Kun i eldre sett** — verifiser om TMA4121 beholder dette.

---

## 4. Sensorens krav

1. **Begrunn alle svar; vis nok mellomregning.** Fast instruks. Ubegrunnet svar gir ikke full uttelling.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «konvolusjonsteoremet», «andreforskyvningsteoremet», «Cauchy–Riemanns likninger», «residysetningen», «ML-ulikheten», «Weierstrass' M-test», «Laurents teorem», «konvergenssetningen for Fourier-rekker», «superposisjonsprinsippet».
3. **Føringsstandard:** transformoppslag markeres («fra tabellen …»); delbrøk-/kvadratkompletteringssteg vises; svar oppgis som **eksakt uttrykk** der mulig. Ved kurveintegral: **tegn kurven og marker singularitetene/radiene**.
4. **Obligatoriske delsteg som skiller nivå:** (i) å vise **alle tre `k`-tilfellene** i separasjon; (ii) å begrunne at **halvsirkelbuen → 0** (ML-ulikheten er ikke valgfri); (iii) riktig **residyformel for dobbeltpol**; (iv) å inkludere **`n=0`-leddet** ved Neumann; (v) å oppgi **konvergensområdet** for hver Laurent-rekke; (vi) å bruke **konvergenssetningen** (`½(f⁺+f⁻)`) i sprangpunkt.
5. **Flere gyldige veier honoreres eksplisitt:** delbrøk *vs.* kvadratkomplettering ved invers Laplace; grensedefinisjon *vs.* CR for `f'`; endelig sum *vs.* uendelig rekke i separasjon; residy *vs.* Cauchys integralformel for deriverte (H2022 P7 viser begge).
6. **Feil i egen oppgavetekst → sensor gir full uttelling** (Des2023 P6, H2022 P1) — men studenten forventes å håndtere degenererte tilfeller fornuftig.

### Hva som skiller karakternivåene
- **Bestått:** utfører de mekaniske grepene — transformér ODE-en og løs for `Y(s)`; sett opp Fourier-koeffisientintegralet; sett `u=FG` og få de to ODE-ene; sett opp residyen for én pol.
- **Midtsjikt:** invers Laplace via **både** delbrøk og kvadratkomplettering; symmetriutnyttelse + delvis integrasjon i Fourier; **alle tre `k`-tilfellene**; korrekt annulus-inndeling; ML-argumentet for buen.
- **Toppsjikt:** korrekt **andreforskyvningsteorem** (finn `f` først, forskyv sist); analytisitet kun i **hel omegn** (ikke isolert CR-punkt); **dobbeltpol-residy** og orden-klassifisering; **`n=0` ved Neumann**; **Weierstrass/Parseval**-argumentene; keyhole-/branch-håndtering av `ln z`.

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Analytisitet fra ett CR-punkt:** å påstå at `|z|²` eller `e^{−|z|²}` er analytisk fordi CR holder i `z=0` — analytisitet krever en hel omegn.
2. **Feil forskyvningsteorem for Heaviside:** første i stedet for andre, eller å glemme `y(t)=u(t−a)f(t−a)` etter å ha funnet `f`; feil retning på `δ(t±a)`.
3. **Hoppe over `k`-tilfeller i separasjon:** ikke vise at `k>0` og `k=0` bare gir triviell løsning; **glemme `n=0`-leddet ved Neumann**.
4. **Glemt midling i sprangpunkt:** Fourier-rekka konvergerer til `½(f⁺+f⁻)`, ikke funksjonsverdien.
5. **Feil annulus / manglende konvergensområde:** feil «ut/inn»-substitusjon i geometrisk rekke; å oppgi Laurent-rekke uten ringen den gjelder i.
6. **Hoppe over ML-argumentet** for at halvsirkelbuen → 0 (obligatorisk), eller feil ulikhet `|z²+4| ≥ |z|²−4`.
7. **Feil residyformel for dobbeltpol** (glemme derivasjonen), eller feil orden-klassifisering (hevbar forvekslet med pol).
8. **Delbrøk-/kvadratkompletteringsfeil:** feil fortegn, eller å ikke kvadratkomplettere en irredusibel andregradsnevner til tabellform.
9. **Tidsfelle:** separasjon-av-variable-oppgaven og residy-integralet er tunge; å bruke for lang tid tidlig stjeler fra dyre sluttoppgaver.

---

## 6. Teorem-, notasjons- og formelapparat

### Utdelt formelark i TMA4120 (⚠️ trolig BORTE i TMA4121 pga. kode E)
Vedlagt hvert TMA4120-sett (les hele arket):
- **Laplace-tabell:** `1, tⁿ, eᵃᵗ, tⁿeᵃᵗ, cos bt, sin bt, eᵃᵗcos bt, eᵃᵗsin bt, cosh bt, sinh bt, u(t−c), δ(t−c)`; reglene `ℒ(f')=sF−f(0)`, `ℒ(f'')=s²F−sf(0)−f'(0)`, `ℒ(∫₀ᵗf)=F/s`, **s-skift** `ℒ(eᵃᵗf)=F(s−a)`, **t-skift** `ℒ(f(t−c)u(t−c))=e^{−cs}F(s)`, `ℒ(tf)=−F'`, **konvolusjon** `ℒ(f∗g)=FG`.
- **Fourier:** reell + kompleks rekke (`aₙ, bₙ, cₙ`), Fourier-transform `f̂(w)=(1/√2π)∫f e^{−iwx}dx`, **Parseval**, transformtabell (`δ`, boks, `e^{−ax}u(x)`, `1/(x²+a²)`, Gauss `e^{−ax²}`), reglene `ℱ(f')=iw f̂`, `ℱ(f'')=−w²f̂`, skift, `ℱ(f∗g)=√2π f̂ĝ`.
- **Kompleks analyse:** `e^{x+iy}`, `cos/sin/cosh/sinh` via eksponensialer, Taylor/Laurent-koeffisienter, **residyformel for pol av orden n** (`(1/(n−1)!)lim d^{n−1}/dz^{n−1}[(z−z₀)ⁿf]`).
- **Standardintegraler:** `∫xⁿ sin/cos ax`, `∫eᵃˣ sin/cos bx`, Gauss `∫e^{−ax²}=√(π/a)`; trig-identiteter; geometrisk + eksponensiell rekke.
- **2. ordens lineær ODE:** generalløsning i tre rot-tilfeller (`r₁≠r₂` reell; `r₁=r₂`; `α±iβ`).

> **Konsekvens for boka:** siden TMA4121 er **kode E (ingen hjelpemidler)**, kan man **ikke** anta at studenten har transformtabellen for hånd. Boka bør (a) inneholde et kompakt «må-kunnes»-tabellsammendrag studenten selv trener på å reprodusere, og (b) legge mer vekt på **utledning** av standardpar (`ℒ(cos/sin)`, Gauss-transformen) enn TMA4120-fasitene gjorde. **Verifiser** hva TMA4121 faktisk forventer memorert.

### Må beherskes aktivt (kunne anvende og navngi)
- **Laplace:** transform/invers, derivasjonsregel, **begge forskyvningsteoremer**, konvolusjonsteoremet, Dirac/Heaviside, delbrøk + kvadratkomplettering.
- **Fourier:** reelle sinus-/cosinusrekker, kompleks rekke, symmetriutnyttelse, konvergens `½(f⁺+f⁻)`, Weierstrass' M-test, Fourier-transform med derivasjons-/konvolusjonsregel + Parseval.
- **Kompleks analyse:** Cauchy–Riemann + harmonisk konjugert, Cauchys integralteorem/-formel, residysetningen (enkel + orden-n-pol), singularitetsklassifisering, Taylor/Laurent + annuli, ML-ulikheten, kompleks log/eksponensial, (evt. konform avbildning).
- **PDE:** separasjon (alle tre `k`-tilfellene), Dirichlet/Neumann-egenfunksjoner (`sin`/`cos`, inkl. `n=0`), superposisjon + koeffisientmatching, ikke-homogen reduksjon, Fourier-transform-metoden på ℝ, d'Alembert (bølgeligning på uendelig streng).
- **NYTT for TMA4121 (utenfor arkivet — source separat):** flervariabel kalkulus (gradient, retningsderivert, multiple integraler, vektoranalyse?) og lineær algebra (egenverdier, diagonalisering?). **Innhold og vekt må verifiseres mot TMA4121s pensum og første eksamenssett.**

### Notasjon boka bør speile
`ℒ, F(s), Y(s)`; `u(t−a)` Heaviside, `δ` Dirac; `f̂(w)` Fourier-transform, `aₙ/bₙ/cₙ` Fourier-koeffisienter; `f=u+iv`, `uₓ=v_y, u_y=−vₓ`; `Res_{z=z₀}f`, annuli `A: r<|z−z₀|<R`; `u=F(x)G(t)`, separasjonskonstant `k`; eksakte svar der mulig.

---

## 7. Prognose og prioritering

> TMA4120-arkivet gir et robust, kvantitativt bilde av **kompleks analyse + Fourier + Laplace + PDE**. TMA4121 **beholder kompleks analyse og PDE fullt ut**, **beholder Fourier-rekker som PDE-verktøy**, gjør **transformmetodene usikre i vekt**, **fjerner den utdelte tabellen (kode E)**, og **legger til flervariabel kalkulus + lineær algebra** som arkivet ikke dekker. Prioriteringen under vekter derfor kontinuerlige tema tyngst og merker de usikre.

### Nivå 1 — trygg kjerne (kontinuerlig TMA4120 → TMA4121, bygg boka her)
1. **Kompleks analyse — analytisitet/Cauchy–Riemann + harmonisk konjugert** (73 %). Isolert-CR-fella, direkte `f'`-alternativ.
2. **Kompleks integrasjon — residyer** (lukket kurve 91 %; reelt integral via halvsirkel + ML). Enkel + dobbeltpol, klassifisering, keyhole/branch for `ln`.
3. **Taylor/Laurent-rekker + konvergensområde** (82 %). Geometrisk rekke, annuli, leddvis derivasjon/integrasjon, radius via nærmeste singularitet.
4. **Separasjon av variable for PDE** (91 %). Alle tre `k`-tilfellene, Dirichlet/Neumann (`n=0`!), superposisjon + koeffisientmatching, rektangel-Laplace, ikke-homogen reduksjon.

### Nivå 2 — dekk grundig, men merk transformusikkerheten (verifiser)
5. **Laplace-transform** (100 % i TMA4120, vekt usikker i TMA4121). ODE/IVP, Volterra/konvolusjon, Heaviside/Dirac, delbrøk + kvadratkomplettering + begge forskyvningsteoremer. **Legg vekt på utledning, ikke bare tabelloppslag** (kode E).
6. **Fourier-rekke** (73 %). Symmetri, sum av tallrekke, sprangkonvergens, Weierstrass' M-test. (Trygg som PDE-verktøy.)
7. **Fourier-transform** (64 %, vekt usikker). Utregning, invers via residy, PDE på ℝ, Parseval.

### Nivå 3 — bredde/beredskap + de nye TMA4121-områdene
8. **Singularitetsklassifisering, kompleks likning, konform avbildning** — lav/synkende frekvens; kort dekning, verifiser mot TMA4121.
9. **Flervariabel kalkulus** — **NYTT, ikke i arkivet.** Source fra TMA4105-tradisjon / TMA4121-pensum. **Kan ikke prognostiseres fra dette arkivet.**
10. **Lineær algebra** — **NYTT, ikke i arkivet.** Source fra TMA4110-tradisjon / TMA4121-pensum. **Kan ikke prognostiseres fra dette arkivet.**

### Konkret prognose for kompleks-analyse-/PDE-/transform-delen av et TMA4121-sett
Basert på TMA4120-malen (og forbehold om reform-endringer): forvent **en Laplace-oppgave** (ODE/konvolusjon/Heaviside), **en Fourier-rekke-oppgave** (utvidelse + sum/sprang), **en PDE-separasjonsoppgave** (varme/bølge/Laplace + koeffisientmatching), **en analytisitet/CR- eller harmonisk-konjugert-oppgave**, **en Laurent-rekke-oppgave med konvergensområde**, og **en residyoppgave** (lukket kurve og/eller reelt integral via halvsirkel + ML). **I tillegg** (nytt): sannsynlig innslag av **flervariabel kalkulus** og/eller **lineær algebra** som arkivet ikke belyser.

**Usikkerhetsmomenter (må verifiseres mot første reelle TMA4121-sett):**
- Vekten på Laplace/Fourier-transform når den utdelte tabellen forsvinner (kode E).
- Hvor stor plass flervariabel kalkulus og lineær algebra tar.
- Om konform avbildning og de tyngste kontur-/branch-integralene beholdes.
- Om lærebok fortsatt er Kreyszig.

---

## 8. Arbeidsdeling mot TMA4135 og anbefalt arketype

### Arbeidsdeling mot tma4135 (Matematikk 4D)
TMA4135-boka og TMA4121-boka **overlapper på tre søyler, men eier hver sin flanke** — de er komplementære, ikke konkurrerende:

| Tema | tma4135 (Matematikk 4D) | tma4121 (Matematikk 4 / 4K-arven) |
|---|---|---|
| **Laplace-transform** | ✅ eier (delt maskineri) | ✅ eier (delt maskineri) — **kryssreferer** |
| **Fourier (rekke + transform)** | ✅ eier (delt) | ✅ eier (delt) — **kryssreferer** |
| **PDE-separasjon (varme/bølge/Laplace)** | ✅ eier (delt) | ✅ eier (delt) — **kryssreferer** |
| **Kompleks analyse** (CR, kontur, residy, Laurent) | ❌ finnes ikke i 4D | ✅ **TMA4121s signatur — eies her** |
| **Numeriske metoder** (interpolasjon, kvadratur, ODE-løsere, differansemetoder) | ✅ **4Ds signatur — eies der** | ❌ finnes ikke i 4K-arkivet |
| **Flervariabel kalkulus + lineær algebra** | delvis (4D-gradient-innslag) | ❗ nytt TMA4121-krav — source separat |

**Praktisk:** La den **delte Laplace/Fourier/PDE-separasjon-kjernen** deles/kryssrefereres mellom de to bøkene (samme teoremer, notasjon, delbrøk-/separasjonsteknikk). **tma4121-boka eier kompleks analyse** i sin helhet (residyer, Laurent, CR, konturintegraler — helt fraværende i 4D). **tma4135-boka eier numerikk** (helt fraværende i 4K). Merk én viktig forskjell i felleskjernen: 4K bruker **residyregning** til Fourier-transform-inversjon, mens 4D bruker **numeriske/tabellbaserte** metoder — så selv den «delte» transformdelen har litt ulik smak.

### Anbefalt arketype
**Samme arketype som tma4135: metode-/oppgavesjanger-drevet eksamenstreningsbok** («teori → arbeidet eksempel → metodemal → graderte øvingsoppgaver», organisert etter de gjentakende oppgavesjangrene i del 3). Begrunnelse:
- Eksamen er en **stabil samling på 6–8 gjenkjennelige sjangre** med sterk fasit-tradisjon — ideelt for en sjanger-katalog med metodemaler og «slik retter sensor».
- Løsningsforslagene er **utledningsdrevne og viser flere gyldige veier** — boka bør speile dette med parallelle metoder (delbrøk vs. kvadratkomplettering; residy vs. Cauchys formel; grensedefinisjon vs. CR).
- **Tilpasning for kode E:** legg inn et «reproduser tabellen»-treningsspor og mer eksplisitt **utledning** av standard transformpar enn 4D-boka trenger (der tabellen deles ut).
- **Utvidelsesmodul:** to nye kapitler for **flervariabel kalkulus** og **lineær algebra** som ikke kan bygges på TMA4120-arkivet — merk disse tydelig som «TMA4121-tillegg, verifiser mot pensum» og source fra TMA4105/TMA4110-tradisjonen.

---

## Kildeliste

Alle filer i `~/Desktop/Eksamner/NTNU/TMA4120/` (~47 PDF-er, 2012–2024).

**Løsningsforslag lest grundig (offisielle fasiter, oppgave-for-oppgave):**
- `tma4120_2024h_solutions_cropped.pdf` (H2024 — 6 oppgaver, full fasit + formelark via `tma4120_2024h_en.pdf`)
- `tma4120h2022_solutions_kontinuasjonseksamen.pdf` (Kont/aug-sett 2023 — 8 oppgaver)
- `exam2023eng_task_solution.pdf` (Des2023 — 6 oppgaver, med utdelt vedleggsark)
- `tma4120h2022_solutions.pdf` (H2022 — 7 oppgaver)
- `tma4120h2021_lf_v2.pdf` (H2021 — 8 oppgaver)
- `Exam2018Kont_solution.pdf` (Kont2018 — 6 oppgaver, log-branch-integral)
- `exam2017Konteng_solution.pdf` (Kont2017 — 6 oppgaver)
- `exam2016Konteng_solution.pdf` (Kont2016 — 7 oppgaver, Kreyszig-sidereferanser)
- `tma4120h2014_lf.pdf` (H2014 — 6 oppgaver)
- `exam2014Kontnor_solution.pdf`, `exam2015nor_solution.pdf`, `exam2013nor_solution.pdf` (eldre fasiter, skummet)

**Oppgavesett + formelark lest grundig:**
- `tma4120_2024h_en.pdf`, `exam4Keng.pdf` (Des2018 ordinær — konform avbildning, d'Alembert-streng), `exam2024Kontnor.pdf`, `exam2022Keng.pdf`, `tma4120h2022_en*.pdf`, `tma4120h2021_en.pdf`.

**Merknader om kildene:**
- **Hull i arkivet:** flere solution-PDF-er er **skannede/bildebaserte** og lot seg ikke tekst-utvinne (`lf_host_2019.pdf` [H2019-fasit], `exam4Keng_solution.pdf`, `cont4k2019soln.pdf`, `exam2012E/N`, `exam2013Kontnor_solution`, `exam2015Kontnor_solution`, `exam2016eng_solution`, `lf_eksamen_h2012`). For disse er analysen basert på de 11 tekst-utvinnbare, velkarakteriserte settene 2014–2024, som gir robust dekning.
- **Målemne vs. kildeemne:** analysen bygger på TMA4120 (Matematikk 4K), som NTNU har **erstattet med TMA4121**. Overføringsrisikoen er dokumentert eksplisitt i innledningen og gjennomgående merket **(verifiser)**. TMA4121s fire pensumområder (flervariabel kalkulus, PDE, kompleks funksjonsteori, lineær algebra) og formatendring (kode E, Inspera) er hentet fra **NTNUs emneside `https://www.ntnu.no/studier/emner/TMA4121`** (hentet i arbeidet).
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag (scratchpad: `fagbeskrivelse-tma4121.md`).

**Forbilder:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal, nært beslektet Fourier/Laplace/PDE-emne) og `docs/hoyskole-boker/tma4110` (komplekse tall).
