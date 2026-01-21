/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Mat og helse 6. klasse - Kapittelinnhold
 *
 * Fullstendig innhold for alle kapitler med teori, definisjoner, eksempler og oppgaver.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: ERNÆRING
// ============================================================================

export const CHAPTER_MAT_6_1_1: TextbookChapter = {
  id: 'mat-6-1-1',
  courseId: 'mat-6',
  chapterNumber: '1.1',
  title: 'Næringsstoffer',
  description: 'Lær om karbohydrater, proteiner, fett, vitaminer og mineraler.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['forklare sammenhengen mellom mat, ernæring og helse'],
  content: [
    {
      id: 'mat-6-1-1-intro',
      type: 'text',
      content: `## Næring for kroppen

Maten vi spiser inneholder næringsstoffer som kroppen trenger for å fungere. Akkurat som en bil trenger bensin, trenger kroppen din mat for å ha energi og holde seg frisk.

### De viktigste næringsstoffene:
- Karbohydrater - gir energi
- Proteiner - bygger og reparerer kroppen
- Fett - lagrer energi og beskytter organer
- Vitaminer og mineraler - holder kroppen frisk
- Vann - nødvendig for alle kroppens funksjoner`
    },
    {
      id: 'mat-6-1-1-def-1',
      type: 'definition',
      title: 'Næringsstoffer',
      content: 'Stoffer i maten som kroppen trenger for å fungere, vokse og holde seg frisk. De viktigste næringsstoffene er karbohydrater, proteiner, fett, vitaminer, mineraler og vann.'
    },
    {
      id: 'mat-6-1-1-text-2',
      type: 'text',
      content: `## Karbohydrater

Karbohydrater er kroppens viktigste energikilde. De omdannes til glukose (blodsukker) som cellene bruker som drivstoff.

### Enkle karbohydrater (sukker):
- Finnes i godteri, brus, hvitt brød
- Tas opp raskt i blodet
- Gir rask, kortvarig energi

### Sammensatte karbohydrater (stivelse og fiber):
- Finnes i fullkorn, grønnsaker, belgfrukter
- Tas opp saktere i blodet
- Gir jevn, langvarig energi
- Fiber er viktig for fordøyelsen`
    },
    {
      id: 'mat-6-1-1-text-3',
      type: 'text',
      content: `## Proteiner

Proteiner er byggestoffer som kroppen bruker til å lage nye celler, muskler, hår og negler.

### Gode proteinkilder:
- Kjøtt, fisk og egg
- Melk og ost
- Bønner, linser og nøtter
- Tofu og andre soyaprodukter

Barn trenger proteiner for å vokse!`
    },
    {
      id: 'mat-6-1-1-text-4',
      type: 'text',
      content: `## Fett

Fett har flere viktige funksjoner i kroppen:
- Lagrer energi til senere bruk
- Beskytter organer
- Hjelper kroppen ta opp vitaminer

### Sunt fett:
- Finnes i fisk, nøtter, avokado, olivenolje
- Umettet fett - bra for hjertet

### Mindre sunt fett:
- Finnes i smør, fløte, fete kjøttprodukter
- Mettet fett - spis mindre av dette
- Transfett - unngå så langt som mulig`
    },
    {
      id: 'mat-6-1-1-text-5',
      type: 'text',
      content: `## Vitaminer og mineraler

Vitaminer og mineraler trengs i små mengder, men er livsviktige for kroppen.

### Viktige vitaminer:
- **Vitamin A** - godt syn (gulrøtter, egg)
- **Vitamin C** - immunforsvar (sitrus, paprika)
- **Vitamin D** - sterke knokler (sollys, fisk)

### Viktige mineraler:
- **Kalsium** - sterke tenner og knokler (melk, ost)
- **Jern** - frakt av oksygen i blodet (kjøtt, spinat)
- **Sink** - sårtilheling (kjøtt, nøtter)`
    },
    {
      id: 'mat-6-1-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kroppens viktigste energikilde?',
        solution: 'Karbohydrater',
        multipleChoiceOptions: [
          { id: 'a', text: 'Proteiner', isCorrect: false },
          { id: 'b', text: 'Karbohydrater', isCorrect: true },
          { id: 'c', text: 'Vitaminer', isCorrect: false },
          { id: 'd', text: 'Mineraler', isCorrect: false }
        ],
        hints: ['Tenk på hva som gir deg energi til å løpe og leke'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-2',
        number: '1.1.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva bruker kroppen proteiner til?',
        solution: 'Kroppen bruker proteiner som byggestoffer til å lage nye celler, muskler, hår og negler. Proteiner hjelper også med å reparere vev.',
        hints: ['Tenk på at kroppen hele tiden bygger og reparerer seg'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-3',
        number: '1.1.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Nevn tre gode kilder til sunt fett.',
        solution: 'Tre gode kilder til sunt fett er: fisk (som laks og makrell), nøtter (som mandler og valnøtter), og avokado. Andre eksempler er olivenolje og frø.',
        hints: ['Tenk på matvarer fra havet og fra planter'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-4',
        number: '1.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket vitamin er viktig for immunforsvaret?',
        solution: 'Vitamin C',
        multipleChoiceOptions: [
          { id: 'a', text: 'Vitamin A', isCorrect: false },
          { id: 'b', text: 'Vitamin C', isCorrect: true },
          { id: 'c', text: 'Vitamin D', isCorrect: false },
          { id: 'd', text: 'Vitamin K', isCorrect: false }
        ],
        hints: ['Dette vitaminet finnes i sitrusfrukter og paprika'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-5',
        number: '1.1.5',
        type: 'practical',
        difficulty: 'medium',
        task: 'Lag en oversikt over hva du spiste i går og hvilke næringsstoffer maten inneholdt.',
        subTasks: [
          'Skriv ned alle måltidene du spiste i går',
          'For hvert måltid, identifiser hovedkildene til karbohydrater',
          'Finn proteinkilder i måltidene',
          'Noter om du fikk i deg frukt og grønnsaker (vitaminer)'
        ],
        solution: 'Oversikten skal vise varierte matvarer med ulike næringsstoffer fra alle hovedgruppene.',
        hints: ['Tenk på frokost, lunsj, middag og mellommåltider'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-6',
        number: '1.1.6',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hva er forskjellen på enkle og sammensatte karbohydrater?',
        solution: 'Enkle karbohydrater (sukker) tas opp raskt i blodet og gir rask, kortvarig energi. De finnes i godteri og brus. Sammensatte karbohydrater (stivelse og fiber) tas opp saktere og gir jevn, langvarig energi. De finnes i fullkorn og grønnsaker.',
        hints: ['Tenk på hvordan energien frigjøres - raskt eller sakte'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-7',
        number: '1.1.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket mineral er viktig for sterke knokler og tenner?',
        solution: 'Kalsium',
        multipleChoiceOptions: [
          { id: 'a', text: 'Jern', isCorrect: false },
          { id: 'b', text: 'Kalsium', isCorrect: true },
          { id: 'c', text: 'Sink', isCorrect: false },
          { id: 'd', text: 'Magnesium', isCorrect: false }
        ],
        hints: ['Du finner mye av dette i melk og ost'],
      }
    },
    {
      id: 'mat-6-1-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-1-ex-8',
        number: '1.1.8',
        type: 'short-answer',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det viktig å få i seg fiber?',
        solution: 'Fiber er viktig for fordøyelsen. Det hjelper maten å bevege seg gjennom tarmen og forebygger forstoppelse. Fiber gir også metthetsfølelse og bidrar til stabil blodsukker.',
        hints: ['Tenk på hva som skjer i magen og tarmene'],
      }
    }
  ],
};

export const CHAPTER_MAT_6_1_2: TextbookChapter = {
  id: 'mat-6-1-2',
  courseId: 'mat-6',
  chapterNumber: '1.2',
  title: 'Et balansert kosthold',
  description: 'Forstå hva som utgjør et balansert og sunt kosthold.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['sette sammen måltider basert på kostholdsråd'],
  content: [
    {
      id: 'mat-6-1-2-intro',
      type: 'text',
      content: `## Hva er et balansert kosthold?

Et balansert kosthold betyr at du spiser variert mat som gir kroppen alle næringsstoffene den trenger. Det handler ikke om å spise perfekt hver dag, men om å ha gode vaner over tid.

### De norske kostholdsrådene sier:
- Spis mye grønnsaker, frukt og bær
- Velg grove kornprodukter
- Spis fisk 2-3 ganger i uken
- Velg magre meieriprodukter
- Begrens rødt kjøtt og bearbeidet kjøtt
- Velg matoljer i stedet for hard margarin og smør
- Drikk vann`
    },
    {
      id: 'mat-6-1-2-def-1',
      type: 'definition',
      title: 'Tallerkenmodellen',
      content: 'En enkel guide for å sette sammen sunne måltider: halve tallerkenen med grønnsaker, en fjerdedel med kornprodukter/poteter, og en fjerdedel med proteinkilde som fisk, kjøtt eller belgfrukter.'
    },
    {
      id: 'mat-6-1-2-text-2',
      type: 'text',
      content: `## Tallerkenmodellen

Tallerkenmodellen er en enkel måte å lage sunne måltider:

### Grønnsaker (1/2 av tallerkenen):
- Salat, tomater, agurk
- Brokkoli, gulrøtter, paprika
- Rå eller kokte grønnsaker

### Kornprodukter (1/4 av tallerkenen):
- Ris, pasta, brød
- Poteter
- Velg gjerne grove varianter

### Proteinkilde (1/4 av tallerkenen):
- Fisk, kylling, kjøtt
- Egg
- Bønner, linser, tofu`
    },
    {
      id: 'mat-6-1-2-text-3',
      type: 'text',
      content: `## Regelmessige måltider

Det er viktig å spise regelmessig gjennom dagen:

### En typisk dag:
- **Frokost** - start dagen med energi
- **Lunsj** - hold energien oppe midt på dagen
- **Middag** - hovedmåltidet
- **Mellommåltid** - frukt, grønnsaker eller yoghurt

### Hvorfor regelmessige måltider?
- Holder blodsukkeret stabilt
- Gir jevn energi gjennom dagen
- Forebygger overspising
- Hjelper konsentrasjonen på skolen`
    },
    {
      id: 'mat-6-1-2-text-4',
      type: 'text',
      content: `## Drikke

Vann er den beste tørstedrikken!

### Hvorfor er vann viktig?
- Kroppen består av ca. 60% vann
- Nødvendig for alle kroppens funksjoner
- Holder temperaturen stabil
- Transporterer næringsstoffer

### Hvor mye bør du drikke?
- Ca. 1-1,5 liter vann per dag
- Mer når det er varmt eller du er aktiv
- Melk til måltider er også bra

### Begrens:
- Brus og saft (mye sukker)
- Energidrikker (ikke egnet for barn)`
    },
    {
      id: 'mat-6-1-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor stor del av tallerkenen bør være grønnsaker ifølge tallerkenmodellen?',
        solution: 'Halve tallerkenen',
        multipleChoiceOptions: [
          { id: 'a', text: 'En fjerdedel', isCorrect: false },
          { id: 'b', text: 'Halve tallerkenen', isCorrect: true },
          { id: 'c', text: 'Tre fjerdedeler', isCorrect: false },
          { id: 'd', text: 'Det spiller ingen rolle', isCorrect: false }
        ],
        hints: ['Det er den største delen av tallerkenen'],
      }
    },
    {
      id: 'mat-6-1-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-2',
        number: '1.2.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er den beste tørstedrikken?',
        solution: 'Vann er den beste tørstedrikken. Det inneholder ingen kalorier eller sukker og er nødvendig for alle kroppens funksjoner.',
        hints: ['Det er gratis fra springen'],
      }
    },
    {
      id: 'mat-6-1-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-3',
        number: '1.2.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Planlegg en middag ved hjelp av tallerkenmodellen.',
        subTasks: [
          'Velg en proteinkilde (fisk, kjøtt eller vegetar)',
          'Velg grønnsaker som dekker halve tallerkenen',
          'Velg en korn- eller potetsort',
          'Tegn opp tallerkenen din'
        ],
        solution: 'Eksempel: Grillet kylling (1/4), ris (1/4), og en stor salat med tomat, agurk og paprika (1/2).',
        hints: ['Tenk på farger - jo flere farger på tallerkenen, jo bedre!'],
      }
    },
    {
      id: 'mat-6-1-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-4',
        number: '1.2.4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor er det viktig å spise frokost?',
        solution: 'Frokost gir deg energi til å starte dagen. Det hjelper deg å konsentrere deg på skolen, holder blodsukkeret stabilt og forebygger at du blir for sulten og overspiser senere.',
        hints: ['Tenk på hvordan du føler deg når du ikke har spist'],
      }
    },
    {
      id: 'mat-6-1-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-5',
        number: '1.2.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en ukes måltidsplan for deg selv.',
        subTasks: [
          'Planlegg frokost, lunsj og middag for 7 dager',
          'Sørg for variasjon - ikke samme mat hver dag',
          'Inkluder fisk minst 2 ganger',
          'Ha grønnsaker til hvert måltid'
        ],
        solution: 'Måltidsplanen skal vise variasjon, fisk 2-3 ganger i uken, og grønnsaker til de fleste måltider.',
        hints: ['Start med middagene, de er ofte lettest å planlegge'],
      }
    },
    {
      id: 'mat-6-1-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-2-ex-6',
        number: '1.2.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor ofte bør du spise fisk ifølge kostholdsrådene?',
        solution: '2-3 ganger i uken',
        multipleChoiceOptions: [
          { id: 'a', text: 'Hver dag', isCorrect: false },
          { id: 'b', text: '2-3 ganger i uken', isCorrect: true },
          { id: 'c', text: 'En gang i måneden', isCorrect: false },
          { id: 'd', text: 'Aldri', isCorrect: false }
        ],
        hints: ['Det er midt på treet - ikke for ofte, ikke for sjelden'],
      }
    }
  ],
};

