# Eksamensanalyse: ECON4310 Macroeconomic Theory (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **8 ordinære eksamenssett (H2018–H2025)** med tilhørende **8 sensorveiledninger/løsningsforslag** — 16 dokumenter, alle lest grundig (siste ~8 år er hele arkivet). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modelligningene er standard faglig notasjon og ikke opphavsrettslig beskyttet.
>
> **Viktigste kontekst:** ECON4310 er UiOs masterkurs i makroøkonomisk teori (10 studiepoeng), undervist og eksaminert **på engelsk**. I motsetning til bachelorkursene ECON1310/2310 (Holden/Mehlum, keynesiansk/åpen-økonomi-tradisjon) er 4310 et **mikrofundert, dynamisk-optimerende** kurs: neoklassisk vekstteori (Solow, Ramsey), intertemporal konsum-/sparebeslutning med Euler-ligning, OLG-modeller, stokastisk konjunkturteori (RBC) og makroøkonomisk metodologi. Emnet er **aktivt** (høst 2026 listet). Faget bruker samme faglige apparat som Ljungqvist–Sargent / Romer / Barro–Sala-i-Martin, men eksamensnivået er bevisst holdt på «penn-og-papir»-utledning: alt kan løses for hånd med Lagrange, FOC-er og enkel algebra. **Ingen numerisk simulering, ingen dynamisk programmering med verdifunksjons-iterasjon på eksamen** — Bellman/DP nevnes i pensum, men testes ikke som regneoppgave.

---

## 1. Eksamensform og utvikling

### Form

| År | Format | Struktur | Σ poeng | Kommentar |
|---|---|---|---|---|
| H2018 | Skoleeksamen | **Exercise A/B/C** — A = 3 korte spørsmål (Ricardo T/F-lignende + RBC T/F + heterogenitet T/F), B = 4-periode dynasti/arv, C = stokastisk RBC | 160 | Poengtabell; detaljert poengfordeling per FOC i veiledningen |
| H2019 | Skoleeksamen | **Exercise A/B/C/D** — A = OLG generell likevekt m/befolkningsvekst & skatt, B = 3-periode konsum m/lånebeskrankning, C = skatt & arbeidstilbud, D = trygd | 190 | Fire oppgaver; bredest sett i arkivet |
| H2020 | Skoleeksamen | **Exercise A/B/C** — A = skatt & arbeidstilbud, B = Ricardiansk ekvivalens (OLG, 3 finansieringsmåter), C = stokastisk RBC | 140 | Laveste poengsum; korona-år |
| H2021 | Skoleeksamen | **Exercise A/B/C** — A = **Ramsey fasediagram** (100 p), B = trygd m/levealdersusikkerhet (70 p), C = Solow m/effektive arbeidere (40 p) | 210 | Tyngste Ramsey-oppgaven i arkivet |
| H2022 | Skoleeksamen | **Exercise A/B** — A = 2-periode konsum/Euler (kalt «Ramsey», 100 p), B = Solow + klimaendring (100 p) | 200 | Siste sett i gammelt format |
| H2023 | Skoleeksamen | **Part A/B/C, hver 1/3** — A = **essay** (Friedman/Lucas/NEMO/SAM, 500–750 ord), B = 2-periode CRRA-konsum/Euler, C = Solow | — | **Formatskifte**: essay innføres |
| H2024 | Skoleeksamen | **Part A/B/C, hver 1/3** — A = essay (Friedman/Lucas/NEMO/SAM), B = uendelig-horisont konsum/Euler/PIH, C = Solow m/befolkningsvekst | — | Samme essay-prompt som H2023 |
| H2025 | Skoleeksamen | **Part A/B/C, hver 1/3** — A = essay (**Solow 1997 / HANK**), B = investeringsteori/firmaverdi, C = Piketty vs. Solow | — | Essay-prompt skiftet tema; nye modelloppgaver |

**Konstanter og trender:**

- **Skriftlig skoleeksamen på engelsk.** Ordbok tillatt etter inspeksjon. Karakter A–F. Obligatorisk semesteroppgave må være godkjent (gyldig i 9 semestre) for å gå opp. Alle svar på engelsk; «Solutions without traceable outlines … do not earn points» er trykt i eksamenshodet hvert år i gammelt format.
- **To distinkte formater — skiftet skjer H2022 → H2023:**
  - **Gammelt format (t.o.m. H2022):** to–fire nummererte **Exercise A/B/(C/D)** med eksplisitt poengtabell (Σ varierer 140–210). Består av korte T/F-spørsmål med *påkrevd* begrunnelse (kun H2018/H2020) + to–tre store, gjennomregnede modelloppgaver.
  - **Nytt format (f.o.m. H2023):** tre **likevektede deler (hver nøyaktig 1/3)**: **Part A = kort metodologi-essay** (500–750 ord H2023/H2024, «no more than 500 words» H2025) forankret i pensumlitteraturen; **Part B og Part C = modelloppgaver** med full utledning. Dette formatet har holdt seg stabilt tre år på rad og er den mest sannsynlige malen framover.
- **Skriv utledningen, ikke bare svaret.** Regelen er absolutt: svar uten sporbar utledning gir **null poeng**, selv om sluttsvaret er riktig. Motsatt gir en korrekt oppstilling med regnefeil delvis uttelling (poeng deles per steg — se del 4). Start ny side per deloppgave.
- **Alt kan regnes for hånd.** Ingen kalkulator- eller programmeringskrav; ingen tallregning tyngre enn en andregradsligning (H2020 C(f): `6a²+3a−e²=0`). Tallsvar forventes der oppgaven gir tall (kroner, rater, prosent).
- **Løsningsforslagene er knappe og formelle.** UiO publiserer korte «Solution Proposal»-dokumenter (mest FOC-er + sluttsvar), ikke pedagogiske gjennomganger. Essay-delen scores mot en **firepunkts-sjekkliste** (del 4), ikke en fasit.

### Progresjonen fra ECON1310/2310 (hva 4310 tester UTOVER bachelor-makro)

