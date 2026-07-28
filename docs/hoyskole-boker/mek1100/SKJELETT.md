# Bokskjelett: MEK1100 Feltteori og vektoranalyse — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (25 avsluttende eksamenssett vår/høst 2004–2018, 17 offisielle
> løsningsforslag/fasiter, samt den utdelte Rottmann-formelsamlingen og det
> vedlagte 2-siders formeltillegget). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. MEK1100 forutsetter **MAT1110s
> vektoranalyse** (`docs/hoyskole-boker/mat1110/`); forgjenger-/parallellboka er
> skjelett, ikke bygget, så MAT1110-forkunnskaper skrives som klartekst med
> aktiveringsmarkør (se §1.6). VGS-forkunnskaper (R2/S2/R1/1T) er bygget og lenkes.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mek1100` |
| Tittel | **MEK1100 Feltteori og vektoranalyse (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (fysikk-/anvendt matematikk med to komplementære prøver) |
| Antall kapitler | **27** (1 eksamenskart + 22 tema + 4 eksamenstrening) |
| Estimert totaltid | **1 920 min ≈ 32 timer** |
| Quiz totalt | **508** (krav ≥500) |
| Flashcards totalt | **502** (krav ≥500) |

**Pitch (ett avsnitt):** MEK1100 er UiOs innføring i feltteori og vektoranalyse —
den fysiske overbygningen på det matematiske vektoranalyse-apparatet fra MAT1110.
Der MAT1110 innfører gradient, divergens, curl, Gauss og Stokes som rene
operatorer, lærer MEK1100 deg å **oversette fysikk til feltmatematikk og
tilbake**: en elv, et rør, en hevert, en roterende kopp eller en kule som varmes
opp blir et hastighets- eller temperaturfelt du analyserer. Faget er
**bemerkelsesverdig stabilt** — i hele arkivet (2004–2018) er hvert eneste sett
bygget rundt de samme fem ryggradene: (1) **strømfunksjon ψ og hastighetspotensial
φ** — eksistens, bestemmelse, strømlinjer og stagnasjonspunkter (96 %, åpner
nesten hvert sett); (2) **divergens og virvling** av et felt med fysisk tolkning
(80 %); (3) **integralsatsene** — sirkulasjon via Stokes og fluks via Gauss, ofte
«regn to veier og bekreft» (60 % hver); (4) **Bernoulli** med eksplisitte
betingelser (76 %) eller **Euler** direkte (36 %, stigende); (5) **varmefluks og
Fouriers lov** (64 %). En bok som driller disse fem til automatikk dekker >90 % av
poenguttellingen. Fra 2011 er formen en fast mal: **10 delspørsmål à 0–10 poeng,
maks 100, 4 timer**, med 3–5 fysisk innkledde hovedoppgaver med kjedede
delpunkter. Sensorregelen som preger alt: **navngi teoremer og felt eksplisitt,
oppgi eksistensbetingelsene før du finner ψ/φ, skriv Bernoulli-betingelsene hver
gang, og kontroller dimensjonene.** Den reneste toppkarakter-skilleren i hele
arkivet: å **vite når Bernoulli er ugyldig** (virvlet felt / trykk på tvers av
strømlinjer) og bytte til Eulers likning.

### 1.6 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Navngi teoremer og felt eksplisitt.** Settene ber ordrett om det: «Navngi
   tydelig hva som er divergens og hva som er virvling», «Hva heter
   integralsatsen?», «Gi navn til feltene». Hvert løsningsforslag skriver «Stokes'
   sats», «Gauss' divergensteorem», «kilde», «dipol», «uniform strøm» der
   argumentet bæres. Ren regning uten navn taper uttelling.
2. **Oppgi eksistensbetingelsene FØR du finner ψ/φ.** $φ$ finnes ⇔ feltet er
   **virvelfritt** ($\nabla\times\mathbf v = \mathbf 0$, konservativt); $ψ$ finnes
   ⇔ feltet er **divergensfritt** ($\nabla\cdot\mathbf v = 0$) og **todimensjonalt**.
   Er begge oppfylt er strømmen potensialstrøm og $\nabla^2\varphi = 0$ (Laplace).
   Fasiten skriver eksistensbegrunnelsen eksplisitt; å bare finne funksjonen gir
   ikke full uttelling.
3. **Bernoulli-betingelsene skrives NED hver gang:** ideelt/friksjonsfritt fluid,
   stasjonært felt, konstant tetthet. Da er $p/\rho + \tfrac12 v^2 + gz = H_0$
   **konstant langs en strømlinje** — **og overalt hvis feltet er virvelfritt**.
   Dette er et eget poeng i mange sett.
4. **Dimensjonskontroll premieres.** Sett opp benevnings-tabeller ($\rho \sim
   \mathrm{kg/m^3}$, $v \sim \mathrm{m/s}$, $\nabla \sim \mathrm{1/m}$, $H \sim
   \mathrm{J/(m^2 s)}$) og verifiser at sluttsvaret har riktig enhet. Ikke-SI-valg
   godtas så lenge de er konsistente.
5. **Fortegns- og konstantfrihet godtas.** $ψ$ og $φ$ er bare bestemt opp til en
   vilkårlig additiv konstant, og fortegnskonvensjonen i ψ-relasjonene er fri —
   men må brukes **konsistent**. Fasiten skriver rutinemessig «$+C$ kan velges lik
   null» og «motsatt fortegn aksepteres». Straff aldri et konsistent valg.
6. **Orientering og normalretning kontrolleres HVER gang** i fluks-/sirkulasjons-
   oppgaver: $\mathbf n$ skal peke **ut av** volumet (Gauss), og randorienteringen
   matche normalen etter **høyrehåndsregelen** (Stokes). Bytt fortegn eksplisitt
   der $\mathbf n$ snus.
7. **Fysisk gyldighetsområde diskuteres.** Trykk kan ikke bli negativt / under
   damptrykket ⇒ **kavitasjon** setter grense på $H$ i heverten, på $|x|$ eller
   $r$ nær en kilde/virvel. Urealistiske modeller langt fra origo/bakken flagges.
8. **Alternative løsningsveier honoreres — og «to veier» er ofte selve oppgaven.**
   Vis både direkte kurveintegral *og* Stokes, både direkte flateintegral *og*
   Gauss, både sylinder- *og* kartesiske koordinater der det er naturlig; å
   bekrefte samme svar to veier er poenggivende.
9. **Fysisk innkledning er regelen.** Nesten hver oppgave er en konkret elv, rør,
   hevert, karusell, roterende kopp, telt i vind, flaskebunn eller akvarium. Alle
   eksempler og øvinger i boka skal ha fysisk kontekst, og løsningen skal
   **oversette** fram og tilbake mellom fysikk og felt.
10. **Ærlighet om arkivet.** (a) Arkivet **stopper i V2018** — et 8-årig gap mot
    dagens aktive undervisning (vår 2026). Boka trener den dokumenterte, svært
    stabile 2011–2018-arkitekturen, men Eksamensvinklene sier eksplisitt at
    kalibreringen hviler på 2004–2018 og at byggefasen bør skaffe nyere sett og
    reverifisere vekting (jf. MAT1110s regimeskifte i 2025). (b) **Ingen
    midtsemestereksamener finnes i arkivet** — all kvantitativ analyse gjelder
    avsluttende eksamen; midtveissimuleringen (7.2) kalibreres på pensumvinduet,
    ikke på dokumentert form. (c) **Potensialstrøm-katalogen ved superposisjon**
    (kilde/sluk/dipol/virvel) dominerte 2004–2008 (8/9) men falt kraftig etter
    2012 — behandles som **beredskap**, med Eksamensvinkel som sier det rett ut.
    (d) **Eulers likning direkte for trykk** er stigende (4/6 i 2014–2018) og er
    den reneste toppkarakter-skilleren — vektes opp tross moderat rå-frekvens.

### 1.7 Notasjonskonvensjoner boken skal speile (fra fasitene 2006–2017)

$\nabla\varphi$ gradient; $\nabla\cdot\mathbf v$ divergens; $\nabla\times\mathbf v$
virvling/curl; $\nabla^2$ Laplace; $ψ$ strømfunksjon, $φ$ (hastighets)potensial;
$\mathbf i_r, \mathbf i_\theta, \mathbf i_z$ / $\mathbf i_r, \mathbf i_\theta,
\mathbf i_\phi$ enhetskoordinatvektorer i sylinder/kule; $D\mathbf v/Dt$
materialderivert; $H_0$ Bernoulli-konstant; $\kappa$ varmediffusivitet, $k$
varmeledningstall, $c$ spesifikk varmekapasitet, $H$ varmeflukstetthet; $\eta(r)$
fri overflate; $\sim$ for «har benevning». **Eksakte svar; fysiske enheter oppgis
alltid.** Fortegnskonvensjon i ψ-relasjonene (fasit H2012/H2008): 2D kartesisk
$v_x = \partial\varphi/\partial x = \partial\psi/\partial y$, $v_y =
\partial\varphi/\partial y = -\partial\psi/\partial x$; polart $v_r =
\partial\varphi/\partial r = (1/r)\,\partial\psi/\partial\theta$, $v_\theta =
(1/r)\,\partial\varphi/\partial\theta = -\partial\psi/\partial r$.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): vektoranalyse-verktøykassen
(bro fra MAT1110) først; så feltderiverte (div/virvling/Laplace); så
integralsatsene som bygger på begge; deretter bokens kjerne — strømfunksjon og
potensial — som bruker alt det foregående; så fluid-dynamikken (kinematikk, Euler,
Bernoulli, kontinuitet) og til slutt varmetransport. Frekvensen styrer *omfanget*:
«perfekt»-temaene får teori + eget drillkapittel; «kjenne»-temaene får ett kompakt
kapittel. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer den stabile 10×10-malen og de fem ryggradene. |
| 1 | Vektoranalyse-broen: felt, operatorer og koordinater | 4 | Bro fra MAT1110 (gradient/parametrisering) + gjennomgående verktøy (dimensjonsanalyse 60 %, krumlinjede koordinater 20 %, gradient/enhetsnormal 20–24 %). |
| 2 | Feltderiverte: divergens, virvling og Laplace | 2 | Divergens/virvling **80 %** → nivå 1; harmoniske felt + ekviskalar-ortogonalitet 24 % → bro til Del 4. |
| 3 | Integralsatsene: Green, Gauss og Stokes | 4 | Stokes-sirkulasjon 60 % + Gauss-fluks 60 % → nivå 1 → teori + integralsats-drill; teoriutledninger (kontinuitet/veiuavhengighet) ~20 %. |
| 4 | Strømfunksjon ψ og hastighetspotensial φ | 4 | **Bokens absolutte kjerne**: eksistens+finn 96 %, strømlinjer/stagnasjon 76 % → nivå 1 → teori + ψ/φ-drill; superposisjon 48 % (fallende) → beredskap. |
| 5 | Fluidkinematikk og -dynamikk: Euler, Bernoulli og trykk | 5 | Bernoulli **76 %** → nivå 1 → teori + trykk-drill; materialderivert 44 %, kontinuitet 20 %, hydrostatisk trykk/fri overflate 32/24 %, Euler-skillet = toppkarakter-skiller. |
| 6 | Varmetransport: Fouriers lov og varmeledning | 3 | Varmefluks/Fourier **64 %** → nivå 1; varmeledningslikning + ∂T/∂t-fortegn + radiell ledning (sylinder/kule). |
| 7 | Eksamenstrening | 4 | Føringsstandard-kapittel + 1 midtveissimulering + 2 avsluttende simuleringer (10×10-malen med fysisk innkledning). |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger i temadelene sine** (3.4, 4.4, 5.5) i stedet for i siste
   del: dette er de tre perfekt-sjangerklyngene (integralsatsene, ψ/φ-pakken,
   trykk) som må drilles rett etter teorien. Del 7 beholder føringsstandarden og de
   tre komplette simuleringene.
2. **27 kapitler** — innenfor DNA-taket (20–35). Faget er så konsentrert om fem
   ryggrader at boka er kompakt; breddetemaene (krumlinjede koordinater,
   superposisjon, gradient/enhetsnormal) holdes bevisst korte og merkes med sin
   frekvens.
3. **Del 1 er en ren bro-/verktøydel** (4 kap.) fordi MEK1100 forutsetter MAT1110s
   vektoranalyse. Kapitlene 1.1–1.2 repeterer det matematiske apparatet kompakt
   (med aktiveringsmarkør mot MAT1110), mens det **fysiske tolkningslaget** bygges
   fra grunnen fra Del 2 og utover. Dimensjonsanalyse (1.4) er skilt ut som eget
   verktøykapittel fordi den er **gjennomgående poenggivende** (60 %), ikke bare en
   egen oppgave.
4. **Superposisjons-katalogen (4.3) er beredskapsdelens ærlighetsunntak**: temaet
   var signaturoppgaven 2004–2008 (8/9) men falt etter 2012. Det beholdes fordi det
   er tungt når det kommer, men Eksamensvinkelen sier ærlig «fallende — hold som
   beredskap».
5. **Midtveissimuleringen (7.2) er kalibrert på pensumvindu, ikke dokumentert form**
   (ingen midtsemestereksamener i arkivet). Dette er et forbehold, ikke et avvik —
   kapitlet sier det eksplisitt.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** strømfunksjon
ψ / hastighetspotensial φ (eksistens + bestemmelse), **B** divergens og virvling
av et gitt felt (+ navngi), **C** strømlinjer, stagnasjons-/singulære punkter,
skisse, **D** sirkulasjon via Stokes' teorem, **E** fluks via Gauss'
divergensteorem, **F** fluks/volumfluks ved direkte flateintegral
(parametrisering), **G** Bernoulli: betingelser + anvendelse, **H** Euler direkte
for trykkfelt, **I** varmefluks / Fouriers lov / varmeledningslikning, **J**
materialderivert / akselerasjon (lokal + konvektiv) + partikkelbane, **K**
hydrostatisk trykk + total trykkraft på flate + fri overflate, **L** krumlinjede
(ortogonale) koordinater, **M** potensialstrøm ved superposisjon (kilde/sluk/
dipol/virvel), **N** gradient, retningsderivert og enhetsnormal, **O** teori-
utledninger (kontinuitet, varmeledning, veiuavhengighet av φ, ekviskalar-
ortogonalitet). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

**Aktiveringsmarkør for MAT1110-forkunnskaper:** parallellboka er skjelett, ikke
bygget. Referanser til den skrives som klartekst med markøren *(MAT1110 —
parallellbok, ikke bygget ennå; aktiver `/mek1100/…`→`/mat1110/<id>`-lenke
når den finnes)*. Referanser til R2/S2/R1/1T (bygde bøker) lenkes normalt — kun
til kapitler som finnes (verifisert: `r2-5-1`, `r2-5-3`, `r2-5-4`, `r2-2-4`,
`r2-3-6`, `s2-2-2`, `s2-2-3`, `r1-4-6`, `1t-3-1`).

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: den stabile 10×10-malen og de fem ryggradene

- **id:** `mek1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MEK1100: to prøver, den stabile 10-delspørsmåls-malen, de fem ryggradene som bærer >90 % av poengene, sensorreglene og lesestrategien som styrer hele boka — med det ærlige forbeholdet om at arkivet stopper i 2018.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (25 sett, 17 fasiter). Skal gjengi: (i) vurderingsformen: **midtsemestereksamen (25 %)** + **avsluttende skriftlig (75 %)** + to obligatoriske innleveringer som må godkjennes; hjelpemidler = Rottmann-formelsamling + kalkulator, og fra 2009 et vedlagt **formeltillegg (2 sider)** med operatorer i kartesiske/sylinder-/kulekoordinater, materialderivert, integralsatser og ψ–φ-relasjoner; (ii) **formathistorikken**: løsere 3–4-oppgavers form med 3 timer (2004–2008, uten formeltillegg — formlene sto i oppgaveteksten), eksplisitt prosentvekt (2009–2010), og den stabile normen fra 2011: **10 delspørsmål à 0–10 poeng, maks 100, 4 timer**, 3–5 fysisk innkledde hovedoppgaver med kjedede delpunkter; (iii) **de fem ryggradene** med frekvens: strømfunksjon/potensial ψ/φ (96 %, åpner nesten hvert sett), divergens/virvling (80 %), strømlinjer/stagnasjon/skisse (76 %), Bernoulli (76 %), varmefluks/Fourier (64 %), pluss integralsatsene Stokes/Gauss (60 % hver) og dimensjonsanalyse (60 %); (iv) karakterskillene (se under); (v) det ærlige forbeholdet: **arkivet stopper V2018** (8-årig gap), **ingen midtsemestereksamener** finnes, superposisjons-katalogen er fallende, Euler er stigende.
- **Innholdskontrakt:** Sjangerkatalogen **A–O** presenteres som studentens sjekkliste med frekvens per sjanger; **prognosen for neste sett** (den stabile 2011–2018-malen): **O1** et 2D-felt → divergens/virvling + ψ og φ (eksistens + finn) + strømlinjer/stagnasjon/skisse; **O2** en integralsats — sirkulasjon via Stokes eller fluks via Gauss, gjerne «to veier», evt. parametrisert flate; **O3** et varmeproblem — Fouriers lov + enheter + ∂T/∂t-fortegn, eller radiell ledning i sylinder/kule; **O4** trykk — Bernoulli (hevert/rør) eller Euler (roterende/virvlet væske) + fri overflate + kavitasjons-/kraftdiskusjon; **innimellom** krumlinjede koordinater eller en teoriutledning. Karakterskillene: bestått ≈ de mekaniske delpunktene ($\nabla\cdot\mathbf v$, $\nabla\times\mathbf v$, ψ/φ ved antiderivasjon, ett enkelt flate-/kurveintegral, Fouriers lov, Bernoulli mellom to punkter); midtsjikt ≈ + eksistensbegrunnelse, strømlinjer *gjennom* stagnasjonspunkt med skisse og retningspiler, Stokes/Gauss med riktig orientering, dimensjonskontroll, radiell varmeledning med randkrav; toppsjikt ≈ **velge riktig trykklikning (Bernoulli vs. Euler)**, fri-overflate-problemer, superposisjon + dividing streamline, kavitasjons-/gyldighetsdiskusjon, og å utnytte **delpunkt-koblingene** (Gauss på en alt utregnet fluks, gjenbruk av ψ/trykk). Leseplan: Del 1–4 (+ start Del 5) bærer midtsemester; Del 4–6 bærer den avsluttende.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «O2 ber deg regne sirkulasjonen både direkte og med Stokes — hvorfor er dét selve poenget, og hva sjekker sensor?» og «feltet i O4 er virvlet — forklar hvorfor Bernoulli da *ikke* gjelder på tvers av strømlinjene, og hva du bruker i stedet».
- **Typiske feil:** Metafeilene: lese lineært i pensumrekkefølge uten å prioritere de fem ryggradene; nedprioritere eksistensbegrunnelsen og navngivningen fordi «det bare er regning» (sensor krever begge); bruke for lang tid på skisser og elementærfelt og miste de dyre trykk-/integralsats-punktene; anta at superposisjons-katalogen er like tung som før 2012.
- **Quiz: 12 · Flashcards: 15** (frekvenser, malen, de fem ryggradene, sensorreglene, tidsbudsjett)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Vektoranalyse-broen: felt, operatorer og koordinater

