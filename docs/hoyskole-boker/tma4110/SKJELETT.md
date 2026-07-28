# Bokskjelett: TMA4110 Lineær algebra, komplekse tall og differensiallikninger (NTNU) — eksamensrettet lærebok

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
   `/<kode>/<id>`-lenke når den finnes)*. Referanser til **bygde** bøker lenkes normalt,
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
- **Forkunnskaper (kryssbok):** Likninger med flere ukjente fra lineære likningssystemer fra VGS (dekkes ikke som eget VGS-kapittel — kap. 1.1 bygger fra grunnen) og vektorer fra [Vektorer i tre dimensjoner](/r2/r2-5-1). Videre matriseregning modnes i Del 2.
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
- **Forkunnskaper (kryssbok):** Kap. 1.1. Matrisebegrep fra matriser (dekkes ikke i VGS-bøkene — kap. 2.1 bygger fra grunnen) modnes her *(NTNU-forkunnskapsemne for utfyllende matriseregning, ikke bygget ennå; aktiver lenke når den finnes)*.
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
- **Forkunnskaper (kryssbok):** Kap. 2.2. Determinant på VGS-nivå fra [Areal og volum med vektorer](/r2/r2-5-5).
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
- **Forkunnskaper (kryssbok):** Kap. 1.1. Konkret vektorrom fra [Vektorer i tre dimensjoner](/r2/r2-5-1); polynomer fra [Polynomer og polynomdivisjon](/r1/r1-1-1).
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
- **Forkunnskaper (kryssbok):** Kap. 4.1, 3.3–3.4. Derivasjon fra [Repetisjon av derivasjon](/r2/r2-2-1).
- **Eksamensbelegg:** Sjanger F, **~38 %**, ofte koblet til abstrakt vektorrom (Del 3). Fasitens grep: $\ker T=\operatorname{Nul}[T]$, $\operatorname{im}T=\operatorname{Col}[T]$; bygg $[T]_{\mathcal B}$ kolonnevis fra $T(\mathbf b_j)$ i $\mathcal B$-koordinater. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kjerne** $\ker T=\{\mathbf x:T\mathbf x=\mathbf 0\}$ (= $\operatorname{Nul}A$) og **bilde** $\operatorname{im}T$ (= $\operatorname{Col}A$); **injektiv** ⇔ $\ker T=\{\mathbf 0\}$, **surjektiv** ⇔ $\operatorname{im}T=$ hele kodomenet; **dimensjonsteoremet for transformasjoner** $\dim\ker T+\dim\operatorname{im}T=\dim V$; **matriserepresentasjon** $[T]_{\mathcal B}$ (kolonne $j=[T(\mathbf b_j)]_{\mathcal B}$) med $[T\mathbf x]_{\mathcal B}=[T]_{\mathcal B}[\mathbf x]_{\mathcal B}$; **derivasjonsoperatoren** $T(p)=p'$ på $\operatorname{P}_n$; oversettelse av $\ker T$/$\operatorname{Nul}[T]_{\mathcal B}$ tilbake til polynomer. Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «$T:\operatorname{P}_2\to\operatorname{P}_2$, $T(p)=p'$. Finn $[T]_{\mathcal B}$ for $\mathcal B=\{1,t,t^2\}$, $\ker T$ og $\operatorname{im}T$.»
- **Typiske feil:** **$[T]_{\mathcal B}$-kolonner ikke i $\mathcal B$-koordinater**; forveksler injektiv/surjektiv; glemmer dimensjonsteoremet; oversetter ikke $\ker T$ tilbake til funksjoner (lar svaret stå i $\mathbb R^n$).
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Egenverdier og diagonalisering *(prioritet: PERFEKT — ~95 %; lineær-algebra-tyngdepunkt; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 5.1: Egenverdier, egenvektorer, karakteristisk likning og egenrom

- **id:** `tma4110-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4110-2-3`, `tma4110-3-3`
- **kapitteltype:** teori
- **description:** Egenverdier og egenvektorer: verifiser en oppgitt egenvektor ved Av=λv, finn egenverdier fra karakteristisk likning det(A−λI)=0, og egenrommet fra Nul(A−λI) ved radreduksjon — pluss algebraisk vs. geometrisk multiplisitet.
- **Forkunnskaper (kryssbok):** Kap. 2.3 (determinant), 3.3 ($\operatorname{Nul}A$). Faktorisering av polynom fra [Polynomer og polynomdivisjon](/r1/r1-1-1).
- **Eksamensbelegg:** Sjanger G, **~95 %** (fast oppgave). Fasitens grep: når egenvektor er oppgitt, verifiser ved **innsetting** $A\mathbf v=\lambda\mathbf v$; ellers karakteristisk likning; egenrom = $\operatorname{Nul}(A-\lambda I)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Egenverdi/egenvektor** ($A\mathbf v=\lambda\mathbf v$, $\mathbf v\ne\mathbf 0$); **verifisering ved innsetting** (foretrukket når $\mathbf v$ er gitt); **karakteristisk likning** $\det(A-\lambda I)=0$ (faktoriser polynomet); **egenrom** $E_\lambda=\operatorname{Nul}(A-\lambda I)$ fra radreduksjon; **algebraisk multiplisitet** (rotmultiplisitet) vs. **geometrisk multiplisitet** ($\dim E_\lambda$), med geo $\le$ alg; kontrollrelasjonene $\operatorname{spor}A=\sum\lambda_i$, $\det A=\prod\lambda_i$; triangulær ⇒ egenverdier på diagonalen; $\lambda=0$ egenverdi ⇔ $A$ singulær; egenverdier for $A^2=A$/$A^k$-oppgaver (bevis-bro: $A^2=A\Rightarrow\lambda\in\{0,1\}$). Alt til aktiv bruk (kode E — karakteristisk likning for 2×2/3×3 for hånd).
- **Oppgavesjangre:** G/N. Mønstereksempel: «Finn egenverdiene til $A=\left[\begin{smallmatrix}2&1&0\\0&2&0\\0&0&3\end{smallmatrix}\right]$ og egenrommet til den minste. Vis at hvis $A^2=A$, er alle egenverdier $0$ eller $1$.»
- **Typiske feil:** Fortegnsfeil i $\det(A-\lambda I)$; glemmer en egenverdi (multiplisitet); forveksler algebraisk og geometrisk multiplisitet; oppgir $\mathbf 0$ som egenvektor; sjekker ikke sum/produkt mot spor/determinant.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 5.2: Diagonalisering A=PDP⁻¹ og diagonaliserbarhetskriteriet

- **id:** `tma4110-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4110-5-1`
- **kapitteltype:** teori
- **description:** Diagonalisering A=PDP⁻¹ og karakterskilleren: BEGRUNN diagonaliserbarhet med multiplisitet eller en navngitt snarvei (distinkt/symmetrisk/triangulær), og vis ikke-diagonaliserbarhet ved et for lite egenrom.
- **Forkunnskaper (kryssbok):** Kap. 5.1.
- **Eksamensbelegg:** Sjanger G, **~95 %**. Fasitens snarveier: $n$ distinkte egenverdier ⇒ diagonaliserbar; symmetrisk ⇒ (ortogonalt) diagonaliserbar (spektralteoremet); triangulær ⇒ egenverdier avlest. For ikke-diagonaliserbar: vis geometrisk < algebraisk. Prioritet: **perfekt** (multiplisitetsbegrunnelsen er selve karakterskilleren).
- **Innholdskontrakt:** **Diagonalisering** $A=PDP^{-1}$ ($P$ = egenvektorer som kolonner, $D$ = egenverdier på diagonalen, **matchet søyle for søyle**); **diagonaliserbarhetskriteriet** ($A$ er $n\times n$ diagonaliserbar ⇔ summen av geometriske multiplisiteter $=n$ ⇔ geo = alg for hver egenverdi); **snarveiene** (navngis): $n$ distinkte ⇒ diagonaliserbar, symmetrisk ⇒ ortogonalt diagonaliserbar, triangulær ⇒ egenverdier avlest; **ikke-diagonaliserbarhet** vist ved geometrisk $<$ algebraisk (et egenrom for lite); parameteravhengige matriser (for hvilke $\alpha$ diagonaliserbar). Alt til aktiv bruk; **hver konklusjon begrunnes**.
- **Oppgavesjangre:** G. Mønstereksempel: «Avgjør (uten å finne $P$) om $A$ og $B$ er diagonaliserbare. Begrunn med multiplisitet eller en navngitt snarvei; finn ellers $P$ og $D$.»
- **Typiske feil:** **Diagonaliserbarhet påstått uten multiplisitetssjekk** (dokumentert felle); $P$ og $D$ ikke matchet søyle for søyle; sier «ikke diagonaliserbar» uten å vise hvilket egenrom som er for lite; glemmer symmetrisk/distinkt-snarveien.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 5.3: Potenser Aⁿ, Markov-matriser og langtidsoppførsel

- **id:** `tma4110-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-5-2`
- **kapitteltype:** teori
- **description:** Potenser Aⁿ=PDⁿP⁻¹, polynom i A (samme P), stokastiske/Markov-matriser og langtidsgrensen lim Aⁿx via egenvektordekomponering — et elegant og gjentatt grep, og bevis-bro for nilpotens.
- **Forkunnskaper (kryssbok):** Kap. 5.2.
- **Eksamensbelegg:** Sjanger G, **~95 % (potens/$A^n$)** + Markov ~33 %. Fasitens grep: $A^n=PD^nP^{-1}$ (egenverdier $\lambda^n$, samme $P$); $\lim A^n\mathbf x$ ved å dekomponere $\mathbf x=\sum c_i\mathbf v_i$. Prioritet: **perfekt** ($A^n$) / **kunne** (Markov).
- **Innholdskontrakt:** **Potenser** $A^n=PD^nP^{-1}$; **polynom i $A$**: hvis $A\mathbf v=\lambda\mathbf v$ så $q(A)\mathbf v=q(\lambda)\mathbf v$, samme $P$; **langtidsgrense** $\lim_{n\to\infty}A^n\mathbf x=\sum c_i\lambda_i^n\mathbf v_i$ (ledd med $|\lambda|<1$ dør ut, $\lambda=1$ gir stasjonær komponent); **stokastiske/Markov-matriser** (kolonnesum $=1$ ⇒ egenverdi $1$; stasjonær fordeling); **nilpotens** ($A^k=O$ ⇒ alle egenverdier $0$, bevis-bro til $(I-A)^{-1}=I+A+\dots$); Cayley–Hamilton (kjennskap). Alt til aktiv bruk.
- **Oppgavesjangre:** G/N. Mønstereksempel: «Gitt en Markov-matrise $P$: finn den stasjonære fordelingen og $\lim P^n\mathbf x_0$. Vis at hvis $A^3=O$, er alle egenverdier $0$.»
- **Typiske feil:** Regner $A^n$ direkte i stedet for via $PD^nP^{-1}$; feil $P$ for $q(A)$; glemmer at $|\lambda|<1$-ledd dør ut; finner ikke egenverdi $1$ for stokastisk matrise; feil normalisering av stasjonær fordeling.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.4: Komplekse egenverdier

- **id:** `tma4110-5-4` · **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** `tma4110-5-1`, `tma4110-7-2`
- **kapitteltype:** teori
- **description:** Når karakteristisk likning har komplekse røtter: kompleks-konjugerte egenverdier og egenvektorer, rotasjons-skalerings-tolkningen, og broen til komplekse tall (Del 7) og ODE-systemer med svingninger (Del 10).
- **Forkunnskaper (kryssbok):** Kap. 5.1 og Del 7 (komplekse tall, polarform). Komplekse tall fra komplekse tall (dekkes ikke i VGS-bøkene LK20 — Del 7 bygger fra grunnen).
- **Eksamensbelegg:** Sjanger G, del av ~95 %-egenverdioppgaven når røttene er komplekse; forkunnskap for ODE-system (Del 10). Fasitens grep: løs karakteristisk likning over $\mathbb C$, egenverdier og egenvektorer opptrer i konjugerte par. Prioritet: **kunne**, men nødvendig bro.
- **Innholdskontrakt:** **Komplekse egenverdier** $\lambda=a\pm bi$ som konjugerte par for reell $A$; **komplekse egenvektorer** (også konjugerte par); det reelle 2×2-tilfellet $\left[\begin{smallmatrix}a&-b\\b&a\end{smallmatrix}\right]$ som skalering ($r=\sqrt{a^2+b^2}$) + rotasjon ($\theta=\arg(a+bi)$); at reell diagonalisering er umulig, men kompleks diagonalisering finnes; sammenheng med spor/determinant. Bro til Del 10 (svingende løsninger). Alt til aktiv bruk.
- **Oppgavesjangre:** G/J. Mønstereksempel: «Finn de (komplekse) egenverdiene og egenvektorene til $A=\left[\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right]$, og tolk $A$ geometrisk.»
- **Typiske feil:** Glemmer at komplekse egenverdier for reell matrise opptrer i konjugerte par; regnefeil i kompleks aritmetikk; feil $\arg$/modulus i rotasjons-skalerings-tolkningen; prøver reell diagonalisering der bare kompleks finnes.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.5: Drill: egenverdi- og diagonaliseringskjeden

- **id:** `tma4110-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `tma4110-5-4`
- **kapitteltype:** drill
- **description:** Egenverdi-repertoaret drillet: verifiser egenvektor → karakteristisk likning → egenrom → begrunn diagonaliserbarhet med multiplisitet/snarvei → bygg P og D matchet → Aⁿ/Markov/komplekse egenverdier.
- **Eksamensbelegg:** Dekker sjanger G samlet (~95 %). Variantkatalogen: verifiser oppgitt egenvektor, egenverdier/egenrom fra karakteristisk likning, diagonaliserbarhet begrunnet, ikke-diagonaliserbar (for lite egenrom), $A^n$/$q(A)$ med samme $P$, Markov-stasjonær, komplekse egenverdier. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) egenvektor oppgitt? verifiser ved innsetting; (2) egenverdier via $\det(A-\lambda I)=0$; (3) egenrom = $\operatorname{Nul}(A-\lambda I)$; (4) **begrunn diagonaliserbarhet** (navngitt snarvei/multiplisitet); (5) bygg $P/D$ matchet, eller $A^n=PD^nP^{-1}$/Markov-grense. Gjennomregnet «egenverdi-case» (matrise med én multiplisitet: begrunn + $A^n$) med sensor-margnotater om multiplisitetsbegrunnelse og $P/D$-matching. 12–15 oppgaver på eksamensnivå: minst én egenvektor-verifisering, én diagonaliserbarhets-begrunnelse, én ikke-diagonaliserbar, én $A^n$/Markov, én kompleks.
- **Oppgavesjangre:** G. Mønstereksempel: «Egenverdiene til $A$ er $2,2,5$. Er $A$ diagonaliserbar? Begrunn med egenrommenes dimensjon, og finn i så fall $P,D$ og $A^n$.»
- **Typiske feil:** Hele fellekatalogen fra 5.1–5.4 under tidspress; diagonaliserbarhet uten multiplisitetsbegrunnelse; $P/D$ feilmatchet; regnefeil i karakteristisk polynom.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Indreprodukt, ortogonalitet og minste kvadrater *(prioritet: PERFEKT — Gram–Schmidt/projeksjon ~80 %, minste kvadrater ~47 %)*

#### Kapittel 6.1: Indreprodukt, norm og ortogonalitet

- **id:** `tma4110-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-3-2`
- **kapitteltype:** teori
- **description:** Prikkproduktet i ℝⁿ og indreprodukt som abstrakt begrep, norm, avstand, ortogonalitet og de nyttige ulikhetene — grunnlaget for Gram–Schmidt og projeksjon, med en advarsel om ikke-standard indreprodukt.
- **Forkunnskaper (kryssbok):** Kap. 3.2. Prikkprodukt fra [Skalarproduktet](/r2/r2-5-3); integral (ved integral-indreprodukt) fra [Ubestemt integral](/r2/r2-2-2).
- **Eksamensbelegg:** Sjanger H-grunnlag, **~80 %**. Fasitens grep: alle skalarprodukt/normer regnes i det **oppgitte** indreproduktet. Prioritet: **perfekt** (grunnlag).
- **Innholdskontrakt:** **Prikkprodukt** $\mathbf u\cdot\mathbf v=\sum u_iv_i$; **indreprodukt** $\langle\cdot,\cdot\rangle$ (aksiomer: symmetri, linearitet, positiv definitthet); eksempler: standard, **vektet** $\sum w_ix_iy_i$, **integral** $\int_a^b p(t)q(t)\,dt$ på $\operatorname{P}_n$; **norm** $\|\mathbf v\|=\sqrt{\langle\mathbf v,\mathbf v\rangle}$; **avstand** $\|\mathbf u-\mathbf v\|$; **ortogonalitet** $\langle\mathbf u,\mathbf v\rangle=0$; Pytagoras ($\|\mathbf u+\mathbf v\|^2=\|\mathbf u\|^2+\|\mathbf v\|^2$ ved ortogonalitet); Cauchy–Schwarz og trekantulikheten (kjennskap); vinkel mellom vektorer. Alt til aktiv bruk, med understreking av at indreproduktet må være det oppgitte.
- **Oppgavesjangre:** H. Mønstereksempel: «I $\mathbb R^3$: finn vinkelen mellom $(1,2,2)$ og $(2,0,1)$, og en vektor ortogonal på begge.»
- **Typiske feil:** Bruker standard prikkprodukt der oppgaven har oppgitt et annet indreprodukt; glemmer kvadratrota i normen; regnefeil i integral-indreproduktet; feil vinkelformel.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 6.2: Ortogonale mengder og Gram–Schmidt

- **id:** `tma4110-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-6-1`
- **kapitteltype:** teori
- **description:** Gram–Schmidt-prosessen som gjør en hvilken som helst basis om til en ortogonal (eller ortonormal) basis, med heltalls-oppskalering underveis slik fasiten gjør — den 80 %-sikre sjangeren.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 3.3 ($\operatorname{Col}A$-basis).
- **Eksamensbelegg:** Sjanger H, **~80 %**. Fasitens grep: $\mathbf v_1=\mathbf a_1$, $\mathbf v_k=\mathbf a_k-\sum_{i<k}\frac{\langle\mathbf a_k,\mathbf v_i\rangle}{\langle\mathbf v_i,\mathbf v_i\rangle}\mathbf v_i$; skalér til heltall underveis; normaliser ved behov. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ortogonal mengde** (parvis ortogonale ⇒ uavhengig); **ortonormal basis** ($\langle\mathbf u_i,\mathbf u_j\rangle=\delta_{ij}$); koordinater relativt ortogonal basis (Fourier-koeffisienter $\frac{\langle\mathbf y,\mathbf v_i\rangle}{\langle\mathbf v_i,\mathbf v_i\rangle}$); **Gram–Schmidt-prosessen** (formelen ledd for ledd med intuisjon: trekk fra projeksjonen på det allerede ortogonaliserte); **heltalls-oppskalering**; **normalisering** til ortonormal; Gram–Schmidt også i ikke-standard indreprodukt (integral på $\operatorname{P}_n$). Alt til aktiv bruk (kode E — formelen utenat).
- **Oppgavesjangre:** H. Mønstereksempel: «Finn en ortogonal basis for $\operatorname{Span}\{(1,1,0),(1,0,1),(0,1,1)\}$ ved Gram–Schmidt, og normaliser.»
- **Typiske feil:** Deler ikke på $\langle\mathbf v_i,\mathbf v_i\rangle$; bruker $\mathbf a$-vektorene i stedet for de ortogonaliserte $\mathbf v$-ene i senere steg; normaliserer med feil norm; regnefeil uten heltalls-oppskalering.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.3: Ortogonal projeksjon og ortogonalt komplement

- **id:** `tma4110-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-6-2`
- **kapitteltype:** teori
- **description:** Ortogonal projeksjon proj_W y på et underrom, dekomposisjonen y=ŷ+z, ortogonalt komplement W⊥ og korteste-avstand-egenskapen — kjernen i minste kvadrater.
- **Forkunnskaper (kryssbok):** Kap. 6.2.
- **Eksamensbelegg:** Sjanger H, **~80 %** (ofte kjedet med Gram–Schmidt og minste kvadrater). Fasitens grep: med ortogonal basis $\operatorname{proj}_W\mathbf y=\sum\frac{\langle\mathbf y,\mathbf v_i\rangle}{\langle\mathbf v_i,\mathbf v_i\rangle}\mathbf v_i$; avstand $=\|\mathbf y-\operatorname{proj}_W\mathbf y\|$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ortogonal projeksjon** $\operatorname{proj}_W\mathbf y$ (formel med ortogonal basis); **ortogonal dekomposisjon** $\mathbf y=\hat{\mathbf y}+\mathbf z$ ($\hat{\mathbf y}\in W$, $\mathbf z\in W^{\perp}$, entydig); **ortogonalt komplement** $W^{\perp}$ og $\dim W+\dim W^{\perp}=n$; **beste tilnærmingssetning** ($\operatorname{proj}_W\mathbf y$ er punktet i $W$ nærmest $\mathbf y$); avstand fra punkt til underrom; sammenhengen $(\operatorname{Col}A)^{\perp}=\operatorname{Nul}A^{T}$ (bro til minste kvadrater). Alt til aktiv bruk.
- **Oppgavesjangre:** H. Mønstereksempel: «La $W=\operatorname{Span}\{(1,1,0),(1,-1,0)\}$. Finn $\operatorname{proj}_W(2,3,4)$, dekomposisjonen $\mathbf y=\hat{\mathbf y}+\mathbf z$, og avstanden fra $(2,3,4)$ til $W$.»
- **Typiske feil:** Bruker projeksjonsformelen uten ortogonal basis (må ortogonalisere først); glemmer å dele på $\langle\mathbf v_i,\mathbf v_i\rangle$; feil avstand (glemmer kvadratrot); forveksler $\hat{\mathbf y}$ og $\mathbf z$.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.4: Minste kvadraters metode og normallikningene

- **id:** `tma4110-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-6-3`
- **kapitteltype:** teori
- **description:** Minste kvadraters løsning av et overbestemt system via normallikningene AᵀA x̂=Aᵀb, koblingen til ortogonal projeksjon, og anvendelsen: tilpasse en rett linje eller kurve til datapunkter.
- **Forkunnskaper (kryssbok):** Kap. 6.3, 2.2 (invers).
- **Eksamensbelegg:** Sjanger I, **~47 %** (økende i moderne sett). Fasitens grep: sett opp $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$, løs; ved rangdefekt gir det en affin løsningsmengde. Prioritet: **kunne**, men hyppig og lettjent når projeksjon sitter.
- **Innholdskontrakt:** **Minste kvadraters problem** (overbestemt $A\mathbf x=\mathbf b$ uten løsning ⇒ minimer $\|\mathbf b-A\mathbf x\|$); **normallikningene** $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$; koblingen $A\hat{\mathbf x}=\operatorname{proj}_{\operatorname{Col}A}\mathbf b$; **entydig løsning** ⇔ kolonnene i $A$ uavhengige ($A^{T}A$ inverterbar), ellers affin; **kurvetilpasning** (rett linje $y=c_0+c_1x$, polynom) ved å sette opp $A$ og $\mathbf b$ fra datapunkter; residual $\|\mathbf b-A\hat{\mathbf x}\|$; bevis-bro ($A$ inverterbar ⇔ $A^{T}A$ inverterbar). Alt til aktiv bruk (navngi normallikningene).
- **Oppgavesjangre:** I/N. Mønstereksempel: «Finn den rette linja $y=c_0+c_1x$ som best tilpasser punktene $(0,1),(1,1),(2,4),(3,4)$ ved minste kvadrater. Vis at $A^{T}A$ er inverterbar når kolonnene i $A$ er uavhengige.»
- **Typiske feil:** Setter opp $A$/$\mathbf b$ feil fra datapunktene; regnefeil i $A^{T}A$; antar entydig løsning ved rangdefekt (glemmer affin); forveksler residual og løsning; bruker ikke normallikningene ved navn.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.5: Drill: Gram–Schmidt, projeksjon og minste kvadrater

- **id:** `tma4110-6-5` · **number:** 6.5 · **estimatedMinutes:** 85 · **prerequisites:** `tma4110-6-4`
- **kapitteltype:** drill
- **description:** Ortogonalitetsapparatet drillet som én kjede: identifiser indreproduktet → Gram–Schmidt → ortogonal projeksjon/avstand → minste kvadrater via normallikningene, ofte på samme matrise.
- **Eksamensbelegg:** Dekker sjanger H + I samlet (~80 % + 47 %). Variantkatalogen: indreprodukt/norm/ortogonalitet, Gram–Schmidt (standard + integral), projeksjon + dekomposisjon + avstand, minste kvadrater + kurvetilpasning. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **identifiser indreproduktet**; (2) Gram–Schmidt til ortogonal basis; (3) projeksjon/avstand med den ortogonale basisen; (4) minste kvadrater via $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$ (affin ved rangdefekt). Gjennomregnet «ortogonalitets-case» (samme matrise til Gram–Schmidt → projeksjon → minste kvadrater) med sensor-margnotater (ortogonal basis før projeksjon, normallikningene ved navn). 12–15 oppgaver på eksamensnivå: minst én Gram–Schmidt, én projeksjon/avstand, én minste kvadrater, én kurvetilpasning, én kjedet.
- **Oppgavesjangre:** H + I. Mønstereksempel: «(a) Gram–Schmidt på kolonnene i $A$. (b) $\operatorname{proj}_{\operatorname{Col}A}\mathbf b$ og avstanden. (c) Minste kvadraters løsning av $A\mathbf x=\mathbf b$.»
- **Typiske feil:** Projeksjon uten ortogonal basis; feil indreprodukt; affin løsning glemt ved rangdefekt; regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Komplekse tall (elementære) *(prioritet: PERFEKT — ~95 %, fast oppgave 1)*

#### Kapittel 7.1: Kartesisk form: regning, konjugat og modulus

- **id:** `tma4110-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Komplekse tall på kartesisk form z=x+iy: addisjon, multiplikasjon, divisjon (utvid med konjugat), konjugat z̄, modulus |z|, og det komplekse planet — grunnlaget for den 95 %-sikre komplekstall-oppgaven.
- **Forkunnskaper (kryssbok):** Andregradslikninger fra [Andregradslikninger - faktorisering](/1t/1t-2-2); komplekse tall introduseres i komplekse tall (dekkes ikke i VGS-bøkene LK20 — Del 7 bygger fra grunnen).
- **Eksamensbelegg:** Sjanger J-grunnlag, **~95 %**. Fasitens grep: divisjon ved å utvide med konjugatet av nevneren; $|z|^2=z\bar z$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kartesisk form** $z=x+iy$, real- og imaginærdel; **aritmetikk** (addisjon, multiplikasjon med $i^2=-1$, **divisjon** ved å utvide med konjugatet); **konjugat** $\bar z=x-iy$ med reglene $\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\bar w$, $z\bar z=|z|^2$; **modulus** $|z|=\sqrt{x^2+y^2}$ med $|zw|=|z||w|$; det **komplekse planet** (Argand-diagram), plassering av $z$, $\bar z$, $-z$; geometriske steder ($|z-a|=r$ sirkel, $|z-a|=|z-b|$ midtnormal). Alt til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «Skriv $\frac{3+i}{1-2i}$ på formen $x+iy$, og finn $|z|$ og $\bar z$.»
- **Typiske feil:** Glemmer å utvide med konjugatet ved divisjon; fortegnsfeil i $\bar z$; regner $|z|$ uten kvadratrot; forveksler $z\bar z$ ($=|z|^2$, reell) med $z^2$.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 7.2: Polar form, Eulers formel og de Moivres formel

- **id:** `tma4110-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-7-1`
- **kapitteltype:** teori
- **description:** Polar/eksponentialform z=r(cos θ+i sin θ)=re^{iθ}, Eulers formel, multiplikasjon/divisjon i polar form, og de Moivres formel for potenser — motoren bak røtter og binomiske likninger.
- **Forkunnskaper (kryssbok):** Kap. 7.1. Trigonometri (eksakte verdier) fra [Trigonometriske funksjoner og grafer](/r2/r2-4-7).
- **Eksamensbelegg:** Sjanger J, **~95 %**. Fasitens grep: konverter til polar, bruk de Moivre for potenser, $r_1e^{i\theta_1}\cdot r_2e^{i\theta_2}=r_1r_2e^{i(\theta_1+\theta_2)}$. Prioritet: **perfekt** (kode E — de Moivre og eksakte trig-verdier utenat).
- **Innholdskontrakt:** **Polar form** $z=r(\cos\theta+i\sin\theta)$ med $r=|z|$, $\theta=\arg z$ (bestem riktig kvadrant); **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$ og **eksponentialform** $z=re^{i\theta}$; **multiplikasjon/divisjon** i polar (modulus ganges/deles, argument adderes/subtraheres); **de Moivres formel** $z^n=r^n(\cos n\theta+i\sin n\theta)=r^ne^{in\theta}$; kartesisk↔polar-konvertering med eksakte verdier ($e^{i\pi/2}=i$, $e^{i\pi}=-1$); anvendelse på trig-identiteter (kjennskap). Alt til aktiv bruk (utenat: enhetssirkelens eksakte vinkler).
- **Oppgavesjangre:** J. Mønstereksempel: «Skriv $z=-1+i$ på polarform og regn ut $z^{6}$ ved de Moivres formel. Gi svaret på kartesisk form.»
- **Typiske feil:** Feil kvadrant for $\arg z$ (glemmer $+\pi$); bruker $\tan^{-1}$ ukritisk; regnefeil i $r^n$; feil eksakte trig-verdier (kode E — må kunnes); blander grader og radianer.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 7.3: Komplekse røtter og likninger (zⁿ=c, annen- og tredjegrad)

- **id:** `tma4110-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-7-2`
- **kapitteltype:** teori
- **description:** n-te røtter av et komplekst tall (jevnt fordelt på en sirkel), binomiske likninger zⁿ=c, og komplekse annen-/tredjegradslikninger via abc-formel og faktorisering — den klassiske komplekstall-oppgaven.
- **Forkunnskaper (kryssbok):** Kap. 7.2.
- **Eksamensbelegg:** Sjanger J, **~95 %** (binomiske likninger `zⁿ=c` er den mest gjentatte). Fasitens grep: skriv $c$ på polarform, ta $n$-te rot av modulus, del argumentet, legg til $2\pi k/n$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **$n$-te røtter** av $c=Re^{i\varphi}$: $z_k=R^{1/n}e^{i(\varphi+2\pi k)/n}$, $k=0,\dots,n-1$ (jevnt fordelt på sirkel med radius $R^{1/n}$); **binomiske likninger** $z^n=c$ (alle $n$ løsninger, skisse i planet); **komplekse annengradslikninger** $az^2+bz+c=0$ via abc-formel (kompleks kvadratrot); **tredjegrad** ved å gjette/finne én rot og polynomdividere; **konjugatrot-setningen** (reelle koeffisienter ⇒ komplekse røtter i konjugerte par); faktorisering av polynom over $\mathbb C$. Alt til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «Løs likningen $z^4=-16$. Skriv alle fire løsningene på kartesisk form og skissér dem i det komplekse planet.»
- **Typiske feil:** Finner bare én rot (glemmer $2\pi k/n$); feil radius $R^{1/n}$; feil startargument; glemmer at reell koeffisient gir konjugerte par; regnefeil i kompleks abc.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 7.4: Drill: komplekse tall

- **id:** `tma4110-7-4` · **number:** 7.4 · **estimatedMinutes:** 80 · **prerequisites:** `tma4110-7-3`
- **kapitteltype:** drill
- **description:** Komplekstall-repertoaret drillet: kartesisk aritmetikk → polar/de Moivre → n-te røtter og zⁿ=c → komplekse likninger — den 95 %-sikre oppgave-1-sjangeren til automatikk.
- **Eksamensbelegg:** Dekker sjanger J samlet (~95 %). Variantkatalogen: aritmetikk/divisjon/konjugat, kartesisk↔polar, de Moivre-potenser, $n$-te røtter, $z^n=c$, komplekse annen-/tredjegradslikninger, geometriske steder. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) hvilken form er enklest (kartesisk for $+/-$, polar for $\times/\div$/potens/rot)? (2) konverter; (3) bruk de Moivre for potenser, rot-formelen for røtter; (4) skriv alle løsninger, skissér. Gjennomregnet «komplekstall-case» ($z^n=c$ komplett med skisse) med sensor-margnotater (alle røtter, riktig kvadrant, eksakt svar). 12–15 oppgaver på eksamensnivå: minst to aritmetikk/polar, tre $z^n=c$/røtter, to komplekse likninger, ett geometrisk sted.
- **Oppgavesjangre:** J. Mønstereksempel: «(a) Skriv $(1+i)^{10}$ på kartesisk form. (b) Løs $z^3=8i$. (c) Løs $z^2-(3+i)z+(2+2i)=0$.»
- **Typiske feil:** Hele fellekatalogen fra 7.1–7.3 under tidspress; mangler røtter; feil kvadrant; desimalsvar (kode E — eksakt).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Differensiallikninger av 1. orden *(prioritet: KJENNE/KUNNE — grunnlag for 2. orden og systemer)*

