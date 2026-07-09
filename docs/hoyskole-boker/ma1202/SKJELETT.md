# Bokskjelett: MA1202 Lineær algebra med anvendelser (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA1202/MA6202-arkiv 2004–2025: ~22 sett, hvorav 2018–2025 lest grundig med
> ~16 løsningsforslag, eldre skummet med kvantitativ temaopptelling).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`, variant **abstrakt-/bevisfag**) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
> Format-forbilder: `../tma4110/SKJELETT.md` (samme lineær-algebra-kjerne, samme
> institusjon) og `../ma0301/SKJELETT.md` (samme NTNU-frisvars-/bevisfag-mal med egen
> bevisferdighets-behandling og «alt begrunnes»-føringskrav).
>
> **KRITISK — EMNEIDENTITET OG ARBEIDSDELING MOT SØSTEREMNET MA1201 (les før alt annet):**
> MA1202 er NTNUs **oppfølger** etter grunnkurset MA1201. Der `ma1201`-boka eier den
> **konkrete** lineær-algebra-kjernen (system+rang, determinant, vektorgeometri i $\mathbb R^3$,
> kryssprodukt/volum) og geometriprofilen (**kjeglesnitt/hovedaksetransformasjon** — MA1201s
> signaturoppgave), eier DENNE boka det **abstrakte og anvendte** laget: **generelle vektorrom
> over vilkårlig kropp**, **lineærtransformasjoner/operatorer** og deres matrise relativt en
> basis, **egenverdier/diagonalisering** som maskineri, **indreproduktrom + Gram–Schmidt**,
> **spesielle operatorer og spektralteoremene** (ortogonal/symmetrisk, unitær/normal,
> selvadjungert, adjungert $T^*$), **Cayley–Hamilton**, og et fast **anvendelseslag**
> (Markov-kjeder, systemer av differensiallikninger via diagonalisering, minste kvadrater).
> Signaturen som skiller MA1202 fra MA1201/MAT1120/TMA4110 er den **abstrakte operator-vekten**:
> rommene er polynomrom $\operatorname{P}_n$, matriserom $M_{m\times n}$ og funksjonsrom;
> operatorene er derivasjon $D$, kommutator $T(A)=EA-AE$, similartransformasjon $T(A)=S^{-1}AS$
> og adjungert. Grunnleggende system-/determinantmekanikk forutsettes kjent (fra MA1201) og
> repeteres kompakt, ikke drilles på nytt — DENNE boka bruker den, den lærer den ikke fra bunnen.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1202` |
| Tittel | **MA1202 Lineær algebra med anvendelser (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Kodetilhørighet | Deles med **MA6202** (videreutdanningsvariant, samme sett; engelsk MA6202-versjon finnes). Aktiv (vår), 7,5 studiepoeng. Oppfølger etter **MA1201**. |
| Arketype | Regnefag (variant: **abstrakt-/bevisfag** — regne-, utlednings- og bevisorientert; abstrakte operatorrom; egen bevis-drill; «alle svar begrunnes») |
| Antall kapitler | **35** (1 eksamenskart + 28 tema/drill + 6 eksamenstrening/bevis) + 10 prøvekapitler |
| Estimert totaltid | **~2 010 min ≈ 34 timer** |
| Quiz totalt | **512** (krav ≥500) |
| Flashcards totalt | **546** (krav ≥500; sikt 540–580 — definisjons-, teorem- og bevisapparat-rikt abstrakt fag; kode D-kalkulatoren redder deg ikke) |

**Pitch (ett avsnitt):** MA1202 er NTNUs **oppfølger** i lineær algebra — der grunnkurset
(MA1201) regner på konkrete matriser i $\mathbb R^n$, løftes du her opp i **abstrakte
vektorrom over vilkårlig kropp**, med **operatorer** på polynomrom, matriserom og funksjonsrom.
Emnet har ett soleklart nav: **diagonaliserings-maskineriet** (finn $P$ med $P^{-1}AP=D$) står
direkte i ~83 % av settene og *driver dessuten* de faste anvendelsene — **systemer av
differensiallikninger** ($\mathbf y'=A\mathbf y$ via avkobling $\mathbf z=P^{-1}\mathbf y$, ~50 %),
**Markov-kjeder** (stabil tilstandsvektor = egenvektor for $\lambda=1$, ~58 %) og **matrisepotens**.
Den andre bærebjelken er **indreprodukt + Gram–Schmidt** (~75 %) koblet til **spektralteoremene**
(~67 %): symmetrisk ⇒ ortogonalt diagonaliserbar over $\mathbb R$, normal ⇒ unitært diagonaliserbar
over $\mathbb C$. Emnet er **bevis- og begrunnelsestungt** — «Grunngi alle svarene dine» / «Alle svar
må begrunnes»; en stor andel deloppgaver er «Vis at …», «Forklar hvorfor …», «Avgjør om …», og et
riktig sluttsvar uten resonnement gir lite. De ferskeste settene (2023–2025) følger en **svært stabil
6–7-oppgavers mal** (diagonalisering+diff-likninger → underrom-sjekk i $M_{2\times2}(\mathbb R)$ →
basis/dimensjon eller Gram–Schmidt → lineærtransformasjon → spektralteorem/Cayley–Hamilton → abstrakt
egenverdibevis → åpen bevisoppgave), som er den sterkeste prognosekilden vi har. Eksamen er en
**4-timers skriftlig skoleeksamen**, karakter A–F, kalibrert mot **hjelpemiddelkode D** (enkel
kalkulator uten matriseregning — alt gjøres for hånd).

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning til at tenkemåten framgår.** Ordrett
   NTNU-standardinstruks («Grunngi alle svarene dine» / «Alle svar må begrunnes. Ta med nok
   mellomregning»). Riktig sluttsvar uten føring gir lite — emnet er i sin natur bevisorientert.
   Hvert løsningsforslag skrives som **A-besvarelse**: mellomregning ledd for ledd, **navngitt teorem**
   der argumentet bæres (spektralteoremet, fundamentalteoremet for lineærtransformasjoner, Gram–Schmidt,
   Cayley–Hamilton, «regulær ⇒ entydig stabil tilstandsvektor»), verbal konklusjonssetning, sluttsvar markert.

2. **Egenverdibevis føres FRA DEFINISJONEN $A\mathbf x=\lambda\mathbf x$**, ikke fra en påstand om
   diagonaliserbarhet eller fra en spesifikk matriserepresentasjon. De abstrakte operatorbevisene
   (nilpotent, idempotent, sum-av-egenvektorer, similartransformasjon) er en selvstendig
   karakterskiller og krever presise definisjoner (dokumentert typisk feil §5.10).

3. **Teoremer skal navngis og forutsetninger sjekkes.** Ved «ortogonalt diagonaliserbar» må
   **symmetrien** uttales; ved «unitært diagonaliserbar» må **normaliteten** $AA^*=A^*A$ verifiseres.
   Fundamentalteoremet, Gram–Schmidt, Cayley–Hamilton og «regulær ⇒ entydig stabil tilstand» navngis
   der de bæres.

4. **Definisjoner der definisjonen etterspørres.** **Underrom** vises med de **tre** kravene
   ($\mathbf 0\in W$, lukket under $+$, lukket under skalar); **indreprodukt** med de tre/fire
   aksiomene (lineær i første variabel, (konjugat)symmetrisk, positivt definit); egenverdi fra
   $A\mathbf x=\lambda\mathbf x$.

5. **Moteksempel er fullgodt for negative svar — og forventes.** «Er $W$ et underrom?» besvares «nei»
   med ett konkret, **verifisert** brudd (typisk lukkethet under $+$, eller at $\mathbf 0$ mangler).
   Én forekomst beviser aldri en allkvantifisert påstand.

6. **Flere riktige svar honoreres.** Ved diagonalisering er $P$ ikke entydig (fasiten noterer «her
   finnes flere riktige svar»); åpne konstruksjonsoppgaver («gi en nilpotent operator $\ne0$») godtar
   ethvert korrekt, verifisert eksempel. Boka sier dette der det gjelder.

7. **Emnets notasjon er bokstandard** (fra eksamenssettene): koordinatvektor $[\mathbf v]_\beta$;
   matrise av operator $[T]_\beta$ og $[T]_{\gamma,\beta}$ mellom to basiser; diagonalisering $P^{-1}AP=D$;
   overgangsmatrise $M$ med $\mathbf x_{n+1}=M\mathbf x_n$ (**kolonnesum 1**), stabil tilstandsvektor i
   nullrommet til $(I-M)$; indreprodukt $\langle\cdot,\cdot\rangle$; ortogonalt komplement $W^\perp$;
   adjungert $T^*$; konjugert transponert $A^*$; derivasjonsoperator $D$; kommutator $T(A)=EA-AE$.

8. **Eksakte svar** (heltall, brøk, $\sqrt3$, $e^{\lambda t}$, $\tfrac{\pi}{4}$), aldri desimaltilnærming;
   kode D-kalkulatoren kan uansett ikke matriseregning. Et urent mellomsvar signaliserer regnefeil.

9. **Diagonaliserbarhet begrunnes ALLTID.** Ikke påstå — vis enten (a) $n$ distinkte egenverdier,
   (b) symmetrisk ⇒ ortogonalt diagonaliserbar (spektralteoremet), eller (c) at hvert egenroms
   dimensjon = algebraisk multiplisitet. For **ikke**-diagonaliserbar (nilpotent $D$, defekte matriser):
   vis eksplisitt at et egenrom har for lav dimensjon (geometrisk < algebraisk).

10. **Ortogonal vs. unitær diagonalisering skilles strengt.** Bruk «symmetrisk» **kun** over $\mathbb R$;
    over $\mathbb C$ kreves «normal» ($AA^*=A^*A$). Glem aldri kompleks konjugasjon i det komplekse
    indreproduktet/adjungerte (dokumentert felle §5.6).

11. **Bevis-sjangeren er obligatorisk (settets sluttoppgaver 6–7, ~54 %).** Nesten hvert sett
    avslutter med korte «vis at …». Boka har egen bevis-drill (kap. 11.2) og forankrer bevistemaene
    i sine kapitler (nilpotens/inverterbarhet i 2.2 og 5.1, sum-av-egenvektorer i 5.1, similartransformasjon
    i 4.1/8.1, spektral-argumenter i 6.3). Bevis føres komplett med forutsetningssjekk og navngitt teorem.

12. **Aktiveringsmarkør for ubygde/relaterte NTNU-emner.** **MA1201** (forkunnskapsemnet) er bygget
    som bok — lenk normalt til eksisterende MA1201-kapitler for konkret system-/determinant-/
    vektorgeometri-repetisjon. Bygde VGS-bøker (R1, R2, 1T, S2) lenkes for elementære forkunnskaper
    (vektorer, komplekse tall R2, derivasjon/diff-likninger S2). **Ubygde** emner skrives som klartekst
    med markøren *(NTNU-emne, ikke bygget som bok ennå; aktiver `/bok/<kode>/<id>`-lenke når den finnes)*.
    Lenk kun til kapitler som finnes.

13. **Ærlighet om format og arkiv.** (a) Malen 2023–2025 er **svært stabil** (6–7 korte, skarpt
    avgrensede oppgaver, én kjerneidé hver) — prognosen er sikker. (b) **Koronaårene 2020–2021 avvek**
    (hjelpemiddelkode A, hjemme-/digital eksamen), men oppgavesjangrene forble bevis- og
    forståelsesorienterte — normalårene bærer prognosen, og boka kalibreres mot **kode D**. (c)
    **Cayley–Hamilton og adjungert-oppgaver er i vekst** (Cayley–Hamilton først i 2024–2025-malen —
    merk `(verifiser)`; adjungert i 2020, 2020-kont, 2025). (d) **Spillteori** (1 forekomst, V2014) og
    **fraktaler** (0 forekomster) står i emnebeskrivelsen men har ingen/nesten ingen arkivbelegg —
    dekkes kort som beredskap, tydelig merket lav/ingen frekvens; eksamenstreningen legges IKKE hit.
    (e) Der et metodevalg er faglig standard snarere enn ordrett dokumentert, merkes det «⚠️ metode = faglig standard».

### 1.6 Hjelpemiddel-kalibrering og pensumforankring (skal gjengis i Del 0)

- **Hjelpemiddel-kalibrering (kode D):** Arkivet har tre regimer — kode D (enkel kalkulator, 2004–2019
  og 2022–), kode A (alle hjelpemidler, korona 2020–2021), i tidlige år også kode C (Rottmann). Boka
  trenes mot **kode D**: hele apparatet (egenverdiprosedyren, spektralteoremene, indreprodukt-aksiomene,
  Gram–Schmidt-formelen, Markov-oppskriften, avkoblingen $\mathbf z=P^{-1}\mathbf y$, Cayley–Hamilton)
  må sitte utenat — kalkulatoren kan verken matriseregning eller egenverdier. Egen «utenat»-note der
  det trengs; samlet utenat-bank i kap. 11.1.
- **Pensumforankring:** Eldre løsningsforslag (t.o.m. ~2013) refererer **Anton & Rorres**, *Elementary
  Linear Algebra with Applications*; 2020-forslaget refererer **Friedberg, Insel & Spence**, *Linear
  Algebra* (4. utg.) — pensumboken kan ha skiftet i perioden *(verifiser mot gjeldende emneside)*.
  Refereres (forfatter/verk/begrep), aldri sitert i lengde.
- **Emnebeskrevet, men lav/ingen arkivfrekvens:** Fourier-tilnærming (2009, 2011), Leontief-økonomi
  (2016, 2018), Lagrange-interpolasjon (2019), kvadratisk form/ellipsoide (2009), spillteori (kun 2014),
  fraktaler (0). Dekkes for fullstendighet i Del 10, merket lav/ingen frekvens.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), **aldri frekvens**: abstrakte vektorrom
(underrom/basis/dimensjon) er språket; lineærtransformasjoner + fundamentalteoremet kobler
operatorer til matriser; egenverdier/diagonalisering er tyngdepunktet og navet; anvendelseslaget
(Markov, diff-likninger, matrisepotens, Cayley–Hamilton) bygger på diagonalisering; indreprodukt/
ortogonalitet/Gram–Schmidt er den geometriske søylen; spesielle operatorer + spektralteoremene
kulminerer der; de abstrakte operatorbevisene og eksamenstreningen er sist. **Frekvensen styrer
omfanget**, ikke rekkefølgen: ~67–83 %-temaer (diagonalisering, indreprodukt/Gram–Schmidt,
spektralteorem, underrom, lineærtransformasjon) får teori + eget drillkapittel; ~25–54 %-temaer
får ett–to kompakte kapitler; emnebeskrevne lav-frekvente anvendelser samles i én kompakt del.
Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og kode D | 1 | Prioriteringsverktøyet + malen 2023–2025 + sensorregler + kodeforbehold; kjerne i studieguiden. |
| 1 | Abstrakte vektorrom, underrom, basis og dimensjon | 4 | Basis/dim ~100 % (universell byggekloss) + underrom-sjekk i abstrakt rom ~50 % (fast oppg 2) → **perfekt** → teori + drill. |
| 2 | Lineærtransformasjoner og fundamentalteoremet | 3 | Lineærtransf./matrise rel. basis ~71 % + fundamentalteoremet ~54 % → **perfekt** → teori + drill. |
| 3 | Egenverdier, egenvektorer og diagonalisering | 4 | Diagonalisering ~83 % (navet, driver alt) → **perfekt** → teori + drill (bokas tyngdepunkt). |
| 4 | Anvendelser av diagonalisering: Markov, diff-likninger og matrisepotens | 4 | Markov ~58 % + diff-likningssystem ~50 % (fast oppg 1) + matrisepotens/Cayley–Hamilton ~29 %/~8 % → **perfekt/kunne** → teori + drill. |
| 5 | Indreproduktrom, Gram–Schmidt og ortogonalitet | 4 | Indreprodukt/Gram–Schmidt ~75 % + ortogonal projeksjon/$W^\perp$ ~38 % → **perfekt** → teori + drill. |
| 6 | Spesielle operatorer og spektralteoremene | 3 | Spesielle operatorer + spektralteorem ~67 % + adjungert $T^*$ ~21 % (voksende) → **perfekt** → teori + drill. |
| 7 | Abstrakte operatorer: derivasjon og kommutator | 2 | Derivasjonsoperator ~38 % + kommutator/similartransformasjon ~21 % → kunne → kompakt teori. |
| 8 | Minste kvadraters metode | 1 | Minste kvadrater ~25 % (fast 2019–2020) → kunne → ett drill-orientert kapittel. |
| 9 | Determinant, rang og nullitet (repetisjon fra MA1201) | 1 | Determinant/rang som egen oppgave ~46 % (fallende) → kunne/repetisjon → ett kompakt kapittel. |
| 10 | Emnebeskrevne anvendelser (lav frekvens) | 1 | Fourier/Leontief/Lagrange/kvadratisk form/spillteori/fraktaler ~4–8 % → **kjenne** → ett samlekapittel. |
| 11 | Eksamenstrening og bevis | 6 | Føringsstandard/utenat + **bevis-drill** (sluttoppgaver ~54 %) + 4 komplette øvingseksamener (kode D, 6–7-oppgavers mal). |

**Avvik fra DNA-malen (dokumentert):**

1. **35 tema-/treningskapitler — over DNA-taket (20–35, akkurat på grensen).** Begrunnet i
   PRODUKSJONSLOYPE-lærdommen «≥500 er et gulv»: MA1202 er et **abstrakt, definisjons- og
   bevisapparat-rikt** fag der diagonaliserings-navet, indreprodukt/spektral-søylen, underrom-
   sjekken og de abstrakte operatorbevisene hver krever full dekning. Flashcard-tettheten er
   bevisst moderat-høy (546) fordi kode D krever at hele apparatet pugges.

2. **Anvendelseslaget får en egen del (Del 4), plassert rett etter diagonalisering (Del 3).**
   Diff-likningssystem (fast oppg 1) og Markov *er* diagonalisering i innpakning — de får plass
   som anvendelser, ikke som selvstendige teoribolker, men er nivå 1 og drilles.

3. **Grunnleggende system-/determinant-/vektorgeometri-mekanikk er REPETISJON (Del 9), ikke
   grunnopplæring.** MA1202 forutsetter MA1201; determinant/rang/nullitet testes fortsatt som egen
   oppgave (~46 %, fallende), så det beholdes som ett kompakt repetisjonskapittel med kryssbok-lenker
   til MA1201 — boka bruker mekanikken, den lærer den ikke fra bunnen. **Dette er hovedskillet mot
   `ma1201`-boka**, som drillet system/determinant/kryssprodukt som egne perfekt-deler.

4. **Egen bevis-drill (kap. 11.2).** Fordi settets sluttoppgaver (6–7) så godt som alltid er korte
   «vis at …» (~54 %), får bevis-sjangeren et eget drillkapittel i tillegg til at bevistemaene
   forankres i sine fagkapitler. Bevisferdigheten er en selvstendig topp-karakterskiller.

5. **Fire øvingseksamener (11.3–11.6), ikke tre.** Malen 2023–2025 er så stabil og bred (6–7 oppgaver
   som sveiper hele pensum) at fire komplette sett trengs for å dekke variantene (Markov vs. diff-
   likninger som oppg 1; matriserom vs. funksjonsrom som oppg 2; spektralteorem vs. Cayley–Hamilton
   som oppg 5).

6. **Emnebeskrevne lav-frekvente anvendelser samles i ett kjenne-kapittel (Del 10).** Fourier-
   tilnærming, Leontief, Lagrange-interpolasjon, kvadratisk form, spillteori og fraktaler har hver
   1 eller 0 arkivforekomster men står i emnebeskrivelsen — dekkes med standardfremstilling, tydelig
   merket lav/ingen frekvens; eksamenstreningen legges ikke hit.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til oppgavetype-katalogen
i analysen §3, gjengitt i bokas Del 0: **A** diagonalisering + system av differensiallikninger,
**B** Markov-kjede/overgangsmatrise, **C** underrom-sjekk i abstrakt rom, **D** basis/dimensjon/
koordinatvektorer, **E** indreproduktrom + Gram–Schmidt, **F** ortogonal projeksjon/ortogonalt
komplement, **G** lineærtransformasjon (verifikasjon, matrise rel. basis, bestem $T(\mathbf x)$),
**H** fundamentalteoremet for lineærtransformasjoner, **I** spesielle operatorer + spektralteoremene,
**J** derivasjonsoperator på polynomrom, **K** Cayley–Hamilton, **L** abstrakte egenverdi-/
inverterbarhetsbevis (settets sluttoppgave), **M** minste kvadraters metode, **N** kommutator/
similartransformasjon-operatorer, **O** adjungert operator $T^*$. Prioritetsklasser: **perfekt**
(nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Kryssbok-forkunnskaper (verifiser id-ene finnes før lenking):** MA1201-boka (`ma1201`) er
primær-ankeret for konkret lineær algebra (system+rang, determinant, egenverdier på matriseform,
vektorgeometri). VGS-bøker: **R2** (vektorer i $\mathbb R^3$, komplekse tall, diff-likninger på S2-nivå),
**R1** (polynomer, bevisteknikker), **1T** (mengdelære, argumentasjon). Ubygde NTNU-emner skrives som
klartekst med aktiveringsmarkør (§1.5 punkt 12).

---

### Del 0 — Eksamenskartet, føringsstandarden og kode D

#### Kapittel 0.1: Eksamenskartet: 6–7-oppgavers malen, diagonaliserings-navet og «alt begrunnes»

- **id:** `ma1202-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MA1202: den stabile 4-timers eksamenen med 6–7 korte oppgaver etter malen 2023–2025, diagonaliserings-navet som driver halve settet, indreprodukt/spektral-søylen, de faste anvendelsene (Markov, diff-likninger), sensorreglene («alt begrunnes», egenverdibevis fra definisjonen), kodeforbeholdet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (~22 sett 2004–2025, ~16 løsningsforslag). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen** (09:00–13:00), karakter A–F, **6–7 korte, skarpt avgrensede oppgaver** (én kjerneidé hver) i 2023–2025-malen, fullt begrunnet langsvar der *alle svar begrunnes*; fra ~2018 den faste hjelpe-instruksen «du kan bruke resultater fra tidligere deloppgaver selv om du ikke har løst dem» og «første oppgave er ikke nødvendigvis den letteste»; (ii) **malstrukturen 2023–2025** (prognosemal): O1 diagonalisering + diff-likningssystem *eller* Markov med stabil tilstand; O2 underrom-sjekk i $M_{2\times2}(\mathbb R)$ eller funksjonsrom (én ja, én nei); O3 basis/dimensjon/koordinatvektorer *eller* Gram–Schmidt; O4 lineærtransformasjon (bestem $f(\mathbf x)$ / injektiv-surjektiv via fundamentalteoremet); O5 spektralteorem-klassifisering (ortogonalt vs. unitært diagonaliserbar, gjerne med parametre) *eller* Cayley–Hamilton; O6 abstrakt egenverdi-/inverterbarhetsbevis (nilpotent-typen); O7 åpen bevisoppgave; (iii) **temafrekvens-tabellen** (fra analysens §2: basis/dim ~100 %, diagonalisering ~83 %, indreprodukt/Gram–Schmidt ~75 %, lineærtransformasjon ~71 %, spektralteorem/spesielle operatorer ~67 %, Markov ~58 %, fundamentalteoremet ~54 %, abstrakte egenverdibevis ~54 %, underrom-sjekk ~50 %, diff-likningssystem ~50 %, determinant/rang ~46 %, derivasjonsoperator ~38 %, ortogonal projeksjon/$W^\perp$ ~38 %, VS-aksiomer ~29 %, minste kvadrater ~25 %, matrisepotens ~29 %, kommutator ~21 %, adjungert ~21 %, Cayley–Hamilton ~8 %); (iv) **diagonaliserings-navet**: regner man alt som «bruker diagonalisering» (diff-likninger, Markov, matrisepotens) er det >90 % — dette maskineriet må være helt automatisk; (v) **kodeforbeholdet** (§1.6 — kode D normalt, kode A korona; boka trenes mot D, alt utenat; pensumbok Anton&Rorres → Friedberg, verifiser); (vi) **karakterskillene** (bestått ≈ mekanikken: finn egenverdier/egenvektorer og $P$, sett opp overgangsmatrise + stabil tilstand, kjør Gram–Schmidt, les av dimensjoner; midt ≈ + koblingen diagonalisering→diff-likningssystem, indreprodukt-aksiomene, spektralteorem-klassifisering, fundamentalteoremet på inj./surj., underrom med moteksempel; topp ≈ rene abstrakte bevis med presise definisjoner, entydig ortogonal dekomponering + nærmeste-vektor (Pythagoras), parameter-varianten av spektralteoremet, deloppgavekoblingene, det uendeligdimensjonale forbeholdet for adjungert).
- **Innholdskontrakt:** Sjangerkatalogen A–O presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste eksamen** (6–7 oppgaver, 4 t, kode D) etter malen over. **Lesestrategi**: Del 1 (vektorrom-språket) er inngangen, **Del 3 (diagonalisering) er navet — bruk mest tid**, Del 4 er anvendelseslaget som følger av det, Del 5–6 er indreprodukt/spektral-søylen, Del 11 løfter føring og bevis. **Arbeidsdelingen mot MA1201** forklares: konkret system-/determinantmekanikk forutsettes kjent (repeteres i Del 9), denne boka eier det abstrakte og anvendte.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en utenat-plan for det kode D krever (egenverdiprosedyren, spektralteoremene, Gram–Schmidt, avkoblingen $\mathbf z=P^{-1}\mathbf y$, Markov-oppskriften)»; «hvilke seks–sju oppgaver er nesten garantert i 2023–2025-malen, og hvordan fordeler du 4 timer?»; «hvorfor gir et riktig sluttsvar uten begrunnelse lite her — og hvordan ser et fullt uttellende egenverdibevis ut?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere diagonaliserings-navet; undervurdere at ALT må begrunnes (bart svar gir lite); glemme at diagonaliserbarhet må begrunnes; hoppe over bevis-treningen (sluttoppgaver ~54 %); regne med kalkulator-refleks som ikke finnes under kode D; forveksle MA1202 med MA1201 (konkret regning) — dette emnet er abstrakt/operator-tungt.
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog A–O, malen 2023–2025, sensorregler, kodeforbehold, notasjonskart, arbeidsdeling MA1201/MA1202)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Abstrakte vektorrom, underrom, basis og dimensjon *(prioritet: PERFEKT — basis/dim ~100 % byggekloss, underrom-sjekk i abstrakt rom ~50 % fast oppg 2)*

#### Kapittel 1.1: Vektorrom over vilkårlig kropp: aksiomer, $\operatorname{P}_n$, matriserom og funksjonsrom

- **id:** `ma1202-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Løftet fra ℝⁿ til abstrakte vektorrom over vilkårlig kropp: de åtte aksiomene, unikhet av 0 og additiv invers, og de eksamensviktige familiene — polynomrommet Pₙ, matriserommet Mₘₓₙ og funksjonsrom. Grunnmuren under hele emnet.
- **Forkunnskaper (kryssbok):** Ingen i boka. Konkret vektorrom fra MA1201 og [Vektorer i tre dimensjoner](/bok/r2/r2-5-1); polynomer fra [Polynomer og polynomdivisjon](/bok/r1/r1-1-1). Den abstrakte teorien over vilkårlig kropp bygges fra grunnen her.
- **Eksamensbelegg:** Grunnlag for sjanger C/D — **VS-aksiomer/unikhet ~29 %** som egen oppgave, men fundamentet under alt (~100 %). Fasitens grep: unikhet av $\mathbf 0$/invers vises fra aksiomene (VS3/VS4-bevisene). Prioritet: **perfekt** (bærer resten).
- **Innholdskontrakt:** **Vektorromsaksiomene (VS1–VS8)** over en **vilkårlig kropp** $\mathbb F$ ($\mathbb R$, $\mathbb C$, evt. $\mathbb Z_p$ — kort); **unikhet av $\mathbf 0$ og av additiv invers**, $0\cdot\mathbf v=\mathbf 0$, $(-1)\mathbf v=-\mathbf v$ (ført fra aksiomene); **polynomrommet** $\operatorname{P}_n$ (grad $\le n$) med standardbasis $\{1,t,\dots,t^n\}$ og $\dim\operatorname{P}_n=n+1$; **matriserommet** $M_{m\times n}(\mathbb F)$ med $\dim=mn$; **funksjonsrom** $\mathcal F(S,\mathbb F)$ / $C(\mathbb R)$; hvorfor kroppen betyr noe (komplekse skalarer trengs for unitær diagonalisering senere). Alt til aktiv bruk.
- **Oppgavesjangre:** C/D. Mønstereksempel: «Vis fra aksiomene at additiv invers i et vektorrom er entydig, og at $0\cdot\mathbf v=\mathbf 0$ for alle $\mathbf v$.»
- **Typiske feil:** Anta $\mathbb R$ som kropp der $\mathbb C$ kreves; behandle $\operatorname{P}_n$ som $\dim=n$ (det er $n+1$); forveksle en påstand med et aksiombevis; glemme at unikhet må vises, ikke antas.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.2: Underrom-sjekk i abstrakt rom: de tre kravene og moteksempelet

- **id:** `ma1202-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-1-1`
- **kapitteltype:** teori
- **description:** Emnets faste oppgave 2: er delmengden et underrom? Sjekk de tre kravene (0 ∈ W, lukket under + og skalar) for et positivt svar; gi ett konkret moteksempel for et negativt. Rommene er nesten alltid M₂ₓ₂(ℝ) eller funksjonsrom.
- **Forkunnskaper (kryssbok):** Kap. 1.1.
- **Eksamensbelegg:** Sjanger C, **~50 %, voksende — fast oppgave 2 i 2023–2025**. Typisk to delmengder: én er underrom (før alle tre kravene), én er det ikke (moteksempel kreves). Rom: $M_{2\times2}(\mathbb R)$ («inverterbare matriser» — ikke underrom; «$A$ med $A^2=0$» — ikke underrom; «$A$ med $AM=MA$» — underrom) eller funksjonsrom (`{f | f(0)=a}`: underrom kun for $a=0$). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Underrom-kriteriet**: (i) $\mathbf 0\in W$, (ii) lukket under addisjon, (iii) lukket under skalarmultiplikasjon; **sjekkprosedyren** (før alle tre for ja; ett verifisert moteksempel for nei); standardeksemplene i $M_{2\times2}(\mathbb R)$ og funksjonsrom (over); hvorfor «inverterbare matriser» ser lukket ut men ikke er det (nullmatrisen mangler; sum av inverterbare kan være singulær); span som minste underrom. Alt til aktiv bruk (underrom-bevis er fast).
- **Oppgavesjangre:** C. Mønstereksempel: «I $M_{2\times2}(\mathbb R)$: er mengden av inverterbare matriser et underrom? Er mengden $\{A\mid A^2=0\}$ et underrom? Begrunn — og gi et moteksempel der svaret er nei.»
- **Typiske feil:** **Sjekke bare én av de tre kravene** eller glemme $\mathbf 0$-kravet (dokumentert klassisk felle); besvare «nei» uten et konkret, verifisert moteksempel; forveksle «delmengde» og «underrom»; anta at «inverterbare matriser» er lukket.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.3: Lineær uavhengighet, basis, dimensjon og koordinatvektorer

- **id:** `ma1202-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-1-2`
- **kapitteltype:** teori
- **description:** Lineær uavhengighet og span i abstrakte rom, basis og dimensjon, koordinatvektoren [v]_β relativt en basis, og de eksamensklassiske utregningene: dim V fra antall koordinater, dim span(S) via rangen til koordinatmatrisen.
- **Forkunnskaper (kryssbok):** Kap. 1.2, 1.1. Rang/radreduksjon fra MA1201 og [Lineære likningssystem](/bok/ma1201/ma1201-1-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger D, **~100 % byggekloss**; koordinatvektor-varianten egen oppgave i flere nyere sett. Fasitens grep: $\dim V=$ antall koordinater; $\dim\operatorname{span}(S)=$ rangen til matrisen med koordinatvektorene som kolonner (radreduksjon). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineærkombinasjon** og **span**; **lineær uavhengighet** (i $\mathbb R^n$ via radreduksjon; for polynomer via **koeffisientsammenligning**; for matriser via oppstilling); **basis** = uavhengig + utspenner; **dimensjon** og dimensjonsargumentet; **koordinatvektor** $[\mathbf v]_\beta$ relativt en ordnet basis; **$\dim V$** fra antall koordinater og **$\dim\operatorname{span}(S)$** via rang av koordinatmatrisen; basisskifte (kort, bro til $[T]_\beta$ i Del 2). Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «$V$ har basis $\beta$. Fire vektorer er gitt ved sine koordinatvektorer i $\mathbb R^5$. Hva er $\dim V$, og hva er $\dim\operatorname{span}$ av de fire vektorene?»
- **Typiske feil:** Regne uavhengighet av polynomer feil (glemme koeffisientsammenligning); forveksle $\dim V$ (antall koordinater) og $\dim\operatorname{span}(S)$ (rang); oppgi en avhengig mengde som basis; telle dimensjon feil.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.4: Drill: underrom, basis, dimensjon og koordinatvektorer

- **id:** `ma1202-1-4` · **number:** 1.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma1202-1-3`
- **kapitteltype:** drill
- **description:** Oppgave-2- og byggekloss-repertoaret drillet til automatikk: underrom-sjekk i M₂ₓ₂(ℝ) og funksjonsrom (ja med tre krav, nei med moteksempel), og dim V / dim span / koordinatvektorer relativt en basis.
- **Eksamensbelegg:** Dekker sjanger C (~50 %) og D (~100 %) samlet. Variantkatalog: underrom ja/nei i matriserom og funksjonsrom; koordinatvektorer; $\dim\operatorname{span}$ via rang; lineær uavhengighet i $\operatorname{P}_n$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): for underrom — (1) sjekk $\mathbf 0\in W$; (2) test lukkethet under $+$; (3) test lukkethet under skalar; (4) ja ⇒ før alle tre, nei ⇒ ett verifisert moteksempel. For dimensjon — (1) skriv koordinatvektorer; (2) $\dim V=$ antall koordinater; (3) $\dim\operatorname{span}=$ rang via radreduksjon. Gjennomregnet «oppgave 2-case» med sensor-margnotater (før alle tre kravene; verifiser moteksempelet). 12–15 oppgaver på eksamensnivå: minst fire underrom-sjekker (blandet ja/nei, matrise- og funksjonsrom), tre koordinatvektor/dim-span, to lineær uavhengighet i $\operatorname{P}_n$.
- **Oppgavesjangre:** C/D, alle varianter. Mønstereksempel: «(a) Er $W=\{A\in M_{2\times2}(\mathbb R)\mid \operatorname{spor}A=0\}$ et underrom? (b) Finn en basis og $\dim W$.»
- **Typiske feil:** Glemt krav i underrom-sjekk; moteksempel uten verifikasjon; blande $\dim V$ og $\dim\operatorname{span}$; regnefeil i radreduksjonen under tidspress.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (id `ma1202-1-prove`, chapterNumber `1.P`; spesifisert i §4).

---

### Del 2 — Lineærtransformasjoner og fundamentalteoremet *(prioritet: PERFEKT — lineærtransf./matrise rel. basis ~71 %, fundamentalteoremet ~54 %)*

#### Kapittel 2.1: Lineærtransformasjoner: verifikasjon, kjerne, bilde og matrise $[T]_\beta$

- **id:** `ma1202-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-1-3`
- **kapitteltype:** teori
- **description:** Lineærtransformasjonen T mellom vektorrom: vis lineær direkte (T(au+bv)=aT(u)+bT(v)), kjerne og bilde, og den sentrale konstruksjonen — matrisen [T]_β relativt en basis, med basisvektorenes bilder som kolonner.
- **Forkunnskaper (kryssbok):** Kap. 1.3. Matrise av lineær avbildning på konkret nivå fra MA1201 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger G, **~71 %**. Fasitens grep: «vis lineær» direkte; $[T]_\beta$ — send hver basisvektor gjennom $T$, uttrykk resultatet i (mål)basisen, sett koordinatene som kolonner. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineærtransformasjon** $T:V\to W$ (bevar addisjon og skalar); vis lineær via $T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)$; **kjerne** $\ker T$ og **bilde** $\operatorname{Im}T$ som underrom; **matrise av operator** $[T]_\beta$ (og $[T]_{\gamma,\beta}$ mellom to basiser) — basisvektorenes bilder i koordinater som kolonner; komposisjon og basisskifte-formelen (kort). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «La $T:\operatorname{P}_2\to\operatorname{P}_2$, $T(p)=p+p'$. Vis at $T$ er lineær, og finn $[T]_\beta$ i standardbasisen $\{1,t,t^2\}$.»
- **Typiske feil:** «Vise lineær» ved bare ett eksempel; sette bildene som rader i stedet for kolonner i $[T]_\beta$; glemme å uttrykke bildene i **mål**basisen; blande $\ker$ (i $V$) og $\operatorname{Im}$ (i $W$).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Fundamentalteoremet, injektiv/surjektiv og «bestem $T(\mathbf x)$ fra kjente verdier»

- **id:** `ma1202-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-2-1`
- **kapitteltype:** teori
- **description:** Dimensjonsteoremet dim(ker T)+dim(Im T)=dim V, injektiv (ker={0}) og surjektiv (Im=W) lest av dimensjonene, og den nyere oppgavevarianten: bestem T(x) fra oppgitte verdier når x ligger i deres span.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.3.
- **Eksamensbelegg:** Sjanger H (~54 %) + G-variant. Fasitens grep: bruk $\dim\ker+\dim\operatorname{Im}=\dim V$ til å avgjøre inj./surj. eller regne én dimensjon; for «bestem $T(\mathbf x)$» — skriv $\mathbf x$ som lineærkombinasjon av vektorene der $T$ er kjent (mulig kun hvis $\mathbf x$ ligger i deres span). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fundamentalteoremet for lineærtransformasjoner** $\dim(\ker T)+\dim(\operatorname{Im}T)=\dim V$; **injektiv** ⇔ $\ker T=\{\mathbf 0\}$; **surjektiv** ⇔ $\operatorname{Im}T=W$ (krever $\dim\operatorname{Im}=\dim W$, IKKE $\dim V$); isomorfi; **bestem $T(\mathbf x)$ fra oppgitte verdier** ($\mathbf x=\sum c_i\mathbf v_i$ der $T(\mathbf v_i)$ er kjent — mulig ⇔ $\mathbf x\in\operatorname{span}$); begrunne at en operator ikke kan være injektiv når $\dim\operatorname{Im}<\dim V$. Alt til aktiv bruk (navngi fundamentalteoremet).
- **Oppgavesjangre:** G/H. Mønstereksempel: «$f:\mathbb R^3\to\mathbb R^2$ er lineær med $f(1,1,1)=(2,5)$ og $f(0,1,1)=(1,3)$. Kan $f(1,-1,-1)$ bestemmes? Kan man avgjøre om $f$ er injektiv?»
- **Typiske feil:** **Blande $\dim V$ (definisjonsrommet) og $\dim W$ (målrommet)** — surjektiv krever $\dim\operatorname{Im}=\dim W$; bestemme $T(\mathbf x)$ når $\mathbf x$ ikke ligger i spennet av de kjente vektorene; lese inj./surj. feil av dimensjonene.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.3: Drill: lineærtransformasjon, $[T]_\beta$ og fundamentalteoremet

- **id:** `ma1202-2-3` · **number:** 2.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1202-2-2`
- **kapitteltype:** drill
- **description:** Hele lineærtransformasjons-repertoaret drillet: vis lineær, finn [T]_β, regn ker/Im og dimensjoner, avgjør injektiv/surjektiv via fundamentalteoremet, og bestem T(x) fra kjente verdier.
- **Eksamensbelegg:** Dekker sjanger G (~71 %) og H (~54 %) samlet. Variantkatalog: vis lineær, $[T]_\beta$ i $\operatorname{P}_n$/$M_{2\times2}$, $\ker/\operatorname{Im}$, inj./surj., bestem $T(\mathbf x)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) vis lineær direkte; (2) $[T]_\beta$ — bilder av basis i koordinater som kolonner; (3) $\ker/\operatorname{Im}$ via nullrom/kolonnerom av $[T]_\beta$; (4) $\dim(\ker)+\dim(\operatorname{Im})=\dim V$; (5) inj./surj.; (6) «bestem $T(\mathbf x)$» via lineærkombinasjon. Gjennomregnet case med sensor-margnotater (navngi fundamentalteoremet; sjekk om $\mathbf x\in\operatorname{span}$). 10–14 oppgaver på eksamensnivå.
- **Oppgavesjangre:** G/H, alle varianter. Mønstereksempel: «For $T:\operatorname{P}_2\to\mathbb R^3$ gitt ved $T(p)=(p(0),p(1),p(2))$: finn $[T]$, $\ker T$, $\operatorname{Im}T$, og avgjør om $T$ er en isomorfi.»
- **Typiske feil:** Bilder som rader; blande $\dim V$/$\dim W$; bestemme $T(\mathbf x)$ utenfor spennet; glemme å navngi fundamentalteoremet.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (id `ma1202-2-prove`, chapterNumber `2.P`; spesifisert i §4).

---

### Del 3 — Egenverdier, egenvektorer og diagonalisering *(prioritet: PERFEKT — navet, ~83 %, driver anvendelseslaget; bokas tyngdepunkt; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 3.1: Karakteristisk polynom, egenverdier og egenvektorer

- **id:** `ma1202-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-2-2`
- **kapitteltype:** teori
- **description:** Egenverdimaskineriets grunnlag: det(A−λI)=0 gir karakteristisk polynom og egenverdiene, egenrommene som nullrom til (A−λI), og algebraisk vs. geometrisk multiplisitet — grunnlaget for hele emnets nav.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Determinant og karakteristisk polynom på matriseform fra MA1201 og [Egenverdier og egenvektorer](/bok/ma1201/ma1201-5-1) *(verifiser id)*.
- **Eksamensbelegg:** Grunnlag for sjanger A/I/K/L (~83 % diagonalisering + alt anvendt). Fasitens grep: charpol → egenverdier → egenrom-basis (nullrom til $A-\lambda I$). Prioritet: **perfekt** (bærer halve settet).
- **Innholdskontrakt:** **Karakteristisk polynom** $\det(A-\lambda I)$ (også for operator via $[T]_\beta$); **egenverdier** (røttene) og **egenrom** $E_\lambda=\ker(A-\lambda I)$; **algebraisk multiplisitet** (multiplisitet i charpol) og **geometrisk multiplisitet** ($\dim E_\lambda$); at geometrisk $\le$ algebraisk; egenverdier er basisuavhengige; $\operatorname{spor}A=\sum\lambda_i$, $\det A=\prod\lambda_i$. Egenverdibevis føres fra $A\mathbf x=\lambda\mathbf x$. Alt til aktiv bruk (kode D — for hånd).
- **Oppgavesjangre:** A-grunnlag. Mønstereksempel: «Finn egenverdiene og en basis for hvert egenrom til $A=\begin{bmatrix}1&1\\4&-2\end{bmatrix}$.»
- **Typiske feil:** Regnefeil i $\det(A-\lambda I)$; forveksle algebraisk og geometrisk multiplisitet; oppgi egenvektoren $\mathbf 0$ (utelukket per definisjon); glemme at komplekse egenverdier kan opptre.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Diagonalisering: $P^{-1}AP=D$ og diagonaliserbarhetskriteriet

- **id:** `ma1202-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-3-1`
- **kapitteltype:** teori
- **description:** Diagonaliserings-maskineriet komplett: P = [egenvektorer], D = diagonal av egenverdier, P⁻¹AP = D, og kriteriet — diagonaliserbar ⇔ nok lineært uavhengige egenvektorer (sum av geometriske multiplisiteter = n). Emnets absolutte kjerne.
- **Forkunnskaper (kryssbok):** Kap. 3.1.
- **Eksamensbelegg:** Sjanger A, **~83 % (navet)**. Fasitens grep: sett $P=$ [egenvektorer], da $P^{-1}AP=D$; «her finnes flere riktige svar» (rekkefølge av kolonner). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Diagonalisering** $A=PDP^{-1}$ (ekvivalent $P^{-1}AP=D$); $P=$ [lineært uavhengige egenvektorer], $D=$ diag(egenverdier i samme rekkefølge); **diagonaliserbarhetskriteriet**: $A$ ($n\times n$) er diagonaliserbar ⇔ det finnes $n$ lineært uavhengige egenvektorer ⇔ for hver egenverdi er geometrisk = algebraisk multiplisitet; **$n$ distinkte egenverdier ⇒ diagonaliserbar** (tilstrekkelig, ikke nødvendig); **ikke-diagonaliserbare tilfeller** (defekt matrise, nilpotent — geometrisk < algebraisk); operator diagonaliserbar ⇔ basis av egenvektorer; **$P/D$-samsvar** (kolonne $i$ i $P$ ↔ egenverdi $i$ i $D$). Diagonaliserbarhet begrunnes ALLTID. Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn en inverterbar $P$ slik at $P^{-1}AP$ er diagonal for $A=\begin{bmatrix}1&1\\4&-2\end{bmatrix}$, eller vis at $A$ ikke er diagonaliserbar.»
- **Typiske feil:** **Anta diagonaliserbarhet uten å sjekke at det finnes nok egenvektorer** (geometrisk < algebraisk ved gjentatte egenverdier); $P/D$-uoverensstemmelse (feil rekkefølge); glemme at $P$ ikke er entydig; regnefeil i $P^{-1}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Similaritet, similartransformasjon og egenverdibevis

- **id:** `ma1202-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma1202-3-2`
- **kapitteltype:** teori
- **description:** Similære matriser (B=S⁻¹AS) og at de deler egenverdier, karakteristisk polynom, spor og determinant — koblet til de abstrakte egenverdibevisene sensor krever: nilpotent, idempotent, egenverdier til Aᵏ og til g⁻¹fg.
- **Forkunnskaper (kryssbok):** Kap. 3.2.
- **Eksamensbelegg:** Grunnlag for sjanger L (~54 %). Fasitens grep: **egenverdiene til $A$ og til $g^{-1}fg$ er like**; anta $A\mathbf x=\lambda\mathbf x$, manipuler, konkluder. Prioritet: **perfekt** (bro til bevis-drillen).
- **Innholdskontrakt:** **Similaritet** $B=S^{-1}AS$; similære matriser har samme charpol, egenverdier, spor og determinant (bevist); egenverdier til $A^k$ er $\lambda^k$, til $A^{-1}$ er $1/\lambda$ (samme egenvektorer); **nilpotent** ($A^n=0$) ⇒ eneste egenverdi 0; **idempotent** ($f^2=f$) ⇒ egenverdi $\in\{0,1\}$; **$A^4=A$ + diagonaliserbar** ⇒ $A^3=A$-typen (via $\lambda^4=\lambda$ på egenverdiene); egenverdibevis-malen (anta $A\mathbf x=\lambda\mathbf x$ med $\mathbf x\ne\mathbf 0$, bruk definisjonen). Alt til aktiv bruk (bevis-forankring).
- **Oppgavesjangre:** L-forberedelse. Mønstereksempel: «Vis at hvis $f$ er nilpotent ($f^n=0$), er 0 den eneste egenverdien til $f$.»
- **Typiske feil:** Egenverdibevis via en spesifikk matrise i stedet for definisjonen; anta $A$ og $A^{-1}$ har samme egenverdier (de har inverse); glemme at nilpotent ⇒ ikke diagonaliserbar (med mindre $A=0$).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.4: Drill: diagonalisering fra ende til annen

- **id:** `ma1202-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `ma1202-3-3`
- **kapitteltype:** drill
- **description:** Diagonaliserings-maskineriet drillet til refleks: charpol → egenverdier → egenrom-basis → P og D → P⁻¹AP=D, med begrunnet diagonaliserbarhet og gjenkjenning av ikke-diagonaliserbare tilfeller. Grunnteknikken bak halve eksamenen.
- **Eksamensbelegg:** Dekker sjanger A samlet (~83 %). Variantkatalog: 2×2 og 3×3, distinkte egenverdier, gjentatte egenverdier (diagonaliserbar/defekt), komplekse egenverdier, operator på $\operatorname{P}_n$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) $\det(A-\lambda I)=0$ → egenverdier; (2) for hver: basis for $E_\lambda=\ker(A-\lambda I)$; (3) sjekk diagonaliserbarhet (geometrisk = algebraisk?); (4) $P=$ [egenvektorer], $D=$ diag; (5) verifiser $P/D$-samsvar (evt. $AP=PD$). Gjennomregnet «oppgave 1-case» med sensor-margnotater (begrunn diagonaliserbarhet; $P$ ikke entydig; ved defekt: vis geometrisk < algebraisk). 12–15 oppgaver på eksamensnivå: minst tre diagonaliserbare (blandet 2×2/3×3), to defekte (vis ikke-diagonaliserbar), ett komplekst, ett operator på polynomrom.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Diagonaliser $A$ eller vis at det er umulig. (b) Regn ut $A^{10}$ når det er mulig.»
- **Typiske feil:** Uteglemt diagonaliserbarhetsbegrunnelse; $P/D$-uorden; behandle defekt matrise som diagonaliserbar; regnefeil under tidspress.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (id `ma1202-3-prove`, chapterNumber `3.P`; spesifisert i §4).

---

### Del 4 — Anvendelser av diagonalisering: Markov, diff-likninger og matrisepotens *(prioritet: PERFEKT/KUNNE — Markov ~58 %, diff-likningssystem ~50 % fast oppg 1, matrisepotens ~29 %, Cayley–Hamilton ~8 % voksende)*

#### Kapittel 4.1: Markov-kjeder: overgangsmatrise, regularitet og stabil tilstandsvektor

- **id:** `ma1202-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-3-2`
- **kapitteltype:** teori
- **description:** Anvendelseslagets hyppigste oppgave: sett opp den stokastiske overgangsmatrisen (kolonnesum 1), avgjør regularitet, og finn stabil tilstandsvektor = egenvektor for λ=1 normert til sannsynlighetsvektor. Langtidsgrensen og starttilstands-uavhengigheten.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 3.2.
- **Eksamensbelegg:** Sjanger B, **~58 %** (ofte oppgave 1). Innpakninger: lemonadekiosker, papirfarger, kafeteria, fluer, røykere, IT-sikkerhet, PageRank. Fasitens grep: overgangsmatrise med kolonnesum 1; stabil tilstand i nullrommet til $(I-M)$, normert til sum 1. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Stokastisk matrise** $M$ med $\mathbf x_{n+1}=M\mathbf x_n$ (**hver kolonne summerer til 1**); oppsett fra verbal modell; **regulær matrise** (en potens har bare positive innslag) ⇒ entydig grense; **stabil tilstandsvektor** = egenvektor for $\lambda=1$ i nullrommet til $(I-M)$, normert til sannsynlighetsvektor (sum 1, ikke-negative innslag); **langtidsgrense** og at den for regulær matrise ikke avhenger av starttilstand; varianten med flere matriser (skill stokastisk fra ikke-stokastisk, regulær fra ikke-regulær). Alt til aktiv bruk (navngi «regulær ⇒ entydig stabil tilstand»).
- **Oppgavesjangre:** B. Mønstereksempel: «I en småby handler kundene lemonade hos Solveig eller Tuva. 60 % av Solveigs kunder kommer tilbake; 30 % av Tuvas bytter til Solveig. Hvor stor andel handler hos Tuva på lang sikt?»
- **Typiske feil:** **Overgangsmatrise satt opp feil vei** (rad/kolonne byttet — kolonnesum ikke 1); konkludere langtidsfordeling uten å sjekke regularitet; **stabil tilstandsvektor ikke normert** (egenvektor for $\lambda=1$ uten å skalere til sum 1); glemme ikke-negativitetskravet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: System av differensiallikninger via diagonalisering

- **id:** `ma1202-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-3-2`
- **kapitteltype:** teori
- **description:** Emnets faste oppgave 1 i 2023–2025: løs y′=Ay ved å diagonalisere, innføre avkoblingen z=P⁻¹y (zᵢ′=λᵢzᵢ ⇒ zᵢ=cᵢe^{λᵢt}), transformere tilbake y=Pz, og bestemme konstantene fra initialverdiene.
- **Forkunnskaper (kryssbok):** Kap. 3.2. Diff-likninger på VGS-nivå fra [Differensiallikninger](/bok/s2/s2-4-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger A, **~50 %, voksende — fast oppgave 1 i 2023–2025**. Fasitens grep: charpol → egenrom-basis → $P$ → avkobling $\mathbf z=P^{-1}\mathbf y$ → $z_i=c_ie^{\lambda_i t}$ → tilbake $\mathbf y=P\mathbf z$ → konstanter fra initialverdier. Prioritet: **perfekt**.
- **Innholdskontrakt:** System $\mathbf y'=A\mathbf y$; **avkoblingen** $\mathbf z=P^{-1}\mathbf y$ gir $z_i'=\lambda_i z_i$ med løsning $z_i=c_ie^{\lambda_i t}$; **tilbaketransformasjon** $\mathbf y=P\mathbf z$; **initialverdier** bestemmer $c_i$; komplekse egenverdier gir oscillerende løsning (Eulers formel, kort); at generell løsning = lineærkombinasjon av $e^{\lambda_i t}\mathbf v_i$. Alt til aktiv bruk (hver ledd ført: charpol → basis → $P$ → $\mathbf z$-løsning → $\mathbf y$-løsning → konstanter).
- **Oppgavesjangre:** A. Mønstereksempel: «Løs systemet $y_1'=y_1+y_2,\ y_2'=4y_1-2y_2$ med $y_1(0)=1,\ y_2(0)=6$ ved diagonalisering.»
- **Typiske feil:** **Løse uten avkobling** (gjette løsningen); glemme å transformere tilbake ($\mathbf y=P\mathbf z$); glemme å bestemme konstantene fra initialverdiene; feil rekkefølge $P$/$D$.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.3: Matrisepotens $A^k$ og Cayley–Hamilton

- **id:** `ma1202-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-3-2`
- **kapitteltype:** teori
- **description:** To veier til høye potenser: Aᵏ=PDᵏP⁻¹ via diagonalisering, og Cayley–Hamilton (p(A)=0) som uttrykker Aⁿ eller A⁻¹ ved lavere potenser. Cayley–Hamilton er nytt eksamensstoff (2024–2025-malen).
- **Forkunnskaper (kryssbok):** Kap. 3.2, 3.1.
- **Eksamensbelegg:** Sjanger K, **matrisepotens ~29 %; Cayley–Hamilton ~8 % (verifiser — først i 2024–2025-malen)**. Fasitens grep: $A^k=PD^kP^{-1}$; eller skriv charpol $p$, sett inn $A$ (Cayley–Hamilton $p(A)=0$), løs for ønsket uttrykk. Prioritet: **kunne** (Cayley–Hamilton prioriteres opp om nye sett bekrefter).
- **Innholdskontrakt:** **Matrisepotens** $A^k=PD^kP^{-1}$ (lukket formel via diagonalisering); **Cayley–Hamilton-teoremet** $p(A)=0$ (matrisen tilfredsstiller sitt eget charpol); bruk til å uttrykke $A^n$ som lineærkombinasjon av $I,A,\dots,A^{n-1}$, og til $A^{-1}=$ (polynom i $A$); fremgangsmåte: skriv charpol, sett inn $A$, løs for uttrykket. Merk: Cayley–Hamilton er økende arkivstoff (verifiser mot nye sett). Alt til aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «Gitt en $3\times3$-matrise $A$ med charpol $p(t)=t^3-5t^2+5t-5$, bruk Cayley–Hamilton til å uttrykke $A^4$ ved lavere potenser av $A$.»
- **Typiske feil:** Regne $A^k$ elementvis i stedet for $PD^kP^{-1}$; fortegnsfeil i charpol; glemme at Cayley–Hamilton krever $p(A)=\mathbf 0$ (matrise), ikke $p(\lambda)=0$; feil ved isolering av $A^{-1}$.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 4.4: Drill: Markov og diff-likningssystem

- **id:** `ma1202-4-4` · **number:** 4.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma1202-4-2`
- **kapitteltype:** drill
- **description:** De to faste anvendelses-oppgavene drillet: Markov (overgangsmatrise → regularitet → stabil tilstand → langtid) og diff-likningssystem (diagonaliser → avkoble → tilbake → konstanter), begge på eksamensnivå.
- **Eksamensbelegg:** Dekker sjanger B (~58 %) og A/diff-likninger (~50 %) samlet. Variantkatalog: Markov med ulike innpakninger, flere-matriser-varianten, diff-likningssystem med reelle/komplekse egenverdier og initialverdier. Prioritet: **perfekt**.
- **Innholdskontrakt:** To løsningsoppskrifter (Markov + diff-likningssystem, fra 4.1/4.2), hver med gjennomregnet sensor-kommentert case (kolonnesum 1; normer stabil tilstand; avkoble og transformer tilbake). 10–14 oppgaver: minst tre Markov (ulik innpakning + flere-matriser), tre diff-likningssystem (reelle + ett komplekst), to matrisepotens/Cayley–Hamilton.
- **Oppgavesjangre:** A/B/K. Mønstereksempel: «(a) Sett opp overgangsmatrisen og finn stabil tilstand. (b) Er kjeden regulær? (c) Avhenger langtidsgrensen av starttilstanden?»
- **Typiske feil:** Overgangsmatrise feil vei; unormert stabil tilstand; diff-likninger uten avkobling/tilbaketransformasjon; glemte initialkonstanter.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (id `ma1202-4-prove`, chapterNumber `4.P`; spesifisert i §4).

---

### Del 5 — Indreproduktrom, Gram–Schmidt og ortogonalitet *(prioritet: PERFEKT — indreprodukt/Gram–Schmidt ~75 %, ortogonal projeksjon/$W^\perp$ ~38 %; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 5.1: Indreprodukt: aksiomene og verifikasjon på polynom- og matriserom

- **id:** `ma1202-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-1-3`
- **kapitteltype:** teori
- **description:** Indreprodukt-aksiomene (lineær i første variabel, konjugatsymmetrisk, positivt definit) og verifikasjonen sensor krever — på integral-indreproduktet ⟨f,g⟩=∫f·g (polynomrom) og spor-indreproduktet ⟨A,B⟩=tr(AᵀB) (matriserom).
- **Forkunnskaper (kryssbok):** Kap. 1.3. Skalarprodukt fra MA1201 og [Skalarprodukt](/bok/r2/r2-5-3) *(verifiser id)*.
- **Eksamensbelegg:** Grunnlag for sjanger E, **~75 %**. Fasitens grep: verifiser alle tre/fire aksiomene, særlig **positiv definitthet** ($\langle f,f\rangle=0\Rightarrow f=0$) — der kandidat-«indreprodukter» ofte feiler. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Indreprodukt-aksiomene**: (i) lineær i første variabel, (ii) **(konjugat)symmetrisk** ($\langle\mathbf u,\mathbf v\rangle=\overline{\langle\mathbf v,\mathbf u\rangle}$ over $\mathbb C$), (iii) **positivt definit** ($\langle\mathbf v,\mathbf v\rangle\ge0$, likhet ⇔ $\mathbf v=\mathbf 0$); **norm** $\|\mathbf v\|=\sqrt{\langle\mathbf v,\mathbf v\rangle}$ og **ortogonalitet**; standard indreprodukter: $\langle f,g\rangle=\int_a^b f g\,dt$ (polynomrom), $\langle A,B\rangle=\operatorname{tr}(A^TB)$ (matriserom), sum av produktverdier i punkter; hvorfor evaluering i for få punkter på et for stort polynomrom IKKE gir positiv definitthet (moteksempel). Alt til aktiv bruk.
- **Oppgavesjangre:** E-grunnlag. Mønstereksempel: «Vis at $\langle f,g\rangle=\int_{-1}^1 f(t)g(t)\,dt$ er et indreprodukt på $\operatorname{P}_2$.»
- **Typiske feil:** **Hoppe over positiv definitthet** (der de fleste kandidat-indreprodukter feiler); glemme kompleks konjugasjon i symmetrien over $\mathbb C$; anta at enhver bilineær form er et indreprodukt; evaluere i for få punkter.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.2: Gram–Schmidt og ortonormal basis

- **id:** `ma1202-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-5-1`
- **kapitteltype:** teori
- **description:** Gram–Schmidt-prosessen som gjør en gitt basis om til en ortogonal (og normert: ortonormal) basis, med projeksjonsformelen anvendt steg for steg — den andre bærebjelken i indreprodukt-delen.
- **Forkunnskaper (kryssbok):** Kap. 5.1.
- **Eksamensbelegg:** Sjanger E, **~75 %**. Fasitens grep: kjør Gram–Schmidt med projeksjonsformelen; poenget om at prosessen ikke endrer allerede ortogonale vektorer bør uttales; normer til ortonormal når det kreves. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Gram–Schmidt-prosessen**: $\mathbf u_k=\mathbf v_k-\sum_{i<k}\frac{\langle\mathbf v_k,\mathbf u_i\rangle}{\langle\mathbf u_i,\mathbf u_i\rangle}\mathbf u_i$ (ortogonal), deretter normering til **ortonormal** basis; anvendt på $\{1,t,t^2\}$ (Legendre-lignende) og på matriser med spor-indreproduktet; at allerede ortogonale vektorer ikke endres; ortonormal basis gjør koordinater = $\langle\mathbf y,\mathbf u_i\rangle$. Alt til aktiv bruk (kode D — for hånd).
- **Oppgavesjangre:** E. Mønstereksempel: «På $\operatorname{P}_2$ med $\langle f,g\rangle=\int_{-1}^1 fg\,dt$: bruk Gram–Schmidt på $\{1,t,t^2\}$ til å finne en ortogonal basis.»
- **Typiske feil:** **Feil projeksjonsformel** (glemme nevneren $\langle\mathbf u_i,\mathbf u_i\rangle$); uteglemt normering når ortonormal kreves; unødvendig regning på allerede ortogonale vektorer; regnefeil i integralene.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.3: Ortogonal projeksjon, ortogonalt komplement $W^\perp$ og nærmeste vektor

- **id:** `ma1202-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-5-2`
- **kapitteltype:** teori
- **description:** Ortogonalt komplement W⊥, den entydige ortogonale dekomponeringen y=w+z (w∈W, z∈W⊥), og at w=proj_W(y) er vektoren i W nærmest y (Pythagoras/projeksjonssetningen) — et topp-karakterskiller-bevis.
- **Forkunnskaper (kryssbok):** Kap. 5.2.
- **Eksamensbelegg:** Sjanger F, **~38 %**. Fasitens grep: vis den entydige dekomponeringen (eksistens + unikhet ved å utvide ortonormal basis for $W$); $\mathbf w=\operatorname{proj}_W\mathbf y=\sum\langle\mathbf y,\mathbf u_i\rangle\mathbf u_i$ er nærmest (Pythagoras). Prioritet: **kunne** (toppsjikt-skiller ved beviset).
- **Innholdskontrakt:** **Ortogonalt komplement** $W^\perp$ (alle vektorer ortogonale på hele $W$); **ortogonal dekomponering** $V=W\oplus W^\perp$: entydige $\mathbf w\in W,\ \mathbf z\in W^\perp$ med $\mathbf y=\mathbf w+\mathbf z$ (eksistens + unikhet); **ortogonal projeksjon** $\operatorname{proj}_W\mathbf y=\sum\frac{\langle\mathbf y,\mathbf u_i\rangle}{\langle\mathbf u_i,\mathbf u_i\rangle}\mathbf u_i$; **projeksjonssetningen** — $\mathbf w$ er vektoren i $W$ nærmest $\mathbf y$ (Pythagoras: $\|\mathbf y-\mathbf u\|^2=\|\mathbf y-\mathbf w\|^2+\|\mathbf w-\mathbf u\|^2$); regnevarianten (skriv $\mathbf y$ i ortonormal basis via $\langle\mathbf y,\mathbf u_i\rangle$). Alt til aktiv bruk; entydighets-beviset ført komplett.
- **Oppgavesjangre:** F. Mønstereksempel: «La $W$ være et underrom av et endeligdimensjonalt indreproduktrom og $\mathbf y$ en vektor. Vis at det finnes entydige $\mathbf w\in W$, $\mathbf z\in W^\perp$ med $\mathbf y=\mathbf w+\mathbf z$, og at $\mathbf w$ er nærmest $\mathbf y$.»
- **Typiske feil:** Projeksjon på ikke-ortogonal basis (må ha ortogonal/ortonormal først); glemme unikhets-delen av dekomponeringen; feil Pythagoras-oppdeling; blande $W$ og $W^\perp$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.4: Drill: indreprodukt, Gram–Schmidt og projeksjon

- **id:** `ma1202-5-4` · **number:** 5.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma1202-5-3`
- **kapitteltype:** drill
- **description:** Indreprodukt-søylen drillet: verifiser et indreprodukt (alle aksiomer, særlig positiv definitthet), kjør Gram–Schmidt til ortonormal basis, og regn ortogonal projeksjon / nærmeste vektor — alt på eksamensnivå.
- **Eksamensbelegg:** Dekker sjanger E (~75 %) og F (~38 %) samlet. Variantkatalog: verifiser indreprodukt (integral, spor, punktevaluering — inkl. ett som IKKE er indreprodukt), Gram–Schmidt på polynom/matriser, projeksjon, $W^\perp$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter: (indreprodukt) sjekk lineær/symmetrisk/positiv definit; (Gram–Schmidt) projeksjonsformel steg for steg, normer; (projeksjon) $\operatorname{proj}_W\mathbf y$ i ortogonal basis. Gjennomregnet sensor-kommentert case (positiv definitthet er der de feiler; normer når ortonormal kreves). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** E/F, alle varianter. Mønstereksempel: «(a) Vis at $\langle A,B\rangle=\operatorname{tr}(A^TB)$ er et indreprodukt på $M_{2\times2}(\mathbb R)$. (b) Ortonormaliser en gitt basis for et underrom.»
- **Typiske feil:** Uteglemt positiv definitthet; feil projeksjonsformel; uteglemt normering; regnefeil i integraler/spor.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (id `ma1202-5-prove`, chapterNumber `5.P`; spesifisert i §4).

---

### Del 6 — Spesielle operatorer og spektralteoremene *(prioritet: PERFEKT — spesielle operatorer + spektralteorem ~67 %, adjungert $T^*$ ~21 % voksende)*

#### Kapittel 6.1: Adjungert operator $T^*$ og selvadjungerte operatorer

- **id:** `ma1202-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-5-2`
- **kapitteltype:** teori
- **description:** Den adjungerte operatoren definert ved ⟨Tu,v⟩=⟨u,T*v⟩, dens eksistens på endeligdimensjonale indreproduktrom (og forbeholdet på uendeligdimensjonale som ℝ[x]), og selvadjungerte operatorer (T=T*) som broen til spektralteoremet.
- **Forkunnskaper (kryssbok):** Kap. 5.2, 5.1.
- **Eksamensbelegg:** Sjanger O, **~21 % (voksende — 2020, 2020-kont, 2025)**. Fasitens grep: definisjon $\langle T\mathbf u,\mathbf v\rangle=\langle\mathbf u,T^*\mathbf v\rangle$; adjungert finnes alltid på endeligdim, ikke garantert på uendeligdim ($\mathbb R[x]$). Prioritet: **kunne** (voksende).
- **Innholdskontrakt:** **Adjungert operator** $T^*$ ($\langle T\mathbf u,\mathbf v\rangle=\langle\mathbf u,T^*\mathbf v\rangle$); eksistens/entydighet på **endeligdimensjonale** indreproduktrom; matrisen til $T^*$ i ortonormal basis er $\overline{[T]}^{\,T}=[T]^*$ (konjugert transponert); **selvadjungert** ($T=T^*$) ⇔ symmetrisk matrise i ortonormal basis (over $\mathbb R$) / Hermitisk (over $\mathbb C$); egenverdier til selvadjungert er reelle; **det uendeligdimensjonale forbeholdet** — adjungert/norm finnes ikke alltid på $\mathbb R[x]$ (topp-karakterskiller). Alt til aktiv bruk.
- **Oppgavesjangre:** O. Mønstereksempel: «På polynomrommet med et gitt integral-indreprodukt: avgjør om derivasjonsoperatoren $D$ har en adjungert, og om den er selvadjungert.»
- **Typiske feil:** **Anta at adjungert eksisterer på uendeligdimensjonale rom** ($\mathbb R[x]$); glemme kompleks konjugasjon i $[T]^*$; forveksle selvadjungert (over $\mathbb R$: symmetrisk) med ortogonal.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.2: Spektralteoremene: symmetrisk/ortogonal og normal/unitær diagonaliserbar

- **id:** `ma1202-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-6-1`
- **kapitteltype:** teori
- **description:** De to spektralteoremene og klassifiseringen: reell symmetrisk ⇔ ortogonalt diagonaliserbar (over ℝ), kompleks normal (AA*=A*A) ⇔ unitært diagonaliserbar (over ℂ) — med konstruksjon av ortogonal Q / unitær U og parameter-varianten sensor elsker.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 3.2.
- **Eksamensbelegg:** Sjanger I, **~67 %**. Fasitens grep: klassifiser (symmetrisk/normal), konstruer $Q$ (ortogonal) eller $U$ (unitær); parameter-varianten «for hvilke $x,y,z$». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Spektralteoremet over $\mathbb R$**: $A$ symmetrisk ($A=A^T$) ⇔ ortogonalt diagonaliserbar ($A=QDQ^T$, $Q$ ortogonal, $D$ reell); **spektralteoremet over $\mathbb C$**: $A$ normal ($AA^*=A^*A$) ⇔ unitært diagonaliserbar ($A=UDU^*$, $U$ unitær); klassene ortogonal/symmetrisk/unitær/normal og relasjonene mellom dem; **konstruksjon** av $Q$/$U$ (ortonormaliser egenvektorene, egenrom for ulike egenverdier er automatisk ortogonale); **parameter-varianten** (for hvilke parameterverdier er matrisen symmetrisk/normal, finnes $Q$/$U$). Alt til aktiv bruk (uttal symmetrien/normaliteten; skill $\mathbb R$/$\mathbb C$).
- **Oppgavesjangre:** I. Mønstereksempel: «For $A=\begin{bmatrix}x&0&0\\0&0&z\\0&y&0\end{bmatrix}$: for hvilke $x,y,z\in\mathbb R$ finnes ortogonal $Q$ med $Q^{-1}AQ$ diagonal? For hvilke $x,y,z\in\mathbb C$ finnes unitær $U$?»
- **Typiske feil:** **Ortogonal vs. unitær forvekslet** (bruke «symmetrisk» over $\mathbb C$ der «normal» kreves); ikke sjekke $AA^*=A^*A$; glemme kompleks konjugasjon; ikke ortonormalisere egenvektorene for $Q$/$U$; anta at diagonaliserbar ⇒ ortogonalt diagonaliserbar.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.3: Drill: spektralteorem-klassifisering

- **id:** `ma1202-6-3` · **number:** 6.3 · **estimatedMinutes:** 85 · **prerequisites:** `ma1202-6-2`
- **kapitteltype:** drill
- **description:** Spektralteorem-oppgaven drillet: klassifiser en operator (symmetrisk/normal/ortogonal/unitær), konstruer Q eller U som diagonaliserer, og løs parameter-varianten «for hvilke verdier finnes Q/U».
- **Eksamensbelegg:** Dekker sjanger I (~67 %) og O (~21 %) samlet. Variantkatalog: reell symmetrisk (konstruer $Q$), kompleks normal (konstruer $U$), parameter-varianten, adjungert/selvadjungert-test. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) klassifiser ($A=A^T$? $AA^*=A^*A$?); (2) finn egenverdier/egenvektorer; (3) ortonormaliser innen hvert egenrom (Gram–Schmidt); (4) sett $Q$/$U$; (5) verifiser $A=QDQ^T$ / $UDU^*$. Gjennomregnet sensor-kommentert case (uttal symmetrien/normaliteten; skill $\mathbb R$/$\mathbb C$; konjuger). 12–15 oppgaver på eksamensnivå inkl. parameter-varianten.
- **Oppgavesjangre:** I/O. Mønstereksempel: «Avgjør om $A$ er ortogonalt diagonaliserbar, unitært diagonaliserbar, eller ingen av delene, og konstruer diagonaliseringsmatrisen når den finnes.»
- **Typiske feil:** Ortogonal/unitær forvekslet; uteglemt normalitetssjekk; egenvektorer ikke ortonormalisert; glemt konjugasjon.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (id `ma1202-6-prove`, chapterNumber `6.P`; spesifisert i §4).

---

### Del 7 — Abstrakte operatorer: derivasjon og kommutator *(prioritet: KUNNE — derivasjonsoperator ~38 %, kommutator/similartransformasjon ~21 %)*

#### Kapittel 7.1: Derivasjonsoperatoren $D$ på polynomrom

- **id:** `ma1202-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-2-1`
- **kapitteltype:** teori
- **description:** Derivasjonsoperatoren D(p)=p′ på ℝ[x]≤n: matrisen [D]_β (superdiagonal 1,2,…,n), dim(Im D)=n, dim(ker D)=1, at D er nilpotent (eneste egenverdi 0 ⇒ ikke diagonaliserbar), og at ingen basis gir [D] inverterbar.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 2.2. Derivasjon fra [Derivasjon](/bok/r1/r1-6-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger J, **~38 %**. Fasitens grep: $[D]_\beta$ i $\{1,x,\dots,x^n\}$ (superdiagonal); $\dim\operatorname{Im}D=n$, $\dim\ker D=1$; $D$ nilpotent ⇒ ikke diagonaliserbar. Prioritet: **kunne**.
- **Innholdskontrakt:** **Derivasjonsoperator** $D(p)=p'$ på $\operatorname{P}_n=\mathbb R[x]_{\le n}$; **matrisen** $[D]_\beta$ i standardbasis (superdiagonal med $1,2,\dots,n$); $\operatorname{Im}D=\operatorname{P}_{n-1}$ ($\dim=n$), $\ker D=$ konstantene ($\dim=1$); $D$ **nilpotent** ($D^{n+1}=0$) ⇒ eneste egenverdi 0 ⇒ **ikke diagonaliserbar** (og ingen basis gir $[D]$ inverterbar); varianten: er $D$ selvadjungert mht. et gitt indreprodukt? (Nei — moteksempel $\langle D(x),1\rangle\ne\langle x,D(1)\rangle$). Alt til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «På $\mathbb R[x]_{\le3}$ med basis $\{1,x,x^2,x^3\}$: finn $[D]$, bestem $\dim\operatorname{Im}D$ og $\dim\ker D$, og avgjør om det finnes en basis der $[D]$ er inverterbar.»
- **Typiske feil:** Feil plassering i superdiagonalen (glemme faktorene $1,2,\dots,n$); anta $D$ diagonaliserbar; forveksle $\operatorname{Im}$ og $\ker$; anta $D$ selvadjungert uten å teste.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 7.2: Kommutator- og similartransformasjon-operatorer *(bør kjenne til)*

- **id:** `ma1202-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `ma1202-7-1`
- **kapitteltype:** teori
- **description:** Operatorer på matriserom av typen T(A)=EA−AE (kommutator) og T(A)=S⁻¹AS (similartransformasjon): vis lineær, finn matrisen relativt en basis, bestem ker/Im, og se hvorfor kommutatorer aldri er inverterbare (identiteten ligger i kjernen).
- **Forkunnskaper (kryssbok):** Kap. 7.1, 3.3.
- **Eksamensbelegg:** Sjanger N, **~21 % (tidlig-tung: 2005, 2010, 2011; sjeldnere nylig)**. Fasitens grep: vis lineær; kommutator har alltid ikke-triviell kjerne ($I$ ligger i kjernen ⇒ ikke inverterbar); $T(A)=S^{-1}AS$ bevarer egenverdier. Prioritet: **kjenne / bør kunne** (tidlig-tung, kan gjenoppstå).
- **Innholdskontrakt:** **Kommutator** $T(A)=EA-AE$ (Lie-brakett) og **similartransformasjon** $T(A)=S^{-1}AS$ på $M_{n\times n}$; vis lineær; matrise relativt en basis for rommet; $\ker/\operatorname{Im}$; **inverterbarhet**: $T(A)=S^{-1}AS$ bevarer egenverdier (inverterbar), mens en kommutator alltid har $I$ i kjernen ($EI-IE=0$) ⇒ determinant 0 ⇒ **ikke inverterbar**. Merket lav-frekvent/beredskap. Alt til aktiv bruk.
- **Oppgavesjangre:** N. Mønstereksempel: «På rommet av $3\times3$-matriser, la $T(A)=EA-AE$ for en fast $E$. Vis at $T$ er lineær, og forklar hvorfor $T$ ikke er inverterbar.»
- **Typiske feil:** **Glemme at $I$ ligger i kjernen til en kommutator** (⇒ ikke inverterbar); vise lineær ved ett eksempel; forveksle kommutator og similartransformasjon; regnefeil i matrisen relativt basis.
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 7:** 4 prøver (id `ma1202-7-prove`, chapterNumber `7.P`; spesifisert i §4).

---

### Del 8 — Minste kvadraters metode *(prioritet: KUNNE — ~25 %, fast 2019–2020)*

#### Kapittel 8.1: Minste kvadraters metode: normallikningene og kurvetilpasning

- **id:** `ma1202-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `ma1202-5-3`
- **kapitteltype:** drill
- **description:** Minste kvadraters metode: sett opp designmatrisen A, løs normallikningene AᵀAx=Aᵀy (eller x=(AᵀA)⁻¹Aᵀy) for koeffisientene i lineær (Y=aX+b) eller kvadratisk (Y=aX²+bX+c) kurvetilpasning — koblet til ortogonal projeksjon.
- **Forkunnskaper (kryssbok):** Kap. 5.3 (projeksjon), 2.2. Regresjon på VGS-nivå fra [Regresjon](/bok/s1/s1-3-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger M, **~25 % (fast i Gjøsteen-æraen 2019–2020)**. Fasitens grep: sett opp $A$ og $\mathbf y$, regn $A^TA$, $A^T\mathbf y$, løs $A^TA\hat{\mathbf x}=A^T\mathbf y$ eksplisitt. Prioritet: **kunne**.
- **Innholdskontrakt:** **Designmatrise** $A$ fra datapunkter; **normallikningene** $A^TA\hat{\mathbf x}=A^T\mathbf y$ (evt. $\hat{\mathbf x}=(A^TA)^{-1}A^T\mathbf y$); **lineær** ($Y=aX+b$) og **kvadratisk** ($Y=aX^2+bX+c$) tilpasning; kobling til **ortogonal projeksjon** ($A\hat{\mathbf x}=\operatorname{proj}_{\operatorname{Col}A}\mathbf y$ — minste kvadraters løsning minimerer $\|A\mathbf x-\mathbf y\|$); fasiten fører $A^TA$, invers og $A^T\mathbf y$ eksplisitt. Løsningsoppskrift + gjennomregnet sensor-kommentert case + 10–14 oppgaver på eksamensnivå (lineær og kvadratisk). Alt til aktiv bruk.
- **Oppgavesjangre:** M. Mønstereksempel: «Bruk minste kvadraters metode til å finne linjen $Y=aX+b$ som passer best til $(1,2.1),(2,4.3),(3,4.4),(5,8.1)$.»
- **Typiske feil:** Designmatrise satt opp feil; regnefeil i $A^TA$/$A^T\mathbf y$; glemme konstantleddskolonnen (1-ere) i $A$; blande minste kvadrater med eksakt løsning der systemet er overbestemt.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 8:** 4 prøver (id `ma1202-8-prove`, chapterNumber `8.P`; spesifisert i §4).

---

### Del 9 — Determinant, rang og nullitet (repetisjon fra MA1201) *(prioritet: KUNNE — determinant/rang som egen oppgave ~46 %, fallende)*

#### Kapittel 9.1: Determinant, rang, nullitet og inverterbarhet — kompakt repetisjon

- **id:** `ma1202-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1202-1-3`
- **kapitteltype:** teori
- **description:** Kompakt repetisjon av determinant (kofaktor/radreduksjon), rang og nullitet, og inverterbarhetssetningen som knytter det sammen — mekanikken forutsettes kjent fra MA1201, men testes fortsatt som egen oppgave (~46 %).
- **Forkunnskaper (kryssbok):** Kap. 1.3. **Bygger direkte på MA1201**: [Determinanter](/bok/ma1201/ma1201-2-1) og [Rang og nullitet](/bok/ma1201/ma1201-4-1) *(verifiser id-ene før lenking)*. Determinant på VGS-nivå fra [Areal og volum med vektorer](/bok/r2/r2-5-5).
- **Eksamensbelegg:** Sjanger (determinant/rang), **~46 % (fallende som egen oppgave)**. Fasitens grep: kofaktorutvikling langs rad/kolonne med flest nuller, eller radreduksjon; $\det\ne0$ ⇔ inverterbar ⇔ rang $=n$ ⇔ nullitet $=0$. Prioritet: **kunne** (repetisjon; brukes i charpol Del 3). **Dette er hovedskillet mot ma1201-boka** — der ble dette drillet som egen perfekt-del; her er det ett kompakt repetisjonskapittel.
- **Innholdskontrakt:** **Determinant** (2×2, 3×3, kofaktorutvikling, radreduksjon; egenskaper $\det(AB)=\det A\det B$, $\det A^T=\det A$, triangulær ⇒ produkt av diagonalen); **rang** (antall pivoter) og **nullitet** ($\dim\ker=\dim\operatorname{Nul}A$); **rang–nullitet** $\operatorname{rang}A+\dim\operatorname{Nul}A=$ antall kolonner; **inverterbarhetssetningen** ($\det\ne0$ ⇔ inverterbar ⇔ rang $=n$ ⇔ nullitet $=0$ ⇔ kolonnene er basis); $\det A=\prod\lambda_i$ (bro til Del 3). Kompakt — forutsetter MA1201-mekanikk. Alt til aktiv bruk.
- **Oppgavesjangre:** determinant/rang. Mønstereksempel: «Regn ut $\det A$ for en gitt $3\times3$-matrise og avgjør rang, nullitet og inverterbarhet.»
- **Typiske feil:** Fortegnsfeil i kofaktormønsteret $(-1)^{i+j}$; radbytte skifter fortegn (glemt); bruke $\det(A+B)=\det A+\det B$ (galt); forveksle rang og nullitet.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 9:** 4 prøver (id `ma1202-9-prove`, chapterNumber `9.P`; spesifisert i §4).

---

### Del 10 — Emnebeskrevne anvendelser (lav frekvens) *(prioritet: KJENNE — Fourier/Leontief/Lagrange/kvadratisk form/spillteori/fraktaler ~4–8 %)*

#### Kapittel 10.1: Emnebeskrevne anvendelser: Fourier, Leontief, Lagrange, kvadratisk form, spillteori og fraktaler *(bør kjenne til)*

- **id:** `ma1202-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1202-5-3`
- **kapitteltype:** teori
- **description:** De emnebeskrevne anvendelsene med lav/ingen arkivfrekvens, hver med standardmetode og tydelig frekvensmerking: Fourier-tilnærming (best approksimasjon i indreproduktrom), Leontief input-output, Lagrange-interpolasjon, kvadratisk form/ellipsoide, spillteori (nullsum) og fraktaler.
- **Forkunnskaper (kryssbok):** Kap. 5.3, 6.2, 3.2.
- **Eksamensbelegg:** Spredte enkeltforekomster: **Fourier-tilnærming ~8 %** (2009, 2011), **Leontief ~4 %** (2016, 2018), **Lagrange ~4 %** (2019), **kvadratisk form ~4 %** (2009), **spillteori ~4 %** (kun 2014), **fraktaler 0 %** (emnebeskrevet, aldri i arkivet). Prioritet: **kjenne** — dekk med standardmetode, merk lav/ingen frekvens; eksamenstreningen legges IKKE hit.
- **Innholdskontrakt:** **Fourier-tilnærming** (best approksimasjon i indreproduktrom = ortogonal projeksjon på et endeligdimensjonalt underrom av trigonometriske funksjoner); **Leontief input-output** ($(I-A)\mathbf x=\mathbf d$, produksjonsvektor); **Lagrange-interpolasjon** (basis av interpolasjonspolynomer, kort kryptografi-anvendelse); **kvadratisk form/ellipsoide** (fra symmetrisk matrise via ortogonal diagonalisering — hovedaksetransformasjon, koblet til MA1201s kjeglesnitt); **spillteori** (nullsum matrisespill, optimal strategi, spillverdi — kun 2014); **fraktaler** (kort, emnebeskrevet, ingen arkivbelegg). Hvert tema **tydelig merket** med frekvens og «bør kjenne til». Kort dekning, standardfremstilling.
- **Oppgavesjangre:** Blandet, lav prioritet. Mønstereksempel: «Bruk minste kvadrater / ortogonal projeksjon til å finne den beste tilnærmingen til en gitt funksjon i rommet utspent av $\{1,\cos t,\sin t\}$» (Fourier-variant).
- **Typiske feil:** Bruke tid på disse på bekostning av navet (diagonalisering); glemme at Fourier-tilnærming = ortogonal projeksjon; feil oppsett av $(I-A)$ i Leontief.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 10:** 4 prøver (id `ma1202-10-prove`, chapterNumber `10.P`; spesifisert i §4).

---

### Del 11 — Eksamenstrening og bevis

#### Kapittel 11.1: Føringsstandarden og utenat-banken (kode D)

- **id:** `ma1202-11-1` · **number:** 11.1 · **estimatedMinutes:** 45 · **prerequisites:** `ma1202-0-1`
- **kapitteltype:** eksamenstrening
- **description:** Føringsstandarden samlet (begrunn alt, navngi teoremet, egenverdibevis fra definisjonen, moteksempel for negative svar) og utenat-banken kode D krever: egenverdiprosedyren, spektralteoremene, indreprodukt-aksiomene, Gram–Schmidt, avkoblingen z=P⁻¹y, Markov-oppskriften, Cayley–Hamilton.
- **Forkunnskaper (kryssbok):** Hele boka (Del 1–10).
- **Eksamensbelegg:** Metakapittel — samler sensorreglene (§4 i analysen) og de faste metaregler. Prioritet: bærer føringskvaliteten.
- **Innholdskontrakt:** **Føringsstandarden**: begrunn alle svar; navngi teoremet som bærer argumentet; egenverdibevis fra $A\mathbf x=\lambda\mathbf x$; moteksempel (verifisert) for negative svar; bruk tidligere delsvar (designet inn); flere riktige svar honoreres. **Utenat-banken** (kode D): egenverdiprosedyren, diagonaliserbarhetskriteriet, de to spektralteoremene, indreprodukt-aksiomene, Gram–Schmidt-formelen, projeksjonsformelen, avkoblingen $\mathbf z=P^{-1}\mathbf y$, Markov-oppskriften (kolonnesum 1, stabil tilstand), Cayley–Hamilton, fundamentalteoremet. **Karakterskillene** (bestått/midt/topp fra 0.1). Ingen regneoppgaver; 3–4 refleksjons-/sjekklisteoppgaver.
- **Oppgavesjangre:** Refleksjon. Mønstereksempel: «Sett opp en 4-timers strategi for 2023–2025-malen: hvilke oppgaver tar du først, og hvilke formler MÅ sitte utenat under kode D?»
- **Typiske feil:** Ubegrunnet fasitsvar; uteglemt teoremnavn; egenverdibevis via matrise; forveksle hva som må pugges vs. slås opp (intet oppslag under kode D).
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 11.2: Bevis-drill: de abstrakte egenverdi- og operatorbevisene

- **id:** `ma1202-11-2` · **number:** 11.2 · **estimatedMinutes:** 90 · **prerequisites:** `ma1202-3-3`
- **kapitteltype:** drill
- **description:** Settets sluttoppgaver (6–7, ~54 %) drillet: de abstrakte egenverdi-/inverterbarhetsbevisene ført komplett med forutsetningssjekk og navngitt teorem — nilpotent, idempotent, Aⁿ=0⇒I−A inverterbar, similartransformasjon, sum-av-egenvektorer, nilpotent+normal⇒0.
- **Forkunnskaper (kryssbok):** Kap. 3.3, 2.2, 6.2. Bevisteknikker fra [Direkte bevis og moteksempler](/bok/r1/r1-9-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger L, **~54 %; fast oppgave 6–7 i 2023–2025 (topp-karakterskiller)**. Fasitens mal: anta egenverdi $\lambda$ med egenvektor $\mathbf x\ne\mathbf 0$, bruk $A\mathbf x=\lambda\mathbf x$, manipuler, konkluder. Prioritet: **perfekt** (bevisferdigheten er selvstendig karakterskiller).
- **Innholdskontrakt:** **Modellbevis ført komplett** for hver dokumentert arketype: (i) $A^n=0$ ⇒ $A$ ikke inverterbar ($\det A^n=(\det A)^n=0$) OG $I-A$ inverterbar (geometrisk sum $(I-A)(I+A+\dots+A^{n-1})=I$); (ii) nilpotent ⇒ eneste egenverdi 0; idempotent ($f^2=f$) ⇒ egenverdi $\in\{0,1\}$; $A^4=A$ + diagonaliserbar ⇒ $A^2=A$-typen; (iii) egenverdiene til $A$ og $g^{-1}fg$ er like (similartransformasjon); (iv) sum av to egenvektorer er egenvektor ⇒ samme egenverdi; (v) nilpotent + normal ⇒ operatoren er null (normal ⇒ diagonaliserbar; alle egenverdier 0 ⇒ null); (vi) egenverdier til $A^k$ er $\lambda^k$. Hvert bevis med **forutsetningssjekk**, navngitt teorem, skille «⇒»/«⇔». 10–14 bevisoppgaver på eksamensnivå.
- **Oppgavesjangre:** L. Mønstereksempel: «La $A$ være kvadratisk med $A^n=0$ for en $n\ge1$. Vis at $A$ ikke er inverterbar, og at $I-A$ er inverterbar.»
- **Typiske feil:** Egenverdibevis via en spesifikk matrise i stedet for definisjonen; ufullstendig forutsetningssjekk; vise bare én vei i «⇔»; anta diagonaliserbarhet uten begrunnelse (nilpotent+normal-beviset).
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 11.3: Øvingseksamen 1 (Markov som oppgave 1)

- **id:** `ma1202-11-3` · **number:** 11.3 · **estimatedMinutes:** 75 · **prerequisites:** `ma1202-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 4-timers-sett etter 2023–2025-malen med Markov som oppgave 1: overgangsmatrise+stabil tilstand, underrom i M₂ₓ₂(ℝ), Gram–Schmidt, lineærtransformasjon, spektralteorem, abstrakt egenverdibevis, åpen bevisoppgave. Løsningsforslag som A-besvarelse.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler temafordelingen §2 (en typisk eksamen). 6–7 oppgaver, kode D. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet sett (egne tall/matriser/kontekster) med **6–7 oppgaver** dekker sjanger B (oppg 1: Markov), C, E, G, I, L, og en åpen L. Løsningsforslag i eget `collapsible` per oppgave, skrevet som **A-besvarelse** med `tip`-notat om delpoeng. Alle svar begrunnet; teoremer navngitt.
- **Oppgavesjangre:** Blandet (B/C/E/G/I/L). Mønstereksempel: hele settet.
- **Typiske feil:** (samlet i løsningsforslagene per oppgave — de dokumenterte fellene fra fagkapitlene).
- **Quiz: 0 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 2 (diff-likningssystem som oppgave 1)

- **id:** `ma1202-11-4` · **number:** 11.4 · **estimatedMinutes:** 75 · **prerequisites:** `ma1202-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet sett med diff-likningssystem via diagonalisering som oppgave 1, underrom i funksjonsrom, basis/koordinatvektorer, fundamentalteoremet, Cayley–Hamilton, og to bevisoppgaver. A-besvarelse.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Variant der oppgave 1 er diff-likninger og oppgave 5 er Cayley–Hamilton. 6–7 oppgaver, kode D. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet sett dekker sjanger A (oppg 1: diff-likningssystem), C (funksjonsrom), D (koordinatvektorer), H (fundamentalteoremet), K (Cayley–Hamilton), L (to bevis). Løsningsforslag som A-besvarelse med delpoeng-notat.
- **Oppgavesjangre:** Blandet (A/C/D/H/K/L). Mønstereksempel: hele settet.
- **Typiske feil:** (samlet i løsningsforslagene per oppgave).
- **Quiz: 0 · Flashcards: 0**

#### Kapittel 11.5: Øvingseksamen 3 (indreprodukt-tung)

- **id:** `ma1202-11-5` · **number:** 11.5 · **estimatedMinutes:** 75 · **prerequisites:** `ma1202-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet sett med tyngdepunkt i indreprodukt/spektral-søylen: verifiser indreprodukt + Gram–Schmidt, ortogonal projeksjon, unitært vs. ortogonalt diagonaliserbar (parameter-variant), adjungert, og en abstrakt bevisoppgave. A-besvarelse.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Variant med indreprodukt/spektral-tyngde og adjungert-oppgave. 6–7 oppgaver, kode D. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet sett dekker sjanger E (indreprodukt + Gram–Schmidt), F (projeksjon), I (spektralteorem, parameter), O (adjungert), A (diagonalisering), L (bevis). Løsningsforslag som A-besvarelse med delpoeng-notat.
- **Oppgavesjangre:** Blandet (E/F/I/O/A/L). Mønstereksempel: hele settet.
- **Typiske feil:** (samlet i løsningsforslagene per oppgave).
- **Quiz: 0 · Flashcards: 0**

#### Kapittel 11.6: Øvingseksamen 4 (bredt syntesesett)

- **id:** `ma1202-11-6` · **number:** 11.6 · **estimatedMinutes:** 75 · **prerequisites:** `ma1202-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Fjerde komplette sett som sveiper hele bredden: diagonalisering, underrom, lineærtransformasjon+fundamentalteoremet, minste kvadrater, spektralteorem, matrisepotens, og en åpen sluttbevis-oppgave. A-besvarelse.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Bredt syntesesett som dekker de resterende sjanger-variantene (minste kvadrater, matrisepotens). 6–7 oppgaver, kode D. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet sett dekker sjanger A (diagonalisering), C (underrom), G/H (lineærtransformasjon + fundamentalteoremet), M (minste kvadrater), I (spektralteorem), K (matrisepotens), L (åpen bevis). Sammen med 11.3–11.5 dekker de fire settene A–O, begge oppg-1-varianter (Markov/diff-likninger), begge oppg-2-varianter (matrise-/funksjonsrom), diagonaliserbar/defekt, standard-/integral-indreprodukt, og alle bevis-arketyper. Løsningsforslag som A-besvarelse.
- **Oppgavesjangre:** Blandet (A/C/G/H/M/I/K/L). Mønstereksempel: hele settet.
- **Typiske feil:** (samlet i løsningsforslagene per oppgave).
- **Quiz: 0 · Flashcards: 0**

**Prøve-kvote Del 11:** ingen egne temaprøver — øvingseksamenene (11.3–11.6) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.4 | 18+18+18+20 = **74** | 24+24+24+10 = **82** |
| 2 | 2.1–2.3 | 18+18+20 = **56** | 24+22+10 = **56** |
| 3 | 3.1–3.4 | 18+18+16+20 = **72** | 24+22+22+10 = **78** |
| 4 | 4.1–4.4 | 18+16+14+20 = **68** | 22+16+16+10 = **64** |
| 5 | 5.1–5.4 | 18+18+16+20 = **72** | 24+24+20+10 = **78** |
| 6 | 6.1–6.3 | 16+18+20 = **54** | 22+24+10 = **56** |
| 7 | 7.1–7.2 | 16+14 = **30** | 20+18 = **38** |
| 8 | 8.1 | 18 | 20 |
| 9 | 9.1 | 16 | 20 |
| 10 | 10.1 | 14 | 16 |
| 11 | 11.1–11.6 | 12+16+0+0+0+0 = **28** | 14+12+0+0+0+0 = **26** |
| **Sum** | **35 kap.** | **512 ≥ 500 ✓** | **546 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst moderat-høy (546, ikke ~510):** MA1202 er et
definisjons-, teorem- og bevisapparat-rikt **abstrakt** fag der **kode D-kalkulatoren
ikke kan noe av matriseregningen** — hele apparatet (egenverdiprosedyren,
diagonaliserbarhetskriteriet, de to spektralteoremene, indreprodukt-aksiomene,
Gram–Schmidt-formelen, avkoblingen $\mathbf z=P^{-1}\mathbf y$, Markov-oppskriften,
Cayley–Hamilton, fundamentalteoremet, bevismalene) er selve puggematerialet. De
teori- og bevistunge delene (Del 1 språk, Del 3 diagonalisering, Del 5 indreprodukt,
Del 6 spektralteorem) bærer tettheten; drillkapitlene (1.4/2.3/3.4/4.4/5.4/6.3) holdes
lave (10) fordi verdien er oppgaver, ikke kort; øvingseksamenene 0.
Quiz-fordelingen speiler eksamensvektene: **Del 1 (vektorrom, 74) + Del 3
(diagonalisering, 72) + Del 4 (anvendelser, 68) + Del 5 (indreprodukt, 72) + Del 6
(spektral, 54) + Del 11-bevis (28) = 368 av 512 quiz** bærer de faste søylene; nivå
2-delene (2/7/8/9) samlet 120; nivå 3 (10) 14; Del 0/11.1 metakapitler 22.

---

## 4. Prøver og øvingseksamener

**Temaprøver** (id `ma1202-<del>-prove`, chapterNumber `<del>.P`, én prøvekapittel per
temadel med **4 prøver hver**): Del 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 → **10 prøvekapitler ×
4 prøver = 40 prøver**. Hver prøve 6–10 oppgaver på delens sjangre, stigende vanskelighet
som ender på eksamensnivå, alle med løsningsforslag som A-besvarelse (begrunn alt, navngi
teorem). Del 11 har ingen egen temaprøve — de fire **øvingseksamenene** (11.3–11.6) er
delens prøver og fungerer som fullstendige, tidssatte sett.

| Del | Prøvekapittel-id | Antall | Sjangerdekning |
|---|---|---|---|
| 1 | `ma1202-1-prove` | 4 | C, D (underrom, basis/dim, koordinatvektorer, VS-aksiomer) |
| 2 | `ma1202-2-prove` | 4 | G, H (lineærtransformasjon, $[T]_\beta$, fundamentalteoremet, inj./surj.) |
| 3 | `ma1202-3-prove` | 4 | A (diagonalisering, egenverdier, similaritet, diagonaliserbarhet) |
| 4 | `ma1202-4-prove` | 4 | A, B, K (Markov, diff-likningssystem, matrisepotens, Cayley–Hamilton) |
| 5 | `ma1202-5-prove` | 4 | E, F (indreprodukt, Gram–Schmidt, projeksjon, $W^\perp$) |
| 6 | `ma1202-6-prove` | 4 | I, O (spektralteorem, ortogonal/unitær, adjungert) |
| 7 | `ma1202-7-prove` | 4 | J, N (derivasjonsoperator, kommutator/similartransformasjon) |
| 8 | `ma1202-8-prove` | 4 | M (minste kvadrater, normallikningene, kurvetilpasning) |
| 9 | `ma1202-9-prove` | 4 | determinant, rang, nullitet, inverterbarhet (repetisjon) |
| 10 | `ma1202-10-prove` | 4 | lav-frekvente anvendelser (Fourier, Leontief, Lagrange, kvadratisk form) |

**Øvingseksamener** (11.3–11.6): fire komplette 4-timers-sett etter 2023–2025-malen som
sammen dekker A–O, begge oppgave-1-variantene (Markov/diff-likninger), begge oppgave-2-
variantene (matrise-/funksjonsrom), diagonaliserbar/defekt, standard-/integral-indreprodukt,
og alle bevis-arketyper. Løsningsforslag som A-besvarelse med delpoeng-notat.

---

## 5. Studieguide-disposisjon

Del 0 (kap. 0.1) er studieguidens kjerne: eksamenskart, malen 2023–2025, frekvenser,
sjangerkatalog A–O, kodeforbehold og lesestrategi. Kap. 11.1 samler føringsstandarden og
utenat-banken. Sammen med drillkapitlene (1.4/2.3/3.4/4.4/5.4/6.3), bevis-drillen (11.2) og
de fire øvingseksamenene (11.3–11.6) utgjør dette en utfyllende, eksamensrettet studieguide.
**Leseplan:** Del 1 (vektorrom-språket) → Del 3 (diagonaliserings-navet, mest tid) → Del 4
(anvendelser som følger av det) → Del 5–6 (indreprodukt/spektral-søylen) → Del 2 (lineær-
transformasjon) → Del 7–10 (kunne/kjenne) → Del 11 (føring, bevis, øvingseksamener).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

**Byggerekkefølge (fase 4 — én agent per hel del, maks ~8 samtidige):**

1. **Grunnlag/språk**: Del 0 (eksamenskart) → **Del 1 (vektorrom — 4 kap., byggekloss for alt;
   kan splittes på to agenter som begge leser HELE delen)**.
2. **Operatorer**: Del 2 (lineærtransformasjon; 2.1 krever 1.3) — grunnlag for egenverdier.
3. **Lineær-algebra-navet**: **Del 3 (egenverdier/diagonalisering — 4 kap., 83 %, bokas
   tyngdepunkt; 3.1 krever 2.2; kan splittes på to agenter som begge leser HELE delen)**.
4. **Anvendelser**: Del 4 (Markov/diff-likninger/matrisepotens; alle krever 3.2) — bygg ETTER Del 3.
5. **Geometrisk søyle**: **Del 5 (indreprodukt/Gram–Schmidt — 4 kap., 75 %; 5.1 krever 1.3;
   kan splittes på to agenter)** → Del 6 (spektralteorem/adjungert; 6.1 krever 5.2, 6.2 krever 3.2).
6. **Kunne/kjenne**: Del 7 (abstrakte operatorer; 7.1 krever 2.1) → Del 8 (minste kvadrater;
   krever 5.3) → Del 9 (determinant/rang repetisjon; krever 1.3) → Del 10 (lav-frekvente; krever 5.3/6.2).
7. **Del 11** til slutt (føring + bevis-drill + de fire øvingseksamenene gjenbruker alt og må
   dekke A–O). Bevis-drillen (11.2) bygges av en agent som også leser 2.2, 3.3, 5.3 og 6.2
   (bevisene forankres dit). Øvingseksamenene (11.3–11.6) bygges av én agent som leser HELE
   skjelettet (de gjenbruker alle sjangre). Temaprøvene (§4) legges som prøvekapitler
   (`ma1202-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster, én per temadel 1–10 (40 stk).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 1, 3 og 5 (4 kap. hver) er de største** —
hold hver samlet hos én agent hvis mulig; ved splitting skal **begge agentene lese HELE delens
kontrakter**, og delen flagges for konsistenssjekk (jf. byggekontrakt-regelen). **Avhengighet på
tvers av deler:** Del 4 (anvendelser) og Del 6 (spektral) avhenger av Del 3 (diagonalisering) —
bygg Del 3 før dem, eller gi agentene Del 3s kontrakter. Del 9 gjenbruker MA1201-mekanikk — lenk
til `ma1201`-kapitler *(verifiser id-ene finnes)*.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via `json.dump`,
      ikke håndskriving — LaTeX krever `\\` i JSON-strenger; `npm run build` grønn
      (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + notasjon**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker; konsistent
      emne-notasjon ($[\mathbf v]_\beta$, $[T]_\beta$, $P^{-1}AP=D$, $\det(A-\lambda I)$,
      $\langle\cdot,\cdot\rangle$, $W^\perp$, $T^*$, $A^*$, $D(p)=p'$, overgangsmatrise med
      kolonnesum 1, $\mathbf y'=A\mathbf y$, $\mathbf z=P^{-1}\mathbf y$).
- [ ] **Notasjonskonsistens (grep over alle ma1202-filer)**: egenverdibevis fra definisjonen
      $A\mathbf x=\lambda\mathbf x$; **eksakte svar** (aldri desimal); diagonaliserbarhet begrunnet
      med multiplisitet; ortogonal vs. unitær strengt skilt ($\mathbb R$ symmetrisk / $\mathbb C$
      normal); kompleks konjugasjon ikke glemt; overgangsmatrise med kolonnesum 1; stabil tilstand normert.
- [ ] **Kode D-kalibrering**: hvert kapittel trener formlene **utenat** (ingen «slå opp»); kap.
      0.1 og 11.1 gjengir kodeforbeholdet og utenat-banken; ingen kalkulator-avhengige mellomsteg.
- [ ] **Arbeidsdeling MA1201/MA1202 synlig**: kap. 0.1 og 9.1 sier eksplisitt at konkret system-/
      determinantmekanikk forutsettes kjent fra MA1201 (repeteres kompakt i Del 9), og at DENNE boka
      eier det abstrakte/anvendte laget. Merk usikre detaljer med `(verifiser)`.
- [ ] **Bevis-sjanger**: kap. 11.2 fører komplette modellbevis for hver dokumentert arketype
      ($A^n=0$/$(I-A)^{-1}$, nilpotent/idempotent, similartransformasjon, sum-av-egenvektorer,
      nilpotent+normal, egenverdier til $A^k$) med forutsetningssjekk og navngitt teorem; «⇔» begge veier.
- [ ] **Føringsstandard i ALLE løsningsforslag**: begrunn alt; navngi teoremet; egenverdibevis fra
      definisjonen; $P/D$ matchet; diagonaliserbarhet begrunnet; indreprodukt-aksiomene komplett
      (særlig positiv definitthet); ortogonal basis før projeksjon; stabil tilstand normert;
      avkobling + tilbaketransformasjon i diff-likninger; verbal konklusjon; eksakt sluttsvar markert.
      Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Format-ærlighet**: kap. 0.1 sier at malen 2023–2025 er stabil (6–7 korte oppgaver), at
      koronaårene 2020–2021 avvek (kode A, hjemme-eksamen), at Cayley–Hamilton/adjungert er i vekst
      (verifiser mot nye sett), og at spillteori/fraktaler er emnebeskrevet med lav/ingen frekvens.
      Metodevalg uten dokumentert fasit merkes «⚠️ metode = faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene herfra),
      Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som finnes — MA1201/R1/R2/1T/S2/S1
      verifisert; **ubygde NTNU-emner som klartekst med aktiveringsmarkør**), `collapsible` Symbol-
      og formelliste per delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
      løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver; kap. 11.2 fører komplette modellbevis.
- [ ] **Quiz-sum ≥ 512 og flashcard-sum ≥ 546** per Summeringskontrollen (kontrollsummér).
      Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk) + 4 øvingseksamener (11.3–11.6) som sammen dekker
      A–O, begge oppgave-1-varianter (Markov/diff-likninger), begge oppgave-2-varianter (matrise-/
      funksjonsrom), diagonaliserbar/defekt, standard-/integral-indreprodukt, og alle bevis-arketyper.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser og kontekster; ingen
      formuleringer fra reelle sett eller fasiter (skjelettets mønstereksempler er selv omskrivninger
      og skal varieres videre, ikke kopieres ordrett inn).
- [ ] **Navigasjon**: `ma1202` inn i `src/app/bok/trinn/hoyere/institusjoner.ts` under **Norges
      teknisk-naturvitenskapelige universitet (NTNU)**, navn = «MA1202 Lineær algebra med anvendelser».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og minst 3
      kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute (200 + innholdssjekk),
      jf. `getChapterMeta`-lærdommen.
