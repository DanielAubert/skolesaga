# Bokskjelett: IN1030 Systemer, krav og konsekvenser — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> **forfatteren leser IKKE eksamensarkivet.** Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (UiOs arkiv for IN1030, tidligere emnekode INF1055: seks oppgavesett V2017–V2022,
> hvorav én offisiell sensorveiledning (V2022) og tre løsningsdokumenter).
> Emnet er aktivt (10 sp førsteårs innføringsemne ved UiO, IFI), undervises og
> eksamineres på **norsk**. Boka skrives på **norsk bokmål**; engelske
> rammeverksnavn (WCAG, GDPR, Scrum, Kanban, DevOps, UML) beholdes ved første
> forekomst.
>
> **Faget er konseptuelt og modelleringsorientert — ikke et kodefag. INGEN
> tallregning finnes i noe sett.** «Det tekniske» er (a) *UML-modellering fra et
> case* (tegn aktivitets-, sekvens- og klassediagram) og (b) *strukturert
> kravarbeid*. Resten er *forklarende kortsvar og drøfting* om brukskvalitet,
> personvern, universell utforming, smidige metoder og samfunnskonsekvenser.
> Balansen er ~40 % modellering/prosedyre og ~60 % konseptuell forklaring/drøfting.
>
> **Alle case, oppgaver, diagrammer og «modellbesvarelser» i boka skal være
> NYSKREVNE** (se §8). Fagbegreper, UML-notasjon, rammeverksnavn (WCAG, GDPR,
> Scrum, DevOps) og lovreferanser er allmenn faglig kunnskap; ingen oppgavetekster,
> fasiter eller sensorkommentarer fra reelle sett gjengis ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1030` |
| Tittel | **IN1030 Systemer, krav og konsekvenser (UiO)** |
| Institusjon | **UiO** (i `institusjoner.ts`; visningsnavn «IN1030 Systemer, krav og konsekvenser») |
| Level | `'Høyskole'` |
| Arketype | **Hybrid: DNA-drøfting (base) + prosedyre-/sjangerkapitler i DNA-regnefag-stil** — se hybridvalget under (samme grunnform som TDT4237-arketypen) |
| Antall kapitler | **32** (Del 0: 3 · temadeler 1–7: 24 · eksamenstrening Del 8: 5) |
| Estimert totaltid | **≈ 2 060 min ≈ 34 timer** (fordelt per kapittel under; øvingseksamenene teller tungt) |
| Quiz totalt | **644** (krav ≥500 — se §5) |
| Flashcards totalt | **694** (krav ≥500 — se §5) |
| Prøver | **28** (4 per temadel 1–7) + **3 øvingseksamener** (kap. 8.3–8.5) |

**Pitch (ett avsnitt):** IN1030 har ett soleklart tyngdepunkt: **UML-modellering
fra et case** dukker opp i *hvert eneste* sett (6/6 = 100 %) og utgjør 30–43 % av
poengene — *dette er selve faget*. Og den er **strykkritisk**: sensorveiledningen
V2022 sier eksplisitt (to ganger) at å utelate modelleringsoppgaven gir automatisk
«ikke bestått», uansett hvor godt resten er besvart. Alt annet i faget er
byggeklosser som mates inn i, eller drøftes rundt, det gjennomgående caset. Rundt
kjernen ligger fire nesten like sikre drøftings-/kortsvarsblokker: **universell
utforming/WCAG** (100 %), **personvern/GDPR/samtykke** (100 %), **smidig
systemutvikling** (Scrum/Kanban/DevOps, 100 %) og **interessenter/rikt bilde**
(83 %). Boka driller derfor to kalibrerte ferdigheter: (1) å **kjøre
modelleringskjeden som en oppskrift** — interessenter → use case → aktivitet →
sekvens → klasse, koblet til ett konkret case, med hovedflyt + alternativ flyt og
multiplisitet — og (2) å **gjengi kjerne-drøftingene presist** (UU vs
tilgjengelighet, de fire WCAG-prinsippene, de fire samtykkekravene, databehandler
vs behandlingsansvarlig, Scrum/Kanban vs fossefall). Fordi karakteren er
**bestått/ikke bestått og krever bredde uten kunnskapshull**, dekker boka *alle*
kjernetemaene forsvarlig — ikke bare de tyngste.

**Kritiske kalibreringsregler (ufravikelige — gjelder HELE boka):**

1. **Modelleringskjeden er oppskrift-håndverk, ikke tema.** Den faste kjeden
   *case → interessenter/aktører → (use case-diagram +) tekstlig use case →
   aktivitetsdiagram → sekvensdiagram → klassediagram* drilles som en algoritmisk
   prosedyre (Del 2). Hvert modellsvar følger kjeden ledd for ledd.
2. **«Modellering er strykkritisk»-regelen (fagets viktigste enkeltregel).** Å
   utelate eller levere modelleringsoppgaven halvferdig gir **automatisk ikke
   bestått** (V2022, sagt to ganger) — kan ikke kompenseres av gode svar ellers.
   Denne warningen (feil #1) skal stå i HVER modelleringsrelatert `warning`-blokk
   (hele Del 2 + Del 8-øvingseksamenene) og fremheves i Del 0.
3. **«Bredde uten kunnskapshull»-regelen (bestått/ikke bestått-logikken).** Sensor
   V2022 er eksplisitt: det kan «ikke være store kunnskapshull innen pensum», og et
   svakt svar på ett tema «kan ikke kompenseres» av et sterkt et annet sted. Å
   dekke hele bredden forsvarlig er viktigere enn å skinne på ett tema. Boka har en
   egen **«Ingen kunnskapshull»-strategi** (kap. 0.1) og dekker alle Nivå 1–2-temaer
   med fullverdige kapitler.
4. **«Hold diagrammene enkle»-regelen.** V2020-løsningen advarer: enkle, korrekte
   diagram slår kompliserte (feil #4). Boka lærer eksplisitt at man skal vise at man
   *behersker notasjonen* fremfor å tegne alt. Denne warningen står i hvert
   diagramkapittel (2.3–2.5).
5. **«Sekvens følger tekst, klasse reflekterer sekvens»-regelen.** Sekvensdiagrammet
   skal ha metodekall i **samme rekkefølge som hovedflyten i den tekstlige use
   case-beskrivelsen** (feil #2); klassediagrammet skal inneholde **minst klassene
   fra sekvensdiagrammet** + attributter, metoder, assosiasjoner og **multiplisitet**
   (feil #3). Denne kjedelojaliteten er kjernen i modelleringssjangeren.
6. **«Alternativ flyt med»-regelen.** Både tekstlig use case og sekvensdiagram skal
   ha **hovedflyt OG minst én alternativ flyt** (feil #5). Hvert modellsvar viser
   begge.
7. **«Treff eksakt antall + dokumentér antakelser»-regelen.** Ber oppgaven om «minst
   tre interessenter» / «minst seks brukerhistorier» / «minst ett krav av hver type»
   — lever nøyaktig det (feil #11). Ved tvetydig case: **dokumentér egne antakelser
   eksplisitt** (feil #12, oppfordret i hvert eneste sett).
8. **Presise begrepsskiller skiller sterk fra svak.** UU vs tilgjengelighet;
   databehandler vs behandlingsansvarlig; primær- vs sekundæraktør; funksjonelle vs
   ikke-funksjonelle krav; høy kohesjon vs lav kobling; verifisering vs validering.
   Sensor straffer sammenblanding (feil #6–#10).

**Eksamensform-caveat (skal stå i Del 0):** Formen har skiftet — skoleeksamen med
tunge **flervalgsbolker** (2017–2019) → korona-**hjemmeeksamen** med essay/kildekrav
(2020–2021) → **skoleeksamen** igjen (2022→). Men **pensumet og oppgavetypene er
svært stabile** gjennom hele perioden; det er *innpakningen* som skifter, ikke hva
som testes. Boka bygges mot **dagens form: 4 t skriftlig digital skoleeksamen, ingen
hjelpemidler, bestått/ikke bestått, bygget rundt ett gjennomgående case**.
**2020–2021 er ikke representative for eksamensFORMEN** (hjemmeeksamen med
lengde-/kildekrav) men er ypperlig innholdstrening. **Flervalg behandles som en
mulig, men ikke garantert, innpakning** — quizene i boka er kalibrert som
flervalgsberedskap. Alle form-/karakterdetaljer merkes `(verifiser mot
emnebeskrivelsen for det aktuelle året)`. Lov-/tilsynsnavn (forskrift om UU av IKT;
Difi → **Digdir**/uu.tilsynet) merkes `(verifiser gjeldende navn/forskrift)`.

### Hybridvalget (dokumentert — jf. analysen §8)

**Base: DNA-drøftingsfag** — kjernen er forklarende kortsvar og drøfting uten
tallfasit; sensor vurderer begrepspresisjon, korrekt navngiving/skiller og
case-kobling, ikke mellomregning. **Forsterket med prosedyre-/sjangerkapitler i
DNA-regnefag-stil** — fagets flaggskip (UML-modelleringskjeden) og
prosedyredokumentene (rikt bilde, samtykkeskjema, risikomatrise) er *prosedyriske
oppskrifter* der samme mønster gjentas nesten identisk hvert år og må drilles som
håndverk (regnefag-natur: løsningsoppskrift → gjennomskrevet sensor-kommentert
case → mange oppgaver på eksamensnivå). Konkret betyr hybriden:

- **Temakapitlene** (Del 1, 3–7) følger drøfting-DNA-ens temakapittel-mal:
  Eksamensvinkel → forkunnskaper (+ begreps-/notasjonsliste) → temaet i landskapet →
  kjernebegreper presist definert → posisjoner/avveininger → anvendelse på case →
  typiske feil → oppgaver → repetisjon.
- **Sjanger-/prosedyrekapitlene** (hele Del 2 modellering, rikt bilde 1.2,
  samtykkeskjema 5.3, risikomatrise 7.2, flervalgsdrill 8.1) følger regnefag-DNA-ens
  drill-mal: løsningsoppskrift (`theorem`) → gjennomskrevet case med margnotater om
  poenguttelling → mange oppgaver.
- **Modellbesvarelse-kapitlene** (2.6 full modelleringskjede, 8.2 kortsvars-/
  drøftingsbank) følger drøfting-DNA-ens modellbesvarelse-mal, men på
  prosedyresjangeren: full modellbesvarelse + kommentert svakere variant + sensorblikk.

**Avvik fra DNA-malene (bevisste, dokumentert):**

- **«Symbol- og formelliste» → «Begreps- og notasjonsliste».** README/DNA krever en
  `collapsible` symbol-/formelliste per delkapittel. Faget har **ingen matematiske
  symboler eller formler**; det presise apparatet er **UML-notasjon**
  (aktør-strekmann, use case-ellipse, beslutningsrombe, livslinje, `alt`-blokk,
  assosiasjon, multiplisitet `1..*`/`0..*`/`1`) og **rammeverks-/lovnavn** (WCAG-
  prinsippene, GDPR-artikler, personopplysningsloven, Scrum-roller). Blokken heter
  derfor **«Begreps- og notasjonsliste»** og forklarer ALL UML-notasjon,
  rammeverksnavn og fagbegreper delkapitlet bruker. Regelen «per delkapittel, ikke
  arv» beholdes (et diagramsymbol regnes ikke som «forklart» fordi et tidligere
  kapittel forklarte det).
- **`theorem`-blokker brukes for prosedyre-oppskrifter og faste maler.** Faget har
  ingen matematiske teoremer. `theorem` huser i stedet de **faste oppskriftene som
  skal sitte i ryggmargen**: modelleringskjeden (kap. 2.1), tekstlig use case-malen
  (2.2), aktivitetsdiagram-oppskriften (2.3), sekvensdiagram-oppskriften (2.4),
  klassediagram-oppskriften (2.5), rikt bilde-malen (1.2), kravkategoriseringen
  (1.4), samtykkeskjema-malen (5.3) og risikomatrise-malen (7.2). Disse er bokas
  «teoremer».
- **Begrepsforankring til rammeverk/standard/lov, ikke til pensum-forfatter-drøfting.**
  Drøfting-DNA-en forankrer hvert begrep i en navngitt forfatter/verk. Her forankres
  begrepene i **rammeverk, standarder og lover** (WCAG 2.0 og de fire prinsippene;
  GDPR/personvernforordningen art. 5–7; personopplysningsloven; forskrift om UU av
  IKT; likestillings- og diskrimineringsloven; Scrum-/Kanban-rammeverket; UML-
  standarden; DevOps-prinsippene) — det er disse fasitene faktisk krever, ikke
  akademisk forfatter-drøfting. Navngitte metoder nevnes der de er faste (Rich
  Picture; Suchman-tabellen; Hawthorne-effekten). `(pensumbøker/forelesningsnotater
  varierer mellom årganger — verifiser lov-/tilsynsnavn mot gjeldende.)`
- **Modelleringen er en egen stor prosedyredel (Del 2, 6 kapitler), ikke lagt i
  Del 0.** Drøfting-DNA-en legger typisk case-håndverket i Del 0. Fordi
  modelleringskjeden er så stor, strykkritisk og prosedyrisk, får den en egen
  praktikumdel med oppskrift per diagram + full modellbesvarelse; Del 0 dekker
  kortsvar-, drøftings- og flervalgshåndverket og case-lesingen.
- **Quiz kalibreres som flervalgsberedskap (2017–2019-formen).** Flervalg feide
  hele pensum i gjenkjenningsformat (WCAG-fakta, personvern, kohesjon/kobling,
  prosessmodeller, testfaser). Plattformens quiz ER dermed direkte trening for en
  eventuell flervalgsbolk; `options[0]` = riktig svar (runtime stokker).
- **Flashcards kalibreres som begrep ↔ definisjon/skille/regel.** Faget er
  ekstremt begrepsrikt, og eksamen er hjelpemiddelfri. Flashcards parer et **navn**
  med presis **kjerne** (f.eks. «UU → én løsning alle kan bruke uavhengig av
  funksjonsevne»; «primæraktør → har eget mål og initierer use case»; «databehandler
  → behandler på vegne av / etter instruks fra behandlingsansvarlig»). Dette er
  puggematerialet. Fordi faget er så begrepsrikt (jf. PRODUKSJONSLOYPE «≥500 er et
  gulv»), ligger flashcards høyt: **694**.
- **Kapittelantall (32) og modelleringstyngden.** Drøfting-DNA-en veileder 15–30
  kapitler; 32 er en bevisst konsekvens av (a) fagets bredde (fem høyfrekvente + ni
  mellom-/lavfrekvente temaer som ALLE må dekkes pga. breddekravet) og (b) at
  modelleringsdelen (Del 2) fortjener seks kapitler: én per diagram i kjeden + en
  oversikts-/strykkravsintro + en full modellbesvarelse.

---

## 2. Makrostruktur

Rekkefølgen bygger fra foranalysen (hvor et system starter) mot fagets flaggskip
og videre til de store drøftingsblokkene: foranalyse/krav → **UML-modelleringskjeden
(klimaks, strykkritisk)** → systemutvikling (smidig) → UU → personvern →
brukskvalitet/design/testing → sikkerhet/etikk/samfunn → eksamenstrening.
Frekvensen (analysen §2/§7) styrer *omfanget*: perfekt-temaer får flere kapitler +
drill; kjenne-temaer får kompakte kapitler — men **alle** dekkes (breddekravet).
`sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart, case-lesing og svarhåndverk | 3 | DNA-obligatorisk: bestått/ikke bestått-logikken, «ingen kunnskapshull»-strategien, den case-baserte formen og de tre svarhåndverkene (kortsvar/drøfting/flervalg) etableres FØR fagstoffet. |
| 1 | Foranalyse: interessenter, rikt bilde og krav | 4 | **Interessenter/rikt bilde 83 % + krav 67 % + brukerundersøkelser 67 %** (nivå 2). Der systemet starter; mater direkte inn i modelleringskjeden. |
| 2 | UML-modelleringskjeden fra case | 6 | **Modellering 6/6 = 100 %, 30–43 %, STRYKKRITISK — selve faget** (nivå 1, tyngst). Egen oppskrift per diagram (use case → aktivitet → sekvens → klasse) + full modellbesvarelse. Bokas største del. |
| 3 | Systemutvikling: prosessmodeller, smidig og DevOps | 3 | **Smidig 100 %** (nivå 1) + prosessmodeller 67 % + DevOps 50 % + teamarbeid 33 % (nivå 2/3). Scrum/Kanban vs fossefall er garantert kortsvar/drøfting. |
| 4 | Universell utforming og WCAG | 2 | **UU/WCAG 6/6 = 100 %** (nivå 1, 15–25 %). Én av de to tyngste rene drøftingsblokkene; UU vs tilgjengelighet + fire prinsipper + lovverk. |
| 5 | Personvern, GDPR og samtykke | 3 | **Personvern 6/6 = 100 %** (nivå 1, 10–25 %). Den andre tunge drøftingsblokken; fire samtykkekrav, roller, samtykkeskjema. |
| 6 | Brukskvalitet, objektorientert design og testing | 3 | Brukskvalitet + **OOD (kohesjon/kobling/MVC) 50 %** + **testing 33 %** (nivå 2/3). Fyller breddekravet; OOD-begrepene mater klassediagrammet. |
| 7 | Sikkerhet, risiko, etikk og samfunnskonsekvenser | 3 | **Sikkerhet/risiko 67 %** + **etikk/samfunn ~50 %** (nivå 2/3). Risikomatrise som prosedyre + samfunnskonsekvens-drøfting. |
| 8 | Eksamenstrening | 5 | Flervalgsdrill (2017–2019-formen) + kortsvars-/drøftingsbank + **3 case-baserte øvingseksamener** (hver med obligatorisk modelleringskjede + alle kjernetemaer). |

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart, case-lesing og svarhåndverk |
| 1 | Foranalyse: interessenter, rikt bilde og krav |
| 2 | UML-modelleringskjeden fra case |
| 3 | Systemutvikling: prosessmodeller, smidig og DevOps |
| 4 | Universell utforming og WCAG |
| 5 | Personvern, GDPR og samtykke |
| 6 | Brukskvalitet, objektorientert design og testing |
| 7 | Sikkerhet, risiko, etikk og samfunnskonsekvenser |
| 8 | Eksamenstrening |

