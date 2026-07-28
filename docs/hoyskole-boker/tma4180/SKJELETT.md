# Bokskjelett: TMA4180 Optimering 1 / Optimization 1 (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i kapitlet
> eller i eksplisitt refererte forkunnskaper (flytt teoribiten tidligere ved
> behov). Autoritativ kilde: README «Leserkrav» + `DNA-regnefag.md`. Unntak:
> øvingseksamen-/prøvekapitler følger sin egen arketype (komplett sett først,
> løsninger i collapsibles). Kvotene og innholdskontraktene i dette skjelettet
> er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE
> eksamensarkivet — alt eksamensbelegg som trengs står i dette skjelettet,
> destillert fra `EKSAMENSANALYSE.md` (NTNU-arkivet 2004–kont 2025: 21 lesbare
> sett, hele Grasmair-æraen 2023–2025 lest ord for ord, pluss V2018/V2019 og
> S2015–2020). Alle oppgaver, funksjoner og talleksempler i boka skal være
> NYSKREVNE (se §6). Metodenavn (LICQ, KKT, Slater), teoremer, formler og
> standard fagnotasjon er ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Matematisk presisjon er kritisk (DNA-regnefag «Matematisk sannhetskontroll»).**
> Fortegns-, definitthets-, konveksitets- og «alltid mindre/større enn»-påstander
> parametersjekkes numerisk (python3) i modellens fulle parameterrom FØR de
> skrives ubetinget. Er en påstand betinget, skrives betingelsen ut. Talleksempler
> (gradient=0, Hessian, KKT-punkter, Armijo-skritt) etterregnes begge veier.
> Usikre påstander merkes `(verifiser)`. All matematikk i LaTeX (`$...$`).

## 0. Statusverifisering (§C9 — TMA-serien / matematikkreformen)

**Status per 2026-07-11 (verifisert mot NTNUs emneside `ntnu.no/studier/emner/TMA4180`
og 2026-versjonen):** TMA4180 «Optimering 1 / Optimization 1» (7,5 studiepoeng) er
**AKTIVT.** Emnesiden oppgir **«Undervisningsstart Vår 2027»** med ordinær eksamen
V2027 og kontinuasjon sommer 2027 — ingen nedleggingsvarsel, ingen etterfølgerkode.
Studiepoengreduksjonstabellen lister kun **SIF5030** (7,5 sp reduksjon), som er den
**gamle NTNU-koden** for samme emne (før dagens TMA-kodesystem) — altså en forgjenger,
ikke en etterfølger, og ingen indikasjon på at TMA4180 fases ut. Emnet bygges derfor
som **aktivt fag**, uten etterfølger-profilering.

Kalibreringsforbehold (settes i Del 0): analysen bygger på arkivet 2004–kont 2025, med
full ord-for-ord-dekning av **Grasmair-æraen (V2023–Kont2025)** som gjeldende regime.
Boka prioriterer denne æraen tungt og holder gammel-æra-stoff (variasjonsregning,
simpleks, trust-region) som beredskap. Prosjektoppgaven (30 % av karakteren) ligger
ikke i arkivet; dens innhold er utledet av fasitreferanser og merkes `(verifiser)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4180` |
| Tittel | **TMA4180 Optimering 1 (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4180 Optimering 1». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — regne-/utlednings-/bevisoppgaver med (i hovedsak) entydige fasitsvar; oppgavemønstre gjentas år etter år → boka bygges som målrettet drill mot nettopp disse. Innslag av korte teoribevis (Armijo-eksistens, `∇f→0`, CG-ekvivalens) håndteres som egen bevis-sjanger innenfor regnefag-malen. |
| Antall kapitler | **34** (Del 0: 1 · temadeler 1–9: 27 · eksamenstrening Del 10: 6) |
| Estimert totaltid | **~1 705 min ≈ 28,4 timer** (sum av `estimatedMinutes` under) |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** Den skriftlige delen av TMA4180 (Grasmair-æraen 2023–2025) er
blant de mest forutsigbare settene i hele høyskolearkivet: samme **fem søyler** hvert
år. Karakteren settes som **skriftlig skoleeksamen (70 %, 4 timer) + numerikk-prosjekt
(30 %)**, bokstavkarakter A–F, besvares på engelsk eller norsk, **ingen flervalg** —
alle svar begrunnes. Skriftlig del har en fast mal med **6–7 poengvektede oppgaver
(~100 p)** som hviler på: **(1) ubeskranket optimering** (∇f=0, Hessian, konveksitet,
koersivitet, konvergens); **(2) ett skritt av en linjesøkmetode for hånd** (gradient
eller Newton med backtracking Armijo, eller Wolfe-intervall); **(3) beskranket
optimering** — den store, tunge oppgaven (~30 p): LICQ, tangentkjegle `$T_\Omega$` vs.
kjegle av lineariserte tillatte retninger `$F$`, KKT-punkter, andreordensbetingelser via
den kritiske kjeglen; **(4) dualitet** (Lagrange-dual, Slater/sterk dualitet,
Legendre–Fenchel-konjugat); og **(5) et kort teoribevis**. Læreboken emnet bygger på er
**Nocedal & Wright, *Numerical Optimization***; det deles ut et **formelark** (bl.a.
Legendre–Fenchel-konjugater). Boka er bygd baklengs fra det sensor faktisk premierer:
navngitte metoder brukt eksplisitt, **fullstendig aktiv-sett-gjennomgang** i KKT,
korrekt håndtering av **LICQ-svikt** (skill `$T_\Omega$` fra `$F$`), andreordensbetingelser
på den **kritiske kjeglen** (ikke på hele $\mathbb{R}^d$), og rene teoribevis. Et eget
**prosjekt-/implementeringsspor** dekker de 30 % (gradient-projeksjon,
Barzilai–Borwein-skrittlengder, stoppekriterier, pseudokode).

**Kritisk emneramme (gjelder HELE boka):**

- **Undervisningsspråk er engelsk**, men eksamen besvares på engelsk ELLER norsk. Boka
  skrives på **norsk bokmål** med **engelsk fagterminologi i parentes ved første
  forekomst** (f.eks. «tangentkjegle (tangent cone) $T_\Omega$», «kjegle av lineariserte
  tillatte retninger (linearized feasible directions) $F$»). Studenten skal kjenne begge
  språkdrakter fordi oppgaveteksten er på engelsk.
- **Hjelpemidler på skriftlig del (Grasmair-æraen):** godkjent enkel kalkulator +
  **vedlagt formelark** (bl.a. Legendre–Fenchel-konjugater av standardfunksjoner som
  $\exp$, $t\log t$, normer). Ingen pensumbok. Del 0 etablerer nøyaktig hva formelarket
  gir og hva som må sitte i hodet.
- **Samlet vurdering:** 70 % skriftlig + 30 % prosjekt/mappe. Boka dekker BEGGE: temadeler
  1–9 + eksamenstrening (Del 10.1–10.5) sikter mot skriftlig del; **Del 10.6 er
  prosjektsporet** (numerisk implementering).
- **Æraskifte (styrende for vekting):** variasjonsregning (Euler–Lagrange), simpleks og
  trust-region er BORTE fra ny æra (2018→). Ny æra vektlegger konveksitet/koersivitet,
  tangentkjegle vs. lineariserte retninger, kritisk kjegle, Lagrange-dualitet +
  Slater, Legendre–Fenchel og Pareto. Boka prioriterer ny æra; gammel-æra-stoff
  komprimeres til ett beredskapskapittel (Del 9.4).

**Notasjonskonvensjoner (emnets faste apparat — brukes uendret i alle kapitler):**
$\nabla f$ (gradient), $H_f$ (Hessian), $\langle\cdot,\cdot\rangle$ (indreprodukt);
beskrankninger $c_i(x)\ge 0$ (ulikhet) / $c_i(x)=0$ (likhet); multiplikatorer
$\lambda,\mu\ge 0$; Lagrangefunksjon $L(x,\lambda)=f(x)-\langle\lambda,c(x)\rangle$ med
Hessian $H_L$; tangentkjegle $T_\Omega(x)$; kjegle av lineariserte tillatte retninger
$F(x)$; kritisk kjegle $C(x,\lambda)$; konjugat $f^*(y)=\sup_x\{\langle x,y\rangle-f(x)\}$;
Armijo $f(x+\alpha p)\le f(x)+c_1\alpha\langle\nabla f(x),p\rangle$; kontraksjonsfaktor
$\rho$; sterke Wolfe-betingelser med $c_1,c_2$; nedstigningsretning $\langle\nabla f,p\rangle<0$.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), IKKE frekvens: ubeskranket
teori (∇f=0, Hessian, konveksitet, koersivitet) før linjesøk; linjesøk før beskranket
optimering; LICQ og tangentkjegle før KKT; KKT + andreordensbetingelser før dualitet;
dualitet + Legendre–Fenchel før Pareto; teoribevis og prosjekt til slutt. Frekvensen
styrer *omfanget*: «må beherskes perfekt»-temaene (ubeskranket, konveksitet, KKT/LICQ,
tangentkjegle, andreordensbetingelser, linjesøk, dualitet) får hver sin del med teori-
**og** drillkapittel og høyest kvote; lavfrekvent/beredskapsstoff får ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | perfekt (meta) | Formen (70 % skriftlig + 30 % prosjekt, 4 t, fem søyler, poeng per deloppgave, ingen flervalg), formelarket, temafrekvensene, sensorkravene, kildeforbeholdet, æraskiftet og sjangerkodene (A–N) etableres FØR fagstoffet. Studentens prioriteringsverktøy. |
| 1 | Ubeskranket optimering | 4 | perfekt (100 %) | ∇f=0 + Hessian-klassifisering + koersivitet/globalitet (100 %, P1a) og konveksitet (100 %, P1b) er fundamentet for ALT senere (KKT bygger på ∇f=0; andreordensbetingelser på Hessian; dualitet på konveksitet). Egen del + drillkapittel. |
| 2 | Linjesøk og nedstigningsmetoder | 4 | perfekt (76 %) | Ett skritt av gradient/Newton med backtracking Armijo (eller Wolfe-intervall) er fast P1c/d (76 %); global konvergens ($\nabla f_k\to 0$) og Newtons rate (57 %/33 %). Egen del + drillkapittel + bevis. |
| 3 | Beskranket optimering: LICQ og tangentkjegler | 3 | perfekt (90 %/71 %) | LICQ (90 %) + tangentkjegle $T_\Omega$ vs. kjegle av lineariserte retninger $F$ (71 %, fast i ny æra), inkl. **korrekt LICQ-svikt-håndtering** (topp-skille). Bygger opp P2a/P2b. Egen del + drillkapittel. |
| 4 | KKT og andreordensbetingelser | 3 | perfekt (100 %/81 %) | **Signaturoppgaven** P2c (~15–30 p): KKT-punkter med full aktiv-sett-gjennomgang (100 %) + andreordensbetingelser via kritisk kjegle (81 %) + globalitet. Den tyngste, mest premierte delen. Egen del + drillkapittel. |
| 5 | Konvekse mengder, funksjoner og eksistens | 2 | perfekt (100 %/57 %) | Konvekse mengder/funksjoner, projeksjon på konveks mengde, koersivitet ↔ Weierstrass (eksistens, 57 %). Konsoliderer konveksitetsverktøyet dualitet og Pareto trenger. |
| 6 | Lagrange-dualitet | 3 | perfekt (67 %, 5/5 ny æra) | Lagrange-dual $q(\lambda)=\inf_x L$, svak/sterk dualitet, **Slater**; komplementær slakkhet. Fast i ny æra (P3-type). Egen del + drillkapittel. |
| 7 | Legendre–Fenchel-konjugat og infimal-konvolusjon | 2 | kunne (29 %, 4/5 ny æra) | Konjugatet $f^*$, $f^{**}=f$, infimal-konvolusjon ($h^*=f^*+g^*$), konveksitet av marginalfunksjon. Karakterskiller; brukes aktivt i dualberegninger (Del 6). |
| 8 | Pareto- og flerkriterie-optimering | 1 | kunne (29 %, 4/5 ny æra) | Pareto-optimalitet, vektede sum-problem for (strengt) konvekse mål, invarians under monotone transformasjoner. Ny og økende (P-type, kort selvstendig oppgave). |
| 9 | Videre metoder og beredskap | 4 | kunne/kjenne | Teoribevis-verktøykasse (Armijo-eksistens, $\nabla f\to 0$, CG-ekvivalens); konjugerte gradienter; stor-skala-metodevalg (Newton+Thomas, gradient-projeksjon); **beredskap** (trust-region, kvasi-Newton/BFGS, LP-dualitet/simpleks, variasjonsregning, straffemetoder) i ett kompakt kapittel. |
| 10 | Eksamenstrening + prosjektspor | 6 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–N) + **3 komplette øvingseksamener** (skriftlig del) + kald bank + **prosjektsporet** (numerisk implementering, gradient-projeksjon, Barzilai–Borwein, 30 %). |

