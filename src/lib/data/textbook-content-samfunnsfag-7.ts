/**
 * Tekstbok innhold for Samfunnsfag 7. klasse
 *
 * Folger LK20 lareplan for samfunnsfag mellomtrinn.
 * Innhold tilpasset elever pa 7. trinn (12-13 ar).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Opplysningstiden
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_1_1: TextbookChapter = {
  id: 'samfunnsfag-7-1-1',
  courseId: 'samfunnsfag-7',
  chapterNumber: '1.1',
  title: 'Opplysningstiden',
  description: 'Laer om opplysningstiden og hvordan nye ideer forandret verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive sentrale hendelser og prosesser i historien som har pavirket samfunnet vi lever i',
    'utforske hvordan ideer og tankesett har pavirket menneskers handlinger og samfunnsutviklingen'
  ],
  content: [
    {
      id: 'samf-7-1-1-intro',
      type: 'text',
      content: `
# Opplysningstiden

Pa 1700-tallet skjedde det en revolusjon - ikke med vapen, men med ideer! Denne
perioden kalles **opplysningstiden**, og de nye tankene som oppsto da, former
fortsatt samfunnet vart i dag.

For opplysningstiden trodde mange at konger hadde makt fra Gud, og at vanlige
folk ikke skulle stille sporsmal. Men na begynte tenkere a si: "Vi ma bruke
fornuften! Vi ma tenke selv!"
      `
    },
    {
      id: 'samf-7-1-1-def-opplysning',
      type: 'definition',
      title: 'Opplysningstiden',
      content: `**Opplysningstiden** var en periode pa 1700-tallet da nye ideer om fornuft, frihet og likhet spredte seg i Europa.

Kjennetegn ved opplysningstiden:
- **Fornuft**: Mennesker skulle bruke sin egen fornuft, ikke bare tro det de ble fortalt
- **Vitenskap**: Kunnskap skulle baseres pa bevis og eksperimenter
- **Kritikk av makt**: Konger og kirken skulle ikke ha uinnskrenket makt
- **Menneskerettigheter**: Alle mennesker har grunnleggende rettigheter
- **Utdanning**: Kunnskap skulle spres til alle, ikke bare de rike`
    },
    {
      id: 'samf-7-1-1-tenkere',
      type: 'text',
      title: 'Store tenkere',
      content: `
## Opplysningstidens filosofer

**John Locke (England, 1632-1704)**
- Mente at alle mennesker er fodt med naturlige rettigheter: liv, frihet og eiendom
- Sa at regjeringer far sin makt fra folket
- Hvis en regjering er darlig, har folket rett til a bytte den ut

**Voltaire (Frankrike, 1694-1778)**
- Kjempet for ytringsfrihet og religionsfrihet
- Kjent sitat: "Jeg er uenig i det du sier, men jeg vil kjempe til doden for din rett til a si det"
- Kritiserte kirken og makthaverne

**Jean-Jacques Rousseau (Sveits/Frankrike, 1712-1778)**
- Skrev om "samfunnskontrakten" - at folk gar sammen og lager regler
- Mente at alle mennesker er fodt like og frie
- Sa at makten skal ligge hos folket, ikke hos kongen

**Montesquieu (Frankrike, 1689-1755)**
- Foreslo maktfordeling: lovgivende, utovende og dommende makt
- Dette hindrer at en person far all makt
- Denne ideen brukes i de fleste demokratier i dag!
      `
    },
    {
      id: 'samf-7-1-1-vitenskap',
      type: 'text',
      title: 'Vitenskap og fremskritt',
      content: `
## Vitenskapelig revolusjon

Opplysningstiden bygget pa den vitenskapelige revolusjonen som hadde begynt pa 1600-tallet:

**Isaac Newton (1643-1727)**
- Forklarte tyngdekraften
- Viste at naturen folger faste lover som kan forstás med matematikk

**Carl von Linne (1707-1778)**
- Laget systemet for a klassifisere planter og dyr
- Viste at naturen kan organiseres og forstas

**Opplysningens ideal:**
I stedet for a akseptere alt som "Guds vilje", begynte folk a sporre "hvorfor?" og "hvordan?"
De trodde at mennesket kunne forbedre verden gjennom kunnskap og fornuft.
      `
    },
    {
      id: 'samf-7-1-1-note',
      type: 'note',
      title: 'Encyklopedien',
      content: `Et av de viktigste prosjektene i opplysningstiden var **Encyklopedien** (1751-1772).

- Redigert av Denis Diderot og Jean d'Alembert
- 28 bind med all verdens kunnskap
- Over 70 000 artikler
- Malet var a samle og spre kunnskap til alle

Dette var som 1700-tallets Wikipedia! Ideen var at kunnskap gjor mennesker frie.`
    },
    {
      id: 'samf-7-1-1-example',
      type: 'example',
      title: 'Ideer som forandret verden',
      problem: 'Hvordan pavirker opplysningstidens ideer oss i dag?',
      solution: `Opplysningstidens ideer er grunnlaget for moderne demokratier:

**Maktfordeling:**
I Norge har vi Stortinget (lovgivende), regjeringen (utovende) og domstolene (dommende). Dette er Montesquieus ide!

**Menneskerettigheter:**
FNs verdenserklaering om menneskerettigheter bygger pa Lockes ideer om at alle har rettigheter fra fodselen.

**Ytringsfrihet:**
Var rett til a si det vi mener kommer fra Voltaires kamp for ytringsfrihet.

**Folkestyre:**
Rousseaus ide om at makten skal ligge hos folket er grunnlaget for demokrati.

**Utdanning for alle:**
Ideen om at alle skal fa utdanning kommer fra opplysningstiden.`
    },
    {
      id: 'samf-7-1-1-tip',
      type: 'tip',
      title: 'Kritisk tenkning',
      content: `Opplysningstidens viktigste arv er kanskje **kritisk tenkning**:

- Ikke tro pa alt du horer
- Spor etter bevis
- Tenk selv!
- Vaer apen for at du kan ta feil
- Lytt til ulike synspunkter

Dette er like viktig i dag - spesielt nar vi leser nyheter og informasjon pa internett!`
    },
    {
      id: 'samf-7-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Nar var opplysningstiden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig arhundre for opplysningstiden.',
            solution: '1700-tallet',
            multipleChoiceOptions: ['1700-tallet', '1500-tallet', '1900-tallet', '1200-tallet'],
          },
        ],
        solution: 'Opplysningstiden var pa 1700-tallet, ogsa kalt "fornuftens tidsalder".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem foreslo maktfordeling mellom lovgivende, utovende og dommende makt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig filosof.',
            solution: 'Montesquieu',
            multipleChoiceOptions: ['Montesquieu', 'Voltaire', 'Rousseau', 'Locke'],
          },
        ],
        solution: 'Montesquieu foreslo maktfordelingsprinsippet, som brukes i de fleste demokratier i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva var hovedideen i opplysningstiden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver opplysningstidens hovedide.',
            solution: 'Mennesker skulle bruke fornuften og tenke selv',
            multipleChoiceOptions: [
              'Mennesker skulle bruke fornuften og tenke selv',
              'Kongen skulle ha all makt',
              'Religion var viktigere enn vitenskap',
              'Bare de rike skulle fa utdanning',
            ],
          },
        ],
        solution: 'Opplysningstiden handlet om a bruke fornuften, stille sporsmal og tenke kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over opplysningstidens betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er maktfordeling viktig i et demokrati?',
            solution: 'Maktfordeling hindrer at en person eller gruppe far all makt. Nar makten er fordelt pa flere, kan de kontrollere hverandre. Dette beskytter innbyggernes rettigheter.',
            multipleChoiceOptions: [
              'Maktfordeling hindrer at en person far all makt, og de ulike maktene kan kontrollere hverandre',
              'Maktfordeling er ikke viktig',
              'Det er best at en person bestemmer alt',
              'Maktfordeling gjor at ingenting blir gjort',
            ],
          },
          {
            label: 'b',
            task: 'Gi et eksempel pa hvordan vi bruker kritisk tenkning i dag.',
            solution: 'Eksempler: Sjekke om nyheter er sanne for vi deler dem, sammenligne informasjon fra flere kilder, sporre etter bevis for pastander, vaere skeptisk til reklame.',
            multipleChoiceOptions: [
              'Sjekke om nyheter er sanne, sammenligne kilder, sporre etter bevis',
              'Tro pa alt vi leser pa internett',
              'Aldri stille sporsmal',
              'Bare hore pa en kilde',
            ],
          },
        ],
        solution: 'Opplysningstidens ideer er fortsatt aktuelle i dag!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Koble filosof og ide.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken filosof kjempet for ytringsfrihet og religionsfrihet?',
            solution: 'Voltaire',
            multipleChoiceOptions: ['Voltaire', 'Newton', 'Linne', 'Diderot'],
          },
          {
            label: 'b',
            task: 'Hvem mente at alle mennesker er fodt med naturlige rettigheter som liv, frihet og eiendom?',
            solution: 'John Locke',
            multipleChoiceOptions: ['John Locke', 'Rousseau', 'Montesquieu', 'Voltaire'],
          },
        ],
        solution: 'Opplysningsfilosofene hadde ulike fokusomrader, men alle kjempet for fornuft og frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Den industrielle revolusjonen
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_1_2: TextbookChapter = {
  id: 'samfunnsfag-7-1-2',
  courseId: 'samfunnsfag-7',
  chapterNumber: '1.2',
  title: 'Den industrielle revolusjonen',
  description: 'Laer om hvordan maskiner forandret arbeidslivet og samfunnet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive sentrale hendelser og prosesser i historien som har pavirket samfunnet vi lever i',
    'utforske hvordan teknologiske endringer har pavirket menneskers liv og arbeid'
  ],
  content: [
    {
      id: 'samf-7-1-2-intro',
      type: 'text',
      content: `
# Den industrielle revolusjonen

Pa slutten av 1700-tallet begynte en enorm forandring i England som skulle
forandre hele verden. **Maskiner** tok over arbeid som mennesker hadde gjort
for hand i tusenvis av ar. Dette kalles **den industrielle revolusjonen**.

Denne revolusjonen forandret alt: hvordan vi jobber, hvor vi bor, hva vi
spiser, og hvordan vi lever. Verden for og etter er helt forskjellig!
      `
    },
    {
      id: 'samf-7-1-2-def-industri',
      type: 'definition',
      title: 'Den industrielle revolusjonen',
      content: `**Den industrielle revolusjonen** var overgangen fra handarbeid til maskinproduksjon, som startet i England rundt 1760.

Hva forandret seg:
- **Produksjon**: Fra handverk til fabrikker med maskiner
- **Energi**: Fra muskelkraft til dampkraft
- **Bosetting**: Folk flyttet fra landsbygda til byene
- **Transport**: Tog og dampbater gjorde reising raskere
- **Arbeid**: Nye yrker i fabrikkene, gamle handverk forsvant

Revolusjonen spredte seg fra England til Europa og USA pa 1800-tallet, og til Norge fra ca. 1840.`
    },
    {
      id: 'samf-7-1-2-oppfinnelser',
      type: 'text',
      title: 'Viktige oppfinnelser',
      content: `
## Oppfinnelser som forandret verden

**Dampmaskinen (James Watt, 1769)**
- Kunne drive maskiner med kraft fra damp
- Erstattet vannkraft og muskelkraft
- Brukt i fabrikker, tog og bater

**Spinnemaskinen (1764-1779)**
- Kunne spinne trad mye raskere enn for hand
- Gjorde tekstilproduksjon billigere
- England ble verdens storste tekstilprodusent

**Vevstolen (Edmund Cartwright, 1785)**
- Maskinvev var mye raskere enn handvev
- Krevde dampmaskiner for a ga

**Jernbanen (1825)**
- George Stephensons lokomotiv
- Raskere transport av varer og mennesker
- Koblet sammen byer og landsbyer

**Dampbaten (Robert Fulton, 1807)**
- Skip som gikk uten seil
- Kunne ga mot vind og strom
- Gjorde transatlantiske reiser raskere
      `
    },
    {
      id: 'samf-7-1-2-fabrikker',
      type: 'text',
      title: 'Livet i fabrikkene',
      content: `
## Fabrikkliv

For den industrielle revolusjonen jobbet folk pa garden eller i sma verksteder.
Na flyttet tusenvis til byene for a jobbe i fabrikker.

**Arbeidsdagen**
- 12-16 timers arbeidsdag var vanlig
- 6 dager i uken
- Ingen ferie eller sykepenger
- Farlige maskiner og darlig luft

**Barnearbeid**
- Barn sa unge som 5-6 ar jobbet i fabrikker og gruver
- De var billig arbeidskraft
- Mange ble skadet eller syke
- Forst pa 1800-tallet kom lover mot barnearbeid

**Boliger**
- Trange boliger i overfylte byer
- Darlig hygiene og rent vann
- Sykdommer spredte seg raskt
- Mange familier bodde pa ett rom
      `
    },
    {
      id: 'samf-7-1-2-warning',
      type: 'warning',
      title: 'Skyggesidenene av industrialiseringen',
      content: `Den industrielle revolusjonen hadde mange negative konsekvenser:

**For arbeidere:**
- Lange arbeidsdager og lav lonn
- Farlige arbeidsforhold
- Barnearbeid
- Bolignod og fattigdom

**For miljoet:**
- Forurensning fra fabrikker
- Skog ble hugget ned
- Elver ble forurenset
- Byer ble grå og roykfylte

Disse problemene forte til at arbeidere begynte a organisere seg i fagforeninger og kreve bedre forhold.`
    },
    {
      id: 'samf-7-1-2-norge',
      type: 'text',
      title: 'Industrialiseringen i Norge',
      content: `
## Norge blir industriland

Norge kom sent i gang med industrialisering (fra ca. 1840):

**Tekstilindustrien**
- Forste fabrikker i Aker (Oslo) og Bergen
- Spinnerier og veverier

**Treforedling**
- Sager og tremassefabrikker
- Norges skoger ga ramaterial

**Jernverk**
- Gruver og jernverk flere steder
- Viktig for byggematerialer og maskiner

**Vannkraft**
- Norge hadde mye vannkraft (fosser)
- Viktig energikilde for industri
- La grunnlag for senere kraftutbygging

**Jernbanen**
- Forste jernbane: Oslo-Eidsvoll (1854)
- Bergensbanen (1909) koblet ost og vest
      `
    },
    {
      id: 'samf-7-1-2-example',
      type: 'example',
      title: 'Fra bondegard til fabrikkby',
      problem: 'Hvordan forandret livet seg for en familie som flyttet fra landet til byen?',
      solution: `**Pa landet (for):**
- Familien jobbet sammen pa garden
- De dyrket egen mat
- Arbeidet fulgte arstidene
- Barna hjalp til hjemme
- Alle kjente hverandre i bygda

**I byen (etter):**
- Far og mor jobbet i fabrikk 12-14 timer om dagen
- Barna matte ogsa jobbe for a fa rad til mat
- De bodde trangt i en leilighet
- Maskinene bestemte tempoet
- Mange fremmede mennesker rundt dem
- De kjopte mat i stedet for a dyrke den

Livet ble helt annerledes - noen ting ble bedre (mer varer, nye muligheter), men mye ble ogsa vanskeligere.`
    },
    {
      id: 'samf-7-1-2-note',
      type: 'note',
      title: 'Resultater av industrialiseringen',
      content: `Pa lang sikt forte den industrielle revolusjonen til:

**Positive endringer:**
- Hoyre levestandard for mange
- Bedre medisin og helse
- Mer utdanning
- Nye oppfinnelser og teknologi
- Raskere transport og kommunikasjon

**Kampen for bedre forhold:**
- Fagforeninger ble dannet
- Arbeiderbevegelsen vokste
- Lover mot barnearbeid
- Kortere arbeidsdag
- Bedre boliger og hygiene`
    },
    {
      id: 'samf-7-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor startet den industrielle revolusjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg landet der den industrielle revolusjonen begynte.',
            solution: 'England',
            multipleChoiceOptions: ['England', 'Frankrike', 'USA', 'Norge'],
          },
        ],
        solution: 'Den industrielle revolusjonen startet i England rundt 1760.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem fant opp den forbedrede dampmaskinen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppfinner.',
            solution: 'James Watt',
            multipleChoiceOptions: ['James Watt', 'George Stephenson', 'Edmund Cartwright', 'Robert Fulton'],
          },
        ],
        solution: 'James Watt forbedret dampmaskinen i 1769 og gjorde den mer effektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva var typisk for arbeidsdagen i en fabrikk pa 1800-tallet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver arbeidsdagen.',
            solution: '12-16 timers arbeidsdag, 6 dager i uken, ingen ferie',
            multipleChoiceOptions: [
              '12-16 timers arbeidsdag, 6 dager i uken, ingen ferie',
              '8 timers arbeidsdag med god lonn',
              '5 dagers uke med lang ferie',
              'Folk jobbet bare nar de ville',
            ],
          },
        ],
        solution: 'Arbeidsforholdene var harde: lange dager, farlige maskiner og darlig lonn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over industrialiseringens konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to positive og to negative sider ved den industrielle revolusjonen.',
            solution: 'Positive: Flere varer, bedre teknologi, hoyre levestandard pa sikt, bedre transport. Negative: Barnearbeid, lange arbeidsdager, forurensning, fattigdom i byene.',
            multipleChoiceOptions: [
              'Positive: flere varer og bedre teknologi. Negative: barnearbeid og forurensning',
              'Alt var positivt med industrialiseringen',
              'Alt var negativt med industrialiseringen',
              'Industrialiseringen pavirket ikke hverdagen',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor organiserte arbeiderne seg i fagforeninger?',
            solution: 'Arbeiderne organiserte seg for a kreve bedre lonn, kortere arbeidsdag, tryggere arbeidsforhold og slutt pa barnearbeid. Sammen var de sterkere enn alene.',
            multipleChoiceOptions: [
              'For a kreve bedre lonn, kortere arbeidsdag og tryggere arbeidsforhold',
              'Fordi de likte a ga pa moter',
              'Fordi fabrikkeierne ba dem om det',
              'For a jobbe enda mer',
            ],
          },
        ],
        solution: 'Den industrielle revolusjonen hadde bade positive og negative sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-1-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-1-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Industrialiseringen i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Nar begynte industrialiseringen i Norge?',
            solution: 'Ca. 1840',
            multipleChoiceOptions: ['Ca. 1840', 'Ca. 1760', 'Ca. 1900', 'Ca. 1700'],
          },
          {
            label: 'b',
            task: 'Hvilken energikilde var spesielt viktig for norsk industri?',
            solution: 'Vannkraft',
            multipleChoiceOptions: ['Vannkraft', 'Olje', 'Kull', 'Sol'],
          },
        ],
        solution: 'Norge hadde mye vannkraft fra fosser, noe som ble viktig for industrien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Norge blir selvstendig (1814)
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_2_1: TextbookChapter = {
  id: 'samfunnsfag-7-2-1',
  courseId: 'samfunnsfag-7',
  chapterNumber: '2.1',
  title: 'Norge blir selvstendig (1814)',
  description: 'Laer om grunnloven, Eidsvoll og hvordan Norge ble en selvstendig nasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive sentrale hendelser og prosesser i norsk historie',
    'utforske hvordan demokratiet i Norge har utviklet seg'
  ],
  content: [
    {
      id: 'samf-7-2-1-intro',
      type: 'text',
      content: `
# Norge blir selvstendig (1814)

17. mai feirer vi Norges nasjonaldag. Men hva skjedde egentlig i 1814?
Det aret fikk Norge sin egen grunnlov og ble en selvstendig nasjon - etter
a ha vaert i union med Danmark i over 400 ar!

1814 er et av de viktigste arene i norsk historie. Pa bare noen maneder
fikk vi grunnlov, konge og selvstyre.
      `
    },
    {
      id: 'samf-7-2-1-bakgrunn',
      type: 'text',
      title: 'Bakgrunnen',
      content: `
## Hvorfor skjedde det akkurat i 1814?

**Union med Danmark**
Siden 1380 hadde Norge vaert i union med Danmark. Kongen bodde i Kobenhavn,
og Danmark bestemte det meste. Norge var som en koloni.

**Napoleonskrigene (1803-1815)**
Europa var i krig. Danmark-Norge valgte side med Napoleon (Frankrike), mens
Sverige valgte side med England og Russland.

**Danmark taper**
Napoleon tapte, og som straff matte Danmark gi fra seg Norge til Sverige
(Kieltraktaten, 14. januar 1814).

**Nordmennene nekter!**
Nordmennene ville ikke bare bli overgitt til et annet land. De sa: "Vi er et
eget folk og vil bestemme selv!"
      `
    },
    {
      id: 'samf-7-2-1-def-grunnlov',
      type: 'definition',
      title: 'Grunnloven',
      content: `**Grunnloven** er Norges viktigste lov, vedtatt pa Eidsvoll 17. mai 1814.

Grunnloven fastsatte:
- Norge er et **fritt og selvstendig rike**
- **Maktfordeling** mellom Stortinget, regjeringen og domstolene
- **Folket** velger representanter til Stortinget
- **Rettigheter** som ytringsfrihet og religionsfrihet
- **Kongen** har begrenset makt

Grunnloven er inspirert av:
- Den amerikanske uavhengighetserklaering (1776)
- Den franske revolusjonen (1789)
- Opplysningstidens ideer`
    },
    {
      id: 'samf-7-2-1-eidsvoll',
      type: 'text',
      title: 'Riksforsamlingen pa Eidsvoll',
      content: `
## Eidsvoll 1814

**10. april 1814:**
112 menn fra hele Norge motte pa Eidsvoll for a skrive en grunnlov.

**Selvstendighetspartiet vs. Unionspartiet**
- **Selvstendighetspartiet**: Ville ha fullt uavhengig Norge (flertallet)
- **Unionspartiet**: Mente Norge matte akseptere union med Sverige

**Christian Frederik**
Den danske prinsen Christian Frederik ledet motstandskampen. Han ble valgt
til Norges konge.

**17. mai 1814:**
Grunnloven ble vedtatt og underskrevet. Christian Frederik ble valgt til konge.
Norge var selvstendig!

**Men det varte ikke...**
Sverige sendte soldater. Etter en kort krig matte Norge akseptere union med
Sverige - MEN vi fikk beholde grunnloven!
      `
    },
    {
      id: 'samf-7-2-1-representanter',
      type: 'note',
      title: 'Eidsvollsmennene',
      content: `De 112 mennene pa Eidsvoll kom fra ulike bakgrunner:

- **Embedsmenn**: Prester, jurister, offiserer (59 stk)
- **Bonder**: 37 stykker (uvanlig for den tiden!)
- **Byborgere**: 16 stykker

De jobbet intensivt i fem uker for a skrive grunnloven. Mange var unge menn
med nye ideer fra opplysningstiden.

Noen kjente navn:
- Christian Magnus Falsen (kalles "grunnlovens far")
- Wilhelm Christie
- Georg Sverdrup`
    },
    {
      id: 'samf-7-2-1-union',
      type: 'text',
      title: 'Union med Sverige',
      content: `
## I union med Sverige (1814-1905)

Etter krigen i august 1814 matte Norge ga inn i union med Sverige:

**Hva fikk Norge beholde?**
- Grunnloven (med noen endringer)
- Eget storting
- Egne lover
- Egen regjering (men kongen var svensk)

**Hva var felles?**
- Samme konge (svensk)
- Felles utenrikspolitikk
- Forsvarssamarbeid

Norge hadde mer selvstyre i denne unionen enn de hadde hatt med Danmark.
Unionen med Sverige varte til 1905, da Norge ble fullt selvstendig.
      `
    },
    {
      id: 'samf-7-2-1-example',
      type: 'example',
      title: 'Demokrati for noen fa',
      problem: 'Hvem hadde stemmerett i 1814?',
      solution: `I 1814 fikk bare noen fa stemme:

**Kunne stemme:**
- Menn over 25 ar
- Embedsmenn (prester, jurister, offiserer)
- Byborgere med eiendom
- Bonder som eide eller leide gard

**Kunne IKKE stemme:**
- Alle kvinner
- Fattige menn
- Arbeidere uten eiendom
- Tjenere

Bare ca. 10% av befolkningen hadde stemmerett! Det tok mange ar for dette ble utvidet:
- 1898: Alle menn far stemmerett
- 1913: Alle kvinner far stemmerett`
    },
    {
      id: 'samf-7-2-1-tip',
      type: 'tip',
      title: 'Hvorfor feirer vi 17. mai?',
      content: `17. mai feirer vi fordi:

1. **Grunnloven ble vedtatt** - Vi fikk var egen lov
2. **Norge ble erklart selvstendig** - Vi var ikke lenger dansk
3. **Vi valgte var egen konge** - Folket bestemte
4. **Demokratiske ideer** - Maktfordeling og rettigheter

Feiringen slik vi kjenner den i dag, med barnetog og bunader, utviklet seg gradvis pa 1800-tallet. I starten var det kontroversielt a feire 17. mai fordi Sverige likte det darlig!`
    },
    {
      id: 'samf-7-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Nar ble grunnloven vedtatt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig dato.',
            solution: '17. mai 1814',
            multipleChoiceOptions: ['17. mai 1814', '17. mai 1905', '14. januar 1814', '7. juni 1905'],
          },
        ],
        solution: 'Grunnloven ble vedtatt pa Eidsvoll 17. mai 1814.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange menn var samlet pa Eidsvoll?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall.',
            solution: '112',
            multipleChoiceOptions: ['112', '50', '200', '17'],
          },
        ],
        solution: '112 menn fra hele Norge motte pa Eidsvoll for a skrive grunnloven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilket land var Norge i union med for 1814?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig land.',
            solution: 'Danmark',
            multipleChoiceOptions: ['Danmark', 'Sverige', 'England', 'Frankrike'],
          },
        ],
        solution: 'Norge var i union med Danmark fra 1380 til 1814.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser stemmeretten i 1814.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem hadde IKKE stemmerett i 1814?',
            solution: 'Kvinner og fattige menn uten eiendom',
            multipleChoiceOptions: [
              'Kvinner og fattige menn uten eiendom',
              'Alle voksne hadde stemmerett',
              'Bare kongen hadde stemmerett',
              'Ingen hadde stemmerett',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig at grunnloven kan endres over tid?',
            solution: 'Samfunnet forandrer seg, og grunnloven ma folge med. I 1814 hadde bare menn med eiendom stemmerett, men i dag har alle over 18 ar stemmerett. Grunnloven ma kunne tilpasses nye tider.',
            multipleChoiceOptions: [
              'Fordi samfunnet forandrer seg og grunnloven ma kunne tilpasses nye tider',
              'Grunnloven skal aldri endres',
              'Bare kongen kan endre grunnloven',
              'Grunnloven endres hvert ar automatisk',
            ],
          },
        ],
        solution: 'Demokratiet har utviklet seg gradvis siden 1814.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Viktige prinsipper i grunnloven.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr maktfordeling?',
            solution: 'At makten er fordelt mellom Stortinget, regjeringen og domstolene',
            multipleChoiceOptions: [
              'At makten er fordelt mellom Stortinget, regjeringen og domstolene',
              'At kongen har all makt',
              'At bare en person bestemmer',
              'At ingen har makt',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke ideer inspirerte grunnloven?',
            solution: 'Opplysningstidens ideer, den amerikanske og den franske revolusjonen',
            multipleChoiceOptions: [
              'Opplysningstidens ideer, den amerikanske og den franske revolusjonen',
              'Vikingtiden',
              'Middelalderens kongemakt',
              'Svartedauden',
            ],
          },
        ],
        solution: 'Grunnloven bygger pa opplysningstidens demokratiske ideer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Utviklingen av demokratiet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_2_2: TextbookChapter = {
  id: 'samfunnsfag-7-2-2',
  courseId: 'samfunnsfag-7',
  chapterNumber: '2.2',
  title: 'Utviklingen av demokratiet',
  description: 'Laer om hvordan demokratiet i Norge har utviklet seg fra 1814 til i dag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske hvordan demokratiet i Norge har utviklet seg',
    'beskrive hvordan ulike grupper har kjempet for rettigheter'
  ],
  content: [
    {
      id: 'samf-7-2-2-intro',
      type: 'text',
      content: `
# Utviklingen av demokratiet

I 1814 fikk Norge grunnloven, men demokratiet vi kjenner i dag har utviklet
seg gradvis gjennom over 200 ar. Mange grupper har kjempet for a fa de
rettighetene vi tar for gitt i dag.

Fra at bare rike menn kunne stemme, til at alle over 18 ar har stemmerett -
det er en lang reise full av kamp og seire.
      `
    },
    {
      id: 'samf-7-2-2-stemmerett',
      type: 'text',
      title: 'Kampen for stemmerett',
      content: `
## Utvidelse av stemmeretten

**1814**: Bare menn med eiendom kunne stemme (ca. 10% av befolkningen)

**1884**: Parlamentarismen innfores
- Regjeringen ma ha flertall i Stortinget
- Storre makt til folket

**1898**: Allmenn stemmerett for menn
- Alle menn over 25 ar far stemme
- Uten krav om eiendom

**1901**: Begrenset stemmerett for kvinner (kommunevalg)
- Kvinner med eiendom far stemme lokalt

**1913**: Allmenn stemmerett for kvinner
- Norge er et av de forste landene i verden!

**1978**: Stemmerettsalderen senkes til 18 ar

I dag har alle norske statsborgere over 18 ar stemmerett!
      `
    },
    {
      id: 'samf-7-2-2-def-parlamentarisme',
      type: 'definition',
      title: 'Parlamentarisme',
      content: `**Parlamentarisme** betyr at regjeringen ma ha tillit fra flertallet i Stortinget (parlamentet).

For 1884:
- Kongen utnevnte regjeringen
- Stortinget kunne ikke avsette den

Etter 1884:
- Regjeringen ma ha stotte fra Stortinget
- Hvis Stortinget sier nei til regjeringen, ma den ga av
- Dette kalles mistillitsvotum

Parlamentarismen ga folket (gjennom Stortinget) mer makt over hvem som styrer landet.`
    },
    {
      id: 'samf-7-2-2-kvinner',
      type: 'text',
      title: 'Kvinnekampen',
      content: `
## Kampen for kvinners rettigheter

**Gina Krog (1847-1916)**
- Leder for kvinnestemmerettsbevegelsen
- Grunnla Norsk Kvinnesaksforening
- Jobbet i over 30 ar for kvinners stemmerett

**Hva kjempet kvinnene for?**
- Stemmerett (oppnadd 1913)
- Rett til utdanning (gradvis utvidet)
- Rett til a eie og arve (lovendringer pa 1800-tallet)
- Likestilling i ekteskapet
- Rett til a jobbe i alle yrker

**Viktige milepeler:**
- 1854: Kvinner far arverett pa lik linje med menn
- 1884: Kvinner far ta examen artium
- 1912: Kvinner far adgang til statens embeter
- 1913: Kvinner far full stemmerett
- 1979: Likestillingsloven vedtas
      `
    },
    {
      id: 'samf-7-2-2-arbeiderbevegelsen',
      type: 'text',
      title: 'Arbeiderbevegelsen',
      content: `
## Arbeidernes kamp

Med industrialiseringen kom darlige arbeidsforhold. Arbeiderne begynte a
organisere seg for a kreve bedre forhold.

**Fagforeninger**
- Arbeidere ga sammen for a sta sterkere
- LO (Landsorganisasjonen) stiftet 1899
- Forhandlet om lonn og arbeidsforhold

**Arbeiderpartiet**
- Stiftet 1887
- Politisk parti for arbeidernes interesser
- Ble Norges storste parti pa 1900-tallet

**Hva kjempet de for?**
- 8-timers arbeidsdag (innfort 1919)
- Ferie (ferieloven 1947)
- Trygge arbeidsplasser
- Sykepenger og pensjon
- Forbud mot barnearbeid

**Velferdsstatens fremvekst**
Etter 2. verdenskrig bygget Norge opp velferdsstaten med:
- Gratis skole og helse
- Pensjon til alle
- Trygdeordninger
      `
    },
    {
      id: 'samf-7-2-2-note',
      type: 'note',
      title: 'Unionsopplosningen 1905',
      content: `Etter 91 ar i union med Sverige, ble Norge fullt selvstendig i 1905:

**7. juni 1905:** Stortinget erklarer unionen opphost

**13. august 1905:** Folkeavstemning - 99,95% stemmer for selvstendighet!

**18. november 1905:** Prins Carl av Danmark blir valgt til konge og tar navnet Haakon VII

Dette var en viktig milepael for norsk demokrati - folket bestemte selv at Norge skulle vaere uavhengig.`
    },
    {
      id: 'samf-7-2-2-example',
      type: 'example',
      title: 'Demokrati i utvikling',
      problem: 'Sammenlign stemmeretten i 1814 og i dag.',
      solution: `**1814:**
- Bare menn over 25 ar
- Matte eie eiendom eller ha embete
- Ca. 10% av befolkningen
- Ingen kvinner

**I dag:**
- Alle over 18 ar
- Uansett kjonn
- Uansett eiendom eller yrke
- Ca. 75% av befolkningen (alle statsborgere over 18)

**Viktige endringer pa veien:**
- 1898: Alle menn
- 1913: Alle kvinner
- 1978: 18-arsgrense

Dette viser at demokrati ikke er noe vi "far", men noe vi stadig ma utvikle og forsvare.`
    },
    {
      id: 'samf-7-2-2-tip',
      type: 'tip',
      title: 'Demokratiet er aldri "ferdig"',
      content: `Demokratiet utvikler seg fortsatt:

**Debatter i dag:**
- Stemmerett for 16-aringer?
- Mer direkte demokrati (folkeavstemninger)?
- Hvordan fa flere til a engasjere seg?
- Hvordan beskytte demokratiet mot desinformasjon?

**Du kan pavirke!**
- Engasjer deg i saker du bryr deg om
- Stem nar du blir gammel nok
- Vaer med i elevrad eller ungdomsrad
- Delta i fredelige demonstrasjoner`
    },
    {
      id: 'samf-7-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Nar fikk kvinner full stemmerett i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig ar.',
            solution: '1913',
            multipleChoiceOptions: ['1913', '1814', '1898', '1979'],
          },
        ],
        solution: 'Kvinner fikk full stemmerett i 1913. Norge var et av de forste landene i verden!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr parlamentarisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige forklaringen.',
            solution: 'At regjeringen ma ha stotte fra flertallet i Stortinget',
            multipleChoiceOptions: [
              'At regjeringen ma ha stotte fra flertallet i Stortinget',
              'At kongen bestemmer alt',
              'At bare rike far stemme',
              'At det ikke er valg',
            ],
          },
        ],
        solution: 'Parlamentarisme ble innfort i 1884 og ga folket mer makt gjennom Stortinget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Nar ble unionen med Sverige opphost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig ar.',
            solution: '1905',
            multipleChoiceOptions: ['1905', '1814', '1884', '1945'],
          },
        ],
        solution: 'Unionen med Sverige ble opphost i 1905 etter en folkeavstemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over demokratiets utvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor matte arbeiderne organisere seg i fagforeninger?',
            solution: 'Alene var arbeiderne svake mot fabrikkeierne. Sammen kunne de kreve bedre lonn, kortere arbeidsdag og tryggere arbeidsplasser. Fagforeningene ga arbeiderne forhandlingsmakt.',
            multipleChoiceOptions: [
              'For a sta sterkere sammen og kunne forhandle om bedre lonn og arbeidsforhold',
              'Fordi de likte a motes',
              'Fordi fabrikkeierne ba dem om det',
              'Det var ikke nodvendig a organisere seg',
            ],
          },
          {
            label: 'b',
            task: 'Gi et eksempel pa en rettighet vi har i dag som folk har kjempet for.',
            solution: 'Eksempler: Stemmerett for kvinner, 8-timers arbeidsdag, ferie, sykepenger, gratis skole, likestilling.',
            multipleChoiceOptions: [
              'Stemmerett for kvinner, 8-timers arbeidsdag, ferie, gratis skole',
              'Vi har alltid hatt alle rettigheter',
              'Ingen har kjempet for noe',
              'Alle rettigheter kom automatisk',
            ],
          },
        ],
        solution: 'Mange av rettighetene vi tar for gitt, har noen kjempet for!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-2-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-2-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag en tidslinje.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett disse hendelsene i kronologisk rekkefolge: Parlamentarismen innfores, Grunnloven vedtas, Kvinner far stemmerett, Unionen opplosses.',
            solution: 'Grunnloven (1814), Parlamentarismen (1884), Unionen opplosses (1905), Kvinner far stemmerett (1913)',
            multipleChoiceOptions: [
              'Grunnloven (1814), Parlamentarismen (1884), Unionen opplosses (1905), Kvinner far stemmerett (1913)',
              'Unionen opplosses, Grunnloven, Kvinner far stemmerett, Parlamentarismen',
              'Kvinner far stemmerett, Grunnloven, Parlamentarismen, Unionen opplosses',
              'Alle skjedde samtidig',
            ],
          },
        ],
        solution: 'Demokratiet i Norge har utviklet seg steg for steg over 200 ar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Globalisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_3_1: TextbookChapter = {
  id: 'samfunnsfag-7-3-1',
  courseId: 'samfunnsfag-7',
  chapterNumber: '3.1',
  title: 'Globalisering',
  description: 'Laer om hvordan verden har blitt mer sammenkoblet og hva det betyr for oss.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive globalisering og hvordan den pavirker mennesker og samfunn',
    'drøfte konsekvenser av globalisering'
  ],
  content: [
    {
      id: 'samf-7-3-1-intro',
      type: 'text',
      content: `
# Globalisering

Har du tenkt over hvor klarne dine er laget? Eller hvor maten din kommer fra?
I dag kan du kjope varer fra hele verden, snakke med folk pa andre kontinenter,
og se nyheter fra alle land - alt pa noen sekunder!

Dette kalles **globalisering** - verden har blitt mindre og mer sammenkoblet.
Men hva betyr det egentlig, og er det bare positivt?
      `
    },
    {
      id: 'samf-7-3-1-def-globalisering',
      type: 'definition',
      title: 'Globalisering',
      content: `**Globalisering** betyr at land og mennesker over hele verden blir mer avhengige av hverandre.

Globalisering handler om:
- **Handel**: Varer kjopes og selges pa tvers av landegrenser
- **Kommunikasjon**: Internett, sosiale medier, nyheter
- **Reising**: Enklere a reise og flytte til andre land
- **Kultur**: Musikk, film, mat og ideer spres over hele verden
- **Okonomi**: Bedrifter jobber i mange land samtidig

Globaliseringen har okt kraftig de siste 30-40 arene pa grunn av internett, billigere transport og frihandelsavtaler.`
    },
    {
      id: 'samf-7-3-1-hvorfor',
      type: 'text',
      title: 'Hvorfor har verden blitt mer global?',
      content: `
## Hva har gjort globaliseringen mulig?

**Teknologi**
- Internett og smarttelefoner
- Raskere og billigere transport (fly, containerskip)
- Kommunikasjon i sanntid over hele verden

**Okonomi**
- Frihandelsavtaler fjerner tollmurer
- Bedrifter kan produsere der det er billigst
- Penger kan flyttes mellom land

**Politikk**
- Internasjonale organisasjoner (FN, WTO)
- Samarbeid mellom land
- Farre kriger og konflikter mellom stormakter

**Kultur**
- Engelskspraklighet
- Global popkultur (musikk, film, spill)
- Sosiale medier
      `
    },
    {
      id: 'samf-7-3-1-positive',
      type: 'text',
      title: 'Positive sider ved globalisering',
      content: `
## Fordeler med globalisering

**Varer og tjenester**
- Storre utvalg av produkter
- Billigere varer
- Tilgang til mat og varer fra hele verden

**Kunnskap og kultur**
- Enkelt a laere om andre kulturer
- Tilgang til informasjon fra hele verden
- Samarbeid pa tvers av landegrenser

**Okonomisk vekst**
- Flere jobber i mange land
- Fattige land kan selge varer til rike land
- Hoyre levestandard for mange

**Samarbeid**
- Lettere a lose globale problemer sammen
- Kulturutveksling og forstaelse
- Medisinsk og vitenskapelig samarbeid
      `
    },
    {
      id: 'samf-7-3-1-negative',
      type: 'text',
      title: 'Negative sider ved globalisering',
      content: `
## Utfordringer med globalisering

**Miljo**
- Mer transport = mer forurensning
- Produksjon flyttes til land med svake miljolovkrav
- Overforbruk av ressurser

**Arbeidsforhold**
- Jobber flyttes til land med lave lonninger
- Darlige arbeidsforhold i noen fabrikker
- Okt konkurranse om jobbene

**Ulikhet**
- Noen blir veldig rike, andre far lite
- Store selskaper far mye makt
- Sma bedrifter sliter mot globalekjemper

**Kultur**
- Lokale tradisjoner kan forsvinne
- Samme produkter over hele verden
- Mektige kulturer dominerer
      `
    },
    {
      id: 'samf-7-3-1-example',
      type: 'example',
      title: 'Din T-skjorte - en global reise',
      problem: 'Hvor kommer T-skjorten din fra?',
      solution: `En vanlig T-skjorte kan ha reist verden rundt for du kjoper den:

1. **Bomull dyrkes** i USA, India eller Kina
2. **Garnet spinnes** i Pakistan eller Tyrkia
3. **Stoffet veves** i Kina
4. **T-skjorten sys** i Bangladesh eller Vietnam
5. **Transporten** gar med skip til Europa
6. **Du kjoper den** i en butikk i Norge

Mange mennesker i mange land har jobbet med den ene T-skjorten!

**Sporsmal a tenke pa:**
- Hvem tjener mest pa denne prosessen?
- Hvordan er arbeidsforholdene i fabrikkene?
- Hva med miljoet nar varene fraktes sa langt?`
    },
    {
      id: 'samf-7-3-1-note',
      type: 'note',
      title: 'Frihandel vs. proteksjonisme',
      content: `**Frihandel**: Land handler fritt med hverandre uten toll og hindringer
- Billigere varer
- Mer konkurranse
- Men kan skade lokale bedrifter

**Proteksjonisme**: Land beskytter egne bedrifter med toll og regler
- Beskytter lokale jobber
- Kan holde tradisjoner i live
- Men gir dyrere varer og mindre utvalg

De fleste land har en blanding av begge!`
    },
    {
      id: 'samf-7-3-1-tip',
      type: 'tip',
      title: 'Hvordan vaere en bevisst forbruker',
      content: `Du kan ta valg som pavirker verden:

- **Sjekk hvor varene kommer fra**
- **Velg produkter med gode merker** (f.eks. Fairtrade)
- **Tenk pa om du trenger det du kjoper**
- **Kjop brukt nar det er mulig**
- **Spor: Hvem har laget dette? Under hvilke forhold?**

Dine valg teller!`
    },
    {
      id: 'samf-7-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen.',
            solution: 'At land og mennesker over hele verden blir mer avhengige av hverandre',
            multipleChoiceOptions: [
              'At land og mennesker over hele verden blir mer avhengige av hverandre',
              'At bare noen fa land handler med hverandre',
              'At alle land er helt uavhengige',
              'At vi bare kjoper varer fra Norge',
            ],
          },
        ],
        solution: 'Globalisering handler om at verden blir mer sammenkoblet gjennom handel, kommunikasjon og kultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva har gjort globaliseringen mulig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste som har gjort globaliseringen mulig.',
            solution: 'Internett, billigere transport og frihandelsavtaler',
            multipleChoiceOptions: [
              'Internett, billigere transport og frihandelsavtaler',
              'Hogere tollmurer',
              'Mindre reising',
              'Farre telefoner',
            ],
          },
        ],
        solution: 'Teknologi og okonomiske avtaler har gjort det mulig a handle og kommunisere over hele verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er EN negativ side ved globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en negativ konsekvens.',
            solution: 'Mer transport og forurensning',
            multipleChoiceOptions: [
              'Mer transport og forurensning',
              'Storre utvalg av varer',
              'Billigere produkter',
              'Bedre tilgang til informasjon',
            ],
          },
        ],
        solution: 'Globaliseringen har ogsa negative sider, som okt forurensning fra transport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over globalisering i hverdagen.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting i hverdagen din som er pavirket av globalisering.',
            solution: 'Eksempler: Klaer produsert i Asia, mat fra andre land, Netflix-serier fra USA, telefon fra Kina, musikk fra hele verden.',
            multipleChoiceOptions: [
              'Klaer fra Asia, mat fra andre land, serier fra USA',
              'Ingenting er pavirket av globalisering',
              'Bare maten',
              'Bare musikken',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan kan du som forbruker pavirke globalisering positivt?',
            solution: 'Ved a velge varer med gode merker (Fairtrade), tenke pa miljoet, kjope mindre, velge brukt, og sporre om hvordan varer er produsert.',
            multipleChoiceOptions: [
              'Velge Fairtrade-produkter, tenke pa miljoet, kjope mindre og brukt',
              'Kjope sa mye som mulig',
              'Aldri tenke pa hvor varene kommer fra',
              'Du kan ikke pavirke noe',
            ],
          },
        ],
        solution: 'Globaliseringen pavirker hverdagen var pa mange mater!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Positive og negative sider.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn EN fordel og EN ulempe med globalisering.',
            solution: 'Fordel: Storre utvalg, billigere varer, kulturutveksling. Ulempe: Forurensning, ulikhet, tap av lokale tradisjoner.',
            multipleChoiceOptions: [
              'Fordel: storre utvalg. Ulempe: mer forurensning',
              'Bare fordeler finnes',
              'Bare ulemper finnes',
              'Globalisering pavirker ingenting',
            ],
          },
        ],
        solution: 'Globalisering har bade positive og negative konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Fattigdom og ulikhet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_3_2: TextbookChapter = {
  id: 'samfunnsfag-7-3-2',
  courseId: 'samfunnsfag-7',
  chapterNumber: '3.2',
  title: 'Fattigdom og ulikhet',
  description: 'Laer om fattigdom i verden, arsaker og hva vi kan gjore.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og presentere arsaker til fattigdom og ulikhet',
    'drøfte hvordan internasjonalt samarbeid kan bidra til a redusere fattigdom'
  ],
  content: [
    {
      id: 'samf-7-3-2-intro',
      type: 'text',
      content: `
# Fattigdom og ulikhet

Vi lever i en verden der noen har veldig mye, mens andre har nesten ingenting.
Mens du leser dette, lever over 700 millioner mennesker i ekstrem fattigdom.
Det betyr at de har mindre enn 15 kroner om dagen a leve for - til mat, klarer,
bolig og alt annet.

Hvorfor er verden sa ulik? Og hva kan vi gjore med det?
      `
    },
    {
      id: 'samf-7-3-2-def-fattigdom',
      type: 'definition',
      title: 'Fattigdom',
      content: `**Fattigdom** betyr a mangle det man trenger for a leve et verdig liv.

**Ekstrem fattigdom:**
- Under 2,15 dollar om dagen (ca. 23 kr)
- Ca. 700 millioner mennesker (9% av verdens befolkning)
- Mangler ofte mat, rent vann, bolig og helsetjenester

**Relativ fattigdom:**
- A ha mye mindre enn andre i samme samfunn
- Finnes ogsa i rike land som Norge
- Handler om a ikke kunne delta i samfunnet pa lik linje

**Fattigdom handler om mer enn penger:**
- Tilgang til utdanning
- Tilgang til helsetjenester
- Mulighet til a pavirke eget liv
- Trygghet og sikkerhet`
    },
    {
      id: 'samf-7-3-2-arsaker',
      type: 'text',
      title: 'Arsaker til fattigdom',
      content: `
## Hvorfor er noen land fattigere enn andre?

**Historiske arsaker**
- Kolonialisme: Rike land tok ressurser fra fattige land
- Slaveri: Millioner ble utnyttet i arbeid
- Handelsregler som favoriserte de rike

**Naturlige arsaker**
- Lite dyrkbar jord
- Torke, flom eller andre naturkatastrofer
- Fa naturressurser
- Sykdommer som malaria

**Politiske arsaker**
- Korrupsjon og darlig styresett
- Krig og konflikter
- Undertrykkelse av grupper
- Manglende rettigheter

**Okonomiske arsaker**
- Darlige handelsavtaler
- Stor gjeld til andre land
- Fa muligheter til a utvikle industri
      `
    },
    {
      id: 'samf-7-3-2-ulikhet',
      type: 'text',
      title: 'Ulikhet i verden',
      content: `
## Forskjellene i verden

**Noen tall som viser ulikheten:**
- De 10% rikeste eier over 75% av verdens verdier
- De 50% fattigste eier bare 2%
- En person i Norge tjener i snitt 40 ganger mer enn en i Malawi

**Ulikhet mellom land:**
- Rike land i Vest-Europa, Nord-Amerika, Australia
- Fattigere land i deler av Afrika, Asia, Sor-Amerika
- Men: Mange land i Asia har hatt stor vekst de siste 30 arene

**Ulikhet innenfor land:**
- Ogsa i rike land som Norge er det ulikhet
- Noen har veldig mye, andre sliter
- Ca. 115 000 barn i Norge lever i familier med lav inntekt
      `
    },
    {
      id: 'samf-7-3-2-note',
      type: 'note',
      title: 'Gode nyheter!',
      content: `Verden har faktisk blitt bedre pa mange omrader:

**Fattigdom har gatt ned:**
- I 1990 levde 36% i ekstrem fattigdom
- I dag er det ca. 9%
- Over 1 milliard mennesker har kommet ut av fattigdom!

**Flere far utdanning:**
- 90% av barn i verden gar pa skole
- Flere jenter far utdanning enn noen gang

**Bedre helse:**
- Flere lever lenger
- Faerre barn dor for fylte 5 ar
- Bedre tilgang til vaksiner

Det gar fremover - men det er fortsatt mye a gjore!`
    },
    {
      id: 'samf-7-3-2-tiltak',
      type: 'text',
      title: 'Hva kan gjores?',
      content: `
## Tiltak mot fattigdom

**Bistand**
- Rike land gir penger og hjelp til fattige land
- Norge gir ca. 1% av inntektene sine til bistand
- Hjelp til skole, helse, infrastruktur

**Rettferdig handel**
- Betale skikkelig for varer fra fattige land
- Fairtrade-ordninger
- Bedre handelsavtaler

**Utdanning**
- Nar flere far utdanning, kan de tjene mer
- Spesielt viktig at jenter far ga pa skole
- Utdanning gir muligheter

**Godt styresett**
- Demokrati og menneskerettigheter
- Kamp mot korrupsjon
- Investering i innbyggerne

**FNs barekraftsmal**
- Mal 1: Utrydde fattigdom
- Mal 10: Mindre ulikhet
- Alle land har forpliktet seg
      `
    },
    {
      id: 'samf-7-3-2-example',
      type: 'example',
      title: 'Fattigdommens ansikt',
      problem: 'Hvordan ser hverdagen ut for et barn i ekstrem fattigdom?',
      solution: `**Amina, 11 ar, fra landsbygda i Kenya:**

- Star opp ved soloppgang for a hente vann - 2 km a ga
- Spiser frokost: litt grøt, hvis de har
- Gar 4 km til skolen - nar familien har rad til skolepenger
- Etter skolen: hjelper til pa garden eller passer sosken
- Familien har ett maltid til - kanskje ugali (maisgrøt) og gronnsaker
- Sover tidlig - ingen strøm

**Sammenlignet med deg:**
- Du har rent vann i springen
- Du har nok mat
- Du har gratis skole i narheten
- Du har lys, varme og internett

Forskjellen handler ofte om hvor du tilfeldigvis blir født.`
    },
    {
      id: 'samf-7-3-2-tip',
      type: 'tip',
      title: 'Hva kan DU gjore?',
      content: `Selv om du er ung, kan du bidra:

**Laer og del:**
- Laer mer om fattigdom og ulikhet
- Snakk med venner og familie om det

**Handel bevisst:**
- Velg Fairtrade-produkter nar du kan
- Tenk over hvor pengene dine gar

**Støtt organisasjoner:**
- Bøssebarer for innsamlinger
- Støtt humanitaere organisasjoner

**Engasjer deg:**
- Skriv til politikere
- Delta i debatter
- Krev rettferdighet!`
    },
    {
      id: 'samf-7-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange lever i ekstrem fattigdom i dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ca. 700 millioner mennesker',
            multipleChoiceOptions: [
              'Ca. 700 millioner mennesker',
              'Ca. 100 millioner mennesker',
              'Ca. 5 milliarder mennesker',
              'Ingen lever i ekstrem fattigdom',
            ],
          },
        ],
        solution: 'Ca. 700 millioner mennesker (9% av verdens befolkning) lever i ekstrem fattigdom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er en historisk arsak til fattigdom i mange land?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en historisk arsak.',
            solution: 'Kolonialisme - rike land tok ressurser fra fattige land',
            multipleChoiceOptions: [
              'Kolonialisme - rike land tok ressurser fra fattige land',
              'Fattige land ville ikke handle',
              'Alle land har alltid vaert like',
              'Historien har ingen betydning',
            ],
          },
        ],
        solution: 'Kolonialismen er en viktig historisk arsak til at noen land er fattigere enn andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr relativ fattigdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige forklaringen.',
            solution: 'A ha mye mindre enn andre i samme samfunn',
            multipleChoiceOptions: [
              'A ha mye mindre enn andre i samme samfunn',
              'A ha under 2 dollar om dagen',
              'A bo i et fattig land',
              'A ikke ha noe som helst',
            ],
          },
        ],
        solution: 'Relativ fattigdom handler om ulikhet innenfor et samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over fattigdom og ulikhet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er utdanning viktig for a bekjempe fattigdom?',
            solution: 'Utdanning gir mennesker mulighet til a fa bedre jobber og tjene mer. Det gir ogsa kunnskap om helse, rettigheter og muligheter. Utdannede foreldre gir ofte barna bedre muligheter.',
            multipleChoiceOptions: [
              'Utdanning gir mulighet til bedre jobber, mer kunnskap og bedre muligheter for barna',
              'Utdanning er ikke viktig',
              'Bare rike trenger utdanning',
              'Utdanning gjor folk fattigere',
            ],
          },
          {
            label: 'b',
            task: 'Har utviklingen i verden gatt i positiv eller negativ retning nar det gjelder fattigdom?',
            solution: 'Positiv retning! Andelen i ekstrem fattigdom har gatt fra 36% til 9% siden 1990. Over 1 milliard mennesker har kommet ut av fattigdom. Men det er fortsatt mye a gjore.',
            multipleChoiceOptions: [
              'Positiv - andelen fattige har gatt kraftig ned de siste 30 arene',
              'Negativ - det blir flere fattige',
              'Ingenting har forandret seg',
              'Vi vet ikke',
            ],
          },
        ],
        solution: 'Det gar fremover, men vi ma fortsette a jobbe for en mer rettferdig verden!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-3-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-3-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Hva kan gjores mot fattigdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to tiltak som kan redusere fattigdom.',
            solution: 'Bistand fra rike land, utdanning, rettferdig handel (Fairtrade), godt styresett, kamp mot korrupsjon, bedre helsetjenester.',
            multipleChoiceOptions: [
              'Bistand og utdanning',
              'Ingenting kan gjores',
              'Ignorere problemet',
              'La de fattige klare seg selv',
            ],
          },
          {
            label: 'b',
            task: 'Hva er Fairtrade?',
            solution: 'Fairtrade er en ordning som sikrer at bonder og arbeidere i fattige land far en rettferdig pris for varene sine. Nar du kjoper Fairtrade-produkter, stotter du bedre arbeidsforhold.',
            multipleChoiceOptions: [
              'En ordning som sikrer rettferdig betaling til produsenter i fattige land',
              'En type butikk',
              'Et varemerke for dyre produkter',
              'En organisasjon i Norge',
            ],
          },
        ],
        solution: 'Vi kan alle bidra til a gjore verden mer rettferdig!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Klima og miljo
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_4_1: TextbookChapter = {
  id: 'samfunnsfag-7-4-1',
  courseId: 'samfunnsfag-7',
  chapterNumber: '4.1',
  title: 'Klima og miljo',
  description: 'Laer om klimaendringer, arsaker og konsekvenser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og presentere arsaker til og konsekvenser av klimaendringer',
    'drøfte hvordan vi kan arbeide for en barekraftig utvikling'
  ],
  content: [
    {
      id: 'samf-7-4-1-intro',
      type: 'text',
      content: `
# Klima og miljo

Klimaendringene er en av de storste utfordringene verden star overfor. Jorden
blir varmere, isen smelter, og vaeret blir mer ekstremt. Forskerne er enige:
Dette skjer pa grunn av menneskelig aktivitet.

Men hva er egentlig klimaendringer? Hvorfor skjer de? Og hva kan vi gjore?
      `
    },
    {
      id: 'samf-7-4-1-def-klima',
      type: 'definition',
      title: 'Klima vs. vaer',
      content: `**Vaer** er hva som skjer i atmosfaeren akkurat na - regn, sol, vind, temperatur.

**Klima** er gjennomsnittet av vaeret over lang tid (minst 30 ar).

**Klimaendringer** betyr at gjennomsnittstemperaturen og vaermonstrene forandrer seg over tid.

**Global oppvarming:**
- Jorden har blitt ca. 1,1 grader varmere siden 1880
- Det hores lite ut, men det har store konsekvenser
- Uten tiltak kan temperaturen stige 2-4 grader til innen 2100`
    },
    {
      id: 'samf-7-4-1-drivhuseffekt',
      type: 'text',
      title: 'Drivhuseffekten',
      content: `
## Hvorfor blir jorden varmere?

**Naturlig drivhuseffekt:**
Jorden har alltid hatt en naturlig drivhuseffekt. Gasser i atmosfaeren holder
pa varmen fra sola, akkurat som veggene i et drivhus. Uten dette ville jorden
vaert 30 grader kaldere!

**Forsterket drivhuseffekt:**
Mennesker slipper ut mer drivhusgasser, sa mer varme holdes tilbake:
- **CO2 (karbondioksid)**: Fra a brenne olje, kull og gass
- **Metan**: Fra husdyr, avfall og naturgass
- **Lystgass**: Fra jordbruk og industri

**Hvor kommer utslippene fra?**
- Energiproduksjon (elektrisitet, varme): 25%
- Industri: 21%
- Transport: 17%
- Jordbruk: 14%
- Bygninger: 7%
      `
    },
    {
      id: 'samf-7-4-1-konsekvenser',
      type: 'text',
      title: 'Konsekvenser av klimaendringer',
      content: `
## Hva skjer nar jorden blir varmere?

**Is smelter:**
- Isen pa Gronnland og i Antarktis smelter
- Isbreer i fjellene blir mindre
- Havet stiger (20-30 cm de siste 100 ar)

**Ekstremt vaer:**
- Flere og kraftigere stormer
- Mer torke noen steder, mer flom andre steder
- Hetebølger blir vanligere

**Natur i endring:**
- Dyr og planter ma flytte eller dor ut
- Havene blir surere og varmere
- Korallrev dor

**For mennesker:**
- Vanskeligerre a dyrke mat noen steder
- Folk ma flytte fra kysten
- Mer sykdom og konflikter
- Mangel pa vann
      `
    },
    {
      id: 'samf-7-4-1-warning',
      type: 'warning',
      title: 'Klimakrisen er her na',
      content: `Vi ser allerede konsekvensene av klimaendringer:

**I Norge:**
- Varmere og vatere vaer
- Mer flom og skred
- Kortere vintre
- Isbreer som smelter (Jostedalsbreen har krympet)

**I verden:**
- Hetebølger i Europa og USA
- Torke i Afrika
- Flom i Pakistan og Bangladesh
- Branner i Australia og California

Jo lengre vi venter med a handle, jo verre blir det!`
    },
    {
      id: 'samf-7-4-1-tiltak',
      type: 'text',
      title: 'Hva kan vi gjore?',
      content: `
## Tiltak mot klimaendringer

**Pa verdensniva:**
- Parisavtalen (2015): Holde oppvarmingen under 2 grader
- Kutte utslipp av klimagasser
- Bevare skog og natur

**Pa landsniva:**
- Norge skal kutte 55% av utslippene innen 2030
- Bygge ut fornybar energi
- Elektrifisere transport
- Gronnere industri

**Pa lokalniva:**
- Sykle og ga mer
- Bedre kollektivtransport
- Spare energi

**Pa individniva:**
- Fly mindre
- Spise mindre kjott
- Spare energi hjemme
- Velge miljoovennlige produkter
      `
    },
    {
      id: 'samf-7-4-1-example',
      type: 'example',
      title: 'Ditt klimafotavtrykk',
      problem: 'Hva gir storst klimautslipp i hverdagen din?',
      solution: `**Storst utslipp:**

1. **Flyreiser**: En tur-retur Oslo-New York = ca. 2 tonn CO2
   (Like mye som a kjore bil et helt ar!)

2. **Mat**: Spesielt storfe og meieriprodukter
   (1 kg biff = 27 kg CO2)

3. **Bilkjoring**: Spesielt fossil bil
   (1 liter bensin = 2,3 kg CO2)

4. **Oppvarming**: Olje og gass
   (Varmepumpe og fjernvarme er bedre)

5. **Forbruk**: Nye klaer, elektronikk, mobler
   (Brukt og reparasjon er bedre)

**Gjennomsnittlig nordmann slipper ut ca. 8 tonn CO2 per ar**
For a na klimamalene ma dette ned til ca. 2 tonn!`
    },
    {
      id: 'samf-7-4-1-note',
      type: 'note',
      title: 'Fornybar energi',
      content: `**Fornybar energi** kommer fra kilder som ikke tar slutt:

- **Vannkraft**: Norge far 90% av strommenFra vannkraft
- **Vindkraft**: Vindmoller til havs og pa land
- **Solenergi**: Solcellepaneler
- **Bioenergi**: Energi fra planter og avfall

**Fossile energikilder** (olje, kull, gass) tar slutt og gir klimagassutslipp. Verden ma ga over til fornybar energi!`
    },
    {
      id: 'samf-7-4-1-tip',
      type: 'tip',
      title: 'Du kan gjore en forskjell!',
      content: `Sma endringer som teller:

**Transport:**
- Ga, sykle eller ta buss
- Velg tog i stedet for fly nar det er mulig

**Mat:**
- Flere gronnsaksdager
- Kast mindre mat
- Velg lokale produkter

**Energi:**
- Slukk lys og apparater
- Ta kortere dusjer
- Bruk klær lenger for du vasker

**Forbruk:**
- Tenk: Trenger jeg dette?
- Kjop brukt
- Reparer i stedet for a kaste

Hver handling teller!`
    },
    {
      id: 'samf-7-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er drivhuseffekten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige forklaringen.',
            solution: 'Gasser i atmosfaeren holder pa varmen fra sola',
            multipleChoiceOptions: [
              'Gasser i atmosfaeren holder pa varmen fra sola',
              'Sola blir varmere',
              'Jorden er et drivhus',
              'Atmosfaeren blir tynnere',
            ],
          },
        ],
        solution: 'Drivhuseffekten gjor at gasser i atmosfaeren holder pa varmen, som i et drivhus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er den viktigste klimagassen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste klimagassen.',
            solution: 'CO2 (karbondioksid)',
            multipleChoiceOptions: ['CO2 (karbondioksid)', 'Oksygen', 'Nitrogen', 'Hydrogen'],
          },
        ],
        solution: 'CO2 (karbondioksid) er den viktigste klimagassen og kommer fra forbrenning av olje, kull og gass.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en konsekvens av klimaendringer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en konsekvens.',
            solution: 'Is smelter og havet stiger',
            multipleChoiceOptions: [
              'Is smelter og havet stiger',
              'Det blir kaldere over alt',
              'Det blir mindre ekstremt vaer',
              'Alle dyr far det bedre',
            ],
          },
        ],
        solution: 'Nar jorden blir varmere, smelter is og havet stiger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over klimatiltak.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting du kan gjore for a redusere klimautslipp.',
            solution: 'Eksempler: Ga/sykle/ta buss, spise mindre kjott, fly mindre, spare energi, kjope brukt, kaste mindre mat.',
            multipleChoiceOptions: [
              'Ga eller sykle, spise mindre kjott, spare energi hjemme',
              'Fly mer, kjore mer bil, bruke mer strom',
              'Ingenting - en person kan ikke gjore noe',
              'Kjope mer nye ting',
            ],
          },
          {
            label: 'b',
            task: 'Hva er Parisavtalen?',
            solution: 'Parisavtalen er en internasjonal avtale fra 2015 der landene ble enige om a holde global oppvarming under 2 grader, helst under 1,5 grad.',
            multipleChoiceOptions: [
              'En internasjonal avtale om a begrense global oppvarming til under 2 grader',
              'En avtale om handel',
              'En lov i Norge',
              'En avtale om flytrafikk',
            ],
          },
        ],
        solution: 'Bade enkeltpersoner og land ma handle for a stoppe klimaendringene!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Fornybar energi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med fornybar energi?',
            solution: 'Energi fra kilder som ikke tar slutt, som sol, vind og vann',
            multipleChoiceOptions: [
              'Energi fra kilder som ikke tar slutt, som sol, vind og vann',
              'Energi fra olje og kull',
              'Energi som ma fornyes hvert ar',
              'Energi som er veldig dyr',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor er fornybar energi viktig for klimaet?',
            solution: 'Fornybar energi gir lite eller ingen klimagassutslipp, mens fossil energi (olje, kull, gass) er hovedarsaken til klimaendringer.',
            multipleChoiceOptions: [
              'Fordi den gir lite eller ingen klimagassutslipp',
              'Fordi den er billigere',
              'Fordi den er enklere a lage',
              'Fornybar energi er ikke viktig for klimaet',
            ],
          },
        ],
        solution: 'Overgang til fornybar energi er nokkelen til a stoppe klimaendringene!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Media og kritisk tenkning
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_7_4_2: TextbookChapter = {
  id: 'samfunnsfag-7-4-2',
  courseId: 'samfunnsfag-7',
  chapterNumber: '4.2',
  title: 'Media og kritisk tenkning',
  description: 'Laer a vurdere kilder og tenke kritisk i en digital verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere pa hvilken mate ulike kilder gir informasjon om et tema',
    'utvikle kritisk tenkning og kildekritikk'
  ],
  content: [
    {
      id: 'samf-7-4-2-intro',
      type: 'text',
      content: `
# Media og kritisk tenkning

Hver dag bombarderes vi med informasjon - fra nyheter, sosiale medier, reklame
og venner. Men hvordan vet vi hva som er sant? I en verden full av falske
nyheter og propaganda er **kritisk tenkning** viktigere enn noensinne.

Opplysningstiden larte oss a tenke selv. Na ma vi bruke den evnen pa internett!
      `
    },
    {
      id: 'samf-7-4-2-def-kildekritikk',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er a vurdere om informasjon er palitelig og sann.

Sporsmal a stille:
- **Hvem har laget dette?** (Avsender)
- **Hvorfor er det laget?** (Hensikt)
- **Nar ble det laget?** (Aktualitet)
- **Hvor kommer informasjonen fra?** (Belegg)
- **Er det andre som sier det samme?** (Bekreftelse)

KILDEKOMPASSET:
- **K**vem - Hvem star bak?
- **I**nnhold - Hva handler det om?
- **L**okalitet - Hvor kommer det fra?
- **D**atering - Nar er det laget?
- **E**nsidighet - Er det balansert?`
    },
    {
      id: 'samf-7-4-2-medietyper',
      type: 'text',
      title: 'Ulike medier',
      content: `
## Medier vi bruker

**Tradisjonelle medier:**
- Aviser (papir og nett)
- TV-nyheter
- Radio
- Bøker og tidsskrifter

**Sosiale medier:**
- TikTok, Instagram, Snapchat
- YouTube
- Facebook
- X (Twitter)

**Sokeomotorer:**
- Google, Bing
- Wikipedia

**Forskjeller:**
- Tradisjonelle medier har ofte redaktorer og journalister som sjekker fakta
- Sosiale medier lar alle dele informasjon - bade sann og usann
- Algoritmer viser deg mer av det du allerede liker (filterboble)
      `
    },
    {
      id: 'samf-7-4-2-falske',
      type: 'text',
      title: 'Falske nyheter og desinformasjon',
      content: `
## Usann informasjon

**Falske nyheter (fake news):**
- Historier som er helt oppfunnet
- Ser ofte ut som ekte nyheter
- Spres for a fa klikk eller pavirke meninger

**Desinformasjon:**
- Bevisst spredning av usann informasjon
- Ofte for a pavirke valg eller meninger
- Kan komme fra andre land eller grupper

**Misinformasjon:**
- Usann informasjon som spres uten ond hensikt
- Folk tror det er sant og deler videre

**Propaganda:**
- Ensidig informasjon for a pavirke meninger
- Bruker folelser og forenklinger
- Kan vaere fra stater, partier eller grupper

**Clickbait:**
- Overskrifter laget for a fa deg til a klikke
- Innholdet lever ofte ikke opp til overskriften
      `
    },
    {
      id: 'samf-7-4-2-warning',
      type: 'warning',
      title: 'Var obs pa dette!',
      content: `Tegn pa at noe kan vaere usant:

- **Ingen kilde oppgitt** - Hvor kommer pastandene fra?
- **Ekstreme folelser** - Provoserer sinne eller frykt
- **For godt til a vaere sant** - Det er det ofte!
- **Ukjent nettsted** - Hvem star bak?
- **Skrivefeil og rarlig format** - Uprofesjonelt
- **Ingen andre rapporterer det** - Sjekk andre kilder
- **Ber deg dele fort** - Stans og tenk!
- **Gammel dato** - Presenteres som nytt?`
    },
    {
      id: 'samf-7-4-2-verktoy',
      type: 'text',
      title: 'Verktoy for faktasjekk',
      content: `
## Slik kan du sjekke fakta

**Faktasjekk-nettsider:**
- Faktisk.no (norsk)
- Snopes.com (internasjonal)

**Bildesok:**
- Google Bildesok - er bildet brukt for?
- TinEye - finn bildets opprinnelse

**Kontroller kilden:**
- Se pa "Om oss"-siden
- Google navnet pa forfatteren
- Sjekk nar artikkelen er skrevet

**Bruk flere kilder:**
- Sjekk om seriose nyhetsmedier dekker saken
- Sammenlign det flere sier
- Se etter fageksperter

**Tenk selv:**
- Stoler jeg pa dette?
- Hvorfor blir dette delt med meg?
- Hva er hensikten?
      `
    },
    {
      id: 'samf-7-4-2-example',
      type: 'example',
      title: 'Analyse av en nyhet',
      problem: 'Hvordan vurderer du om en nyhet pa sosiale medier er palitelig?',
      solution: `**Du ser denne overskriften pa sosiale medier:**
"SJOKKERENDE: Forskere beviser at sjokolade gjor deg smartere!"

**Sjekkliste:**

1. **Kilde**: Hvem har skrevet dette?
   - Er det et kjent nyhetsmedia eller ukjent nettsted?

2. **Forskningen**: Hvor er studien publisert?
   - Er det en seriøs vitenskapelig journal?
   - Hvor mange deltakere var med?

3. **Overskriften**: Er den overblåst?
   - "SJOKKERENDE" og "beviser" er sterke ord
   - Vitenskap beviser sjelden noe 100%

4. **Andre kilder**: Dekker seriøse medier dette?
   - Sjekk NRK, VG, forskning.no

5. **Hvem tjener pa dette?**:
   - Er det sjokoladeprodusenter bak studien?

**Konklusjon**: Vaer skeptisk! Undersok mer for du tror pa det.`
    },
    {
      id: 'samf-7-4-2-note',
      type: 'note',
      title: 'Ekkokammer og filterbobler',
      content: `**Filterboble:**
Algoritmer pa sosiale medier viser deg mer av det du allerede liker. Du ser mindre av meninger du er uenig i.

**Ekkokammer:**
Nar du bare horer synspunkter som bekrefter det du allerede tror. Dine meninger "ekko-er" tilbake.

**Problemet:**
- Du tror alle tenker som deg
- Du blir ikke utfordret
- Samfunnet kan bli mer polarisert

**Losningen:**
- Følg ulike kilder bevisst
- Snakk med folk som mener andre ting
- Vaer apen for a endre mening`
    },
    {
      id: 'samf-7-4-2-tip',
      type: 'tip',
      title: 'Gode medievaner',
      content: `Slik blir du en kritisk mediebruker:

**For du deler:**
- STOPP - Er dette sant?
- TENK - Hvorfor deles dette med meg?
- SJEKK - Finn en til kilde

**Daglige vaner:**
- Les nyheter fra flere kilder
- Spor: Hvem vil jeg skal tro dette?
- Vaer ekstra skeptisk til det som provoserer sterke folelser

**Pa sosiale medier:**
- Ikke tro alt du ser
- Sjekk profiler - er de ekte?
- Husk at bilder kan vaere manipulert

**Vaer ydmyk:**
- Alle kan bli lurt
- Det er OK a endre mening
- Innrom nar du tar feil`
    },
    {
      id: 'samf-7-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er kildekritikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen.',
            solution: 'A vurdere om informasjon er palitelig og sann',
            multipleChoiceOptions: [
              'A vurdere om informasjon er palitelig og sann',
              'A alltid tro pa det man leser',
              'A bare lese aviser',
              'A kritisere alle kilder',
            ],
          },
        ],
        solution: 'Kildekritikk handler om a vurdere om informasjon er til a stole pa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen pa desinformasjon og misinformasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Desinformasjon er bevisst usant, misinformasjon er usant spredt uten ond hensikt',
            multipleChoiceOptions: [
              'Desinformasjon er bevisst usant, misinformasjon er usant spredt uten ond hensikt',
              'Det er ingen forskjell',
              'Misinformasjon er alltid verre',
              'Desinformasjon er alltid fra medier',
            ],
          },
        ],
        solution: 'Desinformasjon er bevisst loyn, mens misinformasjon er usant uten at avsenderen vet det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er et ekkokammer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige forklaringen.',
            solution: 'Nar du bare horer synspunkter som bekrefter det du allerede tror',
            multipleChoiceOptions: [
              'Nar du bare horer synspunkter som bekrefter det du allerede tror',
              'Et rom med mye ekko',
              'En type sosiale medier',
              'En faktasjekk-nettside',
            ],
          },
        ],
        solution: 'Ekkokammer betyr at du bare horer meninger du allerede er enig i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Praktisk kildekritikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Du ser en sjokkerende nyhet pa sosiale medier. Hva bor du gjore FOR du deler den?',
            solution: 'Sjekke hvem som har skrevet det, se om andre seriose medier dekker saken, vurdere om det virker for godt/darlig til a vaere sant.',
            multipleChoiceOptions: [
              'Sjekke kilden, se etter andre kilder, vurdere om det er for godt til a vaere sant',
              'Dele med en gang sa flest mulig far vite det',
              'Ignorere det helt',
              'Bare tro pa det hvis det er pa sosiale medier',
            ],
          },
          {
            label: 'b',
            task: 'Nevn to tegn pa at noe kan vaere falske nyheter.',
            solution: 'Ekstreme overskrifter, ingen kilde oppgitt, skrivefeil og uprofesjonelt utseende, ber deg dele fort, provoserer sterke folelser.',
            multipleChoiceOptions: [
              'Ekstreme overskrifter og ingen kilde oppgitt',
              'Rolig sprak og mange kilder',
              'Korte artikler',
              'Mange bilder',
            ],
          },
        ],
        solution: 'Kritisk tenkning beskytter deg mot a bli lurt!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-7-4-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'samf-7-4-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er kritisk tenkning viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig a tenke kritisk i dagens samfunn?',
            solution: 'Fordi vi bombarderes med informasjon og ma kunne skille sant fra usant. Falske nyheter kan pavirke valg og meninger. Kritisk tenkning beskytter demokratiet.',
            multipleChoiceOptions: [
              'For a skille sant fra usant, beskytte seg mot manipulasjon og ta gode valg',
              'Det er ikke viktig',
              'Fordi det star i laereplanen',
              'For a vinne diskusjoner',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan kan du unnga a havne i en filterboble?',
            solution: 'Folge ulike nyhetskilder, snakke med folk som mener andre ting, vaere apen for nye synspunkter, aktivt soke etter andre perspektiver.',
            multipleChoiceOptions: [
              'Folge ulike kilder, snakke med folk med andre meninger, vaere apen for nye synspunkter',
              'Bare lese det algoritmene viser deg',
              'Aldri bruke sosiale medier',
              'Bare folge venner',
            ],
          },
        ],
        solution: 'Kritisk tenkning er nokkelen til a navigere i informasjonssamfunnet!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFUNNSFAG_7_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Opplysning og industri
  CHAPTER_SAMFUNNSFAG_7_1_1,
  CHAPTER_SAMFUNNSFAG_7_1_2,
  // Kapittel 2: Norges selvstendighet
  CHAPTER_SAMFUNNSFAG_7_2_1,
  CHAPTER_SAMFUNNSFAG_7_2_2,
  // Kapittel 3: Globalisering og ulikhet
  CHAPTER_SAMFUNNSFAG_7_3_1,
  CHAPTER_SAMFUNNSFAG_7_3_2,
  // Kapittel 4: Klima og media
  CHAPTER_SAMFUNNSFAG_7_4_1,
  CHAPTER_SAMFUNNSFAG_7_4_2,
];
