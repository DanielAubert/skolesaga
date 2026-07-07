# Bokskjelett: MAT1110 Kalkulus og lineær algebra — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (20 ordinære avsluttende eksamener 2004–2025 uten
> 2020/2023, 2 ekstra V2025-sett (konte + prøve), 3 fullstendige offisielle
> løsningsforslag (alle V2025) og den utdelte formelsamlingen). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. MAT1110 er
> oppfølgeremnet til **MAT1100** (`docs/hoyskole-boker/mat1100/`); forgjengerboka
> er skjelett, ikke bygget, så MAT1100-forkunnskaper skrives som klartekst med
> aktiveringsmarkør (se §1.6).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat1110` |
| Tittel | **MAT1110 Kalkulus og lineær algebra (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk med to komplementære prøver) |
| Antall kapitler | **34** (1 eksamenskart + 29 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 365 min ≈ 39 timer** |
| Quiz totalt | **515** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** MAT1110 er andre kalkulusemne ved UiO og bygger direkte
videre på MAT1100: full flervariabel kalkulus (partiellderivasjon, optimering,
multiple integraler, vektoranalyse) møter full lineær algebra (Gauss-eliminasjon,
basis/rang, egenverdier, lineæravbildninger). Boka trenes mot **to prøver** — en
midtsemestereksamen uten hjelpemidler (1/3, første halvdel av pensum: lineær
algebra + start flervariabel) og en avsluttende langsvarseksamen (2/3, hele
pensum, kalkulator + utdelt formelsamling). Den viktigste strategiske
beskjeden i hele boka er **regimeskiftet 2025**: alle tre V2025-settene droppet
egenverdier og potensrekker fullstendig og innførte i stedet tung 3D-vektoranalyse
(fluksflateintegral + **Gauss' divergensteorem** i alle tre, **Stokes** på konte),
med **basis/invers matrise + omvendt/implisitt funksjonsteorem** som fast åpning.
Boka vekter derfor V2025-regimet tyngst — vektoranalyse-kjeden får eget
drillkapittel — men beholder egenverdier/Markov og potensrekker som **fullt
beredskap** (Del 6), fordi det nye regimet bare hviler på ett årskull. Ryggraden
som består på tvers av begge regimer er **multiple integraler** (95 %),
**stasjonære + Hesse / Lagrange / linjeintegral-Green** (60 %) og **lineær algebra
kap. 1** (70 %). Sensorregelen som preger alt: **«Du må begrunne alle svar, og
vise nok mellomregninger til at man lett kan følge argumentene.»**

### 1.6 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alt; vis nok mellomregninger.** Ordrett instruks i alle sett. Ren
   fasit uten utledning gir ikke full uttelling. Hvert løsningsforslag skrives som
   A-besvarelse: mellomregning ledd for ledd, verbal konklusjonssetning, sluttsvar
   markert.
2. **Teoremer navngis** når de bærer argumentet: **omvendt funksjonsteorem**,
   **implisitt funksjonsteorem**, **ekstremalverdisetningen** (eksistens av
   min/maks på kompakt mengde), **annenderiverttesten** (Hesse), **Greens teorem**,
   **divergensteoremet** (Gauss), **Stokes' teorem**. Fasiten skriver «Ifølge
   omvendt funksjonsteorem …», «ifølge ekstremalverdisetningen …» eksplisitt.
3. **Føringsstandard**: radoperasjoner **merkes over `∼`-tegnet** (`II−2I`,
   `III+I`); integrasjonsgrenser skrives som eksplisitte ulikheter for området
   **før** oppsett; substitusjon bokføres (`u = r²`, nye grenser); svar oppgis som
   **eksakt verdi** ($\tfrac{32}{3}$, $\tfrac{8\pi}{5}$, $\tfrac{4\pi}{5}$),
   **aldri** desimaltilnærming.
4. **Kursets notasjon**: $\nabla f$ gradient; $F'$ Jacobi-matrise (rad =
   komponentfunksjon); Hesse-determinant $D = f_{xx}f_{yy} - f_{xy}^2$;
   volumelement $dV = r\,dz\,dr\,d\theta$ (sylinder) / $dV = \rho^2\sin\varphi\,
   d\rho\,d\varphi\,d\theta$ (kule); **fundamentalt vektorprodukt**
   $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$; fluks $\int F\cdot n\,dS$;
   $\operatorname{curl} F$, $\operatorname{div} F$; egenverdibetingelsen
   $\det(\lambda I - A) = 0$ (formelsamlingens form; $\det(A - \lambda I) = 0$ er
   ekvivalent og godtas).
5. **Delpunktgjenbruk er designet inn.** Deloppgavene er kjedet: fasiten gjenbruker
   eksplisitt tidligere delsvar (konte O1b bruker inversen fra O1a; O6c bruker
   trippelintegralet fra O6b og fluksen fra O6a via divergensteoremet). Å se
   koblingen premieres — løsningsforslagene i boka skal vise koblingen eksplisitt.
6. **Orientering og fortegn i vektoranalyse.** Fasiten sjekker **hver gang** at
   $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ peker samme vei som oppgitt $n$
   (og bytter fortegn ellers), og at randkurvens orientering matcher normalen
   (høyrehåndsregel). Alle fluks-, divergens- og Stokes-løsninger i boka gjør denne
   kontrollen synlig.
7. **Ærlighet om arkivet og regimet.** (a) **Regimeskiftet hviler på ett årskull
   (V2025, tre sett).** Egenverdier/Markov (70 % historisk) og potensrekker (85 %
   historisk) forsvant i V2025 og behandles som **beredskap** — Eksamensvinkel-
   blokkene deres skal si dette rett ut. Gauss/Stokes/fluks er derimot **det nye
   tyngdepunktet** (3/3 og 1/3 i V2025) tross lav rå-arkivfrekvens. (b) **Taylor i
   flere variable og differensiallikninger** har 0 arkivforekomster i 22 sett, men
   står i emnebeskrivelsen — dekkes med standardmetoder og merkes «ikke
   arkivbelagt». (c) **Ingen midtsemestereksamener finnes i arkivet** — all
   kvantitativ analyse gjelder avsluttende eksamen; midtveissimuleringen (7.2)
   kalibreres på pensumvinduet, ikke på dokumentert form. Verifiser alt mot V2026-
   settet så snart det foreligger, og sjekk om formelsamlingen er utvidet med
   Gauss/Stokes (V2022-utgaven mangler dem).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): lineær algebra og radreduksjon
er verktøykassen for resten; flervariabel differensiering (Jacobi) bygger på den;
optimering bruker gradient + Hesse; multiple integraler og vektoranalyse er
slutteksamenens tyngde; beredskapsdelen (egenverdier + potensrekker) står sist
fordi den er nedprioritert etter regimeskiftet, men ikke fjernet. Frekvensen
styrer *omfanget*. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer regimeskiftet. |
| 1 | Lineær algebra og radreduksjon | 5 | Basis/invers ved radreduksjon 70 % + **åpner alle tre V2025-sett** → nivå 1 «perfekt» → teori + drillkapittel. |
| 2 | Flervariabel differensiering og Jacobi | 3 | Omvendt/implisitt funksjonsteorem 3/3 i V2025 (stigende) → nivå 1; partiell/gradient bro fra MAT1100 → kunne. |
| 3 | Optimering | 4 | Stasjonære+Hesse 60 % + Lagrange 60 % (3/3 i V2025) → nivå 1 → teori + optimeringsdrill; Taylor flervariabel = pensumkrav uten arkivbelegg. |
| 4 | Multiple integraler | 5 | Dobbeltintegral **95 %** (pensumets mest stabile tema), trippel sylinder/kule 50 % → nivå 1 → teori + kjededrill. |
| 5 | Vektoranalyse: Green, Gauss og Stokes | 6 | **Det nye tyngdepunktet**: fluks + Gauss 3/3 i V2025, Green 60 % fast, Stokes ny (konte) → nivå 1 → teori + vektoranalyse-drill. |
| 6 | Beredskap: egenverdier og potensrekker | 6 | Egenverdier/Markov 70 % og potensrekker 85 % **historisk**, men 0/3 i V2025 → nivå 2 «kunne» (fullt beredskap); kontraksjon/Newton + difflikninger → kjenne. |
| 7 | Eksamenstrening | 4 | Føringsstandard-kapittel + 1 midtveissimulering (uten hjelpemidler) + 2 avsluttende simuleringer som dekker **begge regimer**. |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger i temadelene sine** (1.5, 3.4, 4.5, 5.6) i stedet for i
   siste del: dette er de fire perfekt-sjangrene (radreduksjon, optimering, multiple
   integraler, vektoranalyse-kjeden) som må drilles rett etter teorien. Del 7
   beholder føringsstandarden og de tre komplette simuleringene.
2. **34 kapitler** — innenfor DNA-taket (20–35). Beredskapsdelen (Del 6) holdes
   bevisst kompakt (6 kapitler for 7 temaer) tross høy *historisk* frekvens, fordi
   regimeskiftet har nedprioritert den; den kan ikke kuttes helt fordi den bare
   hviler på ett nytt årskull.
3. **Del 5 (vektoranalyse) er tyngst blant temadelene (6 kap.)** selv om
   rå-arkivfrekvensen for Gauss/Stokes er lav (1/20, 0/20). Dette er det bevisste
   regime-utslaget: 3/3 og 1/3 i V2025 veier tyngre enn 17 gamle sett for prognosen
   mot V2026. Begrunnelsen står eksplisitt i kapitlenes Eksamensvinkel-blokker.
4. **Del 6 er beredskapsdelens ærlighetsunntak**: temaene som var ryggrad
   2004–2024 men forsvant i V2025 samles her med Eksamensvinkler som ærlig sier
   «historisk ryggrad, borte i det nyeste regimet — hold varmt som beredskap».
   Taylor flervariabel (3.3) og differensiallikninger (6.6) dekkes som rene
   pensumkrav uten arkivbelegg.
5. **Midtveissimuleringen (7.2) er kalibrert på pensumvindu, ikke dokumentert form**
   (ingen midtsemestereksamener i arkivet). Dette er et forbehold, ikke et avvik —
   kapitlet sier det eksplisitt.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–R) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** basis/
inverterbarhet/invers matrise (radreduksjon), **B** egenverdier/egenvektorer/
$\lim A^n v$ (Markov), **C** diagonalisering med anvendelse, **D** omvendt/
implisitt funksjonsteorem via Jacobi, **E** stasjonære punkter + Hesse, **F**
Lagrange/betinget optimering, **G** dobbeltintegral over kurveavgrenset område,
**H** uegentlig dobbelt-/trippelintegral (konvergens), **I** trippelintegral i
sylinder-/kulekoordinater, **J** linjeintegral med Greens teorem, **K**
flateintegral (skalar + fluks), **L** Gauss' divergensteorem, **M** Stokes'
teorem, **N** potensrekker (konvergensområde + sum), **O** tallrekker
(konvergenstester), **P** kontraksjon/fikspunkt/Newton, **Q** variabelskifte/
Jacobideterminant, **R** øvrige eldre sjangre (nivåkurver/grenser, buelengde,
kjerneregel via Jacobi, minste kvadrater, LA-teoribevis).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør for MAT1100-forkunnskaper:** forgjengerboka er skjelett, ikke
bygget. Referanser til den skrives som klartekst med markøren
*(MAT1100 — forgjengerbok, ikke bygget ennå; aktiver `/bok/mat1110/…`→`/bok/mat1100/<id>`-lenke når den finnes)*.
Referanser til R1/R2/S2/1T (bygde bøker) lenkes normalt — kun til kapitler som finnes.

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: to prøver og regimeskiftet 2025

- **id:** `mat1110-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT1110: midtsemester (uten hjelpemidler) mot avsluttende langsvar, det avgjørende regimeskiftet fra 2025, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) vurderingsformen: **midtsemestereksamen** (1/3, skriftlig, **ingen hjelpemidler** utover formelsamling, pensumvindu = lineær algebra + start flervariabel) + **avsluttende eksamen** (2/3, skriftlig langsvar, **kalkulator + utdelt formelsamling**, hele pensum med tyngde i flervariabel + vektoranalyse); to godkjente obligatoriske innleveringer kreves for å gå opp; (ii) **regimeskiftet 2025** som bokas hovedfunn — gjennom 2004–2024 var egenverdier/Markov (~70 %) og potensrekker (~85 %) de to ryggradene og ingen sett testet Gauss/Stokes; alle tre V2025-sett droppet egenverdier + potensrekker og innførte 3D-vektoranalyse (fluks + Gauss' divergensteorem 3/3, Stokes 1/3) med basis/invers + funksjonsteorem som åpning; (iii) den avsluttende malen: **10 deloppgaver som teller likt** over 4 timer (~24 min/deloppgave), kjedede delpunkter, «begrunn alle svar»; (iv) temafrekvens-tabellen (dobbeltintegral 95 %, potensrekker 85 % *men 0/3 i V2025*, radreduksjon/basis 70 %, egenverdier 70 % *men 0/3 i V2025*, stasjonære+Hesse 60 %, Lagrange 60 % *3/3 i V2025*, linjeintegral/Green 60 %, trippel sylinder/kule 50 %, omvendt/implisitt funksjonsteorem 30 % *3/3 i V2025*, fluks 20 % *3/3 i V2025*, Gauss 5 % *3/3 i V2025*, Stokes 0 % ordinært *1/3 i V2025*); (v) karakterskillene (bestått ≈ mekaniske delpunkter: radreduksjon til trappeform, $\nabla f = 0$ + Hesse-oppsett, standard dobbeltintegral, oppsett av trippelintegral; midtsjikt ≈ + Lagrange med tilfelledeling, potensrekkas endepunktsjekk, $\lim A^n v$ via egenvektordekomponering, Green; toppsjikt ≈ funksjonsteoremene med forutsetningssjekk, eksistensbegrunnelse med ekstremalverdisetningen på kompakt mengde, fortegns-/orienteringskontroll i fluks/Stokes, delpunkt-koblingene, sum av potensrekke ved leddvis derivasjon).
- **Innholdskontrakt:** Sjangerkatalogen A–R presenteres som studentens sjekkliste med frekvens **og regimemerke** per sjanger; prognosen for V2026 i to scenarier — **hovedscenario (V2025-malen)**: O1 basis/invers + omvendt/implisitt funksjonsteorem, O2–O3 stasjonære+Hesse + Lagrange (med eksistensbegrunnelse), O4–O5 dobbeltintegral (evt. uegentlig) + trippel sylinder/kule eller Green, O6 vektoranalyse-kjeden (parametrisert flate → fluks gjennom plan delflate → $\operatorname{div}F$ + trippelintegral → fluks gjennom krum delflate via divergensteoremet, evt. Stokes); **beredskapsscenario (gammelt regime)**: åpning med egenverdier + $\lim A^n v$, én potensrekke (konvergensområde + sum), linjeintegral via Green. Ærlighetsforbeholdet: regimeskiftet hviler på ett årskull; ingen midtsemestereksamener i arkivet; Taylor flervariabel + difflikninger har 0 arkivforekomster. Leseplan: Del 1–2 (+ start Del 3) bærer midtsemester; Del 3–5 bærer avsluttende; Del 6 er beredskap/pensumkrav.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «avsluttende O6c bruker fluksen fra O6a og trippelintegralet fra O6b via divergensteoremet — hva gjør du hvis du ikke rakk O6b?» og «regimet ditt kull møter er usikkert — sett opp en to-spors lesestrategi som dekker både vektoranalyse og potensrekker».
- **Typiske feil:** Metafeilene: lese lineært i pensumrekkefølge uten regimeprioritering; nedprioritere vektoranalyse fordi rå-arkivfrekvensen ser lav ut (den er 3/3 i det nyeste regimet); droppe egenverdier/potensrekker helt (de er beredskap, ikke fjernet); bruke for lang tid tidlig og miste de dyre O6-poengene.
- **Quiz: 10 · Flashcards: 10** (frekvenser, regimemerker, formelsamlingens innhold, tidsbudsjett)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Lineær algebra og radreduksjon *(prioritet: PERFEKT — åpner alle V2025-sett)*

#### Kapittel 1.1: Gauss-eliminasjon: trappeform og merkede radoperasjoner

- **id:** `mat1110-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Radreduksjon til (redusert) trappeform med radoperasjoner merket over ∼-tegnet — føringsdisiplinen sensor krever, og motoren under hele Del 1.
- **Forkunnskaper (kryssbok):** [Lineære likningssystemer](/bok/1t/1t-4-1) og [Løsning av likningssett](/bok/r1/r1-6-1) (VGS-eliminasjon som utgangspunkt). Matriseføring av likningssystemer er nytt — bygges fra grunnen. Determinant/invers 2×2 fra *(MAT1100 kap. 5.1–5.2 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)* forutsettes kjent, men repeteres ikke.
- **Eksamensbelegg:** Grunnteknikken i sjanger A (14/20 = 70 %), **nesten alltid O1 i det nye regimet**. Fasitens faste grep: reduser til trappeform med **eksplisitt merkede radoperasjoner** over hvert `∼`-tegn. Prioritet: **perfekt**.
- **Innholdskontrakt:** Utvidet matrise $[A\,|\,b]$; de tre elementære radoperasjonene; **trappeform** og **redusert trappeform** (Gauss vs. Gauss–Jordan); pivotelementer og frie variabler; **føringsstandarden**: hver radoperasjon merkes over `∼` (f.eks. `II−2I, III+I`) — dette er sensorkrav, ikke pynt; løsningsmengdens tre utfall (entydig / uendelig mange med parametrisering / ingen); løsbarhet av $Ax = b$ avhengig av parameter (konsistens lest av trappeformen — sjanger A-variant, 2005/2006/2011/2013). Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Radreduser $[A\,|\,b]$ til redusert trappeform og angi løsningsmengden når $A = \begin{pmatrix}1&2&-1\\2&3&1\\1&1&2\end{pmatrix}$, $b = (3,5,4)^T$ — merk hver radoperasjon.» Parametervariant: «For hvilke verdier av $a$ har systemet med utvidet matrise … (i) entydig løsning, (ii) ingen, (iii) uendelig mange?»
- **Typiske feil:** Radoperasjoner uten merking (føringstrekk — sensor krever `II−2I` over ∼); radbytter bokføres ikke; regnefeil forplantes fordi mellomtrinn ikke kontrolleres; forveksle trappeform og redusert trappeform; glemme å parametrisere de frie variablene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Basis, lineær uavhengighet, nullrom, søylerom og rang

- **id:** `mat1110-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-1-1`
- **kapitteltype:** teori
- **description:** Fra radreduksjon til de sentrale underromsbegrepene: skriv vektorene som søyler, reduser, konkluder «radekvivalent med Iₙ ⇒ basis» — slik fasiten gjør.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Vektorer i tre dimensjoner](/bok/r2/r2-5-1) (vektorbegrepet i $\mathbb{R}^3$).
- **Eksamensbelegg:** Kjernen i sjanger A (14/20 = 70 %). Fasitens grep: «Avgjør om vektorene danner en basis» ⇒ skriv som **søyler**, radreduser, konkluder «radekvivalent med $I_n$ ⇒ søylene danner basis / er lineært uavhengige». Varianter: plukk lineært uavhengige søyler og utvid til basis for $\mathbb{R}^n$ (2019 O3), basis for nullrom/søylerom (2004/2006/2010). Prioritet: **perfekt**.
- **Innholdskontrakt:** Lineær uavhengighet og lineær kombinasjon; **basis** for $\mathbb{R}^n$ og for et underrom; dimensjon; **nullrom** $N(A) = \{x : Ax = 0\}$ med basis fra frie variabler; **søylerom** med basis fra pivotsøyler (av *original*matrisen — dokumentert felle); **rang** = antall pivoter, og rang–nullitet-setningen (navngis); kriteriet «$n$ søyler i $\mathbb{R}^n$ er basis ⇔ matrisen radekvivalent med $I_n$ ⇔ $\det \ne 0$»; utvidelse av et lineært uavhengig sett til basis; spenn/underrom (definisjon + sjekk).
- **Oppgavesjangre:** A (+ R-teoribevis). Mønstereksempel: «Avgjør om $v_1=(1,1,0)$, $v_2=(0,1,1)$, $v_3=(1,0,-1)$ danner en basis for $\mathbb{R}^3$. Hvis ikke, finn dimensjonen til spennet og en basis for det.» Nullrom-variant: «Finn en basis for nullrommet til $A = \begin{pmatrix}1&2&3&0\\0&0&1&1\end{pmatrix}$.»
- **Typiske feil:** Lese basis for søylerommet fra pivotsøyler i *trappeformen* i stedet for originalmatrisen; forveksle nullrom (frie variabler) og søylerom (pivoter); glemme å begrunne konklusjonen med «radekvivalent med $I_n$»; blande dimensjon og antall vektorer.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Invers matrise og inverterbarhetskriteriene

- **id:** `mat1110-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat1110-1-2`
- **kapitteltype:** teori
- **description:** Invers ved [A | Iₙ] → [Iₙ | A⁻¹] og de ekvivalente inverterbarhetskriteriene — den faste åpningen i det nye regimet, og forutsetningen som funksjonsteoremene i Del 2 kobler tilbake til.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2. Determinantregler ($\det(AB) = \det A\det B$, $\det(A^{-1}) = 1/\det A$) fra *(MAT1100 kap. 5.2 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)* forutsettes.
- **Eksamensbelegg:** Sjanger A, **3/3 i V2025** (konte O1a og prøve O1a regner invers). Fasitens grep: radreduser den utvidede $[A\,|\,I_n]$ til $[I_n\,|\,A^{-1}]$ og les av de tre siste søylene. Inversen **gjenbrukes eksplisitt i neste delpunkt** (konte O1b bruker $A^{-1}$ fra O1a via omvendt funksjonsteorem — se kap. 2.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** Invers matrise: definisjon og entydighet; **Gauss–Jordan-algoritmen** $[A\,|\,I_n] \sim \cdots \sim [I_n\,|\,A^{-1}]$ (aktiv, med merkede radoperasjoner); **inverterbarhetsteoremet** — de ekvivalente utsagnene: $A$ inverterbar ⇔ radekvivalent med $I_n$ ⇔ $\det A \ne 0$ ⇔ søylene er basis ⇔ $N(A) = \{0\}$ ⇔ $Ax=b$ har entydig løsning for alle $b$; $\det(A^n) = (\det A)^n$; løsning av $Ax = b$ via $x = A^{-1}b$ (og hvorfor radreduksjon oftest er raskere); at inversen skal **gjenbrukes** når et senere delpunkt trenger den (delpunkt-kjeding). $2\times2$-formelen som spesialtilfelle.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn inversen til $A = \begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$ ved å radredusere $[A\,|\,I_3]$, og bruk den til å løse $Ax = (1,0,0)^T$.»
- **Typiske feil:** Lese feil søyler av $[I_n\,|\,A^{-1}]$; radbytter bokføres ikke; regne inversen når bare *eksistens*/inverterbarhet spørres (tidssløsing); konkludere inverterbarhet uten å ha vist radekvivalens/determinant; ikke gjenbruke den utregnede inversen i neste delpunkt.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.4: Lineæravbildninger og løsbarhet av Ax = b

- **id:** `mat1110-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `mat1110-1-3`
- **kapitteltype:** teori
- **description:** Matrisen til en lineæravbildning, bilde og kjerne, og parameteravhengig løsbarhet — bindeleddet mellom radreduksjon og Jacobi-matrisen i Del 2.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.3; [Funksjonsbegrepet](/bok/1t/1t-3-1) (avbildning generelt).
- **Eksamensbelegg:** Formelsamlingen definerer lineær-/affinavbildning og matrisen til en lineæravbildning; parameteravhengig løsbarhet av $Ax=b$ er en sjanger A-variant (2005/2006/2011/2013). Lavere selvstendig frekvens enn 1.1–1.3, men konseptuelt nødvendig som bro til $F'$ som «beste lineære avbildning» i kap. 2.2. Prioritet: **kunne**.
- **Innholdskontrakt:** Lineæravbildning $T:\mathbb{R}^n \to \mathbb{R}^m$ (definisjonens to egenskaper); **standardmatrisen** $T(x) = Ax$ funnet fra bildene av standardbasisvektorene; affinavbildning $x \mapsto Ax + b$; **bilde** (= søylerom) og **kjerne** (= nullrom) knyttet til kap. 1.2; sammensetning ↔ matriseprodukt; invers avbildning ↔ invers matrise; parameteravhengig løsbarhet (konsistensdrøfting fra trappeform); geometriske eksempler (rotasjon/projeksjon/speiling som matriser — kjennskap). Merk: mindre eksamenstungt enn resten av Del 1 — kommer etter det viktige.
- **Oppgavesjangre:** A + R. Mønstereksempel: «$T:\mathbb{R}^2\to\mathbb{R}^2$ speiler om linjen $y = x$. Finn standardmatrisen, og avgjør om $T$ er inverterbar.»
- **Typiske feil:** Bygge standardmatrisen fra bildene som *rader* i stedet for *søyler*; forveksle bilde og kjerne; glemme konstantleddet i affinavbildninger; anta lineæritet uten å sjekke.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.5: Drill: radreduksjonspakken — basis · invers · parameter

- **id:** `mat1110-1-5` · **number:** 1.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat1110-1-4`
- **kapitteltype:** drill
- **description:** Hele radreduksjons-repertoaret på eksamensnivå: basisavgjørelse, invers via [A|I], nullrom/rang og parameterløsbarhet — den faste O1-åpningen i det nye regimet, drillet til automatikk med merket føring.
- **Eksamensbelegg:** Dekker sjanger A samlet (14/20, nesten alltid O1 i V2025-regimet). Variantkatalogen: basis-avgjørelse, invers via $[A\,|\,I]$, basis for nullrom/søylerom + rang, parameteravhengig løsbarhet, utvid uavhengig sett til basis. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) still opp riktig matrise (søyler for basisspørsmål, $[A\,|\,I]$ for invers, $[A\,|\,b]$ for løsbarhet); (2) radreduser med **merkede** operasjoner; (3) les av det spørsmålet krever (pivoter → rang/basis; frie variabler → nullrom; $[I\,|\,A^{-1}]$ → invers; konsistens → løsbarhet); (4) formuler konklusjonen med det navngitte kriteriet. Gjennomregnet «O1-case» (basis + invers kjedet) med sensor-margnotater om føringspoengene (merkingen, riktig konklusjonssetning, gjenbruk av inversen). 10–15 oppgaver på eksamensnivå: minst én invers, én basis/utvidelse, én nullrom+rang, én parameterløsbarhet, én kjedet (invers brukt videre).
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Vis at $A = \begin{pmatrix}1&2&0\\0&1&3\\1&0&1\end{pmatrix}$ er inverterbar og finn $A^{-1}$. (b) Bruk (a) til å løse $Ax = (1,1,1)^T$. (c) For hvilke $c$ er $(1,c,c)$ i søylerommet til $A$?»
- **Typiske feil:** Hele føringsfellekatalogen fra 1.1–1.4 under tidspress; regne invers når bare inverterbarhet spørres; basis for søylerom fra trappeform i stedet for original; ikke gjenbruke inversen i neste delpunkt.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Flervariabel differensiering og Jacobi

#### Kapittel 2.1: Partiellderiverte, gradient og tangentplan

- **id:** `mat1110-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Broen fra MAT1100: partiellderiverte og ∇f friskes opp, tangentplan og linearisering settes opp — verktøyet som bærer optimering, funksjonsteoremer og fluks senere.
- **Forkunnskaper (kryssbok):** Gradient og retningsderivert *(MAT1100 kap. 5.4 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)* **forutsettes kjent** og repeteres kun kompakt. [Skalarproduktet](/bok/r2/r2-5-3) (retningsderivert som prikkprodukt).
- **Eksamensbelegg:** Grunnleggende verktøy som inngår i tangentplan, Lagrange og funksjonsteoremene. Gradient/retningsderivert er MAT1100s 100 %-åpningssjanger og *forutsettes*; her ligger tyngden på tangentplan/linearisering som byggesteiner. Nivåkurver/grenser i $\mathbb{R}^2$ er eldre sjanger R (2010–2014, borte etter 2014). Prioritet: **kunne** (bro).
- **Innholdskontrakt:** Partiellderiverte (definisjon via grense + praktisk komponentvis regning); $\nabla f$ satt sammen og evaluert; retningsderivert $\nabla f(a)\cdot u$ (kort repetisjon — forutsatt fra MAT1100); **linearisering/tangentplan** $T_a f(x) = f(a) + \nabla f(a)\cdot(x-a)$ (formelsamlingens $T_aF(x)=F'(a)(x-a)+F(a)$); normalvektor og tangentplanets likning for flate $z = g(x,y)$; høyere partiellderiverte og **at blandede partiellderiverte er like** (Clairaut, kjennskap — brukes i Hesse-matrisen); *bør kjenne til* (kommer etter det viktige): nivåkurver og kontinuitet i origo testet langs $y = ax$ (eldre sjanger R, merket som lav prioritet).
- **Oppgavesjangre:** R + verktøy for D/E/F. Mønstereksempel: «$f(x,y) = x^2 y + \sin(xy)$. Finn tangentplanet til grafen i $(1,0)$ og bruk lineariseringen til å anslå $f(1.1, 0.05)$.»
- **Typiske feil:** Behandle feil variabel som konstant i partiellderivasjonen; glemme kjernefaktoren i sammensetninger; forveksle tangentplanets normalvektor og gradienten til $f$; bruke linearisering langt fra utviklingspunktet uten forbehold.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 2.2: Jacobi-matrisen, kjerneregelen på matriseform og linearisering

- **id:** `mat1110-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-2-1`, `mat1110-1-4`
- **kapitteltype:** teori
- **description:** Den deriverte som matrise: F′ av partiellderiverte, kjerneregelen som matriseprodukt, og lineariseringen som beste lineære avbildning — fundamentet for funksjonsteoremene.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.4 (lineæravbildning ↔ matrise). Jacobi-intro i $\mathbb{R}^2$ fra *(MAT1100 kap. 5.6 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Jacobi-matrisen er selve inngangen til sjanger D (omvendt/implisitt funksjonsteorem, 3/3 i V2025) og til kjerneregelen (formelsamlingen gir matrise- og komponentform). Deriverbarhet via kontinuerlige partiellderiverte navngis slik fasit gjør. Prioritet: **kunne** (verktøy for perfekt-sjangeren D).
- **Innholdskontrakt:** Vektorfunksjoner $F:\mathbb{R}^n\to\mathbb{R}^m$; **Jacobi-matrisen** $F'(x)$ (rad $i$ = $\nabla F_i$); deriverbarhet: teoremveien «kontinuerlige partiellderiverte ⇒ deriverbar» (hovedverktøy, navngis); **kjerneregelen på matriseform** $(G\circ F)'(a) = G'(F(a))\,F'(a)$ (matriseprodukt — rekkefølgen er hele poenget) + komponentform; linearisering $F(x) \approx F(a) + F'(a)(x-a)$; determinanten $\det F'$ (Jacobideterminanten) som varsel om lokal inverterbarhet — bro til kap. 2.3 og til variabelskifte i kap. 4.2; funksjonell avhengighet via $\det F' = 0$ (eldre sjanger R, kjennskap).
- **Oppgavesjangre:** D-forberedelse + R. Mønstereksempel: «$F(u,v) = (u^2 - v^2,\; 2uv)$. Finn $F'(u,v)$, regn $\det F'$, og avgjør hvor $F$ er lokalt inverterbar.» Kjerneregel: «$F(t) = (\cos t, \sin t)$, $g(x,y) = x^2+y^2$. Bruk kjerneregelen til å finne $\frac{d}{dt}g(F(t))$.»
- **Typiske feil:** Transponert Jacobi-matrise (rader/kolonner byttet); kjerneregelens faktorer i feil rekkefølge (ikke-kommutativt produkt); «deriverbar fordi partiellderiverte finnes» (kontinuitet av dem kreves for teoremet); glemme å evaluere $F'$ i riktig punkt før produktet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.3: Omvendt og implisitt funksjonsteorem via Jacobi

- **id:** `mat1110-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat1110-2-2`, `mat1110-1-3`
- **kapitteltype:** teori
- **description:** Regimets faste åpningsteoremer: vis eksistens av omvendt/implisitt funksjon ved Jacobi-inverterbarhet, koble til forrige delpunkts invers, og deriver med de utdelte formlene.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 1.3 (inverterbarhet). Formelsamlingen gir begge derivasjonsformlene.
- **Eksamensbelegg:** Sjanger D, **3/3 i V2025** (alle tre settene åpner med funksjonsteorem). Fasitens grep: regn $F'$, evaluér, og **koble inverterbarheten til foregående delpunkt** (konte O1b bruker inversen fra O1a). Offisiell fasit finnes (V2025). Prioritet: **perfekt** — dette er nivå 1 punkt 2 i prognosen.
- **Innholdskontrakt:** **Omvendt funksjonsteorem**: hvis $F'(a)$ er inverterbar, finnes lokalt en glatt invers $G$ med $G'(F(a)) = F'(a)^{-1}$ (navngis; koble til $A^{-1}$ fra et tidligere delpunkt); **implisitt funksjonsteorem**: for $f(x,g(x)) = 0$ nær $(a,b)$ — sjekk **først** $f(a,b) = 0$, **deretter** $\partial f/\partial y(a,b) \ne 0$, så $g'(a) = -\dfrac{\partial f/\partial x}{\partial f/\partial y}$ (og $\partial g/\partial x$, $\partial g/\partial y$ for flervariabelvarianten, 2024 O5); den generelle systemversjonen (Jacobi-blokk inverterbar); eksistensdelen skrives med teoremnavn, derivasjonsdelen med formelen. **Forutsetningssjekken er halve poenget** — hopp aldri over den.
- **Oppgavesjangre:** D. Mønstereksempel (implisitt): «Vis at likningen $x^2 + xy + y^3 = 3$ definerer $y$ som funksjon $g(x)$ nær $(1,1)$, og finn $g'(1)$.» Mønstereksempel (omvendt): «$F(x,y) = (e^x\cos y,\; e^x\sin y)$. Vis at $F$ er lokalt inverterbar i $(0,0)$ og finn Jacobi-matrisen til den omvendte i $F(0,0)$.»
- **Typiske feil:** Implisitt derivasjon uten forutsetningssjekk (hopper over $f(a,b)=0$ eller $\partial f/\partial y \ne 0$); fortegnsfeil i $g' = -(\partial_x f)/(\partial_y f)$ (glemt minus); regne $F'^{-1}$ på nytt i stedet for å gjenbruke en alt utregnet invers; navngi ikke teoremet som bærer eksistensargumentet.
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Optimering

#### Kapittel 3.1: Stasjonære punkter og Hesse-klassifisering

- **id:** `mat1110-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-2-1`
- **kapitteltype:** teori
- **description:** Løs ∇f = 0 ved substitusjon til én variabel, sett opp Hesse-matrisen eksplisitt, og klassifiser med annenderiverttesten — fast delpunkt i alle regimer.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (gradient, andrederiverte). [Funksjonsdrøfting](/bok/r1/r1-4-6) (ekstremalpunkt-intuisjon i én variabel).
- **Eksamensbelegg:** Sjanger E i 12/20 = 60 %, **fast i alle regimer** (også 3/3 i V2025). Fasitens grep: reduser $\nabla f = 0$ **substitusjonsvis til én variabel** (typisk $x = x^4 \Rightarrow x = 0,1$), og sett **alltid opp Hesse-matrisen eksplisitt** før konklusjon. Offisiell fasit finnes (V2025 ×3). Prioritet: **perfekt**.
- **Innholdskontrakt:** Stasjonære punkter fra $\nabla f = 0$; løsningsteknikken: **substituer den ene likningen inn i den andre** og reduser til én variabel (vanligste feilkilde er å miste løsninger her); **Hesse-matrisen** $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy}\end{pmatrix}$ og **annenderiverttesten** med $D = f_{xx}f_{yy} - f_{xy}^2$ (formelsamlingens $D = AC - B^2$): $D < 0$ ⇒ sadelpunkt; $D > 0, f_{xx} > 0$ ⇒ lokalt min; $D > 0, f_{xx} < 0$ ⇒ lokalt maks; $D = 0$ ⇒ inkonklusiv (testen svikter — nevn det); Hesse i tre variable / definitthet via egenverdier (kjennskap, bro til Del 6); globale ekstremum krever eget argument (bro til 3.2).
- **Oppgavesjangre:** E. Mønstereksempel: «Finn de stasjonære punktene til $f(x,y) = x^3 - 3xy + y^3$ og klassifiser dem.» (Reduser $\nabla f = 0$: $x^2 = y$, $y^2 = x$ ⇒ $x^4 = x$ ⇒ $x = 0, 1$.)
- **Typiske feil:** Miste stasjonære punkter i substitusjonssteget; klassifisere uten å sette opp Hesse-matrisen (fasit krever eksplisitt oppsett); feil fortegnsregel ($D>0$ + $f_{xx}$-fortegn forvekslet); behandle $D = 0$ som avgjort; blande lokalt og globalt ekstremum.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Lagrange, ∇g = 0-sjekk og ekstremalverdisetningen

- **id:** `mat1110-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat1110-3-1`
- **kapitteltype:** teori
- **description:** Betinget optimering med Lagranges metode: sjekk ∇g = 0-tilfellet, del i tilfeller, evaluer alle kandidater, og begrunn eksistens med ekstremalverdisetningen på en kompakt mengde.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 2.1. Formelsamlingen gir Lagranges multiplikatormetode.
- **Eksamensbelegg:** Sjanger F i 12/20 = 60 %, **stigende — 3/3 i V2025**. Fasitens faste disiplin: **sjekk først om $\nabla g = 0$ er mulig** på bibetingelsen (kan gi ekstra kandidat — V2025 ordinær O4 hadde origo — eller utelukkes fordi punktet ikke ligger på flaten); del i tilfeller; **evaluér $f$ i hver kandidat**. Eksistens begrunnes med **ekstremalverdisetningen** på en eksplisitt konstruert kompakt mengde (ikke-tom, lukket, begrenset). Fasiten påpeker når begrunnelse **ikke** forventes. Offisiell fasit finnes (V2025 ×3). Prioritet: **perfekt**.
- **Innholdskontrakt:** Lagranges betingelse $\nabla f = \lambda\nabla g$ + bibetingelsen $g = c$; **$\nabla g = 0$-sjekken** (obligatorisk: enten er $\nabla g = 0$-punktet en ekstra kandidat på flaten, eller det utelukkes); **tilfelledeling** ($\lambda = \ldots$ vs. en variabel $= 0$) for å finne **alle** kandidatpunkter; evaluering av $f$ i hver kandidat og avlesning av min/maks; **ekstremalverdisetningen** (kontinuerlig funksjon på kompakt = lukket + begrenset mengde antar min og maks) — konstruksjon av mengden $K$ og verifikasjon av at den er ikke-tom, lukket og begrenset (V2025 ordinær O4: $K = \{f \le 2, g = 0\}$); flere bibetingelser (kjennskap); **les oppgaveteksten**: fasiten sier når eksistensbegrunnelse ikke kreves.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn største og minste verdi av $f(x,y,z) = (x-1)^2 + y^2 + (z-3)^2$ under bibetingelsen $2x^2 + y^2 = 2z^2$, og begrunn at ekstremalverdiene antas.»
- **Typiske feil:** Hoppe over $\nabla g = 0$-tilfellet (mister kandidatpunkt eller tilfelledeling); ikke evaluere $f$ i alle kandidater før konklusjon; påstå min/maks uten kompakthet (ekstremalverdisetningen krever lukket **og** begrenset); begrunne eksistens når det ikke kreves og bruke tiden feil; regnefeil i tilfelledelingen ($\lambda$ eliminert galt).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Taylor i flere variable

- **id:** `mat1110-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `mat1110-3-1`
- **kapitteltype:** teori
- **description:** Andreordens Taylor-utvikling i flere variable med gradient og Hesse — pensumkrav uten arkivforekomster; lær formen, ikke jag en sjanger som ikke finnes.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 3.1 (gradient, Hesse). [Potensrekker og Taylor-rekker](/bok/s2/s2-7-4) (Taylor-intuisjon i én variabel).
- **Eksamensbelegg:** **Ærlig eksamensvinkel: 0 forekomster i 22 sett.** Formelsamlingen gir Taylors formel med restledd i én variabel; flervariabelversjonen står i emnebeskrivelsen. Dekkes derfor med standardmetode og merkes «ikke arkivbelagt — sjekk nyere sett». Den naturlige koblingen: andreordensleddet ER Hesse-matrisen, så temaet støtter klassifiseringen i 3.1. Prioritet: **kjenne**.
- **Innholdskontrakt:** Andreordens Taylor-polynom $f(a+h) \approx f(a) + \nabla f(a)\cdot h + \tfrac12 h^T H(a) h$; gradientleddet (førsteorden = linearisering fra 2.1) og Hesse-leddet (andreorden); tolkning: i et stasjonært punkt bestemmer Hesse-formen den lokale oppførselen (kobling til 3.1); restledd og feilestimat (kjennskap, parallell til én-variabel-formen i formelsamlingen); Taylor i én variabel repeteres kompakt som utgangspunkt. Hold behandlingen kort — dette er pensum-dekning, ikke drill.
- **Oppgavesjangre:** Ingen arkivbelagt sjanger — oppgaver skrives som direkte utvikling. Mønstereksempel: «Finn andreordens Taylor-polynom til $f(x,y) = e^{x}\cos y$ rundt $(0,0)$.»
- **Typiske feil:** Glemme faktoren $\tfrac12$ på andreordensleddet; feil transponering i $h^T H h$; evaluere gradient/Hesse i feil punkt; blande én- og flervariabel-restleddet.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 3.4: Drill: optimeringspakken — Hesse og Lagrange på eksamensnivå

- **id:** `mat1110-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat1110-3-2`
- **kapitteltype:** drill
- **description:** De to optimeringssjangrene drillet sammen: fri optimering med Hesse og betinget med Lagrange (inkl. ∇g = 0-sjekk og eksistensbegrunnelse) — faste O2–O3-delpunkter i alle regimer.
- **Eksamensbelegg:** Dekker sjanger E (60 %) + F (60 %, 3/3 i V2025) samlet. Variantkatalogen: klassifiser stasjonære punkter; Lagrange på flate/kurve med tilfelledeling; ekstremalverdisetningen på eksplisitt kompakt mengde; kombinert (finn globale ekstremum på et lukket område = indre stasjonære punkter + rand via Lagrange). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): **fri**: (1) $\nabla f = 0$ → reduser til én variabel; (2) alle stasjonære punkter; (3) Hesse i hvert → klassifiser. **Betinget**: (1) $\nabla g = 0$-sjekk; (2) $\nabla f = \lambda\nabla g$ + $g = c$; (3) tilfelledeling → alle kandidater; (4) evaluer $f$; (5) eksistens via ekstremalverdisetningen når kompakt. **Globalt på lukket område**: indre stasjonære (Hesse) + randen (Lagrange/parametrisering) + hjørner → sammenlign $f$-verdiene. Gjennomregnet eksamenscase (Lagrange med $\nabla g = 0$-kandidat + eksistensbegrunnelse) med sensor-margnotater. 10–15 oppgaver på eksamensnivå: minst én med $\nabla g = 0$-kandidat, én der begrunnelse ikke kreves, én kombinert indre+rand.
- **Oppgavesjangre:** E + F. Mønstereksempel: «Finn største og minste verdi av $f(x,y) = x^2 + 2y^2 - x$ på skiven $x^2 + y^2 \le 4$ (indre kandidater med Hesse, rand med Lagrange).»
- **Typiske feil:** Hele fellekatalogen fra 3.1–3.2 under tidspress; glemme randen i globalt-på-område-oppgaver; $\nabla g = 0$-tilfellet uteglemt; eksistens hevdet uten kompakthet; ikke sammenligne alle kandidatverdiene til slutt.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Multiple integraler *(prioritet: PERFEKT — pensumets mest stabile tema, 95 %)*

#### Kapittel 4.1: Dobbeltintegral over kurveavgrenset område

- **id:** `mat1110-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-2-1`
- **kapitteltype:** teori
- **description:** Finn skjæringspunktene, beskriv området med eksplisitte ulikheter, integrer innerst først — 95 %-sjangeren med fasitens føringsstandard.
- **Forkunnskaper (kryssbok):** Kap. 2.1. [Bestemt integral](/bok/r2/r2-2-4) og [Areal mellom kurver](/bok/r2/r2-2-7) (enkeltintegral + arealtolkning).
- **Eksamensbelegg:** Dobbeltintegral i **19/20 = 95 %** — pensumets mest stabile tema, praktisk talt garantert. Offisiell fasit finnes (V2025 ordinær O5a gir $\tfrac{32}{3}$). Fasitens grep: løs skjæringen, beskriv området $\{a \le x \le b,\ u(x) \le y \le v(x)\}$, regn indre integral først og forenkle. Prioritet: **perfekt**.
- **Innholdskontrakt:** Dobbeltintegral som iterert integral; **områdebeskrivelse med eksplisitte ulikheter før oppsett** (sensorkrav); type I ($y$ mellom kurver) og type II ($x$ mellom kurver) — velg rekkefølgen som unngår oppdeling; **finn skjæringspunktene** ved å løse kurvene mot hverandre; indre integral regnes og forenkles først; bytte integrasjonsrekkefølge (Fubini) når den ene retningen er lettere; volum mellom to flater/paraboloider som dobbeltintegral (klassiker 2005–2019); middelverdi over område (kjennskap). Polarkoordinater ved sirkelsymmetri henvises til kap. 4.2.
- **Oppgavesjangre:** G. Mønstereksempel: «La $A$ være området i første kvadrant over $xy = 4$ og under $x + y = 5$. Regn ut $\iint_A y\,dx\,dy$.» (Løs skjæring $x + 4/x = 5$ først.)
- **Typiske feil:** Gjette grensene i stedet for å løse skjæringen; feil integrasjonsrekkefølge som krever oppdeling; glemme å forenkle det indre integralet; blande $dx\,dy$-rekkefølgen med grensene; ikke skrive områdebeskrivelsen som ulikheter før oppsett.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Polarkoordinater og variabelskifte med Jacobideterminant

- **id:** `mat1110-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat1110-4-1`, `mat1110-2-2`
- **kapitteltype:** teori
- **description:** Polar for sirkelsymmetri og det generelle variabelskiftet med Jacobideterminant — inkludert ellipsekoordinatene fra det eldre regimet.
- **Forkunnskaper (kryssbok):** Kap. 4.1, 2.2 (Jacobideterminant). Formelsamlingen gir polar-, sylinder- og kulekoordinatenes Jacobideterminanter.
- **Eksamensbelegg:** Polar er standard for sirkelsymmetriske dobbeltintegral (2024 O3a: $1/(1+x^2+y^2)$ over halvskive). Generelt variabelskifte/Jacobideterminant er sjanger Q (3/20, eldre regime: ellipse-/ellipsoidekoordinater 2005/2010/2013). Prioritet: **kunne** (polar: perfekt; generelt skifte: kjenne).
- **Innholdskontrakt:** **Polarkoordinater** $x = r\cos\theta$, $y = r\sin\theta$, $dA = r\,dr\,d\theta$ — når integranden eller området har sirkelsymmetri; områdebeskrivelse i $(r,\theta)$; **den generelle variabelskifteformelen** $\iint_D f\,dx\,dy = \iint_S f\cdot\left|\dfrac{\partial(x,y)}{\partial(u,v)}\right|\,du\,dv$ (formelsamlingen); Jacobideterminanten regnet eksplisitt; ellipsekoordinater $x = ar\cos\theta$, $y = br\sin\theta$ (Jacobi $abr$) som klassisk anvendelse; valg av skifte fra områdets/integrandens geometri; **absoluttverdi** på Jacobideterminanten (fortegnsfelle). Merk faktor $r$ som lett glemmes.
- **Oppgavesjangre:** G (polar) + Q. Mønstereksempel: «Regn ut $\iint_A e^{-(x^2+y^2)}\,dA$ der $A$ er ringen $1 \le x^2+y^2 \le 4$.» Variabelskifte: «Bruk et passende skifte til å regne $\iint_D dx\,dy$ over ellipsen $\tfrac{x^2}{4} + \tfrac{y^2}{9} \le 1$.»
- **Typiske feil:** Glemme faktoren $r$ (eller Jacobideterminanten generelt); glemme absoluttverdi på Jacobideterminanten; feil $\theta$-grenser for halv-/kvartskiver; bruke polar der kartesisk er enklere og omvendt.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.3: Trippelintegral i sylinder- og kulekoordinater

- **id:** `mat1110-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat1110-4-2`
- **kapitteltype:** teori
- **description:** Velg koordinatsystem etter symmetri, løs skjæringen først, beskriv området med ulikheter og faktoriser integralet — volumsjangeren med fasitens disiplin.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.2. [Volum av omdreiningslegemer](/bok/r2/r2-3-6) (volumtolkning). Formelsamlingen gir sylinder-/kulekoordinatenes volumelementer.
- **Eksamensbelegg:** Sjanger I i 10/20 = 50 %. Offisiell fasit finnes (V2025 ×2). Fasitens grep: **velg system etter symmetri**, **løs skjæringen først** (konte O5: $\sqrt{r^2+1} = \sqrt{9-r^2} \Rightarrow r = 2$), **beskriv området med eksplisitte ulikheter** for $r,\theta,z$ (eller $\rho,\varphi,\theta$), og **faktoriser integralet** i produkt av enkeltintegraler når integranden tillater det (ordinær O6b). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sylinderkoordinater** $dV = r\,dz\,dr\,d\theta$ (for kjegle/paraboloide/sylinder) og **kulekoordinater** $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$ (for kuleskall) — valg etter symmetri; volum $= \iiint 1\,dV$; **skjæringen løses før oppsett** (to flater møtes → finn grensekurven); **områdebeskrivelse med ulikheter**; **faktorisering** når integranden separerer ($r$-del × $\theta$-del); iterert integrasjon i riktig rekkefølge; massesenter/tetthet som kontekst (kjennskap); kartesisk trippelintegral over boks/prisme som utgangspunkt.
- **Oppgavesjangre:** I. Mønstereksempel: «Finn volumet av området avgrenset ovenfra av kula $x^2+y^2+z^2 = 9$ og nedenfra av paraboloiden $z = \sqrt{x^2+y^2+1} \ldots$» (sylinder; løs skjæringen $r = 2$ først, faktoriser $\theta$-delen).
- **Typiske feil:** Feil koordinatvalg for symmetrien; **glemme $r$ eller $\rho^2\sin\varphi$** i volumelementet; gjette grensene der flater møtes i stedet for å løse skjæringen; ikke faktorisere når integranden tillater det (unødig arbeid); feil $\varphi$-grenser i kulekoordinater.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Uegentlige multiple integraler: konvergens via voksende kompakter

- **id:** `mat1110-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `mat1110-4-3`
- **kapitteltype:** teori
- **description:** Definér en voksende følge kompakter, regn integralet over hver, og ta grensen — konvergensteknikken for uegentlige dobbelt- og trippelintegral.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.3. Grensebegrepet for følger fra *(MAT1100 kap. 2.3 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger H (~3/20, men gjennomgående sjanger; offisiell fasit V2025 prøve). Fasitens grep: definér $K_n = \{|x|,|y| \le n\}$ (eller $K_R$ med radius $R$), regn $\iint_{A\cap K_n}$ og ta grensen $n\to\infty$; divergens hvis grensen er $\infty$ (prøve O4: $\tfrac12\ln n \to \infty$). Samme teknikk for uendelig rom-område (2018 O1b: $\lim_{R\to\infty}$ i kulekoordinater). Prioritet: **kunne**.
- **Innholdskontrakt:** Uegentlig multiple integral (ubegrenset område eller ubegrenset integrand); **voksende følge kompakter** $K_n \nearrow \mathbb{R}^2$ (bokser eller skiver etter geometrien); definisjonen $\iint_A f = \lim_{n\to\infty}\iint_{A\cap K_n} f$; **lim-føring** (aldri «sett inn $\infty$»); konvergens vs. divergens fra grenseverdien; valg av kompakt tilpasset symmetrien (skiver for radiell integrand); kobling til polar/kule (regn over $K_R$ i polar, ta $R\to\infty$); ikke-negativ integrand gjør grensen uavhengig av følgen (kjennskap). Bro til tallrekkers/uegentlige integralers konvergens.
- **Oppgavesjangre:** H. Mønstereksempel: «Avgjør om $\iint_{\mathbb{R}^2} \dfrac{dx\,dy}{(1 + x^2 + y^2)^2}$ konvergerer, og finn i så fall verdien.» (Polar over $K_R$, $\lim_{R\to\infty}$.)
- **Typiske feil:** «Sette inn $\infty$» uten lim-føring; velge en kompakt som ikke vokser mot hele området; glemme faktoren $r$ i polar-oppsettet; konkludere konvergens uten å regne grensen; feil håndtering av singularitet i indre punkt.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.5: Drill: multiple integraler — område, koordinatvalg og faktorisering

- **id:** `mat1110-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat1110-4-4`
- **kapitteltype:** drill
- **description:** 95 %-sjangeren drillet: velg riktig koordinatsystem, beskriv området med ulikheter, løs skjæringen først og faktoriser — med fasitens føring hele veien.
- **Eksamensbelegg:** Dekker sjanger G (95 %) + I (50 %) + H (konvergens) samlet — de dyreste, mest garanterte poengene på hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Beslutningstre (algoritme): (1) hvilken dimensjon (dobbelt/trippel)? (2) symmetri → koordinatsystem (kartesisk / polar / sylinder / kule); (3) **løs skjæringen** der flater/kurver møtes; (4) **beskriv området med eksplisitte ulikheter**; (5) riktig volumelement ($r$, $\rho^2\sin\varphi$, Jacobideterminant); (6) integrer innerst først, **faktoriser** når mulig; (7) uegentlig → voksende kompakter + lim. Gjennomregnet eksamenscase (trippelintegral der to flater møtes, sylinder, faktorisert) med sensor-margnotater om føringspoengene (ulikhetene før oppsett, skjæringen, det riktige volumelementet, eksakt svar). 10–15 oppgaver på eksamensnivå: minst én dobbelt (kurveavgrenset), én polar, én sylinder, én kule, én uegentlig med konvergens.
- **Oppgavesjangre:** G + I + H. Mønstereksempel: «Finn volumet av området avgrenset av kjeglen $z = \sqrt{x^2+y^2}$ og planet $z = 2$ (sylinder), og av kula $\rho = 3$ over kjeglen $\varphi = \pi/4$ (kule) — velg system for hver.»
- **Typiske feil:** Hele fellekatalogen fra 4.1–4.4 under tidspress; glemt volumelement-faktor; gjettede grenser; ikke faktorisert; desimaltilnærming der eksakt svar kreves.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Vektoranalyse: Green, Gauss og Stokes *(prioritet: PERFEKT — det nye tyngdepunktet)*

#### Kapittel 5.1: Parametrisering av kurver og flater; det fundamentale vektorproduktet

- **id:** `mat1110-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-2-1`
- **kapitteltype:** teori
- **description:** Parametriser kurver og flater, regn ϕ_u × ϕ_v, og les av flateelement og normalretning — grunnlaget for alle flate- og fluksintegral.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Kryssproduktet](/bok/r2/r2-5-4) og [Vektorer i tre dimensjoner](/bok/r2/r2-5-1). Formelsamlingen gir hastighet/fart/akselerasjon/buelengde og flateintegralformlene.
- **Eksamensbelegg:** Grunnverktøyet for sjanger K/L/M (fluks + Gauss + Stokes, **3/3 og 1/3 i V2025**). Fasiten regner $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ hver gang og sjekker retningen. Buelengde av romkurve er eldre sjanger R (2004/2005). Prioritet: **perfekt** (grunnlag).
- **Innholdskontrakt:** Parametrisering av kurver $r(t)$ (hastighet $r'(t)$, fart $|r'(t)|$, **buelengde** $L = \int_a^b |r'(t)|\,dt$ — formelsamlingen); parametrisering av flater $\boldsymbol{\phi}(u,v)$; **det fundamentale vektorproduktet** $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ (normalvektor til flaten); flateelement $dS = |\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v|\,du\,dv$; enhetsnormal $n = \pm\dfrac{\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v}{|\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v|}$ og **valg av fortegn** etter oppgitt orientering (fasitkrav); standardparametriseringer: graf $z = g(x,y)$, sylinder, kule, plan disk; tangentplan fra $\boldsymbol{\phi}_u, \boldsymbol{\phi}_v$.
- **Oppgavesjangre:** K/L/M-forberedelse + R. Mønstereksempel: «Parametriser flaten $z = x^2 + y^2$, $0 \le z \le 4$, regn $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$, og finn den utadrettede enhetsnormalen.» Buelengde: «Finn lengden av kurven $r(t) = (\cos t, \sin t, t)$, $0 \le t \le 2\pi$.»
- **Typiske feil:** Feil rekkefølge i kryssproduktet (motsatt normalretning); ikke sjekke om $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ peker som oppgitt $n$; glemme absoluttverdi i $dS = |\ldots|\,du\,dv$; parametrisere flaten med feil domene for $(u,v)$.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 5.2: Linjeintegral og Greens teorem

- **id:** `mat1110-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-5-1`, `mat1110-4-1`
- **kapitteltype:** teori
- **description:** Linjeintegral av skalar- og vektorfelt, konservative felt, og Greens teorem for lukkede kurver i planet — fast delpunkt i alle regimer, ofte koblet til et alt utregnet dobbeltintegral.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 4.1. Formelsamlingen gir linjeintegral av skalar-/vektorfelt, integral av gradient, betingelsen for konservativt felt, og Greens teorem.
- **Eksamensbelegg:** Sjanger J i 12/20 = 60 %, **fast i alle regimer** (offisiell fasit V2025 ordinær O5b: $\iint(-3y) = -32$ ved gjenbruk fra O5a). Fasiten identifiserer $P,Q$, regner integranden, og **reduserer ofte til et alt kjent dobbeltintegral**. Areal via Green (2004/2015/2017). Prioritet: **perfekt**.
- **Innholdskontrakt:** Linjeintegral av **skalarfelt** $\int_C f\,ds = \int f(r(t))|r'(t)|\,dt$ og av **vektorfelt** $\int_C F\cdot dr = \int F(r(t))\cdot r'(t)\,dt$; **konservativt felt**: $F = \nabla\varphi \Rightarrow \int_C F\cdot dr = \varphi(\text{slutt}) - \varphi(\text{start})$, og langs lukket kurve $= 0$; nødvendig betingelse $\partial P/\partial y = \partial Q/\partial x$ (formelsamlingen); **Greens teorem** $\oint_C P\,dx + Q\,dy = \iint_A\left(\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}\right)dA$ for positivt orientert (mot klokka) rand; **areal via Green** $A = \oint_C x\,dy = -\oint_C y\,dx$; **orienteringen** av randkurven (fortegn ved feil retning); reduksjon til et alt utregnet dobbeltintegral (delpunkt-kjeding). Direkte parametrisering som gyldig alternativ når kurven ikke er lukket.
- **Oppgavesjangre:** J. Mønstereksempel: «La $C$ være randkurven til området $A$ mellom $y = x^2$ og $y = x$, orientert mot klokka. Regn ut $\oint_C (x^3 + y^2)\,dx - xy\,dy$ med Greens teorem.»
- **Typiske feil:** Feil orientering (glemt fortegn ved med-klokka-rand); forveksle $\partial Q/\partial x - \partial P/\partial y$-rekkefølgen; bruke Green på ikke-lukket kurve; ikke sjekke konservativitet før man påstår $\oint = 0$; ikke gjenbruke et alt utregnet dobbeltintegral.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Flateintegral: skalar ∫f dS og fluks ∫F·n dS

- **id:** `mat1110-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat1110-5-1`
- **kapitteltype:** teori
- **description:** Flateareal og fluks gjennom en flate med ϕ_u × ϕ_v — inkludert den geometriske snarveien for plane flater og fortegnskontrollen fasiten gjør hver gang.
- **Forkunnskaper (kryssbok):** Kap. 5.1. Formelsamlingen gir flateintegral generelt og for $z = g(x,y)$.
- **Eksamensbelegg:** Sjanger K, **3/3 i V2025-regimet** (tross 4/20 rå-frekvens). Offisiell fasit finnes (V2025 ×3). Fasiten viser **to gyldige metoder** for fluks gjennom plan flate (ordinær O6a): geometrisk snarvei ($n = k \Rightarrow F\cdot n = 1 \Rightarrow$ integralet $=$ arealet $= 4\pi$) og full parametrisering. Skalar-varianten dekker flateareal (prøve O5: $y^2$ over sylinderflate; 2024 O3b: areal av $z = 9 - x^2 - y^2$). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Skalar flateintegral** $\int_S f\,dS = \iint f(\boldsymbol{\phi})|\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v|\,du\,dv$ (flateareal $= \int_S 1\,dS$); **fluks** $\int_S F\cdot n\,dS = \iint F(\boldsymbol{\phi})\cdot(\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v)\,du\,dv$ — med **fortegnskontroll**: sjekk at $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ peker samme vei som oppgitt $n$, bytt fortegn ellers; **den geometriske snarveien** for plane flater med konstant integrand ($n$ konstant → $F\cdot n$ konstant → integral $=$ konstant $\times$ areal); formelen for graf $z = g(x,y)$; begge metoder skal vises som likestilte (fasit honorerer alternative løsninger). Bro: fluks gjennom sammensatt flate → divergensteoremet i 5.4.
- **Oppgavesjangre:** K. Mønstereksempel (fluks): «Regn fluksen av $F = (x, y, z)$ ut gjennom den plane disken $z = 2$, $x^2 + y^2 \le 4$, med oppadrettet normal — vis både geometrisk snarvei og full parametrisering.» Mønstereksempel (areal): «Finn arealet av flaten $z = 9 - x^2 - y^2$ over $x^2 + y^2 \le 4$.»
- **Typiske feil:** **Feil fortegn i fluks** ($\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$ motsatt av oppgitt $n$ — fasit sjekker hver gang); glemme absoluttverdi i skalar-varianten men *ikke* i fluks (der fortegnet betyr noe); ikke bruke den geometriske snarveien når den finnes (tidssløsing); feil flateelement for graf-flate.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.4: Gauss' divergensteorem (3D fluks)

- **id:** `mat1110-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-5-3`, `mat1110-4-3`
- **kapitteltype:** teori
- **description:** ∭ div F dV = ∯ F·n dS — regimeskiftets signaturoppgave: finn fluks gjennom en krum delflate ved å trekke den plane delen fra volumintegralet.
- **Forkunnskaper (kryssbok):** Kap. 5.3, 4.3 (trippelintegral). **Merk:** V2022-formelsamlingen gir **ikke** divergensteoremet — det må kunne utenat.
- **Eksamensbelegg:** Sjanger L, **NY signaturoppgave — 3/3 i V2025-regimet**, aldri før 2025 (1/20 rå-frekvens). Offisiell fasit finnes (V2025 ×3). Fasitens grep: finn fluks gjennom **krum delflate** $T_1$ ved $\int_{T_1} F\cdot n\,dS = \iiint_V \operatorname{div}F\,dV - \int_{T_2} F\cdot n\,dS$ (ordinær O6c: $3\cdot\tfrac{8\pi}{5} - 4\pi = \tfrac{4\pi}{5}$). **Alle $n$ må peke ut av $V$.** Dette er det nye tyngdepunktet. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\operatorname{div}F = \partial_x F_1 + \partial_y F_2 + \partial_z F_3$; **divergensteoremet** $\iiint_V \operatorname{div}F\,dV = \oiint_{\partial V} F\cdot n\,dS$ (utadrettet normal på hele randen; teoremet **navngis**); hovedbruken: **fluks gjennom en krum delflate** ved å dele randen $\partial V = T_1 \cup T_2$ og løse $\int_{T_1} F\cdot n\,dS = \iiint_V \operatorname{div}F\,dV - \int_{T_2} F\cdot n\,dS$ (der $T_2$ er den enkle plane delen, regnet med snarveien fra 5.3); **normalretningskontroll** på både $T_1$ og $T_2$ (ut av $V$); **delpunkt-kjeding** ($T_2$-fluksen og trippelintegralet er ofte alt regnet i tidligere delpunkter — gjenbruk dem); når teoremet forenkler ($\operatorname{div}F$ konstant → volum × konstant).
- **Oppgavesjangre:** L. Mønstereksempel: «$F = (x, y, 2z)$ og $V$ er området inne i paraboloiden $z = x^2 + y^2$ under $z = 4$. (a) Regn fluksen ut gjennom lokket $z = 4$. (b) Regn $\iiint_V \operatorname{div}F\,dV$. (c) Bruk divergensteoremet til å finne fluksen ut gjennom den krumme paraboloide-delen.»
- **Typiske feil:** **Feil normalretning på delflatene** ($n$ må peke ut av $V$ på både $T_1$ og $T_2$ — fortegnsfeil på $T_2$ forplanter seg til $T_1$-svaret); ikke navngi teoremet; regne $T_1$ direkte (tungt) i stedet for via volumintegral minus $T_2$; ikke gjenbruke alt utregnede delsvar; regnefeil i $\operatorname{div}F$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.5: Stokes' teorem og curl

- **id:** `mat1110-5-5` · **number:** 5.5 · **estimatedMinutes:** 50 · **prerequisites:** `mat1110-5-4`, `mat1110-5-2`
- **kapitteltype:** teori
- **description:** ∮ F·dr = ∬ curl F·n dS — den nyeste sjangeren (konte 2025): regn curl F, gjenkjenn et alt utregnet felt, og la randbidrag som forsvinner falle bort.
- **Forkunnskaper (kryssbok):** Kap. 5.4, 5.2 (linjeintegral). **Merk:** V2022-formelsamlingen gir **ikke** Stokes — må kunne utenat.
- **Eksamensbelegg:** Sjanger M, **NY — 1/3 i V2025-regimet (konte O6)**, 0/20 ordinært. Offisiell fasit finnes (V2025 konte). Fasitens grep: regn $\operatorname{curl}F$, **gjenkjenn at det er lik et alt utregnet vektorfelt** ($\operatorname{curl}F = G$, og $G\cdot n$-integralet er alt regnet), og bruk at bidraget fra resten av randkurven forsvinner fordi $F = 0$ på de øvrige linjestykkene. Orienteringskontroll (høyrehåndsregel $n \leftrightarrow C$). Prioritet: **kunne** (ny, kun ett sett — men i regimet).
- **Innholdskontrakt:** $\operatorname{curl}F = \nabla\times F$ (determinantformen); **Stokes' teorem** $\oint_C F\cdot dr = \iint_S \operatorname{curl}F\cdot n\,dS$ (teoremet navngis); **orienteringen** (høyrehåndsregel: $n$ og randkurvens retning henger sammen); hovedgrepet: **gjenkjenn $\operatorname{curl}F$ som et alt utregnet felt** og gjenbruk fluksen; **randbidrag som forsvinner** ($F = 0$ på deler av randen → bare ett linjestykke bidrar); Green som planspesialtilfelle av Stokes (rød tråd fra 5.2); konservativt felt ⇒ $\operatorname{curl}F = 0$ (kobling til 5.2). Behandles kort — én arkivforekomst, men innenfor det nye regimet.
- **Oppgavesjangre:** M. Mønstereksempel: «$F = (-y, x, z^2)$ og $C$ er randkurven til flaten $S$: øvre halvkule $x^2+y^2+z^2 = 1$, $z \ge 0$, orientert mot klokka sett ovenfra. Bruk Stokes til å regne $\oint_C F\cdot dr$.»
- **Typiske feil:** Feil orientering ($n$ og $C$ ikke koblet med høyrehåndsregelen); regnefeil i $\operatorname{curl}F$; ikke gjenkjenne at $\operatorname{curl}F$ er et alt utregnet felt (unødig arbeid); glemme at bidrag fra deler der $F = 0$ faller bort.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.6: Drill: vektoranalyse-kjeden O6a–c

- **id:** `mat1110-5-6` · **number:** 5.6 · **estimatedMinutes:** 90 · **prerequisites:** `mat1110-5-5`
- **kapitteltype:** drill
- **description:** Regimets tyngste sluttoppgave drillet som helhet: parametrisert flate → fluks gjennom plan delflate → div F + trippelintegral → fluks gjennom krum delflate via divergensteoremet (evt. Stokes-innslag), med fortegns- og orienteringskontroll hele veien.
- **Eksamensbelegg:** Sjanger K+L(+M) samlet som den kjedede O6-oppgaven — **det nye tyngdepunktet, 3/3 i V2025**. Variantkatalogen: fluks gjennom plan disk (snarvei), $\operatorname{div}F$ + trippelintegral, krum delflate via divergensteoremet, Stokes med gjenkjent curl-felt. Delpunktene er **kjedet** — fasiten gjenbruker eksplisitt O6a og O6b i O6c. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) parametriser flaten(e), regn $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$, **fastsett normalretningen**; (2) fluks gjennom den plane/enkle delen $T_2$ (geometrisk snarvei når mulig); (3) $\operatorname{div}F$ + trippelintegral over $V$ (riktige koordinater, faktorisér); (4) fluks gjennom krum del $T_1 = \iiint_V \operatorname{div}F - T_2$ (divergensteoremet, navngi det); (5) **kontroller at alle $n$ peker ut av $V$**; (6) Stokes-variant: $\operatorname{curl}F$, gjenkjenn felt, randbidrag som forsvinner. Gjennomregnet eksamenscase (full O6a–c-kjede) med sensor-margnotater om fortegns-/orienteringskontrollen og delpunkt-koblingene. 8–12 oppgaver på eksamensnivå, minst tre komplette tre-delers kjeder + én Stokes-variant.
- **Oppgavesjangre:** K + L + M. Mønstereksempel: «$F = (xz, yz, z^2)$, $V$ = området inne i sylinderen $x^2+y^2 = 1$ mellom $z = 0$ og $z = 2$. (a) Fluks ut gjennom topplokket. (b) $\iiint_V \operatorname{div}F\,dV$. (c) Fluks ut gjennom sideflaten via divergensteoremet.»
- **Typiske feil:** Feil fortegn/orientering i ett tidlig delpunkt som forplanter seg gjennom hele kjeden; regne den krumme delflaten direkte i stedet for via divergensteoremet; ikke gjenbruke delsvar; tidsfelle (kjeden er tung — planlegg tiden).
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Beredskap: egenverdier og potensrekker *(prioritet: KUNNE — historisk ryggrad, 0/3 i V2025)*

#### Kapittel 6.1: Egenverdier og egenvektorer

- **id:** `mat1110-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat1110-1-3`
- **kapitteltype:** teori
- **description:** Løs det(λI − A) = 0, finn egenvektorene fra (A − λI)v = 0 — den historiske åpningssjangeren som forsvant i V2025, holdt varm som beredskap.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.3 (radreduksjon, determinant). Formelsamlingen gir egenverdi/egenvektor og betingelsen $\det(\lambda I_n - A) = 0$.
- **Eksamensbelegg:** Sjanger B, **14/20 = 70 % historisk, men 0/3 i V2025** — den tydeligste enkeltmarkøren på regimeskiftet. **Ærlig eksamensvinkel:** var fast åpning 2019/2022/2024 og gjenganger tilbake til 2007, forsvant helt i det nyeste regimet. Ingen offisiell fasit i arkivet (⚠️ metode = faglig standard). Hold varmt som beredskap. Prioritet: **kunne**.
- **Innholdskontrakt:** **Karakteristisk likning** $\det(\lambda I - A) = 0$ (formelsamlingens form; $\det(A - \lambda I) = 0$ ekvivalent); egenverdier med **algebraisk multiplisitet**; **egenvektorer** fra nullrommet til $(A - \lambda I)$ (radreduksjon fra kap. 1.1); egenrom og geometrisk multiplisitet; egenverdier for $2\times2$ og $3\times3$ (håndregning); reelle vs. komplekse egenverdier (kjennskap); **symmetriske matriser** ⇒ reelle egenverdier og ortogonale egenvektorer (spektralteoremet, kjennskap — bro til 6.2); egenverdienes sum $=$ spor, produkt $=$ determinant (kontrollhjelp).
- **Oppgavesjangre:** B. Mønstereksempel: «Finn egenverdiene og egenvektorene til $A = \begin{pmatrix} 2 & 1 \\ 1 & 2\end{pmatrix}$.»
- **Typiske feil:** Fortegnsfeil i $\det(A - \lambda I)$; glemme en egenverdi (multiplisitet); regnefeil i $(A-\lambda I)v = 0$ (bruk radreduksjon, ikke gjetting); oppgi nullvektoren som egenvektor; ikke sjekke sum/produkt mot spor/determinant.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.2: Diagonalisering, Aⁿ og lim Aⁿv (Markov)

- **id:** `mat1110-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-6-1`
- **kapitteltype:** teori
- **description:** A = PDP⁻¹, Aⁿ = PDⁿP⁻¹, og lim Aⁿv via egenvektordekomponering — Markov-langtidsgrensen som var fast slutteksamensstoff før regimeskiftet.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 1.3. Overgangsmatriser fra *(MAT1100 kap. 5.3 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)* modnes her til egenverditeori.
- **Eksamensbelegg:** Sjanger B/C, **12/20 = 60 % historisk, men 0/3 i V2025**. Fasitens to gyldige veier for $\lim A^n v$: (a) egenvektordekomponering (ryddigst, 2022/2024), (b) diagonalisering. Anvendt i befolkning/bestand/Markov (2007/2008/2016/2019/2022/2024). Matrise-kvadratrot / spektralbasis er sjanger C (3/20, eldre: 2011/2015/2017). **Ærlig eksamensvinkel:** historisk ryggrad, borte i nytt regime — beredskap. Prioritet: **kunne**.
- **Innholdskontrakt:** **Diagonalisering** $A = PDP^{-1}$ ($P$ = egenvektorer som søyler, $D$ = egenverdier); når $A$ er diagonaliserbar ($n$ lineært uavhengige egenvektorer); $A^n = PD^nP^{-1}$; **$\lim A^n v$ via egenvektordekomponering**: skriv $v = \sum c_i v_i$, da er $A^n v = \sum c_i\lambda_i^n v_i$ — ledd med $|\lambda| < 1$ dør ut, $\lambda = 1$ gir stasjonær komponent (stokastisk/Markov-matrise), $|\lambda| > 1$ divergerer; **stokastiske/Markov-matriser** (søylesum $= 1$ ⇒ egenverdi $1$; langtidsgrense = stasjonær fordeling); anvendelser (befolkning/bestand/andeler); matrise-kvadratrot $A^{1/2}$ via $D^{1/2}$ (sjanger C, kjennskap); ortogonal diagonalisering av symmetriske matriser (spektralteoremet, kjennskap).
- **Oppgavesjangre:** B + C. Mønstereksempel: «En Markov-matrise $A = \begin{pmatrix} 0.8 & 0.3 \\ 0.2 & 0.7\end{pmatrix}$. Skriv startvektoren $x_0 = (1,0)^T$ som lineærkombinasjon av egenvektorene, og bestem $\lim_{n\to\infty} A^n x_0$.»
- **Typiske feil:** Regne $A^n$ direkte i stedet for å splitte $v$ i egenvektorbasis; glemme at $|\lambda| = 1$-komponenten overlever mens $|\lambda| < 1$ dør; feil $P$/$P^{-1}$-rekkefølge i $PD^nP^{-1}$; anta diagonaliserbarhet uten $n$ uavhengige egenvektorer.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.3: Tallrekker og potensrekkers konvergensområde

- **id:** `mat1110-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Konvergenstestene for tallrekker og konvergensradius/-område for potensrekker med den obligatoriske endepunktsjekken — klassisk poengtap om endepunktene glemmes.
- **Forkunnskaper (kryssbok):** [Uendelige rekker og konvergens](/bok/r2/r2-1-5) og [Geometriske følger](/bok/r2/r2-1-3) (rekkebegrepet fra VGS). Formelsamlingen gir geometriske/binomiske rekker og standard Taylor-rekker.
- **Eksamensbelegg:** Sjanger N (potensrekker) **17/20 = 85 % historisk, men 0/3 i V2025** — nest mest testede tema i gammelt regime, tung karakterskiller. Tallrekker (sjanger O) 5/20. **Ærlig eksamensvinkel:** potensrekker var praktisk talt garantert fram til 2024 og er så forankret i formelsamlingen at boka dekker dem grundig som beredskap; ingen offisiell fasit i arkivet (⚠️). Prioritet: **kunne** (beredskap; tung karakterskiller).
- **Innholdskontrakt:** Rekke som grense av delsummer; **divergenstesten** ($a_n \not\to 0 \Rightarrow$ divergens; $a_n \to 0$ er IKKE nok — harmonisk rekke); **geometrisk rekke** (sum + kriterium $|k| < 1$); **p-rekker**; konvergenstester: **forholdstest** (kvotienttest), **rottest**, **sammenligningstest** og **grensesammenligningstest** (navngi sammenligningsrekken), **integraltest**; alternerende rekker og Leibniz; absolutt vs. betinget konvergens; **potensrekker**: konvergensradius $R = 1/\lim|a_{n+1}/a_n|$ (eller rottest), konvergensintervall, og **den obligatoriske endepunktsjekken** ($x = \pm R$ undersøkes separat med tallrekketestene — glemte endepunkt er klassisk poengtap); konvergensområdets tre utfall.
- **Oppgavesjangre:** N + O. Mønstereksempel (potens): «Finn konvergensområdet til $\sum_{n=1}^\infty \dfrac{x^n}{n+1}$ (husk endepunktene).» Mønstereksempel (tall): «Avgjør om $\sum_{n=1}^\infty \dfrac{n}{n^3+2}$ konvergerer, og navngi testen.»
- **Typiske feil:** **Glemme endepunktsjekken** (den dokumenterte klassikeren); «$a_n \to 0$, altså konvergerer»; forholdstest med $L = 1$ tolket som konvergens (inkonklusiv); sammenligning med feil ulikhetsretning; blande rekkesum og følgegrense.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 6.4: Summering av potensrekker

- **id:** `mat1110-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1110-6-3`
- **kapitteltype:** teori
- **description:** Finn lukket sum ved å manipulere mot en geometrisk eller kjent Taylor-rekke og derivere/integrere leddvis — toppsjiktets karakterskiller i det gamle regimet.
- **Forkunnskaper (kryssbok):** Kap. 6.3; [Potensrekker og Taylor-rekker](/bok/s2/s2-7-4). Formelsamlingen gir standard Taylor-rekker ($e^x$, $\sin$, $\cos$, $\ln(1-x)$, $\arctan$) og geometrisk rekke.
- **Eksamensbelegg:** Sjanger N (summeringsdelen), del av de 85 % historisk. Fasitens to veier: (a) gjenkjenn direkte mot en formelsamlingsrekke, (b) sett opp en hjelpefunksjon og deriver/integrer leddvis (2022 O3c: summen av $\sum x^n/(n+1)$ brukt til å vise $\sum 1/((n+1)2^n) = 2\ln 2$; 2016/2019 O4/2010 O3). **Ærlig eksamensvinkel:** beredskap (0/3 i V2025), men den tyngste karakterskilleren i gammelt regime. Prioritet: **kunne**.
- **Innholdskontrakt:** **Standardrekkene** som referansefamilie: $\dfrac{1}{1-x} = \sum x^n$, $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $\arctan x$ (formelsamlingen); **manipulasjon mot geometrisk/kjent rekke** (indeksskift, faktorisering, multiplikasjon med $x$); **leddvis derivasjon og integrasjon** innenfor konvergensradiusen (med begrunnelse for at det er lov); hjelpefunksjonsmetoden: definér $f(x) = \sum a_n x^n$, deriver/integrer for å gjenkjenne en kjent rekke, integrer/deriver tilbake; **fra potensrekkesum til tallrekkesum** ved innsetting av en $x$-verdi (vis konvergens i punktet først); Abels teorem-idé for endepunkt (kjennskap).
- **Oppgavesjangre:** N. Mønstereksempel: «Finn et lukket uttrykk for $\sum_{n=1}^\infty \dfrac{x^n}{n}$ på konvergensområdet, og bruk det til å regne $\sum_{n=1}^\infty \dfrac{1}{n\,2^n}$.»
- **Typiske feil:** Leddvis derivasjon/integrasjon uten å nevne at det gjelder innenfor $R$; feil indeksskift (mister/legger til et ledd); glemme integrasjonskonstanten ved leddvis integrasjon (bestem den fra ett punkt); sette inn en $x$-verdi utenfor konvergensområdet; ikke vise konvergens i punktet før tallrekkesummen leses av.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 6.5: Kontraksjon, fikspunkt og Newtons metode i flere variable

- **id:** `mat1110-6-5` · **number:** 6.5 · **estimatedMinutes:** 45 · **prerequisites:** `mat1110-6-1`, `mat1110-2-2`
- **kapitteltype:** teori
- **description:** Vis kontraksjon via norm/egenverdi < 1, iterér mot fikspunktet, og kjør Newtons metode for systemer — teoritunge innslag fra 2018 og 2021.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (egenverdier), 2.2 (Jacobi). Formelsamlingen gir Newtons metode $x_{n+1} = x_n - (F'(x_n))^{-1}F(x_n)$.
- **Eksamensbelegg:** Sjanger P, 3/20 (2018, 2021) — dukker opp i teoritunge sett. Fasitens grep: kontraksjon vises ved at **operatornorm / største egenverdi i tallverdi er $< 1$** (2018 O4c: $F(x) = Ax$ kontraksjon fordi begge $|\lambda| < 1$); fikspunkt-iterasjon konvergerer mot det entydige fikspunktet (2021 O3d). Ingen offisiell fasit i arkivet (⚠️). Prioritet: **kjenne**.
- **Innholdskontrakt:** **Kontraksjon** $|F(x) - F(y)| \le K|x-y|$ med $K < 1$; **kontraksjonsbeviset** via norm: spektralradius (største $|\lambda| < 1$) eller en indusert matrisenorm $< 1$ (to gyldige normvalg); **fikspunktprinsippet**: en kontraksjon på et fullstendig rom har entydig fikspunkt, og iterasjonen $z_{n+1} = F(z_n)$ konvergerer mot det; **Newtons metode for system** $x_{n+1} = x_n - (F'(x_n))^{-1}F(x_n)$ (formelen er utdelt) — ett–to iterasjonssteg for hånd; konvergensbetraktninger (kjennskap). Kort behandling — lav frekvens, men teoriaktuelt.
- **Oppgavesjangre:** P. Mønstereksempel: «$F(x) = Ax$ med $A = \begin{pmatrix} 0.5 & 0.2 \\ 0.1 & 0.4\end{pmatrix}$. Vis at $F$ er en kontraksjon, og finn fikspunktet.»
- **Typiske feil:** Hevde kontraksjon uten normargument (må knyttes til $|\lambda| < 1$ / norm $< 1$); anta at fikspunktet finnes uten kontraksjonsbevis; regnefeil i $F'^{-1}$ i Newton-steget; velge en norm der $K \ge 1$ og gi opp (prøv en annen norm).
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 6.6: Differensiallikninger: separable og lineære første ordens

- **id:** `mat1110-6-6` · **number:** 6.6 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Standardmetodene for første ordens differensiallikninger — pensumkrav uten arkivforekomster, dekket kompakt med integrasjonsteknikk.
- **Forkunnskaper (kryssbok):** [Separable differensiallikninger](/bok/s2/s2-2-2) og [Lineære differensiallikninger](/bok/s2/s2-2-3) (S2-nivå). Enkeltvariabel integrasjonsteknikk fra *(MAT1100 Del 4 — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** **Ærlig eksamensvinkel: 0 forekomster i 22 sett.** Står i emnebeskrivelsen; dekkes kompakt med standardmetode og merkes «ikke arkivbelagt — sjekk nyere sett». Systemversjonen kobler til egenverdier (6.1) hvis den skulle dukke opp. Prioritet: **kjenne**.
- **Innholdskontrakt:** Hva en løsning er (verifikasjon ved innsetting); **separable likninger** $y' = f(x)g(y)$ → separer, integrer begge sider, løs for $y$, sjekk konstantløsninger $g(y) = 0$; **lineære første ordens** $y' + p(x)y = q(x)$ → integrerende faktor $e^{\int p\,dx}$; initialverdiproblemer (bestem konstanten); enkle modeller (eksponentiell vekst/avkjøling); lineære systemer $x' = Ax$ løst via egenverdier/egenvektorer (kjennskap, kobling til 6.1–6.2); retningsfelt (kjennskap). Kompakt behandling.
- **Oppgavesjangre:** Ingen arkivbelagt sjanger — oppgaver med diffligning-ramme. Mønstereksempel: «Løs initialverdiproblemet $y' + 2y = e^{-x}$, $y(0) = 3$.»
- **Typiske feil:** Miste konstantløsningene ved separasjon; plassere integrasjonskonstanten feil (før man løser for $y$); fortegnsfeil i $\int p$ for integrerende faktor; ikke verifisere løsningen ved innsetting.
- **Quiz: 10 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Føringsstandarden: slik skriver du en A-besvarelse

- **id:** `mat1110-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–5
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: teoremnavning, merkede radoperasjoner, eksakte svar, fortegns-/orienteringskontroll, eksistensbegrunnelse og delpunkt-gjenbruk — samlet på ett sted.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis (de tre V2025-settene + oppgaveinstrukser 2004–2025): (i) «Begrunn alle svar; vis nok mellomregninger» — ordrett instruks i alle sett; (ii) **teoremer navngis** når de bærer argumentet (omvendt/implisitt funksjonsteorem, ekstremalverdisetningen, annenderiverttesten, Green, divergensteoremet, Stokes); (iii) føringsstandarden (merkede radoperasjoner over `∼`, integrasjonsgrenser som ulikheter før oppsett, bokført substitusjon, **eksakt svar aldri desimal**); (iv) **delpunkt-kjeding** (fasiten gjenbruker eksplisitt tidligere delsvar — konte O1b bruker O1a, O6c bruker O6a+O6b); (v) **eksistensbegrunnelse kun når den kreves — men da riktig** (ekstremalverdisetningen på mengde vist ikke-tom, lukket, begrenset; fasit sier når begrunnelse ikke forventes); (vi) **orientering/fortegn i vektoranalyse** sjekkes hver gang; (vii) **alternative løsninger honoreres** (geometrisk snarvei vs. full parametrisering for plan-fluks; egenvektordekomponering vs. diagonalisering for $\lim A^n v$). Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger: hva som er tilstrekkelig begrunnelse for A–R (én tabell); sjekklisten før innlevering (alle teoremnavn på plass? radoperasjoner merket? integrasjonsgrenser som ulikheter? fortegns-/orienteringskontroll gjort? eksakte svar? delpunkt-koblinger utnyttet?); to kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon — ett Lagrange-eksempel med/uten $\nabla g = 0$-sjekk og eksistensbegrunnelse, ett fluks-eksempel med/uten fortegnskontroll); strategien for kjedede delpunkter (les hele oppgaven først; bruk resultater fra ubesvarte delpunkter der instruksen tillater det).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig fluks-tallverdi, men ville tapt uttelling. Pek på de tre manglene (uklar normalretning, uteglemt teoremnavn, desimalsvar) og skriv den om til full uttelling.»
- **Typiske feil:** Hele feilkatalogens føringsdel: umerkede radoperasjoner, uteglemt teoremnavn, manglende $\nabla g = 0$-sjekk, fluks uten fortegnskontroll, eksistens hevdet uten kompakthet, desimaltilnærming, delpunkt-koblinger ikke utnyttet.
- **Quiz: 15 · Flashcards: 35** (teoremnavn-bank + føringsregler — flashcard-gull)

