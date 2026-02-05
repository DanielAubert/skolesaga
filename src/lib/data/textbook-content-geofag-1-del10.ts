/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 10: Geofaglige undersokelser
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Delkapitler:
 *   10.1 Vitenskapelig metode i geofag
 *   10.2 Feltarbeid og datainnsamling
 *   10.3 Kart og kartanalyse
 *   10.4 GIS og digitale verktoy
 *   10.5 Rapportering og formidling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Vitenskapelig metode i geofag
// ============================================================================

export const CHAPTER_GEOFAG_1_10_1: TextbookChapter = {
  id: 'geofag-1-10-1',
  courseId: 'geofag-1',
  chapterNumber: '10.1',
  title: 'Vitenskapelig metode i geofag',
  description: 'Hypoteser, observasjoner, eksperimenter og teoridannelse i geovitenskapene.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare vitenskapelig metode og dens anvendelse i geofag',
    'formulere testbare hypoteser basert paa geofaglige observasjoner',
    'skille mellom observasjoner, tolkninger og teorier',
    'vurdere kilder og usikkerhet i geofaglige undersokelser',
  ],
  content: [
    {
      id: 'geo1-10-1-intro',
      type: 'text',
      content: `# Vitenskapelig metode i geofag

Geofag er en observasjonsbasert vitenskap. Vi kan ikke lage jordskjelv i laboratoriet eller gjenskape istidens klima i full skala. Likevel bruker geofag vitenskapelig metode for aa bygge palitelig kunnskap om jorden.

## Geofagets sarpreg

Geovitenskapene har noen spesielle utfordringer:

- **Lange tidsskalaer**: Mange prosesser tar millioner av aar
- **Stor romlig skala**: Fra mineralkorn til kontinenter
- **Komplekse systemer**: Mange faktorer virker sammen
- **Begrenset eksperimentering**: Vanskelig aa gjenskape naturfenomener
- **Historisk vitenskap**: Vi tolker spor fra fortiden`,
    },
    {
      id: 'geo1-10-1-def-vitenskapelig-metode',
      type: 'definition',
      title: 'Vitenskapelig metode',
      content: 'Vitenskapelig metode er en systematisk tilnaerming til aa bygge kunnskap gjennom observasjoner, hypotesedannelse, testing og revisjon. Metoden sikrer at konklusjoner er etterproevbare, objektive og basert paa empiriske data.',
    },
    {
      id: 'geo1-10-1-steg',
      type: 'text',
      content: `## Stegene i vitenskapelig metode

### 1. Observasjon
Alt starter med observasjoner av naturen:
- Feltobservasjoner av bergarter og landformer
- Maalinger av temperatur, trykk, nedbor
- Analyse av prover i laboratoriet
- Studier av satellittbilder og kart

### 2. Sporsmaal
Observasjoner forer til sporsmaal:
- Hvorfor ligger det skjell i fjellet?
- Hvordan ble denne dalen formet?
- Hva foraarsaket jordskjelvet?

### 3. Hypotese
En hypotese er en forelopig forklaring som kan testes:
- Maa vaere spesifikk og testbar
- Maa kunne motbevises (falsifiserbarhet)
- Baseres paa eksisterende kunnskap

### 4. Testing
Hypotesen testes gjennom:
- Flere observasjoner
- Maalinger og eksperimenter
- Sammenligning med andre omraader
- Numeriske modeller

### 5. Analyse og konklusjon
- Stotter dataene hypotesen?
- Maa hypotesen revideres?
- Hvilke nye sporsmaal oppstaar?

### 6. Kommunikasjon
- Publisering i fagtidsskrifter
- Fagfellevurdering
- Diskusjon i fagmiljoet`,
    },
    {
      id: 'geo1-10-1-def-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: 'En hypotese er en forelopig, testbar forklaring paa et fenomen. En god hypotese er spesifikk, basert paa observasjoner, og kan i prinsippet motbevises. Hvis en hypotese staar seg etter gjentatt testing, kan den bli del av en teori.',
    },
    {
      id: 'geo1-10-1-obs-vs-tolk',
      type: 'text',
      content: `## Observasjon versus tolkning

Et viktig skille i geofag er mellom hva vi ser og hva vi tror det betyr.

### Observasjon
Objektiv beskrivelse av hva som faktisk ses:
- "Bergarten er grovkornet med rosa og graa mineraler"
- "Lagene heller 30 grader mot sor"
- "Det er parallelle striper i bergoverflaten"

### Tolkning
Hva observasjonene kan bety:
- "Dette er sannsynligvis granitt"
- "Lagene er vippet av tektoniske krefter"
- "Stripene er skuringsstriper fra en isbre"

### Hvorfor skille?
- Andre kan etterprove observasjonene
- Tolkninger kan endres med ny kunnskap
- Unngaar bekreftelsestendenser
- Bedre vitenskapelig kommunikasjon`,
    },
    {
      id: 'geo1-10-1-teori',
      type: 'text',
      content: `## Fra hypotese til teori

### Vitenskapelig teori
En teori er ikke bare en gjetning. I vitenskapen betyr teori:
- En velstottet forklaring paa mange observasjoner
- Har bestaat grundig testing
- Kan forutsi nye funn
- Akseptert av fagmiljoet

### Eksempler paa geofaglige teorier
- **Platetektonikk**: Forklarer jordskjelv, vulkaner, fjell
- **Uniformitarianisme**: "Natidens prosesser forklarer fortiden"
- **Evolusjon**: Forklarer fossiler og livets utvikling
- **Istidsteorien**: Forklarer morener, U-daler, isbreer

### Teorier kan revideres
- Nye data kan kreve justering
- Grunnprinsippene bestaar ofte
- Eksempel: Kontinentaldrift ble til platetektonikk`,
    },
    {
      id: 'geo1-10-1-usikkerhet',
      type: 'text',
      content: `## Usikkerhet og feilkilder

All vitenskap inneholder usikkerhet. Aa vaere bevisst paa dette er viktig.

### Typer usikkerhet

**Maalefeil**
- Instrumentets noeyaktighet
- Avlesningsfeil
- Proveforberedelse

**Provebasert usikkerhet**
- Er provestedet representativt?
- Er nok prover tatt?
- Har provene blitt forurenset?

**Tolkningsusikkerhet**
- Flere mulige forklaringer
- Manglende informasjon
- Antakelser i modeller

### Haandtering av usikkerhet
- Oppgi feilmarginer i maalinger
- Ta flere prover
- Bruk flere uavhengige metoder
- Vaer aapen om begrensninger`,
    },
    {
      id: 'geo1-10-1-example',
      type: 'example',
      title: 'Vitenskapelig metode: Istidshypotesen',
      problem: 'Hvordan ble teorien om istidene utviklet ved hjelp av vitenskapelig metode?',
      solution: `**Observasjoner** (1800-tallet):
- Store steinblokker (flyttblokker) langt fra mulig opphav
- Skuringsstriper i fast fjell
- Morenerygger i dalforer
- U-formede daler

**Hypotese** (Louis Agassiz, 1840):
"Store isbreer dekket tidligere Nord-Europa og formet landskapet"

**Testing**:
- Sammenligning med dagens isbreer i Alpene
- Kartlegging av morener og skuringsstriper
- Analyse av flyttblokkenes bergart og opphav
- Studier av isbreer paa Gronland

**Stotte for hypotesen**:
- Skuringsstriper pekte bort fra Skandinavia
- Morener dannet systematiske monster
- Flyttblokker kunne spores tilbake til fjellomraader
- Isbreer i dag lager samme former

**Teori**:
Istidsteorien ble akseptert og er i dag grunnlaget for forstaelsen av kvartaergeologi. Den forklarer tusenvis av landformer og avsetninger.`,
    },
    {
      id: 'geo1-10-1-tip',
      type: 'tip',
      title: 'Gode vaner i geofaglig arbeid',
      content: '1) **Dokumenter alt**: Skriv ned observasjoner umiddelbart. 2) **Skill observasjon fra tolkning**: Skriv "jeg ser..." for aa holde dem adskilt. 3) **Vaer kritisk til egne tolkninger**: Kan det forklares paa andre maater? 4) **Bruk flere metoder**: Sterkere konklusjoner nar ulike metoder gir samme svar.',
    },
  ],
  exercises: [
    {
      id: 'geo1-10-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner en god vitenskapelig hypotese?',
      options: [
        { id: 'a', text: 'Den kan testes og potensielt motbevises', isCorrect: true },
        { id: 'b', text: 'Den maa vaere riktig', isCorrect: false },
        { id: 'c', text: 'Den maa vaere basert paa et eksperiment', isCorrect: false },
        { id: 'd', text: 'Den maa vaere helt ny', isCorrect: false },
      ],
      solution: 'En god hypotese maa vaere testbar og falsifiserbar - det maa vaere mulig aa tenke seg data som ville motbevise den. En hypotese som ikke kan motbevises er ikke vitenskapelig nyttig.',
    },
    {
      id: 'geo1-10-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom en observasjon og en tolkning, og gi et eksempel fra geofag.',
      solution: 'En observasjon er en objektiv beskrivelse av hva som faktisk ses, mens en tolkning er en forklaring paa hva observasjonen kan bety. Eksempel: Observasjon - "Bergarten har parallelle lyse og morke baand". Tolkning - "Dette er gneis som har vaert utsatt for hoyt trykk og temperatur under metamorfose". Skillet er viktig fordi observasjoner kan etterproves, mens tolkninger kan endres med ny kunnskap.',
    },
    {
      id: 'geo1-10-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr begrepet "teori" i vitenskapelig sammenheng?',
      options: [
        { id: 'a', text: 'En velstottet forklaring som har bestaat grundig testing', isCorrect: true },
        { id: 'b', text: 'En usikker gjetning', isCorrect: false },
        { id: 'c', text: 'En ide som ikke kan testes', isCorrect: false },
        { id: 'd', text: 'En personlig mening', isCorrect: false },
      ],
      solution: 'I vitenskapen betyr teori noe annet enn i dagligtale. En vitenskapelig teori er en velbegrunnet forklaring som har bestaat gjentatt testing, kan forutsi nye funn, og er akseptert av fagmiljoet. Eksempler er platetektonikk og istidsteorien.',
    },
    {
      id: 'geo1-10-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan du ville bruke vitenskapelig metode for aa undersoke hva som har formet en dal i naerheten av der du bor.',
      solution: '1) Observasjon: Beskriv dalens form (V-dal eller U-dal?), studere veggene, se etter skuringsstriper, morener, elveformer. 2) Sporsmaal: Ble dalen formet av elv eller isbre? 3) Hypotese: F.eks. "Dalen ble formet av en isbre under siste istid". 4) Testing: Let etter glasiale avsetninger (morener), skuringsstriper, sjekk om dalformen er U-formet, sammenlign med elveformede daler. 5) Analyse: Vurder alle funn - stotter de hypotesen? 6) Konklusjon: Formuler svar basert paa bevisene, og vurder usikkerhet.',
    },
  ],
};

