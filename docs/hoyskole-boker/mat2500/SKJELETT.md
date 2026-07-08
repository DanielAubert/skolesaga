# Bokskjelett: MAT2500 Geometri (UiO) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (UiOs MAT2500-arkiv: de seks ordinære skoleeksamenene **H2015–H2020**, 6
> oppgavesett, 25 hovedoppgaver — **ingen løsningsforslag eller sensorveiledninger**).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — men med en **avgjørende
> blandingsprofil**: der MAT2200 er rent bevistungt og MAT1120 rent regne-/
> vedleggsdrevet, er MAT2500 en **blanding av fire modi — regne, bevise, tegne
> figur og konstruere med linjal**. Boka drilles på alle fire; «løsningen» i et
> eksempel kan være et konkret uttrykk, et begrunnet argument, en korrekt figur
> eller en linjal-konstruksjon — avhengig av oppgaveverbet. Format-forbilder:
> `../mat2200/SKJELETT.md` (UiO-matte, bevis, v3) og `../mat1120/SKJELETT.md`
> (UiO lineær algebra/geometri, v3).
>
> **KRITISK EVIDENSFORBEHOLD (gjelder hele boka):** Arkivet har **6 sett og INGEN
> fasit/sensorveiledning**. Alle sensorkrav (§4), typiske feil (§5) og
> karakterskiller er **utledet av oppgaveformuleringene og fagets natur**, ikke
> lest ut av en fasit slik som i MAT2200/MAT1120. **Alle slike utledede påstander
> merkes `(verifiser)`** i innholdskontraktene, og kap. 0.1 sier eksplisitt fra
> om det tynne grunnlaget. **Pensumbok er ikke oppgitt** på UiOs emneside (emnet
> er tradisjonelt basert på kompendium/forelesningsnotater) — notasjonen under er
> lest ut av oppgavesettene og standard geometripensum; hvilken konkret
> lærebok/kompendium som brukes er `(verifiser)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat2500` |
| Tittel | **MAT2500 Geometri** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag (**blandingsprofil**: regne + bevise + tegne + konstruere — klassisk, analytisk og projektiv geometri) |
| Antall kapitler | **34** (3 eksamenskart/håndverk + 26 tema/drill + 1 sjangerkonsolidering + 3 øvingseksamener) + 28 prøvekapitler |
| Estimert totaltid | **~1 930 min ≈ 32 timer** |
| Quiz totalt | **534** (krav ≥500) |
| Flashcards totalt | **600** (krav ≥500; sikt 580–620 for et bredt, teorem- og begrepsrikt geometrifag) |

