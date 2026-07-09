# Bokskjelett: MA1201 Lineær algebra og geometri (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA1201-arkiv 2004–2024: 50 PDF-er, hvorav 17 sett med lesbar tekst er
> analysert grundig og løsningsforslag 2013–2024 lest/OCR-lest).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../tma4110/SKJELETT.md` (samme lineær-algebra-kjerne, NTNU,
> «begrunn alt», bevis-drill) og `../ma0301/SKJELETT.md` (samme institusjon,
> egen bevisferdighets-behandling, del-basert kvotestyring).
>
> **Emnestatus:** MA1201 er **AKTIVT** (aktiv fra høst 2024, 7,5 studiepoeng, én
> avsluttende 4-timers skriftlig skoleeksamen A–F; deles med MA6201). Selvstendig
> emne med tydelig **geometri- og kjeglesnittprofil** som skiller det fra rene
> matrise-kurs (MAT1120/TMA4110). Bygges.
>
> **Viktigste kalibrering:** MA1201 er et **regne- OG bevisfag** — settet har en
> stabil dramaturgi (fra 2017): tre «regneoppgaver» (system+rang, vektor/volum,
> egenverdi/diagonalisering/**kjeglesnitt**) fulgt av to–tre **rene bevisoppgaver**.
> **Signaturoppgaven er kjeglesnitt/hovedaksetransformasjon** (~68 %) som binder
> hele pensumkjeden sammen (kvadratisk form → symmetrisk matrise → egenverdier →
> ortogonal diagonalisering → klassifisering → skisse). Boka driller begge modusene
> like grundig og gir kjeglesnittkjeden sin egen del.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1201` |
| Tittel | **MA1201 Lineær algebra og geometri** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Kodetilhørighet | Deles med **MA6201** (videreutdanningsvariant, samme sett). Aktiv fra høst 2024. |
| Arketype | Regnefag (regne-, utlednings- og bevisorientert; egen geometri-/kjeglesnittprofil; egen bevis-drill) |
| Antall kapitler | **30** (1 eksamenskart + 24 tema/drill + 5 eksamenstrening/bevis) |
| Estimert totaltid | **~1 955 min ≈ 33 timer** |
| Quiz totalt | **504** (krav ≥500) |
| Flashcards totalt | **518** (krav ≥500; definisjons-/teoremrikt bevisfag — kode D-kalkulatoren kan ikke redde deg, alt pugges) |

**Pitch (ett avsnitt):** MA1201 er NTNUs grunnkurs i lineær algebra **og geometri** —
og det er geometriprofilen som gjør emnet særegent. Der slektskursene (MAT1120,
TMA4110) stopper ved matrisemaskineriet, kulminerer MA1201 i **kjeglesnitt-
oppgaven**: gitt en annengradsligning med kryssledd, diagonaliser den symmetriske
formmatrisen ortogonalt, fjern kryssleddet, klassifiser (ellipse/hyperbel/parabel)
og skisser. Denne ene oppgaven (~68 %, nesten årviss i regne-tunge sett) binder
sammen *hele* pensumkjeden og er bokas dramaturgiske tyngdepunkt. Rundt den ligger
den harde kjernen som bærer ståkarakteren: **løs lineært system + rang** (~100 %,
åpner nesten alltid settet), **egenverdier + egenvektorer** (~89 %), **diagonalisering
— særlig ortogonal** (~84 %) og **determinant + inverterbarhet** (~84 %). Settet er
en **4-timers skriftlig skoleeksamen** med **5–7 oppgaver / ~9–12 likt vektede
delspørsmål**, karakter A–F, **hjelpemiddelkode D** (kun en enkel kalkulator som
verken kan matriseregning eller grafer — **all matriseregning gjøres for hånd**).
Metaregelen som preger alt: **«alle svar skal begrunnes»** med henvisning til
navngitte teoremer fra pensum (spektralteoremet, «det ≠ 0 ⇔ invertibel», rang–
nullitet, Cauchy–Schwarz, Gram–Schmidt). Settets bakre halvdel er **korte bevis**
(~84 % har minst ett, ofte to–tre) — lineær uavhengighet av egenvektorer,
symmetri-/kommuteringsidentiteter, ortogonale matrisers lengde-/volumbevaring — og
disse er toppsjiktets karakterskiller. Boka trener regnemekanikken **og** bevis-
håndverket like grundig, med egen kjeglesnittdel og egen bevis-drill.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning til at fremgangsmåten er tydelig.**
   Ordrett NTNU-standardinstruks på hvert sett («Alle svar skal begrunnes»). Et
   riktig sluttsvar uten synlig fremgangsmåte gir lite/ingen uttelling. Fra 2020-
   instruksen skjerpet til: ta med **henvisninger til egenskaper og teoremer fra
   pensum**. Hvert løsningsforslag skrives som **A-besvarelse**: mellomregning ledd
   for ledd (radoperasjonene *er* argumentet), navngitt teorem der argumentet bæres,
   verbal konklusjonssetning, sluttsvar markert.

2. **Teoremer skal navngis / henvises** når de bærer argumentet: **spektralteoremet**
   (symmetrisk ⇒ ortogonalt diagonaliserbar), **invertibilitetssetningen**
   (det ≠ 0 ⇔ invertibel ⇔ …), **rang–nullitet-setningen**, **Cauchy–Schwarz**,
   **Gram–Schmidt**, **de Moivres formel**. På hjemmeeksamen 2020 var eksplisitt
   kildehenvisning til teoremnummer i pensumboka påbudt — boka navngir konsekvent.

3. **Kalkulator kan ikke redde deg (kode D).** Hjelpemiddel-D-kalkulatoren kan
   verken regne med matriser eller tegne grafer (eksplisitt i 2020-instruksen).
   Radreduksjon, determinanter, egenverdier, kjeglesnittskisser gjøres **for hånd**.
   Boka trener alt uten kalkulator-refleks; egen «regn selv»-holdning i eksemplene.
   (På 2020-hjemmeeksamen ga *maskinskrevne* løsninger null uttelling — håndskrift
   påbudt.)

4. **Notasjon (bokstandard, speiler eksamenssettene):** kolonnevektorer;
   $A=[\mathbf a\ \mathbf b\ \mathbf c]$ for matrise med kolonnevektorer; total-
   matrise $[A\mid\mathbf b]$; (redusert) trappeform; $\operatorname{rang}A$,
   nullitet; kolonnerom $\operatorname{Kol}A$, radrom $\operatorname{Rad}A$, nullrom
   $\operatorname{Null}A$; $\operatorname{Span}\{\mathbf v_1,\dots\}$; egenrom
   $E_\lambda=\operatorname{Null}(A-\lambda I)$; karakteristisk polynom
   $\det(A-\lambda I)$; vanlig diagonalisering $A=PDP^{-1}$, **ortogonal**
   diagonalisering $P^{T}AP=D$ ($P$ ortogonal, $P^{-1}=P^{T}$); norm $\lVert\cdot\rVert$;
   skalarprodukt $\mathbf u\cdot\mathbf v$; kryssprodukt $\mathbf u\times\mathbf v$;
   projeksjon $\operatorname{proj}_{\mathbf u}\mathbf v$; kvadratisk form
   $Q(\mathbf x)=\mathbf x^{T}B\mathbf x$ med **symmetrisk** $B$; komplekst tall
   $z=r(\cos\theta+i\sin\theta)$. **Hold $P^{T}AP=D$-konvensjonen (ortogonal) vs.
   $A=PDP^{-1}$ (generell) konsekvent.**

5. **Symmetrisk formmatrise i kjeglesnitt (ufravikelig regel).** I den kvadratiske
   formen $ax^2+bxy+cy^2$ skal av-diagonalelementet i $B$ være **halvparten** av
   kryssleddkoeffisienten ($B_{12}=B_{21}=b/2$). Å sette hele $b$ i av-diagonalen er
   den mest dokumenterte kjeglesnittfeilen (fører til feil egenverdier → feil
   klassifisering). Hver kjeglesnitt-føring understreker valget av $B$ og $P$.

6. **Eksakte svar** (heltall, brøk, $\sqrt2$, $\pi/4$, $r^{1/n}$), aldri
   desimaltilnærming — kalkulatoren er uansett svak, og et urent mellomsvar
   signaliserer regnefeil.

7. **Diagonaliserbarhet og klassifisering begrunnes ALLTID.** For ortogonal
   diagonalisering: navngi **spektralteoremet** (A symmetrisk ⇒ ortogonalt
   diagonaliserbar), og at egenvektorer til ulike egenverdier automatisk er
   ortogonale for symmetriske matriser. For kjeglesnittklassifisering: begrunn
   **via egenverdifortegnene** (begge samme fortegn ⇒ ellipse; ulike ⇒ hyperbel; én
   null ⇒ parabel; degenererte tilfeller nevnes), ikke bare navnet — og **fullfør**
   med standardformen i nye koordinater + skisse med roterte akser.

8. **Bevis-sjangeren er obligatorisk (~84 % har minst én, ofte to–tre).** Settets
   bakre halvdel er korte, selvstendige bevis. Boka har egen **bevis-drill** (11.2)
   og forankrer bevistemaene i sine fagkapitler (lineær uavhengighet av egenvektorer
   i 5.1, symmetri/kommutering i 2.1, ortogonale matrisers bevaring i 6.3/7.1,
   underrom i 4.1, radreduksjon bevarer løsningsmengden i 1.2, Cauchy–Schwarz i 6.1).
   Bevis føres komplett med **forutsetningssjekk**, **arbeid fra definisjonen** (et
   eksempel beviser ingen allpåstand), navngitt teorem, og skille «⇒»/«⇔».

9. **Ærlighet om format og arkivutvikling.** (a) Formatet er **usedvanlig stabilt
   fra 2017** (5–6 oppgaver, ~10–12 likt vektede delspørsmål, «begrunn alt», siste
   oppgaver = bevis) — prognosen er sikker. (b) **Komplekse tall og R³-plangeometri
   dominerte 2004–2011 men falt kraftig etter ~2012**; komplekse tall gjenoppsto i
   H2024 som en sant/usant-blokk. Begge dekkes (de står i emnebeskrivelsen), men
   merkes som lavere/variabel arkivfrekvens. (c) **Emnerevisjonen (aktiv H2024) kan
   ha løftet komplekse tall/logikk tilbake** — merk `(verifiser)` og følg opp mot
   H2025-settet. (d) Metodevalg uten dokumentert fasit merkes «⚠️ metode = faglig
   standard».

10. **Delpunktgjenbruk er lov og forventet.** Flere sett skriver eksplisitt at man
    kan bruke resultater fra tidligere deloppgaver selv om de ikke er løst.
    Egenverdiene fra (a) brukes i diagonaliseringen i (b) som brukes i
    kjeglesnittklassifiseringen i (c) — å *se* koblingen er en del av det som måles.
    Eksemplene i boka gjør denne kjeden eksplisitt.

### 1.6 Hjelpemiddel- og kodeforbehold (skal gjengis i Del 0)

- **Kode D:** «bestemt, enkel kalkulator tillatt», ingen trykte/håndskrevne
  hjelpemidler. Kalkulatoren kan **ikke** regne matriser eller tegne grafer
  (eksplisitt i 2020-instruksen). Alt matriseapparat pugges og gjøres for hånd.
- **Emnerevisjon 2024 (verifiser):** Arkivets nyeste sett (H2024) viste tegn til
  gjeninnføring av komplekse tall/logikk (sant/usant-blokk). Kalibrer boka mot de
  dokumenterte sjangrene, men følg opp med H2025-settet når det foreligger. Bruk
  `(verifiser)` der arkivbelegget er tynt eller trenden usikker.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): lineære system og radreduksjon
er motoren; matriser/determinant/invers er verktøykassen; vektorgeometri i R³ er den
konkrete geometrien; vektorrom/basis/dimensjon er språket; egenverdier/diagonalisering
er tyngdepunktet i lineær algebra; ortogonalitet/Gram–Schmidt er den geometriske
delen; **kjeglesnitt/hovedaksetransformasjon** er signaturkulminasjonen (bygger på
egenverdier + ortogonal diagonalisering); lineærtransformasjon kobler matriser til
avbildninger; komplekse tall og logikk er de selvstendige/variable søylene;
eksamenstreningen (inkl. bevis-drill) er sist. **Frekvensen styrer omfanget**, ikke
rekkefølgen: ~84–100 %-temaer får teori + eget drillkapittel; ~42–63 %-temaer får
ett–to kompakte kapitler; ~21–32 %-temaer får ett «bør kjenne til»-kapittel.
Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og kode D | 1 | Prioriteringsverktøyet + kodeforbehold + sensorregler; kjerne i studieguiden. |
| 1 | Lineære system, Gauss-eliminasjon og rang | 3 | System+Gauss+rang ~100 % (åpner nesten alltid) → **perfekt** → teori + drill. |
| 2 | Matriser, determinant og invers | 3 | Determinant/inverterbarhet ~84 % + invers via radoperasjoner ~53 % → perfekt/kunne. |
| 3 | Vektorgeometri i R³ | 2 | Kryssprodukt/areal/volum ~58 % + R³-plangeometri ~32 % (fallende) → kunne. |
| 4 | Vektorrom, underrom, basis og dimensjon | 3 | Underrom/basis/dim/Kol/Rad/Null ~63 % (voksende) + rang–nullitet → kunne, språk. |
| 5 | Egenverdier og diagonalisering | 4 | Egenverdier ~89 % + diagonalisering ~84 % + $A^n$-mønster ~21 % → **perfekt** → teori + drill. |
| 6 | Ortogonalitet, projeksjon og Gram–Schmidt | 3 | Skalarprodukt/projeksjon/Gram–Schmidt ~53 % (voksende) → kunne, geometrisk del. |
| 7 | Kjeglesnitt og hovedaksetransformasjon | 2 | **Signaturoppgaven** ~68 % → **perfekt** → teori + drill (binder hele pensumkjeden). |
| 8 | Lineære transformasjoner | 1 | Lineær-/matrisetransformasjon ~47 % → kunne → kompakt teori. |
| 9 | Komplekse tall (elementære) | 2 | Komplekse tall ~42 % (eldre epoke + T/F-gjenkomst 2024) → bør kjenne / kan komme igjen. |
| 10 | Logikk, mengdelære og matrisepotens | 1 | Logikk/mengde ~26 % + $A^n$/Cayley–Hamilton ~21 % → kjenne → ett kompakt kapittel. |
| 11 | Eksamenstrening og bevis | 5 | Føringsstandard + **bevis-drill** (bevis ~84 %) + 3 komplette øvingseksamener (kode D). |