#### Kapittel 8.1: Separable differensiallikninger og initialverdiproblem

- **id:** `tma4110-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Første ordens separable differensiallikninger y′=f(x)g(y): separer variablene, integrer begge sider, løs for y, og bestem konstanten fra en initialbetingelse — pluss konstantløsningene g(y)=0.
- **Forkunnskaper (kryssbok):** Integrasjonsteknikk fra [Ubestemt integral](/r2/r2-2-2); separable difflikninger på VGS-nivå fra [Separable differensiallikninger](/s2/s2-2-2).
- **Eksamensbelegg:** Sjanger K-grunnlag. Ærlig eksamensvinkel: 1. orden er sjelden en egen tung oppgave, men er nødvendig forkunnskap for Del 9–10 og forekommer som deloppgave. Fasitens grep: separer, integrer, løs for $y$, sjekk konstantløsninger. Prioritet: **kjenne**.
- **Innholdskontrakt:** Hva en løsning av en ODE er (verifikasjon ved innsetting); **retningsfelt** (kjennskap); **separable likninger** $y'=f(x)g(y)$ → separer $\frac{dy}{g(y)}=f(x)\,dx$, integrer begge sider, løs for $y$; **konstantløsninger** ($g(y)=0$); **initialverdiproblem** (bestem integrasjonskonstanten fra $y(x_0)=y_0$); eksistens/entydighet (kort, kjennskap); enkle modeller (eksponentiell vekst/henfall). Alt til aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «Løs initialverdiproblemet $y'=xy^2$, $y(0)=1$, og oppgi definisjonsintervallet.»
- **Typiske feil:** Glemmer integrasjonskonstanten (eller å bestemme den fra IVP); glemmer konstantløsningene $g(y)=0$; deler på $g(y)$ uten å nevne $g(y)=0$-tilfellet; integrasjonsfeil.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 8.2: Lineære 1. ordens differensiallikninger og integrerende faktor

- **id:** `tma4110-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-8-1`
- **kapitteltype:** teori
- **description:** Lineære første ordens likninger y′+p(x)y=q(x) løst med integrerende faktor μ=e^{∫p dx}, generell løsning som homogen + partikulær, og anvendelser (blanding, avkjøling, kretser).
- **Forkunnskaper (kryssbok):** Kap. 8.1. Lineære difflikninger fra [Lineære differensiallikninger](/s2/s2-2-3).
- **Eksamensbelegg:** Sjanger K. Fasitens grep: gang med integrerende faktor $\mu=e^{\int p\,dx}$, gjenkjenn venstresida som $(\mu y)'$, integrer. Prioritet: **kunne** (fast metode, kan være deloppgave).
- **Innholdskontrakt:** **Lineær 1. ordens** $y'+p(x)y=q(x)$; **integrerende faktor** $\mu(x)=e^{\int p(x)\,dx}$; metoden ($\mu y)'=\mu q$ ⇒ $y=\frac{1}{\mu}\int\mu q\,dx$); **generell løsning** = homogen ($Ce^{-\int p\,dx}$) + partikulær; **initialverdi**; **modeller** (Newtons avkjølingslov, blandingstank, RL-krets); struktur $y=y_h+y_p$ (bro til 2. orden). Alt til aktiv bruk (kode E — integrerende faktor utenat).
- **Oppgavesjangre:** K. Mønstereksempel: «Løs $y'+2y=e^{-x}$ med $y(0)=3$ ved integrerende faktor.»
- **Typiske feil:** Feil integrerende faktor (feil fortegn i $\int p$); glemmer konstanten før IVP; deler ikke hele høyresida på $\mu$; forveksler homogen og partikulær løsning; integrasjonsfeil.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

---

### Del 9 — Differensiallikninger av 2. orden *(prioritet: PERFEKT — 2. ordens lineær ODE ~82 %)*

#### Kapittel 9.1: Homogene 2. ordens med konstante koeffisienter: karakteristisk likning

- **id:** `tma4110-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-7-2`
- **kapitteltype:** teori
- **description:** Homogene y″+py′+qy=0: karakteristisk likning r²+pr+q=0 og de tre tilfellene — reelle ulike røtter, dobbel rot (med xe^{rx}), og kompleks-konjugerte røtter (med e^{ax}(cos bx, sin bx) via Eulers formel).
- **Forkunnskaper (kryssbok):** Kap. 7.2 (Eulers formel, komplekse tall). Andregradslikninger fra [Andregradslikninger - faktorisering](/1t/1t-2-2).
- **Eksamensbelegg:** Sjanger L, **~82 %**. Fasitens grep: sett opp karakteristisk likning, finn røttene, velg riktig løsningsform blant de tre tilfellene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Homogen lineær 2. ordens** $y''+py'+qy=0$; **karakteristisk likning** $r^2+pr+q=0$; **tre tilfeller**: (i) reelle ulike $r_1\ne r_2$ ⇒ $y=C_1e^{r_1x}+C_2e^{r_2x}$; (ii) **dobbel rot** $r$ ⇒ $y=(C_1+C_2x)e^{rx}$; (iii) **kompleks-konjugerte** $r=a\pm bi$ ⇒ $y=e^{ax}(C_1\cos bx+C_2\sin bx)$ (via Eulers formel); **superposisjonsprinsippet** og **lineær uavhengighet** av løsninger (Wronski-determinanten, fundamentalt løsningssett); initialverdi- og randverdiproblem; dimensjon 2 på løsningsrommet. Alt til aktiv bruk (kode E — de tre formene utenat).
- **Oppgavesjangre:** L. Mønstereksempel: «Løs $y''-4y'+13y=0$ med $y(0)=1$, $y'(0)=0$.»
- **Typiske feil:** Velger feil løsningsform (glemmer $x$-faktoren ved dobbel rot; feil $e^{ax}(\cos,\sin)$-form ved komplekse røtter); feil fortegn i karakteristisk likning; bruker bare én konstant; feil ved IVP (deriverer feil).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 9.2: Inhomogene likninger: ubestemte koeffisienter og resonans

- **id:** `tma4110-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4110-9-1`
- **kapitteltype:** teori
- **description:** Inhomogene y″+py′+qy=g(x): generell løsning y=y_h+y_p, metoden med ubestemte koeffisienter (ansatser for polynom, eksponential, sin/cos), og resonansregelen der ansatsen ganges med x^s når den kolliderer med den homogene løsningen.
- **Forkunnskaper (kryssbok):** Kap. 9.1.
- **Eksamensbelegg:** Sjanger L, **~82 %** (resonans er dokumentert felle). Fasitens grep: løs homogen først, velg ansats etter $g(x)$, gang med $x^s$ ved resonans, sett inn og bestem koeffisientene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Struktur** $y=y_h+y_p$; **ubestemte koeffisienter** — ansatser: polynom $g$ ⇒ polynom-ansats, $g=e^{\alpha x}$ ⇒ $Ae^{\alpha x}$, $g=\cos\beta x/\sin\beta x$ ⇒ $A\cos\beta x+B\sin\beta x$, produkter/summer tilsvarende; **resonansregelen** (når ansatsen løser den homogene likningen, gang med $x^s$ der $s$ = multiplisiteten til den kolliderende roten); sett inn i likningen og løs for koeffisientene; **superposisjon** for sammensatt $g$; initialverdi bestemmes ETTER at $y_p$ er funnet. Alt til aktiv bruk.
- **Oppgavesjangre:** L. Mønstereksempel: «Finn den generelle løsningen av $y''-3y'+2y=e^{2x}$ (merk resonans), og deretter løsningen med $y(0)=0$, $y'(0)=1$.»
- **Typiske feil:** **Glemmer resonans-multiplikasjonen med $x$/$x^2$** når ansatsen kolliderer med $y_h$ (dokumentert felle); bestemmer konstantene i $y_h$ FØR $y_p$ er lagt til; feil ansats for $g$; regnefeil i innsetting.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 9.3: Variasjon av parametere og svingningsmodeller

- **id:** `tma4110-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4110-9-2`
- **kapitteltype:** teori
- **description:** Variasjon av parametere for høyresider ubestemte koeffisienter ikke dekker, og de fysiske svingningsmodellene: fri/dempet svingning og tvungen svingning med resonans (fjær-masse, RLC-krets).
- **Forkunnskaper (kryssbok):** Kap. 9.2.
- **Eksamensbelegg:** Sjanger L (utvidelse), mindre hyppig enn ubestemte koeffisienter, men modellene forekommer. Fasitens grep: bruk variasjon av parametere når $g$ ikke passer en standardansats; tolk dempningstilfellene. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Variasjon av parametere** (kort — for $g$ som $\tan x$, $1/x$ o.l. der ubestemte koeffisienter svikter): formelen med Wronski-determinanten; **svingningsmodeller** $my''+cy'+ky=F(t)$: fri udempet ($c=0$, harmonisk), **dempet** (underkritisk/kritisk/overkritisk fra karakteristisk likning), **tvungen** svingning og **resonans** (når drivfrekvensen treffer egenfrekvensen); amplitude/faseform $A\cos(\omega t-\varphi)$. Kompakt behandling, koblet til 9.1–9.2.
- **Oppgavesjangre:** L. Mønstereksempel: «En fjær-masse med $y''+4y=\cos 2t$: identifiser resonans, finn løsningen, og beskriv hvordan amplituden vokser.»
- **Typiske feil:** Bruker variasjon av parametere der ubestemte koeffisienter er enklere (tidssluk); feil Wronski-determinant; feil dempningstilfelle; overser resonans i tvungen svingning.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 9.4: Drill: 2. ordens differensiallikninger

- **id:** `tma4110-9-4` · **number:** 9.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4110-9-3`
- **kapitteltype:** drill
- **description:** ODE-2-repertoaret drillet: karakteristisk likning (tre tilfeller) → ubestemte koeffisienter med resonanssjekk → initialverdi → svingningsmodell, den 82 %-sikre sjangeren til automatikk.
- **Eksamensbelegg:** Dekker sjanger L samlet (~82 %). Variantkatalogen: homogen (tre tilfeller), inhomogen med hver ansats-type, resonans, IVP/RVP, svingningsmodell. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) karakteristisk likning → $y_h$ (velg riktig av tre tilfeller); (2) ansats for $y_p$ etter $g(x)$; (3) **resonanssjekk** — kolliderer ansatsen med $y_h$? gang med $x^s$; (4) sett inn, bestem koeffisienter; (5) $y=y_h+y_p$, deretter IVP. Gjennomregnet «ODE-2-case» (inhomogen med resonans + IVP) med sensor-margnotater (resonans, $y_p$ før IVP, riktig homogen form). 12–15 oppgaver på eksamensnivå: minst én av hvert homogent tilfelle, én per ansats-type, to med resonans, én svingningsmodell.
- **Oppgavesjangre:** L. Mønstereksempel: «Løs $y''+y=\sin x$ (resonans!) med $y(0)=0,\ y'(0)=1$.»
- **Typiske feil:** Hele fellekatalogen fra 9.1–9.3 under tidspress; glemt resonans; feil homogen form; IVP før $y_p$ er lagt til.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (spesifisert i §4).