// ============================================================================
// Kapittel 10.2: Feltarbeid og datainnsamling
// ============================================================================

export const CHAPTER_GEOFAG_1_10_2: TextbookChapter = {
  id: 'geofag-1-10-2',
  courseId: 'geofag-1',
  chapterNumber: '10.2',
  title: 'Feltarbeid og datainnsamling',
  description: 'Planlegging, utstyr, maalemetoder og dokumentasjon av feltarbeid.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge og gjennomfore geofaglige undersokelser i felt',
    'bruke relevant utstyr for innsamling av geofaglige data',
    'dokumentere observasjoner systematisk i feltbok',
    'vurdere sikkerhet ved feltarbeid',
  ],
  content: [
    {
      id: 'geo1-10-2-intro',
      type: 'text',
      content: `# Feltarbeid og datainnsamling

Feltarbeid er hjertet av geofag. Ute i naturen samler vi forstehaandsobservasjoner og data som danner grunnlaget for vaar forstaelse av jordsystemet. Godt feltarbeid krever planlegging, riktig utstyr og systematisk dokumentasjon.

## Hvorfor feltarbeid?

- **Forstehaandserfaring**: Se prosesser og fenomener i virkeligheten
- **Datainnsamling**: Samle materiale og maalinger som ikke finnes i databaser
- **Verifisering**: Sjekke om teorier stemmer med observasjoner
- **Oppdagelse**: Finne nye fenomener og sammenhenger
- **Kontekst**: Forstaa sammenhenger som ikke synes paa kart`,
    },
    {
      id: 'geo1-10-2-planlegging',
      type: 'text',
      content: `## Planlegging av feltarbeid

### For du reiser ut

**1. Definer formaal**
- Hva skal undersokes?
- Hvilke data trengs?
- Hvilke hypoteser skal testes?

**2. Studer omraadet paa forhaand**
- Geologiske kart og rapporter
- Topografiske kart
- Flybilder og satellittbilder
- Tidligere arbeid i omraadet

**3. Identifiser lokaliteter**
- Hvor er gode blotninger?
- Hvilke steder er tilgjengelige?
- Planlegg realistisk rute

**4. Sjekk praktiske forhold**
- Vaermelding
- Adkomst og parkering
- Grunneiertillatelser om nodvendig
- Nodvendig sikkerhetsutstyr`,
    },
    {
      id: 'geo1-10-2-utstyr',
      type: 'text',
      content: `## Utstyr for geofaglig feltarbeid

### Grunnleggende utstyr
- **Geologisk hammer**: For aa ta bergartsprover
- **Lupe** (10x forstorrelse): Undersoke mineraler og teksturer
- **Kompass**: Orientering og maale strukturer
- **GPS**: Noeyaktig posisjonsbestemmelse
- **Feltbok**: Dokumentasjon av observasjoner
- **Blyant**: Fungerer i regn og kulde

### Spesialisert utstyr
- **Saltsyre (10% HCl)**: Teste karbonatmineraler
- **Hardhetssett**: Bestemme mineralhardhet
- **Klinometer**: Maale helning paa lag og strukturer
- **Brunton-kompass**: Kombinerer kompass og klinometer
- **Jordborr**: Ta jordprover

### Dokumentasjonsutstyr
- **Kamera**: Dokumentere lokaliteter
- **Maalestokk**: For fotografering
- **Proveposer**: Merket med nummer
- **Merkelapper**: Vaerbestandige

### Sikkerhetsutstyr
- **Hjelm**: Ved bratte skjaeringer og steinbrudd
- **Vernebriller**: Naar man bruker hammer
- **Hansker**: Ved haandtering av prover
- **Forstehjelpsutstyr**: Alltid med paa tur`,
    },
    {
      id: 'geo1-10-2-def-blotning',
      type: 'definition',
      title: 'Blotning',
      content: 'En blotning er et sted der berggrunnen er synlig og tilgjengelig for observasjon. Naturlige blotninger inkluderer klipper, elvebredder og strandberg. Kunstige blotninger er veiskjaeringer, steinbrudd og byggegroper.',
    },
    {
      id: 'geo1-10-2-metoder',
      type: 'text',
      content: `## Feltmetoder

### Systematisk kartlegging
1. Velg et omraade med god blotning
2. Gaa systematisk gjennom omraadet
3. Noter hver lokalitet med koordinater
4. Beskriv bergarter, strukturer og losemasser
5. Ta representative prover

### Provetaking
- **Bergartsprover**: Ta friskt berg (ikke forvitret overflate)
- **Jordprover**: Bruk standard dybder (f.eks. 0-10 cm, 10-30 cm)
- **Vannprover**: Bruk rene flasker, noter temperatur og pH
- **Merking**: Hver prove faar unikt nummer koblet til feltbok

### Maalinger
- **Strok**: Retningen til en horisontal linje paa flaten (0-360 grader)
- **Fall**: Vinkel fra horisontalplanet (0-90 grader)
- **Fallretning**: Kompassretning flaten heller mot
- **Tykkelse**: Maaling av lagtykkelse
- **Kornstorrelse**: Estimat eller maaling`,
    },
    {
      id: 'geo1-10-2-def-strok-fall',
      type: 'definition',
      title: 'Strok og fall',
      content: 'Strok er retningen til en tenkt horisontal linje paa en geologisk flate, oppgitt som kompassretning. Fall er vinkelen flaten heller fra horisontalplanet. Sammen beskriver strok og fall orienteringen til bergartslag, forkastninger og andre strukturer.',
    },
    {
      id: 'geo1-10-2-feltbok',
      type: 'text',
      content: `## Feltboken

Feltboken er det viktigste dokumentet fra feltarbeid.

### Hva skal dokumenteres?
1. **Dato og vaer**: Paavirker observasjonsmuligheter
2. **Lokalitet**: Koordinater, stedsnavn, kartblad
3. **Beskrivelse**: Hva du ser (objektivt)
4. **Tolkning**: Hva du tror det betyr
5. **Skisser**: Tegninger av strukturer, profiler, kart
6. **Provenummer**: Kobling til innsamlet materiale
7. **Fotoreferanse**: Hvilket bilde horer til lokaliteten

### Gode vaner
- Skriv med blyant (fungerer i regn)
- Noter umiddelbart, ikke vent til senere
- Skill beskrivelse fra tolkning
- Vaer konkret: "3 mm korn" er bedre enn "grovkornet"
- Tegn skisser med maalestokk

### Digital dokumentasjon
- GPS-logger for sporlogg
- Foto med geotagging
- Digitale skjemaer paa nettbrett
- Sikkerhetskopi daglig`,
    },
    {
      id: 'geo1-10-2-sikkerhet',
      type: 'text',
      content: `## Sikkerhet i felt

### For du drar
- Sjekk vaervarsel (yr.no, varsom.no)
- Informer andre om rute og forventet hjemkomst
- Pakk utstyr for verre vaer enn varslet
- Ta med nok mat, drikke og forstehjelp

### I felt
- **Bratte skraaninger**: Bruk hjelm, vaer forsiktig med lose steiner
- **Steinbrudd og skjaeringer**: Aldri staa under overheng
- **Vassdrag**: Respekter flomfare, unngaa aa krysse ved hoy vannstand
- **Isbreer**: Krever spesialutstyr og erfaring
- **Gruver og huler**: Aldri gaa inn uten riktig utstyr og folge

### Ved ulykker
- Forsteprioritet: Egen sikkerhet
- Varsle 113 (nodtelefon)
- Oppgi noeyaktig posisjon (GPS-koordinater)
- Gi forstehjelp etter evne
- Hold personen varm`,
    },
    {
      id: 'geo1-10-2-example',
      type: 'example',
      title: 'Feltlogg fra bergartskartlegging',
      problem: 'Hvordan dokumenterer du en bergartsobservasjon i felt?',
      solution: `**Eksempel paa feltlogg:**

**Dato**: 15. september 2024
**Vaer**: Lettskyet, 12 grader C
**Lokalitet**: UTM 32V 598432 6721845 (Steinbruddet ved Asker)

**Beskrivelse**:
- Bergart: Grovkornet, lysegraa bergart
- Mineraler: Kvarts (graa, glassaktig), feltspat (rosa, spalteflater), biotitt (sort, skinnende)
- Tekstur: Massiv, uorienterte krystaller, 3-5 mm kornstorrelse
- Strukturer: Vertikale sprekker med N-S strok

**Tolkning**: Granitt, trolig Oslo-felt magmatisme (perm)

**Prove**: GEO-2024-047 (2 kg blokk for tynnslip)
**Foto**: IMG_4521-4525

**Skisse**: [Tegning av blotning med maalestokk og retningspil]`,
    },
    {
      id: 'geo1-10-2-tip',
      type: 'tip',
      title: 'Tre regler for god feltdokumentasjon',
      content: '1) **Skriv mens du ser**: Noter umiddelbart, ikke vent til senere. 2) **Vaer konkret**: "Lysegraa, 3 mm korn" er bedre enn "vanlig granitt". 3) **Skill beskrivelse fra tolkning**: Skriv forst hva du ser, deretter hva du tror det betyr.',
    },
  ],
  exercises: [
    {
      id: 'geo1-10-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes saltsyre (HCl) til i felt?',
      options: [
        { id: 'a', text: 'Teste om bergarten inneholder karbonatmineraler', isCorrect: true },
        { id: 'b', text: 'Rense bergartsprover', isCorrect: false },
        { id: 'c', text: 'Lose opp forvitret materiale', isCorrect: false },
        { id: 'd', text: 'Etsing av prover for mikroskopi', isCorrect: false },
      ],
      solution: 'Saltsyre reagerer med kalsiumkarbonat (CaCO3) og gir brusing. Dette brukes for aa identifisere kalkstein, marmor og kalsittforekomster i andre bergarter.',
    },
    {
      id: 'geo1-10-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom strok og fall naar du maaler geologiske strukturer.',
      solution: 'Strok er retningen til en tenkt horisontal linje paa den geologiske flaten, oppgitt som kompassretning (0-360 grader). Fall er vinkelen flaten heller fra horisontalplanet (0-90 grader), sammen med fallretningen som er kompassretningen flaten heller mot. Eksempel: "Strok 045 grader, fall 30 grader mot sorost" beskriver en flate som gaar fra sorvest til nordost, og som heller 30 grader mot sorost.',
    },
    {
      id: 'geo1-10-2-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor bor du bruke blyant i feltboken?',
      options: [
        { id: 'a', text: 'Blyant fungerer i regn og kulde', isCorrect: true },
        { id: 'b', text: 'Blyant er billigere enn penn', isCorrect: false },
        { id: 'c', text: 'Blyant gir bedre skanning', isCorrect: false },
        { id: 'd', text: 'Penn er ikke tillatt paa feltarbeid', isCorrect: false },
      ],
      solution: 'Blyant skriver paa vaatt papir og fungerer i kulde, mens penn kan slutte aa virke eller blekke ut. Feltboken brukes ofte under krevende forhold.',
    },
    {
      id: 'geo1-10-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag en sjekkliste med minst 10 ting du bor ha med paa geologisk feltarbeid.',
      solution: 'Grunnleggende utstyr: 1) Geologisk hammer, 2) Lupe, 3) Kompass/Brunton, 4) GPS, 5) Feltbok og blyant, 6) Proveposer med merkelapper, 7) Kamera. Sikkerhetsutstyr: 8) Hjelm, 9) Vernebriller, 10) Forstehjelp. Praktisk: 11) Kart, 12) Mat og drikke, 13) Ekstra klaer, 14) Saltsyre (10% HCl), 15) Maalestokk for foto.',
    },
    {
      id: 'geo1-10-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal planlegge en feltdag for aa studere bergarter i et nytt omraade. Beskriv hvordan du forbereder deg og hva du gjor naar du kommer fram.',
      solution: 'Forberedelse: 1) Studer geologisk kart og flybilder, 2) Identifiser interessante blotninger, 3) Planlegg rute og tidsbruk, 4) Sjekk vaermelding og veiforhold, 5) Pakk utstyr og sikkerhetsutstyr, 6) Informer andre om planen. I felt: 1) Orienter deg med kart og GPS, 2) Gaa systematisk gjennom omraadet, 3) Stopp ved blotninger og beskriv bergart (farge, tekstur, mineraler), 4) Maal strukturer med kompass, 5) Ta representative prover med unike numre, 6) Fotografer og skisser viktige observasjoner, 7) Noter alt i feltboken med koordinater, 8) Skill beskrivelse fra tolkning.',
    },
  ],
};