| Dimensjon | ECON1310/2310 (bachelor) | **ECON4310 (master)** |
|---|---|---|
| Metode | IS-RR-PK, Keynes-kryss, Solow grafisk; relasjoner *oppgis* | **Mikrofundering fra bunnen**: alt utledes fra husholdningens/firmaets optimeringsproblem via Lagrange + FOC-er |
| Konsum | Konsumfunksjon `C=c₀+c₁Y` (oppgitt) | **Intertemporal optimering + Euler-ligning `u'(cₜ)=β(1+r)u'(c_{t+1})`**, permanentinntektshypotesen (PIH), CRRA-nytte |
| Vekst | Solow grafisk (per arbeider), golden rule verbalt | **Solow algebraisk** (steady state, K/Y-ratio, konvergens) **+ Ramsey optimal vekst** (fasediagram, saddelbane, transversalitet) |
| Generasjoner | Ingen | **OLG-modeller** (overlappende generasjoner): sparing, kapitalakkumulasjon, flere steady states, Ricardiansk ekvivalens |
| Usikkerhet | Ingen formell | **Stokastisk konjunkturteori (RBC)**: tilstandsvise budsjett, stokastisk Euler, Jensens ulikhet, risikopremie/likevektsrente |
| Arbeidstilbud | Verbalt | **Formell arbeidstilbudsmodell** `max u(c,l)` med inntekts-/substitusjonseffekt |
| Metodologi | Ingen | **Metodologi-essay**: Friedman (1953), Lucas-kritikken (1976), DSGE/NEMO, HANK, SAM |
| Skal IKKE bygges på | — | Ingen IS-RR-PK, ingen Keynes-kryss, ingen åpen-økonomi-valutakurs, ingen hovedkursmodell — 4310 er en helt annen tradisjon |

**Konklusjon for bokdesign:** 4310-boken skal bygge fem søyler — **(1) intertemporal konsum-/sparebeslutning + Euler**, **(2) Solow**, **(3) Ramsey optimal vekst**, **(4) OLG + finanspolitikk/Ricardo**, **(5) stokastisk RBC** — pluss to «lettere» tilbakevendende tema (**arbeidstilbud & skatt**, **trygd/pensjon**) og et **metodologi-kapittel** for essayet. Investeringsteori og Piketty er nyere, mindre søyler som må dekkes. Boken må trene *utledning fra optimeringsproblem*, ikke gjenkjenning av oppgitte relasjoner.

---

## 2. Temafrekvens-tabell

Grunnlag: 8 ordinære sett (H2018–H2025). Celleverdi = antall sett der temaet forekommer som en egen (del)oppgave eller bærende modell. Prosent av 8.

| Tema | Sett | **Gjenganger-score (8)** |
|---|---|---|
| **Intertemporal konsum/sparing + Euler-ligning** (2-periode/T-periode/uendelig) | H2018(A2,A3,B), H2019(B), H2021(A), H2022(A), H2023(B), H2024(B) | **6/8 = 75 %** |
| **Solow-modellen** (steady state, K/Y, komparativ statikk, golden rule) | H2021(C), H2022(B), H2023(C), H2024(C), H2025(C) | **5/8 = 63 %** |
| **Lagrange-oppsett + FOC-utledning** (som kjerneteknikk, alle modelloppgaver) | H2018, H2019, H2020, H2021, H2022, H2023, H2024, H2025 | **8/8 = 100 %** |
| **Golden rule / optimal sparerate** | H2021(C), H2022(B), H2023(C-implisitt via Css) | **3/8 = 38 %** |
| **OLG (overlappende generasjoner)** | H2018(B dynasti/arv), H2019(A), H2020(B) | **3/8 = 38 %** |
| **Ricardiansk ekvivalens / finanspolitikk-rangering** | H2018(A1), H2019(A m/skatt&transfer), H2020(B) | **3/8 = 38 %** |
| **Metodologi-essay** (Friedman/Lucas/DSGE/HANK/SAM) | H2023(A), H2024(A), H2025(A) | **3/8 = 38 %** (men **3/3 i nytt format**) |
| **Stokastisk RBC / konsum under usikkerhet** (Jensen, risikopremie) | H2018(C), H2020(C) | **2/8 = 25 %** |
| **Skatt & arbeidstilbud** (inntekts-/substitusjonseffekt) | H2019(C), H2020(A) | **2/8 = 25 %** |
| **Sosial sikkerhet / pensjon** (levealdersusikkerhet, PAYG) | H2019(D), H2021(B) | **2/8 = 25 %** |
| **Lånebeskrankning / hjørneløsning** (bryter konsumglatting el. Ricardo) | H2018(A1,B), H2019(B), H2020(B) | **4/8 = 50 %** |
| **Inntekts-/substitusjonseffekt av rente** (fortegnsdrøfting, `1/σ`) | H2019(D), H2021(B), H2022(A), H2023(B) | **4/8 = 50 %** |
| **Permanentinntektshypotesen (PIH)** | H2018(A2), H2024(B) | **2/8 = 25 %** |
| **Investeringsteori / firmaverdi** (NPV, optimal K) | H2025(B) | **1/8 = 13 %** (ny sjanger) |
| **Piketty K/Y = s/g vs. Solow s/(g+δ)** (netto vs. brutto) | H2025(C) | **1/8 = 13 %** (ny sjanger) |
| **Ramsey fasediagram + saddelbane + komparativ dynamikk** | H2021(A) | **1/8 = 13 %** (men tung, «garantert kunne»-stoff) |
| **Fasediagram / transversalitetsbetingelse** | H2021(A) | **1/8 = 13 %** |
| **Effektive arbeidere (teknologivekst g)** i Solow | H2021(C), H2022(B) | **2/8 = 25 %** |
| **True/False med påkrevd begrunnelse** | H2018(A2,A3) | **1/8 = 13 %** (kun gammelt format) |
| — Dynamisk programmering / Bellman som regneoppgave | (aldri) | **0/8** — i pensum, men aldri eksaminert som DP-iterasjon |
| — Ny-keynesiansk / pengepolitikk / Taylor-regel | (aldri) | **0/8** — hører til ECON2310, ikke 4310 |
| — Aktivaprising / Lucas asset-pricing-modell | (aldri direkte) | **0/8** — risikofri rente utledes i RBC, men ingen full asset-pricing-oppgave |
| — Åpen økonomi / valutakurs / IS-RR | (aldri) | **0/8** — bachelor-stoff |

### Rotasjonsmønsteret (viktigste strukturfunn)

**Nytt format (H2023–2025) er en stabil trippel:** `Essay (metodologi) + Modelloppgave 1 + Modelloppgave 2`. De to modelloppgavene trekkes fra en pool:

| År | Part A (essay) | Part B | Part C |
|---|---|---|---|
| H2023 | Friedman/Lucas/NEMO/SAM | 2-periode CRRA-konsum + Euler | Solow (K/Y, golden rule) |
| H2024 | Friedman/Lucas/NEMO/SAM | Uendelig-horisont konsum + Euler + PIH | Solow m/befolkningsvekst |
| H2025 | Solow 1997 / HANK | Investeringsteori / firmaverdi | Piketty vs. Solow |