### Gjennomgående case (nyskrevet)

Del 1–2 bygger på ett nyskrevet gjennomgående case, **«Delelageret»** — en kommunal
digital tjeneste for utlån av utstyr (verktøy, turutstyr, festutstyr) mellom
innbyggere: reservere, hente, levere tilbake, vurdere. Caset introduseres i kap.
1.1, interessent-/rikt bilde-kartlegges i Del 1, og får sin **fulle
modelleringskjede-modellbesvarelse i kap. 2.6** (interessenter → use case-diagram →
tekstlig use case → aktivitetsdiagram → sekvensdiagram → klassediagram, med
hovedflyt + alternativ flyt og multiplisitet). Øvingseksamenene (8.3–8.5) bruker
**andre nyskrevne case** (en frivillig-koordineringstjeneste, en digital
avstemningstjeneste, en klima-/energiloggtjeneste) slik at studenten drilles på å
kjøre kjeden på et *ukjent* case. Ingen case er lånt fra reelle sett.

---

## 3. Sjangerkatalog, feilkoder, vurderingsakser og prosedyre-maler

### Sjangerkoder (brukes i eksamensbelegg under, fra analysen §3)

**MODELL** — UML-modelleringskjeden fra case (garantert, tyngst, strykkritisk,
30–43 %): hele kjeden *interessenter/aktører → (use case-diagram +) tekstlig use
case → aktivitetsdiagram → sekvensdiagram → klassediagram*. · **USECASE** — tekstlig
use case-beskrivelse (navn, aktør, pre-/postbetingelse, hovedflyt, ≥1 alternativ
flyt) — kan øves isolert. · **RIKTBILDE** — rikt bilde / interessentkartlegging
(concerns, relasjoner, konflikter). · **KRAV** — kravspesifikasjon (brukerhistorier,
funksjonelle/ikke-funksjonelle med de tre underkategoriene, testing av krav). ·
**DRØFT** — drøfting/dilemma (UU-viktighet, personvern-avveininger, smidig vs
fossefall, etiske/samfunnsmessige konsekvenser). · **KORT** — teori-kortsvar (begrep,
definisjon, presist skille), poeng per delelement, eksakt antall kreves. · **SKJEMA**
— prosedyredokument (samtykkeskjema). · **RISIKO** — risikoanalyse/usikkerhetsmatrise
(risiko, sannsynlighet, konsekvens, tiltak, ansvarlig). · **MCQ** — flervalg (2017–2019,
kan komme igjen), gjenkjenning, feier hele pensum — billige, drillbare poeng.

### Feilkoder (brukes i «Typiske feil» under, fra analysen §5)

**#1** hoppe over / levere modelleringsoppgaven halvferdig (**strykkritisk —
automatisk ikke bestått**, den dyreste feilen) · **#2** sekvensdiagram som ikke
følger den tekstlige use case-beskrivelsen (kallenes rekkefølge stemmer ikke med
hovedflyten) · **#3** klassediagram uten multiplisitet/attributter/metoder, eller
som ikke reflekterer sekvensdiagrammet · **#4** overkompliserte diagram i stedet for
rene, lesbare (advart i V2020) · **#5** manglende alternativ flyt i tekstlig use case
/ sekvensdiagram · **#6** blande UU og tilgjengelighet (beskrive særtilpasning som om
det var UU) · **#7** blande databehandler og behandlingsansvarlig, eller ikke forklare
alle fire samtykkekravene (frivillig/spesifikk/informert/utvetydig) · **#8** blande
primær- og sekundæraktør (glemme at sekundæraktør ikke initierer eget use case) ·
**#9** ikke kategorisere ikke-funksjonelle krav (produkt/organisatorisk/ekstern),
eller forveksle funksjonelle og ikke-funksjonelle krav · **#10** bytte om kohesjon og
kobling (høy kohesjon = ett funksjonelt område; lav kobling = få avhengigheter) ·
**#11** bomme på antallskravet («minst seks interessenter» → lever tre) · **#12**
glemme å dokumentere antakelser i tvetydige case · **#13** synsing uten
begrepsforankring i UU-/personvern-/etikkdrøftinger (manglende lov-/standardreferanser
der oppgaven ber om faglig forankring) · **#14** kunnskapshull i ett tema som drar
hele besvarelsen under bestått-grensen (breddekravet).

### Sensorens metaregler og vurderingsakser (malen for alle modellsvar, analysen §4)