// ============================================================================
// Kapittel 10.3: Kart og kartanalyse
// ============================================================================

export const CHAPTER_GEOFAG_1_10_3: TextbookChapter = {
  id: 'geofag-1-10-3',
  courseId: 'geofag-1',
  chapterNumber: '10.3',
  title: 'Kart og kartanalyse',
  description: 'Topografiske og geologiske kart, maalestokk, hoydekurver og koordinatsystemer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'lese og tolke topografiske og geologiske kart',
    'bruke maalestokk for aa beregne avstander',
    'forstaa hoydekurver og terrengformer',
    'bruke ulike koordinatsystemer',
  ],
  content: [
    {
      id: 'geo1-10-3-intro',
      type: 'text',
      content: `# Kart og kartanalyse

Kart er grunnleggende verktoy i geofag. De gir oss oversikt over terrenget og lar oss planlegge og dokumentere feltarbeid. I tillegg til vanlige topografiske kart bruker geofagfolk spesialkart som viser bergarter, losemasser og andre geologiske forhold.

## Typer kart i geofag

- **Topografiske kart**: Viser terreng, hoyder og landskap
- **Geologiske kart**: Viser bergarter og strukturer
- **Losemassekart**: Viser jordarter og kvartaeravsetninger
- **Tematiske kart**: Spesialiserte kart (grunnvann, skredfare, radon)`,
    },
    {
      id: 'geo1-10-3-def-topografisk',
      type: 'definition',
      title: 'Topografisk kart',
      content: 'Et topografisk kart viser terrengets form gjennom hoydekurver, i tillegg til naturlige og menneskeskapte elementer som elver, sjoer, veier og bygninger. Kartverkets N50-serie er Norges standard topografiske kart.',
    },
    {
      id: 'geo1-10-3-malestokk',
      type: 'text',
      content: `## Maalestokk

Maalestokken angir forholdet mellom avstander paa kartet og i virkeligheten.

### Vanlige maalestokker
- **1:50 000** (N50): 1 cm paa kartet = 500 m i terrenget
- **1:25 000**: 1 cm paa kartet = 250 m i terrenget
- **1:10 000**: 1 cm paa kartet = 100 m i terrenget
- **1:250 000**: Oversiktskart, 1 cm = 2.5 km

### Beregne avstander
**Formel**: Avstand i terrenget = Avstand paa kart x Maalestokkstall

**Eksempel**: Paa et 1:50 000 kart maaler du 3.2 cm mellom to punkter.
Avstand = 3.2 cm x 50 000 = 160 000 cm = 1600 m = 1.6 km

### Velge riktig maalestokk
- **Detaljkartlegging**: 1:10 000 eller storre
- **Regional oversikt**: 1:50 000
- **Landsdekkende**: 1:250 000`,
    },
    {
      id: 'geo1-10-3-hoydekurver',
      type: 'text',
      content: `## Hoydekurver

Hoydekurver (koter) er linjer som forbinder punkter med samme hoyde over havet.

### Ekvidistanse
- **Ekvidistanse**: Hoydeforskjellen mellom to nabokurver
- N50-kart: 20 meters ekvidistanse
- Detaljkart: 5 eller 10 meters ekvidistanse

### Lese terrenget
- **Tette kurver**: Bratt terreng
- **Spredte kurver**: Slakt terreng
- **Lukkede ringer**: Topp eller grop (sjekk tallene)
- **V-form mot hoy hoyde**: Dal eller bekk
- **U-form mot lav hoyde**: Rygg eller nes

### Spesielle kurver
- **Hovedkurver**: Tykkere linjer, hver 5. kurve
- **Hjelpekurver**: Stiplede linjer ved flatt terreng`,
    },
    {
      id: 'geo1-10-3-def-ekvidistanse',
      type: 'definition',
      title: 'Ekvidistanse',
      content: 'Ekvidistanse er den faste hoydeforskjellen mellom to paafolgende hoydekurver paa et kart. Paa norske N50-kart er ekvidistansen 20 meter. Mindre ekvidistanse gir mer detaljert terrenginfo.',
    },
    {
      id: 'geo1-10-3-koordinater',
      type: 'text',
      content: `## Koordinatsystemer

### Geografiske koordinater (bredde/lengde)
- Angis i grader, minutter, sekunder
- Eksempel: 59 grader 54' 32" N, 10 grader 45' 18" O (Oslo)
- Brukes internasjonalt, men upraktisk for avstandsmaaling

### UTM (Universal Transverse Mercator)
- Deler verden inn i 60 soner (Norge: sone 32-35)
- Angis i meter ost og nord innenfor sonen
- Eksempel: 32V 598432 6721845
  - 32V = Sone og belte
  - 598432 = Meter ost (Easting)
  - 6721845 = Meter nord (Northing)

### Fordeler med UTM
- Direkte avstandsmaaling i meter
- Enkelt aa beregne koordinater i felt
- Kompatibelt med GPS
- Standarden i norsk kartbruk`,
    },
    {
      id: 'geo1-10-3-geologiske-kart',
      type: 'text',
      content: `## Geologiske kart

### Hva viser et geologisk kart?
- **Bergarter**: Fargekoder for ulike typer
- **Alder**: Ofte angitt med farger og symboler
- **Strukturer**: Forkastninger, folder, laggrenser
- **Strok og fall**: Symboler viser orientering

### Norske geologiske kartserier
- **1:50 000**: Detaljerte bergrunnskart
- **1:250 000**: Regional oversikt
- **Losemassekart**: Kvartaeravsetninger

### Lese geologiske kart
- Bruk tegnforklaringen aktivt
- Merk aldersrelasjoner
- Folg grenser mellom enheter
- Kombiner med topografisk kart

### NGU sine kartlosninger
- ngu.no - gratis tilgang til geologiske kart
- Interaktive kartvisere
- Nedlastbare datasett`,
    },
    {
      id: 'geo1-10-3-example',
      type: 'example',
      title: 'Beregne helning fra kart',
      problem: 'Paa et 1:50 000 kart maaler du 2.4 cm mellom to hoydekurver som viser 200 m og 300 m. Hva er gjennomsnittlig helning?',
      solution: `**Losning:**

**Steg 1**: Beregn horisontal avstand
- Avstand paa kart: 2.4 cm
- Maalestokk: 1:50 000
- Horisontal avstand = 2.4 cm x 50 000 = 120 000 cm = 1200 m

**Steg 2**: Finn hoydeforskjell
- Hoydeforskjell = 300 m - 200 m = 100 m

**Steg 3**: Beregn helning
- Helning = Hoydeforskjell / Horisontal avstand
- Helning = 100 m / 1200 m = 0.083 = 8.3%
- Eller i grader: arctan(100/1200) = 4.8 grader

**Konklusjon**: Helningen er ca. 8% eller 5 grader (moderat skraaning).`,
    },
    {
      id: 'geo1-10-3-tip',
      type: 'tip',
      title: 'Nyttige tommelfingerregler',
      content: '- **Bratt**: Hoydekurver naermere enn 1 mm paa 1:50 000 kart (helning over 20 grader)\n- **Gangbart**: 2-5 mm mellom kurver\n- **Flatt**: Over 5 mm mellom kurver\n- **1 graders helning** tilsvarer ca. 1.7% stigning',
    },
  ],
  exercises: [
    {
      id: 'geo1-10-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Paa et kart med maalestokk 1:50 000 er avstanden mellom to punkter 4 cm. Hva er avstanden i virkeligheten?',
      options: [
        { id: 'a', text: '2 km', isCorrect: true },
        { id: 'b', text: '200 m', isCorrect: false },
        { id: 'c', text: '20 km', isCorrect: false },
        { id: 'd', text: '4 km', isCorrect: false },
      ],
      solution: 'Avstand = 4 cm x 50 000 = 200 000 cm = 2000 m = 2 km. Paa 1:50 000 kart tilsvarer 1 cm 500 meter.',
    },
    {
      id: 'geo1-10-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva hoydekurver viser og hvordan du kan lese terrengformen fra dem.',
      solution: 'Hoydekurver er linjer som forbinder punkter med samme hoyde over havet. Tette kurver viser bratt terreng, spredte kurver viser flatt terreng. V-formede kurver som peker oppover viser daler/bekker. Lukkede ringer viser topper (hvis tallene oker innover) eller groper (hvis tallene minker innover). Hovedkurver (tykkere) vises for hver 5. kurve.',
    },
    {
      id: 'geo1-10-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr ekvidistanse 20 m paa et kart?',
      options: [
        { id: 'a', text: 'Hoydeforskjellen mellom to nabokurver er 20 meter', isCorrect: true },
        { id: 'b', text: 'Avstanden mellom kurvene er 20 meter', isCorrect: false },
        { id: 'c', text: 'Kartet viser terreng opp til 20 meter hoyde', isCorrect: false },
        { id: 'd', text: 'Maalestokken er 1:20', isCorrect: false },
      ],
      solution: 'Ekvidistanse er den vertikale hoydeforskjellen mellom to paafolgende hoydekurver. Med 20 m ekvidistanse er kurvene merket 0, 20, 40, 60 meter osv.',
    },
    {
      id: 'geo1-10-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du planlegger en tursti som gaar fra 400 m til 800 m hoyde. Paa kartet (1:25 000) er den horisontale avstanden 8 cm. Beregn gjennomsnittlig helning i prosent og grader.',
      solution: 'Steg 1: Horisontal avstand = 8 cm x 25 000 = 200 000 cm = 2000 m. Steg 2: Hoydeforskjell = 800 m - 400 m = 400 m. Steg 3: Helning i prosent = (400/2000) x 100 = 20%. Steg 4: Helning i grader = arctan(400/2000) = arctan(0.2) = 11.3 grader. Dette er en ganske bratt sti som krever god kondisjon.',
    },
  ],
};

