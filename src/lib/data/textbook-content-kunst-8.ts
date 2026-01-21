/**
 * Kunst og håndverk 8. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 8. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Design og form
// ============================================================================

export const CHAPTER_KUNST_8_1_1: TextbookChapter = {
  id: 'kunst-8-1-1',
  courseId: 'kunst-8',
  chapterNumber: '1.1',
  title: 'Designprosessen',
  description: 'Lær om designprosessen fra idé til ferdig produkt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og presentere en designprosess fra idé til ferdig produkt',
  ],
  content: [
    {
      id: 'kunst-8-1-1-intro',
      type: 'text',
      content: `Design handler om å løse problemer og skape produkter som fungerer godt og ser bra ut. En designprosess er en systematisk måte å jobbe på, fra den første ideen til det ferdige produktet. Ved å følge en strukturert prosess kan du utvikle bedre løsninger og unngå vanlige feil.`,
    },
    {
      id: 'kunst-8-1-1-def-1',
      type: 'definition',
      title: 'Design',
      content: `Design er planlegging og utforming av produkter, tjenester eller systemer. God design kombinerer funksjon, estetikk og brukervennlighet.`,
    },
    {
      id: 'kunst-8-1-1-text-2',
      type: 'text',
      content: `**Designprosessens faser**

1. **Problemdefinisjon**: Hva skal løses? Hvem er brukeren?
2. **Research**: Undersøk lignende løsninger og brukerens behov
3. **Idéutvikling**: Brainstorming og skissering av mange ideer
4. **Utvelgelse**: Velg de beste ideene å jobbe videre med
5. **Prototyping**: Lag enkle modeller for å teste ideene
6. **Testing**: Prøv ut prototypen og få tilbakemeldinger
7. **Forbedring**: Gjør endringer basert på tilbakemeldinger
8. **Ferdigstilling**: Fullfør produktet`,
    },
    {
      id: 'kunst-8-1-1-tip-1',
      type: 'tip',
      title: 'Designdagbok',
      content: `Før en designdagbok gjennom hele prosessen. Dokumenter ideer, skisser, valg og refleksjoner. Dette hjelper deg å huske hvorfor du tok bestemte valg.`,
    },
    {
      id: 'kunst-8-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Design av skolesekk',
      content: `La oss følge designprosessen for å lage en bedre skolesekk:

1. **Problem**: Mange sekker er tunge og upraktiske
2. **Research**: Spør elever om hva de ønsker seg
3. **Ideer**: Skiss ulike løsninger med flere lommer, ryggsupport osv.
4. **Utvelgelse**: Velg de tre beste ideene
5. **Prototype**: Lag en pappmodell i liten skala
6. **Test**: La elever prøve modellen
7. **Forbedring**: Juster basert på tilbakemeldinger
8. **Ferdig**: Lag en detaljert tegning av den endelige sekken`,
    },
    {
      id: 'kunst-8-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er det første steget i designprosessen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Problemdefinisjon',
            multipleChoiceOptions: ['Problemdefinisjon', 'Lage prototyper', 'Ferdigstilling', 'Testing'],
          },
        ],
        solution: 'Problemdefinisjon er det første steget. Man må vite hva problemet er før man kan løse det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er testing viktig i designprosessen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å få tilbakemeldinger og forbedre produktet',
            multipleChoiceOptions: ['For å få tilbakemeldinger og forbedre produktet', 'For å spare tid', 'For å gjøre produktet dyrere', 'For å kopiere andres ideer'],
          },
        ],
        solution: 'Testing gir verdifull tilbakemelding fra brukere, slik at du kan forbedre produktet før det ferdigstilles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en prototype?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En enkel modell for å teste en idé',
            multipleChoiceOptions: ['En enkel modell for å teste en idé', 'Det ferdige produktet', 'En tegning av problemet', 'En liste med ideer'],
          },
        ],
        solution: 'En prototype er en enkel modell som brukes til å teste og visualisere en idé før man lager det endelige produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner god design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kombinasjon av funksjon, estetikk og brukervennlighet',
            multipleChoiceOptions: ['Kombinasjon av funksjon, estetikk og brukervennlighet', 'Bare utseende', 'Bare funksjon', 'At det er dyrt å lage'],
          },
        ],
        solution: 'God design balanserer funksjonalitet (virker det?), estetikk (ser det bra ut?) og brukervennlighet (er det enkelt å bruke?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_8_1_2: TextbookChapter = {
  id: 'kunst-8-1-2',
  courseId: 'kunst-8',
  chapterNumber: '1.2',
  title: 'Form og farge',
  description: 'Lær om grunnleggende formspråk, fargelære og komposisjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike materialer, teknikker og verktøy',
    'eksperimentere med form, farge og komposisjon',
  ],
  content: [
    {
      id: 'kunst-8-1-2-intro',
      type: 'text',
      content: `Form og farge er de mest grunnleggende elementene i visuell kunst og design. Ved å forstå hvordan former og farger virker sammen, kan du skape mer effektive og estetiske uttrykk.`,
    },
    {
      id: 'kunst-8-1-2-def-1',
      type: 'definition',
      title: 'Grunnformer',
      content: `De geometriske grunnformene er sirkel, kvadrat og trekant. Alle andre former kan bygges opp av kombinasjoner av disse.`,
    },
    {
      id: 'kunst-8-1-2-text-2',
      type: 'text',
      content: `**Fargesirkelen**

Fargesirkelen er et verktøy for å forstå hvordan farger henger sammen:

- **Primærfarger**: Rød, gul og blå. Kan ikke blandes fra andre farger.
- **Sekundærfarger**: Oransje, grønn og fiolett. Blandes av to primærfarger.
- **Tertiærfarger**: Blandes av en primær- og en sekundærfarge.

**Fargekontraster**:
- Komplementærfarger ligger overfor hverandre i fargesirkelen (f.eks. rød-grønn)
- Analoge farger ligger ved siden av hverandre (f.eks. rød-oransje-gul)`,
    },
    {
      id: 'kunst-8-1-2-def-2',
      type: 'definition',
      title: 'Komposisjon',
      content: `Komposisjon er måten elementer er plassert og organisert i et bilde eller design. En god komposisjon leder blikket og skaper harmoni.`,
    },
    {
      id: 'kunst-8-1-2-tip-1',
      type: 'tip',
      title: 'Tredelerregelen',
      content: `Del bildet i tre like deler horisontalt og vertikalt. Plasser viktige elementer langs linjene eller i skjæringspunktene for å skape dynamiske komposisjoner.`,
    },
    {
      id: 'kunst-8-1-2-text-3',
      type: 'text',
      content: `**Fargens psykologi**

Farger kan påvirke følelser og stemning:
- **Rød**: Energi, lidenskap, fare
- **Blå**: Ro, tillit, profesjonalitet
- **Grønn**: Natur, vekst, harmoni
- **Gul**: Glede, optimisme, varme
- **Sort**: Eleganse, mystikk, kraft
- **Hvit**: Renhet, enkelhet, fred`,
    },
    {
      id: 'kunst-8-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke er de tre primærfargene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Rød, gul og blå',
            multipleChoiceOptions: ['Rød, gul og blå', 'Rød, grønn og blå', 'Oransje, grønn og fiolett', 'Sort, hvit og grå'],
          },
        ],
        solution: 'I kunst er primærfargene rød, gul og blå. Disse kan ikke blandes fra andre farger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er komplementærfarger?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Farger som ligger overfor hverandre i fargesirkelen',
            multipleChoiceOptions: ['Farger som ligger overfor hverandre i fargesirkelen', 'Farger som ligger ved siden av hverandre i fargesirkelen', 'Farger som er like lyse', 'Alle primærfargene'],
          },
        ],
        solution: 'Komplementærfarger ligger overfor hverandre i fargesirkelen, for eksempel rød og grønn, eller blå og oransje. De skaper sterk kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken farge får du ved å blande rød og gul?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Oransje',
            multipleChoiceOptions: ['Oransje', 'Grønn', 'Fiolett', 'Brun'],
          },
        ],
        solution: 'Ved å blande de to primærfargene rød og gul, får du sekundærfargen oransje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er tredelerregelen i komposisjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At bildet deles i tre og elementer plasseres langs linjene',
            multipleChoiceOptions: ['At bildet deles i tre og elementer plasseres langs linjene', 'At man bare skal bruke tre farger', 'At man bruker tre grunnformer', 'At man lager tre versjoner av bildet'],
          },
        ],
        solution: 'Tredelerregelen sier at man deler bildet i tre deler både horisontalt og vertikalt, og plasserer viktige elementer langs disse linjene eller i skjæringspunktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Kunsthistorie
// ============================================================================

export const CHAPTER_KUNST_8_2_1: TextbookChapter = {
  id: 'kunst-8-2-1',
  courseId: 'kunst-8',
  chapterNumber: '2.1',
  title: 'Kunsthistorie - Fra antikken til renessansen',
  description: 'Lær om kunsthistorien fra antikken til renessansen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over kunst og design fra ulike kulturer og historiske perioder',
  ],
  content: [
    {
      id: 'kunst-8-2-1-intro',
      type: 'text',
      content: `Kunsthistorien forteller historien om menneskelig kreativitet gjennom tidene. Ved å studere kunst fra fortiden kan vi forstå hvordan mennesker har levd, tenkt og uttrykt seg.`,
    },
    {
      id: 'kunst-8-2-1-text-1',
      type: 'text',
      content: `**Antikken (ca. 800 f.Kr. - 500 e.Kr.)**

Antikkens kunst fra Hellas og Roma satte standarden for vestlig kunst i årtusener:

- **Skulptur**: Realistiske fremstillinger av den menneskelige kroppen
- **Arkitektur**: Søyler, templer og monumenter (Parthenon, Colosseum)
- **Mosaikkkunst**: Dekorative bilder laget av små steinbiter
- **Ideal**: Balanse, harmoni og proporsjoner`,
    },
    {
      id: 'kunst-8-2-1-def-1',
      type: 'definition',
      title: 'Middelalderen',
      content: `Perioden fra ca. 500 til 1500 e.Kr. Kunsten var sterkt preget av kristendommen, med fokus på religiøse motiver og symbolikk.`,
    },
    {
      id: 'kunst-8-2-1-text-2',
      type: 'text',
      content: `**Middelalderen (ca. 500 - 1500)**

- **Kirkekunst**: Altermalerier, ikoner og skulpturer
- **Gotisk arkitektur**: Spisse buer, glassmalerier, katedraler
- **Bokilluminasjon**: Håndmalte dekorasjoner i bøker
- **Symbolikk**: Farger og motiver hadde religiøs betydning`,
    },
    {
      id: 'kunst-8-2-1-def-2',
      type: 'definition',
      title: 'Renessansen',
      content: `"Gjenfødelse" - perioden ca. 1400-1600 da kunsten gjenoppdaget antikkens idealer. Italia var sentrum for denne utviklingen.`,
    },
    {
      id: 'kunst-8-2-1-text-3',
      type: 'text',
      content: `**Renessansen (ca. 1400 - 1600)**

Renessansen markerte en revolusjon i kunsten:

- **Perspektiv**: Kunstnere lærte å skape dybde i flate bilder
- **Anatomi**: Grundig studie av menneskekroppen
- **Realisme**: Mer naturtro fremstillinger
- **Store kunstnere**: Leonardo da Vinci, Michelangelo, Rafael

Leonardo da Vinci malte "Mona Lisa" og "Nattverden". Michelangelo malte taket i Det sixtinske kapell og skapte skulpturen "David".`,
    },
    {
      id: 'kunst-8-2-1-example-1',
      type: 'example',
      title: 'Perspektiv i renessansen',
      content: `Før renessansen ble viktige personer malt større enn andre, uavhengig av avstand. Renessansekunstnere utviklet sentralperspektivet: alle linjer som går innover i bildet møtes i ett punkt (forsvinningspunktet), og ting blir mindre jo lenger bort de er.`,
    },
    {
      id: 'kunst-8-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr ordet "renessanse"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gjenfødelse',
            multipleChoiceOptions: ['Gjenfødelse', 'Mørke tider', 'Moderne kunst', 'Religiøs kunst'],
          },
        ],
        solution: 'Renessanse betyr "gjenfødelse" på fransk. Det refererer til gjenoppdagelsen av antikkens kunstidealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket land var sentrum for renessansen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Italia',
            multipleChoiceOptions: ['Italia', 'Frankrike', 'England', 'Spania'],
          },
        ],
        solution: 'Italia, spesielt byer som Firenze, Roma og Venezia, var sentrum for renessansen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem malte taket i Det sixtinske kapell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Michelangelo',
            multipleChoiceOptions: ['Michelangelo', 'Leonardo da Vinci', 'Rafael', 'Botticelli'],
          },
        ],
        solution: 'Michelangelo malte taket i Det sixtinske kapell mellom 1508 og 1512. Det tok fire år å fullføre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var en viktig kunstnerisk oppdagelse i renessansen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Sentralperspektivet',
            multipleChoiceOptions: ['Sentralperspektivet', 'Fotografering', 'Abstrakt kunst', 'Trykkpresse for bilder'],
          },
        ],
        solution: 'Sentralperspektivet var en revolusjonerende oppdagelse som gjorde det mulig å skape illusjon av dybde på en flat overflate.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_8_2_2: TextbookChapter = {
  id: 'kunst-8-2-2',
  courseId: 'kunst-8',
  chapterNumber: '2.2',
  title: 'Moderne kunst',
  description: 'Lær om kunstretninger fra 1800-tallet til i dag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over kunst og design fra ulike kulturer og historiske perioder',
  ],
  content: [
    {
      id: 'kunst-8-2-2-intro',
      type: 'text',
      content: `Moderne kunst begynte på 1800-tallet da kunstnere begynte å eksperimentere med nye måter å uttrykke seg på. De brøt med tradisjonelle regler og skapte helt nye kunstretninger.`,
    },
    {
      id: 'kunst-8-2-2-def-1',
      type: 'definition',
      title: 'Impresjonisme',
      content: `Kunstretning fra 1860-1880-tallet som fokuserte på lys, farger og øyeblikkets stemning fremfor detaljert realisme. Kjente impresjonister: Monet, Renoir, Degas.`,
    },
    {
      id: 'kunst-8-2-2-text-1',
      type: 'text',
      content: `**Impresjonisme (ca. 1860-1880)**

Impresjonistene revolusjonerte kunsten ved å:
- Male utendørs (en plein air)
- Fokusere på lys og atmosfære
- Bruke raske, løse penselstrøk
- Fange øyeblikket fremfor å lage perfekte bilder

Claude Monet er kjent for sine nøkkeroser og katedralmalerier som viser samme motiv i ulikt lys.`,
    },
    {
      id: 'kunst-8-2-2-def-2',
      type: 'definition',
      title: 'Ekspresjonisme',
      content: `Kunstretning fra tidlig 1900-tall som uttrykte sterke følelser gjennom forvrengte former, intense farger og dramatiske motiver. Edvard Munchs "Skrik" er et kjent eksempel.`,
    },
    {
      id: 'kunst-8-2-2-text-2',
      type: 'text',
      content: `**Ekspresjonisme (ca. 1900-1920)**

Ekspresjonistene ville uttrykke indre følelser, ikke bare avbilde virkeligheten:
- Intense, unaturlige farger
- Forvrengte former
- Sterke følelser: angst, ensomhet, lidenskap

Edvard Munch (1863-1944) er Norges mest kjente kunstner. "Skrik" (1893) er et av verdens mest gjenkjennelige malerier.`,
    },
    {
      id: 'kunst-8-2-2-text-3',
      type: 'text',
      content: `**Abstrakt kunst (ca. 1910-)**

Abstrakt kunst gjengir ikke virkeligheten direkte:
- Geometriske former (Mondrian, Malevitsj)
- Frie former og farger (Kandinsky)
- Fokus på linjer, former, farger og tekstur

**Pop-art (ca. 1950-1970)**

Pop-art hentet motiver fra populærkulturen:
- Reklame, tegneserier, kjendiser
- Massekultur som kunstmotiv
- Andy Warhol: Campbell's suppebokser, Marilyn Monroe`,
    },
    {
      id: 'kunst-8-2-2-note-1',
      type: 'note',
      title: 'Samtidskunst',
      content: `I dag eksperimenterer kunstnere med alle mulige medier: installasjoner, video, digital kunst, performance og mye mer. Grensene mellom kunstformer viskes ut.`,
    },
    {
      id: 'kunst-8-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken norsk kunstner malte "Skrik"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Edvard Munch',
            multipleChoiceOptions: ['Edvard Munch', 'Gustav Vigeland', 'Odd Nerdrum', 'Harriet Backer'],
          },
        ],
        solution: 'Edvard Munch malte "Skrik" i 1893. Det er blitt et symbol på angst og eksistensiell uro.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner impresjonismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fokus på lys og raske penselstrøk',
            multipleChoiceOptions: ['Fokus på lys og raske penselstrøk', 'Mørke farger og religiøse motiver', 'Geometriske former', 'Motiver fra reklame'],
          },
        ],
        solution: 'Impresjonistene fokuserte på lys og atmosfære, og brukte raske penselstrøk for å fange øyeblikket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken kunstretning hentet motiver fra populærkulturen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Pop-art',
            multipleChoiceOptions: ['Pop-art', 'Renessansen', 'Impresjonismen', 'Ekspresjonismen'],
          },
        ],
        solution: 'Pop-art brukte bilder fra reklame, tegneserier og kjendiskultur. Andy Warhol er den mest kjente pop-kunstneren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner abstrakt kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Den gjengir ikke virkeligheten direkte, men bruker former og farger',
            multipleChoiceOptions: ['Den gjengir ikke virkeligheten direkte, men bruker former og farger', 'Den gjengir virkeligheten så nøyaktig som mulig', 'Den bruker bare sort-hvitt', 'Den viser bare landskap'],
          },
        ],
        solution: 'Abstrakt kunst gjengir ikke virkeligheten direkte. Den fokuserer på linjer, former, farger og komposisjon i seg selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Materialer og teknikker
// ============================================================================

export const CHAPTER_KUNST_8_3_1: TextbookChapter = {
  id: 'kunst-8-3-1',
  courseId: 'kunst-8',
  chapterNumber: '3.1',
  title: 'Tegning og maling',
  description: 'Lær grunnleggende teknikker for tegning og maling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike materialer, teknikker og verktøy',
  ],
  content: [
    {
      id: 'kunst-8-3-1-intro',
      type: 'text',
      content: `Tegning og maling er de mest grunnleggende kunstformene. Ved å mestre basisteknikker kan du uttrykke deg kreativt og utvikle din egen stil.`,
    },
    {
      id: 'kunst-8-3-1-text-1',
      type: 'text',
      content: `**Tegneredskaper**

- **Blyant**: Finnes i ulike hardhetsgrader (H = hard, B = myk)
- **Kull**: Gir myke, dramatiske tegninger
- **Tusj**: Skaper skarpe, definerte linjer
- **Fargeblyanter**: Kombinerer tegning og farge

**Skravering**: Teknikk for å skape valør (lys/skygge) med parallelle linjer. Jo tettere linjer, jo mørkere.`,
    },
    {
      id: 'kunst-8-3-1-def-1',
      type: 'definition',
      title: 'Valør',
      content: `Valør beskriver lysheten eller mørkheten i en farge eller tone. En tegning med god valørbruk har variert lys og skygge som skaper dybde.`,
    },
    {
      id: 'kunst-8-3-1-text-2',
      type: 'text',
      content: `**Malingsteknikker**

**Akrylmaling**:
- Vannbasert, tørker raskt
- Kan tynnes med vann eller males tykt
- Allsidig og lett å arbeide med

**Akvarellmaling**:
- Gjennomsiktig, vannbasert
- Man maler fra lyst til mørkt
- Lar papiret skinne gjennom

**Oljemaling**:
- Tørker sakte (dager/uker)
- Kan blandes på lerretet
- Gir rike, dype farger`,
    },
    {
      id: 'kunst-8-3-1-tip-1',
      type: 'tip',
      title: 'Blandingstips',
      content: `Start alltid med den lyseste fargen når du blander, og tilsett små mengder av den mørkere. Det er lettere å gjøre en farge mørkere enn lysere.`,
    },
    {
      id: 'kunst-8-3-1-text-3',
      type: 'text',
      content: `**Grunnleggende tegnetips**

1. **Observer**: Se nøye på det du skal tegne før du begynner
2. **Skisser lett**: Start med lette streker du kan visker bort
3. **Bygg opp**: Gå fra enkle former til detaljer
4. **Øv regelmessig**: Tegning er en ferdighet som må trenes`,
    },
    {
      id: 'kunst-8-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr det at en blyant er merket med B?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Den er myk',
            multipleChoiceOptions: ['Den er myk', 'Den er hard', 'Den er blå', 'Den er billig'],
          },
        ],
        solution: 'B står for "black" og indikerer en myk blyant som gir mørkere streker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er skravering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En teknikk for å skape valør med parallelle linjer',
            multipleChoiceOptions: ['En teknikk for å skape valør med parallelle linjer', 'En type maling', 'En type papir', 'En fargeblanding'],
          },
        ],
        solution: 'Skravering er en teknikk der parallelle linjer brukes til å skape valør (lys og skygge). Jo tettere linjene er, jo mørkere blir området.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner akvarellmaling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Den er gjennomsiktig og vannbasert',
            multipleChoiceOptions: ['Den er gjennomsiktig og vannbasert', 'Den er tykkflytende og tørker sakte', 'Den kan ikke blandes med vann', 'Den brukes bare på lerret'],
          },
        ],
        solution: 'Akvarellmaling er gjennomsiktig og vannbasert. Man jobber fra lyst til mørkt og lar papiret skinne gjennom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør man starte med den lyseste fargen når man blander?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi det er lettere å gjøre en farge mørkere enn lysere',
            multipleChoiceOptions: ['Fordi det er lettere å gjøre en farge mørkere enn lysere', 'Fordi det er billigere', 'Fordi mørke farger ikke kan blandes', 'Fordi lyse farger tørker først'],
          },
        ],
        solution: 'Det er mye lettere å mørkne en lys farge ved å tilsette litt mørk, enn å gjøre en mørk farge lysere. Derfor starter man med den lyseste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_8_3_2: TextbookChapter = {
  id: 'kunst-8-3-2',
  courseId: 'kunst-8',
  chapterNumber: '3.2',
  title: 'Tredimensjonal form',
  description: 'Lær om skulptur, keramikk og andre tredimensjonale teknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike materialer, teknikker og verktøy',
    'eksperimentere med form, farge og komposisjon',
  ],
  content: [
    {
      id: 'kunst-8-3-2-intro',
      type: 'text',
      content: `Tredimensjonal kunst har høyde, bredde og dybde. Den kan oppleves fra alle sider og tar opp fysisk plass i rommet. Skulptur, keramikk og installasjoner er eksempler på 3D-kunst.`,
    },
    {
      id: 'kunst-8-3-2-def-1',
      type: 'definition',
      title: 'Skulptur',
      content: `Skulptur er tredimensjonal kunst som er laget ved å forme, hugge, støpe eller sette sammen materialer.`,
    },
    {
      id: 'kunst-8-3-2-text-1',
      type: 'text',
      content: `**Skulpturteknikker**

- **Modellering**: Bygge opp form med mykt materiale (leire, plastilin)
- **Hugning**: Fjerne materiale fra en blokk (stein, tre)
- **Støping**: Helle flytende materiale i en form (gips, bronse)
- **Assemblage**: Sette sammen ferdige gjenstander`,
    },
    {
      id: 'kunst-8-3-2-text-2',
      type: 'text',
      content: `**Keramikk**

Keramikk er kunst og bruksgjenstander laget av brent leire:

1. **Forming**: Leiren kan håndformes, dreies på dreieskive eller presses i form
2. **Tørking**: Leiren må tørke før brenning
3. **Første brenning (rå-brenning)**: Ca. 900-1000°C
4. **Glasering**: Påføre glasur for farge og overflate
5. **Andre brenning (glasur-brenning)**: Ca. 1000-1300°C`,
    },
    {
      id: 'kunst-8-3-2-tip-1',
      type: 'tip',
      title: 'Arbeid med leire',
      content: `Unngå luftbobler i leiren - de kan føre til at arbeidet sprekker i ovnen. Kna leiren godt og slå ut luftbobler før du begynner å forme.`,
    },
    {
      id: 'kunst-8-3-2-text-3',
      type: 'text',
      content: `**Andre 3D-materialer**

- **Papp og papir**: Lett å forme, kan lakkeres
- **Gips**: Kan støpes i former eller modelleres
- **Tre**: Kan skjæres, sages og limes
- **Metall**: Wire, blikk, resirkulerte materialer
- **Tekstil**: Kan sys, strikkes eller filtes til 3D-objekter`,
    },
    {
      id: 'kunst-8-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom modellering og hugning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Modellering bygger opp, hugning fjerner materiale',
            multipleChoiceOptions: ['Modellering bygger opp, hugning fjerner materiale', 'Modellering bruker kun tre', 'Det er ingen forskjell', 'Hugning bruker kun leire'],
          },
        ],
        solution: 'I modellering bygger man opp en form med mykt materiale (som leire), mens i hugning fjerner man materiale fra en fast blokk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor må leire brennes?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å gjøre den permanent hard og holdbar',
            multipleChoiceOptions: ['For å gjøre den permanent hard og holdbar', 'For å gjøre den mykere', 'For å få den til å flyte', 'For å gjøre den lettere'],
          },
        ],
        solution: 'Brenning gjør leiren permanent hard og vanntett. Uten brenning vil tørket leire smuldres opp og løses opp i vann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er glasur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et belegg som gir farge og overflate til keramikk',
            multipleChoiceOptions: ['Et belegg som gir farge og overflate til keramikk', 'En type leire', 'Et verktøy for forming', 'En type ovn'],
          },
        ],
        solution: 'Glasur er et belegg som påføres keramikk mellom brenninger. Det gir farge, mønster og en glatt, vanntett overflate.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er assemblage?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å sette sammen ferdige gjenstander til skulptur',
            multipleChoiceOptions: ['Å sette sammen ferdige gjenstander til skulptur', 'Å hugge i stein', 'Å støpe i gips', 'Å forme leire på dreieskive'],
          },
        ],
        solution: 'Assemblage er en teknikk der ferdige objekter settes sammen til en ny skulptur. Det er vanlig i moderne kunst og resirkuleringskunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Visuell kommunikasjon
// ============================================================================

export const CHAPTER_KUNST_8_4_1: TextbookChapter = {
  id: 'kunst-8-4-1',
  courseId: 'kunst-8',
  chapterNumber: '4.1',
  title: 'Grafisk design',
  description: 'Lær om typografi, layout og visuell kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'visualisere ideer og presentere prosesser og løsninger på en hensiktsmessig måte',
  ],
  content: [
    {
      id: 'kunst-8-4-1-intro',
      type: 'text',
      content: `Grafisk design handler om å kommunisere visuelt. Gjennom layout, typografi, farger og bilder formidler designere informasjon og følelser til et publikum.`,
    },
    {
      id: 'kunst-8-4-1-def-1',
      type: 'definition',
      title: 'Typografi',
      content: `Typografi er kunsten å arrangere skrift for å gjøre tekst lesbar og visuelt appellerende. Det inkluderer valg av font, størrelse, linjeavstand og tekstplassering.`,
    },
    {
      id: 'kunst-8-4-1-text-1',
      type: 'text',
      content: `**Fonttyper**

- **Serif**: Fonter med "føtter" på bokstavene (Times New Roman, Georgia)
- **Sans-serif**: Uten "føtter", renere linjer (Arial, Helvetica)
- **Script**: Ligner håndskrift, elegant
- **Display**: Dekorative fonter for overskrifter

Generelt brukes serif for lange tekster (enklere å lese) og sans-serif for skjerm og overskrifter.`,
    },
    {
      id: 'kunst-8-4-1-text-2',
      type: 'text',
      content: `**Layout-prinsipper**

1. **Hierarki**: Det viktigste skal synes best (størrelse, plassering, farge)
2. **Balanse**: Elementene skal føles jevnt fordelt
3. **Kontrast**: Forskjeller som skaper interesse og lesbarhet
4. **Repetisjon**: Gjenta elementer for helhet og gjenkjennelse
5. **Luft**: Tomrom gir pusterom og fokus`,
    },
    {
      id: 'kunst-8-4-1-tip-1',
      type: 'tip',
      title: 'Fontkombinering',
      content: `Bruk maksimalt 2-3 fonter i ett design. Kombiner gjerne en serif og en sans-serif for kontrast. For mange fonter gjør designet rotete.`,
    },
    {
      id: 'kunst-8-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Plakat',
      content: `En effektiv plakat følger disse prinsippene:
1. **Overskrift** stor og iøynefallende (display-font)
2. **Bilde** som fanger oppmerksomhet
3. **Informasjon** lesbar og organisert (sans-serif)
4. **Call-to-action** hva skal folk gjøre?
5. **Logo/avsender** nederst for troverdighet`,
    },
    {
      id: 'kunst-8-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er typografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunsten å arrangere skrift',
            multipleChoiceOptions: ['Kunsten å arrangere skrift', 'Fotografering', 'Tegning av landskap', 'Skulptur'],
          },
        ],
        solution: 'Typografi handler om hvordan tekst presenteres visuelt - valg av font, størrelse, linjeavstand og plassering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom serif og sans-serif fonter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Serif har "føtter" på bokstavene, sans-serif har ikke',
            multipleChoiceOptions: ['Serif har "føtter" på bokstavene, sans-serif har ikke', 'Serif er større enn sans-serif', 'Sans-serif kan bare brukes digitalt', 'Det er ingen forskjell'],
          },
        ],
        solution: 'Serif-fonter har små streker ("føtter") på endene av bokstavene, mens sans-serif (uten serif) har renere, enklere linjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med visuelt hierarki?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At det viktigste synes best',
            multipleChoiceOptions: ['At det viktigste synes best', 'At man bruker mange farger', 'At alt er like stort', 'At man bare bruker tekst'],
          },
        ],
        solution: 'Visuelt hierarki betyr at de viktigste elementene er mest fremtredende - gjennom størrelse, plassering, farge eller kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er "luft" (whitespace) viktig i design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å gi pusterom og skape fokus',
            multipleChoiceOptions: ['For å gi pusterom og skape fokus', 'For å spare blekk', 'For å fylle ut plassen', 'Det er ikke viktig'],
          },
        ],
        solution: 'Whitespace (luft) gir elementene rom å puste, gjør designet lettere å lese, og hjelper viktige elementer å skille seg ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_8_4_2: TextbookChapter = {
  id: 'kunst-8-4-2',
  courseId: 'kunst-8',
  chapterNumber: '4.2',
  title: 'Fotografi og bildebehandling',
  description: 'Lær grunnleggende om fotografering og digital bildebehandling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å visualisere ideer',
  ],
  content: [
    {
      id: 'kunst-8-4-2-intro',
      type: 'text',
      content: `Fotografi er en kunstform som fanger øyeblikk og forteller historier gjennom bilder. Med digitale verktøy kan vi også redigere og forbedre bildene våre.`,
    },
    {
      id: 'kunst-8-4-2-text-1',
      type: 'text',
      content: `**Grunnleggende fotobegreper**

- **Eksponering**: Hvor mye lys som treffer sensoren
- **Blenderåpning**: Hvor stor åpningen i linsen er (f-tall)
- **Lukkertid**: Hvor lenge sensoren er eksponert for lys
- **ISO**: Sensorens lysfølsomhet
- **Fokus**: Hva som er skarpt i bildet`,
    },
    {
      id: 'kunst-8-4-2-def-1',
      type: 'definition',
      title: 'Komposisjon i fotografi',
      content: `Komposisjon handler om hvordan elementer er plassert i bildet. God komposisjon leder blikket og skaper interesse.`,
    },
    {
      id: 'kunst-8-4-2-text-2',
      type: 'text',
      content: `**Komposisjonstips**

1. **Tredelerregelen**: Plasser hovedmotivet i skjæringspunktene
2. **Ledende linjer**: Bruk linjer som leder blikket inn i bildet
3. **Rammer**: Naturlige rammer (dører, grener) rundt motivet
4. **Fylling av rammen**: Kom nærmere motivet
5. **Perspektiv**: Prøv uvanlige vinkler`,
    },
    {
      id: 'kunst-8-4-2-text-3',
      type: 'text',
      content: `**Digital bildebehandling**

Vanlige redigeringer:
- **Beskjæring**: Fjerne uønskede deler av bildet
- **Lysjustering**: Gjøre bildet lysere eller mørkere
- **Fargekorrigering**: Justere hvitbalanse og fargemetning
- **Kontrast**: Øke forskjellen mellom lyse og mørke partier
- **Skarphet**: Gjøre detaljer tydeligere

Vanlige programmer: Adobe Photoshop, GIMP, Canva, Snapseed`,
    },
    {
      id: 'kunst-8-4-2-warning-1',
      type: 'warning',
      title: 'Bildeetikk',
      content: `Vær forsiktig med overdreven redigering. Bilder brukt i nyheter og dokumentasjon skal være ærlige. I kunst og reklame er mer redigering akseptert, men du bør alltid være ærlig om hva som er manipulert.`,
    },
    {
      id: 'kunst-8-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er eksponering i fotografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvor mye lys som treffer sensoren',
            multipleChoiceOptions: ['Hvor mye lys som treffer sensoren', 'Fargen på bildet', 'Størrelsen på bildet', 'Typen kamera'],
          },
        ],
        solution: 'Eksponering beskriver mengden lys som treffer kamerasensoren. Den bestemmes av blenderåpning, lukkertid og ISO.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tredelerregelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At man deler bildet i tre og plasserer motiv i skjæringspunktene',
            multipleChoiceOptions: ['At man deler bildet i tre og plasserer motiv i skjæringspunktene', 'At man tar tre bilder av hvert motiv', 'At man bruker tre farger', 'At eksponeringen deles i tre'],
          },
        ],
        solution: 'Tredelerregelen sier at man deler bildet i ni ruter (3x3), og plasserer viktige elementer langs linjene eller i skjæringspunktene for en mer dynamisk komposisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er beskjæring i bildebehandling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å fjerne uønskede deler av bildet',
            multipleChoiceOptions: ['Å fjerne uønskede deler av bildet', 'Å gjøre bildet skarpere', 'Å legge til farger', 'Å kopiere bildet'],
          },
        ],
        solution: 'Beskjæring (cropping) fjerner deler av bildet for å forbedre komposisjonen eller fokusere på hovedmotivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør man være forsiktig med overdreven bilderedigering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi det kan være uetisk og villede folk',
            multipleChoiceOptions: ['Fordi det kan være uetisk og villede folk', 'Fordi det tar lang tid', 'Fordi bildet blir for stort', 'Fordi kameraet kan gå i stykker'],
          },
        ],
        solution: 'Overdreven redigering kan villede seere til å tro at noe er ekte når det ikke er det. Dette er spesielt problematisk i nyhetsbilder og dokumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Arkitektur og miljø
// ============================================================================

export const CHAPTER_KUNST_8_5_1: TextbookChapter = {
  id: 'kunst-8-5-1',
  courseId: 'kunst-8',
  chapterNumber: '5.1',
  title: 'Arkitektur',
  description: 'Lær om arkitekturhistorie og grunnleggende arkitektoniske prinsipper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over arkitektur og design fra ulike kulturer',
  ],
  content: [
    {
      id: 'kunst-8-5-1-intro',
      type: 'text',
      content: `Arkitektur er kunsten å designe og konstruere bygninger. God arkitektur kombinerer funksjon, estetikk og bærekraft, og tar hensyn til menneskene som skal bruke bygningen.`,
    },
    {
      id: 'kunst-8-5-1-def-1',
      type: 'definition',
      title: 'Arkitektur',
      content: `Arkitektur er design og konstruksjon av bygninger og andre fysiske strukturer. Det balanserer praktiske behov med estetiske og kulturelle hensyn.`,
    },
    {
      id: 'kunst-8-5-1-text-1',
      type: 'text',
      content: `**Historiske arkitekturstiler**

- **Antikk**: Søyler, templer, amfiteatre (Parthenon, Colosseum)
- **Romansk**: Tunge murvegger, rundbuer, festningspreg
- **Gotisk**: Spisse buer, ribbet hvelv, glassmalerier (Notre-Dame)
- **Renessanse**: Symmetri, kupler, klassiske elementer (Peterskirken)
- **Barokk**: Overdådig, dramatisk, kurver og ornamenter
- **Moderne**: Enkle linjer, store vindusflater, betong og stål`,
    },
    {
      id: 'kunst-8-5-1-text-2',
      type: 'text',
      content: `**Arkitektoniske prinsipper**

1. **Funksjon**: Bygningen må fungere for sitt formål
2. **Form**: Estetisk utforming og stil
3. **Konstruksjon**: Strukturell integritet og sikkerhet
4. **Kontekst**: Tilpasning til omgivelsene
5. **Bærekraft**: Miljøvennlige materialer og energibruk`,
    },
    {
      id: 'kunst-8-5-1-example-1',
      type: 'example',
      title: 'Norsk arkitektur',
      content: `Norge har rike arkitektoniske tradisjoner:
- **Stavkirker**: Unike trebygninger fra middelalderen
- **Trehusbebyggelse**: Tradisjonelle norske boliger
- **Operahuset i Oslo**: Moderne arkitektur som glir ned i fjorden
- **Nasjonal turistvei-arkitektur**: Utkikspunkter og rasteplasser i naturen`,
    },
    {
      id: 'kunst-8-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner gotisk arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Spisse buer og ribbet hvelv',
            multipleChoiceOptions: ['Spisse buer og ribbet hvelv', 'Flate tak og store vinduer', 'Lave bygninger med tykke murer', 'Kupler og symmetri'],
          },
        ],
        solution: 'Gotisk arkitektur kjennetegnes av spisse buer, ribbet hvelv og store glassmalerier. Katedralene Notre-Dame og Kölnerdomen er eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er viktig i bærekraftig arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Miljøvennlige materialer og energieffektivitet',
            multipleChoiceOptions: ['Miljøvennlige materialer og energieffektivitet', 'Å bruke mest mulig materiale', 'Å bygge så høyt som mulig', 'Å kopiere gamle bygninger'],
          },
        ],
        solution: 'Bærekraftig arkitektur bruker miljøvennlige materialer, minimerer energiforbruk og tar hensyn til bygningens totale miljøpåvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er stavkirker?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Unike norske trebygninger fra middelalderen',
            multipleChoiceOptions: ['Unike norske trebygninger fra middelalderen', 'Steinkirker fra antikken', 'Moderne kirker i betong', 'Kirker i Italia'],
          },
        ],
        solution: 'Stavkirker er unike norske trebygninger fra middelalderen (1100-1300-tallet). De har karakteristisk stavkonstruksjon og utskjæringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med at arkitektur må ta hensyn til "kontekst"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At bygningen må tilpasses omgivelsene',
            multipleChoiceOptions: ['At bygningen må tilpasses omgivelsene', 'At bygningen må være billig', 'At bygningen må være stor', 'At bygningen må ha mange rom'],
          },
        ],
        solution: 'Kontekst betyr at bygningen må passe inn i sine omgivelser - både fysisk (terreng, nabolag) og kulturelt (lokal byggeskikk, historie).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_8_5_2: TextbookChapter = {
  id: 'kunst-8-5-2',
  courseId: 'kunst-8',
  chapterNumber: '5.2',
  title: 'Bærekraftig design',
  description: 'Lær om bærekraft, gjenbruk og miljøbevisst design.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over bærekraftig design',
  ],
  content: [
    {
      id: 'kunst-8-5-2-intro',
      type: 'text',
      content: `Bærekraftig design handler om å skape produkter og løsninger som tar hensyn til miljøet gjennom hele livssyklusen - fra produksjon til avhending.`,
    },
    {
      id: 'kunst-8-5-2-def-1',
      type: 'definition',
      title: 'Bærekraftig design',
      content: `Design som minimerer negativ miljøpåvirkning, bruker ressurser effektivt og tar hensyn til sosiale og økonomiske faktorer.`,
    },
    {
      id: 'kunst-8-5-2-text-1',
      type: 'text',
      content: `**Prinsipper for bærekraftig design**

1. **Reduser**: Bruk mindre materiale og energi
2. **Gjenbruk**: Design for lang levetid og reparasjon
3. **Resirkuler**: Velg materialer som kan resirkuleres
4. **Lokalt**: Bruk lokale materialer for å redusere transport
5. **Naturlig**: Velg biologisk nedbrytbare materialer når mulig`,
    },
    {
      id: 'kunst-8-5-2-text-2',
      type: 'text',
      content: `**Livssyklustenkning**

Et produkts miljøpåvirkning må vurderes gjennom hele livssyklusen:

1. **Råvareutvinning**: Hvor kommer materialene fra?
2. **Produksjon**: Hvor mye energi og ressurser brukes?
3. **Transport**: Hvor langt fraktes produktet?
4. **Bruk**: Hvor mye energi/ressurser brukes i bruksfasen?
5. **Avhending**: Kan det resirkuleres eller brytes ned?`,
    },
    {
      id: 'kunst-8-5-2-tip-1',
      type: 'tip',
      title: 'Upcycling',
      content: `Upcycling betyr å lage noe nytt og bedre av kasserte materialer. En gammel jakke kan bli en veske, en pall kan bli en sofa. Dette er kreativ bærekraft!`,
    },
    {
      id: 'kunst-8-5-2-example-1',
      type: 'example',
      title: 'Eksempler på bærekraftig design',
      content: `- **Møbler av resirkulert plast** fra havet
- **Klær av organisk bomull** eller resirkulerte materialer
- **Emballasje av papp** i stedet for plast
- **Modulære produkter** som kan repareres og oppgraderes
- **Lokalproduserte varer** som minimerer transport`,
    },
    {
      id: 'kunst-8-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr "bærekraftig design"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Design som tar hensyn til miljøet',
            multipleChoiceOptions: ['Design som tar hensyn til miljøet', 'Design som er dyrt', 'Design som er gammeldags', 'Design som bruker mye materiale'],
          },
        ],
        solution: 'Bærekraftig design minimerer negativ miljøpåvirkning gjennom hele produktets livssyklus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er upcycling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å lage noe nytt og bedre av kasserte materialer',
            multipleChoiceOptions: ['Å lage noe nytt og bedre av kasserte materialer', 'Å kaste ting i søpla', 'Å kjøpe nye ting', 'Å sykle oppover'],
          },
        ],
        solution: 'Upcycling er å gi kasserte materialer nytt liv ved å omdanne dem til noe nytt og ofte mer verdifullt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er livssyklustenkning i design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å vurdere miljøpåvirkning gjennom hele produktets levetid',
            multipleChoiceOptions: ['Å vurdere miljøpåvirkning gjennom hele produktets levetid', 'Å bare tenke på produksjonen', 'Å lage produkter som ikke varer lenge', 'Å tenke på sykling'],
          },
        ],
        solution: 'Livssyklustenkning betyr å vurdere alle faser: råvareutvinning, produksjon, transport, bruk og avhending.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-8-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-8-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er lokale materialer ofte mer bærekraftige?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi de reduserer transportutslipp',
            multipleChoiceOptions: ['Fordi de reduserer transportutslipp', 'Fordi de er billigere', 'Fordi de er penere', 'Fordi de er enklere å finne'],
          },
        ],
        solution: 'Lokale materialer trenger ikke fraktes langt, noe som reduserer CO2-utslipp fra transport betydelig.',
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

export const KUNST_8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_8_1_1,
  CHAPTER_KUNST_8_1_2,
  CHAPTER_KUNST_8_2_1,
  CHAPTER_KUNST_8_2_2,
  CHAPTER_KUNST_8_3_1,
  CHAPTER_KUNST_8_3_2,
  CHAPTER_KUNST_8_4_1,
  CHAPTER_KUNST_8_4_2,
  CHAPTER_KUNST_8_5_1,
  CHAPTER_KUNST_8_5_2,
];
