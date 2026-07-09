# Bokskjelett: MAT1120 Lineær algebra (UiO) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (UiOs MAT1120-arkiv: sju fullstendige sett med offisielle
> løsningsforslag H2018–H2024, med tilhørende oppgavesett og vedlegg).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../mat121-uib/SKJELETT.md` (samme pensumkjerne, Lay-basert,
> UiB) og `../mat1110/` (UiOs kalkulus-2 med lineær-algebra-innslag, MAT1120s
> forkunnskapsemne). MAT1120 er UiOs **teoritunge andrekurs** i lineær algebra,
> oppfølgeren til **MAT1110**; MAT1110-forkunnskaper skrives som klartekst med
> aktiveringsmarkør (se §1.5, punkt 9).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat1120` |
| Tittel | **MAT1120 Lineær algebra** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag (teoritungt, bevisorientert, definisjons- og teoremrikt — abstrakt lineær algebra på Lays struktur) |
| Antall kapitler | **33** (1 eksamenskart + 28 tema/drill + 1 føring + 3 øvingseksamener) + 28 prøvekapitler |
| Estimert totaltid | **~2 570 min ≈ 43 timer** |
| Quiz totalt | **539** (krav ≥500) |
| Flashcards totalt | **628** (krav ≥500; sikt 600–700 for et teorem-/definisjonsrikt fag uten formelark) |

**Pitch (ett avsnitt):** MAT1120 er UiOs dedikerte, teoritunge andrekurs i lineær
algebra — oppfølgeren til MAT1110 — bygget tett på pensumboken **David C. Lay,
*Linear Algebra and Its Applications***. Notasjonen $\operatorname{Nul}A$,
$\operatorname{Col}A$, $\operatorname{Row}A$, $[\mathbf{x}]_{\mathcal{B}}$,
$P_{\mathcal{C}\leftarrow\mathcal{B}}$, $\operatorname{proj}_W\mathbf{y}$,
$A=PDP^{-1}$, $A=PDP^{T}$, $A=U\Sigma V^{T}$ er Lays, og boken bruker den som
standard. To ting definerer emnet. **Det første er formatet, som er usedvanlig
stabilt:** hvert eneste sett i arkivet er en **4-timers skriftlig skoleeksamen med
nøyaktig 10 deloppgaver som teller likt (10 poeng hver)**, gruppert i 4–5
hovedoppgaver, karakter A–F, **ingen flervalg** — bare fullt begrunnet langsvar der
*alle svar skal begrunnes*. **Det andre er vedlegget:** emnet er formelt «ingen
hjelpemidler», men hvert sett kommer med et **vedlegg** — enten en Matlab-utskrift
(`rref`, `poly`, `eig`) eller (fra H2024) et ark med ferdige reduserte trappeformer
— som gjør den rå regnejobben. Studenten skal **lese pivoter, karakteristisk
polynom og egenverdier ut av vedlegget**, ikke radredusere store matriser for hånd.
Det flytter belastningen fra regning til **argumentasjon, begrepsbruk og
teoremhenvisning**. Bredden er nesten identisk fra år til år: fem søyler er
praktisk talt garantert hvert sett — (1) $\operatorname{Col}/\operatorname{Nul}$/basis
fra RREF, (2) egenverdier/diagonalisering, (3) **et abstrakt vektorrom**
($\operatorname{P}_n$/funksjonsrom) med koordinater og matriserepresentasjon
$[T]_{\mathcal{B}}$, (4) Gram–Schmidt/ortogonal basis, og (5) ortogonal
projeksjon/minste kvadrater — sistnevnte ofte i et **ikke-standard indreprodukt**
(vektet, integral eller evaluering). Den avgjørende forskjellen fra søsteremnet
MAT121: MAT1120 er **mer abstrakt og bevisorientert**, og skyver
determinant-regneregler, matriseinvers-mekanikk, Cramer og
likningssystem-parameteranalyse ned til MAT1100/MAT1110 (**testes ikke som egne
temaer**). Den frigjorte tiden går til det abstrakte vektorrommet (100 % mot ~30 % i
MAT121), ikke-standard indreprodukt, spektralteori, SVD og
differensiallikningsanvendelser. Sensorregelen som preger alt: **«du må begrunne
alle svar, og vise nok mellomregning til at argumentene lett kan følges»** — og
fasitene **siterer vedlegget** («Fra Matlab-utskriften/vedlegget ser vi at RREF
er …») i stedet for å radredusere for hånd.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett.
   Riktig sluttsvar uten føring gir lite eller ingen uttelling. Hvert
   løsningsforslag skrives som **A-besvarelse**: mellomregning ledd for ledd,
   navngitt teorem der argumentet bæres (spektralteoremet,
   diagonaliserbarhetskriteriet, dimensjonsteoremet, ortogonal dekomposisjon,
   isomorfi-kriteriet), verbal konklusjonssetning, sluttsvar markert.

2. **Vedlegget er metoden — ikke radreduser store matriser for hånd.** Dette er
   MAT1120s definerende arbeidsmåte. Der en RREF, et karakteristisk polynom eller
   egenverdier med ortonormale egenvektorer trengs for en 3×4-matrise eller større,
   skrives det **«Fra vedlegget/Matlab-utskriften ($\operatorname{rref}$,
   $\operatorname{poly}$, $\operatorname{eig}$) ser vi at … »** og resultatet brukes.
   Manuell radreduksjon av store/stygge matriser er tidssluk og feilkilde og skal
   **ikke** vises. Boken trener **vedleggslesing** (hva pivotmønsteret betyr) og
   **bruk av resultatet**, ikke radoperasjonene. Små 2×2-utregninger (verifisere
   $A\mathbf{v}=\lambda\mathbf{v}$, en liten normallikning) gjøres for hånd. Hvert
   RREF-/egenverdi-baserte kapittel og hver øvingseksamen skal ha et **eksplisitt
   «vedlegg»** (en gjengitt RREF / `poly` / `eig`-utskrift for oppgavens matriser)
   som løsningen siterer.

3. **Lays notasjon er bokstandard:** $\operatorname{Nul}A$ (nullrom),
   $\operatorname{Col}A$ (kolonnerom), $\operatorname{Row}A$ (radrom),
   $\operatorname{rang}A$; $\operatorname{Span}\{\mathbf{v}_1,\dots\}$;
   koordinatvektor $[\mathbf{x}]_{\mathcal{B}}$; overgangs-/basisskiftematrise
   $P_{\mathcal{C}\leftarrow\mathcal{B}}$ (leses «$\mathcal{C}$ fra $\mathcal{B}$» —
   søylene er $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater, og
   $P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$);
   matriserepresentasjon $[T]_{\mathcal{B}}$ og
   $[T]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[T]_{\mathcal{B}}P_{\mathcal{B}\leftarrow\mathcal{C}}$;
   indreprodukt $\langle\mathbf{u},\mathbf{v}\rangle$; ortogonal projeksjon
   $\operatorname{proj}_W\mathbf{y}$; ortogonalkomplement $W^{\perp}$;
   diagonalisering $A=PDP^{-1}$; ortogonal diagonalisering $A=PDP^{T}$ (Lays
   konvensjon — $P$ ortogonal, ikke $Q$); kvadratisk form
   $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$; normallikningene
   $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$; SVD $A=U\Sigma V^{T}$; karakteristisk
   likning $\det(A-\lambda I)=0$. **Merk:** MAT1120 bruker $A=PDP^{T}$ for ortogonal
   diagonalisering (MAT121-skjelettet brukte $A=QDQ^{T}$) — hold $P$-konvensjonen
   konsekvent gjennom hele boka.

4. **Føringsstandard:** basis for $\operatorname{Col}A$ pekes ut som de
   **opprinnelige pivotkolonnene i $A$** (ikke de reduserte i RREF); avhengighets-
   relasjoner leses av RREF og gjelder like mye i $A$; $\operatorname{Nul}A$-basis =
   spesielle løsninger (én per fri variabel); egenvektorer i $P$ og egenverdier i
   $D$ **matches søyle for søyle**; for ortogonal diagonalisering skal $P$ ha
   **ortonormale** kolonner ($P^{T}P=I$); kryssledd i en kvadratisk form **deles på
   2** inn i $a_{ij}=a_{ji}$; basisskiftematrisen fylles i **riktig retning**;
   singulærverdiene ordnes **synkende** i $\Sigma$.

5. **Ikke-standard indreprodukt — den skarpeste fellen (egen warning + drill).**
   Når en oppgave oppgir et **vektet** ($\langle\mathbf{x},\mathbf{y}\rangle=
   \sum w_i x_i y_i$), **integral** ($\langle p,q\rangle=\int_a^b p(t)q(t)\,dt$)
   eller **evaluerings**-indreprodukt ($\langle p,q\rangle=\sum p(t_i)q(t_i)$),
   skal **ALLE** skalarprodukt, normer og ortogonalitetssjekker i hele oppgaven
   regnes med den oppgitte definisjonen — også normen ved normalisering i
   Gram–Schmidt. Å bruke standardprikkproduktet der oppgaven har oppgitt et annet
   indreprodukt er den vanligste og mest kostbare MAT1120-fellen. Hvert kapittel som
   berører indreprodukt har en `warning` om dette, og Del 4–5 driller det eksplisitt.

6. **Eksakte svar** (heltall, brøk, $\sqrt2$, $\frac{1}{\sqrt5}$), **aldri**
   desimaltilnærming — tallene er «pene» fordi vedlegget garanterer det, og et
   urent svar signaliserer regnefeil eller feil vedleggsavlesning.

7. **Diagonaliserbarhet begrunnes ALLTID med multiplisitet (eller en navngitt
   snarvei).** Det holder ikke å påstå. Sensor vil se enten (a) **$n$ distinkte
   egenverdier** ⇒ diagonaliserbar, (b) **symmetrisk** ⇒ ortogonalt diagonaliserbar
   (spektralteoremet), (c) **triangulær** ⇒ egenverdier på diagonalen, eller (d) at
   **hvert egenroms dimensjon = egenverdiens algebraiske multiplisitet**. For
   **ikke**-diagonaliserbar: vis eksplisitt at et egenrom har for lav dimensjon
   (geometrisk < algebraisk).

8. **Delpunktgjenbruk er designet inn.** Deloppgavene er kjedet: samme
   matrise/underrom går igjen gjennom en hel hovedoppgave (samme $A$/$C$ brukes til
   basis → projeksjon → minste kvadrater; samme $W$ gjennom flere deler med to ulike
   indreprodukt). Å se koblingen sparer tid og premieres — løsningsforslagene i boka
   viser koblingen eksplisitt.

9. **Aktiveringsmarkør for MAT1110-forkunnskaper.** Forkunnskapsemnet **MAT1110
   (Kalkulus og lineær algebra, UiO)** er ikke bygget som bok ennå. Referanser til
   det skrives som **klartekst** med markøren *(MAT1110 — forkunnskapsemne, ikke
   bygget ennå; aktiver `/bok/mat1110/<id>`-lenke når den finnes)*. Referanser til
   **bygde** bøker lenkes normalt — kun til kapitler som finnes: **Matematikk for
   økonomer** (`bi-okonomi`, Høyskole, bygget) dekker matriser/determinant/Gauss på
   innføringsnivå og er primær-ankeret for tidlige forkunnskaper; **R1/R2/1T**
   dekker vektorer, likningssett, komplekse tall (R2) og bevisføring fra VGS. Det
   MAT1120 forutsetter fra MAT1110 (radreduksjon-mekanikk, matrisealgebra, komplekse
   tall, determinant, grunnleggende egenverdibegrep) repeteres kort ved behov, men
   **læres ikke fra grunnen** — boken begynner der MAT1110 slapp.

10. **Ærlighet om format og arkiv.** (a) Formatet er **usedvanlig stabilt** (10
    deloppgaver à 10 p, 4 t, RREF-/Matlab-vedlegg gjennom hele arkivet) — prognosen
    er sikker; boken kalibreres presist mot dette. (b) **Vedleggsformatet skiftet**
    fra Matlab-utskrift (2018–2022-u) til rene RREF-ark (2024) — boken trener begge
    (samme funksjon), og kap. 0.1 ber studenten verifisere formatet på nyeste sett.
    (c) H2020 var hjemmeeksamen (pandemi-avvik), men innhold og struktur var
    uendret. (d) Sensorkravene er utledet fra sju **offisielle** løsningsforslag —
    de er godt dokumenterte; der et konkret metodevalg er faglig standard snarere
    enn dokumentert, merkes det «⚠️ metode = faglig standard».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): vedleggslesing og fundamentale
underrom er inngangen; abstrakte vektorrom/koordinater/$[T]_{\mathcal{B}}$ er
språket og MAT1120s tyngdepunkt; egenverdier/diagonalisering hviler på underrom;
indreprodukt og ortogonalitet bygger den geometriske delen; projeksjon/minste
kvadrater er anvendelsen; symmetriske matriser/spektralteorem/kvadratiske former er
toppen av ortogonalitets- og egenverditeorien; SVD + dynamiske systemer + bevis er
bredde- og topp-poeng-laget; eksamenstreningen er sist. **Frekvensen styrer
omfanget**, ikke rekkefølgen: nivå 1-temaer (~100 %) får teori + eget drillkapittel;
nivå 3 får ett kompakt kapittel. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet og vedlegget | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer det stabile 10×10 p-formatet, vedleggsbruken og temaryggraden. |
| 1 | Fundamentale underrom fra RREF | 4 | $\operatorname{Col}/\operatorname{Nul}$/basis/rang fra vedlegg ~100 %, fast oppgave 1 → nivå 1 «perfekt» → teori + drill. |
| 2 | Abstrakte vektorrom, koordinater og $[T]_{\mathcal{B}}$ | 7 | Abstrakt vektorrom + koordinater/matriserepresentasjon ~100 %, **MAT1120s signaturoppgave og største differensiator** → nivå 1 → egen stor del. |
| 3 | Egenverdier og diagonalisering | 4 | Egenverdier/diagonalisering ~100 % (multiplisitetskriteriet + snarveier) → nivå 1 → teori + drill; $A^k$/polynom i $A$ ~40 %. |
| 4 | Indreproduktrom, ortogonalitet og Gram–Schmidt | 3 | Gram–Schmidt/ortogonal basis ~100 %, ikke-standard indreprodukt ~70 % (karakterskiller) → nivå 1 → teori + drill. |
| 5 | Ortogonal projeksjon og minste kvadrater | 3 | Projeksjon/minste kvadrater ~100 %, $W^{\perp}$/avstand ~55 % → nivå 1 → teori + drill. |
| 6 | Symmetriske matriser og kvadratiske former | 4 | Spektralteorem ~55 %, kvadratiske former/Rayleigh/kjeglesnitt ~70 % → nivå 2 (karakterskiller) → teori + drill. |
| 7 | SVD, dynamiske systemer og bevis | 3 | SVD ~30 %, $\mathbf{x}'=A\mathbf{x}$ ~35 % + diskret ~15 %, kort bevis ~50 % → nivå 3 (bredde/topp-poeng). |
| 8 | Eksamenstrening | 4 | Føringsstandard + vedleggsbruk + 3 komplette øvingseksamener (10 deloppgaver à 10 p, med vedlegg). |

**Avvik fra DNA-malen (dokumentert):**

1. **33 tema-/treningskapitler — over DNA-taket (20–35, men i øvre sjikt).**
   Begrunnet i PRODUKSJONSLOYPE-lærdommen «≥500 er et gulv»: MAT1120 er et
   **komplett, definisjons- og teoremrikt teorifag** der hvert sett dekker nesten
   hele bredden, så bredden kan ikke kuttes. Det abstrakte vektorrommet (Del 2)
   krever alene 7 kapitler fordi det er signaturoppgaven og det tyngste
   begrepsapparatet. Flashcard-tettheten er derfor bevisst høy (628, ikke ~510).

2. **Determinant-regneregler, matriseinvers-mekanikk, Cramer og
   likningssystem-parameteranalyse er UTELATT som egne temaer.** Dette er det
   største avviket fra søsteremnet MAT121 (som har egne del-er/kapitler for nettopp
   dette). MAT1120 forutsetter alt fra MAT1100/MAT1110 og **tester det ikke som egne
   deloppgaver** (analysen §2, funn 6). Determinant brukes bare som verktøy
   (invertibel ⇔ $\det\ne0$; $\det=\prod\lambda_i$). Den frigjorte plassen går til
   abstrakte vektorrom, ikke-standard indreprodukt, SVD og diff.likninger.