---

### Del 10 — Systemer av lineære differensiallikninger *(prioritet: KUNNE — system x′=Ax via egenverdier ~45 %)*

#### Kapittel 10.1: Systemet x′=Ax løst via egenverdier og egenvektorer

- **id:** `tma4110-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-5-2`, `tma4110-9-1`
- **kapitteltype:** teori
- **description:** Lineære ODE-systemer x′=Ax med reelle egenverdier: generell løsning som Σ cᵢe^{λᵢt}vᵢ, initialverdi, og koblingen til diagonalisering fra Del 5.
- **Forkunnskaper (kryssbok):** Kap. 5.2 (diagonalisering), 9.1 (ODE-struktur).
- **Eksamensbelegg:** Sjanger M, **~45 %** (økende i moderne sett). Fasitens grep: finn egenverdier/egenvektorer til $A$, skriv $\mathbf x(t)=\sum c_i e^{\lambda_i t}\mathbf v_i$, bestem $c_i$ fra $\mathbf x(0)$. Prioritet: **kunne**.
- **Innholdskontrakt:** **System** $\mathbf x'=A\mathbf x$; kobling til diagonalisering ($A=PDP^{-1}$ ⇒ substitusjon $\mathbf x=P\mathbf y$ avkobler); **generell løsning** (reelle distinkte egenverdier) $\mathbf x(t)=c_1e^{\lambda_1 t}\mathbf v_1+\cdots+c_ne^{\lambda_n t}\mathbf v_n$; **initialverdi** ($\mathbf x(0)=\mathbf x_0$ gir lineært system for $c_i$); omforming av én 2. ordens likning til et system (bro fra Del 9); fundamentalmatrise (kjennskap). Alt til aktiv bruk (kode E — prosedyren utenat).
- **Oppgavesjangre:** M. Mønstereksempel: «Løs $\mathbf x'=\left[\begin{smallmatrix}1&2\\2&1\end{smallmatrix}\right]\mathbf x$ med $\mathbf x(0)=(1,0)^{T}$.»
- **Typiske feil:** Feil egenvektorer (bruk radreduksjon, ikke gjett); glemmer $e^{\lambda t}$-faktoren; feil oppsett av $c_i$-systemet fra $\mathbf x(0)$; blander egenverdier og egenvektorer i løsningen.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 10.2: Komplekse egenverdier og faseportrett