#### Kapittel 7.2: Midtveissimulering: lineær algebra og flervariabel (uten hjelpemidler)

- **id:** `mat1110-7-2` · **number:** 7.2 · **estimatedMinutes:** 120 · **prerequisites:** `mat1110-7-1` (+ Del 1–3)
- **kapitteltype:** øvingseksamen (midtsemester)
- **description:** Komplett midtsemestersett over pensumvinduet — lineær algebra + start flervariabel — uten hjelpemidler, med føring etter 7.1.
- **Eksamensbelegg/miks:** **Forbeholdskapittel:** arkivet inneholder ingen midtsemestereksamener, så settet er kalibrert på **pensumvinduet** (lineær algebra + start flervariabel) og formen (ingen hjelpemidler utover formelsamling), ikke på dokumentert oppgavefordeling. Miks: **radreduksjon/basis/invers** (sjanger A, 2–3 delpunkter — regimets O1-åpning) + **egenverdier/egenvektorer** (sjanger B, 1 delpunkt — pensumvinduets LA-tyngde, uavhengig av regimeskiftet på avsluttende) + **partiellderiverte/gradient/tangentplan** (sjanger R/verktøy, 1 delpunkt) + **Jacobi + funksjonsteorem** (sjanger D, 1–2 delpunkter) + **stasjonære punkter + Hesse** (sjanger E, 1 delpunkt). Alle oppgaver nyskrevne, uten hjelpemiddel-avhengige tall (regnbart for hånd). Løsningsforslag i `collapsible` per delpunkt som A-besvarelse med `tip`-notat om at midtveisformen er udokumentert (juster mot faktisk midtsemestersett når det foreligger).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Avsluttende simulering 1: V2025-regimet (vektoranalyse-tung)