**Kjernen i modelloppgavene er konsum-Euler og Solow** — minst én av de to er med hvert år i nytt format (H2023: begge; H2024: begge; H2025: Solow via Piketty + investering som ny vri). Essayet er i praksis **garantert** under gjeldende format.

**Gammelt format (H2018–2022)** var bredere og tyngre per oppgave, med en fast dominans av **intertemporal konsum/sparing** (hver år) kombinert med enten **OLG/Ricardo/trygd** (H2018–2020) eller **vekst (Ramsey/Solow)** (H2021–2022). Stokastisk RBC var den tyngste enkeltoppgaven (H2018 C, H2020 C).

**Praktisk konsekvens:** Alle fem søyler må beherskes, men **konsum-Euler (75 %) og Solow (63 %)** er de to «nesten garanterte». Metodologi-essayet er obligatorisk i gjeldende format og har lav dekningskostnad. OLG, RBC, arbeidstilbud, trygd, Ramsey-fasediagram, investeringsteori og Piketty er «må-kunne, roterer»-stoff.

---

## 3. Oppgavetype-katalog

De faktisk forekommende sjangrene, med krav og sensors foretrukne metode.

### A. Utled Euler-ligningen fra husholdningens optimeringsproblem
- **Krav:** Gitt `max Σβᵗu(cₜ)` under periodebudsjett `cₜ+aₜ₊₁=(1+r)aₜ+y`, sett opp Lagrange (én multiplikator per budsjett, *eller* én på den konsoliderte livstidsbudsjettbetingelsen), ta FOC-er for `cₜ`, `cₜ₊₁` og spare-/aktivavariabelen, og **elimér multiplikatorene** for å få `u'(cₜ)=β(1+r)u'(cₜ₊₁)`. Med CRRA `u(c)=c^{1−σ}/(1−σ)`: `cₜ^{−σ}=(1+r)cₜ₊₁^{−σ}`, ekvivalent `c₂=(1+r)^{1/σ}c₁`. **Tolkning obligatorisk:** grensenytten i dag = neddiskontert grensenytte i morgen; renta er relativprisen mellom konsum i to perioder.
- **Forekomst:** H2018(A2,A3,B), H2019(B), H2021(A), H2022(A), H2023(B), H2024(B) — 6/8 sett.
- **Omskrevet eksempel:** «En husholdning maksimerer neddiskontert nytte over uendelig mange perioder under en periodevis budsjettbetingelse. Vis at optimum må oppfylle Euler-ligningen, og tolk den økonomisk.»

### B. Løs konsumfunksjonen + drøft rentens fortegn (inntekts-/substitusjonseffekt)
- **Krav:** Kombiner Euler med den konsoliderte livstidsbudsjettbetingelsen `c₁+c₂/(1+r)=…` for lukket uttrykk, f.eks. `c₁=y/(1+(1+r)^{1/σ−1})`. **Dekomponer renteeffekten:** `∂c₁/∂(1+r)` er *tvetydig*; `1/σ` styrer substitusjonseffekten, «1» er inntektseffekten; substitusjonseffekten dominerer (`∂c₁/∂(1+r)<0`) når `1/σ>1`. Ved inntekt kun i periode 1 (rent sparetilfelle) er «human wealth»-effekten null — nevn det (H2021 B).
- **Forekomst:** H2019(D), H2021(B), H2022(A), H2023(B) — 4/8.
- **Omskrevet eksempel:** «Forklar hvorfor virkningen av en renteøkning på førsteperiodens konsum er tvetydig, og hvilken parameter som avgjør fortegnet.»

### C. Permanentinntektshypotesen (β(1+r)=1)
- **Krav:** Med `β(1+r)=1` gir Euler `u'(cₜ)=u'(cₜ₊₁)` ⇒ **perfekt glatting** `cₜ=c` konstant. Sett inn i livstidsbudsjettet ⇒ `c=ra+y` (annuiteten av total livstidsformue). **PIH-tolkning:** en *midlertidig* inntektsøkning virker som økt formue → konsum stiger med `r·`beløpet; en *permanent* inntektsøkning → konsum stiger én-til-én.
- **Forekomst:** H2018(A2), H2024(B).
- **Omskrevet eksempel:** «Anta β(1+r)=1. Utled konsumfunksjonen og forklar forskjellen i konsumrespons på en midlertidig vs. en permanent inntektsøkning.»

### D. Solow: utled bevegelseslov, steady state og K/Y-ratio
- **Krav:** Fra `Kₜ₊₁=Iₜ+(1−δ)Kₜ`, `Iₜ=sYₜ`, `Yₜ=F(Kₜ,Lₜ)` ⇒ `Kₜ₊₁=sF(Kₜ,L)+(1−δ)Kₜ`. Per arbeider (m/befolkningsvekst n): `kₜ₊₁=(1/(1+n))[sf(kₜ)+(1−δ)kₜ]` (bruk konstant skalaavkastning). Steady state: **`K_ss/Y_ss=s/δ`** (uten vekst) eller `s/(n+g+δ)` (med vekst); Cobb-Douglas `Kss=(s/δ)^{1/(1−α)}`, `Yss=(s/δ)^{α/(1−α)}`. Langsiktig vekst: `Yₜ` vokser med `n` (eller `n+g`), `yₜ` med `0` (eller `g`).
- **Forekomst:** H2021(C), H2022(B), H2023(C), H2024(C), H2025(C) — 5/8.
- **Omskrevet eksempel:** «Utled bevegelsesloven for kapital per arbeider, finn steady state-verdien, og vis at langsiktig kapital-produktforhold er s/δ.»

### E. Solow: komparativ statikk (s↑) og golden rule
- **Krav:** `∂Yss/∂s>0` vises ved derivasjon (`(α/(1−α))(s/δ)^{α/(1−α)}·(1/s)>0`). Men `∂Css/∂s` (der `Css=(1−s)Yss`) kan **skifte fortegn** — golden rule-argumentet: man kan spare for mye. **Golden rule:** maksimer `(1−s)f(k*)` ⇒ `f'(k*)=n+g+δ` (`MP_k=` strålens helning); ved Cobb-Douglas m/eksponent α gir det `s_GR=α` (spareraten = kapitalens inntektsandel). Naturkatastrofe/kapitalødeleggelse: output faller først, vokser så raskere, konvergerer tilbake til samme steady state; `w` faller så stiger, `r` (rentesats `r−δ`) hopper opp så synker.
- **Forekomst:** H2021(C,d), H2022(B), H2023(C4–5).
- **Omskrevet eksempel:** «Spareraten øker varig. Vis at steady-state-produksjonen alltid stiger, men at steady-state-konsumet ikke nødvendigvis gjør det. Knytt til golden rule.»