- **id:** `tma4110-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4110-10-1`, `tma4110-5-4`
- **kapitteltype:** teori
- **description:** ODE-systemer med kompleks-konjugerte egenverdier gir svingende (spiral-)løsninger via Eulers formel; klassifisering av likevektspunktet (node, sadel, senter, spiral) fra egenverdienes fortegn og type.
- **Forkunnskaper (kryssbok):** Kap. 10.1, 5.4 (komplekse egenverdier), 7.2 (Eulers formel).
- **Eksamensbelegg:** Sjanger M, del av ~45 %-systemoppgaven når egenverdiene er komplekse. Fasitens grep: bruk én kompleks egenverdi/egenvektor, ta realdel/imaginærdel for to reelle løsninger. Prioritet: **kunne**.
- **Innholdskontrakt:** **Komplekse egenverdier** $\lambda=a\pm bi$ i $\mathbf x'=A\mathbf x$: fra én kompleks løsning $e^{\lambda t}\mathbf v$ hentes to reelle via **real- og imaginærdel** (Eulers formel gir $e^{at}(\cos bt,\sin bt)$-faktorer); **faseportrett** og **klassifisering** av likevekt ($\mathbf x=\mathbf 0$): reelle samme fortegn = node (stabil/ustabil), motsatt fortegn = sadel, rent imaginære = senter, kompleks med realdel = spiral; stabilitet fra fortegnet på realdelen. Kompakt, koblet til svingningsmodellene i 9.3. Alt til aktiv bruk.
- **Oppgavesjangre:** M. Mønstereksempel: «Løs $\mathbf x'=\left[\begin{smallmatrix}0&-2\\2&0\end{smallmatrix}\right]\mathbf x$, og klassifiser likevektspunktet.»
- **Typiske feil:** Bruker begge konjugerte egenverdier i stedet for real/imaginærdel av én; feil klassifisering av likevekt; feil stabilitetskonklusjon (fortegn på realdel); regnefeil i kompleks aritmetikk.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 10.3: Drill: systemer av differensiallikninger

