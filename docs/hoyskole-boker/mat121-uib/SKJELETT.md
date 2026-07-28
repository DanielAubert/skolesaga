# Bokskjelett: MAT121 Lineær algebra (UiB) — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (UiBs MAT121-arkiv 2004–2021 + forgjengeren M102/MAT102
> 1997–2003, ~110 filer: oppgavesett, håndskrevne løsningsforslag, pensumlister).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
> Format-forbilde: `../mat1110/SKJELETT.md` (lineær-algebra-innhold, v3), kalibrert
> mot MAT121-analysen. MAT121 er **oppfølgeremnet til MAT111/MAT101** ved UiB
> (`docs/hoyskole-boker/mat111-uib/` — skjelett, ikke bygget), så MAT111-
> forkunnskaper skrives som klartekst med aktiveringsmarkør (se §1.5).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat121-uib` |
| Tittel | **MAT121 Lineær algebra (UiB)** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Bergen (UiB) |
| Arketype | Regnefag (komplett, begrepsrikt teorifag — lineær algebra på Lays struktur) |
| Antall kapitler | **37** (1 eksamenskart + 31 tema/bevis + 5 eksamenstrening) |
| Estimert totaltid | **~2 020 min ≈ 34 timer** |
| Quiz totalt | **554** (krav ≥500) |
| Flashcards totalt | **592** (krav ≥500; sikt 550–650 for et definisjons-/teoremrikt fag) |

**Pitch (ett avsnitt):** MAT121 er UiBs dedikerte innføringsemne i lineær algebra,
bygget tett på pensumboken **David C. Lay, *Linear Algebra and Its Applications***
— notasjonen $\operatorname{Nul}A$, $\operatorname{Col}A$, $\operatorname{Row}A$,
$[\mathbf{x}]_{\mathcal{B}}$, $P_{\mathcal{C}\leftarrow\mathcal{B}}$ er Lays
gjennomgående, og boken bruker den som standard. I motsetning til de fleste emner
varierer MAT121-eksamenen **lite i tema**: hvert sett er bredt og treffer nesten
hele pensum samtidig, så kjernetemaene har gjenganger-score **80–100 %**. Det som
har svingt er **formatet** (papir 2003–2015 → strukturert Inspera 2016–2018 →
flervalg 2019–2021 → **retur til 5-timers skriftlig skoleeksamen fra 2026**), ikke
temaene. Den avgjørende rammeforskjellen mot søsteremnet MAT111: **MAT121 er ikke
åpen bok** — bare kalkulator er tillatt, ingen lærebok, intet formelark. Metodene,
definisjonene og de sentrale teoremene må sitte utenat. Ryggraden boken driller til
automatikk er **oppgave 1-kjeden**: en matrise → radreduksjon (RREF) →
$\operatorname{Nul}/\operatorname{Col}/\operatorname{Row}$, rang → determinant →
egenverdier → diagonalisering. Sensorregelen som preger alt: **«Alle svar skal
begrunnes. Det må være med så mye mellomregning at fremgangsmåten fremgår tydelig
av besvarelsen.»**

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks i alle skriftlige
   sett. Riktig sluttsvar uten føring gir ikke full uttelling. Hvert løsningsforslag
   skrives som **A-besvarelse**: mellomregning ledd for ledd, navngitt teorem der
   argumentet bæres, verbal konklusjonssetning, sluttsvar markert.
2. **Lays notasjon er bokstandard:** $\operatorname{Nul}A$ (nullrom),
   $\operatorname{Col}A$ (kolonnerom), $\operatorname{Row}A$ (radrom),
   $\operatorname{rang}A$; $\operatorname{Span}\{\mathbf{v}_1,\dots\}$;
   koordinatvektor $[\mathbf{x}]_{\mathcal{B}}$; basisskiftematrise
   $P_{\mathcal{C}\leftarrow\mathcal{B}}$ (leses «$\mathcal{C}$ fra $\mathcal{B}$»,
   søylene er $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater);
   $\operatorname{proj}_W\mathbf{y}$; ortogonalkomplement $W^{\perp}$;
   diagonalisering $A=PDP^{-1}$, ortogonal diagonalisering $A=QDQ^{T}$; kvadratisk
   form $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$; normallikningene
   $A^{T}A\hat{\mathbf{x}}=A^{T}\mathbf{b}$; karakteristisk likning
   $\det(A-\lambda I)=0$.
3. **Føringsstandard:** radoperasjoner **merkes over `∼`-tegnet** (`II−2I`,
   `III+I`, radbytter bokføres); pivotsøyler pekes ut på **originalmatrisen** (ikke
   RREF) når $\operatorname{Col}A$-basis leses av; egenvektorer i $P$ og egenverdier
   i $D$ **matches søyle for søyle**; kryssledd i en kvadratisk form **deles på 2**
   inn i $a_{ij}=a_{ji}$; basisskiftematrisen fylles i **riktig retning**.
4. **Eksakte svar** (heltall, brøk, $\sqrt{2}$, $\pi/3$), **aldri**
   desimaltilnærming — tallene er «pene» fordi bare kalkulator er tillatt, og et
   urent svar signaliserer regnefeil.
5. **Teoremer navngis** når de bærer argumentet: **inverterbarhetsteoremet**,
   **dimensjonsteoremet** ($\operatorname{rang}A+\dim\operatorname{Nul}A=$ antall
   søyler), **spektralteoremet** (symmetrisk ⇒ ortogonalt diagonaliserbar),
   multiplisitetsbetingelsen for diagonaliserbarhet, ortogonal dekomposisjon.
   Fasiten forventer at studenten peker på teoremet som bærer konklusjonen.
6. **Delpunktgjenbruk er designet inn.** Deloppgavene er kjedet: samme
   matrise/underrom går igjen (koeffisientmatrisen fra oppgave 1 brukes til
   $\operatorname{Nul}A$, $\operatorname{Col}A$ og $\det A$ senere). Å se koblingen
   sparer tid og premieres — løsningsforslagene i boka viser koblingen eksplisitt.
7. **To produksjonsmåter.** Primærmålet er **fullt begrunnet skriftlig føring**
   (skoleeksamen 2026). Flervalgs-repertoaret 2019–2021 (velg riktig egenvektor-sett,
   riktig diagonalisering, riktig definitthetsklasse, $\det$-egenskaper på øyemål)
   drilles som **sekundær** hurtiggjenkjenning i Del 9. Eksamensvinkel-blokkene
   skiller de to.
8. **Ærlighet om format og arkiv.** (a) Formatet har svingt kraftig; **temaene er
   stabile** — kalibrer på tema, ikke format, og verifiser mot første sett etter
   2026-reformen (eksamen planlagt 22.09.2026). (b) Fasitene i arkivet er
   **håndskrevne**; det finnes ingen skrevne sensormerknader, så metodekravene er
   utledet fra oppgavetekster + Lays etablerte metodikk — merk usikre metodevalg med
   «⚠️ metode = faglig standard». (c) Kjeglesnitt-varianten av kvadratiske former er
   eldre (2007); det **nyere** ansiktet ($Q=\mathbf{x}^{T}A\mathbf{x}$ →
   definitthet) vektes tyngst.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): likningssystemer og
radreduksjon er motoren under alt; matriser/determinant er verktøykassen;
vektorrom/basis/koordinater er språket; lineære avbildninger kobler matrise og
avbildning; egenverdier/diagonalisering hviler på determinant + underrom;
ortogonalitet bygger på indreprodukt; symmetriske matriser/kvadratiske former er
toppen av ortogonalitets- og egenverditeorien; bevisdelen samler de tilbakevendende
teorioppgavene; eksamenstreningen er sist. **Frekvensen styrer omfanget**, ikke
rekkefølgen: nivå 1-temaer (~100 %) får teori + eget drillkapittel; nivå 3 får ett
kompakt kapittel. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer format-svingningene og den stabile temaryggraden. |
| 1 | Likningssystemer og fundamentale underrom | 5 | Gauss/RREF ~100 % + $\operatorname{Nul}/\operatorname{Col}$/rang ~95 % → **den faste oppgave 1-kjeden** → nivå 1 «perfekt» → teori + drill. |
| 2 | Matriser og determinant | 4 | Determinant ~85 % (beregning **og** regneregler) + invers ~55 % + inverterbarhetsteoremet → nivå 1/2 → teori + drill. |
| 3 | Vektorrom, basis og koordinater | 4 | Basis/koordinater/basisskifte ~90 %, $P_{\mathcal{C}\leftarrow\mathcal{B}}$ med riktig retning → nivå 1 → teori + drill; abstrakt vektorrom/$P_n$ som overbygning. |
| 4 | Lineære avbildninger | 4 | Standardmatrise/injektiv-surjektiv/geometri ~85 % → nivå 1 → teori + drill. |
| 5 | Egenverdier og diagonalisering | 3 | Egenverdier ~100 %, diagonalisering ~95 % $A=PDP^{-1}$ → **pensumets tyngste enkelttema** → nivå 1 → teori + drill. |
| 6 | Ortogonalitet, projeksjon og minste kvadrater | 4 | Projeksjon/$W^{\perp}$ ~75 %, Gram-Schmidt ~65 %, minste kvadrater ~65 % (fast fra 2015) → nivå 2 → teori + drill. |
| 7 | Symmetriske matriser og kvadratiske former | 4 | Spektralteorem ~70 %, kvadratiske former ~70 % → nivå 2 (karakterskiller) → teori + drill; indreproduktrom/$P_n$ ~30–35 % som abstrakt overbygning. |
| 8 | Bevis- og teorioppgaven | 3 | Bevisoppgave ~75 % (ofte frivillig/vektet 20 %) → nivå 3 (topp-karakterskiller) → dedikert bevis-del med de tilbakevendende bevistemaene. |
| 9 | Eksamenstrening | 5 | Føringsstandard + flervalgsdrill + 3 komplette øvingseksamener (2 klassiske skriftlige + 1 flervalgsvariant m/bevisoppgaver). |

**Avvik fra DNA-malen (dokumentert):**

1. **37 kapitler — over DNA-taket (20–35).** Begrunnet i PRODUKSJONSLOYPE-lærdommen
   «≥500 er et gulv» og «bøker med >32 kapitler → tilsvarende høyere sum»: MAT121 er
   et **komplett, begrepsrikt teorifag** der hvert sett dekker nesten hele pensum,
   så bredden kan ikke kuttes. Kapitlene holdes fokuserte, og de fem
   drillkapitlene + tre bevis-kapitlene bærer mye av tellingen.
2. **Drillkapitlene ligger i temadelene sine** (1.5, 2.4, 3.4, 4.4, 5.3, 6.4, 7.4)
   i stedet for i siste del: dette er sjangrene som må drilles rett etter teorien.
   Del 9 beholder føringsstandarden, flervalgsdrillen og de tre komplette
   øvingseksamenene.
3. **Egen bevis-del (Del 8).** Bevisoppgaven er en fast (~75 %), men lavvektet og
   ofte frivillig, tradisjon med gjenkjennelige temaer (rangulikheter, Fredholm,
   Cayley-Hamilton, refleksjons-/skjev-symmetriske matriser). Fordi den er
   topp-karakterskilleren og krever en egen ferdighet (skrive et LA-bevis med
   forutsetningssjekk), får den tre dedikerte kapitler i stedet for å smøres utover.
4. **Flervalgsvarianten (kap. 9.4) er sekundær, ikke primær.** Gjeldende
   emnebeskrivelse (2026) sier skriftlig skoleeksamen; flervalgsformatet 2019–2021
   trenes som ekstra hurtigdrill fordi formatet **kan** returnere og fordi det
   fanger konseptuelle spørsmål. Kapitlets Eksamensvinkel sier dette eksplisitt.
5. **Kvadratiske former har to ansikter** (7.2): det nyere
   ($Q=\mathbf{x}^{T}A\mathbf{x}$ → definitthet) vektes tyngst, kjeglesnitt-varianten
   (2007) dekkes som «eldre variant, lavere prioritet».

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** lineært
likningssystem med parameter (eksistens/entydighet), **B** fundamentale underrom
($\operatorname{Nul}/\operatorname{Col}/\operatorname{Row}$, rang, dimensjon), **C**
determinant (beregning + regneregler), **D** basis/koordinater/basisskifte
$P_{\mathcal{C}\leftarrow\mathcal{B}}$, **E** egenverdier/egenvektorer/
diagonalisering $A=PDP^{-1}$, **F** symmetriske matriser/ortogonal diagonalisering/
spektralteorem, **G** kvadratiske former ($Q=\mathbf{x}^{T}A\mathbf{x}$,
klassifisering, prinsipalakser), **H** ortogonalitet (projeksjon,
ortogonalkomplement, ortogonal dekomposisjon), **I** Gram-Schmidt/ortonormal basis,
**J** minste kvadrater (normallikninger, datatilpasning, prediksjon), **K** lineære
avbildninger (standardmatrise, injektiv/surjektiv, komposisjon, geometri), **L**
matriseinvers ($[A\,|\,I]$, adjungert, Cramer, inverterbarhetsteoremet), **M**
teori-/bevisoppgaver, **N** indreproduktrom/polynomrom.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør for MAT111-forkunnskaper:** forgjengerboka (MAT111 Grunnkurs
matematikk I, UiB) er skjelett, ikke bygget. Referanser til den skrives som
klartekst med markøren *(MAT111 — forgjengerbok, ikke bygget ennå; aktiver
`/mat111-uib/<id>`-lenke når den finnes)*. Referanser til bygde bøker lenkes
normalt — kun til kapitler som finnes: **Matematikk for økonomer** (`bi-okonomi`,
Høyskole, bygget) dekker matriser/determinant/Gauss på innføringsnivå og er
primær-ankeret for tidlige forkunnskaper; **R1/R2/1T** dekker vektorer, likningssett
og bevisføring fra VGS.

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: én bred eksamen, fire formatregimer

- **id:** `mat121-uib-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT121: den brede eksamenen som dekker nesten hele pensum hvert år, formatregimene (papir → Inspera → flervalg → skoleeksamen 2026), den stabile temaryggraden, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) **vurderingsformen 2026**: én avsluttende **5-timers skriftlig skoleeksamen** (kl. 09–14), karakterskala A–F, hjelpemiddel **kun kalkulator** (ingen lærebok, intet formelark — apparatet må sitte utenat), to godkjente obligatoriske innleveringer kreves for å gå opp; (ii) **formathistorikken** som forklarer arkivet: papir 4–5 hovedoppgaver 2006–2015, strukturert Inspera 6 oppgaver + frivillig bevisoppgave 2016–2018, flervalg 20 oppgaver à 4 p + 2 bevisoppgaver 2019–2021, retur til skoleeksamen 2026 — **temaene er stabile, bare formatet svinger**; (iii) **den brede eksamenen**: ett sett treffer typisk (1) likningssystem + fundamentale underrom, (2) determinant/basis/koordinater, (3) egenverdier + diagonalisering, (4) ortogonalitet/minste kvadrater, (5) en teori-/bevisoppgave — så de fleste kjernetemaene har gjenganger-score 80–100 %; (iv) **temafrekvens-tabellen** (likningssystem/Gauss ~100 %, egenverdier ~100 %, $\operatorname{Nul}/\operatorname{Col}$/rang ~95 %, diagonalisering ~95 %, basis/koordinater/basisskifte ~90 %, parameteranalyse ~90 %, lineære avbildninger ~85 %, determinant ~85 %, ortogonalitet ~75 %, bevisoppgave ~75 %, spektralteorem ~70 %, kvadratiske former ~70 %, Gram-Schmidt ~65 %, minste kvadrater ~65 % (fast fra 2015), matriseinvers ~55 %, indreproduktrom ~35 %, polynomrom ~30 %); (v) **karakterskillene** (bestått ≈ mekanikken: RREF, $\operatorname{Nul}/\operatorname{Col}$-basis, $\det(A-\lambda I)=0$ for små matriser, standard minste kvadrater, standardmatrise; midtsjikt ≈ + full parameteranalyse, korrekt $A=PDP^{-1}$, $P_{\mathcal{C}\leftarrow\mathcal{B}}$ med riktig retning, Gram-Schmidt + projeksjon, klassifisering av kvadratisk form; toppsjikt ≈ ortogonal diagonalisering med multiplisitet, ikke-diagonaliserbare matriser, bevisoppgaven med navngitte teoremer, apparatet i abstrakte indreproduktrom, delpunkt-koblingene).
- **Innholdskontrakt:** Sjangerkatalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger; prognosen for neste skriftlige eksamen (5–6 hovedoppgaver med begrunnede deloppgaver): **O1** likningssystem med parameter + $\operatorname{Nul}/\operatorname{Col}$/rang/generell løsning; **O2** basis/koordinater/basisskifte $P_{\mathcal{C}\leftarrow\mathcal{B}}$ (evt. med determinant og $[T]_{\mathcal{B}}$); **O3** egenverdier/diagonalisering, for symmetrisk $A$ også ortogonal diagonalisering + kvadratisk form; **O4** minste kvadrater med data, eller ortogonal projeksjon/dekomposisjon + Gram-Schmidt; **O5–O6** lineær avbildning og/eller ortogonalkomplement; **bevisoppgave** (frivillig/vektet) fra §8. Ærlighetsforbeholdet: formatet har svingt — kalibrer på tema, verifiser mot 2026-settet; fasitene er håndskrevne (metode = faglig standard). Leseplan: Del 1 er motoren, Del 5 er tyngdepunktet, Del 8–9 løfter toppkarakteren.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «O2 bruker koeffisientmatrisen fra O1 til $\operatorname{Nul}A$, $\operatorname{Col}A$ og $\det A$ — hvordan planlegger du én oppgave slik at du gjenbruker RREF-en?» og «du kan bare bruke kalkulator — lag en pugge-plan for de teoremene du må kunne navngi utenat».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere den brede ryggraden; undervurdere at MAT121 ikke er åpen bok (metoder/teoremer må sitte utenat); regne uten føring fordi «det gikk greit i flervalg» (koster poeng i skriftlig regime); hoppe over bevisoppgaven fordi den er frivillig (den er topp-karakterskilleren).
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog, formatregimer, sensorregler, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Likningssystemer og fundamentale underrom *(prioritet: PERFEKT — den faste oppgave 1-kjeden, ~100 %)*