**Avvik fra DNA-malen (dokumentert):**

1. **30 kapitler — innenfor DNA-taket (20–35), øvre halvdel.** MA1201 er et
   definisjons- og teoremrikt regne-**og**-bevisfag der hvert sett sveiper 5–7
   temaer, og geometri/kjeglesnitt kommer i tillegg til det rene matriseapparatet.
   Bredden kan ikke kuttes. Flashcard-tettheten er bevisst moderat-høy (518) fordi
   kode D-kalkulatoren ikke kan noe av matriseregningen — hele apparatet
   (egenverdiprosedyren, spektralteoremet, kjeglesnittkjeden, kryssprodukt-/volum-
   formlene med ½- og 1/6-faktorene) må sitte utenat.

2. **Kjeglesnitt får en egen del (Del 7), plassert ETTER egenverdier + ortogonalitet.**
   Selv om det er én oppgave, er det emnets signatur (~68 %) og den mest lærerike
   enkeltoppgaven: den *krever* egenverdier (Del 5) og ortogonal diagonalisering
   (Del 5/6) som forkunnskap, så den plasseres som kulminasjon med eget drillkapittel.
   Dette er MA1201s viktigste avvik fra slektskursene MAT1120/TMA4110.

3. **Egen bevis-drill (kap. 11.2)** i tillegg til at bevistemaene forankres i sine
   fagkapitler. Fordi settets bakre halvdel så godt som alltid er bevis (~84 %, ofte
   to–tre delspørsmål), er bevisferdigheten en selvstendig karakterskiller og får et
   eget drillkapittel — speiler ma0301/tma4110-forbildet.

4. **Komplekse tall (Del 9) og logikk/mengdelære (Del 10) er KJENNE-nivå, ikke
   utelatt.** De dominerte 2004–2011 og falt så kraftig, men står i emnebeskrivelsen
   og gjenoppsto i H2024 (sant/usant-blokk). De dekkes fullt men kompakt, med
   Eksamensvinkel-blokker som er ærlige om variabel arkivfrekvens og
   emnerevisjons-usikkerheten (verifiser mot H2025).

5. **Drillkapitlene ligger i temadelene sine** (1.3, 5.4, 7.2) i stedet for samlet i
   siste del: sjangrene drilles rett etter teorien. Del 11 beholder føringsstandarden,
   en egen bevis-drill (11.2) og de tre komplette øvingseksamenene.

6. **Vektorgeometri i R³ (Del 3) beholdes selv om plangeometri-delen (~32 %) faller.**
   Kryssprodukt/areal/volum (~58 %) er solid belagt; plan/normalvektor/avstand
   dekkes kompakt for fullstendighet (levde 2005–2011, lav nyere frekvens — merket).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** løs lineært
system + rang (parametrisk løsningsrom, løsbarhet), **B** egenverdier/egenvektorer/
egenrom, **C** diagonalisering (særlig ortogonal, symmetriske matriser), **D**
kjeglesnitt/hovedaksetransformasjon (form → $B$ → $P$ → standardform → klassifisering
→ skisse), **E** kryssprodukt/areal/volum (parallellepiped/tetraeder), **F** underrom/
basis/dimensjon/Kol-Rad-Null, **G** ortogonalitet: projeksjon/Gram–Schmidt/ortonormal
basis, **H** determinant/inverterbarhet (det-regler, parameterdrøfting, invers via
$[A\mid I]$), **I** lineær-/matrisetransformasjon (standardmatrise, surjektiv,
figuravbildning), **J** bevis-/teorioppgave (symmetri, lineær uavhengighet,
ortogonalitet, Cauchy–Schwarz, nilpotent/idempotent), **K** komplekse tall (polar,
de Moivre, $n$-te røtter, reell faktorisering), **L** logikk/mengdelære/sant-usant.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Kryssbok-forkunnskaper (verifiserte, bygde VGS-kapitler):** vektorer, skalarprodukt
og kryssprodukt/areal/volum er dekket på VGS-nivå og er de sterkeste ankrene — **R2**:
[Vektorer i tre dimensjoner](/bok/r2/r2-5-1), [Skalarprodukt og vektorprodukt](/bok/r2/r2-5-3),
[Areal og volum med vektorer](/bok/r2/r2-5-5), [Komplekse tall](/bok/r2/r2-4-1);
**R1**: [Polynomer og polynomdivisjon](/bok/r1/r1-1-1),
[Direkte bevis og moteksempler](/bok/r1/r1-9-1),
[Kontrapositiv og kontradiksjon](/bok/r1/r1-9-3);
**1T**: [Mengdelære](/bok/1t/1t-1-7), [Matematisk argumentasjon](/bok/1t/1t-6-1).
**Aktiveringsmarkør:** matriser, egenverdier, vektorrom, diagonalisering, ortogonal
diagonalisering, kjeglesnitt og formelt oppsatt logikk bygges fra grunnen i boka
(ingen VGS-forgjenger). Ubygde NTNU-forkunnskapsemner skrives som **klartekst** med
markøren *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver `/bok/<kode>/<id>`-lenke
når den finnes)*. Lenk kun til de verifiserte VGS-id-ene over, kun til kapitler som
finnes.

---

### Del 0 — Eksamenskartet, føringsstandarden og kode D

#### Kapittel 0.1: Eksamenskartet: den stabile dramaturgien, kjeglesnitt-signaturen og kode D

- **id:** `ma1201-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MA1201: den stabile 4-timers eksamenen med 5–7 oppgaver og ~9–12 likt vektede delspørsmål, den faste dramaturgien (tre regneoppgaver + to–tre bevis), kjeglesnitt-signaturoppgaven, sensorreglene («alt begrunnes», teoremnavning) og kode D-forbeholdet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (50 PDF-er 2004–2024, 17 sett grundig, løsningsforslag 2013–2024). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakter A–F, teller 100 %, **hjelpemiddelkode D** (enkel kalkulator som *ikke* kan matriser/grafer — alt for hånd), **5–7 oppgaver med ~9–12 likt vektede delspørsmål** (~20–30 min/delspørsmål), fullt begrunnet langsvar; deles med MA6201; (ii) **den stabile dramaturgien (fra 2017)**: oppg. 1–3 = regneoppgavene (system+rang, vektor/volum **eller** ortogonalitet, egenverdi→diagonalisering→**kjeglesnitt**), oppg. 4–6 = to–tre rene bevis; (iii) **temafrekvens-tabellen** (§2, dokumentert): system+Gauss+rang ~100 %, egenverdier ~89 %, diagonalisering ~84 %, determinant/inverterbarhet ~84 %, bevis ~84 % (minst én), **kjeglesnitt ~68 % (signatur)**, underrom/basis/dim ~63 % ↑, vektor kryssprodukt/volum ~58 %, ortogonalitet/Gram–Schmidt ~53 % ↑, invers via radoperasjoner ~53 %, lineærtransformasjon ~47 %, komplekse tall ~42 % (eldre + T/F-gjenkomst), R³-plangeometri ~32 % ↓, logikk/mengde ~26 %, $A^n$-mønster ~21 % ↑; (iv) **kjeglesnitt-signaturen**: den ene oppgaven som binder hele pensumkjeden (form→$B$→$P$→standardform→klassifisering→skisse) — den mest lærerike enkeltoppgaven; (v) **sensorreglene**: «alle svar skal begrunnes» + navngi teoremet som bærer argumentet (spektralteoremet, invertibilitetssetningen, rang–nullitet, Cauchy–Schwarz) + kode D betyr alt for hånd; (vi) **karakterskillene** (bestått ≈ mekanikken: radreduser+løs system, finn egenverdier/egenvektorer, regn determinant, kryssprodukt/volum; midt ≈ + ortogonal diagonalisering av symmetrisk matrise + **hele kjeglesnittkjeden** + Gram–Schmidt/projeksjon; topp ≈ de korte bevisene: lineær uavhengighet av egenvektorer, symmetri-/kommuteringsidentiteter, ortogonale matrisers bevaring, Cauchy–Schwarz); (vii) **format-ærligheten**: komplekse tall/plangeometri falt etter 2012, komplekse tall gjenoppsto 2024 (T/F), emnerevisjon H2024 kan ha løftet dem tilbake — verifiser mot H2025.
- **Innholdskontrakt:** Sjangerkatalogen A–L presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære eksamen** (4 t, ~10–12 likt vektede delspørsmål, kode D): **O1** løs lineært system + rang; **O2** vektorer med kryssprodukt/volum **eller** ortogonalitet/projeksjon; **O3** egenverdier → (ortogonal) diagonalisering → **kjeglesnittklassifisering med skisse**; **O4–O6** to–tre bevis fra {lineær uavhengighet av egenvektorer, symmetri/kommutering, ortogonale matrisers bevaring, radreduksjon/løsningsmengde, en anvendt ulikhet (Cauchy–Schwarz)}; **evt.** komplekse tall / sant-usant-blokk (verifiser). **Lesestrategi:** Del 1 er motoren, Del 5 er lineær-algebra-tyngdepunktet, **Del 7 (kjeglesnitt) er kulminasjonen — les den etter Del 5+6**, Del 11 løfter føring og bevis.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «hvorfor er kjeglesnittoppgaven den mest lærerike — hvilke fem pensumtemaer kjeder den sammen?»; «lag en puggeplan for det kode D-kalkulatoren ikke kan (egenverdiprosedyren, kryssprodukt/volum med ½- og 1/6-faktorene, spektralteoremet)»; «settets bakre halvdel er bevis — hvilke bevistyper går igjen, og hva kjennetegner et fullt uttellende bevis fra definisjonen?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de faste søylene; undervurdere kjeglesnittkjeden (binder alt); glemme at diagonaliserbarhet og klassifisering må begrunnes; hoppe over bevistreningen (~84 %); regne med kalkulator-refleks kode D ikke gir; overinvestere i R³-plangeometri (~32 %, fallende) på bekostning av ortogonalitet (voksende).
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog A–L, den stabile dramaturgien, kjeglesnitt-signaturen, sensorreglene, kode D, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Lineære system, Gauss-eliminasjon og rang *(prioritet: PERFEKT — åpningsoppgaven, ~100 %)*

#### Kapittel 1.1: Lineære system, totalmatrise og Gauss-eliminasjon

- **id:** `ma1201-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Motoren under hele faget: skriv et lineært system som totalmatrise, radreduser til (redusert) trappeform ved elementære radoperasjoner, les av pivoter og frie variabler — grunnteknikken bak rang, egenrom, kolonnerom og alt annet.
- **Forkunnskaper (kryssbok):** Ingen i boka. Likninger med flere ukjente fra VGS som utgangspunkt (kap. 1.1 bygger matriseapparatet fra grunnen).
- **Eksamensbelegg:** Sjanger A (~100 %) og motoren bak B/C/F/H. Fasitens grep: radreduser til trappeform, marker pivotene, les løsningen. Prioritet: **perfekt** (bærer hele faget).
- **Innholdskontrakt:** **Lineært system** og **totalmatrise** $[A\mid\mathbf b]$; **elementære radoperasjoner** (bytt, skaler, adder multiplum) og at hver = venstremultiplikasjon med en invertibel elementærmatrise; **trappeform** og **redusert trappeform**; **pivotposisjon, pivotkolonne, fri variabel**; Gauss-eliminasjon (fremover) + Gauss–Jordan (bakover); homogene system $A\mathbf x=\mathbf 0$ (alltid $\mathbf 0$; ikke-triviell løsning ⇔ frie variabler). Alt til aktiv bruk (kode D — radreduksjon for hånd, hvert steg vist).
- **Oppgavesjangre:** A. Mønstereksempel: «Løs systemet med totalmatrise $\left[\begin{smallmatrix}1&2&-1&3\\ 2&1&1&4\\ 1&-1&2&1\end{smallmatrix}\right]$ ved Gauss-eliminasjon. Oppgi pivotene og eventuelle frie variabler.»
- **Typiske feil:** Fortegnsfeil i radoperasjonene; glemmer å redusere helt til redusert trappeform før avlesning; forveksler trappeform og redusert trappeform; behandler et inkonsistent system som løsbart; teller pivoter feil.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Løsningsmengder, rang og løsbarhet

