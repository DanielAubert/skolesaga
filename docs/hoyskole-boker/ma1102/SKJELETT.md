# Bokskjelett: MA1102 Grunnkurs i analyse 2 (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA1102-arkiv 2005–2024, 73 PDF-er, hvorav 13 sett med løsningsforslag
> 2016–2023 + løsningsforslaget for vår 2024 er lest grundig, og eldre skummet).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`, variant: **analyse-/bevisfag** med
> sterk konvergens- og bevisvekt) — kapittel-DNA-ene der (teori/drill/øvingseksamen)
> er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../tma4110/SKJELETT.md` (samme institusjonsfamilie, ODE- og
> kompleks-tall-behandling, «begrunn alt»-føring, kode-kalibrering) og
> `../ma0301/SKJELETT.md` (NTNU-bevisfag med egen bevisferdighets-del og
> «alt begrunnes»-standard).
>
> **KRITISK — HVA DENNE BOKA DEKKER (les før alt annet):** MA1102 gjennomgikk et
> **markant pensum- og formatskifte** mellom kont 2022 og vår 2023. Boka kalibreres
> mot den **gjeldende «rene analyse-epoken» (2023–2024)**, ikke mot den utgåtte
> «kalkulus-epoken». Det betyr: **topologi i ℝ (åpen/lukket/kompakt/tellbar),
> Cauchyfølger, tellbarhet og en 10-punkts sann/usann-åpningsoppgave** er nye tunge
> blokker som skal bygges fullt — mens **kjeglesnitt, parametriske kurver
> (fart/akselerasjon/buelengde) og numerisk integrasjon (Simpson/trapes)** har null
> forekomst i 2023–2024-settene og nevnes ikke i gjeldende emnebeskrivelse. De
> siste behandles kort i ett appendiks-kapittel («bør kjenne til»), IKKE med
> eksamenstrening. De fem bærebjelkene (lineære ODE, potensrekkeløsning av ODE,
> potensrekkers konvergensradius, uniform konvergens, rekkekonvergens) er felles for
> begge epoker og får størst plass. **Verifiser mot første tilgjengelige 2025+-sett
> før endelig kalibrering** — usikre punkter er merket `(verifiser)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1102` |
| Tittel | **Grunnkurs i analyse 2 (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Arketype | Regnefag (variant: **analyse-/bevisfag** — konvergens, uniform konvergens, ε–N-bevis, ODE; alt begrunnes) |
| Studiepoeng | 7,5 sp; forkunnskap MA1101 |
| Antall kapitler | **34** (1 eksamenskart + 27 tema/drill + 1 appendiks + 5 eksamenstrening/øvingseksamen) + 32 prøvekapitler |
| Estimert totaltid | **~2 340 min ≈ 39 timer** |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **622** (krav ≥500; sikt høyt — definisjons- og teoremrikt bevisfag, kode D uten formelark for teoremapparatet) |

**Pitch (ett avsnitt):** MA1102 er NTNUs analyse-oppfølger til MA1101 og et
**selvstendig analysefag med sterk bevis- og konvergensvekt**. Eksamen er én
**4-timers skriftlig skoleeksamen**, karakter A–F, med **7 oppgaver som teller
likt**. Den gjeldende formen (2023–2024) har en usedvanlig fast dramaturgi:
**(1)** 10 sann/usann-utsagn om topologi/følger/kontinuitet (ingen begrunnelse
kreves), **(2)** rekker — vis konvergens + klassifiser divergent/betinget/absolutt,
**(3)** komplekse røtter av $z^n=w$, **(4)** uniform konvergens av en funksjonsfølge
på $[0,1]$, **(5)** finn potensrekker + konvergensradius/-område for 3 funksjoner,
**(6)** Euler/forbedret Euler for et 1. ordens initialverdiproblem (4 desimaler),
**(7)** lineær ODE med initialbetingelser + potensrekkeløsning. Newtons metode
dukker opp i ~annethvert sett. **Begrunnelse kreves overalt unntatt sann/usann-
oppgaven** — «Begrunn ditt svar» gjentas etter hvert punkt, og teoremer/tester skal
**navngis** når de bærer argumentet. Fem tema bærer nesten hver eneste eksamen
(92–100 %): lineære ODE, potensrekkeløsning av ODE, potensrekkers konvergensradius,
uniform konvergens av funksjonsfølge, og rekkekonvergens/-klassifisering. Emnet
kommer med et **formelark** (Maclaurinrekker for $e^x$, $\sin$, $\cos$, $1/(1-x)$;
Newton/Euler/forbedret Euler-formlene; Eulers formel $e^{i\theta}=\cos\theta+i\sin\theta$) —
disse skal **ikke pugges, men brukes riktig**; alt annet teoriapparat må sitte
utenat under kode D.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar (unntatt sann/usann-oppgaven); navngi testen/teoremet som
   bærer argumentet.** Ordrett NTNU-metaregel: «Begrunn ditt svar» gjentas etter
   hvert klassifiseringspunkt. Ved kode A (der alle hjelpemidler er tillatt i eldre
   sett) skjerpes kravet: svaret alene teller lite fordi det kan slås opp. Hvert
   løsningsforslag skrives som **A-besvarelse**: navngi forholdstesten, rottesten,
   testen for alternerende rekker, sammenligningstesten, skjæringssetningen,
   sekant-/middelverdisetningen, Weierstrass' M-test, Abels teorem,
   Heine–Borel/kompletthet før den brukes.

2. **Uniform konvergens føres ALLTID med sup-avstanden.** Definer
   $d(f_n,f)=\sup_x|f_n(x)-f(x)|$, regn den ut via derivasjon/toppunkt, konkluder
   uniform $\iff d(f_n,f)\to0$. Det holder **ikke** å vise punktvis konvergens og
   påstå uniform. Motfelle skal beherskes: hvis hver $f_n$ er kontinuerlig men
   grensen $f$ ikke er det, kan konvergensen ikke være uniform.

3. **Endepunktene sjekkes ALLTID ved potensrekker.** Konvergensradius er ikke nok —
   avgjør separat om $x=\pm r$ er med, med egen konvergenstest for hvert endepunkt.
   Konvergensområdet skrives som lukket/halvåpent/åpent intervall.

4. **Rekurrensrelasjonen utledes fullstendig ved potensrekkeløsning av ODE.**
   Indeksskift gjøres **eksplisitt** slik at alle summer har $x^n$; koeffisientene til
   hver potens settes lik null; partall/oddetall-mønsteret begrunnes før den lukkede
   formen skrives. Gjenkjenn sluttrekken som elementærfunksjon der mulig
   ($\sum x^{2n}/n!=e^{x^2}$ osv.).

5. **Komplekse tall — standardnotasjon:** polarform $z=re^{i\theta}$; **Eulers
   formel** $e^{i\theta}=\cos\theta+i\sin\theta$; **de Moivre**
   $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$; $n$-te røtter
   $r^{1/n}e^{i(\theta+2\pi k)/n}$, $k=0,\dots,n-1$ (jevnt fordelt på sirkel med radius
   $r^{1/n}$). **Algebraens fundamentalteorem** garanterer $n$ røtter for grad-$n$-
   polynom. Substitusjonstriks ved sammensatt grad ($w=z^3$ i $z^6+z^3+1=0$).

6. **ODE — standardnotasjon og -metoder:** lineær ODE med konstante koeffisienter
   løses via **karakteristisk polynom** (enkle, doble, komplekse røtter — dobbeltrot
   $r$ gir $Ae^{rx}+Bxe^{rx}$; par $a\pm bi$ gir $e^{ax}(A\cos bx+B\sin bx)$);
   partikulærløsning via ansats etter høyresiden (**med x-faktor ved resonans**);
   initialbetingelser bestemmer konstantene. Generell løsning skrives ALLTID som
   $y=y_h+y_p$. **Picard–Lindelöf** er teoretisk ryggrad for eksistens/entydighet
   (pensum, ingen arkivforekomst — dekk teoretisk, merk «ikke arkivbelagt»).

7. **Numerikk med foreskrevet presisjon.** «Bruk 4 desimaler» er en instruks, ikke
   en anbefaling — mellomresultater rundes. Euler $y_{n+1}=y_n+h\,f(x_n,y_n)$ og
   forbedret Euler (prediktor–korrektor) ligger på formelarket; treningen ligger i
   disiplinert utregning. Newton $x_{n+1}=x_n-f(x_n)/f'(x_n)$, typisk 3 iterasjoner.

8. **Bevis-sjangeren er obligatorisk.** ε–N-definisjonen av grense og Cauchyfølge
   skrives eksplisitt; topologibevis starter fra definisjonen av åpen/lukket/kompakt;
   Newton-konvergensbevis via monoton+begrenset; kontinuitet via Weierstrass' M-test;
   konvergens via delvis summasjon (Abel). Forutsetningene sjekkes eksplisitt.

9. **Formelark-tenkning (kode D).** Studenten får utdelt formelark med
   Maclaurinrekker ($e^x$, $\sin$, $\cos$, $1/(1-x)$), numeriske formler
   (Newton/Euler/forbedret Euler) og Eulers formel — disse **oppgis**, så treningen
   ligger i anvendelsen. Alt annet teoriapparat (konvergenstester, topologifakta,
   ODE-metoder, de Moivre-røtter, uniform-konvergens-prosedyren) må sitte **utenat**.
   Egen «utenat»-note i hvert kapittel + en samlet utenat-bank i kap. 9.1.

10. **Ærlighet om format og arkiv.** (a) Den nye formen (2023–2024) er **to
    årganger sterk** og bekreftet av emnebeskrivelsen — prognosen er sikker for
    kjernesjangrene. (b) **Kjeglesnitt, parametriske kurver og numerisk integrasjon
    (Simpson/trapes)** er utgått av 2023-formen; behandles kort i appendiks (8.1),
    IKKE med eksamenstrening — gjeninnfør trening kun hvis nye sett viser at de er
    tilbake (`verifiser`). (c) **Algebraens fundamentalteorem, Picard–Lindelöf og
    Weierstrass' approksimasjonsteorem** står i pensum, men har null/lav
    arkivforekomst — dekkes som teori, merket «ikke arkivbelagt». (d)
    **Hjelpemiddelkoden varierte** (kode A «alle hjelpemidler» i eldre sett, kode D
    «kun enkel kalkulator» i gjeldende) — boka kalibreres mot **kode D med
    formelark**.

### 1.6 Hjelpemiddel-kalibrering (skal gjengis i Del 0)

- **Gjeldende kode: D** (kun enkel kalkulator, ingen bok) + vedlagt **formelark**
  (Maclaurinrekker, numeriske metoder, Eulers formel). Eldre sett brukte varierende
  koder (kode A «alle hjelpemidler» på enkelte kont-sett).
- **Konsekvens:** Studenten skal ikke pugge formelarkets innhold, men vite når/hvordan
  det brukes. Resten av apparatet (konvergenstester ved navn, topologifakta,
  ODE-metoder, de Moivre-røtter, sup-metoden for uniform konvergens) må sitte utenat.
  Egen utenat-bank i kap. 9.1.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), IKKE frekvens: reelle/komplekse
