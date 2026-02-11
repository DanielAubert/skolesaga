/* eslint-disable */
// @ts-nocheck

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Seksjon 1: Introduksjon til sikkerhetsfaget
// ============================================================================

// ----------------------------------------------------------------------------
// Kapittel 1.1: Hva er sikkerhet?
// ----------------------------------------------------------------------------
const CHAPTER_SIKKERHETSFAG_1_1: TextbookChapter = {
  id: 'sikkerhetsfag-1-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '1.1',
  title: 'Hva er sikkerhet?',
  description: 'Grunnleggende definisjoner av sikkerhetsbegrepet, forskjellen mellom safety og security, samt trygghetsparadokset.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-1-1-intro',
      type: 'text',
      content: `## Hva er sikkerhet?

Sikkerhet er et begrep vi bruker daglig, men det kan bety ulike ting i ulike sammenhenger. Sikkerhet handler om beskyttelse mot farer, trusler og uonskede hendelser. I sikkerhetsfaget studerer vi sikkerhet som et eget fagfelt med egne teorier, metoder og verktoy.

I dette kapittelet skal du lere:
- Hva sikkerhetsbegrepet inneberer
- Forskjellen mellom safety og security
- Hva trygghetsparadokset er
- Hvordan vi vurderer risiko`,
    },
    {
      id: 'sik-1-1-def-sikkerhet',
      type: 'definition',
      title: 'Sikkerhet',
      content: `**Sikkerhet** kan defineres som en tilstand der risikoen for uonskede hendelser er akseptabel. Det betyr ikke fravaer av all risiko, men at risikoen er redusert til et niva som er forsvarlig og akseptabelt for de involverte partene.`,
    },
    {
      id: 'sik-1-1-text-1',
      type: 'text',
      content: `### Safety og security

I det norske spraket bruker vi ett ord for sikkerhet, men pa engelsk skilles det mellom to begreper:

**Safety** handler om beskyttelse mot utilsiktede hendelser som ulykker, naturkatastrofer og tekniske feil. Eksempler er brannvern, HMS-arbeid og trafikksikkerhet.

**Security** handler om beskyttelse mot tilsiktede hendelser som kriminalitet, sabotasje, terror og spionasje. Eksempler er adgangskontroll, overvaking og informasjonssikkerhet.

I sikkerhetsfaget arbeider vi med begge disse dimensjonene. En sikkerhetsarbeider ma kunne vurdere bade utilsiktede og tilsiktede trusler, og sette inn passende tiltak for a redusere risikoen.`,
    },
    {
      id: 'sik-1-1-def-risiko',
      type: 'definition',
      title: 'Risiko',
      content: `**Risiko** er et uttrykk for kombinasjonen av sannsynligheten for at en uonsket hendelse inntreffer, og konsekvensene dersom den inntreffer. Risiko = sannsynlighet x konsekvens. Jo hoyere sannsynlighet og jo alvorligere konsekvens, desto hoyere er risikoen.`,
    },
    {
      id: 'sik-1-1-text-2',
      type: 'text',
      content: `### Trygghetsparadokset

Et viktig fenomen i sikkerhetsfaget er det som kalles trygghetsparadokset. Dette oppstar nar sikkerhetsarbeid er sa vellykket at folk begynner a tro at farene ikke lenger eksisterer.

Nar det ikke skjer uonskede hendelser over tid, kan det fore til at:
- Folk senker guarden og tar storre sjanser
- Budsjetter til sikkerhet kuttes fordi det tilsynelatende ikke trengs
- Rutiner og prosedyrer slappes pa
- Sikkerhetskultur forvitrer

Paradokset er at jo bedre sikkerhetsarbeidet er, desto mer usynlig blir det. Nar folk foler seg trygge, glemmer de ofte at det er sikkerhetsarbeidet som skaper tryggheten.

**Eksempel:** Et firma har ikke hatt innbrudd pa ti ar takket vere god adgangskontroll og vakthold. Ledelsen vurderer a kutte i vakttjenestene for a spare penger, fordi de tror faren er over. Dette er trygghetsparadokset i praksis.`,
    },
    {
      id: 'sik-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering',
      problem: 'Et kjopesenter skal vurdere risikoen for brann i parkeringshuset.',
      solution: `**Sannsynlighet:** Historisk sett skjer det sjelden bilbranner i parkeringshus, men det forekommer. Sannsynligheten vurderes som lav til middels.

**Konsekvens:** En brann i et parkeringshus kan fore til store materielle skader, personskader og i verste fall dod. Konsekvensen vurderes som hoy.

**Risiko:** Selv om sannsynligheten er relativt lav, er konsekvensen sa alvorlig at risikoen samlet sett vurderes som betydelig. Det bor derfor iverksettes tiltak som branndeteksjon, sprinkleranlegg, tydelig merking av romningsveier og jevnlige brannover.`,
    },
    {
      id: 'sik-1-1-text-3',
      type: 'text',
      content: `### Sikkerhetsniva og akseptabel risiko

I praksis er det umulig a eliminere all risiko. Sikkerhetsarbeid handler om a finne det riktige nivaet der risikoen er akseptabel. Dette nivaet avhenger av flere faktorer:

- **Lovkrav:** Lover og forskrifter setter minimumskrav til sikkerhet
- **Bransjenormer:** Standarder og retningslinjer for ulike bransjer
- **Kost-nytte:** Kostnadene ved sikkerhetstiltak veies mot effekten
- **Interessenter:** Forventninger fra kunder, ansatte og myndigheter
- **Verdier:** Hva som skal beskyttes og hvor verdifullt det er

Et godt sikkerhetsarbeid er systematisk, risikobasert og tilpasset den enkelte virksomhets behov og forutsetninger.`,
    },
    {
      id: 'sik-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        task: 'Hva er den beste definisjonen av sikkerhet i faglig sammenheng?',
        options: [
          { id: 'a', text: 'Fullstendig fravaer av fare og risiko', isCorrect: false },
          { id: 'b', text: 'En tilstand der risikoen for uonskede hendelser er akseptabel', isCorrect: true },
          { id: 'c', text: 'At det er montert alarmsystemer pa bygningen', isCorrect: false },
          { id: 'd', text: 'At politiet har kontroll over et omrade', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Sikkerhet defineres faglig som en tilstand der risikoen er redusert til et akseptabelt niva. Det handler ikke om fullstendig fravaer av risiko, men om a holde risikoen pa et forsvarlig niva.',
      },
    },
    {
      id: 'sik-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-2',
        number: '1.1.2',
        type: 'multiple-choice',
        task: 'Hva menes med trygghetsparadokset?',
        options: [
          { id: 'a', text: 'At folk foler seg utrygge selv nar sikkerheten er god', isCorrect: false },
          { id: 'b', text: 'At sikkerhetsarbeid alltid forer til hoyere kostnader', isCorrect: false },
          { id: 'c', text: 'At vellykket sikkerhetsarbeid kan fore til at folk undervurderer farene', isCorrect: true },
          { id: 'd', text: 'At trygghet og sikkerhet er det samme', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Trygghetsparadokset oppstar nar sikkerhetsarbeidet er sa effektivt at folk glemmer farene og begynner a senke guarden, kutte budsjetter eller slappe pa rutiner.',
      },
    },
    {
      id: 'sik-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom safety og security med egne ord, og gi to eksempler pa hver.',
        hints: ['Tenk pa hva som er kilden til faren: er det tilsiktet eller utilsiktet?'],
        solution: 'Safety handler om beskyttelse mot utilsiktede hendelser (ulykker, uhell, naturkatastrofer), for eksempel brannvern og HMS-arbeid. Security handler om beskyttelse mot tilsiktede hendelser (kriminalitet, sabotasje, terror), for eksempel adgangskontroll og overvaking.',
      },
    },
    {
      id: 'sik-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-4',
        number: '1.1.4',
        type: 'classic',
        task: 'Gi et eksempel pa trygghetsparadokset fra hverdagen eller arbeidslivet. Forklar hvordan det oppstar og hva som kan gjores for a motvirke det.',
        solution: 'Eksempel: En bedrift har hatt et godt brannvernssystem i mange ar uten hendelser. De slutter a gjennomfore brannover og lar slokkeutstyret ga ut pa dato. Nar det sa oppstar en brann, er de darlig forberedt. For a motvirke dette bor man ha faste rutiner for oving og vedlikehold uavhengig av hendelseshistorikk.',
      },
    },
    {
      id: 'sik-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-5',
        number: '1.1.5',
        type: 'classic',
        task: 'Hva menes med at risiko er en kombinasjon av sannsynlighet og konsekvens? Bruk et konkret eksempel for a illustrere.',
        hints: ['Tenk pa en hendelse der sannsynligheten er lav men konsekvensen er hoy'],
        solution: 'Risiko beregnes som sannsynlighet ganger konsekvens. For eksempel: Sannsynligheten for at et fly styrter er svart lav, men konsekvensen er katastrofal. Derfor vurderes risikoen som betydelig, og det investeres enormt i flysikkerhet. Pa den andre siden er sannsynligheten for et papirkutt hoy, men konsekvensen er minimal, sa risikoen er lav.',
      },
    },
    {
      id: 'sik-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-1-1-ex-6',
        number: '1.1.6',
        type: 'classic',
        task: 'Nevn fire faktorer som pavirker hva som regnes som akseptabel risiko i en virksomhet. Forklar kort hver faktor.',
        solution: '1) Lovkrav - lover og forskrifter setter minimumskrav. 2) Bransjenormer - standarder og retningslinjer gir anbefalinger. 3) Kost-nytte - kostnadene ved tiltak veies mot effekten. 4) Verdier - hva som skal beskyttes og hvor verdifullt det er. Andre faktorer kan vaere interessenters forventninger og virksomhetens risikoappetitt.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 1.2: Sikkerhetsbransjen
// ----------------------------------------------------------------------------
const CHAPTER_SIKKERHETSFAG_1_2: TextbookChapter = {
  id: 'sikkerhetsfag-1-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '1.2',
  title: 'Sikkerhetsbransjen',
  description: 'Oversikt over sikkerhetsbransjen i Norge, ulike yrkesroller, vekteryrket og krav til utdanning og sertifisering.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-1-2-intro',
      type: 'text',
      content: `## Sikkerhetsbransjen i Norge

Sikkerhetsbransjen er en av de raskest voksende bransjene i Norge. Den omfatter alt fra vakthold og verditransport til IT-sikkerhet og sikkerhetsradgivning. Bransjen sysselsetter titusenvis av mennesker og leverer tjenester som er helt avgjorende for samfunnet.

I dette kapittelet skal du lere:
- Hvilke deler sikkerhetsbransjen bestar av
- Sentrale yrkesroller og karriereveier
- Hva vekteryrket inneberer
- Krav til utdanning og sertifisering`,
    },
    {
      id: 'sik-1-2-def-vekter',
      type: 'definition',
      title: 'Vekter',
      content: `En **vekter** er en person som er ansatt i et godkjent vaktselskap for a utfore vakttjenester. Vektere har ikke politimyndighet, men har rett til a bortvise personer fra privat omrade og kan pagripe personer som tas pa fersk gjerning i straffbare handlinger (borgerpagripelse). Alle vektere ma ha gjennomfort godkjent vekterutdanning.`,
    },
    {
      id: 'sik-1-2-text-1',
      type: 'text',
      content: `### Bransjens omfang

Sikkerhetsbransjen i Norge kan deles inn i flere hovedomrader:

**Bemanning og vakthold**
- Objektvakthold (bygg, anlegg, kontorer)
- Arrangementssikring (konserter, idrettsarrangementer)
- Resepsjonsvakthold og adgangskontroll
- Patruljetjeneste og utrykningsvakthold

**Verditransport og kontanthandtering**
- Transport av verdier mellom banker, butikker og opptellingssentraler
- Kontanthandtering og oppgjorsservice
- Minibanktjenester

**Teknisk sikkerhet**
- Alarmsystemer og overvaking
- Adgangskontrollsystemer
- Brannvarsling og slokkesystemer
- Kamera- og videoovervaking

**Konsulent- og radgivningstjenester**
- Sikkerhetsradgivning
- Risikoanalyser og sarbarhetsvurderinger
- Sikkerhetsplanlegging
- Kriseberedskap og beredskapsplanlegging`,
    },
    {
      id: 'sik-1-2-text-2',
      type: 'text',
      content: `### Yrkesroller i sikkerhetsbransjen

Det finnes mange ulike karriereveier i sikkerhetsbransjen:

**Vekter** er den mest vanlige rollen og utgjor grunnfjellet i bransjen. Vektere utforer vakttjenester som objektvakthold, patruljering, adgangskontroll og hendelseshandtering.

**Sikkerhetsradgiver** arbeider med a analysere trusler og risiko, og anbefale tiltak. Denne rollen krever bred kompetanse innen bade teknisk og organisatorisk sikkerhet.

**Sikkerhetssjef / CSO (Chief Security Officer)** har det overordnede ansvaret for sikkerheten i en virksomhet. Rollen inneberer strategisk planlegging, budsjettansvar og ledelse av sikkerhetsavdelingen.

**Sikkerhetsoperator / Alarmoperator** overvaker alarmsystemer og kameraovervaking fra en alarmsentral, og koordinerer utrykning ved hendelser.

**Sikkerhetstekniker** installerer, vedlikeholder og programmerer teknisk sikkerhetsutstyr som alarmer, kameraer og adgangskontrollsystemer.

**Etterforskningskonsulent** arbeider med internetterforskning, svinn og svindel i virksomheter.`,
    },
    {
      id: 'sik-1-2-def-vaktvirksomhet',
      type: 'definition',
      title: 'Vaktvirksomhetsforskriften',
      content: `**Vaktvirksomhetsforskriften** regulerer vaktvirksomhet i Norge. Den stiller krav til godkjenning av vaktselskaper, krav til vekterutdanning, uniformering, legitimasjon og rapportering. Politiet er tilsynsmyndighet og kan trekke tilbake godkjenning ved brudd pa regelverket.`,
    },
    {
      id: 'sik-1-2-text-3',
      type: 'text',
      content: `### Utdanning og sertifisering

For a jobbe som vekter i Norge stilles det krav til utdanning:

**Vekterutdanning (grunnutdanning)**
- Minimum 107,5 timer teoretisk opplaering
- Emner inkluderer jus, rapportskriving, konflikthandtering, forstehjep og brannvern
- Praktisk trening i observasjon, kommunikasjon og handtering av hendelser
- Ma vaere bestatt for man kan jobbe som vekter

**Videreutdanning**
- Ordensvakt (tilleggskurs for dem som jobber pa utesteder)
- Verditransport (spesialkurs for verditransportforer)
- Sikkerhetsradgiver (hoyere utdanning, ofte pa hoyskole-/universitetsniva)
- Brannsikkerhet og HMS-kurs

**Vandelsattest**
Alle som skal jobbe i sikkerhetsbransjen ma fremlegge plettfri vandelsattest. Politiet foretar en grundig bakgrunnssjekk for godkjenningen gis.`,
    },
    {
      id: 'sik-1-2-example-1',
      type: 'example',
      title: 'Eksempel: En dag som vekter',
      problem: 'Beskriv en typisk arbeidsdag for en objektvekter pa et kjopesenter.',
      solution: `**Vaktstart (kl. 07:00):** Ankommer, sjekker vaktprotokoll fra natten, tar imot rapport fra nattevakten. Ikler seg uniform og utstyr.

**Formiddag:** Gjor apningsrunde for a sjekke at alle dorer, alarmer og kameraer fungerer. Tar imot vareleveranser og kontrollerer legitimasjon.

**Lunsj:** Holder oppsyn med fellesarealer og parkeringsanlegg. Hjelper kunder med informasjon og veivisning.

**Ettermiddag:** Handterer en hendelse med butikktyveri - observerer, dokumenterer og kontakter politiet. Skriver hendelsesrapport. Gjennomforer runder i varehuset.

**Vaktavslutning (kl. 15:00):** Fyller ut vaktprotokoll, rapporterer hendelser til vaktleder, overleverer til neste vakt.`,
    },
    {
      id: 'sik-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        task: 'Hva er et krav for a kunne jobbe som vekter i Norge?',
        options: [
          { id: 'a', text: 'Man ma ha politiutdanning', isCorrect: false },
          { id: 'b', text: 'Man ma ha gjennomfort godkjent vekterutdanning og ha plettfri vandelsattest', isCorrect: true },
          { id: 'c', text: 'Man ma vaere over 25 ar', isCorrect: false },
          { id: 'd', text: 'Man ma ha militaertjeneste', isCorrect: false },
        ],
        solution: 'Riktig svar er B. For a jobbe som vekter kreves gjennomfort vekterutdanning pa minimum 107,5 timer og plettfri vandelsattest. Det er ikke krav om politiutdanning, bestemt alder (over 18 ar) eller militaertjeneste.',
      },
    },
    {
      id: 'sik-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-2',
        number: '1.2.2',
        type: 'multiple-choice',
        task: 'Hvilken myndighet har en vekter sammenlignet med politiet?',
        options: [
          { id: 'a', text: 'Vektere har samme myndighet som politiet', isCorrect: false },
          { id: 'b', text: 'Vektere har begrenset politimyndighet', isCorrect: false },
          { id: 'c', text: 'Vektere har ingen politimyndighet, men kan bortvise fra privat omrade og foreta borgerpagripelse', isCorrect: true },
          { id: 'd', text: 'Vektere har storre myndighet enn politiet pa privat eiendom', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Vektere har ikke politimyndighet. De kan bortvise personer fra privat omrade pa vegne av oppdragsgiver, og de kan foreta borgerpagripelse nar noen tas pa fersk gjerning i straffbare handlinger, akkurat som alle andre borgere.',
      },
    },
    {
      id: 'sik-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        task: 'Beskriv minst fire ulike yrkesroller i sikkerhetsbransjen og forklar kort hva hver rolle inneberer.',
        hints: ['Tenk pa bade operative og strategiske roller'],
        solution: '1) Vekter - utforer vakttjenester som patruljering, objektvakthold og adgangskontroll. 2) Sikkerhetsradgiver - analyserer trusler og risiko, anbefaler tiltak. 3) Sikkerhetssjef - overordnet ansvar for sikkerheten i en virksomhet. 4) Alarmoperator - overvaker alarmsystemer fra sentral og koordinerer utrykning. 5) Sikkerhetstekniker - installerer og vedlikeholder teknisk sikkerhetsutstyr.',
      },
    },
    {
      id: 'sik-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-4',
        number: '1.2.4',
        type: 'classic',
        task: 'Hvorfor tror du det stilles krav om plettfri vandelsattest for a jobbe i sikkerhetsbransjen? Diskuter minst to grunner.',
        solution: '1) Tillit - sikkerhetsansatte far tilgang til verdier, sensitiv informasjon og omrader der det stilles hoy tillit. 2) Rollemodell - vektere representerer lov og orden og ma selv ha en ren bakgrunn for a vaere troverdige. 3) Sarbarhetsreduksjon - personer med kriminell bakgrunn kan utgjore en sikkerhetsrisiko i seg selv dersom de far tilgang til sikkerhetssystemer og informasjon.',
      },
    },
    {
      id: 'sik-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        task: 'Gjor rede for de fire hovedomradene i sikkerhetsbransjen og gi eksempler pa tjenester innenfor hvert omrade.',
        solution: '1) Bemanning og vakthold - objektvakthold, arrangementssikring, patrulje. 2) Verditransport og kontanthandtering - transport av verdier, oppgjorsservice. 3) Teknisk sikkerhet - alarmsystemer, kameraovervaking, adgangskontroll. 4) Konsulent- og radgivningstjenester - risikoanalyser, sikkerhetsplanlegging, kriseberedskap.',
      },
    },
    {
      id: 'sik-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-1-2-ex-6',
        number: '1.2.6',
        type: 'classic',
        task: 'Hva regulerer vaktvirksomhetsforskriften? Nevn minst tre krav som stilles til vaktselskaper eller vektere.',
        solution: 'Vaktvirksomhetsforskriften regulerer vaktvirksomhet i Norge. Krav inkluderer: 1) Godkjenning av vaktselskaper av politiet. 2) Krav til vekterutdanning pa minimum 107,5 timer. 3) Krav til uniformering og legitimasjon. 4) Krav til rapportering av hendelser. 5) Politiet som tilsynsmyndighet med mulighet for a trekke tilbake godkjenning.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 1.3: Etikk og profesjonalitet
// ----------------------------------------------------------------------------
const CHAPTER_SIKKERHETSFAG_1_3: TextbookChapter = {
  id: 'sikkerhetsfag-1-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '1.3',
  title: 'Etikk og profesjonalitet',
  description: 'Yrkesetiske retningslinjer, taushetsplikt, integritet og profesjonell opptreden i sikkerhetsarbeid.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-1-3-intro',
      type: 'text',
      content: `## Etikk og profesjonalitet i sikkerhetsarbeid

Sikkerhetsarbeidere har en unik posisjon i samfunnet. De har tilgang til sensitiv informasjon, overvaker mennesker og tar beslutninger som kan pavirke andres frihet og rettigheter. Denne posisjonen krever hoy etisk bevissthet og profesjonell opptreden til enhver tid.

I dette kapittelet skal du lere:
- Hva yrkesetikk inneberer i sikkerhetsbransjen
- Taushetsplikten og dens betydning
- Hva integritet betyr i praksis
- Hvordan opptre profesjonelt i vanskelige situasjoner`,
    },
    {
      id: 'sik-1-3-def-yrkesetikk',
      type: 'definition',
      title: 'Yrkesetikk',
      content: `**Yrkesetikk** er de moralske prinsippene og retningslinjene som styrer utovelsen av et yrke. I sikkerhetsbransjen omfatter yrkesetikken blant annet respekt for menneskers verdighet, likebehandling, taushetsplikt, integritet og ansvarlig bruk av myndighet.`,
    },
    {
      id: 'sik-1-3-text-1',
      type: 'text',
      content: `### Sentrale etiske prinsipper

Sikkerhetsarbeidere bor folge flere grunnleggende etiske prinsipper:

**Respekt for menneskeverdet**
Alle mennesker har lik verdi uavhengig av bakgrunn, etnisitet, religion eller sosial status. En vekter skal behandle alle med verdighet og respekt, ogsa i situasjoner der det er nodvendig a gripe inn.

**Likebehandling og ikke-diskriminering**
Sikkerhetsarbeid skal utoves uten diskriminering. Det betyr at man ikke skal profilere eller behandle folk ulikt basert pa utseende, hudfarge, klesdrakt eller andre ytre kjennetegn.

**Forholdsmessighet**
Tiltak og reaksjoner skal sta i forhold til situasjonen. Man skal ikke bruke mer makt eller sterkere virkemidler enn det som er nodvendig for a lose situasjonen.

**Lovlighet**
All opptreden skal vaere innenfor lovens rammer. En sikkerhetsarbeider ma kjenne sine rettslige grenser og aldri overskride dem.`,
    },
    {
      id: 'sik-1-3-def-taushetsplikt',
      type: 'definition',
      title: 'Taushetsplikt',
      content: `**Taushetsplikt** betyr at man har plikt til a tie om fortrolig informasjon man far kjennskap til gjennom arbeidet sitt. I sikkerhetsbransjen gjelder dette informasjon om oppdragsgivere, kunder, hendelser, sikkerhetssystemer og andre sensitive opplysninger. Brudd pa taushetsplikten kan fore til oppsigelse og i alvorlige tilfeller straffeansvar.`,
    },
    {
      id: 'sik-1-3-text-2',
      type: 'text',
      content: `### Taushetsplikt i praksis

Taushetsplikten er et av de viktigste etiske prinsippene i sikkerhetsbransjen. Den gjelder bade under og etter ansettelsesforholdet.

**Hva er omfattet av taushetsplikten?**
- Informasjon om oppdragsgiverens sikkerhetssystemer og rutiner
- Personopplysninger om ansatte, kunder og besokende
- Hendelsesrapporter og observasjoner
- Interne dokumenter og prosedyrer
- Alarmsystemer, koder og adgangsinformasjon

**Situasjoner der taushetsplikten utfordres:**
- Venner og familie sporr om jobben
- Media kontakter deg etter en hendelse
- Tidligere kolleger onsker informasjon
- Sosiale medier og fristelsen til a dele opplevelser

Det er viktig a huske at taushetsplikten ogsa gjelder overfor kolleger som ikke har behov for informasjonen. Man deler kun det som er nodvendig for a utfore oppdraget.`,
    },
    {
      id: 'sik-1-3-text-3',
      type: 'text',
      content: `### Integritet og profesjonalitet

**Integritet** betyr a vaere hederlig, palitelig og konsekvent i sine handlinger. For en sikkerhetsarbeider inneberer dette:

- A folge reglene ogsa nar ingen ser pa
- A rapportere avvik og hendelser uten a pynte pa sannheten
- A si fra nar noe er galt, ogsa nar det er ubehagelig
- A la vaere a misbruke sin posisjon for personlig vinning
- A behandle alle likt uavhengig av personlige sympatier

**Profesjonell opptreden inkluderer:**
- Punktlighet og palitelighet
- Korrekt uniform og representativt utseende
- Rolig og kontrollert varemte ogsa under press
- Tydelig og respektfull kommunikasjon
- Kontinuerlig faglig utvikling og laering

Profesjonalitet handler ikke bare om hva du gjor, men ogsa om hvordan du gjor det. En profesjonell sikkerhetsarbeider er en som andre stoler pa, respekterer og foler seg trygge med.`,
    },
    {
      id: 'sik-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Etisk dilemma',
      problem: 'Du jobber som vekter pa et kjopesenter. En god venn ringer og sporr om du kan slippe ham inn bakveien etter stengetid fordi han har glemt lommeboken i en butikk.',
      solution: `**Riktig handling:** Du ma si nei. Selv om det er en god venn, har du taushetsplikt og ansvarsplikt. Du kan ikke gi uvedkommende tilgang til bygget utenom apningstid uten godkjenning.

**Begrunnelse:**
1. Det bryter med adgangskontrollrutinene
2. Du vet ikke sikkert hva vennen din faktisk skal gjore inne
3. Du setter din egen stilling og integritet pa spill
4. Dersom noe skjer (tyveri, skade), er du ansvarlig

**Alternativ losning:** Forklat vennen at du ikke kan slippe ham inn, men at han kan kontakte butikken neste dag for a hente lommeboken, eventuelt kontakte senterleder for a fa tillatelse.`,
    },
    {
      id: 'sik-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        task: 'Hvilke av folgende er omfattet av en vekters taushetsplikt?',
        options: [
          { id: 'a', text: 'Kun informasjon som star i hendelsesrapporter', isCorrect: false },
          { id: 'b', text: 'All fortrolig informasjon man far kjennskap til gjennom arbeidet', isCorrect: true },
          { id: 'c', text: 'Bare informasjon som oppdragsgiver spesifikt har merket som hemmelig', isCorrect: false },
          { id: 'd', text: 'Informasjon om sikkerhetssystemer, men ikke om personer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Taushetsplikten dekker all fortrolig informasjon man far kjennskap til gjennom arbeidet, inkludert informasjon om sikkerhetssystemer, personer, hendelser, interne prosedyrer og oppdragsgiverens virksomhet.',
      },
    },
    {
      id: 'sik-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-2',
        number: '1.3.2',
        type: 'multiple-choice',
        task: 'Hva betyr prinsippet om forholdsmessighet i sikkerhetsarbeid?',
        options: [
          { id: 'a', text: 'At man alltid skal bruke minst mulig tid pa en oppgave', isCorrect: false },
          { id: 'b', text: 'At tiltak og reaksjoner skal sta i forhold til situasjonen', isCorrect: true },
          { id: 'c', text: 'At alle vektere skal ha like mange vakter', isCorrect: false },
          { id: 'd', text: 'At man skal dele informasjon proporsjonalt med kolleger', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Forholdsmessighet betyr at man ikke skal bruke mer makt eller sterkere virkemidler enn det situasjonen krever. Reaksjonen skal vaere proporsjonal med trusselen eller hendelsen.',
      },
    },
    {
      id: 'sik-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        task: 'Forklar hva integritet betyr for en sikkerhetsarbeider og gi tre konkrete eksempler pa hvordan integritet vises i praksis.',
        hints: ['Tenk pa situasjoner der man ma velge mellom det som er lett og det som er rett'],
        solution: 'Integritet betyr a vaere hederlig og konsekvent i sine handlinger. Eksempler: 1) Rapportere egne feil uten a dekke over dem. 2) Nekte a slippe inn venner uten godkjenning selv om det er upraktisk. 3) Behandle alle likt i en konflikt uavhengig av hvem man liker best. 4) La vaere a ta med hjem gjenstander fra arbeidsplassen.',
      },
    },
    {
      id: 'sik-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        task: 'Beskriv et etisk dilemma som kan oppsta i sikkerhetsarbeid. Forklar hvilke hensyn som star mot hverandre, og hvordan du ville lost situasjonen.',
        solution: 'Eksempel: Du ser en kollega ta med seg varer fra et lager de vokter. Hensynene som star mot hverandre er lojalitet til kollegaen og plikten til a rapportere. Riktig handling er a rapportere hendelsen til overordnet, fordi integritet og pliktfolelse gar foran kollegialt samhold. A la det passere undergraver tilliten til hele sikkerhetsavdelingen.',
      },
    },
    {
      id: 'sik-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-5',
        number: '1.3.5',
        type: 'classic',
        task: 'En journalist ringer deg etter en hendelse pa arbeidsplassen din og ber om kommentarer. Hvordan bor du handle? Begrunn svaret ditt.',
        solution: 'Du bor hoeflig avvise a gi informasjon og henvise journalisten til din overordnede eller virksomhetens pressetalsmann. Begrunnelse: 1) Taushetsplikten forbyr deg a dele informasjon om hendelser. 2) Feilinformasjon kan skade virksomheten. 3) Mediehandtering bor gjores av personer med myndighet og trening i dette. 4) Det er viktig a vaere hoeflig men bestemt i avslaget.',
      },
    },
    {
      id: 'sik-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-1-3-ex-6',
        number: '1.3.6',
        type: 'classic',
        task: 'Gjor rede for fire sentrale etiske prinsipper i sikkerhetsarbeid og forklar hvorfor hvert prinsipp er viktig.',
        solution: '1) Respekt for menneskeverdet - alle ma behandles med verdighet for a opprettholde tillit. 2) Likebehandling - diskriminering undergraver rettferdigheten og er ulovlig. 3) Forholdsmessighet - overdreven maktbruk er bade uetisk og ulovlig. 4) Lovlighet - all opptreden ma vaere innenfor lovens rammer for a opprettholde legitimitet og unnga straffansvar.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 1.4: Kommunikasjon i sikkerhetsarbeid
// ----------------------------------------------------------------------------
const CHAPTER_SIKKERHETSFAG_1_4: TextbookChapter = {
  id: 'sikkerhetsfag-1-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '1.4',
  title: 'Kommunikasjon i sikkerhetsarbeid',
  description: 'Rapportering, konflikthandtering og kundebehandling i sikkerhetsarbeid. Muntlig og skriftlig kommunikasjon.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-1-4-intro',
      type: 'text',
      content: `## Kommunikasjon i sikkerhetsarbeid

God kommunikasjon er en av de viktigste ferdighetene for en sikkerhetsarbeider. Du ma kunne kommunisere effektivt med publikum, kolleger, oppdragsgivere og myndigheter. Kommunikasjonsferdighetene dine kan utgjore forskjellen mellom en situasjon som loses fredelig og en som eskalerer.

I dette kapittelet skal du lere:
- Grunnleggende kommunikasjonsteori for sikkerhetsarbeid
- Rapportskriving og dokumentasjon
- Konflikthandtering og nedtrapping
- Profesjonell kundebehandling`,
    },
    {
      id: 'sik-1-4-def-konflikthandtering',
      type: 'definition',
      title: 'Konflikthandtering',
      content: `**Konflikthandtering** er evnen til a handtere uenigheter, motsetninger og truende situasjoner pa en mate som forebygger eskalering og fremmer fredelig losning. I sikkerhetsarbeid inneberer dette bruk av verbale og nonverbale teknikker for a roe ned situasjoner og finne losninger.`,
    },
    {
      id: 'sik-1-4-text-1',
      type: 'text',
      content: `### Verbalt judo og nedtrappingsteknikker

En av de viktigste ferdighetene for sikkerhetsarbeidere er evnen til a trappe ned konflikter verbalt. Dette kalles noen ganger verbalt judo - a bruke ord i stedet for fysisk makt.

**Grunnprinsipper for nedtrapping:**

1. **Bevar roen** - Din egen ro smitter over pa den andre parten. Pust rolig og snakk med lav, rolig stemme.

2. **Aktiv lytting** - Vis at du horer det den andre sier. Bruk fraser som "Jeg forstar at du er frustrert" og "Fortell meg hva som har skjedd".

3. **Empati** - Prov a se situasjonen fra den andres perspektiv. Det betyr ikke at du ma vaere enig, men at du viser forstaelse.

4. **Gi valgmuligheter** - I stedet for a gi ordre, gi personen valg: "Du kan enten grise i fred, eller vi kan finne en losning sammen."

5. **Unnga provokasjon** - Ikke bruk nedsettende sprak, sarkasme eller trusler. Ikke pek eller sta truende.

6. **Sett grenser tydelig** - Vaer klar pa hva som er akseptabelt og hva som er konsekvensene, men gjor det pa en respektfull mate.`,
    },
    {
      id: 'sik-1-4-text-2',
      type: 'text',
      content: `### Rapportering og dokumentasjon

Skriftlig rapportering er en kritisk del av sikkerhetsarbeidet. Gode rapporter sikrer at informasjon bevares korrekt og kan brukes av andre i ettertid.

**En god hendelsesrapport inneholder:**
- **Hva** skjedde (kort beskrivelse av hendelsen)
- **Nar** det skjedde (dato, klokkeslett)
- **Hvor** det skjedde (noyaktig sted)
- **Hvem** var involvert (beskrivelse av personer)
- **Hvordan** hendelsen utviklet seg (kronologisk fremstilling)
- **Tiltak** som ble iverksatt (hva ble gjort)

**Tips for god rapportskriving:**
- Skriv objektivt og saklig, uten personlige meninger
- Bruk klart og tydelig sprak
- Vaer presis med tidspunkter og beskrivelser
- Skriv rapporten sa snart som mulig etter hendelsen
- Skill mellom hva du observerte og hva andre fortalte deg
- Ta vare pa eventuelle bevis og dokumentasjon`,
    },
    {
      id: 'sik-1-4-def-rapportering',
      type: 'definition',
      title: 'Hendelsesrapport',
      content: `En **hendelsesrapport** er et skriftlig dokument som beskriver en hendelse som har funnet sted pa vakten. Rapporten skal vaere objektiv, kronologisk og inneholde alle relevante fakta. Hendelsesrapporter brukes som dokumentasjon overfor oppdragsgiver, politiet og forsikringsselskaper.`,
    },
    {
      id: 'sik-1-4-text-3',
      type: 'text',
      content: `### Kundebehandling og serviceinnstilling

Mange tror at sikkerhetsarbeid bare handler om a stoppe tyver og handtere brak. I virkeligheten bruker de fleste vektere mesteparten av tiden pa serviceoppgaver. God kundebehandling er en viktig del av jobben.

**Serviceoppgaver for vektere:**
- Gi informasjon og veivise besokende
- Hjelpe kunder med sporsmal og problemer
- Assistere ved medisinske hendelser
- Hjelpe med a finne bortkomne barn
- Bistag ved tekniske problemer (heis, dorer, alarmer)

**Prinsipper for god kundebehandling:**
- Vaer imotekommende og hjelpevillig
- Smil og ha et apent kroppssprak
- Lytt til kundens behov
- Gi tydelige og korrekte svar
- Folg opp dersom du lover noe
- Behandle klager profesjonelt og losningsorientert

Det er viktig a huske at du representerer bade vaktselskapet og oppdragsgiver. Ditt inntrykk pavirker hvordan begge oppfattes.`,
    },
    {
      id: 'sik-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Konflikthendelse',
      problem: 'En beruset person nekter a forlate et kjopesenter etter stengetid og blir aggressiv nar du ber ham ga.',
      solution: `**Steg 1 - Bevar roen:** Hold rolig stemme og apent kroppssprak. Sta pa trygg avstand.

**Steg 2 - Kommuniser tydelig:** "Hei, kjopesenteret stenger na. Jeg forstar at det er kjedelig, men alle ma forlate bygget."

**Steg 3 - Vis empati:** "Jeg skjonner at du kanskje ikke har det sa greit akkurat na. Er det noe jeg kan hjelpe deg med?"

**Steg 4 - Gi valg:** "Du kan ga ut hovedinngangen, sa kan jeg bestille en taxi til deg om du trenger det. Alternativt kan jeg folge deg ut sideut gangen om du foretrekker det."

**Steg 5 - Sett grenser:** "Hvis du ikke kan ga frivillig, ma jeg dessverre kontakte politiet. Det vil jeg helst unnga."

**Steg 6 - Eskaler om nodvendig:** Dersom verbal nedtrapping ikke fungerer, kontakt politiet. Ikke bruk fysisk makt med mindre det er nodvendig for a beskytte deg selv eller andre.`,
    },
    {
      id: 'sik-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        task: 'Hva er det forste du bor gjore nar du moter en aggressiv person i sikkerhetsarbeid?',
        options: [
          { id: 'a', text: 'Ringe politiet umiddelbart', isCorrect: false },
          { id: 'b', text: 'Vise at du er sterkere enn personen', isCorrect: false },
          { id: 'c', text: 'Bevare roen og forsoke a trappe ned situasjonen verbalt', isCorrect: true },
          { id: 'd', text: 'Bortvise personen med fysisk makt', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Forste steg er alltid a bevare roen og forsoke verbal nedtrapping. Din egen ro smitter over pa den andre, og de fleste situasjoner kan loses uten fysisk inngripen.',
      },
    },
    {
      id: 'sik-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-2',
        number: '1.4.2',
        type: 'multiple-choice',
        task: 'Hva bor en god hendelsesrapport inneholde?',
        options: [
          { id: 'a', text: 'Kun hvem som var involvert og hva som skjedde', isCorrect: false },
          { id: 'b', text: 'Hva, nar, hvor, hvem, hvordan og hvilke tiltak som ble iverksatt', isCorrect: true },
          { id: 'c', text: 'Dine personlige vurderinger av hendelsen', isCorrect: false },
          { id: 'd', text: 'Kun tidspunkt og sted for hendelsen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En komplett hendelsesrapport inneholder hva som skjedde, nar og hvor det skjedde, hvem som var involvert, hvordan hendelsen utviklet seg og hvilke tiltak som ble iverksatt.',
      },
    },
    {
      id: 'sik-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        task: 'Beskriv fem prinsipper for verbal nedtrapping av konflikter. Forklar hvorfor hvert prinsipp er viktig.',
        hints: ['Tenk pa hva som hjelper en opprort person til a roe seg ned'],
        solution: '1) Bevar roen - din ro smitter over pa andre. 2) Aktiv lytting - vis at du horer den andre. 3) Empati - vis forstaelse for den andres perspektiv. 4) Gi valgmuligheter - la personen beholde noe kontroll. 5) Unnga provokasjon - sarkasme og trusler eskalerer konflikten. Hvert prinsipp bidrar til a redusere spenningsnivaet og finne fredelige losninger.',
      },
    },
    {
      id: 'sik-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-4',
        number: '1.4.4',
        type: 'classic',
        task: 'Skriv en kort hendelsesrapport basert pa folgende scenario: Klokken 14:30 oppdager du at et vindu er knust pa ostfasaden av bygget. Det ser ut som noen har kastet en stein. Du finner ingen mistenkte i naerheten.',
        solution: 'Hendelsesrapport: Dato: [dagens dato]. Klokkeslett: 14:30. Sted: Ostfasaden av bygget, vindu i 1. etasje. Hendelse: Under patruljering ble det oppdaget at et vindu pa ostfasaden var knust. En stein ble funnet pa innsiden av vinduet, noe som tyder pa at det er kastet utenfra. Ingen mistenkte ble observert i omradet. Tiltak: Omradet ble sikret, fotodokumentasjon tatt, vaktleder varslet, oppdragsgiver informert, midlertidig tildekking iverksatt. Rapport skrevet av: [ditt navn], vaktnummer: [nummer].',
      },
    },
    {
      id: 'sik-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-5',
        number: '1.4.5',
        type: 'classic',
        task: 'Hvorfor er kundebehandling en viktig del av sikkerhetsarbeid? Gi minst tre grunner.',
        solution: '1) Vektere er ofte forste kontaktpunkt for besokende og representerer virksomheten. 2) God service bygger tillit mellom sikkerhetsavdelingen og publikum. 3) Serviceorienterte vektere far mer informasjon fra publikum om mistenkelige forhold. 4) Det bidrar til et trygt og hyggelig miljo. 5) Oppdragsgivere forventer serviceinnstilling, ikke bare vakthold.',
      },
    },
    {
      id: 'sik-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-1-4-ex-6',
        number: '1.4.6',
        type: 'classic',
        task: 'Du jobber som vekter og en eldre dame er fortvilet fordi hun ikke finner bilen sin pa parkeringsplassen. Beskriv hvordan du ville handtert situasjonen.',
        solution: 'Forst ville jeg roet henne ned og vist empati. Deretter ville jeg spurt om hun husker omtrent hvor hun parkerte, hvilken etasje eller sone. Jeg ville tilbudt a folge henne for a lete systematisk, eventuelt bruke kameraovervaking til a finne bilen. Om hun har bremser eller er syk, ville jeg hente en stol. Gjennom hele situasjonen ville jeg vaert talmoding, vennlig og losningsorientert.',
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// Kapittel 1.5: Sikkerhetsfagets historie og utvikling
// ----------------------------------------------------------------------------
const CHAPTER_SIKKERHETSFAG_1_5: TextbookChapter = {
  id: 'sikkerhetsfag-1-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '1.5',
  title: 'Sikkerhetsfagets historie og utvikling',
  description: 'Fra nattevekter til moderne sikkerhetsprofesjon. Teknologiutvikling, profesjonalisering og fremtidens sikkerhetsarbeid.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'sik-1-5-intro',
      type: 'text',
      content: `## Sikkerhetsfagets historie og utvikling

Behovet for sikkerhet er like gammelt som sivilisasjonen selv. Fra de tidligste vaktpostene i antikken til moderne hoyteknologiske sikkerhetssystemer har faget gjennomgatt en enorm utvikling. A kjenne fagets historie gir oss bedre forstaelse for hvor vi er i dag og hvor vi er pa vei.

I dette kapittelet skal du lere:
- Sikkerhetsfagets historiske rotteer
- Utviklingen fra nattevekter til profesjonelt yrke
- Teknologiens pavirkning pa sikkerhetsbransjen
- Fremtidens utfordringer og muligheter`,
    },
    {
      id: 'sik-1-5-text-1',
      type: 'text',
      content: `### Fra nattevekter til moderne sikkerhet

**Middelalderen og tidlig nytid**
De forste kjente formene for organisert vakthold i Norge var nattevekterne. Allerede pa 1600-tallet hadde norske byer nattevektere som patruljerte gatene etter morkets frembrudd. Deres hovedoppgaver var:
- Rope ut klokkeslettene
- Holde utkikk etter brann
- Rapportere mistenkelige forhold
- Opprettholde nattero

Nattevekterne var de forste sivile sikkerhetsarbeiderne og la grunnlaget for den moderne vekterbransjen.

**1800-tallet: Politiets framvekst**
Pa 1800-tallet ble det opprettet formelle politistyrker i norske byer. Dette skilte offentlig ordensmakt fra privat vakthold. Likevel fortsatte private vakttjenester a eksistere, saerlig for a beskytte handelsvaeer og eiendommer.

**1900-tallet: Profesjonalisering begynner**
De forste moderne vaktselskapene i Norge ble etablert pa midten av 1900-tallet. Disse selskapene tilbod vakthold, verditransport og alarmtjenester. Bransjen vokste i takt med urbanisering og okt verdiskaping.`,
    },
    {
      id: 'sik-1-5-text-2',
      type: 'text',
      content: `### Profesjonalisering av bransjen

Fra 1970-tallet og utover gjennomgikk sikkerhetsbransjen en betydelig profesjonalisering:

**Lovregulering**
- 1988: Lov om vaktvirksomhet vedtatt, stilte for forste gang krav til godkjenning og utdanning
- Senere oppdateringer har skerpt kravene ytterligere
- I dag reguleres bransjen av vaktvirksomhetsloven og tilhorende forskrifter

**Utdanning**
- Innforing av obligatorisk vekterutdanning
- Etablering av fagbrev i sikkerhetsfag (2006)
- Hoyere utdanning innen sikkerhet pa hoyskole- og universitetsniva
- Kontinuerlig faglig utvikling og etterutdanning

**Bransjeorganisering**
- Etablering av NHO Service og Handel (bransjeforening)
- Utvikling av bransjenormer og kvalitetsstandarder
- Sertifiseringsordninger for selskaper og personell

Disse tiltakene har bidratt til a heve statusen til sikkerhetsbransjen og gjore den til et anerkjent fagomrade.`,
    },
    {
      id: 'sik-1-5-def-fagbrev',
      type: 'definition',
      title: 'Fagbrev i sikkerhetsfag',
      content: `**Fagbrev i sikkerhetsfag** er en formell yrkeskvalifikasjon som oppnas gjennom yrkesfaglig utdanning (VG1 + VG2) etterfulgt av to ars laeretid i bedrift. Fagbrevet dokumenterer at innehaveren har den kompetansen som trengs for a utfore sikkerhetsarbeid pa et profesjonelt niva.`,
    },
    {
      id: 'sik-1-5-text-3',
      type: 'text',
      content: `### Teknologiens pavirkning

Teknologiutviklingen har revolusjonert sikkerhetsbransjen:

**Alarmsystemer**
- Fra enkle mekaniske alarmer til sofistikerte elektroniske systemer
- Trådlose systemer og skytilkoblede losninger
- Integrasjon med smarttelefoner og appstyring

**Kameraovervaking**
- Fra analoge CCTV-kameraer til digitale HD- og 4K-systemer
- Videoanalyse med kunstig intelligens
- Ansiktsgjenkjenning og automatisk deteksjon av mistenkelig atferd

**Adgangskontroll**
- Fra fysiske nokler til elektroniske kortlesere
- Biometrisk identifikasjon (fingeravtrykk, iris, ansikt)
- Mobile adgangslosninger via smarttelefon

**Kommunikasjon**
- Fra samband og personsokere til digitale radionettverk
- GPS-sporing og elektronisk vaktrundesystem
- Sanntidsovervaking og rapportering via nettbrett

**Cybersikkerhet**
- Et helt nytt felt som har vokst eksplosivt
- Beskyttelse av digitale verdier og infrastruktur
- IoT-sikkerhet (tingenes internett)`,
    },
    {
      id: 'sik-1-5-text-4',
      type: 'text',
      content: `### Fremtidens sikkerhetsbransje

Sikkerhetsbransjen star overfor store endringer i arene som kommer:

**Kunstig intelligens og automatisering**
- AI-basert videoanalyse som kan oppdage avvik automatisk
- Droner for overvaking og patruljering
- Robotvektere for enkle oppgaver
- Prediktiv analyse som kan forutsi hendelser

**Nye trusselbilder**
- Okt cyberkriminalitet og digital sarbarhet
- Terrortrusler og radikalisering
- Klimaendringer og naturkatastrofer
- Pandemier og helserelaterte sikkerhetsutfordringer

**Kompetansekrav**
- Behov for tverrfaglig kompetanse (teknikk, jus, psykologi)
- Digital kompetanse blir stadig viktigere
- Etikk og personvern i en tid med okt overvaking
- Internasjonalt samarbeid og kulturforstaelse

Selv om teknologien utvikler seg raskt, vil behovet for dyktige sikkerhetsfolk med god dommekraft, kommunikasjonsevner og etisk bevissthet bare oke. Teknologien er et verktoy, men det er mennesker som tar beslutningene.`,
    },
    {
      id: 'sik-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Fra analog til digital sikkerhet',
      problem: 'Sammenlign sikkerhetsarbeid i 1980 og i dag.',
      solution: `**1980:**
- Vektere patruljerte med lommelykt og notatblokk
- Alarmer var enkle og ga mange falske utloesninger
- Kommunikasjon foregikk via samband med begrenset rekkevidde
- Rapporter ble skrevet for hand
- Kameraer var analoge med darlig bildekvalitet
- Adgangskontroll baserte seg pa fysiske nokler

**I dag:**
- Vektere bruker nettbrett, GPS og digitale rapporteringsverktoy
- Alarmsystemer er intelligente og kan skille mellom reelle og falske alarmer
- Kommunikasjon skjer via digitale nettverk med full dekning
- Rapporter skrives digitalt og er tilgjengelige i sanntid
- HD-kameraer med AI-analyse og ansiktsgjenkjenning
- Biometrisk adgangskontroll og mobile losninger
- I tillegg: cybersikkerhet, droner, IoT-overvaking`,
    },
    {
      id: 'sik-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        task: 'Nar ble lov om vaktvirksomhet forst vedtatt i Norge?',
        options: [
          { id: 'a', text: '1968', isCorrect: false },
          { id: 'b', text: '1978', isCorrect: false },
          { id: 'c', text: '1988', isCorrect: true },
          { id: 'd', text: '1998', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Lov om vaktvirksomhet ble vedtatt i 1988 og stilte for forste gang formelle krav til godkjenning og utdanning i sikkerhetsbransjen.',
      },
    },
    {
      id: 'sik-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-2',
        number: '1.5.2',
        type: 'multiple-choice',
        task: 'Hvilken teknologi har hatt storst innvirkning pa moderne sikkerhetsarbeid?',
        options: [
          { id: 'a', text: 'Mekaniske laseenheter', isCorrect: false },
          { id: 'b', text: 'Digitale kameraer med AI-basert videoanalyse', isCorrect: true },
          { id: 'c', text: 'Trygghetsalarmer for eldre', isCorrect: false },
          { id: 'd', text: 'Innbruddsdetektorer basert pa lyd', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Digitale kameraer med AI-basert videoanalyse har revolusjonert overvaking ved a automatisere deteksjon av mistenkelig atferd, ansiktsgjenkjenning og hendelsesregistrering.',
      },
    },
    {
      id: 'sik-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-3',
        number: '1.5.3',
        type: 'classic',
        task: 'Gjor rede for tre viktige milepeler i profesjonaliseringen av sikkerhetsbransjen i Norge.',
        hints: ['Tenk pa lovgivning, utdanning og organisering'],
        solution: '1) Vedtakelsen av lov om vaktvirksomhet i 1988, som stilte formelle krav til godkjenning og utdanning. 2) Innforingen av fagbrev i sikkerhetsfag i 2006, som ga yrket formell yrkeskvalifikasjon. 3) Etablering av bransjeorganisasjoner og kvalitetsstandarder som hevet bransjens status og kompetanseniva.',
      },
    },
    {
      id: 'sik-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        task: 'Beskriv hvordan teknologien har endret sikkerhetsarbeid de siste 30 arene. Gi eksempler fra minst tre ulike teknologiomrader.',
        solution: '1) Kameraovervaking - fra analoge CCTV til digitale HD-kameraer med AI-analyse og automatisk deteksjon. 2) Adgangskontroll - fra fysiske nokler til biometrisk identifikasjon og mobile losninger. 3) Kommunikasjon - fra analogt samband til digitale nettverk med GPS-sporing og sanntidsrapportering. 4) Alarmsystemer - fra enkle mekaniske til intelligente skytilkoblede systemer.',
      },
    },
    {
      id: 'sik-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-5',
        number: '1.5.5',
        type: 'classic',
        task: 'Diskuter hvordan kunstig intelligens og automatisering kan pavirke sikkerhetsarbeid i fremtiden. Nevn bade muligheter og utfordringer.',
        hints: ['Tenk pa bade fordeler for sikkerheten og etiske utfordringer'],
        solution: 'Muligheter: AI kan analysere store datamengder for a oppdage monstre, droner kan patruljere store omrader, prediktiv analyse kan forebygge hendelser. Utfordringer: Personvern og etikk ved okt overvaking, risiko for feilaktige AI-beslutninger, tap av arbeidsplasser, avhengighet av teknologi som kan svikte. Konklusjon: Menneskelig dommekraft vil fortsatt vaere nodvendig.',
      },
    },
    {
      id: 'sik-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-1-5-ex-6',
        number: '1.5.6',
        type: 'classic',
        task: 'Hva var hovedoppgavene til nattevekterne i norske byer pa 1600-tallet, og hvilke paralleller kan du trekke til moderne sikkerhetsarbeid?',
        solution: 'Nattevekterne ropte ut klokkeslett, holdt utkikk etter brann, rapporterte mistenkelige forhold og opprettholdt nattero. Paralleller til moderne sikkerhetsarbeid: 1) Patruljering og observasjon er fortsatt kjerneoppgaver. 2) Brannvern er fortsatt viktig. 3) Rapportering av avvik og hendelser. 4) Opprettholdelse av orden og trygghet. Forskjellen er verktoyene og kompetansekravene, men grunnprinsippene er de samme.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================
export const SIKKERHETSFAG_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SIKKERHETSFAG_1_1,
  CHAPTER_SIKKERHETSFAG_1_2,
  CHAPTER_SIKKERHETSFAG_1_3,
  CHAPTER_SIKKERHETSFAG_1_4,
  CHAPTER_SIKKERHETSFAG_1_5,
];