Rasjonale: de sju garantifaste temaene (ubeskranket, konveksitet, KKT/LICQ, tangentkjegle,
andreordensbetingelser, linjesøk, dualitet) får hver sin del med drillkapittel og høyest
kvote; Legendre–Fenchel og Pareto får hver sin (mindre) del fordi de er faste i ny æra men
lettere; gammel-æra- og beredskapsstoff komprimeres til Del 9. Prosjektsporet får eget
kapittel fordi det bærer 30 % av karakteren.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Ubeskranket optimering |
| 2 | Linjesøk og nedstigningsmetoder |
| 3 | Beskranket optimering: LICQ og tangentkjegler |
| 4 | KKT og andreordensbetingelser |
| 5 | Konvekse mengder, funksjoner og eksistens |
| 6 | Lagrange-dualitet |
| 7 | Legendre–Fenchel-konjugat og infimal-konvolusjon |
| 8 | Pareto- og flerkriterie-optimering |
| 9 | Videre metoder og beredskap |
| 10 | Eksamenstrening og prosjektspor |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Ubeskranket: finn alle lokale/globale minima (∇f=0, Hessian-klassifisering,
koersivitet vs. ubegrenset nedad; P1a) · **B** Avgjør konveksitet (Hessian PSD overalt;
motbevis via ett indefinit punkt; P1b) · **C** Ett skritt av linjesøkmetode for hånd
(gradient $p=-\nabla f$ eller Newton $p=-H_f^{-1}\nabla f$ + backtracking Armijo; P1c/d) ·
**D** Wolfe-intervall (for hvilke $\alpha$ holder sterke Wolfe-betingelser) · **E**
Konvergensresonnement (koersivitet+Armijo $\Rightarrow \nabla f_k\to 0$; Newton lineær vs.
kvadratisk) · **F** LICQ i alle punkter (P2a) · **G** Tangentkjegle $T_\Omega$ vs. kjegle
av lineariserte tillatte retninger $F$, inkl. LICQ-svikt (P2b) · **H** KKT-punkter med full
aktiv-sett-gjennomgang (P2c) · **I** Andreordensbetingelser via kritisk kjegle + globalitet
(P2c) · **J** Lagrange-dualitet (dual, svak/sterk, Slater, komplementær slakkhet) · **K**
Legendre–Fenchel-konjugat og infimal-konvolusjon · **L** Konveksitet av marginalfunksjon
$g(y)=\inf\{f(x):Ax=y\}$ · **M** Pareto-/flerkriterie-optimering (vektede sum-problem) ·
**N** Korte teoribevis (Armijo-eksistens; $\nabla f_k\to 0$; CG-ekvivalens ved eksakt
linjesøk). *(Beredskap, lavt vektet: trust-region, LP-simpleks, variasjonsregning,
straffemetoder — Del 9.4.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Begrunn alle svar med nok detaljer** så det klart framgår hvilke metoder/resultater
   som er brukt. Bar fasit gir ikke full uttelling.
2. **Metode-/teoremnavn bæres eksplisitt:** «LICQ», «KKT-betingelsene», «Slaters
   kvalifikasjonsbetingelse», «sterk dualitet», «andreordens tilstrekkelig betingelse»,
   «kritisk kjegle», «Legendre–Fenchel-konjugat», «Armijo-betingelsen», «koersiv».
3. **Systematisk aktiv-sett-gjennomgang i KKT:** gå metodisk gjennom ALLE kombinasjoner av
   aktive beskrankninger; forkast eksplisitt punkt med negative multiplikatorer / brutte
   beskrankninger. Å hoppe over et aktiv-sett trekker ned (feilkode #2).
4. **Skill $T_\Omega$ fra $F$:** ved LICQ-svikt må studenten IKKE anta $T_\Omega=F$; vis
   inklusjonen $T_\Omega\subseteq F$ og bestem $T_\Omega$ direkte (feilkode #1).
5. **Andreordensbetingelser krever den kritiske kjeglen $C$:** det holder ikke å sjekke
   $H_L$ på hele $\mathbb{R}^d$. Merk at *tilstrekkelig* betingelse ikke krever LICQ.
6. **Poengvekting er eksplisitt** (delpunkt-poeng oppgitt, sum ~100); deloppgaver er ofte
   kjedet (del b bruker konklusjonen fra a).
7. **Flere metoder honoreres:** fasitene viser ofte 2–3 alternative bevis (f.eks.
   marginalfunksjon-konveksitet via dualitet ELLER direkte ε-argument). Alle premieres.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Anta $T_\Omega=F$ når LICQ svikter. · **#2** Ufullstendig aktiv-sett-gjennomgang i
KKT (glemt kombinasjon, eller ikke forkastet punkt med $\lambda<0$). · **#3**
Andreordensbetingelse på feil mengde (sjekker $H_L$ på hele $\mathbb{R}^d$ i stedet for på
kritisk kjegle $C$). · **#4** Konveksitet konkludert fra ETT punkt (PSD overalt kreves;
motbevis krever bare ett indefinit punkt). · **#5** Glemt globalitetsanalyse (stopper ved
lokale minima uten koersivitet vs. ubegrenset nedad). · **#6** Feil tegn i
Lagrangefunksjonen/dualen ($\lambda$ for $\ge$- vs. $\le$-beskrankninger → feil
fortegnsbetingelse). · **#7** Armijo-regnefeil (feil $\langle\nabla f,p\rangle$, glemt
kontraksjon $\alpha\leftarrow\rho\alpha$, feiltolket nedgang). · **#8** Newton uten positiv
definit Hessian (bruker $-H^{-1}\nabla f$ uten å sjekke PD; venter kvadratisk konvergens ved
singulær Hessian). · **#9** Koersivitet forvekslet med konveksitet (uavhengige egenskaper:
koersivitet gir eksistens, konveksitet gir at kritisk punkt er globalt). · **#10** Feil
konjugat / glemt domenerestriksjon ($\exp^*(s)=s\log s-s$ kun for $s>0$). · **#11** Pareto
uten strengt-konveks-forutsetning (feil bruk av vektet-sum-karakteriseringen). · **#12**
Tidsfelle: P2 (~30 p) stjeler tid fra de korte, «billige» teoribevisene.

### Kapittel-DNA (teorikapittel) og drillkapittel

Boka bruker to kapittel-DNA-varianter fra `DNA-regnefag.md`:

- **Teorikapittel (A):** `tip` Eksamensvinkel → `text` Forkunnskaper (+ kryssbok-lenker;
  «Sist du var her»-oppfrisking i sene kapitler) → `text` Motivasjon → `definition`/`theorem`
  (emnets notasjon; definisjon åpner med ord, formel etter) → `text` Utledning med
  intuisjon (der eksamen krever aktiv utledning/bevis) → `example` ×2–4 (siste på
  eksamensnivå) → `warning` Typiske feil (feilkodene) → `exercise` ×6–12 (stigende, alle med
  `solution`+`hints`) → `collapsible` Symbol- og formelliste (SIST, oppslagsnotis) +
  Repetisjonsoppgaver. Blokkene 3–7 veksler i **læringsløkker** (teori → eksempel → oppgave)
  gjennom kapitlet.
- **Drillkapittel (B):** `tip` Eksamensvinkel (sjangervarianter) → `text` Forkunnskaper +
  Løsningsoppskrift (algoritmisk, nummererte trinn) → `example` gjennomregnet eksamenscase med
  sensor-margnotater → `warning` Typiske feil → `exercise` ×8–15 varianter på eksamensnivå.