tall og grunnleggende topologi er språket; følger og kompletthet er motoren under all
konvergens; rekker bygger på følger; komplekse tall er selvstendig søyle (og
forkunnskap for $z^n=w$ og komplekse ODE-røtter); funksjonsfølger/uniform konvergens
bygger på følger og rekker; potensrekker bygger på rekker + uniform konvergens;
differensiallikninger bygger på potensrekker (rekkeløsning) og komplekse tall
(karakteristisk polynom); numeriske metoder er selvstendig verktøydel;
eksamenstreningen er sist. **Frekvensen styrer omfanget**, ikke rekkefølgen:
92–100 %-temaer får teori + eget drillkapittel; 23–62 %-temaer får ett–to kompakte
kapitler; utgåtte kalkulus-tema får ett appendiks. Seksjonstitler (blir
`sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og kode D | 1 | Prioriteringsverktøyet + 2023-formen + utenat-krav; kjerne i studieguiden. |
| 1 | Reelle tall, kompletthet og grunnleggende topologi i ℝ | 4 | Topologi/sann-usann 2/2 i gjeldende epoke + stigende → kunne/perfekt (ny tung blokk). |
| 2 | Følger, kompletthet og Cauchyfølger | 3 | Cauchy fast i gjeldende epoke; motoren under all konvergens → kunne/perfekt. |
| 3 | Rekker: konvergens, tester og klassifisering | 4 | Rekkekonvergens 92 % (fast oppgave 2) → perfekt → teori + drill. |
| 4 | Komplekse tall og røtter | 3 | Komplekse røtter $z^n=w$ 85 % (fast oppgave 3) → perfekt → teori + drill. |
| 5 | Funksjonsfølger, uniform konvergens og Weierstrass | 4 | Uniform konvergens 92 % (signaturoppgave 4) + M-test/Abel → perfekt → teori + drill. |
| 6 | Potensrekker og Taylorrekker | 4 | Potensrekker konv.radius 92 % + Taylor (fast oppgave 5) → perfekt → teori + drill. |
| 7 | Differensiallikninger | 5 | Lineære ODE 100 % + potensrekkeløsning 92 % (oppgave 7) → perfekt → teori + drill. |
| 8 | Numeriske metoder og utgåtte kalkulus-tema | 3 | Euler 77 %/Newton 62 % (oppgave 6) → kunne + 1 appendiks (utgått, kjenne). |
| 9 | Eksamenstrening, bevis og øvingseksamener | 4 | Føring/utenat + bevis-drill + 3 komplette øvingseksamener (kode D, 2023-form). |

**Avvik fra DNA-malen (dokumentert):**

1. **34 tema-/treningskapitler — innenfor DNA-taket (20–35), i øvre sjikt.**
   Begrunnet i at boka dekker **fem selvstendige fagfelt** (topologi/følger, rekker,
   komplekse tall, uniform konvergens/potensrekker, ODE) som alle er selvstendig
   eksamenstestet i hvert sett — bredden kan ikke kuttes. Flashcard-tettheten er
   bevisst høy (622) fordi kode D krever at hele teoremapparatet (konvergenstester,
   topologifakta, ODE-metoder) pugges uten hjelpemidler.

2. **Sann/usann-topologiblokken (Del 1) er BÅDE ny og karakterskillende.** Den er
   eksplosivt økende (0/7 i 2016–19, 2/2 i 2023–24) og bekreftet av vår 2024. Den får
   full teoribehandling + eget drillkapittel (1.4) med de eksakte fakta studenten må
   kunne presist (Heine–Borel, tellbarhet, urbilder), fordi den bærer hele oppgave 1
   (1/7 av karakteren).

3. **Uniform konvergens (5.1–5.2) er emnets tydeligste enkeltkarakterskiller (92 %)**
   og får teori + eget drillkapittel (5.3) fokusert på sup-metoden, pluss et eget
   kapittel (5.4) for Weierstrass M-test / Abels delvise summasjon (pensum, lav
   arkivfrekvens, men differensierende).

4. **ODE-delen (Del 7) er tyngst (5 kapitler)** fordi den bærer to av de fem
   92–100 %-søylene: lineære ODE (100 %) og potensrekkeløsning (92 %). Den får teori +
   to drillkapitler (7.3 karakteristisk-polynom-drill, 7.5 rekkeløsning-drill).
   Picard–Lindelöf dekkes teoretisk (7.4), merket «ikke arkivbelagt».

5. **Utgåtte kalkulus-tema samles i ETT appendiks-kapittel (8.3), «kjenne»-nivå,
   uten eksamenstrening.** Kjeglesnitt, parametriske kurver (fart/akselerasjon/
   buelengde) og numerisk integrasjon (Simpson/trapes) har null forekomst i
   2023–2024. De behandles kort som referanse, med eksplisitt merknad om at treningen
   gjeninnføres kun hvis nye sett viser at de er tilbake (`verifiser`).

6. **Egen bevis-drill (kap. 9.2).** Bevisferdigheten (Cauchy/nøstede intervaller,
   Newton-konvergens, kontinuitet via M-test, konvergens via delvis summasjon) er en
   selvstendig toppkarakterskiller — den får eget drillkapittel i tillegg til at
   bevistemaene forankres i sine fagkapitler.

7. **Numeriske metoder (Del 8) er KUNNE og formelark-støttet.** Euler (77 %) og
   Newton (62 %) drilles på disiplinert utregning med foreskrevet presisjon, ikke på å
   pugge formlene (de ligger på formelarket). Newton-konvergensbeviset er den
   karakterhevende delen (forankret her + i bevis-drill 9.2).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i bokas Del 0: **A**
sann/usann om topologi/følger/kontinuitet, **B** rekker (vis konvergens +
klassifiser divergent/betinget/absolutt), **C** komplekse røtter av $z^n=w$
(de Moivre/polarform), **D** uniform konvergens av funksjonsfølge (sup-metoden),
**E** potensrekker for gitte funksjoner + konvergensradius/-område, **F** lineær ODE
med konstante koeffisienter (homogen + partikulær + initialbet.), **G**
potensrekkeløsning av ODE (rekurrens), **H** numerisk løsning av 1. ordens ODE
(Euler/forbedret Euler), **I** Newtons metode (rotfinning + konvergensbevis), **J**
topologi/Cauchyfølge som bevisoppgave, **K** Weierstrass M-test / kontinuitet av
rekkesum, **L** delvis summasjon (Abel) / Abels teorem. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør:** MA1101 er NTNUs forkunnskapsemne og er ikke bygget som bok.
Referanser til MA1101 skrives som **klartekst** med markøren *(NTNU-forkunnskapsemne,
ikke bygget ennå; aktiver `/bok/<kode>/<id>`-lenke når den finnes)*. Bygde bøker
(R2, S2, R1) lenkes normalt, kun til kapitler som finnes: **R2** dekker rekker,
komplekse tall, følger; **S2** dekker derivasjon/integrasjon og differensiallikninger;
**R1** dekker grenser og funksjonsanalyse — de er primær-ankrene for forkunnskaper.

---

### Del 0 — Eksamenskartet, føringsstandarden og kode D

#### Kapittel 0.1: Eksamenskartet: 7 likt vektede oppgaver, den nye analyse-formen og kode D

- **id:** `ma1102-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes dette emnet: den 4-timers eksamenen med 7 likt vektede oppgaver, den faste 2023–2024-dramaturgien (sann/usann-topologi → rekker → komplekse røtter → uniform konvergens → potensrekker → Euler → lineær ODE + rekkeløsning), sensorreglene, pensumskiftet fra kalkulus- til ren-analyse-epoken, og utenat-kravet (kode D med formelark) som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (73 PDF-er 2005–2024, 13 sett + vår 2024 lest grundig med løsningsforslag). Skal gjengi: (i) **vurderingsformen**: én **4-timers skriftlig skoleeksamen**, karakter A–F, **7 oppgaver som teller likt**, fullt begrunnet langsvar der *alle svar skal begrunnes* unntatt sann/usann-oppgaven; (ii) **den faste dramaturgien (2023–2024)**: (1) 10 sann/usann-utsagn om topologi/følger/kontinuitet, (2) rekker — vis konvergens + klassifiser 3 rekker, (3) komplekse røtter $z^n=w$, (4) uniform konvergens på $[0,1]$, (5) potensrekker + konvergensradius/-område for 3 funksjoner, (6) Euler/forbedret Euler (4 desimaler), (7) lineær ODE + potensrekkeløsning; Newton i ~annethvert sett; (iii) **temafrekvens-tabellen** (fra §2, dokumentert): lineære ODE 100 %, potensrekkeløsning av ODE 92 %, potensrekker konv.radius 92 %, uniform konvergens 92 %, rekkekonvergens 92 %, komplekse røtter 85 %, numerisk ODE (Euler) 77 %, Taylor/Maclaurin 77 %, Newton 62 %, følger 54 %, eksistens-/entydighetsbevis 46 %, topologi i ℝ 23 % (eksploderer 2023), Cauchyfølger 23 %, Weierstrass M-test 15 %, delvis summasjon (Abel) 15 %; (iv) **pensumskiftet** (kalkulus-epoke t.o.m. 2022 → ren analyse-epoke 2023→): topologi/Cauchy/kompakthet inn, kjeglesnitt/parametriske kurver/numerisk integrasjon ut; (v) **kode D + formelark** (Maclaurinrekker, numeriske metoder, Eulers formel oppgis; resten pugges); (vi) **karakterskillene** (bestått ≈ mekanikken: karakteristisk likning + partikulær, konvergensradius via forholdstest, oppsett av rekkeløsning, Euler/Newton-iterasjon, komplekse røtter via de Moivre, punktvis grense; midtsjikt ≈ + full uniform konvergens med sup, endepunktsjekk, klassifisering betinget/absolutt med navngitt test, lukket form på rekkeløsning; toppsjikt ≈ korrekt sann/usann-topologi, fullførte bevis med forutsetninger sjekket, gjenkjenne rekkeløsning som elementærfunksjon, presis rand-/endepunktbehandling).
- **Innholdskontrakt:** Sjangerkatalogen A–L presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære eksamen** (4 t, 7 likt vektede oppgaver, kode D + formelark): **O1** sann/usann topologi/følger/kontinuitet; **O2** rekker — vis konvergens + klassifiser 3; **O3** komplekse røtter $z^n=w$; **O4** uniform konvergens på $[0,1]$; **O5** potensrekker + konvergensradius/-område (3 funksjoner); **O6** Euler/forbedret Euler (4 desimaler); **O7** lineær ODE + potensrekkeløsning; **O (ca. hvert 2.)** Newtons metode. **Lesestrategi**: Del 2 og 3 (følger/rekker) er motoren; **Del 5 (uniform konvergens), Del 6 (potensrekker) og Del 7 (ODE) er tyngdepunktet** — bruk mest tid der; Del 4 (komplekse tall) kan leses tidlig; Del 1 (topologi) bærer oppgave 1 og er ny/karakterskillende; Del 9 løfter føring/bevis.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en utenat-plan for det kode D IKKE gir på formelark (konvergenstester ved navn, topologifakta, de Moivre-røtter, sup-metoden, ODE-metodene)»; «hvilke fem søyler er nesten garantert (92–100 %), og hvordan fordeler du 4 timer på 7 likt vektede oppgaver?»; «pensumskiftet 2022→2023 — hva forsvant og hva kom til, og hvorfor trener du IKKE kjeglesnitt/Simpson?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de fem søylene; undervurdere den nye topologi-blokken (oppgave 1, 1/7 av karakteren); tro at uniform konvergens kan «vises» punktvis; hoppe over endepunktsjekk og bevis-trening; trene på utgåtte kalkulus-tema (kjeglesnitt/Simpson) som er borte etter 2022; glemme at teoremer/tester skal navngis.
- **Quiz: 10 · Flashcards: 14** (frekvenser, sjangerkatalog A–L, sensorregler, pensumskiftet, kode D + formelark, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Reelle tall, kompletthet og grunnleggende topologi i ℝ *(prioritet: KUNNE/PERFEKT — topologi/sann-usann bærer oppgave 1, 2/2 i gjeldende epoke og stigende)*

#### Kapittel 1.1: Reelle tall, supremum/infimum og kompletthetsaksiomet

- **id:** `ma1102-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Grunnmuren under all analyse: supremum/infimum, kompletthetsaksiomet (enhver oppad begrenset mengde har et supremum), og hva som skiller ℝ fra ℚ (√2 finnes i ℝ, ikke i ℚ) — verktøyene bak konvergens, Cauchy og topologi.
- **Forkunnskaper (kryssbok):** Grenser og ulikheter fra MA1101 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*; tallmengder fra VGS.
- **Eksamensbelegg:** Grunnlag for sjanger A og J (topologi/Cauchy-bevis). Fasitens grep: bruk kompletthetsaksiomet og sup/inf presist i bevis. Prioritet: **kunne** (bærende teori for topologi/Cauchy som er stigende i gjeldende epoke).
- **Innholdskontrakt:** **Supremum/infimum** (minste øvre / største nedre skranke); **kompletthetsaksiomet** (oppad begrenset ⇒ har sup i ℝ); at $\sup\{x\in\mathbb Q:x^2<2\}=\sqrt2\notin\mathbb Q$; **arkimedisk egenskap**; tetthet av ℚ i ℝ; absoluttverdi og trekantulikheten $|a+b|\le|a|+|b|$. Alt til aktiv bruk (bevis starter herfra).
- **Oppgavesjangre:** J (grunnlag). Mønstereksempel: «La $A=\{1-1/n:n\in\mathbb N\}$. Finn $\sup A$ og $\inf A$, og avgjør om de er med i $A$.»
- **Typiske feil:** Forveksler supremum med maksimum (sup trenger ikke være med i mengden); tror ℚ er komplett; bruker kompletthetsaksiomet uten å sjekke at mengden er begrenset; slurv med trekantulikheten.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.2: Åpne, lukkede og kompakte mengder i ℝ (Heine–Borel)

- **id:** `ma1102-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-1-1`
- **kapitteltype:** teori
- **description:** Topologien i ℝ som bærer oppgave 1: åpne/lukkede mengder, kompakthet via Heine–Borel (kompakt ⇔ lukket og begrenset), åpne overdekninger, og fellene sensor tester — vilkårlig union av kompakte trenger ikke være kompakt, vilkårlig snitt av lukkede er lukket.
- **Forkunnskaper (kryssbok):** Kap. 1.1.
- **Eksamensbelegg:** Sjanger A (topologi, **eksploderer 2023**, 2/2 i gjeldende epoke) og J. Fasitens grep: kjenn Heine–Borel presist; skill union/snitt-oppførsel. Prioritet: **kunne** (bærer oppgave 1, 1/7 av karakteren).
- **Innholdskontrakt:** **Åpen mengde** (hvert punkt har en åpen omegn i mengden); **lukket mengde** (komplementet åpent / inneholder alle grensepunkter); **randpunkt, indre/ytre punkt, opphopningspunkt**; **kompakt (Heine–Borel: lukket OG begrenset)**; **åpne overdekninger** (kompakt ⇔ enhver åpen overdekning har endelig deloverdekning); at **vilkårlig snitt av lukkede er lukket** og **vilkårlig snitt av kompakte er kompakt**, men **vilkårlig union av kompakte trenger IKKE være kompakt** (f.eks. $\bigcup_n[n,n+1]=[1,\infty)$); intervaller (åpne/lukkede/halvåpne). Alt til aktiv bruk (sann/usann-fakta må sitte presist).
- **Oppgavesjangre:** A/J. Mønstereksempel: «Avgjør sann/usann med begrunnelse: unionen $\bigcup_{n=1}^\infty[1/n,1]$ er kompakt.» (Usann — unionen er $(0,1]$, ikke lukket.)
- **Typiske feil:** Tror vilkårlig union av kompakte er kompakt; tror ℚ er lukket i ℝ; forveksler «begrenset» og «kompakt» (Heine–Borel krever BÅDE lukket og begrenset); glemmer at et enkeltpunkt er kompakt; blander åpen og lukket når komplementet tas.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 1.3: Tellbarhet, tetthet og kontinuitetens topologiske egenskaper

- **id:** `ma1102-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-1-2`
- **kapitteltype:** teori
- **description:** Tellbar vs. ikke-tellbar (ℚ tellbar, ℝ ikke — Cantors diagonalargument), og hvordan kontinuerlige funksjoner oppfører seg topologisk: bevarer kompakthet, urbildet av åpen/lukket er åpen/lukket, men urbildet av begrenset trenger ikke være begrenset.
- **Forkunnskaper (kryssbok):** Kap. 1.2.
- **Eksamensbelegg:** Sjanger A (tellbarhet + kontinuitetsfakta i sann/usann-oppgaven) og J. Fasitens grep: kjenn urbildreglene og tellbarhetsfakta presist. Prioritet: **kunne**.
- **Innholdskontrakt:** **Tellbar/ikke-tellbar mengde**; **ℚ tellbar** (par-oppregning), **ℝ ikke-tellbar** (Cantors diagonalargument, kjennskap); **kontinuerlige funksjoner bevarer kompakthet** (bilde av kompakt er kompakt ⇒ ekstremalverdisetningen); **urbilde**: $f^{-1}(\text{åpen})$ åpen, $f^{-1}(\text{lukket})$ lukket for kontinuerlig $f$, men $f^{-1}(\text{begrenset})$ trenger IKKE være begrenset (konstant $f$: urbildet er hele ℝ); **fikspunkt** for kontinuerlig $f:[0,1]\to[0,1]$ (skjæringssetningen i 1D — Brouwer). Alt til aktiv bruk (sann/usann-fakta).
- **Oppgavesjangre:** A. Mønstereksempel: «Avgjør sann/usann: for enhver kontinuerlig $f:\mathbb R\to\mathbb R$ og begrenset $A\subset\mathbb R$ er $f^{-1}(A)$ begrenset.» (Usann — konstant $f$ gir urbilde $\mathbb R$.)
- **Typiske feil:** Tror ℝ er tellbar; tror urbildet av begrenset er begrenset; forveksler bilde og urbilde i topologireglene; glemmer at kontinuitet kreves for urbildreglene; blander tellbar og endelig.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.4: Drill: Sann/usann om topologi, følger og kontinuitet (oppgave 1)

- **id:** `ma1102-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-1-3`
- **kapitteltype:** drill
- **description:** Hele oppgave-1-repertoaret drillet til reflekshastighet: 10-punkts sann/usann-batterier om topologi, kompakthet, tellbarhet, Cauchyfølger og kontinuitet — der ett feil svar koster, og der studenten må kjenne kjernefaktaene uten å nøle.
- **Eksamensbelegg:** Dekker sjanger A samlet (2/2 i gjeldende epoke, oppgave 1). Variantkatalogen: Heine–Borel, union/snitt-oppførsel, tellbarhet, urbilder, Cauchy-konvergens, fikspunkt. Prioritet: **kunne** (bærer oppgave 1).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme for hvert utsagn): (1) identifiser hvilket fakta som testes; (2) let etter moteksempel FØRST (union av kompakte, konstant funksjon, ℚ-mengder); (3) hvis intet moteksempel, hent teoremet (Heine–Borel, urbildregelen, Cauchy-kompletthet); (4) svar sann/usann. Gjennomregnet «10-punkts oppgave 1-batteri» med sensor-margnotater (her kreves IKKE begrunnelse, men du må være sikker). 12–15 sann/usann-øvingssett på eksamensnivå, hvert med kort fasit-begrunnelse for læring.
- **Oppgavesjangre:** A, alle varianter (topologi, kompakthet, tellbarhet, følger, kontinuitet). Mønstereksempel: «Avgjør sann/usann for 10 utsagn (blandet topologi/følger/kontinuitet), og gi en kort begrunnelse for hvert til egen læring.»
- **Typiske feil:** Nøler på de mest kontraintuitive (union av kompakte, urbilde av begrenset, Cauchy av irrasjonale); svarer på magefølelse uten å teste moteksempel; blander bilde/urbilde; glemmer Heine–Borels tosidighet.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Følger, kompletthet og Cauchyfølger *(prioritet: KUNNE/PERFEKT — Cauchy fast i gjeldende epoke; motoren under all konvergens)*

#### Kapittel 2.1: Følger, grenser og ε–N-definisjonen

- **id:** `ma1102-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-1-1`
- **kapitteltype:** teori
- **description:** Følgekonvergens fra grunnen: ε–N-definisjonen av grense, regneregler, og de faste konvergenskriteriene (monoton + begrenset ⇒ konvergent) som bærer både Cauchy-bevis og Newton-konvergens.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Følger fra [Rekker](/bok/r2/r2-3-1) (R2) og grenser fra MA1101 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger J (grunnlag), sjanger I (Newton-konvergens via monoton+begrenset), følger 54 %. Fasitens grep: skriv ε–N presist; bruk monoton+begrenset. Prioritet: **kunne**.
- **Innholdskontrakt:** **ε–N-definisjonen** ($x_n\to L$: $\forall\varepsilon>0\,\exists N:\,n>N\Rightarrow|x_n-L|<\varepsilon$); **regneregler** for grenser (sum, produkt, kvotient); **monotone følger**; **skviseteoremet**; **monoton + begrenset ⇒ konvergent** (kompletthetens følgeform); delfølger og opphopningspunkter (kjennskap); divergens mot $\pm\infty$. Alt til aktiv bruk.
- **Oppgavesjangre:** J. Mønstereksempel: «Vis fra ε–N-definisjonen at $x_n=(2n+1)/(n+3)\to2$.»
- **Typiske feil:** Feil kvantorrekkefølge i ε–N; velger $N$ som avhenger av $n$; bruker monoton+begrenset uten å vise begge; forveksler grense og opphopningspunkt.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Cauchyfølger og kompletthet i ℝ

- **id:** `ma1102-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-2-1`
- **kapitteltype:** teori
- **description:** Cauchyfølgen — ε–N-definisjonen der leddene nærmer seg hverandre — og kompletthetens kjernesetning: i ℝ er en følge Cauchy hvis og bare hvis den konvergerer. Verktøyet bak nøstede-intervall-bevis og oppgave 1-fakta.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.1.
- **Eksamensbelegg:** Sjanger J (Cauchy-bevis, **fast i gjeldende epoke**, vår 2024 åpnet med det), sjanger A (Cauchy-fakta i sann/usann). Fasitens grep: skriv Cauchy-definisjonen, bruk ℝ-kompletthet. Prioritet: **kunne/perfekt** (fast i 2023–2024).
- **Innholdskontrakt:** **Cauchyfølge** ($\forall\varepsilon>0\,\exists N:\,n,m>N\Rightarrow|x_n-x_m|<\varepsilon$); **ℝ komplett** (Cauchy ⇔ konvergent i ℝ); at ℚ IKKE er komplett (Cauchy av rasjonale kan konvergere mot irrasjonal); **kontraksjons-/rekursivt kriterium** ($|x_{n+1}-x_n|\le C|x_n-x_{n-1}|$ med $C<1$ ⇒ Cauchy — vår 2024); **nøstede lukkede intervaller** $[a_n,b_n]$ med $b_n-a_n\to0$ har nøyaktig ett felles punkt. Alt til aktiv bruk (ε–N-bevis kreves).
- **Oppgavesjangre:** J. Mønstereksempel: «Vis at følgen gitt ved $x_{n+1}=\tfrac12(x_n+2/x_n)$, $x_1=2$, er en Cauchyfølge, og bestem grensen.»
- **Typiske feil:** Blander Cauchy-definisjonen (to indekser $n,m$) med grensedefinisjonen; tror Cauchy av irrasjonale konvergerer mot irrasjonal; glemmer å begrunne $C<1$ i kontraksjonskriteriet; hopper over kompletthetssteget.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 2.3: Drill: Cauchyfølger og nøstede intervaller (bevis)

- **id:** `ma1102-2-3` · **number:** 2.3 · **estimatedMinutes:** 75 · **prerequisites:** `ma1102-2-2`
- **kapitteltype:** drill
- **description:** Cauchy- og kompletthets-bevisene drillet til A-besvarelse: vis at en følge er Cauchy, at nøstede intervaller har ett felles punkt, og at kontraksjonskriteriet gir Cauchy — hver med ε–N-oppsett og kompletthetssteget eksplisitt.
- **Eksamensbelegg:** Dekker sjanger J samlet (fast i gjeldende epoke). Variantkatalogen: direkte Cauchy-bevis, kontraksjonskriterium, nøstede intervaller, ℚ-mot-ℝ-kompletthet. Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skriv Cauchy-definisjonen; (2) estimer $|x_n-x_m|$ (teleskop / geometrisk skranke / kontraksjon); (3) velg $N$ eksplisitt; (4) bruk ℝ-kompletthet for konvergens; (5) identifiser grensen om mulig. Gjennomregnet bevis-case med sensor-margnotater (ε–N-oppsett, kompletthetssteg navngitt). 10–12 bevisoppgaver på eksamensnivå.
- **Oppgavesjangre:** J, alle varianter. Mønstereksempel: «La $[a_j,b_j]$ være nøstede lukkede intervaller med $b_j-a_j\to0$. Vis at en følge $(x_j)$ med $x_j\in[a_j,b_j]$ er Cauchy, og at snittet av alle intervallene er ett punkt.»
- **Typiske feil:** ε–N-oppsett med feil kvantorer; glemt kompletthetssteget; kontraksjonskonstanten ikke vist $<1$; nøstede-intervall-argumentet uten å vise entydighet.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Rekker: konvergens, tester og klassifisering *(prioritet: PERFEKT — rekkekonvergens 92 %, fast oppgave 2)*

#### Kapittel 3.1: Rekker, delsummer og de grunnleggende konvergenstestene

- **id:** `ma1102-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-2-1`
- **kapitteltype:** teori
- **description:** Rekker via delsummer, leddtesten, geometriske rekker og p-rekker, og verktøykassen som bærer oppgave 2: forholdstest, rottest, sammenligningstest og grensesammenligning — alle navngitt slik sensor krever.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Rekker fra [Rekker](/bok/r2/r2-3-1) og [Uendelige geometriske rekker](/bok/r2/r2-3-3) (R2).
- **Eksamensbelegg:** Sjanger B, del av **92 %**-oppgaven. Fasitens grep: velg riktig navngitt test; sjekk leddtesten først. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Rekke** $\sum a_n$ og **delsummer** $s_N$; **konvergens** ($s_N\to s$); **leddtesten** ($a_n\not\to0\Rightarrow$ divergens); **geometrisk rekke** ($\sum r^n$, $|r|<1$); **p-rekker** ($\sum1/n^p$, konvergerer $\iff p>1$); **teleskopsummer**; **sammenligningstest** og **grensesammenligning**; **forholdstest** ($\lim|a_{n+1}/a_n|$); **rottest** ($\lim|a_n|^{1/n}$); **integraltest** (kjennskap). Alt til aktiv bruk (navngi testen).
- **Oppgavesjangre:** B. Mønstereksempel: «Avgjør om $\sum n^2/2^n$ konvergerer, og navngi testen du bruker.»
- **Typiske feil:** Bruker leddtesten som konvergensbevis (den avgjør bare divergens); glemmer p-rekke-grensen $p>1$; velger sammenligning mot feil rekke; regnefeil i forholds-/rottest; navngir ikke testen (trekk på begrunnelseskravet).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Absolutt og betinget konvergens, alternerende rekker

- **id:** `ma1102-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-3-1`
- **kapitteltype:** teori
- **description:** Den todelte klassifiseringen sensor krever: absolutt konvergens (⇒ konvergens), betinget konvergens via testen for alternerende rekker, og hvordan du skiller de tre utfallene divergent/betinget/absolutt for en gitt liste rekker.
- **Forkunnskaper (kryssbok):** Kap. 3.1.
- **Eksamensbelegg:** Sjanger B, **92 %** (klassifiseringsdelen av oppgave 2). Fasitens grep: test $\sum|a_n|$ først; ved divergens, sjekk alternerende. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Absolutt konvergens** ($\sum|a_n|$ konvergerer) **⇒ konvergens**; **betinget konvergens** ($\sum a_n$ konvergerer, $\sum|a_n|$ divergerer); **testen for alternerende rekker** (Leibniz: ledd $\to0$ og monotont avtagende); **skjulte alternerende rekker** ($\cos(n\pi)=(-1)^n$); klassifiseringsprosedyren (divergent / betinget / absolutt); $1/\ln n$-typen (divergerer siden $\ln n<n$). Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Avgjør om $\sum(-1)^n/\sqrt n$ er divergent, betinget eller absolutt konvergent, og begrunn hvert steg.»
- **Typiske feil:** Kaller en alternerende, ikke-absolutt konvergent rekke «absolutt»; glemmer å sjekke monotonien i Leibniz; ser ikke den skjulte alternerende strukturen ($\cos n\pi$); bruker feil test.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.3: Drill: Vis konvergens + klassifiser (oppgave 2)

- **id:** `ma1102-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-3-2`
- **kapitteltype:** drill
- **description:** Hele oppgave-2-repertoaret drillet: vis at en gitt sum konvergerer med navngitt argument (teleskop, sammenligning, forholds-/rottest), og klassifiser en liste rekker som divergent/betinget/absolutt — hver med begrunnelse.
- **Eksamensbelegg:** Dekker sjanger B samlet (**92 %**). Variantkatalogen: vis konvergens (teleskop / $\sum C/2^n$ / p-rekke / forholds-/rottest), klassifiser 3 rekker, skjult alternerende. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) sjekk leddtesten; (2) for «vis konvergens»: velg og navngi argumentet (teleskop/sammenligning/forholds-/rottest); (3) for «klassifiser»: test $\sum|a_n|$ (absolutt?), ved divergens sjekk alternerende (betinget?), ellers divergent; (4) skriv konklusjon med navngitt test. Gjennomregnet «oppgave 2-case» (én vis-konvergens + tre klassifiseringer) med sensor-margnotater (navngi testen, begrunn hvert punkt). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** B, alle varianter. Mønstereksempel: «(a) La $(a_n)$ være begrenset. Vis at $\sum a_n/2^n$ er absolutt konvergent. (b) Klassifiser $\sum(-1)^n/\sqrt n$, $\sum1/(n\ln n)$ og $\sum n!/n^n$ som divergent/betinget/absolutt.»
- **Typiske feil:** Uklart hvilken test som brukes; leddtesten misbrukt; betinget/absolutt forvekslet; endepunkt-/grensetilfeller oversett.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 3.4: Delvis summasjon (Abel) og Abels teorem

- **id:** `ma1102-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-3-2`
- **kapitteltype:** teori
- **description:** De to viderekomne rekkeverktøyene i pensum: Abels delvise summasjon (for rekker der ledd er produkt av begrenset delsum og monotont avtagende faktor) og Abels teorem (grenseverdi av potensrekke i endepunktet) — lav arkivfrekvens, men eksplisitt pensum og differensierende.
- **Forkunnskaper (kryssbok):** Kap. 3.2, 3.1.
- **Eksamensbelegg:** Sjanger L, **15 %** (v2022 partiell summasjon; kont2016-øving Abels teorem), men eksplisitt pensum. Fasitens grep: gjenkjenn produktstrukturen; bruk begrenset delsum + monoton faktor. Prioritet: **kjenne/kunne** (differensierende).
- **Innholdskontrakt:** **Delvis summasjon (Abel)**: $\sum a_n b_n$ omskrevet via delsummene $A_n=\sum_{k\le n}a_k$; brukes når $A_n$ er **begrenset** (f.eks. $\sum\sin(an)$ har begrenset delsum) og $b_n$ er **monotont avtagende mot 0** (f.eks. $1/\sqrt n$) ⇒ konvergens (Dirichlets test); **Abels teorem** (hvis $\sum a_n$ konvergerer, er $\lim_{x\to1^-}\sum a_nx^n=\sum a_n$) — brukes til å summere alternerende rekker ($\pi/4=\sum(-1)^n/(2n+1)$). Merk «pensum, lav arkivfrekvens».
- **Oppgavesjangre:** L. Mønstereksempel: «Bruk delvis summasjon til å vise at $\sum\sin(an)/\sqrt n$ konvergerer for alle $a$.»
- **Typiske feil:** Bruker delvis summasjon uten å vise at delsummen er begrenset; glemmer monotonikravet på $b_n$; forveksler Abels teorem med testen for alternerende rekker; feil i delsum-formelen for $\sum\sin(an)$.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Komplekse tall og røtter *(prioritet: PERFEKT — komplekse røtter $z^n=w$ 85 %, fast oppgave 3)*

#### Kapittel 4.1: Komplekse tall: kartesisk og polar form, Eulers formel

- **id:** `ma1102-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Komplekse tall på kartesisk og polar form, modulus og argument, Eulers formel e^{iθ}=cos θ + i sin θ, og regning i polarform (produkt/kvotient/potens) — grunnlaget for røtter og for komplekse ODE-røtter.
- **Forkunnskaper (kryssbok):** Komplekse tall fra [Komplekse tall](/bok/r2/r2-6-1) (R2, hvis kapitlet finnes — ellers bygg fra grunnen).
- **Eksamensbelegg:** Sjanger C (grunnlag), forkunnskap for de Moivre-røtter og komplekse ODE-røtter (7.1). Fasitens grep: kartesisk↔polar sikkert; Eulers formel. Prioritet: **perfekt** (bærer oppgave 3).
- **Innholdskontrakt:** **Kartesisk form** $z=x+iy$, **konjugat** $\bar z$, **modulus** $|z|=\sqrt{x^2+y^2}$, **argument** $\arg z$; **polarform** $z=r(\cos\theta+i\sin\theta)=re^{i\theta}$; **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$; produkt/kvotient i polarform (modulus multipliseres, argument adderes); kompleks eksponential. Alt til aktiv bruk. *(Verifiser R2-kapittel-id før lenking.)*
- **Oppgavesjangre:** C (grunnlag). Mønstereksempel: «Skriv $z=-1+i\sqrt3$ på polarform og regn ut $z^4$.»
- **Typiske feil:** Feil kvadrant for argumentet; blander $|z|^2$ og $z^2$; regnefeil i kartesisk↔polar; glemmer at argument er periodisk ($+2\pi k$).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.2: de Moivres formel og n-te røtter av komplekse tall

- **id:** `ma1102-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-4-1`
- **kapitteltype:** teori
- **description:** Signaturverktøyet for oppgave 3: de Moivres formel og de n løsningene av z^n=w, jevnt fordelt på en sirkel — pluss substitusjonstrikset for sammensatt grad (w=z³ i z⁶+z³+1=0) og algebraens fundamentalteorem som garanterer riktig antall.
- **Forkunnskaper (kryssbok):** Kap. 4.1.
- **Eksamensbelegg:** Sjanger C, **85 %** ($z^n=w$-typen dominerer nyere sett). Fasitens grep: skriv høyresiden på polarform, løs $\rho^n=r$ og $n\varphi=\theta+2\pi k$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **de Moivres formel** $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$; **$n$-te røtter av $w=re^{i\theta}$**: $z_k=r^{1/n}e^{i(\theta+2\pi k)/n}$, $k=0,\dots,n-1$ (jevnt fordelt på sirkel med radius $r^{1/n}$); **substitusjonstriks** for sammensatt grad ($w=z^3$ i $z^6+z^3+1=0$: løs andregradslikningen, finn så kuberøtter); **algebraens fundamentalteorem** (grad-$n$-polynom har $n$ røtter i ℂ — dekk som teori, «grunnlag for røtteoppgavene»). Alt til aktiv bruk.
- **Oppgavesjangre:** C. Mønstereksempel: «Finn alle komplekse $z$ med $z^5=-i$.» (Skriv $-i=e^{-i\pi/2}$; røttene er $e^{i(-\pi/2+2\pi k)/5}$, $k=0,\dots,4$.)
- **Typiske feil:** Glemmer å ta med alle $n$ røtter ($k=0,\dots,n-1$); feil kvadrant/argument for $w$; vinkel ikke redusert; glemmer substitusjonstrikset ved sammensatt grad; feil radius $r^{1/n}$.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 4.3: Drill: Komplekse røtter av z^n=w (oppgave 3)

- **id:** `ma1102-4-3` · **number:** 4.3 · **estimatedMinutes:** 75 · **prerequisites:** `ma1102-4-2`
- **kapitteltype:** drill
- **description:** Hele oppgave-3-repertoaret drillet: skriv høyresiden på polarform, finn alle n røtter jevnt fordelt på sirkelen, og bruk substitusjonstrikset ved sammensatt grad — alt uten fortegns- eller kvadrantfeil.
- **Eksamensbelegg:** Dekker sjanger C samlet (**85 %**). Variantkatalogen: rene $z^n=w$, sammensatt grad ($z^6+z^3+1$), reelle koeffisienter (konjugerte par), tegning på Arganddiagrammet. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skriv $w$ på polarform $re^{i\theta}$; (2) sett $z=\rho e^{i\varphi}$, løs $\rho^n=r$ og $n\varphi=\theta+2\pi k$; (3) skriv ut alle $n$ røtter for $k=0,\dots,n-1$; (4) ved sammensatt grad: substituér, løs, finn røtter av hver. Gjennomregnet «oppgave 3-case» med sensor-margnotater (alle røtter med, argument redusert). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** C, alle varianter. Mønstereksempel: «Løs $z^6+z^3+1=0$ ved å sette $w=z^3$.»
- **Typiske feil:** Mangler røtter; feil argument/kvadrant; substitusjon glemt ved sammensatt grad; feil radius.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Funksjonsfølger, uniform konvergens og Weierstrass *(prioritet: PERFEKT — uniform konvergens 92 %, signaturoppgave 4; emnets tydeligste karakterskiller)*

#### Kapittel 5.1: Punktvis og uniform konvergens av funksjonsfølger

- **id:** `ma1102-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-2-1`
- **kapitteltype:** teori
- **description:** Skillet som bærer oppgave 4: punktvis grense (ta lim f_n(x) for hver fast x) vs. uniform konvergens (sup|f_n−f|→0), sup-metoden via derivasjon/toppunkt, og teoremet at uniform grense av kontinuerlige er kontinuerlig.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Derivasjon og toppunkt fra [Funksjonsdrøfting](/bok/r1/r1-4-1) (R1) og MA1101 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger D, **92 %** (emnets tydeligste faste oppgave). Fasitens grep: finn punktvis $f$, regn $d_n=\sup|f_n-f|$ via toppunkt, konkluder. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Punktvis konvergens** ($f_n(x)\to f(x)$ for hver fast $x$; pass på skjøtepunkter som $x=0$); **uniform konvergens** via **sup-metrikken** $d(f_n,f)=\sup_x|f_n(x)-f(x)|$, uniform $\iff d(f_n,f)\to0$; **sup finnes via derivasjon/toppunkt** (deriver $f_n-f$, finn maks); **uniform grense av kontinuerlige er kontinuerlig** (kontrapositiv motfelle: $f$ diskontinuerlig ⇒ ikke uniform); familier: $nx^ae^{-nx}$, $xe^{-nx^2}$, $xe^{-nx}$, $x^{2n}/(n+1)$. Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «La $f_n(x)=x^{2n}/(n+1)$ på $[0,1]$. Finn punktvis grense $f$ og avgjør om $f_n\to f$ uniformt.»
- **Typiske feil:** Konkluderer uniform kun fra punktvis; glemmer sup-utregningen; overser diskontinuerlig grense (skjøtepunkt); feil toppunkt i sup.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 5.2: Funksjonsrekker og kontinuitet av rekkesum

- **id:** `ma1102-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-5-1`
- **kapitteltype:** teori
- **description:** Fra funksjonsfølger til funksjonsrekker: uniform konvergens av Σf_n(x), og hvordan uniform konvergens overfører kontinuitet (og integrasjon/derivasjon) fra ledd til sum — broen til Weierstrass' M-test.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 3.1.
- **Eksamensbelegg:** Sjanger K (grunnlag), forkunnskap for potensrekker (Del 6). Fasitens grep: uniform konvergens av rekke via delsummer. Prioritet: **kunne**.
- **Innholdskontrakt:** **Funksjonsrekke** $\sum f_n(x)$ og delsummer; **uniform konvergens** av rekke (delsummene konvergerer uniformt); **kontinuitet overføres** (uniform grense/sum av kontinuerlige er kontinuerlig); ledd-for-ledd integrasjon og derivasjon under uniform konvergens (kjennskap; presiseres for potensrekker i Del 6). Alt til aktiv bruk.
- **Oppgavesjangre:** K (grunnlag). Mønstereksempel: «Forklar hvorfor en uniformt konvergent rekke av kontinuerlige funksjoner har en kontinuerlig sum.»
- **Typiske feil:** Antar at punktvis sum av kontinuerlige er kontinuerlig; blander uniform konvergens av følge og rekke; ledd-for-ledd-operasjon uten uniform konvergens.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.3: Drill: Uniform konvergens med sup-metoden (oppgave 4)

- **id:** `ma1102-5-3` · **number:** 5.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-5-1`
- **kapitteltype:** drill
- **description:** Signaturoppgaven drillet til automatikk: for gitt f_n(x), finn punktvis grense, regn sup|f_n−f| via toppunkt, og konkluder uniform ⇔ sup→0 — inkludert motfellen der grensen er diskontinuerlig.
- **Eksamensbelegg:** Dekker sjanger D samlet (**92 %**). Variantkatalogen: $nx^ae^{-nx}$-familien, $xe^{-nx^2}$, $x^{2n}/(n+1)$, diskontinuerlig grense (utelukker uniform). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) finn punktvis grense $f$ (ta lim for hver $x$, pass skjøtepunkt); (2) sett opp $|f_n(x)-f(x)|$; (3) deriver, finn toppunkt, regn $d_n=\sup$; (4) konkluder uniform $\iff d_n\to0$; (5) sjekk kontinuitets-motfellen. Gjennomregnet «oppgave 4-case» med sensor-margnotater (sup må regnes, ikke påstås). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** D, alle varianter. Mønstereksempel: «La $f_n(x)=nxe^{-nx^2}$ på $[0,1]$. Finn punktvis grense og avgjør om konvergensen er uniform.»
- **Typiske feil:** Sup påstått, ikke regnet; feil toppunkt; punktvis grense feil i skjøtepunkt; motfellen (diskontinuerlig grense) oversett.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 5.4: Weierstrass' M-test og approksimasjonsteorem

- **id:** `ma1102-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-5-2`
- **kapitteltype:** teori
- **description:** Weierstrass' M-test (finn ΣM_n<∞ med |f_n(x)|≤M_n ⇒ uniform konvergens ⇒ kontinuerlig sum) som verktøy for å vise at en funksjonsrekke er kontinuerlig, pluss Weierstrass' approksimasjonsteorem (polynomapproksimasjon) som pensumteori.
- **Forkunnskaper (kryssbok):** Kap. 5.2, 3.1.
- **Eksamensbelegg:** Sjanger K, **15 %** (v2022 kontinuitet via M-test; kont2022 M-test), men eksplisitt pensum og differensierende. Fasitens grep: finn $M_n$-skranke, sjekk $\sum M_n<\infty$. Prioritet: **kunne** (differensierende).
- **Innholdskontrakt:** **Weierstrass' M-test**: finn tallfølge $M_n$ med $|f_n(x)|\le M_n$ for alle $x$ i intervallet og $\sum M_n<\infty$ ⇒ $\sum f_n$ konvergerer uniformt ⇒ (siden ledd kontinuerlige) summen er kontinuerlig; motoppgave-type (moteksempel der $\sum a_n$ divergerer men $\sum(1-\cos a_n)$ konvergerer); **Weierstrass' approksimasjonsteorem** (kontinuerlig funksjon på $[a,b]$ approksimeres uniformt av polynomer — dekk som teori, «pensum, ingen ren oppgaveforekomst»). Alt til aktiv bruk (M-test); approksimasjonsteoremet som teori.
- **Oppgavesjangre:** K. Mønstereksempel: «Vis at $\sum\sin(a_n)\cos(n^2x)$ er kontinuerlig for alle $x$ når $\sum|a_n|<\infty$.»
- **Typiske feil:** Velger $M_n$ som avhenger av $x$ (ulovlig); glemmer å vise $\sum M_n<\infty$; hopper over kontinuitetssteget; forveksler M-test med forholdstest på tallrekke.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Potensrekker og Taylorrekker *(prioritet: PERFEKT — potensrekker konv.radius 92 %, fast oppgave 5)*

#### Kapittel 6.1: Potensrekker, konvergensradius og endepunktanalyse

- **id:** `ma1102-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-3-1`
- **kapitteltype:** teori
- **description:** Potensrekker Σa_n x^n, konvergensradius via forholds-/rottest (Cauchy–Hadamard), og den ufravikelige endepunktanalysen — sjekk x=±r separat for å skrive konvergensområdet som åpent/halvåpent/lukket intervall.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 3.2.
- **Eksamensbelegg:** Sjanger E, **92 %** (konvergensradius + endepunkt). Fasitens grep: forholdstest for radius, deretter separat endepunktsjekk. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Potensrekke** $\sum a_n(x-a)^n$; **konvergensradius** $R$ (forholdstest $\lim|a_{n+1}/a_n|$ eller rottest/**Cauchy–Hadamard**); **konvergensområde** med **eksplisitt endepunktanalyse** ($x=a\pm R$ testes separat med egen konvergenstest); ledd-for-ledd derivasjon og integrasjon innenfor $R$; at potensrekken definerer en $C^\infty$-funksjon på $(a-R,a+R)$. Alt til aktiv bruk (endepunktene sjekkes ALLTID).
- **Oppgavesjangre:** E. Mønstereksempel: «Finn konvergensradius og konvergensområde for $\sum x^n/(n\cdot3^n)$.» (Radius 3; sjekk $x=\pm3$ separat.)
- **Typiske feil:** Oppgir bare radius, ikke endepunkter; feil test på endepunktet; regnefeil i forholdstesten; skriver åpent intervall der endepunkt er med.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 6.2: Taylor- og Maclaurinrekker: bygg fra formelarket

- **id:** `ma1102-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-6-1`
- **kapitteltype:** teori
- **description:** Bygg potensrekker for gitte funksjoner fra formelarkets Maclaurinrekker (1/(1−x), e^x, sin, cos) ved substitusjon, derivasjon og integrasjon ledd for ledd — ikke ved å regne alle deriverte — pluss standardgrepene ln(1+y), arctan, xe^{cx}.
- **Forkunnskaper (kryssbok):** Kap. 6.1. Taylorpolynom fra MA1101 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger E, **92 %** + Taylor/Maclaurin **77 %** (nå oftest verktøy i «finn potensrekke»). Fasitens grep: gjenkjenn hvilken formelark-rekke som passer, substituér/integrer. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Maclaurinrekker (formelark)**: $1/(1-x)=\sum x^n$, $e^x=\sum x^n/n!$, $\sin x$, $\cos x$; **byggeteknikker**: substitusjon ($\ln(1+y)$ fra integrasjon av $1/(1+y)$; $\arctan x$ fra integrasjon av $1/(1+x^2)$), multiplikasjon ($xe^{cx}$), derivasjon; **Taylor om $a\ne0$** (raskest for polynomer); konvergensområde for den bygde rekken (substituér argumentet, $|arg|<1$, endepunktsjekk). Formelark-tenkning: rekkene oppgis, treningen ligger i bygging.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn Maclaurinrekken til $f(x)=\ln(2x^2+1)$ og angi konvergensområdet.»
- **Typiske feil:** Regner alle deriverte i stedet for å bruke formelarket; glemmer å substituere argumentet i konvergensområdet; feil ved integrasjonskonstanten i $\ln/\arctan$; endepunkt oversett.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.3: Drill: Potensrekker + konvergensområde for 3 funksjoner (oppgave 5)

- **id:** `ma1102-6-3` · **number:** 6.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-6-2`
- **kapitteltype:** drill
- **description:** Hele oppgave-5-repertoaret drillet: for tre funksjoner, bygg potensrekken fra formelarket, finn konvergensradius og gjør eksplisitt endepunktanalyse — den samlede formen i gjeldende epoke.
- **Eksamensbelegg:** Dekker sjanger E samlet (**92 %**, tre funksjoner per sett). Variantkatalogen: $\ln(1+ax^2)$, $\arctan$, $xe^{cx}$, rasjonale via $1/(1-x)$, sammensatte. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) gjenkjenn hvilken formelark-rekke som passer; (2) bygg ved substitusjon/derivasjon/integrasjon (ikke alle deriverte); (3) finn konvergensradius via argumentet; (4) sjekk begge endepunkter separat; (5) skriv konvergensområdet som intervall. Gjennomregnet «oppgave 5-case» (tre funksjoner) med sensor-margnotater (endepunkt ALLTID, bygg fra formelark). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** E, alle varianter. Mønstereksempel: «Finn potensrekker og konvergensområde for (a) $\ln(1+3x)$, (b) $x/(1-x^2)$, (c) $\arctan(2x)$.»
- **Typiske feil:** Endepunkt droppet; feil argumentsubstitusjon i radius; regner deriverte i stedet for formelark; integrasjonskonstant glemt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Differensiallikninger *(prioritet: PERFEKT — lineære ODE 100 %, potensrekkeløsning 92 %; bokas tyngdepunkt, bærer oppgave 7)*

#### Kapittel 7.1: Lineære ODE med konstante koeffisienter: homogen løsning

- **id:** `ma1102-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-4-1`
- **kapitteltype:** teori
- **description:** Den mest stabile oppgaven i hele arkivet (100 %): løs den homogene lineære ODE-en via karakteristisk polynom, med korrekt behandling av enkle, doble og komplekse røtter (dobbeltrot gir xe^{rx}; a±bi gir e^{ax}(A cos bx + B sin bx)).
- **Forkunnskaper (kryssbok):** Kap. 4.1 (komplekse røtter). Differensiallikninger fra [Differensiallikninger](/bok/s2/s2-5-1) (S2, hvis kapitlet finnes) og MA1101 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger F, **100 %** (homogen-delen). Fasitens grep: karakteristisk polynom, klassifiser røttene, skriv $y_h$. Prioritet: **perfekt** (bærebjelke). *(Verifiser S2-kapittel-id før lenking.)*
- **Innholdskontrakt:** **Lineær homogen ODE** $y''+py'+qy=0$ (og høyere orden); **karakteristisk polynom** $r^2+pr+q=0$; **tre tilfeller**: reelle ulike røtter ($Ae^{r_1x}+Be^{r_2x}$), **dobbeltrot** $r$ ($Ae^{rx}+Bxe^{rx}$), **komplekst par** $a\pm bi$ ($e^{ax}(A\cos bx+B\sin bx)$); høyere ordens (3.–4.) via samme karakteristiske likning (kobling til komplekse røtter, kap. 4.2); superposisjonsprinsippet. Alt til aktiv bruk.
- **Oppgavesjangre:** F (homogen). Mønstereksempel: «Løs den homogene likningen $y''-4y'+13y=0$.» (Røtter $2\pm3i$; $y=e^{2x}(A\cos3x+B\sin3x)$.)
- **Typiske feil:** Glemmer $xe^{rx}$-leddet ved dobbeltrot; feil oversettelse av $a\pm bi$ til $e^{ax}(\cos/\sin)$; regnefeil i karakteristisk polynom; feil fortegn.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 7.2: Partikulærløsning, resonans og initialbetingelser

- **id:** `ma1102-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-7-1`
- **kapitteltype:** teori
- **description:** Fullfør den lineære ODE-en: partikulærløsning via ansats etter høyresiden (polynom→polynom, e^{cx}→Ce^{cx}, sin/cos→C sin+D sin), resonans-korreksjonen (gang med x når c er rot), og initialbetingelser som bestemmer konstantene.
- **Forkunnskaper (kryssbok):** Kap. 7.1.
- **Eksamensbelegg:** Sjanger F, **100 %** (partikulær + initialbet.). Fasitens grep: ansats etter høyresiden, sjekk resonans, sett inn initialbetingelser. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Partikulærløsning via ubestemte koeffisienter**: høyresiden polynom → polynom av samme grad; $e^{cx}$ → $Ce^{cx}$; $\sin/\cos$ → $C\sin+D\cos$; **resonans** (multipliser ansatsen med $x^s$ når $c$ er rot i karakteristisk likning); **generell løsning** $y=y_h+y_p$; **initialbetingelser** $y(0),y'(0)$ bestemmer $A,B$. Alt til aktiv bruk (skriv ALLTID $y=y_h+y_p$).
- **Oppgavesjangre:** F. Mønstereksempel: «Løs $y''-4y'+5y=e^{2x}$ med $y(0)=0$, $y'(0)=2$.» (Homogen $e^{2x}(A\cos x+B\sin x)$; partikulær $Ce^{2x}$ gir $C=1$.)
- **Typiske feil:** Resonans oversett (ansats $Ce^{cx}$ når $c$ er rot — må gange med $x$); glemmer partikulærleddet; setter inn initialbetingelser før $y_h+y_p$ er samlet; feil ansats-grad for polynom.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 7.3: Drill: Lineær ODE med initialbetingelser (oppgave 7a)

- **id:** `ma1102-7-3` · **number:** 7.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-7-2`
- **kapitteltype:** drill
- **description:** Hele lineær-ODE-repertoaret drillet: karakteristisk polynom (alle tre rot-tilfeller), partikulærløsning med resonanssjekk, og innsetting av initialbetingelser — den 100 %-sikre oppgavedelen.
- **Eksamensbelegg:** Dekker sjanger F samlet (**100 %**). Variantkatalogen: reelle/doble/komplekse røtter, polynom-/eksponential-/trig-høyreside, resonans, 3.–4. orden. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) karakteristisk polynom, klassifiser røtter, skriv $y_h$; (2) ansats etter høyresiden; (3) sjekk resonans (gang med $x^s$); (4) sett inn i ODE-en, bestem koeffisientene i $y_p$; (5) samle $y=y_h+y_p$; (6) sett inn initialbetingelser. Gjennomregnet «oppgave 7a-case» med sensor-margnotater (resonanssjekk, $y_h+y_p$ før initialbet.). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** F, alle varianter. Mønstereksempel: «Løs $y''+y=\sin x$ med $y(0)=0$, $y'(0)=1$.» (Resonans: $y_p=x(A\cos x+B\sin x)$.)
- **Typiske feil:** Resonans oversett; dobbeltrot-ledd glemt; initialbet. satt inn for tidlig; feil ansats.
- **Quiz: 16 · Flashcards: 8**

#### Kapittel 7.4: 1. ordens ODE og Picard–Lindelöf (eksistens og entydighet)

- **id:** `ma1102-7-4` · **number:** 7.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma1102-2-1`
- **kapitteltype:** teori
- **description:** 1. ordens ODE (separable og lineære med integrerende faktor) som grunnlag for numerikk og rekkeløsning, og Picard–Lindelöf — teoremet som garanterer at initialverdiproblemet har entydig løsning (pensum, teoretisk ryggrad, ikke arkivbelagt som egen oppgave).
- **Forkunnskaper (kryssbok):** Kap. 2.1. Separable/lineære ODE fra [Differensiallikninger](/bok/s2/s2-5-1) (S2, hvis kapitlet finnes).
- **Eksamensbelegg:** Grunnlag for sjanger H (numerisk ODE) og G (rekkeløsning). **Picard–Lindelöf 0 %** i arkivet (pensum, dekk teoretisk, «ikke arkivbelagt»). Prioritet: **kjenne/kunne** (grunnlag + differensierende teori). *(Verifiser S2-kapittel-id før lenking.)*
- **Innholdskontrakt:** **1. ordens separabel** $y'=f(x)g(y)$ (skill variable, integrer); **1. ordens lineær** $y'+p(x)y=q(x)$ med **integrerende faktor** $\mu=e^{\int p\,dx}$; **initialverdiproblem**; **Picard–Lindelöf** (hvis $f(x,y)$ er kontinuerlig og Lipschitz i $y$, har IVP-et en entydig løsning lokalt — dekk som teori, «teoretisk ryggrad bak at initialverdiproblemene har entydig løsning; ingen arkivforekomst»). 1. orden til aktiv bruk; Picard–Lindelöf som teori.
- **Oppgavesjangre:** (grunnlag). Mønstereksempel: «Løs $y'+2y=e^{-x}$ med $y(0)=1$ via integrerende faktor.»
- **Typiske feil:** Glemmer integrasjonskonstanten; feil integrerende faktor; blander separabel og lineær metode; tror Picard–Lindelöf gir global (ikke bare lokal) løsning.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.5: Potensrekkeløsning av ODE: rekurrens og lukket form (oppgave 7b)

- **id:** `ma1102-7-5` · **number:** 7.5 · **estimatedMinutes:** 80 · **prerequisites:** `ma1102-6-1`
- **kapitteltype:** drill
- **description:** Nesten alltid siste oppgave (92 %): sett y=Σa_n x^n, deriver, sett inn, skift indeks til felles x^n, les av rekurrensrelasjonen, gjenkjenn mønsteret (ofte partall/oddetall-splitt) og skriv den lukkede formen — gjerne som en elementærfunksjon.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (potensrekker), 7.1 (ODE).
- **Eksamensbelegg:** Sjanger G, **92 %** (nesten alltid siste oppgave). Fasitens grep: indeksskift eksplisitt, rekurrens, mønster, lukket form. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) sett $y=\sum a_nx^n$, deriver ledd for ledd; (2) sett inn i ODE-en; (3) **skift indeks eksplisitt** så alle summer har $x^n$; (4) sett koeffisienten til hver $x^n$ lik 0 → **rekurrensrelasjon** $a_{n+2}=\dots$; (5) bruk $a_0,a_1$ fra initialbet.; (6) regn de første leddene, gjenkjenn mønster (partall/oddetall-splitt); (7) skriv lukket rekke, gjenkjenn elementærfunksjon; (8) konvergensradius via forholdstest på rekurrensen. Gjennomregnet «oppgave 7b-case» med sensor-margnotater (indeksskift eksplisitt, mønster begrunnet, elementærfunksjon gjenkjent). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** G, alle varianter. Mønstereksempel: «Finn potensrekkeløsningen $y=\sum a_nx^n$ av $y''-2xy'-2y=0$ med $a_0=1$, $a_1=0$, og gjenkjenn den som elementærfunksjon.» ($a_{n+2}=2a_n/(n+2)$; odde ledd null; $y=e^{x^2}$.)
- **Typiske feil:** Indeksskift-slurv (summene ikke justert til felles $x^n$); konstantledd ($n=0,1$) glemt; mønster ikke begrunnet; lukket form ikke gjenkjent; konvergensradius glemt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Numeriske metoder og utgåtte kalkulus-tema *(prioritet: KUNNE (numerikk, oppgave 6) / KJENNE (utgåtte tema))*