#### Kapittel 1.1: Gauss-eliminasjon: trappeform, RREF og merkede radoperasjoner

- **id:** `mat121-uib-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Radreduksjon av den utvidede matrisen til (redusert) trappeform med hver radoperasjon merket over ∼-tegnet — føringsdisiplinen sensor krever, og motoren under hele boka.
- **Forkunnskaper (kryssbok):** [Likningssett](/1t/1t-4-1) og [Lineære likningssystem og Gauss-eliminasjon](/bi-okonomi/bi-okonomi-9-3) (elementær eliminasjon + matriseføring). Matrisenotasjonen bygges fra grunnen her; ingen forkunnskaper i abstrakt lineær algebra forutsettes.
- **Eksamensbelegg:** Grunnteknikken i sjanger A/B (~100 %), **nesten alltid oppgave 1**. Fasitens faste grep: reduser $[A\,|\,\mathbf{b}]$ til trappeform med **eksplisitt merkede radoperasjoner** over hvert `∼`-tegn. Prioritet: **perfekt**.
- **Innholdskontrakt:** Utvidet matrise $[A\,|\,\mathbf{b}]$; de tre elementære radoperasjonene; **trappeform** (echelon) og **redusert trappeform / RREF** (Gauss vs. Gauss–Jordan); ledende én-ere, pivotposisjoner og pivotsøyler; **føringsstandarden**: hver radoperasjon merkes over `∼` (`II−2I`, `III+I`), radbytter bokføres — dette er sensorkrav, ikke pynt; RREF er entydig (kan konkluderes uten uttømmende bevis); løsning avlest av RREF (bundne vs. frie variabler). Alt til aktiv bruk.
- **Oppgavesjangre:** A/B (grunnteknikk). Mønstereksempel: «Radreduser $[A\,|\,\mathbf{b}]$ til RREF med $A=\begin{pmatrix}1&2&-1\\2&3&1\\1&1&2\end{pmatrix}$, $\mathbf{b}=(3,5,4)^{T}$, og merk hver radoperasjon.»
- **Typiske feil:** Radoperasjoner uten merking (føringstrekk); radbytter ikke bokført; regnefeil forplantes fordi mellomtrinn ikke kontrolleres; forveksle trappeform og RREF; slurve med tegn i eliminasjonen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Eksistens og entydighet: parameteranalyse og generell løsning

- **id:** `mat121-uib-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-1-1`
- **kapitteltype:** teori
- **description:** Les pivotmønsteret som funksjon av parameteren: ingen / uendelig mange / nøyaktig én løsning, og skriv den generelle løsningen på parameterform — den klassiske oppgave 1a.
- **Forkunnskaper (kryssbok):** Kap. 1.1. [Likningssett](/1t/1t-4-1) (VGS-eliminasjon som utgangspunkt).
- **Eksamensbelegg:** Sjanger A, **~90 %; nesten alltid oppgave 1**. Fasitens grep: radreduser $[A\,|\,\mathbf{b}]$ med parameteren $a$ (evt. $a,b$) beholdt, og drøft de tre utfallene på pivotmønsteret. For uendelig mange: oppgi **generell løsning på parameterform** $\mathbf{x}=\mathbf{x}_p+\sum x_i\,\mathbf{v}_i$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsmengdens tre utfall lest av trappeformen — **ingen løsning** (pivot i høyre kolonne / rad `0 = ikke-null`), **uendelig mange** (fri variabel / rad `0 = 0`), **nøyaktig én** (pivot i hver variabelkolonne); **parameteranalyse**: hvilke $a$ gjør en pivot til 0 (grensetilfellet må fanges); **generell løsning på parameterform** (partikulær + spenn av frie retninger); homogent system $A\mathbf{x}=\mathbf{0}$ og sammenhengen med den generelle løsningen; konsistens av $A\mathbf{x}=\mathbf{b}$ (er $\mathbf{b}$ i $\operatorname{Col}A$ — bro til 1.3). Alle tre tilfeller skal alltid drøftes eksplisitt.
- **Oppgavesjangre:** A. Mønstereksempel: «For hvilke verdier av $a$ og $b$ har systemet ingen, uendelig mange, eller nøyaktig én løsning? Finn den generelle løsningen for de $a$ som gir uendelig mange.»
- **Typiske feil:** **Parameteranalyse ufullstendig** — ett av de tre tilfellene glemmes, eller grensetilfellet der en pivot blir 0 overses; generell løsning ikke skrevet på parameterform; blande homogen og inhomogen løsning; ikke sjekke konsistens.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.3: Fundamentale underrom: Nul A, Col A, Row A, rang og dimensjon

- **id:** `mat121-uib-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat121-uib-1-2`
- **kapitteltype:** teori
- **description:** Fra RREF til de fundamentale underrommene: basis for Nul A (spesielle løsninger) og for Col A (opprinnelige pivotsøyler), rang og dimensjonsteoremet — den mest gjentatte deloppgaven i faget.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2. [Vektorer i tre dimensjoner](/r2/r2-5-1) (vektorbegrepet i $\mathbb{R}^n$).
- **Eksamensbelegg:** Sjanger B, **~95 %**. Fasitens grep: fra RREF les **basis for $\operatorname{Nul}A$** = de spesielle løsningene (én per fri variabel), **basis for $\operatorname{Col}A$** = de **opprinnelige** pivotsøylene (ikke de reduserte), **rang** = antall pivoter; bruk **dimensjonsteoremet** $\operatorname{rang}A+\dim\operatorname{Nul}A=$ antall søyler. Ofte kjedet til 1.2s matrise. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\operatorname{Nul}A=\{\mathbf{x}:A\mathbf{x}=\mathbf{0}\}$ med **basis fra de frie variablene** (spesielle løsninger); $\operatorname{Col}A=\operatorname{Span}\{\text{søyler}\}$ med **basis fra pivotsøylene i originalmatrisen** (dokumentert felle); $\operatorname{Row}A$ og dens basis (ikke-null-radene i RREF); **rang** = antall pivoter = $\dim\operatorname{Col}A=\dim\operatorname{Row}A$; **dimensjonsteoremet (rang–nullitet)** $\operatorname{rang}A+\dim\operatorname{Nul}A=n$ (navngis); nullitet; typiske tillegg: for hvilke parameterverdier har $\operatorname{Col}A$ dimensjon 3 / er $\operatorname{Nul}A$ ikke-triviell; er en gitt $\mathbf{b}$ i $\operatorname{Col}A$ (løsbarhet av $A\mathbf{x}=\mathbf{b}$).
- **Oppgavesjangre:** B. Mønstereksempel: «Finn en basis for $\operatorname{Nul}A$ og for $\operatorname{Col}A$, og oppgi rangen. For hvilke $a$ har $\operatorname{Col}A$ dimensjon 3?»
- **Typiske feil:** **Feil $\operatorname{Col}A$-basis** — de reduserte pivotsøylene oppgis i stedet for de opprinnelige (den klassiske MAT121-fellen); forveksle $\operatorname{Nul}A$ (frie variabler) og $\operatorname{Col}A$ (pivoter); glemme dimensjonsteoremet som kontroll; blande dimensjon og antall vektorer.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.4: Lineær uavhengighet, span og underrom

- **id:** `mat121-uib-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `mat121-uib-1-3`
- **kapitteltype:** teori
- **description:** Verktøybegrepene under alt: lineær (u)avhengighet avgjort ved radreduksjon, span som underrom, og hvordan en delmengde verifiseres som underrom.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.3. [Vektorregning](/r1/r1-6-2) (lineærkombinasjon i planet).
- **Eksamensbelegg:** Sjanger B (+ N-teori), **~90 %** som byggekloss i basis-/underromsoppgaver. Fasitens grep: «avgjør om vektorene er lineært uavhengige» ⇒ skriv som **søyler**, radreduser, konkluder «pivot i hver søyle ⇒ uavhengige». Prioritet: **perfekt**.
- **Innholdskontrakt:** Lineærkombinasjon og **span** $\operatorname{Span}\{\mathbf{v}_1,\dots,\mathbf{v}_p\}$; **lineær uavhengighet** avgjort ved at $A\mathbf{x}=\mathbf{0}$ bare har den trivielle løsningen (pivot i hver søyle); avhengighetsrelasjon lest av RREF; **underrom** (lukket under addisjon og skalarmultiplikasjon, inneholder $\mathbf{0}$) og sjekkprosedyren; span er alltid et underrom; sammenhengen «$n$ vektorer i $\mathbb{R}^n$ er uavhengige ⇔ spenner $\mathbb{R}^n$ ⇔ kvadratisk matrise radekvivalent med $I_n$» (bro til inverterbarhetsteoremet i 2.1). Verifisér-underrom er også en vanlig kort teorioppgave (sjanger N-forberedelse).
- **Oppgavesjangre:** B + N. Mønstereksempel: «Avgjør om $\mathbf{v}_1=(1,1,0)$, $\mathbf{v}_2=(0,1,1)$, $\mathbf{v}_3=(1,0,-1)$ er lineært uavhengige. Hvis ikke, oppgi en avhengighetsrelasjon og dimensjonen til spennet.»
- **Typiske feil:** Skrive vektorene som rader i stedet for søyler; konkludere uavhengighet uten å vise pivot i hver søyle; glemme å sjekke $\mathbf{0}$-vektoren / lukkethet i underromssjekk; blande «spenner» og «uavhengig».
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.5: Drill: oppgave 1-kjeden — RREF → Nul/Col/rang → parameter