- **id:** `mat1110-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `mat1110-7-2` (+ Del 4–5)
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett 4-timers sett etter V2025-malen: basis/invers + funksjonsteorem-åpning, optimering, multiple integraler, og vektoranalyse-kjeden med divergensteoremet som klimaks.
- **Eksamensbelegg/miks:** Speiler V2025-malen (**10 deloppgaver som teller likt, 4 timer**, «begrunn alle svar», kjedede delpunkter): **O1 basis/invers + omvendt/implisitt funksjonsteorem** (2 delpunkter, sjanger A + D; inversen fra O1a gjenbrukes i O1b) → **O2 stasjonære punkter + Hesse** (1 delpunkt, sjanger E) → **O3 Lagrange med eksistensbegrunnelse** (2 delpunkter, sjanger F; ekstremalverdisetningen på kompakt mengde) → **O4 dobbeltintegral over kurveavgrenset område** (1 delpunkt, sjanger G, evt. uegentlig med konvergens) → **O5 trippelintegral sylinder/kule** (1 delpunkt, sjanger I; løs skjæringen først) → **O6 vektoranalyse-kjeden** (3 delpunkter, sjanger K + L: parametrisert flate → fluks gjennom plan delflate → $\operatorname{div}F$ + trippelintegral → fluks gjennom krum delflate via divergensteoremet). Delpunktene kjedes som i arkivet (O6c bruker O6a + O6b). Alle oppgaver nyskrevne. Løsningsforslag i `collapsible` per delpunkt som A-besvarelse etter 7.1-standarden, med `tip`-notat om tidsbudsjett (~24 min/deloppgave) og hvor begrunnelses-/fortegnspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Avsluttende simulering 2: gammelt regime (egenverdier + potensrekker)

- **id:** `mat1110-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `mat1110-7-3`
- **kapitteltype:** øvingseksamen (langsvar)
- **description:** Komplett sett nummer to i beredskapsregimet: egenverdier + lim Aⁿv-åpning, potensrekke med sum, Green i planet, og de sjangrene simulering 1 ikke traff — så de to settene sammen dekker A–R.
- **Eksamensbelegg/miks:** Speiler samme mal (10 likt vektede deloppgaver, 4 timer), men i **beredskapsscenariet** og med restsjangrene (sammen dekker 7.3 + 7.4 alle A–R): **O1 egenverdier + egenvektorer + $\lim A^n v$** (2 delpunkter, sjanger B; Markov-kontekst, egenvektordekomponering) → **O2 diagonalisering / matrise-anvendelse** (1 delpunkt, sjanger C) → **O3 potensrekke: konvergensområde med endepunktsjekk + sum** (2 delpunkter, sjanger N; leddvis derivasjon/integrasjon) → **O4 variabelskifte med Jacobideterminant** (1 delpunkt, sjanger Q; ellipsekoordinater) → **O5 linjeintegral med Greens teorem** (1 delpunkt, sjanger J; redusér til dobbeltintegral) → **O6 Stokes' teorem** (1 delpunkt, sjanger M; gjenkjenn curl-felt) → **O7 kontraksjon/fikspunkt** (1 delpunkt, sjanger P) → **O8 flateareal (skalar flateintegral)** (1 delpunkt, sjanger K). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per delpunkt, og `tip`-notat om at dette er beredskapsregimet (verifiser mot faktisk V2026-sett).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne temaprøver — simuleringene (7.2–7.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.5 | 20+20+20+15+15 = **90** | 20+20+20+15+5 = **80** |
| 2 | 2.1–2.3 | 15+15+20 = **50** | 20+15+20 = **55** |
| 3 | 3.1–3.4 | 20+20+10+15 = **65** | 20+20+15+5 = **60** |
| 4 | 4.1–4.5 | 20+15+20+15+15 = **85** | 20+15+20+15+5 = **75** |
| 5 | 5.1–5.6 | 15+20+20+20+15+15 = **105** | 20+20+20+20+15+5 = **100** |
| 6 | 6.1–6.6 | 15+15+15+15+10+10 = **80** | 15+15+20+20+10+15 = **95** |
| 7 | 7.1–7.4 | 15+5+5+5 = **30** | 35+0+0+0 = **35** |
| **Sum** | **34 kap.** | **515 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene og regimeskiftet: **Del 4–5 (multiple
integraler + vektoranalyse — det nye tyngdepunktet) bærer 190 av 515 quiz** og de
tyngste oppgavekvotene; Del 1 (radreduksjon, O1-åpningen) 90; beredskapsdelen
Del 6 holdes på 80 (høy *historisk* vekt, men nedprioritert av regimeskiftet).