- **id:** `ma1201-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1201-1-1`
- **kapitteltype:** teori
- **description:** Tre løsningsutfall, løsningsrommet parametrisk (partikulær + homogen = x₀ + span), rang = antall pivoter, løsbarhetskriteriet (rang[A] = rang[A|b]), og radreduksjon bevarer løsningsmengden — koblet til bevissjangeren.
- **Forkunnskaper (kryssbok):** Kap. 1.1.
- **Eksamensbelegg:** Sjanger A (~100 %) + bevissjanger J (radreduksjon bevarer løsningsmengden, 2022/2023aug). Fasitens grep: skriv «alle løsninger = $\mathbf x_0+\operatorname{Span}\{\dots\}$» eksplisitt; rang = antall ledende ettall; løsbar for alle høyresider ⇔ rang = antall rader. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Tre løsningsutfall** (inkonsistent rad ⇒ ingen; fri variabel ⇒ uendelig; pivot i hver variabelkolonne ⇒ entydig); **løsningsrommet parametrisk** — homogent: fri variabel → basisvektorer for $\operatorname{Null}A$; inhomogent: **partikulær + homogen** $\mathbf x=\mathbf x_0+\operatorname{Span}\{\dots\}$; **rang** = antall pivoter; **løsbarhetskriterium** ($A\mathbf x=\mathbf b$ løsbart ⇔ $\mathbf b\in\operatorname{Kol}A$ ⇔ $\operatorname{rang}[A]=\operatorname{rang}[A\mid\mathbf b]$; løsbart for **alle** $\mathbf b$ ⇔ rang = antall rader); **radreduksjon bevarer løsningsmengden** («$A\mathbf x=\mathbf b$ og $PA\mathbf x=P\mathbf b$ har samme løsninger for invertibel $P$» — sjanger J). Alt til aktiv bruk.
- **Oppgavesjangre:** A/J. Mønstereksempel: «Løs det homogene systemet med koeffisientmatrise $A$, angi løsningsrommet som et span, og bestem $\operatorname{rang}A$. Er $A\mathbf x=\mathbf c$ løsbart for enhver høyreside $\mathbf c$?»
- **Typiske feil:** Teller frie variabler som rang; glemmer å parametrisere hele løsningsrommet i homogene system; oppgir bare partikulærløsning der det er uendelig mange; blander «ingen løsning» og «bare trivialløsning»; oppgir løsning uten partikulær + retningsvektor.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: Drill: Gauss-eliminasjon, parameteranalyse og rang