### F. Ramsey optimal vekst: fasediagram, saddelbane, komparativ dynamikk
- **Krav (tyngst i arkivet, H2021 A):** Diskret Ramsey med CRRA θ og Cobb-Douglas. Utled **konsum-Euler** `cₜ₊₁/cₜ=[β(1+αkₜ₊₁^{α−1}−δ)]^{1/θ}`, ressursbeskrankning `kₜ₊₁−kₜ=kₜ^α−δkₜ−cₜ`, og **transversalitetsbetingelsen** `lim βᵗcₜ^{−θ}kₜ₊₁=0` (erstatter no-Ponzi). Tegn **fasediagram** i (k,c): `Δc=0`-loci (vertikal i k*) og `Δk=0`-loci (pukkelkurve); marker steady state E, bevegelsesretninger i alle fire kvadranter, og **saddelbanen**. Begrunn hvorfor konsum utenfor saddelbanen ikke er likevekt. **Komparativ dynamikk ved δ-sjokk:** skill *midlertidig* (1 periode / T perioder — c hopper ned, følger saddelbanen tilbake) fra *permanent* (ny steady state); skisser tidsbaner for lønn `w` og rente `r`.
- **Forekomst:** H2021(A) — én gang, men tung (100 poeng) og eksplisitt figurkrevende.
- **Omskrevet eksempel:** «Tegn fasediagrammet for Ramsey-modellen, marker steady state og saddelbanen, og analyser et midlertidig sjokk i depresieringsraten.»

### G. OLG: sparing, kapitalakkumulasjon, flere steady states
- **Krav:** To-periode OLG med log-nytte `log(c₁ₜ)+βlog(c₂ₜ₊₁)`. Ung sparer `s=β/(1+β)·w`; kapitalmarkedslikevekt `Nₜsₜ=Kₜ₊₁` ⇒ per-capita bevegelseslov `kₜ₊₁=[β/((1+β)(1+n))](1−α)kₜ^α` (med `w=(1−α)kₜ^α`). **To steady states:** `k=0` og positiv `k*=[β(1−α)/((1+β)(1+n))]^{1/(1−α)}`. Skatteanalyse: proporsjonal lønnsskatt til «tanks» senker sparing og k*; skatt tilbakeført som lump-sum transfer nøytraliserer effekten (disponibel inntekt uendret).
- **Forekomst:** H2019(A), H2018(B dynasti/arv), H2020(B).
- **Omskrevet eksempel:** «Utled bevegelsesloven for kapital per ung i en OLG-modell med log-nytte, finn steady states, og vis hvordan en lønnsskatt påvirker langsiktig kapital.»

### H. Dynasti med arv (bequests) og hjørneløsning
- **Krav (H2018 B):** Fireperiode-husholdning / foreldre-barn-dynasti, log-nytte, `r=0` (så `β(1+r)=1` ⇒ perfekt glatting). Ubundet optimum = lik konsum alle perioder = livstidsinntekt / antall perioder. Løs **barnas delproblem først** for verdifunksjonen `V(b)=2log((60000+b)/2)`, sett inn i foreldrenes problem, løs foreldrenes Lagrange (`1/c₁=1/c₂=λ`). **Håndter hjørneløsning eksplisitt:** hvis optimal arv `b<0` men `b≥0` binder, sett `b=0` og fall tilbake til den beskrankede allokeringen. Ricardiansk ekvivalens gjelder *så lenge arvemotivet er interiørt*; en skatt/subsidie mellom generasjoner endrer allokeringen først når `b≥0` binder.
- **Forekomst:** H2018(B).
- **Omskrevet eksempel:** «Løs barnets problem for verdifunksjonen V(b), sett inn i foreldrenes problem, og forklar hva som skjer når arv ikke kan være negativ.»

### I. Ricardiansk ekvivalens / finanspolitikk-rangering
- **Krav:** Husholdning rangerer finansieringsmåter: (a) skatt nå, (b) gjeld med tilbakebetaling neste periode, (c) evig gjeld (kun rentebetaling). Med **fri lån/sparing og lik PDV** er husholdningen indifferent mellom (a) og (b) (ekte Ricardo); foretrekker (c) fordi byrden veltes på framtidige generasjoner (endelig levetid). **Bindende lånebeskrankning bryter ekvivalensen:** da foretrekkes (b) framfor (a) (utsatt skatt). Evig levetid + fri lån ⇒ indifferent mellom alle tre. Neste generasjon rangerer motsatt (1>3>2). Metode: **regn nåverdien (PDV) av skattebyrden** per individ.
- **Forekomst:** H2018(A1), H2019(A m/skatt&transfer-vri), H2020(B) — 3/8.
- **Omskrevet eksempel:** «En stat kan finansiere en engangsutgift med skatt nå, gjeld tilbakebetalt neste periode, eller evig gjeld. Ranger alternativene for en husholdning med endelig levetid, med og uten lånebeskrankning.»

### J. Stokastisk RBC: tilstandsvis Euler, Jensen, likevektsrente
- **Krav (H2018 C, H2020 C):** To-periode, to-tilstand (god `s_G` / dårlig `s_B`), lineær produksjon `y=A(s)n`. Konkurransemarked ⇒ **lønn = produktivitet**. Skriv **tilstandsvise budsjett** `c₁+a₂=w₁`, `c₂(s)=w(s)+(1+r₂)a₂`. Sett opp **tilstandssortert Lagrange** (vektet med sannsynligheter `βp`, `β(1−p)`), utled FOC-er, og deretter **stokastisk Euler** `u'(c₁)=βE[u'(c₂(s₂))](1+r₂)`. Med aktivum i **null nettotilbud** er `a₂=0` ⇒ konsum kan **ikke** glattes (`c₂(s_G)≠c₂(s_B)`). Sluttpoeng: bruk **Jensens ulikhet** (`u'(E[w])≤E[u'(w)]`) til å vise at likevektsrenta er **lavere** enn den risikonøytrale `r_RN=1/β−1` (forsiktighetssparing / risikopremie). Kvantitativ variant: løs andregradsligning for `a₂` (H2020 f).
- **Forekomst:** H2018(C), H2020(C) — 2/8, men tunge (60 poeng hver).
- **Omskrevet eksempel:** «Utled den stokastiske Euler-ligningen i en to-tilstands RBC-modell, og vis med Jensens ulikhet at likevektsrenta er lavere enn i en risikonøytral økonomi.»

