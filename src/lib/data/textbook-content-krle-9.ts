/**
 * Tekstbok innhold for KRLE 9. klasse
 *
 * Følger LK20 læreplan for KRLE (Kristendom, religion, livssyn og etikk) ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Reformasjonen
// ============================================================================

export const CHAPTER_KRLE_9_1_1: TextbookChapter = {
  id: 'krle-9-1-1',
  courseId: 'krle-9',
  chapterNumber: '1.1',
  title: 'Reformasjonen',
  description: 'Lær om reformasjonen og dens betydning for kristendommen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og drøfte hvordan kristendom og andre religioner inngår i historiske endringsprosesser'
  ],
  content: [
    {
      id: 'krle-9-1-1-intro',
      type: 'text',
      content: `
# Reformasjonen

Reformasjonen var en religiøs omveltning på 1500-tallet som splittet den vestlige
kristenheten. Den førte til opprettelsen av protestantiske kirker og endret
Europa for alltid.
      `
    },
    {
      id: 'krle-9-1-1-def-reform',
      type: 'definition',
      title: 'Hva var reformasjonen?',
      content: `**Reformasjonen** var en religiøs og politisk bevegelse som startet i 1517.

Kjennetegn:
- Kritikk av den katolske kirken
- Ønske om å reformere (endre) kirken
- Førte til opprettelsen av protestantiske kirker
- Bibelen ble oversatt til folkespråkene
- Endret maktbalansen i Europa`
    },
    {
      id: 'krle-9-1-1-luther',
      type: 'text',
      title: 'Martin Luther',
      content: `
## Martin Luther (1483-1546)

Martin Luther var en tysk munk og professor som startet reformasjonen.

**1517**: Luther hengte opp sine 95 teser på kirkedøren i Wittenberg.

**Luthers kritikk av kirken:**
- Avlatshandel (å kjøpe seg fri fra straff for synder)
- Pavens autoritet
- Kirkens rikdom og makt
- At kirken la tradisjon på lik linje med Bibelen

**Luthers hovedpunkter:**
- **Sola scriptura** - Bibelen alene er autoritet
- **Sola fide** - Frelse ved tro alene
- **Sola gratia** - Frelse ved nåde alene
      `
    },
    {
      id: 'krle-9-1-1-avlat',
      type: 'definition',
      title: 'Avlatshandel',
      content: `**Avlat** var en ordning der den katolske kirken tilga synder mot betaling.

Pengene ble brukt til å bygge Peterskirken i Roma.

Johann Tetzel var en kjent avlatsselger som sa:
*"Når pengene i kisten klinger, sjelen ut av skjærsilden springer."*

Luther mente dette var feil fordi:
- Frelse er en gave fra Gud, ikke noe man kan kjøpe
- Paven kan ikke frita mennesker fra Guds dom
- Det utnyttet fattige mennesker`
    },
    {
      id: 'krle-9-1-1-konsekvenser',
      type: 'text',
      title: 'Konsekvenser av reformasjonen',
      content: `
## Hva førte reformasjonen til?

**Religiøse konsekvenser:**
- Opprettelsen av lutherske og reformerte kirker
- Den katolske kirken reformerte seg selv (motreformasjonen)
- Religiøse kriger i Europa

**Samfunnsmessige konsekvenser:**
- Bibelen ble oversatt til nasjonalspråkene
- Økt lesekyndighet
- Skolevesenet ble utviklet
- Endret maktforhold mellom kirke og stat

**I Norge:**
- Reformasjonen ble innført i 1537
- Den lutherske kirke ble statskirke
- Katolske klostre ble lagt ned
- Kirkens eiendommer ble konfiskert av kongen
      `
    },
    {
      id: 'krle-9-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Når startet reformasjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Når startet reformasjonen?',
            solution: '1517',
            multipleChoiceOptions: ['1517', '1066', '1789', '1814'],
          },
        ],
        solution: 'Reformasjonen startet i 1517 da Martin Luther hengte opp sine 95 teser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva var avlatshandel?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var avlatshandel?',
            solution: 'At kirken tilga synder mot betaling',
            multipleChoiceOptions: ['At kirken tilga synder mot betaling', 'Handel med religiøse bøker', 'Salg av kirkebygninger', 'Handel mellom klostre'],
          },
        ],
        solution: 'Avlatshandel var salg av tilgivelse for synder, noe Luther sterkt kritiserte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "sola scriptura"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "sola scriptura"?',
            solution: 'Bibelen alene er autoritet',
            multipleChoiceOptions: ['Bibelen alene er autoritet', 'Bare paven kan tolke Bibelen', 'Skriften er hellig', 'Bibelen må være på latin'],
          },
        ],
        solution: 'Sola scriptura betyr at Bibelen alene er autoritet i trosspørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk reformasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor Luther kritiserte avlatshandelen.',
            solution: 'Luther mente at frelse er en gave fra Gud som ikke kan kjøpes. Han mente at avlatshandel utnyttet fattige mennesker og ga dem falsk trygghet. Bibelen sier at frelse kommer gjennom tro, ikke penger.',
            multipleChoiceOptions: ['Frelse er en gave fra Gud som ikke kan kjøpes', 'Avlat var for billig', 'Pengene gikk til feil formål', 'Bare prester skulle selge avlat'],
          },
          {
            label: 'b',
            task: 'Nevn to konsekvenser reformasjonen hadde for Norge.',
            solution: 'Eksempler: 1) Den lutherske kirke ble statskirke i 1537. 2) Katolske klostre ble lagt ned. 3) Kirkens eiendommer ble konfiskert. 4) Bibelen ble oversatt til dansk (som nordmenn kunne lese).',
            multipleChoiceOptions: ['Luthersk statskirke og nedlegging av klostre', 'Norge ble katolsk', 'Alle nordmenn måtte lære latin', 'Kirken fikk mer makt'],
          }
        ],
        hints: ['Tenk på hva Luther mente om frelse', 'Tenk på hva som skjedde med den katolske kirken i Norge'],
        solution: 'Reformasjonen endret både religion og samfunn i Europa og Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Kristendommen i dag
// ============================================================================

export const CHAPTER_KRLE_9_1_2: TextbookChapter = {
  id: 'krle-9-1-2',
  courseId: 'krle-9',
  chapterNumber: '1.2',
  title: 'Kristendommen i dag',
  description: 'Utforsk hvordan kristendommen praktiseres i dag og dens rolle i samfunnet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere hvordan religion kommer til uttrykk i samfunnet i dag'
  ],
  content: [
    {
      id: 'krle-9-1-2-intro',
      type: 'text',
      content: `
# Kristendommen i dag

Kristendommen er fortsatt verdens største religion med over 2,4 milliarder
tilhengere. Men kristendommens rolle i samfunnet har endret seg mye, særlig
i vestlige land.
      `
    },
    {
      id: 'krle-9-1-2-norge',
      type: 'text',
      title: 'Kristendommen i Norge',
      content: `
## Kristendommen i Norge i dag

**Den norske kirke:**
- Tidligere statskirke (til 2012)
- Ca. 68% av befolkningen er medlemmer (synkende)
- Mange døpes, konfirmeres og gifter seg i kirken
- Færre går i kirken regelmessig

**Andre kristne kirker i Norge:**
- Pinsebevegelsen
- Den katolske kirke (voksende pga. innvandring)
- Frikirkelige menigheter
- Ortodokse kirker

**Sekularisering:**
- Religion har fått mindre betydning i samfunnet
- Skille mellom stat og kirke
- Færre tror på Gud
- Flere er humanister eller "åndelige, men ikke religiøse"
      `
    },
    {
      id: 'krle-9-1-2-def-sekular',
      type: 'definition',
      title: 'Sekularisering',
      content: `**Sekularisering** betyr at religion får mindre betydning i samfunnet.

Kjennetegn på sekularisering:
- Færre går i kirken
- Færre tror på Gud
- Religion blir en privatsak
- Samfunnet styres etter ikke-religiøse prinsipper
- Vitenskapelig forklaring erstatter religiøs forklaring

I Norge har sekulariseringen økt kraftig siden 1960-tallet.`
    },
    {
      id: 'krle-9-1-2-verden',
      type: 'text',
      title: 'Kristendommen globalt',
      content: `
## Kristendommen i verden

**Hvor vokser kristendommen?**
- Afrika sør for Sahara
- Latin-Amerika
- Asia (særlig Kina og Sør-Korea)

**Hvor synker kristendommen?**
- Vest-Europa
- Nord-Amerika (avtar)
- Australia

**Viktige trender:**
- Pinsekarismatiske kirker vokser raskt
- Den katolske kirke er størst (1,3 milliarder)
- Evangeliske kirker vokser i Sør
- Kristendommens tyngdepunkt flyttes fra nord til sør
      `
    },
    {
      id: 'krle-9-1-2-rolle',
      type: 'note',
      title: 'Kristendommens rolle i samfunnet',
      content: `Kristendommen påvirker samfunnet på mange måter:

**Kultur og tradisjon:**
- Helligdager som jul og påske
- Kirkebygg og arkitektur
- Kunst, musikk og litteratur

**Verdier:**
- Menneskeverd og likeverd
- Nestekjærlighet
- Tilgivelse

**Sosialt arbeid:**
- Diakonalt arbeid (hjelp til trengende)
- Kirkens Bymisjon
- Internasjonalt hjelpearbeid`
    },
    {
      id: 'krle-9-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er sekularisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sekularisering?',
            solution: 'At religion får mindre betydning i samfunnet',
            multipleChoiceOptions: ['At religion får mindre betydning i samfunnet', 'At flere blir religiøse', 'At kirken får mer makt', 'At alle blir ateister'],
          },
        ],
        solution: 'Sekularisering er prosessen der religion får mindre betydning i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'I hvilke deler av verden vokser kristendommen mest?',
        subTasks: [
          {
            label: 'a',
            task: 'I hvilke deler av verden vokser kristendommen mest?',
            solution: 'Afrika og Latin-Amerika',
            multipleChoiceOptions: ['Afrika og Latin-Amerika', 'Europa og Nord-Amerika', 'Australia og New Zealand', 'Skandinavia og Russland'],
          },
        ],
        solution: 'Kristendommen vokser mest i Afrika sør for Sahara, Latin-Amerika og deler av Asia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Når sluttet Den norske kirke å være statskirke?',
        subTasks: [
          {
            label: 'a',
            task: 'Når sluttet Den norske kirke å være statskirke?',
            solution: '2012',
            multipleChoiceOptions: ['2012', '1814', '1905', '2000'],
          },
        ],
        solution: 'Den norske kirke ble formelt skilt fra staten i 2012.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Diskuter kristendommens rolle i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi eksempler på hvordan kristendommen fortsatt påvirker norsk kultur og tradisjon.',
            solution: 'Eksempler: Helligdager som jul og påske er fridager, kirkebygg i de fleste lokalsamfunn, mange gifter seg i kirken, konfirmasjon, navnedager fra helgener, kristen etikk påvirker lover og verdier.',
            multipleChoiceOptions: ['Helligdager, kirkebygg, konfirmasjon, verdier', 'Kristendommen har ingen innflytelse', 'Bare mat og klær', 'Bare politikk'],
          },
          {
            label: 'b',
            task: 'Hva menes med at "kristendommens tyngdepunkt flyttes fra nord til sør"?',
            solution: 'Det betyr at mens kristendommen svekkes i Europa og Nord-Amerika (nord), vokser den raskt i Afrika, Latin-Amerika og Asia (sør). Flertallet av verdens kristne bor nå i det globale sør.',
            multipleChoiceOptions: ['Kristendommen vokser i sør og synker i nord', 'Paven flytter til Sør-Amerika', 'Kirker bygges i sør', 'Bibelens handling foregår i sør'],
          }
        ],
        hints: ['Tenk på tradisjoner og høytider', 'Tenk på statistikk og demografi'],
        solution: 'Kristendommen er i endring både i Norge og globalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Islamsk tro og praksis
// ============================================================================

export const CHAPTER_KRLE_9_2_1: TextbookChapter = {
  id: 'krle-9-2-1',
  courseId: 'krle-9',
  chapterNumber: '2.1',
  title: 'Islamsk tro og praksis',
  description: 'Utforsk islams trosgrunnlag og religiøse praksis i dybden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive og reflektere over sentral tro og praksis i islam'
  ],
  content: [
    {
      id: 'krle-9-2-1-intro',
      type: 'text',
      content: `
# Islamsk tro og praksis

Islam betyr "underkastelse" eller "overgivelse" til Guds vilje. Med ca. 1,8
milliarder tilhengere er islam verdens nest største religion. I dette kapitlet
ser vi nærmere på hva muslimer tror og hvordan de praktiserer sin tro.
      `
    },
    {
      id: 'krle-9-2-1-def-tro',
      type: 'definition',
      title: 'De seks trosartiklene',
      content: `Muslimer tror på:

1. **Allah** - Den ene Gud, allmektig og barmhjertig
2. **Englene** - Skapninger av lys som gjør Guds vilje
3. **Skriftene** - Koranen og tidligere åpenbaringer
4. **Profetene** - Fra Adam til Muhammad (den siste)
5. **Dommedag** - Alle skal stå til rette for sine gjerninger
6. **Guds forutbestemmelse** - Allah har kunnskap om alt som skjer`
    },
    {
      id: 'krle-9-2-1-koranen',
      type: 'text',
      title: 'Koranen og hadith',
      content: `
## Koranen

**Koranen** er islams helligste bok:
- Muslimer tror den er Guds ord, åpenbart til Muhammad
- Skrevet på arabisk
- Delt inn i 114 kapitler (surer)
- Resiteres i bønn og ved høytider
- Skal behandles med respekt

## Hadith

**Hadith** er beretninger om hva Muhammad sa og gjorde:
- Supplerer Koranen
- Veileder muslimer i dagliglivet
- Samlet etter Muhammads død
- Ulike hadith-samlinger vurderes forskjellig
      `
    },
    {
      id: 'krle-9-2-1-soylene',
      type: 'definition',
      title: 'De fem søylene',
      content: `Islams fem grunnleggende plikter:

**1. Shahada (trosbekjennelsen)**
"Det er ingen gud uten Allah, og Muhammad er hans profet."
- Uttales for å bli muslim
- Gjentas i bønn

**2. Salat (bønn)**
- Fem ganger daglig
- Vendt mot Mekka
- Fredagsbønn i moskeen

**3. Zakat (almisse)**
- 2,5% av formuen til fattige
- En religiøs plikt

**4. Sawm (faste)**
- Faste i ramadan
- Fra soloppgang til solnedgang
- Ingen mat, drikke eller røyking

**5. Hajj (pilegrimsreise)**
- Til Mekka minst én gang i livet
- For de som har mulighet`
    },
    {
      id: 'krle-9-2-1-sharia',
      type: 'text',
      title: 'Sharia og islamsk lov',
      content: `
## Sharia

**Sharia** betyr "veien til vannkilden" og er islamsk lov:
- Basert på Koranen og hadith
- Veileder muslimer i alle livets områder
- Mat (halal/haram), familie, økonomi, klær
- Tolkes ulikt av ulike retninger og land

**Halal og haram:**
- **Halal** = tillatt (f.eks. halal-slaktet kjøtt)
- **Haram** = forbudt (f.eks. svinekjøtt, alkohol)
      `
    },
    {
      id: 'krle-9-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr shahada?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr shahada?',
            solution: 'Trosbekjennelsen',
            multipleChoiceOptions: ['Trosbekjennelsen', 'Fasten', 'Pilegrimsreisen', 'Almissen'],
          },
        ],
        solution: 'Shahada er den islamske trosbekjennelsen og den første av de fem søylene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hadith?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hadith?',
            solution: 'Beretninger om hva Muhammad sa og gjorde',
            multipleChoiceOptions: ['Beretninger om hva Muhammad sa og gjorde', 'En annen bok i Koranen', 'Islams helligste sted', 'En type bønn'],
          },
        ],
        solution: 'Hadith er beretninger om profeten Muhammads ord og handlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr halal?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr halal?',
            solution: 'Tillatt ifølge islamsk lov',
            multipleChoiceOptions: ['Tillatt ifølge islamsk lov', 'Forbudt', 'Hellig', 'Bønn'],
          },
        ],
        solution: 'Halal betyr tillatt og beskriver det som er lovlig ifølge sharia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk islamsk praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som skjer under ramadan og hvorfor muslimer faster.',
            solution: 'Under ramadan faster muslimer fra soloppgang til solnedgang - de spiser ikke, drikker ikke og røyker ikke. Fasten brytes med iftar-måltidet etter solnedgang. Muslimer faster fordi det er en av de fem søylene, for å vise lydighet mot Gud, og for å huske de som er fattige og sultne.',
            multipleChoiceOptions: ['Faste fra soloppgang til solnedgang for å vise lydighet mot Gud', 'Muslimer feirer hele måneden', 'Det er en fest med mye mat', 'Muslimer faster bare én dag'],
          },
          {
            label: 'b',
            task: 'Hvorfor er Koranen så viktig for muslimer, og hvordan behandles den?',
            solution: 'Koranen er viktig fordi muslimer tror den er Guds egne ord, åpenbart til Muhammad. Den behandles med stor respekt: man vasker hendene før man berører den, oppbevarer den høyt, legger den aldri på gulvet, og resiterer den på arabisk.',
            multipleChoiceOptions: ['Det er Guds ord som behandles med stor respekt', 'Det er bare en vanlig bok', 'Den er skrevet av Muhammad', 'Den brukes bare på fredager'],
          }
        ],
        hints: ['Tenk på hva faste innebærer', 'Tenk på hva Koranen er for muslimer'],
        solution: 'Islamsk praksis er sentrert rundt tro på Gud og de fem søylene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Islam i verden
// ============================================================================

export const CHAPTER_KRLE_9_2_2: TextbookChapter = {
  id: 'krle-9-2-2',
  courseId: 'krle-9',
  chapterNumber: '2.2',
  title: 'Islam i verden',
  description: 'Lær om islams mangfold og utbredelse i verden i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere hvordan religion kommer til uttrykk i samfunnet i dag'
  ],
  content: [
    {
      id: 'krle-9-2-2-intro',
      type: 'text',
      content: `
# Islam i verden

Islam er en verdensreligion med stort mangfold. Muslimer bor på alle
kontinenter og praktiserer sin tro på ulike måter, påvirket av kultur
og tradisjon.
      `
    },
    {
      id: 'krle-9-2-2-utbredelse',
      type: 'text',
      title: 'Hvor bor muslimer?',
      content: `
## Islams utbredelse

**Flest muslimer:**
- Indonesia (største muslimske land)
- Pakistan
- India
- Bangladesh
- Egypt

**Muslimske majoritetsland:**
- Midtøsten og Nord-Afrika
- Sentral-Asia
- Sørøst-Asia (Indonesia, Malaysia)

**I Europa:**
- Vest-Europa har voksende muslimske minoriteter
- Frankrike, Tyskland og Storbritannia har flest
- Bosnien og Albania har muslimsk majoritet

**Viktig å vite:** De fleste muslimer bor IKKE i Midtøsten. Bare ca. 20% av verdens muslimer er arabere.
      `
    },
    {
      id: 'krle-9-2-2-retninger',
      type: 'definition',
      title: 'Retninger i islam',
      content: `**Sunni** (ca. 85-90%)
- Majoriteten av muslimer
- Følger sunna (profetens tradisjon)
- Aksepterer de fire første kalifene
- Flest i Tyrkia, Egypt, Saudi-Arabia, Indonesia

**Shia** (ca. 10-15%)
- Mener lederskapet skulle gå til Muhammads familie
- Ali (Muhammads svigersønn) var rettmessig leder
- Imamer har spesiell religiøs autoritet
- Flest i Iran, Irak, Libanon

**Sufisme**
- Mystisk retning innen islam
- Vektlegger indre opplevelse av Gud
- Finnes blant både sunni og shia`
    },
    {
      id: 'krle-9-2-2-norge',
      type: 'text',
      title: 'Islam i Norge',
      content: `
## Muslimer i Norge

**Historie:**
- Første muslimer kom som arbeidsinnvandrere på 1970-tallet
- Senere: flyktninger og familiegjenforening
- I dag: ca. 200 000-250 000 muslimer i Norge

**Moskeer:**
- Over 150 moskeer i Norge
- Moskeen er sted for bønn, undervisning og fellesskap
- Ulike trossamfunn og retninger

**Mangfold:**
- Muslimer i Norge kommer fra mange land
- Pakistan, Somalia, Irak, Tyrkia, Bosnia, Afghanistan
- Ulik kultur og ulike tolkninger av islam
      `
    },
    {
      id: 'krle-9-2-2-debatt',
      type: 'note',
      title: 'Islam i offentlig debatt',
      content: `Islam er ofte tema i samfunnsdebatten:

**Vanlige diskusjoner:**
- Hijab og religiøse plagg
- Integrering og religionsfrihet
- Islamofobi og fordommer
- Ytringsfrihet og religion

**Viktig å huske:**
- Muslimer er en mangfoldig gruppe
- Man kan ikke generalisere fra noen til alle
- Ekstremisme representerer ikke flertallet
- Dialog og kunnskap motvirker fordommer`
    },
    {
      id: 'krle-9-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilket land har flest muslimer?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket land har flest muslimer?',
            solution: 'Indonesia',
            multipleChoiceOptions: ['Indonesia', 'Saudi-Arabia', 'Iran', 'Egypt'],
          },
        ],
        solution: 'Indonesia er verdens største muslimske land med over 230 millioner muslimer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom sunni og shia?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom sunni og shia?',
            solution: 'Uenighet om hvem som skulle lede etter Muhammad',
            multipleChoiceOptions: ['Uenighet om hvem som skulle lede etter Muhammad', 'De tror på forskjellige guder', 'De har ulike hellige bøker', 'De ber på forskjellige dager'],
          },
        ],
        solution: 'Splittelsen handler om hvem som var rettmessig leder etter Muhammads død.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er sufisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sufisme?',
            solution: 'En mystisk retning i islam',
            multipleChoiceOptions: ['En mystisk retning i islam', 'En egen religion', 'En type moskee', 'Et muslimsk land'],
          },
        ],
        solution: 'Sufisme er en mystisk tradisjon som finnes innen både sunni og shia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk islam i Norge og verden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å vite at de fleste muslimer ikke bor i Midtøsten?',
            solution: 'Det viser at islam er en mangfoldig verdensreligion, ikke bare en "arabisk" religion. Muslimer kommer fra mange kulturer og land. Dette hjelper mot stereotypier og fordommer.',
            multipleChoiceOptions: ['Det viser islams mangfold og motvirker stereotypier', 'Det er ikke viktig', 'Fordi Midtøsten er farlig', 'Fordi arabere ikke er ekte muslimer'],
          },
          {
            label: 'b',
            task: 'Beskriv hvordan norske muslimer er en mangfoldig gruppe.',
            solution: 'Norske muslimer kommer fra mange land (Pakistan, Somalia, Irak, Tyrkia, Bosnia), har ulike kulturer og språk, tilhører ulike retninger (sunni, shia), praktiserer troen på ulike måter, og har ulik grad av religiøsitet.',
            multipleChoiceOptions: ['De kommer fra ulike land, kulturer og har ulik praksis', 'Alle er like', 'Alle kommer fra ett land', 'Alle går i samme moske'],
          }
        ],
        hints: ['Tenk på geografi og kultur', 'Tenk på opprinnelsesland og ulike tradisjoner'],
        solution: 'Islam er en mangfoldig religion med mange uttrykksformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Buddhas lære
// ============================================================================

export const CHAPTER_KRLE_9_3_1: TextbookChapter = {
  id: 'krle-9-3-1',
  courseId: 'krle-9',
  chapterNumber: '3.1',
  title: 'Buddhas lære',
  description: 'Utforsk buddhismens grunnleggende læresetninger og filosofi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive og reflektere over sentral tro og etikk i buddhisme'
  ],
  content: [
    {
      id: 'krle-9-3-1-intro',
      type: 'text',
      content: `
# Buddhas lære

Buddhismen skiller seg fra andre religioner ved at den ikke handler om
en gud, men om hvordan mennesker kan bli fri fra lidelse gjennom egen
innsikt og praksis.
      `
    },
    {
      id: 'krle-9-3-1-siddharta',
      type: 'text',
      title: 'Siddharta Gautama',
      content: `
## Buddhas liv

**Siddharta Gautama** (ca. 563-483 f.Kr.) ble født som prins i Nepal.

**De fire synene:**
Siddharta hadde levd et beskyttet liv. Da han forlot palasset, så han:
1. En gammel mann (alderdom)
2. En syk mann (sykdom)
3. Et lik (død)
4. En asket (en som søker sannhet)

Dette fikk ham til å forlate sitt luksusliv for å finne svar på hvorfor mennesker lider.

**Oppvåkningen:**
Etter år med søken satte han seg under et bodhi-tre og mediterte. Der oppnådde han **nirvana** - han ble **Buddha** ("den oppvåknede").
      `
    },
    {
      id: 'krle-9-3-1-sannheter',
      type: 'definition',
      title: 'De fire edle sannheter',
      content: `Buddhas grunnleggende lære:

**1. Dukkha - Livet innebærer lidelse**
- Fødsel, alderdom, sykdom og død er lidelse
- Å ikke få det man ønsker er lidelse
- Å miste det man har er lidelse

**2. Samudaya - Lidelsens årsak**
- Lidelse skyldes begjær og tilknytning
- Vi klynger oss til ting, mennesker, ideer
- Uvitenhet om virkelighetens natur

**3. Nirodha - Lidelsen kan opphøre**
- Det er mulig å bli fri fra lidelse
- Ved å gi slipp på begjær
- Nirvana er denne frigjøringen

**4. Magga - Veien til frigjøring**
- Den åttefoldige veien fører til nirvana`
    },
    {
      id: 'krle-9-3-1-vei',
      type: 'definition',
      title: 'Den åttefoldige veien',
      content: `Buddhas vei til frigjøring, delt i tre grupper:

**Visdom (prajna):**
1. Riktig forståelse - forstå de fire sannhetene
2. Riktig hensikt - gi slipp på hat og begjær

**Etikk (sila):**
3. Riktig tale - ikke lyve, sladre eller såre
4. Riktig handling - ikke drepe, stjele, misbruke
5. Riktig livsførsel - tjene til livets opphold på ærlig vis

**Meditasjon (samadhi):**
6. Riktig anstrengelse - utvikle positive sinnstilstander
7. Riktig oppmerksomhet - være tilstede her og nå
8. Riktig konsentrasjon - dyrke dyp meditasjon`
    },
    {
      id: 'krle-9-3-1-karma',
      type: 'text',
      title: 'Karma og gjenfødelse',
      content: `
## Karma i buddhismen

**Karma** (handling) betyr at alle handlinger har konsekvenser:
- Gode handlinger gir gode resultater
- Dårlige handlinger gir dårlige resultater
- Karma påvirker både dette livet og fremtidige liv

**Gjenfødelse (samsara):**
- Bevisstheten fødes på nytt etter døden
- Men det er ingen evig "sjel" som reiser videre
- Gjenfødelsen er som en flamme som tenner en ny flamme

**Nirvana:**
- Målet er å bryte ut av gjenfødelsens hjul
- Nirvana betyr "utslukking" - av begjær og uvitenhet
- Det er ikke himmel, men frihet fra lidelse
      `
    },
    {
      id: 'krle-9-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva var "de fire synene" som endret Buddhas liv?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var "de fire synene"?',
            solution: 'En gammel mann, en syk mann, et lik og en asket',
            multipleChoiceOptions: ['En gammel mann, en syk mann, et lik og en asket', 'Fire guder', 'Fire templer', 'Fire bøker'],
          },
        ],
        solution: 'De fire synene viste Siddharta at livet inneholder alderdom, sykdom og død.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er dukkha?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dukkha?',
            solution: 'Lidelse eller utilfredshet',
            multipleChoiceOptions: ['Lidelse eller utilfredshet', 'Lykke', 'En gud', 'Et tempel'],
          },
        ],
        solution: 'Dukkha er den første edle sannhet - at livet innebærer lidelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er nirvana?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er nirvana?',
            solution: 'Frigjøring fra lidelse og gjenfødelse',
            multipleChoiceOptions: ['Frigjøring fra lidelse og gjenfødelse', 'Et paradis med guder', 'En type meditasjon', 'Buddhas fødested'],
          },
        ],
        solution: 'Nirvana er målet i buddhismen - frihet fra lidelse og gjenfødelsens hjul.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser buddhismens lære.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva Buddha mener med at "begjær er årsaken til lidelse".',
            solution: 'Buddha mener at vi lider fordi vi klynger oss til ting vi ønsker (begjær) eller prøver å unngå ting vi ikke vil ha (aversjon). Når vi ikke får det vi vil, eller mister det vi har, lider vi. Ved å gi slipp på begjær, kan vi bli fri fra lidelse.',
            multipleChoiceOptions: ['Vi lider fordi vi klynger oss til ønsker og når vi gir slipp blir vi fri', 'Begjær er en gud som straffer oss', 'Vi må ønske mer for å bli lykkelige', 'Lidelse har ingen årsak'],
          },
          {
            label: 'b',
            task: 'Sammenlign den åttefoldige veien med etiske regler i andre religioner du kjenner.',
            solution: 'Mange likheter: Riktig tale (ikke lyve) finnes i de ti bud. Riktig handling (ikke drepe, stjele) er også i de ti bud og islam. Men buddhismen vektlegger også meditasjon og indre utvikling, ikke bare ytre regler.',
            multipleChoiceOptions: ['Mange likheter med andre religioner, men også fokus på meditasjon', 'Ingen likheter med andre religioner', 'Buddhismen har ingen etikk', 'Andre religioner er helt forskjellige'],
          }
        ],
        hints: ['Tenk på hva som gjør oss ulykkelige', 'Sammenlign med de ti bud eller lignende'],
        solution: 'Buddhismen tilbyr en praktisk vei til frigjøring fra lidelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Hinduistiske guder
// ============================================================================

export const CHAPTER_KRLE_9_3_2: TextbookChapter = {
  id: 'krle-9-3-2',
  courseId: 'krle-9',
  chapterNumber: '3.2',
  title: 'Hinduistiske guder',
  description: 'Utforsk hinduismens mangfoldige gudeverdenen og religiøse praksis.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive og reflektere over sentral tro og praksis i hinduisme'
  ],
  content: [
    {
      id: 'krle-9-3-2-intro',
      type: 'text',
      content: `
# Hinduistiske guder

Hinduismen har et rikt mangfold av guder og gudinner. For mange hinduer
er de ulike gudene uttrykk for én underliggende guddommelig virkelighet
kalt **Brahman**.
      `
    },
    {
      id: 'krle-9-3-2-brahman',
      type: 'definition',
      title: 'Brahman og gudene',
      content: `**Brahman** er det høyeste prinsipp - den ultimate virkeligheten.

Brahman er:
- Uendelig og ubegrenset
- Grunnlaget for all eksistens
- Upersonlig, men kan tilbes i personlige former

**Gudene** (devaer) er uttrykk for Brahman:
- Ulike aspekter av den ene virkeligheten
- Tilbes gjennom bilder og statuer (murtier)
- Hver har egne egenskaper og fortellinger`
    },
    {
      id: 'krle-9-3-2-trimurti',
      type: 'text',
      title: 'Trimurti - de tre store',
      content: `
## De tre hovedgudene

**Brahma - skaperen**
- Skapte universet
- Avbildes med fire hoder og fire armer
- Holder Vedaene (de hellige skriftene)
- Tilbes sjelden i dag

**Vishnu - opprettholderen**
- Bevarer og beskytter verden
- Avbildes ofte blå med fire armer
- Holder diskos, konkylie, kølle og lotus
- Har ti **avatarer** (inkarnasjoner), bl.a. Rama og Krishna

**Shiva - ødeleggeren/fornyeren**
- Ødelegger for å skape noe nytt
- Både asket og familiemann
- Avbildes med trident og slange
- Dans symboliserer skapelse og ødeleggelse
      `
    },
    {
      id: 'krle-9-3-2-andre',
      type: 'text',
      title: 'Andre viktige guddommer',
      content: `
## Populære guder og gudinner

**Ganesha**
- Elefanthode, menneskelkropp
- Visdom og nye begynnelser
- Fjerner hindringer
- Svært populær i India

**Krishna**
- Avatar av Vishnu
- Avbildes som hyrde med fløyte
- Lærer Arjuna i Bhagavadgita
- Elsket for sin kjærlighet og lek

**Lakshmi**
- Velstandens og lykkens gudinne
- Vishnus hustru
- Tilbes særlig ved Diwali

**Durga/Kali**
- Kraftfull krigergudinne
- Kjemper mot det onde
- Både skremmende og beskyttende
      `
    },
    {
      id: 'krle-9-3-2-praksis',
      type: 'note',
      title: 'Tilbedelse (puja)',
      content: `**Puja** er rituell tilbedelse av guddommen:

**I hjemmet:**
- Mange hinduer har et hjemmealter
- Daglig tilbedelse med røkelse, blomster, mat
- Resitasjon av mantraer

**I tempelet:**
- Prester utfører ritualer
- Gudbildet behandles som gjest
- Vekkes, bades, kles, mates
- De troende mottar prasad (velsignet mat)

**Festivaler:**
- Diwali - lysfestival
- Holi - fargesfestival
- Ganesh Chaturthi - feiring av Ganesha`
    },
    {
      id: 'krle-9-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er Brahman?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er Brahman?',
            solution: 'Den ultimate virkeligheten/det høyeste prinsipp',
            multipleChoiceOptions: ['Den ultimate virkeligheten/det høyeste prinsipp', 'En av de tre hovedgudene', 'En hellig bok', 'Et tempel'],
          },
        ],
        solution: 'Brahman er det høyeste prinsipp, den ultimate virkeligheten som alt springer ut fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er trimurti?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er trimurti?',
            solution: 'De tre hovedgudene Brahma, Vishnu og Shiva',
            multipleChoiceOptions: ['De tre hovedgudene Brahma, Vishnu og Shiva', 'Tre hellige bøker', 'Tre hellige steder', 'Tre typer bønn'],
          },
        ],
        solution: 'Trimurti er de tre hovedgudene: Brahma (skaper), Vishnu (opprettholder) og Shiva (fornyer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken gud har elefanthode?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken gud har elefanthode?',
            solution: 'Ganesha',
            multipleChoiceOptions: ['Ganesha', 'Shiva', 'Krishna', 'Vishnu'],
          },
        ],
        solution: 'Ganesha er guden med elefanthode, kjent som hindringenes fjerner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk hinduismens gudeverdenen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvordan hinduismen kan ha mange guder, men samtidig mene at det bare er én guddommelig virkelighet.',
            solution: 'Hinduismen ser de mange gudene som ulike uttrykk eller aspekter av den ene Brahman. Det er som om Brahman viser seg i forskjellige former for å møte menneskers ulike behov. Noen tilber Vishnu, andre Shiva, men de tilber egentlig den samme virkeligheten.',
            multipleChoiceOptions: ['Gudene er ulike uttrykk for den ene Brahman', 'Hinduismen tror på mange uavhengige guder', 'Det er bare én gud, de andre er falske', 'Brahman er en av mange guder'],
          },
          {
            label: 'b',
            task: 'Beskriv hva som skjer under en puja (tilbedelse) i et hinduistisk hjem eller tempel.',
            solution: 'Under puja behandles gudbildet som en æret gjest. Man tilbyr blomster, røkelse, mat og lys. Man kan resitere mantraer og bønner. I tempelet vaskes, kles og mates gudbildet av prester. De troende får velsignet mat (prasad) tilbake.',
            multipleChoiceOptions: ['Gudbildet tilbys blomster, røkelse, mat og behandles som gjest', 'Man sitter stille og tenker', 'Man synger bare sanger', 'Det skjer ingenting spesielt'],
          }
        ],
        hints: ['Tenk på forholdet mellom Brahman og gudene', 'Tenk på hva som tilbys gudbildet'],
        solution: 'Hinduismen har et komplekst forhold mellom den ene Brahman og de mange gudene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Etiske dilemmaer
// ============================================================================

export const CHAPTER_KRLE_9_4_1: TextbookChapter = {
  id: 'krle-9-4-1',
  courseId: 'krle-9',
  chapterNumber: '4.1',
  title: 'Etiske dilemmaer',
  description: 'Lær å analysere og diskutere vanskelige etiske valgsituasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over etiske spørsmål og bruke etiske modeller til å analysere dilemmaer'
  ],
  content: [
    {
      id: 'krle-9-4-1-intro',
      type: 'text',
      content: `
# Etiske dilemmaer

Et **etisk dilemma** er en situasjon der vi må velge mellom to eller flere
alternativer som alle har både positive og negative sider. Det er ingen
åpenbart "riktig" løsning.
      `
    },
    {
      id: 'krle-9-4-1-def-dilemma',
      type: 'definition',
      title: 'Hva er et etisk dilemma?',
      content: `Et **etisk dilemma** kjennetegnes av:
- To eller flere handlingsalternativer
- Alle valg har noen negative konsekvenser
- Viktige verdier står mot hverandre
- Det er ikke opplagt hva som er riktig

**Eksempel:** Du ser en venn stjele i en butikk.
- Sier du fra? (Lojalitet mot rettferdighet)
- Tier du? (Ærlighet mot vennskap)

Dilemmaer tvinger oss til å reflektere over hva som er viktigst.`
    },
    {
      id: 'krle-9-4-1-analysere',
      type: 'text',
      title: 'Hvordan analysere et dilemma',
      content: `
## Fem steg for å analysere etiske dilemmaer

**1. Beskriv situasjonen**
- Hva er problemet?
- Hvem er involvert?
- Hvilke fakta er relevante?

**2. Identifiser verdiene**
- Hvilke verdier står mot hverandre?
- F.eks. ærlighet vs. lojalitet, frihet vs. sikkerhet

**3. Vurder konsekvensene**
- Hva blir konsekvensene av hvert valg?
- For deg selv og for andre?

**4. Bruk etiske teorier**
- Hva sier konsekvensetikk? (Beste resultat)
- Hva sier pliktetikk? (Prinsipper)
- Hva sier dydsetikk? (Karakter)

**5. Ta en beslutning og begrunn**
- Hvilket valg tar du?
- Hvorfor?
      `
    },
    {
      id: 'krle-9-4-1-eksempel',
      type: 'example',
      title: 'Trikk-dilemmaet',
      problem: 'En trikk er i ferd med å kjøre over fem mennesker. Du kan trekke i en spak og sende trikken inn på et annet spor der det bare står én person. Bør du trekke i spaken?',
      solution: `**Konsekvensetikk:** Du bør trekke i spaken. Fem liv er mer enn ett liv. Resultatet blir best om færre dør.

**Pliktetikk:** Mange vil si nei. Å drepe aktivt (trekke i spaken) er forskjellig fra å la noe skje. Man skal ikke bruke mennesker som midler.

**Dydsetikk:** Hva ville en modig og rettferdig person gjøre? Ville du kunne leve med valget etterpå?

**Variasjon:** Hva om du må dytte en mann foran trikken for å stoppe den? Dette føles verre for de fleste, selv om konsekvensene er like.

Dette dilemmaet viser at vi bruker både konsekvenser og prinsipper når vi vurderer.`
    },
    {
      id: 'krle-9-4-1-moderne',
      type: 'text',
      title: 'Moderne etiske dilemmaer',
      content: `
## Aktuelle dilemmaer i samfunnet

**Teknologi og personvern:**
- Overvåkning for sikkerhet vs. personvern
- AI og selvkjørende biler - hvem skal de beskytte?
- Sosiale medier og ytringsfrihet

**Miljø og klima:**
- Økonomisk vekst vs. miljøvern
- Hvem skal betale for klimakutt?
- Er det greit å fly på ferie?

**Medisin og helse:**
- Aktiv dødshjelp - hvem bestemmer?
- Genterapi og designerbabyer
- Prioritering i helsevesenet

**Global rettferdighet:**
- Hvor mye bør rike land hjelpe fattige?
- Flyktninger og grenser
- Dyrs rettigheter vs. menneskelige behov
      `
    },
    {
      id: 'krle-9-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner et etisk dilemma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et etisk dilemma?',
            solution: 'Viktige verdier står mot hverandre, alle valg har negative sider',
            multipleChoiceOptions: ['Viktige verdier står mot hverandre, alle valg har negative sider', 'Det finnes bare ett riktig svar', 'Det handler om matematikk', 'Det er alltid enkelt å velge'],
          },
        ],
        solution: 'Et etisk dilemma har flere alternativer der viktige verdier står mot hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er det første steget i å analysere et etisk dilemma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det første steget?',
            solution: 'Beskrive situasjonen og identifisere problemet',
            multipleChoiceOptions: ['Beskrive situasjonen og identifisere problemet', 'Ta en rask beslutning', 'Spørre noen andre', 'Ignorere problemet'],
          },
        ],
        solution: 'Man må først forstå situasjonen før man kan vurdere valgene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'I trikk-dilemmaet, hva ville en konsekvensetiker anbefale?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva ville en konsekvensetiker anbefale?',
            solution: 'Trekke i spaken for å redde flest mulig liv',
            multipleChoiceOptions: ['Trekke i spaken for å redde flest mulig liv', 'Ikke gjøre noe', 'La tilfeldighetene bestemme', 'Løpe vekk'],
          },
        ],
        solution: 'Konsekvensetikk fokuserer på å oppnå best mulig resultat - her: færrest døde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser et etisk dilemma.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et moderne etisk dilemma fra teksten (f.eks. overvåkning vs. personvern). Hvilke verdier står mot hverandre?',
            solution: 'Eksempel overvåkning: Sikkerhet (beskytte folk mot terror/kriminalitet) står mot personvern (retten til privatliv). Begge er viktige verdier, men de kan ikke maksimeres samtidig.',
            multipleChoiceOptions: ['Sikkerhet står mot personvern - begge er viktige verdier', 'Det er ingen motsetning', 'Bare én verdi er viktig', 'Verdier er irrelevante'],
          },
          {
            label: 'b',
            task: 'Bruk minst én etisk teori til å analysere dilemmaet. Hva ville teorien anbefale?',
            solution: 'Konsekvensetikk: Vurder hva som gir best resultat totalt. Kanskje litt overvåkning reduserer kriminalitet nok til å veie opp for tap av privatliv? Pliktetikk: Er det noen rettigheter som aldri skal krenkes? Kanskje privatliv er en grunnleggende rett?',
            multipleChoiceOptions: ['Konsekvensetikk ser på resultater, pliktetikk på rettigheter', 'Etiske teorier kan ikke brukes her', 'Alle teorier sier det samme', 'Man trenger ikke teori'],
          }
        ],
        hints: ['Tenk på hva vi verdsetter høyt', 'Bruk de etiske teoriene du har lært'],
        solution: 'Etiske dilemmaer krever grundig analyse fra flere perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Menneskerettigheter og verdier
// ============================================================================

export const CHAPTER_KRLE_9_4_2: TextbookChapter = {
  id: 'krle-9-4-2',
  courseId: 'krle-9',
  chapterNumber: '4.2',
  title: 'Menneskerettigheter og verdier',
  description: 'Lær om menneskerettighetene og deres grunnlag i verdier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over menneskerettighetene og hvordan de er begrunnet'
  ],
  content: [
    {
      id: 'krle-9-4-2-intro',
      type: 'text',
      content: `
# Menneskerettigheter og verdier

Menneskerettighetene er rettigheter alle mennesker har, uavhengig av hvem
de er, hvor de bor, eller hva de tror på. De er basert på ideen om at
alle mennesker har en iboende verdighet.
      `
    },
    {
      id: 'krle-9-4-2-def-mr',
      type: 'definition',
      title: 'Hva er menneskerettigheter?',
      content: `**Menneskerettigheter** er:
- Rettigheter alle mennesker har fra fødselen
- Universelle - gjelder alle, overalt
- Udelelige - alle rettighetene henger sammen
- Umistelige - kan ikke tas fra deg

**FNs verdenserklæring om menneskerettigheter** (1948):
- 30 artikler om grunnleggende rettigheter
- Vedtatt etter 2. verdenskrig
- Utgangspunkt for internasjonale konvensjoner
- Ikke juridisk bindende, men moralsk autoritet`
    },
    {
      id: 'krle-9-4-2-viktige',
      type: 'text',
      title: 'Viktige menneskerettigheter',
      content: `
## Sentrale rettigheter

**Sivile og politiske rettigheter:**
- Rett til liv
- Forbud mot tortur
- Ytringsfrihet
- Religionsfrihet
- Rettferdig rettergang
- Stemmerett

**Økonomiske, sosiale og kulturelle rettigheter:**
- Rett til utdanning
- Rett til helse
- Rett til arbeid
- Rett til bolig
- Rett til kultur

**Barns rettigheter (Barnekonvensjonen):**
- Barns beste skal komme først
- Rett til å bli hørt
- Rett til lek og fritid
- Beskyttelse mot vold og utnytting
      `
    },
    {
      id: 'krle-9-4-2-grunnlag',
      type: 'text',
      title: 'Grunnlaget for menneskerettighetene',
      content: `
## Hvor kommer menneskerettighetene fra?

**Filosofiske begrunnelser:**
- Menneskets verdighet (Kant: mennesker er mål i seg selv)
- Naturrett: rettigheter gitt av naturen/fornuften
- Kontraktsteori: rettigheter vi ville blitt enige om

**Religiøse begrunnelser:**
- Mennesket skapt i Guds bilde
- Alle mennesker er like for Gud
- Nestekjærlighet og medmenneskelighet

**Historiske erfaringer:**
- Reaksjon på Holocaust og 2. verdenskrig
- Lærdommer fra slaveri og kolonialisme
- Kampen for likestilling og frihet

**Viktig:** Menneskerettighetene er ment å gjelde uavhengig av begrunnelse. Religiøse og ikke-religiøse kan støtte dem.
      `
    },
    {
      id: 'krle-9-4-2-utfordringer',
      type: 'note',
      title: 'Utfordringer og debatter',
      content: `Menneskerettighetene møter kritikk og utfordringer:

**Universalitet:**
- Er rettighetene virkelig universelle?
- Kritikk: Vestlige verdier påtvunget andre kulturer
- Svar: Grunnleggende verdier finnes i alle kulturer

**Konflikter mellom rettigheter:**
- Ytringsfrihet vs. beskyttelse mot hat
- Religionsfrihet vs. likestilling
- Sikkerhet vs. personvern

**Brudd på menneskerettighetene:**
- Mange land bryter rettighetene
- Svak håndhevelse internasjonalt
- Kriger og konflikter truer rettighetene`
    },
    {
      id: 'krle-9-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Når ble FNs verdenserklæring om menneskerettigheter vedtatt?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble erklæringen vedtatt?',
            solution: '1948',
            multipleChoiceOptions: ['1948', '1914', '1789', '2000'],
          },
        ],
        solution: 'FNs verdenserklæring ble vedtatt 10. desember 1948, etter 2. verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr det at menneskerettighetene er universelle?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr universelle?',
            solution: 'De gjelder for alle mennesker, overalt i verden',
            multipleChoiceOptions: ['De gjelder for alle mennesker, overalt i verden', 'De gjelder bare i noen land', 'De gjelder bare for voksne', 'De gjelder bare i FN'],
          },
        ],
        solution: 'Universelle betyr at rettighetene gjelder for alle mennesker uansett hvor de bor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Nevn en sivil/politisk rettighet og en økonomisk/sosial rettighet.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi ett eksempel på hver type rettighet.',
            solution: 'Sivil/politisk: Ytringsfrihet, stemmerett, religionsfrihet. Økonomisk/sosial: Rett til utdanning, helse, arbeid.',
            multipleChoiceOptions: ['Sivil: ytringsfrihet. Sosial: rett til utdanning', 'Begge typer er det samme', 'Det finnes bare én type', 'Rettigheter kan ikke deles inn'],
          },
        ],
        solution: 'Menneskerettighetene deles ofte i sivile/politiske og økonomiske/sosiale/kulturelle rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Diskuter grunnlaget for menneskerettighetene.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvordan menneskerettighetene kan begrunnes filosofisk og religiøst.',
            solution: 'Filosofisk: Menneskets verdighet (Kant), naturrett, alle fornuftige vesener ville bli enige om slike rettigheter. Religiøst: Mennesket er skapt i Guds bilde, alle er like for Gud, nestekjærlighet påbyr respekt for alle.',
            multipleChoiceOptions: ['Filosofisk: verdighet og fornuft. Religiøst: skapt i Guds bilde', 'Det finnes ingen begrunnelse', 'Bare religion kan begrunne rettigheter', 'Bare filosofi kan begrunne rettigheter'],
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en konflikt mellom to menneskerettigheter og forklar hvorfor det er vanskelig.',
            solution: 'Eksempel: Ytringsfrihet vs. beskyttelse mot hatefulle ytringer. Vanskelig fordi begge er viktige: Folk må kunne si sin mening, men hatprat kan skade og diskriminere. Man må finne en balanse.',
            multipleChoiceOptions: ['Ytringsfrihet kan komme i konflikt med vern mot hat', 'Rettigheter kommer aldri i konflikt', 'Man kan velge hvilke rettigheter som gjelder', 'Konflikter løses automatisk'],
          }
        ],
        hints: ['Tenk på ulike begrunnelser', 'Tenk på situasjoner der verdier står mot hverandre'],
        solution: 'Menneskerettighetene kan begrunnes på ulike måter, men møter også utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.3: Filosofiske tenkere
// ============================================================================

export const CHAPTER_KRLE_9_4_3: TextbookChapter = {
  id: 'krle-9-4-3',
  courseId: 'krle-9',
  chapterNumber: '4.3',
  title: 'Filosofiske tenkere',
  description: 'Bli kjent med viktige filosofer og deres ideer om etikk og samfunn.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere sentrale ideer fra viktige filosofer og reflektere over deres relevans i dag'
  ],
  content: [
    {
      id: 'krle-9-4-3-intro',
      type: 'text',
      content: `
# Filosofiske tenkere

Gjennom historien har filosofer tenkt på de store spørsmålene om livet,
moralen og samfunnet. Deres ideer påvirker fortsatt hvordan vi tenker i dag.
      `
    },
    {
      id: 'krle-9-4-3-sokrates',
      type: 'text',
      title: 'Sokrates (469-399 f.Kr.)',
      content: `
## Sokrates - filosofiens far

**Viktige ideer:**
- "Det eneste jeg vet, er at jeg ikke vet noe"
- Selverkjennelse er grunnlaget for visdom
- Etikk handler om å leve et godt liv

**Den sokratiske metoden:**
- Still spørsmål i stedet for å gi svar
- Avslør motsetninger i folks tenkning
- Hjelp folk å tenke selv

**Sokrates' skjebne:**
- Dømt til døden for å "ødelegge ungdommen"
- Nektet å flykte, drakk gift
- Mente det var viktigere å følge loven enn å redde sitt eget liv

*"Et uutforsket liv er ikke verdt å leve."*
      `
    },
    {
      id: 'krle-9-4-3-kant',
      type: 'text',
      title: 'Immanuel Kant (1724-1804)',
      content: `
## Kant - pliktetikk

**Viktige ideer:**
- Moral handler om plikt, ikke følelser eller konsekvenser
- Fornuften forteller oss hva som er rett

**Det kategoriske imperativ:**
*"Handle bare etter den maksime som du samtidig kan ville skal bli en allmenn lov."*

**Forklart:** Spør deg selv: Hva om alle gjorde som jeg?
- Kan jeg ville at alle lyver? Nei - da ville ingen stole på noen.
- Kan jeg ville at alle stjeler? Nei - da ville eiendom miste mening.

**Menneskets verdighet:**
- Mennesker er mål i seg selv, aldri bare midler
- Alle har en iboende verdighet
- Grunnlag for menneskerettighetene
      `
    },
    {
      id: 'krle-9-4-3-mill',
      type: 'text',
      title: 'John Stuart Mill (1806-1873)',
      content: `
## Mill - utilitarisme

**Viktige ideer:**
- Det rette er det som gir størst lykke for flest mulig
- Lykke = nytelse og fravær av smerte
- Handlingers konsekvenser avgjør om de er riktige

**Utilitarisme:**
*"Handlinger er rette i den grad de fremmer lykke, gale i den grad de fremmer det motsatte."*

**Høyere og lavere nytelser:**
- Ikke all nytelse er lik
- Intellektuelle gleder er høyere enn kroppslige
- "Bedre å være en misfornøyd Sokrates enn en fornøyd gris"

**Mills bidrag til samfunnet:**
- Forkjemper for ytringsfrihet
- Tidlig feminist (sammen med Harriet Taylor)
- Mente at minoriteters rettigheter må beskyttes
      `
    },
    {
      id: 'krle-9-4-3-beauvoir',
      type: 'text',
      title: 'Simone de Beauvoir (1908-1986)',
      content: `
## De Beauvoir - eksistensialisme og feminisme

**Viktige ideer:**
- "Man fødes ikke som kvinne, man blir det"
- Kvinner er formet av samfunnets forventninger
- Mennesker er frie til å skape seg selv

**Eksistensialisme:**
- Eksistens kommer før essens
- Vi defineres ikke av hva vi er, men av hva vi gjør
- Frihet innebærer ansvar

**Feministisk filosofi:**
- Analyserte hvordan kvinner ble undertrykt
- Utfordret tradisjonelle kjønnsroller
- Mente at likestilling krever at kvinner ser seg selv som frie

*"Det andre kjønn"* (1949) er et klassisk verk i feministisk filosofi.
      `
    },
    {
      id: 'krle-9-4-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva var Sokrates\' metode?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var Sokrates\' metode?',
            solution: 'Å stille spørsmål for å hjelpe folk tenke selv',
            multipleChoiceOptions: ['Å stille spørsmål for å hjelpe folk tenke selv', 'Å holde lange forelesninger', 'Å skrive bøker', 'Å straffe de som tok feil'],
          },
        ],
        solution: 'Den sokratiske metoden bruker spørsmål for å avdekke motsetninger og fremme selvstendig tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er Kants kategoriske imperativ?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar det kategoriske imperativ med egne ord.',
            solution: 'Handle slik at du kan ville at alle andre også handler på samme måte',
            multipleChoiceOptions: ['Handle slik at du kan ville at alle andre også handler slik', 'Gjør det som gir mest lykke', 'Følg dine følelser', 'Adlyd alltid staten'],
          },
        ],
        solution: 'Kant mener vi skal handle slik at handlingen kan bli en allmenn lov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva mente Mill med "størst lykke for flest mulig"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kjernen i utilitarismen?',
            solution: 'Det rette er det som gir best konsekvenser for flest mulig',
            multipleChoiceOptions: ['Det rette er det som gir best konsekvenser for flest mulig', 'Bare din egen lykke teller', 'Konsekvenser er irrelevante', 'Alle må være like lykkelige'],
          },
        ],
        solution: 'Utilitarisme bedømmer handlinger etter deres konsekvenser for den totale lykken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-4-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-4-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign filosofene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom Kants pliktetikk og Mills utilitarisme?',
            solution: 'Kant: Det som avgjør om en handling er riktig er om den følger riktige prinsipper, uavhengig av konsekvensene. Mill: Det som avgjør er handlingens konsekvenser - gir den mest lykke?',
            multipleChoiceOptions: ['Kant vektlegger prinsipper, Mill vektlegger konsekvenser', 'De mener det samme', 'Kant bryr seg om lykke, Mill om plikt', 'Ingen av dem handler om etikk'],
          },
          {
            label: 'b',
            task: 'Hva mente Simone de Beauvoir med at "man fødes ikke som kvinne, man blir det"?',
            solution: 'Hun mente at det vi kaller "kvinnelig" ikke er medfødt, men formet av samfunnet. Jenter læres opp til å være "feminine" gjennom oppdragelse og forventninger. Biologi bestemmer ikke skjebne.',
            multipleChoiceOptions: ['Samfunnet former hva det vil si å være kvinne', 'Kvinner blir til menn', 'Bare biologi bestemmer', 'Kvinner og menn er helt like'],
          }
        ],
        hints: ['Tenk på hva som avgjør om en handling er riktig', 'Tenk på forskjellen mellom natur og kultur'],
        solution: 'Filosofene hadde ulike syn på hva som gjør handlinger riktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Humanistiske verdier
// ============================================================================

export const CHAPTER_KRLE_9_5_1: TextbookChapter = {
  id: 'krle-9-5-1',
  courseId: 'krle-9',
  chapterNumber: '5.1',
  title: 'Humanistiske verdier',
  description: 'Utforsk livssynshumanismens grunnlag, verdier og praksis.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og presentere livssynshumanisme som et sekulært alternativ'
  ],
  content: [
    {
      id: 'krle-9-5-1-intro',
      type: 'text',
      content: `
# Humanistiske verdier

**Livssynshumanisme** er et sekulært (ikke-religiøst) livssyn som setter
mennesket i sentrum. Humanister tror ikke på guder eller overnaturlige
krefter, men baserer sin etikk på fornuft, vitenskap og medfølelse.
      `
    },
    {
      id: 'krle-9-5-1-def-human',
      type: 'definition',
      title: 'Hva er humanisme?',
      content: `**Humanisme** som livssyn kjennetegnes av:

- **Menneskets verdighet**: Alle mennesker har lik verdi
- **Fornuft**: Bruk av kritisk tenkning og vitenskap
- **Etikk uten religion**: Moral basert på menneskelighet
- **Selvbestemmelse**: Mennesker må skape mening selv
- **Solidaritet**: Ansvar for medmennesker og samfunn

**Human-Etisk Forbund** er humanistenes organisasjon i Norge, grunnlagt i 1956.`
    },
    {
      id: 'krle-9-5-1-verdier',
      type: 'text',
      title: 'Humanistiske kjerneverdier',
      content: `
## Verdier humanister vektlegger

**Menneskets verdighet:**
- Alle er like verdifulle
- Ingen forskjell på rase, kjønn, religion
- Grunnlag for menneskerettigheter

**Fornuft og vitenskap:**
- Kunnskap kommer fra erfaring og forskning
- Kritisk tenkning er viktig
- Åpen for å endre mening når bevisene endres

**Frihet:**
- Ytringsfrihet og tankefrihet
- Rett til å forme sitt eget liv
- Respekt for andres frihet

**Ansvar:**
- Mennesker er ansvarlige for sine handlinger
- Vi må ta vare på hverandre og planeten
- Etikk handler om å redusere lidelse og øke trivsel
      `
    },
    {
      id: 'krle-9-5-1-praksis',
      type: 'text',
      title: 'Humanistisk praksis',
      content: `
## Hvordan lever humanister ut sitt livssyn?

**Seremonier:**
- Humanistisk navnefest (alternativ til dåp)
- Humanistisk konfirmasjon
- Humanistisk vigsel (bryllup)
- Humanistisk gravferd

**Etisk refleksjon:**
- Gylne regel: Behandle andre som du vil bli behandlet
- Vurdere konsekvenser av handlinger
- Bruke empati og innlevelse

**Engasjement:**
- Menneskerettighetsarbeid
- Miljøvern og bærekraft
- Kritikk av undertrykkelse og diskriminering
- Fremme vitenskap og utdanning

**I Norge:**
- Human-Etisk Forbund har ca. 100 000 medlemmer
- Tilbyr humanistisk konfirmasjon
- Jobber for livssynsnøytral stat
      `
    },
    {
      id: 'krle-9-5-1-sammenlign',
      type: 'note',
      title: 'Humanisme og religion',
      content: `**Likheter:**
- Vekt på etikk og det gode liv
- Omsorg for medmennesker
- Søken etter mening og verdier

**Forskjeller:**
- Humanisme har ingen guder eller overnaturlig tro
- Humanisme baserer etikk på fornuft, ikke åpenbaring
- Humanisme ser dette livet som det eneste vi har

**Viktig:** Humanister respekterer religionsfrihet, men mener staten skal være nøytral. De kritiserer religion når den brukes til undertrykkelse.`
    },
    {
      id: 'krle-9-5-1-mening',
      type: 'text',
      title: 'Mening uten Gud?',
      content: `
## Hvordan finner humanister mening?

Et vanlig spørsmål: Hvis det ikke finnes noen Gud eller liv etter døden, hva er da meningen med livet?

**Humanistisk svar:**
- Mening er noe vi skaper, ikke noe vi finner
- Relasjoner til andre mennesker gir mening
- Å gjøre verden litt bedre gir mening
- Kunst, kunnskap og opplevelser gir mening
- Nettopp fordi livet er begrenset, er det verdifullt

**Sitater:**
- "Livet har den meningen vi gir det."
- "Vi er alle stjernestøv" - vi er del av noe større
- "Det eneste livet vi har, gjør det desto mer verdifullt"
      `
    },
    {
      id: 'krle-9-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-9-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner livssynshumanisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner livssynshumanisme?',
            solution: 'Et ikke-religiøst livssyn som vektlegger menneskets verdighet, fornuft og etikk',
            multipleChoiceOptions: ['Et ikke-religiøst livssyn som vektlegger menneskets verdighet, fornuft og etikk', 'En religion med mange guder', 'En politisk ideologi', 'En vitenskapelig teori'],
          },
        ],
        solution: 'Livssynshumanisme er et sekulært livssyn basert på menneskelig verdighet, fornuft og etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-9-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva heter humanistenes organisasjon i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter organisasjonen?',
            solution: 'Human-Etisk Forbund',
            multipleChoiceOptions: ['Human-Etisk Forbund', 'Den norske kirke', 'Humanistisk forening', 'Ateistforbundet'],
          },
        ],
        solution: 'Human-Etisk Forbund ble grunnlagt i 1956 og har ca. 100 000 medlemmer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-9-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Gi et eksempel på en humanistisk seremoni.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel.',
            solution: 'Humanistisk konfirmasjon, navnefest, vigsel eller gravferd',
            multipleChoiceOptions: ['Humanistisk konfirmasjon, navnefest, vigsel eller gravferd', 'Dåp i kirken', 'Pilegrimsreise', 'Gudstjeneste'],
          },
        ],
        solution: 'Humanister har egne seremonier som alternativer til religiøse ritualer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-9-5-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-9-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over humanistiske verdier.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan mener humanister at mennesker kan finne mening i livet uten tro på Gud?',
            solution: 'Humanister mener at mening er noe vi skaper selv - gjennom relasjoner, gjennom å gjøre verden bedre, gjennom kunst og kunnskap. Livet er verdifullt nettopp fordi det er begrenset og fordi vi selv bestemmer hva som gir det mening.',
            multipleChoiceOptions: ['Mening skapes gjennom relasjoner, handlinger og det vi gjør for andre', 'Livet er meningsløst uten Gud', 'Mening kommer automatisk', 'Bare religion kan gi mening'],
          },
          {
            label: 'b',
            task: 'Hva har humanisme til felles med religioner, og hva er forskjellig?',
            solution: 'Felles: Vekt på etikk, omsorg for andre, søken etter mening. Forskjellig: Humanisme har ingen guder, baserer etikk på fornuft istedenfor åpenbaring, og ser dette livet som det eneste.',
            multipleChoiceOptions: ['Felles: etikk og omsorg. Forskjellig: ingen guder, fornuftsbasert', 'Ingen likheter', 'Ingen forskjeller', 'Humanisme er en religion'],
          }
        ],
        hints: ['Tenk på hva som gir livet ditt mening', 'Sammenlign med religioner du har lært om'],
        solution: 'Humanismen tilbyr et alternativt livssyn basert på menneskelige verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const KRLE_9_CHAPTERS = [
  CHAPTER_KRLE_9_1_1,
  CHAPTER_KRLE_9_1_2,
  CHAPTER_KRLE_9_2_1,
  CHAPTER_KRLE_9_2_2,
  CHAPTER_KRLE_9_3_1,
  CHAPTER_KRLE_9_3_2,
  CHAPTER_KRLE_9_4_1,
  CHAPTER_KRLE_9_4_2,
  CHAPTER_KRLE_9_4_3,
  CHAPTER_KRLE_9_5_1,
];