**Pitch (ett avsnitt):** MAT2500 er UiOs bachelor-emne i geometri — det binder
sammen euklidske isometrier, klassisk plangeometri, kjeglesnitt (analytisk *og*
projektivt), projektiv koordinatgeometri og romlig polyeder-/gruppegeometri, med
lineær algebra og analytisk geometri som verktøykasse. To trekk styrer hele
bokdesignet. **(1) Formatet er stabilt, men sjangeren er blandet:** 4 timers
skriftlig skoleeksamen, **normalt ingen hjelpemidler** (unntak: korona-
hjemmeeksamen H2020, «alle hjelpemidler»), karakter A–F, **norsk bokmål**, med
én obligatorisk **prosjektoppgave** som må godkjennes for å gå opp. Hvert sett
har 3–5 oppgaver med deloppgaver a–e, «alle deloppgaver teller like mye» er
normalen, og samme sett veksler mellom «regn ut» (et skjæringspunkt, en
sirkellikning, et geometrisk sted), «vis/begrunn» (konkurrens, tangens,
harmonisk konjugasjon) og «tegn/konstruer» (en symmetrisk figur, et harmonisk
konjugat med linjal). Fordi det normalt ikke er hjelpemidler, er tallene «pene»
og svarene eksakte (`√`, brøk, `π`). **(2) To maskiner er praktisk talt
garantert hvert år, og temaprofilen roterer rundt dem.** Hvert eneste sett åpner
med en **isometri-oppgave** (sett sammen speilinger → klassifiser
rotasjon/translasjon/glidespeiling → tegn og beskriv en symmetrigruppe) — nesten
alltid Oppgave 1 — og hvert sett har en **projektiv koordinat-oppgave**
(homogene koordinater, kryssprodukt for skjæring/forbindelseslinje, kjeglesnitt).
Disse to bærer ~halve eksamenen og må drilles til refleks. Resten roterer mellom
to **epoker**: **2015–2017** vektlegger klassisk plangeometri (Ceva/Menelaos,
sirkler & tangenter) og analytiske kjeglesnitt med geometriske steder (locus);
**2018–2020** dreier mot polyedre/romlige rotasjonsgrupper (Platonske legemer,
Eulers formel) og projektiv dualitet (kryssforhold, harmonisk konjugasjon,
pol/polar). Boka dekker **begge epoker fullt** — det er ingen garanti for hvilken
profil neste sett følger. Emnet hviler på **seks regnemaskiner** som hver får
egen theorem-blokk og drill: (i) isometri-klassifikasjon via speilings-
sammensetning, (ii) projektiv kryssprodukt-regning, (iii) kjeglesnitt
analytisk↔projektivt (locus/tangent ↔ klassifikasjon/degenerasjon), (iv)
Ceva/Menelaos-konkurrens, (v) polyeder/Eulers formel + rotasjonsgruppe, (vi)
kryssforhold/harmonisk/pol–polar. Sensorregelen som utledes av oppgaveverbene:
**riktig svar OG begrunnelse; klassifikasjonen navngis presist med alle data
(sentrum + vinkel; linje + vektor); teoremet navngis (Ceva, Menelaos, Eulers
formel); figuren teller når den er bedt om; alle parametertilfeller dekkes; svar
eksakte.**

### 1.5 Kritiske stil-, notasjons- og føringsregler (gjelder HELE boka)

1. **Fire modi — regne, bevise, tegne, konstruere — les oppgaveverbet.** Dette er
   MAT2500s definerende kalibrering. «Finn …» krever et konkret svar (likning,
   koordinatsett, vinkel); «Vis at …/Begrunn/Forklar hvorfor …» krever et
   argument; «Tegn …» krever en korrekt, forklarende figur; «Konstruer …» krever
   en passer-/linjal-prosedyre. En regnedel uten svar og en «vis at»-del uten
   argument gir begge lite. Hvert eksempel og hver oppgaveløsning skrives i den
   modusen verbet krever, og **føringsstandarden i kap. 0.2** gjør de fire modiene
   eksplisitte. `(verifiser)` — modus-vektingen er lest av oppgaveverbene, ikke av
   fasit.
2. **Klassifikasjon navngis presist med ALLE definerende data.** «Vis at
   sammensetningen er en rotasjon» krever både at typen identifiseres (rotasjon,
   ikke bare «en isometri») OG at dataene oppgis: rotasjon → sentrum + vinkel;
   glidespeiling → linje + vektor; translasjon → vektor. For kjeglesnitt:
   ellipse/hyperbel/parabel/degenerert med begrunnelse. Et ubestemt «det er en
   isometri»/«et kjeglesnitt» gir lite. `(verifiser)`.
3. **Figur er en del av svaret.** Der oppgaven ber om figur («Tegn G og beskriv
   symmetriene», «Tegn parabelen og sirkelen», «skisser området i (a,b)-planet»),
   teller figuren. Hvert teorikapittel har derfor en **figurtegnings-forpliktelse**:
   minst ett eksempel og én oppgave der en korrekt, forklarende figur er selve
   svaret (ikke pynt), med tekstlig figurbeskrivelse i løsningen slik en
   håndtegnet A-besvarelse ville sett ut (akser, merkede punkter/linjer, vinkler,
   symmetriakser). Konstruksjonshåndverket (passer/linjal) samles i kap. 0.3 og
   trenes der sjangeren krever det (harmonisk konjugat, kap. 3.2).