#### Kapittel 1.1: Skalar- og vektorfelt: gradient, retningsderivert og enhetsnormal

- **id:** `mek1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Feltbegrepet friskes opp fra MAT1110: skalar- og vektorfelt, feltlinjer, nivåflater, gradient og retningsderivert — pluss «myggen mot varmere/kaldere» og enhetsnormalen til en nivåflate, som er egne eksamenssjangre.
- **Forkunnskaper (kryssbok):** Gradient og retningsderivert *(MAT1110 kap. 2.1 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)* **forutsettes kjent** og repeteres kompakt. [Skalarproduktet](/r2/r2-5-3) (retningsderivert som prikkprodukt) og [Vektorer i tre dimensjoner](/r2/r2-5-1).
- **Eksamensbelegg:** Grunnverktøyet, men også to selvstendige sjangre: **gradient/retningsderivert** (sjanger N, 6/25 = 24 %, «terreng», «myggen mot varmere/kaldere» V2012–V2014/H2012) og **enhetsnormal til nivåflate** $\mathbf n = \nabla f/|\nabla f|$ (5/25 = 20 %, V2010/H2011). Fasit finnes. Prioritet: **kunne** (bro + sjanger N).
- **Innholdskontrakt:** Skalarfelt $f(\mathbf r)$ og vektorfelt $\mathbf v(\mathbf r)$; **feltlinjer** (tangent til $\mathbf v$) og **nivåflater/ekviskalarflater** ($f = C$); **gradient** $\nabla f$ satt sammen og evaluert; **retningsderivert** $\nabla f\cdot\hat{\mathbf u}$ og at $\nabla f$ peker i retning av raskest vekst (kort repetisjon — forutsatt fra MAT1110); «myggen»-tolkningen: fly langs $+\nabla T$ mot varmere, $-\nabla T$ mot kaldere; **enhetsnormal til nivåflate** $\mathbf n = \nabla f/|\nabla f|$ og at $\nabla f \perp$ nivåflaten (påstanden vises i kap. 3.3); geometrisk tolkning i 2D (nivåkurver) og 3D (nivåflater). Fysisk innkledning: temperaturfelt over et terreng, konsentrasjonsfelt.
- **Oppgavesjangre:** N. Mønstereksempel: «Temperaturen i et rom er $T(x,y,z) = 20 + 3x^2 - yz$ (°C, meter). En mygg i punktet $(1,2,1)$ vil raskest mot varmere luft — i hvilken retning flyr den, og hvor fort stiger temperaturen per meter langs den veien?» Enhetsnormal: «Finn enhetsnormalen til flaten $x^2 + 2y^2 + z^2 = 6$ i punktet $(1,1,\sqrt{3})$.»
- **Typiske feil:** Fly langs $-\nabla T$ for å komme til varmere (fortegnet forveksles); forveksle retningsderivert (skalar) med gradient (vektor); glemme å normere $\hat{\mathbf u}$ før prikkproduktet; regne enhetsnormal fra feil funksjon (bruk $f$ selv, ikke en omskrevet form).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Parametrisering av kurver og flater; sirkulasjon og fluks som integraler

- **id:** `mek1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-1-1`
- **kapitteltype:** teori
- **description:** Broen til alle integraloppgaver: parametriser kurver og flater, regn det fundamentale vektorproduktet r_u × r_v, og sett opp sirkulasjon Γ = ∮v·dr og (volum)fluks Q = ∫v·n dσ med riktig fortegn på normalen.
- **Forkunnskaper (kryssbok):** Parametrisering, linje- og flateintegral *(MAT1110 kap. 5.1 og 5.3 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)* **forutsettes kjent**. [Kryssproduktet](/r2/r2-5-4), [Vektorer i tre dimensjoner](/r2/r2-5-1) og [Bestemt integral](/r2/r2-2-4).
- **Eksamensbelegg:** Grunnverktøyet for sjanger D/E/F (Stokes/Gauss/direkte flateintegral) — inngår i 60 % av settene. **Fluks ved direkte flateintegral** (sjanger F) er selvstendig i V2009 O2, V2010 O1d, H2006, H2009 O3c. Fasiten regner $\mathbf r_u\times\mathbf r_v$ hver gang og sjekker retningen; sylinderkoordinater brukes fullt ut for rør-/kjegleflater. **Sjekk benevning** ($\mathrm{m^3/s}$ for volumfluks). Prioritet: **kunne** (grunnlag for perfekt-sjangre).
- **Forkunnskaper/notat:** Buelengde $L = \int_a^b|\mathbf r'(t)|\,dt$ (formelsamlingen) tas med som repetisjon.
- **Innholdskontrakt:** Parametrisering av **kurver** $\mathbf r(t)$ (hastighet $\mathbf r'(t)$, fart $|\mathbf r'(t)|$, buelengde); parametrisering av **flater** $\mathbf r(u,v)$; **det fundamentale vektorproduktet** $\mathbf r_u\times\mathbf r_v$ som normalvektor; flateelement $d\sigma = |\mathbf r_u\times\mathbf r_v|\,du\,dv$; enhetsnormal $\mathbf n = \pm(\mathbf r_u\times\mathbf r_v)/|\mathbf r_u\times\mathbf r_v|$ og **valg av fortegn** etter oppgitt orientering («ut av røret», $\mathbf n\cdot\mathbf k > 0$); **sirkulasjon** $\Gamma = \oint_C\mathbf v\cdot d\mathbf r = \int\mathbf v(\mathbf r(t))\cdot\mathbf r'(t)\,dt$; **fluks/volumfluks** $Q = \int_S\mathbf v\cdot\mathbf n\,d\sigma = \iint\mathbf v\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv$; standardparametriseringer (plan skive, sylinderflate, kule, kjegle, graf $z = g(x,y)$) — mange i sylinderkoordinater; benevningskontroll på fluks. Bro: dette gjenbrukes i Stokes (3.1), Gauss (3.2) og trykkraft-integralet (5.4).
- **Oppgavesjangre:** F (+ grunnlag D/E). Mønstereksempel: «Vann strømmer med hastighetsfeltet $\mathbf v = (0,0,z)\ \mathrm{m/s}$ opp gjennom et rør. Regn volumfluksen $\mathrm{m^3/s}$ oppover gjennom sirkelskiva $x^2+y^2\le 4$ i planet $z = 3$, og kontroller benevningen.»
- **Typiske feil:** Feil rekkefølge i $\mathbf r_u\times\mathbf r_v$ (motsatt normalretning); ikke sjekke om normalen peker som oppgaven krever; glemme absoluttverdi i $d\sigma = |\ldots|\,du\,dv$ (men *ikke* i fluks, der fortegnet betyr noe); feil domene for $(u,v)$; glemme benevningskontroll.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: Krumlinjede ortogonale koordinater: skaleringsfaktorer og volumelement

- **id:** `mek1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `mek1100-1-2`
- **kapitteltype:** teori
- **description:** Den periodiske «teori-oppgaven»: skaleringsfaktorer h_i = |∂r/∂q_i|, ortogonalitet, høyrehåndssystem og volumelement dτ = h_u h_v h_w du dv dw — verktøyet bak operatorene i sylinder- og kulekoordinater.
- **Forkunnskaper (kryssbok):** Kap. 1.2. Sylinder-/kulekoordinatenes volumelementer *(MAT1110 kap. 4.3 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger L, 5/25 = 20 %, konsentrert 2010–2013: parabolske koordinater (H2010), generelle krumlinjede (V2012, H2013), enkel lineær transformasjon (V2016). Fasit finnes. Prioritet: **kjenne** (breddekrav; underbygger operatorformlene i Del 2).
- **Innholdskontrakt:** Krumlinjet koordinatsystem $(q_u, q_v, q_w)$; **skaleringsfaktorer** $h_i = |\partial\mathbf r/\partial q_i|$; **ortogonalitet** (sjekk $\mathbf i_u\cdot\mathbf i_v = 0$ osv.); **høyrehåndssystem** ($\mathbf i_u\times\mathbf i_v = \mathbf i_w$); **volumelement** $d\tau = h_u h_v h_w\,du\,dv\,dw$ og volum $= \iiint d\tau$; sylinderkoordinater ($h_r = 1, h_\theta = r, h_z = 1 \Rightarrow d\tau = r\,dr\,d\theta\,dz$) og kulekoordinater ($d\tau = r^2\sin\phi\,dr\,d\phi\,d\theta$) som eksempler; hvordan skaleringsfaktorene gir operatorene $\nabla$, $\nabla\cdot$, $\nabla^2$ i disse systemene (bro til Del 2 — formelsamlingens generelle formler); enkel lineær transformasjon som ikke-triviell øvelse.
- **Oppgavesjangre:** L. Mønstereksempel: «Et koordinatsystem er gitt ved $x = uv$, $y = \tfrac12(u^2 - v^2)$. Finn skaleringsfaktorene, vis at systemet er ortogonalt, og skriv opp arealelementet.»
- **Typiske feil:** Glemme å normere basisvektorene før ortogonalitetssjekk; regne volumelementet uten skaleringsfaktorene ($\int du\,dv\,dw$ i stedet for $\int h_u h_v h_w\,\ldots$); feil fortegn/rekkefølge i høyrehåndssjekken; bruke kartesiske operatorer der de krumlinjede kreves.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.4: Dimensjonsanalyse og benevning av feltstørrelser

- **id:** `mek1100-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** `mek1100-1-1`
- **kapitteltype:** teori
- **description:** Det gjennomgående poeng-verktøyet: benevningen til felt, operatorer og konstanter, SI-konsistens, og hvordan du sjekker at sluttsvaret har riktig enhet — noe sensor premierer i 60 % av settene.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2 (feltstørrelsene som skal få benevning). Ingen tung matematikk — konsept og disiplin.
- **Eksamensbelegg:** Dimensjonsanalyse forekom som **egen deloppgave i 15/25 = 60 %**, og fasiten sjekker rutinemessig benevning på sluttsvaret i praktisk talt alle regneoppgaver. Sensor honorerer også ikke-SI-valg så lenge de er konsistente. Prioritet: **kunne** (gjennomgående — brukes i hvert regnekapittel, ikke bare her).
- **Innholdskontrakt:** SI-grunnenheter og deriverte enheter for feltstørrelsene: $\rho\sim\mathrm{kg/m^3}$, $v\sim\mathrm{m/s}$, $p\sim\mathrm{Pa} = \mathrm{N/m^2} = \mathrm{kg/(m\,s^2)}$, $g\sim\mathrm{m/s^2}$, $T\sim\mathrm K$, $k$ (varmeledningstall) $\sim\mathrm{W/(m\,K)}$, $\kappa\sim\mathrm{m^2/s}$, $H$ (varmeflukstetthet) $\sim\mathrm{W/m^2}$; **at $\nabla$ har dimensjon $1/\mathrm m$** (og $\nabla^2\sim 1/\mathrm m^2$) — en klassisk felle; benevning til integraler ($\int v\cdot n\,d\sigma\sim\mathrm{m^3/s}$); **benevning til modellkonstanter** (finn enheten til $\alpha$ i $\mathbf v = \alpha\sqrt z\,\mathbf i$); metoden: sett opp en benevnings-tabell, propager gjennom regningen, verifiser sluttsvaret; SI-konsistens vs. konsistente ikke-SI-valg. Fysisk innkledning: konstanten i et gitt strømnings- eller varmefelt.
- **Oppgavesjangre:** Dimensjonssjanger (inngår i A–K). Mønstereksempel: «I et rør er hastighetsfeltet $\mathbf v = c\,r^2\,\mathbf i_z$. Hastigheten måles i $\mathrm{m/s}$ og $r$ i meter. Hvilken benevning har konstanten $c$, og hvilken benevning får volumfluksen gjennom et tverrsnitt?»
- **Typiske feil:** Glemme at $\nabla$ bidrar med $1/\mathrm m$; oppgi et tallsvar uten benevning når den er etterspurt; sette opp en benevning som ikke går opp og likevel konkludere; tro at ikke-SI-valg er feil (de godtas om de er konsistente).
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Feltderiverte: divergens, virvling og Laplace

#### Kapittel 2.1: Divergens og virvling: koordinatformler, fysisk tolkning og navngivning

- **id:** `mek1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-1-3`
- **kapitteltype:** teori
- **description:** Ryggrad nummer to (80 %): regn ∇·v og ∇×v i kartesiske, sylinder- og kulekoordinater, tolk dem fysisk (kildefri/inkompressibel, virvelfri/rotasjon), og NAVNGI tydelig hva som er hva.
- **Forkunnskaper (kryssbok):** Kap. 1.3 (krumlinjede operatorer). Divergens og curl som operatorer *(MAT1110 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)* **forutsettes**; her ligger tyngden på koordinatformlene, den fysiske tolkningen og navngivningen.
- **Eksamensbelegg:** Sjanger B, **20/25 = 80 %**, praktisk talt fast. Fasitens grep: regn $\nabla\cdot\mathbf v$ og $\nabla\times\mathbf v$ i det koordinatsystemet oppgaven ber om (formeltillegget/Rottmann), og **«navngi tydelig hva som er divergens og hva som er virvling»**. For 2D-felt er virvlingen $(\partial v_y/\partial x - \partial v_x/\partial y)\mathbf k$. Fasiten tolker fysisk: divergensfri = inkompressibel/kildefri; virvelfri = ingen rotasjon av væskeelementer. Fasit finnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Divergens** $\nabla\cdot\mathbf v$ i kartesiske, sylinder- ($\nabla\cdot\mathbf v = (1/r)\,\partial(rv_r)/\partial r + (1/r)\,\partial v_\theta/\partial\theta + \partial v_z/\partial z$) og kulekoordinater; **virvling/curl** $\nabla\times\mathbf v$ (determinantformen i kartesisk; formeltillegget i krumlinjede); 2D-virvlingen som skalar × $\mathbf k$; **fysisk tolkning**: divergens = lokal volumkilde/-sluk per volum (inkompressibel ⇔ $\nabla\cdot\mathbf v = 0$), virvling = dobbelt vinkelhastighet av et væskeelement (virvelfri ⇔ $\nabla\times\mathbf v = \mathbf 0$); **navngivningskravet** eksplisitt; sammenhengen med eksistens av ψ (divergensfri, 2D) og φ (virvelfri) — bro til Del 4; identiteter $\nabla\cdot(\nabla\times\mathbf v) = 0$ og $\nabla\times(\nabla f) = \mathbf 0$ (kjennskap). Fysisk innkledning: strømningsfelt i en elv/et rør, roterende felt (karusell).
- **Oppgavesjangre:** B. Mønstereksempel: «Et strømningsfelt er $\mathbf v = (xy^2, -x^2 y, 0)$. Regn divergensen og virvlingen, navngi tydelig hva som er hva, og avgjør om strømmen er inkompressibel og/eller virvelfri.»
- **Typiske feil:** Bruke kartesisk $\nabla\cdot$ eller $\nabla^2$ i sylinder-/kulekoordinater i stedet for de vekttunge formlene med $1/r$; regnefeil i determinanten for curl; **ikke navngi** hvilket resultat som er divergens og hvilket som er virvling (poeng trekkes selv om regningen stemmer); forveksle eksistensbetingelsene (se 4.1).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.2: Laplace-operatoren, harmoniske felt og ekviskalar-ortogonalitet

- **id:** `mek1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `mek1100-2-1`
- **kapitteltype:** teori
- **description:** ∇²φ = 0: hvorfor potensialstrøm er Laplaceisk, hva et harmonisk felt er, og at ekviskalarkurvene til φ og ψ står normalt på hverandre — en tilbakevendende teori-oppgave.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (div/curl). Laplace-operatoren som $\nabla\cdot\nabla$.
- **Eksamensbelegg:** Laplace-likninga eksplisitt (Laplaceisk felt / punktkilde) 6/25 = 24 %; at **ekviskalarkurvene til φ og ψ står normalt** (sjanger O) er en klassisk vis-oppgave i eldre sett (V2004/V2005/H2004/V2011/H2010/H2012, 6/25). Fasit finnes. Prioritet: **kunne** (bro til Del 4; teori-oppgave).
- **Innholdskontrakt:** **Laplace-operatoren** $\nabla^2 f = \nabla\cdot(\nabla f)$ i kartesiske, sylinder- og kulekoordinater; **harmonisk felt** ($\nabla^2 f = 0$); **potensialstrøm ⇒ $\nabla^2\varphi = 0$** (virvelfri gir φ, divergensfri gir $\nabla\cdot\nabla\varphi = \nabla^2\varphi = 0$) — kobler eksistensdualiteten til Laplace; **at strømlinjer ($\psi = $ konst) og ekvipotensialer ($\varphi = $ konst) står normalt** på hverandre, vist via $\nabla\varphi\cdot\nabla\psi = 0$ fra ψ–φ-relasjonene (Cauchy–Riemann-lignende); punktkilde/-virvel som Laplaceiske løsninger (bro til 4.3); randverdiproblem-idé (kjennskap). Fysisk innkledning: potensialstrøm rundt et legeme, temperaturfordeling i stasjonær tilstand.
- **Oppgavesjangre:** O + B-variant. Mønstereksempel: «For et 2D potensialstrømfelt med potensial φ og strømfunksjon ψ, vis at ekvipotensialene og strømlinjene skjærer hverandre normalt, og at både φ og ψ er harmoniske.»
- **Typiske feil:** Bruke kartesisk $\nabla^2$ i krumlinjede koordinater; hevde $\nabla^2\varphi = 0$ uten å begrunne via eksistensbetingelsene; feil i ortogonalitetsargumentet (glemme at $\nabla\varphi\cdot\nabla\psi = 0$ følger av relasjonene); blande sammen «harmonisk» og «konservativt».
- **Quiz: 18 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Integralsatsene: Green, Gauss og Stokes *(prioritet: PERFEKT)*

#### Kapittel 3.1: Sirkulasjon og Stokes' teorem

- **id:** `mek1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-2-1`, `mek1100-1-2`
- **kapitteltype:** teori
- **description:** ∮v·dr = ∬(∇×v)·n dσ: regn sirkulasjonen både direkte som kurveintegral og via Stokes, med riktig orientering (høyrehåndsregel) — og navngi teoremet.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (virvling), 1.2 (parametrisering, sirkulasjon). Stokes' teorem *(MAT1110 kap. 5.5 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger D, **15/25 = 60 %**. Fasitens faste grep: regn $\nabla\times\mathbf v$, velg en enkel flate $S$ med $C$ som rand (typisk plan skive med $\mathbf n = \mathbf k$), og reduser flateintegralet — ofte til $(\nabla\times\mathbf v)\cdot\mathbf n\times$ areal når virvlingen er konstant (H2008: $-2\times\pi r^2$). Krever **navngi «Stokes' sats»** og **kontroller orientering** (høyrehåndsregel $\mathbf n\leftrightarrow C$). Ofte bes studenten regne **både** direkte og via Stokes. Fasit finnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sirkulasjon** $\Gamma = \oint_C\mathbf v\cdot d\mathbf r$; **Stokes' teorem** $\oint_C\mathbf v\cdot d\mathbf r = \iint_S(\nabla\times\mathbf v)\cdot\mathbf n\,d\sigma$ (teoremet **navngis**); valg av **enklest mulige randflate** $S$ med $C$ som rand; **orienteringen** (høyrehåndsregel: $\mathbf n$ og $C$ henger sammen; bytt fortegn ved feil retning); forenklingen når $\nabla\times\mathbf v$ er konstant (virvling × areal); **«regn to veier»**: direkte kurveintegral (parametriser $C$) *og* via Stokes, bekreft samme svar; sirkulasjon som mål på netto rotasjon langs randen; virvelfritt felt ⇒ $\Gamma = 0$ langs lukket kurve. Fysisk innkledning: sirkulasjon rundt en virvel, langs randen av en roterende kopp.
- **Oppgavesjangre:** D. Mønstereksempel: «Feltet $\mathbf v = (-y, x, 0)\ \mathrm{m/s}$ beskriver en roterende væske. La $C$ være sirkelen $x^2+y^2 = 4$ i planet $z = 0$, orientert mot klokka. Regn sirkulasjonen $\oint_C\mathbf v\cdot d\mathbf r$ både direkte og med Stokes' sats, og bekreft at svarene stemmer.»
- **Typiske feil:** Feil orientering ($\mathbf n$ og $C$ bryter høyrehåndsregelen ⇒ fortegnsfeil); ikke navngi teoremet; regne kurveintegralet direkte når Stokes er mye enklere (eller motsatt der oppgaven ber om begge); glemme å parametrisere $C$ riktig i den direkte veien; feil i $\nabla\times\mathbf v$.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 3.2: Fluks og Gauss' divergensteorem

- **id:** `mek1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-2-1`, `mek1100-1-2`
- **kapitteltype:** teori
- **description:** ∯v·n dσ = ∭∇·v dτ: finn fluks gjennom en krum delflate ved å ta volumintegralet av divergensen og trekke fra den plane delen — med alle normaler pekende UT av volumet.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (divergens), 1.2 (fluks, parametrisering). Gauss' divergensteorem *(MAT1110 kap. 5.4 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger E, **15/25 = 60 %**. Fasitens signaturgrep: regn fluks gjennom en **krum delflate** ved $q_\text{krum} = \iiint_V\nabla\cdot\mathbf v\,d\tau - q_\text{plan}$ (H2009 O3d, H2006, H2012 O3, V2010 O1d). **Alle $\mathbf n$ må peke ut av $V$** — fasiten bytter eksplisitt fortegn på delflaten der $\mathbf n$ pekte innover. For lukket flate om et kildefritt felt er fluksen 0 uansett form (V2007/V2008: «hvorfor blir svaret uavhengig av sentrum?»). Fasit finnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fluks** $Q = \oiint_{\partial V}\mathbf v\cdot\mathbf n\,d\sigma$; **Gauss' divergensteorem** $\oiint_{\partial V}\mathbf v\cdot\mathbf n\,d\sigma = \iiint_V\nabla\cdot\mathbf v\,d\tau$ (utadrettet normal på hele randen; teoremet **navngis**); hovedbruken: **fluks gjennom en krum delflate** ved å dele randen $\partial V = S_\text{krum}\cup S_\text{plan}$ og løse $q_\text{krum} = \iiint_V\nabla\cdot\mathbf v\,d\tau - q_\text{plan}$ (den plane regnet med snarveien fra 1.2); **normalretningskontroll** på begge delflatene (ut av $V$ — fortegnsbytte gjøres synlig); forenklingen når $\nabla\cdot\mathbf v$ er konstant (divergens × volum); kildefritt felt ($\nabla\cdot\mathbf v = 0$) ⇒ null netto fluks gjennom enhver lukket flate (formuavhengighet — forklar hvorfor); «regn to veier» (direkte flateintegral vs. Gauss). Fysisk innkledning: massefluks ut av en boks, volumfluks gjennom en rørkjegle.
- **Oppgavesjangre:** E (+ F). Mønstereksempel: «Feltet $\mathbf v = (x, y, 2z)\ \mathrm{m/s}$. La $V$ være halvkula $x^2+y^2+z^2\le 9$, $z\ge 0$. Regn volumfluksen ut gjennom den krumme kuleflaten ved å bruke Gauss' divergensteorem og trekke fra fluksen gjennom bunnskiva $z = 0$.»
- **Typiske feil:** **Feil normalretning** ($\mathbf n$ innover i stedet for ut av $V$ ⇒ fortegnsfeil som forplanter seg); ikke navngi teoremet; regne den krumme flaten direkte (tungt) i stedet for via volumintegral minus den plane; regnefeil i $\nabla\cdot\mathbf v$; ikke se at et kildefritt felt gir null fluks uansett form.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 3.3: Greens teorem i planet og teoriutledningene (kontinuitet, veiuavhengighet)

- **id:** `mek1100-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `mek1100-3-1`, `mek1100-3-2`
- **kapitteltype:** teori
- **description:** Greens teorem som 2D-spesialtilfelle av Stokes, og de faste teoriutledningene sensor ber om: utled kontinuitetslikninga fra massebevaring (Gauss), og vis at hastighetspotensialet er veiuavhengig for virvelfrie felt (Stokes).
- **Forkunnskaper (kryssbok):** Kap. 3.1–3.2 (Stokes, Gauss). Greens teorem *(MAT1110 kap. 5.2 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Greens teorem inngår som 2D-Stokes gjennom hele arkivet. **Teoriutledningene** (sjanger O) forekommer ~5/25: utled **kontinuitetslikninga** (H2008), **vis at φ er veiuavhengig** for virvelfritt felt via Stokes (H2009 O2), **vis at $\nabla f\perp$ nivåflate** (V2010). Disse krever ryddig navngivning av teoremer og forutsetninger. Fasit finnes. Prioritet: **kunne** (utledninger + Green som fellesramme).
- **Innholdskontrakt:** **Greens teorem** $\oint_C(P\,dx + Q\,dy) = \iint_A(\partial Q/\partial x - \partial P/\partial y)\,dA$ som planspesialtilfelle av Stokes; areal via Green $A = \oint x\,dy = -\oint y\,dx$ (kjennskap); **utledning av kontinuitetslikninga**: $\partial/\partial t\iiint_V\rho\,d\tau = -\oiint_{\partial V}\rho\mathbf v\cdot\mathbf n\,d\sigma$, bruk Gauss ⇒ $\partial\rho/\partial t + \nabla\cdot(\rho\mathbf v) = 0$ (navngi Gauss; bro til 5.2); **veiuavhengighet av φ**: for virvelfritt felt ($\nabla\times\mathbf v = \mathbf 0$) er $\oint\mathbf v\cdot d\mathbf r = 0$ via Stokes, derfor er $\int_A^B\mathbf v\cdot d\mathbf r$ uavhengig av vei, og $\varphi(B) - \varphi(A)$ veldefinert; **vis $\nabla f\perp$ nivåflate** (fra 1.1, formaliseres her); disiplinen: hvert utledningstrinn navngir teoremet og forutsetningen det bruker. Fysisk innkledning: massebevaring i et kontrollvolum.
- **Oppgavesjangre:** O. Mønstereksempel: «Utled kontinuitetslikninga $\partial\rho/\partial t + \nabla\cdot(\rho\mathbf v) = 0$ fra massebevaring i et fast kontrollvolum, og navngi teoremet du bruker.» Og: «Vis at et virvelfritt hastighetsfelt har et veiuavhengig linjeintegral, slik at hastighetspotensialet φ er veldefinert.»
- **Typiske feil:** Utlede uten å navngi teoremet (Gauss/Stokes) og forutsetningen; feil fortegn i $\partial Q/\partial x - \partial P/\partial y$; bruke Green på ikke-lukket kurve; hoppe over virvelfri-forutsetningen i veiuavhengighetsargumentet; blande «konservativt» og «divergensfritt».
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: Drill: integralsatsene — regn to veier og bekreft

- **id:** `mek1100-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `mek1100-3-3`
- **kapitteltype:** drill
- **description:** Hele integralsats-repertoaret på eksamensnivå: sirkulasjon via Stokes, fluks via Gauss, krum delflate via ∭∇·v − q_plan, direkte flateintegral, og «regn to veier og bekreft» — med orienterings- og fortegnskontroll hver gang.
- **Eksamensbelegg:** Dekker sjanger D (60 %) + E (60 %) + F samlet, typisk O2 i settene. Variantkatalogen: sirkulasjon Stokes vs. direkte, fluks Gauss vs. direkte, krum delflate via volumintegral minus plan del, kildefritt felt gir null fluks, benevningskontroll. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) hva spørres — sirkulasjon eller fluks? (2) navngi teoremet (Stokes for sirkulasjon, Gauss for fluks); (3) regn $\nabla\times\mathbf v$ hhv. $\nabla\cdot\mathbf v$; (4) velg enklest flate/volum og **fastsett normalretningen** (høyrehåndsregel / ut av $V$); (5) reduser integralet (konstant virvling/divergens × areal/volum; krum delflate = volumintegral − plan del); (6) **bekreft med den andre veien** når oppgaven ber om det; (7) kontroller benevning. Gjennomregnet eksamenscase (både Stokes «to veier» og et Gauss krum-delflate-case) med sensor-margnotater om orienteringspoengene, teoremnavngivningen og fortegnsbyttet der $\mathbf n$ snus. 10–15 oppgaver på eksamensnivå: minst én Stokes «to veier», én Gauss krum delflate, én direkte flateintegral (parametrisering), én kildefritt-felt-formuavhengighet.
- **Oppgavesjangre:** D + E + F. Mønstereksempel: «Feltet $\mathbf v = (2y, -2x, z^2)$. (a) Regn sirkulasjonen langs randen av skiva $x^2+y^2\le 1$, $z = 0$ (mot klokka) — direkte og med Stokes. (b) La $V$ være sylinderen $x^2+y^2\le 1$, $0\le z\le 2$. Regn fluksen ut gjennom sideflaten via Gauss, ved å trekke topp- og bunnflaten fra volumintegralet.»
- **Typiske feil:** Hele orienterings-/fortegnsfellekatalogen fra 3.1–3.2 under tidspress; regne den tunge veien når teoremet gir en snarvei; ikke gjøre fortegnsbyttet synlig der $\mathbf n$ snus; glemme benevning; ikke bekrefte med den andre veien når det er selve oppgaven.
- **Quiz: 20 · Flashcards: 5**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Strømfunksjon ψ og hastighetspotensial φ *(prioritet: PERFEKT — bokens absolutte kjerne, 96 %)*