**Bevis-sjanger (N):** teoribevis-oppgaver (Armijo-eksistens, $\nabla f_k\to 0$,
CG-ekvivalens) skrives med utledning steg for steg og en «Intuisjon:»-linje etter hvert
steg, og modellsvaret vises som en ren, korrekt A-besvarelse (ingen meta-fasit).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (per 2004–kont 2025-arkivet, 21
> lesbare sett; C = Grasmair-æraen 2023–2025, 5 sett) + sjangerkoder (A–N) +
> prioritetsklasse (perfekt/kunne/kjenne/meta). **Innholdskontrakt** = definisjoner/
> teoremer/utledninger som SKAL med (i emnets notasjon; skill mellom «kunne utlede» og
> «kun bruke»). **Oppgavesjangre** kapitlet driller, med omskrevet mønstereksempel.
> **Typiske feil** = feilkodene. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4180
**id:** `tma4180-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (Del 0-pakken).
- **Description:** Eksamensformen (70 % skriftlig 4 t + 30 % prosjekt, bokstavkarakter, ingen
  flervalg, engelsk oppgavetekst / svar på norsk eller engelsk, kalkulator + formelark), de
  fem søylene, temafrekvensene, sensorkravene, feilkoderegisteret, æraskiftet og
  kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2004–kont 2025). Skal formidle: (a)
  **formen** — skriftlig del 4 t (09–13), 6–7 poengvektede oppgaver (~100 p), samlet
  vurdering med prosjekt (30 %); (b) **de fem søylene** — ubeskranket (100 %),
  linjesøk-skritt (76 %), beskranket P2 med LICQ/$T_\Omega$/$F$/KKT/2.orden (den store,
  ~30 p), dualitet (5/5 ny æra), teoribevis; (c) **temafrekvenstabellen** (analysen §2); (d)
  **sensorkravene** 1–7 (§2); (e) **feilkoderegisteret** #1–#12; (f) **formelarket** — hva
  det gir (Legendre–Fenchel-konjugater av $\exp$, $t\log t$, normer) og hva som må sitte; (g)
  **æraskiftet** — variasjonsregning/simpleks/trust-region borte fra ny æra, ny æra vektlegger
  konveksitet/tangentkjegle/dualitet/Fenchel/Pareto; (h) **kildeforbeholdet** — full
  ord-for-ord-dekning av Grasmair-æraen, skann-hull 2005/2009/2014-fasit, prosjektoppgaven
  ikke i arkivet `(verifiser)`. Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, DNA-regnefag):** (a) **«Slik leser du denne boka»-boks**
  (`text`/`tip`, IKKE `definition`): karakterskala A–F (og at C er en god, vanlig karakter),
  kompakt liste over sjangerkodene A–N i klarspråk, at feil har et samlet register (#1–#12),
  og en innramming av tunge symboler leseren møter senere ($T_\Omega$, $F$, $C$, $f^*$, $H_L$)
  med «du trenger ikke forstå disse ennå». (b) **Formel-minimum-side** (`collapsible`,
  printbart oppslagskort): de uunngåelige tingene som må sitte utenat — Armijo-betingelsen,
  KKT-systemet, definisjonen av $F$, kritisk kjegle, dual $q(\lambda)=\inf_x L$, Slater — hver
  med én ordlinje, + beskjed om at Legendre–Fenchel-konjugater slås opp på formelarket. (c)
  **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge + timeanslag fra
  `estimatedMinutes`), presiser at anslagene er LESEtid (skriv ×1,5 for håndregning). (d)
  **Kildenote** (semestre/år analysen bygger på + forbehold). (e) **Prosedyre-/sjangerkort på
  én side** (sjanger → én linjes oppskrift → tidsbudsjett → vanligste feil). (f) **Deltidsrute**
  (10–12 uker à ~8 t) + øvingseksamener fordelt på flere økter. (g) **«Lese mye, skrive
  lite»-boks**. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «gitt 4-timers mal med
  6–7 oppgaver — sett opp tidsbudsjett og rekkefølge»; «avgjør av en oppgavetekst om den
  krever et bevis (sjanger N), et regnesteg (C) eller en aktiv-sett-gjennomgang (H)».
- **Typiske feil:** Metafeilene: droppe begrunnelse (sensorkrav 1); tro at gammel-æra-stoff
  (variasjonsregning/simpleks) fortsatt er kjernepensum (les æraskiftet); glemme
  prosjektsporet (30 %); ikke bruke formelarket riktig (#10).
- **Kvote:** 20 quiz / 16 flashcards (formfakta, søylene, temafrekvens, sensorkrav,
  sjangerkoder A–N, feilkoder #1–#12, formelark, æraskifte).

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 10).

### Del 1 — Ubeskranket optimering *(prioritet: PERFEKT — 100 %, P1a/b)*

#### Kapittel 1.1: Kritiske punkter og Hessian-klassifisering
**id:** `tma4180-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-0-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Førsteordensbetingelsen $\nabla f(x)=0$, andreordensbetingelser via Hessian
  (positiv definit → strengt lokalt min; indefinit → sadelpunkt; halvdefinit → uavklart), og
  algoritmen for å finne og klassifisere alle kritiske punkter til $f:\mathbb{R}^n\to\mathbb{R}$.
- **Eksamensbelegg:** Sjanger A, 100 % (21/21), alltid P1a. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.1; flervariabel kalkulus (gradient, Hessian) —
  [Flervariabel kalkulus](/tma4101/tma4101-1-1) `(verifiser lenke)`, lineær algebra
  (egenverdier, definitthet) [Lineær algebra](/tma4110/tma4110-1-1) `(verifiser lenke)`.
- **Innholdskontrakt:** `definition` kritisk/stasjonært punkt, lokalt/globalt min; `theorem`
  førsteordens nødvendig betingelse ($\nabla f=0$ i indre min); `theorem` andreordens
  nødvendig ($H_f$ PSD) og tilstrekkelig ($H_f$ PD → strengt lokalt min). Definitthet av 2×2/
  3×3 Hessian via ledende hovedminorer OG egenverdier (begge må vises). Aktiv utledning: at
  $\nabla f=0$ i indre lokalt min (Taylor). **Notasjon:** $\nabla f$, $H_f$.
- **Oppgavesjangre:** A — «Finn alle kritiske punkter og klassifiser dem» (nyskrevet 2-var
  polynom). Mønstereksempel: $f(x,y)=x^3+7x^2-2xy+y^2+3x+6y$ → to kritiske punkt: $(-1,-4)$
  strengt lokalt min ($H_f=\begin{psmallmatrix}8&-2\\-2&2\end{psmallmatrix}$, det $=12>0$),
  $(-3,-6)$ sadelpunkt (det $=-12<0$). *(Talleksempel etterregnet.)*
- **Typiske feil:** #4 (konkludere fra ett punkt), regnefeil i $\nabla f=0$, glemme
  halvdefinit-tilfellet (uavklart, ikke automatisk min).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.2: Konveksitet av funksjoner
**id:** `tma4180-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-1-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Konvekse funksjoner via Hessian: $f$ konveks $\iff$ $H_f$ positiv
  **semi**definit i ALLE punkter; strengt konveks; hvordan man beviser eller motbeviser
  konveksitet, og hvorfor konveksitet gjør et kritisk punkt til globalt min.
- **Eksamensbelegg:** Sjanger B, 100 % (21/21), alltid P1b (bygger ofte på P1a). Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` konveks funksjon (sekant over graf), strengt konveks;
  `theorem` førsteordens karakterisering ($f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle$),
  andreordens karakterisering ($H_f$ PSD overalt); `theorem` konveks + $\nabla f(x^*)=0$
  $\Rightarrow$ $x^*$ globalt min. **Kritisk poeng (sensorkrav):** motbevis krever bare ETT
  indefinit punkt (raskest: ett diagonalledd blir negativt); konveksitet krever PSD OVERALT.
  Aktiv utledning: at et lokalt min av konveks $f$ er globalt.
- **Oppgavesjangre:** B — «Er $f$ konveks?» (nyskrevet; ofte samme $f$ som A-oppgaven). Vis
  enten $H_f$ PSD overalt (positive diagonalledd + ikke-negativ determinant) eller motbevis
  med ett punkt.
- **Typiske feil:** #4 (PSD i ett punkt ≠ konveks), #9 (koersivitet forvekslet med
  konveksitet — uavhengige), regnefeil i determinanttegn.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.3: Koersivitet, globalitet og eksistens
**id:** `tma4180-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-1-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Koersivitet ($f(x)\to+\infty$ når $\|x\|\to\infty$) → begrensede
  nivåmengder → globalt min eksisterer (Weierstrass); vs. **ubegrenset nedad** (finn en kurve
  $f(x,\varphi(x))\to-\infty$) → intet globalt min. Skillet koersivitet/konveksitet.
- **Eksamensbelegg:** Del av A (globalitetsanalysen i P1a); koersivitet/eksistens 57 %
  (12/21), fast i ny æra. Prioritet: perfekt (avslutter P1a).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` koersiv funksjon, nivåmengde; `theorem` (Weierstrass)
  kontinuerlig + koersiv → globalt min eksisterer; strategi «skriv $f$ som sum av kvadrater/
  koersive ledd» vs. «finn nedad-ubegrenset kurve». **Notasjon:** nivåmengde
  $\{x:f(x)\le c\}$. Aktiv utledning: koersiv → begrensede nivåmengder.
- **Oppgavesjangre:** A (globalitet) — «Har $f$ globalt min?». Mønstereksempel (koersiv):
  $f(x,y)=(x^2-y)^2+(y+2)^2+2x^2-7$ → koersiv, unikt kritisk punkt $(0,-1)$, globalt min
  $f=-5$. Mønstereksempel (ubegrenset nedad): $f(x,y)=x^3+7x^2-\dots$ (fra 1.1) → langs
  $x\to-\infty$ blir $f\to-\infty$, intet globalt min. *(Begge talleksempler etterregnet.)*
- **Typiske feil:** #5 (glemt globalitetsanalyse), #9 (koersivitet ↔ konveksitet forvekslet),
  anta at unikt lokalt min alltid er globalt (uten koersivitet).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.4: Drill — ubeskranket optimering (A/B)
**id:** `tma4180-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-1-3`

- **Kapitteltype:** drillkapittel (B).
- **Description:** Samlet drill av P1a+P1b-sekvensen: finn kritiske punkter → klassifiser →
  avgjør konveksitet → avgjør globalitet, i én sammenhengende arbeidsflyt slik P1 er strukturert.
- **Eksamensbelegg:** Sjanger A+B, 100 %. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` Løsningsoppskrift (1: $\nabla f=0$, løs systemet ved å
  eliminere; 2: $H_f$ i hvert punkt, klassifiser; 3: konveksitet — PSD overalt?; 4: globalitet
  — koersiv eller ubegrenset nedad?). `example` gjennomregnet eksamenscase med
  sensor-margnotater.
- **Oppgavesjangre:** 8–15 varianter (nyskrevne 2-var funksjoner) på eksamensnivå, inkl. minst
  én med sadelpunkt, én koersiv med unikt globalt min, én ubegrenset nedad.
- **Typiske feil:** #4, #5, #9; algebrafeil ved eliminasjon i $\nabla f=0$.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A kritiske punkter + Hessian-klassifisering · 1.B
konveksitet (bevis + motbevis) · 1.C koersivitet + globalitet · 1.D samlet P1-prøve på
eksamensnivå).

### Del 2 — Linjesøk og nedstigningsmetoder *(prioritet: PERFEKT — 76 %, P1c/d)*

#### Kapittel 2.1: Nedstigningsretninger og Armijo-betingelsen
**id:** `tma4180-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-1-4`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Nedstigningsretning ($\langle\nabla f,p\rangle<0$), Armijo-betingelsen
  (tilstrekkelig nedgang) og backtracking (kontraksjon $\alpha\leftarrow\rho\alpha$) — hvordan
  man utfører ETT skritt av gradientmetoden ($p=-\nabla f$) med backtracking Armijo for hånd.
- **Eksamensbelegg:** Sjanger C, 76 % (16/21), fast P1c i ny æra. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (gradient); «Sist du var her»: vis $\nabla f$-formelen
  og at $p=-\nabla f$ er nedstigning. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` nedstigningsretning; søkeretning $p$; skrittlengde
  $\alpha$; `definition` Armijo-betingelsen $f(x+\alpha p)\le f(x)+c_1\alpha\langle\nabla
  f(x),p\rangle$; backtracking-algoritmen (start $\hat\alpha$, test Armijo, ellers
  $\alpha\leftarrow\rho\alpha$, gjenta). **Notasjon:** $c_1$, $\rho$, $\hat\alpha$. Aktiv
  utledning: hvorfor $p=-\nabla f$ gir steepest descent.