---

## 4. Prøver og simuleringer

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (7.1) og poengfordeling. Alt langsvar med full begrunnelse
og eksakte svar.

**Del 1 — Lineær algebra og radreduksjon**
1. Prøve 1.A (35 min): Radreduksjon og trappeform — merkede radoperasjoner, løsningsmengde, parameterløsbarhet (kap. 1.1).
2. Prøve 1.B (40 min): Basis, nullrom og rang — basisavgjørelse + utvidelse + basis for nullrom/søylerom (kap. 1.2).
3. Prøve 1.C (40 min): Invers matrise — $[A\,|\,I]\to[I\,|\,A^{-1}]$ + inverterbarhetskriteriene + gjenbruk til $Ax=b$ (kap. 1.3).
4. Prøve 1.D (45 min): O1-simulering — basis + invers kjedet, med lineæravbildning (hele delen, sjanger A).

**Del 2 — Flervariabel differensiering og Jacobi**
1. Prøve 2.A (30 min): Partiell/gradient/tangentplan — linearisering og anslag (kap. 2.1).
2. Prøve 2.B (35 min): Jacobi-matrise og kjerneregel på matriseform — $\det F'$ og lokal inverterbarhet (kap. 2.2).
3. Prøve 2.C (45 min): Implisitt funksjonsteorem — forutsetningssjekk + $g'$ (kap. 2.3, sjanger D).
4. Prøve 2.D (45 min): Omvendt funksjonsteorem koblet til invers matrise — eksistens + Jacobi til den omvendte (kap. 2.3 + 1.3, sjanger D).