#### Kapittel 4.1: Eksistensbetingelser og bestemmelse av φ og ψ ved antiderivasjon

- **id:** `mek1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `mek1100-2-2`
- **kapitteltype:** teori
- **description:** Kjernen i hele emnet (96 %): slå FØRST fast eksistensbetingelsene (φ ⇔ virvelfri, ψ ⇔ divergensfri 2D) og navngi dem, finn så φ og ψ ved antiderivasjon fra relasjonene, i kartesiske og polare koordinater.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (div/virvling — betingelsene), 2.2 (Laplace, potensialstrøm). Konservativt felt/potensial *(MAT1110 — parallellbok, ikke bygget ennå; aktiver lenke når den finnes)* er samme idé som φ.
- **Eksamensbelegg:** Sjanger A, **24/25 = 96 %** — praktisk talt garantert, oftest O1. Fasitens grep: **oppgi eksistensbetingelsen først** («feltet er divergensfritt og todimensjonalt, derfor finnes en strømfunksjon» / «feltet er ikke virvelfritt, derfor finnes ikke et potensial», V2016 3c), integrer så den ene relasjonen, sett inn i den andre for å finne integrasjons«konstanten» $F(y)$, og bemerk at **den frie konstanten kan velges lik null**. Fasit finnes. Prioritet: **perfekt** — bokens absolutte kjerne.
- **Innholdskontrakt:** **Eksistensbetingelsene** (navngis): $φ$ finnes ⇔ $\nabla\times\mathbf v = \mathbf 0$ (virvelfritt/konservativt); $ψ$ finnes ⇔ $\nabla\cdot\mathbf v = 0$ (divergensfritt) og **2D**; begge ⇒ potensialstrøm, $\nabla^2\varphi = 0$; **ψ–φ-relasjonene** kartesisk ($v_x = \partial\varphi/\partial x = \partial\psi/\partial y$, $v_y = \partial\varphi/\partial y = -\partial\psi/\partial x$) og polart ($v_r = \partial\varphi/\partial r = (1/r)\,\partial\psi/\partial\theta$, $v_\theta = (1/r)\,\partial\varphi/\partial\theta = -\partial\psi/\partial r$); **antiderivasjonsmetoden**: integrer én relasjon (får en «konstant» $F$ av den andre variabelen), deriver mot den andre variabelen og sammenlign for å bestemme $F$, sett $+C = 0$; **fortegns-/konstantfrihet** (konsistent valg godtas); det fysiske: $ψ$-differansen mellom to strømlinjer = volumfluks mellom dem. Fysisk innkledning: gitt hastighetsfelt i en elv/rundt et legeme.
- **Oppgavesjangre:** A. Mønstereksempel: «Et 2D strømningsfelt er $\mathbf v = (xy^2 - x,\ -x^2 y + y)$. Undersøk om feltet har en strømfunksjon og et hastighetspotensial — begrunn med eksistensbetingelsene — og finn dem der de finnes.»
- **Typiske feil:** **Forveksle eksistensbetingelsene** (hevde φ finnes for et virvlet felt, eller ψ uten divergensfrihet — den vanligste konseptuelle feilen); fortegnsfeil i ψ-relasjonene ($v_r = (1/r)\partial\psi/\partial\theta$, $v_\theta = -\partial\psi/\partial r$ byttes); glemme å bestemme integrasjons«konstanten» $F$ ved å bruke den andre relasjonen; **glemme å navngi/begrunne eksistensen** (poeng trekkes selv om funksjonen er riktig).
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 4.2: Strømlinjer, ekvipotensialer, stagnasjons- og singulære punkter, skisse

- **id:** `mek1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-4-1`
- **kapitteltype:** teori
- **description:** Finn stagnasjonspunkter (v = 0) og singulære punkter (|v| → ∞), tegn strømlinjene som nivåkurver til ψ — særlig gjennom stagnasjonspunktet — og lag en skisse med retningspiler slik fasiten forventer.
- **Forkunnskaper (kryssbok):** Kap. 4.1 (ψ og strømlinjer = $ψ = $ konst). [Funksjonsdrøfting](/r1/r1-4-6) (nivåkurve-/skisse-intuisjon).
- **Eksamensbelegg:** Sjanger C, **19/25 = 76 %**. Fasitens grep: stagnasjonspunkt = løs $\mathbf v = \mathbf 0$ (begge komponenter); singulært punkt = der $|\mathbf v|\to\infty$; strømlinjer = nivåkurver $ψ = $ konst (eller integrer $dy/dx = v_y/v_x$); finn spesielt **strømlinjen gjennom stagnasjonspunktet** ($ψ = ψ_\text{stagn}$, faktoriser). Skissen skal ha $\bullet$ for stagnasjonspunkt, heltrukne strømlinjer, stiplede ekvipotensialer, og **retningspiler** (fortegnet til en hastighetskomponent i hver kvadrant). Fasit finnes (med figur). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Strømlinjer** = nivåkurver $\psi = $ konst (eller løsning av $dy/dx = v_y/v_x$); **ekvipotensialer** = $\varphi = $ konst (står normalt på strømlinjene, fra 2.2); **stagnasjonspunkt**: $\mathbf v = \mathbf 0$ (løs begge komponenter samtidig); **singulært punkt**: $|\mathbf v|\to\infty$ (der modellen bryter sammen); **strømlinjen gjennom stagnasjonspunktet** (sett $\psi = \psi_\text{stagn}$ og faktoriser — ofte todeling/greining); **skissekonvensjonen** (heltrukne strømlinjer, stiplede ekvipotensialer, $\bullet$ for stagnasjon, **retningspiler** bestemt fra komponentfortegn per kvadrant); volumfluks mellom to strømlinjer som ψ-differanse (fra 4.1). **Feltskisse i ord** (siden boka beskriver figurer verbalt): forklar hvordan skissen skal se ut region for region. Fysisk innkledning: strøm forbi et hinder, sammenløp av to strømmer.
- **Oppgavesjangre:** C. Mønstereksempel: «Strømfunksjonen er $\psi = y(x^2 - 1)$ (elv forbi et hinder). Finn stagnasjonspunktene, bestem og beskriv strømlinjen gjennom dem, og skisser strømlinjebildet med retningspiler.»
- **Typiske feil:** Finne bare den ene hastighetskomponenten lik null (må ha begge for stagnasjon); forveksle stagnasjons- og singulært punkt; tegne strømlinjer uten retningspiler (fasit krever retning); glemme strømlinjen *gjennom* stagnasjonspunktet (der de dyreste poengene ligger); stiple/heltrekke feil kurvefamilie.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.3: Elementær potensialstrøm ved superposisjon: kilde, sluk, dipol og virvel

- **id:** `mek1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-4-2`
- **kapitteltype:** teori
- **description:** Den eldre signaturoppgaven (fallende — beredskap): gjenkjenn og NAVNGI elementærstrømmene (uniform strøm, kilde/sluk, dipol, virvel), superponer dem lineært, og finn dividing streamline som gir Rankine-legeme eller strøm forbi en sylinder.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.2 (ψ/φ, strømlinjer, stagnasjon). Ingen ny matematikk — gjenkjenning og superposisjon.
- **Eksamensbelegg:** Sjanger M, **12/25 = 48 %, men konsentrert 2004–2008 (8/9) og fallende etter 2012.** **Ærlig eksamensvinkel:** var signaturoppgaven i eldre sett, men falt kraftig — behandles som **beredskap**, særlig fordi den er tung når den kommer. Delvis fasit (⚠️ metode = faglig standard for de eldste). Prioritet: **kjenne** (beredskap; tung hvis den dukker opp).
- **Innholdskontrakt:** **Elementærstrømmene** (navngis): **uniform strøm** ($\psi = Uy$, $\varphi = Ux$); **kilde/sluk** ($\psi = (A/2\pi)\theta$, $\varphi = (A/2\pi)\ln r$ i 2D; $\varphi = -A/(4\pi r)$ i 3D); **dipol/doublet** ($\psi = -Ua^2 y/(x^2+y^2)$); **virvel** ($\psi = -(\Gamma/2\pi)\ln r$, $\varphi = (\Gamma/2\pi)\theta$); **superposisjon** (lineær — summer ψ og φ); **dividing streamline** ($\psi = \psi_\text{stagn}$) som gir **Rankine-legeme** (kilde + uniform strøm) og **strøm forbi sylinder** ($r = a$ blir strømlinje: uniform + dipol); **kilde ved vegg** via speilbilde (H2007); deretter Bernoulli (kap. 5.3) for trykk-/kraftfordeling (løft på telt/sylinder). Fysisk innkledning: vind forbi en sylinder/et telt, kilde i en strøm. **Eksamensvinkelen sier eksplisitt: dette var 8/9 i 2004–2008 men falt etter 2012 — hold varmt som beredskap.**
- **Oppgavesjangre:** M. Mønstereksempel: «En kilde med styrke $A$ i origo superponeres med en uniform strøm $U$ i $x$-retning. Finn strømfunksjonen, stagnasjonspunktet, og beskriv dividing streamline (Rankine-legemet).»
- **Typiske feil:** Feil ψ/φ for det enkelte elementærfeltet (bytte kilde og virvel); glemme å navngi feltene (sensor ber om navn); regne dividing streamline uten å sette $\psi = \psi_\text{stagn}$; feil speilbilde-plassering ved vegg; bruke for mye tid her på bekostning av trykk-/integralsats-punktene.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.4: Drill: ψ/φ-pakken — eksistens, antiderivasjon, strømlinjer og stagnasjon

- **id:** `mek1100-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `mek1100-4-3`
- **kapitteltype:** drill
- **description:** Bokens kjernesjanger drillet som O1-helheten: navngi eksistensbetingelsene, finn φ og ψ ved antiderivasjon, finn stagnasjons-/singulære punkter, tegn strømlinjene gjennom stagnasjonspunktet med retningspiler — til automatikk.
- **Eksamensbelegg:** Dekker sjanger A (96 %) + C (76 %) samlet — den faste O1-åpningen i nesten hvert sett. Variantkatalogen: eksistens + antiderivasjon (kartesisk og polart), strømlinjer/ekvipotensialer, stagnasjon/singulære punkter, skisse med retning, og koblingen div/virvling → eksistens (fra 2.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) regn $\nabla\cdot\mathbf v$ og $\nabla\times\mathbf v$; (2) **navngi eksistensbetingelsene** og konkluder om φ og/eller ψ finnes; (3) finn dem ved antiderivasjon (integrer én relasjon, bestem $F$ fra den andre, sett $+C = 0$); (4) finn stagnasjonspunkt ($\mathbf v = \mathbf 0$) og singulære punkter ($|\mathbf v|\to\infty$); (5) tegn strømlinjer (nivåkurver $\psi = $ konst), spesielt gjennom stagnasjonspunktet, med retningspiler; (6) sjekk ortogonalitet φ⊥ψ. Gjennomregnet eksamenscase (full O1: felt → div/virvling → eksistens → φ og ψ → stagnasjon → skisse) med sensor-margnotater om eksistensbegrunnelsen, navngivningen, konstantfriheten og retningspilene. 10–15 oppgaver på eksamensnivå: minst én kartesisk, én polar, én der bare *ett* av φ/ψ finnes (virvlet eller ikke-divergensfritt felt), én med full skisse.
- **Oppgavesjangre:** A + C. Mønstereksempel: «Feltet $\mathbf v = (2xy,\ 1 - x^2 + y^2)\ \mathrm{m/s}$. (a) Regn divergens og virvling og avgjør, med navngitte betingelser, om φ og ψ finnes. (b) Finn dem som finnes. (c) Finn stagnasjonspunktene og skisser strømlinjene gjennom dem med retning.»
- **Typiske feil:** Hele fellekatalogen fra 4.1–4.2 under tidspress; forvekslede eksistensbetingelser; fortegnsfeil i ψ-relasjonene; manglende eksistensbegrunnelse; skisse uten retningspiler eller uten strømlinjen gjennom stagnasjonspunktet.
- **Quiz: 20 · Flashcards: 5**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Fluidkinematikk og -dynamikk: Euler, Bernoulli og trykk