// ============================================================================
// Kapittel 10.4: GIS og digitale verktoy
// ============================================================================

export const CHAPTER_GEOFAG_1_10_4: TextbookChapter = {
  id: 'geofag-1-10-4',
  courseId: 'geofag-1',
  chapterNumber: '10.4',
  title: 'GIS og digitale verktoy',
  description: 'Geografiske informasjonssystemer, datalag, analyse og visualisering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa oppbyggingen av geografiske informasjonssystemer',
    'bruke digitale kartlosninger for geofaglige undersokelser',
    'kombinere og analysere ulike datalag',
    'vurdere kvalitet og begrensninger i digitale geodata',
  ],
  content: [
    {
      id: 'geo1-10-4-intro',
      type: 'text',
      content: `# GIS og digitale verktoy

Geografiske informasjonssystemer (GIS) har revolusjonert geofag. Vi kan naa kombinere enorme mengder data og utfore analyser som tidligere var umulige. Digitale verktoy gjor det enklere aa visualisere, analysere og dele geofaglige data.

## Hva er GIS?

GIS er digitale systemer for aa:
- **Samle inn** geografiske data
- **Lagre** data paa strukturert maate
- **Analysere** romlige sammenhenger
- **Visualisere** resultater som kart`,
    },
    {
      id: 'geo1-10-4-def-gis',
      type: 'definition',
      title: 'GIS (Geografisk informasjonssystem)',
      content: 'Et GIS er et datasystem for innsamling, lagring, analyse og presentasjon av geografisk informasjon. Data organiseres i lag som kan kombineres, og systemet kan utfore romlige analyser som buffersoner, overlagsanalyser og nettverksanalyser.',
    },
    {
      id: 'geo1-10-4-datamodeller',
      type: 'text',
      content: `## Datamodeller i GIS

### Vektordata
- **Punkter**: Enkeltlokasjoner (provestasjoner, bronn)
- **Linjer**: Lineaere objekter (elver, veier, forkastninger)
- **Polygoner**: Flater (innsjoer, bergartsomraader, kommuner)

Fordeler: Noeyaktige grenser, kompakt lagring, god for diskrete objekter

### Rasterdata
- Rutenett av celler (piksler) med verdier
- Hver celle har en verdi (hoyde, temperatur, bergartkode)
- Opplosning: Storrelsen paa cellene

Fordeler: God for kontinuerlige fenomener (hoyde, temperatur), enkel analyse

### Eksempel
- **Geologisk kart som vektor**: Hvert bergartsomraade er et polygon
- **Terrengmodell som raster**: Hver celle inneholder hoydeverdien`,
    },
    {
      id: 'geo1-10-4-lag',
      type: 'text',
      content: `## Datalag og overlagsanalyse

### Konseptet med lag
I GIS organiseres data i tematiske lag som kan kombineres:

1. **Topografi** (terrengmodell)
2. **Geologi** (bergarter)
3. **Losemasser** (jordarter)
4. **Hydrologi** (elver, innsjoer)
5. **Infrastruktur** (veier, bygninger)

### Overlagsanalyse
Ved aa kombinere lag kan vi finne sammenhenger:
- Hvor finnes losemasser av grus OG helning under 10 grader?
- Hvilke omraader har baade skredfare OG boliger?
- Hvor er avstand til vei mindre enn 500 m OG bergart er granitt?

### Buffersoner
En buffer er et omraade rundt et objekt:
- 100 m buffer rundt elv = Potensielt flompaavirket omraade
- 50 m buffer rundt bronn = Beskyttelsessone`,
    },
    {
      id: 'geo1-10-4-def-dtm',
      type: 'definition',
      title: 'Digital terrengmodell (DTM)',
      content: 'En digital terrengmodell er en rasterbasert representasjon av terrengets overflate der hver celle inneholder hoyde over havet. DTM brukes til helningsanalyser, hydrologisk modellering og 3D-visualisering. Norges DTM har 10 m opplosning.',
    },
    {
      id: 'geo1-10-4-norske-kilder',
      type: 'text',
      content: `## Norske geodatakilder

### Kartverket (kartverket.no)
- Topografiske kart (N50, N250)
- Hoydedata (DTM)
- Flyfoto og ortofoto
- Historiske kart

### NGU (ngu.no)
- Bergrunnskart (1:50 000 og 1:250 000)
- Losemassekart
- Grunnvannsdata
- Mineralressurser
- Radon-kart

### NVE (nve.no)
- Flomsonekart
- Skredfarekart (sno, jord, stein)
- Bredata
- Vassdragsdata

### Miljodirektoratet (miljodirektoratet.no)
- Naturtyper
- Verneomraader
- Forurensning`,
    },
    {
      id: 'geo1-10-4-analyse',
      type: 'text',
      content: `## Romlige analyser

### Terrenganalyse fra DTM
- **Helning**: Hvor bratt er terrenget? (grader eller prosent)
- **Aspekt**: Hvilken retning heller terrenget? (N, S, O, V)
- **Skyggerelieff**: 3D-lignende visualisering
- **Vannskille**: Hvor renner vannet?

### Nettverksanalyse
- Korteste vei mellom punkter
- Tilgjengelighetsanalyse (rekkevidde innen X minutter)
- Logistikkoptimalisering

### Naerhetsanalyse
- Finn alle punkter innen 1 km fra en forkastning
- Hvilke boliger er naermere enn 100 m fra skredomraade?`,
    },
    {
      id: 'geo1-10-4-example',
      type: 'example',
      title: 'Skredfare-analyse med GIS',
      problem: 'Hvordan kan GIS brukes til aa identifisere omraader med potensiell skredfare?',
      solution: `**GIS-analyse for skredfare:**

**Datalag som trengs:**
1. Digital terrengmodell (DTM)
2. Losemassekart
3. Bergrunnskart
4. Nedborsdata
5. Bygninger/infrastruktur

**Analysesteg:**
1. **Beregn helning** fra DTM (skredomraader typisk 25-45 grader)
2. **Identifiser kritiske losemasser** (marin leire, morene)
3. **Finn utsatte bergarter** (leirskifer, forvitret berg)
4. **Kombiner lag**: Helning over 25 grader OG kritisk losemasse
5. **Legg til utlosningsomraade**: Nedborsintensitet, snoforhold
6. **Buffer for utlopssone**: Modellert rekkevidde
7. **Overlag med bebyggelse**: Finn utsatte boliger

**Resultat**: Kart som viser risikoklasser (hoy/middels/lav) og utsatte objekter.`,
    },
    {
      id: 'geo1-10-4-warning',
      type: 'warning',
      title: 'Begrensninger i digitale data',
      content: 'Digitale kart og analyser har usikkerhet: 1) Opplosningsbegrensninger (10 m DTM viser ikke smaa detaljer), 2) Generaliseringer (geologiske grenser er ofte tolkninger), 3) Foreldet data (terrenget endrer seg), 4) Modellforenklinger (skredfaremodeller er forenklede). Verifiser alltid viktige funn i felt!',
    },
  ],
  exercises: [
    {
      id: 'geo1-10-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar GIS for?',
      options: [
        { id: 'a', text: 'Geografisk informasjonssystem', isCorrect: true },
        { id: 'b', text: 'Geologisk informasjonssenter', isCorrect: false },
        { id: 'c', text: 'Global infrastruktur for satellitter', isCorrect: false },
        { id: 'd', text: 'Generelt instrument for survey', isCorrect: false },
      ],
      solution: 'GIS staar for Geografisk informasjonssystem - et digitalt system for innsamling, lagring, analyse og presentasjon av geografiske data.',
    },
    {
      id: 'geo1-10-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom vektor- og rasterdata i GIS.',
      solution: 'Vektordata representerer objekter som punkter, linjer og polygoner med noeyaktige koordinater - egnet for diskrete objekter som veier, bygninger og eiendomsgrenser. Rasterdata er rutenett av celler der hver celle har en verdi - egnet for kontinuerlige fenomener som hoyde, temperatur eller satellittbilder. Vektor er noeyaktig men komplisert, raster er enklere aa analysere men har opplosningsbegrensninger.',
    },
    {
      id: 'geo1-10-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en buffersone i GIS?',
      options: [
        { id: 'a', text: 'Et omraade med en gitt avstand rundt et objekt', isCorrect: true },
        { id: 'b', text: 'En midlertidig lagringsplass for data', isCorrect: false },
        { id: 'c', text: 'Et verneomraade i naturen', isCorrect: false },
        { id: 'd', text: 'En feilmargin i maalinger', isCorrect: false },
      ],
      solution: 'En buffersone er et omraade som genereres rundt et objekt med en definert avstand. Eksempel: 100 m buffer rundt en elv gir et 100 m bredt omraade paa hver side som kan brukes til flomrisikoanalyse.',
    },
    {
      id: 'geo1-10-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan du ville brukt GIS til aa finne egnede steder for en ny grusplass. Hvilke datalag trenger du og hvilke analyser ville du gjort?',
      solution: 'Datalag: 1) Losemassekart (finne grusavsetninger), 2) DTM/terrengmodell (helning, drenering), 3) Veinett (tilgjengelighet), 4) Verneomraader (unngaa konflikter), 5) Bygninger (avstand til naboer), 6) Grunnvann (unngaa forurensning). Analyser: 1) Velg omraader med gruslosemasser, 2) Filtrer paa helning under 10 grader, 3) Beregn avstand til vei (under 500 m), 4) Fjern verneomraader med buffer, 5) Fjern omraader naermere enn 300 m fra boliger, 6) Sjekk avstand til grunnvannsforekomster. Resultat: Kart med potensielle omraader rangert etter egnethet.',
    },
  ],
};