export const CHAPTER_MAT_6_1_3: TextbookChapter = {
  id: 'mat-6-1-3',
  courseId: 'mat-6',
  chapterNumber: '1.3',
  title: 'Matmerking',
  description: 'Lær å lese og forstå innholdsfortegnelser på matvarer.',
  estimatedMinutes: 30,
  exercises: [],
  competenceGoals: ['lese og tolke informasjon om matvarer'],
  content: [
    {
      id: 'mat-6-1-3-intro',
      type: 'text',
      content: `## Forstå matvaremerking

På alle ferdigpakkede matvarer finner du informasjon om hva produktet inneholder. Ved å lære å lese denne informasjonen kan du ta bedre valg om hva du spiser.

### Hva finner du på pakken?
- Ingrediensliste - hva maten er laget av
- Næringsinnhold - hvor mye energi og næringsstoffer
- Holdbarhetsdato - hvor lenge maten holder seg
- Allergiinformasjon - advarsler om allergener`
    },
    {
      id: 'mat-6-1-3-def-1',
      type: 'definition',
      title: 'Ingrediensliste',
      content: 'En liste over alle ingrediensene i et produkt, sortert etter mengde. Den ingrediensen det er mest av kommer først.'
    },
    {
      id: 'mat-6-1-3-text-2',
      type: 'text',
      content: `## Ingredienslisten

Ingredienslisten forteller deg hva maten er laget av.

### Slik leser du den:
1. Ingrediensene er listet opp etter mengde - mest først
2. Hvis sukker står tidlig, er det mye sukker i produktet
3. Allergener (som melk, egg, nøtter) er ofte uthevet

### Eksempel - morgenmuesli:
"Havregryn, sukker, honning, solsikkefrø, kokosnøtt..."
- Havregryn er hovedingrediensen (bra!)
- Sukker er nest mest (pass på!)
- Flere ingredienser betyr ofte mer bearbeidet mat`
    },
    {
      id: 'mat-6-1-3-text-3',
      type: 'text',
      content: `## Næringsinnhold

Næringsinnholdet viser hvor mye energi og næringsstoffer produktet inneholder.

### Det viser vanligvis:
- **Energi** - i kilojoule (kJ) og kilokalorier (kcal)
- **Fett** - inkludert mettet fett
- **Karbohydrater** - inkludert sukkerarter
- **Protein**
- **Salt**

### Per 100 gram vs. per porsjon:
- Per 100 gram gjør det lett å sammenligne produkter
- Per porsjon viser hva du faktisk får i deg
- Sjekk hvor stor en porsjon er!`
    },
    {
      id: 'mat-6-1-3-text-4',
      type: 'text',
      content: `## Merkeordninger

Det finnes flere merker som hjelper deg å velge sunt:

### Nøkkelhullet:
- Norsk/nordisk merke for sunnere valg
- Produktet har mindre fett, sukker og salt
- Mer fiber og fullkorn

### Anbefalt daglig inntak:
- Viser hvor mye av daglig behov produktet dekker
- For eksempel "25% av anbefalt daglig inntak av vitamin C"

### Økologisk merke:
- Viser at produktet er dyrket/laget økologisk
- Debio-merket brukes i Norge`
    },
    {
      id: 'mat-6-1-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-3-ex-1',
        number: '1.3.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvordan er ingrediensene i en ingrediensliste sortert?',
        solution: 'Ingrediensene er sortert etter mengde. Den ingrediensen det er mest av, kommer først på listen.',
        hints: ['Tenk på hva som er viktigst å vite - hva det er mest av'],
      }
    },
    {
      id: 'mat-6-1-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-3-ex-2',
        number: '1.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr Nøkkelhullet på en matvare?',
        solution: 'At produktet er et sunnere valg med mindre fett, sukker og salt',
        multipleChoiceOptions: [
          { id: 'a', text: 'At produktet er vegetarisk', isCorrect: false },
          { id: 'b', text: 'At produktet er et sunnere valg med mindre fett, sukker og salt', isCorrect: true },
          { id: 'c', text: 'At produktet er økologisk', isCorrect: false },
          { id: 'd', text: 'At produktet er laget i Norge', isCorrect: false }
        ],
        hints: ['Det er et grønt merke som viser et sunnere valg'],
      }
    },
    {
      id: 'mat-6-1-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-3-ex-3',
        number: '1.3.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Sammenlign ingredienslistene på to lignende produkter (f.eks. to typer frokostblanding).',
        subTasks: [
          'Finn to produkter av samme type',
          'Les ingredienslisten på begge',
          'Noter hvor sukker står på listen',
          'Konkluder hvilket produkt som virker sunnest'
        ],
        solution: 'Det produktet der sukker står lenger ned på listen (eller ikke er med) er vanligvis det sunnere valget.',
        hints: ['Ta med deg to pakker fra kjøkkenskap eller butikk'],
      }
    },
    {
      id: 'mat-6-1-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-3-ex-4',
        number: '1.3.4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor er det nyttig at næringsinnholdet vises "per 100 gram"?',
        solution: 'Når næringsinnholdet vises per 100 gram, blir det lett å sammenligne ulike produkter direkte med hverandre. Du kan se hvilket produkt som har mest protein, minst sukker osv.',
        hints: ['Tenk på hva som skjer hvis porsjonstørrelsene er forskjellige'],
      }
    },
    {
      id: 'mat-6-1-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-1-3-ex-5',
        number: '1.3.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Les næringsinnholdet på en matvare og regn ut hvor mye sukker du får i en porsjon.',
        subTasks: [
          'Finn en matvare med næringsdeklarasjon',
          'Finn sukkerinnholdet per 100 gram',
          'Bestem hvor stor en porsjon er for deg',
          'Regn ut sukkerinnholdet i din porsjon'
        ],
        solution: 'For eksempel: Hvis det er 10 g sukker per 100 g og du spiser 50 g, får du 5 g sukker.',
        hints: ['Bruk prosentregning eller forholdstall'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 2: MATTEKNIKKER
// ============================================================================

export const CHAPTER_MAT_6_2_1: TextbookChapter = {
  id: 'mat-6-2-1',
  courseId: 'mat-6',
  chapterNumber: '2.1',
  title: 'Grunnleggende teknikker',
  description: 'Lær å kutte, blande, steke og koke på en trygg måte.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['bruke ulike tilberedningsmåter'],
  content: [
    {
      id: 'mat-6-2-1-intro',
      type: 'text',
      content: `## Bli trygg på kjøkkenet

Matlaging er en viktig ferdighet som alle kan lære! Ved å mestre noen grunnleggende teknikker kan du lage mat som er både god og sunn.

### De viktigste teknikkene:
- Kutteteknikker
- Koking
- Steking
- Blanding og røring`
    },
    {
      id: 'mat-6-2-1-def-1',
      type: 'definition',
      title: 'Tilberedningsteknikk',
      content: 'En metode for å klargjøre eller lage mat. Ulike teknikker brukes til ulike matvarer og gir forskjellig resultat.'
    },
    {
      id: 'mat-6-2-1-text-2',
      type: 'text',
      content: `## Kutteteknikker

### Slik holder du kniven trygt:
1. Grip knivskaftet godt
2. Legg pekefinger og tommel på bladet for kontroll
3. Hold maten med den andre hånden - fingertuppene bøyd inn
4. Kutt bort fra kroppen

### Vanlige kutt:
- **Skiver** - tynne, flate biter (til agurk, løk)
- **Terninger** - små kuber (til grønnsaker i suppe)
- **Strimler** - lange, tynne biter (til wok)
- **Hakking** - veldig fint kuttet (til hvitløk, urter)`
    },
    {
      id: 'mat-6-2-1-text-3',
      type: 'text',
      content: `## Koking

Koking betyr å varme mat i vann som bobler.

### Slik koker du:
1. Fyll en kjele med vann
2. Sett på høy varme til vannet koker (bobler)
3. Legg i maten
4. Senk varmen til middels
5. Kok til maten er ferdig

### Koketider (ca.):
- Pasta: 8-12 minutter
- Ris: 15-20 minutter
- Poteter: 15-25 minutter (avhengig av størrelse)
- Egg: 4 min (bløtkokt), 8-10 min (hardkokt)
- Grønnsaker: 5-15 minutter`
    },
    {
      id: 'mat-6-2-1-text-4',
      type: 'text',
      content: `## Steking

Steking gir maten en fin brun overflate og god smak.

### Slik steker du:
1. Varm opp stekepannen på middels/høy varme
2. Ha i litt olje eller smør
3. Legg maten i pannen når oljen er varm
4. Ikke flytt på maten for ofte - la den bli brun
5. Snu når undersiden er gyllenbrun

### Tips:
- Tørk av maten med papir før steking (hindrer spruting)
- Ikke overfyll pannen - maten skal ha plass
- La kjøtt hvile litt etter steking`
    },
    {
      id: 'mat-6-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan bør du holde maten når du kutter?',
        solution: 'Med fingertuppene bøyd inn (kloen)',
        multipleChoiceOptions: [
          { id: 'a', text: 'Med fingrene strukket ut', isCorrect: false },
          { id: 'b', text: 'Med fingertuppene bøyd inn (kloen)', isCorrect: true },
          { id: 'c', text: 'Uten å holde i maten', isCorrect: false },
          { id: 'd', text: 'Med hånden oppå maten', isCorrect: false }
        ],
        hints: ['Det handler om å beskytte fingrene'],
      }
    },
    {
      id: 'mat-6-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-2',
        number: '2.1.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvor lang tid tar det omtrent å koke pasta?',
        solution: 'Det tar omtrent 8-12 minutter å koke pasta. Sjekk pakken for nøyaktig tid, og test at pastaen er "al dente" (fast i midten).',
        hints: ['Det er under 15 minutter'],
      }
    },
    {
      id: 'mat-6-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-3',
        number: '2.1.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor bør du tørke av maten før du steker den?',
        solution: 'Du bør tørke av maten for å hindre spruting når den legges i den varme oljen/smøret. Vann som treffer varm olje spruter, og det kan være farlig og gjøre stekeflaten sølete.',
        hints: ['Tenk på hva som skjer når vann møter varm olje'],
      }
    },
    {
      id: 'mat-6-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-4',
        number: '2.1.4',
        type: 'practical',
        difficulty: 'medium',
        task: 'Øv på å kutte en gulrot i terninger.',
        subTasks: [
          'Vask og skrell gulroten',
          'Kutt først i skiver (ca. 1 cm tykke)',
          'Kutt skivene i strimler',
          'Kutt strimlene i terninger'
        ],
        solution: 'Terningene skal være noenlunde like store (ca. 1 cm) for jevn koking.',
        hints: ['Ta deg god tid og fokuser på sikkerhet'],
      }
    },
    {
      id: 'mat-6-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-5',
        number: '2.1.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Kok et egg til det er hardkokt.',
        subTasks: [
          'Legg egget forsiktig i kaldt vann',
          'Sett på høy varme til vannet koker',
          'Senk varmen og la koke i 8-10 minutter',
          'Kjøl egget i kaldt vann',
          'Skrell og sjekk resultatet'
        ],
        solution: 'Et hardkokt egg skal ha fast plomme helt gjennom, uten grønn ring rundt plommen.',
        hints: ['Kaldt vann etterpå gjør egget lettere å skrelle'],
      }
    },
    {
      id: 'mat-6-2-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-1-ex-6',
        number: '2.1.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor bør du ikke overfylle stekepannen?',
        solution: 'Maten trenger plass for å bli skikkelig brunet',
        multipleChoiceOptions: [
          { id: 'a', text: 'Det ser stygt ut', isCorrect: false },
          { id: 'b', text: 'Maten trenger plass for å bli skikkelig brunet', isCorrect: true },
          { id: 'c', text: 'Pannen kan knekke', isCorrect: false },
          { id: 'd', text: 'Det bruker mer strøm', isCorrect: false }
        ],
        hints: ['Tenk på hva som skjer med varmen og dampen'],
      }
    }
  ],
};

