/* eslint-disable */
// @ts-nocheck
/**
 * Kommunikasjon og kultur 2 – Del 1: Avansert kommunikasjonsteori
 * Kapittel 1.1–1.5
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Sapir-Whorf-hypotesen
// ============================================================================

export const CHAPTER_KOMKULT2_1_1: TextbookChapter = {
  id: 'komkult2-1-1',
  courseId: 'komkult-2',
  chapterNumber: '1.1',
  title: 'Sapir-Whorf-hypotesen',
  description: 'Forholdet mellom språk og tenkning, lingvistisk relativisme og determinisme, moderne forskning på språkets innflytelse.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for Sapir-Whorf-hypotesen og dens betydning for forståelsen av forholdet mellom språk og tenkning',
    'drøfte i hvilken grad språk former vår oppfatning av virkeligheten',
  ],
  content: [
    {
      id: 'kk2-1-1-intro',
      type: 'text',
      content: `# Sapir-Whorf-hypotesen

Kan språket du snakker påvirke hvordan du tenker? Kan det til og med forme hva du er i stand til å oppfatte? Dette er spørsmål som har fascinert språkforskere, filosofer og psykologer i over hundre år.

I dette kapittelet utforsker vi Sapir-Whorf-hypotesen, en av de mest innflytelsesrike teoriene innen lingvistikk og kommunikasjon. Hypotesen hevder at språket vi bruker ikke bare er et verktøy for å uttrykke tanker, men at det aktivt former hvordan vi oppfatter og kategoriserer verden rundt oss.

**Hvorfor er dette relevant for kommunikasjon og kultur?**
- Språklige forskjeller kan skape kommunikasjonsbarrierer mellom kulturer
- Oversettelse mellom språk er aldri nøytral, men innebærer kulturell tolkning
- Medienes språkbruk påvirker hvordan vi forstår samfunnsspørsmål
- Politisk retorikk bruker bevisst språk for å forme oppfatninger`,
    },
    {
      id: 'kk2-1-1-def-1',
      type: 'definition',
      title: 'Sapir-Whorf-hypotesen',
      content: `**Sapir-Whorf-hypotesen** (også kalt lingvistisk relativisme) ble utviklet av språkforskerne Edward Sapir og Benjamin Lee Whorf på 1930-tallet. Hypotesen finnes i to versjoner:

**Sterk versjon – lingvistisk determinisme:**
Språk bestemmer tenkning. Vi kan ikke tenke tanker som språket vårt ikke har ord eller strukturer for. Språket setter absolutte grenser for kognisjon.

**Svak versjon – lingvistisk relativisme:**
Språk påvirker tenkning. Språket vårt gjør det lettere å tenke visse tanker og vanskeligere å tenke andre, men det setter ikke absolutte grenser for hva vi kan oppfatte.

**Nøkkelbegreper:**
- **Lingvistisk determinisme:** Språk bestemmer tankemønstre
- **Lingvistisk relativisme:** Språk påvirker, men bestemmer ikke, tankemønstre
- **Språklig relativitet:** Ulike språk gir ulike perspektiver på virkeligheten
- **Kognitiv kategorisering:** Måten språk deler verden inn i kategorier på`,
    },
    {
      id: 'kk2-1-1-example-1',
      type: 'example',
      title: 'Fargeoppfatning på tvers av språk',
      problem: 'Hvordan kan ulike språks fargebegreper illustrere Sapir-Whorf-hypotesen?',
      solution: `**Fargeord og persepsjon:**

Russisk har to separate ord for det vi på norsk kaller «blå»: *goluboy* (lyseblå) og *siniy* (mørkeblå). Studier har vist at russisktalende skiller raskere mellom lyseblå og mørkeblå nyanser enn engelsktalende som bare har ordet «blue».

**Pirahã-folket i Amazonas:**
Pirahã-språket har svært få fargeord – trolig bare uttrykk for «lys» og «mørk». Forskning tyder på at pirahã-talende likevel kan oppfatte fargeforskjeller, men de kategoriserer dem annerledes.

**Hopi-indianerne (Whorfs klassiske eksempel):**
Whorf hevdet at hopi-språket mangler tidsformer som fortid og nåtid, og at hopi-indianerne derfor opplever tid annerledes. Senere forskning har vist at Whorfs beskrivelse var unøyaktig, men diskusjonen han startet har vært svært fruktbar.

**Hva viser dette?**
Den sterke versjonen stemmer trolig ikke – alle mennesker kan oppfatte farger uavhengig av språk. Men den svake versjonen støttes: språklige kategorier påvirker hvor raskt og automatisk vi oppfatter forskjeller.`,
    },
    {
      id: 'kk2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom den sterke og den svake versjonen av Sapir-Whorf-hypotesen?',
        options: [
          { id: 'a', text: 'Den sterke versjonen hevder at språk bestemmer tenkning, den svake at språk påvirker tenkning', isCorrect: true },
          { id: 'b', text: 'Den sterke versjonen gjelder skriftspråk, den svake gjelder talespråk', isCorrect: false },
          { id: 'c', text: 'Den sterke versjonen handler om grammatikk, den svake om ordforråd', isCorrect: false },
          { id: 'd', text: 'Den sterke versjonen er nyere enn den svake', isCorrect: false },
        ],
        hints: ['Tenk på forskjellen mellom «bestemme» og «påvirke» – det er nøkkelen.'],
        solution: 'Den sterke versjonen (lingvistisk determinisme) hevder at språk bestemmer hva vi kan tenke – altså at språket setter absolutte grenser. Den svake versjonen (lingvistisk relativisme) hevder at språk påvirker tenkning, men at vi likevel kan tenke utover språkets kategorier.',
      },
    },
    {
      id: 'kk2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende påstander støttes best av moderne forskning på Sapir-Whorf-hypotesen?',
        options: [
          { id: 'a', text: 'Språk påvirker hvor raskt vi kategoriserer visse fenomener, men setter ikke absolutte grenser for tenkning', isCorrect: true },
          { id: 'b', text: 'Språk har ingen innflytelse på tenkning overhodet', isCorrect: false },
          { id: 'c', text: 'Mennesker med ulike morsmål lever i helt forskjellige virkeligheter', isCorrect: false },
          { id: 'd', text: 'Bare indoeuropeiske språk påvirker tenkning', isCorrect: false },
        ],
        hints: ['Moderne forskning har funnet at sannheten ligger mellom de to ekstremene.'],
        solution: 'Moderne forskning støtter i hovedsak den svake versjonen: språk påvirker kognitive prosesser som kategorisering og persepsjon, men setter ikke absolutte grenser for hva vi kan oppfatte eller tenke. Studier av fargeoppfatning på tvers av språk er et godt eksempel.',
      },
    },
    {
      id: 'kk2-1-1-def-2',
      type: 'definition',
      title: 'Moderne perspektiver på språk og tenkning',
      content: `Etter Sapir og Whorf har forskningen gått videre. Flere sentrale perspektiver har utviklet seg:

**Neowhorfianisme:**
Nyere forskning som bruker eksperimentelle metoder for å teste den svake versjonen. Studier av romlig orientering, tidsforståelse og fargeoppfatning gir delvis støtte til at språk påvirker tenkning.

**Lera Boroditsky:**
Har vist at spansktakende og tysktalende beskriver objekter ulikt basert på om substantivet er hankjønn eller hunkjønn i deres språk. Språkets grammatiske kjønn påvirker assosiasjonene.

**George Lakoff – konseptuelle metaforer:**
Hevder at abstrakt tenkning bygger på metaforer fra konkret erfaring, og at disse metaforene varierer mellom språk og kulturer. «Tid er penger» er en metafor som former vestlig tidsforståelse.

**Kontekstuell lingvistikk:**
Språkets innflytelse på tenkning varierer med kontekst. I situasjoner med tidspress er språklig påvirkning sterkere enn i situasjoner med tid til refleksjon.`,
    },
    {
      id: 'kk2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norsk har ett ord for «snø», mens samiske språk har svært mange ulike ord for snø. Drøft hva dette kan bety for oppfatningen av vinterforhold, med utgangspunkt i Sapir-Whorf-hypotesens svake versjon.',
        hints: [
          'Tenk på hvordan et rikere ordforråd innenfor et felt kan gjøre det lettere å legge merke til nyanser.',
          'Vurder om det er språket som skaper oppmerksomheten, eller om oppmerksomheten skaper språket.',
        ],
        solution: 'Med utgangspunkt i den svake versjonen kan man argumentere for at samisktalende, med sitt rike ordforråd for snø, trolig oppfatter og kategoriserer nyanser i snøforhold raskere og mer automatisk enn norsktalende. Samtidig kan man drøfte om det er miljøet (behovet for å skille mellom snøtyper i reindrift) som har skapt ordene, snarere enn omvendt. Dette illustrerer et sentralt spørsmål: Er det språket som former oppfatningen, eller er det behovene i kulturen som former språket?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'George Lakoff hevder at metaforen «tid er penger» preger vestlig kultur. Finn tre eksempler fra dagliglivet der denne metaforen brukes, og drøft om den kan påvirke vår faktiske opplevelse av tid.',
        hints: [
          'Tenk på uttrykk som «bruke tid», «spare tid», «sløse med tid».',
          'Vurder hvordan en kultur uten denne metaforen kanskje ville forholdt seg til tid.',
        ],
        solution: 'Eksempler: «Denne møtet kostet meg to timer», «Jeg har ikke råd til å bruke tid på det», «Han sløser med tiden sin». Alle eksemplene behandler tid som en begrenset ressurs som kan investeres, spares eller kastes bort – akkurat som penger. Drøftingen bør ta opp at denne metaforen kan forsterke stress og tidspress i vestlig kultur. Kulturer som mangler denne metaforen kan ha et mer syklisk eller fleksibelt forhold til tid, noe som kan påvirke stressnivå og livskvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-1-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Sapir-Whorf-hypotesen handler om forholdet mellom språk og tenkning
- Den sterke versjonen (lingvistisk determinisme) hevder at språk bestemmer tenkning
- Den svake versjonen (lingvistisk relativisme) hevder at språk påvirker tenkning
- Moderne forskning støtter i hovedsak den svake versjonen
- Eksempler fra fargeoppfatning, tidsforståelse og romlig orientering viser at språklige kategorier påvirker kognitive prosesser
- George Lakoffs teori om konseptuelle metaforer viser hvordan språklige bilder former abstrakt tenkning`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lera Boroditsky har forsket på hvordan grammatisk kjønn påvirker tenkning. Forklar hva hun fant, og drøft om resultatene støtter den sterke eller svake versjonen av Sapir-Whorf-hypotesen.',
        hints: [
          'Tenk på at spansk og tysk har ulikt grammatisk kjønn for de samme objektene.',
          'Vurder om dette viser at språk bestemmer eller påvirker tenkning.',
        ],
        solution: 'Boroditsky fant at spansktalende og tysktalende beskrev objekter med ulike egenskaper basert på om substantivet var hankjønn eller hunkjønn i deres språk. For eksempel ble «bro» (hunkjønn på tysk, hankjønn på spansk) beskrevet som «elegant» av tyskere og «sterk» av spansktalende. Dette støtter den svake versjonen (lingvistisk relativisme) fordi språk påvirker assosiasjoner, men ikke setter absolutte grenser for tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand med utgangspunkt i Sapir-Whorf-hypotesen: «Medienes språkbruk om innvandring former folks holdninger til innvandring.» Bruk begreper som lingvistisk relativisme, konseptuelle metaforer og framing i svaret ditt.',
        hints: [
          'Tenk på hvordan ord som «strøm», «bølge» og «krise» skaper bestemte assosiasjoner.',
          'Vurder om det finnes alternative språklige rammer for å snakke om innvandring.',
        ],
        solution: 'Drøftingen bør koble Sapir-Whorf til mediespråk: Begreper som «flyktningstrøm» bruker vannmetaforer som konnoterer noe ukontrollerbart og truende. Ifølge lingvistisk relativisme påvirker slike metaforer hvordan mottakerne tenker om fenomenet. Framing innebærer at mediene velger perspektiv gjennom språkvalg. Alternative framinger (som «mennesker som søker trygghet») ville gitt andre assosiasjoner. Man bør vurdere styrken i språklig påvirkning – determinisme vs. relativisme – og drøfte om bevissthet om slike mekanismer kan motvirke effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sapir-Whorf-hypotesen', definition: 'Teori om at språk påvirker eller bestemmer tenkning, utviklet av Edward Sapir og Benjamin Lee Whorf.' },
    { term: 'Lingvistisk determinisme', definition: 'Den sterke versjonen: Språk bestemmer hva vi kan tenke.' },
    { term: 'Lingvistisk relativisme', definition: 'Den svake versjonen: Språk påvirker tenkning, men setter ikke absolutte grenser.' },
    { term: 'Konseptuelle metaforer', definition: 'George Lakoffs begrep for språklige bilder som former abstrakt tenkning, f.eks. «tid er penger».' },
    { term: 'Neowhorfianisme', definition: 'Moderne retning som bruker eksperimenter for å teste den svake versjonen av Sapir-Whorf.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Diskursanalyse og Foucault
// ============================================================================

export const CHAPTER_KOMKULT2_1_2: TextbookChapter = {
  id: 'komkult2-1-2',
  courseId: 'komkult-2',
  chapterNumber: '1.2',
  title: 'Diskursanalyse og Foucault',
  description: 'Michel Foucaults diskursbegrep, makt og kunnskap, diskursanalyse som metode for å avdekke maktstrukturer i kommunikasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for Michel Foucaults diskursbegrep og forholdet mellom makt og kunnskap',
    'anvende diskursanalyse som metode for å analysere kommunikasjon og maktstrukturer',
  ],
  content: [
    {
      id: 'kk2-1-2-intro',
      type: 'text',
      content: `# Diskursanalyse og Foucault

Hvem bestemmer hva som er «sant» i et samfunn? Hvorfor er visse måter å snakke om ting på aksepterte, mens andre blir avvist? Den franske filosofen Michel Foucault (1926–1984) var opptatt av nettopp disse spørsmålene.

Foucault argumenterte for at makt ikke bare utøves gjennom lover og tvang, men gjennom språk og kunnskap. De som kontrollerer hva som regnes som «sant» og «normalt», har en enorm makt – selv om denne makten ofte er usynlig.

I dette kapittelet lærer vi om Foucaults diskursbegrep og hvordan diskursanalyse kan brukes til å avdekke skjulte maktstrukturer i kommunikasjon.

**Hvorfor er dette viktig?**
- Forstå hvordan medier og institusjoner former oppfatninger av virkeligheten
- Avdekke hvordan språk kan ekskludere og inkludere
- Utvikle kritisk bevissthet om maktforhold i kommunikasjon`,
    },
    {
      id: 'kk2-1-2-def-1',
      type: 'definition',
      title: 'Foucaults diskursbegrep',
      content: `**Diskurs** hos Foucault er ikke bare tale eller tekst, men hele systemer av utsagn som produserer kunnskap om et emne. En diskurs definerer hva som er mulig å si, tenke og gjøre innenfor et bestemt felt.

**Sentrale begreper hos Foucault:**

**Diskursiv formasjon:**
Et mønster av utsagn, regler og praksiser som sammen utgjør en diskurs. For eksempel utgjør alt som sies, skrives og gjøres innenfor psykiatrien en diskursiv formasjon om «galskap».

**Makt/kunnskap (pouvoir/savoir):**
Makt og kunnskap er uadskillelige. Den som definerer hva som er «kunnskap» innenfor et felt, utøver makt. Ekspertdiskurser (medisin, juss, psykologi) produserer «sannheter» som styrer menneskers liv.

**Diskursorden:**
Reglene for hva som kan sies, hvem som kan snakke, og i hvilke sammenhenger. Ikke alle har lik tilgang til alle diskurser.

**Subjektposisjon:**
Diskurser skaper posisjoner mennesker kan innta – f.eks. «pasient», «kriminell», «ekspert». Disse posisjonene definerer identitet og handlingsrom.`,
    },
    {
      id: 'kk2-1-2-example-1',
      type: 'example',
      title: 'Diskursanalyse av helsekommunikasjon',
      problem: 'Hvordan kan diskursanalyse avdekke maktforhold i kommunikasjon mellom lege og pasient?',
      solution: `**Situasjon:** En pasient oppsøker legen med smerter. Legen sier: «Prøvene viser ingen funn. Det er nok stressrelatert.»

**Diskursanalyse:**

**Diskursorden:**
Legekontoret er en arena der den medisinske diskursen dominerer. Legen har rett til å definere hva som er «virkelig» sykdom og hva som ikke er det.

**Makt/kunnskap:**
Legens kunnskap (medisinstudiet, prøveresultatene) gir makt til å avvise pasientens opplevelse. Pasientens erfaringskunnskap om egen kropp har lavere status enn legens vitenskapelige kunnskap.

**Subjektposisjoner:**
- Legen inntar posisjonen som «ekspert» med rett til å diagnostisere
- Pasienten plasseres i posisjonen «pasient» som skal motta, ikke produsere, kunnskap
- Om pasienten protesterer, kan hen bli definert som «vanskelig»

**Konsekvens:**
Den medisinske diskursen kan ekskludere pasientens opplevelse. Diskursanalysen avdekker at dette ikke bare er et individuelt kommunikasjonsproblem, men et strukturelt maktforhold.`,
    },
    {
      id: 'kk2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med Foucaults begrep «makt/kunnskap»?',
        options: [
          { id: 'a', text: 'Makt og kunnskap er uadskillelige – den som definerer kunnskap, utøver makt', isCorrect: true },
          { id: 'b', text: 'Kunnskap gir automatisk politisk makt', isCorrect: false },
          { id: 'c', text: 'Makt og kunnskap er motsetninger som utelukker hverandre', isCorrect: false },
          { id: 'd', text: 'Bare akademikere har både makt og kunnskap', isCorrect: false },
        ],
        hints: ['Tenk på hvem som bestemmer hva som er «sant» i ulike sammenhenger.'],
        solution: 'Foucault hevder at makt og kunnskap er uadskillelige (pouvoir/savoir). Den som har makt til å definere hva som regnes som gyldig kunnskap, utøver makt over de som underlegges denne kunnskapen. Ekspertdiskurser (medisin, juss, psykiatri) er gode eksempler på dette.',
      },
    },
    {
      id: 'kk2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en «subjektposisjon» i Foucaults diskursteori?',
        options: [
          { id: 'a', text: 'En rolle eller identitet som diskursen skaper og gjør tilgjengelig for mennesker', isCorrect: true },
          { id: 'b', text: 'En fysisk posisjon i et klasserom', isCorrect: false },
          { id: 'c', text: 'Det samme som en politisk posisjon', isCorrect: false },
          { id: 'd', text: 'En subjektiv mening om et tema', isCorrect: false },
        ],
        hints: ['Tenk på hvordan begreper som «pasient» eller «kriminell» definerer en persons posisjon i samfunnet.'],
        solution: 'En subjektposisjon er en rolle eller identitet som en diskurs skaper. Diskurser definerer hvem som kan være «ekspert», «pasient», «avviker» osv. Disse posisjonene påvirker hvordan mennesker oppfatter seg selv og blir behandlet av andre.',
      },
    },
    {
      id: 'kk2-1-2-def-2',
      type: 'definition',
      title: 'Diskursanalyse som metode',
      content: `**Diskursanalyse** er en kvalitativ analysemetode som undersøker hvordan språkbruk konstruerer virkelighetsforståelse og maktforhold.

**Tre sentrale tilnærminger:**

**1. Foucauldiansk diskursanalyse:**
Fokuserer på store, historiske diskurser og hvordan de former institusjoner og praksiser. Spør: Hvilke «sannheter» tas for gitt? Hvem tjener på at det er slik?

**2. Kritisk diskursanalyse (Norman Fairclough):**
Analyserer konkrete tekster for å avdekke ideologier og maktrelasjoner. Ser på forholdet mellom tekst, diskursiv praksis (produksjon og konsumpsjon) og sosial praksis.

**3. Diskurspsykologi (Jonathan Potter & Margaret Wetherell):**
Undersøker hvordan mennesker bruker språk strategisk i hverdagslig kommunikasjon for å oppnå bestemte ting.

**Sentrale spørsmål i diskursanalyse:**
- Hvilke begreper og kategorier brukes?
- Hva tas for gitt (naturalisering)?
- Hvem får komme til orde, og hvem blir tiet?
- Hvilke interesser tjenes av denne framstillingen?`,
    },
    {
      id: 'kk2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en nyhetsartikkel om et kontroversielt tema (f.eks. klima, innvandring eller likestilling). Still følgende spørsmål til teksten: 1) Hvilke begreper og kategorier brukes? 2) Hva tas for gitt? 3) Hvem får komme til orde? 4) Hvilke interesser kan teksten tjene?',
        hints: [
          'Start med å identifisere nøkkelordene som brukes for å beskrive fenomenet.',
          'Legg merke til hvem som siteres som eksperter og hvem som ikke nevnes.',
        ],
        solution: 'Analysen bør identifisere sentrale begreper (f.eks. «klimakrise» vs. «klimaendring»), peke på hva som presenteres som selvfølgelig, vise hvem som har stemme i artikkelen (eksperter, politikere, berørte), og reflektere over hvilke interesser denne framstillingen kan tjene. Det er viktig å vise at teksten ikke er nøytral, men representerer en bestemt diskursiv posisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva Foucault mener med at «diskurser produserer sannheter». Bruk et konkret eksempel fra enten skole, helsevesen eller rettsvesen for å illustrere svaret ditt.',
        hints: [
          'Tenk på hvordan eksperter innenfor et felt definerer hva som er «normalt» og «avvikende».',
          'Hvem har makt til å stille diagnoser, gi karakterer eller dømme?',
        ],
        solution: 'Diskurser produserer sannheter ved å definere rammene for hva som kan sies og tenkes. Eksempel fra skolen: Den pedagogiske diskursen definerer hva som er «normalutvikling» og «lærevansker». Når en elev får diagnosen ADHD, produserer den medisinske og pedagogiske diskursen en «sannhet» om eleven. Denne sannheten påvirker hvordan eleven forstår seg selv og behandles av andre. Foucaults poeng er at slike sannheter ikke er objektive fakta, men produkter av maktrelasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-2-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Michel Foucault forstår diskurser som systemer av utsagn som produserer kunnskap og sannhet
- Makt og kunnskap er uadskillelige – den som definerer kunnskap, utøver makt
- Diskurser skaper subjektposisjoner som definerer menneskers roller og identiteter
- Diskursanalyse er en metode for å avdekke skjulte maktstrukturer i kommunikasjon
- Det finnes tre hovedtilnærminger: foucauldiansk, kritisk (Fairclough) og diskurspsykologisk
- Sentrale spørsmål handler om språkbruk, naturalisering, stemmer og interesser`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign kritisk diskursanalyse (Fairclough) med foucauldiansk diskursanalyse. Hva er forskjellene i fokus og metode? Hvilken tilnærming egner seg best for å analysere en konkret medietekst?',
        hints: [
          'Fairclough analyserer konkrete tekster, mens Foucault ser på store historiske diskurser.',
          'Tenk på hva som er mest praktisk nyttig i en klasseromsanalyse.',
        ],
        solution: 'Faircloughs kritiske diskursanalyse fokuserer på analyse av konkrete tekster og deres relasjon til diskursiv praksis og sosial praksis – altså en tredelt analysemodell. Foucauldiansk diskursanalyse er mer opptatt av store historiske diskurser og hvordan de former institusjoner over tid. For analyse av en konkret medietekst egner Faircloughs modell seg bedre, fordi den gir verktøy for å analysere tekstens språklige detaljer (ordvalg, grammatikk), dens produksjon og konsumpsjon, og dens bredere sosiale kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan sosiale medier (som TikTok, Instagram eller YouTube) kan forstås med Foucaults diskursbegrep. Hvem har makt til å definere hva som er «vellykket liv» på disse plattformene? Hvilke subjektposisjoner skapes?',
        hints: [
          'Tenk på algoritmenes rolle i å bestemme hva som er synlig og usynlig.',
          'Reflekter over skjønnhetsidealer, livsstil og suksessdiskurser i sosiale medier.',
        ],
        solution: 'Drøftingen bør ta opp at sosiale medier skaper diskurser om «det gode liv» gjennom influencere, algoritmer og brukerkultur. Algoritmer fungerer som diskursordener – de bestemmer hva som er synlig. Subjektposisjoner som «influencer», «follower», «hater» skapes av plattformenes diskurser. Makt/kunnskap vises ved at «antall følgere» blir en form for kunnskap som gir makt. Det som naturaliseres, er at synlighet og popularitet er mål på verdi. En god drøfting bør vurdere både mulighetene (marginaliserte stemmer kan bli hørt) og begrensningene (kommersielle interesser styrer algoritmene).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Diskurs', definition: 'System av utsagn som produserer kunnskap om et emne og definerer hva som er mulig å si og tenke.' },
    { term: 'Makt/kunnskap', definition: 'Foucaults begrep for at makt og kunnskap er uadskillelige – den som definerer kunnskap, utøver makt.' },
    { term: 'Subjektposisjon', definition: 'En rolle eller identitet som diskursen gjør tilgjengelig for mennesker, f.eks. «pasient» eller «ekspert».' },
    { term: 'Diskursorden', definition: 'Reglene for hva som kan sies, hvem som kan snakke, og i hvilke sammenhenger.' },
    { term: 'Kritisk diskursanalyse', definition: 'Faircloughs metode for å analysere forholdet mellom tekst, diskursiv praksis og sosial praksis.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Habermas og kommunikativ handling
// ============================================================================

export const CHAPTER_KOMKULT2_1_3: TextbookChapter = {
  id: 'komkult2-1-3',
  courseId: 'komkult-2',
  chapterNumber: '1.3',
  title: 'Habermas og kommunikativ handling',
  description: 'Jürgen Habermas\' teori om kommunikativ handling, den ideelle samtalesituasjonen, og offentlighet som arena for demokratisk diskusjon.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for Habermas\' teori om kommunikativ handling og dens betydning for demokratisk kommunikasjon',
    'drøfte idealet om den herredømmefrie samtalen og vurdere dets relevans i dagens mediesamfunn',
  ],
  content: [
    {
      id: 'kk2-1-3-intro',
      type: 'text',
      content: `# Habermas og kommunikativ handling

Kan kommunikasjon være grunnlaget for et rettferdig samfunn? Den tyske filosofen og sosiologen Jürgen Habermas (f. 1929) mener det. Han utviklet en teori der kommunikasjon ikke bare er informasjonsutveksling, men selve grunnlaget for demokrati og rettferdighet.

Habermas' prosjekt var å finne ut hvordan mennesker kan oppnå gjensidig forståelse og enighet gjennom samtale – uten at makt, tvang eller manipulasjon avgjør utfallet. Han kalte dette **kommunikativ handling**.

**Hvorfor er Habermas relevant i dag?**
- Debatten om «ekkokamre» og polarisering i sosiale medier
- Spørsmålet om falske nyheter og hva som er «sannhet»
- Demokratiets behov for offentlig debatt basert på argumenter
- Forholdet mellom massemedier, makt og folkeopinion`,
    },
    {
      id: 'kk2-1-3-def-1',
      type: 'definition',
      title: 'Kommunikativ handling og gyldighetskrav',
      content: `**Kommunikativ handling** er Habermas' begrep for samtaler der deltakerne forsøker å oppnå gjensidig forståelse gjennom argumenter, ikke gjennom makt eller manipulasjon.

**Strategisk handling vs. kommunikativ handling:**
- **Strategisk handling:** Mål er å påvirke den andre for å oppnå egne mål. Argumenter brukes som virkemidler, ikke for å finne sannhet.
- **Kommunikativ handling:** Mål er gjensidig forståelse. Deltakerne er villige til å la det bedre argumentet vinne.

**Fire gyldighetskrav i kommunikativ handling:**
Enhver talehandling reiser implisitt fire krav som kan utfordres:

1. **Sannhet (Wahrheit):** Det som sies, stemmer med virkeligheten
2. **Riktighet (Richtigkeit):** Det som sies, er normativt akseptabelt i sammenhengen
3. **Oppriktighet (Wahrhaftigkeit):** Taleren mener det hen sier
4. **Forståelighet (Verständlichkeit):** Ytringen er grammatisk og meningsfull

Når et gyldighetskrav utfordres, må det begrunnes gjennom diskurs.`,
    },
    {
      id: 'kk2-1-3-example-1',
      type: 'example',
      title: 'Gyldighetskravene i praksis',
      problem: 'Hvordan kan vi bruke Habermas\' fire gyldighetskrav til å analysere en politisk debatt?',
      solution: `**Situasjon:** En politiker sier i en debatt: «Kriminaliteten øker dramatisk, og vi må innføre strengere straffer.»

**Analyse av gyldighetskravene:**

**1. Sannhet:**
Stemmer det at kriminaliteten øker dramatisk? Vi kan sjekke kriminalstatistikken. Dersom tallene viser nedgang, brytes sannhetskravet.

**2. Riktighet:**
Er det normativt akseptabelt å foreslå strengere straffer? I en demokratisk debatt er dette et legitimt standpunkt, men man kan utfordre om det er riktig i lys av forskning på straff og rehabilitering.

**3. Oppriktighet:**
Mener politikeren virkelig det hen sier, eller er det en strategisk uttalelse for å vinne velgere? Dersom politikeren selv har stemt mot strengere straffer, kan opriktighetskravet utfordres.

**4. Forståelighet:**
Er utsagnet formulert klart nok til at vi forstår hva som menes? Hva betyr «dramatisk»? Hva innebærer «strengere straffer» konkret?

**Vurdering:** Habermas' rammeverk gir oss verktøy for å evaluere kvaliteten på offentlig debatt.`,
    },
    {
      id: 'kk2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom kommunikativ handling og strategisk handling ifølge Habermas?',
        options: [
          { id: 'a', text: 'Kommunikativ handling søker gjensidig forståelse, strategisk handling søker å påvirke for egne mål', isCorrect: true },
          { id: 'b', text: 'Kommunikativ handling er muntlig, strategisk handling er skriftlig', isCorrect: false },
          { id: 'c', text: 'Strategisk handling er mer effektiv enn kommunikativ handling', isCorrect: false },
          { id: 'd', text: 'Kommunikativ handling skjer bare i politikken', isCorrect: false },
        ],
        hints: ['Tenk på hva som er målet med samtalen – forstå hverandre eller oppnå noe?'],
        solution: 'I kommunikativ handling forsøker deltakerne å oppnå gjensidig forståelse gjennom argumenter. I strategisk handling bruker deltakerne kommunikasjon som et middel for å oppnå egne mål, for eksempel å overbevise noen eller vinne en debatt.',
      },
    },
    {
      id: 'kk2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke av følgende er blant Habermas\' fire gyldighetskrav?',
        options: [
          { id: 'a', text: 'Sannhet, riktighet, oppriktighet og forståelighet', isCorrect: true },
          { id: 'b', text: 'Effektivitet, tydelighet, relevans og originalitet', isCorrect: false },
          { id: 'c', text: 'Logikk, empiri, autoritet og tradisjon', isCorrect: false },
          { id: 'd', text: 'Frihet, likhet, brorskap og solidaritet', isCorrect: false },
        ],
        hints: ['Hvert krav handler om en ulik dimensjon av ytringen – er den sann? Er den normativt ok? Er den oppriktig? Er den forståelig?'],
        solution: 'Habermas hevder at enhver talehandling implisitt reiser fire gyldighetskrav: sannhet (stemmer det med virkeligheten?), riktighet (er det normativt akseptabelt?), oppriktighet (mener taleren det?) og forståelighet (er ytringen begripelig?).',
      },
    },
    {
      id: 'kk2-1-3-def-2',
      type: 'definition',
      title: 'Den ideelle samtalesituasjonen og offentligheten',
      content: `**Den ideelle samtalesituasjonen (die ideale Sprechsituation):**
Habermas beskriver en tenkt situasjon der kommunikativ handling kan fungere perfekt. I denne situasjonen gjelder:

- Alle berørte parter har lik rett til å delta i diskusjonen
- Alle kan fremme og utfordre ethvert argument
- Ingen tvinges, trues eller manipuleres
- Det er bare argumentets kraft (den egentümliche zwanglose Zwang des besseren Arguments) som avgjør utfallet
- Deltakerne er oppriktige og søker sannhet, ikke seier

**Den borgerlige offentligheten:**
Habermas beskrev i *Borgerlig offentlighet* (1962) hvordan det i opplysningstiden oppsto en offentlig sfære – kaffehus, salongkultur, aviser – der borgere diskuterte politikk uavhengig av staten.

**Systemkolonisering av livsverden:**
Habermas advarte mot at systemets logikk (penger og byråkrati) trenger inn i og ødelegger kommunikativ rasjonalitet i hverdagslivet. Når samtaler blir styrt av penger og makt i stedet for argumenter, svekkes demokratiet.`,
    },
    {
      id: 'kk2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder om en debatt i kommentarfeltet på en nyhetsartikkel oppfyller kravene til Habermas\' ideelle samtalesituasjon. Begrunn svaret med konkrete eksempler.',
        hints: [
          'Tenk på om alle har lik mulighet til å delta og bli hørt.',
          'Vurder om argumentene eller andre virkemidler (personangrep, trusler) styrer debatten.',
        ],
        solution: 'Kommentarfelt oppfyller sjelden den ideelle samtalesituasjonen: 1) Ikke alle har lik tilgang – noen mangler digitale ferdigheter. 2) Anonymitet kan føre til personangrep og trakassering fremfor saklige argumenter. 3) Algoritmer kan forsterke visse stemmer og undertrykke andre. 4) Kommersielle interesser (klikk, engasjement) kan styre hva som blir synlig. Samtidig kan kommentarfelt være demokratiserende ved at de senker terskelen for deltakelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Habermas fryktet «systemkolonisering av livsverden». Gi to eksempler fra dagens samfunn der økonomisk logikk (penger) eller byråkratisk logikk (regler) kan true kommunikativ rasjonalitet.',
        hints: [
          'Tenk på situasjoner der penger eller effektivitetskrav påvirker kommunikasjon mellom mennesker.',
          'Helsevesenet, skolen og familien kan være gode eksempler.',
        ],
        solution: 'Eksempel 1: Legekonsultasjoner som er begrenset til 15 minutter av økonomiske hensyn – den økonomiske logikken (effektivitet) truer den kommunikative relasjonen mellom lege og pasient. Eksempel 2: Skolens fokus på målbare resultater (tester, karakterer) kan true den frie utforskningen og dialogen mellom lærer og elev. Begge eksemplene viser at systemets logikk (penger, byråkrati) kan fortrenge kommunikativ handling basert på gjensidig forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-3-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Habermas skiller mellom kommunikativ handling (gjensidig forståelse) og strategisk handling (egne mål)
- Kommunikativ handling bygger på fire gyldighetskrav: sannhet, riktighet, oppriktighet og forståelighet
- Den ideelle samtalesituasjonen er et normativt ideal der bare det bedre argumentet avgjør
- Habermas beskrev den borgerlige offentligheten som en arena for demokratisk debatt
- Systemkolonisering av livsverden truer kommunikativ rasjonalitet når penger og byråkrati fortrenger samtale
- Habermas' ideer er svært relevante for å analysere dagens mediesamfunn og demokratisk debatt`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva Habermas mener med «systemkolonisering av livsverden». Gi et eksempel fra helsevesenet eller utdanningssystemet der du mener slik kolonisering skjer i dag.',
        hints: [
          'Tenk på situasjoner der penger eller byråkratiske regler overstyrer menneskelig dialog.',
          'Eksempler kan være tidspress hos fastlegen, standardiserte tester i skolen, eller budsjettkutt i kultur.',
        ],
        solution: 'Systemkolonisering av livsverden betyr at systemets logikk – penger (markedet) og byråkratisk makt (staten) – trenger inn i hverdagslivets sfærer og fortrenger kommunikativ rasjonalitet. Eksempel fra helsevesenet: Leger har 15 minutter per konsultasjon av økonomiske grunner. Den økonomiske logikken (effektivitet) overstyrer behovet for ekte dialog mellom lege og pasient. Pasienten får ikke tid til å forklare hele situasjonen, og legen rekker ikke å lytte ordentlig. Kommunikativ handling (gjensidig forståelse) fortrenges av strategisk handling (raskest mulig diagnose).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Foucaults og Habermas\' syn på forholdet mellom makt og kommunikasjon. Hvor er de enige, og hvor er de uenige?',
        hints: [
          'Foucault ser makt som innvevd i all kommunikasjon, mens Habermas mener vi kan oppnå maktfri samtale.',
          'Tenk på om en maktfri samtale er mulig eller et uoppnåelig ideal.',
        ],
        solution: 'Foucault og Habermas er enige om at makt og kommunikasjon henger sammen, men de konkluderer ulikt. Foucault mener at makt er innvevd i all diskurs og at en maktfri samtale er umulig – makt produserer kunnskap og sannhet. Habermas anerkjenner at makt forstyrrer kommunikasjon, men hevder at vi kan og bør strebe mot kommunikativ handling der argumenter, ikke makt, avgjør. Den ideelle samtalesituasjonen er et normativt ideal. Kort sagt: Foucault er mer pessimistisk – makt er overalt. Habermas er mer optimistisk – kommunikasjon kan overvinne makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kommunikativ handling', definition: 'Samtale der deltakerne søker gjensidig forståelse gjennom argumenter, ikke makt eller manipulasjon.' },
    { term: 'Strategisk handling', definition: 'Kommunikasjon brukt som middel for å oppnå egne mål, uten genuin interesse for gjensidig forståelse.' },
    { term: 'Gyldighetskrav', definition: 'De fire kravene sannhet, riktighet, oppriktighet og forståelighet som enhver ytring implisitt reiser.' },
    { term: 'Den ideelle samtalesituasjonen', definition: 'Et normativt ideal der alle har lik rett til å delta og bare det bedre argumentet avgjør.' },
    { term: 'Systemkolonisering av livsverden', definition: 'Habermas\' begrep for at penger og byråkrati fortrenger kommunikativ rasjonalitet i hverdagslivet.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Semiotikk og tegnteori
// ============================================================================

export const CHAPTER_KOMKULT2_1_4: TextbookChapter = {
  id: 'komkult2-1-4',
  courseId: 'komkult-2',
  chapterNumber: '1.4',
  title: 'Semiotikk og tegnteori',
  description: 'Fordypning i semiotisk teori: Saussure, Peirce og Barthes\' bidrag til forståelsen av tegn, koder og meningsdannelse.',
  estimatedMinutes: 23,
  competenceGoals: [
    'gjøre rede for sentrale semiotiske begreper og anvende dem i analyse av kommunikasjon',
    'analysere hvordan tegn skaper mening gjennom denotasjon, konnotasjon og myte',
  ],
  content: [
    {
      id: 'kk2-1-4-intro',
      type: 'text',
      content: `# Semiotikk og tegnteori

Alt rundt oss er tegn. Et trafikkskilt, et varemerke, en emoji, et klesplagg – alt kan forstås som tegn som formidler mening. Semiotikk er vitenskapen om disse tegnene.

Mens vi i Kommunikasjon og kultur 1 ble introdusert for grunnleggende semiotiske begreper, skal vi her gå dypere. Vi skal utforske tre sentrale tenkere som har formet semiotikken: Ferdinand de Saussure, Charles Sanders Peirce og Roland Barthes.

**Hva kan semiotisk analyse avdekke?**
- Hvordan reklame manipulerer gjennom visuelle og språklige tegn
- Hvordan politiske symboler skaper identitet og tilhørighet
- Hvordan populærkultur reproduserer ideologier
- Hvordan sosiale medier bruker tegnsystemer for å skape mening`,
    },
    {
      id: 'kk2-1-4-def-1',
      type: 'definition',
      title: 'Saussure og den strukturelle semiotikken',
      content: `**Ferdinand de Saussure** (1857–1913) regnes som den moderne lingvistikkens og den europeiske semiotikkens grunnlegger.

**Tegnmodellen (det bilaterale tegnet):**
Et tegn består av to uatskillelige deler:
- **Signifikant (uttrykk):** Den materielle formen – lyden, bokstavene, bildet
- **Signifikat (innhold):** Den mentale forestillingen eller begrepet tegnet refererer til

**Sentrale prinsipper hos Saussure:**

**Arbitraritet:**
Forholdet mellom signifikant og signifikat er vilkårlig (arbitrært). Det er ingen naturlig forbindelse mellom lyden «hund» og det firbente dyret. På fransk heter det «chien», på tysk «Hund» – alle er like gyldige.

**Verdi (valeur):**
Et tegns mening bestemmes ikke isolert, men av dets relasjon til andre tegn i systemet. «Dag» får mening i motsetning til «natt». «Varm» får mening i motsetning til «kald».

**Syntagme og paradigme:**
- **Syntagmatisk akse:** Rekkefølgen tegn er satt sammen i (f.eks. ordrekkefølge i setninger)
- **Paradigmatisk akse:** Valgmuligheter på hvert punkt (hvilke andre ord kunne stått her?)`,
    },
    {
      id: 'kk2-1-4-example-1',
      type: 'example',
      title: 'Paradigmatisk analyse av medietekst',
      problem: 'Hvordan kan paradigmatisk analyse avdekke valg og ideologi i en nyhetsoverskrift?',
      solution: `**Overskrift:** «Flyktningstrøm til Europa fortsetter»

**Paradigmatisk analyse – alternative ordvalg:**
I stedet for «flyktningstrøm» kunne avisen ha skrevet:
- «Flyktninger» (nøytralt)
- «Mennesker på flukt» (empatisk)
- «Asylsøkere» (juridisk)
- «Migranter» (bredere kategori)
- «Flyktningkrise» (dramatiserende)

**Hva avslører analysen?**
Ordet «strøm» er en metafor fra naturen (vannstrøm). Det konnoterer noe ukontrollerbart, massivt og truende. Ved å velge dette ordet fra paradigmet, skaper avisen en bestemt ramme for forståelse.

**Syntagmatisk analyse:**
«Fortsetter» antyder at dette er et vedvarende problem, ikke en midlertidig situasjon. Kombinasjonen av «strøm» + «fortsetter» forsterker inntrykket av noe ustoppelig.

**Saussures poeng:** Mening oppstår gjennom valg (paradigme) og kombinasjon (syntagme). Andre valg ville gitt annen mening.`,
    },
    {
      id: 'kk2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva mener Saussure med at tegnet er «arbitrært»?',
        options: [
          { id: 'a', text: 'Det er ingen naturlig forbindelse mellom tegnets uttrykk og innhold', isCorrect: true },
          { id: 'b', text: 'Tegn er tilfeldige og uten mening', isCorrect: false },
          { id: 'c', text: 'Tegn er universelle og forstås likt i alle kulturer', isCorrect: false },
          { id: 'd', text: 'Tegn endrer aldri betydning over tid', isCorrect: false },
        ],
        hints: ['Tenk på at forskjellige språk har helt ulike ord for det samme begrepet.'],
        solution: 'Arbitraritet betyr at forholdet mellom signifikant (uttrykk) og signifikat (innhold) er vilkårlig. Det er ingen naturlig grunn til at lyden «tre» refererer til et tre – det er en kulturell konvensjon. Beviset er at andre språk bruker helt andre lyder for samme begrep.',
      },
    },
    {
      id: 'kk2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom den syntagmatiske og den paradigmatiske aksen?',
        options: [
          { id: 'a', text: 'Syntagmatisk handler om rekkefølge/kombinasjon, paradigmatisk handler om valgmuligheter', isCorrect: true },
          { id: 'b', text: 'Syntagmatisk handler om bilder, paradigmatisk handler om tekst', isCorrect: false },
          { id: 'c', text: 'Syntagmatisk er muntlig, paradigmatisk er skriftlig', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge handler om grammatikk', isCorrect: false },
        ],
        hints: ['Syntagme handler om hvordan tegn kombineres i rekkefølge, paradigme handler om hvilke tegn som kunne erstattet hverandre.'],
        solution: 'Den syntagmatiske aksen handler om kombinasjon – rekkefølgen tegnene er satt sammen i (f.eks. ordrekkefølge i en setning). Den paradigmatiske aksen handler om valg – hvilke andre tegn som kunne ha stått på samme plass (f.eks. alternative ordvalg).',
      },
    },
    {
      id: 'kk2-1-4-def-2',
      type: 'definition',
      title: 'Peirce og Barthes: Utvidede tegnteorier',
      content: `**Charles Sanders Peirce** (1839–1914) utviklet en triadisk tegnmodell med tre elementer:
- **Representamen:** Tegnet selv (det fysiske uttrykket)
- **Objekt:** Det tegnet refererer til i verden
- **Interpretant:** Tolkningen som oppstår i mottakerens sinn

**Peirces tegntyper:**
- **Ikon:** Tegnet ligner det det refererer til (foto, kart, portrett)
- **Indeks:** Tegnet har en årsakssammenheng med det det refererer til (røyk → ild, fotspor → person)
- **Symbol:** Tegnet er konvensjonelt – forbindelsen er kulturelt bestemt (flagg, bokstaver, logotyper)

**Roland Barthes** (1915–1980) utviklet tegnanalysen videre med fokus på kultur og ideologi:

**Denotasjon:** Tegnets bokstavelige, umiddelbare betydning. Et foto av en rose denoterer en blomst.

**Konnotasjon:** Tegnets kulturelle og emosjonelle assosiasjoner. Rosen konnoterer kjærlighet, romantikk, lidenskap.

**Myte:** Når konnotasjoner blir så naturaliserte at de fremstår som selvfølgelige sannheter. At «rosen = kjærlighet» oppleves som naturlig, er en myte. Barthes hevdet at mytene tjener ideologiske formål – de gjør kulturelle konstruksjoner til «natur».`,
    },
    {
      id: 'kk2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klassifiser følgende tegn som ikon, indeks eller symbol ifølge Peirces tegntyper: a) Et veiskilt med «P» for parkering. b) Et fotografi av Eiendommen din. c) Røyk som stiger opp fra en skorstein. d) Emojien for et hjerte. Begrunn hver klassifisering.',
        hints: [
          'Spør deg: Ligner tegnet det det refererer til? Har det en årsakssammenheng? Eller er forbindelsen basert på konvensjon?',
          'Noen tegn kan ha elementer av flere tegntyper.',
        ],
        solution: 'a) Symbolsk: «P» er en konvensjonell forkortelse – det er ingen naturlig forbindelse mellom bokstaven P og parkering. b) Ikonisk: Fotografiet ligner det det avbilder – det er en visuell likhet. c) Indeksikalsk: Røyk har en årsakssammenheng med ild – røyken er et direkte spor av forbrenning. d) Symbolsk: Hjerte-emojien er konvensjonelt brukt for kjærlighet – den fysiske formen ligner ikke den faktiske følelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en kjent reklame eller merkevare. Gjennomfør en analyse ved hjelp av Barthes\' begreper denotasjon, konnotasjon og myte. Hvilken ideologi formidler reklamen?',
        hints: [
          'Start med det bokstavelige innholdet (denotasjon), deretter assosiasjoner (konnotasjon), og til slutt hvilke naturaliserte forestillinger den bygger på (myte).',
          'Tenk på hvem reklamen henvender seg til og hva den lover.',
        ],
        solution: 'En god analyse bør: 1) Beskrive det bokstavelige innholdet (denotasjon) – hva ser vi konkret? 2) Identifisere kulturelle assosiasjoner (konnotasjon) – hva antyder fargene, modellene, settingen? 3) Avdekke myter – hvilke «naturlige sannheter» bygger reklamen på? For eksempel kan en bilreklame denotere en bil i naturen, konnotere frihet og eventyr, og bygge på myten om at materielle goder gir frihet. Ideologien kan være forbrukskapitalisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-4-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Saussure utviklet den bilaterale tegnmodellen med signifikant (uttrykk) og signifikat (innhold)
- Tegnet er arbitrært – forholdet mellom uttrykk og innhold er konvensjonelt
- Mening oppstår gjennom valg (paradigme) og kombinasjon (syntagme)
- Peirce skiller mellom ikon (likhet), indeks (årsakssammenheng) og symbol (konvensjon)
- Barthes analyserer denotasjon (bokstavelig), konnotasjon (assosiasjoner) og myte (naturalisert ideologi)
- Semiotisk analyse er et kraftig verktøy for å avdekke skjulte budskap i medietekster`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva Roland Barthes mener med «myte» i semiotisk forstand. Gi et eksempel på en myte fra reklame eller populærkultur og vis hvordan den naturaliserer en kulturell konstruksjon.',
        hints: [
          'Myte hos Barthes er ikke det samme som gresk mytologi – det handler om naturaliserte konnotasjoner.',
          'Tenk på koblingen mellom farger og kjønn, eller mellom merkevarer og livsstil.',
        ],
        solution: 'For Barthes er en myte en konnotasjon som har blitt så vanlig at den fremstår som naturlig og selvfølgelig. Myten gjør kulturelle konstruksjoner om til «natur» og tjener dermed ideologiske formål. Eksempel: Rosa farge konnoterer femininitet og mykhet. Denne koblingen oppleves som «naturlig», men er en kulturell konstruksjon – det var først på 1940-tallet at rosa ble sterkt knyttet til jenter. Myten tjener kommersielle interesser ved å skape kjønnsdelte markeder for klær, leker og produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Saussures bilaterale tegnmodell med Peirces triadiske modell. Hva er styrkene og svakhetene ved hver modell? Hvilken egner seg best for analyse av sosiale medier?',
        hints: [
          'Tenk på at Peirce inkluderer tolkningen (interpretant), mens Saussure fokuserer på tegnet i seg selv.',
          'Sosiale medier inneholder mange tegntyper – emojier, bilder, tekst, video.',
        ],
        solution: 'Saussures modell er enklere og tydeligere: signifikant og signifikat. Styrken er klarhet, svakheten er at den ikke inkluderer tolkningsprosessen eksplisitt. Peirces modell inkluderer interpretanten (tolkningen), noe som gjør den bedre egnet for å analysere hvordan samme tegn kan tolkes ulikt av ulike mottakere. For sosiale medier er Peirces modell trolig mest nyttig fordi: 1) Tolkningsprosessen er sentral – emojier tolkes ulikt i ulike kulturer og aldersgrupper. 2) Sosiale medier inneholder ikoner (bilder), indekser (lenker til hendelser) og symboler (logoer, hashtags). 3) Interpretant-begrepet fanger hvordan mottakerens kontekst påvirker meningsdannelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Signifikant/signifikat', definition: 'Saussures todeling av tegnet i uttrykk (materiell form) og innhold (mental forestilling).' },
    { term: 'Arbitraritet', definition: 'Prinsippet om at forholdet mellom tegnets uttrykk og innhold er vilkårlig og konvensjonelt.' },
    { term: 'Ikon, indeks, symbol', definition: 'Peirces tre tegntyper basert på forholdet til objektet: likhet, årsakssammenheng eller konvensjon.' },
    { term: 'Denotasjon og konnotasjon', definition: 'Barthes\' begreper for tegnets bokstavelige betydning og dets kulturelle assosiasjoner.' },
    { term: 'Myte (Barthes)', definition: 'Naturaliserte konnotasjoner som fremstår som selvfølgelige sannheter og tjener ideologiske formål.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Kritisk lingvistikk
// ============================================================================

export const CHAPTER_KOMKULT2_1_5: TextbookChapter = {
  id: 'komkult2-1-5',
  courseId: 'komkult-2',
  chapterNumber: '1.5',
  title: 'Kritisk lingvistikk',
  description: 'Språk som maktmiddel, framing, eufemismer og språklig manipulasjon i medier og politikk.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for hvordan språk kan brukes som maktmiddel i medier og politikk',
    'analysere konkrete eksempler på framing, eufemismer og språklig manipulasjon',
  ],
  content: [
    {
      id: 'kk2-1-5-intro',
      type: 'text',
      content: `# Kritisk lingvistikk

Språk er ikke nøytralt. Hver gang vi velger et ord fremfor et annet, et perspektiv fremfor et annet, former vi virkelighetsforståelsen til den som lytter eller leser. Kritisk lingvistikk er studiet av hvordan språk brukes som maktmiddel – bevisst og ubevisst.

I dette kapittelet knytter vi sammen tråder fra Sapir-Whorf (språk former tenkning), Foucault (diskurser produserer sannheter), Habermas (kommunikativ vs. strategisk handling) og semiotikken (tegn skaper mening). Kritisk lingvistikk er det praktiske verktøyet for å avsløre hvordan disse mekanismene virker i konkret språkbruk.

**Hva gjør kritisk lingvistikk relevant?**
- Avdekke manipulerende språkbruk i politikk og medier
- Forstå hvordan språk kan ekskludere og marginalisere
- Bli bevisste på våre egne språklige valg
- Styrke evnen til kritisk medielesing`,
    },
    {
      id: 'kk2-1-5-def-1',
      type: 'definition',
      title: 'Framing og språklig innramming',
      content: `**Framing (innramming):**
Måten et tema presenteres på gjennom språklige og visuelle valg som styrer mottakerens forståelse. Framingen velger ut visse aspekter av virkeligheten og gjør dem mer fremtredende.

**George Lakoff – politisk framing:**
Lakoff hevder at politiske debatter vinnes og tapes gjennom framing. Den som setter rammene for debatten, kontrollerer hvilke løsninger som virker fornuftige.

**Eksempler på framing:**
- «Skattelettelse» vs. «skattekutt» vs. «kutt i fellesskapet» – samme sak, ulike rammer
- «Klimaskeptiker» vs. «klimabenekter» – ulik grad av legitimitet
- «Ulovlig innvandrer» vs. «papirløs person» – ulik menneskeliggjøring

**Medieframing:**
Medier framer saker gjennom:
- Valg av vinkling og overskrift
- Hvem som intervjues (kilder)
- Hvilke fakta som inkluderes og ekskluderes
- Bruk av metaforer og karakteristikker
- Bildeutvalg og layout

**Robert Entmans definisjon:**
Framing innebærer å definere problemer, identifisere årsaker, foreslå moralske vurderinger og anbefale løsninger.`,
    },
    {
      id: 'kk2-1-5-example-1',
      type: 'example',
      title: 'Framing av samme hendelse i ulike medier',
      problem: 'Hvordan kan den samme hendelsen frames ulikt av ulike medier?',
      solution: `**Hendelse:** Regjeringen foreslår å redusere formuesskatten.

**Framing i ulike medier:**

**Avis A (høyresiden):**
Overskrift: «Skattelettelse gir jobbvekst»
- Perspektiv: Næringsliv og verdiskaping
- Kilder: Økonomer som støtter lavere skatt, næringslivsledere
- Metafor: «Lettelse» – noe som fjerner en byrde
- Ekskludert: Konsekvenser for offentlige tjenester

**Avis B (venstresiden):**
Overskrift: «Millionærer får skattesjokk – fellesskapet taper»
- Perspektiv: Ulikhet og fordeling
- Kilder: Fagforeninger, forskere på ulikhet
- Metafor: «Sjokk» for de rike (gavepakke) + «taper» (tap for fellesskapet)
- Ekskludert: Mulige positive effekter for næringslivet

**Analyse:** Begge avisene rapporterer om det samme forslaget, men framingen skaper helt ulike virkelighetsforståelser. Leserens holdning formes av hvilken framing hen eksponeres for.`,
    },
    {
      id: 'kk2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer framing (innramming) i kommunikasjon?',
        options: [
          { id: 'a', text: 'At språklige og visuelle valg styrer mottakerens forståelse av et tema', isCorrect: true },
          { id: 'b', text: 'At all kommunikasjon er løgn', isCorrect: false },
          { id: 'c', text: 'At medier alltid er objektive i sin dekning', isCorrect: false },
          { id: 'd', text: 'At bilder settes i fysiske rammer', isCorrect: false },
        ],
        hints: ['Tenk på at valg av ord, vinkling og perspektiv skaper en «ramme» som mottakeren forstår saken gjennom.'],
        solution: 'Framing innebærer at språklige og visuelle valg – ordvalg, metaforer, vinkling, kildebruk – skaper en ramme som styrer hvordan mottakeren forstår et tema. Framingen fremhever visse aspekter og nedtoner andre.',
      },
    },
    {
      id: 'kk2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er et eksempel på eufemisme?',
        options: [
          { id: 'a', text: '«Nedbemanning» i stedet for «masseoppsigelse»', isCorrect: true },
          { id: 'b', text: '«Klimakrise» i stedet for «klimaendring»', isCorrect: false },
          { id: 'c', text: '«Katastrofe» i stedet for «problem»', isCorrect: false },
          { id: 'd', text: '«Krig» i stedet for «konflikt»', isCorrect: false },
        ],
        hints: ['En eufemisme er et mildere uttrykk som brukes i stedet for et mer direkte eller ubehagelig ord.'],
        solution: '«Nedbemanning» er en eufemisme for masseoppsigelse – det mildere uttrykket skjuler at mennesker mister jobben. Eufemismer gjør ubehagelige realiteter mer spiselige og kan dermed tjene maktinteresser.',
      },
    },
    {
      id: 'kk2-1-5-def-2',
      type: 'definition',
      title: 'Eufemismer, nominalisering og andre språklige maktstrategier',
      content: `Kritisk lingvistikk identifiserer flere språklige strategier som kan brukes til å utøve makt:

**Eufemismer:**
Mildere uttrykk som erstatter direkte, ofte ubehagelige ord. Funksjonen er å gjøre virkeligheten mer akseptabel.
- «Bortgang» i stedet for «død»
- «Kollaterale skader» i stedet for «sivile drept i krig»
- «Effektivisering» i stedet for «oppsigelser og kutt»

**Nominalisering:**
Å gjøre handlinger om til substantiver, slik at aktøren forsvinner.
- «Nedleggelsen av fabrikken» – hvem bestemte det?
- «Økningen i arbeidsledighet» – hvem er ansvarlig?
- «Forurensningen av fjorden» – hvem forurenser?

**Passivkonstruksjoner:**
Å skjule hvem som handler gjennom passiv setningsstruktur.
- «Budsjettet ble kuttet» – av hvem?
- «Det ble besluttet at…» – hvem besluttet?

**Overleksikalisering:**
Når et felt har uvanlig mange ord for noe, avslører det kulturelle prioriteringer og maktinteresser.

**Noam Chomsky:**
Har analysert hvordan politisk språk systematisk tilslører maktforhold og skaper «fabrikkert samtykke» (manufactured consent).`,
    },
    {
      id: 'kk2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser følgende setning fra en bedrifts pressemelding: «Gjennom en nødvendig restrukturering sikrer vi selskapets fremtidige konkurransekraft.» Identifiser minst to språklige strategier fra kritisk lingvistikk (eufemisme, nominalisering, passivkonstruksjon) og forklar hva de skjuler.',
        hints: [
          'Hva betyr egentlig «restrukturering» i praksis?',
          'Hvem er «vi»? Og for hvem er det «nødvendig»?',
        ],
        solution: '1) Eufemisme: «Restrukturering» er en eufemisme for oppsigelser, omorganisering og kutt. Det milde ordet skjuler at mennesker mister jobben. 2) Nominalisering: «Restrukturering» gjør handlingen (å si opp folk) om til et abstrakt substantiv, slik at de menneskelige konsekvensene blir usynlige. 3) Strategisk framing: «Nødvendig» presenterer tiltaket som uunngåelig, og «konkurransekraft» rammer det som positivt og fremtidsrettet. Språket tjener ledelsens interesser ved å gjøre ubehagelige beslutninger spiselige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn et eksempel på nominalisering i en avisartikkel eller en offentlig tekst. Skriv om setningen slik at den aktive aktøren blir synlig. Drøft hva forskjellen betyr for leserens forståelse.',
        hints: [
          'Se etter substantiver som egentlig beskriver handlinger (f.eks. «beslutning», «økning», «nedleggelse»).',
          'Spør: Hvem gjør denne handlingen? Hvorfor er aktøren skjult?',
        ],
        solution: 'Eksempel: «Kuttpolitikken rammer de svakeste.» Omskrevet: «Regjeringen kutter i budsjettet, og dette rammer de svakeste.» I den nominaliserte versjonen forsvinner regjeringen som aktør, og «kuttpolitikken» fremstår som en upersonlig kraft. I den omskrevne versjonen er det tydelig hvem som handler og hvem som rammes. Drøftingen bør peke på at nominalisering kan tjene makthavernes interesser ved å skjule ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-5-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Kritisk lingvistikk analyserer hvordan språk brukes som maktmiddel
- Framing innebærer at språklige valg skaper rammer for forståelse av et tema
- Eufemismer gjør ubehagelige realiteter mer spiselige ved å bruke mildere uttrykk
- Nominalisering skjuler aktører ved å gjøre handlinger om til substantiver
- Passivkonstruksjoner kan brukes til å skjule ansvar
- Kritisk bevissthet om språklige strategier styrker evnen til kritisk medielesing
- Samtlige kommunikasjonsteorier i denne seksjonen (Sapir-Whorf, Foucault, Habermas, semiotikk) bidrar til å forstå språkets makt`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva nominalisering er og hvorfor det kan fungere som et språklig maktmiddel. Gi to eksempler fra avisoverskrifter eller politiske taler der nominalisering brukes, og skriv om setningene slik at aktøren blir synlig.',
        hints: [
          'Se etter substantiver som egentlig beskriver handlinger, f.eks. «nedleggelse», «økning», «vedtak».',
          'Spør alltid: Hvem gjør dette? Hvem er ansvarlig?',
        ],
        solution: 'Nominalisering innebærer at handlinger omformes til substantiver, slik at den ansvarlige aktøren forsvinner. Eksempel 1: «Nedleggelsen av sykehuset» → «Helseforetaket legger ned sykehuset.» Eksempel 2: «Økningen i strømprisene» → «Kraftselskapene øker strømprisene.» I begge tilfellene skjuler nominaliseringen hvem som handler. Dette er et maktmiddel fordi det gjør beslutninger om til tilsynelatende upersonlige prosesser og fjerner muligheten for å stille noen til ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (200–300 ord) der du bruker begreper fra hele seksjon 1 (Sapir-Whorf, Foucault, Habermas, semiotikk og kritisk lingvistikk) til å analysere et selvvalgt eksempel på mediekommunikasjon. Vis hvordan de ulike teoretiske perspektivene utfyller hverandre.',
        hints: [
          'Velg et tydelig eksempel som en reklame, en politisk tale eller en nyhetsoverskrift.',
          'Strukturer analysen ved å bruke ett perspektiv om gangen og vis hvordan de bygger på hverandre.',
        ],
        solution: 'En god analyse kan for eksempel ta utgangspunkt i en valgkampanjevideo og vise: 1) Sapir-Whorf: Hvordan ordvalgene former mottakerens oppfatning (f.eks. metaforer for nasjon som «familie»). 2) Foucault: Hvilken diskurs videoen inngår i og hvilke subjektposisjoner som skapes (f.eks. «ansvarlig leder» vs. «truende fiende»). 3) Habermas: Om kommunikasjonen er strategisk (manipulerende) eller kommunikativ (ærlig). 4) Semiotikk: Denotasjon og konnotasjon i de visuelle elementene (flagg, familiebilder, musikk). 5) Kritisk lingvistikk: Framing, eufemismer og nominaliseringer. Analysen bør vise at perspektivene utfyller hverandre: Sapir-Whorf forklarer hvorfor ordvalg virker, semiotikken hvordan tegn skaper mening, Foucault hvordan diskurser setter rammer, Habermas hvordan makt forstyrrer ekte dialog, og kritisk lingvistikk gir konkrete analyseverktøy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Framing', definition: 'Språklige og visuelle valg som skaper en ramme for forståelse og styrer mottakerens oppfatning av et tema.' },
    { term: 'Eufemisme', definition: 'Mildere uttrykk som erstatter direkte eller ubehagelige ord, f.eks. «nedbemanning» for oppsigelser.' },
    { term: 'Nominalisering', definition: 'Å gjøre handlinger om til substantiver slik at aktøren/den ansvarlige forsvinner fra setningen.' },
    { term: 'Passivkonstruksjon', definition: 'Setningsstruktur som skjuler hvem som utfører handlingen, f.eks. «budsjettet ble kuttet».' },
    { term: 'Fabrikkert samtykke', definition: 'Chomskys begrep for hvordan medier og makthavere skaper tilslutning gjennom språklig manipulasjon.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_1_1,
  CHAPTER_KOMKULT2_1_2,
  CHAPTER_KOMKULT2_1_3,
  CHAPTER_KOMKULT2_1_4,
  CHAPTER_KOMKULT2_1_5,
];