- **id:** `mat121-uib-1-5` · **number:** 1.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat121-uib-1-4`
- **kapitteltype:** drill
- **description:** Hele oppgave 1-repertoaret drillet til automatikk: radreduser én gang og høst løsningsmengde, Nul/Col-basis, rang og parameteranalyse fra samme RREF — med merket føring hele veien.
- **Eksamensbelegg:** Dekker sjanger A + B samlet (~100 %, den faste oppgave 1). Variantkatalogen: parameterløsbarhet (tre tilfeller + generell løsning), $\operatorname{Nul}/\operatorname{Col}/\operatorname{Row}$-basis + rang, dimensjonsteoremet som kontroll, $\mathbf{b}\in\operatorname{Col}A$?. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) still opp riktig matrise ($[A\,|\,\mathbf{b}]$ for løsbarhet, $A$ for underrom); (2) radreduser **én gang** med merkede operasjoner — gjenbruk RREF-en; (3) les av det spørsmålet krever (pivoter → rang/$\operatorname{Col}$-basis fra original; frie variabler → $\operatorname{Nul}$-basis; høyre kolonne → konsistens; parameter → tre tilfeller); (4) konkluder med det navngitte kriteriet + dimensjonsteoremet som kontroll. Gjennomregnet «oppgave 1-case» (parametermatrise brukt til løsbarhet + $\operatorname{Nul}/\operatorname{Col}$ + rang) med sensor-margnotater om føringspoengene (merkingen, riktig $\operatorname{Col}$-basis fra original, alle tre parametertilfeller). 10–15 oppgaver på eksamensnivå: minst én parameterløsbarhet, én $\operatorname{Nul}+\operatorname{Col}+$rang, én $\mathbf{b}\in\operatorname{Col}A$, én kjedet (samme matrise gjenbrukt).
- **Oppgavesjangre:** A + B, alle varianter. Mønstereksempel: «(a) For hvilke $a$ er systemet konsistent? (b) Finn $\operatorname{Nul}A$ og $\operatorname{Col}A$ og rangen for $a=2$. (c) Ligger $(1,0,1)$ i $\operatorname{Col}A$?»
- **Typiske feil:** Hele føringsfellekatalogen fra 1.1–1.4 under tidspress; radreduserer flere ganger i stedet for å gjenbruke RREF-en; $\operatorname{Col}$-basis fra RREF i stedet for original; glemmer et parametertilfelle.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Matriser og determinant

#### Kapittel 2.1: Matrisealgebra og invers matrise

- **id:** `mat121-uib-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-1-4`
- **kapitteltype:** teori
- **description:** Matrisealgebra (produkt, transponert, potens) og invers ved [A | I] → [I | A⁻¹], samlet i inverterbarhetsteoremet — de ekvivalente betingelsene faget kobler tilbake til overalt.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.4. [Matriser og matriseregning](/bi-okonomi/bi-okonomi-9-1) og [Determinanter og invers matrise](/bi-okonomi/bi-okonomi-9-2) (matriseproduktet og 2×2-invers fra økonomi-innføringen).
- **Eksamensbelegg:** Sjanger L, **~55 %** (invers ved $[A\,|\,I]$, løsning av system via $A^{-1}$), men **inverterbarhetsteoremet bæres inn i nesten hver oppgave** som konklusjonsverktøy. Fasitens grep: radreduser $[A\,|\,I_n]$ til $[I_n\,|\,A^{-1}]$; konkluder inverterbarhet med et navngitt kriterium, ikke ved å regne inversen unødig. Prioritet: **kunne** (invers), **perfekt** (inverterbarhetsteoremet som argumentbærer).
- **Innholdskontrakt:** Matriseaddisjon, skalarmultiplikasjon, **matriseprodukt** (rad × søyle, ikke-kommutativt), **transponert** $A^{T}$ og reglene $(AB)^{T}=B^{T}A^{T}$, $(A^{T})^{T}=A$; matrisepotens $A^{k}$; **invers matrise**: definisjon og entydighet, **Gauss–Jordan** $[A\,|\,I_n]\sim\cdots\sim[I_n\,|\,A^{-1}]$ (aktiv, merkede radoperasjoner), $2\times2$-formelen som spesialtilfelle, $(AB)^{-1}=B^{-1}A^{-1}$; **inverterbarhetsteoremet** — de ekvivalente utsagnene: $A$ inverterbar ⇔ radekvivalent med $I_n$ ⇔ $\det A\ne 0$ ⇔ søylene er en basis for $\mathbb{R}^n$ ⇔ $\operatorname{Nul}A=\{\mathbf{0}\}$ ⇔ $A\mathbf{x}=\mathbf{b}$ har entydig løsning for alle $\mathbf{b}$ ⇔ 0 er ikke egenverdi (bro til Del 5); løsning av $A\mathbf{x}=\mathbf{b}$ via $\mathbf{x}=A^{-1}\mathbf{b}$ (og hvorfor radreduksjon oftest er raskere).
- **Oppgavesjangre:** L. Mønstereksempel: «Finn inversen til $A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$ ved å radredusere $[A\,|\,I_3]$, og bruk den til å løse $A\mathbf{x}=(1,0,0)^{T}$.»
- **Typiske feil:** Anta at matriseproduktet er kommutativt; lese feil søyler av $[I_n\,|\,A^{-1}]$; regne inversen når bare *eksistens*/inverterbarhet spørres (tidssløsing); konkludere inverterbarhet uten å vise radekvivalens/determinant; feil i $(AB)^{-1}$-rekkefølgen.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.2: Determinant: beregning og regneregler

- **id:** `mat121-uib-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-2-1`
- **kapitteltype:** teori
- **description:** Determinant ved kofaktorutvikling og radreduksjon, og regnereglene brukt abstrakt — begge ansiktene eksamen tester, med geometrisk tolkning som areal-/volumskalering.
- **Forkunnskaper (kryssbok):** Kap. 2.1. [Determinanter og invers matrise](/bi-okonomi/bi-okonomi-9-2) (2×2- og 3×3-determinant fra økonomi-innføringen).
- **Eksamensbelegg:** Sjanger C, **~85 %**. To ansikter: eldre sett ba om **beregning** (kofaktor/radreduksjon); flervalgsregimet 2019–2021 testet **regnereglene abstrakt** ($\det(4(AB)^{T}A^{-1}C)$ gitt $\det A,\det B,\det C$; determinant av matrise med lineært avhengige søyler; $\det$ som arealskalering). Boken må dekke begge. Prioritet: **perfekt** (nivå 1 punkt 3).
- **Innholdskontrakt:** **Kofaktorutvikling** langs rad/søyle (velg rad/søyle med nuller); determinant ved **radreduksjon** (radbytte $\Rightarrow$ fortegnsbytte, skalering av en rad $\Rightarrow$ samme faktor, addisjon av multiplum $\Rightarrow$ uendret); **regnereglene**: $\det(AB)=\det A\cdot\det B$, $\det(A^{T})=\det A$, $\det(A^{-1})=1/\det A$, $\det(kA)=k^{n}\det A$, $\det(A^{m})=(\det A)^{m}$; **lineært avhengige søyler ⇒ $\det=0$** (og motsatt: $\det\ne 0$ ⇔ inverterbar — kobling til 2.1); triangulær matrise: $\det=$ produkt av diagonalen; **geometrisk tolkning**: $|\det A|$ = areal- (2×2) / volumskalering (3×3) under $\mathbf{x}\mapsto A\mathbf{x}$. Både beregning og abstrakt bruk til aktiv føring.
- **Oppgavesjangre:** C. Mønstereksempel (beregning): «Regn $\det A$ ved kofaktorutvikling for $A=\begin{pmatrix}2&0&1\\1&3&2\\0&1&1\end{pmatrix}$.» Mønstereksempel (regneregler): «La $A,B,C$ være $3\times3$ med $\det A=2$, $\det B=\pi$, $\det C=1$. Finn $\det(4(AB)^{T}A^{-1}C)$.»
- **Typiske feil:** **Regneregler brukt galt** — glemmer $\det(kA)=k^{n}\det A$ (ikke $k\det A$), eller at $\det(A^{T})=\det A$; fortegnsfeil i kofaktorutvikling (sjakkbrettmønsteret); glemmer fortegnsbytte ved radbytte i radreduksjon; konkluderer ikke $\det=0$ fra lineært avhengige søyler.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.3: Determinantens anvendelser: Cramers regel, adjungert og geometri

- **id:** `mat121-uib-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `mat121-uib-2-2`
- **kapitteltype:** teori
- **description:** Cramers regel, invers via adjungert matrise og den geometriske arealtolkningen — determinantens verktøybruk, inkludert heltallsargumentet som dukker opp i bevisoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.2. [Kryssproduktet](/r2/r2-5-4) (determinant som areal/volum-kjennskap).
- **Eksamensbelegg:** Sjanger L (+ M-forberedelse), **~55 %** som verktøy. Fasitens grep: Cramers regel $x_i=\det A_i/\det A$; invers via $A^{-1}=\frac{1}{\det A}\operatorname{adj}A$ (2×2/3×3); det geometriske arealargumentet i flervalg. Cramer inngår også i bevisoppgaven (heltallsløsning når $\det A=1$ — se 8.1). Prioritet: **kunne**.
- **Innholdskontrakt:** **Cramers regel** $x_i=\dfrac{\det A_i}{\det A}$ (der $A_i$ = $A$ med søyle $i$ byttet ut med $\mathbf{b}$), gyldig når $\det A\ne 0$; **kofaktormatrise og adjungert** $\operatorname{adj}A$, formelen $A^{-1}=\frac{1}{\det A}\operatorname{adj}A$; heltallskonsekvensen: $\det A=\pm 1$ og heltallsdata ⇒ heltallsløsning (bro til bevisoppgaven §8); **geometrisk anvendelse**: areal av parallellogram / volum av parallellepiped = $|\det|$, og at en avbildning $\mathbf{x}\mapsto A\mathbf{x}$ skalerer areal/volum med $|\det A|$ (flervalg-favoritt). Merk: Cramer og adjungert er *dyre* for hånd — bruk radreduksjon for store systemer, Cramer/adjungert der oppgaven ber om det eller for et enkelt ledd.
- **Oppgavesjangre:** L. Mønstereksempel: «Bruk Cramers regel til å finne bare $x_2$ i systemet $\ldots$» og «en avbildning $T(\mathbf{x})=A\mathbf{x}$ har $\det A=3$; hva skjer med arealet av enhetskvadratet under $T$?»
- **Typiske feil:** Feil søyle byttet ut i $A_i$; bruke Cramer når $\det A=0$; regnefeil i den store adjungert-matrisen; glemme $\frac{1}{\det A}$-faktoren; forveksle areal- (2×2) og volumtolkning (3×3).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 2.4: Drill: determinant- og inverspakken