**Del 3 — Optimering**
1. Prøve 3.A (35 min): Stasjonære punkter + Hesse — reduksjon til én variabel + eksplisitt Hesse (kap. 3.1, sjanger E).
2. Prøve 3.B (45 min): Lagrange — $\nabla g=0$-sjekk, tilfelledeling, alle kandidater evaluert (kap. 3.2, sjanger F).
3. Prøve 3.C (40 min): Eksistensbegrunnelse — ekstremalverdisetningen på eksplisitt kompakt mengde (kap. 3.2, toppsjikt).
4. Prøve 3.D (50 min): Kombinert optimering — globale ekstremum på lukket område (indre Hesse + rand-Lagrange) (kap. 3.1–3.4, sjanger E + F).

**Del 4 — Multiple integraler**
1. Prøve 4.A (40 min): Dobbeltintegral over kurveavgrenset område — skjæring + ulikheter + rekkefølge (kap. 4.1, sjanger G).
2. Prøve 4.B (35 min): Polar og variabelskifte — Jacobideterminant, ellipsekoordinater (kap. 4.2, sjanger G + Q).
3. Prøve 4.C (45 min): Trippelintegral — sylinder og kule, løs skjæringen først, faktoriser (kap. 4.3, sjanger I).
4. Prøve 4.D (45 min): Uegentlig + kjede — voksende kompakter med lim + valg av koordinatsystem (kap. 4.4–4.5, sjanger H + G/I).