1. **Bestått/ikke bestått krever bredde over hele emnet** — ingen store
   kunnskapshull; ett svakt tema kan ikke kompenseres (feil #14).
2. **Modelleringsoppgaven er obligatorisk for å bestå** — utelates den, er det ikke
   bestått (feil #1). Fagets viktigste enkeltregel.
3. **Sekvensdiagram følger den tekstlige beskrivelsen; klassediagram reflekterer
   sekvensdiagrammet** (feil #2/#3).
4. **Treff antallskravet** — «minst N» → lever nøyaktig N (feil #11).
5. **Dokumentér egne antakelser** når caset er tvetydig (feil #12; oppfordret i
   hvert sett).
6. **Enkle, korrekte diagram slår kompliserte** (feil #4).
7. **Koble til det konkrete caset** — interessenter, krav og risikoer skal springe
   ut av casebeskrivelsen, ikke være generiske lister.
8. **Alternativ flyt med** — både tekstlig use case og sekvensdiagram skal ha
   hovedflyt OG minst én alternativ flyt (feil #5).
9. **Presise begrepsskiller** — UU vs tilgjengelighet, databehandler vs
   behandlingsansvarlig, primær vs sekundær, funksjonell vs ikke-funksjonell, kohesjon
   vs kobling, verifisering vs validering (feil #6–#10).
10. **Faglig forankring der oppgaven ber om det** — lov-/standardnavn belønnes i
    UU-/personverndrøftinger (feil #13).

Modellbesvarelsene graderes i tre nivåer (minimum → god → meget god) på fire akser:
**presis navngiving/skille** · **riktig notasjon/mekanisme** (ikke overflate) ·
**case-kobling + kjedelojalitet** (sekvens↔tekst↔klasse; risiko↔case) · **treff på
antall/format** (eksakt antall; hoved- + alternativ flyt).

### Prosedyre-mal A — Modelleringskjeden (`theorem` i kap. 2.1, gjentas i 2.6 og hver øvingseksamen)

Den faste kjeden sensor forlanger, ledd for ledd. Alle ledd **koblet til det
konkrete caset**, med hoved- + alternativ flyt der det er relevant:

1. **Interessenter/aktører** — list interessenter (navn + interesse); skill
   **primæraktør** (eget mål, initierer use case) fra **sekundæraktør** (nødvendig for
   å realisere målet, jobber «på bestilling»). Treff antallskravet (feil #11/#8).
2. **Use case-diagram** (når bedt) — aktører + use cases, med `include`/`extend` der
   det er naturlig. Hold det enkelt (feil #4).
3. **Tekstlig use case-beskrivelse** (mal B) — navn, aktør(er), **prebetingelse**,
   **postbetingelse**, **hovedflyt** (nummererte steg) og **≥1 alternativ flyt**.
4. **Aktivitetsdiagram** (mal C) — fra START til SLUTT, aktiviteter og
   **beslutningsrombe** (if-then-else) for forgreninger.
5. **Sekvensdiagram** (mal D) — **objekter** (instanser), **metodekall** definert i
   klassene, i **samme rekkefølge som hovedflyten** (feil #2), + **alt-blokk** for
   alternativ flyt (feil #5). Bruk gjerne oppgitte metoder.
6. **Klassediagram** (mal E) — **minst klassene fra sekvensdiagrammet**, med
   **attributter, metoder, assosiasjoner og multiplisitet**; skal **reflektere**
   sekvensdiagrammet (feil #3).

`⚠️ Å utelate/levere dette halvferdig = automatisk ikke bestått (feil #1). Hold
diagrammene ENKLE (feil #4).`

### Prosedyre-mal B — Tekstlig use case (`theorem` i kap. 2.2)

Navn · Aktør(er) (primær + evt. sekundær) · **Prebetingelse** (hva må gjelde før) ·
**Postbetingelse** (hva gjelder etter suksess) · **Hovedflyt** (nummererte steg,
aktør ↔ system vekselvis) · **Alternativ flyt** (≥1: hva skjer ved avvik/feil, og
hvor i hovedflyten den forgrener). Denne teksten er **kilden** sekvensdiagrammet
skal følge (mal D).

### Prosedyre-mal C — Aktivitetsdiagram (`theorem` i kap. 2.3)

Startnode (fylt sirkel) → **aktiviteter** (avrundede bokser) → **beslutningsrombe**
(diamant med vaktuttrykk `[ja]`/`[nei]`) for forgreninger → evt. sammenslåing →
sluttnode (ring om fylt sirkel). Én sammenhengende flyt fra start til slutt; vis
alternativene via romben. Hold det enkelt (feil #4).

### Prosedyre-mal D — Sekvensdiagram (`theorem` i kap. 2.4)

**Objekter/livslinjer** øverst (instanser av klassene, ikke selve klassene) →
**meldinger/metodekall** som piler mellom livslinjer, **i samme rekkefølge som
hovedflyten** i mal B (feil #2) → returpiler der det er nyttig → **`alt`-fragment**
(alt-blokk) for den alternative flyten (feil #5). Hvert metodekall skal svare til en
metode som havner i klassediagrammet (mal E).

### Prosedyre-mal E — Klassediagram (`theorem` i kap. 2.5)

**Klasser** (navn / attributter / metoder i tre rom) — **minst** de som sendte/mottok
meldinger i sekvensdiagrammet (feil #3) → **assosiasjoner** (linjer) med
**multiplisitet** i begge ender (`1`, `0..*`, `1..*`, `*`) → evt.
**generalisering/arv** (hul trekant) og **aggregering/komposisjon** der naturlig.
**Domenemodell** = klassediagram uten metoder (nevnes som variant). Skal *reflektere*
sekvensdiagrammet: hver metode kalt i sekvensen finnes i riktig klasse.

### Prosedyre-mal F — Rikt bilde (`theorem` i kap. 1.2)

Tegn/beskriv **interessenter** (personer/roller/systemer som symboler) →
**relasjoner** (linjer) → **concerns** (tankebobler: hva hver interessent er opptatt
av) → **konflikter/motstridende interesser** (lyn-/kryssymboler). Uformelt,
utforskende — brukes tidlig for å forstå situasjonen; ikke et UML-diagram.

### Prosedyre-mal G — Samtykkeskjema (`theorem` i kap. 5.3)

Formål (hva dataene brukes til) · hva som samles inn (dataminimering) ·
frivillighet + rett til å trekke samtykket · lagringstid + sletting · behandlings­
ansvarlig/kontaktperson · **aktiv avkrysning** (utvetydig — ikke forhåndshuket).
Skjemaet skal operasjonalisere de fire samtykkekravene (kap. 5.2).

### Prosedyre-mal H — Risikoanalyse/usikkerhetsmatrise (`theorem` i kap. 7.2)

Tabell: **risiko/trussel · sannsynlighet · konsekvens · (= risikonivå L/M/H) ·
tiltak · ansvarlig**. Vurder risiko **separat for sikkerhet og personvern** per
scenario. Treff antallskravet («minst seks risikomomenter», feil #11). Utled tiltak
fra risikoen (ikke generisk liste).

---

## 4. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens (av 6 sett) + sjangerkoder
> (MODELL/USECASE/RIKTBILDE/KRAV/DRØFT/KORT/SKJEMA/RISIKO/MCQ) + prioritetsklasse
> (**perfekt** = nivå 1 / **kunne** = nivå 2 / **kjenne** = nivå 3, fra analysen §7).
> **Kvote** = quiz/flashcards (autoritativt, §5). Temakapitler følger drøfting-DNA-ens
> temakapittel-DNA: `tip` Eksamensvinkel → `text` Forkunnskaper (+ `collapsible`
> Begreps- og notasjonsliste) → `text` temaet i landskapet → `definition`
> kjernebegreper (flashcard-kilden — toppnivå med title!) → `text` posisjoner/
> avveininger → `example` anvendelse ×1–3 → `warning` Typiske feil → `exercise` ×4–8 →
> `collapsible` repetisjon. Sjanger-/drill-/praktikumkapitler følger regnefag-DNA-ens
> drill-mal (løsningsoppskrift som `theorem` → gjennomskrevet sensor-kommentert case →
> oppgaver på eksamensnivå).

### Del 0 — Eksamenskart, case-lesing og svarhåndverk

#### Kapittel 0.1: Slik testes IN1030 — bestått/ikke bestått og ingen kunnskapshull
**id:** `in1030-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig skoleeksamen, ingen hjelpemidler,
  bestått/ikke bestått, case-basert), de tre epokene, breddekravet, at modellering er
  strykkritisk, og hvordan boka brukes mot eksamen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (6 sett V2017–V2022). Skal
  formidle: (a) **gjeldende form** — 4 t skriftlig digital skoleeksamen, ingen
  hjelpemidler, bestått/ikke bestått, fem obligatoriske forkrav + IN1000 som forkunnskap
  `(verifiser mot emnebeskrivelsen)`; (b) **tre epoker** — skoleeksamen med
  flervalgsbolker 2017–2019, korona-hjemmeeksamen med essay/kildekrav 2020–2021,
  skoleeksamen igjen 2022→ — men **stabilt pensum**; **2020–2021 ikke representative for
  formen** men god innholdstrening; (c) **temafrekvenstabellen** (av 6 sett): modellering
  6/6 · UU/WCAG 6/6 · personvern/GDPR 6/6 · smidig 6/6 · interessenter/rikt bilde 5/6 ·
  krav 4/6 · brukerundersøkelser 4/6 · sikkerhet/risiko 4/6 · prosessmodeller 4/6 ·
  DevOps 3/6 · etikk/samfunn ~3/6 · OOD 3/6 · teamarbeid 2/6 · testing 2/6; (d) **de to
  make-or-break-reglene:** modellering er strykkritisk (feil #1) OG bredde uten
  kunnskapshull (feil #14). Prioritet: perfekt (metanivå).
- **Begrepskontrakt:** ingen fagbegreper — men presise beskrivelser av **bestått/ikke
  bestått-logikken** (bredde slår glans; ett svakt tema kompenseres ikke) og
  **«Ingen kunnskapshull»-strategien**: en sjekkliste over alle Nivå 1–2-temaer studenten
  MÅ kunne forsvarlig (modellering, UU, personvern, smidig, interessenter/rikt bilde,
  krav, brukerundersøkelser, prosessmodeller, sikkerhet/risiko). Tre mantraer innføres:
  «**modelleringen MÅ leveres**», «**koble alt til caset**», «**dekk hele bredden**».
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et IN1030-sett» — gjennomgang av ett nyskrevet
  case-basert sett i dagens form (interessent-/UU-/personvern-/modelleringsoppgaver rundt
  ett case), med demonstrasjon av tidsbudsjett (sikre modelleringen tidlig; ikke la ett
  tema stå tomt).
- **Typiske feil:** #1 hoppe over modelleringen (peker frem til Del 2); #14 la ett tema
  stå tomt; undervurdere at bestått krever bredde, ikke ett glansnummer.
- **Kvote:** 14 quiz / 10 flashcards (eksamensform, epokene, karakterskala, forkrav,
  breddekravet, strykkravet, temafrekvens-tall).

#### Kapittel 0.2: Slik leser du caset
**id:** `in1030-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-0-1`

- **Kapitteltype:** sjangerhåndverk (case-lesing).
- **Description:** Hvordan man leser ett gjennomgående case og trekker ut interessenter,
  aktører, krav, modelleringsråstoff og drøftingsvinkler — fagets grunnform.
- **Eksamensbelegg:** Alle seks settene er case-baserte (analysen §2 pkt. 5: caset binder
  alt sammen). Sjangre: alle (dette er lesestrategien bak hver sjanger). Prioritet:
  perfekt (bygger opp under modelleringen og drøftingene). Skal operasjonalisere en
  **case-lese-oppskrift** (`theorem`): (1) hvem er interessentene/aktørene? (2) hva er
  systemets hovedfunksjoner (→ use cases)? (3) hvilke data behandles (→ personvern)? (4)
  hvem er brukerne (→ UU)? (5) hvilke risikoer/konflikter finnes? (6) hvilke antakelser må
  jeg dokumentere (feil #12)?
- **Begrepskontrakt:** case-lese-oppskriften (seks spørsmål) + **case-drøftingsmalen**
  (hvordan en case-forankret drøfting bygges: begrep → anvend på caset → avvei → konkluder)
  + tidsbudsjett for et case-basert sett (invester tungt i modelleringen). Mantra:
  «**hver liste skal springe ut av caset**, ikke være en generisk pensumliste».
- **Drøftingsakser:** når man skal dokumentere en antakelse vs. spørre; hvor mye av caset
  som er relevant for hver deloppgave (ikke bruk alt overalt).
- **Case-forslag:** ta ett nyskrevet mini-case (en digital tjeneste) og demonstrer de seks
  lesespørsmålene besvart eksplisitt — samme case gjenbrukes i flere sjangerkapitler.
- **Typiske feil:** #12 glemme å dokumentere antakelser; generiske lister uten
  case-kobling (feil-mønster i UU/interessenter/krav); bruke hele caset i hver deloppgave.
- **Kvote:** 12 quiz / 10 flashcards (case-lese-oppskriften, case-drøftingsmalen,
  antakelses-dokumentering, «springe ut av caset»).

#### Kapittel 0.3: Kortsvar-, drøftings- og flervalgshåndverket
**id:** `in1030-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-0-1`

- **Kapitteltype:** sjangerhåndverk (KORT + DRØFT + MCQ).
- **Description:** Hvordan et teori-kortsvar, en drøfting og et flervalgssvar bygges, og
  hva som skiller sterk fra svak besvarelse.
- **Eksamensbelegg:** Destillat av kortsvars-/drøftings-/flervalgskravene (analysen §3
  B–H, §4). Prioritet: perfekt. Skal operasjonalisere: **firetrinns-kortsvaret** (presis
  definisjon med korrekt navngiving → relevant skille der det finnes (UU/tilgjengelighet,
  primær/sekundær, funksjonell/ikke-funksjonell, kohesjon/kobling) → treff eksakt antall
  delelementer (feil #11) → konkret case-eksempel); **drøftingsmalen** (fremstill
  posisjonene ærlig → avvei → forankre i lov/standard der bedt (feil #13) → konkluder);
  **flervalgsstrategien** (gjenkjenn tema → elimér distraktorer via presist skille →
  ingen minuspoeng i 2019, kryss alt). **Tre-nivå-gradering:** minimum = korrekt kjerne;
  god = kjerne + skille + eksempel; meget god = presis navngiving + case-kobling +
  lov-/standardforankring.
- **Begrepskontrakt:** kortsvarsarkitekturen (fire trinn) + drøftingsmalen +
  flervalgsstrategien + tidsbudsjett + «poeng per delelement». Mantra: «definisjon uten
  presist skille og uten eksempel er minimums-/C-stoff».
- **Drøftingsakser:** presisjon vs. bredde (heller treffe antallet enn skrive langt); når
  lov-/standardforankring løfter et svar; på skoleeksamen holder korrekt begrepsbruk uten
  formell sitering, men presise lov-/standardnavn belønnes.
- **Case-forslag:** samme kortsvarsoppgave («forklar universell utforming og skillet mot
  tilgjengelighet») besvart tre ganger — E (bare «alle skal kunne bruke det»), C/god
  (definisjon + skille), A/meget god (definisjon + skille + buss-eksempel + WCAG-/lov-
  forankring) — med margkommentarer.
- **Typiske feil:** #11 treffe feil antall; #13 synsing uten forankring; #6–#10 upresise
  skiller; skrive langt uten uttelling.
- **Kvote:** 12 quiz / 10 flashcards (fire trinn, drøftingsmalen, flervalgsstrategien,
  tre-nivå-kjennetegn, eksakt-antall-regelen).

### Del 1 — Foranalyse: interessenter, rikt bilde og krav

#### Kapittel 1.1: Interessenter og aktører
**id:** `in1030-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-0-2`

- **Kapitteltype:** tema.
- **Description:** Hvem har interesse i systemet (interessenter), og skillet mellom
  primæraktør (eget mål, initierer use case) og sekundæraktør — grunnlaget for hele
  modelleringskjeden.
- **Eksamensbelegg:** Interessenter/aktører 5/6 (83 %; egen oppgave 15 % + del av caset
  hvert år). Sjangre: RIKTBILDE, KORT, MODELL (ledd 1 — mater use case-diagrammet).
  Prioritet: **kunne** (§7 pkt. 5), men aktør-skillet er **strykkritisk-nært** fordi det
  er ledd 1 i modelleringen.
- **Begrepskontrakt:** **interessent** (person/gruppe/organisasjon med interesse i
  systemet — også de som ikke bruker det direkte); **aktør** (rolle som samhandler med
  systemet); **primæraktør** (har eget mål, **initierer** use case — f.eks. innbygger som
  låner utstyr) vs. **sekundæraktør** (nødvendig for å realisere målet, jobber «på
  bestilling», initierer ikke selv — f.eks. et betalingssystem eller en lagermedarbeider);
  interessent vs. aktør (alle aktører er interessenter, ikke omvendt). Delelageret-caset
  brukes: innbyggere, kommunen, lagermedarbeidere, IT-drift, betalingsleverandør.
- **Drøftingsakser:** hvorfor sekundæraktør ikke initierer eget use case (kjernen i #8);
  når en interessent (f.eks. en personvernmyndighet) *ikke* er en aktør; hvordan
  aktørlisten bestemmer use case-diagrammet (mater ledd 2).
- **Case-forslag:** kartlegg **minst seks interessenter** for Delelageret med interesse,
  og skill ut primær- vs. sekundæraktørene — treff antallskravet (feil #11).
- **Typiske feil:** #8 blande primær- og sekundæraktør; #11 bomme på antallskravet;
  behandle enhver interessent som aktør; generisk liste uten case-kobling.
- **Kvote:** 24 quiz / 32 flashcards (interessent/aktør, primær vs. sekundær med eksempler,
  interessent≠aktør, begrep↔definisjon).

#### Kapittel 1.2: Rikt bilde (Rich Picture)
**id:** `in1030-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-1-1`

- **Kapitteltype:** sjanger/prosedyre (regnefag-stil).
- **Description:** Rikt bilde-teknikken: en uformell tegning som får frem interessenter,
  concerns, relasjoner og konflikter tidlig i foranalysen.
- **Eksamensbelegg:** Rikt bilde 5/6 (egen oppgave 15 %, del av caset). Sjangre:
  RIKTBILDE, KORT. Prioritet: **kunne** (§7 pkt. 5).
- **Innholdskontrakt (`theorem` — rikt bilde-malen, mal F):** gjengi mal F som
  `theorem`-blokk (interessenter → relasjoner → **concerns** → **konflikter/motstridende
  interesser**), understrek at rikt bilde er **uformelt og utforskende** (ikke UML) og
  brukes **tidlig** for å forstå situasjonen. Deretter et **gjennomskrevet eksempel** på
  Delelageret med margnotater (hvilke concerns/konflikter gir uttelling), og en beskrivelse
  av notasjonen (symboler for personer, tankebobler for concerns, lyn for konflikt).
- **Drøftingsakser:** hva rikt bilde fanger som en use case-liste ikke gjør (concerns/
  konflikter); rikt bilde vs. interessentliste; når bildet er «ferdig nok».
- **Case-forslag:** tegn/beskriv et rikt bilde for Delelageret som viser minst to
  motstridende interesser (f.eks. innbygger vil ha rask utlevering vs. kommunen vil ha
  kontroll/ansvarsfraskrivelse ved skade).
- **Typiske feil:** #4 overkomplisere; utelate concerns/konflikter (da blir det bare et
  aktørkart); tegne rikt bilde som om det var et UML-diagram; ikke koble til caset.
- **Kvote:** 20 quiz / 24 flashcards (rikt bilde-elementene, concerns, konflikter, uformelt
  vs. UML, når det brukes).

#### Kapittel 1.3: Brukerundersøkelser og datainnsamling
**id:** `in1030-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `in1030-1-1`

- **Kapitteltype:** tema.
- **Description:** Hvorfor og hvordan man undersøker brukernes behov (observasjon,
  intervju, spørreskjema, pilot) og fallgruvene (Hawthorne-effekten, personvern ved
  datainnsamling).
- **Eksamensbelegg:** Brukerundersøkelser 4/6 (egen oppgave + drøfting). Sjangre: KORT,
  DRØFT. Prioritet: **kunne** (§7 pkt. 7).
- **Begrepskontrakt:** **hvorfor** (forstå faktisk bruk og behov før man bygger);
  **metoder** — **deltakende observasjon**, **intervju** (strukturert/åpent),
  **spørreskjema**; **pilotundersøkelse** (test undersøkelsen på få først for å avdekke
  misforståelser); **Hawthorne-effekten** (folk endrer atferd når de vet de observeres);
  **Suchman-tabellen** (fra oblig 2 — situert handling / plan vs. faktisk bruk)
  `(verifiser mot gjeldende pensum)`; **personvern ved datainnsamling** (samtykke, kobler
  til Del 5). Metodenes styrker/svakheter (observasjon = ekte atferd men Hawthorne;
  spørreskjema = skala men grunt; intervju = dybde men få).
- **Drøftingsakser:** hvilken metode passer hvilket spørsmål; observasjon vs. selvrapport
  (folk sier og gjør ulikt); hvorfor pilot lønner seg; personvern vs. innsiktsbehov.
- **Case-forslag:** velg og begrunn datainnsamlingsmetode for å forstå hvordan innbyggere
  faktisk vil bruke Delelageret, og pek på ett personvernhensyn.
- **Typiske feil:** #13 velge metode uten begrunnelse; glemme Hawthorne/pilot; overse
  personvern ved innsamling; blande metodenes styrker.
- **Kvote:** 22 quiz / 26 flashcards (metodene, pilot, Hawthorne, Suchman, personvern ved
  innsamling, metode↔styrke/svakhet).

#### Kapittel 1.4: Kravspesifikasjon — brukerhistorier og kravtyper
**id:** `in1030-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-1-1`

- **Kapitteltype:** tema + prosedyre.
- **Description:** Brukerhistorier («som X ønsker jeg Y fordi Z») og skillet funksjonelle
  vs. ikke-funksjonelle krav med de tre underkategoriene — og hvordan hvert krav testes.
- **Eksamensbelegg:** Krav 4/6 (del av caset + flervalg). Sjangre: KRAV, KORT, MCQ,
  MODELL-koblingsstoff. Prioritet: **kunne** (§7 pkt. 6). Sensor krever ofte «minst seks
  brukerhistorier» og «minst ett ikke-funksjonelt krav av hver type» (feil #11/#9).
- **Begrepskontrakt (`theorem` for kravkategoriene):** **brukerhistorie** — formatet
  **«Som [aktør] ønsker jeg [funksjon] for/fordi [mål]»**, prioritert liste;
  **funksjonelle krav** (hva systemet skal gjøre) vs. **ikke-funksjonelle krav**
  (egenskaper/kvalitet), inndelt i **produktkrav** (ytelse/brukervennlighet, f.eks. «tåle
  100 samtidige brukere»), **organisatoriske krav** (rutiner/dokumentasjon/prosess) og
  **eksterne krav** (lov/UU/personvern) — gjengis som `theorem`-blokk; **testing av krav**
  (koble hvert ikke-funksjonelt krav til en konkret testmåte: lasttest, brukertest,
  UU-revisjon). Kobler til modelleringen (funksjonelle krav → use cases).
- **Drøftingsakser:** hvorfor UU er et *eksternt* ikke-funksjonelt krav (kobler til Del 4);
  funksjonelt vs. ikke-funksjonelt (kjernen i #9); hvorfor et krav må være testbart.
- **Case-forslag:** skriv **minst seks brukerhistorier** for Delelageret + **minst ett
  ikke-funksjonelt krav av hver av de tre typene**, hver koblet til en testmåte — treff
  antallet (feil #11), én av hver type (feil #9).
- **Typiske feil:** #9 ikke kategorisere ikke-funksjonelle krav / forveksle funk. og
  ikke-funk.; #11 for få brukerhistorier; krav som ikke er testbare; brukerhistorie uten
  «fordi Z»-målet.
- **Kvote:** 24 quiz / 32 flashcards (brukerhistorie-formatet, funk. vs. ikke-funk., de tre
  underkategoriene, testing av krav, krav↔testmåte).

**Prøve-kvote Del 1:** 4 prøver (`in1030-1-prove`, chapterNumber 1.P):
1. *Interessenter/aktører:* 8 MCQ (interessent/aktør, primær/sekundær) + 1 KORT (list ≥6
   interessenter for et gitt case, skill primær/sekundær) — trener feil #8/#11.
2. *Rikt bilde:* RIKTBILDE (tegn/beskriv rikt bilde med ≥2 konflikter for et gitt case) +
   kort DRØFT (hva rikt bilde fanger som en aktørliste ikke gjør).
3. *Brukerundersøkelser:* KORT (velg + begrunn metode for et gitt innsiktsbehov, nevn
   Hawthorne + pilot) à tre-nivå-mal.
4. *Krav:* KRAV (skriv ≥6 brukerhistorier + ≥1 ikke-funksjonelt krav av hver type med
   testmåte for et gitt case) — trener feil #9/#11.

### Del 2 — UML-modelleringskjeden fra case

#### Kapittel 2.1: Modelleringskjeden — oversikt og strykkravet
**id:** `in1030-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `in1030-1-1`

- **Kapitteltype:** drill/oversikt (regnefag-stil, fagets flaggskip-intro).
- **Description:** Hele modelleringskjeden som én algoritmisk oppskrift med tidsbudsjett —
  den største, sikreste OG strykkritiske potten i faget, presentert som håndverk.
- **Eksamensbelegg:** Modellering 6/6 (100 %, 30–43 % — garantert hvert år, strykkritisk).
  Sjangre: MODELL. Prioritet: **perfekt** (§7 pkt. 1 — «selve faget»). Bygger på Del 1
  (interessenter/aktører → ledd 1). `⚠️ STRYKKRITISK (feil #1): å utelate modelleringen =
  automatisk ikke bestått, sagt to ganger i V2022-veiledningen. Denne warningen
  fremheves her og i alle Del 2-kapitler.`
- **Innholdskontrakt (`theorem` — modelleringskjeden, mal A):** gjengi **prosedyre-mal A**
  som en `theorem`-blokk «Modelleringskjeden», ledd 1–6 (interessenter → use case-diagram
  → tekstlig use case → aktivitetsdiagram → sekvensdiagram → klassediagram), hvert ledd med
  **hva sensor krever + antallskrav + case-koblingsregelen + kjedelojaliteten** (sekvens
  følger tekst, klasse reflekterer sekvens). Deretter **tidsbudsjett** for en ~60–90 min
  modelleringsdel (grovt: interessenter/aktører 10 %, use case-diagram + tekst 25 %,
  aktivitetsdiagram 15 %, sekvensdiagram 25 %, klassediagram 25 %). En kort gjennomgang av
  ett ledd av gangen på et mini-case, som forberedelse til den fulle modellbesvarelsen i
  2.6.
- **Oppgavesjangre:** MODELL (delvis — enkeltledd øves isolert i 2.2–2.5). 4–6
  kjede-oversikts-oppgaver med fasit.
- **Typiske feil:** #1 hoppe over / halvferdig modellering (den dyreste, gjentas her); #4
  overkomplisere; #2/#3 bryte kjedelojaliteten; #5 glemme alternativ flyt.
- **Kvote:** 16 quiz / 20 flashcards (kjedens seks ledd, hva hvert ledd krever,
  strykkravet, kjedelojaliteten, tidsbudsjett, ledd↔innhold).

#### Kapittel 2.2: Use case — diagram og tekstlig beskrivelse
**id:** `in1030-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `in1030-2-1`

- **Kapitteltype:** tema + prosedyre.
- **Description:** Use case-diagrammet (aktører + use cases + include/extend) og den
  tekstlige use case-beskrivelsen (pre-/postbetingelse, hovedflyt, alternativ flyt) — ledd
  2–3 i kjeden, og kilden sekvensdiagrammet skal følge.
- **Eksamensbelegg:** Use case 6/6 (del av modelleringen; eget use case-diagram V2018,
  V2020). Sjangre: MODELL, USECASE, MCQ. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (`theorem` for tekstlig use case, mal B):** **use case-diagram** —
  aktør (strekmann), use case (ellipse), systemgrense (boks), **`include`** (felles
  delfunksjon, alltid) vs. **`extend`** (valgfri utvidelse, av og til); **tekstlig use
  case-beskrivelse** (mal B som `theorem`): navn · aktør(er) · **prebetingelse** ·
  **postbetingelse** · **hovedflyt** (nummererte steg) · **≥1 alternativ flyt** (feil #5).
  Understrek at hovedflyten er **kilden** sekvensdiagrammet følger (feil #2).
- **Drøftingsakser:** `include` vs. `extend` (fast forvekslingspunkt); hvorfor tekstlig
  beskrivelse trengs i tillegg til diagrammet (detaljene sekvensen skal følge); hvor mange
  use cases er «nok».
- **Case-forslag:** tegn use case-diagram for Delelageret (låne, reservere, levere,
  vurdere) med én `include` og én `extend`, og skriv den **fulle tekstlige beskrivelsen av
  «Lån ut utstyr»** med hovedflyt + minst én alternativ flyt (utstyr utilgjengelig).
- **Typiske feil:** #5 mangle alternativ flyt; forveksle include/extend; #4 for stort
  diagram; tekstlig beskrivelse uten pre-/postbetingelse.
- **Kvote:** 24 quiz / 28 flashcards (use case-diagram-elementene, include vs. extend,
  tekstlig use case-malen, hoved-/alternativ flyt, begrep↔notasjon).

#### Kapittel 2.3: Aktivitetsdiagram
**id:** `in1030-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-2-2`

- **Kapitteltype:** tema + prosedyre.
- **Description:** Aktivitetsdiagrammet fra start til slutt med aktiviteter og
  beslutningsrombe — ledd 4 i kjeden, flyten i bilde.
- **Eksamensbelegg:** Aktivitetsdiagram 6/6 (fast modelleringskomponent). Sjangre: MODELL,
  MCQ. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (`theorem` for aktivitetsdiagram, mal C):** **startnode** (fylt
  sirkel), **aktivitet** (avrundet boks), **beslutningsrombe** (diamant) med
  **vaktuttrykk** `[ja]`/`[nei]` for if-then-else, **sammenslåing** (merge), **sluttnode**
  (ring om fylt sirkel); evt. **svømmebaner** (swimlanes) for hvem som gjør hva `(bør
  kjenne)`. Gjengi mal C som `theorem`. `⚠️ Hold det enkelt (feil #4): én ren flyt fra
  start til slutt, vis forgreninger via romben — ikke tegn alle unntak.`
- **Drøftingsakser:** aktivitetsdiagram (flyt/prosess) vs. sekvensdiagram (objektinteraksjon)
  — hva hvert viser; når en beslutningsrombe trengs; hvorfor enkelt slår komplekst.
- **Case-forslag:** tegn aktivitetsdiagram for «Lån ut utstyr» i Delelageret fra start til
  slutt, med en beslutningsrombe (er utstyret ledig?).
- **Typiske feil:** #4 overkomplisert diagram; glemme start-/sluttnode; beslutningsrombe
  uten vaktuttrykk; flyt som ikke henger sammen.
- **Kvote:** 22 quiz / 26 flashcards (start/slutt/aktivitet/rombe, vaktuttrykk, swimlanes,
  aktivitet vs. sekvens, hold-enkelt-regelen, begrep↔notasjon).

#### Kapittel 2.4: Sekvensdiagram
**id:** `in1030-2-4` · **number:** 2.4 · **estimatedMinutes:** 65 · **prerequisites:** `in1030-2-2`

- **Kapitteltype:** tema + prosedyre.
- **Description:** Sekvensdiagrammet med objekter, metodekall i tekstens rekkefølge og
  alt-blokk for alternativ flyt — ledd 5, den mest kjedelojale delen.
- **Eksamensbelegg:** Sekvensdiagram 6/6 (fast; V2017/V2018-løsningene er
  sekvens/klasse-gjennomganger). Sjangre: MODELL, MCQ. Prioritet: **perfekt** (§7 pkt. 1).
  `⚠️ Sekvensen skal følge hovedflyten i den tekstlige use case-beskrivelsen (feil #2), og
  ha alternativ flyt via alt-blokk (feil #5).`
- **Begrepskontrakt (`theorem` for sekvensdiagram, mal D):** **objekt/livslinje**
  (instans, `:Klasse` eller `navn:Klasse` — IKKE selve klassen), **aktiveringsboks**,
  **melding/metodekall** (heltrukket pil med metodenavn, f.eks. `finnUtstyr(id):Utstyr`),
  **retur** (stiplet pil), **`alt`-fragment** (alt-blokk for alternativ flyt), **`loop`**
  der naturlig. Gjengi mal D som `theorem`. Hvert metodekall skal svare til en metode som
  havner i klassediagrammet (broen til 2.5).
- **Drøftingsakser:** hvorfor rekkefølgen MÅ speile hovedflyten (kjernen i #2); objekt vs.
  klasse (fast forvekslingspunkt); hvordan sekvensen «bestiller» metodene til klassediagrammet.
- **Case-forslag:** tegn sekvensdiagram for «Lån ut utstyr» som **følger hovedflyten** fra
  den tekstlige beskrivelsen i 2.2, med en **alt-blokk** for «utstyr utilgjengelig», og
  bruk metoder som `finnUtstyr(...)`, `reserver(...)`.
- **Typiske feil:** #2 rekkefølge som ikke følger teksten; #5 mangle alt-blokk; bruke
  klasser i stedet for objekter på livslinjene; #4 for mange meldinger.
- **Kvote:** 24 quiz / 28 flashcards (livslinje/objekt, metodekall, retur, alt-blokk,
  følg-teksten-regelen, objekt vs. klasse, begrep↔notasjon).

#### Kapittel 2.5: Klassediagram
**id:** `in1030-2-5` · **number:** 2.5 · **estimatedMinutes:** 70 · **prerequisites:** `in1030-2-4`

- **Kapitteltype:** tema + prosedyre (kjedens største enkeltledd).
- **Description:** Klassediagrammet som reflekterer sekvensdiagrammet: klasser med
  attributter/metoder, assosiasjoner og multiplisitet — ledd 6, der modelleringspoengene
  ofte avgjøres.
- **Eksamensbelegg:** Klassediagram 6/6 (fast; V2017/V2018-løsningene). Sjangre: MODELL,
  KORT (OOD-begreper), MCQ. Prioritet: **perfekt** (§7 pkt. 1). `⚠️ Skal reflektere
  sekvensdiagrammet (minst samme klasser) OG ha attributter, metoder, assosiasjoner og
  multiplisitet (feil #3).`
- **Begrepskontrakt (`theorem` for klassediagram, mal E):** **klasse** (tre rom: navn /
  **attributter** / **metoder**), **assosiasjon** (linje mellom klasser) med
  **multiplisitet** i begge ender (**`1`**, **`0..*`**, **`1..*`**, **`*`** — én-til-mange,
  mange-til-mange), **generalisering/arv** (hul trekant, «er-en»), **aggregering/
  komposisjon** (rombe, «har-en»/«består-av»), **domenemodell** (klassediagram uten
  metoder). Gjengi mal E som `theorem`. Reflektér sekvensen: hver metode kalt i 2.4 finnes
  i riktig klasse; hvert objekt på en livslinje har en klasse her.
- **Drøftingsakser:** hvorfor multiplisitet er obligatorisk (kjernen i #3); assosiasjon vs.
  arv vs. komposisjon; hvordan sekvensdiagrammet bestemmer klassenes metoder (kjedelojalitet);
  domenemodell vs. designklassediagram.
- **Case-forslag:** tegn klassediagram for Delelageret som **reflekterer sekvensdiagrammet
  fra 2.4** (klasser: Innbygger, Utlån, Utstyr, Lager) med attributter, metoder og
  multiplisitet (en innbygger har `0..*` utlån; et utlån gjelder `1..*` utstyr).
- **Typiske feil:** #3 glemme multiplisitet/attributter/metoder; klassediagram som ikke
  reflekterer sekvensen; forveksle assosiasjon og arv; #4 overfylt diagram.
- **Kvote:** 26 quiz / 34 flashcards (klasse-oppbygning, assosiasjon, multiplisitet-typene,
  arv vs. komposisjon, domenemodell, reflekter-sekvensen-regelen, begrep↔notasjon).

#### Kapittel 2.6: Modellbesvarelse — hele kjeden på Delelageret
**id:** `in1030-2-6` · **number:** 2.6 · **estimatedMinutes:** 80 · **prerequisites:** `in1030-2-5`

- **Kapitteltype:** modellbesvarelse (praktikum).
- **Description:** Én fullstendig, gjennomskrevet modelleringskjede på det gjennomgående
  Delelageret-caset, ledd for ledd, med margkommentarer om poenguttelling — og en
  kommentert svakere variant.
- **Eksamensbelegg:** Modellering 6/6 (100 %, 30–43 %, strykkritisk). Sjangre: MODELL (full
  modellbesvarelse). Prioritet: **perfekt** (§7 pkt. 1). Caset er **nyskrevet** (Delelageret
  — egne parter, funksjoner, data). `⚠️ Feil #1 (strykkravet) demonstreres eksplisitt via
  den svake varianten som utelater klassediagrammet → ikke bestått.`
- **Innholdskontrakt:** full besvarelse gjennom hele kjeden (mal A): (1) **≥6
  interessenter** + primær/sekundær-aktører; (2) **use case-diagram** (låne/reservere/
  levere/vurdere) med include/extend; (3) **tekstlig use case** «Lån ut utstyr» (pre-/
  postbetingelse, hovedflyt, ≥1 alternativ flyt); (4) **aktivitetsdiagram** (start→slutt,
  beslutningsrombe); (5) **sekvensdiagram** som **følger hovedflyten** + alt-blokk; (6)
  **klassediagram** som **reflekterer sekvensen** med attributter/metoder/multiplisitet.
  Levert som `collapsible` **full modellbesvarelse** med margnotater (hva gir uttelling ved
  hvert ledd) + `collapsible` **kommentert svakere variant** (utelatt klassediagram +
  sekvens som ikke følger teksten + manglende alternativ flyt → viser strykfallet og
  poengtapet) + `tip` **sensorblikk** (hva som skiller bestått fra ikke bestått per ledd).
- **Oppgavesjangre:** MODELL. Én stor nyskrevet full modelleringsoppgave + 4–6
  ledd-oppgaver med fasit.
- **Typiske feil:** #1 (via svak variant — strykfallet), #2, #3, #4, #5 — hver knyttet til
  et konkret ledd i modellsvaret.
- **Kvote:** 16 quiz / 14 flashcards (case-spesifikke koblinger, kjedelojaliteten i praksis,
  hvilket ledd gir hvilken uttelling, strykfallet).

**Prøve-kvote Del 2:** 4 prøver (`in1030-2-prove`, chapterNumber 2.P):
1. *Use case (USECASE):* skriv tekstlig use case (pre-/postbetingelse, hovedflyt, ≥1
   alternativ flyt) + use case-diagram med include/extend for et gitt case — trener feil #5.
2. *Aktivitet + sekvens (MODELL):* tegn aktivitetsdiagram + sekvensdiagram for samme use
   case, der **sekvensen følger hovedflyten** og har alt-blokk — trener feil #2/#4/#5.
3. *Klassediagram (MODELL):* tegn klassediagram som **reflekterer** et gitt sekvensdiagram,
   med multiplisitet/attributter/metoder à tre-nivå-mal — trener feil #3.
4. *Full mini-kjede (MODELL):* kjør hele kjeden (interessenter → klasse) på et lite gitt
   case på ~40 min, momentliste + fasit — trener feil #1 (leverer ALT) og kjedelojaliteten.

### Del 3 — Systemutvikling: prosessmodeller, smidig og DevOps

#### Kapittel 3.1: Prosessmodeller — fossefall, inkrementell og valg
**id:** `in1030-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1030-0-3`

- **Kapitteltype:** tema.
- **Description:** Fossefall vs. inkrementell/iterativ utvikling, hvordan man velger
  prosessmodell, og hva prosess-samsvar betyr.
- **Eksamensbelegg:** Prosessmodeller 4/6 (kortsvar/drøfting + flervalg). Sjangre: KORT,
  DRØFT, MCQ. Prioritet: **kunne** (§7 pkt. 8).
- **Begrepskontrakt:** **fossefall** (sekvensielle faser, mye forhåndsplanlegging, endring
  dyrt sent); **inkrementell/iterativ** utvikling (**inkrement** = tillegg i programvaren;
  bygg litt, lever, gjenta); **valg av prosessmodell** — avvei kvalitet vs. kostnad/tid,
  endringstakt, størrelse/kompleksitet, teamstørrelse, kundeinvolvering;
  **prosess-samsvar** (samsvar mellom valgt prosessmodell og den reelle prosessen);
  **PS2000** (smidig kontrakts-/målprismodell med delt risiko) `(verifiser mot gjeldende
  pensum)`.
- **Drøftingsakser:** når fossefall likevel passer (stabile krav, sikkerhetskritisk); hvorfor
  høy endringstakt taler for iterativt; prosess-samsvar (å si «smidig» men jobbe fossefall).
- **Case-forslag:** velg og begrunn prosessmodell for et nyskrevet prosjekt med usikre,
  skiftende krav (peker mot smidig i 3.2).
- **Typiske feil:** #13 velge modell uten begrunnelse; fremstille fossefall som alltid
  dårlig; blande inkrementell og iterativ uten å forklare inkrement.
- **Kvote:** 22 quiz / 26 flashcards (fossefall, inkrementell/iterativ, inkrement,
  valgkriterier, prosess-samsvar, PS2000, modell↔egenskap).

#### Kapittel 3.2: Smidig — Scrum, Kanban og teamarbeid
**id:** `in1030-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `in1030-3-1`

- **Kapitteltype:** tema.
- **Description:** Scrum (roller, hendelser, artefakter), Kanban (WIP-grense, flyt), de 12
  smidige prinsippene, smidige møter og teamdynamikk — fagets garanterte drøftingstema.
- **Eksamensbelegg:** Smidig 6/6 (100 %; kortsvar/drøfting + flervalg) + teamarbeid 2/6
  (smidige møter 2018, teamdrøfting 2017). Sjangre: KORT, DRØFT, MCQ. Prioritet: **perfekt**
  (§7 pkt. 4).
- **Begrepskontrakt:** **Scrum** — **sprint/iterasjon** (2–4 uker), **produktkø/backlog**,
  **produkteier (PO)**, **Scrum master**, utviklingsteam; **hendelser**: **daglig
  stand-up**, sprintplanlegging, **sprint review**, **retrospektiv**; **Kanban** —
  **WIP-grense** (begrens arbeid under utførelse), **visualisering** av arbeidsflyt,
  **just-in-time**/pull; **de 12 smidige prinsippene** (kunne gjengi essensen: tidlig og
  hyppig leveranse, velkommen endring, samarbeid, fungerende programvare som
  fremdriftsmål); **fossefall vs. smidig** (argumenter for smidig: fleksibilitet, hyppige
  leveranser, kundeverdi); **teamdynamikk** (tverrfaglig, selvorganiserende team;
  retrospektiv som forbedringsmekanisme).
- **Drøftingsakser:** Scrum vs. Kanban (iterasjon vs. kontinuerlig flyt); PO vs. Scrum
  master (ulike roller — fast forvekslingspunkt); når smidig ikke passer; smidige møters
  funksjon.
- **Case-forslag:** argumentér for smidig fremfor fossefall for et nyskrevet prosjekt med
  skiftende krav, og skisser en Scrum-oppsett (roller + hendelser) for teamet.
- **Typiske feil:** #13 påstander uten forankring i prinsippene; forveksle PO og Scrum
  master; blande Scrum-hendelsene; fremstille Kanban som «Scrum uten sprinter».
- **Kvote:** 26 quiz / 36 flashcards (Scrum-roller/hendelser/artefakter, Kanban WIP/flyt, de
  12 prinsippene, fossefall vs. smidig, smidige møter, teamdynamikk, begrep↔rolle/hendelse).

#### Kapittel 3.3: DevOps og kodeforvaltning
**id:** `in1030-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-3-2`

- **Kapitteltype:** tema.
- **Description:** DevOps-prinsippene, kobling utvikling↔drift, versjonskontroll
  (branching/merging) og continuous integration/delivery/deployment.
- **Eksamensbelegg:** DevOps 3/6 (egen oppgave 2020, 2021 + flervalg). Sjangre: KORT, DRØFT,
  MCQ. Prioritet: **kjenne** (§7 pkt. 10). `(vekt varierer — verifiser.)`
- **Begrepskontrakt:** **DevOps** = utvikling (Dev) + drift (Ops) sammen; **hovedprinsipper**
  («alle ansvarlig for alt», «automatiser det som kan automatiseres», «mål først, test
  senere»); **kodeforvaltning/versjonskontroll** — **branching** (gren), **merging**
  (fletting), codeline, baseline, release; **continuous integration** (hyppig
  integrering + automatisk bygg/test), **continuous delivery** (alltid leveringsklar),
  **continuous deployment** (automatisk til produksjon); kobling til de 12 smidige
  prinsippene (hyppig leveranse).
- **Drøftingsakser:** hvorfor «alle ansvarlig for alt» bryter Dev/Ops-siloen; CI vs. CD vs.
  continuous deployment (fast forvekslingspunkt); hvorfor automatisering muliggjør hyppige
  leveranser.
- **Case-forslag:** skisser en DevOps-/CI-CD-oppsett for et nyskrevet team og forklar hva
  hvert ledd automatiserer.
- **Typiske feil:** forveksle delivery og deployment; behandle DevOps som bare verktøy (det
  er også kultur/ansvar); glemme koblingen til smidig.
- **Kvote:** 22 quiz / 26 flashcards (DevOps-prinsippene, versjonskontroll branching/merging,
  CI/CD/deployment, kobling til smidig, begrep↔definisjon).

**Prøve-kvote Del 3:** 4 prøver (`in1030-3-prove`, chapterNumber 3.P):
1. *Prosessmodeller:* 8 MCQ (fossefall/inkrementell/valgkriterier) + 1 KORT (velg + begrunn
   modell for et gitt prosjekt) — trener feil #13.
2. *Smidig (DRØFT):* argumentér for smidig fremfor fossefall + skisser Scrum-oppsett
   (roller + hendelser) à tre-nivå-mal.
3. *Scrum/Kanban:* KORT (Scrum vs. Kanban; PO vs. Scrum master) — trener rolleforvekslingen.
4. *DevOps-bredde:* 8 MCQ (DevOps-prinsipper, CI/CD/deployment, versjonskontroll) + 1 KORT
   (forklar CI vs. CD vs. continuous deployment).

### Del 4 — Universell utforming og WCAG

#### Kapittel 4.1: Universell utforming vs. tilgjengelighet
**id:** `in1030-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1030-0-3`

- **Kapitteltype:** tema.
- **Description:** Definisjonen av universell utforming, det avgjørende skillet mot
  «tilgjengelighet», hvorfor UU er viktig, og hva informatikeren konkret kan gjøre.
- **Eksamensbelegg:** UU/WCAG 6/6 (100 %; egen oppgave 15–25 % + flervalg). Sjangre: DRØFT,
  KORT, MCQ. Prioritet: **perfekt** (§7 pkt. 2 — én av de to tyngste rene drøftingsblokkene).
- **Begrepskontrakt:** **universell utforming (UU)** — **én løsning som alle kan bruke
  uavhengig av funksjonsevne** (ingen særtilpasning nødvendig); **tilgjengelighet** —
  **særtilpasning for enkeltgrupper** (en ekstra løsning ved siden av); **buss-eksempelet**
  (rampe som legges ut = tilgjengelighet; lavgulvbuss uten rampe = UU); **hvorfor UU er
  viktig**: like muligheter/demokrati, økonomi (én løsning billigere enn mange),
  større brukerbase, unngå **digitalt utenforskap**; **funksjonsgap**; **informatikerens
  rolle** (brukertest med ulike grupper, følg standarder, UU-tankegang gjennom hele
  prosessen — ikke som etterpåfiks). `⚠️ Skillet UU/tilgjengelighet er kjernen (feil #6).`
- **Drøftingsakser:** hvorfor særtilpasning (tilgjengelighet) er dårligere enn UU (segregerer,
  dyrere, glemmes); UU som eksternt krav (kobler til 1.4); digitalt utenforskap som
  samfunnsproblem (kobler til Del 7).
- **Case-forslag:** vurdér en nyskrevet tjeneste (f.eks. Delelageret-appen) — hva ville være
  UU vs. bare tilgjengelighet, og hvorfor UU er å foretrekke.
- **Typiske feil:** #6 blande UU og tilgjengelighet (beskrive særtilpasning som UU); #13
  påstå «viktig» uten begrunnelse; glemme informatikerens konkrete rolle.
- **Kvote:** 24 quiz / 30 flashcards (UU-definisjon, UU vs. tilgjengelighet, buss-eksempelet,
  hvorfor UU, digitalt utenforskap, informatikerens rolle, begrep↔definisjon).

#### Kapittel 4.2: WCAG og lovverk
**id:** `in1030-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-4-1`

- **Kapitteltype:** tema.
- **Description:** WCAG 2.0s fire prinsipper og struktur, og lovverket/tilsynet som gjør UU
  til et rettslig krav i Norge.
- **Eksamensbelegg:** UU/WCAG 6/6 (WCAG-fakta fast i flervalg + kortsvar). Sjangre: KORT,
  MCQ, DRØFT (lovforankring). Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **WCAG 2.0** (Web Content Accessibility Guidelines) — de **fire
  prinsippene**: **mulig å oppfatte** (perceivable), **mulig å betjene** (operable),
  **forståelig** (understandable), **robust** (robust); **12 retningslinjer** og
  **suksesskriterier** (A/AA/AAA) under prinsippene; **lovverk**: **forskrift om
  universell utforming av IKT-løsninger**, **likestillings- og diskrimineringsloven**,
  **WAD** (Web Accessibility Directive / EUs webtilgjengelighetsdirektiv); **tilsyn**:
  tidligere **Difi**, nå **Digdir** / uu.tilsynet. `(verifiser gjeldende forskrift og
  tilsynsnavn — Difi ble Digdir; forskrift/WCAG-versjon kan være oppdatert.)`
- **Drøftingsakser:** hvorfor de fire prinsippene dekker ulike funksjonsnedsettelser (syn/
  hørsel/motorikk/kognisjon); lov som drivkraft vs. UU som god praksis; A/AA-nivå som
  lovkrav.
- **Case-forslag:** knytt to konkrete UU-tiltak for en nyskrevet app til hvert sitt
  WCAG-prinsipp, og pek på den relevante loven/tilsynet.
- **Typiske feil:** #13 UU-drøfting uten lov-/WCAG-forankring der oppgaven ber om det; gjengi
  færre enn fire prinsipper (feil #11); bruke utdatert tilsynsnavn (Difi) uten forbehold.
- **Kvote:** 24 quiz / 34 flashcards (de fire WCAG-prinsippene, retningslinjer/
  suksesskriterier, forskrift om UU, likestillings- og diskrimineringsloven, WAD, Digdir/Difi,
  prinsipp↔betydning).

**Prøve-kvote Del 4:** 4 prøver (`in1030-4-prove`, chapterNumber 4.P):
1. *UU-grunnlag:* 8 MCQ (UU vs. tilgjengelighet, buss-eksempel, hvorfor UU) + 1 KORT
   (definer UU + skill mot tilgjengelighet med eksempel) — trener feil #6.
2. *WCAG (KORT):* gjengi de fire prinsippene med ett tiltak hver à tre-nivå-mal — trener
   feil #11.
3. *Lovforankring (DRØFT):* hvorfor UU er lovpålagt i Norge (forskrift/lov/tilsyn),
   momentliste — trener feil #13.
4. *UU-bredde:* 8 MCQ (WCAG-prinsipper, suksesskriterier, lovverk, digitalt utenforskap,
   informatikerens rolle).

### Del 5 — Personvern, GDPR og samtykke

#### Kapittel 5.1: Personopplysninger og personvernprinsippene
**id:** `in1030-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-0-3`

- **Kapitteltype:** tema.
- **Description:** Hva personopplysninger er (direkte/indirekte), GDPR-prinsippene, den
  registrertes rettigheter og Datatilsynets rolle — den andre tunge drøftingsblokken.
- **Eksamensbelegg:** Personvern 6/6 (100 %; egen oppgave 10–25 % + flervalg). Sjangre:
  DRØFT, KORT, MCQ. Prioritet: **perfekt** (§7 pkt. 3).
- **Begrepskontrakt:** **personopplysning** — opplysning som kan knyttes til en person;
  **direkte identifiserende** (navn, fødselsnummer, e-post, adresse) vs. **indirekte
  identifiserende** (i kombinasjon: alder + sted + kjønn, brukernavn, IP);
  **særlige/sensitive kategorier** (helse, etnisitet m.m.); **GDPR/personvernforordningen**
  og **personopplysningsloven**; **prinsipper** — **formålsbegrensning**,
  **dataminimering**, **lagringsbegrensning** (+ lovlighet, riktighet, integritet);
  **den registrertes rettigheter** — innsyn, retting, sletting, klage; **Datatilsynet**
  (tilsynsmyndighet). `(verifiser at lov-/artikkelnavn er gjeldende.)`
- **Drøftingsakser:** dataminimering vs. produktnytte (samle minst mulig); når indirekte
  data blir identifiserende i kombinasjon; personvern vs. samfunnsnytte.
- **Case-forslag:** pek ut de direkte og indirekte personopplysningene i en nyskrevet app
  (f.eks. Delelageret) og drøft to prinsipper (dataminimering + formålsbegrensning) mot den.
- **Typiske feil:** #13 personverndrøfting uten lov-/prinsippforankring; blande direkte og
  indirekte; glemme den registrertes rettigheter; drøfte færre prinsipper enn bedt (feil #11).
- **Kvote:** 24 quiz / 32 flashcards (personopplysning direkte/indirekte, sensitive
  kategorier, prinsippene, rettighetene, Datatilsynet, begrep↔definisjon).

#### Kapittel 5.2: Samtykke og roller — behandlingsansvarlig vs. databehandler
**id:** `in1030-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-5-1`

- **Kapitteltype:** tema.
- **Description:** Samtykkets fire krav og skillet mellom behandlingsansvarlig og
  databehandler (med databehandleravtalen) — de to mest testede personvern-skillene.
- **Eksamensbelegg:** Personvern 6/6 (samtykkekrav + roller fast kortsvar/flervalg).
  Sjangre: KORT, DRØFT, MCQ. Prioritet: **perfekt** (§7 pkt. 3). `⚠️ Alle fire
  samtykkekravene MÅ med, og roller må ikke byttes om (feil #7).`
- **Begrepskontrakt (`theorem` for de fire samtykkekravene):** **samtykke** skal være
  **frivillig** (uten press/maktforhold), **spesifikt** (eget samtykke per formål),
  **informert** (vet hva man samtykker til, lagring, tilbaketrekking) og **utvetydig**
  (aktiv handling — «den som tier samtykker» gjelder IKKE) — gjengis som `theorem`;
  **behandlingsansvarlig** (bestemmer formål og midler, har hovedansvaret for
  opplysningene) vs. **databehandler** (behandler **på vegne av / etter instruks fra**
  den behandlingsansvarlige); **databehandleravtale** (regulerer forholdet mellom dem).
- **Drøftingsakser:** hvorfor «forhåndshuket boks» bryter utvetydig-kravet; hvorfor
  maktforhold (arbeidsgiver/bruker) kan gjøre samtykke ufritt; hvem er ansvarlig når en
  underleverandør behandler data (kjernen i #7).
- **Case-forslag:** for en nyskrevet tjeneste med en skyleverandør — hvem er
  behandlingsansvarlig og hvem er databehandler, og hva må databehandleravtalen dekke.
- **Typiske feil:** #7 bytte om behandlingsansvarlig og databehandler; utelate ett av de
  fire samtykkekravene; tro at taushet er samtykke.
- **Kvote:** 24 quiz / 32 flashcards (de fire samtykkekravene, behandlingsansvarlig vs.
  databehandler, databehandleravtale, «taushet ≠ samtykke», begrep↔rolle).

#### Kapittel 5.3: Samtykkeskjema
**id:** `in1030-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-5-2`

- **Kapitteltype:** sjanger/prosedyre (regnefag-stil).
- **Description:** Hvordan et samtykkeskjema utformes så det oppfyller de fire
  samtykkekravene og personvernprinsippene i praksis.
- **Eksamensbelegg:** Samtykkeskjema egen oppgave (V2020). Sjangre: SKJEMA, KORT.
  Prioritet: **kunne** (§7 pkt. 3). `(svakt belagt — ett sett; men eksplisitt pensum.)`
- **Innholdskontrakt (`theorem` — samtykkeskjema-malen, mal G):** gjengi mal G som
  `theorem` (formål · hva som samles inn (dataminimering) · frivillighet + rett til å
  trekke · lagringstid/sletting · behandlingsansvarlig/kontaktperson · **aktiv
  avkrysning**). Deretter et **gjennomskrevet eksempel-skjema** for en nyskrevet tjeneste
  med margnotater om hvordan hvert felt operasjonaliserer et av de fire samtykkekravene
  (5.2), og en `warning` om vanlige feil (forhåndshuket boks bryter utvetydig-kravet).
- **Drøftingsakser:** hvordan skjemaet konkretiserer «informert» og «spesifikt»; hvorfor
  aktiv avkrysning (ikke forhåndshuket); dataminimering i praksis (ikke be om mer enn
  formålet krever).
- **Case-forslag:** utform et samtykkeskjema for Delelageret som oppfyller alle fire
  samtykkekravene, og pek på hvilket felt dekker hvilket krav.
- **Typiske feil:** #7 skjema som ikke dekker alle fire kravene; forhåndshuket
  avkrysning; be om mer data enn formålet krever (bryter dataminimering).
- **Kvote:** 16 quiz / 18 flashcards (samtykkeskjema-feltene, felt↔samtykkekrav, aktiv
  avkrysning, dataminimering i skjema).

**Prøve-kvote Del 5:** 4 prøver (`in1030-5-prove`, chapterNumber 5.P):
1. *Personopplysninger:* 8 MCQ (direkte/indirekte, prinsipper, rettigheter, Datatilsynet)
   + 1 KORT (pek ut direkte + indirekte personopplysninger i et gitt system).
2. *Samtykke (KORT):* forklar alle fire samtykkekravene med eksempel à tre-nivå-mal —
   trener feil #7/#11.
3. *Roller (KORT):* behandlingsansvarlig vs. databehandler i et gitt oppsett med
   skyleverandør — trener feil #7.
4. *Samtykkeskjema (SKJEMA):* utform et samtykkeskjema for et gitt case som dekker alle
   fire kravene + dataminimering.

### Del 6 — Brukskvalitet, objektorientert design og testing

#### Kapittel 6.1: Brukskvalitet og interaksjonsdesign
**id:** `in1030-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-1-3`

- **Kapitteltype:** tema.
- **Description:** Hva brukskvalitet er, hvordan man designer for gode brukeropplevelser, og
  hvordan brukskvalitet henger sammen med UU og brukerundersøkelser.
- **Eksamensbelegg:** Brukskvalitet/bruk vevd inn (V2018/V2022 «bruk» 20 %; oblig 2).
  Sjangre: KORT, DRØFT, MCQ. Prioritet: **kunne** (§7 — bruk/brukskvalitet er egen
  case-komponent i flere sett). `(vekt varierer — verifiser.)`
- **Begrepskontrakt:** **brukskvalitet** (usability) — hvor effektivt, efficient og
  tilfredsstillende brukere når mål; sentrale egenskaper (lærbarhet, effektivitet,
  hukommelse, feilhåndtering, tilfredshet); **interaksjonsdesign** (utforme samspillet
  bruker↔system); **brukersentrert design** (involver brukeren gjennom hele løpet);
  **prototyping** (lav-/høyoppløst); kobling til **brukertesting** (1.3) og **UU** (Del 4 —
  UU er en del av god brukskvalitet). `(begrepssett varierer mellom pensumårganger —
  verifiser.)`
- **Drøftingsakser:** brukskvalitet vs. UU (overlapp, men UU handler om *alle* uavhengig av
  funksjonsevne); hvorfor brukertesting avdekker det utviklere ikke ser; prototyping før
  bygging.
- **Case-forslag:** foreslå to brukskvalitetsgrep for en nyskrevet app og forklar hvordan du
  ville brukertestet dem.
- **Typiske feil:** #13 påstander om «brukervennlig» uten kriterier; blande brukskvalitet og
  UU; hoppe over brukertesting.
- **Kvote:** 20 quiz / 24 flashcards (brukskvalitet-egenskapene, interaksjonsdesign,
  brukersentrert design, prototyping, kobling til UU/testing, begrep↔definisjon).

#### Kapittel 6.2: Objektorientert design — kohesjon, kobling og MVC
**id:** `in1030-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1030-2-5`

- **Kapitteltype:** tema.
- **Description:** Designprinsippene høy kohesjon / lav kobling, MVC-mønsteret og
  domenemodell — OOD-begrepene som mater klassediagrammet og flervalgene.
- **Eksamensbelegg:** OOD 3/6 (kohesjon/kobling, MVC, domenemodell i flervalg + pensum-
  kortsvar). Sjangre: KORT, MCQ, MODELL-koblingsstoff. Prioritet: **kunne/kjenne** (§7 pkt.
  11). `⚠️ Kohesjon og kobling byttes lett om (feil #10).`
- **Begrepskontrakt:** **høy kohesjon** (en klasse/modul har **ett veldefinert funksjonelt
  område** — henger godt sammen) vs. **lav kobling** (**få avhengigheter** til andre
  objekter/moduler) — begge er mål; **MVC (Model-View-Controller)** — **Model** (data/
  logikk), **View** (presentasjon), **Controller** (håndterer brukerinteraksjon og
  instruerer View og Model); **domenemodell** (klassediagram uten metoder, begrepsmodell);
  **generalisering/arv** og **assosiasjon** (fra klassediagrammet, 2.5). Kobler direkte til
  klassediagram-kvaliteten.
- **Drøftingsakser:** hvorfor høy kohesjon + lav kobling gir vedlikeholdbar kode (kjernen i
  #10); hva Controller gjør i MVC (fast forvekslingspunkt); domenemodell vs.
  designklassediagram.
- **Case-forslag:** vurder en nyskrevet klassestruktur — pek på lav kohesjon / høy kobling
  og foreslå en MVC-inndeling.
- **Typiske feil:** #10 bytte om kohesjon og kobling; feilplassere ansvar i MVC (logikk i
  View); blande domenemodell og designklassediagram.
- **Kvote:** 24 quiz / 30 flashcards (høy kohesjon, lav kobling, MVC-rollene, domenemodell,
  arv/assosiasjon, begrep↔definisjon).

#### Kapittel 6.3: Testing — verifisering, validering og testfaser
**id:** `in1030-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-1-4`

- **Kapitteltype:** tema.
- **Description:** Skillet verifisering vs. validering, de fire testfasene, og hvordan man
  tester (særlig ikke-funksjonelle) krav.
- **Eksamensbelegg:** Testing 2/6 (verifisering/validering + testfaser i flervalg; «hvordan
  teste kravet» i caset). Sjangre: KORT, MCQ, KRAV-koblingsstoff. Prioritet: **kjenne** (§7
  pkt. 12). `⚠️ Verifisering og validering byttes lett om.`
- **Begrepskontrakt:** **verifisering** («bygger vi produktet **riktig**?» — mot
  spesifikasjonen) vs. **validering** («bygger vi **riktig produkt**? — gjør systemet det
  brukeren faktisk ønsker?»); **testfaser** — **enhetstest** (enkeltkomponent),
  **integrasjonstest** (samspill mellom komponenter), **systemtest** (hele systemet),
  **akseptansetest** (kunden godkjenner); **testing av krav** (koble ikke-funksjonelt krav
  til testmåte — fra 1.4: lasttest, brukertest, UU-revisjon).
- **Drøftingsakser:** verifisering vs. validering på et konkret eksempel (kjernen i
  forvekslingen); hvorfor akseptansetest er validering; hvordan et ikke-funksjonelt krav
  testes.
- **Case-forslag:** for tre gitte krav (ett funksjonelt, to ikke-funksjonelle) — angi
  testfase og testmåte for hvert.
- **Typiske feil:** bytte om verifisering og validering; blande testfasene; hevde at et krav
  er testet uten å si hvordan.
- **Kvote:** 18 quiz / 22 flashcards (verifisering vs. validering, de fire testfasene, testing
  av krav, begrep↔definisjon).

**Prøve-kvote Del 6:** 4 prøver (`in1030-6-prove`, chapterNumber 6.P):
1. *Brukskvalitet:* 8 MCQ (brukskvalitet-egenskaper, interaksjonsdesign, prototyping) + 1
   KORT (to brukskvalitetsgrep + hvordan brukerteste dem).
2. *OOD (KORT):* forklar høy kohesjon + lav kobling med eksempel à tre-nivå-mal — trener
   feil #10.
3. *MVC + domenemodell:* KORT (MVC-rollene; domenemodell vs. designklassediagram).
4. *Testing:* 6 MCQ (verifisering/validering, testfaser) + 1 KORT (verifisering vs.
   validering med eksempel + testfase per krav).

### Del 7 — Sikkerhet, risiko, etikk og samfunnskonsekvenser

#### Kapittel 7.1: Sikkerhet og trusselmodellering
**id:** `in1030-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1030-5-1`

- **Kapitteltype:** tema.
- **Description:** Trusselscenarier og trusselmodellering (trusselpoker), vanlige
  sårbarheter, og hvordan sikkerhet skiller seg fra personvern.
- **Eksamensbelegg:** Sikkerhet 4/6 (trusselscenario + flervalg med sårbarheter). Sjangre:
  KORT, MCQ, RISIKO-koblingsstoff. Prioritet: **kunne** (§7 pkt. 9).
- **Begrepskontrakt:** **trusselscenario** (konkret angrep man vurderer); **trussel­
  modellering** (systematisk identifisere trusler); **trusselpoker** (samarbeidsteknikk for
  å identifisere + vurdere trusler); **sikkerhet vs. personvern** (sikkerhet = beskytte mot
  angrep/tap; personvern = kontroll over egne opplysninger — beslektet, ikke det samme);
  kjente **sårbarheter** (som distraktorer i flervalg): **SQL-injeksjon**, **XSS**, **DDoS**,
  **spoofing/svake passord**. `(sårbarhets-detaljer er «bør kjenne» — verifiser vekt.)`
- **Drøftingsakser:** sikkerhet vs. personvern (overlapp og forskjell); hvorfor
  trusselmodellering gjøres tidlig; risiko separat for sikkerhet og personvern (mater 7.2).
- **Case-forslag:** identifiser to trusselscenarier for en nyskrevet tjeneste og skill
  sikkerhets- fra personvernrisikoen i hvert.
- **Typiske feil:** blande sikkerhet og personvern; liste sårbarheter uten kobling til
  caset; behandle trusselmodellering som etterpåfiks.
- **Kvote:** 22 quiz / 26 flashcards (trusselscenario, trusselmodellering, trusselpoker,
  sikkerhet vs. personvern, kjente sårbarheter, begrep↔definisjon).

#### Kapittel 7.2: Risikoanalyse og usikkerhetsmatrise
**id:** `in1030-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-7-1`

- **Kapitteltype:** sjanger/prosedyre (regnefag-stil).
- **Description:** Hvordan en risikoanalyse settes opp i en usikkerhetsmatrise (risiko,
  sannsynlighet, konsekvens, tiltak, ansvarlig) — separat for sikkerhet og personvern.
- **Eksamensbelegg:** Risikoanalyse i caset (V2020 «minst seks risikomomenter»). Sjangre:
  RISIKO, KORT. Prioritet: **kunne** (§7 pkt. 9). `⚠️ Treff antallskravet (feil #11).`
- **Innholdskontrakt (`theorem` — risikomatrise-malen, mal H):** gjengi mal H som `theorem`
  (tabell: risiko/trussel · sannsynlighet · konsekvens · risikonivå L/M/H · tiltak ·
  ansvarlig), understrek at risiko vurderes **separat for sikkerhet og personvern** per
  scenario, og at **tiltak utledes fra risikoen** (ikke generisk liste). Deretter en
  **gjennomskrevet risikomatrise** for en nyskrevet tjeneste med **minst seks
  risikomomenter** og margnotater om rangering.
- **Drøftingsakser:** hvorfor risiko = sannsynlighet × konsekvens (begge må vurderes);
  hvorfor sikkerhet og personvern skilles i matrisen; å prioritere tiltak etter risikonivå.
- **Case-forslag:** sett opp en usikkerhetsmatrise for Delelageret med minst seks
  risikomomenter (både sikkerhet og personvern), med tiltak og ansvarlig.
- **Typiske feil:** #11 for få risikomomenter; generiske tiltak uten kobling til risikoen;
  vurdere bare sannsynlighet eller bare konsekvens; blande sikkerhets- og personvernrisiko.
- **Kvote:** 18 quiz / 20 flashcards (risikomatrise-kolonnene, sannsynlighet × konsekvens,
  sikkerhet vs. personvern i matrisen, tiltak fra risiko, antallskravet).

#### Kapittel 7.3: Etikk og samfunnskonsekvenser
**id:** `in1030-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1030-4-1`

- **Kapitteltype:** tema.
- **Description:** Etiske dilemmaer og samfunnskonsekvenser av digitale systemer — digitalt
  utenforskap, motstridende krav, lovkjennskap — fagets «konsekvenser»-del.
- **Eksamensbelegg:** Etikk/samfunn ~3/6 (egen deloppgave; ellers vevd inn i UU/personvern).
  Sjangre: DRØFT, KORT. Prioritet: **kunne/kjenne** (§7 pkt. 14).
- **Begrepskontrakt:** **etiske dilemmaer** i systemutvikling (personvern vs. nytte, kontroll
  vs. frihet); **samfunnskonsekvenser** (digitalt utenforskap, avhengighet, maktforskyvning);
  **motstridende krav** (klassisk eksempel: e-valg — **anonymitet vs. visshet vs. mulighet
  for revisjon**; hemmelig valg vs. tvangsfrihet); **lovkjennskap** (åndsverkloven,
  personopplysningsloven, likestillings- og diskrimineringsloven — informatikerens
  ansvar for å kjenne rammene); kobling til UU (utenforskap) og personvern (overvåkning).
- **Drøftingsakser:** når krav er genuint motstridende (e-valg-trilemmaet); teknologiens
  utilsiktede konsekvenser; informatikerens etiske og juridiske ansvar.
- **Case-forslag:** drøft et etisk dilemma i en nyskrevet tjeneste (f.eks. sporing for
  effektivitet vs. personvern), vis begge sider og konkluder.
- **Typiske feil:** #13 synsing uten begreps-/lovforankring; ensidig drøfting (bare én side);
  behandle etikk som løsrevet fra UU/personvern.
- **Kvote:** 18 quiz / 20 flashcards (etiske dilemmaer, samfunnskonsekvenser, digitalt
  utenforskap, motstridende krav/e-valg-trilemma, lovkjennskap, begrep↔eksempel).

**Prøve-kvote Del 7:** 4 prøver (`in1030-7-prove`, chapterNumber 7.P):
1. *Sikkerhet:* 8 MCQ (trusselmodellering, trusselpoker, sårbarheter, sikkerhet vs.
   personvern) + 1 KORT (to trusselscenarier + skill sikkerhet/personvern).
2. *Risikoanalyse (RISIKO):* sett opp usikkerhetsmatrise med ≥6 risikomomenter for et gitt
   case à tre-nivå-mal — trener feil #11.
3. *Etikk (DRØFT):* drøft et etisk dilemma (vis begge sider, forankre, konkluder) —
   trener feil #13.
4. *Konsekvens-bredde:* 6 MCQ (digitalt utenforskap, motstridende krav, lovkjennskap) + 1
   KORT (e-valg-trilemmaet: anonymitet vs. visshet vs. revisjon).

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Flervalgsdrill (hele pensum)
**id:** `in1030-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1030-0-3`

- **Kapitteltype:** drill (MCQ-sjanger).
- **Description:** En stor flervalgsbolk som feier hele pensum i 2017–2019-formen — billige,
  drillbare beredskapspoeng hvis flervalg gjenoppstår, og bred repetisjon uansett.
- **Eksamensbelegg:** Flervalg 2017–2019 (V2019: 12 spm à 3 p = 36 %). Sjangre: MCQ.
  Prioritet: **perfekt** som beredskap (billige poeng når formatet brukes). `(V2019: 3 p
  for riktig, 0 for galt — ingen minuspoeng; verifiser trekkregel/format.)`
- **Innholdskontrakt:** stor MCQ-samling som dekker hele pensumbredden (interessent/aktør,
  use case/aktivitet/sekvens/klasse-notasjon, WCAG-fakta, UU vs. tilgjengelighet, de fire
  samtykkekravene, behandlingsansvarlig/databehandler, Scrum/Kanban, prosessmodeller,
  CI/CD, kohesjon/kobling, MVC, verifisering/validering, testfaser, trusselmodellering,
  sårbarheter), med distraktorer som spiller på de faste forvekslingene (#6–#10). Hver med
  kort forklaring på hvorfor riktig er riktig og distraktorene «nesten».
- **Oppgavesjangre:** MCQ (dette kapitlet leverer mest quiz — det ER flervalgstreningen).
- **Typiske feil:** #6–#10 forvekslinger; bruke for lang tid på ett flervalg.
- **Kvote:** 26 quiz / 8 flashcards (pensumbredde-MCQ som eksamensberedskap; de faste
  distraktor-fellene).

#### Kapittel 8.2: Kortsvars- og drøftingsbank (modellsvar)
**id:** `in1030-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `in1030-0-3`

- **Kapitteltype:** modellbesvarelse (kortsvar/drøfting på tvers).
- **Description:** En bank av sterke modellsvar på de faste kortsvarene og drøftingene, hver
  med kommentert svakere variant — kjernepotten på tvers av alle sett.
- **Eksamensbelegg:** Faste kortsvar/drøftinger (analysen §3 B–F, §7 sluttavsnitt). Sjangre:
  KORT, DRØFT. Prioritet: **perfekt** (de garanterte drøftingsblokkene).
- **Innholdskontrakt:** gjennomskrevne modellsvar (nyskrevne) på de faste
  kortsvarene/drøftingene: UU vs. tilgjengelighet + fire WCAG-prinsipper; de fire
  samtykkekravene; behandlingsansvarlig vs. databehandler; Scrum/Kanban vs. fossefall;
  primær vs. sekundæraktør; funksjonelle vs. ikke-funksjonelle krav; kohesjon vs. kobling;
  verifisering vs. validering. Hvert svar i `collapsible` **sterk versjon** (presis
  navngiving + skille + case-eksempel + lov-/standardforankring) + `collapsible`
  **kommentert svak versjon** (korrekt men flat/upresis, med notat om gapet) + `tip`
  sensorblikk (hva som løfter til bestått-nivå).
- **Oppgavesjangre:** KORT, DRØFT. 8–10 modellsvar med sterk/svak-kontrast.
- **Typiske feil:** #6/#7/#8/#9/#10 (hver demonstrert via den svake versjonen); #13 synsing
  uten forankring.
- **Kvote:** 18 quiz / 14 flashcards (sterk/svak-kjennetegn per kortsvar, de faste
  skillene, begrep↔presist svar).

#### Kapittel 8.3: Øvingseksamen 1 — bredt case-sett
**id:** `in1030-8-3` · **number:** 8.3 · **estimatedMinutes:** 180 · **prerequisites:** `in1030-8-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett case-basert skoleeksamenssett i dagens form: ett gjennomgående
  case med obligatorisk modelleringskjede + egne oppgaver i alle kjernetemaer.
- **Eksamensbelegg/miks:** Speiler prognosen (§7): ett nyskrevet case (en
  frivillig-koordineringstjeneste) med **1 MODELL-oppgave (~30 %, obligatorisk for å
  bestå)** + interessenter/rikt bilde (~15 %) + UU/WCAG (~15 %) + personvern/samtykke
  (~15 %) + smidig (~15 %) + krav/brukerundersøkelser (resten). Alle nyskrevne.
  Løsningsforslag i `collapsible` per oppgave (bestått-nivå), med `tip` om vekting og
  tidsbudsjett. Sjangre: MODELL, RIKTBILDE, DRØFT, KORT, KRAV. Prioritet: **perfekt** (full
  generalprøve). `⚠️ Løsningen fremhever at modelleringen MÅ leveres (feil #1) og at ingen
  tema kan stå tomt (feil #14).`
- **Innholdskontrakt:** dekker MODELL + alle fem perfekt-temaene (modellering, UU, personvern,
  smidig, interessenter) minst én gang; ingen kunnskapshull.
- **Oppgavesjangre:** MODELL, RIKTBILDE, DRØFT, KORT, KRAV.
- **Typiske feil:** hele feilkatalogen #1–#14 (løsningsforslaget markerer hvor hver lurer).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsberedskap).

#### Kapittel 8.4: Øvingseksamen 2 — modelleringstungt case-sett
**id:** `in1030-8-4` · **number:** 8.4 · **estimatedMinutes:** 180 · **prerequisites:** `in1030-8-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et sett med tyngdepunkt på den fulle modelleringskjeden (som i 2019, 43 %),
  men fortsatt full bredde og alle kjernetemaer.
- **Eksamensbelegg/miks:** ~1 stort nyskrevet case (en digital avstemnings-/deltakelsestjeneste)
  med **full MODELL-kjede (~40 %)** — interessenter → use case-diagram + tekst →
  aktivitet → sekvens → klasse med alternativ flyt og multiplisitet — + ~7 pensum-kortsvar
  (UU-prinsipper, samtykkekrav, roller, Scrum/Kanban, kohesjon/kobling, verifisering/
  validering) + evt. en flervalgsbolk. Alle nyskrevne. Løsningsforslag som bestått-besvarelse
  med kjedelojalitet-markering (sekvens↔tekst↔klasse) og vekting-`tip`. Sjangre: MODELL,
  USECASE, KORT, MCQ. Prioritet: **perfekt** (supplerer 8.3 med tyngre modellering).
- **Innholdskontrakt:** dekker hele modelleringskjeden i dybden + kortsvarsbredden; e-valg-
  konteksten trekker inn motstridende krav (7.3).
- **Oppgavesjangre:** MODELL, USECASE, KORT, MCQ.
- **Typiske feil:** #1/#2/#3/#4/#5 (modellering) + #6/#7/#9/#10 (kortsvar).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsberedskap).

#### Kapittel 8.5: Øvingseksamen 3 — drøftingstungt case-sett
**id:** `in1030-8-5` · **number:** 8.5 · **estimatedMinutes:** 180 · **prerequisites:** `in1030-8-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et sett i essay-/hjemmeeksamen-ånd (som 2020–2021) som vekter UU,
  personvern og samfunnskonsekvenser tyngre — rundt et fortsatt obligatorisk (mindre)
  modelleringscase.
- **Eksamensbelegg/miks:** ~1 nyskrevet case (en klima-/energiloggtjeneste) med **tung UU-
  (~25 %) + personvern-drøfting (~25 %)** (med lovforankring) + **DevOps/prosess (~15 %)** +
  **samfunnskonsekvens-/etikkdrøfting (~10 %)** + **1 MODELL-oppgave (~25 %, fortsatt
  obligatorisk)**. Alle nyskrevne. Løsningsforslag som bestått-besvarelse med eksplisitt
  markering av hva som løfter (lov-/standardforankring, case-kobling, begge sider i
  drøftingen). Sjangre: MODELL, DRØFT, KORT, RISIKO. Prioritet: **perfekt** (fremtidsrettet
  generalprøve). `⚠️ Selv i et drøftingstungt sett er modelleringen obligatorisk (feil #1).`
- **Innholdskontrakt:** de tre settene 8.3–8.5 dekker sammen alle sjangre (MODELL/USECASE/
  RIKTBILDE/KRAV/DRØFT/KORT/SKJEMA/RISIKO/MCQ) og alle temadeler flere ganger; UU/personvern/
  samfunn vektes tyngst her.
- **Oppgavesjangre:** MODELL, DRØFT, KORT, RISIKO.
- **Typiske feil:** #13 (forankring), #11 (antall prinsipper/risikomomenter), #1 (glemme
  modelleringen selv når settet er drøftingstungt), #14 (kunnskapshull).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsberedskap).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 14+12+12 = **38** | 10+10+10 = **30** |
| 1 | 1.1–1.4 | 24+20+22+24 = **90** | 32+24+26+32 = **114** |
| 2 | 2.1–2.6 | 16+24+22+24+26+16 = **128** | 20+28+26+28+34+14 = **150** |
| 3 | 3.1–3.3 | 22+26+22 = **70** | 26+36+26 = **88** |
| 4 | 4.1–4.2 | 24+24 = **48** | 30+34 = **64** |
| 5 | 5.1–5.3 | 24+24+16 = **64** | 32+32+18 = **82** |
| 6 | 6.1–6.3 | 20+24+18 = **62** | 24+30+22 = **76** |
| 7 | 7.1–7.3 | 22+18+18 = **58** | 26+20+22 = **68** |
| 8 | 8.1–8.5 | 26+18+14+14+14 = **86** | 8+14+0+0+0 = **22** |
| **Sum** | **32 kap.** | **644 ≥ 500 ✓** | **694 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens, breddekravet (bestått/ikke bestått → ALLE temaer
dekkes forsvarlig, ingen kunnskapshull) og at faget er **svært begrepsrikt** (jf.
PRODUKSJONSLOYPE: «≥500 er et gulv» — begrepsrike konsept-/drøftingsfag skal ligge
høyt på flashcards; her **694**). **Quiz** er kalibrert som flervalgsberedskap
(2017–2019-formen kan gjenoppstå) og bred repetisjon — modelleringskjeden (Del 2) og
flervalgsdrillen (8.1) bærer mest quiz. **Flashcards** vektes mot begrep ↔
definisjon/skille/regel — puggematerialet for hjelpemiddelfri eksamen; de mest
begrepsrike delene (2 modellering/UML-notasjon, 1 foranalyse, 3 smidig, 4 UU, 5
personvern) bærer mest. Øvingseksamenene (8.3–8.5) gir 0 flashcards (rene oppgavesett)
men bidrar med quiz (flervalgsberedskap).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7 → 28 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre (MODELL/USECASE/RIKTBILDE/KRAV/
DRØFT/KORT/SKJEMA/RISIKO/MCQ), med kort løsningsforslag og poeng-/vektfordeling.
Prøvekapitler bygges som `in1030-<del>-prove` (chapterNumber `<del>.P`) etter
plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del over (Del 1–7). Del 0 (håndverk)
og Del 8 (eksamenstrening) får ikke egne prøver — Del 8 **er** øvingseksamenene.

### Øvingseksamener (3 komplette case-sett — se kap. 8.3–8.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (8.3) | Typisk case-skoleeksamen (V2022-form) | 1 case: obligatorisk MODELL-kjede (~30 %) + interessenter/UU/personvern/smidig/krav |
| Øvingseksamen 2 (8.4) | Modelleringstungt sett (V2019-form) | 1 case: full MODELL-kjede (~40 %) + pensum-kortsvar + evt. flervalg |
| Øvingseksamen 3 (8.5) | Drøftingstungt sett (V2020/2021-ånd) | 1 case: tung UU + personvern + samfunn/etikk-drøfting + obligatorisk (mindre) MODELL (~25 %) |

Til sammen dekker de tre settene alle sjangre (MODELL/USECASE/RIKTBILDE/KRAV/DRØFT/
KORT/SKJEMA/RISIKO/MCQ) og alle temadeler flere ganger. **Hvert sett har en
obligatorisk modelleringsoppgave** (feil #1 — strykkritisk) og dekker alle
kjernetemaene (feil #14 — ingen kunnskapshull), i tråd med bestått/ikke bestått-logikken.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — dagens form (4 t skriftlig skoleeksamen, ingen
   hjelpemidler, bestått/ikke bestått, case-basert), de tre epokene, at 2020–2021
   ikke er representative for formen, og forkravene (fem obliger + IN1000)
   `(verifiser mot emnebeskrivelsen)` (fra kap. 0.1).
2. **De to make-or-break-reglene** — **modellering er strykkritisk** (feil #1: utelates
   den, er det ikke bestått) og **bredde uten kunnskapshull** (feil #14: ett svakt tema
   kompenseres ikke). «Ingen kunnskapshull»-sjekklisten over alle Nivå 1–2-temaer.
3. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt**
   (modelleringskjeden Del 2, UU/WCAG Del 4, personvern/samtykke Del 5, smidig Del 3.2),
   **kunne** (interessenter/rikt bilde + krav + brukerundersøkelser Del 1, prosessmodeller
   3.1, sikkerhet/risiko Del 7.1–7.2, brukskvalitet 6.1, OOD 6.2), **kjenne** (DevOps 3.3,
   testing 6.3, etikk/samfunn 7.3, teamarbeid 3.2).
4. **Sjangerguiden** — de ni sjangrene MODELL/USECASE/RIKTBILDE/KRAV/DRØFT/KORT/SKJEMA/
   RISIKO/MCQ med oppskriftene: modelleringskjeden (2.1), tekstlig use case (2.2),
   kortsvars-/drøftingshåndverket (0.3), rikt bilde (1.2), samtykkeskjema (5.3),
   risikomatrise (7.2), flervalgsberedskap (8.1).
5. **Prosedyre-malene** — modelleringskjeden (mal A) og de fem diagram-oppskriftene (mal
   B–E: tekstlig use case, aktivitet, sekvens, klasse) som `theorem`-blokker, pluss rikt
   bilde (F), samtykkeskjema (G) og risikomatrise (H). Kjedelojaliteten: sekvens følger
   tekst, klasse reflekterer sekvens.
6. **Sensorreglene** — de ti metareglene (§3): bredde uten hull; modellering obligatorisk;
   sekvens↔tekst↔klasse; treff eksakt antall; dokumentér antakelser; hold diagram enkle;
   koble til caset; alternativ flyt med; presise skiller; lov-/standardforankring.
7. **Feilkatalogen** — de 14 typiske feilene (§3), hver med henvisning til kapitlet som
   forebygger den: hoppe over modelleringen (Del 2), sekvens følger ikke tekst (2.4),
   klasse uten multiplisitet (2.5), for komplekst diagram (2.3–2.5), mangler alternativ
   flyt (2.2/2.4), UU/tilgjengelighet blandet (4.1), samtykke-/rolleforveksling (5.2),
   primær/sekundær blandet (1.1), krav ikke kategorisert (1.4), kohesjon/kobling snudd
   (6.2), feil antall (1.x/7.2), glemt antakelser (0.2), synsing uten forankring (0.3),
   kunnskapshull (0.1/8.3).
8. **Begreps- og notasjonsark** — all UML-notasjon (aktør, use case, include/extend,
   beslutningsrombe, livslinje/objekt, alt-blokk, assosiasjon, multiplisitet, arv) og alle
   rammeverk/lover (WCAG fire prinsipper, GDPR-prinsipper/artikler, personopplysningsloven,
   forskrift om UU, Scrum-roller/hendelser, Kanban, DevOps CI/CD, MVC) samlet — puggeark
   for hjelpemiddelfri eksamen.
9. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 0
   (form + case-lesing + svarhåndverk) → Del 1 (foranalyse — mater modelleringen) → **Del 2
   (modelleringskjeden — selve faget, drilles til den sitter)** → Del 3 (smidig) → Del 4
   (UU) → Del 5 (personvern) → Del 6 (brukskvalitet/OOD/testing) → Del 7 (sikkerhet/etikk) →
   Del 8 (flervalgsdrill + de tre case-øvingssettene under tidspress de siste ukene).
   **Regelen gjennom hele løpet:** ingen tema får stå tomt, og modelleringskjeden øves flest
   ganger.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in1030` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («2.5», ALDRI lineær «14» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 2.5»). UiO legges inn i
   `src/app/bok/trinn/hoyere/institusjoner.ts` (visningsnavn «IN1030 Systemer, krav og
   konsekvenser») dersom institusjonen ikke allerede finnes.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene MODELL/USECASE/RIKTBILDE/KRAV/DRØFT/
   KORT/SKJEMA/RISIKO/MCQ, frekvenstallene, de to make-or-break-reglene (strykkritisk
   modellering + bredde uten hull), case-lesingen og de tre svarhåndverkene resten refererer
   til.
3. **Foranalysen**: Del 1 (interessenter/aktører/rikt bilde/brukerundersøkelser/krav —
   mater modelleringskjeden). Introduser det gjennomgående Delelageret-caset i 1.1.
4. **Modelleringskjeden (klimaks)**: Del 2 bygges av én agent som leser HELE skjelettet:
   2.1 oversikt/strykkrav → 2.2 use case → 2.3 aktivitet → 2.4 sekvens → 2.5 klasse → 2.6
   full modellbesvarelse på Delelageret. Kjedelojaliteten (sekvens↔tekst↔klasse) må være
   konsistent på tvers av 2.2–2.6.
5. **De store drøftingsblokkene**: Del 3 (systemutvikling) → Del 4 (UU) → Del 5 (personvern)
   → Del 6 (brukskvalitet/OOD/testing) → Del 7 (sikkerhet/etikk).
6. **Del 8 (eksamenstrening)** sist — gjenbruker alle sjangre og temaer; øvingseksamenene
   (8.3–8.5) bygges av én agent som leser HELE skjelettet og bruker **nye** case (ikke
   Delelageret).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene (§6)
   i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn; UML-etiketter/kodeaktige metodenavn som ren tekst); `npm run build`
  grønn.
- [ ] **Modelleringskjeden komplett**: kap. 2.1 har `theorem` med hele mal A (6 ledd); 2.2–2.5
  har hver sitt diagram-`theorem` (mal B–E); 2.6 er en full modellbesvarelse med **≥6
  interessenter + primær/sekundær, use case-diagram + tekstlig use case (hovedflyt +
  alternativ flyt), aktivitetsdiagram, sekvensdiagram som følger teksten, klassediagram med
  multiplisitet/attributter/metoder** + kommentert svak variant + sensorblikk.
- [ ] **«Modellering er strykkritisk»-warning (feil #1)** står i hvert Del 2-kapittel og i
  hver øvingseksamen (8.3–8.5) — eksplisitt at å utelate modelleringen = automatisk ikke
  bestått `(verifisert mot V2022-veiledningen; kun 1 offisiell veiledning — merk usikkerhet)`.
- [ ] **Kjedelojaliteten**: sekvensdiagrammene (2.4, 2.6, øvingseksamener) følger hovedflyten
  i sine tekstlige use case (feil #2); klassediagrammene reflekterer sekvensdiagrammene med
  multiplisitet (feil #3); begge har alternativ flyt (feil #5).
- [ ] **«Hold diagrammene enkle»-warning (feil #4)** står i hvert diagramkapittel (2.2–2.5).
- [ ] **«Ingen kunnskapshull»-strategien**: kap. 0.1 har sjekklisten over alle Nivå 1–2-temaer;
  hver øvingseksamen (8.3–8.5) dekker alle kjernetemaene (feil #14).
- [ ] **Eksakt-antall-krav**: hver oppgave/fasit som ber om «minst N» leverer minst N og sier
  eksplisitt antallet (feil #11) — særlig 1.1 (≥6 interessenter), 1.4 (≥6 brukerhistorier +
  ett krav av hver type), 7.2 (≥6 risikomomenter), 4.2/5.2 (fire prinsipper/samtykkekrav).
- [ ] **Presise skiller**: UU vs. tilgjengelighet (4.1, feil #6), behandlingsansvarlig vs.
  databehandler + fire samtykkekrav (5.2, feil #7), primær vs. sekundæraktør (1.1, feil #8),
  funksjonell vs. ikke-funksjonell krav (1.4, feil #9), kohesjon vs. kobling (6.2, feil #10),
  verifisering vs. validering (6.3).
- [ ] **Faste maler som `theorem`**: modelleringskjeden (2.1), tekstlig use case (2.2),
  aktivitet (2.3), sekvens (2.4), klasse (2.5), kravkategorier (1.4), rikt bilde (1.2),
  de fire samtykkekravene (5.2), samtykkeskjema (5.3), risikomatrise (7.2).
- [ ] **Begreps- og notasjonsliste per delkapittel**: hvert kapittel har `collapsible`
  «Begreps- og notasjonsliste» rett etter Forkunnskaper, som forklarer ALL UML-notasjon,
  rammeverksnavn og fagbegreper brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Kapittel-DNA**: hvert temakapittel har Eksamensvinkel-`tip` (med tallene herfra),
  Typiske feil-`warning`, kjernebegreper som toppnivå `definition` med title (flashcard-
  kilden), 1–3 eksempler, 4–8 øvinger; drill-/praktikumkapitler har oppskrift (`theorem`)
  + gjennomskrevet sensor-kommentert case + oppgaver på eksamensnivå.
- [ ] **Eksamensform-caveat**: Del 0 sier eksplisitt at formen har skiftet tre ganger
  (skoleeksamen+flervalg → korona-hjemme → skoleeksamen), at 2020–2021 ikke er representative,
  at flervalg er en mulig men ikke garantert innpakning, og at form/karakterskala/forkrav
  skal verifiseres mot emnebeskrivelsen.
- [ ] **Quiz-sum ≥ 644 og flashcard-sum ≥ 694** per kvotetabellen (§5); quiz kalibrert som
  flervalgsberedskap, `options[0]` = riktig svar; flashcards som begrep ↔ definisjon/skille/
  regel.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (kap. 8.3–8.5) som sammen
  dekker sjangrene MODELL/USECASE/RIKTBILDE/KRAV/DRØFT/KORT/SKJEMA/RISIKO/MCQ og alle
  temadeler; hvert øvingssett har en obligatorisk modelleringsoppgave.
- [ ] **Opphavsrett**: ALLE case (Delelageret + øvingssettenes), oppgaver, diagrammer og
  «modellbesvarelser» nyskrevne — egne parter/tjenester/data; UML-notasjon, rammeverksnavn
  (WCAG, GDPR, Scrum, Kanban, DevOps, MVC) og lovreferanser er allmenn faglig kunnskap, men
  ingen oppgavetekster/fasiter/sensorkommentarer fra reelle sett gjengis; pensumlitteratur
  refereres (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Usikkerhetsmarkører**: lov-/tilsynsnavn (forskrift om UU av IKT; Difi → Digdir; WAD),
  eksamensform/karakterskala/forkrav, samt lavfrekvente/svakt belagte detaljer (Suchman,
  PS2000, samtykkeskjema, sårbarhetsdetaljer) merket `(verifiser)`. Evidensgrunnlaget er
  moderat (6 sett, kun 1 offisiell sensorveiledning) — strykkravet og de fire 100 %-temaene
  er robuste; antalls-/poengregler mer usikre.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