export const CHAPTER_MAT_6_2_2: TextbookChapter = {
  id: 'mat-6-2-2',
  courseId: 'mat-6',
  chapterNumber: '2.2',
  title: 'Baking',
  description: 'Lær grunnleggende baketeknikker for brød, boller og kaker.',
  estimatedMinutes: 55,
  exercises: [],
  competenceGoals: ['lage mat ved å følge oppskrifter'],
  content: [
    {
      id: 'mat-6-2-2-intro',
      type: 'text',
      content: `## Å bake

Baking er en blanding av kunst og vitenskap. Med riktige ingredienser og teknikk kan du lage herlig brød, boller og kaker hjemme.

### Grunnleggende bakeingredienser:
- **Mel** - strukturen i bakverket
- **Væske** - vann, melk eller egg
- **Gjær eller bakepulver** - får deigen til å heve
- **Salt** - gir smak
- **Fett** - smør eller olje for mykhet`
    },
    {
      id: 'mat-6-2-2-def-1',
      type: 'definition',
      title: 'Gjær',
      content: 'Mikroorganismer som spiser sukker og produserer karbondioksid (gass). Gassen lager bobler i deigen og får den til å heve.'
    },
    {
      id: 'mat-6-2-2-text-2',
      type: 'text',
      content: `## Å jobbe med gjærdeig

### Slik lager du gjærdeig:
1. **Løs opp gjæren** - i lunkent vann eller melk (ca. 37°C)
2. **Tilsett ingredienser** - sukker, salt, smør, mel
3. **Elt deigen** - til den er smidig og glatt
4. **Heving** - la deigen hvile på varmt sted
5. **Form bakverket** - brød, boller eller annet
6. **Andre heving** - la det formede bakverket heve
7. **Stek** - i forhåndsuoppvarmet ovn

### Tips for god gjærdeig:
- Væsken må være lunken, ikke for varm (dreper gjæren)
- Elt grundig - minst 10 minutter
- La deigen heve til dobbel størrelse
- Dekk til med klede under heving`
    },
    {
      id: 'mat-6-2-2-text-3',
      type: 'text',
      content: `## Elting

Elting utvikler glutenet i melet, som gjør brødet seigt og elastisk.

### Slik elter du:
1. Legg deigen på et melt underlag
2. Trykk ned med håndflaten
3. Brett deigen mot deg
4. Snu den en kvart omdreining
5. Gjenta i 10-15 minutter

### Hvordan vet du at du har eltet nok?
- Deigen er glatt og smidig
- Den er ikke lenger klebrig
- Den spretter tilbake når du trykker på den
- Du kan strekke den tynn uten at den ryker (vindustesten)`
    },
    {
      id: 'mat-6-2-2-text-4',
      type: 'text',
      content: `## Bakepulver vs. gjær

### Bakepulver:
- Virker raskt - deigen må stekes med en gang
- Brukes i kaker, muffins, pannekaker
- Reagerer med væske og varme

### Gjær:
- Trenger tid til å jobbe - heving
- Brukes i brød, boller, pizza
- Trenger varme for å aktiveres

### Natron:
- Må kombineres med noe surt (kefir, sitron)
- Brukes i noen kaker og kjeks`
    },
    {
      id: 'mat-6-2-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-2-ex-1',
        number: '2.2.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva gjør gjær i en deig?',
        solution: 'Gjær spiser sukker og produserer karbondioksid (gass). Gassen lager bobler i deigen og får den til å heve, slik at brødet blir luftig.',
        hints: ['Tenk på hva som får deigen til å vokse'],
      }
    },
    {
      id: 'mat-6-2-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan bør væsken være når du løser opp gjær?',
        solution: 'Lunken (ca. 37°C)',
        multipleChoiceOptions: [
          { id: 'a', text: 'Iskald', isCorrect: false },
          { id: 'b', text: 'Lunken (ca. 37°C)', isCorrect: true },
          { id: 'c', text: 'Kokende', isCorrect: false },
          { id: 'd', text: 'Romtemperert', isCorrect: false }
        ],
        hints: ['Tenk på kroppstemperatur'],
      }
    },
    {
      id: 'mat-6-2-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-2-ex-3',
        number: '2.2.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor elter vi brøddeig?',
        solution: 'Vi elter for å utvikle glutenet i melet. Gluten gjør brødet seigt og elastisk, slik at det holder på gassene fra gjæren og blir luftig.',
        hints: ['Det handler om hva som skjer med melet'],
      }
    },
    {
      id: 'mat-6-2-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-2-ex-4',
        number: '2.2.4',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Bak enkle rundstykker.',
        subTasks: [
          'Følg en oppskrift på rundstykker',
          'Mål ingrediensene nøyaktig',
          'Elt deigen i 10-15 minutter',
          'La deigen heve til dobbel størrelse',
          'Form 8-10 rundstykker og la dem etterhe',
          'Stek ved 200°C i ca. 15 minutter'
        ],
        solution: 'Rundstykkene skal være gyllne utenpå og gjennomstekte inni. De skal høres hule ut når du banker på dem.',
        hints: ['Ha tålmodighet med hevingen - det tar tid!'],
      }
    },
    {
      id: 'mat-6-2-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-2-2-ex-5',
        number: '2.2.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva brukes bakepulver vanligvis til?',
        solution: 'Kaker, muffins og pannekaker',
        multipleChoiceOptions: [
          { id: 'a', text: 'Brød og boller', isCorrect: false },
          { id: 'b', text: 'Kaker, muffins og pannekaker', isCorrect: true },
          { id: 'c', text: 'Pizza', isCorrect: false },
          { id: 'd', text: 'Pasta', isCorrect: false }
        ],
        hints: ['Det er ting som stekes med en gang, uten heving'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 3: HYGIENE OG SIKKERHET
// ============================================================================

export const CHAPTER_MAT_6_3_1: TextbookChapter = {
  id: 'mat-6-3-1',
  courseId: 'mat-6',
  chapterNumber: '3.1',
  title: 'Mathygiene',
  description: 'Forstå viktigheten av god hygiene ved matlaging.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['praktisere god hygiene ved matlaging'],
  content: [
    {
      id: 'mat-6-3-1-intro',
      type: 'text',
      content: `## Hvorfor er hygiene viktig?

Dårlig hygiene kan føre til matforgiftning. Bakterier, virus og andre mikroorganismer kan formere seg i mat og gjøre oss syke. God hygiene forhindrer dette.

### Tegn på matforgiftning:
- Magesmerter
- Kvalme og oppkast
- Diaré
- Feber

De fleste blir friske etter noen dager, men det kan være alvorlig for noen.`
    },
    {
      id: 'mat-6-3-1-def-1',
      type: 'definition',
      title: 'Kryssforurensning',
      content: 'Når bakterier overføres fra en matvare til en annen, for eksempel fra rått kjøtt til salat via skjærefjøl eller hender.'
    },
    {
      id: 'mat-6-3-1-text-2',
      type: 'text',
      content: `## Håndvask

Hendene er den vanligste kilden til forurensning av mat.

### Vask hendene:
- Før du begynner å lage mat
- Etter å ha vært på toalettet
- Etter å ha tatt på rått kjøtt eller fisk
- Etter å ha hostet, nyst eller pusset nesen
- Etter å ha tatt på søppel eller dyr

### Slik vasker du:
1. Bruk varmt vann og såpe
2. Gni godt - mellom fingrene og under neglene
3. Vask i minst 20 sekunder (syng "Gratulerer med dagen" i hodet)
4. Skyll godt og tørk med rent håndkle`
    },
    {
      id: 'mat-6-3-1-text-3',
      type: 'text',
      content: `## Oppbevaring av mat

Riktig oppbevaring hindrer at maten blir dårlig.

### Kjøleskap (under 4°C):
- Rått kjøtt og fisk - nederst
- Meieriprodukter og egg
- Ferdig mat og matrester
- Frukt og grønnsaker - i skuff

### Fryseboks (under -18°C):
- Mat som skal holdes lenge
- Frys ned så fort som mulig
- Merk med dato

### Holdbarhet:
- Sjekk datomerking
- "Best før" - kan ofte spises litt lenger
- "Siste forbruksdag" - må kastes etter denne dato`
    },
    {
      id: 'mat-6-3-1-text-4',
      type: 'text',
      content: `## Rengjøring av kjøkkenet

Et rent kjøkken er et trygt kjøkken.

### Daglig rengjøring:
- Tørk av benker og bord etter bruk
- Vask opp oppvasken - la ikke den stå
- Tøm søpla regelmessig
- Bytt kluter og håndklær ofte

### Unngå kryssforurensning:
- Bruk ulike skjærefjøler for kjøtt og grønnsaker
- Vask fjøler, kniver og hender mellom bruk
- Hold rått kjøtt adskilt fra annen mat`
    },
    {
      id: 'mat-6-3-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lenge bør du vaske hendene?',
        solution: 'Minst 20 sekunder',
        multipleChoiceOptions: [
          { id: 'a', text: '5 sekunder', isCorrect: false },
          { id: 'b', text: 'Minst 20 sekunder', isCorrect: true },
          { id: 'c', text: '2 minutter', isCorrect: false },
          { id: 'd', text: 'Det spiller ingen rolle', isCorrect: false }
        ],
        hints: ['Syng "Gratulerer med dagen" i hodet'],
      }
    },
    {
      id: 'mat-6-3-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-2',
        number: '3.1.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er kryssforurensning?',
        solution: 'Kryssforurensning er når bakterier overføres fra en matvare til en annen, for eksempel fra rått kjøtt til salat via skjærefjøl eller hender.',
        hints: ['Det handler om bakterier som "krysser" over til annen mat'],
      }
    },
    {
      id: 'mat-6-3-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-3',
        number: '3.1.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor bør rått kjøtt oppbevares nederst i kjøleskapet?',
        solution: 'Rått kjøtt bør oppbevares nederst for å unngå at kjøttsaft drypper ned på annen mat. Kjøttsaft kan inneholde bakterier som kan forurense maten under.',
        hints: ['Tenk på hva som skjer hvis noe drypper'],
      }
    },
    {
      id: 'mat-6-3-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-4',
        number: '3.1.4',
        type: 'practical',
        difficulty: 'medium',
        task: 'Sjekk kjøleskapet hjemme for riktig organisering.',
        subTasks: [
          'Finn ut hvor rått kjøtt oppbevares',
          'Sjekk at meieriprodukter er kjølige nok',
          'Se etter utløpte produkter',
          'Foreslå forbedringer hvis nødvendig'
        ],
        solution: 'Rått kjøtt og fisk nederst, meieriprodukter i midten, grønnsaker i skuff. Ingenting som er utløpt.',
        hints: ['Ta bilder og sammenlign med rådene i læreboka'],
      }
    },
    {
      id: 'mat-6-3-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "Siste forbruksdag" på en matvare?',
        solution: 'At maten MÅ kastes etter denne datoen',
        multipleChoiceOptions: [
          { id: 'a', text: 'At maten er best å spise før denne datoen', isCorrect: false },
          { id: 'b', text: 'At maten MÅ kastes etter denne datoen', isCorrect: true },
          { id: 'c', text: 'At maten ble produsert denne datoen', isCorrect: false },
          { id: 'd', text: 'At maten bør oppbevares til denne datoen', isCorrect: false }
        ],
        hints: ['Det er strengere enn "best før"'],
      }
    },
    {
      id: 'mat-6-3-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-1-ex-6',
        number: '3.1.6',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Nevn tre tidspunkter når du bør vaske hendene på kjøkkenet.',
        solution: 'Du bør vaske hendene: 1) Før du begynner å lage mat, 2) Etter å ha tatt på rått kjøtt eller fisk, 3) Etter å ha vært på toalettet.',
        hints: ['Tenk på når hendene kan ha blitt skitne eller ha fått bakterier'],
      }
    }
  ],
};