#### Kapittel 5.1: Materialderivert og akselerasjon; partikkelbaner

- **id:** `mek1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-2-1`
- **kapitteltype:** teori
- **description:** Akselerasjonen i et strømningsfelt: a = Dv/Dt = ∂v/∂t + (v·∇)v — navngi det lokale (tidslige) og det konvektive (advektive) leddet, regn dem i sylinderkoordinater (sentripetalledd), og finn partikkelbaner ved å integrere dr/dt = v.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (gradient/operatorer). Materialderiverten står i formeltillegget.
- **Eksamensbelegg:** Sjanger J, **11/25 = 44 %**. Fasitens grep: regn ledd for ledd, ofte i sylinderkoordinater (husk $\partial\mathbf i_r/\partial\theta = \mathbf i_\theta$ og $\partial\mathbf i_\theta/\partial\theta = -\mathbf i_r$ ⇒ sentripetalledd); for stasjonære felt er det lokale leddet null. Kan følges av **partikkelbane** (integrer $d\mathbf r/dt = \mathbf v$, H2007/V2009). Fasit finnes. Prioritet: **kunne**.
- **Innholdskontrakt:** **Materialderivert** $D\mathbf v/Dt = \partial\mathbf v/\partial t + (\mathbf v\cdot\nabla)\mathbf v$ (formeltillegget); **navngi leddene**: $\partial\mathbf v/\partial t$ = lokal (tidslig) akselerasjon, $(\mathbf v\cdot\nabla)\mathbf v$ = konvektiv (advektiv) akselerasjon; stasjonært felt ⇒ lokal null, men konvektiv kan være ulik null; **sylinderkoordinat-varianten** med sentripetalbidraget fra $\partial\mathbf i_r/\partial\theta = \mathbf i_\theta$; materialderivert av en generell feltstørrelse ($DT/Dt$ for temperatur — bro til varmelikninga 6.2); **partikkelbaner** ved å integrere $d\mathbf r/dt = \mathbf v(\mathbf r, t)$ (skille bane fra strømlinje — sammenfaller for stasjonære felt); benevningskontroll ($\mathrm{m/s^2}$). Fysisk innkledning: væskepartikkel i en roterende kopp / gjennom en innsnevring.
- **Oppgavesjangre:** J. Mønstereksempel: «Et stasjonært felt i en innsnevring er $\mathbf v = (u_0(1 + x/L),\ -u_0 y/L,\ 0)$. Finn akselerasjonen, navngi det lokale og det konvektive bidraget, og forklar fysisk hvorfor en partikkel akselererer selv om feltet er tidsuavhengig.»
- **Typiske feil:** Anta at akselerasjonen er null fordi feltet er stasjonært (glemmer konvektivt ledd); **glemme sentripetalbidraget** fra $\partial\mathbf i_r/\partial\theta = \mathbf i_\theta$ i sylinderkoordinater; blande partikkelbane og strømlinje for ikke-stasjonære felt; regnefeil i $(\mathbf v\cdot\nabla)\mathbf v$ (komponentvis).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Kontinuitetslikninga: utledning og bruk

