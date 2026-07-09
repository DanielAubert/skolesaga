# Bokskjelett: MAT2500 Geometri (UiO) — eksamensrettet lærebok

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

### Del 0 — Eksamenskart, føring og figur-/konstruksjonshåndverk

#### Kapittel 0.1: Eksamenskartet: to garanterte maskiner, to epoker, blandet sjanger

- **id:** `mat2500-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT2500: den 4-timers hjelpemiddelfrie skoleeksamenen, de to garanterte maskinene (isometri-åpningen og projektiv koordinatregning), epokeskiftet ~2018, den blandede sjangeren (regne/bevise/tegne/konstruere), sjangerkatalogen A–K med frekvenser, de utledede sensorreglene og lesestrategien som styrer hele boka.
- **Forkunnskaper (kryssbok):** Ingen. Metakapittel — leses først.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (6 sett, H2015–H2020, **ingen fasit**). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakter A–F, **normalt ingen hjelpemidler** (apparatet må sitte utenat; eksakte svar), **norsk bokmål**, én obligatorisk **prosjektoppgave** som må godkjennes for å gå opp; (ii) **formathistorikken**: papir 2015–2019 (3–5 oppgaver, deloppgaver a–e, «alle deler teller likt», H2015 poengsatt), korona-hjemmeeksamen H2020 («alle hjelpemidler», men samme oppgavetyper) — aktiv t.o.m. minst H2026 `(verifiser mot nyeste sett)`; (iii) **de to garanterte maskinene**: isometri-åpningen (nesten alltid Oppgave 1) og projektiv koordinatgeometri — begge ~100 %, konstante gjennom begge epoker; (iv) **epokeskiftet ~2018**: tidlig epoke (2015–17) = klassisk plangeometri + analytisk kjeglesnitt/locus; sen epoke (2018–20) = polyedre/romlige rotasjonsgrupper + projektiv dualitet (kryssforhold/pol–polar) — dekk begge; (v) **temafrekvens-tabellen** (isometrier ~100 %, projektiv koordinatgeometri ~100 %, kjeglesnitt samlet ~90 %, kjeglesnitt projektivt ~80 %, klassisk plangeometri Ceva/Menelaos ~65 %, symmetrigrupper ~65 %, tangentproblemer ~50 %, analytisk locus ~50 % [tidlig], polyedre/rotasjonsgrupper ~50 % [sen], kryssforhold/harmonisk/pol–polar ~35 % [sen], konstruksjon med linjal ~15 %, figurkrav ~100 % som delkrav) — **alle tall grove, 6 datapunkter**; (vi) **den blandede sjangeren**: fire modi (regne/bevise/tegne/konstruere) styrt av oppgaveverbet; (vii) **de utledede karakterskillene** (bestått ≈ mekanikken: sett sammen to speilinger → rotasjon, kryssprodukt for projektiv skjæring/linje, sett opp en sirkellikning, sett inn i et kjeglesnitt; midtsjikt ≈ full klassifikasjon med alle data, ellipse/hyperbel/degenerert-skille via linja i det uendelige, korrekt Ceva/Menelaos med fortegn, symmetrigruppe korrekt beskrevet; toppsjikt ≈ locus-eliminasjon med grensetilfeller, romlig rotasjonsgruppe opp til isomorfi, harmonisk konjugasjon/pol–polar med både regning og linjal-konstruksjon, generelle bevis) — **alt merket `(verifiser)`**: utledet av oppgaveverbene, ikke lest av fasit.
- **Innholdskontrakt:** Sjangerkatalogen A–K presenteres som studentens sjekkliste med frekvens per sjanger. **Prognose for neste ordinære eksamen** (4 t, normalt ingen hjelpemidler, 3–5 oppgaver med a–e): **O1 (isometrier)** sett sammen to–tre speilinger, klassifiser (rotasjon/translasjon/glidespeiling) med fikspunkt/vinkel/linje/vektor, tegn + beskriv symmetrigruppen til en figur — nesten sikker; **O2 (projektiv koordinatgeometri)** skjæringspunkt av linjer + linje gjennom to punkter, ofte utvidet til et kjeglesnitt (klassifikasjon/degenerasjon/tangent) — nesten sikker; **O3 (roterende slot A)** enten klassisk plangeometri (Ceva/Menelaos/konkurrens, sirkler & tangenter) *eller* analytisk kjeglesnitt med locus; **O4 (roterende slot B)** enten polyeder/romlig rotasjonsgruppe (regulært legeme, Euler) *eller* projektiv dualitet (kryssforhold, harmonisk konjugasjon, pol–polar med linjal-konstruksjon). Ærlighetsforbeholdet (regel 1.5.8): 6 sett uten fasit, epokeskiftet på tynt grunnlag, hjelpemiddelregimet kan endres — tren den **hjelpemiddelfrie, eksakte** produksjonen som primærmål. Leseplan: Del 0 (føring + figur/konstruksjon) → Del 1 (isometri-åpningen) → Del 2 (projektiv koordinatregning) er det garanterte tyngdepunktet; Del 4–5 (kjeglesnitt begge språk) er ~90 %; Del 3/6/7 bærer de roterende slotene.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «to maskiner er garantert — lag en plan for å drille isometri-klassifikasjon og projektiv kryssprodukt-regning til refleks», «identifiser hvilken epoke fjorårets slot A/B tilhørte, og hvilke to profiler neste sett kan følge», «lag en sjekkliste for de fire modiene: hva krever verbene finn/vis/tegn/konstruer?».
- **Typiske feil:** Metafeilene `(verifiser)`: lese pensum lineært uten å prioritere de to garanterte maskinene; tro at et riktig tall holder når verbet er «vis at» (eller omvendt gi et bevis når verbet er «finn»); hoppe over figuren når den er bedt om; satse på én epoke-profil; undervurdere at emnet normalt ikke er åpen bok (apparatet må sitte utenat, svar eksakte).
- **Quiz: 10 · Flashcards: 14** (frekvenser, sjangerkatalog A–K, de to maskinene, epokeskiftet, de fire modiene, utledede sensorregler)

**Prøve-kvote Del 0:** ingen (metadel).

#### Kapittel 0.2: Føringsstandard: de fire modiene — regne, bevise, tegne, konstruere

- **id:** `mat2500-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat2500-0-1`
- **kapitteltype:** teori (metode)
- **description:** Den bærende tverrferdigheten i et blandingsemne: hvordan du leser oppgaveverbet og fører svaret i riktig modus — et konkret eksakt uttrykk (finn), et navngitt-teorem-bevis (vis at), en korrekt merket figur (tegn) eller en linjal-prosedyre (konstruer) — pluss hva sensor (utledet) ser etter i hver modus.
- **Forkunnskaper (kryssbok):** Kap. 0.1. Generell bevisføring fra VGS: [Bevis og matematisk argumentasjon](/bok/r2/r2-6-6) (direkte bevis, kontrapositiv, moteksempel). *(MAT1100–1110 — analytisk geometri; ikke bygget; aktiver lenke når den finnes)*.
- **Symbol- og formelliste (collapsible):** oppgaveverbene finn/vis/begrunn/tegn/konstruer; modus-symbolene $\Rightarrow$, $\Leftrightarrow$; «eksakt svar» (brøk, $\sqrt{}$, $\pi$) vs. desimal.
- **Eksamensbelegg:** Metaregel-kapittel bygget på oppgaveverbene i alle 6 sett: formuleringene veksler bevisst mellom «Finn …», «Vis at …/Begrunn/Forklar hvorfor …», «Tegn …» og «Konstruer …». `(verifiser)` — at hver modus teller separat er utledet av verbene, ikke av fasit. Prioritet: **perfekt** (ferdigheten bærer uttelling i alle deler).
- **Innholdskontrakt:** **Modus 1 — Regne (finn):** produser et eksakt, entydig svar (likning, koordinatsett, vinkel, forhold); vis nok mellomregning til at svaret kan følges; svar eksakt, aldri desimal. **Modus 2 — Bevise (vis at/begrunn):** direkte bevis / kontrapositiv / moteksempel; **navngi teoremet** som bærer hvert steg (Ceva, Menelaos, Euler, speilingssammensetning, gjensidighetsprinsippet), sjekk forutsetningene, trekk konklusjonen eksplisitt; skill $\Rightarrow$ og $\Leftrightarrow$. **Modus 3 — Tegne (figur som svar):** en korrekt, forklarende figur — merk akser, punkter, linjer, vinkler, symmetriakser; figuren skal stemme med konfigurasjonen (regel 1.5.3). **Modus 4 — Konstruere (passer/linjal):** oppgi prosedyren steg for steg (trekk linje, marker skjæring), oppgavetypen er som regel «finn punkt ved å trekke linjer og markere skjæring» (detaljert i kap. 0.3). Én fullstendig gjennomgang av samme lille konfigurasjon i alle fire modi (f.eks. en rotasjon om origo: finn bildet av et punkt / vis at den bevarer avstand / tegn et symmetrisk mønster / konstruer et fikspunkt), annotert med hva sensor (utledet) ser etter i hver modus.
- **Oppgavesjangre:** Meta/føring. Mønstereksempel: «Nedenfor er samme deloppgave løst i fire versjoner. Én gir et tall der verbet var «vis at», én gir et bevis der verbet var «finn», én mangler figuren oppgaven ba om. Pek på hva som mangler i hver, og skriv om til korrekt modus.»
- **Typiske feil:** `(verifiser)` Gi et tall der oppgaven ber om et argument (og omvendt); hoppe over figuren; ikke navngi teoremet i et «vis at»; forveksle $\Rightarrow$ og $\Leftrightarrow$; oppgi desimaltilnærming der eksakt svar kreves.
- **Quiz: 12 · Flashcards: 20** (de fire modiene, oppgaveverbene, teoremnavn-bank, eksakt-vs-desimal, sensor-utledningene)

**Prøve-kvote Del 0:** ingen (metadel).

#### Kapittel 0.3: Figur- og konstruksjonshåndverk: tegn korrekt, konstruer med linjal

- **id:** `mat2500-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `mat2500-0-2`
- **kapitteltype:** teori (metode)
- **description:** Figuren og konstruksjonen som eksplisitt målte ferdigheter: hvordan du tegner en korrekt, forklarende geometrifigur (akser, merking, symmetriakser, kjeglesnitt-skisse) og utfører de klassiske linjal-/passer-konstruksjonene — grunnlaget for figurforpliktelsen i hvert kapittel og for konstruksjonsslotet (~15 %).
- **Forkunnskaper (kryssbok):** Kap. 0.2. Plangeometri og passer-/linjal-konstruksjon fra VGS: R1-geometri `(verifiser lenke-id)`. *(MAT1100–1110 — koordinatgeometri; ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** skisse-elementer (akse, enhet, merket punkt/linje, vinkelbue, symmetriakse, tangeringspunkt); konstruksjonsprimitiver (trekk linje gjennom to punkter, marker skjæring, halver linjestykke/vinkel); komplett firkant (til harmonisk konstruksjon, kap. 3.2).
- **Eksamensbelegg:** «Tegn figur»/«Tegn G og beskriv symmetriene»/«skisser området» er delkrav i ~100 % av settene; ren konstruksjon med linjal ~15 % (H2020). Figuren teller når den er bedt om `(verifiser)`. Prioritet: **perfekt** (figur) / **kjenne** (ren konstruksjon).
- **Innholdskontrakt:** **Figurhåndverk:** velg og merk akser og enhet; plott og navngi punkter/linjer; tegn kjeglesnitt (parabel, ellipse, sirkel, hyperbel) i standardstilling med brennpunkt/toppunkt der relevant; marker symmetriakser og rotasjonssentre for symmetrigruppe-figurer; tegn en glidespeilings-akse + translasjonsvektor; tegn parameterområdet i et $(a,b)$-plan. En figur er **forklarende** når en leser kan gjenskape konfigurasjonen fra den. **Konstruksjonshåndverk (linjal/passer):** primitivene (linje gjennom to punkter, skjæringsmarkering, midtnormal, vinkelhalvering); den klassiske MAT2500-konstruksjonen «finn et punkt ved å trekke gitte linjer og markere skjæringen»; **komplett firkant** til å konstruere det harmoniske konjugatet (bygges ut i kap. 3.2). Tekstlig beskrivelse av figurer/konstruksjoner i boka: siden plattformen er tekst/LaTeX, beskrives figuren presist i ord + koordinater (og evt. enkel ASCII-/koordinatskisse), slik at forfatter-agenten produserer en etterprøvbar figurbeskrivelse, ikke en vag illustrasjon.
- **Oppgavesjangre:** J, K. Mønstereksempel: «Tegn parabelen $y^2=8x$ og sirkelen $x^2+y^2=9$ i samme koordinatsystem; marker skjæringspunktene og en tangent i toppunktet.» / «Gitt tre punkter $A,B,C$ på en linje: konstruer med linjal det harmoniske konjugatet til $C$ mhp. $(A,B)$ ved en komplett firkant (prosedyren beskrives steg for steg).»
- **Typiske feil:** `(verifiser)` Hoppe over figuren; tegne en figur som ikke stemmer med konfigurasjonen; glemme å merke akser/punkter/symmetriakser; oppgi en konstruksjon uten å angi hvilke linjer som trekkes og hvor skjæringen markeres.
- **Quiz: 12 · Flashcards: 18** (figurelementer, kjeglesnitt-skisser, konstruksjonsprimitiver, komplett firkant, figur-teller-regelen)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Isometrier i planet *(prioritet: PERFEKT — ~100 %, nesten alltid Oppgave 1, KONSTANT gjennom begge epoker)*

#### Kapittel 1.1: De fire isometritypene i E² og deres definerende data

- **id:** `mat2500-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-0-2`
- **kapitteltype:** teori
- **description:** De fire plane isometriene — translasjon, rotasjon, speiling, glidespeiling — hver med de dataene sensor krever navngitt (vektor; sentrum + vinkel; linje; linje + vektor), skrevet som affine avbildninger og gjenkjent på fikspunktmengde og orientering.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Vektorer og koordinater: [Vektorer i tre dimensjoner](/bok/r2/r2-5-1) (vektor, lengde — todimensjonal analog). *(MAT1120 — lineære avbildninger/matriser; ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** $E^2$; $t_a$ (translasjon, vektor $a$); $\rho$, $\rho_\theta$ (rotasjon, sentrum + vinkel $\theta$); $s_\ell$ (speiling om linje $\ell$); glidespeiling (linje + vektor langs linja); fikspunkt $P$ med $f(P)=P$; orientering (bevart/reversert); affin form $x\mapsto Ax+b$.
- **Eksamensbelegg:** Grunnlaget for sjanger A (~100 %, Oppgave 1), konstant begge epoker. `(verifiser)`: at typen skal navngis med alle data er lest av verbene «Vis at … er en rotasjon» + «finn fikspunkt og vinkel». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Isometri** (avstandsbevarende avbildning $E^2\to E^2$); de fire typene og klassifikasjonssetningen (enhver plan isometri er en av de fire, og er sammensetning av høyst tre speilinger). **Definerende data per type:** translasjon → vektor $a$, ingen fikspunkt (unntatt identiteten); rotasjon $\rho_\theta$ → sentrum + vinkel, ett fikspunkt; speiling $s_\ell$ → akse $\ell$, en hel linje fikspunkter, reverserer orientering; glidespeiling → akse + translasjonsvektor langs aksen, ingen fikspunkt, reverserer orientering. **Diagnose:** orientering (bevart = translasjon/rotasjon; reversert = speiling/glidespeiling) kombinert med fikspunktmengde skiller de fire. Skriv hver isometri som affin avbildning $x\mapsto Ax+b$ ($A$ ortogonal). Figurforpliktelse: tegn et punkt og bildet under hver av de fire typene, med akse/sentrum/vektor merket.
- **Oppgavesjangre:** A, J. Mønstereksempel: «Avgjør om avbildningen $x\mapsto Ax+b$ (gitt $A,b$) er en translasjon, rotasjon, speiling eller glidespeiling, og oppgi de definerende dataene. Tegn et punkt og bildet.»
- **Typiske feil:** `(verifiser)` Si «det er en isometri» uten å oppgi typen; oppgi rotasjon uten sentrum/vinkel eller glidespeiling uten linje/vektor; forveksle orienteringsbevarende og -reverserende; glemme at speiling har en hel linje fikspunkter.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.2: Speilingssammensetning — regnemaskin (i): to speilinger → rotasjon eller translasjon

- **id:** `mat2500-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2500-1-1`
- **kapitteltype:** teori (regnemaskin i, del A)
- **description:** Den bærende maskinen: to speilinger om linjer som skjærer hverandre gir en rotasjon (sentrum = skjæringspunkt, vinkel = dobbelt vinkelen mellom linjene); om parallelle linjer gir en translasjon (dobbelt avstanden). Finn sentrum/vinkel eller vektor, hver gang.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Vinkel mellom linjer, linjeskjæring fra koordinatgeometri: *(MAT1100–1110 — ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** $s_\ell\circ s_{\ell'}$ (sammensetning, høyre først); $\theta$ = vinkel mellom aksene; rotasjonsvinkel $2\theta$; parallelle akser med avstand $d$ → translasjon $2d$; fikspunkt = $\ell\cap\ell'$.
- **Eksamensbelegg:** **Kjernen i Oppgave 1** (~100 %), nær identisk hvert år. `(verifiser)`: vinkel = dobbelt, sentrum = skjæring, er standard geometrifakta bekreftet av oppgaveoppsettet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Speilingssammensetnings-teoremet (regnemaskin i):** (1) $s_\ell\circ s_{\ell'}$ om **skjærende** linjer $= $ rotasjon om skjæringspunktet $\ell\cap\ell'$ med vinkel $=2\theta$, der $\theta$ er (den rettede) vinkelen fra $\ell'$ til $\ell$; (2) om **parallelle** linjer $= $ translasjon vinkelrett på linjene, med lengde $=2d$ ($d$ = avstanden). **Orientering og rekkefølge:** to speilinger bevarer orientering; $s_\ell\circ s_{\ell'}$ og $s_{\ell'}\circ s_\ell$ gir **motsatt** rotasjonsvinkel (samme sentrum) — sensor tester dette (analysen §5.1). Finn fikspunktet ved å løse $\rho(P)=P$ eller ved å identifisere skjæringspunktet direkte. Theorem-blokk med kort utledning (intuisjon: en speiling snur vinkler om aksen; to snuinger summerer til dobbel akselvinkel). Figurforpliktelse: tegn de to aksene, skjæringspunktet og en rotasjonsbue $2\theta$.
- **Oppgavesjangre:** A, J. Mønstereksempel: «La $\ell: y=0$ og $\ell': y=x$. Vis at $s_{\ell'}\circ s_\ell$ er en rotasjon; finn sentrum og vinkel. Hva blir $s_\ell\circ s_{\ell'}$? Tegn figur.»
- **Typiske feil:** `(verifiser)` Bruke vinkelen mellom aksene i stedet for det **dobbelte**; forveksle skjærende (rotasjon) og parallelle (translasjon) akser; bytte fortegn på rotasjonsvinkelen (rekkefølge); glemme at sentrum er skjæringspunktet.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.3: Klassifikasjon — tre speilinger, glidespeiling og translasjon∘rotasjon

- **id:** `mat2500-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-1-2`
- **kapitteltype:** teori (regnemaskin i, del B)
- **description:** Klassifikasjonen fullført: tre speilinger eller speiling∘rotasjon gir en speiling eller en glidespeiling (finn akse + vektor); en translasjon lagt til en rotasjon er fortsatt en rotasjon (bare sentrum flytter seg) — med alle definerende data hver gang.
- **Forkunnskaper (kryssbok):** Kap. 1.2.
- **Symbol- og formelliste (collapsible):** $t_a\circ\rho$ (translasjon etter rotasjon); glidespeiling = $s_\ell\circ t_a$ med $a\parallel\ell$; orienteringsregnskap (partall/oddetall antall speilinger).
- **Eksamensbelegg:** Utvidelsen av Oppgave 1 (~100 % samlet med 1.2), glidespeiling eksplisitt i H2018. `(verifiser)`. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Orienteringsregnskap:** sammensetning av et **partall** speilinger bevarer orientering (rotasjon/translasjon); et **oddetall** reverserer (speiling/glidespeiling). **Tre speilinger / speiling∘rotasjon → glidespeiling:** finn aksen og translasjonsvektoren (dekomponer i en komponent langs aksen = glidevektoren og verifiser at komponenten på tvers speiles bort); ren speiling er grensetilfellet med nullvektor. **$t_a\circ\rho$ er fortsatt en rotasjon** med samme vinkel — translasjonen **flytter bare sentrum**; finn det nye sentrumet ved å løse $(t_a\circ\rho)(P)=P$. Theorem-blokk (regnemaskin i, del B) med løsningsalgoritme: (1) tell orientering, (2) finn fikspunkt(er), (3) identifiser type, (4) oppgi alle data. Figurforpliktelse: tegn en glidespeilings akse + vektor og et mønster den bevarer.
- **Oppgavesjangre:** A, J. Mønstereksempel: «La $t$ være translasjon med $(2,0)$ og $\rho$ rotasjon $90^\circ$ om origo. Vis at $t\circ\rho$ er en rotasjon; finn nytt sentrum og vinkel. Vis at $s_\ell\circ\rho$ (gitt $\ell$) er en glidespeiling; finn akse og vektor.»
- **Typiske feil:** `(verifiser)` Klassifisere $t_a\circ\rho$ som noe annet enn rotasjon (glemme at sentrum bare flytter); si «glidespeiling» uten akse + vektor; feil orienteringsregnskap; blande glidevektor og full translasjonsvektor.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.4: Symmetrigrupper av plane figurer — Dₙ og Cₙ

- **id:** `mat2500-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-1-3`
- **kapitteltype:** teori
- **description:** Symmetrigruppen til en figur: alle isometrier som avbilder figuren på seg selv, talt korrekt som en diedergruppe Dₙ eller syklisk gruppe Cₙ — inkludert figurer konstruert som G = F ∪ σ(F), som skal tegnes og beskrives fullstendig.
- **Forkunnskaper (kryssbok):** Kap. 1.3. Gruppebegrep (lukket, invers, nøytralt): *(MAT1120 / grunnleggende gruppeteori — ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** symmetrigruppe $\mathrm{Sym}(G)$; diedergruppe $D_n$ (orden $2n$: $n$ rotasjoner + $n$ speilinger); syklisk $C_n$ (orden $n$: kun rotasjoner); $G=F\cup\sigma(F)$ (figur bygget fra en isometri).
- **Eksamensbelegg:** Sjanger B (~65 %, innbakt i isometri-oppgaven i de fleste sett), konstant. `(verifiser)`: figuren teller når den er bedt om. Prioritet: **kunne** (høy, del av garantert Oppgave 1).
- **Innholdskontrakt:** **Symmetri = isometri som fikserer figuren.** Symmetriene danner en gruppe (lukket under $\circ$, inneholder identiteten, lukket under invers). **Diedergruppe $D_n$** (symmetriene til en regulær $n$-kant: $n$ rotasjoner om senter + $n$ speilingsakser, orden $2n$) vs. **syklisk $C_n$** (kun rotasjoner, ingen speilingsakse — figur med rotasjons- men ikke speilsymmetri). **Tell korrekt:** identifiser rotasjonssentre og alle speilingsakser; en figur bygget som $G=F\cup s_{\ell'}(F)$ eller $H=G\cup\rho'(G)$ skal **tegnes** og alle symmetriene beskrives. Finn en mangekant med foreskrevet symmetri. Figurforpliktelse er kjernen her: tegn $G$, marker hvert rotasjonssenter og hver speilingsakse.
- **Oppgavesjangre:** B, J. Mønstereksempel: «La $F$ være en likebeint trekant og $\ell'$ en linje. Tegn $G=F\cup s_{\ell'}(F)$ og beskriv alle symmetriene (angi gruppen $D_n$ eller $C_n$). La $H=G\cup\rho'(G)$ for en rotasjon $\rho'$; tegn $H$ og beskriv symmetriene.»
- **Typiske feil:** `(verifiser)` Telle for få eller for mange speilingsakser; forveksle $D_n$ og $C_n$ (glemme at $C_n$ mangler speilinger); hoppe over figuren; ikke inkludere identiteten/oppgi feil orden.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.5: Drill — isometri-klassifikasjon (Oppgave 1-simulering)

- **id:** `mat2500-1-5` · **number:** 1.5 · **estimatedMinutes:** 85 · **prerequisites:** `mat2500-1-4`
- **kapitteltype:** drill (regnemaskin i, samlet)
- **description:** Hele Oppgave 1-repertoaret drillet til refleks: sett sammen to–tre speilinger, klassifiser (rotasjon/translasjon/glidespeiling) med alle data, legg til en translasjon, og tegn + beskriv symmetrigruppen til en figur — med korrekt modusføring hele veien.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.4.
- **Eksamensbelegg:** Dekker sjanger A + B samlet (~100 %, den faste Oppgave 1), konstant begge epoker. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) tell orientering (partall/oddetall speilinger); (2) finn fikspunktmengden (løs $f(P)=P$ eller identifiser linjeskjæring); (3) identifiser type fra orientering + fikspunkt; (4) oppgi ALLE data (sentrum + vinkel / linje / linje + vektor); (5) ved figur: tegn og beskriv symmetrigruppen. **Gjennomregnet eksamenscase** (to–tre speilinger + en translasjon, klassifiser, deretter en $G=F\cup\sigma(F)$-figur) med sensor-margnotater `(verifiser)` om hva som gir uttelling (dobbel vinkel, alle data oppgitt, figur korrekt). 12–15 oppgaver på eksamensnivå: minst én to-speilings-rotasjon, én to-speilings-translasjon (parallelle akser), én glidespeiling (akse + vektor), én $t_a\circ\rho$ (nytt sentrum), én rekkefølge-test ($s_1\circ s_2$ vs. $s_2\circ s_1$), én symmetrigruppe-figur ($D_n$/$C_n$).
- **Oppgavesjangre:** A, B, J — alle varianter. Mønstereksempel: «(a) Vis at $s_{\ell_1}\circ s_{\ell_2}$ er en rotasjon; finn sentrum og vinkel. (b) La $t$ ha vektor $(0,2)$; klassifiser $t\circ s_{\ell_1}\circ s_{\ell_2}$. (c) Tegn en figur med symmetrigruppe $D_3$ og beskriv symmetriene.»
- **Typiske feil:** Hele føringsfellekatalogen fra 1.1–1.4 under tidspress; dobbel-vinkel-fella; ufullstendig klassifikasjon; glemme figuren; feil rekkefølge/orientering.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Projektiv koordinatgeometri *(prioritet: PERFEKT — ~100 %, KONSTANT gjennom begge epoker)*

#### Kapittel 2.1: Det projektive planet, homogene koordinater og linja i det uendelige

- **id:** `mat2500-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-0-2`
- **kapitteltype:** teori
- **description:** Det projektive planet RP² satt opp konkret: homogene koordinater (x₀:x₁:x₂) opp til skalering, innleiringen av R² med én fast konvensjon, punkter i det uendelige og linja i det uendelige — grunnspråket for den andre garanterte maskinen.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Vektorer og lineær uavhengighet: *(MAT1120 — ikke bygget; aktiver lenke)*; koordinatgeometri i planet: *(MAT1100–1110 — ikke bygget)*.
- **Symbol- og formelliste (collapsible):** $\mathbb{RP}^2$ / $P^2$; homogene koordinater $(x_0:x_1:x_2)$ (ikke alle null, opp til skalering $\lambda\neq0$); linje som $a_0x_0+a_1x_1+a_2x_2=0$, koeffisientvektor $[a_0:a_1:a_2]$; innleiring $(x,y)\mapsto(1:x:y)$; punkt i det uendelige $(0:x_1:x_2)$; **linja i det uendelige** $x_0=0$.
- **Eksamensbelegg:** Grunnlaget for sjanger C (~100 %, garantert oppgave), konstant. `(verifiser)`: standard projektiv oppsett bekreftet av settene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Homogene koordinater:** et projektivt punkt er $(x_0:x_1:x_2)$, ikke alle null, identifisert opp til felles skalar $\lambda\neq0$; en projektiv linje er nullmengden til en lineær form $a\cdot x=0$ med koeffisientvektor $[a_0:a_1:a_2]$ (også opp til skalering) — **dualiteten punkt↔linje** starter her. **Innleiring av $R^2$:** velg og oppgi ÉN konvensjon (boka bruker $(x,y)\mapsto(1:x:y)$, så $x_0=0$ er linja i det uendelige) og hold den konsekvent (regel 1.5.4); et euklidsk punkt $(x,y)$ har $x_0\neq0$ og gjenfinnes som $(x_1/x_0,\,x_2/x_0)$. **Punkter i det uendelige** $(0:x_1:x_2)$ svarer til retninger; parallelle euklidske linjer møtes i ett uendelig punkt. **Insidens:** punkt $P$ ligger på linje $a$ ⇔ $a\cdot P=0$. Figurforpliktelse: skisser innleiringen av $R^2$ og et par parallelle linjer som møtes i det uendelige.
- **Oppgavesjangre:** C, J. Mønstereksempel: «Skriv det euklidske punktet $(3,-2)$ i homogene koordinater. Hvilket uendelig punkt svarer til retningen til linja $y=2x$? Vis at $(2:1:2)$ ligger på linja $[0:2:-1]$.»
- **Typiske feil:** `(verifiser)` Glemme at koordinatene bare er bestemt opp til skalering (normalisere feil); blande innleiringskonvensjon underveis; forveksle punkt- og linjekoordinater; misforstå hvilken $x_i=0$ som er linja i det uendelige.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Kryssprodukt-maskinen — regnemaskin (ii): skjæring og forbindelseslinje

- **id:** `mat2500-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-2-1`
- **kapitteltype:** teori (regnemaskin ii)
- **description:** Den andre garanterte maskinen, ren mekanikk: skjæringspunktet av to linjer er kryssproduktet av koeffisientvektorene, og linja gjennom to punkter er kryssproduktet av punktvektorene — samme operasjon, dualt anvendt, med insidens-sjekk.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Kryssprodukt (vektorprodukt) av 3-vektorer: [Vektorer i tre dimensjoner](/bok/r2/r2-5-1) (R2, vektorprodukt) `(verifiser id)`.
- **Symbol- og formelliste (collapsible):** kryssprodukt $a\times b$; skjæringspunkt $P=a\times b$ (av linjer $a,b$); forbindelseslinje $\ell=P\times Q$ (av punkter $P,Q$); insidens $a\cdot P=0$; determinant-formel for $\times$.
- **Eksamensbelegg:** **Kjernen i den projektive oppgaven** (~100 %), konstant. `(verifiser)`. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kryssprodukt-maskinen (regnemaskin ii):** **skjæringspunktet** av to projektive linjer $a$ og $b$ er $P=a\times b$ (kryssproduktet av koeffisientvektorene); **linja gjennom to punkter** $P$ og $Q$ er $\ell=P\times Q$ (kryssproduktet av punktvektorene). Det er **samme operasjon**, dualt anvendt — dette er dualitetsprinsippet i regneform. Bekreft alltid resultatet ved **insidens** ($a\cdot P=0$, $b\cdot P=0$). Tolk et resultat med $x_0=0$ som et uendelig punkt (parallelle linjer). Theorem-blokk med kort utledning (hvorfor kryssproduktet gir insidens: $a\cdot(a\times b)=0$ identisk). Håndter normalisering (svaret er en klasse opp til skalering — «pen» representant velges). Figurforpliktelse: tegn to linjer og skjæringspunktet, eller to punkter og forbindelseslinja.
- **Oppgavesjangre:** C. Mønstereksempel: «Finn skjæringspunktet $P$ mellom linjene $[1:-1:0]$ og $[0:1:-2]$. Finn deretter linja gjennom $P$ og punktet $Q=(1:2:1)$. Verifiser insidensene.»
- **Typiske feil:** `(verifiser)` Regnefeil/fortegnsfeil i kryssproduktet; forveksle punkt- og linjerollen (bruke feil vektorer); glemme å tolke $x_0=0$ som uendelig punkt; ikke verifisere insidens; unnlate å normalisere/tolke opp til skalering.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.3: Dualitet, kollinearitet og konkurrens i det projektive planet

- **id:** `mat2500-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat2500-2-2`
- **kapitteltype:** teori
- **description:** Dualitetsprinsippet gjort operativt: tre punkter er kollineære når determinanten av punktvektorene er null (dualt: tre linjer er konkurrente når determinanten av koeffisientvektorene er null), og hvordan hvert projektivt utsagn har et dualt motstykke.
- **Forkunnskaper (kryssbok):** Kap. 2.2. Determinant av 3×3: [Determinanter og invers matrise](/bok/bi-okonomi/bi-okonomi-9-2).
- **Symbol- og formelliste (collapsible):** kollinearitet $\det[P\,Q\,R]=0$; konkurrens $\det[a\,b\,c]=0$; dualitetsprinsippet (punkt↔linje, ligge på↔gå gjennom, kollineær↔konkurrent).
- **Eksamensbelegg:** Del av sjanger C (~100 %), og bro til projektiv dualitet i Del 3 (kryssforhold/pol–polar, sen epoke). `(verifiser)`. Prioritet: **kunne** (høy).
- **Innholdskontrakt:** **Kollinearitet:** tre punkter $P,Q,R$ er kollineære ⇔ $\det[P\;Q\;R]=0$ (punktvektorene lineært avhengige) ⇔ $R$ ligger på linja $P\times Q$. **Konkurrens (dualt):** tre linjer $a,b,c$ møtes i ett punkt ⇔ $\det[a\;b\;c]=0$. **Dualitetsprinsippet:** bytt «punkt» ↔ «linje», «ligger på» ↔ «går gjennom», «kollineær» ↔ «konkurrent» — hvert sant projektivt utsagn gir et sant dualt utsagn (grunnlaget for at tre linjers poler er kollineære, kap. 3.3). Bruk determinanten til å avgjøre kollinearitet/konkurrens uten å regne ut skjæringspunkter. Figurforpliktelse: tegn tre kollineære punkter og deres duale (tre konkurrente linjer).
- **Oppgavesjangre:** C. Mønstereksempel: «Avgjør om punktene $(1:0:1)$, $(0:1:1)$ og $(1:1:2)$ er kollineære. Formuler det duale utsagnet og avgjør det for de tilsvarende linjene.»
- **Typiske feil:** `(verifiser)` Bruke determinant-kriteriet med feil vektorer (punkt vs. linje); feil determinant-utregning; ikke se det duale motstykket; blande kollinearitet (punkter) og konkurrens (linjer).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.4: Drill — projektiv kryssprodukt-regning (den projektive oppgaven)

- **id:** `mat2500-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat2500-2-3`
- **kapitteltype:** drill (regnemaskin ii, samlet)
- **description:** Hele den projektive koordinat-oppgaven drillet til refleks: skjæring og forbindelseslinje via kryssprodukt, insidens-sjekk, kollinearitet/konkurrens via determinant, håndtering av uendelige punkter — med korrekt tolkning opp til skalering.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.3.
- **Eksamensbelegg:** Dekker sjanger C samlet (~100 %, garantert oppgave), konstant. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) skriv punkter/linjer i homogene koordinater med fast innleiring; (2) skjæringspunkt = $a\times b$, forbindelseslinje = $P\times Q$; (3) verifiser insidens; (4) tolk $x_0=0$ som uendelig punkt; (5) for kollinearitet/konkurrens: determinant $=0$; (6) oppgi svaret opp til skalering med en «pen» representant. **Gjennomregnet eksamenscase** (finn to skjæringspunkter, linja mellom dem, og avgjør om et tredje punkt er kollineært) med sensor-margnotater `(verifiser)`. 12–15 oppgaver: minst én skjæring, én forbindelseslinje, én insidens-sjekk, én kollinearitet/konkurrens (determinant), én med uendelig punkt (parallelle linjer), én kjedet mot et kjeglesnitt (bro til Del 5).
- **Oppgavesjangre:** C. Mønstereksempel: «(a) Finn skjæringspunktene $P=a\times b$ og $Q=c\times d$ for gitte linjer. (b) Finn linja $P\times Q$. (c) Avgjør om et gitt punkt $R$ ligger på den (insidens/determinant).»
- **Typiske feil:** Hele fellekatalogen fra 2.1–2.3 under tidspress; kryssprodukt-fortegn; feil vektorroller; glemme skalerings-tolkning; ikke gjenkjenne uendelig punkt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Kryssforhold, harmonisk konjugasjon og pol–polar *(prioritet: KJENNE — ~35 %, kun SEN epoke (2018–20), høy skille-verdi; regnemaskin vi)*

#### Kapittel 3.1: Kryssforhold som projektiv invariant

- **id:** `mat2500-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat2500-2-2`
- **kapitteltype:** teori (regnemaskin vi, del A)
- **description:** Kryssforholdet (A,B;C,D) av fire kollineære punkter: definisjonen, invariansen under projeksjon, og hvordan det regnes ut — også når ett av punktene ligger i det uendelige.
- **Forkunnskaper (kryssbok):** Kap. 2.2. Forhold og koordinater på en linje: *(MAT1100–1110 — ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** kryssforhold $(A,B;C,D)=\dfrac{\overline{AC}/\overline{CB}}{\overline{AD}/\overline{DB}}$; projektiv parameter på en linje; invarians under projektivitet; grensetilfelle med punkt i det uendelige.
- **Eksamensbelegg:** Sjanger I (~35 %, kun 2018–20, topp-poeng-stoff), inn fra H2019/H2020. `(verifiser)`. Prioritet: **kjenne** (høy skille-verdi).
- **Innholdskontrakt:** **Kryssforhold** $(A,B;C,D)$ av fire kollineære punkter definert via delforhold; **invariant** under projeksjon/projektivitet (det er den grunnleggende projektive invarianten). Beregning fra koordinater langs linja; **grensetilfellet** når ett punkt er i det uendelige (delforholdet der går mot 1). Sammenheng med homogene koordinater. Theorem-blokk (regnemaskin vi, del A): oppskrift for å regne ut $(A,B;C,D)$ fra koordinater. Figurforpliktelse: tegn fire kollineære punkter og en projeksjon som bevarer kryssforholdet.
- **Oppgavesjangre:** I. Mønstereksempel: «Fire punkter $A,B,C,D$ på en linje har koordinater (parametere) $0,3,1,\infty$. Regn ut kryssforholdet $(A,B;C,D)$, og forklar hva som skjer med formelen når $D$ er i det uendelige.»
- **Typiske feil:** `(verifiser)` Feil rekkefølge/paring i delforholdene; regnefeil i grensetilfellet med uendelig punkt; anta at kryssforholdet endres under projeksjon (det er invariant); forveksle de fire punktenes roller.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Harmonisk konjugasjon — regning og konstruksjon med linjal

- **id:** `mat2500-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-3-1`
- **kapitteltype:** teori (regnemaskin vi, del B)
- **description:** Harmonisk konjugasjon: (A,B;C,D) = −1, hvordan du finner det harmoniske konjugatet D til C regnemessig, og hvordan du konstruerer D med kun linjal via en komplett firkant — den sjeldne, men høyt skillende konstruksjonsoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 3.1, kap. 0.3 (komplett firkant). 
- **Symbol- og formelliste (collapsible):** harmonisk konjugasjon $(A,B;C,D)=-1$; harmonisk konjugat $D$ til $C$ mhp. $(A,B)$; komplett firkant (fire punkter, seks linjer, diagonalpunkter); linjal-konstruksjon.
- **Eksamensbelegg:** Sjanger I + K (~35 %, kun 2018–20), harmonisk i H2019, konstruksjon i H2020. `(verifiser)`. Prioritet: **kjenne** (høy skille-verdi).
- **Innholdskontrakt:** **Harmonisk konjugasjon:** $(A,B;C,D)=-1$; gitt $A,B,C$, finn $D$ ved å løse $(A,B;C,D)=-1$ (regnemodus), inkludert når ett punkt er i det uendelige (da er $C$ midtpunktet av $AB$ dersom $D$ er uendelig). **Linjal-konstruksjon (regnemaskin vi, del B):** konstruer $D$ med kun linjal via en **komplett firkant** — prosedyren beskrives steg for steg (velg to hjelpepunkter, trekk de seks linjene, diagonalpunktene gir $D$). Kobling til klassisk plangeometri: Ceva+Menelaos på $\triangle DKL$ gir harmonisk konjugerte par (bro til Del 6). Figur-/konstruksjonsforpliktelse er kjernen: tegn den komplette firkanten og marker $D$.
- **Oppgavesjangre:** I, K, J. Mønstereksempel: «Gitt $A,B,C$ på en linje, finn $D$ slik at $(A,B;C,D)=-1$ (regn). Konstruer deretter $D$ med kun linjal ved en komplett firkant, og beskriv konstruksjonen.»
- **Typiske feil:** `(verifiser)` Sette opp $(A,B;C,D)=-1$ feil (fortegn/paring); glemme grensetilfellet (uendelig punkt ⇒ midtpunkt); konstruere firkanten feil (feil diagonalpunkt); beskrive konstruksjonen upresist.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.3: Pol og polar mhp. et kjeglesnitt — gjensidighetsprinsippet

- **id:** `mat2500-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat2500-3-2`
- **kapitteltype:** teori (regnemaskin vi, del C)
- **description:** Pol og polar med hensyn på en sirkel/kjeglesnitt: hvordan du finner polaren til et punkt, gjensidighetsprinsippet (P på polaren til Q ⇔ Q på polaren til P), og dualiteten som gir at tre konkurrente linjers poler er kollineære.
- **Forkunnskaper (kryssbok):** Kap. 3.2, kap. 2.3 (dualitet). Kjeglesnitt som kvadratisk form forutgripes fra kap. 5.1.
- **Symbol- og formelliste (collapsible):** pol $P$; polar $p$ (linje); kjeglesnitt-matrise $M$; polar til $P$ er $[MP]$; gjensidighetsprinsippet; konjugerte punkter/linjer.
- **Eksamensbelegg:** Sjanger I (~35 %, kun 2018–20, topp-poeng), pol/polar i H2019. `(verifiser)`. Prioritet: **kjenne** (høy skille-verdi).
- **Innholdskontrakt:** **Pol og polar mhp. et kjeglesnitt** med symmetrisk matrise $M$: polaren til punktet $P$ er linja med koeffisientvektor $MP$; polen til en linje $\ell$ er $M^{-1}\ell$. **Gjensidighetsprinsippet:** $P$ ligger på polaren til $Q$ ⇔ $Q$ ligger på polaren til $P$ (fordi $P^\top MQ=Q^\top MP$). **Dualitetskonsekvens:** hvis tre linjer møtes i ett punkt, er polene deres kollineære (og dualt) — bevis via gjensidighet + kap. 2.3. Tangent fra ytre punkt: polaren skjærer kjeglesnittet i tangeringspunktene. Theorem-blokk (regnemaskin vi, del C). Bevis-sjanger: gjensidighetsprinsippet bevises generelt. Figurforpliktelse: tegn en sirkel, et ytre punkt og dets polar gjennom de to tangeringspunktene.
- **Oppgavesjangre:** I, J. Mønstereksempel: «Finn polaren til $(2:0:1)$ mhp. sirkelen $x_1^2+x_2^2=x_0^2$. Vis at hvis tre linjer gjennom ett punkt gis, er polene deres kollineære (gjensidighetsprinsippet).»
- **Typiske feil:** `(verifiser)` Regne polaren med feil matrise/ledd; ikke bruke gjensidighetsprinsippet der det forkorter beviset; forveksle pol og polar; glemme koblingen polar↔tangeringspunkter.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Kjeglesnitt: analytisk (locus og tangent) *(prioritet: KUNNE — ~50 %, tung TIDLIG epoke (2015–17); regnemaskin iii del A)*

#### Kapittel 4.1: Analytiske kjeglesnitt — parabel, ellipse, hyperbel, sirkel

- **id:** `mat2500-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-0-2`
- **kapitteltype:** teori
- **description:** Kjeglesnittene i standardstilling: parabel y²=4px, ellipse, hyperbel og sirkel, med brennpunkt, toppunkt, akser og eksentrisitet — og hvordan du gjenkjenner et kjeglesnitt fra en generell andregradslikning.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Andregradslikninger og koordinatgeometri: *(MAT1100–1110 — ikke bygget; aktiver lenke)*; sirkellikning fra VGS: R1 `(verifiser id)`.
- **Symbol- og formelliste (collapsible):** parabel $y^2=4px$ (brennpunkt $(p,0)$); ellipse $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$; hyperbel $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$; sirkel $x^2+y^2=R^2$; brennpunkt, toppunkt, halvakser $a,b$, eksentrisitet.
- **Eksamensbelegg:** Grunnlaget for sjanger E (~50 %, tung 2015–17). `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Standardformene** for parabel ($y^2=4px$), ellipse, hyperbel og sirkel, med geometriske data (brennpunkt, toppunkt, akser, halvakser, eksentrisitet); den geometriske brennpunkt-definisjonen (parabel: like langt fra brennpunkt og styrelinje). Gjenkjenn kjeglesnitt-typen fra en andregradslikning $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ (kort — full projektiv klassifikasjon i Del 5). Enkle koordinatskift til standardstilling. Figurforpliktelse (kjernen her): tegn hvert kjeglesnitt i standardstilling med brennpunkt/toppunkt/akser merket.
- **Oppgavesjangre:** E, J. Mønstereksempel: «Tegn parabelen $y^2=8x$; oppgi brennpunkt og styrelinje. Gjenkjenn kjeglesnittet $4x^2+9y^2=36$ og tegn det med halvaksene merket.»
- **Typiske feil:** `(verifiser)` Forveksle $y^2=4px$-parameteren $p$ med brennpunktavstanden; bytte om halvaksene $a,b$; feil brennpunkt for ellipse/hyperbel; tegne kjeglesnittet i feil stilling.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.2: Tangent, korde og diameter — tangentbetingelsen

- **id:** `mat2500-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-4-1`
- **kapitteltype:** teori
- **description:** Tangenter og korder til kjeglesnitt: tangentbetingelsen (innsatt andregradslikning har diskriminant null), tangent fra ytre punkt, korde med gitt stigningstall, og tangent i toppunktet — regnegrunnlaget for locus-oppgavene.
- **Forkunnskaper (kryssbok):** Kap. 4.1. Diskriminant og andregradslikning: *(MAT1100–1110 — ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** tangent; korde; diameter; tangentbetingelse (diskriminant $=0$ etter innsetting); stigningstall $k$; tangeringspunkt.
- **Eksamensbelegg:** Sjanger E + G (~50 %, tung 2015–17), tangentproblemer ~50 % innbakt. `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Tangentbetingelsen:** en linje tangerer et kjeglesnitt ⇔ innsatt gir en andregradslikning med **diskriminant $=0$** (ett dobbelt skjæringspunkt). **Tangent fra ytre punkt:** to tangenter, finn dem ved diskriminant-betingelsen; tangentlengder. **Korde med stigningstall $k$:** finn skjæringspunktene, midtpunkt, lengde. **Diameter** (locus for korde-midtpunkter med fast retning). Regnemodus: sett inn linja i kjeglesnittlikningen, krev diskriminant $=0$. Bro til locus (kap. 4.3): korde-/tangentkonstruksjoner med varierende parameter. Figurforpliktelse: tegn kjeglesnittet med en tangent fra et ytre punkt og en korde.
- **Oppgavesjangre:** E, G, J. Mønstereksempel: «Finn tangentene til sirkelen $x^2+y^2=1$ gjennom punktet $(2,0)$ (tangentbetingelse). For parabelen $y^2=8x$, finn tangenten med stigningstall $1$.»
- **Typiske feil:** `(verifiser)` Sette diskriminanten $\neq0$ (skjærende i stedet for tangerende); regnefeil i diskriminanten; glemme at ytre punkt gir to tangenter; blande korde og tangent.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.3: Geometriske steder (locus) ved parametereliminering

- **id:** `mat2500-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-4-2`
- **kapitteltype:** teori
- **description:** Locus-oppgaven — den tidlige epokens signatur: gitt et varierende element (korde med stigningstall k, radius R, punkt på kurven), finn banen til et avledet punkt (midtpunkt, skjæringspunkt) ved å eliminere parameteren, med grensetilfellene når parameteren går mot 0 eller ∞.
- **Forkunnskaper (kryssbok):** Kap. 4.2.
- **Symbol- og formelliste (collapsible):** geometrisk sted (locus); parameter $k$/$R$; parametereliminering; grensetilfelle $k\to0$, $k\to\infty$; midtpunktbane.
- **Eksamensbelegg:** Sjanger E (~50 %, **kun tidlig epoke 2015–17**, fraværende 2018–20). `(verifiser)`. Prioritet: **kunne** (epokeavhengig).
- **Innholdskontrakt:** **Locus-oppskriften (regnemaskin iii, del A):** (1) parametriser det varierende elementet (korde med stigningstall $k$, radius $R$, punkt $S$ på kurven); (2) uttrykk det avledede punktets koordinater $(x,y)$ ved parameteren; (3) **eliminer parameteren** for å få en likning i $x,y$ alene — det er locus; (4) behandl **grensetilfellene** ($k\to0$, $k\to\infty$: hva skjer med banen, finnes grensepunkter?). Locus-svaret skal ikke ha parameteren stående igjen (regel 1.5.7). Typisk: midtpunktet av en variabel korde, eller skjæringspunktet av to variable linjer. Figurforpliktelse: tegn kjeglesnittet, et par posisjoner av det varierende elementet, og den fremkomne locus-kurven.
- **Oppgavesjangre:** E, J. Mønstereksempel: «En korde gjennom $(2,0)$ med stigningstall $k$ er diameter i en sirkel. Finn sirkelens likning, vis at $x=-2$ tangerer den, og finn locus for kordens midtpunkt når $k$ varierer (eliminer $k$; diskuter $k\to0,\infty$).»
- **Typiske feil:** `(verifiser)` La parameteren stå igjen i locus-svaret (ikke eliminere); glemme grensepunktene; feil parametrisering; blande det varierende og det avledede punktet.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.4: Drill — analytisk kjeglesnitt og locus (regnemaskin iii, del A)

- **id:** `mat2500-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat2500-4-3`
- **kapitteltype:** drill (regnemaskin iii, del A)
- **description:** Den analytiske kjeglesnitt-oppgaven drillet: sett opp sirkel-/kjeglesnittlikninger, bruk tangentbetingelsen, og kjør locus-oppskriften med parametereliminering og grensetilfeller — den tidlige epokens roterende slot A.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.3.
- **Eksamensbelegg:** Dekker sjanger E samlet (~50 %, tidlig epoke). Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) skriv kjeglesnittet/sirkelen på standardform; (2) for tangent: sett inn og krev diskriminant $=0$; (3) for locus: parametriser → uttrykk avledet punkt → eliminer parameter → diskuter grenser. **Gjennomregnet eksamenscase** (parabel + variabel korde + sirkel + locus for midtpunkt) med sensor-margnotater `(verifiser)` (eliminer parameteren, oppgi grensepunktene, tegn figuren). 10–14 oppgaver: minst én tangent fra ytre punkt, én korde-/diameter-oppgave, to locus (midtpunkt og skjæringspunkt), én med eksplisitt grensetilfelle, én figurtung.
- **Oppgavesjangre:** E, G, J. Mønstereksempel: «(a) Finn sirkelen med den variable korden som diameter. (b) Vis at en fast linje tangerer den. (c) Finn locus for midtpunktet og diskuter grensene.»
- **Typiske feil:** Hele fellekatalogen fra 4.1–4.3 under tidspress; parameter ikke eliminert; grensepunkt glemt; diskriminant-fortegn; figur glemt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Kjeglesnitt: projektivt (klassifikasjon og degenerasjon) *(prioritet: PERFEKT-nær — ~80 %; regnemaskin iii del B)*

#### Kapittel 5.1: Kjeglesnitt i det projektive planet som kvadratisk form

- **id:** `mat2500-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-2-2`
- **kapitteltype:** teori
- **description:** Kjeglesnittet skrevet projektivt som Σaᵢⱼxᵢxⱼ = 0 med symmetrisk matrise, koblingen til de analytiske standardformene, og hvordan tangent og pol/polar leses av matrisen — språket sen-epokens kjeglesnittoppgaver bruker.
- **Forkunnskaper (kryssbok):** Kap. 2.2, kap. 4.1. Symmetriske matriser og kvadratiske former: *(MAT1120 — ikke bygget; aktiver lenke)*.
- **Symbol- og formelliste (collapsible):** projektivt kjeglesnitt $x^\top M x=0$, $M$ symmetrisk $3\times3$; kobling til analytisk form via innleiring; tangent i punkt $P$: $[MP]$; degenerasjon $\det M=0$.
- **Eksamensbelegg:** Grunnlaget for sjanger D (~80 %). `(verifiser)`. Prioritet: **perfekt-nær** (høy kunne).
- **Innholdskontrakt:** **Projektivt kjeglesnitt:** $x^\top M x=0$ der $M$ er en symmetrisk $3\times3$-matrise (i homogene koordinater $x=(x_0:x_1:x_2)$); koeffisientene $a_{ij}$ (kryssledd delt likt på $a_{ij}=a_{ji}$). **Kobling til analytisk form:** sett $x_0=1$ (innleiringen fra kap. 2.1) for å få den affine andregradslikningen; motsatt homogeniser en analytisk likning. **Tangent** i et punkt $P$ på kjeglesnittet: linja $MP$ (polaren når $P$ ligger på kurven). **Skjæring kjeglesnitt–linje:** sett inn linjas parametrisering → andregradslikning → diskriminant. Bro til degenerasjon (5.2) via $\det M$. Figurforpliktelse: skisser et projektivt kjeglesnitt og dets affine bilde under innleiringen.
- **Oppgavesjangre:** D, J. Mønstereksempel: «Skriv $M$ for kjeglesnittet $x_1^2-x_0x_2=0$; sett $x_0=1$ og gjenkjenn den affine kurven. Finn tangenten i punktet $(1:1:1)$.»
- **Typiske feil:** `(verifiser)` Ikke dele kryssledd likt inn i $a_{ij}=a_{ji}$ (usymmetrisk $M$); feil homogenisering/innleiring; forveksle tangent i punkt på kurven med polar til ytre punkt; regnefeil i $MP$.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.2: Klassifikasjon og degenerasjon — regnemaskin (iii, del B)

- **id:** `mat2500-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2500-5-1`
- **kapitteltype:** teori (regnemaskin iii, del B)
- **description:** Kjernemaskinen for sen-epokens kjeglesnittoppgaver: klassifiser en parameterfamilie Q_a som ellipse/hyperbel/parabel via snitt med linja i det uendelige, og finn parameterverdien der kjeglesnittet degenererer til to linjer (det M = 0), med de to linjene beskrevet.
- **Forkunnskaper (kryssbok):** Kap. 5.1, kap. 2.1 (linja i det uendelige), kap. 2.3 (determinant).
- **Symbol- og formelliste (collapsible):** parameterfamilie $Q_a$/$C_t$; snitt med linja i det uendelige $x_0=0$; ellipse (ingen reelle uendelige punkter), hyperbel (to), parabel (ett dobbelt); degenerasjon $\det M=0$ → union av to linjer.
- **Eksamensbelegg:** **Kjernen i sjanger D** (~80 %), sen epoke tung. `(verifiser)`. Prioritet: **perfekt-nær**.
- **Innholdskontrakt:** **Klassifikasjonsmaskinen (regnemaskin iii, del B):** gitt en familie $Q_a$: $x^\top M(a) x=0$. (1) **Affin type** via snitt med **linja i det uendelige** ($x_0=0$): sett $x_0=0$ og løs den binære kvadratiske formen i $(x_1,x_2)$ — **ingen** reelle løsninger ⇒ ellipse, **to** ⇒ hyperbel, **ett dobbelt** ⇒ parabel (alternativt: fortegn på ledende $2\times2$-underdeterminant). (2) **Degenerasjon:** kjeglesnittet er degenerert (union av to linjer) ⇔ $\det M(a)=0$; løs for $a$, faktoriser den kvadratiske formen og **beskriv de to linjene**. (3) Dekk **alle** parametertilfeller fullstendig (regel 1.7). Theorem-blokk med algoritme + gjennomregning. **Kobling analytisk↔projektiv:** samme kurve, to språk — vis begge (bro til kap. 4). Figurforpliktelse: tegn en ellipse-, en hyperbel- og et degenerert (to linjer) tilfelle av familien.
- **Oppgavesjangre:** D, J. Mønstereksempel: «For hvilke $a$ er $Q_a$ en ellipse, hhv. en hyperbel (snitt med $x_0=0$)? For hvilken $a$ er $Q_a$ degenerert ($\det M=0$), og hvilke to linjer består den da av?»
- **Typiske feil:** `(verifiser)` Blande ellipse og hyperbel (feil telling av uendelige punkter); ikke bruke linja i det uendelige; overse degenerasjonsverdien ($\det M=0$); ikke beskrive de to linjene; utelate parametertilfeller.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 5.3: Drill — kjeglesnitt-klassifikasjon og degenerasjon (kobling analytisk↔projektiv)

- **id:** `mat2500-5-3` · **number:** 5.3 · **estimatedMinutes:** 80 · **prerequisites:** `mat2500-5-2`
- **kapitteltype:** drill (regnemaskin iii, samlet)
- **description:** Hele kjeglesnitt-maskinen drillet i begge språk: klassifiser en parameterfamilie som ellipse/hyperbel/parabel, finn degenerasjonsverdien og de to linjene, tell skjæringspunkter mot en linje — og oversett mellom analytisk og projektiv form.
- **Forkunnskaper (kryssbok):** Kap. 5.1–5.2, kap. 4.1–4.4.
- **Eksamensbelegg:** Dekker sjanger D samlet (~80 %), pluss koblingen til E (~50 %). Prioritet: **perfekt-nær**.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) skriv $M(a)$ symmetrisk; (2) klassifiser affint via $x_0=0$; (3) degenerasjon via $\det M(a)=0$, faktoriser til to linjer; (4) skjæring mot en gitt linje via innsetting → diskriminant; (5) oversett til/fra analytisk form. **Gjennomregnet eksamenscase** (familie $C_t$: klassifiser for alle $t$, finn degenerasjonen, beskriv linjene, tegn tre representanter) med sensor-margnotater `(verifiser)`. 10–14 oppgaver: minst én full klassifikasjon over parameter, én degenerasjon med to linjer, én skjæring-mot-linje, én analytisk↔projektiv oversettelse, én figurtung.
- **Oppgavesjangre:** D, E, J. Mønstereksempel: «Familien $C_t$ er gitt. (a) Klassifiser som ellipse/hyperbel/parabel for alle $t$. (b) Finn $t$ der $C_t$ degenererer og beskriv de to linjene. (c) Tegn tre representanter.»
- **Typiske feil:** Hele fellekatalogen fra 5.1–5.2 under tidspress; ellipse/hyperbel-forveksling; degenerasjon oversett; kryssledd ikke delt likt; parametertilfeller utelatt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Klassisk plangeometri: Ceva, Menelaos og sirkler *(prioritet: KUNNE — ~65 %, bærer TIDLIG epoke (2015–17); regnemaskin iv)*

#### Kapittel 6.1: Cevas setning — konkurrens av cevianer

- **id:** `mat2500-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-0-2`
- **kapitteltype:** teori (regnemaskin iv, del A)
- **description:** Cevas setning: cevianene AD, BE, CF i en trekant er konkurrente ⇔ produktet av de tre delforholdene er 1 — verktøyet for å bevise at tre linjer møtes i ett punkt, ofte via delforhold fra tangentlengder eller innskrevet sirkel.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Trekantgeometri og delforhold fra VGS: R1-geometri `(verifiser id)`; bevisføring: [Bevis og matematisk argumentasjon](/bok/r2/r2-6-6).
- **Symbol- og formelliste (collapsible):** $\triangle ABC$; cevianer $AD,BE,CF$; delforhold $\tfrac{BD}{DC}$; Cevas betingelse $\tfrac{BD}{DC}\cdot\tfrac{CE}{EA}\cdot\tfrac{AF}{FB}=1$; konkurrens.
- **Eksamensbelegg:** Grunnlaget for sjanger F (~65 %, bærer tidlig epoke). `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Cevas setning:** cevianene $AD, BE, CF$ i $\triangle ABC$ er **konkurrente** ⇔ $\dfrac{BD}{DC}\cdot\dfrac{CE}{EA}\cdot\dfrac{AF}{FB}=1$ (produkt av delforhold, syklisk rekkefølge, positive forhold for indre punkter). Bruk: bevis konkurrens ved å regne ut de tre delforholdene og vise at produktet er $1$; delforholdene kommer ofte fra **tangentlengder** (innskrevet sirkel tangerer i $D,E,F$: like tangentlengder fra hvert hjørne gir delforholdene) eller fra en radiusrelasjon. Bevis-sjanger: sett opp delforholdene korrekt, navngi Ceva, trekk konklusjonen. Theorem-blokk (regnemaskin iv, del A) med bevisskisse. Figurforpliktelse: tegn trekanten med de tre cevianene og fellespunktet.
- **Oppgavesjangre:** F, J. Mønstereksempel: «Den innskrevne sirkelen tangerer sidene i $\triangle ABC$ i $D,E,F$. Vis at $AD, BE, CF$ har et felles punkt (Ceva + tangentlengder).»
- **Typiske feil:** `(verifiser)` Sette opp delforholdene i feil syklisk rekkefølge; bruke $-1$ (Menelaos) der Ceva krever $+1$; ikke navngi teoremet; feil tangentlengde-relasjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.2: Menelaos' setning — kollinearitet med fortegn

- **id:** `mat2500-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat2500-6-1`
- **kapitteltype:** teori (regnemaskin iv, del B)
- **description:** Menelaos' setning: tre punkter på (forlengelsene av) sidene er kollineære ⇔ produktet av de tre delforholdene er −1 (med fortegn) — det duale motstykket til Ceva, og koblingen til harmonisk konjugasjon.
- **Forkunnskaper (kryssbok):** Kap. 6.1, kap. 3.2 (harmonisk konjugasjon).
- **Symbol- og formelliste (collapsible):** Menelaos' betingelse $\tfrac{BD}{DC}\cdot\tfrac{CE}{EA}\cdot\tfrac{AF}{FB}=-1$ (fortegn); kollinearitet; transversal; kobling til harmonisk par.
- **Eksamensbelegg:** Sjanger F (~65 %), Menelaos + harmonisk i H2019. `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Menelaos' setning:** tre punkter på (forlengelsene av) sidene i $\triangle ABC$ er **kollineære** ⇔ $\dfrac{BD}{DC}\cdot\dfrac{CE}{EA}\cdot\dfrac{AF}{FB}=-1$ (med **fortegn** — den avgjørende forskjellen fra Ceva $+1$). **Ceva vs. Menelaos:** $+1$ konkurrens, $-1$ kollinearitet; samme delforhold-oppsett, motsatt fortegn. **Kobling til harmonisk konjugasjon:** Ceva + Menelaos anvendt sammen på $\triangle DKL$ gir at visse punktpar er harmonisk konjugerte $(A,B;C,D)=-1$ (bro til kap. 3.2). Bevis-sjanger: navngi Menelaos, sett opp med korrekt fortegn. Theorem-blokk (regnemaskin iv, del B). Figurforpliktelse: tegn trekanten med en transversal som skjærer de tre sidene.
- **Oppgavesjangre:** F, I, J. Mønstereksempel: «Bruk Menelaos til å vise at tre gitte punkter på sidene i $\triangle ABC$ er kollineære. Bruk deretter Ceva + Menelaos på $\triangle DKL$ til å vise at $(A,B;C,D)$ er harmonisk konjugerte.»
- **Typiske feil:** `(verifiser)` Bruke $+1$ der Menelaos krever $-1$ (fortegnsfeil); feil syklisk rekkefølge; ikke se koblingen til harmonisk par; blande konkurrens (Ceva) og kollinearitet (Menelaos).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.3: Sirkler, tangenter og potens

- **id:** `mat2500-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-6-1`
- **kapitteltype:** teori (regnemaskin iv/vii-innslag)
- **description:** Sirkelkonfigurasjonene: felles tangenter til to sirkler møter sentrallinja i punktet som deler den i forholdet mellom radiene (S₁T/S₂T = r₁/r₂), tangent fra ytre punkt med like tangentlengder, innskrevet sirkel og potens — den tidlige epokens sirkelapparat.
- **Forkunnskaper (kryssbok):** Kap. 6.1, kap. 4.2 (tangentbetingelse).
- **Symbol- og formelliste (collapsible):** sentrallinje $S_1S_2$; felles tangent; forholdet $\tfrac{S_1T}{S_2T}=\tfrac{r_1}{r_2}$; tangentlengde fra ytre punkt; innskrevet sirkel; potens av et punkt.
- **Eksamensbelegg:** Sjanger G (~50 %, innbakt i tidlig epoke). `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Felles tangenter til to sirkler:** de skjærer sentrallinja $S_1S_2$ i et punkt $T$ som deler den i forholdet mellom radiene, $\dfrac{S_1T}{S_2T}=\dfrac{r_1}{r_2}$ (likedannede trekanter — bevises). **Tangent fra ytre punkt:** to tangenter, like tangentlengder. **Innskrevet sirkel:** tangeringspunkter, tangentlengder fra hvert hjørne (kobler til Ceva, kap. 6.1). **Potens av et punkt** mhp. en sirkel (skjæring/tangent). Bevis-sjanger: $S_1T/S_2T=r_1/r_2$ via likedannethet. Figurforpliktelse: tegn to sirkler med felles tangenter og punktet $T$ på sentrallinja.
- **Oppgavesjangre:** G, J. Mønstereksempel: «To sirkler med $r_1+r_2<S_1S_2$ har felles ytre tangenter som skjærer sentrallinja i $T$. Vis at $S_1T/S_2T=r_1/r_2$. Finn tangentene til $x^2+y^2=1$ fra $(2,0)$.»
- **Typiske feil:** `(verifiser)` Feil likedannethet/forhold; forveksle indre og ytre tangent; glemme at tangentlengdene fra ett ytre punkt er like; regnefeil i potens.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.4: Drill — Ceva/Menelaos-konkurrens (regnemaskin iv)

- **id:** `mat2500-6-4` · **number:** 6.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat2500-6-3`
- **kapitteltype:** drill (regnemaskin iv, samlet)
- **description:** Konkurrens- og kollinearitetsapparatet drillet: sett opp delforholdene i riktig syklisk rekkefølge og fortegn, bruk Ceva (+1) for konkurrens og Menelaos (−1) for kollinearitet, hent delforhold fra tangentlengder/radier — den tidlige epokens roterende slot A.
- **Forkunnskaper (kryssbok):** Kap. 6.1–6.3.
- **Eksamensbelegg:** Dekker sjanger F + G samlet (~65 %, tidlig epoke). Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) identifiser om det er konkurrens (Ceva, $+1$) eller kollinearitet (Menelaos, $-1$); (2) sett opp de tre delforholdene i syklisk rekkefølge; (3) hent delforholdene (tangentlengder, radier, gitte punkter); (4) regn produktet og konkluder med navngitt teorem. **Gjennomregnet eksamenscase** (innskrevet sirkel → Ceva-konkurrens, deretter en transversal → Menelaos-kollinearitet → harmonisk par) med sensor-margnotater `(verifiser)` (riktig fortegn, syklisk rekkefølge, teorem navngitt). 10–14 oppgaver: minst to Ceva-konkurrens (én med tangentlengder), to Menelaos-kollinearitet, én kombinert Ceva+Menelaos → harmonisk, én sirkel/tangent (6.3), én figurtung.
- **Oppgavesjangre:** F, G, I, J. Mønstereksempel: «(a) Vis at cevianene til tangeringspunktene for innskrevet sirkel er konkurrente (Ceva). (b) Vis at tre gitte punkter er kollineære (Menelaos). (c) Utled et harmonisk par.»
- **Typiske feil:** Hele fellekatalogen fra 6.1–6.3 under tidspress; Ceva/Menelaos-fortegn; syklisk rekkefølge; teorem ikke navngitt; tangentlengde-relasjon feil.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Polyedre, Platonske legemer og romlige rotasjonsgrupper *(prioritet: KUNNE — ~50 %, kun SEN epoke (2018–20); regnemaskin v)*

#### Kapittel 7.1: Isometrier i E³, rotasjoner om akse og regulære legemer

- **id:** `mat2500-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-1-1`
- **kapitteltype:** teori
- **description:** Geometri i rommet: isometrier og rotasjoner om en akse i E³, konvekse polyedre, og kriteriet for regulære (Platonske) legemer — kongruente likesidede sideflater OG samme antall flater i hvert hjørne (den kritiske «hjørnebetingelsen»).
- **Forkunnskaper (kryssbok):** Kap. 1.1 (isometrier i planet), kap. 1.4 (symmetrigrupper). Vektorer i rommet: [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Symbol- og formelliste (collapsible):** $E^3$; rotasjon om akse; konvekst polyeder; regulært (Platonsk) legeme; sideflate, kant, hjørne; kongruente likesidede trekanter; hjørnebetingelse (samme antall flater i hvert hjørne).
- **Eksamensbelegg:** Grunnlaget for sjanger H (~50 %, **kun sen epoke 2018–20**), polyeder i H2018/H2020. `(verifiser)`. Prioritet: **kunne** (epokeavhengig).
- **Innholdskontrakt:** **Isometrier i $E^3$:** rotasjoner om en akse, speilinger i plan, kongruens. **Konvekse polyedre:** hjørner, kanter, flater. **Regulært (Platonsk) legeme:** sideflatene er **kongruente regulære mangekanter** OG det møtes **samme antall flater i hvert hjørne** — begge betingelser kreves. Den kritiske fella (analysen §5.10, H2018): kongruente likesidede sideflater er **ikke nok** — også hjørnene må være like. De fem Platonske legemene som konsekvens (kort — telles via Euler i 7.2). Konstruksjon: dobbeltpyramide / konveks innhylling, finn parameteren som gjør sideflatene til kongruente likesidede trekanter. Bevis-sjanger: forklar hvorfor et gitt legeme *ikke* er regulært (hjørnebetingelsen brutt). Figurforpliktelse: tegn/skisser en dobbeltpyramide og marker hjørner der ulikt antall flater møtes.
- **Oppgavesjangre:** H, J. Mønstereksempel: «For hvilken $a$ har den doble pyramiden over en regulær $n$-kant kongruente likesidede sideflater? Er den da et regulært legeme? Begrunn (hjørnebetingelsen).»
- **Typiske feil:** `(verifiser)` Anta at kongruente likesidede sideflater er nok for regularitet (glemme hjørnebetingelsen); feil parameter for likesidede flater; blande sideflate-kongruens og hjørne-likhet.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 7.2: Eulers polyederformel V − E + F = 2 og telling

- **id:** `mat2500-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-7-1`
- **kapitteltype:** teori (regnemaskin v, del A)
- **description:** Eulers formel V − E + F = 2 som telleverktøy: kombinert med at hver flate har et fast antall kanter og hver kant deles av to flater, løser du for antall sideflater, kanter og hjørner — og skiller trekant- fra firkantflater.
- **Forkunnskaper (kryssbok):** Kap. 7.1.
- **Symbol- og formelliste (collapsible):** Eulers formel $V-E+F=2$; $V$ hjørner, $E$ kanter, $F$ flater; hver kant deles av to flater ($2E=\sum$ flatekanter); hver trekant har 3 kanter, firkant 4.
- **Eksamensbelegg:** Sjanger H (~50 %, sen epoke), Euler-polyeder i H2019. `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Eulers polyederformel:** $V-E+F=2$ for et konvekst polyeder. **Tellerelasjoner:** hver kant deles av nøyaktig to flater, så $2E=3F_3+4F_4+\dots$ (der $F_k$ = antall $k$-kant-flater); hvert hjørne har et antall kanter. Løs lineære systemer for $V,E,F$ og for fordelingen trekant-/firkantflater. Klassifikasjonen av de fem Platonske legemene som anvendelse (hvorfor bare fem). Bevis-/regnesjanger: sett opp Euler + tellerelasjonene og løs. Theorem-blokk (regnemaskin v, del A). Figurforpliktelse: tegn et polyeder og tell $V,E,F$ eksplisitt.
- **Oppgavesjangre:** H, J. Mønstereksempel: «Et konvekst polyeder har 12 hjørner og 24 kanter. Hvor mange sideflater (Euler)? Hvis alle flater er trekanter eller firkanter, hvor mange av hver?»
- **Typiske feil:** `(verifiser)` Feil telling av $V,E,F$; glemme at hver kant deles av to flater (dobbelttelle); feil oppsett av $2E=\sum kF_k$; regnefeil i det lineære systemet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.3: Romlige rotasjonsgrupper — regnemaskin (v, del B)

- **id:** `mat2500-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat2500-7-1`
- **kapitteltype:** teori (regnemaskin v, del B)
- **description:** Rotasjonsgruppen til et polyeder: alle rotasjoner av E³ som bevarer legemet, dens orden og struktur, og at den ofte er isomorf med symmetrigruppen (Dₙ) til grunnflaten — gruppeteori-språket sen-epokens polyederoppgaver krever.
- **Forkunnskaper (kryssbok):** Kap. 7.1, kap. 1.4 ($D_n$/$C_n$).
- **Symbol- og formelliste (collapsible):** rotasjonsgruppe (alle rotasjoner som bevarer legemet); orden; isomorfi $\cong$; $D_n$ (grunnflatens symmetrigruppe); akser (hoved-/side-).
- **Eksamensbelegg:** Sjanger H (~50 %, sen epoke), rotasjonsgruppe i H2018/H2020. `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Rotasjonsgruppen** til et polyeder = alle rotasjoner av $E^3$ som avbilder legemet på seg selv; finn **orden** (tell rotasjonsaksene og rotasjonene om hver) og **struktur** (ofte isomorf med grunnflatens symmetrigruppe $D_n$). For en dobbeltpyramide over en regulær $n$-kant: rotasjonsgruppen er isomorf med $D_n$ (rotasjoner om hovedaksen + halvomdreininger om sideakser). Konkret $n=3$: beskriv gruppen. Bevis-sjanger: identifiser gruppen opp til isomorfi ved å telle og gjenkjenne struktur. Theorem-blokk (regnemaskin v, del B). Figurforpliktelse: tegn legemet med rotasjonsaksene inntegnet.
- **Oppgavesjangre:** H, J. Mønstereksempel: «Beskriv rotasjonsgruppen til den doble pyramiden over en likesidet trekant ($n=3$): orden, akser og hvilken kjent gruppe den er isomorf med.»
- **Typiske feil:** `(verifiser)` Telle rotasjonsaksene/rotasjonene feil (glemme sideakser eller identiteten); feil orden; ikke gjenkjenne isomorfien med $D_n$; blande rotasjonsgruppe (kun rotasjoner) med full symmetrigruppe (med speilinger).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 7.4: Drill — polyeder, Eulers formel og rotasjonsgruppe (regnemaskin v)

- **id:** `mat2500-7-4` · **number:** 7.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat2500-7-3`
- **kapitteltype:** drill (regnemaskin v, samlet)
- **description:** Hele polyeder-oppgaven drillet: avgjør når en konstruksjon er et regulært legeme (hjørnebetingelsen), tell V/E/F og flatetyper med Euler, og identifiser rotasjonsgruppen opp til isomorfi — den sene epokens roterende slot B.
- **Forkunnskaper (kryssbok):** Kap. 7.1–7.3.
- **Eksamensbelegg:** Dekker sjanger H samlet (~50 %, sen epoke). Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) sjekk regularitet (kongruente regulære flater OG hjørnebetingelsen); (2) tell $V,E,F$ med Euler + $2E=\sum kF_k$; (3) identifiser rotasjonsgruppen (orden + isomorfi med $D_n$). **Gjennomregnet eksamenscase** (dobbeltpyramide: parameter for likesidede flater → regulær? → $V,E,F$ → rotasjonsgruppe for $n=3$) med sensor-margnotater `(verifiser)` (hjørnebetingelsen, korrekt telling, isomorfi begrunnet). 10–14 oppgaver: minst én regularitets-avgjørelse (med hjørnebetingelse-fella), to Euler-tellinger (én med trekant/firkant-fordeling), to rotasjonsgruppe-identifikasjoner, én figurtung.
- **Oppgavesjangre:** H, J. Mønstereksempel: «(a) For hvilken $a$ er dobbeltpyramiden regulær? Begrunn. (b) Tell $V,E,F$. (c) Beskriv rotasjonsgruppen for $n=4$.»
- **Typiske feil:** Hele fellekatalogen fra 7.1–7.3 under tidspress; hjørnebetingelsen glemt; Euler-telling feil; rotasjonsgruppe-orden feil; isomorfi ikke begrunnet.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Sjangerkonsolidering — de seks maskinene og føringsverkstedet

- **id:** `mat2500-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `mat2500-7-4`
- **kapitteltype:** teori (konsolidering)
- **description:** Hele apparatet samlet: de seks regnemaskinene i kortform (isometri-klassifikasjon, projektiv kryssprodukt, kjeglesnitt analytisk↔projektivt, Ceva/Menelaos, polyeder/Euler+rotasjonsgruppe, kryssforhold/pol–polar), de fire modiene (regne/bevise/tegne/konstruere), teoremnavn-banken og en epokebevisst eksamensstrategi.
- **Forkunnskaper (kryssbok):** Hele boka (kap. 0.1–7.4).
- **Symbol- og formelliste (collapsible):** samlet notasjonskart ($E^2/E^3$, $(x_0:x_1:x_2)$, $s_\ell$, $\rho$, $t_a$, $\times$, $M$, $(A,B;C,D)$, $V-E+F$, $D_n/C_n$) + de seks maskinenes kjerneformler.
- **Eksamensbelegg:** Konsolideringskapittel — bygger på hele arkivet. Repeterer frekvenser, epokeskiftet og de utledede sensorreglene. Prioritet: **perfekt** (oppsummering).
- **Innholdskontrakt:** **De seks maskinene i kortform** (hver med sin ett-linjes oppskrift + navngitt teorem): (i) isometri — orientering + fikspunkt → type + data; (ii) projektiv — skjæring $a\times b$, linje $P\times Q$, insidens; (iii) kjeglesnitt — analytisk locus/tangent ↔ projektiv klassifikasjon ($x_0=0$) / degenerasjon ($\det M=0$); (iv) Ceva $+1$ / Menelaos $-1$; (v) Euler $V-E+F=2$ + rotasjonsgruppe $\cong D_n$; (vi) kryssforhold/harmonisk $-1$/pol–polar-gjensidighet. **Føringsverkstedet:** de fire modiene med sjekklister (les verbet: finn/vis/tegn/konstruer), teoremnavn-bank (Ceva, Menelaos, Euler, speilingssammensetning, gjensidighetsprinsippet), eksakt-svar-krav, figur-teller-regelen. **Epokebevisst strategi:** de to konstante maskinene sitter uansett; forbered begge roterende slotene (tidlig: klassisk plangeometri/locus; sen: polyeder/projektiv dualitet). Denne konsolideringen er studieguidens kjerne (§5).
- **Oppgavesjangre:** Blandet, korte diagnostiske: «hvilken maskin og modus krever denne deloppgaven?» × flere; én av hver maskin i kortform.
- **Typiske feil:** `(verifiser)` De tverrgående metafeilene samlet: feil modus for verbet; dobbel-vinkel; kryssprodukt-fortegn; ellipse/hyperbel-forveksling; Ceva/Menelaos-fortegn; hjørnebetingelsen; parameter ikke eliminert; teorem ikke navngitt; figur glemt.
- **Quiz: 14 · Flashcards: 30** (de seks maskinene, teoremnavn-bank, de fire modiene, epokestrategi, samlet notasjonskart — den rene pugge-oppsummeringen)

#### Kapittel 8.2: Øvingseksamen 1 — tidlig-epoke-profil (2015–17)

- **id:** `mat2500-8-2` · **number:** 8.2 · **estimatedMinutes:** 90 · **prerequisites:** `mat2500-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i tidlig-epoke-profil (ingen hjelpemidler, eksakte svar): isometri-åpning, projektiv koordinatgeometri, klassisk plangeometri (Ceva/sirkler) og analytisk kjeglesnitt med locus — med fullt løsningsforslag i riktig modus.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler en «typisk» tidlig-epoke-eksamen (analysen §2/§7). Nyskrevne oppgaver, eksakte svar, ingen hjelpemidler. Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** 4 oppgaver med deloppgaver a–e, lik vekt: **O1** isometri (sett sammen speilinger → klassifiser med data → tegn + beskriv symmetrigruppe, sjanger A+B); **O2** projektiv koordinatgeometri (skjæring/forbindelseslinje via kryssprodukt + insidens/kollinearitet, sjanger C); **O3** klassisk plangeometri (Ceva-konkurrens fra innskrevet sirkel + Menelaos, sjanger F+G); **O4** analytisk kjeglesnitt (sirkel/parabel + tangent + locus med parametereliminering, sjanger E). Fullt løsningsforslag per oppgave i eget `collapsible`, skrevet i riktig modus (regne/bevise/tegne), med `tip`-notat om vekting/delpoeng `(verifiser)`. Figurbeskrivelser der oppgaven ber om figur.
- **Oppgavesjangre:** A, B, C, E, F, G, J (tidlig-epoke-miks).
- **Typiske feil:** Samlet fra de fire modiene under tidspress; se 8.1.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2 — sen-epoke-profil (2018–20)

- **id:** `mat2500-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat2500-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i sen-epoke-profil: isometri-åpning, projektiv koordinatgeometri, polyeder/romlig rotasjonsgruppe (Euler) og projektiv dualitet (kryssforhold, harmonisk konjugasjon, pol–polar med linjal-konstruksjon) — med fullt løsningsforslag.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler en «typisk» sen-epoke-eksamen (analysen §2/§7). Nyskrevne oppgaver, eksakte svar. Prioritet: **perfekt**.
- **Innholdskontrakt:** 4 oppgaver a–e, lik vekt: **O1** isometri (klassifikasjon inkl. glidespeiling + symmetrigruppe, sjanger A+B); **O2** projektivt kjeglesnitt (klassifikasjon ellipse/hyperbel via $x_0=0$ + degenerasjon $\det M=0$, sjanger C+D); **O3** polyeder (dobbeltpyramide: regularitet + hjørnebetingelse + Euler-telling + rotasjonsgruppe, sjanger H); **O4** projektiv dualitet (kryssforhold + harmonisk konjugasjon + pol–polar-gjensidighet + linjal-konstruksjon, sjanger I+K). Fullt løsningsforslag per oppgave i `collapsible` i riktig modus, med `tip`-notat om vekting `(verifiser)`. Konstruksjons- og figurbeskrivelser der bedt om.
- **Oppgavesjangre:** A, B, C, D, H, I, K, J (sen-epoke-miks).
- **Typiske feil:** Samlet under tidspress; se 8.1.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3 — blandet, vanskeligste varianter

- **id:** `mat2500-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat2500-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett som blander begge epoker og de vanskeligste variantene av hver maskin — de to garanterte åpningene pluss ett tema fra hver roterende slot, med topp-poeng-varianter (generelle bevis, locus-grenser, rotasjonsgruppe opp til isomorfi).
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Bredde-/dybdetrening — dekker sjangrene som 8.2/8.3 ikke rakk, på toppsjikt-nivå. Prioritet: **perfekt**.
- **Innholdskontrakt:** 4–5 oppgaver a–e: **O1** isometri (rekkefølge-test $s_1\circ s_2$ vs. $s_2\circ s_1$ + $t_a\circ\rho$ + symmetrigruppe, sjanger A+B); **O2** projektiv koordinatgeometri + projektivt kjeglesnitt kjedet (sjanger C+D); **O3** blandet slot A (analytisk locus med grensetilfeller ELLER Ceva/Menelaos → harmonisk, sjanger E/F+I); **O4** blandet slot B (polyeder + rotasjonsgruppe ELLER pol–polar generelt bevis, sjanger H/I); topp-poeng-deler ber om **generelle bevis** (gjensidighetsprinsippet, konkurrens for vilkårlig konfigurasjon). Fullt løsningsforslag i `collapsible`, riktig modus, `tip` om vekting `(verifiser)`. Til sammen dekker 8.2–8.4 samtlige sjangre A–K minst én gang, begge epoker, begge kjeglesnitt-språk, og alle fire modiene.
- **Oppgavesjangre:** A–K (full bredde, toppsjikt).
- **Typiske feil:** Samlet under tidspress; toppsjikt-fellene (generelt bevis vs. konkret tall, locus-grenser, isomorfi); se 8.1.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — de tre øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 10+12+12 = **34** | 14+20+18 = **52** |
| 1 | 1.1–1.5 | 18+20+18+18+16 = **90** | 24+24+22+22+8 = **100** |
| 2 | 2.1–2.4 | 18+20+18+16 = **72** | 24+22+20+8 = **74** |
| 3 | 3.1–3.3 | 16+16+16 = **48** | 22+22+22 = **66** |
| 4 | 4.1–4.4 | 18+18+16+16 = **68** | 24+20+20+8 = **72** |
| 5 | 5.1–5.3 | 18+20+16 = **54** | 24+26+8 = **58** |
| 6 | 6.1–6.4 | 18+16+18+16 = **68** | 22+20+22+8 = **72** |
| 7 | 7.1–7.4 | 18+18+16+16 = **68** | 26+22+20+8 = **76** |
| 8 | 8.1–8.4 | 14+6+6+6 = **32** | 30+0+0+0 = **30** |
| **Sum** | **34 kap.** | **534 ≥ 500 ✓** | **600 (mål 580–620) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er moderat-høy (600):** MAT2500 er et **bredt, teorem- og
begrepsrikt geometrifag** — apparatet spenner over fem felt (euklidsk, klassisk,
analytisk, projektiv, romlig) med mange navngitte teoremer (Ceva, Menelaos,
Eulers formel, speilingssammensetning, gjensidighetsprinsippet), notasjonskart
($E^2/E^3$, homogene koordinater, $s_\ell/\rho/t_a$, $(A,B;C,D)$, $V-E+F$,
$D_n/C_n$) og figur-/konstruksjonsvokabular som må sitte utenat (normalt ingen
hjelpemidler). De to garanterte maskinene bærer mest: **Del 1 (isometrier) 100
flashcards / 90 quiz** og **Del 2 (projektiv) 74/72** er tyngst, som seg hør og
bør for de eneste konstante temaene. Sen-epokens skille-stoff (Del 3
kryssforhold/pol–polar) har høy flashcard-tetthet per kapittel (22 hver) fordi
det er topp-poeng-begreper. Drillkapitlene holdes lave på flashcards (8) fordi
deres verdi er oppgaver, ikke kort; øvingseksamenene har 0 flashcards og 6 quiz
hver. Kap. 8.1 (de seks maskinene + teoremnavn-bank) har høyest flashcard-tetthet
(30) — den rene pugge-oppsummeringen. Quiz-fordelingen speiler eksamensvektene:
**de to garanterte maskinene (Del 1+2) bærer 162 av 534 quiz**; kjeglesnitt
(Del 4+5) 122; de roterende slotene og skille-stoffet (Del 3, 6, 7) 184; meta +
konsolidering (Del 0, 8.1) 48; øvingseksamener 18.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag i
riktig modus (regne/bevise/tegne/konstruere), eksakte svar og — der oppgaven ber
om det — figurbeskrivelse. Fordi arkivet mangler fasit, merkes vekting/delpoeng
`(verifiser)`. Legges som prøvekapitler (`mat2500-<del>-prove`, chapterNumber
`<del>.P`) etter plattformens mønster. Hver prøve angir hvilken sjanger og modus
den trener.

**Del 1 — Isometrier i planet**
1. Prøve 1.A (35 min): De fire typene + speilingssammensetning → rotasjon/translasjon med data (kap. 1.1–1.2, sjanger A).
2. Prøve 1.B (40 min): Klassifikasjon — glidespeiling (akse+vektor) + $t_a\circ\rho$ nytt sentrum + rekkefølge-test (kap. 1.3, sjanger A).
3. Prøve 1.C (35 min): Symmetrigrupper — tegn $G=F\cup\sigma(F)$ og beskriv $D_n$/$C_n$ (kap. 1.4, sjanger B+J).
4. Prøve 1.D (45 min): Oppgave 1-simulering — to–tre speilinger + translasjon → klassifiser + symmetrigruppe-figur kjedet (kap. 1.1–1.5, sjanger A+B).

**Del 2 — Projektiv koordinatgeometri**
1. Prøve 2.A (35 min): Homogene koordinater + innleiring + linja i det uendelige + insidens (kap. 2.1, sjanger C).
2. Prøve 2.B (40 min): Kryssprodukt-maskinen — skjæring $a\times b$ + forbindelseslinje $P\times Q$ + insidens-sjekk (kap. 2.2, sjanger C).
3. Prøve 2.C (35 min): Kollinearitet/konkurrens via determinant + dualitetsprinsippet (kap. 2.3, sjanger C).
4. Prøve 2.D (45 min): Den projektive oppgaven simulert — skjæringer + forbindelseslinje + kollinearitet + uendelig punkt kjedet (kap. 2.1–2.4, sjanger C).

**Del 3 — Kryssforhold, harmonisk konjugasjon og pol–polar**
1. Prøve 3.A (35 min): Kryssforhold $(A,B;C,D)$ — beregning + invarians + uendelig punkt (kap. 3.1, sjanger I).
2. Prøve 3.B (40 min): Harmonisk konjugasjon — finn $D$ med $(A,B;C,D)=-1$ + linjal-konstruksjon (komplett firkant) (kap. 3.2, sjanger I+K).
3. Prøve 3.C (40 min): Pol–polar mhp. sirkel + gjensidighetsprinsippet (generelt bevis) (kap. 3.3, sjanger I).
4. Prøve 3.D (40 min): Projektiv dualitet-tverrsnitt — kryssforhold + harmonisk + pol–polar kjedet (kap. 3.1–3.3, sjanger I+K).

**Del 4 — Kjeglesnitt analytisk (locus og tangent)**
1. Prøve 4.A (35 min): Standardformer + brennpunkt/toppunkt/akser + figur (kap. 4.1, sjanger E+J).
2. Prøve 4.B (40 min): Tangentbetingelse (diskriminant $=0$) + tangent fra ytre punkt + korde (kap. 4.2, sjanger E+G).
3. Prøve 4.C (40 min): Locus — parametereliminering + grensetilfeller (kap. 4.3, sjanger E).
4. Prøve 4.D (45 min): Slot A-simulering (tidlig epoke) — sirkel/parabel + tangent + locus for midtpunkt kjedet (kap. 4.1–4.4, sjanger E+G).

**Del 5 — Kjeglesnitt projektivt (klassifikasjon og degenerasjon)**
1. Prøve 5.A (35 min): Kjeglesnitt som kvadratisk form + homogenisering + tangent via $MP$ (kap. 5.1, sjanger D).
2. Prøve 5.B (40 min): Klassifikasjon ellipse/hyperbel/parabel via $x_0=0$ (alle parametertilfeller) (kap. 5.2, sjanger D).
3. Prøve 5.C (40 min): Degenerasjon $\det M=0$ + de to linjene + skjæring mot linje (kap. 5.2–5.3, sjanger D).
4. Prøve 5.D (45 min): Analytisk↔projektiv-tverrsnitt — samme kurve i begge språk + full klassifikasjon over parameter (kap. 5.1–5.3, sjanger D+E).

**Del 6 — Klassisk plangeometri: Ceva, Menelaos og sirkler**
1. Prøve 6.A (35 min): Cevas setning — konkurrens fra innskrevet sirkel/tangentlengder (kap. 6.1, sjanger F).
2. Prøve 6.B (40 min): Menelaos' setning — kollinearitet med fortegn + kobling til harmonisk par (kap. 6.2, sjanger F+I).
3. Prøve 6.C (40 min): Sirkler & tangenter — $S_1T/S_2T=r_1/r_2$ (bevis) + tangent fra ytre punkt (kap. 6.3, sjanger G).
4. Prøve 6.D (45 min): Slot A-simulering (tidlig epoke) — Ceva + Menelaos + sirkelkonfigurasjon kjedet (kap. 6.1–6.4, sjanger F+G).

**Del 7 — Polyedre, Platonske legemer og romlige rotasjonsgrupper**
1. Prøve 7.A (35 min): Regulært legeme — likesidede flater + hjørnebetingelsen (hvorfor ikke regulært) (kap. 7.1, sjanger H).
2. Prøve 7.B (40 min): Eulers formel + telling av $V,E,F$ + trekant-/firkantfordeling (kap. 7.2, sjanger H).
3. Prøve 7.C (40 min): Rotasjonsgruppe — orden + isomorfi med $D_n$ (kap. 7.3, sjanger H).
4. Prøve 7.D (45 min): Slot B-simulering (sen epoke) — dobbeltpyramide: regularitet + Euler + rotasjonsgruppe kjedet (kap. 7.1–7.4, sjanger H).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Form den speiler | Miks (4–5 oppgaver a–e, ingen hjelpemidler, eksakte svar) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Tidlig epoke (2015–17) | A+B(O1 isometri) + C(O2 projektiv) + F+G(O3 klassisk plangeometri) + E(O4 analytisk locus) |
| Øvingseksamen 2 (kap. 8.3) | Sen epoke (2018–20) | A+B(O1) + C+D(O2 projektivt kjeglesnitt) + H(O3 polyeder/rotasjonsgruppe) + I+K(O4 projektiv dualitet) |
| Øvingseksamen 3 (kap. 8.4) | Blandet, vanskeligste varianter | A+B(O1 rekkefølge/$t_a\circ\rho$) + C+D(O2 kjedet) + E/F+I(O3 slot A) + H/I(O4 slot B, generelle bevis) |

Til sammen dekker de tre settene samtlige sjangre **A–K** minst én gang, **begge
epoker**, **begge kjeglesnitt-språk** (analytisk og projektivt), og alle **fire
modiene** (regne, bevise, tegne, konstruere — linjal-konstruksjonen eksplisitt i
8.3 O4). De to garanterte maskinene (isometri-åpning + projektiv koordinatregning)
åpner alle tre settene, slik reelle sett gjør.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kap. 8.1 (de seks maskinene) +
kapitlenes Eksamensvinkel-blokker:

1. **Det stabile formatet og den blandede sjangeren** — vurderingsformen (4-timers
   skriftlig skoleeksamen, normalt ingen hjelpemidler, karakter A–F, norsk bokmål,
   obligatorisk prosjektoppgave), de fire modiene (regne/bevise/tegne/konstruere)
   og hovedfunnet: to maskiner er garantert, resten roterer mellom to epoker
   (fra kap. 0.1–0.2). Ærlighetsforbeholdet: 6 sett, ingen fasit — alt utledet
   `(verifiser)`.
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 1 isometrier ~100 %, Del 2 projektiv ~100 %, Del 5 projektivt
   kjeglesnitt ~80 %), **kunne** (Del 4 analytisk kjeglesnitt/locus, Del 6 klassisk
   plangeometri, Del 7 polyedre — epokeavhengige roterende slot), **kjenne** (Del 3
   kryssforhold/pol–polar — sen epoke, skille-stoff) — med notatet om at de to
   konstante maskinene sitter uansett, mens begge epokeprofiler må forberedes.
3. **Sjangerguiden (de seks maskinene)** — A–K med løsningsoppskriftene fra
   drillkapitlene (1.5, 2.4, 4.4, 5.3, 6.4, 7.4) i kortform (fra kap. 8.1).
4. **Figur- og konstruksjonsguiden** — hvordan du tegner en korrekt, forklarende
   figur (figuren teller) og utfører linjal-konstruksjonene (harmonisk konjugat via
   komplett firkant) — fra kap. 0.3.
5. **Sensorreglene (utledet, `(verifiser)`)** — riktig svar OG begrunnelse (les
   verbet); klassifikasjon navngitt med alle data (sentrum+vinkel, linje+vektor,
   ellipse/hyperbel/degenerert); teoremer navngitt (Ceva $+1$, Menelaos $-1$,
   Euler, gjensidighetsprinsippet); figur teller når bedt om; alle
   parametertilfeller dekket; locus-parameter eliminert; svar eksakte — pluss
   karakterskille-listen (bestått/midt/topp).
6. **Feilkatalogen** — de 10 typiske feilene fra analysen §5 samlet (dobbel-vinkel
   ved speilingssammensetning, rotasjon/translasjon-forveksling, ufullstendig
   klassifikasjon, kryssprodukt-fortegn, ellipse/hyperbel-forveksling,
   Ceva/Menelaos-fortegn, locus uten eliminering, glemt/feil figur, Euler-telling,
   hjørnebetingelsen for regulært legeme), hver med henvisning til kapitlet som
   forebygger den — alt merket `(verifiser)`.
7. **Teorem- og notasjonsliste i emnets notasjon** — apparatet fra
   innholdskontraktene ($E^2/E^3$; isometriene + speilingssammensetnings-teoremet;
   homogene koordinater + kryssprodukt-dualitet; kjeglesnitt analytisk +
   projektivt ($M$, $x_0=0$, $\det M=0$); Ceva/Menelaos; Eulers formel +
   rotasjonsgrupper; kryssforhold/harmonisk/pol–polar) — med markering *utlede/
   kunne aktivt* vs. *kun bruke*, og påminnelsen om at **alt må kunnes utenat**
   (normalt ingen hjelpemidler, eksakte svar).
8. **Studieløp** — semesterplan: Del 0 (føring + figur/konstruksjon) → **Del 1
   (isometri-åpningen — garantert Oppgave 1, drill til refleks)** → **Del 2
   (projektiv koordinatregning — den andre garanterte maskinen)** → Del 4–5
   (kjeglesnitt begge språk, ~90 %) → Del 6 (klassisk plangeometri, tidlig slot A)
   → Del 7 (polyedre, sen slot B) → Del 3 (kryssforhold/pol–polar, sen skille-stoff)
   → temaprøvene → kap. 8.1 (sjangerkonsolidering) → de tre øvingseksamenene under
   tidspress (4 timer, ingen hjelpemidler, én tidlig-profil, én sen-profil, én
   blandet). Notat: prosjektoppgaven (obligatorisk, må godkjennes) trenes ikke her,
   men studieguiden minner om at den kreves for å gå opp.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat2500` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames`
   fra §2-tabellen (del-nummer → seksjonstittel). **`number` SKAL være del-basert**
   («2.2», ALDRI lineær «8») — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser i innholdet bruker samme del-baserte form («kap. 2.2»).
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene A–K, frekvenstallene, de
   fire modiene og figur-/konstruksjonshåndverket som resten refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: **Del 1 (isometrier — garantert
   Oppgave 1)** → **Del 2 (projektiv koordinatgeometri — den andre garanterte
   maskinen; forutsetning for Del 3 og Del 5)**.
4. **Dualitet og kjeglesnitt**: Del 3 (kryssforhold/pol–polar; krever Del 2.2–2.3,
   og 3.3 forutgriper kjeglesnitt-matrisen fra 5.1) → Del 4 (analytisk kjeglesnitt;
   selvstendig fra kap. 0) → Del 5 (projektivt kjeglesnitt; krever Del 2.2 + 5.1
   bygger på 4.1). **Merk avhengighet:** 3.3 (pol–polar) refererer kjeglesnitt-
   matrisen $M$ fra 5.1 — bygg 5.1 før 3.3, eller la 3.3 introdusere $M$ lokalt og
   krysslenke. Anbefalt byggerekkefølge: Del 4 → Del 5 → Del 3 (så $M$ finnes når
   pol–polar bygges), selv om leserekkefølgen i boka er Del 3 → 4 → 5.
5. **De roterende slotene**: Del 6 (klassisk plangeometri; 6.2 krever 3.2 for
   harmonisk-koblingen) → Del 7 (polyedre; 7.1 krever 1.1+1.4, 7.3 krever 1.4).
6. **Del 8** til slutt (sjangerkonsolidering 8.1 + de tre øvingseksamenene 8.2–8.4
   som gjenbruker alt og må dekke A–K, begge epoker, begge kjeglesnitt-språk og
   alle fire modiene). Temaprøvene (§4) legges som prøvekapitler
   (`mat2500-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster, én
   per temadel 1–7 (28 stk).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 1 (5 kap.) er den største** —
hold den samlet hos én agent. Del 3 og Del 5 bygges av samme eller koordinerte
agenter pga. $M$-avhengigheten (pol–polar ↔ kjeglesnitt-matrise); begge må lese
HELE kontraktene til Del 2, 3 og 5. Del 6 bygges av en agent som også leser 3.2
(harmonisk-koblingen). Øvingseksamenene (8.2–8.4) bygges av én agent som leser
HELE skjelettet (de gjenbruker alle sjangre og begge epoker).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + emnets notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent notasjon: $E^2$, $E^3$, $\mathbb{RP}^2$,
      homogene koordinater $(x_0:x_1:x_2)$, $s_\ell$, $\rho_\theta$, $t_a$, $\circ$,
      $\triangle ABC$, cevianer $AD,BE,CF$, $(A,B;C,D)$, $V-E+F=2$, $D_n$/$C_n$,
      kjeglesnitt $x^\top M x=0$. **Én fast innleiringskonvensjon** ($x_0=0$ = linja
      i det uendelige) gjennom hele boka.
- [ ] **Blandingsprofil-føring (regel 1.5.1)**: hvert eksempel/hver oppgaveløsning
      er ført i modusen oppgaveverbet krever (finn→eksakt uttrykk; vis at→navngitt-
      teorem-bevis; tegn→figurbeskrivelse; konstruer→linjal-prosedyre). Et tall der
      verbet var «vis at» (eller omvendt) er en byggefeil.
- [ ] **Figurforpliktelse i ALLE teorikapitler (regel 1.5.3)**: minst ett eksempel
      og én oppgave der en korrekt, forklarende figurbeskrivelse (akser, merkede
      punkter/linjer/vinkler/symmetriakser) er selve svaret — ikke pynt. Kap. 0.3
      etablerer standarden; kap. 3.2 og 8.3 O4 har eksplisitt linjal-konstruksjon.
- [ ] **Klassifikasjon med alle data (regel 1.5.2)**: isometrier navngitt med
      sentrum+vinkel / linje+vektor; kjeglesnitt med ellipse/hyperbel/parabel/
      degenerert + begrunnelse; rotasjonsgruppe opp til isomorfi.
- [ ] **Teoremnavning (regel 1.5.6)**: Ceva ($+1$), Menelaos ($-1$), Eulers formel,
      speilingssammensetnings-teoremet, gjensidighetsprinsippet navngitt der de
      bærer argumentet; riktig fortegn og syklisk oppsett.
- [ ] **Parametertilfeller fullstendig (regel 1.5.7)**: «for hvilke $a$»-oppgaver
      dekker alle tilfeller (ellipse/hyperbel/parabel/degenerert); locus-svar har
      parameteren **eliminert** med grensetilfeller diskutert.
- [ ] **Eksakte svar (regel 1.5.5)**: brøk, $\sqrt{}$, $\pi$ — aldri desimal;
      «pene» tall og små konfigurasjoner (nyskrevne, ikke fra reelle sett).
- [ ] **`(verifiser)`-disiplin**: alle utledede sensorkrav, karakterskiller og
      «typiske feil» merkes `(verifiser)` (arkivet har ingen fasit). Kap. 0.1 sier
      eksplisitt fra om det tynne grunnlaget (6 sett) og ber studenten sjekke
      formatet mot nyeste sett. Pensumbok/kompendium merkes `(verifiser)`.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      og epokemerket fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker
      (kun til kapitler som finnes — `bi-okonomi`/R1/R2 lenket og verifisert;
      **MAT1120 og MAT1100–1110 som klartekst med aktiveringsmarkør**), `collapsible`
      Symbol- og formelliste per delkapittel, Typiske feil-`warning`, 2–4 eksempler
      (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-
      `collapsible`; drillkapitlene har løsningsoppskrift + sensor-kommentert case +
      10–15 oppgaver; øvingseksamenene har fullt løsningsforslag per oppgave i
      `collapsible` med `tip`-vektingsnotat `(verifiser)`.
- [ ] **Quiz-sum ≥ 534 og flashcard-sum ≥ 600** per kvotetabellen i
      Summeringskontrollen (kontrollsummér). Flashcards KUN fra toppnivå
      `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (8.2–8.4) som
      sammen dekker A–K, begge epoker, begge kjeglesnitt-språk og alle fire modiene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, linjer, kjeglesnitt,
      konfigurasjoner; ingen formuleringer fra reelle sett (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn). Ingen løsningsforslag fantes i arkivet — alle løsninger er
      nyskrevne i fagets standardmetode.
- [ ] **Navigasjon**: `mat2500` inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Oslo (UiO)**, navn = «MAT2500 Geometri».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