- **id:** `ma1201-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `ma1201-1-2`
- **kapitteltype:** drill
- **description:** Hele oppgave-1-repertoaret drillet til automatikk: radreduksjon uten regnefeil, løsning på parameterform, parameteravhengige system med tilfelledeling (for hvilke t har systemet 0/1/uendelig mange løsninger), og rang/løsbarhet.
- **Eksamensbelegg:** Dekker sjanger A samlet (~100 %). Variantkatalog: løs system (entydig/uendelig/ingen), parameterform, parameteranalyse med tilfelledeling (for hvilke $t/a$), homogent system + nullromsbasis, rang og løsbarhet for alle høyresider. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skriv totalmatrise; (2) radreduser til redusert trappeform uten regnefeil; (3) klassifiser utfallet fra pivotmønsteret; (4) skriv løsningen (parameterform ved frie variabler); (5) ved parameter: radreduser symbolsk, finn kritiske verdier via pivot-/determinantbetingelse, del i tilfeller. Gjennomregnet «oppgave 1-case» med sensor-margnotater om føringspoengene (vis radoperasjonene, oppgi frie variabler, del alle tilfeller). 12–15 oppgaver på eksamensnivå: minst tre radreduksjoner, to parameterform, tre parameteranalyser, ett homogent m/nullromsbasis, ett rang/løsbarhet.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Løs systemet ved Gauss. (b) For hvilke $a$ er systemet konsistent? (c) Skriv den generelle løsningen når $a=2$, og oppgi $\operatorname{rang}A$.»
- **Typiske feil:** Regnefeil under tidspress; **glemt tilfelle** i parameteranalysen; deler på en parameter som kan være 0; ufullstendig parameterform; ikke redusert helt til redusert trappeform.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Matriser, determinant og invers *(prioritet: PERFEKT/KUNNE — determinant/inverterbarhet ~84 %, invers via radoperasjoner ~53 %)*

#### Kapittel 2.1: Matrisealgebra: multiplikasjon, transponert og symmetriske matriser

- **id:** `ma1201-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `ma1201-1-1`
- **kapitteltype:** teori
- **description:** Matrisealgebraen faget hviler på: produkt, transponert, symmetriske og ortogonale matriser, og regnereglene ((AB)ᵀ = BᵀA, AᵀA symmetrisk) som bærer bevissjangeren — inkludert «AB symmetrisk ⇔ AB = BA» for symmetriske A, B.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Matrisebegrep bygges fra grunnen her *(NTNU-forkunnskapsemne for utfyllende matriseregning, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Verktøy i nesten alle bevis (sjanger J) — «AB symmetrisk ⇔ AB = BA» (2023H), «$A^{T}A$ alltid symmetrisk» (2024). Fasitens grep: bruk $(AB)^{T}=B^{T}A^{T}$ presist. Prioritet: **kunne**, men transponertreglene og symmetri er bevis-gull.
- **Innholdskontrakt:** **Matriseprodukt** (rad-gang-kolonne, ikke-kommutativt); **regneregler** (assosiativ, distributiv, $IA=A$); **transponert** $A^{T}$ med $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$, $(AB)^{T}=B^{T}A^{T}$, $(A^{T})^{T}=A$; **spesielle matriser**: identitet, diagonal, triangulær, **symmetrisk** ($A^{T}=A$), skjevsymmetrisk; **ortogonal matrise** (introdusert: $Q^{T}Q=I$, dybde i 6.3/7.1); potenser $A^k$; at **$A^{T}A$ er symmetrisk** og «AB symmetrisk ⇔ AB = BA» for symmetriske $A,B$ (bevissjanger J, forankres her). Alt til aktiv bruk.
- **Oppgavesjangre:** J-forberedelse. Mønstereksempel: «La $A,B$ være symmetriske $n\times n$-matriser. Vis at $AB$ er symmetrisk hvis og bare hvis $AB=BA$.»
- **Typiske feil:** Antar $AB=BA$; feil i $(AB)^{T}=B^{T}A^{T}$ (bytter ikke rekkefølge); dimensjonsfeil i produktet; forveksler $A^2$ (matriseprodukt) med elementvis kvadrering; viser bare én vei i «⇔».
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Determinant, kofaktorutvikling og inverterbarhet

- **id:** `ma1201-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1201-2-1`
- **kapitteltype:** teori
- **description:** Determinanten ved kofaktorutvikling og radreduksjon, egenskapene (produktregel, det(cA) = cⁿdet A, transponert), sentralregelen det A ≠ 0 ⇔ invertibel, invertibilitetssetningen, og parameterdrøfting (for hvilke t er A invertibel?).
- **Forkunnskaper (kryssbok):** Kap. 2.1. Determinant på VGS-nivå fra [Areal og volum med vektorer](/bok/r2/r2-5-5).
- **Eksamensbelegg:** Sjanger H (~84 %, ofte flettet inn i A/B/C) + T/F-felle $\det(cA)$ (2024). Fasitens grep: velg rad/kolonne med flest nuller; reduser store determinanter i stedet for blind kofaktorutvikling; $\det A\ne0$ ⇔ invertibel. Prioritet: **perfekt** (brukes overalt, karakteristisk likning i Del 5).
- **Innholdskontrakt:** **Determinant** for 2×2 og 3×3; **kofaktorutvikling** langs rad/kolonne (velg med flest nuller); **radoperasjoners virkning** (bytte ⇒ fortegn, skalering ⇒ faktor, adder multiplum ⇒ uendret); **egenskaper**: $\det(AB)=\det A\det B$, $\det A^{T}=\det A$, $\det A^{-1}=1/\det A$, **$\det(cA)=c^n\det A$** (fast T/F-felle, $n$ = størrelse), $\det(A^n)=(\det A)^n$, triangulær ⇒ produkt av diagonalen; **$\det A\ne0$ ⇔ invertibel**; **invertibilitetssetningen** (ekvivalenskjeden: invertibel ⇔ $\det\ne0$ ⇔ redusert trappeform $=I$ ⇔ kolonnene lineært uavhengige ⇔ rang $=n$ ⇔ $A\mathbf x=\mathbf b$ entydig for alle $\mathbf b$ ⇔ $0$ ikke egenverdi); **parameterdrøfting** («for hvilke $t$ er $A(t)$ invertibel?» = løs $\det A(t)\ne0$). Alt til aktiv bruk; navngi invertibilitetssetningen.
- **Oppgavesjangre:** H. Mønstereksempel: «For hvilke reelle $t$ er $A(t)$ invertibel? Regn $\det A(t)$ ved kofaktorutvikling og avgjør.»
- **Typiske feil:** **$\det(cA)=c\det A$** (skal være $c^n$) — klassisk T/F-felle; fortegnsfeil i kofaktormønsteret $(-1)^{i+j}$; glemmer at radbytte skifter fortegn; bruker $\det(A+B)=\det A+\det B$ (galt); kofaktorutvikler stor determinant uten å redusere først.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.3: Invers matrise ved elementære radoperasjoner

- **id:** `ma1201-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-2-2`
- **kapitteltype:** teori
- **description:** Den inverse matrisen: 2×2-formelen, [A | I] → [I | A⁻¹]-metoden, regnereglene (AB)⁻¹ = B⁻¹A⁻¹, verifikasjonen AB = I, og bevisbruk (nilpotent: A^m = 0 ⇒ I − A invertibel).
- **Forkunnskaper (kryssbok):** Kap. 2.2, 1.1.
- **Eksamensbelegg:** Sjanger H (~53 % invers via radoperasjoner) + bevissjanger J (nilpotent $A^m=0\Rightarrow I-A$ invertibel, 2012aug). Fasitens grep: radreduser $[A\mid I]$, verifiser $AB=I$. Prioritet: **kunne**, men nilpotens-triks er bevis-gull.
- **Innholdskontrakt:** **Invers** $A^{-1}$ ($AA^{-1}=A^{-1}A=I$); **2×2-formel** $A^{-1}=\frac{1}{ad-bc}\left[\begin{smallmatrix}d&-b\\-c&a\end{smallmatrix}\right]$; **elementære radoperasjoner** $[A\mid I]\to[I\mid A^{-1}]$; **regneregler** $(AB)^{-1}=B^{-1}A^{-1}$, $(A^{T})^{-1}=(A^{-1})^{T}$; **verifikasjon** ($AB=I$); løse $A\mathbf x=\mathbf b$ via $\mathbf x=A^{-1}\mathbf b$; **bevisbruk** (Neumann-triks: $A^m=0\Rightarrow(I-A)^{-1}=I+A+\dots+A^{m-1}$; sjanger J). Alt til aktiv bruk.
- **Oppgavesjangre:** H/J. Mønstereksempel: «For $t=1$, finn $A(1)^{-1}$ ved elementære radoperasjoner og verifiser $A A^{-1}=I$» og «Anta $A^2=O$. Vis at $I-A$ er invertibel med $(I-A)^{-1}=I+A$.»
- **Typiske feil:** Glemmer $ad-bc\ne0$-kravet i 2×2-formelen; feil rekkefølge i $(AB)^{-1}$; radreduserer $[A\mid I]$ feil; antar invers eksisterer uten å sjekke $\det\ne0$; verifiserer ikke $AB=I$.
- **Quiz: 18 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Vektorgeometri i R³ *(prioritet: KUNNE — kryssprodukt/areal/volum ~58 %, R³-plangeometri ~32 % fallende)*

#### Kapittel 3.1: Kryssprodukt, areal og volum

- **id:** `ma1201-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-2-2`
- **kapitteltype:** teori
- **description:** Kryssprodukt komponentvis, areal av parallellogram/trekant (‖u×v‖ og ½‖u×v‖), volum av parallellepiped og tetraeder (|det[u v w]| og 1/6 av det) — med ½- og 1/6-faktorene som glemmes lett, sikret.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (determinant). [Skalarprodukt og vektorprodukt](/bok/r2/r2-5-3), [Areal og volum med vektorer](/bok/r2/r2-5-5) (VGS-grunnlaget reaktiveres og formaliseres).
- **Eksamensbelegg:** Sjanger E (~58 %). Fasitens grep: kryssprodukt via kofaktor-oppskrift; areal = $\lVert\mathbf u\times\mathbf v\rVert$ (trekant ½); volum = $\lvert\det[\mathbf u\ \mathbf v\ \mathbf w]\rvert=\lvert\mathbf u\cdot(\mathbf v\times\mathbf w)\rvert$ (tetraeder 1/6). Parametervariant (2023H): velg $t$ så $\det=1$ / så volumet blir gitt. Prioritet: **kunne** (men perfekt på faktorene).
- **Innholdskontrakt:** **Skalarprodukt**, norm, vinkel; **kryssprodukt** $\mathbf u\times\mathbf v$ komponentvis (kofaktor-oppskrift), egenskaper ($\perp$ begge, høyrehåndsregel, $\mathbf u\times\mathbf v=-\mathbf v\times\mathbf u$); **skalartrippelprodukt** $\mathbf u\cdot(\mathbf v\times\mathbf w)=\det[\mathbf u\ \mathbf v\ \mathbf w]$; **areal** parallellogram $=\lVert\mathbf u\times\mathbf v\rVert$, **trekant $=\tfrac12\lVert\mathbf u\times\mathbf v\rVert$**; **volum** parallellepiped $=\lvert\det[\mathbf u\ \mathbf v\ \mathbf w]\rvert$, **tetraeder/pyramide $=\tfrac16$** av parallellepiped-volumet; parametervariant (velg $t$ så $\det$/volum blir gitt). Alt til aktiv bruk; faktorene ½ og 1/6 er egen warning.
- **Oppgavesjangre:** E. Mønstereksempel: «La $\mathbf u,\mathbf v,\mathbf w\in\mathbb R^3$. Finn arealet av parallellogrammet utspent av $\mathbf u,\mathbf v$ via kryssproduktet, og volumet av tetraederet utspent av alle tre.»
- **Typiske feil:** **Glemt 1/6-faktor** for tetraeder og **½-faktor** for trekant (mest dokumenterte); fortegnsfeil i kryssproduktets komponenter; forveksler $\mathbf u\cdot\mathbf v$ (skalar) og $\mathbf u\times\mathbf v$ (vektor); tar ikke absoluttverdi av determinanten for volum.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Plan, normalvektor og avstand i R³ *(bør kjenne til)*

- **id:** `ma1201-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `ma1201-3-1`
- **kapitteltype:** teori
- **description:** Plan gjennom punkt med gitt normalvektor, plan gjennom tre punkter, og avstand fra punkt til plan — sentralt 2005–2011, nesten borte etter, dekket kompakt for fullstendighet.
- **Forkunnskaper (kryssbok):** Kap. 3.1. [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger E-variant, **~32 % (fallende — levde 2005–2011, ~1 forekomst 2020–2024)**. Ærlig eksamensvinkel: lav nyere frekvens; dekkes kompakt fordi det står i emnebeskrivelsen og kan returnere. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Planligning** $\mathbf n\cdot(\mathbf x-\mathbf x_0)=0$ (punkt + normalvektor); **plan gjennom tre punkter** (normalvektor via kryssprodukt av to retningsvektorer); **avstand punkt–plan** $d=\dfrac{\lvert\mathbf n\cdot(\mathbf p-\mathbf x_0)\rvert}{\lVert\mathbf n\rVert}$; parametrisk vs. normalform; høyrehåndssystem (kjennskap). Kompakt; Eksamensvinkel-blokk sier eksplisitt at nyere frekvens er lav.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn ligningen til planet gjennom de tre punktene $P,Q,R$, og bestem avstanden fra origo til planet.»
- **Typiske feil:** Glemmer å normalisere $\mathbf n$ i avstandsformelen; feil normalvektor (kryssprodukt av feil retningsvektorer); blander parametrisk og normalform; fortegnsfeil.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Vektorrom, underrom, basis og dimensjon *(prioritet: KUNNE — Kol/Rad/Null/basis/dim ~63 %, voksende; språket)*

#### Kapittel 4.1: Underrom, span og de tre betingelsene

- **id:** `ma1201-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-1-2`
- **kapitteltype:** teori
- **description:** Underrom via de tre betingelsene (inneholder 0, lukket under addisjon og skalarmultiplikasjon), eller ved identifikasjon som null-/kolonnerom — «vis at M er et underrom» ført fra definisjonen, ikke med ett eksempel.
- **Forkunnskaper (kryssbok):** Kap. 1.2. [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger F (~63 %, voksende) + bevissjanger J. Fasitens grep: sjekk de tre betingelsene, eller vis $M=\operatorname{Null}A$/$\operatorname{Kol}A$. Prioritet: **kunne** (og bevis fra definisjonen).
- **Innholdskontrakt:** **Vektorrom $\mathbb R^n$** (kort — aksiomene som «regler du kjenner»); **underrom** via de **tre betingelsene** ($\mathbf 0\in M$, lukket under $+$, lukket under skalar) og sjekkprosedyren; **span** $\operatorname{Span}\{\mathbf v_1,\dots\}$ er alltid et underrom; typiske underrom å verifisere ($M=\{\mathbf x:x_1=x_2+2x_3\}$, løsningsrommet til homogent system, $\operatorname{Kol}A$/$\operatorname{Null}A$); hvorfor delmengder uten $\mathbf 0$ (f.eks. $\{\mathbf x:x_1=1\}$) IKKE er underrom; å **arbeide fra definisjonen** (et eksempel er ikke et bevis). Alt til aktiv bruk (underrom-bevis er fast, sjanger J).
- **Oppgavesjangre:** F/J. Mønstereksempel: «La $M=\{\mathbf x\in\mathbb R^3\mid x_1=x_2+2x_3\}$. Vis at $M$ er et underrom av $\mathbb R^3$.»
- **Typiske feil:** **Hopper over en av de tre betingelsene**; glemmer å sjekke $\mathbf 0\in M$; **bevis erstattet med ett eksempel** (dokumentert); forveksler «delmengde» og «underrom».
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Lineær uavhengighet, basis og dimensjon

- **id:** `ma1201-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-4-1`
- **kapitteltype:** teori
- **description:** Lineær uavhengighet (kun triviell kombinasjon gir 0), basis (uavhengig + utspenner), dimensjon = rang, og den todelte standarden sensor krever — inkludert «ortogonale ikke-null-vektorer er lineært uavhengige».
- **Forkunnskaper (kryssbok):** Kap. 4.1, 1.1.
- **Eksamensbelegg:** Sjanger F (~63 %) + bevissjanger J (lineær uavhengighet fra definisjonen). Fasitens grep: sett lineærkombinasjon $=\mathbf 0$, radreduser, pivot i hver kolonne ⇒ uavhengig. Prioritet: **kunne**.
- **Innholdskontrakt:** **Lineærkombinasjon** og **span**; **lineær uavhengighet** ($c_1\mathbf v_1+\dots+c_k\mathbf v_k=\mathbf 0\Rightarrow$ alle $c_i=0$) — vist via radreduksjon (pivot i hver kolonne); **basis** = uavhengig + utspenner; **dimensjon** = antall basisvektorer = rang; **dimensjonsargumentet** ($k$ uavhengige vektorer i et $k$-dim rom er en basis); at **ortogonale ikke-null-vektorer er lineært uavhengige** (bro til Del 6, sjanger J). Alt til aktiv bruk (bevis fra definisjonen).
- **Oppgavesjangre:** F/J. Mønstereksempel: «Avgjør om $\{\mathbf v_1,\mathbf v_2,\mathbf v_3\}$ er en basis for $\mathbb R^3$, og begrunn via rang» og «Vis at to ortogonale ikke-null-vektorer er lineært uavhengige.»
- **Typiske feil:** Viser bare uavhengighet ELLER utspenning (glemmer dimensjonsargumentet); regner uavhengighet feil; oppgir en avhengig mengde som basis; teller dimensjon feil.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.3: Kolonnerom, radrom, nullrom og rang–nullitet-setningen

- **id:** `ma1201-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-4-2`
- **kapitteltype:** teori
- **description:** De tre matriserommene (Kol A, Rad A, Null A) med basis fra trappeform, dimensjonene (rang og nullitet), og rang–nullitet-setningen (rang + nullitet = antall kolonner) som konsistenssjekk.
- **Forkunnskaper (kryssbok):** Kap. 4.2, 1.2.
- **Eksamensbelegg:** Sjanger F (~63 %, voksende i 2020–2024). Fasitens grep: **$\operatorname{Kol}A$-basis fra ORIGINALe pivotkolonner** (ikke fra trappeform!); $\operatorname{Null}A$-basis fra fri-variabel-vektorene; nullitet + rang = antall kolonner. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kolonnerom** $\operatorname{Kol}A$ (basis = **originale** pivotkolonner), **radrom** $\operatorname{Rad}A$ (basis = ikke-null-rader i trappeform), **nullrom** $\operatorname{Null}A$ (basis fra fri-variabel-vektorene); **rang** $=\dim\operatorname{Kol}A=\dim\operatorname{Rad}A$; **nullitet** $=\dim\operatorname{Null}A$; **rang–nullitet-setningen** ($\operatorname{rang}A+\operatorname{nullitet}A=$ antall kolonner) som konsistenssjekk. Alt til aktiv bruk; understrek at $\operatorname{Kol}A$-basis tas fra originalen.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn en basis for $\operatorname{Kol}A$, $\operatorname{Rad}A$ og $\operatorname{Null}A$, og verifiser rang–nullitet-setningen.»
- **Typiske feil:** **$\operatorname{Kol}A$-basis fra trappeform-kolonner i stedet for originalen** (klassisk felle); rang/nullitet-forveksling; glemmer at radrom bevares under radoperasjoner (kolonnerom endres); regnefeil i basisavlesning.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Egenverdier og diagonalisering *(prioritet: PERFEKT — egenverdier ~89 %, diagonalisering ~84 %; lineær-algebra-tyngdepunkt)*

#### Kapittel 5.1: Egenverdier, egenvektorer og egenrom

- **id:** `ma1201-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1201-4-3`
- **kapitteltype:** teori
- **description:** Det karakteristiske polynomet det(A − λI) = 0, egenrom = Null(A − λI) med basis for hver λ, verifisering av egenvektorer (Av = λv), og det sentrale bevistemaet: egenvektorer til ulike egenverdier er lineært uavhengige.
- **Forkunnskaper (kryssbok):** Kap. 4.3 (nullrom/basis), 2.2 (determinant). [Polynomer og polynomdivisjon](/bok/r1/r1-1-1).
- **Eksamensbelegg:** Sjanger B (~89 %) + bevissjanger J (lineær uavhengighet av egenvektorer, 2022/2023H/2024). Fasitens grep: for 3×3 gis ofte én egenverdi som hint; egenrom = $\operatorname{Null}(A-\lambda I)$; angi basis. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Karakteristisk polynom** $\det(A-\lambda I)$ og karakteristisk likning; **egenverdi/egenvektor** ($A\mathbf v=\lambda\mathbf v$, $\mathbf v\ne\mathbf 0$); **egenrom** $E_\lambda=\operatorname{Null}(A-\lambda I)$ med **basis** per $\lambda$; algebraisk vs. geometrisk multiplisitet; verifisering («vis at $\mathbf v$ er egenvektor» = sett inn $A\mathbf v=\lambda\mathbf v$); $\det A=\prod\lambda_i$, $\operatorname{spor}A=\sum\lambda_i$ (kontroll); **egenvektorer til ulike egenverdier er lineært uavhengige** (bevistema, forankres her — motsigelses-/kombinasjonsargument, sjanger J). Alt til aktiv bruk.
- **Oppgavesjangre:** B/J. Mønstereksempel: «Gitt en $3\times3$-matrise $A$ der én egenverdi er $1$. Finn alle egenverdiene og en basis for hvert egenrom» og «Vis at egenvektorer til to ulike egenverdier er lineært uavhengige.»
- **Typiske feil:** Fortegnsfeil i $\det(A-\lambda I)$; glemmer at egenvektorer er ikke-null; oppgir egenverdi uten egenrom-basis; forveksler algebraisk og geometrisk multiplisitet; bruker bare ett eksempel i uavhengighetsbeviset.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.2: Diagonalisering: A = PDP⁻¹

- **id:** `ma1201-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-5-1`
- **kapitteltype:** teori
- **description:** Vanlig diagonalisering A = PDP⁻¹ (P har egenvektorene som kolonner, D egenverdiene), diagonaliserbarhetskriteriet (n uavhengige egenvektorer), og hvordan man begrunner — eller avkrefter — at en matrise er diagonaliserbar.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 2.3.
- **Eksamensbelegg:** Sjanger C (~84 %, vanlig-varianten). Fasitens grep: $P$ = egenvektorene som kolonner, $D$ = egenverdiene i **samme rekkefølge** (P/D-matching); diagonaliserbar ⇔ $n$ lineært uavhengige egenvektorer. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Diagonalisering** $A=PDP^{-1}$ ($P=[\mathbf v_1\ \cdots\ \mathbf v_n]$ egenvektorer, $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$ i **samme rekkefølge**); **diagonaliserbarhetskriteriet** ($A$ diagonaliserbar ⇔ $n$ lineært uavhengige egenvektorer ⇔ hvert egenroms dim = algebraisk multiplisitet); **$n$ distinkte egenverdier ⇒ diagonaliserbar** (tilstrekkelig, ikke nødvendig); **ikke-diagonaliserbar**: vis at et egenrom har for lav dimensjon (geometrisk < algebraisk). Alt til aktiv bruk; diagonaliserbarhet begrunnes ALLTID.
- **Oppgavesjangre:** C. Mønstereksempel: «Avgjør om $A$ er diagonaliserbar. Hvis ja, finn invertibel $P$ og diagonal $D$ med $A=PDP^{-1}$.»
- **Typiske feil:** **$P/D$ i ulik rekkefølge** (egenvektorer/egenverdier matcher ikke); påstår diagonaliserbar uten å sjekke multiplisitet; regnefeil i $P^{-1}$; antar at ikke-invertibel ⇒ ikke-diagonaliserbar (galt).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.3: Ortogonal diagonalisering og spektralteoremet

- **id:** `ma1201-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1201-5-2`
- **kapitteltype:** teori
- **description:** Spektralteoremet (symmetrisk ⇒ ortogonalt diagonaliserbar), ortogonal P med P⁻¹ = Pᵀ og PᵀAP = D, at egenvektorer til ulike egenverdier automatisk er ortogonale for symmetriske matriser, og normaliseringen — selve forspillet til kjeglesnittoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 5.2, 2.1 (symmetriske/ortogonale matriser). (Gram–Schmidt fra Del 6 brukes ved gjentatte egenverdier — merkes.)
- **Eksamensbelegg:** Sjanger C (~84 %, **ortogonal-varianten er den vanligste i nyere sett**) — og direkte forkunnskap for kjeglesnitt (Del 7). Fasitens grep: navngi spektralteoremet, normaliser egenvektorene, $P$ ortogonal med $P^{T}AP=D$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Spektralteoremet**: reell symmetrisk matrise er **ortogonalt diagonaliserbar**; egenvektorer til ulike egenverdier er **automatisk ortogonale**; **ortogonal diagonalisering** $P^{T}AP=D$ med $P$ ortogonal ($P^{-1}=P^{T}$, ortonormale egenvektorkolonner); **normalisering** av egenvektorene; ved gjentatt egenverdi: Gram–Schmidt på egenrommet (⚠️ metode = faglig standard, forankres i 6.2); forskjellen vanlig ($A=PDP^{-1}$) vs. ortogonal ($P^{T}AP=D$) — normaliser KUN i ortogonal-varianten. Alt til aktiv bruk; navngi spektralteoremet.
- **Oppgavesjangre:** C. Mønstereksempel: «Vis at den symmetriske matrisen $A$ er ortogonalt diagonaliserbar, og finn en ortogonal $P$ og diagonal $D$ med $P^{T}AP=D$.»
- **Typiske feil:** **Egenvektor uten normalisering** når $P$ skal være ortogonal (eller normaliserer unødig i $PDP^{-1}$-varianten); **hopper til «ortogonalt diagonaliserbar» uten å nevne at $A$ er symmetrisk** (manglende spektralteorem-henvisning); glemmer Gram–Schmidt ved gjentatte egenverdier; feil $P^{T}AP$ vs. $PAP^{T}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.4: Drill: egenverdikjeden og matrisepotens Aⁿ

- **id:** `ma1201-5-4` · **number:** 5.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma1201-5-3`
- **kapitteltype:** drill
- **description:** Hele egenverdikjeden drillet på én matrise (egenverdier → egenrom → diagonalisering → ortogonal diagonalisering) pluss Aⁿ = PDⁿP⁻¹ (A⁵, A¹⁰⁰⁰) og Cayley–Hamilton/Fibonacci-mønster — det tyngste regne-repertoaret til automatikk.
- **Eksamensbelegg:** Dekker sjanger B/C samlet (~84–89 %) + $A^n$-mønster (~21 %, stigende: 2021, 2024). Variantkatalog: egenverdikjeden komplett, vanlig vs. ortogonal diagonalisering, $A^n=PD^nP^{-1}$, Cayley–Hamilton, Fibonacci-potenser. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) $\det(A-\lambda I)=0$ → egenverdier; (2) egenrom-basis per $\lambda$; (3) diagonaliserbar? (multiplisitetssjekk); (4) $P,D$ (matchet) — normaliser hvis ortogonal (symmetrisk); (5) anvend ($A^n=PD^nP^{-1}$, evt. Cayley–Hamilton). Gjennomregnet «egenverdicase» med sensor-margnotater (P/D-matching, spektralteorem-henvisning, hint-gjenbruk). 12–15 oppgaver: fem egenverdikjeder, tre vanlig diagonalisering, tre ortogonal, to $A^n$, ett Cayley–Hamilton/Fibonacci.
- **Oppgavesjangre:** B/C. Mønstereksempel: «(a) Finn egenverdiene og egenrommene til $A$. (b) Diagonaliser $A$. (c) Bruk (b) til å regne $A^{10}$.»
- **Typiske feil:** P/D-rekkefølgefeil; glemmer normalisering i ortogonal-varianten; regnefeil i $P^{-1}$; bruker $A^n$ uten diagonalisering (tungt); glemmer spektralteorem-henvisning.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Ortogonalitet, projeksjon og Gram–Schmidt *(prioritet: KUNNE — skalarprodukt/projeksjon/Gram–Schmidt ~53 %, voksende)*