- **Oppgavesjangre:** C — «Utfør ett skritt av gradientmetoden med backtracking Armijo fra
  $x_0$ med gitt $\hat\alpha,c_1,\rho$». Mønstereksempel: fra $(0,0)$ med $\hat\alpha=1$,
  $c_1=0.1$, $\rho=0.25$ — Armijo feiler for $\alpha=1$, godtas for $\alpha=1/4$ (nyskrevet
  $f$; regn konkrete tallverdier steg for steg).
- **Typiske feil:** #7 (feil $\langle\nabla f,p\rangle$, glemt kontraksjon, feiltolket
  nedgang).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 2.2: Newtons metode og Wolfe-betingelsene
**id:** `tma4180-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Newton-skrittet $p=-H_f(x_0)^{-1}\nabla f(x_0)$ (2×2-invers eksplisitt), når
  det er nedstigning (PD Hessian), og de sterke Wolfe-betingelsene (tilstrekkelig nedgang +
  krumning) — inkludert «for hvilke $\alpha$ holder Wolfe».
- **Eksamensbelegg:** Sjanger C (Newton-variant) + D (Wolfe-intervall), del av 76 % P1c/d;
  Newton 33 % (7/21). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1, 1.1 (Hessian, definitthet). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `theorem` Newton-retning $p=-H_f^{-1}\nabla f$; nedstigning krever
  $H_f$ PD (ellers ikke nedstigning — #8); 2×2-invers
  $\begin{psmallmatrix}a&b\\c&d\end{psmallmatrix}^{-1}=\frac{1}{ad-bc}\begin{psmallmatrix}d&-b\\-c&a\end{psmallmatrix}$;
  `definition` sterke Wolfe-betingelser (Armijo $c_1$ + krumning $|\langle\nabla
  f(x_0+\alpha p),p\rangle|\le c_2|\langle\nabla f(x_0),p\rangle|$, $0<c_1<c_2<1$). **Notasjon:**
  $c_2$.
- **Oppgavesjangre:** C — «Ett Newton-skritt fra $x_0$» (regn 2×2-inversen). D — «For hvilke
  $\alpha>0$ holder de sterke Wolfe-betingelsene?» → gir et intervall (nyskrevet $f$; regn
  begge grenser nøye). **Parametersjekk-krav ved bygging:** Wolfe-intervallgrensene etterregnes
  numerisk for det valgte $f$; oppgi $c_1,c_2$ eksplisitt i oppgaveteksten.
- **Typiske feil:** #8 (Newton uten PD Hessian), regnefeil i 2×2-invers, forveksle $c_1$/$c_2$
  eller retning på krumningskravet.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 2.3: Global konvergens og konvergensrater
**id:** `tma4180-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-2-2`

- **Kapitteltype:** teorikapittel (perfekt) med bevis-sjanger (N).
- **Description:** Global konvergens av gradientmetoden med Armijo ($\nabla f_k\to 0$ når $f$
  koersiv og glatt); Newtons konvergensrate (kvadratisk ved PD ikke-singulær Hessian, lineær
  ved singulær); akkumulasjonspunkter er kritiske.
- **Eksamensbelegg:** Sjanger E + N, 57 % (12/21). Prioritet: perfekt (karakterskille).
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2, 1.3 (koersivitet). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `theorem` (global konvergens) koersiv+glatt+Armijo → $\nabla f_k\to
  0$, hvert akkumulasjonspunkt kritisk; unikt kritisk punkt (globalt min) → hele følgen
  konvergerer dit; `theorem` Newton kvadratisk vs. lineær rate. **Aktiv bevis (N):**
  $\nabla f_k\to 0$ via teleskopsum av funksjonsnedgang (skrittlengder $\alpha_k\ge\varepsilon>0$).
- **Oppgavesjangre:** E — «Argumenter for at gradientmetoden konvergerer til globalt min».
  N — «Vis at $\nabla f_k\to 0$» (teleskopsum). Modellsvar som ren A-besvarelse.
- **Typiske feil:** #8 (kvadratisk rate ved singulær Hessian), blande akkumulasjonspunkt-
  argument med konvergens av hele følgen, glemme $f$ begrenset nedad-forutsetning.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 2.4: Drill — ett linjesøkskritt for hånd (C/D)
**id:** `tma4180-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-2-3`

- **Kapitteltype:** drillkapittel (B).
- **Description:** Ren regnedrill av det faste P1c/d-skrittet: gradient- eller Newton-retning →
  backtracking Armijo eller Wolfe-intervall, med korrekte tallverdier.
- **Eksamensbelegg:** Sjanger C+D, 76 %. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.3. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` Løsningsoppskrift (1: velg retning $p$; 2: sjekk nedstigning; 3:
  test Armijo ved $\hat\alpha$; 4: kontraher til den holder; ELLER: sett opp Wolfe-ulikhetene
  og løs for $\alpha$-intervall). `example` gjennomregnet case med margnotater om delpoeng.
- **Oppgavesjangre:** 8–15 varianter (nyskrevne $f$, $x_0$, $\hat\alpha,c_1,c_2,\rho$): rene
  Armijo-skritt, rene Newton-skritt, Wolfe-intervall. **Alle tallsvar etterregnet numerisk.**
- **Typiske feil:** #7, #8; regnefeil i $\langle\nabla f,p\rangle$.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A gradient + Armijo-skritt · 2.B Newton-skritt + Wolfe-
intervall · 2.C konvergens + $\nabla f\to 0$-bevis · 2.D samlet linjesøk-prøve på eksamensnivå).

### Del 3 — Beskranket optimering: LICQ og tangentkjegler *(prioritet: PERFEKT — 90 %/71 %, P2a/b)*

#### Kapittel 3.1: Tillatt mengde, aktive beskrankninger og LICQ
**id:** `tma4180-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-1-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Tillatt mengde $\Omega$ gitt ved $c_i(x)\ge 0$ / $c_i(x)=0$; aktive
  beskrankninger; kvalifikasjonsbetingelsen LICQ (gradientene til de aktive beskrankningene er
  lineært uavhengige) og hvor den svikter.
- **Eksamensbelegg:** Sjanger F, 90 % (19/21), fast P2a. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (gradient), lineær algebra (lineær uavhengighet)
  [Lineær algebra](/tma4110/tma4110-1-1) `(verifiser lenke)`. `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` tillatt mengde $\Omega$, aktiv/inaktiv beskrankning,
  aktiv-sett $\mathcal{A}(x)$; `definition` LICQ (linear independence constraint
  qualification): $\{\nabla c_i(x)\}_{i\in\mathcal{A}(x)}$ lineært uavhengige. Strategi: (i)
  ingen/én aktiv → sjekk $\nabla c_i\ne 0$; (ii) flere aktive → sjekk hver kombinasjon. LICQ
  svikter typisk der $\nabla c_i=0$ eller der for mange beskrankninger er aktive samtidig.
  **Notasjon:** $c_i$, $\mathcal{A}(x)$.
- **Oppgavesjangre:** F — «I hvilke punkter holder LICQ?» (nyskrevet $\Omega$ med 2–3
  beskrankninger). Mønstereksempel: $\Omega$ gitt ved $(y-x^2)(x-y)^2\ge 0$ og $2-x^2-y^2\ge
  0$; LICQ svikter i $(0,0)$ fordi gradienten til den første beskrankningen er null der.
- **Typiske feil:** glemme et punkt der flere beskrankninger er aktive; sjekke LICQ på
  inaktive beskrankninger; overse $\nabla c_i=0$-punkter.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.2: Tangentkjegle og kjegle av lineariserte tillatte retninger
**id:** `tma4180-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4180-3-1`

- **Kapitteltype:** teorikapittel (perfekt — topp-skille).
- **Description:** Tangentkjeglen $T_\Omega(x)$ (geometrisk, via følger $z_k\to x$) og kjeglen
  av lineariserte tillatte retninger $F(x)$ (algebraisk, via $\langle\nabla c_i,p\rangle$); at
  $T_\Omega=F$ under LICQ, men bare $T_\Omega\subseteq F$ ved LICQ-svikt — da må $T_\Omega$
  bestemmes DIREKTE.
- **Eksamensbelegg:** Sjanger G, 71 % (15/21), fast P2b i ny æra. **Den hyppigste topp-
  feilkilden (#1).** Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` tangentkjegle $T_\Omega(x)$ (grenser av tillatte følge-
  retninger); `definition` $F(x)=\{p:\langle\nabla c_i(x),p\rangle\ge 0\ \forall i\text{ aktiv
  ulikhet},\ =0\ \forall i\text{ likhet}\}$; `theorem` LICQ $\Rightarrow T_\Omega=F$; generelt
  $T_\Omega\subseteq F$. **Aktiv utledning:** ved LICQ-svikt — bestem $T_\Omega$ ved å studere
  $\Omega$ lokalt (del i $\Omega_1\cup\Omega_2$, ta union av tangentkjegler, eller finn
  konkrete følger). **Notasjon:** $T_\Omega$, $F$.
- **Oppgavesjangre:** G — «Bestem $T_\Omega$ og $F$ i gitte punkter». Mønstereksempel: samme
  $\Omega$ som 3.1 i $(0,0)$ — LICQ svikter, $\Omega$ lokalt en parabel forent med en linje,
  $T_\Omega(0,0)=\{q\ge 0\}\cup\{p=q\}$ mens $F$ er større; vis begge inklusjoner. `(verifiser)`
- **Typiske feil:** #1 (anta $T_\Omega=F$ ved LICQ-svikt), regne $F$ med feil ulikhetsretning,
  glemme likhets-beskrankningenes $=0$-krav.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 3.3: Drill — LICQ og tangentkjegler (F/G)
**id:** `tma4180-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-3-2`

- **Kapitteltype:** drillkapittel (B).
- **Description:** Drill av P2a+P2b: for hvert oppgitt punkt — aktiv-sett, LICQ, $F$, og
  $T_\Omega$ (direkte ved LICQ-svikt), inkludert minst ett svikt-punkt per oppgave slik
  eksamen alltid gjør.