export const CHAPTER_MAT_6_3_2: TextbookChapter = {
  id: 'mat-6-3-2',
  courseId: 'mat-6',
  chapterNumber: '3.2',
  title: 'Sikkerhet på kjøkkenet',
  description: 'Lær å jobbe trygt med kniver, varme og elektriske apparater.',
  estimatedMinutes: 30,
  exercises: [],
  competenceGoals: ['arbeide trygt og ryddig på kjøkkenet'],
  content: [
    {
      id: 'mat-6-3-2-intro',
      type: 'text',
      content: `## Et trygt kjøkken

Kjøkkenet kan være et farlig sted hvis vi ikke er forsiktige. Her lærer du å unngå ulykker med kniver, varme og strøm.

### Vanlige kjøkkenulykker:
- Kuttskader
- Brannskader
- Elektriske støt
- Fall`
    },
    {
      id: 'mat-6-3-2-text-2',
      type: 'text',
      content: `## Trygg bruk av kniv

### Før du bruker kniven:
- Bruk riktig kniv til jobben
- Sjekk at kniven er skarp (stumpe kniver er farligere)
- Ha et stabilt underlag (skjærefjøl)

### Når du kutter:
- Hold maten med klogrep (fingertuppene bøyd inn)
- Kutt bort fra kroppen
- Konsentrer deg - ikke se bort
- Hold kniven lavt og nær fjølen

### Etter bruk:
- Vask kniven med en gang
- Oppbevar kniver i knivblokk eller skuff
- Legg aldri kniv i oppvaskvann (usynlig og farlig)`
    },
    {
      id: 'mat-6-3-2-text-3',
      type: 'text',
      content: `## Brannsikkerhet

### Forebygging:
- Hold brennbare ting unna komfyren (håndklær, papir)
- Snu pannehandtak innover
- Vær til stede når mat stekes eller kokes
- Ha en brannslukkingsapparat eller slukketeppe tilgjengelig

### Hvis det brenner i en stekepanne:
1. IKKE bruk vann - det gjør det verre!
2. Legg lokk på pannen for å kvele ilden
3. Slå av varmen
4. La lokket ligge til pannen er avkjølt

### Ved brannskader:
- Kjøl med rennende, lunkent vann i 20 minutter
- Dekk med ren bandasje
- Søk legehjelp ved alvorlige skader`
    },
    {
      id: 'mat-6-3-2-text-4',
      type: 'text',
      content: `## Elektriske apparater

### Trygg bruk:
- Tørk hendene før du tar i elektriske apparater
- Trekk ut kontakten når apparatet ikke er i bruk
- Hold ledninger unna varme overflater
- Bruk aldri skadet utstyr

### Mikrobølgeovn:
- Bruk kun mikrobølgesikre beholdere
- Ikke ha metall i mikrobølgen
- La maten hvile litt etter oppvarming (ujevn varme)
- Vær forsiktig - innholdet kan være varmt selv om beholderen er kald`
    },
    {
      id: 'mat-6-3-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du IKKE gjøre hvis det brenner i en stekepanne?',
        solution: 'Helle på vann',
        multipleChoiceOptions: [
          { id: 'a', text: 'Legge lokk på pannen', isCorrect: false },
          { id: 'b', text: 'Slå av varmen', isCorrect: false },
          { id: 'c', text: 'Helle på vann', isCorrect: true },
          { id: 'd', text: 'Holde seg rolig', isCorrect: false }
        ],
        hints: ['Vann og brennende olje er en farlig kombinasjon'],
      }
    },
    {
      id: 'mat-6-3-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-2-ex-2',
        number: '3.2.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvordan bør du holde maten når du kutter (klogrep)?',
        solution: 'Du bør holde maten med fingertuppene bøyd inn mot håndflaten, som en klo. Da treffer knivbladet knokene dine i stedet for fingertuppene hvis den glir.',
        hints: ['Fingertuppene skal være trukket tilbake'],
      }
    },
    {
      id: 'mat-6-3-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-2-ex-3',
        number: '3.2.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvorfor bør pannehandtak snus innover?',
        solution: 'Pannehandtak bør snus innover for å hindre at noen går borti handtaket og velter pannen. Det er spesielt viktig når det er barn i nærheten.',
        hints: ['Tenk på hva som kan skje hvis noen går forbi'],
      }
    },
    {
      id: 'mat-6-3-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-2-ex-4',
        number: '3.2.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre ved en brannskade?',
        solution: 'Kjøl med lunkent, rennende vann i 20 minutter',
        multipleChoiceOptions: [
          { id: 'a', text: 'Ha på smør', isCorrect: false },
          { id: 'b', text: 'Kjøl med lunkent, rennende vann i 20 minutter', isCorrect: true },
          { id: 'c', text: 'Dekk med plaster med en gang', isCorrect: false },
          { id: 'd', text: 'Ikke gjør noe', isCorrect: false }
        ],
        hints: ['Vann er det viktigste førstehjelpsmiddelet'],
      }
    },
    {
      id: 'mat-6-3-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-3-2-ex-5',
        number: '3.2.5',
        type: 'practical',
        difficulty: 'medium',
        task: 'Lag en sikkerhetsjekkliste for kjøkkenet hjemme.',
        subTasks: [
          'Sjekk at kniver oppbevares trygt',
          'Sjekk at brannslukker/slukketeppe finnes',
          'Se etter løse ledninger',
          'Lag en plan for hva familien gjør ved brann'
        ],
        solution: 'Sjekklisten skal dekke kniver, brannutstyr, elektrisk sikkerhet og rømningsplan.',
        hints: ['Gå rundt i kjøkkenet og se med "sikkerhetøyne"'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 4: MAT OG KULTUR
// ============================================================================

export const CHAPTER_MAT_6_4_1: TextbookChapter = {
  id: 'mat-6-4-1',
  courseId: 'mat-6',
  chapterNumber: '4.1',
  title: 'Norske mattradisjoner',
  description: 'Utforsk tradisjonell norsk mat og regionale spesialiteter.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utforske og lage tradisjonsmat'],
  content: [
    {
      id: 'mat-6-4-1-intro',
      type: 'text',
      content: `## Norsk matkultur

Norsk mat har blitt formet av naturen, klimaet og historien vår. Kaldt klima og lang kyst har gjort fisk, kjøtt og konservering viktig.

### Hva kjennetegner norsk tradisjonell mat?
- Mye fisk og sjømat
- Konservering (tørking, røyking, sylting)
- Grove kornprodukter
- Enkle, naturlige råvarer`
    },
    {
      id: 'mat-6-4-1-text-2',
      type: 'text',
      content: `## Hverdagsmat gjennom tidene

### Grøt og brød:
- Havregrøt, rømmegrøt, risgrøt
- Flatbrød og lefse
- Grove brød som er typisk norsk

### Fisk:
- Tørrfisk og klippfisk
- Lutefisk (til jul)
- Rakfisk
- Fersk fisk til middag

### Kjøtt:
- Fårikål (nasjonalretten)
- Smalahove
- Pinnekjøtt
- Spekemat`
    },
    {
      id: 'mat-6-4-1-text-3',
      type: 'text',
      content: `## Høytidsmat

### Jul:
- Ribbe (Østlandet)
- Pinnekjøtt (Vestlandet)
- Lutefisk
- Risgrøt med mandelgave
- Julekaker (syv slag!)

### Påske:
- Lammesteik
- Påskeegge
- Appelsin og Kvikk Lunsj (fjelltradisjon)

### 17. mai:
- Pølser i brød
- Is
- Brus

### Andre høytider:
- Fløtegratinerte poteter til nyttår
- Semleboller til fastelavnssøndag`
    },
    {
      id: 'mat-6-4-1-text-4',
      type: 'text',
      content: `## Regionale spesialiteter

### Vestlandet:
- Pinnekjøtt
- Smalahove
- Raspeballer

### Østlandet:
- Ribbe
- Lutefisk
- Lomper

### Trøndelag:
- Sodd
- Rømmegrøt
- Komle/Raspeballer

### Nord-Norge:
- Mølje (torsk med lever og rogn)
- Finnbiff
- Bidos (samisk)`
    },
    {
      id: 'mat-6-4-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva regnes som Norges nasjonalrett?',
        solution: 'Fårikål',
        multipleChoiceOptions: [
          { id: 'a', text: 'Pizza', isCorrect: false },
          { id: 'b', text: 'Fårikål', isCorrect: true },
          { id: 'c', text: 'Sushi', isCorrect: false },
          { id: 'd', text: 'Hamburger', isCorrect: false }
        ],
        hints: ['Det inneholder sau og kål'],
      }
    },
    {
      id: 'mat-6-4-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-1-ex-2',
        number: '4.1.2',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Nevn to måter nordmenn tradisjonelt har konservert mat på.',
        solution: 'Nordmenn har tradisjonelt konservert mat ved tørking (tørrfisk), røyking (røkt laks, spekemat), salting og sylting. Også fermentering (rakfisk) har vært vanlig.',
        hints: ['Hvordan holdt man mat god uten kjøleskap?'],
      }
    },
    {
      id: 'mat-6-4-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-1-ex-3',
        number: '4.1.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Intervju en voksen i familien om hva de spiste til jul da de var barn.',
        subTasks: [
          'Spør hva som ble servert til julaften',
          'Spør om tradisjoner rundt maten',
          'Sammenlign med hva dere spiser i dag',
          'Noter ned svarene'
        ],
        solution: 'Intervjuet skal vise tradisjonell julemat og eventuelle endringer over tid.',
        hints: ['Spør besteforeldre eller andre eldre familiemedlemmer'],
      }
    },
    {
      id: 'mat-6-4-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-1-ex-4',
        number: '4.1.4',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvilken tradisjonell julemat er typisk for Vestlandet?',
        solution: 'Pinnekjøtt er den tradisjonelle julematen på Vestlandet. Det er saltede og tørkede saueribber som dampes over bjørkepinner.',
        hints: ['Det har med sau å gjøre'],
      }
    },
    {
      id: 'mat-6-4-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-1-ex-5',
        number: '4.1.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en tradisjonell norsk rett sammen med en voksen.',
        subTasks: [
          'Velg en tradisjonell rett (f.eks. rømmegrøt, lefser, fårikål)',
          'Finn en oppskrift',
          'Lag retten sammen med en voksen',
          'Smak og vurder resultatet'
        ],
        solution: 'Retten skal lages etter oppskrift med godt resultat.',
        hints: ['Lefser eller rømmegrøt er gode å begynne med'],
      }
    }
  ],
};

