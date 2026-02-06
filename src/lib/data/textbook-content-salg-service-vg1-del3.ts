/**
 * Salg, service og reiseliv VG1 - Del 3: Markedsføring
 * Kapittel 3.1-3.7
 *
 * Dekker LK20 kompetansemål:
 * - vurdere sentrale konkurransevirkemidler i sammenheng med profilen og lønnsomheten til virksomheter
 * - analysere forbrukeratferd i sammenheng med segmentering av målgrupper
 * - lage en enkel markedsplan og gjøre rede for valg av mål og virkemiddel
 * - lage en markedsføringskampanje og gjøre rede for valg av virkemidler
 * - kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Grunnleggende markedsføring
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_1: TextbookChapter = {
  id: 'salg-service-vg1-3-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.1',
  title: 'Grunnleggende markedsføring',
  description: 'En innføring i markedsføringsbegrepet, markedsføringsmiksen og ulike markedsstrategier. Du lærer om sammenhengen mellom markedsføring, salg og lønnsomhet i servicenæringen.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere sentrale konkurransevirkemidler i sammenheng med profilen og lønnsomheten til virksomheter'],
  content: [
    {
      id: 'salg-service-vg1-3-1-intro',
      type: 'text',
      content: `## Hva er markedsføring?

Markedsføring handler om mye mer enn reklame og annonsering. Det er hele prosessen med å forstå kundenes behov, utvikle produkter og tjenester som dekker disse behovene, og kommunisere verdien til riktig målgruppe.

I dette kapittelet skal du lære:
- Hva markedsføring er og hvorfor det er viktig
- De fire P-ene i markedsføringsmiksen
- Forskjellen mellom ulike markedsstrategier
- Hvordan markedsføring påvirker lønnsomheten`,
    },
    {
      id: 'salg-service-vg1-3-1-def-1',
      type: 'definition',
      title: 'Markedsføring',
      content: `**Markedsføring** er alle aktiviteter en virksomhet gjør for å skape, kommunisere og levere verdi til kunder. Det handler om å identifisere kundens behov og utvikle løsninger som dekker dem bedre enn konkurrentene.`,
    },
    {
      id: 'salg-service-vg1-3-1-text-1',
      type: 'text',
      content: `### De fire P-ene - Markedsføringsmiksen

Markedsføringsmiksen er de fire grunnleggende virkemidlene virksomheter bruker:

**1. Produkt (Product)**
- Hva selger vi?
- Hvilke egenskaper har produktet?
- Kvalitet, design, emballasje
- Tilleggstjenester og garanti

**2. Pris (Price)**
- Hva skal produktet koste?
- Rabatter og betalingsvilkår
- Prisstrategier (høy, lav, middels)
- Verdi i forhold til konkurrenter

**3. Plass/Distribusjon (Place)**
- Hvor selges produktet?
- Fysisk butikk, nettbutikk, begge?
- Lagerstyring og leveringstid
- Tilgjengelighet for kunden

**4. Påvirkning/Kommunikasjon (Promotion)**
- Hvordan kommuniserer vi med kunder?
- Reklame, sosiale medier, PR
- Salgsfremmende tiltak
- Personlig salg`,
    },
    {
      id: 'salg-service-vg1-3-1-def-2',
      type: 'definition',
      title: 'Markedsføringsmiksen (4P)',
      content: `**Markedsføringsmiksen** er kombinasjonen av de fire konkurransevirkemidlene: Produkt, Pris, Plass og Påvirkning. Virksomheter tilpasser miksen for å nå sine målgrupper og skille seg ut fra konkurrentene.`,
    },
    {
      id: 'salg-service-vg1-3-1-text-2',
      type: 'text',
      content: `### Utvidet markedsføringsmiks - 7P

For servicebedrifter utvides ofte miksen med tre ekstra P-er:

**5. People (Mennesker)**
- De ansattes kompetanse og service
- Kundebehandling og holdninger
- Opplæring og motivasjon

**6. Process (Prosess)**
- Hvordan leveres tjenesten?
- Kundens opplevelse steg for steg
- Effektivitet og kvalitet

**7. Physical Evidence (Fysiske bevis)**
- Lokaler og innredning
- Uniformer og visuell profil
- Alt som gjør tjenesten "synlig"`,
    },
    {
      id: 'salg-service-vg1-3-1-text-3',
      type: 'text',
      content: `### Markedsstrategier

**Differensiering**
- Skille seg ut fra konkurrentene
- Fokus på unike egenskaper
- Eksempel: Apple fokuserer på design og brukervennlighet

**Kostnadslederskap**
- Være billigst i markedet
- Effektiv drift og store volum
- Eksempel: Rema 1000 med "lavpris hver dag"

**Nisjestrategi**
- Fokusere på et avgrenset segment
- Spesialisert tilbud
- Eksempel: Fjällräven fokuserer på friluftsliv

**Markedsorientering**
- Lytte til kundene
- Tilpasse tilbudet etter behov
- Kontinuerlig forbedring basert på tilbakemeldinger`,
    },
    {
      id: 'salg-service-vg1-3-1-tip-1',
      type: 'tip',
      title: 'Husk sammenhengen',
      content: `De fire P-ene henger sammen. Et luksusprodukt krever høy pris, eksklusiv distribusjon og sofistikert markedskommunikasjon. Et lavprisprodukt krever effektiv distribusjon, enkel kommunikasjon og ofte høyt volum for å tjene penger.`,
    },
    {
      id: 'salg-service-vg1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Markedsføringsmiks for en kafé',
      problem: 'En ny kafé skal posisjonere seg i markedet. Hvordan kan de bruke 4P?',
      solution: `**Produkt:**
- Spesialkaffe fra lokale brennerier
- Hjemmebakte bakervarer
- Vegetariske og veganske alternativer
- Koselig atmosfære

**Pris:**
- Middels til høy pris (kvalitetsprofil)
- Rabattkort for stamkunder
- Billigere formiddagskaffe

**Plass:**
- Sentral beliggenhet i gågate
- Uteservering om sommeren
- Mulighet for takeaway

**Påvirkning:**
- Instagram med fine bilder av mat og drikke
- Samarbeid med lokale influencere
- Arrangement som kaffekurs og akustiske konserter

Dette skaper en helhetlig profil som tiltrekker kvalitetsbevisste kunder.`,
    },
    {
      id: 'salg-service-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva står de fire P-ene for i markedsføringsmiksen?',
        options: [
          { id: 'a', text: 'Produkt, Pris, Profitt, Påvirkning', isCorrect: false },
          { id: 'b', text: 'Produkt, Pris, Plass, Påvirkning', isCorrect: true },
          { id: 'c', text: 'Plan, Pris, Plass, Promosjon', isCorrect: false },
          { id: 'd', text: 'Produkt, Personell, Plass, Planlegging', isCorrect: false },
        ],
        solution: 'De fire P-ene er Produkt, Pris, Plass (distribusjon) og Påvirkning (promotion/kommunikasjon).',
      },
    },
    {
      id: 'salg-service-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom differensiering og kostnadslederskap som markedsstrategi.',
        hints: ['Tenk på hva som gjør virksomheten konkurransedyktig'],
        solution: 'Differensiering handler om å skille seg ut fra konkurrentene gjennom unike egenskaper, kvalitet eller merkevare - slik at kundene er villige til å betale mer. Kostnadslederskap handler om å være billigst i markedet gjennom effektiv drift og høyt volum.',
      },
    },
    {
      id: 'salg-service-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Velg en virksomhet du kjenner og beskriv deres markedsføringsmiks.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv produktet/tjenesten.',
            solution: 'Eksempel (IKEA): Rimelige, funksjonelle møbler med moderne skandinavisk design. Flat-pack konsept som kunden monterer selv.',
          },
          {
            label: 'b',
            task: 'Beskriv prisstrategien.',
            solution: 'Lavprisstrategi med fokus på verdi for pengene. Lav pris oppnås gjennom flat-pack, store innkjøpsvolum og selvbetjening.',
          },
          {
            label: 'c',
            task: 'Beskriv distribusjon/plass.',
            solution: 'Store varehus utenfor bykjernen med stor parkeringsplass. Også nettbutikk med hjemlevering. Varehusene har en planlagt rute gjennom utstillingen.',
          },
          {
            label: 'd',
            task: 'Beskriv påvirkning/kommunikasjon.',
            solution: 'Katalog (nå digital), sosiale medier, TV-reklame, inspirerende utstillinger i varehus. Fokus på hverdagsløsninger og tilgjengelig design.',
          },
        ],
        solution: 'Markedsføringsmiksen må henge sammen. IKEAs lavpris passer med selvbetjening, flat-pack og store volum.',
      },
    },
    {
      id: 'salg-service-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Hvorfor er de tre ekstra P-ene (People, Process, Physical Evidence) spesielt viktige for servicebedrifter?',
        solution: 'Servicebedrifter selger opplevelser og tjenester som ofte er immaterielle og produseres og konsumeres samtidig. People (de ansatte) ER produktet i stor grad - en frisør uten dyktige frisører har ikke et godt produkt. Process påvirker kundens opplevelse - lang ventetid ødelegger selv god service. Physical Evidence gjør det usynlige synlig - lokalene, uniformene og utstyret viser kvaliteten.',
      },
    },
    {
      id: 'salg-service-vg1-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Markedsføring** handler om å skape og levere verdi til kunder
- **De fire P-ene** er Produkt, Pris, Plass og Påvirkning
- **Servicebedrifter** bruker ofte 7P med People, Process og Physical Evidence
- **Strategier** inkluderer differensiering, kostnadslederskap og nisje

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Markedsføringsmiks | Kombinasjonen av de fire P-ene |
| Differensiering | Skille seg ut fra konkurrenter |
| Kostnadslederskap | Være billigst i markedet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Forbrukeratferd og målgrupper
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_2: TextbookChapter = {
  id: 'salg-service-vg1-3-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.2',
  title: 'Forbrukeratferd og målgrupper',
  description: 'Du lærer å analysere forbrukeratferd og segmentere markedet i ulike målgrupper. Kapittelet dekker faktorer som påvirker kjøpsbeslutninger og hvordan virksomheter tilpasser seg ulike segmenter.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere forbrukeratferd i sammenheng med segmentering av målgrupper'],
  content: [
    {
      id: 'salg-service-vg1-3-2-intro',
      type: 'text',
      content: `## Hvorfor kjøper vi det vi kjøper?

For å lykkes med markedsføring må vi forstå hva som driver forbrukernes valg. Hvorfor velger noen dyr merkevare mens andre går for budsjettversjonen? Hvorfor handler vi impulsivt noen ganger og grundig andre ganger?

I dette kapittelet skal du lære:
- Hva som påvirker forbrukernes kjøpsbeslutninger
- Hvordan man segmenterer et marked
- Hvordan definere og beskrive målgrupper
- Forskjellen mellom B2C og B2B-markeder`,
    },
    {
      id: 'salg-service-vg1-3-2-def-1',
      type: 'definition',
      title: 'Forbrukeratferd',
      content: `**Forbrukeratferd** er studiet av hvordan enkeltpersoner, grupper og organisasjoner velger, kjøper, bruker og kvitter seg med produkter og tjenester for å tilfredsstille sine behov og ønsker.`,
    },
    {
      id: 'salg-service-vg1-3-2-text-1',
      type: 'text',
      content: `### Faktorer som påvirker kjøpsbeslutninger

**Kulturelle faktorer:**
- Kultur og subkultur
- Sosial klasse
- Verdier og livsstil
- Trender i samfunnet

**Sosiale faktorer:**
- Familie og venner
- Referansegrupper
- Sosiale medier og influencere
- Rollemodeller

**Personlige faktorer:**
- Alder og livsfase
- Yrke og økonomi
- Livsstil og personlighet
- Selvbilde og identitet

**Psykologiske faktorer:**
- Motivasjon og behov
- Persepsjon og oppfatning
- Læring og erfaring
- Holdninger og overbevisninger`,
    },
    {
      id: 'salg-service-vg1-3-2-text-2',
      type: 'text',
      content: `### Kjøpsprosessen

Forbrukere går gjennom flere steg når de gjør et kjøp:

**1. Problemerkjennelse**
- Innser at de har et behov
- "Jeg trenger nye sko"

**2. Informasjonssøk**
- Søker informasjon om alternativer
- Google, spør venner, besøker butikker

**3. Vurdering av alternativer**
- Sammenligner produkter
- Pris, kvalitet, merke, anmeldelser

**4. Kjøpsbeslutning**
- Velger et produkt
- Velger hvor og hvordan de kjøper

**5. Atferd etter kjøp**
- Fornøyd eller misfornøyd?
- Anbefaler til andre eller klager?`,
    },
    {
      id: 'salg-service-vg1-3-2-def-2',
      type: 'definition',
      title: 'Segmentering',
      content: `**Segmentering** er å dele et marked inn i grupper av kunder med like behov, kjennetegn eller atferd. Hvert segment kan kreve ulike produkter eller markedsføringsstrategier.`,
    },
    {
      id: 'salg-service-vg1-3-2-text-3',
      type: 'text',
      content: `### Segmenteringskriterier

**Demografisk segmentering:**
- Alder, kjønn, inntekt
- Utdanning, yrke
- Familiesituasjon, bosted

**Geografisk segmentering:**
- Land, region, by
- By vs. landlig
- Klima og sesong

**Psykografisk segmentering:**
- Livsstil og verdier
- Personlighet
- Interesser og hobbyer

**Atferdsmessig segmentering:**
- Brukshyppighet (storbrukere, sjelden)
- Lojalitet til merke
- Kjøpsanledning
- Søkte fordeler (pris, kvalitet, bekvemmelighet)`,
    },
    {
      id: 'salg-service-vg1-3-2-text-4',
      type: 'text',
      content: `### Fra segment til målgruppe

Når markedet er segmentert, velger virksomheten hvilke segmenter de vil satse på:

**Vurdering av segmenter:**
- Størrelse og vekstpotensial
- Lønnsomhet
- Konkurransesituasjon
- Passer til vår kompetanse?

**Målgruppestrategier:**

*Udifferensiert:*
- Samme tilbud til alle
- Massemarkedsføring

*Differensiert:*
- Ulike tilbud til ulike segmenter
- Flere produktlinjer

*Konsentrert:*
- Fokus på ett eller få segmenter
- Nisjestrategi

**Personas:**
Mange virksomheter lager "personas" - fiktive representanter for målgruppen med navn, alder, jobb, interesser og utfordringer.`,
    },
    {
      id: 'salg-service-vg1-3-2-tip-1',
      type: 'tip',
      title: 'Tenk som kunden',
      content: `God segmentering handler ikke om hva som er praktisk for bedriften, men om hvordan kundene faktisk er forskjellige i sine behov. Spør: "Hvilke ulike problemer prøver kundene våre å løse?"`,
    },
    {
      id: 'salg-service-vg1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Segmentering av treningssentere',
      problem: 'Et treningssenter vil forstå sine ulike kundegrupper bedre.',
      solution: `**Segment 1: Resultatorienterte**
- Alder: 20-35
- Mål: Bygge muskler, bli sterkere
- Atferd: Trener 4-6 ganger per uke
- Verdier: Resultater, utfordring, fellesskap
- Behov: Bra utstyr, personlig trening, kostholdsråd

**Segment 2: Helsebevisste**
- Alder: 40-60
- Mål: Holde seg i form, forebygge sykdom
- Atferd: Trener 2-3 ganger per uke
- Verdier: Helse, balanse, trivsel
- Behov: Rolig atmosfære, gruppetimer, veiledning

**Segment 3: Sosiale trenere**
- Alder: 25-45
- Mål: Trening som sosial aktivitet
- Atferd: Trener i grupper
- Verdier: Fellesskap, moro, motivasjon
- Behov: Gruppetimer, arrangementer, kafé

Treningssenteret kan tilpasse tilbudet til hvert segment.`,
    },
    {
      id: 'salg-service-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hvilke faktorer tilhører "sosiale faktorer" i forbrukeratferd?',
        options: [
          { id: 'a', text: 'Alder og inntekt', isCorrect: false },
          { id: 'b', text: 'Motivasjon og holdninger', isCorrect: false },
          { id: 'c', text: 'Familie, venner og influencere', isCorrect: true },
          { id: 'd', text: 'Kultur og verdier', isCorrect: false },
        ],
        solution: 'Sosiale faktorer inkluderer familie, venner, referansegrupper og influencere - altså mennesker rundt oss som påvirker våre valg.',
      },
    },
    {
      id: 'salg-service-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-2-ex-2',
        number: '3.2.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom demografisk og psykografisk segmentering?',
        hints: ['Tenk på hva slags informasjon som brukes'],
        solution: 'Demografisk segmentering bruker målbare fakta som alder, kjønn, inntekt og bosted. Psykografisk segmentering handler om livsstil, verdier, personlighet og interesser - altså mer om hvem folk er på innsiden, ikke bare ytre kjennetegn.',
      },
    },
    {
      id: 'salg-service-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Beskriv kjøpsprosessen for følgende produkter:',
        subTasks: [
          {
            label: 'a',
            task: 'En sjokolade i kassen på butikken',
            solution: 'Kort prosess: Problemerkjennelse (ser sjokoladen, får lyst) -> Impulsiv kjøpsbeslutning. Lite informasjonssøk eller vurdering. Lav risiko, lav involvering.',
          },
          {
            label: 'b',
            task: 'En ny bil',
            solution: 'Lang prosess: Problemerkjennelse (trenger transport) -> Omfattende informasjonssøk (nett, forhandlere, anmeldelser) -> Grundig vurdering av alternativer (pris, sikkerhet, drivstoff, design) -> Nøye kjøpsbeslutning -> Evaluering etter kjøp (fornøyd?). Høy risiko, høy involvering.',
          },
        ],
        solution: 'Kjøpsprosessen varierer med produktets pris, risiko og betydning for kunden.',
      },
    },
    {
      id: 'salg-service-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Lag en persona for en målgruppe for en virksomhet du velger.',
        solution: 'Eksempel for en sportsbutikk: "Aktiv-Anna" - 32 år, jobber som lærer, bor i Oslo med samboer. Trener 3-4 ganger i uka (løping, yoga, styrke). Følger fitness-influencere på Instagram. Villig til å betale for kvalitetsutstyr som varer. Verdsetter funksjonalitet og stil. Utfordring: Finne tid til trening i en travel hverdag. Handler ofte på nett, men liker å prøve sko i butikk.',
      },
    },
    {
      id: 'salg-service-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'Hvordan kan sosiale medier påvirke forbrukerens kjøpsbeslutninger?',
        solution: '1) Informasjonssøk: Forbrukere søker anbefalinger og anmeldelser på sosiale medier. 2) Sosial påvirkning: Influencere og venners kjøp påvirker hva vi ønsker. 3) Synlighet: Produkter blir "trendy" gjennom viral spredning. 4) FOMO: Frykt for å gå glipp av noe alle andre har. 5) Direkte kjøp: Shoppable posts gjør det enkelt å kjøpe det man ser.',
      },
    },
    {
      id: 'salg-service-vg1-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Forbrukeratferd** påvirkes av kulturelle, sosiale, personlige og psykologiske faktorer
- **Kjøpsprosessen** har fem steg fra problemerkjennelse til atferd etter kjøp
- **Segmentering** deler markedet inn i grupper med like behov
- **Målgruppevalg** handler om å velge hvilke segmenter man vil satse på

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forbrukeratferd | Hvordan forbrukere velger og kjøper |
| Segmentering | Dele markedet i grupper |
| Persona | Fiktiv representant for målgruppen |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Markedsplan og strategi
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_3: TextbookChapter = {
  id: 'salg-service-vg1-3-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.3',
  title: 'Markedsplan og strategi',
  description: 'Du lærer å utarbeide en enkel markedsplan med situasjonsanalyse, mål, strategier og tiltak. Kapittelet viser sammenhengen mellom virksomhetens mål og valg av markedsføringstiltak.',
  estimatedMinutes: 50,
  competenceGoals: ['lage en enkel markedsplan og gjøre rede for valg av mål og virkemiddel'],
  content: [
    {
      id: 'salg-service-vg1-3-3-intro',
      type: 'text',
      content: `## En plan for suksess

En markedsplan er virksomhetens "veikart" for å nå sine markedsføringsmål. Uten en plan blir markedsføring ofte tilfeldig og lite effektiv. Med en god plan vet alle hva som skal gjøres, når og hvorfor.

I dette kapittelet skal du lære:
- Hva en markedsplan inneholder
- Hvordan gjennomføre en situasjonsanalyse (SWOT)
- Å sette SMARTe mål
- Å velge strategi og tiltak`,
    },
    {
      id: 'salg-service-vg1-3-3-def-1',
      type: 'definition',
      title: 'Markedsplan',
      content: `En **markedsplan** er et dokument som beskriver virksomhetens markedsføringsmål og hvordan disse skal nås. Den inneholder analyse av nåsituasjonen, målsetninger, strategier, tiltak, budsjett og måling av resultater.`,
    },
    {
      id: 'salg-service-vg1-3-3-text-1',
      type: 'text',
      content: `### Elementer i en markedsplan

**1. Sammendrag**
- Kort oversikt over hovedpunkter
- Skrives til slutt

**2. Situasjonsanalyse**
- Hvor er vi nå?
- Intern og ekstern analyse
- SWOT-analyse

**3. Mål**
- Hva vil vi oppnå?
- Konkrete, målbare mål

**4. Strategi**
- Hvordan skal vi nå målene?
- Valg av målgruppe og posisjonering

**5. Tiltak og aktiviteter**
- Hva skal vi gjøre konkret?
- Markedsføringsmiksen

**6. Budsjett**
- Hvor mye koster det?
- Fordeling på aktiviteter

**7. Måling og oppfølging**
- Hvordan vet vi om vi lykkes?
- KPI-er og rapportering`,
    },
    {
      id: 'salg-service-vg1-3-3-def-2',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `**SWOT-analyse** er et verktøy for situasjonsanalyse som kartlegger Styrker (Strengths), Svakheter (Weaknesses), Muligheter (Opportunities) og Trusler (Threats). Styrker og svakheter er interne faktorer, mens muligheter og trusler er eksterne.`,
    },
    {
      id: 'salg-service-vg1-3-3-text-2',
      type: 'text',
      content: `### SWOT-analyse i praksis

| Interne | Positive | Negative |
|---------|----------|----------|
| | **Styrker** | **Svakheter** |
| | Hva er vi gode på? | Hva kan forbedres? |
| | Konkurransefortrinn | Begrensninger |

| Eksterne | Positive | Negative |
|----------|----------|----------|
| | **Muligheter** | **Trusler** |
| | Trender vi kan utnytte | Utfordringer i markedet |
| | Nye markeder | Konkurranse |

**Spørsmål til SWOT:**
- Styrker: Hva gjør vi bedre enn konkurrentene?
- Svakheter: Hvor er vi sårbare?
- Muligheter: Hvilke trender kan vi utnytte?
- Trusler: Hva truer vår posisjon?`,
    },
    {
      id: 'salg-service-vg1-3-3-text-3',
      type: 'text',
      content: `### SMARTe mål

Gode mål er SMART:

**S - Spesifikke**
- Konkret og tydelig
- "Øke salget med 15%" vs. "selge mer"

**M - Målbare**
- Kan måles med tall
- Vet om vi har nådd det

**A - Oppnåelige (Achievable)**
- Realistiske, men ambisiøse
- Motiverende, ikke demotiverende

**R - Relevante**
- Passer til virksomhetens overordnede mål
- Gir mening for de involverte

**T - Tidsbestemte**
- Har en deadline
- "Innen utgangen av 2025"`,
    },
    {
      id: 'salg-service-vg1-3-3-text-4',
      type: 'text',
      content: `### Fra strategi til tiltak

**Strategiske valg:**
- Hvilke segmenter satser vi på?
- Hvordan vil vi posisjonere oss?
- Hva er vårt konkurransefortrinn?

**Taktiske tiltak - markedsføringsmiksen:**

*Produkt:*
- Produktutvikling, sortiment, kvalitet

*Pris:*
- Prissetting, rabatter, kampanjer

*Plass:*
- Distribusjonskanaler, tilgjengelighet

*Påvirkning:*
- Reklame, sosiale medier, events, PR

**Budsjett:**
- Hvor mye per tiltak?
- Hva gir best avkastning?

**Tidslinje:**
- Når skal hva gjennomføres?
- Hvem er ansvarlig?`,
    },
    {
      id: 'salg-service-vg1-3-3-tip-1',
      type: 'tip',
      title: 'Start med kunden',
      content: `De beste markedsplanene starter med kundeinnsikt. Før du planlegger tiltak, forstå hvem målgruppen er, hva de trenger, og hvordan de tar beslutninger. Tiltak uten kundeinnsikt blir ofte bortkastet.`,
    },
    {
      id: 'salg-service-vg1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Enkel markedsplan for en lokal bokhandel',
      problem: 'En bokhandel ønsker å øke kundebesøk og salg.',
      solution: `**Situasjonsanalyse (SWOT):**
- Styrker: Kompetent personale, god beliggenhet, lojale stamkunder
- Svakheter: Begrenset markedsføringsbudsjett, liten nettbutikk
- Muligheter: Økt interesse for lokalt og bærekraftig, bokklubber er populære
- Trusler: Konkurranse fra Amazon og nettbokhandler

**Mål (SMART):**
- Øke antall kundebesøk med 20% innen utgangen av året
- Starte 3 bokklubber med til sammen 50 medlemmer innen 6 måneder

**Strategi:**
- Posisjonere seg som "det lokale møtestedet for bokentusiaster"
- Fokusere på opplevelser, ikke bare produkter

**Tiltak:**
- Månedlige forfatterbesøk og boklanseringer
- Ukentlige bokklubb-møter med rabatt på klubbens bok
- Instagram-konto med lesetips og "behind the scenes"
- Samarbeid med lokale kafeer og bibliotek

**Budsjett:** 50 000 kr årlig (forfatterhonorar, markedsmateriell, kaffe)

**Måling:** Telle kundebesøk, følge bokklubbredskaper, Instagram-statistikk`,
    },
    {
      id: 'salg-service-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva står SWOT for?',
        options: [
          { id: 'a', text: 'Sales, Work, Operations, Target', isCorrect: false },
          { id: 'b', text: 'Strengths, Weaknesses, Opportunities, Threats', isCorrect: true },
          { id: 'c', text: 'Strategy, Weakness, Objective, Tactics', isCorrect: false },
          { id: 'd', text: 'Success, Wins, Options, Tasks', isCorrect: false },
        ],
        solution: 'SWOT står for Strengths (styrker), Weaknesses (svakheter), Opportunities (muligheter) og Threats (trusler).',
      },
    },
    {
      id: 'salg-service-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-3-ex-2',
        number: '3.3.2',
        type: 'classic',
        task: 'Gjør dette målet SMART: "Vi vil selge mer."',
        hints: ['Tenk på hva som mangler: tall, tidsfrist, spesifisering'],
        solution: 'Eksempel på SMART versjon: "Vi vil øke omsetningen av sportsutstyr med 15% sammenlignet med fjoråret, innen 31. desember 2025." Dette er Spesifikt (sportsutstyr), Målbart (15%), Oppnåelig (realistisk økning), Relevant (økt salg) og Tidsbestemt (31. desember 2025).',
      },
    },
    {
      id: 'salg-service-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Gjennomfør en enkel SWOT-analyse for en virksomhet du velger.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp 2-3 styrker.',
            solution: 'Eksempel (lokal pizzeria): 1) Ekte italienske oppskrifter, 2) Kjent i nabolaget, 3) Rask levering',
          },
          {
            label: 'b',
            task: 'List opp 2-3 svakheter.',
            solution: 'Eksempel: 1) Lite utvalg vegetarmat, 2) Gammelt lokale, 3) Ingen app for bestilling',
          },
          {
            label: 'c',
            task: 'List opp 2-3 muligheter.',
            solution: 'Eksempel: 1) Økt etterspørsel etter hjemlevering, 2) Ny boligutbygging i nærområdet, 3) Trendy med "ekte" og lokalt',
          },
          {
            label: 'd',
            task: 'List opp 2-3 trusler.',
            solution: 'Eksempel: 1) Konkurranse fra Foodora/Wolt med mange valg, 2) Økte råvarepriser, 3) Ny pizzakjede åpner i nærheten',
          },
        ],
        solution: 'SWOT gir oversikt over situasjonen og grunnlag for å velge strategi.',
      },
    },
    {
      id: 'salg-service-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Lag en enkel markedsplan for en frisørsalong som vil tiltrekke flere unge kunder.',
        solution: 'Mål: Øke andelen kunder under 30 år fra 20% til 35% innen ett år. Strategi: Posisjonere seg som trendy og moderne. Tiltak: 1) Lansere Instagram med før/etter-bilder og styling-tips, 2) Tilby studentrabatt på 15%, 3) Samarbeide med lokal influencer for synlighet, 4) Oppdatere interiør til mer moderne stil, 5) Tilby trendfarging og moderne klipp. Budsjett: 30 000 kr. Måling: Andel unge kunder, Instagram-følgere, respons på studentrabatt.',
      },
    },
    {
      id: 'salg-service-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'Hvorfor er det viktig at markedsføringsmål er målbare?',
        solution: 'Målbare mål er viktige fordi: 1) Du vet om du har lykkes eller ikke. 2) Du kan justere underveis hvis du ser at du ikke er på rett vei. 3) Du kan lære hva som virker og hva som ikke virker til neste gang. 4) Du kan vise resultater til ledelse/eiere og begrunne markedsføringsbudsjettet. 5) Det skaper motivasjon og fokus for de som jobber med markedsføring.',
      },
    },
    {
      id: 'salg-service-vg1-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **markedsplan** inneholder analyse, mål, strategi, tiltak og budsjett
- **SWOT-analyse** kartlegger styrker, svakheter, muligheter og trusler
- **SMARTe mål** er spesifikke, målbare, oppnåelige, relevante og tidsbestemte
- **Tiltak** skal støtte strategien og bidra til å nå målene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Markedsplan | Dokument med mål og tiltak |
| SWOT | Analyse av situasjonen |
| SMART | Kriterier for gode mål |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Markedsføringskampanjer
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_4: TextbookChapter = {
  id: 'salg-service-vg1-3-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.4',
  title: 'Markedsføringskampanjer',
  description: 'Hvordan man planlegger, gjennomfører og evaluerer en markedsføringskampanje. Du lærer å velge riktige kanaler og virkemidler tilpasset målgruppe, budsjett og mål for kampanjen.',
  estimatedMinutes: 50,
  competenceGoals: ['lage en markedsføringskampanje og gjøre rede for valg av virkemidler'],
  content: [
    {
      id: 'salg-service-vg1-3-4-intro',
      type: 'text',
      content: `## Kampanjer som treffer

En markedsføringskampanje er en koordinert innsats for å nå et bestemt mål over en avgrenset periode. Det kan være å lansere et nytt produkt, øke salget i en periode, eller bygge kjennskap til merkevaren.

I dette kapittelet skal du lære:
- Hva en markedsføringskampanje er
- Hvordan planlegge en kampanje steg for steg
- Ulike kanaler og virkemidler
- Måling og evaluering av kampanjer`,
    },
    {
      id: 'salg-service-vg1-3-4-def-1',
      type: 'definition',
      title: 'Markedsføringskampanje',
      content: `En **markedsføringskampanje** er en planlagt og koordinert serie av markedsføringsaktiviteter med et felles mål, budskap og tidsbegrensning. Kampanjen bruker gjerne flere kanaler for å nå målgruppen.`,
    },
    {
      id: 'salg-service-vg1-3-4-text-1',
      type: 'text',
      content: `### Steg for å planlegge en kampanje

**1. Definer målet**
- Hva vil vi oppnå?
- Salg, kjennskap, leads, engasjement?
- SMART-formulert

**2. Kjenn målgruppen**
- Hvem vil vi nå?
- Hvor er de? Hva gjør de?
- Hva motiverer dem?

**3. Utvikle budskapet**
- Hva skal vi si?
- Hvordan treffer det målgruppen?
- Kreativ idé og konsept

**4. Velg kanaler**
- Hvor når vi målgruppen best?
- Digital, print, TV, utendørs?
- Kanalene må passe budsjett og mål

**5. Lag innhold**
- Tekst, bilder, video
- Tilpasset hver kanal
- Konsistent med merkevaren

**6. Sett budsjett og tidslinje**
- Hvor mye koster hvert element?
- Når skal hva publiseres?

**7. Gjennomfør og følg opp**
- Lansér kampanjen
- Overvåk resultater underveis
- Juster om nødvendig

**8. Evaluer**
- Nådde vi målet?
- Hva lærte vi?`,
    },
    {
      id: 'salg-service-vg1-3-4-text-2',
      type: 'text',
      content: `### Kanaler for markedsføring

**Digitale kanaler:**
- Sosiale medier (Facebook, Instagram, TikTok, LinkedIn)
- Søkemotorannonsering (Google Ads)
- Display-annonsering (bannere)
- E-postmarkedsføring
- Influencer-samarbeid
- Innholdsmarkedsføring (blogg, video)

**Tradisjonelle kanaler:**
- TV og radio
- Aviser og magasiner
- Utendørsreklame (plakater, buss)
- Direkte reklame (postkasse)
- Butikkmateriell (POS)

**Valg av kanaler avhenger av:**
- Hvor målgruppen er
- Budsjett (digital ofte billigere å starte)
- Type budskap (visuelt, komplekst, enkelt)
- Mål (kjennskap vs. salg)`,
    },
    {
      id: 'salg-service-vg1-3-4-text-3',
      type: 'text',
      content: `### Kampanjevirkemidler

**Salgsfremmende tiltak:**
- Rabatter og tilbud ("20% avslag")
- Konkurranser og premier
- Gratis prøver
- Kjøp 3 betal for 2
- Tidsbegrenset ("kun i dag!")

**Kommunikasjonsvirkemidler:**
- Reklamefilm/annonsering
- Sponsing av arrangementer
- PR og medieomtale
- Events og opplevelser
- Samarbeid med influencere

**Digitale virkemidler:**
- Retargeting (følge kunder med annonser)
- Personalisering
- Interaktivt innhold
- Viral spredning
- Chatbots og automatisering`,
    },
    {
      id: 'salg-service-vg1-3-4-tip-1',
      type: 'tip',
      title: 'Integrer kanalene',
      content: `De beste kampanjene bruker flere kanaler som forsterker hverandre. Sosiale medier skaper engasjement, annonser driver til nettsted, e-post minner om tilbudet, og butikken avslutter salget. Samme budskap, tilpasset hver kanal.`,
    },
    {
      id: 'salg-service-vg1-3-4-text-4',
      type: 'text',
      content: `### Måling av kampanjer

**KPI-er (Key Performance Indicators):**

*Kjennskap:*
- Rekkevidde (hvor mange så kampanjen)
- Visninger og eksponering
- Merkevarekjennskap (undersøkelser)

*Engasjement:*
- Likes, kommentarer, delinger
- Klikkrate (CTR)
- Tid brukt på nettsted

*Handling:*
- Konverteringsrate (kjøp, påmelding)
- Leads generert
- Salg og omsetning

*Effektivitet:*
- Kostnad per klikk (CPC)
- Kostnad per konvertering
- Return on Investment (ROI)`,
    },
    {
      id: 'salg-service-vg1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Black Friday-kampanje for klesbutikk',
      problem: 'En klesbutikk planlegger sin Black Friday-kampanje.',
      solution: `**Mål:**
Øke omsetningen med 50% sammenlignet med vanlig fredag. Generere 200 nye nyhetsbrev-abonnenter.

**Målgruppe:**
Kvinner 25-45 år interessert i mote, følger butikken på sosiale medier eller er eksisterende kunder.

**Budskap:**
"Black Friday - opptil 50% på hele kolleksjonen. Kun fredag!"

**Kanaler og tiltak:**
- Instagram/Facebook: Nedtellingsinnlegg hele uken, stories med "sneak peek"
- E-post: Tidlig tilgang for nyhetsbrev-abonnenter (torsdag kl 20)
- Butikk: Dekorasjon, ballonger, "doorbusters"
- Google Ads: Søkeord "Black Friday klær [by]"

**Tidslinje:**
- Mandag: Teaser på sosiale medier
- Onsdag: E-post til eksisterende kunder
- Torsdag kveld: VIP-tilgang for abonnenter
- Fredag: Full kampanje

**Budsjett:** 15 000 kr (annonsering + materiell)

**Måling:** Omsetning, antall kunder, nye abonnenter, Instagram-engasjement`,
    },
    {
      id: 'salg-service-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hvilken KPI måler hvor mange som har klikket på en annonse i forhold til hvor mange som så den?',
        options: [
          { id: 'a', text: 'CPC (Kostnad per klikk)', isCorrect: false },
          { id: 'b', text: 'CTR (Klikkrate)', isCorrect: true },
          { id: 'c', text: 'ROI (Avkastning på investering)', isCorrect: false },
          { id: 'd', text: 'CPM (Kostnad per tusen visninger)', isCorrect: false },
        ],
        solution: 'CTR (Click-Through Rate / Klikkrate) måler andelen som klikker på en annonse av alle som ser den. For eksempel: 100 klikk / 5000 visninger = 2% CTR.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-2',
        number: '3.4.2',
        type: 'classic',
        task: 'Hvorfor er det viktig å tilpasse innholdet til hver kanal?',
        hints: ['Tenk på hvordan folk bruker ulike kanaler'],
        solution: 'Folk bruker ulike kanaler på ulike måter. På Instagram scroller man raskt og forventer visuelt innhold. På e-post har man litt mer tid og forventer personlig informasjon. En lang tekst fungerer ikke på TikTok, men en kort video fungerer ikke på nyhetsbrev. Tilpasset innhold får bedre respons.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Planlegg en enkel lansergingskampanje for et nytt produkt.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et produkt og definer målet.',
            solution: 'Eksempel: Ny sportsdrikk. Mål: 500 solgte flasker første måned, 1000 Instagram-følgere.',
          },
          {
            label: 'b',
            task: 'Beskriv målgruppen.',
            solution: 'Aktive mennesker 18-35 år som trener regelmessig, opptatt av helse og ytelse.',
          },
          {
            label: 'c',
            task: 'Lag et kampanjebudskap.',
            solution: '"Ny energi for treningen din - naturlig, sukkerfri og full av smak."',
          },
          {
            label: 'd',
            task: 'Velg 3 kanaler og begrunn valget.',
            solution: '1) Instagram - målgruppen er aktive her, visuelt produkt. 2) Treningssenter-samarbeid - når målgruppen der de trener. 3) Influencer-samarbeid med fitness-profiler - troverdighet og rekkevidde.',
          },
        ],
        solution: 'En god kampanje har tydelig mål, kjenner målgruppen og velger kanaler strategisk.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Gi tre eksempler på salgsfremmende tiltak og forklar når hvert passer best.',
        solution: '1) Rabatter ("20% avslag") - passer ved sesongskifte, Black Friday, eller når man vil tømme lager. 2) Konkurranser - passer for å skape engasjement og samle leads, f.eks. "tag en venn og vinn". 3) Tidsbegrenset tilbud ("kun i helgen!") - skaper hastverk og får folk til å handle nå. 4) Gratis prøver - passer ved lansering av nye produkter for å la folk teste.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'En kampanje hadde 100 000 visninger, 2000 klikk og 50 kjøp. Hva var klikkraten og konverteringsraten?',
        solution: 'Klikkrate (CTR) = Klikk / Visninger = 2000 / 100 000 = 2%. Konverteringsrate = Kjøp / Klikk = 50 / 2000 = 2,5%. Alternativt kan man måle konvertering fra visning: 50 / 100 000 = 0,05%.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Hva er fordelene med å bruke flere kanaler i en kampanje?',
        solution: '1) Når flere: Ulike mennesker bruker ulike kanaler. 2) Forsterker budskapet: Gjentakelse på flere steder øker gjenkjennelse. 3) Flere kontaktpunkter: Kunden ser budskapet flere ganger før de handler. 4) Ulike formål: Sosiale medier skaper interesse, Google fanger opp de som søker, e-post minner om tilbudet. 5) Bedre data: Kan se hvilken kanal som fungerer best.',
      },
    },
    {
      id: 'salg-service-vg1-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **kampanje** er koordinerte aktiviteter med felles mål og tidsramme
- **Planlegging** inkluderer mål, målgruppe, budskap, kanaler og budsjett
- **Kanaler** kan være digitale (sosiale medier, e-post) eller tradisjonelle (TV, print)
- **Måling** med KPI-er viser om kampanjen fungerer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kampanje | Koordinert markedsføringsinnsats |
| CTR | Klikkrate - andel som klikker |
| Konvertering | Ønsket handling (kjøp, påmelding) |
| ROI | Avkastning på investering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Kommunikasjon og reklameutforming
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_5: TextbookChapter = {
  id: 'salg-service-vg1-3-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.5',
  title: 'Kommunikasjon og reklameutforming',
  description: 'Du lærer om ulike kommunikasjonsformer og hvordan man utformer budskap som treffer målgruppen. Kapittelet dekker visuell kommunikasjon, tekstforfatting og grafisk design for markedsføring.',
  estimatedMinutes: 45,
  competenceGoals: ['lage en markedsføringskampanje og gjøre rede for valg av virkemidler'],
  content: [
    {
      id: 'salg-service-vg1-3-5-intro',
      type: 'text',
      content: `## Budskap som treffer

God markedskommunikasjon handler om å formidle riktig budskap til riktig mottaker på riktig måte. I en verden full av reklame må du skille deg ut og fange oppmerksomheten på sekunder.

I dette kapittelet skal du lære:
- Grunnleggende kommunikasjonsmodell
- Hvordan lage budskap som treffer
- Prinsipper for visuell kommunikasjon
- Teknikker for effektiv tekstforfatting`,
    },
    {
      id: 'salg-service-vg1-3-5-def-1',
      type: 'definition',
      title: 'Markedskommunikasjon',
      content: `**Markedskommunikasjon** omfatter alle måter en virksomhet kommuniserer med sine kunder og potensielle kunder på, inkludert reklame, PR, sosiale medier, emballasje og personlig salg.`,
    },
    {
      id: 'salg-service-vg1-3-5-text-1',
      type: 'text',
      content: `### Kommunikasjonsmodellen

En enkel kommunikasjonsmodell viser:

**Avsender** → **Budskap** → **Kanal** → **Mottaker**

Med mulighet for **støy** (forstyrrelser) og **tilbakemelding** (respons).

**Avsender:**
- Hvem kommuniserer?
- Virksomhetens troverdighet og image

**Budskap:**
- Hva vil vi si?
- Hvordan formulerer vi det?

**Kanal:**
- Hvordan når budskapet frem?
- Digital, print, muntlig?

**Mottaker:**
- Hvem er målgruppen?
- Hvordan tolker de budskapet?

**Støy:**
- Konkurrerende budskap
- Distraksjoner
- Misforståelser

**Tilbakemelding:**
- Kjøp, likes, kommentarer
- Undersøkelser og dialog`,
    },
    {
      id: 'salg-service-vg1-3-5-text-2',
      type: 'text',
      content: `### AIDA-modellen

AIDA beskriver stegene i effektiv markedskommunikasjon:

**A - Attention (Oppmerksomhet)**
- Fang oppmerksomheten
- Overskrift, bilde, bevegelse
- Du har 1-3 sekunder

**I - Interest (Interesse)**
- Vekk interesse
- Hvorfor er dette relevant?
- Koble til mottakerens behov

**D - Desire (Ønske)**
- Skap ønske om produktet
- Vis fordeler og verdi
- Følelser og bilder

**A - Action (Handling)**
- Oppfordre til handling
- "Kjøp nå", "Meld deg på"
- Gjør det enkelt å handle`,
    },
    {
      id: 'salg-service-vg1-3-5-text-3',
      type: 'text',
      content: `### Visuell kommunikasjon

**Bilder kommuniserer raskt:**
- Folk scanner bilder først, tekst etterpå
- Et bilde kan formidle følelser på sekunder
- Bruk bilder som støtter budskapet

**Designprinsipper:**

*Hierarki:*
- Det viktigste først og størst
- Led øyet gjennom designet

*Kontrast:*
- Skille elementer fra hverandre
- Lys/mørk, stor/liten

*Repetisjon:*
- Gjenta elementer for sammenheng
- Konsistent stil

*Hvitrom:*
- Luft rundt elementene
- Mindre er ofte mer

**Farger:**
- Farger har betydning og følelser
- Blå = tillit, rød = energi, grønn = natur
- Tilpass merkevaren`,
    },
    {
      id: 'salg-service-vg1-3-5-text-4',
      type: 'text',
      content: `### Tekstforfatting for markedsføring

**Overskrifter:**
- Kort og fengende
- Viktigste budskap først
- Vekker nysgjerrighet eller gir løfte

**Brødtekst:**
- Lett å lese
- Korte setninger og avsnitt
- Fokus på fordeler, ikke bare egenskaper

**Call to Action (CTA):**
- Tydelig oppfordring
- Handlingsord: "Kjøp", "Last ned", "Meld deg på"
- Skaper hastverk: "Kun i dag"

**Tips for god tekst:**
- Snakk til leseren ("du" og "deg")
- Unngå fagspråk
- Vær konkret, ikke generell
- Test ulike versjoner`,
    },
    {
      id: 'salg-service-vg1-3-5-tip-1',
      type: 'tip',
      title: 'Fordeler fremfor egenskaper',
      content: `Folk kjøper ikke produkter, de kjøper løsninger. I stedet for å si "Denne madrassen har 7-soners pocketfjærer" (egenskap), si "Våkn uthvilt hver morgen uten verk i ryggen" (fordel). Egenskaper forteller hva produktet er, fordeler forteller hva kunden får.`,
    },
    {
      id: 'salg-service-vg1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: AIDA i en Instagram-annonse',
      problem: 'En treningsstudio vil lage en annonse for nye medlemmer.',
      solution: `**Attention (Bilde):**
Energisk bilde av folk som trener sammen, smiler, svetter. Fargerikt og dynamisk.

**Interest (Overskrift):**
"Lei av å trene alene? Bli med i et fellesskap som pusher deg videre."

**Desire (Tekst):**
"På [Studio X] får du ikke bare tilgang til utstyr - du får en coach, et fellesskap og et fast program som faktisk virker. 92% av medlemmene våre når målene sine."

**Action (CTA):**
"Prøv gratis i 7 dager → Lenke i bio"

Annonsen følger AIDA: fanger oppmerksomhet, vekker interesse for fellesskap, skaper ønske med resultater, og oppfordrer til handling.`,
    },
    {
      id: 'salg-service-vg1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hva står AIDA for?',
        options: [
          { id: 'a', text: 'Analyse, Implementering, Design, Aksjon', isCorrect: false },
          { id: 'b', text: 'Attention, Interest, Desire, Action', isCorrect: true },
          { id: 'c', text: 'Advertising, Information, Distribution, Awareness', isCorrect: false },
          { id: 'd', text: 'Audience, Image, Data, Analytics', isCorrect: false },
        ],
        solution: 'AIDA står for Attention (Oppmerksomhet), Interest (Interesse), Desire (Ønske) og Action (Handling).',
      },
    },
    {
      id: 'salg-service-vg1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-5-ex-2',
        number: '3.5.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en egenskap og en fordel?',
        hints: ['Tenk på hva produktet er vs. hva kunden får'],
        solution: 'En egenskap beskriver hva produktet er eller har (teknisk, fysisk). En fordel beskriver hva kunden får ut av egenskapen (nytte, verdi). Eksempel: "4000mAh batteri" er en egenskap, "Bruk telefonen hele dagen uten lading" er fordelen.',
      },
    },
    {
      id: 'salg-service-vg1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Skriv om disse egenskapene til fordeler:',
        subTasks: [
          {
            label: 'a',
            task: '"Bilen har 500 liters bagasjerom"',
            solution: '"Plass til alt utstyret på familieferien - uten tetris i baksetet."',
          },
          {
            label: 'b',
            task: '"Skoene er laget av vannavvisende materiale"',
            solution: '"Tørre føtter hele dagen, uansett vær."',
          },
          {
            label: 'c',
            task: '"Appen har 256-bit kryptering"',
            solution: '"Dine data er trygge - ingen utenforstående får tilgang."',
          },
        ],
        solution: 'Fordeler fokuserer på kundens opplevelse og nytte, ikke tekniske detaljer.',
      },
    },
    {
      id: 'salg-service-vg1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Lag en kort annonsetekst for et produkt du velger, som følger AIDA-modellen.',
        solution: 'Eksempel for en kaffemaskin: Attention: "Ditt kjøkken. Din kafe." Interest: "Tenk deg perfekt barista-kaffe hver morgen - uten kø og høye priser." Desire: "Med [Maskin X] får du profesjonell espresso, cappuccino og latte med ett trykk. Justér styrke og temperatur akkurat som du vil. Stilrent design som pynter opp kjøkkenet." Action: "Se demo og få 20% introduksjonsrabatt på [nettside].no"',
      },
    },
    {
      id: 'salg-service-vg1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Hvilke farger ville du valgt for markedsføring av følgende, og hvorfor?',
        subTasks: [
          {
            label: 'a',
            task: 'En bank',
            solution: 'Blå - signaliserer tillit, stabilitet og profesjonalitet. Eventuelt kombinert med hvit for renhet.',
          },
          {
            label: 'b',
            task: 'En økologisk matbutikk',
            solution: 'Grønn - natur, miljø, helse. Eventuelt brun for jord og autentisitet.',
          },
          {
            label: 'c',
            task: 'En energidrikk',
            solution: 'Rød, oransje eller neonfarger - energi, fart, spenning. Sterk kontrast for oppmerksomhet.',
          },
        ],
        solution: 'Fargevalg bør passe til merkevaren og det du vil formidle.',
      },
    },
    {
      id: 'salg-service-vg1-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kommunikasjonsmodellen** viser avsender, budskap, kanal og mottaker
- **AIDA** er stegene: Attention, Interest, Desire, Action
- **Visuell kommunikasjon** bruker bilder, farger og design
- **God tekst** fokuserer på fordeler og har tydelig CTA

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| AIDA | Modell for effektiv kommunikasjon |
| CTA | Call to Action - oppfordring til handling |
| Fordel vs. egenskap | Hva kunden får vs. hva produktet er |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.6: Regelverk for markedsføring
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_6: TextbookChapter = {
  id: 'salg-service-vg1-3-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.6',
  title: 'Regelverk for markedsføring',
  description: 'En gjennomgang av lover og regler som regulerer markedsføring, inkludert markedsføringsloven og regelverk for digital reklame. Du lærer om etiske retningslinjer og konsekvenser ved regelbrudd.',
  estimatedMinutes: 40,
  competenceGoals: ['kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg'],
  content: [
    {
      id: 'salg-service-vg1-3-6-intro',
      type: 'text',
      content: `## Lov og rett i markedsføring

Markedsføring er ikke fritt frem. Det finnes lover og regler som beskytter forbrukere mot villedende, uetisk eller plagsom markedsføring. Som markedsfører må du kjenne disse reglene.

I dette kapittelet skal du lære:
- Markedsføringslovens hovedprinsipper
- Spesielle regler for digital markedsføring
- GDPR og personvern
- Konsekvenser av regelbrudd`,
    },
    {
      id: 'salg-service-vg1-3-6-def-1',
      type: 'definition',
      title: 'Markedsføringsloven',
      content: `**Markedsføringsloven** regulerer markedsføring og handelspraksis i Norge. Den forbyr villedende og urimelig markedsføring, og har spesielle regler for markedsføring mot barn og unge.`,
    },
    {
      id: 'salg-service-vg1-3-6-text-1',
      type: 'text',
      content: `### Hovedprinsipper i markedsføringsloven

**God markedsføringsskikk (§2):**
- All markedsføring skal være i samsvar med god markedsføringsskikk
- Ta hensyn til forbrukernes interesser
- Ikke krenke menneskeverdet

**Villedende markedsføring (§7):**
- Forbudt å gi uriktige eller misvisende opplysninger
- Forbudt å utelate vesentlig informasjon
- Forbudt å skape falske inntrykk

**Sammenlignende reklame (§26):**
- Tillatt, men må være korrekt og saklig
- Må sammenligne like produkter
- Ikke nedvurdere konkurrenter usaklig

**Urimelige handelspraksis (§6):**
- Forbudt med praksis som påvirker forbrukerens evne til å ta informerte valg
- Aggressive salgsmetoder
- Press og utilbørlig påvirkning`,
    },
    {
      id: 'salg-service-vg1-3-6-text-2',
      type: 'text',
      content: `### Spesielle regler

**Markedsføring mot barn (§21):**
- Særlig aktsomhet overfor barn og unge
- Forbudt å utnytte barns manglende erfaring
- Forbudt med direkte kjøpsoppfordringer til barn
- Strenge regler for influencer-markedsføring mot barn

**Skjult reklame (§3):**
- Reklame skal tydelig merkes som reklame
- Gjelder også sponsede innlegg på sosiale medier
- Influencere må merke samarbeid med "Annonse" eller lignende

**Spam og direkte markedsføring (§15a):**
- E-postmarkedsføring krever samtykke
- SMS-reklame krever samtykke
- Lett å melde seg av`,
    },
    {
      id: 'salg-service-vg1-3-6-def-2',
      type: 'definition',
      title: 'GDPR',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning som også gjelder i Norge. Den regulerer innsamling og bruk av personopplysninger, og gir forbrukere rett til innsyn, sletting og kontroll over egne data.`,
    },
    {
      id: 'salg-service-vg1-3-6-text-3',
      type: 'text',
      content: `### Personvern og GDPR

**Grunnleggende krav:**
- Må ha lovlig grunn for å samle data
- Samtykke må være frivillig og informert
- Kun samle data du faktisk trenger
- Slette data når de ikke lenger trengs

**Forbrukerens rettigheter:**
- Rett til innsyn (se hvilke data som lagres)
- Rett til sletting ("retten til å bli glemt")
- Rett til å flytte data
- Rett til å trekke samtykke

**I praksis for markedsføring:**
- Cookie-samtykke på nettsider
- Informasjon om datainnsamling
- Mulighet for å melde seg av nyhetsbrev
- Sikker lagring av kundedata

**Brudd kan gi:**
- Bøter opptil 4% av global omsetning
- Pålegg om å stoppe behandlingen
- Negativt omdømme`,
    },
    {
      id: 'salg-service-vg1-3-6-warning-1',
      type: 'warning',
      title: 'Forbrukertilsynet overvåker',
      content: `Forbrukertilsynet fører tilsyn med at markedsføringsloven følges. De kan pålegge retting, tvangsmulkt og anmelde grove brudd. Mange saker starter med klager fra forbrukere eller konkurrenter.`,
    },
    {
      id: 'salg-service-vg1-3-6-text-4',
      type: 'text',
      content: `### Konsekvenser ved regelbrudd

**Administrative sanksjoner:**
- Pålegg om å stoppe kampanjen
- Tvangsmulkt (dagbøter)
- Vedtak om forbud

**Økonomiske konsekvenser:**
- Bøter og gebyrer
- Erstatningskrav
- Tap av salg ved stopp i kampanje

**Omdømme:**
- Negativ medieomtale
- Tap av kundetillit
- Skade på merkevaren

**Eksempler på regelbrudd:**
- Influencer som ikke merker sponset innhold
- Nettbutikk som bruker falske nedprisede priser
- Bedrift som sender e-postreklame uten samtykke
- Villedende påstander om produktets egenskaper`,
    },
    {
      id: 'salg-service-vg1-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Riktig merking av sponset innhold',
      problem: 'En influencer skal poste om et produkt hun har fått betalt for å omtale.',
      solution: `**Feil fremgangsmåte:**
Poste uten å nevne at det er betalt, eller bare skrive "Takk til @bedrift" nederst.

**Riktig fremgangsmåte:**
- Merk tydelig øverst eller i begynnelsen
- Bruk klare ord: "Annonse", "Reklame", "Betalt samarbeid"
- Instagram har egen merking-funksjon: "Betalt partnerskap med..."
- Kan ikke gjemmes bak "klikk for mer" eller i en masse hashtags

**Eksempel på riktig post:**
"Annonse | Samarbeid med @hudpleie.no"
[Bilde av produkt]
"Jeg har brukt dette serumet i 3 uker og merker stor forskjell..."

Forbrukertilsynet har gitt flere influencere pålegg om å merke tydeligere.`,
    },
    {
      id: 'salg-service-vg1-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-6-ex-1',
        number: '3.6.1',
        type: 'multiple-choice',
        task: 'Hva kreves for å sende markedsføring på e-post til privatpersoner?',
        options: [
          { id: 'a', text: 'Ingenting - det er fritt frem', isCorrect: false },
          { id: 'b', text: 'At mottakeren har samtykket til å motta e-post', isCorrect: true },
          { id: 'c', text: 'At e-posten sendes på hverdager', isCorrect: false },
          { id: 'd', text: 'At bedriften er registrert i Brønnøysund', isCorrect: false },
        ],
        solution: 'E-postmarkedsføring krever samtykke fra mottakeren. Dette følger av markedsføringsloven og GDPR.',
      },
    },
    {
      id: 'salg-service-vg1-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-6-ex-2',
        number: '3.6.2',
        type: 'classic',
        task: 'Hva er villedende markedsføring?',
        hints: ['Tenk på hva som gir feil inntrykk'],
        solution: 'Villedende markedsføring er reklame som gir uriktige eller misvisende opplysninger, utelater vesentlig informasjon, eller på annen måte skaper falske inntrykk som kan påvirke forbrukerens valg. Eksempler: overdrevne påstander, falske før-priser, skjulte kostnader.',
      },
    },
    {
      id: 'salg-service-vg1-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-6-ex-3',
        number: '3.6.3',
        type: 'classic',
        task: 'Vurder om følgende er lovlig eller ulovlig markedsføring:',
        subTasks: [
          {
            label: 'a',
            task: 'En nettbutikk setter opp en "før-pris" som aldri har vært reell for å få rabatt til å virke større.',
            solution: 'Ulovlig - dette er villedende markedsføring. Før-prisen må ha vært reell.',
          },
          {
            label: 'b',
            task: 'En influencer med 50 000 følgere poster om et produkt hun har fått gratis, uten å nevne at det er gratis.',
            solution: 'Ulovlig - dette er skjult reklame. Gratis produkter i bytte mot omtale må merkes.',
          },
          {
            label: 'c',
            task: 'En matbutikk sammenligner sine priser med konkurrentens og viser at de er billigere.',
            solution: 'Lovlig - sammenlignende reklame er tillatt så lenge informasjonen er korrekt og saklig.',
          },
        ],
        solution: 'Lovlig markedsføring er ærlig, tydelig og respekterer forbrukernes rettigheter.',
      },
    },
    {
      id: 'salg-service-vg1-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        task: 'Hva er de viktigste rettighetene forbrukere har under GDPR?',
        solution: '1) Rett til informasjon - vite hva som samles inn og hvorfor. 2) Rett til innsyn - se hvilke data som er lagret om deg. 3) Rett til retting - få feil korrigert. 4) Rett til sletting - få data slettet ("retten til å bli glemt"). 5) Rett til å flytte data - ta med dataene til en annen tjeneste. 6) Rett til å trekke samtykke - når som helst.',
      },
    },
    {
      id: 'salg-service-vg1-3-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Markedsføringsloven** forbyr villedende og urimelig markedsføring
- **Skjult reklame** er forbudt - sponset innhold må merkes
- **GDPR** gir forbrukere kontroll over egne data
- **Regelbrudd** kan gi bøter, pålegg og omdømmetap

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Villedende markedsføring | Uriktige eller misvisende opplysninger |
| GDPR | Personvernforordning med strenge krav |
| Forbrukertilsynet | Overvåker markedsføringsloven |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.7: Merkevarebygging og profil
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_3_7: TextbookChapter = {
  id: 'salg-service-vg1-3-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '3.7',
  title: 'Merkevarebygging og profil',
  description: 'Du lærer hva en merkevare er og hvordan virksomheter bygger en tydelig profil som skiller seg ut i markedet. Kapittelet dekker visuell identitet, merkeverdier og hvordan profilen påvirker lønnsomheten.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere sentrale konkurransevirkemidler i sammenheng med profilen og lønnsomheten til virksomheter'],
  content: [
    {
      id: 'salg-service-vg1-3-7-intro',
      type: 'text',
      content: `## Mer enn et navn og en logo

En merkevare er ikke bare et navn eller en logo - det er alt kunder tenker og føler om en virksomhet. Sterke merkevarer kan ta høyere priser, tiltrekke lojale kunder og overleve konkurranse. Merkevarebygging er derfor en av de viktigste investeringene en bedrift kan gjøre.

I dette kapittelet skal du lære:
- Hva en merkevare er
- Elementene i visuell identitet
- Hvordan bygge en sterk merkevare
- Sammenhengen mellom profil og lønnsomhet`,
    },
    {
      id: 'salg-service-vg1-3-7-def-1',
      type: 'definition',
      title: 'Merkevare (Brand)',
      content: `En **merkevare** er summen av alle assosiasjoner, opplevelser og forventninger kundene har til en virksomhet, et produkt eller en tjeneste. Det er det som skiller deg fra konkurrentene i kundenes bevissthet.`,
    },
    {
      id: 'salg-service-vg1-3-7-text-1',
      type: 'text',
      content: `### Merkevareidentitet vs. merkevareprofil

**Merkevareidentitet** - det bedriften ønsker å være:
- Verdier og misjon
- Personlighet og tone
- Visuell stil
- Hva som gjør oss unike

**Merkevareprofil (image)** - det kundene oppfatter:
- Assosiasjoner og inntrykk
- Rykte og omdømme
- Følelser og forventninger
- Hvordan de omtaler oss

**Målet:** At identitet og profil stemmer overens. Det bedriften vil være = det kundene opplever.`,
    },
    {
      id: 'salg-service-vg1-3-7-text-2',
      type: 'text',
      content: `### Elementer i visuell identitet

**Logo:**
- Symbolet som identifiserer merkevaren
- Bør være enkel, gjenkjennelig, tidløs
- Fungere i ulike størrelser og farger

**Fargepalett:**
- Hovedfarger og støttefarger
- Konsistent bruk overalt
- Farger skaper følelser og gjenkjennelse

**Typografi:**
- Skrifttyper for overskrifter og brødtekst
- Konsistent bruk i alt materiell
- Lesbarhet og personlighet

**Bildestil:**
- Type bilder (fotografier, illustrasjoner)
- Fargebehandling og stemning
- Konsistent "look and feel"

**Grafiske elementer:**
- Mønstre, ikoner, former
- Støtter den visuelle stilen
- Gjenkjennelige elementer`,
    },
    {
      id: 'salg-service-vg1-3-7-text-3',
      type: 'text',
      content: `### Merkeverdier og personlighet

**Merkeverdier** er kjerneprinsippene som styrer alt bedriften gjør:
- Hva står vi for?
- Hva er viktig for oss?
- Eksempler: innovasjon, bærekraft, kvalitet, tilgjengelighet

**Merkepersonlighet** er menneskelige trekk vi tilegner merkevaren:
- Hvis merkevaren var en person, hvem ville den vært?
- Profesjonell, leken, varm, modig, tradisjonell?

**Tone of voice** er måten merkevaren kommuniserer på:
- Formell eller uformell?
- Humoristisk eller seriøs?
- Direkte eller forsiktig?
- Konsistent i all kommunikasjon`,
    },
    {
      id: 'salg-service-vg1-3-7-text-4',
      type: 'text',
      content: `### Posisjonering

**Posisjonering** handler om hvordan merkevaren plasserer seg i forhold til konkurrentene:

**Spørsmål for posisjonering:**
- Hvem er vi til for? (målgruppe)
- Hva tilbyr vi? (kategori)
- Hva gjør oss unike? (differensiering)
- Hvorfor skal kundene velge oss? (verdiløfte)

**Eksempler på posisjonering:**
- IKEA: "Rimelige, funksjonelle møbler for alle"
- Dyreparken: "Norges beste familieopplevelse"
- Tesla: "Premium elektriske biler for fremtiden"

**Posisjoneringskart:**
Man kan tegne et kart med to akser (f.eks. pris og kvalitet) og plassere seg selv og konkurrenter. Hvor vil vi være?`,
    },
    {
      id: 'salg-service-vg1-3-7-tip-1',
      type: 'tip',
      title: 'Konsistens er nøkkelen',
      content: `En sterk merkevare er konsistent over tid og på tvers av alle kontaktpunkter. Logo, farger, tone og opplevelse skal være gjenkjennelig enten kunden er på nettsiden, i butikken, på Instagram eller snakker med kundeservice.`,
    },
    {
      id: 'salg-service-vg1-3-7-text-5',
      type: 'text',
      content: `### Merkevare og lønnsomhet

**Sterke merkevarer gir:**

*Høyere priser:*
- Kunder betaler for merkeverdier
- Premium-merkevarer tar høyere marginer
- Eksempel: Apple vs. ukjent merke

*Lavere markedsføringskostnader:*
- Kjente merkevarer trenger mindre annonsering
- Muntlig anbefaling fra lojale kunder
- Lettere å få oppmerksomhet

*Kundelojalitet:*
- Kunder kommer tilbake
- Mindre prisfølsomhet
- Anbefaler til andre

*Konkurransefortrinn:*
- Vanskelig for konkurrenter å kopiere
- Beskytter mot priskonkurranse
- Sterkere forhandlingsposisjon`,
    },
    {
      id: 'salg-service-vg1-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Merkevarebygging for en ny kafékjede',
      problem: 'En ny kafékjede vil bygge en sterk merkevare.',
      solution: `**Merkeverdier:**
- Lokalsamfunn: Støtter lokale leverandører og kunstnere
- Bærekraft: Økologisk kaffe, resirkulerbare kopper
- Kvalitet: Håndverkskaffe fra egne barister

**Visuell identitet:**
- Logo: Enkel illustrasjon av kaffekopp med hjerte
- Farger: Varme jordtoner (brun, terracotta, kremhvit)
- Typografi: Varm, håndskrevet-inspirert font
- Bildestil: Autentiske bilder av kaffe, mennesker, håndverk

**Tone of voice:**
- Varm og personlig
- Uformell men ikke fleip
- Bruker "vi" og "du"
- Forteller historier om kaffebøndene

**Posisjonering:**
"For lokale kaffeentusiaster som vil ha kvalitetskaffe med god samvittighet - i et fellesskap som bryr seg."

Dette gir en tydelig profil som skiller seg fra store kjeder.`,
    },
    {
      id: 'salg-service-vg1-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-7-ex-1',
        number: '3.7.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom merkevareidentitet og merkevareprofil?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
          { id: 'b', text: 'Identitet er det bedriften vil være, profil er det kundene oppfatter', isCorrect: true },
          { id: 'c', text: 'Identitet er logoen, profil er fargene', isCorrect: false },
          { id: 'd', text: 'Profil er det bedriften vil være, identitet er det kundene oppfatter', isCorrect: false },
        ],
        solution: 'Merkevareidentitet er det bedriften ønsker å være (innsiden), mens merkevareprofil (image) er det kundene faktisk oppfatter (utsiden).',
      },
    },
    {
      id: 'salg-service-vg1-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-7-ex-2',
        number: '3.7.2',
        type: 'classic',
        task: 'Hvorfor kan sterke merkevarer ta høyere priser?',
        hints: ['Tenk på hva kunder betaler for utover selve produktet'],
        solution: 'Sterke merkevarer tilbyr mer enn bare produktet - de tilbyr tilhørighet, status, tillit og følelser. Kunder betaler for trygghet (vet hva de får), identitet (hva merkevaren sier om dem), og opplevelsen. En Rolex-klokke viser ikke tiden bedre enn en billig klokke, men den signaliserer noe annet.',
      },
    },
    {
      id: 'salg-service-vg1-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-7-ex-3',
        number: '3.7.3',
        type: 'classic',
        task: 'Analyser den visuelle identiteten til en merkevare du kjenner.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv logoen.',
            solution: 'Eksempel (Starbucks): Grønn sirkulær logo med en sirene/havfrue. Enkel, gjenkjennelig, fungerer i alle størrelser.',
          },
          {
            label: 'b',
            task: 'Beskriv fargene.',
            solution: 'Grønn (natur, friskhet, premium kaffe), hvit, brun. Konsistent på alt fra kopper til butikkinteriør.',
          },
          {
            label: 'c',
            task: 'Beskriv personligheten/tone of voice.',
            solution: 'Vennlig og urban. Personlig ("Hva heter du?"), sofistikert men tilgjengelig. Fokus på "third place" mellom hjem og jobb.',
          },
        ],
        solution: 'En sterk visuell identitet er konsistent og støtter merkevarens verdier og personlighet.',
      },
    },
    {
      id: 'salg-service-vg1-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-7-ex-4',
        number: '3.7.4',
        type: 'classic',
        task: 'Lag en enkel posisjonering for en fiktiv virksomhet.',
        solution: 'Eksempel - "GreenBike" sykkelutleie: Målgruppe: Turister og lokalbefolkning i Oslo som vil oppleve byen miljøvennlig. Kategori: Sykkelutleie og guidede sykkelturer. Differensiering: Elektriske sykler, lokal kunnskap, fokus på skjulte perler utenfor turiststiene. Verdiløfte: "Oppdag den ekte Oslo på to hjul - miljøvennlig, lokalt og enkelt." Posisjoneringssetning: "GreenBike er for urbane oppdagere som vil oppleve Oslo som en lokal - med elsykkel, lokale guides og tilgang til byens beste hemmeligheter."',
      },
    },
    {
      id: 'salg-service-vg1-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-3-7-ex-5',
        number: '3.7.5',
        type: 'classic',
        task: 'Hvorfor er konsistens viktig i merkevarebygging?',
        solution: 'Konsistens er viktig fordi: 1) Gjenkjennelse - kunder kjenner igjen merkevaren overalt. 2) Tillit - forutsigbarhet skaper trygghet. 3) Profesjonalitet - inkonsistens virker rotete og useriøst. 4) Effektivitet - gjentagelse forsterker budskapet over tid. 5) Verdi - en konsistent merkevare bygger sterkere assosiasjoner og er mer verdt. Eksempel: Coca-Cola har brukt samme røde farge og skrifttype i over 100 år.',
      },
    },
    {
      id: 'salg-service-vg1-3-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **merkevare** er summen av alle kundens assosiasjoner og opplevelser
- **Visuell identitet** inkluderer logo, farger, typografi og bildestil
- **Posisjonering** handler om å skille seg ut fra konkurrentene
- **Sterke merkevarer** gir høyere priser, lojalitet og konkurransefortrinn

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Merkevare | Kundens totale oppfatning av virksomheten |
| Visuell identitet | Logo, farger, typografi, bildestil |
| Posisjonering | Hvordan merkevaren skiller seg ut |
| Tone of voice | Merkevarens måte å kommunisere på |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL3_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_3_1,
  CHAPTER_SALG_SERVICE_VG1_3_2,
  CHAPTER_SALG_SERVICE_VG1_3_3,
  CHAPTER_SALG_SERVICE_VG1_3_4,
  CHAPTER_SALG_SERVICE_VG1_3_5,
  CHAPTER_SALG_SERVICE_VG1_3_6,
  CHAPTER_SALG_SERVICE_VG1_3_7,
];
