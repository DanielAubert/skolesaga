# Bokskjelett: TMA4110 Lineær algebra, komplekse tall og differensiallikninger (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs TMA4110/TMA4115-arkiv: ~55 karakteriserte sett 2004–2025 med offisielle
> løsningsforslag). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../mat1120/SKJELETT.md` (samme lineær-algebra-kjerne, Lay-basert)
> og `../mat1110/SKJELETT.md` (samme institusjonsfamilie + ODE-behandling).
>
> **KRITISK — HVA DENNE BOKA DEKKER (les før alt annet):** Analysen ble skrevet på
> TMA4110-arkivet, men dens **topp-5-prognose gjelder dagens TMA4111** (vektorkalkulus/
> PDE/kompleks funksjonsteori) og skal **IKKE** bygges etter her. Denne boka bygges på
> det **arkivet FAKTISK inneholder** (analysens §2A + overføringsvurdering §7A): **lineær
> algebra + elementære komplekse tall + differensiallikninger (ODE)**. Grunn: NTNUs
> matematikkreform spredte innholdet på tvers av emnekoder — TMA4111s nye pensum dekkes
> allerede av bøkene `tma4101` og `tma4135`, så DENNE boka eier den klassiske
> lin.alg + ODE + kompleks-kjernen som 196-fils-arkivet (~55 sett) belegger. Frekvensene
> under er hentet fra §2A (dokumentert, ikke prognostisk) og er dermed
> **eksamensverifiserte**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4110` |
| Tittel | **Lineær algebra, komplekse tall og differensiallikninger (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Kodetilhørighet | Klassisk «Matematikk 3»-kjerne. Arkivkoden er **TMA4110/TMA4115** *(verifiser gjeldende kode mot emnesiden — NTNU-reformen har spredt dette innholdet på TMA4101/TMA4106 m.fl.; se kodeforbeholdet §1.6)* |
| Arketype | Regnefag (regne-, utlednings- og bevisorientert; definisjons- og teoremrikt; matematikken er stabil uansett kodeetikett) |
| Antall kapitler | **42** (1 eksamenskart + 36 tema/drill + 2 trening/bevis + 3 øvingseksamener) + 40 prøvekapitler |
| Estimert totaltid | **~2 950 min ≈ 49 timer** |
| Quiz totalt | **671** (krav ≥500) |
| Flashcards totalt | **812** (krav ≥500; sikt høyt — kode E, intet formelark, alt utenat) |

**Pitch (ett avsnitt):** Dette er den klassiske «Matematikk 3»-boka for NTNU-ingeniører:
**lineær algebra**, **elementære komplekse tall** og **differensiallikninger** samlet i
ett løp, kalibrert mot ~55 eksamenssett fra 2004–2025. Formatet er usedvanlig stabilt:
hvert sett er en **4-timers skriftlig skoleeksamen med ~10 deloppgaver som teller likt**,
karakter A–F, **ingen flervalg** i normalår, der **alle svar skal begrunnes**. Bredden er
nesten identisk fra år til år: fem søyler treffes praktisk talt hvert sett — (1) et
**komplekst tall**-problem (`zⁿ=c`, polarform, de Moivre — 95 %), (2)
**egenverdier/diagonalisering** (95 %), (3) **kolonnerom/nullrom/basis/rang fra
radreduksjon** (89 %), (4) **abstrakt vektorrom + basis/dimensjon** (82 %) og (5)
**Gram–Schmidt/ortogonal projeksjon** (80 %) — pluss en **2. ordens ODE** (82 %) og ofte
et **ODE-system** (`y'=Ay`, 45 %). **Siste oppgave er så godt som alltid et bevis**
(«vis at …»): `A²=A ⇒ egenverdier ∈ {0,1}`, `A³=0 ⇒ (I−A)⁻¹=I+A+A²`, `A` inverterbar ⇔
`AᵀA` inverterbar. Notasjonen er Lays for lineær algebra ($\operatorname{Col}A$,
$\operatorname{Nul}A$, $\operatorname{rang}A$, $A=PDP^{-1}$, $[\mathbf{x}]_{\mathcal B}$)
og standard for komplekse tall/ODE ($z=re^{i\theta}$, de Moivre, karakteristisk likning
$r^2+pr+q=0$). Sensorregelen som preger alt: **begrunn alle svar, navngi teoremet som
bærer argumentet, gi eksakte svar** ($\sqrt3$, $\frac{\pi}{4}$, $e^{2t}$, aldri desimal).
Den viktigste kalibreringsvalget: boka trenes mot **kode E — ingen hjelpemidler** (se
§1.6), strengere enn arkivets kode C, slik at **hele apparatet må sitte utenat**.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning til at tenkemåten klart framgår.** Ordrett
   NTNU-standardinstruks på hvert sett. Riktig sluttsvar uten føring gir ikke full
   uttelling. Hvert løsningsforslag skrives som **A-besvarelse**: mellomregning ledd for
   ledd, **navngitt teorem** der argumentet bæres (diagonaliserbarhetskriteriet,
   dimensjonsteoremet, spektralteoremet, de Moivres formel, superposisjonsprinsippet),
   verbal konklusjonssetning, sluttsvar markert.

2. **Teoremer skal navngis.** Sensor vil se at studenten kjenner navnet på resultatet som
   bærer argumentet: dimensjonsteoremet (rang–nullitet), diagonaliserbarhetskriteriet,
   spektralteoremet, de Moivres formel, Eulers formel, superposisjonsprinsippet,
   eksistens-/entydighetssetningen for ODE, karakteristisk-likning-metoden.

3. **Lays notasjon er bokstandard for lineær algebra:** $\operatorname{Nul}A$ (nullrom),
   $\operatorname{Col}A$ (kolonnerom), $\operatorname{Row}A$ (radrom), $\operatorname{rang}A$;
   $\operatorname{Span}\{\mathbf v_1,\dots\}$; koordinatvektor $[\mathbf x]_{\mathcal B}$;
   basisskiftematrise $P_{\mathcal C\leftarrow\mathcal B}$; standardmatrise til en
   transformasjon $A=[T]$; egenverdi/egenvektor via $\det(A-\lambda I)=0$; diagonalisering
   $A=PDP^{-1}$; ortogonal diagonalisering $A=PDP^{T}$ ($P$ ortogonal — Lays konvensjon);
   indreprodukt $\langle\mathbf u,\mathbf v\rangle$; ortogonal projeksjon
   $\operatorname{proj}_W\mathbf y$; ortogonalkomplement $W^{\perp}$; normallikningene
   $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$. **Hold $P$-konvensjonen konsekvent.**

4. **Komplekse tall — standardnotasjon:** $z=x+iy$ (kartesisk), $\bar z=x-iy$ (konjugat),
   $|z|=\sqrt{x^2+y^2}$ (modulus), $z=r(\cos\theta+i\sin\theta)=re^{i\theta}$ (polar/eksponential),
   $\arg z=\theta$; **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$; **de Moivres
   formel** $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$; $n$-te røtter av $c$
   plasseres jevnt på en sirkel med radius $|c|^{1/n}$. **Boka stopper ved det elementære**
   — INGEN analytiske funksjoner, Cauchy–Riemann, kompleks integrasjon eller residyer
   (arkivet inneholder dem ikke; de tilhører TMA4111/reformkoder).

5. **ODE — standardnotasjon og -metoder:** 1. orden separabel $y'=f(x)g(y)$; 1. orden
   lineær $y'+p(x)y=q(x)$ med **integrerende faktor** $\mu=e^{\int p\,dx}$; 2. orden
   homogen $y''+py'+qy=0$ med **karakteristisk likning** $r^2+pr+q=0$ (tre tilfeller:
   reelle ulike, dobbel, kompleks-konjugerte); 2. orden inhomogen via **ubestemte
   koeffisienter** (med resonans-multiplikasjon $x^s$); system $\mathbf x'=A\mathbf x$ løst
   via **egenverdier/egenvektorer**. Generell løsning skrives ALLTID som
   homogen ($y_h$) + partikulær ($y_p$); alle integrasjonskonstanter navngis.