- **id:** `tma4110-10-3` · **number:** 10.3 · **estimatedMinutes:** 80 · **prerequisites:** `tma4110-10-2`
- **kapitteltype:** drill
- **description:** ODE-system-repertoaret drillet: egenverdier/egenvektorer → generell løsning → initialverdi → komplekst tilfelle → klassifisering, den 45 %-sjangeren til automatikk.
- **Eksamensbelegg:** Dekker sjanger M samlet (~45 %). Variantkatalogen: reelle distinkte egenverdier, initialverdi, komplekse egenverdier (spiral/senter), klassifisering av likevekt, omforming fra 2. ordens likning. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) egenverdier/egenvektorer til $A$; (2) reelle ⇒ $\sum c_ie^{\lambda_i t}\mathbf v_i$; komplekse ⇒ real/imaginærdel av $e^{\lambda t}\mathbf v$; (3) initialverdi gir $c_i$; (4) klassifiser likevekt. Gjennomregnet «system-case» (reelt + komplekst) med sensor-margnotater (riktig løsningsform, real/imaginærdel-triks). 10–12 oppgaver på eksamensnivå: minst to reelle, to komplekse, én klassifisering, én fra 2. ordens omforming.
- **Oppgavesjangre:** M. Mønstereksempel: «(a) Løs $\mathbf x'=A\mathbf x$ (reelle egenverdier). (b) Løs et system med komplekse egenverdier og klassifiser likevekten.»
- **Typiske feil:** Fellekatalogen fra 10.1–10.2 under tidspress; feil real/imaginærdel; feil klassifisering; regnefeil i egenvektorer.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 10:** 4 prøver (spesifisert i §4).

---

### Del 11 — Eksamenstrening og bevis

#### Kapittel 11.1: Føringsstandarden og utenat-apparatet (kode E)