#### Kapittel 6.1: Skalarprodukt, norm, projeksjon og Cauchy–Schwarz

- **id:** `ma1201-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-4-2`
- **kapitteltype:** teori
- **description:** Skalarprodukt og norm, projeksjon av v på u (= (v·u/‖u‖²)u) og på et underrom, og Cauchy–Schwarz-ulikheten anvendt i bevis — inkludert (Σaᵢ)(Σ1/aⱼ) ≥ n².
- **Forkunnskaper (kryssbok):** Kap. 4.2. [Skalarprodukt og vektorprodukt](/bok/r2/r2-5-3).
- **Eksamensbelegg:** Sjanger G (~53 %, voksende) + bevissjanger J (Cauchy–Schwarz-anvendelse, 2023H). Fasitens grep: projeksjonsformelen; Cauchy–Schwarz $\lvert\mathbf u\cdot\mathbf v\rvert\le\lVert\mathbf u\rVert\lVert\mathbf v\rVert$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Skalarprodukt** $\mathbf u\cdot\mathbf v$, **norm** $\lVert\mathbf v\rVert=\sqrt{\mathbf v\cdot\mathbf v}$, vinkel, ortogonalitet ($\mathbf u\cdot\mathbf v=0$); **projeksjon** av $\mathbf v$ på $\mathbf u$: $\operatorname{proj}_{\mathbf u}\mathbf v=\dfrac{\mathbf v\cdot\mathbf u}{\lVert\mathbf u\rVert^2}\mathbf u$; **projeksjon på underrom** $W$ = sum av projeksjoner på en **ortogonal** basis for $W$; ortogonal dekomposisjon $\mathbf v=\operatorname{proj}_W\mathbf v+\mathbf v^\perp$; **Cauchy–Schwarz** $\lvert\mathbf u\cdot\mathbf v\rvert\le\lVert\mathbf u\rVert\lVert\mathbf v\rVert$ og anvendelse ($(\sum a_i)(\sum 1/a_j)\ge n^2$, sjanger J); trekantulikheten (kjennskap). Alt til aktiv bruk.
- **Oppgavesjangre:** G/J. Mønstereksempel: «Finn projeksjonen av $\mathbf v$ på $\mathbf u$ og komponenten av $\mathbf v$ ortogonal på $\mathbf u$» og «Bruk Cauchy–Schwarz til å vise $(\sum_{i=1}^n a_i)(\sum_{j=1}^n 1/a_j)\ge n^2$ for positive $a_i$.»
- **Typiske feil:** Projeksjon på underrom uten **ortogonal** basis (bruker vilkårlig basis); glemmer $\lVert\mathbf u\rVert^2$ i nevneren; feil retning på Cauchy–Schwarz-ulikheten; forveksler projeksjon og ortogonal komponent.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.2: Gram–Schmidt og ortonormal basis

- **id:** `ma1201-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-6-1`
- **kapitteltype:** teori
- **description:** Gram–Schmidt-prosessen for å ortogonalisere en gitt basis (og normalisere til ortonormal), utvidelse av en ortonormal mengde til en ortonormal basis for Rⁿ, og koblingen til ortogonal diagonalisering ved gjentatte egenverdier.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 4.2.
- **Eksamensbelegg:** Sjanger G (~53 %, voksende). Fasitens grep: Gram–Schmidt steg for steg (trekk fra projeksjonene), deretter normaliser. Prioritet: **kunne** (og forkunnskap for 5.3/7 ved gjentatte egenverdier).
- **Innholdskontrakt:** **Gram–Schmidt-prosessen**: fra basis $\{\mathbf x_1,\dots,\mathbf x_k\}$ til ortogonal $\{\mathbf u_1,\dots,\mathbf u_k\}$ ved $\mathbf u_i=\mathbf x_i-\sum_{j<i}\operatorname{proj}_{\mathbf u_j}\mathbf x_i$; **normalisering** til ortonormal basis; **utvidelse** av en ortonormal mengde til en ortonormal basis for $\mathbb R^n$; ortogonal/ortonormal basis for et underrom $W$; kobling til 5.3 (Gram–Schmidt på egenrom med gjentatt egenverdi). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Bruk Gram–Schmidt til å finne en ortogonal basis for underrommet $W=\operatorname{Span}\{\mathbf w_1,\mathbf w_2,\mathbf w_3\}$, og normaliser til en ortonormal basis.»
- **Typiske feil:** Trekker fra feil projeksjoner (bruker $\mathbf x_j$ i stedet for $\mathbf u_j$); glemmer normaliseringen når ortonormal kreves; regnefeil i projeksjonsleddene; feil rekkefølge.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.3: Ortogonale matriser og deres bevaringsegenskaper