4. **Emnets notasjon er bokstandard** (lest av oppgavesettene, standard
   geometripensum): euklidsk plan/rom $E^2$, $E^3$; projektivt plan $\mathbb{RP}^2$
   (skrives også $P^2$); **homogene koordinater** $(x_0:x_1:x_2)$ (opp til skalering);
   speiling $s_\ell$ om linje $\ell$; rotasjon $\rho$, $\rho_\theta$ (sentrum +
   vinkel); translasjon $t_a$ (vektor $a$); glidespeiling; sammensetning $\circ$
   (leses høyre-til-venstre); trekant $\triangle ABC$; cevianer $AD, BE, CF$;
   **kryssforhold** $(A,B;C,D)$ (harmonisk når $=-1$); **Eulers formel**
   $V-E+F=2$; symmetrigrupper diedral $D_n$ og syklisk $C_n$; kjeglesnitt som
   kvadratisk form $\sum a_{ij}x_ix_j=0$ med symmetrisk matrise; linja i det
   uendelige ($x_0=0$ ved innleiring $(x,y)\mapsto(1:x:y)$ — **hold én innleirings-
   konvensjon konsekvent gjennom hele boka**, og oppgi den eksplisitt i kap. 2.1).
5. **Eksakte, «pene» tall og små konfigurasjoner.** Fordi eksamen normalt er
   hjelpemiddelfri brukes enkle linjer ($x=1$, $y=x$, $y=-x$, $x+y=0$), enkle
   kjeglesnitt ($y^2=8x$, $x^2+y^2=R^2$) og små heltallskoordinater i det
   projektive planet. Alle svar eksakte (brøk, $\sqrt{}$, $\pi$); en desimal-
   tilnærming signaliserer regnefeil. Alle tall/figurer i boka er **nyskrevne** —
   skjelettets mønstereksempler er selv omskrivninger og skal varieres videre.
6. **Teoremene navngis når de bærer argumentet:** **Cevas setning** (konkurrens,
   produkt av delforhold $=1$), **Menelaos' setning** (kollinearitet, produkt
   $=-1$ med fortegn), **Eulers polyederformel** ($V-E+F=2$),
   **speilingssammensetnings-teoremet** (to speilinger = rotasjon/translasjon),
   **gjensidighetsprinsippet for pol/polar**, **kryssforhold som projektiv
   invariant**. Sensor forventer (utledet) at studenten peker på teoremet, med
   riktig fortegn (Menelaos $-1$, Ceva $+1$) og korrekt syklisk oppsett av
   delforholdene. `(verifiser)`.
7. **Parametertilfeller skilles fullstendig.** «For hvilke verdier av $a$ …»
   krever at **alle** tilfeller dekkes (ellipse/hyperbel/parabel/degenerert), ikke
   bare det generiske, og at grensetilfellet ($k\to0$, $k\to\infty$, degenerasjon
   når determinanten $=0$) behandles eksplisitt. Locus-svar skal ha parameteren
   **eliminert** (ikke la $k$ stå igjen), med grensepunktene diskutert.
8. **Ærlighet om format og arkiv (kap. 0.1 og hvert kapittels Eksamensvinkel).**
   (a) Primærmålet er den **hjelpemiddelfrie, eksakte** 4-timers skoleeksamenen
   (H2015–H2019); korona-H2020 var «alle hjelpemidler» men **samme oppgavetyper**
   — boka trener utenat-produksjonen som normalform. (b) Frekvenser bygger på
   **kun 6 sett uten fasit** — de er retningsgivende, ikke robuste; epokeskiftet
   ~2018 er en observasjon på tynt grunnlag. (c) Nyere sett (etter H2020) og en
   eventuell sensorveiledning bør reverifiseres — kap. 0.1 ber studenten sjekke
   formatet på siste tilgjengelige sett. Alt utledet merkes `(verifiser)`.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), ikke frekvens — frekvensen