6. **Eksakte svar** (heltall, brøk, $\sqrt2$, $e^{i\pi/3}$, $C_1e^{2x}+C_2e^{-x}$), **aldri**
   desimaltilnærming. Under kode E finnes uansett ingen kalkulator; et urent mellomsvar
   signaliserer regnefeil.

7. **Diagonaliserbarhet begrunnes ALLTID.** Ikke påstå — vis enten (a) **$n$ distinkte
   egenverdier** ⇒ diagonaliserbar, (b) **symmetrisk** ⇒ ortogonalt diagonaliserbar
   (spektralteoremet), (c) **triangulær** ⇒ egenverdier på diagonalen, eller (d) at **hvert
   egenroms dimensjon = egenverdiens algebraiske multiplisitet**. For **ikke**-diagonaliserbar:
   vis eksplisitt at et egenrom har for lav dimensjon (geometrisk < algebraisk).

8. **Bevis-sjangeren er obligatorisk (siste oppgave ~42 %).** Nesten hvert sett avslutter
   med et kort «vis at …». Boka har egen bevis-drill (kap. 11.2) og forankrer
   bevistemaene i sine kapitler (nilpotens/potenser i 5.3, egenverdier av $A^2=A$ i 5.1,
   inverterbarhet i 2.2/2.3, underrom i 3.1, $A^{T}A$-triks i 6.4). Bevis føres komplett med
   **forutsetningssjekk**, navngitt teorem, skille «⇒»/«⇔», og transponert-/dimensjonstriks.

9. **Aktiveringsmarkør for ubygde NTNU-forkunnskapsemner.** Forkunnskapsemnene **TMA4101/
   TMA4106** (og selve arkivkoden) er ikke bygget som bøker. Referanser skrives som
   **klartekst** med markøren *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver
   `/bok/<kode>/<id>`-lenke når den finnes)*. Referanser til **bygde** bøker lenkes normalt,
   kun til kapitler som finnes: **R1/R2/1T/S2** (VGS) dekker vektorer, skalarprodukt,
   komplekse tall (R2), derivasjon/integrasjon og differensiallikninger (S2) — de er
   primær-ankrene for forkunnskaper.

10. **Ærlighet om format og arkiv.** (a) Formatet er **usedvanlig stabilt** (~10 likt
    vektede deloppgaver, 4 t, «begrunn alt», siste oppgave = bevis) gjennom hele arkivet —
    prognosen er sikker. (b) **Pandemiårene avvek** (2020v/2021v hjemme-eksamen med
    flervalg, kode A; 2020h/2022h flervalgssplitt) — normalårene har ingen flervalg, og
    boka kalibreres mot normalåret. (c) **Hjelpemidler skiftet** — arkivet var kode C
    (kalkulator), reformkodene er kode E (ingen); boka trenes mot **kode E** (§1.6). (d) Der
    et metodevalg er faglig standard snarere enn ordrett dokumentert, merkes det «⚠️ metode
    = faglig standard».

### 1.6 Kodeforbehold og hjelpemiddel-kalibrering (skal gjengis i Del 0)

- **Kodeforbehold:** Dette er den klassiske **lineær algebra + ODE + kompleks**-kjernen som
  NTNU-reformen har fordelt på nye emnekoder (TMA4101, TMA4106, TMA4111 m.fl.). Arkivet er
  merket TMA4110/TMA4115, men **studenten må selv verifisere hvilken kode som eier stoffet
  i inneværende semester** (sjekk gjeldende emneside). **Matematikken er identisk uansett
  kodeetikett.** Bruk `(verifiser)` der kodetilhørigheten er usikker.
- **Ikke dekket her (bevisst avgrensning):** **Fourier-rekker** og **partielle
  differensiallikninger (PDE)** tilhører `tma4135` (Matematikk 4D). **Vektorkalkulus**
  (linje-/flate-/dobbeltintegral, Green/Gauss/Stokes) og **kompleks funksjonsteori**
  (Cauchy–Riemann, residyer) tilhører `tma4101`/`tma4111`. Denne boka stopper ved
  **elementære** komplekse tall og **vanlige** differensiallikninger.