### K. Skatt & arbeidstilbud
- **Krav:** `max u(c,l)` under `c=(1−τ)l+Tr`. FOC gir intratemporal betingelse (grensesubstitusjonsraten = nettolønn `1−τ`). **Log-nytte i konsum** (`u=log c−l²/2`): inntekts- og substitusjonseffekt kansellerer ⇒ arbeidstilbud upåvirket av skatt. **Log av hele nytten** (`u=log(c−l²/2)`): kun substitusjonseffekt ⇒ arbeid faller når skatt stiger. **Transfer `Tr>0`** skaper positiv inntektseffekt ⇒ mindre arbeid (og mer fritid/konsum) enn når skatteinntektene «kastes i havet».
- **Forekomst:** H2019(C), H2020(A) — 2/8.
- **Omskrevet eksempel:** «Utled optimalt arbeidstilbud og forklar med inntekts- og substitusjonseffekt hvorfor svaret avhenger av nyttefunksjonens form.»

### L. Sosial sikkerhet / pensjon under levealdersusikkerhet
- **Krav:** To-periode med overlevelsessannsynlighet `p`; nytte f.eks. `2√c₁+p·2√c₂` (H2021) eller `log c₁+p log c₂` (H2019). Løs `c₁(r,p), c₂(r,p), s(r,p)`. Innfør **pay-as-you-go-trygd** via statens budsjett `pb=τy(1+n)` ⇒ `b=τy(1+n)/p`; oppdater livstidsbudsjettet og løs på nytt. Avgjørende resultat: trygd foretrekkes **hviss `(1+n)(1+g)/p > 1+r`** (H2019) / **`p(1+r)<1`** (H2021) — sammenlign de to livstidsbudsjettbetingelsene. Lav rente og/eller lav overlevelse favoriserer trygd; høy rente ⇒ privat sparing dominerer, «optimalt system er ingen ordning».
- **Forekomst:** H2019(D), H2021(B) — 2/8.
- **Omskrevet eksempel:** «Innfør et PAYG-trygdesystem i en to-periode-modell med overlevelsessannsynlighet, og gi betingelsen for at husholdningen foretrekker trygd framfor privat sparing.»

### M. Investeringsteori / firmaverdi (ny, H2025 B)
- **Krav:** Prosjektverdi = **neddiskontert kontantstrøm** `V₀=Σ(1/(1+r))ᵗdₜ`; konstant `d` gir geometrisk rekke `V=d/r`. Firmaets dynamiske problem `max Σ(1/(1+r))ᵗdₜ` s.t. `dₜ=Kₜ^α−Iₜ`, `Kₜ₊₁=(1−δ)Kₜ+Iₜ` løses med Lagrange der **multiplikatorene blir 1** (`λₜ=qₜ=1`) ⇒ konstant optimal kapital `K*=(α/(r+δ))^{1/(1−α)}`. Intuisjon: høyere `δ` ⇒ lavere K (kapitalen kaster av seg kortere); lavere `r` ⇒ høyere K *og* direkte høyere nåverdi av kontantstrømmen (to kanaler).
- **Forekomst:** H2025(B) — 1/8, men ny og lav dekningskostnad.
- **Omskrevet eksempel:** «Vis at firmaets optimale kapitalbeholdning er konstant og lik (α/(r+δ))^{1/(1−α)}, og forklar gjennom hvilke kanaler en rentenedgang øker firmaverdien.»

### N. Piketty vs. Solow (netto vs. brutto) (ny, H2025 C)
- **Krav:** Utled Pikettys «andre lov» `K/Y=s/g` fra `Kₜ₊₁=sYₜ+Kₜ` langs balansert vekstbane; kontrast med Solows `K/Y=s/(g+δ)` fra `Kₜ₊₁=sYₜ+(1−δ)Kₜ`. Poeng: **depresiering δ i nevneren demper følsomheten** — når `g` halveres (0,02→0,01) *dobler* Pikettys ratio seg, mens Solows med `δ=0,1` bare stiger `0,12/0,11≈+9 %`. Forklar **netto vs. brutto inntekt/sparerate** (`Ŷ=Y−δK`, `ŝ=(sY−δK)/Ŷ`) og skriv Solow på netto form `Kₜ₊₁=ŝₜŶₜ+Kₜ`.
- **Forekomst:** H2025(C) — 1/8.
- **Omskrevet eksempel:** «Utled Pikettys andre lov og Solows kapital-produktforhold, og forklar hvorfor de gir svært ulike prognoser når vekstraten faller.»

### O. Metodologi-essay (Part A, nytt format)
- **Krav:** Kort essay (≤500–750 ord) forankret i pensumlitteraturen. To varianter observert:
  - **Friedman/Lucas-varianten (H2023, H2024):** (i) gjengi Friedman (1953) — en modell vurderes på **prediksjonskraft** for fenomenene den skal forklare; velg den enkleste blant modeller som forklarer dataene; en modell kan ikke forkastes fordi antakelsene er «urealistiske». (ii) Gjengi **Lucas-kritikken (1976)** — relasjoner som gir god korttidsprognose er *ikke* egnet for politikkevaluering, siden atferdsrelasjonene endrer seg med politikken; politikkmodeller bør ha agenter som *reagerer* på politikkendringen. (iii) Drøft **NEMO** (Norges Banks mellomstore DSGE, Gerdrup & Nicolaisen 2011) og **SAM** (System for Averaging Models) opp mot begge kriteriene.
  - **Solow-1997/HANK-varianten (H2025):** Forklar hvorfor **representativ-agent-modellen** for konsum ikke «virker» etter Solows «opportunistiske» kriterium (matcher ikke empirisk marginal konsumtilbøyelighet, MPC); drøft om **HANK** (heterogene agenter) tilfredsstiller kriteriet (kan matche mikro-MPC, men hviler fortsatt på rasjonelle forventninger); forklar empirisk arbeids rolle (MPC-estimering) for moderne kvantitativ makro.
- **Sensor scorer mot 4 kriterier** (del 4). Full uttelling krever korrekt gjengivelse av *hvert* konsept, anvendelse på den *konkrete* modellen, drøfting, og velskrevet struktur som svarer på prompten.
- **Forekomst:** H2023, H2024, H2025 — 3/8, men obligatorisk (1/3 av eksamen) i gjeldende format.
- **Omskrevet eksempel:** «Hva er Friedmans og Lucas' kriterier for en god modell? Drøft i hvilken grad Norges Banks DSGE-modell og SAM-rammeverket søker å oppfylle dem.»

---

## 4. Sensorens krav