3. **Del 2 (abstrakte vektorrom) har 7 kapitler — på DNA-batching-taket.** Fordi
   dette er den 100 %-sikre signaturoppgaven og MAT1120s definerende innhold, får
   den mer plass enn noen annen del. Ved bygging (fase 4) kan den splittes på to
   agenter, men **begge må lese HELE delens kontrakter** (jf. byggekontrakt-regelen),
   og delen flagges for konsistenssjekk i fase 6.

4. **Drillkapitlene ligger i temadelene sine** (1.4, 2.7, 3.4, 4.3, 5.3, 6.4) i
   stedet for i siste del: dette er sjangrene som må drilles rett etter teorien.
   Del 8 beholder føringsstandarden og de tre komplette øvingseksamenene.

5. **Egen bevis-plassering i Del 7 (kap. 7.3), ikke egen bevis-del.** Til forskjell
   fra MAT121 (som har tre dedikerte bevis-kapitler) er MAT1120s bevisoppgave
   kortere og mer spredt (~50 %, ofte innbakt som en deloppgave om Householder,
   posdef eller isomorfi). Bevistemaene forankres primært i de relevante kapitlene
   (isomorfi i 2.6, ikke-diagonaliserbarhet i 3.2, normbevaring/Householder i 6.1 og
   7.3, posdef i 6.2) og samles i ett dedikert bevis-/teorikapittel (7.3) med
   bevishåndverket. Det speiler at MAT1120 er bevisorientert **gjennomgående**, ikke
   i én isolert del.

6. **Ingen flervalgsspor.** I motsetning til MAT121 (som fikk et sekundært
   flervalgs-repertoar fra 2019–2021) har MAT1120 **aldri** hatt flervalg — alt er
   fullt begrunnet langsvar. Boken har derfor bare ett produksjonsspor: den fullt
   begrunnede skriftlige besvarelsen med vedleggsbruk. Det forenkler
   Eksamensvinkel-blokkene.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A**
$\operatorname{Col}/\operatorname{Nul}$/basis/rang fra RREF (vedlegg), **B**
ortogonal basis (Gram–Schmidt) og ortogonal projeksjon, **C** minste kvadrater
(normallikninger/projeksjonssnarvei, affin ved rangdefekt), **D** egenverdier/
egenvektorer/diagonaliserbarhet $A=PDP^{-1}$, **E** $A^k$ og polynom i $A$
($q(A)$, samme $P$), **F** symmetriske matriser/spektralteorem/ortogonal
diagonalisering $A=PDP^{T}$, **G** kvadratiske former ($Q=\mathbf{x}^{T}A\mathbf{x}$,
definitthet, Rayleigh, kjeglesnitt), **H** abstrakt vektorrom
($\operatorname{P}_n$/funksjonsrom): underrom/basis + koordinater + $[T]_{\mathcal{B}}$
(signaturoppgaven), **I** lineære avbildninger, matriserepresentasjon
$[T]_{\mathcal{B}}$ og basisskifte $P_{\mathcal{C}\leftarrow\mathcal{B}}$, **J**
$\mathbf{x}'=A\mathbf{x}$ og diskret dynamikk $\mathbf{x}_{k+1}=A\mathbf{x}_k$,
**K** singulærverdidekomposisjon (SVD, $\max\|A\mathbf{x}\|=\sigma_1$), **L** kort
teori-/bevisoppgave. Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

**Aktiveringsmarkør (jf. §1.5 punkt 9):** MAT1110-referanser skrives som klartekst
med *(MAT1110 — forkunnskapsemne, ikke bygget ennå; aktiver
`/bok/mat1110/<id>`-lenke når den finnes)*. Bygde bøker (`bi-okonomi`, R1, R2, 1T)
lenkes normalt, kun til kapitler som finnes.

---

### Del 0 — Eksamenskartet og vedlegget

#### Kapittel 0.1: Eksamenskartet: 10 deloppgaver à 10 p, vedlegget og fem faste søyler