- **id:** `mat121-uib-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `mat121-uib-2-3`
- **kapitteltype:** drill
- **description:** Determinant og invers drillet i begge produksjonsmåter: ren beregning med føring, og de abstrakte regnereglene som flervalgsregimet elsket — med inverterbarhetsteoremet som konklusjonsanker.
- **Eksamensbelegg:** Dekker sjanger C (~85 %) + L (~55 %) samlet. Variantkatalogen: kofaktor/radreduksjon-beregning, $[A\,|\,I]$-invers, abstrakt $\det$-kombinasjon ($\det(4(AB)^{T}A^{-1}C)$-typen), $\det$ av parametermatrise ($\det A(a)=0$ ⇒ ikke-inverterbar), Cramer for ett ledd, geometrisk arealskalering. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) for beregning — velg rad/søyle med flest nuller (kofaktor) eller radreduser (bokfør fortegn/faktorer); (2) for regneregler — dekomponer uttrykket ledd for ledd med $\det(AB)$, $\det(A^{T})$, $\det(A^{-1})$, $\det(kA)=k^{n}\det A$; (3) for parameter — sett $\det A(a)=0$ og les av de kritiske verdiene, koble til inverterbarhetsteoremet; (4) konkluder inverterbarhet/singularitet med navngitt kriterium. Gjennomregnet case (parametermatrise: $\det$ + inverterbarhet + $\operatorname{Nul}$ i grensetilfellet) med sensor-margnotater. 10–15 oppgaver: minst én beregning, én abstrakt regneregel-kjede, én parameter-$\det$, én Cramer/geometri.
- **Oppgavesjangre:** C + L. Mønstereksempel: «For hvilke $a$ er $A(a)=\begin{pmatrix}1&a&0\\a&1&0\\0&0&2\end{pmatrix}$ ikke inverterbar? Regn $\det A(a)$, og finn $\operatorname{Nul}A$ i grensetilfellet.»
- **Typiske feil:** Hele fellekatalogen fra 2.1–2.3 under tidspress; $\det(kA)=k\det A$; fortegnsfeil ved radbytte; regne invers når bare inverterbarhet trengs; ikke koble $\det=0$ til singularitet/ikke-triviell $\operatorname{Nul}$.
- **Quiz: 15 · Flashcards: 6**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Vektorrom, basis og koordinater

#### Kapittel 3.1: Vektorrom, underrom og polynomrom

- **id:** `mat121-uib-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-1-4`
- **kapitteltype:** teori
- **description:** Løft fra ℝⁿ til abstrakte vektorrom: aksiomene, underromssjekken, og polynomrommet Pₙ som det viktigste ikke-ℝⁿ-eksempelet — grunnlaget for koordinater og for den abstrakte overbygningen i Del 7.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (span, underrom i $\mathbb{R}^n$). [Vektorer i tre dimensjoner](/r2/r2-5-1) (konkret vektorrom som utgangspunkt).
- **Eksamensbelegg:** Sjanger N-grunnlag, **~30 %** eksplisitt (polynomrom, verifisér-vektorrom), men konseptet bærer koordinater/basisskifte og indreproduktrom. Fasitens grep: verifisér vektorrom/underrom via aksiomene/lukkethet; behandle $P_n$ med standardbasis $\{1,t,\dots,t^n\}$. Prioritet: **kunne** (grunnlag), **kjenne** (abstrakt $P_n$-teori).
- **Innholdskontrakt:** **Vektorromsaksiomene** (de åtte, kompakt — poenget er å gjenkjenne når de holder); **underrom** av et vektorrom (lukket, inneholder $\mathbf{0}$); viktige eksempler: $\mathbb{R}^n$, matriserom, funksjonsrom, og **polynomrommet $P_n$** (polynomer av grad $\le n$) med **standardbasis** $\{1,t,t^2,\dots,t^n\}$ og dimensjon $n+1$; koordinatisomorfi $P_n\cong\mathbb{R}^{n+1}$ (et polynom ↔ koeffisientvektoren); lineær uavhengighet av polynomer via koordinater; $\operatorname{Nul}A$ og $\operatorname{Col}A$ som underrom (kobling tilbake til 1.3). Verifisér-underrom er en tilbakevendende kort teorioppgave.
- **Oppgavesjangre:** N. Mønstereksempel: «Avgjør om mengden av polynomer $p$ i $P_2$ med $p(1)=0$ er et underrom, og finn i så fall en basis og dimensjonen.»
- **Typiske feil:** Glemme $\mathbf{0}$-elementet / lukkethet i underromssjekk; forveksle grad-$\le n$ (vektorrom) med grad-$=n$ (ikke lukket under addisjon); blande polynomets grad og rommets dimensjon ($\dim P_n=n+1$); ikke oversette til koordinater før uavhengighet avgjøres.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Basis, dimensjon og koordinater [x]_B

- **id:** `mat121-uib-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-3-1`
- **kapitteltype:** teori
- **description:** Vis at et sett er en basis, og finn koordinatvektoren [x]_B ved å løse B[x]_B = x — kjernen i oppgave 2, med koordinater både i ℝⁿ og i Pₙ.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 1.4. Determinantkriteriet fra kap. 2.2 (kvadratisk matrise, $\det\ne 0$ ⇒ basis).
- **Eksamensbelegg:** Sjanger D, **~90 %**. Fasitens grep: for å vise basis — lineær uavhengighet + spenner (eller kvadratisk matrise med $\det\ne 0$); for **koordinater** $[\mathbf{x}]_{\mathcal{B}}$ — løs $B[\mathbf{x}]_{\mathcal{B}}=\mathbf{x}$ (der $B$ har basisvektorene som søyler). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Basis** (lineært uavhengig + spenner rommet); dimensjon som antall basisvektorer (veldefinert); det praktiske basiskriteriet i $\mathbb{R}^n$: $n$ vektorer, kvadratisk matrise $B$, **basis ⇔ $\det B\ne 0$ ⇔ radekvivalent med $I_n$**; **koordinatvektor** $[\mathbf{x}]_{\mathcal{B}}$ definert ved $\mathbf{x}=B[\mathbf{x}]_{\mathcal{B}}$, funnet ved å løse systemet $B[\mathbf{x}]_{\mathcal{B}}=\mathbf{x}$ (eller $[\mathbf{x}]_{\mathcal{B}}=B^{-1}\mathbf{x}$); **riktig basis-rekkefølge** i koordinatvektoren (sensorkrav); koordinater i $P_n$ mot standardbasis og mot en annen basis; koordinatavbildningen er lineær og bijektiv. Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «Vis at $\mathcal{B}=\{(1,1,0),(0,1,1),(1,0,1)\}$ er en basis for $\mathbb{R}^3$, og finn $[\mathbf{v}]_{\mathcal{B}}$ for $\mathbf{v}=(2,3,1)$.»
- **Typiske feil:** Påstå basis uten å sjekke både uavhengighet og spenn (eller $\det\ne 0$); koordinater oppgitt i feil rekkefølge; løse $B^{-1}\mathbf{x}$ med regnefeil i inversen; forveksle $\mathbf{x}$ og $[\mathbf{x}]_{\mathcal{B}}$; glemme at $\dim$ er uavhengig av valgt basis.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Basisskifte: matrisen P_{C←B}

- **id:** `mat121-uib-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-3-2`
- **kapitteltype:** teori
- **description:** Basisskiftematrisen P_{C←B} med søylene lik B-vektorenes C-koordinater, relasjonen [x]_C = P_{C←B}[x]_B, og den kritiske retningen — den vanligste feilkilden i oppgave 2.
- **Forkunnskaper (kryssbok):** Kap. 3.2. Invers matrise fra kap. 2.1 ($P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$).
- **Eksamensbelegg:** Sjanger D, **~90 %**. Fasitens grep: **søylene i $P_{\mathcal{C}\leftarrow\mathcal{B}}$ er $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater**; bruk $[\mathbf{x}]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}$; kjenn $P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Basisskiftematrisen** $P_{\mathcal{C}\leftarrow\mathcal{B}}=\big[\,[\mathbf{b}_1]_{\mathcal{C}}\ \cdots\ [\mathbf{b}_n]_{\mathcal{C}}\,\big]$; grunnrelasjonen $[\mathbf{x}]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}$; **retningen** (leses «$\mathcal{C}$ fra $\mathcal{B}$» — tar $\mathcal{B}$-koordinater inn, gir $\mathcal{C}$-koordinater ut); invers-relasjonen $P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$; standard konstruksjonsmetode når $\mathcal{C}$ er standardbasisen ($P_{\mathcal{E}\leftarrow\mathcal{B}}=B$) og den generelle ($[\,C\,|\,B\,]\sim[\,I\,|\,P_{\mathcal{C}\leftarrow\mathcal{B}}\,]$); basisskifte når $\mathbf{b}_i$ er gitt som lineærkombinasjoner av $\mathbf{c}_j$ (les av søylene direkte). Til aktiv føring.
- **Oppgavesjangre:** D. Mønstereksempel: «Gitt basene $\mathcal{B}$ og $\mathcal{C}$ med $\mathbf{b}_1=\mathbf{c}_1+\mathbf{c}_2+\mathbf{c}_3$, $\mathbf{b}_2=-\mathbf{c}_3$, $\mathbf{b}_3=\mathbf{c}_2+\mathbf{c}_3$: finn $P_{\mathcal{C}\leftarrow\mathcal{B}}$ og regn $[\mathbf{v}]_{\mathcal{C}}$ når $[\mathbf{v}]_{\mathcal{B}}=(2,1,-1)$.»
- **Typiske feil:** **Feil retning** — $P_{\mathcal{C}\leftarrow\mathcal{B}}$ forvekslet med $P_{\mathcal{B}\leftarrow\mathcal{C}}$ (invers); søylene fylt med feil koordinatsett (rader i stedet for søyler, eller $\mathcal{C}$-vektorenes $\mathcal{B}$-koordinater); multiplisere med feil vektor; glemme at $P$ er inverterbar.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.4: Drill: basis, koordinater og basisskifte

- **id:** `mat121-uib-3-4` · **number:** 3.4 · **estimatedMinutes:** 75 · **prerequisites:** `mat121-uib-3-3`
- **kapitteltype:** drill
- **description:** Oppgave 2-repertoaret drillet: vis basis, finn koordinater, sett opp P_{C←B} i riktig retning, og koble til determinant og transformasjonsmatrise — med koordinater i både ℝⁿ og Pₙ.
- **Eksamensbelegg:** Dekker sjanger D (~90 %, den faste oppgave 2) samlet. Variantkatalogen: vis basis ($\det\ne 0$), koordinater $[\mathbf{x}]_{\mathcal{B}}$, $P_{\mathcal{C}\leftarrow\mathcal{B}}$ fra lineærkombinasjoner eller via $[\,C\,|\,B\,]$, invers-retningen, koordinater i $P_2$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) basis? — kvadratisk matrise, $\det\ne 0$ (eller RREF $=I_n$); (2) koordinater — løs $B[\mathbf{x}]_{\mathcal{B}}=\mathbf{x}$; (3) basisskifte — søylene er $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater, kontroller retningen ved en testvektor; (4) invers-retning via $(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$. Gjennomregnet oppgave 2-case (basis + koordinater + $P_{\mathcal{C}\leftarrow\mathcal{B}}$ + $[\mathbf{v}]_{\mathcal{C}}$, kjedet) med sensor-margnotater om retningskontrollen og rekkefølgen. 10–15 oppgaver: minst én basis-verifikasjon, én koordinatberegning, én $P_{\mathcal{C}\leftarrow\mathcal{B}}$ begge retninger, én i $P_2$.
- **Oppgavesjangre:** D. Mønstereksempel: «(a) Vis at $\mathcal{B}=\{1+t,\ 1-t,\ t^2\}$ er en basis for $P_2$. (b) Finn koordinatene til $p(t)=3+t+2t^2$ i $\mathcal{B}$. (c) Sett opp basisskiftematrisen fra $\mathcal{B}$ til standardbasisen.»
- **Typiske feil:** Hele fellekatalogen fra 3.2–3.3 under tidspress; feil retning på $P_{\mathcal{C}\leftarrow\mathcal{B}}$; koordinater i feil rekkefølge; ikke oversette polynomer til koordinater før regning.
- **Quiz: 15 · Flashcards: 6**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Lineære avbildninger

#### Kapittel 4.1: Lineære avbildninger og standardmatrisen

- **id:** `mat121-uib-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-2-1`
- **kapitteltype:** teori
- **description:** Definisjonen av en lineær avbildning og standardmatrisen [T] = [T(e₁) … T(eₙ)] — broen mellom avbildning og matrise som bærer hele Del 4.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (matriseprodukt), 1.4 (span/uavhengighet). [Hva er en funksjon?](/1t/1t-3-3) (avbildning generelt).
- **Eksamensbelegg:** Sjanger K, **~85 %**. Fasitens grep: **standardmatrisen** finnes ved å regne bildene av standardbasisvektorene og sette dem som **søyler**: $[T]=[\,T(\mathbf{e}_1)\ \cdots\ T(\mathbf{e}_n)\,]$. Prioritet: **perfekt** (nivå 1 punkt 5).
- **Innholdskontrakt:** **Lineær avbildning** $T:\mathbb{R}^n\to\mathbb{R}^m$ (de to egenskapene: $T(\mathbf{u}+\mathbf{v})=T\mathbf{u}+T\mathbf{v}$, $T(c\mathbf{u})=cT\mathbf{u}$); enhver lineær avbildning er $T(\mathbf{x})=A\mathbf{x}$; **standardmatrisen** $[T]=[\,T(\mathbf{e}_1)\ \cdots\ T(\mathbf{e}_n)\,]$ (kolonnene er bildene av standardbasis); verifisere linearitet fra en formel (og moteksempler: $\mathbf{x}\mapsto A\mathbf{x}+\mathbf{b}$ med $\mathbf{b}\ne\mathbf{0}$ er ikke lineær); linearitet bevart under sammensetning og skalering. Til aktiv bruk; abstrakt $T:V\to W$ mellom vektorrom nevnes (kobling til 4.3s $[T]_{\mathcal{B}}$).
- **Oppgavesjangre:** K. Mønstereksempel: «$T:\mathbb{R}^2\to\mathbb{R}^3$ er gitt ved $T(x,y)=(x+y,\ x-y,\ 2x)$. Vis at $T$ er lineær og finn standardmatrisen.»
- **Typiske feil:** Bygge standardmatrisen fra bildene som **rader** i stedet for søyler; anta linearitet uten å sjekke begge egenskapene; behandle en affin avbildning ($+\mathbf{b}$) som lineær; regnefeil i $T(\mathbf{e}_i)$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.2: Injektiv, surjektiv, kjerne, bilde og komposisjon

- **id:** `mat121-uib-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-4-1`
- **kapitteltype:** teori
- **description:** Én-til-én ⇔ Nul[T] = {0}, på ⇔ pivot i hver rad, kjerne og bilde knyttet til underrommene, og komposisjon som matriseprodukt — egenskapene sensor spør etter.
- **Forkunnskaper (kryssbok):** Kap. 4.1, 1.3 (fundamentale underrom). Inverterbarhetsteoremet fra kap. 2.1.
- **Eksamensbelegg:** Sjanger K, **~85 %**. Fasitens grep: **én-til-én ⇔ søylene lineært uavhengige ⇔ $\operatorname{Nul}[T]=\{\mathbf{0}\}$**; **på ⇔ søylene spenner kodomenet ⇔ pivot i hver rad**. Komposisjon $S\circ T\leftrightarrow[S][T]$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kjerne** $\ker T=\operatorname{Nul}[T]$ og **bilde** $\operatorname{im}T=\operatorname{Col}[T]$ (kobling til 1.3); **injektiv (én-til-én)** ⇔ $\ker T=\{\mathbf{0}\}$ ⇔ søylene i $[T]$ lineært uavhengige ⇔ pivot i hver søyle; **surjektiv (på)** ⇔ $\operatorname{im}T=\mathbb{R}^m$ ⇔ søylene spenner $\mathbb{R}^m$ ⇔ pivot i hver rad; dimensjonsteoremet for avbildninger ($\dim\ker+\dim\operatorname{im}=n$); **komposisjon** $S\circ T$ har matrise $[S][T]$ (rekkefølgen er poenget); invers avbildning ↔ invers matrise (bijektiv ⇔ $[T]$ inverterbar, krever $m=n$); bijeksjon i $\mathbb{R}^n$ via inverterbarhetsteoremet.
- **Oppgavesjangre:** K. Mønstereksempel: «Avgjør om $T(\mathbf{x})=A\mathbf{x}$ med $A=\begin{pmatrix}1&2\\2&4\\0&1\end{pmatrix}$ er injektiv og/eller surjektiv, og finn en basis for $\ker T$ og $\operatorname{im}T$.»
- **Typiske feil:** Forveksle injektiv (søyler/kolonner) og surjektiv (rader); blande kjerne og bilde; komposisjonens faktorer i feil rekkefølge; hevde bijeksjon når $m\ne n$; ikke koble til $\operatorname{Nul}/\operatorname{Col}$-teknikken fra Del 1.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.3: Geometriske avbildninger og matrisen relativt til en basis [T]_B

- **id:** `mat121-uib-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-4-2`, `mat121-uib-3-3`
- **kapitteltype:** teori
- **description:** Rotasjon, refleksjon og projeksjon som matriser, og matrisen [T]_B relativt til en basis via basisskifte — der lineære avbildninger møter koordinater.
- **Forkunnskaper (kryssbok):** Kap. 4.2, 3.3 (basisskifte). [Kryssproduktet](/r2/r2-5-4) og [Skalarproduktet](/r2/r2-5-3) (geometrien bak projeksjon/refleksjon).
- **Eksamensbelegg:** Sjanger K (+ E-bro), **~85 %**. Fasitens grep: rotasjonsmatrisen $\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$; refleksjon/projeksjon fra bildet av basisvektorene; **matrisen relativt til en basis** $[T]_{\mathcal{B}}$ via basisskifte $[T]_{\mathcal{B}}=P^{-1}[T]P$ (similaritet — bro til diagonalisering i Del 5). Prioritet: **perfekt** (geometri), **kunne** ($[T]_{\mathcal{B}}$).
- **Innholdskontrakt:** **Geometriske avbildninger i $\mathbb{R}^2$**: rotasjon $\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$, refleksjon om en linje gjennom origo, ortogonal projeksjon på en linje/et plan (finn kjerne og bilde); skalering/skjæring (kjennskap); **matrisen til $T$ relativt til en basis** $\mathcal{B}$: $[T(\mathbf{x})]_{\mathcal{B}}=[T]_{\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}$, og sammenhengen $[T]_{\mathcal{B}}=P^{-1}AP$ der $P=P_{\mathcal{E}\leftarrow\mathcal{B}}$ (similaritet); poenget: en lur basis gjør $[T]_{\mathcal{B}}$ diagonal (forvarsel om diagonalisering); komposisjon av geometriske avbildninger (rotasjon∘refleksjon). Til aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «$T:\mathbb{R}^2\to\mathbb{R}^2$ speiler om linjen $y=x$. Finn standardmatrisen, og finn matrisen $[T]_{\mathcal{B}}$ i basisen $\mathcal{B}=\{(1,1),(1,-1)\}$.»
- **Typiske feil:** Fortegnsfeil i rotasjonsmatrisen (feil retning); refleksjon/projeksjon fra feil basisvektor-bilder; feil retning på $P$ i $[T]_{\mathcal{B}}=P^{-1}AP$; forveksle standardmatrise og $[T]_{\mathcal{B}}$.
- **Quiz: 15 · Flashcards: 18**

#### Kapittel 4.4: Drill: lineære avbildninger

- **id:** `mat121-uib-4-4` · **number:** 4.4 · **estimatedMinutes:** 70 · **prerequisites:** `mat121-uib-4-3`
- **kapitteltype:** drill
- **description:** Hele avbildnings-repertoaret drillet: standardmatrise, injektiv/surjektiv med kjerne/bilde, geometriske avbildninger og [T]_B — den faste oppgave 5–6.
- **Eksamensbelegg:** Dekker sjanger K (~85 %) samlet. Variantkatalogen: standardmatrise fra formel, injektiv/surjektiv-avgjørelse + basis for kjerne/bilde, geometrisk avbildning (rotasjon/refleksjon/projeksjon), $[T]_{\mathcal{B}}$ via basisskifte, komposisjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) standardmatrise fra $T(\mathbf{e}_i)$ som søyler; (2) injektiv? — $\operatorname{Nul}[T]=\{\mathbf{0}\}$ (pivot i hver søyle); på? — pivot i hver rad; (3) kjerne/bilde-basis via Del 1-teknikken; (4) geometri fra basisvektor-bilder; (5) $[T]_{\mathcal{B}}=P^{-1}[T]P$ med riktig $P$. Gjennomregnet oppgave 5-case (standardmatrise + injektiv/surjektiv + kjerne/bilde, kjedet med en geometrisk tolkning) med sensor-margnotater. 10–15 oppgaver: minst én standardmatrise + egenskaper, én geometrisk, én $[T]_{\mathcal{B}}$, én komposisjon.
- **Oppgavesjangre:** K. Mønstereksempel: «$T$ projiserer $\mathbb{R}^3$ ortogonalt ned på planet $z=0$. (a) Finn standardmatrisen. (b) Er $T$ injektiv? Surjektiv? (c) Finn en basis for $\ker T$ og $\operatorname{im}T$.»
- **Typiske feil:** Hele fellekatalogen fra 4.1–4.3 under tidspress; rader/søyler byttet i standardmatrisen; injektiv/surjektiv forvekslet; feil $P$-retning i $[T]_{\mathcal{B}}$.
- **Quiz: 15 · Flashcards: 6**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Egenverdier og diagonalisering *(prioritet: PERFEKT — pensumets tyngste enkelttema, ~100 %)*

#### Kapittel 5.1: Egenverdier, egenvektorer og karakteristisk polynom

- **id:** `mat121-uib-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-2-2`
- **kapitteltype:** teori
- **description:** Løs det(A − λI) = 0 for egenverdiene og (A − λI)v = 0 for egenrommet — den mest garanterte deloppgaven i faget, med algebraisk mot geometrisk multiplisitet.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (determinant), 1.3 ($\operatorname{Nul}$ ved radreduksjon). Inverterbarhetsteoremet fra kap. 2.1 (0 er egenverdi ⇔ singulær).
- **Eksamensbelegg:** Sjanger E, **~100 %**. Fasitens grep: løs den **karakteristiske likningen** $\det(A-\lambda I)=0$ for egenverdiene (små heltall, pene tall), finn egenvektorene fra $\operatorname{Nul}(A-\lambda I)$ (basis for hvert egenrom). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Egenverdi/egenvektor** ($A\mathbf{v}=\lambda\mathbf{v}$, $\mathbf{v}\ne\mathbf{0}$); **karakteristisk polynom** og likning $\det(A-\lambda I)=0$; egenverdier med **algebraisk multiplisitet**; **egenrom** $E_\lambda=\operatorname{Nul}(A-\lambda I)$ (basis ved radreduksjon fra Del 1) og **geometrisk multiplisitet** ($=\dim E_\lambda$); alltid $1\le$ geometrisk $\le$ algebraisk; egenverdier for $2\times2$ og $3\times3$ for hånd; **spor og determinant som kontroll** (sum av egenverdier $=\operatorname{tr}A$, produkt $=\det A$); 0 er egenverdi ⇔ $A$ singulær (kobling til inverterbarhetsteoremet); reelle vs. komplekse egenverdier (kjennskap, dybde i 5.2); **similære matriser** deler karakteristisk polynom, egenverdier, $\det$ og spor. Til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn alle egenverdier og en basis for hvert egenrom til $A=\begin{pmatrix}2&1&0\\0&2&0\\0&0&3\end{pmatrix}$, og oppgi algebraisk og geometrisk multiplisitet for hver egenverdi.»
- **Typiske feil:** Fortegnsfeil i $\det(A-\lambda I)$; glemme en egenverdi (multiplisitet); regnefeil i $(A-\lambda I)\mathbf{v}=\mathbf{0}$ (bruk radreduksjon, ikke gjetting); oppgi nullvektoren som egenvektor; ikke sjekke sum/produkt mot spor/determinant.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.2: Diagonalisering A = PDP⁻¹, multiplisitet og potens

- **id:** `mat121-uib-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat121-uib-5-1`
- **kapitteltype:** teori
- **description:** A = PDP⁻¹ med egenvektorer i P og egenverdier i D (matchet søyle for søyle), diagonaliserbarhetskriteriet via multiplisitet, og Aⁿ = PDⁿP⁻¹ — inkludert når diagonalisering svikter.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 2.1 (invers). Similaritet fra kap. 4.3 ($[T]_{\mathcal{B}}=P^{-1}AP$).
- **Eksamensbelegg:** Sjanger E, **~95 %**. Fasitens grep: **diagonaliserbar ⇔ sum av geometriske multiplisiteter $=n$** ⇔ full sett lineært uavhengige egenvektorer; da $A=PDP^{-1}$ med egenvektorer som søyler i $P$ og egenverdier i $D$ i **samme rekkefølge**; $A^n=PD^nP^{-1}$. **Manglende diagonaliserbarhet** når geometrisk $<$ algebraisk multiplisitet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Diagonaliseringsteoremet**: $A$ diagonaliserbar ⇔ $A$ har $n$ lineært uavhengige egenvektorer ⇔ sum av geometriske multiplisiteter $=n$; konstruksjonen $A=PDP^{-1}$ ($P$ = egenvektorer som søyler, $D$ = egenverdier på diagonalen, **matchet søyle for søyle**); tilstrekkelig betingelse: $n$ **distinkte** egenverdier ⇒ diagonaliserbar (men ikke nødvendig); **ikke-diagonaliserbar** eksempel (geometrisk $<$ algebraisk, f.eks. $\begin{pmatrix}2&1\\0&2\end{pmatrix}$); **matrisepotens** $A^n=PD^nP^{-1}$ og anvendelse (rekursjoner, langtidsoppførsel — kjennskap); similaritet som ekvivalensrelasjon; komplekse egenverdier gir rotasjon-skalering (kort, kjennskap); bro: symmetrisk $A$ er alltid (ortogonalt) diagonaliserbar — spektralteoremet i Del 7. Til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Avgjør om $A=\begin{pmatrix}5&-1\\2&2\end{pmatrix}$ er diagonaliserbar. Hvis ja, oppgi $P$ og $D$ slik at $A=PDP^{-1}$, og regn $A^4$.»
- **Typiske feil:** **$P$ og $D$ i feil rekkefølge** (egenvektorer og egenverdier matcher ikke søyle for søyle ⇒ $A\ne PDP^{-1}$); **diagonaliserbarhet forvekslet med inverterbarhet** (en matrise kan være diagonaliserbar uten å være inverterbar og omvendt); påstå diagonaliserbarhet uten å telle uavhengige egenvektorer; feil $P^{-1}$; glemme at gjentatt egenverdi krever geometrisk multiplisitetssjekk.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.3: Drill: egenverdi-kjeden — egenverdier → diagonalisering → Aⁿ

- **id:** `mat121-uib-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat121-uib-5-2`
- **kapitteltype:** drill
- **description:** Pensumets tyngste enkeltkjede drillet til automatikk: karakteristisk polynom → egenrom med multiplisitet → diagonaliserbarhetsavgjørelse → P, D og Aⁿ, med spor/determinant som kontroll hele veien.
- **Eksamensbelegg:** Dekker sjanger E samlet (~100 %, den faste oppgave 3). Variantkatalogen: egenverdier + egenvektorer, diagonaliserbarhetsavgjørelse (inkl. ikke-diagonaliserbar), $A=PDP^{-1}$ med riktig matching, $A^n$, similaritet, parametrisk egenverdi (for hvilke $a$ er $A$ diagonaliserbar). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) $\det(A-\lambda I)=0$ → egenverdier (kontroller sum $=\operatorname{tr}$, produkt $=\det$); (2) for hver egenverdi: $\operatorname{Nul}(A-\lambda I)$ → egenrombasis + geometrisk multiplisitet; (3) diagonaliserbar? — sum av geometriske multiplisiteter $=n$?; (4) $P$ (egenvektorer) og $D$ (egenverdier) matchet søyle for søyle; (5) $A^n=PD^nP^{-1}$ ved behov. Gjennomregnet oppgave 3-case (gjenbruker en matrise fra oppgave 1s RREF: egenverdier + diagonalisering + $A^n$) med sensor-margnotater om $P$/$D$-matchingen og multiplisitetssjekken. 10–15 oppgaver: minst én full diagonalisering, én ikke-diagonaliserbar, én $A^n$, én parametrisk.
- **Oppgavesjangre:** E. Mønstereksempel: «For $A=\begin{pmatrix}3&0&0\\0&2&1\\0&0&2\end{pmatrix}$: finn egenverdiene med multiplisiteter, avgjør om $A$ er diagonaliserbar, og begrunn svaret.»
- **Typiske feil:** Hele fellekatalogen fra 5.1–5.2 under tidspress; $P$/$D$ feilmatchet; ikke-diagonaliserbar oversett (geometrisk $<$ algebraisk); glemme kontrollen mot spor/determinant.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Ortogonalitet, projeksjon og minste kvadrater

#### Kapittel 6.1: Indreprodukt, ortogonalitet og ortogonalkomplement W⊥

- **id:** `mat121-uib-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat121-uib-1-3`
- **kapitteltype:** teori
- **description:** Skalarprodukt, norm og ortogonalitet i ℝⁿ, og ortogonalkomplementet W⊥ funnet ved AᵀX = 0 — grunnlaget for projeksjon og minste kvadrater.
- **Forkunnskaper (kryssbok):** Kap. 1.3 ($\operatorname{Nul}$/$\operatorname{Col}$). [Skalarproduktet](/r2/r2-5-3) (prikkprodukt og vinkel i $\mathbb{R}^3$).
- **Eksamensbelegg:** Sjanger H, **~75 %** (som grunnlag i projeksjons-/dekomposisjonsoppgaver). Fasitens grep: $W^{\perp}$ = løsningsrommet til $A^{T}\mathbf{x}=\mathbf{0}$ der $A$s søyler spenner $W$; kjernen til en ortogonal projeksjon er $W^{\perp}$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Skalarprodukt** $\langle\mathbf{u},\mathbf{v}\rangle=\mathbf{u}^{T}\mathbf{v}$, **norm** $\|\mathbf{v}\|=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$, avstand og vinkel; **ortogonalitet** ($\langle\mathbf{u},\mathbf{v}\rangle=0$) og Pytagoras; **ortogonale/ortonormale mengder** er lineært uavhengige; **ortogonalkomplement** $W^{\perp}=\{\mathbf{x}:\mathbf{x}\perp W\}$, funnet som $\operatorname{Nul}(A^{T})$ når $\operatorname{Col}A=W$; de fundamentale relasjonene $(\operatorname{Col}A)^{\perp}=\operatorname{Nul}(A^{T})$, $(\operatorname{Row}A)^{\perp}=\operatorname{Nul}A$; $\dim W+\dim W^{\perp}=n$; **ortogonale matriser** ($Q^{T}Q=I$, søyler ortonormale, bevarer norm og skalarprodukt). Til aktiv bruk.
- **Oppgavesjangre:** H. Mønstereksempel: «La $W=\operatorname{Span}\{(1,1,0,1),(0,1,1,0)\}$. Finn en basis for $W^{\perp}$.»
- **Typiske feil:** Regne $\operatorname{Nul}A$ i stedet for $\operatorname{Nul}(A^{T})$ for $W^{\perp}$; glemme normalisering når ortonormalitet kreves; anta at ortogonal ⇒ ortonormal; blande $\dim W$ og $\dim W^{\perp}$.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.2: Ortogonal projeksjon, dekomposisjon og Gram-Schmidt

- **id:** `mat121-uib-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat121-uib-6-1`
- **kapitteltype:** teori
- **description:** Ortogonal projeksjon på et underrom (med ortogonal basis!), dekomposisjonen y = ŷ + z, og Gram-Schmidt for å skaffe den ortogonale basisen først — den klassiske fellen ligger her.
- **Forkunnskaper (kryssbok):** Kap. 6.1. [Vektorregning](/r1/r1-6-2) (projeksjon av vektor på vektor).
- **Eksamensbelegg:** Sjanger H + I, **~75 % / ~65 %**. Fasitens grep: projeksjonsformelen gjelder **bare for en ortogonal basis** — kjør Gram-Schmidt først om basisen ikke er ortogonal; ortogonal dekomposisjon $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ med $\hat{\mathbf{y}}=\operatorname{proj}_W\mathbf{y}\in W$, $\mathbf{z}\perp W$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Ortogonal projeksjon** på $W=\operatorname{Span}\{\mathbf{u}_1,\dots,\mathbf{u}_p\}$ (ortogonal basis): $\operatorname{proj}_W\mathbf{y}=\sum_i\dfrac{\langle\mathbf{y},\mathbf{u}_i\rangle}{\langle\mathbf{u}_i,\mathbf{u}_i\rangle}\mathbf{u}_i$; **ortogonal dekomposisjonsteorem** $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ (entydig, $\hat{\mathbf{y}}\in W$, $\mathbf{z}\in W^{\perp}$); **beste tilnærming**: $\hat{\mathbf{y}}$ er punktet i $W$ nærmest $\mathbf{y}$; **Gram-Schmidt** $\mathbf{v}_1=\mathbf{x}_1$, $\mathbf{v}_k=\mathbf{x}_k-\sum_{j<k}\dfrac{\langle\mathbf{x}_k,\mathbf{v}_j\rangle}{\langle\mathbf{v}_j,\mathbf{v}_j\rangle}\mathbf{v}_j$, deretter **normalisér** for ortonormal basis; QR-faktoriseringens idé (kjennskap); projeksjon med ortonormal basis forenkles ($\hat{\mathbf{y}}=\sum\langle\mathbf{y},\mathbf{u}_i\rangle\mathbf{u}_i$). Til aktiv bruk.
- **Oppgavesjangre:** H + I. Mønstereksempel: «La $W=\operatorname{Span}\{(1,1,0),(1,0,1)\}$. (a) Ortogonaliser basisen med Gram-Schmidt. (b) Regn $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ der $\hat{\mathbf{y}}=\operatorname{proj}_W\mathbf{y}$ og $\mathbf{z}\perp W$ for $\mathbf{y}=(2,1,3)$.»
- **Typiske feil:** **Projeksjon uten ortogonal basis** (projeksjonsformelen brukt på ikke-ortogonal basis uten Gram-Schmidt først — den klassiske fellen); glemme normaliseringssteget i Gram-Schmidt; regnefeil i $\langle\mathbf{x}_k,\mathbf{v}_j\rangle/\langle\mathbf{v}_j,\mathbf{v}_j\rangle$; forveksle $\hat{\mathbf{y}}$ og $\mathbf{z}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.3: Minste kvadrater: normallikninger og datatilpasning

- **id:** `mat121-uib-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-6-2`
- **kapitteltype:** teori
- **description:** Sett opp designmatrisen, løs normallikningene AᵀAx̂ = Aᵀb, og bruk modellen til en prediksjon — en garantert poengkilde, fast fra 2015.
- **Forkunnskaper (kryssbok):** Kap. 6.1–6.2 (projeksjon), 2.1 (invers/system). [Modellering med reelle data](/r2/r2-6-5) (regresjonsintuisjon fra VGS).
- **Eksamensbelegg:** Sjanger J, **~65 %, fast fra 2015**. Fasitens grep: bygg designmatrisen $A$ og observasjonsvektoren $\mathbf{b}$, sett opp **normallikningene** $A^{T}A\hat{\mathbf{x}}=A^{T}\mathbf{b}$, løs for parametrene, og **bruk modellen** til en prediksjon utenfor datasettet. Zanna-settene kler det i data (dose–effekt, temperatur, poengsum, sinus/cosinus-modell). Prioritet: **kunne** (garantert poengkilde).
- **Innholdskontrakt:** Minste kvadraters problem (overbestemt $A\mathbf{x}=\mathbf{b}$ uten løsning); **minste kvadraters løsning** $\hat{\mathbf{x}}$ minimerer $\|\mathbf{b}-A\mathbf{x}\|$; koblingen til projeksjon ($A\hat{\mathbf{x}}=\operatorname{proj}_{\operatorname{Col}A}\mathbf{b}$); **normallikningene** $A^{T}A\hat{\mathbf{x}}=A^{T}\mathbf{b}$; **eksistens/entydighet** via lineær uavhengighet av søylene i $A$ ($A^{T}A$ inverterbar ⇔ søylene uavhengige); **datatilpasning**: lineær modell $y=a+bx$ (designmatrise med **konstantkolonne** av 1-ere), og modeller med flere ledd ($y=a+b\sin(\omega t)+c\cos(\omega t)$, polynomtilpasning); **prediksjon** utenfor datasettet / løs for $x^*$ som gir ønsket $y$; residual og minste kvadraters feil (kjennskap). Til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «Finn linjen $y=a+bx$ som best tilpasser punktene $(0,1),(1,1),(2,4),(3,4)$ ved minste kvadrater, og bruk den til å estimere $y$ når $x=5$.»
- **Typiske feil:** **Normallikninger satt opp feil** ($A^{T}A$ eller $A^{T}\mathbf{b}$ regnet galt); **designmatrisen mangler konstantkolonnen** (1-kolonnen for $a$); løse $A\mathbf{x}=\mathbf{b}$ direkte (det er uløsbart); glemme prediksjonssteget; desimaltilnærming der eksakt brøk forventes.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: Drill: ortogonalitet og minste kvadrater

- **id:** `mat121-uib-6-4` · **number:** 6.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat121-uib-6-3`
- **kapitteltype:** drill
- **description:** Ortogonalitets-repertoaret drillet: W⊥, Gram-Schmidt, projeksjon/dekomposisjon og minste kvadrater med datatilpasning — den faste oppgave 4, med ortogonal basis alltid på plass før projeksjon.
- **Eksamensbelegg:** Dekker sjanger H (~75 %) + I (~65 %) + J (~65 %) samlet. Variantkatalogen: $W^{\perp}$-basis, Gram-Schmidt til ortonormal basis, ortogonal dekomposisjon $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$, minste kvadrater linje/modell + prediksjon. Prioritet: **kunne** (garantert poeng).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) $W^{\perp}$ — $\operatorname{Nul}(A^{T})$; (2) ortogonaliser basis (Gram-Schmidt) **før** projeksjon; (3) projeksjon/dekomposisjon med den ortogonale basisen, sjekk $\mathbf{z}\perp W$; (4) minste kvadrater — designmatrise med konstantkolonne, $A^{T}A\hat{\mathbf{x}}=A^{T}\mathbf{b}$, løs, prediker. Gjennomregnet oppgave 4-case (Gram-Schmidt + projeksjon, og et minste kvadraters datasett med prediksjon) med sensor-margnotater om «ortogonal basis først» og konstantkolonnen. 10–15 oppgaver: minst én $W^{\perp}$, én Gram-Schmidt, én dekomposisjon, én minste kvadrater med prediksjon.
- **Oppgavesjangre:** H + I + J. Mønstereksempel: «Fire målinger av dose $x$ mot effekt $y$: $(1,2),(2,3),(3,5),(4,6)$. (a) Finn minste kvadraters linje $y=a+bx$. (b) Predikér effekten ved dose $5$. (c) Hva er residualvektoren?»
- **Typiske feil:** Hele fellekatalogen fra 6.1–6.3 under tidspress; projeksjon uten ortogonal basis; $\operatorname{Nul}A$ i stedet for $\operatorname{Nul}(A^{T})$; manglende konstantkolonne; desimalsvar.
- **Quiz: 15 · Flashcards: 6**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Symmetriske matriser og kvadratiske former