- **Hjelpemiddel-kalibrering (kode E):** Arkivets kode C tillot enkel kalkulator (enkelte år
  Rottmann formelsamling). Boka trenes mot det **strengere** kravet **kode E — ingen
  hjelpemidler**: alle teoremformler, egenverdiprosedyren, ODE-løsningsmetodene, de Moivre
  og røtter-formelen må sitte **utenat**. Egen «utenat»-note i hvert kapittel og en samlet
  utenat-bank i kap. 11.1. (Kan du det uten hjelpemidler, klarer du det også med.)

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): likningssystem og radreduksjon er
motoren; matriser/determinant er verktøykassen; vektorrom/basis/dimensjon er språket;
lineærtransformasjoner kobler matriser til avbildninger; egenverdier/diagonalisering er
tyngdepunktet i lineær algebra; indreprodukt/ortogonalitet/minste kvadrater er den
geometriske delen; komplekse tall er en selvstendig søyle (og forkunnskap for komplekse
egenverdier og 2. ordens ODE); differensiallikningene bygger på både integrasjon og
egenverdier; eksamenstreningen er sist. **Frekvensen styrer omfanget**, ikke rekkefølgen:
~80–95 %-temaer får teori + eget drillkapittel; ~35–45 %-temaer får ett–to kompakte
kapitler. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og kode E | 1 | Prioriteringsverktøyet + kodeforbehold + utenat-krav; kjerne i studieguiden. |
| 1 | Lineære likningssystem og Gauss-eliminasjon | 3 | Gauss/parameteranalyse 78 % + motoren under Col/Nul/egenrom → perfekt → teori + drill. |
| 2 | Matriser, determinant og invers | 3 | Matriseregning 36 %, determinant/inverterbarhet 45 % → kunne, men fundamentalt verktøy. |
| 3 | Vektorrom, basis og dimensjon | 5 | Col/Nul/basis/rang 89 % + abstrakt vektorrom/basis/dim 82 % → perfekt → tyngdepunkt. |
| 4 | Lineære transformasjoner | 2 | Lineærtransformasjoner 38 % → kunne → kompakt teori. |
| 5 | Egenverdier og diagonalisering | 5 | Egenverdier/diagonalisering/$A^n$ 95 % + Markov 33 % → perfekt → teori + drill (stor del). |
| 6 | Indreprodukt, ortogonalitet og minste kvadrater | 5 | Gram–Schmidt/projeksjon 80 % + minste kvadrater 47 % → perfekt → teori + drill. |
| 7 | Komplekse tall (elementære) | 4 | Komplekse tall 95 % (fast oppgave 1) → perfekt → teori + drill. |
| 8 | Differensiallikninger av 1. orden | 2 | Grunnlag for 2. orden/system; separable+lineære → kjenne/kunne → kompakt. |
| 9 | Differensiallikninger av 2. orden | 4 | 2. ordens lineær ODE 82 % (resonans, ubest. koeff.) → perfekt → teori + drill. |
| 10 | Systemer av lineære differensiallikninger | 3 | System $\mathbf x'=A\mathbf x$ via egenverdier 45 % → kunne → teori + drill. |
| 11 | Eksamenstrening og bevis | 5 | Føring/utenat + bevis-drill (siste oppgave 42 %) + 3 komplette øvingseksamener (kode E). |

**Avvik fra DNA-malen (dokumentert):**

1. **42 tema-/treningskapitler — over DNA-taket (20–35).** Begrunnet i
   PRODUKSJONSLOYPE-lærdommen «≥500 er et gulv»: boka dekker **tre fagfelt** (lineær
   algebra + komplekse tall + ODE) som alle er selvstendig eksamenstestet i hvert sett.
   Bredden kan ikke kuttes — hvert sett sveiper fem–sju temaer. Flashcard-tettheten er
   derfor bevisst høy (812) fordi kode E krever at hele apparatet pugges uten formelark.

2. **To hoveddeler for lineær algebra-tyngdepunktet (Del 3 vektorrom + Del 5
   egenverdier), begge 5 kapitler.** Dette er de to 82–95 %-søylene; de får mest plass.
   Ved bygging kan hver splittes på to agenter, men **begge må lese HELE delens kontrakter**,
   og delen flagges for konsistenssjekk (jf. byggekontrakt-regelen).

3. **Komplekse tall er en egen del (Del 7), plassert ETTER lineær algebra.** Selv om det er
   den hyppigste enkeltoppgaven (95 %), er det faglig selvstendig og kort; det plasseres
   som bro til komplekse egenverdier (5.4) og 2. ordens ODE med kompleks-konjugerte røtter
   (9.1). Studenten kan lese Del 7 tidlig hvis ønskelig — kap. 0.1 sier dette.

4. **Determinant-regneregler, Cramer og matriseinvers-mekanikk er KUNNE-nivå (Del 2), ikke
   utelatt.** Til forskjell fra mat1120 (som skjøv dette ned til forkunnskapsemnet) tester
   TMA4110-arkivet determinant/inverterbarhet direkte (45 %) og matriseregning (36 %), så
   det beholdes som eget — men kompakt, uten eget drillkapittel.

5. **Drillkapitlene ligger i temadelene sine** (1.3, 3.5, 5.5, 6.5, 7.4, 9.4, 10.3) i
   stedet for i siste del: sjangrene drilles rett etter teorien. Del 11 beholder
   føringsstandarden, en egen **bevis-drill** (11.2) og de tre komplette øvingseksamenene.

6. **Egen bevis-drill (kap. 11.2).** Fordi **siste oppgave er så godt som alltid et bevis**
   (~42 %), får bevis-sjangeren et eget drillkapittel i tillegg til at bevistemaene
   forankres i sine fagkapitler. Dette speiler at bevisferdigheten er en selvstendig
   karakterskiller på NTNU-sett.

7. **ODE av 1. orden (Del 8) er KJENNE/KUNNE og kompakt (2 kap.)** — det er sjelden en egen
   tung oppgave, men er nødvendig forkunnskap for 2. orden (Del 9) og systemer (Del 10).
   Vekten ligger på 2. orden (82 %).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen, gjengitt i bokas Del 0: **A** lineære likningssystem/Gauss/