- **id:** `mek1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `mek1100-3-3`, `mek1100-5-1`
- **kapitteltype:** teori
- **description:** Massebevaring som feltlikning: utled ∂ρ/∂t + ∇·(ρv) = 0 fra et kontrollvolum via Gauss, reduser til inkompressibelt ∇·v = 0, og bruk den til volumfluks-argumenter.
- **Forkunnskaper (kryssbok):** Kap. 3.3 (Gauss-utledning), 5.1 (materialderivert). Kontinuitetslikninga i formeltillegget.
- **Eksamensbelegg:** Sjanger O (utledning) + bruk, **5/25 = 20 %** (H2008 utledning). Fasiten utleder ryddig med navngitt Gauss og forutsetninger. Prioritet: **kunne** (utledning + kobling til inkompressibilitet).
- **Innholdskontrakt:** **Kontinuitetslikninga** $\partial\rho/\partial t + \nabla\cdot(\rho\mathbf v) = 0$; **utledningen** fra massebevaring i et fast kontrollvolum ($\partial/\partial t\iiint\rho\,d\tau = -\oiint\rho\mathbf v\cdot\mathbf n\,d\sigma$, Gauss ⇒ feltlikninga) — navngi teoremet; **materialderivert-formen** $D\rho/Dt + \rho\nabla\cdot\mathbf v = 0$; **inkompressibelt** ($\rho$ konstant) ⇒ $\nabla\cdot\mathbf v = 0$ (kobler til ψ-eksistens i 2D); bruk: volumfluks bevart gjennom et rør med varierende tverrsnitt ($A_1 v_1 = A_2 v_2$); stasjonær kompressibel strøm ($\nabla\cdot(\rho\mathbf v) = 0$). Fysisk innkledning: strøm gjennom et rør som smalner inn.
- **Oppgavesjangre:** O + bruk. Mønstereksempel: «Vann (inkompressibelt) strømmer stasjonært gjennom et rør som smalner fra tverrsnitt $A_1$ til $A_2$. Bruk kontinuitet til å finne farten $v_2$ når $v_1$ er kjent, og forklar koblingen til $\nabla\cdot\mathbf v = 0$.»
- **Typiske feil:** Utlede uten å navngi Gauss / uten forutsetning om fast kontrollvolum; glemme tidsleddet for kompressible felt; forveksle $\nabla\cdot(\rho\mathbf v)$ og $\rho\nabla\cdot\mathbf v$; anta inkompressibilitet uten grunnlag.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.3: Eulers likning og Bernoullis likning: betingelser og anvendelse

- **id:** `mek1100-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `mek1100-5-1`, `mek1100-4-1`
- **kapitteltype:** teori
- **description:** Trykk i en ideell væske: Eulers likning ρDv/Dt = −∇p + ρg som grunnlag, og Bernoulli p/ρ + ½v² + gz = H₀ med betingelsene skrevet NED hver gang — brukt på hevert, tank og innsnevring, med kavitasjonsgrense.
- **Forkunnskaper (kryssbok):** Kap. 5.1 (materialderivert), 4.1 (virvelfri ⇒ φ, avgjør «overalt»). Euler og Bernoulli i formeltillegget.
- **Eksamensbelegg:** Bernoulli sjanger G, **19/25 = 76 %**; Euler direkte sjanger H, **9/25 = 36 %, stigende**. Fasiten krever **eksplisitte Bernoulli-betingelser** (ideelt/friksjonsfritt, stasjonært, konstant tetthet ⇒ konstant langs strømlinje, overalt hvis virvelfri) og legger en strømlinje mellom to punkter med kjent trykk/fart. Klassiske innkledninger: hevert (maksimal høyde $H\le p_0/(\rho g)$ før kavitasjon), rør med innsnevring, utstrømning/Torricelli $v = \sqrt{2gh}$, trakt, strøm forbi sylinder. Fasit finnes. Prioritet: **perfekt** (Bernoulli) + **kunne** (Euler).
- **Innholdskontrakt:** **Eulers likning** $\rho\,D\mathbf v/Dt = -\nabla p + \rho\mathbf g$ (bevegelseslikninga for ideell væske; grunnlaget); **Bernoullis likning** $p/\rho + \tfrac12 v^2 + gz = H_0$ **utledet fra Euler** langs en strømlinje for stasjonær, inkompressibel, friksjonsfri strøm; **betingelsene skrives ned hver gang** (ideelt/friksjonsfritt fluid, stasjonært, konstant tetthet ⇒ $H_0$ konstant langs strømlinje; **virvelfritt ⇒ $H_0$ samme overalt**); **anvendelsen**: legg en strømlinje mellom to punkter (typisk fri overflate der $v\approx 0$, $p = p_0$, til et tappepunkt/innsnevring); Torricelli $v = \sqrt{2gh}$; **hevert** ($H\le p_0/(\rho g)$ før kavitasjon); **kavitasjons-/gyldighetsgrense** (trykk kan ikke bli negativt/under damptrykket). Fysisk innkledning: hevert som tømmer et akvarium, dyse på en slange, tank med hull.
- **Oppgavesjangre:** G + H. Mønstereksempel: «En hevert tømmer et akvarium. Toppen av heverten ligger en høyde $H$ over vannflata. Skriv opp Bernoulli-betingelsene, finn utstrømningsfarten, og bestem den maksimale $H$ før det oppstår kavitasjon i toppen.»
- **Typiske feil:** **Ikke skrive betingelsene** (eget poeng i mange sett); **bruke Bernoulli på tvers av strømlinjer i et virvlet felt** (konstanten er bare felles overalt hvis feltet er virvelfritt — ellers Euler, se 5.5); feil punktvalg for strømlinja; glemme $gz$-leddet; ikke diskutere kavitasjonsgrensen; regnefeil i $v = \sqrt{2gh}$.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 5.4: Hydrostatisk trykk, trykkraft på flate og fri overflate