#### Kapittel 7.1: Symmetriske matriser og spektralteoremet

- **id:** `mat121-uib-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-5-2`, `mat121-uib-6-2`
- **kapitteltype:** teori
- **description:** Symmetrisk A = Aᵀ gir reelle egenverdier og ortogonal diagonalisering A = QDQᵀ — spektralteoremet, med Gram-Schmidt innen et egenrom med multiplisitet.
- **Forkunnskaper (kryssbok):** Kap. 5.2 (diagonalisering), 6.2 (Gram-Schmidt, ortonormal basis). Ortogonale matriser fra kap. 6.1.
- **Eksamensbelegg:** Sjanger F, **~70 %**. Fasitens grep: **symmetrisk $A=A^{T}$ ⇒ reelle egenverdier og ortogonalt diagonaliserbar** $A=QDQ^{T}$ med $Q$ ortogonal (ortonormale egenvektorer; normalisér, og bruk Gram-Schmidt innen et egenrom med multiplisitet); argumentér *uten regning* for ortogonal diagonaliserbarhet når $A$ er symmetrisk. Prioritet: **kunne** (karakterskiller).
- **Innholdskontrakt:** **Symmetrisk matrise** $A=A^{T}$; **spektralteoremet**: $A$ symmetrisk ⇒ (i) alle egenverdier er reelle, (ii) egenvektorer fra ulike egenrom er automatisk ortogonale, (iii) $A$ er **ortogonalt diagonaliserbar** $A=QDQ^{T}$ med $Q$ ortogonal ($Q^{T}=Q^{-1}$); konstruksjonen: egenvektorer → normalisér → Gram-Schmidt **innen** et egenrom med multiplisitet $>1$ → $Q$; **spektral dekomposisjon** $A=\sum_i\lambda_i\mathbf{u}_i\mathbf{u}_i^{T}$ (sum av rang-1-projeksjoner); den logiske ekvivalensen «ortogonalt diagonaliserbar ⇔ symmetrisk»; argumentere uten regning (symmetri ⇒ garantert; ikke-symmetri ⇒ ikke garantert). Til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «La $A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$. Forklar uten regning hvorfor $A$ er ortogonalt diagonaliserbar, og finn en ortogonal diagonalisering $A=QDQ^{T}$.»
- **Typiske feil:** **Egenvektor ikke normalisert** (så $Q$ blir ikke ortogonal); glemme Gram-Schmidt innen et egenrom med multiplisitet (egenvektorene der er ikke automatisk ortogonale); bruke $Q^{-1}$ i stedet for $Q^{T}$ (og dermed regne unødig); påstå ortogonal diagonaliserbarhet for en ikke-symmetrisk matrise.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.2: Kvadratiske former: klassifisering og prinsipalakser