- **id:** `tma4110-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–10
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert for kode E: begrunn ALT, navngi teoremene, gi eksakte svar, Col A-basis fra original, diagonaliserbarhet med multiplisitet, riktig ODE-løsningsform med resonanssjekk — samlet, med utenat-banken over alt du må kunne uten formelark.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene (~10 likt vektede deloppgaver, 4 t) og de offisielle løsningsforslagene: (i) «alle svar skal begrunnes; vis nok mellomregning» — ordrett instruks; (ii) **teoremer navngis** (diagonaliserbarhetskriteriet, dimensjonsteoremet, spektralteoremet, de Moivre, superposisjonsprinsippet, inverterbarhetssetningen); (iii) føringsstandarden ($\operatorname{Col}A$-basis fra **original**, $P/D$ matchet, diagonaliserbarhet begrunnet med multiplisitet, ortogonal basis før projeksjon, normallikningene ved navn, riktig ODE-løsningsform + resonanssjekk, alle komplekse røtter, **eksakte svar aldri desimal**); (iv) **utenat-kravet (kode E)** — intet formelark ⇒ utenat-bank; (v) **delpunkt-kjeding** (samme matrise gjenbrukt); (vi) **bevis-sjangeren** (siste oppgave, forankres i 11.2). Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–N (én tabell: hva er tilstrekkelig begrunnelse); **utenat-banken** (kode E — alle teoremformler, egenverdiprosedyren, de Moivre + røtter-formelen, de tre ODE-tilfellene + ubestemte-koeffisienter-ansatsene + resonansregelen, Gram–Schmidt-formelen, normallikningene, inverterbarhetssetningen); **sjekklisten før innlevering** ($\operatorname{Col}$-basis fra original? $P/D$ matchet? diagonaliserbarhet begrunnet? ortogonal basis før projeksjon? alle komplekse røtter? riktig ODE-form + resonans? eksakte svar? delpunkt-koblinger?); to kontrastpar «samme matematikk, ulik føring» (ett $\operatorname{Col}A$-eksempel med basis fra RREF vs. original; ett ODE med/uten resonanskorreksjon); strategien for kjedede delpunkter og tidsbudsjett (~24 min/deloppgave).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Denne besvarelsen gir riktig egenverdier, men taper uttelling på diagonaliseringen — pek på de to manglene (ingen multiplisitetsbegrunnelse; $P/D$ ikke matchet) og skriv om til full uttelling.»
- **Typiske feil:** Hele føringsfellekatalogen: $\operatorname{Col}A$-basis fra RREF, diagonaliserbarhet uten multiplisitet, projeksjon uten ortogonal basis, glemt resonans i ODE, manglende komplekse røtter, desimaltilnærming, ubegrunnet svar.
- **Quiz: 14 · Flashcards: 32** (utenat-bank + føringsregler — flashcard-gull for et fag uten formelark under kode E)

#### Kapittel 11.2: Bevis-drill: «vis at …»-oppgaven (siste oppgave)

- **id:** `tma4110-11-2` · **number:** 11.2 · **estimatedMinutes:** 80 · **prerequisites:** `tma4110-11-1`
- **kapitteltype:** drill (bevis)
- **description:** Bevis-sjangeren drillet — den siste oppgaven som ~42 % av settene avslutter med: inverterbarhet, nilpotens, egenverdier av A²=A, underrom, AᵀA-triks. Bevismetodikk pluss et repertoar av gjennomførte modellbevis.
- **Eksamensbelegg:** Sjanger N, **~42 %** (siste oppgave). Dokumenterte arketyper: **$A$ inverterbar ⇔ $A^{T}A$ inverterbar**; **$A^2=A$ ⇒ egenverdier ∈ {0,1}**; **$A^3=O$ ⇒ $(I-A)^{-1}=I+A+A^2$** (nilpotens/Neumann); **underrom-bevis** (tre betingelser); **lineær uavhengighet/basis** i abstrakt rom; **egenverdibevis** ($\lambda$ egenverdi for $A$ ⇒ $\lambda^k$ for $A^k$); **symmetrisk ⇒ reelle egenverdier** (kjennskap). ⚠️ enkelte metodevalg = faglig standard. Prioritet: **kunne** (topp-karakterskiller).
- **Innholdskontrakt:** **Bevismetodikk**: identifiser gitt vs. skal-vises; navngi teoremet/definisjonen som bærer hvert steg; sjekk forutsetningene; skill «⇒» og «⇔» (vis begge veier); standardteknikker (transponert-triks $\mathbf x^{T}M\mathbf x=(\mathbf x^{T}M\mathbf x)^{T}$, dimensjonstelling, egenverdi-innsetting $A\mathbf v=\lambda\mathbf v$, inverterbarhetssetningen, geometrisk serie for nilpotente). Repertoar av **komplett førte modellbevis** for hver dokumentert arketype, hvert med forutsetningssjekk og navngitt teorem. 8–12 bevisoppgaver på eksamensnivå med `solution` + `hints`.
- **Oppgavesjangre:** N. Mønstereksempel: «La $A$ være en $n\times n$-matrise med $A^2=A$. Vis at enhver egenverdi er $0$ eller $1$, og at $A$ er diagonaliserbar.»
- **Typiske feil:** Regner på et tallesempel i stedet for generelt bevis; viser bare én vei i en «hvis og bare hvis»; glemmer forutsetningssjekk/teoremnavn; forveksler $\mathbf v\mathbf v^{T}$ (matrise) og $\mathbf v^{T}\mathbf v$ (skalar); bruker udokumenterte påstander.
- **Quiz: 14 · Flashcards: 24**

#### Kapittel 11.3: Øvingseksamen 1: ~10 deloppgaver — bred kjerne

- **id:** `tma4110-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `tma4110-11-2`
- **kapitteltype:** øvingseksamen (skriftlig, kode E)
- **description:** Komplett 4-timers sett med ~10 likt vektede deloppgaver, kalibrert på den typiske eksamenen: komplekse tall, Gauss + Col/Nul/basis, abstrakt vektorrom, egenverdier/diagonalisering, Gram–Schmidt/projeksjon, 2. ordens ODE og et avsluttende bevis.
- **Eksamensbelegg/miks:** Speiler den stabile malen (**4 t, ~10 likt vektede deloppgaver, kode E, «alle svar begrunnes», ingen flervalg**), kalibrert på prognosen i §2A: **O1** $z^n=c$ + polar/de Moivre (sjanger J) → **O2** Gauss + parameteranalyse (sjanger A) → **O3** $\operatorname{Col}/\operatorname{Nul}$-basis + rang + dimensjonsteorem (sjanger E) → **O4** egenverdier + diagonalisering begrunnet (sjanger G) → **O5** Gram–Schmidt + ortogonal projeksjon (sjanger H) → **O6** 2. ordens ODE med ubestemte koeffisienter (sjanger L) → **O7** kort bevis ($A^2=A$ ⇒ egenverdier ∈ {0,1}, sjanger N). ~10 deloppgaver totalt, likt vektet. Alle oppgaver nyskrevne med pene tall. Løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 11.1-standarden, med `tip`-notat om tidsbudsjett (~24 min/deloppgave) og hvor begrunnelsespoengene sitter.
- **Typiske feil:** Se 11.1 (føringsfellekatalogen) og de temaspesifikke feilene per sjanger.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 2: ~10 deloppgaver — abstrakt vektorrom, minste kvadrater og ODE-system