styrer i stedet **omfanget**: de to garanterte maskinene (isometrier, projektiv
koordinatgeometri) og kjeglesnitt får teori + eget drillkapittel; sen-epokens
skille-stoff (kryssforhold/pol–polar) og de roterende slotene (klassisk
plangeometri, polyedre) får solid, men mer kompakt dekning. Euklidske isometrier
er inngangen (grunnspråket + garantert Oppgave 1); projektiv koordinatgeometri er
den andre garanterte maskinen og forutsetning for projektiv dualitet og
projektive kjeglesnitt; kryssforhold/pol–polar er dualitetens toppstoff;
kjeglesnitt kommer analytisk før projektivt (koblingen mellom språkene er selve
poenget); klassisk plangeometri (Ceva/Menelaos, sirkler) er den tidlige epokens
bærebjelke; polyedre/romlige rotasjonsgrupper er den sene epokens signatur;
eksamenstreningen er sist. Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart, føring og figur-/konstruksjonshåndverk | 3 | Prioriteringsverktøy + de to bærende tverrferdighetene: den blandede føringen (regne/bevise/tegne/konstruere) og figur-/linjal-håndverket. Unikt for dette blandingsemnet. |
| 1 | Isometrier i planet | 5 | **~100 %**, nesten alltid Oppgave 1, konstant gjennom begge epoker → **maskin (i)** → teori + symmetrigrupper + drill. |
| 2 | Projektiv koordinatgeometri | 4 | **~100 %**, konstant → **maskin (ii)**: kryssprodukt for skjæring/forbindelseslinje + dualitet → teori + drill. |
| 3 | Kryssforhold, harmonisk konjugasjon og pol–polar | 3 | **~35 %** (kun 2018–2020), men høy skille-verdi → **maskin (vi)**; projektiv dualitet + linjal-konstruksjon. |
| 4 | Kjeglesnitt — analytisk (locus og tangent) | 4 | **~50 %** (tung 2015–2017) → **maskin (iii) del A**: standardformer, tangent/korde, geometrisk sted → teori + drill. |
| 5 | Kjeglesnitt — projektivt (klassifikasjon og degenerasjon) | 3 | **~80 %** → **maskin (iii) del B**: kvadratisk form, ellipse/hyperbel via linja i det uendelige, degenerasjon → teori + drill (kobler til Del 4). |
| 6 | Klassisk plangeometri: Ceva, Menelaos og sirkler | 4 | **~65 %** (bærer tidlig epoke) → **maskin (iv)**: konkurrens/kollinearitet + sirkel/tangentkonfigurasjoner → teori + drill. |
| 7 | Polyedre, Platonske legemer og romlige rotasjonsgrupper | 4 | **~50 %** (kun 2018–2020) → **maskin (v)**: regulære legemer, Eulers formel, rotasjonsgruppe ≅ plan symmetrigruppe → teori + drill. |
| 8 | Eksamenstrening | 4 | Sjangerkonsolidering (de seks maskinene + føringsverksted) + 3 komplette øvingseksamener (begge epoker, ingen hjelpemidler). |

**Avvik fra DNA-malen (dokumentert):**

1. **Blandingsprofil «regne + bevise + tegne + konstruere» (hele boka).** Regnefag-
   DNA-ens `example`/`exercise` beholdes, men «løsningen» skifter modus etter
   oppgaveverbet: et konkret uttrykk, et bevis, en figur eller en linjal-
   konstruksjon. Dette er emnets kjennemerke (analysen §1, §3-J/K) og skjelettets
   viktigste kalibrering — det skiller MAT2500 fra det rent bevistunge MAT2200 og
   det rent regne-/vedleggsdrevne MAT1120.
2. **Egen figur-/konstruksjons-del i Del 0 (kap. 0.3)** i tillegg til eksamenskart
   og føringsstandard. Fordi «Tegn figur» og «Konstruer med linjal» er
   **eksplisitt målte ferdigheter** (~100 % som delkrav, ~15 % som hovedkrav), får
   figur- og passer-/linjalhåndverket et eget kapittel før det faglige starter, og
   hvert teorikapittel bærer en figurtegnings-forpliktelse (regel 1.5.3).
