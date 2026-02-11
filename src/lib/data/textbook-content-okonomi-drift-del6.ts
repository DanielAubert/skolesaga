/* eslint-disable */
// @ts-nocheck

/**
 * Okonomi og driftsledelse VG3 - Del 6: Personal og organisasjon
 *
 * Kapittel 6.1-6.5 dekker personalplanlegging, rekruttering,
 * arbeidsmiljo og HMS, opplaring og utvikling, og arbeidsrett.
 *
 * Dekker LK20 kompetansemal:
 * - planlegge og gjennomfore rekrutteringsprosesser
 * - gjore rede for arbeidsmiljoloven og HMS-regelverk
 * - vurdere tiltak for kompetanseutvikling i en virksomhet
 * - drofte arbeidsrettslige problemstillinger knyttet til oppsigelse og permittering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Personalplanlegging
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6_1: TextbookChapter = {
  id: 'okonomi-drift-6-1',
  courseId: 'okonomi-drift',
  chapterNumber: '6.1',
  title: 'Personalplanlegging',
  description: 'Hvordan virksomheter planlegger bemanningsbehov, utarbeider bemanningsplaner og kartlegger kompetanse for a sikre riktig bemanning til enhver tid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge og gjennomfore personalarbeid i en virksomhet',
    'vurdere bemanningsbehov og kompetansekrav',
  ],
  content: [
    {
      id: 'od-6-1-intro',
      type: 'text',
      content: `## Personalplanlegging - riktig person pa riktig plass

Personalplanlegging handler om a sikre at virksomheten har riktig antall medarbeidere med riktig kompetanse til riktig tid. God personalplanlegging er avgjorende for at virksomheten skal na sine mal og levere kvalitet i alle ledd.

I dette kapittelet skal du lare:
- Hva personalplanlegging innebarer
- Hvordan lage en bemanningsplan
- Metoder for kompetansekartlegging
- Sammenhengen mellom strategi og bemanning`,
    },
    {
      id: 'od-6-1-def-1',
      type: 'definition',
      title: 'Personalplanlegging',
      content: `**Personalplanlegging** er en systematisk prosess der virksomheten analyserer sitt navarende og fremtidige bemanningsbehov. Malet er a sikre at organisasjonen har tilstrekkelig og riktig kompetanse for a gjennomfore sine oppgaver og na sine strategiske mal.`,
    },
    {
      id: 'od-6-1-text-1',
      type: 'text',
      content: `### Bemanningsplanen

En bemanningsplan er et verktoy som viser hvor mange ansatte som trengs, nar de trengs, og hvilken kompetanse de ma ha. Planen tar hensyn til:

**Faktorer i bemanningsplanlegging:**

| Faktor | Beskrivelse |
|--------|-------------|
| Arbeidsoppgaver | Hvilke oppgaver skal utfores? |
| Arbeidsmengde | Hvor mye arbeid er det? |
| Kompetansekrav | Hvilken kompetanse trengs? |
| Sesongvariasjoner | Varierer behovet gjennom aret? |
| Fravarsplanlegging | Ferie, sykdom, permisjon |
| Budsjett | Hva har vi rad til? |

**Steg i utarbeidelse av bemanningsplan:**
1. Kartlegg dagens bemanning og kompetanse
2. Vurder fremtidig behov basert pa strategi og mal
3. Identifiser gap mellom navarende og onsket bemanning
4. Lag en plan for a dekke gapet (rekruttering, opplaring, omorganisering)
5. Sett opp budsjett for personalkostnader
6. Folg opp og juster planen etter behov`,
    },
    {
      id: 'od-6-1-def-2',
      type: 'definition',
      title: 'Kompetansekartlegging',
      content: `**Kompetansekartlegging** er en systematisk gjennomgang av hvilken kompetanse de ansatte har, sett opp mot hvilken kompetanse virksomheten trenger. Kartleggingen avdekker kompetansegap og danner grunnlag for tiltak som opplaring, rekruttering eller omorganisering.`,
    },
    {
      id: 'od-6-1-text-2',
      type: 'text',
      content: `### Metoder for kompetansekartlegging

**1. Kompetansematrise**
En oversikt som viser ansattes kompetanse pa ulike omrader, ofte gradert pa en skala (f.eks. 1-5). Matrisen gir et raskt bilde av styrker og svakheter i organisasjonen.

**2. Medarbeidersamtaler**
Arlige samtaler mellom leder og medarbeider der kompetanse, utvikling og mal diskuteres. Gir innsikt i bade formell og uformell kompetanse.

**3. Selvvurdering**
De ansatte vurderer selv sin kompetanse pa ulike omrader. Kan kombineres med ledervurdering for et mer komplett bilde.

**4. 360-graders evaluering**
Tilbakemelding fra flere hold: leder, kolleger, underordnede og eventuelt kunder. Gir et bredt bilde av den ansattes kompetanse og samarbeidsevner.

### Kompetansegap

Nar kartleggingen er gjennomfort, kan virksomheten identifisere kompetansegap - forskjellen mellom den kompetansen virksomheten trenger og den kompetansen de ansatte faktisk har. Tiltak for a tette gapet kan vare:

- **Intern opplaring** - kurs, veiledning, jobbrotasjon
- **Ekstern rekruttering** - ansette nye medarbeidere med onsket kompetanse
- **Kjop av tjenester** - bruke konsulenter eller underleverandorer
- **Omorganisering** - flytte ansatte til oppgaver som passer bedre`,
    },
    {
      id: 'od-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Bemanningsplan for en butikk',
      problem: 'En klesbutikk har apent mandag-lordag kl. 10-18. Butikksjefen onsker a lage en bemanningsplan. Det trengs minimum 2 ansatte i butikken til enhver tid, og pa fredager og lordager trengs 3 ansatte pa grunn av hoyt kundebesok. Hver ansatt jobber maks 37,5 timer per uke. Hvor mange arsverk trenger butikken?',
      solution: `**Beregning:**

**Apningstider per uke:**
- Mandag-torsdag: 4 dager x 8 timer = 32 timer
- Fredag-lordag: 2 dager x 8 timer = 16 timer
- Totalt: 48 timer per uke

**Bemanningsbehov:**
- Mandag-torsdag: 2 ansatte x 32 timer = 64 arbeidstimer
- Fredag-lordag: 3 ansatte x 16 timer = 48 arbeidstimer
- Totalt behov: 112 arbeidstimer per uke

**Antall arsverk:**
- 112 timer / 37,5 timer = 2,99 arsverk
- Butikken trenger ca. 3 arsverk

I tillegg ma det planlegges for fravarsdekning (ferie, sykdom), som typisk utgjor 15-20 % ekstra. Med fravarsdekning: 3 x 1,18 = ca. 3,5 arsverk.`,
    },
    {
      id: 'od-6-1-text-3',
      type: 'text',
      content: `### Strategisk personalplanlegging

Personalplanlegging ma kobles til virksomhetens overordnede strategi. Dersom virksomheten planlegger vekst, ma det ansettes flere. Dersom markedet endrer seg, kan det vare behov for ny kompetanse.

**Sammenheng mellom strategi og bemanning:**
- Ekspansjon krever rekruttering og opplaring
- Kostnadsreduksjon kan innebere nedbemanning eller effektivisering
- Ny teknologi krever nye ferdigheter
- Endrede kundebehov krever tilpasning av kompetanse

God personalplanlegging er langsiktig og proaktiv, ikke bare reaktiv. Virksomheter som planlegger godt, slipper a havne i situasjoner der de mangler kritisk kompetanse.`,
    },
    {
      id: 'od-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-1',
        type: 'multiple-choice',
        task: 'Hva er hovedmalet med personalplanlegging?',
        options: [
          { id: 'a', text: 'A minimere lønnskostnader sa mye som mulig', isCorrect: false },
          { id: 'b', text: 'A sikre riktig antall medarbeidere med riktig kompetanse til riktig tid', isCorrect: true },
          { id: 'c', text: 'A ha flest mulig ansatte for a unnga overtidsarbeid', isCorrect: false },
          { id: 'd', text: 'A oppfylle lovkrav om bemanning', isCorrect: false },
        ],
        solution: 'Personalplanlegging handler om a balansere bemanningsbehovet slik at virksomheten har riktig antall personer med riktig kompetanse tilgjengelig nar det trengs.',
      },
    },
    {
      id: 'od-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-2',
        type: 'multiple-choice',
        task: 'Hva er en kompetansematrise?',
        options: [
          { id: 'a', text: 'En oversikt over ansattes lonnsnivaer', isCorrect: false },
          { id: 'b', text: 'En liste over alle stillinger i virksomheten', isCorrect: false },
          { id: 'c', text: 'En oversikt som viser ansattes kompetanse pa ulike omrader, gradert pa en skala', isCorrect: true },
          { id: 'd', text: 'Et skjema for a registrere sykefravær', isCorrect: false },
        ],
        solution: 'En kompetansematrise gir et visuelt overblikk over hvilken kompetanse de ansatte har pa ulike omrader, typisk gradert fra 1-5. Den hjelper ledelsen med a identifisere styrker og svakheter i organisasjonen.',
      },
    },
    {
      id: 'od-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-3',
        type: 'classic',
        task: 'Forklar hva et kompetansegap er, og beskriv tre ulike tiltak en virksomhet kan iverksette for a tette et slikt gap.',
        hints: ['Tenk pa forskjellen mellom det virksomheten trenger og det de ansatte kan'],
        solution: 'Et kompetansegap er forskjellen mellom den kompetansen virksomheten trenger og den kompetansen de ansatte faktisk har. Tiltak for a tette gapet kan vare: 1) Intern opplaring gjennom kurs, veiledning eller jobbrotasjon. 2) Ekstern rekruttering av nye medarbeidere med onsket kompetanse. 3) Kjop av tjenester fra konsulenter eller underleverandorer. Andre tiltak kan vare omorganisering eller etter- og videreutdanning.',
      },
    },
    {
      id: 'od-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-4',
        type: 'classic',
        task: 'Du skal lage en enkel bemanningsplan for en kafe som har apent mandag til fredag kl. 08-16. Det trengs minimum 2 ansatte pa formiddagen (08-12) og 3 ansatte pa ettermiddagen (12-16). Beregn totalt antall arbeidstimer per uke og hvor mange arsverk som trengs.',
        solution: 'Formiddag: 2 ansatte x 4 timer x 5 dager = 40 arbeidstimer. Ettermiddag: 3 ansatte x 4 timer x 5 dager = 60 arbeidstimer. Totalt: 40 + 60 = 100 arbeidstimer per uke. Antall arsverk: 100 / 37,5 = 2,67 arsverk. Kafeen trenger ca. 2,7 arsverk, altsa 3 stillinger hvorav en kan vare deltid.',
      },
    },
    {
      id: 'od-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-5',
        type: 'classic',
        task: 'Beskriv hvordan en virksomhet som planlegger a innfore et nytt datasystem bor gjennomfore kompetansekartlegging blant de ansatte.',
        solution: 'Virksomheten bor: 1) Kartlegge hvilken IT-kompetanse som kreves for det nye systemet. 2) Gjennomfore en selvvurdering der ansatte vurderer egen digital kompetanse. 3) Supplere med ledervurderinger for a fa et realistisk bilde. 4) Identifisere kompetansegapet mellom navarende og nodvendig niva. 5) Lage en opplaeringsplan tilpasset ulike grupper basert pa behovene. 6) Vurdere om noen roller krever ekstern rekruttering av spesialkompetanse.',
      },
    },
    {
      id: 'od-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-6-1-ex-6',
        type: 'classic',
        task: 'Drøft hvorfor strategisk personalplanlegging er viktig for en virksomhet som opererer i et marked med rask teknologisk utvikling.',
        solution: 'I markeder med rask teknologisk utvikling er det avgjorende a planlegge personalbehov proaktivt. Virksomheten ma forutse hvilken kompetanse som blir nodvendig i fremtiden og begynne opplaring og rekruttering i god tid. Uten strategisk planlegging risikerer man a mangle kritisk kompetanse nar nye teknologier innfores, noe som kan fore til tap av konkurransekraft. Langsiktig personalplanlegging gir ogsa mulighet til a utvikle eksisterende ansatte, noe som styrker bade lojalitet og kompetansebasen i organisasjonen.',
      },
    },
    {
      id: 'od-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Personalplanlegging** sikrer riktig bemanning til riktig tid
- En **bemanningsplan** tar hensyn til arbeidsoppgaver, arbeidsmengde, kompetansekrav og budsjett
- **Kompetansekartlegging** avdekker hva de ansatte kan og hva virksomheten trenger
- **Kompetansegap** kan tettes gjennom opplaring, rekruttering eller omorganisering
- Personalplanlegging ma kobles til virksomhetens **strategi**

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bemanningsplan | Plan for antall ansatte og kompetansebehov |
| Kompetansekartlegging | Systematisk gjennomgang av ansattes kompetanse |
| Kompetansegap | Forskjell mellom nodvendig og eksisterende kompetanse |
| Kompetansematrise | Visuell oversikt over ansattes kompetanseniva |
| Arsverk | En heltidsansatts arbeidsmengde per ar |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Rekruttering og ansettelse
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6_2: TextbookChapter = {
  id: 'okonomi-drift-6-2',
  courseId: 'okonomi-drift',
  chapterNumber: '6.2',
  title: 'Rekruttering og ansettelse',
  description: 'Hvordan virksomheter gjennomforer rekrutteringsprosessen fra stillingsanalyse via utlysning og intervju til arbeidsavtale og ansettelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge og gjennomfore rekrutteringsprosesser',
    'gjore rede for arbeidsrettslige krav ved ansettelse',
  ],
  content: [
    {
      id: 'od-6-2-intro',
      type: 'text',
      content: `## Rekruttering - a finne riktig kandidat

Rekruttering er prosessen med a tiltrekke, vurdere og ansette nye medarbeidere. En god rekrutteringsprosess er avgjorende for a fa inn riktig kompetanse og sikre at nye ansatte passer inn i organisasjonen.

I dette kapittelet skal du lare:
- Hva en stillingsanalyse innebarer
- Hvordan utforme en stillingsannonse
- Metoder for utvelgelse og intervju
- Krav til arbeidsavtale
- Juridiske rammer for ansettelse`,
    },
    {
      id: 'od-6-2-def-1',
      type: 'definition',
      title: 'Stillingsanalyse',
      content: `En **stillingsanalyse** er en systematisk gjennomgang av hva en stilling innebarer. Den beskriver arbeidsoppgaver, ansvarsomrader, kompetansekrav og personlige egenskaper som kreves. Stillingsanalysen danner grunnlaget for stillingsannonsen og vurderingen av kandidater.`,
    },
    {
      id: 'od-6-2-text-1',
      type: 'text',
      content: `### Rekrutteringsprosessen steg for steg

**1. Behovsanalyse**
- Trenger vi virkelig a ansette noen?
- Kan oppgavene loses pa andre mater (omorganisering, automatisering)?
- Hva slags stilling trenger vi?

**2. Stillingsanalyse**
- Definere arbeidsoppgaver og ansvarsomrader
- Fastsette kompetansekrav (utdanning, erfaring, ferdigheter)
- Beskrive onskede personlige egenskaper
- Bestemme stillingstype (heltid, deltid, midlertidig)

**3. Utlysning**
- Utforme stillingsannonse
- Velge kanaler (finn.no, LinkedIn, bransjemedier, NAV)
- Fastsette soknadsfrist
- Intern eller ekstern utlysning - eller begge deler

**4. Utvelgelse**
- Gjennomga soknader
- Sortere kandidater etter kvalifikasjoner
- Lage en lang-liste og kort-liste
- Velge kandidater til intervju

**5. Intervju og testing**
- Gjennomfore forste intervju
- Eventuelt andregangslntervju
- Personlighetstester eller ferdighetstester
- Referansesjekk

**6. Ansettelse**
- Velge kandidat og gi tilbud
- Utarbeide arbeidsavtale
- Informere ovrige sokere
- Planlegge onboarding`,
    },
    {
      id: 'od-6-2-def-2',
      type: 'definition',
      title: 'Arbeidsavtale',
      content: `En **arbeidsavtale** er en skriftlig avtale mellom arbeidsgiver og arbeidstaker som regulerer arbeidsforholdet. Ifølge arbeidsmiljoloven skal alle ansatte ha en skriftlig arbeidsavtale. Avtalen skal minimum inneholde: partenes identitet, arbeidssted, stillingsbeskrivelse, tiltredelsestidspunkt, lonn, arbeidstid, ferierettigheter og oppsigelsesfrister.`,
    },
    {
      id: 'od-6-2-text-2',
      type: 'text',
      content: `### Jobbintervjuet

Jobbintervjuet er en sentral del av rekrutteringsprosessen. Det gir arbeidsgiver mulighet til a vurdere kandidaten utover det som star i soknaden.

**Strukturert vs. ustrukturert intervju:**

| Type | Kjennetegn | Fordeler | Ulemper |
|------|------------|----------|---------|
| Strukturert | Faste sporsmal til alle | Rettferdig, sammenlignbart | Kan virke stivt |
| Ustrukturert | Fri samtale | Fleksibelt, naturlig | Vanskelig a sammenligne |
| Semi-strukturert | Noen faste sporsmal, rom for oppfolging | Balansert | Krever erfaring |

**Gode intervjusporsmal:**
- Atferdsbaserte: "Fortell om en gang du..." (avdekker faktisk atferd)
- Situasjonsbaserte: "Hva ville du gjort hvis..." (avdekker problemlosning)
- Kompetansebaserte: "Hvordan har du brukt..." (avdekker ferdigheter)

**Sporsmal som er forbudt:**
Diskrimineringsloven forbyr sporsmal om:
- Graviditet og familieplanlegging
- Politisk tilhorighet
- Seksuell orientering
- Religiose forhold (med unntak for trossamfunn)
- Helseforhold (med mindre det er relevant for stillingen)`,
    },
    {
      id: 'od-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Stillingsannonse for butikkmedarbeider',
      content: `**Stillingstittel:** Butikkmedarbeider - sportsbutikk

**Om stillingen:**
Vi soker en engasjert og serviceinnstilt medarbeider til var sportsbutikk i sentrum. Stillingen er fast, 80 % stilling.

**Arbeidsoppgaver:**
- Kundeservice og salg
- Varepafylling og varemottak
- Kassabetjening
- Vedlikehold av butikklokalet

**Kvalifikasjoner:**
- Erfaring fra salg er en fordel, men ikke et krav
- Interesse for sport og friluftsliv
- Gode kommunikasjonsevner
- Nodvendig med gode norskkunnskaper

**Personlige egenskaper:**
- Serviceinnstilt og utadvendt
- Ansvarsbevisst og palitelig
- Samarbeidsvillig og fleksibel

**Vi tilbyr:**
- Konkurransedyktig lonn
- Personalrabatt
- Godt arbeidsmiljo
- Muligheter for utvikling

**Soknadsfrist:** 15. mars
**Kontaktperson:** Butikksjef Kari Hansen, tlf. 123 45 678

Denne annonsen beskriver bade arbeidsoppgaver, krav, personlige egenskaper og hva virksomheten tilbyr. Den er saklig og diskrimineringsfri.`,
    },
    {
      id: 'od-6-2-text-3',
      type: 'text',
      content: `### Onboarding - a ta imot nye ansatte

Rekrutteringsprosessen er ikke over nar kontrakten er signert. God onboarding (innfasing) er avgjorende for at den nyansatte raskt skal bli produktiv og trives.

**Elementer i god onboarding:**
- Forberede arbeidsplass og utstyr for forste dag
- Lage en plan for de forste ukene
- Tildele en fadder eller mentor
- Gjennomfore opplaring i systemer og rutiner
- Presentere for kolleger og samarbeidspartnere
- Ha regelmessige oppfolgingssamtaler
- Evaluere proveperioden

Forskning viser at god onboarding reduserer turnover, oker produktiviteten og styrker tilknytningen til arbeidsplassen.`,
    },
    {
      id: 'od-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-1',
        type: 'multiple-choice',
        task: 'Hva er formalet med en stillingsanalyse?',
        options: [
          { id: 'a', text: 'A beregne lønnskostnader for stillingen', isCorrect: false },
          { id: 'b', text: 'A kartlegge arbeidsoppgaver, ansvarsomrader og kompetansekrav for stillingen', isCorrect: true },
          { id: 'c', text: 'A finne ut om stillingen bor legges ned', isCorrect: false },
          { id: 'd', text: 'A vurdere om den ansatte gjor en god jobb', isCorrect: false },
        ],
        solution: 'En stillingsanalyse beskriver systematisk hva stillingen innebarer, hvilken kompetanse som kreves og hvilke personlige egenskaper som er onskelige. Den danner grunnlaget for hele rekrutteringsprosessen.',
      },
    },
    {
      id: 'od-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-2',
        type: 'multiple-choice',
        task: 'Hvilke av disse sporsmaltypene bor brukes i et jobbintervju?',
        options: [
          { id: 'a', text: 'Sporsmal om kandidatens familieplanlegging', isCorrect: false },
          { id: 'b', text: 'Sporsmal om kandidatens politiske tilhorighet', isCorrect: false },
          { id: 'c', text: 'Atferdsbaserte sporsmal som avdekker faktisk erfaring', isCorrect: true },
          { id: 'd', text: 'Sporsmal om kandidatens religiose bakgrunn', isCorrect: false },
        ],
        solution: 'Atferdsbaserte sporsmal (f.eks. "Fortell om en gang du loste en vanskelig kundesituasjon") er effektive fordi de avdekker faktisk atferd og erfaring. Sporsmal om familieplanlegging, politisk tilhorighet og religion er forbudt etter diskrimineringsloven.',
      },
    },
    {
      id: 'od-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-3',
        type: 'classic',
        task: 'Beskriv de seks hovedstegene i en rekrutteringsprosess.',
        hints: ['Start med behovsanalyse og avslutt med ansettelse'],
        solution: 'De seks hovedstegene er: 1) Behovsanalyse - vurdere om det er behov for nyansettelse. 2) Stillingsanalyse - definere arbeidsoppgaver, kompetansekrav og onskede egenskaper. 3) Utlysning - utforme annonse og velge kanaler. 4) Utvelgelse - gjennomga soknader og lage kort-liste. 5) Intervju og testing - gjennomfore intervjuer, tester og referansesjekk. 6) Ansettelse - velge kandidat, utarbeide arbeidsavtale og planlegge onboarding.',
      },
    },
    {
      id: 'od-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-4',
        type: 'classic',
        task: 'Lag en enkel stillingsannonse for en sommerjobb som servitor pa en restaurant. Inkluder stillingstittel, arbeidsoppgaver, kvalifikasjoner og personlige egenskaper.',
        solution: 'Et godt svar kan f.eks. vare: Stillingstittel: Servitor - sommervikar. Arbeidsoppgaver: Servering, kundebehandling, klargjoring av bord, kassabetjening. Kvalifikasjoner: Erfaring fra service er en fordel, gode norskkunnskaper, gjerne engelskkunnskaper. Personlige egenskaper: Serviceinnstilt, effektiv, blid og imotekommende, stresstalig. Perioden og soknadsfrist bor ogsa oppgis.',
      },
    },
    {
      id: 'od-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-5',
        type: 'classic',
        task: 'Hva skal en arbeidsavtale ifølge arbeidsmiljoloven minimum inneholde? Nevn minst fem punkter.',
        solution: 'En arbeidsavtale skal minimum inneholde: 1) Partenes identitet (navn pa arbeidsgiver og arbeidstaker). 2) Arbeidssted. 3) Beskrivelse av arbeidet eller stillingstittel. 4) Tiltredelsestidspunkt. 5) Forventet varighet dersom arbeidsforholdet er midlertidig. 6) Lonnsvilkar. 7) Arbeidstid. 8) Lengde pa ferie og ferielonn. 9) Oppsigelsesfrister. 10) Eventuell proveperiode.',
      },
    },
    {
      id: 'od-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-6-2-ex-6',
        type: 'classic',
        task: 'Drøft hvorfor god onboarding er viktig for bade arbeidsgiver og arbeidstaker.',
        solution: 'For arbeidsgiver er god onboarding viktig fordi det reduserer turnover (kostbart a miste nyansatte), oker produktiviteten raskere og styrker virksomhetens omdomme som arbeidsgiver. For arbeidstaker gir god onboarding trygghet, raskere mestring av oppgavene, bedre sosial integrering og hoyere trivsel. Forskning viser at de forste ukene i ny jobb er avgjorende for om den ansatte velger a bli eller slutte, sa onboarding er en strategisk investering.',
      },
    },
    {
      id: 'od-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Rekruttering** er prosessen med a tiltrekke, vurdere og ansette medarbeidere
- En **stillingsanalyse** definerer hva stillingen innebarer og hvilken kompetanse som kreves
- **Intervjuteknikk** er viktig - strukturerte og atferdsbaserte sporsmal gir best resultat
- En skriftlig **arbeidsavtale** er lovpalagt og ma inneholde spesifikke punkter
- God **onboarding** er avgjorende for at nyansatte skal lykkes

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Stillingsanalyse | Kartlegging av arbeidsoppgaver og kompetansekrav |
| Stillingsannonse | Utlysning av ledig stilling |
| Strukturert intervju | Intervju med faste sporsmal til alle kandidater |
| Arbeidsavtale | Skriftlig avtale som regulerer arbeidsforholdet |
| Onboarding | Prosessen med a ta imot og fase inn nye ansatte |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Arbeidsmiljo og HMS
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6_3: TextbookChapter = {
  id: 'okonomi-drift-6-3',
  courseId: 'okonomi-drift',
  chapterNumber: '6.3',
  title: 'Arbeidsmiljo og HMS',
  description: 'Arbeidsmiljoloven, HMS-arbeid, verneombudets rolle og arbeidsmiljoutvalget (AMU). Hvordan virksomheter jobber systematisk med helse, miljo og sikkerhet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for arbeidsmiljoloven og HMS-regelverk',
    'vurdere tiltak for a sikre et godt arbeidsmiljo',
  ],
  content: [
    {
      id: 'od-6-3-intro',
      type: 'text',
      content: `## Arbeidsmiljo og HMS - et trygt og godt arbeidsliv

Alle har rett til et forsvarlig arbeidsmiljo. Arbeidsmiljoloven stiller klare krav til arbeidsgivere om a sikre helse, miljo og sikkerhet (HMS) pa arbeidsplassen. I dette kapittelet ser vi pa regelverket og de viktigste aktørene i HMS-arbeidet.

I dette kapittelet skal du lare:
- Hovedtrekkene i arbeidsmiljoloven
- Hva systematisk HMS-arbeid innebarer
- Verneombudets og AMUs rolle
- Forskjellen mellom fysisk og psykososialt arbeidsmiljo`,
    },
    {
      id: 'od-6-3-def-1',
      type: 'definition',
      title: 'Arbeidsmiljoloven',
      content: `**Arbeidsmiljoloven** (lov om arbeidsmiljo, arbeidstid og stillingsvern) er den viktigste loven som regulerer arbeidsforhold i Norge. Lovens formal er a sikre et arbeidsmiljo som gir grunnlag for en helsefremmende og meningsfylt arbeidssituasjon, med full trygghet mot fysiske og psykiske skadevirkninger.`,
    },
    {
      id: 'od-6-3-text-1',
      type: 'text',
      content: `### Hovedomrader i arbeidsmiljoloven

**Fysisk arbeidsmiljo:**
- Sikkerhet mot ulykker og skader
- Ergonomiske forhold (arbeidsstillinger, belysning, stoy)
- Inneklima og ventilasjon
- Bruk av verneutstyr
- Sikker handtering av kjemikalier

**Psykososialt arbeidsmiljo:**
- Vern mot mobbing og trakassering
- Forebygging av stress og utbrenthet
- Medvirkning og medbestemmelse
- Sosialt fellesskap pa arbeidsplassen
- Meningsfulle arbeidsoppgaver

**Organisatorisk arbeidsmiljo:**
- Arbeidstidsbestemmelser
- Rett til pauser og fritid
- Skift- og turnusordninger
- Tilrettelegging ved sykdom
- Stillingsvern (vern mot usaklig oppsigelse)`,
    },
    {
      id: 'od-6-3-def-2',
      type: 'definition',
      title: 'HMS - Helse, miljo og sikkerhet',
      content: `**HMS** star for helse, miljo og sikkerhet. Systematisk HMS-arbeid innebarer at virksomheten kontinuerlig kartlegger farer, vurderer risiko og iverksetter tiltak for a forebygge skader og sykdom pa arbeidsplassen. Alle virksomheter med ansatte er palagt a ha et systematisk HMS-arbeid.`,
    },
    {
      id: 'od-6-3-text-2',
      type: 'text',
      content: `### Systematisk HMS-arbeid

Internkontrollforskriften krever at alle virksomheter med ansatte har et dokumentert HMS-system. Dette innebarer:

**Hovedelementer i HMS-systemet:**
1. **Mal og policy** - Virksomhetens HMS-mal
2. **Organisering** - Hvem har ansvar for hva
3. **Kartlegging** - Identifisere farer og risiko
4. **Risikovurdering** - Vurdere sannsynlighet og konsekvens
5. **Tiltak** - Iverksette forebyggende og korrigerende tiltak
6. **Dokumentasjon** - Skriftlig dokumentasjon av alt HMS-arbeid
7. **Oppfolging** - Kontrollere at tiltak fungerer
8. **Forbedring** - Kontinuerlig forbedring av HMS-arbeidet

**HMS-hjulet (PDCA-syklusen):**

| Fase | Aktivitet |
|------|-----------|
| Planlegge (Plan) | Kartlegge farer, vurdere risiko, planlegge tiltak |
| Gjennomfore (Do) | Iverksette tiltak, gjennomfore opplaring |
| Kontrollere (Check) | Overvake, male resultater, gjennomfore vernerunder |
| Forbedre (Act) | Korrigere avvik, forbedre rutiner |`,
    },
    {
      id: 'od-6-3-text-3',
      type: 'text',
      content: `### Viktige roller i HMS-arbeidet

**Arbeidsgiveren:**
- Har hovedansvaret for HMS
- Skal sorge for systematisk HMS-arbeid
- Skal sorge for opplaring og informasjon
- Ansvarlig for a stille nodvendig verneutstyr til disposisjon

**Arbeidstakeren:**
- Har plikt til a medvirke i HMS-arbeidet
- Skal melde fra om farlige forhold
- Skal bruke pabud verneutstyr
- Skal folge sikkerhetsrutiner

**Verneombudet:**
- Valgt av og blant de ansatte
- Palagt i virksomheter med minst 10 ansatte
- Skal ivareta arbeidstakernes interesser i HMS-saker
- Har rett til a stanse farlig arbeid
- Deltar i vernerunder og kartlegginger

**Arbeidsmiljoutvalget (AMU):**
- Palagt i virksomheter med minst 50 ansatte
- Partssammensatt (like mange fra arbeidsgiver- og arbeidstakersiden)
- Behandler saker om HMS, arbeidsmiljo og velferdsordninger
- Skal gjennomga rapporter om arbeidsulykker og sykefravær
- Kan vedta tiltak for a forbedre arbeidsmiljoet

**Bedriftshelsetjenesten (BHT):**
- Ekstern eller intern helsetjeneste
- Bistar virksomheten med forebyggende HMS-arbeid
- Gjennomforer helseundersokelser
- Gir rad om ergonomi, arbeidsmiljo og tilrettelegging`,
    },
    {
      id: 'od-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering i en produksjonsbedrift',
      problem: 'En mobelverksted skal gjennomfore en risikovurdering av arbeidsplassen. Hvordan kan de ga frem?',
      solution: `**Steg 1: Kartlegging av farer**
- Stoy fra maskiner
- Stov fra trebearbeiding
- Fare for kuttskader
- Tunge loft og belastende arbeidsstillinger
- Brannfare fra lakkering

**Steg 2: Risikovurdering**
| Fare | Sannsynlighet | Konsekvens | Risiko |
|------|--------------|------------|--------|
| Stoy | Hoy | Middels | Hoy |
| Stov | Hoy | Hoy | Svart hoy |
| Kuttskader | Middels | Hoy | Hoy |
| Belastning | Hoy | Middels | Hoy |
| Brann | Lav | Svart hoy | Middels |

**Steg 3: Tiltak**
- Stoy: Horselsvern, stoydemping pa maskiner, begrense eksponeringstid
- Stov: Avsug, stovsugere, stovmasker, regelmessig rengjoring
- Kuttskader: Opplaring, maskinsikring, hansker
- Belastning: Hjelpemidler for lofting, variasjon i oppgaver, ergonomisk tilrettelegging
- Brann: Brannvarsler, slokkeutstyr, sprinklersystem, brannovelser`,
    },
    {
      id: 'od-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-1',
        type: 'multiple-choice',
        task: 'Hva er verneombudets viktigste oppgave?',
        options: [
          { id: 'a', text: 'A ansette nye medarbeidere', isCorrect: false },
          { id: 'b', text: 'A ivareta arbeidstakernes interesser i HMS-saker', isCorrect: true },
          { id: 'c', text: 'A utarbeide virksomhetens budsjett', isCorrect: false },
          { id: 'd', text: 'A bestemme lonnsniva for de ansatte', isCorrect: false },
        ],
        solution: 'Verneombudet er valgt av og blant de ansatte, og har som hovedoppgave a ivareta arbeidstakernes interesser i saker som angaar arbeidsmiljo, helse og sikkerhet. Verneombudet har ogsa rett til a stanse farlig arbeid.',
      },
    },
    {
      id: 'od-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-2',
        type: 'multiple-choice',
        task: 'Nar er en virksomhet palagt a ha et arbeidsmiljoutvalg (AMU)?',
        options: [
          { id: 'a', text: 'Alle virksomheter ma ha AMU', isCorrect: false },
          { id: 'b', text: 'Virksomheter med minst 10 ansatte', isCorrect: false },
          { id: 'c', text: 'Virksomheter med minst 50 ansatte', isCorrect: true },
          { id: 'd', text: 'Bare offentlige virksomheter', isCorrect: false },
        ],
        solution: 'Arbeidsmiljoloven krever at virksomheter med minst 50 ansatte skal ha et arbeidsmiljoutvalg. For virksomheter med mellom 20 og 50 ansatte kan det opprettes AMU dersom en av partene krever det.',
      },
    },
    {
      id: 'od-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-3',
        type: 'classic',
        task: 'Forklar forskjellen mellom fysisk, psykososialt og organisatorisk arbeidsmiljo. Gi to eksempler pa utfordringer innen hvert omrade.',
        hints: ['Tenk pa hva som kan pavirke kropp, psyke og arbeidsforhold'],
        solution: 'Fysisk arbeidsmiljo handler om de materielle forholdene pa arbeidsplassen: stoy, stov, ergonomi, belysning, temperatur. Eksempler: stoyskader fra maskiner, belastningsskader fra darlige arbeidsstillinger. Psykososialt arbeidsmiljo handler om de mellommenneskelige forholdene: trivsel, mobbing, stress, sosial stotte. Eksempler: mobbing fra kolleger, stress pa grunn av hoy arbeidsbelastning. Organisatorisk arbeidsmiljo handler om hvordan arbeidet er organisert: arbeidstid, skiftordninger, ledelsesstruktur. Eksempler: for lange arbeidsdager, manglende mulighet for pauser.',
      },
    },
    {
      id: 'od-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-4',
        type: 'classic',
        task: 'Beskriv de fire fasene i HMS-hjulet (PDCA-syklusen) og forklar hva som skjer i hver fase.',
        solution: '1) Planlegge (Plan): Kartlegge farer og risiko pa arbeidsplassen, vurdere sannsynlighet og konsekvens, og planlegge tiltak. 2) Gjennomfore (Do): Iverksette de planlagte tiltakene, gjennomfore opplaring av ansatte og innfore nye rutiner. 3) Kontrollere (Check): Overvake og male om tiltakene fungerer, gjennomfore vernerunder og internrevisjoner. 4) Forbedre (Act): Korrigere avvik, oppdatere rutiner og prosedyrer, og sette nye mal for neste runde. Prosessen er syklisk og gjentakende for kontinuerlig forbedring.',
      },
    },
    {
      id: 'od-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-5',
        type: 'classic',
        task: 'Gjennomfor en enkel risikovurdering for et kontorlokale. Identifiser minst fire farer, vurder risikoen og foresl tiltak.',
        solution: 'Mulige farer: 1) Darlig ergonomi (hoy sannsynlighet, middels konsekvens) - tiltak: justerbare stoler og bord, ergonomisk veiledning. 2) Darlig inneklima (middels sannsynlighet, middels konsekvens) - tiltak: god ventilasjon, regelmessig vedlikehold. 3) Brann (lav sannsynlighet, hoy konsekvens) - tiltak: brannvarsler, slokkeutstyr, romningsplan, brannovelser. 4) Psykososiale utfordringer som stress (middels sannsynlighet, hoy konsekvens) - tiltak: rimelig arbeidsbelastning, medarbeidersamtaler, sosialt fellesskap.',
      },
    },
    {
      id: 'od-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-6-3-ex-6',
        type: 'classic',
        task: 'Drøft hvem som har ansvar for HMS pa en arbeidsplass, og forklar hvordan ansvar er fordelt mellom arbeidsgiver, arbeidstaker, verneombud og AMU.',
        solution: 'Arbeidsgiveren har hovedansvaret for HMS og skal sorge for at arbeidsmiljoet er forsvarlig. Arbeidstakeren har medvirkningsplikt og skal melde fra om farer og bruke verneutstyr. Verneombudet representerer arbeidstakerne i HMS-saker og kan stanse farlig arbeid. AMU er et partssammensatt organ som behandler overordnede HMS-saker og kan vedta tiltak. Selv om arbeidsgiveren har hovedansvaret, er det et samarbeid mellom alle parter som gjor HMS-arbeidet effektivt.',
      },
    },
    {
      id: 'od-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Arbeidsmiljoloven** sikrer et forsvarlig arbeidsmiljo for alle
- **HMS-arbeid** skal vare systematisk og dokumentert
- **Verneombudet** ivaretar arbeidstakernes interesser i HMS-saker
- **AMU** er palagt i virksomheter med minst 50 ansatte
- Arbeidsmiljoet har fysiske, psykososiale og organisatoriske dimensjoner
- **Risikovurdering** er sentralt i forebyggende HMS-arbeid

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Arbeidsmiljoloven | Hovedlov for arbeidsforhold i Norge |
| HMS | Helse, miljo og sikkerhet |
| Internkontroll | Systematisk HMS-arbeid iht. forskrift |
| Verneombud | Representant for ansatte i HMS-saker |
| AMU | Arbeidsmiljoutvalget - partssammensatt organ |
| Risikovurdering | Vurdering av sannsynlighet og konsekvens for farer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Opplaring og utvikling
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6_4: TextbookChapter = {
  id: 'okonomi-drift-6-4',
  courseId: 'okonomi-drift',
  chapterNumber: '6.4',
  title: 'Opplaring og utvikling',
  description: 'Hvordan virksomheter jobber med kompetanseutvikling, opplaring av ansatte og medarbeidersamtaler for a styrke organisasjonen og den enkeltes karriere.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere tiltak for kompetanseutvikling i en virksomhet',
    'gjore rede for medarbeidersamtalen som verktoy for utvikling',
  ],
  content: [
    {
      id: 'od-6-4-intro',
      type: 'text',
      content: `## Opplaring og utvikling - investering i mennesker

Kompetente og motiverte medarbeidere er virksomhetens viktigste ressurs. Gjennom systematisk opplaring og utvikling kan virksomheten styrke sin konkurransekraft, oke kvaliteten og bidra til at de ansatte trives og vokser i rollene sine.

I dette kapittelet skal du lare:
- Hva kompetanseutvikling innebarer
- Ulike former for opplaring
- Hvordan gjennomfore medarbeidersamtaler
- Sammenhengen mellom utvikling og motivasjon`,
    },
    {
      id: 'od-6-4-def-1',
      type: 'definition',
      title: 'Kompetanseutvikling',
      content: `**Kompetanseutvikling** er alle tiltak som bidrar til a oke de ansattes kunnskaper, ferdigheter og holdninger. Det kan skje gjennom formell utdanning, kurs, veiledning, jobbrotasjon, prosjektdeltakelse eller selvstudium. Malet er a styrke bade den enkeltes og organisasjonens evne til a utfore oppgaver og na mal.`,
    },
    {
      id: 'od-6-4-text-1',
      type: 'text',
      content: `### Former for opplaring og kompetanseutvikling

**Formell opplaring:**
- Kurs og seminarer (internt eller eksternt)
- Etter- og videreutdanning
- Sertifiseringer og fagbrev
- E-laring og nettbaserte kurs
- Konferanser og fagdager

**Uformell opplaring:**
- Veiledning og mentoring
- Fadderordninger for nyansatte
- Jobbrotasjon (proving av ulike oppgaver)
- Erfaringsdeling mellom kolleger
- Hospitering i andre avdelinger

**Laringsarenaer pa arbeidsplassen:**

| Arena | Eksempel | Fordel |
|-------|----------|--------|
| Pa jobben | Veiledning fra erfaren kollega | Direkte relevans |
| Nart jobben | Interne kurs og workshops | Tilpasset virksomheten |
| Utenfor jobben | Eksterne kurs, konferanser | Nye perspektiver |
| Digitalt | E-laring, webinarer | Fleksibelt og tilgjengelig |`,
    },
    {
      id: 'od-6-4-def-2',
      type: 'definition',
      title: 'Medarbeidersamtale',
      content: `En **medarbeidersamtale** er en planlagt, fortrolig samtale mellom leder og medarbeider. Samtalen gjennomfores vanligvis en til to ganger i aret og tar for seg arbeidssituasjon, resultater, utviklingsmuligheter, trivsel og samarbeid. Medarbeidersamtalen er et viktig verktoy for personalledelse og kompetanseutvikling.`,
    },
    {
      id: 'od-6-4-text-2',
      type: 'text',
      content: `### Medarbeidersamtalen

Medarbeidersamtalen er et av de viktigste verktoyene for personalutvikling. Den gir bade leder og medarbeider mulighet til a ta opp viktige temaer i en strukturert ramme.

**Formalet med medarbeidersamtalen:**
- Vurdere prestasjoner og resultater
- Identifisere utviklingsbehov og karrieremuligheter
- Styrke relasjonen mellom leder og medarbeider
- Avklare forventninger begge veier
- Sette mal for neste periode
- Fange opp utfordringer og mistrivsel tidlig

**Struktur for en god medarbeidersamtale:**

**1. Forberedelse**
- Bade leder og medarbeider forbereder seg
- Felles samtaleskjema med temaer
- Gjennomga forrige samtales mal og avtaler
- Sette av tilstrekkelig tid (45-90 minutter)

**2. Gjennomforing**
- Apning: skape trygghet og god atmosfare
- Tilbakeblikk: hva er oppnadd siden sist?
- Status: hvordan er arbeidssituasjonen na?
- Utvikling: hvilke utviklingsbehov finnes?
- Fremover: hvilke mal og avtaler gjor vi?

**3. Oppfolging**
- Skriftlig oppsummering av samtalen
- Avtaler folges opp gjennom aret
- Kontinuerlig dialog, ikke bare en gang i aret`,
    },
    {
      id: 'od-6-4-text-3',
      type: 'text',
      content: `### Motivasjon og utvikling

Kompetanseutvikling henger tett sammen med motivasjon. Ansatte som far mulighet til a utvikle seg, er ofte mer engasjerte og lojale.

**Herzbergs tofaktorteori:**

| Hygienefaktorer | Motivasjonsfaktorer |
|-----------------|---------------------|
| Lonn og goder | Prestasjoner og anerkjennelse |
| Arbeidsforhold | Ansvar og selvstendighet |
| Ledelse | Personlig vekst og utvikling |
| Kollegaforhold | Meningsfulle arbeidsoppgaver |
| Jobbsikkerhet | Mulighet for forfremmelse |

Hygienefaktorer forebygger mistrivsel, men skaper ikke motivasjon i seg selv. Det er motivasjonsfaktorene som gjor at ansatte yter ekstra og opplever arbeidsglede.

**Larende organisasjoner:**
En larende organisasjon er en virksomhet som systematisk legger til rette for laring og utvikling pa alle nivaer. Kjennetegn:
- Kultur for deling av kunnskap og erfaringer
- Toleranse for a prove og feile
- Systematisk evaluering og forbedring
- Ledere som er opptatt av utvikling
- Gode systemer for a fange opp og dele laring`,
    },
    {
      id: 'od-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Kompetanseutviklingsplan',
      problem: 'En IT-bedrift med 20 ansatte onsker a lage en kompetanseutviklingsplan. Hvordan kan de ga frem?',
      solution: `**Steg 1: Kartlegge behov**
- Gjennomfore kompetansekartlegging av alle ansatte
- Identifisere strategiske kompetansebehov (f.eks. ny teknologi)
- Innhente onske fra medarbeidersamtaler

**Steg 2: Prioritere tiltak**
| Kompetanseomrade | Gap | Tiltak | Prioritet |
|------------------|-----|--------|-----------|
| Skyteknologi | Stort | Sertifiseringskurs | Hoy |
| Prosjektledelse | Middels | Internt kurs | Middels |
| Kundeservice | Lite | Veiledning | Lav |

**Steg 3: Lage plan**
- Budsjett: 200 000 kr arlig til kompetanseutvikling
- Tidslinje: Skyteknologi i Q1-Q2, prosjektledelse i Q3
- Ansvarlige: HR-leder koordinerer, avdelingsledere gjennomforer

**Steg 4: Gjennomfore og evaluere**
- Folge opp at tiltak gjennomfores
- Evaluere effekten gjennom medarbeidersamtaler
- Justere planen basert pa erfaringer`,
    },
    {
      id: 'od-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-1',
        type: 'multiple-choice',
        task: 'Ifølge Herzbergs tofaktorteori, hva er det som skaper motivasjon pa arbeidsplassen?',
        options: [
          { id: 'a', text: 'Hoy lonn og gode arbeidsforhold', isCorrect: false },
          { id: 'b', text: 'Ansvar, anerkjennelse og personlig vekst', isCorrect: true },
          { id: 'c', text: 'Jobbsikkerhet og god ledelse', isCorrect: false },
          { id: 'd', text: 'Kortere arbeidstid og mer ferie', isCorrect: false },
        ],
        solution: 'Ifølge Herzberg er det motivasjonsfaktorene (prestasjoner, anerkjennelse, ansvar, personlig vekst og meningsfulle oppgaver) som skaper reell motivasjon. Hygienefaktorer som lonn og arbeidsforhold forebygger mistrivsel, men skaper ikke motivasjon alene.',
      },
    },
    {
      id: 'od-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-2',
        type: 'multiple-choice',
        task: 'Hva er hovedformalet med en medarbeidersamtale?',
        options: [
          { id: 'a', text: 'A gi den ansatte lonnsforhoyelse', isCorrect: false },
          { id: 'b', text: 'A dokumentere feil den ansatte har gjort', isCorrect: false },
          { id: 'c', text: 'A vurdere prestasjoner, identifisere utviklingsbehov og sette mal', isCorrect: true },
          { id: 'd', text: 'A avgjore om den ansatte skal forfremmes', isCorrect: false },
        ],
        solution: 'Medarbeidersamtalen er et verktoy for utvikling og dialog. Formalet er a vurdere prestasjoner, identifisere utviklingsbehov, styrke relasjonen mellom leder og medarbeider, avklare forventninger og sette mal for neste periode.',
      },
    },
    {
      id: 'od-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom formell og uformell opplaring, og gi to eksempler pa hver.',
        hints: ['Tenk pa strukturert vs. ustrukturert laring'],
        solution: 'Formell opplaring er planlagt og strukturert, f.eks. kurs, sertifiseringer, etter- og videreutdanning eller e-laring. Uformell opplaring skjer mer naturlig i arbeidshverdagen, f.eks. veiledning fra en erfaren kollega, jobbrotasjon, erfaringsdeling i teamet eller fadderordninger. Begge formene er viktige for helhetlig kompetanseutvikling.',
      },
    },
    {
      id: 'od-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-4',
        type: 'classic',
        task: 'Lag et forslag til samtaleguide for en medarbeidersamtale. Inkluder minst fem temaer som bor tas opp.',
        solution: 'En samtaleguide kan inneholde: 1) Tilbakeblikk - hva har gaatt bra og hva har vart utfordrende siden sist? 2) Arbeidsoppgaver - er oppgavene interessante og passende til kompetanseniva? 3) Samarbeid og arbeidsmiljo - hvordan fungerer samarbeidet med kolleger og leder? 4) Kompetanseutvikling - hvilke omrader onsker du a utvikle deg innen? 5) Mal for neste periode - hvilke konkrete mal skal vi sette? 6) Trivsel og motivasjon - trives du pa jobb, og hva pavirker motivasjonen din? 7) Andre ting - er det noe annet du onsker a ta opp?',
      },
    },
    {
      id: 'od-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-5',
        type: 'classic',
        task: 'Forklar hva en larende organisasjon er, og beskriv minst tre kjennetegn ved en slik organisasjon.',
        solution: 'En larende organisasjon er en virksomhet som systematisk legger til rette for laring og utvikling pa alle nivaer. Kjennetegn: 1) Kultur for deling av kunnskap og erfaringer - ansatte deler det de larer med hverandre. 2) Toleranse for a prove og feile - feil ses pa som laringsmuligheter, ikke straff. 3) Systematisk evaluering og forbedring - virksomheten evaluerer prosesser og resultater regelmessig. 4) Ledere som er opptatt av utvikling - ledelsen prioriterer og stotter laringsaktiviteter. 5) Gode systemer for kunnskapsdeling - verktoy og rutiner som gjor det lett a dele og finne kunnskap.',
      },
    },
    {
      id: 'od-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-6-4-ex-6',
        type: 'classic',
        task: 'Drøft hvordan en virksomhet kan bruke kompetanseutvikling strategisk for a styrke sin konkurransekraft.',
        solution: 'Strategisk kompetanseutvikling innebarer a koble opplaringen til virksomhetens mal og strategi. Virksomheten bor: 1) Analysere hvilken kompetanse som blir viktig fremover basert pa markedstrender og teknologisk utvikling. 2) Investere i opplaring som gir konkurransefordeler, f.eks. unike ferdigheter eller spesialkompetanse. 3) Bygge en kultur for laring slik at ansatte kontinuerlig utvikler seg. 4) Bruke kompetanseutvikling som et rekrutteringsverktoy - dyktige folk soker seg til virksomheter som satser pa utvikling. 5) Male effekten av opplaringen for a sikre god avkastning pa investeringen.',
      },
    },
    {
      id: 'od-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Kompetanseutvikling** styrker bade den enkelte og organisasjonen
- Opplaring kan vare **formell** (kurs, utdanning) eller **uformell** (veiledning, jobbrotasjon)
- **Medarbeidersamtalen** er et sentralt verktoy for utvikling og dialog
- **Herzbergs tofaktorteori** skiller mellom hygiene- og motivasjonsfaktorer
- En **larende organisasjon** legger systematisk til rette for laring

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kompetanseutvikling | Tiltak for a oke ansattes kunnskaper og ferdigheter |
| Medarbeidersamtale | Planlagt samtale mellom leder og medarbeider |
| Jobbrotasjon | A prove ulike oppgaver for a lare bredere |
| Mentoring | Erfaren medarbeider veileder en mindre erfaren |
| Larende organisasjon | Virksomhet som systematisk legger til rette for laring |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Arbeidsrett
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6_5: TextbookChapter = {
  id: 'okonomi-drift-6-5',
  courseId: 'okonomi-drift',
  chapterNumber: '6.5',
  title: 'Arbeidsrett',
  description: 'Viktige arbeidsrettslige temaer som oppsigelse, permittering, tariffavtaler og arbeidstakeres rettigheter. Regelverket som styrer forholdet mellom arbeidsgiver og arbeidstaker.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte arbeidsrettslige problemstillinger knyttet til oppsigelse og permittering',
    'gjore rede for tariffavtaler og partene i arbeidslivet',
  ],
  content: [
    {
      id: 'od-6-5-intro',
      type: 'text',
      content: `## Arbeidsrett - spillereglene i arbeidslivet

Arbeidsretten regulerer forholdet mellom arbeidsgiver og arbeidstaker. Lovverket gir arbeidstakere rettigheter og beskyttelse, samtidig som det gir arbeidsgivere rammer for a lede og organisere virksomheten. I dette kapittelet ser vi pa sentrale arbeidsrettslige temaer.

I dette kapittelet skal du lare:
- Regler for oppsigelse og avskjed
- Nar og hvordan permittering kan brukes
- Hva tariffavtaler er og hvordan de fungerer
- Partene i arbeidslivet og deres roller`,
    },
    {
      id: 'od-6-5-def-1',
      type: 'definition',
      title: 'Oppsigelse',
      content: `**Oppsigelse** er en ensidig avslutning av arbeidsforholdet fra enten arbeidsgiver eller arbeidstaker. Ved oppsigelse fra arbeidsgiver stiller arbeidsmiljoloven strenge krav: oppsigelsen ma vare saklig begrunnet, den ma folge formkrav, og arbeidstaker har rett til a sta i stillingen under en eventuell tvist. Oppsigelsestiden er vanligvis 1-3 maneder avhengig av ansettelsestid.`,
    },
    {
      id: 'od-6-5-text-1',
      type: 'text',
      content: `### Oppsigelse fra arbeidsgiver

Arbeidsmiljoloven stiller strenge krav til oppsigelse fra arbeidsgiver. Vernet mot usaklig oppsigelse er en grunnleggende rettighet i norsk arbeidsliv.

**Krav til saklig oppsigelse:**

Oppsigelsen ma vare saklig begrunnet i enten:
- **Virksomhetens forhold** (nedbemanning, omorganisering, okonomi)
- **Arbeidstakers forhold** (mangelfulle prestasjoner, ordrenekt, brudd pa arbeidsavtalen)

**Formkrav:**
- Oppsigelsen skal vare skriftlig
- Den skal opplyse om rett til a kreve forhandlinger
- Den skal opplyse om rett til a reise soksmal
- Den skal opplyse om frister for a kreve forhandlinger og reise soksmal
- Den skal opplyse om retten til a sta i stillingen

**Oppsigelsesfrister:**

| Ansettelsestid | Oppsigelsesfrist |
|----------------|------------------|
| Proveperiode | 14 dager |
| Under 5 ar | 1 maned |
| 5-10 ar | 2 maneder |
| Over 10 ar | 3 maneder |
| Over 10 ar og over 50 ar gammel | 4 maneder |
| Over 10 ar og over 55 ar gammel | 5 maneder |
| Over 10 ar og over 60 ar gammel | 6 maneder |

**Nar er oppsigelse ikke saklig?**
- Diskriminering (kjonn, alder, etnisitet, funksjonshemming)
- Graviditet eller foreldrepermisjon
- Sykdom (de forste 12 manedene)
- Fagforeningsmedlemskap eller politisk aktivitet`,
    },
    {
      id: 'od-6-5-def-2',
      type: 'definition',
      title: 'Avskjed',
      content: `**Avskjed** er den mest alvorlige reaksjonen arbeidsgiver kan gi, og innebarer at arbeidsforholdet avsluttes umiddelbart. Avskjed kan bare gis nar arbeidstaker har gjort seg skyldig i grovt pliktbrudd eller annet vesentlig mislighold av arbeidsavtalen. Eksempler kan vare tyveri, vold, ruspavirkning pa jobb eller grov ordrenekt.`,
    },
    {
      id: 'od-6-5-text-2',
      type: 'text',
      content: `### Permittering

Permittering er en midlertidig ordning der arbeidstaker fritas fra arbeidsplikt og arbeidsgiver fritas fra lonnsplikt. Permittering brukes nar det er midlertidig mangel pa arbeid eller andre forhold gjor det nodvendig.

**Vilkar for permittering:**
- Det ma foreligge saklig grunn (f.eks. ordremangel, sesongvariasjoner, force majeure)
- Permitteringen ma vare midlertidig - er situasjonen varig, ma det brukes oppsigelse
- Det ma gis varsel pa minst 14 dager (2 dager ved uforutsette hendelser)

**Permitteringsprosessen:**
1. Drofting med tillitsvalgte
2. Utvelgelse av hvem som permitteres (ansiennitetsprinsippet)
3. Skriftlig varsel til de berorte
4. Arbeidsgiverperiode (arbeidsgiver betaler lonn i 15 dager)
5. NAV overtar lonnsutbetalingen (dagpenger)
6. Maks permitteringsperiode er normalt 26 uker

**Rettigheter under permittering:**
- Rett til dagpenger fra NAV etter arbeidsgiverperioden
- Rett til a ta annet arbeid
- Rett til a bli kalt tilbake nar arbeidet gjenopptas
- Oppsigelsestiden gjelder fortsatt`,
    },
    {
      id: 'od-6-5-def-3',
      type: 'definition',
      title: 'Tariffavtale',
      content: `En **tariffavtale** er en skriftlig avtale mellom en fagforening og en arbeidsgiver eller arbeidsgiverforening om arbeids- og lonnsvilkar. Tariffavtalen regulerer blant annet minstelonn, arbeidstid, overtidstillegg, pensjon og andre rettigheter. Den gjelder for en bestemt periode (vanligvis 2 ar) og kan ikke fravikes til ugunst for arbeidstaker.`,
    },
    {
      id: 'od-6-5-text-3',
      type: 'text',
      content: `### Tariffavtaler og partene i arbeidslivet

Det norske arbeidslivet er bygd pa trepartssamarbeidet mellom arbeidstakere, arbeidsgivere og staten. Tariffavtaler er et sentralt verktoy i dette samarbeidet.

**Partene i arbeidslivet:**

| Part | Viktige organisasjoner | Rolle |
|------|----------------------|-------|
| Arbeidstakere | LO, Unio, YS, Akademikerne | Forhandler for ansatte |
| Arbeidsgivere | NHO, Virke, KS, Spekter | Forhandler for arbeidsgivere |
| Staten | Regjeringen, Stortinget | Lovgiver og mekler |

**Tariffoppgjoret:**
- Gjennomfores annethvert ar (hovedoppgjor) eller arlig (mellomoppgjor)
- Forhandlinger mellom arbeidstaker- og arbeidsgiverorganisasjoner
- Riksmekleren mekler ved uenighet
- Streik eller lockout kan brukes som pressmiddel
- Tvungen lonnsnemnd kan innfores av Stortinget i spesielle tilfeller

**Hva regulerer tariffavtaler?**
- Minstelonn og lonnstillegg
- Arbeidstid og overtidsregler
- Pensjon og forsikring
- Ferie og permisjon utover lovens minimum
- Etterutdanning og kompetanseutvikling
- Medbestemmelse og tillitsvalgtes rolle

**Fredsplikt:**
Sa lenge en tariffavtale gjelder, har bade arbeidstakere og arbeidsgivere fredsplikt. Det betyr at de ikke kan bruke streik eller lockout for a presse gjennom endringer. Arbeidskamp er bare lovlig nar tariffperioden er utlopt og det er brudd i forhandlingene.`,
    },
    {
      id: 'od-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Saklig oppsigelse ved nedbemanning',
      problem: 'En bedrift ma nedbemanne med 5 ansatte pa grunn av sviktende omsetning. Hvordan skal de ga frem for at prosessen blir lovlig?',
      solution: `**Lovlig nedbemanningsprosess:**

**1. Dokumentere behovet**
- Utarbeide okonomisk analyse som viser at nedbemanning er nodvendig
- Vurdere om andre tiltak kan avhjelpe situasjonen (kostnadskutt, permitteringer)

**2. Drofte med tillitsvalgte**
- Informere og drofte med de tillitsvalgte for beslutning tas
- Diskutere utvelgelseskriterier og sosiale tiltak

**3. Fastsette utvelgelseskriterier**
- Ansiennitet (vanligste kriterium)
- Kompetanse
- Sosiale forhold (alder, forsorgelsesbyrde)
- Egnethet for gjenvarende stillinger

**4. Gjennomfore individuelle droftingsmøter**
- Hver berort ansatt skal innkalles til droftingsmote (aml. paragraf 15-1)
- Den ansatte har rett til a ha med tillitsvalgt
- Arbeidsgiver redegjor for bakgrunn og utvelgelse

**5. Levere oppsigelse**
- Skriftlig oppsigelse med alle lovpalagte opplysninger
- Tilby eventuell sluttpakke
- Informere om rettigheter

Hele prosessen ma dokumenteres grundig for a vise at oppsigelsene er saklig begrunnet.`,
    },
    {
      id: 'od-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-1',
        type: 'multiple-choice',
        task: 'Hva kreves for at en oppsigelse fra arbeidsgiver skal vare gyldig?',
        options: [
          { id: 'a', text: 'Det holder at arbeidsgiver gir muntlig beskjed', isCorrect: false },
          { id: 'b', text: 'Oppsigelsen ma vare skriftlig og saklig begrunnet', isCorrect: true },
          { id: 'c', text: 'Arbeidsgiver kan si opp hvem som helst uten begrunnelse', isCorrect: false },
          { id: 'd', text: 'Oppsigelse krever samtykke fra fagforeningen', isCorrect: false },
        ],
        solution: 'Arbeidsmiljoloven stiller strenge krav: Oppsigelsen ma vare skriftlig, saklig begrunnet (i virksomhetens eller arbeidstakers forhold), og oppfylle en rekke formkrav. Arbeidstaker har rett til droftingsmote for oppsigelse gis.',
      },
    },
    {
      id: 'od-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom oppsigelse og avskjed?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
          { id: 'b', text: 'Oppsigelse gir oppsigelsestid, avskjed innebarer at arbeidsforholdet avsluttes umiddelbart', isCorrect: true },
          { id: 'c', text: 'Avskjed gir lengre oppsigelsestid enn vanlig oppsigelse', isCorrect: false },
          { id: 'd', text: 'Oppsigelse kan bare gis av arbeidsgiver, avskjed kan bare gis av arbeidstaker', isCorrect: false },
        ],
        solution: 'Ved oppsigelse har arbeidstaker rett til oppsigelsestid (1-6 maneder), mens avskjed betyr at arbeidsforholdet avsluttes pa dagen. Avskjed krever grovt pliktbrudd eller vesentlig mislighold av arbeidsavtalen.',
      },
    },
    {
      id: 'od-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-3',
        type: 'classic',
        task: 'Forklar hva permittering er og nar det kan brukes. Beskriv ogsa de viktigste rettighetene til en permittert arbeidstaker.',
        hints: ['Tenk pa forskjellen mellom midlertidig og varig mangel pa arbeid'],
        solution: 'Permittering er en midlertidig ordning der arbeidstaker fritas fra arbeidsplikt og arbeidsgiver fritas fra lonnsplikt. Det kan brukes nar det er midlertidig mangel pa arbeid, f.eks. ordremangel, sesongvariasjoner eller uforutsette hendelser. En permittert arbeidstaker har rett til dagpenger fra NAV etter arbeidsgiverperioden pa 15 dager, rett til a ta annet arbeid i permitteringsperioden, og rett til a bli kalt tilbake nar arbeidet gjenopptas. Permitteringen ma vare midlertidig - er situasjonen varig, ma arbeidsgiver bruke oppsigelse.',
      },
    },
    {
      id: 'od-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-4',
        type: 'classic',
        task: 'Beskriv trepartssamarbeidet i norsk arbeidsliv. Hvem er de tre partene, og hva er deres roller?',
        solution: 'Trepartssamarbeidet bestar av: 1) Arbeidstakerorganisasjonene (LO, Unio, YS, Akademikerne) som forhandler pa vegne av de ansatte om lonn og arbeidsvilkar. 2) Arbeidsgiverorganisasjonene (NHO, Virke, KS, Spekter) som forhandler pa vegne av arbeidsgiverne. 3) Staten (regjering og Storting) som setter rammene gjennom lovgivning, mekler i konflikter og kan gripe inn med tvungen lonnsnemnd. Samarbeidet mellom disse tre partene er grunnsteinen i den norske modellen og har bidratt til stabile og ordnede forhold i arbeidslivet.',
      },
    },
    {
      id: 'od-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-5',
        type: 'classic',
        task: 'En arbeidsgiver onsker a si opp en ansatt som har vart sykmeldt i 8 maneder. Er dette lovlig? Begrunn svaret ditt.',
        solution: 'Nei, dette er ikke lovlig. Arbeidsmiljoloven gir arbeidstakere et sarskilt oppsigelsesvern de forste 12 manedene av en sykmelding (verneperioden). I denne perioden kan ikke sykdommen brukes som oppsigelsesgrunn. Arbeidsgiver kan likevel si opp arbeidstakeren av andre saklige grunner (f.eks. nedbemanning), men sykdommen kan ikke vare begrunnelsen. Etter 12 maneder kan sykdommen innga som en del av en saklighetsvurdering, men det stilles fortsatt strenge krav.',
      },
    },
    {
      id: 'od-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-6-5-ex-6',
        type: 'classic',
        task: 'Drøft tariffavtalens betydning for bade arbeidstakere og arbeidsgivere. Hvilke fordeler og ulemper kan en tariffavtale ha for de ulike partene?',
        solution: 'For arbeidstakere gir tariffavtalen sikkerhet gjennom minstelonn, regulert arbeidstid, pensjonsrettigheter og andre goder. Den sikrer ogsa medbestemmelse gjennom tillitsvalgte. En ulempe kan vare at individuelle forhandlinger begrenses. For arbeidsgivere gir tariffavtalen forutsigbare lønnskostnader, like vilkar i bransjen (konkurranse pa like vilkar), og fredsplikt i tariffperioden. En ulempe kan vare begrenset fleksibilitet i lonns- og arbeidstidsfastsettelse. For samfunnet bidrar tariffavtaler til ordnede forhold i arbeidslivet, jevnere inntektsfordeling og sosial stabilitet.',
      },
    },
    {
      id: 'od-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lart:

- **Oppsigelse** ma vare saklig begrunnet og oppfylle strenge formkrav
- **Avskjed** brukes kun ved grovt pliktbrudd og gjelder umiddelbart
- **Permittering** er en midlertidig ordning ved mangel pa arbeid
- **Tariffavtaler** regulerer lonn og arbeidsvilkar mellom partene
- **Trepartssamarbeidet** mellom arbeidstakere, arbeidsgivere og staten er grunnsteinen i norsk arbeidsliv

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Oppsigelse | Avslutning av arbeidsforhold med oppsigelsestid |
| Avskjed | Umiddelbar avslutning ved grovt pliktbrudd |
| Permittering | Midlertidig fritak fra arbeids- og lonnsplikt |
| Tariffavtale | Avtale mellom fagforening og arbeidsgiver om vilkar |
| Fredsplikt | Forbud mot arbeidskamp i tariffperioden |
| Trepartssamarbeidet | Samarbeid mellom arbeidstakere, arbeidsgivere og stat |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_DRIFT_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_DRIFT_6_1,
  CHAPTER_OKONOMI_DRIFT_6_2,
  CHAPTER_OKONOMI_DRIFT_6_3,
  CHAPTER_OKONOMI_DRIFT_6_4,
  CHAPTER_OKONOMI_DRIFT_6_5,
];