#### Kapittel 8.1: Numerisk løsning av 1. ordens ODE: Euler og forbedret Euler (oppgave 6)

- **id:** `ma1102-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-7-4`
- **kapitteltype:** teori
- **description:** Oppgave 6 i gjeldende epoke: iterér Eulers metode y_{n+1}=y_n+h·f(x_n,y_n) eller forbedret Euler (prediktor–korrektor) fra formelarket, med foreskrevet 4-desimalers presisjon — disiplinert utregning er poenget.
- **Forkunnskaper (kryssbok):** Kap. 7.4.
- **Eksamensbelegg:** Sjanger H, **77 %** (Euler for ODE fast i 2023-sett; Simpson/trapes forsvant). Fasitens grep: iterér formelen, hold 4 desimaler konsekvent. Prioritet: **kunne** (formelark-støttet).
- **Innholdskontrakt:** **Eulers metode** $y_{n+1}=y_n+h\,f(x_n,y_n)$ (formelark); **forbedret Euler / midpunkt** (prediktor–korrektor, formelark); **steglengde $h$**, iterasjon til ønsket $x$; **4-desimalers presisjon** (instruks — mellomresultater rundes); feilkilder (avrundingsfeil, forveksling Euler/forbedret Euler). Formelark-tenkning: formlene oppgis, treningen ligger i disiplinert utregning.
- **Oppgavesjangre:** H. Mønstereksempel: «La $y'=xy^2$ med $y(0)=1$. Bruk Eulers metode med $h=0{,}1$ til å approksimere $y$ i $x=0{,}1;\,0{,}2;\,0{,}3$ (4 desimaler).»
- **Typiske feil:** Inkonsekvent desimalbruk; forveksler Euler og forbedret Euler (midpunkts-korreksjonen); regnefeil under tidspress; feil steglengde.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: Newtons metode: iterasjon og konvergensbevis