parameteravhengig løsningsantall, **B** matriseregning (multiplikasjon, invers, transponert),
**C** determinant/kofaktor/inverterbarhet/Cramer, **D** vektorrom/underrom/basis/dimensjon/
lineær uavhengighet (også abstrakt $\operatorname{P}_n$), **E** kolonnerom/nullrom/rang/
dimensjonsteorem, **F** lineærtransformasjon (matrise, kjerne, bilde, inj./surj.), **G**
egenverdier/egenvektorer/diagonalisering/$A^n$/Markov, **H** indreprodukt/ortogonalitet/
Gram–Schmidt/projeksjon, **I** minste kvadrater (normallikninger), **J** komplekse tall
(polar, de Moivre, $n$-te røtter, $z^n=c$), **K** differensiallikning 1. orden (separabel,
lineær), **L** differensiallikning 2. orden (karakteristisk likning, ubestemte koeffisienter,
resonans), **M** system av ODE ($\mathbf x'=A\mathbf x$ via egenverdier), **N** bevis/
abstrakt oppgave (siste oppgave). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør (jf. §1.5 punkt 9):** ubygde NTNU-forkunnskapsemner skrives som
klartekst med *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
Bygde bøker (R1, R2, 1T, S2) lenkes normalt, kun til kapitler som finnes.

---

### Del 0 — Eksamenskartet, føringsstandarden og kode E

#### Kapittel 0.1: Eksamenskartet: ~10 likt vektede deloppgaver, kode E og de faste søylene

- **id:** `tma4110-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes dette emnet: den stabile 4-timers eksamenen med ~10 likt vektede deloppgaver, de faste søylene (komplekse tall, egenverdier, Col/Nul/basis, abstrakt vektorrom, Gram–Schmidt, 2. ordens ODE), sensorreglene, kodeforbeholdet og utenat-kravet (kode E) som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (~55 sett, 2004–2025, med offisielle løsningsforslag). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakter A–F, **~10 deloppgaver som teller likt**, gruppert i 6–8 hovedoppgaver, **ingen flervalg i normalår**, fullt begrunnet langsvar der *alle svar skal begrunnes*; (ii) **de faste søylene** (hvert sett treffer de fleste): komplekst tall-problem (95 %), egenverdier/diagonalisering (95 %), Col/Nul/basis/rang fra radreduksjon (89 %), abstrakt vektorrom + basis/dimensjon (82 %), 2. ordens ODE (82 %), Gram–Schmidt/ortogonal projeksjon (80 %), Gauss/parameteranalyse (78 %), ofte minste kvadrater (47 %) og ODE-system (45 %); (iii) **temafrekvens-tabellen** (fra analysens §2A, dokumentert: komplekse tall 95 %, egenverdier/diagonalisering 95 %, Col/Nul/basis/rang 89 %, vektorrom/basis/dim 82 %, 2. ordens ODE 82 %, indreprodukt/Gram–Schmidt/projeksjon 80 %, Gauss/parameteranalyse 78 %, minste kvadrater 47 %, determinant/inverterbarhet 45 %, ODE-system 45 %, bevis 42 %, lineærtransformasjon 38 %, matriseregning 36 %, Markov 33 %, lineær uavhengighet i abstrakt rom 18 %); (iv) **siste oppgave = bevis** (~42 %): korte «vis at …» ($A^2=A$ ⇒ egenverdier ∈ {0,1}; $A^3=0$ ⇒ $(I-A)^{-1}=I+A+A^2$; $A$ inverterbar ⇔ $A^{T}A$ inverterbar); (v) **kodeforbeholdet** (§1.6 — klassisk kjerne spredt på reformkoder; verifiser gjeldende kode; Fourier/PDE/vektorkalkulus/kompleks funksjonsteori er IKKE her); (vi) **utenat-kravet (kode E)**: intet formelark — de Moivre, egenverdiprosedyren, ODE-metodene, teoremformlene pugges; (vii) **karakterskillene** (bestått ≈ mekanikken: radredusere til trappeform, karakteristisk likning for 2×2/3×3, separabel ODE, kartesisk-til-polar; midtsjikt ≈ + korrekt diagonalisering med $P/D$-samsvar, Gram–Schmidt, ubestemte koeffisienter med resonans, $z^n=c$ komplett; toppsjikt ≈ abstrakt vektorrom sikkert, ikke-diagonaliserbarhet begrunnet, ODE-system med komplekse egenverdier, bevis stramt ført).
- **Innholdskontrakt:** Sjangerkatalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære eksamen** (4 t, ~10 likt vektede deloppgaver, kode E): **O1** komplekst tall ($z^n=c$ eller polar/de Moivre); **O2** Gauss + Col/Nul/basis/rang; **O3** abstrakt vektorrom + basis/dimensjon; **O4** egenverdier + diagonalisering (begrunnet); **O5** Gram–Schmidt + ortogonal projeksjon/minste kvadrater; **O6** 2. ordens ODE (karakteristisk + ubestemte koeffisienter); **O7 (ofte)** ODE-system $\mathbf x'=A\mathbf x$ via egenverdier; **O8** kort bevis. **Lesestrategi**: Del 1 og 3 er inngangen og språket, **Del 5 og 3 er lineær-algebra-tyngdepunktet**, Del 7 (komplekse tall) kan leses tidlig, Del 9 er ODE-tyngdepunktet, Del 11 løfter føring/bevis.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en utenat-plan for de formlene kode E krever (de Moivre, karakteristisk likning, egenverdiprosedyre, Gram–Schmidt-formelen)»; «hvilke fem søyler er nesten garantert — og hvordan fordeler du 4 timer på ~10 deloppgaver?»; «siste oppgave er ofte et bevis — hvilke bevistyper går igjen, og hva kjennetegner et fullt uttellende bevis?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de faste søylene; undervurdere komplekse tall og egenverdier (begge 95 %); glemme at diagonaliserbarhet må begrunnes; hoppe over bevis-treningen (siste oppgave, 42 %); regne med kalkulator-refleks som ikke finnes under kode E; blande dette emnet med TMA4111-pensum (vektorkalkulus/PDE — ikke her).
- **Quiz: 10 · Flashcards: 14** (frekvenser, sjangerkatalog A–N, sensorregler, kodeforbehold, utenat-krav, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Lineære likningssystem og Gauss-eliminasjon *(prioritet: PERFEKT — motoren, Gauss/parameteranalyse ~78 %)*

#### Kapittel 1.1: Lineære likningssystem, matriseform og Gauss-eliminasjon

- **id:** `tma4110-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Motoren under hele faget: skriv et lineært system som totalmatrise, radreduser til (redusert) trappeform ved elementære radoperasjoner, og les av pivoter og frie variabler — grunnteknikken bak Col/Nul, egenrom og alt annet.
- **Forkunnskaper (kryssbok):** Likninger med flere ukjente fra [Likningssystem](/bok/r1/r1-1-1) og vektorer fra [Vektorer i tre dimensjoner](/bok/r2/r2-5-1). Videre matriseregning modnes i Del 2.
- **Eksamensbelegg:** Sjanger A (~78 %) og motoren bak sjanger E/G. Fasitens grep: radreduser til trappeform, marker pivotene, les løsningen. Prioritet: **perfekt** (bærer hele faget).
- **Innholdskontrakt:** **Lineært system** og **totalmatrise** $[A\mid\mathbf b]$; **elementære radoperasjoner** (bytt, skaler, adder multiplum); **trappeform** og **redusert trappeform (RREF)**; **pivotposisjon, pivotkolonne, fri variabel**; Gauss-eliminasjon (fremover) og Gauss–Jordan (bakover); ledende og frie variabler; hvordan løsningen leses av RREF. Homogene system $A\mathbf x=\mathbf 0$ (alltid $\mathbf x=\mathbf 0$; ikke-trivielle løsninger ⇔ frie variabler). Alt til aktiv bruk (kode E — radreduksjon for hånd).
- **Oppgavesjangre:** A. Mønstereksempel: «Løs systemet $\begin{cases}x+2y-z=3\\ 2x+y+z=4\\ x-y+2z=1\end{cases}$ ved Gauss-eliminasjon. Oppgi pivotene og eventuelle frie variabler.»
- **Typiske feil:** Regnefeil i radoperasjonene (fortegn); glemmer å redusere helt til RREF før avlesning; forveksler trappeform og redusert trappeform; behandler et inkonsistent system som løsbart; teller pivoter feil.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.2: Løsningsmengder og parameteravhengige system

- **id:** `tma4110-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-1-1`
- **kapitteltype:** teori
- **description:** Tre utfall (entydig / ingen / uendelig mange løsninger), løsning på parameterform med frie variabler, og den klassiske eksamensvarianten: for hvilke verdier av en parameter a har systemet 0, 1 eller uendelig mange løsninger?
- **Forkunnskaper (kryssbok):** Kap. 1.1.
- **Eksamensbelegg:** Sjanger A, **~78 %**, ofte som parameteranalyse. Fasitens grep: radreduser med parameteren symbolsk, finn verdiene der en pivot forsvinner, del i tilfeller. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Tre løsningsutfall** og hvordan RREF skiller dem (inkonsistent rad $[0\ \cdots\ 0\mid c]$, $c\ne0$ ⇒ ingen; fri variabel ⇒ uendelig; pivot i hver variabelkolonne ⇒ entydig); **løsning på parameterform** $\mathbf x=\mathbf x_p+t\mathbf v$ (partikulær + nullromsretning); **parameteravhengige system** (radreduser med bokstavparameter $a$, finn kritiske $a$-verdier via pivotbetingelser, tilfelledeling); geometrisk tolkning (plan som skjærer i punkt/linje/tomt). Kobling til $\operatorname{Nul}A$ (Del 3) og løsbarhet $\mathbf b\in\operatorname{Col}A$. Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Bestem for hvilke verdier av $a$ systemet med totalmatrise $\left[\begin{smallmatrix}1&1&1&2\\ 1&2&a&3\\ 1&a&1&a\end{smallmatrix}\right]$ har ingen, én eller uendelig mange løsninger.»
- **Typiske feil:** **Glemmer et tilfelle** i parameteranalysen (dokumentert felle); deler på en parameter som kan være 0; oppgir bare én løsning der det er uendelig mange; skriver løsningsmengden uten partikulær + retningsvektor; blander «ingen løsning» og «bare trivialløsning».
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.3: Drill: Gauss-eliminasjon og parameteranalyse

- **id:** `tma4110-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `tma4110-1-2`
- **kapitteltype:** drill
- **description:** Hele oppgave-1-repertoaret drillet til automatikk: radreduksjon uten regnefeil, løsning på parameterform, og tilfelledeling i parameteravhengige system — grunnteknikken som må sitte før alt annet.
- **Eksamensbelegg:** Dekker sjanger A samlet (~78 %). Variantkatalogen: løs system (entydig/uendelig/ingen), parameterform, parameteranalyse med tilfelledeling, homogent system og nullromsretning. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skriv totalmatrise; (2) radreduser til RREF uten regnefeil (kontroller hvert steg); (3) klassifiser utfallet fra pivotmønsteret; (4) skriv løsningen (parameterform ved frie variabler); (5) ved parameter: finn kritiske verdier, del i tilfeller. Gjennomregnet «oppgave 1-case» med sensor-margnotater om føringspoengene (vis radoperasjonene, oppgi frie variabler, del alle tilfeller). 12–15 oppgaver på eksamensnivå: minst tre radreduksjoner, to parameterform, tre parameteranalyser, ett homogent.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Løs systemet ved Gauss. (b) For hvilke $a$ er systemet konsistent? (c) Skriv den generelle løsningen når $a=2$.»
- **Typiske feil:** Regnefeil under tidspress; glemt tilfelle i parameteranalysen; ufullstendig parameterform; ikke redusert helt til RREF.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Matriser, determinant og invers *(prioritet: KUNNE — matriseregning ~36 %, determinant/inverterbarhet ~45 %)*

#### Kapittel 2.1: Matrisealgebra: multiplikasjon, transponert og spesielle matriser

- **id:** `tma4110-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4110-1-1`
- **kapitteltype:** teori
- **description:** Matrisealgebraen faget hviler på: addisjon, skalering, matriseprodukt (rad-gang-kolonne), transponert, og de spesielle matrisene (identitet, symmetrisk, diagonal, triangulær) — med regnereglene som brukes i bevis senere.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Matrisebegrep fra [Matriser](/bok/r2/r2-5-1) modnes her *(NTNU-forkunnskapsemne for utfyllende matriseregning, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger B (~36 %), og verktøy i nesten alle bevis (sjanger N). Fasitens grep: bruk regnereglene $(AB)^{T}=B^{T}A^{T}$, $A(BC)=(AB)C$ presist i utledninger. Prioritet: **kunne** (nivå 2), men $(AB)^{T}=B^{T}A^{T}$ og $A^{T}A$-triks er nøkkel i bevis.
- **Innholdskontrakt:** **Matriseaddisjon/skalering**; **matriseprodukt** (definert, rad-gang-kolonne, ikke-kommutativt); **regneregler** (assosiativ, distributiv, $I A=A$); **transponert** $A^{T}$ med reglene $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$, $(AB)^{T}=B^{T}A^{T}$, $(A^{T})^{T}=A$; **spesielle matriser**: identitet $I$, diagonal, triangulær (øvre/nedre), **symmetrisk** ($A^{T}=A$), skjevsymmetrisk; potenser $A^k$; blokkmatriser (kjennskap); at $A^{T}A$ er symmetrisk (bro til minste kvadrater/bevis). Alt til aktiv bruk.
- **Oppgavesjangre:** B/N. Mønstereksempel: «Vis at $A^{T}A$ er symmetrisk for enhver matrise $A$, og at $AB\ne BA$ generelt ved et eksempel.»
- **Typiske feil:** Antar $AB=BA$; feil i $(AB)^{T}=B^{T}A^{T}$ (bytter ikke rekkefølge); dimensjonsfeil i produktet; forveksler $A^2$ (matriseprodukt) med elementvis kvadrering.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.2: Invers matrise: Gauss–Jordan, 2×2-formelen og inverterbarhetssetningen

- **id:** `tma4110-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-2-1`
- **kapitteltype:** teori
- **description:** Den inverse matrisen: 2×2-formelen, Gauss–Jordan-metoden [A | I] → [I | A⁻¹], regnereglene (AB)⁻¹=B⁻¹A⁻¹, og den store inverterbarhetssetningen som knytter sammen invers, determinant, rang, Nul og løsbarhet.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.1.
- **Eksamensbelegg:** Sjanger B/C (~45 % inverterbarhet), og kjernen i mange bevis (sjanger N: $A^3=0\Rightarrow(I-A)^{-1}=I+A+A^2$; $A$ inverterbar ⇔ $A^{T}A$ inverterbar). Fasitens grep: bruk inverterbarhetssetningen til å oversette mellom ekvivalente utsagn. Prioritet: **kunne**, men inverterbarhetssetningen er bevis-gull.
- **Innholdskontrakt:** **Invers** $A^{-1}$ ($AA^{-1}=A^{-1}A=I$); **2×2-formel** $A^{-1}=\frac{1}{ad-bc}\left[\begin{smallmatrix}d&-b\\-c&a\end{smallmatrix}\right]$; **Gauss–Jordan** $[A\mid I]\to[I\mid A^{-1}]$; **regneregler** $(AB)^{-1}=B^{-1}A^{-1}$, $(A^{T})^{-1}=(A^{-1})^{T}$, $(A^{-1})^{-1}=A$; **inverterbarhetssetningen** (den lange ekvivalenskjeden: $A$ inverterbar ⇔ $\det A\ne0$ ⇔ $\operatorname{rang}A=n$ ⇔ $\operatorname{Nul}A=\{\mathbf 0\}$ ⇔ kolonnene er en basis for $\mathbb R^n$ ⇔ $A\mathbf x=\mathbf b$ har entydig løsning for alle $\mathbf b$ ⇔ $0$ er ikke egenverdi); løse $A\mathbf x=\mathbf b$ via $\mathbf x=A^{-1}\mathbf b$; bevisbruk (Neumann-triks $(I-A)^{-1}$ ved nilpotens). Alt til aktiv bruk (navngi inverterbarhetssetningen).
- **Oppgavesjangre:** B/C/N. Mønstereksempel: «Anta $A^3=O$. Vis at $I-A$ er inverterbar og at $(I-A)^{-1}=I+A+A^2$.»
- **Typiske feil:** Glemmer $ad-bc\ne0$-kravet i 2×2-formelen; feil rekkefølge i $(AB)^{-1}$; radreduserer $[A\mid I]$ feil; bruker inverterbarhetssetningen uten å navngi den; antar invers eksisterer uten å sjekke $\det\ne0$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.3: Determinanter, kofaktorutvikling og Cramers regel

- **id:** `tma4110-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-2-2`
- **kapitteltype:** teori
- **description:** Determinanten regnet ved kofaktorutvikling og radreduksjon, egenskapene (produktregel, transponert, radoperasjoners virkning), koblingen det A ≠ 0 ⇔ inverterbar, og Cramers regel — pluss det A = ∏λᵢ som bro til egenverdier.
- **Forkunnskaper (kryssbok):** Kap. 2.2. Determinant på VGS-nivå fra [Determinant og areal](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger C (~45 %). Fasitens grep: velg rad/kolonne med flest nuller for kofaktorutvikling; bruk radreduksjon for store determinanter; $\det A\ne0$ ⇔ inverterbar. Prioritet: **kunne**, men brukes overalt (karakteristisk likning i Del 5).
- **Innholdskontrakt:** **Determinant** for 2×2 og 3×3; **kofaktorutvikling** langs rad/kolonne (velg med flest nuller); **radoperasjoners virkning** (bytte ⇒ fortegn, skalering ⇒ faktor, adder multiplum ⇒ uendret); **egenskaper**: $\det(AB)=\det A\det B$, $\det A^{T}=\det A$, $\det A^{-1}=1/\det A$, $\det(cA)=c^n\det A$, triangulær ⇒ produkt av diagonalen; **$\det A\ne0$ ⇔ inverterbar** (del av inverterbarhetssetningen); **Cramers regel** (kjennskap/bruk); **$\det A=\prod\lambda_i$** og $\operatorname{spor}A=\sum\lambda_i$ (bro til Del 5). Alt til aktiv bruk; store determinanter reduseres, ikke kofaktoreres blindt.
- **Oppgavesjangre:** C. Mønstereksempel: «Regn ut $\det A$ for en gitt 4×4-matrise ved radreduksjon, og avgjør om $A$ er inverterbar.»
- **Typiske feil:** Fortegnsfeil i kofaktormønsteret $(-1)^{i+j}$; glemmer at radbytte skifter fortegn; bruker $\det(A+B)=\det A+\det B$ (galt); kofaktorutvikler en stor determinant uten å redusere først; regnefeil.
- **Quiz: 18 · Flashcards: 24**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Vektorrom, basis og dimensjon *(prioritet: PERFEKT — Col/Nul/basis/rang ~89 %, abstrakt vektorrom/basis/dim ~82 %; tyngdepunkt; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 3.1: Vektorrom og underrom: ℝⁿ, Pₙ, matriser og funksjonsrom

- **id:** `tma4110-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-1-2`
- **kapitteltype:** teori
- **description:** Løftet fra ℝⁿ til abstrakte vektorrom: de åtte aksiomene, underrom via de tre betingelsene, og de eksamensviktige familiene — polynomrommet Pₙ, matriserommet og funksjonsrom. Grunnmuren under 82 %-søylen.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Konkret vektorrom fra [Vektorer i tre dimensjoner](/bok/r2/r2-5-1); polynomer fra [Polynomfunksjoner](/bok/r1/r1-1-1).
- **Eksamensbelegg:** Sjanger D, **~82 %** — hvert sett har en oppgave i et ikke-$\mathbb R^n$-rom eller et underrom å verifisere. Fasitens grep: vis underrom via de tre betingelsene ($\mathbf 0\in W$, lukket under $+$, lukket under skalar). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Vektorromsaksiomene** (de åtte, presentert som «regler du kjenner fra $\mathbb R^n$, nå abstrakt»); **underrom** via de **tre betingelsene** og sjekkprosedyren; **polynomrommet** $\operatorname{P}_n$ (grad $\le n$) med standardbasis $\{1,t,\dots,t^n\}$ og $\dim\operatorname{P}_n=n+1$; **matriserommet** $M_{m\times n}$; **funksjonsrom** som underrom av $C(\mathbb R)$; typiske underrom å verifisere ($W=\{p\in\operatorname{P}_3:p(1)=0\}$, $\{A:A^{T}=A\}$, løsningsrommet til et homogent system); hvorfor delmengder uten $\mathbf 0$ eller uten lukkethet (f.eks. $\{p:p(0)=1\}$) IKKE er underrom. Alt til aktiv bruk (underrom-bevis er fast, sjanger N).
- **Oppgavesjangre:** D/N. Mønstereksempel: «Vis at $W=\{p\in\operatorname{P}_3:p(1)=0\}$ er et underrom av $\operatorname{P}_3$, og finn dimensjonen.»
- **Typiske feil:** **Hopper over en av de tre betingelsene** (dokumentert felle); glemmer å sjekke $\mathbf 0\in W$; forveksler «delmengde» og «underrom»; behandler $\operatorname{P}_n$ som $\dim=n$ (det er $n+1$); antar ethvert sett funksjoner er et vektorrom.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 3.2: Lineær uavhengighet, span og basis

- **id:** `tma4110-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-3-1`
- **kapitteltype:** teori
- **description:** Lineær uavhengighet og span i ℝⁿ OG i abstrakte rom (polynomer/matriser), basisbegrepet, og den todelte standarden sensor krever: uavhengighet + riktig antall = dimensjonsargumentet.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 1.1.
- **Eksamensbelegg:** Sjanger D, **~82 %** (byggekloss + lineær uavhengighet i abstrakt rom ~18 %). Fasitens grep: sett lineærkombinasjon $=\mathbf 0$; i $\mathbb R^n$ radreduser, for polynomer sammenlign koeffisienter. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineærkombinasjon** og **span** $\operatorname{Span}\{\mathbf v_1,\dots\}$; **lineær uavhengighet** ($c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0\Rightarrow$ alle $c_i=0$) — i $\mathbb R^n$ via radreduksjon (pivot i hver kolonne), for polynomer via **koeffisientsammenligning**, for funksjoner via evaluering/**Wronski-determinanten** (kjennskap); **basis** = uavhengig + utspenner; **dimensjonsargumentet** («$k$ uavhengige vektorer i et $k$-dim rom er en basis»); koordinat-uavhengighet (uavhengig i $V$ ⇔ koordinatvektorene uavhengige i $\mathbb R^n$, bro til 3.4). Alt til aktiv bruk (basisbevis er fast).
- **Oppgavesjangre:** D. Mønstereksempel: «Avgjør om $\{1+t,\,t+t^2,\,1+t^2\}$ er en basis for $\operatorname{P}_2$.»
- **Typiske feil:** **Glemmer dimensjonsargumentet** (viser bare uavhengighet ELLER utspenning); regner uavhengighet av polynomer feil; teller dimensjon feil; oppgir en avhengig mengde som basis.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 3.3: Kolonnerom, nullrom, rang og dimensjonsteoremet

- **id:** `tma4110-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4110-3-2`
- **kapitteltype:** teori
- **description:** De fundamentale underrommene fra radreduksjon: basis for Col A (opprinnelige pivotkolonner i A), basis for Nul A (spesielle løsninger), rang, og dimensjonsteoremet rang A + dim Nul A = n — den mest gjentatte lineær-algebra-deloppgaven (89 %).
- **Forkunnskaper (kryssbok):** Kap. 3.2, 1.1 (radreduksjon).
- **Eksamensbelegg:** Sjanger E, **~89 %**. Fasitens grep: fra RREF les $\operatorname{Col}A$-basis = **opprinnelige** pivotkolonner i $A$, $\operatorname{Nul}A$-basis = spesielle løsninger, $\operatorname{rang}A$ = antall pivoter; dimensjonsteoremet som kontroll. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\operatorname{Col}A=\operatorname{Span}\{\text{søyler}\}$ med **basis fra pivotkolonnene i originalmatrisen $A$** (dokumentert felle: ikke de reduserte); $\operatorname{Nul}A=\{\mathbf x:A\mathbf x=\mathbf 0\}$ med **basis fra frie variabler** (spesielle løsninger, én per fri variabel); **$\operatorname{rang}A$** = antall pivoter = $\dim\operatorname{Col}A$; **$\dim\operatorname{Nul}A$** (nullitet) = antall frie variabler; **dimensjonsteoremet** $\operatorname{rang}A+\dim\operatorname{Nul}A=n$ (navngis, brukes som kontroll); $\operatorname{Row}A$-basis = ikke-null-radene i RREF; $\mathbf b\in\operatorname{Col}A$ ⇔ $A\mathbf x=\mathbf b$ løsbar. Alt til aktiv bruk, alt lest av RREF (kode E: for hånd).
- **Oppgavesjangre:** E. Mønstereksempel: «Finn en basis for $\operatorname{Col}A$ (kolonner i $A$) og for $\operatorname{Nul}A$. Oppgi $\operatorname{rang}A$ og kontroller med dimensjonsteoremet.»
- **Typiske feil:** **Feil $\operatorname{Col}A$-basis** — de reduserte pivotkolonnene fra RREF i stedet for de opprinnelige i $A$ (klassisk felle); forveksler $\operatorname{Nul}A$ (frie) og $\operatorname{Col}A$ (pivoter); glemmer dimensjonsteoremet som kontroll; blander dimensjon og antall vektorer.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 3.4: Koordinater relativt en basis og basisskifte

- **id:** `tma4110-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-3-3`
- **kapitteltype:** teori
- **description:** Koordinatvektoren [x]_B relativt en basis, koordinatavbildningen som isomorfi til ℝⁿ, og basisskiftematrisen P_{C←B} som gjør abstrakte problemer (polynomer) til vanlig matriseregning.
- **Forkunnskaper (kryssbok):** Kap. 3.2–3.3.
- **Eksamensbelegg:** Sjanger D/F, **~82 %** som verktøy + basisskifte i lineærtransformasjon-oppgaver. Fasitens grep: uttrykk vektor i koordinater relativt $\mathcal B$, regn i $\mathbb R^n$, oversett tilbake. Prioritet: **perfekt** (koordinater) / **kunne** (basisskifte).
- **Innholdskontrakt:** **Koordinatvektor** $[\mathbf x]_{\mathcal B}$ relativt en ordnet basis; entydigheten; **koordinatavbildningen** $\mathbf x\mapsto[\mathbf x]_{\mathcal B}$ som **isomorfi** $V\to\mathbb R^n$; konsekvensen (uavhengighet/span/dimensjon i $V$ speiles i $\mathbb R^n$); **basisskiftematrisen** $P_{\mathcal C\leftarrow\mathcal B}$ ($[\mathbf x]_{\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}[\mathbf x]_{\mathcal B}$, kolonnene = $\mathcal B$-vektorenes $\mathcal C$-koordinater); **retningen** og inversen $P_{\mathcal B\leftarrow\mathcal C}=(P_{\mathcal C\leftarrow\mathcal B})^{-1}$; eksempler i $\operatorname{P}_n$. Alt til aktiv bruk, med retning som sjekkpunkt.
- **Oppgavesjangre:** D/F. Mønstereksempel: «$\mathcal B=\{1,t,t^2\}$, $\mathcal C=\{1,1+t,1+t+t^2\}$ i $\operatorname{P}_2$. Finn $[3-2t+t^2]_{\mathcal B}$ og $P_{\mathcal C\leftarrow\mathcal B}$.»
- **Typiske feil:** Feil rekkefølge på koordinatene (basis er ordnet); **feil retning** på $P_{\mathcal C\leftarrow\mathcal B}$ (forvekslet med inversen); kolonner fylt med vektorene i stedet for koordinatene; regner i $V$ når koordinater ville forenklet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.5: Drill: underrom, basis, dimensjon og rang

- **id:** `tma4110-3-5` · **number:** 3.5 · **estimatedMinutes:** 90 · **prerequisites:** `tma4110-3-4`
- **kapitteltype:** drill
- **description:** Hele vektorrom-repertoaret drillet: underrom via tre betingelser, basisbevis med dimensjonsargument, Col/Nul/rang fra RREF, koordinater og basisskifte — den 82–89 %-tunge kjernen til automatikk.
- **Eksamensbelegg:** Dekker sjanger D + E samlet (~82–89 %). Variantkatalogen: underrom-verifisering (også $\operatorname{P}_n$/matriser), basisbevis (uavhengighet + dimensjonsargument), $\operatorname{Col}/\operatorname{Nul}$-basis + rang + dimensjonsteorem, koordinater, basisskifte. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) underrom? sjekk de tre betingelsene; (2) basis? vis uavhengighet + dimensjonsargument; (3) $\operatorname{Col}$-basis fra **original**, $\operatorname{Nul}$-basis fra frie, rang fra pivoter, dimensjonsteorem som kontroll; (4) koordinater/basisskifte i riktig retning. Gjennomregnet «vektorrom-case» (samme matrise til $\operatorname{Col}/\operatorname{Nul}$/rang + et abstrakt underrom) med sensor-margnotater (tre betingelser, dimensjonsargument, $\operatorname{Col}$-basis fra original). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** D + E. Mønstereksempel: «(a) Vis at $W=\{A\in M_2:\operatorname{spor}A=0\}$ er et underrom og finn en basis. (b) Finn $\operatorname{Col}A$/$\operatorname{Nul}A$-basis for en gitt matrise.»
- **Typiske feil:** Hele fellekatalogen fra 3.1–3.4 under tidspress; hopper over en underroms-betingelse eller dimensjonsargumentet; $\operatorname{Col}$-basis fra RREF; feil basisskifte-retning.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Lineære transformasjoner *(prioritet: KUNNE — ~38 %)*

#### Kapittel 4.1: Lineære transformasjoner og standardmatrisen

- **id:** `tma4110-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4110-2-1`
- **kapitteltype:** teori
- **description:** Lineære transformasjoner T: ℝⁿ→ℝᵐ, linearitetssjekken, standardmatrisen A=[T(e₁) … T(eₙ)], og de geometriske avbildningene i planet (rotasjon, speiling, projeksjon, skalering).
- **Forkunnskaper (kryssbok):** Kap. 2.1 (matriseprodukt), 3.4 (koordinater).
- **Eksamensbelegg:** Sjanger F, **~38 %**. Fasitens grep: bygg standardmatrisen kolonne for kolonne fra $T(\mathbf e_j)$; komponer avbildninger ved matriseprodukt. Prioritet: **kunne**.
- **Innholdskontrakt:** **Lineær transformasjon** (linearitet: $T(\mathbf u+\mathbf v)=T\mathbf u+T\mathbf v$, $T(c\mathbf u)=cT\mathbf u$); **standardmatrisen** $A=[T(\mathbf e_1)\ \cdots\ T(\mathbf e_n)]$ med $T(\mathbf x)=A\mathbf x$; **geometriske avbildninger** i $\mathbb R^2$ (rotasjon $\left[\begin{smallmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{smallmatrix}\right]$, speiling, ortogonal projeksjon, skalering); **komposisjon** = matriseprodukt; lineær transformasjon på abstrakt rom (bro til 4.2). Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn standardmatrisen til rotasjon $90°$ mot klokka fulgt av speiling om $x$-aksen, og bruk den på $(2,1)$.»
- **Typiske feil:** Sjekker ikke linearitet før «standardmatrise»; feil kolonner ($T(\mathbf e_j)$ i feil rekkefølge); komponerer i feil rekkefølge (matriseprodukt er ikke-kommutativt); forveksler rotasjons- og speilingsmatrise.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.2: Kjerne, bilde og matriserepresentasjon i baser

- **id:** `tma4110-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-4-1`
- **kapitteltype:** teori
- **description:** Kjerne (ker T = Nul A) og bilde (im T = Col A), injektiv/surjektiv via rang, dimensjonsteoremet for transformasjoner, og matrisen [T]_B til en avbildning på et abstrakt rom (særlig derivasjonsoperatoren T(p)=p′).
- **Forkunnskaper (kryssbok):** Kap. 4.1, 3.3–3.4. Derivasjon fra [Derivasjon](/bok/r2/r2-3-1).
- **Eksamensbelegg:** Sjanger F, **~38 %**, ofte koblet til abstrakt vektorrom (Del 3). Fasitens grep: $\ker T=\operatorname{Nul}[T]$, $\operatorname{im}T=\operatorname{Col}[T]$; bygg $[T]_{\mathcal B}$ kolonnevis fra $T(\mathbf b_j)$ i $\mathcal B$-koordinater. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kjerne** $\ker T=\{\mathbf x:T\mathbf x=\mathbf 0\}$ (= $\operatorname{Nul}A$) og **bilde** $\operatorname{im}T$ (= $\operatorname{Col}A$); **injektiv** ⇔ $\ker T=\{\mathbf 0\}$, **surjektiv** ⇔ $\operatorname{im}T=$ hele kodomenet; **dimensjonsteoremet for transformasjoner** $\dim\ker T+\dim\operatorname{im}T=\dim V$; **matriserepresentasjon** $[T]_{\mathcal B}$ (kolonne $j=[T(\mathbf b_j)]_{\mathcal B}$) med $[T\mathbf x]_{\mathcal B}=[T]_{\mathcal B}[\mathbf x]_{\mathcal B}$; **derivasjonsoperatoren** $T(p)=p'$ på $\operatorname{P}_n$; oversettelse av $\ker T$/$\operatorname{Nul}[T]_{\mathcal B}$ tilbake til polynomer. Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «$T:\operatorname{P}_2\to\operatorname{P}_2$, $T(p)=p'$. Finn $[T]_{\mathcal B}$ for $\mathcal B=\{1,t,t^2\}$, $\ker T$ og $\operatorname{im}T$.»
- **Typiske feil:** **$[T]_{\mathcal B}$-kolonner ikke i $\mathcal B$-koordinater**; forveksler injektiv/surjektiv; glemmer dimensjonsteoremet; oversetter ikke $\ker T$ tilbake til funksjoner (lar svaret stå i $\mathbb R^n$).
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---