- **id:** `mat1120-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT1120: den stabile 4-timers eksamenen med 10 deloppgaver à 10 p, det avgjørende vedlegget (RREF/Matlab), de fem faste søylene, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (sju offisielle løsningsforslag H2018–H2024). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakterskala A–F, **10 deloppgaver som teller likt (10 p hver)** i 4–5 nummererte hovedoppgaver med bokstavdeler, **ingen flervalg**, to godkjente obligatoriske innleveringer kreves for å gå opp; (ii) **vedlegget — det definerende trekket**: formelt ingen hjelpemidler, men hvert sett har et vedlegg (Matlab-utskrift `rref`/`poly`/`eig` 2018–2022-u; ferdige RREF-ark fra 2024) som gjør den rå regningen — studenten **leser** pivoter/RREF/karakteristisk polynom/egenverdier ut av det og **siterer** det, radreduserer ikke store matriser for hånd; (iii) **de fem faste søylene** (hvert sett treffer alle): $\operatorname{Col}/\operatorname{Nul}$/basis fra RREF, egenverdier/diagonalisering, abstrakt vektorrom + $[T]_{\mathcal{B}}$, Gram–Schmidt, ortogonal projeksjon/minste kvadrater; (iv) **temafrekvens-tabellen** ($\operatorname{Col}/\operatorname{Nul}$-basis ~100 %, egenverdier/diagonalisering ~100 %, abstrakt vektorrom + koordinater ~100 %, Gram–Schmidt ~100 %, projeksjon/minste kvadrater ~100 %, $[T]_{\mathcal{B}}$ ~85 %, ikke-standard indreprodukt ~70 %, kvadratiske former/Rayleigh/kjeglesnitt ~70 %, basisskifte $P_{\mathcal{C}\leftarrow\mathcal{B}}$ ~60 %, spektralteorem ~55 %, $W^{\perp}$/avstand ~55 %, kort bevis ~50 %, $A^k$/polynom ~40 %, $\mathbf{x}'=A\mathbf{x}$ ~35 %, SVD ~30 %, diskret dynamikk/Householder/$\operatorname{Row}A$ ~15 %); (v) **det som IKKE testes** (motsatt av MAT121): determinant-regneregler, matriseinvers-mekanikk, Cramer, likningssystem-parameteranalyse — alt forutsatt fra MAT1100/MAT1110; (vi) **karakterskillene** (bestått ≈ mekanikken: lese $\operatorname{Col}/\operatorname{Nul}$-basis fra RREF, verifisere en oppgitt egenvektor, sette opp normallikningene, Gram–Schmidt i standardprikkprodukt; midtsjikt ≈ + korrekt diagonalisering med $P/D$-samsvar, ortogonal diagonalisering av symmetriske, klassifisering av kvadratiske former, affin minste kvadraters løsning, $[T]_{\mathcal{B}}$ for en derivasjonsoperator; toppsjikt ≈ abstrakte vektorrom sikkert (underroms-/basisbevis, $\ker T$ oversatt til funksjoner), ikke-standard indreprodukt konsekvent, SVD komplett, Rayleigh/kjeglesnitt, korte bevis stramt ført).
- **Innholdskontrakt:** Sjangerkatalogen A–L presenteres som studentens sjekkliste med frekvens per sjanger; **konkret prognose for neste ordinære eksamen** (4 t, 10 deloppgaver à 10 p, RREF-/Matlab-vedlegg, 4–5 hovedoppgaver): **O1** $\operatorname{Col}/\operatorname{Nul}$-basis fra RREF → ortogonal basis (Gram–Schmidt) → projeksjon/minste kvadrater, ofte kjedet på samme matrise; **O2** egenverdier/diagonaliserbarhet (begrunn med multiplisitet), evt. symmetrisk → ortogonal diagonalisering; **O3** abstrakt vektorrom ($\operatorname{P}_n$/funksjonsrom): underrom/basis + $[T]_{\mathcal{B}}$/overgangsmatrise, ofte med ikke-standard indreprodukt + Gram–Schmidt; **O4** symmetrisk $A$ → kvadratisk form (klassifisering/Rayleigh/kjeglesnitt) eller SVD; **O5 (eller innbakt del)** kort bevis (refleksjon, posdef, normbevaring) eller anvendelse ($\mathbf{x}'=A\mathbf{x}$/diskret). **Vedleggs-lesestrategi**: hvordan man leser en `rref`/`poly`/`eig`-utskrift og et RREF-ark, og hvorfor manuell radreduksjon er bortkastet tid. Leseplan: Del 1 er inngangen, **Del 2 er tyngdepunktet** (signaturoppgaven), Del 4–5 er ortogonalitetsapparatet, Del 6–7 løfter toppkarakteren.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «O1 gjenbruker samme matrise $A$ til basis, projeksjon og minste kvadrater — hvordan planlegger du oppgaven for å gjenbruke RREF-en fra vedlegget?»; «det er intet formelark — lag en puggeplan for teoremene du må kunne navngi utenat (spektralteoremet, diagonaliserbarhetskriteriet, ortogonal dekomposisjon)»; «i O3 er indreproduktet et integral — hva må du passe på i ALLE skalarprodukt?».
- **Typiske feil:** Metafeilene: radredusere store matriser for hånd i stedet for å bruke vedlegget (tidssluk); lese pensum lineært uten å prioritere de fem faste søylene; undervurdere det abstrakte vektorrommet (signaturoppgaven, 100 %); glemme at diagonaliserbarhet må begrunnes med multiplisitet; bruke standard prikkprodukt der oppgaven har oppgitt et annet indreprodukt.
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog, vedleggsbruk, sensorregler, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Fundamentale underrom fra RREF *(prioritet: PERFEKT — den faste oppgave 1, ~100 %)*

#### Kapittel 1.1: Vedleggslesning: RREF, pivoter og avhengighetsrelasjoner

- **id:** `mat1120-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** MAT1120s arbeidsmåte etablert: les RREF, pivotposisjoner og avhengighetsrelasjoner ut av vedlegget (Matlab-utskrift eller RREF-ark) i stedet for å radredusere for hånd — motoren under hele boka, med en rask repetisjon av span og lineær uavhengighet.
- **Forkunnskaper (kryssbok):** Radreduksjon og matriseføring forutsettes fra *(MAT1110 — forkunnskapsemne, ikke bygget ennå; aktiver `/bok/mat1110/<id>`-lenke når den finnes)*; en innføring finnes i [Lineære likningssystem og Gauss-eliminasjon](/bok/bi-okonomi/bi-okonomi-9-3). Vektorbegrepet i $\mathbb{R}^n$: [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Selve metoden bak sjanger A (~100 %, fast oppgave 1). Fasitens gjennomgående grep: **«Fra vedlegget/Matlab-utskriften ($\operatorname{rref}$) ser vi at RREF er …»** — pivotmønsteret leses av, ikke regnes ut. Prioritet: **perfekt** (arbeidsmåten bærer hele faget).
- **Innholdskontrakt:** Hva et **vedlegg** inneholder og hvordan det leses: Matlab `rref(A)` (redusert trappeform), `poly(A)` (karakteristisk polynom, brukes i Del 3), `eig`/`[V D]=eig(A)` (egenverdier + ortonormale egenvektorer, Del 3/6); og RREF-arkets ferdige trappeformer (samme funksjon). **Pivotposisjon, pivotkolonne, fri variabel**; avlesning av trappeform; **avhengighetsrelasjoner** — at en ikke-pivotkolonne er en lineærkombinasjon av pivotkolonnene, med koeffisienter lest **direkte av RREF**, og at samme relasjon gjelder i $A$ (fordi radreduksjon bevarer kolonnerelasjoner). Rask repetisjon (forutsatt fra MAT1110, ikke lært fra grunnen): **lineærkombinasjon**, **span** $\operatorname{Span}\{\mathbf{v}_1,\dots\}$, **lineær uavhengighet** (pivot i hver søyle), **underrom** (tre betingelser). Regel: **radreduser aldri en stor matrise for hånd** — sitér vedlegget; små 2×2-kontroller er greit. Alt til aktiv bruk.
- **Oppgavesjangre:** A (grunnteknikk / vedleggslesning). Mønstereksempel: «Vedlegget gir RREF-en $R$ av $A$ (4×5). Angi pivotkolonnene, de frie variablene, og skriv den fjerde kolonnen i $A$ som en lineærkombinasjon av de andre.»
- **Typiske feil:** Radreduserer for hånd i stedet for å bruke vedlegget; leser avhengighetsrelasjoner fra feil kolonner; tror relasjonene bare gjelder i $R$ og ikke i $A$; forveksler pivotkolonne og pivotposisjon.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.2: Col A, Nul A, rang og dimensjonsteoremet

- **id:** `mat1120-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-1-1`
- **kapitteltype:** teori
- **description:** Fra RREF til de fundamentale underrommene: basis for Col A (de opprinnelige pivotkolonnene i A), basis for Nul A (spesielle løsninger), rang og dimensjonsteoremet — den mest gjentatte deloppgaven i faget.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Nullrom/kolonnerom-begrepet forutsettes kjent fra *(MAT1110 — ikke bygget; aktiver lenke)*.
- **Eksamensbelegg:** Sjanger A, **~100 %, nesten alltid oppgave 1**. Fasitens grep: fra vedleggets RREF les **basis for $\operatorname{Col}A$** = de **opprinnelige** pivotkolonnene i $A$ (ikke de reduserte), **basis for $\operatorname{Nul}A$** = spesielle løsninger (én per fri variabel), **$\operatorname{rang}A$** = antall pivoter; bruk **dimensjonsteoremet** $\operatorname{rang}A+\dim\operatorname{Nul}A=$ antall søyler som kontroll. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\operatorname{Col}A=\operatorname{Span}\{\text{søyler}\}$ med **basis fra pivotkolonnene i originalmatrisen $A$** (dokumentert felle); $\operatorname{Nul}A=\{\mathbf{x}:A\mathbf{x}=\mathbf{0}\}$ med **basis fra de frie variablene** (spesielle løsninger, én per fri variabel); **$\operatorname{rang}A$** = antall pivoter = $\dim\operatorname{Col}A$; **$\dim\operatorname{Nul}A$** = antall ikke-pivotkolonner (nullitet); **dimensjonsteoremet (rang–nullitet)** $\operatorname{rang}A+\dim\operatorname{Nul}A=n$ (navngis, brukes som kontroll); er en gitt $\mathbf{b}$ i $\operatorname{Col}A$ (løsbarhet av $A\mathbf{x}=\mathbf{b}$ lest av vedlegget). Alt til aktiv bruk, alt lest av vedlegget.
- **Oppgavesjangre:** A. Mønstereksempel: «Bruk vedleggets RREF til å finne en basis for $\operatorname{Col}A$ bestående av kolonner i $A$, og en basis for $\operatorname{Nul}A$. Oppgi $\operatorname{rang}A$ og kontroller med dimensjonsteoremet.»
- **Typiske feil:** **Feil $\operatorname{Col}A$-basis** — oppgir de *reduserte* pivotkolonnene fra RREF i stedet for de opprinnelige i $A$ (den klassiske MAT1120-fellen); forveksler $\operatorname{Nul}A$ (frie variabler) og $\operatorname{Col}A$ (pivoter); glemmer dimensjonsteoremet som kontroll; blander dimensjon og antall vektorer.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 1.3: Row A, lineærkombinasjoner og konstruksjonsvarianter

- **id:** `mat1120-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat1120-1-2`
- **kapitteltype:** teori
- **description:** Radrommet Row A og dets basis, å skrive ikke-pivotkolonnene eksplisitt som lineærkombinasjoner via avhengighetsrelasjonene, og konstruksjonsvarianten: bygg en matrise B med AB = O og gitt rang ved å plassere Nul A-vektorer som kolonner.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2.
- **Eksamensbelegg:** Sjanger A-utvidelser, $\operatorname{Row}A$ ~15 % (2022), lineærkombinasjons-oppgaven og konstruksjonsvarianten (2020: konstruer $B$ med $AB=O$) inngår i oppgave 1-kjeden. Fasitens grep: $\operatorname{Row}A$-basis = ikke-null-radene i RREF; skriv hver ikke-pivotkolonne eksplisitt som lineærkombinasjon av $\operatorname{Col}A$-basis; for $AB=O$: kolonnene i $B$ ligger i $\operatorname{Nul}A$. Prioritet: **perfekt** (del av oppgave 1).
- **Innholdskontrakt:** **$\operatorname{Row}A$** = spennet av radene, med **basis fra ikke-null-radene i RREF** (radrommet bevares av radreduksjon, i motsetning til kolonnerommet); $\dim\operatorname{Row}A=\operatorname{rang}A=\dim\operatorname{Col}A$; **eksplisitte lineærkombinasjoner**: skriv de øvrige kolonnene i $A$ som lineærkombinasjoner av $\operatorname{Col}A$-basisvektorene ved koeffisientene fra RREF; **konstruksjonsvariant** — bygg en matrise $B$ slik at $AB=O$ (hver kolonne i $B$ i $\operatorname{Nul}A$) med foreskrevet rang, og forstå $\operatorname{rang}(AB)$-sammenhengen; **koordinater relativt en basis** $[\mathbf{v}]_{\mathcal{B}}$ i $\mathbb{R}^n$ (bro til Del 2). Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn en basis for $\operatorname{Row}A$. Skriv de øvrige kolonnene i $A$ som lineærkombinasjoner av $\operatorname{Col}A$-basisen. Konstruer en 5×2-matrise $B\ne O$ med $AB=O$.»
- **Typiske feil:** Bruker RREF-kolonnene som $\operatorname{Col}A$-basis men (riktig) RREF-radene som $\operatorname{Row}A$-basis uten å forstå hvorfor kolonner og rader behandles ulikt; feil koeffisienter i lineærkombinasjonene; plasserer ikke $\operatorname{Nul}A$-vektorer som kolonner i $B$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.4: Drill: oppgave 1-kjeden — Col/Nul/basis/rang fra vedlegg

- **id:** `mat1120-1-4` · **number:** 1.4 · **estimatedMinutes:** 85 · **prerequisites:** `mat1120-1-3`
- **kapitteltype:** drill
- **description:** Hele oppgave 1-repertoaret drillet til automatikk: fra én vedleggs-RREF høster du Col/Nul-basis (riktig kilde), rang, dimensjonsteorem-kontroll, lineærkombinasjoner og løsbarhet — med korrekt vedleggssitering hele veien.
- **Eksamensbelegg:** Dekker sjanger A samlet (~100 %, den faste oppgave 1). Variantkatalogen: $\operatorname{Col}/\operatorname{Nul}/\operatorname{Row}$-basis + rang fra vedlegg, dimensjonsteoremet som kontroll, ikke-pivotkolonner som lineærkombinasjoner, $\mathbf{b}\in\operatorname{Col}A$?, $AB=O$-konstruksjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **les vedleggets RREF** — aldri radreduser for hånd; (2) marker pivotkolonner og frie variabler; (3) les av det oppgaven krever ($\operatorname{Col}$-basis fra **original**, $\operatorname{Nul}$-basis fra frie variabler, $\operatorname{rang}$ fra antall pivoter, $\operatorname{Row}$-basis fra RREF-radene); (4) konkluder med navngitt kriterium + dimensjonsteoremet som kontroll. Gjennomregnet «oppgave 1-case» (én matrise gjenbrukt til $\operatorname{Col}/\operatorname{Nul}$/rang + lineærkombinasjoner + $\mathbf{b}\in\operatorname{Col}A$) med sensor-margnotater om føringspoengene (sitér vedlegget, $\operatorname{Col}$-basis fra original). 10–15 oppgaver på eksamensnivå: minst én $\operatorname{Col}+\operatorname{Nul}+$rang, én lineærkombinasjon, én $\mathbf{b}\in\operatorname{Col}A$, én $AB=O$-konstruksjon, én kjedet (samme matrise videre til Del 4 Gram–Schmidt).
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Finn basis for $\operatorname{Col}A$ og $\operatorname{Nul}A$ fra vedlegget. (b) Ligger $\mathbf{b}$ i $\operatorname{Col}A$? (c) Skriv kolonne 3 som lineærkombinasjon av basisen.»
- **Typiske feil:** Hele føringsfellekatalogen fra 1.1–1.3 under tidspress; radreduserer på nytt i stedet for å bruke vedlegget; $\operatorname{Col}$-basis fra RREF i stedet for original; glemmer dimensjonsteoremet.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Abstrakte vektorrom, koordinater og [T]_B *(prioritet: PERFEKT — MAT1120s signaturoppgave, ~100 %; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 2.1: Abstrakte vektorrom og underrom: Pₙ og funksjonsrom

- **id:** `mat1120-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-1-2`
- **kapitteltype:** teori
- **description:** Løft fra ℝⁿ til abstrakte vektorrom: aksiomene, underrom via de tre betingelsene, og de to eksamensviktige familiene — polynomrommet Pₙ og funksjonsrom (Span{1, eˣcos x, eˣsin x}, Span{sin t, cos t}). Grunnmuren under signaturoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (span, uavhengighet, underrom i $\mathbb{R}^n$). Konkret vektorrom som utgangspunkt: [Vektorer i tre dimensjoner](/bok/r2/r2-5-1). Funksjonene $e^x\cos x$, $\sin t$: derivasjon forutsettes fra *(MAT1110 — ikke bygget; aktiver lenke)* og [Derivasjon](/bok/r2/r2-3-1).
- **Eksamensbelegg:** Sjanger H (signaturoppgaven), **~100 % — hvert sett har én hovedoppgave i et ikke-$\mathbb{R}^n$-rom**: polynomrom $\operatorname{P}_2$/$\operatorname{P}_3$ (2020, 2022, 2022-u, 2024) eller funksjonsrom ($\operatorname{Span}\{1,e^x\cos x,e^x\sin x\}$ i 2019, $\operatorname{Span}\{\sin t,\cos t\}$ i 2021, abstrakt $V$ med gitt basis i 2018). Fasitens grep: vis **underrom** via de tre betingelsene (f.eks. $W=\{p\in\operatorname{P}_3:p(-1)=0\}$, 2024 O3a). Prioritet: **perfekt** (den skarpeste forskjellen fra MAT121).
- **Innholdskontrakt:** **Vektorromsaksiomene** (kort — de åtte, presentert som «regler du kjenner igjen fra $\mathbb{R}^n$, nå abstrakt»); **underrom** via de **tre betingelsene** ($\mathbf{0}\in W$; lukket under addisjon; lukket under skalarmultiplikasjon) og sjekkprosedyren; **polynomrommet $\operatorname{P}_n$** (polynomer av grad $\le n$) med standardbasis $\{1,t,t^2,\dots,t^n\}$ og $\dim\operatorname{P}_n=n+1$; **funksjonsrom** som underrom av $C(\mathbb{R})$ ($\operatorname{Span}\{1,e^x\cos x,e^x\sin x\}$, $\operatorname{Span}\{\sin t,\cos t\}$); typiske underrom å verifisere: $W=\{p\in\operatorname{P}_3:p(-1)=0\}$, $\{p:\int p=0\}$, $\{p:p'(0)=0\}$; hvorfor delmengder som IKKE inneholder $\mathbf{0}$ eller ikke er lukket (f.eks. $\{p:p(0)=1\}$) ikke er underrom. Alt til aktiv bruk (underrom-bevis er en fast deloppgave).
- **Oppgavesjangre:** H. Mønstereksempel: «Vis at $W=\{p\in\operatorname{P}_3:p(-1)=0\}$ er et underrom av $\operatorname{P}_3$.»
- **Typiske feil:** **Hopper over ett av de tre underroms-aksiomene** (dokumentert felle); sjekker ikke $\mathbf{0}\in W$; forveksler «delmengde» og «underrom»; behandler $\operatorname{P}_n$ som om $\dim=n$ (det er $n+1$); tror et hvilket som helst sett av funksjoner er et vektorrom.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 2.2: Basis, dimensjon og lineær uavhengighet i abstrakte rom

- **id:** `mat1120-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-2-1`
- **kapitteltype:** teori
- **description:** Å bevise at en mengde er en basis for et abstrakt rom: lineær uavhengighet (av polynomer/funksjoner) pluss et dimensjonsargument — den todelte standarden sensor krever, inkludert Wronski-determinanten for funksjoner.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.1 (uavhengighet i $\mathbb{R}^n$).
- **Eksamensbelegg:** Sjanger H, **~100 %** som byggekloss i underroms-/koordinatoppgaver. Fasitens grep: «vis at $\mathcal{B}$ er en basis» ⇒ vis **lineær uavhengighet** + **riktig antall vektorer = dimensjonen** (dimensjonsargument). For polynomer: sett lineærkombinasjon $=0$, sammenlign koeffisienter. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineær uavhengighet** i abstrakte rom: $c_1\mathbf{v}_1+\dots+c_k\mathbf{v}_k=\mathbf{0}\Rightarrow$ alle $c_i=0$; for polynomer ved **koeffisientsammenligning**, for funksjoner ved **evaluering i punkter** eller **Wronski-determinanten** (kjennskap); **basis** = uavhengig + utspenner; **dimensjon** og det bærende **dimensjonsargumentet**: «$k$ uavhengige vektorer i et $k$-dimensjonalt rom er automatisk en basis» (og «$k$ vektorer som utspenner et $k$-dim rom er uavhengige»); dimensjon av et underrom via en eksplisitt basis; koordinat-uavhengighet: en mengde i $V$ er uavhengig ⇔ koordinatvektorene er uavhengige i $\mathbb{R}^n$ (bro til 2.3). Alt til aktiv bruk (basisbevis er fast).
- **Oppgavesjangre:** H. Mønstereksempel: «Vis at $\mathcal{B}=\{1+t,\,t+t^2,\,1+t^2\}$ er en basis for $\operatorname{P}_2$.»
- **Typiske feil:** **Glemmer dimensjonsargumentet** i basisbeviset (viser bare uavhengighet, eller bare utspenning, ikke koblingen); regner uavhengighet av polynomer feil (glemmer koeffisientsammenligning); teller feil dimensjon ($\operatorname{P}_2$ har dimensjon 3); bruker Wronski feil.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 2.3: Koordinater [x]_B og koordinatavbildningen

- **id:** `mat1120-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat1120-2-2`
- **kapitteltype:** teori
- **description:** Koordinatvektoren [x]_B relativt en basis, koordinatavbildningen som isomorfi til ℝⁿ, og hvordan den gjør abstrakte problemer (polynomer, funksjoner) til vanlig matriseregning i ℝⁿ.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.2.
- **Eksamensbelegg:** Sjanger H/I, **~100 %** som verktøy (koordinater brukes i nesten hver abstrakt-vektorrom-oppgave). Fasitens grep: uttrykk et polynom/en funksjon i koordinater relativt $\mathcal{B}$, regn i $\mathbb{R}^n$, oversett tilbake. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Koordinatvektor** $[\mathbf{x}]_{\mathcal{B}}$ relativt en ordnet basis $\mathcal{B}$; entydigheten av koordinater; **koordinatavbildningen** $\mathbf{x}\mapsto[\mathbf{x}]_{\mathcal{B}}$ som en **isomorfi** $V\to\mathbb{R}^n$ (lineær, bijektiv); konsekvensen: uavhengighet, span, dimensjon og lineære relasjoner i $V$ speiles nøyaktig i $\mathbb{R}^n$, så abstrakte problemer løses ved matriseregning på koordinatvektorer; eksempler i $\operatorname{P}_n$ (koeffisientvektor) og funksjonsrom. Alt til aktiv bruk.
- **Oppgavesjangre:** H/I. Mønstereksempel: «La $\mathcal{B}=\{1,t,t^2\}$. Finn $[3-2t+t^2]_{\mathcal{B}}$, og avgjør ved koordinater om $\{2-t,\,1+t^2,\,t+t^2\}$ er uavhengige i $\operatorname{P}_2$.»
- **Typiske feil:** Feil rekkefølge på koordinatene (basis er *ordnet*); glemmer at koordinatavbildningen krever en fast basis; regner i $V$ når koordinater ville forenklet; blander koordinatvektor og selve vektoren.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.4: Basisskifte og overgangsmatrisen P_{C←B}

- **id:** `mat1120-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-2-3`
- **kapitteltype:** teori
- **description:** Overgangsmatrisen P_{C←B} som oversetter B-koordinater til C-koordinater: hvordan den bygges (C-uttrykk av B-vektorene), riktig retning, og inversen P_{B←C} = (P_{C←B})⁻¹.
- **Forkunnskaper (kryssbok):** Kap. 2.3. Invers matrise forutsettes fra *(MAT1110 — ikke bygget; aktiver lenke)*.
- **Eksamensbelegg:** Sjanger I, **~60 %** (2018, 2019, 2020, 2024). Fasitens grep: bygg $P_{\mathcal{C}\leftarrow\mathcal{B}}$ med $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater som kolonner; finn inversen via $[M\,|\,I]\to[I\,|\,M^{-1}]$ (eller vedlegget). Prioritet: **kunne** (nivå 2, men et hyppig karakterskille pga. retningsfellen).
- **Innholdskontrakt:** **Overgangsmatrisen** $P_{\mathcal{C}\leftarrow\mathcal{B}}$ definert ved $[\mathbf{x}]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}$; **konstruksjon** — kolonne $j$ er $[\mathbf{b}_j]_{\mathcal{C}}$ ($\mathcal{B}$-vektorene uttrykt i $\mathcal{C}$-koordinater); **retningen** (leses «$\mathcal{C}$ fra $\mathcal{B}$» — hvilken vei matrisen oversetter); **inversen** $P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$; spesialtilfellet med standardbasis; overgang i $\operatorname{P}_n$/funksjonsrom (2019, 2024). Alt til aktiv bruk, med retning som eksplisitt sjekkpunkt.
- **Oppgavesjangre:** I. Mønstereksempel: «$\mathcal{B}=\{1,t,t^2\}$, $\mathcal{C}=\{1,1+t,1+t+t^2\}$ i $\operatorname{P}_2$. Finn $P_{\mathcal{C}\leftarrow\mathcal{B}}$ og $P_{\mathcal{B}\leftarrow\mathcal{C}}$.»
- **Typiske feil:** **Feil retning** på matrisen ($P_{\mathcal{C}\leftarrow\mathcal{B}}$ forvekslet med inversen $P_{\mathcal{B}\leftarrow\mathcal{C}}$) — dokumentert felle; kolonnene fylt med feil basis; glemmer at kolonnene er *koordinater*, ikke vektorene selv.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.5: Lineære avbildninger og matriserepresentasjonen [T]_B

- **id:** `mat1120-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-2-4`
- **kapitteltype:** teori
- **description:** Matrisen [T]_B til en lineær avbildning på et abstrakt rom — særlig derivasjons- og differensialoperatorer T(f)=f′ og S(f)=f″−2f′+2f — bygget kolonne for kolonne fra T(bⱼ) uttrykt i B-koordinater.
- **Forkunnskaper (kryssbok):** Kap. 2.3–2.4. Derivasjon: [Derivasjon](/bok/r2/r2-3-1); linearitet av derivasjon forutsettes fra *(MAT1110 — ikke bygget; aktiver lenke)*.
- **Eksamensbelegg:** Sjanger H/I, **~85 %** (2018, 2019, 2021, 2022-u, 2024). Fasitens grep: $[T]_{\mathcal{B}}=[[T(\mathbf{b}_1)]_{\mathcal{B}}\ \cdots\ [T(\mathbf{b}_n)]_{\mathcal{B}}]$; for en **derivasjonsoperator** $T(f)=f'$ eller **differensialoperator** $S=T^2-2T+2I$ (2019 O3c) regnes matrisen ved derivasjon av basisfunksjonene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineær avbildning** mellom vektorrom (linearitetssjekk $T(\mathbf{u}+\mathbf{v})=T\mathbf{u}+T\mathbf{v}$, $T(c\mathbf{u})=cT\mathbf{u}$); **matriserepresentasjon** $[T]_{\mathcal{B}}$ (kolonne $j=[T(\mathbf{b}_j)]_{\mathcal{B}}$), og sammenhengen $[T(\mathbf{x})]_{\mathcal{B}}=[T]_{\mathcal{B}}[\mathbf{x}]_{\mathcal{B}}$; **derivasjonsoperatoren** $T(f)=f'$ på $\operatorname{P}_n$ og funksjonsrom; **differensialoperatorer** som polynom i $T$: $S=T^2-2T+2I$ gir $[S]_{\mathcal{B}}=[T]_{\mathcal{B}}^2-2[T]_{\mathcal{B}}+2I$ (2019); avbildning mellom to *ulike* baser $[T]_{\mathcal{C}\leftarrow\mathcal{B}}$ (kjennskap, utdypes i 2.6). Alt til aktiv bruk.
- **Oppgavesjangre:** H/I. Mønstereksempel: «La $T:\operatorname{P}_2\to\operatorname{P}_2$, $T(p)=p'$. Finn $[T]_{\mathcal{B}}$ for $\mathcal{B}=\{1,t,t^2\}$, og bruk den til å regne $[S]_{\mathcal{B}}$ for $S=T^2+T$.»
- **Typiske feil:** **$[T]_{\mathcal{B}}$-kolonner i feil rom** — regner $T(\mathbf{b}_j)$ men glemmer å uttrykke resultatet i $\mathcal{B}$-koordinater før det settes inn som kolonne (dokumentert felle); sjekker ikke linearitet; feil i derivasjonen av basisfunksjonene; blander $[T]_{\mathcal{B}}$ og $[T]_{\mathcal{C}}$.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.6: Basisskifte for [T]_B, isomorfi og kjerne oversatt til funksjoner

- **id:** `mat1120-2-6` · **number:** 2.6 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-2-5`
- **kapitteltype:** teori
- **description:** Hvordan matrisen endres ved basisskifte ([T]_C = P_{C←B}[T]_B P_{B←C}), isomorfi-kriteriet (T isomorfi ⇔ [T]_B invertibel), og å oversette ker T / Nul[T]_B tilbake til polynomer eller funksjoner.
- **Forkunnskaper (kryssbok):** Kap. 2.4–2.5, 1.2 ($\operatorname{Nul}A$).
- **Eksamensbelegg:** Sjanger I/L, **~60 %** (basisskifte) + isomorfi-kriteriet (2018 O4b, 2021 O3b). Fasitens grep: $[T]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[T]_{\mathcal{B}}P_{\mathcal{B}\leftarrow\mathcal{C}}$; $T$ isomorfi ⇔ $[T]_{\mathcal{B}}$ invertibel; $\ker T$ funnet som $\operatorname{Nul}[T]_{\mathcal{B}}$ og oversatt tilbake til funksjoner. Prioritet: **kunne** (nivå 2), men isomorfi-/kjerne-oversettelsen er et toppsjikt-grep.
- **Innholdskontrakt:** **Basisskifteformelen** $[T]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[T]_{\mathcal{B}}P_{\mathcal{B}\leftarrow\mathcal{C}}$ (likedannethet/similaritet), og at egenverdiene er basisuavhengige; **kjerne og bilde** av $T$: $\ker T\cong\operatorname{Nul}[T]_{\mathcal{B}}$, $\operatorname{im}T\cong\operatorname{Col}[T]_{\mathcal{B}}$; **isomorfi-kriteriet**: $T$ er en isomorfi ⇔ $[T]_{\mathcal{B}}$ er invertibel ⇔ $\ker T=\{\mathbf{0}\}$; en likning $T(f)=g$ har entydig løsning ⇔ $[T]_{\mathcal{B}}$ invertibel (2021 O3b); **oversettelse tilbake**: en basis for $\operatorname{Nul}[T]_{\mathcal{B}}$ (koordinatvektorer) tolkes tilbake som polynomer/funksjoner i $\ker T$ (2019, 2022-u). Alt til aktiv bruk.
- **Oppgavesjangre:** I/L. Mønstereksempel: «For $T(p)=p'-p$ på $\operatorname{P}_2$: finn $[T]_{\mathcal{B}}$, avgjør om $T$ er en isomorfi, og finn $\ker T$ som en mengde polynomer.»
- **Typiske feil:** Feil rekkefølge/retning i $P_{\mathcal{C}\leftarrow\mathcal{B}}[T]_{\mathcal{B}}P_{\mathcal{B}\leftarrow\mathcal{C}}$; konkluderer isomorfi uten å sjekke invertibilitet; oversetter ikke $\operatorname{Nul}[T]_{\mathcal{B}}$-koordinatene tilbake til funksjoner (lar svaret stå i $\mathbb{R}^n$); glemmer at egenverdier er basisuavhengige.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.7: Drill: signaturoppgaven — abstrakt vektorrom + [T]_B

- **id:** `mat1120-2-7` · **number:** 2.7 · **estimatedMinutes:** 95 · **prerequisites:** `mat1120-2-6`
- **kapitteltype:** drill
- **description:** Hele signaturoppgaven drillet: underrom + basis i Pₙ/funksjonsrom → koordinater → overgangsmatrise → [T]_B for en derivasjonsoperator → ker T oversatt tilbake — den ene hovedoppgaven som skiller MAT1120 fra et førstekurs.
- **Eksamensbelegg:** Dekker sjanger H + I samlet (~100 %, én hovedoppgave hvert sett). Variantkatalogen: polynomrom ($\operatorname{P}_2$/$\operatorname{P}_3$, ofte med et underrom $W$ definert ved en betingelse) og funksjonsrom ($\operatorname{Span}\{1,e^x\cos x,e^x\sin x\}$, $\operatorname{Span}\{\sin t,\cos t\}$), underroms-/basisbevis, koordinater, $P_{\mathcal{C}\leftarrow\mathcal{B}}$, $[T]_{\mathcal{B}}$ for $T(f)=f'$ eller en differensialoperator, $\ker T$ oversatt til funksjoner. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **vis underrom** via de tre betingelsene; (2) **vis basis** = uavhengighet + dimensjonsargument; (3) gå til **koordinater** relativt en fast basis; (4) bygg $[T]_{\mathcal{B}}$ (kolonner = $T(\mathbf{b}_j)$ i $\mathcal{B}$-koordinater) eller overgangsmatrisen (riktig retning); (5) svar på $\ker T$/isomorfi via $[T]_{\mathcal{B}}$ og **oversett tilbake til funksjoner**. Gjennomregnet «O3-case» (funksjonsrom: underrom → basis → $[T]_{\mathcal{B}}$ for $T(f)=f'$ → $\ker T$) med sensor-margnotater om hvor toppsjikt-poengene sitter (dimensjonsargument, koordinater før matrise, tilbakeoversettelse). 10–15 oppgaver på eksamensnivå: minst én $\operatorname{P}_n$-underrom + basis, én koordinat/overgangsmatrise, én $[T]_{\mathcal{B}}$ for derivasjonsoperator, én funksjonsrom-variant, én $\ker T$-oversettelse.
- **Oppgavesjangre:** H + I. Mønstereksempel: «$V=\operatorname{Span}\{\sin t,\cos t\}$, $T(f)=f'$. Vis at $\mathcal{B}=\{\sin t,\cos t\}$ er en basis, finn $[T]_{\mathcal{B}}$, og avgjør om $T$ er en isomorfi.»
- **Typiske feil:** Hele fellekatalogen fra 2.1–2.6 under tidspress; hopper over et underroms-aksiom eller dimensjonsargumentet; $[T]_{\mathcal{B}}$-kolonner ikke i $\mathcal{B}$-koordinater; svaret på $\ker T$ ikke oversatt tilbake til funksjoner.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Egenverdier og diagonalisering *(prioritet: PERFEKT — ~100 %)*

#### Kapittel 3.1: Egenverdier, egenvektorer og egenrom

- **id:** `mat1120-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-1-2`
- **kapitteltype:** teori
- **description:** Egenverdier og egenvektorer med MAT1120s arbeidsmåte: verifiser en oppgitt egenvektor ved innsetting Av=λv, les det karakteristiske polynomet fra vedlegget (poly), og finn egenrom (A−λI)v=0 fra RREF.
- **Forkunnskaper (kryssbok):** Kap. 1.2 ($\operatorname{Nul}A$), 1.1 (vedleggslesning). Grunnleggende egenverdibegrep og komplekse tall forutsettes fra *(MAT1110 — ikke bygget; aktiver lenke)* og [Komplekse tall](/bok/r2/r2-2-1).
- **Eksamensbelegg:** Sjanger D, **~100 %**. Fasitens grep: når en egenvektor er **oppgitt**, verifiser ved **innsetting** $A\mathbf{v}=\lambda\mathbf{v}$ (ikke via karakteristisk polynom); når polynomet trengs, **les det fra vedlegget** ($\operatorname{poly}(A)$); egenrom = $\operatorname{Nul}(A-\lambda I)$ fra vedleggets RREF. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Egenverdi/egenvektor** ($A\mathbf{v}=\lambda\mathbf{v}$, $\mathbf{v}\ne\mathbf{0}$); **verifisering ved innsetting** (foretrukket når $\mathbf{v}$ er gitt); **karakteristisk likning** $\det(A-\lambda I)=0$ og hvordan polynomet **leses fra vedlegget** ($\operatorname{poly}$); **egenrom** $E_\lambda=\operatorname{Nul}(A-\lambda I)$ funnet fra vedleggets RREF; **algebraisk multiplisitet** (røttenes multiplisitet) vs. **geometrisk multiplisitet** ($\dim E_\lambda$), og ulikheten geo $\le$ alg; kontrollrelasjonene $\operatorname{spor}A=\sum\lambda_i$, $\det A=\prod\lambda_i$; triangulær matrise ⇒ egenverdier på diagonalen; $\lambda=0$ er egenverdi ⇔ $A$ singulær. Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «Verifiser at $\mathbf{v}=(1,-1,2)^{T}$ er en egenvektor for $A$, og finn egenverdien. Bruk vedlegget til å finne alle egenverdier og egenrommet til den minste.»
- **Typiske feil:** Regner karakteristisk polynom for hånd i stedet for å bruke vedlegget/innsetting; forveksler algebraisk og geometrisk multiplisitet; glemmer $\mathbf{v}\ne\mathbf{0}$-kravet; regner egenrom feil fra RREF.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 3.2: Diagonalisering A=PDP⁻¹ og multiplisitetskriteriet

- **id:** `mat1120-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-3-1`
- **kapitteltype:** teori
- **description:** Diagonalisering A=PDP⁻¹ og selve karakterskilleren: å BEGRUNNE diagonaliserbarhet med multiplisitet eller en navngitt snarvei (distinkt/symmetrisk/triangulær), og å vise ikke-diagonaliserbarhet ved et for lite egenrom.
- **Forkunnskaper (kryssbok):** Kap. 3.1.
- **Eksamensbelegg:** Sjanger D, **~100 %**. Fasitens snarveier: **$n$ distinkte egenverdier** ⇒ diagonaliserbar (2021 O4, 2022-u O2a); **symmetrisk** ⇒ diagonaliserbar (spektralteoremet, Del 6); **triangulær** ⇒ egenverdier på diagonalen (2019 O4a, 2024 O2). For **ikke**-diagonaliserbar: vis at et egenrom har for lav dimensjon (2019 O4a, 2024 O2 for $B$, 2022-u O2b for $\alpha=0$). Prioritet: **perfekt** (multiplisitetsbegrunnelsen er selve karakterskilleren).
- **Innholdskontrakt:** **Diagonalisering** $A=PDP^{-1}$ ($P$ = egenvektorer som kolonner, $D$ = egenverdier på diagonalen, **matchet søyle for søyle**); **diagonaliserbarhetskriteriet**: $A$ ($n\times n$) er diagonaliserbar ⇔ summen av geometriske multiplisiteter $=n$ ⇔ geometrisk = algebraisk multiplisitet for hver egenverdi; **snarveiene** (navngis): $n$ distinkte egenverdier ⇒ diagonaliserbar; symmetrisk ⇒ (ortogonalt) diagonaliserbar; triangulær ⇒ egenverdier avlest; **ikke-diagonaliserbarhet** vist eksplisitt ved geometrisk $<$ algebraisk (et egenrom for lite); parameteravhengige matriser (for hvilke $\alpha$ er $A$ diagonaliserbar, 2022-u). Alt til aktiv bruk; **hver diagonaliserbarhets-konklusjon skal begrunnes**.
- **Oppgavesjangre:** D. Mønstereksempel: «Avgjør (uten å finne diagonaliseringen) om $A$ og $B$ er diagonaliserbare. Begrunn med multiplisitet eller en navngitt snarvei.»
- **Typiske feil:** **Diagonaliserbarhet påstått uten multiplisitetssjekk** (dokumentert felle nr. 3) — glemmer å vise geo = alg, eller å utnytte «symmetrisk»/«distinkte»; $P$ og $D$ ikke matchet søyle for søyle; sier «ikke diagonaliserbar» uten å vise hvilket egenrom som er for lite.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 3.3: Aᵏ og polynom i A

- **id:** `mat1120-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat1120-3-2`
- **kapitteltype:** teori
- **description:** Potenser Aᵏ=PDᵏP⁻¹ og polynom i A: hvis Av=λv er q(A)v=q(λ)v, så B=q(A) deler egenvektorer med A og diagonaliseres med samme P — et elegant og gjentatt grep.
- **Forkunnskaper (kryssbok):** Kap. 3.2.
- **Eksamensbelegg:** Sjanger E, **~40 %** (2018, 2021 O5, 2022). Fasitens grep: $A^k=PD^kP^{-1}$ (egenverdier $\lambda^k$, samme egenvektorer); for $B=q(A)$: egenverdier $q(\lambda)$, **samme** $P$, $B=Pq(D)P^{-1}$; invertibel ⇔ ingen $q(\lambda)=0$. Prioritet: **kjenne** (nivå 3, men lettjent når egenverdiene er kjent).
- **Innholdskontrakt:** **Potenser** $A^k=PD^kP^{-1}$ (fordi $A^k$ har egenverdier $\lambda^k$ med samme egenvektorer); **polynom i $A$**: $q(A)=c_mA^m+\dots+c_1A+c_0I$, og hvis $A\mathbf{v}=\lambda\mathbf{v}$ så $q(A)\mathbf{v}=q(\lambda)\mathbf{v}$; følgene: $q(A)$ deler egenvektorer med $A$, har egenverdier $q(\lambda)$, og diagonaliseres $q(A)=Pq(D)P^{-1}$ med **samme** $P$ (2021 O5); $q(A)$ invertibel ⇔ $q(\lambda)\ne0$ for alle egenverdier; kort om Cayley–Hamilton (karakteristisk polynom annullerer $A$) som kjennskap. Alt til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Vis at enhver egenvektor for $A$ også er egenvektor for $B=2I+A-A^2$. Er $B$ invertibel? Finn en diagonalisering av $B$.»
- **Typiske feil:** Regner $A^k$ direkte i stedet for via $PD^kP^{-1}$; bruker feil $P$ for $q(A)$ (skal være samme som for $A$); regner $q(\lambda)$ feil; konkluderer invertibilitet uten å sjekke alle $q(\lambda)$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.4: Drill: egenverdi- og diagonaliseringskjeden

- **id:** `mat1120-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat1120-3-3`
- **kapitteltype:** drill
- **description:** Egenverdi-repertoaret drillet: verifiser egenvektor → les polynom/egenverdier fra vedlegg → begrunn diagonaliserbarhet med multiplisitet/snarvei → bygg P og D matchet → Aᵏ/q(A) med samme P.
- **Eksamensbelegg:** Dekker sjanger D + E samlet (~100 %). Variantkatalogen: verifiser oppgitt egenvektor, egenverdier/egenrom fra vedlegg, diagonaliserbarhet begrunnet (distinkt/symmetrisk/triangulær/multiplisitet), ikke-diagonaliserbar (for lite egenrom), $A^k$/$q(A)$ med samme $P$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) er en egenvektor oppgitt? verifiser ved innsetting; (2) trengs egenverdier? les $\operatorname{poly}$/`eig` fra vedlegget; (3) egenrom = $\operatorname{Nul}(A-\lambda I)$ fra vedleggets RREF; (4) **begrunn diagonaliserbarhet** med navngitt snarvei eller multiplisitet; (5) bygg $P$/$D$ matchet, eller $A^k=PD^kP^{-1}$/$q(A)=Pq(D)P^{-1}$. Gjennomregnet «O2-case» (matrise med én multiplisitet: begrunn diagonaliserbarhet + evt. $A^k$) med sensor-margnotater om multiplisitetsbegrunnelsen og $P/D$-matchingen. 10–15 oppgaver på eksamensnivå: minst én egenvektor-verifisering, én diagonaliserbarhets-begrunnelse, én ikke-diagonaliserbar, én $A^k$/$q(A)$.
- **Oppgavesjangre:** D + E. Mønstereksempel: «Fra vedlegget: egenverdiene til $A$ er $2,2,5$. Er $A$ diagonaliserbar? Begrunn med egenrommenes dimensjon, og finn i så fall $P$ og $D$.»
- **Typiske feil:** Hele fellekatalogen fra 3.1–3.3 under tidspress; diagonaliserbarhet uten multiplisitetsbegrunnelse; $P/D$ feilmatchet; regner polynom for hånd i stedet for vedlegg.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Indreproduktrom, ortogonalitet og Gram–Schmidt *(prioritet: PERFEKT — ~100 %; ikke-standard indreprodukt er karakterskiller)*

#### Kapittel 4.1: Indreprodukt: standard, vektet, integral og evaluering

- **id:** `mat1120-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-2-1`
- **kapitteltype:** teori
- **description:** Indreprodukt som abstrakt begrep og de fire eksamenstypene — standard prikkprodukt, vektet, integral og evaluering — med den viktigste advarselen i faget: bruk ALLTID det oppgitte indreproduktet, også i norm og ortogonalitet.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (funksjonsrom, $\operatorname{P}_n$). Integral: [Integralregning](/bok/r2/r2-4-1); prikkprodukt: [Skalarprodukt](/bok/r1/r1-6-3).
- **Eksamensbelegg:** Sjanger B-grunnlag; **ikke-standard indreprodukt ~70 %** (vektet $\langle\mathbf{x},\mathbf{y}\rangle=2x_1y_1+2x_2y_2+x_3y_3$ i 2018/2019, integral $\langle p,q\rangle=\int_{-2}^0 pq\,dt$ i 2024, evaluering $\langle p,q\rangle=\sum p(t_i)q(t_i)$ i 2020/2022). Fasitens grep: **alle** skalarprodukt, normer og ortogonalitetssjekker i oppgaven regnes med den oppgitte definisjonen. Prioritet: **perfekt** (grunnlaget) / **kunne** (ikke-standard er karakterskiller).
- **Innholdskontrakt:** **Indreprodukt** som en funksjon $\langle\cdot,\cdot\rangle$ med de fire aksiomene (symmetri, linearitet i første argument, positiv definitthet); **de fire eksamenstypene**: standardprikkprodukt i $\mathbb{R}^n$, **vektet** $\langle\mathbf{x},\mathbf{y}\rangle=\sum w_ix_iy_i$ ($w_i>0$), **integral** $\langle p,q\rangle=\int_a^b p(t)q(t)\,dt$ på $\operatorname{P}_n$/funksjonsrom, **evaluering** $\langle p,q\rangle=\sum_{i}p(t_i)q(t_i)$; **norm** $\|\mathbf{v}\|=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$ (i det oppgitte indreproduktet), **ortogonalitet** $\langle\mathbf{u},\mathbf{v}\rangle=0$, **avstand**; Cauchy–Schwarz og trekantulikheten (kjennskap). Alt til aktiv bruk, med gjentatt understreking av at indreproduktet må være det oppgitte.
- **Oppgavesjangre:** B. Mønstereksempel: «På $\operatorname{P}_2$ med $\langle p,q\rangle=\int_{-1}^1 pq\,dt$: regn $\langle 1,t^2\rangle$, $\|t\|$, og avgjør om $1$ og $t$ er ortogonale.»
- **Typiske feil:** **Standard prikkprodukt der oppgaven har oppgitt et vektet/integral-/evaluerings-indreprodukt** — den vanligste MAT1120-fellen (nr. 1); bruker standardnorm ved normalisering selv om indreproduktet er ikke-standard; glemmer positiv definitthet-kravet; regner integralet/summen feil.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 4.2: Ortogonale mengder og Gram–Schmidt

- **id:** `mat1120-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-4-1`
- **kapitteltype:** teori
- **description:** Gram–Schmidt-prosessen som gjør en hvilken som helst basis om til en ortogonal (eller ortonormal) basis — i standard OG ikke-standard indreprodukt, med heltalls-oppskalering underveis slik fasiten gjør.
- **Forkunnskaper (kryssbok):** Kap. 4.1. $\operatorname{Col}A$-basis fra kap. 1.2.
- **Eksamensbelegg:** Sjanger B, **~100 %** (Gram–Schmidt og/eller ortogonal basis i hvert sett). Fasitens grep: $\mathbf{v}_1=\mathbf{a}_1$, $\mathbf{v}_k=\mathbf{a}_k-\sum_{i<k}\frac{\langle\mathbf{a}_k,\mathbf{v}_i\rangle}{\langle\mathbf{v}_i,\mathbf{v}_i\rangle}\mathbf{v}_i$; **skalér gjerne opp til heltallsvektorer** underveis (fasiten gjør det); normalisér til ortonormal ved behov. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ortogonal mengde** (parvis ortogonale) og at den er lineært uavhengig; **ortonormal basis** ($\langle\mathbf{u}_i,\mathbf{u}_j\rangle=\delta_{ij}$); koordinater relativt en ortogonal basis (Fourier-koeffisienter $\frac{\langle\mathbf{y},\mathbf{v}_i\rangle}{\langle\mathbf{v}_i,\mathbf{v}_i\rangle}$); **Gram–Schmidt-prosessen** (formelen ledd for ledd, med intuisjon: trekk fra projeksjonen på det allerede ortogonaliserte); **heltalls-oppskalering** for penere regning; **normalisering** til ortonormal; **Gram–Schmidt i ikke-standard indreprodukt** (alle $\langle\cdot,\cdot\rangle$ i det oppgitte, f.eks. integral på $\operatorname{P}_2$, 2024). Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn en ortogonal basis for $\operatorname{Col}A$ (kolonnene gitt) ved Gram–Schmidt, og normalisér til en ortonormal basis.»
- **Typiske feil:** **Bruker standard prikkprodukt i et ikke-standard indreprodukt** (nr. 1); glemmer å dele på $\langle\mathbf{v}_i,\mathbf{v}_i\rangle$; normaliserer med feil norm; regnefeil pga. manglende heltalls-oppskalering; bruker $\mathbf{a}$-vektorene i stedet for de allerede ortogonaliserte $\mathbf{v}$-ene i senere steg.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.3: Drill: Gram–Schmidt i standard og ikke-standard indreprodukt

- **id:** `mat1120-4-3` · **number:** 4.3 · **estimatedMinutes:** 85 · **prerequisites:** `mat1120-4-2`
- **kapitteltype:** drill
- **description:** Gram–Schmidt drillet i alle fire indreprodukt-typene — særlig integral og evaluering på polynomrom — så refleksen «hvilket indreprodukt er oppgitt?» sitter før projeksjonsdelen i Del 5.
- **Eksamensbelegg:** Dekker sjanger B (~100 %) med vekt på ikke-standard indreprodukt (~70 %). Variantkatalogen: Gram–Schmidt i $\mathbb{R}^n$ (standard og vektet), i $\operatorname{P}_n$ (integral), i evalueringsindreprodukt; ortonormalisering med riktig norm; ortogonal basis for et gitt underrom. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **identifiser indreproduktet** (den kritiske refleksen — standard? vektet? integral? evaluering?); (2) $\mathbf{v}_1=\mathbf{a}_1$; (3) trekk fra projeksjonene med det **oppgitte** $\langle\cdot,\cdot\rangle$, skalér til heltall; (4) normalisér med den **oppgitte** normen om ortonormal kreves. Gjennomregnet case (ortogonal basis for $\operatorname{P}_2$ i integralindreprodukt) med sensor-margnotater om indreprodukt-refleksen og normvalget. 10–15 oppgaver: minst én i $\mathbb{R}^n$ (standard), én vektet, én integral på $\operatorname{P}_n$, én evaluering, én med normalisering.
- **Oppgavesjangre:** B. Mønstereksempel: «På $\operatorname{P}_2$ med $\langle p,q\rangle=\int_{-2}^0 pq\,dt$: Gram–Schmidt på $\{1,t,t^2\}$ til en ortogonal basis for $\operatorname{P}_2$.»
- **Typiske feil:** Faller i standard-prikkprodukt-fellen under tidspress; feil norm ved normalisering; bruker $\mathbf{a}$ i stedet for $\mathbf{v}$ i senere steg; regnefeil i integralene.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Ortogonal projeksjon og minste kvadrater *(prioritet: PERFEKT — ~100 %)*

#### Kapittel 5.1: Ortogonal projeksjon, dekomposisjon, W⊥ og avstand

- **id:** `mat1120-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-4-2`
- **kapitteltype:** teori
- **description:** Ortogonal projeksjon proj_W y på et underrom med ortogonal basis, dekomposisjonsteoremet y=ŷ+z, ortogonalkomplementet W⊥ og avstanden ‖y−ŷ‖ til underrommet — hele projeksjonsapparatet, også i ikke-standard indreprodukt.
- **Forkunnskaper (kryssbok):** Kap. 4.2 (ortogonal basis, Gram–Schmidt), 1.2 ($\operatorname{Nul}A$/$\operatorname{Col}A$).
- **Eksamensbelegg:** Sjanger B, **~100 %** (projeksjon) + $W^{\perp}$/avstand ~55 % (2018, 2020, 2022-u, 2024). Fasitens grep: **ortogonal basis FØRST** (Gram–Schmidt), så $\operatorname{proj}_W\mathbf{y}=\sum\frac{\langle\mathbf{y},\mathbf{v}_i\rangle}{\langle\mathbf{v}_i,\mathbf{v}_i\rangle}\mathbf{v}_i$; avstand $d=\|\mathbf{y}-\hat{\mathbf{y}}\|$; basis for $W^{\perp}$ via $\{\mathbf{y}-\hat{\mathbf{y}}\}$ eller dimensjonsargument. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ortogonalkomplement** $W^{\perp}=\{\mathbf{z}:\langle\mathbf{z},\mathbf{w}\rangle=0\ \forall\mathbf{w}\in W\}$, dimensjonsrelasjonen $\dim W+\dim W^{\perp}=\dim(\text{rom})$, og $(\operatorname{Col}A)^{\perp}=\operatorname{Nul}(A^{T})$; **ortogonal projeksjon** $\operatorname{proj}_W\mathbf{y}=\sum_i\frac{\langle\mathbf{y},\mathbf{v}_i\rangle}{\langle\mathbf{v}_i,\mathbf{v}_i\rangle}\mathbf{v}_i$ (krever **ortogonal** basis — Gram–Schmidt først); **dekomposisjonsteoremet** $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ med $\hat{\mathbf{y}}=\operatorname{proj}_W\mathbf{y}\in W$, $\mathbf{z}\in W^{\perp}$ (entydig); **beste tilnærming**: $\hat{\mathbf{y}}$ er punktet i $W$ nærmest $\mathbf{y}$; **avstand** $d(\mathbf{y},W)=\|\mathbf{y}-\hat{\mathbf{y}}\|=\|\mathbf{z}\|$; alt gyldig også i **ikke-standard indreprodukt**. Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn en ortogonal basis for $W=\operatorname{Col}A$, projiser $\mathbf{b}$ ned i $W$, og finn avstanden fra $\mathbf{b}$ til $W$. Oppgi en basis for $W^{\perp}$.»
- **Typiske feil:** **Projeksjon uten ortogonal basis** (nr. 4) — bruker formelen på en ikke-ortogonal basis uten Gram–Schmidt først; feil indreprodukt (ikke-standard); glemmer å dele på $\langle\mathbf{v}_i,\mathbf{v}_i\rangle$; forveksler $\hat{\mathbf{y}}$ og $\mathbf{z}$; regner avstand som $\|\hat{\mathbf{y}}\|$ i stedet for $\|\mathbf{y}-\hat{\mathbf{y}}\|$.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 5.2: Minste kvadrater: normallikninger, projeksjonssnarvei og affin løsning

- **id:** `mat1120-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-5-1`
- **kapitteltype:** teori
- **description:** Minste kvadraters løsning av Cx=b på to belønnede måter — normallikningene CᵀCx̂=Cᵀb og projeksjonssnarveien p=proj_W b ⇒ Cx=p — pluss det avgjørende poenget: ved rangdefekt er løsningen affin (partikulær + Nul C).
- **Forkunnskaper (kryssbok):** Kap. 5.1 (projeksjon), 1.2 ($\operatorname{Nul}A$).
- **Eksamensbelegg:** Sjanger C, **~100 %** (ofte samme oppgave som B). Fasitens to veier: **normallikningene** $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$ (les den lille RREF-en fra vedlegget, 2019/2020/2022/2024), eller **projeksjonssnarveien** $\mathbf{p}=\operatorname{proj}_W\mathbf{b}\Rightarrow$ løs $C\mathbf{x}=\mathbf{p}$ (2018, gjenbrukt 2024). Ved rangdefekt: **affin** løsning = partikulær + $\operatorname{Nul}C$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Minste kvadraters problem** ($\min\|\mathbf{b}-C\mathbf{x}\|$); **normallikningene** $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$ (utledet fra at residualet $\mathbf{b}-C\hat{\mathbf{x}}\perp\operatorname{Col}C$); **projeksjonssnarveien**: $\operatorname{proj}_W\mathbf{b}=C\hat{\mathbf{x}}$ der $W=\operatorname{Col}C$, så en minste kvadraters løsning løser det konsistente $C\mathbf{x}=\operatorname{proj}_W\mathbf{b}$; **entydighet ⇔ $C$ har full kolonnerang** ($C^{T}C$ invertibel); **affin løsning ved rangdefekt** — når $C$ ikke har full kolonnerang er løsningsmengden partikulær $+\operatorname{Nul}C$ (dokumentert felle); kobling $\operatorname{proj}_W\mathbf{b}=C\hat{\mathbf{x}}$; datatilpasning (rett linje/kurve, kort). Alt til aktiv bruk.
- **Oppgavesjangre:** C. Mønstereksempel: «Finn alle minste kvadraters løsninger av $C\mathbf{x}=\mathbf{b}$, og bruk en av dem til å bestemme $\operatorname{proj}_W\mathbf{b}$ for $W=\operatorname{Col}C$.»
- **Typiske feil:** **Minste kvadraters løsning behandlet som entydig ved rangdefekt** (nr. 5) — glemmer at den er affin (partikulær + $\operatorname{Nul}C$); setter opp $C^{T}C$/$C^{T}\mathbf{b}$ feil; glemmer koblingen $\operatorname{proj}_W\mathbf{b}=C\hat{\mathbf{x}}$; radreduserer normallikningene for hånd i stedet for vedlegget.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 5.3: Drill: projeksjon og minste kvadrater kjedet

- **id:** `mat1120-5-3` · **number:** 5.3 · **estimatedMinutes:** 85 · **prerequisites:** `mat1120-5-2`
- **kapitteltype:** drill
- **description:** Hele oppgave 1-halen drillet kjedet: fra samme matrise — ortogonal basis (Gram–Schmidt) → projeksjon → minste kvadrater (begge veier) → avstand → W⊥ — inkludert ikke-standard indreprodukt og affin løsning.
- **Eksamensbelegg:** Dekker sjanger B + C samlet (~100 %, ofte kjedet på samme matrise som oppgave 1). Variantkatalogen: projeksjon etter Gram–Schmidt, normallikninger vs. projeksjonssnarvei, affin løsning ved rangdefekt, avstand, $W^{\perp}$-basis, ikke-standard indreprodukt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) identifiser indreproduktet; (2) Gram–Schmidt til ortogonal basis for $W$ **hvis** projeksjonsformelen skal brukes; (3) velg vei — normallikninger $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$ (les liten RREF fra vedlegg) **eller** projeksjonssnarvei; (4) sjekk full kolonnerang — hvis ikke, oppgi **affin** løsning; (5) avstand $\|\mathbf{b}-\hat{\mathbf{b}}\|$, $W^{\perp}$-basis. Gjennomregnet kjedet «O1-hale-case» (samme $C$ til projeksjon + minste kvadrater + avstand) med sensor-margnotater (ortogonal basis før projeksjon, affin ved rangdefekt, koblingen $\operatorname{proj}_W\mathbf{b}=C\hat{\mathbf{x}}$). 10–15 oppgaver: minst én projeksjon+avstand, én normallikninger, én projeksjonssnarvei, én affin (rangdefekt), én ikke-standard indreprodukt.
- **Oppgavesjangre:** B + C. Mønstereksempel: «Med samme $C$ som i (a): finn en minste kvadraters løsning via normallikningene, og bruk projeksjonssnarveien til å kontrollere $\operatorname{proj}_W\mathbf{b}$. Hva er avstanden fra $\mathbf{b}$ til $W$?»
- **Typiske feil:** Hele fellekatalogen fra 5.1–5.2 under tidspress; projeksjon uten ortogonal basis; entydig løsning ved rangdefekt; feil indreprodukt; radreduserer normallikningene for hånd.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Symmetriske matriser og kvadratiske former *(prioritet: KUNNE — nivå 2, karakterskiller ~55–70 %)*

#### Kapittel 6.1: Symmetriske matriser og spektralteoremet: ortogonal diagonalisering A=PDPᵀ

- **id:** `mat1120-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-3-2`, `mat1120-4-2`
- **kapitteltype:** teori
- **description:** Spektralteoremet: en symmetrisk matrise er ortogonalt diagonaliserbar A=PDPᵀ med ortonormale egenvektorer. Metoden: normalisér, og kjør Gram–Schmidt INNEN et egenrom med multiplisitet.
- **Forkunnskaper (kryssbok):** Kap. 3.2 (diagonalisering), 4.2 (Gram–Schmidt, ortonormal basis).
- **Eksamensbelegg:** Sjanger F, **~55 %** (2019 O2a, 2021 O2b, 2024; posdef 2020). Fasitens grep: symmetrisk $A=A^{T}$ ⇒ ortogonalt diagonaliserbar; egenrom til ulike egenverdier er automatisk ortogonale — **normalisér**, og Gram–Schmidt *innen* et egenrom med multiplisitet; egenvektorer/verdier fra vedlegget (`[V D]=eig`). Prioritet: **kunne**.
- **Innholdskontrakt:** **Symmetrisk matrise** $A=A^{T}$; **spektralteoremet**: symmetrisk (reell) $A$ har reelle egenverdier, er **ortogonalt diagonaliserbar** $A=PDP^{T}$ med **ortonormale** egenvektorer, og egenrom til ulike egenverdier er ortogonale; **metoden**: finn egenverdier/egenrom (fra vedlegg), **normalisér** hver egenvektor, kjør **Gram–Schmidt innen et egenrom med multiplisitet** for å få ortonormalitet, sett sammen $P$ (ortogonal, $P^{T}P=I$) og $D$; **spektral dekomposisjon** $A=\sum\lambda_i\mathbf{u}_i\mathbf{u}_i^{T}$; **ortogonale matriser** ($P^{T}P=I$, normbevarende, $\det=\pm1$) som kjennskap (bro til 7.3). Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «Begrunn at $A$ er ortogonalt diagonaliserbar, og finn en ortogonal $P$ og diagonal $D$ med $A=PDP^{T}$.»
- **Typiske feil:** **Ikke-normaliserte egenvektorer i $P$** (nr. 6) → $P$ blir ikke ortogonal; **glemmer Gram–Schmidt innen et egenrom med multiplisitet**; bruker $A=PDP^{-1}$ i stedet for $A=PDP^{T}$; regner egenvektorene for hånd i stedet for å bruke vedlegget.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 6.2: Kvadratiske former: symmetrisering og definitthet

- **id:** `mat1120-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-6-1`
- **kapitteltype:** teori
- **description:** Kvadratiske former Q(x)=xᵀAx med symmetrisk A (kryssledd delt på 2), og klassifisering av definitthet via egenverditegn — inkludert beviset posdef ⇒ invertibel.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (symmetrisk matrise, egenverdier).
- **Eksamensbelegg:** Sjanger G, **~70 %** (2018 O3, 2020 O4a). Fasitens grep: skriv $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$ med **symmetrisk** $A$ (kryssledd $a_{ij}=\frac12\cdot$koeffisient); **positiv definit ⇔ alle egenverdier $>0$**; posdef ⇒ invertibel og $B^{-1}$ posdef (2020 O4c, via spektral dekomposisjon). Prioritet: **kunne**.
- **Innholdskontrakt:** **Kvadratisk form** $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$ med **symmetrisk** $A$; **symmetriseringen** — kryssleddskoeffisienten deles på 2 inn i $a_{ij}=a_{ji}$; **klassifisering via egenverditegn**: positiv definit (alle $\lambda_i>0$), negativ definit ($<0$), indefinit (blandet), semidefinit ($\ge0$/$\le0$); sammenhengen med Rayleigh (bro til 6.3); **posdef ⇒ invertibel** og **$B^{-1}$ posdef** (bevis via spektral dekomposisjon $B=PDP^{T}$ — egenverdiene til $B^{-1}$ er $1/\lambda_i>0$); ulikheten $Q(\mathbf{x})\le\lambda_{\max}\|\mathbf{x}\|^2$ (bro til 6.3). Alt til aktiv bruk.
- **Oppgavesjangre:** G (+ L-bevis). Mønstereksempel: «Skriv $Q(x_1,x_2,x_3)=2x_1^2+3x_2^2+x_3^2+4x_1x_2$ på formen $\mathbf{x}^{T}A\mathbf{x}$ med symmetrisk $A$, og klassifiser definittheten.»
- **Typiske feil:** **Feil symmetrisering** (nr. 8) — hele kryssleddskoeffisienten legges i $a_{ij}$ i stedet for å dele på 2, så $A$ blir feil/usymmetrisk; klassifiserer fra diagonalen i stedet for egenverdiene; forveksler semidefinit og definit; glemmer forutsetningssjekk i posdef-beviset.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.3: Rayleigh-maksimering og kjeglesnitt

- **id:** `mat1120-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-6-2`
- **kapitteltype:** teori
- **description:** Rayleigh-kvotienten: max{Q(x):‖x‖=1}=λ_max oppnådd i egenvektoren til λ_max (Teorem 6/7 §7.3), og kjeglesnitt: variabelskiftet x=Py fjerner kryssleddet så du leser av ellipse/hyperbel/parabel.
- **Forkunnskaper (kryssbok):** Kap. 6.1–6.2. Kjeglesnitt: [Kjeglesnitt](/bok/r2/r2-5-6) (VGS-kjennskap til ellipse/hyperbel).
- **Eksamensbelegg:** Sjanger G, del av de ~70 % (Rayleigh 2022 O3; kjeglesnitt 2024 O4b; ulikhet 2021 O2c). Fasitens grep: **Rayleigh** $\max\{Q:\|\mathbf{x}\|=1\}=\lambda_{\max}$ i egenvektoren til $\lambda_{\max}$; begrenset til $\mathbf{x}\perp\mathbf{u}_1$ gir nest største egenverdi (Teorem 7); **kjeglesnitt** ved $\mathbf{x}=P\mathbf{y}$ ($P$ ortogonal) som eliminerer kryssleddet. Prioritet: **kunne**.
- **Innholdskontrakt:** **Rayleigh-kvotienten** og **Teorem 6/7 §7.3** (navngis): $\max\{\mathbf{x}^{T}A\mathbf{x}:\|\mathbf{x}\|=1\}=\lambda_{\max}$, oppnådd i egenvektoren til $\lambda_{\max}$; $\min=\lambda_{\min}$; begrenset til $\mathbf{x}\perp\mathbf{u}_1$ gir nest største egenverdi (Teorem 7); **hovedaksesetningen / variabelskifte** $\mathbf{x}=P\mathbf{y}$ (ortogonal $P$ fra spektralteoremet) gir $Q=\lambda_1y_1^2+\dots+\lambda_ny_n^2$ (ingen kryssledd); **kjeglesnitt-klassifisering**: fortegnene på $\lambda_i$ avgjør ellipse (alle samme tegn), hyperbel (blandet), parabel/degenerert (en $\lambda_i=0$); skisse i hovedaksene; ulikheter som $Q(\mathbf{x})\le\lambda_{\max}\|\mathbf{x}\|^2$ via spektral dekomposisjon eller $\mathbf{x}=P\mathbf{y}$ (2021). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Avgjør ved et variabelskifte som fjerner kryssleddet om kurven $x_1^2+2\sqrt3\,x_1x_2-x_2^2=2$ er en ellipse, hyperbel eller parabel, og skisser den i hovedaksene.»
- **Typiske feil:** Glemmer $\|\mathbf{x}\|=1$-betingelsen i Rayleigh; oppgir feil egenvektor for maksimum; feil ortogonal $P$ (ikke normalisert) i variabelskiftet; feil kjeglesnitt-klasse fra egenverditegnene; skisserer i originalaksene i stedet for hovedaksene.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.4: Drill: symmetrisk-kjeden — ortogonal diagonalisering → kvadratisk form → Rayleigh/kjeglesnitt

- **id:** `mat1120-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `mat1120-6-3`
- **kapitteltype:** drill
- **description:** Den faste karakterskiller-kjeden drillet: symmetrisk A → ortogonal diagonalisering A=PDPᵀ → kvadratisk form Q=xᵀAx → definitthet/Rayleigh-maks/kjeglesnitt, alt fra samme matrise med vedleggets egenverdier.
- **Eksamensbelegg:** Dekker sjanger F + G samlet (~55–70 %, fast karakterskille-kjede der en symmetrisk $A$ samler tre tema i én oppgave). Variantkatalogen: ortogonal diagonalisering (normalisering + Gram–Schmidt i egenrom), symmetrisering av $Q$, definitthetsklassifisering, Rayleigh-maks, kjeglesnitt via $\mathbf{x}=P\mathbf{y}$. Prioritet: **kunne** (karakterskiller).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) er $A$ symmetrisk? ⇒ spektralteoremet, ortogonal diagonalisering; (2) egenverdier/vektorer fra vedlegg, **normalisér**, Gram–Schmidt i egenrom med multiplisitet → $P$ ortogonal, $D$; (3) for kvadratisk form: symmetrisér (kryssledd/2), klassifiser via egenverditegn; (4) Rayleigh: $\lambda_{\max}$ i egenvektoren; (5) kjeglesnitt: $\mathbf{x}=P\mathbf{y}$ fjerner kryssledd, les av kurven. Gjennomregnet «O4-case» (symmetrisk $A$: ortogonal diagonalisering → definitthet → Rayleigh) med sensor-margnotater (ortonormale kolonner i $P$, kryssledd/2, $\lambda_{\max}$-argumentet). 10–15 oppgaver: minst én ortogonal diagonalisering, én definitthet, én Rayleigh, én kjeglesnitt.
- **Oppgavesjangre:** F + G. Mønstereksempel: «Symmetrisk $A$ har egenverdier $1,4$ (fra vedlegg). Finn ortogonal $P$ og $D$ med $A=PDP^{T}$, klassifiser $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$, og oppgi $\max_{\|\mathbf{x}\|=1}Q$.»
- **Typiske feil:** Hele fellekatalogen fra 6.1–6.3 under tidspress; ikke-normaliserte egenvektorer; Gram–Schmidt glemt i egenrom; kryssledd ikke delt på 2; klassifisering fra diagonal i stedet for egenverdier.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — SVD, dynamiske systemer og bevis *(prioritet: KJENNE — nivå 3, bredde og topp-poeng)*

#### Kapittel 7.1: Singulærverdidekomposisjon A=UΣVᵀ

- **id:** `mat1120-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat1120-6-1`
- **kapitteltype:** teori
- **description:** SVD A=UΣVᵀ bygget fra AᵀA: V fra ortonormale egenvektorer, singulærverdier σᵢ=√λᵢ synkende i Σ, uᵢ=(1/σᵢ)Avᵢ utvidet til ortonormal U — pluss max‖Ax‖=σ₁.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (spektralteorem, ortogonal diagonalisering), 4.2 (ortonormal basis).
- **Eksamensbelegg:** Sjanger K, **~30 %** (2019 O4b, 2022-u O3). Fasitens grep: regn $A^{T}A$; egenverdier + ortonormale egenvektorer (fra vedlegg) → $V$; $\sigma_i=\sqrt{\lambda_i}$ synkende → $\Sigma$; $\mathbf{u}_i=(1/\sigma_i)A\mathbf{v}_i$ for $\sigma_i>0$, utvid til ortonormal $U$; $A=U\Sigma V^{T}$; $\max\{\|A\mathbf{x}\|:\|\mathbf{x}\|=1\}=\sigma_1$ i $\mathbf{v}_1$. Prioritet: **kjenne** (topp-poeng).
- **Innholdskontrakt:** **Singulærverdier** $\sigma_i=\sqrt{\lambda_i}$ der $\lambda_i$ er egenverdiene til $A^{T}A$ (ordnet synkende); **SVD** $A=U\Sigma V^{T}$: $V=[\mathbf{v}_1\cdots\mathbf{v}_n]$ ortonormale egenvektorer for $A^{T}A$, $\Sigma$ har $\sigma_i$ på diagonalen (synkende), $U=[\mathbf{u}_1\cdots\mathbf{u}_m]$ med $\mathbf{u}_i=(1/\sigma_i)A\mathbf{v}_i$ for $\sigma_i>0$ utvidet til ortonormal basis; **rang** = antall $\sigma_i>0$; **$\max\{\|A\mathbf{x}\|:\|\mathbf{x}\|=1\}=\sigma_1$** oppnådd i $\mathbf{v}_1$ (egenvektoren til største egenverdi av $A^{T}A$); kort om lav-rang-tilnærming (kjennskap). Alt til aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn en ortogonal diagonalisering av $A^{T}A$, oppgi singulærverdiene til $A$ og en SVD $A=U\Sigma V^{T}$. Hva er $\max_{\|\mathbf{x}\|=1}\|A\mathbf{x}\|$?»
- **Typiske feil:** Singulærverdiene ikke synkende ordnet; glemmer $\sigma_i=\sqrt{\lambda_i}$ (bruker $\lambda_i$); feil $\mathbf{u}_i=(1/\sigma_i)A\mathbf{v}_i$ (glemmer $1/\sigma_i$); utvider ikke $U$ til full ortonormal basis; forveksler $\sigma_1$ og $\lambda_1$ i $\max\|A\mathbf{x}\|$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.2: Differensiallikningssystem x′=Ax og diskret dynamikk

- **id:** `mat1120-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-3-2`
- **kapitteltype:** teori
- **description:** Egenverdianvendelsen: løs x′=Ax med x(t)=Σcᵢvᵢe^{λᵢt} (koeffisienter fra Pc=x(0)), og analyser diskret dynamikk xₖ=Σcᵢλᵢᵏvᵢ (langtidsatferd, normbevaring når |λ|=1).
- **Forkunnskaper (kryssbok):** Kap. 3.2 (diagonalisering, egenvektorbasis). Eksponentialfunksjon/derivasjon fra *(MAT1110 — ikke bygget; aktiver lenke)* og [Derivasjon](/bok/r2/r2-3-1).
- **Eksamensbelegg:** Sjanger J, **~35 %** (kontinuerlig: 2018 O2c, 2019 O2b; via $[T]_{\mathcal{B}}$ 2021) + **~15 %** (diskret: 2020 O2b). Fasitens grep: **kontinuerlig** generell løsning $\mathbf{x}(t)=\sum c_i\mathbf{v}_ie^{\lambda_it}$ (krever egenvektorbasis), $c_i$ fra $P\mathbf{c}=\mathbf{x}(0)$; **diskret** dekomponér $\mathbf{x}_0$ i egenvektorbasis, $\mathbf{x}_k=\sum c_i\lambda_i^k\mathbf{v}_i$, bruk $|\lambda_i|$ til langtid/normbevaring. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Kontinuerlig system** $\mathbf{x}'=A\mathbf{x}$: generell løsning $\mathbf{x}(t)=\sum c_i\mathbf{v}_ie^{\lambda_it}$ når $A$ har egenvektorbasis; **begynnelsesverdier** $c_i$ løst fra $P\mathbf{c}=\mathbf{x}(0)$; stabilitet fra fortegn/realdel av $\lambda_i$ (kjennskap); **diskret system** $\mathbf{x}_{k+1}=A\mathbf{x}_k$: $\mathbf{x}_k=\sum c_i\lambda_i^k\mathbf{v}_i$, **langtidsatferd** styrt av største $|\lambda_i|$, **normbevaring** når $|\lambda_i|=1$ (2020: ortogonal/normbevarende gir konstant norm); kobling til $[T]_{\mathcal{B}}$-formuleringen (2021). Alt til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «Løs $\mathbf{x}'=A\mathbf{x}$ med $\mathbf{x}(0)=(1,0)^{T}$ når $A$ har egenverdier $-1,-3$ med gitte egenvektorer. Hva skjer når $t\to\infty$?»
- **Typiske feil:** Bruker $\lambda_i$ i stedet for $e^{\lambda_it}$ (kontinuerlig) eller $\lambda_i^k$ (diskret); feil koeffisienter (løser ikke $P\mathbf{c}=\mathbf{x}(0)$); glemmer at metoden krever egenvektorbasis (diagonaliserbar); feil langtidskonklusjon fra $|\lambda|$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 7.3: Kort teori og bevis: refleksjon, positiv definitthet, normbevaring, isomorfi

- **id:** `mat1120-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat1120-6-1`, `mat1120-2-6`
- **kapitteltype:** teori (metode + bevis)
- **description:** Bevishåndverket for MAT1120 — teoremnavning og forutsetningssjekk — anvendt på de gjenkjennelige bevisvariantene: Householder-refleksjon I−2vvᵀ ortogonal, ortogonal matrise normbevarende, posdef ⇒ invertibel, ikke-diagonaliserbarhet, isomorfi-kriteriet.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (ortogonale/symmetriske matriser), 2.6 (isomorfi), 3.2 (diagonaliserbarhet), 6.2 (posdef). Bevisføring: [Bevis og matematisk argumentasjon](/bok/r2/r2-6-6).
- **Eksamensbelegg:** Sjanger L, **~50 %** (som egen deloppgave eller innbakt del). Dokumenterte varianter: **Householder** $R=I-2\mathbf{v}\mathbf{v}^{T}$ ortogonal + speiling om hyperplanet $\mathbf{v}^{\perp}$ (2024 O5); **ortogonal matrise normbevarende** (2020 O4b); **posdef ⇒ invertibel og $B^{-1}$ posdef** (2020 O4c); **$T(f)=f'+f''$ lineær** (2021 O3a); **ikke-diagonaliserbarhet** via for lavt egenrom (2022-u O2b); **isomorfi-kriteriet** (2018 O4b). ⚠️ enkelte metodevalg = faglig standard. Prioritet: **kjenne** (topp-karakterskiller).
- **Innholdskontrakt:** **Bevismetodikk**: identifiser gitt vs. skal-vises; navngi teoremet/definisjonen som bærer hvert steg; sjekk forutsetningene; skill «⇒» og «⇔»; standardteknikker (transponert-triks $\mathbf{x}^{T}M\mathbf{x}=(\mathbf{x}^{T}M\mathbf{x})^{T}$, dimensjonstelling, spektral dekomposisjon). **Householder/refleksjon** $R=I-2\mathbf{v}\mathbf{v}^{T}$ (enhets-$\mathbf{v}$): symmetrisk ($R^{T}=R$), ortogonal ($R^{T}R=I$), $R^2=I$, egenverdier $\pm1$, geometrisk en speiling om hyperplanet $\mathbf{v}^{\perp}$; skill $\mathbf{v}\mathbf{v}^{T}$ (ytterprodukt, matrise) fra $\mathbf{v}^{T}\mathbf{v}$ (skalar). **Ortogonal matrise normbevarende** ($\|P\mathbf{x}\|=\|\mathbf{x}\|$ fra $P^{T}P=I$). **Posdef ⇒ invertibel og $B^{-1}$ posdef** (via $B=PDP^{T}$, egenverdier $1/\lambda_i>0$). **Linearitetsbevis** ($T(a\mathbf{u}+b\mathbf{v})=aT\mathbf{u}+bT\mathbf{v}$). **Ikke-diagonaliserbarhet** (geometrisk $<$ algebraisk). **Isomorfi-kriteriet** ($T$ isomorfi ⇔ $[T]_{\mathcal{B}}$ invertibel). Bevisene føres komplett som modeller med forutsetningssjekk.
- **Oppgavesjangre:** L. Mønstereksempel: «La $R=I-2\mathbf{v}\mathbf{v}^{T}$ for en enhetsvektor $\mathbf{v}$. Vis at $R$ er ortogonal, at $R^2=I$, og forklar geometrisk hva $R$ gjør.»
- **Typiske feil:** Regner på et tallesempel i stedet for generelt bevis; forveksler $\mathbf{v}\mathbf{v}^{T}$ (matrise) og $\mathbf{v}^{T}\mathbf{v}$ (skalar); glemmer transponert-trikset; bevis uten forutsetningssjekk/navngitt teorem; viser bare én vei i en «hvis og bare hvis».
- **Quiz: 14 · Flashcards: 28**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Føringsstandarden og vedleggsbruken: slik skriver du en fullt begrunnet MAT1120-besvarelse

- **id:** `mat1120-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–7
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: sitér vedlegget (ikke radreduser for hånd), begrunn ALT, navngi teoremene, Col A-basis fra original, riktig P_{C←B}-retning, ortonormale P, ikke-standard indreprodukt konsekvent, multiplisitet ved diagonaliserbarhet — samlet, med teoremnavn-banken du må kunne utenat.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene, poengfordelingen (10 deloppgaver à 10 p) og de sju offisielle løsningsforslagene: (i) «du må begrunne alle svar, og vise nok mellomregning» — ordrett instruks; (ii) **vedleggsbruk** — sitér RREF/`poly`/`eig`, radreduser aldri store matriser for hånd; (iii) **teoremer navngis** (spektralteoremet, diagonaliserbarhetskriteriet, dimensjonsteoremet, ortogonal dekomposisjon, Rayleigh Teorem 6/7 §7.3, isomorfi-kriteriet); (iv) føringsstandarden ($\operatorname{Col}A$-basis fra **original**, $P/D$ matchet, ortonormale kolonner i $P$ for ortogonal diagonalisering, kryssledd/2, $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, $\sigma_i$ synkende, **eksakte svar aldri desimal**); (v) **ikke-standard indreprodukt konsekvent**; (vi) **delpunkt-kjeding** (samme matrise/underrom gjenbrukt); (vii) **intet formelark** ⇒ teoremnavn-bank pugges. Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–L (én tabell: hva er tilstrekkelig begrunnelse); **teoremnavn-banken** (alle teoremer/definisjoner studenten må kunne navngi og bruke utenat siden det ikke er formelark); **sjekklisten før innlevering** (brukte du vedlegget? $\operatorname{Col}$-basis fra original? $P/D$ matchet? $P$ ortonormal der påkrevd? riktig indreprodukt overalt? $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning? kryssledd/2? diagonaliserbarhet begrunnet med multiplisitet? $\ker T$ oversatt tilbake til funksjoner? eksakte svar? delpunkt-koblinger utnyttet?); to kontrastpar «samme matematikk, ulik føring» (ett $\operatorname{Col}A$-eksempel med basis fra RREF vs. original; ett projeksjonseksempel med/uten ortogonal basis; ett diagonaliserbarhet med/uten multiplisitetsbegrunnelse); strategien for kjedede delpunkter (les hele hovedoppgaven, gjenbruk vedleggets RREF/egenvektorer på tvers av deler).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig $\operatorname{Col}A$-basis-tall, men taper uttelling. Pek på de to manglene (basis lest fra RREF i stedet for $A$; ingen vedleggssitering/mellomregning) og skriv om til full uttelling.»
- **Typiske feil:** Hele føringsfellekatalogen: radredusere for hånd i stedet for vedlegg, $\operatorname{Col}A$-basis fra RREF, $P/D$ feilmatchet, ikke-ortonormal $P$, feil indreprodukt, feil $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, kryssledd ikke delt på 2, diagonaliserbarhet uten multiplisitet, $\ker T$ ikke oversatt tilbake, desimaltilnærming, ubegrunnet tallsvar.
- **Quiz: 14 · Flashcards: 34** (teoremnavn-bank + føringsregler + vedleggsbruk — flashcard-gull for et fag uten formelark)

#### Kapittel 8.2: Øvingseksamen 1: 10 deloppgaver à 10 p — bred kjerne med vedlegg

- **id:** `mat1120-8-2` · **number:** 8.2 · **estimatedMinutes:** 240 · **prerequisites:** `mat1120-8-1`
- **kapitteltype:** øvingseksamen (skriftlig, med vedlegg)
- **description:** Komplett 4-timers sett med 10 deloppgaver à 10 p og eget vedlegg (RREF/poly/eig), kalibrert på den typiske eksamenen: Col/Nul-basis → Gram–Schmidt → projeksjon/minste kvadrater, egenverdier/diagonalisering, abstrakt vektorrom + [T]_B, symmetrisk → kvadratisk form.
- **Eksamensbelegg/miks:** Speiler den stabile malen (**4 timer, 10 deloppgaver à 10 p, RREF-/Matlab-vedlegg, 4–5 hovedoppgaver, «alle svar begrunnes»**), kalibrert på prognosen i analysens §7: **O1 (a–c)** $\operatorname{Col}/\operatorname{Nul}$-basis + rang fra RREF → ortogonal basis (Gram–Schmidt) → ortogonal projeksjon + avstand (sjanger A + B), kjedet på samme matrise → **O2 (a–b)** egenverdier/diagonaliserbarhet begrunnet med multiplisitet + $A^k$ (sjanger D + E) → **O3 (a–c)** abstrakt vektorrom ($\operatorname{P}_3$): underrom $W$ + basis → koordinater/overgangsmatrise → $[T]_{\mathcal{B}}$ for $T(p)=p'$ (sjanger H + I) → **O4 (a–b)** symmetrisk $A$ → ortogonal diagonalisering $A=PDP^{T}$ → kvadratisk form: klassifisering (sjanger F + G). Ti deloppgaver totalt à 10 p. **Eget vedlegg** (gjengitte RREF-er/`poly`/`eig` for settets matriser) som løsningen siterer. Alle oppgaver nyskrevne med pene tall. Løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 8.1-standarden, med `tip`-notat om tidsbudsjett (~24 min/deloppgave) og hvor begrunnelses-/føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: 10 deloppgaver à 10 p — signaturoppgave, minste kvadrater og SVD

- **id:** `mat1120-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `mat1120-8-2`
- **kapitteltype:** øvingseksamen (skriftlig, med vedlegg)
- **description:** Sett nummer to som vrir mot funksjonsrom-signaturoppgaven, minste kvadrater ved rangdefekt (affin), SVD og en kort refleksjonsbevis-del — så settene sammen dekker A–L.
- **Eksamensbelegg/miks:** Samme mal (4 t, 10 deloppgaver à 10 p, vedlegg), med **restsjangrene** (8.2 + 8.3 + 8.4 dekker A–L): **O1 (a–c)** $\operatorname{Col}/\operatorname{Nul}$-basis fra RREF → minste kvadrater via normallikningene + **affin løsning ved rangdefekt** → $\operatorname{proj}_W\mathbf{b}$ via projeksjonssnarveien (sjanger A + C) → **O2 (a–c)** **funksjonsrom** $V=\operatorname{Span}\{1,e^x\cos x,e^x\sin x\}$: vis basis → $[T]_{\mathcal{B}}$ for $T(f)=f'$ → $\ker(T-I)$ oversatt til funksjoner (sjanger H + I) → **O3 (a–b)** egenverdier/diagonaliserbarhet + $q(A)$ deler egenvektorer (sjanger D + E) → **O4 (a–b)** SVD $A=U\Sigma V^{T}$ + $\max\|A\mathbf{x}\|=\sigma_1$ (sjanger K, egenverdier til $A^{T}A$ fra vedlegg) → **O5** kort bevis: Householder $R=I-2\mathbf{v}\mathbf{v}^{T}$ ortogonal + geometrisk tolkning (sjanger L). Ti deloppgaver à 10 p, **eget vedlegg**. Alle nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per deloppgave, og `tip`-notat om at signaturoppgaven (O2) og bevis-/SVD-delene er topp-karakterskillere.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: 10 deloppgaver à 10 p — ikke-standard indreprodukt, kjeglesnitt og x′=Ax

- **id:** `mat1120-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `mat1120-8-3`
- **kapitteltype:** øvingseksamen (skriftlig, med vedlegg)
- **description:** Tredje sett kalibrert på den vanskeligste varianten: integral-indreprodukt gjennom hele signaturoppgaven, kjeglesnitt via variabelskifte, og differensiallikningssystemet x′=Ax — de skarpeste karakterskillerne samlet.
- **Eksamensbelegg/miks:** Samme mal (4 t, 10 deloppgaver à 10 p, vedlegg), kalibrert på de vanskeligste dokumenterte variantene: **O1 (a–c)** $\operatorname{Col}/\operatorname{Nul}$-basis fra RREF → Gram–Schmidt → projeksjon (sjanger A + B) → **O2 (a–c)** polynomrom $\operatorname{P}_2$ med **integral-indreprodukt** $\langle p,q\rangle=\int_{-1}^1 pq\,dt$: ortogonal basis (Gram–Schmidt i integralet) → projeksjon av en gitt funksjon → avstand (sjanger B + H, ikke-standard indreprodukt hele veien) → **O3 (a–b)** symmetrisk $A$ → **kjeglesnitt** via $\mathbf{x}=P\mathbf{y}$ (ellipse/hyperbel) + Rayleigh-maks (sjanger F + G) → **O4 (a–b)** $\mathbf{x}'=A\mathbf{x}$: generell løsning + begynnelsesverdi (sjanger J) → **O5** kort bevis: posdef ⇒ invertibel og $B^{-1}$ posdef (sjanger L). Ti deloppgaver à 10 p, **eget vedlegg**. `warning`-notat i løsningen: O2 er integral-indreprodukt — **alle** skalarprodukt og normer regnes med integralet. Løsningsforslag som A-besvarelse med tids-/vektingstips.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — de tre øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.4 | 18+20+18+16 = **72** | 26+26+20+6 = **78** |
| 2 | 2.1–2.7 | 20+18+18+18+20+18+18 = **130** | 28+26+22+22+26+24+8 = **156** |
| 3 | 3.1–3.4 | 20+20+18+16 = **74** | 28+28+20+6 = **82** |
| 4 | 4.1–4.3 | 20+18+16 = **54** | 28+24+8 = **60** |
| 5 | 5.1–5.3 | 18+20+16 = **54** | 26+26+8 = **60** |
| 6 | 6.1–6.4 | 18+18+16+16 = **68** | 26+22+22+6 = **76** |
| 7 | 7.1–7.3 | 18+16+14 = **48** | 22+20+28 = **70** |
| 8 | 8.1–8.4 | 14+5+5+5 = **29** | 34+0+0+0 = **34** |
| **Sum** | **33 kap.** | **539 ≥ 500 ✓** | **628 (mål 600–700) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (628, ikke ~510):** MAT1120 er et
**teorem- og definisjonsrikt fag uten utdelt formelark** — hele apparatet
(spektralteoremet, diagonaliserbarhetskriteriet, ortogonal dekomposisjon, Rayleigh
Teorem 6/7, isomorfi-kriteriet, SVD-oppskriften, de fire indreprodukt-typene,
underroms- og basisbevisene) må sitte utenat, så definisjoner, teoremnavn og
metode-oppskrifter er selve puggematerialet. De teoritunge delene bærer tettheten:
**Del 2 (signaturoppgaven — abstrakte vektorrom) alene har 156 flashcards og 130
quiz**, mer enn noen annen del, fordi det er MAT1120s 100 %-sikre og mest
begrepstunge oppgave. Del 3 (egenverdier) og Del 6 (symmetriske/kvadratiske former)
er de neste tyngste. Drillkapitlene holdes lave på flashcards (6–8) fordi deres verdi
er oppgaver, ikke kort; øvingseksamenene har 0 flashcards og 5 quiz hver. Kap. 8.1
(føring + teoremnavn-bank) har høyest flashcard-tetthet per kapittel (34), siden det
er den rene pugge-oppsummeringen for et fag uten formelark. Quiz-fordelingen speiler
eksamensvektene: **de fem 100 %-søylene (Del 1, 2, 3, 4, 5) bærer 384 av 539 quiz**;
nivå 2 (Del 6) 68; nivå 3 (Del 7) 48.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (8.1), poengfordeling, vedleggssitering og eksakte svar. Alt
langsvar med full begrunnelse. Legges som prøvekapitler (`mat1120-<del>-prove`,
chapterNumber `<del>.P`) etter plattformens mønster. Der en prøve krever en RREF /
`poly` / `eig`, gjengis et **vedlegg** som løsningen siterer (aldri manuell
radreduksjon av store matriser).

**Del 1 — Fundamentale underrom fra RREF**
1. Prøve 1.A (35 min): Vedleggslesning — pivoter, frie variabler, avhengighetsrelasjoner (kap. 1.1, sjanger A).
2. Prøve 1.B (40 min): $\operatorname{Col}/\operatorname{Nul}$-basis + rang + dimensjonsteoremet fra vedlegg (kap. 1.2, sjanger A).
3. Prøve 1.C (35 min): $\operatorname{Row}A$ + lineærkombinasjoner + $AB=O$-konstruksjon (kap. 1.3, sjanger A).
4. Prøve 1.D (45 min): Oppgave 1-simulering — $\operatorname{Col}/\operatorname{Nul}$/rang + $\mathbf{b}\in\operatorname{Col}A$ kjedet på én matrise fra vedlegg (kap. 1.1–1.4, sjanger A).

**Del 2 — Abstrakte vektorrom, koordinater og $[T]_{\mathcal{B}}$**
1. Prøve 2.A (40 min): Underrom + basis (uavhengighet + dimensjonsargument) i $\operatorname{P}_n$ (kap. 2.1–2.2, sjanger H).
2. Prøve 2.B (40 min): Koordinater $[\mathbf{x}]_{\mathcal{B}}$ + overgangsmatrise $P_{\mathcal{C}\leftarrow\mathcal{B}}$ (begge retninger) (kap. 2.3–2.4, sjanger I).
3. Prøve 2.C (40 min): $[T]_{\mathcal{B}}$ for derivasjons-/differensialoperator + isomorfi + $\ker T$ til funksjoner (kap. 2.5–2.6, sjanger I).
4. Prøve 2.D (45 min): Signaturoppgave-simulering — funksjonsrom: underrom → basis → $[T]_{\mathcal{B}}$ → $\ker T$ kjedet (kap. 2.1–2.7, sjanger H + I).

**Del 3 — Egenverdier og diagonalisering**
1. Prøve 3.A (35 min): Egenvektor-verifisering + egenverdier/egenrom fra vedlegg + multiplisitet (kap. 3.1, sjanger D).
2. Prøve 3.B (40 min): Diagonalisering $A=PDP^{-1}$ + begrunn diagonaliserbarhet (multiplisitet/snarvei) (kap. 3.2, sjanger D).
3. Prøve 3.C (35 min): Ikke-diagonaliserbar (for lite egenrom) + $A^k$/$q(A)$ med samme $P$ (kap. 3.2–3.3, sjanger D + E).
4. Prøve 3.D (45 min): Oppgave 2-simulering — egenverdikjeden på en gjenbrukt matrise fra vedlegg (kap. 3.1–3.4, sjanger D + E).

**Del 4 — Indreproduktrom, ortogonalitet og Gram–Schmidt**
1. Prøve 4.A (35 min): Indreprodukt (standard/vektet/integral/evaluering) + norm + ortogonalitet (kap. 4.1, sjanger B).
2. Prøve 4.B (40 min): Gram–Schmidt i $\mathbb{R}^n$ + ortonormalisering (kap. 4.2, sjanger B).
3. Prøve 4.C (40 min): Gram–Schmidt i **integral**-indreprodukt på $\operatorname{P}_n$ (kap. 4.2–4.3, sjanger B, ikke-standard).
4. Prøve 4.D (40 min): Indreprodukt-tverrsnitt — ortogonal basis i vektet OG evaluerings-indreprodukt (kap. 4.1–4.3, sjanger B).

**Del 5 — Ortogonal projeksjon og minste kvadrater**
1. Prøve 5.A (35 min): Ortogonal projeksjon + dekomposisjon $\mathbf{y}=\hat{\mathbf{y}}+\mathbf{z}$ + avstand + $W^{\perp}$ (kap. 5.1, sjanger B).
2. Prøve 5.B (40 min): Minste kvadrater — normallikninger + kobling $\operatorname{proj}_W\mathbf{b}=C\hat{\mathbf{x}}$ (kap. 5.2, sjanger C).
3. Prøve 5.C (40 min): Minste kvadrater ved rangdefekt — **affin** løsning + projeksjonssnarvei (kap. 5.2, sjanger C).
4. Prøve 5.D (45 min): Oppgave 1-hale-simulering — projeksjon + minste kvadrater kjedet på samme matrise (kap. 5.1–5.3, sjanger B + C).

**Del 6 — Symmetriske matriser og kvadratiske former**
1. Prøve 6.A (35 min): Spektralteoremet + ortogonal diagonalisering $A=PDP^{T}$ (normalisering + Gram–Schmidt i egenrom) (kap. 6.1, sjanger F).
2. Prøve 6.B (40 min): Kvadratisk form — symmetrisering (kryssledd/2) + definitthetsklassifisering (kap. 6.2, sjanger G).
3. Prøve 6.C (40 min): Rayleigh-maks (Teorem 6/7 §7.3) + kjeglesnitt via $\mathbf{x}=P\mathbf{y}$ (kap. 6.3, sjanger G).
4. Prøve 6.D (45 min): Oppgave 4-simulering — symmetrisk $A$ → ortogonal diagonalisering → kvadratisk form → Rayleigh kjedet (kap. 6.1–6.4, sjanger F + G).

**Del 7 — SVD, dynamiske systemer og bevis**
1. Prøve 7.A (40 min): SVD $A=U\Sigma V^{T}$ (fra $A^{T}A$) + $\max\|A\mathbf{x}\|=\sigma_1$ (kap. 7.1, sjanger K).
2. Prøve 7.B (35 min): $\mathbf{x}'=A\mathbf{x}$ generell løsning + begynnelsesverdi; diskret langtid/normbevaring (kap. 7.2, sjanger J).
3. Prøve 7.C (35 min): Bevis — Householder ortogonal + posdef ⇒ invertibel + isomorfi-kriteriet (kap. 7.3, sjanger L).
4. Prøve 7.D (40 min): Bredde-tverrsnitt — ett tema fra hvert av 7.1–7.3, full føring med teoremnavning (kap. 7.1–7.3, sjanger K + J + L).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Form den speiler | Miks (10 deloppgaver à 10 p, med vedlegg) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Typisk sett — bred kjerne | A+B(O1) + D+E(O2) + H+I(O3, polynomrom) + F+G(O4) |
| Øvingseksamen 2 (kap. 8.3) | Signatur + minste kvadrater + SVD | A+C(O1) + H+I(O2, funksjonsrom) + D+E(O3) + K(O4) + L(O5) |
| Øvingseksamen 3 (kap. 8.4) | Vanskeligste varianter | A+B(O1) + B+H(O2, integral-indreprodukt) + F+G(O3, kjeglesnitt) + J(O4) + L(O5) |

Til sammen dekker de tre settene samtlige sjangre A–L minst én gang, både
polynomrom- og funksjonsrom-varianten av signaturoppgaven, alle tre ikke-standard
indreprodukt (integral eksplisitt i 8.4, vektet/evaluering i temaprøve 4.D), og
alle tre bevis-arketypene (Householder, posdef, isomorfi). Alle tre har **eget
vedlegg** (RREF/`poly`/`eig`) som løsningen siterer — de trener eksplisitt
vedleggslesing, ikke manuell radreduksjon.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Det stabile formatet og vedlegget** — vurderingsformen (4-timers skriftlig
   skoleeksamen, 10 deloppgaver à 10 p, ingen flervalg, karakter A–F), vedleggsbruken
   (RREF/`poly`/`eig` — les, ikke radreduser) og hovedfunnet: formatet er
   usedvanlig stabilt, prognosen er sikker (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (Del 1 $\operatorname{Col}/\operatorname{Nul}$ fra RREF, **Del 2 abstrakt vektorrom
   — tyngdepunktet**, Del 3 egenverdier/diagonalisering, Del 4 Gram–Schmidt, Del 5
   projeksjon/minste kvadrater), **kunne** (Del 6 symmetriske/kvadratiske former,
   basisskifte, $W^{\perp}$), **kjenne** (Del 7 SVD, $\mathbf{x}'=A\mathbf{x}$,
   $A^k$/polynom, kort bevis) — med notatet om at hvert sett dekker de fem faste
   søylene, så bredde slår dybde-i-ett-tema.
3. **Sjangerguiden** — A–L med løsningsoppskriftene fra drillkapitlene (1.4, 2.7,
   3.4, 4.3, 5.3, 6.4) i kortform.
4. **Vedleggsguiden** — hvordan man leser en Matlab-`rref`/`poly`/`eig`-utskrift og
   et RREF-ark, hva pivotmønsteret/karakteristisk polynom/egenverdier betyr, og
   hvorfor manuell radreduksjon av store matriser er bortkastet tid (fra kap. 0.1 +
   1.1).
5. **Sensorreglene** — «alle svar begrunnes», sitér vedlegget, teoremnavning (uten
   formelark må de pugges), $\operatorname{Col}A$-basis fra original, $P/D$-matching,
   ortonormale kolonner i $P$, diagonaliserbarhet begrunnet med multiplisitet,
   $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, kryssledd delt på 2, ortogonal
   basis før projeksjon, indreproduktet konsekvent, eksakte svar, delpunkt-gjenbruk
   (fra kap. 8.1) + karakterskille-listen (bestått/midt/topp).
6. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet (standard
   prikkprodukt der indreproduktet er ikke-standard, feil $\operatorname{Col}A$-basis
   fra RREF, diagonaliserbarhet uten multiplisitet, projeksjon uten ortogonal basis,
   affin løsning glemt ved rangdefekt, ikke-normaliserte egenvektorer i $P$,
   radreduksjon for hånd, feil symmetrisering av $Q$, feil
   $P_{\mathcal{C}\leftarrow\mathcal{B}}$-retning, abstrakt vektorrom underbehandlet,
   $[T]_{\mathcal{B}}$-kolonner i feil rom, ubegrunnet svar), hver med henvisning til
   kapitlet som forebygger den.
7. **Teorem- og notasjonsliste i Lays notasjon** — apparatet fra
   innholdskontraktene (fundamentale underrom + dimensjonsteoremet; abstrakte
   vektorrom + koordinater + $P_{\mathcal{C}\leftarrow\mathcal{B}}$; $[T]_{\mathcal{B}}$
   + isomorfi-kriteriet; egenverdier + diagonalisering $A=PDP^{-1}$; indreprodukt
   (fire typer) + Gram–Schmidt; ortogonal projeksjon + dekomposisjon; minste
   kvadrater $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$; spektralteoremet $A=PDP^{T}$;
   kvadratiske former + definitthet + Rayleigh Teorem 6/7 §7.3; SVD $A=U\Sigma V^{T}$;
   $\mathbf{x}'=A\mathbf{x}$; bevistemaene) — med markering *utlede/kunne aktivt* vs.
   *kun bruke*, og en påminnelse om at **alt må kunnes utenat** (intet formelark,
   bare vedlegget).
8. **Studieløp** — semesterplan: Del 0 → Del 1 (inngangen, vedleggslesing til
   automatikk) → **Del 2 (bruk mest tid — signaturoppgaven og det største
   differensieringstemaet)** → Del 3 (egenverdier) → Del 4–5 (ortogonalitetsapparatet,
   inkludert ikke-standard indreprodukt) → Del 6 (karakterskillerne: spektralteorem/
   kvadratiske former) → Del 7 (SVD/anvendelser/bevis for toppkarakter) → temaprøvene
   → føringsstandarden (8.1) → de tre øvingseksamenene under tidspress (4 timer, med
   vedlegg). Notat: fordi determinant/invers/Cramer forutsettes fra MAT1100/MAT1110,
   bør en usikker student repetere de forkunnskapene FØR Del 1 (kap. 1.1 markerer
   hva som forutsettes).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat1120` med alle 33 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra
   §2-tabellen (del-nummer → seksjonstittel). **`number` SKAL være del-basert**
   («2.5», ALDRI lineær «14») — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser i innholdet bruker samme del-baserte form («kap. 2.5»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene og
   vedleggsbruken som resten refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (vedleggslesing +
   fundamentale underrom er inngangen) → **Del 2 (abstrakte vektorrom — den store
   signaturdelen; 2.4 krever 2.3, 2.6 krever 2.4+2.5)** → Del 3 (egenverdier; krever
   Del 1 $\operatorname{Nul}$).
4. **Ortogonalitetsapparatet**: Del 4 (indreprodukt/Gram–Schmidt; krever Del 2.1
   funksjonsrom) → Del 5 (projeksjon/minste kvadrater; 5.1 krever 4.2).
5. **Nivå 2 + topp-poeng**: Del 6 (spektralteorem/kvadratiske former; 6.1 krever
   3.2 + 4.2) → Del 7 (SVD/anvendelser/bevis; 7.1 krever 6.1, 7.3 krever 6.1 + 2.6).
6. **Del 8** til slutt (føring + de tre øvingseksamenene gjenbruker alt og må dekke
   A–L, begge signaturvarianter og alle tre indreprodukt). Temaprøvene (§4) legges
   som prøvekapitler (`mat1120-<del>-prove`, chapterNumber `<del>.P`) etter
   plattformens mønster, én per temadel 1–7 (28 stk).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 2 (7 kap.) er den største** —
hold den samlet hos én agent hvis mulig; ved splitting skal **begge agentene lese
HELE Del 2s kontrakter** (2.1–2.7), og delen flagges for konsistenssjekk (jf.
byggekontrakt-regelen om delte del-er). Del 7 (bevis i 7.3) bygges av en agent som
også leser 6.1, 6.2, 2.6 og 3.2 (bevisene refererer dit). Øvingseksamenene (8.2–8.4)
bygges av én agent som leser HELE skjelettet (de gjenbruker alle sjangre og trenger
egne vedlegg).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + Lays notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent Lay-notasjon: $\operatorname{Nul}A$,
      $\operatorname{Col}A$, $\operatorname{Row}A$, $\operatorname{rang}A$,
      $\operatorname{Span}\{\dots\}$, $[\mathbf{x}]_{\mathcal{B}}$,
      $P_{\mathcal{C}\leftarrow\mathcal{B}}$, $[T]_{\mathcal{B}}$,
      $\operatorname{proj}_W\mathbf{y}$, $W^{\perp}$, $A=PDP^{-1}$, **$A=PDP^{T}$**
      (ikke $QDQ^{T}$), $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$,
      $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$, $A=U\Sigma V^{T}$,
      $\det(A-\lambda I)=0$.
- [ ] **Notasjonskonsistens (grep over alle mat1120-filer)**: $\operatorname{Col}A$-basis
      fra **original** (ikke RREF); **eksakte svar** (aldri desimal); egenvektorer
      normalisert der $P$ skal være ortogonal; kryssledd delt på 2 i kvadratiske
      former; $\sigma_i$ synkende i $\Sigma$; teoremer navngitt; $A=PDP^{T}$-konvensjon
      (ikke bland inn $Q$).
- [ ] **Vedleggsbruk i ALLE RREF-/egenverdi-baserte løsningsforslag**: hvert slikt
      kapittel/prøve/øvingseksamen har et **eksplisitt vedlegg** (gjengitt
      RREF/`poly`/`eig`) som løsningen **siterer** («Fra vedlegget ser vi …») —
      ingen manuell radreduksjon av store matriser. Dette er et byggekrav, ikke en
      anbefaling.
- [ ] **Ikke-standard indreprodukt-drill**: kap. 4.1–4.3, 5.1–5.3 og øvingseksamen
      8.4 (integral) bruker **det oppgitte** indreproduktet konsekvent i alle
      skalarprodukt/normer; hver berørt `warning` advarer mot standard-prikkprodukt-fellen.
- [ ] **Føringsstandard i ALLE løsningsforslag**: sitér vedlegget;
      $\operatorname{Col}A$-basis fra original; $P/D$ matchet søyle for søyle; $P$
      ortonormal der påkrevd; diagonaliserbarhet begrunnet med multiplisitet/snarvei;
      $P_{\mathcal{C}\leftarrow\mathcal{B}}$ riktig retning; kryssledd/2; ortogonal
      basis før projeksjon; $\ker T$ oversatt tilbake til funksjoner; teoremnavn der
      argumentet bæres; verbal konklusjonssetning; eksakt sluttsvar markert.
      Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Format-ærlighet**: kap. 0.1 sier eksplisitt at formatet er stabilt (10
      deloppgaver à 10 p, 4 t, vedlegg), at vedleggsformatet skiftet fra
      Matlab-utskrift til RREF-ark (H2024) og bør verifiseres mot nyeste sett, at
      determinant/invers/Cramer forutsettes (ikke testet), og at H2020 var
      hjemmeeksamen (avvik). Metodevalg uten dokumentert fasit merkes «⚠️ metode =
      faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — `bi-okonomi`/R1/R2/1T lenket og verifisert; **MAT1110
      som klartekst med aktiveringsmarkør**), `collapsible` Symbol- og formelliste
      per delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver; kap. 7.3 fører
      komplette modellbevis med forutsetningssjekk.
- [ ] **Quiz-sum ≥ 539 og flashcard-sum ≥ 628** per kvotetabellen i
      Summeringskontrollen (kontrollsummér). Flashcards KUN fra toppnivå
      `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (8.2–8.4) som
      sammen dekker A–L, begge signaturvarianter og alle tre ikke-standard
      indreprodukt.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser og kontekster;
      ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn); Lay refereres, aldri siteres i lengde.
- [ ] **Navigasjon**: `mat1120` inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Oslo (UiO)**, navn = «MAT1120 Lineær algebra».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