// ============================================================================
// Kapittel 10.5: Rapportering og formidling
// ============================================================================

export const CHAPTER_GEOFAG_1_10_5: TextbookChapter = {
  id: 'geofag-1-10-5',
  courseId: 'geofag-1',
  chapterNumber: '10.5',
  title: 'Rapportering og formidling',
  description: 'Rapportskriving, dataanalyse, kildebruk og presentasjon av geofaglige undersokelser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'skrive strukturerte geofaglige rapporter',
    'analysere og presentere data i egnede grafer og tabeller',
    'vurdere og referere kilder korrekt',
    'formidle geofaglige funn muntlig og skriftlig',
  ],
  content: [
    {
      id: 'geo1-10-5-intro',
      type: 'text',
      content: `# Rapportering og formidling

Geofaglig arbeid er ikke fullfort for resultatene er dokumentert og delt. God formidling sikrer at kunnskapen kan brukes av andre og at arbeidet kan etterproves.

## Hvorfor er formidling viktig?

- **Dokumentasjon**: Bevare funn for fremtiden
- **Etterproving**: Andre kan sjekke konklusjonene
- **Kunnskapsdeling**: Bidra til fagfeltet
- **Beslutningstotte**: Gi grunnlag for praktiske avgjorelser
- **Laering**: Klargjor egen tenkning`,
    },
    {
      id: 'geo1-10-5-rapportstruktur',
      type: 'text',
      content: `## Rapportens oppbygging

### Standard struktur for geofaglig rapport

**1. Tittel og sammendrag**
- Beskrivende tittel
- Kort sammendrag av maal, metode og hovedfunn (abstrakt)

**2. Innledning**
- Bakgrunn for undersokelsen
- Problemstilling eller hypotese
- Avgrensning av arbeidet

**3. Omraadebeskrivelse**
- Beliggenhet og geografi
- Geologisk setting
- Tidligere arbeid i omraadet

**4. Metoder**
- Feltmetoder brukt
- Analysemetoder
- Utstyr og programvare

**5. Resultater**
- Presenter data objektivt
- Bruk tabeller og figurer
- Ikke tolk ennaa

**6. Diskusjon**
- Tolkning av resultater
- Sammenligning med andre studier
- Usikkerhet og begrensninger

**7. Konklusjon**
- Svar paa problemstillingen
- Hovedfunn oppsummert
- Forslag til videre arbeid

**8. Referanser**
- Alle kilder som er brukt`,
    },
    {
      id: 'geo1-10-5-def-abstrakt',
      type: 'definition',
      title: 'Abstrakt/Sammendrag',
      content: 'Et abstrakt er et kort sammendrag (100-300 ord) som gir leseren oversikt over hele arbeidet. Det skal inneholde formaal, metode, hovedresultater og konklusjon. Mange leser bare abstraktet, saa det maa vaere selvstendig og informativt.',
    },
    {
      id: 'geo1-10-5-dataanalyse',
      type: 'text',
      content: `## Dataanalyse og presentasjon

### Statistiske maal

**Sentralmaal**
- **Gjennomsnitt**: Sum av verdier / antall verdier
- **Median**: Midterste verdi naar data er sortert
- **Typetall**: Mest vanlige verdi

**Spredningsmaal**
- **Variasjonsbredde**: Storste minus minste verdi
- **Standardavvik**: Maal paa hvor mye verdiene avviker fra gjennomsnittet

### Velge riktig graftype

**Stolpediagram**
- Sammenligne kategorier
- Eksempel: Antall bergartsprover per type

**Sektordiagram**
- Vise andeler av en helhet
- Eksempel: Mineralsammensetning i prosent

**Linjediagram**
- Vise endring over tid
- Eksempel: Vannstand gjennom aaret

**Spredningsplott**
- Vise sammenheng mellom to variable
- Eksempel: Kornstorrelse vs. permeabilitet

**Histogram**
- Vise fordeling av data
- Eksempel: Fordeling av kornstorrelser`,
    },
    {
      id: 'geo1-10-5-figurer',
      type: 'text',
      content: `## Tabeller og figurer

### God tabelldesign
- Tydelig overskrift med tabellnummer
- Klare kolonneoverskrifter med enheter
- Organisert logisk (kronologisk, geografisk, etc.)
- Ikke for mange desimaler

### God figurdesign
- Figurnummer og beskrivende tekst
- Tydelige aksetitler med enheter
- Lesbar skrift (ikke for liten)
- Forklaring (tegnforklaring) om nodvendig
- Maalestokk paa kart og foto

### Henvisning i tekst
- "Tabell 1 viser..."
- "Som vist i Figur 3..."
- Alle figurer og tabeller maa omtales i teksten`,
    },
    {
      id: 'geo1-10-5-kilder',
      type: 'text',
      content: `## Kildebruk og referanser

### Typer kilder
- **Primaerkilder**: Egne data og observasjoner
- **Sekundaerkilder**: Andres arbeid (artikler, rapporter, kart)

### Vurdere kilder
1. **Hvem** staar bak? (Universitet, myndighet, privatperson?)
2. **Naar** er det publisert? (Er det oppdatert?)
3. **Hvor** er det publisert? (Fagfellevurdert tidsskrift?)
4. **Hvorfor** er det laget? (Formaal, mulig bias?)

### Referansestil
**Bok**: Forfatter (aar). *Tittel*. Forlag.
**Artikkel**: Forfatter (aar). Tittel. *Tidsskrift*, volum(nummer), sider.
**Nettside**: Organisasjon (aar). Tittel. Hentet fra URL

### Eksempler
- NGU (2023). *Berggrunn N250*. Norges geologiske undersokelse. https://www.ngu.no
- Ramberg, I.B. et al. (2008). *The Making of a Land - Geology of Norway*. Norsk Geologisk Forening.`,
    },
    {
      id: 'geo1-10-5-formidling',
      type: 'text',
      content: `## Muntlig formidling

### Presentasjonsteknikk
- Tilpass til maalgruppen
- Bruk visuelle hjelpemidler (bilder, kart, grafer)
- Fortell en historie - fra problem til losning
- Hold deg til hovedpoengene
- Ov paa forhaand

### Poster
- Visuelt tiltalende
- Kan leses paa 3-5 minutter
- Logisk flytt fra topp til bunn
- Stor tekst og tydelige figurer
- Kontaktinformasjon

### Populaerformidling
- Unngaa fagsprak eller forklar det
- Bruk konkrete eksempler
- Relater til noe kjent
- Fortell hvorfor det er viktig`,
    },
    {
      id: 'geo1-10-5-example',
      type: 'example',
      title: 'Analysere og presentere feltdata',
      problem: 'Du har malt kornstorrelse i 20 jordprover. Hvordan analyserer og presenterer du dataene?',
      solution: `**Steg 1: Organiser radata**
Lag tabell med provenummer, lokalitet, kornstorrelse

**Steg 2: Beregn statistikk**
- Gjennomsnitt: 0.45 mm
- Median: 0.42 mm
- Standardavvik: 0.15 mm
- Variasjonsbredde: 0.18 - 0.82 mm

**Steg 3: Lag figurer**
- Histogram: Viser fordelingen av kornstorrelser
- Kart: Viser provepunktene med fargekoding

**Steg 4: Skriv resultattekst**
"Jordprovene viser en gjennomsnittlig kornstorrelse paa 0.45 mm (standardavvik 0.15 mm), som tilsvarer mellomsand. Kornstorrelsen varierer fra 0.18 mm (finsand) til 0.82 mm (grovsand). Figur 4 viser at de groveste kornene finnes naer elveutlopet."

**Steg 5: Tolkning i diskusjonen**
"Den avtagende kornstorrelsen bort fra elveutlopet er konsistent med avsetting fra en bre-elv der grovt materiale avsettes forst."`,
    },
    {
      id: 'geo1-10-5-tip',
      type: 'tip',
      title: 'Tips for god rapportskriving',
      content: '1) **Start med disposisjon**: Planlegg strukturen for du skriver. 2) **Skriv resultater for diskusjon**: Hold dem adskilt. 3) **Vaer konkret**: Tall og fakta, ikke vage formuleringer. 4) **Faa tilbakemelding**: La andre lese utkast. 5) **Sjekk referanser**: Alle paastand maa ha kilde eller vaere egne data.',
    },
  ],
  exercises: [
    {
      id: 'geo1-10-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken graftype er best egnet for aa vise endring i temperatur over tid?',
      options: [
        { id: 'a', text: 'Linjediagram', isCorrect: true },
        { id: 'b', text: 'Sektordiagram', isCorrect: false },
        { id: 'c', text: 'Stolpediagram', isCorrect: false },
        { id: 'd', text: 'Spredningsplott', isCorrect: false },
      ],
      solution: 'Linjediagram er ideelt for aa vise hvordan en variabel endrer seg over tid, slik at man ser trender og monster i utviklingen.',
    },
    {
      id: 'geo1-10-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom resultat- og diskusjonsdelen i en rapport.',
      solution: 'Resultatdelen presenterer data objektivt uten tolkning - hva du fant. Bruk tabeller og figurer. Diskusjonsdelen tolker hva resultatene betyr, sammenligner med andre studier, og drofter usikkerhet. Eksempel: Resultat - "Gjennomsnittstemperaturen var 7.2 grader". Diskusjon - "Temperaturen er typisk for grunt grunnvann og viser sesongvariasjon som tyder paa kontakt med overflaten".',
    },
    {
      id: 'geo1-10-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke fire sporsmaal bor du stille for aa vurdere en kilde?',
      options: [
        { id: 'a', text: 'Hvem, naar, hvor og hvorfor', isCorrect: true },
        { id: 'b', text: 'Hva, hvordan, hvor mye og hvor lenge', isCorrect: false },
        { id: 'c', text: 'Navn, sted, tid og pris', isCorrect: false },
        { id: 'd', text: 'Teori, metode, resultat og konklusjon', isCorrect: false },
      ],
      solution: '1) HVEM staar bak kilden? (Troverdighet) 2) NAAR er det publisert? (Aktualitet) 3) HVOR er det publisert? (Kvalitetssikring) 4) HVORFOR er det laget? (Formaal og mulig bias)',
    },
    {
      id: 'geo1-10-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva et godt abstrakt/sammendrag skal inneholde.',
      solution: 'Et godt abstrakt (100-300 ord) skal inneholde: 1) Formaal - hva undersokelsen handler om og hvorfor den er viktig. 2) Metode - kort om hvordan undersokelsen ble gjennomfort. 3) Hovedresultater - de viktigste funnene med konkrete tall. 4) Konklusjon - hva funnene betyr. Abstraktet skal vaere selvstendig slik at leseren faar oversikt uten aa lese hele rapporten.',
    },
    {
      id: 'geo1-10-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du har gjennomfort en feltundersokelse av losemasser i et omraade. Skriv en kort disposisjon for rapporten med punkter under hver hoveddel.',
      solution: '1) Tittel og sammendrag: Beskrivende tittel, 150 ord sammendrag. 2) Innledning: Bakgrunn, problemstilling, avgrensning. 3) Omraadebeskrivelse: Beliggenhet, topografi, regional geologi, kvartaerhistorie. 4) Metoder: Feltarbeid (kartlegging, provetaking), laboratorieanalyser (kornfordeling), GIS-analyse. 5) Resultater: Losemassekart, provetabeller, kornfordelingsgrafer. 6) Diskusjon: Tolkning av avsetningstype, sammenligning med regional kvartaergeologi, usikkerhet. 7) Konklusjon: Hovedfunn, praktiske implikasjoner, videre arbeid. 8) Referanser: NGU-kart, regional litteratur, metodehenvisninger.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 10
// ============================================================================

export const GEOFAG_1_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_10_1,
  CHAPTER_GEOFAG_1_10_2,
  CHAPTER_GEOFAG_1_10_3,
  CHAPTER_GEOFAG_1_10_4,
  CHAPTER_GEOFAG_1_10_5,
];

export function getGeofag1Del10Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL10_CHAPTERS.find(chapter => chapter.id === chapterId);
}