3. **34 kapitler — i øvre sjikt av DNA-taket (20–35).** Begrunnet i
   PRODUKSJONSLOYPE-lærdommen «≥500 er et gulv» og i at MAT2500 dekker **fem
   klassiske geometrifelt** (euklidsk/klassisk/analytisk/projektiv/romlig) med et
   epokeskifte som tvinger frem full dekning av begge profiler — bredden kan ikke
   kuttes. Kapitlene holdes fokuserte; de seks drillkapitlene og
   sjangerkonsolideringen bærer mye av tellingen.
4. **Seks regnemaskiner, hver med theorem-blokk og drill** (kap. 1.5, 2.4, 4.4,
   5.3, 6.4, 7.4). Analysen (§7) peker ut nettopp disse seks som eksamenens
   bæresøyler; de får hver en algoritmisk «løsningsoppskrift» + gjennomregnet
   case + oppgavebatteri, framfor få store oppgaver (analysens råd: mange små,
   drillbare oppgaver per maskin).
5. **Epokeskiftet er designet inn.** Hver Eksamensvinkel-blokk merker om temaet
   hører til **tidlig epoke (2015–17)**, **sen epoke (2018–20)** eller er
   **konstant**; øvingseksamen 1 (8.2) speiler tidlig-epoke-profilen og
   øvingseksamen 2 (8.3) sen-epoke-profilen, mens 8.4 blander. Studenten trenes på
   at neste sett kan følge hvilken som helst profil, men at de to konstante
   maskinene uansett må sitte.
6. **Gjennomgående `(verifiser)`-merking.** Fordi arkivet mangler fasit, merkes
   alle sensorkrav, karakterskiller og «typiske feil» som utledet — et lånt grep
   fra usikkerhetshåndteringen, sterkere enn i MAT2200/MAT1120 der offisielle
   fasiter fantes.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–K) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** isometrier —
speilingssammensetning og klassifikasjon; **B** symmetrigrupper av plane figurer
($D_n/C_n$, tegn + beskriv); **C** projektiv koordinatgeometri (kryssprodukt for
skjæring/forbindelseslinje, insidens, dualitet); **D** kjeglesnitt projektivt
(klassifikasjon ellipse/hyperbel, degenerasjon, tangent); **E** analytiske
kjeglesnitt og geometriske steder (locus, tangent, korde); **F** klassisk
plangeometri (Ceva/Menelaos, konkurrens/kollinearitet); **G** sirkler, tangenter
og potens ($S_1T/S_2T=r_1/r_2$, innskrevet sirkel); **H** polyedre, regulære
legemer og rotasjonsgrupper (Eulers formel); **I** kryssforhold, harmonisk
konjugasjon, pol–polar; **J** figurtegning og skisse (tverrgående); **K**
konstruksjon med linjal (tverrgående). Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3). Epokemerke: **konstant** / **tidlig
(2015–17)** / **sen (2018–20)**.

**Aktiveringsmarkør for forkunnskaper:** MAT2500 bygger på **lineær algebra
(MAT1120)** og **kalkulus/analytisk geometri (MAT1100/MAT1110)**. Disse er ikke
bygget som bøker ennå; referanser dit skrives som **klartekst** med markøren
*(MAT1120 Lineær algebra / MAT1100–1110 Kalkulus — forkunnskapsemne, ikke bygget
som bok ennå; aktiver `/bok/<emne>/<id>`-lenke når den finnes)*. Referanser til
**bygde** bøker lenkes normalt (kun til kapitler som finnes — verifiseres i fase
6): **R2** dekker vektorer i rommet, skalar-/vektorprodukt og komplekse tall fra
VGS ([Vektorer i tre dimensjoner](/bok/r2/r2-5-1), [Bevis og matematisk
argumentasjon](/bok/r2/r2-6-6)); **R1** dekker plangeometri og bevisføring;
**Matematikk for økonomer** (`bi-okonomi`, Høyskole) dekker matriser og
determinanter ([Matriser og matriseregning](/bok/bi-okonomi/bi-okonomi-9-1),
[Determinanter og invers matrise](/bok/bi-okonomi/bi-okonomi-9-2)). Alle
kryssbok-lenker verifiseres i fase 6; usikre id-er merkes `(verifiser)`.

---