- **id:** `mat121-uib-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat121-uib-7-1`
- **kapitteltype:** teori
- **description:** Skriv Q(x) = xᵀAx med symmetrisk A (kryssledd delt på 2!), diagonaliser ortogonalt for prinsipalaksene, klassifiser definittheten via egenverditegn, og reduser til standardform uten kryssledd.
- **Forkunnskaper (kryssbok):** Kap. 7.1 (spektralteorem). Egenverditegn fra kap. 5.1.
- **Eksamensbelegg:** Sjanger G, **~70 %**. To ansikter: nyere sett (2015–2021) — $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$ → symmetrisk $A$ → ortogonal diagonalisering → klassifisér definitthet → standardform uten kryssledd (**vektes tyngst**); eldre variant (2007) — kjeglesnitt $ax_1^2+bx_1x_2+cx_2^2=k$ → identifisér type, tegn (lavere prioritet). Prioritet: **kunne** (karakterskiller).
- **Innholdskontrakt:** **Kvadratisk form** $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$ med **symmetrisk** $A$: diagonalledd $a_{ii}=$ koeffisienten til $x_i^2$, **kryssledd delt: $a_{ij}=a_{ji}=\frac12\cdot$ koeffisienten til $x_ix_j$**; **hovedaksesetningen**: variabelskiftet $\mathbf{x}=Q\mathbf{y}$ (ortogonal $Q$ fra spektralteoremet) fjerner kryssleddene → $Q=\sum_i\lambda_i y_i^2$; **prinsipalaksene** = egenvektorene; **klassifisering av definitthet** via egenverditegn: alle $\lambda>0$ positiv definit, alle $\ge 0$ positiv semidefinit, alle $<0$ negativ definit, blandede fortegn indefinit; kobling til ekstremalpunkt-klassifisering; **eldre kjeglesnitt-variant** $ax_1^2+bx_1x_2+cx_2^2=k$ → identifisér ellipse/hyperbel/parabel i det nye systemet, tegn (dekkes kort, «eldre variant»). Til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «La $Q(x_1,x_2)=3x_1^2-4x_1x_2+3x_2^2$. Finn den symmetriske matrisen $A$, klassifisér formen, og finn variabelskiftet $\mathbf{x}=Q\mathbf{y}$ som gir standardform uten kryssledd.»
- **Typiske feil:** **Kvadratisk form med feil symmetrisering** (kryssleddskoeffisienten lagt hel inn i $a_{ij}$ i stedet for delt på 2, så $A$ blir feil/ikke-symmetrisk); klassifisere fra $A$s diagonal i stedet for egenverdiene; feil definitthetsklasse fra egenverditegn; $Q$ ikke ortogonal (egenvektorer ikke normalisert).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.3: Indreproduktrom og ortogonale polynomer

- **id:** `mat121-uib-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `mat121-uib-6-2`, `mat121-uib-3-1`
- **kapitteltype:** teori
- **description:** Den abstrakte overbygningen: vektede indreprodukt ⟨x,y⟩ = xᵀAy og evalueringsbaserte indreprodukt på polynomrom, med hele ortogonalitetsapparatet generalisert — karakterskilleren på toppen.
- **Forkunnskaper (kryssbok):** Kap. 6.2 (Gram-Schmidt, projeksjon), 3.1 (polynomrom $P_n$). Positiv definitthet fra kap. 7.2.
- **Eksamensbelegg:** Sjanger N, **~35 % / ~30 %** (indreproduktrom / polynomrom). Fasitens grep: definér et ikke-standard indreprodukt (vektet $\langle\mathbf{x},\mathbf{y}\rangle=\mathbf{x}^{T}A\mathbf{y}$ med symmetrisk positiv definit $A$, eller evalueringsbasert $\langle p,q\rangle=\sum p(t_i)q(t_i)$) og bruk **samme** ortogonalitetsapparat (ortogonalitetssjekk, Gram-Schmidt, projeksjon). Lav frekvens, men karakterskiller. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Indreproduktaksiomene** (symmetri, linearitet, positiv definitthet); **vektet indreprodukt** $\langle\mathbf{x},\mathbf{y}\rangle=\mathbf{x}^{T}A\mathbf{y}$ med symmetrisk positiv definit $A$ (kobling til 7.2); **indreprodukt på polynomrom**: evalueringsbasert $\langle p,q\rangle=\sum_i p(t_i)q(t_i)$ eller integral $\langle p,q\rangle=\int_a^b p(t)q(t)\,dt$; norm, ortogonalitet, **Gram-Schmidt i indreproduktrom** (samme algoritme, nytt indreprodukt) → **ortogonale polynomer** (bro til Gauss-Legendre i §8); **Cauchy-Schwarz** $|\langle\mathbf{u},\mathbf{v}\rangle|\le\|\mathbf{u}\|\|\mathbf{v}\|$ og trekantulikheten (bevises i §8); projeksjon/beste tilnærming i indreproduktrom. Poenget: hele apparatet fra Del 6 generaliserer. Kort, men presist.
- **Oppgavesjangre:** N. Mønstereksempel: «På $P_2$ med $\langle p,q\rangle=p(-1)q(-1)+p(0)q(0)+p(1)q(1)$: bruk Gram-Schmidt på $\{1,t,t^2\}$ til å finne en ortogonal basis.»
- **Typiske feil:** Bruke standard prikkprodukt i stedet for det oppgitte indreproduktet; glemme å sjekke positiv definitthet før noe kalles indreprodukt; feil i evalueringssummen; anta at $\{1,t,t^2\}$ er ortogonal (den er det sjelden i det vektede/evaluerte produktet).
- **Quiz: 12 · Flashcards: 16**

#### Kapittel 7.4: Drill: symmetriske matriser og kvadratiske former

- **id:** `mat121-uib-7-4` · **number:** 7.4 · **estimatedMinutes:** 75 · **prerequisites:** `mat121-uib-7-3`
- **kapitteltype:** drill
- **description:** Spektral- og kvadratform-repertoaret drillet: ortogonal diagonalisering A = QDQᵀ, kvadratisk form → symmetrisk A → klassifisering → standardform, med normalisering og halvering av kryssledd på plass.
- **Eksamensbelegg:** Dekker sjanger F (~70 %) + G (~70 %) samlet, ofte kjedet til oppgave 3s symmetriske matrise. Variantkatalogen: ortogonal diagonalisering (med og uten multiplisitet), kvadratisk form → $A$ → definitthet → standardform, kjeglesnitt-identifikasjon (eldre). Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) symmetrisk? — spektralteoremet garanterer ortogonal diagonalisering; (2) egenverdier + egenvektorer (Del 5); (3) normalisér, Gram-Schmidt innen egenrom med multiplisitet → $Q$; (4) $A=QDQ^{T}$; (5) kvadratisk form — bygg symmetrisk $A$ (kryssledd delt på 2), klassifisér via egenverditegn, $\mathbf{x}=Q\mathbf{y}$ → standardform. Gjennomregnet oppgave 3-fortsettelse (symmetrisk $A$ fra egenverdioppgaven → ortogonal diagonalisering → kvadratisk form → definitthet) med sensor-margnotater om normalisering og halvering av kryssledd. 10–15 oppgaver: minst én ortogonal diagonalisering med multiplisitet, én kvadratisk form med klassifisering, én kjeglesnitt.
- **Oppgavesjangre:** F + G. Mønstereksempel: «$Q(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2x_1x_2$. Finn symmetrisk $A$, klassifisér definittheten, og reduser til standardform uten kryssledd.»
- **Typiske feil:** Hele fellekatalogen fra 7.1–7.2 under tidspress; kryssledd ikke delt på 2; egenvektorer ikke normalisert; klassifisering fra diagonal i stedet for egenverdier; Gram-Schmidt glemt i egenrom med multiplisitet.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Bevis- og teorioppgaven *(prioritet: KJENNE/topp-karakterskiller — ~75 %, ofte frivillig/vektet 20 %)*

#### Kapittel 8.1: Å skrive et lineær-algebra-bevis, med rang og løsbarhet

- **id:** `mat121-uib-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-1-3`, `mat121-uib-6-1`
- **kapitteltype:** teori (metode + bevis)
- **description:** Bevishåndverket for lineær algebra — teoremnavning og forutsetningssjekk — anvendt på de tilbakevendende rang- og løsbarhetsbevisene: rangulikhetene rank(AB) ≤ rank(A) og Fredholm-alternativet.
- **Forkunnskaper (kryssbok):** Kap. 1.3–1.4 (rang, underrom), 6.1 ($W^{\perp}$, $\operatorname{Nul}(A^{T})$). [Bevis og matematisk argumentasjon](/r2/r2-6-6) (bevisføring generelt).
- **Eksamensbelegg:** Sjanger M, **~75 %** (som egen, ofte frivillig, oppgave). Dokumenterte varianter (2021): **rangulikhetene** $\operatorname{rang}(AB)\le\operatorname{rang}(A)$ og $\le\operatorname{rang}(B)$, og **Fredholm-alternativet** ($A\mathbf{x}=\mathbf{b}$ løsbar ⇔ $\mathbf{b}\perp$ alle løsninger av $A^{T}\mathbf{x}=\mathbf{0}$). Fasitene er håndskrevne (⚠️ metode = faglig standard). Prioritet: **kjenne** (topp-karakterskiller).
- **Innholdskontrakt:** **Bevismetodikk**: identifiser hva som er gitt og hva som skal vises; navngi teoremet som bærer hvert steg; skill «⇒» og «⇔»; standardteknikker (dobbel inklusjon $W_1\subseteq W_2$ og omvendt; dimensjonstelling; kontrapositiv). **Rangulikhetene**: $\operatorname{Col}(AB)\subseteq\operatorname{Col}(A)$ ⇒ $\operatorname{rang}(AB)\le\operatorname{rang}(A)$; via transponert $\operatorname{rang}(AB)\le\operatorname{rang}(B)$; rang av produkt og dimensjonsteoremet. **Fredholm-alternativet**: $\operatorname{Col}A=(\operatorname{Nul}(A^{T}))^{\perp}$, så $A\mathbf{x}=\mathbf{b}$ løsbar ⇔ $\mathbf{b}\in\operatorname{Col}A$ ⇔ $\mathbf{b}\perp\operatorname{Nul}(A^{T})$; de fire fundamentale underrommene og deres ortogonalitetsrelasjoner. **Cramers heltallsargument** (fra 2.3): $\det C=1$, heltallsdata ⇒ heltallsløsning. Bevisene føres komplett som modeller.
- **Oppgavesjangre:** M. Mønstereksempel: «Vis at $\operatorname{rang}(AB)\le\operatorname{rang}(A)$ for alle matriser $A,B$ der produktet er definert.» og «Vis at $A\mathbf{x}=\mathbf{b}$ er løsbar hvis og bare hvis $\mathbf{b}$ er ortogonal på enhver løsning av $A^{T}\mathbf{x}=\mathbf{0}$.»
- **Typiske feil:** Bevis uten navngitt teorem / forutsetningssjekk; forveksle «⇒» og «⇔» (bare én vei vist i en hvis-og-bare-hvis); bruke $\operatorname{Nul}A$ der $\operatorname{Nul}(A^{T})$ trengs; påstå en inklusjon uten å vise den; regne på et eksempel i stedet for å bevise generelt.
- **Quiz: 12 · Flashcards: 22**

#### Kapittel 8.2: Bevis om spesielle matriser og ulikheter

- **id:** `mat121-uib-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-8-1`, `mat121-uib-7-1`
- **kapitteltype:** teori (bevis)
- **description:** De gjenkjennelige matriseklasse-bevisene: skjev-symmetriske (xᵀSx = 0, spor 0), refleksjonsmatriser (symmetrisk og ortogonal, egenverdier ±1), og Cauchy-Schwarz/trekantulikheten.
- **Forkunnskaper (kryssbok):** Kap. 8.1, 7.1 (symmetriske/ortogonale matriser), 6.1 (norm, skalarprodukt).
- **Eksamensbelegg:** Sjanger M, del av de ~75 %. Dokumenterte varianter: **skjev-symmetriske** $S^{T}=-S$ (2017): $\mathbf{x}^{T}S\mathbf{x}=0$, spor $=0$, $\det=0$ for odde $n$; **refleksjonsmatriser** $Q_{\mathbf{v}}=-I+\frac{2\mathbf{v}\mathbf{v}^{T}}{\mathbf{v}^{T}\mathbf{v}}$ (2017): symmetrisk og ortogonal, egenverdier $\pm 1$; **Cauchy-Schwarz/trekantulikheten** $\|\mathbf{a}+\mathbf{b}\|\le\|\mathbf{a}\|+\|\mathbf{b}\|$ (2013). ⚠️ metode = faglig standard. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Skjev-symmetriske matriser** $S^{T}=-S$: bevis at $\mathbf{x}^{T}S\mathbf{x}=0$ for alle $\mathbf{x}$ (via $\mathbf{x}^{T}S\mathbf{x}=(\mathbf{x}^{T}S\mathbf{x})^{T}=-\mathbf{x}^{T}S\mathbf{x}$), at diagonalen og sporet er 0, og at $\det S=0$ for odde $n$; kryssprodukt som skjev-symmetrisk lineær avbildning (kjennskap). **Refleksjonsmatriser (Householder)** $Q_{\mathbf{v}}=-I+\frac{2\mathbf{v}\mathbf{v}^{T}}{\mathbf{v}^{T}\mathbf{v}}$ (eller $I-\frac{2\mathbf{v}\mathbf{v}^{T}}{\mathbf{v}^{T}\mathbf{v}}$): bevis symmetri ($Q^{T}=Q$), ortogonalitet ($Q^{T}Q=I$), $Q^2=I$, og egenverdier $\pm 1$ med egenrom. **Cauchy-Schwarz** $|\langle\mathbf{u},\mathbf{v}\rangle|\le\|\mathbf{u}\|\|\mathbf{v}\|$ (bevis via $\|\mathbf{u}-t\mathbf{v}\|^2\ge 0$) og **trekantulikheten** som konsekvens. Bevisene føres komplett med forutsetningssjekk.
- **Oppgavesjangre:** M. Mønstereksempel: «La $Q=I-\frac{2\mathbf{v}\mathbf{v}^{T}}{\mathbf{v}^{T}\mathbf{v}}$ for en vektor $\mathbf{v}\ne\mathbf{0}$. Vis at $Q$ er symmetrisk og ortogonal, og finn egenverdiene med tilhørende egenrom.»
- **Typiske feil:** Regne på et tallesempel i stedet for generelt bevis; glemme transponert-trikset for $\mathbf{x}^{T}S\mathbf{x}$; feil i $\mathbf{v}\mathbf{v}^{T}$ (ytterprodukt, en matrise) vs. $\mathbf{v}^{T}\mathbf{v}$ (skalar); ikke sjekke $t$-optimering / likhetstilfellet i Cauchy-Schwarz; ikke identifisere egenrommene til $\pm 1$.
- **Quiz: 12 · Flashcards: 22**

#### Kapittel 8.3: Bevis om egenverdier og matrisestruktur

- **id:** `mat121-uib-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat121-uib-8-2`, `mat121-uib-5-2`
- **kapitteltype:** teori (bevis)
- **description:** De strukturtunge bevistemaene: Cayley-Hamilton for diagonaliserbare matriser, generalisert egenvektor/Jordan-form når geometrisk < algebraisk, companion-matrisen, og Gauss-Legendre-polynomer.
- **Forkunnskaper (kryssbok):** Kap. 8.2, 5.2 (diagonalisering), 7.3 (ortogonale polynomer).
- **Eksamensbelegg:** Sjanger M, de tyngste bevisvariantene. Dokumenterte: **Cayley-Hamilton** for diagonaliserbare (2015): $q(A)=Xq(\Lambda)X^{-1}$, potensformler $A^{2k}=(-1)^kI$; **generalisert egenvektor/Jordan-form** når geometrisk $<$ algebraisk (2016); **companion-matrise**: karakteristisk polynom via induksjon, egenverdier $=$ polynomrøtter (2018); **Gauss-Legendre ortogonale polynomer** via vektet indreprodukt i $P_2$ (2018). ⚠️ metode = faglig standard. Prioritet: **kjenne** (dybde-karakterskiller).
- **Innholdskontrakt:** **Cayley-Hamilton (diagonaliserbart tilfelle)**: hvis $A=PDP^{-1}$, så $q(A)=Pq(D)P^{-1}$ for et polynom $q$; det karakteristiske polynomet $p$ oppfyller $p(A)=0$ (fordi $p(\lambda_i)=0$ på diagonalen); potensformler og redusering av høye potenser $A^n$; **generalisert egenvektor og Jordan-blokk** når geometrisk $<$ algebraisk multiplisitet ($(A-\lambda I)^2\mathbf{v}=\mathbf{0}$ men $(A-\lambda I)\mathbf{v}\ne\mathbf{0}$); eksistens av Jordan-form (kjennskap, ikke fullt bevis); **companion-matrisen** til et polynom: karakteristisk polynom lik polynomet (induksjon på kofaktorutvikling), egenverdier $=$ røtter; **Gauss-Legendre**: Gram-Schmidt på $\{1,t,t^2\}$ i et vektet/integral-indreprodukt gir de ortogonale (Legendre-)polynomene (kobling til 7.3). Bevisene føres med forutsetningssjekk; markér hvilke som kun skisseres.
- **Oppgavesjangre:** M. Mønstereksempel: «La $A$ være diagonaliserbar med $A=PDP^{-1}$. Vis at for ethvert polynom $q$ er $q(A)=Pq(D)P^{-1}$, og bruk det til å regne $A^{10}$ når $A$ har egenverdier $1$ og $-1$.»
- **Typiske feil:** Bruke Cayley-Hamilton uten diagonaliserbarhet (her kun det tilfellet bevises); forveksle algebraisk og geometrisk multiplisitet i Jordan-argumentet; feil i induksjonssteget for companion-matrisen; bruke standard prikkprodukt i Gauss-Legendre i stedet for det oppgitte indreproduktet.
- **Quiz: 12 · Flashcards: 22**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Føringsstandarden: slik skriver du en fullt begrunnet MAT121-besvarelse

- **id:** `mat121-uib-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–7
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: merkede radoperasjoner, Col A-basis fra original, teoremnavning, riktig P/D-matching og P_{C←B}-retning, halvering av kryssledd, eksakte svar og delpunkt-gjenbruk — samlet på ett sted, med teoremnavn-banken du må kunne utenat.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene, poengfordelingen og Lays metodikk (arkivet 2004–2021): (i) «Alle svar skal begrunnes; vis nok mellomregning» — ordrett instruks i alle skriftlige sett; (ii) **teoremer navngis** (inverterbarhetsteoremet, dimensjonsteoremet, spektralteoremet, diagonaliserbarhetskriteriet, ortogonal dekomposisjon); (iii) føringsstandarden (merkede radoperasjoner over `∼`, $\operatorname{Col}A$-basis fra **original**, egenvektorer normalisert, **eksakte svar aldri desimal**); (iv) **delpunkt-kjeding** (samme matrise gjenbrukes: koeffisientmatrisen → $\operatorname{Nul}/\operatorname{Col}/\det$ → egenverdier); (v) **fordi bare kalkulator er tillatt** må hele apparatet sitte utenat — teoremnavn-bank. Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–N: hva som er tilstrekkelig begrunnelse (én tabell); **teoremnavn-banken** (alle teoremer studenten må kunne navngi og bruke utenat, siden det ikke er noe formelark); sjekklisten før innlevering (radoperasjoner merket? $\operatorname{Col}$-basis fra original? $P/D$ matchet? $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning? kryssledd delt på 2? egenvektorer normalisert? eksakte svar? delpunkt-koblinger utnyttet?); to kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon — ett $\operatorname{Col}A$-eksempel med basis fra RREF vs. original, ett projeksjonseksempel med/uten ortogonal basis); strategien for kjedede delpunkter (les hele oppgaven, gjenbruk RREF/inverser/egenvektorer på tvers av deloppgaver).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig $\operatorname{Col}A$-basis-tall, men ville tapt uttelling. Pek på de to manglene (basis lest fra RREF i stedet for original, ingen merkede radoperasjoner) og skriv om til full uttelling.»
- **Typiske feil:** Hele feilkatalogens føringsdel: umerkede radoperasjoner, $\operatorname{Col}A$-basis fra RREF, $P/D$ feilmatchet, feil $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, kryssledd ikke delt på 2, projeksjon uten ortogonal basis, desimaltilnærming, delpunkt-koblinger ikke utnyttet, ubegrunnet «flervalgs-tenkning» i skriftlig format.
- **Quiz: 14 · Flashcards: 32** (teoremnavn-bank + føringsregler — flashcard-gull for et fag uten formelark)