- **id:** `mek1100-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-5-3`, `mek1100-3-2`
- **kapitteltype:** teori
- **description:** Hydrostatisk trykk p = p₀ − ρgz, total trykkraft på en flate som kraftintegral (ofte omskrevet til oppdrift via Gauss), og fri overflateform z = η(r) for roterende/strømmende væske fra p = p₀.
- **Forkunnskaper (kryssbok):** Kap. 5.3 (Euler/Bernoulli, trykk), 3.2 (Gauss for kraftintegralet), 1.2 (flateparametrisering). [Volum av omdreiningslegemer](/r2/r2-3-6) (kraft-/volumintegral-intuisjon).
- **Eksamensbelegg:** Trykkraft sjanger K, **8/25 = 32 %**; **fri overflate** $z = \eta(r)$ **6/25 = 24 %, stigende** (roterende/strømmende væske, V2015/V2018). Fasiten omskriver ofte netto trykkraft via Gauss/divergensteoremet til et volumintegral (Arkimedes/oppdrift: H2013 akvarium, H2011 flaskebunn, V2015 kopp). Fasit finnes. Prioritet: **kunne** (bredde + karakterskiller for fri overflate).
- **Innholdskontrakt:** **Hydrostatisk trykk** $p = p_0 - \rho g z$ (evt. $+A$-konstant fra Euler-integrasjon); **total trykkraft på en flate** $\mathbf F = \int_S p\,\mathbf n\,d\sigma$ (eller netto $\int(p_0 - p)\mathbf n\,d\sigma$); **omskriving til volumintegral via Gauss** ($\oiint p\mathbf n\,d\sigma = \iiint\nabla p\,d\tau$) ⇒ **Arkimedes' oppdrift** ($\mathbf F_\text{opp} = \rho g V$); parametrisering av flaten, $\mathbf n\,d\sigma$, integrasjon; **fri overflate** $z = \eta(r)$ fra $p(\mathbf r) = p_0$ på overflaten — for en **roterende væske som fast legeme** ($\mathbf v = \omega r\,\mathbf i_\theta$): integrer Euler i $r$ og $z$ ⇒ $p(r,z)$, sett $p = p_0$ ⇒ paraboloide $\eta(r) = \eta_0 + \omega^2 r^2/(2g)$; gyldighetsdiskusjon. Fysisk innkledning: kraft på en flaskebunn/akvarievegg, overflateform i en roterende kopp.
- **Oppgavesjangre:** K. Mønstereksempel: «En sylindrisk kopp med vann roterer med vinkelhastighet $\omega$ som et fast legeme. Finn trykkfeltet $p(r,z)$ fra Euler, og bestem formen $z = \eta(r)$ på den frie overflaten.» Trykkraft: «Finn den totale trykkraften på bunnen av en fylt flaske med gitt bunnform, og vis oppdriftstolkningen via Gauss.»
- **Typiske feil:** Glemme $p_0$-leddet eller integrasjonskonstanten fra Euler; feil normalretning i kraftintegralet; ikke se oppdrift-omskrivingen via Gauss; feil integrasjon av Euler for roterende væske (glemme $r$-leddet); ikke sette $p = p_0$ for å finne den frie overflaten.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.5: Drill: trykk — Bernoulli eller Euler?

- **id:** `mek1100-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `mek1100-5-4`
- **kapitteltype:** drill
- **description:** Toppkarakter-skilleren drillet: avgjør FØRST om feltet er virvelfritt (Bernoulli overalt), virvelfritt bare langs strømlinjer, eller virvlet (Bernoulli ugyldig på tvers → Euler) — og regn trykket riktig hver gang, med kavitasjons-/gyldighetsdiskusjon.
- **Eksamensbelegg:** Dekker sjanger G (76 %) + H (36 %, stigende) + K samlet, typisk O4. **Den reneste toppkarakter-skilleren i arkivet (V2016 3f):** for et virvlet felt sier Bernoulli ingenting om trykk på tvers av strømlinjene — bruk Euler. Variantkatalogen: hevert/tank/innsnevring (Bernoulli), roterende/virvlet væske (Euler → fri overflate), trykkraft/oppdrift, kavitasjonsgrense. Prioritet: **perfekt** (skille + Bernoulli).
- **Innholdskontrakt:** **Beslutningstre (algoritme):** (1) regn $\nabla\times\mathbf v$; (2) **virvelfritt** ⇒ Bernoulli-konstanten $H_0$ er felles overalt (sammenlign to vilkårlige punkter); (3) **virvelfritt bare stykkevis / langs kjente strømlinjer** ⇒ Bernoulli kun langs samme strømlinje; (4) **virvlet felt** ⇒ Bernoulli ugyldig på tvers ⇒ **integrer Eulers likning** komponentvis for $p$; (5) skriv alltid betingelsene; (6) fri overflate fra $p = p_0$; (7) **diskuter kavitasjon/gyldighet**. Gjennomregnet eksamenscase (kontrastpar: samme geometri, ett virvelfritt (Bernoulli) og ett virvlet (Euler) felt) med sensor-margnotater om at valget av likning er selve karakterskilleren, betingelsene og kavitasjonsgrensen. 10–15 oppgaver på eksamensnivå: minst én hevert (Bernoulli + kavitasjon), én roterende væske (Euler + fri overflate), én der studenten selv må avgjøre Bernoulli vs. Euler, én trykkraft/oppdrift.
- **Oppgavesjangre:** G + H + K. Mønstereksempel: «Et hastighetsfelt over en bunn er $\mathbf v = \alpha\sqrt z\,\mathbf i$. (a) Vis at feltet er virvlet, og forklar hvorfor Bernoulli da ikke kan brukes til å sammenligne trykk på tvers av strømlinjene. (b) Bruk Eulers likning til å finne $p(z)$, og vis at resultatet blir det hydrostatiske $p = p_0 - \rho g z$.»
- **Typiske feil:** **Bruke Bernoulli på tvers av strømlinjer i et virvlet felt** (kjernefeilen skillet handler om); ikke sjekke $\nabla\times\mathbf v$ før valg av likning; utelate betingelsene; glemme kavitasjons-/gyldighetsgrensen; feil komponentvis Euler-integrasjon.
- **Quiz: 20 · Flashcards: 5**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Varmetransport: Fouriers lov og varmeledning

#### Kapittel 6.1: Fouriers lov, varmefluks og dimensjonsanalyse

- **id:** `mek1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `mek1100-1-4`, `mek1100-3-2`
- **kapitteltype:** teori
- **description:** Varme som feltproblem: Fouriers lov H = −k∇T (og ledning + konveksjon), total energistrøm ∫H·n dσ gjennom en flate, og den dimensjonssjekken sensor nesten alltid vil se — definer alle symboler med enheter.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (benevning), 3.2 (fluks-integralet), 1.1 (gradient). Fouriers lov i formeltillegget.
- **Eksamensbelegg:** Sjanger I, **16/25 = 64 %** (varme-blokka er en nesten fast egen oppgave, ofte O3, kombinert med enhetsanalyse og gradient). Fasiten krever at **alle symboler defineres med enheter** og sjekker benevningen på sluttsvaret. Fasit finnes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fouriers lov** $\mathbf H = -k\nabla T$ (ren ledning) og $\mathbf H = \rho c v T - k\nabla T$ (ledning + konveksjon) — **definer alle symboler med enheter** ($k\sim\mathrm{W/(m\,K)}$, $T\sim\mathrm K$, $H\sim\mathrm{W/m^2}$); minustegnet (varme strømmer fra varmt til kaldt, mot gradienten); **total varmefluks/energistrøm** gjennom en flate $\dot Q = \int_S\mathbf H\cdot\mathbf n\,d\sigma$ ($\sim\mathrm W$); koblingen til gradient/«myggen» (fra 1.1); benevningskontroll gjennomgående; retningen på varmefluksen relativt nivåflatene til $T$ (normalt på isotermer). Fysisk innkledning: varmetap gjennom en vegg/et rørskall, en kule som varmes opp.
- **Oppgavesjangre:** I. Mønstereksempel: «Temperaturfeltet i en plate er $T(x,y) = T_0 - \beta x^2$. Finn varmeflukstettheten $\mathbf H$ (definer symbolene med enheter), regn den totale energistrømmen gjennom flaten $x = a$, $0\le y\le b$ (dybde $d$), og kontroller benevningen.»
- **Typiske feil:** Glemme minustegnet i $\mathbf H = -k\nabla T$ (varme mot gradienten); oppgi svar uten benevning; glemme at $\nabla$ bidrar med $1/\mathrm m$; blande varmeflukstetthet ($\mathrm{W/m^2}$) og total energistrøm ($\mathrm W$); utelate konveksjonsleddet der det kreves.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 6.2: Varmeledningslikninga: ∂T/∂t-fortegn og utledning