- **id:** `ma1201-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma1201-6-2`
- **kapitteltype:** teori
- **description:** Ortogonale matriser (P⁻¹ = Pᵀ, ortonormale kolonner, |det P| = 1) og beviset for at de bevarer lengde, skalarprodukt, vinkel og volum — et fast bevistema (2013, 2017) og grunnlaget for hovedaksetransformasjonen.
- **Forkunnskaper (kryssbok):** Kap. 6.2, 2.1.
- **Eksamensbelegg:** Sjanger G-grunnlag + bevissjanger J (ortogonale matriser bevarer lengde/vinkel/volum, 2013/2017). Fasitens grep: $P\mathbf u\cdot P\mathbf v=(P\mathbf u)^{T}(P\mathbf v)=\mathbf u^{T}P^{T}P\mathbf v=\mathbf u^{T}\mathbf v$. Prioritet: **kunne** (og forkunnskap for Del 7).
- **Innholdskontrakt:** **Ortogonal matrise** $P$: $P^{-1}=P^{T}$, kolonnene er en ortonormal basis, $\lvert\det P\rvert=1$; **bevaringsegenskapene** (bevis via $(P\mathbf u)^{T}(P\mathbf v)=\mathbf u^{T}P^{T}P\mathbf v=\mathbf u^{T}\mathbf v$): bevarer skalarprodukt ⇒ lengde ($\lVert P\mathbf v\rVert=\lVert\mathbf v\rVert$) ⇒ vinkel; bevarer volum ($\lvert\det P\rvert=1$); rotasjoner/refleksjoner som ortogonale avbildninger; kobling til hovedaksetransformasjon (koordinatbytte $\mathbf x'=P^{T}\mathbf x$, Del 7). Alt til aktiv bruk; bevismalen forankres her.
- **Oppgavesjangre:** G/J. Mønstereksempel: «La $P$ være en ortogonal matrise. Vis at $\lVert P\mathbf v\rVert=\lVert\mathbf v\rVert$ for alle $\mathbf v$, og at $P$ bevarer skalarproduktet.»
- **Typiske feil:** Bruker ikke $P^{T}P=I$ i beviset; forveksler ortogonal matrise (ortonormale kolonner) og «matrise med ortogonale kolonner» (uten normalisering); antar $\det P=1$ (kan være $-1$); ufullstendig bevis (lengde uten skalarprodukt).
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Kjeglesnitt og hovedaksetransformasjon *(prioritet: PERFEKT — emnets signaturoppgave ~68 %; binder hele pensumkjeden)*

#### Kapittel 7.1: Kvadratiske former og hovedaksetransformasjon

- **id:** `ma1201-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `ma1201-5-3`
- **kapitteltype:** teori
- **description:** Den kvadratiske formen Q(x) = xᵀBx med symmetrisk B (av-diagonal = halve kryssleddet!), hovedaksetransformasjonen som ortogonal diagonalisering av B, koordinatbyttet x′ = Pᵀx som fjerner kryssleddet, og klassifiseringen fra egenverdifortegn — hele kjeglesnittkjeden.
- **Forkunnskaper (kryssbok):** Kap. 5.3 (ortogonal diagonalisering, spektralteoremet), 6.3 (ortogonale matriser + koordinatbytte). Krever egenverdier (5.1) og symmetriske matriser (2.1).
- **Eksamensbelegg:** Sjanger D (~68 %, **emnets signaturoppgave**, nesten årviss i regne-tunge sett). Fasitens grep: symmetrisk $B$ ($B_{12}=$ halve kryssleddet), $P^{T}BP=D$, koordinatbytte, klassifiser fra egenverdifortegn, skisse. Prioritet: **perfekt** (den mest lærerike enkeltoppgaven).
- **Innholdskontrakt:** **Kvadratisk form** $Q(\mathbf x)=\mathbf x^{T}B\mathbf x$ med **symmetrisk** $B$ (fra $ax^2+bxy+cy^2$: $B=\left[\begin{smallmatrix}a&b/2\\b/2&c\end{smallmatrix}\right]$ — **av-diagonal = halve kryssleddet**); **hovedaksetransformasjon** = ortogonal diagonalisering $P^{T}BP=D$; **koordinatbytte** $\mathbf x'=P^{T}\mathbf x$ som fjerner kryssleddet → standardform $\lambda_1 x'^2+\lambda_2 y'^2+\dots$; **klassifisering fra egenverdifortegn**: begge samme fortegn ⇒ **ellipse**, ulike fortegn ⇒ **hyperbel**, én null ⇒ **parabel**; degenererte tilfeller (punkt/linje/to linjer/tom); rollen til lineærleddene (fullføre kvadratet for sentrering). Alt til aktiv bruk; hele kjeden føres.
- **Oppgavesjangre:** D. Mønstereksempel: «Skriv den kvadratiske formen $3x^2+2xy+3y^2$ som $\mathbf x^{T}B\mathbf x$ med symmetrisk $B$, diagonaliser $B$ ortogonalt, og angi standardformen i nye koordinater.»
- **Typiske feil:** **Ikke-symmetrisk $B$** (hele kryssleddet i av-diagonalen i stedet for halve) — mest dokumenterte kjeglesnittfeil → feil egenverdier → feil klassifisering; klassifiserer fra opprinnelig ligning med kryssledd; overser degenererte tilfeller.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 7.2: Drill: klassifiser og skisser kjeglesnittet

- **id:** `ma1201-7-2` · **number:** 7.2 · **estimatedMinutes:** 85 · **prerequisites:** `ma1201-7-1`
- **kapitteltype:** drill
- **description:** Hele kjeglesnittoppgaven drillet ende-til-ende (form → symmetrisk B → ortogonal P → standardform → klassifisering → skisse med roterte akser) pluss den motsatte varianten (gitt rotasjon → sett opp ny ligning), til eksamensnivå.
- **Eksamensbelegg:** Dekker sjanger D samlet (~68 %). Variantkatalog: klassifiser + skisser (ellipse/hyperbel/parabel), degenerert tilfelle, den motsatte varianten (2014/2020: gitt rotasjon → ny ligning), form med lineærledd (fullføre kvadratet). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skriv $\mathbf x^{T}B\mathbf x$ med **symmetrisk** $B$; (2) diagonaliser $B$ ortogonalt ($P^{T}BP=D$, $P$ ortogonal); (3) koordinatbytte $\mathbf x'=P^{T}\mathbf x$ → fjern kryssledd; (4) håndter lineærledd (fullfør kvadratet, sentrer); (5) **klassifiser** fra egenverdifortegn; (6) **skisser** med de nye aksene. Gjennomregnet kjeglesnittcase med sensor-margnotater (symmetrisk $B$, spektralteorem, klassifisering begrunnet, skissen fullført). 10–14 oppgaver: fire fulle klassifiseringer m/skisse, to degenererte, to med lineærledd, to motsatt-variant.
- **Oppgavesjangre:** D. Mønstereksempel: «Avgjør om $3x^2+2xy+3y^2+\sqrt2\,x-\sqrt2\,y-8=0$ beskriver en ellipse, hyperbel eller parabel. Overfør til standardform uten kryssledd via symmetrisk $B$ og ortogonal $P$, og lag en skisse.»
- **Typiske feil:** Ikke-symmetrisk $B$; **kryssledd ikke fjernet** (stopper ved diagonaliseringen uten å skrive standardformen og skissere); feilklassifisering (fra opprinnelig ligning); glemmer skissen med roterte akser; feil ved lineærledd (glemmer å fullføre kvadratet).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Lineære transformasjoner *(prioritet: KUNNE — lineær-/matrisetransformasjon ~47 %)*

#### Kapittel 8.1: Lineære transformasjoner, standardmatrise og figuravbildning

- **id:** `ma1201-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-4-3`
- **kapitteltype:** teori
- **description:** Standardmatrisen fra bildene av basisvektorene (kolonnene = T(eₖ)), utregning av T(x) = Ax, surjektivitet/injektivitet via rang, kjerne/bilde som underrom, og den geometriske varianten (finn matrisen som avbilder en figur på en annen).
- **Forkunnskaper (kryssbok):** Kap. 4.3 (rang, kolonnerom/nullrom). [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger I (~47 %). Fasitens grep: kolonnene i $A$ = bildene av standardbasisvektorene; surjektiv/injektiv via rang; geometrisk variant (2020): finn matrisen som avbilder én trekant på en annen. Prioritet: **kunne**.
- **Innholdskontrakt:** **Lineær transformasjon** $T$ (linearitet: $T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)$); **standardmatrise** $A=[T(\mathbf e_1)\ \cdots\ T(\mathbf e_n)]$ (kolonnene = bildene av basisvektorene); $T_A(\mathbf x)=A\mathbf x$; **kjerne** $\ker T=\operatorname{Null}A$ og **bilde** $\operatorname{Im}T=\operatorname{Kol}A$ (begge underrom); **injektiv** ⇔ $\ker T=\{\mathbf 0\}$, **surjektiv** ⇔ rang = dim kodomene, via rang; **geometrisk avbildning** (rotasjon/refleksjon/skalering; finn matrisen som avbilder en figur på en annen). Alt til aktiv bruk.
- **Oppgavesjangre:** I. Mønstereksempel: «En lineær transformasjon $T_A:\mathbb R^3\to\mathbb R^3$ er gitt ved bildene av de tre standardbasisvektorene. Finn $A$, beregn $T_A(\mathbf v)$ for en gitt $\mathbf v$, og avgjør om $T_A$ er surjektiv.»
- **Typiske feil:** Setter bildene som rader i stedet for kolonner; forveksler injektiv og surjektiv; avgjør surjektivitet uten rang; glemmer å sjekke linearitet; feil standardmatrise for geometrisk avbildning.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

---

### Del 9 — Komplekse tall (elementære) *(prioritet: KJENNE — ~42 %, eldre epoke + T/F-gjenkomst 2024; kan komme igjen etter emnerevisjon — verifiser)*

#### Kapittel 9.1: Komplekse tall: kartesisk og polarform, de Moivre

- **id:** `ma1201-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-2-1`
- **kapitteltype:** teori
- **description:** Kartesisk og polarform r(cos θ + i sin θ), aritmetikk, konjugat og modulus, de Moivres formel for potenser, og geometri i det komplekse planet — solid belagt 2004–2011, gjenoppsto 2024 som T/F.
- **Forkunnskaper (kryssbok):** Kap. 2.1. [Komplekse tall](/bok/r2/r2-4-1) (VGS-grunnlaget reaktiveres og utvides).
- **Eksamensbelegg:** Sjanger K (~42 %, **konsentrert 2005–2012**, nesten borte, T/F-gjenkomst 2024). **Ærlig eksamensvinkel:** høy frekvens i eldre epoke, lav nylig, men emnerevisjon H2024 kan ha løftet temaet tilbake (verifiser mot H2025). Prioritet: **kjenne** (dekkes fullt, kompakt).
- **Innholdskontrakt:** **Kartesisk form** $z=x+iy$, aritmetikk; **konjugat** $\bar z=x-iy$, **modulus** $\lvert z\rvert=\sqrt{x^2+y^2}$, argument $\arg z$; **polarform** $z=r(\cos\theta+i\sin\theta)$; **de Moivres formel** $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$ (potenser); geometri i det komplekse planet; komplekse inverser ($z^{-1}=\bar z/\lvert z\rvert^2$) og eksistens ($z^2=i$ har løsning) — T/F-punktene fra 2024. Aktiv bruk.
- **Oppgavesjangre:** K/L. Mønstereksempel: «Skriv $z=1+i\sqrt3$ på polarform og bruk de Moivre til å finne $z^6$.»
- **Typiske feil:** Feil kvadrant for argumentet; glemmer $2\pi$-periodisiteten; regner modulus feil; forveksler $\bar z$ og $z^{-1}$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 9.2: n-te røtter, zⁿ = c og reell faktorisering

- **id:** `ma1201-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1201-9-1`
- **kapitteltype:** teori
- **description:** Alle n-te røtter av zⁿ = w via de Moivre (n røtter jevnt fordelt på en sirkel med radius r^(1/n)), skisse i planet, og faktorisering av reelle polynomer via konjugerte røttepar.
- **Forkunnskaper (kryssbok):** Kap. 9.1. [Polynomer og polynomdivisjon](/bok/r1/r1-1-1).
- **Eksamensbelegg:** Sjanger K (~42 %, eldre epoke). Fasitens grep: $n$ røtter jevnt fordelt, radius $\lvert w\rvert^{1/n}$, argument $(\arg w+2\pi k)/n$; skisse; reell faktorisering via $(x-z_0)(x-\bar z_0)$. Prioritet: **kjenne**.
- **Innholdskontrakt:** **$n$-te røtter** av $z^n=w$: $n$ røtter jevnt fordelt på en sirkel med radius $\lvert w\rvert^{1/n}$, argumenter $\dfrac{\arg w+2\pi k}{n}$, $k=0,\dots,n-1$; **skisse** i det komplekse planet; **reell faktorisering** av polynom via konjugerte røttepar $(x-z_0)(x-\bar z_0)=$ reell kvadratisk faktor; koblingen til reelle koeffisienter (komplekse røtter i par). Aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn alle komplekse røtter av $z^4+16=0$ og bruk dem til å faktorisere $x^4+16$ i to reelle annengradsfaktorer.»
- **Typiske feil:** Feil antall røtter (glemmer at det er $n$); modulus ikke $\lvert w\rvert^{1/n}$; feil kvadrant/argument; glemmer å pare konjugerte røtter i reell faktorisering.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 9:** 4 prøver (spesifisert i §4).

---

### Del 10 — Logikk, mengdelære og matrisepotens *(prioritet: KJENNE — logikk/mengde ~26 %, sant-usant-blokk 2024; Aⁿ/Cayley–Hamilton ~21 %)*

#### Kapittel 10.1: Logikk, mengdelære og sant-usant-blokken

- **id:** `ma1201-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `ma1201-2-2`
- **kapitteltype:** teori
- **description:** Grunnleggende logikk og mengdelære + den presise definisjonskjennskapen sant-usant-blokken tester (det(cA)-regelen, diagonaliserbar vs. invertibel, «AB = 0 ⇒ A = 0 eller B = 0» er usant) — 2024 åpnet med en 10-punkts blokk.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (determinant-regler), 5.2 (diagonaliserbar), 4.2 (lineær uavhengighet). [Mengdelære](/bok/1t/1t-1-7), [Matematisk argumentasjon](/bok/1t/1t-6-1).
- **Eksamensbelegg:** Sjanger L (~26 %; **2024-settet åpnet med en 10-punkts sant/usant-blokk**). **Ærlig eksamensvinkel:** variabel frekvens; testet som presis definisjonskjennskap, ikke egne store oppgaver — men gir billige poeng når den kommer. Prioritet: **kjenne** (men fellene drilles fordi de er belagt).
- **Innholdskontrakt:** **Grunnleggende logikk** (implikasjon, kvantorer $\forall,\exists$, sant/usant); **mengdelære** (union, snitt, delmengde — kort); **de klassiske sant/usant-utsagnene og fellene**: $\det(cA)=c^n\det A$ (ikke $c\det A$); **«diagonaliserbar ⇒ invertibel» er usant**; **«$AB=0\Rightarrow A=0$ eller $B=0$» er usant**; «lineær uavhengighet ⇒ invertibel» (for kvadratisk, sant); elementærmatriser; underrom-kriteriet; komplekse eksistensutsagn ($z^2=i$ har løsning). Distraktorene bygger på vanlige misforståelser. Aktiv bruk; hver felle med kort begrunnelse/moteksempel.
- **Oppgavesjangre:** L. Mønstereksempel: «Avgjør sant/usant med kort begrunnelse: (a) for enhver $4\times4$-matrise er $\det(3A)=3\det A$; (b) en diagonaliserbar matrise er alltid invertibel; (c) hvis $AB=0$ så er $A=0$ eller $B=0$.»
- **Typiske feil:** **$\det(cA)=c\det A$**; anta «$AB=0\Rightarrow A=0$ eller $B=0$» sant; anta «diagonaliserbar ⇒ invertibel» sant; begrunner ikke sant/usant der begrunnelse kreves; feil moteksempel.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 10:** 4 prøver (spesifisert i §4).

---

### Del 11 — Eksamenstrening og bevis *(prioritet: PERFEKT for føring + bevis; bevis ~84 % — toppsjiktets karakterskiller)*

#### Kapittel 11.1: Føringsstandarden: begrunn alt, navngi teoremet, kode D

- **id:** `ma1201-11-1` · **number:** 11.1 · **estimatedMinutes:** 45 · **prerequisites:** `ma1201-0-1`
- **kapitteltype:** teori
- **description:** Hva sensor faktisk belønner: full begrunnelse med navngitte teoremer, symmetrisk B i kjeglesnitt, klassifisering via egenverdifortegn, bevis fra definisjonen, delpunktgjenbruk, alt for hånd (kode D) — samlet føringsbank.
- **Forkunnskaper (kryssbok):** Kap. 0.1 (eksamenskartet).
- **Eksamensbelegg:** Metakapittel — destillerer sensorkravene (analysen §4) som gjelder ALLE oppgaver. Prioritet: **perfekt** (føringen er en selvstendig karakterfaktor).
- **Innholdskontrakt:** **Sensorreglene samlet**: (1) alle svar begrunnes, nok mellomregning til at fremgangsmåten er tydelig; (2) navngi teoremet som bærer argumentet (spektralteoremet, invertibilitetssetningen, rang–nullitet, Cauchy–Schwarz, Gram–Schmidt, de Moivre); (3) kode D — alt for hånd, ingen matrise-/grafkalkulator; (4) delpunktgjenbruk er lov og forventet (egenverdier fra (a) → diagonalisering (b) → kjeglesnitt (c)); (5) symmetrisk $B$ i kjeglesnitt; (6) klassifisering via egenverdifortegn + skisse; (7) bevis fra definisjonen (underrom = tre aksiomer, ikke ett eksempel; lineær uavhengighet fra definisjonen); (8) eksakte svar. **Karakterskille-listen** (bestått/midt/topp fra §4). **Utenat-bank**: egenverdiprosedyren, spektralteoremet, kjeglesnittkjeden, kryssprodukt/volum med ½/1/6, de Moivre, invertibilitetssetningen.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «marker føringspoengene i en gitt løsning», «hvilke teoremer må navngis i egenverdi→diagonalisering→kjeglesnitt-kjeden?».
- **Typiske feil:** Ubegrunnet sluttsvar / for lite mellomregning (bryter hovedregelen); manglende teoremhenvisning; bevis erstattet med eksempel; desimaltilnærming; hopper over delpunktgjenbruk.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 11.2: Bevis-drill: settets bakre halvdel

- **id:** `ma1201-11-2` · **number:** 11.2 · **estimatedMinutes:** 90 · **prerequisites:** `ma1201-11-1`
- **kapitteltype:** drill
- **description:** De faste bevis-arketypene drillet med modellbevis: lineær uavhengighet av egenvektorer, symmetri/kommutering (AB symmetrisk ⇔ AB = BA), ortogonale matrisers bevaring, radreduksjon bevarer løsningsmengden, Cauchy–Schwarz-anvendelse, nilpotent/idempotent — fullt ført fra definisjonen.
- **Eksamensbelegg:** Sjanger J (~84 % har minst én bevisoppgave, ofte to–tre). Variantkatalog (alle faste arketyper): lineær uavhengighet av egenvektorer (2022/2023H/2024), $AB$ symmetrisk ⇔ $AB=BA$ + $A^{T}A$ symmetrisk (2023H/2024), ortogonale matrisers bevaring (2013/2017), radreduksjon/løsningsmengde (2022/2023aug), Cauchy–Schwarz (2023H), nilpotent $A^m=0\Rightarrow I-A$ invertibel (2012aug), idempotent $A^2=A\Rightarrow$ egenverdier $\in\{0,1\}$ (2008), Cayley–Hamilton/Fibonacci (2012des). Prioritet: **perfekt** (toppsjiktets karakterskiller).
- **Innholdskontrakt:** Løsningsoppskrift for bevis: (1) skriv forutsetningene og definisjonen; (2) identifiser hva som skal vises («⇒» eller «⇔» — begge veier); (3) arbeid fra definisjonen med navngitt teorem; (4) verbal konklusjonssetning. **Modellbevis** for hver arketype med sensor-margnotater (forutsetningssjekk, definisjonsbruk, transponert-triks $\mathbf u^{T}P^{T}P\mathbf v$). 12–15 bevisoppgaver på eksamensnivå fordelt over arketypene, alle med `solution` + `hints`. Understrek: et eksempel beviser ingen allpåstand; «⇔» krever begge veier.
- **Oppgavesjangre:** J, alle arketyper. Mønstereksempel: «La $A,B$ være symmetriske. Vis at $AB$ er symmetrisk hvis og bare hvis $A$ og $B$ kommuterer» og «Vis at egenvektorer til ulike egenverdier er lineært uavhengige.»
- **Typiske feil:** Bevis erstattet med ett eksempel; viser bare én vei i «⇔»; bruker ikke $P^{T}P=I$ / transponert-triks; glemmer forutsetningssjekk; ufullstendig definisjonsbruk (lineær uavhengighet ikke fra definisjonen).
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 11.3: Øvingseksamen 1 — den typiske malen (regnekjerne + bevis)

- **id:** `ma1201-11-3` · **number:** 11.3 · **estimatedMinutes:** 120 · **prerequisites:** `ma1201-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Et komplett sett som speiler den stabile 2017–2024-malen: 5–6 oppgaver med ~10–12 likt vektede delspørsmål, tre regneoppgaver (system+rang, vektor/volum, egenverdi→diagonalisering→kjeglesnitt) + to–tre bevis, kode D, med A-besvarelse-løsningsforslag.
- **Eksamensbelegg/miks:** Speiler prognosen (§7): **O1** løs system + rang (A), **O2** kryssprodukt/areal/volum (E), **O3** egenverdier → ortogonal diagonalisering → **kjeglesnittklassifisering med skisse** (B+C+D, den kjedede signaturoppgaven), **O4** lineær uavhengighet av egenvektorer (J), **O5** symmetri/kommutering (J). Alle nyskrevne; løsningsforslag som A-besvarelse med `tip`-notat om delpoeng, delpunktgjenbruk og at alt teller likt.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 2 — bredden (ortogonalitet, underrom, transformasjon)

- **id:** `ma1201-11-4` · **number:** 11.4 · **estimatedMinutes:** 120 · **prerequisites:** `ma1201-11-3`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som dekker restsjangrene: parameteranalyse, underrom/basis/rang, Gram–Schmidt/projeksjon, ortogonal diagonalisering, lineær transformasjon og et Cauchy–Schwarz-/ortogonalitetsbevis — bredden som sikrer at hele pensum trenes.
- **Eksamensbelegg/miks:** **O1** parameteravhengig system + rang/løsbarhet (A), **O2** underrom + basis + rang–nullitet (F), **O3** Gram–Schmidt + ortogonal projeksjon (G), **O4** lineær transformasjon (standardmatrise + surjektiv) (I), **O5** ortogonale matrisers bevaring ELLER Cauchy–Schwarz (J). Alle nyskrevne; A-besvarelse-løsningsforslag.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 11.5: Øvingseksamen 3 — den brede/eldre malen (m/komplekse tall og sant-usant)

- **id:** `ma1201-11-5` · **number:** 11.5 · **estimatedMinutes:** 120 · **prerequisites:** `ma1201-11-4`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som trener den eldre epoken + emnerevisjons-beredskapen: komplekse tall (polarform/nⁿ-røtter), en sant/usant-blokk, R³-plangeometri, samt en full kjeglesnitt- og en determinant-parameteroppgave — beredskap for at komplekse tall/logikk kan returnere (verifiser).
- **Eksamensbelegg/miks:** **Ærlig eksamensvinkel:** trener den eldre epoken (2004–2012) + H2024-gjenkomsten. **O1** sant/usant-blokk (L, definisjonsfellene), **O2** komplekse tall: polarform + $z^n=c$-røtter + reell faktorisering (K), **O3** determinant-parameterdrøfting + invers (H), **O4** kjeglesnittklassifisering med skisse (D), **O5** R³-plangeometri: plan + avstand (E, beredskap). `tip`-notat om at komplekse tall/logikk/plangeometri har lav nyere frekvens men kan returnere etter emnerevisjonen (verifiser mot H2025). Alle nyskrevne; A-besvarelse.
- **Quiz: 8 · Flashcards: 0**

**Prøve-kvote Del 11:** ingen egne temaprøver — øvingseksamenene (11.3–11.5) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.3 | 22+22+18 = **62** | 24+24+10 = **58** |
| 2 | 2.1–2.3 | 18+20+18 = **56** | 24+26+22 = **72** |
| 3 | 3.1–3.2 | 20+16 = **36** | 22+16 = **38** |
| 4 | 4.1–4.3 | 20+20+20 = **60** | 24+24+22 = **70** |
| 5 | 5.1–5.4 | 20+18+18+18 = **74** | 24+22+22+10 = **78** |
| 6 | 6.1–6.3 | 20+18+16 = **54** | 24+18+18 = **60** |
| 7 | 7.1–7.2 | 20+18 = **38** | 24+10 = **34** |
| 8 | 8.1 | 18 | 20 |
| 9 | 9.1–9.2 | 16+16 = **32** | 18+18 = **36** |
| 10 | 10.1 | 14 | 16 |
| 11 | 11.1–11.5 | 12+14+8+8+8 = **50** | 14+10+0+0+0 = **24** |
| **Sum** | **30 kap.** | **504 ≥ 500 ✓** | **518 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst moderat-høy (518):** MA1201 er et
definisjons-, teorem- og bevisapparat-rikt fag der **kode D-kalkulatoren ikke kan
noe av matriseregningen** — hele apparatet (egenverdiprosedyren, spektralteoremet,
kjeglesnittkjeden, kryssprodukt/volum med ½- og 1/6-faktorene, invertibilitets-
setningen, de Moivre, bevismalene) er selve puggematerialet. De teori- og
bevistunge delene (Del 2 verktøykasse, Del 4 språk, Del 5 egenverdier, Del 6
ortogonalitet, Del 7 kjeglesnitt) bærer tettheten; drillkapitlene (1.3/5.4/7.2/11.2)
holdes lave (10) fordi verdien er oppgaver, ikke kort; øvingseksamenene 0.
Quiz-fordelingen speiler eksamensvektene: **Del 1 (system, 62) + Del 5 (egenverdier,
74) + Del 7 (kjeglesnitt, 38) + Del 11-bevis (50) = 224 av 504 quiz** bærer de faste
søylene; nivå 2-delene (2/3/4/6/8) samlet 224; nivå 3 (9/10) samlet 46; Del 0/11.1
metakapitler 22.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10, 40 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (11.1): full begrunnelse, navngitte teoremer, symmetrisk $B$
i kjeglesnitt, klassifisering via egenverdifortegn, bevis fra definisjonen,
poengfordeling. Legges som prøvekapitler (`ma1201-<del>-prove`, chapterNumber
`<del>.P`) etter plattformens mønster.

**Del 1 — Lineære system, Gauss-eliminasjon og rang**
1. Prøve 1.A (35 min): Gauss-eliminasjon + trappeform + frie variabler (kap. 1.1, sjanger A).
2. Prøve 1.B (40 min): Løsningsrom parametrisk + rang + løsbarhet for alle høyresider (kap. 1.2, sjanger A).
3. Prøve 1.C (40 min): Parameteravhengig system — tilfelledeling (0/1/uendelig) (kap. 1.3, sjanger A).
4. Prøve 1.D (40 min): System-simulering — homogent + inhomogent + parameter kjedet (kap. 1.1–1.3, sjanger A + J).

**Del 2 — Matriser, determinant og invers**
1. Prøve 2.A (35 min): Matrisealgebra + transponertregler + $A^{T}A$ symmetrisk (kap. 2.1, sjanger J).
2. Prøve 2.B (40 min): Determinant (kofaktor/radreduksjon) + $\det(cA)$ + inverterbarhet (kap. 2.2, sjanger H).
3. Prøve 2.C (40 min): Invers via $[A\mid I]$ + parameterdrøfting + verifikasjon (kap. 2.3, sjanger H).
4. Prøve 2.D (40 min): Invertibilitetssetningen-tverrsnitt — koble $\det$/rang/$\operatorname{Null}$/invers (kap. 2.1–2.3, sjanger H + J).

**Del 3 — Vektorgeometri i R³**
1. Prøve 3.A (35 min): Kryssprodukt + areal (parallellogram/trekant) (kap. 3.1, sjanger E).
2. Prøve 3.B (40 min): Volum (parallellepiped/tetraeder) med 1/6-faktor + parametervariant (kap. 3.1, sjanger E).
3. Prøve 3.C (35 min): Plan + normalvektor + avstand punkt–plan (kap. 3.2, sjanger E).
4. Prøve 3.D (40 min): Vektorgeometri-simulering — kryssprodukt + volum + plan kjedet (kap. 3.1–3.2, sjanger E).

**Del 4 — Vektorrom, underrom, basis og dimensjon**
1. Prøve 4.A (35 min): Underrom (tre betingelser) fra definisjonen + moteksempel (kap. 4.1, sjanger F + J).
2. Prøve 4.B (40 min): Lineær uavhengighet + basis + dimensjonsargument (kap. 4.2, sjanger F).
3. Prøve 4.C (40 min): $\operatorname{Kol}/\operatorname{Rad}/\operatorname{Null}$-basis + rang–nullitet (kap. 4.3, sjanger F).
4. Prøve 4.D (40 min): Vektorrom-simulering — underrom → basis → rang–nullitet kjedet (kap. 4.1–4.3, sjanger F).

**Del 5 — Egenverdier og diagonalisering**
1. Prøve 5.A (35 min): Egenverdier + egenrom-basis + verifiser egenvektor (kap. 5.1, sjanger B).
2. Prøve 5.B (40 min): Diagonalisering $A=PDP^{-1}$ + begrunn diagonaliserbarhet (kap. 5.2, sjanger C).
3. Prøve 5.C (40 min): Ortogonal diagonalisering $P^{T}AP=D$ + spektralteoremet (kap. 5.3, sjanger C).
4. Prøve 5.D (45 min): Egenverdi-simulering — egenverdikjeden + $A^n$ på én matrise (kap. 5.1–5.4, sjanger B + C).

**Del 6 — Ortogonalitet, projeksjon og Gram–Schmidt**
1. Prøve 6.A (35 min): Skalarprodukt/norm + projeksjon + Cauchy–Schwarz (kap. 6.1, sjanger G + J).
2. Prøve 6.B (40 min): Gram–Schmidt + ortonormal basis (kap. 6.2, sjanger G).
3. Prøve 6.C (40 min): Ortogonale matrisers bevaring (lengde/skalarprodukt/volum) (kap. 6.3, sjanger J).
4. Prøve 6.D (40 min): Ortogonalitet-simulering — Gram–Schmidt + projeksjon på underrom kjedet (kap. 6.1–6.3, sjanger G).

**Del 7 — Kjeglesnitt og hovedaksetransformasjon**
1. Prøve 7.A (40 min): Kvadratisk form → symmetrisk $B$ → standardform (kap. 7.1, sjanger D).
2. Prøve 7.B (40 min): Klassifiser (ellipse/hyperbel/parabel) + skisse med roterte akser (kap. 7.2, sjanger D).
3. Prøve 7.C (40 min): Form med lineærledd (fullfør kvadratet) + degenerert tilfelle (kap. 7.2, sjanger D).
4. Prøve 7.D (45 min): Kjeglesnitt-simulering — hele kjeden form→$B$→$P$→standardform→klassifiser→skisse (kap. 7.1–7.2, sjanger D).

**Del 8 — Lineære transformasjoner**
1. Prøve 8.A (35 min): Standardmatrise fra basisbilder + $T_A(\mathbf v)$ (kap. 8.1, sjanger I).
2. Prøve 8.B (40 min): Kjerne/bilde + injektiv/surjektiv via rang (kap. 8.1, sjanger I).
3. Prøve 8.C (35 min): Geometrisk avbildning (finn matrisen som avbilder figur på figur) (kap. 8.1, sjanger I).
4. Prøve 8.D (40 min): Transformasjons-simulering — standardmatrise + surjektiv + figuravbildning (kap. 8.1, sjanger I).

**Del 9 — Komplekse tall (elementære)**
1. Prøve 9.A (35 min): Kartesisk aritmetikk + konjugat + modulus + polarform (kap. 9.1, sjanger K).
2. Prøve 9.B (35 min): de Moivre-potenser + geometri i planet (kap. 9.1, sjanger K).
3. Prøve 9.C (40 min): $n$-te røtter av $z^n=c$ + skisse + reell faktorisering (kap. 9.2, sjanger K).
4. Prøve 9.D (40 min): Komplekstall-simulering — polarform + røtter + faktorisering kjedet (kap. 9.1–9.2, sjanger K).

**Del 10 — Logikk, mengdelære og matrisepotens**
1. Prøve 10.A (35 min): Sant/usant-blokk — determinant-/diagonaliserbar-/nullproduktfellene (kap. 10.1, sjanger L).
2. Prøve 10.B (35 min): Logikk + mengdelære + kvantorer (kap. 10.1, sjanger L).
3. Prøve 10.C (40 min): Matrisepotens $A^n=PD^nP^{-1}$ + Cayley–Hamilton (kap. 10.1 + 5.4, sjanger B + L).
4. Prøve 10.D (40 min): Sant-usant-simulering — 10-punkts definisjonsblokk med begrunnelser (kap. 10.1, sjanger L).

### Øvingseksamener (3 komplette sett — se kap. 11.3–11.5)

| Sett | Form den speiler | Miks (5–6 oppg. / ~10–12 likt vektede delspørsmål, kode D) |
|---|---|---|
| Øvingseksamen 1 (kap. 11.3) | Typisk 2017–2024-mal (regnekjerne + bevis) | A(O1) + E(O2) + B+C+D(O3, kjedet kjeglesnitt) + J(O4) + J(O5) |
| Øvingseksamen 2 (kap. 11.4) | Bredden (ortogonalitet, underrom, transformasjon) | A(O1, parameter) + F(O2) + G(O3) + I(O4) + J(O5) |
| Øvingseksamen 3 (kap. 11.5) | Eldre/bred mal + emnerevisjons-beredskap | L(O1) + K(O2) + H(O3) + D(O4) + E(O5, plangeometri) |

Til sammen dekker de tre settene samtlige sjangre A–L minst én gang, både den
stabile 2017–2024-malen (11.3–11.4) og den eldre/beredskaps-malen med komplekse tall
og sant/usant (11.5), med **kjeglesnittkjeden** som gjennomgående tyngdepunkt. Alle
tre er kalibrert mot **kode D** (kalkulator uten matriser/grafer, alt for hånd,
eksakte svar, alt begrunnet).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Den stabile dramaturgien og kode D** — vurderingsformen (4-timers skoleeksamen,
   5–7 oppgaver / ~10–12 likt vektede delspørsmål, karakter A–F), den faste
   dramaturgien (tre regneoppgaver + to–tre bevis), kjeglesnitt-signaturen og
   kode D-forbeholdet (kalkulator uten matriser/grafer) — fra kap. 0.1.
2. **Prioriteringskartet** — frekvens-tabellen (§2) omgjort til tre lesenivåer:
   **perfekt** (system+Gauss+rang ~100 %, egenverdier ~89 %, diagonalisering ~84 %,
   determinant/inverterbarhet ~84 %, bevis ~84 %, **kjeglesnitt ~68 %**), **kunne**
   (underrom/basis/dim ~63 %, kryssprodukt/volum ~58 %, ortogonalitet/Gram–Schmidt
   ~53 %, invers ~53 %, lineærtransformasjon ~47 %), **kjenne** (komplekse tall ~42 %,
   R³-plangeometri ~32 %, logikk/mengde ~26 %, $A^n$ ~21 %) — med notatet om at hvert
   sett dekker 5–7 søyler, så bredde slår dybde-i-ett-tema, og at kjeglesnittoppgaven
   binder fem temaer sammen.
3. **Sjangerguiden** — A–L med løsningsoppskriftene fra drillkapitlene (1.3, 5.4,
   7.2) og bevis-drillen (11.2) i kortform.
4. **Sensorreglene og utenat-banken** — «alle svar begrunnes», teoremnavning
   (spektralteoremet, invertibilitetssetningen, rang–nullitet, Cauchy–Schwarz,
   Gram–Schmidt, de Moivre), symmetrisk $B$ i kjeglesnitt, klassifisering via
   egenverdifortegn, bevis fra definisjonen, delpunktgjenbruk, eksakte svar, alt for
   hånd (kode D) (fra kap. 11.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (ikke-symmetrisk $B$
   i kjeglesnitt, glemt 1/6-faktor for tetraeder, feilklassifisering fra opprinnelig
   ligning, egenvektor uten normalisering i ortogonal diagonalisering,
   rang/nullitet-forveksling, $\det(cA)=c\det A$-fellen, «$AB=0\Rightarrow A=0$ eller
   $B=0$», bevis erstattet med eksempel, manglende spektralteorem-henvisning,
   ubegrunnet sluttsvar, komplekse røtter i feil kvadrant, kryssledd ikke fjernet),
   hver med henvisning til kapitlet som forebygger den.
6. **Teorem- og notasjonsliste** — apparatet fra innholdskontraktene (Gauss/rang/
   løsbarhet; invertibilitetssetningen; determinantregler; kryssprodukt/volum;
   underrom/basis/rang–nullitet; egenverdier + diagonalisering $A=PDP^{-1}$ +
   ortogonal $P^{T}AP=D$; spektralteoremet; Gram–Schmidt/projeksjon; ortogonale
   matrisers bevaring; kjeglesnittkjeden; komplekse tall $r(\cos\theta+i\sin\theta)$
   + de Moivre; bevistemaene) — med markering *utlede/kunne aktivt* vs. *kun bruke*,
   og påminnelse om at **alt gjøres for hånd** (kode D).
7. **Studieløp** — semesterplan: Del 0 → Del 1 (Gauss, motoren) → Del 2 (verktøy-
   kassen) → Del 3 (vektorgeometri) → Del 4 (vektorrom — språket) → **Del 5
   (egenverdier — tyngdepunktet)** → Del 6 (ortogonalitet) → **Del 7 (kjeglesnitt —
   kulminasjonen, les etter 5+6)** → Del 8 (transformasjoner) → Del 9–10 (komplekse
   tall + logikk, kjenne) → temaprøvene → føringsstandarden (11.1) → bevis-drillen
   (11.2) → de tre øvingseksamenene under tidspress (4 timer, kode D). Format-notat:
   tren primært den stabile 2017–2024-malen, men gå gjennom komplekse tall / sant-
   usant (11.5) fordi emnerevisjonen H2024 kan ha løftet dem tilbake — verifiser mot
   H2025.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ma1201` med alle 30 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («5.3», ALDRI
   lineær «19») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser
   bruker samme del-baserte form («kap. 5.3»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene, den stabile
   dramaturgien og kode D-forbeholdet som resten refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (Gauss/rang — motoren) → Del 2
   (matriser/determinant/invers; 2.2 kreves av 5.1) → Del 3 (vektorgeometri;
   uavhengig, kan bygges parallelt) → Del 4 (vektorrom — språket; 4.3 kreves av 5.1).
4. **Lineær-algebra-tyngdepunkt**: **Del 5 (egenverdier — 89/84 %; 5.1 krever 4.3 +
   2.2, 5.3 krever 2.1)** → Del 6 (ortogonalitet; 6.1 krever 4.2, 6.3 krever 6.2).
5. **Signaturkulminasjonen**: **Del 7 (kjeglesnitt — 68 %; 7.1 krever 5.3 + 6.3)** —
   bygg ETTER Del 5 og 6 (den *krever* ortogonal diagonalisering + ortogonale
   matriser). Dette er bokas viktigste del å få riktig.
6. **Resten**: Del 8 (transformasjoner; krever 4.3) → Del 9 (komplekse tall;
   selvstendig, krever 2.1) → Del 10 (logikk/$A^n$; krever 2.2/5.2).
7. **Del 11** til slutt (føring + bevis-drill + de tre øvingseksamenene gjenbruker
   alt og må dekke A–L). Temaprøvene (§4) legges som prøvekapitler
   (`ma1201-<del>-prove`, chapterNumber `<del>.P`), én per temadel 1–10 (40 stk).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 5 (4 kap.) og Del 7 (kjeglesnitt,
signaturkulminasjonen) er de viktigste** — hold hver samlet hos én agent; **Del 7
MÅ leses av en agent som også har Del 5.3 + 6.3-kontraktene** (kjeglesnittkjeden
avhenger av spektralteoremet og ortogonale matriser). Bevis-drillen (11.2) bygges av
en agent som også leser 2.1, 4.1, 4.2, 5.1, 6.1, 6.3 (bevisene forankres dit).
Øvingseksamenene (11.3–11.5) bygges av én agent som leser HELE skjelettet (de
gjenbruker alle sjangre A–L). Flagg Del 5+7 for konsistenssjekk ($P^{T}AP=D$ vs.
$A=PDP^{-1}$-konvensjonen, symmetrisk-$B$-regelen, spektralteorem-henvisningen).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + notasjon**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon — $\operatorname{rang}A$, $\operatorname{Kol}A$,
      $\operatorname{Rad}A$, $\operatorname{Null}A$, $E_\lambda$, $\det(A-\lambda I)$,
      $A=PDP^{-1}$ (generell) vs. **$P^{T}AP=D$** (ortogonal, $P$ ortogonal),
      $\mathbf u\times\mathbf v$, $\operatorname{proj}_{\mathbf u}\mathbf v$,
      $Q(\mathbf x)=\mathbf x^{T}B\mathbf x$ (symmetrisk $B$),
      $z=r(\cos\theta+i\sin\theta)$.
- [ ] **Notasjonskonsistens (grep over alle ma1201-filer)**: **$\operatorname{Kol}A$-
      basis fra ORIGINALe pivotkolonner** (ikke trappeform); **symmetrisk $B$** i
      kjeglesnitt (av-diagonal = halve kryssleddet); **normalisering** i ortogonal
      diagonalisering; **eksakte svar** (aldri desimal); teoremer navngitt
      (spektralteoremet, invertibilitetssetningen, rang–nullitet, Cauchy–Schwarz).
- [ ] **Kode D-kalibrering**: hvert kapittel trener matriseapparatet **for hånd**
      (ingen matrise-/grafkalkulator); kap. 0.1 og 11.1 gjengir kode D-forbeholdet og
      utenat-banken; ingen kalkulator-avhengige mellomsteg.
- [ ] **Kjeglesnittkjeden komplett**: kap. 7.1–7.2 fører hele kjeden (form →
      symmetrisk $B$ → ortogonal $P$ → koordinatbytte → standardform → klassifisering
      via egenverdifortegn → **skisse med roterte akser**); klassifisering begrunnet,
      ikke bare navngitt; kryssleddet faktisk fjernet.
- [ ] **Bevis-sjanger (~84 %)**: kap. 11.2 fører komplette modellbevis for hver
      dokumentert arketype (lineær uavhengighet av egenvektorer, $AB$ symmetrisk ⇔
      $AB=BA$, ortogonale matrisers bevaring, radreduksjon/løsningsmengde, Cauchy–
      Schwarz, nilpotent/idempotent) med forutsetningssjekk og navngitt teorem; «⇔»
      vises begge veier; et eksempel beviser ingen allpåstand.
- [ ] **Føringsstandard i ALLE løsningsforslag**: begrunn alt; navngi teoremet;
      $\operatorname{Kol}A$-basis fra original; $P/D$ matchet; diagonaliserbarhet
      begrunnet; symmetrisk $B$; klassifisering via egenverdifortegn + skisse;
      normalisering i ortogonal-varianten; alle komplekse røtter; verbal
      konklusjonssetning; eksakt sluttsvar markert. Ubegrunnet fasitsvar er en
      byggefeil.
- [ ] **Format- og prioritetsærlighet**: kap. 0.1/9.1/10.1/11.5 sier eksplisitt at
      komplekse tall/R³-plangeometri falt etter 2012, at komplekse tall gjenoppsto
      2024 (T/F), og at emnerevisjonen H2024 kan ha løftet komplekse tall/logikk
      tilbake — **verifiser mot H2025**. Usikre detaljer merkes `(verifiser)`.
      Metodevalg uten dokumentert fasit merkes «⚠️ metode = faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      herfra), Forkunnskaper-blokk med kryssbok-lenker (kun til de verifiserte
      VGS-id-ene i §3: R2 r2-5-1/r2-5-3/r2-5-5/r2-4-1, R1 r1-1-1/r1-9-1/r1-9-3, 1T
      1t-1-7/1t-6-1; **ubygde NTNU-forkunnskapsemner som klartekst med
      aktiveringsmarkør**), `collapsible` Symbol- og formelliste per delkapittel,
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
      `solution` + `hints`, repetisjons-`collapsible`; drillkapitler (1.3/5.4/7.2/
      11.2) har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver;
      øvingseksamenene fører komplette A-besvarelser.
- [ ] **Quiz-sum ≥ 504 og flashcard-sum ≥ 518** per kvotetabellen i Summerings-
      kontrollen (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker
      med `title`.
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk) + 3 øvingseksamener (11.3–11.5) som
      sammen dekker A–L, den stabile og den eldre/beredskaps-malen, og
      kjeglesnittkjeden minst to ganger.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, matriser, kjeglesnitt-
      ligninger, vektorer og kontekster; ingen formuleringer fra reelle sett eller
      fasiter (skjelettets mønstereksempler er selv omskrivninger og skal varieres
      videre, ikke kopieres ordrett inn); pensum refereres, aldri siteres i lengde.
- [ ] **Navigasjon**: `ma1201` inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
      under **Norges teknisk-naturvitenskapelige universitet (NTNU)**, navn =
      «MA1201 Lineær algebra og geometri».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