- **id:** `ma1102-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-2-1`
- **kapitteltype:** teori
- **description:** Newtons metode x_{n+1}=x_n−f(x_n)/f'(x_n) (formelark) i to nivåer: den mekaniske iterasjonen (3 ganger, 4 desimaler) og den karakterhevende konvergensbeviset — vis via konveksitet at følgen er monoton og begrenset, altså konvergent mot roten.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (monoton+begrenset). Derivasjon fra [Derivasjon](/bok/r1/r1-3-1) (R1).
- **Eksamensbelegg:** Sjanger I, **62 %** (Newton-konvergensbeviset er den karakterhevende delen; v2023 hadde iterasjonen, kont2023 ikke). Ofte kjedet til eksistens/entydighet (skjæring + monotoni). Fasitens grep: iterér; ved bevis, vis monoton+begrenset. Prioritet: **kunne**, bevis differensierende.
- **Innholdskontrakt:** **Newtons metode** $x_{n+1}=x_n-f(x_n)/f'(x_n)$ (formelark), iterér typisk 3 ganger, 4 desimaler; **eksistens/entydighet av rot** (skjæringssetningen for eksistens + strengt monotoni for entydighet); **konvergensbevis** (via konveksitet/sekantsetning: følgen monoton og begrenset ⇒ konvergent, grensen tilfredsstiller $f(y)=0$). Formelen oppgis; iterasjon + bevis til aktiv bruk.
- **Oppgavesjangre:** I. Mønstereksempel: «Vis at $f(x)=2x-\cos x$ har nøyaktig én rot, og utfør tre Newton-iterasjoner fra $x_0=0$.»
- **Typiske feil:** Newton uten konvergensbegrunnelse når beviset kreves; mangler monoton+begrenset-argumentet eller kontinuitetssteget i grenseovergangen; desimalslurv; glemmer eksistens/entydighets-oppsettet.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 8.3: Appendiks: Utgåtte kalkulus-tema (kjeglesnitt, parametriske kurver, numerisk integrasjon)

