/**
 * Kunst og håndverk 9. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 9. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Design og innovasjon
// ============================================================================

export const CHAPTER_KUNST_9_1_1: TextbookChapter = {
  id: 'kunst-9-1-1',
  courseId: 'kunst-9',
  chapterNumber: '1.1',
  title: 'Brukersentrert design',
  description: 'Lær om design thinking og brukersentrert designmetodikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og presentere en designprosess fra idé til ferdig produkt',
    'anvende brukersentrert design',
  ],
  content: [
    {
      id: 'kunst-9-1-1-intro',
      type: 'text',
      content: `Brukersentrert design setter brukeren i sentrum for hele designprosessen. I stedet for å lage det du tror folk vil ha, undersøker du hva brukerne faktisk trenger, tester ideer med dem, og forbedrer løsningen basert på tilbakemeldinger.`,
    },
    {
      id: 'kunst-9-1-1-def-1',
      type: 'definition',
      title: 'Brukersentrert design (UCD)',
      content: `Brukersentrert design er en designfilosofi der brukerens behov, ønsker og begrensninger er i fokus gjennom hele designprosessen. Målet er å skape produkter som er nyttige og brukervennlige.`,
    },
    {
      id: 'kunst-9-1-1-text-2',
      type: 'text',
      content: `**Design Thinking - Fem faser**

Design Thinking er en strukturert metode for brukersentrert design:

1. **Forstå (Empathize)**: Sett deg inn i brukerens situasjon
2. **Definer (Define)**: Formuler det virkelige problemet
3. **Idéutvikling (Ideate)**: Generer mange mulige løsninger
4. **Prototyp (Prototype)**: Lag en enkel testversjon
5. **Test (Test)**: Prøv løsningen med ekte brukere`,
    },
    {
      id: 'kunst-9-1-1-tip-1',
      type: 'tip',
      title: 'Empatiintervju',
      content: `For å forstå brukeren, gjennomfør empatiintervjuer. Still åpne spørsmål som "Fortell meg om en gang du..." og "Hvordan føles det når...". Lytt aktivt og observer kroppsspråk.`,
    },
    {
      id: 'kunst-9-1-1-text-3',
      type: 'text',
      content: `**Personas og brukerreiser**

**Persona**: En fiktiv representant for en brukergruppe basert på research. Inkluderer navn, alder, yrke, mål og utfordringer.

**Brukerreise (User Journey)**: En visuell fremstilling av alle stegene brukeren går gjennom for å oppnå et mål. Viser tanker, følelser og smertepunkter.

Ved å lage personas og brukerreiser får du bedre forståelse for hvem du designer for og hvilke problemer du må løse.`,
    },
    {
      id: 'kunst-9-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Design av skolegarderobe',
      content: `**Forstå**: Observerer og intervjuer elever om garderobeproblemer
**Definer**: "Elever trenger rask tilgang til ting uten å blokkere gangen"
**Idéer**: Åpne hyller, nummererte skap, digitale låser, hengesystemer
**Prototyp**: Lager pappmodell i målestokk
**Test**: Elever simulerer bruk og gir tilbakemelding`,
    },
    {
      id: 'kunst-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er det første steget i Design Thinking?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Forstå brukeren (Empathize)',
            multipleChoiceOptions: ['Forstå brukeren (Empathize)', 'Lage prototyper', 'Teste produktet', 'Idéutvikling'],
          },
        ],
        solution: 'Det første steget er å forstå brukeren gjennom observasjon og intervjuer. Man må vite hvem man designer for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en persona i designsammenheng?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En fiktiv representant for en brukergruppe',
            multipleChoiceOptions: ['En fiktiv representant for en brukergruppe', 'Designerens personlighet', 'Et merkenavn', 'En type prototype'],
          },
        ],
        solution: 'En persona er en fiktiv person som representerer en typisk bruker. Den er basert på research og hjelper designere å holde brukeren i fokus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er testing viktig i brukersentrert design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å finne ut om løsningen faktisk fungerer for brukerne',
            multipleChoiceOptions: ['For å finne ut om løsningen faktisk fungerer for brukerne', 'For å spare penger', 'For å kopiere konkurrenter', 'For å tilfredsstille sjefen'],
          },
        ],
        solution: 'Testing avdekker om løsningen møter brukernes behov i praksis. Ofte oppdager man problemer man ikke hadde tenkt på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva viser en brukerreise (User Journey)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Alle stegene brukeren går gjennom for å oppnå et mål',
            multipleChoiceOptions: ['Alle stegene brukeren går gjennom for å oppnå et mål', 'Hvor produktet produseres', 'Designerens arbeidsprosess', 'Produktets pris'],
          },
        ],
        solution: 'En brukerreise kartlegger alle steg, tanker og følelser brukeren opplever når de bruker et produkt eller tjeneste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_9_1_2: TextbookChapter = {
  id: 'kunst-9-1-2',
  courseId: 'kunst-9',
  chapterNumber: '1.2',
  title: 'Avansert fargeteori',
  description: 'Utforsk fargesystemer, fargeharmonier og fargepsykologi.',
  estimatedMinutes: 55,
  competenceGoals: [
    'eksperimentere med form, farge og komposisjon',
    'bruke fargeteori i eget arbeid',
  ],
  content: [
    {
      id: 'kunst-9-1-2-intro',
      type: 'text',
      content: `Avansert fargeteori går dypere enn primær- og sekundærfarger. Ved å forstå fargesystemer, harmonier og psykologi kan du ta mer bevisste valg i dine kreative prosjekter.`,
    },
    {
      id: 'kunst-9-1-2-def-1',
      type: 'definition',
      title: 'Fargesystemer',
      content: `**RGB** (Rød, Grønn, Blå): Additivt system for skjermer. Blandet lys gir hvitt.
**CMYK** (Cyan, Magenta, Gul, Sort): Subtraktivt system for trykk. Blandet trykkfarge gir mørkt.`,
    },
    {
      id: 'kunst-9-1-2-text-2',
      type: 'text',
      content: `**Fargeterminologi**

- **Kulør (Hue)**: Selve fargen (rød, blå, grønn osv.)
- **Metning (Saturation)**: Hvor ren/intens fargen er
- **Valør (Value)**: Hvor lys eller mørk fargen er
- **Tint**: Farge tilsatt hvitt
- **Shade**: Farge tilsatt svart
- **Tone**: Farge tilsatt grått

HSL (Hue, Saturation, Lightness) og HSV (Hue, Saturation, Value) er digitale fargemodeller basert på disse begrepene.`,
    },
    {
      id: 'kunst-9-1-2-text-3',
      type: 'text',
      content: `**Fargeharmonier**

Fargeharmonier er kombinasjoner av farger som fungerer godt sammen:

- **Monokromatisk**: Én kulør i ulike valører og metninger
- **Analog**: Farger ved siden av hverandre i fargesirkelen
- **Komplementær**: Farger rett overfor hverandre
- **Splittet komplementær**: Én farge pluss to farger ved siden av komplementærfargen
- **Triade**: Tre farger med lik avstand i fargesirkelen
- **Tetrade**: Fire farger i rektangulært mønster`,
    },
    {
      id: 'kunst-9-1-2-tip-1',
      type: 'tip',
      title: '60-30-10-regelen',
      content: `I design brukes ofte 60-30-10-regelen: 60% dominerende farge, 30% sekundærfarge, 10% aksentfarge. Dette skaper balanse og visuell interesse.`,
    },
    {
      id: 'kunst-9-1-2-text-4',
      type: 'text',
      content: `**Fargepsykologi i kontekst**

Fargers betydning varierer mellom kulturer:
- **Hvit**: Renhet i Vesten, sorg i deler av Asia
- **Rød**: Kjærlighet i Vesten, lykke i Kina
- **Grønn**: Natur globalt, hellig i islam

I markedsføring:
- Blå: Tillit (banker, teknologi)
- Oransje: Energi, handling (CTA-knapper)
- Sort: Luksus, eksklusivitet`,
    },
    {
      id: 'kunst-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom RGB og CMYK?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'RGB er for skjerm (lys), CMYK er for trykk (blekk)',
            multipleChoiceOptions: ['RGB er for skjerm (lys), CMYK er for trykk (blekk)', 'De er det samme', 'RGB har flere farger enn CMYK', 'CMYK er bare for fotografier'],
          },
        ],
        solution: 'RGB er additivt (lys blandes til hvitt) og brukes på skjermer. CMYK er subtraktivt (blekk blandes til mørkt) og brukes i trykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en monokromatisk fargepalett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Én kulør i ulike valører og metninger',
            multipleChoiceOptions: ['Én kulør i ulike valører og metninger', 'Bare sort og hvitt', 'To komplementærfarger', 'Alle regnbuens farger'],
          },
        ],
        solution: 'En monokromatisk palett bruker bare én kulør (f.eks. blå), men varierer lyshet og metning for å skape variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er metning (saturation)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvor ren og intens fargen er',
            multipleChoiceOptions: ['Hvor ren og intens fargen er', 'Hvor lys fargen er', 'Hvilken kulør det er', 'Hvor mye svart som er tilsatt'],
          },
        ],
        solution: 'Metning beskriver hvor ren/intens en farge er. Høy metning = intens farge, lav metning = gråaktig farge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er 60-30-10-regelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En fordelingsprinsipp for farger i design',
            multipleChoiceOptions: ['En fordelingsprinsipp for farger i design', 'Antall farger i fargesirkelen', 'En musikkregel', 'Prosentandel av hvitt'],
          },
        ],
        solution: '60-30-10 er et designprinsipp: 60% dominerende farge, 30% sekundær, 10% aksent. Det skaper visuell balanse.',
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

export const CHAPTER_KUNST_9_2_1: TextbookChapter = {
  id: 'kunst-9-2-1',
  courseId: 'kunst-9',
  chapterNumber: '2.1',
  title: 'Modernismen',
  description: 'Lær om de store kunstbevegelsene på 1900-tallet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over kunst og design fra ulike kulturer og historiske perioder',
  ],
  content: [
    {
      id: 'kunst-9-2-1-intro',
      type: 'text',
      content: `Modernismen (ca. 1860-1970) var en periode med revolusjonerende eksperimentering i kunsten. Kunstnere brøt med tradisjonelle regler og utforsket nye måter å se og uttrykke verden på.`,
    },
    {
      id: 'kunst-9-2-1-def-1',
      type: 'definition',
      title: 'Modernisme',
      content: `Modernismen var en bred kulturell bevegelse som søkte å bryte med fortiden og skape noe nytt. I kunsten betydde dette eksperimentering med form, farge, perspektiv og materialer.`,
    },
    {
      id: 'kunst-9-2-1-text-2',
      type: 'text',
      content: `**Kubisme (ca. 1907-1920)**

Grunnlagt av Pablo Picasso og Georges Braque:
- Bryter ned objekter til geometriske former
- Viser flere vinkler samtidig
- Utfordrer tradisjonelt perspektiv
- Analytisk kubisme: Fragmenterte, monokromatiske bilder
- Syntetisk kubisme: Collage, flere farger

Picassos "Les Demoiselles d'Avignon" (1907) regnes som startskuddet.`,
    },
    {
      id: 'kunst-9-2-1-text-3',
      type: 'text',
      content: `**Surrealisme (ca. 1920-1940)**

Inspirert av Freuds psykoanalyse:
- Utforsker drømmer og det underbevisste
- Uventede sammensetninger av objekter
- Automatisk tegning/skriving
- Salvador Dalí: Smeltende klokker, drømmelandskap
- René Magritte: Hverdagsobjekter i merkelige kontekster
- Frida Kahlo: Personlige og symbolske selvportretter`,
    },
    {
      id: 'kunst-9-2-1-text-4',
      type: 'text',
      content: `**Abstrakt ekspresjonisme (ca. 1940-1960)**

New York ble kunstverdens sentrum:
- Fokus på uttrykk og prosess
- Store lerreter, dramatiske gester
- Jackson Pollock: Dryppemaling (action painting)
- Mark Rothko: Store fargefelt som skaper meditativ opplevelse
- Willem de Kooning: Ekspressive penselstrøk

Denne bevegelsen gjorde USA til leder i samtidskunsten.`,
    },
    {
      id: 'kunst-9-2-1-example-1',
      type: 'example',
      title: 'Pollock og action painting',
      content: `Jackson Pollock la store lerreter på gulvet og dryppet, slengte og sprøytet maling. Prosessen var like viktig som resultatet. Kroppens bevegelse ble direkte oversatt til kunst. Dette var revolusjonerende - kunstverket var ikke planlagt, men oppstod spontant.`,
    },
    {
      id: 'kunst-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner kubismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Objekter brytes ned til geometriske former sett fra flere vinkler',
            multipleChoiceOptions: ['Objekter brytes ned til geometriske former sett fra flere vinkler', 'Realistiske portretter', 'Drømmelandskap med smeltende objekter', 'Store fargefelt'],
          },
        ],
        solution: 'Kubismen fragmenterte objekter til geometriske former og viste dem fra flere vinkler samtidig, som utfordret tradisjonelt perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken kunstretning var inspirert av drømmer og det underbevisste?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Surrealisme',
            multipleChoiceOptions: ['Surrealisme', 'Kubisme', 'Abstrakt ekspresjonisme', 'Pop-art'],
          },
        ],
        solution: 'Surrealismen var inspirert av Freuds psykoanalyse og utforsket drømmer, det underbevisste og irrasjonelle sammenstillinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem er kjent for dryppemaling (action painting)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Jackson Pollock',
            multipleChoiceOptions: ['Jackson Pollock', 'Salvador Dalí', 'Pablo Picasso', 'Andy Warhol'],
          },
        ],
        solution: 'Jackson Pollock utviklet dryppemaling der han slengte og dryppet maling på store lerreter lagt på gulvet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvem grunnla kubismen sammen med Braque?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Pablo Picasso',
            multipleChoiceOptions: ['Pablo Picasso', 'Salvador Dalí', 'Jackson Pollock', 'Mark Rothko'],
          },
        ],
        solution: 'Pablo Picasso og Georges Braque utviklet kubismen sammen fra rundt 1907.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_9_2_2: TextbookChapter = {
  id: 'kunst-9-2-2',
  courseId: 'kunst-9',
  chapterNumber: '2.2',
  title: 'Samtidskunst',
  description: 'Utforsk kunst fra 1970 til i dag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over kunst og design fra ulike kulturer og historiske perioder',
  ],
  content: [
    {
      id: 'kunst-9-2-2-intro',
      type: 'text',
      content: `Samtidskunst (fra ca. 1970 til i dag) kjennetegnes av mangfold og grenseoverskridelse. Kunstnere bruker alle tenkelige materialer og medier, og stiller spørsmål ved hva kunst kan være.`,
    },
    {
      id: 'kunst-9-2-2-def-1',
      type: 'definition',
      title: 'Konseptkunst',
      content: `Konseptkunst prioriterer ideen eller konseptet over det fysiske objektet. "Kunstverket" kan være en instruks, en handling eller en idé. Sol LeWitt sa: "Ideen er maskinen som lager kunsten."`,
    },
    {
      id: 'kunst-9-2-2-text-2',
      type: 'text',
      content: `**Installasjonskunst**

Installasjoner okkuperer hele rom eller steder:
- Betrakteren går inn i verket
- Kan inkludere lyd, lys, video, gjenstander
- Ofte stedsspesifikke (site-specific)
- Yayoi Kusama: Infinity Mirror Rooms
- Olafur Eliasson: Weather Project i Tate Modern`,
    },
    {
      id: 'kunst-9-2-2-text-3',
      type: 'text',
      content: `**Performance og videokunst**

**Performancekunst**:
- Kunstnerens kropp som medium
- Ofte live og tidsbegrenset
- Marina Abramović: "The Artist is Present"

**Videokunst**:
- Video som kunstuttrykk, ikke underholdning
- Utforsker tid, repetisjon, narrasjon
- Bill Viola: Langsomme, meditasive videoer
- Pipilotti Rist: Fargesterke, sanserike installasjoner`,
    },
    {
      id: 'kunst-9-2-2-text-4',
      type: 'text',
      content: `**Street art og digital kunst**

**Street art**:
- Kunst i det offentlige rom
- Fra graffiti til muralkunst
- Banksy: Politisk, anonym, ikonisk
- JR: Enorme fotografier på bygninger

**Digital kunst og NFT**:
- Kunst skapt med eller for digitale medier
- Beeple solgte digital kunst for 69 millioner dollar
- AI-generert kunst stiller spørsmål om kreativitet og opphav`,
    },
    {
      id: 'kunst-9-2-2-note-1',
      type: 'note',
      title: 'Relasjonell estetikk',
      content: `Noen samtidskunstnere fokuserer på sosiale interaksjoner som kunstverk. Kunstnerens rolle kan være å skape situasjoner der mennesker møtes og samhandler.`,
    },
    {
      id: 'kunst-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner konseptkunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ideen er viktigere enn det fysiske objektet',
            multipleChoiceOptions: ['Ideen er viktigere enn det fysiske objektet', 'Realistiske malerier', 'Bruk av kun tradisjonelle materialer', 'Fokus på dekorative motiver'],
          },
        ],
        solution: 'I konseptkunst er ideen eller konseptet det sentrale. Det fysiske verket kan være minimalt eller fraværende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en kunstinstallasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et verk som fyller et rom og som betrakteren kan gå inn i',
            multipleChoiceOptions: ['Et verk som fyller et rom og som betrakteren kan gå inn i', 'Et maleri på veggen', 'En skulptur på pidestall', 'Et dataprogram'],
          },
        ],
        solution: 'Installasjonskunst skaper opplevelser der betrakteren er inne i verket, ofte med bruk av flere medier som lyd, lys og objekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken anonym kunstner er kjent for politisk street art?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Banksy',
            multipleChoiceOptions: ['Banksy', 'Picasso', 'Warhol', 'Kusama'],
          },
        ],
        solution: 'Banksy er en anonym britisk street artist kjent for politiske og satiriske verk som dukker opp på vegger rundt om i verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er performancekunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst der kunstnerens kropp og handlinger er verket',
            multipleChoiceOptions: ['Kunst der kunstnerens kropp og handlinger er verket', 'Teaterforestillinger', 'Digitale presentasjoner', 'Skulptur av kropper'],
          },
        ],
        solution: 'I performancekunst er kunstnerens kropp mediet. Verket er en handling eller hendelse, ofte live og tidsbegrenset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Norsk kunst og håndverkstradisjon
// ============================================================================

export const CHAPTER_KUNST_9_3_1: TextbookChapter = {
  id: 'kunst-9-3-1',
  courseId: 'kunst-9',
  chapterNumber: '3.1',
  title: 'Norsk kunsthistorie',
  description: 'Utforsk norsk kunst fra romantikken til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over norsk kunst og håndverkstradisjoner',
  ],
  content: [
    {
      id: 'kunst-9-3-1-intro',
      type: 'text',
      content: `Norsk kunst har en rik historie fra nasjonalromantikken på 1800-tallet til dagens samtidskunst. Norske kunstnere har bidratt betydelig til internasjonal kunsthistorie, særlig Edvard Munch.`,
    },
    {
      id: 'kunst-9-3-1-text-1',
      type: 'text',
      content: `**Nasjonalromantikken (ca. 1840-1900)**

Norsk identitetsbygging gjennom kunst:
- **J.C. Dahl** (1788-1857): "Norges nasjonalmaler", dramatiske fjordlandskap
- **Adolph Tidemand**: Bondeliv og tradisjoner
- **Hans Gude**: Naturmalerier, ofte samarbeid med Tidemand
- "Brudeferd i Hardanger" (1848): Ikonisk samarbeid mellom Tidemand og Gude

Disse kunstnerne definerte det visuelle bildet av Norge og norsk identitet.`,
    },
    {
      id: 'kunst-9-3-1-def-1',
      type: 'definition',
      title: 'Nasjonalromantikk',
      content: `En kunstretning som idealiserte det nasjonale, naturen og folkelivet. I Norge var den viktig for nasjonsbyggingen etter 1814 og frem mot selvstendigheten i 1905.`,
    },
    {
      id: 'kunst-9-3-1-text-2',
      type: 'text',
      content: `**Edvard Munch (1863-1944)**

Norges internasjonalt mest kjente kunstner:
- Forløper for ekspresjonismen
- Utforsket angst, død, kjærlighet og sjalusi
- "Skrik" (1893): Verdens mest gjenkjennelige maleri
- "Livsfrisen": Serie om menneskelivets grunnleggende temaer
- Testamenterte hele sin kunstsamling til Oslo kommune

Munchs innflytelse på moderne kunst er enorm.`,
    },
    {
      id: 'kunst-9-3-1-text-3',
      type: 'text',
      content: `**Norsk kunst på 1900-tallet**

- **Harriet Backer** (1845-1932): Interiørbilder med mesterlig lysbehandling
- **Gustav Vigeland** (1869-1943): Vigelandsparken i Oslo
- **Kai Fjell** (1907-1989): Ekspresjonistiske folkelivsskildringer
- **Odd Nerdrum** (f. 1944): Klassisk teknikk, filosofiske temaer
- **Pushwagner** (1940-2018): Pop-art og samfunnskritikk

**Samtidskunstnere**:
- Bjarne Melgaard, Vanessa Baird, Ida Ekblad, Matias Faldbakken`,
    },
    {
      id: 'kunst-9-3-1-example-1',
      type: 'example',
      title: 'Vigelandsparken',
      content: `Gustav Vigeland designet hele Vigelandsparken i Oslo med over 200 skulpturer i bronse, granitt og støpejern. Parken viser menneskelivet fra fødsel til død, med "Monolitten" (14,12 meter høy) som sentrum. Det er verdens største skulpturpark skapt av én kunstner.`,
    },
    {
      id: 'kunst-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem regnes som "Norges nasjonalmaler"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'J.C. Dahl',
            multipleChoiceOptions: ['J.C. Dahl', 'Edvard Munch', 'Gustav Vigeland', 'Adolph Tidemand'],
          },
        ],
        solution: 'Johan Christian Dahl (1788-1857) regnes som Norges nasjonalmaler for sine dramatiske fjord- og fjellandskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket verk testamenterte Edvard Munch til Oslo kommune?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hele hans kunstsamling',
            multipleChoiceOptions: ['Hele hans kunstsamling', 'Bare "Skrik"', 'Ingenting', 'Huset hans'],
          },
        ],
        solution: 'Munch testamenterte hele sin enorme kunstsamling til Oslo kommune, noe som førte til opprettelsen av Munchmuseet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem skapte Vigelandsparken?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gustav Vigeland',
            multipleChoiceOptions: ['Gustav Vigeland', 'Edvard Munch', 'J.C. Dahl', 'Odd Nerdrum'],
          },
        ],
        solution: 'Gustav Vigeland (1869-1943) designet hele Vigelandsparken med over 200 skulpturer i Oslo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er "Livsfrisen"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En serie malerier av Munch om livets grunnleggende temaer',
            multipleChoiceOptions: ['En serie malerier av Munch om livets grunnleggende temaer', 'En skulptur i Vigelandsparken', 'Et fotoprosjekt', 'En bok om kunsthistorie'],
          },
        ],
        solution: 'Livsfrisen er en serie malerier av Edvard Munch som utforsker temaer som kjærlighet, angst og død.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_9_3_2: TextbookChapter = {
  id: 'kunst-9-3-2',
  courseId: 'kunst-9',
  chapterNumber: '3.2',
  title: 'Norsk håndverkstradisjon',
  description: 'Lær om tradisjonelt norsk håndverk og folkelig kunstuttrykk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over norsk kunst og håndverkstradisjoner',
  ],
  content: [
    {
      id: 'kunst-9-3-2-intro',
      type: 'text',
      content: `Norge har rike håndverkstradisjoner som har utviklet seg over århundrer. Rosemaling, treskjæring, bunad og metallsløyd representerer viktig kulturarv som fortsatt holdes i hevd.`,
    },
    {
      id: 'kunst-9-3-2-def-1',
      type: 'definition',
      title: 'Rosemaling',
      content: `Rosemaling er en norsk dekorasjonsteknikk med akantusranker, blomster og geometriske mønstre i sterke farger. Hver region har sin stil: Telemark, Hallingdal, Rogaland og andre.`,
    },
    {
      id: 'kunst-9-3-2-text-2',
      type: 'text',
      content: `**Regionale rosemalingsstiler**

- **Telemark**: Asymmetriske C- og S-former, komplekse komposisjoner
- **Hallingdal**: Symmetriske mønstre, kraftige farger
- **Rogaland**: Påvirket av europeisk barokk, blomsterrike
- **Valdres**: Kombinasjon av ulike stiler

Rosemalingen blomstret på 1700- og 1800-tallet og ble brukt på møbler, vegger og bruksgjenstander.`,
    },
    {
      id: 'kunst-9-3-2-text-3',
      type: 'text',
      content: `**Treskjæring**

Norsk treskjæring har røtter tilbake til vikingtiden:
- **Stavkirkene**: Imponerende utskjæringer med drager og ranker
- **Kolrosing**: Innrissede mønstre fylt med mørk farge
- **Kubbestol**: Stoltyper med utskårne dekorasjoner
- **Ølkanne (kjenge)**: Praktiske gjenstander med dekor

Treskjærere som Lars Kinsarvik (1846-1925) løftet håndverket til anerkjent kunstform.`,
    },
    {
      id: 'kunst-9-3-2-text-4',
      type: 'text',
      content: `**Bunad og tekstil**

- **Bunad**: Regional festdrakt med broderi, sølv og vevde stoffer
- **Hardangersøm**: Hvit broderi med uttrekksarbeid
- **Smøyg**: Broderiteknikk med geometriske mønstre
- **Bindingsvev og grindvev**: Tradisjonelle veveteknikker

Hver region har sin bunad med egne farger, broderier og sølvsmykker. Husfliden har vært viktig for å bevare disse tradisjonene.`,
    },
    {
      id: 'kunst-9-3-2-tip-1',
      type: 'tip',
      title: 'Moderne håndverk',
      content: `I dag kombinerer mange håndverkere tradisjonelle teknikker med moderne design. Organisasjoner som Norges Husflidslag arbeider for å holde tradisjonene levende og relevante.`,
    },
    {
      id: 'kunst-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er rosemaling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Norsk dekorasjonsteknikk med ranker og blomster',
            multipleChoiceOptions: ['Norsk dekorasjonsteknikk med ranker og blomster', 'En type roser', 'Maling laget av roser', 'En moderne kunststil'],
          },
        ],
        solution: 'Rosemaling er en tradisjonell norsk dekorasjonsteknikk med akantusranker, blomster og geometriske mønstre i sterke farger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken teknikk bruker innrissede mønstre fylt med mørk farge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kolrosing',
            multipleChoiceOptions: ['Kolrosing', 'Rosemaling', 'Hardangersøm', 'Smøyg'],
          },
        ],
        solution: 'Kolrosing er en treskjæringsteknikk der mønstre risses inn i treet og fylles med mørk farge for kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er Hardangersøm?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvit broderi med uttrekksarbeid',
            multipleChoiceOptions: ['Hvit broderi med uttrekksarbeid', 'En type rosemaling', 'Treskjæring fra Hardanger', 'En veveteknikk'],
          },
        ],
        solution: 'Hardangersøm er en broderteknikk med hvitt garn på hvitt stoff, der tråder trekkes ut for å lage åpne mønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når blomstret rosemalingen mest?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '1700- og 1800-tallet',
            multipleChoiceOptions: ['1700- og 1800-tallet', 'Vikingtiden', '1900-tallet', '2000-tallet'],
          },
        ],
        solution: 'Rosemalingen hadde sin storhetstid på 1700- og 1800-tallet, særlig i innlandsbygdene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Avanserte teknikker
// ============================================================================

export const CHAPTER_KUNST_9_4_1: TextbookChapter = {
  id: 'kunst-9-4-1',
  courseId: 'kunst-9',
  chapterNumber: '4.1',
  title: 'Avansert tegning',
  description: 'Lær anatomi, perspektiv og ekspressive tegneteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike materialer, teknikker og verktøy',
    'utvikle og presentere eget visuelt uttrykk',
  ],
  content: [
    {
      id: 'kunst-9-4-1-intro',
      type: 'text',
      content: `Avansert tegning bygger videre på grunnleggende teknikker med fokus på anatomi, perspektiv og personlig uttrykk. Disse ferdighetene er fundamentale for alt visuelt arbeid.`,
    },
    {
      id: 'kunst-9-4-1-text-1',
      type: 'text',
      content: `**Grunnleggende anatomi**

For å tegne mennesker troverdig:
- **Proporsjoner**: Kroppen er ca. 7-8 hoder høy
- **Skjelett**: Forstå benstrukturen som gir form
- **Muskler**: Hovedmuskelgrupper som påvirker overflaten
- **Bevegelse**: Hvordan kroppen bøyer og vrir seg

Start med å tegne enkle mannekenger (stick figures) med korrekte proporsjoner, og bygg opp volum med sylindere og kuler.`,
    },
    {
      id: 'kunst-9-4-1-def-1',
      type: 'definition',
      title: 'Kontrapost',
      content: `Kontrapost er en positur der kroppens vekt hviler på ett ben, noe som skaper en naturlig S-kurve i kroppen. Dette gir dynamikk og naturlighet til figurtegninger.`,
    },
    {
      id: 'kunst-9-4-1-text-2',
      type: 'text',
      content: `**Avansert perspektiv**

Utover ettepunkts- og topunkts-perspektiv:

- **Tre-punktsperspektiv**: For høye bygninger sett oppover eller nedover
- **Fiskeøyeperspektiv**: Kurvet forvrengning for dramatiske bilder
- **Atmosfærisk perspektiv**: Fjerne objekter blir lysere og blåere
- **Overlapping**: Objekter foran skjuler objekter bak

Kombiner flere perspektivteknikker for realistiske dybdeillusjoner.`,
    },
    {
      id: 'kunst-9-4-1-text-3',
      type: 'text',
      content: `**Ekspressive teknikker**

Tegning handler ikke bare om realisme:

- **Gestustegning**: Raske skisser (30 sek - 2 min) som fanger bevegelse og energi
- **Konturtegning**: Tegne kun omrisset uten å løfte blikket
- **Blind konturtegning**: Se på motivet, ikke på papiret
- **Negativ plass**: Tegne rommet rundt objektet, ikke objektet selv

Disse øvelsene frigjør deg fra perfeksjonisme og utvikler observasjonsevnen.`,
    },
    {
      id: 'kunst-9-4-1-tip-1',
      type: 'tip',
      title: 'Daglig skissepraksis',
      content: `Tegn litt hver dag, selv om det bare er 10-15 minutter. Bruk en skissebok og tegn alt du ser: hender, kopper, mennesker på bussen. Mengdetrening er nøkkelen til forbedring.`,
    },
    {
      id: 'kunst-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange hoder høy er en gjennomsnittlig kropp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '7-8 hoder',
            multipleChoiceOptions: ['7-8 hoder', '5 hoder', '10 hoder', '3 hoder'],
          },
        ],
        solution: 'I tradisjonell anatomi regnes kroppen som 7-8 hoder høy. Heroiske figurer tegnes ofte 8-9 hoder for et mer imponerende uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kontrapost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En positur der vekten hviler på ett ben',
            multipleChoiceOptions: ['En positur der vekten hviler på ett ben', 'En maleteknikk', 'En type perspektiv', 'En fargekombinasjon'],
          },
        ],
        solution: 'Kontrapost er en naturlig positur der kroppen danner en S-kurve fordi vekten hviler på ett ben. Det gir figurer liv og dynamikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er gestustegning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Raske skisser som fanger bevegelse og energi',
            multipleChoiceOptions: ['Raske skisser som fanger bevegelse og energi', 'Detaljerte portretter', 'Tegning av landskap', 'Kopier av mesterverk'],
          },
        ],
        solution: 'Gestustegning er raske skisser (ofte 30 sekunder til 2 minutter) som fokuserer på å fange motivets grunnleggende bevegelse og energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er atmosfærisk perspektiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fjerne objekter blir lysere og blåere',
            multipleChoiceOptions: ['Fjerne objekter blir lysere og blåere', 'Objekter blir mørkere på avstand', 'Alle linjer møtes i ett punkt', 'Bilder tegnes med fiskeøye'],
          },
        ],
        solution: 'Atmosfærisk perspektiv viser at objekter på avstand blir lysere, mindre kontrastrike og får en blålig tone på grunn av luftpartikler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_9_4_2: TextbookChapter = {
  id: 'kunst-9-4-2',
  courseId: 'kunst-9',
  chapterNumber: '4.2',
  title: 'Mixed media og eksperimentering',
  description: 'Utforsk kombinasjoner av materialer og teknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike materialer, teknikker og verktøy',
    'eksperimentere med form, farge og komposisjon',
  ],
  content: [
    {
      id: 'kunst-9-4-2-intro',
      type: 'text',
      content: `Mixed media betyr å kombinere ulike materialer og teknikker i samme verk. Dette åpner for uendelige kreative muligheter og oppfordrer til eksperimentering.`,
    },
    {
      id: 'kunst-9-4-2-def-1',
      type: 'definition',
      title: 'Mixed media',
      content: `Mixed media er kunst som kombinerer to eller flere medier - for eksempel tegning, maling, collage, fotografi, tekstiler og funne objekter i samme verk.`,
    },
    {
      id: 'kunst-9-4-2-text-2',
      type: 'text',
      content: `**Collage og assemblage**

**Collage** (2D):
- Klippe og lime papir, stoff, bilder
- Lag på lag skaper tekstur og dybde
- Kombiner funnet materiale med egen tegning/maling

**Assemblage** (3D):
- Sette sammen tredimensjonale objekter
- Funne gjenstander får ny mening
- Kan inkludere bevegelige deler`,
    },
    {
      id: 'kunst-9-4-2-text-3',
      type: 'text',
      content: `**Materialkombinasjononer**

- **Akvarell + tusj**: Løs farge med skarp linje
- **Akryl + collage**: Tekstur og bilde
- **Kull + pastell**: Dramatisk valør med farge
- **Fotografi + maling**: Virkelighet møter fantasi
- **Tekstil + broderi**: Overflate og detalj
- **Trykksverte + tegning**: Grafiske elementer med håndtegnet`,
    },
    {
      id: 'kunst-9-4-2-text-4',
      type: 'text',
      content: `**Eksperimentelle teknikker**

- **Frottage**: Gnidning over teksturert overflate
- **Grattage**: Skrape bort lag av maling
- **Décalcomanie**: Trykke maling mellom to flater
- **Dripping**: Dryppe maling (à la Pollock)
- **Monoprint**: Enkel trykkprosess, unike avtrykk
- **Transfer**: Overføre bilder med løsemiddel`,
    },
    {
      id: 'kunst-9-4-2-tip-1',
      type: 'tip',
      title: 'Materialjakt',
      content: `Samle interessante materialer: gamle bøker, aviser, stoff, tråd, knapper, natur­elementer. Ha en boks med "kunstskatter" klare til bruk. Begrenset tilgang til materialer kan faktisk øke kreativiteten.`,
    },
    {
      id: 'kunst-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er mixed media?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst som kombinerer ulike materialer og teknikker',
            multipleChoiceOptions: ['Kunst som kombinerer ulike materialer og teknikker', 'Bare digital kunst', 'Kunst med kun én teknikk', 'Mediepresentasjoner'],
          },
        ],
        solution: 'Mixed media kombinerer to eller flere medier i samme verk, som tegning, maling, collage, fotografi osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom collage og assemblage?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Collage er 2D, assemblage er 3D',
            multipleChoiceOptions: ['Collage er 2D, assemblage er 3D', 'De er det samme', 'Collage bruker bare papir', 'Assemblage er digital'],
          },
        ],
        solution: 'Collage er todimensjonal (klipp og lim på flat overflate), mens assemblage er tredimensjonal (sammensetting av objekter i rommet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er frottage?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gnidning over en teksturert overflate',
            multipleChoiceOptions: ['Gnidning over en teksturert overflate', 'Drypping av maling', 'Skraping bort maling', 'En type collage'],
          },
        ],
        solution: 'Frottage er en teknikk der man legger papir over en teksturert overflate og gnir med blyant eller kritt for å overføre mønsteret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er grattage?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å skrape bort lag av maling',
            multipleChoiceOptions: ['Å skrape bort lag av maling', 'Å dryppe maling', 'Å gnide over tekstur', 'Å klippe og lime'],
          },
        ],
        solution: 'Grattage er en teknikk der man skraper bort lag av maling for å avsløre farger og teksturer under.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Digital kunst og design
// ============================================================================

export const CHAPTER_KUNST_9_5_1: TextbookChapter = {
  id: 'kunst-9-5-1',
  courseId: 'kunst-9',
  chapterNumber: '5.1',
  title: 'Digital illustrasjon',
  description: 'Lær om digital tegning og vektorgrafikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale verktøy til å visualisere ideer',
  ],
  content: [
    {
      id: 'kunst-9-5-1-intro',
      type: 'text',
      content: `Digital illustrasjon har revolusjonert visuell kunst og design. Med nettbrett og programvare kan du tegne, male og designe med uendelige muligheter for angre, eksperimentere og dele arbeidet ditt.`,
    },
    {
      id: 'kunst-9-5-1-def-1',
      type: 'definition',
      title: 'Raster vs. vektor',
      content: `**Rastergrafikk** (bitmap): Bilder bygget av piksler. Mister kvalitet ved forstørring (Photoshop, Procreate).
**Vektorgrafikk**: Bilder bygget av matematiske kurver. Kan skaleres uendelig uten kvalitetstap (Illustrator, Inkscape).`,
    },
    {
      id: 'kunst-9-5-1-text-2',
      type: 'text',
      content: `**Verktøy for digital kunst**

**Programvare**:
- Adobe Photoshop / Fresco: Profesjonell standard
- Procreate (iPad): Populær blant illustratører
- Clip Studio Paint: Populær for tegneserier
- Krita, GIMP: Gratis alternativer
- Adobe Illustrator, Inkscape: Vektorgrafikk

**Maskinvare**:
- Tegnebrett (Wacom, Huion)
- iPad med Apple Pencil
- Grafiske skjermer (Wacom Cintiq)`,
    },
    {
      id: 'kunst-9-5-1-text-3',
      type: 'text',
      content: `**Grunnleggende digitale teknikker**

- **Lag (Layers)**: Arbeid på separate nivåer som kan redigeres individuelt
- **Pensler (Brushes)**: Digital simulering av ulike verktøy
- **Blandingsmoder**: Hvordan farger på ulike lag påvirker hverandre
- **Masker**: Skjule deler av et lag uten å slette
- **Bezier-kurver**: Grunnlaget for vektorgrafikk`,
    },
    {
      id: 'kunst-9-5-1-text-4',
      type: 'text',
      content: `**Arbeidsflyt i digital illustrasjon**

1. **Skisse**: Rough tegning, ofte på eget lag
2. **Lineart**: Rene linjer over skissen
3. **Flatefarger**: Grunnfargene på separate lag
4. **Skygge og lys**: Legge til volum
5. **Detaljer**: Tekstur, høylys, finpuss
6. **Eksport**: Lagre i riktig format (PSD, PNG, JPG, SVG)`,
    },
    {
      id: 'kunst-9-5-1-tip-1',
      type: 'tip',
      title: 'Navngiving av lag',
      content: `Gi lagene dine beskrivende navn ("Skygge ansikt", "Bakgrunn himmel"). Komplekse illustrasjoner kan ha hundrevis av lag - god organisering er essensielt.`,
    },
    {
      id: 'kunst-9-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fordelen med vektorgrafikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kan skaleres uendelig uten kvalitetstap',
            multipleChoiceOptions: ['Kan skaleres uendelig uten kvalitetstap', 'Bedre for fotografier', 'Mindre filstørrelse alltid', 'Enklere å lære'],
          },
        ],
        solution: 'Vektorgrafikk er bygget av matematiske formler, ikke piksler, og kan derfor forstørres til hvilken som helst størrelse uten å bli pikselert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er lag (layers) i digital kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Separate nivåer som kan redigeres individuelt',
            multipleChoiceOptions: ['Separate nivåer som kan redigeres individuelt', 'Forskjellige penseltyper', 'Ulike farger', 'Filter for bilder'],
          },
        ],
        solution: 'Lag fungerer som gjennomsiktige ark stablet oppå hverandre. Du kan tegne og redigere hvert lag separat uten å påvirke de andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket program er populært for digital illustrasjon på iPad?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Procreate',
            multipleChoiceOptions: ['Procreate', 'Microsoft Word', 'Excel', 'PowerPoint'],
          },
        ],
        solution: 'Procreate er et populært og kraftig tegneprogram designet spesielt for iPad og Apple Pencil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en maske i digital bildebehandling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En måte å skjule deler av et lag uten å slette',
            multipleChoiceOptions: ['En måte å skjule deler av et lag uten å slette', 'Et filter som endrer farger', 'En type pensel', 'Et filformat'],
          },
        ],
        solution: 'En maske lar deg skjule deler av et lag uten å slette dem permanent. Du kan alltid vise de skjulte delene igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_9_5_2: TextbookChapter = {
  id: 'kunst-9-5-2',
  courseId: 'kunst-9',
  chapterNumber: '5.2',
  title: 'Film og animasjon',
  description: 'Introduksjon til bevegelige bilder og animasjonsteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale verktøy til å visualisere ideer',
    'utforske fortellerteknikker i bevegelige bilder',
  ],
  content: [
    {
      id: 'kunst-9-5-2-intro',
      type: 'text',
      content: `Film og animasjon er kunstformer som bruker bevegelse og tid for å fortelle historier og formidle ideer. Fra enkle flipbooks til avansert 3D-animasjon handler det om å skape illusjonen av liv.`,
    },
    {
      id: 'kunst-9-5-2-def-1',
      type: 'definition',
      title: 'Animasjon',
      content: `Animasjon er kunsten å skape illusjonen av bevegelse ved å vise en serie stillbilder raskt etter hverandre. Standard er 24 bilder (frames) per sekund for film.`,
    },
    {
      id: 'kunst-9-5-2-text-2',
      type: 'text',
      content: `**Animasjonsteknikker**

- **Tradisjonell (cel)**: Håndtegnede bilder, frame by frame
- **Stop motion**: Fysiske objekter flyttes litt for hvert bilde
- **Rotoskopi**: Tegne over filmopptak
- **2D digital**: Frame-by-frame eller rigg-basert
- **3D CGI**: Dataanimerte modeller i virtuelt rom
- **Motion graphics**: Animert grafikk og tekst`,
    },
    {
      id: 'kunst-9-5-2-text-3',
      type: 'text',
      content: `**Animasjonsprinsipper**

De 12 grunnleggende prinsippene (utviklet av Disney):
1. **Squash & Stretch**: Deformasjon gir liv og vekt
2. **Anticipation**: Forberedelse før handling
3. **Staging**: Klar presentasjon av ideen
4. **Straight Ahead / Pose to Pose**: To arbeidsmetoder
5. **Follow Through / Overlapping**: Etterslep i bevegelse
6. **Slow In / Slow Out**: Akselerasjon og bremsing
7. **Arc**: Naturlige, buede bevegelser
8. **Secondary Action**: Støttende handlinger
9. **Timing**: Antall bilder påvirker følelse
10. **Exaggeration**: Overdrivelse for effekt
11. **Solid Drawing**: God tegneteknikk
12. **Appeal**: Karismatiske karakterer`,
    },
    {
      id: 'kunst-9-5-2-text-4',
      type: 'text',
      content: `**Filmspråk**

Grunnleggende begreper:
- **Shot**: Enkeltopptak mellom to klipp
- **Establishing shot**: Viser sted/kontekst
- **Close-up**: Nærbilder av ansikt/objekt
- **Cut**: Direkte overgang mellom shots
- **Fade**: Gradvis overgang til/fra svart
- **Montasje**: Sekvens av shots som viser tid/utvikling
- **POV (Point of View)**: Kameraet er karakterens øyne`,
    },
    {
      id: 'kunst-9-5-2-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Lag en flipbook eller en kort GIF-animasjon før du går videre til komplekse prosjekter. Selv 10-15 tegninger kan lære deg grunnleggende timing og bevegelse.`,
    },
    {
      id: 'kunst-9-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange bilder per sekund er standard for filmanimasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '24 bilder',
            multipleChoiceOptions: ['24 bilder', '10 bilder', '60 bilder', '100 bilder'],
          },
        ],
        solution: '24 bilder (frames) per sekund er filmstandarden. Det gir jevn bevegelse mens det holder antall tegninger overkommelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er stop motion?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fysiske objekter flyttes litt for hvert bilde',
            multipleChoiceOptions: ['Fysiske objekter flyttes litt for hvert bilde', 'Digital 3D-animasjon', 'Tegning over filmopptak', 'Animert tekst og grafikk'],
          },
        ],
        solution: 'Stop motion innebærer å fotografere fysiske objekter (dukker, leirfigurer, etc.) som flyttes litt mellom hvert bilde for å skape bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er "squash and stretch" i animasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Deformasjon av objekter for å gi følelse av vekt og liv',
            multipleChoiceOptions: ['Deformasjon av objekter for å gi følelse av vekt og liv', 'En kameravinkel', 'En type overgang', 'Bakgrunnsmusikk'],
          },
        ],
        solution: 'Squash and stretch er et animasjonsprinsipp der objekter deformeres for å vise vekt, materiale og energi - som en ball som trykkes sammen når den lander.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-9-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-9-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en establishing shot?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et bilde som viser hvor handlingen foregår',
            multipleChoiceOptions: ['Et bilde som viser hvor handlingen foregår', 'Et nærbilde av ansikt', 'En overgang til svart', 'Sluttscenen i en film'],
          },
        ],
        solution: 'En establishing shot er et vidvinklet bilde som etablerer scenen ved å vise stedet der handlingen skal foregå, for eksempel et bylanskap før vi går inn i en bygning.',
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

export const KUNST_9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_9_1_1,
  CHAPTER_KUNST_9_1_2,
  CHAPTER_KUNST_9_2_1,
  CHAPTER_KUNST_9_2_2,
  CHAPTER_KUNST_9_3_1,
  CHAPTER_KUNST_9_3_2,
  CHAPTER_KUNST_9_4_1,
  CHAPTER_KUNST_9_4_2,
  CHAPTER_KUNST_9_5_1,
  CHAPTER_KUNST_9_5_2,
];