**Del 5 — Vektoranalyse: Green, Gauss og Stokes**
1. Prøve 5.A (35 min): Parametrisering + linjeintegral/Green — orientering, redusér til dobbeltintegral (kap. 5.1–5.2, sjanger J).
2. Prøve 5.B (40 min): Flateintegral og fluks — skalar areal + fluks med fortegnskontroll, geometrisk snarvei (kap. 5.3, sjanger K).
3. Prøve 5.C (50 min): Divergensteoremet — fluks gjennom krum delflate via $\iiint\operatorname{div}F - T_2$ (kap. 5.4, sjanger L).
4. Prøve 5.D (55 min): Full O6-kjede — parametrisert flate → fluks → div + trippel → krum delflate (+ Stokes-variant) (kap. 5.1–5.6, sjanger K + L + M).

**Del 6 — Beredskap: egenverdier og potensrekker**
1. Prøve 6.A (40 min): Egenverdier + $\lim A^n v$ — egenvektordekomponering, Markov-langtidsgrense (kap. 6.1–6.2, sjanger B).
2. Prøve 6.B (45 min): Potensrekker — konvergensområde med endepunktsjekk + lukket sum ved leddvis derivasjon (kap. 6.3–6.4, sjanger N).
3. Prøve 6.C (30 min): Kontraksjon + Newton — norm/egenverdi $< 1$, fikspunkt, ett Newton-steg (kap. 6.5, sjanger P).
4. Prøve 6.D (35 min): Pensumkrav-tverrsnitt — Taylor flervariabel (fra 3.3) + differensiallikninger (kap. 3.3 + 6.6, «ikke arkivbelagt»).