#### Kapittel 9.2: Flervalgsdrill: konseptuell hurtiggjenkjenning

- **id:** `mat121-uib-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–7
- **kapitteltype:** drill
- **description:** Den sekundære produksjonsmåten: rask gjenkjenning av riktig egenvektor-sett, riktig diagonalisering, riktig definitthetsklasse og det-egenskaper — flervalgs-repertoaret 2019–2021, trent uten føringskrav.
- **Eksamensbelegg:** **Ærlig eksamensvinkel:** gjeldende emnebeskrivelse (2026) sier **skriftlig skoleeksamen** — dette kapitlet er **sekundært**, en hurtigtrening, ikke primærmålet. Men flervalgsformatet 2019–2021 er ferskt, kan returnere, og fanger konseptuelle spørsmål som også dukker opp som delpunkter i skriftlige sett. Repertoaret: velg riktig egenvektor-sett, riktig $P$/$D$, riktig definitthetsklasse på øyemål, $\det$-egenskaper ($\det(kA)$, avhengige søyler), dimensjonsbokføring fra parameterløsning, rotasjons-/refleksjonsavbildning, spektral dekomposisjon, adjungert. Prioritet: **kunne** (sekundær; konseptsjekk).
- **Innholdskontrakt:** 20–30 flervalgsoppgaver à la 2019–2021 (4 svaralternativer, options[0] = riktig), gruppert etter tema, med **kort begrunnelse** i løsningen (hvorfor de tre andre er feil — det er der læringen sitter); konseptuelle snarveier: definitthet fra egenverditegn uten full standardform, $\det$-kombinasjoner uten å regne matrisen, dimensjon fra pivotmønster, diagonaliserbarhet fra multiplisitet på øyemål; en `warning` om at snarveiene **ikke** erstatter føring i det skriftlige regimet (bare svaret teller i flervalg, men skoleeksamen krever mellomregning). Fungerer også som rask repetisjon før eksamen.
- **Oppgavesjangre:** Flervalg over A–N. Mønstereksempel: «Hvilket sett er en basis for egenrommet til $\lambda=2$? (fire alternativer)» og «Gitt $\det A=3$: hva er $\det(2A^{T}A^{-1})$ for $3\times3$? (fire alternativer)».
- **Typiske feil:** La flervalgs-snarveiene smitte over på skriftlig føring (koster poeng); gjette i stedet for å eliminere; overse at definitthet krever alle egenverditegn (ikke bare ett); regnefeil i $\det$-kombinasjoner fordi $k^n$-faktoren glemmes.
- **Quiz: 16 · Flashcards: 8**

#### Kapittel 9.3: Øvingseksamen 1: klassisk 5-timers skoleeksamen (bred kjerne)

- **id:** `mat121-uib-9-3` · **number:** 9.3 · **estimatedMinutes:** 300 · **prerequisites:** `mat121-uib-9-1`
- **kapitteltype:** øvingseksamen (skriftlig)
- **description:** Komplett 5-timers sett etter den strukturerte malen 2006–2018: den brede kjernen — likningssystem + underrom, basis/koordinater/basisskifte, egenverdier/diagonalisering, minste kvadrater, lineær avbildning — med fullt begrunnet føring.
- **Eksamensbelegg/miks:** Speiler den strukturerte skriftlige malen (**5–6 hovedoppgaver med begrunnede deloppgaver, 5 timer, kun kalkulator, «alle svar begrunnes»**), kalibrert på prognosen i analysens §7: **O1** lineært system med parameter (eksistens/entydighet) + $\operatorname{Nul}A$, $\operatorname{Col}A$, rang, generell løsning (sjanger A + B) → **O2** basis/koordinater/basisskifte $P_{\mathcal{C}\leftarrow\mathcal{B}}$ + determinant (sjanger C + D) → **O3** egenverdier/egenvektorer + diagonalisering $A=PDP^{-1}$ (sjanger E; matrisen gjenbrukt fra O1) → **O4** minste kvadrater med data + prediksjon (sjanger J) → **O5** lineær avbildning: standardmatrise, injektiv/surjektiv, geometri (sjanger K) → **O6** ortogonalkomplement / projeksjon (sjanger H). Delpunktene kjedes (O3 bruker O1s matrise). Alle oppgaver nyskrevne med pene tall (regnbart med kalkulator). Løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 9.1-standarden, med `tip`-notat om tidsbudsjett og hvor begrunnelses-/føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 2: klassisk 5-timers skoleeksamen (restsjangre + bevisoppgave)

- **id:** `mat121-uib-9-4` · **number:** 9.4 · **estimatedMinutes:** 300 · **prerequisites:** `mat121-uib-9-3`
- **kapitteltype:** øvingseksamen (skriftlig)
- **description:** Komplett sett nummer to som treffer sjangrene sett 1 ikke gjorde — symmetriske matriser + kvadratiske former, Gram-Schmidt, matriseinvers/Cramer, indreproduktrom — og avsluttes med den frivillige bevisoppgaven, så de to settene sammen dekker A–N.
- **Eksamensbelegg/miks:** Samme mal (5–6 begrunnede hovedoppgaver, 5 timer, kalkulator), men med **restsjangrene** (sammen dekker 9.3 + 9.4 alle A–N): **O1** likningssystem + matriseinvers via $[A\,|\,I]$ + inverterbarhetsteoremet (sjanger A + L) → **O2** determinant: beregning + abstrakte regneregler + Cramer (sjanger C) → **O3** symmetrisk matrise: egenverdier → ortogonal diagonalisering $A=QDQ^{T}$ → kvadratisk form: klassifisering + standardform (sjanger F + G) → **O4** ortogonalitet: Gram-Schmidt → ortogonal dekomposisjon $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ (sjanger H + I) → **O5** indreproduktrom/polynomrom: ortogonale polynomer (sjanger N) → **O6 (frivillig bevisoppgave, vektet)** ett tema fra §8 (rangulikhet / Fredholm / refleksjonsmatrise / Cayley-Hamilton). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per deloppgave, og `tip`-notat om at bevisoppgaven ofte er frivillig/vektet 20 % og er topp-karakterskilleren.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.5: Øvingseksamen 3: flervalgsvariant med bevisoppgaver (2019–2021-format)

- **id:** `mat121-uib-9-5` · **number:** 9.5 · **estimatedMinutes:** 300 · **prerequisites:** `mat121-uib-9-4`
- **kapitteltype:** øvingseksamen (flervalg + bevis)
- **description:** Sekundærformatet: 20 flervalgsoppgaver à 4 p over hele pensum + 2 bevisoppgaver med full føring — trener rask konseptgjenkjenning OG den skriftlige bevisferdigheten, slik hjemme-/flervalgseksamenene 2019–2021 var bygget.
- **Eksamensbelegg/miks:** **Sekundært format** (verifiser mot 2026-settet — gjeldende emnebeskrivelse sier skriftlig skoleeksamen, men flervalg var faktisk format 2019–2021 og kan returnere). Speiler flervalgsmalen: **20 flervalgsoppgaver à 4 p (= 80 p)** bredt over A–N (parameterløsning-utfall, $\operatorname{Nul}/\operatorname{Col}$-dimensjon, $\det$-egenskaper, egenvektor-/diagonaliseringsvalg, definitthetsklasse, $P_{\mathcal{C}\leftarrow\mathcal{B}}$, standardmatrise, projeksjon, minste kvadrater-oppsett) + **2 bevisoppgaver à 10 p med full føring** (fra §8 — f.eks. rangulikhet + refleksjonsmatrise). Flervalgsdelen: bare svaret teller (options[0] = riktig), men løsningsforslaget viser den fulle utregningen så studenten *kan* føre om formatet returnerer til skriftlig. Bevisdelen: A-besvarelse med teoremnavning. `tip`-notat om at dette er beredskapsformatet, og om tidsbudsjettet (5 t + opplasting).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 9:** ingen egne temaprøver — øvingseksamenene (9.3–9.5) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.5 | 20+18+20+16+16 = **90** | 22+18+24+20+6 = **90** |
| 2 | 2.1–2.4 | 18+18+14+15 = **65** | 22+20+16+6 = **64** |
| 3 | 3.1–3.4 | 16+18+16+15 = **65** | 22+22+18+6 = **68** |
| 4 | 4.1–4.4 | 16+16+15+15 = **62** | 20+20+18+6 = **64** |
| 5 | 5.1–5.3 | 20+20+16 = **56** | 24+24+6 = **54** |
| 6 | 6.1–6.4 | 16+18+16+15 = **65** | 22+22+18+6 = **68** |
| 7 | 7.1–7.4 | 16+18+12+14 = **60** | 22+22+16+6 = **66** |
| 8 | 8.1–8.3 | 12+12+12 = **36** | 22+22+22 = **66** |
| 9 | 9.1–9.5 | 14+16+5+5+5 = **45** | 32+8+0+0+0 = **40** |
| **Sum** | **37 kap.** | **554 ≥ 500 ✓** | **592 (mål 550–650) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (592, ikke ~510):** MAT121 er et
definisjons- og teoremrikt fag **uten utdelt formelark** — alt apparatet må sitte
utenat, så definisjoner, teoremnavn og metode-oppskrifter er selve puggematerialet.
De teoritunge og bevis-tunge kapitlene (Del 1, 5, 8 + kap. 9.1) bærer tettheten;
drillkapitlene holdes lave (5–6) fordi deres verdi er oppgaver, ikke kort.
Quiz-fordelingen speiler eksamensvektene: **Del 1 (oppgave 1-kjeden) og Del 5
(egenverdier — pensumets tyngste enkelttema) bærer 146 av 554 quiz**; nivå
2-delene (6–7) samlet 125; bevis-delen (Del 8) holdes lav på quiz (36) men høy på
flashcards (66, teoremrikt).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (9.1), poengfordeling og eksakte svar. Alt langsvar med
full begrunnelse. Legges som prøvekapitler (`mat121-uib-<del>-prove`, chapterNumber
`<del>.P`) etter plattformens mønster.

**Del 1 — Likningssystemer og fundamentale underrom**
1. Prøve 1.A (35 min): Gauss/RREF — merkede radoperasjoner + løsningsmengde (kap. 1.1).
2. Prøve 1.B (40 min): Parameteranalyse — tre tilfeller + generell løsning på parameterform (kap. 1.2, sjanger A).
3. Prøve 1.C (40 min): Fundamentale underrom — $\operatorname{Nul}/\operatorname{Col}/\operatorname{Row}$-basis + rang + dimensjonsteoremet (kap. 1.3, sjanger B).
4. Prøve 1.D (45 min): Oppgave 1-simulering — parameterløsbarhet + underrom kjedet på én matrise (kap. 1.1–1.5, sjanger A + B).

**Del 2 — Matriser og determinant**
1. Prøve 2.A (35 min): Matrisealgebra + invers via $[A\,|\,I]$ + inverterbarhetsteoremet (kap. 2.1, sjanger L).
2. Prøve 2.B (35 min): Determinant — kofaktor/radreduksjon-beregning (kap. 2.2, sjanger C).
3. Prøve 2.C (40 min): Determinantens regneregler abstrakt + parameter-$\det$ (kap. 2.2–2.3, sjanger C).
4. Prøve 2.D (40 min): Cramer + adjungert + geometrisk arealskalering (kap. 2.3–2.4, sjanger L).

**Del 3 — Vektorrom, basis og koordinater**
1. Prøve 3.A (35 min): Vektorrom/underrom + polynomrom $P_n$ (kap. 3.1, sjanger N).
2. Prøve 3.B (40 min): Basis + koordinater $[\mathbf{x}]_{\mathcal{B}}$ i $\mathbb{R}^n$ og $P_n$ (kap. 3.2, sjanger D).
3. Prøve 3.C (40 min): Basisskifte $P_{\mathcal{C}\leftarrow\mathcal{B}}$ — begge retninger (kap. 3.3, sjanger D).
4. Prøve 3.D (45 min): Oppgave 2-simulering — basis + koordinater + basisskifte kjedet (kap. 3.2–3.4, sjanger D).

**Del 4 — Lineære avbildninger**
1. Prøve 4.A (35 min): Standardmatrise + linearitetssjekk (kap. 4.1, sjanger K).
2. Prøve 4.B (40 min): Injektiv/surjektiv + kjerne/bilde-basis (kap. 4.2, sjanger K).
3. Prøve 4.C (40 min): Geometriske avbildninger + $[T]_{\mathcal{B}}$ (kap. 4.3, sjanger K).
4. Prøve 4.D (45 min): Oppgave 5-simulering — standardmatrise + egenskaper + geometri kjedet (kap. 4.1–4.4, sjanger K).

**Del 5 — Egenverdier og diagonalisering**
1. Prøve 5.A (35 min): Egenverdier + egenrom + multiplisitet + spor/determinant-kontroll (kap. 5.1, sjanger E).
2. Prøve 5.B (40 min): Diagonalisering $A=PDP^{-1}$ med riktig $P/D$-matching (kap. 5.2, sjanger E).
3. Prøve 5.C (35 min): Diagonaliserbarhet + ikke-diagonaliserbar + $A^n$ (kap. 5.2, sjanger E).
4. Prøve 5.D (45 min): Oppgave 3-simulering — egenverdi-kjeden på en gjenbrukt matrise (kap. 5.1–5.3, sjanger E).

**Del 6 — Ortogonalitet, projeksjon og minste kvadrater**
1. Prøve 6.A (35 min): Skalarprodukt + ortogonalkomplement $W^{\perp}$ via $\operatorname{Nul}(A^{T})$ (kap. 6.1, sjanger H).
2. Prøve 6.B (40 min): Gram-Schmidt + ortogonal dekomposisjon $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ (kap. 6.2, sjanger H + I).
3. Prøve 6.C (40 min): Minste kvadrater — normallikninger + datatilpasning + prediksjon (kap. 6.3, sjanger J).
4. Prøve 6.D (45 min): Oppgave 4-simulering — projeksjon/Gram-Schmidt + minste kvadrater kjedet (kap. 6.1–6.4, sjanger H + I + J).

**Del 7 — Symmetriske matriser og kvadratiske former**
1. Prøve 7.A (35 min): Spektralteoremet + ortogonal diagonalisering $A=QDQ^{T}$ (kap. 7.1, sjanger F).
2. Prøve 7.B (40 min): Kvadratisk form — symmetrisk $A$ (kryssledd/2) + klassifisering + standardform (kap. 7.2, sjanger G).
3. Prøve 7.C (35 min): Indreproduktrom + ortogonale polynomer (Gram-Schmidt i $P_2$) (kap. 7.3, sjanger N).
4. Prøve 7.D (45 min): Oppgave 3-utvidelse — symmetrisk matrise → ortogonal diagonalisering → kvadratisk form kjedet (kap. 7.1–7.4, sjanger F + G).

**Del 8 — Bevis- og teorioppgaven**
1. Prøve 8.A (30 min): Rangulikheter + Fredholm-alternativet (kap. 8.1, sjanger M).
2. Prøve 8.B (30 min): Skjev-symmetriske + refleksjonsmatriser + Cauchy-Schwarz (kap. 8.2, sjanger M).
3. Prøve 8.C (35 min): Cayley-Hamilton + Jordan/companion + Gauss-Legendre (kap. 8.3, sjanger M).
4. Prøve 8.D (35 min): Bevis-tverrsnitt — ett tema fra hvert av 8.1–8.3, full føring med teoremnavning (kap. 8.1–8.3, sjanger M).

### Øvingseksamener (3 komplette sett — se kap. 9.3–9.5)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.3) | Klassisk 5-timers skoleeksamen 2006–2018 (primær) | Bred kjerne: A+B(O1) + C+D(O2) + E(O3) + J(O4) + K(O5) + H(O6) |
| Øvingseksamen 2 (kap. 9.4) | Samme mal, restsjangre + bevis | A+L(O1) + C(O2) + F+G(O3) + H+I(O4) + N(O5) + M(O6, frivillig) |
| Øvingseksamen 3 (kap. 9.5) | Flervalg 2019–2021 (sekundær) | 20 flervalg à 4 p over A–N + 2 bevisoppgaver à 10 p (M) |

Til sammen dekker de tre settene samtlige sjangre A–N minst én gang, og trener
**begge produksjonsmåter** (9.3–9.4 fullt begrunnet skriftlig — primær; 9.5
flervalg + bevis — sekundær).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Én bred eksamen, fire formatregimer** — vurderingsformen (5-timers skriftlig
   skoleeksamen 2026, kun kalkulator, ingen bok/formelark), formathistorikken
   (papir → Inspera → flervalg → skoleeksamen) og hovedfunnet: temaene er stabile,
   bare formatet svinger (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 1 oppgave 1-kjeden, Del 3 basis/koordinater/basisskifte, Del 4 lineære
   avbildninger, Del 5 egenverdier/diagonalisering, determinant i Del 2), kunne
   (Del 6 ortogonalitet/minste kvadrater, Del 7 spektralteorem/kvadratiske former,
   matriseinvers i Del 2), kjenne (Del 7.3 indreproduktrom, Del 8 bevisoppgaven,
   matrisepotens) — med notatet om at hvert sett dekker nesten hele pensum, så
   bredde slår dybde-i-ett-tema.
3. **Sjangerguiden** — A–N med løsningsoppskriftene fra drillkapitlene
   (1.5, 2.4, 3.4, 4.4, 5.3, 6.4, 7.4) i kortform.
4. **Sensorreglene** — «alle svar begrunnes», teoremnavning (uten formelark må de
   pugges), merkede radoperasjoner, $\operatorname{Col}A$-basis fra original,
   $P/D$-matching, $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, kryssledd delt på
   2, ortogonal basis før projeksjon, eksakte svar, delpunkt-gjenbruk (fra kap.
   9.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet (feil
   $\operatorname{Col}A$-basis fra RREF, projeksjon uten ortogonal basis, $P/D$ i
   feil rekkefølge, diagonaliserbarhet forvekslet med inverterbarhet, kvadratisk
   form uten å halvere kryssledd, feil $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning,
   ufullstendig parameteranalyse, feil normallikninger, egenvektor ikke normalisert,
   $\det$-regneregler galt, desimal i stedet for eksakt, ubegrunnet
   flervalgs-tenkning i skriftlig format), hver med henvisning til kapitlet som
   forebygger den.
6. **Formel- og teoremliste i Lays notasjon** — apparatet fra innholdskontraktene
   (Gauss–Jordan + inverterbarhetsteoremet, $\operatorname{Nul}/\operatorname{Col}/
   \operatorname{Row}$ + dimensjonsteoremet, determinant + regneregler + Cramer,
   basis/koordinater + $P_{\mathcal{C}\leftarrow\mathcal{B}}$, standardmatrise +
   injektiv/surjektiv, egenverdier + diagonalisering $A=PDP^{-1}$, spektralteoremet
   $A=QDQ^{T}$, kvadratiske former + definitthet, ortogonal projeksjon +
   dekomposisjon + Gram-Schmidt, minste kvadrater $A^{T}A\hat{\mathbf{x}}=A^{T}
   \mathbf{b}$, indreproduktrom, bevistemaene i §8) — med markering *utlede/kunne
   aktivt* vs. *kun bruke*, og en påminnelse om at **alt må kunnes utenat** (ikke
   noe formelark).
7. **Studieløp** — semesterplan: Del 0 → Del 1 (motoren, drill til automatikk) →
   Del 2 (verktøykassen) → Del 3–4 (språk + avbildninger) → **Del 5 (bruk mest tid
   — pensumets tyngste enkelttema)** → Del 6–7 (karakterskillerne) → Del 8
   (bevisoppgaven for toppkarakter) → temaprøvene → føringsstandarden (9.1) →
   flervalgsdrill (9.2) → de tre øvingseksamenene under tidspress (5 timer, kun
   kalkulator). To-spors-notat: tren primært fullt begrunnet skriftlig føring
   (9.3–9.4), men gå gjennom flervalgsvarianten (9.5) fordi formatet har svingt —
   verifiser mot 2026-settet.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat121-uib` med alle 37
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames`
   fra §2-tabellen (del-nummer → seksjonstittel). **`number` SKAL være del-basert**
   («5.2», ALDRI lineær «22») — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser i innholdet bruker samme del-baserte form («kap. 5.2»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N og frekvenstallene som
   resten refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (radreduksjon er motoren for
   alt) → Del 2 (matriser/determinant) → Del 3 (vektorrom/basis) → Del 4 (lineære
   avbildninger; 4.3 krever 3.3 basisskifte).
4. **Tyngdepunktet**: Del 5 (egenverdier/diagonalisering; krever Del 2 determinant +
   Del 1 $\operatorname{Nul}$).
5. **Nivå 2 + bevis**: Del 6 (ortogonalitet; krever Del 1) → Del 7 (spektralteorem;
   7.1 krever 5.2 + 6.2) → Del 8 (bevis; 8.2 krever 7.1, 8.3 krever 5.2 + 7.3).
6. **Del 9** til slutt (føring + flervalgsdrill + de tre øvingseksamenene gjenbruker
   alt og må dekke A–N + begge produksjonsmåter). Temaprøvene (§4) legges som
   prøvekapitler (`mat121-uib-<del>-prove`, chapterNumber `<del>.P`) etter
   plattformens mønster, én per temadel 1–8 (32 stk).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. Del 1 og Del 6 (5 kap.) og Del 9 (5
kap., hvorav 3 øvingseksamener) er de største — hold hver del samlet hos én agent,
flagg dem for konsistenssjekk. Del 8 (bevis) bygges av en agent som også leser 5.2,
7.1 og 7.3 (bevisene refererer dit). Øvingseksamenene (9.3–9.5) bygges av én agent
som leser HELE skjelettet (de gjenbruker alle sjangre).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + Lays notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent Lay-notasjon: $\operatorname{Nul}A$,
      $\operatorname{Col}A$, $\operatorname{Row}A$, $\operatorname{rang}A$,
      $\operatorname{Span}\{\dots\}$, $[\mathbf{x}]_{\mathcal{B}}$,
      $P_{\mathcal{C}\leftarrow\mathcal{B}}$, $\operatorname{proj}_W\mathbf{y}$,
      $W^{\perp}$, $A=PDP^{-1}$, $A=QDQ^{T}$, $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$,
      $A^{T}A\hat{\mathbf{x}}=A^{T}\mathbf{b}$, $\det(A-\lambda I)=0$.
- [ ] **Notasjonskonsistens (grep over alle mat121-uib-filer)**: radoperasjoner
      merket over `∼`; $\operatorname{Col}A$-basis fra **original** (ikke RREF);
      **eksakte svar** (aldri desimal i løsningsforslag); egenvektorer normalisert
      der $Q$ skal være ortogonal; kryssledd delt på 2 i kvadratiske former;
      teoremer navngitt.
- [ ] **Føringsstandard i ALLE løsningsforslag**: merkede radoperasjoner;
      $\operatorname{Col}A$-basis fra original; $P/D$ matchet søyle for søyle;
      $P_{\mathcal{C}\leftarrow\mathcal{B}}$ i riktig retning; kryssledd/2; ortogonal
      basis før projeksjon; teoremnavn der argumentet bæres (inverterbarhets-,
      dimensjons-, spektralteoremet); verbal konklusjonssetning; eksakt sluttsvar
      markert. Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Format-ærlighet**: kap. 0.1 og 9.2/9.5 sier eksplisitt at gjeldende
      emnebeskrivelse (2026) angir skriftlig skoleeksamen, at flervalg (9.2/9.5) er
      **sekundært**, og at format-prognosen skal verifiseres mot 2026-settet
      (planlagt 22.09.2026). Bevis-kapitlene (§8) og egenverdi-metode uten skreven
      fasit merkes «⚠️ metode = faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — `bi-okonomi`/R1/R2/1T lenket og verifisert; MAT111 som
      klartekst med aktiveringsmarkør), `collapsible` Symbol- og formelliste per
      delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver;
      bevis-kapitlene fører komplette modellbevis med forutsetningssjekk.
- [ ] **Quiz-sum ≥ 554 og flashcard-sum ≥ 592** per kvotetabellen i §3
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener (9.3–9.5) som
      sammen dekker A–N og begge produksjonsmåter (skriftlig + flervalg).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser og kontekster;
      ingen formuleringer fra reelle sett eller fasiter (skjelettets mønstereksempler
      er selv omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      Lay refereres, aldri siteres i lengde.
- [ ] **Navigasjon**: `mat121-uib` inn i `src/app/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Bergen (UiB)**, navn = «MAT121 Lineær algebra».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
