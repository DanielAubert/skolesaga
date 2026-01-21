/**
 * Kroppsøving 9. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på 9. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Avansert treningslære
// ============================================================================

export const CHAPTER_KROPPSOVING_9_1_1: TextbookChapter = {
  id: 'kroppsoving-9-1-1',
  courseId: 'kroppsoving-9',
  chapterNumber: '1.1',
  title: 'Periodisering og treningsplanlegging',
  description: 'Lær å planlegge trening over tid for optimal utvikling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre variert trening',
  ],
  content: [
    {
      id: 'kroppsoving-9-1-1-intro',
      type: 'text',
      content: `Periodisering handler om å dele opp treningen i faser med ulike mål. Ved å variere belastning og type trening over tid kan du oppnå bedre resultater og unngå skader og overtrenning.`,
    },
    {
      id: 'kroppsoving-9-1-1-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er systematisk planlegging av trening over tid, der man varierer belastning, intensitet og treningstype i ulike faser for å nå spesifikke mål.`,
    },
    {
      id: 'kroppsoving-9-1-1-text-1',
      type: 'text',
      content: `**Treningsperioder**

**Makrosyklus**: Hele treningsåret eller sesongen
- Inneholder flere mesosykluser
- Bygger mot et hovedmål (f.eks. konkurranse)

**Mesosyklus**: 3-6 uker med samme fokus
- Grunnperiode: Bygge opp grunnformen
- Oppbyggingsperiode: Øke intensitet
- Konkurranseperiode: Topp form
- Overgangsperiode: Hvile og restitusjon

**Mikrosyklus**: En treningsuke
- Variasjon mellom harde og lette dager`,
    },
    {
      id: 'kroppsoving-9-1-1-text-2',
      type: 'text',
      content: `**Superkompensasjon**

Når du trener, bryter du ned kroppen litt. I hvileperioden bygger kroppen seg opp igjen - og litt til. Dette kalles superkompensasjon.

**Prinsippet**:
1. Trening belaster kroppen
2. Restitusjon (kroppen reparerer)
3. Superkompensasjon (kroppen blir sterkere enn før)
4. Neste trening bør komme på dette "toppunktet"

Trener du for ofte, får ikke kroppen tid til å bygge seg opp. Trener du for sjelden, mister du effekten.`,
    },
    {
      id: 'kroppsoving-9-1-1-tip-1',
      type: 'tip',
      title: 'Hold treningsdagbok',
      content: `Skriv ned hva du trener, hvor mye og hvordan det føltes. Da kan du følge fremgangen og justere treningen underveis.`,
    },
    {
      id: 'kroppsoving-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av periodisering.',
            solution: 'Systematisk planlegging av trening over tid',
            multipleChoiceOptions: [
              'Systematisk planlegging av trening over tid',
              'Å trene samme øvelse hver dag',
              'Å aldri hvile',
              'En type løpetrening',
            ],
          },
        ],
        solution: 'Periodisering er systematisk planlegging av trening i ulike faser med varierende belastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en mesosyklus?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva en mesosyklus er.',
            solution: 'En treningsperiode på 3-6 uker med samme fokus',
            multipleChoiceOptions: [
              'En treningsperiode på 3-6 uker med samme fokus',
              'En treningsuke',
              'Et helt treningsår',
              'En enkelt treningsøkt',
            ],
          },
        ],
        solution: 'En mesosyklus er en treningsblokk på 3-6 uker med spesifikt fokus, som grunntrening eller konkurranseforberedelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er superkompensasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet superkompensasjon.',
            solution: 'At kroppen bygger seg sterkere enn før etter hvile',
            multipleChoiceOptions: [
              'At kroppen bygger seg sterkere enn før etter hvile',
              'Å trene ekstra hardt',
              'Å hvile i flere uker',
              'En type konkurranseform',
            ],
          },
        ],
        solution: 'Superkompensasjon skjer når kroppen restituerer og bygger seg opp til et høyere nivå enn før treningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør man variere mellom harde og lette dager?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar verdien av variasjon i ukeplanen.',
            solution: 'For å gi kroppen tid til å restituere mellom harde økter',
            multipleChoiceOptions: [
              'For å gi kroppen tid til å restituere mellom harde økter',
              'Fordi det er kjedelig å trene hardt',
              'For å spare tid',
              'Det er ikke viktig å variere',
            ],
          },
        ],
        solution: 'Variasjon sikrer at kroppen får restituert ordentlig, noe som gir bedre utvikling og forebygger skader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_9_1_2: TextbookChapter = {
  id: 'kroppsoving-9-1-2',
  courseId: 'kroppsoving-9',
  chapterNumber: '1.2',
  title: 'Styrketrening og muskelfysiologi',
  description: 'Lær om hvordan muskler fungerer og styrkes.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjennomføre styrketrening med god teknikk',
  ],
  content: [
    {
      id: 'kroppsoving-9-1-2-intro',
      type: 'text',
      content: `Styrketrening handler om å belaste musklene slik at de blir sterkere. For å trene effektivt og trygt er det viktig å forstå hvordan muskler fungerer og hvordan de tilpasser seg trening.`,
    },
    {
      id: 'kroppsoving-9-1-2-def-1',
      type: 'definition',
      title: 'Muskelhypertrofi',
      content: `Muskelhypertrofi er økning i muskelstørrelse som følge av trening. Muskelfibrene blir tykkere, noe som gir større og sterkere muskler.`,
    },
    {
      id: 'kroppsoving-9-1-2-text-1',
      type: 'text',
      content: `**Muskeltyper**

**Skjelettmuskulatur**: Styrer bevegelse
- Festes til skjelettet via sener
- Styres bevisst (viljestyrt)
- Eksempel: Biceps, quadriceps

**Hjertemuskulatur**: Pumper blod
- Jobber automatisk hele livet

**Glatt muskulatur**: Indre organer
- Tarmene, blodårene
- Jobber automatisk

**Muskelfibre**:
- Type I (langsomme): Utholdenhet
- Type II (raske): Kraft og hurtighet`,
    },
    {
      id: 'kroppsoving-9-1-2-text-2',
      type: 'text',
      content: `**Styrketreningsmetoder**

**Kroppsvektøvelser**:
- Push-ups, sit-ups, planke, utfall, knebøy
- Ingen utstyr nødvendig
- God for teknikklæring

**Frivekter**:
- Manualer, vektstang
- Aktiverer stabiliserende muskler
- Krever god teknikk

**Apparater**:
- Styrt bevegelse
- Tryggere for nybegynnere
- Isolerer enkeltmuskler

**Rep og sett**:
- 3-5 sett med 8-12 reps gir muskelbygging
- Pause 60-90 sekunder mellom sett`,
    },
    {
      id: 'kroppsoving-9-1-2-warning-1',
      type: 'warning',
      title: 'Teknikk først',
      content: `Lær alltid riktig teknikk før du øker vekten. Dårlig teknikk kan føre til alvorlige skader, særlig i ryggen.`,
    },
    {
      id: 'kroppsoving-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er muskelhypertrofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av muskelhypertrofi.',
            solution: 'Økning i muskelstørrelse',
            multipleChoiceOptions: [
              'Økning i muskelstørrelse',
              'Reduksjon i muskelstørrelse',
              'En type muskelfiber',
              'En skade i muskelen',
            ],
          },
        ],
        solution: 'Muskelhypertrofi er når muskelfibrene blir tykkere som følge av styrketrening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken type muskelfibrer er best for utholdenhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig muskelfibreype for utholdenhet.',
            solution: 'Type I (langsomme fibre)',
            multipleChoiceOptions: [
              'Type I (langsomme fibre)',
              'Type II (raske fibre)',
              'Alle fibre er like',
              'Hjertemuskelfibre',
            ],
          },
        ],
        solution: 'Type I-fibre er langsomme og utholdende, mens Type II-fibre gir rask kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange repetisjoner anbefales for muskelbygging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg anbefalt antall repetisjoner.',
            solution: '8-12 repetisjoner',
            multipleChoiceOptions: [
              '8-12 repetisjoner',
              '1-3 repetisjoner',
              '50-100 repetisjoner',
              'Det spiller ingen rolle',
            ],
          },
        ],
        solution: '8-12 repetisjoner per sett er optimalt for muskelbygging (hypertrofi).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er kroppsvektøvelser gode for nybegynnere?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar fordelen med kroppsvektøvelser.',
            solution: 'De krever ingen utstyr og er gode for teknikklæring',
            multipleChoiceOptions: [
              'De krever ingen utstyr og er gode for teknikklæring',
              'De er vanskeligere enn vektløfting',
              'De gir best resultater',
              'De er bare for profesjonelle',
            ],
          },
        ],
        solution: 'Kroppsvektøvelser er tilgjengelige og lar deg fokusere på teknikk før du legger til motstand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Idretter og teknikk
// ============================================================================

export const CHAPTER_KROPPSOVING_9_2_1: TextbookChapter = {
  id: 'kroppsoving-9-2-1',
  courseId: 'kroppsoving-9',
  chapterNumber: '2.1',
  title: 'Spillforståelse og taktikk',
  description: 'Lær om taktikk, strategi og spillforståelse i lagspill.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utvikle spillforståelse i ulike ballspill',
  ],
  content: [
    {
      id: 'kroppsoving-9-2-1-intro',
      type: 'text',
      content: `Spillforståelse handler om å "lese" spillet - å forstå hva som skjer, forutse utviklingen og ta gode valg. God spillforståelse gjør deg til en bedre lagspiller.`,
    },
    {
      id: 'kroppsoving-9-2-1-def-1',
      type: 'definition',
      title: 'Taktikk',
      content: `Taktikk er planlagte spillemønstre og strategier som et lag bruker for å oppnå et mål, enten i angrep eller forsvar.`,
    },
    {
      id: 'kroppsoving-9-2-1-text-1',
      type: 'text',
      content: `**Angrepsprinsipper**

1. **Bredde**: Spre spillet for å skape rom
2. **Dybde**: Ha spillere på ulike linjer
3. **Bevegelse**: Kontinuerlig bevegelse uten ball
4. **Støtte**: Være pasningsalternativ for ballholder
5. **Improvisasjon**: Utnytte uventede muligheter

**Spillsituasjoner i angrep**:
- 1 mot 1: Utfordre forsvarer direkte
- Overlapp: Løp forbi ballholder utenfra
- Vegg/retur: Rask passning og tilbakespill
- Gjennombrudd: Spille seg gjennom forsvaret`,
    },
    {
      id: 'kroppsoving-9-2-1-text-2',
      type: 'text',
      content: `**Forsvarsprinsipper**

1. **Press**: Sett ballholder under press
2. **Dekking**: Dekk rom og motspillere
3. **Sikring**: Ha en ekstra forsvarer bak
4. **Kompakthet**: Hold laget samlet
5. **Kommunikasjon**: Snakk sammen

**Forsvarsformasjoner**:
- Soneforsvar: Dekker områder
- Mannsforsvar: Følger bestemte motspillere
- Kombinert: Blanding av begge

**Pressing**: Aktivt forsvar høyt i banen for å vinne ballen tilbake tidlig.`,
    },
    {
      id: 'kroppsoving-9-2-1-tip-1',
      type: 'tip',
      title: 'Se opp og rundt deg',
      content: `Skann banen før du får ballen. Da vet du allerede hva du skal gjøre når ballen kommer, og du kan ta raskere og bedre valg.`,
    },
    {
      id: 'kroppsoving-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr bredde i angrep?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar prinsippet om bredde.',
            solution: 'Å spre spillet for å skape rom',
            multipleChoiceOptions: [
              'Å spre spillet for å skape rom',
              'Å samle alle spillere i midten',
              'Å spille ballen bakover',
              'Å løpe så fort som mulig',
            ],
          },
        ],
        solution: 'Bredde i angrep betyr å bruke hele banens bredde, noe som strekker forsvaret og skaper rom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på soneforsvar og mannsforsvar?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom de to forsvarstypene.',
            solution: 'Soneforsvar dekker områder, mannsforsvar følger spillere',
            multipleChoiceOptions: [
              'Soneforsvar dekker områder, mannsforsvar følger spillere',
              'De er det samme',
              'Soneforsvar er best',
              'Mannsforsvar brukes aldri',
            ],
          },
        ],
        solution: 'I soneforsvar dekker hver spiller et område av banen. I mannsforsvar følger hver spiller en bestemt motspiller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er pressing i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva pressing innebærer.',
            solution: 'Aktivt forsvar høyt i banen for å vinne ballen tilbake',
            multipleChoiceOptions: [
              'Aktivt forsvar høyt i banen for å vinne ballen tilbake',
              'Å stå og vente',
              'En type angrepsformasjon',
              'Å spille med mange forsvarere',
            ],
          },
        ],
        solution: 'Pressing er når laget forsvarer aktivt høyt i banen for å presse motstanderen til feil og vinne ballen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er kommunikasjon viktig i forsvar?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar betydningen av kommunikasjon i forsvar.',
            solution: 'For å koordinere bevegelser og unngå hull i forsvaret',
            multipleChoiceOptions: [
              'For å koordinere bevegelser og unngå hull i forsvaret',
              'For å forstyrre motstanderen',
              'Det er ikke viktig',
              'Bare for keeperen',
            ],
          },
        ],
        solution: 'God kommunikasjon hjelper forsvarerne å koordinere dekning, varsle om farer og unngå at motspillere blir glemt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_9_2_2: TextbookChapter = {
  id: 'kroppsoving-9-2-2',
  courseId: 'kroppsoving-9',
  chapterNumber: '2.2',
  title: 'Individuelle idretter',
  description: 'Lær om teknikk og trening i individuelle idretter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utvikle ferdigheter i individuelle idretter',
  ],
  content: [
    {
      id: 'kroppsoving-9-2-2-intro',
      type: 'text',
      content: `Individuelle idretter lar deg utfordre deg selv og fokusere på personlig utvikling. Du setter dine egne mål og kan måle fremgang tydelig.`,
    },
    {
      id: 'kroppsoving-9-2-2-def-1',
      type: 'definition',
      title: 'Mental trening',
      content: `Mental trening er teknikker for å styrke konsentrasjonen, håndtere press og visualisere gode prestasjoner. Det er like viktig som fysisk trening for prestasjon.`,
    },
    {
      id: 'kroppsoving-9-2-2-text-1',
      type: 'text',
      content: `**Svømming**

**Teknikk er avgjørende**:
- Kroppsstilling: Ligge høyt i vannet
- Armtak: Effektiv kraftoverføring
- Beinspark: Rytmisk og støttende
- Pust: Koordinert med armtak

**Svømmearter**:
- Crawl (fristil): Raskest
- Ryggcrawl: På ryggen
- Brystsvømming: Mest energieffektiv
- Butterfly: Mest teknisk krevende`,
    },
    {
      id: 'kroppsoving-9-2-2-text-2',
      type: 'text',
      content: `**Løping**

**Løpsteknikk**:
- Avslappet overkropp
- Aktive armer i takt med beina
- Kort kontakttid med bakken
- Tilpasset skrittlengde

**Treningsformer**:
- Langkjøring: Rolig tempo, bygger utholdenhet
- Intervaller: Vekselvis hardt og lett
- Fartlek: Varierende tempo etter følelse
- Tempo: Jevnt høyt tempo over tid

**Energisystemer**: Aerobt (med oksygen) ved lavere intensitet, anaerobt (uten tilstrekkelig oksygen) ved høy intensitet.`,
    },
    {
      id: 'kroppsoving-9-2-2-tip-1',
      type: 'tip',
      title: 'Visualisering',
      content: `Før en prestasjon, lukk øynene og se for deg at du gjennomfører øvelsen perfekt. Dette forbereder både kropp og sinn.`,
    },
    {
      id: 'kroppsoving-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er mental trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av mental trening.',
            solution: 'Teknikker for konsentrasjon og visualisering',
            multipleChoiceOptions: [
              'Teknikker for konsentrasjon og visualisering',
              'Å tenke på trening uten å gjøre den',
              'Hjernetrim',
              'En type yoga',
            ],
          },
        ],
        solution: 'Mental trening bruker teknikker som visualisering og konsentrasjonsøvelser for å forbedre prestasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken svømmeart regnes som raskest?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den raskeste svømmearten.',
            solution: 'Crawl (fristil)',
            multipleChoiceOptions: [
              'Crawl (fristil)',
              'Brystsvømming',
              'Ryggcrawl',
              'Butterfly',
            ],
          },
        ],
        solution: 'Crawl er den raskeste svømmearten og brukes i fristilkonkurranser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er intervalltrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva intervalltrening innebærer.',
            solution: 'Vekselvis hardt og lett arbeid',
            multipleChoiceOptions: [
              'Vekselvis hardt og lett arbeid',
              'Rolig løping hele tiden',
              'Bare sprint',
              'Hvile mellom hver trening',
            ],
          },
        ],
        solution: 'Intervalltrening veksler mellom perioder med høy og lav intensitet, noe som utvikler både fart og utholdenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr aerob trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva aerob trening innebærer.',
            solution: 'Trening med tilstrekkelig oksygentilførsel',
            multipleChoiceOptions: [
              'Trening med tilstrekkelig oksygentilførsel',
              'Trening uten oksygen',
              'Bare styrketrening',
              'Trening i vann',
            ],
          },
        ],
        solution: 'Aerob trening foregår med nok oksygen til musklene, typisk ved moderat intensitet over lengre tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Friluftsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_9_3_1: TextbookChapter = {
  id: 'kroppsoving-9-3-1',
  courseId: 'kroppsoving-9',
  chapterNumber: '3.1',
  title: 'Avansert orientering',
  description: 'Lær videregående orienteringsteknikker og ruteplanning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre orienteringsløp',
  ],
  content: [
    {
      id: 'kroppsoving-9-3-1-intro',
      type: 'text',
      content: `Orientering handler om å finne veien fra post til post ved hjelp av kart og kompass. På 9. trinn fordyper vi oss i rutevalg, terrengformer og effektiv navigasjon.`,
    },
    {
      id: 'kroppsoving-9-3-1-def-1',
      type: 'definition',
      title: 'Rutevalg',
      content: `Rutevalg er prosessen med å velge den beste veien mellom to poster. Den korteste ruten er ikke alltid den raskeste - terreng, underlag og høydeforskjeller spiller inn.`,
    },
    {
      id: 'kroppsoving-9-3-1-text-1',
      type: 'text',
      content: `**Terrengformer på kart**

**Høydekurver viser**:
- Tette kurver = bratt terreng
- Spredte kurver = slakt terreng
- Lukket ring = kolle (topp) eller grop (bunn)

**Spesielle terrengformer**:
- Rygger: Langstrakte forhøyninger
- Søkk: Langstrakte forsenkninger
- Sadler: Lavpunkt mellom to høyder
- Kupert terreng: Mange små høydeforskjeller

**Karttegn**: Stein, klippe, grøft, myr, tetthet på vegetasjon - alt gir informasjon om fremkommelighet.`,
    },
    {
      id: 'kroppsoving-9-3-1-text-2',
      type: 'text',
      content: `**Orienteringsteknikker**

**Tommelgrep**: Hold tommelen på kartet der du er
- Oppdater posisjonen kontinuerlig
- Kartet holdes stilt inn (nord mot nord)

**Ledelinjer**: Følg synlige linjer i terrenget
- Stier, bekker, kraftgater, gjerder
- Rask og sikker navigasjon

**Angrepspost**: Lett synlig punkt nær posten
- Naviger først til angrepsposten
- Derfra nøyaktig inn til posten

**Peilingsgange**: Gå på kompassretning
- Bruk når det er få holdepunkter
- Tell skritt for å anslå avstand`,
    },
    {
      id: 'kroppsoving-9-3-1-tip-1',
      type: 'tip',
      title: 'Forenkling',
      content: `Forenkle kartet i hodet - fokuser på de viktigste terrengformene og ignorer detaljer. Det gjør det lettere å holde kartkontakt under løping.`,
    },
    {
      id: 'kroppsoving-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr tette høydekurver på kartet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva tette høydekurver indikerer.',
            solution: 'Bratt terreng',
            multipleChoiceOptions: [
              'Bratt terreng',
              'Flatt terreng',
              'Vann',
              'Skog',
            ],
          },
        ],
        solution: 'Når høydekurvene ligger tett, betyr det at terrenget stiger eller synker raskt - altså bratt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en angrepspost i orientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva angrepspost betyr.',
            solution: 'Et tydelig punkt nær målet som du navigerer til først',
            multipleChoiceOptions: [
              'Et tydelig punkt nær målet som du navigerer til først',
              'Den første posten på løypa',
              'En post som gir ekstra poeng',
              'Starten',
            ],
          },
        ],
        solution: 'En angrepspost er et lett identifiserbart punkt nær posten. Du navigerer først dit, så tar du den siste biten nøyaktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tommelgrepet i orientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar tommelgrepet.',
            solution: 'Å holde tommelen på kartet der du befinner deg',
            multipleChoiceOptions: [
              'Å holde tommelen på kartet der du befinner deg',
              'En type grep på kompasset',
              'Å brette kartet',
              'En teknikk for å løpe fortere',
            ],
          },
        ],
        solution: 'Ved tommelgrepet holder du tommelen på kartet der du er, og flytter den kontinuerlig etter hvert som du beveger deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er ledelinjer nyttige i orientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar fordelen med ledelinjer.',
            solution: 'De gir rask og sikker navigasjon uten å måtte se på kartet hele tiden',
            multipleChoiceOptions: [
              'De gir rask og sikker navigasjon uten å måtte se på kartet hele tiden',
              'De er vakrere å løpe langs',
              'De er obligatoriske å bruke',
              'De gir ekstra poeng',
            ],
          },
        ],
        solution: 'Ledelinjer som stier og bekker er lette å følge og gir sikker navigasjon uten konstant kartlesing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_9_3_2: TextbookChapter = {
  id: 'kroppsoving-9-3-2',
  courseId: 'kroppsoving-9',
  chapterNumber: '3.2',
  title: 'Vinteraktiviteter og skiferdigheter',
  description: 'Lær om ulike vinteraktiviteter og skiteknikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'delta i ulike former for friluftsliv til ulike årstider',
  ],
  content: [
    {
      id: 'kroppsoving-9-3-2-intro',
      type: 'text',
      content: `Norge har lange vintre med unike muligheter for aktivitet. Å beherske skiferdigheter gir frihet til å nyte naturen også om vinteren.`,
    },
    {
      id: 'kroppsoving-9-3-2-def-1',
      type: 'definition',
      title: 'Diagonalgang',
      content: `Diagonalgang er den grunnleggende langrennsteknikken der motsatt arm og bein arbeider sammen, akkurat som ved gange.`,
    },
    {
      id: 'kroppsoving-9-3-2-text-1',
      type: 'text',
      content: `**Klassiske langrennskikk**

**Diagonalgang** (slakt terreng/motbakke):
- Motsatt arm og bein frem samtidig
- Aktivt fraspark med festeski
- Dynamisk overføring av vekt

**Staking** (flatt/slak nedoverbakke):
- Fraspark med stavene
- Effektivt på preparert løype
- Krevende for overkroppen

**Skøyting** (fri teknikk):
- Sideveis fraspark som på skøyter
- Raskere, men krever mer plass
- Egen preparering av løype`,
    },
    {
      id: 'kroppsoving-9-3-2-text-2',
      type: 'text',
      content: `**Vinteraktiviteter**

**Alpint**: Utfor og slalåm
- Kantgrep og kurveteknikk
- Sikkerhet på heiser og i bakken

**Truger/snøsko**: Gå på løs snø
- Fordeler vekten over større flate
- Egnet for turer utenfor løyper

**Aking**: Fra enkel aking til bob
- Styring og bremsing
- Velg trygg bakke

**Skredfare**: Ved ferdsel utenfor løyper
- Sjekk varsom.no
- Lær å vurdere terreng og snøforhold`,
    },
    {
      id: 'kroppsoving-9-3-2-warning-1',
      type: 'warning',
      title: 'Skredfare',
      content: `Snøskred kan være livsfarlige. Sjekk alltid skredfarevarsel på varsom.no før du ferdes i bratt terreng om vinteren.`,
    },
    {
      id: 'kroppsoving-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner diagonalgang?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv diagonalgang i langrenn.',
            solution: 'Motsatt arm og bein arbeider sammen',
            multipleChoiceOptions: [
              'Motsatt arm og bein arbeider sammen',
              'Samme arm og bein arbeider sammen',
              'Bare armene brukes',
              'Bare beina brukes',
            ],
          },
        ],
        solution: 'Diagonalgang ligner naturlig gange der motsatt arm og bein beveger seg frem samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Når passer staking best i langrenn?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig terreng for staking.',
            solution: 'På flatt terreng og slake nedoverbakker',
            multipleChoiceOptions: [
              'På flatt terreng og slake nedoverbakker',
              'I bratte motbakker',
              'I løs snø',
              'I nedoverbakker',
            ],
          },
        ],
        solution: 'Staking er effektivt på flatt og lett nedover, der du kan holde farten med stavtakene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er fordelen med truger/snøsko?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar nytten av truger.',
            solution: 'De fordeler vekten og hindrer at du synker i løs snø',
            multipleChoiceOptions: [
              'De fordeler vekten og hindrer at du synker i løs snø',
              'De gjør deg raskere',
              'De holder føttene varme',
              'De er lettere enn ski',
            ],
          },
        ],
        solution: 'Truger sprer vekten over et større område slik at du flyter oppå snøen i stedet for å synke ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor bør du sjekke skredfaren før en vintertur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kilde for snøskredvarsel.',
            solution: 'varsom.no',
            multipleChoiceOptions: [
              'varsom.no',
              'yr.no',
              'Wikipedia',
              'Sosiale medier',
            ],
          },
        ],
        solution: 'Varsom.no gir oppdaterte snøskredvarsler fra Norges vassdrags- og energidirektorat (NVE).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Dans og bevegelse
// ============================================================================

export const CHAPTER_KROPPSOVING_9_4_1: TextbookChapter = {
  id: 'kroppsoving-9-4-1',
  courseId: 'kroppsoving-9',
  chapterNumber: '4.1',
  title: 'Koreografi og skapende dans',
  description: 'Lær å lage egne danser og bevegelsessekvenser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skape og utføre dans og bevegelsesaktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-9-4-1-intro',
      type: 'text',
      content: `Koreografi handler om å sette sammen bevegelser til en helhetlig dans. Det er kreativt arbeid der du uttrykker ideer og følelser gjennom kroppen.`,
    },
    {
      id: 'kroppsoving-9-4-1-def-1',
      type: 'definition',
      title: 'Koreografi',
      content: `Koreografi er kunsten å komponere dans ved å kombinere bevegelser, rombruk, dynamikk og musikk til en helhetlig framføring.`,
    },
    {
      id: 'kroppsoving-9-4-1-text-1',
      type: 'text',
      content: `**Elementer i koreografi**

**Kropp**: Hvilke kroppsdeler brukes?
- Hele kroppen, bare overkroppen, armer, hender
- Isolasjoner vs. helhetlige bevegelser

**Rom**: Hvordan brukes rommet?
- Nivåer: lavt, mellom, høyt
- Retninger: fremover, bakover, sidelengs
- Formasjoner i grupper

**Tid**: Tempo og rytme
- Raskt eller langsomt
- Med eller mot musikken
- Pauser og aksenter

**Kraft/dynamikk**: Energibruk
- Mykt/hardt, tungt/lett
- Bundet/fritt`,
    },
    {
      id: 'kroppsoving-9-4-1-text-2',
      type: 'text',
      content: `**Skapende prosess**

1. **Idé**: Hva vil du uttrykke?
   - Et tema, en følelse, en historie

2. **Utforsking**: Eksperimenter med bevegelser
   - Prøv ulike måter å uttrykke ideen
   - Noter ned det som fungerer

3. **Struktur**: Bygg opp dansen
   - Begynnelse, midtdel, avslutning
   - Gjentakelser og variasjoner

4. **Øving**: Lær og finpuss
   - Timing, synkronisering
   - Overganger mellom deler

5. **Fremføring**: Vis frem dansen
   - Uttrykk og tilstedeværelse`,
    },
    {
      id: 'kroppsoving-9-4-1-tip-1',
      type: 'tip',
      title: 'Gjentakelse med variasjon',
      content: `En god koreografi har gjenkjennelige elementer som gjentas, men med variasjoner. Det skaper både helhet og interesse.`,
    },
    {
      id: 'kroppsoving-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er koreografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av koreografi.',
            solution: 'Kunsten å komponere dans',
            multipleChoiceOptions: [
              'Kunsten å komponere dans',
              'En type musikk',
              'En dansestil',
              'Et sceneteppe',
            ],
          },
        ],
        solution: 'Koreografi er å komponere og sette sammen dans ved å kombinere bevegelser med musikk og rombruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med nivåer i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva nivåer betyr i dans.',
            solution: 'Bevegelser lavt, midt eller høyt i rommet',
            multipleChoiceOptions: [
              'Bevegelser lavt, midt eller høyt i rommet',
              'Hvor vanskelig dansen er',
              'Antall dansere',
              'Volumet på musikken',
            ],
          },
        ],
        solution: 'Nivåer handler om høyden i rommet - fra gulvnivå, via stående, til hopp i luften.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr dynamikk i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar dynamikk i dans.',
            solution: 'Energibruken i bevegelsene - mykt/hardt, tungt/lett',
            multipleChoiceOptions: [
              'Energibruken i bevegelsene - mykt/hardt, tungt/lett',
              'Tempoet i musikken',
              'Antall gjentakelser',
              'Kostymene',
            ],
          },
        ],
        solution: 'Dynamikk handler om kvaliteten på bevegelsen - er den myk og flytende, eller skarp og kraftfull?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er gjentakelse viktig i koreografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar verdien av gjentakelse i dans.',
            solution: 'Det skaper gjenkjennelighet og helhet',
            multipleChoiceOptions: [
              'Det skaper gjenkjennelighet og helhet',
              'Det er lettere å huske',
              'Det tar mindre tid',
              'Det er obligatorisk',
            ],
          },
        ],
        solution: 'Gjentakelse gir publikum noe å kjenne igjen og skaper sammenheng i koreografien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_9_4_2: TextbookChapter = {
  id: 'kroppsoving-9-4-2',
  courseId: 'kroppsoving-9',
  chapterNumber: '4.2',
  title: 'Avansert turn og akrobatikk',
  description: 'Lær mer avanserte turn- og akrobatikkelementer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre sammensatte bevegelsessekvenser i turn',
  ],
  content: [
    {
      id: 'kroppsoving-9-4-2-intro',
      type: 'text',
      content: `På 9. trinn bygger vi videre på grunnleggende turn med mer avanserte elementer og kombinasjoner. Sikkerhet og progresjon er fortsatt avgjørende.`,
    },
    {
      id: 'kroppsoving-9-4-2-def-1',
      type: 'definition',
      title: 'Serie',
      content: `En serie i turn er en sammenhengende sekvens av elementer utført uten stopp, der overgangene mellom øvelsene flyter naturlig.`,
    },
    {
      id: 'kroppsoving-9-4-2-text-1',
      type: 'text',
      content: `**Avanserte gulvøvelser**

**Hjul**: Sidelengs rotasjon
- Hånd-hånd-fot-fot nedslag
- Strak kropp gjennom bevegelsen
- Start med å øve mot vegg

**Handstand**: Balanse på hendene
- Kroppsspenning avgjørende
- Øv først mot vegg
- Lær å "falle riktig" (rulle ut)

**Flikk-flakk**: Bakoverhopp med avsett fra beina
- Avansert øvelse - krever instruktør
- Progresjon med sikring og matte

**Kombinasjoner**:
- Forbindelseselementer mellom øvelser
- Flyt og rytme i serien`,
    },
    {
      id: 'kroppsoving-9-4-2-text-2',
      type: 'text',
      content: `**Partnerakrobatikk**

**Grunnprinsipper**:
- Kommunikasjon: Avtal signaler
- Tillit: Bygges gradvis
- Sikkerhet: Alltid spotter/sikring

**Roller**:
- Base: Nederst, bærer vekten
- Flyer: Øverst, utfører elementer
- Spotter: Sikrer og hjelper

**Enkle partnerelementer**:
- Stol (flyer sitter på bases knær)
- Planke (flyer ligger strak på bases føtter)
- Skulderstand (flyer står på bases skuldre)

**Progresjon**: Start lavt og enkelt, bygg opp gradvis med sikring.`,
    },
    {
      id: 'kroppsoving-9-4-2-warning-1',
      type: 'warning',
      title: 'Aldri uten sikring',
      content: `Avanserte turn- og akrobatikkelementer skal alltid utføres med sikring (spotter) og på proper underlag. Aldri prøv vanskelige øvelser alene.`,
    },
    {
      id: 'kroppsoving-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en serie i turn?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av serie.',
            solution: 'En sammenhengende sekvens av øvelser',
            multipleChoiceOptions: [
              'En sammenhengende sekvens av øvelser',
              'Antall repetisjoner',
              'En enkelt øvelse',
              'En type matte',
            ],
          },
        ],
        solution: 'En serie er flere turnøvelser satt sammen til en flytende sekvens med naturlige overganger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er basen i partnerakrobatikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar basens rolle.',
            solution: 'Personen nederst som bærer vekten',
            multipleChoiceOptions: [
              'Personen nederst som bærer vekten',
              'Personen som hopper',
              'Matten',
              'Treneren',
            ],
          },
        ],
        solution: 'Basen er personen nederst i pyramiden eller figuren som støtter og bærer flyeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er kroppsspenning viktig i handstand?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar betydningen av kroppsspenning.',
            solution: 'For å holde balansen og ha kontroll',
            multipleChoiceOptions: [
              'For å holde balansen og ha kontroll',
              'For at det skal se fint ut',
              'Det er ikke viktig',
              'For å bli sliten',
            ],
          },
        ],
        solution: 'Med god kroppsspenning blir kroppen en stabil enhet som er lettere å balansere enn en slapp kropp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er spotterens oppgave?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv spotterens rolle.',
            solution: 'Å sikre og hjelpe utøveren',
            multipleChoiceOptions: [
              'Å sikre og hjelpe utøveren',
              'Å telle poeng',
              'Å velge musikk',
              'Å rydde matter',
            ],
          },
        ],
        solution: 'Spotteren sikrer at utøveren ikke skader seg og hjelper til ved behov, for eksempel ved å støtte balansen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Helse og prestasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_9_5_1: TextbookChapter = {
  id: 'kroppsoving-9-5-1',
  courseId: 'kroppsoving-9',
  chapterNumber: '5.1',
  title: 'Ernæring og prestasjon',
  description: 'Lær om sammenhengen mellom kosthold og fysisk ytelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå betydningen av kosthold for fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-9-5-1-intro',
      type: 'text',
      content: `Mat er drivstoff for kroppen. Riktig ernæring gir bedre energi, raskere restitusjon og bedre prestasjoner. For aktive ungdommer er balansert kosthold ekstra viktig.`,
    },
    {
      id: 'kroppsoving-9-5-1-def-1',
      type: 'definition',
      title: 'Energibalanse',
      content: `Energibalanse handler om forholdet mellom energien du får fra mat og energien du bruker. Ved balanse holder du vekten stabil.`,
    },
    {
      id: 'kroppsoving-9-5-1-text-1',
      type: 'text',
      content: `**Næringsstoffene**

**Karbohydrater**: Hovedenergikilde
- Brød, ris, pasta, frukt, grønnsaker
- Lagres som glykogen i muskler og lever
- Viktig før og under aktivitet

**Proteiner**: Byggesteiner for muskler
- Kjøtt, fisk, egg, meieriprodukter, belgfrukter
- Viktig for restitusjon og muskeloppbygging
- 1,2-2,0 gram per kg kroppsvekt for aktive

**Fett**: Energilager og hormoner
- Nøtter, oljer, fisk, avokado
- Viktig for langvarig aktivitet
- Umettet fett er sunnest`,
    },
    {
      id: 'kroppsoving-9-5-1-text-2',
      type: 'text',
      content: `**Timing av mat**

**Før trening** (2-4 timer før):
- Karbohydratrik mat
- Moderat protein, lite fett
- Eksempel: Brødskive med pålegg, frukt

**Under trening** (over 60 min):
- Vann eller sportsdrikk
- Enkle karbohydrater ved behov

**Etter trening** (innen 30-60 min):
- Kombinasjon karbohydrat + protein
- Fyller glykogenlagrene
- Starter muskelreparasjon
- Eksempel: Smoothie, sjokolademelk, brødskive

**Væske**: Drikk regelmessig, ikke bare når du er tørst.`,
    },
    {
      id: 'kroppsoving-9-5-1-tip-1',
      type: 'tip',
      title: 'Restitusjonsmat',
      content: `Sjokolademelk er overraskende god restitusjonsmat - den inneholder den rette kombinasjonen av karbohydrater og protein.`,
    },
    {
      id: 'kroppsoving-9-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kroppens hovedenergikilde under aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig energikilde.',
            solution: 'Karbohydrater',
            multipleChoiceOptions: [
              'Karbohydrater',
              'Proteiner',
              'Fett',
              'Vitaminer',
            ],
          },
        ],
        solution: 'Karbohydrater er kroppens foretrukne energikilde ved moderat til høy intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er protein viktig for aktive personer?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar proteinets rolle for aktive.',
            solution: 'For muskelreparasjon og oppbygging',
            multipleChoiceOptions: [
              'For muskelreparasjon og oppbygging',
              'Som hovedenergikilde',
              'For å bli raskere',
              'For bedre balanse',
            ],
          },
        ],
        solution: 'Proteiner er byggesteinene kroppen bruker til å reparere og bygge muskler etter trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når bør du spise etter trening for best restitusjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tidsvindu for restitusjonsmat.',
            solution: 'Innen 30-60 minutter',
            multipleChoiceOptions: [
              'Innen 30-60 minutter',
              'Rett før du legger deg',
              'Ikke spise i det hele tatt',
              'Dagen etter',
            ],
          },
        ],
        solution: 'Det "anabole vinduet" innen 30-60 minutter etter trening er optimalt for å fylle glykogenlagre og starte muskelreparasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør restitusjonsmat inneholde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig sammensetning for restitusjonsmat.',
            solution: 'Karbohydrater og protein',
            multipleChoiceOptions: [
              'Karbohydrater og protein',
              'Bare fett',
              'Bare vann',
              'Bare vitaminer',
            ],
          },
        ],
        solution: 'En kombinasjon av karbohydrater (for å fylle glykogenlagre) og protein (for muskelreparasjon) er ideelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_9_5_2: TextbookChapter = {
  id: 'kroppsoving-9-5-2',
  courseId: 'kroppsoving-9',
  chapterNumber: '5.2',
  title: 'Idrettspsykologi og motivasjon',
  description: 'Lær om mentale faktorer som påvirker prestasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over motivasjon og mentale prosesser i aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-9-5-2-intro',
      type: 'text',
      content: `Mentale ferdigheter er like viktige som fysiske for gode prestasjoner. Å forstå motivasjon, håndtere press og sette seg mål kan gjøre deg til en bedre utøver.`,
    },
    {
      id: 'kroppsoving-9-5-2-def-1',
      type: 'definition',
      title: 'Indre motivasjon',
      content: `Indre motivasjon er når du driver med en aktivitet fordi den i seg selv gir deg glede, interesse eller tilfredshet - ikke på grunn av ytre belønninger.`,
    },
    {
      id: 'kroppsoving-9-5-2-text-1',
      type: 'text',
      content: `**Motivasjon**

**Indre motivasjon**:
- Aktiviteten i seg selv er belønningen
- Glede, mestring, interesse
- Mer varig og robust

**Ytre motivasjon**:
- Belønninger utenfra
- Premier, anerkjennelse, karakterer
- Kan være effektivt, men mindre varig

**Hva skaper motivasjon?**
- Autonomi: Følelse av valg og kontroll
- Kompetanse: Følelse av mestring
- Tilhørighet: Følelse av å være del av noe`,
    },
    {
      id: 'kroppsoving-9-5-2-text-2',
      type: 'text',
      content: `**Målsetting**

**SMART-mål**:
- **S**pesifikt: Konkret og tydelig
- **M**ålbart: Kan måles/evalueres
- **A**mbisiøst: Utfordrende nok
- **R**ealistisk: Oppnåelig
- **T**idsbestemt: Deadline

**Typer mål**:
- Resultatmål: "Vinne løpet"
- Prestasjonsmål: "Løpe på under 15 min"
- Prosessmål: "Fokusere på teknikken"

Prosessmål gir mest kontroll og er ofte mest effektive for utvikling.`,
    },
    {
      id: 'kroppsoving-9-5-2-text-3',
      type: 'text',
      content: `**Håndtere press**

**Prestasjonsangst**: Nervøsitet før prestasjon
- Noe nervøsitet er normalt og kan være positivt
- For mye hemmer prestasjonen

**Teknikker**:
- Pusteøvelser: Rolig, dyp pust
- Visualisering: Se for deg en god prestasjon
- Positiv selvsnakk: "Jeg kan dette"
- Fokusering: Konsentrer deg om prosessen, ikke resultatet
- Rutiner: Faste ritualer før prestasjon`,
    },
    {
      id: 'kroppsoving-9-5-2-tip-1',
      type: 'tip',
      title: 'Fokuser på det du kan kontrollere',
      content: `Du kan ikke kontrollere motstanderne eller forholdene, men du kan kontrollere din egen innsats og innstilling. Fokuser på det.`,
    },
    {
      id: 'kroppsoving-9-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er indre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av indre motivasjon.',
            solution: 'Å drive med noe fordi det gir glede i seg selv',
            multipleChoiceOptions: [
              'Å drive med noe fordi det gir glede i seg selv',
              'Å drive med noe for å vinne premier',
              'Å bli tvunget til å delta',
              'Å trene for å imponere andre',
            ],
          },
        ],
        solution: 'Indre motivasjon kommer fra aktiviteten selv - gleden, interessen og tilfredsheten den gir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr M i SMART-mål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av M.',
            solution: 'Målbart',
            multipleChoiceOptions: [
              'Målbart',
              'Motiverende',
              'Morsomt',
              'Månedlig',
            ],
          },
        ],
        solution: 'M står for Målbart - målet skal kunne evalueres, slik at du vet om du har nådd det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type mål gir mest kontroll?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg måltypen som gir mest kontroll.',
            solution: 'Prosessmål',
            multipleChoiceOptions: [
              'Prosessmål',
              'Resultatmål',
              'Drømmemål',
              'Langsiktige mål',
            ],
          },
        ],
        solution: 'Prosessmål fokuserer på ting du kan kontrollere (teknikk, innsats), i motsetning til resultatmål som avhenger av andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-9-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-9-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du gjøre for å håndtere nervøsitet før en prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en effektiv teknikk mot nervøsitet.',
            solution: 'Pusteøvelser og visualisering',
            multipleChoiceOptions: [
              'Pusteøvelser og visualisering',
              'Tenke på alt som kan gå galt',
              'Ignorere nervøsiteten helt',
              'Trene ekstra hardt rett før',
            ],
          },
        ],
        solution: 'Rolig pusting og visualisering av en god prestasjon hjelper kroppen og sinnet å roe seg ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KROPPSOVING_9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_9_1_1,
  CHAPTER_KROPPSOVING_9_1_2,
  CHAPTER_KROPPSOVING_9_2_1,
  CHAPTER_KROPPSOVING_9_2_2,
  CHAPTER_KROPPSOVING_9_3_1,
  CHAPTER_KROPPSOVING_9_3_2,
  CHAPTER_KROPPSOVING_9_4_1,
  CHAPTER_KROPPSOVING_9_4_2,
  CHAPTER_KROPPSOVING_9_5_1,
  CHAPTER_KROPPSOVING_9_5_2,
];