### Gjennomgående metaregler
1. **Sporbar utledning er alt.** «Solutions without traceable outlines … do not earn points» står i hvert eksamenshode (gammelt format). Et riktig sluttsvar uten utledning gir **null**; en riktig oppstilling med regnefeil gir delvis uttelling. Dette er emnets viktigste enkeltregel.
2. **Poeng deles per steg.** H2018-veiledningen viser eksplisitt poengfordeling: «10 poeng bare hvis sluttformelen er korrekt» (stokastisk Euler), «trekk 2,5 poeng hvis én FOC er feil», «trekk 3 poeng hvis én av tre Lagrange-blokker er feil», «3 poeng for riktige lønninger, 2 for korrekt bevis». En kandidat som setter opp Lagrange og FOC-er riktig men bommer på algebraen får mesteparten av poengene.
3. **Euler-ligningen skal utledes, ikke postuleres.** Fra FOC-er ved eliminasjon av multiplikatorene. Ved usikkerhet: hold **forventningsoperatoren** riktig plassert (`E[u'(c₂)]`), ikke utenfor.
4. **Håndter hjørneløsninger eksplisitt.** Ikke bruk interiør-FOC når en ikke-negativitetsbeskrankning binder (`b≥0`, `a₂=0`, lånebeskrankning) — argumentér for hjørnet.
5. **Oppgi tallsvar der oppgaven gir tall,** og begrunn fortegn på deriverte (inntekt vs. substitusjon) framfor å påstå dem.
6. **Sjenerøs sensur på det tvetydige/utenfor pensum.** H2023 B5 (avhengighet av y): «skal graderes sjenerøst» fordi oppgaven ikke nevnte y-avhengigheten. H2022 aksepterer svar der `α>1` fordi grensene ikke var spesifisert. H2021-veiledningen godtar ulike konsistente forutsetninger. Trykkfeil håndteres ved at alle konsistente tolkninger godtas.

### Essay-scoring (Part A, nytt format) — firepunkts-sjekkliste
Sensorveiledningene for H2023–H2025 gir en identisk struktur; full score krever **alle fire**:
1. Forståelse av konsept 1 (Friedman-kriteriene / representativ-agent-svakhetene).
2. Forståelse av konsept 2 (Lucas-kritikken / HANK og heterogene agenter).
3. Anvendelse på den konkrete modellen (NEMO+SAM / empirisk MPC-arbeid) — *hva* modellen er og *om* den oppfyller kriteriene.
4. Velstrukturert, velskrevet tekst som svarer på prompten og **refererer til pensumlitteraturen**.

Merk: veiledningene lister kriteriene, ikke en fasit-tekst — essayet vurderes på innsikt og struktur, ikke reproduksjon.

### Karaktersignaler
- **De siste/vanskeligste deloppgavene er A-differensiatorene:** Jensen-argumentet for likevektsrenta (H2018 C-g, H2020 C-g), golden rule + `∂Css/∂s`-fortegnet (H2023 C5), permanent vs. midlertidig δ-sjokk i Ramsey-fasediagrammet (H2021 A-e/f/g), `1/σ>1`-fortegnsdrøftingen (H2022 A, H2023 B4).
- **Struktur og kobling teller ved topp:** essayet må «respond to the essay prompt»; modelloppgavene belønner at kandidaten ser sammenhengen (f.eks. at `a₂=0` i null-nettotilbud følger av representativ agent).
- **Fullt utledet + riktig tolkning = full score.** Tolkningskravene («Interpret equation (4)», «Explain the intuition») er ikke pynt — de gir egne poeng.

---

## 5. Typiske feil (utledet fra veiledningene og oppgavekonstruksjonen)

1. **Skrive svaret uten utledning** — gir null, uansett hvor riktig svaret er. Den vanligste og dyreste feilen.
2. **Postulere Euler-ligningen** i stedet for å utlede den fra FOC-er ved å eliminere multiplikatorene.
3. **Feilplassere forventningsoperatoren** i stokastisk Euler — `E[u'(c₂)]`, ikke `u'(E[c₂])` (det er nettopp Jensen-poenget).
4. **Bruke interiør-FOC når en beskrankning binder** — glemme hjørneløsningen ved `b≥0` (arv), `a₂=0` (null nettotilbud), eller bindende lånebeskrankning. Da gjelder ikke lenger konsumglatting/Ricardo-indifferens.
5. **Signere en tvetydig renteeffekt** — påstå at `∂c₁/∂(1+r)` har bestemt fortegn uten å drøfte `1/σ` mot 1 (substitusjon vs. inntekt), eller glemme at human-wealth-effekten er null når inntekt kun kommer i periode 1.
6. **Glemme transversalitetsbetingelsen** i Ramsey (den erstatter no-Ponzi og pinner ned saddelbanen).
7. **Blande midlertidig og permanent sjokk** i Ramsey-fasediagrammet — feil retning på pilene, eller å glemme tidsbanene for `w` og `r`.
8. **Påstå at K og Y er konstante i Solow steady state** — det er per arbeider-/per effektiv-arbeider-størrelsene som er konstante; totalt vokser K og Y med `n` (og per arbeider med `g`).
9. **Regne `∂Css/∂s>0` mekanisk** uten å se golden rule-poenget: konsum kan falle av høyere sparerate (man kan spare forbi golden rule).
10. **Feil trygde-betingelse** — glemme populasjonsveksten `(1+n)` i statens PAYG-budsjett, eller sammenligne feil livstidsbudsjett.
11. **Forveksle rental rate og rente** i Solow/Ramsey: `R=r+δ` (leiepris på kapital) mens husholdningens rente er `r=MP_k−δ`.
12. **True/False uten begrunnelse** (gammelt format) — «Don't forget the explanation!»; T/F-svaret alene gir ingen poeng.
13. **Essay som gjengir teori uten å anvende den** på NEMO/SAM/HANK, eller uten å referere til pensumlitteraturen (kriterium 3 og 4 svikter).
14. **Feil ved geometrisk rekke** i investeringsverdi (`V=d/r`) eller PDV-budsjettet (`Σ(1+r)^{−t}=(1+r)/r`).

---

## 6. Modell- og notasjonsapparat

**Hovedfunn:** Notasjonen er stabil og standard (Ljungqvist–Sargent / Romer-tradisjon). Bruk **konsistent moderne notasjon** i boken: `σ`/`θ` for CRRA-krumning, `β` diskonteringsfaktor, `r` rente, `δ` depresiering, `α` kapitalandel, `n` befolkningsvekst, `g` teknologivekst, `s` sparerate. Merk variantene: eldre Ramsey-sett bruker `θ` for CRRA, Solow-sett bruker `σ`; noen sett skriver spareraten `γ`. Faget publiserer korte engelske løsningsforslag — boken bør bruke **engelsk fagterminologi konsekvent** (eksamen er på engelsk) med norske forklaringer.

