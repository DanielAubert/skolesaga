/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Filosofi og etikk (VG2/VG3) - Del 7
 * Seksjon 7: Kritisk tenkning og logikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Argumentasjon og gyldighet
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_7_1: TextbookChapter = {
  id: 'fil-7-1',
  chapterNumber: 36,
  title: 'Argumentasjon og gyldighet',
  duration: '20 min',
  description: 'Hvordan bygge og vurdere gode argumenter med premisser og konklusjoner.',
  sections: [
    {
      type: 'text',
      title: 'Hva er et argument?',
      content: `I filosofi og logikk er et **argument** ikke en krangel, men en påstand som støttes av grunner. Et argument består av:

• **Premisser**: Påstander som gir støtte til konklusjonen
• **Konklusjon**: Påstanden som premissene skal underbygge

Eksempel:
- Premiss 1: Alle mennesker er dødelige
- Premiss 2: Sokrates er et menneske
- Konklusjon: Derfor er Sokrates dødelig

Et godt argument har sanne premisser og en konklusjon som følger logisk av dem.`,
      id: 'fil-7-1-intro',
    },
    {
      type: 'text',
      title: 'Gyldige og ugyldige argumenter',
      content: `Et argument er **gyldig** hvis konklusjonen nødvendigvis følger av premissene. Det betyr at dersom premissene er sanne, må konklusjonen også være sann.

**Gyldig argument:**
- Alle katter er dyr
- Alle dyr trenger mat
- Derfor trenger alle katter mat

**Ugyldig argument:**
- Alle katter er dyr
- Fido er et dyr
- Derfor er Fido en katt (feil - Fido kan være en hund!)

Merk: Et argument kan være gyldig selv om premissene er falske. Gyldighet handler om strukturen, ikke sannheten.`,
      id: 'fil-7-1-gyldighet',
    },
    {
      type: 'text',
      title: 'Sanne og falske premisser',
      content: `Et **godt argument** må både være gyldig OG ha sanne premisser. Vi kaller dette et **solid** (sound) argument.

**Gyldig men ikke solid:**
- Alle norske politikere er ærlige (falsk premiss)
- Jonas er norsk politiker
- Derfor er Jonas ærlig (gyldig struktur, men konklusjonen er ikke nødvendigvis sann)

**Både gyldig og solid:**
- Alle pattedyr er virveldyr (sant)
- Hunder er pattedyr (sant)
- Derfor er hunder virveldyr (sant og følger nødvendigvis)

Når du vurderer argumenter, må du alltid sjekke både om strukturen er gyldig og om premissene faktisk er sanne.`,
      id: 'fil-7-1-sannhet',
    },
    {
      type: 'example',
      title: 'Analyse av et politisk argument',
      content: `**Påstand fra Stortingsdebatt:**
"Vi må kutte i offentlige utgifter fordi statsgjelden øker, og økende statsgjeld fører alltid til økonomisk krise."

**Analyse:**
- Premiss 1: Statsgjelden øker (empirisk påstand - må verifiseres)
- Premiss 2: Økende statsgjeld fører alltid til økonomisk krise (tvilsom generalisering)
- Konklusjon: Vi må kutte i offentlige utgifter

**Kritiske spørsmål:**
- Er premiss 1 sann? Hvor mye øker gjelden?
- Er premiss 2 sann? Hva med land som Japan og Norge?
- Følger konklusjonen? Finnes det andre løsninger enn kutt?

Dette viser hvordan argumentanalyse hjelper oss å tenke kritisk om politiske påstander.`,
      id: 'fil-7-1-example1',
    },
    {
      type: 'text',
      title: 'Deduktive og induktive argumenter',
      content: `**Deduktive argumenter** går fra generelt til spesifikt. Hvis premissene er sanne, må konklusjonen være sann.

Eksempel (deduktivt):
- Alle norske elever har rett til gratis utdanning
- Maria er norsk elev
- Derfor har Maria rett til gratis utdanning

**Induktive argumenter** går fra spesifikke observasjoner til generell konklusjon. Konklusjonen er sannsynlig, men ikke nødvendig.

Eksempel (induktivt):
- Jeg har sett 100 svaner, alle var hvite
- Derfor er alle svaner hvite (feil - det finnes svarte svaner i Australia!)

Induktive argumenter gir aldri absolutt sikkerhet, men kan være sterke eller svake basert på bevisene.`,
      id: 'fil-7-1-deduksjon',
    },
    {
      type: 'exercise',
      title: 'Oppgave 1: Identifiser premisser og konklusjon',
      content: `Analyser følgende argument:

"Klimaendringer er menneskeskapte fordi CO2-nivået har steget dramatisk siden industrialiseringen, og CO2 er en drivhusgass som varmer atmosfæren."

Hva er premissene og konklusjonen?`,
      id: 'fil-7-1-ex1',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 2: Gyldig eller ugyldig?',
      content: `Er dette argumentet gyldig?

"Alle politikere lover skattelettelser før valg. Anne lover skattelettelser. Derfor er Anne politiker."`,
      id: 'fil-7-1-ex2',
      exerciseType: 'multiple-choice',
      options: [
        'Ja, argumentet er gyldig',
        'Nei, argumentet er ugyldig - Anne kan være vanlig velger som også ønsker skattelettelser',
        'Ja, hvis premissene er sanne må konklusjonen være sann',
        'Nei, fordi premissen "alle politikere lover skattelettelser" er falsk',
      ],
      correctAnswer: 1,
      explanation: 'Argumentet har ugyldig struktur. Det går fra "alle A er B" og "C er B" til "derfor er C A", som er en logisk feil. Selv om alle politikere lover skattelettelser, betyr ikke det at alle som lover skattelettelser er politikere.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 3: Deduktivt eller induktivt?',
      content: `Hvilken type argument er dette?

"Hver gang jeg har spist jordbær, har jeg fått utslett. Derfor er jeg allergisk mot jordbær."`,
      id: 'fil-7-1-ex3',
      exerciseType: 'multiple-choice',
      options: [
        'Deduktivt - konklusjonen følger nødvendigvis av premissene',
        'Induktivt - konklusjonen er sannsynlig basert på gjentatte observasjoner',
        'Verken deduktivt eller induktivt',
        'Både deduktivt og induktivt',
      ],
      correctAnswer: 1,
      explanation: 'Dette er et induktivt argument fordi det baserer seg på gjentatte observasjoner for å trekke en generell konklusjon. Konklusjonen er sannsynlig, men ikke absolutt sikker - utslettet kan ha andre årsaker.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 4: Vurder soliditet',
      content: `Er dette argumentet solid (sound)?

"All filosofi er bortkastet tid fordi den ikke fører til praktiske resultater. Etikk er filosofi. Derfor er etikk bortkastet tid."`,
      id: 'fil-7-1-ex4',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 5: Bygg et gyldig argument',
      content: `Konstruer et gyldig deduktivt argument med konklusjonen: "Ola har stemmerett."

Bruk minst to premisser.`,
      id: 'fil-7-1-ex5',
      exerciseType: 'classic',
    },
    // --- Samleoppgaver ---
    {
      type: 'exercise',
      title: 'Oppgave 6: Analyser hverdagsargument',
      content: `En venn sier: "Du bør ikke spise hos den restauranten. Jeg fikk matforgiftning der en gang, og det er mange negative anmeldelser på nettet."

a) Identifiser premissene og konklusjonen
b) Er argumentet deduktivt eller induktivt?
c) Hvor sterkt er argumentet? Hvilken tilleggsinformasjon ville styrket eller svekket det?`,
      id: 'fil-7-1-ex6',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 7: Kritisk analyse av medieargument',
      content: `Analyser dette argumentet fra en aviskommentar:

"Videregående skole bør være frivillig. I Finland er videregående frivillig, og Finland har bedre PISA-resultater enn Norge. Derfor vil frivillig videregående gi bedre skoleresultater i Norge."

Vurder:
- Er argumentet gyldig?
- Er premissene sanne?
- Hvilke skjulte antakelser ligger i argumentet?
- Hvor solid er argumentet totalt sett?`,
      id: 'fil-7-1-ex7',
      exerciseType: 'classic',
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Formell og uformell logikk
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_7_2: TextbookChapter = {
  id: 'fil-7-2',
  chapterNumber: 37,
  title: 'Formell og uformell logikk',
  duration: '25 min',
  description: 'Syllogismer, proposisjonslogikk og visuelle verktøy for argumentanalyse.',
  sections: [
    {
      type: 'text',
      title: 'Aristoteles og syllogismen',
      content: `**Syllogismen** er en klassisk logisk struktur utviklet av Aristoteles. Den består av tre deler:

1. **Major premiss** (stor premiss): Generell påstand
2. **Minor premiss** (liten premiss): Spesifikk påstand
3. **Konklusjon**: Følger logisk av de to premissene

**Klassisk eksempel:**
- Major: Alle mennesker er dødelige
- Minor: Sokrates er et menneske
- Konklusjon: Sokrates er dødelig

Syllogismen har tre termer:
- **Major term**: Dødelige (predikat i konklusjonen)
- **Minor term**: Sokrates (subjekt i konklusjonen)
- **Middle term**: Mennesker (forbinder de to premissene, mangler i konklusjonen)`,
      id: 'fil-7-2-syllogisme',
    },
    {
      type: 'text',
      title: 'Gyldige syllogistiske former',
      content: `Det finnes 256 mulige syllogismer, men bare 24 er gyldige. De vanligste gyldige formene har latinske navn:

**Barbara (AAA-1):**
- Alle M er P
- Alle S er M
- Derfor: Alle S er P

**Celarent (EAE-1):**
- Ingen M er P
- Alle S er M
- Derfor: Ingen S er P

**Darii (AII-1):**
- Alle M er P
- Noen S er M
- Derfor: Noen S er P

Disse navnene beskriver strukturen av vokaler (A = alle, E = ingen, I = noen, O = noen ikke) og posisjon av middle term.`,
      id: 'fil-7-2-gyldige',
    },
    {
      type: 'example',
      title: 'Eksempel: Barbara-syllogisme',
      content: `**Alle demokratier garanterer ytringsfrihet** (Major: Alle M er P)
**Norge er et demokrati** (Minor: S er M)
**Derfor garanterer Norge ytringsfrihet** (Konklusjon: S er P)

Dette er en gyldig Barbara-syllogisme. Hvis begge premissene er sanne (noe vi kan diskutere - er alle demokratier perfekte?), må konklusjonen være sann.

**Ugyldig variant:**
- Alle demokratier garanterer ytringsfrihet
- Norge garanterer ytringsfrihet
- Derfor er Norge et demokrati (FEIL!)

Hvorfor er denne ugyldig? Fordi andre typer stater også kan garantere ytringsfrihet. Middle term (demokrati) er ikke riktig plassert.`,
      id: 'fil-7-2-example1',
    },
    {
      type: 'text',
      title: 'Venn-diagrammer',
      content: `**Venn-diagrammer** er visuelle verktøy for å teste gyldigheten av syllogismer. Vi tegner tre overlappende sirkler for hver term.

**Eksempel: Alle filosofer er tenkere**
- Sirkel A: Filosofer
- Sirkel B: Tenkere
- Filosofer-sirkelen plasseres helt inne i Tenkere-sirkelen

**Noen studenter er filosofer + Alle filosofer er tenkere = Noen studenter er tenkere**

Ved å skravere områder og plassere "X" for eksistens, kan vi se om konklusjonen nødvendigvis følger av premissene.

Venn-diagrammer er spesielt nyttige for å avsløre ugyldige syllogismer som virker overbevisende.`,
      id: 'fil-7-2-venn',
    },
    {
      type: 'text',
      title: 'Proposisjonslogikk',
      content: `**Proposisjonslogikk** (utsagnslogikk) analyserer hvordan hele setninger kombineres med logiske konnektiver:

**Symboler:**
- **p, q, r** = proposisjoner (påstander)
- **¬** = ikke (negasjon)
- **∧** = og (konjunksjon)
- **∨** = eller (disjunksjon)
- **→** = hvis...så (implikasjon)
- **↔** = hvis og bare hvis (biimplikasjon)

**Eksempel:**
- p = "Det regner"
- q = "Jeg tar paraply"
- p → q = "Hvis det regner, tar jeg paraply"
- ¬p = "Det regner ikke"
- p ∧ q = "Det regner og jeg tar paraply"`,
      id: 'fil-7-2-proposisjon',
    },
    {
      type: 'text',
      title: 'Sannhetstabeller',
      content: `**Sannhetstabeller** viser når sammensatte påstander er sanne eller falske.

**Tabell for implikasjon (p → q):**

| p | q | p → q |
|---|---|-------|
| S | S |   S   |
| S | F |   F   |
| F | S |   S   |
| F | F |   S   |

En implikasjon er bare falsk når premissen (p) er sann og konklusjonen (q) er falsk.

**Eksempel:**
"Hvis jeg får A i filosofi, feirer jeg" er bare falsk hvis jeg faktisk får A men ikke feirer.

Dette forklarer hvorfor "Hvis griser kan fly, er jeg konge" teknisk sett er en sann påstand (fordi premissen er falsk).`,
      id: 'fil-7-2-sannhet',
    },
    {
      type: 'text',
      title: 'Modus ponens og modus tollens',
      content: `To grunnleggende gyldige argumentformer i proposisjonslogikk:

**Modus ponens** (bekreftende):
- Hvis p, så q
- p
- Derfor q

Eksempel: Hvis det er søndag, er butikkene stengt. Det er søndag. Derfor er butikkene stengt.

**Modus tollens** (benektende):
- Hvis p, så q
- Ikke q
- Derfor ikke p

Eksempel: Hvis det snør, er bakken hvit. Bakken er ikke hvit. Derfor snør det ikke.

**Ugyldig form - bekrefte konsekventen:**
- Hvis p, så q
- q
- Derfor p (FEIL!)

Eksempel: Hvis det regner, er bakken våt. Bakken er våt. Derfor regner det. (Feil - noen kan ha vasket bakken!)`,
      id: 'fil-7-2-modus',
    },
    {
      type: 'exercise',
      title: 'Oppgave 1: Identifiser syllogismens deler',
      content: `Analyser denne syllogismen:

"Alle norske borgere har stemmerett ved 18 år. Kari er norsk borger. Derfor har Kari stemmerett ved 18 år."

Identifiser:
a) Major premiss
b) Minor premiss
c) Konklusjon
d) Major term, minor term, middle term`,
      id: 'fil-7-2-ex1',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 2: Er syllogismen gyldig?',
      content: `Vurder gyldigheten:

"Noen politikere lyver. Alle løgnere er upålitelige. Derfor er noen politikere upålitelige."`,
      id: 'fil-7-2-ex2',
      exerciseType: 'multiple-choice',
      options: [
        'Gyldig - konklusjonen følger nødvendigvis av premissene',
        'Ugyldig - middle term er ikke riktig distribuert',
        'Ugyldig - det er fire termer i stedet for tre',
        'Gyldig, men bare hvis begge premissene er sanne',
      ],
      correctAnswer: 0,
      explanation: 'Dette er en gyldig syllogisme (Darii-form). Hvis noen politikere lyver (de er løgnere), og alle løgnere er upålitelige, må noen politikere være upålitelige. Strukturen er logisk gyldig uavhengig av om vi er enige i premissene.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 3: Modus ponens eller tollens?',
      content: `Hvilket resonnement brukes her?

"Hvis Norge hadde vært diktatur, ville vi ikke hatt frie valg. Vi har frie valg. Derfor er ikke Norge et diktatur."`,
      id: 'fil-7-2-ex3',
      exerciseType: 'multiple-choice',
      options: [
        'Modus ponens',
        'Modus tollens',
        'Barbara-syllogisme',
        'Ugyldig resonnement',
      ],
      correctAnswer: 1,
      explanation: 'Dette er modus tollens: Hvis p, så q. Ikke q. Derfor ikke p. (Hvis diktatur, så ikke frie valg. Vi har frie valg (ikke "ikke frie valg"). Derfor ikke diktatur.)',
    },
    {
      type: 'exercise',
      title: 'Oppgave 4: Symboliser proposisjoner',
      content: `Bruk proposisjonslogikk til å symbolisere:

"Hvis du består eksamen og leverer oppgaven, får du vitnemål."

Definer p, q, r og skriv påstanden symbolsk.`,
      id: 'fil-7-2-ex4',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 5: Bruk sannhetstabell',
      content: `Lag en sannhetstabell for: (p ∨ q) ∧ ¬p

Hva kan du konkludere om q når hele uttrykket er sant?`,
      id: 'fil-7-2-ex5',
      exerciseType: 'classic',
    },
    // --- Samleoppgaver ---
    {
      type: 'exercise',
      title: 'Oppgave 6: Analyser kompleks syllogisme',
      content: `Vurder dette argumentet:

"Ingen ekte demokratier starter kriger mot hverandre. USA og Storbritannia er ekte demokratier. Derfor vil USA og Storbritannia aldri starte krig mot hverandre."

a) Er dette en gyldig syllogisme? Hvilken form?
b) Er premissene sanne? (Tenk på historiske eksempler)
c) Hvor solid er argumentet totalt sett?`,
      id: 'fil-7-2-ex6',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 7: Kombiner logiske verktøy',
      content: `En debattant hevder:

"Hvis klimaendringer er menneskeskapte, må vi redusere CO2-utslipp. Vi reduserer ikke CO2-utslipp tilstrekkelig. Derfor er klimaendringer ikke menneskeskapte."

a) Hvilken logisk form brukes her?
b) Er argumentet gyldig eller ugyldig?
c) Hva er problemet med konklusjonen, selv om formen er gyldig?
d) Skriv en bedre konklusjon basert på premissene.`,
      id: 'fil-7-2-ex7',
      exerciseType: 'classic',
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Feilslutninger
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_7_3: TextbookChapter = {
  id: 'fil-7-3',
  chapterNumber: 38,
  title: 'Feilslutninger',
  duration: '25 min',
  description: 'Vanlige logiske feil i argumentasjon og hvordan gjenkjenne dem.',
  sections: [
    {
      type: 'text',
      title: 'Hva er en feilslutning?',
      content: `En **feilslutning** (fallacy) er en feil i resonnement som gjør et argument ugyldig eller villedende. Selv om argumentet kan virke overbevisende, bygger det på logiske eller retoriske feil.

**To hovedtyper:**

1. **Formelle feilslutninger**: Bryter regler for logisk gyldighet
2. **Uformelle feilslutninger**: Feil i innhold, språk eller relevans

Feilslutninger er vanlige i politikk, reklame, sosiale medier og hverdagsdebatter. Å kjenne dem gjør deg til en bedre kritisk tenker.

**Hvorfor er dette viktig?**
- Unngå å bli lurt av dårlige argumenter
- Bygg sterkere egne argumenter
- Delta mer konstruktivt i debatter
- Gjenkjenn manipulasjon og propaganda`,
      id: 'fil-7-3-intro',
    },
    {
      type: 'text',
      title: 'Ad hominem - angrep på person',
      content: `**Ad hominem** (latin: "mot personen") angriper argumenterendes karakter i stedet for argumentet.

**Eksempel:**
"Du mener vi bør kutte CO2-utslipp? Men du flyr jo til syden hver vinter! Din mening er verdiløs."

**Hvorfor er dette en feilslutning?**
Personens handlinger påvirker ikke argumentets gyldighet. Klimaforskere som flyr kan fortsatt ha rett i at vi må redusere utslipp.

**Norsk politisk eksempel:**
"Statsministeren snakker om ulikhet, men går selv på dyre restauranter."

Dette kan være hykleri, men beviser ikke at ulikhetsargumentet er feil.

**Legitim variant:**
Noen ganger er personens troverdighet relevant, f.eks. hvis noen har løyet systematisk før.`,
      id: 'fil-7-3-adhominem',
    },
    {
      type: 'text',
      title: 'Stråmann - fordreie motstanderens argument',
      content: `**Stråmann** innebærer å forvrenge motstanderens argument til en svakere versjon som er lettere å angripe.

**Eksempel:**
- Person A: "Vi bør ha strengere våpenkontroll for å redusere skytevåpendrap."
- Person B: "Person A vil at innbyggerne skal være forsvarsløse og ikke kunne beskytte seg!"

Person B angriper en overdrevet versjon av A sitt argument.

**Norsk eksempel fra skoldebatt:**
- Lærer: "Elever trenger mer tid til fordypning og mindre testing."
- Kritiker: "Så du mener vi skal fjerne all vurdering og la elever gjøre hva de vil?"

**Hvordan unngå:**
- Gjenta motstanderens argument med egne ord og spør om du har forstått riktig
- Angrip det sterkeste argumentet, ikke det svakeste`,
      id: 'fil-7-3-stramann',
    },
    {
      type: 'text',
      title: 'Appell til autoritet',
      content: `**Appell til autoritet** (argumentum ad verecundiam) bruker ekspertstatus som bevis, selv når eksperten ikke er kvalifisert på området.

**Ugyldig appell:**
"Kjendisen Petter Northug anbefaler denne vitamintilskuddet, så det må virke!"

Northug er ekspert på langrenn, ikke ernæring.

**Gyldig appell til autoritet:**
"Klimapanelet IPCC, som består av tusenvis av klimaforskere, konkluderer med at klimaendringene er menneskeskapte."

Her er autoriteten faktisk ekspert på feltet.

**Norsk eksempel:**
"Professor i litteraturvitenskap mener vaksiner er farlige" - professoren er ikke medisinsk ekspert.

**Når er det legitimt?**
- Når eksperten faktisk er kvalifisert på området
- Når det er konsensus blant eksperter
- Når vi ikke kan verifisere bevisene selv`,
      id: 'fil-7-3-autoritet',
    },
    {
      type: 'example',
      title: 'Feilslutninger i norsk reklame',
      content: `**Eksempel 1: Falsk dilemma**
"Enten kjøper du vår forsikring, eller risikerer du å miste alt ved ulykke."

Problemet: Det finnes mange andre forsikringsselskaper!

**Eksempel 2: Appell til popularitet**
"Norges mest solgte melk" - impliserer at popularitet = kvalitet.

**Eksempel 3: Appell til frykt**
"Uten denne alarmen kan innbruddstyver lett ta seg inn!"

Bygger på frykt i stedet for statistikk om reell risiko.

**Eksempel 4: Falsk årsakssammenheng**
"90% av profesjonelle idrettsutøvere spiser vår frokostblanding. Spis den og bli som dem!"

Problemet: Det er treningen som gjør dem profesjonelle, ikke frokostblandingen.`,
      id: 'fil-7-3-example1',
    },
    {
      type: 'text',
      title: 'Falsk dilemma - svart/hvitt-tenkning',
      content: `**Falsk dilemma** (false dichotomy) presenterer bare to alternativer når det finnes flere.

**Eksempel:**
"Enten er du med oss, eller er du mot oss."

Dette ignorerer nyanser: nøytralitet, delvis enighet, alternativer.

**Politisk eksempel:**
"Enten senker vi skatter og får vekst, eller vi øker skatter og får stagnasjon."

Virkeligheten: Mange faktorer påvirker økonomisk vekst.

**Eksempel fra skoledebatt:**
"Enten beholder vi karakterer og motiverer elever, eller vi fjerner dem og senker nivået."

Ignorerer: Alternative vurderingsformer, indre motivasjon.

**Hvordan gjenkjenne:**
- Stikkord: "enten...eller", "bare to valg"
- Spør: Finnes det mellomløsninger?`,
      id: 'fil-7-3-falsktdilemma',
    },
    {
      type: 'text',
      title: 'Glidende skråplan',
      content: `**Glidende skråplan** (slippery slope) hevder at en liten handling uunngåelig vil føre til ekstreme konsekvenser, uten å bevise årsakssammenhengen.

**Eksempel:**
"Hvis vi legaliserer cannabis, vil snart heroin og alle rusmidler bli lovlige, og samfunnet vil kollapse!"

**Norsk eksempel:**
"Hvis vi tillater assistert selvmord for uhelbredelig syke, vil snart eldre presses til å ta livet sitt for ikke å være til byrde."

**Når er det legitimt?**
Noen ganger er skråplanet reelt, hvis det finnes bevis for en trinnvis utvikling. Men ofte mangler beviskjeden.

**Hvordan teste:**
- Er hvert steg i kjeden bevist?
- Finnes det "bremsemekanismer" som kan stoppe utviklingen?
- Er konsekvensene virkelig uunngåelige?`,
      id: 'fil-7-3-skraplan',
    },
    {
      type: 'text',
      title: 'Andre vanlige feilslutninger',
      content: `**Appell til popularitet** (argumentum ad populum):
"Millioner liker denne Facebook-siden, så budskapet må være sant!"

**Appell til tradisjon:**
"Vi har alltid gjort det sånn, så det må være riktig."

**Hasty generalization (forhastede generaliseringer):**
"Jeg møtte to uhøflige parisere. Alle franskmenn er uhøflige!"

**Post hoc ergo propter hoc (etter dette, derfor på grunn av dette):**
"Jeg bar heldig skjorte på eksamen og besto. Skjorten ga meg hell!"

**Tu quoque ("du også"):**
"Du kritiserer meg for å lyve? Men du løy jo sist uke!"

**Røde sild (red herring):**
Avlede oppmerksomheten fra hovedsaken til et irrelevant tema.`,
      id: 'fil-7-3-andre',
    },
    {
      type: 'exercise',
      title: 'Oppgave 1: Identifiser feilslutningen',
      content: `Hvilken feilslutning brukes her?

"Filosofiprofessoren mener dødsstraff er uetisk. Men han har aldri hatt barn selv, så hva vet han om beskyttelse av uskyldige?"`,
      id: 'fil-7-3-ex1',
      exerciseType: 'multiple-choice',
      options: [
        'Stråmann',
        'Ad hominem',
        'Falsk dilemma',
        'Appell til autoritet',
      ],
      correctAnswer: 1,
      explanation: 'Dette er ad hominem - angrep på personens situasjon (ikke har barn) i stedet for å adressere argumentet om dødsstraff. Å ikke ha barn påvirker ikke gyldigheten av etiske argumenter.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 2: Stråmann-eksempel',
      content: `Identifiser stråmannen i denne diskusjonen:

Person A: "Vi bør investere mer i kollektivtransport for å redusere biltrafikk i byene."
Person B: "Så du mener folk på bygda skal tvinges til å la bilen stå og gå milevis til jobb?"`,
      id: 'fil-7-3-ex2',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 3: Gyldig eller ugyldig autoritet?',
      content: `Vurder denne appellen til autoritet:

"Dataingeniør Kari Jensen mener klimaendringene ikke er menneskeskapte. Hun har doktorgrad fra NTNU og 20 års erfaring i oljeindustrien."

Er dette en legitim appell til autoritet?`,
      id: 'fil-7-3-ex3',
      exerciseType: 'multiple-choice',
      options: [
        'Ja, hun har doktorgrad og lang erfaring',
        'Nei, hun er ikke klimaforsker og kan ha interessekonflikt',
        'Ja, fordi hun jobber i oljeindustrien kjenner hun klimasaken',
        'Nei, fordi alle med doktorgrad har like stor autoritet på alt',
      ],
      correctAnswer: 1,
      explanation: 'Dette er ugyldig appell til autoritet. Selv om Kari har doktorgrad, er den i dataingeniør, ikke klimavitenskap. I tillegg kan jobben i oljeindustrien skape interessekonflikt. Klimaspørsmål bør vurderes av klimaforskere.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 4: Glidende skråplan eller reell bekymring?',
      content: `Analyser dette argumentet:

"Hvis vi tillater genredigering for å fjerne alvorlige arvelige sykdommer, vil foreldre snart designe 'perfekte barn' med blå øyne, høy IQ og atletiske evner. Dette fører til et todelt samfunn av genetiske 'overmennesker' og vanlige mennesker."

Er dette et glidende skråplan, eller en realistisk bekymring? Begrunn svaret.`,
      id: 'fil-7-3-ex4',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 5: Finn flere feilslutninger',
      content: `Dette Facebook-innlegget inneholder flere feilslutninger. Identifiser dem:

"Alle mine venner stemte på parti X, så det må være det beste partiet. Parti Y vil ødelegge landet - bare se på den inkompetente partilederen deres! Hvis vi ikke stemmer på parti X nå, vil Norge bli som Venezuela om få år."`,
      id: 'fil-7-3-ex5',
      exerciseType: 'classic',
    },
    // --- Samleoppgaver ---
    {
      type: 'exercise',
      title: 'Oppgave 6: Analyser debattinnlegg',
      content: `Les dette innlegget fra en nettavis-kommentar:

"Klimaaktivister sier vi må slutte å fly. Men jeg så jo Greta Thunberg spise kjøtt på et bilde! Hvis hun virkelig brydde seg om miljøet, ville hun vært veganer. Dessuten har klima alltid variert - vikingene dyrket vin på Grønland. Vi kan ikke stole på 'eksperter' som tjener millioner på klimaforskning."

Identifiser ALLE feilslutningene i teksten og forklar hvorfor de er feil.`,
      id: 'fil-7-3-ex6',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 7: Konstruer og korriger',
      content: `a) Skriv et argument som inneholder minst to ulike feilslutninger om følgende tema: "Bør vi ha karakterer på ungdomsskolen?"

b) Skriv deretter en forbedret versjon av samme argument uten feilslutninger.

c) Forklar hvilke feilslutninger du fjernet og hvorfor den nye versjonen er sterkere.`,
      id: 'fil-7-3-ex7',
      exerciseType: 'classic',
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Retorikk og overtalelse
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_7_4: TextbookChapter = {
  id: 'fil-7-4',
  chapterNumber: 39,
  title: 'Retorikk og overtalelse',
  duration: '20 min',
  description: 'Hvordan språk og retoriske virkemidler brukes til å overbevise og manipulere.',
  sections: [
    {
      type: 'text',
      title: 'Hva er retorikk?',
      content: `**Retorikk** er kunsten å overtale gjennom språk. Opprinnelig utviklet i antikkens Hellas, er retorikk fortsatt grunnleggende i politikk, reklame og hverdagskommunikasjon.

**Aristoteles' tre overtalelsesmidler:**

1. **Ethos** (troverdighet): Appellerer til talerens karakter og autoritet
2. **Pathos** (følelser): Appellerer til publikums emosjonelle reaksjoner
3. **Logos** (logikk): Appellerer til rasjonelle argumenter og bevis

God retorikk balanserer alle tre. Manipulativ retorikk overbruker pathos og ethos mens den neglisjerer logos.

**Hvorfor er dette viktig?**
- Forstå hvordan politikere og markedsførere påvirker deg
- Bli en bedre kommunikator selv
- Skille mellom overtale og manipulasjon`,
      id: 'fil-7-4-intro',
    },
    {
      type: 'text',
      title: 'Ethos - troverdighet og autoritet',
      content: `**Ethos** handler om talerens troverdighet. Publikum må stole på at du er kompetent og ærlig.

**Hvordan bygge ethos:**
- Vis ekspertise og erfaring
- Vær ærlig og balansert
- Anerkjenn motargumenter
- Bruk et profesjonelt språk

**Eksempler på ethos:**
- "Som lege med 20 års erfaring kan jeg forsikre dere..."
- "Jeg har selv opplevd dette problemet..."
- "Forskningen viser tydelig at..."

**Misbruk av ethos:**
- Falsk ekspertise (se appell til autoritet)
- Overdreven selvpromotering
- Skjule interessekonflikter

**Norsk politisk eksempel:**
En politiker bruker ethos når hun sier: "Som tidligere finansminister kjenner jeg statsbudsjettet bedre enn noen."`,
      id: 'fil-7-4-ethos',
    },
    {
      type: 'text',
      title: 'Pathos - følelsesmessig appell',
      content: `**Pathos** appellerer til publikums følelser: frykt, håp, sinne, medlidenhet, stolthet.

**Emosjonelle triggere:**
- **Frykt**: "Uten denne politikken vil vi miste alt vi har kjært."
- **Håp**: "Sammen kan vi bygge en bedre fremtid."
- **Sinne**: "De rike utnytter systemet mens vanlige folk sliter."
- **Stolthet**: "Vi nordmenn har alltid stått sammen i vanskelige tider."

**Legitim bruk av pathos:**
Emosjonell appell kan være etisk når den kombineres med faktiske argumenter.

Eksempel: "Tusenvis av barn sulter i dag" (pathos) + statistikk og løsningsforslag (logos).

**Manipulativ bruk:**
- Fryktpropaganda uten reell risiko
- Sentimentalitet som erstatning for argumenter
- Utgruppe-fiendtliggjøring`,
      id: 'fil-7-4-pathos',
    },
    {
      type: 'example',
      title: 'Analyse av politisk tale',
      content: `**Eksempel fra 17. mai-tale:**

"Våre forfedre kjempet for friheten vi i dag nyter godt av." (Pathos: stolthet, historisk tilhørighet)

"Som ordfører har jeg sett hvordan fellesskapet styrker vårt lokalsamfunn." (Ethos: erfaring og lokal troverdighet)

"Statistikken viser at frivillig arbeid har økt med 15% de siste fem årene." (Logos: konkrete tall og bevis)

**Analyse:**
Dette er balansert retorikk som kombinerer alle tre virkemidler. Talen appellerer til følelser, men underbygger med fakta og legitimerer gjennom erfaring.

**Kontrasteksempel - manipulativ versjon:**
"Uten sterke tradisjoner vil samfunnet vårt kollapse! De som ikke feirer 17. mai bryr seg ikke om Norge!"

Her er det bare pathos (frykt, stolthet) uten logos eller ærlig ethos.`,
      id: 'fil-7-4-example1',
    },
    {
      type: 'text',
      title: 'Logos - rasjonell argumentasjon',
      content: `**Logos** er logiske argumenter basert på fakta, statistikk og rasjonelt resonnement.

**Komponenter av logos:**
- Fakta og data
- Logiske slutninger
- Årsak-virkning-forhold
- Sammenligning og kontrast
- Definisjoner og kategorier

**Eksempel:**
"Forskning viser at røyking øker risikoen for lungekreft med 80%. Over 90% av lungekrefttilfeller er knyttet til tobakk. Derfor bør røyking forbys på offentlige steder."

**Svak logos:**
- Kirsebærplukking av data (cherry-picking)
- Falske årsakssammenhenger
- Manglende kildehenvisninger
- Logiske feilslutninger

God argumentasjon krever solid logos, men rene fakta overbeviser sjelden alene - vi er mennesker, ikke datamaskiner.`,
      id: 'fil-7-4-logos',
    },
    {
      type: 'text',
      title: 'Propaganda og manipulasjon',
      content: `**Propaganda** er systematisk bruk av retorikk for å manipulere opinionen, ofte med forvrengning av sannheten.

**Propagandateknikker:**

1. **Navn-kalling**: Sette negative merkelapper på motstandere
2. **Glansbilder**: Assosiere seg med positive symboler (flagg, familie, helter)
3. **Vitnesbyrd**: Bruke kjendiser eller "vanlige folk" som støtte
4. **Flokk-appell**: "Alle gjør det - bli med!"
5. **Kortspill-stokking**: Velge kun informasjon som støtter eget syn
6. **Generaliseringer**: Forenklede slagord uten nyanser
7. **Overføring**: Koble budskapet til noe positivt (eller negativt)

**Historiske eksempler:**
- Nazi-Tyskland: Jøder fremstilt som samfunnsfiender
- Kald krig: USA vs. USSR gjensidig demonisering
- Moderne: Desinformasjonskampanjer på sosiale medier

**Hvordan beskytte seg:**
- Sjekk kilder kritisk
- Se etter balansert informasjon
- Vær oppmerksom på emosjonelle manipulasjonsteknikker`,
      id: 'fil-7-4-propaganda',
    },
    {
      type: 'text',
      title: 'Kritisk lesning av tekster',
      content: `Når du møter overtalende tekster (annonser, politiske taler, nyhetsartikler), still disse spørsmålene:

**1. Hvem er avsenderen?**
- Hva er deres agenda?
- Har de interessekonflikter?

**2. Hva er formålet?**
- Informere, overtale eller manipulere?
- Hva vil de at du skal tro eller gjøre?

**3. Hvilke retoriske grep brukes?**
- Ethos, pathos eller logos?
- Balansert eller ensidig?

**4. Hva utelates?**
- Hvilke perspektiver mangler?
- Er motargumenter presentert rettferdig?

**5. Er påstandene etterprøvbare?**
- Finnes kilder og dokumentasjon?
- Er statistikken brukt korrekt?

Ved å stille disse spørsmålene blir du en mer kritisk konsument av informasjon.`,
      id: 'fil-7-4-kritisk',
    },
    {
      type: 'exercise',
      title: 'Oppgave 1: Identifiser retoriske virkemidler',
      content: `Analyser denne reklameteksten:

"Som leder av Norges største helseklinikk (ethos), vet jeg hvor viktig det er å ta vare på helsen. Tusenvis har allerede opplevd livskvalitet-forbedring (pathos + logos). Bli med på helserevolusjonen!"

Identifiser eksempler på ethos, pathos og logos.`,
      id: 'fil-7-4-ex1',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 2: Ethos, pathos eller logos?',
      content: `Hvilket retorisk virkemiddel dominerer her?

"Tenk på barna dine. Vil du virkelig risikere deres fremtid ved å ikke handle nå? Hver dag vi venter, blir problemet større. Dine barn fortjener bedre."`,
      id: 'fil-7-4-ex2',
      exerciseType: 'multiple-choice',
      options: [
        'Ethos - bygger på talerens autoritet',
        'Pathos - appellerer til foreldrefølelser og frykt',
        'Logos - presenterer rasjonelle argumenter',
        'Ingen klare retoriske virkemidler',
      ],
      correctAnswer: 1,
      explanation: 'Dette er klart pathos. Teksten appellerer direkte til foreldrefølelser (tenk på barna), skaper frykt (risikere fremtiden) og skyld (fortjener bedre). Det finnes ingen konkrete argumenter eller bevis, kun emosjonell manipulasjon.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 3: Analyser politisk retorikk',
      content: `En politiker sier:

"Som tidligere lærer i 30 år vet jeg hva skolen trenger. Våre barn fortjener det beste. Studier fra OECD viser at mindre klasser gir bedre resultater. Derfor må vi ansette 1000 nye lærere."

a) Identifiser ethos, pathos og logos
b) Er dette balansert retorikk eller manipulasjon?
c) Hvilke kritiske spørsmål bør du stille?`,
      id: 'fil-7-4-ex3',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 4: Gjenkjenn propagandateknikk',
      content: `Hvilken propagandateknikk brukes her?

"Alle suksessrike nordmenn investerer i eiendom. Ikke bli hengende etter! Kjøp din leilighet i dag og bli en del av vinnerklubben."`,
      id: 'fil-7-4-ex4',
      exerciseType: 'multiple-choice',
      options: [
        'Navn-kalling',
        'Flokk-appell (bandwagon)',
        'Vitnesbyrd',
        'Overføring',
      ],
      correctAnswer: 1,
      explanation: 'Dette er flokk-appell (bandwagon): "Alle gjør det - bli med!" Teksten hevder at "alle suksessrike" investerer (tvilsomt), og frykten for å bli "hengende etter" presser deg til å følge mengden.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 5: Kritisk analyse av tekst',
      content: `Les denne Facebook-posten kritisk:

"De etablerte mediene lyver om innvandring! Jeg har sett med egne øyne hvordan kriminaliteten eksploderer. Alle vet dette, men ingen tør å si det høyt. Våre barn vokser opp i et farlig Norge. Del hvis du bryr deg om landet vårt!"

Analyser:
a) Hvilke retoriske virkemidler brukes?
b) Hvilke propagandateknikker brukes?
c) Hvilke røde flagg ser du?
d) Hvordan ville du faktasjekket påstandene?`,
      id: 'fil-7-4-ex5',
      exerciseType: 'classic',
    },
    // --- Samleoppgaver ---
    {
      type: 'exercise',
      title: 'Oppgave 6: Sammenlign to taler',
      content: `Finn to taler om samme tema fra ulike politiske partier (f.eks. om klima, innvandring eller skole).

Analyser begge med fokus på:
- Balanse mellom ethos, pathos og logos
- Propagandateknikker
- Hva de utelater eller overdriver
- Hvilken tale er mest overbevisende, og hvorfor?

Skriv en kort rapport (ca. 300 ord).`,
      id: 'fil-7-4-ex6',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 7: Skriv egen overtalende tekst',
      content: `Skriv to versjoner av et innlegg om et tema du bryr deg om (f.eks. miljø, dyrevelferden, skolepress):

a) En etisk og balansert versjon som bruker ethos, pathos OG logos på en rettferdig måte.

b) En manipulativ versjon som overbruker pathos og propaganda-teknikker.

Forklar deretter forskjellene og hvorfor versjon A er mer respektfull overfor publikum.`,
      id: 'fil-7-4-ex7',
      exerciseType: 'classic',
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: Kildekritikk og sannhet
// ============================================================================

const CHAPTER_FILOSOFI_ETIKK_7_5: TextbookChapter = {
  id: 'fil-7-5',
  chapterNumber: 40,
  title: 'Kildekritikk og sannhet',
  duration: '20 min',
  description: 'Hvordan vurdere kilder, sannhetsteorier og bekjempe desinformasjon.',
  sections: [
    {
      type: 'text',
      title: 'Hva er sannhet?',
      content: `Før vi kan vurdere om noe er sant, må vi forstå hva sannhet er. Filosofer har foreslått ulike **sannhetsteorier**:

**1. Korrespondanseteorien**
En påstand er sann hvis den stemmer med virkeligheten.
- "Snø er hvit" er sant fordi snø faktisk er hvit
- Praktisk, men vanskelig for abstrakte påstander

**2. Koherensteorien**
En påstand er sann hvis den passer med andre aksepterte sannheter.
- Brukes i matematikk og logikk
- Problem: Falske systemer kan være interne konsistente

**3. Pragmatisk teori**
En påstand er sann hvis den fungerer i praksis.
- "Denne medisinen virker" er sant hvis pasienter blir friske
- Problem: Noe kan virke uten å være sant (placebo)

**4. Konsensus-teori**
En påstand er sann hvis eksperter er enige.
- Brukes i vitenskap
- Problem: Konsensus kan endre seg

I praksis bruker vi ofte en kombinasjon av disse.`,
      id: 'fil-7-5-sannhet',
    },
    {
      type: 'text',
      title: 'Kildekritikk - TONE-kriteriene',
      content: `**TONE** er et verktøy for å vurdere kilders pålitelighet:

**T - Troverdighet**
- Hvem er avsenderen?
- Har de relevant kompetanse?
- Er de objektive eller partiske?

**O - Opprinnelse**
- Er dette en primær- eller sekundærkilde?
- Hvor kommer informasjonen fra?
- Kan den spores tilbake til original kilde?

**N - Nøyaktighet**
- Er faktaene korrekte?
- Finnes kildehenvisninger?
- Er statistikk brukt riktig?

**E - Evet (formål)**
- Hva er kildens formål? (informere, overtale, underholde?)
- Hvem har fordel av dette budskapet?
- Finnes skjulte agendaer?

**Eksempel:**
En Facebook-post hevder: "5G-nettverk gir kreft!"
- **T**: Hvem er avsenderen? Lege eller konspirasjonsteoretiker?
- **O**: Hvor kommer påstanden fra? Forskning eller rykter?
- **N**: Finnes vitenskapelige studier som støtter dette?
- **E**: Hva er formålet? Skremme eller informere?`,
      id: 'fil-7-5-tone',
    },
    {
      type: 'text',
      title: 'Primær- og sekundærkilder',
      content: `**Primærkilder** er originalkilder:
- Vitenskapelige studier
- Historiske dokumenter
- Øyenvitneskildringer
- Statistikk fra offisielle byråer (SSB, FHI)

**Sekundærkilder** tolker og oppsummerer primærkilder:
- Nyhetsartikler
- Lærebøker
- Dokumentarer
- Wikipedia

**Hvorfor er dette viktig?**
Sekundærkilder kan misforstå, forenkle eller forvrenge primærkilder.

**Eksempel på forvrengning:**
- **Primærkilde (studie)**: "5% økt risiko for hjertesykdom ved høyt sukkerinntak."
- **Sekundærkilde (tabloid)**: "SUKKER DREPER! Ny forskning avslører dødelig fare!"

Søk alltid tilbake til primærkilden når påstander er viktige.`,
      id: 'fil-7-5-kilder',
    },
    {
      type: 'text',
      title: 'Falske nyheter og desinformasjon',
      content: `**Falske nyheter** (fake news) er bevisst falsk informasjon som presenteres som nyheter.

**Typer desinformasjon:**

1. **Fullstendig fabrikkert**: Helt oppspinnede historier
2. **Manipulerte bilder/videoer**: Deepfakes, redigerte bilder
3. **Misvisende overskrifter**: Clickbait som ikke matcher innholdet
4. **Tatt ut av kontekst**: Reelle sitater brukt villedende
5. **Falske eksperter**: Ikke-kvalifiserte presentert som autoriteter

**Norske eksempler:**
- Falske sitater tillagt politikere på sosiale medier
- Manipulerte statistikker om innvandring
- Clickbait-overskrifter som overdriver forskningsfunn

**Hvorfor sprer folk falske nyheter?**
- Økonomisk gevinst (annonser)
- Politisk propaganda
- Klikk og oppmerksomhet
- Genuint feilinformasjon (delt i god tro)

**Hvordan gjenkjenne:**
- Sjekk kilden (TONE)
- Se etter sensasjonelle overskrifter
- Faktasjekk med uavhengige kilder (Faktisk.no, Snopes)
- Søk bildesøk (er bildet brukt andre steder?)`,
      id: 'fil-7-5-fakenews',
    },
    {
      type: 'example',
      title: 'Faktasjekking i praksis',
      content: `**Påstand på Facebook:**
"Regjeringen har vedtatt at alle må ta koronavaksine eller få bøter! Del før de sletter!"

**Faktasjekking:**

1. **TONE - Troverdighet**: Hvem er avsenderen? Ukjent Facebook-profil, ikke offisiell kilde.

2. **TONE - Opprinnelse**: Finnes denne informasjonen på regjeringen.no eller Stortinget? Nei.

3. **TONE - Nøyaktighet**: Sjekk faktasjekkere: Faktisk.no har avkreftet dette.

4. **TONE - Eget formål**: Overskriften bruker frykt og oppfordrer til deling ("før de sletter") - typisk for desinformasjon.

5. **Bekreftelse fra offisielle kilder**: Folkehelseinstituttet bekrefter at vaksinen er frivillig.

**Konklusjon**: Falsk nyhet. Del IKKE videre.

Dette viser viktigheten av å faktasjekke før man deler informasjon.`,
      id: 'fil-7-5-example1',
    },
    {
      type: 'text',
      title: 'Konspirasjonsteorier',
      content: `**Konspirasjonsteorier** er forklaringer som tilskriver hendelser til hemmelige sammensvergelser, ofte uten solide bevis.

**Kjennetegn:**
- Forklarer komplekse hendelser med enkle, hemmelige planer
- Avviser offisielle forklaringer som "del av konspirasjonen"
- Selvforsterkende: All motbevis blir "bevis" på konspirasjon
- Bruker sammenhengshaver i stedet for bevis

**Eksempler:**
- "Månen landing var falsk"
- "9/11 var en inside job"
- "COVID-19 er planlagt av farmasøytisk industri"
- "Jorden er flat"

**Hvorfor tror folk på dem?**
- Gir enkle svar på komplekse spørsmål
- Skaper følelse av å "vite mer enn andre"
- Fellesskapsfølelse med likesinnede
- Mistillit til etablerte institusjoner

**Kritisk tilnærming:**
- Krev ekstraordinære bevis for ekstraordinære påstander
- Sjekk om teorien er falsifiserbar
- Vurder om enklere forklaringer finnes (Occams barberkniv)
- Se etter peer-reviewed forskning`,
      id: 'fil-7-5-konspirasjon',
    },
    {
      type: 'text',
      title: 'Digital dømmekraft',
      content: `I informasjonsalderen er **digital dømmekraft** avgjørende. Her er noen praktiske tips:

**På sosiale medier:**
- Les hele artikkelen, ikke bare overskriften
- Sjekk dato (er det gammelt innhold presentert som nytt?)
- Se hvem andre som deler dette (algoritmer skaper ekko-kamre)

**Ved søk på nett:**
- Bruk flere søkemotorer
- Sjekk side 2 og 3 av søkeresultater
- Vær kritisk til sponsede resultater

**Ved Wikipedia:**
- God startplass, men ikke sluttmål
- Sjekk kildehenvisningene nederst
- Sammenlign med andre kilder

**Ved nyhetsartikler:**
- Sammenlign med andre nyhetskilder
- Les "Om oss"-siden på nettstedet
- Vær skeptisk til clickbait

**Ved vitenskapelige påstander:**
- Søk etter peer-reviewed studier
- Sjekk om funn er gjentatt av andre forskere
- Vær varsom med "gjennombrudd" - vitenskap er inkrementell

**Husk:** Kritisk tenkning betyr ikke å mistro alt, men å vurdere alt nøye.`,
      id: 'fil-7-5-digital',
    },
    {
      type: 'exercise',
      title: 'Oppgave 1: Bruk TONE-kriteriene',
      content: `Vurder denne kilden med TONE:

En blogg skrevet av "Helseekspert Nina" hevder at glutenfri kost kurerer autisme. Bloggen har ingen kildehenvisninger, men mange entusiastiske kommentarer.

Analyser troverdighet, opprinnelse, nøyaktighet og eget formål.`,
      id: 'fil-7-5-ex1',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 2: Primær- eller sekundærkilde?',
      content: `Hvilken er en primærkilde?`,
      id: 'fil-7-5-ex2',
      exerciseType: 'multiple-choice',
      options: [
        'En VG-artikkel om en ny medisinsk studie',
        'Den vitenskapelige studien publisert i The Lancet',
        'Et YouTube-sammendrag av studien',
        'En Wikipedia-artikkel om temaet',
      ],
      correctAnswer: 1,
      explanation: 'Den vitenskapelige studien publisert i The Lancet er primærkilden - det er originalforskningen. De andre er sekundærkilder som tolker og formidler primærkilden.',
    },
    {
      type: 'exercise',
      title: 'Oppgave 3: Gjenkjenn falske nyheter',
      content: `Hvilke varselstegn på falske nyheter ser du her?

"SJOKKERENDE: Norske leger bekrefter at vanlig smertestillende gir KREFT! Legemiddelindustrien prøver å skjule dette! DEL NÅ før Big Pharma sletter dette!"

Identifiser minst fire røde flagg.`,
      id: 'fil-7-5-ex3',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 4: Vurder konspirasjonsteorien',
      content: `Noen hevder: "COVID-19-vaksiner inneholder mikrobrikker som lar regjeringen spore befolkningen."

Bruk kritisk tenkning:
a) Hvilke kjennetegn på konspirasjonsteori finner du?
b) Hvilke bevis ville man trenge for å bevise dette?
c) Finnes enklere forklaringer på vaksineskepsis?
d) Hvordan ville du faktasjekket denne påstanden?`,
      id: 'fil-7-5-ex4',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 5: Faktasjekk en påstand',
      content: `Finn en viral påstand på sosiale medier (Facebook, Instagram, TikTok) fra siste uke.

Faktasjekk den ved å:
- Bruke TONE-kriteriene
- Søke etter primærkilder
- Sjekke faktasjekk-nettsteder (Faktisk.no, Snopes)
- Sammenligne med etablerte medier

Skriv en kort rapport om funnene dine.`,
      id: 'fil-7-5-ex5',
      exerciseType: 'classic',
    },
    // --- Samleoppgaver ---
    {
      type: 'exercise',
      title: 'Oppgave 6: Analyser medieøkosystem',
      content: `Velg en aktuell sak som dekkes av flere medier (f.eks. politisk sak, klimarapport, helseforskning).

Sammenlign dekningen i:
a) En tabloid (VG, Dagbladet)
b) En riksavis (Aftenposten, DN)
c) Sosiale medier (Twitter/X, Facebook)
d) Primærkilden (regjeringen.no, forskning.no, originalstudie)

Analyser:
- Hvordan varierer overskrifter?
- Hva utelates eller fremheves?
- Hvilken kilde er mest pålitelig og hvorfor?

Skriv en rapport på 300-400 ord.`,
      id: 'fil-7-5-ex6',
      exerciseType: 'classic',
    },
    {
      type: 'exercise',
      title: 'Oppgave 7: Refleksjonsoppgave om egen informasjonsdiett',
      content: `Reflekter over dine egne informasjonskilder:

a) Hvor får du primært nyheter fra? (TV, sosiale medier, aviser, podcaster?)
b) Hvilke kilder stoler du mest på, og hvorfor?
c) Finnes det temaer der du primært får informasjon fra én type kilde?
d) Hvordan kan du forbedre din digitale dømmekraft?
e) Har du noen gang delt noe som viste seg å være feil? Hva lærte du?

Skriv en ærlig selvanalyse (200-300 ord) og lag en handlingsplan for mer kritisk mediekonsum.`,
      id: 'fil-7-5-ex7',
      exerciseType: 'classic',
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const FILOSOFI_ETIKK_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FILOSOFI_ETIKK_7_1,
  CHAPTER_FILOSOFI_ETIKK_7_2,
  CHAPTER_FILOSOFI_ETIKK_7_3,
  CHAPTER_FILOSOFI_ETIKK_7_4,
  CHAPTER_FILOSOFI_ETIKK_7_5,
];