- **id:** `ma1102-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori (appendiks/referanse)
- **description:** Kort referanse til «kalkulus-epokens» tema som har null forekomst etter 2022 og ikke nevnes i gjeldende emnebeskrivelse: kjeglesnitt, parametriske kurver (fart/akselerasjon/buelengde) og numerisk integrasjon (Simpson/trapes). Kjenne-nivå, uten eksamenstrening.
- **Forkunnskaper (kryssbok):** ingen (selvstendig referanse).
- **Eksamensbelegg:** Sjangre fra kalkulus-epoken, **0 % i 2023–2024** (kjeglesnitt 62 %, parametriske kurver 46 %, numerisk integrasjon i eldre sett — alle **borte etter 2022**). Prioritet: **kjenne** (referanse; trening gjeninnføres kun hvis nye sett viser at de er tilbake — `verifiser`).
- **Innholdskontrakt:** **Kjeglesnitt** (ellipse/parabel/hyperbel fra brennpunkt/styrelinje/eksentrisitet; identifisering via diskriminanten $b^2-4ac$) — kort; **parametriske kurver** (hastighetsvektor, fart, akselerasjon, buelengde $\int\sqrt{x'^2+y'^2}\,dt$) — kort; **numerisk integrasjon** (Simpsons/trapesmetode med feilestimat via maks $|f^{(4)}|$) — kort. Alt merket «utgått av 2023-formen; behandles som referanse, ikke eksamenstrening; **gjeninnfør trening kun hvis nye sett viser at de er tilbake (verifiser)**».
- **Oppgavesjangre:** ingen eksamenstrening; 2–3 orienteringsoppgaver merket «historisk/referanse».
- **Typiske feil:** (referansekapittel — ingen egen feilkatalog; nevn kort at disse temaene IKKE lenger testes, så studenten ikke sløser tid).
- **Quiz: 10 · Flashcards: 14**

**Prøve-kvote Del 8:** ingen egne temaprøver for det utgåtte stoffet (8.3); numerikk-kapitlene (8.1–8.2) dekkes av 4 numerikk-prøver (spesifisert i §4).

---

### Del 9 — Eksamenstrening, bevis og øvingseksamener *(prioritet: alle sjangre samlet; føring + bevis + hele eksamensformen)*

#### Kapittel 9.1: Føringsstandarden og utenat-banken (kode D)

- **id:** `ma1102-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1102-0-1`
- **kapitteltype:** eksamenstrening (føring)
- **description:** Sensorens fulle kravliste samlet: begrunn alt (unntatt sann/usann), navngi testen/teoremet, før uniform konvergens med sup, sjekk endepunkter, utled rekurrensen fullstendig, bruk foreskrevet presisjon — pluss utenat-banken over alt kode D ikke gir på formelark.
- **Forkunnskaper (kryssbok):** Kap. 0.1 og alle temadeler.
- **Eksamensbelegg:** Metakapittel — destillerer sensorkravene (§4 i analysen) og karakterskillene. Prioritet: alle.
- **Innholdskontrakt:** **Føringsstandarden** (A-besvarelse): begrunn alle svar unntatt sann/usann; navngi testen/teoremet (forholds-/rot-/sammenlignings-/alternerende-test, skjæringssetning, sekant-/MVT, Weierstrass' M-test, Abels teorem, Heine–Borel/kompletthet); uniform konvergens med sup; endepunktsjekk; fullstendig rekurrensutledning; foreskrevet presisjon; alternative løsninger honoreres; definisjoner der de etterspørres (Cauchy fra ε–N, topologi fra definisjon). **Utenat-banken** (kode D, IKKE på formelark): alle konvergenstester ved navn, topologifakta (Heine–Borel, tellbarhet, urbilder), de Moivre-røtter-formelen, sup-metoden, ODE-metodene (karakteristisk polynom, resonans, rekurrens), Cauchy-/nøstede-intervall-malen. **Karakterskillene** (bestått/midt/topp fra §4). Formelark-innholdet listes (så studenten vet hva som IKKE må pugges).
- **Oppgavesjangre:** 4–6 «førings-diagnose»-oppgaver: gitt en halvferdig besvarelse, finn de manglende føringsstegene (navngi test, endepunkt, sup, rekurrens).
- **Typiske feil:** (samlet feilkatalog fra §5): uniform «vist» punktvis, endepunkt droppet, dobbel/kompleks rot feil, resonans oversett, indeksskift-slurv, betinget/absolutt forvekslet, topologi-sann/usann-feil, Newton uten konvergensbevis, de Moivre-slurv, numerikk-avrunding, test/teorem ikke navngitt.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 9.2: Bevis-drill: Cauchy, nøstede intervaller, Newton-konvergens, M-test, Abel

- **id:** `ma1102-9-2` · **number:** 9.2 · **estimatedMinutes:** 85 · **prerequisites:** `ma1102-2-2`
- **kapitteltype:** drill (bevis)
- **description:** Bevis-sjangeren som selvstendig karakterskiller: de fem bevistypene arkivet belegger — Cauchy/nøstede intervaller (J), Newton-konvergens (I), kontinuitet via Weierstrass M-test (K), konvergens via delvis summasjon (L), og eksistens/entydighet via skjæring+monotoni — hver ført komplett med forutsetningene sjekket.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 2.3, 3.4, 5.4, 8.2.
- **Eksamensbelegg:** Samler sjanger J/I/K/L og eksistens-/entydighetsbevis (**46 %**, ofte kjedet til Newton). Prioritet: **kunne** (toppkarakterskiller).
- **Innholdskontrakt:** Løsningsoppskrift per bevistype: (1) skriv definisjonen (Cauchy ε–N, topologi, kontinuitet); (2) sjekk forutsetningene eksplisitt; (3) navngi teoremet som bærer argumentet; (4) skill «⇒»/«⇔»; (5) verbal konklusjon. Gjennomregnede bevis-caser (én per type) med sensor-margnotater (forutsetningssjekk, navngivning). 12–15 bevisoppgaver på eksamensnivå over J/I/K/L + eksistens/entydighet.
- **Oppgavesjangre:** J/I/K/L + eksistens/entydighet, alle varianter. Mønstereksempel: «Vis at $f(x)=x^3+x-1$ har nøyaktig ett nullpunkt (skjæring + monotoni), og at Newton-følgen fra $x_0=1$ konvergerer mot det.»
- **Typiske feil:** Forutsetning ikke sjekket; teorem ikke navngitt; «⇒» og «⇔» blandet; Newton-konvergens uten monoton+begrenset; M-test med $x$-avhengig $M_n$; Abel uten begrenset delsum.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 9.3: Øvingseksamen 1 — den faste 2023–2024-formen (7 likt vektede oppgaver)

- **id:** `ma1102-9-3` · **number:** 9.3 · **estimatedMinutes:** 120 · **prerequisites:** `ma1102-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler den faste 2023–2024-formen: 7 likt vektede oppgaver (sann/usann-topologi, rekker, komplekse røtter, uniform konvergens, potensrekker, Euler, lineær ODE + rekkeløsning), 4 timer, kode D med formelark, med løsningsforslag som A-besvarelse.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler den dokumenterte 2023–2024-malen (nyskrevne oppgaver i arkivets sjangre). Prioritet: alle.
- **Innholdskontrakt:** 7 likt vektede oppgaver: **O1** 10 sann/usann topologi/følger/kontinuitet (A); **O2** vis konvergens + klassifiser 3 rekker (B); **O3** komplekse røtter $z^n=w$ (C); **O4** uniform konvergens på $[0,1]$ (D); **O5** potensrekker + konvergensområde, 3 funksjoner (E); **O6** Euler/forbedret Euler, 4 desimaler (H); **O7** lineær ODE + initialbet. (F) + potensrekkeløsning (G). Løsningsforslag i eget `collapsible` per oppgave, A-besvarelse med `tip`-notat om vekting.
- **Oppgavesjangre:** A–H kjedet i eksamensform.
- **Typiske feil:** (henvis til de enkelte drillkapitlenes feilkatalog).
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 9.4: Øvingseksamen 2 — variantform med Newton og M-test (7 likt vektede oppgaver)