### Simuleringer (3 komplette sett — se kap. 7.2–7.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Midtveissimulering (kap. 7.2) | Midtsemester (uten hjelpemidler; form udokumentert) | LA + start flervariabel: A(2–3) + B(1) + R/verktøy(1) + D(1–2) + E(1) |
| Avsluttende simulering 1 (kap. 7.3) | V2025-malen (nytt regime) | 10 kjedede deloppgaver / 4 t: A+D(2) + E(1) + F(2) + G(1) + I(1) + K+L(3) |
| Avsluttende simulering 2 (kap. 7.4) | Samme mal, beredskapsregimet | 10 deloppgaver / 4 t: B(2) + C(1) + N(2) + Q(1) + J(1) + M(1) + P(1) + K(1) |

Til sammen dekker de tre settene samtlige sjangre A–R minst én gang, og trener
**begge regimer** (7.3 det nye, 7.4 beredskapen).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **To prøver og regimeskiftet** — vurderingsformen (midtsemester uten
   hjelpemidler mot avsluttende langsvar), regimeskiftet 2025 (vektoranalyse inn,
   egenverdier/potensrekker ut), formathistorikken og de to prognosescenariene
   (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellene omgjort til tre lesenivåer med
   **regimemerke**: perfekt (Del 1 radreduksjon, Del 2 funksjonsteorem 2.3,
   Del 3 optimering, Del 4 multiple integraler, Del 5 vektoranalyse — det nye
   tyngdepunktet), kunne (Del 2.1–2.2, Del 6 egenverdier + potensrekker som
   beredskap), kjenne (Taylor flervariabel 3.3, kontraksjon 6.5, difflikninger
   6.6) — med ærlighetsnotatet om at regimeskiftet hviler på ett årskull.
3. **Sjangerguiden** — A–R med løsningsoppskriftene fra drillkapitlene
   (1.5, 3.4, 4.5, 5.6) i kortform.
4. **Sensorreglene** — «begrunn alle svar», teoremnavning, merkede radoperasjoner,
   integrasjonsgrenser som ulikheter, eksakte svar, fortegns-/orienteringskontroll
   i vektoranalyse, eksistensbegrunnelse (ekstremalverdisetningen på kompakt
   mengde), delpunkt-gjenbruk, alternative løsninger honoreres (fra kap. 7.1) +
   karakterskille-listen.
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet (glemt
   endepunktsjekk, feil fortegn i fluks, hoppet $\nabla g = 0$-tilfelle, feil
   grenser når flater møtes, manglende/feil eksistensbegrunnelse, umerkede
   radoperasjoner, $\lim A^n v$ uten egenvektordekomponering, feil normalretning i
   divergensteoremet, implisitt derivasjon uten forutsetningssjekk, kontraksjon
   uten normargument, desimal i stedet for eksakt, tidsfellen), hver med
   henvisning til kapitlet som forebygger den.
6. **Formel- og teoremliste i kursets notasjon** — apparatet fra
   innholdskontraktene (Gauss–Jordan + inverterbarhetskriteriene, egenverdier +
   diagonalisering + $\lim A^n v$, Jacobi + kjerneregel, omvendt/implisitt
   funksjonsteorem, annenderiverttesten + Hesse, Lagrange + ekstremalverdisetningen,
   dobbelt-/trippelintegral + volumelementene, variabelskifte-Jacobi, linjeintegral
   + Green, flateintegral + fluks + $\boldsymbol{\phi}_u\times\boldsymbol{\phi}_v$,
   **divergensteoremet og Stokes** — merk: *ikke* i V2022-formelsamlingen, må kunnes
   utenat — potensrekkers konvergens/sum, kontraksjon/Newton) — med markering
   *utlede/kunne aktivt* vs. *kun bruke*, og hvilke som mangler i formelsamlingen.
7. **Studieløp** — semestersynkronisert plan: Del 0 → Del 1–2 (+ 6.1 egenverdier
   for pensumvinduet) + midtveissimulering FØR midtsemester; deretter Del 3 → Del 4
   → Del 5 (det nye tyngdepunktet — bruk mest tid her) → beredskap Del 6 →
   prøver → de to avsluttende simuleringene under tidspress (240 min, ~24 min/
   deloppgave). To-spors-notat: prioriter V2025-regimet (7.3), men gå gjennom
   beredskapen (7.4) fordi regimet bare hviler på ett årskull.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat1110` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`, + `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–R, frekvenstallene og
   **regimemerkene** som resten refererer til.
3. **Midtveis-/grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (radreduksjon er
   verktøykassen for alt) → Del 2 (Jacobi) → Del 3 (optimering).
4. **Det nye tyngdepunktet**: Del 4 (multiple integraler) → Del 5 (vektoranalyse;
   5.4 divergensteorem krever 4.3 trippelintegral, 5.2 Green krever 4.1).
5. Del 6 (beredskap; 6.1–6.2 kan bygges parallelt tidlig siden de bare krever
   Del 1) → Del 7 (simuleringene til slutt — de gjenbruker alt og må dekke begge
   regimer).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; temaprøvene (§4) legges som prøvekapitler
   (`mat1110-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon: $\nabla f$, $F'$ (Jacobi), $D = f_{xx}f_{yy}-f_{xy}^2$,
      $dV = r\,dz\,dr\,d\theta$ / $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$,
      $\boldsymbol{\phi}_u\times\boldsymbol{\phi}_v$, $\int F\cdot n\,dS$,
      $\operatorname{div}F$, $\operatorname{curl}F$, $\det(\lambda I - A)=0$.
- [ ] **Notasjonskonsistens (grep over alle mat1110-filer)**: radoperasjoner
      merket over `∼`; **eksakte svar** (aldri desimal i løsningsforslag);
      fluksfortegn/orientering eksplisitt kontrollert; teoremer navngitt.
- [ ] **Føringsstandard i ALLE løsningsforslag**: merkede radoperasjoner;
      integrasjonsgrenser som ulikheter FØR oppsett; bokført substitusjon/
      variabelskifte; teoremnavn der argumentet bæres; fortegns-/orienteringssjekk
      i fluks/Stokes; $\nabla g = 0$-sjekk i Lagrange; verbal konklusjonssetning;
      eksakt sluttsvar markert. Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Regime- og ærlighetsmerking**: egenverdier/Markov (Del 6) og potensrekker
      (6.3–6.4) har Eksamensvinkel som ærlig sier «historisk ryggrad, 0/3 i V2025 —
      beredskap»; Gauss/Stokes (5.4–5.5) har Eksamensvinkel som forklarer at 3/3 og
      1/3 i V2025 veier tyngre enn lav rå-frekvens; Taylor flervariabel (3.3) og
      difflikninger (6.6) merket «ikke arkivbelagt».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — MAT1100-referanser som klartekst med aktiveringsmarkør,
      R1/R2/S2/1T lenket og verifisert), `collapsible` Symbol- og formelliste per
      delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 515 og flashcard-sum ≥ 510** per kvotetabellen
      (kontrollsummér mot §3-tabellen).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + midtveissimulering + 2 avsluttende
      simuleringer som sammen dekker A–R og **begge regimer**.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og
      kontekster; ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett inn); pensumboka refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