export const CHAPTER_MAT_6_4_2: TextbookChapter = {
  id: 'mat-6-4-2',
  courseId: 'mat-6',
  chapterNumber: '4.2',
  title: 'Mat fra andre kulturer',
  description: 'Smak på mat fra ulike deler av verden.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske mat fra ulike kulturer'],
  content: [
    {
      id: 'mat-6-4-2-intro',
      type: 'text',
      content: `## Verdens kjøkken

I dag kan vi smake mat fra hele verden uten å reise! Ulike kulturer har utviklet sin egen matkultur basert på klima, tilgjengelige råvarer og tradisjoner.

### Hvorfor er mat forskjellig i ulike land?
- Ulike råvarer vokser i ulike klimaer
- Religion påvirker hva folk spiser
- Tradisjoner går i arv
- Handel og innvandring sprer matkultur`
    },
    {
      id: 'mat-6-4-2-text-2',
      type: 'text',
      content: `## Matkulturer i verden

### Italia:
- Pizza, pasta, risotto
- Ferske grønnsaker og olivenolje
- Tomatsaus og basilikum
- Parmesan og mozzarella

### Mexico:
- Tacos, burritos, enchiladas
- Bønner, ris og mais
- Chilipepper og koriander
- Guacamole og salsa

### India:
- Curry og dal
- Ris og nan-brød
- Mange vegetariske retter
- Krydder som gurkemeie, spiskummin og garam masala`
    },
    {
      id: 'mat-6-4-2-text-3',
      type: 'text',
      content: `## Flere matkulturer

### Kina/Asia:
- Wok, nudler, ris
- Soyasaus og ingefær
- Dim sum og vårruller
- Spisepinner som bestikk

### Midtøsten:
- Hummus, falafel, kebab
- Pitabrød og flatbrød
- Oliven, fetaost, aubergine
- Krydder som sumak og za'atar

### Japan:
- Sushi og sashimi
- Ramen og udon-nudler
- Miso-suppe
- Fersk fisk og sjømat`
    },
    {
      id: 'mat-6-4-2-text-4',
      type: 'text',
      content: `## Krydder og smak

Ulike kulturer bruker forskjellige krydder som gir maten særpreg.

### Vanlige krydder:
- **Chili** - styrke (Mexico, Thailand, India)
- **Ingefær** - frisk, skarp (Asia)
- **Koriander** - frisk, sitrus (Mexico, Asia)
- **Gurkemeie** - varm, jordaktig (India)
- **Oregano** - urteaktig (Italia, Hellas)
- **Kanel** - søt, varm (Midtøsten, bakverk)

### Krydderblandinger:
- Garam masala (India)
- Ras el hanout (Marokko)
- Herbes de Provence (Frankrike)
- Taco-krydder (Mexico)`
    },
    {
      id: 'mat-6-4-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket land kommer pizza opprinnelig fra?',
        solution: 'Italia',
        multipleChoiceOptions: [
          { id: 'a', text: 'USA', isCorrect: false },
          { id: 'b', text: 'Italia', isCorrect: true },
          { id: 'c', text: 'Mexico', isCorrect: false },
          { id: 'd', text: 'Frankrike', isCorrect: false }
        ],
        hints: ['Tenk på hvor Roma ligger'],
      }
    },
    {
      id: 'mat-6-4-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-2-ex-2',
        number: '4.2.2',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Nevn tre typiske meksikanske retter.',
        solution: 'Tre typiske meksikanske retter er: tacos, burritos og enchiladas. Andre eksempler er quesadilla, nachos og fajitas.',
        hints: ['Tenk på mat du kanskje har spist på mexicansk restaurant'],
      }
    },
    {
      id: 'mat-6-4-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-2-ex-3',
        number: '4.2.3',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en rett fra en annen kultur sammen med en voksen.',
        subTasks: [
          'Velg et land og en rett du vil prøve',
          'Finn en oppskrift',
          'Skaff ingrediensene',
          'Lag retten sammen med en voksen',
          'Skriv ned hvordan det gikk og hva du syntes'
        ],
        solution: 'Retten skal være fra en annen kultur enn norsk, og du skal reflektere over nye smaker og ingredienser.',
        hints: ['Start med noe enkelt som tacos eller wok'],
      }
    },
    {
      id: 'mat-6-4-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-2-ex-4',
        number: '4.2.4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvilket krydder gir indisk mat den gule fargen?',
        solution: 'Gurkemeie gir indisk mat den karakteristiske gule fargen. Det brukes i curry og mange andre indiske retter.',
        hints: ['Det er også kjent som turmeric på engelsk'],
      }
    },
    {
      id: 'mat-6-4-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'mat-6-4-2-ex-5',
        number: '4.2.5',
        type: 'practical',
        difficulty: 'medium',
        task: 'Undersøk hvilken mat noen i klassen spiser hjemme som stammer fra andre kulturer.',
        subTasks: [
          'Snakk med tre klassekamerater',
          'Spør om retter de spiser som kommer fra andre land',
          'Noter ned land, rettnavn og ingredienser',
          'Presenter funnene for klassen eller gruppen'
        ],
        solution: 'Du skal finne eksempler på internasjonale retter som er vanlige i norske hjem.',
        hints: ['Mange vanlige retter har opprinnelse i andre land - taco, pizza, wok...'],
      }
    }
  ],
};

// Eksporter alle kapitler
export const MAT_6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_6_1_1,
  CHAPTER_MAT_6_1_2,
  CHAPTER_MAT_6_1_3,
  CHAPTER_MAT_6_2_1,
  CHAPTER_MAT_6_2_2,
  CHAPTER_MAT_6_3_1,
  CHAPTER_MAT_6_3_2,
  CHAPTER_MAT_6_4_1,
  CHAPTER_MAT_6_4_2,
];