- **id:** `mek1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `mek1100-6-1`, `mek1100-5-1`
- **kapitteltype:** teori
- **description:** Varmelikninga ∂T/∂t + v·∇T = κ∇²T: avgjør om temperaturen stiger eller synker i et punkt ved å regne fortegnet på ∇²T, og utled likninga fra energibevaring (Gauss).
- **Forkunnskaper (kryssbok):** Kap. 6.1 (Fouriers lov), 5.1 (materialderivert $DT/Dt$), 3.3 (Gauss-utledning). Varmelikninga i formeltillegget.
- **Eksamensbelegg:** Del av sjanger I (64 %); **utled varmeledningslikninga** (sjanger O) 2/25 = 8 % (V2009). ∂T/∂t-fortegnet («stiger eller synker temperaturen ved $t_0$?») er et fast delpunkt. Fasit finnes. Prioritet: **kunne** (fortegnsbestemmelse: perfekt-relevant; utledning: kjenne).
- **Innholdskontrakt:** **Varmeledningslikninga** $\partial T/\partial t + \mathbf v\cdot\nabla T = \kappa\nabla^2 T$ (fast stoff, $\mathbf v = \mathbf 0$: $\partial T/\partial t = \kappa\nabla^2 T$); $\kappa$ = varmediffusivitet ($\sim\mathrm{m^2/s}$); **fortegnsbestemmelse**: regn $\nabla^2 T$ i punktet — positiv Laplace ⇒ temperaturen **stiger** ($\partial T/\partial t > 0$), negativ ⇒ **synker**; materialderivert-formen $DT/Dt = \kappa\nabla^2 T$; **utledning** fra energibevaring i et kontrollvolum ($\rho c\,\partial T/\partial t\iiint = -\oiint\mathbf H\cdot\mathbf n\,d\sigma$, Fourier + Gauss ⇒ feltlikninga — navngi teoremet); stasjonær tilstand ($\partial T/\partial t = 0$ ⇒ $\nabla^2 T = 0$, bro til 6.3). Fysisk innkledning: et punkt inne i et legeme som varmes/kjøles, en oppvarmet kule.
- **Oppgavesjangre:** I + O. Mønstereksempel: «Ved tida $t_0$ er temperaturfeltet i et fast legeme $T = T_0 + a(x^2 + y^2 - 2z^2)$. Avgjør om temperaturen i origo stiger eller synker, og begrunn med varmelikninga.» Utledning: «Utled varmeledningslikninga fra energibevaring, og navngi teoremet.»
- **Typiske feil:** **Regne $\nabla^2 T$-fortegnet feil** og konkludere feil om temperaturen stiger/synker; glemme konveksjonsleddet $\mathbf v\cdot\nabla T$ for strømmende medium; bruke kartesisk $\nabla^2$ i krumlinjede koordinater; utlede uten å navngi Fourier/Gauss.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.3: Radiell stasjonær varmeledning i sylinder og kule

- **id:** `mek1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `mek1100-6-2`, `mek1100-1-3`
- **kapitteltype:** teori
- **description:** Stasjonær radiell ledning: løs ∇²T = 0 i sylinderskall (T = A ln r + B) og kuleskall (T = A/r + B), bestem konstantene fra randkravene, og finn varmestrømmen — et fast varmeproblem.
- **Forkunnskaper (kryssbok):** Kap. 6.2 (stasjonær $\nabla^2 T = 0$), 1.3 (krumlinjede operatorer), 6.1 (Fouriers lov for varmestrøm). [Separable differensiallikninger](/s2/s2-2-2) og [Lineære differensiallikninger](/s2/s2-2-3) (2. ordens radiell ODE).
- **Eksamensbelegg:** Del av sjanger I (64 %). Fasiten: stasjonær radiell ledning i **sylinderskall** ⇒ $T(r) = A\ln r + B$ (V2010/V2012); i **kuleskall** ⇒ $T(r) = A/r + B$ (H2010); randkrav $T(a) = T_a$, $T(b) = T_b$ bestemmer konstantene. Fasit finnes. Prioritet: **kunne** (fast varmeproblem-variant).
- **Innholdskontrakt:** Stasjonær varmeledning $\nabla^2 T = 0$ med **radiell symmetri**; **sylinderskall**: $\nabla^2 T = (1/r)\,d(r\,dT/dr)/dr = 0 \Rightarrow T(r) = A\ln r + B$; **kuleskall**: $\nabla^2 T = (1/r^2)\,d(r^2\,dT/dr)/dr = 0 \Rightarrow T(r) = A/r + B$; **randkravene** $T(a) = T_a$, $T(b) = T_b$ løser $A, B$; **varmestrømmen** gjennom skallet $\dot Q = \int\mathbf H\cdot\mathbf n\,d\sigma = -k(dT/dr)\times$ areal (konstant total effekt gjennom hvert skall i stasjonær tilstand); logaritmisk vs. $1/r$-profil; benevningskontroll. Fysisk innkledning: isolert rør (sylinder), oppvarmet kuleskall.
- **Oppgavesjangre:** I. Mønstereksempel: «Et rørskall har indre radius $a$ med temperatur $T_a$ og ytre radius $b$ med $T_b$. Finn den stasjonære temperaturprofilen $T(r)$, og regn ut den totale varmestrømmen per lengdeenhet ut gjennom røret.»
- **Typiske feil:** Bruke den kartesiske løsningen ($T = Ax + B$) i stedet for den radielle; forveksle sylinder- ($\ln r$) og kuleprofilen ($1/r$); feil oppsett av $\nabla^2$ i radiell form; regnefeil ved innsetting av randkravene; glemme at total varmestrøm er konstant gjennom hvert skall.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Føringsstandarden: slik skriver du en A-besvarelse

- **id:** `mek1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–6
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: navngi teoremer og felt, oppgi eksistensbetingelser, skriv Bernoulli-betingelsene, kontroller orientering/normalretning og dimensjoner, diskuter kavitasjon, og velg riktig trykklikning — samlet på ett sted.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis (2006–2017) og oppgaveinstrukser: (i) **navngi teoremer og felt** («Stokes' sats», «Gauss' divergensteorem», «kilde», «dipol», «uniform strøm»; «navngi hva som er divergens og virvling»); (ii) **oppgi eksistensbetingelser før ψ/φ** (φ ⇔ virvelfri, ψ ⇔ divergensfri 2D); (iii) **Bernoulli-betingelsene hver gang** (ideelt/stasjonært/konstant tetthet; langs strømlinje / overalt hvis virvelfri); (iv) **dimensjonskontroll** (benevnings-tabell, sluttsvarets enhet, ikke-SI godtas om konsistent); (v) **fortegns-/konstantfrihet godtas** (konsistent valg); (vi) **orientering/normalretning kontrolleres** ($\mathbf n$ ut av $V$; høyrehåndsregel); (vii) **fysisk gyldighet/kavitasjon diskuteres**; (viii) **alternative løsninger honoreres** («regn to veier»); (ix) **delpunkt-koblinger** (gjenbruk av felt, ψ, trykk, en alt utregnet fluks via Gauss). Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger: hva som er tilstrekkelig begrunnelse for A–O (én tabell — f.eks. for A: eksistensbetingelse navngitt + antiderivasjon + konstantvalg; for D/E: teoremnavn + orientering + evt. to veier; for G: betingelsene + strømlinjevalg + kavitasjon); **sjekklisten før innlevering** (teoremer navngitt? eksistensbetingelser oppgitt? Bernoulli-betingelser skrevet? normalretning/orientering kontrollert? benevning sjekket? kavitasjon/gyldighet diskutert? delpunkt-koblinger utnyttet? riktig trykklikning valgt?); **to kontrastpar «samme fysikk, ulik føring»** (én lav-uttellings og én full-scorings versjon — ett ψ-eksempel med/uten eksistensbegrunnelse, ett trykk-eksempel der Bernoulli feilaktig brukes på tvers av strømlinjer vs. korrekt Euler); strategien for kjedede delpunkter (les hele oppgaven først; gjenbruk tidligere delsvar; tidsbudsjett ~24 min/deloppgave). Feltskisser beskrives i ord (skissekonvensjonen fra 4.2).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under finner riktig strømfunksjon, men ville tapt uttelling. Pek på de tre manglene (eksistensbetingelsen ikke oppgitt, feltet ikke navngitt, benevning mangler) og skriv den om til full uttelling.»
- **Typiske feil:** Hele føringsfellekatalogens metadel: uteglemt teoremnavn, manglende eksistensbegrunnelse, Bernoulli-betingelser ikke skrevet, fluks uten fortegns-/orienteringskontroll, manglende dimensjonskontroll, ingen kavitasjonsdiskusjon, Bernoulli brukt der Euler kreves, delpunkt-koblinger ikke utnyttet.
- **Quiz: 20 · Flashcards: 42** (teoremnavn- + betingelses-bank — flashcard-gull)

#### Kapittel 7.2: Midtveissimulering: felt, integralsatser og ψ/φ (pensumvinduet)

- **id:** `mek1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 120 · **prerequisites:** `mek1100-7-1` (+ Del 1–4)
- **kapitteltype:** øvingseksamen (midtsemester)
- **description:** Komplett midtsemestersett over pensumvinduet — feltbegreper, gradient, div/virvling, integralsatser og strømfunksjon/potensial — før den fysikktunge fluid-/varmedelen, med føring etter 7.1.
- **Eksamensbelegg/miks:** **Forbeholdskapittel:** arkivet inneholder ingen midtsemestereksamener, så settet er kalibrert på **pensumvinduet** (feltbegreper, gradient, div/curl, strømfunksjon/potensial, integralsatser — logisk første halvdel før fluid-/varmedelen) og formen, ikke på dokumentert oppgavefordeling. Miks: **divergens/virvling + eksistens + ψ/φ** (sjanger B + A, 2–3 delpunkter — den faste O1-åpningen) + **strømlinjer/stagnasjon/skisse** (sjanger C, 1 delpunkt) + **integralsats** (sjanger D eller E, sirkulasjon/fluks «to veier», 1–2 delpunkter) + **gradient/enhetsnormal eller krumlinjede koordinater** (sjanger N/L, 1 delpunkt) + **en teoriutledning** (sjanger O, veiuavhengighet av φ eller ekviskalar-ortogonalitet, 1 delpunkt). Alle oppgaver nyskrevne med fysisk innkledning. Løsningsforslag i `collapsible` per delpunkt som A-besvarelse med `tip`-notat om at midtveisformen er udokumentert (juster mot faktisk midtsemestersett når det foreligger).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.3: Avsluttende simulering 1: den fysisk innkledde 10×10-malen