### Må beherskes aktivt (utlede, tegne, regne)

**1. Intertemporal konsum-/sparemodell (kjerne):**
- `max Σ_{t=0}^∞ βᵗu(cₜ)` s.t. `cₜ+aₜ₊₁=(1+r)aₜ+y`; CRRA `u(c)=(c^{1−σ}−1)/(1−σ)` eller `log c`.
- PDV-budsjett: `Σcₜ/(1+r)ᵗ=(1+r)a₀+Σy/(1+r)ᵗ`. Nyttig sum: `Σ_{t=0}^∞(1+r)^{−t}=(1+r)/r`.
- **Euler:** `u'(cₜ)=β(1+r)u'(cₜ₊₁)` ⇒ CRRA: `cₜ₊₁=[β(1+r)]^{1/σ}cₜ`.
- **PIH (β(1+r)=1):** `cₜ=c=ra+y`.
- To-periode-variant: `c₁+b₁=y`, `c₂=(1+r)b₁`; `c₁=y/(1+(1+r)^{1/σ−1})`.
- Inntekts-/substitusjonsdekomponering; `1/σ` = substitusjonsstyrke.

**2. Solow-modellen:**
- `Kₜ₊₁=sF(Kₜ,Lₜ)+(1−δ)Kₜ`; per arbeider `kₜ₊₁=(1/(1+n))[sf(kₜ)+(1−δ)kₜ]`; effektive arbeidere m/`g`: nevner `(n+g+δ)`.
- Steady state: `K_ss/Y_ss=s/δ` (eller `s/(n+g+δ)`); Cobb-Douglas `k*=(s/(n+g+δ))^{1/(1−α)}`.
- Faktorpriser: `w=∂Y/∂L=(1−α)k^α·A`, `R=∂Y/∂K=αk^{α−1}` (rente `R−δ`).
- Golden rule: `f'(k*)=n+g+δ` ⇒ `s_GR=α`.
- Konvergens (δ=1, Cobb-Douglas): `(yₜ₊₁−yₜ)/yₜ=(s/(1+n))·α·yₜ^{α−1}−1` — vekst avtar med nivå.

**3. Ramsey optimal vekst:**
- `max Σβᵗu(cₜ)`, ressursbeskrankning `kₜ₊₁−kₜ=kₜ^α−δkₜ−cₜ`.
- Euler: `cₜ₊₁/cₜ=[β(1+αkₜ₊₁^{α−1}−δ)]^{1/θ}`.
- Transversalitet: `lim_{t→∞}βᵗcₜ^{−θ}kₜ₊₁=0`.
- Fasediagram: `Δc=0`-loci (vertikal i k* der `1+f'(k)−δ=1/β`), `Δk=0`-loci (`c=f(k)−δk`), saddelbane.

**4. OLG (to-periode):**
- `log(c₁ₜ)+βlog(c₂ₜ₊₁)`; ung sparer `s=[β/(1+β)]wₜ`.
- Kapitalmarked: `Nₜsₜ=Kₜ₊₁` ⇒ `(1+n)kₜ₊₁=[β/(1+β)]wₜ`, `w=(1−α)k^α`.
- Bevegelseslov `kₜ₊₁=[β(1−α)/((1+β)(1+n))]kₜ^α`; steady states `k=0` og `k*`.
- Skatt/transfer: disponibel inntekt driver sparing og k*.

**5. Stokastisk RBC:**
- `U=u(c₁)+βEu(c₂(s₂))`; lineær produksjon `y=A(s)n`; `w(s)=A(s)`.
- Tilstandsvise budsjett; tilstandssortert Lagrange `L=u(c₁)+λ₁[…]+βp[u(c₂G)]+λ₂G[…]+β(1−p)[u(c₂B)]+λ₂B[…]`.
- Stokastisk Euler `u'(c₁)=βE[u'(c₂(s₂))](1+r₂)`.
- Null nettotilbud `a₂=0` ⇒ `c(s)=w(s)`, ingen glatting.
- Jensen: `u'(E[w])≤E[u'(w)]` ⇒ `(1+r₂)β<1` ⇒ `r₂<r_RN=1/β−1`.

**6. Skatt & arbeidstilbud:** `max u(c,l)` s.t. `c=(1−τ)l+Tr`; intratemporal FOC = MRS = `1−τ`; effekt av `τ`/`Tr` via inntekt vs. substitusjon.

**7. Sosial sikkerhet:** overlevelse `p`; PAYG `pb=τy(1+n)`; trygd foretrekkes hviss `(1+n)(1+g)/p>1+r`.

**8. Investeringsteori:** `V₀=Σ(1+r)^{−t}dₜ`; `V=d/r`; firmaets FOC `λₜ=qₜ=1` ⇒ `K*=(α/(r+δ))^{1/(1−α)}`.

**9. Piketty vs. Solow:** `K/Y=s/g` (Piketty, netto) vs. `s/(g+δ)` (Solow, brutto); netto form `Kₜ₊₁=ŝₜŶₜ+Kₜ`, `Ŷ=Y−δK`.

### Må forstås kvalitativt (essay + tolkningskrav)
- **Metodologi:** Friedman (1953) prediksjonskriterium; Lucas-kritikken (1976); DSGE/NEMO (Gerdrup & Nicolaisen 2011); SAM; HANK/heterogene agenter; Solow (1997) «opportunistisk» modellering; empirisk MPC-arbeid.
- Ricardiansk ekvivalens: når holder den (interiør arv/fri lån/lik PDV), når brytes den (lånebeskrankning, endelig levetid).
- Golden rule som normativt referansepunkt («man kan spare for mye»).
- Permanentinntektshypotesen som tolkning av konsumfunksjonen.
- Precautionary saving / risikopremie som forklaring på lav likevektsrente.