- **Eksamensbelegg:** Sjanger F+G, 90 %/71 %. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` Løsningsoppskrift (1: aktiv-sett i punktet; 2: LICQ?; 3: skriv
  $F$; 4: hvis LICQ holder → $T_\Omega=F$, ellers bestem $T_\Omega$ direkte og vis
  $T_\Omega\subseteq F$). `example` gjennomregnet case med LICQ-svikt og sensor-margnotater.
- **Oppgavesjangre:** 8–15 varianter (nyskrevne $\Omega$), hver med minst ett svikt-punkt.
- **Typiske feil:** #1; feil aktiv-sett; feil kjegle-beskrivelse.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A aktiv-sett + LICQ · 3.B $F$ (kjegle av lineariserte
retninger) · 3.C $T_\Omega$ ved LICQ-svikt · 3.D samlet P2a/b-prøve på eksamensnivå).

### Del 4 — KKT og andreordensbetingelser *(prioritet: PERFEKT — 100 %/81 %, P2c signaturoppgave)*

#### Kapittel 4.1: KKT-betingelsene og aktiv-sett-gjennomgang
**id:** `tma4180-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4180-3-3`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Lagrangefunksjonen $L(x,\lambda)=f(x)-\langle\lambda,c(x)\rangle$ og
  KKT-betingelsene (stasjonaritet, primal/dual tillatthet, komplementaritet); den systematiske
  gjennomgangen av ALLE aktiv-sett for å finne alle KKT-punkter.
- **Eksamensbelegg:** Sjanger H, 100 % (21/21), kjernen i P2c (~15 p). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3 (aktiv-sett, LICQ). «Sist du var her»: vis aktiv-
  sett-definisjonen og LICQ. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` Lagrangefunksjon $L$, multiplikatorer $\lambda\ge 0$;
  `theorem` KKT-betingelsene: (i) stasjonaritet $\nabla_x L=0$; (ii) primal tillatthet
  $c_i(x)\ge 0$ / $=0$; (iii) dual tillatthet $\lambda_i\ge 0$ (ulikhet); (iv) komplementaritet
  $\lambda_i c_i(x)=0$. **Metode:** velg et aktiv-sett → løs $(x,\lambda)$ → forkast hvis
  $\lambda_i<0$ eller en beskrankning brytes; gjenta for ALLE aktiv-sett. **Notasjon:**
  $L(x,\lambda)$, $\lambda_i$. **Fortegnsdisiplin (#6):** tegn på $\lambda$ avhenger av
  $\ge$/$\le$-konvensjon — etabler én konvensjon og hold den.
- **Oppgavesjangre:** H — «Finn alle KKT-punkter for $\min f$ under gitte beskrankninger».
  Mønstereksempel: $\min 2x^2-x^2y-3y^3+4y^2+2y$ under $x^2+(y-1)^2\ge 1$, $y\ge 0$ → tre
  KKT-punkt (nyskrevet variant). `(verifiser)`
- **Typiske feil:** #2 (ufullstendig aktiv-sett-gjennomgang / ikke forkastet $\lambda<0$), #6
  (feil tegn på $\lambda$), glemme komplementaritet.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.2: Andreordensbetingelser via kritisk kjegle og globalitet
**id:** `tma4180-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4180-4-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Hessian av Lagrangefunksjonen $H_L$ restringert til den kritiske kjeglen
  $C$; andreordens nødvendig ($\langle p,H_L p\rangle\ge 0$ på $C$) og tilstrekkelig ($>0$ på
  $C\setminus\{0\}$ → strengt lokalt min) betingelse; globalitet ved verdisammenlikning eller
  ubegrenset-nedad.
- **Eksamensbelegg:** Sjanger I, 81 % (17/21), avslutter P2c. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1, 1.1 (Hessian/definitthet). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` $H_L=\nabla^2_{xx}L$; `definition` kritisk kjegle
  $C(x,\lambda)$ (tillatte retninger der de aktive beskrankningene med $\lambda_i>0$ holdes
  $=0$); `theorem` andreordens nødvendig/tilstrekkelig betingelse på $C$. **Kritisk poeng
  (sensorkrav 5):** sjekk $H_L$ på $C$, IKKE på hele $\mathbb{R}^d$ (#3); tilstrekkelig
  betingelse krever ikke LICQ. Globalitet: sammenlikn funksjonsverdier i alle lokale minima,
  eller vis ubegrenset nedad på $\Omega$. **Notasjon:** $H_L$, $C$.
- **Oppgavesjangre:** I — «Avgjør for hvert KKT-punkt om det er lokalt min via
  andreordensbetingelser; finn alle lokale/globale minima» (fortsettelse av 4.1-eksemplet:
  kun $(0,0)$ lokalt min; ubegrenset nedad → intet globalt). `(verifiser)`
- **Typiske feil:** #3 (feil mengde — hele $\mathbb{R}^d$ i stedet for $C$), #5 (glemt
  globalitet), feil kritisk kjegle (glemme $\lambda_i>0$-skillet).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 4.3: Drill — den store beskranket-oppgaven (H/I)
**id:** `tma4180-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `tma4180-4-2`

- **Kapitteltype:** drillkapittel (B).
- **Description:** Full P2-drill i arkivmalen: LICQ → $T_\Omega$/$F$ → alle KKT-punkter →
  andreordensbetingelser → globalitet, som én sammenhengende ~30-poengsoppgave.
- **Eksamensbelegg:** Sjanger F+G+H+I samlet (signaturoppgaven P2), 90–100 %. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–4.2. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` Løsningsoppskrift (den fulle P2-sekvensen som nummererte trinn
  med tidsbudsjett — #12-advarsel om tidsfelle). `example` gjennomregnet komplett P2-case med
  sensor-margnotater om hvor delpoengene faller.
- **Oppgavesjangre:** 8–12 komplette P2-oppgaver (nyskrevne $f$ og $\Omega$), hver med LICQ-
  svikt-punkt, full aktiv-sett-gjennomgang og globalitet. Minst to merket **(krevende)**.
- **Typiske feil:** #1, #2, #3, #5, #12 — hele P2-feilkatalogen.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A KKT-system + aktiv-sett-gjennomgang · 4.B
andreordensbetingelser på kritisk kjegle · 4.C globalitetsanalyse · 4.D full P2-prøve
(LICQ→KKT→2.orden→globalitet) på eksamensnivå).

### Del 5 — Konvekse mengder, funksjoner og eksistens *(prioritet: PERFEKT — 100 %/57 %)*

#### Kapittel 5.1: Konvekse mengder og projeksjon
**id:** `tma4180-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-1-2`

- **Kapitteltype:** teorikapittel (perfekt for grunnlag).
- **Description:** Konvekse mengder, konveks kombinasjon, projeksjon på en lukket konveks
  mengde (eksistens/entydighet og den variasjonelle ulikheten), optimalitet over konvekse
  mengder — verktøyet dualitet, Pareto og gradient-projeksjon bygger på.
- **Eksamensbelegg:** Grunnlag for J, L, M; optimalitet over konvekse mengder var en 2018-
  handout. Prioritet: perfekt (grunnlag for topptemaene i Del 6–8).
- **Forkunnskaper/kryssbok:** kap. 1.2 (konvekse funksjoner). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` konveks mengde, konveks kombinasjon, konveks kjegle;
  `theorem` projeksjon $P_\Omega(x)$ på lukket konveks $\Omega$ eksisterer og er entydig; den
  variasjonelle ulikheten $\langle x-P_\Omega(x),\, y-P_\Omega(x)\rangle\le 0$; `theorem`
  optimalitetsbetingelse over konveks mengde ($\langle\nabla f(x^*),y-x^*\rangle\ge 0\
  \forall y\in\Omega$). **Notasjon:** $P_\Omega$.
- **Oppgavesjangre:** «Vis at en gitt mengde er konveks»; «Projiser et punkt på en enkel
  konveks mengde (boks/halvrom/kule)»; koble optimalitetsbetingelsen til gradient-projeksjon
  (bro til Del 10.6).
- **Typiske feil:** blande konveks mengde med konveks funksjon, feil retning i den
  variasjonelle ulikheten, glemme lukket/ikke-tom-krav for projeksjon.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.2: Eksistens av minimum (Weierstrass) og konvekse minimeringsproblemer
**id:** `tma4180-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-5-1`

- **Kapitteltype:** teorikapittel (perfekt/kunne).
- **Description:** Weierstrass' eksistensteorem (kontinuerlig funksjon på kompakt mengde, eller
  koersiv på lukket mengde), nedad halvkontinuitet, og hvorfor et konvekst minimeringsproblem
  har globalt min der stasjonaritet er tilstrekkelig.
- **Eksamensbelegg:** Sjanger E-relatert (eksistens/koersivitet 57 %); grunnlag for J/L.
  Prioritet: perfekt for eksistens, kunne for øvrig.
- **Forkunnskaper/kryssbok:** kap. 1.3 (koersivitet), 5.1. `collapsible` Symbol- og formelliste
  SIST.
- **Innholdskontrakt:** `theorem` Weierstrass (kontinuerlig + kompakt → min oppnås);
  koersiv + lukket → min eksisterer; `definition` nedad halvkontinuitet; `theorem` konveks
  problem: lokalt = globalt min, stasjonaritet tilstrekkelig. **Notasjon:** lsc (lower
  semicontinuous). Aktiv utledning: koersiv → nivåmengder kompakte → min oppnås.
- **Oppgavesjangre:** «Avgjør om et gitt problem har (globalt) min»; «Vis eksistens via
  koersivitet + halvkontinuitet».
- **Typiske feil:** #9 (koersivitet ↔ konveksitet), glemme lukkethet/kompakthet-forutsetning,
  forveksle «min eksisterer» med «kritisk punkt finnes».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A konvekse mengder + konveks kjegle · 5.B projeksjon +
variasjonell ulikhet · 5.C eksistens (Weierstrass/koersivitet) · 5.D samlet konveksitets-
og eksistensprøve på eksamensnivå).

### Del 6 — Lagrange-dualitet *(prioritet: PERFEKT — 67 %, 5/5 ny æra, P3-type)*

#### Kapittel 6.1: Lagrange-dualen og svak dualitet
**id:** `tma4180-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-4-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Dualmålet $q(\lambda)=\inf_x L(x,\lambda)$, dualproblemet $\max_\lambda
  q(\lambda)$ s.t. $\lambda\ge 0$, svak dualitet ($q(\lambda)\le p^*$), dualgapet, og hvordan
  man løser det indre minimet (kvadratisk $f$: $\nabla_x L=0$; separable/eksp-ledd: kjenn igjen
  konjugatet fra formelarket).
- **Eksamensbelegg:** Sjanger J, 67 % (14/21), 5/5 ny æra. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1 (Lagrangefunksjon), 1.1 (min via $\nabla=0$).
  «Sist du var her»: vis $L=f-\langle\lambda,c\rangle$ og KKT. `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` dualmål $q(\lambda)=\inf_x L(x,\lambda)$ (konkav, uansett
  primalens konveksitet); `definition` dualproblem $\max_{\lambda\ge 0} q(\lambda)$; `theorem`
  svak dualitet $q(\lambda)\le f(x)$ for alle tillatte $(x,\lambda)$; dualgap. **Notasjon:**
  $q(\lambda)$, $p^*$, $d^*$. Aktiv utledning: at $q$ er konkav (infimum av affine i $\lambda$).
- **Oppgavesjangre:** J (del 1) — «Sett opp Lagrange-dualen og beregn $q(\lambda)$» (nyskrevet
  kvadratisk eller separabelt problem).
- **Typiske feil:** #6 (feil tegn på $\lambda$ for $\ge$/$\le$), glemme $\lambda\ge 0$-domenet,
  regne $\inf_x$ feil.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.2: Sterk dualitet og Slaters betingelse
**id:** `tma4180-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-6-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Sterk dualitet ($d^*=p^*$), Slaters kvalifikasjonsbetingelse (konvekst
  problem med strengt tillatt punkt / lineære beskrankninger) som garanti for sterk dualitet og
  at dualen har løsning; komplementær slakkhet ved optimum.
- **Eksamensbelegg:** Sjanger J (del 2), 67 %, 5/5 ny æra. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, 5.1–5.2 (konveksitet/eksistens). `collapsible` Symbol-
  og formelliste SIST.
- **Innholdskontrakt:** `theorem` Slaters betingelse → sterk dualitet (konvekst problem);
  lineære beskrankninger holder alltid; `theorem` komplementær slakkhet ved optimum;
  konsekvens: dualen har løsning selv når primalen ikke oppnår sitt infimum. **Aktiv bruk:**
  «vis at dualen alltid har løsning», «gi eksempel der primalen mangler løsning men dualen
  ikke». **Notasjon:** Slater.
- **Oppgavesjangre:** J — «Vis sterk dualitet via Slater; vis at dualen har løsning».
  Mønstereksempel: $\min\sum\exp(x_i)$ s.t. $Ax\le b$ — bruk $\exp^*(s)=s\log s-s$ (formelarket),
  Slater gir sterk dualitet (nyskrevet variant). `(verifiser)`
- **Typiske feil:** #6, #10 (feil konjugat / domene), anvende Slater på ikke-konvekst problem,
  forveksle svak og sterk dualitet.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 6.3: Drill — Lagrange-dualitet (J)
**id:** `tma4180-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-6-2`

- **Kapitteltype:** drillkapittel (B).
- **Description:** Drill av hele dual-sekvensen: $L$ → $q(\lambda)$ → dualproblem → Slater →
  sterk dualitet → dualløsning, for kvadratiske, norm- og eksp-baserte mål.
- **Eksamensbelegg:** Sjanger J, 67 %, 5/5 ny æra. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2, 7.1 (konjugat — forward-lenke, brukes i drill).
  `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` Løsningsoppskrift (1: skriv $L$ med riktig tegn; 2: løs $\inf_x
  L$; 3: sett opp $\max q(\lambda),\lambda\ge 0$; 4: sjekk Slater → sterk dualitet). `example`
  gjennomregnet case (kvadratisk + eksp) med margnotater.
- **Oppgavesjangre:** 8–12 varianter (kvadratisk dual, $\|x\|_2^2$-mål, $\sum\exp$-mål,
  $\|x\|_1$-relatert), alle med Slater-argument.
- **Typiske feil:** #6, #10.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A dual $q(\lambda)$ + svak dualitet · 6.B Slater + sterk
dualitet · 6.C komplementær slakkhet + primal/dual-løsning · 6.D samlet dualitetsprøve på
eksamensnivå).

### Del 7 — Legendre–Fenchel-konjugat og infimal-konvolusjon *(prioritet: KUNNE — 29 %, 4/5 ny æra)*

#### Kapittel 7.1: Legendre–Fenchel-konjugatet
**id:** `tma4180-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-5-1`

- **Kapitteltype:** teorikapittel (kunne → konseptuelt perfekt for dualitet).
- **Description:** Konjugatet $f^*(y)=\sup_x\{\langle x,y\rangle-f(x)\}$, bikonjugatet
  $f^{**}=f$ for konvekse nedad-halvkontinuerlige $f$, standardkonjugater fra formelarket
  ($\exp$, $t\log t$, kvadratisk, normer), og støttefunksjonen.
- **Eksamensbelegg:** Sjanger K, 29 % (6/21), 4/5 ny æra; brukes aktivt i dualberegninger
  (Del 6). Prioritet: kunne (karakterskille).
- **Forkunnskaper/kryssbok:** kap. 5.1 (konveksitet), 6.1 (dual). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` konjugat $f^*$; `theorem` $f^*$ alltid konveks (lsc);
  $f^{**}=f$ for konvekse lsc $f$; `definition` støttefunksjon $\sigma_C(y)=\sup_{x\in
  C}\langle x,y\rangle$; standardkonjugater: $\tfrac12\|x\|^2$ selvkonjugert, $\exp^*(s)=s\log
  s-s$ ($s>0$, ellers $+\infty$/0), $\|\cdot\|$ ↔ indikator på dual enhetskule. **Notasjon:**
  $f^*$, $\sigma_C$. **Domenedisiplin (#10):** oppgi domenet til $f^*$ eksplisitt.
- **Oppgavesjangre:** K — «Beregn $f^*$ for gitt $f$»; «Bruk formelarkets konjugater i en
  dualberegning».
- **Typiske feil:** #10 (feil konjugat / glemt domene), forveksle $\sup$/$\inf$, glemme
  $f^{**}=f$-forutsetningen (konveks lsc).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.2: Infimal-konvolusjon og konveksitet av marginalfunksjon
**id:** `tma4180-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-7-1`

- **Kapitteltype:** teorikapittel (kunne — teoritungt karakterskille).
- **Description:** Infimal-konvolusjonen $h(x)=\inf_z\{f(x-z)+g(z)\}$, at konjugatet av en
  infimal-konvolusjon er summen $h^*=f^*+g^*$, konveksiteten av infimal-konvolusjonen, og
  konveksitet av marginalfunksjonen $g(y)=\inf\{f(x):Ax=y\}$ (tre bevismetoder).
- **Eksamensbelegg:** Sjanger K + L, ~2 sett (teoritung); L er et rent kortsvar-bevis.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1, 6.1–6.2 (dualitet). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt:** `definition` infimal-konvolusjon $h=f\,\square\,g$; `theorem`
  $h^*=f^*+g^*$; $h$ konveks når $f,g$ konvekse; spesialtilfelle $h=f\square f\Rightarrow
  h(x)=2f(x/2)$; `theorem` marginalfunksjon $g(y)=\inf\{f(x):Ax=y\}$ konveks når $f$ konveks —
  **tre bevis:** (1) via dualitet ($g$ = supremum av affine → konveks), (2) direkte ε-argument
  med konvekse kombinasjoner, (3) infimum uten kobling. **Aktiv bevis (N):** minst én
  bevismetode skrives ut fullt. **Notasjon:** $\square$.
- **Oppgavesjangre:** K/L — «Vis at $h$/marginalfunksjonen er konveks»; «Beregn en infimal-
  konvolusjon via konjugater». Modellsvar som ren A-besvarelse (flere metoder premieres).
- **Typiske feil:** #10, blande $h^*=f^*+g^*$ med $(f+g)^*$, ufullstendig ε-argument.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A konjugat $f^*$ + bikonjugat + støttefunksjon · 7.B
formelark-konjugater i dualberegning · 7.C infimal-konvolusjon ($h^*=f^*+g^*$) · 7.D
marginalfunksjon-konveksitet (flere bevis) på eksamensnivå).

### Del 8 — Pareto- og flerkriterie-optimering *(prioritet: KUNNE — 29 %, 4/5 ny æra)*

#### Kapittel 8.1: Pareto-optimalitet og vektede sum-problem
**id:** `tma4180-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-5-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Pareto-optimalitet (ingen tillatt løsning forbedrer ett mål uten å forverre
  et annet), karakteriseringen via vektede sum-problem $\min\lambda f_1+(1-\lambda)f_2$ for
  (strengt) konvekse mål, og invarians under strengt voksende transformasjoner.
- **Eksamensbelegg:** Sjanger M, 29 % (6/21), 4/5 ny æra (kort selvstendig oppgave).
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.2 (konvekse problemer), 1.1 ($\nabla=0$). `collapsible`
  Symbol- og formelliste SIST.
- **Innholdskontrakt:** `definition` Pareto-optimalt punkt, Pareto-fronten; `theorem` for
  strengt konvekse mål: Pareto-mengden = alle minima av vektede sum-problemene ($0\le\lambda\le
  1$); `theorem` invarians: $(f,g)$ og $(\varphi\circ f,\varphi\circ g)$ har samme Pareto-
  løsninger for strengt voksende $\varphi$. **Aktiv bruk:** løs vektet sum via $\nabla=0$ som
  funksjon av $\lambda$; direkte monotoni-argument i 1D. **Notasjon:** $\lambda\in[0,1]$
  (vekt). **Betingelsesdisiplin (#11):** vektet-sum-karakteriseringen krever (strengt)
  konvekse mål — skriv betingelsen ut.
- **Oppgavesjangre:** M — «Finn Pareto-mengden for to (strengt konvekse) mål»; «Vis invarians
  under en monoton transformasjon». Mønstereksempel: to kvadratiske mål → Pareto-fronten
  parametrisert av $\lambda$ (nyskrevet).
- **Typiske feil:** #11 (vektet-sum uten konveksitet), forveksle Pareto-optimalt med globalt
  optimalt for ett mål, glemme randen av tillatt mengde.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A Pareto-definisjon + identifisering · 8.B vektede sum-
problem for konvekse mål · 8.C invarians under monotone transformasjoner · 8.D samlet Pareto-
prøve på eksamensnivå).

### Del 9 — Videre metoder og beredskap *(prioritet: KUNNE/KJENNE)*

#### Kapittel 9.1: Korte teoribevis — verktøykassen (N)
**id:** `tma4180-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-2-3`

- **Kapitteltype:** teorikapittel/bevis-sjanger (kunne — karakterskille).
- **Description:** De faste teoribevisene som gir ~10 p hvert år: Armijo-eksistens for en
  nedstigningsretning; $\nabla f_k\to 0$ for gradientmetode med Armijo; CG-varianter gir samme
  skritt ved eksakt linjesøk. Bevisteknikk (Taylor + $o(\alpha)$, teleskopsum, eksakt-linjesøk-
  ortogonalitet).
- **Eksamensbelegg:** Sjanger N, minst ett bevis per sett i ny æra. Prioritet: kunne
  (karakterskille).
- **Forkunnskaper/kryssbok:** kap. 2.1–2.3. `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `theorem`+bevis (i) **Armijo-eksistens:** for nedstigningsretning $p$
  ($\langle\nabla f,p\rangle<0$) finnes $\hat\alpha>0$ slik at Armijo holder for alle
  $0<\alpha<\hat\alpha$ (Taylor/$o(\alpha)$-argument); (ii) **$\nabla f_k\to 0$:** teleskopsum
  når $f$ begrenset nedad og $\alpha_k\ge\varepsilon>0$; (iii) **CG-ekvivalens:** Polak–Ribière
  = Hestenes–Stiefel ved eksakt linjesøk via $\langle\nabla f_{k+1},p_k\rangle=0$; Fletcher–
  Reeves gir nedstigningsretning. Hvert bevis vises steg for steg med «Intuisjon:»-linje.
- **Oppgavesjangre:** N — «Bevis at …» (nyskrevet formulering av samme tre bevis). Modellsvar
  som rene A-besvarelser (ingen meta-fasit).
- **Typiske feil:** hoppe over $o(\alpha)$-leddet, glemme $\alpha_k\ge\varepsilon$-
  forutsetningen, feil ortogonalitetsrelasjon.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 9.2: Konjugerte gradienter
**id:** `tma4180-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-2-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Lineær CG (Krylov, $A$-konjugerte retninger, konvergens på $\le n$ skritt),
  ikke-lineær CG (Fletcher–Reeves / Polak–Ribière / Hestenes–Stiefel), og koblingen til
  eksakt linjesøk.
- **Eksamensbelegg:** Sjanger relatert til N; CG 24 % (5/21), 3/5 ny æra. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2, lineær algebra. `collapsible` Symbol- og formelliste
  SIST.
- **Innholdskontrakt:** `definition` $A$-konjugerte retninger; `theorem` lineær CG minimerer
  kvadratisk $f$ på $\le n$ skritt; ikke-lineær CG-formlene (FR/PR/HS); restart. **Notasjon:**
  $\beta_k$ (CG-koeffisient).
- **Oppgavesjangre:** «Utfør ett–to CG-skritt»; «Vis at PR = HS ved eksakt linjesøk» (kobles
  til 9.1).
- **Typiske feil:** forveksle FR/PR/HS-formlene, glemme $A$-konjugering, feil restart-logikk.
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 9.3: Metodevalg for stor-skala-problemer
**id:** `tma4180-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4180-2-2`

- **Kapitteltype:** teorikapittel (kunne — bro til prosjektet).
- **Description:** Å velge og begrunne en numerisk metode for et konkret (ofte stort, $d\approx
  10^4$) problem: strukturert (tridiagonal) Hessian → Newton + Thomas-algoritme; enkle boks-
  beskrankninger i stor dimensjon → gradient-projeksjon (aktiv-sett upraktisk), evt. Barzilai–
  Borwein-skrittlengder; strengt konveks glatt → Newton med billig linjesøk.
- **Eksamensbelegg:** Sjanger M-relatert (metodevalg), ~3 sett; direkte bro til prosjektet
  (30 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2, 5.1 (projeksjon). `collapsible` Symbol- og formelliste
  SIST.
- **Innholdskontrakt:** `text` beslutningskart: struktur i Hessian → metode; dimensjon →
  metode; beskrankningstype → metode. Thomas-algoritmen for tridiagonalt system (kort),
  gradient-projeksjon $x_{k+1}=P_\Omega(x_k-\alpha_k\nabla f_k)$, Barzilai–Borwein-skrittlengde.
  **Notasjon:** BB-skrittlengde. `(verifiser)` (prosjektreferanse).
- **Oppgavesjangre:** «Foreslå og begrunn en metode for et gitt stort problem» (nyskrevet).
- **Typiske feil:** velge aktiv-sett i stor dimensjon, ignorere Hessian-struktur, forveksle
  konvergensrate-argumenter.
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 9.4: Beredskap — trust-region, BFGS, LP, variasjonsregning, straffemetoder
**id:** `tma4180-9-4` · **number:** 9.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4180-4-1`

- **Kapitteltype:** teorikapittel (kjenne — beredskap; komprimert gammel-æra + Nocedal-bredde).
- **Description:** Kompakt beredskapsdekning av stoff som står i Nocedal & Wright og kan dukke
  opp, men er sjeldent/utdødd i ny æra: trust-region-delproblem, kvasi-Newton/BFGS, LP-
  dualitet + komplementær slakkhet + simpleks, straffemetoder/utvidet Lagrange, og (utdødd,
  kun kjenne til) variasjonsregning (Euler–Lagrange).
- **Eksamensbelegg:** Sjanger «beredskap»: trust-region 14 %, BFGS 5 %, LP 48 % (fallende),
  variasjonsregning 24 % (kun 2004–2014, utdødd), straffemetoder 24 %. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 4.1 (KKT), 2.2 (Newton). `collapsible` Symbol- og
  formelliste SIST.
- **Innholdskontrakt (kort — «bør kjenne til», merkes eksplisitt):** `theorem` trust-region-
  delproblem $\min m(p)=f+g^\top p+\tfrac12 p^\top Hp$, $\|p\|\le\Delta$ → $(H+\lambda I)p=-g$,
  $\lambda\ge 0$; radiusjustering via $\rho=$ faktisk/predikert nedgang; `definition` BFGS-
  oppdatering (skisse); LP-dualitet + komplementær slakkhet (kort); straffemetode + utvidet
  Lagrange $L_A=f-\langle\lambda,Ax-b\rangle+\tfrac{\mu}{2}\|Ax-b\|^2$; Euler–Lagrange
  $\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$ (kun kjenne til,
  merket «utdødd»). **Notasjon:** $\Delta$, $\mu$, $L_A$.
- **Oppgavesjangre:** 2–3 korte «kjenne til»-oppgaver per tema; merket eksplisitt som
  beredskap («lavt vektet, kun ny-æra-usikkerhet»).
- **Typiske feil:** bruke tid på beredskapsstoff på bekostning av kjernen (#12); forveksle
  trust-region-$\lambda$ med KKT-multiplikator.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A teoribevis (Armijo-eksistens / $\nabla f\to 0$ / CG) ·
9.B konjugerte gradienter · 9.C stor-skala-metodevalg · 9.D beredskap (trust-region/LP/
straff) på oversiktsnivå).

### Del 10 — Eksamenstrening og prosjektspor *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Sjangerspill — løsningsoppskrifter for A–N
**id:** `tma4180-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4180-9-4`

- **Kapitteltype:** sjangerdrill/konsolidering (DNA B-lignende).
- **Description:** Alle fjorten oppgavesjangrene (A–N) med løsningsoppskrifter samlet på ett
  sted — studentens hurtigreferanse rett før eksamen.
- **Eksamensbelegg:** Meta (alle sjangre). Sensorkravene 1–7 gjennomgående. Prioritet: perfekt
  (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` Symbol- og formelliste (hele apparatet i
  kortform).
- **Innholdskontrakt:** `text` Sjangerguiden — for hver sjanger A–N: kjennetegn,
  løsningsoppskrift, sensorpremie, vanligste feilkode. `collapsible` Hurtigreferanse (flashcard-
  kilde): P1-sekvensen, P2-sekvensen (LICQ→$T_\Omega$/$F$→KKT→2.orden→globalitet), dual-
  oppskriften, konjugat-oppslaget, bevis-malene. `example` full gjennomgang av én oppgave per
  hovedsjanger. `exercise` «identifiser sjanger + skisser angrepsplan» for blandede oppgavestammer.
- **Typiske feil:** hele #1–#12-katalogen med kobling til forebyggende kapittel.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 10.2: Øvingseksamen 1 (komplett skriftlig sett)
**id:** `tma4180-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `tma4180-10-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet skriftlig sett i Grasmair-malen: 6–7 poengvektede
  oppgaver (~100 p, 4 t), kalkulator + formelark, alle svar begrunnet.
- **Eksamensbelegg:** Meta — speiler temafordelingen i analysen §2. Prioritet: perfekt (meta).
- **Innholdskontrakt:** temafordeling som en «typisk» eksamen: **P1** ubeskranket (minima +
  konveksitet + ett gradient/Armijo-skritt), **P2** den store beskranket-oppgaven (LICQ,
  $T_\Omega$/$F$ i to punkter inkl. LICQ-svikt, alle KKT-punkter + andreordensbetingelser +
  globalitet), **P3** Lagrange-dual + Slater, **P4** en Fenchel/marginalfunksjon-oppgave, **P5**
  en Pareto-oppgave, **P6** et kort teoribevis (N). `collapsible` full løsning per oppgave
  (modellsvar som A-besvarelse); `tip` Sensorblikket (hvor delpoengene faller, terskelbeskrivelse).
  Selvdiagnose-sjekkliste (☐) etter fasiten. **Kildeforbehold:** malen bygger på 2004–2025-
  arkivet; prosjektdel ikke medregnet her.
- **Typiske feil:** hele #1–#12 anvendt i Sensorblikket (særlig #1, #2, #3 i P2).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 10.3: Øvingseksamen 2 (komplett skriftlig sett)
**id:** `tma4180-10-3` · **number:** 10.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4180-10-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett med en annen, men fortsatt typisk, profil — speiler at
  Grasmair-settene er strukturelt identiske år etter år (samme søyler, varierte funksjoner).
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innholdskontrakt:** som 10.2, med tyngre vekt på **Newton-skritt + Wolfe-intervall** i P1,
  en **P2 med to LICQ-svikt-punkter**, en **dual med eksp-mål** (Fenchel-konjugat), og et
  **CG-ekvivalens-bevis**. Full løsning + Sensorblikket + selvdiagnose.
- **Typiske feil:** #1, #3, #6, #10 fremhevet i Sensorblikket.
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 10.4: Øvingseksamen 3 (komplett skriftlig sett)
**id:** `tma4180-10-4` · **number:** 10.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4180-10-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje komplette sett, vektet mot de tyngste konseptuelle temaene
  (beskranket P2 + dualitet) og med en marginalfunksjon-konveksitet — for bredest mulig
  sjangerdekning A–N.
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innholdskontrakt:** som 10.2/10.3, med **P2 som tyngste oppgave** (full aktiv-sett-
  gjennomgang), en **marginalfunksjon-konveksitet (flere bevis)**, en **Pareto med invarians**,
  og et **$\nabla f\to 0$-bevis**. Full løsning + Sensorblikket med A/B/C-terskelbeskrivelse +
  selvdiagnose. Til sammen dekker de tre settene sjangrene A–N minst én gang.
- **Typiske feil:** #2, #5, #11 fremhevet i Sensorblikket.
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 10.5: Kald bank — uvante vinklinger
**id:** `tma4180-10-5` · **number:** 10.5 · **estimatedMinutes:** 60 · **prerequisites:** `tma4180-10-4`

- **Kapitteltype:** kald bank (eksamenstrening).
- **Description:** 8–10 oppgaver med uvante vinklinger og kombinasjoner UTEN hint, der fasiten
  kun er momentliste — for å strekke toppleseren (jf. README «Difficulty-spredning + kald bank»).
- **Eksamensbelegg:** Meta (tverrsjanger). Prioritet: perfekt (meta).
- **Innholdskontrakt:** `text` innledning som merker banken tydelig som KALD (ingen hint,
  momentliste-fasit). `exercise` ×8–10: f.eks. en $T_\Omega$ ved dobbel LICQ-svikt; en dual der
  primalen mangler løsning; en Pareto-front for ikke-strengt-konvekse mål (betingelsen slår
  begge veier); et bevis-kombinasjonsspørsmål (Armijo + koersivitet); et metodevalg med
  strukturert Hessian. Fasit = momentliste, ikke full utregning.
- **Typiske feil:** (banken tester radaren — feilkodene glosses i momentlista).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 10.6: Prosjektsporet — numerisk implementering (30 %)
**id:** `tma4180-10-6` · **number:** 10.6 · **estimatedMinutes:** 75 · **prerequisites:** `tma4180-9-3`

- **Kapitteltype:** implementeringsspor (prosjekt, bærer 30 %).
- **Description:** Det numeriske implementeringssporet som mappedelen (30 %) krever: koding og
  analyse av nedstigningsmetoder — gradientmetode med linjesøk, gradient-projeksjon for enkle
  beskrankninger, Barzilai–Borwein-skrittlengder, og stoppekriterier. Pseudokode + praktiske
  valg, ikke bare teori.
- **Eksamensbelegg:** Prosjekt/mappe (30 % av karakteren). Selve prosjektoppgaven ligger IKKE i
  arkivet; innholdet er utledet av fasitreferanser (Kont2025 P4: Barzilai–Borwein «som i
  prosjektet», gradient-projeksjon for $d\approx 10^4$). **Alt merket `(verifiser)` — byggefasen
  bør bekrefte mot gjeldende prosjekttekst.** Prioritet: perfekt (meta, 30 %).
- **Forkunnskaper/kryssbok:** kap. 2.1–2.3 (linjesøk/konvergens), 5.1 (projeksjon), 9.3
  (metodevalg). `collapsible` Symbol- og formelliste SIST.
- **Innholdskontrakt:** `text` prosjektets natur (Python/Julia/MATLAB-implementering
  `(verifiser)`); `theorem`/pseudokode: gradientmetode med backtracking Armijo;
  gradient-projeksjon $x_{k+1}=P_\Omega(x_k-\alpha_k\nabla f_k)$ for boksbeskrankninger;
  Barzilai–Borwein-skrittlengder ($\alpha_k^{BB1}=\frac{\langle s_{k-1},s_{k-1}\rangle}{\langle
  s_{k-1},y_{k-1}\rangle}$, $s=x_k-x_{k-1}$, $y=\nabla f_k-\nabla f_{k-1}$) `(verifiser)`;
  stoppekriterier ($\|\nabla f_k\|<\text{tol}$, maks iterasjoner). `text` rapportskriving og
  konvergensplott. **Notasjon:** $s_k$, $y_k$, tol.
- **Oppgavesjangre:** «Skriv pseudokode for gradient-projeksjon på en boks»; «Regn ut én BB-
  skrittlengde fra to iterater»; «Foreslå stoppekriterier og begrunn».
- **Typiske feil:** blande BB1/BB2-formlene, glemme projeksjonssteget, dårlige stoppekriterier
  (kun iterasjonstak), ikke koble til konvergensteorien (kap. 2.3).
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 10:** ingen egen prøve (Del 10 ER de tre øvingseksamenene 10.2–10.4 +
kald bank; prosjektsporet 10.6 verifiseres praktisk mot prosjektteksten).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

Summeringskontroll per del (quiz / flashcards), kontrollregnet per kapittel FØR totalen:

- **Del 0:** 20 = **20** / 16 = **16**
- **Del 1:** 18+16+16+14 = **64** / 18+16+16+14 = **64**
- **Del 2:** 18+16+16+14 = **64** / 18+16+16+14 = **64**
- **Del 3:** 20+18+14 = **52** / 20+18+14 = **52**
- **Del 4:** 20+18+16 = **54** / 20+18+16 = **54**
- **Del 5:** 16+16 = **32** / 16+16 = **32**
- **Del 6:** 18+16+14 = **48** / 18+16+14 = **48**
- **Del 7:** 16+16 = **32** / 16+16 = **32**
- **Del 8:** 16 = **16** / 16 = **16**
- **Del 9:** 16+14+14+14 = **58** / 16+14+14+14 = **58**
- **Del 10:** 18+8+8+8+8+12 = **62** / 18+8+8+8+8+12 = **62**

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 1 | 20 | 16 | 0 (dekkes av øvingseksamenene) |
| 1 | 4 | 64 | 64 | 4 |
| 2 | 4 | 64 | 64 | 4 |
| 3 | 3 | 52 | 52 | 4 |
| 4 | 3 | 54 | 54 | 4 |
| 5 | 2 | 32 | 32 | 4 |
| 6 | 3 | 48 | 48 | 4 |
| 7 | 2 | 32 | 32 | 4 |
| 8 | 1 | 16 | 16 | 4 |
| 9 | 4 | 58 | 58 | 4 |
| 10 | 6 | 62 | 62 | 0 (= 3 øvingseksamener + kald bank + prosjektspor) |
| **Sum** | **33** | **502 ✓ (≥500)** | **498** | **36 + 3 øvingseksamener** |

Kontroll: 20+64+64+52+54+32+48+32+16+58+62 = **502 quiz** / 16+64+64+52+54+32+48+32+16+58+62
= **498 flashcards**. **Kapitteltelling:** 1+4+4+3+3+2+3+2+1+4+6 = **33**.

**Justering for flashcard-gulvet (≥500):** flashcard-summen 498 ligger 2 under gulvet. For å
gi sikker margin (jf. «minimum per kapittel — forfatteren kan overskyte, aldri underskride»)
løftes tre teorikapitler i kjernedelene med +4 flashcards hver: **1.1** (18→22), **4.1**
(20→24), **6.1** (18→22). Dette gir:

- Del 1 flashcards: 22+16+16+14 = **68**
- Del 4 flashcards: 24+18+16 = **58**
- Del 6 flashcards: 22+16+14 = **52**
- **Ny flashcard-total:** 16+68+64+52+58+32+52+32+16+58+62 = **510 ✓ (≥500)**

**GATE-TALL (autoritativt): 502 quiz / 510 flashcards / 33 kapitler.** Begge over gulvet på
500. Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: de sju garantifaste temaene (Del 1 ubeskranket, Del 2 linjesøk,
Del 3 LICQ/tangentkjegle, Del 4 KKT/2.orden, Del 5 konveksitet/eksistens, Del 6 dualitet) bærer
hoveddelen; Legendre–Fenchel (Del 7), Pareto (Del 8) og beredskap (Del 9) er lettere; Del 10 er
eksamenstrening + prosjektspor.

### Prøver (4 per temadel, 36 totalt)

Fire prøver per temadel (Del 1–9). Hver prøve speiler eksamensmalen i miniatyr: en blanding av
regne-/utlednings-/bevisoppgaver med **utregnet fasit** + eksplisitt metodenavning
(sensorkrav 2) og selvdiagnose-sjekkliste. Omfang 25–45 min. Alle oppgaver NYSKREVNE.
Prøvekapittel-id `tma4180-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og
Del 10 har ingen egen prøve (Del 10s tre øvingseksamener + kald bank dekker helheten).
Prøvetitlene er spesifisert per del i §3 (Prøve-kvote-linjene). Prøvekapitlene bidrar ikke til
quiz-/flashcard-kvoten over (egne prøve-elementer).

### Komplette øvingseksamener (3 — kapitlene 10.2–10.4) + kald bank (10.5)

Tre nyskrevne skriftlige sett i Grasmair-malen (6–7 poengvektede oppgaver, ~100 p, 4 t,
kalkulator + formelark, alle svar begrunnet), med ulik men typisk profil, full modellsvar-fasit
(A-besvarelse med eksplisitt metodenavning), Sensorblikket per oppgave og selvdiagnose-
sjekkliste. Til sammen dekker de tre settene sjangrene A–N minst én gang. Kald bank (10.5): 8–10
uvante oppgaver uten hint, momentliste-fasit. **Prosjektsporet (10.6)** verifiseres praktisk mot
gjeldende prosjekttekst `(verifiser)`.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (70 % skriftlig 4 t + 30 % prosjekt, bokstavkarakter,
   ingen flervalg, engelsk oppgavetekst / svar på norsk eller engelsk, kalkulator + formelark),
   de fem søylene, æraskiftet og kildeforbeholdet (fra kap. 0.1).
2. **Verktøykassen** — formel-minimum-siden (Armijo, KKT, $F$, kritisk kjegle, dual, Slater) +
   hva formelarket gir (Legendre–Fenchel-konjugater).
3. **De fem søylene i rekkefølge** — (1) ubeskranket (Del 1), (2) linjesøk-skritt (Del 2), (3)
   beskranket P2 (Del 3–4, den tyngste), (4) dualitet + Fenchel (Del 6–7), (5) teoribevis (Del 9.1).
4. **Pareto og beredskap** — Del 8 + Del 9.
5. **Prosjektet (30 %)** — Del 10.6 (gradient-projeksjon, Barzilai–Borwein, stoppekriterier).
6. **Eksamenstrening** — sjangerspill (10.1), tre øvingseksamener (10.2–10.4), kald bank (10.5).
7. **Feilregisteret** — #1–#12 med forebyggende kapittel.

Studieguiden er utfyllende og dekker alle sentrale temaer (jf. CLAUDE.md-minstekrav): Del 0 +
Eksamensvinkel-blokkene utgjør kjernen, med kryssreferanser til teorikapitlene for utdyping.

---

## 6. Opphavsrett og nyskriving

- Eksamensoppgaver og løsningsforslag brukes som **grunnlag** (mønstre, temavekting,
  vurderingskriterier), **aldri ordrett**. Alle funksjoner, beskrankningsmengder, tall og
  formuleringer i boka er NYSKREVNE — endre koeffisienter, funksjonsform og kontekst fra
  arkiveksemplene.
- Metodenavn (LICQ, KKT, Slater, Armijo, Wolfe, Barzilai–Borwein), teoremer, formler og
  standard fagnotasjon er ikke opphavsrettslig beskyttet og brukes fritt.
- Pensumlitteratur (Nocedal & Wright) refereres (forfatter/verk/begrep), aldri sitert i lengde.
- Alle matematiske påstander parametersjekkes numerisk før de påstås ubetinget (DNA-regnefag);
  usikre/prosjektavhengige påstander merkes `(verifiser)`.