- **id:** `tma4110-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `tma4110-11-3`
- **kapitteltype:** øvingseksamen (skriftlig, kode E)
- **description:** Sett nummer to som vrir mot abstrakt vektorrom (Pₙ/funksjonsrom), minste kvadrater, ODE-system via egenverdier og komplekse egenverdier — så settene sammen dekker A–N.
- **Eksamensbelegg/miks:** Samme mal (4 t, ~10 likt vektede deloppgaver, kode E), med restsjangrene: **O1** komplekse annen-/tredjegradslikninger (sjanger J) → **O2** matrise/determinant/inverterbarhet (sjanger B + C) → **O3** abstrakt vektorrom $\operatorname{P}_2$: underrom + basis + koordinater (sjanger D) → **O4** lineær transformasjon $[T]_{\mathcal B}$ for $T(p)=p'$ + kjerne/bilde (sjanger F) → **O5** minste kvadrater via normallikningene + kurvetilpasning (sjanger I) → **O6** ODE-system $\mathbf x'=A\mathbf x$ med komplekse egenverdier + klassifisering (sjanger M) → **O7** bevis: $A^3=O$ ⇒ $(I-A)^{-1}=I+A+A^2$ (sjanger N). ~10 deloppgaver, likt vektet. Alle nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per deloppgave.
- **Typiske feil:** Se 11.1 og temaspesifikke feil per sjanger.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 11.5: Øvingseksamen 3: ~10 deloppgaver — de skarpeste karakterskillerne

- **id:** `tma4110-11-5` · **number:** 11.5 · **estimatedMinutes:** 240 · **prerequisites:** `tma4110-11-4`
- **kapitteltype:** øvingseksamen (skriftlig, kode E)
- **description:** Tredje sett kalibrert på de vanskeligste variantene: ikke-diagonaliserbarhet begrunnet, integral-indreprodukt i Gram–Schmidt, resonans i 2. ordens ODE, komplekse egenverdier og et krevende bevis — samlet.
- **Eksamensbelegg/miks:** Samme mal (4 t, ~10 likt vektede deloppgaver, kode E), kalibrert på de vanskeligste dokumenterte variantene: **O1** $z^n=c$ med skisse + kompleks likning (sjanger J) → **O2** parameteravhengig system med tilfelledeling (sjanger A) → **O3** egenverdier: én diagonaliserbar, én **ikke**-diagonaliserbar (for lite egenrom), begrunnet (sjanger G) → **O4** Gram–Schmidt i **integral-indreprodukt** på $\operatorname{P}_2$ + projeksjon (sjanger H, ikke-standard) → **O5** 2. ordens ODE med **resonans** + IVP (sjanger L) → **O6** ODE-system med komplekse egenverdier (sjanger M) → **O7** bevis: $A$ inverterbar ⇔ $A^{T}A$ inverterbar (sjanger N). ~10 deloppgaver, likt vektet. `warning`-notat i løsningen: O4 er integral-indreprodukt — alle skalarprodukt/normer regnes med integralet; O5 krever resonanskorreksjon. Løsningsforslag som A-besvarelse med tids-/vektingstips.
- **Typiske feil:** Se 11.1 og temaspesifikke feil; særlig glemt resonans (O5), standard prikkprodukt i integral-indreprodukt (O4), diagonaliserbarhet uten multiplisitet (O3).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 11:** ingen egne temaprøver — de tre øvingseksamenene (11.3–11.5) er delens prøver.

---

## Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 14 |
| 1 | 1.1–1.3 | 18+18+16 = **52** | 26+24+8 = **58** |
| 2 | 2.1–2.3 | 16+16+18 = **50** | 22+20+24 = **66** |
| 3 | 3.1–3.5 | 18+18+20+18+16 = **90** | 26+26+26+22+8 = **108** |
| 4 | 4.1–4.2 | 16+16 = **32** | 22+22 = **44** |
| 5 | 5.1–5.5 | 20+20+18+16+16 = **90** | 28+26+22+20+8 = **104** |
| 6 | 6.1–6.5 | 18+18+18+18+16 = **88** | 26+24+24+24+8 = **106** |
| 7 | 7.1–7.4 | 18+18+18+16 = **70** | 24+26+24+8 = **82** |
| 8 | 8.1–8.2 | 16+16 = **32** | 22+22 = **44** |
| 9 | 9.1–9.4 | 18+18+16+16 = **68** | 26+26+20+8 = **80** |
| 10 | 10.1–10.3 | 16+16+14 = **46** | 22+20+8 = **50** |
| 11 | 11.1–11.5 | 14+14+5+5+5 = **43** | 32+24+0+0+0 = **56** |
| **Sum** | **42 kap.** | **671 ≥ 500 ✓** | **812 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (812, ikke ~510):** dette er et **formel- og
metoderikt fag som trenes mot kode E — ingen hjelpemidler, intet formelark**. Hele
apparatet (de Moivre + røtter-formelen, egenverdiprosedyren, diagonaliserbarhetskriteriet,
de tre ODE-tilfellene + ubestemte-koeffisienter-ansatsene + resonansregelen,
Gram–Schmidt-formelen, normallikningene, dimensjonsteoremet, inverterbarhetssetningen) må
sitte utenat, så definisjoner, teoremnavn og metode-oppskrifter er selve puggematerialet.
De tre fagfeltene bærer tettheten jevnt: **lineær algebra (Del 3+5+6 = 318 flashcards)** er
tyngst fordi det er bredest testet; **komplekse tall (Del 7, 82)** og **ODE (Del 8+9+10 =
174)** har høy tetthet per kapittel fordi formlene MÅ kunnes uten oppslag. Drillkapitlene
holdes lave på flashcards (8) fordi verdien er oppgaver; øvingseksamenene har 0 flashcards
og 5 quiz hver. Kap. 11.1 (føring + utenat-bank) har høyest flashcard-tetthet (32), siden
det er den rene pugge-oppsummeringen for kode E. Quiz-fordelingen speiler eksamensvektene:
**de fem 95–82 %-søylene (Del 3, 5, 6, 7, 9) bærer 406 av 671 quiz**; nivå 2 (Del 1, 2, 4,
10) 180; Del 0/8/11 (meta/grunnlag/trening) 85.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10, 40 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag etter
føringsstandarden (11.1), poengfordeling og eksakte svar. Alt langsvar med full begrunnelse
(ingen flervalg, jf. normalårsmalen). Legges som prøvekapitler (`tma4110-<del>-prove`,
chapterNumber `<del>.P`) etter plattformens mønster. Kalibrert mot kode E (ingen
hjelpemidler).

**Del 1 — Lineære likningssystem og Gauss**
1. Prøve 1.A (35 min): Radreduksjon til RREF + avlesning av løsning (kap. 1.1, sjanger A).
2. Prøve 1.B (40 min): Tre løsningsutfall + parameterform (kap. 1.2, sjanger A).
3. Prøve 1.C (40 min): Parameteravhengig system med full tilfelledeling (kap. 1.2, sjanger A).
4. Prøve 1.D (45 min): Oppgave-simulering — Gauss + parameteranalyse + homogent system kjedet (kap. 1.1–1.3, sjanger A).

**Del 2 — Matriser, determinant og invers**
1. Prøve 2.A (35 min): Matrisealgebra + transponert-regler + $A^{T}A$ symmetrisk (kap. 2.1, sjanger B).
2. Prøve 2.B (40 min): Invers via Gauss–Jordan + 2×2-formel + regneregler (kap. 2.2, sjanger B).
3. Prøve 2.C (40 min): Determinant (kofaktor/radreduksjon) + inverterbarhet + Cramer (kap. 2.3, sjanger C).
4. Prøve 2.D (40 min): Inverterbarhetssetningen-tverrsnitt — koble $\det$/rang/$\operatorname{Nul}$/invers (kap. 2.1–2.3, sjanger B + C).

**Del 3 — Vektorrom, basis og dimensjon**
1. Prøve 3.A (40 min): Underrom (tre betingelser) i $\operatorname{P}_n$/matriser + dimensjon (kap. 3.1, sjanger D).
2. Prøve 3.B (40 min): Lineær uavhengighet + basis med dimensjonsargument (kap. 3.2, sjanger D).
3. Prøve 3.C (40 min): $\operatorname{Col}/\operatorname{Nul}$-basis + rang + dimensjonsteorem fra RREF (kap. 3.3, sjanger E).
4. Prøve 3.D (45 min): Vektorrom-simulering — abstrakt underrom → basis → koordinater kjedet (kap. 3.1–3.5, sjanger D + E).

**Del 4 — Lineære transformasjoner**
1. Prøve 4.A (35 min): Linearitetssjekk + standardmatrise + geometrisk avbildning (kap. 4.1, sjanger F).
2. Prøve 4.B (40 min): Kjerne/bilde + injektiv/surjektiv + dimensjonsteorem (kap. 4.2, sjanger F).
3. Prøve 4.C (40 min): $[T]_{\mathcal B}$ for $T(p)=p'$ + $\ker T$ til polynomer (kap. 4.2, sjanger F).
4. Prøve 4.D (40 min): Transformasjons-tverrsnitt — komposisjon + kjerne/bilde kjedet (kap. 4.1–4.2, sjanger F).

**Del 5 — Egenverdier og diagonalisering**
1. Prøve 5.A (35 min): Egenvektor-verifisering + egenverdier/egenrom + multiplisitet (kap. 5.1, sjanger G).
2. Prøve 5.B (40 min): Diagonalisering $A=PDP^{-1}$ + begrunn diagonaliserbarhet (kap. 5.2, sjanger G).
3. Prøve 5.C (40 min): $A^n$ + Markov-stasjonær + komplekse egenverdier (kap. 5.3–5.4, sjanger G).
4. Prøve 5.D (45 min): Egenverdi-simulering — egenverdikjeden på én matrise (kap. 5.1–5.5, sjanger G).

**Del 6 — Indreprodukt, ortogonalitet og minste kvadrater**
1. Prøve 6.A (35 min): Indreprodukt/norm/ortogonalitet (standard + integral) (kap. 6.1, sjanger H).
2. Prøve 6.B (40 min): Gram–Schmidt + ortonormalisering (kap. 6.2, sjanger H).
3. Prøve 6.C (40 min): Ortogonal projeksjon + dekomposisjon + avstand (kap. 6.3, sjanger H).
4. Prøve 6.D (45 min): Minste kvadrater via normallikninger + kurvetilpasning, kjedet med Gram–Schmidt (kap. 6.2–6.5, sjanger H + I).

**Del 7 — Komplekse tall (elementære)**
1. Prøve 7.A (35 min): Kartesisk aritmetikk + konjugat + modulus + geometrisk sted (kap. 7.1, sjanger J).
2. Prøve 7.B (35 min): Polar form + de Moivre-potenser (kap. 7.2, sjanger J).
3. Prøve 7.C (40 min): $n$-te røtter + $z^n=c$ med skisse (kap. 7.3, sjanger J).
4. Prøve 7.D (40 min): Komplekstall-simulering — komplekse annen-/tredjegradslikninger + $z^n=c$ kjedet (kap. 7.1–7.4, sjanger J).

**Del 8 — Differensiallikninger av 1. orden**
1. Prøve 8.A (35 min): Separabel ODE + initialverdi + konstantløsninger (kap. 8.1, sjanger K).
2. Prøve 8.B (40 min): Lineær 1. ordens via integrerende faktor + IVP (kap. 8.2, sjanger K).
3. Prøve 8.C (35 min): Modell (avkjøling/blanding) satt opp og løst (kap. 8.2, sjanger K).
4. Prøve 8.D (40 min): ODE-1-tverrsnitt — separabel OG lineær på samme sett (kap. 8.1–8.2, sjanger K).

**Del 9 — Differensiallikninger av 2. orden**
1. Prøve 9.A (35 min): Homogen — de tre tilfellene (reell/dobbel/kompleks) + IVP (kap. 9.1, sjanger L).
2. Prøve 9.B (40 min): Inhomogen med ubestemte koeffisienter (hver ansats-type) (kap. 9.2, sjanger L).
3. Prøve 9.C (40 min): Inhomogen med **resonans** + IVP (kap. 9.2, sjanger L).
4. Prøve 9.D (45 min): ODE-2-simulering — homogen + inhomogen med resonans + svingningsmodell (kap. 9.1–9.4, sjanger L).

**Del 10 — Systemer av differensiallikninger**
1. Prøve 10.A (40 min): System $\mathbf x'=A\mathbf x$ reelle egenverdier + IVP (kap. 10.1, sjanger M).
2. Prøve 10.B (40 min): System med komplekse egenverdier + klassifisering (kap. 10.2, sjanger M).
3. Prøve 10.C (35 min): Klassifisering av likevekt (node/sadel/senter/spiral) (kap. 10.2, sjanger M).
4. Prøve 10.D (40 min): System-simulering — reelt + komplekst + omforming fra 2. ordens likning (kap. 10.1–10.3, sjanger M).

### Øvingseksamener (3 komplette sett — se kap. 11.3–11.5)

| Sett | Form den speiler | Miks (~10 likt vektede deloppgaver, kode E) |
|---|---|---|
| Øvingseksamen 1 (kap. 11.3) | Typisk sett — bred kjerne | J(O1) + A(O2) + E(O3) + G(O4) + H(O5) + L(O6) + N(O7) |
| Øvingseksamen 2 (kap. 11.4) | Abstrakt + minste kvadrater + system | J(O1) + B/C(O2) + D(O3) + F(O4) + I(O5) + M(O6) + N(O7) |
| Øvingseksamen 3 (kap. 11.5) | Vanskeligste varianter | J(O1) + A(O2) + G(O3, ikke-diag.) + H(O4, integral) + L(O5, resonans) + M(O6) + N(O7) |

Til sammen dekker de tre settene samtlige sjangre A–N minst én gang, begge komplekstall-
variantene ($z^n=c$ og komplekse likninger), både diagonaliserbar og ikke-diagonaliserbar,
både standard og integral-indreprodukt, både ubestemte koeffisienter og resonans i 2. ordens
ODE, og alle tre bevis-arketypene ($A^2=A$, nilpotens, $A^{T}A$). Alle tre er kalibrert mot
**kode E** (ingen hjelpemidler, alt utenat, eksakte svar).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Det stabile formatet og kode E** — vurderingsformen (4-timers skriftlig skoleeksamen,
   ~10 likt vektede deloppgaver, ingen flervalg i normalår, karakter A–F), kodeforbeholdet
   (§1.6 — klassisk kjerne spredt på reformkoder; verifiser gjeldende kode; Fourier/PDE/
   vektorkalkulus/kompleks funksjonsteori er IKKE her) og utenat-kravet (kode E, intet
   formelark) — fra kap. 0.1.
2. **Prioriteringskartet** — frekvens-tabellen (§2A) omgjort til tre lesenivåer: **perfekt**
   (komplekse tall 95 %, egenverdier/diagonalisering 95 %, Col/Nul/basis/rang 89 %, abstrakt
   vektorrom 82 %, 2. ordens ODE 82 %, Gram–Schmidt/projeksjon 80 %, Gauss 78 %), **kunne**
   (minste kvadrater 47 %, determinant 45 %, ODE-system 45 %, bevis 42 %, lineærtransformasjon
   38 %, matriseregning 36 %, Markov 33 %), **kjenne** (abstrakt uavhengighet 18 %, ODE 1.
   orden som grunnlag) — med notatet om at hvert sett dekker fem–sju søyler, så bredde slår
   dybde-i-ett-tema.
3. **Sjangerguiden** — A–N med løsningsoppskriftene fra drillkapitlene (1.3, 3.5, 5.5, 6.5,
   7.4, 9.4, 10.3) og bevis-drillen (11.2) i kortform.
4. **Utenat-banken (kode E)** — alt som må sitte uten formelark: de Moivre + røtter-formelen,
   Eulers formel, egenverdiprosedyren + diagonaliserbarhetskriteriet, de tre ODE-tilfellene +
   ubestemte-koeffisienter-ansatsene + resonansregelen, Gram–Schmidt-formelen, normallikningene,
   dimensjonsteoremet, inverterbarhetssetningen (fra kap. 11.1).
5. **Sensorreglene** — «alle svar begrunnes», teoremnavning, $\operatorname{Col}A$-basis fra
   original, $P/D$-matching, diagonaliserbarhet begrunnet med multiplisitet, ortogonal basis
   før projeksjon, normallikningene ved navn, riktig ODE-løsningsform + resonanssjekk, alle
   komplekse røtter, eksakte svar, delpunkt-gjenbruk (fra kap. 11.1) + karakterskille-listen
   (bestått/midt/topp).
6. **Feilkatalogen** — de typiske feilene samlet (feil $\operatorname{Col}A$-basis fra RREF,
   diagonaliserbarhet uten multiplisitet, glemt tilfelle i parameteranalyse, glemt resonans i
   ODE, manglende komplekse røtter, projeksjon uten ortogonal basis, standard prikkprodukt i
   ikke-standard indreprodukt, glemt underroms-betingelse, feil ODE-løsningsform,
   desimaltilnærming, ubegrunnet svar), hver med henvisning til kapitlet som forebygger den.
7. **Teorem- og notasjonsliste** — apparatet fra innholdskontraktene (Gauss/RREF;
   inverterbarhetssetningen; dimensjonsteoremet; abstrakt vektorrom + koordinater;
   egenverdier + diagonalisering $A=PDP^{-1}$; komplekse tall $re^{i\theta}$ + de Moivre;
   indreprodukt + Gram–Schmidt + projeksjon + normallikninger; ODE 1./2. orden + system;
   bevistemaene) — med markering *utlede/kunne aktivt* vs. *kun bruke*, og påminnelse om at
   **alt må kunnes utenat** (kode E, intet formelark).
8. **Studieløp** — semesterplan: Del 0 → Del 1 (Gauss, motoren) → Del 2 (verktøykassen) →
   **Del 3 (vektorrom — språket og en 82–89 %-søyle)** → Del 4 (transformasjoner) → **Del 5
   (egenverdier — 95 %-tyngdepunktet)** → Del 6 (ortogonalitet/minste kvadrater) → **Del 7
   (komplekse tall — 95 %, kan leses tidlig)** → Del 8 (ODE 1. orden, grunnlag) → **Del 9
   (2. ordens ODE — 82 %)** → Del 10 (ODE-system) → temaprøvene → føringsstandarden (11.1) →
   bevis-drillen (11.2) → de tre øvingseksamenene under tidspress (4 timer, kode E).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tma4110` med alle 42 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («5.2», ALDRI lineær
   «21») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser bruker samme
   del-baserte form («kap. 5.2»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, frekvenstallene, kodeforbeholdet og
   utenat-kravet som resten refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (Gauss/RREF — motoren) → Del 2
   (matriser/determinant/invers) → **Del 3 (vektorrom — den store språk-delen; 3.3 krever
   1.1, 3.4 krever 3.3)** → Del 4 (transformasjoner; krever 3.4).
4. **Lineær-algebra-tyngdepunkt**: **Del 5 (egenverdier — 95 %; 5.1 krever 2.3 + 3.3, 5.4
   krever Del 7)** → Del 6 (indreprodukt/Gram–Schmidt/minste kvadrater; 6.1 krever 3.2).
5. **Komplekse tall**: **Del 7 (95 %)** — selvstendig, men 5.4 og 9.1/10.2 avhenger av 7.2
   (Eulers formel/polar). Bygg Del 7 FØR 5.4 kan ferdigstilles (eller bygg 5.4 sist i Del 5).
6. **Differensiallikninger**: Del 8 (1. orden, grunnlag) → **Del 9 (2. orden — 82 %; 9.1
   krever 7.2)** → Del 10 (system; 10.1 krever 5.2 + 9.1, 10.2 krever 5.4 + 7.2).
7. **Del 11** til slutt (føring + bevis-drill + de tre øvingseksamenene gjenbruker alt og må
   dekke A–N). Temaprøvene (§4) legges som prøvekapitler (`tma4110-<del>-prove`, chapterNumber
   `<del>.P`) etter plattformens mønster, én per temadel 1–10 (40 stk).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 3 (5 kap.) og Del 5 (5 kap.) er de
største** — hold hver samlet hos én agent hvis mulig; ved splitting skal **begge agentene
lese HELE delens kontrakter**, og delen flagges for konsistenssjekk (jf. byggekontrakt-
regelen). **Avhengighet på tvers av deler:** Del 5 (5.4 komplekse egenverdier) og Del 9/10
avhenger av Del 7 (komplekse tall) — bygg Del 7 tidlig, eller gi ODE-/egenverdi-agentene Del
7s kontrakter. Bevis-drillen (11.2) bygges av en agent som også leser 2.2, 3.1, 5.1, 5.3 og
6.4 (bevisene forankres dit). Øvingseksamenene (11.3–11.5) bygges av én agent som leser HELE
skjelettet (de gjenbruker alle sjangre).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via `json.dump`,
      ikke håndskriving — LaTeX krever `\\` i JSON-strenger; `npm run build` grønn
      (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + notasjon**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon — Lay for lineær algebra ($\operatorname{Col}A$, $\operatorname{Nul}A$,
      $\operatorname{rang}A$, $[\mathbf x]_{\mathcal B}$, $P_{\mathcal C\leftarrow\mathcal B}$,
      $A=PDP^{-1}$, $\det(A-\lambda I)=0$, $A^{T}A\hat{\mathbf x}=A^{T}\mathbf b$); standard for
      komplekse tall ($z=re^{i\theta}$, de Moivre) og ODE ($y''+py'+qy=g$, $r^2+pr+q=0$,
      $\mathbf x'=A\mathbf x$).
- [ ] **Notasjonskonsistens (grep over alle tma4110-filer)**: $\operatorname{Col}A$-basis fra
      **original** (ikke RREF); **eksakte svar** (aldri desimal); diagonaliserbarhet begrunnet
      med multiplisitet; ODE-løsning som $y_h+y_p$ med resonanskorreksjon; alle $n$ komplekse
      røtter; teoremer navngitt.
- [ ] **Kode E-kalibrering**: hvert kapittel trener formlene **utenat** (ingen «slå opp i
      formelsamling»); kap. 0.1 og 11.1 gjengir kodeforbeholdet og utenat-banken; ingen
      kalkulator-avhengige mellomsteg.
- [ ] **Kodeforbehold synlig**: kap. 0.1 sier eksplisitt at dette er klassisk lin.alg + ODE +
      kompleks spredt på reformkoder (verifiser gjeldende kode), at Fourier/PDE/vektorkalkulus/
      kompleks funksjonsteori IKKE er dekket, og at matematikken er stabil uansett kodeetikett.
      Merk usikre detaljer med `(verifiser)`.
- [ ] **Bevis-sjanger**: kap. 11.2 fører komplette modellbevis for hver dokumentert arketype
      ($A^2=A$, nilpotens/$(I-A)^{-1}$, $A^{T}A$ inverterbar, underrom, egenverdibevis) med
      forutsetningssjekk og navngitt teorem; «⇔» vises begge veier.
- [ ] **Føringsstandard i ALLE løsningsforslag**: begrunn alt; navngi teoremet;
      $\operatorname{Col}A$-basis fra original; $P/D$ matchet; diagonaliserbarhet begrunnet;
      ortogonal basis før projeksjon; riktig ODE-form + resonanssjekk; alle komplekse røtter;
      verbal konklusjonssetning; eksakt sluttsvar markert. Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Format-ærlighet**: kap. 0.1 sier at formatet er stabilt (~10 likt vektede deloppgaver,
      4 t, «begrunn alt», siste oppgave = bevis), at pandemiårene avvek (flervalg), og at
      hjelpemidler skiftet C→E (boka trenes mot E). Metodevalg uten dokumentert fasit merkes «⚠️
      metode = faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene herfra),
      Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som finnes — R1/R2/1T/S2 lenket
      og verifisert; **ubygde NTNU-forkunnskapsemner som klartekst med aktiveringsmarkør**),
      `collapsible` Symbol- og formelliste per delkapittel, Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 10–15
      oppgaver; kap. 11.2 fører komplette modellbevis.
- [ ] **Quiz-sum ≥ 671 og flashcard-sum ≥ 812** per kvotetabellen i Summeringskontrollen
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk) + 3 øvingseksamener (11.3–11.5) som sammen dekker
      A–N, begge komplekstall-varianter, diagonaliserbar/ikke-diagonaliserbar, standard/integral-
      indreprodukt, ubestemte koeffisienter/resonans, og alle tre bevis-arketyper.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser og kontekster; ingen
      formuleringer fra reelle sett eller fasiter (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn).
- [ ] **Navigasjon**: `tma4110` inn i `src/app/trinn/hoyere/institusjoner.ts` under **Norges
      teknisk-naturvitenskapelige universitet (NTNU)**, navn = «TMA4110 Lineær algebra, komplekse
      tall og differensiallikninger» *(verifiser kodetilhørighet mot gjeldende emneside)*.
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og minst 3
      kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute (200 +
      innholdssjekk), jf. `getChapterMeta`-lærdommen.