### Skal IKKE bygges på
- **Dynamisk programmering / Bellman som regneoppgave** — nevnes i pensum (verdifunksjon, `V(b)` brukes i H2018 B), men aldri VFI-iterasjon på eksamen.
- **Ny-keynesiansk makro / Taylor-regel / pengepolitikk / IS-RR-PK / åpen økonomi / valutakurs** — dette er ECON2310-stoff, aldri testet i 4310.
- **Full aktivaprising (Lucas tree)** — risikofri rente utledes i RBC, men ingen komplett asset-pricing-oppgave.
- **Tungt numerisk/kalibrert arbeid** — alt løses for hånd.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Intertemporal konsum-Euler komplett:** utled Euler fra Lagrange/FOC (to-periode, T-periode og uendelig horisont), løs konsumfunksjonen, dekomponer renteeffekten i inntekt/substitusjon (`1/σ`), og behersk PIH-tilfellet `β(1+r)=1`. **75 % av settene**, kjernen i Part B.
2. **Solow komplett:** bevegelseslov fra oppsett, steady state og `K/Y=s/(n+g+δ)`, Cobb-Douglas-formler, faktorpriser fra grenseprodukter, golden rule (`s_GR=α`), komparativ statikk (`∂Yss/∂s>0`, `∂Css/∂s` tvetydig), konvergens. **63 % av settene**, kjernen i Part C.
3. **Metodologi-essayet:** Friedman/Lucas-kriteriene + Lucas-kritikken, NEMO/SAM, HANK vs. representativ agent, empirisk MPC. **Obligatorisk (1/3) i gjeldende format** — høy avkastning per forberedelsestime.
4. **Lagrange-teknikken som mestringsferdighet:** sette opp Lagrange med riktig antall multiplikatorer, ta FOC-er, eliminere multiplikatorer — brukes i **100 % av modelloppgavene**. Inkludert hjørneløsning-håndtering.

### Nivå 2 — må kunne (roterer jevnlig)
5. **OLG:** sparing, kapitalakkumulasjon, flere steady states, skatt/transfer-effekter, dynasti med arv og hjørneløsning. 3/8.
6. **Ricardiansk ekvivalens:** PDV-rangering av finansieringsmåter, når den holder/brytes (lånebeskrankning, endelig levetid). 3/8.
7. **Stokastisk RBC:** tilstandsvis Euler, null nettotilbud, Jensen → likevektsrente under risikonøytral. 2/8, men tunge oppgaver og fast A-differensiator.
8. **Ramsey fasediagram:** saddelbane, transversalitet, midlertidig vs. permanent δ-sjokk med tidsbaner for `w` og `r`. 1/8, men 100-poengs når den kommer.

### Nivå 3 — bør kjenne til (lavfrekvent / lav dekningskostnad)
9. **Skatt & arbeidstilbud:** inntekts-/substitusjonseffekt, log-nyttens kansellering. 2/8.
10. **Sosial sikkerhet:** PAYG-betingelsen `(1+n)(1+g)/p>1+r`. 2/8.
11. **Investeringsteori/firmaverdi** (H2025) og **Piketty vs. Solow** (H2025) — nye, men enkle sjangre med lav kostnad å dekke; sannsynlig retur.

### Prognose for neste ordinære eksamen (H2026)
Gjeldende format (H2023–2025) er en stabil trippel og videreføres mest sannsynlig:
- **Part A (1/3):** Metodologi-essay — enten Friedman/Lucas/NEMO/SAM-varianten eller Solow-1997/HANK/MPC-varianten. Boken må dekke begge.
- **Part B + Part C (hver 1/3):** to modelloppgaver fra poolen. **Mest sannsynlig kombinasjon: konsum-Euler + Solow** (begge i H2023 og H2024), men med rotasjon inn av investeringsteori, Piketty, OLG eller RBC som «vri»-oppgave (H2025-mønsteret). Sannsynligheten for at *minst én* av {konsum-Euler, Solow} er med, er svært høy.
- **Beredskap:** Ramsey-fasediagrammet og stokastisk RBC har ikke vært i nytt format ennå (2023–2025) — de er de mest sannsynlige «tunge» returkandidatene hvis oppgavesetteren vil øke vanskeligheten. OLG og Ricardo tilsvarende.

**Bokens balansepunkt:** ~40 % av innsatsen på de to kjernene (konsum-Euler + Solow), ~20 % på metodologi-essayet, ~30 % fordelt på OLG/Ricardo/RBC/Ramsey, ~10 % på arbeidstilbud/trygd/investering/Piketty. All trening skal være **utledning fra optimeringsproblem**, ikke gjenkjenning av oppgitte relasjoner.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/ECON4310/`.

**Ordinære eksamenssett lest grundig (8):**
`eksamen/ECON4310-H2018.pdf` … `eksamen/ECON4310-H2025.pdf` (ett sett per år; emnet har kun høsteksamen).

**Sensorveiledninger / løsningsforslag lest grundig (8):**
`sensorveiledning/ECON4310-H2018-sensorveiledning.pdf`, `ECON4310-H2019-losningsforslag.pdf` … `ECON4310-H2025-losningsforslag.pdf`. (H2018 er en «sensorveiledning» med fasit; H2019–H2025 er «løsningsforslag».)

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse + destillat av sensorveiledningene (scratchpad: `fagbeskrivelse-econ4310.md`).

**Sammenligningsgrunnlag:** `docs/hoyskole-boker/econ2310/EKSAMENSANALYSE.md` og `econ1310/` (for progresjonskartleggingen i del 1 — hva 4310 tester utover bachelor-makro).

**Pensumkilder veiledningene og eksamenssettene refererer til** (for bokens kildearbeid, ikke lest her):
- Friedman, M. (1953). *The Methodology of Positive Economics.*
- Lucas, R. E. (1976). *Econometric Policy Evaluation: A Critique.* Carnegie-Rochester Conference Series on Public Policy, 1:19–46.
- Gerdrup, K. R. & Nicolaisen, J. (2011). *On the Purpose of Models — The Norges Bank Experience.* Norges Bank Staff Memo (6).
- Solow, R. M. (1997). *Is There a Core of Usable Macroeconomics We Should All Believe In?* American Economic Review, 87(2):230–232.
- Piketty, T. *Capital in the Twenty-First Century* (annen fundamentale lov, `K/Y=s/g`).
- Standard masterlærebøker i dynamisk makro (Ljungqvist & Sargent; Romer; Barro & Sala-i-Martin) for det formelle apparatet — Solow, Ramsey, OLG, RBC.

**Merknader om kildene:**
- **Formatskifte H2022 → H2023:** eldre sett bruker gjennomregnede Exercise A/B/(C/D) med poengtabell; nyere sett bruker essay + to modelloppgaver, hver 1/3. Analysen dekker begge, og bokens løsningsforslag bør håndtere begge formater — særlig essaydelen, som er ny.
- **Løsningsforslagene er knappe.** Nyere «Solution Proposal»-dokumenter gir FOC-er + sluttsvar, og for essayet en firepunkts-sjekkliste — ikke pedagogiske gjennomganger. Bokens verdi ligger i å fylle utledningsstegene mellom oppsett og svar.
- **Kjente teksttolknings-forbehold:** enkelte matematiske uttrykk (eksponenter, brøker, forventningsoperatorer) kom noe forvrengt ut av PDF-tekstekstraksjonen; alle modelligninger i denne analysen er rekonstruert fra sammenhengen og verifisert mot standard faglig form.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modelligningene er standard faglig notasjon.