- **id:** `mek1100-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `mek1100-7-2` (+ Del 5–6)
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett 4-timers sett etter den stabile 2011–2018-malen: 10 fysisk innkledde, kjedede delspørsmål som treffer alle fem ryggradene — ψ/φ-åpning, integralsats, varmeproblem og trykk med Bernoulli.
- **Eksamensbelegg/miks:** Speiler den stabile malen (**10 delspørsmål à 0–10 poeng, maks 100, 4 timer**, fysisk innkledning, kjedede delpunkter): **O1 et 2D-felt** (elv/strøm forbi hinder) → divergens/virvling + eksistens + ψ og φ + strømlinjer/stagnasjon/skisse (3 delpunkter, sjanger B + A + C) → **O2 en integralsats** — sirkulasjon via Stokes eller fluks via Gauss, «regn to veier», evt. parametrisert flate (2 delpunkter, sjanger D/E/F) → **O3 et varmeproblem** — Fouriers lov + enheter + ∂T/∂t-fortegn eller radiell ledning (2 delpunkter, sjanger I) → **O4 trykk** — hevert/rør med Bernoulli (betingelser + kavitasjon) + trykkraft/oppdrift (3 delpunkter, sjanger G + K). Delpunktene kjedes (O2 bruker feltet fra O1; O4 bruker en fluks/ψ fra tidligere). Alle oppgaver nyskrevne med fysisk kontekst. Løsningsforslag i `collapsible` per delpunkt som A-besvarelse etter 7.1-standarden, med `tip`-notat om tidsbudsjett (~24 min/deloppgave) og hvor begrunnelses-/navngivnings-/orienteringspoengene sitter.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.4: Avsluttende simulering 2: Euler-skillet, fri overflate og superposisjon

- **id:** `mek1100-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `mek1100-7-3`
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett sett nummer to som trener toppsjiktet og restsjangrene: virvlet felt med Euler i stedet for Bernoulli, fri overflate z = η(r), superposisjon/dividing streamline, materialderivert og krumlinjede koordinater — så de to settene sammen dekker A–O.
- **Eksamensbelegg/miks:** Speiler samme mal (10 delspørsmål à 0–10 poeng, 4 timer, fysisk innkledning), men vektet mot **karakterskillerne og restsjangrene** (7.3 + 7.4 dekker sammen alle A–O): **O1 et virvlet felt** → divergens/virvling + eksistens (bare ψ, ikke φ) + materialderivert/akselerasjon i sylinderkoordinater (3 delpunkter, sjanger B + A + J) → **O2 potensialstrøm ved superposisjon** — kilde + uniform strøm, dividing streamline / Rankine-legeme (2 delpunkter, sjanger M, beredskap) → **O3 roterende væske** — Euler direkte for $p(r,z)$ (fordi Bernoulli er ugyldig på tvers) + fri overflate $z = \eta(r)$ + kavitasjons-/gyldighetsdiskusjon (3 delpunkter, sjanger H + K) → **O4 krumlinjede koordinater** — skaleringsfaktorer/ortogonalitet/volumelement, eller en teoriutledning (kontinuitet) (2 delpunkter, sjanger L + O). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per delpunkt, og `tip`-notat om at O3 er den reneste toppkarakter-skilleren (Bernoulli vs. Euler) og at arkivet stopper i 2018 (verifiser mot nyere sett).
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne temaprøver — simuleringene (7.2–7.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 15 |
| 1 | 1.1–1.4 | 20+20+16+16 = **72** | 22+22+18+18 = **80** |
| 2 | 2.1–2.2 | 24+18 = **42** | 24+22 = **46** |
| 3 | 3.1–3.4 | 24+24+20+20 = **88** | 24+24+22+5 = **75** |
| 4 | 4.1–4.4 | 26+24+20+20 = **90** | 26+24+24+5 = **79** |
| 5 | 5.1–5.5 | 20+16+26+20+20 = **102** | 22+20+28+22+5 = **97** |
| 6 | 6.1–6.3 | 24+20+20 = **64** | 24+22+22 = **68** |
| 7 | 7.1–7.4 | 20+6+6+6 = **38** | 42+0+0+0 = **42** |
| **Sum** | **27 kap.** | **508 ≥ 500 ✓** | **502 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene: **Del 4 (ψ/φ — bokens kjerne, 96 %) og Del 5
(fluid/trykk, med Bernoulli 76 % og Euler-skillet) bærer 192 av 508 quiz** og de
tyngste oppgavekvotene; Del 3 (integralsatsene, 60 % hver) 88; varme-blokka (Del 6,
64 %) 64. Beredskapstemaene (superposisjon 4.3, krumlinjede 1.3) holdes bevisst
lavere.

---

## 4. Prøver og simuleringer

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Alle prøver består av nyskrevne, **fysisk innkledde** oppgaver i arkivets sjangre,
med løsningsforslag etter føringsstandarden (7.1) og poengfordeling. Fullt langsvar
med navngitte teoremer/felt, oppgitte eksistens-/Bernoulli-betingelser,
orienterings- og dimensjonskontroll, og eksakte svar med benevning.

**Del 1 — Vektoranalyse-broen**
1. Prøve 1.A (35 min): Gradient, retningsderivert og «myggen» — enhetsnormal til nivåflate (kap. 1.1, sjanger N).
2. Prøve 1.B (40 min): Parametrisering + fluks/sirkulasjon som integraler — fundamentalt vektorprodukt, normalfortegn, benevning (kap. 1.2, sjanger F).
3. Prøve 1.C (35 min): Krumlinjede koordinater — skaleringsfaktorer, ortogonalitet, volumelement (kap. 1.3, sjanger L).
4. Prøve 1.D (30 min): Dimensjonsanalyse — benevning til felt, operatorer og konstanter, SI-konsistens (kap. 1.4).

**Del 2 — Feltderiverte**
1. Prøve 2.A (35 min): Divergens og virvling i kartesiske koordinater + navngivning + fysisk tolkning (kap. 2.1, sjanger B).
2. Prøve 2.B (40 min): Divergens og virvling i sylinder-/kulekoordinater (de vekttunge formlene) (kap. 2.1, sjanger B).
3. Prøve 2.C (35 min): Laplace og harmoniske felt — potensialstrøm ⇒ $\nabla^2\varphi = 0$ (kap. 2.2, sjanger B/O).
4. Prøve 2.D (30 min): Ekviskalar-ortogonalitet — vis at φ og ψ skjærer normalt (kap. 2.2, sjanger O).

**Del 3 — Integralsatsene**
1. Prøve 3.A (40 min): Sirkulasjon via Stokes — orientering, konstant virvling × areal (kap. 3.1, sjanger D).
2. Prøve 3.B (45 min): Fluks via Gauss — krum delflate via $\iiint\nabla\cdot\mathbf v - q_\text{plan}$, normal ut av $V$ (kap. 3.2, sjanger E).
3. Prøve 3.C (40 min): Green + teoriutledning — kontinuitetslikninga eller veiuavhengighet av φ (kap. 3.3, sjanger O).
4. Prøve 3.D (50 min): «Regn to veier» — sirkulasjon direkte og med Stokes, fluks direkte og med Gauss, bekreft (kap. 3.1–3.4, sjanger D + E + F).

**Del 4 — Strømfunksjon ψ og hastighetspotensial φ**
1. Prøve 4.A (40 min): Eksistens + antiderivasjon (kartesisk) — navngi betingelsene, finn φ og ψ (kap. 4.1, sjanger A).
2. Prøve 4.B (40 min): Eksistens + antiderivasjon (polart) + der bare ett av φ/ψ finnes (kap. 4.1, sjanger A).
3. Prøve 4.C (45 min): Strømlinjer, stagnasjon og skisse — strømlinjen gjennom stagnasjonspunktet, retningspiler (kap. 4.2, sjanger C).
4. Prøve 4.D (50 min): O1-simulering — felt → div/virvling → eksistens → φ/ψ → stagnasjon → skisse (hele delen, sjanger A + B + C).

**Del 5 — Fluidkinematikk og -dynamikk**
1. Prøve 5.A (40 min): Materialderivert og akselerasjon — lokal + konvektiv, sylinderkoordinater, partikkelbane (kap. 5.1, sjanger J).
2. Prøve 5.B (45 min): Bernoulli — betingelser + hevert/tank/innsnevring + kavitasjonsgrense (kap. 5.3, sjanger G).
3. Prøve 5.C (45 min): Euler-skillet — virvlet felt der Bernoulli er ugyldig; finn $p$ via Euler; fri overflate (kap. 5.3–5.5, sjanger H + K).
4. Prøve 5.D (50 min): Trykk-simulering — avgjør Bernoulli vs. Euler, trykkraft/oppdrift via Gauss (kap. 5.2–5.5, sjanger G + H + K).

**Del 6 — Varmetransport**
1. Prøve 6.A (40 min): Fouriers lov + varmefluks + dimensjonsanalyse — definer symboler med enheter (kap. 6.1, sjanger I).
2. Prøve 6.B (40 min): ∂T/∂t-fortegn — regn $\nabla^2 T$ i et punkt, avgjør om temperaturen stiger/synker (kap. 6.2, sjanger I).
3. Prøve 6.C (45 min): Radiell ledning — sylinderskall ($A\ln r + B$) og kuleskall ($A/r + B$) med randkrav (kap. 6.3, sjanger I).
4. Prøve 6.D (35 min): Utled varmeledningslikninga fra energibevaring (Fourier + Gauss) (kap. 6.2, sjanger O).

### Simuleringer (3 komplette sett — se kap. 7.2–7.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Midtveissimulering (kap. 7.2) | Midtsemester (pensumvinduet; form udokumentert) | Felt + integralsats + ψ/φ: B+A(2–3) + C(1) + D/E(1–2) + N/L(1) + O(1) |
| Avsluttende simulering 1 (kap. 7.3) | Den stabile 10×10-malen | 10 kjedede fysisk innkledde delspørsmål / 4 t: B+A+C(3) + D/E/F(2) + I(2) + G+K(3) |
| Avsluttende simulering 2 (kap. 7.4) | Samme mal, toppsjikt + restsjangre | 10 delspørsmål / 4 t: B+A+J(3) + M(2) + H+K(3) + L+O(2) |

Til sammen dekker de tre settene samtlige sjangre A–O minst én gang, trener **begge
trykkveiene** (7.3 Bernoulli, 7.4 Euler-skillet) og beredskapen (superposisjon i
7.4).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **To prøver og den stabile malen** — vurderingsformen (midtsemester 25 % +
   avsluttende 75 % + oblig), formathistorikken (3-timers 2004–2008 → 10×10-malen
   fra 2011), de fem ryggradene, og det ærlige forbeholdet om at arkivet stopper i
   2018 (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (ψ/φ 96 %, div/virvling 80 %, strømlinjer/stagnasjon 76 %, Bernoulli 76 %,
   varme/Fourier 64 %, integralsatsene 60 %), **kunne** (Euler-skillet 36 % stigende,
   materialderivert 44 %, trykkraft/fri overflate 32/24 %, dimensjonsanalyse 60 %
   gjennomgående), **kjenne** (krumlinjede koordinater 20 %, superposisjon 48 %
   fallende/beredskap, gradient/enhetsnormal 20–24 %, teoriutledninger ~20 %).
3. **Sjangerguiden** — A–O med løsningsoppskriftene fra drillkapitlene (3.4, 4.4,
   5.5) i kortform.
4. **Sensorreglene** — navngi teoremer og felt, oppgi eksistensbetingelser (φ ⇔
   virvelfri, ψ ⇔ divergensfri 2D), skriv Bernoulli-betingelsene, dimensjonskontroll,
   orientering/normalretning ($\mathbf n$ ut av $V$; høyrehåndsregel), fortegns-/
   konstantfrihet godtas, fysisk gyldighet/kavitasjon diskuteres, alternative
   løsninger («regn to veier») honoreres, delpunkt-koblinger (fra kap. 7.1) +
   karakterskille-listen (toppsjikt = velge riktig trykklikning).
5. **Feilkatalogen** — de typiske feilene fra analysen samlet (forvekslede
   eksistensbetingelser, fortegnsfeil i ψ-relasjonene, Bernoulli på tvers av
   strømlinjer i virvlet felt, uteglemt teoremnavn/eksistensbegrunnelse, feil
   normalretning i Gauss/Stokes, hoppet dimensjonskontroll, feil «mygg»-retning,
   feil $\nabla^2 T$-fortegn, glemt sentripetalledd, glemt kavitasjonsgrense,
   tidsfellen), hver med henvisning til kapitlet som forebygger den.
6. **Formel- og teoremliste i kursets notasjon** — apparatet fra
   innholdskontraktene (feltoperatorer i kartesiske/sylinder-/kulekoordinater,
   eksistensbetingelser + ψ–φ-relasjoner, Gauss/Stokes/Green, sirkulasjon/fluks,
   materialderivert, kontinuitet, Euler + Bernoulli med betingelser, hydrostatisk
   trykk/trykkraft/fri overflate, Fouriers lov + varmelikninga + radiell ledning,
   krumlinjede skaleringsfaktorer, dimensjonsanalyse) — med markering *utlede/kunne
   aktivt* (kontinuitet, varmeledning, veiuavhengighet, ekviskalar-ortogonalitet)
   vs. *kun bruke*, og en note om at formeltillegget først kom i 2009 (eldre sett
   ga formlene i oppgaveteksten — kunn dem uansett).
7. **Studieløp** — semestersynkronisert plan: Del 0 → Del 1 (verktøykassen) → Del 2
   (feltderiverte) → Del 3 (integralsatsene) → Del 4 (ψ/φ — bruk mest tid her) +
   midtveissimulering FØR midtsemester; deretter Del 5 (fluid/trykk — det andre
   tyngdepunktet) → Del 6 (varme) → prøver → de to avsluttende simuleringene under
   tidspress (240 min, ~24 min/deloppgave). Note: arkivet stopper i 2018 — sjekk om
   emneansvarlig har justert vekting, og skaff nyere sett om mulig.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mek1100` med alle 27 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI`, + `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–O, frekvenstallene og de fem
   ryggradene som resten refererer til.
3. **Verktøy-/grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (bro fra MAT1110 —
   felt/parametrisering/koordinater/dimensjon) → Del 2 (feltderiverte: div/virvling
   krever krumlinjede operatorer fra 1.3; Laplace 2.2 er bro til Del 4).
4. **Integralsatsene**: Del 3 (Stokes 3.1 og Gauss 3.2 krever div/virvling 2.1 og
   parametrisering 1.2; Green/utledninger 3.3 krever begge).
5. **Bokens kjerne**: Del 4 (ψ/φ; 4.1 krever eksistensbetingelsene fra 2.1 og
   Laplace 2.2; 4.2 strømlinjer bygger på 4.1; superposisjon 4.3 er beredskap).
6. **Fluid/trykk**: Del 5 (5.3 Bernoulli krever virvelfri↔φ fra 4.1 og materialderivert
   5.1; 5.2 kontinuitet krever Gauss-utledning 3.3; 5.4 trykkraft krever Gauss 3.2;
   5.5 trykk-drill krever alt i delen) → Del 6 (varme; 6.1 krever fluks 3.2 og
   dimensjon 1.4; 6.3 radiell krever krumlinjede 1.3).
7. **Del 7** (simuleringene til slutt — de gjenbruker alt og må dekke begge
   trykkveiene og alle A–O).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; temaprøvene (§4) legges som prøvekapitler
   (`mek1100-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-operatorer i
      formler; konsistent notasjon: $\nabla\varphi$, $\nabla\cdot\mathbf v$,
      $\nabla\times\mathbf v$, $\nabla^2$, $\psi$, $\varphi$, $D\mathbf v/Dt$, $H_0$,
      $\mathbf i_r,\mathbf i_\theta,\mathbf i_z$, $\kappa$, $k$, $\eta(r)$.
- [ ] **Notasjonskonsistens (grep over alle mek1100-filer)**: eksistensbetingelsene
      navngitt (φ ⇔ virvelfri, ψ ⇔ divergensfri 2D); Bernoulli-betingelsene skrevet;
      teoremer navngitt (Stokes/Gauss/Green); fluks-/sirkulasjonsfortegn og
      orientering eksplisitt kontrollert; benevning på sluttsvar.
- [ ] **Føringsstandard i ALLE løsningsforslag**: teoremer og felt navngitt;
      eksistensbetingelse FØR ψ/φ finnes; Bernoulli-betingelsene hver gang; normal ut
      av $V$ / høyrehåndsregel synlig; dimensjonskontroll; kavitasjons-/
      gyldighetsdiskusjon der relevant; verbal konklusjonssetning; eksakt sluttsvar
      med benevning. Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Ærlighetsmerking**: Del 0 og relevante Eksamensvinkler sier at kalibreringen
      bygger på 2004–2018 (8-årig gap; skaff nyere sett); superposisjon (4.3) merket
      «fallende — beredskap»; Euler-skillet (5.3/5.5) merket «stigende — toppkarakter-
      skiller»; midtveissimuleringen (7.2) merket «form udokumentert».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (MAT1110-referanser
      som klartekst med aktiveringsmarkør; R2/S2/R1/1T lenket og verifisert),
      `collapsible` Symbol- og formelliste per delkapittel (ALLE symboler/formler i
      delkapitlet — kritisk i dette faget), Typiske feil-`warning`, 2–4 eksempler med
      **fysisk innkledning** (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
      sensor-kommentert case + 10–15 oppgaver.
- [ ] **Feltskisser i ord**: der fasit forventer figur (strømlinjebilde,
      stagnasjonspunkt, retningspiler) beskrives skissen verbalt etter
      skissekonvensjonen i 4.2 (heltrukne strømlinjer, stiplede ekvipotensialer,
      $\bullet$ for stagnasjon, retningspiler per kvadrant).
- [ ] **Quiz-sum ≥ 508 og flashcard-sum ≥ 502** per kvotetabellen (kontrollsummér
      mot §3-tabellen).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + midtveissimulering + 2 avsluttende
      simuleringer som sammen dekker A–O og **begge trykkveiene**.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, felt, konstanter og
      fysiske kontekster; ingen formuleringer fra reelle sett eller fasiter
      (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
      ikke kopieres ordrett inn); pensumboka (Gjevik & Fagerland; Matthews) refereres,
      aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