- **id:** `ma1102-9-4` · **number:** 9.4 · **estimatedMinutes:** 120 · **prerequisites:** `ma1102-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Andre komplette øvingseksamen som dekker restsjangrene: samme faste form, men med Newtons metode med konvergensbevis (oppgave 6), Weierstrass M-test / kontinuitet av rekkesum, og Abels delvise summasjon — de differensierende sjangrene.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler malen med de differensierende sjangrene (I/K/L) inkludert. Prioritet: alle.
- **Innholdskontrakt:** 7 likt vektede oppgaver: **O1** sann/usann + Cauchy-bevis (A/J); **O2** rekker + delvis summasjon (B/L); **O3** komplekse røtter, sammensatt grad (C); **O4** uniform konvergens + M-test/kontinuitet (D/K); **O5** potensrekker (E); **O6** Newtons metode med konvergensbevis (I); **O7** lineær ODE (F) + potensrekkeløsning som elementærfunksjon (G). Løsningsforslag i eget `collapsible` per oppgave, A-besvarelse med `tip`-notat om vekting.
- **Oppgavesjangre:** A–L kjedet, med vekt på de differensierende (I/K/L/J).
- **Typiske feil:** (henvis til drillkapitlenes + bevis-drillens feilkatalog).
- **Quiz: 12 · Flashcards: 6**

**Prøve-kvote Del 9:** ingen egne temaprøver — øvingseksamenene (9.3–9.4) er delens prøver.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (9.1): full begrunnelse (unntatt sann/usann), navngitte
tester/teoremer, uniform konvergens med sup, endepunktsjekk, fullstendig
rekurrensutledning, poengfordeling. Legges som prøvekapitler (`ma1102-<del>-prove`,
chapterNumber `<del>.P`) etter plattformens mønster.

**Del 1 — Reelle tall, kompletthet og grunnleggende topologi**
1. Prøve 1.A (35 min): Supremum/infimum + kompletthetsaksiomet — sup ≠ maks, √2 i ℝ (kap. 1.1, sjanger J).
2. Prøve 1.B (35 min): Åpen/lukket/kompakt — Heine–Borel + union/snitt-oppførsel (kap. 1.2, sjanger A + J).
3. Prøve 1.C (35 min): Tellbarhet + urbildregler + kontinuitet bevarer kompakthet (kap. 1.3, sjanger A).
4. Prøve 1.D (40 min): 10-punkts sann/usann-batteri — topologi/følger/kontinuitet, oppgave-1-form (kap. 1.1–1.4, sjanger A).

**Del 2 — Følger, kompletthet og Cauchyfølger**
1. Prøve 2.A (35 min): ε–N-grensebevis + monoton+begrenset (kap. 2.1, sjanger J).
2. Prøve 2.B (40 min): Cauchy-bevis fra definisjonen + kontraksjonskriterium (kap. 2.2, sjanger J).
3. Prøve 2.C (40 min): Nøstede lukkede intervaller — ett felles punkt + Cauchy (kap. 2.2–2.3, sjanger J).
4. Prøve 2.D (40 min): Følge-/Cauchy-simulering — grensebevis + kontraksjon + nøstet kjedet (kap. 2.1–2.3, sjanger J).

**Del 3 — Rekker: konvergens, tester og klassifisering**
1. Prøve 3.A (35 min): Vis konvergens med navngitt test (teleskop/sammenligning/forholds-/rottest) (kap. 3.1, sjanger B).
2. Prøve 3.B (40 min): Klassifiser 3 rekker — divergent/betinget/absolutt (kap. 3.2, sjanger B).
3. Prøve 3.C (40 min): Delvis summasjon (Abel) + Abels teorem (kap. 3.4, sjanger L).
4. Prøve 3.D (40 min): Rekke-simulering — vis konvergens + klassifiser 3, oppgave-2-form (kap. 3.1–3.3, sjanger B).

**Del 4 — Komplekse tall og røtter**
1. Prøve 4.A (35 min): Kartesisk↔polar + Eulers formel + potens (kap. 4.1, sjanger C).
2. Prøve 4.B (40 min): $z^n=w$ — alle n røtter, jevnt fordelt (kap. 4.2, sjanger C).
3. Prøve 4.C (40 min): Sammensatt grad ($z^6+z^3+1$) med substitusjon (kap. 4.2–4.3, sjanger C).
4. Prøve 4.D (40 min): Kompleks-røtter-simulering — $z^n=w$ + sammensatt grad + Arganddiagram, oppgave-3-form (kap. 4.1–4.3, sjanger C).

**Del 5 — Funksjonsfølger, uniform konvergens og Weierstrass**
1. Prøve 5.A (35 min): Punktvis grense + sup|f_n−f| via toppunkt (kap. 5.1, sjanger D).
2. Prøve 5.B (40 min): Uniform konvergens med diskontinuerlig-grense-motfelle (kap. 5.1–5.3, sjanger D).
3. Prøve 5.C (40 min): Weierstrass M-test — kontinuitet av rekkesum (kap. 5.4, sjanger K).
4. Prøve 5.D (40 min): Uniform-simulering — sup-metoden + M-test kjedet, oppgave-4-form (kap. 5.1–5.4, sjanger D + K).

**Del 6 — Potensrekker og Taylorrekker**
1. Prøve 6.A (35 min): Konvergensradius + eksplisitt endepunktanalyse (kap. 6.1, sjanger E).
2. Prøve 6.B (40 min): Bygg Maclaurinrekke fra formelark ($\ln$, $\arctan$, $xe^{cx}$) (kap. 6.2, sjanger E).
3. Prøve 6.C (40 min): Potensrekke + konvergensområde for sammensatt funksjon (kap. 6.2–6.3, sjanger E).
4. Prøve 6.D (40 min): Potensrekke-simulering — 3 funksjoner + endepunkt, oppgave-5-form (kap. 6.1–6.3, sjanger E).

**Del 7 — Differensiallikninger**
1. Prøve 7.A (35 min): Homogen lineær ODE — alle tre rot-tilfeller (kap. 7.1, sjanger F).
2. Prøve 7.B (40 min): Partikulær + resonans + initialbetingelser (kap. 7.2–7.3, sjanger F).
3. Prøve 7.C (40 min): 1. ordens ODE (integrerende faktor) + Picard–Lindelöf-teori (kap. 7.4, sjanger F).
4. Prøve 7.D (45 min): Potensrekkeløsning — rekurrens + lukket form/elementærfunksjon, oppgave-7-form (kap. 7.5, sjanger G).

**Del 8 — Numeriske metoder**
1. Prøve 8.A (35 min): Eulers metode — 4 desimaler, foreskrevet presisjon (kap. 8.1, sjanger H).
2. Prøve 8.B (40 min): Forbedret Euler (prediktor–korrektor) (kap. 8.1, sjanger H).
3. Prøve 8.C (40 min): Newton-iterasjon + eksistens/entydighet av rot (kap. 8.2, sjanger I).
4. Prøve 8.D (45 min): Newton-konvergensbevis (monoton+begrenset) kjedet med iterasjon (kap. 8.2, sjanger I).

### Øvingseksamener (2 komplette sett — se kap. 9.3–9.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.3) | Den faste 2023–2024-formen (primær) | A(O1) + B(O2) + C(O3) + D(O4) + E(O5) + H(O6) + F/G(O7) |
| Øvingseksamen 2 (kap. 9.4) | Samme form, differensierende sjangre | A/J(O1) + B/L(O2) + C(O3) + D/K(O4) + E(O5) + I(O6) + F/G(O7) |

Til sammen dekker de to settene samtlige eksamenssjangre A–L minst én gang, og
trener både kjernesjangrene (A–H, garantert) og de differensierende (I/J/K/L,
karakterhevende). Bevis-drillen (9.2) supplerer med rene bevisøvinger.

---

## 5. Kvotesammendrag (AUTORITATIV — quiz ≥500 OG flashcards ≥500)

Denne tabellen er **fasit** for alle senere faser (bygging, verifisering,
sluttsveip). Per-kapittel-kvotene i §3 summerer hit. Flashcards genereres KUN fra
toppnivå `definition`-blokker med `title`; drillkapitler bidrar derfor færre
flashcards enn teorikapitler.

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 — Eksamenskart | 0.1 | 10 | 14 |
| 1 — Reelle tall/kompletthet/topologi | 1.1–1.4 | 72 | 88 |
| 2 — Følger/Cauchy | 2.1–2.3 | 52 | 60 |
| 3 — Rekker | 3.1–3.4 | 68 | 78 |
| 4 — Komplekse tall/røtter | 4.1–4.3 | 52 | 58 |
| 5 — Funksjonsfølger/uniform konvergens | 5.1–5.4 | 68 | 78 |
| 6 — Potensrekker/Taylor | 6.1–6.3 | 54 | 58 |
| 7 — Differensiallikninger | 7.1–7.5 | 84 | 88 |
| 8 — Numerikk/utgåtte tema | 8.1–8.3 | 44 | 56 |
| 9 — Eksamenstrening/bevis/øvingseks. | 9.1–9.4 | 56 | 44 |
| **SUM** | **34 kapitler** | **560** | **622** |

**Kvote-begrunnelse (jf. PRODUKSJONSLOYPE «≥500 er et gulv»):** MA1102 er et
**definisjons- og teoremrikt analyse-/bevisfag** under **kode D** (formelark dekker
bare Maclaurinrekker, numeriske formler og Eulers formel — resten pugges).
Flashcard-tettheten (622) er derfor bevisst høy: hver konvergenstest, hvert
topologifakta (Heine–Borel, tellbarhet, urbilder), de Moivre-røtter-formelen,
sup-metoden, ODE-metodene og Cauchy-/bevis-malene må sitte utenat og fortjener
egne kort. Quiz-summen (560) reflekterer bredden (fem selvstendige søyler testet i
hvert sett) med tettest drill på de fem 92–100 %-bærebjelkene (Del 3, 5, 6, 7).
De 32 prøvene (4 per temadel 1–8) + 2 øvingseksamener dekker CLAUDE.md-kravet «≥4
prøver per tema».

**Prøve-kvote totalt:** 32 temaprøver (4 × Del 1–8) + 2 komplette øvingseksamener
(9.3–9.4) = 34 vurderingsenheter. Del 0 og 9 har ingen egne temaprøver
(metakapittel / øvingseksamenene ER delens prøver).

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Fem søyler, den faste formen, alt begrunnes** — eksamensformen (4 t, 7 likt
   vektede oppgaver, kode D + formelark), den faste 2023–2024-dramaturgien, og
   hovedfunnet: de fem søylene (lineære ODE, potensrekkeløsning, potensrekker
   konv.radius, uniform konvergens, rekkekonvergens) bærer 92–100 % av settene (fra
   kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 3 rekker, Del 4 komplekse røtter, Del 5 uniform konvergens, Del 6
   potensrekker, Del 7 ODE), kunne (Del 1 topologi, Del 2 Cauchy, Del 8 numerikk),
   kjenne (Del 3.4 Abel, Del 5.4 M-test/approksimasjon, Del 7.4 Picard–Lindelöf, Del
   8.3 utgåtte kalkulus-tema) — med notatet om at pensumskiftet 2022→2023 gjør
   topologi-blokken (oppgave 1) til en ny, karakterskillende del.
3. **Sjangerguiden** — A–L med løsningsoppskriftene fra drillkapitlene (1.4, 2.3,
   3.3, 4.3, 5.3, 6.3, 7.3, 7.5, 9.2) i kortform.
4. **Sensorreglene** — «begrunn alt (unntatt sann/usann); navngi testen/teoremet»,
   uniform konvergens med sup, endepunkt ALLTID, fullstendig rekurrensutledning,
   foreskrevet presisjon, alternative løsninger honoreres, definisjoner der de
   etterspørres (fra kap. 9.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (uniform «vist»
   punktvis, endepunkt droppet, dobbel/kompleks rot feil, resonans oversett,
   indeksskift-slurv, betinget/absolutt forvekslet, topologi-sann/usann-feil, Newton
   uten konvergensbevis, de Moivre-slurv, numerikk-avrunding, test/teorem ikke
   navngitt), hver med henvisning til kapitlet som forebygger den.
6. **Definisjons- og teoremliste i emnets notasjon** — apparatet fra
   innholdskontraktene (sup/inf + kompletthet, Heine–Borel + tellbarhet + urbilder,
   Cauchy-definisjonen, konvergenstestene, de Moivre + $n$-te røtter, uniform
   konvergens via sup + Weierstrass' M-test/approksimasjon, potensrekker +
   endepunkt, karakteristisk polynom + resonans + rekurrens, Picard–Lindelöf, Euler/
   Newton-formlene) — med markering av hva som ER på formelarket (skal ikke pugges).

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ma1102` med alle 34 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («7.5», ALDRI
   lineær «28») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser i
   innholdet bruker samme del-baserte form («kap. 7.5»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L og frekvenstallene som resten
   refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (reelle tall/topologi — 1.1 er
   avhengighetsnav for følger/Cauchy) → Del 2 (følger/Cauchy — 2.1 er nav for rekker,
   uniform konvergens, Newton) → Del 3 (rekker — 3.1 er nav for potensrekker).
4. **Selvstendige søyler**: Del 4 (komplekse tall — 4.1 er nav for ODE-røtter) kan
   bygges parallelt tidlig.
5. **Tyngdepunktsdelene**: Del 5 (uniform konvergens — krever 2.1, 3.1) → Del 6
   (potensrekker — krever 3.1, 3.2) → **Del 7 (ODE — bokas største, 5 kap.; krever
   4.1, 6.1, 7.1-kjeden)**. Hold hele Del 7 hos én agent (tyngdepunkt), flagg for
   konsistenssjekk; karakteristisk-polynom-notasjonen og resonans-warningen skal være
   identisk formulert i 7.1–7.3.
6. **Numerikk + appendiks**: Del 8 (krever 7.4 for numerisk ODE; 8.3 er selvstendig
   appendiks).
7. **Del 9** til slutt (føringsstandard + bevis-drill + de 2 øvingseksamenene
   gjenbruker alt og må dekke A–L + hele eksamensformen). Temaprøvene (§4) legges som
   prøvekapitler (`ma1102-<del>-prove`, chapterNumber `<del>.P`), én per temadel 1–8
   (32 stk).
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Batching (fase 4)

Én agent per hel del. **Del 7 (5 kap., tyngdepunktet)** og **Del 5 (4 kap.,
uniform konvergens)** flagges for konsistenssjekk — notasjonen (sup-metoden,
karakteristisk polynom, resonans, rekurrens) skal være identisk på tvers av
kapitlene. Øvingseksamen-agenten (9.3–9.4) leser HELE skjelettet. Verifiser
kryssbok-lenker (R2/S2/R1-kapittel-id-er) mot faktisk eksisterende kapitler før
lenking; ubygde MA1101-referanser skrives som klartekst med aktiveringsmarkør.

### Kjente forbehold (verifiser)

- **Gjeldende emnekode/-form** bygger på 2023–2024-arkivet + emnebeskrivelsen;
  verifiser mot første 2025+-sett før endelig kalibrering (topologi/M-test/Abel/
  Picard–Lindelöf-fordelingen kan justere seg).
- **R2/S2-kapittel-id-er** for komplekse tall og differensiallikninger må verifiseres
  mot faktisk eksisterende kapitler før lenking (merket `(verifiser)` i §3).
- **Utgåtte kalkulus-tema (8.3)**: gjeninnfør eksamenstrening kun hvis nye sett viser
  at kjeglesnitt/parametriske kurver/Simpson er tilbake.
